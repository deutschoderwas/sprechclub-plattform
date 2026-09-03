// Was laeuft gerade? — liest die echte Lage bei Stripe und gibt sie an
// den Schuelerbereich zurueck (Ansicht "Mein Abo" in konto.html).
//
// Warum ueberhaupt: in profiles steht nur tier ('community'/'premium') und
// status. Wann die naechste Abbuchung ist, ob jemand schon gekuendigt hat
// oder ob das Abo pausiert ist, weiss allein Stripe. Ohne diese Zahlen
// stuende in der App eine huebsche Karte ohne Aussage.
//
// Liest nur, aendert nichts. Alles, was Geld bewegt (kuendigen, Karte
// tauschen), laeuft ueber das Stripe-Kundenportal in api/create-portal.js.
// Pausieren bieten wir nicht an, und einen Tarifwechsel auch nicht:
// Premium startet am 1. November, bis dahin fuehrt der Upgrade-Knopf in
// der App auf die Warteliste.
//
// ENV: STRIPE_SECRET_KEY, SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY
import Stripe from 'stripe';
import { createClient } from '@supabase/supabase-js';

const LAEUFT = ['active', 'trialing', 'past_due', 'paused', 'unpaid'];

/* Stripe hat den Periodenwechsel von der Subscription auf die Posten
   verschoben. Beide Stellen pruefen, damit es mit alten wie neuen
   Abos stimmt. */
function periodeBis(sub) {
  if (sub && sub.current_period_end) return sub.current_period_end;
  const it = sub && sub.items && sub.items.data && sub.items.data[0];
  return (it && it.current_period_end) || null;
}

function preisVon(sub) {
  const it = sub && sub.items && sub.items.data && sub.items.data[0];
  const p = it && it.price;
  if (!p) return {};
  const r = p.recurring || {};
  return {
    betrag: p.unit_amount != null ? p.unit_amount : null,
    waehrung: p.currency || 'eur',
    intervall: r.interval || null,
    intervall_anzahl: r.interval_count || 1,
    produkt: null,
    produkt_id: (p.product && typeof p.product === 'string') ? p.product : null
  };
}

/* Den Produktnamen einzeln nachholen. Faellt das aus, steht in der
   App der Tarifname — die Karte funktioniert trotzdem. */
async function produktName(stripe, id) {
  if (!id) return null;
  try { const pr = await stripe.products.retrieve(id); return (pr && pr.name) || null; }
  catch (e) { return null; }
}

/* Von mehreren Abos ist das laufende das interessante; sonst das juengste. */
function bestesAbo(liste) {
  const laufend = liste.filter(s => LAEUFT.indexOf(s.status) >= 0);
  const pool = laufend.length ? laufend : liste;
  return pool.sort((a, b) => (b.created || 0) - (a.created || 0))[0] || null;
}

export default async function handler(req, res) {
  if (!process.env.STRIPE_SECRET_KEY) return res.status(500).json({ error: 'stripe_not_configured' });
  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
  const sb = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_SERVICE_ROLE_KEY);

  try {
    const authHeader = req.headers.authorization || '';
    const token = authHeader.startsWith('Bearer ') ? authHeader.slice(7) : null;
    if (!token) return res.status(401).json({ error: 'not_authenticated' });
    const { data: { user }, error: uErr } = await sb.auth.getUser(token);
    if (uErr || !user) return res.status(401).json({ error: 'not_authenticated' });

    const { data: prof } = await sb.from('profiles')
      .select('stripe_customer_id,email,tier,tier_ab,status,pass_until,credits')
      .eq('id', user.id).maybeSingle();

    const basis = {
      tier: (prof && prof.tier) || '',
      tier_ab: (prof && prof.tier_ab) || null,
      status: (prof && prof.status) || '',
      pass_until: (prof && prof.pass_until) || null,
      guthaben: (prof && prof.credits) || 0
    };

    // Kundennummer holen — oder einmalig ueber die E-Mail finden und merken.
    let customerId = (prof && prof.stripe_customer_id) || null;
    if (!customerId) {
      const email = (prof && prof.email) || user.email;
      if (email) {
        const found = await stripe.customers.list({ email, limit: 1 });
        if (found.data && found.data[0]) {
          customerId = found.data[0].id;
          await sb.from('profiles').update({ stripe_customer_id: customerId }).eq('id', user.id);
        }
      }
    }
    if (!customerId) return res.status(200).json(Object.assign({ abo: null, grund: 'kein_kunde' }, basis));

    const subs = await stripe.subscriptions.list({
      customer: customerId, status: 'all', limit: 20
    });
    const sub = bestesAbo(subs.data || []);
    if (!sub) return res.status(200).json(Object.assign({ abo: null, grund: 'kein_abo' }, basis));

    const pc = sub.pause_collection || null;
    const preis = preisVon(sub);
    preis.produkt = await produktName(stripe, preis.produkt_id);
    delete preis.produkt_id;
    const abo = Object.assign({
      id: sub.id,
      status: sub.status,
      laeuft: LAEUFT.indexOf(sub.status) >= 0,
      kuendigt_zum_ende: !!sub.cancel_at_period_end,
      laeuft_bis: periodeBis(sub),
      endet_am: sub.cancel_at || sub.ended_at || null,
      pausiert: !!pc,
      pause_bis: (pc && pc.resumes_at) || null,
      seit: sub.start_date || sub.created || null
    }, preis);

    /* Kuendigen ist der einzige Weg, den wir bei Stripe anbieten.
       Pausieren gibt es bewusst nicht, und ein Tarifwechsel auch nicht:
       Premium startet erst am 1. November, bis dahin fuehrt der
       Upgrade-Knopf in der App auf die Warteliste. */
    let portal = { kuendigen: true };
    try {
      const cfg = await stripe.billingPortal.configurations.list({ active: true, limit: 1 });
      const f = cfg.data && cfg.data[0] && cfg.data[0].features;
      if (f) portal = { kuendigen: !!(f.subscription_cancel && f.subscription_cancel.enabled) };
    } catch (e) { /* Konfiguration nicht lesbar -> mit der Vorgabe weiter */ }

    return res.status(200).json(Object.assign({ abo, portal }, basis));
  } catch (e) {
    console.error('mein-abo', e);
    return res.status(500).json({ error: String(e.message || e) });
  }
}
