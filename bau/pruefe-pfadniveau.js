/* ============================================================
   pruefe-pfadniveau.js — steht jedes Grammatikthema auf der Stufe,
   auf der es im Lernpfad einsortiert ist?

   Diese Prüfung gibt es wegen eines Fehlers, den sie sofort gefangen
   hätte. In bau/grammatik-quelle.json standen „Partizip als Attribut",
   „Nominalstil" und „Passiversatz" als C1. In der ausgelieferten
   grammatik-neu.js standen sie als B2 — jemand hatte die erzeugte
   Datei von Hand nachgebessert und die Quelle vergessen. Solange
   niemand den Generator laufen ließ, fiel nichts auf. Beim nächsten
   Lauf sprangen drei Themen von B2 nach C1, und im Bestand sah es
   aus, als wäre B2 über Nacht dünner geworden.

   Der Lernpfad in grammatik-reihenfolge.js weiß es besser: Dort ist
   jedes Thema einem Abschnitt zugeordnet — A1, A2, B1, B2, C1 —, und
   dieser Abschnitt ist die didaktische Entscheidung. Weicht das
   Niveau im Bestand davon ab, stimmt etwas nicht.

   Gemeldet wird beides:
     - Thema steht im Pfad unter B2, trägt aber ein anderes Niveau
     - Thema steht im Pfad, existiert aber gar nicht im Bestand

   Aufruf: node bau/pruefe-pfadniveau.js
   ============================================================ */
const fs = require('fs');
const path = require('path');
const wurzel = path.join(__dirname, '..');

/* ---------- Abschnitte aus dem Lernpfad lesen ---------- */
const quelle = fs.readFileSync(path.join(wurzel, 'grammatik-reihenfolge.js'), 'utf8');
const zeilen = quelle.split('\n');
const pfad = {};                 /* themaId → Niveau laut Abschnitt */
let stufe = null;

zeilen.forEach(z => {
  const abschnitt = z.match(/\/\*\s*-{3,}\s*(A1|A2|B1|B2|C1)\s*:/);
  if (abschnitt) { stufe = abschnitt[1]; return; }
  if (!stufe) return;
  const eintrag = z.match(/^\s*\['([a-z0-9-]+)'\s*,/);
  if (eintrag) pfad[eintrag[1]] = stufe;
});

if (!Object.keys(pfad).length) {
  console.error('\nIm Lernpfad wurde kein einziges Thema gefunden — hat sich die Schreibweise geändert?\n');
  process.exit(1);
}

/* ---------- Bestand laden ---------- */
global.window = {};
require(path.join(wurzel, 'uebungen.js'));
['hoer-neu.js', 'hoeren-a1-neu.js', 'aussprache-neu.js', 'hoeren-b2-neu.js',
 'hoeren-c1-neu.js', 'wortschatz-neu.js', 'grammatik-reihenfolge.js',
 'wortschatz-a1-neu.js', 'grammatik-neu.js', 'grammatik-c1-neu.js',
 'lesen-schreiben-neu.js', 'wortschatz-plus.js', 'themen-zusammenfuehren.js',
 'vielfalt-neu.js'].forEach(f => {
  try { require(path.join(wurzel, f)); } catch (e) {}
});

const imBestand = {};
(global.window.UEBUNGEN.skills || []).forEach(sk => {
  (sk.themes || []).forEach(t => { if (t.id) imBestand[t.id] = t.level || '—'; });
});

/* ---------- Vergleichen ---------- */
const abweichend = [], fehlend = [];
Object.keys(pfad).forEach(id => {
  if (!(id in imBestand)) { fehlend.push(id + '  (Pfad: ' + pfad[id] + ')'); return; }
  if (imBestand[id] !== pfad[id])
    abweichend.push('  ' + id.padEnd(28) + 'Pfad sagt ' + pfad[id] + ', der Bestand sagt ' + imBestand[id]);
});

console.log('\n' + Object.keys(pfad).length + ' Themen im Lernpfad geprüft.');

if (!abweichend.length && !fehlend.length) {
  console.log('Jedes steht auf der Stufe, für die es einsortiert wurde.\n');
  process.exit(0);
}
if (abweichend.length) {
  console.log('\nNiveau weicht vom Lernpfad ab — ' + abweichend.length + ':');
  abweichend.forEach(z => console.log(z));
  console.log('\n  Meist steht die Wahrheit im Pfad: Er ist die didaktische');
  console.log('  Entscheidung, das Niveau in der Quelle nur ihre Beschriftung.');
}
if (fehlend.length) {
  console.log('\nIm Pfad einsortiert, aber im Bestand nicht vorhanden — ' + fehlend.length + ':');
  fehlend.forEach(z => console.log('  ' + z));
}
console.log();
process.exit(1);
