// ============================================================
//  deutschoderwas club — die Erinnerung an alle, die noch warten
//
//  Julia: "alles, die noch KEIN Premium sind aus der Leadsliste —
//  denen nochmal eine Mail. Die, die Premium haben, NICHTS schicken."
//
//  Wer sie bekommt, entscheidet nicht eine Liste in Brevo, sondern
//  die Aussieberei in api/_lead-erinnerung-lauf.js: dort stehen in
//  "Sprechclub Interessenten" 277 und in der Warteliste 720
//  Menschen, in Julias Lead-Liste aber knapp 200. Eine Kampagne
//  ueber die Brevo-Liste haette Hunderte getroffen, die nicht
//  gemeint waren.
//
//  POST { aktion:'vorschau' }  -> zaehlt nur, schickt nichts
//  POST { aktion:'senden' }    -> schickt
//  Beides nur fuer Julia (is_admin).
//
//  Derselbe Lauf laesst sich ohne diesen Knopf ausloesen: eine Zeile
//  in mail_auftraege, abgearbeitet von api/mail-auftraege.js.
// ============================================================
import { createClient } from '@supabase/supabase-js';
import { erinnerungLauf } from './_lead-erinnerung-lauf.js';

async function istAdmin(sb, token) {
  if (!token) return false;
  const { data: { user } = {}, error } = await sb.auth.getUser(token);
  if (error || !user) return false;
  const { data: me } = await sb.from('profiles').select('is_admin').eq('id', user.id).maybeSingle();
  return !!(me && me.is_admin);
}

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'nur_post' });
  if (!process.env.SUPABASE_URL || !process.env.SUPABASE_SERVICE_ROLE_KEY) {
    return res.status(500).json({ error: 'supabase_env_missing' });
  }
  const sb = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_SERVICE_ROLE_KEY);
  const token = (req.headers.authorization || '').replace(/^Bearer\s+/i, '');
  if (!(await istAdmin(sb, token))) return res.status(403).json({ error: 'not_admin' });

  const body = (typeof req.body === 'string' ? JSON.parse(req.body || '{}') : (req.body || {}));
  const senden = String(body.aktion || '') === 'senden';

  const bericht = await erinnerungLauf(sb, { senden, max: Number(body.max) || undefined });
  return res.status(200).json(bericht);
}
