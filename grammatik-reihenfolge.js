/* ============================================================
   grammatik-reihenfolge.js — die Reihenfolge, in der Grammatik Sinn ergibt

   Die Themen lagen bisher in der Reihenfolge, in der sie
   entstanden sind. Wer B1 öffnete, sah fünfzehn Karten und
   keinen Hinweis, womit man anfängt oder was worauf aufbaut.

   Hier steht die Ordnung: Schritt für Schritt, mit dem, was
   vorher sitzen muss. Kein Thema wird gesperrt — wer springen
   will, springt. Aber man sieht, wo man steht.

   window.GRAMMATIKPFAD = {
     schritt(themaId)   → {nr, baut_auf:[ids], warum} oder null
     sortiere(themen)   → dieselben Themen in Pfadreihenfolge
     titel(themaId)     → Klartext-Titel eines Themas
   }
   ============================================================ */
(function () {
  'use strict';

  /* Jeder Eintrag: [id, baut_auf, warum]
     baut_auf nennt die Themen, die vorher sitzen sollten.
     warum steht auf der Karte und sagt in einem Satz, wozu
     dieser Schritt gut ist. */
  var PFAD = [
    /* ---------- A1: die Bausteine ---------- */
    ['a1-artikel', [], 'Ohne der, die, das geht im Deutschen gar nichts — jedes Nomen hängt daran.'],
    ['a1-sein-haben', [], 'sein und haben braucht man in fast jedem Satz — und ausgerechnet sie sind unregelmäßig.'],
    ['a1-praesens', [], 'Das Verb im Präsens ist der Motor jedes Satzes.'],
    ['a1-wortstellung', ['a1-praesens'], 'Die Regel, an der jeder deutsche Hauptsatz hängt: Das Verb steht an zweiter Stelle.'],
    ['a1-plural', ['a1-artikel'], 'Ein Buch, zwei Bücher — und im Plural heißt der Artikel immer die.'],
    ['a1-fragen', ['a1-praesens'], 'Wer fragen kann, kommt ins Gespräch — auch mit fünfzig Wörtern.'],
    ['negation', ['a1-artikel'], 'Nein sagen können ist so wichtig wie Ja sagen.'],
    ['a1-akkusativ', ['a1-artikel'], 'Der erste Fallwechsel: aus der wird den.'],
    ['a1-pronomen', ['a1-akkusativ'], 'Aus er wird ihn — derselbe Wechsel wie von der zu den.'],
    ['possessivartikel', ['a1-artikel', 'a1-akkusativ'], 'mein, dein, sein — damit gehört etwas jemandem.'],
    ['trennbare-verben', ['a1-praesens'], 'aufstehen, einkaufen, anrufen: Der zweite Teil rutscht ans Satzende.'],

    /* ---------- A2: die Zeiten und der zweite Fall ---------- */
    ['praeteritum-sein-haben', ['a1-praesens'], 'war und hatte braucht man täglich — sie kommen vor dem Perfekt.'],
    ['perfekt-bilden', ['a1-praesens', 'praeteritum-sein-haben'], 'So erzählt man auf Deutsch, was gestern war.'],
    ['modalverben', ['a1-praesens'], 'können, müssen, dürfen, wollen — plötzlich kann man Absichten ausdrücken.'],
    ['a2-hoeflich', ['modalverben'], 'hätte, könnte, würde — aus einer Forderung wird eine Bitte.'],
    ['a2-futur', ['a1-praesens', 'modalverben'], 'Die Zukunft braucht meist gar kein eigenes Verb — ein morgen genügt.'],
    ['imperativ', ['a1-praesens'], 'Bitten und Anweisungen: Komm, warte, machen Sie bitte.'],
    ['dativ', ['a1-akkusativ'], 'Der dritte Fall: Wem gibst du das Buch?'],
    ['praepositionen-dativ', ['dativ'], 'aus, bei, mit, nach, seit, von, zu — diese sieben verlangen immer den Dativ.'],
    ['reflexive-verben', ['a1-akkusativ', 'dativ'], 'sich freuen, sich beeilen: Das Verb zeigt auf einen selbst zurück.'],
    ['komparativ', [], 'größer, am größten — vergleichen kann man ab dem ersten Tag brauchen.'],
    ['weil-dass-wenn', ['a1-praesens'], 'Der erste Nebensatz: Das Verb wandert ans Ende.'],

    /* ---------- B1: Sätze verbinden, Fälle vertiefen ---------- */
    ['nebensaetze', ['weil-dass-wenn'], 'Alle Nebensätze folgen derselben Regel — hier wird sie zum System.'],
    ['temporale-nebensaetze', ['nebensaetze'], 'als, wenn, während, nachdem: Zeit im Nebensatz ausdrücken.'],
    ['konnektoren', ['nebensaetze'], 'deshalb, trotzdem, außerdem — Sätze logisch verknüpfen.'],
    ['wechselpraepositionen', ['a1-akkusativ', 'dativ'], 'in, an, auf: Akkusativ bei Bewegung, Dativ beim Ort.'],
    ['perfekt-praeteritum', ['perfekt-bilden', 'praeteritum-sein-haben'], 'Wann erzählt man mit Perfekt, wann mit Präteritum?'],
    ['adjektivdeklination', ['a1-akkusativ', 'dativ'], 'Die Endung am Adjektiv hängt von Artikel und Fall ab.'],
    ['relativsaetze', ['nebensaetze'], 'Der Mann, der dort steht — zwei Sätze werden einer.'],
    ['praepositionaladverbien', ['praepositionen-dativ'], 'darauf, worauf, damit: ein Wort statt Präposition plus Nomen.'],
    ['n-deklination', ['a1-akkusativ', 'dativ'], 'den Studenten, Herrn Meier — eine kleine Gruppe mit eigenem -n.'],
    ['genitiv', ['dativ'], 'Der vierte Fall: das Auto meines Bruders.'],
    ['passiv-praesens', ['perfekt-bilden'], 'Wenn nicht wichtig ist, wer handelt: Das Haus wird gebaut.'],
    ['passiv-vergangenheit', ['passiv-praesens'], 'Das Haus wurde gebaut, ist gebaut worden.'],
    ['konjunktiv2', ['modalverben'], 'hätte, wäre, würde — höflich bitten und Wünsche äußern.'],
    ['lassen', ['modalverben'], 'die Haare schneiden lassen: Ein anderer tut es für mich.'],
    ['modalpartikeln', ['a1-praesens'], 'doch, mal, ja, eben — die kleinen Wörter, die Deutsch echt klingen lassen.'],

    /* ---------- B2: Schriftdeutsch und Feinheiten ---------- */
    ['verben-mit-praeposition', ['praepositionaladverbien'], 'warten auf, sich freuen über: Die Präposition gehört zum Verb.'],
    ['adjektivendungen', ['adjektivdeklination'], 'Alle drei Fälle sicher: mit der, mit ein, ohne Artikel.'],
    ['genitiv-b2', ['genitiv'], 'wegen, trotz, während, innerhalb — der Genitiv im geschriebenen Deutsch.'],
    ['gegensatz-konnektoren', ['konnektoren'], 'obwohl, trotzdem, trotz, dennoch: vier Wege für denselben Gegensatz.'],
    ['konjunktiv2-vergangenheit', ['konjunktiv2', 'perfekt-bilden'], 'hätte gemacht, wäre gegangen — über das reden, was nicht passiert ist.'],
    ['passiv-b2', ['passiv-vergangenheit'], 'worden, Modalverb im Passiv, Zustandspassiv.'],
    ['passiv-ersatz', ['passiv-b2', 'lassen'], 'lässt sich, ist zu, -bar: drei kürzere Wege statt Passiv.'],
    ['nominalisierung', ['genitiv-b2'], 'Aus Verben werden Nomen — die Grundlage des Amtsdeutschs.'],
    ['nominalstil', ['nominalisierung', 'nebensaetze'], 'wegen des Regens oder weil es regnet: umschalten in beide Richtungen.'],
    ['partizipialattribut', ['relativsaetze', 'passiv-b2'], 'Ein ganzer Relativsatz, gefaltet in ein Wort vor dem Nomen.'],
    ['indirekte-rede', ['nebensaetze'], 'Sie sagt, dass sie kommt — wiedergeben, was jemand gesagt hat.'],

    /* ---------- C1: Register und Stil ---------- */
    ['konjunktiv1', ['indirekte-rede'], 'Er sei gekommen — die Form für Bericht und Protokoll.'],
    ['zweiteilige-konnektoren', ['konnektoren'], 'nicht nur … sondern auch, entweder … oder, weder … noch.'],
    ['modalverben-subjektiv', ['modalverben', 'konjunktiv1'], 'Er soll krank sein — Modalverben, die nichts befehlen, sondern vermuten.'],
    ['irreale-vergleiche', ['konjunktiv2-vergangenheit'], 'als ob, als wäre — Vergleiche, die bewusst nicht stimmen.'],
    ['nominalisierte-adjektive', ['adjektivendungen'], 'der Angestellte, das Wesentliche — aus Adjektiven werden Nomen.'],
    ['praepositionen-gehoben', ['genitiv-b2'], 'angesichts, aufgrund, hinsichtlich — der Genitiv im gehobenen Stil.'],
    ['funktionsverbgefuege', ['nominalstil', 'praepositionen-gehoben'], 'in Betracht ziehen, zur Verfügung stellen — die Sprache der Ämter und Verträge.'],
    ['gerundivum', ['partizipialattribut', 'passiv-ersatz'], 'der zu prüfende Antrag — vier Wörter statt acht, und es steht in jedem Bescheid.'],
    ['uneingeleitete-nebensaetze', ['konjunktiv2-vergangenheit'], 'Sollten Sie Fragen haben — der Bedingungssatz ohne wenn, mit dem Verb vorn.'],
    ['korrelate', ['verben-mit-praeposition'], 'Ich freue mich darauf, dass — das kleine Wort, das dem Nebensatz den Platz freihält.']
  ];

  var NR = {}, INFO = {};
  PFAD.forEach(function (e, i) {
    NR[e[0]] = i + 1;
    INFO[e[0]] = { nr: i + 1, baut_auf: e[1] || [], warum: e[2] || '' };
  });

  /* Klartext-Titel, damit die Karte nicht "baut auf a1-akkusativ auf" schreibt. */
  /* Kurznamen fuer die Voraussetzungen. Sie stehen hier fest, damit auf
     der Karte auch dann Klartext steht, wenn das genannte Thema gerade
     nicht geladen ist — sonst stuende dort die rohe id. */
  var TITEL = {
    'a1-artikel': 'der, die, das',
    'a1-praesens': 'Verben im Präsens',
    'a1-akkusativ': 'Akkusativ',
    'a1-fragen': 'Fragen stellen',
    'negation': 'nicht oder kein',
    'possessivartikel': 'mein, dein, sein',
    'trennbare-verben': 'trennbare Verben',
    'praeteritum-sein-haben': 'war und hatte',
    'perfekt-bilden': 'Perfekt',
    'modalverben': 'Modalverben',
    'imperativ': 'Imperativ',
    'dativ': 'Dativ',
    'praepositionen-dativ': 'Präpositionen mit Dativ',
    'reflexive-verben': 'reflexive Verben',
    'komparativ': 'Vergleichen',
    'weil-dass-wenn': 'weil, dass, wenn',
    'nebensaetze': 'Nebensätze',
    'temporale-nebensaetze': 'temporale Nebensätze',
    'konnektoren': 'Konnektoren',
    'wechselpraepositionen': 'Wechselpräpositionen',
    'perfekt-praeteritum': 'Perfekt und Präteritum',
    'adjektivdeklination': 'Adjektivdeklination',
    'relativsaetze': 'Relativsätze',
    'praepositionaladverbien': 'die da-Wörter',
    'n-deklination': 'n-Deklination',
    'genitiv': 'Genitiv',
    'passiv-praesens': 'Passiv Präsens',
    'passiv-vergangenheit': 'Passiv Vergangenheit',
    'konjunktiv2': 'Konjunktiv II',
    'lassen': 'lassen',
    'modalpartikeln': 'Modalpartikeln',
    'verben-mit-praeposition': 'Verben mit Präposition',
    'adjektivendungen': 'Adjektivendungen',
    'genitiv-b2': 'Genitiv im Schriftdeutsch',
    'gegensatz-konnektoren': 'Gegensätze',
    'konjunktiv2-vergangenheit': 'Konjunktiv II der Vergangenheit',
    'passiv-b2': 'Passiv weitergedacht',
    'passiv-ersatz': 'Passiversatz',
    'nominalisierung': 'Nominalisierung',
    'nominalstil': 'Nominalstil',
    'partizipialattribut': 'Partizip als Attribut',
    'indirekte-rede': 'indirekte Rede',
    'konjunktiv1': 'Konjunktiv I',
    'zweiteilige-konnektoren': 'zweiteilige Konnektoren',
    'modalverben-subjektiv': 'subjektive Modalverben',
    'irreale-vergleiche': 'irreale Vergleiche',
    'nominalisierte-adjektive': 'nominalisierte Adjektive',
    'praepositionen-gehoben': 'gehobene Präpositionen',
    'funktionsverbgefuege': 'Funktionsverbgefüge',
    'gerundivum': 'Partizip mit zu',
    'uneingeleitete-nebensaetze': 'Nebensätze ohne wenn',
    'korrelate': 'Korrelate'
  };
  function titelSammeln() {
    if (!window.UEBUNGEN || !window.UEBUNGEN.skills) return;
    window.UEBUNGEN.skills.forEach(function (s) {
      (s.themes || []).forEach(function (t) {
        /* Nur der vordere Teil bis zum Gedankenstrich — kurz genug für die Karte. */
        if (!TITEL[t.id]) TITEL[t.id] = String(t.title || t.id).split(/\s+[—–-]\s+/)[0];
      });
    });
  }

  window.GRAMMATIKPFAD = {
    schritt: function (id) { return INFO[id] || null; },
    anzahl: PFAD.length,
    titel: function (id) { titelSammeln(); return TITEL[id] || id; },
    /* Themen im Pfad zuerst, in Pfadreihenfolge. Alles andere behält
       seine bisherige Reihenfolge und kommt dahinter. */
    sortiere: function (themen) {
      var drin = [], rest = [];
      (themen || []).forEach(function (t) { (NR[t.id] ? drin : rest).push(t); });
      drin.sort(function (a, b) { return NR[a.id] - NR[b.id]; });
      return drin.concat(rest);
    },
    /* Was sollte vorher sitzen? Gibt Klartext-Titel zurück. */
    vorher: function (id) {
      var i = INFO[id];
      if (!i || !i.baut_auf.length) return [];
      var self = this;
      return i.baut_auf.map(function (v) { return self.titel(v); });
    }
  };
})();
