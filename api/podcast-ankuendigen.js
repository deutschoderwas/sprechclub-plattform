// ============================================================
//  /api/podcast-ankuendigen — sagt im Chat Bescheid, wenn neue Folgen da sind
//
//  Julia, 20.11.2026, auf die Frage, ob die Schueler von neuen Folgen
//  erfahren: "ne es muss im chat geschrieben sein und auch dann als
//  Email wenn es um neue Podcats geht."
//
//  Bisher erfuhr es niemand. Die einzige Stelle, die neue Folgen
//  erwaehnt, ist die taegliche Community-Mail — und deren Aufgabe ist
//  abgeschaltet und ist noch nie gelaufen. Wer nicht von selbst in den
//  Podcastbereich schaut, merkt also nicht, dass montags, mittwochs und
//  freitags vier Folgen dazukommen.
//
//  Dieser Endpunkt legt EINEN Beitrag fuer den Tag an, in dem alle
//  Folgen des Tages stehen: Niveau, Titel, Laenge, Link. Er schreibt
//  nicht direkt in den Chat, sondern in ki_beitraege — denselben Weg,
//  den Mila, Tom und Amanda nehmen. Damit gilt dasselbe wie dort:
//  ki_team_posten() veroeffentlicht innerhalb von 15 Minuten, und Julia
//  sieht den Beitrag vorher in der Verwaltung und kann ihn abschalten.
//
//  Doppelt kann nichts entstehen: die Quelle traegt das Datum, und
//  vorher wird nachgesehen, ob es den Eintrag schon gibt.
//
//  Darf jederzeit mehrmals aufgerufen werden.
//    ?trocken=1   zeigt nur, was entstehen wuerde
//    ?datum=YYYY-MM-DD   ein bestimmter Tag statt heute
// ============================================================
import { createClient } from '@supabase/supabase-js';

const KANAL = 'club-news';          // 📣 lesen alle, schreiben nur wir
const WER   = 'Amanda';
const SEITE = process.env.SITE_URL || 'https://www.deutschoderwas-club.de';
const REIHE = ['A1', 'A2', 'B1', 'B2', 'C1', 'C2'];

export default async function handler(req, res) {
  const geheim = process.env.CRON_SECRET || '';
  const kopf = req.headers['x-intern'] || '';
  const ausAdmin = (req.headers.authorization || '').startsWith('Bearer ');
  if (geheim && kopf !== geheim && !ausAdmin) return res.status(401).json({ ok: false, error: 'nicht erlaubt' });
  if (!process.env.SUPABASE_SERVICE_ROLE_KEY) return res.status(200).json({ ok: false, skipped: 'supabase fehlt' });

  const trocken = String(req.query?.trocken || '') === '1';
  const datum = String(req.query?.datum || '')
    || new Intl.DateTimeFormat('en-CA', { timeZone: 'Europe/Berlin' }).format(new Date());
  const sb = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_SERVICE_ROLE_KEY);
  const quelle = 'podcast-tag:' + datum;

  const { data: schon } = await sb.from('ki_beitraege').select('id,status').eq('quelle', quelle).limit(1);
  if (schon && schon.length) return res.status(200).json({ ok: true, datum, angelegt: 0, grund: 'heute schon angekuendigt' });

  /* Nur Folgen mit Ton. Ein Entwurf ohne Audiodatei ist nicht hoerbar,
     und eine Ankuendigung, die ins Leere fuehrt, ist schlimmer als gar
     keine. */
  const { data: pods } = await sb.from('podcasts')
    .select('id,level,titel,dauer,datei,status').eq('datum', datum).eq('status', 'live');
  const folgen = (pods || []).filter((p) => String(p.datei || '').trim())
    .sort((a, b) => REIHE.indexOf(a.level) - REIHE.indexOf(b.level));
  if (!folgen.length) return res.status(200).json({ ok: true, datum, angelegt: 0, grund: 'heute keine fertige Folge' });

  const kanalOk = await sb.from('community_channels').select('slug').eq('slug', KANAL).eq('is_active', true).maybeSingle();
  if (!kanalOk.data) return res.status(200).json({ ok: false, datum, grund: 'Kanal ' + KANAL + ' ist abgeschaltet' });

  const zeilen = folgen.map((f) =>
    '• ' + f.level + ' — „' + f.titel + '"' + (f.dauer ? ' (' + f.dauer + ' Minuten)' : '')
    + '\n  ' + SEITE + '/folge/' + f.id).join('\n');

  const body = '🎧 Neue Podcastfolgen sind da\n\n' + zeilen
    + '\n\nSuch dir dein Niveau aus. Zu jeder Folge gibt es den Text zum Mitlesen und die Wörter — '
    + 'am meisten bringt es, wenn du einmal hörst, einmal mitliest und dann ein paar Sätze laut nachsprichst.';

  const eintrag = { wer: WER, channel: KANAL, body, geplant_fuer: new Date().toISOString(), status: 'geplant', quelle };
  if (trocken) return res.status(200).json({ ok: true, datum, trocken: true, angelegt: 0, vorschau: eintrag });

  const { error } = await sb.from('ki_beitraege').insert(eintrag);
  if (error) return res.status(500).json({ ok: false, error: error.message });
  return res.status(200).json({ ok: true, datum, angelegt: 1, folgen: folgen.length });
}
