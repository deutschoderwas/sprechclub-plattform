// Niedrig-Guthaben-Angebot per E-Mail (Brevo).
// Schüler mit nur noch 1 Stunde Guthaben bekommen automatisch eine Mail:
//  - Feedback-Frage: "Wie war's bisher im Club?"
//  - Angebot: neues Stundenpaket wählen (Link zu den Paketen)
// Wird z. B. täglich getriggert (Supabase pg_cron -> pg_net POST auf diese Route).
// email_log (kind:'credit_offer') verhindert Spam: max. 1 Mail pro Schüler in 30 Tagen.
import { createClient } from '@supabase/supabase-js';
import Stripe from 'stripe';

export default async function handler(req, res) {
  if (!process.env.BREVO_API_KEY) return res.status(200).json({ ok:false, skipped:'BREVO_API_KEY fehlt' });
  const sb = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_SERVICE_ROLE_KEY);
  const site = process.env.SITE_URL || 'https://www.deutschoderwas-club.de';
  const paketeUrl = `${site}/#preise`;

  // Zielgruppe (Wunsch Julia): NUR aktive Schüler mit 0 oder 1 Stunde Guthaben,
  // die KEIN laufendes Abo haben. Abo-Mitglieder bekommen automatisch neue Stunden
  // und daher keine Kauf-Erinnerung. Status 'registriert', 'pause', 'urlaub',
  // 'beendet', 'probeschuler' erhalten ebenfalls KEINE Erinnerung.
  const { data: low } = await sb.from('profiles')
    .select('id,name,email,credits,email_optout,is_admin,is_teacher,status,stripe_customer_id')
    .in('credits', [0, 1]);
  const candidates = (low || []).filter(p =>
    p.status === 'aktiv' && p.email && !p.email_optout && !p.is_admin && !p.is_teacher
  );

  // Laufendes Abo? -> aussortieren (live bei Stripe geprüft; bei Stripe-Fehler
  // vorsichtshalber NICHT anschreiben, um kein zahlendes Abo-Mitglied zu nerven).
  const stripe = process.env.STRIPE_SECRET_KEY ? new Stripe(process.env.STRIPE_SECRET_KEY) : null;
  const ABO_STATUS = ['active', 'trialing', 'past_due', 'unpaid'];
  const targets = [];
  for (const p of candidates) {
    if (p.stripe_customer_id) {
      if (!stripe) continue; // ohne Stripe-Key können wir Abo nicht ausschließen -> lieber nicht senden
      try {
        const subs = await stripe.subscriptions.list({ customer: p.stripe_customer_id, status: 'all', limit: 10 });
        if ((subs.data || []).some(s => ABO_STATUS.includes(s.status))) continue; // laufendes Abo -> überspringen
      } catch (e) { continue; }
    }
    targets.push(p);
  }
  if (!targets.length) return res.status(200).json({ ok:true, sent:0 });

  // Anti-Spam-Fenster:
  //  - credits == 1  -> 'credit_offer'      : max. 1 Mail / 30 Tage (sanftes Feedback-Angebot)
  //  - credits == 0  -> 'credit_offer_zero' : Erinnerung alle ~2–3 Tage (max. 1 / 60 h)
  const ids = targets.map(t => t.id);
  const since30 = new Date(Date.now() - 30*24*60*60*1000).toISOString();
  const sinceZero = new Date(Date.now() - 60*60*60*1000).toISOString(); // 60 h ≈ 2,5 Tage
  const { data: recentLow } = await sb.from('email_log')
    .select('user_id').eq('kind','credit_offer').gte('sent_at', since30).in('user_id', ids);
  const { data: recentZero } = await sb.from('email_log')
    .select('user_id').eq('kind','credit_offer_zero').gte('sent_at', sinceZero).in('user_id', ids);
  const blockedLow = new Set((recentLow || []).map(r => r.user_id));
  const blockedZero = new Set((recentZero || []).map(r => r.user_id));

  let sent = 0, errors = 0;
  for (const p of targets) {
    const isZero = (p.credits || 0) <= 0;
    const kind = isZero ? 'credit_offer_zero' : 'credit_offer';
    if (isZero ? blockedZero.has(p.id) : blockedLow.has(p.id)) continue;

    const { error: logErr } = await sb.from('email_log').insert({ kind, ref:p.id, user_id:p.id });
    if (logErr) continue; // race / schon protokolliert

    const vorname = (p.name || '').split(' ')[0] || 'du';
    const html = isZero
      ? brandedZeroEmail({ vorname, site, paketeUrl })
      : brandedOfferEmail({ vorname, site, paketeUrl });
    const subject = isZero
      ? 'Such dir dein Stundenpaket aus – und sei aktiv dabei 💛'
      : 'Nur noch 1 Stunde übrig – wie geht’s weiter? 💛';

    const r = await fetch('https://api.brevo.com/v3/smtp/email', {
      method:'POST',
      headers:{ 'api-key':process.env.BREVO_API_KEY, 'Content-Type':'application/json' },
      body: JSON.stringify({
        sender: { name:'deutschoderwas club', email: process.env.BREVO_SENDER_EMAIL || 'info@deutschoderwas.de' },
        replyTo: { name:'Julia', email: process.env.BREVO_SENDER_EMAIL || 'info@deutschoderwas.de' },
        to: [{ email:p.email, name:p.name || undefined }],
        subject,
        htmlContent: html,
      }),
    });
    if (r.ok) sent++; else { errors++; await sb.from('email_log').delete().eq('kind', kind).eq('ref', p.id); }
  }
  return res.status(200).json({ ok:true, sent, errors });
}

// ---- deutschoderwas-Markendesign (Rot #DD0000 · Gold #FFCE00 · Creme #FFF8E0 · Petrol #2DD4BF) ----
function brandedOfferEmail({ vorname, site, paketeUrl }) {
  const esc = (s) => String(s == null ? '' : s).replace(/[<>&]/g, (c) => ({ '<':'&lt;','>':'&gt;','&':'&amp;' }[c]));
  const ff = "-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif";
  return `<!DOCTYPE html>
<html lang="de"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><meta name="color-scheme" content="light"></head>
<body style="margin:0;padding:0;background:#FFF8E0;">
  <div style="display:none;max-height:0;overflow:hidden;opacity:0">Du hast nur noch 1 Stunde – sichere dir dein neues Stundenpaket und erzähl mir, wie es war. 💛</div>
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#FFF8E0;padding:28px 14px">
    <tr><td align="center">
      <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width:560px;background:#ffffff;border-radius:24px;overflow:hidden;box-shadow:0 12px 36px rgba(26,26,26,.10)">
        <tr><td style="height:6px;line-height:6px;font-size:0;background:#1A1A1A">&nbsp;</td></tr>
        <tr><td style="height:6px;line-height:6px;font-size:0;background:#DD0000">&nbsp;</td></tr>
        <tr><td style="height:6px;line-height:6px;font-size:0;background:#FFCE00">&nbsp;</td></tr>

        <tr><td align="center" style="padding:26px 28px 6px">
          <div style="font-family:${ff};font-weight:800;font-size:15px;letter-spacing:.04em;color:#1A1A1A">deutschoderwas <span style="color:#DD0000">club</span></div>
          <div style="font-size:46px;line-height:1;margin:14px 0 4px">⏳</div>
          <h1 style="margin:6px 0 0;font-family:${ff};font-size:25px;font-weight:800;color:#1A1A1A">Nur noch 1 Stunde übrig</h1>
        </td></tr>

        <tr><td style="padding:10px 30px 0;font-family:${ff};font-size:15px;line-height:1.6;color:#1A1A1A">
          <p style="margin:0 0 10px">Hallo ${esc(vorname)},</p>
          <p style="margin:0 0 10px">du hast aktuell <b>nur noch 1 Stunde Guthaben</b> im Club. Damit es für dich nahtlos weitergeht, kannst du dir jetzt ein neues Stundenpaket sichern.</p>
        </td></tr>

        <tr><td style="padding:8px 30px 4px">
          <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#FFF8E0;border:1px solid #F0E5D8;border-left:5px solid #2DD4BF;border-radius:16px">
            <tr><td style="padding:16px 20px;font-family:${ff};font-size:15px;line-height:1.6;color:#1A1A1A">
              <b>Welches Paket passt zu dir?</b><br>
              Vom Ab und zu Pass bis zum monatlichen Profi-Pass – mit jedem Paket besuchst du <b>alle Clubs</b> (Sprechen, Grammatik, Wortschatz, Aussprache &amp; Sprachspiele).
            </td></tr>
          </table>
        </td></tr>

        <tr><td align="center" style="padding:18px 30px 6px">
          <a href="${esc(paketeUrl)}" style="display:inline-block;background:#DD0000;color:#ffffff;font-family:${ff};font-weight:800;font-size:15px;text-decoration:none;padding:14px 30px;border-radius:50px;box-shadow:0 6px 16px rgba(221,0,0,.28)">🎟️ Stundenpaket wählen</a>
        </td></tr>

        <tr><td style="padding:16px 30px 4px;font-family:${ff};font-size:15px;line-height:1.6;color:#1A1A1A">
          <p style="margin:0 0 6px"><b>Und noch eine Bitte:</b> Wie war es bisher für dich im Club? 🥰</p>
          <p style="margin:0">Antworte einfach kurz auf diese E-Mail – schreib mir, <b>wie viele Stunden</b> du als Nächstes möchtest und wie dir der Unterricht gefällt. Dein Feedback hilft mir sehr!</p>
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

// ---- 0-Guthaben-Erinnerung: freundlicher Hinweis + Aufruf, ein Stundenpaket zu wählen ----
function brandedZeroEmail({ vorname, site, paketeUrl }) {
  const esc = (s) => String(s == null ? '' : s).replace(/[<>&]/g, (c) => ({ '<':'&lt;','>':'&gt;','&':'&amp;' }[c]));
  const ff = "-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif";
  return `<!DOCTYPE html>
<html lang="de"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><meta name="color-scheme" content="light"></head>
<body style="margin:0;padding:0;background:#FFF8E0;">
  <div style="display:none;max-height:0;overflow:hidden;opacity:0">Such dir dein Stundenpaket aus und nutze die ganze Plattform – Live-Unterricht, Material, Community, Amanda &amp; Üben. 💛</div>
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#FFF8E0;padding:28px 14px">
    <tr><td align="center">
      <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width:560px;background:#ffffff;border-radius:24px;overflow:hidden;box-shadow:0 12px 36px rgba(26,26,26,.10)">
        <tr><td style="height:6px;line-height:6px;font-size:0;background:#1A1A1A">&nbsp;</td></tr>
        <tr><td style="height:6px;line-height:6px;font-size:0;background:#DD0000">&nbsp;</td></tr>
        <tr><td style="height:6px;line-height:6px;font-size:0;background:#FFCE00">&nbsp;</td></tr>

        <tr><td align="center" style="padding:26px 28px 6px">
          <div style="font-family:${ff};font-weight:800;font-size:15px;letter-spacing:.04em;color:#1A1A1A">deutschoderwas <span style="color:#DD0000">club</span></div>
          <div style="font-size:46px;line-height:1;margin:14px 0 4px">🎟️</div>
          <h1 style="margin:6px 0 0;font-family:${ff};font-size:25px;font-weight:800;color:#1A1A1A">Werde aktiv im Club</h1>
        </td></tr>

        <tr><td style="padding:10px 30px 0;font-family:${ff};font-size:15px;line-height:1.6;color:#1A1A1A">
          <p style="margin:0 0 10px">Hallo ${esc(vorname)},</p>
          <p style="margin:0 0 10px">schön, dass du im deutschoderwas club dabei bist! Aktuell hast du <b>noch kein Stundenguthaben</b> – damit ist die Plattform für dich noch gesperrt.</p>
          <p style="margin:0 0 10px"><b>Such dir gerne dein Stundenpaket aus, um aktiv am Unterricht teilzunehmen und die ganze Plattform aktiv zu nutzen.</b></p>
        </td></tr>

        <tr><td style="padding:8px 30px 4px">
          <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#FFF8E0;border:1px solid #F0E5D8;border-left:5px solid #2DD4BF;border-radius:16px">
            <tr><td style="padding:16px 20px;font-family:${ff};font-size:15px;line-height:1.6;color:#1A1A1A">
              <b>Das schaltest du frei:</b><br>
              🎤 LIVE-Unterricht in allen Clubs · 📚 Material zu jeder Stunde · 💬 Community · 🤖 Amanda (KI-Sprechpartnerin) · 🎮 Üben &amp; Quizze
            </td></tr>
          </table>
        </td></tr>

        <tr><td align="center" style="padding:18px 30px 6px">
          <a href="${esc(paketeUrl)}" style="display:inline-block;background:#DD0000;color:#ffffff;font-family:${ff};font-weight:800;font-size:15px;text-decoration:none;padding:14px 30px;border-radius:50px;box-shadow:0 6px 16px rgba(221,0,0,.28)">🎟️ Stundenpaket aussuchen</a>
        </td></tr>

        <tr><td style="padding:16px 30px 4px;font-family:${ff};font-size:15px;line-height:1.6;color:#1A1A1A">
          Fragen? Antworte einfach kurz auf diese E-Mail – ich helfe dir gern weiter. 🥰<br><br>
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
