// Sofort voll starten: beendet die laufende 7-Tage-Testphase des eingeloggten Users sofort.
// Stripe bucht dann sofort ab -> invoice.paid (stripe-webhook) schreibt die Monatsstunden gut.
// Die Gratis-Probestunde wurde bereits beim Trial-Start gutgeschrieben -> Ergebnis: Stunden + 1.
// POST mit Authorization: Bearer <Access-Token des Schülers>. Benötigt: STRIPE_SECRET_KEY, SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY.
import Stripe from 'stripe';
import { createClient } from '@supabase/supabase-js';

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'method_not_allowed' });
  if (!process.env.STRIPE_SECRET_KEY) return res.status(500).json({ error: 'stripe_not_configured' });

  const token = (req.headers.authorization || '').replace('Bearer ', '');
  if (!token) return res.status(401).json({ error: 'no_token' });

  const sb = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_SERVICE_ROLE_KEY);

  // Aufrufer identifizieren (nur der/die Schüler:in selbst)
  const { data: { user } = {}, error: uerr } = await sb.auth.getUser(token);
  if (uerr || !user) return res.status(401).json({ error: 'unauthorized' });

  const { data: prof } = await sb.from('profiles').select('stripe_customer_id').eq('id', user.id).maybeSingle();
  const customer = prof && prof.stripe_customer_id;
  if (!customer) return res.status(400).json({ error: 'kein_stripe_kunde' });

  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

  // laufende Testphase finden
  const subs = await stripe.subscriptions.list({ customer, status: 'trialing', limit: 5 });
  const sub = (subs.data || [])[0];
  if (!sub) return res.status(400).json({ error: 'keine_testphase' });

  // Testphase sofort beenden -> sofortige Abbuchung -> invoice.paid bucht Stunden
  await stripe.subscriptions.update(sub.id, { trial_end: 'now' });

  return res.status(200).json({ ok: true });
}
