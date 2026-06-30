// Willkommens-Mail bei Selbst-Registrierung: erklärt, was man im Club bekommt + wie man startet.
// POST { email, name }. Wird von index.html/live.html nach sb.auth.signUp aufgerufen.
// Nur 1x pro E-Mail (Dedupe via email_log kind='welcome', ref=email). ENV: BREVO_API_KEY, SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY.
import { createClient } from '@supabase/supabase-js';

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'method_not_allowed' });
  let { email, name } = req.body || {};
  email = (email || '').trim().toLowerCase();
  name = (name || '').trim();
  if (!email || !email.includes('@')) return res.status(400).json({ error: 'bad_email' });
  if (!process.env.BREVO_API_KEY) return res.status(200).json({ ok: false, skipped: 'no_brevo' });

  try {
    if (process.env.SUPABASE_URL && process.env.SUPABASE_SERVICE_ROLE_KEY) {
      const sb = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_SERVICE_ROLE_KEY);
      const { data: prev } = await sb.from('email_log').select('id').eq('kind', 'welcome').eq('ref', email).limit(1);
      if (prev && prev.length) return res.status(200).json({ ok: true, already: true });
      const sent = await sendWelcome(email, name);
      if (sent) { try { await sb.from('email_log').insert({ kind: 'welcome', ref: email }); } catch (e) {} }
      return res.status(200).json({ ok: sent });
    }
  } catch (e) { console.error('welcome dedupe', e); }

  const sent = await sendWelcome(email, name);
  return res.status(200).json({ ok: sent });
}

async function sendWelcome(email, name) {
  try {
    const vorname = (name || '').split(' ')[0] || '';
    const hallo = vorname ? `Hallo ${vorname},` : 'Hallo,';
    const html = `<!DOCTYPE html><html lang="de"><body style="margin:0;padding:0;background:#FFF8E0;font-family:'Inter','Segoe UI',system-ui,sans-serif;color:#1A1A1A">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#FFF8E0;padding:24px 12px"><tr><td align="center">
    <table role="presentation" width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;background:#FFFCF5;border:1px solid #F0E5D8;border-radius:20px;overflow:hidden">
      <tr><td style="padding:24px 32px 8px">
        <span style="font-family:'Space Grotesk','Segoe UI',sans-serif;font-weight:700;font-size:22px;color:#1A1A1A">deutsch<span style="color:#14B8A6">oderwas</span></span>
        <span style="display:block;font-size:12px;color:#6B7280;margin-top:2px">Deutsch lernen mit Spaß &amp; Leichtigkeit</span>
      </td></tr>
      <tr><td style="padding:0 32px"><div style="height:3px;background:linear-gradient(135deg,#2DD4BF,#14B8A6);border-radius:999px"></div></td></tr>
      <tr><td style="padding:22px 32px 4px">
        <span style="font-weight:700;font-size:12px;letter-spacing:1px;text-transform:uppercase;color:#DD0000">Willkommen im Club</span>
        <h1 style="font-family:'Space Grotesk','Segoe UI',sans-serif;font-weight:700;font-size:26px;line-height:1.2;margin:8px 0 14px;color:#1A1A1A">Schön, dass du da bist! 🎉</h1>
        <p style="font-size:16px;line-height:1.6;margin:0 0 14px">${hallo} willkommen bei deutschoderwas. Hier lernst du Deutsch so, dass du endlich <b>frei &amp; ohne Angst sprichst</b>. Das bekommst du bei uns:</p>
        <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="font-size:15px;line-height:1.6">
          <tr><td style="padding:5px 0">🗣️ <b>LIVE-Unterricht mit echter Lehrkraft</b> in kleinen Gruppen (A2–C1)</td></tr>
          <tr><td style="padding:5px 0">📚 <b>Lernplattform</b> – üben rund um die Uhr</td></tr>
          <tr><td style="padding:5px 0">🤖 <b>Amanda</b> – deine KI-Tutorin, 24/7 zum Sprechen</td></tr>
          <tr><td style="padding:5px 0">👥 <b>Community</b> – Austausch &amp; Motivation</td></tr>
        </table>
      </td></tr>
      <tr><td style="padding:8px 32px 4px">
        <div style="background:#F2FBFA;border:1px solid #CFEFEA;border-radius:14px;padding:16px 18px">
          <div style="font-weight:700;font-size:15px;color:#0F766E">⚡ So startest du</div>
          <p style="font-size:14px;line-height:1.6;margin:8px 0 14px;color:#1A1A1A">Sichere dir deine <b>Gratis-Probestunde</b> oder wähle dein Stundenpaket – danach kannst du sofort deine erste LIVE-Stunde buchen.</p>
          <p style="text-align:center;margin:0">
            <a href="https://www.deutschoderwas-club.de/#preise" style="display:inline-block;background:linear-gradient(135deg,#2DD4BF,#14B8A6);color:#06403A;font-weight:700;font-size:16px;text-decoration:none;padding:14px 30px;border-radius:999px">🚀 Jetzt Probestunde sichern</a>
          </p>
        </div>
      </td></tr>
      <tr><td style="padding:16px 32px 22px">
        <p style="font-size:15px;line-height:1.6;margin:0">Bis bald im Club &amp; viel Spaß beim Deutschlernen,<br><strong>Julia</strong> 💛</p>
      </td></tr>
      <tr><td style="background:#1A1A1A;padding:18px 32px;text-align:center">
        <p style="font-size:12px;line-height:1.6;color:#b9b9b9;margin:0">deutschoderwas · <a href="https://deutschoderwas.de/#impressum" style="color:#FFCE00;text-decoration:none">Impressum</a></p>
      </td></tr>
    </table>
  </td></tr></table>
</body></html>`;
    const r = await fetch('https://api.brevo.com/v3/smtp/email', {
      method: 'POST',
      headers: { 'api-key': process.env.BREVO_API_KEY, 'Content-Type': 'application/json' },
      body: JSON.stringify({
        sender: { name: 'deutschoderwas club', email: process.env.BREVO_SENDER_EMAIL || 'info@deutschoderwas.de' },
        replyTo: { name: 'Julia', email: process.env.BREVO_SENDER_EMAIL || 'info@deutschoderwas.de' },
        to: [{ email, name: name || undefined }],
        subject: 'Willkommen bei deutschoderwas 🎉 – das bekommst du bei uns',
        htmlContent: html,
      }),
    });
    if (!r.ok) { console.error('welcome brevo', r.status, await r.text()); return false; }
    return true;
  } catch (e) { console.error('welcome send', e); return false; }
}
