/* mach-aussprache.js
   Baut aussprache-neu.js aus bau/aussprache-quelle.json (die Fragen)
   und bau/aussprache-plan.json (Karten + Tondateien).

   Jede Tondatei wurde vor dem Bau maschinell abgehoert. Was die
   Stimme nicht richtig gesagt hat, ist nicht drin.
*/
var fs = require('fs');
var pfad = __dirname + '/';
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

  // Die Woerter im Themenkopf: kurze Form, wenn es eine gibt
  var words = p.paare.map(function (x) {
    return { de: x[5] || x[0], info: x[1], emoji: x[2] };
  });

  var ex = [];

  // 1. Nachsprechen
  p.paare.forEach(function (x, i) {
    ex.push({ type: 'speak', word: x[0], tip: x[1], audioUrl: ton(id, 'p' + (i + 1)) });
  });

  // 2. Shadowing - erst hoeren, dann selbst aufnehmen und vergleichen
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
      explain: q.hinweis || ''
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
  '   Wird NACH uebungen.js geladen und haengt seine Themen an den\n' +
  '   Bereich "Aussprache" an. Vorher lagen dort acht Themen, alle\n' +
  '   auf A2 — fuer den Anfaenger zu frueh, fuer C1 zu wenig.\n\n' +
  '   Je Thema: 6 Karten zum Nachsprechen, 2 zum Shadowing (hoeren,\n' +
  '   selbst aufnehmen, vergleichen) und 5 Fragen zur Regel.\n' +
  '   Gesprochen ist alles in Julias eigener Stimme.\n\n' +
  '   Jede Aufnahme wurde vor dem Einbau maschinell abgehoert und mit\n' +
  '   dem Soll-Text verglichen. Die Stimme hat bei Minimalpaaren in\n' +
  '   einem Zug oft zweimal dasselbe Wort gesagt ("koennen, koennen") —\n' +
  '   solche Dateien sind aussortiert und durch Kontrastsaetze ersetzt.\n' +
  '   Gebaut von bau/mach-aussprache.js — nicht von Hand aendern.\n' +
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

fs.writeFileSync(pfad + 'aussprache-neu.js', js);

var z = { speak: 0, shadow: 0, choice: 0 };
themen.forEach(function (t) { t.exercises.forEach(function (e) { z[e.type]++; }); });
console.log('Themen: ' + themen.length +
  ' (' + themen.map(function (t) { return t.level; }).join(', ') + ')' +
  ', Nachsprechen: ' + z.speak + ', Shadowing: ' + z.shadow + ', Fragen: ' + z.choice +
  ', Datei: ' + fs.statSync(pfad + 'aussprache-neu.js').size + ' Bytes');
