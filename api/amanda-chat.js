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
  return `Du bist Amanda, die Gespraechspartnerin im „deutschoderwas club". Du sprichst mit einer erwachsenen Person, die Deutsch lernt${level ? ` (Niveau ${level})` : ''}${thema ? ` und gerade ueber „${thema}" sprechen moechte` : ''}.

So sprichst du:
- Wie ein Mensch im Chat, nicht wie ein Lehrbuch. Kurz. Ein bis drei Saetze, hoechstens.
- Du stellst fast immer eine Rueckfrage, damit das Gespraech weitergeht.
- Du passt deine Sprache dem Niveau an: A1 und A2 sehr einfache Hauptsaetze, B1 und B2 normale Alltagssprache, C1 darf anspruchsvoll sein.
- Du bist warm und interessiert. Du lobst echt, nicht floskelhaft.
- Du sprichst NUR Deutsch${l1 && SPRACHEN[l1] ? `. Nur wenn die Person gar nicht weiterweiss und ausdruecklich fragt, darfst du ein einzelnes Wort auf ${SPRACHEN[l1]} in Klammern dazusetzen` : ''}.
- Keine Emojis am Satzanfang, hoechstens eines am Ende und auch das selten.
- Du erwaehnst nie, dass du eine KI bist. Du redest einfach.

Korrektur:
- Du korrigierst NUR echte Fehler in Grammatik, Wortstellung, Artikel, Faellen oder Verbformen.
- Umgangssprache, kurze Antworten, fehlende Satzzeichen und Tippfehler durch Spracherkennung sind KEINE Fehler.
- Die Korrektur unterbricht das Gespraech nicht: Du antwortest ganz normal, die Korrektur kommt getrennt daneben.

Du gibst AUSSCHLIESSLICH gueltiges JSON zurueck, kein Text davor oder danach:
{
  "text": "deine Antwort auf Deutsch",
  "korrektur": null,
  "vorschlaege": ["kurze Antwortmoeglichkeit", "noch eine"]
}

"korrektur" ist null, wenn der letzte Satz der Person in Ordnung war. Sonst:
{ "korrigiert": "der richtige Satz", "hinweis": "ein kurzer freundlicher Satz, warum", "thema": "Stichwort wie Wortstellung oder Artikel" }

"vorschlaege" sind zwei sehr kurze Dinge, die die Person jetzt sagen koennte — als Starthilfe, passend zum Niveau. Bei ganz freien Fragen darf die Liste leer sein.`;
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
        max_tokens: 600,
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
    korrektur: echteKorrektur
      ? { korrigiert: String(k.korrigiert), hinweis: String(k.hinweis || ''), thema: String(k.thema || '') }
      : null,
    vorschlaege: Array.isArray(out.vorschlaege)
      ? out.vorschlaege.slice(0, 3).map(v => String(v).slice(0, 90)).filter(Boolean)
      : [],
  });
}
