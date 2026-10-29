// ============================================================
//  _whatsapp-gruppe-mail.js — die Einladung in die WhatsApp-Gruppe
//
//  Julia, 29.10.2026: "Wir müssen allen Club-Mitgliedern eine Email
//  schicken, zur Erinnerung, dass sie gerne in unsere gemeinsame
//  WhatsApp Gruppe kommen KÖNNEN, wenn sie wollen. Es gibt zwar die
//  Kommunikation im Community chat, aber wenn es manchmal schnell
//  gehen muss, dann ist der Chat auf WhatsApp immer am schnellsten.
//  Komm also gerne rein. Es sind nur Club Mitglieder drin."
//
//  Ergänzungen von ihr beim Gegenlesen: "WENN du noch nicht drin
//  bist", "wenn du schon drin bist, dann ist super", ihre Nummer für
//  Rückfragen, und die Unterschrift "Julia & Team".
//
//  Und zuletzt, nach der Testmail: "Kannst du es einfach weiß machen?
//  Wie eine normale Mail von Julia, nichts Professionelles."
//
//  Deshalb KEIN Briefkasten-Layout: kein Creme, keine Karte, kein
//  Logo, kein türkiser Knopf. Weißer Grund, normale Schrift, der Link
//  als Link. Das Ganze soll aussehen wie eine Mail, die Julia eben
//  getippt hat — denn genau das ist es inhaltlich auch. Nur der
//  Impressum-Fuß bleibt, der muss bei einer Rundmail dabei sein; er
//  steht klein und leise am Ende.
//
//  Der Ton ist Einladung, nicht Aufforderung: zweimal steht da, dass
//  es völlig in Ordnung ist, nicht mitzumachen.
// ============================================================

export const GRUPPEN_LINK = 'https://chat.whatsapp.com/KkxQA5AAyNx48dR1bpX4Wk?mode=gi_t';
export const JULIA_NUMMER = '+49 176 43425306';
const JULIA_WA = 'https://wa.me/4917643425306';

function vornameVon(name, email) {
  const n = String(name || '').trim();
  if (n) return n.split(/\s+/)[0];
  return String(email || '').split('@')[0] || 'du';
}
function E(s) {
  return String(s == null ? '' : s)
    .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

export function gruppeBetreff() {
  return 'Magst du in unsere WhatsApp-Gruppe?';
}

export function gruppeHtml(name, email) {
  const v = E(vornameVon(name, email));
  const schrift = "-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif";
  const p = `margin:0 0 14px;font-size:16px;line-height:1.6;color:#222222;`;
  return `<!doctype html><html lang="de"><body style="margin:0;padding:0;background:#ffffff;">
<div style="max-width:560px;margin:0 auto;padding:26px 20px;font-family:${schrift};">

  <p style="${p}">Hallo ${v},</p>

  <p style="${p}">
    ich wollte dir nur kurz Bescheid sagen, falls du noch nicht drin bist: Wir
    haben neben dem Chat auf der Plattform auch eine WhatsApp-Gruppe. Wenn es
    mal schnell gehen muss, bist du da am schnellsten dran.
  </p>

  <p style="${p}">
    Eine Frage kurz vor der Stunde, ein Satz, bei dem du unsicher bist, ein
    &bdquo;Wie sagt man das noch mal?&ldquo; &mdash; einfach rein damit.
  </p>

  <p style="${p}">
    Drin sind nur Club-Mitglieder. Hier ist der Link:<br>
    <a href="${GRUPPEN_LINK}" style="color:#1155cc;">${GRUPPEN_LINK}</a>
  </p>

  <p style="${p}">
    Und wenn du schon drin bist: super, dann hast du diese Mail einfach schon
    erledigt.
  </p>

  <p style="${p}">
    Wenn du lieber im Chat auf der Plattform bleibst, ist das genauso in
    Ordnung. Dort liest du sowieso alles mit.
  </p>

  <p style="${p}">
    Falls du Fragen hast, zur Gruppe oder zu irgendetwas anderem, schreib mir
    einfach direkt: <a href="${JULIA_WA}" style="color:#1155cc;">${JULIA_NUMMER}</a>
  </p>

  <p style="${p}">
    Bis bald,<br>
    Julia &amp; Team
  </p>

  <p style="margin:26px 0 0;padding-top:12px;border-top:1px solid #e8e8e8;
            font-size:11px;line-height:1.5;color:#999999;">
    deutschoderwas &middot; Julia Karackov &middot; Wiesenstra&szlig;e 38, 58119 Hagen,
    Deutschland &middot; deutschoderwas@gmail.com &middot; USt-ID: DE676677898<br>
    Du bekommst diese Nachricht, weil du Mitglied im deutschoderwas club bist.
  </p>

</div>
</body></html>`;
}
