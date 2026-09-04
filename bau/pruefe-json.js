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
const echt = /^(\w*zu(?:eck|eign|erkenn|erst|einander)\w*|zuerst|dauer\w*|steuer\w*|feuer\w*|abenteuer\w*|museum|poesie|\w*duell\w*|aktuell\w*|individuell\w*|manuell\w*|virtuell\w*|ritual\w*|jubel\w*|neuer\w*|teuer\w*|treue\w*|scheue\w*|\w*bauen|\w*baue|genue?g?\w*|\w*schauen|\w*schaue|\w*graue\w*|\w*blaue\w*|\w*neue\w*|\w*freue\w*|\w*reue\w*)$/i;

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
  });
}

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
