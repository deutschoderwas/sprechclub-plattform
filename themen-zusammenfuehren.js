/* ============================================================
   themen-zusammenfuehren.js — ein Thema, eine Karte

   Die Daten wachsen additiv: uebungen.js legt die Grundmenge an,
   danach haengt jede neue Datei ihre Themen an window.UEBUNGEN an.
   Dabei kann dieselbe id im selben Bereich zweimal entstehen —
   dann steht die Karte doppelt in der Liste, und weil der
   Fortschritt unter Bereich|Thema liegt, zeigen beide Karten
   denselben Balken.

   Diese Datei faengt das ab, bevor ueben.js zeichnet. Sie loescht
   nichts, sie fuehrt zusammen:

     - gleiche id im selben Bereich  → Aufgaben und Woerter
       wandern in das erste Thema, das Duplikat verschwindet
     - Aufgaben, die wortgleich doppelt vorkommen, bleiben nur
       einmal uebrig
     - das Niveau des ersten Themas gilt

   Gleiche id in verschiedenen Bereichen bleibt unangetastet:
   „arbeit" im Wortschatz und „arbeit" im Hoeren sind zwei
   verschiedene Themen, und der Fortschritt zaehlt sie schon
   getrennt.

   Stand heute findet die Datei nichts — sie ist das Netz, nicht
   die Reparatur. window.THEMEN_ZUSAMMENGEFUEHRT zeigt jederzeit,
   ob doch etwas gegriffen hat.
   ============================================================ */
(function () {
  'use strict';
  if (!window.UEBUNGEN || !window.UEBUNGEN.skills) return;

  /* Zwei Aufgaben gelten als gleich, wenn Art, Frage und Antwort
     uebereinstimmen. Das erkennt echte Doppelungen, ohne Aufgaben
     zu verlieren, die nur aehnlich aussehen. */
  function kennung(e) {
    if (!e || typeof e !== 'object') return String(e);
    var frage = e.q || e.text || e.satz || e.intro || e.auftrag || e.word || e.w || '';
    var opt = (e.options || []).join('|');
    var paare = (e.pairs || []).map(function (p) { return p.l + '>' + p.r; }).join('|');
    return [e.type, String(frage).trim(), String(e.answer), opt, paare].join('§');
  }

  var bericht = [];

  window.UEBUNGEN.skills.forEach(function (sk) {
    var gesehen = {}, behalten = [];

    (sk.themes || []).forEach(function (t) {
      if (!t || !t.id) { behalten.push(t); return; }

      if (!gesehen[t.id]) {
        gesehen[t.id] = t;
        behalten.push(t);
        return;
      }

      /* Ab hier: dieses Thema gab es in diesem Bereich schon. */
      var erst = gesehen[t.id];
      var vorher = (erst.exercises || []).length;

      var da = {};
      (erst.exercises || []).forEach(function (e) { da[kennung(e)] = true; });
      var neu = (t.exercises || []).filter(function (e) {
        var k = kennung(e);
        if (da[k]) return false;
        da[k] = true;
        return true;
      });
      erst.exercises = (erst.exercises || []).concat(neu);

      /* Wortkarten genauso: nur die, die noch fehlen. */
      var woerter = {};
      (erst.words || []).forEach(function (w) { woerter[String(w.de || w)] = true; });
      var neueW = (t.words || []).filter(function (w) {
        var k = String(w.de || w);
        if (woerter[k]) return false;
        woerter[k] = true;
        return true;
      });
      if (neueW.length) erst.words = (erst.words || []).concat(neueW);

      bericht.push({
        bereich: sk.id, thema: t.id,
        vorher: vorher, dazu: neu.length, jetzt: erst.exercises.length,
        woerterDazu: neueW.length
      });
    });

    sk.themes = behalten;
  });

  window.THEMEN_ZUSAMMENGEFUEHRT = bericht;
})();
