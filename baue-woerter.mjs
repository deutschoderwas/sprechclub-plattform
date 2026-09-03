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

/* ------------------------------------------------------------
   Von dem, was Leute eintragen, zu dem, was wir speichern.

   native_language war jahrelang ein freies Textfeld. Darin steht
   jetzt „Russisch", „Русский", „Türkish", „Polnish", sogar
   „Rusisch und Ukrainisch" — und nichts davon passt auf einen
   Sprachcode. Die Folge: Wer die Frage beantwortet hat, bekam
   GAR KEINE Übersetzung, während die mit leerem Feld wenigstens
   Englisch sahen. Diese Tabelle räumt das auf.
   ------------------------------------------------------------ */
window.SPRACH_NAMEN = { en:'English', es:'Español', ru:'Русский', uk:'Українська',
  tr:'Türkçe', it:'Italiano', fa:'فارسی', ar:'العربية', pl:'Polski', ro:'Română' };

var SPRACH_WORTE = {
  en: ['en','englisch','english','inglese','inglés','ingles','anglisch'],
  es: ['es','spanisch','spanish','español','espanol','spagnolo'],
  ru: ['ru','russisch','russian','русский','russki','russkij','rusisch','russich','ruso'],
  uk: ['uk','ua','ukrainisch','ukrainian','українська','ukrainskij','ukrainska','ukrainish'],
  tr: ['tr','türkisch','tuerkisch','turkisch','turkish','türkish','türkçe','turkce'],
  it: ['it','italienisch','italian','italiano'],
  fa: ['fa','persisch','persian','farsi','فارسی','dari','iranisch'],
  ar: ['ar','arabisch','arabic','العربية','arabi','arabische'],
  pl: ['pl','polnisch','polish','polnish','polski','polnische'],
  ro: ['ro','rumänisch','rumaenisch','rumanisch','romanian','română','romana','moldawisch']
};

/* Aus einem freien Text den Code holen. Steht mehr als eine Sprache
   drin („Rusisch und Ukrainisch"), zählt die erste, die wir kennen.

   Wichtig ist die Reihenfolge: erst der genaue Treffer Wort für Wort,
   dann erst der Wortanfang — und der nur ab vier Zeichen. Sonst macht
   das Kürzel „ru" aus „Rumänisch" Russisch. */
window.sprachCode = function (text) {
  var t = String(text == null ? '' : text).toLowerCase().trim();
  if (!t) return null;
  /* An Satzzeichen trennen, nicht an Buchstaben — sonst zerfällt
     „Español" am ñ in zwei Teile und wird nicht erkannt. */
  var stuecke = t.split(/[\\s,;:.\\/\\\\|&+()\\[\\]"'-]+/).filter(Boolean);
  var s, k, i, w;
  for (s = 0; s < stuecke.length; s++) {
    for (k in SPRACH_WORTE) {
      if (SPRACH_WORTE[k].indexOf(stuecke[s]) >= 0) return k;
    }
  }
  for (s = 0; s < stuecke.length; s++) {
    for (k in SPRACH_WORTE) {
      for (i = 0; i < SPRACH_WORTE[k].length; i++) {
        w = SPRACH_WORTE[k][i];
        if (w.length >= 4 && stuecke[s].indexOf(w) === 0) return k;
      }
    }
  }
  return null;
};

/* Übersetzung eines Wortes holen. Ohne Treffer: leer.
   Als Sprache wird ein Code erwartet — es darf aber auch das rein,
   was jemand ins Profil geschrieben hat. */
window.wortUebersetzung = function (de, sprache) {
  var e = window.WORT_SPRACHEN[de];
  if (!e || !sprache) return null;
  var k = e[sprache] ? sprache : window.sprachCode(sprache);
  return (k && e[k]) || null;
};
`;
fs.writeFileSync('woerter-sprachen.js', kopf + 'window.WORT_SPRACHEN = {' + zeilen + '};' + fuss);
console.log(dateien.length + ' Quellen, ' + Object.keys(alle).length + ' Wörter, '
  + (Object.keys(alle).length * SPRACHEN.length) + ' Übersetzungen'
  + (doppelt ? ', ' + doppelt + ' Doppelte übersprungen' : ''));
