// Schüler meldet sich für eine Erinnerung zur Live-Masterclass an.
// POST { mc_date:'YYYY-MM-DD', topic } mit Authorization: Bearer <Access-Token>.
// Speichert die Anmeldung + schickt eine Bestätigung mit Kalender-Datei (.ics, inkl. Erinnerung).
import { createClient } from '@supabase/supabase-js';

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'method_not_allowed' });
  const token = (req.headers.authorization || '').replace('Bearer ', '');
  if (!token) return res.status(401).json({ error: 'no_token' });
  if (!process.env.SUPABASE_URL || !process.env.SUPABASE_SERVICE_ROLE_KEY) return res.status(500).json({ error: 'not_configured' });

  const sb = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_SERVICE_ROLE_KEY);
  const { data: { user } = {}, error: uerr } = await sb.auth.getUser(token);
  if (uerr || !user) return res.status(401).json({ error: 'unauthorized' });

  const b = req.body || {};
  const mc_date = String(b.mc_date || '').slice(0, 10);
  const topic = String(b.topic || '').slice(0, 200);
  if (!/^\d{4}-\d{2}-\d{2}$/.test(mc_date)) return res.status(400).json({ error: 'bad_date' });

  const { data: prof } = await sb.from('profiles').select('name,email').eq('id', user.id).maybeSingle();
  const email = (prof?.email || user.email || '').trim().toLowerCase();
  const name = prof?.name || '';

  try {
    await sb.from('masterclass_reminders').upsert(
      { user_id: user.id, email, name, mc_date, topic, notified: false },
      { onConflict: 'email,mc_date' }
    );
  } catch (e) { console.error('mc upsert', e); }

  let mailed = false;
  try {
    if (process.env.BREVO_API_KEY && email) {
      const r = await fetch('https://api.brevo.com/v3/smtp/email', {
        method: 'POST',
        headers: { 'api-key': process.env.BREVO_API_KEY, 'Content-Type': 'application/json' },
        body: JSON.stringify({
          sender: { name: 'deutschoderwas club', email: process.env.BREVO_SENDER_EMAIL || 'info@deutschoderwas.de' },
          to: [{ email, name: name || undefined }],
          subject: '🔔 Erinnerung gesichert – deine Live-Masterclass',
          htmlContent: mail(name, mc_date, topic),
          attachment: [{ name: 'masterclass.ics', content: Buffer.from(buildICS(mc_date, topic), 'utf8').toString('base64') }],
        }),
      });
      mailed = r.ok;
    }
  } catch (e) { console.error('mc mail', e); }

  return res.status(200).json({ ok: true, mailed });
}

function deDate(iso) {
  const [y, m, d] = iso.split('-').map(Number);
  const wt = ['Sonntag', 'Montag', 'Dienstag', 'Mittwoch', 'Donnerstag', 'Freitag', 'Samstag'][new Date(Date.UTC(y, m - 1, d)).getUTCDay()];
  const mn = ['Januar', 'Februar', 'März', 'April', 'Mai', 'Juni', 'Juli', 'August', 'September', 'Oktober', 'November', 'Dezember'][m - 1];
  return `${wt}, ${d}. ${mn} ${y}`;
}

function buildICS(mc_date, topic) {
  const dt = mc_date.replace(/-/g, '');
  const stamp = new Date().toISOString().replace(/[-:]/g, '').split('.')[0] + 'Z';
  const t = topic ? topic.replace(/([,;\\])/g, '\\$1') : 'Live-Masterclass';
  return [
    'BEGIN:VCALENDAR', 'VERSION:2.0', 'PRODID:-//deutschoderwas//Masterclass//DE', 'CALSCALE:GREGORIAN', 'METHOD:PUBLISH',
    'BEGIN:VTIMEZONE', 'TZID:Europe/Berlin',
    'BEGIN:DAYLIGHT', 'TZOFFSETFROM:+0100', 'TZOFFSETTO:+0200', 'TZNAME:CEST', 'DTSTART:19700329T020000', 'RRULE:FREQ=YEARLY;BYMONTH=3;BYDAY=-1SU', 'END:DAYLIGHT',
    'BEGIN:STANDARD', 'TZOFFSETFROM:+0200', 'TZOFFSETTO:+0100', 'TZNAME:CET', 'DTSTART:19701025T030000', 'RRULE:FREQ=YEARLY;BYMONTH=10;BYDAY=-1SU', 'END:STANDARD',
    'END:VTIMEZONE',
    'BEGIN:VEVENT', `UID:mc-${dt}@deutschoderwas-club.de`, `DTSTAMP:${stamp}`,
    `DTSTART;TZID=Europe/Berlin:${dt}T190000`, `DTEND;TZID=Europe/Berlin:${dt}T200000`,
    `SUMMARY:Live-Masterclass: ${t}`,
    'DESCRIPTION:Deine monatliche Live-Masterclass im deutschoderwas club. Login im Schülerbereich.',
    'LOCATION:deutschoderwas club (online)',
    'BEGIN:VALARM', 'TRIGGER:-PT1H', 'ACTION:DISPLAY', 'DESCRIPTION:Live-Masterclass startet gleich', 'END:VALARM',
    'END:VEVENT', 'END:VCALENDAR',
  ].join('\r\n');
}

function mail(name, mc_date, topic) {
  const vorname = (name || '').split(' ')[0];
  const hallo = vorname ? `Hallo ${vorname},` : 'Hallo,';
  const ff = "-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif";
  return `<!DOCTYPE html><html lang="de"><body style="margin:0;background:#FFF8E0;font-family:${ff}">
  <table role="presentation" width="100%" style="padding:24px 14px"><tr><td align="center">
    <table role="presentation" width="100%" style="max-width:560px;background:#fff;border-radius:18px;overflow:hidden;box-shadow:0 8px 26px rgba(0,0,0,.08)">
      <tr><td style="height:6px;background:linear-gradient(90deg,#DD0000 0 33%,#FFCE00 33% 66%,#2DD4BF 66% 100%)"></td></tr>
      <tr><td style="padding:26px 30px 6px">
        <div style="font-size:13px;font-weight:800;letter-spacing:.04em;color:#0F766E;text-transform:uppercase">Live-Masterclass</div>
        <h1 style="margin:8px 0 4px;font-size:23px;color:#1A1A1A">Du bist dabei! 🎉</h1>
        <p style="font-size:16px;line-height:1.6;color:#1A1A1A;margin:10px 0 6px">${hallo} wir erinnern dich rechtzeitig an deine nächste Live-Masterclass:</p>
      </td></tr>
      <tr><td style="padding:6px 30px 8px">
        <div style="background:#F2FBFA;border:1px solid #CFEFEA;border-radius:14px;padding:16px 18px">
          <div style="font-size:15px;font-weight:800;color:#0F766E">📅 ${deDate(mc_date)} · 19:00 Uhr</div>
          ${topic ? `<div style="font-size:15px;color:#1A1A1A;margin-top:6px"><b>Thema:</b> ${topic.replace(/[<>&]/g, '')}</div>` : ''}
        </div>
        <p style="font-size:14px;line-height:1.6;color:#5B6A70;margin:14px 0 0">Wir haben dir eine Kalender-Datei angehängt – so hast du den Termin direkt im Kalender, inklusive Erinnerung. Am Tag davor bekommst du von uns nochmal eine kurze Erinnerung per Mail.</p>
      </td></tr>
      <tr><td style="padding:8px 30px 26px;font-size:12px;color:#9CA3AF">Bis bald im Club 💛 · deutschoderwas club</td></tr>
    </table>
  </td></tr></table></body></html>`;
}
