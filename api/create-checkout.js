// Stripe Checkout starten — Abo-Pässe (7 Tage gratis testen) & Einmalkauf (Spar Pass).
// Wird von live.html / index.html aufgerufen: POST { packageId|passId, userId, email }.
// Gibt { url } (hosted) ODER { clientSecret, publishableKey } (embedded) zurück. Nach Zahlung schreibt api/stripe-webhook.js gut.
// Benötigt ENV: STRIPE_SECRET_KEY, (optional) SITE_URL.
import Stripe from 'stripe';
import { createClient } from '@supabase/supabase-js';

// Server-seitige Paket-Definition (Quelle der Wahrheit für Preise – nie dem Client vertrauen).
const PLANS = {
  testpass:         { abo: true,  stunden: 4,  preis: 79,  label: 'Ab und zu Pass' },
  gelegenheitspass: { abo: true,  stunden: 8,  preis: 139, label: 'Gelegenheitspass' },
  allinclusive:     { abo: true,  stunden: 12, preis: 189, label: 'Profi-Pass' },
  sparpass:         { abo: false, stunden: 30, preis: 399, label: 'Spar Pass' },
};

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'method_not_allowed' });
  if (!process.env.STRIPE_SECRET_KEY) return res.status(500).json({ error: 'stripe_not_configured' });

  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
  const site = process.env.SITE_URL || 'https://www.deutschoderwas-club.de';

  try {
    const { packageId, passId, userId, email, embedded } = (req.body || {});
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
      common.success_url = `${site}/konto.html?bezahlt=1`;
      common.cancel_url = `${site}/#preise`;
    }

    let session;
    if (plan.abo) {
      // Probestunde nur EINMAL pro Person. Wer schon je eine Testphase ODER (auch gekündigt)
      // schon irgendein Abo bei Stripe hatte, zahlt sofort – kein erneutes 7-Tage-Trial.
      let trialDays = 7;
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

      const subData = { metadata: { userId, plan: id, stunden: String(plan.stunden) } };
      if (trialDays > 0) subData.trial_period_days = 7; // nur Neukund:innen bekommen die Gratis-Probestunde

      session = await stripe.checkout.sessions.create({
        ...common,
        mode: 'subscription',
        line_items: [{
          quantity: 1,
          price_data: {
            currency: 'eur',
            unit_amount: plan.preis * 100,
            recurring: { interval: 'month' },
            product_data: { name: `deutschoderwas Club – ${plan.label}`, description: `${plan.stunden} LIVE-Stunden pro Monat · Üben 24/7, Amanda & Community inklusive` },
          },
        }],
        subscription_data: subData,
        metadata: { userId, plan: id, stunden: String(plan.stunden), kind: 'abo', trial: trialDays > 0 ? '1' : '0' },
      });
    } else {
      // Einmalkauf (Spar Pass)
      session = await stripe.checkout.sessions.create({
        ...common,
        mode: 'payment',
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
