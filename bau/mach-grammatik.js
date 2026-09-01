/* ============================================================
   mach-grammatik.js — baut grammatik-neu.js

   Der Grammatikteil hatte vier A1-Themen und dreizehn auf B1/B2 —
   dazwischen, genau auf A2, wo die meisten Lernenden stehen, war
   nichts. Es fehlten die Bausteine, ohne die man keinen Satz baut:
   Modalverben, trennbare Verben, Perfekt, Dativ, Possessivartikel,
   Negation, Imperativ, Vergleiche, reflexive Verben, weil/dass/wenn,
   Praepositionen mit Dativ und die Vergangenheit zum Sprechen.

   Die Aufgaben stehen von Hand geschrieben in
   bau/grammatik-quelle.json — je Aufgabe der Satz, die Lösung,
   erlaubte Alternativen und eine Erklärung in einem Satz.

   Aufruf: node bau/mach-grammatik.js
   ============================================================ */
'use strict';
const fs = require('fs'), path = require('path');
const W = path.join(__dirname, '..');
const Q = JSON.parse(fs.readFileSync(path.join(__dirname, 'grammatik-quelle.json'), 'utf8'));

const themen = [];
let zGap = 0, zChoice = 0;

Object.keys(Q).forEach(id => {
  const q = Q[id];
  const ex = [];
  (q.ex || []).forEach(a => {
    if (a[0] === 'gap') {
      ex.push({ type: 'gap', text: a[1], answer: a[2], alts: a[3] || [], explain: a[4] || '' });
      zGap++;
    } else if (a[0] === 'choice') {
      ex.push({ type: 'choice', q: a[1], options: a[2], answer: a[3], explain: a[4] || '' });
      zChoice++;
    }
  });
  themen.push({ id: id, title: q.title, level: q.level, emoji: q.emoji, words: [], exercises: ex });
});

const kopf = `/* ============================================================
   grammatik-neu.js — die Bausteine von A1 bis C1

   Erst fehlte A2: vier Themen auf A1, dreizehn auf B1/B2 und
   dazwischen nichts, genau dort, wo die meisten stehen.
   Dann fehlte das obere Ende: auf B2 zwei Themen, auf C1 keins —
   wer die Prüfung machen will, fand nichts zum Üben.

   Neu auf B2: Passiv, Konjunktiv II der Vergangenheit, Genitiv,
   obwohl/trotzdem, Verben mit fester Präposition,
   Adjektivendungen.
   Neu auf C1: indirekte Rede mit Konjunktiv I, Partizip als
   Attribut, Nominalstil, Passiv-Ersatzformen, zweiteilige
   Konnektoren, Modalverben in ihrer subjektiven Bedeutung.

   Zwoelf neue Themen: Modalverben, trennbare Verben, Perfekt mit
   haben und sein, Dativ, Possessivartikel, Negation, Imperativ,
   Vergleiche, reflexive Verben, weil/dass/wenn, Praepositionen mit
   Dativ und die Vergangenheit zum Sprechen (war, hatte, konnte).

   Je Aufgabe steht eine Erklärung in einem Satz dabei — nicht die
   Regel aus dem Buch, sondern der Grund, warum es hier so ist.

   Wird NACH uebungen.js geladen und hängt seine Themen an den
   Bereich "Grammatik" an. uebungen.js bleibt unangetastet.

   Erzeugt von bau/mach-grammatik.js aus bau/grammatik-quelle.json.
   ============================================================ */
(function () {
  var U = window.UEBUNGEN;
  if (!U || !U.skills) return;
  var g = null;
  for (var i = 0; i < U.skills.length; i++) { if (U.skills[i].id === 'grammatik') { g = U.skills[i]; break; } }
  if (!g) return;
  if (!g.themes) g.themes = [];

  var NEU = `;

const fuss = `;

  var da = {};
  g.themes.forEach(function (t) { da[t.id] = 1; });
  NEU.forEach(function (t) { if (!da[t.id]) g.themes.push(t); });
})();
`;

fs.writeFileSync(path.join(W, 'grammatik-neu.js'), kopf + JSON.stringify(themen, null, 1) + fuss, 'utf8');
console.log(themen.length + ' Themen, ' + (zGap + zChoice) + ' Aufgaben (' + zGap + ' Lücken, ' + zChoice + ' Auswahl)');
