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

  if (!A.laeuft()) return;

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

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', leisteBauen);
  } else {
    leisteBauen();
  }
})();
