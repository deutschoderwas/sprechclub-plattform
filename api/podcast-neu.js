// ============================================================
//  /api/podcast-neu — die neuesten Folgen, oeffentlich
//
//  Julia, 20.10.: "hier auch immer wieder aktualisieren mit
//  thumbnail".
//
//  Auf der Startseite standen vier Folgen fest im HTML. Die waren
//  nach ein paar Wochen die zweitneuesten, dann die von vorletztem
//  Monat. Ein Abschnitt, der "Regelmaessig neue Folgen" verspricht
//  und dann alte zeigt, arbeitet gegen sich selbst.
//
//  Herausgegeben wird nur, was auch im Podcast-Verzeichnis steht:
//  Titel, Niveau, Laenge, Datum und das Bild. Kein Transkript,
//  keine Audiodatei — die laufen weiter ueber die Mitgliederseite.
//
//  GET /api/podcast-neu         -> je eine Folge fuer A2, B1, B2, C1
//  GET /api/podcast-neu?anzahl=6 -> die 6 neuesten, Niveau egal
//
//  Antwort: { ok, folgen: [{ id, level, titel, dauer, bild, datum }] }
// ============================================================
import { createClient } from '@supabase/supabase-js';

const STUFEN = ['A2', 'B1', 'B2', 'C1'];

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
  if (req.method === 'OPTIONS') return res.status(204).end();
  if (req.method !== 'GET') return res.status(405).json({ error: 'method_not_allowed' });

  /* Neue Folgen kommen taeglich, nicht minuetlich. Fuenf Minuten
     Zwischenspeicher am Rand reichen voellig. */
  res.setHeader('Cache-Control', 'public, s-maxage=300, stale-while-revalidate=1800');

  if (!process.env.SUPABASE_URL || !process.env.SUPABASE_SERVICE_ROLE_KEY)
    return res.status(200).json({ ok: false, grund: 'nicht_konfiguriert', folgen: [] });

  const anzahl = Math.min(12, Math.max(1, Number(req.query && req.query.anzahl) || 0));

  const sb = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_SERVICE_ROLE_KEY,
    { auth: { persistSession: false } });

  try {
    const { data, error } = await sb
      .from('podcasts')
      .select('id, datum, level, titel, dauer, bild')
      .eq('status', 'live')
      .order('datum', { ascending: false })
      .limit(120);
    if (error) throw error;

    /* Eine Folge ohne Titel oder ohne Laenge ist auf einer
       Verkaufsseite eine leere Zeile — die lassen wir weg. */
    const brauchbar = (data || []).filter(f => f && f.titel && f.dauer);

    let folgen;
    if (anzahl) {
      folgen = brauchbar.slice(0, anzahl);
    } else {
      /* Je die neueste Folge pro Niveau, in der Reihenfolge
         A2, B1, B2, C1 — so wie der Abschnitt bisher aussah.
         Fehlt ein Niveau, ruecken die anderen nach, damit die
         Liste nicht kuerzer wird als die Karte hoch ist. */
      folgen = [];
      STUFEN.forEach(s => {
        const f = brauchbar.find(x => String(x.level || '').toUpperCase() === s);
        if (f) folgen.push(f);
      });
      if (folgen.length < 4) {
        brauchbar.forEach(f => {
          if (folgen.length < 4 && folgen.indexOf(f) < 0) folgen.push(f);
        });
      }
    }

    return res.status(200).json({
      ok: true,
      stand: new Date().toISOString(),
      folgen: folgen.map(f => ({
        id: f.id, level: String(f.level || '').toUpperCase(), titel: f.titel,
        dauer: f.dauer, bild: f.bild || '', datum: f.datum
      }))
    });
  } catch (e) {
    console.error('podcast-neu', e);
    /* Lieber eine leere Liste als eine Fehlermeldung: Die Seite
       behaelt dann die vier Folgen, die fest im HTML stehen. */
    return res.status(200).json({ ok: false, grund: 'fehler', folgen: [] });
  }
}
