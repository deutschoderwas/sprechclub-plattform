// ============================================================
//  deutschoderwas club — kein Lead bleibt liegen
//
//  Die Willkommensmail geht normalerweise sofort raus, direkt beim
//  Eintragen (api/waitlist.js). Dieser Dienst ist das Netz darunter:
//  Er sieht alle zehn Minuten nach, ob jemand durchgerutscht ist —
//  weil Brevo kurz nicht erreichbar war, weil der Eintrag von Hand
//  kam oder aus dem Google-Formular — und schickt sie nach.
//
//  Geplant mit pg_cron:
//    */10 * * * *  ->  POST /api/lead-willkommen
//
//  email_log (kind:'lead_willkommen', ref:<E-Mail>) sorgt dafuer,
//  dass niemand sie zweimal bekommt.
// ============================================================
import { createClient } from '@supabase/supabase-js';
import { willkommenSenden } from './_lead-willkommen-mail.js';

/* Nur die letzten 14 Tage. Wer seit einem Monat in der Liste steht,
   soll nicht ploetzlich eine "Willkommen"-Mail bekommen. */
const TAGE = Number(process.env.LEAD_MAIL_TAGE || 14);

export default async function handler(req, res) {
  if (!process.env.BREVO_API_KEY) return res.status(200).json({ ok: false, skipped: 'BREVO_API_KEY fehlt' });
  if (!process.env.SUPABASE_URL || !process.env.SUPABASE_SERVICE_ROLE_KEY) {
    return res.status(500).json({ error: 'supabase_env_missing' });
  }
  const sb = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_SERVICE_ROLE_KEY);
  const ab = new Date(Date.now() - TAGE * 86400000).toISOString();

  /* is('mail_at', null) ist der wichtigste Filter hier: wer die
     Kampagne schon bekommen hat, bekommt die Willkommensmail nicht
     hinterher. Ohne ihn gingen am 01.10. 73 Mails doppelt raus. */
  const { data: leads, error } = await sb.from('leads')
    .select('id,name,email,created_at')
    .is('mail_at', null)
    .gte('created_at', ab)
    .order('created_at', { ascending: false })
    .limit(300);
  if (error) return res.status(200).json({ ok: false, grund: 'leads_nicht_lesbar' });
  if (!leads || !leads.length) return res.status(200).json({ ok: true, geschickt: 0 });

  /* Erst nachsehen, wer schon eine hat — ein Aufruf statt einer Abfrage
     pro Person. */
  const adressen = [...new Set(leads.map(l => String(l.email || '').trim().toLowerCase()).filter(Boolean))];
  const { data: schon } = await sb.from('email_log')
    .select('ref').eq('kind', 'lead_willkommen').in('ref', adressen);
  const hat = new Set((schon || []).map(z => z.ref));

  let geschickt = 0, fehler = 0;
  const gesehen = new Set();
  for (const l of leads) {
    const mail = String(l.email || '').trim().toLowerCase();
    if (!mail || hat.has(mail) || gesehen.has(mail)) continue;
    gesehen.add(mail);
    const r = await willkommenSenden(sb, l);
    if (r.ok) geschickt++; else if (r.grund !== 'schon_geschickt') fehler++;
  }
  return res.status(200).json({ ok: true, geprueft: leads.length, geschickt, fehler });
}
