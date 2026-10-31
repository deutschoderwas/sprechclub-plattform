// ============================================================
//  _anleitung-buchen-mail.js — "So buchst du deine Stunden"
//
//  Julia, 31.10.2026: "Jeder, der Premium hat, muss jetzt eine E-Mail
//  bekommen, und zwar wie man den Unterricht bucht und wo man den
//  gebuchten Unterricht findet (eine kleine Anleitung)."
//
//  Geschrieben in ganzen Saetzen — Julia, 29.10.2026: "Ganze Sätze
//  bitte, denn die Leute lernen doch Deutsch, also müssen sie auch
//  ganze Sätze gestellt bekommen." Keine Stichworte, keine Abkuerzungen.
//
//  Die Namen in der Anleitung sind die, die wirklich in der Oberflaeche
//  stehen: "Wochenplan" zum Buchen, "Meine Stunden" fuer das Gebuchte,
//  "Klassenraum" zum Beitreten. Nachgesehen in konto.html, damit die
//  Anleitung niemanden an eine Stelle schickt, die es nicht gibt.
// ============================================================

const SITE = 'https://www.deutschoderwas-club.de';
const FF = "-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif";

function vornameVon(name, email) {
  const n = String(name || '').trim();
  if (n) return n.split(/\s+/)[0];
  return String(email || '').split('@')[0] || 'du';
}
const E = (s) => String(s == null ? '' : s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

export function anleitungBetreff() {
  return 'So buchst du deine Stunden im Sprechclub';
}

/* Die Bilder liegen im Projekt unter /anleitung/ und werden von der
   Seite ausgeliefert. Als Datei angehaengt oder als data-URL
   eingebettet wuerden sie in den meisten Postfaechern gar nicht
   erscheinen — Gmail wirft eingebettete Bilddaten heraus. */
function bild(datei, alt, breite) {
  const b = breite || 520;
  return `<tr><td style="padding:2px 0 16px">
    <img src="${SITE}/anleitung/${datei}" alt="${E(alt)}" width="${b}"
         style="display:block;width:100%;max-width:${b}px;height:auto;border:1px solid #F0E5D8;border-radius:12px">
  </td></tr>`;
}

function schritt(nummer, titel, text) {
  return `<tr><td style="padding:0 0 18px">
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0"><tr>
      <td width="34" valign="top" style="padding-top:2px">
        <div style="width:28px;height:28px;border-radius:999px;background:#2DD4BF;color:#06403A;
                    font-family:${FF};font-weight:800;font-size:15px;line-height:28px;text-align:center">${nummer}</div>
      </td>
      <td valign="top" style="font-family:${FF};color:#1A1A1A">
        <div style="font-size:16.5px;font-weight:800;margin:2px 0 5px">${titel}</div>
        <div style="font-size:15.5px;line-height:1.65;color:#3f4650">${text}</div>
      </td>
    </tr></table>
  </td></tr>`;
}

export function anleitungHtml(name, email) {
  const v = E(vornameVon(name, email));
  return `<!DOCTYPE html><html lang="de"><head><meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1"><meta name="color-scheme" content="light"></head>
<body style="margin:0;padding:0;background:#FFF8E0">
<div style="display:none;max-height:0;overflow:hidden;opacity:0">Wochenplan öffnen, Stunde anklicken, buchen. Mehr ist es nicht.</div>
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#FFF8E0;padding:26px 14px"><tr><td align="center">
<table role="presentation" width="580" cellpadding="0" cellspacing="0" style="max-width:580px;width:100%;background:#FFFCF5;border:1px solid #F0E5D8;border-radius:20px;overflow:hidden">

  <!-- Kopf wie in den uebrigen Clubmails: die drei Streifen in
       Schwarz, Rot und Gold, darunter der Name mit dem roten "club".
       Julia, 31.10.2026: "oben nicht nur deutschoderwas sondern
       deutschoderwas club mit Deutschlandfarben oben, wie das Design
       der Emails." -->
  <tr><td style="height:6px;background:#1A1A1A;line-height:6px;font-size:0">&nbsp;</td></tr>
  <tr><td style="height:6px;background:#DD0000;line-height:6px;font-size:0">&nbsp;</td></tr>
  <tr><td style="height:6px;background:#FFCE00;line-height:6px;font-size:0">&nbsp;</td></tr>

  <tr><td align="center" style="padding:22px 30px 2px">
    <div style="font-family:${FF};font-weight:800;font-size:16px;letter-spacing:.04em;color:#1A1A1A">deutschoderwas <span style="color:#DD0000">club</span></div>
  </td></tr>

  <tr><td style="padding:14px 30px 0">
    <h1 style="font-family:${FF};font-weight:800;font-size:25px;line-height:1.25;margin:0 0 12px;color:#1A1A1A">
      So buchst du deine Stunden
    </h1>
    <p style="font-family:${FF};font-size:16px;line-height:1.65;margin:0 0 4px;color:#1A1A1A">
      Hallo ${v}, ab Sonntag, dem 1. November, l&auml;uft der Sprechclub. Du hast Premium, also kannst du so viele
      Stunden besuchen, wie du m&ouml;chtest &mdash; es wird dir nichts abgezogen, du suchst dir
      einfach aus, wann du sprechen willst. Hier steht in vier Schritten, wie es geht.
    </p>
  </td></tr>

  <tr><td style="padding:22px 30px 0">
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
      ${schritt(1, 'Melde dich an und &ouml;ffne den Wochenplan',
        'Du gehst auf <a href="' + SITE + '/schuelerbereich" style="color:#0F766E;font-weight:700;text-decoration:none">deutschoderwas-club.de</a> '
        + 'und meldest dich an. Links im Men&uuml; klappst du <b>Sprechclub</b> auf und gehst auf <b>Wochenplan</b>. Dort stehen alle Stunden '
        + 'der kommenden Tage, jeden Tag von Montag bis Sonntag.')}

      ${bild('buchen-1-menue.png', 'Das Menue: Sprechclub mit Wochenplan, Meine Stunden und Materialien', 300)}

      ${schritt(2, 'Such dir eine Stunde aus und tippe auf &bdquo;Buchen&ldquo;',
        'Bei jeder Stunde siehst du den Tag, die Uhrzeit und das Thema. Wenn dir eine gef&auml;llt, '
        + 'tippst du auf <b>Buchen</b>. Mehr ist es nicht. Du kannst dir ruhig mehrere Stunden in der '
        + 'Woche nehmen &mdash; sprich so oft du magst.')}

      ${bild('buchen-2-stunden.png', 'Drei Stunden im Wochenplan, jede mit einem Knopf Buchen')}

      ${schritt(3, 'Deine gebuchten Stunden stehen unter &bdquo;Meine Stunden&ldquo;',
        'Alles, was du gebucht hast, findest du im Men&uuml; unter <b>Meine Stunden</b>. Dort siehst du '
        + 'auf einen Blick, wann du als N&auml;chstes dran bist. Wenn es doch nicht passt, kannst du bis '
        + '<b>zwei Stunden vor Beginn</b> wieder stornieren &mdash; einfach, damit der Platz frei wird.')}

      ${schritt(4, 'Zur Stunde gehst du in den Klassenraum',
        'Kurz vor der Stunde erscheint bei dem Termin der Knopf <b>Klassenraum</b>. Du tippst darauf '
        + 'und bist drin, direkt im Browser. Du brauchst nichts zu installieren.')}
    </table>
  </td></tr>

  <tr><td style="padding:4px 30px 0">
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#F2FBFA;border:1px solid #CFEFEA;border-radius:16px">
      <tr><td style="padding:16px 18px;font-family:${FF}">
        <div style="font-weight:800;font-size:15.5px;color:#0F766E;margin-bottom:6px">Du musst an nichts denken</div>
        <div style="font-size:15px;line-height:1.65;color:#3f4650">
          Eine Stunde vor dem Unterricht bekommst du von uns eine E-Mail mit dem Link, der dich direkt
          in deinen Klassenraum bringt. Und jeden Sonntagabend schicken wir dir eine &Uuml;bersicht,
          welche Stunden du f&uuml;r die neue Woche gebucht hast.
        </div>
      </td></tr>
    </table>
  </td></tr>

  <tr><td align="center" style="padding:20px 30px 4px">
    <a href="${SITE}/schuelerbereich" style="display:inline-block;background:#2DD4BF;color:#06403A;
       font-family:${FF};font-weight:800;font-size:16.5px;text-decoration:none;padding:15px 32px;border-radius:999px">
      Jetzt erste Stunde buchen
    </a>
  </td></tr>

  <tr><td style="padding:18px 30px 6px;font-family:${FF};font-size:15.5px;line-height:1.65;color:#1A1A1A">
    Wenn etwas nicht klappt oder du eine Frage hast, antworte einfach auf diese E-Mail.
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
