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

export function erinnerungHtml(vorname, jetzt) {
  const v = esc(vorname || 'du');
  const punkt = (titel, text) =>
    `<tr><td style="padding:0 0 14px"><table role="presentation" cellpadding="0" cellspacing="0"><tr>
      <td valign="top" style="padding-right:10px;font-size:16px;line-height:1.5;color:#35AFD0">&#9679;</td>
      <td style="font-size:16px;line-height:1.6"><strong>${titel}</strong> ${text}</td>
    </tr></table></td></tr>`;

  return `<!DOCTYPE html><html lang="de"><head><meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0"><title>Noch ist Zeit</title></head>
<body style="margin:0;padding:0;background:#FFF8E0;font-family:'Inter','Segoe UI',system-ui,sans-serif;color:#1A1A1A">
<div style="display:none;max-height:0;overflow:hidden;opacity:0">Zwischen verstehen und sagen liegt eine L&uuml;cke. Die schlie&szlig;t man nur durch Reden.</div>
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#FFF8E0;padding:24px 12px"><tr><td align="center">
<table role="presentation" width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;background:#FFFCF5;border:1px solid #F0E5D8;border-radius:20px;overflow:hidden">

  <tr><td style="padding:24px 32px 8px">
    <span style="font-family:'Space Grotesk','Segoe UI',sans-serif;font-weight:700;font-size:22px;color:#1A1A1A">deutsch<span style="color:#35AFD0">oderwas</span></span>
    <span style="display:block;font-size:12px;color:#6B7280;margin-top:2px">Deutsch lernen mit Spa&szlig; &amp; Leichtigkeit</span>
  </td></tr>
  <tr><td style="padding:0 32px"><div style="height:3px;background:linear-gradient(135deg,#7ED8EA,#35AFD0);border-radius:999px"></div></td></tr>

  <tr><td style="padding:24px 32px 4px">
    <h1 style="font-family:'Space Grotesk','Segoe UI',sans-serif;font-weight:700;font-size:27px;line-height:1.25;margin:0 0 18px;color:#1A1A1A">
      Zwischen <span style="color:#DD0000">verstehen</span> und <span style="color:#DD0000">sagen</span>
    </h1>
    <p style="font-size:16px;line-height:1.65;margin:0 0 16px">Hallo ${v},</p>
    <p style="font-size:16px;line-height:1.65;margin:0 0 16px">du hast dich vor einer Weile f&uuml;r den Sprechclub eingetragen &mdash; dar&uuml;ber habe ich mich sehr gefreut. Dabei bist du bisher noch nicht, und ich dachte, ich melde mich noch einmal bei dir.</p>
    <p style="font-size:16px;line-height:1.65;margin:0 0 16px">Vielleicht kennst du das: Du verstehst fast alles. Du liest, du schaust Serien auf Deutsch, du hast Kurse gemacht &mdash; einen nach dem anderen. Und dann stehst du beim Arzt, beim Amt oder in der Kaffeek&uuml;che, jemand stellt dir eine einfache Frage, und im Kopf ist es pl&ouml;tzlich still.</p>
    <p style="font-size:16px;line-height:1.65;margin:0 0 20px">Nicht, weil du zu wenig kannst. Sondern weil zwischen <em>verstehen</em> und <em>sagen</em> eine L&uuml;cke liegt, die sich nur durch Reden schlie&szlig;t.</p>
  </td></tr>

  <tr><td style="padding:0 32px 4px">
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#FFFFFF;border:1px solid #F0E5D8;border-radius:16px">
      <tr><td style="padding:20px 22px 8px">
        <p style="font-size:13px;font-weight:700;letter-spacing:.06em;text-transform:uppercase;color:#0F766E;margin:0 0 14px">Genau daf&uuml;r gibt es den Club</p>
        <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
          ${punkt('LIVE-Sprechrunden in kleinen Gruppen', '&mdash; von Montag bis Sonntag, du suchst dir aus, wann. Themen aus dem Alltag, vorbereiten musst du nichts.')}
          ${punkt('Die Lernplattform von A1 bis C1', '&mdash; Lektionen mit Dialogen, Wortschatz und &Uuml;bungen, rund um die Uhr offen.')}
          ${punkt('Amanda, deine KI-Tutorin', '&mdash; sie h&ouml;rt zu, antwortet und korrigiert. Nachts um drei genauso geduldig wie am Nachmittag.')}
          ${punkt('Menschen mit demselben Ziel', '&mdash; eine Community, in der niemand ausgelacht wird, wenn ein Satz schiefgeht.')}
        </table>
      </td></tr>
    </table>
  </td></tr>

  <tr><td style="padding:20px 32px 0">
    <p style="font-size:16px;line-height:1.65;margin:0 0 16px">Der LIVE-Unterricht startet am <strong>1. November</strong>. Die Lernplattform ist ab deiner Anmeldung sofort f&uuml;r dich offen.</p>
  </td></tr>

  <tr><td style="padding:4px 32px 4px">
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#FFFFFF;border:2px solid #DD0000;border-radius:16px">
      <tr><td style="padding:20px 22px" align="center">
        <span style="display:inline-block;background:#DD0000;color:#FFFFFF;font-weight:700;font-size:13px;border-radius:999px;padding:6px 14px;margin-bottom:12px">${fristSatz(jetzt)}</span>
        <p style="font-size:17px;line-height:1.6;margin:8px 0 4px;color:#1A1A1A">
          <strong>39 &euro; im Monat</strong> im Jahresabo <span style="color:#6B7280;text-decoration:line-through">99 &euro;</span><br>
          <span style="font-size:15px;color:#5A6B72">oder 49 &euro; im Monat, monatlich k&uuml;ndbar</span>
        </p>
        <p style="font-size:14px;line-height:1.55;margin:10px 0 16px;color:#5A6B72">Der Preis bleibt dir erhalten, auch wenn der Club sp&auml;ter teurer wird.</p>
        <a href="https://www.deutschoderwas-club.de/preise" style="display:inline-block;background:linear-gradient(135deg,#2DD4BF,#14B8A6);color:#06403A;font-weight:700;font-size:16px;text-decoration:none;border-radius:999px;padding:14px 32px">Meinen Platz sichern</a>
      </td></tr>
    </table>
  </td></tr>

  <tr><td style="padding:22px 32px 6px">
    <p style="font-size:16px;line-height:1.65;margin:0 0 6px">Ich w&uuml;rde mich freuen, dich im Club zu sehen.</p>
    <p style="font-size:16px;line-height:1.65;margin:0">Herzliche Gr&uuml;&szlig;e<br><strong>Julia</strong></p>
  </td></tr>

  <tr><td style="padding:18px 32px 28px">
    <div style="height:1px;background:#F0E5D8;margin-bottom:14px"></div>
    <p style="font-size:12.5px;line-height:1.6;color:#6B7280;margin:0">
      Du bekommst diese Mail, weil du dich auf deutschoderwas f&uuml;r den Sprechclub eingetragen hast.
      Kein Interesse mehr? Antworte einfach mit &bdquo;Stopp&ldquo;, dann h&ouml;rst du nichts mehr von mir.
    </p>
    <p style="font-size:12.5px;line-height:1.6;color:#6B7280;margin:10px 0 0">
      deutschoderwas &middot; Julia Karackov &middot; Wiesenstra&szlig;e 38, 58119 Hagen, Deutschland &middot;
      <a href="mailto:deutschoderwas@gmail.com" style="color:#0F766E">deutschoderwas@gmail.com</a> &middot; USt-ID: DE676677898
    </p>
  </td></tr>

</table></td></tr></table></body></html>`;
}
