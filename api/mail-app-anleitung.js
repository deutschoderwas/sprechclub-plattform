// Schickt allen aktiven Mitgliedern die Anleitung, wie sie die App auf den
// Startbildschirm legen — mit Bildern, in drei Schritten je Handytyp.
//
// Wird NICHT automatisch ausgeloest. Jemand muss sie aufrufen:
//
//   POST /api/mail-app-anleitung          + Authorization: Bearer <Admin-Token>
//   Body { test: true }                   -> nur an die eigene Adresse
//   Body { }                              -> an alle aktiven Mitglieder
//
// Verschickt wird ueber Brevo, wie die anderen Mails auch. Wer
// profiles.email_optout gesetzt hat, bekommt nichts. Gesendet wird in
// Haeppchen zu 50, damit Brevo nicht abriegelt.
import { createClient } from '@supabase/supabase-js';

const SITE = process.env.SITE_URL || 'https://www.deutschoderwas-club.de';

function esc(s) {
  return String(s == null ? '' : s).replace(/[<>&]/g, c => ({ '<': '&lt;', '>': '&gt;', '&': '&amp;' }[c]));
}

/* Eine E-Mail ist kein Browser: Tabellen statt Flexbox, Stile direkt am
   Element, Bilder als volle Adresse. Was hier steht, muss auch in einem
   zwanzig Jahre alten Postfach lesbar bleiben. */
function schritt(nr, titel, text, bild, alt) {
  return `
  <tr><td style="padding:0 0 14px">
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0"
           style="background:#FFFDF3;border:2px solid #20211F;border-radius:22px;overflow:hidden">
      <tr><td style="padding:15px 18px 13px">
        <table role="presentation" cellpadding="0" cellspacing="0"><tr>
          <td width="28" style="width:28px;height:28px;background:#DD0000;border-radius:14px;
              color:#ffffff;font:800 14px/28px Arial,sans-serif;text-align:center">${nr}</td>
          <td style="padding-left:10px;font:700 16px/1.35 Arial,sans-serif;color:#20211F">${esc(titel)}</td>
        </tr></table>
        <div style="font:400 14.5px/1.6 Arial,sans-serif;color:#54594A;margin-top:7px">${text}</div>
      </td></tr>
      <tr><td style="border-top:2px solid #20211F;font-size:0;line-height:0">
        <img src="${SITE}/bilder/app-anleitung/${bild}.png" width="560" alt="${esc(alt)}"
             style="display:block;width:100%;max-width:560px;height:auto;border:0">
      </td></tr>
    </table>
  </td></tr>`;
}

function mailHtml(name) {
  const hallo = name ? `Hallo ${esc(name)},` : 'Hallo,';
  return `<!DOCTYPE html><html lang="de"><head><meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<title>Die App auf den Startbildschirm</title></head>
<body style="margin:0;padding:0;background:#FFF8E0">
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#FFF8E0">
<tr><td align="center" style="padding:26px 14px 60px">
<table role="presentation" width="560" cellpadding="0" cellspacing="0" style="width:560px;max-width:100%">

  <tr><td style="padding-bottom:20px">
    <table role="presentation" cellpadding="0" cellspacing="0"><tr>
      <td width="52"><img src="${SITE}/icons/icon-192.png" width="52" height="52" alt=""
          style="display:block;border-radius:15px;border:2px solid #20211F"></td>
      <td style="padding-left:12px;font:700 15px/1.3 Arial,sans-serif;color:#20211F">
        deutschoderwas<br>
        <span style="font:400 13px/1.4 Arial,sans-serif;color:#8A857C">Deutsch üben, wann du willst</span>
      </td>
    </tr></table>
  </td></tr>

  <tr><td style="font:800 27px/1.2 Arial,sans-serif;color:#20211F;padding-bottom:10px">
    Leg dir die App auf den Startbildschirm
  </td></tr>
  <tr><td style="font:400 15.5px/1.65 Arial,sans-serif;color:#54594A;padding-bottom:20px">
    ${hallo}<br><br>
    drei Schritte, einmal gemacht — dann tippst du auf ein Symbol,
    statt jedes Mal die Adresse einzugeben.
  </td></tr>

  <tr><td style="background:#FFF6D9;border:2px solid #FFE100;border-radius:20px;padding:16px 18px;
      font:400 14.5px/1.6 Arial,sans-serif;color:#54594A">
    <b style="color:#20211F;font-size:15px">Warum sich das lohnt</b><br>
    Kein App Store, kein Download, kein Speicherplatz. Die Seite legt sich als Symbol
    auf deinen Startbildschirm und öffnet sich dann ohne Adressleiste — wie eine
    richtige App. Alles bleibt genau so, wie du es kennst.
  </td></tr>

  <tr><td style="font:700 20px/1.3 Arial,sans-serif;color:#20211F;padding:32px 0 4px">
    📱 Auf dem iPhone
  </td></tr>
  <tr><td style="font:400 14px/1.5 Arial,sans-serif;color:#8A857C;padding-bottom:14px">
    Wichtig: Das geht nur mit <b>Safari</b>, nicht mit Chrome.
  </td></tr>
  <tr><td>
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
    ${schritt(1, 'Seite in Safari öffnen',
      'Geh auf <b>deutschoderwas-club.de</b> und melde dich an. Tipp unten in der Leiste auf das Teilen-Symbol — das Viereck mit dem Pfeil nach oben.',
      'ios-1', 'Safari mit der geöffneten Seite, das Teilen-Symbol unten ist rot markiert')}
    ${schritt(2, '„Zum Home-Bildschirm“ wählen',
      'Es geht ein Fenster auf. Wisch ein Stück nach unten, bis du <b>Zum Home-Bildschirm</b> siehst, und tipp darauf. Oben rechts dann auf <b>Hinzufügen</b>.',
      'ios-2', 'Das Teilen-Fenster mit dem markierten Eintrag „Zum Home-Bildschirm“')}
    ${schritt(3, 'Fertig',
      'Das Symbol liegt jetzt bei deinen anderen Apps. Ein Tipp — und du bist drin.',
      'ios-3', 'Der Startbildschirm mit dem neuen Symbol')}
    </table>
  </td></tr>

  <tr><td style="font:700 20px/1.3 Arial,sans-serif;color:#20211F;padding:26px 0 4px">
    🤖 Auf Android
  </td></tr>
  <tr><td style="font:400 14px/1.5 Arial,sans-serif;color:#8A857C;padding-bottom:14px">
    Am einfachsten mit <b>Chrome</b>.
  </td></tr>
  <tr><td>
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
    ${schritt(1, 'Seite in Chrome öffnen',
      'Geh auf <b>deutschoderwas-club.de</b> und melde dich an. Tipp oben rechts auf die <b>drei Punkte</b>.',
      'android-1', 'Chrome mit der geöffneten Seite, das Menü ist rot markiert')}
    ${schritt(2, '„App installieren“ wählen',
      'Im Menü steht <b>App installieren</b> — bei manchen Handys heißt es <b>Zum Startbildschirm zufügen</b>. Beides ist dasselbe.',
      'android-2', 'Das Chrome-Menü mit dem markierten Eintrag „App installieren“')}
    ${schritt(3, 'Fertig',
      'Das Symbol liegt jetzt auf deinem Startbildschirm. Ein Tipp — und du bist drin.',
      'android-3', 'Der Startbildschirm mit dem neuen Symbol')}
    </table>
  </td></tr>

  <tr><td style="background:#FFFDF3;border:1px solid #E7DFC7;border-radius:16px;padding:13px 15px;
      font:400 14px/1.6 Arial,sans-serif;color:#54594A;margin-top:8px">
    💡 Du findest den Eintrag nicht? Dann bist du vermutlich nicht in Safari
    beziehungsweise nicht in Chrome. Öffne die Seite dort noch einmal — dann ist er da.
  </td></tr>

  <tr><td align="center" style="padding:28px 0 6px">
    <a href="${SITE}/app-installieren.html"
       style="display:inline-block;background:#DD0000;color:#ffffff;text-decoration:none;
              font:700 15px/1 Arial,sans-serif;padding:16px 26px;border-radius:40px">
      Anleitung im Browser öffnen →
    </a>
  </td></tr>

  <tr><td style="font:400 12.5px/1.6 Arial,sans-serif;color:#8A857C;padding-top:26px;text-align:center">
    Du bekommst diese Mail, weil du Mitglied bei deutschoderwas bist.<br>
    Wenn du keine Mails mehr möchtest, antworte einfach kurz — dann trage ich dich aus.<br>
    Liebe Grüße, Julia
  </td></tr>

</table>
</td></tr></table>
</body></html>`;
}

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'method_not_allowed' });
  if (!process.env.BREVO_API_KEY) return res.status(500).json({ error: 'BREVO_API_KEY fehlt' });

  const token = (req.headers.authorization || '').replace('Bearer ', '');
  if (!token) return res.status(401).json({ error: 'unauthorized' });

  const sb = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_SERVICE_ROLE_KEY);
  const { data: { user }, error: uerr } = await sb.auth.getUser(token);
  if (uerr || !user) return res.status(401).json({ error: 'unauthorized' });

  const { data: ich } = await sb.from('profiles').select('name,email,is_admin').eq('id', user.id).maybeSingle();
  if (!ich?.is_admin) return res.status(403).json({ error: 'nur_admin' });

  const nurTest = !!(req.body && req.body.test);

  let leute;
  if (nurTest) {
    leute = [{ name: ich.name, email: ich.email || user.email }];
  } else {
    const { data } = await sb.from('profiles')
      .select('name,email,email_optout').eq('status', 'aktiv');
    leute = (data || []).filter(p => p.email && !p.email_optout);
  }
  if (!leute.length) return res.status(200).json({ ok: true, verschickt: 0, grund: 'niemand uebrig' });

  const absender = { name: 'deutschoderwas club', email: process.env.BREVO_SENDER_EMAIL || 'deutschlernen@deutschoderwas.de' };
  const betreff = 'Leg dir die App auf den Startbildschirm — in 3 Schritten';

  let verschickt = 0;
  const fehler = [];
  for (let i = 0; i < leute.length; i += 50) {
    const teil = leute.slice(i, i + 50);
    /* Einzeln adressiert, damit oben "Hallo <Name>" steht und niemand
       die Adressen der anderen sieht. */
    const ergebnisse = await Promise.all(teil.map(async p => {
      const r = await fetch('https://api.brevo.com/v3/smtp/email', {
        method: 'POST',
        headers: { 'api-key': process.env.BREVO_API_KEY, 'Content-Type': 'application/json' },
        body: JSON.stringify({
          sender: absender,
          to: [{ email: p.email, name: p.name || undefined }],
          subject: betreff,
          htmlContent: mailHtml(p.name)
        })
      });
      return r.ok ? true : (fehler.push(p.email + ': ' + r.status), false);
    }));
    verschickt += ergebnisse.filter(Boolean).length;
  }

  return res.status(200).json({ ok: true, verschickt, empfaenger: leute.length, fehler: fehler.slice(0, 10) });
}

export { mailHtml };
