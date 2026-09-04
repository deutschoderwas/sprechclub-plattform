/* mach-hoeren-a1.js
   Baut hoeren-a1-neu.js aus hoeren-a1-quelle.json + audio-a1.json.

   audio-a1.json: { "<themenId>#<nr>": "https://.../datei.mp3", ... }
   Jede listen-Aufgabe braucht eine echte Tondatei. Fehlt eine, bricht
   der Bau ab - lieber kein Thema als ein stummer Knopf.
*/
var fs = require('fs');
var pfad = __dirname + '/';
/* Gelesen wird aus bau/, geschrieben in den Stammordner: dort laedt
   konto.html die Datei. Vorher stand hier zweimal pfad, die erzeugte
   Datei landete also in bau/ und die ausgelieferte blieb, wie sie war. */
var wurzel = __dirname + '/../';
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
  var übungen = [];

  // 1. echte Hörtexte
  th.hörtexte.forEach(function (h, hi) {
    var key = th.id + '#' + (hi + 1);
    var url = TON[key];
    if (!url) { fehlt.push(key); return; }
    var richtig = h.options[h.answer];
    var opt = misch(h.options, (ti + 1) * 97 + hi * 11 + 41);
    übungen.push({
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
    übungen.push({
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
    exercises: übungen
  };
});

if (fehlt.length) {
  console.error('Es fehlen Tondateien für: ' + fehlt.join(', '));
  process.exit(1);
}

var kopf = '/* ============================================================\n' +
  '   hoeren-a1-neu.js — Hören auf A1\n\n' +
  '   Wird NACH uebungen.js geladen und hängt seine Themen an den\n' +
  '   Bereich "Hören" an. Vorher stand auf A1 nichts: der Anfaenger\n' +
  '   kam in den Hörbereich und fand nur B1-Themen.\n\n' +
  '   Je Thema: 16 Wörter, 4 echte Hörtexte mit Ton und Transkript,\n' +
  '   16 Wortfragen. Die Stimme ist Julias eigene.\n' +
  '   Gebaut von bau/mach-hoeren-a1.js — nicht von Hand ändern.\n' +
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
  '  // A1 gehört nach vorn: erst die neuen Themen, dann die alten.\n' +
  '  NEU.slice().reverse().forEach(function(t){\n' +
  '    var pos = -1;\n' +
  '    for(var i=0;i<ho.themes.length;i++){ if(ho.themes[i].id===t.id){ pos=i; break; } }\n' +
  '    if(pos>=0) ho.themes.splice(pos,1);\n' +
  '    ho.themes.unshift(t);\n' +
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

fs.writeFileSync(wurzel + 'hoeren-a1-neu.js', js);

var zahlListen = 0, zahlChoice = 0, zahlWort = 0;
themen.forEach(function (t) {
  zahlWort += t.words.length;
  t.exercises.forEach(function (e) { if (e.type === 'listen') zahlListen++; else zahlChoice++; });
});
console.log('Themen: ' + themen.length + ', Wörter: ' + zahlWort +
  ', Hörtexte: ' + zahlListen + ', Wortfragen: ' + zahlChoice +
  ', Datei: ' + fs.statSync(wurzel + 'hoeren-a1-neu.js').size + ' Bytes');
