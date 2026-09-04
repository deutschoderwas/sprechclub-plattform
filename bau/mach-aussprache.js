/* mach-aussprache.js
   Baut aussprache-neu.js aus bau/aussprache-quelle.json (die Fragen)
   und bau/aussprache-plan.json (Karten + Tondateien).

   Jede Tondatei wurde vor dem Bau maschinell abgehört. Was die
   Stimme nicht richtig gesagt hat, ist nicht drin.
*/
var fs = require('fs');
var pfad = __dirname + '/';
/* Gelesen wird aus bau/, geschrieben in den Stammordner: dort laedt
   konto.html die Datei. Vorher stand hier zweimal pfad, die erzeugte
   Datei landete also in bau/ und die ausgelieferte blieb, wie sie war. */
var wurzel = __dirname + '/../';
var Q = JSON.parse(fs.readFileSync(pfad + 'aussprache-quelle.json', 'utf8'));
var P = JSON.parse(fs.readFileSync(pfad + 'aussprache-plan.json', 'utf8')).themen;

function ton(id, n) { return 'ton/aussprache/' + id + '-' + n + '.mp3'; }

function misch(liste, saat) {
  var a = liste.slice();
  var s = (saat * 2654435761) % 2147483647;
  for (var i = a.length - 1; i > 0; i--) {
    s = (s * 1103515245 + 12345) % 2147483648;
    var j = Math.floor(s / 65536) % (i + 1);
    var t = a[i]; a[i] = a[j]; a[j] = t;
  }
  return a;
}

var themen = [];
Object.keys(P).forEach(function (id, ti) {
  var p = P[id];
  var q = Q[id] || {};

  // Die Wörter im Themenkopf: kurze Form, wenn es eine gibt
  var words = p.paare.map(function (x) {
    return { de: x[5] || x[0], info: x[1], emoji: x[2] };
  });

  var ex = [];

  // 1. Nachsprechen
  p.paare.forEach(function (x, i) {
    ex.push({ type: 'speak', word: x[0], tip: x[1], audioUrl: ton(id, 'p' + (i + 1)) });
  });

  // 2. Shadowing - erst hören, dann selbst aufnehmen und vergleichen
  p.shadow.forEach(function (x, i) {
    ex.push({ type: 'shadow', level: p.level, text: x[0], tip: x[1], audioUrl: ton(id, 's' + (i + 1)) });
  });

  // 3. Fragen zum Verstehen der Regel
  (q.fragen || []).forEach(function (f, i) {
    var richtig = f[1][0];
    var opt = misch(f[1], (ti + 1) * 131 + i * 17 + 7);
    ex.push({
      type: 'choice',
      q: f[0],
      options: opt,
      answer: opt.indexOf(richtig),
      /* Steht bei der Frage selbst eine Erklaerung (drittes Feld),
         gilt sie. Sonst der allgemeine Hinweis des Themas. Vorher gab
         es nur den Hinweis, und wer eine bessere Erklaerung schrieb,
         musste sie in der erzeugten Datei nachtragen — beim naechsten
         Bau war sie wieder weg. */
      explain: f[2] || q.hinweis || ''
    });
  });

  themen.push({
    id: id, title: p.titel, level: p.level, emoji: p.emoji,
    words: words, exercises: ex
  });
});

// A1 zuerst, dann A2, B1, B2, C1
var RANG = { A1: 1, A2: 2, B1: 3, B2: 4, C1: 5 };
themen.sort(function (a, b) { return (RANG[a.level] || 9) - (RANG[b.level] || 9); });

var kopf = '/* ============================================================\n' +
  '   aussprache-neu.js — Aussprache von A1 bis C1\n\n' +
  '   Wird NACH uebungen.js geladen und hängt seine Themen an den\n' +
  '   Bereich "Aussprache" an. Vorher lagen dort acht Themen, alle\n' +
  '   auf A2 — für den Anfaenger zu frueh, für C1 zu wenig.\n\n' +
  '   Je Thema: 6 Karten zum Nachsprechen, 2 zum Shadowing (hören,\n' +
  '   selbst aufnehmen, vergleichen) und 5 Fragen zur Regel.\n' +
  '   Gesprochen ist alles in Julias eigener Stimme.\n\n' +
  '   Jede Aufnahme wurde vor dem Einbau maschinell abgehört und mit\n' +
  '   dem Soll-Text verglichen. Die Stimme hat bei Minimalpaaren in\n' +
  '   einem Zug oft zweimal dasselbe Wort gesagt ("können, können") —\n' +
  '   solche Dateien sind aussortiert und durch Kontrastsätze ersetzt.\n' +
  '   Gebaut von bau/mach-aussprache.js — nicht von Hand ändern.\n' +
  '   ============================================================ */\n';

var js = kopf +
  '(function(){\n' +
  '  var U = window.UEBUNGEN;\n' +
  '  if(!U || !U.skills) return;\n' +
  '  var sk = null;\n' +
  "  for(var i=0;i<U.skills.length;i++){ if(U.skills[i].id==='aussprache'){ sk=U.skills[i]; break; } }\n" +
  '  if(!sk) return;\n' +
  '  if(!sk.themes) sk.themes = [];\n\n' +
  '  var NEU = ' + JSON.stringify(themen, null, 1) + ';\n\n' +
  '  NEU.slice().reverse().forEach(function(t){\n' +
  '    var pos = -1;\n' +
  '    for(var i=0;i<sk.themes.length;i++){ if(sk.themes[i].id===t.id){ pos=i; break; } }\n' +
  '    if(pos>=0) sk.themes.splice(pos,1);\n' +
  '    sk.themes.unshift(t);\n' +
  '  });\n' +
  '})();\n';


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

fs.writeFileSync(wurzel + 'aussprache-neu.js', js);

var z = { speak: 0, shadow: 0, choice: 0 };
themen.forEach(function (t) { t.exercises.forEach(function (e) { z[e.type]++; }); });
console.log('Themen: ' + themen.length +
  ' (' + themen.map(function (t) { return t.level; }).join(', ') + ')' +
  ', Nachsprechen: ' + z.speak + ', Shadowing: ' + z.shadow + ', Fragen: ' + z.choice +
  ', Datei: ' + fs.statSync(wurzel + 'aussprache-neu.js').size + ' Bytes');
