/* ============================================================
   mach-b2.js — B2-Wortschatz aus den JSON-Bausteinen

   B2 hatte fuenf Wortschatzthemen gegen siebenundzwanzig auf B1.
   Wer auf B2 ankommt, findet also fast nichts mehr vor — genau
   dort, wo der Sprung von „verstehen\" zu „genau sagen\" passiert.

   Die Inhalte stehen in bau/b2-wortschatz-*.json, von Hand
   geschrieben. Dieses Skript macht daraus die Aufgabentypen, die
   ueben.js kennt. Was hier NICHT entsteht: tippen, buchstaben,
   artikel und speak. Die kommen aus bau/mach-vielfalt.js, das
   nach diesem Skript laufen muss.

   Sechs Aufgabenformen aus dem JSON:
     unterschied → choice  (zwei aehnliche Woerter auseinanderhalten)
     luecke      → gap     (das Wort in seiner festen Verbindung)
     paare       → match
     fehler      → fehler  (typische Fehler auf diesem Niveau)
     satzbau     → order
     schreiben   → schreiben
     lesen       → lesen

   Aufruf:  node bau/mach-b2.js
   Ergebnis: wortschatz-b2-neu.js
   ============================================================ */
const fs = require('fs');
const path = require('path');
const wurzel = path.join(__dirname, '..');

/* ---------- Bausteine einlesen ---------- */
const dateien = fs.readdirSync(__dirname)
  .filter(f => /^b2-wortschatz-.*\.json$/.test(f)).sort();
if (!dateien.length) { console.error('Keine b2-wortschatz-*.json gefunden.'); process.exit(1); }

const themen = [];
dateien.forEach(f => {
  const roh = JSON.parse(fs.readFileSync(path.join(__dirname, f), 'utf8'));
  (roh.themen || []).forEach(t => themen.push(t));
});

/* ---------- Pruefungen, die vor dem Bauen laufen ----------
   Lieber hier abbrechen als eine Aufgabe ausliefern, die
   niemand loesen kann. */
const klagen = [];

function pruefeWort(t, w) {
  const rein = String(w.de).replace(/^(der|die|das)\s+/i, '').trim();
  const info = String(w.info || '');
  if (!info) klagen.push(t.id + ': „' + w.de + '" hat keine Bedeutung');
  /* Die Bedeutung wird auch beim Tippen angezeigt. Steht das Wort
     darin, ist die Aufgabe geschenkt. */
  const stamm = rein.toLowerCase().slice(0, Math.max(5, rein.length - 3));
  if (stamm.length >= 4 && info.toLowerCase().includes(stamm)) {
    klagen.push(t.id + ': Bedeutung von „' + w.de + '" enthaelt das Wort selbst');
  }
}

function pruefeFehler(t, a) {
  const woerter = String(a.satz).split(/\s+/);
  const nackt = w => w.replace(/^[«»„""'(]+|[.,!?;:«»„""')]+$/g, '');
  const treffer = woerter.filter(w => nackt(w) === nackt(a.falsch));
  if (!treffer.length) klagen.push(t.id + ': „' + a.falsch + '" steht nicht im Satz „' + a.satz + '"');
  if (treffer.length > 1) klagen.push(t.id + ': „' + a.falsch + '" steht mehrfach im Satz — mehrdeutig');
  if (!a.richtig) klagen.push(t.id + ': Fehleraufgabe ohne richtige Fassung');
}

function pruefeLuecke(t, a) {
  if (!/_{3,}/.test(a.satz)) klagen.push(t.id + ': Lueckensatz ohne Luecke: ' + a.satz);
  if ((a.satz.match(/_{3,}/g) || []).length > 1) klagen.push(t.id + ': mehr als eine Luecke: ' + a.satz);
}

themen.forEach(t => {
  (t.words || []).forEach(w => pruefeWort(t, w));
  (t.aufgaben || []).forEach(a => {
    if (a.art === 'fehler') pruefeFehler(t, a);
    if (a.art === 'luecke') pruefeLuecke(t, a);
    if (a.art === 'unterschied' || a.art === 'lesen') {
      const alle = [a.gut].concat(a.schlecht || []);
      if (new Set(alle).size !== alle.length) klagen.push(t.id + ': doppelte Antwortoption bei „' + (a.frage || a.text || '').slice(0, 40) + '"');
      if (alle.length < 3) klagen.push(t.id + ': zu wenige Antwortoptionen');
    }
  });
});

if (klagen.length) {
  console.error('\nSo geht das nicht:');
  klagen.forEach(k => console.error('  ' + k));
  process.exit(1);
}

/* ---------- Bauen ---------- */
/* Die Optionen werden hier gemischt und der Index mitgeschrieben,
   damit nicht in jeder Aufgabe die erste Antwort die richtige ist. */
function mischeOptionen(gut, schlecht, streu) {
  const alle = [gut].concat(schlecht);
  /* Fester Streuwert: gleiche Eingabe, gleiche Reihenfolge. Sonst
     entsteht bei jedem Lauf ein anderer Diff. */
  const sortiert = alle
    .map((o, i) => ({ o, k: ((streu * 9301 + i * 49297) % 233280) }))
    .sort((a, b) => a.k - b.k).map(x => x.o);
  return { options: sortiert, answer: sortiert.indexOf(gut) };
}

let nr = 0;
const skills = { wortschatz: [] };

themen.forEach(t => {
  const ex = [];

  /* Der Einstieg als Karte: einmal lesen, worum es in dem Thema geht. */
  if (t.einstieg) {
    ex.push({ type: 'karte', w: t.title, info: t.einstieg, emoji: t.emoji, regel: true });
  }

  (t.aufgaben || []).forEach(a => {
    nr++;
    if (a.art === 'unterschied') {
      const m = mischeOptionen(a.gut, a.schlecht, nr);
      ex.push({ type: 'choice', q: a.frage, options: m.options, answer: m.answer, explain: a.erklaerung });
    } else if (a.art === 'luecke') {
      ex.push({ type: 'gap', text: a.satz, answer: a.loesung, alts: a.alts || [a.loesung], explain: a.erklaerung });
    } else if (a.art === 'paare') {
      ex.push({ type: 'match', intro: a.intro || 'Ordne zu:', pairs: a.paare.map(p => ({ l: p[0], r: p[1] })) });
    } else if (a.art === 'fehler') {
      ex.push({ type: 'fehler', satz: a.satz, falsch: a.falsch, richtig: a.richtig, explain: a.erklaerung });
    } else if (a.art === 'satzbau') {
      ex.push({ type: 'order', answer: a.satz, hint: a.hinweis, explain: a.erklaerung });
    } else if (a.art === 'schreiben') {
      ex.push({ type: 'schreiben', auftrag: a.auftrag, tipp: a.tipp, muster: a.muster });
    } else if (a.art === 'lesen') {
      const m = mischeOptionen(a.gut, a.schlecht, nr);
      ex.push({ type: 'lesen', text: a.text, q: a.frage, options: m.options, answer: m.answer, explain: a.erklaerung });
    }
  });

  /* Zu jedem Wort eine Aufgabe in der Richtung, die beim Sprechen
     gebraucht wird: die Bedeutung steht da, gesucht ist das Wort.
     Die falschen Antworten kommen aus demselben Thema — sonst
     erkennt man die richtige am Sachgebiet, ohne sie zu kennen. */
  const woerter = t.words || [];
  woerter.forEach((w, i) => {
    const andere = woerter.filter((_, k) => k !== i);
    if (andere.length < 3) return;
    const ablenker = [andere[(i + 1) % andere.length],
                      andere[(i + 3) % andere.length],
                      andere[(i + 5) % andere.length]]
      .filter((x, k, arr) => x && arr.indexOf(x) === k)
      .slice(0, 3).map(x => x.de);
    if (ablenker.length < 3) return;
    const m = mischeOptionen(w.de, ablenker, i + 7);
    ex.push({
      type: 'choice',
      q: 'Welches Wort passt zu dieser Bedeutung: „' + w.info + '"?',
      options: m.options, answer: m.answer, w: w.de, emoji: w.emoji,
      explain: (w.emoji ? w.emoji + ' ' : '') + w.de + ' — ' + w.info
    });
  });

  skills.wortschatz.push({
    id: t.id, title: t.title, level: t.level, emoji: t.emoji,
    words: woerter, exercises: ex
  });
});

/* ---------- Datei schreiben ---------- */
const kopf = `/* ============================================================
   wortschatz-b2-neu.js — B2 bekommt einen Wortschatz

   Erzeugt von bau/mach-b2.js aus bau/b2-wortschatz-*.json.
   Nicht von Hand aendern — beim naechsten Lauf ist es weg.

   Auf B2 geht es nicht mehr darum, ein Wort zu kennen, sondern
   darum, zwei aehnliche auseinanderzuhalten: zustaendig oder
   befugt, Einwand oder Bedenken, Behauptung oder Beleg. Genau
   danach sind die Aufgaben gebaut — die falschen Antworten kommen
   aus demselben Thema, damit man nicht nach dem Sachgebiet raten
   kann.

   tippen, buchstaben, artikel und speak stehen nicht hier. Die
   erzeugt bau/mach-vielfalt.js, das nach diesem Skript laeuft.
   ============================================================ */
(function () {
  'use strict';
  if (!window.UEBUNGEN || !window.UEBUNGEN.skills) return;
  var NEU = `;

const fuss = `;
  Object.keys(NEU).forEach(function (bereich) {
    var sk = window.UEBUNGEN.skills.filter(function (s) { return s.id === bereich; })[0];
    if (!sk) return;
    var da = {};
    (sk.themes || []).forEach(function (t) { da[t.id] = true; });
    NEU[bereich].forEach(function (t) { if (!da[t.id]) sk.themes.push(t); });
  });
})();
`;

fs.writeFileSync(path.join(wurzel, 'wortschatz-b2-neu.js'),
  kopf + JSON.stringify(skills) + fuss, 'utf8');

/* ---------- Bericht ---------- */
let aufgaben = 0, woerter = 0;
skills.wortschatz.forEach(t => { aufgaben += t.exercises.length; woerter += t.words.length; });
console.log('\n' + skills.wortschatz.length + ' Themen, ' + woerter + ' Woerter, ' + aufgaben + ' Aufgaben');
skills.wortschatz.forEach(t => {
  const formen = {};
  t.exercises.forEach(e => formen[e.type] = (formen[e.type] || 0) + 1);
  console.log('  ' + t.id.padEnd(20) + String(t.words.length).padStart(3) + ' W  ' +
    String(t.exercises.length).padStart(3) + ' A   ' +
    Object.keys(formen).sort().map(f => f + ' ' + formen[f]).join(', '));
});
