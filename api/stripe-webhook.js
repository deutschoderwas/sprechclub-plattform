// Stripe-Webhook: schaltet nach erfolgreicher Zahlung Guthaben/Kurse/Pass frei.
// In Stripe als Webhook-Endpoint eintragen: https://<domain>/api/stripe-webhook
// Events: checkout.session.completed, invoice.payment_succeeded (Abo-Verlängerung)
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

  const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_SERVICE_ROLE_KEY);

  // ---- Kauf abgeschlossen ----
  if (event.type === 'checkout.session.completed') {
    const session = event.data.object;
    const userId = session.metadata?.user_id;
    const courseId = session.metadata?.course_id;
    const pass = session.metadata?.pass;
    const credits = parseInt(session.metadata?.credits || '0', 10);
    const packageId = session.metadata?.package_id || 'unbekannt';

    // Digitaler Kurs freischalten (idempotent)
    if (userId && courseId) {
      await supabase.rpc('grant_enrollment', { p_user_id: userId, p_course_id: courseId, p_source: 'purchase', p_session: session.id });
    }

    // Abo-Pass (Gelegenheitspass / All-Inclusive): aktivieren (1 Monat + Stunden) — idempotent über session.id
    if (userId && pass) {
      await supabase.rpc('activate_pass', { p_user_id: userId, p_months: 1, p_credits: credits || 12, p_ref: session.id });
    }

    // Stundenpaket / Einzelstunde / Test- / Spar-Pass: Guthaben gutschreiben (idempotent)
    else if (userId && credits > 0) {
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

  // ---- Abo-Verlängerung (monatliche Abbuchung des All-Inclusive-Pass) ----
  if (event.type === 'invoice.payment_succeeded') {
    const invoice = event.data.object;
    // Erste Rechnung wird schon über checkout.session.completed abgehandelt → hier nur Verlängerungen
    if (invoice.billing_reason && invoice.billing_reason !== 'subscription_create') {
      let userId = invoice.subscription_details?.metadata?.user_id;
      let credits = parseInt(invoice.subscription_details?.metadata?.credits || '12', 10);
      // Fallback: Metadaten direkt am Abo nachladen
      if (!userId && invoice.subscription) {
        try {
          const sub = await stripe.subscriptions.retrieve(invoice.subscription);
          userId = sub.metadata?.user_id;
          credits = parseInt(sub.metadata?.credits || '12', 10);
        } catch (_) {}
      }
      if (userId) {
        await supabase.rpc('activate_pass', { p_user_id: userId, p_months: 1, p_credits: credits || 12, p_ref: invoice.id });
      }
    }
  }

  return res.status(200).json({ received: true });
}
