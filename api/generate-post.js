// ============================================================
//  Automatische NACHBEARBEITUNG aus den Live-Notizen
//  POST { classId }  +  Header: Authorization: Bearer <access_token>
//  -> Nur Lehrer/Admin. Macht aus class_notes.notes eine
//     Vokabelliste + Übungen und speichert sie in class_notes.post_content.
// ============================================================
import { createClient } from '@supabase/supabase-js';

const MODEL = process.env.ANTHROPIC_MODEL || 'claude-sonnet-4-6';

const SYSTEM = `Du bist Amanda, die KI-Lehrerin von „deutschoderwas". Aus den handschriftlichen Live-Notizen einer Deutsch-Sprechstunde machst du sinnvolles Nachbearbeitungs-Material.
Ton: locker, modern, motivierend. Immer auf Deutsch, klar und korrekt.
Du gibst AUSSCHLIESSLICH gültiges JSON zurück (kein Text davor/danach, keine Markdown-Backticks).`;

function userPrompt(cls, notes) {
  return `Das ist heute in der Stunde passiert (Niveau ${cls.level}, Thema: ${cls.topic || cls.title}). Notizen der Lehrerin:
---
${notes}
---
Erstelle daraus passendes NACHBEARBEITUNGS-Material, das genau diese Inhalte aufgreift. Gib ein JSON-Objekt mit GENAU dieser Struktur zurück:
{
  "intro": "1-2 motivierende Sätze: das habt ihr heute gemacht, so vertiefst du es",
  "vocab": [ { "de": "Wort/Wendung MIT Artikel (aus den Notizen)", "info": "kurze Bedeutung + Beispielsatz" } ],
  "exercises": [ ...Aufgaben... ]
}
Regeln "vocab": die wichtigsten Wörter/Wendungen aus den Notizen, 6-12 Einträge.
Regeln "exercises": 5-7 Aufgaben, die direkt die Notizen-Inhalte üben. Mische diese Typen:
1) { "type":"choice", "q":"Frage", "options":["...","...","..."], "answer":0, "explain":"warum" }
2) { "type":"gap", "text":"Satz mit ___", "answer":"Lösung", "alts":["..."], "hint":"Tipp" }
3) { "type":"match", "intro":"Ordne zu", "pairs":[ {"l":"Deutsch","r":"Bedeutung"} ] }
4) { "type":"order", "answer":"Ein vollständiger korrekter Satz", "hint":"Worum geht es" }
5) { "type":"write", "prompt":"Schreibaufgabe", "sample":"Beispiel-Lösung" }
Niveau-gerecht (${cls.level}). Gib NUR das JSON zurück.`;
}

function extractJson(text) {
  const s = text.indexOf('{'); const e = text.lastIndexOf('}');
  if (s === -1 || e === -1) throw new Error('Keine JSON-Antwort vom Modell.');
  return JSON.parse(text.slice(s, e + 1));
}

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'method_not_allowed' });
  const apiKey = process.env.ANTHROPIC_API_KEY;
  if (!apiKey) return res.status(500).json({ error: 'anthropic_key_missing' });

  const { classId } = req.body || {};
  if (!classId) return res.status(400).json({ error: 'class_id_required' });
  const token = (req.headers.authorization || '').replace(/^Bearer\s+/i, '');
  if (!token) return res.status(401).json({ error: 'no_token' });

  const url = process.env.SUPABASE_URL;
  const service = process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (!url || !service) return res.status(500).json({ error: 'supabase_env_missing' });

  const admin = createClient(url, service);
  const { data: ures, error: uerr } = await admin.auth.getUser(token);
  if (uerr || !ures?.user) return res.status(401).json({ error: 'invalid_token' });
  const { data: prof } = await admin.from('profiles').select('is_admin,is_teacher').eq('id', ures.user.id).single();
  if (!prof?.is_admin && !prof?.is_teacher) return res.status(403).json({ error: 'not_allowed' });

  const { data: cls } = await admin.from('classes').select('id,title,level,topic').eq('id', classId).single();
  if (!cls) return res.status(404).json({ error: 'class_not_found' });
  const { data: cn } = await admin.from('class_notes').select('notes').eq('class_id', classId).single();
  const notes = (cn?.notes || '').trim();
  if (notes.length < 5) return res.status(400).json({ error: 'no_notes' });

  let content;
  try {
    const r = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: { 'content-type': 'application/json', 'x-api-key': apiKey, 'anthropic-version': '2023-06-01' },
      body: JSON.stringify({ model: MODEL, max_tokens: 4000, system: SYSTEM, messages: [{ role: 'user', content: userPrompt(cls, notes) }] }),
    });
    if (!r.ok) { const t = await r.text(); return res.status(502).json({ error: 'anthropic_error', detail: t.slice(0, 400) }); }
    const j = await r.json();
    const text = (j.content || []).filter(b => b.type === 'text').map(b => b.text).join('');
    content = extractJson(text);
  } catch (e) {
    return res.status(502).json({ error: 'generation_failed', detail: String(e).slice(0, 300) });
  }

  const { error: serr } = await admin.from('class_notes')
    .update({ post_content: content, generated_at: new Date().toISOString() }).eq('class_id', classId);
  if (serr) return res.status(500).json({ error: 'save_failed', detail: serr.message });
  return res.status(200).json({ ok: true, content });
}
