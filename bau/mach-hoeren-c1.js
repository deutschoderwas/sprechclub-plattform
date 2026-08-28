/* mach-hoeren-c1.js
   Baut hoeren-c1-neu.js aus bau/hoeren-c1-quelle.json + bau/audio-c1.json.

   Auf C1 stand im Hoerbereich gar nichts. Das war die letzte Null in
   der Niveautabelle. Auf diesem Niveau ist Hoeren keine Wortfrage
   mehr, sondern eine Frage der Absicht: Was hat die Person zugesagt,
   und was hat sie nur klingen lassen wie eine Zusage?

   Wie bei A1: der Bau bricht ab, wenn zu einem Hoertext die Tondatei
   fehlt. Lieber kein Thema als ein stummer Knopf. Jede Aufnahme
   wurde vorher maschinell abgehoert und mit dem Skript verglichen.
*/
var fs = require('fs');
var pfad = __dirname + '/';
var Q = JSON.parse(fs.readFileSync(pfad + 'hoeren-c1-quelle.json', 'utf8'));
var TON = JSON.parse(fs.readFileSync(pfad + 'audio-c1.json', 'utf8'));

var fehlt = [];
var themen = Q.themen.map(function (th) {
  var uebungen = [];

  th.hoertexte.forEach(function (h, hi) {
    var key = th.id + '#' + (hi + 1);
    var url = TON[key];
    if (!url) { fehlt.push(key); return; }
    uebungen.push({
      type: 'listen',
      label: h.label,
      audioUrl: url,
      q: h.q,
      options: h.options,
      answer: h.answer,
      transcript: h.text
    });
  });

  /* Die Ablenker kommen aus den anderen Woertern desselben Themas.
     Sie sind dadurch thematisch nah und trotzdem eindeutig falsch —
     auf C1 ist genau das die Arbeit: zwei nahe Begriffe
     auseinanderhalten. Die Reihenfolge mischt der Renderer selbst. */
  th.words.forEach(function (w, wi) {
    var n = th.words.length;
    var falsch = [5, 9, 13].map(function (off) { return th.words[(wi + off) % n].info; });
    uebungen.push({
      type: 'choice',
      audio: w.de,
      q: '🔊 Hör zu – was bedeutet das Wort?',
      options: [w.info].concat(falsch),
      answer: 0,
      w: w.de,
      explain: w.de + ' = ' + w.info + '.'
    });
  });

  return {
    id: th.id, title: th.title, level: th.level, emoji: th.emoji,
    words: th.words, exercises: uebungen
  };
});

if (fehlt.length) {
  console.error('Es fehlen Tondateien fuer: ' + fehlt.join(', '));
  process.exit(1);
}

var kopf = '/* ============================================================\n' +
  '   hoeren-c1-neu.js — Hoeren auf C1\n\n' +
  '   Wird NACH uebungen.js geladen und haengt seine Themen an den\n' +
  '   Bereich "Hoeren" an. Vorher stand auf C1 kein einziges Thema.\n\n' +
  '   Vier Themen, in denen der Ton mehr traegt als das Wort:\n' +
  '   verhandeln, in der Debatte bestehen, Zahlen im Vortrag pruefen,\n' +
  '   und hoeren, was zwischen den Zeilen gesagt wird.\n\n' +
  '   Je Thema 16 Woerter, 4 Hoertexte mit Transkript, 16 Wortfragen.\n' +
  '   Die Fragen zielen nicht auf Einzelheiten, sondern auf die\n' +
  '   Absicht: Was wurde zugesagt, was nur angedeutet, wo weicht\n' +
  '   jemand aus. Gesprochen ist alles in Julias eigener Stimme;\n' +
  '   jede Aufnahme wurde vor dem Einbau maschinell abgehoert.\n' +
  '   Gebaut von bau/mach-hoeren-c1.js — nicht von Hand aendern.\n' +
  '   ============================================================ */\n';

var js = kopf +
  '(function(){\n' +
  '  var U = window.UEBUNGEN;\n' +
  '  if(!U || !U.skills) return;\n' +
  '  var ho = null;\n' +
  "  for(var i=0;i<U.skills.length;i++){ if(U.skills[i].id==='hoeren'){ ho=U.skills[i]; break; } }\n" +
  '  if(!ho) return;\n' +
  '  if(!ho.themes) ho.themes = [];\n\n' +
  '  var NEU = ' + JSON.stringify(themen, null, 1) + ';\n\n' +
  '  NEU.forEach(function(t){\n' +
  '    var pos = -1;\n' +
  '    for(var i=0;i<ho.themes.length;i++){ if(ho.themes[i].id===t.id){ pos=i; break; } }\n' +
  '    if(pos>=0) ho.themes[pos] = t; else ho.themes.push(t);\n' +
  '  });\n' +
  '})();\n';

fs.writeFileSync(pfad + 'hoeren-c1-neu.js', js);

var zL = 0, zC = 0, zW = 0;
themen.forEach(function (t) {
  zW += t.words.length;
  t.exercises.forEach(function (e) { if (e.type === 'listen') zL++; else zC++; });
});
console.log('Themen: ' + themen.length + ', Woerter: ' + zW +
  ', Hoertexte: ' + zL + ', Wortfragen: ' + zC +
  ', Datei: ' + fs.statSync(pfad + 'hoeren-c1-neu.js').size + ' Bytes');
