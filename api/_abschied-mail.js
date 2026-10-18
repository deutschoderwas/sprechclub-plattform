// ============================================================
//  deutschoderwas club — "Schade, dass du gehst"
//
//  Julia, 18.10.2026: "Diese Schüler sollen auch eine Mail
//  erhalten: Schade, dass du gehst (und darauf aufmerksam
//  machen, dass man zu Premium wechseln kann, um täglich zu
//  sprechen)."
//
//  Sie geht an dem Tag raus, an dem das Abo wirklich abgelaufen
//  ist — nicht an dem Tag, an dem jemand kuendigt. Dazwischen
//  liegt oft ein ganzer Monat, den die Person bezahlt hat und in
//  dem sie noch dabei ist; ihr dort "schade, dass du gehst" zu
//  schreiben, waere zweimal falsch.
//
//  Zwei Fassungen, weil zwei verschiedene Menschen sie lesen:
//    community — hat nie live gesprochen. Fuer sie ist Premium
//                nicht "mehr vom Gleichen", sondern das, was sie
//                eigentlich wollte: jeden Tag reden.
//    premium   — war schon drin. Ihr Premium anzubieten waere
//                albern; sie bekommt eine offene Tuer.
//
//  Kein Rabatt, kein Countdown, kein Druck. Wer geht, darf gehen.
// ============================================================

const esc = (s) => String(s == null ? '' : s)
  .replace(/[<>&]/g, (c) => ({ '<': '&lt;', '>': '&gt;', '&': '&amp;' }[c]));

const SEITE = 'https://www.deutschoderwas-club.de';

/* Das Datum, bis zu dem bezahlt war — in deutscher Zeit. Ohne
   timeZone steht bei jemandem in Mexiko der Vortag, und eine
   Abschiedsmail, die das Datum falsch nennt, liest sich wie ein
   Fehler im Konto. */
export function abschiedDatum(iso) {
  try {
    if (!iso) return '';
    return new Date(iso).toLocaleDateString('de-DE', {
      timeZone: 'Europe/Berlin', day: 'numeric', month: 'long', year: 'numeric'
    });
  } catch (e) { return ''; }
}

export function abschiedBetreff(tier) {
  return tier === 'community'
    ? 'Schade, dass du gehst 💛'
    : 'Schade, dass du gehst — die Tür bleibt offen 💛';
}

export function abschiedHtml(vorname, tier, bisDatum) {
  const v = esc((vorname || '').trim().split(' ')[0] || 'du');
  const istCommunity = tier === 'community';
  const bis = esc(bisDatum || '');

  const kasten = istCommunity ? `
      <tr><td style="padding:0 28px 6px">
        <table width="100%" cellpadding="0" cellspacing="0" role="presentation"
               style="background:#FFF8E0;border:1px solid #F0E5D8;border-radius:16px">
          <tr><td style="padding:20px 22px">
            <div style="font:700 12px/1.3 Inter,Arial,sans-serif;letter-spacing:.08em;
                        text-transform:uppercase;color:#DD0000;margin-bottom:8px">Falls du eigentlich sprechen wolltest</div>
            <div style="font:600 19px/1.35 'Space Grotesk',Arial,sans-serif;color:#1A1A1A;margin-bottom:10px">
              Mit Premium redest du jeden Tag.</div>
            <div style="font:400 15px/1.65 Inter,Arial,sans-serif;color:#1A1A1A">
              Community war Lesen, Üben, Material. Premium ist der Sprechclub:
              <strong>jeden Tag LIVE-Unterricht mit einem Lehrer</strong>, so oft du willst,
              ohne Guthaben, in kleinen Gruppen nach Niveau. Genau das, wovor die
              meisten Angst haben — und was als Einziges wirklich hilft.
            </div>
          </td></tr>
        </table>
      </td></tr>
      <tr><td align="center" style="padding:20px 28px 6px">
        <a href="${SEITE}/preise"
           style="display:inline-block;background:#2DD4BF;color:#06403A;text-decoration:none;
                  font:700 16px/1 Inter,Arial,sans-serif;padding:16px 30px;border-radius:999px">
          Premium ansehen →</a>
      </td></tr>
      <tr><td align="center" style="padding:8px 28px 0;font:400 13px/1.6 Inter,Arial,sans-serif;color:#6B7280">
        Der Sprechclub startet am 1. November.</td></tr>`
    : `
      <tr><td style="padding:0 28px 6px">
        <table width="100%" cellpadding="0" cellspacing="0" role="presentation"
               style="background:#FFF8E0;border:1px solid #F0E5D8;border-radius:16px">
          <tr><td style="padding:20px 22px;font:400 15px/1.65 Inter,Arial,sans-serif;color:#1A1A1A">
            Dein Fortschritt bleibt gespeichert — deine Materialien, deine Stunden, alles.
            Wenn du zurückkommst, ist es sofort wieder da. Kein Neuanfang.
          </td></tr>
        </table>
      </td></tr>
      <tr><td align="center" style="padding:20px 28px 6px">
        <a href="${SEITE}/preise"
           style="display:inline-block;background:#2DD4BF;color:#06403A;text-decoration:none;
                  font:700 16px/1 Inter,Arial,sans-serif;padding:16px 30px;border-radius:999px">
          Wieder dabei sein →</a>
      </td></tr>`;

  return `<!DOCTYPE html><html lang="de"><head><meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1.0">
<title>Schade, dass du gehst</title></head>
<body style="margin:0;padding:0;background:#FFF8E0">
<table width="100%" cellpadding="0" cellspacing="0" role="presentation" style="background:#FFF8E0">
<tr><td align="center" style="padding:28px 14px">
  <table width="100%" cellpadding="0" cellspacing="0" role="presentation"
         style="max-width:560px;background:#FFFCF5;border:1px solid #F0E5D8;border-radius:20px">

    <tr><td style="padding:26px 28px 4px;font:700 18px/1 'Space Grotesk',Arial,sans-serif;color:#1A1A1A">
      deutsch<span style="color:#14B8A6">oderwas</span></td></tr>

    <tr><td style="padding:14px 28px 0">
      <div style="font:600 27px/1.25 'Space Grotesk',Arial,sans-serif;color:#1A1A1A">
        Schade, dass du gehst, ${v}.</div></td></tr>

    <tr><td style="padding:14px 28px 18px;font:400 16px/1.7 Inter,Arial,sans-serif;color:#1A1A1A">
      Deine Mitgliedschaft ist ${bis ? 'am <strong>' + bis + '</strong> ' : ''}ausgelaufen,
      und damit ist die Plattform für dich zu. Danke, dass du dabei warst — wirklich.
      ${istCommunity ? '' : 'Ich hoffe, du hast etwas mitgenommen.'}
    </td></tr>

    ${kasten}

    <tr><td style="padding:24px 28px 8px;font:400 15px/1.7 Inter,Arial,sans-serif;color:#1A1A1A">
      Und falls du gegangen bist, weil etwas nicht gepasst hat: schreib mir einfach zurück.
      Ich lese jede Mail selbst.
    </td></tr>

    <tr><td style="padding:4px 28px 26px;font:400 15px/1.7 Inter,Arial,sans-serif;color:#1A1A1A">
      Alles Gute für dein Deutsch 💛<br>Julia</td></tr>

    <tr><td style="padding:0 28px 24px;border-top:1px solid #F0E5D8">
      <div style="padding-top:14px;font:400 12px/1.6 Inter,Arial,sans-serif;color:#6B7280">
        deutschoderwas · Julia Karackov · Wiesenstraße 38, 58119 Hagen, Deutschland<br>
        deutschoderwas@gmail.com · USt-ID: DE676677898
      </div></td></tr>
  </table>
</td></tr></table></body></html>`;
}
