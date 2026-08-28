/* ============================================================
   app-tipp.js — der Hinweis, dass es die Seite auch als App gibt

   Die Anleitung (app-installieren.html) ist gut — aber eine Seite,
   die niemand verlinkt, ist eine Seite, die niemand findet. Genau
   das war hier schon einmal das Problem.

   Deshalb dieser schmale Streifen unten. Er zeigt sich nur, wenn er
   etwas zu sagen hat:

     · nicht, wenn die App schon auf dem Startbildschirm liegt
       (dann laeuft sie im standalone-Modus),
     · nicht am Rechner,
     · nicht, wenn jemand ihn weggetippt hat,
     · und hoechstens dreimal insgesamt.

   Auf Android kann Chrome die App selbst anbieten. Faengt dieses
   Skript das Ereignis dafuer ab, wird aus dem Hinweis ein Knopf,
   der es in einem Schritt erledigt. Sonst fuehrt er zur Anleitung.
   ============================================================ */
(function () {
  'use strict';
  if (window.__appTipp) return;
  window.__appTipp = true;

  var SCHLUESSEL = 'dow_apptipp';
  var MAX = 3;

  function stand() {
    try { return JSON.parse(localStorage.getItem(SCHLUESSEL) || '{}') || {}; }
    catch (e) { return {}; }
  }
  function merken(o) {
    try { localStorage.setItem(SCHLUESSEL, JSON.stringify(o)); } catch (e) {}
  }

  function schonInstalliert() {
    try {
      if (window.matchMedia && window.matchMedia('(display-mode: standalone)').matches) return true;
      if (window.navigator && window.navigator.standalone) return true;   /* iOS */
    } catch (e) {}
    return false;
  }
  function amHandy() {
    try {
      return window.matchMedia('(max-width: 820px)').matches &&
             ('ontouchstart' in window || (navigator.maxTouchPoints || 0) > 0);
    } catch (e) { return false; }
  }

  var chromeAngebot = null;
  window.addEventListener('beforeinstallprompt', function (e) {
    e.preventDefault();
    chromeAngebot = e;
    var k = document.getElementById('apptipp-los');
    if (k) k.textContent = 'Jetzt hinzufügen';
  });

  function stil() {
    if (document.getElementById('apptipp-stil')) return;
    var s = document.createElement('style');
    s.id = 'apptipp-stil';
    s.textContent = [
      '#apptipp{position:fixed;left:10px;right:10px;bottom:10px;z-index:9600;',
      '  display:flex;align-items:center;gap:11px;',
      '  background:var(--karte,var(--card,#FFFDF3));border:2px solid var(--tinte,var(--ink,#20211F));',
      '  border-radius:18px;padding:10px 12px;box-shadow:3px 5px 0 rgba(32,33,31,.16);',
      '  font-family:inherit;animation:apptipp-auf .3s ease-out}',
      '@keyframes apptipp-auf{from{transform:translateY(14px);opacity:0}to{transform:none;opacity:1}}',
      '#apptipp img{width:40px;height:40px;border-radius:12px;flex:none;display:block}',
      '#apptipp .tx{flex:1;min-width:0}',
      '#apptipp .tx b{display:block;font-size:14px;line-height:1.3;color:var(--tinte,#20211F)}',
      '#apptipp .tx span{display:block;font-size:12.5px;line-height:1.4;color:var(--ink-2,var(--ink2,#54594A))}',
      '#apptipp .los{flex:none;background:var(--rot,var(--akt,#DD0000));color:#fff;border:0;',
      '  border-radius:40px;padding:0 15px;min-height:44px;font:inherit;font-weight:700;font-size:13.5px;',
      '  cursor:pointer;text-decoration:none;display:inline-flex;align-items:center}',
      '#apptipp .zu{flex:none;background:none;border:0;font:inherit;font-size:19px;line-height:1;',
      '  color:var(--ink-3,var(--ink3,#8A857C));width:36px;height:44px;cursor:pointer}',
      '@media(min-width:821px){#apptipp{display:none}}'
    ].join('');
    document.head.appendChild(s);
  }

  function weg() {
    var e = document.getElementById('apptipp');
    if (e && e.parentNode) e.parentNode.removeChild(e);
  }

  window.appTippZu = function () {
    var s = stand(); s.weg = 1; merken(s); weg();
  };

  window.appTippLos = function () {
    var s = stand(); s.weg = 1; merken(s);
    if (chromeAngebot) {
      chromeAngebot.prompt();
      chromeAngebot.userChoice.then(function () { chromeAngebot = null; weg(); });
      return;
    }
    location.href = 'app-installieren.html';
  };

  function zeigen() {
    if (document.getElementById('apptipp')) return;
    stil();
    var d = document.createElement('div');
    d.id = 'apptipp';
    d.innerHTML =
      '<img src="icons/icon-192.png" alt="" onerror="this.remove()">'
      + '<span class="tx"><b>Auf den Startbildschirm legen</b>'
      + '<span>Dann bist du mit einem Tipp hier — ohne Store.</span></span>'
      + '<button class="los" id="apptipp-los" type="button" onclick="appTippLos()">Wie geht das?</button>'
      + '<button class="zu" type="button" aria-label="Hinweis schließen" onclick="appTippZu()">✕</button>';
    document.body.appendChild(d);
    var s = stand();
    s.mal = (s.mal || 0) + 1;
    merken(s);
  }

  function pruefen() {
    if (schonInstalliert() || !amHandy()) return;
    var s = stand();
    if (s.weg || (s.mal || 0) >= MAX) return;
    /* Erst ankommen lassen, dann fragen. */
    setTimeout(zeigen, 4000);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', pruefen);
  } else {
    pruefen();
  }
})();
