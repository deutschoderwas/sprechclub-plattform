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

export function willkommenHtml(vorname) {
  const v = esc(vorname || 'du');
  return `<!DOCTYPE html><html lang="de"><head><meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0"><title>Die Türen sind offen</title></head>
<body style="margin:0;padding:0;background:#FFF8E0;font-family:'Inter','Segoe UI',system-ui,sans-serif;color:#1A1A1A">
<div style="display:none;max-height:0;overflow:hidden;opacity:0">Du musst nicht warten – der Sprechclub ist offen.</div>
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#FFF8E0;padding:24px 12px"><tr><td align="center">
<table role="presentation" width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;background:#FFFCF5;border:1px solid #F0E5D8;border-radius:20px;overflow:hidden">

  <tr><td style="padding:24px 32px 8px">
    <span style="font-family:'Space Grotesk','Segoe UI',sans-serif;font-weight:700;font-size:22px;color:#1A1A1A">deutsch<span style="color:#35AFD0">oderwas</span></span>
    <span style="display:block;font-size:12px;color:#6B7280;margin-top:2px">Deutsch lernen mit Spa&szlig; &amp; Leichtigkeit</span>
  </td></tr>
  <tr><td style="padding:0 32px"><div style="height:3px;background:linear-gradient(135deg,#7ED8EA,#35AFD0);border-radius:999px"></div></td></tr>

  <tr><td style="padding:24px 32px 8px">
    <span style="display:inline-block;font-weight:600;font-size:12px;letter-spacing:1px;text-transform:uppercase;color:#DD0000;margin-bottom:8px">Sch&ouml;n, dass du da bist</span>
    <h1 style="font-family:'Space Grotesk','Segoe UI',sans-serif;font-weight:700;font-size:28px;line-height:1.2;margin:0 0 16px;color:#1A1A1A">
      Du musst nicht warten. Die T&uuml;ren sind <span style="color:#DD0000">offen</span>.
    </h1>
    <p style="font-size:16px;line-height:1.65;margin:0 0 16px">Hallo ${v},</p>
    <p style="font-size:16px;line-height:1.65;margin:0 0 16px">danke, dass du dich eingetragen hast. Eine gute Nachricht gleich vorweg: Du stehst auf keiner Warteliste mehr. Du kannst dir deinen Platz im Sprechclub ab sofort holen.</p>
    <p style="font-size:16px;line-height:1.65;margin:0 0 16px">Richtig los geht es am <strong>1. November</strong>. Die Lernplattform ist ab deiner Anmeldung sofort f&uuml;r dich offen &ndash; Kurse von A1 bis C1, &Uuml;bungen, der Chat mit den anderen.</p>
    <p style="font-size:16px;line-height:1.65;margin:0 0 4px">Warum ich den Club &uuml;berhaupt mache: Ich sehe seit Jahren dasselbe. Meine Sch&uuml;ler verstehen fast alles, machen einen Kurs nach dem anderen &ndash; und im Gespr&auml;ch kommt trotzdem kein Satz raus. Nicht weil sie zu wenig k&ouml;nnen. Sondern weil ihnen im Alltag die Sprechpraxis fehlt. Genau daf&uuml;r ist der Club da: t&auml;glich von Montag bis Sonntag, du suchst dir aus, wann. Kleine Gruppen, Themen aus dem echten Leben, vorbereiten musst du nichts.</p>
  </td></tr>

  <tr><td style="padding:18px 32px 0">
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#FFF3D6;border-left:5px solid #FFCE00;border-radius:12px">
      <tr><td style="padding:16px 18px">
        <p style="font-size:16px;line-height:1.6;margin:0;color:#1A1A1A">
          Melde dich am besten <strong>jetzt</strong> an: Als Willkommensgeschenk bekommst du
          <strong>50&nbsp;% auf den Monatspreis</strong> oder <strong>60&nbsp;% auf den Jahrespreis</strong>.
        </p>
      </td></tr>
    </table>
  </td></tr>

  <tr><td style="padding:14px 32px 4px">
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#FFFFFF;border:2px solid #DD0000;border-radius:16px">
      <tr><td style="padding:20px 22px" align="center">
        <span style="display:inline-block;background:#DD0000;color:#FFFFFF;font-weight:700;font-size:13px;border-radius:999px;padding:6px 14px;margin-bottom:12px">Fr&uuml;hbucher &middot; nur bis 31. Oktober</span>
        <div style="margin:6px 0 2px">
          <span style="font-size:19px;color:#9a9a9a;text-decoration:line-through">99 &euro;</span>
          <span style="font-family:'Space Grotesk','Segoe UI',sans-serif;font-weight:700;font-size:44px;color:#1A1A1A;margin-left:8px">39 &euro;</span>
          <span style="font-size:15px;color:#6B7280">im Monat</span>
        </div>
        <p style="font-size:14px;color:#6B7280;margin:4px 0 14px">im Jahresabo &ndash; oder 49 &euro; im Monat, monatlich k&uuml;ndbar</p>
        <p style="font-size:14.5px;line-height:1.75;margin:0;text-align:left">
          &#10003;&nbsp; Dein Preis bleibt f&uuml;r immer<br>
          &#10003;&nbsp; Die Lernplattform ist sofort offen<br>
          &#10003;&nbsp; N&auml;chste Zahlung erst am 1. Dezember &ndash; im Jahresabo erst in einem Jahr
        </p>
      </td></tr>
    </table>
  </td></tr>

  <tr><td align="center" style="padding:22px 32px 8px">
    <a href="https://www.deutschoderwas-club.de/#preise" style="display:inline-block;background:#DD0000;color:#FFFFFF;font-weight:700;font-size:17px;text-decoration:none;padding:15px 34px;border-radius:999px">Platz im Sprechclub sichern</a>
  </td></tr>

  <tr><td style="padding:14px 32px 0">
    <p style="font-size:16px;line-height:1.65;margin:0 0 16px">Ab dem 1. November kostet Premium f&uuml;r neue Mitglieder 99 &euro; im Monat. Was du jetzt zahlst, zahlst du auch in zwei Jahren noch.</p>
    <p style="font-size:16px;line-height:1.65;margin:0 0 16px">Wenn du Fragen hast, antworte einfach auf diese Mail. Ich lese sie selbst.</p>
  </td></tr>

  <tr><td style="padding:0 32px 26px">
    <p style="font-size:16px;line-height:1.65;margin:0">Wir freuen uns auf dich,<br><strong>Julia und das Team</strong> &#128153;</p>
  </td></tr>

  <tr><td style="background:#1A1A1A;padding:24px 32px">
    <p style="font-size:13px;line-height:1.6;color:#FFFCF5;margin:0 0 8px;font-weight:600">deutschoderwas &middot; Julia Karackov</p>
    <p style="font-size:12px;line-height:1.6;color:#b9b9b9;margin:0 0 8px">
      Wiesenstra&szlig;e 38, 58119 Hagen, Deutschland &middot; deutschoderwas@gmail.com &middot; USt-ID: DE676677898
    </p>
    <p style="font-size:12px;line-height:1.6;color:#b9b9b9;margin:0">
      Du bekommst diese E-Mail, weil du dich gerade f&uuml;r den Sprechclub eingetragen hast.
      Wenn du keine weiteren Mails m&ouml;chtest, antworte einfach kurz mit &bdquo;Stopp&ldquo;.
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
        subject: 'Du musst nicht warten — der Sprechclub ist offen',
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
