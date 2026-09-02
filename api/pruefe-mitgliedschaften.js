// ============================================================
// pruefe-mitgliedschaften.js — gleicht die Mitgliedschaften mit Stripe ab.
//
// Warum es das gibt: Wer die Mitgliedschaft kauft, BEVOR er ein Konto
// hat, landet in pending_purchases und bekommt tier + status erst bei
// der Registrierung. Dabei wird die Stripe-Kundennummer nicht ins
// Profil geschrieben, und in der Stripe-Subscription steht keine
// userId. Kündigt so jemand später, kommt zwar der Webhook
// customer.subscription.deleted an — er findet aber niemanden und tut
// nichts. Die Person bliebe auf „aktiv" und behielte den Zugang.
//
// Von zwölf Community-Mitgliedern hatten elf keine Kundennummer im
// Profil. Genau die wären beim Kündigen durchgerutscht.
//
// Was dieser Job macht, jede Nacht:
//   1. Alle Profile mit tier (community, premium, premium_plus) holen.
//   2. Stripe-Kunde bestimmen — über die gespeicherte Kundennummer,
//      sonst über die E-Mail. Gefundene Nummer wird nachgetragen.
//   3. Abos des Kunden ansehen.
//   4. Läuft ein Abo (active, trialing, past_due), soll der Status
//      aktiv sein; gibt es keins mehr, wird auf inaktiv gesetzt.
//   5. In die laufende Subscription die userId nachtragen, damit der
//      Webhook beim nächsten Mal von allein greift.
//   6. Bei Änderungen oder offenen Fragen eine kurze Mail an Julia.
//
// Aufruf: /api/pruefe-mitgliedschaften  (aus api/daily.js)
// Von Hand: mit ?trocken=1 läuft er, ohne etwas zu ändern.
// ============================================================
import Stripe from 'stripe';
import { createClient } from '@supabase/supabase-js';

const TIERS = ['community', 'premium', 'premium_plus'];
const LAEUFT = ['active', 'trialing', 'past_due'];   // past_due: Zahlung hakt, Abo lebt noch

export default async function handler(req, res) {
  const geheim = process.env.CRON_SECRET || '';
  const kopf = req.headers['x-intern'] || '';
  const ausAdmin = (req.headers.authorization || '').startsWith('Bearer ');
  if (geheim && kopf !== geheim && !ausAdmin) {
    return res.status(401).json({ ok: false, error: 'nicht erlaubt' });
  }
  if (!process.env.SUPABASE_URL || !process.env.SUPABASE_SERVICE_ROLE_KEY) {
    return res.status(200).json({ ok: false, skipped: 'supabase fehlt' });
  }
  if (!process.env.STRIPE_SECRET_KEY) {
    return res.status(200).json({ ok: false, skipped: 'stripe fehlt' });
  }

  const trocken = String(req.query?.trocken || '') === '1';
  const sb = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_SERVICE_ROLE_KEY);
  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

  const { data: leute, error } = await sb
    .from('profiles')
    .select('id,name,email,status,tier,stripe_customer_id,is_admin,is_teacher')
    .in('tier', TIERS);
  if (error) return res.status(500).json({ ok: false, error: error.message });

  const bericht = { geprueft: 0, gesperrt: [], entsperrt: [], kundennummer_ergaenzt: [], userid_nachgetragen: [], ohne_stripe: [], fehler: [] };

  for (const p of leute || []) {
    bericht.geprueft++;
    if (p.is_admin || p.is_teacher) continue;   // Team hat immer Zugang

    try {
      // --- 1. Kunde finden
      let kunde = p.stripe_customer_id || null;
      if (!kunde && p.email) {
        const treffer = await stripe.customers.list({ email: p.email, limit: 3 });
        if (treffer.data && treffer.data.length) {
          kunde = treffer.data[0].id;
          if (!trocken) await sb.from('profiles').update({ stripe_customer_id: kunde }).eq('id', p.id);
          bericht.kundennummer_ergaenzt.push(p.name || p.email);
        }
      }
      if (!kunde) {
        // Kein Kunde bei Stripe: von Hand eingetragen oder mit anderer
        // Adresse bezahlt. Nichts ändern — das muss ein Mensch ansehen.
        bericht.ohne_stripe.push({ name: p.name || p.email, email: p.email, status: p.status });
        continue;
      }

      // --- 2. Abos ansehen
      const subs = await stripe.subscriptions.list({ customer: kunde, status: 'all', limit: 10 });
      const laufend = (subs.data || []).filter(s => LAEUFT.includes(s.status));
      const hatAbo = laufend.length > 0;

      // --- 3. userId nachtragen, damit der Webhook künftig greift
      for (const s of laufend) {
        if (!s.metadata || !s.metadata.userId) {
          if (!trocken) {
            await stripe.subscriptions.update(s.id, {
              metadata: { ...(s.metadata || {}), userId: p.id, tier: p.tier }
            });
          }
          bericht.userid_nachgetragen.push(p.name || p.email);
        }
      }

      // --- 4. Status angleichen
      const sollAktiv = hatAbo;
      const istAktiv = (p.status || '') === 'aktiv';
      if (sollAktiv && !istAktiv) {
        if (!trocken) await sb.from('profiles').update({ status: 'aktiv' }).eq('id', p.id);
        bericht.entsperrt.push({ name: p.name || p.email, vorher: p.status });
      } else if (!sollAktiv && istAktiv) {
        if (!trocken) await sb.from('profiles').update({ status: 'inaktiv' }).eq('id', p.id);
        bericht.gesperrt.push({
          name: p.name || p.email,
          email: p.email,
          letztes_abo: (subs.data && subs.data[0] && subs.data[0].status) || 'keins'
        });
      }
    } catch (e) {
      bericht.fehler.push({ name: p.name || p.email, fehler: String((e && e.message) || e) });
    }
  }

  // --- 5. Julia Bescheid geben, wenn etwas passiert ist
  const wichtig = bericht.gesperrt.length || bericht.entsperrt.length || bericht.fehler.length;
  if (wichtig && !trocken && process.env.BREVO_API_KEY) {
    const zeile = (x) => `<li>${x.name}${x.email ? ' (' + x.email + ')' : ''}${x.letztes_abo ? ' — Abo: ' + x.letztes_abo : ''}${x.vorher ? ' — war: ' + x.vorher : ''}</li>`;
    const html =
      `<p>Der nächtliche Abgleich mit Stripe hat etwas gefunden.</p>` +
      (bericht.gesperrt.length ? `<p><b>Zugang geschlossen (kein laufendes Abo mehr):</b></p><ul>${bericht.gesperrt.map(zeile).join('')}</ul>` : '') +
      (bericht.entsperrt.length ? `<p><b>Wieder geöffnet (Abo läuft doch):</b></p><ul>${bericht.entsperrt.map(zeile).join('')}</ul>` : '') +
      (bericht.ohne_stripe.length ? `<p><b>Ohne Stripe-Kunde — bitte selbst ansehen:</b></p><ul>${bericht.ohne_stripe.map(zeile).join('')}</ul>` : '') +
      (bericht.fehler.length ? `<p><b>Fehler beim Prüfen:</b></p><ul>${bericht.fehler.map(x => `<li>${x.name}: ${x.fehler}</li>`).join('')}</ul>` : '') +
      `<p style="color:#666;font-size:13px">${bericht.geprueft} Mitgliedschaften geprüft.</p>`;
    try {
      await fetch('https://api.brevo.com/v3/smtp/email', {
        method: 'POST',
        headers: { 'api-key': process.env.BREVO_API_KEY, 'Content-Type': 'application/json' },
        body: JSON.stringify({
          sender: { name: 'deutschoderwas club', email: process.env.BREVO_SENDER_EMAIL || 'deutschlernen@deutschoderwas.de' },
          to: [{ email: process.env.ADMIN_EMAIL || 'deutschoderwas@gmail.com', name: 'Julia' }],
          subject: 'Mitgliedschaften: ' + bericht.gesperrt.length + ' geschlossen, ' + bericht.entsperrt.length + ' geöffnet',
          htmlContent: html
        })
      });
    } catch (e) { bericht.fehler.push({ name: 'mail', fehler: String(e.message || e) }); }
  }

  return res.status(200).json({ ok: true, trocken, ...bericht });
}
