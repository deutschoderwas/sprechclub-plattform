/* ============================================================
   ort-bilder.js — die Bildchen für die dreizehn Orte

   Keine Fotos aus dem Netz: gezeichnet, in unseren Farben, mit
   Textmarker-Strich und leicht schiefen Linien. Das ist der
   Wiedererkennungswert — ein Foto von einer Bäckerei sieht aus
   wie jedes andere, unsere Bäckerei sieht aus wie deutschoderwas.

   Jedes Bild ist ein SVG mit viewBox 0 0 160 100, also breiter
   als hoch. So passt es als Kopfband über eine Karte, ohne dass
   etwas beschnitten werden muss.

   Farben kommen aus der Marke:
     Türkis #39CCE3 · Gelb #FFE100 · Grün #77D42A · Rot #DD0000
     Tinte  #20211F · Creme #FFF8E0
   ============================================================ */
(function () {
  'use strict';

  var T = '#39CCE3', TD = '#1990A4', G = '#FFE100', GR = '#77D42A',
      R = '#DD0000', I = '#20211F', C = '#FFF8E0', W = '#FFFDF3';

  /* Gemeinsamer Rahmen: cremefarbene Fläche, Tintenstrich,
     alles leicht aus der Achse — wie mit der Hand gezogen. */
  function rahmen(inhalt, grund) {
    return '<svg viewBox="0 0 160 100" preserveAspectRatio="xMidYMid slice" aria-hidden="true">'
      + '<rect width="160" height="100" fill="' + (grund || C) + '"/>'
      + '<g stroke="' + I + '" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round" fill="none">'
      + inhalt + '</g></svg>';
  }
  /* Der Textmarker-Wisch, der bei uns überall auftaucht. */
  function mark(x, y, b, h, farbe) {
    return '<rect x="' + x + '" y="' + y + '" width="' + b + '" height="' + (h || 9)
      + '" rx="3" fill="' + (farbe || G) + '" stroke="none" transform="rotate(-2.5 ' + x + ' ' + y + ')" opacity=".85"/>';
  }
  function f(d, farbe) { return '<path d="' + d + '" fill="' + farbe + '" stroke="' + I + '"/>'; }
  function kreis(cx, cy, r, farbe) { return '<circle cx="' + cx + '" cy="' + cy + '" r="' + r + '" fill="' + (farbe || 'none') + '" stroke="' + I + '"/>'; }

  var BILDER = {

    /* Gastronomie — Teller, Besteck, Dampf */
    gastro: rahmen(
      mark(20, 66, 118, 12, G)
      + kreis(80, 52, 24, W) + kreis(80, 52, 15, T)
      + '<path d="M40 34v36M40 34c-4 4-4 10 0 12"/>'
      + '<path d="M120 34v36M116 34v12h8V34"/>'
      + '<path d="M66 20c3-5-3-8 0-13M80 18c3-5-3-8 0-13M94 20c3-5-3-8 0-13" stroke-width="2.2"/>'),

    /* Büro — Bildschirm, Tastatur, Kaffee */
    buero: rahmen(
      mark(16, 74, 128, 11, T)
      + f('M24 24h84v46H24z', W)
      + '<path d="M40 38h52M40 48h40M40 58h30" stroke-width="2.2"/>'
      + '<path d="M52 70v8h28v-8M44 82h44"/>'
      + f('M120 44h20v22h-20z', G) + '<path d="M140 50h6v8h-6"/>'),

    /* Pflege — Herz mit Puls */
    pflege: rahmen(
      mark(24, 70, 112, 12, GR)
      + f('M80 78S40 56 40 38a16 16 0 0 1 40-8 16 16 0 0 1 40 8c0 18-40 40-40 40z', '#FFD9D9')
      + '<path d="M46 46h16l6-12 8 24 7-14 5 6h18" stroke="' + R + '" stroke-width="3"/>'),

    /* Logistik — Kartons und Pfeil */
    logistik: rahmen(
      mark(18, 72, 124, 12, G)
      + f('M26 44h44v34H26z', '#F0E2C8') + '<path d="M48 44v34M26 56h44"/>'
      + f('M78 30h40v22H78z', W) + '<path d="M98 30v22"/>'
      + '<path d="M126 62h20m-7-7 7 7-7 7" stroke="' + TD + '" stroke-width="3"/>'),

    /* Bewerbung — Mappe mit Häkchen */
    bewerbung: rahmen(
      mark(30, 72, 100, 12, T)
      + f('M44 20h56l16 16v46H44z', W) + '<path d="M100 20v16h16"/>'
      + '<path d="M56 46h44M56 58h30" stroke-width="2.2"/>'
      + '<path d="M58 70l10 10 20-22" stroke="' + GR + '" stroke-width="4"/>'),

    /* Arzt & Apotheke — Kreuz und Pille */
    arzt: rahmen(
      mark(22, 70, 116, 12, R)
      + f('M68 16h24v22h22v24H92v22H68V62H46V38h22z', '#FFD9D9')
      + kreis(120, 32, 13, G) + '<path d="M112 26l16 12" stroke-width="2.4"/>'),

    /* Amt — Haus mit Säulen und Stempel */
    amt: rahmen(
      mark(20, 74, 120, 12, G)
      + '<path d="M22 40 80 16l58 24"/>'
      + f('M32 40h96v34H32z', W)
      + '<path d="M50 44v26M70 44v26M90 44v26M110 44v26" stroke-width="2.2"/>'
      + '<g transform="rotate(-14 124 58)">' + kreis(124, 58, 13, R)
      + '<path d="M117 54h14M117 62h9" stroke="' + W + '" stroke-width="2.6"/></g>'),

    /* Laden — Einkaufswagen */
    laden: rahmen(
      mark(24, 72, 112, 12, GR)
      + '<path d="M20 24h14l12 42h58l12-30H40"/>'
      + kreis(54, 78, 7, G) + kreis(96, 78, 7, G)
      + f('M60 30h16v14H60z', T)),

    /* Zuhause — Haus mit Fenster und Rauch */
    zuhause: rahmen(
      mark(26, 76, 108, 11, T)
      + '<path d="M26 50 80 20l54 30"/>'
      + f('M38 50h84v30H38z', W)
      + f('M56 58h20v22H56z', G)
      + '<path d="M96 58h16v14H96zM104 58v14M96 65h16" stroke-width="2.2"/>'
      + '<path d="M108 26c4-5-3-8 1-13" stroke-width="2.2"/>'),

    /* Bank & Vertrag — Karte und Münzen */
    vertrag: rahmen(
      mark(20, 72, 120, 12, G)
      + f('M24 32h72v42H24z', T) + '<path d="M24 44h72M34 62h20" stroke-width="2.2"/>'
      + kreis(120, 42, 14, G) + kreis(124, 62, 14, G)
      + '<path d="M120 36v12M117 40h6" stroke-width="2.2"/>'),

    /* Unterwegs — Zug und Schienen */
    unterwegs: rahmen(
      mark(16, 78, 128, 10, G)
      + f('M30 26h72v40H30z', W) + '<path d="M30 40h72"/>'
      + f('M42 46h18v14H42z', T) + f('M72 46h18v14H72z', T)
      + kreis(46, 72, 7) + kreis(88, 72, 7)
      + '<path d="M110 40h24M110 52h24M112 64h22" stroke-width="2.2"/>'),

    /* Familie — drei Figuren */
    familie: rahmen(
      mark(18, 74, 124, 12, GR)
      + kreis(44, 34, 12, G) + '<path d="M28 74c0-12 7-20 16-20s16 8 16 20"/>'
      + kreis(84, 30, 14, T) + '<path d="M66 74c0-14 8-24 18-24s18 10 18 24"/>'
      + kreis(120, 42, 10, '#FFD9D9') + '<path d="M108 74c0-10 5-16 12-16s12 6 12 16"/>'),

    /* Unter Leuten — Sprechblasen */
    leute: rahmen(
      mark(22, 74, 116, 12, G)
      + f('M22 20h72v40H50l-14 12V60H22z', T)
      + '<path d="M38 34h40M38 46h24" stroke-width="2.2"/>'
      + f('M92 40h46v34h-22l-10 10V74H92z', W)
      + '<path d="M104 54h24" stroke-width="2.2"/>')
  };

  window.ORT_BILD = function (id) { return BILDER[id] || rahmen(mark(30, 50, 100, 14, G)); };

  /* Für das breite Band über der geöffneten Karte: dort soll nichts
     abgeschnitten werden, das Bild sitzt mittig und behält seine Form. */
  window.ORT_BILD_BREIT = function (id) {
    return window.ORT_BILD(id).replace('xMidYMid slice', 'xMidYMid meet');
  };
  window.ORT_BILDER = BILDER;
})();
