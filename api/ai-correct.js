// ============================================================
//  KI-Korrektur für die Community (Variante A: Team bestätigt)
//  POST { message_id }   +  Header: Authorization: Bearer <access_token>
//  -> Nur Team (Admin ODER Lehrer). Liest die Nachricht, lässt Claude
//     einen Korrektur-VORSCHLAG erzeugen und gibt ihn zurück.
//     Es wird NICHTS gespeichert — das Team prüft & sendet die Korrektur
//     über den bestehenden Ablauf (community_corrections).
// ============================================================
import { createClient } from '@supabase/supabase-js';

const MODEL = process.env.ANTHROPIC_MODEL || 'claude-sonnet-4-6';

const SYSTEM = `Du bist die freundliche Sprach-KI von „deutschoderwas". Du korrigierst kurze deutsche Nachrichten von Deutschlernenden (GER A1–C2) präzise und wohlwollend.
Du gibst AUSSCHLIESSLICH gültiges JSON zurück (kein Text davor/danach, keine Markdown-Backticks).`;

function userPrompt(text, level) {
  return `Ein Deutschlernender${level ? ` (Niveau ${level})` : ''} hat in der Community geschrieben:
«${text}»

Prüfe den Text auf Fehler (Grammatik, Wortstellung, Wortwahl, Artikel, Rechtschreibung). Umgangssprache, Emojis und lockerer Ton sind KEINE Fehler.

Gib GENAU dieses JSON zurück:
{
  "has_error": true/false,
  "corrected": "der korrigierte Satz — bei keinem Fehler exakt der Originalsatz",
  "note": "kurze, freundliche Erklärung der wichtigsten Regel auf Deutsch (max. 2 Sätze). Leer lassen, wenn kein Fehler.",
  "topic": "kurzes Fehler-Thema (z.B. Perfekt, Präpositionen, Wortstellung, Artikel). Leer lassen, wenn kein Fehler."
}

Korrigiere nur, was wirklich falsch ist. Behalte Stil und Bedeutung des Schülers bei. Gib NUR das JSON zurück.`;
}

function extractJson(t) {
  const s = t.indexOf('{'), e = t.lastIndexOf('}');
  if (s === -1 || e === -1) throw new Error('Keine JSON-Antwort vom Modell.');
  return JSON.parse(t.slice(s, e + 1));
}

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'method_not_allowed' });

  const apiKey = process.env.ANTHROPIC_API_KEY;
  if (!apiKey) return res.status(500).json({ error: 'anthropic_key_missing' });

  const { message_id, text: rawText, level: rawLevel } = req.body || {};

  const token = (req.headers.authorization || '').replace(/^Bearer\s+/i, '');
  if (!token) return res.status(401).json({ error: 'no_token' });

  const url = process.env.SUPABASE_URL;
  const service = process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (!url || !service) return res.status(500).json({ error: 'supabase_env_missing' });

  const admin = createClient(url, service);

  // 1) Nutzer prüfen — nur Team (Admin ODER Lehrer)
  const { data: ures, error: uerr } = await admin.auth.getUser(token);
  if (uerr || !ures?.user) return res.status(401).json({ error: 'invalid_token' });
  const { data: prof } = await admin.from('profiles').select('is_admin,is_teacher').eq('id', ures.user.id).single();
  if (!prof?.is_admin && !prof?.is_teacher) return res.status(403).json({ error: 'not_team' });

  // 2) Text bestimmen: entweder aus message_id (sicher aus DB) oder direkt übergeben
  let text = (rawText || '').trim();
  let level = (rawLevel || '').trim();
  if (message_id) {
    const { data: msg } = await admin.from('community_messages').select('body,user_id,kind').eq('id', message_id).single();
    if (!msg) return res.status(404).json({ error: 'message_not_found' });
    if (msg.kind !== 'text' || !msg.body) return res.status(400).json({ error: 'no_text' });
    text = String(msg.body).trim();
    if (!level && msg.user_id) {
      const { data: ap } = await admin.from('profiles').select('level').eq('id', msg.user_id).single();
      level = ap?.level || '';
    }
  }
  if (!text) return res.status(400).json({ error: 'text_required' });
  if (text.length > 1200) text = text.slice(0, 1200);

  // 3) Claude aufrufen
  let out;
  try {
    const r = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        'x-api-key': apiKey,
        'anthropic-version': '2023-06-01',
      },
      body: JSON.stringify({
        model: MODEL,
        max_tokens: 700,
        system: SYSTEM,
        messages: [{ role: 'user', content: userPrompt(text, level) }],
      }),
    });
    if (!r.ok) {
      const t = await r.text();
      return res.status(502).json({ error: 'anthropic_error', detail: t.slice(0, 400) });
    }
    const j = await r.json();
    const txt = (j.content || []).filter(b => b.type === 'text').map(b => b.text).join('');
    out = extractJson(txt);
  } catch (e) {
    return res.status(502).json({ error: 'generation_failed', detail: String(e).slice(0, 300) });
  }

  return res.status(200).json({
    ok: true,
    has_error: !!out.has_error,
    corrected: String(out.corrected || text),
    note: String(out.note || ''),
    topic: String(out.topic || ''),
  });
}
