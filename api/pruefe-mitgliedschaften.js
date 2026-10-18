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
const LAEUFT = ['active', 'trialing', 'past_due'];   // past_due: Zahlung hakt, Abo lebt noch

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
function nochBezahlt(s) {
  if (!s || NIE_ZUSTANDE.includes(s.status)) return false;
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
  const sb = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_SERVICE_ROLE_KEY);
  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

  const { data: leute, error } = await sb
    .from('profiles')
    .select('id,name,email,status,tier,stripe_customer_id,is_admin,is_teacher')
    .in('tier', TIERS);
  if (error) return res.status(500).json({ ok: false, error: error.message });

  const bericht = { geprueft: 0, gesperrt: [], entsperrt: [], gekuendigt_laeuft_aus: [], kundennummer_ergaenzt: [], userid_nachgetragen: [], ohne_stripe: [], fehler: [] };

  for (const p of leute || []) {
    bericht.geprueft++;
    if (p.is_admin || p.is_teacher) continue;   // Team hat immer Zugang

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
      const subs = await stripe.subscriptions.list({ customer: kunde, status: 'all', limit: 10 });
      const alle = (subs.data || []).filter(s => !NIE_ZUSTANDE.includes(s.status));
      const laufend = alle.filter(s => LAEUFT.includes(s.status));
      /* Gekuendigt, Periode laeuft aber noch: zaehlt als Zugang. */
      const ausklingend = alle.filter(s => !LAEUFT.includes(s.status) && nochBezahlt(s));
      const hatAbo = laufend.length > 0 || ausklingend.length > 0;

      // --- 3. userId nachtragen, damit der Webhook künftig greift
      for (const s of laufend) {
        if (!s.metadata || !s.metadata.userId) {
          if (!trocken) {
            await stripe.subscriptions.update(s.id, {
              metadata: { ...(s.metadata || {}), userId: p.id, tier: p.tier }
            });
          }
          bericht.userid_nachgetragen.push(p.name || p.email);
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
      const jungstes = (laufend[0] || ausklingend[0] || alle[0]
                        || (subs.data || [])[0]) || null;
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
        abo_stripe_status: 'kein_abo',
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
      const istAktiv = (p.status || '') === 'aktiv';
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
      } else if (!sollAktiv && istAktiv) {
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

  // --- 5. Julia Bescheid geben, wenn etwas passiert ist
  const wichtig = bericht.gesperrt.length || bericht.entsperrt.length || bericht.archiviert.length || bericht.fehler.length;
  if (wichtig && !trocken && process.env.BREVO_API_KEY) {
    const zeile = (x) => `<li>${x.name}${x.email ? ' (' + x.email + ')' : ''}${x.letztes_abo ? ' — Abo: ' + x.letztes_abo : ''}${x.vorher ? ' — war: ' + x.vorher : ''}</li>`;
    const html =
      `<p>Der nächtliche Abgleich mit Stripe hat etwas gefunden.</p>` +
      (bericht.gesperrt.length ? `<p><b>Zugang geschlossen (kein laufendes Abo mehr):</b></p><ul>${bericht.gesperrt.map(zeile).join('')}</ul>` : '') +
      (bericht.entsperrt.length ? `<p><b>Wieder geöffnet (Abo läuft doch):</b></p><ul>${bericht.entsperrt.map(zeile).join('')}</ul>` : '') +
      (bericht.archiviert.length ? `<p><b>Ins Archiv verschoben (alter Schüler ohne Guthaben):</b></p><ul>${bericht.archiviert.map(x => `<li>${x.name} (${x.email}) — letzte Guthaben-Bewegung: ${x.letzte_bewegung}</li>`).join('')}</ul>` : '') +
      (bericht.ohne_stripe.length ? `<p><b>Ohne Stripe-Kunde — bitte selbst ansehen:</b></p><ul>${bericht.ohne_stripe.map(zeile).join('')}</ul>` : '') +
      (bericht.fehler.length ? `<p><b>Fehler beim Prüfen:</b></p><ul>${bericht.fehler.map(x => `<li>${x.name}: ${x.fehler}</li>`).join('')}</ul>` : '') +
      `<p style="color:#666;font-size:13px">${bericht.geprueft} Mitgliedschaften geprüft.</p>`;
    try {
      await fetch('https://api.brevo.com/v3/smtp/email', {
        method: 'POST',
        headers: { 'api-key': process.env.BREVO_API_KEY, 'Content-Type': 'application/json' },
        body: JSON.stringify({
          sender: { name: 'deutschoderwas club', email: process.env.BREVO_SENDER_EMAIL || 'deutschlernen@deutschoderwas.de' },
          to: [{ email: process.env.ADMIN_EMAIL || 'deutschoderwas@gmail.com', name: 'Julia' }],
          subject: 'Mitgliedschaften: ' + bericht.gesperrt.length + ' geschlossen, ' + bericht.entsperrt.length + ' geöffnet, ' + bericht.archiviert.length + ' archiviert',
          htmlContent: html
        })
      });
    } catch (e) { bericht.fehler.push({ name: 'mail', fehler: String(e.message || e) }); }
  }

  return res.status(200).json({ ok: true, trocken, ...bericht });
}
