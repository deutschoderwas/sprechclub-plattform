/* ============================================================
   pruefe-grammatik-seite.js — prüft grammatik-seiten.json,
   bevor daraus Seiten werden.

   Aufruf:  node bau/pruefe-grammatik-seite.js
            node bau/pruefe-grammatik-seite.js modalverben

   Der Generator schreibt nichts, wenn ein Pflichtfeld fehlt. Dieser
   Prüfer schaut auf das, was der Generator nicht sehen kann:
   Umlaute, die als ue/oe/ae getippt wurden, Lösungen, die gar nicht
   zur Auswahl stehen, Quizfragen ohne gültige Antwort und Bilder,
   die es nicht gibt.
   ============================================================ */
'use strict';
const fs = require('fs');
const path = require('path');

const WURZEL = path.resolve(__dirname, '..');
const alle = JSON.parse(fs.readFileSync(path.join(__dirname, 'grammatik-seiten.json'), 'utf8'));

/* Woerter, in denen ue/oe/ae echt sind und kein Umlaut sein darf.
   Gleiche Liste wie in pruefe-json.js — wenn dort etwas dazukommt,
   gehoert es auch hierher. */
const echt = /^(\w*zu(?:eck|eign|erkenn|erst|einander)\w*|zuerst|dauer\w*|steuer\w*|feuer\w*|abenteuer\w*|museum|poesie|\w*duell\w*|aktuell\w*|individuell\w*|manuell\w*|virtuell\w*|ritual\w*|jubel\w*|neuer\w*|teuer\w*|treue\w*|scheue\w*|\w*bauen|\w*baue|genue?g?\w*|\w*schauen|\w*schaue|\w*graue\w*|\w*blaue\w*|\w*neue\w*|\w*freue\w*|\w*reue\w*|\w*tue|\w*tuen|\w*eventuell\w*|\w*sexuell\w*|\w*intellektuell\w*)$/i;

/* Diese Schluessel enthalten Technik, keinen Lesetext. */
const technisch = new Set(['datei', 'bild', 'd', 'alt', 'video', 'emoji', 'art', 'id']);

const nurEines = process.argv[2];
const ids = nurEines ? [nurEines] : Object.keys(alle);
let fehlerGesamt = 0;

ids.forEach(id => {
  const s = alle[id];
  const meldung = [];
  const hinweis = [];
  if (!s) { console.error('Unbekanntes Thema: ' + id); fehlerGesamt++; return; }

  /* ---------- 1 Umlaute ---------- */
  const worte = [];
  (function sammle(o, schluessel) {
    if (typeof o === 'string') { if (!technisch.has(schluessel)) worte.push(o); return; }
    if (Array.isArray(o)) { o.forEach(x => sammle(x, schluessel)); return; }
    if (o && typeof o === 'object') Object.keys(o).forEach(k => sammle(o[k], k));
  })(s, null);

  const text = worte.join(' ').replace(/<[^>]*>/g, ' ').replace(/&[a-z#0-9]+;/gi, ' ');
  [...new Set(text.match(
    /\b[A-Za-zÄÖÜäöüß]*(?:(?<![aeqAEQ])ue|(?<![aouAOU])oe|(?<![aouAOU])ae)[A-Za-zÄÖÜäöüß]*\b/g) || [])]
    .filter(w => !echt.test(w))
    .forEach(w => meldung.push('Umlaut? „' + w + '“ — steht ue/oe/ae statt ü/ö/ä?'));

  /* ---------- 2 Quiz: zeigt die Antwort auf eine echte Option? ---------- */
  ((s.quiz && s.quiz.fragen) || []).forEach((f, i) => {
    const n = (f.o || []).length;
    if (n < 2) meldung.push('Quizfrage ' + (i + 1) + ': nur ' + n + ' Antwortmöglichkeit(en)');
    if (typeof f.c !== 'number' || f.c < 0 || f.c >= n)
      meldung.push('Quizfrage ' + (i + 1) + ': c=' + f.c + ' zeigt auf keine der ' + n + ' Optionen');
    if (!f.e) hinweis.push('Quizfrage ' + (i + 1) + ': keine Erklärung — der Schüler erfährt nicht, warum');
    const doppelt = (f.o || []).filter((o, k) => (f.o || []).indexOf(o) !== k);
    if (doppelt.length) meldung.push('Quizfrage ' + (i + 1) + ': Option „' + doppelt[0] + '“ steht zweimal');
  });

  /* ---------- 3 Lückentext ---------- */
  ((s.luecke && s.luecke.saetze) || []).forEach((z, i) => {
    const n = ((z.t || '').match(/___/g) || []).length;
    if (n !== 1)
      meldung.push('Lücke ' + (i + 1) + ': ' + n + ' Lücken im Satz, genau eine ist nötig — „'
        + (z.t || '').slice(0, 60) + '“');
    if (!(z.o || []).includes(z.a))
      meldung.push('Lücke ' + (i + 1) + ': die Lösung „' + z.a + '“ steht nicht in der Auswahl');
    const doppelt = (z.o || []).filter((o, k) => (z.o || []).indexOf(o) !== k);
    if (doppelt.length) meldung.push('Lücke ' + (i + 1) + ': Option „' + doppelt[0] + '“ steht zweimal');
    if ((z.o || []).length < 2) meldung.push('Lücke ' + (i + 1) + ': zu wenige Optionen');
  });

  /* ---------- 4 Zuordnen ---------- */
  const paare = (s.zuordnen && s.zuordnen.paare) || [];
  if (paare.length < 3) hinweis.push('Zuordnen: nur ' + paare.length + ' Paare, vier sind schöner');
  paare.forEach((p, i) => {
    if (!p.a || !p.b) meldung.push('Zuordnen-Paar ' + (i + 1) + ': eine Seite ist leer');
  });
  /* Zwei gleiche rechte Haelften machen die Aufgabe unloesbar. */
  const rechts = paare.map(p => p.b);
  const dopR = rechts.filter((r, i) => rechts.indexOf(r) !== i);
  if (dopR.length) meldung.push('Zuordnen: „' + dopR[0] + '“ steht rechts zweimal — nicht lösbar');

  /* ---------- 5 Bilder ---------- */
  const bilder = [];
  (function sammleBilder(o) {
    if (Array.isArray(o)) return o.forEach(sammleBilder);
    if (o && typeof o === 'object') {
      if (typeof o.bild === 'string') bilder.push(o.bild);
      if (typeof o.d === 'string' && /\.(webp|jpg|png)$/.test(o.d)) bilder.push(o.d);
      Object.keys(o).forEach(k => sammleBilder(o[k]));
    }
  })(s);
  bilder.forEach(p => {
    if (!fs.existsSync(path.join(WURZEL, p))) meldung.push('Bild fehlt: ' + p);
  });
  if (!bilder.length) hinweis.push('kein einziges Bild — die Seite wäre reine Textwüste');

  /* ---------- 6 Umfang ---------- */
  if (((s.quiz && s.quiz.fragen) || []).length < 5)
    hinweis.push('Quiz: nur ' + ((s.quiz && s.quiz.fragen) || []).length + ' Fragen, fünf sind geplant');
  if (((s.luecke && s.luecke.saetze) || []).length < 5)
    hinweis.push('Lückentext: nur ' + ((s.luecke && s.luecke.saetze) || []).length + ' Sätze, fünf sind geplant');
  if (((s.sprechen && s.sprechen.karten) || []).length < 6)
    hinweis.push('Sprechkarten: nur ' + ((s.sprechen && s.sprechen.karten) || []).length + ', acht sind geplant');

  /* ---------- 7 Dateiname passt zur Stufe? ---------- */
  const stufe = String(s.stufe || '').toLowerCase().replace(/[^a-z0-9]/g, '');
  if (s.datei && stufe && !s.datei.toLowerCase().includes(stufe.slice(0, 2)))
    hinweis.push('Dateiname „' + s.datei + '“ nennt die Stufe ' + s.stufe + ' nicht');

  /* ---------- Ausgabe ---------- */
  if (hinweis.length) {
    console.log(id + ' — Hinweise (kein Fehler):');
    hinweis.forEach(h => console.log('  · ' + h));
  }
  if (meldung.length) {
    console.error(id + ' — NICHT IN ORDNUNG:');
    meldung.forEach(m => console.error('  · ' + m));
    fehlerGesamt += meldung.length;
  } else {
    console.log('sauber: ' + id + '  (' + worte.length + ' Textfelder, ' + bilder.length + ' Bildstellen)');
  }
});

if (fehlerGesamt) {
  console.error('\n' + fehlerGesamt + ' Fehler — bitte erst beheben, dann bauen.');
  process.exit(1);
}
