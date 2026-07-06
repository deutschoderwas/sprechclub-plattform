// Stripe Webhook — schreibt nach erfolgreicher Zahlung Stunden/Pass gut.
// In Stripe als Endpoint anlegen: https://www.deutschoderwas-club.de/api/stripe-webhook
// Events: checkout.session.completed, invoice.paid, customer.subscription.deleted
// Benötigt ENV: STRIPE_SECRET_KEY, STRIPE_WEBHOOK_SECRET, SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY
import Stripe from 'stripe';
import { createClient } from '@supabase/supabase-js';

// Roh-Body für die Signaturprüfung (kein JSON-Parsing durch Vercel)
export const config = { api: { bodyParser: false } };

function rawBody(req) {
  return new Promise((resolve, reject) => {
    const chunks = [];
    req.on('data', (c) => chunks.push(c));
    req.on('end', () => resolve(Buffer.concat(chunks)));
    req.on('error', reject);
  });
}

// --- Amanda Plus: Zugangs-Mail mit Freischalt-Link (kein Club-Konto nötig) ---
const AMANDA_UNLOCK = 'https://deutschoderwas.de/amanda-plus.html?code=AMANDA-SPRECHEN-658BA4';
const AMANDA_PORTAL = 'https://billing.stripe.com/p/login/cNi8wP2DQcez5av6Yd5Rm00';

async function sendAmandaAccess(s) {
  try {
    const email = s.customer_details?.email || s.customer_email;
    if (!email) { console.error('amanda: keine E-Mail in Session', s.id); return; }
    if (!process.env.BREVO_API_KEY) { console.error('amanda: BREVO_API_KEY fehlt'); return; }
    const name = ((s.customer_details?.name || '').trim().split(' ')[0]) || '';
    const hallo = name ? `Hallo ${name},` : 'Hallo,';
    const html = `<!DOCTYPE html><html lang="de"><body style="margin:0;padding:0;background:#FFF8E0;font-family:'Inter','Segoe UI',system-ui,sans-serif;color:#1A1A1A">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#FFF8E0;padding:24px 12px">
    <tr><td align="center">
      <table role="presentation" width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;background:#FFFCF5;border:1px solid #F0E5D8;border-radius:20px;overflow:hidden">
        <tr><td style="padding:24px 32px 8px">
          <span style="font-family:'Space Grotesk','Segoe UI',sans-serif;font-weight:700;font-size:22px;color:#1A1A1A">deutsch<span style="color:#14B8A6">oderwas</span></span>
          <span style="display:block;font-size:12px;color:#6B7280;margin-top:2px">Deutsch lernen mit Spaß &amp; Leichtigkeit</span>
        </td></tr>
        <tr><td style="padding:0 32px"><div style="height:3px;background:linear-gradient(135deg,#2DD4BF,#14B8A6);border-radius:999px"></div></td></tr>
        <tr><td style="padding:22px 32px 4px">
          <span style="font-weight:700;font-size:12px;letter-spacing:1px;text-transform:uppercase;color:#DD0000">Dein Zugang ist da</span>
          <h1 style="font-family:'Space Grotesk','Segoe UI',sans-serif;font-weight:700;font-size:26px;line-height:1.2;margin:8px 0 14px;color:#1A1A1A">Zeit, mit <span style="color:#DD0000">Amanda</span> zu sprechen 🎉</h1>
          <p style="font-size:16px;line-height:1.6;margin:0 0 14px">${hallo}</p>
          <p style="font-size:16px;line-height:1.6;margin:0 0 16px">vielen Dank für dein Abo! 💛 Ab jetzt kannst du <strong>rund um die Uhr &amp; ohne Zeitlimit</strong> mit Amanda, deiner KI-Deutschtutorin, sprechen — so lange und so oft du willst.</p>
        </td></tr>
        <tr><td align="center" style="padding:6px 32px 10px">
          <a href="${AMANDA_UNLOCK}" style="display:inline-block;background:linear-gradient(135deg,#2DD4BF,#14B8A6);color:#06403A;font-weight:700;font-size:16px;text-decoration:none;padding:15px 34px;border-radius:999px">🔓 Amanda jetzt öffnen</a>
        </td></tr>
        <tr><td style="padding:8px 32px 4px">
          <p style="font-size:13px;line-height:1.6;color:#6B7280;margin:0 0 6px">Tipp: <strong>Speichere dir diese E-Mail.</strong> Über den Button kommst du <strong>jederzeit wieder</strong> zu Amanda. Monatlich kündbar — <a href="${AMANDA_PORTAL}" style="color:#14B8A6">Abo verwalten/kündigen</a>.</p>
          <p style="font-size:12px;line-height:1.5;color:#6B7280;margin:0;word-break:break-all">Falls der Button nicht geht: <a href="${AMANDA_UNLOCK}" style="color:#14B8A6">${AMANDA_UNLOCK}</a></p>
        </td></tr>
        <tr><td style="padding:16px 32px 22px">
          <p style="font-size:16px;line-height:1.6;margin:0">Viel Spaß beim Sprechen,<br><strong>Julia</strong> 💛</p>
        </td></tr>
        <tr><td style="background:#1A1A1A;padding:18px 32px;text-align:center">
          <p style="font-size:12px;line-height:1.6;color:#b9b9b9;margin:0">deutschoderwas · <a href="https://deutschoderwas.de/#impressum" style="color:#FFCE00;text-decoration:none">Impressum</a></p>
        </td></tr>
      </table>
    </td></tr>
  </table>
</body></html>`;
    const r = await fetch('https://api.brevo.com/v3/smtp/email', {
      method: 'POST',
      headers: { 'api-key': process.env.BREVO_API_KEY, 'Content-Type': 'application/json' },
      body: JSON.stringify({
        sender: { name: 'deutschoderwas', email: process.env.BREVO_SENDER_EMAIL || 'info@deutschoderwas.de' },
        replyTo: { name: 'Julia', email: process.env.BREVO_SENDER_EMAIL || 'info@deutschoderwas.de' },
        to: [{ email, name }],
        subject: '🎉 Dein Zugang zu Amanda Plus',
        htmlContent: html,
      }),
    });
    if (!r.ok) console.error('amanda brevo fail', r.status, await r.text());
    else console.log('amanda access mail sent ->', email);
  } catch (e) { console.error('amanda mail err', e); }
}

// --- Abschieds-/Feedback-Mail bei Abo-Kündigung (deutschoderwas-Design) ---
async function sendGoodbyeMail(email, name) {
  try {
    if (!email || !process.env.BREVO_API_KEY) return;
    const esc = (s) => String(s == null ? '' : s).replace(/[<>&]/g, (c) => ({ '<':'&lt;','>':'&gt;','&':'&amp;' }[c]));
    const ff = "-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif";
    const vorname = (name || '').trim().split(' ')[0] || 'du';
    const html = `<!DOCTYPE html><html lang="de"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><meta name="color-scheme" content="light"></head>
<body style="margin:0;padding:0;background:#FFF8E0">
  <div style="display:none;max-height:0;overflow:hidden;opacity:0">Schade, dass du gehst – ich hoffe, wir sehen uns bald wieder im Sprechclub. 💛</div>
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#FFF8E0;padding:28px 14px"><tr><td align="center">
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width:560px;background:#fff;border-radius:24px;overflow:hidden;box-shadow:0 12px 36px rgba(26,26,26,.10)">
      <tr><td style="height:6px;line-height:6px;font-size:0;background:#1A1A1A">&nbsp;</td></tr>
      <tr><td style="height:6px;line-height:6px;font-size:0;background:#DD0000">&nbsp;</td></tr>
      <tr><td style="height:6px;line-height:6px;font-size:0;background:#FFCE00">&nbsp;</td></tr>
      <tr><td align="center" style="padding:26px 28px 4px">
        <div style="font-family:${ff};font-weight:800;font-size:15px;letter-spacing:.04em;color:#1A1A1A">deutschoderwas <span style="color:#DD0000">club</span></div>
        <div style="font-size:46px;line-height:1;margin:14px 0 4px">💛</div>
        <h1 style="margin:6px 0 0;font-family:${ff};font-size:25px;font-weight:800;color:#1A1A1A">Schade, dass du gehst</h1>
      </td></tr>
      <tr><td style="padding:10px 30px 0;font-family:${ff};font-size:15px;line-height:1.6;color:#1A1A1A">
        <p style="margin:0 0 10px">Hallo ${esc(vorname)},</p>
        <p style="margin:0 0 10px">oh schade, dass du gehst! Dein Abo ist beendet. Ich hoffe sehr, dass wir uns <b>bald wieder im Sprechclub</b> sehen. 💛</p>
        <p style="margin:0 0 10px">Du bist jederzeit herzlich willkommen zurück — die Tür steht dir immer offen.</p>
      </td></tr>
      <tr><td style="padding:8px 30px 4px">
        <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#FFF8E0;border:1px solid #F0E5D8;border-left:5px solid #2DD4BF;border-radius:16px">
          <tr><td style="padding:16px 20px;font-family:${ff};font-size:15px;line-height:1.6;color:#1A1A1A">
            <b>Magst du mir kurz Feedback geben?</b><br>
            Was hat dir gefallen, was können wir besser machen? <b>Antworte einfach auf diese E-Mail</b> — dein Feedback hilft mir riesig. 🙏
          </td></tr>
        </table>
      </td></tr>
      <tr><td style="padding:18px 30px 6px;font-family:${ff};font-size:15px;line-height:1.6;color:#1A1A1A">
        Bis hoffentlich bald,<br><b>Julia</b> &amp; das deutschoderwas-Team
      </td></tr>
      <tr><td style="padding:18px 30px 26px">
        <div style="border-top:1px solid #F0E5D8;padding-top:14px;font-family:${ff};font-size:12px;color:#9CA3AF;text-align:center">
          <a href="https://www.deutschoderwas-club.de" style="color:#9CA3AF;text-decoration:none">deutschoderwas-club.de</a> · Deutsch lernen, das Spaß macht 🇩🇪
        </div>
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
        subject: 'Schade, dass du gehst 💛',
        htmlContent: html,
      }),
    });
    if (!r.ok) console.error('goodbye brevo fail', r.status, await r.text());
  } catch (e) { console.error('goodbye mail err', e); }
}

// --- Trial-Willkommens-Mail: Wahl zwischen 7 Tagen testen ODER sofort voll starten ---
const PLAN_INFO = { testpass: { h: 4, p: 79 }, gelegenheitspass: { h: 8, p: 139 }, allinclusive: { h: 12, p: 189 } };
const START_NOW_URL = 'https://www.deutschoderwas-club.de/konto.html?start=now';

async function sendTrialWelcome(s) {
  try {
    const email = s.customer_details?.email || s.customer_email;
    if (!email) { console.error('trial: keine E-Mail', s.id); return; }
    if (!process.env.BREVO_API_KEY) { console.error('trial: BREVO_API_KEY fehlt'); return; }
    const name = ((s.customer_details?.name || '').trim().split(' ')[0]) || '';
    const hallo = name ? `Hallo ${name},` : 'Hallo,';
    const plan = s.metadata?.plan || '';
    const info = PLAN_INFO[plan] || { h: parseInt(s.metadata?.stunden || '0', 10), p: 0 };
    const preisTxt = info.p ? `${info.p} €/Monat` : 'dein Monatsbeitrag';
    const html = `<!DOCTYPE html><html lang="de"><body style="margin:0;padding:0;background:#FFF8E0;font-family:'Inter','Segoe UI',system-ui,sans-serif;color:#1A1A1A">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#FFF8E0;padding:24px 12px"><tr><td align="center">
    <table role="presentation" width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;background:#FFFCF5;border:1px solid #F0E5D8;border-radius:20px;overflow:hidden">
      <tr><td style="padding:24px 32px 8px">
        <span style="font-family:'Space Grotesk','Segoe UI',sans-serif;font-weight:700;font-size:22px;color:#1A1A1A">deutsch<span style="color:#14B8A6">oderwas</span></span>
        <span style="display:block;font-size:12px;color:#6B7280;margin-top:2px">Deutsch lernen mit Spaß &amp; Leichtigkeit</span>
      </td></tr>
      <tr><td style="padding:0 32px"><div style="height:3px;background:linear-gradient(135deg,#2DD4BF,#14B8A6);border-radius:999px"></div></td></tr>
      <tr><td style="padding:22px 32px 4px">
        <span style="font-weight:700;font-size:12px;letter-spacing:1px;text-transform:uppercase;color:#DD0000">Deine Probestunde ist da</span>
        <h1 style="font-family:'Space Grotesk','Segoe UI',sans-serif;font-weight:700;font-size:26px;line-height:1.2;margin:8px 0 14px;color:#1A1A1A">Willkommen im Club 🎉</h1>
        <p style="font-size:16px;line-height:1.6;margin:0 0 12px">${hallo}</p>
        <p style="font-size:16px;line-height:1.6;margin:0 0 14px">schön, dass du dabei bist! Du hast jetzt <b>7 Tage Zeit, in Ruhe zu testen</b> – mit deiner <b>1 Gratis-Probestunde</b>. Du musst nichts weiter tun: Nach 7 Tagen startet dein Abo automatisch (${preisTxt}). Innerhalb der 7 Tage jederzeit kündbar.</p>
      </td></tr>
      <tr><td style="padding:4px 32px 4px">
        <div style="background:#F2FBFA;border:1px solid #CFEFEA;border-radius:14px;padding:16px 18px">
          <div style="font-weight:700;font-size:15px;color:#0F766E">⚡ Du willst sofort mehr als die Probestunde?</div>
          <p style="font-size:14px;line-height:1.6;margin:8px 0 14px;color:#1A1A1A">Kein Problem – starte dein Abo <b>sofort voll</b>. Die Zahlung wird dann gleich fällig und du bekommst deine <b>${info.h} Stunden + die Gratis-Probestunde sofort</b> gutgeschrieben. So kannst du direkt mehrere Stunden in dieser Woche nutzen.</p>
          <p style="text-align:center;margin:0">
            <a href="${START_NOW_URL}" style="display:inline-block;background:linear-gradient(135deg,#2DD4BF,#14B8A6);color:#06403A;font-weight:700;font-size:16px;text-decoration:none;padding:14px 30px;border-radius:999px">🚀 Jetzt voll starten</a>
          </p>
        </div>
      </td></tr>
      <tr><td style="padding:16px 32px 22px">
        <p style="font-size:15px;line-height:1.6;margin:0">Bis bald im Club &amp; viel Spaß beim Sprechen,<br><strong>Julia</strong> 💛</p>
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
        to: [{ email, name }],
        subject: 'Deine Gratis-Probestunde ist da 🎉',
        htmlContent: html,
      }),
    });
    if (!r.ok) console.error('trial brevo fail', r.status, await r.text());
  } catch (e) { console.error('trial mail err', e); }
}


// Zahlungsbestätigung bei echter Abbuchung (invoice.paid): erkennt den ECHTEN Tarif aus den Abo-Metadaten.
async function sendPaymentMail(sub, inv) {
  try {
    const userId = sub.metadata?.userId;
    const stunden = parseInt(sub.metadata?.stunden || '0', 10);
    if (!userId || !stunden) return; // kein Club-Abo (z. B. Amanda) -> keine Stunden-Mail
    const email = inv.customer_email; if (!email) return;
    if (!process.env.BREVO_API_KEY) return;
    const name = ((inv.customer_name || '').trim().split(' ')[0]) || '';
    const hallo = name ? `Hallo ${name},` : 'Hallo,';
    const plan = sub.metadata?.plan || '';
    const PL = { testpass: 'Ab und zu Pass', gelegenheitspass: 'Gelegenheitspass', allinclusive: 'Profi-Pass' };
    const label = PL[plan] || 'Mitgliedschaft';
    const PORTAL = 'https://billing.stripe.com/p/login/cNi8wP2DQcez5av6Yd5Rm00';
    const BOOK = 'https://www.deutschoderwas-club.de/schuelerbereich#kalender';
    const html = `<!DOCTYPE html><html lang="de"><body style="margin:0;padding:0;background:#FFF8E0;font-family:'Inter','Segoe UI',system-ui,sans-serif;color:#1A1A1A">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#FFF8E0;padding:24px 12px"><tr><td align="center">
    <table role="presentation" width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;background:#FFFCF5;border:1px solid #F0E5D8;border-radius:20px;overflow:hidden">
      <tr><td style="padding:24px 32px 8px">
        <span style="font-family:'Space Grotesk','Segoe UI',sans-serif;font-weight:700;font-size:22px;color:#1A1A1A">deutsch<span style="color:#14B8A6">oderwas</span></span>
        <span style="display:block;font-size:12px;color:#6B7280;margin-top:2px">Deutsch lernen mit Spaß &amp; Leichtigkeit</span>
      </td></tr>
      <tr><td style="padding:0 32px"><div style="height:3px;background:linear-gradient(135deg,#2DD4BF,#14B8A6);border-radius:999px"></div></td></tr>
      <tr><td style="padding:22px 32px 4px">
        <span style="font-weight:700;font-size:12px;letter-spacing:1px;text-transform:uppercase;color:#DD0000">Zahlung erfolgreich</span>
        <h1 style="font-family:'Space Grotesk','Segoe UI',sans-serif;font-weight:700;font-size:26px;line-height:1.2;margin:8px 0 14px;color:#1A1A1A">Deine Stunden sind da! 🎉</h1>
        <p style="font-size:16px;line-height:1.6;margin:0 0 12px">${hallo}</p>
        <p style="font-size:16px;line-height:1.6;margin:0 0 14px">wie schön, dass du dabei bist! 💛 Deine Zahlung ist angekommen und ich hab dir gerade deine <b>${stunden} LIVE-Stunden</b> gutgeschrieben. Jetzt kann's losgehen – such dir im Stundenplan aus, worauf du Lust hast, und buch deine erste Stunde.</p>
        <div style="background:#fff;border-left:4px solid #2DD4BF;border-radius:10px;padding:10px 14px;margin:6px 0 4px;font-size:14px"><b>Dein Tarif:</b> ${label} · ${stunden} LIVE-Stunden / Monat</div>
      </td></tr>
      <tr><td align="center" style="padding:14px 32px 4px">
        <a href="${BOOK}" style="display:inline-block;background:linear-gradient(135deg,#2DD4BF,#14B8A6);color:#06403A;font-weight:700;font-size:16px;text-decoration:none;padding:14px 30px;border-radius:999px">📅 Jetzt Stunde buchen</a>
      </td></tr>
      <tr><td style="padding:12px 32px 4px">
        <p style="font-size:13px;line-height:1.6;color:#6B7280;margin:0">Dein Abo verlängert sich automatisch monatlich – jederzeit kündbar. <a href="${PORTAL}" style="color:#14B8A6">Abo verwalten / kündigen</a></p>
      </td></tr>
      <tr><td style="padding:14px 32px 22px">
        <p style="font-size:16px;line-height:1.6;margin:0">Ich freue mich riesig, dich bei uns im Club zu sehen!<br><strong>Julia</strong> 💛</p>
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
        subject: 'Zahlung erfolgreich 🎉 – deine Stunden sind da!',
        htmlContent: html,
      }),
    });
    if (!r.ok) console.error('payment brevo', r.status, await r.text());
  } catch (e) { console.error('payment mail', e); }
}

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).end();
  if (!process.env.STRIPE_SECRET_KEY || !process.env.STRIPE_WEBHOOK_SECRET) {
    return res.status(500).json({ error: 'stripe_not_configured' });
  }
  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

  let event;
  try {
    const raw = await rawBody(req);
    event = stripe.webhooks.constructEvent(raw, req.headers['stripe-signature'], process.env.STRIPE_WEBHOOK_SECRET);
  } catch (e) {
    console.error('webhook signature', e.message);
    return res.status(400).send(`Webhook Error: ${e.message}`);
  }

  const sb = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_SERVICE_ROLE_KEY);

  // Stunden gutschreiben — idempotent über credit_log.stripe_session_id (dedupeKey).
  async function grant(userId, change, reason, dedupeKey, passDays) {
    if (!userId || !change) return;
    const { data: exists } = await sb.from('credit_log').select('id').eq('stripe_session_id', dedupeKey).maybeSingle();
    if (exists) return; // schon verbucht
    await sb.from('credit_log').insert({ user_id: userId, change, reason, stripe_session_id: dedupeKey });
    const { data: p } = await sb.from('profiles').select('credits,pass_until').eq('id', userId).maybeSingle();
    const patch = { credits: (p?.credits || 0) + change };
    if (passDays) {
      const base = (p?.pass_until && new Date(p.pass_until) > new Date()) ? new Date(p.pass_until) : new Date();
      base.setDate(base.getDate() + passDays);
      patch.pass_until = base.toISOString();
    }
    await sb.from('profiles').update(patch).eq('id', userId);
  }

  // Stripe-Kundennummer am Profil merken — wird fürs Kündigungs-Portal gebraucht.
  // Kauf per E-Mail parken, wenn (noch) kein Konto existiert -> wird bei Registrierung gutgeschrieben.
  async function addPending(sb2, email, stunden, plan, makeStatus, isTrial, ref) {
    if (!email || !stunden) return;
    try {
      const { data: ex } = await sb2.from('pending_purchases').select('id').eq('stripe_ref', ref).maybeSingle();
      if (ex) return;
      await sb2.from('pending_purchases').insert({ email, stunden, plan: plan || null, make_status: makeStatus || null, is_trial: !!isTrial, stripe_ref: ref });
    } catch (e) { console.error('addPending', e); }
  }

  async function saveCustomer(userId, customerId) {
    if (!userId || !customerId) return;
    try { await sb.from('profiles').update({ stripe_customer_id: customerId }).eq('id', userId); }
    catch (e) { console.error('saveCustomer', e); }
  }

  try {
    if (event.type === 'checkout.session.completed') {
      const s = event.data.object;
      let userId = s.client_reference_id || s.metadata?.userId;

      // Amanda Plus (über Stripe-Payment-Link, kein Club-Konto): Zugangs-Mail senden & fertig.
      const isAmanda = s.metadata?.product === 'amanda'
        || (!userId && (s.amount_total === 999 || s.amount_subtotal === 999));
      if (isAmanda) {
        await sendAmandaAccess(s);
        return res.status(200).json({ received: true, amanda: true });
      }

      // E-Mail-basierte Zuordnung: die Zahlung gehoert zu der E-Mail aus dem Checkout (nicht zwingend die eingeloggte Person).
      const buyerEmail = (s.customer_details?.email || s.customer_email || '').trim().toLowerCase();
      if (buyerEmail) {
        const { data: bp } = await sb.from('profiles').select('id').ilike('email', buyerEmail).maybeSingle();
        if (bp) {
          userId = bp.id;
        } else {
          if (s.mode === 'payment') {
            await addPending(sb, buyerEmail, parseInt(s.metadata?.credits || '0', 10), s.metadata?.plan, 'aktiv', false, 'cs_' + s.id);
          } else if (s.mode === 'subscription' && s.metadata?.trial === '1') {
            await addPending(sb, buyerEmail, 1, s.metadata?.plan, 'probeschuler', true, 'trial_' + s.id);
          }
          return res.status(200).json({ received: true, pending: buyerEmail });
        }
      }

      if (s.mode === 'payment') {
        // Einmalkauf (Spar Pass): volle Stunden sofort
        const credits = parseInt(s.metadata?.credits || '0', 10);
        await grant(userId, credits, 'kauf:' + (s.metadata?.plan || 'paket'), 'cs_' + s.id, null);
      } else if (s.mode === 'subscription') {
        await saveCustomer(userId, s.customer);   // Kundennummer fürs Kündigungs-Portal merken
        // Probestunde nur EINMAL pro Person: nur gutschreiben, wenn dieser Checkout eine Testphase hatte.
        if (s.metadata?.trial === '1') {
          await grant(userId, 1, 'trial:' + (s.metadata?.plan || 'abo'), 'trial_' + s.id, 7);
          await sendTrialWelcome(s);
          // Probeschüler markieren + Vermerk: woher (Stripe-Probestunde) & welches Paket er möchte
          if (userId) {
            const PLAN_LABEL = { testpass:'Ab und zu Pass (4 Std/Monat)', gelegenheitspass:'Gelegenheitspass (8 Std/Monat)', allinclusive:'Profi-Pass (12 Std/Monat)' };
            const planLbl = PLAN_LABEL[s.metadata?.plan] || (s.metadata?.plan || 'Abo');
            const note = '🎟️ Probeschüler · interessiert an: ' + planLbl + ' · Probestunde über Stripe gestartet (Karte hinterlegt) · ' + new Date().toLocaleDateString('de-DE');
            const { data: pr } = await sb.from('profiles').select('notes').eq('id', userId).maybeSingle();
            const patch = { status: 'probeschuler' };
            if (!pr || !(pr.notes || '').includes('Probeschüler')) {
              patch.notes = ((pr && pr.notes) ? pr.notes + '\n' : '') + note;
            }
            await sb.from('profiles').update(patch).eq('id', userId);
          }
        }
        // Ohne Trial (Rückkehrer:in): keine Gratis-Probestunde — die Monatsstunden kommen über invoice.paid.
      }
    } else if (event.type === 'invoice.paid') {
      const inv = event.data.object;
      // Nur echte Zahlungen (die 0-€-Rechnung der Testphase überspringen)
      if ((inv.amount_paid || 0) > 0 && inv.subscription) {
        const sub = await stripe.subscriptions.retrieve(inv.subscription);
        const stunden = parseInt(sub.metadata?.stunden || '0', 10);
        let userId = sub.metadata?.userId;
        const plan = sub.metadata?.plan || 'abo';
        let invEmail = (inv.customer_email || '').trim().toLowerCase();
        if (!invEmail && inv.customer) { try { const c = await stripe.customers.retrieve(inv.customer); invEmail = (c.email || '').trim().toLowerCase(); } catch (e) {} }
        if (invEmail) {
          const { data: ip } = await sb.from('profiles').select('id').ilike('email', invEmail).maybeSingle();
          if (ip) { userId = ip.id; }
          else { await addPending(sb, invEmail, stunden, plan, 'aktiv', false, 'inv_' + inv.id); return res.status(200).json({ received: true, pending: invEmail }); }
        }
        await saveCustomer(userId, inv.customer);   // Kundennummer merken
        await grant(userId, stunden, 'abo:' + plan, 'inv_' + inv.id, 31);
        await sendPaymentMail(sub, inv);
        // Aus Probeschüler wird zahlendes Mitglied -> Status auf aktiv (nur wenn vorher Probeschüler)
        if (userId) {
          const { data: pr } = await sb.from('profiles').select('status').eq('id', userId).maybeSingle();
          if (pr && pr.status === 'probeschuler') {
            await sb.from('profiles').update({ status: 'aktiv' }).eq('id', userId);
          }
        }
      }
    } else if (event.type === 'customer.subscription.deleted') {
      // Abo ist tatsächlich beendet (zum Periodenende): ALLE gesammelten Stunden verfallen -> 0.
      const sub = event.data.object;
      const userId = sub.metadata?.userId;
      if (userId) {
        const dk = 'subdel_' + sub.id;
        const { data: already } = await sb.from('credit_log').select('id').eq('stripe_session_id', dk).maybeSingle();
        if (!already) {
          const { data: p } = await sb.from('profiles').select('credits,email,name').eq('id', userId).maybeSingle();
          const cur = p?.credits || 0;
          if (cur > 0) {
            await sb.from('credit_log').insert({ user_id: userId, change: -cur, reason: 'abo_gekuendigt_verfall', stripe_session_id: dk });
          }
          // Guthaben auf 0, Mitgliedschaft beenden
          await sb.from('profiles').update({ credits: 0, pass_until: new Date().toISOString() }).eq('id', userId);
          // „Schade, dass du gehst" – Abschieds-/Feedback-Mail
          if (p?.email) await sendGoodbyeMail(p.email, p.name);
        }
      }
    }
  } catch (e) {
    console.error('webhook handler', e);
    return res.status(500).json({ error: String(e.message || e) }); // Stripe wiederholt dann
  }

  return res.status(200).json({ received: true });
}
