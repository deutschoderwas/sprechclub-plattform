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
['wortschatz-a1-neu.js', 'grammatik-neu.js', 'grammatik-c1-neu.js',
 'aussprache-neu.js', 'wortschatz-neu.js', 'lesen-schreiben-neu.js',
 'hoeren-b2-neu.js', 'hoeren-c1-neu.js', 'vielfalt-neu.js'].forEach(f => {
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

/* ---------- Sprachliche Schwere ---------- */
function messe(saetze) {
  let woerter = 0, buchstaben = 0, lang = 0, nebensatz = 0, n = saetze.length;
  saetze.forEach(s => {
    const w = String(s).replace(/<[^>]+>/g, '').match(/[\wÄÖÜäöüß]+/g) || [];
    woerter += w.length;
    w.forEach(x => { buchstaben += x.length; if (x.length > 12) lang++; });
    if (/\b(weil|dass|obwohl|damit|nachdem|während|wenn|falls|sofern|indem|sodass|worauf|wobei)\b/i.test(s)) nebensatz++;
  });
  return {
    saetze: n,
    woerterProSatz: n ? +(woerter / n).toFixed(1) : 0,
    buchstabenProWort: woerter ? +(buchstaben / woerter).toFixed(1) : 0,
    langeWoerter: woerter ? +(lang / woerter * 100).toFixed(1) : 0,
    nebensatzAnteil: n ? +(nebensatz / n * 100).toFixed(0) : 0
  };
}

/* ---------- Grammatik, die auf einem Niveau noch nichts zu suchen hat ---------- */
const VORGRIFF = {
  A1: [
    [/\b(hätte|wäre|würde|könnte|müsste|dürfte|sollte|wüsste)\b/i, 'Konjunktiv II'],
    [/\bwird\s+\w+t\b|\bwurde\s+\w+t\b|\bworden\b/i, 'Passiv'],
    [/\b(des|eines)\s+\w+(s|es)\b/i, 'Genitiv'],
    [/\b(obwohl|nachdem|sobald|während|falls|sofern|indem|sodass)\b/i, 'anspruchsvoller Nebensatz'],
    [/\b(angesichts|aufgrund|hinsichtlich|zugunsten|mangels|anlässlich)\b/i, 'gehobene Präposition']
  ],
  A2: [
    [/\bworden\b/i, 'Passiv Perfekt'],
    [/\b(angesichts|hinsichtlich|zugunsten|mangels|anlässlich)\b/i, 'gehobene Präposition'],
    [/\b(sei|habe|werde)\s+(er|sie|es|man)\b/i, 'Konjunktiv I'],
    [/\b(dessen|deren|worauf|wobei|weshalb)\b/i, 'anspruchsvoller Relativsatz']
  ],
  B1: [
    [/\b(sei|habe|werde)\s+(er|sie|es|man)\b/i, 'Konjunktiv I'],
    [/\b(mangels|zwecks|behufs|ungeachtet)\b/i, 'sehr gehobene Präposition']
  ]
};

const befunde = { schwere: [], vorgriff: [], pfad: [], doppelt: [], eintoenig: [] };
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
      texte(e).forEach(txt => {
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
          Dieselbe id in Wortschatz und Hoeren sind zwei verschiedene Themen,
          und der Fortschritt zaehlt sie unter Bereich|Thema schon getrennt. */
    const schluessel = sk.id + '|' + t.id;
    if (gesehen[schluessel]) befunde.doppelt.push({ bereich: sk.id, thema: t.id, hier: niv, schon: gesehen[schluessel] });
    else gesehen[schluessel] = niv;

    /* 5. Eintönigkeit */
    const formen = {};
    (t.exercises || []).forEach(e => formen[e.type] = (formen[e.type] || 0) + 1);
    const anz = (t.exercises || []).length;
    const groesste = Math.max(0, ...Object.values(formen));
    if (anz >= 8 && groesste / anz > 0.6) {
      befunde.eintoenig.push({
        bereich: sk.id, thema: t.id, niveau: niv, aufgaben: anz,
        haeufigste: Object.keys(formen).find(k => formen[k] === groesste),
        anteil: Math.round(groesste / anz * 100)
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
    String(m.saetze).padStart(5) +
    String(m.woerterProSatz).padStart(14) +
    String(m.buchstabenProWort).padStart(15) +
    (m.langeWoerter + '%').padStart(15) +
    (m.nebensatzAnteil + '%').padStart(13)
  );
});
console.log('→ Erwartung: alle vier Werte steigen von A1 nach C1 an.');

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
if (!befunde.eintoenig.length) console.log('keine — überall genug Abwechslung');
else {
  befunde.eintoenig.sort((a, b) => b.anteil - a.anteil);
  befunde.eintoenig.slice(0, 12).forEach(e =>
    console.log('  ' + e.niveau.padEnd(4) + e.thema.padEnd(30) + e.anteil + '% ' + e.haeufigste + '  (' + e.aufgaben + ' Aufgaben)'));
  console.log('  (' + befunde.eintoenig.length + ' Themen betroffen)');
}
console.log();
