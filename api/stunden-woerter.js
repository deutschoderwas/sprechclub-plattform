// ============================================================
//  Wörter für jede Stunde — automatisch aus der Unterrichtsseite
//
//  Julia, 11.11.2026: "Wir müssen die Wörter in den Vokabeltrainer
//  hinzufügen von der Liste, die die Schüler den Unterricht besuchen,
//  ganz wichtig" — "es muss alles automatisiert sein und auf den
//  Schüler angepasst".
//
//  Bisher kamen die Wörter einer Stunde nur über die Nachbereitung in
//  class_materials.content.vocab — und die entsteht nur, wenn in der
//  Stunde etwas an der Tafel stand. Am 11.11. hatten 30 von 50 Stunden
//  der nächsten zwei Wochen keine Wortliste. Der Vokabeltrainer, "Für
//  dich" und die Nachbereitung zeigten für diese Stunden nichts.
//
//  Dieser Lauf füllt die Lücke vorher: Für jede Stunde (7 Tage zurück
//  bis 14 Tage voraus) ohne Wortliste liest er die Unterrichtsseite
//  (material_live), lässt Claude die Wörter herausziehen, die dort
//  wirklich vorkommen, und schreibt sie in content.vocab, jedes Wort mit
//  Stufe (A2–C1). Der Vokabeltrainer nimmt jeder Schülerin nur die
//  Wörter ihrer Stufe (eine drüber erlaubt). Kommt danach die
//  Nachbereitung, mischt sie ihre Tafel-Wörter dazu (auto-nachbereitung
//  liest content.vocab schon mit).
//
//  Gleiche Seite = gleiche Wörter: Pro Lauf wird jede Seite nur einmal
//  gelesen, und eine Seite, die schon einmal ausgewertet wurde, wird
//  aus einer anderen Stunde übernommen statt neu gefragt.
//
//  Aufruf: täglich über /api/daily (intern), oder von Hand
//  GET /api/stunden-woerter?pruefen=1  (zeigt nur, was fehlt)
// ============================================================
import { createClient } from '@supabase/supabase-js';

export const maxDuration = 60;
const MODEL = process.env.ANTHROPIC_MODEL_SCHNELL || 'claude-haiku-4-5-20251001';
const PRO_LAUF = 6;          // höchstens so viele neue Seiten je Aufruf (Zeitlimit)

function seitenSchluessel(url) {
  try { const u = new URL(url); return u.pathname.replace(/^\//, '') + (u.search || ''); }
  catch (e) { return String(url || '').replace(/^https?:\/\/[^/]+\//, ''); }
}
function textAus(html) {
  return String(html || '')
    .replace(/<style[\s\S]*?<\/style>/gi, ' ')
    .replace(/<script[^>]*src=[^>]*><\/script>/gi, ' ')
    .replace(/<(br|p|div|li|h\d|tr|section)[^>]*>/gi, '\n')
    .replace(/<[^>]+>/g, ' ')
    .replace(/&nbsp;/g, ' ').replace(/&amp;/g, '&').replace(/&quot;/g, '"').replace(/&#39;/g, "'")
    .replace(/[ \t]+/g, ' ').replace(/\n\s*\n+/g, '\n').trim();
}
function json(t) {
  const s = t.indexOf('{'), e = t.lastIndexOf('}');
  if (s < 0 || e < 0) throw new Error('keine_json_antwort');
  return JSON.parse(t.slice(s, e + 1));
}

async function woerterAusSeite(apiKey, url, text) {
  const bereich = (() => { try { return new URL(url).searchParams.get('bereich') || new URL(url).searchParams.get('thema') || ''; } catch (e) { return ''; } })();
  const prompt = `Das ist der Inhalt einer Unterrichtsseite aus einem Deutsch-Sprechclub für Erwachsene (Niveau A2 bis C1).${bereich ? `\nDie Stunde behandelt nur den Bereich "${bereich}" dieser Seite.` : ''}

Ziehe die Wörter und festen Wendungen heraus, die die Teilnehmer in dieser Stunde lernen oder benutzen sollen: Wortschatz, Redemittel, wichtige Verben und Ausdrücke. Nur was auf der Seite wirklich vorkommt, nichts erfinden. Keine Allerweltswörter (sein, haben, gut, ich).

Gib GENAU dieses JSON zurück, 15 bis 25 Einträge:
{"vocab":[{"de":"Nomen mit Artikel (der/die/das ...), Verben im Infinitiv, Wendungen wie auf der Seite","hi":"kurze Erklärung auf einfachem Deutsch, höchstens 8 Wörter","bsp":"ein Beispielsatz, am besten von der Seite","niveau":"A2|B1|B2|C1"}]}

Seite (gekürzt):
${text.slice(0, 45000)}`;
  const r = await fetch('https://api.anthropic.com/v1/messages', {
    method: 'POST',
    headers: { 'content-type': 'application/json', 'x-api-key': apiKey, 'anthropic-version': '2023-06-01' },
    body: JSON.stringify({ model: MODEL, max_tokens: 3000,
      system: 'Du bist Deutschlehrerin. Du antwortest ausschliesslich mit gueltigem JSON. Kein Gendern.',
      messages: [{ role: 'user', content: prompt }] }),
  });
  const j = await r.json();
  if (!r.ok) throw new Error('anthropic ' + r.status + ' ' + JSON.stringify(j).slice(0, 200));
  const a = json((j.content || []).map(c => c.text || '').join(''));
  const gesehen = {};
  return (Array.isArray(a.vocab) ? a.vocab : [])
    /* Feldnamen wie in den bestehenden Listen der Nachbereitung:
       de, info (Bedeutung), example (Beispielsatz). */
    .map(v => ({ de: String(v.de || '').trim().slice(0, 80), info: String(v.hi || '').trim().slice(0, 140),
                 example: String(v.bsp || '').trim().slice(0, 220),
                 niveau: /^(A1|A2|B1|B2|C1|C2)$/.test(String(v.niveau)) ? String(v.niveau) : 'B1',
                 quelle: 'stunde' }))
    .filter(v => v.de && !gesehen[v.de.toLowerCase()] && (gesehen[v.de.toLowerCase()] = 1))
    .slice(0, 25);
}

export default async function handler(req, res) {
  const geheim = process.env.CRON_SECRET || '';
  const nurPruefen = String(req.query?.pruefen || '') === '1';
  if (!nurPruefen && geheim && req.headers['x-intern'] !== geheim && req.headers['x-cron-secret'] !== geheim) {
    return res.status(401).json({ error: 'nur_intern' });
  }
  const apiKey = process.env.ANTHROPIC_API_KEY;
  if (!apiKey) return res.status(200).json({ ok: false, skipped: 'ANTHROPIC_API_KEY fehlt' });
  const sb = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_SERVICE_ROLE_KEY);
  const base = process.env.SITE_URL || 'https://www.deutschoderwas-club.de';

  const von = new Date(Date.now() - 7 * 86400000).toISOString();
  const bis = new Date(Date.now() + 14 * 86400000).toISOString();
  const { data: klassen, error } = await sb.from('classes')
    .select('id,starts_at,material_live').gte('starts_at', von).lte('starts_at', bis).not('material_live', 'is', null);
  if (error) return res.status(500).json({ error: error.message });
  const ids = (klassen || []).map(k => k.id);
  const { data: mats } = ids.length ? await sb.from('class_materials').select('class_id,content').in('class_id', ids) : { data: [] };
  const matVon = {}; (mats || []).forEach(m => { matVon[m.class_id] = m.content || {}; });

  /* Welche Seiten haben schon eine Wortliste (aus einer anderen Stunde)? */
  const fertig = {};
  (klassen || []).forEach(k => {
    const c = matVon[k.id]; if (!c || !Array.isArray(c.vocab) || c.vocab.length < 4) return;
    const s = seitenSchluessel(k.material_live);
    if (c.vocab_aus === 'seite' && !fertig[s]) fertig[s] = c.vocab;
  });
  const offen = (klassen || []).filter(k => { const c = matVon[k.id]; return !c || !Array.isArray(c.vocab) || c.vocab.length < 4; });
  if (nurPruefen) {
    return res.status(200).json({ ok: true, stunden: (klassen || []).length, ohne_woerter: offen.length,
      seiten: [...new Set(offen.map(k => seitenSchluessel(k.material_live)))] });
  }

  const ergebnis = { gefuellt: 0, seiten_neu: 0, uebernommen: 0, fehler: [] };
  let neu = 0;
  for (const k of offen.sort((a, b) => new Date(a.starts_at) - new Date(b.starts_at))) {
    const s = seitenSchluessel(k.material_live);
    let vocab = fertig[s];
    if (!vocab) {
      if (neu >= PRO_LAUF) continue;
      neu++;
      try {
        const url = /^https?:/.test(k.material_live) ? k.material_live : base + '/' + s;
        const r = await fetch(url);
        if (!r.ok) throw new Error('seite ' + r.status);
        vocab = await woerterAusSeite(apiKey, url, textAus(await r.text()));
        if (vocab.length < 4) throw new Error('zu_wenig_woerter');
        fertig[s] = vocab; ergebnis.seiten_neu++;
      } catch (e) { ergebnis.fehler.push(s + ': ' + String(e.message || e).slice(0, 120)); continue; }
    } else ergebnis.uebernommen++;
    const content = Object.assign({}, matVon[k.id] || {}, { vocab, vocab_aus: 'seite' });
    const { error: uerr } = matVon[k.id]
      ? await sb.from('class_materials').update({ content }).eq('class_id', k.id)
      : await sb.from('class_materials').insert({ class_id: k.id, content });
    if (uerr) ergebnis.fehler.push(k.id + ': ' + uerr.message); else ergebnis.gefuellt++;
  }
  return res.status(200).json({ ok: true, offen: offen.length, ...ergebnis });
}
