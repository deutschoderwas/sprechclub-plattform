// Daily.co: Raum + Beitritts-Token für eine Stunde ausstellen.
// POST { classId } + Authorization: Bearer <Club-Login-Token>
// Prüft serverseitig den Login (Service-Role, keine RLS-Stolperfallen),
// legt bei Bedarf einen privaten Daily-Raum an und gibt url + token zurück.
// Lehrkraft/Admin = is_owner (darf stummschalten etc.), Schüler = Gast.
import { createClient } from '@supabase/supabase-js';

const DAILY = 'https://api.daily.co/v1';

function dailyHeaders() {
  return {
    Authorization: 'Bearer ' + process.env.DAILY_API_KEY,
    'Content-Type': 'application/json',
  };
}

// Raum idempotent sicherstellen (erst holen, sonst anlegen; Race abfangen).
async function ensureRoom(name) {
  const H = dailyHeaders();
  let r = await fetch(DAILY + '/rooms/' + name, { headers: H });
  if (r.ok) return r.json();

  r = await fetch(DAILY + '/rooms', {
    method: 'POST',
    headers: H,
    body: JSON.stringify({
      name,
      privacy: 'private', // nur mit Token betretbar → nur Club-Mitglieder
      properties: {
        enable_prejoin_ui: false, // ohne Klick direkt rein (nur Browser-Erlaubnis)
        enable_screenshare: true,
        enable_chat: false,
        enable_people_ui: true,
        enable_network_ui: true,
        start_video_off: false,
        start_audio_off: false,
        max_participants: 25,
        lang: 'de',
      },
    }),
  });
  if (r.ok) return r.json();

  // Falls parallel schon angelegt: erneut holen
  r = await fetch(DAILY + '/rooms/' + name, { headers: H });
  if (r.ok) return r.json();

  const detail = await r.text().catch(() => '');
  throw new Error('room_failed: ' + detail.slice(0, 200));
}

async function meetingToken({ room, isOwner, userName }) {
  const exp = Math.floor(Date.now() / 1000) + 6 * 3600; // 6 Stunden gültig
  const r = await fetch(DAILY + '/meeting-tokens', {
    method: 'POST',
    headers: dailyHeaders(),
    body: JSON.stringify({
      properties: {
        room_name: room,
        is_owner: !!isOwner,
        user_name: userName || (isOwner ? 'Lehrkraft' : 'Schüler:in'),
        exp,
        start_video_off: false,
        start_audio_off: false,
      },
    }),
  });
  if (!r.ok) {
    const detail = await r.text().catch(() => '');
    throw new Error('token_failed: ' + detail.slice(0, 200));
  }
  const j = await r.json();
  return j.token;
}

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).json({ ok: false, error: 'method_not_allowed' });
  if (!process.env.DAILY_API_KEY) return res.status(200).json({ ok: false, error: 'daily_not_configured' });

  const token = (req.headers.authorization || '').replace('Bearer ', '');
  const { classId } = req.body || {};
  if (!token || !classId) return res.status(400).json({ ok: false, error: 'bad_request' });

  const sb = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_SERVICE_ROLE_KEY);

  // 1) Login prüfen
  const { data: { user } = {}, error: uerr } = await sb.auth.getUser(token);
  if (uerr || !user) return res.status(401).json({ ok: false, error: 'unauthorized' });

  // 2) Rolle + Name aus dem Profil
  const { data: prof } = await sb
    .from('profiles')
    .select('is_teacher,is_admin,name')
    .eq('id', user.id)
    .maybeSingle();
  const isOwner = !!(prof && (prof.is_teacher || prof.is_admin));
  const userName = (prof && prof.name && String(prof.name).trim()) || (isOwner ? 'Lehrkraft' : 'Schüler:in');

  // 3) Raumname aus der Klassen-ID (nur erlaubte Zeichen)
  const room = ('dow-' + String(classId)).replace(/[^a-zA-Z0-9_-]/g, '').slice(0, 60);

  try {
    const roomObj = await ensureRoom(room);
    const mtoken = await meetingToken({ room, isOwner, userName });
    return res.status(200).json({ ok: true, url: roomObj.url, token: mtoken, owner: isOwner, name: userName });
  } catch (e) {
    return res.status(200).json({ ok: false, error: 'daily_error', detail: String((e && e.message) || e).slice(0, 300) });
  }
}
