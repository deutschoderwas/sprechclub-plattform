/* ============================================================
   deutschoderwas — Klänge
   Alle Töne werden im Browser erzeugt, es wird nichts geladen.
   Das heißt: keine Wartezeit, keine Dateien, kein Datenverbrauch.

   window.klang('richtig' | 'falsch' | 'fertig' | 'stufe' | 'serie'
                | 'tipp' | 'herz' | 'punkt' | 'start')
   window.klangAn(true|false)   — an- und ausschalten
   window.klangLaeuft()         — ist er an?
   ============================================================ */
(function () {
  'use strict';

  var ctx = null, aus = false;

  try { aus = localStorage.getItem('dow_klang') === 'aus'; } catch (e) { }

  function hol() {
    if (aus) return null;
    if (!ctx) {
      var AC = window.AudioContext || window.webkitAudioContext;
      if (!AC) return null;
      try { ctx = new AC(); } catch (e) { return null; }
    }
    // Handys sperren den Ton, bis der Mensch etwas angetippt hat
    if (ctx.state === 'suspended') { try { ctx.resume(); } catch (e) { } }
    return ctx;
  }

  /* Ein einzelner Ton.
     f  Frequenz in Hertz · t0 Start in Sekunden ab jetzt · d Dauer
     v  Lautstärke · form 'sine' weich, 'triangle' heller, 'square' spielerisch
     f2 Zielfrequenz, wenn der Ton gleiten soll */
  function ton(f, t0, d, v, form, f2) {
    var c = hol(); if (!c) return;
    var o = c.createOscillator(), g = c.createGain();
    o.type = form || 'sine';
    var t = c.currentTime + t0;
    o.frequency.setValueAtTime(f, t);
    if (f2) o.frequency.exponentialRampToValueAtTime(f2, t + d);
    // weich einblenden und ausklingen lassen, sonst knackt es
    g.gain.setValueAtTime(0.0001, t);
    g.gain.exponentialRampToValueAtTime(v, t + Math.min(0.02, d * 0.25));
    g.gain.exponentialRampToValueAtTime(0.0001, t + d);
    o.connect(g); g.connect(c.destination);
    o.start(t); o.stop(t + d + 0.03);
  }

  /* Kurzes Rauschen — für das „Konfetti" beim Abschluss */
  function rauschen(t0, d, v) {
    var c = hol(); if (!c) return;
    var n = Math.floor(c.sampleRate * d);
    var puffer = c.createBuffer(1, n, c.sampleRate);
    var daten = puffer.getChannelData(0);
    for (var i = 0; i < n; i++) daten[i] = (Math.random() * 2 - 1) * (1 - i / n);
    var q = c.createBufferSource(); q.buffer = puffer;
    var f = c.createBiquadFilter(); f.type = 'bandpass'; f.frequency.value = 2400; f.Q.value = 0.8;
    var g = c.createGain(); g.gain.value = v;
    q.connect(f); f.connect(g); g.connect(c.destination);
    q.start(c.currentTime + t0);
  }

  // Töne der Dur-Tonleiter, damit alles zusammenpasst
  var N = { C4:261.6, D4:293.7, E4:329.6, F4:349.2, G4:392.0, A4:440.0, H4:493.9,
            C5:523.3, D5:587.3, E5:659.3, F5:698.5, G5:784.0, A5:880.0, C6:1046.5 };

  var KLAENGE = {
    // Richtig: ein freundlicher Dreiklang aufwärts
    richtig: function () {
      ton(N.E5, 0,    .10, .16, 'triangle');
      ton(N.G5, .055, .10, .15, 'triangle');
      ton(N.C6, .11,  .20, .14, 'triangle');
    },
    // Falsch: zwei tiefe Töne, freundlich und nicht erschreckend
    falsch: function () {
      ton(N.D4, 0,   .13, .13, 'sine');
      ton(220,  .10, .22, .12, 'sine');
    },
    // Lektion geschafft: kleine Fanfare mit Konfetti
    fertig: function () {
      ton(N.C5, 0,    .12, .15, 'triangle');
      ton(N.E5, .10,  .12, .15, 'triangle');
      ton(N.G5, .20,  .12, .15, 'triangle');
      ton(N.C6, .30,  .34, .17, 'triangle');
      ton(N.E5, .30,  .34, .09, 'sine');
      rauschen(.28, .38, .06);
    },
    // Neue Stufe erreicht
    stufe: function () {
      ton(N.G4, 0,   .11, .13, 'triangle');
      ton(N.C5, .09, .11, .14, 'triangle');
      ton(N.E5, .18, .11, .14, 'triangle');
      ton(N.G5, .27, .13, .15, 'triangle');
      ton(N.C6, .38, .40, .16, 'triangle');
      rauschen(.36, .42, .07);
    },
    // Serie verlängert — warm und kurz
    serie: function () {
      ton(N.A4, 0,   .09, .13, 'triangle');
      ton(N.C5, .07, .09, .13, 'triangle');
      ton(N.F5, .14, .24, .14, 'triangle');
    },
    // Antippen — sehr leise, nur ein Hauch
    tipp: function () { ton(N.A5, 0, .045, .045, 'sine'); },
    // Ein Herz verloren
    herz: function () { ton(330, 0, .09, .10, 'sine', 196); },
    // Punkte gutgeschrieben
    punkt: function () { ton(N.C6, 0, .07, .08, 'triangle'); ton(N.E5, .05, .09, .06, 'sine'); },
    // Übung beginnt
    start: function () { ton(N.C5, 0, .08, .10, 'sine'); ton(N.G5, .07, .14, .10, 'sine'); }
  };

  window.klang = function (art) {
    if (aus) return;
    var f = KLAENGE[art];
    if (f) { try { f(); } catch (e) { } }
  };

  window.klangAn = function (an) {
    aus = !an;
    try { localStorage.setItem('dow_klang', aus ? 'aus' : 'an'); } catch (e) { }
    if (an) { hol(); window.klang('tipp'); }
  };

  window.klangLaeuft = function () { return !aus; };

  // Erste Berührung schaltet den Ton auf Handys frei
  function wecken() {
    hol();
    document.removeEventListener('touchstart', wecken);
    document.removeEventListener('click', wecken);
    document.removeEventListener('keydown', wecken);
  }
  document.addEventListener('touchstart', wecken, { passive: true });
  document.addEventListener('click', wecken);
  document.addEventListener('keydown', wecken);
})();
