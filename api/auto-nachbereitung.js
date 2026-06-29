// Automatische Nachbereitung nach Unterrichtsende (Cron, stündlich).
// Findet Stunden, die gerade zu Ende sind, eine gespeicherte Live-Tafel haben
// (egal ob Jitsi-Klassenraum oder eigenständige tafel.html – beide schreiben class_notes.notes)
// und noch KEINE Nachbereitung besitzen. Für jede erstellt Amanda automatisch
// die Nachbereitung + Vokabeln (fließen in den Vokabeltrainer).
//
// Idempotent: sobald post_content gesetzt ist, wird die Stunde nicht erneut bearbeitet.
import { createClient } from '@supabase/supabase-js';
import { runNachbereitung } from '../lib/nachbereitung.js';

export const config = { maxDuration: 60 };

export default async function handler(req, res) {
  if (!process.env.ANTHROPIC_API_KEY) return res.status(200).json({ ok: false, skipped: 'ANTHROPIC_API_KEY fehlt' });
  const sb = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_SERVICE_ROLE_KEY);

  const now = Date.now();
  const windowStart = new Date(now - 14 * 3600 * 1000).toISOString(); // bis 14 h zurück
  const nowISO = new Date(now).toISOString();

  // Stunden, die im Fenster begonnen haben und nicht abgesagt sind
  const { data: cls } = await sb.from('classes')
    .select('id,title,starts_at,duration_min,is_cancelled')
    .gte('starts_at', windowStart).lte('starts_at', nowISO)
    .eq('is_cancelled', false);

  // nur wirklich beendete Stunden (Ende = starts_at + Dauer <= jetzt)
  const ended = (cls || []).filter(c => {
    const end = new Date(c.starts_at).getTime() + (c.duration_min || 60) * 60000;
    return end <= now;
  });
  if (!ended.length) return res.status(200).json({ ok: true, processed: 0, reason: 'keine beendeten Stunden' });

  const ids = ended.map(c => c.id);
  const { data: notes } = await sb.from('class_notes')
    .select('class_id,notes,post_content').in('class_id', ids);
  const byId = {};
  (notes || []).forEach(n => { byId[n.class_id] = n; });

  // berechtigt: Tafel-Text vorhanden UND noch keine Nachbereitung
  const eligible = ended.filter(c => {
    const n = byId[c.id];
    if (!n || n.post_content) return false;
    const plain = String(n.notes || '').replace(/<[^>]*>/g, ' ').replace(/&nbsp;/g, ' ').trim();
    return plain.length >= 20;
  });
  if (!eligible.length) return res.status(200).json({ ok: true, processed: 0, reason: 'nichts Offenes' });

  // Zeitbudget beachten (Vercel-Limit) – Rest übernimmt der nächste Lauf
  const results = [];
  const t0 = Date.now();
  for (const c of eligible) {
    if (Date.now() - t0 > 45000) { results.push({ classId: c.id, skipped: 'zeitbudget' }); break; }
    try {
      const r = await runNachbereitung(sb, { classId: c.id, source: 'tafel' });
      results.push({ classId: c.id, title: c.title, ok: r.ok, error: r.error, counts: r.counts });
    } catch (e) {
      results.push({ classId: c.id, title: c.title, ok: false, error: e.message });
    }
  }

  return res.status(200).json({ ok: true, processed: results.filter(r => r.ok).length, eligible: eligible.length, results });
}
