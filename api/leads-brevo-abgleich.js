// ============================================================
//  deutschoderwas club — kein Lead ohne Brevo-Liste
//
//  Der Fehler, den das hier aufraeumt: Beim Anlegen des Brevo-Kontakts
//  wurde die Liste aus BREVO_WAITLIST_LIST_ID gelesen. Die ist nicht
//  gesetzt, also wurde der Kontakt OHNE Liste angelegt — in Brevo
//  vorhanden, mit Vornamen, aber von keiner Kampagne erreichbar.
//  Betroffen waren vor allem die Leads aus dem Google-Formular: die
//  laufen nicht ueber api/waitlist.js, sondern werden erst vom
//  naechtlichen Nachzuegler-Dienst als Kontakt angelegt.
//
//  Der Standard steht jetzt im Code (Liste 14, "Sprechclub
//  Interessenten"), damit das bei neuen Leads nicht wieder passiert.
//  Dieser Dienst holt die Altlast nach und bleibt danach als
//  Sicherheitsnetz: Was aus irgendeinem Grund nicht in der Liste
//  landet, wird in der naechsten Runde nachgetragen.
//
//  Geplant mit pg_cron:
//    40 * * * *  ->  POST /api/leads-brevo-abgleich
//
//  Zwei Dinge macht er bewusst NICHT:
//  - Niemanden aus einer Liste entfernen. Er traegt nur nach.
//  - Abgemeldete nicht in die Liste zurueckholen. Wer sich abgemeldet
//    hat, bleibt draussen; Brevo wuerde ihm zwar ohnehin nichts mehr
//    schicken, aber die Liste soll ehrlich sein.
//
//  leads.brevo_liste_at haelt fest, wer schon geprueft ist — sonst
//  liefe jede Runde wieder ueber alle 186.
// ============================================================
import { createClient } from '@supabase/supabase-js';

const LISTE = Number(process.env.BREVO_WAITLIST_LIST_ID || process.env.BREVO_LIST_ID || 14);
const PRO_RUNDE = Number(process.env.BREVO_ABGLEICH_PRO_RUNDE || 60);

export default async function handler(req, res) {
  if (!process.env.BREVO_API_KEY) return res.status(200).json({ ok: false, grund: 'BREVO_API_KEY fehlt' });
  if (!process.env.SUPABASE_URL || !process.env.SUPABASE_SERVICE_ROLE_KEY) {
    return res.status(500).json({ error: 'supabase_env_missing' });
  }
  const sb = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_SERVICE_ROLE_KEY);
  const kopf = { 'api-key': process.env.BREVO_API_KEY, 'Content-Type': 'application/json' };

  const { data: leads, error } = await sb.from('leads')
    .select('id,name,email,quelle,niveau,whatsapp')
    .is('brevo_liste_at', null)
    .order('created_at', { ascending: false })
    .limit(PRO_RUNDE);
  if (error) return res.status(500).json({ error: 'leads_nicht_lesbar', detail: error.message });
  if (!leads || !leads.length) return res.status(200).json({ ok: true, offen: 0, nachgetragen: 0 });

  let nachgetragen = 0, schon_drin = 0, abgemeldet = 0, fehler = 0;
  const fertig = [];

  for (const l of leads) {
    const email = String(l.email || '').trim().toLowerCase();
    if (!email) { fertig.push(l.id); continue; }

    let kontakt = null;
    try {
      const r = await fetch('https://api.brevo.com/v3/contacts/' + encodeURIComponent(email), { headers: kopf });
      if (r.ok) kontakt = await r.json();
      else if (r.status !== 404) { fehler++; continue; }   // 429 o.ae.: beim naechsten Lauf nochmal
    } catch (e) { fehler++; continue; }

    /* Wer sich abgemeldet hat, bleibt draussen. */
    if (kontakt && kontakt.emailBlacklisted) { abgemeldet++; fertig.push(l.id); continue; }
    if (kontakt && Array.isArray(kontakt.listIds) && kontakt.listIds.includes(LISTE)) {
      schon_drin++; fertig.push(l.id); continue;
    }

    const name = String(l.name || '').trim();
    const vorname = (name.split(/\s+/)[0] || name) || email.split('@')[0];
    try {
      const r = await fetch('https://api.brevo.com/v3/contacts', {
        method: 'POST', headers: kopf,
        body: JSON.stringify({
          email,
          updateEnabled: true,            // vorhandene Kontakte ergaenzen statt scheitern
          listIds: [LISTE],               // fuegt hinzu, entfernt nichts
          attributes: Object.assign(
            { VORNAME: vorname, NAME: name || vorname, QUELLE: String(l.quelle || 'warteliste') },
            l.niveau ? { NIVEAU: l.niveau } : {},
            l.whatsapp ? { WHATSAPP: String(l.whatsapp).replace(/\D/g, '') } : {}
          ),
        }),
      });
      if (r.ok || r.status === 204) { nachgetragen++; fertig.push(l.id); }
      else fehler++;
    } catch (e) { fehler++; }
  }

  if (fertig.length) {
    const { error: uErr } = await sb.from('leads')
      .update({ brevo_liste_at: new Date().toISOString() }).in('id', fertig);
    /* Supabase wirft bei einem abgelehnten Schreibvorgang nicht, es gibt
       den Fehler zurueck. Ohne diese Zeile liefe der Abgleich still in
       einer Endlosschleife ueber dieselben Leads. */
    if (uErr) return res.status(200).json({ ok: false, grund: 'merken_fehlgeschlagen', detail: uErr.message, nachgetragen });
  }

  const { count: offen } = await sb.from('leads')
    .select('id', { count: 'exact', head: true }).is('brevo_liste_at', null);

  return res.status(200).json({ ok: true, liste: LISTE, geprueft: leads.length, nachgetragen, schon_drin, abgemeldet, fehler, offen: offen || 0 });
}
