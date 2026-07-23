// Erinnerungs-Mail am Tag VOR der Live-Masterclass an alle Angemeldeten. Wird von /api/daily (Cron) aufgerufen.
import { createClient } from '@supabase/supabase-js';

export default async function handler(req, res) {
  if (!process.env.SUPABASE_URL || !process.env.SUPABASE_SERVICE_ROLE_KEY) return res.status(200).json({ skipped: 'no_db' });
  const sb = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_SERVICE_ROLE_KEY);

  // "Morgen" (Tag vor der Masterclass)
  const t = new Date(); t.setUTCDate(t.getUTCDate() + 1);
  const iso = t.toISOString().slice(0, 10);

  const { data: rows } = await sb.from('masterclass_reminders')
    .select('id,email,name,mc_date,topic').eq('mc_date', iso).eq('notified', false);
  if (!rows || !rows.length) return res.status(200).json({ ok: true, sent: 0 });

  let sent = 0;
  for (const r of rows) {
    try {
      if (process.env.BREVO_API_KEY && r.email) {
        await fetch('https://api.brevo.com/v3/smtp/email', {
          method: 'POST',
          headers: { 'api-key': process.env.BREVO_API_KEY, 'Content-Type': 'application/json' },
          body: JSON.stringify({
            sender: { name: 'deutschoderwas club', email: process.env.BREVO_SENDER_EMAIL || 'info@deutschoderwas.de' },
            to: [{ email: r.email, name: r.name || undefined }],
            subject: '⏰ Morgen: deine Live-Masterclass um 19 Uhr',
            htmlContent: mail(r.name, r.topic),
          }),
        });
      }
      await sb.from('masterclass_reminders').update({ notified: true }).eq('id', r.id);
      sent++;
    } catch (e) { console.error('mc send', e); }
  }
  return res.status(200).json({ ok: true, sent });
}

function mail(name, topic) {
  const vorname = (name || '').split(' ')[0];
  const hallo = vorname ? `Hallo ${vorname},` : 'Hallo,';
  const ff = "-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif";
  return `<!DOCTYPE html><html lang="de"><body style="margin:0;background:#FFF8E0;font-family:${ff}">
  <table role="presentation" width="100%" style="padding:24px 14px"><tr><td align="center">
    <table role="presentation" width="100%" style="max-width:560px;background:#fff;border-radius:18px;overflow:hidden;box-shadow:0 8px 26px rgba(0,0,0,.08)">
      <tr><td style="height:6px;background:linear-gradient(90deg,#DD0000 0 33%,#FFCE00 33% 66%,#2DD4BF 66% 100%)"></td></tr>
      <tr><td style="padding:26px 30px 10px">
        <div style="font-size:13px;font-weight:800;letter-spacing:.04em;color:#0F766E;text-transform:uppercase">Live-Masterclass · morgen</div>
        <h1 style="margin:8px 0 4px;font-size:23px;color:#1A1A1A">Morgen ist es so weit! ⏰</h1>
        <p style="font-size:16px;line-height:1.6;color:#1A1A1A;margin:10px 0 6px">${hallo} morgen um <b>19:00 Uhr</b> startet deine Live-Masterclass${topic ? ` zum Thema <b>${topic.replace(/[<>&]/g, '')}</b>` : ''}. Sei live dabei – wir freuen uns auf dich!</p>
        <p style="font-size:14px;line-height:1.6;color:#5B6A70;margin:12px 0 0">Einloggen kannst du dich wie immer im Schülerbereich. Bis morgen 💛</p>
      </td></tr>
      <tr><td style="padding:6px 30px 26px;font-size:12px;color:#9CA3AF">deutschoderwas club</td></tr>
    </table>
  </td></tr></table></body></html>`;
}
