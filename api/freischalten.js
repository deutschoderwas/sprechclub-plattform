// ============================================================
//  Freischalten nach dem Kauf
//
//  Wer eine Mitgliedschaft gekauft hat, soll sich mit genau dieser
//  E-Mail registrieren und sofort hineinkommen. So war es gedacht,
//  und so steht es auf der Seite.
//
//  Dazwischen stand bisher die Bestätigungsmail von Supabase. Die
//  wird zwar verschickt, kommt aber nicht zuverlässig an — und
//  solange sie nicht bestätigt ist, lehnt der Login ab. Am 4.
//  September hat jemand ein Jahresabo gekauft, sich zwei Minuten
//  später registriert und kam zwei Tage lang nicht hinein. Das Abo
//  war da, das Konto war da, nur die Mail fehlte.
//
//  Dieser Endpunkt schließt die Lücke: Er prüft, ob für die
//  E-Mail wirklich bezahlt wurde, und bestätigt sie in dem Fall
//  selbst. Die Adresse ist ohnehin schon geprüft — Stripe hat an
//  sie die Rechnung geschickt.
//
//  POST { email } -> { ok, freigeschaltet, grund }
//  Nicht bezahlt? Dann passiert nichts, und die Seite bleibt bei
//  der Bitte, die Mail zu bestätigen.
// ============================================================
import { createClient } from '@supabase/supabase-js';

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  if (req.method === 'OPTIONS') return res.status(204).end();
  if (req.method !== 'POST') return res.status(405).json({ error: 'method_not_allowed' });

  if (!process.env.SUPABASE_URL || !process.env.SUPABASE_SERVICE_ROLE_KEY)
    return res.status(200).json({ ok: true, freigeschaltet: false, grund: 'nicht_konfiguriert' });

  const sb = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_SERVICE_ROLE_KEY,
    { auth: { persistSession: false } });

  /* Sicherheitsnetz: Einmal am Tag alle durchgehen, die bezahlt haben
     und trotzdem nicht bestätigt sind. Der Weg oben greift schon beim
     Registrieren — das hier fängt die Fälle, in denen er nicht lief:
     ein abgebrochener Aufruf, ein Kauf, der später zugeordnet wurde,
     oder jemand, der sich vor dieser Änderung registriert hat.
     Niemand soll je wieder zwei Tage vor der Tür stehen. */
  if (req.query && req.query.alle) {
    const geheim = process.env.CRON_SECRET;
    const erlaubt = !geheim || req.headers['x-vercel-cron'] || req.headers['x-intern'] === geheim;
    if (!erlaubt) return res.status(401).json({ error: 'nicht_erlaubt' });
    return sammelFreischalten(sb, res);
  }

  const email = String((req.body || {}).email || '').trim().toLowerCase();
  if (!email || !email.includes('@')) return res.status(400).json({ error: 'bad_email' });

  try {
    /* Bezahlt? Zwei Wege führen dorthin: ein geparkter Kauf, der noch
       auf die Registrierung wartet, oder ein Profil, dem schon eine
       Stufe zugewiesen wurde. Beides heißt: Es ist Geld geflossen. */
    const { data: kauf } = await sb.from('pending_purchases')
      .select('id').ilike('email', email).limit(1);
    let bezahlt = !!(kauf && kauf.length);
    let grund = bezahlt ? 'kauf' : '';

    if (!bezahlt) {
      const { data: prof } = await sb.from('profiles')
        .select('tier,status').ilike('email', email).maybeSingle();
      if (prof && prof.tier && prof.status !== 'beendet') { bezahlt = true; grund = 'profil'; }
    }
    if (!bezahlt) return res.status(200).json({ ok: true, freigeschaltet: false, grund: 'nicht_bezahlt' });

    /* Das Konto zu der Adresse suchen. listUsers blättert, deshalb
       gehen wir die Seiten durch, bis wir sie haben. */
    let treffer = null;
    for (let seite = 1; seite <= 20 && !treffer; seite++) {
      const { data: liste, error } = await sb.auth.admin.listUsers({ page: seite, perPage: 200 });
      if (error) return res.status(500).json({ error: 'auth_lesen', detail: error.message });
      const nutzer = (liste && liste.users) || [];
      treffer = nutzer.find((u) => String(u.email || '').toLowerCase() === email) || null;
      if (nutzer.length < 200) break;
    }
    if (!treffer) return res.status(200).json({ ok: true, freigeschaltet: false, grund: 'kein_konto' });
    if (treffer.email_confirmed_at)
      return res.status(200).json({ ok: true, freigeschaltet: false, grund: 'schon_bestaetigt' });

    const { error: uErr } = await sb.auth.admin.updateUserById(treffer.id, { email_confirm: true });
    if (uErr) return res.status(500).json({ error: 'bestaetigen', detail: uErr.message });

    console.log('freischalten: bestätigt', email, grund);
    return res.status(200).json({ ok: true, freigeschaltet: true, grund });
  } catch (e) {
    console.error('freischalten', e);
    return res.status(500).json({ error: 'unerwartet', detail: String(e && e.message || e) });
  }
}

/* Alle unbestätigten Konten durchgehen und die freischalten, hinter
   denen eine bezahlte Mitgliedschaft steht. Wer nicht bezahlt hat,
   bleibt unangetastet. */
async function sammelFreischalten(sb, res) {
  const offen = [];
  for (let seite = 1; seite <= 20; seite++) {
    const { data: liste, error } = await sb.auth.admin.listUsers({ page: seite, perPage: 200 });
    if (error) return res.status(500).json({ error: 'auth_lesen', detail: error.message });
    const nutzer = (liste && liste.users) || [];
    nutzer.forEach((u) => { if (!u.email_confirmed_at && u.email) offen.push(u); });
    if (nutzer.length < 200) break;
  }
  if (!offen.length) return res.status(200).json({ ok: true, geprueft: 0, freigeschaltet: [] });

  const adressen = offen.map((u) => String(u.email).toLowerCase());
  const { data: kaeufe } = await sb.from('pending_purchases').select('email').in('email', adressen);
  const { data: profile } = await sb.from('profiles').select('email,tier,status').in('email', adressen);
  const bezahlt = new Set();
  (kaeufe || []).forEach((k) => bezahlt.add(String(k.email || '').toLowerCase()));
  (profile || []).forEach((p) => {
    if (p.tier && p.status !== 'beendet') bezahlt.add(String(p.email || '').toLowerCase());
  });

  const frei = [];
  for (const u of offen) {
    if (!bezahlt.has(String(u.email).toLowerCase())) continue;
    const { error } = await sb.auth.admin.updateUserById(u.id, { email_confirm: true });
    if (!error) { frei.push(u.email); console.log('freischalten (Sammellauf):', u.email); }
  }
  return res.status(200).json({ ok: true, geprueft: offen.length, freigeschaltet: frei });
}
