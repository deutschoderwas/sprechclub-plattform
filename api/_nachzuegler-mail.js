// ============================================================
//  "Deine Zahlung ist angekommen" — die Bestaetigung, die nie kam
//
//  Vom 16. bis zum 19.10.2026 war /api/stripe-webhook tot (eine Zeile
//  Muell am Dateiende). Wer in diesen drei Tagen gekauft hat, bekam
//  keine Kaufbestaetigung, keine Mitgliedschaft und keinen Zugang —
//  bis es von Hand nachgetragen wurde.
//
//  Julia, 19.10.2026: "dann kannst du denen die neue Mail schicken,
//  dass wir einen technischen Fehler hatten."
//
//  Der Ton: einmal gerade sagen, was war, und dann zur Sache. Kein
//  langes Bedauern — die Leute wollen wissen, dass ihr Platz da ist
//  und wann abgebucht wird. Genau das steht drin, mit Datum.
// ============================================================

const esc = (s) => String(s == null ? '' : s)
  .replace(/[<>&]/g, (c) => ({ '<': '&lt;', '>': '&gt;', '&': '&amp;' }[c]));

const SEITE = 'https://www.deutschoderwas-club.de';

export function nachzueglerDatum(iso) {
  try {
    if (!iso) return '';
    return new Date(iso).toLocaleDateString('de-DE', {
      timeZone: 'Europe/Berlin', day: 'numeric', month: 'long', year: 'numeric',
    });
  } catch (e) { return ''; }
}

export function nachzueglerBetreff() {
  return 'Deine Zahlung ist angekommen — und eine Entschuldigung 💛';
}

export function nachzueglerHtml(vorname, tier, gekauftAm, naechsteZahlung) {
  const v = esc((vorname || '').trim().split(' ')[0] || 'du');
  const premium = tier !== 'community';
  const name = premium ? 'Premium' : 'Community';
  const gekauft = esc(gekauftAm || '');
  const naechste = esc(naechsteZahlung || '');

  const was = premium
    ? `<li style="margin-bottom:7px"><b>Der Sprechclub startet am 1. November.</b> Dann sprichst du jeden Tag LIVE mit einem Lehrer, so oft du willst.</li>
       <li style="margin-bottom:7px"><b>Vorbuchen geht schon jetzt</b> — such dir deine Stunden ab dem 1. November aus.</li>
       <li style="margin-bottom:7px">Die ganze Lernplattform ist ab sofort offen: Kurse von A1 bis C1, Übungen, Podcast und Amanda.</li>`
    : `<li style="margin-bottom:7px">Die ganze Lernplattform ist ab sofort offen: Kursbibliothek von A1 bis C2, Vokabeltrainer, Podcast, die Community und Amanda.</li>`;

  return `<!DOCTYPE html><html lang="de"><head><meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1.0">
<title>Deine Zahlung ist angekommen</title></head>
<body style="margin:0;padding:0;background:#FFF8E0">
<table width="100%" cellpadding="0" cellspacing="0" role="presentation" style="background:#FFF8E0">
<tr><td align="center" style="padding:28px 14px">
  <table width="100%" cellpadding="0" cellspacing="0" role="presentation"
         style="max-width:560px;background:#FFFCF5;border:1px solid #F0E5D8;border-radius:20px">

    <tr><td style="padding:26px 28px 4px;font:700 18px/1 'Space Grotesk',Arial,sans-serif;color:#1A1A1A">
      deutsch<span style="color:#14B8A6">oderwas</span></td></tr>

    <tr><td style="padding:14px 28px 0">
      <div style="font:600 26px/1.25 'Space Grotesk',Arial,sans-serif;color:#1A1A1A">
        ${v}, dein Platz ist sicher.</div></td></tr>

    <tr><td style="padding:14px 28px 4px;font:400 16px/1.7 Inter,Arial,sans-serif;color:#1A1A1A">
      Deine Zahlung ${gekauft ? 'vom <strong>' + gekauft + '</strong> ' : ''}ist angekommen, und deine
      <strong>${esc(name)}-Mitgliedschaft</strong> ist aktiv.
    </td></tr>

    <tr><td style="padding:10px 28px 6px">
      <table width="100%" cellpadding="0" cellspacing="0" role="presentation"
             style="background:#FFF1C2;border:1px solid #F0DFA0;border-radius:16px">
        <tr><td style="padding:18px 20px;font:400 15px/1.65 Inter,Arial,sans-serif;color:#1A1A1A">
          <b>Und eine Entschuldigung dazu:</b> Bei uns gab es einen technischen Fehler, und deshalb
          hast du nach dem Kauf keine Bestätigung bekommen. Dein Geld war die ganze Zeit angekommen —
          nur unsere Nachricht an dich nicht. Das tut mir leid, und es ist behoben.
        </td></tr>
      </table>
    </td></tr>

    <tr><td style="padding:16px 28px 4px;font:400 16px/1.7 Inter,Arial,sans-serif;color:#1A1A1A">
      <b>Das hast du jetzt:</b>
      <ul style="margin:10px 0 0;padding-left:20px">${was}</ul>
    </td></tr>

    ${naechste ? `
    <tr><td style="padding:16px 28px 6px">
      <table width="100%" cellpadding="0" cellspacing="0" role="presentation"
             style="background:#FFFFFF;border:1px solid #F0E5D8;border-radius:14px">
        <tr><td style="padding:14px 18px;font:400 15px/1.6 Inter,Arial,sans-serif;color:#1A1A1A">
          <b>Die nächste Abbuchung ist am ${naechste}.</b><br>
          <span style="color:#6B7280">Vorher wird dir nichts berechnet.</span>
        </td></tr>
      </table>
    </td></tr>` : ''}

    <tr><td align="center" style="padding:22px 28px 6px">
      <a href="${SEITE}/schuelerbereich"
         style="display:inline-block;background:#2DD4BF;color:#06403A;text-decoration:none;
                font:700 16px/1 Inter,Arial,sans-serif;padding:16px 30px;border-radius:999px">
        Zu deinem Bereich →</a>
    </td></tr>

    <tr><td style="padding:22px 28px 8px;font:400 15px/1.7 Inter,Arial,sans-serif;color:#1A1A1A">
      Wenn etwas nicht stimmt oder du eine Frage hast: schreib mir einfach zurück.
      Ich lese jede Mail selbst.
    </td></tr>

    <tr><td style="padding:4px 28px 26px;font:400 15px/1.7 Inter,Arial,sans-serif;color:#1A1A1A">
      Bis bald 💛<br>Julia</td></tr>

    <tr><td style="padding:0 28px 24px;border-top:1px solid #F0E5D8">
      <div style="padding-top:14px;font:400 12px/1.6 Inter,Arial,sans-serif;color:#6B7280">
        deutschoderwas · Julia Karackov · Wiesenstraße 38, 58119 Hagen, Deutschland<br>
        deutschoderwas@gmail.com · USt-ID: DE676677898
      </div></td></tr>
  </table>
</td></tr></table></body></html>`;
}
