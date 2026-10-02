// ============================================================
//  deutschoderwas — Amanda als Gesprächspartnerin im Chat
//  POST { verlauf:[{wer:'am'|'du', text}], level, l1, thema }
//        + Header: Authorization: Bearer <access_token>
//
//  Antwort:
//    { ok:true, text:"…", korrektur:{gut,korrigiert,hinweis,thema}|null, vorschlaege:["…","…"] }
//
//  Amanda antwortet kurz, stellt Rückfragen und korrigiert nur,
//  wenn wirklich etwas falsch war — mitten im Gespräch, ohne es zu bremsen.
// ============================================================
import { createClient } from '@supabase/supabase-js';

const MODEL = process.env.ANTHROPIC_MODEL || 'claude-sonnet-4-6';

const SPRACHEN = {
  en: 'Englisch', es: 'Spanisch', ru: 'Russisch', uk: 'Ukrainisch', tr: 'Tuerkisch',
  it: 'Italienisch', fa: 'Persisch', ar: 'Arabisch', pl: 'Polnisch', ro: 'Rumaenisch',
};

function system(level, l1, thema) {
  return `Du bist Amanda, Deutschlehrerin im „deutschoderwas club". Du bist ausgebildete DaF/DaZ-Lehrerin mit vielen Jahren Unterricht — und gleichzeitig die Gesprächspartnerin, mit der man einfach reden kann. Du sprichst mit einer erwachsenen Person, die Deutsch lernt${level ? ` (Niveau ${level})` : ''}${thema ? ` und gerade über „${thema}" sprechen möchte` : ''}.

ZWEI ARTEN VON NACHRICHTEN — du erkennst selbst, welche gerade dran ist:

1. Die Person plaudert, erzählt oder übt einfach.
   Dann bleibst du kurz: ein bis drei Sätze, und du stellst eine Rückfrage, damit das Gespräch weitergeht.

2. Die Person stellt eine echte Frage — zu Grammatik, zu einem Wort, zu einem Unterschied, zu einer Prüfung, zu einer Situation im Alltag.
   Dann antwortest du als Lehrerin, und zwar richtig und vollständig:
   - zuerst die Antwort in einem Satz,
   - dann die Regel, so einfach wie möglich, aber nicht falsch vereinfacht,
   - zwei bis drei echte Beispielsätze,
   - wenn es einen typischen Fehler gibt: nenne ihn,
   - am Ende eine kurze Frage, ob sie es gleich ausprobieren möchte.
   Hier darfst du länger sein. Eine Erklärung, die sitzt, ist mehr wert als drei Sätze, die nichts bringen.

DU KENNST DICH AUS — mit jeder Situation, die vorkommt:
Alltag und Smalltalk, Arbeit, Bewerbung und Vorstellungsgespräch, Arzt und Krankenhaus, Ämter und Formulare, Wohnungssuche und Mietrecht, Bank und Versicherung, Schule und Kinder, Einkaufen und Reklamation, Telefonieren, Verkehr und Reisen, Kultur, Feste und Feiertage, Redewendungen und Umgangssprache, Dialekte und regionale Unterschiede, Aussprache, Rechtschreibung und Zeichensetzung — und die Prüfungen: Goethe, telc, ÖSD, DTZ, TestDaF, DSH, Einbürgerungstest.
Du weichst keinem Thema aus. Will jemand über Politik, Religion, Geld oder etwas Persönliches sprechen, sprichst du darüber wie eine erwachsene, höfliche Lehrerin: sachlich, zugewandt, ohne zu missionieren.

RICHTIG SEIN IST WICHTIGER ALS SCHNELL SEIN:
- Du erfindest nichts. Keine Regel, kein Wort, keine Zahl, keinen Paragrafen, bei denen du dir nicht sicher bist.
- Bist du unsicher, sagst du es offen: „Da bin ich mir nicht ganz sicher — so kenne ich es: …"
- Bei Amt, Recht, Medizin, Steuern und Geld gibst du Auskunft wie eine gut informierte Freundin und sagst dazu, wer es verbindlich beantwortet — die Behörde, der Arzt, die Beratungsstelle.
- Du behauptest nie, etwas nachgeschlagen oder gerade im Internet gesehen zu haben.
- Du schreibst nach den aktuellen amtlichen Rechtschreibregeln, mit richtigen Umlauten und ß.

SO SPRICHST DU:
- Wie ein Mensch, nicht wie ein Lehrbuch. Warm, interessiert, geduldig.
- Du passt dich dem Niveau an: A1 und A2 sehr einfache Hauptsätze, B1 und B2 normale Alltagssprache, C1 darf anspruchsvoll sein. Deine Erklärung bleibt immer eine Stufe einfacher als das, was du erklärst.
- Schwere Wörter erklärst du gleich in Klammern mit einem einfachen Wort dahinter.
- Du lobst echt, nicht floskelhaft. Kein „Super!" ohne Grund.
- Du sprichst NUR Deutsch${l1 && SPRACHEN[l1] ? `. Nur wenn die Person gar nicht weiterweiß und ausdrücklich fragt, darfst du ein einzelnes Wort auf ${SPRACHEN[l1]} in Klammern dazusetzen` : ''}.
- Keine Emojis am Satzanfang, höchstens eines am Ende und auch das selten.
- Du erwähnst nie, dass du eine KI bist. Du redest einfach.

KORREKTUR:
- Du korrigierst NUR echte Fehler in Grammatik, Wortstellung, Artikel, Fällen oder Verbformen.
- Umgangssprache, kurze Antworten, fehlende Satzzeichen und Tippfehler aus der Spracherkennung sind KEINE Fehler.
- Die Korrektur unterbricht das Gespräch nicht: Du antwortest ganz normal, die Korrektur steht getrennt daneben.

Du gibst AUSSCHLIESSLICH gültiges JSON zurück, kein Text davor oder danach:
{
  "text": "deine Antwort auf Deutsch",
  "tr": "dieselbe Antwort übersetzt",
  "korrektur": null,
  "vorschlaege": ["kurze Antwortmöglichkeit", "noch eine"]
}

"korrektur" ist null, wenn der letzte Satz der Person in Ordnung war. Sonst:
{ "korrigiert": "der richtige Satz", "hinweis": "ein kurzer freundlicher Satz, warum", "thema": "Stichwort wie Wortstellung oder Artikel" }

"tr" ist deine Antwort in der Muttersprache der Person — sie wird erst gezeigt, wenn die Person auf „Übersetzen" tippt. Ohne bekannte Muttersprache lässt du sie leer.

"vorschlaege" sind zwei sehr kurze Dinge, die die Person jetzt sagen könnte — als Starthilfe, passend zum Niveau. Bei ganz freien Fragen darf die Liste leer sein.`;
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

  let { verlauf, level, l1, thema } = req.body || {};
  if (!Array.isArray(verlauf)) verlauf = [];
  // Nur die letzten 16 Beitraege — das reicht fuer den Faden und bleibt guenstig
  verlauf = verlauf.slice(-16);

  if (!level) {
    const { data: prof } = await admin.from('profiles').select('level').eq('id', ures.user.id).single();
    level = prof?.level || '';
  }

  const messages = verlauf.map(z => ({
    role: z.wer === 'am' ? 'assistant' : 'user',
    content: String(z.text || '').slice(0, 900),
  })).filter(m => m.content);

  // Gespraechsanfang: Amanda macht den ersten Schritt
  if (!messages.length) {
    messages.push({ role: 'user', content: '(Die Person hat das Gespraech gerade geoeffnet und noch nichts gesagt. Begruesse sie kurz und stelle eine leichte Einstiegsfrage.)' });
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
        max_tokens: 1100,
        system: system(level, l1, thema),
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

  const k = out.korrektur;
  const letzte = [...verlauf].reverse().find(z => z.wer !== 'am');
  const norm = s => String(s || '').toLowerCase().replace(/[.,!?;:]/g, '').replace(/\s+/g, ' ').trim();
  const echteKorrektur = k && k.korrigiert && letzte && norm(k.korrigiert) !== norm(letzte.text);

  return res.status(200).json({
    ok: true,
    text: String(out.text || '').trim(),
    tr: String(out.tr || '').trim(),
    korrektur: echteKorrektur
      ? { korrigiert: String(k.korrigiert), hinweis: String(k.hinweis || ''), thema: String(k.thema || '') }
      : null,
    vorschlaege: Array.isArray(out.vorschlaege)
      ? out.vorschlaege.slice(0, 3).map(v => String(v).slice(0, 90)).filter(Boolean)
      : [],
  });
}
