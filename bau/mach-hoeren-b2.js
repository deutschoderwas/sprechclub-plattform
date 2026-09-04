/* mach-hoeren-b2.js
   Baut hoeren-b2-neu.js aus bau/hoeren-b2-quelle.json + bau/audio-b2.json.

   Auf B2 stand im Hörbereich genau ein Thema, auf C1 keins. Wer
   sich auf eine Prüfung vorbereitet, fand also ausgerechnet dort
   nichts, wo es schwer wird.

   Wie bei A1: der Bau bricht ab, wenn zu einem Hörtext die Tondatei
   fehlt. Lieber kein Thema als ein stummer Knopf. Jede Aufnahme
   wurde vorher maschinell abgehört und mit dem Skript verglichen.
*/
var fs = require('fs');
var pfad = __dirname + '/';
/* Gelesen wird aus bau/, geschrieben in den Stammordner: dort laedt
   konto.html die Datei. Vorher stand hier zweimal pfad, die erzeugte
   Datei landete also in bau/ und die ausgelieferte blieb, wie sie war. */
var wurzel = __dirname + '/../';
var Q = JSON.parse(fs.readFileSync(pfad + 'hoeren-b2-quelle.json', 'utf8'));
var TON = JSON.parse(fs.readFileSync(pfad + 'audio-b2.json', 'utf8'));

var fehlt = [];
var themen = Q.themen.map(function (th) {
  var übungen = [];

  th.hörtexte.forEach(function (h, hi) {
    var key = th.id + '#' + (hi + 1);
    var url = TON[key];
    if (!url) { fehlt.push(key); return; }
    übungen.push({
      type: 'listen',
      label: h.label,
      audioUrl: url,
      q: h.q,
      options: h.options,
      answer: h.answer,
      transcript: h.text
    });
  });

  /* Die Ablenker kommen aus den anderen Wörtern desselben Themas.
     Sie sind dadurch thematisch nah und trotzdem eindeutig falsch —
     auf B2 ist genau das die Arbeit: zwei ähnliche Begriffe
     auseinanderhalten. Die Reihenfolge mischt der Renderer selbst. */
  th.words.forEach(function (w, wi) {
    var n = th.words.length;
    var falsch = [5, 9, 13].map(function (off) { return th.words[(wi + off) % n].info; });
    übungen.push({
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
    words: th.words, exercises: übungen
  };
});

if (fehlt.length) {
  console.error('Es fehlen Tondateien für: ' + fehlt.join(', '));
  process.exit(1);
}

var kopf = '/* ============================================================\n' +
  '   hoeren-b2-neu.js — Hören auf B2\n\n' +
  '   Wird NACH uebungen.js geladen und hängt seine Themen an den\n' +
  '   Bereich "Hören" an. Vorher stand auf B2 ein einziges Thema.\n\n' +
  '   Vier Themen aus dem Alltag, in dem B2 wirklich gebraucht wird:\n' +
  '   im Team etwas ansprechen, ein Bescheid vom Amt, der Mietvertrag,\n' +
  '   und die Frage, was in den Medien Nachricht und was Meinung ist.\n\n' +
  '   Je Thema 16 Wörter, 4 Hörtexte mit Transkript, 16 Wortfragen.\n' +
  '   Die Texte sind länger als auf A1 und enthalten das, was auf\n' +
  '   diesem Niveau schwerfällt: Zahlen im Nebensatz, Umschreibungen,\n' +
  '   Zwischentoene. Gesprochen ist alles in Julias eigener Stimme;\n' +
  '   jede Aufnahme wurde vor dem Einbau maschinell abgehört.\n' +
  '   Gebaut von bau/mach-hoeren-b2.js — nicht von Hand ändern.\n' +
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


/* Ein Schluessel in der Tonkarte heisst noch nicht, dass die Datei auch
   da ist. Alle 56 Pfade zeigten auf Ordner mit Umlaut, die es nie gab —
   im Browser waere jeder Hoerknopf stumm geblieben. Deshalb wird jetzt
   nachgesehen, ob die Datei wirklich auf der Platte liegt. */
(function () {
  var ohneDatei = [];
  Object.keys(TON).forEach(function (k) {
    if (!fs.existsSync(wurzel + TON[k])) ohneDatei.push(k + ' -> ' + TON[k]);
  });
  if (ohneDatei.length) {
    console.error('Diese Tondateien gibt es nicht:');
    ohneDatei.forEach(function (z) { console.error('  ' + z); });
    process.exit(1);
  }
})();

/* Der erzeugte Anhaenger sucht seinen Bereich ueber die id. Steht dort
   ein Name, den es nicht gibt, findet er nichts und haengt still nichts
   an — die ganze Stufe waere weg, ohne dass irgendwo etwas zu sehen ist.
   Genau das stand hier: die Vorlage schrieb 'hören', der Bereich heisst
   'hoeren'. Deshalb wird der Name jetzt gegen uebungen.js geprueft. */
(function () {
  var t = js.match(/id===['"]([^'"]+)['"]/);
  if (!t) { console.error('Im erzeugten Anhaenger steht keine Bereichs-id.'); process.exit(1); }
  global.window = {};
  require(wurzel + 'uebungen.js');
  var da = ((global.window.UEBUNGEN || {}).skills || []).map(function (s) { return s.id; });
  if (da.indexOf(t[1]) < 0) {
    console.error('Den Bereich "' + t[1] + '" gibt es nicht. Bekannt sind: ' + da.join(', '));
    console.error('Der Anhaenger wuerde im Browser still nichts anhaengen.');
    process.exit(1);
  }
})();

fs.writeFileSync(wurzel + 'hoeren-b2-neu.js', js);

var zL = 0, zC = 0, zW = 0;
themen.forEach(function (t) {
  zW += t.words.length;
  t.exercises.forEach(function (e) { if (e.type === 'listen') zL++; else zC++; });
});
console.log('Themen: ' + themen.length + ', Wörter: ' + zW +
  ', Hörtexte: ' + zL + ', Wortfragen: ' + zC +
  ', Datei: ' + fs.statSync(wurzel + 'hoeren-b2-neu.js').size + ' Bytes');
