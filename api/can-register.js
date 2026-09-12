// Registrierungs-Sperre.
//
// WARUM DIESE DATEI NEU IST
//
// Vorher galt: „Konto existiert schon -> nicht blockieren." Damit
// durfte sich auch jemand wieder anmelden, der auf 'beendet',
// 'archiv' oder 'registriert' stand und null Stunden hatte — also
// genau die Leute, deren Zugang beendet wurde. Gemessen am
// 12.09.2026 betraf das 31 Adressen (19x registriert, 12x beendet).
//
// Jetzt entscheidet die Datenbankfunktion darf_sich_registrieren().
// Dort steht dieselbe Regel wie in darf_rein(), an einer Stelle:
//   · ein Kauf, der noch gilt (pending_purchases), oder
//   · ein Profil mit echtem Zugang (Abo, Guthaben, Pass, gebuchte Stunde)
// Alles andere: nein. Wer zurueck will, kauft ein Abo — dann entsteht
// eine neue Kaufzeile und die Tuer geht von selbst wieder auf.
//
// POST { email } -> { eligible: boolean }
// ENV: SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY
import { createClient } from '@supabase/supabase-js';

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  if (req.method === 'OPTIONS') return res.status(204).end();
  if (req.method !== 'POST') return res.status(405).json({ error: 'method_not_allowed' });

  const email = String((req.body || {}).email || '').trim().toLowerCase();
  if (!email || !email.includes('@')) return res.status(400).json({ error: 'bad_email' });

  // Ohne Schluessel kann hier nichts geprueft werden. Das ist kein
  // Freifahrtschein: der eigentliche Zugang haengt an darf_rein(),
  // und ein frisches Profil startet auf 'registriert' ohne Tarif —
  // also ohne Zugang.
  if (!process.env.SUPABASE_URL || !process.env.SUPABASE_SERVICE_ROLE_KEY) {
    return res.status(200).json({ eligible: true, reason: 'no_service_key' });
  }

  try {
    const sb = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_SERVICE_ROLE_KEY);
    const { data, error } = await sb.rpc('darf_sich_registrieren', { p_email: email });
    if (error) throw error;
    return res.status(200).json({ eligible: data === true, reason: data === true ? 'anspruch' : 'kein_anspruch' });
  } catch (e) {
    // Fail-open bei Fehler — siehe oben: Zugang haengt nicht hieran.
    console.error('can-register', e);
    return res.status(200).json({ eligible: true, reason: 'error' });
  }
}
