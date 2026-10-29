// ============================================================
//  _whatsapp-gruppe-mail.js — die Einladung in die WhatsApp-Gruppe
//
//  Julia, 29.10.2026: "Wir müssen allen Premium Schülern jetzt eine
//  Email schicken, eine schöne, zur Erinnerung, dass sie gerne in
//  unsere gemeinsame WhatsApp Gruppe kommen KÖNNEN, wenn sie wollen.
//  Es gibt zwar die Kommunikation im Community chat, aber wenn es
//  manchmal schnell gehen muss, dann ist der Chat auf WhatsApp immer
//  am schnellsten. Komm also gerne rein. Es sind nur Club Mitglieder
//  drin."
//
//  Auf die Frage, wer sie bekommt: alle Mitglieder, Premium und
//  Community — in der Gruppe sind ja "nur Club-Mitglieder", und das
//  sind Community-Leute auch.
//
//  Der Ton ist Einladung, nicht Aufforderung: zweimal steht da, dass
//  es völlig in Ordnung ist, nicht mitzumachen. Wer den Chat auf der
//  Plattform lieber mag, soll sich durch diese Mail nicht gedrängt
//  fühlen.
// ============================================================

export const GRUPPEN_LINK = 'https://chat.whatsapp.com/KkxQA5AAyNx48dR1bpX4Wk?mode=gi_t';

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
  return `<!doctype html><html lang="de"><body style="margin:0;background:#FFF8E0;">
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#FFF8E0;padding:28px 12px;">
<tr><td align="center">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0"
         style="max-width:560px;background:#FFFCF5;border:1px solid #F0E5D8;border-radius:18px;
                font-family:Inter,'Segoe UI',system-ui,sans-serif;color:#1A1A1A;">
    <tr><td style="padding:26px 28px 6px;">
      <div style="font-family:'Space Grotesk',Inter,sans-serif;font-weight:700;font-size:20px;">
        <span style="color:#1A1A1A;">deutsch</span><span style="color:#14B8A6;">oderwas</span>
      </div>
    </td></tr>
    <tr><td style="padding:14px 28px 0;">
      <h1 style="margin:0 0 14px;font-family:'Space Grotesk',Inter,sans-serif;
                 font-size:23px;line-height:1.3;color:#1A1A1A;">
        Komm gern in unsere WhatsApp-Gruppe
      </h1>

      <p style="margin:0 0 14px;font-size:16px;line-height:1.65;">Hallo ${v},</p>

      <p style="margin:0 0 14px;font-size:16px;line-height:1.65;">
        nur eine kurze Erinnerung — <b>falls du noch nicht drin bist</b>: Neben
        dem Community-Chat auf der Plattform gibt es auch eine gemeinsame
        <b>WhatsApp-Gruppe</b>. Und wenn es mal schnell gehen muss, bist du
        dort am schnellsten dran.
      </p>

      <p style="margin:0 0 14px;font-size:16px;line-height:1.65;">
        Eine Frage kurz vor der Stunde, ein Satz, bei dem du unsicher bist,
        ein „Wie sagt man das noch mal?“ — auf der Plattform ist alles in Ruhe
        sortiert, auf WhatsApp geht es eben flott.
      </p>

      <p style="margin:0 0 20px;font-size:16px;line-height:1.65;">
        In der Gruppe sind nur Club-Mitglieder. Komm gern dazu, wenn du magst.
        Und wenn du schon drin bist: super, dann hast du diese Mail einfach
        schon erledigt.
      </p>

      <p style="margin:0 0 22px;">
        <a href="${GRUPPEN_LINK}" style="display:inline-block;background:#2DD4BF;color:#06403A;
           font-weight:700;font-size:16px;text-decoration:none;padding:13px 24px;border-radius:999px;">
          Zur WhatsApp-Gruppe
        </a>
      </p>

      <p style="margin:0 0 18px;font-size:16px;line-height:1.65;">
        Und wenn du lieber im Chat auf der Plattform bleibst: auch völlig in
        Ordnung. Dort liest du sowieso alles mit.
      </p>

      <p style="margin:0 0 18px;font-size:16px;line-height:1.65;">
        Wir freuen uns so oder so, dass du dabei bist.
      </p>

      <p style="margin:0 0 18px;font-size:16px;line-height:1.65;">
        Und falls du Fragen hast — zur Gruppe oder zu irgendetwas anderem:
        Schreib mir einfach direkt,
        <a href="https://wa.me/4917643425306" style="color:#0F766E;font-weight:700;">+49 176 43425306</a>.
      </p>

      <p style="margin:0 0 26px;font-size:16px;line-height:1.65;">
        Bis bald,<br>Julia &amp; Team
      </p>
    </td></tr>
    <tr><td style="padding:0 28px 26px;border-top:1px solid #F0E5D8;">
      <p style="margin:16px 0 0;font-size:12px;line-height:1.6;color:#6B7280;">
        deutschoderwas · Julia Karackov · Wiesenstraße 38, 58119 Hagen, Deutschland<br>
        E-Mail: deutschoderwas@gmail.com · USt-ID: DE676677898<br>
        Du bekommst diese Nachricht, weil du Mitglied im deutschoderwas club bist.
      </p>
    </td></tr>
  </table>
</td></tr></table>
</body></html>`;
}
