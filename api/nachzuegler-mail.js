// ============================================================
//  Die Kaufbestaetigung nachschicken, die der tote Webhook verschluckt hat.
//
//  Vom 16. bis zum 19.10.2026 lief /api/stripe-webhook nicht. Wer in
//  diesen Tagen gekauft hat, bekam keine Bestaetigung — und stand erst
//  einmal ohne Mitgliedschaft da.
//
//  Julia, 19.10.2026: "dann kannst du denen die neue Mail schicken,
//  dass wir einen technischen Fehler hatten."
//
//  Wer sie bekommt: Mitglieder, deren Abo zwischen dem 16.10. und dem
//  Ende des Ausfalls begonnen hat — und nur, wenn sie die Mail noch
//  nicht hatten. Der Eintrag in email_log wird VOR dem Senden
//  geschrieben und bei einem Fehlschlag wieder entfernt; lieber eine
//  Mail zu wenig als zweimal dieselbe Entschuldigung.
//
//  ?trocken=1 verschickt nichts und sagt nur, wer drankaeme.
// ============================================================
import { createClient } from '@supabase/supabase-js';
import { nachzueglerHtml, nachzueglerBetreff, nachzueglerDatum } from './_nachzuegler-mail.js';

const KENNUNG = 'nachzuegler_okt26';
const AUSFALL_AB  = '2026-10-16T00:00:00+02:00';
const AUSFALL_BIS = '2026-10-20T00:00:00+02:00';

export default async function handler(req, res) {
  const geheim = process.env.CRON_SECRET || '';
  const kopf = req.headers['x-intern'] || '';
  const ausAdmin = (req.headers.authorization || '').startsWith('Bearer ');
  if (geheim && kopf !== geheim && !ausAdmin) {
    return res.status(401).json({ ok: false, error: 'nicht erlaubt' });
  }
  if (!process.env.SUPABASE_SERVICE_ROLE_KEY) {
    return res.status(200).json({ ok: false, skipped: 'supabase fehlt' });
  }

  const trocken = String(req.query?.trocken || '') === '1';
  const sb = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_SERVICE_ROLE_KEY);
  const bericht = { trocken, gesendet: [], uebersprungen: [], fehler: [] };

  try {
    const { data: leute, error } = await sb.from('profiles')
      .select('id,name,email,tier,abo_start,abo_ende,abo_plan')
      .not('tier', 'is', null)
      .gte('abo_start', AUSFALL_AB)
      .lt('abo_start', AUSFALL_BIS);
    if (error) return res.status(500).json({ ok: false, error: error.message });

    for (const p of (leute || [])) {
      if (!p.email) continue;
      try {
        const { data: schon } = await sb.from('email_log')
          .select('id').eq('user_id', p.id).eq('kind', KENNUNG).maybeSingle();
        if (schon) {
          bericht.uebersprungen.push({ name: p.name || p.email, grund: 'hatte die Mail schon' });
          continue;
        }

        const naechste = nachzueglerDatum(p.abo_ende);
        const gekauft  = nachzueglerDatum(p.abo_start);

        if (trocken) {
          bericht.gesendet.push({
            name: p.name || p.email, email: p.email, tier: p.tier,
            gekauft, naechste_zahlung: naechste, hinweis: 'Probelauf — nichts verschickt',
          });
          continue;
        }

        if (!process.env.BREVO_API_KEY) {
          bericht.fehler.push({ name: p.name || p.email, fehler: 'kein Brevo-Schluessel' });
          continue;
        }

        const { data: notiz } = await sb.from('email_log')
          .insert({ user_id: p.id, kind: KENNUNG, ref: String(p.abo_start || '').slice(0, 10) })
          .select('id').maybeSingle();

        const r = await fetch('https://api.brevo.com/v3/smtp/email', {
          method: 'POST',
          headers: { 'api-key': process.env.BREVO_API_KEY, 'Content-Type': 'application/json' },
          body: JSON.stringify({
            sender: { name: 'Julia · deutschoderwas', email: process.env.BREVO_SENDER_EMAIL || 'deutschlernen@deutschoderwas.de' },
            replyTo: { email: 'deutschoderwas@gmail.com', name: 'Julia' },
            to: [{ email: p.email, name: p.name || p.email }],
            subject: nachzueglerBetreff(),
            htmlContent: nachzueglerHtml(p.name, p.tier, gekauft, naechste),
          }),
        });
        if (!r.ok) {
          if (notiz && notiz.id) await sb.from('email_log').delete().eq('id', notiz.id);
          bericht.fehler.push({ name: p.name || p.email, fehler: 'HTTP ' + r.status });
          continue;
        }
        bericht.gesendet.push({ name: p.name || p.email, email: p.email, tier: p.tier,
                                gekauft, naechste_zahlung: naechste });
      } catch (e) {
        bericht.fehler.push({ name: p.name || p.email, fehler: String((e && e.message) || e) });
      }
    }
  } catch (e) {
    return res.status(500).json({ ok: false, error: String((e && e.message) || e) });
  }

  return res.status(200).json({ ok: true, ...bericht });
}
