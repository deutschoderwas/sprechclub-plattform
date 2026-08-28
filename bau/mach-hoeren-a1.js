/* mach-hoeren-a1.js
   Baut hoeren-a1-neu.js aus hoeren-a1-quelle.json + audio-a1.json.

   audio-a1.json: { "<themenId>#<nr>": "https://.../datei.mp3", ... }
   Jede listen-Aufgabe braucht eine echte Tondatei. Fehlt eine, bricht
   der Bau ab - lieber kein Thema als ein stummer Knopf.
*/
var fs = require('fs');
var pfad = __dirname + '/';
var Q = JSON.parse(fs.readFileSync(pfad + 'hoeren-a1-quelle.json', 'utf8'));
var TON = JSON.parse(fs.readFileSync(pfad + 'audio-a1.json', 'utf8'));

/* Deterministisch mischen, damit die richtige Antwort nicht immer
   an derselben Stelle steht. Die unteren Bits einer LCG sind schwach —
   deshalb werden die oberen genommen, sonst landet Platz eins nie. */
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

var fehlt = [];
var themen = Q.themen.map(function (th, ti) {
  var uebungen = [];

  // 1. echte Hoertexte
  th.hoertexte.forEach(function (h, hi) {
    var key = th.id + '#' + (hi + 1);
    var url = TON[key];
    if (!url) { fehlt.push(key); return; }
    var richtig = h.options[h.answer];
    var opt = misch(h.options, (ti + 1) * 97 + hi * 11 + 41);
    uebungen.push({
      type: 'listen',
      label: h.label,
      audioUrl: url,
      q: h.q,
      options: opt,
      answer: opt.indexOf(richtig),
      transcript: h.text
    });
  });

  // 2. Wortbedeutungen - Ablenker aus demselben Thema
  th.words.forEach(function (w, wi) {
    var n = th.words.length;
    var falsch = [5, 9, 13].map(function (off) {
      return th.words[(wi + off) % n].info;
    });
    var alle = misch([w.info].concat(falsch), (ti + 1) * 1000 + wi * 7 + 3);
    uebungen.push({
      type: 'choice',
      audio: w.de,
      q: '🔊 Hör zu – was bedeutet das Wort?',
      options: alle,
      answer: alle.indexOf(w.info),
      w: w.de,
      explain: w.de + ' = ' + w.info + '.'
    });
  });

  return {
    id: th.id,
    title: th.title,
    level: th.level,
    emoji: th.emoji,
    words: th.words,
    exercises: uebungen
  };
});

if (fehlt.length) {
  console.error('Es fehlen Tondateien fuer: ' + fehlt.join(', '));
  process.exit(1);
}

var kopf = '/* ============================================================\n' +
  '   hoeren-a1-neu.js — Hoeren auf A1\n\n' +
  '   Wird NACH uebungen.js geladen und haengt seine Themen an den\n' +
  '   Bereich "Hoeren" an. Vorher stand auf A1 nichts: der Anfaenger\n' +
  '   kam in den Hoerbereich und fand nur B1-Themen.\n\n' +
  '   Je Thema: 16 Woerter, 4 echte Hoertexte mit Ton und Transkript,\n' +
  '   16 Wortfragen. Die Stimme ist Julias eigene.\n' +
  '   Gebaut von bau/mach-hoeren-a1.js — nicht von Hand aendern.\n' +
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
  '  // A1 gehoert nach vorn: erst die neuen Themen, dann die alten.\n' +
  '  NEU.slice().reverse().forEach(function(t){\n' +
  '    var pos = -1;\n' +
  '    for(var i=0;i<ho.themes.length;i++){ if(ho.themes[i].id===t.id){ pos=i; break; } }\n' +
  '    if(pos>=0) ho.themes.splice(pos,1);\n' +
  '    ho.themes.unshift(t);\n' +
  '  });\n' +
  '})();\n';

fs.writeFileSync(pfad + 'hoeren-a1-neu.js', js);

var zahlListen = 0, zahlChoice = 0, zahlWort = 0;
themen.forEach(function (t) {
  zahlWort += t.words.length;
  t.exercises.forEach(function (e) { if (e.type === 'listen') zahlListen++; else zahlChoice++; });
});
console.log('Themen: ' + themen.length + ', Woerter: ' + zahlWort +
  ', Hoertexte: ' + zahlListen + ', Wortfragen: ' + zahlChoice +
  ', Datei: ' + fs.statSync(pfad + 'hoeren-a1-neu.js').size + ' Bytes');
