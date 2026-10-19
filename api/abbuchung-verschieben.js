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

/* Julia, 19.10.2026, als Regel fuer alle: "JEDER der vor dem 01.11 ein
   Abo kauft zahlt erst wieder am 01.12!!! (wenn Jahr dann erst am
   01.11.2027)"

   Zwei Ziele also, je nach Takt. Als feste Zahlen, nicht gerechnet: ein
   Datum, das um Mitternacht kippt, darf nicht davon abhaengen, wo der
   Server gerade steht. */
const ZIEL_MONAT = Math.floor(Date.parse('2026-12-01T00:00:00+01:00') / 1000);
const ZIEL_JAHR  = Math.floor(Date.parse('2027-11-01T00:00:00+01:00') / 1000);

/* Die Regel gilt fuer alle, die VOR dem Start gekauft haben. Wer spaeter
   kauft, zahlt ganz normal nach seinem eigenen Rhythmus — deshalb diese
   Grenze. Ohne sie wuerde der Lauf im Dezember noch Abos anfassen, die
   niemanden etwas angehen. */
const VOR_DEM_START = Math.floor(Date.parse('2026-11-01T00:00:00+01:00') / 1000);

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

  const bericht = { trocken, geprueft: 0, verschoben: [], unveraendert: [], uebersprungen: [], fehler: [] };
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

          /* Wer erst nach dem 1. November gekauft hat, faellt nicht unter
             die Regel — der zahlt nach seinem eigenen Rhythmus. */
          const begonnen = s.start_date || s.created || null;
          if (begonnen && begonnen >= VOR_DEM_START) {
            bericht.uebersprungen.push({
              name: p.name || p.email, abo: s.id,
              grund: 'erst nach dem 01.11. gekauft — die Regel gilt nur fuer den Vorverkauf',
            });
            continue;
          }

          /* Monat oder Jahr? Danach richtet sich das Ziel. */
          const pos  = s.items && s.items.data && s.items.data[0];
          const takt = (pos && pos.price && pos.price.recurring && pos.price.recurring.interval) || null;
          if (takt !== 'month' && takt !== 'year') {
            bericht.uebersprungen.push({
              name: p.name || p.email, abo: s.id,
              grund: 'Takt nicht erkennbar (' + (takt || 'keiner') + ') — lieber nichts anfassen',
            });
            continue;
          }
          const ziel = takt === 'year' ? ZIEL_JAHR : ZIEL_MONAT;

          /* Nur nach hinten, nie nach vorne. */
          if (ende >= ziel) {
            bericht.unveraendert.push({
              name: p.name || p.email, email: p.email, abo: s.id,
              zahlt_am: alsDatum(ende),
              grund: 'liegt schon am/nach dem ' + alsDatum(ziel),
            });
            continue;
          }

          if (!trocken) {
            await stripe.subscriptions.update(s.id, {
              trial_end: ziel,
              proration_behavior: 'none',
            });
            await sb.from('zugang_log').insert({
              user_id: p.id, email: p.email, aktion: 'abbuchung_verschoben',
              grund: 'erste Abbuchung von ' + alsDatum(ende) + ' auf ' + alsDatum(ziel)
                     + ' — wer vor dem 01.11. kauft, zahlt erst dann wieder',
              vorher:  { abo: s.id, zahlt_am: alsDatum(ende), status: s.status },
              nachher: { abo: s.id, zahlt_am: alsDatum(ziel), status: 'trialing' },
            }).then(() => {}, () => {});
          }

          bericht.verschoben.push({
            name: p.name || p.email, email: p.email, abo: s.id,
            takt: takt === 'year' ? 'Jahresabo' : 'Monatsabo',
            vorher: alsDatum(ende), nachher: alsDatum(ziel),
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
