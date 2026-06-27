// Stripe Checkout starten — Abo-Pässe (7 Tage gratis testen) & Einmalkauf (Spar Pass).
// Wird von live.html / index.html aufgerufen: POST { packageId|passId, userId, email }.
// Gibt { url } der Stripe-Checkout-Seite zurück. Nach Zahlung schreibt api/stripe-webhook.js gut.
// Benötigt ENV: STRIPE_SECRET_KEY, (optional) SITE_URL.
import Stripe from 'stripe';

// Server-seitige Paket-Definition (Quelle der Wahrheit für Preise – nie dem Client vertrauen).
const PLANS = {
  testpass:         { abo: true,  stunden: 4,  preis: 79,  label: 'Ab und zu Pass' },
  gelegenheitspass: { abo: true,  stunden: 8,  preis: 139, label: 'Gelegenheitspass' },
  allinclusive:     { abo: true,  stunden: 12, preis: 189, label: 'Profi-Pass' },
  sparpass:         { abo: false, stunden: 30, preis: 399, label: 'Spar Pass' },
};

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'method_not_allowed' });
  if (!process.env.STRIPE_SECRET_KEY) return res.status(500).json({ error: 'stripe_not_configured' });

  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
  const site = process.env.SITE_URL || 'https://www.deutschoderwas-club.de';

  try {
    const { packageId, passId, userId, email } = (req.body || {});
    const id = passId || packageId;
    const plan = PLANS[id];
    if (!plan) return res.status(400).json({ error: 'unknown_plan' });
    if (!userId) return res.status(400).json({ error: 'no_user' });

    const common = {
      customer_email: email || undefined,
      client_reference_id: userId,
      success_url: `${site}/konto.html?bezahlt=1`,
      cancel_url: `${site}/#preise`,
      allow_promotion_codes: true,
    };

    let session;
    if (plan.abo) {
      // Abo mit 7 Tagen kostenloser Testphase (in den 7 Tagen jederzeit kündbar)
      session = await stripe.checkout.sessions.create({
        ...common,
        mode: 'subscription',
        line_items: [{
          quantity: 1,
          price_data: {
            currency: 'eur',
            unit_amount: plan.preis * 100,
            recurring: { interval: 'month' },
            product_data: { name: `deutschoderwas Club – ${plan.label}`, description: `${plan.stunden} LIVE-Stunden pro Monat · Üben 24/7, Amanda & Community inklusive` },
          },
        }],
        subscription_data: {
          trial_period_days: 7,
          metadata: { userId, plan: id, stunden: String(plan.stunden) },
        },
        metadata: { userId, plan: id, stunden: String(plan.stunden), kind: 'abo' },
      });
    } else {
      // Einmalkauf (Spar Pass)
      session = await stripe.checkout.sessions.create({
        ...common,
        mode: 'payment',
        line_items: [{
          quantity: 1,
          price_data: {
            currency: 'eur',
            unit_amount: plan.preis * 100,
            product_data: { name: `deutschoderwas Club – ${plan.label}`, description: `${plan.stunden} LIVE-Stunden` },
          },
        }],
        payment_intent_data: { metadata: { userId, plan: id, credits: String(plan.stunden) } },
        metadata: { userId, plan: id, credits: String(plan.stunden), kind: 'einmal' },
      });
    }

    return res.status(200).json({ url: session.url });
  } catch (e) {
    console.error('create-checkout', e);
    return res.status(500).json({ error: 'checkout_failed', detail: String(e.message || e) });
  }
}
