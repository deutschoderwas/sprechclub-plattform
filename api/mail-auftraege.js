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
};

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

  let bericht;
  try {
    bericht = await lauf(sb, auftrag);
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
