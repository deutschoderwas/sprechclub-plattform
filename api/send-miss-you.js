// Win-back-Mail "Ich vermisse dich" per E-Mail (Brevo).
// Zielgruppe: Schüler, die seit >= 30 Tagen KEINE Stunde mehr gebucht haben
//   – egal wie viel Guthaben sie haben,
//   – inkl. Leute, die sich noch NIE in eine Stunde reingebucht haben.
// Bedingung: Account ist mind. 30 Tage alt (sonst greift die 0-Guthaben-Erinnerung).
// Wird täglich getriggert (Supabase pg_cron -> pg_net POST auf diese Route).
// email_log (kind:'miss_you') verhindert Spam: max. 1 Mail pro Schüler in 30 Tagen.
import { createClient } from '@supabase/supabase-js';

export default async function handler(req, res) {
  if (!process.env.BREVO_API_KEY) return res.status(200).json({ ok:false, skipped:'BREVO_API_KEY fehlt' });
  const sb = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_SERVICE_ROLE_KEY);
  const site = process.env.SITE_URL || 'https://www.deutschoderwas-club.de';
  const planUrl = `${site}/live.html`;

  const now = Date.now();
  const since30 = new Date(now - 30*24*60*60*1000).toISOString();
  const since3d = new Date(now - 3*24*60*60*1000).toISOString();

  // Kandidaten: echte Schüler, mind. 30 Tage registriert, kein Opt-out,
  // keine pausierten/beendeten Mitglieder
  const INACTIVE_STATUS = ['pause', 'urlaub', 'beendet'];
  const { data: profs } = await sb.from('profiles')
    .select('id,name,email,email_optout,is_admin,is_teacher,created_at,status')
    .eq('email_optout', false).eq('is_admin', false).eq('is_teacher', false)
    .lte('created_at', since30);
  let targets = (profs || []).filter(p => p.email && !INACTIVE_STATUS.includes(p.status));
  if (!targets.length) return res.status(200).json({ ok:true, sent:0 });
  const ids = targets.map(t => t.id);

  // Wer hat in den letzten 30 Tagen eine Stunde gebucht? -> raus (nicht inaktiv)
  const { data: recentBk } = await sb.from('bookings')
    .select('user_id').gte('created_at', since30).in('user_id', ids);
  const stillActive = new Set((recentBk || []).map(b => b.user_id));

  // Wer hat in den letzten 30 Tagen schon eine miss_you-Mail bekommen? -> raus
  const { data: recentMiss } = await sb.from('email_log')
    .select('user_id').eq('kind','miss_you').gte('sent_at', since30).in('user_id', ids);
  const blocked = new Set((recentMiss || []).map(r => r.user_id));

  // Wer hat gerade erst (letzte 3 Tage) die 0-Guthaben-Erinnerung bekommen? -> nicht doppelt anschreiben
  const { data: recentZero } = await sb.from('email_log')
    .select('user_id').eq('kind','credit_offer_zero').gte('sent_at', since3d).in('user_id', ids);
  const justMailed = new Set((recentZero || []).map(r => r.user_id));

  targets = targets.filter(p => !stillActive.has(p.id) && !blocked.has(p.id) && !justMailed.has(p.id));
  if (!targets.length) return res.status(200).json({ ok:true, sent:0 });

  let sent = 0, errors = 0;
  for (const p of targets) {
    const { error: logErr } = await sb.from('email_log').insert({ kind:'miss_you', ref:p.id, user_id:p.id });
    if (logErr) continue; // race / schon protokolliert

    const vorname = (p.name || '').split(' ')[0] || 'du';
    const html = brandedMissYouEmail({ vorname, site, planUrl });

    const r = await fetch('https://api.brevo.com/v3/smtp/email', {
      method:'POST',
      headers:{ 'api-key':process.env.BREVO_API_KEY, 'Content-Type':'application/json' },
      body: JSON.stringify({
        sender: { name:'deutschoderwas club', email: process.env.BREVO_SENDER_EMAIL || 'info@deutschoderwas.de' },
        replyTo: { name:'Julia', email: process.env.BREVO_SENDER_EMAIL || 'info@deutschoderwas.de' },
        to: [{ email:p.email, name:p.name || undefined }],
        subject: 'Ich vermisse dich im Club 💛',
        htmlContent: html,
      }),
    });
    if (r.ok) sent++; else { errors++; await sb.from('email_log').delete().eq('kind','miss_you').eq('ref', p.id); }
  }
  return res.status(200).json({ ok:true, sent, errors });
}

// ---- deutschoderwas-Markendesign (Rot #DD0000 · Gold #FFCE00 · Creme #FFF8E0 · Petrol #2DD4BF) ----
function brandedMissYouEmail({ vorname, site, planUrl }) {
  const esc = (s) => String(s == null ? '' : s).replace(/[<>&]/g, (c) => ({ '<':'&lt;','>':'&gt;','&':'&amp;' }[c]));
  const ff = "-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif";
  return `<!DOCTYPE html>
<html lang="de"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><meta name="color-scheme" content="light"></head>
<body style="margin:0;padding:0;background:#FFF8E0;">
  <div style="display:none;max-height:0;overflow:hidden;opacity:0">Wir haben dich im Club vermisst – komm zurück und sprich wieder Deutsch mit uns. 💛</div>
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#FFF8E0;padding:28px 14px">
    <tr><td align="center">
      <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width:560px;background:#ffffff;border-radius:24px;overflow:hidden;box-shadow:0 12px 36px rgba(26,26,26,.10)">
        <tr><td style="height:6px;line-height:6px;font-size:0;background:#1A1A1A">&nbsp;</td></tr>
        <tr><td style="height:6px;line-height:6px;font-size:0;background:#DD0000">&nbsp;</td></tr>
        <tr><td style="height:6px;line-height:6px;font-size:0;background:#FFCE00">&nbsp;</td></tr>

        <tr><td align="center" style="padding:26px 28px 6px">
          <div style="font-family:${ff};font-weight:800;font-size:15px;letter-spacing:.04em;color:#1A1A1A">deutschoderwas <span style="color:#DD0000">club</span></div>
          <div style="font-size:46px;line-height:1;margin:14px 0 4px">💛</div>
          <h1 style="margin:6px 0 0;font-family:${ff};font-size:25px;font-weight:800;color:#1A1A1A">Ich vermisse dich!</h1>
        </td></tr>

        <tr><td style="padding:10px 30px 0;font-family:${ff};font-size:15px;line-height:1.6;color:#1A1A1A">
          <p style="margin:0 0 10px">Hallo ${esc(vorname)},</p>
          <p style="margin:0 0 10px">ich habe gemerkt, dass du schon eine Weile nicht mehr im Unterricht warst – und ehrlich: <b>ich vermisse dich im Club!</b> 🥹</p>
          <p style="margin:0 0 10px">Deutsch sprechen klappt am besten, wenn man dranbleibt. Komm einfach wieder in eine Stunde – in lockerer Runde, ohne Druck, mit ganz viel Spaß.</p>
        </td></tr>

        <tr><td style="padding:8px 30px 4px">
          <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#FFF8E0;border:1px solid #F0E5D8;border-left:5px solid #2DD4BF;border-radius:16px">
            <tr><td style="padding:16px 20px;font-family:${ff};font-size:15px;line-height:1.6;color:#1A1A1A">
              <b>Das wartet auf dich:</b><br>
              🗣️ Sprechclub · 📝 Grammatik · 🧠 Wortschatz · 🔊 Aussprache – such dir einfach eine Stunde aus, die zu dir passt.
            </td></tr>
          </table>
        </td></tr>

        <tr><td align="center" style="padding:18px 30px 6px">
          <a href="${esc(planUrl)}" style="display:inline-block;background:#DD0000;color:#ffffff;font-family:${ff};font-weight:800;font-size:15px;text-decoration:none;padding:14px 30px;border-radius:50px;box-shadow:0 6px 16px rgba(221,0,0,.28)">📅 Zum Stundenplan</a>
        </td></tr>

        <tr><td style="padding:16px 30px 4px;font-family:${ff};font-size:15px;line-height:1.6;color:#1A1A1A">
          Schreib mir gern kurz zurück, wenn du Fragen hast oder nicht weiterweißt – ich freue mich, von dir zu hören. 🥰<br><br>
          Bis ganz bald im Club!<br><b>Julia</b> &amp; das deutschoderwas-Team
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
