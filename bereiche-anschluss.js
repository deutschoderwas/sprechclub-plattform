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
