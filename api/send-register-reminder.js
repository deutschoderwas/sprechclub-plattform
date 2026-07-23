// Erinnerung an alle, die bezahlt, aber noch KEIN Konto angelegt haben (erst zahlen, dann registrieren).
// Läuft über /api/daily (Cron). Verschickt max. 1 Erinnerung pro Kauf.
import { createClient } from '@supabase/supabase-js';

export default async function handler(req, res) {
  if (!process.env.SUPABASE_URL || !process.env.SUPABASE_SERVICE_ROLE_KEY) return res.status(200).json({ skipped: 'no_db' });
  const sb = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_SERVICE_ROLE_KEY);
  const site = process.env.SITE_URL || 'https://www.deutschoderwas-club.de';
  const cutoff = new Date(Date.now() - 2 * 3600 * 1000).toISOString(); // mind. 2h alt

  const { data: rows } = await sb.from('pending_purchases')
    .select('id,email,plan,applied,reg_reminded,created_at')
    .eq('applied', false).eq('reg_reminded', false).lt('created_at', cutoff).limit(200);
  if (!rows || !rows.length) return res.status(200).json({ ok: true, sent: 0 });

  let sent = 0;
  for (const r of rows) {
    if (!r.email) { await sb.from('pending_purchases').update({ reg_reminded: true }).eq('id', r.id); continue; }
    // Existiert schon ein Konto? -> nichts schicken, nur markieren
    const { data: prof } = await sb.from('profiles').select('id').ilike('email', r.email).maybeSingle();
    if (prof) { await sb.from('pending_purchases').update({ reg_reminded: true }).eq('id', r.id); continue; }
    try {
      if (process.env.BREVO_API_KEY) {
        await fetch('https://api.brevo.com/v3/smtp/email', {
          method: 'POST',
          headers: { 'api-key': process.env.BREVO_API_KEY, 'Content-Type': 'application/json' },
          body: JSON.stringify({
            sender: { name: 'deutschoderwas club', email: process.env.BREVO_SENDER_EMAIL || 'info@deutschoderwas.de' },
            to: [{ email: r.email }],
            subject: '🔓 Nur noch 1 Schritt: registrier dich für deinen Zugang',
            htmlContent: mail(site, r.email),
          }),
        });
      }
      await sb.from('pending_purchases').update({ reg_reminded: true }).eq('id', r.id);
      sent++;
    } catch (e) { console.error('reg-reminder', e); }
  }
  return res.status(200).json({ ok: true, sent });
}

function mail(site, email) {
  const ff = "-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif";
  const url = site + '/index.html?register=1';
  return `<!DOCTYPE html><html lang="de"><body style="margin:0;background:#FFF8E0;font-family:${ff}">
  <table role="presentation" width="100%" style="padding:24px 14px"><tr><td align="center">
    <table role="presentation" width="100%" style="max-width:560px;background:#fff;border-radius:18px;overflow:hidden;box-shadow:0 8px 26px rgba(0,0,0,.08)">
      <tr><td style="height:6px;background:linear-gradient(90deg,#DD0000 0 33%,#FFCE00 33% 66%,#2DD4BF 66% 100%)"></td></tr>
      <tr><td style="padding:26px 30px 6px">
        <div style="font-size:13px;font-weight:800;letter-spacing:.04em;color:#0F766E;text-transform:uppercase">Willkommen im Club</div>
        <h1 style="margin:8px 0 6px;font-size:23px;color:#1A1A1A">Nur noch 1 Schritt 🔓</h1>
        <p style="font-size:16px;line-height:1.6;color:#1A1A1A;margin:8px 0 4px">Deine Zahlung ist da – super! 🎉 Damit du deine ganze Lernplattform nutzen kannst, musst du dir nur noch ein Konto anlegen.</p>
        <p style="font-size:15px;line-height:1.6;color:#5B6A70;margin:8px 0 0">Wichtig: Registrier dich mit <b>genau dieser E-Mail-Adresse</b> (${String(email).replace(/[<>&]/g,'')}) – dann wird deine Mitgliedschaft automatisch erkannt und freigeschaltet.</p>
      </td></tr>
      <tr><td style="padding:14px 30px 8px" align="center">
        <a href="${url}" style="display:inline-block;background:linear-gradient(135deg,#2DD4BF,#14B8A6);color:#06403A;font-weight:800;font-size:16px;text-decoration:none;padding:14px 30px;border-radius:999px">Jetzt registrieren &amp; loslegen</a>
      </td></tr>
      <tr><td style="padding:12px 30px 26px;font-size:12px;color:#9CA3AF">Schon registriert? Dann ignorier diese Mail einfach. 💛 · deutschoderwas club</td></tr>
    </table>
  </td></tr></table></body></html>`;
}
