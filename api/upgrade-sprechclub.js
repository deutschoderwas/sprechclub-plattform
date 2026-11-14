// Upgrade Lernclub (community, 16 €) -> Sprechclub (premium, 139 €) OHNE neues Abo.
// -----------------------------------------------------------------------------
// Aufgerufen aus dem Schülerbereich (konto.html) per POST mit Bearer-Token.
// Statt ein ZWEITES Abo anzulegen (das würde doppelt abbuchen), ändern wir das
// LAUFENDE Community-Abo direkt bei Stripe:
//   - der Abo-Preis wird auf 139 €/Monat gesetzt (price_data, wie create-checkout)
//   - proration_behavior:'always_invoice' -> Stripe stellt SOFORT eine Rechnung
//     über die anteilige DIFFERENZ aus und bucht sie von der gespeicherten Karte ab
//   - metadata.tier wird auf 'premium' gesetzt
// Diese Proration-Rechnung kommt als 'invoice.paid' bei api/stripe-webhook.js an;
// dort steht die Logik, die profiles.tier auf 'premium' setzt, pass_until gibt und
// das alte Community-Abo beendet (altesCommunityAboBeenden überspringt die eigene
// Subscription). Wir müssen hier also NUR das Abo umstellen.
//
// Benötigt ENV: STRIPE_SECRET_KEY, SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY.
// Antwort: { ok:true } bei Erfolg, sonst { ok:false, error:'...' } mit Status.
//
// WICHTIG (Billing): bucht echte Karten. Vor dem Scharfschalten einmal live mit
// einer echten Zahlung testen. Preis bewusst als Konstante unten (SPRECHCLUB_PREIS).

import Stripe from 'stripe';
import { createClient } from '@supabase/supabase-js';
import { kundeSuchen } from './_stripe-kunde.js';

const SPRECHCLUB_PREIS = 139;           // €/Monat (Julia, 14.11.2026: Upgrade geht auf 139 €)
const MARKENBILD = 'https://www.deutschoderwas-club.de/icons/favicon-512.png';

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).json({ ok: false, error: 'method_not_allowed' });
  if (!process.env.STRIPE_SECRET_KEY) return res.status(500).json({ ok: false, error: 'stripe_not_configured' });

  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
  const sb = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_SERVICE_ROLE_KEY);

  try {
    // 1) Auth: nur die/der eingeloggte Nutzer:in darf das eigene Abo upgraden.
    const authHeader = req.headers.authorization || '';
    const token = authHeader.startsWith('Bearer ') ? authHeader.slice(7) : null;
    if (!token) return res.status(401).json({ ok: false, error: 'not_authenticated' });
    const { data: { user }, error: uErr } = await sb.auth.getUser(token);
    if (uErr || !user) return res.status(401).json({ ok: false, error: 'not_authenticated' });

    // 2) Profil + Schutzregeln
    const { data: prof } = await sb.from('profiles')
      .select('stripe_customer_id,email,bezahlt_email,tier').eq('id', user.id).maybeSingle();

    if (prof && prof.bezahlt_email) {
      // Jemand anderes zahlt -> der/die soll upgraden, nicht diese Person.
      return res.status(403).json({ ok: false, error: 'fremder_zahler',
        hinweis: 'Dein Zugang wird über ' + prof.bezahlt_email + ' bezahlt. Das Abo ändert, wer es abgeschlossen hat.' });
    }
    if (prof && ['premium', 'premium_plus'].indexOf(prof.tier) >= 0) {
      return res.status(200).json({ ok: true, already: true }); // schon Sprechclub
    }

    // 3) Stripe-Kundennummer
    let customerId = prof && prof.stripe_customer_id;
    if (!customerId) {
      const email = (prof && prof.email) || user.email;
      const gefunden = await kundeSuchen(stripe, email, sb);
      if (gefunden) {
        customerId = gefunden.id;
        await sb.from('profiles').update({ stripe_customer_id: customerId }).eq('id', user.id);
      }
    }
    if (!customerId) return res.status(404).json({ ok: false, error: 'kein_abo' });

    // 4) Das laufende (Community-)Abo finden.
    const subs = await stripe.subscriptions.list({ customer: customerId, status: 'all', limit: 20 });
    const laufend = (subs.data || []).filter(s => ['active', 'trialing', 'past_due'].indexOf(s.status) >= 0);
    // Bevorzugt ein Abo mit tier 'community', sonst das jüngste laufende Abo.
    let sub = laufend.find(s => String(s.metadata && s.metadata.tier || '').toLowerCase() === 'community')
           || laufend.sort((a, b) => (b.created || 0) - (a.created || 0))[0];
    if (!sub) return res.status(404).json({ ok: false, error: 'kein_laufendes_abo' });

    // Schon premium bei Stripe? Dann nur Profil nachziehen lassen, nicht erneut berechnen.
    if (String(sub.metadata && sub.metadata.tier || '').toLowerCase().indexOf('premium') >= 0) {
      return res.status(200).json({ ok: true, already: true });
    }

    const item = sub.items && sub.items.data && sub.items.data[0];
    if (!item) return res.status(500).json({ ok: false, error: 'abo_ohne_position' });

    // 5) Umstellen: Preis auf Sprechclub, Differenz sofort abbuchen, tier -> premium.
    const meta = Object.assign({}, sub.metadata || {}, {
      userId: user.id,
      tier: 'premium',
      plan: 'premium_upgrade',
      zugang_ab: '',        // Sprechclub läuft bereits -> Zugang ab sofort (Webhook: startFuer)
    });

    await stripe.subscriptions.update(sub.id, {
      items: [{
        id: item.id,
        price_data: {
          currency: 'eur',
          unit_amount: SPRECHCLUB_PREIS * 100,
          recurring: { interval: 'month' },
          product_data: {
            name: 'deutschoderwas Club – Sprechclub',
            description: 'Alles aus dem Lernclub + Sprechclub: täglich LIVE sprechen, unbegrenzt.',
            images: [MARKENBILD],
          },
        },
      }],
      proration_behavior: 'always_invoice',   // Differenz SOFORT in Rechnung stellen
      payment_behavior: 'error_if_incomplete', // Karte fehlgeschlagen? -> wir erfahren es sofort
      metadata: meta,
    });

    // Der Rest (profiles.tier = premium, pass_until, altes Abo beenden, Mail)
    // passiert über 'invoice.paid' in api/stripe-webhook.js.
    return res.status(200).json({ ok: true });

  } catch (e) {
    console.error('upgrade-sprechclub', e && e.message);
    // Kartenfehler (error_if_incomplete) landen hier.
    const code = (e && e.code) || '';
    if (code === 'card_declined' || (e && e.type === 'StripeCardError')) {
      return res.status(402).json({ ok: false, error: 'karte_abgelehnt',
        hinweis: 'Deine Karte wurde abgelehnt. Prüf bitte dein Zahlungsmittel und versuch es noch einmal.' });
    }
    return res.status(500).json({ ok: false, error: 'serverfehler' });
  }
}
