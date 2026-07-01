// Stunden-Erinnerung per E-Mail (Brevo) – "~1 Stunde vorher".
// Wird stündlich getriggert (Supabase pg_cron -> pg_net POST auf diese Route).
// Fenster: alle gebuchten Stunden, die in den nächsten ~90 Minuten beginnen.
// email_log (kind:'reminder') sorgt dafür, dass jede Buchung genau EINE Erinnerung bekommt.
import { createClient } from '@supabase/supabase-js';

const FMT = new Intl.DateTimeFormat('de-DE', { timeZone:'Europe/Berlin', weekday:'long', hour:'2-digit', minute:'2-digit' });

export default async function handler(req, res) {
  if (!process.env.BREVO_API_KEY) return res.status(200).json({ ok:false, skipped:'BREVO_API_KEY fehlt' });
  const sb = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_SERVICE_ROLE_KEY);
  const site = process.env.SITE_URL || 'https://www.deutschoderwas-club.de';

  const now = new Date();
  const until = new Date(now.getTime() + 90 * 60 * 1000); // nächste ~90 Min

  const { data: cls } = await sb.from('classes')
    .select('id,title,level,topic,starts_at,zoom_link,material_pre,club')
    .gt('starts_at', now.toISOString()).lt('starts_at', until.toISOString())
    .eq('is_cancelled', false);
  if (!cls?.length) return res.status(200).json({ ok: true, sent: 0 });

  const { data: bks } = await sb.from('bookings')
    .select('class_id,user_id').in('class_id', cls.map(c => c.id)).eq('status', 'booked');
  if (!bks?.length) return res.status(200).json({ ok: true, sent: 0 });

  const { data: profs } = await sb.from('profiles')
    .select('id,name,email,email_optout').in('id', [...new Set(bks.map(b => b.user_id))]);
  const pmap = Object.fromEntries((profs || []).map(p => [p.id, p]));
  const cmap = Object.fromEntries(cls.map(c => [c.id, c]));

  // Club-Infos (Name, Emoji, Farbe) einmal laden
  const { data: clubs } = await sb.from('clubs').select('slug,name,emoji,color');
  const clubmap = Object.fromEntries((clubs || []).map(c => [c.slug, c]));

  let sent = 0, errors = 0;
  for (const b of bks) {
    const p = pmap[b.user_id], c = cmap[b.class_id];
    if (!p?.email || p.email_optout || !c) continue;

    const ref = `${b.class_id}:${b.user_id}`;
    const { error: logErr } = await sb.from('email_log').insert({ kind: 'reminder', ref, user_id: b.user_id });
    if (logErr) continue; // schon erinnert

    const when = FMT.format(new Date(c.starts_at));
    const vorname = (p.name || '').split(' ')[0] || 'du';
    const club = clubmap[c.club] || null;
    const html = brandedReminderEmail({
      vorname, cls: c, when, site,
      clubName: club?.name || '', clubEmoji: club?.emoji || '', clubColor: club?.color || '#2DD4BF',
    });

    const r = await fetch('https://api.brevo.com/v3/smtp/email', {
      method: 'POST',
      headers: { 'api-key': process.env.BREVO_API_KEY, 'Content-Type': 'application/json' },
      body: JSON.stringify({
        sender: { name: 'Julia | deutschoderwas', email: process.env.BREVO_SENDER_EMAIL || 'info@deutschoderwas.de' },
        to: [{ email: p.email, name: p.name || undefined }],
        subject: `⏰ Gleich geht's los: ${c.title} – ${when} Uhr`,
        htmlContent: html,
      }),
    });
    if (r.ok) sent++; else { errors++; await sb.from('email_log').delete().eq('kind','reminder').eq('ref', ref); }
  }
  return res.status(200).json({ ok: true, sent, errors });
}

// ---- deutschoderwas-Markendesign (Rot #DD0000 · Gold #FFCE00 · Creme #FFF8E0 · Petrol #2DD4BF) ----
function brandedReminderEmail({ vorname, cls, when, site, clubName, clubEmoji, clubColor }) {
  const esc = (s) => String(s == null ? '' : s).replace(/[<>&]/g, (c) => ({ '<':'&lt;', '>':'&gt;', '&':'&amp;' }[c]));
  const topic = cls.topic ? ` · ${esc(cls.topic)}` : '';
  const accent = clubColor || '#2DD4BF';
  const ff = "-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif";
  const clubChip = clubName ? `<span style="display:inline-block;background:${accent};color:#ffffff;font-family:${ff};font-size:11px;font-weight:800;letter-spacing:.04em;text-transform:uppercase;padding:4px 11px;border-radius:30px">${esc(clubEmoji)} ${esc(clubName)}</span>` : '';
  const meetBtn = `
            <tr><td align="center" style="padding:8px 0 4px">
              <a href="${esc(process.env.SITE_URL || 'https://www.deutschoderwas-club.de')}/schuelerbereich" style="display:inline-block;background:#DD0000;color:#ffffff;font-family:${ff};font-weight:800;font-size:15px;text-decoration:none;padding:14px 30px;border-radius:50px;box-shadow:0 6px 16px rgba(221,0,0,.28)">🔴 Jetzt zum Klassenraum</a>
            </td></tr>`;
  const matLine = cls.material_pre ? `
            <tr><td align="center" style="padding:6px 0 0;font-family:${ff};font-size:14px;color:#6B7280">
              📚 <a href="${esc(cls.material_pre)}" style="color:#0a7a5c;font-weight:700;text-decoration:none">Noch kurz vorbereiten?</a>
            </td></tr>` : '';
  const schuelerBtn = `
            <tr><td align="center" style="padding:8px 0 4px">
              <a href="${esc(site)}/schuelerbereich" style="display:inline-block;background:#1A1A1A;color:#ffffff;font-family:${ff};font-weight:800;font-size:15px;text-decoration:none;padding:14px 30px;border-radius:50px;box-shadow:0 6px 16px rgba(26,26,26,.22)">📋 Zu deinem Schülerbereich</a>
            </td></tr>`;

  return `<!DOCTYPE html>
<html lang="de"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><meta name="color-scheme" content="light"></head>
<body style="margin:0;padding:0;background:#FFF8E0;">
  <div style="display:none;max-height:0;overflow:hidden;opacity:0">Deine Stunde ${esc(cls.title)} beginnt bald – ${esc(when)} Uhr. Bis gleich! ⏰</div>
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#FFF8E0;padding:28px 14px">
    <tr><td align="center">
      <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width:560px;background:#ffffff;border-radius:24px;overflow:hidden;box-shadow:0 12px 36px rgba(26,26,26,.10)">

        <tr><td style="height:6px;line-height:6px;font-size:0;background:#1A1A1A">&nbsp;</td></tr>
        <tr><td style="height:6px;line-height:6px;font-size:0;background:#DD0000">&nbsp;</td></tr>
        <tr><td style="height:6px;line-height:6px;font-size:0;background:#FFCE00">&nbsp;</td></tr>

        <tr><td align="center" style="padding:26px 28px 6px">
          <div style="font-family:${ff};font-weight:800;font-size:15px;letter-spacing:.04em;color:#1A1A1A">deutschoderwas <span style="color:#DD0000">club</span></div>
          <div style="font-size:46px;line-height:1;margin:14px 0 4px">⏰</div>
          <h1 style="margin:6px 0 0;font-family:${ff};font-size:25px;font-weight:800;color:#1A1A1A">Gleich geht's los!</h1>
        </td></tr>

        <tr><td style="padding:10px 30px 0;font-family:${ff};font-size:15px;line-height:1.6;color:#1A1A1A">
          <p style="margin:0 0 4px">Hallo ${esc(vorname)},</p>
          <p style="margin:0">deine Stunde beginnt in etwa einer Stunde – sei pünktlich dabei. 💛</p>
        </td></tr>

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

        <tr><td style="padding:14px 30px 6px">
          <table role="presentation" width="100%" cellpadding="0" cellspacing="0">${meetBtn}${schuelerBtn}${matLine}</table>
        </td></tr>

        <tr><td style="padding:8px 30px 0">
          <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#FFF3C2;border-radius:12px">
            <tr><td style="padding:11px 14px;font-family:${ff};font-size:13px;line-height:1.5;color:#7a5b00">
              📱 <b>Kurz-Tipp fürs Mikrofon:</b> Öffne den Unterricht in <b>Safari</b> oder <b>Chrome</b> (nicht über einen Link in Instagram, TikTok oder deiner Mail-App) und <b>erlaube Mikrofon + Kamera</b>, wenn dein Browser fragt. Dann klappt das Sprechen sofort.
            </td></tr>
          </table>
        </td></tr>

        <tr><td style="padding:14px 30px 4px;font-family:${ff};font-size:13px;line-height:1.6;color:#6B7280">
          Klappt es doch nicht? Bis 2 Stunden vor Beginn kannst du in deinem
          <a href="${esc(site)}/schuelerbereich" style="color:#DD0000;font-weight:700;text-decoration:none">Schülerbereich</a> stornieren.
        </td></tr>

        <tr><td style="padding:16px 30px 4px;font-family:${ff};font-size:15px;line-height:1.6;color:#1A1A1A">
          Bis gleich!<br><b>Julia</b> &amp; das deutschoderwas-Team
        </td></tr>

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
