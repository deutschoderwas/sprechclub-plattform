// ============================================================
//  /api/ki-team-planen — haelt den Chat von Mila, Tom und Amanda am Leben
//
//  Julia, 20.11.2026: "Mila, Tom und Amanda muessten regelmaessig die
//  Gruppe den Chat aktiv halten in den verschiedenen chatbereichen."
//
//  Warum sie aufgehoert haben: Die drei schreiben nicht selbst. Sie
//  veroeffentlichen, was in ki_beitraege steht; ki_team_posten() holt
//  alle 15 Minuten ab, was faellig ist. In der Tabelle lagen genau 20
//  von Hand geplante Beitraege, verteilt vom 5. Oktober bis zum 13.
//  November. Der zwanzigste ist erschienen, danach war die Liste leer.
//  Der Dienst lief weiter und fand nichts mehr.
//
//  Dieser Endpunkt fuellt die Liste nach. Er erfindet dabei NICHTS:
//
//    - Der Wochenrhythmus kommt aus einer echten Podcastfolge. Titel,
//      Niveau, Laenge und das Wort stehen in der Tabelle podcasts;
//      hier wird nur eingesetzt. Genau das Format, das von Oktober bis
//      November lief und das Julia gegengelesen hat.
//    - Die uebrigen Tage kommen aus community_impuls: 70 fertige
//      Impulse in sechs Kanaelen, mit Wochentag, von Hand geschrieben
//      und bis heute nie benutzt (die Aufgabe dafuer wurde nie
//      eingeschaltet). Jeder wird hoechstens einmal genommen.
//
//  Der Wochenrhythmus, so wie er vorher lief:
//    Mo 09:00  Amanda  deutsch-lernen   Wort der Woche aus der Folge
//    Mi 18:00  Mila    sprechen-ueben   Sprechauftrag zum selben Thema
//    Fr 12:00  Tom     deutsch-lernen   "Schreib einen Satz"
//  Neu sind die anderen vier Tage, damit nicht nur zwei Kanaele leben:
//    Di/Do/Sa/So  wechselnde Kanaele, Autor reihum
//
//  Alles landet als status='geplant' in ki_beitraege. Julia sieht es in
//  der Verwaltung und kann jede Zeile vorher aendern oder abschalten.
//
//    ?trocken=1   zeigt nur, was entstehen wuerde
//    ?tage=21     wie weit vorausgeplant wird (Standard 14)
// ============================================================
import { createClient } from '@supabase/supabase-js';

const TEAM = ['Amanda', 'Mila', 'Tom'];
const SEITE = process.env.SITE_URL || 'https://www.deutschoderwas-club.de';

/* Berliner Wanduhr -> ISO mit richtigem Versatz, ohne Bibliothek.
   Im Winter +01:00, im Sommer +02:00 — selbst ausgerechnet, damit ein
   Beitrag nicht um 10 Uhr erscheint, wenn 9 Uhr geplant war. */
function berlinISO(datum, stunde) {
  const probe = new Date(datum + 'T12:00:00Z');
  const teile = new Intl.DateTimeFormat('en-US', { timeZone: 'Europe/Berlin', timeZoneName: 'longOffset' })
    .formatToParts(probe);
  const name = (teile.find((t) => t.type === 'timeZoneName') || {}).value || 'GMT+01:00';
  const versatz = name.replace('GMT', '') || '+01:00';
  return datum + 'T' + String(stunde).padStart(2, '0') + ':00:00' + versatz;
}

function tagPlus(basis, n) {
  const d = new Date(basis + 'T12:00:00Z');
  d.setUTCDate(d.getUTCDate() + n);
  return d.toISOString().slice(0, 10);
}
function wochentag(datum) { return new Date(datum + 'T12:00:00Z').getUTCDay(); } // 0=So
function montagDerWoche(datum) {
  const d = new Date(datum + 'T12:00:00Z');
  d.setUTCDate(d.getUTCDate() - ((d.getUTCDay() + 6) % 7));
  return d.toISOString().slice(0, 10);
}
function heuteBerlin() {
  return new Intl.DateTimeFormat('en-CA', { timeZone: 'Europe/Berlin' }).format(new Date());
}
/* Die Erklaerung in woerter enthaelt haeufig noch einen Beispielsatz.
   Fuer "Wort der Woche" reicht der erste Teil. */
function kurzErklaerung(e) {
  const t = String(e || '').split(/\s*Beispiel:\s*/)[0].trim();
  return t.length > 180 ? t.slice(0, 177).trim() + '…' : t;
}

export default async function handler(req, res) {
  const geheim = process.env.CRON_SECRET || '';
  const kopf = req.headers['x-intern'] || '';
  const ausAdmin = (req.headers.authorization || '').startsWith('Bearer ');
  if (geheim && kopf !== geheim && !ausAdmin) return res.status(401).json({ ok: false, error: 'nicht erlaubt' });
  if (!process.env.SUPABASE_SERVICE_ROLE_KEY) return res.status(200).json({ ok: false, skipped: 'supabase fehlt' });

  const trocken = String(req.query?.trocken || '') === '1';
  const ersetzen = String(req.query?.ersetzen || '') === '1';
  const tage = Math.min(60, Math.max(1, Number(req.query?.tage) || 14));
  const sb = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_SERVICE_ROLE_KEY);
  const bericht = { trocken, tage, geplant: [], uebersprungen: [], hinweise: [] };

  /* ?ersetzen=1 raeumt die eigene Vorausplanung weg und plant neu.

     Gebraucht am 20.11.2026: Der erste Lauf gab jedem der drei
     Wochentage eine andere Podcastfolge, der rote Faden der Woche war
     weg. Der Fehler war schnell behoben, das Aufraeumen nicht - eine
     Loeschung von aussen stellt eine Rueckfrage, und die kam dreimal
     nicht durch. Also macht es der Dienst selbst, der die Zeilen auch
     angelegt hat.

     Angefasst wird ausschliesslich Eigenes: status 'geplant', in der
     Zukunft, und die Quelle traegt den Planer-Stempel. Was schon
     veroeffentlicht ist, bleibt unberuehrt. */
  if (ersetzen && !trocken) {
    const { data: weg, error: wegFehler } = await sb.from('ki_beitraege')
      .delete().eq('status', 'geplant').gt('geplant_fuer', new Date().toISOString())
      .like('quelle', '%|plan:%').select('quelle');
    if (wegFehler) return res.status(500).json({ ok: false, error: 'aufraeumen: ' + wegFehler.message });
    bericht.entfernt = (weg || []).length;
    /* Die Impulse, die daran hingen, wieder freigeben - sonst waeren
       sie verbraucht, ohne je erschienen zu sein. */
    const impWeg = (weg || []).map((r) => String(r.quelle || ''))
      .filter((q) => q.startsWith('impuls:')).map((q) => q.split('|')[0].slice(7));
    for (const id of impWeg) {
      await sb.from('community_impuls').update({ benutzt: null, zuletzt_am: null }).eq('id', id)
        .then(() => {}, () => {});
    }
  }

  // --- was es schon gibt, damit nichts doppelt entsteht
  const { data: schon } = await sb.from('ki_beitraege').select('quelle,geplant_fuer,status');
  const belegt = new Set((schon || []).map((r) => String(r.quelle || '')).filter(Boolean));
  const folgenBenutzt = new Set((schon || []).map((r) => String(r.quelle || ''))
    .filter((q) => q.startsWith('folge:')).map((q) => q.split('|')[0]));

  // --- aktive Kanaele; was nicht aktiv ist, wuerde beim Posten verworfen
  const { data: chans } = await sb.from('community_channels').select('slug,is_active').eq('is_active', true);
  const aktiv = new Set((chans || []).map((c) => c.slug));

  // --- Folgen fuer den Wochenrhythmus
  const { data: folgen } = await sb.from('podcasts')
    .select('id,datum,level,titel,dauer,woerter,status')
    .eq('status', 'live').order('datum', { ascending: false }).limit(60);

  /* EINE Folge je Woche, nicht je Beitrag. Im alten Rhythmus gehoerten
     die drei Beitraege zusammen: Amanda bringt am Montag das Wort,
     Mila greift mittwochs dasselbe Thema auf, Tom laesst freitags
     einen Satz mit demselben Wort schreiben. Ohne diesen Merker holte
     sich jeder Tag eine andere Folge, und der rote Faden der Woche war
     weg. */
  const wocheFolge = {};
  function folgeFuerWoche(montag) {
    if (wocheFolge[montag]) return wocheFolge[montag];
    const passend = (folgen || []).filter((f) => {
      if (folgenBenutzt.has('folge:' + f.id)) return false;
      const w = Array.isArray(f.woerter) ? f.woerter : [];
      return w.length && w[0] && w[0].w;
    });
    /* Am liebsten eine Folge aus der Woche davor: frisch, aber schon
       gehoert. Sonst die neueste, die noch nicht dran war. */
    const vorwoche = passend.filter((f) => f.datum < montag && f.datum >= tagPlus(montag, -9));
    const gewaehlt = vorwoche[0] || passend[0] || null;
    if (gewaehlt) { wocheFolge[montag] = gewaehlt; folgenBenutzt.add('folge:' + gewaehlt.id); }
    return gewaehlt;
  }

  // --- Impulse, nach Wochentag, nur unbenutzte
  const { data: impulse } = await sb.from('community_impuls')
    .select('id,channel,titel,body,wochentag,aktiv,benutzt').eq('aktiv', true);
  const offeneImpulse = (impulse || [])
    .filter((i) => !i.benutzt && aktiv.has(i.channel) && !belegt.has('impuls:' + i.id));

  function impulsFuer(wt, genommen) {
    const passt = offeneImpulse.filter((i) => !genommen.has(i.id) && (i.wochentag == null || Number(i.wochentag) === wt));
    const rest  = offeneImpulse.filter((i) => !genommen.has(i.id));
    return passt[0] || rest[0] || null;
  }

  const neu = [];
  const genommen = new Set();
  const start = heuteBerlin();

  for (let i = 1; i <= tage; i++) {
    const datum = tagPlus(start, i);
    const wt = wochentag(datum);
    const montag = montagDerWoche(datum);

    // ---------- Mo / Mi / Fr: der Podcast-Rhythmus ----------
    if (wt === 1 || wt === 3 || wt === 5) {
      const marke = 'plan:' + datum + ':' + (wt === 1 ? 'mo' : wt === 3 ? 'mi' : 'fr');
      if (belegt.has(marke)) { bericht.uebersprungen.push({ datum, grund: 'steht schon' }); continue; }
      const f = folgeFuerWoche(montag);
      if (!f) { bericht.hinweise.push({ datum, hinweis: 'keine unbenutzte Podcastfolge mit Woertern gefunden' }); continue; }
      const wort = f.woerter[0];
      const quelle = 'folge:' + f.id + '|' + marke;
      const link = SEITE + '/folge/' + f.id;

      let wer, channel, body;
      if (wt === 1) {
        wer = 'Amanda'; channel = 'deutsch-lernen';
        body = 'Wort der Woche: ' + wort.w + '\n\n' + kurzErklaerung(wort.e) + '\n\n'
          + 'Aus der Podcastfolge „' + f.titel + '" (' + (f.dauer || '') + ' Minuten, ' + f.level + ').\n'
          + 'Hier direkt hören: ' + link + '\n\n'
          + 'Sprich es dreimal laut. Dann schreib mir einen Satz damit — ich schaue ihn mir an.';
      } else if (wt === 3) {
        wer = 'Mila'; channel = 'sprechen-ueben';
        body = 'Sprechauftrag zu „' + f.titel + '"\n\n'
          + 'Erzähl in drei Sätzen, was du selbst dazu erlebt hast. Wer mag, nimmt eine Sprachnachricht auf — '
          + 'laut sprechen bringt mehr als lesen.\n\n'
          + 'Ein Wort, das dir hilft: ' + wort.w + '\n\n'
          + 'Die Folge dazu: ' + link;
      } else {
        wer = 'Tom'; channel = 'deutsch-lernen';
        body = 'Schreib einen Satz, ich korrigiere ihn\n\n'
          + 'Diese Woche mit dem Wort „' + wort.w + '". Ein Satz reicht. Schreib ihn einfach hier in den Kanal — '
          + 'ich sage dir, was stimmt und was ich anders sagen würde.';
      }
      if (!aktiv.has(channel)) { bericht.hinweise.push({ datum, hinweis: 'Kanal ' + channel + ' ist abgeschaltet' }); continue; }
      neu.push({ wer, channel, body, geplant_fuer: berlinISO(datum, wt === 1 ? 9 : wt === 3 ? 18 : 12), status: 'geplant', quelle });
      belegt.add(marke);
      continue;
    }

    // ---------- Di / Do / Sa / So: ein Impuls aus dem Vorrat ----------
    const marke = 'plan:' + datum + ':impuls';
    if (belegt.has(marke)) { bericht.uebersprungen.push({ datum, grund: 'steht schon' }); continue; }
    const imp = impulsFuer(wt, genommen);
    if (!imp) { bericht.hinweise.push({ datum, hinweis: 'kein unbenutzter Impuls mehr im Vorrat' }); continue; }
    genommen.add(imp.id);
    belegt.add(marke);
    const wer = TEAM[i % TEAM.length];
    const body = (imp.titel ? imp.titel + '\n\n' : '') + imp.body;
    neu.push({ wer, channel: imp.channel, body, geplant_fuer: berlinISO(datum, 17), status: 'geplant',
               quelle: 'impuls:' + imp.id + '|' + marke, _impuls: imp.id });
  }

  bericht.geplant = neu.map((n) => ({
    wann: n.geplant_fuer, wer: n.wer, kanal: n.channel, anfang: n.body.split('\n')[0].slice(0, 70),
  }));

  if (trocken || !neu.length) return res.status(200).json({ ok: true, ...bericht, angelegt: 0 });

  const zumSchreiben = neu.map(({ _impuls, ...r }) => r);
  const { error } = await sb.from('ki_beitraege').insert(zumSchreiben);
  if (error) return res.status(500).json({ ok: false, error: error.message, ...bericht });

  /* Benutzte Impulse vermerken, damit derselbe nie zweimal kommt. */
  const impIds = neu.map((n) => n._impuls).filter(Boolean);
  for (const id of impIds) {
    await sb.from('community_impuls')
      .update({ benutzt: 1, zuletzt_am: new Date().toISOString() }).eq('id', id)
      .then(() => {}, () => {});
  }

  return res.status(200).json({ ok: true, ...bericht, angelegt: neu.length });
}
