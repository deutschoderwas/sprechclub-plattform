/* ============================================================
   app-gefuehl.js — die Bewegungen einer App

   Drei Dinge, die man nicht sieht, aber sofort merkt:

   1. Blätterrichtung: vorwärts kommt die Ansicht von rechts,
      zurück von links. Dafür muss die App wissen, ob gerade
      vorwärts oder rückwärts navigiert wurde.
   2. Scrollposition je Ansicht: wer aus einer langen Liste in
      ein Thema geht und zurückkommt, landet wieder an derselben
      Stelle statt ganz oben.
   3. Die Farbe der Statusleiste passt zur Kopfzeile, nicht zu
      irgendeinem Rot.
   ============================================================ */
(function () {
  'use strict';
  if (window.__appGefuehl) return;
  window.__appGefuehl = true;

  var handy = function () { return window.innerWidth <= 900; };

  /* ---------- 1. Blätterrichtung ---------- */
  var verlauf = [];              // besuchte Ansichten in Reihenfolge
  function ansicht() { return (location.hash || '#dashboard').slice(1); }

  function richtung() {
    var v = ansicht();
    var i = verlauf.lastIndexOf(v);
    if (i >= 0 && i < verlauf.length - 1) {
      verlauf.length = i + 1;                 // wir sind zurückgegangen
      document.body.classList.add('app-zurueck');
    } else {
      verlauf.push(v);
      document.body.classList.remove('app-zurueck');
    }
    if (verlauf.length > 40) verlauf.splice(0, verlauf.length - 40);
  }

  /* ---------- 2. Scrollposition je Ansicht ---------- */
  var stand = {};
  var letzte = ansicht();

  function merken() { try { stand[letzte] = window.scrollY || 0; } catch (e) {} }
  function herstellen() {
    var v = ansicht();
    var y = stand[v];
    // Neue Ansicht: oben anfangen. Bekannte Ansicht: dort weiter, wo man war.
    window.scrollTo(0, (document.body.classList.contains('app-zurueck') && y) ? y : 0);
    letzte = v;
  }

  window.addEventListener('scroll', function () {
    clearTimeout(merken._t);
    merken._t = setTimeout(merken, 120);
  }, { passive: true });

  window.addEventListener('hashchange', function () {
    merken();
    richtung();
    // show() rendert erst nach hashchange — deshalb einen Takt warten.
    setTimeout(herstellen, 0);
  });

  /* ---------- 3. Statusleiste in der Farbe der Kopfzeile ---------- */
  function statusfarbe() {
    var m = document.querySelector('meta[name="theme-color"]');
    if (!m) { m = document.createElement('meta'); m.name = 'theme-color'; document.head.appendChild(m); }
    var kopf = document.querySelector('.topbar');
    var farbe = '#FAF8F2';
    if (kopf) {
      var c = getComputedStyle(kopf).backgroundColor;
      // durchscheinende Kopfzeile: die Grundfarbe der Seite nehmen
      if (c && c.indexOf('rgba') !== 0) farbe = c;
      else farbe = getComputedStyle(document.body).backgroundColor || farbe;
    }
    m.setAttribute('content', farbe);
  }

  /* ---------- Start ---------- */
  function los() {
    richtung();
    statusfarbe();
    /* In der installierten App ist "im Browser öffnen" kein Thema mehr —
       ein Klassenhaken, falls das Aussehen dort einmal abweichen soll. */
    var alsApp = window.matchMedia('(display-mode: standalone)').matches
      || window.navigator.standalone === true;
    if (alsApp) document.body.classList.add('als-app');
    if (handy()) document.body.classList.add('am-handy');
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', los, { once: true });
  } else los();
})();
