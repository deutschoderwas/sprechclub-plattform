// ============================================================
//  Der Lauf hinter der Erinnerungsmail — einmal geschrieben,
//  von zwei Stellen benutzt:
//
//    api/lead-erinnerung.js  — Julias Knopf im Admin-Bereich
//    api/mail-auftraege.js   — die Auftragstabelle, damit Claude
//                              den Versand anstossen kann, ohne
//                              einen Schluessel in der Hand zu haben
//
//  Julia, 16.10.2026: "was soll das ueberhaupt mit dem verschicken
//  im admin bereich — mach du das fuer mich, wenn ich dich darum
//  bitte." Genau dafuer liegt die Logik jetzt hier und nicht mehr
//  im Endpunkt.
//
//  Zielgruppe, der Reihe nach ausgesiebt:
//    1. alle leads mit einer zustellbaren Adresse
//    2. minus Premium, Lehrkraefte, Admins, alte Schueler mit
//       Guthaben — Community bleibt drin, mit eigener Anrede
//    3. minus alle, die sich bei Brevo abgemeldet haben
//    4. minus alle, die diese Mail schon haben (email_log)
// ============================================================
import { erinnerungHtml, tageBisEnde, istLetzterTag } from './_lead-erinnerung-mail.js';

/* Zweite Welle, 15.10.2026. Eigene Kennung, weil die erste
   ('lead_erinnerung_okt26', 138 Mails am 5. Oktober) sonst alle
   aussperren wuerde, die genau jetzt an die Frist erinnert werden
   sollen. Innerhalb dieser Welle bleibt es bei: ein Mensch, eine Mail. */
export const KENNUNG = 'lead_frist_okt26';
export const MAX = 400;

/* Wer sich abgemeldet hat, bekommt nichts — auch keine Mail, die
   technisch als Einzelmail verschickt wird. */
async function abgemeldet() {
  const raus = new Set();
  if (!process.env.BREVO_API_KEY) return raus;
  const liste = Number(process.env.BREVO_WAITLIST_LIST_ID || process.env.BREVO_LIST_ID || 0);
  try {
    for (let seite = 0; seite < 12; seite++) {
      const r = await fetch('https://api.brevo.com/v3/contacts?limit=500&offset=' + (seite * 500) + '&modifiedSince=2000-01-01T00:00:00.000Z', {
        headers: { 'api-key': process.env.BREVO_API_KEY },
      });
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

function vorname(name, email) {
  const n = String(name || '').trim();
  return (n.split(/\s+/)[0] || '') || String(email || '').split('@')[0];
}

/* sb = Supabase-Client mit Service-Key.
   senden = false liefert nur die Bilanz, schickt nichts. */
export async function erinnerungLauf(sb, { senden = false, max = MAX } = {}) {
  /* 1. Leads mit zustellbarer Adresse */
  const { data: leads, error } = await sb.from('leads')
    .select('id,name,email')
    .not('email', 'is', null)
    .limit(2000);
  if (error) return { ok: false, grund: 'leads_nicht_lesbar' };

  const gueltig = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;
  const nach = new Map();
  for (const l of (leads || [])) {
    const m = String(l.email || '').trim().toLowerCase();
    if (!m || !gueltig.test(m) || nach.has(m)) continue;
    nach.set(m, { id: l.id, email: m, vorname: vorname(l.name, m) });
  }

  /* 2. Premium raus, Community bleibt drin — aber mit eigener Anrede.
     Julia, 16.10.2026, auf die Frage, ob zahlende Community-Mitglieder
     die Mail mitbekommen sollen: "Ja, als Upgrade-Anstoss". Sie haben
     ein Abo, aber keinen Sprechclub; fuer sie ist die Frist genauso
     interessant. Ihnen "danke, dass du dich eingetragen hast" zu
     schreiben, waere allerdings peinlich — deshalb bekommen sie in der
     Mail eine eigene erste Zeile (art='community').
     Raus fliegen: Premium und Premium Plus (haben schon alles),
     Lehrkraefte, Admins und alte Schueler mit Guthaben. */
  const { data: profile } = await sb.from('profiles')
    .select('email,tier,credits,is_admin,is_teacher').not('email', 'is', null).limit(5000);
  let premium = 0, communityDabei = 0;
  for (const p of (profile || [])) {
    const m = String(p.email || '').trim().toLowerCase();
    if (!nach.has(m)) continue;
    const tier = String(p.tier || '');
    if (tier === 'community') {
      const e = nach.get(m); e.art = 'community'; nach.set(m, e); communityDabei++;
      continue;
    }
    const istKunde = !!tier || p.is_admin || p.is_teacher || Number(p.credits || 0) > 0;
    if (istKunde && nach.delete(m)) premium++;
  }

  /* 3. Abgemeldete raus */
  const weg = await abgemeldet();
  let abgemeldete = 0;
  for (const m of [...nach.keys()]) if (weg.has(m)) { nach.delete(m); abgemeldete++; }

  /* 4. Wer sie schon hat, bekommt keine zweite */
  const alle = [...nach.keys()];
  const schon = new Set();
  for (let i = 0; i < alle.length; i += 200) {
    const { data } = await sb.from('email_log').select('ref').eq('kind', KENNUNG).in('ref', alle.slice(i, i + 200));
    (data || []).forEach((z) => schon.add(z.ref));
  }
  let bereits = 0;
  for (const m of alle) if (schon.has(m)) { nach.delete(m); bereits++; }

  const grenze = Math.max(0, Math.min(Number(max) || MAX, MAX));
  const offen = [...nach.values()].slice(0, grenze);
  const bilanz = {
    gefunden: (leads || []).length,
    premium_uebersprungen: premium,
    community_dabei: communityDabei,
    abgemeldet_uebersprungen: abgemeldete,
    schon_bekommen: bereits,
    offen: offen.length,
    tage_bis_ende: tageBisEnde(),
  };

  if (!senden) return { ok: true, vorschau: true, ...bilanz, beispiele: offen.slice(0, 5).map((o) => o.email) };
  if (!process.env.BREVO_API_KEY) return { ok: false, grund: 'kein_brevo_schluessel', ...bilanz };

  const tage = tageBisEnde();
  const betreff = istLetzterTag()
    ? 'Heute um Mitternacht schließen die Türen'
    : tage === 1
      ? 'Nur noch morgen: der Rabatt läuft am 31. Oktober aus'
      : 'Noch ' + tage + ' Tage — danach ist der Rabatt weg';
  let geschickt = 0, fehler = 0;
  const schiefgelaufen = [];
  for (const o of offen) {
    /* Erst den Eintrag, dann die Mail: faellt der Lauf mittendrin aus,
       bekommt niemand sie zweimal. Geht die Mail nicht raus, nehmen
       wir den Eintrag wieder zurueck. */
    const { error: logErr } = await sb.from('email_log').insert({ kind: KENNUNG, ref: o.email });
    if (logErr) continue;
    try {
      const r = await fetch('https://api.brevo.com/v3/smtp/email', {
        method: 'POST',
        headers: { 'api-key': process.env.BREVO_API_KEY, 'Content-Type': 'application/json' },
        body: JSON.stringify({
          sender: { name: 'Julia · deutschoderwas club', email: process.env.BREVO_SENDER_EMAIL || 'deutschlernen@deutschoderwas.de' },
          replyTo: { email: process.env.ADMIN_EMAIL || 'deutschoderwas@gmail.com', name: 'Julia' },
          to: [{ email: o.email, name: o.vorname }],
          subject: betreff,
          htmlContent: erinnerungHtml(o.vorname, Date.now(), o.art || 'lead'),
          tags: [KENNUNG],
        }),
      });
      if (r.ok) {
        geschickt++;
        /* email_log haelt nur fest, DASS sie raus ist. Damit Julia im
           Lead-Bereich sieht, wann und mit welchem Betreff, kommt der
           Versand auch in lead_mails — dieselbe Ablage wie bei einer
           von Hand geschriebenen Mail. */
        try {
          await sb.from('lead_mails').insert({
            lead_id: o.id, email: o.email, weg: 'erinnerung', betreff: betreff,
            text: 'Erinnerung an alle ohne Premium, automatisch verschickt.\n\n'
                + 'Inhalt: die Geschichte vom Schweigen im Alltag, was der Club bietet, '
                + 'Frühbucherpreis 39 € im Jahresabo / 49 € monatlich bis zum 31. Oktober '
                + '(damals noch ' + tage + ' Tage), und der Hinweis, die Nachricht zu '
                + 'ignorieren, falls man sich inzwischen angemeldet hat.',
          });
        } catch (e) { /* der Vermerk darf den Versand nicht aufhalten */ }
      }
      else {
        fehler++;
        const t = await r.text();
        schiefgelaufen.push({ email: o.email, grund: ('brevo_' + r.status + ' ' + t).slice(0, 120) });
        await sb.from('email_log').delete().eq('kind', KENNUNG).eq('ref', o.email);
      }
    } catch (e) {
      fehler++;
      schiefgelaufen.push({ email: o.email, grund: String(e && e.message || e).slice(0, 120) });
      await sb.from('email_log').delete().eq('kind', KENNUNG).eq('ref', o.email);
    }
  }

  return { ok: true, ...bilanz, geschickt, fehler, schiefgelaufen: schiefgelaufen.slice(0, 20) };
}
