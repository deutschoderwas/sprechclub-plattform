// Erstellt eine Stripe-Checkout-Session.
// POST { packageId, userId, email }   → Stundenpaket / Einzelstunde / Test- / Spar-Pass (Einmalzahlung)
// POST { passId: 'allinclusive', ... } → All-Inclusive-Pass (monatliches Abo: 12 LIVE + alle Kurse)
// POST { courseId,  userId, email }    → digitaler Kurs (Gratis-Kurse werden sofort freigeschaltet)
import Stripe from 'stripe';
import { createClient } from '@supabase/supabase-js';

// Einmalzahlungen (schreiben Stundenguthaben gut)
const PACKAGES = {
  'einzelstunde':     { name: 'deutschoderwas club — Einzelstunde',                  amount: 2500,  credits: 1  },
  'testpass':         { name: 'deutschoderwas club — Testpass · 4 Stunden',          amount: 7900,  credits: 4  },
  'gelegenheitspass': { name: 'deutschoderwas club — Gelegenheitspass · 8 Stunden',  amount: 13900, credits: 8  },
  'sparpass':         { name: 'deutschoderwas club — Spar Pass · 30 Stunden',        amount: 39900, credits: 30 },
  // Alt-IDs (Abwärtskompatibilität)
  'paket-4':  { name: 'deutschoderwas club — 4 Stunden',  amount: 7900,  credits: 4 },
  'paket-8':  { name: 'deutschoderwas club — 8 Stunden',  amount: 13900, credits: 8 },
  'paket-12': { name: 'deutschoderwas club — 12 Stunden', amount: 18900, credits: 12 },
  'paket-30': { name: 'deutschoderwas club „fleißig" — 30 Stunden',        amount: 39900, credits: 30 },
  'paket-60': { name: 'deutschoderwas club „am fleißigsten" — 60 Stunden', amount: 69900, credits: 60 },
};

// Abo-Pässe (monatliche Abbuchung, schalten Kurse frei + füllen Guthaben monatlich auf)
const PASSES = {
  'allinclusive': { name: 'deutschoderwas club — All-Inclusive-Pass', amount: 18900, credits: 12 },
};

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'method_not_allowed' });

  const { packageId, passId, courseId, userId, email } = req.body || {};
  if (!userId || !email) return res.status(400).json({ error: 'bad_request' });

  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
  const origin = process.env.SITE_URL || `https://${req.headers.host}`;

  // ---------- ALL-INCLUSIVE-PASS (Abo) ----------
  if (passId) {
    const pass = PASSES[passId];
    if (!pass) return res.status(400).json({ error: 'bad_request' });
    const session = await stripe.checkout.sessions.create({
      mode: 'subscription',
      customer_email: email,
      line_items: [{
        price_data: {
          currency: 'eur',
          product_data: { name: pass.name },
          unit_amount: pass.amount,
          recurring: { interval: 'month' },
        },
        quantity: 1,
      }],
      metadata: { user_id: userId, pass: passId, credits: String(pass.credits) },
      subscription_data: { metadata: { user_id: userId, pass: passId, credits: String(pass.credits) } },
      success_url: `${origin}/konto.html?pass=ok`,
      cancel_url: `${origin}/live.html#pakete`,
    });
    return res.status(200).json({ url: session.url });
  }

  // ---------- DIGITALER KURS ----------
  if (courseId) {
    const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_SERVICE_ROLE_KEY);
    const { data: course } = await supabase
      .from('courses').select('id, slug, title, price_cents, is_published').eq('id', courseId).maybeSingle();
    if (!course || !course.is_published) return res.status(404).json({ error: 'course_not_found' });

    // Gratis-Kurs: direkt freischalten, keine Bezahlung
    if (!course.price_cents || course.price_cents === 0) {
      await supabase.rpc('grant_enrollment', { p_user_id: userId, p_course_id: course.id, p_source: 'free', p_session: null });
      return res.status(200).json({ enrolled: true, slug: course.slug });
    }

    const session = await stripe.checkout.sessions.create({
      mode: 'payment',
      customer_email: email,
      line_items: [{ price_data: { currency: 'eur', product_data: { name: course.title }, unit_amount: course.price_cents }, quantity: 1 }],
      metadata: { user_id: userId, course_id: course.id, course_slug: course.slug },
      success_url: `${origin}/kurs.html?kurs=${course.slug}&kauf=ok`,
      cancel_url: `${origin}/kurse.html`,
    });
    return res.status(200).json({ url: session.url });
  }

  // ---------- STUNDENPAKET / EINZELSTUNDE / TEST- / SPAR-PASS ----------
  const pkg = PACKAGES[packageId];
  if (!pkg) return res.status(400).json({ error: 'bad_request' });

  const session = await stripe.checkout.sessions.create({
    mode: 'payment',
    customer_email: email,
    line_items: [{ price_data: { currency: 'eur', product_data: { name: pkg.name }, unit_amount: pkg.amount }, quantity: 1 }],
    metadata: { user_id: userId, package_id: packageId, credits: String(pkg.credits) },
    success_url: `${origin}/konto.html?kauf=ok`,
    cancel_url: `${origin}/live.html#pakete`,
  });
  return res.status(200).json({ url: session.url });
}
