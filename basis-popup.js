/* ============================================================
   basis-popup.js — der Hinweis auf die Basis-Community

   Julia, 7.11.2026: "bitte öffnen und auch sofort werbung dafür
   machen als pop up fenster" — "Die Basis community kann man immer
   kaufen also das abonnieren."

   Wer auf die Seite kommt, liest zuerst vom Sprechclub, und der ist
   bis Dezember zu. Genau dann ist die Basis-Community die Antwort auf
   die Frage, die gerade im Kopf steht: "Und bis dahin?"

   Drei Regeln, damit es ein Hinweis bleibt und keine Belaestigung:
     - nicht sofort. Erst nach einer Weile oder wenn jemand ein gutes
       Stueck gelesen hat — vorher weiss er ja noch nicht, worum es geht.
     - einmal. Wer zumacht, hat fuer zehn Tage Ruhe.
     - nie dazwischen. Steht die Kasse oder die Warteliste offen, bleibt
       das Fenster weg.
   ============================================================ */
(function () {
  'use strict';
  if (window.BASISPOPUP) return;
  window.BASISPOPUP = true;

  var SCHUBLADE = 'dow_basis_popup';
  var RUHE_TAGE = 10;
  var NACH_MS   = 18000;   // so lange darf jemand in Ruhe lesen
  var AB_ANTEIL = 0.45;    // oder bis hierhin gescrollt

  function gesehen() {
    try {
      var t = Number(localStorage.getItem(SCHUBLADE) || 0);
      return t && (Date.now() - t) < RUHE_TAGE * 86400000;
    } catch (e) { return false; }
  }
  function merken() { try { localStorage.setItem(SCHUBLADE, String(Date.now())); } catch (e) {} }

  /* Steht gerade etwas anderes offen, hat das Vorrang. */
  function stoert() {
    if (/warteliste|danke|erfolg/i.test(location.hash)) return true;
    var fenster = ['#preiseWin', '#bzHg', '.bz-hg', '.ec-hg', '#ecWrap'];
    for (var i = 0; i < fenster.length; i++) {
      var e = document.querySelector(fenster[i]);
      if (e && e.offsetParent !== null) return true;
    }
    return false;
  }

  /* Jede Seite kauft anders ein. Wir nehmen, was da ist. */
  function kaufen() {
    merken();
    try {
      if (typeof window.communityKaufen === 'function') return window.communityKaufen();
      if (typeof window.jetztMitgliedWerden === 'function') {
        var b = document.getElementById('bpKauf');
        return window.jetztMitgliedWerden(b);
      }
      if (typeof window.kaufen === 'function') return window.kaufen('community');
    } catch (e) {}
    location.href = '/preise';
  }

  function stil() {
    if (document.getElementById('bp-stil')) return;
    var s = document.createElement('style'); s.id = 'bp-stil';
    s.textContent = [
      '#bpHg{position:fixed;inset:0;z-index:4000;background:rgba(20,30,34,.55);',
      '  display:grid;place-items:center;padding:18px;backdrop-filter:blur(2px)}',
      '#bpHg[hidden]{display:none}',
      '.bp-karte{position:relative;width:100%;max-width:430px;background:#FFFCF5;color:#1A1A1A;',
      '  border-radius:22px;padding:26px 24px 22px;box-shadow:0 26px 60px rgba(0,0,0,.3);',
      '  font-family:Inter,"Segoe UI",system-ui,sans-serif;text-align:left;box-sizing:border-box}',
      '.bp-karte *{box-sizing:border-box}',
      /* Die Seiten bringen eigene Regeln fuer b, s und Links mit - im
         Fenster soll nichts davon durchschlagen. Beim Nachsehen im Bild
         lag ein Strich quer durch den Preis. */
      '.bp-karte h3,.bp-karte p,.bp-karte li,.bp-karte b,.bp-karte span{text-decoration:none}',
      '.bp-zu{position:absolute;top:10px;right:10px;width:40px;height:40px;border:0;background:none;',
      '  font-size:20px;line-height:1;color:#6B7280;cursor:pointer;border-radius:50%}',
      '.bp-zu:hover{background:rgba(0,0,0,.06);color:#1A1A1A}',
      '.bp-fahne{display:inline-block;background:#FFCE00;color:#1A1A1A;font-size:11.5px;font-weight:800;',
      '  letter-spacing:.09em;text-transform:uppercase;padding:6px 12px;border-radius:999px}',
      '.bp-karte h3{font-family:"Space Grotesk",Inter,sans-serif;font-weight:700;letter-spacing:-.02em;',
      '  font-size:25px;line-height:1.15;margin:14px 0 0;text-wrap:balance}',
      '.bp-karte h3 b{color:#DD0000;font-weight:700}',
      '.bp-karte p{margin:11px 0 0;font-size:15.5px;line-height:1.6;color:#3F4650}',
      '.bp-liste{list-style:none;margin:15px 0 0;padding:0;display:flex;flex-direction:column;gap:8px}',
      '.bp-liste li{display:flex;gap:9px;align-items:flex-start;font-size:15px;line-height:1.5}',
      '.bp-liste .h{flex:0 0 auto;width:20px;height:20px;border-radius:50%;background:#A7F3D0;color:#06403A;',
      '  display:grid;place-items:center;font-size:11px;font-weight:800;margin-top:2px}',
      '.bp-preis{margin:17px 0 0;font-size:14px;color:#6B7280}',
      '.bp-preis b{font-family:"Space Grotesk",Inter,sans-serif;font-size:21px;color:#1A1A1A}',
      '.bp-kauf{display:block;width:100%;margin:13px 0 0;font:inherit;font-weight:700;font-size:16.5px;',
      '  cursor:pointer;border:0;border-radius:999px;padding:15px 18px;color:#06403A;',
      '  background:linear-gradient(135deg,#2DD4BF,#14B8A6);box-shadow:0 10px 24px rgba(20,184,166,.3)}',
      '.bp-kauf:hover{background:#14B8A6}',
      '.bp-spaeter{display:block;width:100%;margin:9px 0 0;background:none;border:0;font:inherit;',
      '  font-size:14px;color:#6B7280;cursor:pointer;padding:7px}',
      '.bp-spaeter:hover{color:#1A1A1A;text-decoration:underline}',
      '@media(max-width:420px){.bp-karte{padding:24px 18px 18px}.bp-karte h3{font-size:22px}}',
      '@media(prefers-reduced-motion:no-preference){',
      '  .bp-karte{animation:bpRein .28s ease both}',
      '  @keyframes bpRein{from{opacity:0;transform:translateY(14px) scale(.98)}to{opacity:1;transform:none}}}'
    ].join('\n');
    document.head.appendChild(s);
  }

  var hg = null, vorher = null;

  function zumachen() {
    merken();
    if (hg) hg.hidden = true;
    document.removeEventListener('keydown', aufTaste);
    try { if (vorher && vorher.focus) vorher.focus(); } catch (e) {}
  }
  function aufTaste(e) { if (e.key === 'Escape') zumachen(); }

  function aufmachen() {
    if (gesehen() || stoert() || document.getElementById('bpHg')) return;
    stil();
    vorher = document.activeElement;
    hg = document.createElement('div');
    hg.id = 'bpHg';
    hg.innerHTML =
      '<div class="bp-karte" role="dialog" aria-modal="true" aria-labelledby="bpTitel">'
      + '<button class="bp-zu" type="button" aria-label="Schließen">✕</button>'
      + '<span class="bp-fahne">Ohne Warten</span>'
      + '<h3 id="bpTitel">Du musst nicht bis zum <b>Dezember</b> warten.</h3>'
      + '<p>Der Sprechclub öffnet erst wieder im Dezember. Die <b>Basis-Community</b> ist ab sofort offen — die ganze Lernplattform, sofort freigeschaltet.</p>'
      + '<ul class="bp-liste">'
      +   '<li><span class="h">✓</span><span>Die ganze Kursbibliothek — <b>A1 bis C1</b></span></li>'
      +   '<li><span class="h">✓</span><span>Vokabeltrainer, Podcast und Übungen</span></li>'
      +   '<li><span class="h">✓</span><span><b>Amanda</b> beantwortet dir jede Frage</span></li>'
      +   '<li><span class="h">✓</span><span>Community-Chat mit anderen Lernenden</span></li>'
      + '</ul>'
      + '<p class="bp-preis"><b>16 €</b> im Monat · monatlich kündbar</p>'
      + '<button class="bp-kauf" id="bpKauf" type="button">Basis-Community starten</button>'
      + '<button class="bp-spaeter" type="button">Später vielleicht</button>'
      + '</div>';
    document.body.appendChild(hg);

    hg.querySelector('.bp-zu').onclick = zumachen;
    hg.querySelector('.bp-spaeter').onclick = zumachen;
    hg.querySelector('.bp-kauf').onclick = function () { zumachen(); kaufen(); };
    hg.addEventListener('click', function (e) { if (e.target === hg) zumachen(); });
    document.addEventListener('keydown', aufTaste);
    try { hg.querySelector('.bp-kauf').focus({ preventScroll: true }); } catch (e) {}
  }

  function los() {
    if (gesehen()) return;
    var zeit = setTimeout(aufmachen, NACH_MS);
    function beimScrollen() {
      var ganz = document.documentElement.scrollHeight - window.innerHeight;
      if (ganz > 0 && (window.scrollY / ganz) >= AB_ANTEIL) {
        window.removeEventListener('scroll', beimScrollen);
        clearTimeout(zeit);
        aufmachen();
      }
    }
    window.addEventListener('scroll', beimScrollen, { passive: true });
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', los);
  else los();
})();
