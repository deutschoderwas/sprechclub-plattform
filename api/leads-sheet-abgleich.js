// ============================================================
//  deutschoderwas club — die Google-Tabelle in die Lead-Liste holen
//
//  Julia, 26.10.2026: "immer wieder vom Google Doc rueberholen und
//  auch in Brevo ne?"
//
//  Bisher hingen zwei Wege nebeneinander, ohne voneinander zu wissen:
//    - Das Formular auf der Plattform schreibt ueber api/waitlist.js
//      direkt in leads und legt den Brevo-Kontakt gleich mit an.
//    - Das Google-Formular schreibt nur in die Tabelle "Club
//      Warteliste". Von dort kam bisher nichts automatisch herueber.
//
//  Dass beide Listen fast deckungsgleich waren, war also kein
//  Automatismus. Am 26.10. fehlten zwei Eintraege vom selben Tag.
//
//  Dieser Dienst holt sie nach. Brevo braucht er nicht selbst zu
//  bedienen: leads-brevo-abgleich laeuft alle zehn Minuten und traegt
//  jeden neuen Lead in die Liste ein, lead-willkommen schickt danach
//  die Willkommensmail. Hier endet die Arbeit also bei leads — der
//  Rest haengt sich von allein dran.
//
//  Woher die Tabelle kommt: SHEET_WARTELISTE_CSV, eine im Web
//  veroeffentlichte CSV-Adresse der Tabelle (in Google Sheets unter
//  Datei -> Freigeben -> Im Web veroeffentlichen, Blatt waehlen,
//  Format CSV). Ohne diese Variable macht der Dienst nichts und sagt
//  das auch — er raet nicht an einer Adresse herum.
//
//  Zwei Dinge macht er bewusst NICHT:
//  - Niemanden aendern oder loeschen. Er traegt nur nach.
//  - Niemanden zurueckholen, den Julia aus der Lead-Liste entfernt
//    hat. Jede einmal gesehene Adresse wird in email_log vermerkt;
//    was dort steht, kommt kein zweites Mal.
//
//  Geplant mit pg_cron:
//    0 * * * *  ->  POST /api/leads-sheet-abgleich
// ============================================================
import { createClient } from '@supabase/supabase-js';

const KENNUNG = 'lead_sheet_gesehen';
const GUELTIG = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;

/* Ab wann uebernommen wird. Die Lead-Liste beginnt am 13.08.2026;
   alles davor ist Vorgeschichte und soll nicht nachtraeglich
   auftauchen. */
const AB = process.env.SHEET_WARTELISTE_AB || '2026-08-13';

/* Ein CSV-Zerleger, der Anfuehrungszeichen und Zeilenumbrueche
   innerhalb eines Feldes aushaelt — in dieser Tabelle stehen ganze
   Absaetze in einer Zelle. */
function csv(text) {
  const zeilen = [];
  let feld = '', zeile = [], drin = false;
  for (let i = 0; i < text.length; i++) {
    const c = text[i];
    if (drin) {
      if (c === '"') {
        if (text[i + 1] === '"') { feld += '"'; i++; } else drin = false;
      } else feld += c;
      continue;
    }
    if (c === '"') { drin = true; continue; }
    if (c === ',') { zeile.push(feld); feld = ''; continue; }
    if (c === '\n') { zeile.push(feld); zeilen.push(zeile); zeile = []; feld = ''; continue; }
    if (c === '\r') continue;
    feld += c;
  }
  if (feld.length || zeile.length) { zeile.push(feld); zeilen.push(zeile); }
  return zeilen;
}

/* Der Zeitstempel kommt als 26.10.2026 11:06:37. */
function datum(s) {
  const m = /^\s*(\d{1,2})\.(\d{1,2})\.(\d{4})/.exec(String(s || ''));
  if (!m) return null;
  return m[3] + '-' + m[2].padStart(2, '0') + '-' + m[1].padStart(2, '0');
}
function zeitstempel(s) {
  const m = /^\s*(\d{1,2})\.(\d{1,2})\.(\d{4})[ ,]+(\d{1,2}):(\d{2})(?::(\d{2}))?/.exec(String(s || ''));
  if (!m) return null;
  /* Die Tabelle steht in deutscher Zeit. Den Versatz holt sich der
     Server selbst, damit es nach der Zeitumstellung nicht um eine
     Stunde danebenliegt. */
  const roh = Date.UTC(+m[3], +m[2] - 1, +m[1], +m[4], +m[5], +(m[6] || 0));
  const prob = new Date(roh);
  const berlin = new Date(prob.toLocaleString('en-US', { timeZone: 'Europe/Berlin' }));
  const utc = new Date(prob.toLocaleString('en-US', { timeZone: 'UTC' }));
  return new Date(roh - (berlin - utc)).toISOString();
}

/* Welche Spalte ist welche — nach der Kopfzeile, nicht nach Position.
   Wenn Julia im Formular eine Frage einfuegt, soll hier nichts
   verrutschen. */
function spalten(kopf) {
  const finde = (...teile) => {
    for (let i = 0; i < kopf.length; i++) {
      const k = String(kopf[i] || '').toLowerCase();
      if (teile.some((t) => k.includes(t))) return i;
    }
    return -1;
  };
  return {
    zeit: finde('zeitstempel', 'timestamp'),
    bereich: finde('bereich'),
    niveau: finde('sprachniveau', 'niveau'),
    schwierig: finde('schwierigkeiten'),
    mehr: finde('mehr fragen'),
    name: finde('dein name', 'name'),
    email: finde('email', 'e-mail'),
    whatsapp: finde('whatsapp', 'nummer'),
  };
}

export default async function handler(req, res) {
  if (req.method !== 'POST' && req.method !== 'GET') {
    return res.status(405).json({ ok: false, error: 'nur_post' });
  }
  if (!process.env.SUPABASE_URL || !process.env.SUPABASE_SERVICE_ROLE_KEY) {
    return res.status(500).json({ ok: false, error: 'supabase_env_missing' });
  }
  const quelle = process.env.SHEET_WARTELISTE_CSV;
  if (!quelle) {
    return res.status(200).json({
      ok: false,
      grund: 'keine_tabellenadresse',
      hinweis: 'SHEET_WARTELISTE_CSV fehlt. In Google Sheets: Datei → Freigeben → '
             + 'Im Web veröffentlichen → Blatt wählen → CSV. Die Adresse in Vercel eintragen.',
    });
  }

  const sb = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_SERVICE_ROLE_KEY);

  /* 1. Tabelle holen */
  let text;
  try {
    const r = await fetch(quelle, { redirect: 'follow' });
    if (!r.ok) return res.status(200).json({ ok: false, grund: 'tabelle_' + r.status });
    text = await r.text();
    if (/<html/i.test(text.slice(0, 200))) {
      return res.status(200).json({
        ok: false, grund: 'keine_csv',
        hinweis: 'Die Adresse liefert eine Webseite statt CSV — bitte die veröffentlichte CSV-Adresse eintragen.',
      });
    }
  } catch (e) {
    return res.status(200).json({ ok: false, grund: 'tabelle_nicht_erreichbar', detail: String(e).slice(0, 160) });
  }

  const zeilen = csv(text);
  if (zeilen.length < 2) return res.status(200).json({ ok: false, grund: 'tabelle_leer' });
  const s = spalten(zeilen[0]);
  if (s.email < 0) return res.status(200).json({ ok: false, grund: 'keine_email_spalte' });

  /* 2. Zeilen ab dem Stichtag, Doppelte zusammenfassen */
  const kandidaten = new Map();
  let zuAlt = 0, ohneAdresse = 0;
  for (let i = 1; i < zeilen.length; i++) {
    const z = zeilen[i];
    if (!z || !z.length) continue;
    const tag = datum(z[s.zeit]);
    if (!tag) continue;
    if (tag < AB) { zuAlt++; continue; }
    const mail = String(z[s.email] || '').trim().toLowerCase().replace(/\s+/g, '');
    if (!GUELTIG.test(mail)) { ohneAdresse++; continue; }
    if (kandidaten.has(mail)) continue;
    const hol = (i2) => (i2 >= 0 ? String(z[i2] || '').trim() : '');
    kandidaten.set(mail, {
      created_at: zeitstempel(z[s.zeit]) || new Date(tag + 'T12:00:00Z').toISOString(),
      name: hol(s.name).slice(0, 120),
      email: mail,
      whatsapp: hol(s.whatsapp).slice(0, 60),
      niveau: hol(s.niveau).slice(0, 20),
      schwierigkeiten: hol(s.schwierig).slice(0, 2000),
      mehr: hol(s.mehr).slice(0, 2000),
      quelle: 'google-formular',
      status: 'neu',
    });
  }

  const adressen = [...kandidaten.keys()];

  /* 3. Wer schon in der Lead-Liste steht, bleibt unberuehrt */
  const vorhanden = new Set();
  for (let i = 0; i < adressen.length; i += 200) {
    const { data } = await sb.from('leads').select('email').in('email', adressen.slice(i, i + 200));
    (data || []).forEach((l) => vorhanden.add(String(l.email || '').trim().toLowerCase()));
  }
  /* Grossschreibung in der Tabelle ist haeufig — deshalb zur Sicherheit
     noch einmal ueber alle Leads vergleichen. */
  const { data: alleLeads } = await sb.from('leads').select('email').limit(5000);
  (alleLeads || []).forEach((l) => vorhanden.add(String(l.email || '').trim().toLowerCase()));

  /* 4. Und wer schon einmal uebernommen wurde, kommt nicht wieder —
        auch wenn Julia ihn inzwischen aus der Liste genommen hat. */
  const gesehen = new Set();
  for (let i = 0; i < adressen.length; i += 200) {
    const { data } = await sb.from('email_log')
      .select('ref').eq('kind', KENNUNG).in('ref', adressen.slice(i, i + 200));
    (data || []).forEach((z) => gesehen.add(z.ref));
  }

  const neu = adressen.filter((m) => !vorhanden.has(m) && !gesehen.has(m)).map((m) => kandidaten.get(m));

  const bilanz = {
    ok: true,
    zeilen_gesamt: zeilen.length - 1,
    vor_stichtag: zuAlt,
    ohne_brauchbare_adresse: ohneAdresse,
    in_tabelle_ab_stichtag: adressen.length,
    schon_vorhanden: adressen.length - neu.length,
    neu: neu.length,
    stichtag: AB,
  };

  if (!neu.length) return res.status(200).json({ ...bilanz, uebernommen: 0 });
  if (String((req.query && req.query.probe) || '') === '1') {
    return res.status(200).json({ ...bilanz, probe: true, beispiele: neu.slice(0, 5).map((n) => n.email) });
  }

  /* 5. Nachtragen — einzeln, damit eine kaputte Zeile die anderen
        nicht mitreisst. Erst der Vermerk, dann der Eintrag. */
  let uebernommen = 0;
  const schiefgelaufen = [];
  for (const n of neu) {
    const { error: logErr } = await sb.from('email_log').insert({ kind: KENNUNG, ref: n.email });
    if (logErr) continue;
    const { error } = await sb.from('leads').insert(n);
    if (error) {
      schiefgelaufen.push({ email: n.email, grund: String(error.message || error).slice(0, 120) });
      await sb.from('email_log').delete().eq('kind', KENNUNG).eq('ref', n.email);
    } else uebernommen++;
  }

  return res.status(200).json({
    ...bilanz, uebernommen,
    schiefgelaufen: schiefgelaufen.slice(0, 10),
    weiter: 'leads-brevo-abgleich trägt sie innerhalb von zehn Minuten in Brevo ein, '
          + 'lead-willkommen schickt danach die Willkommensmail.',
  });
}
