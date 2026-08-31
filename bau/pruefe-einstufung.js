/* ============================================================
   pruefe-einstufung.js — trägt ein Thema sein Etikett zu Recht?

   Ein Thema kann C1 heissen und einen Wortschatz haben, den man
   auf B1 schon kannte. Das faellt niemandem auf, weil das Etikett
   im Titel steht und nicht in den Woertern.

   Gemessen wird eine einzige Sache, dafuer eine belastbare: Wie
   viele Woerter eines Themas stehen anderswo schon auf einer
   tieferen Stufe? Wer auf C1 zum dritten Mal „die Ueberweisung"
   lernt, lernt dort nichts Neues.

   Zuerst stand hier auch ein Mass fuer die Schwere der Woerter
   selbst — Laenge plus Zuschlag fuer Zusammensetzungen. Das ist
   im Deutschen unbrauchbar: „Kartoffelsalat" ist lang und gehoert
   auf A2, „Evidenz" ist kurz und gehoert auf C1. Gemeldet hat es
   vor allem die guten Themen. Wieder raus.

   Ein hoher Wert heisst nicht automatisch, dass die Einstufung
   falsch ist. Ein Alltagsthema darf auf hoeherem Niveau wieder
   vorkommen, wenn es dort um Feinheiten geht — dann sollten aber
   auch neue Woerter dabei sein. Genau das zeigt die Zeile
   „wirklich neu hier".

   Aufruf: node bau/pruefe-einstufung.js
   ============================================================ */
const path = require('path');
const wurzel = path.join(__dirname, '..');
global.window = {};
require(path.join(wurzel, 'uebungen.js'));
['hoer-neu.js', 'hoeren-a1-neu.js', 'aussprache-neu.js', 'hoeren-b2-neu.js',
 'hoeren-c1-neu.js', 'wortschatz-neu.js', 'wortschatz-a1-neu.js',
 'grammatik-neu.js', 'grammatik-c1-neu.js', 'lesen-schreiben-neu.js',
 'wortschatz-plus.js'].forEach(f => { try { require(path.join(wurzel, f)); } catch (e) {} });

const NIVEAUS = ['A1', 'A2', 'B1', 'B2', 'C1'];
const stufe = t => NIVEAUS.indexOf(String(t.level || '').split(/[–-]/)[0].trim());
const rein = w => String(w.de || w).replace(/^(der|die|das)\s+/i, '').trim();

/* Wo kommt jedes Wort ueberall vor? */
const vorkommen = {};
const alleThemen = [];
(global.window.UEBUNGEN.skills || []).forEach(sk => {
  (sk.themes || []).forEach(t => {
    if (!(t.words || []).length) return;
    alleThemen.push({ sk: sk.id, t: t, s: stufe(t) });
    (t.words || []).forEach(w => {
      const k = rein(w).toLowerCase();
      (vorkommen[k] = vorkommen[k] || []).push({ s: stufe(t), bereich: sk.id, thema: t.id });
    });
  });
});

const auffaellig = [];
alleThemen.forEach(x => {
  const woerter = x.t.words || [];
  if (woerter.length < 5 || x.s < 1) return;
  const alt = [], neu = [];
  woerter.forEach(w => {
    const k = rein(w).toLowerCase();
    const tiefer = (vorkommen[k] || []).filter(o => o.s >= 0 && o.s < x.s);
    if (tiefer.length) alt.push(rein(w) + ' (' + NIVEAUS[Math.min(...tiefer.map(o => o.s))] + ')');
    else neu.push(rein(w));
  });
  const anteil = Math.round(alt.length / woerter.length * 100);
  if (anteil >= 50) {
    auffaellig.push({ bereich: x.sk, thema: x.t.id, titel: x.t.title,
      niveau: NIVEAUS[x.s], anteil, alt, neu, von: woerter.length });
  }
});

console.log('\nThemen, in denen die Haelfte oder mehr schon tiefer vorkam:');
if (!auffaellig.length) console.log('  keine');
else {
  auffaellig.sort((a, b) => b.anteil - a.anteil);
  auffaellig.forEach(a => {
    console.log('\n  ' + a.niveau + '  ' + a.bereich + '/' + a.thema + '  —  ' + a.titel);
    console.log('     ' + a.alt.length + ' von ' + a.von + ' schon tiefer (' + a.anteil + ' %)');
    console.log('     wirklich neu hier: ' + (a.neu.length ? a.neu.join(', ') : 'nichts'));
  });
  console.log('\n  (' + auffaellig.length + ' Themen)');
}
console.log();
