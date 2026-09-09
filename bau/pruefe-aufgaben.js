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

   Seit dem 09.09. prüft sie eine zweite Sache: nicht nur, ob eine
   Aufgabe vollständig ist, sondern ob sie überhaupt eine Aufgabe
   ist. Anlass war ein Generator, der aus Wahlfragen Fehlersuchen
   baute. Elf davon zeigten einen völlig richtigen Satz:

     „Ich freue mich, weil du kommst."   — statt „dass"
     „Wann wird dieses Haus gebaut?"     — statt „wurde"

   Beides ist tadelloses Deutsch. Wer da ein Wort antippen soll,
   sucht einen Fehler, den es nicht gibt. Aufgefallen ist das beim
   Nachlesen von Hand — genau das soll nicht nötig sein.

   Der Unterschied ist benennbar: „weil" statt „dass" ist ein
   anderes Wort, „großer" statt „großen" ist dieselbe Form falsch
   gebeugt. Nur das Zweite ist sicher ein Fehler. Diese Regel steht
   jetzt unten in ZWEIFEL und greift bei jedem Bestand, nicht nur
   bei dem einen Generator.

   Aufruf: node bau/pruefe-aufgaben.js
   ============================================================ */
const path = require('path');
const wurzel = path.join(__dirname, '..');

global.window = {};
require(path.join(wurzel, 'uebungen.js'));
['hoer-neu.js', 'hoeren-a1-neu.js', 'aussprache-neu.js', 'hoeren-b2-neu.js',
 'hoeren-c1-neu.js', 'wortschatz-neu.js', 'grammatik-reihenfolge.js',
 'wortschatz-a1-neu.js', 'grammatik-neu.js', 'grammatik-c1-neu.js', 'grammatik-b1-mehr.js', 'grammatik-b2c1-mehr.js',
 'lesen-schreiben-neu.js', 'wortschatz-plus.js', 'themen-zusammenfuehren.js',
 'vielfalt-neu.js', 'grammatik-vielfalt.js'].forEach(f => {
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

/* ---------- Zweite Stufe: ist das überhaupt eine Aufgabe? ----------
   Hier geht es nicht mehr um fehlende Felder, sondern um Aufgaben,
   die vollständig aussehen und trotzdem nicht funktionieren. */

const nackt = w => String(w).replace(/^[«»„“”"'(]+|[.,!?;:«»„“”"')]+$/g, '');
const flach = w => nackt(w).toLowerCase().replace(/\u00ad/g, '');

/* Zwei Wörter sind Formen desselben Wortes, wenn sie auf demselben
   Stamm sitzen: groß-er / groß-en, de-s / de-r, alt-e / alt-er. */
function formVerwandt(a, b) {
  a = String(a || '').toLowerCase(); b = String(b || '').toLowerCase();
  if (!a || !b || a === b) return false;
  let i = 0; const kurz = Math.min(a.length, b.length);
  while (i < kurz && a[i] === b[i]) i++;
  return i >= 2 && i >= kurz * 0.6;
}

/* Steht in richtig nur ein Wort, ist die Sache klar. Steht dort der
   ganze Satz, wird er Wort für Wort gegen den fehlerhaften gelegt.
   Nur wenn sich genau eine Stelle unterscheidet, lässt sich sagen,
   welches Wort gemeint war — sonst gibt diese Prüfung kein Urteil ab
   und schweigt lieber, statt falschen Alarm zu schlagen. */
function richtigesWort(e) {
  const r = String(e.richtig || '').trim();
  if (!r) return null;
  if (!/\s/.test(r)) return r;
  const a = String(e.satz || '').trim().split(/\s+/);
  const b = r.split(/\s+/);
  if (a.length !== b.length) return null;
  const anders = [];
  for (let i = 0; i < a.length; i++) if (flach(a[i]) !== flach(b[i])) anders.push(i);
  if (anders.length !== 1) return null;
  if (flach(a[anders[0]]) !== flach(e.falsch)) return null;
  return b[anders[0]];
}

const ZWEIFEL = {
  fehler: e => {
    if (String(e.satz).trim().split(/\s+/).length < 4) return 'zu kurz: Raten ist schneller als Lesen';
    /* Im Feld richtig steht mal nur das richtige Wort, mal der ganze
       berichtigte Satz. Beides ist erlaubt — für den Vergleich muss
       daraus erst das eine Wort werden, um das es geht. */
    const gegen = richtigesWort(e);
    if (!gegen) return;
    if (flach(e.falsch) === flach(gegen)) return 'falsch und richtig sind dasselbe Wort';
    /* Die Stammregel ist bewusst streng und deshalb nur für maschinell
       erzeugte Aufgaben gedacht. Von Hand geschriebene Fehlersuchen
       arbeiten oft mit Wortpaaren, die keinen gemeinsamen Stamm haben
       und trotzdem eindeutig falsch sind: bin/habe, Bruders/Brüder,
       er/ihn. Auf den ganzen Bestand losgelassen meldete die Regel 248
       Aufgaben, von denen fast alle in Ordnung waren — eine Prüfung,
       die so oft falschen Alarm schlägt, liest bald niemand mehr. */
    if (!e.gen) return;
    if (!formVerwandt(nackt(e.falsch), nackt(gegen)))
      return 'anderes Wort statt falscher Form („' + e.falsch + '" ↔ „' + gegen +
             '") — der Satz könnte richtig sein';
  },
  match: e => {
    const links = e.pairs.map(p => flach(p.l));
    if (new Set(links).size !== links.length) return 'zwei gleiche Zeilen links';
    for (const p of e.pairs) {
      const gefuellt = String(p.l).replace(/_{2,}/, String(p.r)).split(/\s+/).map(flach);
      for (let i = 0; i + 1 < gefuellt.length; i++)
        if (gefuellt[i] && gefuellt[i] === gefuellt[i + 1])
          return 'eingesetzt entsteht eine Wortdoppelung: „' + p.l + '" + „' + p.r + '"';
    }
  },
  choice: e => optionenZweifel(e),
  lesen: e => optionenZweifel(e),
  listen: e => optionenZweifel(e)
};

/* Zwei Antworten, die sich nur in Groß- und Kleinschreibung oder in
   einem weichen Trennstrich unterscheiden, sind für den Lernenden
   dieselbe Antwort — dann gibt es zwei richtige Lösungen. */
function optionenZweifel(e) {
  if (!Array.isArray(e.options)) return;
  /* Gross- und Kleinschreibung bleibt hier stehen, anders als sonst:
     bei der Wortbetonung ist sie der ganze Inhalt der Antwort —
     "AR-beit" gegen "ar-BEIT" sind zwei verschiedene Antworten. */
  const flachOpt = e.options.map(o => String(o).replace(/\u00ad/g, '').replace(/\s+/g, ' ').trim());
  if (new Set(flachOpt).size !== flachOpt.length) return 'zwei Antworten sind praktisch gleich';
  if (e.options.some(o => /\u00ad/.test(String(o)))) return 'weicher Trennstrich in einer Antwort';
}

const klagen = [];
const zweifel = [];
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
      if (was) { klagen.push(sk.id + '/' + t.id + ' #' + i + ' (' + e.type + '): ' + was); return; }
      const zw = ZWEIFEL[e.type] && ZWEIFEL[e.type](e);
      if (zw) zweifel.push(sk.id + '/' + t.id + ' #' + i + ' (' + e.type + '): ' + zw);
    });
  });
});

const gesamt = Object.values(zaehler).reduce((a, b) => a + b, 0);
console.log('\n' + gesamt + ' Aufgaben geprüft:');
Object.keys(zaehler).sort().forEach(k =>
  console.log('   ' + k.padEnd(12) + String(zaehler[k]).padStart(5)));

if (klagen.length) {
  console.log('\nNicht lösbar oder unvollständig — ' + klagen.length + ':');
  klagen.slice(0, 40).forEach(k => console.log('  ' + k));
  if (klagen.length > 40) console.log('  … und ' + (klagen.length - 40) + ' weitere');
} else {
  console.log('\nJede Aufgabe hat, was sie zum Funktionieren braucht.');
}

if (zweifel.length) {
  console.log('\nVollständig, aber vermutlich keine Aufgabe — ' + zweifel.length + ':');
  zweifel.slice(0, 40).forEach(k => console.log('  ' + k));
  if (zweifel.length > 40) console.log('  … und ' + (zweifel.length - 40) + ' weitere');
} else {
  console.log('Und jede Aufgabe hat auch eine Lösung, die stimmt.');
}
console.log();
process.exit(klagen.length + zweifel.length ? 1 : 0);
