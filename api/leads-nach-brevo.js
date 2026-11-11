// ============================================================
//  api/leads-nach-brevo.js — das Netz unter den Adressen
//
//  Julia, 11.11.2026: "was soll ich tun, damit alles einwandfrei
//  funktioniert und keine adresse verloren geht?"
//
//  Die Antwort war unangenehm: Jede Adresse landet zwar sofort in
//  unserer Tabelle leads, und von dort wird sie sofort nach Brevo
//  geschickt — aber wenn dieser eine Versuch scheiterte (Brevo
//  gerade nicht erreichbar, Schluessel abgelaufen, Adresse mit einem
//  Leerzeichen drin), hat es nie jemand nachgeholt und nie jemand
//  erfahren. Die Person stand bei uns und bekam trotzdem nie einen
//  Newsletter.
//
//  Dieser Lauf holt das nach. Er nimmt die Adressen, bei denen
//  leads.brevo_at noch leer ist, schickt sie nach Brevo und schreibt
//  den Zeitpunkt hinein. Was auch beim zweiten Mal nicht klappt,
//  bleibt offen und taucht im Tagesbericht auf.
//
//  Aufruf:
//    GET /api/leads-nach-brevo            holt bis zu 50 nach
//    GET /api/leads-nach-brevo?trocken=1  zaehlt nur, aendert nichts
//    GET /api/leads-nach-brevo?limit=200  groesserer Schwung
// ============================================================
import { createClient } from '@supabase/supabase-js';
import { leadNachBrevo, listeFuer } from './_brevo.js';

export const maxDuration = 120;

export default async function handler(req, res) {
  const geheim = process.env.CRON_SECRET || '';
  const kopf = req.headers['x-intern'] || '';
  const ausAdmin = (req.headers.authorization || '').startsWith('Bearer ');
  if (geheim && kopf !== geheim && !ausAdmin && !(req.query && req.query.key === geheim)) {
    return res.status(401).json({ ok: false, error: 'nicht erlaubt' });
  }
  if (!process.env.SUPABASE_URL || !process.env.SUPABASE_SERVICE_ROLE_KEY) {
    return res.status(200).json({ ok: false, grund: 'supabase fehlt' });
  }
  if (!process.env.BREVO_API_KEY) {
    return res.status(200).json({ ok: false, grund: 'brevo-schluessel fehlt' });
  }

  /* ?probe=1 — fragt Brevo nur nach dem eigenen Konto und gibt zurueck,
     was Brevo antwortet. Nichts wird geschrieben, keine Mail geht raus.

     Gebaut am 11.11.2026, als an einem Abend zwei Dinge gleichzeitig
     kaputt waren: Ein neuer Kaeufer kam nicht durch die Registrierung
     (Supabase meldete beim Bestaetigungsmail 525 "5.7.1 Unauthorized IP
     address"), und die Stunden-Erinnerungen kamen nicht an. Von aussen
     sah man nur "fehler: 20" und musste raten. Mit dieser Zeile sagt
     Brevo selbst, was los ist. */
  if (req.query && req.query.probe) {
    try {
      const r = await fetch('https://api.brevo.com/v3/account', {
        headers: { 'api-key': process.env.BREVO_API_KEY, 'accept': 'application/json' },
      });
      const txt = (await r.text()).slice(0, 500);
      return res.status(200).json({
        ok: r.ok, status: r.status,
        antwort: txt,
        deutung: r.ok ? 'Brevo nimmt uns an.'
          : r.status === 401 ? 'Brevo weist uns ab: Schluessel ungueltig ODER IP-Beschraenkung aktiv (Brevo: SMTP & API → Authorised IPs).'
          : r.status === 403 ? 'Brevo verweigert: meist IP-Beschraenkung oder gesperrtes Konto.'
          : 'Unerwartete Antwort - der Text oben ist Brevos eigene Begruendung.',
      });
    } catch (e) {
      return res.status(200).json({ ok: false, fehler: String((e && e.message) || e) });
    }
  }

  const trocken = String((req.query && req.query.trocken) || '') === '1';
  const grenze = Math.max(1, Math.min(500, Number((req.query && req.query.limit) || 50)));
  const sb = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_SERVICE_ROLE_KEY);

  const { count: offen } = await sb.from('leads')
    .select('id', { count: 'exact', head: true }).is('brevo_at', null);

  if (trocken) {
    const { data: probe } = await sb.from('leads')
      .select('email,quelle,created_at').is('brevo_at', null)
      .order('created_at', { ascending: false }).limit(10);
    return res.status(200).json({
      ok: true, trocken: true, offen: offen || 0,
      naechste: (probe || []).map(l => ({ email: l.email, quelle: l.quelle, liste: listeFuer(l.quelle) })),
    });
  }

  const { data: leute, error } = await sb.from('leads')
    .select('id,email,name,quelle').is('brevo_at', null)
    .order('created_at', { ascending: false }).limit(grenze);
  if (error) return res.status(500).json({ ok: false, error: error.message });

  const jetzt = new Date().toISOString();
  let geschafft = 0;
  const gescheitert = [];
  for (const l of (leute || [])) {
    const gut = await leadNachBrevo({ email: l.email, name: l.name, quelle: l.quelle });
    if (gut) {
      await sb.from('leads').update({ brevo_at: jetzt }).eq('id', l.id);
      geschafft++;
    } else {
      gescheitert.push(l.email);
    }
  }

  return res.status(200).json({
    ok: true,
    angesehen: (leute || []).length,
    nach_brevo: geschafft,
    gescheitert,
    noch_offen: Math.max(0, (offen || 0) - geschafft),
  });
}
