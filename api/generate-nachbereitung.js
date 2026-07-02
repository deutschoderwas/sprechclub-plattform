// Manuelle Nachbereitung per Knopf (Admin/Lehrer).
// POST { classId, source:'pdf'|'tafel', pdfText? } + Authorization: Bearer <Admin/Lehrer-Token>
// Eigenständig (keine externen lib-Imports), damit Vercel sicher bündelt.
import { createClient } from '@supabase/supabase-js';

export const maxDuration = 60;
// Schnelles Modell, damit die Generierung sicher im Zeitlimit bleibt (Sonnet war zu langsam -> Abbruch).
const MODEL = process.env.ANTHROPIC_MODEL || 'claude-haiku-4-5-20251001';

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).json({ ok: false, error: 'method_not_allowed' });

  const token = (req.headers.authorization || '').replace('Bearer ', '');
  const { classId, source = 'tafel', pdfText } = req.body || {};
  if (!token || !classId) return res.status(400).json({ ok: false, error: 'bad_request' });

  const sb = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_SERVICE_ROLE_KEY);

  const { data: { user: caller } = {}, error: uerr } = await sb.auth.getUser(token);
  if (uerr || !caller) return res.status(401).json({ ok: false, error: 'unauthorized' });
  const { data: me } = await sb.from('profiles').select('is_admin,is_teacher').eq('id', caller.id).maybeSingle();
  if (!me || !(me.is_admin || me.is_teacher)) return res.status(403).json({ ok: false, error: 'not_admin' });

  const result = await runNachbereitung(sb, { classId, source, pdfText });
  return res.status(200).json(result);
}

// ===== gemeinsame Logik (identisch in api/auto-nachbereitung.js) =====
async function runNachbereitung(sb, { classId, source = 'tafel', pdfText } = {}) {
  if (!process.env.ANTHROPIC_API_KEY) return { ok: false, error: 'anthropic_key_missing' };
  if (!classId) return { ok: false, error: 'bad_request' };

  const { data: cls } = await sb.from('classes').select('id,title,level,topic,vocab').eq('id', classId).maybeSingle();
  if (!cls) return { ok: false, error: 'class_not_found' };

  const [{ data: mat }, { data: note }] = await Promise.all([
    sb.from('class_materials').select('content').eq('class_id', classId).maybeSingle(),
    sb.from('class_notes').select('notes,post_content').eq('class_id', classId).maybeSingle(),
  ]);

  let srcText = '';
  if (source === 'pdf') {
    srcText = String(pdfText || '').trim();
    if (srcText.length < 20) return { ok: false, error: 'no_pdf_text' };
  } else {
    srcText = htmlToText(String((note && note.notes) || ''));
    if (srcText.length < 20) return { ok: false, error: 'no_tafel' };
  }
  if (srcText.length > 14000) srcText = srcText.slice(0, 14000);

  // bestehende Vokabeln sammeln (de -> {de, info, example})
  const vmap = new Map();
  const addV = (v) => {
    const de = (v && v.de || '').trim(); if (!de) return;
    const k = de.toLowerCase();
    const info = (v.info || v.meaning || v.en || '').trim();
    const ex = (v.example || '').trim();
    const cur = vmap.get(k) || { de, info: '', example: '', related: [] };
    if (info && !cur.info) cur.info = info;
    if (ex && !cur.example) cur.example = ex;
    if (v.img && !cur.img) cur.img = v.img;
    if (Array.isArray(v.related) && v.related.length && !(cur.related && cur.related.length)) cur.related = v.related.map(String).slice(0, 5);
    cur.de = de; vmap.set(k, cur);
  };
  if (mat && mat.content && Array.isArray(mat.content.vocab)) mat.content.vocab.forEach(addV);
  if (Array.isArray(cls.vocab)) cls.vocab.forEach(addV);

  const prompt = buildPrompt(cls, srcText, [...vmap.values()], source);
  let aiText = '';
  try {
    const r = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: { 'x-api-key': process.env.ANTHROPIC_API_KEY, 'anthropic-version': '2023-06-01', 'content-type': 'application/json' },
      body: JSON.stringify({ model: MODEL, max_tokens: 4000, messages: [{ role: 'user', content: prompt }] }),
    });
    const j = await r.json();
    if (!r.ok) return { ok: false, error: 'anthropic_error', detail: (j && j.error && j.error.message) || ('HTTP ' + r.status) };
    aiText = (j.content || []).map(b => b.text || '').join('').trim();
  } catch (e) {
    return { ok: false, error: 'anthropic_fetch', detail: e.message };
  }

  let clean = aiText.replace(/^\s*```(?:json)?\s*/i, '').replace(/\s*```\s*$/i, '').trim();
  let parsed = null;
  try { parsed = JSON.parse(clean); }
  catch (e) { const m = clean.match(/\{[\s\S]*\}/); if (m) { try { parsed = JSON.parse(m[0]); } catch (e2) {} } }
  if (!parsed) return { ok: false, error: 'parse_failed', detail: aiText.slice(0, 300) };

  (Array.isArray(parsed.vocab) ? parsed.vocab : []).forEach(addV);
  const vocab = [...vmap.values()];
  await addVocabImages(vocab); // echte Fotos pro Wort (Unsplash), gecacht in der Vokabel
  const exercises = normExercises(parsed.exercises || []);

  const post_content = {
    thema: clip(parsed.thema, 700),
    saetze: strList(parsed.saetze, 12),
    vocab,
    grammar: normGrammar(parsed.grammar),
    exercises,
    speaking: normSpeaking(parsed.speaking),
    errors: normErrors(parsed.errors),
    source,
    generated_at: new Date().toISOString(),
  };
  if (!vocab.length && !exercises.length && !post_content.thema) return { ok: false, error: 'empty_result' };

  const nowISO = post_content.generated_at;
  const { error: nErr } = await sb.from('class_notes').upsert({ class_id: classId, post_content, generated_at: nowISO }, { onConflict: 'class_id' });
  if (nErr) return { ok: false, error: 'save_notes_failed', detail: nErr.message };

  const content = (mat && mat.content && typeof mat.content === 'object') ? mat.content : {};
  content.vocab = vocab;
  await sb.from('class_materials').upsert({ class_id: classId, content, model: MODEL, generated_at: nowISO }, { onConflict: 'class_id' });

  // Erst wenn fertig: Schüler der Stunde per E-Mail benachrichtigen (einmal pro Schüler/Stunde).
  let mailed = 0;
  try { mailed = await sendNachbereitungMails(sb, classId, cls, post_content); } catch (e) {}

  return { ok: true, content: post_content, counts: { vocab: vocab.length, exercises: exercises.length, errors: post_content.errors.length }, mailed, source };
}

async function sendNachbereitungMails(sb, classId, cls, pc) {
  if (!process.env.BREVO_API_KEY) return 0;
  const site = process.env.SITE_URL || 'https://www.deutschoderwas-club.de';
  const { data: bks } = await sb.from('bookings').select('user_id').eq('class_id', classId).eq('status', 'booked');
  if (!bks || !bks.length) return 0;
  const ids = [...new Set(bks.map(b => b.user_id))];
  const { data: profs } = await sb.from('profiles').select('id,name,email,email_optout').in('id', ids);
  const thema = cls.topic || cls.title || 'deine Stunde';
  const nVok = (pc.vocab || []).length, nUb = (pc.exercises || []).length, nErr = (pc.errors || []).length;
  let sent = 0;
  for (const p of (profs || [])) {
    if (!p.email || p.email_optout) continue;
    const ref = `${classId}:${p.id}`;
    const { error: logErr } = await sb.from('email_log').insert({ kind: 'nachbereitung', ref, user_id: p.id });
    if (logErr) continue; // schon verschickt
    const vorname = (p.name || '').split(' ')[0] || 'du';
    const html = nachbereitungEmail({ vorname, thema, level: cls.level || '', nVok, nUb, nErr, link: `${site}/nachbereitung.html?id=${classId}` });
    const r = await fetch('https://api.brevo.com/v3/smtp/email', {
      method: 'POST',
      headers: { 'api-key': process.env.BREVO_API_KEY, 'Content-Type': 'application/json' },
      body: JSON.stringify({
        sender: { name: 'Julia | deutschoderwas', email: process.env.BREVO_SENDER_EMAIL || 'info@deutschoderwas.de' },
        to: [{ email: p.email, name: p.name || undefined }],
        subject: `📖 Deine Nachbereitung: ${thema}`,
        htmlContent: html,
      }),
    });
    if (r.ok) sent++; else await sb.from('email_log').delete().eq('kind', 'nachbereitung').eq('ref', ref);
  }
  return sent;
}

function nachbereitungEmail({ vorname, thema, level, nVok, nUb, nErr, link }) {
  const esc = (s) => String(s == null ? '' : s).replace(/[<>&]/g, c => ({ '<': '&lt;', '>': '&gt;', '&': '&amp;' }[c]));
  const ff = "-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif";
  const bits = [];
  if (nVok) bits.push(`📖 ${nVok} Vokabeln`);
  if (nUb) bits.push(`✏️ ${nUb} Übungen`);
  if (nErr) bits.push(`🔴 ${nErr} Fehlerkorrekturen`);
  const list = bits.join(' · ');
  return `<!DOCTYPE html><html lang="de"><head><meta charset="utf-8"></head>
<body style="margin:0;background:#FDF8F1;font-family:${ff}">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="padding:24px 14px"><tr><td align="center">
    <table role="presentation" width="100%" style="max-width:520px;background:#fff;border-radius:18px;overflow:hidden;box-shadow:0 8px 26px rgba(0,0,0,.08)">
      <tr><td style="height:6px;background:linear-gradient(135deg,#DD0000,#FFCE00)"></td></tr>
      <tr><td style="padding:24px 28px 6px">
        <div style="font-size:13px;font-weight:800;letter-spacing:.04em;color:#9CA3AF;text-transform:uppercase">deutschoderwas</div>
        <h1 style="margin:8px 0 0;font-size:22px;color:#1a1a1a">📖 Deine Nachbereitung ist da!</h1>
      </td></tr>
      <tr><td style="padding:12px 28px 0;font-size:15px;line-height:1.6;color:#1a1a1a">
        Hallo ${esc(vorname)},<br><br>
        deine Nachbereitung zu <b>${esc(thema)}</b>${level ? ` (${esc(level)})` : ''} ist fertig.${list ? `<br><span style="color:#6f6a62;font-size:14px">${esc(list)}</span>` : ''}
      </td></tr>
      <tr><td align="center" style="padding:22px 28px 6px">
        <a href="${esc(link)}" style="display:inline-block;background:linear-gradient(135deg,#2bbfbf,#138a8a);color:#063b35;font-weight:800;font-size:15px;text-decoration:none;padding:14px 30px;border-radius:50px">📖 Zur Nachbereitung</a>
      </td></tr>
      <tr><td style="padding:18px 28px 26px;font-size:12px;color:#9CA3AF;text-align:center">Üb die neuen Vokabeln gleich im Trainer · deutschoderwas-club.de</td></tr>
    </table>
  </td></tr></table>
</body></html>`;
}

function clip(s, n) { s = String(s == null ? '' : s).trim(); return s ? s.slice(0, n) : null; }
function strList(a, max) { return (Array.isArray(a) ? a : []).map(x => String(x || '').trim()).filter(Boolean).slice(0, max); }

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

function normGrammar(g) {
  if (!g || typeof g !== 'object') return null;
  const title = clip(g.title, 120);
  const headers = strList(g.headers, 6);
  const rows = (Array.isArray(g.rows) ? g.rows : []).map(r => (Array.isArray(r) ? r.map(c => String(c == null ? '' : c)) : [])).filter(r => r.length).slice(0, 20);
  const tips = (Array.isArray(g.tips) ? g.tips : []).map(t => ({ label: clip(t.label, 80) || '', text: clip(t.text, 400) || '' })).filter(t => t.text).slice(0, 6);
  if (!title && !rows.length && !tips.length) return null;
  return { title: title || 'Grammatik', headers, rows, tips };
}
function normSpeaking(a) {
  return (Array.isArray(a) ? a : []).map(s => ({ task: clip(s.task || s.q, 300) || '', example: clip(s.example || s.answer, 500) || '' })).filter(s => s.task).slice(0, 8);
}
function normErrors(a) {
  return (Array.isArray(a) ? a : []).map(e => ({ falsch: clip(e.falsch, 200) || '', richtig: clip(e.richtig, 200) || '', erklaerung: clip(e.erklaerung || e.erklarung, 400) || '' })).filter(e => e.falsch && e.richtig).slice(0, 10);
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

// Pro Vokabel ein echtes Foto von Unsplash holen (nur wenn UNSPLASH_ACCESS_KEY gesetzt).
async function addVocabImages(vocab) {
  const key = process.env.UNSPLASH_ACCESS_KEY;
  if (!key || !vocab || !vocab.length) return;
  await Promise.all(vocab.map(async (v) => {
    if (v.img) return;
    const q = imgQuery(v);
    if (!q) return;
    try {
      const r = await fetch('https://api.unsplash.com/search/photos?per_page=1&orientation=squarish&content_filter=high&query=' + encodeURIComponent(q), { headers: { Authorization: 'Client-ID ' + key } });
      if (!r.ok) return;
      const j = await r.json();
      const u = j && j.results && j.results[0] && j.results[0].urls;
      if (u) v.img = u.small || u.regular || u.thumb || null;
    } catch (e) {}
  }));
}
function imgQuery(v) {
  let q = (v.info || '').trim();
  if (!q || q.length > 40 || /[äöüß]/i.test(q)) q = String(v.de || '').replace(/^(der|die|das|den|dem|ein|eine)\s+/i, '').replace(/\(.*?\)/g, '').trim();
  q = q.split(/[;,/]/)[0].trim();
  return q.split(/\s+/).slice(0, 3).join(' ');
}

function buildPrompt(cls, srcText, existing, source) {
  const vocabList = existing.length ? existing.map(v => `- ${v.de}${v.info ? ' = ' + v.info : ''}`).join('\n') : '(noch keine)';
  const quelle = source === 'pdf' ? 'die hochgeladene Mitschrift (PDF)' : 'die Live-Tafel aus dem Unterricht';
  return `Du bist Amanda, eine erfahrene Deutschlehrerin. Erstelle ein vollständiges, schönes NACHBEREITUNGS-HANDOUT für eine Deutsch-Unterrichtsstunde – streng auf Basis dessen, was unten in der Quelle steht.

STUNDE:
- Titel: ${cls.title || '—'}
- Niveau: ${cls.level || '—'}
- Thema: ${cls.topic || cls.title || '—'}

QUELLE (${quelle}) – das wurde im Unterricht behandelt:
"""
${srcText}
"""

BEREITS ERFASSTE VOKABELN:
${vocabList}

Antworte AUSSCHLIESSLICH mit gültigem JSON (kein Text, keine Codeblöcke) in GENAU diesem Format:
{
  "thema": "1-3 Sätze: worum ging es in der Stunde (für die Zusammenfassung).",
  "saetze": ["wichtiger Beispielsatz aus der Stunde", "noch einer", "..."],
  "vocab": [ { "de": "das Wort", "info": "einfache Erklärung AUF DEUTSCH (kein Englisch!)", "example": "lebensnaher Beispielsatz aus dem Alltag", "related": ["verwandtes Wort", "noch eins"] } ],
  "grammar": {
    "title": "Grammatik-Schwerpunkt der Stunde",
    "headers": ["Spalte 1","Spalte 2","..."],
    "rows": [["Zelle","Zelle","..."]],
    "tips": [ { "label": "Merkpunkt", "text": "kurze Erklärung" } ]
  },
  "exercises": [
    { "type": "choice", "q": "Satz mit ___ Lücke?", "options": ["A","B","C"], "answer": 0 },
    { "type": "gap", "text": "Ich ___ nach Hause.", "answer": "gehe", "hint": "gehen" }
  ],
  "speaking": [ { "task": "Sprech-/Schreibaufgabe", "example": "Beispielantwort" } ],
  "errors": [ { "falsch": "typischer Fehler aus der Stunde", "richtig": "korrigierte Version", "erklaerung": "warum" } ]
}

REGELN:
- ALLES muss zum oben Behandelten passen (gleiche Wörter, Grammatik, Beispiele). Nichts erfinden, was nicht zum Thema passt.
- "vocab": 6-14 Vokabeln. "info" = einfache, kurze Erklärung AUF DEUTSCH (NIEMALS englische Übersetzung!). "example" = lebensnaher Beispielsatz aus dem echten Alltag. "related" = 2-4 verwandte Wörter aus derselben Wortfamilie (Adjektive/Verben/Nomen, z. B. zu "Zufriedenheit": zufrieden, zufriedenstellen).
- "grammar": nur ausfüllen, wenn es einen klaren Grammatikpunkt gibt; sonst "tips" mit 1-2 Merkpunkten, "rows":[] lassen.
- "exercises": 6-9 Lückenübungen (type "choice" mit 3 Optionen, "answer" = Index 0-basiert; oder "gap").
- "speaking": 2-4 freie Sprech-/Schreibaufgaben mit Beispielantwort.
- "errors": 2-5 echte Fehlerkorrekturen, wenn die Quelle Fehler/Korrekturen zeigt; sonst [].
- Deutsch, freundlich, klar. Nur reines JSON.`;
}
