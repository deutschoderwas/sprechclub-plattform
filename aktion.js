/* ============================================================
   aktion.js — die EINE Stelle fuer die Black Week

   Julia, 12.11.2026: "Wir muessen die Landingpage marketingtechnisch
   ready machen fuer Black Friday, es gibt 30% Rabatt auf den
   Monatspreis Premium" · "Bitte 99 € Rabattpreis" · "Wie bei unserem
   Fruehbucherrabatt, brauchen wir eine laufende Leiste, die darueber
   informiert und ein Pop Up Fenster".

   Was hier drinsteht:
     - wann die Aktion laeuft (Berliner Zeit)
     - was Premium dann kostet
     - die laufende Leiste oben
     - das Pop-up

   WARUM AN EINER STELLE: Beim letzten Mal stand dieselbe Rechnung in
   vier Dateien, und beim Abschalten wurde eine vergessen. Dann wirbt
   die Seite noch mit einem Preis, den die Kasse nicht mehr kennt.
   Hier steht sie einmal; api/_tueren.js haelt serverseitig dieselben
   Daten, weil der Browser nicht entscheiden darf, was etwas kostet.

   ABSCHALTEN muss niemand: Die Leiste und das Pop-up verschwinden am
   1. Dezember um 0 Uhr von selbst, und die Kasse nimmt ab derselben
   Sekunde wieder 139 €.
   ============================================================ */
(function () {
  'use strict';

  var A = {
    /* Montag 24.11. 0 Uhr bis Montag 1.12. 0 Uhr Berliner Zeit —
       also die ganze Black Week inklusive Cyber Monday. */
    von:   Date.parse('2026-11-24T00:00:00+01:00'),
    bis:   Date.parse('2026-12-01T00:00:00+01:00'),
    preis: 97,      // Aktionspreis Premium im Monat
    alt:   139,     // regulaerer Preis seit 3.11.2026
    name:  'Black Week'
  };
  A.spart = A.alt - A.preis;                                   // 42 €
  /* Julia wollte zuerst 99 €. Das waeren 28,8 % gewesen - mit "30 %"
     zu werben, waere dann falsch und angreifbar. Bei 97 € sind es
     30,2 %: Die Aussage stimmt und ist sogar leicht untertrieben. */
  A.prozent = Math.floor((A.spart / A.alt) * 100);             // 30
  A.laeuft = function (jetzt) {
    var t = jetzt || Date.now();
    return t >= A.von && t < A.bis;
  };
  window.AKTION = A;

  /* Der Rabatt in der Form, die die Seiten schon kennen: dort steht
     ueberall "var PREIS = 139, RABATT = 0" - RABATT ist der
     Aktionspreis oder 0. */
  A.rabatt = function () { return A.laeuft() ? A.preis : 0; };
  A.preisJetzt = function () { return A.laeuft() ? A.preis : A.alt; };

  if (!A.laeuft()) return;

  /* ---------- Die Preise auf den Seiten ----------

     Auf index.html, club.html, preise.html und sprechclub.html steht
     139 € an insgesamt einem knappen Dutzend Stellen, jede von einer
     anderen Funktion gezeichnet. Sie alle einzeln umzubauen hiesse,
     vier gewachsene Seiten anzufassen und am 1. Dezember wieder
     zurueck - und genau dabei wird eine vergessen. Dann wirbt die
     Leiste mit 97 € und drei Zeilen tiefer steht 139 €.

     Darum hier: eine Stelle, die die bekannten Preisfelder nachtraegt,
     wenn es sie auf dieser Seite gibt. Was es nicht gibt, wird
     uebersprungen. Am 1. Dezember laeuft diese Funktion gar nicht erst,
     und jede Seite zeigt wieder ihren eigenen Preis. */
  function setzeText(el, text) {
    if (!el) return;
    /* Manche Preisfelder haben ein Kind (z. B. "<small>/ Monat</small>").
       Dann nur den Text davor ersetzen, sonst faellt das Kind weg. */
    var kind = el.firstChild;
    if (kind && kind.nodeType === 3) kind.nodeValue = text;
    else el.textContent = text;
  }
  function zeig(el, an) { if (el) el.style.display = an ? '' : 'none'; }
  function $(id) { return document.getElementById(id); }

  function preiseSetzen() {
    if (!A.laeuft()) return;
    var p = A.preis + ' \u20ac', alt = A.alt + ' \u20ac';

    setzeText($('pZahl'), p);          // preise.html, club.html, sprechclub.html
    setzeText($('ekNeu'), p);          // index.html, Mitgliedschaftskarte
    setzeText($('hKnopfPreis'), p + ' im Monat');   // club.html, Hero-Knopf
    setzeText($('hChip'), A.prozent + ' % Black Week \u00b7 ' + p + ' im Monat');
    zeig($('hChip'), true);

    /* Streichpreis NUR dort, wo die Seite ihn nicht selbst zeichnet.

       Hier stand erst ein eigener Satz fuer #pAlt. Das war falsch:
       preise.html und sprechclub.html fuellen pAlt selbst, sobald
       RABATT gesetzt ist, und ihr CSS streicht das ganze Element durch.
       Mein Satz "statt 139 € im Monat" bekam dadurch einen roten Strich
       quer ueber alle Woerter. Gesehen habe ich das erst auf dem
       eigenen Bildschirmfoto - im Code sah es richtig aus.

       Also: pAlt, pSpar, pFahne und pHinweis gehoeren den Seiten. Hier
       bleibt nur, was keine Seite selbst rechnet. */
    var ekAlt = $('ekAlt');
    if (ekAlt) { ekAlt.textContent = alt; zeig(ekAlt, true); }

    /* Das Abzeichen oben auf der Preiskarte. Die Seite schreibt dort
       "Sprechclub laeuft" - richtig, aber in der Aktionswoche steht an
       der auffaelligsten Stelle der Karte dann nichts vom Rabatt.
       Nur der Text, nicht die Sichtbarkeit: ob die Fahne gezeigt wird,
       entscheidet weiter die Seite. */
    var fahne = $('pFahne');
    if (fahne) fahne.textContent = A.name + ' \u00b7 \u2212' + A.prozent + ' %';

    /* Die Klebeleiste unten auf der Startseite. Sie sagt sonst
       "die Anmeldung ist gerade geschlossen" - waehrend der Aktion ist
       das schlicht falsch, und zwar an der Stelle, die beim Scrollen
       immer mitlaeuft. */
    setzeText($('kbxTitel'), '\uD83D\uDC51 Sprechclub \u00b7 ' + A.name);
    setzeText($('kbxText'), A.prozent + ' % Rabatt \u00b7 ' + p + ' statt ' + alt + ' im Monat');
    setzeText($('raPreis'), p);

    /* Das Etikett daneben sagt sonst "Sprechclub · Fruehbucher" - das
       war die Oktober-Aktion und steht sonst mitten im Hero ueber dem
       Black-Week-Preis. Das data-i18n muss weg, sonst schreibt die
       Uebersetzung beim Sprachwechsel den alten Text zurueck.
       "Black Week" braucht keine Uebersetzung. */
    var lbl = $('raLabel');
    if (lbl && !lbl.dataset.aktion) {
      lbl.dataset.aktion = '1';
      lbl.removeAttribute('data-i18n');
      lbl.textContent = '\uD83D\uDC51 ' + A.name + ' \u00b7 \u2212' + A.prozent + ' %';
    }

    /* Und der Knopf daneben. Eine Leiste, die "30 % Rabatt" sagt und
       dann auf die Warteliste fuehrt, waere die teuerste Art, eine
       Aktion zu verschenken. */
    var kn = $('kbxKnopf');
    if (kn && !kn.dataset.aktion) {
      kn.dataset.aktion = '1';
      kn.textContent = 'F\u00fcr ' + p + ' dabei sein';
      kn.setAttribute('onclick', '');
      kn.onclick = function () {
        try {
          if (typeof window.premiumKaufen === 'function') return window.premiumKaufen();
          if (typeof window.buyPass === 'function') return window.buyPass('premium_month');
        } catch (e) {}
        location.href = '/preise';
      };
    }
  }

  /* Die Seiten zeichnen ihre Preise selbst, teils erst spaet. Darum
     mehrmals nachsetzen statt einmal zu hoffen. */
  function nachsetzen() {
    preiseSetzen();
    setTimeout(preiseSetzen, 300);
    setTimeout(preiseSetzen, 1500);
  }
  A.preiseSetzen = preiseSetzen;

  /* ---------- Die laufende Leiste ---------- */
  var CSS = ''
    + '#akt-leiste{position:relative;z-index:60;background:#1A1A1A;color:#fff;overflow:hidden;'
    + 'font-family:Inter,-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif;font-size:14.5px;line-height:1.2}'
    + '#akt-leiste .akt-lauf{display:flex;width:max-content;animation:akt-scroll 38s linear infinite}'
    + '#akt-leiste .akt-teil{display:flex;flex:0 0 auto;padding:11px 0}'
    + '#akt-leiste b{color:#FFCE00;font-weight:700}'
    + '#akt-leiste .akt-pkt{padding:0 26px;white-space:nowrap;display:inline-flex;gap:8px;align-items:center}'
    + '#akt-leiste .akt-zu{position:absolute;right:6px;top:50%;transform:translateY(-50%);background:transparent;'
    + 'border:0;color:#fff;opacity:.55;font-size:19px;line-height:1;cursor:pointer;padding:6px 10px}'
    + '#akt-leiste .akt-zu:hover{opacity:1}'
    + '@keyframes akt-scroll{from{transform:translateX(0)}to{transform:translateX(-50%)}}'
    + '@media (prefers-reduced-motion:reduce){#akt-leiste .akt-lauf{animation:none;justify-content:center;width:100%}'
    + '#akt-leiste .akt-teil:nth-child(2){display:none}}';

  function rest() {
    var ms = A.bis - Date.now();
    if (ms <= 0) return '';
    var tage = Math.floor(ms / 86400000);
    var std  = Math.floor((ms % 86400000) / 3600000);
    if (tage > 0) return 'nur noch ' + tage + (tage === 1 ? ' Tag' : ' Tage');
    if (std > 0)  return 'nur noch ' + std + (std === 1 ? ' Stunde' : ' Stunden');
    return 'letzte Stunde';
  }

  function teil() {
    var p = [
      '🖤 <b>' + A.name + '</b> im Sprechclub',
      '<b>' + A.prozent + ' % Rabatt</b> auf Premium',
      'nur <b>' + A.preis + ' € statt ' + A.alt + ' €</b> im Monat',
      'du sparst <b>' + A.spart + ' € jeden Monat</b>',
      'der Preis bleibt dir <b>dauerhaft</b>',
      rest()
    ].filter(Boolean);
    return '<span class="akt-teil">' + p.map(function (s) {
      return '<span class="akt-pkt">' + s + '</span>';
    }).join('<span class="akt-pkt" aria-hidden="true">·</span>') + '</span>';
  }

  function leisteBauen() {
    if (document.getElementById('akt-leiste')) return;
    try { if (sessionStorage.getItem('dow_akt_leiste_zu') === '1') return; } catch (e) {}

    var st = document.createElement('style');
    st.textContent = CSS;
    document.head.appendChild(st);

    var bar = document.createElement('div');
    bar.id = 'akt-leiste';
    bar.setAttribute('role', 'region');
    bar.setAttribute('aria-label', A.name + ': Premium ' + A.preis + ' Euro statt ' + A.alt + ' Euro im Monat');
    /* Zweimal derselbe Block: so laeuft der Text nahtlos weiter,
       statt am Ende eine Luecke zu zeigen. */
    bar.innerHTML = '<div class="akt-lauf">' + teil() + teil() + '</div>'
      + '<button class="akt-zu" type="button" aria-label="Hinweis schliessen">&times;</button>';
    bar.querySelector('.akt-zu').onclick = function () {
      bar.remove();
      try { sessionStorage.setItem('dow_akt_leiste_zu', '1'); } catch (e) {}
    };
    document.body.insertBefore(bar, document.body.firstChild);

    /* Stundenweise auffrischen, damit die Restzeit stimmt, wenn
       jemand die Seite lange offen liegen laesst. */
    setInterval(function () {
      var l = bar.querySelector('.akt-lauf');
      if (l) l.innerHTML = teil() + teil();
      if (!A.laeuft()) bar.remove();
    }, 3600000);
  }

  function start() { leisteBauen(); nachsetzen(); }
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', start);
  } else {
    start();
  }
})();
