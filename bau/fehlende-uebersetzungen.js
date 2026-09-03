/* ============================================================
   fehlende-uebersetzungen.js — welche Wörter stehen noch ohne
   Übersetzung da?

   Die Wortkarte zeigt neue Wörter auch in der Sprache des
   Lernenden — aber nur, wenn es die Übersetzung gibt. Beim ersten
   Zählen waren das 157 von 1880 Wörtern, also acht Prozent; alle
   anderen sahen nichts.

   Aufruf:  node bau/fehlende-uebersetzungen.js [A1|A2|B1|B2|C1]
            node bau/fehlende-uebersetzungen.js A1 liste
   ============================================================ */
const path = require('path');
const wurzel = path.join(__dirname, '..');
global.window = {};
require(path.join(wurzel, 'uebungen.js'));
['hoer-neu.js', 'hoeren-a1-neu.js', 'aussprache-neu.js', 'hoeren-b2-neu.js',
 'hoeren-c1-neu.js', 'wortschatz-neu.js', 'grammatik-reihenfolge.js',
 'wortschatz-a1-neu.js', 'grammatik-neu.js', 'grammatik-c1-neu.js',
 'grammatik-b1-mehr.js', 'lesen-schreiben-neu.js', 'wortschatz-plus.js',
 'vielfalt-neu.js'].forEach(f => { try { require(path.join(wurzel, f)); } catch (e) {} });
require(path.join(wurzel, 'woerter-sprachen.js'));

const T = global.window.WORT_SPRACHEN || {};
const NIVEAUS = ['A1', 'A2', 'B1', 'B2', 'C1'];
const nurNiveau = (process.argv[2] || '').toUpperCase();
const alsListe = process.argv[3] === 'liste';

/* Ein Wort kann in mehreren Themen stehen. Für die Übersetzung zählt
   es einmal — aber wir merken uns, wo es zuerst auftaucht, damit die
   Liste in einer sinnvollen Reihenfolge herauskommt. */
const gesehen = {}, proNiveau = {};
(global.window.UEBUNGEN.skills || []).forEach(sk => {
  (sk.themes || []).forEach(t => {
    const n = String(t.level || '?').split(/[–-]/)[0].trim();
    (t.words || []).forEach(w => {
      const de = String(w.de || w).trim();
      if (!de || gesehen[de]) return;
      gesehen[de] = true;
      (proNiveau[n] = proNiveau[n] || []).push({ de: de, info: w.info || '', thema: sk.id + '/' + t.id });
    });
  });
});

if (alsListe && nurNiveau) {
  (proNiveau[nurNiveau] || []).filter(w => !T[w.de])
    .forEach(w => console.log(w.de + '\t' + w.info + '\t' + w.thema));
} else {
  console.log('');
  NIVEAUS.forEach(n => {
    if (nurNiveau && n !== nurNiveau) return;
    const alle = proNiveau[n] || [];
    const fehlt = alle.filter(w => !T[w.de]);
    console.log(n + ': ' + (alle.length - fehlt.length) + ' von ' + alle.length +
      ' übersetzt' + (alle.length ? '  (' + Math.round((alle.length - fehlt.length) / alle.length * 100) + ' %)' : ''));
    if (nurNiveau) {
      const nachThema = {};
      fehlt.forEach(w => (nachThema[w.thema] = nachThema[w.thema] || []).push(w.de));
      Object.keys(nachThema).sort().forEach(k =>
        console.log('  ' + k.padEnd(34) + nachThema[k].length + ' offen'));
    }
  });
  const ge = Object.keys(gesehen).length;
  const ue = Object.keys(gesehen).filter(d => T[d]).length;
  console.log('\nzusammen: ' + ue + ' von ' + ge + ' (' + Math.round(ue / ge * 100) + ' %)');
}
