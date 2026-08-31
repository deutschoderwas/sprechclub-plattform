/* ============================================================
   mach-vielfalt.js — gegen Themen, die nur aus Anklicken bestehen

   Die Niveaupruefung hat 85 Themen gemeldet, in denen ueber 60 %
   der Aufgaben dieselbe Form haben. Im B1-Wortschatz sind es bis
   zu 92 % Wahlfragen: 44-mal hintereinander „Was bedeutet X?".
   Wer ein Wort nur wiedererkennt, kann es noch lange nicht sagen
   oder schreiben.

   Zwei Sachen sind dabei aufgefallen:

   1. Die Rundenlogik in ueben.js sucht laengst nach Abwechslung.
      Sie geht die Liste ['tippen','buchstaben','artikel','order',
      'gap','choice'] durch und holt zu einem Wort, das man schon
      erkannt hat, bewusst eine Form, die mehr verlangt. Sie findet
      nur nichts, weil es diese Aufgaben in den Themen nicht gibt.
   2. Die Formen 'buchstaben' und 'artikel' sind in ueben.js fertig
      gebaut und kommen in den Daten kein einziges Mal vor.

   Dieses Skript erzeugt die fehlenden Formen aus dem, was schon
   da steht — keine erfundenen Inhalte, nur andere Zugriffe auf
   dieselben Woerter und Saetze:

     Wortschatz (aus words + den Bildern der Wahlfragen)
       tippen      Bedeutung steht da, das Wort muss man schreiben
       buchstaben  Buchstabensalat — Rechtschreibung
       artikel     der/die/das zum Nomen
       speak       nachsprechen, mit Bild

     Grammatik (aus den Lueckensaetzen)
       order       derselbe Satz, jetzt selbst gebaut
       speak       den fertigen Satz einmal laut sagen

   Sicherheitsregeln, damit nichts Unloesbares entsteht, stehen
   jeweils an der Stelle, wo sie greifen.

   Aufruf:  node bau/mach-vielfalt.js
   Ergebnis: vielfalt-neu.js  (haengt sich an window.UEBUNGEN an)
   ============================================================ */
const fs = require('fs');
const path = require('path');
const wurzel = path.join(__dirname, '..');

global.window = {};
require(path.join(wurzel, 'uebungen.js'));
['hoer-neu.js', 'hoeren-a1-neu.js', 'aussprache-neu.js', 'hoeren-b2-neu.js',
 'hoeren-c1-neu.js', 'wortschatz-neu.js', 'grammatik-reihenfolge.js',
 'wortschatz-a1-neu.js', 'grammatik-neu.js', 'grammatik-c1-neu.js',
 'lesen-schreiben-neu.js'].forEach(f => {
  try { require(path.join(wurzel, f)); } catch (e) {}
});
const U = global.window.UEBUNGEN;

/* ---------- kleine Helfer ---------- */
const ARTIKEL = ['der', 'die', 'das'];

function ohneArtikel(w) {
  return String(w || '').replace(/^(der|die|das)\s+/i, '').trim();
}
function artikelVon(w) {
  const m = String(w || '').match(/^(der|die|das)\s+/i);
  return m ? m[1].toLowerCase() : null;
}
function woerterZahl(s) {
  return String(s || '').trim().split(/\s+/).filter(Boolean).length;
}

/* Aussprache-Stolpersteine: daran erkennt man Woerter, bei denen
   Nachsprechen wirklich etwas bringt. */
const STOLPER = /[äöüß]|sch|ch|tz|pf|qu|sp|st|ie|eu|äu|ig\b|tion|[^aeiouäöü]{3}/i;

/* Zum Satzbau und den zwei richtigen Reihenfolgen:
   Im Deutschen ist das Mittelfeld beweglich — „dürfen vorne nicht
   sitzen" ist so richtig wie „dürfen nicht vorne sitzen". Das war
   zuerst ein Grund, solche Saetze gar nicht erst zu erzeugen.
   Beim Nachlesen in ueben.js stand die Loesung aber schon dort:
   satzbauOk() vergleicht nicht stur Zeichen fuer Zeichen, sondern
   prueft, ob dieselben Woerter da sind, der Anfang stimmt, an
   zweiter Stelle dasselbe steht und ein Verbteil am Ende bleibt.
   Genau das ist die Regel, um die es beim Satzbau geht — alles
   dazwischen darf anders liegen. Der Filter kann deshalb weg;
   die Pruefung ist klueger als er war. */

/* ---------- Wortschatz ----------
   `nurSprechen` gilt im Hoerbereich: wer dort ein Thema oeffnet,
   will hoeren und nachsprechen. Tippen und Buchstabensalat wuerden
   aus einem Hoerthema ein Wortschatzthema machen. */
function ausWortschatz(t, bildZu, schonDa, nurSprechen) {
  const neu = [];
  const woerter = (t.words || []).filter(w => w && w.de);
  if (!woerter.length) return neu;

  woerter.forEach(w => {
    const voll = String(w.de).trim();
    const rein = ohneArtikel(voll);
    const art = artikelVon(voll);
    const info = String(w.info || '').trim();
    const bild = bildZu[voll] || bildZu[rein] || null;
    const bildFeld = bild ? { img: bild } : (w.emoji ? { emoji: w.emoji } : {});

    /* tippen — nur wenn es eine Bedeutung gibt, die das Wort nicht
       schon verraet, und der Ausdruck kurz genug zum Tippen ist.
       Redewendungen wie „die Nase voll haben" fallen hier raus. */
    const verraet = info && rein &&
      info.toLowerCase().indexOf(rein.toLowerCase().slice(0, Math.max(4, rein.length - 2))) >= 0;
    if (!nurSprechen && info && !verraet && woerterZahl(rein) <= 2 && rein.length >= 3 && !schonDa('tippen', voll)) {
      neu.push(Object.assign({
        type: 'tippen', answer: rein, info: info, w: voll,
        explain: (w.emoji ? w.emoji + ' ' : '') + voll
      }, bildFeld));
    }

    /* buchstaben — nur ein einzelnes Wort, und nur wenn es lang
       genug ist, dass Sortieren eine Aufgabe ist, aber kurz genug,
       dass es keine Qual wird. */
    if (!nurSprechen && /^[A-Za-zÄÖÜäöüß-]+$/.test(rein) && rein.length >= 5 && rein.length <= 12 &&
        !schonDa('buchstaben', voll)) {
      neu.push(Object.assign({
        type: 'buchstaben', answer: rein, info: info, w: voll,
        explain: voll + (info ? ' — ' + info : '')
      }, bildFeld));
    }

    /* artikel — nur bei Nomen, bei denen der Artikel im Wort steht.
       Ohne Artikel im Datensatz gibt es keine gesicherte Loesung. */
    if (!nurSprechen && art && woerterZahl(rein) === 1 && !schonDa('artikel', voll)) {
      neu.push(Object.assign({
        type: 'artikel', wort: rein, answer: art, w: voll,
        explain: voll + (info ? ' — ' + info : '')
      }, bildFeld));
    }

    /* speak — fuer Woerter mit einem Aussprache-Stolperstein und
       fuer Redewendungen, die man am besten am Stueck spricht. */
    if ((STOLPER.test(rein) || woerterZahl(voll) >= 3) && !schonDa('speak', voll)) {
      neu.push(Object.assign({
        type: 'speak', word: voll, w: voll,
        tip: info || undefined
      }, bild ? { img: bild } : {}));
    }
  });

  return neu;
}

/* ---------- Grammatik ---------- */
function ausGrammatik(t, schonDa) {
  const neu = [];

  (t.exercises || []).forEach(e => {
    if (e.type !== 'gap' || !e.text || e.answer == null) return;

    /* Der Hinweis in Klammern am Satzende ist die Aufgabenstellung,
       nicht Teil des Satzes: „Das ist ___ Bruder. (ich)" */
    let roh = String(e.text);
    let hinweis = '';
    const kl = roh.match(/\s*\(([^)]*)\)\s*$/);
    if (kl) { hinweis = kl[1].trim(); roh = roh.slice(0, kl.index).trim(); }

    /* Nur einfache Luecken: eine Luecke, eine Antwort. */
    if ((roh.match(/_{2,}/g) || []).length !== 1) return;
    let satz = roh.replace(/_{2,}/, String(e.answer)).replace(/\s+/g, ' ').trim();

    /* Fragen und Ausrufe bleiben aussen vor: beim Satzbau gehoert
       das Zeichen zur Loesung und macht die Kontrolle bruechig. */
    if (/[?!]/.test(satz)) return;
    satz = satz.replace(/[.]\s*$/, '');

    /* Unter fuenf Woertern ist Sortieren keine Aufgabe. Ueber zwoelf
       wird es auf dem Handy unuebersichtlich. */
    const n = woerterZahl(satz);
    if (n < 5 || n > 12) return;

    /* Zwei Saetze in einem: der Punkt in der Mitte wuerde als
       Wortkarte auftauchen und die Aufgabe verwirren. Genauso der
       Gedankenstrich — er wuerde eine eigene Karte werden. */
    if (/[.]\s+\S/.test(satz)) return;
    if (/[—–]/.test(satz)) return;

    /* Doppelte Woerter im selben Satz machen die Kontrolle mehrdeutig
       — dann kann dieselbe Reihenfolge auf zwei Wegen entstehen. */
    const kleinbuch = satz.split(/\s+/).map(x => x.toLowerCase().replace(/[.,;:]/g, ''));
    if (new Set(kleinbuch).size !== kleinbuch.length) return;

    if (schonDa('order', satz)) return;

    /* Viele deutsche Saetze lassen zwei richtige Reihenfolgen zu
       („Am Montag gehe ich …" / „Ich gehe am Montag …"). Die
       Kontrolle kennt nur eine. Damit niemand fuer eine richtige
       Loesung ein Kreuz bekommt, steht der Anfang im Hinweis —
       geuebt wird dann das, worum es geht: was danach kommt. */
    const anfang = satz.split(/\s+/)[0];
    const teile = ['Beginne mit „' + anfang + '".'];
    if (hinweis) teile.push('Gesucht ist die Form zu „' + hinweis + '".');

    neu.push({
      type: 'order', answer: satz,
      hint: teile.join(' '),
      explain: e.explain || undefined
    });
  });

  return neu;
}

/* ---------- Durchlauf ---------- */
const sammlung = {};
const bericht = [];

(U.skills || []).forEach(sk => {
  (sk.themes || []).forEach(t => {
    const alt = t.exercises || [];
    if (alt.length < 8) return;

    const formen = {};
    alt.forEach(e => formen[e.type] = (formen[e.type] || 0) + 1);
    const groesste = Math.max(0, ...Object.values(formen));
    if (groesste / alt.length <= 0.6) return;   /* schon vielfaeltig genug */

    /* Was es zu einem Wort oder Satz schon gibt, wird nicht doppelt gebaut. */
    const vorhanden = {};
    alt.forEach(e => {
      const s = e.w || e.wort || e.word || e.answer || '';
      vorhanden[e.type + '§' + String(s).trim()] = true;
    });
    const schonDa = (typ, s) => !!vorhanden[typ + '§' + String(s).trim()];

    /* Bilder liegen an den Wahlfragen. Sie gehoeren zum Wort, nicht
       zur Aufgabe — also duerfen die neuen Formen sie mitbenutzen. */
    const bildZu = {};
    alt.forEach(e => { if (e.img && e.w) { if (!bildZu[e.w]) bildZu[e.w] = e.img; } });

    const nurSprechen = (sk.id === 'hoeren' || sk.id === 'aussprache');

    let neu = [];
    if ((t.words || []).length) neu = neu.concat(ausWortschatz(t, bildZu, schonDa, nurSprechen));
    neu = neu.concat(ausGrammatik(t, schonDa));

    if (!neu.length) return;

    /* Nicht ins Uferlose: die neuen Formen sollen die Eintoenigkeit
       brechen, nicht das Thema verdoppeln. Obergrenze ist die Zahl
       der bisherigen Aufgaben. */
    if (neu.length > alt.length) neu = neu.slice(0, alt.length);

    sammlung[sk.id + '|' + t.id] = neu;

    const neueFormen = {};
    neu.forEach(e => neueFormen[e.type] = (neueFormen[e.type] || 0) + 1);
    const jetzt = {};
    alt.concat(neu).forEach(e => jetzt[e.type] = (jetzt[e.type] || 0) + 1);
    const jetztGroesste = Math.max(...Object.values(jetzt));

    bericht.push({
      bereich: sk.id, thema: t.id, niveau: t.level,
      vorher: Math.round(groesste / alt.length * 100),
      nachher: Math.round(jetztGroesste / (alt.length + neu.length) * 100),
      dazu: neu.length, formen: neueFormen
    });
  });
});

/* ---------- Datei schreiben ---------- */
function raus(o) {
  return JSON.stringify(o, (k, v) => v === undefined ? undefined : v);
}

const zeilen = Object.keys(sammlung).sort().map(k =>
  '  ' + JSON.stringify(k) + ': ' + raus(sammlung[k]));

const datei = `/* ============================================================
   vielfalt-neu.js — dieselben Woerter, andere Zugriffe

   Erzeugt von bau/mach-vielfalt.js. Nicht von Hand aendern:
   beim naechsten Lauf wird die Datei neu geschrieben.

   In vielen Themen bestand ueber die Haelfte der Aufgaben aus
   derselben Form — meist Anklicken. Wer ein Wort nur wieder-
   erkennt, kann es noch nicht sagen und noch nicht schreiben.
   Diese Datei haengt zu vorhandenen Woertern und Saetzen die
   Formen an, die mehr verlangen: selbst tippen, Buchstaben
   ordnen, der/die/das, nachsprechen, den Satz selbst bauen.

   Neue Inhalte stehen hier keine. Jede Aufgabe kommt aus einem
   Wort oder Satz, der schon im Thema stand.
   ============================================================ */
(function () {
  'use strict';
  if (!window.UEBUNGEN || !window.UEBUNGEN.skills) return;

  var ZUSATZ = {
${zeilen.join(',\n')}
  };

  window.UEBUNGEN.skills.forEach(function (sk) {
    (sk.themes || []).forEach(function (t) {
      var neu = ZUSATZ[sk.id + '|' + t.id];
      if (neu && neu.length) t.exercises = (t.exercises || []).concat(neu);
    });
  });
})();
`;

fs.writeFileSync(path.join(wurzel, 'vielfalt-neu.js'), datei, 'utf8');

/* ---------- Bericht ---------- */
let summe = 0;
const gesamtFormen = {};
bericht.forEach(b => {
  summe += b.dazu;
  Object.keys(b.formen).forEach(f => gesamtFormen[f] = (gesamtFormen[f] || 0) + b.formen[f]);
});

console.log('\n' + bericht.length + ' Themen angereichert, ' + summe + ' neue Aufgaben');
console.log('Formen: ' + Object.keys(gesamtFormen).sort()
  .map(f => f + ' ' + gesamtFormen[f]).join(', '));
console.log('\nGroesster Anteil einer Form — vorher → nachher:');
bericht.sort((a, b) => (b.vorher - b.nachher) - (a.vorher - a.nachher)).slice(0, 20).forEach(b =>
  console.log('  ' + String(b.niveau || '?').padEnd(4) + (b.bereich + '/' + b.thema).padEnd(34) +
    b.vorher + '% → ' + b.nachher + '%   +' + b.dazu));
const rest = bericht.filter(b => b.nachher > 60);
console.log('\nnoch ueber 60 %: ' + rest.length + ' von ' + bericht.length);
