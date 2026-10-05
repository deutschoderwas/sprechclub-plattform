// ============================================================
//  Pruefstand fuer die Zusatzuebungen im Lernbereich
//
//  lektion.html baut aus jeder Lektion weitere Aufgaben: Bild
//  zuordnen, Luecke fuellen, Satz bauen, Antwort finden, zuordnen,
//  hoeren. Automatisch Erzeugtes kann Unsinn ergeben — eine Auswahl
//  mit zweimal derselben Antwort, einen Satz, der sich auf zwei
//  Arten richtig bauen laesst. Wer so eine Aufgabe loest und
//  "falsch" liest, lernt das Falsche.
//
//  Dieses Skript erzeugt alle Aufgaben fuer alle Lektionen und
//  sucht genau danach. Aufruf aus dem Projektordner:
//      node bau/lektionen-pruefstand/lauf.js
// ============================================================
const fs = require('fs');
const path = require('path');

const WURZEL = path.resolve(__dirname, '..', '..');
const KURSE = path.join(WURZEL, 'kurse');

/* Den Generator aus lektion.html holen, damit hier nie eine zweite,
   veraltete Fassung derselben Regeln liegt. */
const seite = fs.readFileSync(path.join(WURZEL, 'lektion.html'), 'utf8');
const von = seite.indexOf('function mischen(');
const bis = seite.indexOf('function boot(d){');
if (von < 0 || bis < 0) { console.error('Generator in lektion.html nicht gefunden.'); process.exit(1); }
eval(seite.slice(von, bis));

function nm(x) { return String(x).toLowerCase().replace(/\s+/g, ' ').replace(/[.!?,]/g, '').trim(); }

const dateien = fs.readdirSync(KURSE).filter(f => f.endsWith('.js')).sort();
const probleme = [];
let zusatz = 0, wenigste = 999, wenigsteDatei = '';

for (const f of dateien) {
  global.window = {};
  try { eval(fs.readFileSync(path.join(KURSE, f), 'utf8')); }
  catch (e) { probleme.push([f, 'laesst sich nicht laden', e.message]); continue; }
  const d = global.window.LEKTION;
  if (!d) { probleme.push([f, 'enthaelt keine Lektion', '']); continue; }

  let extra;
  try { extra = extraUebungen(d); }
  catch (e) { probleme.push([f, 'Generator bricht ab', e.message]); continue; }
  zusatz += extra.length;

  const gesamt = (d.uebungen || []).length + extra.length;
  if (gesamt < wenigste) { wenigste = gesamt; wenigsteDatei = f; }

  for (const u of extra) {
    const wo = f + ' · ' + u.typ;
    if (u.optionen) {
      const k = u.optionen.map(nm);
      if (new Set(k).size !== k.length) probleme.push([wo, 'dieselbe Antwort steht zweimal zur Wahl', u.optionen.join(' | ')]);
      if (u.richtig == null || u.richtig < 0) probleme.push([wo, 'keine richtige Antwort hinterlegt', u.frage || '']);
      if (u.optionen.length < 3) probleme.push([wo, 'zu wenig zur Auswahl', String(u.optionen.length)]);
      if (u.optionen.some(x => !String(x || '').trim())) probleme.push([wo, 'leere Antwortmoeglichkeit', '']);
    }
    if (u.typ === 'order') {
      const w = u.woerter || [];
      if (nm(w.join(' ')) === nm(u.loesung)) probleme.push([wo, 'steht schon in der richtigen Reihenfolge', u.loesung]);
      if (/[,;:]/.test(u.loesung)) probleme.push([wo, 'Komma im Satz: laesst sich auch anders richtig bauen', u.loesung]);
      if ((u.loesung.replace(/[.!?]+$/, '').match(/[.!?]/g) || []).length) probleme.push([wo, 'mehrere Saetze in einer Aufgabe', u.loesung]);
      if (w.length < 3) probleme.push([wo, 'zu kurz zum Bauen', u.loesung]);
    }
    if (u.typ === 'match') {
      const p = u.paare || [];
      const r = p.map(x => nm(x[1])), l = p.map(x => nm(x[0]));
      if (new Set(r).size !== r.length) probleme.push([wo, 'rechte Seite doppelt: nicht loesbar', r.join(' | ')]);
      if (new Set(l).size !== l.length) probleme.push([wo, 'linke Seite doppelt', '']);
      if (p.length < 3) probleme.push([wo, 'zu wenig Paare', String(p.length)]);
    }
  }
}

console.log('Lektionen geprueft: ' + dateien.length);
console.log('Zusatzaufgaben erzeugt: ' + zusatz + ' (im Schnitt ' + (zusatz / dateien.length).toFixed(1) + ' pro Lektion)');
console.log('Die duennste Lektion hat ' + wenigste + ' Aufgaben: ' + wenigsteDatei);
console.log('');
if (!probleme.length) { console.log('Keine Beanstandung.'); process.exit(0); }
console.log('Beanstandungen: ' + probleme.length);
for (const p of probleme) console.log('  ' + p[0] + '\n      ' + p[1] + (p[2] ? '\n      ' + String(p[2]).slice(0, 100) : ''));
process.exit(1);
