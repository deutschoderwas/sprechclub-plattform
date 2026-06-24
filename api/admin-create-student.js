// Schüler als Admin selbst anlegen.
// POST { name, email, credits?, birthday? } + Authorization: Bearer <Admin-Access-Token>
// 1) prüft, dass der Aufrufer Admin ist
// 2) legt den Auth-User an (oder findet bestehenden)
// 3) schreibt/aktualisiert das Profil (Name, Guthaben, Geburtstag, Status 'aktiv')
// 4) erzeugt einen Passwort-Setzen-Link und schickt eine gebrandete Einladungs-Mail (Brevo)
import { createClient } from '@supabase/supabase-js';

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'method_not_allowed' });

  const token = (req.headers.authorization || '').replace('Bearer ', '');
  let { name, email, credits, birthday } = req.body || {};
  email = (email || '').trim().toLowerCase();
  name = (name || '').trim();
  credits = Number.isFinite(+credits) ? Math.max(0, parseInt(credits, 10)) : 0;
  birthday = birthday || null; // 'YYYY-MM-DD' oder null
  if (!token || !email || !email.includes('@')) return res.status(400).json({ error: 'bad_request' });

  const sb = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_SERVICE_ROLE_KEY);
  const site = process.env.SITE_URL || 'https://www.deutschoderwas-club.de';

  // 1) Aufrufer muss Admin sein
  const { data: { user: caller } = {}, error: uerr } = await sb.auth.getUser(token);
  if (uerr || !caller) return res.status(401).json({ error: 'unauthorized' });
  const { data: me } = await sb.from('profiles').select('is_admin').eq('id', caller.id).maybeSingle();
  if (!me || !me.is_admin) return res.status(403).json({ error: 'not_admin' });

  // 2) Auth-User anlegen (E-Mail gilt als bestätigt, da von Admin angelegt)
  let userId = null, existed = false;
  const { data: created, error: cErr } = await sb.auth.admin.createUser({
    email, email_confirm: true, user_metadata: { name },
  });
  if (created && created.user) {
    userId = created.user.id;
  } else if (cErr) {
    // evtl. existiert die E-Mail schon -> bestehenden User finden
    const { data: list } = await sb.auth.admin.listUsers({ page: 1, perPage: 1000 });
    const found = (list && list.users || []).find(u => (u.email || '').toLowerCase() === email);
    if (!found) return res.status(400).json({ error: 'create_failed', detail: cErr.message });
    userId = found.id; existed = true;
  }

  // 3) Profil schreiben/aktualisieren
  const prof = { id: userId, email, name: name || null, credits, status: 'aktiv' };
  if (birthday) prof.birthday = birthday;
  const { error: pErr } = await sb.from('profiles').upsert(prof, { onConflict: 'id' });
  if (pErr) return res.status(500).json({ error: 'profile_failed', detail: pErr.message });

  // 4) Passwort-Setzen-Link erzeugen + Einladungs-Mail
  let mailed = false;
  if (process.env.BREVO_API_KEY) {
    try {
      const { data: link } = await sb.auth.admin.generateLink({
        type: 'recovery', email,
        options: { redirectTo: `${site}/passwort.html` },
      });
      const actionLink = link && link.properties && link.properties.action_link;
      if (actionLink) {
        const vorname = (name || '').split(' ')[0] || 'du';
        const r = await fetch('https://api.brevo.com/v3/smtp/email', {
          method: 'POST',
          headers: { 'api-key': process.env.BREVO_API_KEY, 'Content-Type': 'application/json' },
          body: JSON.stringify({
            sender: { name: 'Julia | deutschoderwas', email: process.env.BREVO_SENDER_EMAIL || 'info@deutschoderwas.de' },
            replyTo: { name: 'Julia', email: process.env.BREVO_SENDER_EMAIL || 'info@deutschoderwas.de' },
            to: [{ email, name: name || undefined }],
            subject: 'Willkommen im deutschoderwas Club – richte dein Passwort ein 💛',
            htmlContent: welcomeEmail({ vorname, site, actionLink }),
          }),
        });
        mailed = r.ok;
      }
    } catch (e) { /* Mail-Fehler nicht hart werfen */ }
  }

  return res.status(200).json({ ok: true, user_id: userId, existed, mailed });
}

function welcomeEmail({ vorname, site, actionLink }) {
  const esc = (s) => String(s == null ? '' : s).replace(/[<>&]/g, (c) => ({ '<': '&lt;', '>': '&gt;', '&': '&amp;' }[c]));
  const ff = "-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif";
  return `<!DOCTYPE html>
<html lang="de"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><meta name="color-scheme" content="light"></head>
<body style="margin:0;padding:0;background:#FFF8E0;">
  <div style="display:none;max-height:0;overflow:hidden;opacity:0">Willkommen! Richte jetzt dein Passwort ein und leg los. 💛</div>
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#FFF8E0;padding:28px 14px">
    <tr><td align="center">
      <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width:560px;background:#fff;border-radius:24px;overflow:hidden;box-shadow:0 12px 36px rgba(26,26,26,.10)">
        <tr><td style="height:6px;background:#1A1A1A">&nbsp;</td></tr>
        <tr><td style="height:6px;background:#DD0000">&nbsp;</td></tr>
        <tr><td style="height:6px;background:#FFCE00">&nbsp;</td></tr>
        <tr><td align="center" style="padding:26px 28px 6px">
          <div style="font-family:${ff};font-weight:800;font-size:15px;letter-spacing:.04em;color:#1A1A1A">deutschoderwas <span style="color:#DD0000">club</span></div>
          <div style="font-size:46px;line-height:1;margin:14px 0 4px">🎉</div>
          <h1 style="margin:6px 0 0;font-family:${ff};font-size:25px;font-weight:800;color:#1A1A1A">Willkommen, ${esc(vorname)}!</h1>
        </td></tr>
        <tr><td style="padding:10px 30px 0;font-family:${ff};font-size:15px;line-height:1.6;color:#1A1A1A">
          <p style="margin:0 0 10px">Julia hat dir einen Zugang zum <b>deutschoderwas Club</b> eingerichtet. Richte jetzt in einem Schritt dein eigenes Passwort ein – danach kannst du dich jederzeit einloggen und Stunden buchen.</p>
        </td></tr>
        <tr><td align="center" style="padding:18px 30px 6px">
          <a href="${esc(actionLink)}" style="display:inline-block;background:#DD0000;color:#fff;font-family:${ff};font-weight:800;font-size:15px;text-decoration:none;padding:14px 30px;border-radius:50px;box-shadow:0 6px 16px rgba(221,0,0,.28)">🔐 Passwort einrichten & loslegen</a>
        </td></tr>
        <tr><td style="padding:14px 30px 4px;font-family:${ff};font-size:13px;line-height:1.6;color:#5C4E3E">
          <p style="margin:0">Der Link ist aus Sicherheitsgründen zeitlich begrenzt. Falls er abgelaufen ist, gehe auf <a href="${esc(site)}" style="color:#DD0000">deutschoderwas-club.de</a> und klicke auf „Passwort vergessen".</p>
        </td></tr>
        <tr><td style="padding:16px 30px 4px;font-family:${ff};font-size:15px;line-height:1.6;color:#1A1A1A">
          Bis bald im Club!<br><b>Julia</b> &amp; das deutschoderwas-Team
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
