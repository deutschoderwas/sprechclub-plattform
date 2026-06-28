// Stripe Webhook — schreibt nach erfolgreicher Zahlung Stunden/Pass gut.
// In Stripe als Endpoint anlegen: https://www.deutschoderwas-club.de/api/stripe-webhook
// Events: checkout.session.completed, invoice.paid, customer.subscription.deleted
// Benötigt ENV: STRIPE_SECRET_KEY, STRIPE_WEBHOOK_SECRET, SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY
import Stripe from 'stripe';
import { createClient } from '@supabase/supabase-js';

// Roh-Body für die Signaturprüfung (kein JSON-Parsing durch Vercel)
export const config = { api: { bodyParser: false } };

function rawBody(req) {
  return new Promise((resolve, reject) => {
    const chunks = [];
    req.on('data', (c) => chunks.push(c));
    req.on('end', () => resolve(Buffer.concat(chunks)));
    req.on('error', reject);
  });
}

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).end();
  if (!process.env.STRIPE_SECRET_KEY || !process.env.STRIPE_WEBHOOK_SECRET) {
    return res.status(500).json({ error: 'stripe_not_configured' });
  }
  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

  let event;
  try {
    const raw = await rawBody(req);
    event = stripe.webhooks.constructEvent(raw, req.headers['stripe-signature'], process.env.STRIPE_WEBHOOK_SECRET);
  } catch (e) {
    console.error('webhook signature', e.message);
    return res.status(400).send(`Webhook Error: ${e.message}`);
  }

  const sb = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_SERVICE_ROLE_KEY);

  // Stunden gutschreiben — idempotent über credit_log.stripe_session_id (dedupeKey).
  async function grant(userId, change, reason, dedupeKey, passDays) {
    if (!userId || !change) return;
    const { data: exists } = await sb.from('credit_log').select('id').eq('stripe_session_id', dedupeKey).maybeSingle();
    if (exists) return; // schon verbucht
    await sb.from('credit_log').insert({ user_id: userId, change, reason, stripe_session_id: dedupeKey });
    const { data: p } = await sb.from('profiles').select('credits,pass_until').eq('id', userId).maybeSingle();
    const patch = { credits: (p?.credits || 0) + change };
    if (passDays) {
      const base = (p?.pass_until && new Date(p.pass_until) > new Date()) ? new Date(p.pass_until) : new Date();
      base.setDate(base.getDate() + passDays);
      patch.pass_until = base.toISOString();
    }
    await sb.from('profiles').update(patch).eq('id', userId);
  }

  try {
    if (event.type === 'checkout.session.completed') {
      const s = event.data.object;
      const userId = s.client_reference_id || s.metadata?.userId;
      if (s.mode === 'payment') {
        // Einmalkauf (Spar Pass): volle Stunden sofort
        const credits = parseInt(s.metadata?.credits || '0', 10);
        await grant(userId, credits, 'kauf:' + (s.metadata?.plan || 'paket'), 'cs_' + s.id, null);
      } else if (s.mode === 'subscription') {
        // Probestunde nur EINMAL pro Person: nur gutschreiben, wenn dieser Checkout eine Testphase hatte.
        if (s.metadata?.trial === '1') {
          await grant(userId, 1, 'trial:' + (s.metadata?.plan || 'abo'), 'trial_' + s.id, 7);
        }
        // Ohne Trial (Rückkehrer:in): keine Gratis-Probestunde — die Monatsstunden kommen über invoice.paid.
      }
    } else if (event.type === 'invoice.paid') {
      const inv = event.data.object;
      // Nur echte Zahlungen (die 0-€-Rechnung der Testphase überspringen)
      if ((inv.amount_paid || 0) > 0 && inv.subscription) {
        const sub = await stripe.subscriptions.retrieve(inv.subscription);
        const stunden = parseInt(sub.metadata?.stunden || '0', 10);
        const userId = sub.metadata?.userId;
        const plan = sub.metadata?.plan || 'abo';
        await grant(userId, stunden, 'abo:' + plan, 'inv_' + inv.id, 31);
      }
    }
    // customer.subscription.deleted: nichts nötig — pass_until läuft von selbst aus.
  } catch (e) {
    console.error('webhook handler', e);
    return res.status(500).json({ error: String(e.message || e) }); // Stripe wiederholt dann
  }

  return res.status(200).json({ received: true });
}
