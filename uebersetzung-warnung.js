/* ============================================================
   uebersetzung-warnung.js — merkt, wenn der Browser uebersetzt

   Julia, 18.11.2026: "Veronika sagt sie macht die
   Pruefungsvorbereitung und da werden die Aufgaben falsch
   uebersetzt."

   Nachgesehen: In den Pruefungsdaten (lesen-telc-*.js,
   hoeren-telc-*.js, schreiben-*, sprechen-*) steht kein einziges
   fremdsprachiges Feld, und die Pruefungs-Module schreiben kein
   data-i18n. Unsere Seite uebersetzt dort also gar nichts. Was
   Veronika sieht, kommt von ihrem Browser oder einer
   Uebersetzer-Erweiterung.

   konto.html traegt seit Oktober <meta name="google"
   content="notranslate"> und translate="no". Das verhindert, dass
   Chrome die Uebersetzung von sich aus ANBIETET. Es hilft nicht,
   wenn jemand sie ausdruecklich einschaltet ("Auf Englisch
   uebersetzen" im Menue, oder "Deutsch immer uebersetzen"), und
   Erweiterungen wie Immersive Translate oder der Google-Uebersetzer
   ignorieren beides vollstaendig.

   Bei einer Prueufungsvorbereitung ist das kein Schoenheitsfehler: Ein
   uebersetzter Lueckentext hat keine Luecke mehr, eine uebersetzte
   Aufgabe pruefet nicht mehr, was sie pruefen soll, und wer "richtig"
   anklickt, bekommt die falsche Rueckmeldung.

   Also sagen wir es dem Lernenden. Zweisprachig, weil genau die
   Menschen, die uebersetzen lassen, den deutschen Satz vielleicht
   nicht lesen. Einmal pro Sitzung, wegklickbar, keine Sperre.

   Woran wir es erkennen:
     - Chrome haengt beim Uebersetzen html.translated-ltr bzw.
       html.translated-rtl an.
     - Google-Uebersetzer und die meisten Erweiterungen wickeln jeden
       Textknoten in <font ...>. Wir selbst benutzen <font> nirgends -
       geprueft: null Treffer im ganzen Lernbereich.
   ============================================================ */
(function () {
  'use strict';

  var SCHON = 'dow_uebersetzung_warnung_zu';
  var gezeigt = false;

  function uebersetzt() {
    var h = document.documentElement;
    if (h.classList.contains('translated-ltr') || h.classList.contains('translated-rtl')) return true;
    /* Ein paar <font> koennen von eingefuegten Fremdinhalten kommen;
       ab acht ist es eine Uebersetzung, die ueber die ganze Seite geht. */
    if (document.getElementsByTagName('font').length >= 8) return true;
    return false;
  }

  function zeigen() {
    if (gezeigt || document.getElementById('dow-uebw')) return;
    try { if (sessionStorage.getItem(SCHON) === '1') return; } catch (e) {}
    gezeigt = true;

    var st = document.createElement('style');
    st.textContent =
      '#dow-uebw{position:fixed;left:50%;bottom:18px;transform:translateX(-50%);z-index:9000;'
      + 'max-width:min(560px,calc(100vw - 24px));background:#1A1A1A;color:#fff;border-radius:16px;'
      + 'padding:15px 17px;box-shadow:0 18px 44px rgba(0,0,0,.4);'
      + "font-family:Inter,-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;font-size:14.5px;line-height:1.5}"
      + '#dow-uebw b{display:block;font-size:15.5px;margin-bottom:5px}'
      + '#dow-uebw .en{display:block;margin-top:7px;color:#C9C9C4;font-size:13.5px}'
      + '#dow-uebw button{margin-top:11px;background:#2DD4BF;color:#06403A;border:0;border-radius:999px;'
      + 'padding:9px 18px;font:inherit;font-weight:800;cursor:pointer;min-height:40px}'
      + '@media(max-width:560px){#dow-uebw{left:12px;right:12px;transform:none;max-width:none}}';
    document.head.appendChild(st);

    var k = document.createElement('div');
    k.id = 'dow-uebw';
    k.setAttribute('role', 'status');
    k.setAttribute('translate', 'no');
    k.className = 'notranslate';
    k.innerHTML =
      '<b>Dein Browser übersetzt diese Seite.</b>'
      + 'Dann stimmen die Aufgaben nicht mehr — Lücken verschwinden, und die Auswertung sagt dir das Falsche. '
      + 'Bitte schalte die Übersetzung für diese Seite aus.'
      + '<span class="en">Your browser is translating this page. The exercises will not work correctly — '
      + 'please turn the translation off for this page.</span>'
      + '<button type="button">Verstanden</button>';
    k.querySelector('button').onclick = function () {
      k.remove();
      try { sessionStorage.setItem(SCHON, '1'); } catch (e) {}
    };
    document.body.appendChild(k);
  }

  function pruefen() { if (uebersetzt()) zeigen(); }

  function start() {
    pruefen();
    /* Uebersetzt wird oft erst ein paar Sekunden nach dem Laden, und
       Erweiterungen fassen auch spaeter nachgeladene Teile an - etwa
       eine Pruefungsaufgabe, die erst beim Starten entsteht. */
    var n = 0;
    var uhr = setInterval(function () { pruefen(); if (++n > 40 || gezeigt) clearInterval(uhr); }, 1500);
    try {
      new MutationObserver(pruefen).observe(document.documentElement,
        { subtree: true, childList: true, attributes: true, attributeFilter: ['class'] });
    } catch (e) {}
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', start);
  else start();
})();
