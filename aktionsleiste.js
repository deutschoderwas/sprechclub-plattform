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
  var ENDE  = '2026-10-31T00:00:00+01:00';   // wann sie wieder verschwindet (= Ende des 30.10.)
  var ZIEL  = '/preise';                     // wohin der Klick fuehrt

  /* Elf Sprachen, wie der Rest der Seite. Fehlt eine, nimmt die
     Leiste Deutsch — lieber ein deutscher Satz als eine leere Leiste. */
  var TEXT = {
    de: '🎉 Frühbucherrabatt für den Sprechclub · 1. bis 30. Oktober · Jetzt registrieren und dauerhaft sparen',
    en: '🎉 Early-bird price for the Speaking Club · 1–30 October · Register now and save for good',
    ru: '🎉 Скидка для ранних участников разговорного клуба · 1–30 октября · Зарегистрируйся и экономь навсегда',
    uk: '🎉 Знижка для перших учасників розмовного клубу · 1–30 жовтня · Зареєструйся й заощаджуй назавжди',
    tr: '🎉 Konuşma Kulübü için erken kayıt indirimi · 1–30 Ekim · Şimdi kaydol, kalıcı olarak tasarruf et',
    es: '🎉 Precio anticipado para el Club de Conversación · 1 al 30 de octubre · Regístrate ahora y ahorra para siempre',
    fr: '🎉 Tarif préférentiel pour le Club de Conversation · 1er au 30 octobre · Inscris-toi et économise pour toujours',
    it: '🎉 Prezzo early bird per il Club di Conversazione · 1–30 ottobre · Iscriviti ora e risparmia per sempre',
    ar: '🎉 سعر التسجيل المبكر لنادي المحادثة · من 1 إلى 30 أكتوبر · سجّل الآن ووفّر إلى الأبد',
    fa: '🎉 قیمت ویژه ثبت‌نام زودهنگام باشگاه گفتگو · ۱ تا ۳۰ اکتبر · همین حالا ثبت‌نام کن و همیشه صرفه‌جویی کن',
    zh: '🎉 口语俱乐部早鸟价 · 10月1日至30日 · 立即注册，永久省钱'
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
      '.aktleiste-bahn{display:flex;width:max-content;padding:10px 0;',
        'animation:aktlauf 34s linear infinite}',
      '.aktleiste:hover .aktleiste-bahn,.aktleiste:focus-within .aktleiste-bahn{animation-play-state:paused}',
      '.aktleiste-stk{padding-right:64px;white-space:nowrap}',
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
    if (RTL[l]) a.setAttribute('dir', 'rtl');

    var bahn = document.createElement('div');
    bahn.className = 'aktleiste-bahn';
    bahn.setAttribute('aria-hidden', 'true');
    /* Vier Kopien: zwei fuellen den Bildschirm, die Verdopplung macht
       den Uebergang bei -50 % unsichtbar. So laeuft es endlos rund. */
    for (var i = 0; i < 4; i++) {
      var sp = document.createElement('span');
      sp.className = 'aktleiste-stk';
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
      if (RTL[n]) a.setAttribute('dir', 'rtl'); else a.removeAttribute('dir');
      Array.prototype.forEach.call(a.querySelectorAll('.aktleiste-stk'), function (s) { s.textContent = TEXT[n]; });
      kopfzeileSchieben(a);
    }).observe(document.documentElement, { attributes: true, attributeFilter: ['lang'] });
    a.setAttribute('data-l', l);
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', bauen);
  else bauen();
})();
