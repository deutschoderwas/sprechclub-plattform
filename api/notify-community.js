// Admin-Benachrichtigung bei neuen Community-Nachrichten (Brevo).
// Gebündelt: max. EINE Mail pro Kanal und Stunde (Throttle via email_log).
// Wird von community.js nach dem Senden einer Nachricht aufgerufen.
// POST { channel } + Authorization: Bearer <Supabase-Access-Token des Schülers>
import { createClient } from '@supabase/supabase-js';

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'method_not_allowed' });
  if (!process.env.BREVO_API_KEY) return res.status(200).json({ ok:false, skipped:'BREVO_API_KEY fehlt' });

  const token = (req.headers.authorization || '').replace('Bearer ', '');
  const { channel } = req.body || {};
  if (!token || !channel) return res.status(400).json({ error: 'bad_request' });

  const sb = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_SERVICE_ROLE_KEY);

  const { data: { user }, error: uerr } = await sb.auth.getUser(token);
  if (uerr || !user) return res.status(401).json({ error: 'unauthorized' });

  // Throttle: ein Eintrag pro Kanal+Stunde. Schlägt der Insert fehl (schon vorhanden),
  // wurde in dieser Stunde bereits gemailt -> nichts tun.
  const hourBucket = new Date().toISOString().slice(0, 13); // z.B. 2026-06-24T10
  const ref = `${channel}:${hourBucket}`;
  const { error: logErr } = await sb.from('email_log').insert({ kind: 'community', ref, user_id: user.id });
  if (logErr) return res.status(200).json({ ok: true, throttled: true });

  // Kontext für die Mail: Kanalname + wie viele neue Nachrichten in der letzten Stunde
  const sinceISO = new Date(Date.now() - 60 * 60000).toISOString();
  const [{ data: ch }, { data: prof }, { count }] = await Promise.all([
    sb.from('community_channels').select('name,emoji').eq('slug', channel).maybeSingle(),
    sb.from('profiles').select('name').eq('id', user.id).maybeSingle(),
    sb.from('community_messages').select('id', { count: 'exact', head: true })
      .eq('channel', channel).is('deleted_at', null).gte('created_at', sinceISO),
  ]);

  const adminEmail = process.env.ADMIN_EMAIL || 'deutschoderwas@gmail.com';
  const site = process.env.SITE_URL || 'https://www.deutschoderwas-club.de';
  const chName = (ch?.emoji ? ch.emoji + ' ' : '') + (ch?.name || channel);
  const who = prof?.name || 'Ein Mitglied';
  const n = count || 1;
  const ff = "-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif";
  const esc = (s) => String(s == null ? '' : s).replace(/[<>&]/g, (c) => ({ '<':'&lt;','>':'&gt;','&':'&amp;' }[c]));

  const html = `<!DOCTYPE html><html lang="de"><head><meta charset="utf-8"></head>
<body style="margin:0;background:#FFF8E0;font-family:${ff}">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="padding:24px 14px"><tr><td align="center">
    <table role="presentation" width="100%" style="max-width:520px;background:#fff;border-radius:18px;overflow:hidden;box-shadow:0 8px 26px rgba(0,0,0,.08)">
      <tr><td style="height:5px;background:#2DD4BF"></td></tr>
      <tr><td style="padding:22px 26px 6px">
        <div style="font-size:13px;font-weight:800;letter-spacing:.04em;color:#9CA3AF;text-transform:uppercase">Admin-Info · deutschoderwas club</div>
        <h1 style="margin:8px 0 0;font-size:22px;color:#1A1A1A">💬 Neues in der Community</h1>
      </td></tr>
      <tr><td style="padding:12px 26px 0;font-size:15px;line-height:1.6;color:#1A1A1A">
        Im Kanal <b>${esc(chName)}</b> ${n > 1 ? `gibt es <b>${n} neue Nachrichten</b>` : `gibt es eine neue Nachricht`} (zuletzt von <b>${esc(who)}</b>).
        <div style="font-size:13px;color:#6B7280;margin-top:6px">Du bekommst pro Kanal höchstens eine solche Mail pro Stunde.</div>
      </td></tr>
      <tr><td align="center" style="padding:20px 26px 6px">
        <a href="${esc(site)}/schuelerbereich" style="display:inline-block;background:#1A1A1A;color:#fff;font-weight:800;font-size:15px;text-decoration:none;padding:13px 28px;border-radius:50px">💬 Zur Community</a>
      </td></tr>
      <tr><td style="padding:18px 26px 26px;font-size:12px;color:#9CA3AF;text-align:center">Automatische Benachrichtigung · deutschoderwas-club.de</td></tr>
    </table>
  </td></tr></table>
</body></html>`;

  const r = await fetch('https://api.brevo.com/v3/smtp/email', {
    method: 'POST',
    headers: { 'api-key': process.env.BREVO_API_KEY, 'Content-Type': 'application/json' },
    body: JSON.stringify({
      sender: { name: 'deutschoderwas club', email: process.env.BREVO_SENDER_EMAIL || 'info@deutschoderwas.de' },
      to: [{ email: adminEmail, name: 'Julia' }],
      subject: `💬 Community: Neues in ${chName}`,
      htmlContent: html,
    }),
  });
  if (!r.ok) {
    await sb.from('email_log').delete().eq('kind', 'community').eq('ref', ref);
    return res.status(200).json({ ok: false, brevo: r.status });
  }
  return res.status(200).json({ ok: true });
}
