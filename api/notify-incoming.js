// E-Mail-Benachrichtigung an das Team, wenn ein Schueler eine Nachricht schreibt (Brevo).
// Wird von konto.html nach dem Senden einer Schueler-Nachricht aufgerufen.
// POST { user_id, body } + Authorization: Bearer <Schueler-Access-Token>.
// replyTo = Schueler-E-Mail, damit Julia direkt aus dem Postfach antworten kann.
// Empfaenger = alle Profile mit is_admin = true.
// ENV: BREVO_API_KEY, BREVO_SENDER_EMAIL, SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY, SITE_URL.
import { createClient } from '@supabase/supabase-js';

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'method_not_allowed' });
  if (!process.env.BREVO_API_KEY) return res.status(200).json({ ok: false, skipped: 'no_brevo' });

  const token = (req.headers.authorization || '').replace('Bearer ', '');
  let { user_id, body } = req.body || {};
  body = (body || '').toString().slice(0, 2000);
  if (!token || !user_id || !body.trim()) return res.status(400).json({ error: 'bad_request' });

  const sb = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_SERVICE_ROLE_KEY);

  // Absender verifizieren: Token muss zum user_id passen
  const { data: { user }, error: uerr } = await sb.auth.getUser(token);
  if (uerr || !user || user.id !== user_id) return res.status(401).json({ error: 'unauthorized' });

  const { data: student } = await sb.from('profiles').select('name,email').eq('id', user_id).maybeSingle();
  const { data: admins } = await sb.from('profiles').select('email').eq('is_admin', true);
  const to = (admins || []).filter((a) => a.email && a.email.includes('@')).map((a) => ({ email: a.email }));
  if (!to.length) return res.status(200).json({ ok: true, sent: 0 });

  const site = process.env.SITE_URL || 'https://www.deutschoderwas-club.de';
  const name = (student && student.name) || 'Ein Mitglied';
  const studentEmail = student && student.email;
  const ok = await sendToTeam({ to, name, studentEmail, body, site });
  return res.status(200).json({ ok });
}

async function sendToTeam({ to, name, studentEmail, body, site }) {
  try {
    const esc = (s) => String(s == null ? '' : s).replace(/[<>&]/g, (c) => ({ '<': '&lt;', '>': '&gt;', '&': '&amp;' }[c]));
    const html = `<!DOCTYPE html><html lang="de"><body style="margin:0;padding:0;background:#FFF8E0;font-family:'Inter','Segoe UI',system-ui,sans-serif;color:#1A1A1A">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#FFF8E0;padding:24px 12px"><tr><td align="center">
    <table role="presentation" width="560" cellpadding="0" cellspacing="0" style="max-width:560px;width:100%;background:#FFFCF5;border:1px solid #F0E5D8;border-radius:20px;overflow:hidden">
      <tr><td style="padding:22px 30px 6px">
        <span style="font-family:'Space Grotesk','Segoe UI',sans-serif;font-weight:700;font-size:21px;color:#1A1A1A">deutsch<span style="color:#14B8A6">oderwas</span> <span style="font-size:12px;color:#6B7280">club</span></span>
      </td></tr>
      <tr><td style="padding:0 30px"><div style="height:3px;background:linear-gradient(135deg,#2DD4BF,#14B8A6);border-radius:999px"></div></td></tr>
      <tr><td style="padding:20px 30px 4px">
        <span style="font-weight:700;font-size:12px;letter-spacing:1px;text-transform:uppercase;color:#DD0000">Neue Nachricht</span>
        <h1 style="font-family:'Space Grotesk','Segoe UI',sans-serif;font-weight:700;font-size:23px;line-height:1.25;margin:8px 0 12px;color:#1A1A1A">${esc(name)} hat dir geschrieben &#9993;&#65039;</h1>
        <table role="presentation" width="100%" style="background:#FFF8E0;border:1px solid #F0E5D8;border-left:5px solid #2DD4BF;border-radius:14px">
          <tr><td style="padding:14px 18px;font-size:15px;line-height:1.6;color:#1A1A1A">${esc(body).slice(0, 1500)}</td></tr>
        </table>
        ${studentEmail ? `<p style="font-size:13px;color:#6B7280;margin:12px 0 0">Von: <b>${esc(name)}</b> &middot; ${esc(studentEmail)}</p>` : ''}
      </td></tr>
      <tr><td style="padding:14px 30px 4px">
        <div style="background:#F2FBFA;border:1px solid #CFEFEA;border-radius:14px;padding:14px 16px">
          <p style="font-size:14px;line-height:1.6;margin:0 0 12px;color:#0F766E"><b>Du kannst direkt auf diese E-Mail antworten</b> &ndash; deine Antwort geht dann an ${esc(name)}. Oder antworte im Club:</p>
          <p style="text-align:center;margin:0">
            <a href="${esc(site)}/admin.html" style="display:inline-block;background:linear-gradient(135deg,#2DD4BF,#14B8A6);color:#06403A;font-weight:700;font-size:15px;text-decoration:none;padding:12px 26px;border-radius:999px">&#128172; Im Admin antworten</a>
          </p>
        </div>
      </td></tr>
      <tr><td style="background:#1A1A1A;padding:16px 30px;text-align:center">
        <p style="font-size:12px;line-height:1.6;color:#b9b9b9;margin:0">Posteingang &middot; deutschoderwas club</p>
      </td></tr>
    </table>
  </td></tr></table>
</body></html>`;
    const payload = {
      sender: { name: 'deutschoderwas club', email: process.env.BREVO_SENDER_EMAIL || 'info@deutschoderwas.de' },
      to,
      subject: `Neue Nachricht von ${name}`,
      htmlContent: html,
    };
    if (studentEmail) payload.replyTo = { name, email: studentEmail };
    const r = await fetch('https://api.brevo.com/v3/smtp/email', {
      method: 'POST',
      headers: { 'api-key': process.env.BREVO_API_KEY, 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });
    if (!r.ok) { console.error('notify-incoming brevo', r.status, await r.text()); return false; }
    return true;
  } catch (e) { console.error('notify-incoming', e); return false; }
}
