// ============================================================
//  deutschoderwas club — die Erinnerung an alle, die noch warten
//
//  Julia: "alles, die noch KEIN Premium sind aus der Leadsliste —
//  denen nochmal eine Mail. Die, die Premium haben, NICHTS schicken."
//
//  Wer sie bekommt, entscheidet diese Datei und nicht eine Liste in
//  Brevo: dort stehen in "Sprechclub Interessenten" 277 und in der
//  Warteliste 720 Menschen, in Julias Lead-Liste aber 161. Eine
//  Kampagne ueber die Brevo-Liste haette Hunderte getroffen, die
//  nicht gemeint waren.
//
//  Zielgruppe, der Reihe nach ausgesiebt:
//    1. alle leads mit einer zustellbaren Adresse
//    2. minus alle, deren Adresse zu einem Profil mit tier='premium'
//       gehoert  — die bekommen nichts
//    3. minus alle, die sich bei Brevo abgemeldet haben
//    4. minus alle, die diese Mail schon haben (email_log)
//
//  POST { aktion:'vorschau' }  -> zaehlt nur, schickt nichts
//  POST { aktion:'senden' }    -> schickt
//  Beides nur fuer Julia (is_admin).
// ============================================================
import { createClient } from '@supabase/supabase-js';
import { erinnerungHtml, tageBisEnde } from './_lead-erinnerung-mail.js';

const KENNUNG = 'lead_erinnerung_okt26';   // ein Mensch, eine Mail
const MAX = 400;

async function istAdmin(sb, token) {
  if (!token) return false;
  const { data: { user } = {}, error } = await sb.auth.getUser(token);
  if (error || !user) return false;
  const { data: me } = await sb.from('profiles').select('is_admin').eq('id', user.id).maybeSingle();
  return !!(me && me.is_admin);
}

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

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'nur_post' });
  if (!process.env.SUPABASE_URL || !process.env.SUPABASE_SERVICE_ROLE_KEY) {
    return res.status(500).json({ error: 'supabase_env_missing' });
  }
  const sb = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_SERVICE_ROLE_KEY);
  const token = (req.headers.authorization || '').replace(/^Bearer\s+/i, '');
  if (!(await istAdmin(sb, token))) return res.status(403).json({ error: 'not_admin' });

  const body = (typeof req.body === 'string' ? JSON.parse(req.body || '{}') : (req.body || {}));
  const senden = String(body.aktion || '') === 'senden';

  /* 1. Leads mit zustellbarer Adresse */
  const { data: leads, error } = await sb.from('leads')
    .select('id,name,email')
    .not('email', 'is', null)
    .limit(2000);
  if (error) return res.status(200).json({ ok: false, grund: 'leads_nicht_lesbar' });

  const gueltig = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;
  const nach = new Map();
  for (const l of (leads || [])) {
    const m = String(l.email || '').trim().toLowerCase();
    if (!m || !gueltig.test(m) || nach.has(m)) continue;
    nach.set(m, { id: l.id, email: m, vorname: vorname(l.name, m) });
  }

  /* 2. Premium-Mitglieder raus */
  const { data: profile } = await sb.from('profiles').select('email,tier').not('email', 'is', null).limit(5000);
  let premium = 0;
  for (const p of (profile || [])) {
    if (p.tier !== 'premium') continue;
    const m = String(p.email || '').trim().toLowerCase();
    if (nach.delete(m)) premium++;
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

  const offen = [...nach.values()].slice(0, MAX);
  const bilanz = { gefunden: (leads || []).length, premium_uebersprungen: premium, abgemeldet_uebersprungen: abgemeldete, schon_bekommen: bereits, offen: offen.length, tage_bis_ende: tageBisEnde() };

  if (!senden) return res.status(200).json({ ok: true, vorschau: true, ...bilanz, beispiele: offen.slice(0, 5).map((o) => o.email) });
  if (!process.env.BREVO_API_KEY) return res.status(200).json({ ok: false, grund: 'kein_brevo_schluessel', ...bilanz });

  const tage = tageBisEnde();
  const betreff = 'Noch ' + tage + ' Tage — und ich würde mich freuen, dich dabei zu haben';
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
          htmlContent: erinnerungHtml(o.vorname),
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

  return res.status(200).json({ ok: true, ...bilanz, geschickt, fehler, schiefgelaufen: schiefgelaufen.slice(0, 20) });
}
