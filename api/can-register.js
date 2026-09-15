// Registrierungs-Sperre.
//
// WARUM DIESE FASSUNG
//
// Julias Regel: Wer ein Abo kauft, MUSS sich mit dieser E-Mail-Adresse
// registrieren können. Punkt.
//
// Vorher hing das an EINER Tabelle: pending_purchases. Die füllt der
// Stripe-Webhook. Verpasst der Webhook ein Ereignis, hängt Make, oder
// kauft jemand über einen Weg, der die Zeile nicht schreibt, dann ist
// ein zahlender Mensch ausgesperrt — und niemand merkt es, weil die
// Prüfung nichts mitschreibt.
//
// Ab jetzt in drei Stufen:
//   1. Unsere eigene Regel (darf_sich_registrieren): Kauf in der
//      Datenbank oder Profil mit echtem Zugang. Das ist der schnelle,
//      normale Weg.
//   2. Sagt die Nein, wird STRIPE SELBST gefragt: Gibt es zu dieser
//      Adresse einen Kunden mit laufendem Abo (active, trialing oder
//      past_due)? Dann darf er rein — Stripe ist die Wahrheit, nicht
//      unsere Kopie.
//   3. Findet Stripe eines, wird die fehlende Zeile in
//      pending_purchases NACHGETRAGEN. Damit heilt sich die Kopie
//      selbst und der Rest der Plattform sieht den Kauf auch.
//
// Und jeder Versuch wird protokolliert (registrier_versuche), damit
// Julia sehen kann, wer vergeblich klopft.
//
// Wenn Stripe nicht antwortet, wird durchgelassen. Das ist Absicht:
// Der echte Schutz ist darf_rein() beim Betreten der Plattform — ein
// frisches Profil startet auf 'registriert' ohne Tarif und kommt
// nirgendwo hinein. Lieber einmal jemanden registrieren lassen, der
// nicht zahlt, als eine zahlende Teilnehmerin auszusperren.
//
// POST { email } -> { eligible: boolean, reason }
// ENV: SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY, STRIPE_SECRET_KEY
import Stripe from 'stripe';
import { createClient } from '@supabase/supabase-js';

const LAEUFT = ['active', 'trialing', 'past_due'];

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  if (req.method === 'OPTIONS') return res.status(204).end();
  if (req.method !== 'POST') return res.status(405).json({ error: 'method_not_allowed' });

  const email = String((req.body || {}).email || '').trim().toLowerCase();
  if (!email || !email.includes('@')) return res.status(400).json({ error: 'bad_email' });

  if (!process.env.SUPABASE_URL || !process.env.SUPABASE_SERVICE_ROLE_KEY) {
    return res.status(200).json({ eligible: true, reason: 'no_service_key' });
  }
  const sb = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_SERVICE_ROLE_KEY);

  async function merken(erlaubt, grund) {
    try { await sb.from('registrier_versuche').insert({ email, erlaubt, grund }); } catch (e) {}
    return res.status(200).json({ eligible: erlaubt, reason: grund });
  }

  // ---------- 1. Unsere eigene Regel ----------
  try {
    const { data, error } = await sb.rpc('darf_sich_registrieren', { p_email: email });
    if (error) throw error;
    if (data === true) return merken(true, 'anspruch');
  } catch (e) {
    console.error('can-register/db', e);
    return merken(true, 'db_fehler');          // im Zweifel durchlassen
  }

  // ---------- 2. Stripe fragen ----------
  if (!process.env.STRIPE_SECRET_KEY) return merken(true, 'kein_stripe_schluessel');

  try {
    const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
    const kunden = await stripe.customers.list({ email, limit: 10 });
    let abo = null, kunde = null;

    for (const k of (kunden.data || [])) {
      const abos = await stripe.subscriptions.list({ customer: k.id, status: 'all', limit: 20 });
      const lebt = (abos.data || []).find(a => LAEUFT.includes(a.status));
      if (lebt) { abo = lebt; kunde = k; break; }
    }

    if (!abo) return merken(false, 'kein_anspruch');

    // ---------- 3. Fehlende Kaufzeile nachtragen ----------
    try {
      const { data: da } = await sb.from('pending_purchases')
        .select('id').ilike('email', email).limit(1);
      if (!da || !da.length) {
        let plan = null;
        try {
          const preis = abo.items && abo.items.data && abo.items.data[0] && abo.items.data[0].price;
          plan = (preis && (preis.nickname || preis.lookup_key)) || null;
        } catch (e) {}
        await sb.from('pending_purchases').insert({
          email, plan: plan || 'stripe_abo', stunden: 0, is_trial: abo.status === 'trialing',
          applied: false, stripe_ref: abo.id
        });
      }
      if (kunde && kunde.id) {
        await sb.from('profiles').update({ stripe_customer_id: kunde.id }).ilike('email', email);
      }
    } catch (e) { console.error('can-register/nachtrag', e); }

    return merken(true, 'stripe_abo_' + abo.status);

  } catch (e) {
    console.error('can-register/stripe', e);
    return merken(true, 'stripe_fehler');       // im Zweifel durchlassen
  }
}
