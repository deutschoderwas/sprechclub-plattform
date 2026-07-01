// Schickt Julia eine E-Mail, sobald eine Stunden-Bewertung gespeichert wird.
// Wird automatisch von einem DB-Trigger auf der Tabelle "ratings" aufgerufen (pg_net -> POST).
// POST { ratingId }.  Speichern passiert schon im Schülerbereich; hier nur die Benachrichtigung.
import { createClient } from '@supabase/supabase-js';

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).json({ ok: false, error: 'method_not_allowed' });
  if (!process.env.BREVO_API_KEY) return res.status(200).json({ ok: false, skipped: 'BREVO_API_KEY fehlt' });

  const { ratingId } = req.body || {};
  if (!ratingId) return res.status(400).json({ ok: false, error: 'bad_request' });

  const sb = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_SERVICE_ROLE_KEY);

  const { data: r } = await sb.from('ratings').select('user_id,class_id,stars,comment').eq('id', ratingId).maybeSingle();
  if (!r) return res.status(200).json({ ok: false, error: 'not_found' });

  const [{ data: prof }, { data: cls }] = await Promise.all([
    sb.from('profiles').select('name,email').eq('id', r.user_id).maybeSingle(),
    sb.from('classes').select('title,topic,level,starts_at').eq('id', r.class_id).maybeSingle(),
  ]);

  const html = ratingMail({ prof: prof || {}, cls: cls || {}, stars: r.stars, comment: r.comment });
  const rr = await fetch('https://api.brevo.com/v3/smtp/email', {
    method: 'POST',
    headers: { 'api-key': process.env.BREVO_API_KEY, 'Content-Type': 'application/json' },
    body: JSON.stringify({
      sender: { name: 'deutschoderwas club', email: process.env.BREVO_SENDER_EMAIL || 'info@deutschoderwas.de' },
      to: [{ email: process.env.ADMIN_EMAIL || 'deutschoderwas@gmail.com', name: 'Julia' }],
      replyTo: (prof && prof.email) ? { email: prof.email, name: prof.name || undefined } : undefined,
      subject: `⭐ Neue Bewertung (${r.stars}/5): ${(cls && (cls.topic || cls.title)) || 'Stunde'}`,
      htmlContent: html,
    }),
  });

  return res.status(200).json({ ok: rr.ok });
}

function ratingMail({ prof, cls, stars, comment }) {
  const esc = (s) => String(s == null ? '' : s).replace(/[<>&]/g, c => ({ '<': '&lt;', '>': '&gt;', '&': '&amp;' }[c]));
  const ff = "-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif";
  const sterne = '★'.repeat(stars) + '☆'.repeat(5 - stars);
  const wann = cls.starts_at ? new Date(cls.starts_at).toLocaleString('de-DE', { day: '2-digit', month: 'short', hour: '2-digit', minute: '2-digit' }) + ' Uhr' : '';
  return `<!DOCTYPE html><html lang="de"><head><meta charset="utf-8"></head>
<body style="margin:0;background:#FFF8E0;font-family:${ff}">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="padding:24px 14px"><tr><td align="center">
    <table role="presentation" width="100%" style="max-width:520px;background:#fff;border-radius:18px;overflow:hidden;box-shadow:0 8px 26px rgba(0,0,0,.08)">
      <tr><td style="height:6px;background:linear-gradient(135deg,#DD0000,#FFCE00)"></td></tr>
      <tr><td style="padding:24px 28px 6px">
        <div style="font-size:13px;font-weight:800;letter-spacing:.04em;color:#9CA3AF;text-transform:uppercase">deutschoderwas club · Bewertung</div>
        <h1 style="margin:8px 0 0;font-size:22px;color:#1a1a1a">⭐ Neue Stunden-Bewertung</h1>
      </td></tr>
      <tr><td style="padding:14px 28px 0;font-size:32px;letter-spacing:4px;color:#FFB800">${sterne} <span style="font-size:16px;color:#6B7280">${stars}/5</span></td></tr>
      <tr><td style="padding:10px 28px 0;font-size:15px;line-height:1.6;color:#1a1a1a">
        <b>Stunde:</b> ${esc(cls.topic || cls.title || '—')}${cls.level ? ` (${esc(cls.level)})` : ''}${wann ? `<br><b>Wann:</b> ${esc(wann)}` : ''}<br>
        <b>Von:</b> ${esc(prof.name || prof.email || 'Schüler:in')}
        ${comment ? `<div style="margin-top:12px;background:#F2FBFA;border:1px solid #CDEEEA;border-radius:12px;padding:12px 14px;font-style:italic">„${esc(comment)}"</div>` : ''}
      </td></tr>
      <tr><td style="padding:18px 28px 26px;font-size:12px;color:#9CA3AF;text-align:center">Antworte einfach auf diese Mail, um der Person zu schreiben · deutschoderwas-club.de</td></tr>
    </table>
  </td></tr></table>
</body></html>`;
}
