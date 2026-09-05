/* ============================================================
   pruefe-json.js — prueft eine Stunden-JSON, bevor sie gebaut wird.

   Aufruf:  node pruefe-json.js stunden/nein-sagen-b1.json

   mach-stunde.js hat eigene Kontrollen und schreibt nichts, wenn
   etwas nicht stimmt. Dieser Pruefer schaut auf das, was der
   Generator nicht sehen kann: Umlaute, die als ue/oe/ae getippt
   wurden, leere Pflichtfelder und Bilder, die zweimal vorkommen.

   Wichtig: geprueft wird nur echter Text, den ein Lernender liest.
   Bildpfade und Dateinamen duerfen und muessen ue/oe/ae haben.
   ============================================================ */
'use strict';
const fs = require('fs');
const path = require('path');

const quelle = process.argv[2];
if (!quelle) { console.error('Aufruf: node pruefe-json.js <datei.json>'); process.exit(1); }
const S = JSON.parse(fs.readFileSync(quelle, 'utf8'));
const wurzel = path.resolve(__dirname, '..');

const meldung = [];
const hinweis = [];

/* ---------- 1 Umlaute ----------
   Diese Schluessel enthalten Technik, keinen Lesetext. */
const technisch = new Set(['bild', 'b', 'datei', 'alt', 'emoji', 'art']);
const worte = [];
(function sammle(o, schluessel) {
  if (typeof o === 'string') {
    if (!technisch.has(schluessel)) worte.push(o);
    return;
  }
  if (Array.isArray(o)) { o.forEach(x => sammle(x, schluessel)); return; }
  if (o && typeof o === 'object') { Object.keys(o).forEach(k => sammle(o[k], k)); }
})(S, null);

/* Woerter, in denen ue/oe/ae echt sind und kein Umlaut sein darf. */
/* Sonderfall: die Vorsilbe „zu“ vor einem Stamm mit e — anzuecken,
   zueinander, zuerkennen. Da treffen z+u+e zufaellig aufeinander.
   Bewusst eng gefasst, damit ein falsch getipptes „zuenden“ haengen bleibt. */
const echt = /^(\w*zu(?:eck|eign|erkenn|erst|einander)\w*|zuerst|dauer\w*|steuer\w*|feuer\w*|abenteuer\w*|museum|poesie|\w*duell\w*|aktuell\w*|individuell\w*|manuell\w*|virtuell\w*|ritual\w*|jubel\w*|neuer\w*|teuer\w*|treue\w*|scheue\w*|\w*bauen|\w*baue|genue?g?\w*|\w*schauen|\w*schaue|\w*graue\w*|\w*blaue\w*|\w*neue\w*|\w*freue\w*|\w*reue\w*|\w*tue|\w*tuen|\w*eventuell\w*|\w*aktuell\w*|\w*sexuell\w*|\w*intellektuell\w*)$/i;

const text = worte.join(' ')
  .replace(/<[^>]*>/g, ' ')          /* Auszeichnung raus */
  .replace(/&[a-z#0-9]+;/gi, ' ');   /* Entitaeten raus */

/* Die Buchstaben vor ue/oe/ae werden auch gross geprueft — sonst wird
   „Quelle“ gemeldet, weil das kleine q nicht auf das grosse Q passt. */
const verdacht = [...new Set(text
  .match(/\b[A-Za-zÄÖÜäöüß]*(?:(?<![aeqAEQ])ue|(?<![aouAOU])oe|(?<![aouAOU])ae)[A-Za-zÄÖÜäöüß]*\b/g) || [])]
  .filter(w => !echt.test(w));

verdacht.forEach(w => meldung.push('Umlaut? „' + w + '“ — steht ue/oe/ae statt ü/ö/ä?'));

/* ---------- 2 Pflichtfelder ---------- */
['datei', 'eyebrow', 'titel', 'stufe', 'untertitel', 'fuss', 'einstieg', 'wortschatz', 'daten']
  .forEach(k => { if (!S[k]) meldung.push('Feld fehlt: ' + k); });

if (S.wortschatz && S.wortschatz.karten) {
  S.wortschatz.karten.forEach((k, i) => {
    ['wort', 'bsp', 'tipp'].forEach(f => {
      if (!k[f]) meldung.push('Wortschatzkarte ' + (i + 1) + ': ' + f + ' ist leer');
    });
    /* Der Artikel steht im Feld art und wird davorgesetzt. Steht er
       zusaetzlich im Wort, liest der Schueler „die die Frist“. */
    if (k.art && /^(der|die|das)\s/i.test(k.wort || ''))
      meldung.push('Wortschatzkarte ' + (i + 1) + ' („' + k.wort + '“): Artikel doppelt — '
        + 'art="' + k.art + '" und das Wort faengt auch mit einem Artikel an, '
        + 'auf der Seite steht dann „' + k.art + ' ' + k.wort + '“');
    /* Umgekehrt: ein Nomen ohne art-Feld erscheint ohne Artikel. Das ist bei
       ganzen Saetzen gewollt („Das geht.“), bei einem einzelnen Nomen nicht. */
    if (!k.art && !k.emoji && /^[A-ZÄÖÜ][a-zäöüß]+$/.test((k.wort || '').trim()))
      hinweis.push('Wortschatzkarte ' + (i + 1) + ' („' + k.wort + '“): sieht aus wie ein '
        + 'Nomen ohne Artikel — fehlt das Feld art?');
  });
}

/* ---------- 2a Zieldatei: Endung nicht vergessen ----------
   mach-stunde.js schreibt genau das, was in datei steht. Fehlt das
   .html, entsteht eine Datei ohne Endung: der Browser zeigt sie nicht
   an, und der Link im Klassenraum geht ins Leere. Der Generator
   meldet nichts, weil er den Namen nicht bewertet. */
if (S.datei && !/\.html$/.test(S.datei))
  meldung.push('datei endet nicht auf .html: „' + S.datei + '“ — die Seite '
    + 'entsteht dann ohne Endung und wird im Browser nicht angezeigt');

/* ---------- 2b Kopfzeile: kein haengendes Trennzeichen ----------
   Die Kopfzeile wird unveraendert ausgegeben. Endet sie auf „· “,
   steht auf der fertigen Seite ein Trennpunkt ohne alles dahinter —
   sichtbar, aber leicht zu uebersehen. Das ist 24 Seiten lang
   passiert, bevor es jemandem aufgefallen ist. */
if (S.eyebrow && /[·•\-–—]\s*$/.test(S.eyebrow))
  meldung.push('Kopfzeile endet mit einem Trennzeichen ohne Text dahinter: „'
    + S.eyebrow + '“ — auf der Seite steht dann ein Punkt und danach nichts');

/* ---------- 3 Bilder: doppelt und vorhanden ---------- */
const bilder = [];
(function sammleBilder(o) {
  if (Array.isArray(o)) return o.forEach(sammleBilder);
  if (o && typeof o === 'object') {
    if (typeof o.bild === 'string') bilder.push(o.bild);
    if (typeof o.b === 'string' && /\.(webp|jpg|png)$/.test(o.b)) bilder.push(o.b);
    Object.keys(o).forEach(k => sammleBilder(o[k]));
  }
})(S);
bilder.forEach(p => {
  if (!fs.existsSync(path.join(wurzel, p))) meldung.push('Bild fehlt: ' + p);
});
/* Wiederverwendung ueber die Abschnitte hinweg ist gewollt — dasselbe Bild
   bei Wortschatz, Dialog und 90 Sekunden hilft beim Wiedererkennen.
   Zweimal dasselbe Bild im selben Wortschatzraster ist dagegen ein Fehler. */
const wsBilder = ((S.wortschatz && S.wortschatz.karten) || []).map(k => k.bild).filter(Boolean);
const wsZaehler = {};
wsBilder.forEach(p => { wsZaehler[p] = (wsZaehler[p] || 0) + 1; });
Object.keys(wsZaehler).filter(p => wsZaehler[p] > 1)
  .forEach(p => meldung.push('Wortschatz: ' + p + ' steht auf ' + wsZaehler[p] + ' Karten'));

/* ---------- 4 Umfang: reicht der Stoff fuer 60 Minuten? ---------- */
const d = S.daten || {};
const soll = { quiz: 8, gap: 8, sk: 8, w90: 8 };
Object.keys(soll).forEach(k => {
  const n = (d[k] || []).length;
  if (n && n < soll[k]) hinweis.push(k + ': nur ' + n + ' Stück, geplant sind ' + soll[k]);
});
if (S.wortschatz && (S.wortschatz.karten || []).length < 10)
  hinweis.push('Wortschatz: nur ' + S.wortschatz.karten.length + ' Karten, geplant sind 10–12');

/* ---------- 4b Luecken: stimmt die Anzahl? ----------
   Im Lueckentext braucht jeder Satz genau eine Luecke. Und in der
   Geschichte muss die Zahl der ___ zur Zahl der Loesungen passen —
   sonst rutschen alle Antworten um eine Stelle und der Schueler
   bekommt fuer richtige Eingaben ein Kreuz. */
const zaehleLuecken = s => ((s || '').match(/___/g) || []).length;

(d.gap || []).forEach((g, i) => {
  const n = zaehleLuecken(g.t);
  if (n !== 1)
    meldung.push('Lückentext ' + (i + 1) + ': ' + n + ' Lücken im Satz, genau eine ist nötig — „'
      + (g.t || '').slice(0, 60) + '“');
  if (g.a && Array.isArray(g.o) && g.o.indexOf(g.a) < 0)
    meldung.push('Lückentext ' + (i + 1) + ': die Lösung „' + g.a + '“ steht nicht in der Auswahl');
});

if (d.gstory) {
  const n = zaehleLuecken(d.gstory.t);
  const loesungen = d.gstory.a || [];
  if (n !== loesungen.length)
    meldung.push('Geschichte: ' + n + ' Lücken im Text, aber ' + loesungen.length
      + ' Lösungen — die Antworten verschieben sich sonst um eine Stelle');
  const auswahl = d.gstory.o || [];
  const doppelt = auswahl.filter((w, i) => auswahl.indexOf(w) !== i);
  if (doppelt.length)
    hinweis.push('Geschichte: „' + [...new Set(doppelt)].join('“, „')
      + '“ steht doppelt in der Auswahl — der Schüler sieht dasselbe Wort zweimal');
  loesungen.forEach((l, i) => {
    const wort = Array.isArray(l) ? l[0] : l;
    if (auswahl.indexOf(wort) < 0)
      meldung.push('Geschichte, Lücke ' + (i + 1) + ': die Lösung „' + wort
        + '“ steht nicht in der Auswahl');
  });
}

/* ---------- 5 Beide Niveaus wirklich gefuellt? ---------- */
if (S.niveau) {
  const tiefen = JSON.stringify(S);
  ['"a2"', '"b1"'].forEach(k => {
    if (tiefen.indexOf(k) < 0) meldung.push('Umschalter an, aber ' + k + ' kommt nirgends vor');
  });
}

/* ---------- Ausgabe ---------- */
if (hinweis.length) {
  console.log('Hinweise (kein Fehler):');
  hinweis.forEach(h => console.log('  · ' + h));
}
if (meldung.length) {
  console.error('Nicht in Ordnung:');
  meldung.forEach(m => console.error('  · ' + m));
  process.exit(1);
}
console.log('sauber: ' + path.basename(quelle) + '  (' + worte.length + ' Textfelder, ' +
  bilder.length + ' Bildstellen)');
