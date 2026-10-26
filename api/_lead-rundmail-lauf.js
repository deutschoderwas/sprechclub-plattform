// ============================================================
//  Julias eigener Text an alle Leads.
//
//  Julia, 26.10.2026: "Ich will selbst einen Text an alle Leads
//  verfassen koennen."
//
//  Bisher gab es im Lead-Bereich nur zwei feste Mails: die
//  Willkommensmail und die Erinnerung an alle ohne Premium. Beide
//  stehen im Code, Julia konnte sie nicht aendern. Frei schreiben
//  konnte sie nur an einen einzelnen Lead.
//
//  Hier bringt sie Betreff und Text selbst mit. Der Rest — wer sie
//  bekommt, wer uebersprungen wird, der Rahmen drumherum — laeuft wie
//  bei der Erinnerung, damit es keine zweite Logik gibt, die man
//  getrennt pflegen muesste.
//
//  Ausgesiebt wird der Reihe nach:
//    1. alle leads mit einer zustellbaren Adresse, Doppelte zusammen
//    2. optional Premium, Lehrkraefte, Admins (Julia entscheidet)
//    3. alle, die sich bei Brevo abgemeldet haben
//    4. alle, die genau diesen Text schon bekommen haben
//
//  Punkt 4 haengt am Text selbst: eine neue Mail geht an alle, ein
//  zweiter Klick auf dieselbe an niemanden. So kann ein Versehen den
//  Posteingang niemandem zweimal fuellen.
// ============================================================

const GUELTIG = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;
export const MAX = 400;

function esc(s) {
  return String(s == null ? '' : s)
    .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

/* Eine kurze, stabile Kennung aus Betreff und Text. Gleicher Text =
   gleiche Kennung = niemand bekommt ihn zweimal. Geaenderter Text =
   neue Kennung = darf wieder an alle. */
export function kennung(betreff, text) {
  const s = String(betreff || '') + '\u0000' + String(text || '');
  let h1 = 0x811c9dc5, h2 = 0x01000193;
  for (let i = 0; i < s.length; i++) {
    const c = s.charCodeAt(i);
    h1 = Math.imul(h1 ^ c, 16777619) >>> 0;
    h2 = Math.imul(h2 + c, 2246822519) >>> 0;
  }
  return 'lead_rundmail_' + h1.toString(36) + h2.toString(36);
}

function vorname(name, email) {
  const n = String(name || '').trim();
  return (n.split(/\s+/)[0] || '') || String(email || '').split('@')[0];
}

/* Wer sich abgemeldet hat, bekommt nichts — auch keine Einzelmail. */
async function abgemeldet() {
  const raus = new Set();
  if (!process.env.BREVO_API_KEY) return raus;
  const liste = Number(process.env.BREVO_WAITLIST_LIST_ID || process.env.BREVO_LIST_ID || 0);
  try {
    for (let seite = 0; seite < 12; seite++) {
      const r = await fetch('https://api.brevo.com/v3/contacts?limit=500&offset=' + (seite * 500)
        + '&modifiedSince=2000-01-01T00:00:00.000Z', { headers: { 'api-key': process.env.BREVO_API_KEY } });
      if (!r.ok) break;
      const j = await r.json().catch(() => null);
      const teil = (j && j.contacts) || [];
      for (const c of teil) {
        const weg = c.emailBlacklisted
          || (liste && Array.isArray(c.listUnsubscribed) && c.listUnsubscribed.indexOf(liste) > -1);
        if (weg && c.email) raus.add(String(c.email).toLowerCase());
      }
      if (teil.length < 500) break;
    }
  } catch (e) { /* im Zweifel lieber ohne diese Liste als gar nicht */ }
  return raus;
}

/* Julias Text ist reiner Text. Leerzeile = neuer Absatz, einfacher
   Umbruch bleibt ein Umbruch, und was wie eine Adresse aussieht, wird
   anklickbar. Mehr Auszeichnung braucht es nicht — und mehr waere ein
   Einfallstor fuer kaputtes HTML in fremden Postfaechern. */
export function textZuHtml(text) {
  return String(text || '').replace(/\r\n/g, '\n').split(/\n{2,}/)
    .map((absatz) => {
      const inhalt = esc(absatz).replace(/\n/g, '<br>')
        .replace(/(https?:\/\/[^\s<]+)/g,
          '<a href="$1" style="color:#0F766E;font-weight:600">$1</a>');
      return '<p style="font-size:16px;line-height:1.65;margin:0 0 14px">' + inhalt + '</p>';
    }).join('\n');
}

/* Derselbe Rahmen wie bei der Willkommens- und der Erinnerungsmail:
   Creme-Hintergrund, Wortmarke oben, weisse Karte, Fusszeile mit
   Impressum und einem Wort dazu, wie man sie wieder loswird. */
export function rundmailHtml(betreff, text, anrede) {
  const titel = esc(betreff || 'Nachricht von deutschoderwas');
  const gruss = anrede
    ? '<p style="font-size:16px;line-height:1.65;margin:0 0 14px">Hallo ' + esc(anrede) + ',</p>'
    : '';
  return `<!DOCTYPE html><html lang="de"><head><meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0"><title>${titel}</title></head>
<body style="margin:0;padding:0;background:#FFF8E0;font-family:'Inter','Segoe UI',system-ui,sans-serif;color:#1A1A1A">
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#FFF8E0;padding:26px 12px"><tr><td align="center">
<table role="presentation" width="560" cellpadding="0" cellspacing="0" style="max-width:560px;width:100%;background:#FFFCF5;border:1px solid #F0E5D8;border-radius:20px;overflow:hidden">
  <tr><td style="padding:24px 30px 0">
    <span style="font-family:'Space Grotesk','Segoe UI',sans-serif;font-weight:700;font-size:20px">deutsch<span style="color:#14B8A6">oderwas</span></span>
  </td></tr>
  <tr><td style="padding:18px 30px 6px">
    ${gruss}
    ${textZuHtml(text)}
  </td></tr>
  <tr><td style="padding:6px 30px 26px">
    <p style="font-size:16px;line-height:1.65;margin:0">Liebe Gr&uuml;&szlig;e<br>Julia</p>
  </td></tr>
  <tr><td style="padding:0 30px 24px">
    <div style="border-top:1px solid #F0E5D8;padding-top:14px;font-size:12px;line-height:1.6;color:#6B7280">
      Du bekommst diese E-Mail, weil du dich in die Warteliste von deutschoderwas eingetragen hast.
      Wenn du keine Nachrichten mehr m&ouml;chtest, antworte kurz mit &bdquo;Abmelden&ldquo; &mdash; dann trage ich dich aus.<br><br>
      deutschoderwas &middot; Julia Karackov &middot; Wiesenstra&szlig;e 38, 58119 Hagen, Deutschland &middot;
      deutschoderwas@gmail.com &middot; USt-ID: DE676677898
    </div>
  </td></tr>
</table>
</td></tr></table>
</body></html>`;
}

/* sb = Supabase-Client mit Service-Key.
   senden = false liefert nur die Bilanz und schickt nichts. */
export async function rundmailLauf(sb, {
  betreff = '', text = '', senden = false, max = MAX,
  mitAnrede = true, premiumUeberspringen = false,
} = {}) {
  const b = String(betreff || '').trim();
  const t = String(text || '').trim();
  if (b.length < 3) return { ok: false, grund: 'betreff_fehlt' };
  if (t.length < 10) return { ok: false, grund: 'text_fehlt' };

  const KENN = kennung(b, t);

  /* 1. Leads mit zustellbarer Adresse, Doppelte zusammengefasst */
  const { data: leads, error } = await sb.from('leads')
    .select('id,name,email').not('email', 'is', null).limit(2000);
  if (error) return { ok: false, grund: 'leads_nicht_lesbar' };

  const nach = new Map();
  let unbrauchbar = 0, doppelt = 0;
  for (const l of (leads || [])) {
    const m = String(l.email || '').trim().toLowerCase();
    if (!m || !GUELTIG.test(m)) { unbrauchbar++; continue; }
    if (nach.has(m)) { doppelt++; continue; }
    nach.set(m, { id: l.id, email: m, vorname: vorname(l.name, m) });
  }

  /* 2. Premium nur raus, wenn Julia das ankreuzt. Sie schreibt den
        Text ja selbst und weiss, ob er auch fuer Mitglieder passt. */
  let premium = 0;
  if (premiumUeberspringen) {
    const { data: profile } = await sb.from('profiles')
      .select('email,tier,credits,is_admin,is_teacher').not('email', 'is', null).limit(5000);
    for (const p of (profile || [])) {
      const m = String(p.email || '').trim().toLowerCase();
      if (!nach.has(m)) continue;
      const istKunde = !!String(p.tier || '') || p.is_admin || p.is_teacher || Number(p.credits || 0) > 0;
      if (istKunde && nach.delete(m)) premium++;
    }
  }

  /* 3. Abgemeldete raus */
  const weg = await abgemeldet();
  let abgemeldete = 0;
  for (const m of [...nach.keys()]) if (weg.has(m)) { nach.delete(m); abgemeldete++; }

  /* 4. Wer genau diesen Text schon hat, bekommt ihn nicht noch einmal */
  const alle = [...nach.keys()];
  const schon = new Set();
  for (let i = 0; i < alle.length; i += 200) {
    const { data } = await sb.from('email_log')
      .select('ref').eq('kind', KENN).in('ref', alle.slice(i, i + 200));
    (data || []).forEach((z) => schon.add(z.ref));
  }
  let bereits = 0;
  for (const m of alle) if (schon.has(m)) { nach.delete(m); bereits++; }

  const grenze = Math.max(0, Math.min(Number(max) || MAX, MAX));
  const offen = [...nach.values()].slice(0, grenze);
  const bilanz = {
    kennung: KENN,
    gefunden: (leads || []).length,
    adresse_unbrauchbar: unbrauchbar,
    doppelt_zusammengefasst: doppelt,
    premium_uebersprungen: premium,
    abgemeldet_uebersprungen: abgemeldete,
    schon_bekommen: bereits,
    offen: offen.length,
  };

  if (!senden) {
    return {
      ok: true, vorschau: true, ...bilanz,
      beispiele: offen.slice(0, 5).map((o) => o.email),
      html: rundmailHtml(b, t, mitAnrede ? (offen[0] ? offen[0].vorname : 'Maria') : ''),
    };
  }
  if (!process.env.BREVO_API_KEY) return { ok: false, grund: 'kein_brevo_schluessel', ...bilanz };

  let geschickt = 0, fehler = 0;
  const schiefgelaufen = [];
  for (const o of offen) {
    /* Erst der Eintrag, dann die Mail: bricht der Lauf mittendrin ab,
       bekommt niemand sie zweimal. Geht sie nicht raus, nehmen wir den
       Eintrag wieder zurueck. */
    const { error: logErr } = await sb.from('email_log').insert({ kind: KENN, ref: o.email });
    if (logErr) continue;
    try {
      const r = await fetch('https://api.brevo.com/v3/smtp/email', {
        method: 'POST',
        headers: { 'api-key': process.env.BREVO_API_KEY, 'Content-Type': 'application/json' },
        body: JSON.stringify({
          sender: { name: 'Julia · deutschoderwas club', email: process.env.BREVO_SENDER_EMAIL || 'deutschlernen@deutschoderwas.de' },
          replyTo: { email: process.env.ADMIN_EMAIL || 'deutschoderwas@gmail.com', name: 'Julia' },
          to: [{ email: o.email, name: o.vorname }],
          subject: b,
          htmlContent: rundmailHtml(b, t, mitAnrede ? o.vorname : ''),
          tags: [KENN],
        }),
      });
      if (r.ok) {
        geschickt++;
        /* Damit der Versand in der Lead-Karte auftaucht wie eine von
           Hand geschriebene Mail. */
        try {
          await sb.from('lead_mails').insert({
            lead_id: o.id, email: o.email, weg: 'rundmail', betreff: b, text: t,
          });
        } catch (e) { /* der Vermerk darf den Versand nicht aufhalten */ }
      } else {
        fehler++;
        const txt = await r.text();
        schiefgelaufen.push({ email: o.email, grund: ('brevo_' + r.status + ' ' + txt).slice(0, 120) });
        await sb.from('email_log').delete().eq('kind', KENN).eq('ref', o.email);
      }
    } catch (e) {
      fehler++;
      schiefgelaufen.push({ email: o.email, grund: String((e && e.message) || e).slice(0, 120) });
      await sb.from('email_log').delete().eq('kind', KENN).eq('ref', o.email);
    }
  }

  return { ok: true, ...bilanz, geschickt, fehler, schiefgelaufen: schiefgelaufen.slice(0, 20) };
}
