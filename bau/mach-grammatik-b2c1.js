/* ============================================================
   mach-grammatik-b2c1.js — baut grammatik-b2c1-mehr.js

   Grammatik ist der flachste Bereich der Plattform. Auf B1 ist das
   schon nachgeholt worden (grammatik-b1-mehr.js). B2 und C1 standen
   danach bei 225 und 212 Aufgaben — je Thema also zwischen 10 und 26.
   Am dünnsten waren indirekte-rede mit 10 und nominalisierung mit 14.
   Gerade dort bereiten sich Lernende auf Goethe und telc vor.

   Die neuen Aufgaben stehen von Hand geschrieben in
     bau/grammatik-b2-mehr.json
     bau/grammatik-c1-mehr.json

   Diese Datei legt keine neuen Themen an, sondern hängt Aufgaben an
   vorhandene. Deshalb muss grammatik-b2c1-mehr.js in konto.html NACH
   grammatik-neu.js und grammatik-c1-neu.js stehen.

   Anders als mach-grammatik-b1.js prüft dieses Skript beim Bauen, ob
   es jedes Zielthema wirklich gibt. Im Browser wird ein unbekanntes
   Thema still übergangen — die Aufgaben fehlen dann einfach, ohne
   dass irgendwo etwas zu sehen wäre. Genau so ist beim Wortschatz
   ein ganzer Nachtrag ins Leere gelaufen.

   Aufruf: node bau/mach-grammatik-b2c1.js
   ============================================================ */
'use strict';
const fs = require('fs'), path = require('path');
const W = path.join(__dirname, '..');

/* ---------- Welche Themen gibt es? ---------- */
global.window = {};
require(path.join(W, 'uebungen.js'));
['grammatik-neu.js', 'grammatik-c1-neu.js', 'grammatik-b1-mehr.js']
  .forEach(f => { try { require(path.join(W, f)); } catch (e) {} });

const gram = ((global.window.UEBUNGEN || {}).skills || [])
  .filter(s => s.id === 'grammatik')[0];
if (!gram) { console.error('Den Bereich Grammatik gibt es nicht.'); process.exit(1); }
const daTheme = {};
(gram.themes || []).forEach(t => { daTheme[t.id] = t; });

/* ---------- Bausteine lesen ---------- */
const QUELLEN = ['grammatik-b2-mehr.json', 'grammatik-c1-mehr.json'];
const roh = {};
QUELLEN.forEach(f => {
  const p = path.join(__dirname, f);
  if (!fs.existsSync(p)) { console.error('Baustein fehlt: bau/' + f); process.exit(1); }
  const j = JSON.parse(fs.readFileSync(p, 'utf8'));
  Object.keys(j).forEach(id => {
    if (id.charAt(0) === '_') return;          // _hinweis und Ähnliches
    if (roh[id]) { console.error('Thema doppelt in den Bausteinen: ' + id); process.exit(1); }
    roh[id] = j[id];
  });
});

/* ---------- Prüfen ---------- */
const klagen = [];
Object.keys(roh).forEach(id => {
  if (!daTheme[id]) {
    klagen.push('Zielthema "' + id + '" gibt es nicht — die Aufgaben würden im Browser still verschwinden');
    return;
  }
  (roh[id].ex || []).forEach((a, i) => {
    const wo = id + ' Nr. ' + (i + 1) + ': ';
    if (a[0] === 'gap') {
      const n = (String(a[1]).match(/_{3,}/g) || []).length;
      if (n !== 1) klagen.push(wo + 'genau eine Lücke erwartet, gefunden: ' + n);
      if (!a[2]) klagen.push(wo + 'Lückensatz ohne Lösung');
    } else if (a[0] === 'choice') {
      const opt = a[2] || [];
      if (opt.length < 3) klagen.push(wo + 'zu wenige Antwortmöglichkeiten');
      if (new Set(opt).size !== opt.length) klagen.push(wo + 'doppelte Antwortmöglichkeit');
      if (typeof a[3] !== 'number' || !opt[a[3]]) klagen.push(wo + 'die richtige Antwort zeigt ins Leere');
    } else if (a[0] === 'order') {
      if (String(a[1]).split(/\s+/).length < 4) klagen.push(wo + 'Satzbau-Aufgabe mit weniger als vier Wörtern');
      if (/[.!?]$/.test(String(a[1]))) klagen.push(wo + 'Satzbau-Aufgabe endet mit Satzzeichen — die Karten werden sonst mitgemischt');
    } else {
      klagen.push(wo + 'unbekannte Art "' + a[0] + '" (bekannt sind gap, choice, order)');
    }
  });
});

if (klagen.length) {
  console.error('\nSo geht das nicht:');
  klagen.forEach(k => console.error('  ' + k));
  console.error('');
  process.exit(1);
}

/* ---------- Bauen ---------- */
const raus = {};
let zGap = 0, zChoice = 0, zOrder = 0, zThemen = 0;

Object.keys(roh).forEach(id => {
  const ex = [];
  (roh[id].ex || []).forEach(a => {
    if (a[0] === 'gap') {
      ex.push({ type: 'gap', text: a[1], answer: a[2], alts: a[3] || [], explain: a[4] || '' });
      zGap++;
    } else if (a[0] === 'choice') {
      ex.push({ type: 'choice', q: a[1], options: a[2], answer: a[3], explain: a[4] || '' });
      zChoice++;
    } else if (a[0] === 'order') {
      ex.push({ type: 'order', answer: a[1], hint: a[2] || '', explain: a[3] || '' });
      zOrder++;
    }
  });
  if (ex.length) { raus[id] = ex; zThemen++; }
});

const kopf = `/* ============================================================
   grammatik-b2c1-mehr.js — mehr Übung auf B2 und C1

   Erzeugt von bau/mach-grammatik-b2c1.js aus
   bau/grammatik-b2-mehr.json und bau/grammatik-c1-mehr.json.
   Nicht von Hand ändern.

   Grammatik B2 kam auf 225 Aufgaben in elf Themen, C1 auf 212 in
   zehn — je Thema also zwischen zehn und sechsundzwanzig. Wer
   zweimal übte, bekam dieselben Sätze wieder, und das ausgerechnet
   auf den Stufen, auf denen für Goethe und telc geübt wird.

   Diese Datei legt keine neuen Themen an, sondern ergänzt vorhandene.
   Deshalb muss sie NACH grammatik-neu.js und grammatik-c1-neu.js
   geladen werden.
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
    return (e.type || '') + '|' +
      String(e.text || e.q || e.answer || '').replace(/\\s+/g, ' ').trim().toLowerCase();
  }

  var idx = {}, k;
  for (k = 0; k < g.themes.length; k++) idx[g.themes[k].id] = g.themes[k];

  Object.keys(MEHR).forEach(function (id) {
    var t = idx[id];
    if (!t) return;                       // beim Bauen geprüft, hier nur zur Sicherheit
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

fs.writeFileSync(path.join(W, 'grammatik-b2c1-mehr.js'),
  kopf + JSON.stringify(raus, null, 1) + fuss, 'utf8');

console.log('grammatik-b2c1-mehr.js geschrieben');
console.log('  Themen ergänzt: ' + zThemen);
console.log('  Lückensätze:    ' + zGap);
console.log('  Auswahlfragen:  ' + zChoice);
console.log('  Satzbau:        ' + zOrder);
console.log('  zusammen:       ' + (zGap + zChoice + zOrder));
