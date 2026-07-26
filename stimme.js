/* ============================================================
   deutschoderwas — Julias Stimme
   Spielt kurze, echte Aufnahmen von Julia ab: Lob, Trost, Begrüßung.
   Die Dateien liegen unter /stimme/ als .mp3 oder .m4a.

   window.julia('lob')       — ein zufälliges Lob
   window.julia('trost')     — wenn etwas falsch war
   window.julia('fertig')    — Lektion geschafft
   window.julia('hallo')     — Begrüßung beim Öffnen
   window.julia('serie')     — Serie verlängert
   window.julia('tschuess')  — Verabschiedung
   window.juliaAn(true|false)
   window.juliaLaeuft()

   Fehlt eine Datei, passiert einfach nichts — nichts geht kaputt.
   ============================================================ */
(function () {
  'use strict';

  var ORDNER = '/stimme/';
  var aus = false;
  try { aus = localStorage.getItem('dow_stimme') === 'aus'; } catch (e) { }

  /* Welche Aufnahmen es gibt. Die Dateinamen sind bewusst sprechend,
     damit Julia sie leicht zuordnen kann. */
  var CLIPS = {
    hallo: ['hallo-1', 'hallo-2', 'hallo-3'],
    lob: ['lob-1', 'lob-2', 'lob-3', 'lob-4', 'lob-5', 'lob-6'],
    trost: ['trost-1', 'trost-2', 'trost-3', 'trost-4'],
    fertig: ['fertig-1', 'fertig-2', 'fertig-3'],
    serie: ['serie-1', 'serie-2'],
    tschuess: ['tschuess-1', 'tschuess-2'],
    pruefung: ['pruefung-1', 'pruefung-2'],
    foto: ['foto-1'],
    sprechen: ['sprechen-1', 'sprechen-2']
  };

  var endung = null;      // '.mp3' oder '.m4a' — wird einmal ermittelt
  var da = false;         // gibt es überhaupt Aufnahmen?
  var zuletzt = {};       // damit sich nichts sofort wiederholt
  var laeuft = null;      // gerade spielende Aufnahme
  var pruefLauf = null;

  /* Nur EINE Anfrage: Gibt es „lob-1"? Wenn ja, gehen wir davon aus,
     dass Julia den Ordner gefüllt hat. Fehlt später eine einzelne Datei,
     passiert einfach nichts — das ist kein Fehler. */
  function pruefen() {
    if (pruefLauf) return pruefLauf;
    pruefLauf = new Promise(function (fertig) {
      var formate = ['.mp3', '.m4a'], i = 0;
      function versuch() {
        if (i >= formate.length) { fertig(false); return; }
        var f = formate[i++];
        fetch(ORDNER + 'lob-1' + f, { method: 'HEAD' })
          .then(function (r) {
            if (r.ok) { endung = f; da = true; fertig(true); }
            else versuch();
          })
          .catch(versuch);
      }
      versuch();
    });
    return pruefLauf;
  }

  function waehle(art) {
    var liste = (CLIPS[art] || []).slice();
    if (!liste.length) return null;
    if (liste.length > 1 && zuletzt[art]) {
      var ohne = liste.filter(function (n) { return n !== zuletzt[art]; });
      if (ohne.length) liste = ohne;
    }
    var w = liste[Math.floor(Math.random() * liste.length)];
    zuletzt[art] = w;
    return ORDNER + w + (endung || '.mp3');
  }

  window.julia = function (art) {
    if (aus) return Promise.resolve(false);
    return pruefen().then(function (gibtEs) {
      if (!gibtEs) return false;
      var url = waehle(art);
      if (!url) return false;
      try {
        if (laeuft) { laeuft.pause(); laeuft.currentTime = 0; }
        laeuft = new Audio(url);
        laeuft.volume = 0.92;
        laeuft.onerror = function () { };          // fehlende Datei: still übergehen
        var p = laeuft.play();
        if (p && p.catch) p.catch(function () { }); // Handy hat den Ton noch gesperrt
        return true;
      } catch (e) { return false; }
    });
  };

  window.juliaStopp = function () {
    try { if (laeuft) { laeuft.pause(); laeuft.currentTime = 0; } } catch (e) { }
  };

  window.juliaAn = function (an) {
    aus = !an;
    try { localStorage.setItem('dow_stimme', aus ? 'aus' : 'an'); } catch (e) { }
    if (an) window.julia('hallo');
  };

  window.juliaLaeuft = function () { return !aus; };

  /* Gibt es überhaupt Aufnahmen? Danach richtet sich der Schalter
     in den Einstellungen — solange nichts da ist, zeigen wir ihn nicht. */
  window.juliaVorhanden = function () { return pruefen(); };

  // im Hintergrund nachsehen, sobald die Seite steht
  if (document.readyState === 'complete') setTimeout(pruefen, 1500);
  else window.addEventListener('load', function () { setTimeout(pruefen, 1500); });
})();
