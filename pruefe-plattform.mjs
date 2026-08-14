#!/usr/bin/env node
/* ============================================================
   pruefe-plattform.mjs — der Wächter über die Verdrahtung

   An der Plattform arbeiten mehrere Chats gleichzeitig. Dabei kann
   es passieren, dass jemand eine Datei überschreibt und dabei aus
   Versehen eine Zeile entfernt, die woanders gebraucht wird.

   Dieses Programm prüft nicht, ob der Code schön ist. Es prüft nur:
   ist alles noch miteinander verbunden? Zwanzig Sekunden, und man
   weiß, ob etwas herausgefallen ist.

   Aufruf im Plattform-Ordner:
       node pruefe-plattform.mjs

   Rückgabe: 0 = alles verdrahtet, 1 = etwas fehlt.

   Neue Prüfung hinzufügen: einfach unten eine Zeile in PRUEFUNGEN
   ergänzen. Wer etwas Neues einbaut, das anderswo gebraucht wird,
   trägt es hier ein — dann merkt es der Nächste sofort.
   ============================================================ */
import fs from 'fs';

const ROT = '\x1b[31m', GELB = '\x1b[33m', GRUEN = '\x1b[32m', GRAU = '\x1b[90m', AUS = '\x1b[0m';

function lies(pfad) {
  try { return fs.readFileSync(pfad, 'utf8'); } catch { return null; }
}

/* datei · was · Suchmuster · mindestens so oft · Erklärung, wenn es fehlt */
const PRUEFUNGEN = [
  // ---------- Der einheitliche Stil ----------
  ['club-stil.css', 'Die Stildatei existiert', /--tuerkis:\s*#39CCE3/, 1,
   'club-stil.css fehlt oder hat keine Markenfarben mehr.'],
  ['konto.html', 'Stildatei ist eingebunden', /club-stil\.css/, 1,
   'Ohne diese Zeile sieht der Schülerbereich wieder aus wie vorher.'],
  ['konto.html', 'Stildatei steht am Ende des Kopfes', /club-stil\.css[\s\S]{0,400}<\/head>/, 1,
   'Sie muss als LETZTE im <head> stehen, sonst gewinnen die alten Stil-Blöcke.'],

  // ---------- Die eigenen Zeichen ----------
  ['club-zeichen.js', 'Die Zeichendatei existiert', /window\.ZEICHEN/, 1,
   'club-zeichen.js fehlt — dann bleiben die Menüpunkte ohne Symbol.'],
  ['konto.html', 'Zeichendatei ist eingebunden', /club-zeichen\.js/, 1,
   'Ohne sie bleiben alle data-zeichen-Felder leer.'],
  ['konto.html', 'Alle 15 Menüpunkte haben ein Zeichen', /data-zeichen=/g, 15,
   'Ein Menüpunkt hat sein Zeichen verloren — dort ist jetzt eine Lücke.'],

  // ---------- Community ----------
  ['community.js', 'Beiträge werden zu Strängen gebündelt', /function baueStraenge/, 1,
   'Ohne das ist der Chat wieder eine flache Liste statt Beitrag mit Antworten.'],
  ['community.js', 'Schnellzeile zum Reagieren und Antworten', /function schnellHtml/, 1,
   'Ohne sie fehlen die Emojis und der Antworten-Knopf unter jedem Beitrag.'],
  ['community.js', 'Nur Vornamen werden angezeigt', /function vorname/, 1,
   'Sonst stehen wieder die vollen Namen im Chat.'],
  ['community.js', 'Reaktionszeile hat feste Höhe', /\.rc\{min-height/, 1,
   'Ohne feste Höhe springt das Layout, sobald jemand reagiert.'],

  // ---------- Stimme ----------
  ['api/tts.js', 'Anbieter ist umschaltbar', /TTS_ANBIETER/, 1,
   'Ohne das hängt die Stimme wieder fest an einem Anbieter.'],
  ['api/tts.js', 'ElevenLabs-Cache bleibt gültig', /\$\{voice\}\|\$\{modell\}\|\$\{speed\}\|\$\{text\}/, 1,
   'Wird diese Formel geändert, ist der komplette bezahlte Cache wertlos.'],

  // ---------- Niveau-Test ----------
  ['niveau-test.html', 'Test liegt auf dem Club', /niveautest\.js/, 1,
   'Ohne das Skript zeigt die Testseite nichts an.'],
  ['index.html', 'Startseite verlinkt den Test', /niveau-test\.html/, 1,
   'Ohne den Link findet niemand den Einstufungstest.'],

  // ---------- Hausregeln ----------
  ['index.html', 'Keine tote E-Mail-Adresse', /info@deutschoderwas\.de/, 0,
   'info@deutschoderwas.de existiert nicht. Richtig: deutschlernen@deutschoderwas.de'],
  ['konto.html', 'Keine tote E-Mail-Adresse', /info@deutschoderwas\.de/, 0,
   'info@deutschoderwas.de existiert nicht. Richtig: deutschlernen@deutschoderwas.de'],
  ['niveau-test.html', 'Keine tote E-Mail-Adresse', /info@deutschoderwas\.de/, 0,
   'info@deutschoderwas.de existiert nicht. Richtig: deutschlernen@deutschoderwas.de'],
];

let fehler = 0, gut = 0, fehlend = 0;
const nachDatei = new Map();

for (const [datei, was, muster, mindestens, hilfe] of PRUEFUNGEN) {
  const inhalt = lies(datei);
  if (inhalt === null) {
    if (!nachDatei.has(datei)) {
      console.log(`${GELB}?${AUS} ${datei} — Datei nicht gefunden (im richtigen Ordner?)`);
      nachDatei.set(datei, true);
    }
    fehlend++;
    continue;
  }
  const treffer = muster.global
    ? (inhalt.match(muster) || []).length
    : (muster.test(inhalt) ? 1 : 0);

  const ok = mindestens === 0 ? treffer === 0 : treffer >= mindestens;
  if (ok) {
    gut++;
    console.log(`${GRUEN}✓${AUS} ${GRAU}${datei}${AUS} ${was}`);
  } else {
    fehler++;
    const soll = mindestens === 0 ? 'darf nicht vorkommen' : `mindestens ${mindestens}×`;
    console.log(`${ROT}×${AUS} ${datei} — ${was}`);
    console.log(`   ${GRAU}gefunden: ${treffer}×, erwartet: ${soll}${AUS}`);
    console.log(`   ${GELB}${hilfe}${AUS}`);
  }
}

console.log('');
if (fehlend) console.log(`${GELB}${fehlend} Prüfung(en) übersprungen — Datei nicht da.${AUS}`);
if (fehler) {
  console.log(`${ROT}${fehler} Verbindung(en) fehlen.${AUS} ${gut} in Ordnung.`);
  console.log(`${GRAU}Meist ist eine Datei überschrieben worden. Der letzte Commit vor dem`);
  console.log(`Problem steht in: git log --oneline -- <datei>${AUS}\n`);
  process.exit(1);
}
console.log(`${GRUEN}Alles verdrahtet.${AUS} ${gut} Prüfungen, keine Lücke.\n`);
process.exit(0);
