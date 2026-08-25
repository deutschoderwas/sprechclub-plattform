/* Baut woerter-sprachen.js aus allen quellen/woerter-*.json
   Aufruf:  node baue-woerter.mjs                                */
import fs from 'node:fs';

const SPRACHEN = ['en', 'es', 'ru', 'uk', 'tr', 'it', 'fa', 'ar', 'pl', 'ro'];
const dateien = fs.readdirSync('quellen').filter(function (d) {
  return /^woerter-.*\.json$/.test(d);
}).sort();

const alle = {};
let doppelt = 0;
for (const d of dateien) {
  const q = JSON.parse(fs.readFileSync('quellen/' + d, 'utf8'));
  for (const [wort, uebs] of Object.entries(q.woerter || {})) {
    if (alle[wort]) { doppelt++; continue; }
    const fehlt = SPRACHEN.filter(function (s) { return !uebs[s] || !uebs[s].w; });
    if (fehlt.length) console.log('  ! ' + wort + ' — fehlt: ' + fehlt.join(', ') + '  (' + d + ')');
    alle[wort] = uebs;
  }
}

const zeilen = Object.entries(alle).map(function (e) {
  const inner = SPRACHEN.filter(function (s) { return e[1][s]; }).map(function (s) {
    const v = e[1][s];
    return JSON.stringify(s) + ': ' + JSON.stringify(v.i ? { w: v.w, i: v.i } : { w: v.w });
  }).join(',');
  return JSON.stringify(e[0]) + ': {' + inner + '}';
}).join(',');

const kopf = `/* ============================================================
   Wort-Übersetzungen — erzeugt aus quellen/woerter-*.json
   Nicht von Hand ändern: node baue-woerter.mjs
   Struktur:  "der Bescheid": { "ru": { "w": "решение", "i": "…" } }
   w = das Wort in der Muttersprache
   i = kurze Erklärung, nur wo das Wort allein nicht reicht
   ============================================================ */
`;
const fuss = `

/* Übersetzung eines Wortes holen. Ohne Treffer: leer. */
window.wortUebersetzung = function (de, sprache) {
  var e = window.WORT_SPRACHEN[de];
  if (!e || !sprache) return null;
  return e[sprache] || null;
};
`;
fs.writeFileSync('woerter-sprachen.js', kopf + 'window.WORT_SPRACHEN = {' + zeilen + '};' + fuss);
console.log(dateien.length + ' Quellen, ' + Object.keys(alle).length + ' Wörter, '
  + (Object.keys(alle).length * SPRACHEN.length) + ' Übersetzungen'
  + (doppelt ? ', ' + doppelt + ' Doppelte übersprungen' : ''));
