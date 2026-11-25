/* themen-katalog.js – EIN Themenkatalog für Klassenzimmer und Schülerbereich.
 *
 * Wozu: Die fünf Fokus-Apps im Klassenzimmer (sprech-app, grammatik-app,
 * rollenspiel-app, wortschatz-app, quiz-app) und der Schülerbereich müssen
 * dieselben Themen kennen. Nur dann kann nach einer Club-Stunde erkannt
 * werden, welche Übungen zur Stunde passen (Nachbereitung, Empfehlungen).
 *
 * Regeln:
 * - Kennungen (id) ändern sich NIE. Namen dürfen sich ändern.
 * - Ein Thema wird über "fokus:appId" angesprochen, z. B. "sprechen:aemter".
 *   appId ist genau die id, die das Thema in seiner Fokus-App schon hat.
 * - Jedes Thema hängt an genau einem Lebensbereich (bereich). Grammatik-
 *   Themen hängen zusätzlich an einem Grammatik-Thema (grammatik).
 * - Neue Themen werden HIER eingetragen, wenn sie in einer Fokus-App dazukommen.
 *
 * Lädt im Browser als window.DOW_KATALOG und in Node über require().
 */
(function (root) {
  'use strict';

  // Unsere Niveaubänder (wie in den Fokus-Apps: data-niveau="ab|bb|bc").
  var NIVEAUS = [
    { id: 'ab', name: 'A2·B1' },
    { id: 'bb', name: 'B1·B2' },
    { id: 'bc', name: 'B2·C1' }
  ];

  // Die Wochen-Fokusse und ihre Fokus-App. tage: 1 = Montag … 7 = Sonntag.
  var FOKUS = [
    { id: 'sprechen',    name: 'Freies Sprechen & Debatten', app: 'sprech-app.html',      tage: [1, 5] },
    { id: 'grammatik',   name: 'Grammatikfokus',             app: 'grammatik-app.html',   tage: [2] },
    { id: 'rollenspiel', name: 'Rollenspiele',               app: 'rollenspiel-app.html', tage: [3, 6] },
    { id: 'wortschatz',  name: 'Wortschatzfokus',            app: 'wortschatz-app.html',  tage: [4] },
    { id: 'quiz',        name: 'Wortschatzspiele & Quiz',    app: 'quiz-app.html',        tage: [7] }
  ];

  // Lebensbereiche: die gemeinsame Ordnung für alle Inhalte.
  // Übernommen aus sprech-app.html (dort am vollständigsten).
  var BEREICHE = [
    { id: 'alltag',         name: 'Alltag & Routinen',         gruppe: 'leben' },
    { id: 'familie',        name: 'Familie & Beziehungen',     gruppe: 'leben' },
    { id: 'freundschaft',   name: 'Freundschaft & Kontakte',   gruppe: 'leben' },
    { id: 'wohnen',         name: 'Wohnen & Nachbarschaft',    gruppe: 'leben' },
    { id: 'essen',          name: 'Essen & Ernährung',         gruppe: 'leben' },
    { id: 'gesundheit',     name: 'Gesundheit & Wohlbefinden', gruppe: 'leben' },
    { id: 'freizeit',       name: 'Freizeit & Hobbys',         gruppe: 'leben' },
    { id: 'reisen',         name: 'Reisen & Urlaub',           gruppe: 'leben' },
    { id: 'geld',           name: 'Geld & Konsum',             gruppe: 'leben' },
    { id: 'medien',         name: 'Medien & Digitales',        gruppe: 'leben' },
    { id: 'umwelt',         name: 'Umwelt & Nachhaltigkeit',   gruppe: 'leben' },
    { id: 'persoenlichkeit',name: 'Persönlichkeit & Werte',    gruppe: 'leben' },
    { id: 'gesellschaft',   name: 'Gesellschaft & Aktuelles',  gruppe: 'leben' },
    { id: 'arbeit',         name: 'Arbeit & Berufsalltag',     gruppe: 'beruf' },
    { id: 'bewerbung',      name: 'Bewerbung & Karriere',      gruppe: 'beruf' },
    { id: 'team',           name: 'Zusammenarbeit & Team',     gruppe: 'beruf' },
    { id: 'ausbildung',     name: 'Ausbildung & Weiterbildung',gruppe: 'beruf' },
    { id: 'balance',        name: 'Work-Life-Balance',         gruppe: 'beruf' },
    { id: 'behoerden',      name: 'Behörden & Formelles',      gruppe: 'beruf' }
  ];
  var GRUPPEN = [
    { id: 'leben', name: 'Alltag & Leben' },
    { id: 'beruf', name: 'Beruf & Bildung' }
  ];

  // Grammatik-Themen (aus grammatik-app.html).
  var GRAMMATIK = [
    { id: 'perfekt',        name: 'Perfekt',                       gruppe: 'Zeiten & Verben' },
    { id: 'praeteritum',    name: 'Präteritum',                    gruppe: 'Zeiten & Verben' },
    { id: 'futur',          name: 'Futur',                         gruppe: 'Zeiten & Verben' },
    { id: 'konjunktiv2',    name: 'Konjunktiv II',                 gruppe: 'Zeiten & Verben' },
    { id: 'passiv',         name: 'Passiv',                        gruppe: 'Zeiten & Verben' },
    { id: 'modalverben',    name: 'Modalverben',                   gruppe: 'Zeiten & Verben' },
    { id: 'trennbar',       name: 'Trennbare Verben',              gruppe: 'Zeiten & Verben' },
    { id: 'reflexiv',       name: 'Reflexive Verben',              gruppe: 'Zeiten & Verben' },
    { id: 'nebensaetze',    name: 'Nebensätze (weil, dass, wenn)', gruppe: 'Satzbau' },
    { id: 'konnektoren',    name: 'Konnektoren',                   gruppe: 'Satzbau' },
    { id: 'wortstellung',   name: 'Wortstellung',                  gruppe: 'Satzbau' },
    { id: 'indirektefragen',name: 'Indirekte Fragen',              gruppe: 'Satzbau' },
    { id: 'akkdat',         name: 'Akkusativ & Dativ',             gruppe: 'Fälle & Präpositionen' },
    { id: 'wechselprep',    name: 'Wechselpräpositionen',          gruppe: 'Fälle & Präpositionen' },
    { id: 'genitiv',        name: 'Genitiv',                       gruppe: 'Fälle & Präpositionen' },
    { id: 'ndeklination',   name: 'n-Deklination',                 gruppe: 'Fälle & Präpositionen' },
    { id: 'adjdekl',        name: 'Adjektivdeklination',           gruppe: 'Adjektive' },
    { id: 'komparativ',     name: 'Komparativ & Superlativ',       gruppe: 'Adjektive' }
  ];

  // Navigationspunkte der Fokus-Apps → Lebensbereich bzw. Grammatik-Thema.
  // "nav" ist genau der Name, der in der jeweiligen App links steht.
  var NAV = {
    sprechen: {}, // in der sprech-app sind die Navigationspunkte schon die Lebensbereiche
    grammatik: {
      'Perfekt': 'perfekt', 'Präteritum': 'praeteritum', 'Futur': 'futur',
      'Konjunktiv II': 'konjunktiv2', 'Passiv': 'passiv', 'Modalverben': 'modalverben',
      'Trennbare Verben': 'trennbar', 'Reflexive Verben': 'reflexiv',
      'Nebensätze (weil, dass, wenn)': 'nebensaetze', 'Konnektoren': 'konnektoren',
      'Wortstellung': 'wortstellung', 'Indirekte Fragen': 'indirektefragen',
      'Akkusativ & Dativ': 'akkdat', 'Wechselpräpositionen': 'wechselprep',
      'Genitiv': 'genitiv', 'n-Deklination': 'ndeklination',
      'Adjektivdeklination': 'adjdekl', 'Komparativ & Superlativ': 'komparativ'
    },
    rollenspiel: {
      'Im Restaurant': 'essen', 'Beim Arzt': 'gesundheit', 'Beim Einkaufen': 'geld',
      'Beim Amt': 'behoerden', 'Wohnungssuche': 'wohnen', 'Beim Friseur': 'alltag',
      'Am Telefon': 'alltag', 'Small Talk': 'freundschaft',
      'Bewerbungsgespräch': 'bewerbung', 'Beim Chef': 'arbeit', 'Kundengespräch': 'arbeit',
      'Teammeeting': 'team', 'Beschwerde & Reklamation': 'geld'
    },
    wortschatz: {
      'In der Küche': 'wohnen', 'Im Wohnzimmer': 'wohnen', 'Im Bad': 'wohnen',
      'Kleidung': 'alltag', 'Lebensmittel': 'essen',
      'Körper': 'gesundheit', 'Gesundheit': 'gesundheit',
      'Gefühle & Stimmungen': 'persoenlichkeit', 'Charakter': 'persoenlichkeit',
      'Im Büro': 'arbeit', 'Berufe': 'arbeit', 'In der Stadt': 'wohnen', 'Verkehr': 'alltag'
    },
    quiz: {} // Quiz & Spiele sind Spielformen, keine Themen: Nachbereitung kommt aus den Wörtern der Woche
  };

  // Die Themen, die es in den Fokus-Apps gibt (Stand 25.11.2026).
  var THEMEN = [
    { fokus: 'sprechen',    appId: 'gedaechtnis',    titel: 'Gedächtnis verbessern', niveau: 'bb', bereich: 'gesundheit' },
    { fokus: 'sprechen',    appId: 'haustiere',      titel: 'Hund oder Katze?',      niveau: 'ab', bereich: 'persoenlichkeit' },
    { fokus: 'sprechen',    appId: 'aemter',         titel: 'Gespräche mit Ämtern',  niveau: 'bb', bereich: 'behoerden' },
    { fokus: 'grammatik',   appId: 'wechselprep',    titel: 'Wechselpräpositionen',  niveau: 'ab', grammatik: 'wechselprep' },
    { fokus: 'grammatik',   appId: 'konjunktiv2',    titel: 'Konjunktiv II',         niveau: 'bb', grammatik: 'konjunktiv2' },
    { fokus: 'grammatik',   appId: 'passiv',         titel: 'Passiv',                niveau: 'bc', grammatik: 'passiv' },
    { fokus: 'rollenspiel', appId: 'restaurant',     titel: 'Im Restaurant',         niveau: 'ab', bereich: 'essen' },
    { fokus: 'rollenspiel', appId: 'bewerbung',      titel: 'Bewerbungsgespräch',    niveau: 'bb', bereich: 'bewerbung' },
    { fokus: 'rollenspiel', appId: 'amt-beschwerde', titel: 'Beschwerde beim Amt',   niveau: 'bc', bereich: 'behoerden' },
    { fokus: 'wortschatz',  appId: 'kueche',         titel: 'In der Küche',          niveau: 'ab', bereich: 'wohnen' },
    { fokus: 'wortschatz',  appId: 'gefuehle',       titel: 'Gefühle & Stimmungen',  niveau: 'bb', bereich: 'persoenlichkeit' },
    { fokus: 'wortschatz',  appId: 'buero',          titel: 'Im Büro',               niveau: 'bb', bereich: 'arbeit' },
    { fokus: 'quiz',        appId: 'quizmix',        titel: 'Großer Quiz-Mix',       niveau: 'bb' },
    { fokus: 'quiz',        appId: 'wahrfalsch',     titel: 'Wahr oder Falsch',      niveau: 'bb' },
    { fokus: 'quiz',        appId: 'tabu',           titel: 'Tabu',                  niveau: 'ab' }
  ];
  THEMEN.forEach(function (t) { t.id = t.fokus + ':' + t.appId; });

  function nachId(liste) {
    var m = {};
    liste.forEach(function (x) { m[x.id] = x; });
    return m;
  }
  var THEMA = nachId(THEMEN), BEREICH = nachId(BEREICHE), GRAMM = nachId(GRAMMATIK), FOK = nachId(FOKUS);

  var katalog = {
    version: 1,
    NIVEAUS: NIVEAUS, FOKUS: FOKUS, GRUPPEN: GRUPPEN, BEREICHE: BEREICHE,
    GRAMMATIK: GRAMMATIK, NAV: NAV, THEMEN: THEMEN,

    // "sprechen:aemter" oder (fokus, appId) → Thema oder null
    thema: function (fokusOderId, appId) {
      var id = appId ? fokusOderId + ':' + appId : fokusOderId;
      return THEMA[id] || null;
    },
    bereich: function (id) { return BEREICH[id] || null; },
    grammatik: function (id) { return GRAMM[id] || null; },
    fokus: function (id) { return FOK[id] || null; },

    // Navigationspunkt einer Fokus-App → Lebensbereich- bzw. Grammatik-id
    ausNav: function (fokus, navName) {
      if (fokus === 'sprechen') {
        for (var i = 0; i < BEREICHE.length; i++) if (BEREICHE[i].name === navName) return BEREICHE[i].id;
        return null;
      }
      var m = NAV[fokus];
      return (m && m[navName]) || null;
    },

    // Alle Themen eines Lebensbereichs (optional nur ein Niveau)
    themenImBereich: function (bereichId, niveau) {
      return THEMEN.filter(function (t) {
        return t.bereich === bereichId && (!niveau || t.niveau === niveau);
      });
    },

    // Welcher Fokus ist an diesem Tag? datum = Date, Rückgabe = Fokus oder null
    fokusAmTag: function (datum) {
      var tag = datum.getDay() || 7;
      for (var i = 0; i < FOKUS.length; i++) if (FOKUS[i].tage.indexOf(tag) >= 0) return FOKUS[i];
      return null;
    },

    // Selbstprüfung: findet kaputte Verweise. Leeres Array = alles in Ordnung.
    pruefen: function () {
      var fehler = [], ids = {};
      THEMEN.forEach(function (t) {
        if (ids[t.id]) fehler.push('doppelt: ' + t.id);
        ids[t.id] = 1;
        if (!FOK[t.fokus]) fehler.push(t.id + ': unbekannter Fokus');
        if (!/^(ab|bb|bc)$/.test(t.niveau)) fehler.push(t.id + ': unbekanntes Niveau');
        if (t.bereich && !BEREICH[t.bereich]) fehler.push(t.id + ': unbekannter Bereich ' + t.bereich);
        if (t.grammatik && !GRAMM[t.grammatik]) fehler.push(t.id + ': unbekanntes Grammatik-Thema ' + t.grammatik);
        if (t.fokus !== 'quiz' && !t.bereich && !t.grammatik) fehler.push(t.id + ': hängt an nichts');
      });
      Object.keys(NAV).forEach(function (f) {
        Object.keys(NAV[f]).forEach(function (n) {
          var z = NAV[f][n];
          if (f === 'grammatik' ? !GRAMM[z] : !BEREICH[z]) fehler.push('NAV ' + f + ' „' + n + '“ → ' + z + ' unbekannt');
        });
      });
      return fehler;
    }
  };

  if (typeof module !== 'undefined' && module.exports) module.exports = katalog;
  else root.DOW_KATALOG = katalog;
})(typeof window !== 'undefined' ? window : this);
