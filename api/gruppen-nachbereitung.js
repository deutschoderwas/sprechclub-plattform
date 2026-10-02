// Individuelle (pro Gruppe personalisierte) Nachbereitung.
// Läuft ADDITIV nach der gemeinsamen Nachbereitung: nimmt die Basis (class_notes.post_content)
// und ergänzt pro Schüler:in den Teil der EIGENEN Gruppe (aus group_notes + class_group_members).
// Schreibt student_nachbereitung (eine Zeile pro Schüler:in). Verändert NICHT die gemeinsame Nachbereitung.
//
// POST { classId }  + Authorization: Bearer <Admin/Lehrer-Token>
//   (oder Header  x-cron-secret: <CRON_SECRET>  für automatischen Lauf)
import { createClient } from '@supabase/supabase-js';

export const maxDuration = 60;
const MODEL = process.env.ANTHROPIC_MODEL || 'claude-haiku-4-5-20251001';

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).json({ ok: false, error: 'method_not_allowed' });
  const { classId } = req.body || {};
  if (!classId) return res.status(400).json({ ok: false, error: 'bad_request' });

  const sb = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_SERVICE_ROLE_KEY);

  // Zugriff: entweder Admin/Lehrer-Token oder Cron-Secret
  const cronOk = process.env.CRON_SECRET && req.headers['x-cron-secret'] === process.env.CRON_SECRET;
  if (!cronOk) {
    const token = (req.headers.authorization || '').replace('Bearer ', '');
    if (!token) return res.status(401).json({ ok: false, error: 'unauthorized' });
    const { data: { user: caller } = {}, error: uerr } = await sb.auth.getUser(token);
    if (uerr || !caller) return res.status(401).json({ ok: false, error: 'unauthorized' });
    const { data: me } = await sb.from('profiles').select('is_admin,is_teacher').eq('id', caller.id).maybeSingle();
    if (!me || !(me.is_admin || me.is_teacher)) return res.status(403).json({ ok: false, error: 'not_admin' });
  }

  const result = await runGruppenNachbereitung(sb, classId);
  return res.status(200).json(result);
}

async function runGruppenNachbereitung(sb, classId) {
  if (!process.env.ANTHROPIC_API_KEY) return { ok: false, error: 'anthropic_key_missing' };

  const { data: cls } = await sb.from('classes').select('id,title,level,topic').eq('id', classId).maybeSingle();
  if (!cls) return { ok: false, error: 'class_not_found' };

  const [{ data: note }, { data: members }, { data: gnotes }, { data: bks }] = await Promise.all([
    sb.from('class_notes').select('post_content').eq('class_id', classId).maybeSingle(),
    sb.from('class_group_members').select('user_id,grp').eq('class_id', classId),
    sb.from('group_notes').select('grp,notes').eq('class_id', classId),
    sb.from('bookings').select('user_id').eq('class_id', classId).eq('status', 'booked'),
  ]);

  const base = (note && note.post_content) || {};
  if (!members || !members.length) return { ok: false, error: 'no_group_members' };

  const booked = new Set((bks || []).map(b => b.user_id));
  const notesByGrp = {};
  (gnotes || []).forEach(g => { notesByGrp[g.grp] = htmlToText(String(g.notes || '')); });

  // Pro Gruppe EINE KI-Zusammenfassung (sparsam) – nur wo es echte Notizen gibt
  const grpSummary = {};
  const grpsUsed = [...new Set(members.map(m => m.grp).filter(g => g != null))];
  for (const g of grpsUsed) {
    const txt = (notesByGrp[g] || '').trim();
    if (txt.length < 15) { grpSummary[g] = null; continue; } // zu wenig geschrieben → kein Gruppenteil
    grpSummary[g] = await summarizeGroup(cls, g, txt);
  }

  // Pro Schüler:in zusammensetzen: Basis + eigener Gruppenteil
  const nowISO = new Date().toISOString();
  let written = 0;
  const rows = [];
  for (const m of members) {
    if (!booked.has(m.user_id)) continue;            // nur gebuchte Schüler:innen
    const gruppe = (m.grp != null) ? grpSummary[m.grp] : null;
    const post_content = Object.assign({}, base, { gruppe: gruppe ? Object.assign({ nr: m.grp }, gruppe) : null, generated_at: nowISO });
    rows.push({ class_id: classId, user_id: m.user_id, grp: m.grp, post_content, generated_at: nowISO });
  }
  for (let i = 0; i < rows.length; i += 50) {
    const chunk = rows.slice(i, i + 50);
    const { error } = await sb.from('student_nachbereitung').upsert(chunk, { onConflict: 'class_id,user_id' });
    if (!error) written += chunk.length;
  }

  return { ok: true, groups: grpsUsed.length, students: written };
}

async function summarizeGroup(cls, grp, notesText) {
  const prompt =
`Du bist Amanda, freundliche Deutschlehrerin. Fasse für die Lernenden EINER Kleingruppe zusammen, was sie im Live-Unterricht erarbeitet haben. Sprich sie mit „ihr" an, auf Deutsch, motivierend und kurz.

Stunde: "${(cls.topic || cls.title || '').replace(/"/g, "'")}" (Niveau ${cls.level || ''}).
Das hat die Gruppe gemeinsam auf ihrer Tafel geschrieben/korrigiert:
"""
${notesText.slice(0, 4000)}
"""

Gib NUR gültiges JSON zurück, ohne Erklärtext, in genau diesem Format:
{"text":"2-3 Sätze: was ihr in eurer Gruppe geübt/besprochen habt","punkte":["kurze Merk-/Korrektur-Punkte aus euren Notizen, je 1 Zeile, max 6"]}`;

  try {
    const r = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: { 'x-api-key': process.env.ANTHROPIC_API_KEY, 'anthropic-version': '2023-06-01', 'content-type': 'application/json' },
      body: JSON.stringify({ model: MODEL, max_tokens: 1200, messages: [{ role: 'user', content: prompt }] }),
    });
    const j = await r.json();
    if (!r.ok) return null;
    const aiText = (j && j.content && j.content[0] && j.content[0].text) || '';
    let clean = aiText.replace(/^\s*```(?:json)?\s*/i, '').replace(/\s*```\s*$/i, '').trim();
    let parsed = null;
    try { parsed = JSON.parse(clean); }
    catch (e) { const mm = clean.match(/\{[\s\S]*\}/); if (mm) { try { parsed = JSON.parse(mm[0]); } catch (e2) {} } }
    if (!parsed) return null;
    const text = typeof parsed.text === 'string' ? parsed.text.slice(0, 700) : '';
    const punkte = Array.isArray(parsed.punkte) ? parsed.punkte.filter(x => typeof x === 'string').map(x => x.slice(0, 200)).slice(0, 6) : [];
    if (!text && !punkte.length) return null;
    return { text, punkte };
  } catch (e) { return null; }
}

function htmlToText(html) {
  return String(html || '')
    .replace(/<br\s*\/?>/gi, '\n')
    .replace(/<\/(p|div|li|h[1-6])>/gi, '\n')
    .replace(/<li[^>]*>/gi, '• ')
    .replace(/<[^>]+>/g, '')
    .replace(/&nbsp;/g, ' ').replace(/&amp;/g, '&').replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&quot;/g, '"').replace(/&#39;/g, "'")
    .replace(/\n{3,}/g, '\n\n').trim();
}
