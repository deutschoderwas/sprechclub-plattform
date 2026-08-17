#!/usr/bin/env node
/* ============================================================
   pruefe-uebungen.mjs — Torwächter für neue Übungen

   Alles, was in uebungen.js landen soll, läuft vorher hier durch.
   Egal ob von Hand geschrieben, von einem anderen Chat erzeugt
   oder aus einer Tabelle übernommen.

   Aufruf:
     node pruefe-uebungen.mjs uebungen.js
     node pruefe-uebungen.mjs neue-uebungen.json
     node pruefe-uebungen.mjs neue.json --nur-neue uebungen.js

   Der letzte Aufruf prüft zusätzlich, ob eine Frage schon im
   Bestand steht — damit niemand dieselbe Übung zweimal bekommt.

   Rückgabe: 0 = sauber, 1 = Fehler gefunden.
   ============================================================ */
import fs from 'fs';

const ROT = '\x1b[31m', GELB = '\x1b[33m', GRUEN = '\x1b[32m', GRAU = '\x1b[90m', AUS = '\x1b[0m';

const NIVEAUS = ['A1', 'A2', 'B1', 'B2', 'C1'];
const TYPEN = ['choice', 'gap', 'match', 'listen', 'speak'];

/* ---------- Datei einlesen: .js mit window.UEBUNGEN = {…} oder reines .json ---------- */
function lade(pfad) {
  let s = fs.readFileSync(pfad, 'utf8');
  const i = s.indexOf('{');
  if (i > 0 && /window\.\w+\s*=/.test(s.slice(0, i))) s = s.slice(i);
  s = s.trim().replace(/;$/, '');
  try {
    return JSON.parse(s);
  } catch (e) {
    console.error(`${ROT}Die Datei ist kein gültiges JSON.${AUS}\n  ${e.message}`);
    console.error(`${GRAU}  Häufigster Grund: ein Komma zu viel vor einer schließenden Klammer.${AUS}`);
    process.exit(1);
  }
}

/* ---------- Umlaute: unsere wichtigste Hausregel ----------
   Bewusst KEINE Rateregel über ae/oe/ue/ss — sonst schlägt sie bei
   "passt", "Wissen", "dass" oder "neue" an und man liest die Meldungen
   irgendwann nicht mehr. Stattdessen eine feste Liste der Wörter, die
   tatsächlich falsch geschrieben werden. Was drinsteht, ist sicher falsch. */
const FALSCH_GESCHRIEBEN = {
  fuer:'für', ueber:'über', ueberall:'überall', koennen:'können', koennte:'könnte',
  muessen:'müssen', moechte:'möchte', moechten:'möchten', duerfen:'dürfen',
  waere:'wäre', haette:'hätte', naechste:'nächste', naechsten:'nächsten',
  spaeter:'später', frueher:'früher', hoeren:'hören', erklaeren:'erklären',
  waehrend:'während', gehoert:'gehört', schoen:'schön', groesse:'größe',
  gruesse:'grüße', strasse:'straße', weiss:'weiß', heisst:'heißt', gross:'groß',
  fuss:'fuß', spass:'spaß', draussen:'draußen', ausser:'außer', schliessen:'schließen',
  massnahme:'maßnahme', grussformel:'grußformel', verfuegbar:'verfügbar',
  moeglich:'möglich', unmoeglich:'unmöglich', taeglich:'täglich', gaeste:'gäste',
  buero:'büro', tuer:'tür', tuere:'türe', kueche:'küche', kuehl:'kühl',
  gruen:'grün', gruene:'grüne', suess:'süß', fuenf:'fünf', zurueck:'zurück',
  natuerlich:'natürlich', persoenlich:'persönlich', beruehmt:'berühmt',
  erfuellen:'erfüllen', unterstuetzen:'unterstützen', beruecksichtigen:'berücksichtigen',
  ueblich:'üblich', ungefaehr:'ungefähr', aehnlich:'ähnlich', aendern:'ändern',
  erzaehlen:'erzählen', waehlen:'wählen', zaehlen:'zählen', erklaerung:'erklärung',
  verstaendlich:'verständlich', selbstaendig:'selbständig', taetig:'tätig',
  qualitaet:'qualität', universitaet:'universität', realitaet:'realität',
  behoerde:'behörde', gebuehr:'gebühr', gebuehren:'gebühren', fuehren:'führen',
  gefuehl:'gefühl', bemuehen:'bemühen', begruessung:'begrüßung', schluessel:'schlüssel',
  verfuegung:'verfügung', beduerfnis:'bedürfnis', ueblicherweise:'üblicherweise',
  hoeflich:'höflich', noetig:'nötig', loesung:'lösung', erhoehen:'erhöhen',
  oeffnen:'öffnen', geoeffnet:'geöffnet', oeffentlich:'öffentlich', woechentlich:'wöchentlich',
};
/* Zusätzlich eine Regel, die auch unbekannte Wörter erwischt:
   ae, oe oder ue direkt NACH einem Mitlaut ist im Deutschen fast immer
   ein weggelassener Umlaut — "Fuellung", "Betaeubung", "Gebaeude".
   Nach einem Selbstlaut ist es dagegen normal ("neue", "treue").
   Die paar echten Ausnahmen stehen unten. */
const ECHTE_WOERTER = new Set([
  'aktuell','aktuelle','aktuellen','aktueller','aktuelles','manuell','manuelle',
  'sexuell','sexuelle','eventuell','eventuelle','virtuell','virtuelle',
  'individuell','individuelle','intellektuell','intellektuelle','duell',
  'manuel','samuel','emanuel','statue','statuen','revue','etui','queue',
  'menuett','silhouette','souvenir','routine','routiniert','journal','journalist',
  'toilette','toiletten','poet','poesie','koeffizient','koexistenz',
]);
function umlautProblem(text) {
  const funde = [];
  const woerter = String(text).match(/[A-Za-zÄÖÜäöüß]+/g) || [];
  for (const w of woerter) {
    const k = w.toLowerCase();
    const richtig = FALSCH_GESCHRIEBEN[k];
    if (richtig) { funde.push(`${w} → ${richtig}`); continue; }
    if (ECHTE_WOERTER.has(k)) continue;
    if (/[äöüß]/.test(k)) continue;           // schreibt schon richtig
    const ohneQu = k.replace(/qu/g, 'qq');            // Quelle, queren, Konsequenz
    const ohneZu = ohneQu.replace(/^zu(?=[aeiou])/, 'zz'); // zu-erst, zu-erkennen
    const m = ohneZu.match(/[bcdfghjklmnpqrstvwxz](ae|oe|ue)/);
    if (m) {
      const ers = { ae: 'ä', oe: 'ö', ue: 'ü' }[m[1]];
      funde.push(`${w} → vermutlich mit ${ers}`);
    }
  }
  return funde;
}

/* ---------- Prüfregeln je Typ ---------- */
function pruefeUebung(ex, wo, meldung) {
  const typ = ex.type;
  const F = (t) => meldung('fehler', wo, t);
  const W = (t) => meldung('warnung', wo, t);

  if (!typ) return F('kein "type" angegeben');
  if (!TYPEN.includes(typ)) return F(`unbekannter Typ "${typ}" — erlaubt: ${TYPEN.join(', ')}`);

  // Sichtbarer Text für die Umlautprüfung
  const sichtbar = [ex.q, ex.text, ex.intro, ex.label, ex.hint, ex.tip, ex.explain, ex.transcript,
    ...(ex.options || []),
    ...(ex.pairs || []).flatMap((p) => [p.l, p.r]),
  ].filter(Boolean).join(' ');
  const uml = umlautProblem(sichtbar);
  if (uml.length) F(`Umlaut fehlt: ${[...new Set(uml)].slice(0, 5).join(', ')}`);

  if (typ === 'choice' || typ === 'listen') {
    if (!ex.q || String(ex.q).trim().length < 6) F('"q" fehlt oder ist zu kurz');
    if (!Array.isArray(ex.options)) return F('"options" fehlt');
    if (ex.options.length < 2) F(`nur ${ex.options.length} Antwortmöglichkeit — mindestens 2`);
    else if (ex.options.length === 2) W('nur 2 Möglichkeiten — bei Entweder-oder in Ordnung, sonst zu leicht');
    if (ex.options.length > 5) W(`${ex.options.length} Antwortmöglichkeiten — mehr als 4 überfordert`);
    const leer = ex.options.filter((o) => !String(o || '').trim()).length;
    if (leer) F(`${leer} leere Antwortmöglichkeit(en)`);
    const wortgleich = new Set(ex.options.map((o) => String(o).trim()));
    if (wortgleich.size !== ex.options.length) F('zwei Antwortmöglichkeiten sind gleich');
    else {
      const kleingleich = new Set(ex.options.map((o) => String(o).trim().toLowerCase()));
      if (kleingleich.size !== ex.options.length)
        W('zwei Antwortmöglichkeiten unterscheiden sich nur in Groß- und Kleinschreibung — bei Betonungsaufgaben (AR-beit / ar-BEIT) ist das gewollt, sonst ein Tippfehler');
    }
    if (typeof ex.answer !== 'number') F('"answer" muss eine Zahl sein (0 = die erste Möglichkeit)');
    else if (ex.answer < 0 || ex.answer >= ex.options.length) F(`"answer": ${ex.answer} zeigt ins Leere`);
    // Die richtige Antwort darf nicht die auffällig längste sein — das verrät sie.
    if (typeof ex.answer === 'number' && ex.options[ex.answer]) {
      const l = ex.options.map((o) => String(o).length);
      const r = l[ex.answer];
      if (r > Math.max(...l.filter((_, i) => i !== ex.answer)) * 1.8) {
        W('die richtige Antwort ist viel länger als die anderen — das verrät sie');
      }
    }
  }

  if (typ === 'gap') {
    if (!ex.text) return F('"text" fehlt');
    if (!String(ex.text).includes('___')) F('im "text" fehlt die Lücke ___');
    if (!ex.answer || !String(ex.answer).trim()) F('"answer" fehlt');
    if (String(ex.text).split('___').length - 1 > 1) W('mehr als eine Lücke — das wird beim Prüfen unklar');
  }

  if (typ === 'match') {
    if (!Array.isArray(ex.pairs)) return F('"pairs" fehlt');
    if (ex.pairs.length < 3) F(`nur ${ex.pairs.length} Paare — mindestens 3`);
    if (ex.pairs.length > 6) W(`${ex.pairs.length} Paare — mehr als 6 wird unübersichtlich`);
    ex.pairs.forEach((p, i) => {
      if (!p || !p.l || !p.r) F(`Paar ${i + 1}: "l" oder "r" fehlt`);
    });
    const links = new Set(ex.pairs.map((p) => String(p?.l).toLowerCase()));
    if (links.size !== ex.pairs.length) F('zwei linke Seiten sind gleich');
    const rechts = new Set(ex.pairs.map((p) => String(p?.r).toLowerCase()));
    if (rechts.size !== ex.pairs.length) F('zwei rechte Seiten sind gleich — dann ist die Zuordnung nicht eindeutig');
  }

  if (typ === 'listen') {
    if (!ex.audioUrl) F('"audioUrl" fehlt');
    else if (!/^https?:\/\//.test(ex.audioUrl)) F('"audioUrl" ist keine vollständige Adresse');
    if (!ex.transcript) W('kein "transcript" — ohne Text kann niemand nachlesen, was gesagt wurde');
  }

  if (typ === 'speak') {
    if (!ex.word) F('"word" fehlt');
    if (!ex.audioUrl) W('kein "audioUrl" — dann gibt es kein Vorbild zum Nachsprechen');
  }
}

/* ---------- Hauptlauf ---------- */
const [, , datei, ...rest] = process.argv;
if (!datei) {
  console.log('Aufruf: node pruefe-uebungen.mjs <datei.js|json> [--nur-neue <bestand.js>]');
  process.exit(1);
}
const nurNeueIdx = rest.indexOf('--nur-neue');
const bestandDatei = nurNeueIdx >= 0 ? rest[nurNeueIdx + 1] : null;

const daten = lade(datei);
const fehler = [], warnungen = [];
function meldung(art, wo, text) {
  (art === 'fehler' ? fehler : warnungen).push({ wo, text });
}

// Bestand für die Dubletten-Prüfung
const bestandFragen = new Set();
if (bestandDatei) {
  const b = lade(bestandDatei);
  for (const sk of b.skills || []) for (const th of sk.themes || []) for (const ex of th.exercises || []) {
    const s = (ex.q || ex.text || ex.word || '').trim().toLowerCase();
    if (s) bestandFragen.add(s);
  }
  console.log(`${GRAU}Bestand geladen: ${bestandFragen.size} Fragen aus ${bestandDatei}${AUS}`);
}

const gesehen = new Map();
let anzahl = 0, themen = 0;

if (!Array.isArray(daten.skills)) {
  console.error(`${ROT}Die Datei hat kein "skills"-Feld. Erwartet wird { "skills": [ … ] }.${AUS}`);
  process.exit(1);
}

for (const sk of daten.skills) {
  if (!sk.id) meldung('fehler', 'skill', 'ein Bereich ohne "id"');
  for (const th of sk.themes || []) {
    themen++;
    const wo = `${sk.id}/${th.id || '?'}`;
    if (!th.id) meldung('fehler', wo, 'Thema ohne "id"');
    if (!th.title) meldung('fehler', wo, 'Thema ohne "title"');
    if (th.level && !NIVEAUS.includes(th.level)) {
      meldung('fehler', wo, `Niveau "${th.level}" — erlaubt: ${NIVEAUS.join(', ')}`);
    }
    const ex = th.exercises || [];
    if (ex.length < 4) meldung('warnung', wo, `nur ${ex.length} Übungen — unter 4 lohnt sich ein Thema nicht`);

    ex.forEach((e, i) => {
      anzahl++;
      const woEx = `${wo} #${i + 1}`;
      pruefeUebung(e, woEx, meldung);

      const kern = (e.q || e.text || e.word || '').trim().toLowerCase();
      if (kern) {
        if (gesehen.has(kern)) meldung('warnung', woEx, `gleiche Frage wie ${gesehen.get(kern)}`);
        else gesehen.set(kern, woEx);
        if (bestandFragen.has(kern)) meldung('fehler', woEx, 'diese Frage gibt es im Bestand schon');
      }
    });
  }
}

/* ---------- Bericht ---------- */
console.log(`\n${GRAU}Geprüft: ${anzahl} Übungen in ${themen} Themen aus ${datei}${AUS}`);

if (warnungen.length) {
  console.log(`\n${GELB}${warnungen.length} Hinweis(e):${AUS}`);
  for (const w of warnungen.slice(0, 40)) console.log(`  ${GELB}·${AUS} ${w.wo} — ${w.text}`);
  if (warnungen.length > 40) console.log(`  ${GRAU}… und ${warnungen.length - 40} weitere${AUS}`);
}

if (fehler.length) {
  console.log(`\n${ROT}${fehler.length} Fehler — so darf das nicht in die Plattform:${AUS}`);
  for (const f of fehler.slice(0, 60)) console.log(`  ${ROT}×${AUS} ${f.wo} — ${f.text}`);
  if (fehler.length > 60) console.log(`  ${GRAU}… und ${fehler.length - 60} weitere${AUS}`);
  console.log('');
  process.exit(1);
}

console.log(`\n${GRUEN}Alles in Ordnung.${AUS} ${anzahl} Übungen, keine Fehler.\n`);
process.exit(0);
