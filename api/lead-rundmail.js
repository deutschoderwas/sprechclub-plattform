// ============================================================
//  deutschoderwas club — Julias eigener Text an alle Leads
//
//  Julia, 26.10.2026: "Ich will selbst einen Text an alle Leads
//  verfassen koennen."
//
//  POST { aktion:'vorschau', betreff, text, ... }  -> zaehlt nur und
//        liefert die fertige Mail zum Anschauen, schickt nichts
//  POST { aktion:'senden',   betreff, text, ... }  -> schickt
//
//  Beides nur fuer Julia (is_admin). Die Aussieberei und der Rahmen
//  stehen in _lead-rundmail-lauf.js — dieselbe Aufteilung wie bei der
//  Erinnerungsmail, damit ein Versand auch ohne diesen Knopf
//  ausgeloest werden kann.
// ============================================================
import { createClient } from '@supabase/supabase-js';
import { rundmailLauf } from './_lead-rundmail-lauf.js';

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
  const bericht = await rundmailLauf(sb, {
    betreff: body.betreff,
    text: body.text,
    senden: String(body.aktion || '') === 'senden',
    max: Number(body.max) || undefined,
    mitAnrede: body.mitAnrede !== false,
    premiumUeberspringen: !!body.premiumUeberspringen,
  });
  return res.status(200).json(bericht);
}
