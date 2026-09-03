/* ============================================================
   pruefe-einstufung.js — trägt ein Thema sein Etikett zu Recht?

   Ein Thema kann C1 heißen und einen Wortschatz haben, den man
   auf B1 schon kannte. Das fällt niemandem auf, weil das Etikett
   im Titel steht und nicht in den Wörtern.

   Gemessen wird eine einzige Sache, dafür eine belastbare: Wie
   viele Wörter eines Themas stehen anderswo schon auf einer
   tieferen Stufe? Wer auf C1 zum dritten Mal „die Überweisung"
   lernt, lernt dort nichts Neues.

   Zuerst stand hier auch ein Mass für die Schwere der Wörter
   selbst — Länge plus Zuschlag für Zusammensetzungen. Das ist
   im Deutschen unbrauchbar: „Kartoffelsalat" ist lang und gehört
   auf A2, „Evidenz" ist kurz und gehört auf C1. Gemeldet hat es
   vor allem die guten Themen. Wieder raus.

   Ein hoher Wert heißt nicht automatisch, dass die Einstufung
   falsch ist. Ein Alltagsthema darf auf höherem Niveau wieder
   vorkommen, wenn es dort um Feinheiten geht — dann sollten aber
   auch neue Wörter dabei sein. Genau das zeigt die Zeile
   „wirklich neu hier".

   Aufruf: node bau/pruefe-einstufung.js
   ============================================================ */
const path = require('path');
const wurzel = path.join(__dirname, '..');
global.window = {};
require(path.join(wurzel, 'uebungen.js'));
['hoer-neu.js', 'hoeren-a1-neu.js', 'aussprache-neu.js', 'hoeren-b2-neu.js',
 'hoeren-c1-neu.js', 'wortschatz-neu.js', 'wortschatz-a1-neu.js',
 'grammatik-neu.js', 'grammatik-c1-neu.js', 'grammatik-b1-mehr.js', 'lesen-schreiben-neu.js',
 'wortschatz-plus.js'].forEach(f => { try { require(path.join(wurzel, f)); } catch (e) {} });

const NIVEAUS = ['A1', 'A2', 'B1', 'B2', 'C1'];
const stufe = t => NIVEAUS.indexOf(String(t.level || '').split(/[–-]/)[0].trim());
const rein = w => String(w.de || w).replace(/^(der|die|das)\s+/i, '').trim();

/* Wo kommt jedes Wort überall vor? */
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

const auffällig = [];
alleThemen.forEach(x => {
  const wörter = x.t.words || [];
  if (wörter.length < 5 || x.s < 1) return;
  const alt = [], neu = [];
  wörter.forEach(w => {
    const k = rein(w).toLowerCase();
    const tiefer = (vorkommen[k] || []).filter(o => o.s >= 0 && o.s < x.s);
    if (tiefer.length) alt.push(rein(w) + ' (' + NIVEAUS[Math.min(...tiefer.map(o => o.s))] + ')');
    else neu.push(rein(w));
  });
  const anteil = Math.round(alt.length / wörter.length * 100);
  if (anteil >= 50) {
    auffällig.push({ bereich: x.sk, thema: x.t.id, titel: x.t.title,
      niveau: NIVEAUS[x.s], anteil, alt, neu, von: wörter.length });
  }
});

console.log('\nThemen, in denen die Haelfte oder mehr schon tiefer vorkam:');
if (!auffällig.length) console.log('  keine');
else {
  auffällig.sort((a, b) => b.anteil - a.anteil);
  auffällig.forEach(a => {
    console.log('\n  ' + a.niveau + '  ' + a.bereich + '/' + a.thema + '  —  ' + a.titel);
    console.log('     ' + a.alt.length + ' von ' + a.von + ' schon tiefer (' + a.anteil + ' %)');
    console.log('     wirklich neu hier: ' + (a.neu.length ? a.neu.join(', ') : 'nichts'));
  });
  console.log('\n  (' + auffällig.length + ' Themen)');
}
console.log();
