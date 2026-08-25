// Stripe Checkout starten — Abo-Pässe (7 Tage gratis testen) & Einmalkauf (Spar Pass).
// Wird von live.html / index.html aufgerufen: POST { packageId|passId, userId, email }.
// Gibt { url } (hosted) ODER { clientSecret, publishableKey } (embedded) zurück. Nach Zahlung schreibt api/stripe-webhook.js gut.
// Benötigt ENV: STRIPE_SECRET_KEY, (optional) SITE_URL.
import Stripe from 'stripe';
import { createClient } from '@supabase/supabase-js';

// Vorverkauf: Ab wann ist der gekaufte Bereich nutzbar? (Berlin-Zeit, ISO-Datum)
// Wer vorher kauft, zahlt sofort — die Laufzeit beginnt aber erst an diesem Tag.
// Community laeuft ab sofort. Premium startet am 1. November, Premium
// Plus am 1. Februar 2027 — bis dahin gibt es dort nur die Warteliste.
const START_AB = { community: null, premium: '2026-11-01', premiumplus: '2027-02-01' };
function startDatum(tier){
  const d = START_AB[tier];
  if (!d) return null;
  return (new Date(d + 'T00:00:00+02:00') > new Date()) ? d : null;   // schon vorbei -> sofort nutzbar
}

// Server-seitige Paket-Definition (Quelle der Wahrheit für Preise – nie dem Client vertrauen).
const PLANS = {
  // --- Bestandskunden: alte LIVE-Stundenpaesse (bleiben aktiv, neu nicht mehr buchbar) ---
  testpass:         { abo: true,  interval:'month', stunden: 4,  preis: 79,  label: 'Ab und zu Pass' },
  gelegenheitspass: { abo: true,  interval:'month', stunden: 8,  preis: 139, label: 'Gelegenheitspass' },
  allinclusive:     { abo: true,  interval:'month', stunden: 12, preis: 189, label: 'Profi-Pass' },
  sparpass:         { abo: false, stunden: 30, preis: 399, label: 'Spar Pass' },
  // --- Neues Modell: Community (ohne Live-Buchung) + Premium (mit 8 Live-Stunden) ---
  community_year:  { abo: true, interval:'year',  stunden: 0, preis: 144, tier:'community', label: 'Community',
    desc: 'Ganze Lernplattform, Community, Kursbibliothek A1-C2, Vokabeltrainer & taeglicher Podcast. Jahresmitgliedschaft (12 Monate).' },
  community_month: { abo: true, interval:'month', stunden: 0, preis: 16,  tier:'community', label: 'Community',
    desc: 'Ganze Lernplattform, Community, Kursbibliothek A1-C2, Vokabeltrainer & taeglicher Podcast. Monatlich kuendbar.' },
  // --- NEU ab 08/2026: Premium zum Seitenpreis (49 € / 37 € im Jahresabo). Das alte 149-€-Premium bleibt fuer Bestandskunden. ---
  premium_month:   { abo: true, interval:'month', stunden: 8, preis: 49,  tier:'premium', label: 'Premium',
    desc: 'Alles aus Community + Sprechclub: Mo-So um 19 Uhr sprechen in kleinen 2er- und 3er-Gruppen. Monatlich kuendbar.' },
  premium_year:    { abo: true, interval:'year',  stunden: 8, preis: 444, tier:'premium', label: 'Premium',
    desc: 'Alles aus Community + Sprechclub: Mo-So um 19 Uhr sprechen in kleinen 2er- und 3er-Gruppen. Jahresmitgliedschaft (12 Monate, 37 EUR pro Monat).' },
  premium:         { abo: true, interval:'month', stunden: 8, preis: 149, tier:'premium',  label: 'Premium',
    desc: 'Alles aus Community + 8 LIVE-Stunden/Monat in kleiner Gruppe (bis 6 Personen).' },

  /* --- Premium Plus: der geschlossene Sprechclub bei Julia persoenlich ---
     8 Stunden im Monat. Drei Laufzeiten, und zu jeder zwei Zahlweisen:
     monatlich abbuchen oder die ganze Laufzeit sofort zahlen.

     Zur Mindestlaufzeit, ehrlich gesagt: Stripe kann bei monatlicher
     Abbuchung keine Bindung erzwingen. Wir merken uns das Enddatum in
     mindest_bis und blenden das Kuendigen bis dahin aus. Wer die ganze
     Laufzeit sofort zahlt, hat das Thema ohnehin nicht. */
  pp_m1: { abo: true, interval:'month', stunden: 8, preis: 149, tier:'premiumplus', label: 'Premium Plus · monatlich',
    monate: 1, desc: 'Geschlossener Sprechclub mit Julia persoenlich. 8 Stunden im Monat. Monatlich kuendbar.' },
  pp_m3: { abo: true, interval:'month', stunden: 8, preis: 129, tier:'premiumplus', label: 'Premium Plus · 3 Monate',
    monate: 3, desc: 'Geschlossener Sprechclub mit Julia persoenlich. 8 Stunden im Monat. Mindestlaufzeit 3 Monate, danach monatlich kuendbar.' },
  pp_m6: { abo: true, interval:'month', stunden: 8, preis: 99,  tier:'premiumplus', label: 'Premium Plus · 6 Monate',
    monate: 6, desc: 'Geschlossener Sprechclub mit Julia persoenlich. 8 Stunden im Monat. Mindestlaufzeit 6 Monate, danach monatlich kuendbar.' },

  pp_e1: { abo: false, stunden: 8,  preis: 149, tier:'premiumplus', label: 'Premium Plus · 1 Monat im Voraus', monate: 1 },
  pp_e3: { abo: false, stunden: 24, preis: 387, tier:'premiumplus', label: 'Premium Plus · 3 Monate im Voraus', monate: 3 },
  pp_e6: { abo: false, stunden: 48, preis: 594, tier:'premiumplus', label: 'Premium Plus · 6 Monate im Voraus', monate: 6 },
};

/* Bis wann darf nicht gekuendigt werden? Nur bei den Abos mit Bindung. */
function mindestBis(plan){
  if (!plan || !plan.abo || !plan.monate || plan.monate < 2) return '';
  const d = new Date();
  d.setMonth(d.getMonth() + plan.monate);
  return d.toISOString().slice(0, 10);
}

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'method_not_allowed' });
  if (!process.env.STRIPE_SECRET_KEY) return res.status(500).json({ error: 'stripe_not_configured' });

  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
  async function createSafe(params){
    try { return await stripe.checkout.sessions.create(params); }
    catch(e){
      if (params.payment_method_types && params.payment_method_types.includes('paypal')){
        const p2 = Object.assign({}, params, { payment_method_types: params.payment_method_types.filter(m=>m!=='paypal') });
        return await stripe.checkout.sessions.create(p2);
      }
      throw e;
    }
  }
  const site = process.env.SITE_URL || 'https://www.deutschoderwas-club.de';

  try {
    const { packageId, passId, userId, email, embedded, trial } = (req.body || {});
    const id = passId || packageId;
    const plan = PLANS[id];
    if (!plan) return res.status(400).json({ error: 'unknown_plan' });
    // userId optional: "erst zahlen, dann anmelden" wird per E-Mail zugeordnet (webhook + pending_purchases).

    const common = {
      customer_email: email || undefined,
      client_reference_id: userId || undefined,
      allow_promotion_codes: true,
    };
    if (embedded) {
      // Eingebettete Bezahlung direkt auf deutschoderwas-club.de (Stripe Embedded Checkout)
      common.ui_mode = 'embedded';
      common.return_url = `${site}/konto.html?bezahlt=1&session_id={CHECKOUT_SESSION_ID}`;
    } else {
      // Community/Premium (tier): nach Zahlung direkt zur Registrierung mit der bezahlten E-Mail.
      // Neu-Kaeufer ohne Konto -> Registrierung. Wer schon eingeloggt ist
      // (z. B. Community-Mitglied beim Upgrade auf Premium) -> zurueck in den Schuelerbereich.
      common.success_url = (plan.tier && !userId)
        ? `${site}/index.html?register=1&sid={CHECKOUT_SESSION_ID}`
        : `${site}/konto.html?bezahlt=1`;
      common.cancel_url = `${site}/#preise`;
    }

    let session;
    if (plan.abo) {
      // Probestunde nur EINMAL pro Person. Wer schon je eine Testphase ODER (auch gekündigt)
      // schon irgendein Abo bei Stripe hatte, zahlt sofort – kein erneutes 7-Tage-Trial.
      let trialDays = (trial === false) ? 0 : 7; // "Sofort starten" => sofort zahlen, kein Test
      if (plan.tier) trialDays = 0; // Community/Premium: keine Testphase
      try {
        if (process.env.SUPABASE_URL && process.env.SUPABASE_SERVICE_ROLE_KEY) {
          const sb = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_SERVICE_ROLE_KEY);
          // 1) Schon mal eine Probestunde gehabt? (schnelle Prüfung über credit_log)
          if (userId) {
            const { data: prev } = await sb.from('credit_log').select('id').eq('user_id', userId).like('reason', 'trial:%').limit(1);
            if (prev && prev.length) trialDays = 0;
          }
          // 2) Schon mal IRGENDEIN Abo bei Stripe gehabt – auch ein gekündigtes? -> keine neue Probestunde
          if (trialDays > 0) {
            const { data: prof } = userId ? await sb.from('profiles').select('stripe_customer_id').eq('id', userId).maybeSingle() : { data: null };
            const custIds = [];
            if (prof && prof.stripe_customer_id) custIds.push(prof.stripe_customer_id);
            if (!custIds.length && email) {
              try { const list = await stripe.customers.list({ email, limit: 10 }); (list.data || []).forEach(c => custIds.push(c.id)); } catch (e) {}
            }
            for (const cid of custIds) {
              try {
                const subs = await stripe.subscriptions.list({ customer: cid, status: 'all', limit: 1 });
                if (subs.data && subs.data.length) { trialDays = 0; break; }
              } catch (e) {}
            }
          }
        }
      } catch (e) { console.error('trial-check', e); }

      const zugangAb = plan.tier ? startDatum(plan.tier) : null;
      const subData = { metadata: { userId, plan: id, stunden: String(plan.stunden), tier: plan.tier || '', zugang_ab: zugangAb || '', mindest_bis: mindestBis(plan) } };
      if (trialDays > 0) subData.trial_period_days = 7; // nur Neukund:innen bekommen die Gratis-Probestunde

      let abodesc = plan.desc || `${plan.stunden} LIVE-Stunden pro Monat · Üben 24/7, Amanda & Community inklusive`;
      if (zugangAb) {
        const dd = zugangAb.split('-');
        abodesc += ` — Start am ${dd[2]}.${dd[1]}.${dd[0]}: Die Laufzeit beginnt an diesem Tag.`;
      }
      session = await createSafe({
        ...common,
        mode: 'subscription',
        payment_method_types: ['card', 'paypal'], // Karte (inkl. Apple/Google Pay) + PayPal - kein Stripe Link
        line_items: [{
          quantity: 1,
          price_data: {
            currency: 'eur',
            unit_amount: plan.preis * 100,
            recurring: { interval: plan.interval || 'month' },
            product_data: { name: `deutschoderwas Club – ${plan.label}`, description: abodesc },
          },
        }],
        subscription_data: subData,
        metadata: { userId, plan: id, stunden: String(plan.stunden), tier: plan.tier || '', kind: 'abo', trial: trialDays > 0 ? '1' : '0', zugang_ab: zugangAb || '', mindest_bis: mindestBis(plan) },
      });
    } else {
      // Einmalkauf (Spar Pass)
      session = await createSafe({
        ...common,
        mode: 'payment',
        payment_method_types: ['card', 'klarna', 'paypal'], // Karte + Klarna + PayPal - kein Stripe Link
        line_items: [{
          quantity: 1,
          price_data: {
            currency: 'eur',
            unit_amount: plan.preis * 100,
            product_data: { name: `deutschoderwas Club – ${plan.label}`, description: `${plan.stunden} LIVE-Stunden` },
          },
        }],
        payment_intent_data: { metadata: { userId, plan: id, credits: String(plan.stunden) } },
        metadata: { userId, plan: id, credits: String(plan.stunden), kind: 'einmal' },
      });
    }

    if (embedded) {
      return res.status(200).json({
        clientSecret: session.client_secret,
        publishableKey: process.env.STRIPE_PUBLISHABLE_KEY || ''
      });
    }
    return res.status(200).json({ url: session.url });
  } catch (e) {
    console.error('create-checkout', e);
    return res.status(500).json({ error: 'checkout_failed', detail: String(e.message || e) });
  }
}
