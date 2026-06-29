// Liefert Admins die echten Abo-Daten eines Schülers aus Stripe (Tarif, Status, gekündigt?, Probestunde).
// POST { user_id } + Authorization: Bearer <Admin-Token>. ENV: STRIPE_SECRET_KEY, SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY.
import Stripe from 'stripe';
import { createClient } from '@supabase/supabase-js';

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'method_not_allowed' });
  const token = (req.headers.authorization || '').replace('Bearer ', '');
  if (!token) return res.status(401).json({ error: 'no_token' });

  const sb = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_SERVICE_ROLE_KEY);
  const { data: { user } = {} } = await sb.auth.getUser(token);
  if (!user) return res.status(401).json({ error: 'unauthorized' });
  const { data: me } = await sb.from('profiles').select('is_admin').eq('id', user.id).maybeSingle();
  if (!me || !me.is_admin) return res.status(403).json({ error: 'not_admin' });

  const uid = (req.body && req.body.user_id) || '';
  if (!uid) return res.status(400).json({ error: 'no_user' });

  const { data: prof } = await sb.from('profiles').select('stripe_customer_id').eq('id', uid).maybeSingle();
  const cust = prof && prof.stripe_customer_id;
  if (!cust || !process.env.STRIPE_SECRET_KEY) return res.status(200).json({ ok: true, hasStripe: false });

  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
  let subs;
  try { subs = await stripe.subscriptions.list({ customer: cust, status: 'all', limit: 6 }); }
  catch (e) { return res.status(200).json({ ok: true, hasStripe: false, err: String(e.message || e) }); }
  const list = (subs.data || []).slice().sort((a, b) => b.created - a.created);
  const s = list[0];
  if (!s) return res.status(200).json({ ok: true, hasStripe: true, sub: null });

  return res.status(200).json({
    ok: true, hasStripe: true,
    sub: {
      plan: (s.metadata && s.metadata.plan) || null,
      stunden: (s.metadata && s.metadata.stunden) || null,
      status: s.status,
      cancel_at_period_end: s.cancel_at_period_end,
      current_period_end: s.current_period_end,
      trial_start: s.trial_start,
      trial_end: s.trial_end,
      canceled_at: s.canceled_at,
    },
  });
}
