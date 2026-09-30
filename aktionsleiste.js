/* ============================================================
   Aktionsleiste — die laufende Leiste ganz oben

   Weist auf den Fruehbucherrabatt fuer den Sprechclub hin und
   zeigt sich NUR im Aktionszeitraum. Davor und danach ist sie
   nicht da: kein Aufraeumen noetig, kein vergessener Banner, der
   im November noch einen abgelaufenen Rabatt bewirbt.

   Aendern willst du eigentlich nur die drei Zeilen unter START,
   ENDE und ZIEL. Alles andere passt sich an.

   Einbinden: <script src="aktionsleiste.js?v=1" defer></script>
   ============================================================ */
(function () {
  'use strict';

  /* --- Das Einzige, was man normalerweise anfasst --- */
  var START = '2026-10-01T00:00:00+02:00';   // ab wann die Leiste erscheint
  var ENDE  = '2026-11-01T00:00:00+01:00';   // wann sie wieder verschwindet (= Ende des 31.10.)
  var ZIEL  = '/preise';                     // wohin der Klick fuehrt

  /* Elf Sprachen, wie der Rest der Seite. Fehlt eine, nimmt die
     Leiste Deutsch — lieber ein deutscher Satz als eine leere Leiste. */
  var TEXT = {
    de: '🎉 Frühbucher für den Sprechclub · bis zu 60 % Rabatt · ab 39 € im Monat statt 99 € · nur bis 31. Oktober',
    en: '🎉 Early bird for the Speaking Club · up to 60 % off · from 39 € a month instead of 99 € · only until 31 October',
    ru: '🎉 Ранняя запись в разговорный клуб · скидка до 60 % · от 39 € в месяц вместо 99 € · только до 31 октября',
    uk: '🎉 Рання реєстрація до розмовного клубу · знижка до 60 % · від 39 € на місяць замість 99 € · лише до 31 жовтня',
    tr: "🎉 Konuşma Kulübü erken kayıt · %60’a varan indirim · 99 € yerine ayda 39 € · sadece 31 Ekim’e kadar",
    es: '🎉 Precio anticipado del club de conversación · hasta 60 % de descuento · desde 39 € al mes en vez de 99 € · solo hasta el 31 de octubre',
    fr: "🎉 Tarif préférentiel du club de conversation · jusqu’à 60 % de réduction · à partir de 39 € par mois au lieu de 99 € · jusqu’au 31 octobre",
    it: '🎉 Early bird per il club di conversazione · fino al 60 % di sconto · da 39 € al mese invece di 99 € · solo fino al 31 ottobre',
    ar: '🎉 التسجيل المبكر لنادي المحادثة · خصم حتى 60 % · من 39 يورو شهريًا بدل 99 · حتى 31 أكتوبر فقط',
    fa: '🎉 ثبت‌نام زودهنگام باشگاه گفت‌وگو · تا ۶۰ درصد تخفیف · از ماهی ۳۹ یورو به‌جای ۹۹ · فقط تا ۳۱ اکتبر',
    zh: '🎉 口语俱乐部早鸟价 · 最高享 6 折 · 每月 39 欧元起，而不是 99 · 仅至 10 月 31 日'

  };
  var RTL = { ar: 1, fa: 1 };

  function jetzt() { return Date.now(); }
  function imZeitraum() {
    var a = Date.parse(START), b = Date.parse(ENDE), n = jetzt();
    return !isNaN(a) && !isNaN(b) && n >= a && n < b;
  }
  function sprache() {
    var l = (document.documentElement.lang || '').slice(0, 2).toLowerCase();
    return TEXT[l] ? l : 'de';
  }

  function stil() {
    if (document.getElementById('aktionsleisteCSS')) return;
    var s = document.createElement('style');
    s.id = 'aktionsleisteCSS';
    s.textContent = [
      '.aktleiste{position:sticky;top:0;z-index:70;display:block;overflow:hidden;',
        /* Das Tuerkis aus dem Logo (Farbton 193 Grad), nicht das gruenliche
   #2DD4BF - Julia: "die Leiste laeuft gruen statt tuerkis wie mein Logo". */
        'background:linear-gradient(135deg,#7ED8EA,#35AFD0);color:#06403A;',
        'text-decoration:none;font-family:Inter,"Segoe UI",system-ui,sans-serif;',
        'font-weight:700;font-size:14.5px;line-height:1;box-shadow:0 1px 0 rgba(0,0,0,.08)}',
      '.aktleiste:hover{filter:brightness(1.04)}',
      '.aktleiste:focus-visible{outline:3px solid #06403A;outline-offset:-3px}',
      /* Bei Arabisch und Persisch stellt die Seite die ganze Richtung auf
         rtl. Ohne diese Verankerung kippt die Bahn mit: Die Stuecke lagen
         dann bei -182 px statt bei 0, und die Leiste wirkte leer.
         Die Bahn laeuft IMMER von links nach rechts — rechtslaeufig ist
         nur der Text in den einzelnen Stuecken. */
      '.aktleiste,.aktleiste-bahn{direction:ltr}',
      '.aktleiste-bahn{display:flex;width:max-content;padding:10px 0;',
        'animation:aktlauf 34s linear infinite}',
      '.aktleiste:hover .aktleiste-bahn,.aktleiste:focus-within .aktleiste-bahn{animation-play-state:paused}',
      '.aktleiste-stk{padding-right:64px;white-space:nowrap;unicode-bidi:isolate}',
      '@keyframes aktlauf{from{transform:translate3d(0,0,0)}to{transform:translate3d(-50%,0,0)}}',
      '@media (max-width:560px){.aktleiste{font-size:13px}.aktleiste-bahn{animation-duration:26s}',
        '.aktleiste-stk{padding-right:44px}}',
      /* Wer Bewegung im System abgeschaltet hat, bekommt den Satz ruhig
         und mittig — laufende Schrift ist fuer manche unlesbar. */
      '@media (prefers-reduced-motion:reduce){.aktleiste-bahn{animation:none;width:100%;',
        'justify-content:center}.aktleiste-stk:nth-child(n+2){display:none}',
        '.aktleiste-stk{padding-right:0;white-space:normal;text-align:center;padding-left:14px}}'
    ].join('');
    document.head.appendChild(s);
  }

  /* Die Kopfzeile klebt selbst oben (position:sticky; top:0). Ohne
     Korrektur laegen Leiste und Kopfzeile beim Scrollen uebereinander.
     Deshalb messen wir die Leiste und schieben jede klebende Kopfzeile
     genau um diese Hoehe nach unten. */
  /* Die Leiste steht ganz oben im Dokument. Eine Kopfzeile, die selbst
     oben klebt, wuerde sie sonst verdecken — deshalb wird sie um die
     Hoehe der Leiste nach unten geschoben.

     Frueher galt das nur fuer position:sticky. Die Kopfzeile dieser Seite
     steht aber auf position:fixed, blieb also liegen und hat die Leiste
     komplett ueberdeckt: sie war im Dokument da, aber niemand sah sie.
     Bei fixed muss zusaetzlich der Seiteninhalt Platz bekommen, sonst
     rutscht er unter die Kopfzeile. */
  function kopfzeileSchieben(leiste) {
    var h = leiste.offsetHeight;
    var fest = false;
    ['nav.nav', '.nav', 'header', '.topbar'].forEach(function (w) {
      Array.prototype.forEach.call(document.querySelectorAll(w), function (el) {
        if (el === leiste || leiste.contains(el) || el.contains(leiste)) return;
        var c = getComputedStyle(el);
        var oben = parseInt(c.top, 10);
        if ((c.position === 'sticky' || c.position === 'fixed') && (oben === 0 || isNaN(oben))) {
          el.style.top = h + 'px';
          if (c.position === 'fixed') fest = true;
        }
      });
    });
    if (fest) document.body.style.paddingTop = h + 'px';
  }

  function bauen() {
    if (!imZeitraum()) return;
    if (document.querySelector('.aktleiste')) return;
    stil();

    var l = sprache();
    var a = document.createElement('a');
    a.className = 'aktleiste';
    a.href = ZIEL;
    a.setAttribute('role', 'region');
    a.setAttribute('aria-label', TEXT[l]);
    /* Arabisch und Persisch NICHT an der ganzen Leiste auf rtl stellen:
       Die Bahn ist ein Flex-Element, und in rtl laufen die Stuecke dann
       nach rechts, waehrend die Animation nach links schiebt — die Leiste
       wirkte fast leer. Deshalb bleibt die Bahn immer ltr, und nur der
       Text selbst wird rechtslaeufig gesetzt. */

    var bahn = document.createElement('div');
    bahn.className = 'aktleiste-bahn';
    bahn.setAttribute('aria-hidden', 'true');
    /* Vier Kopien: zwei fuellen den Bildschirm, die Verdopplung macht
       den Uebergang bei -50 % unsichtbar. So laeuft es endlos rund. */
    for (var i = 0; i < 4; i++) {
      var sp = document.createElement('span');
      sp.className = 'aktleiste-stk';
      if (RTL[l]) sp.setAttribute('dir', 'rtl');
      sp.textContent = TEXT[l];
      bahn.appendChild(sp);
    }
    a.appendChild(bahn);
    document.body.insertBefore(a, document.body.firstChild);

    kopfzeileSchieben(a);
    addEventListener('resize', function () { kopfzeileSchieben(a); });

    /* Sprache umgestellt? Dann den Satz mitnehmen. */
    new MutationObserver(function () {
      var n = sprache();
      if (a.getAttribute('data-l') === n) return;
      a.setAttribute('data-l', n);
      a.setAttribute('aria-label', TEXT[n]);
      Array.prototype.forEach.call(a.querySelectorAll('.aktleiste-stk'), function (s) {
        if (RTL[n]) s.setAttribute('dir', 'rtl'); else s.removeAttribute('dir');
        s.textContent = TEXT[n];
      });
      kopfzeileSchieben(a);
    }).observe(document.documentElement, { attributes: true, attributeFilter: ['lang'] });
    a.setAttribute('data-l', l);
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', bauen);
  else bauen();
})();
