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
    sb.from('classes').select('title,level,topic,starts_at,zoom_link,material_pre,club').eq('id', class_id).single(),
    sb.from('profiles').select('name,email').eq('id', user.id).single(),
  ]);
  if (!cls || !prof?.email) return res.status(404).json({ error: 'data_missing' });

  // Club-Infos (Name, Emoji, Farbe) für ein klares Label in der Mail
  let club = null;
  if (cls.club) { const { data } = await sb.from('clubs').select('name,emoji,color').eq('slug', cls.club).maybeSingle(); club = data; }
  const clubName = club?.name || '';
  const clubEmoji = club?.emoji || '';
  const clubColor = club?.color || '#2DD4BF';

  const site = process.env.SITE_URL || 'https://www.deutschoderwas-club.de';
  const when = FMT.format(new Date(cls.starts_at));
  const vorname = (prof.name || '').split(' ')[0] || 'du';

  const html = brandedBookingEmail({ vorname, cls, when, site, clubName, clubEmoji, clubColor });

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

  // ---- Admin-Benachrichtigung an Julia (eigener Log-Eintrag, blockiert die Schüler-Mail nie) ----
  try { await notifyAdmin(sb, { type:'booking', prof:{ ...prof, id:user.id }, cls:{ ...cls, id:class_id }, when, clubName }); } catch (e) {}

  return res.status(200).json({ ok: true });
}

// Schickt Julia eine kurze Info-Mail über Buchung/Storno. Dedupe via email_log.
export async function notifyAdmin(sb, { type, prof, cls, when, clubName }) {
  if (!process.env.BREVO_API_KEY) return;
  const adminEmail = process.env.ADMIN_EMAIL || 'deutschoderwas@gmail.com';
  const kind = type === 'cancel' ? 'cancel_admin' : 'booking_admin';
  const ref = `${cls?.id || cls?.class_id || 'x'}:${prof?.id || ''}:${type}`;
  // Dedupe: gleiche Buchung/Storno nicht doppelt melden
  const { error: logErr } = await sb.from('email_log').insert({ kind, ref, user_id: prof?.id || null });
  if (logErr) return; // schon gemeldet
  const isCancel = type === 'cancel';
  const emoji = isCancel ? '⚠️' : '✅';
  const head = isCancel ? 'Stornierung' : 'Neue Buchung';
  const verb = isCancel ? 'hat storniert' : 'hat gebucht';
  const ff = "-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif";
  const esc = (s) => String(s == null ? '' : s).replace(/[<>&]/g, (c) => ({ '<':'&lt;','>':'&gt;','&':'&amp;' }[c]));
  const accent = isCancel ? '#DD0000' : '#0a7a5c';
  const html = `<!DOCTYPE html><html lang="de"><head><meta charset="utf-8"></head>
<body style="margin:0;background:#FFF8E0;font-family:${ff}">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="padding:24px 14px"><tr><td align="center">
    <table role="presentation" width="100%" style="max-width:520px;background:#fff;border-radius:18px;overflow:hidden;box-shadow:0 8px 26px rgba(0,0,0,.08)">
      <tr><td style="height:5px;background:${accent}"></td></tr>
      <tr><td style="padding:22px 26px 6px">
        <div style="font-size:13px;font-weight:800;letter-spacing:.04em;color:#9CA3AF;text-transform:uppercase">Admin-Info · deutschoderwas club</div>
        <h1 style="margin:8px 0 0;font-size:22px;color:#1A1A1A">${emoji} ${head}</h1>
      </td></tr>
      <tr><td style="padding:10px 26px 0;font-size:15px;line-height:1.6;color:#1A1A1A">
        <b>${esc(prof?.name || 'Ein:e Schüler:in')}</b> ${verb}${prof?.email ? ` <span style="color:#6B7280">(${esc(prof.email)})</span>` : ''}:
      </td></tr>
      <tr><td style="padding:14px 26px 4px">
        <table role="presentation" width="100%" style="background:#FFF8E0;border:1px solid #F0E5D8;border-left:4px solid ${accent};border-radius:14px"><tr><td style="padding:14px 16px">
          ${clubName ? `<div style="font-size:12px;font-weight:800;color:${accent};text-transform:uppercase;letter-spacing:.03em;margin-bottom:5px">${esc(clubName)}</div>` : ''}
          <div style="font-size:17px;font-weight:800;color:#1A1A1A">${esc(cls?.title || '')}</div>
          <div style="font-size:13px;color:#6B7280;margin:2px 0 8px">${esc(cls?.level || '')}</div>
          <div style="font-size:14px;font-weight:700;color:#1A1A1A">🗓️ ${esc(when)} Uhr</div>
        </td></tr></table>
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
      subject: `${emoji} ${head}: ${cls?.title || ''} — ${prof?.name || ''}`,
      htmlContent: html,
    }),
  });
  if (!r.ok) { await sb.from('email_log').delete().eq('kind', kind).eq('ref', ref); }
}

// ---- deutschoderwas-Markendesign (Rot #DD0000 · Gold #FFCE00 · Creme #FFF8E0 · Petrol #2DD4BF) ----
function brandedBookingEmail({ vorname, cls, when, site, clubName, clubEmoji, clubColor }) {
  const esc = (s) => String(s == null ? '' : s).replace(/[<>&]/g, (c) => ({ '<':'&lt;', '>':'&gt;', '&':'&amp;' }[c]));
  const topic = cls.topic ? ` · ${esc(cls.topic)}` : '';
  const accent = clubColor || '#2DD4BF';
  const ff = "-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif";
  const clubChip = clubName ? `<span style="display:inline-block;background:${accent};color:#ffffff;font-family:${ff};font-size:11px;font-weight:800;letter-spacing:.04em;text-transform:uppercase;padding:4px 11px;border-radius:30px">${esc(clubEmoji)} ${esc(clubName)}</span>` : '';
  const meetBtn = cls.zoom_link ? `
            <tr><td align="center" style="padding:8px 0 4px">
              <a href="${esc(cls.zoom_link)}" style="display:inline-block;background:#DD0000;color:#ffffff;font-family:${ff};font-weight:800;font-size:15px;text-decoration:none;padding:14px 30px;border-radius:50px;box-shadow:0 6px 16px rgba(221,0,0,.28)">🎥 Zum Unterricht (Google&nbsp;Meet)</a>
            </td></tr>` : '';
  const matLine = cls.material_pre ? `
            <tr><td align="center" style="padding:6px 0 0;font-family:${ff};font-size:14px;color:#6B7280">
              📚 <a href="${esc(cls.material_pre)}" style="color:#0a7a5c;font-weight:700;text-decoration:none">Material zur Vorbereitung ansehen</a>
            </td></tr>` : '';
  const schuelerBtn = `
            <tr><td align="center" style="padding:8px 0 4px">
              <a href="${esc(site)}/schuelerbereich" style="display:inline-block;background:#1A1A1A;color:#ffffff;font-family:${ff};font-weight:800;font-size:15px;text-decoration:none;padding:14px 30px;border-radius:50px;box-shadow:0 6px 16px rgba(26,26,26,.22)">📋 Zu deinem Schülerbereich</a>
            </td></tr>`;

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
          <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#FFF8E0;border:1px solid #F0E5D8;border-left:5px solid ${accent};border-radius:16px">
            <tr><td style="padding:18px 20px;font-family:${ff}">
              ${clubChip ? `<div style="margin-bottom:9px">${clubChip}</div>` : ''}
              <div style="font-size:18px;font-weight:800;color:#1A1A1A;margin:0 0 2px">${esc(cls.title)}</div>
              <div style="font-size:14px;color:#6B7280;margin-bottom:10px">${esc(cls.level)}${topic}</div>
              <div style="font-size:15px;font-weight:700;color:#1A1A1A">🗓️ ${esc(when)} Uhr</div>
            </td></tr>
          </table>
        </td></tr>

        <!-- CTA + Material -->
        <tr><td style="padding:14px 30px 6px">
          <table role="presentation" width="100%" cellpadding="0" cellspacing="0">${meetBtn}${schuelerBtn}${matLine}</table>
        </td></tr>

        <!-- Hinweis -->
        <tr><td style="padding:14px 30px 4px;font-family:${ff};font-size:13px;line-height:1.6;color:#6B7280">
          Du kannst kostenlos bis 2 Stunden vor Beginn in deinem
          <a href="${esc(site)}/schuelerbereich" style="color:#DD0000;font-weight:700;text-decoration:none">Schülerbereich</a> stornieren – dein Guthaben wird erst nach der Teilnahme abgezogen.
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
