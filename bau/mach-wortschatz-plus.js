/* ============================================================
   mach-wortschatz-plus.js — Wortschatz für die dünnen Niveaus

   B2 hatte fuenf Wortschatzthemen gegen siebenundzwanzig auf B1,
   C1 acht kleine. Wer dort ankommt, findet also fast nichts mehr
   vor — genau an der Stelle, wo der Sprung von „verstehen\" zu
   „genau sagen\" passiert.

   Die Inhalte stehen von Hand geschrieben in
     bau/b2-wortschatz-*.json
     bau/c1-wortschatz-*.json
   Dieses Skript macht daraus die Aufgabentypen, die ueben.js
   kennt, und schreibt sie nach wortschatz-plus.js.

   Was hier NICHT entsteht: tippen, buchstaben, artikel und speak.
   Die kommen aus bau/mach-vielfalt.js, das nach diesem Skript
   laufen muss.

   Aus dem JSON werden:
     unterschied → choice     (zwei ähnliche Wörter trennen)
     lücke      → gap        (das Wort in seiner festen Verbindung)
     paare       → match
     fehler      → fehler
     satzbau     → order
     schreiben   → schreiben
     lesen       → lesen

   Aufruf:  node bau/mach-wortschatz-plus.js
   ============================================================ */
const fs = require('fs');
const path = require('path');
const wurzel = path.join(__dirname, '..');
const AUSGABE = 'wortschatz-plus.js';

/* ---------- Was es schon gibt ----------
   Ein Wort, das anderswo schon steht, ist nicht verboten — eine
   Wiederholung auf höherem Niveau kann sinnvoll sein. Aber man
   sollte es wissen, statt es aus Versehen zu tun. */
global.window = {};
require(path.join(wurzel, 'uebungen.js'));
['hoer-neu.js', 'hoeren-a1-neu.js', 'aussprache-neu.js', 'hoeren-b2-neu.js',
 'hoeren-c1-neu.js', 'wortschatz-neu.js', 'wortschatz-a1-neu.js',
 'grammatik-neu.js', 'grammatik-c1-neu.js', 'grammatik-b2c1-mehr.js', 'lesen-schreiben-neu.js'
].forEach(f => { try { require(path.join(wurzel, f)); } catch (e) {} });

const NIVEAUS = ['A1', 'A2', 'B1', 'B2', 'C1'];
const schonDa = {};
((global.window.UEBUNGEN || {}).skills || []).forEach(sk => {
  (sk.themes || []).forEach(t => {
    const niv = String(t.level || '?').split(/[–-]/)[0].trim();
    (t.words || []).forEach(w => {
      const k = String(w.de || w).replace(/^(der|die|das)\s+/i, '').trim().toLowerCase();
      (schonDa[k] = schonDa[k] || []).push({ niveau: niv, bereich: sk.id, thema: t.id });
    });
  });
});

/* ---------- Bausteine einlesen ---------- */
/* Zwei Sorten Bausteine: „*-wortschatz-*.json\" legt neue Themen an,
   „*-nachtrag-*.json\" stockt vorhandene auf. */
const dateien = fs.readdirSync(__dirname)
  .filter(f => /^(a1|a2|b1|b2|c1)-wortschatz-.*\.json$|^[a-z0-9]+-nachtrag-.*\.json$|^lesen-schreiben-.*\.json$/.test(f)).sort();
if (!dateien.length) { console.error('Keine Wortschatz-Bausteine gefunden.'); process.exit(1); }

const themen = [];
dateien.forEach(f => {
  const roh = JSON.parse(fs.readFileSync(path.join(__dirname, f), 'utf8'));
  (roh.themen || []).forEach(t => themen.push(t));
});

/* ---------- Prüfungen vor dem Bauen ----------
   Lieber hier abbrechen als eine Aufgabe ausliefern, die niemand
   loesen kann. */
const klagen = [];
const hinweise = { gleich: [], höher: [], tiefer: [] };

function prüfeWort(t, w) {
  const rein = String(w.de).replace(/^(der|die|das)\s+/i, '').trim();
  const info = String(w.info || '');
  if (!info) klagen.push(t.id + ': „' + w.de + '" hat keine Bedeutung');
  /* Die Bedeutung wird auch beim Tippen angezeigt. Steht das Wort
     darin, ist die Aufgabe geschenkt. */
  const stamm = rein.toLowerCase().slice(0, Math.max(5, rein.length - 3));
  if (stamm.length >= 4 && info.toLowerCase().includes(stamm)) {
    klagen.push(t.id + ': Bedeutung von „' + w.de + '" enthaelt das Wort selbst');
  }
  /* Ein Wort, das anderswo schon steht, ist nicht per se falsch —
     aber es gibt drei sehr verschiedene Fälle, und nur einer davon
     ist harmlos. Deshalb werden sie getrennt gemeldet. */
  const k = rein.toLowerCase();
  const mein = NIVEAUS.indexOf(String(t.level || '').split(/[–-]/)[0].trim());
  (schonDa[k] || []).forEach(o => {
    const dort = NIVEAUS.indexOf(o.niveau);
    const wo = o.niveau + ' ' + o.bereich + '/' + o.thema;
    /* Kritisch ist nur, wenn beide Karten im selben Bereich stehen —
       dann sieht man dieselbe zweimal. „der Termin" im Wortschatz und
       in einem Lesethema sind zwei verschiedene Karten in zwei Listen,
       und das ist so gewollt. */
    if (o.bereich === (t.bereich || 'wortschatz') && dort === mein) {
      /* Dieselbe Liste, dieselbe Stufe: die Karte kommt zweimal vor. */
      hinweise.gleich.push(t.id + ': „' + w.de + '" — auch in ' + wo);
    } else if (dort > mein) {
      /* Weiter oben nochmal als neu: dort ist es zu hoch eingestuft
         oder hier zu frueh. So oder so stimmt der Aufbau nicht. */
      hinweise.höher.push(t.id + ' (' + t.level + '): „' + w.de + '" — steht auch als neues Wort in ' + wo);
    } else {
      hinweise.tiefer.push(t.id + ': „' + w.de + '" — kam schon auf ' + wo);
    }
  });
}

function prüfeFehler(t, a) {
  const nackt = w => String(w).replace(/^[«»„""'(]+|[.,!?;:«»„""')]+$/g, '');
  const wörter = String(a.satz).split(/\s+/);
  const stellen = wörter.map((w, i) => nackt(w) === nackt(a.falsch) ? i : -1).filter(i => i >= 0);

  if (!stellen.length) klagen.push(t.id + ': „' + a.falsch + '" steht nicht im Satz „' + a.satz + '"');

  /* Steht das Wort mehrfach da, weiß niemand, welches gemeint ist —
     ausser die Aufgabe sagt es mit falschIdx. Gerade bei Fehlern in
     der Wortstellung ist das der Normalfall: „weil sie sind aktuell\"
     hat zweimal „sind\", und falsch ist genau das zweite. */
  if (stellen.length > 1 && typeof a.falschIdx !== 'number') {
    klagen.push(t.id + ': „' + a.falsch + '" steht mehrfach im Satz — bitte falschIdx angeben (' +
      wörter.map((w, i) => i + ':' + w).join(' ') + ')');
  }
  if (typeof a.falschIdx === 'number' && nackt(wörter[a.falschIdx] || '') !== nackt(a.falsch)) {
    klagen.push(t.id + ': falschIdx ' + a.falschIdx + ' zeigt auf „' + wörter[a.falschIdx] +
      '", nicht auf „' + a.falsch + '"');
  }
  if (!a.richtig) klagen.push(t.id + ': Fehleraufgabe ohne richtige Fassung');
}

function prüfeLücke(t, a) {
  const n = (String(a.satz).match(/_{3,}/g) || []).length;
  if (n === 0) klagen.push(t.id + ': Lückensatz ohne Lücke: ' + a.satz);
  if (n > 1) klagen.push(t.id + ': mehr als eine Lücke: ' + a.satz);
}

themen.forEach(t => {
  /* Wortschatzthemen leben von ihrer Wortliste. Grammatik und
     Aussprache tragen sich über Regeln — dort ist eine kurze Liste
     in Ordnung, sie liefert nur die Fachwörter dazu. */
  const braucht = (t.bereich || 'wortschatz') === 'wortschatz' ? 4 : 0;
  if ((t.words || []).length < braucht) klagen.push(t.id + ': zu wenige Wörter');
  (t.words || []).forEach(w => prüfeWort(t, w));
  (t.aufgaben || []).forEach(a => {
    if (a.art === 'fehler') prüfeFehler(t, a);
    if (a.art === 'lücke') prüfeLücke(t, a);
    if (a.art === 'unterschied' || a.art === 'lesen') {
      const alle = [a.gut].concat(a.schlecht || []);
      if (new Set(alle).size !== alle.length) klagen.push(t.id + ': doppelte Antwortoption bei „' + (a.frage || '').slice(0, 40) + '"');
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
/* Fester Streuwert: gleiche Eingabe, gleiche Reihenfolge. Sonst
   entsteht bei jedem Lauf ein anderer Diff, ohne dass sich am
   Inhalt etwas geändert hätte. */
function mischeOptionen(gut, schlecht, streu) {
  const sortiert = [gut].concat(schlecht)
    .map((o, i) => ({ o, k: ((streu * 9301 + i * 49297) % 233280) }))
    .sort((a, b) => a.k - b.k).map(x => x.o);
  return { options: sortiert, answer: sortiert.indexOf(gut) };
}

/* Welche Themen es zum Aufstocken ueberhaupt gibt — Schluessel wie im
   Browser: bereich|id. */
const zielDa = {};
((global.window.UEBUNGEN || {}).skills || []).forEach(sk => {
  (sk.themes || []).forEach(t => { zielDa[sk.id + '|' + t.id] = true; });
});
const zielFehler = [];

let nr = 0;
const neue = [];
const nachtrag = [];
const unbekannt = [];

themen.forEach(t => {
  const ex = [];

  if (t.einstieg) {
    ex.push({ type: 'karte', w: t.title, info: t.einstieg, emoji: t.emoji, regel: true });
  }

  (t.aufgaben || []).forEach(a => {
    nr++;
    if (a.art === 'unterschied') {
      const m = mischeOptionen(a.gut, a.schlecht, nr);
      ex.push({ type: 'choice', q: a.frage, options: m.options, answer: m.answer, explain: a.erklärung });
    } else if (a.art === 'lücke') {
      ex.push({ type: 'gap', text: a.satz, answer: a.lösung, alts: a.alts || [a.lösung], explain: a.erklärung });
    } else if (a.art === 'paare') {
      ex.push({ type: 'match', intro: a.intro || 'Ordne zu:', pairs: a.paare.map(p => ({ l: p[0], r: p[1] })) });
    } else if (a.art === 'fehler') {
      const f = { type: 'fehler', satz: a.satz, falsch: a.falsch, richtig: a.richtig, explain: a.erklärung };
      if (typeof a.falschIdx === 'number') f.falschIdx = a.falschIdx;
      ex.push(f);
    } else if (a.art === 'satzbau') {
      ex.push({ type: 'order', answer: a.satz, hint: a.hinweis, explain: a.erklärung });
    } else if (a.art === 'schreiben') {
      ex.push({ type: 'schreiben', auftrag: a.auftrag, tipp: a.tipp, muster: a.muster });
    } else if (a.art === 'sprechen') {
      /* Nachsprechen ohne Tondatei: ueben.js liest den Satz dann mit
         der Stimme des Geräts vor. Eine echte Aufnahme klingt besser,
         und sobald es eine gibt, trägt man sie unter "ton" nach —
         der Aufgabentyp nimmt beides. */
      const sp = { type: 'speak', word: a.satz, tip: a.tipp };
      if (a.ton) sp.audioUrl = a.ton;
      ex.push(sp);
    } else if (a.art === 'lesen') {
      const m = mischeOptionen(a.gut, a.schlecht, nr);
      ex.push({ type: 'lesen', text: a.text, q: a.frage, options: m.options, answer: m.answer, explain: a.erklärung });
    } else {
      /* Eine unbekannte Art wurde frueher stillschweigend uebersprungen.
         Genau das ist passiert, als aus "luecke" beim Umstellen auf
         Umlaute "lücke" wurde: Vier neue Bausteine lieferten ihre
         Lueckensaetze ab, im Ergebnis fehlten sie, und niemand hat es
         gemerkt. Deshalb ist eine unbekannte Art jetzt ein Abbruch. */
      unbekannt.push(t.id + ': Art "' + a.art + '" kennt der Generator nicht');
    }
  });

  /* Zu jedem Wort eine Aufgabe in der Richtung, die beim Sprechen
     gebraucht wird: die Bedeutung steht da, gesucht ist das Wort.
     Die falschen Antworten kommen aus demselben Thema — sonst
     erkennt man die richtige am Sachgebiet, ohne sie zu kennen. */
  const wörter = t.words || [];
  wörter.forEach((w, i) => {
    const andere = wörter.filter((_, k) => k !== i);
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

  /* Ein Baustein mit „ergänze" legt kein neues Thema an, sondern
     stockt ein vorhandenes auf. Gebraucht wird das dort, wo ein
     Thema sein Etikett nicht trägt: „Einkaufen\" steht auf B1 und
     besteht zu 88 Prozent aus A2-Wörtern. Statt das Thema
     umzustufen oder auszutauschen — es funktioniert ja — kommen
     die Wörter dazu, die die Stufe rechtfertigen. */
  if (t.ergänze) {
    /* Das Ziel muss "bereich|id" heißen. Stand dort nur die id, lief
       der Nachtrag im Browser still ins Leere: teil[1] war undefined,
       kein Thema passte, und die Aufgaben fehlten, ohne dass hier
       etwas zu sehen war. Deshalb wird das Ziel jetzt geprueft. */
    const teil = String(t.ergänze).split('|');
    if (teil.length !== 2) {
      zielFehler.push(t.id + ': "' + t.ergänze + '" — das Ziel muss "bereich|id" heißen');
    } else if (!zielDa[t.ergänze]) {
      zielFehler.push(t.id + ': Ziel "' + t.ergänze + '" gibt es nicht');
    }
    nachtrag.push({ ziel: t.ergänze, words: wörter, exercises: ex });
  }
  else neue.push({ bereich: t.bereich || 'wortschatz', id: t.id, title: t.title,
                   level: t.level, emoji: t.emoji, words: wörter, exercises: ex });
});

if (zielFehler.length) {
  console.error('\nSo geht das nicht — ein Nachtrag zeigt ins Leere:');
  zielFehler.forEach(z => console.error('  ' + z));
  console.error('\nBekannte Ziele stehen als "bereich|id" bereit, etwa');
  console.error('wortschatz|einkaufen oder wortschatz|c1-amt.\n');
  process.exit(1);
}

if (unbekannt.length) {
  console.error('\nSo geht das nicht:');
  unbekannt.forEach(u => console.error('  ' + u));
  console.error('\nBekannt sind: unterschied, lücke, paare, fehler, satzbau,');
  console.error('sprechen, schreiben, lesen.\n');
  process.exit(1);
}

/* ---------- Datei schreiben ---------- */
const kopf = `/* ============================================================
   ${AUSGABE} — Wortschatz für B2 und C1

   Erzeugt von bau/mach-wortschatz-plus.js aus den Bausteinen in
   bau/b2-wortschatz-*.json und bau/c1-wortschatz-*.json.
   Nicht von Hand ändern — beim nächsten Lauf ist es weg.

   Auf diesen Niveaus geht es nicht mehr darum, ein Wort zu kennen,
   sondern zwei ähnliche auseinanderzuhalten: zuständig oder
   befugt, Einwand oder Bedenken, Korrelation oder Kausalitaet,
   Abgrenzung oder Rückzug. Deshalb kommen die falschen Antworten
   aus demselben Thema — sonst erkennt man die richtige am
   Sachgebiet, ohne sie zu kennen.

   tippen, buchstaben, artikel und speak stehen nicht hier. Die
   erzeugt bau/mach-vielfalt.js, das nach diesem Skript läuft.
   ============================================================ */
(function () {
  'use strict';
  if (!window.UEBUNGEN || !window.UEBUNGEN.skills) return;
  var NEU = `;

const mitte = `;
  var NACHTRAG = `;

const fuß = `;
  /* Jedes Thema sagt selbst, in welchen Bereich es gehoert. So
     koennen aus denselben Bausteinen auch Lese- und Schreibthemen
     entstehen, nicht nur Wortschatz. */
  NEU.forEach(function (t) {
    var sk = window.UEBUNGEN.skills.filter(function (s) { return s.id === t.bereich; })[0];
    if (!sk) return;
    var da = {};
    (sk.themes || []).forEach(function (x) { da[x.id] = true; });
    if (da[t.id]) return;
    var rein = { id: t.id, title: t.title, level: t.level, emoji: t.emoji,
                 words: t.words, exercises: t.exercises };
    sk.themes.push(rein);
  });

  /* Nachträge stocken vorhandene Themen auf, statt neue anzulegen. */
  NACHTRAG.forEach(function (n) {
    var teil = n.ziel.split('|');
    var bereich = window.UEBUNGEN.skills.filter(function (s) { return s.id === teil[0]; })[0];
    var thema = bereich && (bereich.themes || []).filter(function (t) { return t.id === teil[1]; })[0];
    if (!thema) return;
    var dieWörter = {};
    (thema.words || []).forEach(function (w) { dieWörter[String(w.de || w)] = true; });
    n.words.forEach(function (w) {
      if (!dieWörter[String(w.de)]) { (thema.words = thema.words || []).push(w); }
    });
    thema.exercises = (thema.exercises || []).concat(n.exercises);
  });
})();
`;

fs.writeFileSync(path.join(wurzel, AUSGABE),
  kopf + JSON.stringify(neue) + mitte + JSON.stringify(nachtrag) + fuß, 'utf8');

/* ---------- Bericht ---------- */
let aufgaben = 0, wörter = 0;
neue.forEach(t => { aufgaben += t.exercises.length; wörter += t.words.length; });
console.log('\n' + neue.length + ' neue Themen, ' + wörter + ' Wörter, ' + aufgaben + ' Aufgaben');
neue.forEach(t => {
  const formen = {};
  t.exercises.forEach(e => formen[e.type] = (formen[e.type] || 0) + 1);
  console.log('  ' + String(t.level).padEnd(4) + (t.bereich === 'wortschatz' ? '' : t.bereich + '/') + t.id.padEnd(20) +
    String(t.words.length).padStart(3) + ' W  ' + String(t.exercises.length).padStart(3) + ' A   ' +
    Object.keys(formen).sort().map(f => f + ' ' + formen[f]).join(', '));
});

if (nachtrag.length) {
  let nw = 0, na = 0;
  nachtrag.forEach(n => { nw += n.words.length; na += n.exercises.length; });
  console.log('\n' + nachtrag.length + ' Themen aufgestockt, ' + nw + ' Wörter, ' + na + ' Aufgaben');
  nachtrag.forEach(n => console.log('  ' + n.ziel.padEnd(26) +
    String(n.words.length).padStart(3) + ' W  ' + String(n.exercises.length).padStart(3) + ' A   ' +
    n.words.map(w => w.de).join(', ')));
}
if (hinweise.gleich.length) {
  console.log('\nSelbe Liste, selbe Stufe — die Karte kaeme zweimal vor:');
  hinweise.gleich.forEach(h => console.log('  ' + h));
}
if (hinweise.höher.length) {
  console.log('\nSteht weiter oben nochmal als neues Wort — dort zu hoch oder hier zu frueh:');
  hinweise.höher.forEach(h => console.log('  ' + h));
}
if (hinweise.tiefer.length) {
  console.log('\nKam schon auf einer tieferen Stufe vor (' + hinweise.tiefer.length +
    ' Wörter) — das ist Wiederholung und meist gewollt.');
}
console.log();
