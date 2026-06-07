// Stripe-Webhook: schreibt nach erfolgreicher Zahlung das Stundenguthaben gut.
// In Stripe als Webhook-Endpoint eintragen: https://<domain>/api/stripe-webhook
// Event: checkout.session.completed
import Stripe from 'stripe';
import { createClient } from '@supabase/supabase-js';

export const config = { api: { bodyParser: false } };

async function rawBody(req) {
  const chunks = [];
  for await (const chunk of req) chunks.push(chunk);
  return Buffer.concat(chunks);
}

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).end();

  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
  let event;
  try {
    event = stripe.webhooks.constructEvent(
      await rawBody(req),
      req.headers['stripe-signature'],
      process.env.STRIPE_WEBHOOK_SECRET
    );
  } catch (err) {
    return res.status(400).json({ error: `signature: ${err.message}` });
  }

  if (event.type === 'checkout.session.completed') {
    const session = event.data.object;
    const userId = session.metadata?.user_id || session.client_reference_id;
    const credits = parseInt(session.metadata?.credits || '0', 10);
    const packageId = session.metadata?.package_id || 'unbekannt';

    if (userId && credits > 0) {
      const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_SERVICE_ROLE_KEY);

      const { data: existing } = await supabase
        .from('credit_log').select('id').eq('stripe_session_id', session.id).maybeSingle();

      if (!existing) {
        await supabase.from('credit_log').insert({
          user_id: userId, change: credits,
          reason: `purchase:${packageId}`, stripe_session_id: session.id,
        });
        await supabase.rpc('add_credits', { p_user_id: userId, p_amount: credits });
      }
    }
  }

  return res.status(200).json({ received: true });
}
