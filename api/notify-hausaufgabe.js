// Benachrichtigt Julia (Admin), wenn ein Schüler eine Hausaufgabe einreicht.
// Wird aus nachbereitung.html (dowHaEinreichen) nach erfolgreicher Abgabe aufgerufen.
// POST { class_id } + Authorization: Bearer <Supabase-Access-Token des Schülers>
import { createClient } from '@supabase/supabase-js';

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).json({ ok: false, error: 'method_not_allowed' });
  if (!process.env.BREVO_API_KEY) return res.status(200).json({ ok: false, skipped: 'brevo_missing' });

  const token = (req.headers.authorization || '').replace('Bearer ', '');
  const { class_id } = req.body || {};
  if (!token || !class_id) return res.status(400).json({ ok: false, error: 'bad_request' });

  const sb = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_SERVICE_ROLE_KEY);
  const { data: { user }, error: uerr } = await sb.auth.getUser(token);
  if (uerr || !user) return res.status(401).json({ ok: false, error: 'unauthorized' });

  const [{ data: cls }, { data: prof }] = await Promise.all([
    sb.from('classes').select('title,topic,level,starts_at').eq('id', class_id).maybeSingle(),
    sb.from('profiles').select('name,email').eq('id', user.id).maybeSingle(),
  ]);
  if (!cls) return res.status(404).json({ ok: false, error: 'class_not_found' });

  const site = process.env.SITE_URL || 'https://www.deutschoderwas-club.de';
  const adminEmail = process.env.ADMIN_EMAIL || 'deutschoderwas@gmail.com';
  const esc = (s) => String(s == null ? '' : s).replace(/[<>&]/g, c => ({ '<': '&lt;', '>': '&gt;', '&': '&amp;' }[c]));
  const name = (prof && prof.name) ? prof.name : 'Ein Schüler';
  const thema = cls.topic || cls.title || 'die Stunde';
  const link = `${site}/nachbereitung.html?id=${class_id}&tab=hausaufgabe`;
  const ff = "-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif";

  const html = `<!DOCTYPE html><html lang="de"><head><meta charset="utf-8"></head>
<body style="margin:0;background:#FDF8F1;font-family:${ff}">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="padding:24px 14px"><tr><td align="center">
    <table role="presentation" width="100%" style="max-width:520px;background:#fff;border-radius:18px;overflow:hidden;box-shadow:0 8px 26px rgba(0,0,0,.08)">
      <tr><td style="height:6px;background:linear-gradient(135deg,#0E7C8C,#FFCE00)"></td></tr>
      <tr><td style="padding:22px 28px 6px">
        <div style="font-size:13px;font-weight:800;letter-spacing:.04em;color:#9CA3AF;text-transform:uppercase">deutschoderwas club</div>
        <h1 style="margin:8px 0 0;font-size:21px;color:#1a1a1a">📎 Neue Hausaufgabe eingereicht</h1>
      </td></tr>
      <tr><td style="padding:12px 28px 0;font-size:15px;line-height:1.6;color:#1a1a1a">
        <b>${esc(name)}</b> hat eine Hausaufgabe zu <b>${esc(thema)}</b>${cls.level ? ` (${esc(cls.level)})` : ''} eingereicht.
      </td></tr>
      <tr><td align="center" style="padding:20px 28px 8px">
        <a href="${esc(link)}" style="display:inline-block;background:linear-gradient(135deg,#35AFD0,#138a8a);color:#063b35;font-weight:800;font-size:15px;text-decoration:none;padding:14px 30px;border-radius:50px">✍️ Hausaufgabe ansehen &amp; korrigieren</a>
      </td></tr>
      <tr><td style="padding:14px 28px 26px;font-size:12px;color:#9CA3AF;text-align:center">Du kannst sie dort mit einem Klick (auch per KI) korrigieren und zurückschicken.</td></tr>
    </table>
  </td></tr></table>
</body></html>`;

  try {
    const r = await fetch('https://api.brevo.com/v3/smtp/email', {
      method: 'POST',
      headers: { 'api-key': process.env.BREVO_API_KEY, 'Content-Type': 'application/json' },
      body: JSON.stringify({
        sender: { name: 'deutschoderwas club', email: process.env.BREVO_SENDER_EMAIL || 'deutschlernen@deutschoderwas.de' },
        to: [{ email: adminEmail, name: 'Julia' }],
        replyTo: (prof && prof.email) ? { email: prof.email, name } : undefined,
        subject: `📎 Hausaufgabe eingereicht: ${name} · ${thema}`,
        htmlContent: html,
      }),
    });
    return res.status(200).json({ ok: r.ok });
  } catch (e) {
    return res.status(200).json({ ok: false, error: 'send_failed' });
  }
}
