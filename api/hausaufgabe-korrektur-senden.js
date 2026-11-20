// Speichert die (geprüfte) Hausaufgaben-Korrektur und benachrichtigt den Schüler.
// Nur Lehrer/Admin. POST { class_id, user_id, korrektur } + Authorization: Bearer <Lehrer-Token>
import { createClient } from '@supabase/supabase-js';

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).json({ ok: false, error: 'method_not_allowed' });

  const token = (req.headers.authorization || '').replace('Bearer ', '');
  const { class_id, user_id, korrektur } = req.body || {};
  if (!token || !class_id || !user_id || !String(korrektur || '').trim()) return res.status(400).json({ ok: false, error: 'bad_request' });

  const sb = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_SERVICE_ROLE_KEY);
  const { data: { user: caller }, error: uerr } = await sb.auth.getUser(token);
  if (uerr || !caller) return res.status(401).json({ ok: false, error: 'unauthorized' });
  const { data: me } = await sb.from('profiles').select('is_admin,is_teacher').eq('id', caller.id).maybeSingle();
  if (!me || !(me.is_admin || me.is_teacher)) return res.status(403).json({ ok: false, error: 'not_teacher' });

  // Korrektur speichern (ungelesen -> Schüler sieht den Hinweis)
  const { error: upErr } = await sb.from('hausaufgaben_abgaben')
    .update({ korrektur: String(korrektur), korrigiert_at: new Date().toISOString(), korrektur_gelesen: false })
    .eq('class_id', class_id).eq('user_id', user_id);
  if (upErr) return res.status(500).json({ ok: false, error: 'speichern_fehlgeschlagen' });

  // Schüler per E-Mail benachrichtigen (fire-and-forget, blockt den Erfolg nicht)
  try {
    if (process.env.BREVO_API_KEY) {
      const [{ data: prof }, { data: cls }] = await Promise.all([
        sb.from('profiles').select('name,email,email_optout').eq('id', user_id).maybeSingle(),
        sb.from('classes').select('title,topic,level').eq('id', class_id).maybeSingle(),
      ]);
      if (prof && prof.email && !prof.email_optout) {
        const site = process.env.SITE_URL || 'https://www.deutschoderwas-club.de';
        const esc = (s) => String(s == null ? '' : s).replace(/[<>&]/g, c => ({ '<': '&lt;', '>': '&gt;', '&': '&amp;' }[c]));
        const vorname = (prof.name || '').split(' ')[0] || 'du';
        const thema = (cls && (cls.topic || cls.title)) || 'deine Stunde';
        const link = `${site}/nachbereitung.html?id=${class_id}&tab=hausaufgabe`;
        const ff = "-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif";
        const html = `<!DOCTYPE html><html lang="de"><head><meta charset="utf-8"></head>
<body style="margin:0;background:#FDF8F1;font-family:${ff}">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="padding:24px 14px"><tr><td align="center">
    <table role="presentation" width="100%" style="max-width:520px;background:#fff;border-radius:18px;overflow:hidden;box-shadow:0 8px 26px rgba(0,0,0,.08)">
      <tr><td style="height:6px;background:linear-gradient(135deg,#2DD4BF,#FFCE00)"></td></tr>
      <tr><td style="padding:22px 28px 6px">
        <div style="font-size:13px;font-weight:800;letter-spacing:.04em;color:#9CA3AF;text-transform:uppercase">deutschoderwas club</div>
        <h1 style="margin:8px 0 0;font-size:21px;color:#1a1a1a">✅ Deine Hausaufgabe wurde korrigiert!</h1>
      </td></tr>
      <tr><td style="padding:12px 28px 0;font-size:15px;line-height:1.6;color:#1a1a1a">
        Hallo ${esc(vorname)},<br><br>
        deine Hausaufgabe zu <b>${esc(thema)}</b> ist korrigiert — mit Verbesserungen, Hinweisen und einer kurzen Rückmeldung. Schau sie dir an! 🎯
      </td></tr>
      <tr><td align="center" style="padding:20px 28px 8px">
        <a href="${esc(link)}" style="display:inline-block;background:linear-gradient(135deg,#35AFD0,#138a8a);color:#063b35;font-weight:800;font-size:15px;text-decoration:none;padding:14px 30px;border-radius:50px">📖 Korrektur ansehen</a>
      </td></tr>
      <tr><td style="padding:14px 28px 26px;font-size:12px;color:#9CA3AF;text-align:center">Du findest sie im Schülerbereich unter „Meine Stunden" → Hausaufgabe.</td></tr>
    </table>
  </td></tr></table>
</body></html>`;
        await fetch('https://api.brevo.com/v3/smtp/email', {
          method: 'POST',
          headers: { 'api-key': process.env.BREVO_API_KEY, 'Content-Type': 'application/json' },
          body: JSON.stringify({
            sender: { name: 'Julia | deutschoderwas', email: process.env.BREVO_SENDER_EMAIL || 'deutschlernen@deutschoderwas.de' },
            to: [{ email: prof.email, name: prof.name || undefined }],
            subject: `✅ Deine Hausaufgabe ist korrigiert: ${thema}`,
            htmlContent: html,
          }),
        });
      }
    }
  } catch (e) { /* Mail ist nice-to-have */ }

  return res.status(200).json({ ok: true });
}
