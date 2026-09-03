/* ============================================================
   pruefe-aufgaben.js — kann man jede Aufgabe überhaupt lösen?

   Diese Prüfung gibt es, weil dreimal hintereinander derselbe
   Fehler durchgerutscht ist: Eine Umbenennung hat still etwas
   kaputt gemacht, und niemand hat es gemerkt.

     1. Aus "Zustandspassiv" wurde "Zustandspaßiv".
     2. Aus der Aufgabenart "luecke" wurde "lücke" — der Generator
        kannte die alte Schreibweise nicht mehr und hat 36 Aufgaben
        stillschweigend übersprungen.
     3. Aus dem Feld "loesung" wurde "lösung" — 53 Lückenaufgaben
        landeten ohne Lösung in der Plattform. Sie ließen sich nicht
        richtig beantworten, egal was man eintippte.

   Die ersten beiden fielen beim Nachzählen auf, der dritte beim
   Nachzählen der Wortdoppelungen. Alle drei hätte diese Prüfung
   sofort gefunden.

   Sie geht jede Aufgabe im ganzen Bestand durch und fragt: Ist
   alles da, was dieser Aufgabentyp zum Funktionieren braucht?

   Aufruf: node bau/pruefe-aufgaben.js
   ============================================================ */
const path = require('path');
const wurzel = path.join(__dirname, '..');

global.window = {};
require(path.join(wurzel, 'uebungen.js'));
['hoer-neu.js', 'hoeren-a1-neu.js', 'aussprache-neu.js', 'hoeren-b2-neu.js',
 'hoeren-c1-neu.js', 'wortschatz-neu.js', 'grammatik-reihenfolge.js',
 'wortschatz-a1-neu.js', 'grammatik-neu.js', 'grammatik-c1-neu.js', 'grammatik-b1-mehr.js',
 'lesen-schreiben-neu.js', 'wortschatz-plus.js', 'themen-zusammenfuehren.js',
 'vielfalt-neu.js'].forEach(f => {
  try { require(path.join(wurzel, f)); } catch (e) {}
});

const leer = v => v === undefined || v === null || v === '';

/* Was jeder Aufgabentyp braucht, damit er im Übungsfenster
   funktioniert. Abgelesen an ueben.js, nicht geraten. */
const PRUEFUNG = {
  choice: e => {
    if (!Array.isArray(e.options) || e.options.length < 2) return 'weniger als zwei Antworten';
    if (typeof e.answer !== 'number') return 'answer ist keine Zahl';
    if (e.answer < 0 || e.answer >= e.options.length) return 'answer zeigt ins Leere';
    if (e.options.some(leer)) return 'eine Antwort ist leer';
    if (new Set(e.options.map(String)).size !== e.options.length) return 'zwei gleiche Antworten';
    if (leer(e.q)) return 'keine Frage';
  },
  lesen: e => {
    if (leer(e.text)) return 'kein Text';
    if (!Array.isArray(e.options) || e.options.length < 2) return 'weniger als zwei Antworten';
    if (typeof e.answer !== 'number' || e.answer >= e.options.length) return 'answer zeigt ins Leere';
    if (leer(e.q)) return 'keine Frage zum Text';
  },
  gap: e => {
    if (leer(e.text)) return 'kein Satz';
    if (!/_{2,}/.test(String(e.text))) return 'keine Lücke im Satz';
    if (leer(e.answer)) return 'KEINE LÖSUNG — nicht lösbar';
  },
  tippen: e => {
    if (leer(e.answer)) return 'KEINE LÖSUNG — nicht lösbar';
    if (leer(e.info) && leer(e.img) && leer(e.emoji)) return 'kein Hinweis, was gesucht ist';
  },
  buchstaben: e => {
    if (leer(e.answer)) return 'KEINE LÖSUNG — nicht lösbar';
    if (String(e.answer).length < 3) return 'zu kurz zum Sortieren';
  },
  order: e => {
    if (leer(e.answer)) return 'KEIN SATZ — nicht lösbar';
    if (String(e.answer).trim().split(/\s+/).length < 3) return 'zu wenige Wörter';
  },
  artikel: e => {
    if (!['der', 'die', 'das'].includes(String(e.answer).toLowerCase())) return 'answer ist kein Artikel';
    if (leer(e.wort) && leer(e.w)) return 'kein Wort';
  },
  match: e => {
    if (!Array.isArray(e.pairs) || e.pairs.length < 2) return 'weniger als zwei Paare';
    if (e.pairs.some(p => leer(p.l) || leer(p.r))) return 'ein Paar ist halb leer';
    const rechts = e.pairs.map(p => String(p.r));
    if (new Set(rechts).size !== rechts.length) return 'zwei gleiche Antworten — nicht eindeutig';
  },
  fehler: e => {
    if (leer(e.satz)) return 'kein Satz';
    if (leer(e.falsch)) return 'kein falsches Wort genannt';
    if (leer(e.richtig)) return 'keine richtige Fassung';
    const nackt = w => String(w).replace(/^[«»„""'(]+|[.,!?;:«»„""')]+$/g, '');
    const woerter = String(e.satz).split(/\s+/);
    const treffer = woerter.map((w, i) => nackt(w) === nackt(e.falsch) ? i : -1).filter(i => i >= 0);
    if (!treffer.length) return '„' + e.falsch + '" steht nicht im Satz';
    if (treffer.length > 1 && typeof e.falschIdx !== 'number') return '„' + e.falsch + '" steht mehrfach, ohne falschIdx';
    if (typeof e.falschIdx === 'number' && nackt(woerter[e.falschIdx] || '') !== nackt(e.falsch))
      return 'falschIdx zeigt auf das falsche Wort';
  },
  listen: e => {
    if (leer(e.audioUrl)) return 'keine Tondatei';
    if (!Array.isArray(e.options) || typeof e.answer !== 'number') return 'keine Antwortmöglichkeiten';
  },
  speak: e => { if (leer(e.word)) return 'kein Wort zum Nachsprechen'; },
  shadow: e => { if (leer(e.text)) return 'kein Text'; },
  schreiben: e => { if (leer(e.auftrag)) return 'kein Auftrag'; },
  karte: e => { if (leer(e.w) && leer(e.wort)) return 'kein Wort auf der Karte'; }
};

const klagen = [];
const zaehler = {};

(global.window.UEBUNGEN.skills || []).forEach(sk => {
  (sk.themes || []).forEach(t => {
    (t.exercises || []).forEach((e, i) => {
      zaehler[e.type] = (zaehler[e.type] || 0) + 1;
      const pruefer = PRUEFUNG[e.type];
      if (!pruefer) {
        klagen.push(sk.id + '/' + t.id + ' #' + i + ': unbekannter Typ „' + e.type + '"');
        return;
      }
      const was = pruefer(e);
      if (was) klagen.push(sk.id + '/' + t.id + ' #' + i + ' (' + e.type + '): ' + was);
    });
  });
});

const gesamt = Object.values(zaehler).reduce((a, b) => a + b, 0);
console.log('\n' + gesamt + ' Aufgaben geprüft:');
Object.keys(zaehler).sort().forEach(k =>
  console.log('   ' + k.padEnd(12) + String(zaehler[k]).padStart(5)));

if (!klagen.length) {
  console.log('\nJede Aufgabe hat, was sie zum Funktionieren braucht.\n');
  process.exit(0);
}
console.log('\nNicht lösbar oder unvollständig — ' + klagen.length + ':');
klagen.slice(0, 40).forEach(k => console.log('  ' + k));
if (klagen.length > 40) console.log('  … und ' + (klagen.length - 40) + ' weitere');
console.log();
process.exit(1);
