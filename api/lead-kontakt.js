// ============================================================
//  deutschoderwas club — Leads anschreiben, direkt aus dem Admin
//
//  Drei Dinge, die Julia bisher von Hand machen musste:
//    aktion:'brevo'     -> wer steht in der Brevo-Warteliste, wer nicht
//    aktion:'mail'      -> einer Person die Mail schicken
//    aktion:'mail-alle' -> allen Offenen aus der Auswahl die Mail schicken
//
//  Verschickt wird ueber denselben Weg wie die Automatik
//  (willkommenSenden): erst in die Brevo-Liste, dann die Mail, dann
//  mail_at setzen. email_log verhindert, dass jemand sie zweimal
//  bekommt — auch wenn hier zweimal geklickt wird.
// ============================================================
import { createClient } from '@supabase/supabase-js';
import { willkommenSenden } from './_lead-willkommen-mail.js';

const MAX_ALLE = 60;

async function istAdmin(sb, token) {
  if (!token) return false;
  const { data: { user } = {}, error } = await sb.auth.getUser(token);
  if (error || !user) return false;
  const { data: me } = await sb.from('profiles').select('is_admin').eq('id', user.id).maybeSingle();
  return !!(me && me.is_admin);
}

/* Holt die Warteliste aus Brevo, Seite fuer Seite. 500 ist das
   Maximum pro Aufruf; mehr als 4000 Menschen erwarten wir nicht. */
async function brevoListeLesen() {
  const liste = Number(process.env.BREVO_WAITLIST_LIST_ID || process.env.BREVO_LIST_ID || 0);
  if (!liste || !process.env.BREVO_API_KEY) return null;
  const drin = [], abgemeldet = [];
  for (let seite = 0; seite < 8; seite++) {
    const r = await fetch('https://api.brevo.com/v3/contacts/lists/' + liste + '/contacts?limit=500&offset=' + (seite * 500), {
      headers: { 'api-key': process.env.BREVO_API_KEY },
    });
    if (!r.ok) break;
    const j = await r.json().catch(() => null);
    const teil = (j && j.contacts) || [];
    for (const c of teil) {
      const mail = String(c.email || '').toLowerCase();
      if (!mail) continue;
      const weg = c.emailBlacklisted || (Array.isArray(c.listUnsubscribed) && c.listUnsubscribed.indexOf(liste) > -1);
      (weg ? abgemeldet : drin).push(mail);
    }
    if (teil.length < 500) break;
  }
  return { liste, drin, abgemeldet };
}

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'method_not_allowed' });
  if (!process.env.SUPABASE_URL || !process.env.SUPABASE_SERVICE_ROLE_KEY) {
    return res.status(500).json({ error: 'supabase_env_missing' });
  }
  const sb = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_SERVICE_ROLE_KEY);
  const token = (req.headers.authorization || '').replace('Bearer ', '');
  if (!(await istAdmin(sb, token))) return res.status(403).json({ error: 'not_admin' });

  const body = req.body || {};
  const aktion = String(body.aktion || '').trim();

  if (aktion === 'brevo') {
    const r = await brevoListeLesen();
    if (!r) return res.status(200).json({ ok: false, grund: 'kein_brevo' });
    return res.status(200).json({ ok: true, ...r });
  }

  if (aktion === 'mail' || aktion === 'mail-alle') {
    let adressen = aktion === 'mail'
      ? [String(body.email || '').trim().toLowerCase()]
      : (Array.isArray(body.emails) ? body.emails : []).map(e => String(e || '').trim().toLowerCase());
    adressen = [...new Set(adressen.filter(e => e && e.includes('@')))].slice(0, MAX_ALLE);
    if (!adressen.length) return res.status(400).json({ error: 'keine_adresse' });

    const { data: leads } = await sb.from('leads')
      .select('id,name,email,niveau,whatsapp,quelle,mail_at')
      .in('email', adressen);

    /* Die Adresse kann in der Liste anders geschrieben stehen (Grossbuchstaben).
       Deshalb ueber kleingeschrieben zuordnen und notfalls einzeln nachsehen. */
    const nach = new Map();
    for (const l of (leads || [])) nach.set(String(l.email || '').toLowerCase(), l);
    for (const a of adressen) {
      if (nach.has(a)) continue;
      const { data: d } = await sb.from('leads').select('id,name,email,niveau,whatsapp,quelle,mail_at').ilike('email', a).limit(1);
      if (d && d[0]) nach.set(a, d[0]);
    }

    const ergebnis = [];
    for (const a of adressen) {
      const lead = nach.get(a);
      if (!lead) { ergebnis.push({ email: a, ok: false, grund: 'nicht_gefunden' }); continue; }
      const r = await willkommenSenden(sb, lead);
      ergebnis.push({ email: a, ...r });
    }
    const geschickt = ergebnis.filter(r => r.ok).length;
    return res.status(200).json({ ok: true, geschickt, gesamt: adressen.length, ergebnis });
  }

  /* ---------- Eine persoenliche Mail, von Hand geschrieben ----------
     Bisher oeffnete der Admin nur einen Entwurf im eigenen Mail-
     programm. Was dann wirklich rausging — und ob ueberhaupt — stand
     nirgends; die Notiz behauptete trotzdem "persoenlich geschrieben".
     Auf diesem Weg geht die Mail ueber dieselbe Leitung wie die
     Willkommensmail, und der Wortlaut bleibt in lead_mails nachlesbar. */
  if (aktion === 'frei') {
    const email = String(body.email || '').trim().toLowerCase();
    const betreff = String(body.betreff || '').trim().slice(0, 200);
    const text = String(body.text || '').trim().slice(0, 8000);
    if (!email || !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) return res.status(400).json({ error: 'keine_adresse' });
    if (!betreff || !text) return res.status(400).json({ error: 'leer' });
    if (!process.env.BREVO_API_KEY) return res.status(200).json({ ok: false, grund: 'kein_brevo_schluessel' });

    const { data: lead } = await sb.from('leads').select('id,name,email').ilike('email', email).limit(1).maybeSingle();
    const name = String((lead && lead.name) || '').trim();

    try {
      const r = await fetch('https://api.brevo.com/v3/smtp/email', {
        method: 'POST',
        headers: { 'api-key': process.env.BREVO_API_KEY, 'Content-Type': 'application/json' },
        body: JSON.stringify({
          sender: { name: 'Julia \u00b7 deutschoderwas club', email: process.env.BREVO_SENDER_EMAIL || 'deutschlernen@deutschoderwas.de' },
          replyTo: { email: process.env.ADMIN_EMAIL || 'deutschoderwas@gmail.com', name: 'Julia' },
          to: [{ email, name: name.slice(0, 120) || email }],
          subject: betreff,
          htmlContent: briefHtml(text),
          textContent: text,
        }),
      });
      if (!r.ok) {
        const t = await r.text();
        await sb.from('lead_mails').insert({ lead_id: (lead && lead.id) || null, email, betreff, text, weg: 'plattform', fehler: t.slice(0, 300) });
        return res.status(200).json({ ok: false, grund: 'brevo_' + r.status, detail: t.slice(0, 200) });
      }
    } catch (e) {
      await sb.from('lead_mails').insert({ lead_id: (lead && lead.id) || null, email, betreff, text, weg: 'plattform', fehler: String(e && e.message || e).slice(0, 300) });
      return res.status(200).json({ ok: false, grund: 'netzwerk' });
    }

    await sb.from('lead_mails').insert({ lead_id: (lead && lead.id) || null, email, betreff, text, weg: 'plattform' });
    try { await sb.from('email_log').insert({ kind: 'lead_persoenlich', ref: (email + '|' + new Date().toISOString()).slice(0, 180) }); } catch (e) {}
    return res.status(200).json({ ok: true });
  }

  /* Wer lieber im eigenen Programm schreibt, haelt wenigstens fest,
     womit er angefangen hat. "Entwurf geoeffnet" ist ehrlicher als
     "geschickt" — ob abgeschickt wurde, weiss nur Julias Postfach. */
  if (aktion === 'notiert') {
    const email = String(body.email || '').trim().toLowerCase();
    if (!email) return res.status(400).json({ error: 'keine_adresse' });
    const { data: lead } = await sb.from('leads').select('id').ilike('email', email).limit(1).maybeSingle();
    await sb.from('lead_mails').insert({
      lead_id: (lead && lead.id) || null, email,
      betreff: String(body.betreff || '').slice(0, 200),
      text: String(body.text || '').slice(0, 8000),
      weg: 'entwurf',
    });
    return res.status(200).json({ ok: true });
  }

  /* Was an diese Adresse schon geschrieben wurde */
  if (aktion === 'verlauf') {
    const email = String(body.email || '').trim().toLowerCase();
    if (!email) return res.status(400).json({ error: 'keine_adresse' });
    const { data } = await sb.from('lead_mails')
      .select('betreff,text,weg,fehler,gesendet_at')
      .ilike('email', email)
      .order('gesendet_at', { ascending: false })
      .limit(20);
    return res.status(200).json({ ok: true, mails: data || [] });
  }

  return res.status(400).json({ error: 'unbekannte_aktion' });
}

/* Ein schlichter Briefbogen in den Farben der Marke. Der Text kommt
   von Hand, also bleibt er Absatz fuer Absatz so stehen, wie er
   geschrieben wurde — nichts wird umformatiert. */
function briefHtml(text) {
  const sicher = String(text || '')
    .replace(/[<>&]/g, (c) => ({ '<': '&lt;', '>': '&gt;', '&': '&amp;' }[c]));
  const absaetze = sicher.split(/\n{2,}/).map(
    (a) => '<p style="font-size:16px;line-height:1.65;margin:0 0 16px">' + a.replace(/\n/g, '<br>') + '</p>'
  ).join('');
  return `<!DOCTYPE html><html lang="de"><head><meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0"></head>
<body style="margin:0;padding:0;background:#FFF8E0;font-family:'Inter','Segoe UI',system-ui,sans-serif;color:#1A1A1A">
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#FFF8E0;padding:24px 12px"><tr><td align="center">
<table role="presentation" width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;background:#FFFCF5;border:1px solid #F0E5D8;border-radius:20px;overflow:hidden">
  <tr><td style="padding:24px 32px 8px">
    <span style="font-family:'Space Grotesk','Segoe UI',sans-serif;font-weight:700;font-size:22px;color:#1A1A1A">deutsch<span style="color:#35AFD0">oderwas</span></span>
    <span style="display:block;font-size:12px;color:#6B7280;margin-top:2px">Deutsch lernen mit Spa&szlig; &amp; Leichtigkeit</span>
  </td></tr>
  <tr><td style="padding:0 32px"><div style="height:3px;background:linear-gradient(135deg,#7ED8EA,#35AFD0);border-radius:999px"></div></td></tr>
  <tr><td style="padding:24px 32px 8px">${absaetze}</td></tr>
  <tr><td style="padding:8px 32px 28px;border-top:1px solid #F0E5D8">
    <p style="font-size:12.5px;line-height:1.6;color:#6B7280;margin:14px 0 0">
      deutschoderwas &middot; Julia Karackov &middot; Wiesenstra&szlig;e 38, 58119 Hagen &middot;
      <a href="mailto:deutschoderwas@gmail.com" style="color:#0F766E">deutschoderwas@gmail.com</a>
    </p>
  </td></tr>
</table></td></tr></table></body></html>`;
}
