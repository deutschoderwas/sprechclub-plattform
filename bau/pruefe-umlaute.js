/* ============================================================
   pruefe-umlaute.js — steht überall ä, ö, ü, ß?

   In den Werkzeugen unter bau/ habe ich lange ae, oe, ue und ss
   geschrieben, um mir Ärger mit der Zeichenkodierung beim Weg
   über die Bridge zu ersparen. In Kommentaren ist das nur hässlich.
   Wenn es aber in einen Text rutscht, den ein Lernender sieht,
   ist es schlimmer als hässlich: Es ist falsches Deutsch, und
   ausgerechnet auf einer Seite, die Deutsch beibringt.

   Diese Prüfung lädt alle Daten so, wie die Seite sie lädt, und
   sieht jeden sichtbaren String durch. Sie trennt dabei:

     Inhalt   — was im Übungsfenster steht. Muss stimmen.
     Quelltext — Kommentare und Konsolenausgaben in bau/. Sollte
                 stimmen, tut aber niemandem weh.

   Aufruf: node bau/pruefe-umlaute.js
   ============================================================ */
const fs = require('fs');
const path = require('path');
const wurzel = path.join(__dirname, '..');

/* Buchstabenfolgen, die im Deutschen praktisch nur vorkommen, wenn
   jemand einen Umlaut ersetzt hat.

   Drei Muster standen hier zuerst und mussten wieder raus, weil sie
   richtiges Deutsch angezeigt haben:
     muss(t|te|ten)  — „du musst", „ich musste" sind korrekt
     druck(en)       — „drucken" ist kein ersetztes „drücken"
     f[uü]?ue?r      — traf auch „für" selbst
   Genauso dürfen „Aussage", „Feuer", „teuer", „genauer" und „dass"
   nicht anschlagen. */
const MUSTER = [
  /\bfuer\b/i, /ueber/i, /koenn/i, /muess/i,
  /\bwaer(e|en|st|t)\b/i, /\bhoer(en|t|st|e)?\b/i, /loesung/i,
  /woerter/i, /groess/i, /zurueck/i, /natuerlich/i, /moeglich/i, /schoen/i,
  /spaet/i, /naechst/i, /aehnlich/i, /erklaer/i, /pruef/i, /ueblich/i,
  /fuehl/i, /fuehr/i, /\btuer\b/i, /buero/i, /gruen/i, /gruend/i,
  /stueck/i, /glueck/i, /kueche/i, /buech/i, /laeuft/i, /haeuf/i, /taegl/i,
  /jaehr/i, /maenn/i, /laend/i, /staend/i, /haett/i, /waehl/i, /waehr/i,
  /zaehl/i, /erzaehl/i, /saetz/i, /plaetz/i, /\bgross\b/i, /groesse/i,
  /heisst/i, /\bweiss\b/i, /\bfuss/i, /\bgruss/i, /strasse/i, /massnahme/i,
  /schliess/i, /verhaeltnis/i, /geschaeft/i,
  /\bkuerz/i, /\bhoeh/i, /\bnaeh/i, /\bfaell/i, /\bgefaell/i, /\bverlaeng/i
];

function findet(text) {
  const t = String(text);
  for (const re of MUSTER) if (re.test(t)) return t.match(re)[0];
  return null;
}

/* ---------- 1. Der Inhalt, den ein Lernender sieht ---------- */
global.window = {};
const DATEN = ['uebungen.js', 'hoer-neu.js', 'hoeren-a1-neu.js', 'aussprache-neu.js',
  'hoeren-b2-neu.js', 'hoeren-c1-neu.js', 'wortschatz-neu.js',
  'grammatik-reihenfolge.js', 'wortschatz-a1-neu.js', 'grammatik-neu.js',
  'grammatik-c1-neu.js', 'lesen-schreiben-neu.js', 'wortschatz-plus.js',
  'themen-zusammenfuehren.js', 'vielfalt-neu.js'];
DATEN.forEach(f => { try { require(path.join(wurzel, f)); } catch (e) {} });

const SICHTBAR = ['q', 'text', 'satz', 's2', 'intro', 'answer', 'explain', 'hint',
  'auftrag', 'muster', 'richtig', 'tipp', 'info', 'word', 'wort', 'transcript',
  'de', 'title', 'label', 'name'];

const imInhalt = [];
function sieh(wo, obj) {
  if (!obj || typeof obj !== 'object') return;
  SICHTBAR.forEach(k => {
    if (typeof obj[k] !== 'string') return;
    const t = findet(obj[k]);
    if (t) imInhalt.push({ wo, feld: k, treffer: t, text: obj[k].slice(0, 90) });
  });
  (obj.options || []).forEach((o, i) => {
    const t = findet(o);
    if (t) imInhalt.push({ wo, feld: 'options[' + i + ']', treffer: t, text: String(o).slice(0, 90) });
  });
  (obj.pairs || []).forEach((p, i) => {
    ['l', 'r'].forEach(s => {
      const t = findet(p[s]);
      if (t) imInhalt.push({ wo, feld: 'pairs[' + i + '].' + s, treffer: t, text: String(p[s]).slice(0, 90) });
    });
  });
}

((global.window.UEBUNGEN || {}).skills || []).forEach(sk => {
  sieh(sk.id, sk);
  (sk.themes || []).forEach(t => {
    sieh(sk.id + '/' + t.id, t);
    (t.words || []).forEach(w => sieh(sk.id + '/' + t.id + ' [Wort]', w));
    (t.exercises || []).forEach((e, i) => sieh(sk.id + '/' + t.id + ' #' + i + ' ' + e.type, e));
  });
});

console.log('\n═══ Im Inhalt, den Lernende sehen ═══');
if (!imInhalt.length) console.log('  nichts — überall stehen die richtigen Umlaute');
else {
  imInhalt.slice(0, 40).forEach(x =>
    console.log('  ' + x.wo.padEnd(38) + x.feld.padEnd(14) + '„' + x.treffer + '"   ' + x.text));
  console.log('  (' + imInhalt.length + ' Stellen)');
}

/* ---------- 2. Quelltext: Kommentare und Konsolenausgaben ---------- */
function dateienUnter(ordner) {
  const raus = [];
  fs.readdirSync(ordner, { withFileTypes: true }).forEach(e => {
    if (e.name === 'node_modules' || e.name.startsWith('.')) return;   /* auch .stand-erzeugtes.json */
    const voll = path.join(ordner, e.name);
    if (e.isDirectory()) raus.push(...dateienUnter(voll));
    else if (/\.(js|html|json)$/.test(e.name)) raus.push(voll);
  });
  return raus;
}

/* Dateinamen bleiben, wie sie heißen: uebungen.js, hoeren-b2-neu.js,
   pruefe-niveau.js. Wenn ein Treffer nur Teil eines solchen Namens ist,
   ist er kein Fund, sondern ein Verweis — sonst meldet die Prüfung
   ewig dieselben Zeilen und man hört auf hinzusehen. */
const NAMEN = /[\w-]*(uebungen|ueben|hoer|pruef|zusammenfuehr|aussprache)[\w-]*\.(js|json|py|html)|\b(hoeren-[abc][12]|mach-hoeren|v-ueben|ubZur)\b/;

const imQuelltext = {};
dateienUnter(path.join(wurzel, 'bau')).forEach(f => {
  const zeilen = fs.readFileSync(f, 'utf8').split('\n');
  zeilen.forEach((z, i) => {
    const t = findet(z);
    /* Nennt die Zeile einen Dateinamen? Dann ist der Treffer ein
       Verweis, kein Fund. */
    if (t && NAMEN.test(z)) return;
    if (t) {
      const k = path.relative(wurzel, f);
      (imQuelltext[k] = imQuelltext[k] || []).push({ zeile: i + 1, treffer: t, text: z.trim().slice(0, 80) });
    }
  });
});

console.log('\n═══ In den Werkzeugen unter bau/ ═══');
console.log('(Was hier steht, sind fast nur Dateinamen — die heißen nun mal');
console.log(' uebungen.js und hoeren-b2-neu.js. Entscheidend ist der erste');
console.log(' Abschnitt: was Lernende zu sehen bekommen.)');
const dateien = Object.keys(imQuelltext).sort();
if (!dateien.length) console.log('  nichts');
else {
  dateien.forEach(d => console.log('  ' + d.padEnd(34) + imQuelltext[d].length + ' Zeilen'));
  console.log('  (' + dateien.reduce((n, d) => n + imQuelltext[d].length, 0) + ' Zeilen in ' + dateien.length + ' Dateien)');
}
console.log();
process.exit(imInhalt.length ? 1 : 0);
