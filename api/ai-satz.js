// ============================================================
//  deutschoderwas — Amanda korrigiert eine Dialogantwort
//  POST { satz, frage, aufgabe, level }  + Header: Authorization: Bearer <token>
//  Fuer angemeldete Lernende (nicht nur Team). Antwortet freundlich,
//  knapp und immer im gleichen JSON-Format.
// ============================================================
import { createClient } from '@supabase/supabase-js';

const MODEL = process.env.ANTHROPIC_MODEL || 'claude-sonnet-4-6';

const SYSTEM = `Du bist Amanda, die freundliche Sprachbegleiterin von „deutschoderwas club". Du korrigierst einzelne gesprochene oder getippte Saetze von Deutschlernenden — warmherzig, knapp und ohne erhobenen Zeigefinger.
Du gibst AUSSCHLIESSLICH gueltiges JSON zurueck: kein Text davor oder danach, keine Markdown-Backticks.`;

function userPrompt({ satz, frage, aufgabe, level }) {
  return `In einem Uebungsdialog hat Amanda gefragt oder gesagt:
«${frage || '—'}»

Die Aufgabe fuer die lernende Person war: «${aufgabe || 'passend antworten'}».

Die Person hat geantwortet:
«${satz}»

Niveau der Person: ${level || 'unbekannt'}.

Bewerte NUR die Sprache dieser einen Antwort. Wichtig:
- Umgangssprache, kurze Antworten, fehlende Punkte am Satzende und Tippfehler durch Spracherkennung sind KEINE Fehler.
- Wenn der Satz verstaendlich und grammatisch in Ordnung ist, ist "gut": true — auch wenn man ihn eleganter sagen koennte.
- Korrigiere nur, was wirklich falsch ist: Grammatik, Wortstellung, Artikel, Faelle, Verbform, klar falsche Wortwahl.
- Behalte Inhalt, Laenge und Ton der Person bei. Erfinde nichts dazu.
- Die Erklaerung ist EIN kurzer Satz auf einfachem Deutsch, passend zum Niveau. Sprich die Person mit „du" an.
- Passt die Antwort inhaltlich gar nicht zur Frage, ist "gut": false und du erklaerst das freundlich in "hinweis" — ohne den Satz umzuschreiben.
- "lob" ist ein sehr kurzes, echtes Lob (max. 5 Woerter), das zur Antwort passt.

Gib GENAU dieses JSON zurueck:
{
  "gut": true,
  "korrigiert": "der korrigierte Satz — bei keinem Fehler exakt der Originalsatz",
  "hinweis": "eine kurze, freundliche Erklaerung. Leer lassen, wenn alles richtig war.",
  "thema": "kurzes Stichwort zum Fehler, z.B. Wortstellung, Artikel, Perfekt, Praeposition. Leer lassen, wenn alles richtig war.",
  "lob": "kurzes Lob"
}

Gib NUR das JSON zurueck.`;
}

function extractJson(t) {
  const s = t.indexOf('{'), e = t.lastIndexOf('}');
  if (s === -1 || e === -1) throw new Error('Keine JSON-Antwort vom Modell.');
  return JSON.parse(t.slice(s, e + 1));
}

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'method_not_allowed' });

  const apiKey = process.env.ANTHROPIC_API_KEY;
  if (!apiKey) return res.status(500).json({ error: 'anthropic_key_missing' });

  const token = (req.headers.authorization || '').replace(/^Bearer\s+/i, '');
  if (!token) return res.status(401).json({ error: 'no_token' });

  const url = process.env.SUPABASE_URL;
  const service = process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (!url || !service) return res.status(500).json({ error: 'supabase_env_missing' });

  const admin = createClient(url, service);
  const { data: ures, error: uerr } = await admin.auth.getUser(token);
  if (uerr || !ures?.user) return res.status(401).json({ error: 'invalid_token' });
  const uid = ures.user.id;

  let { satz, frage, aufgabe, level } = req.body || {};
  satz = String(satz || '').trim();
  if (!satz) return res.status(400).json({ error: 'satz_required' });
  if (satz.length > 600) satz = satz.slice(0, 600);

  if (!level) {
    const { data: prof } = await admin.from('profiles').select('level').eq('id', uid).single();
    level = prof?.level || '';
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
        max_tokens: 500,
        system: SYSTEM,
        messages: [{ role: 'user', content: userPrompt({ satz, frage, aufgabe, level }) }],
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

  const korrigiert = String(out.korrigiert || satz).trim();
  // Kein echter Unterschied -> als richtig behandeln
  const norm = s => s.toLowerCase().replace(/[.,!?;:]/g, '').replace(/\s+/g, ' ').trim();
  const gut = out.gut === true || norm(korrigiert) === norm(satz);

  return res.status(200).json({
    ok: true,
    gut,
    korrigiert,
    hinweis: gut ? '' : String(out.hinweis || ''),
    thema: gut ? '' : String(out.thema || ''),
    lob: String(out.lob || 'Gut gemacht!'),
  });
}
