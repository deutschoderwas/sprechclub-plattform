/* ============================================================
   mach-wortschatz.js — baut wortschatz-neu.js

   Acht Bereiche im Lernbereich hatten ueberhaupt keinen
   Wortschatz: Polizei, Bau, Elektro/SHK, Metall, Reinigung,
   Lager, Produktion, Ingenieurwesen. Die Woerter selbst stehen
   von Hand geschrieben in bau/wortschatz-quelle.json — je Wort
   Bedeutung, Zeichen und ein echter Satz aus dem Alltag.

   Die Aufgaben entstehen hier daraus:
     Auswahl   aus der Bedeutung
     Luecke    aus dem Beispielsatz, das Wort wird herausgenommen
     Zuordnen  Wort und Bedeutung in Vierergruppen

   Ergebnis ist wortschatz-neu.js. Die Datei wird nach uebungen.js
   geladen und haengt ihre Themen an — uebungen.js bleibt
   unangetastet.

   Aufruf: node bau/mach-wortschatz.js
   ============================================================ */
'use strict';
const fs = require('fs'), path = require('path');
const W = path.join(__dirname, '..');
const QUELLE = JSON.parse(fs.readFileSync(path.join(__dirname, 'wortschatz-quelle.json'), 'utf8'));

const ohneArtikel = s => String(s).replace(/^(der|die|das)\s+/, '');
function mischen(a, keim) {
  a = a.slice(); let z = keim || 5;
  for (let i = a.length - 1; i > 0; i--) { z = (z * 1103515245 + 12345) % 2147483648; const j = z % (i + 1); [a[i], a[j]] = [a[j], a[i]]; }
  return a;
}

const themen = [];
let zChoice = 0, zGap = 0, zMatch = 0;

Object.keys(QUELLE).forEach((feld, fi) => {
  const q = QUELLE[feld];
  const words = q.words.map(w => ({ de: w[0], info: w[1], emoji: w[2], bsp: w[3] }));
  const ex = [];

  /* Auswahl: die Bedeutung wird gezeigt, das Wort gesucht. */
  words.forEach((w, i) => {
    const andere = mischen(words.filter(x => x.de !== w.de).map(x => x.de), i + fi + 1).slice(0, 3);
    if (andere.length < 3) return;
    const opts = mischen([w.de].concat(andere), i + 17);
    ex.push({ type: 'choice', q: 'Welches Wort passt: „' + w.info + '“?', options: opts, answer: opts.indexOf(w.de), explain: w.de + ' — ' + w.info + '.' });
    zChoice++;
  });

  /* Luecke: das Wort faellt aus seinem eigenen Beispielsatz heraus.
     Nur, wenn es dort auch wirklich unveraendert steht. */
  words.forEach((w, i) => {
    const kern = ohneArtikel(w.de);
    if (w.bsp.indexOf(kern) < 0) return;
    const andere = mischen(words.filter(x => x.de !== w.de).map(x => ohneArtikel(x.de)), i + fi + 40).slice(0, 2);
    if (andere.length < 2) return;
    ex.push({ type: 'gap', text: w.bsp.replace(kern, '___'), answer: kern, options: [kern].concat(andere), hint: w.info });
    zGap++;
  });

  /* Zuordnen: immer vier Paare, damit es am Handy passt. */
  for (let i = 0; i + 4 <= words.length; i += 4) {
    ex.push({ type: 'match', intro: 'Ordne Wort und Bedeutung zu:', pairs: words.slice(i, i + 4).map(w => ({ l: w.de, r: w.info })) });
    zMatch++;
  }

  themen.push({ id: feld + '-neu', title: q.title, level: q.level, emoji: q.emoji, words: words, exercises: ex });
});

const kopf = `/* ============================================================
   wortschatz-neu.js — Wortschatz fuer acht Bereiche, die keinen hatten

   Polizei, Bau, Elektro/SHK, Metall, Reinigung, Lager,
   Produktion und Technik/Planung standen im Lernbereich mit
   Dialogen und Hoertexten da, aber ohne ein einziges Wort zum
   Ueben. Diese Datei fuellt genau diese Luecke.

   Wird NACH uebungen.js geladen und haengt ihre Themen an den
   Bereich "Wortschatz" an. uebungen.js bleibt unangetastet;
   nimmt man die Zeile in konto.html heraus, ist alles wie vorher.

   Je Thema 14 Woerter mit Bedeutung, Zeichen und einem echten
   Satz aus dem Alltag, dazu Auswahl-, Luecken- und
   Zuordnungsaufgaben.

   Erzeugt von bau/mach-wortschatz.js aus bau/wortschatz-quelle.json —
   nicht von Hand aendern, sondern die Quelle und dann neu bauen.
   ============================================================ */
(function () {
  var U = window.UEBUNGEN;
  if (!U || !U.skills) return;
  var ws = null;
  for (var i = 0; i < U.skills.length; i++) { if (U.skills[i].id === 'wortschatz') { ws = U.skills[i]; break; } }
  if (!ws) return;
  if (!ws.themes) ws.themes = [];

  var NEU = `;

const fuss = `;

  var da = {};
  ws.themes.forEach(function (t) { da[t.id] = 1; });
  NEU.forEach(function (t) { if (!da[t.id]) ws.themes.push(t); });
})();
`;

fs.writeFileSync(path.join(W, 'wortschatz-neu.js'), kopf + JSON.stringify(themen, null, 1) + fuss, 'utf8');
console.log(themen.length + ' Themen, ' + themen.reduce((n, t) => n + t.words.length, 0) + ' Woerter');
console.log(zChoice + ' Auswahl, ' + zGap + ' Luecken, ' + zMatch + ' Zuordnungen');
