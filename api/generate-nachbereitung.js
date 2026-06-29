// Automatische Nachbereitung aus Mitschrift (PDF-Text) ODER Live-Tafel.
// POST { classId, source:'pdf'|'tafel', pdfText? } + Authorization: Bearer <Admin/Lehrer-Token>
//
// Ablauf:
//  1) Auth: Aufrufer muss Admin ODER Lehrer sein.
//  2) Quelle bestimmen: PDF-Text (vom Browser, via pdf.js ausgelesen) ODER class_notes.notes (Live-Tafel).
//  3) Bestehende Vokabeln der Stunde sammeln (class_materials.content.vocab ∪ classes.vocab).
//  4) Claude erstellt: Nachbereitungs-Übungen + Grammatik-Tipp + (ergänzte) Vokabeln.
//  5) Schreiben:
//       - class_notes.post_content  = { exercises, vocab, grammar_tip, source, generated_at }  → Schüler-Nachbereitung
//       - class_materials.content.vocab = zusammengeführte Vokabeln                              → Vokabeltrainer
//
// Individuell pro Schüler entsteht automatisch: jeder Schüler sieht nur Stunden, die er gebucht hat
// (collectVocab in konto.html zieht Vokabeln aus den gebuchten Stunden).
import { createClient } from '@supabase/supabase-js';

const MODEL = process.env.ANTHROPIC_MODEL || 'claude-sonnet-4-6';

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).json({ ok: false, error: 'method_not_allowed' });
  if (!process.env.ANTHROPIC_API_KEY) return res.status(200).json({ ok: false, error: 'anthropic_key_missing' });

  const token = (req.headers.authorization || '').replace('Bearer ', '');
  const { classId, source = 'tafel', pdfText } = req.body || {};
  if (!token || !classId) return res.status(400).json({ ok: false, error: 'bad_request' });

  const sb = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_SERVICE_ROLE_KEY);

  // 1) Auth – Admin oder Lehrer
  const { data: { user: caller } = {}, error: uerr } = await sb.auth.getUser(token);
  if (uerr || !caller) return res.status(401).json({ ok: false, error: 'unauthorized' });
  const { data: me } = await sb.from('profiles').select('is_admin,is_teacher').eq('id', caller.id).maybeSingle();
  if (!me || !(me.is_admin || me.is_teacher)) return res.status(403).json({ ok: false, error: 'not_admin' });

  // 2) Stunde laden
  const { data: cls } = await sb.from('classes')
    .select('id,title,level,topic,vocab').eq('id', classId).maybeSingle();
  if (!cls) return res.status(200).json({ ok: false, error: 'class_not_found' });

  const [{ data: mat }, { data: note }] = await Promise.all([
    sb.from('class_materials').select('content').eq('class_id', classId).maybeSingle(),
    sb.from('class_notes').select('notes,post_content').eq('class_id', classId).maybeSingle(),
  ]);

  // Quelle bestimmen
  let srcText = '';
  if (source === 'pdf') {
    srcText = String(pdfText || '').trim();
    if (srcText.length < 20) return res.status(200).json({ ok: false, error: 'no_pdf_text' });
  } else {
    srcText = htmlToText(String((note && note.notes) || ''));
    if (srcText.length < 20) return res.status(200).json({ ok: false, error: 'no_tafel' });
  }
  if (srcText.length > 14000) srcText = srcText.slice(0, 14000);

  // 3) Bestehende Vokabeln
  const existing = [];
  const seen = new Set();
  const pushV = (v) => { const de = (v && v.de || '').trim(); if (de && !seen.has(de.toLowerCase())) { seen.add(de.toLowerCase()); existing.push({ de, info: (v.info || v.en || '').trim() }); } };
  if (mat && mat.content && Array.isArray(mat.content.vocab)) mat.content.vocab.forEach(pushV);
  if (Array.isArray(cls.vocab)) cls.vocab.forEach(pushV);

  // 4) Claude
  const prompt = buildPrompt(cls, srcText, existing, source);
  let aiText = '';
  try {
    const r = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: { 'x-api-key': process.env.ANTHROPIC_API_KEY, 'anthropic-version': '2023-06-01', 'content-type': 'application/json' },
      body: JSON.stringify({ model: MODEL, max_tokens: 4000, messages: [{ role: 'user', content: prompt }] }),
    });
    const j = await r.json();
    if (!r.ok) return res.status(200).json({ ok: false, error: 'anthropic_error', detail: (j && j.error && j.error.message) || ('HTTP ' + r.status) });
    aiText = (j.content || []).map(b => b.text || '').join('').trim();
  } catch (e) {
    return res.status(200).json({ ok: false, error: 'anthropic_fetch', detail: e.message });
  }

  // JSON aus der Antwort holen
  let parsed = null;
  try { parsed = JSON.parse(aiText); }
  catch (e) { const m = aiText.match(/\{[\s\S]*\}/); if (m) { try { parsed = JSON.parse(m[0]); } catch (e2) {} } }
  if (!parsed) return res.status(200).json({ ok: false, error: 'parse_failed', detail: aiText.slice(0, 300) });

  // 5) Normalisieren
  const exercises = normExercises(parsed.exercises || []);
  const grammar = (parsed.grammar_tip && parsed.grammar_tip.title) ? { title: String(parsed.grammar_tip.title), text: String(parsed.grammar_tip.text || '') } : null;
  // Vokabeln zusammenführen (bestehende + neue)
  (Array.isArray(parsed.vocab) ? parsed.vocab : []).forEach(pushV);
  const vocab = existing;

  if (!exercises.length && !vocab.length) return res.status(200).json({ ok: false, error: 'empty_result' });

  const nowISO = new Date().toISOString();

  // a) Nachbereitung -> class_notes.post_content (notes bleibt erhalten)
  const post_content = { exercises, vocab, grammar_tip: grammar, source, generated_at: nowISO };
  const { error: nErr } = await sb.from('class_notes')
    .upsert({ class_id: classId, post_content, generated_at: nowISO }, { onConflict: 'class_id' });
  if (nErr) return res.status(200).json({ ok: false, error: 'save_notes_failed', detail: nErr.message });

  // b) Vokabeln in den Trainer -> class_materials.content.vocab
  const content = (mat && mat.content && typeof mat.content === 'object') ? mat.content : {};
  content.vocab = vocab;
  if (grammar && !content.grammar_tip) content.grammar_tip = grammar;
  await sb.from('class_materials')
    .upsert({ class_id: classId, content, model: MODEL, generated_at: nowISO }, { onConflict: 'class_id' });

  return res.status(200).json({
    ok: true,
    content: { vocab, exercises, grammar_tip: grammar },
    counts: { vocab: vocab.length, exercises: exercises.length },
    source,
  });
}

// Live-Tafel wird als HTML gespeichert (notiz + '<!--KORR-->' + korrektur) -> sauberer Text für die KI
function htmlToText(html) {
  return String(html || '')
    .replace(/<!--KORR-->/g, '\n\n--- Korrekturen / Tafel-Notizen ---\n')
    .replace(/<\s*br\s*\/?>/gi, '\n')
    .replace(/<\/(p|div|li|h[1-6]|tr)>/gi, '\n')
    .replace(/<[^>]+>/g, ' ')
    .replace(/&nbsp;/g, ' ').replace(/&amp;/g, '&').replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&quot;/g, '"').replace(/&#39;/g, "'")
    .replace(/[ \t]+/g, ' ')
    .replace(/\n{3,}/g, '\n\n')
    .trim();
}

function buildPrompt(cls, srcText, existing, source) {
  const vocabList = existing.length ? existing.map(v => `- ${v.de}${v.info ? ' = ' + v.info : ''}`).join('\n') : '(noch keine)';
  const quelle = source === 'pdf' ? 'die hochgeladene Mitschrift (PDF)' : 'die Live-Tafel aus dem Unterricht';
  return `Du bist Amanda, eine erfahrene Deutschlehrerin. Du erstellst die NACHBEREITUNG für eine Deutsch-Unterrichtsstunde.

STUNDE:
- Titel: ${cls.title || '—'}
- Niveau: ${cls.level || '—'}
- Thema: ${cls.topic || cls.title || '—'}

QUELLE (${quelle}) – das wurde im Unterricht behandelt:
"""
${srcText}
"""

BEREITS ERFASSTE VOKABELN DER STUNDE:
${vocabList}

AUFGABE:
Erstelle passende, abwechslungsreiche Nachbereitungs-Übungen, die GENAU zu dem oben Behandelten passen (gleiche Wörter, Grammatik, Beispiele). Niveau-gerecht für ${cls.level || 'das Niveau'}.

Antworte AUSSCHLIESSLICH mit gültigem JSON (kein Text davor/danach), exakt in diesem Format:
{
  "vocab": [ { "de": "das Wort", "info": "Bedeutung/Erklärung auf Deutsch (einfach)" } ],
  "grammar_tip": { "title": "kurzer Titel", "text": "1-3 Sätze Erklärung des wichtigsten Grammatikpunkts der Stunde" },
  "exercises": [
    { "type": "choice", "q": "Frage?", "options": ["A","B","C"], "answer": 0 },
    { "type": "gap", "text": "Ich ___ nach Hause.", "answer": "gehe", "hint": "gehen, 1. Person" },
    { "type": "match", "intro": "Ordne zu:", "pairs": [ { "l": "Hund", "r": "dog" } ] },
    { "type": "order", "answer": "Ich gehe heute ins Kino.", "hint": "Zeitangabe vor Ort" },
    { "type": "listen", "q": "Was hörst du?", "options": ["A","B","C"], "answer": 1 }
  ]
}

REGELN:
- "vocab": ergänze 3-10 wichtige Vokabeln aus der Quelle (auch die bereits erfassten dürfen erneut vorkommen).
- "exercises": 6-9 Übungen, gemischte Typen (choice, gap, match, order, listen).
- Bei "choice" und "listen" ist "answer" der Index (0-basiert) der richtigen Option.
- Alles auf Deutsch, freundlich, klar. Keine Markdown-Codeblöcke, nur reines JSON.`;
}

function normExercises(arr) {
  const out = [];
  (Array.isArray(arr) ? arr : []).forEach(e => {
    if (!e || !e.type) return;
    const t = e.type;
    if (t === 'choice' || t === 'listen') {
      const options = Array.isArray(e.options) ? e.options.map(String) : [];
      if (!e.q || options.length < 2) return;
      let answer = e.answer;
      if (typeof answer === 'string') { const i = options.indexOf(answer); answer = i >= 0 ? i : 0; }
      if (typeof answer !== 'number' || answer < 0 || answer >= options.length) answer = 0;
      out.push({ type: t, q: String(e.q), options, answer });
    } else if (t === 'gap') {
      if (!e.text || !e.answer) return;
      out.push({ type: 'gap', text: String(e.text), answer: String(e.answer), hint: e.hint ? String(e.hint) : undefined });
    } else if (t === 'match') {
      const pairs = (Array.isArray(e.pairs) ? e.pairs : []).filter(p => p && p.l && p.r).map(p => ({ l: String(p.l), r: String(p.r) }));
      if (pairs.length < 2) return;
      out.push({ type: 'match', intro: e.intro ? String(e.intro) : undefined, pairs });
    } else if (t === 'order') {
      if (!e.answer) return;
      out.push({ type: 'order', answer: String(e.answer), hint: e.hint ? String(e.hint) : undefined });
    }
  });
  return out;
}
