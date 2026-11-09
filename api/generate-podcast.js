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

/* 300 statt 60 Sekunden (25.10.2026): Am Sonntag lief der Generator
   von 06:01:06 bis nach 06:02:02 und wurde dann abgewürgt — vier Skripte
   parallel plus JSON-Reparatur passten nicht mehr in eine Minute. Es
   wurde nichts gespeichert und der Audioschritt nie angestoßen. */
export const maxDuration = 300;

const MODEL   = process.env.ANTHROPIC_MODEL || 'claude-sonnet-4-6';
const SUPA    = process.env.SUPABASE_URL;
const SERVICE = process.env.SUPABASE_SERVICE_ROLE_KEY;
const SITE    = process.env.SITE_URL || 'https://www.deutschoderwas-club.de';

const NIVEAUS = ['A2', 'B1', 'B2', 'C1'];

// Wie viele Wörter ein Niveau in fünf Minuten schafft. A2 wird
// langsamer und mit mehr Pausen gesprochen, C1 zügiger.
const LAENGE = {
  /* A2 soll deutlich und langsam sein (Julia, 23.10.2026). Die Stimme wird
     dafür kaum gebremst — das würde Julias Klang verfremden. Die Ruhe kommt
     aus dem Text: kurze Sätze, viele Punkte (= Pausen), Wiederholung.
     Weniger Wörter, weil das langsamer gesprochen dieselben fünf Minuten füllt. */
  A2: { woerter: 500, tempo: 0.95, satz: 'sehr kurze Hauptsätze, höchstens 10 Wörter, ein Gedanke pro Satz. '
      + 'Lieber Punkt als Komma — jeder Punkt ist eine Atempause. Nach jedem neuen Gedanken ein neuer Absatz. '
      + 'Wichtige Wörter zweimal sagen („Der Termin. Der Termin beim Arzt.“). Keine Nebensätze, keine Klammern, '
      + 'keine Umgangssprache, keine Abkürzungen' },
  B1: { woerter: 640, tempo: 0.96, satz: 'Haupt- und einfache Nebensätze, höchstens 15 Wörter. '
      + 'Ein Nebensatz pro Satz, nicht zwei. Alle paar Sätze ein ganz kurzer dazwischen — das gibt den Takt. '
      + 'Umgangssprache nur, wenn sie gleich erklärt wird' },
  B2: { woerter: 700, tempo: 1.00, satz: 'natürliche, auch längere Sätze mit Konnektoren. '
      + 'Wechsle bewusst zwischen langen und kurzen Sätzen, so entsteht Rhythmus. Feste Wendungen '
      + 'und Redensarten sind willkommen' },
  C1: { woerter: 760, tempo: 1.00, satz: 'differenziert, mit Nebensatzketten und Nominalstil, wo es passt' }
};

/* Bis zum 9.11.2026 schrieb der Generator jeden Tag, und diese Tabelle gab
   jedem Wochentag seine Art von Thema. Seit dem Wechsel auf Montag, Mittwoch
   und Freitag griffen davon nur noch drei Felder — und zwei davon waren
   „aktuelles“. Grammatik und Alltag kamen gar nicht mehr vor. Darum hat jetzt
   jeder der drei Schreibtage seine eigene Art, angelehnt an die Rubriken, nach
   denen Julia ihre eigenen Folgen aufnimmt:
     Montag    — Alltag und Kultur („Typisch Deutsch“)
     Mittwoch  — das Thema der Sprechclub-Woche
     Freitag   — im Wechsel: Aktuelles aus Deutschland / Sprache und Wortschatz
   Für jeden anderen Tag — also wenn jemand von Hand ?datum= setzt — bleibt die
   Tabelle in Kraft. */
const QUELLE_PRO_TAG = ['grammatik', 'alltag', 'alltag', 'wochenplan', 'grammatik', 'aktuelles', 'alltag'];
//                        So            Mo       Di       Mi           Do          Fr           Sa

function quelleFuerTag(datum) {
  const d = new Date(datum + 'T12:00:00Z');
  if (d.getUTCDay() === 5) {
    /* Gerade Woche Aktuelles, ungerade Sprache — damit beides vorkommt,
       ohne dass ein vierter Schreibtag nötig ist. */
    const woche = Math.floor((d.getTime() - Date.UTC(2026, 0, 1)) / (7 * 86400000));
    return woche % 2 === 0 ? 'aktuelles' : 'grammatik';
  }
  return QUELLE_PRO_TAG[d.getUTCDay()];
}

function heute() {
  // Europe/Zurich — Julias Zeitzone, sonst kippt der Tag um Mitternacht UTC.
  return new Intl.DateTimeFormat('en-CA', { timeZone: 'Europe/Zurich' }).format(new Date());
}

function wochentagName(datum) {
  const d = ['Sonntag', 'Montag', 'Dienstag', 'Mittwoch', 'Donnerstag', 'Freitag', 'Samstag'];
  return d[new Date(datum + 'T12:00:00Z').getUTCDay()];
}

/* Das Modell schreibt in "text" ein fuenf Minuten langes deutsches Skript.
   Darin kommen Anfuehrungszeichen vor — und wenn es gerade " nimmt statt der
   deutschen, zerbricht die JSON-Antwort mitten im Satz. Genau daran sind
   sechzehn Folgen gestorben, immer mit derselben Meldung: Expected ',' or
   '}' after property value in JSON at position N (line 4 ...). Zeile 4 ist
   das Skript.

   Deshalb wird hier nicht mehr blind geparst. Schlaegt JSON.parse fehl,
   laeuft die Antwort einmal durch reparieren(): Das geht Zeichen fuer
   Zeichen durch und entscheidet bei jedem " im String, ob es wirklich das
   Ende ist oder mitten im Text steht. Mitten im Text wird daraus ein
   deutsches Anfuehrungszeichen — das kann JSON nie kaputtmachen und ist im
   Lesetext ohnehin das richtige. */
function reparieren(roh) {
  let out = '', inStr = false, esc = false;
  const passtDanach = (i) => {
    let j = i;
    while (j < roh.length && /\s/.test(roh[j])) j++;
    const c = roh[j];
    if (c === undefined || c === ':') return true;          /* Schluessel */
    if (c === '}' || c === ']') return true;               /* Ende */
    if (c === ',') {                                       /* naechster Eintrag? */
      let k = j + 1;
      while (k < roh.length && /\s/.test(roh[k])) k++;
      const d = roh[k];
      /* ']' und '}' gehoeren dazu: bei einem haengenden Komma am Listenende
         ("a","b",] ) hielt die Pruefung das schliessende Zeichen sonst faelsch-
         licherweise fuer mitten im Satz und zerlegte die ganze Antwort. */
      return d === '"' || d === '{' || d === '[' || d === ']' || d === '}' || d === undefined;
    }
    return false;                                           /* mitten im Satz */
  };
  for (let i = 0; i < roh.length; i++) {
    const c = roh[i];
    if (esc) { out += c; esc = false; continue; }
    if (c === '\\') { out += c; esc = true; continue; }
    if (c === '"') {
      if (!inStr) { inStr = true; out += c; continue; }
      if (passtDanach(i + 1)) { inStr = false; out += c; continue; }
      const vor = out[out.length - 1];
      out += (vor === undefined || /[\s(\[]/.test(vor)) ? '\u201e' : '\u201c';
      continue;
    }
    if (inStr && (c === '\n' || c === '\r')) { out += '\\n'; continue; }
    out += c;
  }
  return out.replace(/,(\s*[}\]])/g, '$1');            /* haengendes Komma */
}

function jsonAus(text) {
  const s = text.indexOf('{'), e = text.lastIndexOf('}');
  if (s === -1 || e === -1) throw new Error('Keine JSON-Antwort vom Modell.');
  const roh = text.slice(s, e + 1);
  try { return JSON.parse(roh); } catch (err) {
    try {
      const heil = JSON.parse(reparieren(roh));
      console.log('JSON war kaputt und wurde repariert:', err.message);
      return heil;
    } catch (err2) {
      throw new Error('JSON kaputt und nicht zu retten: ' + err.message);
    }
  }
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

/* ---------------------------------------------------------------
   Schritt 1b: Für jedes Niveau ein EIGENES Thema

   Julia, 9.11.2026: "gerne andere Themen zu jedem Niveau, passend zum
   Niveau und auch vom rhytmus und der schnelligkeit".

   Bis hierher bekamen alle vier Folgen dasselbe Thema, nur in
   unterschiedlich schwerer Sprache. Das hiess: Wer auf A2 anfaengt und
   spaeter auf B1 wechselt, hoert dieselbe Geschichte noch einmal — und
   wer aus Neugier in ein anderes Niveau hineinhoert, lernt nichts Neues.

   Jetzt sucht EIN Aufruf vier Themen auf einmal. Einer statt vier, weil
   vier Aufrufe nacheinander laenger dauern, als dieser Endpunkt laufen
   darf — und weil nur so sicher ist, dass sich die vier nicht
   ueberschneiden: das Modell sieht beim Waehlen alle vier zugleich.

   Was zu welchem Niveau passt, steht in NIVEAU_WELT. A2 braucht Dinge
   zum Anfassen, C1 darf abstrakt werden. Scheitert der Aufruf, faellt
   alles auf das gemeinsame Thema zurueck — lieber vier gleiche Folgen
   als keine.
   --------------------------------------------------------------- */
const NIVEAU_WELT = {
  A2: 'Konkreter Alltag zum Anfassen: einkaufen, Bus und Bahn, Wohnung, Arzt, Wetter, Essen, '
    + 'Uhrzeiten, Nachbarn. Etwas, das man anfassen oder zeigen kann.',
  B1: 'Alltag mit einer kleinen Hürde: Ämter und Formulare, Arbeit suchen, Termine verschieben, '
    + 'sich beschweren, Freunde finden, Feste und Bräuche.',
  B2: 'Gesellschaft und Meinung: Arbeitswelt, Wohnungsmarkt, Umwelt, Medien, Bildung, '
    + 'kulturelle Unterschiede. Etwas, worüber man verschiedener Meinung sein kann.',
  C1: 'Hintergrund und feine Unterschiede: Sprache selbst, Geschichte im Alltag, Wirtschaft, '
    + 'Werte, Humor und Ironie, Dinge, die man nur versteht, wenn man länger hier ist.'
};

async function themenJeNiveau(db, datum, quelle) {
  const tag = wochentagName(datum);
  const { data: alt } = await db.from('podcasts')
    .select('titel,thema,level').order('datum', { ascending: false }).limit(80);
  const bisher = {};
  NIVEAUS.forEach(n => {
    bisher[n] = [...new Set((alt || []).filter(a => a.level === n).map(a => a.thema || a.titel))]
      .slice(0, 20).join(' | ') || '(noch nichts)';
  });

  const welt = NIVEAUS.map(n => `${n}: ${NIVEAU_WELT[n]}\n  Schon gehabt auf ${n}: ${bisher[n]}`).join('\n\n');
  const was = quelle === 'grammatik'
    ? 'Grammatik- oder Wortschatzthemen, erzählbar statt wie ein Regelbuch — '
      + 'also lieber „Warum sagen Deutsche doch?" als „Modalpartikeln".'
    : quelle === 'aktuelles'
      ? 'Themen, über die in Deutschland gerade gesprochen wird. Kein Krieg, keine Katastrophen, '
        + 'keine Gewalt, kein Parteienstreit — es soll ein freundliches Lernthema sein.'
      : 'Themen aus dem deutschen Alltag und der Kultur, die Ausländer in Deutschland '
        + 'wirklich betreffen oder wundern.';

  const txt = await claude(
    'Du planst Content für Deutschlernende. Antworte nur mit JSON.',
    `Heute ist ${tag}, der ${datum}. Für „Julias 5-Minuten-Podcast" brauche ich VIER Themen — `
    + `für jedes Niveau ein eigenes, inhaltlich deutlich verschieden.\n\n`
    + `Art der Themen heute: ${was}\n\n`
    + `Das passt zu welchem Niveau:\n${welt}\n\n`
    + `Regeln: Die vier Themen dürfen einander nicht ähneln — nicht dasselbe in schwerer. `
    + `Keines darf ein Thema wiederholen, das auf seinem Niveau schon dran war.\n\n`
    + `Gib genau dieses JSON zurück:\n`
    + `{"A2":{"thema":"kurz, 3-6 Wörter","hintergrund":"5-8 Sätze konkrete Inhalte, Zahlen, typische Situationen"},`
    + `"B1":{...},"B2":{...},"C1":{...}}`,
    { suche: quelle === 'aktuelles', maxTokens: 3000 }
  );
  const j = jsonAus(txt);
  const aus = {};
  NIVEAUS.forEach(n => {
    const e = j && j[n];
    if (e && e.thema) aus[n] = { thema: String(e.thema), hintergrund: String(e.hintergrund || '') };
  });
  if (Object.keys(aus).length !== NIVEAUS.length) throw new Error('nicht für jedes Niveau ein Thema');
  return aus;
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

Du gibst AUSSCHLIESSLICH gültiges JSON zurück, ohne Text davor oder danach.
Innerhalb der Texte benutzt du für Zitate und hervorgehobene Wörter immer die deutschen
Anführungszeichen „ und “ — niemals das gerade \"; das zerbricht das JSON.`;

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
  let erlaubt = !geheim
    || req.headers['x-vercel-cron']
    || req.headers['x-intern'] === geheim
    || (req.query && req.query.key === geheim);

  /* Julia darf auch von Hand anstossen.

     Bis zum 9.11.2026 kam man hier nur mit dem Cron-Geheimnis hinein.
     Wenn der Lauf am Morgen ins Leere lief — etwa weil die Stimme
     gerade kein Guthaben hatte —, blieb der Tag bis zum naechsten
     Lauf leer, und niemand konnte etwas dagegen tun. Jetzt reicht ein
     Admin-Token aus dem Admin-Bereich. */
  if (!erlaubt) {
    const token = (req.headers.authorization || '').replace('Bearer ', '');
    if (token) {
      try {
        const pruef = createClient(SUPA, SERVICE, { auth: { persistSession: false } });
        const { data: { user } = {} } = await pruef.auth.getUser(token);
        if (user) {
          const { data: ich } = await pruef.from('profiles')
            .select('is_admin').eq('id', user.id).maybeSingle();
          if (ich && ich.is_admin) erlaubt = true;
        }
      } catch (e) { /* bleibt verboten */ }
    }
  }
  if (!erlaubt) return res.status(401).json({ error: 'nicht_erlaubt' });

  const db = createClient(SUPA, SERVICE, { auth: { persistSession: false } });
  const datum = (req.query && req.query.datum) || heute();
  const quelleHeute = (req.query && req.query.quelle) || quelleFuerTag(datum);

  try {
    // Gibt es den Tag schon? Dann nichts doppelt machen.
    const { data: da } = await db.from('podcasts').select('id,level').eq('datum', datum);
    const fehlen = NIVEAUS.filter(n => !(da || []).some(d => d.level === n));
    if (!fehlen.length) {
      await weiterAnAudio();
      return res.status(200).json({ ok: true, info: 'Tag ist schon vollständig', datum });
    }

    /* Ist die Stimme tot? podcast-audio.js vermerkt das am Entwurf
       (fehler beginnt mit STIMME_TOT). Dann keine neuen Skripte schreiben:
       Ab dem 10.10.2026 sind so 29 Entwürfe ohne Ton liegen geblieben, und
       jeder kostet Claude-Guthaben. Stattdessen nur den Audioschritt
       anstoßen — geht die Stimme wieder, holt er die Folgen der letzten
       drei Tage nach. Sind die vermerkten Entwürfe älter als drei Tage,
       wird wieder ein Tag geschrieben; das ist zugleich der Testlauf, ob
       die Stimme zurück ist. Erzwingen geht mit ?trotzdem=1. */
    const fenster = new Date(Date.now() - 3 * 86400000).toISOString().slice(0, 10);
    const { data: tot } = await db.from('podcasts').select('id,fehler')
      .eq('status', 'entwurf').like('fehler', 'STIMME_TOT%').gte('datum', fenster).limit(1);
    if (tot && tot.length && !(req.query && req.query.trotzdem)) {
      await weiterAnAudio();
      return res.status(503).json({
        ok: false, error: 'stimme_tot', datum,
        info: 'Die Vorlesestimme nimmt keine Aufträge an. Keine neuen Entwürfe geschrieben.',
        letzter_befund: String(tot[0].fehler || '').slice(0, 200)
      });
    }

    /* Erst vier eigene Themen versuchen. Geht das schief, bekommen alle
       dasselbe — so wie frueher. Lieber vier gleiche Folgen als keine. */
    let themen = null, quelle = quelleHeute, thema = '', hintergrund = '';
    try {
      themen = await themenJeNiveau(db, datum, quelleHeute);
    } catch (e) {
      themen = null;
    }
    if (!themen) {
      const eins = await themaFinden(db, datum, quelleHeute);
      quelle = eins.quelle; thema = eins.thema; hintergrund = eins.hintergrund;
      themen = {};
      NIVEAUS.forEach(n => { themen[n] = { thema: eins.thema, hintergrund: eins.hintergrund }; });
    }

    // Alle fehlenden Niveaus gleichzeitig schreiben lassen — das spart Zeit.
    const ergebnisse = await Promise.allSettled(
      fehlen.map(level => skriptSchreiben(level, themen[level].thema, themen[level].hintergrund, datum))
    );

    const zeilen = [];
    ergebnisse.forEach((e, i) => {
      const level = fehlen[i];
      if (e.status !== 'fulfilled') {
        zeilen.push({
          id: datum + '-' + level.toLowerCase(), datum, level,
          titel: themen[level].thema, kurz: '', thema: themen[level].thema, quelle, status: 'fehler',
          fehler: String(e.reason && e.reason.message || e.reason).slice(0, 400)
        });
        return;
      }
      const s = e.value;
      zeilen.push({
        id: datum + '-' + level.toLowerCase(),
        datum, level,
        titel: String(s.titel || themen[level].thema).slice(0, 80),
        kurz: String(s.kurz || '').slice(0, 200),
        thema: themen[level].thema, quelle,
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
      ok: true, datum, quelle,
      themen: NIVEAUS.reduce((a, n) => (a[n] = themen[n] && themen[n].thema, a), {}),
      geschrieben: zeilen.filter(z => z.status === 'entwurf').map(z => z.level),
      fehler: zeilen.filter(z => z.status === 'fehler').map(z => z.level + ': ' + z.fehler)
    });
  } catch (err) {
    /* Auch wenn das Schreiben scheitert: die schon fertigen Entwürfe
       der letzten Tage trotzdem einsprechen lassen. Nur hier und am
       Ende anstoßen, nie zusätzlich am Anfang — sonst laufen zwei
       Ketten gleichzeitig und sprechen dieselbe Folge doppelt ein. */
    await weiterAnAudio();
    return res.status(500).json({ error: String(err && err.message || err) });
  }
}

// Den Audio-Arbeiter anstoßen, ohne auf ihn zu warten.
async function weiterAnAudio() {
  try {
    await fetch(SITE + '/api/podcast-audio', {
      method: 'POST',
      headers: { 'x-intern': process.env.CRON_SECRET || '' },
      // 1,2 Sekunden waren zu knapp: Die Anfrage wurde abgebrochen,
      // bevor der Audioschritt losgelaufen war, und die Folgen blieben
      // als Entwurf liegen. Acht Sekunden stoßen ihn sicher an.
      signal: AbortSignal.timeout(8000)
    });
  } catch (e) { /* Absicht: wir wollen nur anstoßen, nicht warten. */ }
}
