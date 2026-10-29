// ============================================================
//  Die Einladung in die WhatsApp-Gruppe verschicken.
//
//  Julia, 29.10.2026: "Wir müssen allen Premium Schülern jetzt eine
//  Email schicken ... dass sie gerne in unsere gemeinsame WhatsApp
//  Gruppe kommen KÖNNEN, wenn sie wollen." Auf Nachfrage: alle
//  Mitglieder, Premium und Community. Und: erst eine Testmail an sie
//  selbst, dann erst an alle.
//
//  Drei Betriebsarten:
//    ?trocken=1   zählt nur und verschickt nichts
//    ?test=1      genau eine Mail, an Julias eigene Adresse
//    (nichts)     an alle Mitglieder mit tier, status aktiv
//
//  Wer sie schon hatte, bekommt sie nicht noch einmal: der Eintrag in
//  email_log wird VOR dem Senden geschrieben und bei einem Fehlschlag
//  wieder entfernt. Lieber eine Mail zu wenig als zweimal dieselbe.
//  Die Testmail schreibt bewusst KEINEN Eintrag — sonst bekäme Julia
//  die echte Rundmail später nicht mehr mit.
// ============================================================
import { createClient } from '@supabase/supabase-js';
import { gruppeHtml, gruppeBetreff } from './_whatsapp-gruppe-mail.js';

const KENNUNG = 'whatsapp_gruppe_okt26';
const TEST_AN = 'deutschoderwas@gmail.com';
const STUFEN  = ['community', 'premium', 'premiumplus', 'premium_plus'];

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
  const nurTest = String(req.query?.test || '') === '1';
  const sb = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_SERVICE_ROLE_KEY);
  const bericht = { trocken, test: nurTest, gesendet: [], uebersprungen: [], fehler: [] };

  const absender = {
    sender: { name: 'Julia · deutschoderwas club',
              email: process.env.BREVO_SENDER_EMAIL || 'deutschlernen@deutschoderwas.de' },
    replyTo: { email: 'deutschoderwas@gmail.com', name: 'Julia' },
  };

  async function senden(an, name) {
    const r = await fetch('https://api.brevo.com/v3/smtp/email', {
      method: 'POST',
      headers: { 'api-key': process.env.BREVO_API_KEY, 'Content-Type': 'application/json' },
      body: JSON.stringify({
        ...absender,
        to: [{ email: an, name: name || an }],
        subject: gruppeBetreff(),
        htmlContent: gruppeHtml(name, an),
      }),
    });
    if (!r.ok) throw new Error('HTTP ' + r.status + ' ' + (await r.text().catch(() => '')).slice(0, 160));
  }

  // --- Testlauf: eine einzige Mail, kein Eintrag im Protokoll
  if (nurTest) {
    if (!process.env.BREVO_API_KEY) return res.status(200).json({ ok: false, grund: 'kein_brevo_schluessel' });
    try {
      await senden(TEST_AN, 'Julia');
      return res.status(200).json({ ok: true, test: true, an: TEST_AN });
    } catch (e) {
      return res.status(200).json({ ok: false, test: true, fehler: String((e && e.message) || e) });
    }
  }

  try {
    const { data: leute, error } = await sb.from('profiles')
      .select('id,name,email,tier,status,is_admin,is_teacher')
      .in('tier', STUFEN).eq('status', 'aktiv');
    if (error) return res.status(500).json({ ok: false, error: error.message });

    for (const p of (leute || [])) {
      if (!p.email || p.is_admin || p.is_teacher) continue;
      try {
        const { data: schon } = await sb.from('email_log')
          .select('id').eq('user_id', p.id).eq('kind', KENNUNG).maybeSingle();
        if (schon) {
          bericht.uebersprungen.push({ name: p.name || p.email, grund: 'hatte die Mail schon' });
          continue;
        }

        if (trocken) {
          bericht.gesendet.push({ name: p.name || p.email, email: p.email, tier: p.tier,
                                  hinweis: 'Probelauf — nichts verschickt' });
          continue;
        }
        if (!process.env.BREVO_API_KEY) {
          bericht.fehler.push({ name: p.name || p.email, fehler: 'kein Brevo-Schluessel' });
          continue;
        }

        const { data: notiz } = await sb.from('email_log')
          .insert({ user_id: p.id, kind: KENNUNG, ref: KENNUNG })
          .select('id').maybeSingle();
        try {
          await senden(p.email, p.name);
        } catch (e) {
          if (notiz && notiz.id) await sb.from('email_log').delete().eq('id', notiz.id);
          bericht.fehler.push({ name: p.name || p.email, fehler: String((e && e.message) || e) });
          continue;
        }
        bericht.gesendet.push({ name: p.name || p.email, email: p.email, tier: p.tier });
      } catch (e) {
        bericht.fehler.push({ name: p.name || p.email, fehler: String((e && e.message) || e) });
      }
    }
  } catch (e) {
    return res.status(500).json({ ok: false, error: String((e && e.message) || e) });
  }

  return res.status(200).json({
    ok: true,
    anzahl: { gesendet: bericht.gesendet.length, uebersprungen: bericht.uebersprungen.length, fehler: bericht.fehler.length },
    ...bericht,
  });
}
