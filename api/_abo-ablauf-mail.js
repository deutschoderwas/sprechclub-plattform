// ============================================================
//  _abo-ablauf-mail.js — die Erinnerung vor dem Ablauf
//
//  Julia, 25.10.2026, über Natalia Shurygina: "1 Woche vorher
//  bekommt sie eine Email, dass ihr Premium Abo am 31.12 abläuft
//  und ob sie ein neues Abo abschließen mag."
//
//  Bewusst ohne Preis und ohne Angebot: Preise stehen auf der
//  Paketseite und ändern sich dort, ein Preis in einer Mail vom
//  Dezember wäre im Januar womöglich falsch. Und ohne Frist, ohne
//  "nur noch heute" — das passt nicht zu Julia.
//
//  Der Auftrag trägt die Person (ziel_user) und den Tag
//  (faellig_am). Verschickt wird genau eine Mail; danach steht der
//  Auftrag auf 'fertig' und kann sich nicht wiederholen.
// ============================================================

const PAKETE = 'https://www.deutschoderwas-club.de/index.html#preise';

/* Wie die Stufe in der Mail heisst. Bis zum 29.10.2026 stand hier
   ueberall fest "Premium" — damals bekam nur Premium diese Mail.
   Seit dem Uebergang der alten Schueler haben auch Community-Zugaenge
   ein Ende, und die wollen nicht lesen, ihr Premium laufe aus. */
function stufenName(tier) {
  const t = String(tier || '').toLowerCase();
  if (t === 'community') return 'Community-Zugang';
  if (t === 'premiumplus' || t === 'premium_plus') return 'Premium Plus';
  return 'Premium';
}

function datumLang(d) {
  try {
    return new Date(d).toLocaleDateString('de-DE',
      { day: 'numeric', month: 'long', year: 'numeric' });
  } catch (e) { return String(d || ''); }
}
function vornameVon(name, email) {
  const n = String(name || '').trim();
  if (n) return n.split(/\s+/)[0];
  return String(email || '').split('@')[0] || 'du';
}
function E(s) {
  return String(s == null ? '' : s)
    .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

export function abloufHtml(vorname, datum, stufe) {
  const d = E(datum);
  const st = E(stufe || 'Premium');
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
        Dein ${st} läuft am ${d} aus
      </h1>
      <p style="margin:0 0 14px;font-size:16px;line-height:1.65;">Hallo ${E(vorname)},</p>
      <p style="margin:0 0 14px;font-size:16px;line-height:1.65;">
        eine kurze Nachricht, damit es dich nicht überrascht: Dein ${st}
        läuft am <b>${d}</b> aus.
      </p>
      <p style="margin:0 0 14px;font-size:16px;line-height:1.65;">
        Bis dahin ändert sich nichts. Du buchst weiter Unterricht wie bisher,
        und alles bleibt, wo es ist.
      </p>
      <p style="margin:0 0 14px;font-size:16px;line-height:1.65;">
        Danach bleibt dein Konto bestehen, und die Materialien, mit denen du
        gearbeitet hast, kannst du weiter ansehen. Was wegfällt, ist das Buchen
        von Live-Unterricht und der volle Zugang zur Lernplattform.
      </p>
      <p style="margin:0 0 20px;font-size:16px;line-height:1.65;">
        Magst du weitermachen?
      </p>
      <p style="margin:0 0 22px;">
        <a href="${PAKETE}" style="display:inline-block;background:#2DD4BF;color:#06403A;
           font-weight:700;font-size:16px;text-decoration:none;padding:13px 24px;border-radius:999px;">
          Pakete ansehen
        </a>
      </p>
      <p style="margin:0 0 18px;font-size:16px;line-height:1.65;">
        Und falls du eine Pause brauchst: Das ist völlig in Ordnung. Antworte
        einfach auf diese Mail, dann finden wir etwas, das passt.
      </p>
      <p style="margin:0 0 26px;font-size:16px;line-height:1.65;">
        Bis bald,<br>Julia
      </p>
    </td></tr>
    <tr><td style="padding:0 28px 26px;border-top:1px solid #F0E5D8;">
      <p style="margin:16px 0 0;font-size:12px;line-height:1.6;color:#6B7280;">
        deutschoderwas · Julia Karackov · Wiesenstraße 38, 58119 Hagen, Deutschland<br>
        E-Mail: deutschoderwas@gmail.com · USt-ID: DE676677898<br>
        Du bekommst diese Nachricht, weil du ein Abo bei deutschoderwas hast.
      </p>
    </td></tr>
  </table>
</td></tr></table>
</body></html>`;
}

/* Verschickt genau eine Mail an die Person aus auftrag.ziel_user.
   Gibt einen Bericht zurueck, der in der Auftragszeile landet. */
/* Dieselbe Mail, aber ohne Auftrag — fuer den naechtlichen Lauf, der
   von sich aus vorwarnt, wenn ein gekuendigtes Stripe-Abo auslaeuft.
   (31.10.2026, auf Julias Frage, ob bei einer Kuendigung auch die
   lernende Person vorher Bescheid bekommt.) */
export function ablaufMail(p) {
  const datum   = datumLang(p && p.abo_ende);
  const vorname = vornameVon(p && p.name, p && p.email);
  const stufe   = stufenName(p && p.tier);
  return { betreff: `Dein ${stufe} läuft am ${datum} aus`,
           html: abloufHtml(vorname, datum, stufe), datum, stufe };
}

export async function abloufLauf(sb, auftrag) {
  const ziel = auftrag && auftrag.ziel_user;
  if (!ziel) return { ok: false, grund: 'kein_ziel_user' };
  if (!process.env.BREVO_API_KEY) return { ok: false, grund: 'kein_brevo_schluessel' };

  const { data: p, error } = await sb.from('profiles')
    .select('id,name,email,tier,status,abo_ende').eq('id', ziel).single();
  if (error || !p) return { ok: false, grund: 'profil_nicht_gefunden' };
  if (!p.email) return { ok: false, grund: 'keine_adresse' };

  /* Zwischen dem Anlegen und heute koennen Monate liegen. Wer
     inzwischen verlaengert hat, bekommt keine Abschiedsmail. */
  if (!p.abo_ende) return { ok: false, grund: 'kein_abo_ende_mehr', name: p.name };
  const ende = new Date(p.abo_ende);
  const tage = Math.round((ende - Date.now()) / 86400000);
  if (tage > 30) return { ok: false, grund: 'abo_wurde_verlaengert', neues_ende: p.abo_ende, name: p.name };
  if (tage < -1) return { ok: false, grund: 'abo_schon_vorbei', ende: p.abo_ende, name: p.name };

  const datum = datumLang(p.abo_ende);
  const vorname = vornameVon(p.name, p.email);
  const stufe = stufenName(p.tier);

  const r = await fetch('https://api.brevo.com/v3/smtp/email', {
    method: 'POST',
    headers: { 'api-key': process.env.BREVO_API_KEY, 'Content-Type': 'application/json' },
    body: JSON.stringify({
      sender: { name: 'Julia · deutschoderwas club',
                email: process.env.BREVO_SENDER_EMAIL || 'deutschlernen@deutschoderwas.de' },
      to: [{ email: p.email, name: p.name || undefined }],
      subject: `Dein ${stufe} läuft am ${datum} aus`,
      htmlContent: abloufHtml(vorname, datum, stufe),
    }),
  });
  const antwort = await r.text().catch(() => '');
  if (!r.ok) return { ok: false, grund: 'brevo_fehler', http: r.status, antwort: antwort.slice(0, 200) };
  return { ok: true, an: p.email, name: p.name, abo_ende: p.abo_ende, datum, stufe };
}
