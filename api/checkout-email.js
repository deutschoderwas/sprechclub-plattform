// Gibt die E-Mail einer abgeschlossenen Stripe-Checkout-Session zurück (zum Vorausfüllen der Registrierung).
// GET /api/checkout-email?sid=cs_...  -> { email }
import Stripe from 'stripe';
export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  if (req.method === 'OPTIONS') return res.status(204).end();
  const sid = (req.query && req.query.sid) || (req.body && req.body.sid) || '';
  if (!process.env.STRIPE_SECRET_KEY || !sid) return res.status(200).json({ email: '' });
  try {
    const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
    const ses = await stripe.checkout.sessions.retrieve(String(sid));
    const email = (ses.customer_details && ses.customer_details.email) || ses.customer_email || '';
    return res.status(200).json({ email });
  } catch (e) { return res.status(200).json({ email: '' }); }
}
