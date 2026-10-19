// ============================================================
//  Die Auftragstabelle — Versand ohne Knopf
//
//  Julia, 16.10.2026: "was soll das ueberhaupt mit dem verschicken
//  im admin bereich — mach du das fuer mich, wenn ich dich darum
//  bitte."
//
//  Bisher ging der Versand nur ueber einen Knopf im Admin-Bereich,
//  weil dafuer ein Admin-Token gebraucht wurde. Jetzt legt Julia (oder
//  Claude, auf ihr Wort) eine Zeile in mail_auftraege an:
//
//    insert into mail_auftraege (art, grund, angelegt_von)
//    values ('lead_erinnerung', 'Erinnerung an alle ohne Abo', 'Claude');
//
//  Dieser Endpunkt wird alle 15 Minuten von api/auto-nachbereitung.js
//  angestossen, nimmt sich genau einen offenen Auftrag, arbeitet ihn
//  ab und schreibt den Bericht in dieselbe Zeile zurueck. Julia sieht
//  im Admin-Bereich, was gelaufen ist, und niemand muss einen
//  Schluessel in die Hand nehmen.
//
//  Der Griff nach dem Auftrag ist atomar (update ... where
//  status='offen' returning): starten zwei Laeufe gleichzeitig,
//  bekommt nur einer die Zeile. Keine doppelten Mails.
// ============================================================
import { createClient } from '@supabase/supabase-js';
import { erinnerungLauf } from './_lead-erinnerung-lauf.js';

/* Welche Auftragsarten es gibt. Alles andere wird als 'fehler'
   abgelegt statt stillschweigend liegen zu bleiben. */
const ARTEN = {
  lead_erinnerung: (sb, auftrag) => erinnerungLauf(sb, { senden: true, max: auftrag.max_mails || undefined }),
  lead_erinnerung_vorschau: (sb, auftrag) => erinnerungLauf(sb, { senden: false, max: auftrag.max_mails || undefined }),
  /* Den Stripe-Abgleich ausserhalb der Nacht anstossen.

     Julia, 18.10.2026, ueber eine Kundin, deren Profil den nie
     bezahlten Kaufversuch spiegelt statt ihres echten Abos: "Aber toma
     hat doch bezahlt, das was sie storniert hat das entfernen."

     Richtigstellen kann das nur ein Blick zu Stripe — von Hand
     eintragen hiesse Zahlen erfinden, die der naechste naechtliche
     Lauf ohnehin ueberschreibt. /api/pruefe-mitgliedschaften verlangt
     aber den internen Schluessel, und der gehoert auf den Server, nicht
     in eine Unterhaltung. Also ruft der Lauf hier sich selbst auf und
     nimmt den Schluessel aus der eigenen Umgebung: Julia sagt ein
     Wort, eine Zeile in mail_auftraege, und der Abgleich laeuft.

     Mit ?trocken=1 (art 'mitgliedschaften_vorschau') aendert er nichts
     und sagt nur, was er taete. */
  mitgliedschaften_pruefen:  (sb, auftrag, basis) => abgleichAnstossen(basis, false),
  mitgliedschaften_vorschau: (sb, auftrag, basis) => abgleichAnstossen(basis, true),

  /* "Im November zahlt niemand." Vier Kaeufe vom 17./18.10. sind am
     Webhook vorbeigelaufen und wuerden am 17. November abgebucht.
     Julia, 19.10.2026: "Ne, Susanna naechste Zahlung am 01.12 und
     Alona auch am 01.12!!!!" — siehe api/abbuchung-verschieben.js. */
  abbuchung_verschieben: (sb, auftrag, basis) => endpunktAnstossen(basis, '/api/abbuchung-verschieben', false),
  abbuchung_vorschau:    (sb, auftrag, basis) => endpunktAnstossen(basis, '/api/abbuchung-verschieben', true),

  /* Die Kaufbestaetigung nachschicken, die der tote Webhook verschluckt
     hat. Julia, 19.10.2026: "dann kannst du denen die neue Mail
     schicken, dass wir einen technischen Fehler hatten." */
  nachzuegler_mail:     (sb, auftrag, basis) => endpunktAnstossen(basis, '/api/nachzuegler-mail', false),
  nachzuegler_vorschau: (sb, auftrag, basis) => endpunktAnstossen(basis, '/api/nachzuegler-mail', true),
};

/* Einen eigenen Endpunkt mit dem internen Schluessel aufrufen. Der
   Schluessel steht in der Umgebung des Servers und bleibt dort —
   deshalb ruft der Lauf sich selbst auf, statt ihn irgendwo
   hineinzureichen. */
async function endpunktAnstossen(basis, pfad, trocken) {
  const url = basis + pfad + (trocken ? '?trocken=1' : '');
  const r = await fetch(url, { headers: { 'x-intern': process.env.CRON_SECRET || '' },
                               signal: AbortSignal.timeout(250000) });
  const bericht = await r.json().catch(() => ({ ok: false, grund: 'antwort_unlesbar' }));
  return { ok: r.ok && bericht && bericht.ok !== false, http: r.status, ...bericht };
}

async function abgleichAnstossen(basis, trocken) {
  const url = basis + '/api/pruefe-mitgliedschaften' + (trocken ? '?trocken=1' : '');
  const r = await fetch(url, {
    headers: { 'x-intern': process.env.CRON_SECRET || '' },
    signal: AbortSignal.timeout(250000),
  });
  const bericht = await r.json().catch(() => ({ ok: false, grund: 'antwort_unlesbar' }));
  return { ok: r.ok && bericht && bericht.ok !== false, http: r.status, trocken, ...bericht };
}

/* Ein Lauf, der laenger als eine halbe Stunde auf 'laeuft' steht, ist
   abgestuerzt (Vercel beendet eine Funktion viel frueher). Den geben
   wir wieder frei, damit ein Auftrag nicht fuer immer haengt. */
async function haengerBefreien(sb) {
  const grenze = new Date(Date.now() - 30 * 60 * 1000).toISOString();
  await sb.from('mail_auftraege').update({ status: 'offen', gestartet_at: null })
    .eq('status', 'laeuft').lt('gestartet_at', grenze);
}

export default async function handler(req, res) {
  if (!process.env.SUPABASE_URL || !process.env.SUPABASE_SERVICE_ROLE_KEY) {
    return res.status(500).json({ error: 'supabase_env_missing' });
  }
  const sb = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_SERVICE_ROLE_KEY);

  await haengerBefreien(sb);

  /* Genau einen Auftrag greifen. Das .eq('status','offen') im update
     ist die Sperre: wer die Zeile schon umgestellt hat, hat sie. */
  const { data: kandidaten } = await sb.from('mail_auftraege')
    .select('id').eq('status', 'offen').order('id', { ascending: true }).limit(1);
  const naechster = (kandidaten || [])[0];
  if (!naechster) return res.status(200).json({ ok: true, nichts_zu_tun: true });

  const { data: gegriffen } = await sb.from('mail_auftraege')
    .update({ status: 'laeuft', gestartet_at: new Date().toISOString() })
    .eq('id', naechster.id).eq('status', 'offen')
    .select('id,art,grund,angelegt_von,max_mails');
  const auftrag = (gegriffen || [])[0];
  if (!auftrag) return res.status(200).json({ ok: true, schon_vergeben: naechster.id });

  const lauf = ARTEN[String(auftrag.art || '')];
  if (!lauf) {
    await sb.from('mail_auftraege').update({
      status: 'fehler', fertig_at: new Date().toISOString(),
      bericht: { grund: 'unbekannte_art', art: auftrag.art },
    }).eq('id', auftrag.id);
    return res.status(200).json({ ok: false, grund: 'unbekannte_art', art: auftrag.art });
  }

  /* Die eigene Adresse — wortgleich mit api/daily.js, damit es nur eine
     Schreibweise gibt. */
  const basis = process.env.SITE_URL || 'https://www.deutschoderwas-club.de';

  let bericht;
  try {
    bericht = await lauf(sb, auftrag, basis);
  } catch (e) {
    bericht = { ok: false, grund: 'abgebrochen', fehlertext: String((e && e.message) || e).slice(0, 400) };
  }

  await sb.from('mail_auftraege').update({
    status: bericht && bericht.ok ? 'fertig' : 'fehler',
    fertig_at: new Date().toISOString(),
    bericht,
  }).eq('id', auftrag.id);

  return res.status(200).json({ ok: true, auftrag: auftrag.id, art: auftrag.art, bericht });
}
