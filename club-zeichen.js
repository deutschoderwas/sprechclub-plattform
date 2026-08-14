/* ============================================================
   club-zeichen.js — die eigenen Zeichen des deutschoderwas club

   Warum überhaupt eigene Zeichen?
   Emojis sehen auf jedem Gerät anders aus: 🧭 ist auf dem iPhone
   ein anderes Bild als auf Android und auf Windows nochmal eins.
   Man kann sie nicht einfärben, nicht vergrößern ohne dass sie
   ausfransen, und sie gehören niemandem. Eigene Zeichen dagegen
   sehen überall gleich aus, nehmen die Markenfarben an und
   gehören dir.

   Die Handschrift dieser Zeichen:
     · Tintenstrich, überall gleich dick, mit runden Enden
     · eine gelbe Markierung dahinter, absichtlich leicht daneben —
       wie mit dem Textmarker im Schulheft
     · ein Tupfer Türkis als Farbe
     · hier und da ein grüner Funke

   Benutzung:
     <span class="zeichen">…</span>  wird automatisch gefüllt, wenn
     das Elternelement ein data-zeichen="lernen" trägt, oder direkt:
     ZEICHEN.setze(element, 'lernen')
     ZEICHEN.html('lernen')  ->  '<svg …>'
   ============================================================ */
(function () {
  'use strict';

  /* Jedes Zeichen: erst die Markierung (mk), dann die Tinte (tn).
     Raster 32x32, damit alle gleich groß wirken. */
  var Z = {

    /* --- Start und Alltag --- */
    start: {
      titel: 'Startseite',
      mk: '<path class="mk" d="M3 21.5 L29 19 L29.6 24.5 L3.6 27 Z"/>',
      tn: '<path class="tn" d="M4.5 15.5 L16 6 L27.5 15.5"/>' +
          '<path class="tn" d="M7 14.5 V25.5 a1.5 1.5 0 0 0 1.5 1.5 H23.5 a1.5 1.5 0 0 0 1.5 -1.5 V14.5"/>' +
          '<path class="tn" d="M13 27 V19.5 h6 V27"/>'
    },
    kalender: {
      titel: 'Live Unterricht',
      mk: '<path class="mk" d="M6 15 L26.5 13.5 L27 21 L6.5 22.5 Z"/>',
      tn: '<rect class="tn" x="5" y="7.5" width="22" height="19.5" rx="3"/>' +
          '<path class="tn" d="M5 13.5 H27"/>' +
          '<path class="tn" d="M11 4.5 V9"/><path class="tn" d="M21 4.5 V9"/>' +
          '<circle class="tu" cx="11" cy="19" r="2.2"/>' +
          '<path class="tn" d="M17 19 H22.5"/><path class="tn" d="M9.5 23.5 H22.5"/>'
    },

    /* --- Lernen --- */
    lernen: {
      titel: 'Lernbereich',
      mk: '<path class="mk" d="M8 10 L24.5 8.5 L25.5 18 L9 19.5 Z"/>',
      tn: '<circle class="tn" cx="16" cy="16" r="11"/>' +
          '<path class="tu" d="M20.5 11.5 L18 18 L11.5 20.5 L14 14 Z"/>' +
          '<path class="tn" d="M20.5 11.5 L18 18 L11.5 20.5 L14 14 Z"/>' +
          '<circle class="tn" cx="16" cy="16" r="1.1" fill="currentColor" stroke="none"/>'
    },
    ueben: {
      titel: 'Üben',
      mk: '<path class="mk" d="M4.5 13.5 L27 11.5 L28 18.5 L5.5 20.5 Z"/>',
      tn: '<rect class="tu" x="11" y="12.5" width="10" height="7" rx="1.5"/>' +
          '<rect class="tn" x="11" y="12.5" width="10" height="7" rx="1.5"/>' +
          '<rect class="tn" x="6" y="10" width="5" height="12" rx="1.8"/>' +
          '<rect class="tn" x="21" y="10" width="5" height="12" rx="1.8"/>' +
          '<path class="tn" d="M3.5 14 V18"/><path class="tn" d="M28.5 14 V18"/>' +
          '<path class="fu" d="M24 5.5 l1 2.2 2.2 1 -2.2 1 -1 2.2 -1-2.2 -2.2-1 2.2-1 Z"/>'
    },
    vokabeln: {
      titel: 'Vokabeln',
      mk: '<path class="mk" d="M8 13 L25 11 L26 20 L9 22 Z"/>',
      tn: '<rect class="tn" x="4.5" y="10" width="17" height="13" rx="2.5" transform="rotate(-7 13 16.5)"/>' +
          '<rect class="tu" x="10.5" y="9.5" width="17" height="13" rx="2.5" transform="rotate(6 19 16)"/>' +
          '<rect class="tn" x="10.5" y="9.5" width="17" height="13" rx="2.5" transform="rotate(6 19 16)"/>' +
          '<path class="tn" d="M14.5 14.5 H23" transform="rotate(6 19 16)"/>' +
          '<path class="tn" d="M14.5 18 H20" transform="rotate(6 19 16)"/>'
    },
    schreiben: {
      titel: 'Schreiben',
      mk: '<path class="mk" d="M5 21 L24 18.5 L24.8 24 L5.8 26.5 Z"/>',
      tn: '<path class="tn" d="M6 22 L20.5 7.5 a2.6 2.6 0 0 1 3.7 0 l1.3 1.3 a2.6 2.6 0 0 1 0 3.7 L11 27"/>' +
          '<path class="tn" d="M19 9 L23.5 13.5"/>' +
          '<path class="tu" d="M6 22 L11 27 L4.5 28.5 Z"/>' +
          '<path class="tn" d="M6 22 L11 27 L4.5 28.5 Z"/>'
    },
    hoeren: {
      titel: 'Hören',
      mk: '<path class="mk" d="M4.5 17 L27.5 15 L28 22 L5 24 Z"/>',
      tn: '<path class="tn" d="M6 20 V16.5 a10 10 0 0 1 20 0 V20"/>' +
          '<rect class="tu" x="3.5" y="18.5" width="6" height="9" rx="2.6"/>' +
          '<rect class="tn" x="3.5" y="18.5" width="6" height="9" rx="2.6"/>' +
          '<rect class="tu" x="22.5" y="18.5" width="6" height="9" rx="2.6"/>' +
          '<rect class="tn" x="22.5" y="18.5" width="6" height="9" rx="2.6"/>'
    },
    sprechen: {
      titel: 'Sprechen',
      mk: '<path class="mk" d="M5.5 9.5 L26 7.5 L27 17 L6.5 19 Z"/>',
      tn: '<path class="tu" d="M5 9 a2.5 2.5 0 0 1 2.5 -2.5 H24.5 a2.5 2.5 0 0 1 2.5 2.5 V19 a2.5 2.5 0 0 1 -2.5 2.5 H13 L7 26.5 V21.5 a2.5 2.5 0 0 1 -2 -2.5 Z"/>' +
          '<path class="tn" d="M5 9 a2.5 2.5 0 0 1 2.5 -2.5 H24.5 a2.5 2.5 0 0 1 2.5 2.5 V19 a2.5 2.5 0 0 1 -2.5 2.5 H13 L7 26.5 V21.5 a2.5 2.5 0 0 1 -2 -2.5 Z"/>' +
          '<circle class="pt" cx="11" cy="14" r="1.4"/><circle class="pt" cx="16" cy="14" r="1.4"/><circle class="pt" cx="21" cy="14" r="1.4"/>'
    },
    pruefung: {
      titel: 'Prüfungsvorbereitung',
      mk: '<path class="mk" d="M5.5 14 L24 12 L25 21 L6.5 23 Z"/>',
      tn: '<circle class="tn" cx="15" cy="17" r="10.5"/>' +
          '<circle class="tn" cx="15" cy="17" r="6"/>' +
          '<circle class="ro" cx="15" cy="17" r="2.2"/>' +
          '<path class="tn" d="M15 17 L27 5"/>' +
          '<path class="ge" d="M23.5 4 h5 v5 Z"/>' +
          '<path class="tn" d="M23.5 4 h5 v5 Z"/>'
    },
    material: {
      titel: 'Materialien',
      mk: '<path class="mk" d="M2.5 21 L29.5 18.5 L30 24 L3 26.5 Z"/>',
      tn: '<path class="tn" d="M4.5 8 h9 a3 3 0 0 1 2.5 1.5 a3 3 0 0 1 2.5 -1.5 h9 v16 h-9 a3 3 0 0 0 -2.5 1.5 a3 3 0 0 0 -2.5 -1.5 h-9 Z"/>' +
          '<path class="tn" d="M16 9.5 V25.5"/>' +
          '<path class="tn" d="M7.5 13 H12.5"/><path class="tn" d="M7.5 17 H12.5"/>' +
          '<path class="tn" d="M19.5 13 H24.5"/><path class="tn" d="M19.5 17 H24.5"/>'
    },

    /* --- Meins --- */
    fortschritt: {
      titel: 'Fortschritt',
      mk: '<path class="mk" d="M3.5 23 L29 20.5 L29.6 26 L4.1 28.5 Z"/>',
      tn: '<path class="tn" d="M4.5 27 H28"/>' +
          '<path class="tn" d="M6 22 L12.5 15.5 L17.5 19 L26 8.5"/>' +
          '<path class="tn" d="M21 7.5 H27 V13.5"/>' +
          '<circle class="tu" cx="12.5" cy="15.5" r="2"/>' +
          '<circle class="tn" cx="12.5" cy="15.5" r="2"/>' +
          '<circle class="tu" cx="17.5" cy="19" r="2"/>' +
          '<circle class="tn" cx="17.5" cy="19" r="2"/>'
    },
    profil: {
      titel: 'Profil',
      mk: '<path class="mk" d="M6 20 L26 18 L27 26.5 L7 28.5 Z"/>',
      tn: '<circle class="tu" cx="16" cy="11" r="5.5"/>' +
          '<circle class="tn" cx="16" cy="11" r="5.5"/>' +
          '<path class="tn" d="M5.5 27.5 a10.5 10.5 0 0 1 21 0"/>'
    },
    guthaben: {
      titel: 'Guthaben',
      mk: '<path class="mk" d="M2.5 15.5 L29.5 13 L30 18.5 L3 21 Z"/>',
      tn: '<path class="tu" d="M4 11.5 h24 v4 a2.5 2.5 0 0 0 0 5 v4 H4 v-4 a2.5 2.5 0 0 0 0 -5 Z"/>' +
          '<path class="tn" d="M4 11.5 h24 v4 a2.5 2.5 0 0 0 0 5 v4 H4 v-4 a2.5 2.5 0 0 0 0 -5 Z"/>' +
          '<path class="tn" d="M16 13.5 V16"/><path class="tn" d="M16 19.5 V22.5"/>'
    },
    community: {
      titel: 'Community-Chat',
      mk: '<path class="mk" d="M4 8.5 L21 6.5 L22 15 L5 17 Z"/>',
      tn: '<path class="tu" d="M3.5 8.5 a2.5 2.5 0 0 1 2.5 -2.5 h12 a2.5 2.5 0 0 1 2.5 2.5 v6 a2.5 2.5 0 0 1 -2.5 2.5 h-7 l-5 4 v-4 a2.5 2.5 0 0 1 -2.5 -2.5 Z"/>' +
          '<path class="tn" d="M3.5 8.5 a2.5 2.5 0 0 1 2.5 -2.5 h12 a2.5 2.5 0 0 1 2.5 2.5 v6 a2.5 2.5 0 0 1 -2.5 2.5 h-7 l-5 4 v-4 a2.5 2.5 0 0 1 -2.5 -2.5 Z"/>' +
          '<path class="tn" d="M24 12.5 h2 a2.5 2.5 0 0 1 2.5 2.5 v6 a2.5 2.5 0 0 1 -2.5 2.5 v4 l-5 -4 h-4.5 a2.5 2.5 0 0 1 -2.5 -2.5 v-1.5"/>'
    },
    podcast: {
      titel: 'Podcast',
      mk: '<path class="mk" d="M9 6.5 L22 5 L23 15 L10 16.5 Z"/>',
      tn: '<rect class="tu" x="11.5" y="3.5" width="9" height="15" rx="4.5"/>' +
          '<rect class="tn" x="11.5" y="3.5" width="9" height="15" rx="4.5"/>' +
          '<path class="tn" d="M6.5 15 a9.5 9.5 0 0 0 19 0"/>' +
          '<path class="tn" d="M16 24.5 V28.5"/>' +
          '<path class="tn" d="M11 28.5 H21"/>'
    },
    buddy: {
      titel: 'Sprech-Buddy',
      mk: '<path class="mk" d="M4 19 L28 17 L28.8 25 L4.8 27 Z"/>',
      tn: '<circle class="tu" cx="11" cy="10.5" r="4.5"/>' +
          '<circle class="tn" cx="11" cy="10.5" r="4.5"/>' +
          '<circle class="tn" cx="22" cy="12" r="3.8"/>' +
          '<path class="tn" d="M3.5 25.5 a7.5 7.5 0 0 1 15 0"/>' +
          '<path class="tn" d="M19 25.5 a6.5 6.5 0 0 1 9.5 -5.6"/>' +
          '<path class="fu" d="M27 4 l.9 2 2 .9 -2 .9 -.9 2 -.9-2 -2-.9 2-.9 Z"/>'
    },
    nachrichten: {
      titel: 'Nachrichten',
      mk: '<path class="mk" d="M3 19.5 L29 17 L29.6 22.5 L3.6 25 Z"/>',
      tn: '<rect class="tn" x="4" y="8" width="24" height="17" rx="2.8"/>' +
          '<path class="tu" d="M4.5 9.5 L16 18 L27.5 9.5 V11.5 L16 20 L4.5 11.5 Z"/>' +
          '<path class="tn" d="M4.5 9.5 L16 18 L27.5 9.5"/>'
    },
    lernpfad: {
      titel: 'Lernpfad',
      mk: '<path class="mk" d="M3.5 22.5 L29 20 L29.6 25.5 L4.1 28 Z"/>',
      tn: '<path class="tn" d="M7 27 C 7 19 14 21 14 15 C 14 9 22 11 22 5.5"/>' +
          '<circle class="tu" cx="7" cy="27" r="2.6"/><circle class="tn" cx="7" cy="27" r="2.6"/>' +
          '<circle class="tu" cx="14" cy="15" r="2.6"/><circle class="tn" cx="14" cy="15" r="2.6"/>' +
          '<circle class="ge" cx="22" cy="5.5" r="3"/><circle class="tn" cx="22" cy="5.5" r="3"/>'
    },
    amanda: {
      titel: 'Amanda',
      mk: '<path class="mk" d="M4 9 L24 7 L25 16 L5 18 Z"/>',
      tn: '<path class="tu" d="M4 9 a3 3 0 0 1 3 -3 h15 a3 3 0 0 1 3 3 v8 a3 3 0 0 1 -3 3 H12 l-6 5 v-5 a3 3 0 0 1 -2 -3 Z"/>' +
          '<path class="tn" d="M4 9 a3 3 0 0 1 3 -3 h15 a3 3 0 0 1 3 3 v8 a3 3 0 0 1 -3 3 H12 l-6 5 v-5 a3 3 0 0 1 -2 -3 Z"/>' +
          '<path class="tn" d="M10 11.5 h9"/><path class="tn" d="M10 15 h6"/>' +
          '<path class="fu" d="M27 6.5 l1.1 2.4 2.4 1.1 -2.4 1.1 -1.1 2.4 -1.1-2.4 -2.4-1.1 2.4-1.1 Z"/>'
    },
    fehler: {
      titel: 'Fehler-Trainer',
      mk: '<path class="mk" d="M5 10 L26 8 L27 17 L6 19 Z"/>',
      tn: '<path class="tn" d="M6 7 h20 a2 2 0 0 1 2 2 v13 a2 2 0 0 1 -2 2 H6 a2 2 0 0 1 -2 -2 V9 a2 2 0 0 1 2 -2 Z"/>' +
          '<path class="ro" d="M9 13 h9"/>' +
          '<path class="ro" d="M8.5 12 c3 1.6 6.5 -1.4 9.5 .6"/>' +
          '<path class="tn" d="M9 18 h14"/>' +
          '<path class="ro" d="M21.5 10.5 l3.5 3.5 M25 10.5 l-3.5 3.5"/>'
    }
  };

  /* Die Farben kommen aus club-stil.css. Steht die Datei nicht zur
     Verfügung, greifen diese Werte. */
  var CSS =
    '.zeichen{display:inline-flex;align-items:center;justify-content:center;flex:0 0 auto;line-height:0}' +
    '.zeichen svg{width:1.35em;height:1.35em;display:block;overflow:visible}' +
    '.zeichen .tn{fill:none;stroke:var(--tinte,#20211F);stroke-width:2.1;stroke-linecap:round;stroke-linejoin:round}' +
    '.zeichen .tu{fill:var(--tuerkis,#39CCE3);stroke:none;opacity:.65}' +
    '.zeichen .ge{fill:var(--gelb,#FFE100);stroke:none}' +
    '.zeichen .ro{fill:none;stroke:var(--rot,#DD0000);stroke-width:2.1;stroke-linecap:round;stroke-linejoin:round}' +
    '.zeichen .pt{fill:var(--tinte,#20211F);stroke:none}' +
    '.zeichen .fu{fill:var(--gruen,#77D42A);stroke:none}' +
    /* Die Markierung liegt hinter allem, leicht schief — wie ein
       Textmarker, der nicht ganz getroffen hat. */
    '.zeichen .mk{fill:var(--gelb,#FFE100);stroke:none;opacity:.55;transform:rotate(-2.5deg);transform-origin:50% 50%}' +
    /* Im aktiven Menüpunkt steht die Tinte auf Türkis — dann muss sie dunkel bleiben */
    '.navlink.active .zeichen .tn{stroke:var(--auf-tuerkis,#063138)}' +
    '.navlink.active .zeichen .tu{opacity:.9;fill:#FFFDF3}' +
    '.navlink.active .zeichen .mk{opacity:.75}' +
    '@media (prefers-reduced-motion:no-preference){' +
      '.navlink .zeichen svg,.zeichen-hupf svg{transition:transform .18s ease}' +
      '.navlink:hover .zeichen svg,.zeichen-hupf:hover svg{transform:rotate(-6deg) scale(1.06)}' +
    '}';

  function stilEinsetzen() {
    if (document.getElementById('zeichenStil')) return;
    var st = document.createElement('style');
    st.id = 'zeichenStil';
    st.textContent = CSS;
    document.head.appendChild(st);
  }

  function html(name) {
    var z = Z[name];
    if (!z) return '';
    return '<svg viewBox="0 0 32 32" role="img" aria-hidden="true" focusable="false">' +
             (z.mk || '') + z.tn +
           '</svg>';
  }

  function setze(el, name) {
    if (!el || !Z[name]) return false;
    el.classList.add('zeichen');
    el.innerHTML = html(name);
    if (!el.getAttribute('title')) el.setAttribute('title', Z[name].titel);
    return true;
  }

  /* Alles im Dokument ersetzen, was ein data-zeichen trägt. */
  function alleSetzen(wurzel) {
    stilEinsetzen();
    var liste = (wurzel || document).querySelectorAll('[data-zeichen]');
    Array.prototype.forEach.call(liste, function (el) {
      setze(el, el.getAttribute('data-zeichen'));
    });
    return liste.length;
  }

  window.ZEICHEN = {
    liste: Z,
    namen: Object.keys(Z),
    html: html,
    setze: setze,
    alleSetzen: alleSetzen,
    stil: stilEinsetzen
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function () { alleSetzen(); });
  } else {
    alleSetzen();
  }
})();
