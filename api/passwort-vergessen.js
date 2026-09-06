// ============================================================
//  Passwort vergessen — über Brevo statt über Supabase
//
//  Warum es diesen Endpunkt gibt: Die Mails, die Supabase selbst
//  verschickt, kommen nicht zuverlässig an. Genau daran ist am
//  4. September eine Kundin gescheitert, die bezahlt hatte und
//  zwei Tage nicht hineinkam — ihre Bestätigungsmail kam nie.
//
//  Dasselbe gilt für „Passwort vergessen“. Der Weg lief über
//  sb.auth.resetPasswordForEmail, also über denselben Mailweg, und
//  wäre beim nächsten Mal genauso still gescheitert. Nur merkt es
//  dann niemand, weil die Seite trotzdem „Link verschickt“ sagt.
//
//  Deshalb hier: Der Link wird über die Admin-Schnittstelle erzeugt
//  und über Brevo verschickt — denselben Weg, über den auch alle
//  anderen Mails der Plattform gehen und der nachweislich ankommt.
//
//  POST { email } -> { ok: true, gesendet: boolean }
//  Ob es die Adresse gibt, verrät die Antwort bewusst nicht.
// ============================================================
import { createClient } from '@supabase/supabase-js';

const SITE = process.env.SITE_URL || 'https://www.deutschoderwas-club.de';
const FF = "-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif";
const esc = (s) => String(s == null ? '' : s).replace(/[<>&]/g, (c) => ({ '<': '&lt;', '>': '&gt;', '&': '&amp;' }[c]));

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  if (req.method === 'OPTIONS') return res.status(204).end();
  if (req.method !== 'POST') return res.status(405).json({ error: 'method_not_allowed' });

  const email = String((req.body || {}).email || '').trim().toLowerCase();
  if (!email || !email.includes('@')) return res.status(400).json({ error: 'bad_email' });

  if (!process.env.SUPABASE_URL || !process.env.SUPABASE_SERVICE_ROLE_KEY || !process.env.BREVO_API_KEY)
    return res.status(200).json({ ok: true, gesendet: false, grund: 'nicht_konfiguriert' });

  const sb = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_SERVICE_ROLE_KEY,
    { auth: { persistSession: false } });

  try {
    /* Den Namen holen, damit die Mail nicht „Hallo du“ sagt, wenn wir
       es besser wissen. Fehlt das Profil, ist das kein Grund abzubrechen. */
    let vorname = 'du';
    try {
      const { data: prof } = await sb.from('profiles').select('name').ilike('email', email).maybeSingle();
      if (prof && prof.name) vorname = String(prof.name).split(' ')[0];
    } catch (e) { /* egal */ }

    const { data: link, error: lErr } = await sb.auth.admin.generateLink({
      type: 'recovery', email, options: { redirectTo: SITE + '/passwort.html' },
    });
    const ziel = link && link.properties && link.properties.action_link;
    /* Kein Konto zu dieser Adresse: nach außen sieht das genauso aus
       wie ein Erfolg. Sonst kann man damit Adressen abfragen. */
    if (lErr || !ziel) return res.status(200).json({ ok: true, gesendet: false });

    const r = await fetch('https://api.brevo.com/v3/smtp/email', {
      method: 'POST',
      headers: { 'api-key': process.env.BREVO_API_KEY, 'Content-Type': 'application/json' },
      body: JSON.stringify({
        sender: { name: 'Julia | deutschoderwas', email: process.env.BREVO_SENDER_EMAIL || 'deutschlernen@deutschoderwas.de' },
        replyTo: { name: 'Julia', email: process.env.BREVO_SENDER_EMAIL || 'deutschlernen@deutschoderwas.de' },
        to: [{ email }],
        subject: 'Dein neues Passwort für den Club 🔐',
        htmlContent: mailHtml({ vorname, ziel }),
      }),
    });
    if (!r.ok) {
      console.error('passwort-vergessen: Brevo', r.status, (await r.text()).slice(0, 200));
      return res.status(200).json({ ok: true, gesendet: false, grund: 'mail_fehlgeschlagen' });
    }
    return res.status(200).json({ ok: true, gesendet: true });
  } catch (e) {
    console.error('passwort-vergessen', e);
    return res.status(200).json({ ok: true, gesendet: false, grund: 'unerwartet' });
  }
}

function mailHtml({ vorname, ziel }) {
  return `<!DOCTYPE html><html lang="de"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"></head>
<body style="margin:0;background:#FFF8E0;font-family:${FF}">
 <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="padding:28px 14px"><tr><td align="center">
  <table role="presentation" width="100%" style="max-width:560px;background:#fff;border-radius:20px;overflow:hidden;box-shadow:0 10px 30px rgba(26,26,26,.10)">
   <tr><td style="height:6px;background:#2DD4BF"></td></tr>
   <tr><td style="padding:26px 30px 6px">
     <div style="font-weight:800;font-size:14px;letter-spacing:.04em;color:#1A1A1A">deutschoderwas <span style="color:#DD0000">club</span></div>
     <h1 style="margin:12px 0 0;font-size:23px;font-weight:800;color:#1A1A1A">Hallo ${esc(vorname)}, hier ist dein Link</h1>
     <p style="margin:10px 0 0;font-size:15px;line-height:1.6;color:#1A1A1A">
       Du hast ein neues Passwort angefordert. Klick auf den Knopf, setz dir ein neues — und danach bist du wieder drin.
     </p>
   </td></tr>
   <tr><td align="center" style="padding:20px 30px 6px">
     <a href="${esc(ziel)}" style="display:inline-block;background:#2DD4BF;color:#06403A;font-weight:800;font-size:15px;text-decoration:none;padding:14px 30px;border-radius:999px">🔐 Neues Passwort setzen</a>
   </td></tr>
   <tr><td style="padding:14px 30px 4px;font-size:13px;line-height:1.6;color:#5C4E3E">
     <p style="margin:0">Der Link gilt nur eine begrenzte Zeit. Wenn er abgelaufen ist, fordere auf
     <a href="${SITE}" style="color:#0F766E">deutschoderwas-club.de</a> einfach einen neuen an.</p>
     <p style="margin:10px 0 0">Du hast das nicht angefordert? Dann ignorier diese Mail einfach — es ändert sich nichts.</p>
   </td></tr>
   <tr><td style="padding:16px 30px 6px;font-size:15px;line-height:1.6;color:#1A1A1A">
     Bis gleich im Club!<br><b>Julia</b>
   </td></tr>
   <tr><td style="padding:8px 30px 24px;font-size:11.5px;color:#9CA3AF;line-height:1.6">
     deutschoderwas · Julia Karackov · Wiesenstraße 38 · 58119 Hagen
   </td></tr>
  </table>
 </td></tr></table>
</body></html>`;
}
