// Erstellt eine Stripe-Checkout-Session für ein Stundenpaket.
// Erwartet POST { packageId, userId, email }
import Stripe from 'stripe';

const PACKAGES = {
  'paket-4':  { name: 'Sprechclub — 4 Stunden',  amount: 7900,  credits: 4 },
  'paket-8':  { name: 'Sprechclub — 8 Stunden',  amount: 13900, credits: 8 },
  'paket-12': { name: 'Sprechclub — 12 Stunden', amount: 18900, credits: 12 },
  'paket-30': { name: 'Sprechclub "fleissig" — 24 + 6 Stunden (3 Monate)',        amount: 39900, credits: 30 },
  'paket-60': { name: 'Sprechclub "am fleissigsten" — 48 + 12 Stunden (6 Monate)', amount: 69900, credits: 60 },
};

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'method_not_allowed' });

  const { packageId, userId, email } = req.body || {};
  const pkg = PACKAGES[packageId];
  if (!pkg || !userId || !email) return res.status(400).json({ error: 'bad_request' });

  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
  const origin = process.env.SITE_URL || `https://${req.headers.host}`;

  const session = await stripe.checkout.sessions.create({
    mode: 'payment',
    customer_email: email,
    line_items: [{
      price_data: {
        currency: 'eur',
        product_data: { name: pkg.name },
        unit_amount: pkg.amount,
      },
      quantity: 1,
    }],
    metadata: { user_id: userId, package_id: packageId, credits: String(pkg.credits) },
    success_url: `${origin}/konto.html?kauf=ok`,
    cancel_url: `${origin}/index.html#pakete`,
  });

  return res.status(200).json({ url: session.url });
}
