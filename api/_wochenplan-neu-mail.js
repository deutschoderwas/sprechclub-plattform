// ============================================================
//  _wochenplan-neu-mail.js — "Es gibt jetzt mehr Unterricht"
//
//  Julia, 1.11.2026: "Bitte schicke den Premium-Mitgliedern die
//  Aktualisierung, dass wir jetzt mehr Unterricht haben, und schick
//  den neuen Wochenplan."
//
//  Der Plan im Mailtext wird NICHT von Hand geschrieben, sondern aus
//  der Datenbank gerechnet und von api/wochenplan-neu.js hereingereicht.
//  Auf der Sprechclub-Seite stand der Plan einmal von Hand abgeschrieben
//  da und war falsch (17:30, die es nie gab). In einer Mail an
//  hundert Leute faellt so etwas niemandem mehr auf, bis jemand
//  umsonst wartet.
//
//  Ton und Form wie in der Buchungsanleitung: Flaggenkopf,
//  "deutschoderwas club", ganze Saetze, Wir-Form, und am Ende
//  "Wir lesen alle Nachrichten und beantworten sie. Julia & Team".
// ============================================================

const SITE = 'https://www.deutschoderwas-club.de';
const FF = "-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif";

const E = (s) => String(s == null ? '' : s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
function vornameVon(name, email) {
  const n = String(name || '').trim();
  if (n) return n.split(/\s+/)[0];
  return String(email || '').split('@')[0] || 'du';
}

export function wochenplanBetreff() {
  return 'Mehr Stunden im Sprechclub — dein neuer Wochenplan';
}

/**
 * @param plan [{ tag:'Montag', fokus:'Freie Sprechstunde', zeiten:['09:00','10:00','19:00','20:00'] }, ...]
 */
export function wochenplanHtml(name, email, plan) {
  const v = E(vornameVon(name, email));

  const zeilen = (plan || []).map((t) => `
    <tr>
      <td valign="top" style="padding:11px 10px 11px 0;border-bottom:1px solid #F0E5D8;font-family:${FF};
                 font-size:15.5px;font-weight:800;color:#1A1A1A;white-space:nowrap">${E(t.tag)}</td>
      <td valign="top" style="padding:11px 10px;border-bottom:1px solid #F0E5D8;font-family:${FF};
                 font-size:13.5px;color:#6B7280">${E(t.fokus)}</td>
      <td valign="top" align="right" style="padding:11px 0 11px 10px;border-bottom:1px solid #F0E5D8;font-family:${FF};
                 font-size:15.5px;font-weight:700;color:#0F766E;white-space:nowrap">${t.zeiten.map(E).join(' &middot; ')}</td>
    </tr>`).join('');

  return `<!DOCTYPE html><html lang="de"><head><meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1"><meta name="color-scheme" content="light"></head>
<body style="margin:0;padding:0;background:#FFF8E0">
<div style="display:none;max-height:0;overflow:hidden;opacity:0">Neue Zeiten: morgens um 10, abends um 18 und um 20 Uhr.</div>
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#FFF8E0;padding:26px 14px"><tr><td align="center">
<table role="presentation" width="580" cellpadding="0" cellspacing="0" style="max-width:580px;width:100%;background:#FFFCF5;border:1px solid #F0E5D8;border-radius:20px;overflow:hidden">

  <tr><td style="height:6px;background:#1A1A1A;line-height:6px;font-size:0">&nbsp;</td></tr>
  <tr><td style="height:6px;background:#DD0000;line-height:6px;font-size:0">&nbsp;</td></tr>
  <tr><td style="height:6px;background:#FFCE00;line-height:6px;font-size:0">&nbsp;</td></tr>

  <tr><td align="center" style="padding:22px 30px 2px">
    <div style="font-family:${FF};font-weight:800;font-size:16px;letter-spacing:.04em;color:#1A1A1A">deutschoderwas <span style="color:#DD0000">club</span></div>
  </td></tr>

  <tr><td style="padding:14px 30px 0">
    <h1 style="font-family:${FF};font-weight:800;font-size:25px;line-height:1.25;margin:0 0 12px;color:#1A1A1A">
      Es gibt jetzt mehr Stunden
    </h1>
    <p style="font-family:${FF};font-size:16px;line-height:1.65;margin:0 0 14px;color:#1A1A1A">
      Hallo ${v}, die Abendstunden waren in den ersten Tagen so schnell voll, dass einige von euch
      keinen Platz mehr bekommen haben. Deshalb haben wir den Plan erweitert: Es gibt jetzt
      <b>morgens um 10 Uhr</b> zus&auml;tzliche Stunden und abends welche <b>um 18 und um 20 Uhr</b>.
      Das Thema ist an einem Tag immer dasselbe &mdash; du suchst dir nur die Uhrzeit aus, die dir passt.
    </p>
  </td></tr>

  <tr><td style="padding:6px 30px 0">
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0">${zeilen}</table>
  </td></tr>

  <tr><td align="center" style="padding:22px 30px 4px">
    <a href="${SITE}/schuelerbereich#kalender" style="display:inline-block;background:#2DD4BF;color:#06403A;
       font-family:${FF};font-weight:800;font-size:16.5px;text-decoration:none;padding:15px 32px;border-radius:999px">
      Stunde aussuchen
    </a>
  </td></tr>

  <tr><td style="padding:18px 30px 0">
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#F2FBFA;border:1px solid #CFEFEA;border-radius:16px">
      <tr><td style="padding:16px 18px;font-family:${FF}">
        <div style="font-weight:800;font-size:15.5px;color:#0F766E;margin-bottom:6px">Zwei Dinge, die du wissen solltest</div>
        <div style="font-size:15px;line-height:1.65;color:#3f4650">
          In jeder Stunde sind <b>20 Pl&auml;tze</b>. Ist eine Stunde voll, steht im Wochenplan rot
          &bdquo;ausgebucht&ldquo; &mdash; dann nimm einfach eine andere Uhrzeit am selben Tag, das Thema ist dasselbe.
          Und es w&auml;re toll, wenn du eine gebuchte Stunde stornierst, falls du doch nicht kommen kannst.
          Dann wird der Platz f&uuml;r jemand anderen frei.
        </div>
      </td></tr>
    </table>
  </td></tr>

  <tr><td style="padding:18px 30px 6px;font-family:${FF};font-size:15.5px;line-height:1.65;color:#1A1A1A">
    Wenn dir eine Uhrzeit fehlt, schreib uns einfach &mdash; wir schauen, ob wir sie einrichten k&ouml;nnen.
    Wir lesen alle Nachrichten und beantworten sie.
  </td></tr>

  <tr><td style="padding:4px 30px 24px;font-family:${FF};font-size:15.5px;line-height:1.65;color:#1A1A1A">
    Bis bald im Club,<br><b>Julia &amp; Team</b> &#128156;
  </td></tr>

  <tr><td style="background:#1A1A1A;padding:16px 30px;text-align:center">
    <p style="font-family:${FF};font-size:11.5px;line-height:1.6;color:#b9b9b9;margin:0">
      deutschoderwas &middot; Julia Karackov &middot; Wiesenstra&szlig;e 38, 58119 Hagen, Deutschland
      &middot; deutschoderwas@gmail.com &middot; USt-ID: DE676677898
    </p>
  </td></tr>

</table></td></tr></table></body></html>`;
}
