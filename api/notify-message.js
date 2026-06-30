// E-Mail-Benachrichtigung bei neuer Nachricht von Julia (Brevo).
// Wird von admin.html nach dem Senden einer Nachricht aufgerufen.
// POST { user_ids:[...], preview } + Authorization: Bearer <Admin-Access-Token>
import { createClient } from '@supabase/supabase-js';

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'method_not_allowed' });
  if (!process.env.BREVO_API_KEY) return res.status(200).json({ ok:false, skipped:'BREVO_API_KEY fehlt' });

  const token = (req.headers.authorization || '').replace('Bearer ', '');
  const { user_ids, preview } = req.body || {};
  if (!token || !Array.isArray(user_ids) || !user_ids.length) return res.status(400).json({ error: 'bad_request' });

  const sb = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_SERVICE_ROLE_KEY);

  // Nur Admin darf Massen-Mails auslösen
  const { data: { user }, error: uerr } = await sb.auth.getUser(token);
  if (uerr || !user) return res.status(401).json({ error: 'unauthorized' });
  const { data: me } = await sb.from('profiles').select('is_admin').eq('id', user.id).maybeSingle();
  if (!me || !me.is_admin) return res.status(403).json({ error: 'not_admin' });

  const { data: recipients } = await sb.from('profiles')
    .select('name,email,email_optout').in('id', user_ids);
  const list = (recipients || []).filter(r => r.email && !r.email_optout);
  if (!list.length) return res.status(200).json({ ok:true, sent:0 });

  const site = process.env.SITE_URL || 'https://www.deutschoderwas-club.de';
  const sender = { name: 'deutschoderwas club', email: process.env.BREVO_SENDER_EMAIL || 'info@deutschoderwas.de' };

  const results = await Promise.all(list.map(r => {
    const vorname = (r.name || '').split(' ')[0] || 'du';
    const html = messageEmail({ vorname, preview: preview || '', site });
    return fetch('https://api.brevo.com/v3/smtp/email', {
      method: 'POST',
      headers: { 'api-key': process.env.BREVO_API_KEY, 'Content-Type': 'application/json' },
      body: JSON.stringify({
        sender,
        to: [{ email: r.email, name: r.name || undefined }],
        subject: '✉️ Neue Nachricht von Julia – deutschoderwas club',
        htmlContent: html,
      }),
    }).then(x => x.ok).catch(() => false);
  }));
  const sent = results.filter(Boolean).length;
  return res.status(200).json({ ok: true, sent, total: list.length });
}

function messageEmail({ vorname, preview, site }) {
  const ff = "-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif";
  const esc = (s) => String(s == null ? '' : s).replace(/[<>&]/g, (c) => ({ '<':'&lt;','>':'&gt;','&':'&amp;' }[c]));
  const snip = preview ? `<tr><td style="padding:6px 30px 0"><table role="presentation" width="100%" style="background:#FFF8E0;border:1px solid #F0E5D8;border-left:5px solid #2DD4BF;border-radius:14px"><tr><td style="padding:14px 18px;font-family:${ff};font-size:15px;line-height:1.6;color:#1A1A1A">${esc(preview).slice(0,300)}</td></tr></table></td></tr>` : '';
  return `<!DOCTYPE html><html lang="de"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"></head>
<body style="margin:0;background:#FFF8E0;font-family:${ff}">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="padding:28px 14px"><tr><td align="center">
    <table role="presentation" width="100%" style="max-width:540px;background:#fff;border-radius:22px;overflow:hidden;box-shadow:0 12px 36px rgba(26,26,26,.10)">
      <tr><td style="height:6px;background:#1A1A1A"></td></tr>
      <tr><td style="height:6px;background:#DD0000"></td></tr>
      <tr><td style="height:6px;background:#FFCE00"></td></tr>
      <tr><td align="center" style="padding:24px 28px 4px">
        <div style="font-weight:800;font-size:15px;letter-spacing:.04em;color:#1A1A1A">deutschoderwas <span style="color:#DD0000">club</span></div>
        <div style="font-size:42px;line-height:1;margin:12px 0 2px">✉️</div>
        <h1 style="margin:6px 0 0;font-size:24px;font-weight:800;color:#1A1A1A">Neue Nachricht für dich</h1>
      </td></tr>
      <tr><td style="padding:10px 30px 0;font-size:15px;line-height:1.6;color:#1A1A1A">
        <p style="margin:0 0 4px">Hallo ${esc(vorname)},</p>
        <p style="margin:0">Julia hat dir eine Nachricht im deutschoderwas club geschrieben:</p>
      </td></tr>
      ${snip}
      <tr><td align="center" style="padding:20px 30px 6px">
        <a href="${esc(site)}/schuelerbereich" style="display:inline-block;background:#1A1A1A;color:#fff;font-weight:800;font-size:15px;text-decoration:none;padding:14px 30px;border-radius:50px">💬 Nachricht öffnen</a>
      </td></tr>
      <tr><td style="padding:16px 30px 6px;font-size:15px;line-height:1.6;color:#1A1A1A">Bis bald!<br><b>Julia</b> &amp; das deutschoderwas-Team</td></tr>
      <tr><td style="padding:18px 30px 26px"><div style="border-top:1px solid #F0E5D8;padding-top:14px;font-size:12px;color:#9CA3AF;text-align:center"><a href="${esc(site)}" style="color:#9CA3AF;text-decoration:none">deutschoderwas-club.de</a></div></td></tr>
    </table>
  </td></tr></table>
</body></html>`;
}
