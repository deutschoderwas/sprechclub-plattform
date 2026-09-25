/* ============================================================
   bereiche-anschluss.js — was schon da war, an die Bereiche hängen

   Die Inhalte gab es längst. Nur führte kein Weg dorthin:

   · 31 Übungsthemen hingen an keinem einzigen Bereich — darunter
     das ganze Hören auf A1 und die ganze Aussprache. Wer den Weg
     über „Wofür lernst du gerade?“ nimmt, kam nie dort an.
   · Die 20 Berufsfelder (Pflege, Bau, IT, Hotel …) hatten kein
     Feld hilf. Unter „Grammatik & Aussprache, die du hier brauchst“
     stand bei ihnen nichts.
   · Denselben 20 fehlte das Niveau. In der Liste stand kein A2–B1,
     nur eine Lücke.

   Diese Datei ändert bereiche.js nicht. Sie wird danach geladen und
   ergänzt, was fehlt — nimmt man die Zeile heraus, ist alles wie
   vorher.
   ============================================================ */
(function () {
  'use strict';

  /* bereiche.js wird nicht ueberall gleich geladen: im Schuelerbereich
     steht es weiter unten mit defer, in der App wird es erst geholt,
     wenn jemand den Lernbereich oeffnet. Diese Datei wartet deshalb,
     bis die Daten da sind, statt sich auf eine Reihenfolge zu
     verlassen — und sie laeuft nur ein einziges Mal durch. */
  var fertig = false;

  function anschluss() {
    if (fertig) return true;
    var B = window.BEREICHE;
    if (!Array.isArray(B) || !B.length) return false;
    fertig = true;

  var nach = {};
  B.forEach(function (b) { nach[b.id] = b; });

  /* Anhängen, ohne Doppelte und ohne die vorhandene Reihenfolge
     durcheinanderzubringen: das Neue kommt hinten dran. */
  function dazu(id, feld, ids) {
    var b = nach[id];
    if (!b) return;
    if (!Array.isArray(b[feld])) b[feld] = [];
    ids.forEach(function (x) { if (b[feld].indexOf(x) < 0) b[feld].push(x); });
  }
  function niveau(id, lvl) {
    var b = nach[id];
    if (b && !b.lvl) b.lvl = lvl;
  }

  /* ---------- 1. Hören auf A1 dorthin, wo es passiert ---------- */
  dazu('ankommen', 'ho', ['a1-begruessen']);
  dazu('supermarkt', 'ho', ['a1-zahlen']);
  dazu('arzt', 'ho', ['a1-uhrzeit']);
  dazu('cafe', 'ho', ['a1-baecker']);
  dazu('unterwegs', 'ho', ['a1-weg']);
  dazu('telefonieren', 'ho', ['a1-telefon']);

  /* Hoeren auf B2 — dorthin, wo die Situation wirklich vorkommt. */
  dazu('heikel', 'ho', ['b2-team-klaeren']);
  dazu('team', 'ho', ['b2-team-klaeren']);
  dazu('amt', 'ho', ['b2-amt-widerspruch']);
  dazu('wohnen', 'ho', ['b2-wohnen-vertrag']);
  dazu('medien', 'ho', ['b2-medien-einordnen']);

  /* Hoeren auf C1 — auf diesem Niveau geht es nicht mehr ums Wort,
     sondern um die Absicht. Darum haengen die vier Themen dort, wo
     jemand etwas sagt und etwas anderes meint. */
  dazu('bewerbung', 'ho', ['c1-verhandeln', 'c1-zwischen-den-zeilen']);
  dazu('buero', 'ho', ['c1-verhandeln', 'c1-zwischen-den-zeilen']);
  dazu('vertraege', 'ho', ['c1-verhandeln']);
  dazu('heikel', 'ho', ['c1-debatte', 'c1-zwischen-den-zeilen']);
  dazu('team', 'ho', ['c1-zwischen-den-zeilen']);
  dazu('weiterbildung', 'ho', ['c1-zahlen-hoeren', 'c1-debatte']);
  dazu('medien', 'ho', ['c1-zahlen-hoeren', 'c1-debatte']);
  dazu('freunde', 'ho', ['c1-zwischen-den-zeilen']);

  /* ---------- 2. Wortschatz, der noch nirgends hing ---------- */
  dazu('ankommen', 'ws', ['a1-begruessung']);
  dazu('familie', 'ws', ['a1-tagesablauf']);
  dazu('feste', 'ws', ['typisch-deutsch']);
  dazu('freunde', 'ws', ['redewendungen', 'starke-adjektive']);
  dazu('medien', 'ws', ['umgangssprache']);
  dazu('feste', 'ho', ['typisch-deutsch']);
  dazu('freunde', 'ho', ['redewendungen', 'starke-adjektive']);
  dazu('medien', 'ho', ['umgangssprache']);

  /* ---------- 3. Aussprache: der Deutschkurs ist ihr Zuhause ----------
     Von A1 bis C1 an einer Stelle, und zusätzlich dort, wo ein Laut
     im Alltag wirklich stört. */
  dazu('sprachkurs', 'hilf', [
    'sch-st-sp', 'oe-ue', 'endungen-schwa', 'auslaut',
    'satzakzent', 'cluster', 'knacklaut',
    'ch', 'r', 's-z-ss', 'satzmelodie', 'umlaute', 'v-w-f', 'vokale', 'wortakzent'
  ]);
  dazu('ankommen', 'hilf', ['sch-st-sp', 'umlaute']);
  dazu('telefonieren', 'hilf', ['satzmelodie', 'endungen-schwa']);
  dazu('heikel', 'hilf', ['satzakzent', 'knacklaut']);
  dazu('bewerbung', 'hilf', ['cluster', 'wortakzent']);

  /* ---------- 4. Grammatik dorthin, wo sie gebraucht wird ---------- */
  dazu('amt', 'hilf', ['passiv-b2', 'genitiv-b2', 'nominalstil', 'partizipialattribut']);
  dazu('vertraege', 'hilf', ['genitiv-b2', 'passiv-ersatz']);
  dazu('buero', 'hilf', ['passiv-b2', 'passiv-ersatz', 'konjunktiv1']);
  dazu('buchhaltung', 'hilf', ['nominalstil', 'genitiv-b2']);
  dazu('heikel', 'hilf', ['konjunktiv2-vergangenheit', 'gegensatz-konnektoren', 'zweiteilige-konnektoren']);
  dazu('medien', 'hilf', ['konjunktiv1', 'modalverben-subjektiv']);
  dazu('freunde', 'hilf', ['konjunktiv2-vergangenheit']);
  dazu('kleidung', 'hilf', ['adjektivendungen']);
  dazu('weiterbildung', 'hilf', ['zweiteilige-konnektoren', 'nominalstil']);
  dazu('sprachkurs', 'hilf', [
    'a1-praesens', 'a1-akkusativ', 'dativ', 'relativsaetze', 'passiv-vergangenheit',
    'adjektivendungen', 'verben-mit-praeposition'
  ]);
  dazu('team', 'hilf', ['verben-mit-praeposition']);

  /* ---------- 5. Die Berufsfelder hatten gar nichts ----------
     Je Feld die Grammatik und Aussprache, die dort wirklich anfällt:
     Anweisungen verstehen, Vorgänge beschreiben, höflich bleiben. */
  var FELD = {
    pflege:         ['imperativ', 'praepositionen-dativ', 'passiv-praesens', 'ch'],
    medizin:        ['passiv-praesens', 'genitiv-b2', 'nominalstil', 'wortakzent'],
    erziehung:      ['imperativ', 'modalverben', 'weil-dass-wenn', 'satzmelodie'],
    bau:            ['imperativ', 'praepositionen-dativ', 'trennbare-verben', 'cluster'],
    'elektro-shk':  ['passiv-praesens', 'trennbare-verben', 'wechselpraepositionen', 'auslaut'],
    metall:         ['passiv-praesens', 'trennbare-verben', 'praepositionen-dativ', 'auslaut'],
    fahren:         ['wechselpraepositionen', 'imperativ', 'modalverben', 'satzakzent'],
    kueche:         ['imperativ', 'trennbare-verben', 'praepositionen-dativ', 'r'],
    hotel:          ['konjunktiv2', 'modalverben', 'satzmelodie', 'wortakzent'],
    handel:         ['komparativ', 'modalverben', 'satzmelodie', 's-z-ss'],
    reinigung:      ['imperativ', 'praepositionen-dativ', 'trennbare-verben', 'auslaut'],
    lager:          ['praepositionen-dativ', 'passiv-praesens', 'imperativ', 'auslaut'],
    produktion:     ['passiv-praesens', 'trennbare-verben', 'imperativ', 'cluster'],
    it:             ['passiv-praesens', 'nebensaetze', 'nominalstil', 'v-w-f'],
    ingenieur:      ['passiv-b2', 'nominalstil', 'partizipialattribut', 'cluster'],
    buero:          ['konjunktiv2', 'nebensaetze', 'passiv-b2', 'satzakzent'],
    buchhaltung:    ['genitiv-b2', 'nominalstil', 'passiv-ersatz', 'wortakzent'],
    'friseur-beruf':['konjunktiv2', 'imperativ', 'komparativ', 'satzmelodie'],
    landwirtschaft: ['praepositionen-dativ', 'trennbare-verben', 'imperativ', 'vokale'],
    sozial:         ['konjunktiv2', 'weil-dass-wenn', 'gegensatz-konnektoren', 'satzmelodie']
  };
  Object.keys(FELD).forEach(function (id) { dazu(id, 'hilf', FELD[id]); });


  /* ---------- 7. Zweite Runde: die letzten 56 Themen ----------
     Gepruefter Stand 25.09.2026: 76 der 265 Uebungsthemen waren
     ueber keinen Bereich erreichbar. 56 davon haengen hier an der
     Stelle, an der ein Schueler sie wirklich braucht. Die restlichen
     20 sind Lesen/Schreiben — die brauchen ein eigenes Feld. */

  /* Wortschatz A1 — der Anfang gehoert in den Alltag, nicht in eine Liste. */
  dazu('arzt',        'ws', ['a1-koerper']);
  dazu('apotheke',    'ws', ['a1-koerper']);
  dazu('kleidung',    'ws', ['a1-kleidung']);
  dazu('reise',       'ws', ['a1-wetter']);
  dazu('unterwegs',   'ws', ['a1-wege', 'a1-stadt']);
  dazu('erste-tage',  'ws', ['a1-beruf']);
  dazu('freunde',     'ws', ['a1-freizeit']);
  dazu('supermarkt',  'ws', ['a1-zahlen']);
  dazu('bank',        'ws', ['a1-zahlen']);

  /* Wortschatz A2 */
  dazu('wohnen',      'ws', ['a2-muell', 'a2-umzug']);

  /* Wortschatz B2 */
  dazu('team',        'ws', ['b2-verantwortung']);
  dazu('heikel',      'ws', ['b2-standpunkt']);
  dazu('wohnen',      'ws', ['b2-umwelt']);
  dazu('vertraege',   'ws', ['b2-geld']);
  dazu('bank',        'ws', ['b2-geld']);
  dazu('arzt',        'ws', ['b2-gesundheit']);
  dazu('ankommen',    'ws', ['b2-gesellschaft']);
  dazu('weiterbildung','ws', ['b2-bildung']);
  dazu('medien',      'ws', ['b2-digital']);
  dazu('bank',        'ws', ['b2-digital']);
  dazu('schule',      'ws', ['b2-erziehung']);
  dazu('familie',     'ws', ['b2-erziehung']);
  dazu('sprachkurs',  'ws', ['b2-sprache']);

  /* Wortschatz C1 */
  dazu('medien',      'ws', ['c1-erkenntnis']);
  dazu('team',        'ws', ['c1-abwaegen']);
  dazu('heikel',      'ws', ['c1-register', 'c1-innenleben']);
  dazu('rechte',      'ws', ['c1-arbeitsrecht', 'c1-wirtschaft']);
  dazu('weiterbildung','ws', ['c1-studium']);
  dazu('freunde',     'ws', ['c1-erinnerung']);
  dazu('buero',       'ws', ['c1-wirtschaft']);

  /* Grammatik, die bisher an keinem Bereich hing */
  var GRAMMATIK2 = {
    'freunde':       ['modalpartikeln', 'irreale-vergleiche', 'a1-pronomen'],
    'telefonieren':  ['modalpartikeln', 'a2-hoeflich'],
    'buero':         ['praepositionaladverbien', 'uneingeleitete-nebensaetze', 'funktionsverbgefuege'],
    'heikel':        ['korrelate', 'irreale-vergleiche'],
    'amt':           ['n-deklination', 'gerundivum', 'praepositionen-gehoben', 'nominalisierte-adjektive'],
    'vertraege':     ['gerundivum', 'uneingeleitete-nebensaetze', 'praepositionen-gehoben'],
    'werkstatt':     ['lassen', 'vorsilben-b1'],
    'friseur-beruf': ['lassen'],
    'team':          ['korrelate'],
    'rechte':        ['nominalisierte-adjektive'],
    'ankommen':      ['a1-sein-haben', 'a1-pronomen', 'a1-wortstellung'],
    'cafe':          ['a1-sein-haben', 'a2-hoeflich'],
    'supermarkt':    ['a1-plural'],
    'kleidung':      ['a1-plural'],
    'sprachkurs':    ['a1-wortstellung', 'a2-futur'],
    'arzt':          ['a2-hoeflich'],
    'reise':         ['a2-futur']
  };
  Object.keys(GRAMMATIK2).forEach(function (id) { dazu(id, 'hilf', GRAMMATIK2[id]); });

  /* Aussprache, die bisher an keinem Bereich hing */
  var AUSSPRACHE2 = {
    'werkstatt':    ['vorsilben-b1'],
    'buero':        ['vorsilben-b1', 'endungen-b1'],
    'amt':          ['komposita-b2'],
    'ingenieur':    ['komposita-b2'],
    'heikel':       ['melodie-c1', 'rhythmus-c1', 'kontrastakzent-c1'],
    'team':         ['melodie-c1', 'kontrastakzent-c1'],
    'ankommen':     ['h-laut-a2', 'r-am-ende-a2'],
    'sprachkurs':   ['h-laut-a2', 'rhythmus-c1', 'endungen-b1', 'vokallaenge-b2'],
    'cafe':         ['r-am-ende-a2'],
    'medien':       ['fremdwoerter-b1', 'vokallaenge-b2'],
    'it':           ['fremdwoerter-b1'],
    'freunde':      ['reduktionen-b2'],
    'unterwegs':    ['reduktionen-b2']
  };
  Object.keys(AUSSPRACHE2).forEach(function (id) { dazu(id, 'hilf', AUSSPRACHE2[id]); });


  /* ---------- 8. Lesen und Schreiben an den Ort haengen ----------
     20 Themen, die es laengst gibt und die bisher nur im
     Fertigkeiten-Raum standen. Jedes dorthin, wo der Zettel,
     das Formular oder die Mail wirklich anfaellt. */
  var LESEN_SCHREIBEN = {
    'arzt':          ['lesen-a1-termin', 'schreiben-a2-entschuldigung'],
    'amt':           ['lesen-a1-termin', 'schreiben-a1-formular', 'lesen-a2-formular',
                      'lesen-b1-aushang', 'schreiben-b2-formell', 'lesen-c1-bescheid'],
    'ankommen':      ['lesen-a1-alltag', 'schreiben-a1-formular', 'lesen-zettel-a2'],
    'wohnen':        ['lesen-a1-alltag', 'lesen-zettel-a2', 'lesen-b1-aushang'],
    'freunde':       ['schreiben-a1-nachricht', 'lesen-alltag-b1', 'schreiben-a2-entschuldigung'],
    'schule':        ['schreiben-a1-nachricht', 'schreiben-a2-entschuldigung'],
    'supermarkt':    ['lesen-a2-werbung', 'schreiben-b1-beschwerde'],
    'kleidung':      ['lesen-a2-werbung'],
    'bank':          ['lesen-a2-formular', 'schreiben-b1-kuendigen'],
    'vertraege':     ['schreiben-b1-kuendigen', 'schreiben-b1-beschwerde',
                      'schreiben-b2-formell', 'lesen-c1-bescheid'],
    'medien':        ['lesen-alltag-b1', 'lesen-meinung-b2', 'lesen-b2-zahlen', 'lesen-kommentar-c1'],
    'heikel':        ['lesen-meinung-b2', 'schreiben-c1-stellungnahme'],
    'bewerbung':     ['lesen-b2-stellenanzeige'],
    'weiterbildung': ['lesen-b2-stellenanzeige', 'schreiben-c1-referieren'],
    'buchhaltung':   ['lesen-b2-zahlen'],
    'buero':         ['schreiben-b2-formell', 'schreiben-c1-referieren'],
    'rechte':        ['lesen-c1-bescheid', 'schreiben-c1-stellungnahme']
  };
  Object.keys(LESEN_SCHREIBEN).forEach(function (id) { dazu(id, 'ls', LESEN_SCHREIBEN[id]); });

  /* ---------- 6. Und das Niveau, das in der Liste fehlte ---------- */
  var NIVEAU = {
    pflege: 'A2–C1', medizin: 'B1–C1', erziehung: 'A2–B2', bau: 'A1–B1',
    'elektro-shk': 'A2–B1', metall: 'A2–B1', fahren: 'A2–B1', kueche: 'A1–B1',
    hotel: 'A2–B2', handel: 'A2–B2', reinigung: 'A1–A2', lager: 'A1–B1',
    produktion: 'A2–B1', it: 'B1–C1', ingenieur: 'B2–C1', buero: 'B1–C1',
    buchhaltung: 'B2–C1', 'friseur-beruf': 'A2–B1', landwirtschaft: 'A2–B1',
    sozial: 'B1–C1'
  };
  Object.keys(NIVEAU).forEach(function (id) { niveau(id, NIVEAU[id]); });
    return true;
  }

  window.BEREICHE_ANSCHLUSS = anschluss;
  if (!anschluss()) {
    var versuche = 0;
    var takt = setInterval(function () {
      if (anschluss() || ++versuche > 200) clearInterval(takt);
    }, 120);
  }
})();
