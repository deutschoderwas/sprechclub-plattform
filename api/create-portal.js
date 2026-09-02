// Stripe-Kundenportal öffnen — Mitglieder verwalten/kündigen hier ihr Abo.
// Wird vom Schülerbereich (konto.html) per POST mit Bearer-Token aufgerufen, gibt { url } zurück.
// Kündigung läuft zum Periodenende; das tatsächliche Abo-Ende meldet Stripe per
// 'customer.subscription.deleted' an api/stripe-webhook.js -> dort verfallen die Stunden auf 0.
// Benötigt ENV: STRIPE_SECRET_KEY, SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY, (optional) SITE_URL.
// Voraussetzung: Stripe-Kundenportal muss im Stripe-Dashboard aktiviert sein.
//
// Optional im Rumpf: { flow: 'kuendigen', subscription: 'sub_...' }. Damit landet
// man direkt im Kuendigungsablauf, statt sich erst durchklicken zu muessen.
// Ohne Angabe oeffnet die Uebersicht mit Zahlungsmittel und Rechnungen.
//
// Einen Tarifwechsel bieten wir hier bewusst nicht an: Premium startet erst
// am 1. November, bis dahin fuehrt der Upgrade-Knopf in der App auf die
// Warteliste statt zu Stripe.
import Stripe from 'stripe';
import { createClient } from '@supabase/supabase-js';

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'method_not_allowed' });
  if (!process.env.STRIPE_SECRET_KEY) return res.status(500).json({ error: 'stripe_not_configured' });

  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
  const site = process.env.SITE_URL || 'https://www.deutschoderwas-club.de';
  const sb = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_SERVICE_ROLE_KEY);

  try {
    // Auth: nur der/die eingeloggte Nutzer:in darf das eigene Portal öffnen.
    const authHeader = req.headers.authorization || '';
    const token = authHeader.startsWith('Bearer ') ? authHeader.slice(7) : null;
    if (!token) return res.status(401).json({ error: 'not_authenticated' });
    const { data: { user }, error: uErr } = await sb.auth.getUser(token);
    if (uErr || !user) return res.status(401).json({ error: 'not_authenticated' });

    // Stripe-Kundennummer holen — oder einmalig über die E-Mail in Stripe finden & merken.
    const { data: prof } = await sb.from('profiles').select('stripe_customer_id,email').eq('id', user.id).maybeSingle();
    let customerId = prof?.stripe_customer_id || null;
    if (!customerId) {
      const email = prof?.email || user.email;
      if (email) {
        const found = await stripe.customers.list({ email, limit: 1 });
        if (found.data && found.data[0]) {
          customerId = found.data[0].id;
          await sb.from('profiles').update({ stripe_customer_id: customerId }).eq('id', user.id);
        }
      }
    }
    if (!customerId) return res.status(404).json({ error: 'no_subscription' });

    /* Direktweg gewuenscht? Dann brauchen wir die Abo-Nummer. Kommt sie
       nicht mit, holen wir das laufende Abo selbst. Findet sich keines,
       oeffnen wir einfach die Uebersicht — lieber eine Seite zu weit
       oben als eine Fehlermeldung. */
    const body = (req.body && typeof req.body === 'object') ? req.body : {};
    const flow = String(body.flow || '') === 'kuendigen' ? 'kuendigen' : '';
    let subId = body.subscription || null;
    if (flow === 'kuendigen' && !subId) {
      try {
        const subs = await stripe.subscriptions.list({ customer: customerId, status: 'all', limit: 20 });
        const laufend = (subs.data || []).filter(x => ['active','trialing','past_due','paused','unpaid'].indexOf(x.status) >= 0);
        const pool = laufend.length ? laufend : (subs.data || []);
        const beste = pool.sort((a,b) => (b.created||0)-(a.created||0))[0];
        if (beste) subId = beste.id;
      } catch (e) { /* dann eben die Uebersicht */ }
    }

    const opts = { customer: customerId, return_url: `${site}/konto.html#abo` };
    if (subId && flow === 'kuendigen') {
      opts.flow_data = { type: 'subscription_cancel', subscription_cancel: { subscription: subId } };
    }

    let session;
    try {
      session = await stripe.billingPortal.sessions.create(opts);
    } catch (e) {
      /* Ist der gewuenschte Weg im Portal nicht eingeschaltet, lehnt Stripe
         ihn ab. Dann oeffnen wir die Uebersicht, statt gar nichts zu tun. */
      if (opts.flow_data) {
        delete opts.flow_data;
        session = await stripe.billingPortal.sessions.create(opts);
      } else { throw e; }
    }
    return res.status(200).json({ url: session.url });
  } catch (e) {
    console.error('create-portal', e);
    return res.status(500).json({ error: String(e.message || e) });
  }
}
