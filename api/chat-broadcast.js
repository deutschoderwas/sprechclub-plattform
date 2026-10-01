// Eine Chat-Nachricht zusätzlich als E-Mail an alle Mitglieder.
//
// Julia schreibt im Chat und setzt vor dem Senden den Haken
// "auch per Mail". Dann geht dieselbe Nachricht als Mail raus, mit
// einem Knopf, der direkt in den Kanal führt — wer eingeloggt ist,
// landet dort und kann sofort antworten.
//
// POST { message_id } + Authorization: Bearer <Access-Token>
// Nur Admin oder Lehrkraft. email_log (kind:'chat_broadcast') sorgt
// dafür, dass dieselbe Nachricht nie zweimal verschickt wird.
import { createClient } from '@supabase/supabase-js';

const esc = (s) => String(s == null ? '' : s).replace(/[<>&]/g, (c) => ({ '<': '&lt;', '>': '&gt;', '&': '&amp;' }[c]));

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'method_not_allowed' });
  if (!process.env.BREVO_API_KEY) return res.status(200).json({ ok: false, skipped: 'BREVO_API_KEY fehlt' });

  const token = (req.headers.authorization || '').replace('Bearer ', '');
  const { message_id } = req.body || {};
  if (!token || !message_id) return res.status(400).json({ error: 'bad_request' });

  const sb = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_SERVICE_ROLE_KEY);

  const { data: { user }, error: uerr } = await sb.auth.getUser(token);
  if (uerr || !user) return res.status(401).json({ error: 'unauthorized' });

  const { data: me } = await sb.from('profiles').select('is_admin,is_teacher,name').eq('id', user.id).maybeSingle();
  if (!me || (!me.is_admin && !me.is_teacher)) return res.status(403).json({ error: 'not_allowed' });

  // Dieselbe Nachricht nie zweimal verschicken.
  const { error: logErr } = await sb.from('email_log')
    .insert({ kind: 'chat_broadcast', ref: String(message_id), user_id: user.id });
  if (logErr) return res.status(200).json({ ok: true, already_sent: true });

  const { data: msg } = await sb.from('community_messages')
    .select('id,channel,kind,body,author_name,created_at,deleted_at').eq('id', message_id).maybeSingle();
  if (!msg || msg.deleted_at) return res.status(404).json({ error: 'message_not_found' });

  const { data: ch } = await sb.from('community_channels')
    .select('slug,name,emoji').eq('slug', msg.channel).maybeSingle();

  // Empfänger: alle, die den Chat auch wirklich sehen dürfen —
  // laufende Mitgliedschaft, Guthaben oder gültiger Pass. Wer Mails
  // abbestellt hat (email_optout) oder die Chat-Mails einzeln
  // abgeschaltet hat (chat_mail_aus), bekommt nichts.
  const { data: alle } = await sb.from('profiles')
    .select('id,email,name,tier,status,credits,pass_until,email_optout,chat_mail_aus').limit(5000);

  const jetzt = Date.now();
  const empfaenger = (alle || []).filter((p) => {
    if (!p.email || !/@/.test(p.email)) return false;
    if (p.email_optout === true || p.chat_mail_aus === true) return false;
    if (p.id === user.id) return false;                       // sich selbst nicht
    const st = String(p.status || '').toLowerCase();
    if (st === 'archiv' || st === 'beendet') return false;
    const abo = ['community', 'premium', 'premium_plus'].indexOf(String(p.tier || '')) >= 0;
    const pass = p.pass_until && Date.parse(p.pass_until) > jetzt;
    return abo || pass || (p.credits || 0) > 0;
  });

  if (!empfaenger.length) return res.status(200).json({ ok: true, empfaenger: 0 });

  const site = process.env.SITE_URL || 'https://www.deutschoderwas-club.de';
  const link = `${site}/konto.html?kanal=${encodeURIComponent(msg.channel)}#community`;
  const chName = (ch?.emoji ? ch.emoji + ' ' : '') + (ch?.name || msg.channel);
  const wer = msg.author_name || me.name || 'Julia';
  const text = msg.kind === 'text' ? String(msg.body || '') : '📎 Ein Bild oder eine Sprachnachricht';
  const absatz = esc(text).split(/\n{2,}/).map((p) => p.replace(/\n/g, '<br>'))
    .map((p) => `<p style="margin:0 0 12px;font-size:16px;line-height:1.65;color:#1A1A1A">${p}</p>`).join('');

  const html = `<!DOCTYPE html><html lang="de"><head><meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0"></head>
<body style="margin:0;padding:0;background:#FFF8E0;font-family:'Inter','Segoe UI',system-ui,sans-serif;color:#1A1A1A">
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#FFF8E0;padding:24px 12px"><tr><td align="center">
<table role="presentation" width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;background:#FFFCF5;border:1px solid #F0E5D8;border-radius:20px;overflow:hidden">
  <tr><td style="padding:22px 30px 6px">
    <span style="font-family:'Space Grotesk','Segoe UI',sans-serif;font-weight:700;font-size:21px;color:#1A1A1A">deutsch<span style="color:#35AFD0">oderwas</span></span>
  </td></tr>
  <tr><td style="padding:0 30px"><div style="height:3px;background:linear-gradient(135deg,#7ED8EA,#35AFD0);border-radius:999px"></div></td></tr>
  <tr><td style="padding:20px 30px 0">
    <span style="display:inline-block;font-weight:600;font-size:12px;letter-spacing:1px;text-transform:uppercase;color:#35AFD0;margin-bottom:10px">Neu im Chat &middot; ${esc(chName)}</span>
    <p style="margin:0 0 14px;font-size:14px;color:#6B7280"><b style="color:#1A1A1A">${esc(wer)}</b> schreibt:</p>
  </td></tr>
  <tr><td style="padding:0 30px">
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#FFFFFF;border:1px solid #ECE8E0;border-radius:16px">
      <tr><td style="padding:16px 18px 6px">${absatz}</td></tr>
    </table>
  </td></tr>
  <tr><td align="center" style="padding:22px 30px 6px">
    <a href="${esc(link)}" style="display:inline-block;background:#10627A;color:#FFFFFF;font-weight:700;font-size:16px;text-decoration:none;padding:14px 30px;border-radius:999px">Im Chat antworten</a>
  </td></tr>
  <tr><td style="padding:10px 30px 24px">
    <p style="margin:0;font-size:13.5px;line-height:1.6;color:#6B7280;text-align:center">Du bist angemeldet? Dann landest du mit einem Klick direkt im Kanal und kannst sofort mitschreiben.</p>
  </td></tr>
  <tr><td style="background:#1A1A1A;padding:22px 30px">
    <p style="font-size:13px;line-height:1.6;color:#FFFCF5;margin:0 0 8px;font-weight:600">deutschoderwas &middot; Julia Karackov</p>
    <p style="font-size:12px;line-height:1.6;color:#b9b9b9;margin:0 0 8px">Wiesenstra&szlig;e 38, 58119 Hagen, Deutschland &middot; deutschoderwas@gmail.com &middot; USt-ID: DE676677898</p>
    <p style="font-size:12px;line-height:1.6;color:#b9b9b9;margin:0">Du bekommst diese E-Mail als Mitglied im deutschoderwas club. Chat-Mails kannst du in deinem Profil abschalten.</p>
  </td></tr>
</table></td></tr></table></body></html>`;

  // Brevo nimmt pro Aufruf bis zu 1000 Versionen; wir gehen in 300er-Schritten,
  // damit eine einzelne schlechte Adresse nicht den ganzen Versand kippt.
  const sender = { name: 'deutschoderwas club', email: process.env.BREVO_SENDER_EMAIL || 'deutschlernen@deutschoderwas.de' };
  const betreff = `Neu im Chat: ${chName}`;
  let verschickt = 0, fehler = 0;

  for (let i = 0; i < empfaenger.length; i += 300) {
    const teil = empfaenger.slice(i, i + 300);
    try {
      const r = await fetch('https://api.brevo.com/v3/smtp/email', {
        method: 'POST',
        headers: { 'api-key': process.env.BREVO_API_KEY, 'Content-Type': 'application/json' },
        body: JSON.stringify({
          sender,
          replyTo: { email: process.env.ADMIN_EMAIL || 'deutschoderwas@gmail.com', name: 'Julia' },
          subject: betreff,
          htmlContent: html,
          to: [{ email: teil[0].email, name: teil[0].name || '' }],
          messageVersions: teil.map((p) => ({ to: [{ email: p.email, name: p.name || '' }] })),
        }),
      });
      if (r.ok) verschickt += teil.length; else fehler += teil.length;
    } catch (e) { fehler += teil.length; }
  }

  return res.status(200).json({ ok: true, verschickt, fehler, kanal: msg.channel });
}
