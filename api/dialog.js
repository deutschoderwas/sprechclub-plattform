// ============================================================
//  deutschoderwas — Amanda führt ein echtes Gespräch
//
//  Der Unterschied zu vorher: Das Skript ist nicht mehr die
//  Tonspur, sondern der Plan. Amanda bekommt die Situation,
//  ihre Rolle, das aktuelle Ziel und das bisherige Gespräch —
//  und antwortet auf das, was die Person WIRKLICH gesagt hat.
//
//  POST {
//    ort, rolle, schritte:[{amanda,hinweis,beispiel}], i,
//    verlauf:[{wer:'am'|'du', text}], satz, level, l1, titel
//  }
//  + Header: Authorization: Bearer <access_token>
//
//  Antwort:
//  { ok, text, weiter, fertig, korrektur|null, vorschlaege[] }
//
//    weiter = das Ziel dieses Schritts ist erreicht, es geht weiter
//    fertig = das Gespräch ist zu Ende
// ============================================================
import { createClient } from '@supabase/supabase-js';

const MODEL = process.env.ANTHROPIC_MODEL || 'claude-sonnet-4-6';

const SPRACHEN = {
  en: 'Englisch', es: 'Spanisch', ru: 'Russisch', uk: 'Ukrainisch', tr: 'Tuerkisch',
  it: 'Italienisch', fa: 'Persisch', ar: 'Arabisch', pl: 'Polnisch', ro: 'Rumaenisch',
};

function system({ titel, ort, rolle, schritte, i, level, l1 }) {
  const jetzt = schritte[i] || {};
  const rest = schritte.slice(i + 1).map((s, n) => `${i + n + 2}. ${s.hinweis || ''}`).join('\n');

  return `Du spielst eine Rolle in einer Uebungssituation fuer jemanden, der Deutsch lernt${level ? ` (Niveau ${level})` : ''}.

SITUATION: ${titel || ''}
${ort ? `ORT: ${ort}` : ''}
DEINE ROLLE: ${rolle || 'die Person, mit der die lernende Person in dieser Situation spricht'}

DEIN ZIEL GERADE: Die Person soll Folgendes tun — „${jetzt.hinweis || 'sinnvoll antworten'}".
Zur Orientierung, was du in diesem Schritt ungefaehr sagen wuerdest, wenn alles glatt laeuft: „${jetzt.amanda || ''}"
Das ist ein VORSCHLAG, kein Text zum Vorlesen. Passe ihn an das an, was die Person wirklich gesagt hat.
${rest ? `\nDanach kommen noch diese Schritte:\n${rest}` : '\nDanach ist das Gespraech zu Ende.'}

DIE WICHTIGSTEN REGELN — daran ist das frueher gescheitert:
1. Du reagierst auf das, was die Person TATSAECHLICH geschrieben hat. Niemals auf das, was im Skript stand.
2. Du erfindest KEINE Angaben ueber die Person. Nicht ihren Namen, nicht ihren Wohnort, nicht ihren Beruf,
   nicht ihre Telefonnummer. Wenn die Person sagt, sie heisst Julia, dann heisst sie Julia — auch wenn im
   Skript ein anderer Name steht. Du benutzt nur, was sie dir selbst gesagt hat.
3. Stellt die Person eine Rueckfrage, beantwortest du sie zuerst und kommst dann auf dein Ziel zurueck.
4. Ist die Antwort unverstaendlich oder passt gar nicht, sagst du das freundlich und fragst noch einmal —
   in der Rolle, nicht als Lehrerin. Zum Beispiel „Wie bitte?" oder „Entschuldigung, das habe ich nicht verstanden."
5. Du bleibst in deiner Rolle. Du sagst nie, dass du eine KI bist, und redest nicht ueber die Uebung.
6. Kurz. Ein bis zwei Saetze. So, wie man in dieser Situation wirklich spricht.
7. Sprachniveau: A1 und A2 ganz einfache kurze Hauptsaetze, B1 und B2 normale Alltagssprache, C1 darf anspruchsvoll sein.
8. Du sprichst nur Deutsch${l1 && SPRACHEN[l1] ? `. Nur wenn die Person gar nicht weiterweiss, darf EIN Wort auf ${SPRACHEN[l1]} in Klammern dazu` : ''}.

KORREKTUR — getrennt von deiner Antwort:
Nur echte Fehler in Grammatik, Wortstellung, Artikel, Faellen oder Verbformen.
Umgangssprache („nee", „ne", „joa"), kurze Antworten, fehlende Satzzeichen und Tippfehler durch
Spracherkennung sind KEINE Fehler. Im Zweifel: keine Korrektur.

Du gibst AUSSCHLIESSLICH gueltiges JSON zurueck, kein Wort davor oder danach:
{
  "text": "was du in deiner Rolle antwortest",
  "weiter": true,
  "korrektur": null,
  "vorschlaege": ["kurze Moeglichkeit", "noch eine"]
}

"weiter" ist true, wenn die Person das Ziel dieses Schritts erfuellt hat und es weitergehen kann.
"weiter" ist false, wenn sie ausgewichen ist, zurueckgefragt hat, etwas Unverstaendliches geschrieben
hat oder das Ziel noch nicht erfuellt ist. Dann bleibt das Ziel stehen und du fragst noch einmal.
Sei dabei grosszuegig: Wer sinngemaess richtig antwortet, hat das Ziel erfuellt, auch mit Fehlern.

"korrektur" ist null oder:
{ "korrigiert": "der richtige Satz", "hinweis": "ein kurzer freundlicher Satz, warum", "thema": "Stichwort" }

"vorschlaege" sind zwei sehr kurze Dinge, die die Person als Naechstes sagen koennte.`;
}

function extractJson(t) {
  const s = t.indexOf('{'), e = t.lastIndexOf('}');
  if (s === -1 || e === -1) throw new Error('Keine JSON-Antwort.');
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

  let { ort, rolle, schritte, i, verlauf, satz, level, l1, titel } = req.body || {};
  if (!Array.isArray(schritte) || !schritte.length) return res.status(400).json({ error: 'schritte_required' });
  i = Math.max(0, Math.min(parseInt(i, 10) || 0, schritte.length - 1));
  if (!Array.isArray(verlauf)) verlauf = [];
  verlauf = verlauf.slice(-16);
  satz = String(satz || '').trim().slice(0, 900);

  if (!level) {
    const { data: prof } = await admin.from('profiles').select('level').eq('id', ures.user.id).single();
    level = prof?.level || '';
  }

  const messages = verlauf.map(z => ({
    role: z.wer === 'am' ? 'assistant' : 'user',
    content: String(z.text || '').slice(0, 900),
  })).filter(m => m.content);

  if (satz) messages.push({ role: 'user', content: satz });

  if (!messages.length) {
    messages.push({ role: 'user', content: '(Die Person hat die Situation gerade geoeffnet und noch nichts gesagt. Eroeffne das Gespraech in deiner Rolle.)' });
  }
  if (messages[0].role === 'assistant') messages.shift();

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
        max_tokens: 600,
        system: system({ titel, ort, rolle, schritte, i, level, l1 }),
        messages,
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

  // Eine Korrektur, die nichts aendert, ist keine Korrektur
  const k = out.korrektur;
  const norm = s => String(s || '').toLowerCase().replace(/[.,!?;:]/g, '').replace(/\s+/g, ' ').trim();
  const echt = k && k.korrigiert && satz && norm(k.korrigiert) !== norm(satz);

  const weiter = out.weiter !== false;

  return res.status(200).json({
    ok: true,
    text: String(out.text || '').trim(),
    weiter,
    fertig: weiter && i >= schritte.length - 1,
    korrektur: echt
      ? { korrigiert: String(k.korrigiert), hinweis: String(k.hinweis || ''), thema: String(k.thema || '') }
      : null,
    vorschlaege: Array.isArray(out.vorschlaege)
      ? out.vorschlaege.slice(0, 3).map(v => String(v).slice(0, 90)).filter(Boolean)
      : [],
  });
}
