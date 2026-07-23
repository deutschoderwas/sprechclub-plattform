// Registrierungs-Sperre: Nur wer schon eine Mitgliedschaft gekauft hat (pending_purchase)
// ODER bereits ein Konto besitzt (Bestandsschüler) darf sich registrieren.
// Der eigentliche Zugang bleibt ohnehin über den DB-Trigger an die Zahlung gebunden -> hier nur UX.
// POST { email } -> { eligible: boolean }. ENV: SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY.
import { createClient } from '@supabase/supabase-js';

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  if (req.method === 'OPTIONS') return res.status(204).end();
  if (req.method !== 'POST') return res.status(405).json({ error: 'method_not_allowed' });

  // Fail-open, wenn nicht konfiguriert (Zugang ist trotzdem an die Zahlung gebunden).
  if (!process.env.SUPABASE_URL || !process.env.SUPABASE_SERVICE_ROLE_KEY) {
    return res.status(200).json({ eligible: true, reason: 'no_service_key' });
  }
  const email = String((req.body || {}).email || '').trim().toLowerCase();
  if (!email || !email.includes('@')) return res.status(400).json({ error: 'bad_email' });

  try {
    const sb = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_SERVICE_ROLE_KEY);
    // 1) Bestandsschüler (Konto existiert schon) -> nicht blockieren
    const { data: prof } = await sb.from('profiles').select('id').ilike('email', email).maybeSingle();
    if (prof) return res.status(200).json({ eligible: true, reason: 'existing' });
    // 2) Gekaufte Mitgliedschaft geparkt (erst zahlen, dann anmelden) -> darf registrieren
    const { data: pend } = await sb.from('pending_purchases').select('id').ilike('email', email).limit(1);
    if (pend && pend.length) return res.status(200).json({ eligible: true, reason: 'purchase' });
    return res.status(200).json({ eligible: false });
  } catch (e) {
    // Fail-open bei Fehler -> Zugang bleibt trotzdem an die Zahlung gebunden.
    console.error('can-register', e);
    return res.status(200).json({ eligible: true, reason: 'error' });
  }
}
