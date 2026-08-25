// ---------------------------------------------------------------------------
// Einmal-Mail an die Warteliste: die Community ist ab sofort buchbar.
//
// Zwei Fassungen, weil die Leute Verschiedenes wollten:
//   Community-Interessierte -> "Die Warteliste ist vorbei, du kannst sofort rein"
//   Premium-Interessierte   -> "Dein Platz fuer den 1.11. steht — bis dahin gibt
//                               es die Community schon"
//
// Sicherungen: doppelte Adressen fliegen raus, wer schon Mitglied ist bekommt
// nichts, und jede verschickte Mail wird in email_log vermerkt (kind 'wl_start').
// Ein zweiter Aufruf schickt also niemandem dieselbe Mail noch einmal.
//
// Aufruf:  POST /api/warteliste-community            -> echter Versand
//          POST /api/warteliste-community?dry=1      -> nur zeigen, wer dran waere
//          POST /api/warteliste-community?test=a@b.c -> beide Fassungen nur dorthin
// ---------------------------------------------------------------------------
import { createClient } from '@supabase/supabase-js';

const SITE = process.env.SITE_URL || 'https://www.deutschoderwas-club.de';
const ABSENDER = process.env.BREVO_SENDER_EMAIL || 'deutschlernen@deutschoderwas.de';

const KASTEN = (inhalt) =>
  `<div style="background:#fff;border-left:4px solid #7ED8EA;border-radius:10px;padding:12px 16px;margin:4px 0 16px;font-size:15px;line-height:1.65">${inhalt}</div>`;

function huelle({ eyebrow, h1, absaetze, knopf, link, ps }) {
  const text = absaetze.map((a) => `<p style="font-size:16px;line-height:1.6;margin:0 0 14px">${a}</p>`).join('');
  const nach = ps ? `<tr><td style="padding:0 32px 8px"><p style="font-size:14px;line-height:1.6;color:#6B7280;margin:0">${ps}</p></td></tr>` : '';
  return `<!DOCTYPE html><html lang="de"><body style="margin:0;background:#FFF8E0;font-family:'Inter','Segoe UI',system-ui,sans-serif;color:#1A1A1A">
  <table role="presentation" width="100%" style="padding:24px 12px"><tr><td align="center">
    <table role="presentation" width="600" style="max-width:600px;width:100%;background:#FFFCF5;border:1px solid #F0E5D8;border-radius:20px;overflow:hidden">
      <tr><td style="padding:24px 32px 8px">
        <span style="font-family:'Space Grotesk','Segoe UI',sans-serif;font-weight:700;font-size:22px;color:#1A1A1A">deutsch<span style="color:#35AFD0">oderwas</span></span>
        <span style="display:block;font-size:12px;color:#6B7280;margin-top:2px">Deutsch lernen mit Spa&szlig; &amp; Leichtigkeit</span>
      </td></tr>
      <tr><td style="padding:0 32px"><div style="height:3px;background:linear-gradient(135deg,#7ED8EA,#35AFD0);border-radius:999px"></div></td></tr>
      <tr><td style="padding:22px 32px 4px">
        <span style="font-weight:700;font-size:12px;letter-spacing:1px;text-transform:uppercase;color:#DD0000">${eyebrow}</span>
        <h1 style="font-family:'Space Grotesk','Segoe UI',sans-serif;font-weight:700;font-size:26px;line-height:1.2;margin:8px 0 14px;color:#1A1A1A">${h1}</h1>
        ${text}
      </td></tr>
      <tr><td align="center" style="padding:10px 32px 4px">
        <a href="${link}" style="display:inline-block;background:linear-gradient(135deg,#7ED8EA,#35AFD0);color:#10627A;font-weight:700;font-size:16px;text-decoration:none;padding:14px 30px;border-radius:999px">${knopf}</a>
      </td></tr>
      ${nach}
      <tr><td style="padding:14px 32px 22px">
        <p style="font-size:16px;line-height:1.6;margin:0">Bis gleich!<br><strong>Julia</strong> &#128155;</p>
      </td></tr>
      <tr><td style="background:#1A1A1A;padding:18px 32px;text-align:center">
        <p style="font-size:12px;line-height:1.6;color:#b9b9b9;margin:0">deutschoderwas &middot; <a href="https://deutschoderwas.de/#impressum" style="color:#FFCE00;text-decoration:none">Impressum</a></p>
      </td></tr>
    </table>
  </td></tr></table>
</body></html>`;
}

function mailCommunity(hallo) {
  return {
    subject: 'Es ist so weit \u{1F49B} die Community ist offen',
    html: huelle({
      eyebrow: 'Die Warteliste ist vorbei',
      h1: 'Die Community ist offen &#128155;',
      absaetze: [
        hallo,
        'du stehst seit ein paar Tagen auf der Warteliste &ndash; und jetzt kann ich dir endlich schreiben: <b>die Community ist offen.</b> Ab sofort, ohne Wartezeit.',
        KASTEN('Die ganze Kursbibliothek <b>A1 bis C2</b><br>Vokabeltrainer, t&auml;glicher Podcast und &Uuml;bungen<br><b>Community-Chat</b> mit den anderen Lernenden<br><b>Amanda</b> beantwortet dir rund um die Uhr jede Frage'),
        '<b>12 &euro; im Monat</b> bei j&auml;hrlicher Zahlung, 16 &euro; wenn du monatlich zahlst. K&uuml;ndbar, wann du willst.',
      ],
      knopf: '&#128155; Jetzt Mitglied werden',
      link: SITE + '/#preise',
      ps: 'Du bist in zwei Minuten drin und kannst heute noch anfangen.',
    }),
  };
}

function mailPremium(hallo) {
  return {
    subject: 'Premium startet am 1. November – aber du musst nicht warten',
    html: huelle({
      eyebrow: 'Dein Platz ist sicher',
      h1: 'Premium startet am 1. November',
      absaetze: [
        hallo,
        'kurze Nachricht zu deinem Platz auf der Warteliste: <b>Premium startet am 1. November.</b> Du stehst drauf, ich melde mich rechtzeitig bei dir &ndash; du musst nichts tun.',
        'Eins wollte ich dir aber schon jetzt sagen: alles, was in Premium drin ist &ndash; au&szlig;er dem Sprechen am Abend &ndash; gibt es <b>ab sofort</b> in der Community.',
        KASTEN('Kursbibliothek <b>A1 bis C2</b>, Vokabeltrainer, Podcast<br>Community-Chat und <b>Amanda</b> rund um die Uhr<br><b>12 &euro; im Monat</b> &middot; jederzeit k&uuml;ndbar'),
        'Im November wechselst du mit einem Klick zu Premium &ndash; und alles, was du bis dahin gelernt hast, bleibt.',
      ],
      knopf: '&#128155; Jetzt in der Community anfangen',
      link: SITE + '/#preise',
      ps: 'Wenn du lieber bis November wartest, ist das auch v&ouml;llig in Ordnung &ndash; dein Platz bleibt.',
    }),
  };
}

async function schicke(email, name, brief) {
  const r = await fetch('https://api.brevo.com/v3/smtp/email', {
    method: 'POST',
    headers: { 'api-key': process.env.BREVO_API_KEY, 'Content-Type': 'application/json' },
    body: JSON.stringify({
      sender: { name: 'deutschoderwas club', email: ABSENDER },
      replyTo: { name: 'Julia', email: ABSENDER },
      to: [{ email, name: name || undefined }],
      subject: brief.subject,
      htmlContent: brief.html,
    }),
  });
  if (!r.ok) { console.error('wl brevo', email, r.status, await r.text()); return false; }
  return true;
}

export default async function handler(req, res) {
  if (!process.env.BREVO_API_KEY) return res.status(200).json({ ok: false, skipped: 'BREVO_API_KEY fehlt' });
  const sb = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_SERVICE_ROLE_KEY);

  const test = String(req.query.test || '').trim().toLowerCase();
  const trocken = String(req.query.dry || '') === '1';

  // Testlauf: beide Fassungen gehen nur an die eine Adresse.
  if (test) {
    const a = await schicke(test, 'Julia', mailCommunity('Hallo Julia,'));
    const b = await schicke(test, 'Julia', mailPremium('Hallo Julia,'));
    return res.status(200).json({ ok: true, test, community: a, premium: b });
  }

  const { data: leads } = await sb.from('leads').select('id,name,email,tarif').order('created_at');
  const { data: schon } = await sb.from('email_log').select('ref').eq('kind', 'wl_start');
  const gesendet = new Set((schon || []).map((z) => String(z.ref || '').toLowerCase()));

  // Wer schon Mitglied ist, bekommt keine Werbung fuer das, was er hat.
  const { data: mitglieder } = await sb.from('profiles').select('email,tier');
  const istMitglied = new Set(
    (mitglieder || []).filter((p) => ['community', 'premium', 'premium_plus'].includes(p.tier || ''))
      .map((p) => String(p.email || '').toLowerCase())
  );

  const gesehen = new Set();
  const ziele = [];
  for (const l of leads || []) {
    const mail = String(l.email || '').trim().toLowerCase();
    if (!mail || !mail.includes('@')) continue;
    if (gesehen.has(mail)) continue;            // dieselbe Adresse steht mehrfach drin
    gesehen.add(mail);
    if (gesendet.has(mail)) continue;           // hat die Mail schon bekommen
    if (istMitglied.has(mail)) continue;        // ist schon dabei
    const t = String(l.tarif || '').toLowerCase();
    // "Premium / Community" zaehlt als Community — die kann sie sofort haben.
    const fassung = t.includes('community') ? 'community' : 'premium';
    ziele.push({ email: mail, name: (l.name || '').trim(), fassung });
  }

  if (trocken) {
    return res.status(200).json({
      ok: true, dry: true, anzahl: ziele.length,
      community: ziele.filter((z) => z.fassung === 'community').map((z) => z.email),
      premium: ziele.filter((z) => z.fassung === 'premium').map((z) => z.email),
    });
  }

  let ok = 0, fehler = 0;
  for (const z of ziele) {
    const vorname = (z.name.split(/\s+/)[0] || '').trim();
    const hallo = vorname ? `Hallo ${vorname},` : 'Hallo,';
    const brief = z.fassung === 'community' ? mailCommunity(hallo) : mailPremium(hallo);
    const gut = await schicke(z.email, z.name, brief);
    if (gut) {
      ok++;
      await sb.from('email_log').insert({ kind: 'wl_start', ref: z.email });
    } else fehler++;
    await new Promise((w) => setTimeout(w, 120));   // Brevo nicht ueberfahren
  }
  return res.status(200).json({ ok: true, gesendet: ok, fehler, gesamt: ziele.length });
}
