/* ============================================================
   bestand.js — was steht auf welchem Niveau?

   Zeigt für jeden Bereich und jedes Niveau, wie viele Themen und
   Aufgaben es gibt. Damit sieht man auf einen Blick, wo eine Lücke
   klafft — etwa B2-Wortschatz gegen B1-Wortschatz.

   Aufruf: node bau/bestand.js
   ============================================================ */
const path = require('path');
const wurzel = path.join(__dirname, '..');
global.window = {};
require(path.join(wurzel, 'uebungen.js'));

/* Alle additiven Datendateien, in derselben Reihenfolge wie in konto.html.
   vielfalt-neu.js steht bewusst am Schluss: es hängt sich an das an,
   was die anderen angelegt haben. */
const DATEIEN = ['hoer-neu.js', 'hoeren-a1-neu.js', 'aussprache-neu.js',
  'hoeren-b2-neu.js', 'hoeren-c1-neu.js', 'wortschatz-neu.js',
  'grammatik-reihenfolge.js', 'wortschatz-a1-neu.js', 'grammatik-neu.js',
  'grammatik-c1-neu.js', 'lesen-schreiben-neu.js', 'wortschatz-plus.js',
  'vielfalt-neu.js'];
DATEIEN.forEach(f => {
  try { require(path.join(wurzel, f)); }
  catch (e) { console.log('  (fehlt: ' + f + ')'); }
});

const NIVEAUS = ['A1', 'A2', 'B1', 'B2', 'C1'];
const zelle = {}, bereiche = [];

(global.window.UEBUNGEN.skills || []).forEach(sk => {
  if (bereiche.indexOf(sk.id) < 0) bereiche.push(sk.id);
  (sk.themes || []).forEach(t => {
    const n = String(t.level || '?').split(/[–-]/)[0].trim();
    const k = n + '|' + sk.id;
    zelle[k] = zelle[k] || { th: 0, auf: 0 };
    zelle[k].th++;
    zelle[k].auf += (t.exercises || []).length;
  });
});

function spalte(n) {
  let th = 0, auf = 0;
  bereiche.forEach(b => { const x = zelle[n + '|' + b]; if (x) { th += x.th; auf += x.auf; } });
  return { th, auf };
}

console.log('\n' + 'Bereich'.padEnd(17) + NIVEAUS.map(n => n.padStart(13)).join(''));
bereiche.forEach(b => {
  console.log(b.padEnd(17) + NIVEAUS.map(n => {
    const x = zelle[n + '|' + b];
    return (x ? x.th + ' Th / ' + x.auf : '—').padStart(13);
  }).join(''));
});
console.log('-'.repeat(17 + 13 * NIVEAUS.length));
console.log('zusammen'.padEnd(17) + NIVEAUS.map(n => {
  const s = spalte(n);
  return (s.th + ' Th / ' + s.auf).padStart(13);
}).join(''));

/* Wo klafft es? Der Vergleich, der wirklich zählt, ist der zum
   stärksten Niveau desselben Bereichs. */
console.log('\nDünn besetzt (weniger als ein Drittel des stärksten Niveaus im selben Bereich):');
let leer = true;
bereiche.forEach(b => {
  const werte = NIVEAUS.map(n => (zelle[n + '|' + b] || { auf: 0 }).auf);
  const höchst = Math.max(...werte);
  if (höchst < 60) return;
  NIVEAUS.forEach((n, i) => {
    if (werte[i] > 0 && werte[i] < höchst / 3) {
      leer = false;
      console.log('  ' + (b + ' ' + n).padEnd(24) + werte[i] + ' Aufgaben gegen ' + höchst +
        ' bei ' + NIVEAUS[werte.indexOf(höchst)]);
    }
    if (werte[i] === 0) {
      leer = false;
      console.log('  ' + (b + ' ' + n).padEnd(24) + 'gar nichts');
    }
  });
});
if (leer) console.log('  nichts — die Niveaus sind halbwegs gleich ausgestattet');
console.log();
