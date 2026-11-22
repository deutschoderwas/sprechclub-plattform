/* ============================================================
   niveau-korrektur.js — Stufen und Fehler in den Übungsthemen

   10.11.2026, Julia: "Schaue bitte, dass die Themen wirklich zum
   Niveau passen". Alle 289 Themen wurden gegen ihre Wörter und Sätze
   geprüft (GER, Goethe/telc-Wortlisten). 243 passten, 46 lagen
   mindestens eine ganze Stufe daneben, z. B. Wortschatz "Essen" auf
   B1 mit fast nur A1/A2-Wörtern, "Typisch deutsche Wörter"
   (Torschlusspanik, Zeitgeist) dagegen zu niedrig.

   Diese Datei ändert nichts an den Datendateien, sie stellt nach dem
   Laden um: neue Stufe, ein paar korrigierte Sätze, ein paar Wörter
   raus. So bleibt sie gültig, auch wenn die Daten neu erzeugt werden.
   Läuft als späte Datei NACH themen-zusammenfuehren.js, VOR ueben.js.
   ============================================================ */
(function () {
  'use strict';
  var U = window.UEBUNGEN; if (!U || !U.skills) return;
  var STUFE = {
 "wortschatz|bildung": "A2",
 "wortschatz|essen": "A2",
 "wortschatz|natur": "A2",
 "wortschatz|medien": "A2",
 "wortschatz|reisen": "A2",
 "wortschatz|typisch-deutsch": "B2",
 "wortschatz|strand": "B2",
 "wortschatz|redemittel": "C1",
 "wortschatz|polizei-neu": "B1",
 "wortschatz|telefonieren-neu": "B1",
 "wortschatz|ankommen-neu": "B1",
 "wortschatz|a2-umzug": "B1",
 "wortschatz|c1-familie": "B2",
 "wortschatz|c1-kunden": "B2",
 "grammatik|perfekt-praeteritum": "A2",
 "grammatik|wechselpraepositionen": "A2",
 "grammatik|passiv-b2": "B1",
 "grammatik|genitiv-b2": "B1",
 "grammatik|gegensatz-konnektoren": "B1",
 "grammatik|verben-mit-praeposition": "B1",
 "grammatik|adjektivendungen": "B1",
 "grammatik|zweiteilige-konnektoren": "B2",
 "grammatik|korrelate": "B2",
 "grammatik|irreale-vergleiche": "B2",
 "grammatik|nominalisierte-adjektive": "B2",
 "hoeren|bildung": "A2",
 "hoeren|einkaufen": "A2",
 "hoeren|essen": "A2",
 "hoeren|gesundheit": "A2",
 "hoeren|medien": "A2",
 "hoeren|natur": "A2",
 "hoeren|reisen": "A2",
 "hoeren|stadt": "A2",
 "hoeren|wohnen": "A2",
 "hoeren|typisch-deutsch": "B2",
 "hoeren|familie": "B1",
 "hoeren|feste": "B1",
 "hoeren|friseur-beruf": "B1",
 "hoeren|post": "B1",
 "hoeren|reinigung": "B1",
 "hoeren|zahnarzt": "B1",
 "hoeren|buchhaltung": "B2",
 "hoeren|ingenieur": "B2",
 "hoeren|umgangssprache": "B1",
 "aussprache|sprechtempo-b2": "B1",
 "aussprache|ch-ks-b2": "B1"
};
  var ERSATZ = [
 [
  "„Der Zug war schon weg, aber er kam mit Verspätung zurück – ich hatte echt ___!\"",
  "„Der Zug hatte Verspätung, deshalb habe ich ihn noch erwischt – ich hatte echt ___!\""
 ],
 [
  "Aufgerolltes Wasser am Meer nennt man…",
  "Das Wasser, das sich hebt und an den Strand rollt, nennt man…"
 ],
 [
  "Welches Wort passt: „sehr gut, prämiert“?",
  "Welches Wort passt: „sehr gut, wie mit einer Bestnote“?"
 ],
 [
  "Vor dem Partizip steht in dieser Form immer die Präposition ___.",
  "Vor dem Partizip steht in dieser Form immer das Wort ___."
 ],
 [
  "Guten Tag, hier ist die ___ Dr.",
  "Guten Tag, hier ist die ___ Dr. Weber."
 ],
 [
  "Guten Tag, Frau Nowak, hier ist die ___ Dr.",
  "Guten Tag, Frau Nowak, hier ist die ___ Dr. Weber."
 ],
 [
  "In dieser Wand liegt eine alte Leitung.",
  "Die Leitung ist heute sehr schlecht, ich verstehe Sie kaum."
 ],
 [
  "Was ist der Randbemerkung des Redners wichtig?",
  "Was ist dem Redner bei seiner Randbemerkung wichtig?"
 ],
 [
  "Ihr Ticket wegen dem Zugang zum Lohnprogramm ist da.",
  "Ihr Ticket wegen des Zugangs zum Lohnprogramm ist da."
 ],
 [
  "Was heißt „einen Einwand einräumen“?",
  "Was heißt „etwas einräumen“?"
 ],
 [
  "Es tut mir Leid, ich kann nicht kommen.",
  "Es tut mir leid, ich kann nicht kommen."
 ]
];
  var RAUS = [["wortschatz|typisch-deutsch", "doch"], ["hoeren|typisch-deutsch", "doch"], ["wortschatz|gesundheit", "die Überweisungspflicht"], ["wortschatz|bildung", "der Streber"]];
  var FELDER = ['q', 'text', 'satz', 'answer', 'richtig', 'prompt', 'explain'];
  /* 22.11.2026: Auswahlfragen, bei denen ein „falscher“ Vorschlag auch
     stimmte. „Dort kauft man Lebensmittel“: Supermarkt UND Markt.
     „Womit man bezahlt“: Geld, aber auch Karte und Kleingeld. Der
     doppeldeutige Vorschlag wird durch ein Wort aus demselben Thema
     ersetzt, das sicher nicht passt (bei „Mein ___“ ein männliches oder
     sächliches, damit der Artikel nichts verrät). */
  var OPTIONEN = [
    ['wortschatz|a1-stadt', 'dort kauft man Lebensmittel', 'der Markt', 'die Post'],
    ['wortschatz|einkaufen', 'Welches Wort passt: „Münzen“', 'das Geld', 'die Quittung'],
    ['wortschatz|einkaufen', 'womit man bezahlt', 'das Kleingeld', 'der Rabatt'],
    ['wortschatz|einkaufen', 'womit man bezahlt', 'die Karte', 'die Tüte'],
    ['wortschatz|a1-begruessung', 'Mein ___ ist Ana Silva', 'Vorname', 'Beruf'],
    ['wortschatz|a1-begruessung', 'Mein ___ ist Ana Silva', 'Nachname', 'Gruß'],
    ['wortschatz|sprachkurs-neu', 'Mein Sohn macht seine ___', 'Aufgabe', 'Ausnahme']
  ];
  /* 22.11.2026: In den Grammatik-Auswahlfragen standen gleichbedeutende
     Wörter nebeneinander, beide richtig: „Es regnete. ___ sind wir
     spazieren gegangen.“ mit Trotzdem UND Dennoch (zehn Aufgaben in
     „Gegensatz-Konnektoren“), „Das ___ stimmen, ich bin mir nicht
     sicher“ mit kann UND könnte. Steht neben der Lösung ein Wort aus
     derselben Gruppe, wird es durch eins ersetzt, das grammatisch an die
     Stelle passt, aber inhaltlich falsch ist (trotzdem → deshalb). */
  var GLEICH = [
    [['trotzdem', 'dennoch', 'gleichwohl', 'nichtsdestotrotz'], ['deshalb', 'deswegen', 'außerdem']],
    [['deshalb', 'deswegen', 'daher', 'darum'], ['trotzdem', 'dennoch', 'außerdem']],
    [['weil', 'da'], ['obwohl', 'damit']],
    [['obwohl', 'obgleich', 'wenngleich', 'obschon'], ['weil', 'damit']],
    [['kann', 'könnte'], ['will', 'darf', 'muss']],
    [['muss', 'müsste'], ['darf', 'will']]
  ];
  function grossWie(vorbild, wort) {
    return /^[A-ZÄÖÜ]/.test(vorbild) ? wort.charAt(0).toUpperCase() + wort.slice(1) : wort;
  }
  function gleicheEntzerren(e) {
    if (e.type !== 'choice' || !Array.isArray(e.options) || typeof e.answer !== 'number') return;
    var klein = e.options.map(function (o) { return String(o).trim().toLowerCase(); });
    var loes = klein[e.answer];
    GLEICH.forEach(function (g) {
      if (g[0].indexOf(loes) < 0) return;
      klein.forEach(function (o, i) {
        if (i === e.answer || g[0].indexOf(o) < 0) return;
        var ers = g[1].filter(function (x) { return klein.indexOf(x) < 0; })[0];
        if (!ers) return;
        e.options[i] = grossWie(String(e.options[i]), ers);
        klein[i] = ers;
      });
    });
  }
  function optionenRichten(k, e) {
    if (k.indexOf('grammatik|') === 0) gleicheEntzerren(e);
    if (!Array.isArray(e.options) || typeof e.q !== 'string') return;
    OPTIONEN.forEach(function (o) {
      if (o[0] !== k || e.q.indexOf(o[1]) < 0) return;
      var i = e.options.indexOf(o[2]);
      if (i < 0 || i === e.answer || e.options.indexOf(o[3]) > -1) return;
      e.options[i] = o[3];
    });
  }
  function lauf() {
  var geaendert = 0;
  U.skills.forEach(function (sk) {
    (sk.themes || []).forEach(function (t) {
      var k = sk.id + '|' + t.id;
      if (STUFE[k]) { if (!t.levelAlt) t.levelAlt = t.level; t.level = STUFE[k]; geaendert++;
        (t.exercises || []).forEach(function (e) { if (e.level) e.level = STUFE[k]; }); }
      var weg = RAUS.filter(function (r) { return r[0] === k; }).map(function (r) { return r[1]; });
      if (weg.length) t.exercises = (t.exercises || []).filter(function (e) { return weg.indexOf(e.w || e.word || '') < 0; });
      (t.exercises || []).forEach(function (e) {
        optionenRichten(k, e);
        FELDER.forEach(function (f) {
          if (typeof e[f] !== 'string') return;
          /* 21.11.2026: Beim Fehler-Finden ist der falsche Satz Absicht —
             „Es tut mir Leid“ zu verbessern machte die Aufgabe unlösbar
             (das falsche Wort stand nicht mehr im Satz). */
          if (e.type === 'fehler' && f === 'satz') return;
          for (var i = 0; i < ERSATZ.length; i++) if (e[f] === ERSATZ[i][0]) e[f] = ERSATZ[i][1];
        });
      });
    });
  });
  /* B1-Themen, in denen gut ein Drittel A1/A2-Grundwörter steckte
     (Geld, Bus, Bett, Kopf …). Wörter, die schon in einem A1- oder
     A2-Wortschatzthema geübt werden, fallen hier heraus; die B1-Wörter
     bleiben. Mindestens 12 Wörter bleiben immer stehen. */
  var leicht = {};
  var ws = U.skills.filter(function (s) { return s.id === 'wortschatz'; })[0];
  if (ws) {
    ws.themes.forEach(function (t) {
      if (t.level === 'A1' || t.level === 'A2') (t.exercises || []).forEach(function (e) { if (e.w) leicht[e.w] = 1; });
    });
    ['einkaufen', 'gesundheit', 'stadt', 'wohnen'].forEach(function (id) {
      var t = ws.themes.filter(function (x) { return x.id === id; })[0];
      if (!t || t.level !== 'B1') return;
      var alle = {}, bleibt = {};
      (t.exercises || []).forEach(function (e) { if (e.w) { alle[e.w] = 1; if (!leicht[e.w]) bleibt[e.w] = 1; } });
      if (Object.keys(bleibt).length < 12) return;
      t.exercises = t.exercises.filter(function (e) { return !(e.w && leicht[e.w]); });
    });
  }
  window.NIVEAU_KORREKTUR = { themen: geaendert };
  }
  lauf();
  /* vielfalt.js baut beim Öffnen von "Üben" weitere Aufgaben aus den
     Sätzen. Danach noch einmal drüber, sonst stünden die alten Sätze
     dort wieder. */
  window.niveauKorrektur = lauf;
  function anVielfalt() {
    var V = window.VIELFALT;
    if (!V || !V.alle || V.alle.__nk) return false;
    var alt = V.alle;
    V.alle = function () { var r = alt.apply(this, arguments); try { lauf(); } catch (e) {} return r; };
    V.alle.__nk = true;
    return true;
  }
  if (!anVielfalt()) { var n = 0; (function warte() { if (!anVielfalt() && n++ < 40) setTimeout(warte, 250); })(); }
})();
