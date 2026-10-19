// ============================================================
//  abbuchung-verschieben.js — niemand zahlt im November.
//
//  Julia, 17.10.2026: "ABO startet am 01.11 und Abbuchung erst am
//  01.12 ... sie müssen im November aber nichts mehr bezahlen, bitte
//  so einstellen bei allen Premium Mitgliedern."
//  Und am 19.10.2026, als zwei durchgerutscht waren: "Ne, Susanna
//  nächste Zahlung am 01.12 und Alona auch am 01.12!!!!"
//
//  Normalerweise erledigt das die Kasse: api/stripe-webhook.js parkt
//  ein frisch gekauftes Premium-Abo bis zum 1. November (trial_end) —
//  deshalb steht die erste Abbuchung bei allen auf dem 1. Dezember.
//  Bei vier Käufen am 17./18.10. hat der Webhook die Zahlung nie
//  verarbeitet; ihre Abos liefen sofort los, und ihnen wäre am 17.
//  November Geld abgebucht worden.
//
//  Dieser Lauf zieht genau das gerade. Er ist bewusst eng:
//    · nur Premium (Community zahlt monatlich ganz normal weiter —
//      Julia am 18.10.: "es geht nicht um community es geht um
//      Premium"),
//    · nur Abos, deren nächste Abbuchung VOR dem 1.12.2026 liegt,
//    · nur laufende Abos, keine gekündigten, keine Kaufversuche,
//    · und er verschiebt ausschliesslich nach HINTEN. Ein Abo, das
//      ohnehin später dran ist, wird nie angefasst.
//
//  proration_behavior: 'none' — es wird nichts berechnet, nichts
//  erstattet, nichts verrechnet. Nur das Datum wandert.
//
//  Aufruf ueber die Warteschlange mail_auftraege:
//    'abbuchung_vorschau'    -> zeigt, was er taete
//    'abbuchung_verschieben' -> tut es
// ============================================================
import Stripe from 'stripe';
import { createClient } from '@supabase/supabase-js';

const LAEUFT = ['active', 'trialing', 'past_due'];
const PREMIUM = ['premium', 'premiumplus', 'premium_plus'];

/* Der 1. Dezember 2026, 00:00 deutscher Zeit. Als feste Zahl, nicht
   gerechnet: ein Datum, das um Mitternacht kippt, darf nicht davon
   abhaengen, wo der Server gerade steht. */
const ZIEL = Math.floor(Date.parse('2026-12-01T00:00:00+01:00') / 1000);

function periodeEnde(s) {
  const e = s && (s.current_period_end
    || (s.items && s.items.data && s.items.data[0] && s.items.data[0].current_period_end));
  return e || null;
}

export default async function handler(req, res) {
  const geheim = process.env.CRON_SECRET || '';
  const kopf = req.headers['x-intern'] || '';
  const ausAdmin = (req.headers.authorization || '').startsWith('Bearer ');
  if (geheim && kopf !== geheim && !ausAdmin) {
    return res.status(401).json({ ok: false, error: 'nicht erlaubt' });
  }
  if (!process.env.STRIPE_SECRET_KEY || !process.env.SUPABASE_SERVICE_ROLE_KEY) {
    return res.status(200).json({ ok: false, skipped: 'schluessel fehlen' });
  }

  const trocken = String(req.query?.trocken || '') === '1';
  const sb = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_SERVICE_ROLE_KEY);
  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

  const bericht = { trocken, geprueft: 0, verschoben: [], unveraendert: [], fehler: [] };
  const alsDatum = (sek) => new Date(sek * 1000).toISOString().slice(0, 10);

  try {
    const { data: leute } = await sb.from('profiles')
      .select('id,name,email,tier,status,stripe_customer_id,abo_stripe_status')
      .in('tier', PREMIUM);

    for (const p of (leute || [])) {
      if (!p.stripe_customer_id) continue;
      if (p.abo_stripe_status === 'von_hand') continue;   // liegt gar nicht bei Stripe
      bericht.geprueft++;

      try {
        const subs = await stripe.subscriptions.list({
          customer: p.stripe_customer_id, status: 'all', limit: 10,
        });
        for (const s of (subs.data || [])) {
          if (!LAEUFT.includes(s.status)) continue;
          if (s.cancel_at_period_end) continue;          // geht ohnehin
          if ((s.metadata && s.metadata.tier) === 'community') continue;

          const ende = periodeEnde(s);
          if (!ende) continue;

          /* Nur nach hinten, nie nach vorne. */
          if (ende >= ZIEL) {
            bericht.unveraendert.push({
              name: p.name || p.email, email: p.email,
              abo: s.id, zahlt_am: alsDatum(ende), grund: 'liegt schon am/nach dem 01.12.',
            });
            continue;
          }

          if (!trocken) {
            await stripe.subscriptions.update(s.id, {
              trial_end: ZIEL,
              proration_behavior: 'none',
            });
            await sb.from('zugang_log').insert({
              user_id: p.id, email: p.email, aktion: 'abbuchung_verschoben',
              grund: 'erste Abbuchung von ' + alsDatum(ende) + ' auf 2026-12-01 — im November zahlt niemand',
              vorher:  { abo: s.id, zahlt_am: alsDatum(ende), status: s.status },
              nachher: { abo: s.id, zahlt_am: '2026-12-01', status: 'trialing' },
            }).then(() => {}, () => {});
          }

          bericht.verschoben.push({
            name: p.name || p.email, email: p.email, abo: s.id,
            vorher: alsDatum(ende), nachher: '2026-12-01',
            betrag: (s.items && s.items.data && s.items.data[0] && s.items.data[0].price
                     && s.items.data[0].price.unit_amount != null)
              ? (s.items.data[0].price.unit_amount / 100).toFixed(2).replace('.', ',') + ' EUR' : null,
          });
        }
      } catch (e) {
        bericht.fehler.push({ name: p.name || p.email, fehler: String((e && e.message) || e) });
      }
    }
  } catch (e) {
    bericht.fehler.push({ name: 'lauf', fehler: String((e && e.message) || e) });
    return res.status(500).json({ ok: false, ...bericht });
  }

  return res.status(200).json({ ok: true, ...bericht });
}
