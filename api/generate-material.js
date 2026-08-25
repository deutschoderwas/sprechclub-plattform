// ============================================================
//  KI-Material-Generator (Amanda erstellt Übungen)
//  POST { classId }   +  Header: Authorization: Bearer <access_token>
//  -> Nur Admin. Erzeugt strukturierte Übungen passend zu
//     Niveau + Thema der Stunde und speichert sie in class_materials.
// ============================================================
import { createClient } from '@supabase/supabase-js';

const MODEL = process.env.ANTHROPIC_MODEL || 'claude-sonnet-4-6';

const SYSTEM = `Du bist Amanda, die KI-Lehrerin von „deutschoderwas". Du erstellst Lernmaterial und Übungen für einen Live-Deutsch-Sprechclub.
Ton: locker, modern, motivierend — wie eine Freundin, die gut erklärt. Immer auf Deutsch, klar und korrekt.
Du gibst AUSSCHLIESSLICH gültiges JSON zurück (kein Text davor/danach, keine Markdown-Backticks).
Das Material muss genau zum angegebenen Niveau (GER A1–C2) und Thema passen und didaktisch sinnvoll aufgebaut sein.`;

function userPrompt(cls) {
  return `Erstelle Lernmaterial für diese Sprechclub-Stunde:
- Titel: ${cls.title}
- Niveau: ${cls.level}
- Thema: ${cls.topic || '(allgemein, passend zum Niveau)'}

Gib ein JSON-Objekt mit GENAU dieser Struktur zurück:
{
  "intro": "2-3 motivierende Sätze: worum geht es heute, warum ist das nützlich",
  "grammar_tip": { "title": "kurzer Titel", "text": "1 klar erklärter Grammatik-/Sprachtipp passend zum Thema, mit 1-2 Beispielsätzen" },
  "vocab": [ { "de": "Wort/Wendung MIT Artikel", "info": "kurze Bedeutung + Beispielsatz" } ],
  "pre": { "exercises": [ ...Aufgaben... ] },
  "post": { "exercises": [ ...Aufgaben... ] },
  "speak_prompts": [ "2-4 Sprechimpulse, die der Schüler danach mit Amanda (Sprach-KI) üben kann" ]
}

Regeln für "vocab": 6-10 Einträge, passend zum Thema/Niveau.
Regeln für "pre" (Vorbereitung, leichter) und "post" (Vertiefung, etwas anspruchsvoller): je 4-5 Aufgaben.
Erlaubte Aufgaben-Typen (mische sie sinnvoll):
1) { "type":"choice", "q":"Frage", "options":["...","...","..."], "answer":0, "explain":"warum" }   (answer = Index der richtigen Option, 0-basiert)
2) { "type":"gap", "text":"Satz mit ___ als Lücke", "answer":"Lösung", "alts":["weitere akzeptierte Lösung"], "hint":"kleiner Tipp" }
3) { "type":"match", "intro":"Ordne zu", "pairs":[ {"l":"Deutsch","r":"Bedeutung/Synonym"} ] }   (4-6 Paare)
4) { "type":"order", "answer":"Ein vollständiger korrekter Satz", "hint":"Worum geht es" }   (wird automatisch in Wörter zerlegt und gemischt)
5) { "type":"write", "prompt":"Schreibaufgabe (1-3 Sätze)", "sample":"Beispiel-Lösung" }

Alle Texte auf Deutsch. Niveau-gerecht: A1/A2 = einfache, kurze Sätze; B1/B2 = Alltag & Meinung; C1/C2 = differenziert.
Gib NUR das JSON zurück.`;
}

function extractJson(text) {
  // robust: nimm vom ersten { bis zum letzten }
  const s = text.indexOf('{');
  const e = text.lastIndexOf('}');
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

  // 1) Nutzer aus Token holen + Admin prüfen (Service-Key validiert das JWT)
  const admin = createClient(url, service);
  const { data: ures, error: uerr } = await admin.auth.getUser(token);
  if (uerr || !ures?.user) return res.status(401).json({ error: 'invalid_token' });

  const { data: prof } = await admin.from('profiles').select('is_admin').eq('id', ures.user.id).single();
  if (!prof?.is_admin) return res.status(403).json({ error: 'not_admin' });

  // 2) Stunde laden
  const { data: cls, error: cerr } = await admin.from('classes')
    .select('id,title,level,topic').eq('id', classId).single();
  if (cerr || !cls) return res.status(404).json({ error: 'class_not_found' });

  // 3) Claude aufrufen
  let content;
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
        max_tokens: 4000,
        system: SYSTEM,
        messages: [{ role: 'user', content: userPrompt(cls) }],
      }),
    });
    if (!r.ok) {
      const t = await r.text();
      return res.status(502).json({ error: 'anthropic_error', detail: t.slice(0, 500) });
    }
    const j = await r.json();
    const text = (j.content || []).filter(b => b.type === 'text').map(b => b.text).join('');
    content = extractJson(text);
  } catch (e) {
    return res.status(502).json({ error: 'generation_failed', detail: String(e).slice(0, 300) });
  }

  // 4) Speichern (Service-Key umgeht RLS)
  const { error: serr } = await admin.from('class_materials')
    .upsert({ class_id: classId, content, model: MODEL, generated_at: new Date().toISOString() });
  if (serr) return res.status(500).json({ error: 'save_failed', detail: serr.message });

  return res.status(200).json({ ok: true, content });
}
