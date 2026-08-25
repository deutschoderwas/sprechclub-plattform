// Stripe-Kundenportal öffnen — Mitglieder verwalten/kündigen hier ihr Abo.
// Wird vom Schülerbereich (konto.html) per POST mit Bearer-Token aufgerufen, gibt { url } zurück.
// Kündigung läuft zum Periodenende; das tatsächliche Abo-Ende meldet Stripe per
// 'customer.subscription.deleted' an api/stripe-webhook.js -> dort verfallen die Stunden auf 0.
// Benötigt ENV: STRIPE_SECRET_KEY, SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY, (optional) SITE_URL.
// Voraussetzung: Stripe-Kundenportal muss im Stripe-Dashboard aktiviert sein.
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

    const session = await stripe.billingPortal.sessions.create({
      customer: customerId,
      return_url: `${site}/konto.html`,
    });
    return res.status(200).json({ url: session.url });
  } catch (e) {
    console.error('create-portal', e);
    return res.status(500).json({ error: String(e.message || e) });
  }
}
