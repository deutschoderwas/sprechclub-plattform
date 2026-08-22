/* ============================================================
   zeichen-plus.js — sechzehn neue Zeichen, und Schluss mit Emojis

   Warum überhaupt: Emojis sind das Gegenteil von hochwertig. Sie
   sehen auf jedem Gerät anders aus (🔥 ist auf dem iPhone ein
   anderes Bild als auf Android), man kann sie nicht einfärben,
   sie fransen beim Vergrößern aus, und sie sind das erste, wonach
   ein schnell gebautes Programm greift. Genau daran erkennt man es.

   deutschoderwas hat längst eine eigene Bildsprache: club-zeichen.js
   — Tintenstrich, gelbe Markierung leicht daneben, ein Tupfer
   Türkis, hier und da ein grüner Funke. Bisher gab es zwanzig
   Zeichen, und benutzt wurden sie nur in der Seitenleiste.

   Diese Datei tut zwei Dinge:
     1. Sie legt sechzehn Zeichen nach, in derselben Handschrift.
     2. Sie tauscht die Emojis der Oberfläche gegen die Zeichen —
        aber NUR dort, wo die Oberfläche spricht. Was Schüler
        schreiben, bleibt unangetastet: im Community-Chat, in
        Nachrichten und in Namen wird nichts ersetzt.

   Einbinden NACH club-zeichen.js:
     <script src="zeichen-plus.js?v=1" defer></script>
   ============================================================ */
(function () {
  'use strict';
  if (window.__zeichenPlus) return;
  window.__zeichenPlus = true;

  function los() {
    if (!window.ZEICHEN || !ZEICHEN.liste) return false;
    var Z = ZEICHEN.liste;

    /* ---------- Die neuen Zeichen ----------
       Raster 32x32 wie alle anderen. mk = die gelbe Markierung
       dahinter, tn = der Tintenstrich, tu = Türkis, fu = Funke. */

    Z.karten = { titel: 'Vokabelkarten',
      mk: '<path class="mk" d="M5 12 L25 9.5 L26 17 L6 19.5 Z"/>',
      tn: '<rect class="tu" x="12" y="6.5" width="15" height="18" rx="2.5"/>' +
          '<rect class="tn" x="12" y="6.5" width="15" height="18" rx="2.5"/>' +
          '<rect class="tn" x="5" y="9.5" width="15" height="18" rx="2.5" fill="#FFFDF3"/>' +
          '<path class="tn" d="M9 16 H16"/><path class="tn" d="M9 20 H14"/>' };

    Z.essen = { titel: 'Essen gehen',
      mk: '<path class="mk" d="M7 13 L27 10.5 L28 18 L8 20.5 Z"/>',
      tn: '<circle class="tn" cx="17" cy="17" r="8" fill="none"/>' +
          '<circle class="tu" cx="17" cy="17" r="4.2" fill="none"/>' +
          '<path class="tn" d="M4.5 6 V12 M7 6 V12 M9.5 6 V12"/>' +
          '<path class="tn" d="M7 12 V26"/>' +
          '<path class="tn" d="M27.5 6 c-2 2 -2 6 0 7.5 V26"/>' };

    Z.haus = { titel: 'Wohnen',
      mk: '<path class="mk" d="M5 17 L26 14.5 L27 22 L6 24.5 Z"/>',
      tn: '<path class="tn" d="M4 15.5 L16 6 L28 15.5"/>' +
          '<path class="tn" d="M7 14 V26 H25 V14"/>' +
          '<path class="tu" d="M13.5 26 V18.5 H18.5 V26"/>' +
          '<path class="tn" d="M13.5 26 V18.5 H18.5 V26"/>' };

    Z.serie = { titel: 'Tage am Stück',
      mk: '<path class="mk" d="M8 16 L25 14 L26 22 L9 24 Z"/>',
      tn: '<path class="tn" d="M16 3.5 c3.5 5 6.5 7.5 6.5 12 a6.5 6.5 0 0 1 -13 0 c0-2.6 1.6-4.6 3.4-6.4 c.9 1.9 1.8 2.6 2.6 3.1 c0-3 -1.2-5.2 .5-8.7 Z"/>' +
          '<path class="tu" d="M16 15 c1.8 2.2 3 3.3 3 5.2 a3 3 0 0 1 -6 0 c0-1.6 1.3-3 3-5.2 Z"/>' };

    Z.herz = { titel: 'Gemerkt',
      mk: '<path class="mk" d="M5 13 L26 10.5 L27 18 L6 20.5 Z"/>',
      tn: '<path class="tn" d="M16 26.5 C6.5 19.8 4.5 14.8 7.8 11.4 C10.7 8.4 14 9.9 16 12.8 C18 9.9 21.3 8.4 24.2 11.4 C27.5 14.8 25.5 19.8 16 26.5 Z"/>' +
          '<path class="tu" d="M16 22.5 c-4.6-3.4 -5.7-5.9 -4.1-7.6 c1.4-1.5 3-.8 4.1.7 c1.1-1.5 2.7-2.2 4.1-.7 c1.6 1.7 .5 4.2 -4.1 7.6 Z"/>' };

    Z.ton = { titel: 'Anhören',
      mk: '<path class="mk" d="M4 13 L21 11 L22 18.5 L5 20.5 Z"/>',
      tn: '<path class="tn" d="M5 12.5 H9.5 L15.5 7 V25 L9.5 19.5 H5 a1 1 0 0 1 -1 -1 V13.5 a1 1 0 0 1 1 -1 Z"/>' +
          '<path class="tu" d="M19.5 12.5 a5.5 5.5 0 0 1 0 7"/>' +
          '<path class="tn" d="M19.5 12.5 a5.5 5.5 0 0 1 0 7"/>' +
          '<path class="tn" d="M23 9 a10 10 0 0 1 0 14"/>' };

    Z.mikro = { titel: 'Sprechen',
      mk: '<path class="mk" d="M8 8 L25 6 L26 14 L9 16 Z"/>',
      tn: '<rect class="tn" x="12" y="3.5" width="8" height="14" rx="4"/>' +
          '<rect class="tu" x="13.6" y="5.2" width="4.8" height="8" rx="2.4"/>' +
          '<path class="tn" d="M7.5 15 a8.5 8.5 0 0 0 17 0"/>' +
          '<path class="tn" d="M16 23.5 V28"/><path class="tn" d="M11.5 28 H20.5"/>' };

    Z.kopfhoerer = { titel: 'Hören',
      mk: '<path class="mk" d="M5 15 L26 13 L27 20.5 L6 22.5 Z"/>',
      tn: '<path class="tn" d="M5.5 21 V16 a10.5 10.5 0 0 1 21 0 V21"/>' +
          '<rect class="tu" x="3.5" y="18.5" width="6" height="9" rx="2.6"/>' +
          '<rect class="tn" x="3.5" y="18.5" width="6" height="9" rx="2.6"/>' +
          '<rect class="tu" x="22.5" y="18.5" width="6" height="9" rx="2.6"/>' +
          '<rect class="tn" x="22.5" y="18.5" width="6" height="9" rx="2.6"/>' };

    Z.buch = { titel: 'Lesen',
      mk: '<path class="mk" d="M4 12 L27 9.5 L28 17 L5 19.5 Z"/>',
      tn: '<path class="tn" d="M16 9 C13 6.5 9 6 5 6.8 V24 c4-.8 8-.3 11 2.2"/>' +
          '<path class="tn" d="M16 9 c3-2.5 7-3 11-2.2 V24 c-4-.8 -8-.3 -11 2.2"/>' +
          '<path class="tn" d="M16 9 V26.2"/>' +
          '<path class="tu" d="M8.5 12 H13"/><path class="tu" d="M8.5 16 H13"/>' };

    Z.stift = { titel: 'Schreiben',
      mk: '<path class="mk" d="M5 19 L23 16.5 L24 23.5 L6 26 Z"/>',
      tn: '<path class="tn" d="M6 26 L7.6 20.4 L20.5 7.5 a2.6 2.6 0 0 1 3.7 0 l1.3 1.3 a2.6 2.6 0 0 1 0 3.7 L12.6 25.4 Z"/>' +
          '<path class="tn" d="M18.8 9.2 L24.8 15.2"/>' +
          '<path class="tu" d="M7.6 20.4 L12.6 25.4 L6 26 Z"/>' };

    Z.idee = { titel: 'Tipp',
      mk: '<path class="mk" d="M7 9 L25 7 L26 15 L8 17 Z"/>',
      tn: '<path class="tn" d="M16 3.5 a8.5 8.5 0 0 1 5 15.4 V22 h-10 v-3.1 A8.5 8.5 0 0 1 16 3.5 Z"/>' +
          '<path class="tn" d="M12.5 25 h7"/><path class="tn" d="M13.5 28 h5"/>' +
          '<path class="ge" d="M13.4 10.5 a3.6 3.6 0 0 1 5.2 0 l-2.6 3.2 Z"/>' };

    Z.blitz = { titel: 'Schnell-Mix',
      mk: '<path class="mk" d="M8 12 L24 10 L25 18 L9 20 Z"/>',
      tn: '<path class="tn" d="M18.5 3 L8 17.5 h6.5 L13 29 L24 14.2 h-6.6 Z"/>' +
          '<path class="ge" d="M17.4 7.6 L12 15 h4.4 l-.9 6 5.4-7.4 h-4.4 Z"/>' };

    Z.schloss = { titel: 'Gesperrt',
      mk: '<path class="mk" d="M6 16 L25 14 L26 22 L7 24 Z"/>',
      tn: '<rect class="tn" x="6.5" y="14" width="19" height="13.5" rx="3"/>' +
          '<path class="tn" d="M10.5 14 V10.5 a5.5 5.5 0 0 1 11 0 V14"/>' +
          '<circle class="tu" cx="16" cy="20.5" r="2.4"/>' +
          '<path class="tn" d="M16 20.5 V23.5"/>' };

    Z.lupe = { titel: 'Suchen',
      mk: '<path class="mk" d="M5 11 L22 9 L23 16 L6 18 Z"/>',
      tn: '<circle class="tn" cx="14" cy="14" r="8.5"/>' +
          '<circle class="tu" cx="14" cy="14" r="5.4"/>' +
          '<path class="tn" d="M20.2 20.2 L27 27"/>' };

    Z.abgeben = { titel: 'Hausaufgabe abgeben',
      mk: '<path class="mk" d="M6 13 L25 11 L26 18.5 L7 20.5 Z"/>',
      tn: '<path class="tn" d="M7 27 V8 a1.5 1.5 0 0 1 1.5 -1.5 H18 L25 13 v14 a1.5 1.5 0 0 1 -1.5 1.5 H8.5 A1.5 1.5 0 0 1 7 27 Z"/>' +
          '<path class="tn" d="M18 6.5 V13 H25"/>' +
          '<path class="tu" d="M16 24 V17"/>' +
          '<path class="tn" d="M16 24 V17"/><path class="tn" d="M12.8 19.8 L16 16.6 L19.2 19.8"/>' };

    Z.pokal = { titel: 'Geschafft',
      mk: '<path class="mk" d="M7 9 L25 7 L26 15 L8 17 Z"/>',
      tn: '<path class="tn" d="M9.5 5.5 h13 v7 a6.5 6.5 0 0 1 -13 0 Z"/>' +
          '<path class="tn" d="M9.5 7.5 H6 a3.5 3.5 0 0 0 3.5 5.5"/>' +
          '<path class="tn" d="M22.5 7.5 H26 a3.5 3.5 0 0 1 -3.5 5.5"/>' +
          '<path class="tn" d="M16 19 V23"/><path class="tn" d="M11 27 h10"/>' +
          '<path class="tn" d="M13 23 h6 v4 h-6 Z"/>' +
          '<path class="ge" d="M16 8 l1 2.1 2.3.3 -1.7 1.6 .4 2.3 -2-1.1 -2 1.1 .4-2.3 -1.7-1.6 2.3-.3 Z"/>' };

    Z.uhr = { titel: 'Dauer',
      mk: '<path class="mk" d="M6 14 L25 12 L26 19.5 L7 21.5 Z"/>',
      tn: '<circle class="tn" cx="16" cy="17.5" r="10"/>' +
          '<path class="tn" d="M16 11.5 V17.5 L20 20"/>' +
          '<path class="tn" d="M12.5 4.5 h7"/><path class="tn" d="M16 4.5 V7.5"/>' +
          '<circle class="tu" cx="16" cy="17.5" r="2"/>' };

    Z.haken = { titel: 'Fertig',
      mk: '<path class="mk" d="M5 14 L26 11.5 L27 19 L6 21.5 Z"/>',
      tn: '<circle class="tu" cx="16" cy="16" r="11"/>' +
          '<circle class="tn" cx="16" cy="16" r="11"/>' +
          '<path class="tn" d="M10.5 16.5 L14.5 20.5 L21.8 12.2"/>' };

    Z.gruppe = { titel: 'In der Gruppe',
      mk: '<path class="mk" d="M4 15 L27 12.5 L28 20 L5 22.5 Z"/>',
      tn: '<circle class="tn" cx="12" cy="11.5" r="4.5"/>' +
          '<path class="tn" d="M4.5 25.5 c0-4.2 3.4-6.5 7.5-6.5 s7.5 2.3 7.5 6.5"/>' +
          '<circle class="tu" cx="22.5" cy="13" r="3.4"/>' +
          '<circle class="tn" cx="22.5" cy="13" r="3.4"/>' +
          '<path class="tn" d="M20 19.6 c4.5-.6 7.5 1.8 7.5 5.9"/>' };

    ZEICHEN.namen = Object.keys(Z);
    return true;
  }

  /* ============================================================
     Emojis der Oberfläche gegen Zeichen tauschen
     ============================================================ */

  /* Nur was die Oberfläche selbst sagt. Alles, was Menschen
     schreiben, ist tabu — deshalb steht der Community-Chat nicht
     in dieser Liste, und Nachrichten auch nicht. */
  var RAEUME = [
    '#v-dashboard', '#v-stunden', '#v-kalender', '#v-lernen', '#v-ueben',
    '#v-vokabeln', '#v-fortschritt', '#v-lernpfad', '#v-materialien',
    '#v-guthaben', '#v-kurse', '#v-pruefung', '#v-fertigkeit', '.stand-streifen'
  ];

  var TAUSCH = {
    '🃏': 'karten',   '🎴': 'karten',
    '🔥': 'serie',
    '💛': 'herz',     '❤️': 'herz',
    '🔊': 'ton',      '🔈': 'ton',
    '🎤': 'mikro',    '🎙️': 'mikro',  '🎙': 'mikro',
    '🎧': 'kopfhoerer',
    '📖': 'buch',     '📚': 'buch',
    '✍️': 'stift',    '✍': 'stift',   '📝': 'stift',
    '💡': 'idee',
    '⚡': 'blitz',
    '🔒': 'schloss',
    '🔍': 'lupe',
    '📮': 'abgeben',
    '🏆': 'pokal',
    '⏱️': 'uhr',      '⏱': 'uhr',     '🕐': 'uhr',
    '📅': 'kalender', '🗓️': 'kalender', '🗓': 'kalender',
    '👥': 'gruppe',   '👫': 'gruppe',
    '🎥': 'kalender',
    '🧭': 'lernpfad',
    '🔁': 'vokabeln',
    '🎬': 'kalender',
    '📊': 'fortschritt',
    '🗣️': 'sprechen', '🗣': 'sprechen',
    '🧩': 'ueben',
    '🔤': 'vokabeln',
    '📎': 'abgeben'
  };

  var muster = null;
  function musterBauen() {
    var teile = Object.keys(TAUSCH)
      .sort(function (a, b) { return b.length - a.length; })
      .map(function (e) { return e.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'); });
    muster = new RegExp('(' + teile.join('|') + ')', 'g');
  }

  function tauscheIn(wurzel) {
    if (!wurzel || !window.ZEICHEN) return;
    if (!muster) musterBauen();

    var lauf = document.createTreeWalker(wurzel, NodeFilter.SHOW_TEXT, {
      acceptNode: function (n) {
        if (!n.nodeValue || !muster.test(n.nodeValue)) return NodeFilter.FILTER_REJECT;
        muster.lastIndex = 0;
        var p = n.parentNode;
        if (!p) return NodeFilter.FILTER_REJECT;
        var tag = p.nodeName;
        /* Eingabefelder, Skripte und schon getauschte Stellen auslassen */
        if (tag === 'SCRIPT' || tag === 'STYLE' || tag === 'TEXTAREA' || tag === 'OPTION') return NodeFilter.FILTER_REJECT;
        if (p.closest && p.closest('.zeichen, .emopick, .repop, [data-kein-zeichen]')) return NodeFilter.FILTER_REJECT;
        return NodeFilter.FILTER_ACCEPT;
      }
    });

    var treffer = [], n;
    while ((n = lauf.nextNode())) treffer.push(n);

    treffer.forEach(function (knoten) {
      var text = knoten.nodeValue;
      muster.lastIndex = 0;
      var stueck = document.createDocumentFragment();
      var letzte = 0, m;
      while ((m = muster.exec(text)) !== null) {
        if (m.index > letzte) stueck.appendChild(document.createTextNode(text.slice(letzte, m.index)));
        var name = TAUSCH[m[1]];
        var s = document.createElement('span');
        s.className = 'zeichen zeichen-inline';
        s.innerHTML = ZEICHEN.html(name);
        if (!s.firstChild) { stueck.appendChild(document.createTextNode(m[1])); }
        else stueck.appendChild(s);
        letzte = m.index + m[1].length;
      }
      if (letzte < text.length) stueck.appendChild(document.createTextNode(text.slice(letzte)));
      if (knoten.parentNode) knoten.parentNode.replaceChild(stueck, knoten);
    });
  }

  function alleRaeume() {
    RAEUME.forEach(function (w) {
      var el = document.querySelector(w);
      if (el) try { tauscheIn(el); } catch (e) {}
    });
  }

  /* Der Stil für ein Zeichen mitten im Text: es sitzt auf der
     Schriftlinie und ist so groß wie ein Großbuchstabe, nicht größer. */
  function stil() {
    if (document.getElementById('zeichenPlusStil')) return;
    var s = document.createElement('style');
    s.id = 'zeichenPlusStil';
    s.textContent =
      '.zeichen-inline{display:inline-flex;vertical-align:-.22em;line-height:0;margin:0 .12em 0 0}' +
      '.zeichen-inline svg{width:1.25em;height:1.25em}' +
      '.sidebar .zeichen-inline svg,.stand-streifen .zeichen-inline svg{width:1.15em;height:1.15em}';
    document.head.appendChild(s);
  }

  function start() {
    if (!los()) { setTimeout(start, 150); return; }
    stil();
    try { ZEICHEN.alleSetzen(); } catch (e) {}
    alleRaeume();

    var haupt = document.querySelector('.main') || document.body;
    if (window.MutationObserver) {
      var wartet = false;
      new MutationObserver(function () {
        if (wartet) return;
        wartet = true;
        setTimeout(function () {
          wartet = false;
          try { ZEICHEN.alleSetzen(); } catch (e) {}
          alleRaeume();
        }, 120);
      }).observe(haupt, { childList: true, subtree: true });
    }
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', start);
  else start();
})();
