// Gruppen-Zuordnungen nachträglich aus Daily rekonstruieren (Fix Natalia, 26.11.2026).
//
// Hintergrund: Vom ca. 07.11. bis 26.11.2026 hat der Klassenraum bei „Alle zurückholen“
// die Tabelle class_group_members gelöscht. Die Gruppen-Notizen (group_notes) sind
// erhalten, aber niemand wusste mehr, wer in welcher Gruppe war → Nachbereitung leer.
// Jede Kleingruppe ist ein eigener Daily-Raum  dow-<classId>-g<N>. Daily speichert pro
// Raum-Sitzung die Teilnehmer mit user_id (= Supabase-User-ID, siehe daily-room.js).
// Daraus wird der Verlauf (class_group_history, quelle 'daily') nachgetragen.
// Bestehende Zeilen werden NIE überschrieben oder gelöscht (nur ergänzt).
//
// POST { seit?: 'YYYY-MM-DD' (Standard 2026-11-01), bis?: ISO, classId?: uuid, probe?: true }
//   probe:true = nur zählen, nichts schreiben.
// Zugriff: Header x-cron-secret: <CRON_SECRET>  oder  Authorization: Bearer <Admin/Lehrer-Token>
import { createClient } from '@supabase/supabase-js';

export const maxDuration = 300;
const DAILY = 'https://api.daily.co/v1';
const UUID = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;
const ROOM_RE = /^dow-([0-9a-f-]{36})-g(\d+)$/i;

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).json({ ok: false, error: 'method_not_allowed' });
  const sb = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_SERVICE_ROLE_KEY);

  const cronOk = process.env.CRON_SECRET && req.headers['x-cron-secret'] === process.env.CRON_SECRET;
  if (!cronOk) {
    const token = (req.headers.authorization || '').replace('Bearer ', '');
    if (!token) return res.status(401).json({ ok: false, error: 'unauthorized' });
    const { data: { user } = {}, error } = await sb.auth.getUser(token);
    if (error || !user) return res.status(401).json({ ok: false, error: 'unauthorized' });
    const { data: me } = await sb.from('profiles').select('is_admin,is_teacher').eq('id', user.id).maybeSingle();
    if (!me || !(me.is_admin || me.is_teacher)) return res.status(403).json({ ok: false, error: 'not_admin' });
  }
  if (!process.env.DAILY_API_KEY) return res.status(500).json({ ok: false, error: 'daily_key_missing' });

  try {
    const result = await rekonstruieren(sb, req.body || {}, fetch);
    return res.status(200).json(result);
  } catch (e) {
    return res.status(500).json({ ok: false, error: String(e && e.message || e).slice(0, 300) });
  }
}

export async function rekonstruieren(sb, opts, fetchFn) {
  const seit = opts.seit || '2026-11-01';
  const probe = !!opts.probe;
  const H = { Authorization: 'Bearer ' + process.env.DAILY_API_KEY };

  // 1) Stunden mit Gruppen-Notizen im Zeitraum
  let q = sb.from('classes').select('id,starts_at').gte('starts_at', seit).lte('starts_at', opts.bis || new Date().toISOString());
  if (opts.classId) q = q.eq('id', opts.classId);
  const { data: classes, error: cErr } = await q;
  if (cErr) throw new Error('classes: ' + cErr.message);
  const ids = (classes || []).map(c => c.id);
  if (!ids.length) return { ok: true, stunden: 0 };

  const { data: gn } = await sb.from('group_notes').select('class_id,grp').in('class_id', ids);
  const { data: arch } = await sb.from('group_notes_archiv').select('class_id,grp').in('class_id', ids);
  const rooms = new Set();
  for (const r of [...(gn || []), ...(arch || [])]) if (r.grp > 0) rooms.add(('dow-' + r.class_id + '-g' + r.grp).slice(0, 60));
  // Auch Gruppen ohne Notiz mitnehmen (1..max+2), damit niemand fehlt
  const maxByClass = {};
  for (const r of [...(gn || []), ...(arch || [])]) maxByClass[r.class_id] = Math.max(maxByClass[r.class_id] || 0, r.grp);
  for (const [cid, m] of Object.entries(maxByClass)) for (let g = 1; g <= m + 2; g++) rooms.add(('dow-' + cid + '-g' + g).slice(0, 60));

  // 2) Daily-Sitzungen je Raum abfragen (max. 100 Räume pro Aufruf, mit Paginierung)
  const startTs = Math.floor(new Date(seit).getTime() / 1000) - 3600;
  const roomList = [...rooms];
  const hist = new Map();          // key class|user|grp -> {first,last,dur}
  let sitzungen = 0;
  for (let i = 0; i < roomList.length; i += 100) {
    const chunk = roomList.slice(i, i + 100);
    let after = null;
    for (let page = 0; page < 50; page++) {
      const p = new URLSearchParams();
      chunk.forEach(r => p.append('room', r));
      p.set('timeframe_start', String(startTs));
      p.set('limit', '100');
      if (after) p.set('starting_after', after);
      const r = await fetchFn(DAILY + '/meetings?' + p.toString(), { headers: H });
      if (!r.ok) throw new Error('daily_meetings ' + r.status + ': ' + (await r.text()).slice(0, 200));
      const j = await r.json();
      const data = (j && j.data) || [];
      for (const m of data) {
        sitzungen++;
        const mm = ROOM_RE.exec(m.room || '');
        if (!mm) continue;
        const classId = mm[1], grp = Number(mm[2]);
        for (const pt of (m.participants || [])) {
          const uid = pt.user_id;
          if (!uid || !UUID.test(uid)) continue;
          const join = Number(pt.join_time) || Number(m.start_time) || 0;
          const dur = Number(pt.duration) || 0;
          const k = classId + '|' + uid + '|' + grp;
          const e = hist.get(k) || { classId, uid, grp, first: Infinity, last: 0, dur: 0 };
          e.first = Math.min(e.first, join); e.last = Math.max(e.last, join + dur); e.dur += dur;
          hist.set(k, e);
        }
      }
      if (data.length < 100) break;
      after = data[data.length - 1].id;
    }
  }

  // 3) Nur Personen, die die Stunde gebucht haben
  const { data: bk } = await sb.from('bookings').select('class_id,user_id').in('class_id', ids).eq('status', 'booked');
  const gebucht = new Set((bk || []).map(b => b.class_id + '|' + b.user_id));
  const rows = [...hist.values()].filter(e => gebucht.has(e.classId + '|' + e.uid)).map(e => ({
    class_id: e.classId, user_id: e.uid, grp: e.grp,
    first_seen: new Date(e.first * 1000).toISOString(),
    last_seen: new Date(e.last * 1000).toISOString(),
    quelle: 'daily',
  }));

  // Für class_group_members (eine Gruppe pro Person): die Gruppe mit der längsten Zeit
  const best = new Map();
  for (const e of hist.values()) {
    if (!gebucht.has(e.classId + '|' + e.uid)) continue;
    const k = e.classId + '|' + e.uid;
    const b = best.get(k);
    if (!b || e.dur > b.dur) best.set(k, e);
  }
  const cgm = [...best.values()].map(e => ({
    class_id: e.classId, user_id: e.uid, grp: e.grp,
    updated_at: new Date(e.last * 1000).toISOString(),   // alt → wird im Klassenraum nicht „wiederbelebt“
  }));

  const proStunde = {};
  for (const r of rows) proStunde[r.class_id] = (proStunde[r.class_id] || 0) + 1;

  if (!probe) {
    for (let i = 0; i < rows.length; i += 500) {
      const { error } = await sb.from('class_group_history').upsert(rows.slice(i, i + 500), { onConflict: 'class_id,user_id,grp', ignoreDuplicates: true });
      if (error) throw new Error('history: ' + error.message);
    }
    for (let i = 0; i < cgm.length; i += 500) {
      const { error } = await sb.from('class_group_members').upsert(cgm.slice(i, i + 500), { onConflict: 'class_id,user_id', ignoreDuplicates: true });
      if (error) throw new Error('members: ' + error.message);
    }
  }
  return { ok: true, probe, stunden: ids.length, raeume: roomList.length, sitzungen, zuordnungen: rows.length, personen_stunden: cgm.length, pro_stunde: proStunde };
}
