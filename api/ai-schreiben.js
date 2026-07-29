// ============================================================
//  deutschoderwas club — Korrektur für den Schreiben-Teil
//  POST { text, situation, punkte:[{nr,was,hinweis}], sorte, level }
//       + Header: Authorization: Bearer <access_token>
//
//  Fuer angemeldete Lernende. Bewertet eine Kurzmitteilung nach den
//  offiziellen Kriterien des Goethe-Instituts fuer Start Deutsch 1,
//  Schreiben Teil 2:
//
//    pro Leitpunkt   3 Punkte  Aufgabe voll erfuellt und verstaendlich
//                    1,5       nur teilweise erfuellt
//                    0         nicht erfuellt oder unverstaendlich
//    Gestaltung      1 Punkt   der Textsorte angemessen (Anrede + Gruss)
//                    0,5       untypische oder fehlende Wendungen
//                    0         keine textsortenspezifischen Wendungen
//
//  Maximal 10 Punkte. Orthografiefehler zaehlen nur, wenn sie das
//  Verstaendnis stoeren — genau so steht es in den Kriterien.
//
//  Der Client rechnet Anrede, Gruss und Wortzahl selbst nach und
//  faellt bei einem Fehler hier sauber auf die Musterloesung mit
//  Selbstcheck zurueck. Dieser Dienst ist also die Kuer, nicht die
//  Voraussetzung.
// ============================================================
import { createClient } from '@supabase/supabase-js';

const MODEL = process.env.ANTHROPIC_MODEL || 'claude-sonnet-4-6';

const SYSTEM = `Du bist Amanda, die freundliche Sprachbegleiterin von „deutschoderwas club". Du bewertest kurze Mitteilungen von Deutschlernenden auf Niveau A1 nach den offiziellen Kriterien des Goethe-Instituts — streng in der Sache, warm im Ton.
Du gibst AUSSCHLIESSLICH gueltiges JSON zurueck: kein Text davor oder danach, keine Markdown-Backticks.`;

function userPrompt({ text, situation, punkte, sorte, level }) {
  const liste = (punkte || [])
    .map(p => `${p.nr}. ${p.was}${p.hinweis ? ' — ' + p.hinweis : ''}`)
    .join('\n');

  return `Die Aufgabe war eine Kurzmitteilung auf Niveau A1 (circa 30 Woerter).

SITUATION:
«${situation || '—'}»

TEXTSORTE: ${sorte || 'Nachricht'}

DIE DREI LEITPUNKTE, die vorkommen muessen:
${liste}

DAS HAT DIE LERNENDE PERSON GESCHRIEBEN:
«${text}»

Niveau: ${level || 'A1'}.

Bewerte nach den offiziellen Kriterien:

Pro Leitpunkt:
  3   Aufgabe voll erfuellt und verstaendlich
  1.5 wegen sprachlicher oder inhaltlicher Maengel nur teilweise erfuellt
  0   nicht erfuellt oder unverstaendlich

Kommunikative Gestaltung (Anrede und Grussformel):
  1   der Textsorte angemessen
  0.5 untypische oder fehlende Wendungen
  0   keine textsortenspezifischen Wendungen

WICHTIG:
- Das ist A1. Erwarte einfache Hauptsaetze. Ein Text darf holprig klingen und trotzdem 3 Punkte bekommen, solange der Leitpunkt klar rueberkommt.
- Rechtschreibfehler ziehen NUR Punkte ab, wenn sie das Verstaendnis wirklich stoeren. „Ich bin krang" ist verstaendlich.
- Ein Leitpunkt gilt als erfuellt, wenn die Information da ist — egal mit welchen Worten. Die Person muss nicht die Musterloesung treffen.
- Eine SMS oder ein Zettel braucht keine formelle Anrede, aber irgendeine Ansprache und einen Abschluss.
- Sei bei „korrigiert" zurueckhaltend: Verbessere nur echte Fehler, behalte Woerter, Laenge und Ton der Person. Erfinde nichts dazu.
- Die Rueckmeldungen sprechen die Person mit „du" an, in einfachem Deutsch, ohne Fachbegriffe.

Gib GENAU dieses JSON zurueck:
{
  "punkte": [
    { "nr": 1, "wert": 3, "warum": "ein kurzer Satz: was war gut oder was fehlt" },
    { "nr": 2, "wert": 1.5, "warum": "…" },
    { "nr": 3, "wert": 0, "warum": "…" }
  ],
  "gestaltung": { "wert": 1, "warum": "kurz: Anrede und Gruss vorhanden und passend?" },
  "korrigiert": "der Text mit korrigierten Fehlern — bei fehlerfreiem Text exakt der Originaltext",
  "sprache": "ein bis zwei Saetze zur Sprache: der wichtigste Fehler und die Regel dahinter. Leer lassen, wenn alles stimmt.",
  "lob": "ein kurzes, echtes Lob (max. 8 Woerter), das zu diesem Text passt",
  "tipp": "ein konkreter Satz, was die Person beim naechsten Mal anders machen sollte"
}`;
}

function extractJson(t) {
  const s = t.indexOf('{'), e = t.lastIndexOf('}');
  if (s === -1 || e === -1) throw new Error('Keine JSON-Antwort vom Modell.');
  return JSON.parse(t.slice(s, e + 1));
}

/* Nur die drei erlaubten Stufen — schuetzt vor Fantasiewerten. */
function stufe(v, erlaubt) {
  const n = Number(v);
  let beste = erlaubt[0], ab = Infinity;
  for (const e of erlaubt) {
    const d = Math.abs(n - e);
    if (d < ab) { ab = d; beste = e; }
  }
  return Number.isFinite(n) ? beste : 0;
}

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'method_not_allowed' });

  const apiKey = process.env.ANTHROPIC_API_KEY;
  if (!apiKey) return res.status(503).json({ error: 'anthropic_key_missing' });

  const token = (req.headers.authorization || '').replace(/^Bearer\s+/i, '');
  if (!token) return res.status(401).json({ error: 'no_token' });

  const url = process.env.SUPABASE_URL;
  const service = process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (!url || !service) return res.status(500).json({ error: 'supabase_env_missing' });

  const admin = createClient(url, service);
  const { data: ures, error: uerr } = await admin.auth.getUser(token);
  if (uerr || !ures?.user) return res.status(401).json({ error: 'invalid_token' });
  const uid = ures.user.id;

  let { text, situation, punkte, sorte, level } = req.body || {};
  text = String(text || '').replace(/\r/g, '').trim();
  if (!text) return res.status(400).json({ error: 'text_required' });
  if (text.length > 1500) text = text.slice(0, 1500);
  if (!Array.isArray(punkte) || punkte.length !== 3) {
    return res.status(400).json({ error: 'drei_punkte_noetig' });
  }

  if (!level) {
    const { data: prof } = await admin.from('profiles').select('level').eq('id', uid).single();
    level = prof?.level || 'A1';
  }

  let out;
  try {
    const r = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        'x-api-key': apiKey,
        'anthropic-version': '2023-06-01',
      },
      body: JSON.stringify({
        model: MODEL,
        max_tokens: 900,
        system: SYSTEM,
        messages: [{ role: 'user', content: userPrompt({ text, situation, punkte, sorte, level }) }],
      }),
    });
    if (!r.ok) {
      const t = await r.text();
      return res.status(502).json({ error: 'anthropic_error', detail: t.slice(0, 300) });
    }
    const j = await r.json();
    const txt = (j.content || []).filter(b => b.type === 'text').map(b => b.text).join('');
    out = extractJson(txt);
  } catch (e) {
    return res.status(502).json({ error: 'generation_failed', detail: String(e).slice(0, 300) });
  }

  // Auf die erlaubten Stufen einrasten und die Summe selbst rechnen —
  // die Punktzahl darf nicht davon abhaengen, ob das Modell addieren kann.
  const roh = Array.isArray(out.punkte) ? out.punkte : [];
  const pp = punkte.map((p, i) => {
    const g = roh.find(x => Number(x.nr) === p.nr) || roh[i] || {};
    return {
      nr: p.nr,
      was: p.was,
      wert: stufe(g.wert, [0, 1.5, 3]),
      warum: String(g.warum || '').slice(0, 300),
    };
  });
  const gest = {
    wert: stufe((out.gestaltung || {}).wert, [0, 0.5, 1]),
    warum: String((out.gestaltung || {}).warum || '').slice(0, 300),
  };
  const summe = pp.reduce((a, x) => a + x.wert, 0) + gest.wert;

  return res.status(200).json({
    ok: true,
    punkte: pp,
    gestaltung: gest,
    summe,                 // 0 bis 10
    max: 10,
    korrigiert: String(out.korrigiert || text).trim(),
    sprache: String(out.sprache || '').slice(0, 400),
    lob: String(out.lob || 'Gut gemacht!').slice(0, 80),
    tipp: String(out.tipp || '').slice(0, 300),
  });
}
