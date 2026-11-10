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
        FELDER.forEach(function (f) {
          if (typeof e[f] !== 'string') return;
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
