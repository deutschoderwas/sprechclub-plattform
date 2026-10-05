// ============================================================
//  Ein echtes Bild zu jedem Wort
//
//  Im Lernbereich standen bei den Vokabeln bisher nur Emojis.
//  Ein Emoji ist ein Zeichen, kein Bild: "der Morgen" als Sonne
//  erklaert nichts. Wer ein Wort behalten will, braucht etwas zu
//  sehen — ein Foto, das die Situation zeigt.
//
//  Diese Datei holt genau das. Einmal pro Wort, danach kommt es
//  aus der Tabelle wort_bilder und kostet niemanden mehr etwas:
//  weder Wartezeit noch ein Anfragekontingent.
//
//  POST { woerter: [ { wort, en? }, ... ] }   (hoechstens 24)
//    -> { ok, bilder: { "<wort>": { url, autor, quelle } } }
//
//  Fehlt ein Schluessel oder findet sich nichts, kommt einfach
//  nichts zurueck. Die Lektion zeigt dann weiter ihr Emoji —
//  sie bricht nie ab, nur weil ein Foto fehlt.
// ============================================================

const ARTIKEL = /^(der|die|das|den|dem|des|ein|eine|einen)\s+/i;

/* Die erste Fassung hat alles genommen, was Openverse ausspuckte — zu
   "Suppe" kam eine Schallplattenhuelle, zu "Lebenslauf" ein Gemaelde.
   Diese Treffer liegen noch im Cache. Alles, was vor diesem Zeitpunkt
   geholt wurde, wird deshalb ignoriert und neu gesucht. */
const AB = '2026-10-05T07:00:00Z';

function schluessel(w) {
  return String(w || '').trim().toLowerCase().replace(ARTIKEL, '').replace(/\s+/g, ' ').slice(0, 80);
}
/* Nur das nackte Wort suchen: "die Begruessung (formell)" findet nichts,
   "Begruessung" schon. */
function suchwort(w) {
  return String(w || '').replace(ARTIKEL, '').replace(/\(.*?\)/g, '').split(/[,/;]/)[0].trim().slice(0, 60);
}

async function db() {
  if (!process.env.SUPABASE_URL || !process.env.SUPABASE_SERVICE_ROLE_KEY) return null;
  try {
    const { createClient } = await import('@supabase/supabase-js');
    return createClient(process.env.SUPABASE_URL, process.env.SUPABASE_SERVICE_ROLE_KEY);
  } catch (e) { return null; }
}

/* Unsplash sucht auf Englisch am besten. Das deutsche Wort einmal
   uebersetzen lassen ist billiger als jedes Mal schlecht zu suchen —
   und die Uebersetzung wird mitgespeichert. */
async function insEnglische(woerter) {
  if (!process.env.ANTHROPIC_API_KEY || !woerter.length) return {};
  try {
    const r = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        'x-api-key': process.env.ANTHROPIC_API_KEY,
        'anthropic-version': '2023-06-01',
      },
      body: JSON.stringify({
        model: 'claude-3-5-haiku-latest',
        max_tokens: 500,
        system: 'Du uebersetzt deutsche Woerter in einen kurzen englischen Bildsuchbegriff (1-3 Woerter, konkret und fotografierbar). Antworte NUR mit JSON: {"wort":"search term"}. Keine Erklaerung.',
        messages: [{ role: 'user', content: JSON.stringify(woerter) }],
      }),
    });
    if (!r.ok) return {};
    const j = await r.json();
    const t = (j && j.content && j.content[0] && j.content[0].text) || '';
    const a = t.indexOf('{'), b = t.lastIndexOf('}');
    if (a < 0 || b < a) return {};
    return JSON.parse(t.slice(a, b + 1)) || {};
  } catch (e) { return {}; }
}

async function beiUnsplash(q) {
  const key = process.env.UNSPLASH_ACCESS_KEY;
  if (!key || !q) return null;
  try {
    const r = await fetch(
      'https://api.unsplash.com/search/photos?per_page=1&orientation=squarish&content_filter=high&query=' + encodeURIComponent(q),
      { headers: { Authorization: 'Client-ID ' + key } }
    );
    if (!r.ok) return null;
    const j = await r.json();
    const t = j && j.results && j.results[0];
    if (!t || !t.urls) return null;
    return {
      url: t.urls.small || t.urls.regular || t.urls.thumb,
      autor: (t.user && t.user.name) || '',
      quelle: 'Unsplash',
      lizenz: 'Unsplash',
    };
  } catch (e) { return null; }
}

/* Wikipedia zeigt zu jedem Stichwort genau das Bild, das die Sache
   erklaert: zu "Suppe" einen Teller Suppe, zu "Vorstellungsgespraech"
   zwei Menschen am Tisch. Kein Schluessel noetig, und wenn es zu einem
   Wort kein Bild gibt, kommt eben keins — das ist ehrlicher als
   irgendein Treffer.

   Wichtig ist die Buendelung: die MediaWiki-Schnittstelle beantwortet
   bis zu 50 Stichwoerter in einer Anfrage. Einzeln gefragt kommt nach
   ein paar Dutzend Anfragen "429 Too Many Requests" zurueck — und
   jedes Wort, das dabei ins Leere laeuft, haette sonst fuer immer als
   "kein Bild" im Cache gestanden. */
async function beiWikipediaViele(woerter) {
  const treffer = {};
  if (!woerter.length) return { treffer, gelaufen: false };
  const gross = (w) => w.charAt(0).toUpperCase() + w.slice(1);
  const titel = woerter.map(gross);
  let gelaufen = false;
  for (let i = 0; i < titel.length; i += 40) {
    const teil = titel.slice(i, i + 40);
    try {
      const r = await fetch(
        'https://de.wikipedia.org/w/api.php?action=query&prop=pageimages&piprop=thumbnail'
        + '&pithumbsize=700&redirects=1&format=json&formatversion=2&titles=' + encodeURIComponent(teil.join('|')),
        { headers: { 'User-Agent': 'deutschoderwas/1.0 (Lernbilder; deutschoderwas.de)' } }
      );
      if (!r.ok) continue;                       // 429 o.ae.: nichts merken, spaeter neu
      const j = await r.json();
      const q = (j && j.query) || {};
      /* Wikipedia leitet um und schreibt gross: beide Wege zurueck-
         verfolgen, sonst landet das Bild unter einem anderen Namen. */
      const zurueck = {};
      (q.normalized || []).forEach((n) => { zurueck[n.to] = n.from; });
      (q.redirects || []).forEach((n) => { zurueck[n.to] = n.from; });
      gelaufen = true;
      for (const p of (q.pages || [])) {
        let t = p.title;
        for (let tiefe = 0; tiefe < 4 && zurueck[t]; tiefe++) t = zurueck[t];
        const wort = t.charAt(0).toLowerCase() + t.slice(1);
        const u = p.thumbnail && p.thumbnail.source;
        if (!p.missing && u) treffer[wort] = { url: u, autor: '', quelle: 'Wikipedia', lizenz: 'CC' };
      }
    } catch (e) { /* ein misslungener Block bleibt einfach offen */ }
  }
  return { treffer, gelaufen };
}

/* Openverse sucht im Titel, nicht im Bild. Darum kam zu "Suppe" eine
   Schallplatte und zu "Lebenslauf" ein Gemaelde \u2014 ein falsches Bild
   ist beim Lernen schlimmer als gar keins. Deshalb nur Fotos, und nur
   wenn das gesuchte Wort auch wirklich im Titel steht. */
function titelPasst(titel, q) {
  const t = String(titel || '').toLowerCase();
  const woerter = String(q || '').toLowerCase().split(/\s+/).filter(function (x) { return x.length > 2; });
  if (!woerter.length) return false;
  return woerter.every(function (w) {
    return new RegExp('(^|[^a-z])' + w.replace(/[.*+?^${}()|[\]\\]/g, '\\$&') + '([^a-z]|$)').test(t);
  });
}
async function beiOpenverse(q) {
  if (!q) return null;
  try {
    const r = await fetch(
      'https://api.openverse.org/v1/images/?page_size=4&license_type=all-cc&mature=false&category=photograph&q=' + encodeURIComponent(q),
      { headers: { 'User-Agent': 'deutschoderwas/1.0 (Lernbilder)' } }
    );
    if (!r.ok) return null;
    const j = await r.json();
    const t = (j && j.results || []).filter(function (x) { return titelPasst(x.title, q); })[0];
    if (!t) return null;
    return {
      url: t.thumbnail || t.url,
      autor: t.creator || '',
      quelle: 'Openverse',
      lizenz: (t.license || '').toUpperCase(),
    };
  } catch (e) { return null; }
}

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).json({ ok: false, error: 'nur_post' });

  let liste = [];
  try {
    const body = typeof req.body === 'string' ? JSON.parse(req.body) : (req.body || {});
    liste = Array.isArray(body.woerter) ? body.woerter.slice(0, 24) : [];
  } catch (e) { liste = []; }
  if (!liste.length) return res.status(200).json({ ok: true, bilder: {} });

  /* Jedes Wort nur einmal, egal wie oft es in der Lektion steht */
  const gefragt = new Map();
  for (const e of liste) {
    const wort = typeof e === 'string' ? e : (e && e.wort);
    const k = schluessel(wort);
    if (k && !gefragt.has(k)) gefragt.set(k, { wort: suchwort(wort), en: (e && e.en) || '' });
  }
  const keys = [...gefragt.keys()];
  const bilder = {};
  const sb = await db();

  // 1. Was schon da ist
  const bekannt = new Map();
  if (sb) {
    try {
      const { data } = await sb.from('wort_bilder')
        .select('wort,url,autor,quelle,leer,such_en,geholt_at')
        .in('wort', keys)
        .gte('geholt_at', AB);
      (data || []).forEach((r) => bekannt.set(r.wort, r));
    } catch (e) {}
  }
  const offen = [];
  for (const k of keys) {
    const t = bekannt.get(k);
    if (t && t.url) { bilder[k] = { url: t.url, autor: t.autor || '', quelle: t.quelle || '' }; continue; }
    if (t && t.leer) continue;            // schon gesucht, nichts gefunden — nicht nochmal
    offen.push(k);
  }
  if (!offen.length) {
    res.setHeader('Cache-Control', 'public, max-age=86400, s-maxage=604800');
    return res.status(200).json({ ok: true, bilder });
  }

  // 2. Englische Suchbegriffe besorgen (nur fuer die offenen)
  const ohneEn = offen.filter((k) => !gefragt.get(k).en && !(bekannt.get(k) || {}).such_en);
  const uebersetzt = await insEnglische(ohneEn.map((k) => gefragt.get(k).wort));

  // 3. Wikipedia zuerst, und zwar fuer alle offenen Woerter auf einmal
  const wiki = await beiWikipediaViele(offen.map((k) => gefragt.get(k).wort));

  // 4. Was dann noch fehlt, einzeln suchen
  const neu = [];
  await Promise.all(offen.map(async (k) => {
    const e = gefragt.get(k);
    const en = e.en || (bekannt.get(k) || {}).such_en || uebersetzt[e.wort] || uebersetzt[k] || '';
    const q = en || e.wort;
    let t = await beiUnsplash(q);
    if (!t && en && en !== e.wort) t = await beiUnsplash(e.wort);
    if (!t) t = wiki.treffer[e.wort] || wiki.treffer[String(e.wort).toLowerCase()] || null;
    if (!t) t = await beiOpenverse(q);
    if (t && t.url) {
      bilder[k] = { url: t.url, autor: t.autor, quelle: t.quelle };
      neu.push({ wort: k, url: t.url, autor: t.autor, quelle: t.quelle, lizenz: t.lizenz || '', such_en: en || null, leer: false });
    } else if (wiki.gelaufen) {
      /* Nur merken, dass nichts zu finden war, wenn wirklich gesucht
         wurde. Nach einem abgewiesenen Aufruf bliebe das Wort sonst
         fuer immer ohne Bild, obwohl es eins gaebe. */
      neu.push({ wort: k, url: null, leer: true, such_en: en || null });
    }
  }));

  if (sb && neu.length) {
    try { await sb.from('wort_bilder').upsert(neu, { onConflict: 'wort' }); } catch (e) {}
  }

  res.setHeader('Cache-Control', 'public, max-age=3600, s-maxage=604800');
  return res.status(200).json({ ok: true, bilder });
}
