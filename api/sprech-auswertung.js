// ============================================================
//  Auswertung nach einem Gespräch mit Amanda
//
//  POST { zeilen: [{wer:'du'|'am', text}], niveau, thema }
//  Header: Authorization: Bearer <access_token>
//
//  Warum (9.11.2026): Julia: "Schau dir bitte Talkpal an, wir müssen
//  es so professionell wie da machen." Was dort am meisten trägt, ist
//  das Danach: man legt auf und sieht, was gut war und was man anders
//  sagen kann. Bei uns stand nach dem Gespräch nur die Mitschrift.
//
//  Gibt zurück:
//    gut:         2 bis 3 kurze Sätze, was wirklich gut war
//    korrekturen: höchstens 5 { du, besser, warum, thema }
//                 nur aus den Sätzen der Schülerin, nichts erfunden
//    woerter:     höchstens 5 { wort, artikel, bedeutung, bsp }
//                 nützliche Wörter aus dem Gespräch, passend zur Stufe
//    weiter:      ein Satz: was als Nächstes üben
//
//  Gespeichert wird hier nichts. Was die Schülerin behalten will,
//  legt die Seite selbst ab (vokabel_eigene, fehler_trainer).
// ============================================================
import { createClient } from '@supabase/supabase-js';
import { hatVollzugang, ZUGANG_SPALTEN } from './_zugang.js';

const MODEL = process.env.ANTHROPIC_MODEL || 'claude-sonnet-4-6';

const SYSTEM = `Du bist Amanda, Deutschlehrerin im deutschoderwas club. Du wertest ein gesprochenes Übungsgespräch mit einer erwachsenen Deutschlernerin aus.
Ton: warm, klar, ehrlich, kein Gendern, keine Übertreibung, keine Emojis.
Die Sätze der Lernerin stammen aus einer automatischen Spracherkennung. Fehlende Satzzeichen, Groß- und Kleinschreibung und offensichtliche Hörfehler der Erkennung sind KEINE Fehler der Lernerin.
Du gibst AUSSCHLIESSLICH gültiges JSON zurück, ohne Text davor oder danach.`;

function prompt(zeilen, niveau, thema) {
  const text = zeilen.map(z => (z.wer === 'du' ? 'LERNERIN: ' : 'AMANDA: ') + z.text).join('\n');
  return `Niveau der Lernerin: ${niveau || 'unbekannt'}${thema ? `\nThema des Gesprächs: ${thema}` : ''}

Das Gespräch:
${text}

Gib GENAU dieses JSON zurück:
{
  "gut": ["2 bis 3 kurze Sätze an die Lernerin (du), was in IHREN Sätzen wirklich gut war. Konkret, mit Beispiel aus dem Gespräch."],
  "korrekturen": [
    {"du": "ihr Satz oder Satzteil, wörtlich aus dem Gespräch", "besser": "so sagt man es richtig oder natürlicher", "warum": "die Regel in einem einfachen Satz", "thema": "kurzes Stichwort, z. B. Wortstellung, Perfekt, Artikel"}
  ],
  "woerter": [
    {"wort": "nützliches Wort oder feste Wendung aus dem Gespräch", "artikel": "der/die/das oder leer", "bedeutung": "kurze Erklärung auf einfachem Deutsch", "bsp": "ein Beispielsatz"}
  ],
  "weiter": "ein Satz: was sie als Nächstes üben sollte"
}

Regeln:
- Korrekturen NUR aus Sätzen mit LERNERIN. Höchstens 5, die wichtigsten zuerst. Wenn nichts falsch war: leere Liste.
- Korrigiere nur echte Fehler oder deutlich unnatürliche Formulierungen. Nichts erfinden.
- Wörter: höchstens 5, passend zum Niveau, eher aus Amandas Sätzen oder Wörter, die der Lernerin gefehlt haben.
- Alles auf Deutsch, einfach genug für das Niveau.
Gib NUR das JSON zurück.`;
}

function json(t) {
  const s = t.indexOf('{'), e = t.lastIndexOf('}');
  if (s === -1 || e === -1) throw new Error('keine_json_antwort');
  return JSON.parse(t.slice(s, e + 1));
}
function kurz(x, n) { return String(x == null ? '' : x).slice(0, n); }

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'method_not_allowed' });

  const apiKey = process.env.ANTHROPIC_API_KEY;
  if (!apiKey) return res.status(503).json({ error: 'nicht_eingerichtet' });
  const url = process.env.SUPABASE_URL, service = process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (!url || !service) return res.status(500).json({ error: 'supabase_env_missing' });

  const token = (req.headers.authorization || '').replace(/^Bearer\s+/i, '');
  if (!token) return res.status(401).json({ error: 'no_token' });

  const admin = createClient(url, service);
  const { data: ures, error: uerr } = await admin.auth.getUser(token);
  if (uerr || !ures?.user) return res.status(401).json({ error: 'invalid_token' });
  const uid = ures.user.id;
  const { data: prof } = await admin.from('profiles').select(ZUGANG_SPALTEN).eq('id', uid).single();
  if (!(await hatVollzugang(admin, uid, prof))) return res.status(402).json({ error: 'kein_zugang' });

  const roh = Array.isArray(req.body?.zeilen) ? req.body.zeilen : [];
  const zeilen = roh
    .filter(z => z && (z.wer === 'du' || z.wer === 'am') && String(z.text || '').trim())
    .slice(-60)
    .map(z => ({ wer: z.wer, text: kurz(z.text, 600) }));
  const eigene = zeilen.filter(z => z.wer === 'du');
  if (eigene.length < 2) return res.status(400).json({ error: 'zu_kurz' });

  const niveau = kurz(req.body?.niveau, 4);
  const thema = kurz(req.body?.thema, 120);

  try {
    const r = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: { 'content-type': 'application/json', 'x-api-key': apiKey, 'anthropic-version': '2023-06-01' },
      body: JSON.stringify({
        model: MODEL, max_tokens: 1400, system: SYSTEM,
        messages: [{ role: 'user', content: prompt(zeilen, niveau, thema) }],
      }),
    });
    const j = await r.json();
    if (!r.ok) {
      console.log('[auswertung] anthropic', r.status, JSON.stringify(j).slice(0, 300));
      return res.status(502).json({ error: 'ki_fehler' });
    }
    const t = (j.content || []).map(c => c.text || '').join('');
    const a = json(t);
    return res.status(200).json({
      ok: true,
      gut: (Array.isArray(a.gut) ? a.gut : []).slice(0, 3).map(x => kurz(x, 300)),
      korrekturen: (Array.isArray(a.korrekturen) ? a.korrekturen : []).slice(0, 5).map(k => ({
        du: kurz(k.du, 300), besser: kurz(k.besser, 300), warum: kurz(k.warum, 300), thema: kurz(k.thema, 40),
      })).filter(k => k.du && k.besser),
      woerter: (Array.isArray(a.woerter) ? a.woerter : []).slice(0, 5).map(w => ({
        wort: kurz(w.wort, 60), artikel: kurz(w.artikel, 3), bedeutung: kurz(w.bedeutung, 200), bsp: kurz(w.bsp, 200),
      })).filter(w => w.wort),
      weiter: kurz(a.weiter, 300),
    });
  } catch (e) {
    console.log('[auswertung] fehler', String(e && e.message || e).slice(0, 200));
    return res.status(500).json({ error: 'auswertung_fehlgeschlagen' });
  }
}
