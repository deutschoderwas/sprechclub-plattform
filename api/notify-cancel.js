// Admin-Benachrichtigung bei Stornierung (Brevo).
// Wird von konto.html (cancelB) nach erfolgreichem cancel_booking aufgerufen.
// POST { class_id } + Authorization: Bearer <Supabase-Access-Token des Schülers>
import { createClient } from '@supabase/supabase-js';
import { notifyAdmin } from './notify-booking.js';

const FMT = new Intl.DateTimeFormat('de-DE', { timeZone:'Europe/Berlin', weekday:'long', day:'numeric', month:'long', hour:'2-digit', minute:'2-digit' });

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'method_not_allowed' });
  if (!process.env.BREVO_API_KEY) return res.status(200).json({ ok:false, skipped:'BREVO_API_KEY fehlt' });

  const token = (req.headers.authorization || '').replace('Bearer ', '');
  const { class_id } = req.body || {};
  if (!token || !class_id) return res.status(400).json({ error: 'bad_request' });

  const sb = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_SERVICE_ROLE_KEY);

  const { data: { user }, error: uerr } = await sb.auth.getUser(token);
  if (uerr || !user) return res.status(401).json({ error: 'unauthorized' });

  const [{ data: cls }, { data: prof }] = await Promise.all([
    sb.from('classes').select('title,level,starts_at,club').eq('id', class_id).single(),
    sb.from('profiles').select('name,email').eq('id', user.id).single(),
  ]);
  if (!cls) return res.status(404).json({ error: 'data_missing' });

  let clubName = '';
  if (cls.club) { const { data } = await sb.from('clubs').select('name').eq('slug', cls.club).maybeSingle(); clubName = data?.name || ''; }

  const when = FMT.format(new Date(cls.starts_at));

  // 1) Bestätigung an den/die Schüler:in (einmal pro Storno via email_log)
  if (prof?.email) {
    const ref = `${class_id}:${user.id}:cancel`;
    const { error: logErr } = await sb.from('email_log').insert({ kind:'cancel_student', ref, user_id:user.id });
    if (!logErr) {
      const r = await fetch('https://api.brevo.com/v3/smtp/email', {
        method: 'POST',
        headers: { 'api-key': process.env.BREVO_API_KEY, 'Content-Type': 'application/json' },
        body: JSON.stringify({
          sender: { name: 'deutschoderwas club', email: process.env.BREVO_SENDER_EMAIL || 'info@deutschoderwas.de' },
          to: [{ email: prof.email, name: prof.name || undefined }],
          subject: `↩️ Storniert: ${cls.title} am ${when}`,
          htmlContent: studentCancelEmail({ vorname:(prof.name||'').split(' ')[0]||'du', cls, when, clubName, site:(process.env.SITE_URL||'https://www.deutschoderwas-club.de') }),
        }),
      });
      if (!r.ok) await sb.from('email_log').delete().eq('kind','cancel_student').eq('ref', ref);
    }
  }

  // 2) Admin-Benachrichtigung an Julia
  try {
    await notifyAdmin(sb, { type:'cancel', prof:{ ...prof, id:user.id }, cls:{ ...cls, id:class_id }, when, clubName });
  } catch (e) {}

  return res.status(200).json({ ok: true });
}

function studentCancelEmail({ vorname, cls, when, clubName, site }) {
  const ff = "-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif";
  const esc = (s) => String(s == null ? '' : s).replace(/[<>&]/g, (c) => ({ '<':'&lt;','>':'&gt;','&':'&amp;' }[c]));
  return `<!DOCTYPE html><html lang="de"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"></head>
<body style="margin:0;background:#FFF8E0;font-family:${ff}">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="padding:28px 14px"><tr><td align="center">
    <table role="presentation" width="100%" style="max-width:540px;background:#fff;border-radius:22px;overflow:hidden;box-shadow:0 12px 36px rgba(26,26,26,.10)">
      <tr><td style="height:6px;background:#1A1A1A"></td></tr>
      <tr><td style="height:6px;background:#DD0000"></td></tr>
      <tr><td style="height:6px;background:#FFCE00"></td></tr>
      <tr><td align="center" style="padding:24px 28px 4px">
        <div style="font-weight:800;font-size:15px;letter-spacing:.04em;color:#1A1A1A">deutschoderwas <span style="color:#DD0000">club</span></div>
        <div style="font-size:42px;line-height:1;margin:12px 0 2px">↩️</div>
        <h1 style="margin:6px 0 0;font-size:24px;font-weight:800;color:#1A1A1A">Stornierung bestätigt</h1>
      </td></tr>
      <tr><td style="padding:10px 30px 0;font-size:15px;line-height:1.6;color:#1A1A1A">
        <p style="margin:0 0 4px">Hallo ${esc(vorname)},</p>
        <p style="margin:0">deine Buchung wurde storniert und deine Stunde wieder gutgeschrieben. 💛</p>
      </td></tr>
      <tr><td style="padding:18px 30px 4px">
        <table role="presentation" width="100%" style="background:#FFF8E0;border:1px solid #F0E5D8;border-left:5px solid #DD0000;border-radius:16px"><tr><td style="padding:18px 20px">
          ${clubName ? `<div style="font-size:12px;font-weight:800;color:#DD0000;text-transform:uppercase;letter-spacing:.03em;margin-bottom:6px">${esc(clubName)}</div>` : ''}
          <div style="font-size:18px;font-weight:800;color:#1A1A1A">${esc(cls.title)}</div>
          <div style="font-size:14px;color:#6B7280;margin-bottom:8px">${esc(cls.level)}</div>
          <div style="font-size:15px;font-weight:700;color:#1A1A1A;text-decoration:line-through;opacity:.7">🗓️ ${esc(when)} Uhr</div>
        </td></tr></table>
      </td></tr>
      <tr><td align="center" style="padding:18px 30px 6px">
        <a href="${esc(site)}/schuelerbereich" style="display:inline-block;background:#1A1A1A;color:#fff;font-weight:800;font-size:15px;text-decoration:none;padding:14px 30px;border-radius:50px">📅 Neue Stunde buchen</a>
      </td></tr>
      <tr><td style="padding:16px 30px 6px;font-size:15px;line-height:1.6;color:#1A1A1A">Bis bald im Sprechclub!<br><b>Julia</b> &amp; das deutschoderwas-Team</td></tr>
      <tr><td style="padding:18px 30px 26px"><div style="border-top:1px solid #F0E5D8;padding-top:14px;font-size:12px;color:#9CA3AF;text-align:center"><a href="${esc(site)}" style="color:#9CA3AF;text-decoration:none">deutschoderwas-club.de</a> · Deutsch lernen, das Spaß macht 🇩🇪</div></td></tr>
    </table>
  </td></tr></table>
</body></html>`;
}
