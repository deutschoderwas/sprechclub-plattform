// ============================================================
//  Die Aktualisierung "Es gibt jetzt mehr Stunden" verschicken.
//
//  Julia, 1.11.2026: "Bitte schicke den Premium-Mitgliedern die
//  Aktualisierung, dass wir jetzt mehr Unterricht haben, und schick
//  den neuen Wochenplan."
//
//  Der Plan in der Mail kommt aus der Datenbank, nicht aus dem Kopf:
//  je Wochentag der Fokus und die Uhrzeiten, gerechnet aus allen
//  kommenden Stunden. Stimmt der Plan morgen nicht mehr, stimmt auch
//  die Mail nicht mehr — aber sie war dann wenigstens am Tag des
//  Versands richtig, und niemand hat eine Zeit abgeschrieben.
//
//  Drei Betriebsarten wie bei der Anleitung:
//    ?trocken=1   zaehlt nur und verschickt nichts
//    ?test=1      genau eine Mail, an Julias eigene Adresse
//    (nichts)     an alle aktiven Premium-Mitglieder
// ============================================================
import { createClient } from '@supabase/supabase-js';
import { wochenplanHtml, wochenplanBetreff } from './_wochenplan-neu-mail.js';

const KENNUNG = 'wochenplan_neu_nov26';
const TEST_AN = 'deutschoderwas@gmail.com';
const STUFEN  = ['premium', 'premiumplus', 'premium_plus'];
const TAGE = ['Sonntag', 'Montag', 'Dienstag', 'Mittwoch', 'Donnerstag', 'Freitag', 'Samstag'];
/* Der Wochentag muss in BERLINER Zeit bestimmt werden, nicht in der
   Zeit des Servers — eine Stunde um 00:30 lag sonst am Vortag. */
const NUMMER = { Sun: 0, Mon: 1, Tue: 2, Wed: 3, Thu: 4, Fri: 5, Sat: 6 };

/* Je Wochentag: welcher Fokus, welche Uhrzeiten. Gerechnet aus den
   kommenden vier Wochen — weit genug, um den Rhythmus zu sehen, nah
   genug, um nicht an einer Feiertagswoche zu haengen. */
async function planHolen(sb) {
  const bis = new Date(Date.now() + 28 * 86400000).toISOString();
  const { data } = await sb.from('classes')
    .select('starts_at,topic')
    .gte('starts_at', new Date().toISOString()).lt('starts_at', bis)
    .eq('is_cancelled', false).gt('capacity', 0);

  const proTag = {};
  for (const c of (data || [])) {
    const d = new Date(c.starts_at);
    const kuerzel = new Intl.DateTimeFormat('en-US', { timeZone: 'Europe/Berlin', weekday: 'short' }).format(d);
    const wtag = NUMMER[kuerzel];
    if (wtag === undefined) continue;
    const zeit = new Intl.DateTimeFormat('de-DE', { timeZone: 'Europe/Berlin', hour: '2-digit', minute: '2-digit' }).format(d);
    const fokus = String(c.topic || '').split(' · ')[0] || '';
    proTag[wtag] = proTag[wtag] || { zeiten: new Set(), fokus: {} };
    proTag[wtag].zeiten.add(zeit);
    proTag[wtag].fokus[fokus] = (proTag[wtag].fokus[fokus] || 0) + 1;
  }

  const reihenfolge = [1, 2, 3, 4, 5, 6, 0];   // Montag zuerst, Sonntag zuletzt
  return reihenfolge.filter(n => proTag[n]).map(n => ({
    tag: TAGE[n],
    /* Der haeufigste Fokus des Tages. Dass es nur einen gibt, ist die
       Regel ("an einem Tag immer dasselbe Thema") — falls doch einmal
       zwei auftauchen, gewinnt der haeufigere, statt dass die Mail
       etwas Falsches behauptet. */
    fokus: Object.entries(proTag[n].fokus).sort((a, b) => b[1] - a[1])[0][0],
    zeiten: [...proTag[n].zeiten].sort(),
  }));
}

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
  const plan = await planHolen(sb);
  if (!plan.length) return res.status(200).json({ ok: false, grund: 'kein_plan_gefunden' });

  const bericht = { trocken, test: nurTest, plan, gesendet: [], uebersprungen: [], fehler: [] };

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
        subject: wochenplanBetreff(),
        htmlContent: wochenplanHtml(name, an, plan),
      }),
    });
    if (!r.ok) throw new Error('HTTP ' + r.status + ' ' + (await r.text().catch(() => '')).slice(0, 160));
  }

  if (nurTest) {
    if (!process.env.BREVO_API_KEY) return res.status(200).json({ ok: false, grund: 'kein_brevo_schluessel' });
    try {
      await senden(TEST_AN, 'Julia');
      return res.status(200).json({ ok: true, test: true, an: TEST_AN, plan });
    } catch (e) {
      return res.status(200).json({ ok: false, test: true, fehler: String((e && e.message) || e) });
    }
  }

  try {
    const { data: leute, error } = await sb.from('profiles')
      .select('id,name,email,tier,status,email_optout,is_admin,is_teacher')
      .in('tier', STUFEN).eq('status', 'aktiv');
    if (error) return res.status(500).json({ ok: false, error: error.message });

    for (const p of (leute || [])) {
      if (!p.email || p.is_admin || p.is_teacher) continue;
      if (p.email_optout) { bericht.uebersprungen.push({ name: p.name || p.email, grund: 'keine Mails gewuenscht' }); continue; }
      try {
        const { data: schon } = await sb.from('email_log')
          .select('id').eq('kind', KENNUNG).eq('ref', String(p.id)).maybeSingle();
        if (schon) { bericht.uebersprungen.push({ name: p.name || p.email, grund: 'hatte die Mail schon' }); continue; }

        if (trocken) {
          bericht.gesendet.push({ name: p.name || p.email, email: p.email, hinweis: 'Probelauf — nichts verschickt' });
          continue;
        }
        if (!process.env.BREVO_API_KEY) { bericht.fehler.push({ name: p.name || p.email, fehler: 'kein Brevo-Schluessel' }); continue; }

        const { data: notiz, error: notizFehler } = await sb.from('email_log')
          .insert({ user_id: p.id, kind: KENNUNG, ref: String(p.id) }).select('id').maybeSingle();
        if (notizFehler || !notiz) {
          bericht.fehler.push({ name: p.name || p.email,
            fehler: 'Protokolleintrag fehlgeschlagen, deshalb NICHT gesendet: '
              + String((notizFehler && notizFehler.message) || 'kein Eintrag zurueckgekommen') });
          continue;
        }
        try {
          await senden(p.email, p.name);
        } catch (e) {
          await sb.from('email_log').delete().eq('id', notiz.id);
          bericht.fehler.push({ name: p.name || p.email, fehler: String((e && e.message) || e) });
          continue;
        }
        bericht.gesendet.push({ name: p.name || p.email, email: p.email });
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
