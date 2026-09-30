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
    de: '🎉 Frühbucher für den Sprechclub · ab 37 € im Monat statt 59 € · nur bis 31. Oktober · Jetzt Platz sichern',
    en: '🎉 Early bird for the Speaking Club · from 37 € a month instead of 59 € · only until 31 October · Secure your place',
    ru: '🎉 Ранняя запись в разговорный клуб · от 37 € в месяц вместо 59 € · только до 31 октября · Займи место',
    uk: '🎉 Рання реєстрація до розмовного клубу · від 37 € на місяць замість 59 € · лише до 31 жовтня · Займи місце',
    tr: '🎉 Konuşma Kulübü erken kayıt · 59 € yerine ayda 37 €\'dan · sadece 31 Ekim\'e kadar · Yerini ayırt',
    es: '🎉 Precio anticipado del club de conversación · desde 37 € al mes en vez de 59 € · solo hasta el 31 de octubre · Reserva tu plaza',
    fr: '🎉 Tarif préférentiel du club de conversation · à partir de 37 € par mois au lieu de 59 € · jusqu\'au 31 octobre seulement · Réserve ta place',
    it: '🎉 Early bird per il club di conversazione · da 37 € al mese invece di 59 € · solo fino al 31 ottobre · Assicurati il posto',
    ar: '🎉 التسجيل المبكر لنادي المحادثة · من 37 يورو شهريًا بدل 59 · حتى 31 أكتوبر فقط · احجز مكانك',
    fa: '🎉 ثبت‌نام زودهنگام باشگاه گفت‌وگو · از ماهی ۳۷ یورو به‌جای ۵۹ · فقط تا ۳۱ اکتبر · جایت را رزرو کن',
    zh: '🎉 口语俱乐部早鸟价 · 每月 37 欧元起，而不是 59 · 仅至 10 月 31 日 · 锁定你的名额'

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
        'background:linear-gradient(135deg,#2DD4BF,#14B8A6);color:#06403A;',
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
  function kopfzeileSchieben(leiste) {
    var h = leiste.offsetHeight;
    ['nav.nav', '.nav', 'header'].forEach(function (w) {
      Array.prototype.forEach.call(document.querySelectorAll(w), function (el) {
        if (el === leiste || leiste.contains(el)) return;
        var c = getComputedStyle(el);
        if (c.position === 'sticky' && parseInt(c.top, 10) === 0) el.style.top = h + 'px';
      });
    });
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
