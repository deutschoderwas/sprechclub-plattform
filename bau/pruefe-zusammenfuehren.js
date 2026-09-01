/* Prüft, ob die Zusammenführung wirklich Themen vereint und nichts verliert. */
global.window = {};
require('../uebungen.js');
['hoer-neu.js','hoeren-a1-neu.js','aussprache-neu.js','hoeren-b2-neu.js',
 'hoeren-c1-neu.js','wortschatz-neu.js','grammatik-reihenfolge.js',
 'wortschatz-a1-neu.js','grammatik-neu.js','grammatik-c1-neu.js',
 'lesen-schreiben-neu.js'].forEach(f => { try { require('../' + f); } catch (e) { console.log('fehlt: '+f); } });

const U = global.window.UEBUNGEN;
function zähle() {
  let th = 0, auf = 0;
  U.skills.forEach(sk => (sk.themes||[]).forEach(t => { th++; auf += (t.exercises||[]).length; }));
  return { th, auf };
}
const vorher = zähle();
const ids = {};
let doppelt = 0;
U.skills.forEach(sk => (sk.themes||[]).forEach(t => {
  const k = sk.id + '|' + t.id;
  if (ids[k]) doppelt++; else ids[k] = 1;
}));

require('../themen-zusammenfuehren.js');
const nachher = zähle();
const ids2 = {};
let doppelt2 = 0;
U.skills.forEach(sk => (sk.themes||[]).forEach(t => {
  const k = sk.id + '|' + t.id;
  if (ids2[k]) doppelt2++; else ids2[k] = 1;
}));

console.log('Themen   vorher ' + vorher.th + '  nachher ' + nachher.th);
console.log('Aufgaben vorher ' + vorher.auf + '  nachher ' + nachher.auf);
console.log('Doppelte vorher ' + doppelt + '  nachher ' + doppelt2);
console.log('\nZusammengeführt:');
(global.window.THEMEN_ZUSAMMENGEFUEHRT||[]).forEach(b =>
  console.log('  ' + b.bereich.padEnd(12) + b.thema.padEnd(26) +
    b.vorher + ' + ' + b.dazu + ' = ' + b.jetzt + '  (Wörter +' + b.wörterDazu + ')'));
