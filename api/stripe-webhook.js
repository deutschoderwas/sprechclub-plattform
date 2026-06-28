// Stripe Webhook — schreibt nach erfolgreicher Zahlung Stunden/Pass gut.
// In Stripe als Endpoint anlegen: https://www.deutschoderwas-club.de/api/stripe-webhook
// Events: checkout.session.completed, invoice.paid, customer.subscription.deleted
// Benötigt ENV: STRIPE_SECRET_KEY, STRIPE_WEBHOOK_SECRET, SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY
import Stripe from 'stripe';
import { createClient } from '@supabase/supabase-js';

// Roh-Body für die Signaturprüfung (kein JSON-Parsing durch Vercel)
export const config = { api: { bodyParser: false } };

function rawBody(req) {
  return new Promise((resolve, reject) => {
    const chunks = [];
    req.on('data', (c) => chunks.push(c));
    req.on('end', () => resolve(Buffer.concat(chunks)));
    req.on('error', reject);
  });
}

// --- Amanda Plus: Zugangs-Mail mit Freischalt-Link (kein Club-Konto nötig) ---
const AMANDA_UNLOCK = 'https://deutschoderwas.de/amanda-plus.html?code=AMANDA-SPRECHEN-658BA4';

async function sendAmandaAccess(s) {
  try {
    const email = s.customer_details?.email || s.customer_email;
    if (!email) { console.error('amanda: keine E-Mail in Session', s.id); return; }
    if (!process.env.BREVO_API_KEY) { console.error('amanda: BREVO_API_KEY fehlt'); return; }
    const name = ((s.customer_details?.name || '').trim().split(' ')[0]) || '';
    const hallo = name ? `Hallo ${name},` : 'Hallo,';
    const html = `<!DOCTYPE html><html lang="de"><body style="margin:0;background:#FFF8F0;font-family:-apple-system,Segoe UI,Roboto,Helvetica,Arial,sans-serif;color:#1A1A1A">
  <div style="max-width:560px;margin:0 auto;padding:28px 20px">
    <div style="background:#fff;border-radius:18px;padding:32px 28px;box-shadow:0 8px 30px rgba(0,0,0,.06)">
      <p style="font-size:13px;letter-spacing:.5px;color:#DD0000;font-weight:800;margin:0 0 8px">DEUTSCHODERWAS · AMANDA PLUS</p>
      <h1 style="font-size:24px;margin:0 0 14px;line-height:1.25">🎉 Dein Zugang ist da!</h1>
      <p style="font-size:16px;line-height:1.6;margin:0 0 18px">${hallo} vielen Dank für dein Abo! Ab jetzt kannst du <b>rund um die Uhr mit Amanda</b>, deiner KI-Deutschtutorin, sprechen.</p>
      <p style="text-align:center;margin:26px 0">
        <a href="${AMANDA_UNLOCK}" style="display:inline-block;background:#DD0000;color:#fff;text-decoration:none;font-weight:800;font-size:17px;padding:15px 30px;border-radius:50px">🚀 Amanda jetzt freischalten</a>
      </p>
      <p style="font-size:14px;line-height:1.6;color:#555;margin:0 0 6px">Falls der Button nicht geht, kopiere diesen Link in deinen Browser:</p>
      <p style="font-size:13px;line-height:1.5;word-break:break-all;margin:0 0 20px"><a href="${AMANDA_UNLOCK}" style="color:#DD0000">${AMANDA_UNLOCK}</a></p>
      <p style="font-size:13px;line-height:1.6;color:#888;margin:0">Tipp: Speichere dir diese Mail – über den Link kommst du jederzeit wieder rein. Monatlich kündbar. Bei Fragen einfach auf diese Mail antworten. 💛<br>Julia</p>
    </div>
  </div></body></html>`;
    const r = await fetch('https://api.brevo.com/v3/smtp/email', {
      method: 'POST',
      headers: { 'api-key': process.env.BREVO_API_KEY, 'Content-Type': 'application/json' },
      body: JSON.stringify({
        sender: { name: 'Julia | deutschoderwas', email: process.env.BREVO_SENDER_EMAIL || 'info@deutschoderwas.de' },
        replyTo: { name: 'Julia', email: process.env.BREVO_SENDER_EMAIL || 'info@deutschoderwas.de' },
        to: [{ email, name }],
        subject: '🎉 Dein Zugang zu Amanda Plus',
        htmlContent: html,
      }),
    });
    if (!r.ok) console.error('amanda brevo fail', r.status, await r.text());
    else console.log('amanda access mail sent ->', email);
  } catch (e) { console.error('amanda mail err', e); }
}

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).end();
  if (!process.env.STRIPE_SECRET_KEY || !process.env.STRIPE_WEBHOOK_SECRET) {
    return res.status(500).json({ error: 'stripe_not_configured' });
  }
  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

  let event;
  try {
    const raw = await rawBody(req);
    event = stripe.webhooks.constructEvent(raw, req.headers['stripe-signature'], process.env.STRIPE_WEBHOOK_SECRET);
  } catch (e) {
    console.error('webhook signature', e.message);
    return res.status(400).send(`Webhook Error: ${e.message}`);
  }

  const sb = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_SERVICE_ROLE_KEY);

  // Stunden gutschreiben — idempotent über credit_log.stripe_session_id (dedupeKey).
  async function grant(userId, change, reason, dedupeKey, passDays) {
    if (!userId || !change) return;
    const { data: exists } = await sb.from('credit_log').select('id').eq('stripe_session_id', dedupeKey).maybeSingle();
    if (exists) return; // schon verbucht
    await sb.from('credit_log').insert({ user_id: userId, change, reason, stripe_session_id: dedupeKey });
    const { data: p } = await sb.from('profiles').select('credits,pass_until').eq('id', userId).maybeSingle();
    const patch = { credits: (p?.credits || 0) + change };
    if (passDays) {
      const base = (p?.pass_until && new Date(p.pass_until) > new Date()) ? new Date(p.pass_until) : new Date();
      base.setDate(base.getDate() + passDays);
      patch.pass_until = base.toISOString();
    }
    await sb.from('profiles').update(patch).eq('id', userId);
  }

  try {
    if (event.type === 'checkout.session.completed') {
      const s = event.data.object;
      const userId = s.client_reference_id || s.metadata?.userId;

      // Amanda Plus (über Stripe-Payment-Link, kein Club-Konto): Zugangs-Mail senden & fertig.
      const isAmanda = s.metadata?.product === 'amanda'
        || (!userId && (s.amount_total === 999 || s.amount_subtotal === 999));
      if (isAmanda) {
        await sendAmandaAccess(s);
        return res.status(200).json({ received: true, amanda: true });
      }

      if (s.mode === 'payment') {
        // Einmalkauf (Spar Pass): volle Stunden sofort
        const credits = parseInt(s.metadata?.credits || '0', 10);
        await grant(userId, credits, 'kauf:' + (s.metadata?.plan || 'paket'), 'cs_' + s.id, null);
      } else if (s.mode === 'subscription') {
        if (s.metadata?.trial === '1') {
          await grant(userId, 1, 'trial:' + (s.metadata?.plan || 'abo'), 'trial_' + s.id, 7);
        }
      }
    } else if (event.type === 'invoice.paid') {
      const inv = event.data.object;
      if ((inv.amount_paid || 0) > 0 && inv.subscription) {
        const sub = await stripe.subscriptions.retrieve(inv.subscription);
        const stunden = parseInt(sub.metadata?.stunden || '0', 10);
        const userId = sub.metadata?.userId;
        const plan = sub.metadata?.plan || 'abo';
        await grant(userId, stunden, 'abo:' + plan, 'inv_' + inv.id, 31);
      }
    }
  } catch (e) {
    console.error('webhook handler', e);
    return res.status(500).json({ error: String(e.message || e) });
  }

  return res.status(200).json({ received: true });
}
