// Buchungsbestätigung per E-Mail (Brevo).
// Wird von konto.html (Schülerbereich) direkt nach erfolgreicher Buchung aufgerufen.
// POST { class_id } + Authorization: Bearer <Supabase-Access-Token des Schülers>
import { createClient } from '@supabase/supabase-js';

const FMT = new Intl.DateTimeFormat('de-DE', { timeZone:'Europe/Berlin', weekday:'long', day:'numeric', month:'long', hour:'2-digit', minute:'2-digit' });

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'method_not_allowed' });
  if (!process.env.BREVO_API_KEY) return res.status(200).json({ ok:false, skipped:'BREVO_API_KEY fehlt' });

  const token = (req.headers.authorization || '').replace('Bearer ', '');
  const { class_id } = req.body || {};
  if (!token || !class_id) return res.status(400).json({ error: 'bad_request' });

  const sb = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_SERVICE_ROLE_KEY);

  // Wer ruft an?
  const { data: { user }, error: uerr } = await sb.auth.getUser(token);
  if (uerr || !user) return res.status(401).json({ error: 'unauthorized' });

  // Buchung verifizieren
  const { data: bk } = await sb.from('bookings').select('class_id')
    .eq('user_id', user.id).eq('class_id', class_id).eq('status', 'booked').maybeSingle();
  if (!bk) return res.status(404).json({ error: 'booking_not_found' });

  // Doppel-Mail verhindern
  const { error: logErr } = await sb.from('email_log')
    .insert({ kind: 'booking', ref: `${class_id}:${user.id}`, user_id: user.id });
  if (logErr) return res.status(200).json({ ok: true, already_sent: true });

  const [{ data: cls }, { data: prof }] = await Promise.all([
    sb.from('classes').select('title,level,topic,starts_at,zoom_link,material_pre').eq('id', class_id).single(),
    sb.from('profiles').select('name,email').eq('id', user.id).single(),
  ]);
  if (!cls || !prof?.email) return res.status(404).json({ error: 'data_missing' });

  const site = process.env.SITE_URL || 'https://www.deutschoderwas-club.de';
  const when = FMT.format(new Date(cls.starts_at));
  const vorname = (prof.name || '').split(' ')[0] || 'du';

  const html = brandedBookingEmail({ vorname, cls, when, site });

  const r = await fetch('https://api.brevo.com/v3/smtp/email', {
    method: 'POST',
    headers: { 'api-key': process.env.BREVO_API_KEY, 'Content-Type': 'application/json' },
    body: JSON.stringify({
      sender: { name: 'Julia | deutschoderwas', email: process.env.BREVO_SENDER_EMAIL || 'info@deutschoderwas.de' },
      to: [{ email: prof.email, name: prof.name || undefined }],
      subject: `✅ Buchung bestätigt: ${cls.title} am ${when}`,
      htmlContent: html,
    }),
  });
  if (!r.ok) {
    await sb.from('email_log').delete().eq('kind', 'booking').eq('ref', `${class_id}:${user.id}`);
    return res.status(200).json({ ok: false, brevo: r.status });
  }
  return res.status(200).json({ ok: true });
}

// ---- deutschoderwas-Markendesign (Rot #DD0000 · Gold #FFCE00 · Creme #FFF8E0 · Petrol #2DD4BF) ----
function brandedBookingEmail({ vorname, cls, when, site }) {
  const esc = (s) => String(s == null ? '' : s).replace(/[<>&]/g, (c) => ({ '<':'&lt;', '>':'&gt;', '&':'&amp;' }[c]));
  const topic = cls.topic ? ` · ${esc(cls.topic)}` : '';
  const ff = "-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif";
  const meetBtn = cls.zoom_link ? `
            <tr><td align="center" style="padding:8px 0 4px">
              <a href="${esc(cls.zoom_link)}" style="display:inline-block;background:#DD0000;color:#ffffff;font-family:${ff};font-weight:800;font-size:15px;text-decoration:none;padding:14px 30px;border-radius:50px;box-shadow:0 6px 16px rgba(221,0,0,.28)">🎥 Zum Unterricht (Google&nbsp;Meet)</a>
            </td></tr>` : '';
  const matLine = cls.material_pre ? `
            <tr><td align="center" style="padding:6px 0 0;font-family:${ff};font-size:14px;color:#6B7280">
              📚 <a href="${esc(cls.material_pre)}" style="color:#0a7a5c;font-weight:700;text-decoration:none">Material zur Vorbereitung ansehen</a>
            </td></tr>` : '';

  return `<!DOCTYPE html>
<html lang="de"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><meta name="color-scheme" content="light"></head>
<body style="margin:0;padding:0;background:#FFF8E0;">
  <div style="display:none;max-height:0;overflow:hidden;opacity:0">Deine Stunde ist reserviert – ${esc(cls.title)} am ${esc(when)} Uhr. Bis bald im Sprechclub! 🎉</div>
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#FFF8E0;padding:28px 14px">
    <tr><td align="center">
      <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width:560px;background:#ffffff;border-radius:24px;overflow:hidden;box-shadow:0 12px 36px rgba(26,26,26,.10)">

        <!-- Deutschland-Streifen -->
        <tr><td style="height:6px;line-height:6px;font-size:0;background:#1A1A1A">&nbsp;</td></tr>
        <tr><td style="height:6px;line-height:6px;font-size:0;background:#DD0000">&nbsp;</td></tr>
        <tr><td style="height:6px;line-height:6px;font-size:0;background:#FFCE00">&nbsp;</td></tr>

        <!-- Kopf -->
        <tr><td align="center" style="padding:26px 28px 6px">
          <div style="font-family:${ff};font-weight:800;font-size:15px;letter-spacing:.04em;color:#1A1A1A">deutschoderwas <span style="color:#DD0000">club</span></div>
          <div style="font-size:46px;line-height:1;margin:14px 0 4px">🎉</div>
          <h1 style="margin:6px 0 0;font-family:${ff};font-size:25px;font-weight:800;color:#1A1A1A">Buchung bestätigt!</h1>
        </td></tr>

        <!-- Text -->
        <tr><td style="padding:10px 30px 0;font-family:${ff};font-size:15px;line-height:1.6;color:#1A1A1A">
          <p style="margin:0 0 4px">Hallo ${esc(vorname)},</p>
          <p style="margin:0">schön, dass du dabei bist – deine Stunde ist fest für dich reserviert. 💛</p>
        </td></tr>

        <!-- Stunden-Karte -->
        <tr><td style="padding:18px 30px 4px">
          <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#FFF8E0;border:1px solid #F0E5D8;border-left:5px solid #2DD4BF;border-radius:16px">
            <tr><td style="padding:18px 20px;font-family:${ff}">
              <div style="font-size:12px;font-weight:800;text-transform:uppercase;letter-spacing:.06em;color:#2DD4BF">Deine Stunde</div>
              <div style="font-size:18px;font-weight:800;color:#1A1A1A;margin:5px 0 2px">${esc(cls.title)}</div>
              <div style="font-size:14px;color:#6B7280;margin-bottom:10px">${esc(cls.level)}${topic}</div>
              <div style="font-size:15px;font-weight:700;color:#1A1A1A">🗓️ ${esc(when)} Uhr</div>
            </td></tr>
          </table>
        </td></tr>

        <!-- CTA + Material -->
        <tr><td style="padding:14px 30px 6px">
          <table role="presentation" width="100%" cellpadding="0" cellspacing="0">${meetBtn}${matLine}</table>
        </td></tr>

        <!-- Hinweis -->
        <tr><td style="padding:14px 30px 4px;font-family:${ff};font-size:13px;line-height:1.6;color:#6B7280">
          Du kannst kostenlos bis 2 Stunden vor Beginn in deinem
          <a href="${esc(site)}/konto.html" style="color:#DD0000;font-weight:700;text-decoration:none">Schülerbereich</a> stornieren – dein Guthaben wird erst nach der Teilnahme abgezogen.
        </td></tr>

        <!-- Gruß -->
        <tr><td style="padding:16px 30px 4px;font-family:${ff};font-size:15px;line-height:1.6;color:#1A1A1A">
          Bis bald im Sprechclub!<br><b>Julia</b> &amp; das deutschoderwas-Team
        </td></tr>

        <!-- Footer -->
        <tr><td style="padding:20px 30px 26px">
          <div style="border-top:1px solid #F0E5D8;padding-top:14px;font-family:${ff};font-size:12px;color:#9CA3AF;text-align:center">
            <a href="${esc(site)}" style="color:#9CA3AF;text-decoration:none">deutschoderwas-club.de</a> · Deutsch lernen, das Spaß macht 🇩🇪
          </div>
        </td></tr>

      </table>
    </td></tr>
  </table>
</body></html>`;
}
