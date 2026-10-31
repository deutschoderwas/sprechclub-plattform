// ============================================================
//  deutschoderwas club — die Willkommensmail für neue Leads
//
//  Wer sich einträgt, soll nicht warten, bis jemand Zeit hat.
//  Diese Mail geht sofort raus: die Türen sind offen, der
//  Frühbucherpreis läuft bis zum 31. Oktober, hier ist der Link.
//
//  Benutzt wird sie an zwei Stellen:
//    api/waitlist.js          — sofort beim Eintragen
//    api/lead-willkommen.js   — als Netz, alle zehn Minuten
//
//  email_log (kind:'lead_willkommen', ref:<lead-id oder E-Mail>)
//  sorgt dafür, dass niemand sie zweimal bekommt.
// ============================================================

const esc = (s) => String(s == null ? '' : s)
  .replace(/[<>&]/g, (c) => ({ '<': '&lt;', '>': '&gt;', '&': '&amp;' }[c]));

/* Der Fruehbucherpreis laeuft bis zum 31. Oktober 2026. Danach darf
   in dieser Mail kein Rabatt mehr stehen — sie geht automatisch an
   jeden neuen Lead, und eine Mail, die einen abgelaufenen Rabatt
   verspricht, ist ein gebrochenes Versprechen. Deshalb entscheidet
   das Datum, nicht ein Mensch. */
export const RABATT_ENDE = Date.parse('2026-11-01T00:00:00+01:00');
export const rabattLaeuft = (jetzt = Date.now()) => jetzt < RABATT_ENDE;

/* Ab dem 1. November sind die Tueren zu.

   Julia, 31.10.2026: "Am 31.10 um Mitternacht schliesse ich die
   Tueren fuer den Sprechclub ... die Willkommensmail muss dann so
   lauten, dass sich bald die Tueren fuer den Sprechclub wieder
   oeffnen, diesmal mit NOCH MEHR Live Unterricht und noch mehr
   Flexibilitaet. Solange kannst du in Ruhe die Lernplattform nutzen
   (Community Mitgliedschaft) und dann einfach upgraden, wenn ich die
   Tueren wieder oeffne."

   Ohne diese Weiche haette ab morgen jeder neue Eintrag eine Mail
   bekommen, die einen Platz anbietet, den es gerade nicht gibt —
   mit Preis und Kaufknopf. Das Datum entscheidet, nicht ein Mensch.

   WENN DIE TUEREN WIEDER AUFGEHEN: TUEREN_AUF auf das Datum setzen
   (Mitte November). Dann faellt die Mail von selbst auf die
   normale Fassung zum regulaeren Preis zurueck. Dasselbe Datum steht
   in index.html als window.TUEREN_AUF. */
export const TUEREN_ZU_AB = Date.parse('2026-11-01T00:00:00+01:00');
export const TUEREN_AUF   = null;   // z. B. Date.parse('2026-11-16T00:00:00+01:00')
export const tuerenZu = (jetzt = Date.now()) =>
  jetzt >= TUEREN_ZU_AB && (!TUEREN_AUF || jetzt < TUEREN_AUF);

export function willkommenBetreff(jetzt = Date.now()) {
  return tuerenZu(jetzt)
    ? 'Schön, dass du da bist — die Türen öffnen Mitte November'
    : 'Du musst nicht warten — der Sprechclub ist offen';
}

export function willkommenHtml(vorname, jetzt = Date.now()) {
  const v = esc(vorname || 'du');
  const rabatt = rabattLaeuft(jetzt);
  const zu = tuerenZu(jetzt);

  /* Gleicher Aufbau wie die Erinnerungsmail (Julia, 15.10.2026):
     zwei Saetze Begruessung, drei Kaesten, ein Knopf, ein Satz zum
     Schluss. Die beiden Daten stehen in eigenen Kaesten. */
  const preisKasten = rabatt
    ? `<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#FFF3D6;border:2px solid #FFCE00;border-radius:14px;margin-bottom:12px">
      <tr><td style="padding:16px 18px">
        <div style="font-family:'Space Grotesk','Segoe UI',sans-serif;font-weight:700;font-size:17px;margin-bottom:4px">&#9203; Der gro&szlig;e Rabatt gilt nur bis zum <span style="color:#DD0000">31. Oktober</span></div>
        <div style="font-size:15px;line-height:1.55">
          <b>39&nbsp;&euro; statt 99&nbsp;&euro;</b> im Monat (Jahresabo) oder 49&nbsp;&euro; monatlich.
          Wer sp&auml;ter kommt, zahlt den vollen Preis. Dein Preis bleibt dir, solange du dabei bist.
        </div>
      </td></tr>
    </table>`
    : `<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#FFF3D6;border:1px solid #F0E5D8;border-radius:14px;margin-bottom:12px">
      <tr><td style="padding:16px 18px">
        <div style="font-family:'Space Grotesk','Segoe UI',sans-serif;font-weight:700;font-size:17px;margin-bottom:4px">&#128179; Premium</div>
        <div style="font-size:15px;line-height:1.55">83&nbsp;&euro; im Monat im Jahresabo oder 99&nbsp;&euro; monatlich, jederzeit k&uuml;ndbar.</div>
      </td></tr>
    </table>`;

  return `<!DOCTYPE html><html lang="de"><head><meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0"><title>${zu ? 'Die T&uuml;ren &ouml;ffnen Mitte November' : 'Sch&ouml;n, dass du da bist'}</title></head>
<body style="margin:0;padding:0;background:#FFF8E0;font-family:'Inter','Segoe UI',system-ui,sans-serif;color:#1A1A1A">
<div style="display:none;max-height:0;overflow:hidden;opacity:0">${zu ? 'Die T&uuml;ren &ouml;ffnen Mitte November &middot; mit noch mehr Live-Unterricht' : 'Start am 1. November' + (rabatt ? ' &middot; Rabatt nur bis 31. Oktober' : '')}</div>
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#FFF8E0;padding:26px 12px"><tr><td align="center">
<table role="presentation" width="560" cellpadding="0" cellspacing="0" style="max-width:560px;width:100%;background:#FFFCF5;border:1px solid #F0E5D8;border-radius:20px;overflow:hidden">

  <tr><td style="padding:24px 30px 0">
    <span style="font-family:'Space Grotesk','Segoe UI',sans-serif;font-weight:700;font-size:20px">deutsch<span style="color:#14B8A6">oderwas</span></span>
  </td></tr>

  <tr><td style="padding:16px 30px 0">
    <h1 style="font-family:'Space Grotesk','Segoe UI',sans-serif;font-weight:700;font-size:26px;line-height:1.25;margin:0 0 12px">
      ${zu
        ? `Sch&ouml;n, dass du da bist, ${v}. Du stehst auf der <span style="color:#DD0000">Warteliste</span>.`
        : `Sch&ouml;n, dass du da bist, ${v}. Jetzt wird <span style="color:#DD0000">gesprochen</span>.`}
    </h1>
    <p style="font-size:16px;line-height:1.65;margin:0 0 18px">
      ${zu
        ? 'Danke, dass du dich eingetragen hast. Der Sprechclub ist gerade geschlossen &ndash; aber nicht lange. Du bist dabei, sobald die T&uuml;ren wieder aufgehen, und die Pl&auml;tze sind begrenzt.'
        : 'Du hast dich f&uuml;r den Sprechclub eingetragen &ndash; danke daf&uuml;r. Zwei Dinge sind jetzt wichtig f&uuml;r dich:'}
    </p>
  </td></tr>

  <tr><td style="padding:0 30px">
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#A7F3D0;border-radius:14px;margin-bottom:12px">
      <tr><td style="padding:16px 18px">
        <div style="font-family:'Space Grotesk','Segoe UI',sans-serif;font-weight:700;font-size:17px;color:#06403A;margin-bottom:4px">${zu ? '&#128197; Die T&uuml;ren &ouml;ffnen Mitte November' : '&#128197; Der Unterricht startet am 1. November'}</div>
        <div style="font-size:15px;line-height:1.55;color:#06403A">${zu
          ? 'Wir arbeiten gerade an noch mehr <b>Live-Unterricht</b> und noch mehr <b>Flexibilit&auml;t</b> &ndash; damit du den Sprechclub noch &ouml;fter und noch freier nutzen kannst.'
          : 'Danach t&auml;glich von Montag bis Sonntag. Du suchst dir aus, wann du kommst.'}</div>
      </td></tr>
    </table>

    ${zu ? '' : preisKasten}

    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#FFFFFF;border:1px solid #F0E5D8;border-radius:14px;margin-bottom:18px">
      <tr><td style="padding:14px 18px">
        <div style="font-weight:700;font-size:15.5px;margin-bottom:3px">&#9989; ${zu ? 'Solange kannst du in Ruhe die Lernplattform nutzen' : 'Die Lernplattform ist sofort offen'}</div>
        <div style="font-size:14.5px;line-height:1.55;color:#6B7280">Kurse von A1 bis C1, &Uuml;bungen, regelm&auml;&szlig;iger Podcast und Amanda, mit der du sprechen kannst, wann du willst.${zu ? ' Das ist die <b>Community-Mitgliedschaft</b> f&uuml;r 16&nbsp;&euro; im Monat &ndash; und wenn die T&uuml;ren wieder aufgehen, wechselst du mit einem Klick auf Premium.' : ''}</div>
      </td></tr>
    </table>
  </td></tr>

  <tr><td align="center" style="padding:0 30px 20px">
    <a href="https://www.deutschoderwas-club.de/#preise" style="display:inline-block;background:#2DD4BF;color:#06403A;font-weight:700;font-size:16.5px;text-decoration:none;padding:15px 34px;border-radius:999px">${zu ? 'Die Lernplattform ansehen' : 'Platz sichern' + (rabatt ? ' &ndash; bis 31. Oktober' : '')}</a>
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

/* Schickt die Mail genau einmal. `ref` ist die Lead-Nummer, sonst die
   Adresse — email_log laesst keinen zweiten Eintrag zu, und ohne
   Eintrag geht keine Mail raus. */
/* Jeder Mensch auf der Liste gehoert auch in Brevo - sonst erreicht
   ihn die naechste Rundmail nicht. Ueber api/waitlist.js passiert das
   schon beim Eintragen; dieser Weg hier faengt alle anderen ab: aus
   dem Google-Formular nachgetragene, von Hand angelegte, importierte. */
export async function brevoListe(lead) {
  if (!process.env.BREVO_API_KEY) return false;
  const email = String(lead && lead.email || '').trim().toLowerCase();
  if (!email) return false;
  /* Fuer 83 der 186 Leads war hier 0 herausgekommen, weil weder
     BREVO_WAITLIST_LIST_ID noch BREVO_LIST_ID gesetzt sind. Der
     Kontakt wurde dann ohne Liste angelegt — in Brevo vorhanden,
     aber von keiner Kampagne erreichbar. Deshalb steht die Liste
     jetzt als Standard im Code; die Einstellung kann sie weiter
     ueberschreiben, aber sie muss nicht mehr da sein.
     14 = "Sprechclub Interessenten". */
  const LISTE_STANDARD = 14;
  const liste = Number(process.env.BREVO_WAITLIST_LIST_ID || process.env.BREVO_LIST_ID || LISTE_STANDARD);
  const name = String(lead.name || '').trim();
  const vorname = (name.split(/\s+/)[0] || name) || email.split('@')[0];
  try {
    const r = await fetch('https://api.brevo.com/v3/contacts', {
      method: 'POST',
      headers: { 'api-key': process.env.BREVO_API_KEY, 'Content-Type': 'application/json' },
      body: JSON.stringify({
        email,
        updateEnabled: true,
        attributes: Object.assign(
          { VORNAME: vorname, NAME: name || vorname, QUELLE: String(lead.quelle || 'warteliste') },
          lead.niveau ? { NIVEAU: lead.niveau } : {},
          lead.whatsapp ? { WHATSAPP: String(lead.whatsapp).replace(/\D/g, '') } : {}
        ),
        listIds: liste ? [liste] : undefined,
      }),
    });
    return r.ok || r.status === 204;
  } catch (e) { return false; }
}

export async function willkommenSenden(sb, lead) {
  const email = String(lead && lead.email || '').trim().toLowerCase();
  if (!email || !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) return { ok: false, grund: 'keine_adresse' };
  if (!process.env.BREVO_API_KEY) return { ok: false, grund: 'kein_brevo_schluessel' };

  /* Als Kennzeichen dient die Adresse, nicht die Lead-Nummer: wer sich
     zweimal eintraegt — einmal auf der Seite, einmal im Formular —
     bekommt die Mail trotzdem nur ein einziges Mal. */
  const ref = email.slice(0, 120);
  /* Steht in der Lead-Liste schon ein mail_at, hat die Person bereits
     eine Mail von uns - dann nichts schicken, egal was im Log steht. */
  try {
    const { data: da } = await sb.from('leads').select('mail_at').ilike('email', email).not('mail_at', 'is', null).limit(1);
    if (da && da.length) return { ok: false, grund: 'schon_geschickt' };
  } catch (e) { /* im Zweifel weiter - das Log faengt Doppelte ohnehin ab */ }
  const { error: logErr } = await sb.from('email_log').insert({ kind: 'lead_willkommen', ref });
  if (logErr) return { ok: false, grund: 'schon_geschickt' };

  const vorname = (String(lead.name || '').trim().split(/\s+/)[0]) || email.split('@')[0];

  /* Erst auf die Liste, dann die Mail. Wer die Willkommensmail bekommt,
     soll auch die naechste Rundmail bekommen. */
  await brevoListe(lead);

  try {
    const r = await fetch('https://api.brevo.com/v3/smtp/email', {
      method: 'POST',
      headers: { 'api-key': process.env.BREVO_API_KEY, 'Content-Type': 'application/json' },
      body: JSON.stringify({
        sender: { name: 'Julia · deutschoderwas club', email: process.env.BREVO_SENDER_EMAIL || 'deutschlernen@deutschoderwas.de' },
        replyTo: { email: process.env.ADMIN_EMAIL || 'deutschoderwas@gmail.com', name: 'Julia' },
        to: [{ email, name: String(lead.name || vorname).slice(0, 120) }],
        subject: willkommenBetreff(),
        htmlContent: willkommenHtml(vorname),
      }),
    });
    if (!r.ok) {
      /* Ging die Mail nicht raus, darf der Eintrag nicht stehen bleiben —
         sonst versucht es das Netz nachher nie wieder. */
      await sb.from('email_log').delete().eq('kind', 'lead_willkommen').eq('ref', ref);
      const t = await r.text();
      return { ok: false, grund: 'brevo_' + r.status, detail: t.slice(0, 160) };
    }
  } catch (e) {
    await sb.from('email_log').delete().eq('kind', 'lead_willkommen').eq('ref', ref);
    return { ok: false, grund: 'netz', detail: String(e).slice(0, 160) };
  }
  /* Zwei Markierungen, die nichts voneinander wissen, verschicken
     dieselbe Mail zweimal - genau das ist am 01.10. passiert. Deshalb
     setzt der Versand jetzt BEIDE: den Eintrag in email_log und
     leads.mail_at. */
  try { await sb.from('leads').update({ mail_at: new Date().toISOString() }).ilike('email', email); }
  catch (e) { /* die Mail ist raus, das Log steht - mehr muss nicht klappen */ }
  return { ok: true };
}
