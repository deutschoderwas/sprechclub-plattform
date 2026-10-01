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
          <span style="font-family:'Space Grotesk','Segoe UI',sans-serif;font-weight:700;font-size:22px;color:#1A1A1A">deutsch<span style="color:#35AFD0">oderwas</span></span>
          <span style="display:block;font-size:12px;color:#6B7280;margin-top:2px">Deutsch lernen mit Spaß &amp; Leichtigkeit</span>
        </td></tr>
        <tr><td style="padding:0 32px"><div style="height:3px;background:linear-gradient(135deg,#7ED8EA,#35AFD0);border-radius:999px"></div></td></tr>
        <tr><td style="padding:22px 32px 4px">
          <span style="font-weight:700;font-size:12px;letter-spacing:1px;text-transform:uppercase;color:#DD0000">Dein Zugang ist da</span>
          <h1 style="font-family:'Space Grotesk','Segoe UI',sans-serif;font-weight:700;font-size:26px;line-height:1.2;margin:8px 0 14px;color:#1A1A1A">Zeit, mit <span style="color:#DD0000">Amanda</span> zu sprechen 🎉</h1>
          <p style="font-size:16px;line-height:1.6;margin:0 0 14px">${hallo}</p>
          <p style="font-size:16px;line-height:1.6;margin:0 0 16px">vielen Dank für dein Abo! 💛 Ab jetzt kannst du <strong>rund um die Uhr &amp; ohne Zeitlimit</strong> mit Amanda, deiner KI-Deutschtutorin, sprechen — so lange und so oft du willst.</p>
        </td></tr>
        <tr><td align="center" style="padding:6px 32px 10px">
          <a href="${AMANDA_UNLOCK}" style="display:inline-block;background:linear-gradient(135deg,#7ED8EA,#35AFD0);color:#10627A;font-weight:700;font-size:16px;text-decoration:none;padding:15px 34px;border-radius:999px">🔓 Amanda jetzt öffnen</a>
        </td></tr>
        <tr><td style="padding:8px 32px 4px">
          <p style="font-size:13px;line-height:1.6;color:#6B7280;margin:0 0 6px">Tipp: <strong>Speichere dir diese E-Mail.</strong> Über den Button kommst du <strong>jederzeit wieder</strong> zu Amanda. Monatlich kündbar — <a href="${AMANDA_PORTAL}" style="color:#35AFD0">Abo verwalten/kündigen</a>.</p>
          <p style="font-size:12px;line-height:1.5;color:#6B7280;margin:0;word-break:break-all">Falls der Button nicht geht: <a href="${AMANDA_UNLOCK}" style="color:#35AFD0">${AMANDA_UNLOCK}</a></p>
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
        sender: { name: 'deutschoderwas', email: process.env.BREVO_SENDER_EMAIL || 'deutschlernen@deutschoderwas.de' },
        replyTo: { name: 'Julia', email: process.env.BREVO_SENDER_EMAIL || 'deutschlernen@deutschoderwas.de' },
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
        <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#FFF8E0;border:1px solid #F0E5D8;border-left:5px solid #7ED8EA;border-radius:16px">
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
        sender: { name: 'deutschoderwas club', email: process.env.BREVO_SENDER_EMAIL || 'deutschlernen@deutschoderwas.de' },
        replyTo: { name: 'Julia', email: process.env.BREVO_SENDER_EMAIL || 'deutschlernen@deutschoderwas.de' },
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
        <span style="font-family:'Space Grotesk','Segoe UI',sans-serif;font-weight:700;font-size:22px;color:#1A1A1A">deutsch<span style="color:#35AFD0">oderwas</span></span>
        <span style="display:block;font-size:12px;color:#6B7280;margin-top:2px">Deutsch lernen mit Spaß &amp; Leichtigkeit</span>
      </td></tr>
      <tr><td style="padding:0 32px"><div style="height:3px;background:linear-gradient(135deg,#7ED8EA,#35AFD0);border-radius:999px"></div></td></tr>
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
            <a href="${START_NOW_URL}" style="display:inline-block;background:linear-gradient(135deg,#7ED8EA,#35AFD0);color:#10627A;font-weight:700;font-size:16px;text-decoration:none;padding:14px 30px;border-radius:999px">🚀 Jetzt voll starten</a>
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
        sender: { name: 'deutschoderwas club', email: process.env.BREVO_SENDER_EMAIL || 'deutschlernen@deutschoderwas.de' },
        replyTo: { name: 'Julia', email: process.env.BREVO_SENDER_EMAIL || 'deutschlernen@deutschoderwas.de' },
        to: [{ email, name }],
        subject: 'Deine Gratis-Probestunde ist da 🎉',
        htmlContent: html,
      }),
    });
    if (!r.ok) console.error('trial brevo fail', r.status, await r.text());
  } catch (e) { console.error('trial mail err', e); }
}


// Zahlungsbestätigung bei echter Abbuchung (invoice.paid): erkennt den ECHTEN Tarif aus den Abo-Metadaten.
/* Der Club ist eine Webseite, aber auf dem Handy fuehlt er sich wie eine
   App an, sobald man ihn auf den Startbildschirm legt: eigenes Symbol,
   kein Browserrahmen, ein Tippen statt Adresse eintippen. Wer das
   einmal gemacht hat, kommt deutlich oefter zurueck - deshalb steht der
   Hinweis in jeder Willkommensmail, fuer iPhone und Android getrennt. */
const APP_BLOCK = `
      <tr><td style="padding:16px 32px 4px">
        <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#F2FBFD;border:1px solid #C7E9F1;border-radius:16px">
          <tr><td style="padding:16px 18px">
            <p style="margin:0 0 8px;font-weight:700;font-size:15.5px;color:#1A1A1A">&#128241; Leg dir den Club auf den Startbildschirm</p>
            <p style="margin:0 0 10px;font-size:14.5px;line-height:1.6;color:#3f4650">Dann hast du ihn wie eine App: eigenes Symbol, kein Browserrahmen, ein Tippen und du bist drin.</p>
            <p style="margin:0 0 6px;font-size:14px;line-height:1.6;color:#3f4650"><b>iPhone:</b> Seite in Safari &ouml;ffnen, unten auf das Teilen-Symbol tippen, dann <b>&bdquo;Zum Home-Bildschirm&ldquo;</b>.</p>
            <p style="margin:0;font-size:14px;line-height:1.6;color:#3f4650"><b>Android:</b> Seite in Chrome &ouml;ffnen, oben rechts auf die drei Punkte, dann <b>&bdquo;App installieren&ldquo;</b> oder &bdquo;Zum Startbildschirm hinzuf&uuml;gen&ldquo;.</p>
          </td></tr>
        </table>
      </td></tr>`;

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
        <span style="font-family:'Space Grotesk','Segoe UI',sans-serif;font-weight:700;font-size:22px;color:#1A1A1A">deutsch<span style="color:#35AFD0">oderwas</span></span>
        <span style="display:block;font-size:12px;color:#6B7280;margin-top:2px">Deutsch lernen mit Spaß &amp; Leichtigkeit</span>
      </td></tr>
      <tr><td style="padding:0 32px"><div style="height:3px;background:linear-gradient(135deg,#7ED8EA,#35AFD0);border-radius:999px"></div></td></tr>
      <tr><td style="padding:22px 32px 4px">
        <span style="font-weight:700;font-size:12px;letter-spacing:1px;text-transform:uppercase;color:#DD0000">Zahlung erfolgreich</span>
        <h1 style="font-family:'Space Grotesk','Segoe UI',sans-serif;font-weight:700;font-size:26px;line-height:1.2;margin:8px 0 14px;color:#1A1A1A">Deine Stunden sind da! 🎉</h1>
        <p style="font-size:16px;line-height:1.6;margin:0 0 12px">${hallo}</p>
        <p style="font-size:16px;line-height:1.6;margin:0 0 14px">wie schön, dass du dabei bist! 💛 Deine Zahlung ist angekommen und ich hab dir gerade deine <b>${stunden} LIVE-Stunden</b> gutgeschrieben. Jetzt kann's losgehen – such dir im Stundenplan aus, worauf du Lust hast, und buch deine erste Stunde.</p>
        <div style="background:#fff;border-left:4px solid #7ED8EA;border-radius:10px;padding:10px 14px;margin:6px 0 4px;font-size:14px"><b>Dein Tarif:</b> ${label} · ${stunden} LIVE-Stunden / Monat</div>
      </td></tr>
      <tr><td align="center" style="padding:14px 32px 4px">
        <a href="${BOOK}" style="display:inline-block;background:linear-gradient(135deg,#7ED8EA,#35AFD0);color:#10627A;font-weight:700;font-size:16px;text-decoration:none;padding:14px 30px;border-radius:999px">📅 Jetzt Stunde buchen</a>
      </td></tr>
      <tr><td style="padding:12px 32px 4px">
        <p style="font-size:13px;line-height:1.6;color:#6B7280;margin:0">Dein Abo verlängert sich automatisch monatlich – jederzeit kündbar. <a href="${PORTAL}" style="color:#35AFD0">Abo verwalten / kündigen</a></p>
      </td></tr>
      ${APP_BLOCK}
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
        sender: { name: 'deutschoderwas club', email: process.env.BREVO_SENDER_EMAIL || 'deutschlernen@deutschoderwas.de' },
        replyTo: { name: 'Julia', email: process.env.BREVO_SENDER_EMAIL || 'deutschlernen@deutschoderwas.de' },
        to: [{ email, name: name || undefined }],
        subject: 'Zahlung erfolgreich 🎉 – deine Stunden sind da!',
        htmlContent: html,
      }),
    });
    if (!r.ok) console.error('payment brevo', r.status, await r.text());
  } catch (e) { console.error('payment mail', e); }
}

// ---------------------------------------------------------------------------
// Rechnung / Zahlungsbeleg. Geht bei JEDER bezahlten Rechnung raus, also auch
// bei jeder Verlaengerung — wer zahlt, bekommt einen Beleg. Die Rechnung
// selbst liegt bei Stripe; wir verschicken die Zusammenfassung und die zwei
// Links darauf (ansehen und PDF).
// ---------------------------------------------------------------------------
async function sendRechnung(inv, email) {
  try {
    if (!inv || !email || !process.env.BREVO_API_KEY) return false;
    const cent = inv.amount_paid || 0;
    const waehrung = (inv.currency || 'eur').toUpperCase();
    const betrag = (cent / 100).toLocaleString('de-DE', { style: 'currency', currency: waehrung });
    const sek = (inv.status_transitions && inv.status_transitions.paid_at) || inv.created;
    const datum = new Date(sek * 1000).toLocaleDateString('de-DE', { day: '2-digit', month: 'long', year: 'numeric' });
    const nr = inv.number || inv.id;
    const web = inv.hosted_invoice_url || '';
    const pdf = inv.invoice_pdf || '';
    const posten = ((inv.lines && inv.lines.data) || [])
      .map(l => (l.description || '').trim()).filter(Boolean)[0] || 'Mitgliedschaft';
    const name = ((inv.customer_name || '').trim().split(' ')[0]) || '';
    const hallo = name ? `Hallo ${name},` : 'Hallo,';
    const zeile = (k, v) => `<tr><td style="padding:7px 0;font-size:14px;color:#6B7280">${k}</td>`
      + `<td style="padding:7px 0;font-size:14px;text-align:right;font-weight:600">${v}</td></tr>`;
    const knopf = (href, txt, haupt) => href
      ? `<a href="${href}" style="display:inline-block;margin:4px 6px 0 0;padding:12px 24px;border-radius:999px;text-decoration:none;font-weight:700;font-size:15px;`
        + (haupt ? 'background:linear-gradient(135deg,#7ED8EA,#35AFD0);color:#10627A' : 'background:#fff;color:#1A1A1A;border:1.5px solid #E0D8C6')
        + `">${txt}</a>` : '';
    const html = `<!DOCTYPE html><html lang="de"><body style="margin:0;background:#FFF8E0;font-family:'Inter','Segoe UI',system-ui,sans-serif;color:#1A1A1A">
  <table role="presentation" width="100%" style="padding:24px 12px"><tr><td align="center">
    <table role="presentation" width="600" style="max-width:600px;width:100%;background:#FFFCF5;border:1px solid #F0E5D8;border-radius:20px;overflow:hidden">
      <tr><td style="padding:24px 32px 8px">
        <span style="font-weight:700;font-size:22px">deutsch<span style="color:#35AFD0">oderwas</span></span>
      </td></tr>
      <tr><td style="padding:0 32px"><div style="height:3px;background:linear-gradient(135deg,#7ED8EA,#35AFD0);border-radius:999px"></div></td></tr>
      <tr><td style="padding:22px 32px 4px">
        <span style="font-weight:700;font-size:12px;letter-spacing:1px;text-transform:uppercase;color:#DD0000">Beleg</span>
        <h1 style="font-size:24px;line-height:1.25;margin:8px 0 14px">Deine Rechnung &uuml;ber ${betrag}</h1>
        <p style="font-size:16px;line-height:1.6;margin:0 0 16px">${hallo}</p>
        <p style="font-size:16px;line-height:1.6;margin:0 0 16px">danke dir &#128153; Hier ist dein Beleg &ndash; du kannst ihn dir jederzeit als PDF herunterladen.</p>
        <table role="presentation" width="100%" style="border-top:1px solid #F0E5D8;border-bottom:1px solid #F0E5D8;margin:6px 0 14px">
          ${zeile('Rechnungsnummer', nr)}
          ${zeile('Datum', datum)}
          ${zeile('Leistung', posten)}
          ${zeile('Betrag', `<span style="font-size:16px">${betrag}</span>`)}
        </table>
      </td></tr>
      <tr><td style="padding:0 32px 6px">${knopf(pdf, '&#128196; Rechnung als PDF', true)}${knopf(web, 'Im Browser ansehen', false)}</td></tr>
      <tr><td style="padding:14px 32px 22px">
        <p style="font-size:13px;line-height:1.6;color:#6B7280;margin:0 0 12px">Dein Abo verl&auml;ngert sich automatisch und ist jederzeit k&uuml;ndbar.</p>
        <p style="font-size:16px;line-height:1.6;margin:0">Bis bald!<br><strong>Julia</strong> &#128153;</p>
      </td></tr>
      <tr><td style="background:#1A1A1A;padding:18px 32px;text-align:center">
        <p style="font-size:12px;line-height:1.6;color:#b9b9b9;margin:0">deutschoderwas &middot; <a href="https://deutschoderwas.de/#impressum" style="color:#FFCE00;text-decoration:none">Impressum</a></p>
      </td></tr>
    </table>
  </td></tr></table>
</body></html>`;
    const r = await fetch('https://api.brevo.com/v3/smtp/email', {
      method: 'POST',
      headers: { 'api-key': process.env.BREVO_API_KEY, 'Content-Type': 'application/json' },
      body: JSON.stringify({
        sender: { name: 'deutschoderwas club', email: process.env.BREVO_SENDER_EMAIL || 'deutschlernen@deutschoderwas.de' },
        replyTo: { name: 'Julia', email: process.env.BREVO_SENDER_EMAIL || 'deutschlernen@deutschoderwas.de' },
        to: [{ email, name: inv.customer_name || undefined }],
        subject: `Deine Rechnung ${nr} \u00fcber ${betrag}`,
        htmlContent: html,
      }),
    });
    if (!r.ok) { console.error('rechnung brevo', r.status, await r.text()); return false; }
    return true;
  } catch (e) { console.error('rechnung mail', e); return false; }
}

// Julia bekommt jede Mitglieder-Mail als Blindkopie — so sieht sie sofort,
// dass jemand Neues da ist und die Zugangsdaten bekommen hat.
const JULIA = process.env.JULIA_EMAIL || 'deutschoderwas@gmail.com';

// Sofort-Mail, wenn jemand bezahlt hat, aber noch kein Konto hat.
// Frueher kam die erst am naechsten Morgen ueber den Tages-Cron — zu spaet.
async function sendRegisterNow(email) {
  try {
    if (!email || !process.env.BREVO_API_KEY) return false;
    const site = process.env.SITE_URL || 'https://www.deutschoderwas-club.de';
    const ff = "-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif";
    const url = site + '/index.html?register=1';
    const safe = String(email).replace(/[<>&]/g, '');
    const html = `<!DOCTYPE html><html lang="de"><body style="margin:0;background:#FFF8E0;font-family:${ff}">
  <table role="presentation" width="100%" style="padding:24px 14px"><tr><td align="center">
    <table role="presentation" width="100%" style="max-width:560px;background:#fff;border-radius:18px;overflow:hidden;box-shadow:0 8px 26px rgba(0,0,0,.08)">
      <tr><td style="height:6px;background:linear-gradient(90deg,#DD0000 0 33%,#FFCE00 33% 66%,#7ED8EA 66% 100%)"></td></tr>
      <tr><td style="padding:26px 30px 6px">
        <div style="font-size:13px;font-weight:800;letter-spacing:.04em;color:#0F766E;text-transform:uppercase">Willkommen im Club</div>
        <h1 style="margin:8px 0 6px;font-size:23px;color:#1A1A1A">Nur noch 1 Schritt &#128275;</h1>
        <p style="font-size:16px;line-height:1.6;color:#1A1A1A;margin:8px 0 4px">Deine Zahlung ist da &ndash; super! &#127881; Damit du die ganze Lernplattform nutzen kannst, legst du dir jetzt noch schnell ein Konto an.</p>
        <p style="font-size:15px;line-height:1.6;color:#5B6A70;margin:8px 0 0">Wichtig: Registrier dich mit <b>genau dieser E-Mail-Adresse</b> (${safe}) &ndash; dann wird deine Mitgliedschaft automatisch erkannt und freigeschaltet.</p>
      </td></tr>
      <tr><td style="padding:14px 30px 8px" align="center">
        <a href="${url}" style="display:inline-block;background:linear-gradient(135deg,#7ED8EA,#35AFD0);color:#10627A;font-weight:800;font-size:16px;text-decoration:none;padding:14px 30px;border-radius:999px">Jetzt registrieren &amp; loslegen</a>
      </td></tr>
      <tr><td style="padding:12px 30px 26px;font-size:12px;color:#9CA3AF">Schon registriert? Dann ignorier diese Mail einfach. &#128153; &middot; deutschoderwas club</td></tr>
    </table>
  </td></tr></table></body></html>`;
    const r = await fetch('https://api.brevo.com/v3/smtp/email', {
      method: 'POST',
      headers: { 'api-key': process.env.BREVO_API_KEY, 'Content-Type': 'application/json' },
      body: JSON.stringify({
        sender: { name: 'deutschoderwas club', email: process.env.BREVO_SENDER_EMAIL || 'deutschlernen@deutschoderwas.de' },
        to: [{ email }],
        bcc: [{ email: JULIA }],
        subject: '\u{1F513} Nur noch 1 Schritt: registrier dich für deinen Zugang',
        htmlContent: html,
      }),
    });
    if (!r.ok) { console.error('registerNow brevo', r.status, await r.text()); return false; }
    return true;
  } catch (e) { console.error('sendRegisterNow', e); return false; }
}

// Community hat keine LIVE-Stunden — sendPaymentMail steigt bei stunden=0 aus.
// Darum eine eigene Bestaetigung, sonst hoert ein Community-Mitglied nach der Zahlung gar nichts.
async function sendCommunityWelcome(email, name, abDatum) {
  try {
    if (!email || !process.env.BREVO_API_KEY) return;
    const site = process.env.SITE_URL || 'https://www.deutschoderwas-club.de';
    const vorname = ((name || '').trim().split(' ')[0]) || '';
    const hallo = vorname ? `Hallo ${vorname},` : 'Hallo,';
    const start = abDatum
      ? `<div style="background:#fff;border-left:4px solid #FFCE00;border-radius:10px;padding:10px 14px;margin:6px 0;font-size:14px"><b>Dein Start:</b> ${abDatum}</div>`
      : '<div style="background:#fff;border-left:4px solid #7ED8EA;border-radius:10px;padding:10px 14px;margin:6px 0;font-size:14px"><b>Ab sofort freigeschaltet</b> &ndash; du kannst direkt loslegen.</div>';
    const PORTAL = 'https://billing.stripe.com/p/login/cNi8wP2DQcez5av6Yd5Rm00';
    const html = `<!DOCTYPE html><html lang="de"><body style="margin:0;background:#FFF8E0;font-family:'Inter','Segoe UI',system-ui,sans-serif;color:#1A1A1A">
  <table role="presentation" width="100%" style="padding:24px 12px"><tr><td align="center">
    <table role="presentation" width="600" style="max-width:600px;width:100%;background:#FFFCF5;border:1px solid #F0E5D8;border-radius:20px;overflow:hidden">
      <tr><td style="padding:24px 32px 8px">
        <span style="font-weight:700;font-size:22px">deutsch<span style="color:#35AFD0">oderwas</span></span>
      </td></tr>
      <tr><td style="padding:0 32px"><div style="height:3px;background:linear-gradient(135deg,#7ED8EA,#35AFD0);border-radius:999px"></div></td></tr>
      <tr><td style="padding:22px 32px 4px">
        <span style="font-weight:700;font-size:12px;letter-spacing:1px;text-transform:uppercase;color:#DD0000">Zahlung erfolgreich</span>
        <h1 style="font-size:26px;line-height:1.2;margin:8px 0 14px">Willkommen in der Community! &#127881;</h1>
        <p style="font-size:16px;line-height:1.6;margin:0 0 12px">${hallo}</p>
        <p style="font-size:16px;line-height:1.6;margin:0 0 14px">deine Zahlung ist angekommen &ndash; wie sch&ouml;n, dass du dabei bist! &#128153; Dir steht jetzt die ganze Lernplattform offen: Kursbibliothek von A1 bis C2, Vokabeltrainer, t&auml;glicher Podcast, die Community und Amanda rund um die Uhr.</p>
        ${start}
      </td></tr>
      <tr><td align="center" style="padding:14px 32px 4px">
        <a href="${site}/schuelerbereich" style="display:inline-block;background:linear-gradient(135deg,#7ED8EA,#35AFD0);color:#10627A;font-weight:700;font-size:16px;text-decoration:none;padding:14px 30px;border-radius:999px">Zum Sch&uuml;lerbereich</a>
      </td></tr>
      <tr><td style="padding:12px 32px 4px">
        <p style="font-size:13px;line-height:1.6;color:#6B7280;margin:0">Deine Mitgliedschaft verl&auml;ngert sich automatisch &ndash; jederzeit k&uuml;ndbar. <a href="${PORTAL}" style="color:#35AFD0">Mitgliedschaft verwalten</a></p>
      </td></tr>
      ${APP_BLOCK}
      <tr><td style="padding:14px 32px 22px">
        <p style="font-size:16px;line-height:1.6;margin:0">Viel Freude beim Lernen!<br><strong>Julia</strong> &#128153;</p>
      </td></tr>
      <tr><td style="background:#1A1A1A;padding:18px 32px;text-align:center">
        <p style="font-size:12px;color:#b9b9b9;margin:0">deutschoderwas &middot; <a href="https://deutschoderwas.de/#impressum" style="color:#FFCE00;text-decoration:none">Impressum</a></p>
      </td></tr>
    </table>
  </td></tr></table></body></html>`;
    const r = await fetch('https://api.brevo.com/v3/smtp/email', {
      method: 'POST',
      headers: { 'api-key': process.env.BREVO_API_KEY, 'Content-Type': 'application/json' },
      body: JSON.stringify({
        sender: { name: 'deutschoderwas club', email: process.env.BREVO_SENDER_EMAIL || 'deutschlernen@deutschoderwas.de' },
        replyTo: { name: 'Julia', email: process.env.BREVO_SENDER_EMAIL || 'deutschlernen@deutschoderwas.de' },
        to: [{ email, name: vorname || undefined }],
        bcc: [{ email: JULIA }],
        subject: 'Willkommen in der Community \u{1F389}',
        htmlContent: html,
      }),
    });
    if (!r.ok) console.error('communityWelcome brevo', r.status, await r.text());
  } catch (e) { console.error('sendCommunityWelcome', e); }
}

async function sendVerlaengerung(email, name, tier, inv) {
  try {
    if (!email || !process.env.BREVO_API_KEY) return;
    const site = process.env.SITE_URL || 'https://www.deutschoderwas-club.de';
    const vorname = ((name || '').trim().split(' ')[0]) || '';
    const hallo = vorname ? `Hallo ${vorname},` : 'Hallo,';
    const cent = Number(inv && inv.amount_paid) || 0;
    /* Das Eurozeichen als HTML-Entitaet: die Mail traegt keinen
       Zeichensatz im Kopf, ein direktes Zeichen kam als Salat an. */
    const waehrung = String((inv && inv.currency) || 'eur').toLowerCase();
    const zeichen = (waehrung === 'eur') ? '&euro;' : waehrung.toUpperCase();
    const betrag = cent ? ((cent / 100).toFixed(2).replace('.', ',') + ' ' + zeichen) : '';
    const PORTAL = 'https://billing.stripe.com/p/login/cNi8wP2DQcez5av6Yd5Rm00';
    const istPremium = (tier === 'premium');
    const summe = betrag
      ? `<div style="background:#fff;border-left:4px solid #7ED8EA;border-radius:10px;padding:10px 14px;margin:6px 0;font-size:14px"><b>Gezahlt:</b> ${betrag}</div>`
      : '';
    const nutzen = istPremium
      ? `<p style="font-size:16px;line-height:1.6;margin:0 0 14px">Nutz sie auch diesen Monat: die ganze Lernplattform von A1 bis C2, Vokabeltrainer, t&auml;glicher Podcast, die Community und Amanda rund um die Uhr. Und vor allem der <b>Sprechclub</b> &ndash; t&auml;glich von Montag bis Sonntag. Such dir im Wochenplan eine Stunde aus und sprich.</p>`
      : `<p style="font-size:16px;line-height:1.6;margin:0 0 14px">Nutz sie auch diesen Monat: die Kursbibliothek von A1 bis C2, der Vokabeltrainer, der t&auml;gliche Podcast, die Community und Amanda rund um die Uhr &ndash; alles ist f&uuml;r dich offen.</p>`;
    const knopf = istPremium
      ? `<a href="${site}/schuelerbereich#kalender" style="display:inline-block;background:linear-gradient(135deg,#7ED8EA,#35AFD0);color:#10627A;font-weight:700;font-size:16px;text-decoration:none;padding:14px 30px;border-radius:999px">Stunde im Sprechclub aussuchen</a>`
      : `<a href="${site}/schuelerbereich" style="display:inline-block;background:linear-gradient(135deg,#7ED8EA,#35AFD0);color:#10627A;font-weight:700;font-size:16px;text-decoration:none;padding:14px 30px;border-radius:999px">Zum Sch&uuml;lerbereich</a>`;
    const html = `<!DOCTYPE html><html lang="de"><head><meta charset="utf-8"></head><body style="margin:0;background:#FFF8E0;font-family:'Inter','Segoe UI',system-ui,sans-serif;color:#1A1A1A">
  <table role="presentation" width="100%" style="padding:24px 12px"><tr><td align="center">
    <table role="presentation" width="600" style="max-width:600px;width:100%;background:#FFFCF5;border:1px solid #F0E5D8;border-radius:20px;overflow:hidden">
      <tr><td style="padding:24px 32px 8px">
        <span style="font-weight:700;font-size:22px">deutsch<span style="color:#35AFD0">oderwas</span></span>
      </td></tr>
      <tr><td style="padding:0 32px"><div style="height:3px;background:linear-gradient(135deg,#7ED8EA,#35AFD0);border-radius:999px"></div></td></tr>
      <tr><td style="padding:22px 32px 4px">
        <span style="font-weight:700;font-size:12px;letter-spacing:1px;text-transform:uppercase;color:#DD0000">Zahlung best&auml;tigt</span>
        <h1 style="font-size:26px;line-height:1.2;margin:8px 0 14px">Deine Mitgliedschaft l&auml;uft weiter &#128153;</h1>
        <p style="font-size:16px;line-height:1.6;margin:0 0 12px">${hallo}</p>
        <p style="font-size:16px;line-height:1.6;margin:0 0 14px">deine Zahlung ist angekommen, alles l&auml;uft ganz normal weiter &ndash; du musst nichts tun.</p>
        ${summe}
        ${nutzen}
      </td></tr>
      <tr><td align="center" style="padding:14px 32px 4px">${knopf}</td></tr>
      <tr><td style="padding:12px 32px 4px">
        <p style="font-size:13px;line-height:1.6;color:#6B7280;margin:0">Deine Mitgliedschaft verl&auml;ngert sich automatisch &ndash; jederzeit k&uuml;ndbar. <a href="${PORTAL}" style="color:#35AFD0">Mitgliedschaft verwalten</a></p>
      </td></tr>
      <tr><td style="padding:14px 32px 22px">
        <p style="font-size:16px;line-height:1.6;margin:0">Bis bald!<br><strong>Julia</strong> &#128153;</p>
      </td></tr>
      <tr><td style="background:#1A1A1A;padding:18px 32px;text-align:center">
        <p style="font-size:12px;color:#b9b9b9;margin:0">deutschoderwas &middot; <a href="https://deutschoderwas.de/#impressum" style="color:#FFCE00;text-decoration:none">Impressum</a></p>
      </td></tr>
    </table>
  </td></tr></table></body></html>`;
    const r = await fetch('https://api.brevo.com/v3/smtp/email', {
      method: 'POST',
      headers: { 'api-key': process.env.BREVO_API_KEY, 'Content-Type': 'application/json' },
      body: JSON.stringify({
        sender: { name: 'deutschoderwas club', email: process.env.BREVO_SENDER_EMAIL || 'deutschlernen@deutschoderwas.de' },
        replyTo: { name: 'Julia', email: process.env.BREVO_SENDER_EMAIL || 'deutschlernen@deutschoderwas.de' },
        to: [{ email, name: vorname || undefined }],
        subject: 'Zahlung bestätigt – deine Mitgliedschaft läuft weiter',
        htmlContent: html,
      }),
    });
    if (!r.ok) console.error('verlaengerung brevo', r.status, await r.text());
  } catch (e) { console.error('sendVerlaengerung', e); }
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

  // ---- Vorverkauf: Zugang erst ab einem Datum, Laufzeit beginnt dann ----
  /* MUSS mit START_AB in api/create-checkout.js uebereinstimmen.
     Hier stand bis zuletzt fuer beide der 01.09.2026 — ein Datum aus der
     Vergangenheit. Dadurch blieb tier_ab leer, die fertige Vorverkaufs-
     Karte mit dem Countdown erschien nie, und die Monatsstunden liefen
     31 Tage nach dem Kauf ab statt ab dem Starttag.
     community: null = ab sofort nutzbar. */
  const START_AB = { community: null, premium: '2026-11-01', premiumplus: '2027-02-01' };
  /* Mitternacht in Berlin, ohne Sommerzeit-Falle. Der 1. November liegt
     in der Winterzeit; mit festem '+02:00' war Mitternacht eine Stunde zu
     frueh und die naechste Abbuchung landete am 30.11. um 23 Uhr. */
  function berlinMitternacht(iso){
    for (const versatz of ['+01:00', '+02:00']) {
      const d = new Date(iso + 'T00:00:00' + versatz);
      const gezeigt = new Intl.DateTimeFormat('sv-SE', {
        timeZone: 'Europe/Berlin', dateStyle: 'short', timeStyle: 'short'
      }).format(d);
      if (gezeigt === iso + ' 00:00') return d;
    }
    return new Date(iso + 'T00:00:00+01:00');
  }
  function startDatum(tier){
    const d = START_AB[tier];
    if (!d) return null;
    return (berlinMitternacht(d) > new Date()) ? d : null;
  }
  function tageBis(iso){
    if (!iso) return 0;
    const ms = berlinMitternacht(iso) - new Date();
    return ms > 0 ? Math.ceil(ms / 86400000) : 0;
  }
  // Wer schon Unterricht hat, wird NICHT ausgesperrt: Bestandsschueler bekommen
  // kein Startdatum und sehen ab der Sekunde des Kaufs alles wie bisher.
  // Nur wirklich neue Mitglieder sehen den Countdown.
  async function startFuer(userId, tier) {
    const iso = startDatum(tier);
    if (!iso || !userId) return iso;
    try {
      const { data: p } = await sb.from('profiles')
        .select('status, credits, pass_until, tier, tier_ab').eq('id', userId).maybeSingle();
      if (!p) return iso;
      const hatSchonZugang =
        (p.credits || 0) > 0 ||
        (p.pass_until && new Date(p.pass_until) > new Date()) ||
        (p.tier && !p.tier_ab) ||
        p.status === 'aktiv' || p.status === 'urlaub' || p.status === 'pause';
      return hatSchonZugang ? null : iso;
    } catch (e) { return iso; }
  }

  /* Einen Monat bzw. ein Jahr weiter — auf dem Datum gerechnet, nicht auf
     dem Zeitstempel. setMonth() auf einem 31. rutscht in den uebernaechsten
     Monat: aus dem 31.10. plus ein Monat wurde der 2. Dezember statt des
     1. Dezember. Hier kommt aus 2026-11-01 sauber 2026-12-01 bzw. fuer das
     Jahresabo 2027-11-01. */
  function einePeriodeSpaeter(iso, interval){
    const [j, m, t] = iso.split('-').map(Number);
    const [J, M] = (interval === 'year')
      ? [j + 1, m]
      : (m === 12 ? [j + 1, 1] : [j, m + 1]);
    return J + '-' + String(M).padStart(2, '0') + '-' + String(t).padStart(2, '0');
  }

  // Erste Rechnung ist bezahlt -> naechste Abbuchung erst eine Periode NACH dem Starttag.
  async function laufzeitAbStart(sub, iso){
    if (!sub || !iso) return;
    try {
      const start = berlinMitternacht(iso);
      if (start <= new Date()) return;
      const interval = sub.items?.data?.[0]?.price?.recurring?.interval || 'month';
      const ende = berlinMitternacht(einePeriodeSpaeter(iso, interval));
      const jetztEnde = sub.current_period_end ? new Date(sub.current_period_end * 1000) : null;
      if (jetztEnde && ende <= jetztEnde) return;   // nichts zu verschieben
      await stripe.subscriptions.update(sub.id, {
        trial_end: Math.floor(ende.getTime() / 1000),
        proration_behavior: 'none',
      });
    } catch (e) { console.error('laufzeit-ab-start', e && e.message); }
  }

  /* Wer als Community-Mitglied auf Premium wechselt, kauft bei Stripe ein
     ZWEITES Abo — einen Tarifwechsel gibt es hier nicht. Ohne diese Zeilen
     laeuft das alte Community-Abo einfach weiter, und die Person zahlt ab
     dem naechsten Monat 16 Euro PLUS 49 Euro. Premium enthaelt Community
     vollstaendig, das alte Abo hat also keinen Zweck mehr.

     Gekuendigt wird zum Periodenende (cancel_at_period_end), nicht sofort:
     der laufende Monat ist bezahlt und bleibt bestehen. Nichts wird
     erstattet, nichts abgeschnitten.

     Vorsicht an zwei Stellen: das gerade bezahlte Premium-Abo selbst darf
     es nie treffen (deshalb ausserSub), und ein schon gekuendigtes Abo
     wird nicht noch einmal angefasst. */
  async function altesCommunityAboBeenden(kundeId, ausserSub){
    if (!kundeId) return;
    try {
      const liste = await stripe.subscriptions.list({ customer: kundeId, status: 'active', limit: 20 });
      for (const a of (liste.data || [])) {
        if (a.id === ausserSub) continue;
        if ((a.metadata && a.metadata.tier) !== 'community') continue;
        if (a.cancel_at_period_end) continue;
        await stripe.subscriptions.update(a.id, { cancel_at_period_end: true });
        console.log('community-abo zum Periodenende gekuendigt:', a.id, 'wegen Premium', ausserSub);
      }
    } catch (e) { console.error('altes-community-abo', e && e.message); }
  }

  // Stripe-Kundennummer am Profil merken — wird fürs Kündigungs-Portal gebraucht.
  // Kauf per E-Mail parken, wenn (noch) kein Konto existiert -> wird bei Registrierung gutgeschrieben.
  async function addPending(sb2, email, stunden, plan, makeStatus, isTrial, ref) {
    if (!email || (!stunden && !makeStatus)) return; // Community: stunden=0, aber makeStatus vorhanden -> trotzdem parken
    try {
      const { data: ex } = await sb2.from('pending_purchases').select('id').eq('stripe_ref', ref).maybeSingle();
      if (ex) return;
      const { data: neu } = await sb2.from('pending_purchases')
        .insert({ email, stunden, plan: plan || null, make_status: makeStatus || null, is_trial: !!isTrial, stripe_ref: ref })
        .select('id').maybeSingle();
      // Sofort Bescheid geben statt bis zum naechsten Morgen zu warten.
      const ok = await sendRegisterNow(email);
      if (ok && neu && neu.id) {
        await sb2.from('pending_purchases').update({ reg_reminded: true }).eq('id', neu.id);
      }
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
        || (!userId && !s.metadata?.plan && (s.amount_total === 999 || s.amount_subtotal === 999));
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
      /* Frueher galt hier nur amount_paid > 0. Das hat die 0-Euro-Rechnung
         der Testphase uebersprungen — richtig — aber eben auch jede
         Rechnung, die durch einen Gutschein ueber 100 % auf null faellt.
         Die Person hatte dann ein laufendes Abo bei Stripe und auf der
         Plattform keinen Tarif, keine Stunden, keine Mail.
         Jetzt zaehlt nicht der Betrag, sondern ob es eine Testphase ist:
         eine Abo-Rechnung ohne Testphase wird verbucht, auch bei 0 Euro. */
      const istProbe = (inv.billing_reason === 'subscription_create'
                        && (inv.amount_due || 0) === 0
                        && !(inv.discount || (inv.total_discount_amounts || []).length));
      if (((inv.amount_paid || 0) > 0 || !istProbe) && inv.subscription) {
        const sub = await stripe.subscriptions.retrieve(inv.subscription);
        const stunden = parseInt(sub.metadata?.stunden || '0', 10);
        /* Premium-Vorverkauf: Wer vor dem 1.11.2026 bucht, zahlt sofort (damit feststeht,
           wie viele Anmeldungen es gibt). Die Laufzeit zaehlt aber erst ab 1.11. —
           die naechste Abbuchung kommt also erst am 1.12.2026 (Jahresabo: 1.11.2027).
           Gilt fuer ALLE Premium-Kaeufer, auch Bestandsmitglieder und Kaeufer ohne Konto,
           deshalb hier vor jeder anderen Verzweigung. Nach dem 1.11. passiert nichts. */
        if ((sub.metadata?.tier || '') === 'premium') await laufzeitAbStart(sub, '2026-11-01');
        let userId = sub.metadata?.userId;
        const plan = sub.metadata?.plan || 'abo';
        let invEmail = (inv.customer_email || '').trim().toLowerCase();
        if (!invEmail && inv.customer) { try { const c = await stripe.customers.retrieve(inv.customer); invEmail = (c.email || '').trim().toLowerCase(); } catch (e) {} }
        // Beleg zuerst: wer bezahlt hat, bekommt seine Rechnung — auch dann,
        // wenn es noch kein Konto zu der Adresse gibt.
        if (invEmail) await sendRechnung(inv, invEmail);
        if (invEmail) {
          const { data: ip } = await sb.from('profiles').select('id').ilike('email', invEmail).maybeSingle();
          if (ip) { userId = ip.id; }
          else { await addPending(sb, invEmail, stunden, plan, 'aktiv', false, 'inv_' + inv.id); return res.status(200).json({ received: true, pending: invEmail }); }
        }
        await saveCustomer(userId, inv.customer);   // Kundennummer merken
        const tier = sub.metadata?.tier || '';
        if (tier === 'community') {
          // Community: ganze Plattform frei (status=aktiv), ABER keine Live-Stunden & kein pass_until (kein Buchen).
          const dk = 'inv_' + inv.id;
          const { data: cex } = await sb.from('credit_log').select('id').eq('stripe_session_id', dk).maybeSingle();
          /* "Erste Zahlung" hing frueher an der Rechnungsnummer. Die ist aber
             jeden Monat eine neue, also war jede Verlaengerung eine "erste
             Zahlung" und die Willkommensmail ging jeden Monat erneut raus.
             Stripe sagt es selbst: subscription_create steht nur auf der
             allerersten Rechnung eines Abos, jede Verlaengerung ist
             subscription_cycle. (cex bleibt als Schutz gegen doppelt
             zugestellte Ereignisse derselben Rechnung.) */
          const ersteZahlung = (inv.billing_reason === 'subscription_create');
          if (!cex) await sb.from('credit_log').insert({ user_id: userId, change: 0, reason: 'abo:' + plan, stripe_session_id: dk });
          const abCom = await startFuer(userId, 'community');
          await sb.from('profiles').update({ status: 'aktiv', tier: 'community', tier_ab: abCom }).eq('id', userId);
          await laufzeitAbStart(sub, abCom);
          /* Beim ersten Mal begruessen. Bei jeder Verlaengerung stattdessen
             eine Zahlungsbestaetigung, die daran erinnert, die Plattform
             auch wirklich zu nutzen. */
          const { data: cp } = await sb.from('profiles').select('email,name').eq('id', userId).maybeSingle();
          if (ersteZahlung) {
            await sendCommunityWelcome((cp && cp.email) || invEmail, cp && cp.name, abCom);
          } else {
            await sendVerlaengerung((cp && cp.email) || invEmail, cp && cp.name, 'community', inv);
          }
        } else {
          // Premium + alte Pässe: Stunden gutschreiben (grant setzt auch pass_until fürs Buchen).
          // Beim Vorverkauf laufen die Stunden erst ab dem Starttag ab (Wartezeit wird draufgelegt).
          const abPrem = (tier === 'premium') ? await startFuer(userId, 'premium') : null;
          await grant(userId, stunden, 'abo:' + plan, 'inv_' + inv.id, 31 + tageBis(abPrem));
          /* Premium beim ersten Mal: die gewohnte Stunden-Mail. Ab der ersten
             Verlaengerung stattdessen die Zahlungsbestaetigung mit dem Hinweis,
             sich im Wochenplan eine Stunde auszusuchen. Alte Paesse behalten
             ihre Stunden-Mail, dort ist sie die eigentliche Nachricht. */
          if (tier === 'premium' && inv.billing_reason !== 'subscription_create') {
            const { data: pp } = await sb.from('profiles').select('email,name').eq('id', userId).maybeSingle();
            await sendVerlaengerung((pp && pp.email) || invEmail, pp && pp.name, 'premium', inv);
          } else {
            await sendPaymentMail(sub, inv);
          }
          if (tier === 'premium') {
            await sb.from('profiles').update({ status: 'aktiv', tier: 'premium', tier_ab: abPrem }).eq('id', userId);
            await laufzeitAbStart(sub, abPrem);
            await altesCommunityAboBeenden(inv.customer, sub.id);
          } else if (userId) {
            // Aus Probeschüler wird zahlendes Mitglied -> Status auf aktiv (nur wenn vorher Probeschüler)
            const { data: pr } = await sb.from('profiles').select('status').eq('id', userId).maybeSingle();
            if (pr && pr.status === 'probeschuler') {
              await sb.from('profiles').update({ status: 'aktiv' }).eq('id', userId);
            }
          }
        }
      }
    } else if (event.type === 'customer.subscription.deleted') {
      // Abo ist tatsächlich beendet (zum Periodenende): ALLE gesammelten Stunden verfallen -> 0.
      const sub = event.data.object;
      let userId = sub.metadata?.userId;

      /* Wer die Mitgliedschaft kauft, BEVOR er ein Konto hat, steht in
         pending_purchases — in der Subscription steht dann keine userId,
         und dieser Zweig lief früher ins Leere: Die Person blieb auf
         „aktiv" und behielt den Zugang. Deshalb hier zwei Auswege:
         erst über die Stripe-Kundennummer, dann über die E-Mail. */
      if (!userId && sub.customer) {
        const { data: viaKunde } = await sb.from('profiles')
          .select('id').eq('stripe_customer_id', sub.customer).maybeSingle();
        if (viaKunde) userId = viaKunde.id;
      }
      if (!userId && sub.customer && process.env.STRIPE_SECRET_KEY) {
        try {
          const kunde = await stripe.customers.retrieve(sub.customer);
          const mail = kunde && kunde.email;
          if (mail) {
            const { data: viaMail } = await sb.from('profiles')
              .select('id').ilike('email', mail).maybeSingle();
            if (viaMail) {
              userId = viaMail.id;
              await sb.from('profiles').update({ stripe_customer_id: sub.customer }).eq('id', userId);
            }
          }
        } catch (e) { console.error('kunde nachschlagen', e && e.message); }
      }

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
          const delTier = sub.metadata?.tier || '';
          const endPatch = { credits: 0, pass_until: new Date().toISOString() };
          // Neues Modell (Community/Premium): Mitgliedschaft endet -> Plattform-Zugang schliessen.
          if (delTier === 'community' || delTier === 'premium') endPatch.status = 'inaktiv';
          await sb.from('profiles').update(endPatch).eq('id', userId);
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
