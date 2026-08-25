// ============================================================
//  Julias 5-Minuten-Podcast — der Tages-Generator
//
//  Läuft einmal am Morgen (aus api/daily.js) und schreibt für
//  JEDEN Tag vier Folgen: A2, B1, B2 und C1 — gleiches Thema,
//  vier Schwierigkeitsstufen.
//
//  ---------------------------------------------------------------
//  WARUM DIESE DATEI NUR DEN TEXT MACHT
//
//  Eine Vercel-Funktion darf 60 Sekunden laufen. Vier Skripte
//  schreiben UND vier mal fünf Minuten Audio erzeugen passt da
//  nicht hinein. Also ist die Arbeit geteilt:
//
//    1. Diese Datei  -> schreibt die vier Skripte (parallel, schnell)
//                       und legt sie als Entwurf in der Tabelle ab.
//    2. podcast-audio -> holt sich EINEN Entwurf, spricht ihn mit
//                       Julias geklonter Stimme ein, lädt das MP3
//                       hoch, setzt die Folge live und ruft sich
//                       danach selbst wieder auf.
//
//  So bleibt jeder einzelne Aufruf klein und der Tag wird trotzdem
//  komplett fertig. Bricht ein Schritt ab, laufen die anderen weiter
//  und der nächste Aufruf holt die liegengebliebene Folge nach.
//
//  ---------------------------------------------------------------
//  WOHER DIE THEMEN KOMMEN
//
//  Es gibt vier Quellen, die sich über die Woche abwechseln, damit
//  der Podcast nicht eintönig wird:
//
//    Mo  aktuelles   — echte Nachrichten aus Deutschland (Websuche)
//    Di  alltag      — deutscher Alltag, Kultur, Eigenheiten
//    Mi  wochenplan  — das Thema, das diese Woche im Club dran ist
//    Do  grammatik   — eine Struktur oder ein Wortfeld, erzählt
//    Fr  aktuelles
//    Sa  alltag
//    So  grammatik
//
//  Die letzten 60 Folgen werden dem Modell mitgegeben, damit sich
//  kein Thema wiederholt.
// ============================================================
import { createClient } from '@supabase/supabase-js';

export const maxDuration = 60;

const MODEL   = process.env.ANTHROPIC_MODEL || 'claude-sonnet-4-6';
const SUPA    = process.env.SUPABASE_URL;
const SERVICE = process.env.SUPABASE_SERVICE_ROLE_KEY;
const SITE    = process.env.SITE_URL || 'https://www.deutschoderwas-club.de';

const NIVEAUS = ['A2', 'B1', 'B2', 'C1'];

// Wie viele Wörter ein Niveau in fünf Minuten schafft. A2 wird
// langsamer und mit mehr Pausen gesprochen, C1 zügiger.
const LAENGE = {
  A2: { woerter: 560, tempo: 0.88, satz: 'kurze Hauptsätze, höchstens 12 Wörter' },
  B1: { woerter: 640, tempo: 0.94, satz: 'Haupt- und einfache Nebensätze' },
  B2: { woerter: 700, tempo: 1.00, satz: 'natürliche, auch längere Sätze mit Konnektoren' },
  C1: { woerter: 760, tempo: 1.00, satz: 'differenziert, mit Nebensatzketten und Nominalstil, wo es passt' }
};

const QUELLE_PRO_TAG = ['grammatik', 'aktuelles', 'alltag', 'wochenplan', 'grammatik', 'aktuelles', 'alltag'];
//                        So            Mo            Di        Mi           Do          Fr            Sa

function heute() {
  // Europe/Zurich — Julias Zeitzone, sonst kippt der Tag um Mitternacht UTC.
  return new Intl.DateTimeFormat('en-CA', { timeZone: 'Europe/Zurich' }).format(new Date());
}

function wochentagName(datum) {
  const d = ['Sonntag', 'Montag', 'Dienstag', 'Mittwoch', 'Donnerstag', 'Freitag', 'Samstag'];
  return d[new Date(datum + 'T12:00:00Z').getUTCDay()];
}

function jsonAus(text) {
  const s = text.indexOf('{'), e = text.lastIndexOf('}');
  if (s === -1 || e === -1) throw new Error('Keine JSON-Antwort vom Modell.');
  return JSON.parse(text.slice(s, e + 1));
}

// ---------------------------------------------------------------
//  Claude fragen. Mit Websuche, wenn das Thema aktuell sein soll.
// ---------------------------------------------------------------
async function claude(system, prompt, { suche = false, maxTokens = 4000 } = {}) {
  const body = {
    model: MODEL,
    max_tokens: maxTokens,
    system,
    messages: [{ role: 'user', content: prompt }]
  };
  if (suche) body.tools = [{ type: 'web_search_20250305', name: 'web_search', max_uses: 4 }];

  const r = await fetch('https://api.anthropic.com/v1/messages', {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
      'x-api-key': process.env.ANTHROPIC_API_KEY,
      'anthropic-version': '2023-06-01'
    },
    body: JSON.stringify(body)
  });
  if (!r.ok) throw new Error('Claude ' + r.status + ' ' + (await r.text()).slice(0, 300));
  const j = await r.json();
  return (j.content || []).filter(c => c.type === 'text').map(c => c.text).join('\n');
}

// ---------------------------------------------------------------
//  Schritt 1: Das Thema des Tages finden
// ---------------------------------------------------------------
async function themaFinden(db, datum, quelle) {
  const tag = wochentagName(datum);

  // Was gab es schon? Damit sich nichts wiederholt.
  const { data: alt } = await db.from('podcasts')
    .select('titel,thema').order('datum', { ascending: false }).limit(60);
  const bisher = [...new Set((alt || []).map(a => a.thema || a.titel))].join(' | ') || '(noch nichts)';

  if (quelle === 'wochenplan') {
    // Was ist diese Woche im Club dran?
    const { data: std } = await db.from('classes')
      .select('title,topic,level,starts_at')
      .gte('starts_at', new Date(Date.now() - 2 * 864e5).toISOString())
      .lte('starts_at', new Date(Date.now() + 6 * 864e5).toISOString())
      .order('starts_at').limit(40);
    const themen = [...new Set((std || []).map(s => s.topic || s.title).filter(Boolean))];
    if (themen.length) {
      const t = themen[0];
      return { thema: t, quelle, hintergrund: 'Diese Woche im Sprechclub: ' + themen.slice(0, 5).join(', ') };
    }
    quelle = 'alltag'; // nichts geplant -> normaler Alltag
  }

  if (quelle === 'aktuelles') {
    const txt = await claude(
      'Du recherchierst Themen für einen Deutschlern-Podcast. Antworte nur mit JSON.',
      `Heute ist ${tag}, der ${datum}. Suche im Netz, worüber in Deutschland gerade gesprochen wird — `
      + `Nachrichten, Gesellschaft, Alltag, Saisonales, Kurioses. Kein Krieg, keine Katastrophen, keine Gewalt, `
      + `keine Parteipolitik im Streit-Sinn: es soll ein freundliches Lernthema sein, über das man auch als `
      + `Ausländer gut sprechen kann.\n\n`
      + `Diese Themen gab es bei uns schon, nimm ein ANDERES:\n${bisher}\n\n`
      + `Gib zurück: {"thema":"kurz, 3-6 Wörter","hintergrund":"5-8 Sätze echte Fakten aus deiner Suche, die im Podcast vorkommen sollen"}`,
      { suche: true, maxTokens: 2000 }
    );
    const j = jsonAus(txt);
    return { thema: j.thema, quelle: 'aktuelles', hintergrund: j.hintergrund || '' };
  }

  if (quelle === 'grammatik') {
    const txt = await claude(
      'Du planst Deutschunterricht. Antworte nur mit JSON.',
      `Wähle EIN Grammatik- oder Wortschatz-Thema für eine Podcast-Folge (A2 bis C1 gleichzeitig).\n`
      + `Es muss sich erzählen lassen, nicht wie ein Regelbuch klingen — also lieber `
      + `„Warum sagen Deutsche 'doch'?" als „Modalpartikeln".\n\n`
      + `Schon behandelt, nimm etwas anderes:\n${bisher}\n\n`
      + `Gib zurück: {"thema":"kurz","hintergrund":"was genau erklärt werden soll, mit 3-4 Beispielsätzen"}`,
      { maxTokens: 1500 }
    );
    const j = jsonAus(txt);
    return { thema: j.thema, quelle: 'grammatik', hintergrund: j.hintergrund || '' };
  }

  // alltag
  const txt = await claude(
    'Du planst Content für Deutschlernende. Antworte nur mit JSON.',
    `Wähle EIN Thema aus dem deutschen Alltag oder der Kultur für eine Podcast-Folge am ${tag}, ${datum}. `
    + `Etwas, das Ausländer in Deutschland wirklich betrifft oder wundert: Ämter, Wohnen, Feiertage, `
    + `Essen, Vereine, Pünktlichkeit, Mülltrennung, Feste, Höflichkeit, Jahreszeit passend zum Datum.\n\n`
    + `Schon behandelt, nimm etwas anderes:\n${bisher}\n\n`
    + `Gib zurück: {"thema":"kurz","hintergrund":"5-8 Sätze konkrete Inhalte, Zahlen, typische Situationen"}`,
    { maxTokens: 1500 }
  );
  const j = jsonAus(txt);
  return { thema: j.thema, quelle: 'alltag', hintergrund: j.hintergrund || '' };
}

// ---------------------------------------------------------------
//  Schritt 2: Das Skript für ein Niveau schreiben
// ---------------------------------------------------------------
const STIMME_SYSTEM = `Du schreibst das Skript für „Julias 5-Minuten-Podcast" von deutschoderwas.
Julia ist Deutschlehrerin. Sie spricht warm, locker und direkt — wie eine Freundin, die gut erklärt.
Sie duzt. Sie stellt Zwischenfragen an die Hörerin („Kennst du das?"), macht kleine Pausen im Text,
und sie erklärt schwere Wörter SOFORT auf Deutsch, nie auf Englisch.

Ganz wichtig: Das Skript wird eins zu eins vorgelesen. Also keine Regieanweisungen, keine Klammern,
keine Sternchen, keine Überschriften, keine Aufzählungszeichen. Nur gesprochener Text.
Zahlen ausschreiben (nicht „2026", sondern „zweitausendsechsundzwanzig"). Keine Abkürzungen.

Der feste Ablauf jeder Folge:
1. Begrüßung mit dem Thema in einem Satz — nicht länger als drei Sätze.
2. Das Thema erzählt, mit echten Beispielen und Situationen. Das ist der längste Teil.
3. Eine kleine Mitmach-Übung zum Nachsprechen: Julia sagt einen Satz, macht eine Pause,
   sagt ihn noch einmal. Drei bis vier Sätze.
4. „Wörter des Tages" — die wichtigen Wörter noch einmal einzeln, mit Artikel, jeweils mit
   einem kurzen Beispielsatz.
5. Kurze Verabschiedung. Julia sagt am Ende immer „Tschüssi".

Du gibst AUSSCHLIESSLICH gültiges JSON zurück, ohne Text davor oder danach.`;

async function skriptSchreiben(level, thema, hintergrund, datum) {
  const L = LAENGE[level];
  const txt = await claude(
    STIMME_SYSTEM,
    `Thema der heutigen Folge: ${thema}
Datum: ${wochentagName(datum)}, ${datum}
Niveau: ${level} (GER)

Diese Inhalte sollen vorkommen:
${hintergrund}

Sprache für ${level}: ${L.satz}. Wortschatz genau auf ${level}-Niveau — bei A2 wirklich einfach,
bei C1 anspruchsvoll und differenziert. Die Folge dauert etwa fünf Minuten, das sind rund
${L.woerter} Wörter gesprochener Text. Halte diese Länge ein, sie ist wichtig.

Gib genau dieses JSON zurück:
{
  "titel": "griffiger Titel, höchstens 45 Zeichen, kein Doppelpunkt-Untertitel",
  "kurz": "ein bis zwei Sätze Beschreibung für die Übersicht, höchstens 150 Zeichen",
  "text": "das komplette gesprochene Skript am Stück, mit normalen Absätzen, rund ${L.woerter} Wörter",
  "woerter": [
    { "w": "das Wort mit Artikel", "e": "Erklärung auf einfachem Deutsch, plus ein Alltagsbeispiel" }
  ]
}

"woerter": sechs bis acht Einträge, genau die Wörter, die im Skript unter „Wörter des Tages" vorkommen.
Die Erklärung IMMER auf Deutsch, niemals auf Englisch oder in einer anderen Sprache.`,
    { maxTokens: 4000 }
  );
  const j = jsonAus(txt);
  if (!j.text || j.text.length < 800) throw new Error('Skript zu kurz für ' + level);
  return j;
}

// ---------------------------------------------------------------
//  Handler
// ---------------------------------------------------------------
export default async function handler(req, res) {
  if (!process.env.ANTHROPIC_API_KEY) return res.status(500).json({ error: 'anthropic_key_missing' });
  if (!SUPA || !SERVICE) return res.status(500).json({ error: 'supabase_fehlt' });

  const geheim = process.env.CRON_SECRET;
  const erlaubt = !geheim
    || req.headers['x-vercel-cron']
    || req.headers['x-intern'] === geheim
    || (req.query && req.query.key === geheim);
  if (!erlaubt) return res.status(401).json({ error: 'nicht_erlaubt' });

  const db = createClient(SUPA, SERVICE, { auth: { persistSession: false } });
  const datum = (req.query && req.query.datum) || heute();
  const wochentag = new Date(datum + 'T12:00:00Z').getUTCDay();
  const quelleHeute = (req.query && req.query.quelle) || QUELLE_PRO_TAG[wochentag];

  try {
    // Gibt es den Tag schon? Dann nichts doppelt machen.
    const { data: da } = await db.from('podcasts').select('id,level').eq('datum', datum);
    const fehlen = NIVEAUS.filter(n => !(da || []).some(d => d.level === n));
    if (!fehlen.length) {
      await weiterAnAudio();
      return res.status(200).json({ ok: true, info: 'Tag ist schon vollständig', datum });
    }

    const { thema, quelle, hintergrund } = await themaFinden(db, datum, quelleHeute);

    // Alle fehlenden Niveaus gleichzeitig schreiben lassen — das spart Zeit.
    const ergebnisse = await Promise.allSettled(
      fehlen.map(level => skriptSchreiben(level, thema, hintergrund, datum))
    );

    const zeilen = [];
    ergebnisse.forEach((e, i) => {
      const level = fehlen[i];
      if (e.status !== 'fulfilled') {
        zeilen.push({
          id: datum + '-' + level.toLowerCase(), datum, level,
          titel: thema, kurz: '', thema, quelle, status: 'fehler',
          fehler: String(e.reason && e.reason.message || e.reason).slice(0, 400)
        });
        return;
      }
      const s = e.value;
      zeilen.push({
        id: datum + '-' + level.toLowerCase(),
        datum, level,
        titel: String(s.titel || thema).slice(0, 80),
        kurz: String(s.kurz || '').slice(0, 200),
        thema, quelle,
        woerter: Array.isArray(s.woerter) ? s.woerter.slice(0, 10) : [],
        // Der reine Text wartet hier, bis podcast-audio ihn einspricht.
        transkript: [{ t: 0, e: 0, x: '', roh: s.text }],
        status: 'entwurf'
      });
    });

    const { error } = await db.from('podcasts').upsert(zeilen, { onConflict: 'id' });
    if (error) throw new Error('Speichern: ' + error.message);

    await weiterAnAudio();

    return res.status(200).json({
      ok: true, datum, thema, quelle,
      geschrieben: zeilen.filter(z => z.status === 'entwurf').map(z => z.level),
      fehler: zeilen.filter(z => z.status === 'fehler').map(z => z.level + ': ' + z.fehler)
    });
  } catch (err) {
    return res.status(500).json({ error: String(err && err.message || err) });
  }
}

// Den Audio-Arbeiter anstoßen, ohne auf ihn zu warten.
async function weiterAnAudio() {
  try {
    await fetch(SITE + '/api/podcast-audio', {
      method: 'POST',
      headers: { 'x-intern': process.env.CRON_SECRET || '' },
      signal: AbortSignal.timeout(1200)
    });
  } catch (e) { /* Absicht: wir wollen nur anstoßen, nicht warten. */ }
}
