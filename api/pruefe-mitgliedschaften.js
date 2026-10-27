// ============================================================
// pruefe-mitgliedschaften.js — gleicht die Mitgliedschaften mit Stripe ab.
//
// Warum es das gibt: Wer die Mitgliedschaft kauft, BEVOR er ein Konto
// hat, landet in pending_purchases und bekommt tier + status erst bei
// der Registrierung. Dabei wird die Stripe-Kundennummer nicht ins
// Profil geschrieben, und in der Stripe-Subscription steht keine
// userId. Kündigt so jemand später, kommt zwar der Webhook
// customer.subscription.deleted an — er findet aber niemanden und tut
// nichts. Die Person bliebe auf „aktiv" und behielte den Zugang.
//
// Von zwölf Community-Mitgliedern hatten elf keine Kundennummer im
// Profil. Genau die wären beim Kündigen durchgerutscht.
//
// Was dieser Job macht, jede Nacht:
//   1. Alle Profile mit tier (community, premium, premium_plus) holen.
//   2. Stripe-Kunde bestimmen — über die gespeicherte Kundennummer,
//      sonst über die E-Mail. Gefundene Nummer wird nachgetragen.
//   3. Abos des Kunden ansehen.
//   4. Läuft ein Abo (active, trialing, past_due), soll der Status
//      aktiv sein; gibt es keins mehr, wird auf inaktiv gesetzt.
//   5. In die laufende Subscription die userId nachtragen, damit der
//      Webhook beim nächsten Mal von allein greift.
//   6. Bei Änderungen oder offenen Fragen eine kurze Mail an Julia.
//
// Aufruf: /api/pruefe-mitgliedschaften  (aus api/daily.js)
// Von Hand: mit ?trocken=1 läuft er, ohne etwas zu ändern.
// ============================================================
import Stripe from 'stripe';
import { createClient } from '@supabase/supabase-js';
import { abschiedHtml, abschiedBetreff, abschiedDatum } from './_abschied-mail.js';

const TIERS = ['community', 'premium', 'premiumplus', 'premium_plus'];
// 'premiumplus' heisst die Stufe im Checkout, 'premium_plus' stand an
// aelteren Stellen. Beide pruefen, sonst faellt der erste Premium-Plus-
// Gast durch den naechtlichen Abgleich und behaelt den Zugang ewig.

// Wie lange darf ein alter Schueler ohne Guthaben noch im aktiven
// Bestand stehen, bevor er ins Archiv rutscht? Der Zugang ist sofort zu
// (das entscheidet has_full_access in der Datenbank) — diese Frist
// betrifft nur das Verschieben ins Archiv, damit niemand ueber Nacht
// aus Julias Listen verschwindet, nur weil gerade die Stunden alle sind.
const ARCHIV_NACH_TAGEN = 14;
/* Julia, 22.10.2026: "bei denen Die Zahlung storniert wurde und nicht
   durchgegangen ist bitte diesen Leuten KEINEN Zugang geben ... Sobald
   eine Zahlung nicht durchgeht oder etwas da ist dann bitte nicht
   durchgehen."

   Darum steht 'past_due' hier nicht mehr drin. Vorher galt: Zahlung
   hakt, Abo lebt noch, Zugang bleibt. Ab jetzt zaehlt nur, ob das Geld
   da ist. Faellt eine Abbuchung aus, setzt Stripe das Abo auf
   'past_due', der naechtliche Lauf sperrt am naechsten Morgen.

   Das ist bewusst streng. Geht die Zahlung beim Wiederholungsversuch
   doch noch durch, steht das Abo wieder auf 'active' und derselbe Lauf
   macht den Zugang von allein wieder auf (siehe bericht.entsperrt) —
   niemand muss von Hand nachhelfen. */
const LAEUFT = ['active', 'trialing'];

/* Ein Abo, das nie zustande kam. Stripe legt die Subscription beim
   Kaufversuch an und verwirft sie nach 23 Stunden, wenn die erste
   Zahlung nicht durchgeht ('incomplete' -> 'incomplete_expired').
   Kommerziell hat es nie existiert, und es darf vor allem nicht als
   "das Abo dieses Kunden" ins Profil geschrieben werden. */
const NIE_ZUSTANDE = ['incomplete', 'incomplete_expired'];

function periodeEnde(s) {
  const e = s && (s.current_period_end
    || (s.items && s.items.data && s.items.data[0] && s.items.data[0].current_period_end));
  return e ? e * 1000 : null;
}

/* Gekuendigt, aber bis zum Periodenende bezahlt — der Zugang bleibt.
   Julia am 18.10.2026 ueber eine Jahreskundin, die gekuendigt hat:
   "sie hat ja trotzdem den Zugang bis zum 01.11.2027".

   Wer zum Periodenende kuendigt, steht bei Stripe weiter auf 'active'
   und faellt unter LAEUFT. Wer dagegen sofort kuendigt, steht sofort
   auf 'canceled' — und genau der wurde hier bisher behandelt, als
   haette er nie bezahlt. Bei einem Jahresabo heisst das: bis zu elf
   bezahlte Monate weggenommen, ueber Nacht und ohne Nachfrage.
   Derselbe Gedanke steckt schon im Webhook (nochGueltig in
   api/stripe-webhook.js) — hier hat er gefehlt. */
/* Zustaende, in denen das Geld NICHT angekommen ist. Sie duerfen auch
   ueber die Restlaufzeit keinen Zugang mehr tragen: Bei 'past_due' und
   'unpaid' laeuft die bezahlte Periode zwar formal noch, bezahlt wurde
   sie aber nicht. Ohne diese Liste waere die Aenderung oben wirkungslos
   — ein past_due-Abo waere einfach von LAEUFT nach "klingt aus"
   gerutscht und haette den Zugang behalten. */
const NICHT_BEZAHLT = ['incomplete', 'incomplete_expired', 'past_due', 'unpaid'];

function nochBezahlt(s) {
  if (!s || NICHT_BEZAHLT.includes(s.status)) return false;
  const ende = periodeEnde(s);
  return !!ende && ende > Date.now();
}

export default async function handler(req, res) {
  const geheim = process.env.CRON_SECRET || '';
  const kopf = req.headers['x-intern'] || '';
  const ausAdmin = (req.headers.authorization || '').startsWith('Bearer ');
  if (geheim && kopf !== geheim && !ausAdmin) {
    return res.status(401).json({ ok: false, error: 'nicht erlaubt' });
  }
  if (!process.env.SUPABASE_URL || !process.env.SUPABASE_SERVICE_ROLE_KEY) {
    return res.status(200).json({ ok: false, skipped: 'supabase fehlt' });
  }
  if (!process.env.STRIPE_SECRET_KEY) {
    return res.status(200).json({ ok: false, skipped: 'stripe fehlt' });
  }

  const trocken = String(req.query?.trocken || '') === '1';
  const basisUrl = process.env.SITE_URL || 'https://www.deutschoderwas-club.de';
  const sb = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_SERVICE_ROLE_KEY);
  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

  const { data: leute, error } = await sb
    .from('profiles')
    .select('id,name,email,status,tier,stripe_customer_id,is_admin,is_teacher,pass_until,abo_stripe_status,abo_ende,bezahlt_von,bezahlt_hinweis')
    .in('tier', TIERS);
  if (error) return res.status(500).json({ ok: false, error: error.message });

  const bericht = { geprueft: 0, gesperrt: [], entsperrt: [], gekuendigt_laeuft_aus: [], kundennummer_ergaenzt: [], kundennummer_gewechselt: [], stripe_bild: [], userid_nachgetragen: [], stunden_entfernt: [], unklar: [], ohne_stripe: [], von_hand: [], nachgetragen: [], abschied_gesendet: [], fehler: [] };

  const abschiedListe = [];

  for (const p of leute || []) {
    bericht.geprueft++;
    if (p.is_admin || p.is_teacher) continue;   // Team hat immer Zugang

    /* Von Hand gesetzte Mitgliedschaften gehen Stripe nichts an.
       Julia, 18.10.2026: "Volha hat per Überweisung für ein ganzes Jahr
       bezahlt" und "Arina wird von der Schwester Ekaterina bezahlt".
       Beide haben keine eigene Stripe-Kundennummer. Ohne diese Zeile
       wuerde der Lauf sie unter ihrer E-Mail bei Stripe suchen, nichts
       finden und sie Nacht fuer Nacht als Zweifelsfall melden — oder,
       faende er zufaellig einen alten Kunden ohne Abo, sogar zusperren.
       Sie werden weiter unten in Schritt 4d eigens behandelt. */
    if (p.abo_stripe_status === 'von_hand' || p.bezahlt_von) {
      bericht.von_hand.push({ name: p.name || p.email, email: p.email, hinweis: p.bezahlt_hinweis || '' });
      continue;
    }

    try {
      // --- 1. Kunde finden
      let kunde = p.stripe_customer_id || null;
      if (!kunde && p.email) {
        const treffer = await stripe.customers.list({ email: p.email, limit: 3 });
        if (treffer.data && treffer.data.length) {
          kunde = treffer.data[0].id;
          if (!trocken) await sb.from('profiles').update({ stripe_customer_id: kunde }).eq('id', p.id);
          bericht.kundennummer_ergaenzt.push(p.name || p.email);
        }
      }
      if (!kunde) {
        // Kein Kunde bei Stripe: von Hand eingetragen oder mit anderer
        // Adresse bezahlt. Nichts ändern — das muss ein Mensch ansehen.
        bericht.ohne_stripe.push({ name: p.name || p.email, email: p.email, status: p.status });
        continue;
      }

      // --- 2. Abos ansehen
      let subs = await stripe.subscriptions.list({ customer: kunde, status: 'all', limit: 10 });
      let alle = (subs.data || []).filter(s => !NIE_ZUSTANDE.includes(s.status));
      let laufend = alle.filter(s => LAEUFT.includes(s.status));
      /* Gekuendigt, Periode laeuft aber noch: zaehlt als Zugang. */
      let ausklingend = alle.filter(s => !LAEUFT.includes(s.status) && nochBezahlt(s));
      let hatAbo = laufend.length > 0 || ausklingend.length > 0;

      /* --- 2b. Eine zweite Kundennummer bei Stripe ----------------
         Stripe legt pro Kauf einen Kunden an, wenn der Kauf nicht
         erkennbar zu einem vorhandenen gehoert. Wer also ein zweites
         Mal kauft — nach einer Kuendigung, ueber einen anderen Weg,
         mit einem anderen Browser — kann bei Stripe zweimal stehen.
         Im Profil steht aber nur eine Nummer, und zwar die alte.

         Dieser Lauf hat dann genau die alte angesehen, dort nur das
         gekuendigte Abo gefunden und den Zugang zugemacht, waehrend das
         bezahlte Abo unter der zweiten Nummer weiterlief.

         Dmitry Kropotov, 27.10.2026: Kauf am 06.10., erste Abbuchung am
         01.12. — der Lauf sah nur sein altes Abo bis 26.10. und hat ihn
         um 06:00 geschlossen. Julia: "er hat nicht gekuendigt". Bei
         Toma stand am 17.10. derselbe Verdacht im Hinweisfeld.

         Also: bevor hier jemand zugemacht wird, erst unter seiner
         E-Mail nach weiteren Kundennummern sehen. Findet sich dort ein
         laufendes oder ein noch bezahltes Abo, gilt dieses — und die
         Nummer wird im Profil berichtigt, damit die Frage nicht jede
         Nacht neu gestellt wird. */
      if (!hatAbo && p.email) {
        let weitere = { data: [] };
        try { weitere = await stripe.customers.list({ email: p.email, limit: 10 }); } catch (e) {}
        for (const k of (weitere.data || [])) {
          if (!k || !k.id || k.id === kunde) continue;
          let zweit;
          try { zweit = await stripe.subscriptions.list({ customer: k.id, status: 'all', limit: 10 }); }
          catch (e) { continue; }
          const alle2 = (zweit.data || []).filter(s => !NIE_ZUSTANDE.includes(s.status));
          const laufend2 = alle2.filter(s => LAEUFT.includes(s.status));
          const ausklingend2 = alle2.filter(s => !LAEUFT.includes(s.status) && nochBezahlt(s));
          if (!laufend2.length && !ausklingend2.length) continue;

          subs = zweit; alle = alle2; laufend = laufend2; ausklingend = ausklingend2; hatAbo = true;
          if (!trocken) await sb.from('profiles').update({ stripe_customer_id: k.id }).eq('id', p.id);
          bericht.kundennummer_gewechselt.push({
            name: p.name || p.email, email: p.email, von: kunde, nach: k.id,
            abo: (laufend2[0] || ausklingend2[0]).status,
          });
          kunde = k.id;
          break;
        }
      }

      /* Probelauf: wenn trotzdem kein Abo da ist, zeigen was Stripe
         wirklich hat. Sonst steht im Bericht nur "wird zugemacht" und
         man muss sich bei Stripe durchklicken, um zu sehen, warum. */
      if (trocken && !hatAbo) {
        bericht.stripe_bild.push({
          name: p.name || p.email, email: p.email, kunde,
          abos: (subs.data || []).map(s => ({
            status: s.status,
            bis: periodeEnde(s) ? new Date(periodeEnde(s)).toISOString().slice(0, 10) : null,
            kuendigt_zum_ende: !!s.cancel_at_period_end,
            gekuendigt_am: s.canceled_at ? new Date(s.canceled_at * 1000).toISOString().slice(0, 10) : null,
          })),
        });
      }

      // --- 3. userId nachtragen, damit der Webhook künftig greift
      //        und die irrefuehrende Stundenzahl entfernen
      for (const s of laufend) {
        const mdFehlt   = !s.metadata || !s.metadata.userId;
        /* Julia, 18.10.2026, mit einem Bildschirmfoto aus Stripe: "warum
           8 Stunden???? Wir haben keine Abos mehr mit 8 Stunden. Wir
           haben nur Unlimited Premium."

           Neue Kaeufe tragen die Zahl seit heute nicht mehr ein
           (api/create-checkout.js). Die 31 Abos, die es schon gibt,
           tragen sie aber weiter — und Julia sieht sie jedes Mal, wenn
           sie eine Zahlung aufmacht. Bei Stripe loescht ein leerer
           String einen Metadaten-Schluessel; genau das passiert hier.
           Die alten Stundenpaesse behalten ihre Zahl, dort ist sie
           echt. */
        const stundenWeg = !!(p.tier && s.metadata && s.metadata.stunden);
        if (mdFehlt || stundenWeg) {
          if (!trocken) {
            const patch = { ...(s.metadata || {}) };
            if (mdFehlt)   { patch.userId = p.id; patch.tier = p.tier; }
            if (stundenWeg) patch.stunden = '';     // leerer String = Schluessel loeschen
            await stripe.subscriptions.update(s.id, { metadata: patch });
          }
          if (mdFehlt)    bericht.userid_nachgetragen.push(p.name || p.email);
          if (stundenWeg) (bericht.stunden_entfernt = bericht.stunden_entfernt || []).push(p.name || p.email);
        }
      }

      /* --- 3b. Das Abo ins Profil schreiben ------------------------
         Bis zum 13.10.2026 stand nirgends, von wann bis wann ein Abo
         laeuft und ob gekuendigt wurde — das lag nur bei Stripe. Julia
         konnte in der Schuelerliste also nicht sehen, wer wann
         auslaeuft. Jetzt steht es im Profil und wird hier jede Nacht
         aufgefrischt. */
      /* Welches Abo ins Profil gespiegelt wird, in dieser Reihenfolge:
         ein laufendes, sonst ein gekuendigtes mit bezahlter Restzeit,
         sonst irgendein echtes. Nie ein verworfener Kaufversuch — der
         hat am 17.10.2026 bei einer Kundin die falschen Daten ins
         Profil geschrieben (Periode bis 03.10.2027 statt bis zum Ende
         ihres echten Jahresabos) und sie Nacht fuer Nacht zum
         Abschalten vorgemerkt, obwohl sie bezahlt hatte. */
      /* Frueher stand hier als letzter Ausweg noch (subs.data||[])[0] —
         also notfalls ein verworfener Kaufversuch. Genau das hat bei
         Toma am 17.10.2026 eine Jahreslaufzeit bis 03.10.2027 ins
         Profil geschrieben, die es nie gab, und Julia sah im Admin ein
         gekuendigtes Jahresabo statt ihrer echten Zahlung. Lieber gar
         keine Angabe als eine erfundene. */
      const jungstes = (laufend[0] || ausklingend[0] || alle[0]) || null;
      const zeit = (t) => (t ? new Date(t * 1000).toISOString() : null);
      const abo = jungstes ? {
        abo_start:         zeit(jungstes.current_period_start),
        abo_ende:          zeit(jungstes.current_period_end),
        /* cancel_at_period_end heisst: laeuft noch bis zum Periodenende
           und hoert dann auf. canceled_at heisst: schon beendet. */
        abo_gekuendigt_am: zeit(jungstes.canceled_at)
                           || (jungstes.cancel_at_period_end ? new Date().toISOString() : null),
        abo_stripe_status: jungstes.status || null,
        abo_plan:          (jungstes.metadata && jungstes.metadata.plan) || null,
        abo_geprueft_am:   new Date().toISOString(),
      } : {
        /* Nur verworfene Versuche? Dann sagen wir genau das — und
           loeschen die alten Daten, damit im Admin nicht weiter eine
           Laufzeit steht, die nie existiert hat. */
        abo_start:         null,
        abo_ende:          null,
        abo_gekuendigt_am: null,
        abo_plan:          null,
        abo_stripe_status: (subs.data || []).length ? 'nur_verworfene_versuche' : 'kein_abo',
        abo_geprueft_am:   new Date().toISOString(),
      };
      if (!trocken) await sb.from('profiles').update(abo).eq('id', p.id);

      if (jungstes && (jungstes.cancel_at_period_end || ausklingend.includes(jungstes))
          && (LAEUFT.includes(jungstes.status) || nochBezahlt(jungstes))) {
        bericht.gekuendigt_laeuft_aus.push({
          name: p.name || p.email, email: p.email,
          bis: abo.abo_ende ? String(abo.abo_ende).slice(0, 10) : '?',
        });
      }

      // --- 4. Status angleichen
      const sollAktiv = hatAbo;
      /* Hier stand nur === 'aktiv'. Wer in Pause oder Urlaub stand, kam
         also gar nicht erst in die Pruefung — und behielt den Zugang,
         obwohl sein Abo abgelaufen war. has_full_access() in der
         Datenbank laesst 'pause' und 'urlaub' durch, also zaehlt beides
         als "hat Zugang" und muss genauso zugehen. */
      const istAktiv = ['aktiv', 'pause', 'urlaub'].includes(p.status || '');
      if (sollAktiv && !istAktiv) {
        if (!trocken) {
          const { error: aufErr } = await sb.from('profiles').update({ status: 'aktiv' }).eq('id', p.id);
          if (aufErr) {
            bericht.fehler.push({
              name: p.name || p.email,
              fehler: 'konnte nicht entsperren: ' + aufErr.message,
            });
            continue;
          }
        }
        bericht.entsperrt.push({ name: p.name || p.email, vorher: p.status });
      } else if (!sollAktiv && istAktiv
                 && !(alle.length === 0 && (subs.data || []).length > 0)) {
        /* Kein laufendes Abo mehr: Status auf 'gekuendigt' statt
           'inaktiv', damit Julia in der Liste nachvollziehen kann,
           warum jemand weg ist. Und das Abzeichen faellt weg — wer
           nicht mehr zahlt, soll nicht weiter als Premium dastehen.
           Was bleibt: die Materialien und das Material der gebuchten
           Stunden (RLS, siehe ist_altschueler()). */
        if (!trocken) {
          /* Der Fehler wird jetzt angesehen. supabase-js wirft nicht,
             es gibt { error } zurueck — und das stand hier nirgends.
             Folge, gesehen am 17.10.2026 bei einer Premium-Jahreskundin:
             im zugang_log stand zweimal "gekuendigt", im Profil aber
             weiter tier='premium' und status='aktiv'. Das Protokoll
             behauptete etwas, das nie passiert ist, und niemand konnte
             sehen, woran es lag. Geht die Aenderung schief, wird nichts
             protokolliert — stattdessen steht sie im Bericht unter
             'fehler'. */
          const { error: sperrErr } = await sb.from('profiles')
            .update({ status: 'gekuendigt', tier: null, tier_ab: null })
            .eq('id', p.id);
          if (sperrErr) {
            bericht.fehler.push({
              name: p.name || p.email,
              fehler: 'konnte nicht auf gekuendigt setzen: ' + sperrErr.message,
            });
            continue;
          }
          await sb.from('zugang_log').insert({
            user_id: p.id, email: p.email, aktion: 'gekuendigt',
            grund: 'kein laufendes Abo bei Stripe mehr'
              + (abo.abo_ende ? ' (lief bis ' + String(abo.abo_ende).slice(0, 10) + ')' : ''),
            vorher:  { status: p.status, tier: p.tier },
            nachher: { status: 'gekuendigt', tier: null },
          });
        }
        bericht.gesperrt.push({
          name: p.name || p.email,
          email: p.email,
          letztes_abo: (subs.data && subs.data[0] && subs.data[0].status) || 'keins',
          lief_bis: abo.abo_ende ? String(abo.abo_ende).slice(0, 10) : '?',
        });
        /* Erst zumachen, dann verabschieden — und nur, wenn das Zumachen
           auch wirklich geklappt hat. Die Mail geht nach dem Durchlauf
           raus, damit ein haengender Mailserver nicht den ganzen
           Abgleich ausbremst. */
        abschiedListe.push({ id: p.id, name: p.name, email: p.email,
                             tier: p.tier || '', bis: abo.abo_ende || null });
      } else if (!sollAktiv && istAktiv) {
        /* Hier landet, wer bei Stripe NUR verworfene Kaufversuche hat —
           sonst nichts. Das heisst nicht "hat nicht bezahlt", sondern
           "wir sehen es von hier aus nicht".

           Aufgefallen am 18.10.2026 an einer Jahreskundin: zwei
           bezahlte Rechnungen vom 3.10., aber unter ihrer
           Kundennummer liegt nur ein Versuch, den Stripe nach 23
           Stunden verworfen hat. Vermutlich ist das Geld unter einer
           zweiten Kundennummer gelandet. Der Lauf hatte sie deshalb
           Nacht fuer Nacht zum Abschalten vorgemerkt.

           Jemandem den bezahlten Zugang wegzunehmen, weil wir seine
           Zahlung nicht finden, ist der teuerste Fehler, den dieser Job
           machen kann. Also: stehen lassen und Julia sagen. */
        (bericht.unklar = bericht.unklar || []).push({
          name: p.name || p.email,
          email: p.email,
          gefunden: (subs.data || []).map((x) => x.status).join(', '),
          hinweis: 'nur verworfene Kaufversuche gefunden — Zugang bleibt, bitte bei Stripe nachsehen',
        });
      }
    } catch (e) {
      bericht.fehler.push({ name: p.name || p.email, fehler: String((e && e.message) || e) });
    }
  }

  /* --- 4b. Alte Schueler: Zugang nur mit Guthaben
     Die alten Schueler haben kein Abo, sie kaufen Stundenpakete. Fuer sie
     gilt: kein Guthaben, kein Zugang — und nach einer Schonfrist ab ins
     Archiv. Den Zugang selbst sperrt schon has_full_access(); hier geht es
     nur darum, dass der Bestand ehrlich bleibt und niemand als aktives
     Mitglied gezaehlt wird, der seit Wochen nichts mehr hat.
     Ausgenommen: Team, wer noch einen bezahlten Zeitraum (pass_until) hat,
     und wer noch eine gebuchte Stunde vor sich hat. */
  bericht.archiviert = [];
  try {
    const grenze = new Date(Date.now() - ARCHIV_NACH_TAGEN * 86400000).toISOString();
    const { data: alte } = await sb.from('profiles')
      .select('id, name, email, credits, pass_until, is_admin, is_teacher, status, tier')
      .is('tier', null).eq('status', 'aktiv');

    for (const a of (alte || [])) {
      if (a.is_admin || a.is_teacher) continue;
      if ((a.credits || 0) > 0) continue;
      if (a.pass_until && new Date(a.pass_until) > new Date()) continue;

      const { data: offen } = await sb.from('bookings')
        .select('class_id, classes!inner(starts_at)')
        .eq('user_id', a.id).eq('status', 'booked')
        .gt('classes.starts_at', new Date().toISOString()).limit(1);
      if (offen && offen.length) continue;

      // Seit wann steht das Guthaben auf null? Letzte Bewegung im credit_log.
      const { data: letzte } = await sb.from('credit_log')
        .select('created_at').eq('user_id', a.id)
        .order('created_at', { ascending: false }).limit(1);
      const seit = (letzte && letzte[0] && letzte[0].created_at) || null;
      if (seit && seit > grenze) continue;   // Schonfrist laeuft noch

      if (!trocken) {
        await sb.from('profiles').update({ status: 'archiv' }).eq('id', a.id);
        await sb.from('zugang_log').insert({
          user_id: a.id, email: a.email, aktion: 'archiviert',
          grund: 'alter Schueler ohne Guthaben seit ' + (seit ? seit.slice(0, 10) : 'unbekannt'),
          vorher: { status: 'aktiv', credits: a.credits || 0 },
          nachher: { status: 'archiv', quelle: 'pruefe-mitgliedschaften' }
        }).then(() => {}, () => {});   // Protokoll darf den Lauf nicht stoppen
      }
      bericht.archiviert.push({ name: a.name || a.email, email: a.email, letzte_bewegung: seit ? seit.slice(0, 10) : '—' });
    }
  } catch (e) {
    bericht.fehler.push({ name: 'alte Schueler', fehler: String((e && e.message) || e) });
  }

  /* --- 4c. Bezahlt — und trotzdem nichts bekommen -----------------
     Julia am 18.10.2026 ueber Susana: "Warum steht, dass Susana kein
     Abo hat?" Sie hatte bezahlt. Vier Leute waren so.

     Was passiert war: Wer kauft, BEVOR er ein Konto hat, landet in
     pending_purchases. In die geparkte Zeile schrieb
     api/can-register.js nur plan:'stripe_abo' — ohne die Stufe. Die
     Uebergabe bei der Registrierung sucht nach 'premium…' oder
     'community…', fand nichts, vergab nichts und hakte die Zeile
     trotzdem als erledigt ab. Ergebnis: bezahlt, Konto da, keine
     Mitgliedschaft, kein Zugang, keine Kaufbestaetigung — und im Admin
     sahen sie aus wie Leute, die sich nur mal registriert haben.

     can-register.js liest die Stufe jetzt aus Stripe. Dieser Schritt
     hier ist das Netz darunter: Er schaut von der anderen Seite — wer
     hat bei Stripe ein laufendes Abo, bei uns aber keine
     Mitgliedschaft? — und traegt es nach. Damit faellt auch jede
     kuenftige Variante dieses Fehlers innerhalb einer Nacht auf.

     Die Schleife oben kann das nicht finden: sie laedt nur Profile,
     die schon ein tier haben. Genau deshalb blieb es einen Tag lang
     unsichtbar. */
  bericht.nachgetragen = [];
  try {
    /* Nicht nach stripe_customer_id filtern: von den vier Betroffenen
       am 18.10.2026 hatten DREI gar keine im Profil — can-register.js
       traegt sie nur nach, wenn es den Kunden selbst gefunden hat.
       Haetten wir hier auf die Kundennummer bestanden, waere das Netz
       an genau den Leuten vorbeigegangen, fuer die es gebaut wurde.
       Es sind eine Handvoll Profile; die Suche ueber die E-Mail kostet
       nichts. */
    const { data: ohne } = await sb.from('profiles')
      .select('id,name,email,status,tier,stripe_customer_id,is_admin,is_teacher')
      .is('tier', null)
      .in('status', ['registriert', 'probeschuler']);

    for (const o of (ohne || [])) {
      if (o.is_admin || o.is_teacher) continue;
      try {
        let kunde = o.stripe_customer_id || null;
        if (!kunde && o.email) {
          const treffer = await stripe.customers.list({ email: o.email, limit: 3 });
          kunde = (treffer.data && treffer.data[0] && treffer.data[0].id) || null;
          if (kunde && !trocken) await sb.from('profiles').update({ stripe_customer_id: kunde }).eq('id', o.id);
        }
        if (!kunde) continue;
        const subs = await stripe.subscriptions.list({ customer: kunde, status: 'all', limit: 10 });
        const echt = (subs.data || []).filter(x => !NIE_ZUSTANDE.includes(x.status));
        const lebt = echt.find(x => LAEUFT.includes(x.status)) || echt.find(nochBezahlt);
        if (!lebt) continue;

        /* Welche Stufe? Erst die Metadaten des Abos, dann der Name des
           Preises. Raten wir nicht — lieber melden. */
        const md = lebt.metadata || {};
        let stufe = String(md.tier || '').toLowerCase();
        if (!stufe) {
          const pr = lebt.items && lebt.items.data && lebt.items.data[0] && lebt.items.data[0].price;
          const txt = String((pr && (pr.nickname || pr.lookup_key)) || md.plan || '').toLowerCase();
          if (txt.includes('premiumplus') || txt.startsWith('pp_')) stufe = 'premiumplus';
          else if (txt.includes('premium')) stufe = 'premium';
          else if (txt.includes('community')) stufe = 'community';
        }
        if (!['community', 'premium', 'premiumplus', 'premium_plus'].includes(stufe)) {
          bericht.unklar.push({
            name: o.name || o.email, email: o.email,
            gefunden: echt.map(x => x.status).join(', '),
            hinweis: 'hat bezahlt, aber die Stufe steht nirgends — bitte von Hand setzen',
          });
          continue;
        }

        /* Premium startet am 1. November, Premium Plus am 1. Februar —
           dieselbe Regel wie in apply_pending_purchases(). pass_until
           oeffnet die Lernplattform sofort; gebucht wird ueber tier_ab. */
        const start = stufe === 'premium' && Date.now() < Date.parse('2026-11-01T00:00:00+01:00')
          ? '2026-11-01'
          : (stufe === 'premiumplus' && Date.now() < Date.parse('2027-02-01T00:00:00+01:00') ? '2027-02-01' : null);
        const bis = new Date(Math.max(Date.now(), start ? Date.parse(start + 'T00:00:00+01:00') : Date.now()) + 31 * 86400000);

        if (!trocken) {
          /* Auch die Abo-Daten mitschreiben. Sonst stehen die
             Nachgetragenen im Admin ohne Laufzeit da — Julia, 18.10.2026:
             "haben alle, die ein Abo haben, auch Zugang? sind sie bei uns
             im Admin-Bereich, sodass ich das nachverfolgen kann?" Vier
             Leute standen genau so da: Mitgliedschaft ja, Laufzeit "—". */
          const z = (t) => (t ? new Date(t * 1000).toISOString() : null);
          const { error: nErr } = await sb.from('profiles').update({
            tier: stufe, tier_ab: start, status: 'aktiv', pass_until: bis.toISOString(),
            abo_start:         z(lebt.current_period_start),
            abo_ende:          z(periodeEnde(lebt) ? periodeEnde(lebt) / 1000 : null),
            abo_gekuendigt_am: z(lebt.canceled_at) || (lebt.cancel_at_period_end ? new Date().toISOString() : null),
            abo_stripe_status: lebt.status || null,
            abo_plan:          (lebt.metadata && lebt.metadata.plan) || null,
            abo_geprueft_am:   new Date().toISOString(),
          }).eq('id', o.id);
          if (nErr) { bericht.fehler.push({ name: o.name || o.email, fehler: 'nachtragen: ' + nErr.message }); continue; }
          await sb.from('zugang_log').insert({
            user_id: o.id, email: o.email, aktion: 'mitgliedschaft_nachgetragen',
            grund: 'bei Stripe laeuft ' + lebt.id + ' (' + lebt.status + '), im Profil fehlte die Mitgliedschaft',
            vorher: { status: o.status, tier: null },
            nachher: { status: 'aktiv', tier: stufe, tier_ab: start },
          }).then(() => {}, () => {});
        }
        /* Julia, 19.10.2026, zu den drei Nachgetragenen: "Welches Abo
           haben sie? Monats- oder Jahresabo?" Stand nicht im Bericht —
           und ohne das kann sie nicht sagen, wann bei ihnen wieder
           abgebucht wird. */
        const nPos   = lebt.items && lebt.items.data && lebt.items.data[0];
        const nPreis = nPos && nPos.price;
        const nWdh   = (nPreis && nPreis.recurring) || {};
        bericht.nachgetragen.push({
          name: o.name || o.email, email: o.email, tier: stufe, abo: lebt.status,
          takt: { month: 'Monatsabo', year: 'Jahresabo', week: 'Wochenabo', day: 'Tagesabo' }[nWdh.interval] || '?',
          plan: (lebt.metadata && lebt.metadata.plan) || (nPreis && (nPreis.nickname || nPreis.lookup_key)) || null,
          preis: (nPreis && nPreis.unit_amount != null)
            ? (nPreis.unit_amount / 100).toFixed(2).replace('.', ',') + ' ' + String(nPreis.currency || 'eur').toUpperCase()
            : null,
          naechste_zahlung: periodeEnde(lebt) ? new Date(periodeEnde(lebt)).toISOString().slice(0, 10) : null,
        });
      } catch (e) {
        bericht.fehler.push({ name: o.name || o.email, fehler: 'nachtragen: ' + String((e && e.message) || e) });
      }
    }
  } catch (e) {
    bericht.fehler.push({ name: 'nachtragen', fehler: String((e && e.message) || e) });
  }

  /* --- 4d. Von Hand bezahlt --------------------------------------
     Julia, 18.10.2026: "Volha hat per Überweisung für ein ganzes Jahr
     bezahlt" und "Arina wird von der Schwester Ekaterina bezahlt
     (Ekaterina hat 2 Abos abgeschlossen auf ihren Namen), Arina hat
     immer Zugang, sobald Ekaterinas Abos weiterlaufen."

     Zwei verschiedene Faelle:
       bezahlt_von gesetzt  -> der Zugang haengt am Abo einer anderen
                               Person. Laeuft deren Abo, laeuft auch
                               dieser; hoert es auf, geht auch dieser zu.
       abo_stripe_status    -> von Hand eingetragen, meist Ueberweisung.
         = 'von_hand'          Niemand macht hier automatisch zu; Julia
                               bekommt rechtzeitig eine Erinnerung. */
  bericht.von_hand_geprueft = [];
  try {
    const { data: hand } = await sb.from('profiles')
      .select('id,name,email,status,tier,pass_until,abo_ende,abo_stripe_status,bezahlt_von,bezahlt_hinweis')
      .or('bezahlt_von.not.is.null,abo_stripe_status.eq.von_hand');

    for (const h of (hand || [])) {
      if (h.bezahlt_von) {
        const { data: zahler } = await sb.from('profiles')
          .select('id,name,email,status,tier,abo_ende,abo_stripe_status')
          .eq('id', h.bezahlt_von).maybeSingle();
        if (!zahler) {
          bericht.fehler.push({ name: h.name || h.email, fehler: 'Zahler-Profil nicht gefunden' });
          continue;
        }
        const zahlerLaeuft = ['aktiv', 'pause', 'urlaub'].includes(zahler.status || '') && !!zahler.tier;
        /* Zugang so weit offen halten, wie der Zahler bezahlt hat, plus
           einen Tag Luft — sonst faellt der Mitfahrer in der Stunde
           zwischen Verlaengerung und naechtlichem Lauf heraus. */
        const ziel = zahlerLaeuft && zahler.abo_ende
          ? new Date(Date.parse(zahler.abo_ende) + 86400000).toISOString() : null;
        const willStatus = zahlerLaeuft ? 'aktiv' : 'gekuendigt';
        const aenderung = {};
        if ((h.status || '') !== willStatus) aenderung.status = willStatus;
        if (!zahlerLaeuft) { aenderung.tier = null; aenderung.tier_ab = null; }
        else if (ziel && (!h.pass_until || Date.parse(h.pass_until) < Date.parse(ziel))) aenderung.pass_until = ziel;
        if (Object.keys(aenderung).length) {
          if (!trocken) {
            const { error: hErr } = await sb.from('profiles').update(aenderung).eq('id', h.id);
            if (hErr) { bericht.fehler.push({ name: h.name || h.email, fehler: 'mitbezahlt: ' + hErr.message }); continue; }
          }
          if (!zahlerLaeuft) {
            bericht.gesperrt.push({ name: h.name || h.email, email: h.email,
              letztes_abo: 'über ' + (zahler.name || zahler.email), lief_bis: String(zahler.abo_ende || '?').slice(0, 10) });
            abschiedListe.push({ id: h.id, name: h.name, email: h.email, tier: h.tier || '', bis: zahler.abo_ende || null });
          }
        }
        bericht.von_hand_geprueft.push({ name: h.name || h.email, ueber: zahler.name || zahler.email,
          zahler_laeuft: zahlerLaeuft, bis: ziel ? ziel.slice(0, 10) : '—' });
        continue;
      }

      // Ueberweisung & Co: nicht anfassen, nur rechtzeitig erinnern.
      const endet = h.abo_ende ? Date.parse(h.abo_ende) : null;
      const tage = endet ? Math.round((endet - Date.now()) / 86400000) : null;
      bericht.von_hand_geprueft.push({ name: h.name || h.email, hinweis: h.bezahlt_hinweis || '',
        laeuft_bis: h.abo_ende ? String(h.abo_ende).slice(0, 10) : '—', tage_rest: tage });
      if (tage !== null && tage <= 14) {
        (bericht.bald_faellig = bericht.bald_faellig || []).push({
          name: h.name || h.email, email: h.email,
          bis: String(h.abo_ende).slice(0, 10), tage_rest: tage,
          hinweis: h.bezahlt_hinweis || 'von Hand gesetzte Mitgliedschaft',
        });
      }
    }
  } catch (e) {
    bericht.fehler.push({ name: 'von Hand', fehler: String((e && e.message) || e) });
  }

  /* --- 4f. Von der anderen Seite zaehlen --------------------------
     Julia am 18.10.2026, mit einem Link auf ihre Stripe-Zahlungen:
     "schau mal, überprüfe, ob du tatsächlich alle Leute hast in der
     Liste, die bezahlt haben."

     Schritt 4c fragt "wer hat ein Konto, aber keine Mitgliedschaft?".
     Diese Frage hier ist die andere Haelfte: "wer zahlt bei Stripe,
     ohne dass es ihn bei uns ueberhaupt gibt?" — jemand, dessen
     Registrierung nie ankam, oder der mit einer anderen Adresse
     bezahlt hat als der, mit der er sich angemeldet hat. Von hier aus
     kann man diesen Menschen sonst nicht sehen: in profiles steht er
     nicht, und in pending_purchases auch nicht.

     Wir aendern dabei nichts. Eine Zahlung einem Konto zuzuordnen,
     das es nicht gibt, kann nur ein Mensch. Es steht im Bericht, und
     Julia sieht es in ihrer Mail. */
  /* Julia, 18.10.2026: "schau nochmal durch Stripe durch, wie viele
     Menschen haben welches Abo, wir brauchen wirklich eine klare
     Struktur ... Alles muss strukturiert und ordentlich angelegt
     werden, damit nichts verloren geht."

     Der Durchgang durch alle Stripe-Abos war ohnehin da — er zaehlt
     jetzt beim Gehen mit. Eine Zeile pro Sorte (Stufe · Takt · Lage),
     plus die Faelle, die man sonst nie sieht: zwei Abos auf einer
     Kundennummer (Ekaterina zahlt fuer ihre Schwester mit), und
     Kundennummern, die auf dasselbe Profil zeigen. */
  bericht.zahlt_ohne_konto = [];
  const bestand = new Map();          // "Stufe|Takt|Lage" -> Anzahl
  const proKunde = new Map();         // Kundennummer -> [Abo-Kurzform]
  try {
    let seite = await stripe.subscriptions.list({ status: 'all', limit: 100 });
    const gesehen = new Set();
    let runden = 0;
    while (seite && runden < 10) {
      runden++;
      for (const ab of (seite.data || [])) {
        if (NIE_ZUSTANDE.includes(ab.status)) continue;
        /* Nur WIRKLICH laufende Abos. Ein gekuendigtes, das noch bis zum
           Periodenende bezahlt ist, zaehlt ueberall sonst als "hat
           Zugang" — hier nicht: fuer jemanden ohne Konto, der gerade
           ausläuft, legt niemand mehr ein Konto an.

           Julia am 18.10.2026 ueber den einen Fall, den dieser Schritt
           gefunden hatte: "Cristina Mouliota hat ihr Geld zurückbekommen,
           rausschmeißen." Sie hat das Abo bei Stripe gekuendigt — es
           stand danach auf 'canceled', die bezahlte Periode lief aber
           noch, und der Bericht haette sie trotzdem jede Nacht weiter
           gemeldet. Erledigt ist erledigt. */
        if (!LAEUFT.includes(ab.status)) continue;

        const kunde = typeof ab.customer === 'string' ? ab.customer : (ab.customer && ab.customer.id);
        if (!kunde) continue;

        /* --- mitzaehlen, BEVOR wir doppelte Kunden ueberspringen ---
           Sonst faellt genau das Zweitabo unter den Tisch, um das es
           geht. */
        {
          const pos   = ab.items && ab.items.data && ab.items.data[0];
          const preis = pos && pos.price;
          const wdh   = (preis && preis.recurring) || {};
          const md    = ab.metadata || {};
          let stufe = String(md.tier || '').toLowerCase();
          if (!stufe) {
            const txt = String(md.plan || (preis && (preis.nickname || preis.lookup_key)) || '').toLowerCase();
            if (txt.includes('premiumplus') || txt.startsWith('pp_')) stufe = 'premiumplus';
            else if (txt.includes('premium')) stufe = 'premium';
            else if (txt.includes('community')) stufe = 'community';
            else stufe = 'unbekannt';
          }
          const takt = { month: 'Monat', year: 'Jahr', week: 'Woche', day: 'Tag' }[wdh.interval] || '?';
          const lage = ab.cancel_at_period_end ? 'gekündigt, läuft aus' : ab.status;
          const schluessel = stufe + ' · ' + takt + ' · ' + lage;
          bestand.set(schluessel, (bestand.get(schluessel) || 0) + 1);

          const liste = proKunde.get(kunde) || [];
          liste.push(stufe + '/' + takt + '/' + ab.status);
          proKunde.set(kunde, liste);
        }

        if (gesehen.has(kunde)) continue;
        gesehen.add(kunde);

        /* Steht die Kundennummer schon an einem Profil, ist alles gut —
           das ist der Normalfall und kostet keine weitere Abfrage. */
        const { data: mitNummer } = await sb.from('profiles')
          .select('id').eq('stripe_customer_id', kunde).limit(1);
        if (mitNummer && mitNummer.length) continue;

        let mail = null;
        try { const k = await stripe.customers.retrieve(kunde); mail = (k && k.email) || null; }
        catch (e) { /* geloeschter Kunde — dann bleibt nur die Nummer */ }

        if (mail) {
          const { data: perMail } = await sb.from('profiles')
            .select('id').ilike('email', mail).limit(1);
          if (perMail && perMail.length) continue;
          const { data: geparkt } = await sb.from('pending_purchases')
            .select('id').ilike('email', mail).limit(1);
          if (geparkt && geparkt.length) {
            (bericht.zahlt_nicht_angemeldet = bericht.zahlt_nicht_angemeldet || []).push({
              email: mail, abo: ab.status,
              hinweis: 'hat bezahlt, sich aber nie angemeldet — die Einladung liegt vor',
            });
            continue;
          }
        }

        /* Julia, 18.10.2026, zu dem einen Fall, den dieser Schritt
           gefunden hat: "mouliota@hotmail.com (welches Abo hat sie?)".
           Berechtigte Frage — und der Bericht sagte es nicht. Ohne die
           Stufe kann sie das Konto nicht von Hand anlegen, und raten
           soll hier niemand. Also steht jetzt dabei, was die Person
           gekauft hat und was sie zahlt. */
        const pos   = ab.items && ab.items.data && ab.items.data[0];
        const preis = pos && pos.price;
        const wdh   = (preis && preis.recurring) || {};
        const geld  = (preis && preis.unit_amount != null)
          ? (preis.unit_amount / 100).toFixed(2).replace('.', ',') + ' '
            + String(preis.currency || 'eur').toUpperCase()
          : null;
        const md    = ab.metadata || {};

        bericht.zahlt_ohne_konto.push({
          email: mail || '(keine Adresse bei Stripe)',
          kunde, abo: ab.status, abo_id: ab.id,
          tier:  md.tier || null,
          plan:  md.plan || (preis && (preis.nickname || preis.lookup_key)) || null,
          preis: geld,
          takt:  wdh.interval ? ((wdh.interval_count > 1 ? wdh.interval_count + ' ' : '')
                   + ({ month: 'Monat', year: 'Jahr', week: 'Woche', day: 'Tag' }[wdh.interval] || wdh.interval)) : null,
          seit:  ab.start_date ? new Date(ab.start_date * 1000).toISOString().slice(0, 10) : null,
          laeuft_bis: periodeEnde(ab) ? new Date(periodeEnde(ab)).toISOString().slice(0, 10) : null,
          hinweis: 'zahlt bei Stripe, hat bei uns aber weder Konto noch geparkten Kauf',
        });
      }
      if (!seite.has_more) break;
      const letzte = seite.data[seite.data.length - 1];
      seite = await stripe.subscriptions.list({ status: 'all', limit: 100, starting_after: letzte.id });
    }
    /* Die Bestandsaufnahme sortiert ausgeben: Premium vor Community,
       laufend vor auslaufend, und immer mit Zahl. */
    bericht.bestand = [...bestand.entries()]
      .map(([was, anzahl]) => ({ was, anzahl }))
      .sort((a, b) => b.anzahl - a.anzahl || a.was.localeCompare(b.was));
    bericht.abos_gesamt = [...bestand.values()].reduce((x, y) => x + y, 0);

    /* Mehrere Abos auf einer Kundennummer — der Fall, den man sonst nie
       sieht. Julia am 18.10.2026 ueber Ekaterina: "Ekaterina hat 2 Abos
       abgeschlossen auf ihren Namen", eines davon fuer ihre Schwester. */
    bericht.mehrfach_abos = [];
    for (const [kunde, liste] of proKunde.entries()) {
      if (liste.length < 2) continue;
      let wer = null;
      try {
        const { data: prof } = await sb.from('profiles')
          .select('name,email').eq('stripe_customer_id', kunde).maybeSingle();
        if (prof) wer = (prof.name || prof.email);
      } catch (e) { /* Name ist Beiwerk */ }
      bericht.mehrfach_abos.push({ kunde, wer: wer || '(kein Profil mit dieser Kundennummer)', abos: liste });
    }
  } catch (e) {
    bericht.fehler.push({ name: 'gegenzaehlen', fehler: String((e && e.message) || e) });
  }

  /* --- 4e. "Schade, dass du gehst" -------------------------------
     Eine Mail pro Ablauf, nie zwei. Der Eintrag in email_log wird VOR
     dem Senden geschrieben und bei einem Fehlschlag wieder entfernt —
     dieselbe Reihenfolge wie bei der Lead-Erinnerung. Lieber eine Mail
     zu wenig als zweimal "schade, dass du gehst" an denselben Menschen. */
  if (!trocken && process.env.BREVO_API_KEY) {
    for (const a of abschiedListe) {
      try {
        if (!a.email) continue;
        /* Julia, 27.10.2026, zu Dmitry Kropotov: "Was ist da schief
           gegangen??" — Die Kennung bestand nur aus dem Enddatum.
           email_log hat aber ein UNIQUE auf (kind, ref): sobald an
           einem Datum schon jemand verabschiedet worden war, scheiterte
           der Eintrag fuer jeden weiteren mit demselben Enddatum. Der
           Fehler wurde nicht geprueft, die Mail ging trotzdem raus —
           ohne Spur im Log und ohne Schutz vor einer zweiten.
           Jetzt steckt die Person in der Kennung, und wenn der Eintrag
           nicht gelingt, wird auch nicht verschickt. */
        const datumTeil = String(a.bis || 'ohne').slice(0, 10);
        const ref = 'abschied:' + a.id + ':' + datumTeil;
        const { data: schon } = await sb.from('email_log')
          .select('id').eq('user_id', a.id).eq('kind', 'abschied')
          .in('ref', [ref, 'abschied:' + datumTeil]).maybeSingle();
        if (schon) continue;

        const { data: notiz, error: notizErr } = await sb.from('email_log')
          .insert({ user_id: a.id, kind: 'abschied', ref }).select('id').maybeSingle();
        if (notizErr || !notiz) {
          bericht.fehler.push({ name: a.name || a.email,
            fehler: 'Abschiedsmail nicht verschickt, Eintrag ins Mail-Log misslang: '
                  + String((notizErr && notizErr.message) || 'kein Eintrag') });
          continue;
        }

        const r = await fetch('https://api.brevo.com/v3/smtp/email', {
          method: 'POST',
          headers: { 'api-key': process.env.BREVO_API_KEY, 'Content-Type': 'application/json' },
          body: JSON.stringify({
            sender: { name: 'Julia · deutschoderwas', email: process.env.BREVO_SENDER_EMAIL || 'deutschlernen@deutschoderwas.de' },
            replyTo: { email: 'deutschoderwas@gmail.com', name: 'Julia' },
            to: [{ email: a.email, name: a.name || a.email }],
            subject: abschiedBetreff(a.tier),
            htmlContent: abschiedHtml(a.name, a.tier, abschiedDatum(a.bis)),
          }),
        });
        if (!r.ok) {
          if (notiz && notiz.id) await sb.from('email_log').delete().eq('id', notiz.id);
          bericht.fehler.push({ name: a.name || a.email, fehler: 'Abschiedsmail: HTTP ' + r.status });
          continue;
        }
        bericht.abschied_gesendet.push({ name: a.name || a.email, email: a.email, tier: a.tier || '—' });
      } catch (e) {
        bericht.fehler.push({ name: a.name || a.email, fehler: 'Abschiedsmail: ' + String((e && e.message) || e) });
      }
    }
  } else if (trocken) {
    bericht.abschied_gesendet = abschiedListe.map(a => ({ name: a.name || a.email, email: a.email, tier: a.tier || '—', hinweis: 'Probelauf — nichts verschickt' }));
  }

  /* --- 4g. Lebt der Webhook? ----------------------------------------
     Vom 16. bis zum 19.10.2026 war /api/stripe-webhook tot: eine Zeile
     Muell am Dateiende, die Datei liess sich nicht laden. Drei Tage
     lang lief jede Stripe-Meldung ins Leere — keine Kaufbestaetigung,
     keine Mitgliedschaft, kein Parken der ersten Abbuchung. Gemerkt hat
     es niemand, weil niemand hingesehen hat.

     Diese Probe sieht hin. Ein Aufruf ohne gueltige Unterschrift MUSS
     mit 400 abgewiesen werden — dann lebt die Datei und prueft. Kommt
     500 oder 404 zurueck, ist sie kaputt, und Julia erfaehrt es am
     naechsten Morgen statt nach drei Tagen. */
  try {
    const probe = await fetch(basisUrl + '/api/stripe-webhook', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: '{}',
      signal: AbortSignal.timeout(20000),
    });
    bericht.webhook = { http: probe.status, lebt: probe.status === 400 };
    if (probe.status !== 400) {
      bericht.fehler.push({
        name: 'STRIPE-WEBHOOK',
        fehler: 'Der Webhook antwortet mit ' + probe.status + ' statt 400. '
              + 'Solange das so ist, kommt KEIN Kauf mehr bei uns an: keine Bestaetigungsmail, '
              + 'keine Mitgliedschaft, keine Abbuchung zum richtigen Termin.',
      });
    }
  } catch (e) {
    bericht.webhook = { lebt: false, fehler: String((e && e.message) || e) };
    bericht.fehler.push({ name: 'STRIPE-WEBHOOK', fehler: 'nicht erreichbar: ' + String((e && e.message) || e) });
  }

  // --- 5. Julia Bescheid geben, wenn etwas passiert ist
  /* Julia, 18.10.2026: "ich bekomme IMMER EINE Mail, wenn ABO
     abgelaufen ist." Also loest jeder geschlossene Zugang die Mail aus —
     und die neuen Faelle (nachgetragen, bald faellig) genauso. */
  const wichtig = bericht.gesperrt.length || bericht.entsperrt.length || bericht.archiviert.length
    || bericht.fehler.length || (bericht.nachgetragen || []).length || (bericht.bald_faellig || []).length
    || (bericht.zahlt_ohne_konto || []).length
    || (bericht.webhook && bericht.webhook.lebt === false);
  if (wichtig && !trocken && process.env.BREVO_API_KEY) {
    const zeile = (x) => `<li>${x.name}${x.email ? ' (' + x.email + ')' : ''}${x.letztes_abo ? ' — Abo: ' + x.letztes_abo : ''}${x.vorher ? ' — war: ' + x.vorher : ''}</li>`;
    const html =
      ((bericht.webhook && bericht.webhook.lebt === false)
        ? `<p style="background:#FDECEA;border:2px solid #D42A21;border-radius:10px;padding:14px 16px">
             <b style="color:#B3241C;font-size:16px">⛔ Der Stripe-Webhook ist kaputt.</b><br>
             Solange das so ist, kommt kein Kauf mehr bei uns an — keine Bestätigungsmail, keine
             Mitgliedschaft, keine Abbuchung zum richtigen Termin. Das muss heute repariert werden.</p>`
        : '') +
      `<p>Der nächtliche Abgleich mit Stripe hat etwas gefunden.</p>` +
      (bericht.gesperrt.length ? `<p><b>⛔ Zugang abgelaufen — Plattform ist für diese Leute zu:</b></p><ul>${bericht.gesperrt.map(x => `<li>${x.name}${x.email ? ' (' + x.email + ')' : ''} — bezahlt war bis ${x.lief_bis}</li>`).join('')}</ul>` : '') +
      (bericht.entsperrt.length ? `<p><b>Wieder geöffnet (Abo läuft doch):</b></p><ul>${bericht.entsperrt.map(zeile).join('')}</ul>` : '') +
      (bericht.archiviert.length ? `<p><b>Ins Archiv verschoben (alter Schüler ohne Guthaben):</b></p><ul>${bericht.archiviert.map(x => `<li>${x.name} (${x.email}) — letzte Guthaben-Bewegung: ${x.letzte_bewegung}</li>`).join('')}</ul>` : '') +
      (bericht.abschied_gesendet.length ? `<p style="color:#666">„Schade, dass du gehst" ist rausgegangen an: ${bericht.abschied_gesendet.map(x => x.name).join(', ')}.</p>` : '') +
      ((bericht.nachgetragen || []).length ? `<p><b>Bezahlt, hatte aber keine Mitgliedschaft — jetzt nachgetragen:</b></p><ul>${bericht.nachgetragen.map(x => `<li>${x.name} (${x.email}) — ${x.tier}, ${x.takt}${x.preis ? ', ' + x.preis : ''}${x.naechste_zahlung ? ', nächste Zahlung ' + x.naechste_zahlung : ''}</li>`).join('')}</ul>` : '') +
      ((bericht.bald_faellig || []).length ? `<p><b>Von Hand bezahlt und läuft bald ab — bitte selbst nachhalten:</b></p><ul>${bericht.bald_faellig.map(x => `<li>${x.name} (${x.email}) — bis ${x.bis}, noch ${x.tage_rest} Tage. ${x.hinweis}</li>`).join('')}</ul>` : '') +
      ((bericht.zahlt_ohne_konto || []).length ? `<p><b>⚠️ Zahlt bei Stripe, hat bei uns aber kein Konto:</b></p><ul>${bericht.zahlt_ohne_konto.map(x => `<li><b>${x.email}</b> — ${x.tier || x.plan || 'Stufe unbekannt'}${x.preis ? ', ' + x.preis : ''}${x.takt ? ' pro ' + x.takt : ''}${x.seit ? ', seit ' + x.seit : ''}${x.laeuft_bis ? ', bezahlt bis ' + x.laeuft_bis : ''} <span style="color:#888">(${x.abo_id})</span></li>`).join('')}</ul>` : '') +
      ((bericht.zahlt_nicht_angemeldet || []).length ? `<p><b>Hat bezahlt, sich aber nie angemeldet:</b></p><ul>${bericht.zahlt_nicht_angemeldet.map(x => `<li>${x.email} — Abo ${x.abo}</li>`).join('')}</ul>` : '') +
      (bericht.unklar.length ? `<p><b>Unklar — Zugang bleibt offen, bitte bei Stripe nachsehen:</b></p><ul>${bericht.unklar.map(x => `<li>${x.name} (${x.email}) — ${x.hinweis}</li>`).join('')}</ul>` : '') +
      (bericht.ohne_stripe.length ? `<p><b>Ohne Stripe-Kunde — bitte selbst ansehen:</b></p><ul>${bericht.ohne_stripe.map(zeile).join('')}</ul>` : '') +
      (bericht.fehler.length ? `<p><b>Fehler beim Prüfen:</b></p><ul>${bericht.fehler.map(x => `<li>${x.name}: ${x.fehler}</li>`).join('')}</ul>` : '') +
      ((bericht.bestand || []).length ? `<p><b>Bestand bei Stripe — ${bericht.abos_gesamt} Abos:</b></p><ul>${bericht.bestand.map(x => `<li>${x.anzahl}× ${x.was}</li>`).join('')}</ul>` : '') +
      ((bericht.mehrfach_abos || []).length ? `<p><b>Mehrere Abos auf einer Kundennummer:</b></p><ul>${bericht.mehrfach_abos.map(x => `<li>${x.wer} — ${x.abos.join(' + ')}</li>`).join('')}</ul>` : '') +
      `<p style="color:#666;font-size:13px">${bericht.geprueft} Mitgliedschaften geprüft.</p>`;
    try {
      await fetch('https://api.brevo.com/v3/smtp/email', {
        method: 'POST',
        headers: { 'api-key': process.env.BREVO_API_KEY, 'Content-Type': 'application/json' },
        body: JSON.stringify({
          sender: { name: 'deutschoderwas club', email: process.env.BREVO_SENDER_EMAIL || 'deutschlernen@deutschoderwas.de' },
          to: [{ email: process.env.ADMIN_EMAIL || 'deutschoderwas@gmail.com', name: 'Julia' }],
          subject: (bericht.gesperrt.length ? '⛔ ' + bericht.gesperrt.length + ' Zugang abgelaufen' : 'Mitgliedschaften')
            + ((bericht.nachgetragen || []).length ? ' · ' + bericht.nachgetragen.length + ' nachgetragen' : '')
            + (bericht.entsperrt.length ? ' · ' + bericht.entsperrt.length + ' geöffnet' : '')
            + (bericht.archiviert.length ? ' · ' + bericht.archiviert.length + ' archiviert' : '')
            + ((bericht.bald_faellig || []).length ? ' · ' + bericht.bald_faellig.length + ' bald fällig' : ''),
          htmlContent: html
        })
      });
    } catch (e) { bericht.fehler.push({ name: 'mail', fehler: String(e.message || e) }); }
  }

  return res.status(200).json({ ok: true, trocken, ...bericht });
}
