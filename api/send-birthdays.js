// Automatische Geburtstags-Mail (Brevo).
// Wird täglich per Supabase pg_cron getriggert.
// Schickt allen Schülern mit heutigem Geburtstag (außer Status 'beendet' / Opt-out)
// eine gebrandete Glückwunsch-Mail. email_log (kind:'birthday', ref:'<id>:<jahr>')
// stellt sicher: max. 1 Mail pro Schüler und Jahr.
import { createClient } from '@supabase/supabase-js';

export default async function handler(req, res) {
  if (!process.env.BREVO_API_KEY) return res.status(200).json({ ok: false, skipped: 'BREVO_API_KEY fehlt' });
  const sb = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_SERVICE_ROLE_KEY);
  const site = process.env.SITE_URL || 'https://www.deutschoderwas-club.de';

  // Heutiges Datum in Europe/Berlin
  const parts = new Intl.DateTimeFormat('en-CA', { timeZone: 'Europe/Berlin', year: 'numeric', month: '2-digit', day: '2-digit' })
    .formatToParts(new Date()).reduce((a, p) => (a[p.type] = p.value, a), {});
  const year = parts.year, mmdd = `${parts.month}-${parts.day}`;

  const { data: all } = await sb.from('profiles')
    .select('id,name,email,birthday,status,email_optout,is_admin,is_teacher')
    .not('birthday', 'is', null);
  const targets = (all || []).filter(p =>
    p.email && !p.email_optout && p.status !== 'beendet' &&
    typeof p.birthday === 'string' && p.birthday.slice(5) === mmdd
  );
  if (!targets.length) return res.status(200).json({ ok: true, sent: 0 });

  // schon dieses Jahr gratuliert?
  const refs = targets.map(t => `${t.id}:${year}`);
  const { data: done } = await sb.from('email_log').select('ref').eq('kind', 'birthday').in('ref', refs);
  const blocked = new Set((done || []).map(r => r.ref));

  let sent = 0, errors = 0;
  for (const p of targets) {
    const ref = `${p.id}:${year}`;
    if (blocked.has(ref)) continue;
    const { error: logErr } = await sb.from('email_log').insert({ kind: 'birthday', ref, user_id: p.id });
    if (logErr) continue;

    const vorname = (p.name || '').split(' ')[0] || 'du';
    const r = await fetch('https://api.brevo.com/v3/smtp/email', {
      method: 'POST',
      headers: { 'api-key': process.env.BREVO_API_KEY, 'Content-Type': 'application/json' },
      body: JSON.stringify({
        sender: { name: 'deutschoderwas', email: process.env.BREVO_SENDER_EMAIL || 'info@deutschoderwas.de' },
        replyTo: { name: 'Julia', email: process.env.BREVO_SENDER_EMAIL || 'info@deutschoderwas.de' },
        to: [{ email: p.email, name: p.name || undefined }],
        subject: `Alles Gute zum Geburtstag, ${vorname}! 🎂`,
        htmlContent: birthdayEmail({ vorname, site }),
      }),
    });
    if (r.ok) sent++; else { errors++; await sb.from('email_log').delete().eq('kind', 'birthday').eq('ref', ref); }
  }
  return res.status(200).json({ ok: true, sent, errors });
}

function birthdayEmail({ vorname, site }) {
  const esc = (s) => String(s == null ? '' : s).replace(/[<>&]/g, (c) => ({ '<': '&lt;', '>': '&gt;', '&': '&amp;' }[c]));
  const ff = "-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif";
  return `<!DOCTYPE html>
<html lang="de"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><meta name="color-scheme" content="light"></head>
<body style="margin:0;padding:0;background:#FFF8E0;">
  <div style="display:none;max-height:0;overflow:hidden;opacity:0">Herzlichen Glückwunsch zum Geburtstag! 🎂💛</div>
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#FFF8E0;padding:28px 14px">
    <tr><td align="center">
      <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width:560px;background:#fff;border-radius:24px;overflow:hidden;box-shadow:0 12px 36px rgba(26,26,26,.10)">
        <tr><td style="height:6px;background:#1A1A1A">&nbsp;</td></tr>
        <tr><td style="height:6px;background:#DD0000">&nbsp;</td></tr>
        <tr><td style="height:6px;background:#FFCE00">&nbsp;</td></tr>
        <tr><td align="center" style="padding:26px 28px 6px">
          <div style="font-family:${ff};font-weight:800;font-size:15px;letter-spacing:.04em;color:#1A1A1A">deutschoderwas <span style="color:#DD0000">club</span></div>
          <div style="font-size:54px;line-height:1;margin:14px 0 4px">🎂</div>
          <h1 style="margin:6px 0 0;font-family:${ff};font-size:26px;font-weight:800;color:#1A1A1A">Alles Gute, ${esc(vorname)}!</h1>
        </td></tr>
        <tr><td style="padding:12px 30px 0;font-family:${ff};font-size:15px;line-height:1.6;color:#1A1A1A;text-align:center">
          <p style="margin:0 0 10px">Heute ist dein Tag – und das ganze deutschoderwas-Team gratuliert dir von Herzen zum Geburtstag! 🥳</p>
          <p style="margin:0 0 10px">Wir wünschen dir ein wunderbares neues Lebensjahr voller Freude, Gesundheit und natürlich vieler schöner Momente beim Deutschlernen. 💛</p>
          <p style="margin:0 0 10px">Feier schön – wir sehen uns im Club!</p>
        </td></tr>
        <tr><td style="padding:8px 30px 4px;font-family:${ff};font-size:15px;line-height:1.6;color:#1A1A1A;text-align:center">
          Herzliche Grüße<br><b>Julia</b> &amp; das deutschoderwas-Team
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
