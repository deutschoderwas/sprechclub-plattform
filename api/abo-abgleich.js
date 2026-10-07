// ============================================================
//  deutschoderwas club — Zugang nur mit gueltigem Abo oder Guthaben
//
//  Julias Regel: Wer sein Abo bei Stripe kuendigt, hat nach Ablauf
//  KEINEN Zugang mehr — auch nicht ueber dieselbe E-Mail-Adresse.
//
//  Warum es diesen Dienst braucht, obwohl es den Webhook gibt:
//  Der Webhook (customer.subscription.deleted) schliesst den Zugang
//  nur, wenn in den Metadaten der Subscription "tier" auf community
//  oder premium steht. Fehlte das Feld — bei Premium Plus, bei alten
//  Paessen, bei einem von Hand in Stripe angelegten Abo — blieb die
//  Person auf "aktiv" und behielt alles. Und wenn der Webhook einmal
//  nicht ankommt, korrigiert das hinterher niemand.
//
//  Dieser Dienst fragt deshalb jede Nacht bei Stripe nach, wie der
//  Stand WIRKLICH ist, und richtet die Plattform danach aus. Er ist
//  die Wahrheit, nicht das Gedaechtnis.
//
//  Geplant mit pg_cron:
//    20 3 * * *  ->  POST /api/abo-abgleich   (nachts um 3:20)
//
//  Zwei Betriebsarten:
//    ?modus=vorschau  (Standard)  nur nachsehen und berichten
//    ?modus=anwenden              tatsaechlich schliessen
//  Die Vorschau aendert garantiert nichts. Sie ist dafuer da, dass
//  man vor dem ersten scharfen Lauf sieht, wen es treffen wuerde.
//
//  Angefasst wird jemand nur, wenn ALLES davon nicht zutrifft:
//    - Admin oder Lehrkraft
//    - Guthaben > 0
//    - pass_until liegt in der Zukunft
//    - eine gebuchte Stunde steht noch bevor
//    - bei Stripe laeuft ein Abo (active, trialing, past_due)
//  past_due zaehlt bewusst als gueltig: da hat Stripe die Zahlung
//  nur noch nicht durchbekommen und versucht es weiter. Erst wenn
//  Stripe aufgibt, wird aus past_due canceled — dann greift es hier.
//
//  Jede Aenderung steht hinterher in zugang_log, mit Vorher/Nachher.
// ============================================================
import { createClient } from '@supabase/supabase-js';
import Stripe from 'stripe';

const KARENZ_TAGE = Number(process.env.ZUGANG_KARENZ_TAGE || 0);
const LAEUFT = ['active', 'trialing', 'past_due'];

export default async function handler(req, res) {
  if (!process.env.SUPABASE_URL || !process.env.SUPABASE_SERVICE_ROLE_KEY) {
    return res.status(500).json({ error: 'supabase_env_missing' });
  }
  if (!process.env.STRIPE_SECRET_KEY) {
    return res.status(200).json({ ok: false, grund: 'STRIPE_SECRET_KEY fehlt' });
  }

  const sb = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_SERVICE_ROLE_KEY);
  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

  const modus = String((req.query && req.query.modus) || (req.body && req.body.modus) || 'vorschau');
  const anwenden = modus === 'anwenden';
  const jetzt = Date.now();
  const grenze = new Date(jetzt - KARENZ_TAGE * 86400000).toISOString();

  /* Nur wer gerade Zugang HAT, ist hier interessant. Wer schon
     inaktiv oder beendet ist, muss nicht nochmal geschlossen werden. */
  const { data: leute, error } = await sb.from('profiles')
    .select('id,email,name,tier,status,credits,pass_until,stripe_customer_id,is_admin,is_teacher')
    .in('status', ['aktiv', 'urlaub'])
    .limit(2000);
  if (error) return res.status(500).json({ error: 'profile_nicht_lesbar', detail: error.message });

  const kandidaten = (leute || []).filter(p => !p.is_admin && !p.is_teacher);

  /* Gebuchte Stunden in der Zukunft — ein Aufruf statt einer Abfrage
     pro Person. Wer eine bezahlte Stunde vor sich hat, behaelt den
     Zugang, egal was Stripe sagt. */
  const gebucht = new Set();
  try {
    const { data: bk } = await sb.from('bookings')
      .select('user_id, classes!inner(starts_at)')
      .eq('status', 'booked')
      .gt('classes.starts_at', new Date(jetzt).toISOString())
      .limit(2000);
    (bk || []).forEach(b => gebucht.add(b.user_id));
  } catch (e) { console.error('buchungen', e && e.message); }

  const bleibt = [];
  const schliessen = [];

  for (const p of kandidaten) {
    let grund = null;

    if ((p.credits || 0) > 0) grund = 'Guthaben: ' + p.credits;
    else if (p.pass_until && p.pass_until > grenze) grund = 'Pass laeuft bis ' + String(p.pass_until).slice(0, 10);
    else if (gebucht.has(p.id)) grund = 'gebuchte Stunde steht noch bevor';

    if (!grund && p.stripe_customer_id) {
      try {
        const liste = await stripe.subscriptions.list({
          customer: p.stripe_customer_id, status: 'all', limit: 20
        });
        const lebt = (liste.data || []).find(s => LAEUFT.includes(s.status));
        if (lebt) grund = 'Abo bei Stripe: ' + lebt.status;
      } catch (e) {
        /* Wenn Stripe gerade nicht antwortet, wird NICHT geschlossen.
           Lieber einen Tag zu lange Zugang als jemanden faelschlich
           aussperren, weil eine Anfrage schiefging. */
        bleibt.push({ email: p.email, grund: 'Stripe nicht erreichbar — unangetastet' });
        continue;
      }
    }

    if (grund) { bleibt.push({ email: p.email, grund }); continue; }

    schliessen.push({
      id: p.id, email: p.email, name: p.name,
      vorher: { tier: p.tier, status: p.status, credits: p.credits, pass_until: p.pass_until },
      hatStripe: !!p.stripe_customer_id
    });
  }

  let geschlossen = 0;
  const fehler = [];

  if (anwenden) {
    for (const k of schliessen) {
      const nachher = { status: 'inaktiv', tier: null, credits: 0, pass_until: new Date(jetzt).toISOString() };
      const { error: uErr } = await sb.from('profiles').update(nachher).eq('id', k.id);
      if (uErr) { fehler.push({ email: k.email, detail: uErr.message }); continue; }
      geschlossen++;
      await sb.from('zugang_log').insert({
        user_id: k.id, email: k.email, aktion: 'zugang_geschlossen',
        grund: k.hatStripe ? 'kein laufendes Abo bei Stripe, kein Guthaben, kein Pass'
                           : 'kein Abo hinterlegt, kein Guthaben, kein Pass',
        vorher: k.vorher, nachher
      });
    }
  }

  return res.status(200).json({
    ok: true,
    modus,
    geprueft: kandidaten.length,
    behalten: bleibt.length,
    zu_schliessen: schliessen.length,
    geschlossen,
    fehler,
    /* Im Vorschau-Modus die Namen mitgeben, damit man vor dem
       scharfen Lauf sieht, wen es trifft. */
    liste: anwenden ? undefined : schliessen.map(k => ({
      email: k.email, name: k.name, tier: k.vorher.tier,
      pass_until: k.vorher.pass_until, credits: k.vorher.credits, stripe: k.hatStripe
    }))
  });
}
