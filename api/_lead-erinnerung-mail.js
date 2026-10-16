// ============================================================
//  deutschoderwas club — die Erinnerung an alle, die noch warten
//
//  148 Menschen haben sich fuer den Sprechclub eingetragen und
//  sind bis heute nicht dabei. Diese Mail erzaehlt ihnen, warum
//  es den Club gibt, was drin ist und wie lange der
//  Fruehbucherpreis noch gilt.
//
//  Die Tage bis zum 31. Oktober werden beim Verschicken
//  ausgerechnet, nicht hier hineingeschrieben: eine Mail, die
//  "noch 26 Tage" sagt, waehrend es 19 sind, verliert genau das
//  Vertrauen, das sie aufbauen soll.
//
//  email_log (kind:'lead_erinnerung_okt26') sorgt dafuer, dass
//  niemand sie zweimal bekommt.
// ============================================================

const esc = (s) => String(s == null ? '' : s)
  .replace(/[<>&]/g, (c) => ({ '<': '&lt;', '>': '&gt;', '&': '&amp;' }[c]));

/* Wie viele Tage noch bis zum 31. Oktober? Gezaehlt werden Kalendertage
   in deutscher Zeit, nicht Zeitspannen: am 5. Oktober sind es 26 Tage,
   egal ob morgens oder abends gelesen wird. Mit Stunden gerechnet
   stuende in derselben Mail mal 26 und mal 27. */
export function tageBisEnde(jetzt) {
  const tag = (d) => {
    try { return Date.parse(new Intl.DateTimeFormat('en-CA', { timeZone: 'Europe/Berlin' }).format(d) + 'T00:00:00Z'); }
    catch (e) { return Date.parse(d.toISOString().slice(0, 10) + 'T00:00:00Z'); }
  };
  const heute = tag(new Date(jetzt || Date.now()));
  const ziel = Date.parse('2026-10-31T00:00:00Z');
  return Math.max(0, Math.round((ziel - heute) / 86400000));
}
export function fristSatz(jetzt) {
  const t = tageBisEnde(jetzt);
  if (t <= 0) return 'Der Frühbucherpreis ist abgelaufen';
  if (t === 1) return 'Bis zum 31. Oktober — also nur noch <strong>einen Tag</strong>';
  return 'Bis zum 31. Oktober — also noch <strong>' + t + ' Tage</strong>';
}

export function erinnerungHtml(vorname, jetzt, art) {
  const v = esc(vorname || 'du');
  /* 'community' = zahlt schon fuer die Lernplattform, ist im Sprechclub
     aber nicht dabei. Dieser Person "danke, dass du dich eingetragen
     hast" zu schreiben, waere peinlich — sie ist laengst Kundin.
     Deshalb eine eigene erste Zeile und ein eigener dritter Kasten. */
  const istCommunity = art === 'community';
  const tage = tageBisEnde(jetzt);
  const frist = tage <= 0 ? 'Der Fruehbucherpreis ist abgelaufen'
    : (tage === 1 ? 'Nur noch <b>ein Tag</b>' : 'Noch <b>' + tage + ' Tage</b>');

  /* Aufbau nach Julias Vorgabe vom 15.10.2026: "Kein blosser Text,
     Abschnitte, Klarheit, bestimmte Sachen einrahmen in Boxen, kuerzer,
     darauf aufmerksam machen, dass der Sprechclub am 01.11 startet und
     der grosse Rabatt bis zum 31.10 gilt."
     Also: zwei Saetze Begruessung, drei Kaesten, ein Knopf, ein Satz zum
     Schluss. Die beiden Daten stehen in eigenen Kaesten, damit sie auch
     beim Durchscrollen haengen bleiben. */
  return `<!DOCTYPE html><html lang="de"><head><meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0"><title>Noch ${tage} Tage</title></head>
<body style="margin:0;padding:0;background:#FFF8E0;font-family:'Inter','Segoe UI',system-ui,sans-serif;color:#1A1A1A">
<div style="display:none;max-height:0;overflow:hidden;opacity:0">Start am 1. November &middot; Rabatt nur bis 31. Oktober</div>
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#FFF8E0;padding:26px 12px"><tr><td align="center">
<table role="presentation" width="560" cellpadding="0" cellspacing="0" style="max-width:560px;width:100%;background:#FFFCF5;border:1px solid #F0E5D8;border-radius:20px;overflow:hidden">

  <tr><td style="padding:24px 30px 0">
    <span style="font-family:'Space Grotesk','Segoe UI',sans-serif;font-weight:700;font-size:20px">deutsch<span style="color:#14B8A6">oderwas</span></span>
  </td></tr>

  <tr><td style="padding:16px 30px 0">
    <h1 style="font-family:'Space Grotesk','Segoe UI',sans-serif;font-weight:700;font-size:26px;line-height:1.25;margin:0 0 12px">
      ${frist}, ${v}. Dann wird <span style="color:#DD0000">gesprochen</span>.
    </h1>
    <p style="font-size:16px;line-height:1.65;margin:0 0 18px">${istCommunity
      ? 'Du bist in der Community dabei &ndash; im Sprechclub noch nicht. Mit einem Klick wechselst du auf Premium, und zwei Daten sind daf&uuml;r wichtig:'
      : 'Du hast dich f&uuml;r den Sprechclub eingetragen &ndash; danke daf&uuml;r. Zwei Daten sind jetzt wichtig f&uuml;r dich:'}
    </p>
  </td></tr>

  <tr><td style="padding:0 30px">
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#A7F3D0;border-radius:14px;margin-bottom:12px">
      <tr><td style="padding:16px 18px">
        <div style="font-family:'Space Grotesk','Segoe UI',sans-serif;font-weight:700;font-size:17px;color:#06403A;margin-bottom:4px">&#128197; Der Unterricht startet am 1. November</div>
        <div style="font-size:15px;line-height:1.55;color:#06403A">Danach t&auml;glich von Montag bis Sonntag. Du suchst dir aus, wann du kommst.</div>
      </td></tr>
    </table>

    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#FFF3D6;border:2px solid #FFCE00;border-radius:14px;margin-bottom:12px">
      <tr><td style="padding:16px 18px">
        <div style="font-family:'Space Grotesk','Segoe UI',sans-serif;font-weight:700;font-size:17px;margin-bottom:4px">&#9203; Der gro&szlig;e Rabatt gilt nur bis zum <span style="color:#DD0000">31. Oktober</span></div>
        <div style="font-size:15px;line-height:1.55">
          <b>39&nbsp;&euro; statt 99&nbsp;&euro;</b> im Monat (Jahresabo) oder 49&nbsp;&euro; monatlich.
          Wer sp&auml;ter kommt, zahlt den vollen Preis. Dein Preis bleibt dir, solange du dabei bist.
        </div>
      </td></tr>
    </table>

    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#FFFFFF;border:1px solid #F0E5D8;border-radius:14px;margin-bottom:18px">
      <tr><td style="padding:14px 18px">
        <div style="font-weight:700;font-size:15.5px;margin-bottom:3px">${istCommunity ? '&#128260; Was sich f&uuml;r dich &auml;ndert' : '&#9989; Die Lernplattform ist sofort offen'}</div>
        <div style="font-size:14.5px;line-height:1.55;color:#6B7280">${istCommunity
          ? 'Premium ist alles, was du aus der Community kennst &ndash; plus den Sprechclub. Deine Kurse, &Uuml;bungen und Amanda bleiben nat&uuml;rlich.'
          : 'Kurse von A1 bis C1, &Uuml;bungen, regelm&auml;&szlig;iger Podcast und Amanda, mit der du sprechen kannst, wann du willst.'}</div>
      </td></tr>
    </table>
  </td></tr>

  <tr><td align="center" style="padding:0 30px 20px">
    <a href="https://www.deutschoderwas-club.de/#preise" style="display:inline-block;background:#2DD4BF;color:#06403A;font-weight:700;font-size:16.5px;text-decoration:none;padding:15px 34px;border-radius:999px">${istCommunity ? 'Auf Premium wechseln' : 'Platz sichern'} &ndash; bis 31. Oktober</a>
  </td></tr>

  <tr><td style="padding:0 30px 24px">
    <p style="font-size:15.5px;line-height:1.65;margin:0">
      Fragen? Antworte einfach auf diese Mail, ich lese sie selbst.<br>
      <b>Julia</b> &#128156;
    </p>
  </td></tr>

  <tr><td style="background:#1A1A1A;padding:18px 30px">
    <p style="font-size:11.5px;line-height:1.6;color:#b9b9b9;margin:0">
      deutschoderwas &middot; Julia Karackov &middot; Wiesenstra&szlig;e 38, 58119 Hagen, Deutschland &middot; deutschoderwas@gmail.com &middot; USt-ID: DE676677898<br>
      Du bekommst diese Mail, weil du dich f&uuml;r den Sprechclub eingetragen hast. Keine weiteren Mails? Antworte kurz mit &bdquo;Stopp&ldquo;.
    </p>
  </td></tr>

</table></td></tr></table></body></html>`;
}
