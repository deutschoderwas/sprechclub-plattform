// ============================================================
//  deutschoderwas club — „Foto machen, KI erklaert alle Woerter"
//  POST { image, mime, level, l1 }   + Header: Authorization: Bearer <access_token>
//  image = base64 (ohne data:-Praefix), max ~4 MB
//  -> Liste der Dinge im Bild: Artikel, Wort, Plural, Uebersetzung,
//     Beispielsatz + eine kleine Sprechaufgabe zum Bild.
//     Es wird NICHTS gespeichert — das macht der Client per RPC vok_eigene_add.
// ============================================================
import { createClient } from '@supabase/supabase-js';

const MODEL = process.env.ANTHROPIC_MODEL || 'claude-sonnet-4-6';

const SPRACHEN = {
  en: 'Englisch', es: 'Spanisch', ru: 'Russisch', uk: 'Ukrainisch',
  tr: 'Tuerkisch', it: 'Italienisch', fa: 'Persisch (Farsi)', ar: 'Arabisch',
  pl: 'Polnisch', ro: 'Rumaenisch', pt: 'Portugiesisch', fr: 'Franzoesisch',
};

const SYSTEM = `Du bist die Bild-Wortschatz-KI von „deutschoderwas club". Lernende fotografieren etwas aus ihrem Alltag und du zeigst ihnen, wie alles auf Deutsch heisst.
Du gibst AUSSCHLIESSLICH gueltiges JSON zurueck — kein Text davor oder danach, keine Markdown-Backticks.`;

function prompt(level, l1) {
  const sprache = SPRACHEN[l1] || null;
  return `Schau dir das Foto genau an. Es kommt von einem Deutschlernenden${level ? ` auf Niveau ${level}` : ''}.

Finde die 8 bis 14 wichtigsten sichtbaren Dinge, Personen, Orte oder Handlungen im Bild — genau das, was man wirklich benennen wuerde, wenn man das Bild beschreibt. Keine Fantasiewoerter, nichts, was man nicht sieht.

Regeln:
- Nomen IMMER mit Artikel: „der Tisch", „die Lampe", „das Fenster".
- Der Beispielsatz beschreibt DIESES Bild, nicht irgendein Bild. Er ist kurz und passt zum Niveau${level ? ` ${level}` : ''}: A1/A2 = ein einfacher Hauptsatz mit 4 bis 8 Woertern, B1/B2 = ein Satz mit Nebensatz erlaubt, C1 = darf anspruchsvoll sein.
- Sortiere von „steht klar im Mittelpunkt" nach „Detail am Rand".
- Nimm zu jedem Wort ein passendes Emoji.
- Wenn das Foto ein Text, ein Schild, ein Brief oder ein Formular ist: erklaere die wichtigen Woerter DARAUS.
- Erkennst du gar nichts Brauchbares (verwackelt, dunkel, leer), gib eine leere Liste und schreibe es in „hinweis".
${sprache ? `- „tr" ist die Uebersetzung auf ${sprache}, „bspTr" die Uebersetzung des Beispielsatzes auf ${sprache}. Beides nur in dieser einen Sprache.` : '- Lass „tr" und „bspTr" leer.'}

Gib GENAU dieses JSON zurueck:
{
  "szene": "ein deutscher Satz, der das ganze Bild beschreibt (max. 14 Woerter)",
  "hinweis": "leer lassen — nur fuellen, wenn das Bild nicht auswertbar ist",
  "woerter": [
    {
      "de": "der Tisch",
      "artikel": "der",
      "wort": "Tisch",
      "plural": "die Tische",
      "art": "nomen",
      "em": "🪑",
      "bsp": "Der Tisch steht am Fenster.",
      "tr": "${sprache ? 'Uebersetzung' : ''}",
      "bspTr": "${sprache ? 'Uebersetzung des Satzes' : ''}",
      "niveau": "A1"
    }
  ],
  "aufgabe": "eine kurze Sprechaufgabe zu genau diesem Bild, die die gefundenen Woerter benutzt (1 Satz, direkte Anrede „du")",
  "frage": "eine einfache Frage zum Bild, die der Lernende laut beantworten soll (1 Satz)"
}

„artikel" ist nur bei Nomen gefuellt, sonst leer. „art" ist eines von: nomen, verb, adjektiv, wendung. Gib NUR das JSON zurueck.`;
}

function extractJson(t) {
  const s = t.indexOf('{'), e = t.lastIndexOf('}');
  if (s === -1 || e === -1) throw new Error('Keine JSON-Antwort vom Modell.');
  return JSON.parse(t.slice(s, e + 1));
}

function slug(s) {
  return String(s || '').toLowerCase()
    .replace(/ä/g, 'ae').replace(/ö/g, 'oe').replace(/ü/g, 'ue').replace(/ß/g, 'ss')
    .replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '').slice(0, 40);
}

export const config = { api: { bodyParser: { sizeLimit: '8mb' } } };

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

  // Niveau und Muttersprache aus dem Profil, falls der Client nichts mitschickt
  const { data: prof } = await admin.from('profiles').select('level,native_language').eq('id', uid).single();

  let { image, mime, level, l1 } = req.body || {};
  if (!image) return res.status(400).json({ error: 'image_required' });
  image = String(image).replace(/^data:[^;]+;base64,/, '');
  if (image.length > 7_000_000) return res.status(413).json({ error: 'image_too_large' });

  mime = String(mime || 'image/jpeg').toLowerCase();
  if (!['image/jpeg', 'image/png', 'image/webp', 'image/gif'].includes(mime)) mime = 'image/jpeg';

  level = (level || prof?.level || '').trim();
  l1 = (l1 || '').trim().toLowerCase();

  // sanftes Tageslimit — schuetzt vor Dauerfeuer
  const heute = new Date().toISOString().slice(0, 10);
  try {
    const { count } = await admin.from('foto_analysen')
      .select('id', { count: 'exact', head: true })
      .eq('user_id', uid).gte('angelegt', heute + 'T00:00:00Z');
    if ((count || 0) >= 40) return res.status(429).json({ error: 'tageslimit' });
  } catch (e) { /* Tabelle optional — kein harter Fehler */ }

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
        max_tokens: 2200,
        system: SYSTEM,
        messages: [{
          role: 'user',
          content: [
            { type: 'image', source: { type: 'base64', media_type: mime, data: image } },
            { type: 'text', text: prompt(level, l1) },
          ],
        }],
      }),
    });
    if (!r.ok) {
      const t = await r.text();
      return res.status(502).json({ error: 'anthropic_error', detail: t.slice(0, 400) });
    }
    const j = await r.json();
    const txt = (j.content || []).filter(b => b.type === 'text').map(b => b.text).join('');
    out = extractJson(txt);
  } catch (e) {
    return res.status(502).json({ error: 'generation_failed', detail: String(e).slice(0, 300) });
  }

  const woerter = (Array.isArray(out.woerter) ? out.woerter : []).slice(0, 16).map(w => {
    const de = String(w.de || '').trim();
    if (!de) return null;
    const tr = {}, bspTr = {};
    if (l1 && w.tr) tr[l1] = String(w.tr).trim();
    if (l1 && w.bspTr) bspTr[l1] = String(w.bspTr).trim();
    return {
      id: 'foto-' + (slug(de) || Math.random().toString(36).slice(2, 10)),
      de,
      wort: String(w.wort || de).trim(),
      artikel: ['der', 'die', 'das'].includes(String(w.artikel || '').toLowerCase()) ? String(w.artikel).toLowerCase() : null,
      plural: String(w.plural || '').trim(),
      art: ['nomen', 'verb', 'adjektiv', 'wendung'].includes(String(w.art || '')) ? w.art : 'wort',
      em: String(w.em || '').slice(0, 4),
      bsp: String(w.bsp || '').trim(),
      tr, bspTr,
      niveau: /^[ABC][12]$/.test(String(w.niveau || '')) ? w.niveau : (level || 'A2'),
    };
  }).filter(Boolean);

  // Protokoll — fuer das Tageslimit und damit Julia sieht, wie oft es genutzt wird
  try {
    await admin.from('foto_analysen').insert({ user_id: uid, anzahl: woerter.length, szene: String(out.szene || '').slice(0, 300) });
  } catch (e) { /* optional */ }

  return res.status(200).json({
    ok: true,
    szene: String(out.szene || ''),
    hinweis: String(out.hinweis || ''),
    aufgabe: String(out.aufgabe || ''),
    frage: String(out.frage || ''),
    woerter,
  });
}
