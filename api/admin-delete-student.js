// Schüler als Admin löschen.
// POST { user_id } + Authorization: Bearer <Admin-Access-Token>
// Löscht Profil (CASCADE entfernt Buchungen, Guthaben-Log, Community-Beiträge usw.)
// und anschließend den Auth-User.
import { createClient } from '@supabase/supabase-js';

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'method_not_allowed' });

  const token = (req.headers.authorization || '').replace('Bearer ', '');
  const { user_id } = req.body || {};
  if (!token || !user_id) return res.status(400).json({ error: 'bad_request' });

  const sb = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_SERVICE_ROLE_KEY);

  // Aufrufer muss Admin sein
  const { data: { user: caller } = {}, error: uerr } = await sb.auth.getUser(token);
  if (uerr || !caller) return res.status(401).json({ error: 'unauthorized' });
  const { data: me } = await sb.from('profiles').select('is_admin').eq('id', caller.id).maybeSingle();
  if (!me || !me.is_admin) return res.status(403).json({ error: 'not_admin' });

  // Sicherheitsnetz: keinen Admin/Lehrer und nicht sich selbst löschen
  if (user_id === caller.id) return res.status(400).json({ error: 'cannot_delete_self' });
  const { data: target } = await sb.from('profiles').select('is_admin,is_teacher').eq('id', user_id).maybeSingle();
  if (target && (target.is_admin || target.is_teacher)) return res.status(400).json({ error: 'cannot_delete_staff' });

  // Profil löschen (CASCADE) + Auth-User löschen
  await sb.from('profiles').delete().eq('id', user_id);
  const { error: dErr } = await sb.auth.admin.deleteUser(user_id);
  if (dErr) return res.status(200).json({ ok: true, profile_deleted: true, auth_deleted: false, detail: dErr.message });

  return res.status(200).json({ ok: true, profile_deleted: true, auth_deleted: true });
}
