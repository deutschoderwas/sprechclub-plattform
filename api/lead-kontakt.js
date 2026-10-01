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

  return res.status(400).json({ error: 'unbekannte_aktion' });
}
