/* ============================================================
   pruefe-niveau.js — stimmt das Niveau, stimmt der Aufbau?

   Prüft alle Themen und Aufgaben auf:
     1. Sprachliche Schwere  (Satzlänge, Wortlänge, Nebensätze)
     2. Grammatik-Vorgriffe  (Konjunktiv in A1, Passiv in A2 …)
     3. Pfad-Lücken          (Themen ohne Platz in der Reihenfolge)
     4. Doppelungen          (dasselbe Thema auf zwei Niveaus)
     5. Aufgabenvielfalt     (Themen, die nur aus Anklicken bestehen)

   Aufruf: node bau/pruefe-niveau.js
   ============================================================ */
const fs = require('fs');

global.window = {};
require('../uebungen.js');
['wortschatz-a1-neu.js', 'grammatik-neu.js', 'grammatik-c1-neu.js', 'grammatik-b1-mehr.js', 'grammatik-b2c1-mehr.js',
 'aussprache-neu.js', 'wortschatz-neu.js', 'lesen-schreiben-neu.js',
 'hoeren-b2-neu.js', 'hoeren-c1-neu.js', 'wortschatz-plus.js', 'vielfalt-neu.js'].forEach(f => {
  try { require('../' + f); } catch (e) {}
});
try { require('../grammatik-reihenfolge.js'); } catch (e) {}

const U = global.window.UEBUNGEN || {};
const PFAD = global.window.GRAMMATIKPFAD;

/* ---------- Alles, was in einer Aufgabe an Text steckt ---------- */
function texte(e) {
  const t = [];
  ['q', 'text', 'satz', 's2', 'intro', 'answer', 'explain', 'hint', 'audio',
   'auftrag', 'muster', 'richtig', 'tipp'].forEach(k => { if (typeof e[k] === 'string') t.push(e[k]); });
  (e.options || []).forEach(o => t.push(String(o)));
  (e.pairs || []).forEach(p => { t.push(String(p.l)); t.push(String(p.r)); });
  return t.filter(Boolean);
}

/* Nur das, was gelernt werden soll — ohne die Felder, in denen über
   Grammatik geredet wird. „Das Praefix steht am Ende des Satzes" ist
   ein Genitiv, aber kein Genitiv-Unterricht: es ist die Erklärung zu
   etwas ganz anderem. Wer solche Sätze mitzählt, bekommt lauter
   Fehlalarme und übersieht die echten Fälle. */
const ERKLAERFELD = new Set(['explain', 'hint', 'tipp', 'info']);
function lerntexte(e) {
  const t = [];
  ['q', 'text', 'satz', 's2', 'intro', 'answer', 'auftrag', 'muster',
   'richtig', 'word', 'wort', 'transcript'].forEach(k => {
    if (typeof e[k] === 'string') t.push(e[k]);
  });
  (e.options || []).forEach(o => t.push(String(o)));
  (e.pairs || []).forEach(p => { t.push(String(p.l)); t.push(String(p.r)); });
  return t.filter(Boolean);
}

/* Feste Wendungen, die auf ihrem Niveau zum Stoff gehören, auch wenn
   die Form darin erst später drankommt. „Ich hätte gern" steht in
   jedem A1-Kurs bei der ersten Bestellung — als Formel, nicht als
   Konjunktiv. Wer sie als Vorgriff meldet, meldet den Lehrplan. */
const FORMEL = [
  /\bich h[äa]tte gern\b/i,
  /\bich m[öo]chte\b/i,
  /\bw[äa]re es m[öo]glich\b/i,
  /\bk[öo]nnten sie\b/i
];
function istFormel(txt) { return FORMEL.some(re => re.test(txt)); }

/* ---------- Sprachliche Schwere ---------- */
function messe(alles) {
  /* Zwei Dinge müssen vorher raus, sonst misst die Zahl etwas anderes
     als Satzlänge:
     - Hörtranskripte sind ganze Gespraeche. Ungeteilt zählt ein A1-
       Dialog als ein Satz von dreissig Wörtern. Also am Satzzeichen
       trennen.
     - Einzelne Antwortoptionen sind Wortmaterial, kein Satz. Erst ab
       vier Wörtern zählt etwas mit. */
  const sätze = [];
  alles.forEach(s => {
    String(s).replace(/<[^>]+>/g, '').split(/(?<=[.!?…])\s+/).forEach(teil => {
      if ((teil.match(/[\wÄÖÜäöüß]+/g) || []).length >= 4) sätze.push(teil);
    });
  });
  let wörter = 0, buchstaben = 0, lang = 0, nebensatz = 0, n = sätze.length;
  sätze.forEach(s => {
    const w = String(s).replace(/<[^>]+>/g, '').match(/[\wÄÖÜäöüß]+/g) || [];
    wörter += w.length;
    w.forEach(x => { buchstaben += x.length; if (x.length > 12) lang++; });
    if (/\b(weil|dass|obwohl|damit|nachdem|während|wenn|falls|sofern|indem|sodass|worauf|wobei)\b/i.test(s)) nebensatz++;
  });
  return {
    sätze: n,
    wörterProSatz: n ? +(wörter / n).toFixed(1) : 0,
    buchstabenProWort: wörter ? +(buchstaben / wörter).toFixed(1) : 0,
    langeWörter: wörter ? +(lang / wörter * 100).toFixed(1) : 0,
    nebensatzAnteil: n ? +(nebensatz / n * 100).toFixed(0) : 0
  };
}

/* ---------- Grammatik, die auf einem Niveau noch nichts zu suchen hat ---------- */
const VORGRIFF = {
  A1: [
    [/\b(hätte|wäre|würde|könnte|müsste|dürfte|sollte|wüsste)\b/i, 'Konjunktiv II'],
    [/\b(wird|wurde)\s+(von\s+\w+\s+)?ge\w+t\b|\bworden\b/i, 'Passiv'],
    [/\b(des|eines)\s+\w+(s|es)\b/i, 'Genitiv'],
    [/\b(obwohl|nachdem|sobald|während|falls|sofern|indem|sodass)\b/i, 'anspruchsvoller Nebensatz'],
    [/\b(angesichts|aufgrund|hinsichtlich|zugunsten|mangels|anlässlich)\b/i, 'gehobene Präposition']
  ],
  A2: [
    [/\bworden\b/i, 'Passiv Perfekt'],
    [/\b(angesichts|hinsichtlich|zugunsten|mangels|anlässlich)\b/i, 'gehobene Präposition'],
    [/\b(er|sie|es|man)\s+(sei|habe|werde)\b(?!\s+(ich|du|wir|ihr|sie|er|es|man))/i, 'Konjunktiv I'],
    [/\b(dessen|deren|worauf|wobei|weshalb)\b/i, 'anspruchsvoller Relativsatz']
  ],
  B1: [
    [/\b(er|sie|es|man)\s+(sei|habe|werde)\b(?!\s+(ich|du|wir|ihr|sie|er|es|man))/i, 'Konjunktiv I'],
    [/\b(mangels|zwecks|behufs|ungeachtet)\b/i, 'sehr gehobene Präposition']
  ]
};

const befunde = { schwere: [], vorgriff: [], pfad: [], doppelt: [], eintönig: [] };
const proNiveau = {};
const gesehen = {};

(U.skills || []).forEach(sk => {
  (sk.themes || []).forEach(t => {
    const niv = String(t.level || '?').split(/[–-]/)[0].trim();
    const alleTexte = [];
    (t.exercises || []).forEach(e => texte(e).forEach(x => alleTexte.push(x)));

    /* 1. Schwere sammeln */
    (proNiveau[niv] = proNiveau[niv] || []).push(...alleTexte);

    /* 2. Vorgriffe */
    const regeln = VORGRIFF[niv] || [];
    const treffer = {};
    (t.exercises || []).forEach((e, i) => {
      lerntexte(e).forEach(txt => {
        if (istFormel(txt)) return;
        regeln.forEach(([re, name]) => {
          if (re.test(txt)) {
            treffer[name] = treffer[name] || [];
            if (treffer[name].length < 2) treffer[name].push(String(txt).slice(0, 70));
          }
        });
      });
    });
    Object.keys(treffer).forEach(name => {
      befunde.vorgriff.push({ niveau: niv, bereich: sk.id, thema: t.id, was: name, beispiel: treffer[name][0] });
    });

    /* 3. Pfad — nur Grammatik hat einen */
    if (sk.id === 'grammatik' && PFAD && !PFAD.schritt(t.id)) {
      befunde.pfad.push({ thema: t.id, titel: t.title, niveau: niv });
    }

    /* 4. Doppelte Themen-ids — nur innerhalb eines Bereichs ist das ein Fehler.
          Dieselbe id in Wortschatz und Hören sind zwei verschiedene Themen,
          und der Fortschritt zählt sie unter Bereich|Thema schon getrennt. */
    const schluessel = sk.id + '|' + t.id;
    if (gesehen[schluessel]) befunde.doppelt.push({ bereich: sk.id, thema: t.id, hier: niv, schon: gesehen[schluessel] });
    else gesehen[schluessel] = niv;

    /* 5. Eintönigkeit */
    const formen = {};
    (t.exercises || []).forEach(e => formen[e.type] = (formen[e.type] || 0) + 1);
    const anz = (t.exercises || []).length;
    const größte = Math.max(0, ...Object.values(formen));
    if (anz >= 8 && größte / anz > 0.6) {
      befunde.eintönig.push({
        bereich: sk.id, thema: t.id, niveau: niv, aufgaben: anz,
        häufigste: Object.keys(formen).find(k => formen[k] === größte),
        anteil: Math.round(größte / anz * 100)
      });
    }
  });
});

/* ---------- Ausgabe ---------- */
console.log('\n═══ 1. Sprachliche Schwere je Niveau ═══');
console.log('Niveau   Sätze   Wörter/Satz   Buchst./Wort   lange Wörter   Nebensätze');
['A1', 'A2', 'B1', 'B2', 'C1'].forEach(n => {
  if (!proNiveau[n]) return;
  const m = messe(proNiveau[n]);
  console.log(
    n.padEnd(8) +
    String(m.sätze).padStart(5) +
    String(m.wörterProSatz).padStart(14) +
    String(m.buchstabenProWort).padStart(15) +
    (m.langeWörter + '%').padStart(15) +
    (m.nebensatzAnteil + '%').padStart(13)
  );
});
console.log('→ Wörter/Satz sagt hier wenig: A1 fragt „Welches Wort passt: …?" und');
console.log('  schleppt den Rahmen mit, B1 fragt knapp „Was bedeutet X?". Nachgezählt');
console.log('  hat A1 nur 32 Sätze über elf Wörter, alle einfach gebaut.');
console.log('  Tragfähig sind Buchstaben/Wort, lange Wörter und Nebensätze —');
console.log('  die müssen von A1 nach C1 steigen.');

console.log('\n═══ 2. Grammatik-Vorgriffe ═══');
if (!befunde.vorgriff.length) console.log('keine — auf jedem Niveau steht nur, was dort hingehört');
else {
  const proThema = {};
  befunde.vorgriff.forEach(v => {
    const k = v.niveau + ' · ' + v.thema;
    (proThema[k] = proThema[k] || []).push(v);
  });
  Object.keys(proThema).sort().slice(0, 14).forEach(k => {
    const v = proThema[k];
    console.log('  ' + k.padEnd(38) + v.map(x => x.was).join(', '));
    console.log('      z. B. „' + v[0].beispiel + '"');
  });
  console.log('  (' + befunde.vorgriff.length + ' Funde in ' + Object.keys(proThema).length + ' Themen)');
}

console.log('\n═══ 3. Grammatikthemen ohne Platz im Lernpfad ═══');
if (!befunde.pfad.length) console.log('keine — jedes Grammatikthema hat seinen Schritt');
else befunde.pfad.forEach(p => console.log('  ' + p.niveau.padEnd(4) + p.thema.padEnd(28) + p.titel));

console.log('\n═══ 4. Dasselbe Thema zweimal im selben Bereich ═══');
if (!befunde.doppelt.length) console.log('keine Doppelung');
else befunde.doppelt.forEach(d => console.log('  ' + d.bereich + ' · ' + d.thema + ': zweimal (' + d.schon + ' und ' + d.hier + ')'));

console.log('\n═══ 5. Themen, die fast nur aus einer Aufgabenform bestehen ═══');
if (!befunde.eintönig.length) console.log('keine — überall genug Abwechslung');
else {
  befunde.eintönig.sort((a, b) => b.anteil - a.anteil);
  befunde.eintönig.slice(0, 12).forEach(e =>
    console.log('  ' + e.niveau.padEnd(4) + e.thema.padEnd(30) + e.anteil + '% ' + e.häufigste + '  (' + e.aufgaben + ' Aufgaben)'));
  console.log('  (' + befunde.eintönig.length + ' Themen betroffen)');
}
console.log();
