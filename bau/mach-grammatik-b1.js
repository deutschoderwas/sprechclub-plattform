/* ============================================================
   mach-grammatik-b1.js — baut grammatik-b1-mehr.js

   Grammatik war der flachste Bereich der ganzen Plattform: um die
   220 Aufgaben je Niveau, während im Wortschatz 800 bis 2500 stehen.
   Am dünnsten war B1 — fünfzehn Themen, aber nur 214 Aufgaben, also
   vierzehn je Thema. Zehn der klassischen Themen hatten sogar nur
   zehn Aufgaben; wer zweimal übt, sieht dieselben wieder.

   Die neuen Aufgaben stehen von Hand geschrieben in
   bau/grammatik-b1-mehr.json — je Aufgabe der Satz, die Lösung,
   erlaubte Nebenformen und eine Erklärung in einem Satz.

   Anders als mach-grammatik.js legt diese Datei keine neuen Themen
   an, sondern hängt Aufgaben an die vorhandenen. Deshalb muss
   grammatik-b1-mehr.js in konto.html NACH grammatik-neu.js stehen.

   Aufruf: node bau/mach-grammatik-b1.js
   ============================================================ */
'use strict';
const fs = require('fs'), path = require('path');
const W = path.join(__dirname, '..');
const Q = JSON.parse(fs.readFileSync(path.join(__dirname, 'grammatik-b1-mehr.json'), 'utf8'));

const raus = {};
let zGap = 0, zChoice = 0, zThemen = 0;

Object.keys(Q).forEach(id => {
  const ex = [];
  (Q[id].ex || []).forEach(a => {
    if (a[0] === 'gap') {
      ex.push({ type: 'gap', text: a[1], answer: a[2], alts: a[3] || [], explain: a[4] || '' });
      zGap++;
    } else if (a[0] === 'choice') {
      ex.push({ type: 'choice', q: a[1], options: a[2], answer: a[3], explain: a[4] || '' });
      zChoice++;
    }
  });
  if (ex.length) { raus[id] = ex; zThemen++; }
});

const kopf = `/* ============================================================
   grammatik-b1-mehr.js — mehr Übung auf B1

   Erzeugt von bau/mach-grammatik-b1.js aus
   bau/grammatik-b1-mehr.json. Nicht von Hand ändern.

   Grammatik B1 hatte fünfzehn Themen, aber nur 214 Aufgaben — zehn
   der klassischen Themen kamen auf ganze zehn Stück. Wer zweimal
   übte, bekam dieselben Sätze wieder. Diese Datei hängt an jedes
   dieser Themen so viele Aufgaben an, dass es auf rund zwei Dutzend
   kommt, so viel wie auf A2, B2 und C1 auch.

   Sie legt keine neuen Themen an, sondern ergänzt vorhandene.
   Deshalb muss sie NACH grammatik-neu.js geladen werden.
   ============================================================ */
(function () {
  if (!window.UEBUNGEN || !window.UEBUNGEN.skills) return;
  var g = null, s = window.UEBUNGEN.skills;
  for (var i = 0; i < s.length; i++) { if (s[i].id === 'grammatik') { g = s[i]; break; } }
  if (!g || !g.themes) return;

  var MEHR = `;

const fuss = `;

  /* Ein Schlüssel je Aufgabe, damit ein zweiter Lauf nichts doppelt
     anhängt — und damit eine Aufgabe, die es schon gibt, nicht noch
     einmal auftaucht. */
  function schluessel(e) {
    return (e.type || '') + '|' + String(e.text || e.q || '').replace(/\\s+/g, ' ').trim().toLowerCase();
  }

  var idx = {}, k;
  for (k = 0; k < g.themes.length; k++) idx[g.themes[k].id] = g.themes[k];

  Object.keys(MEHR).forEach(function (id) {
    var t = idx[id];
    if (!t) return;                       // Thema gibt es nicht -> still übergehen
    if (!t.exercises) t.exercises = [];
    var da = {};
    t.exercises.forEach(function (e) { da[schluessel(e)] = 1; });
    MEHR[id].forEach(function (e) {
      var s2 = schluessel(e);
      if (da[s2]) return;
      da[s2] = 1;
      t.exercises.push(e);
    });
  });
})();
`;

fs.writeFileSync(path.join(W, 'grammatik-b1-mehr.js'),
  kopf + JSON.stringify(raus, null, 1) + fuss, 'utf8');

console.log('grammatik-b1-mehr.js geschrieben');
console.log('  Themen ergänzt: ' + zThemen);
console.log('  Lückensätze:    ' + zGap);
console.log('  Auswahlfragen:  ' + zChoice);
console.log('  zusammen:       ' + (zGap + zChoice));
