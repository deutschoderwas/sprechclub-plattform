/* ============================================================
   aktion-popup.js — das Fenster zur Black Week

   Julia, 12.11.2026: "Wie bei unserem Fruehbucherrabatt, brauchen wir
   eine laufende Leiste, die darueber informiert und ein Pop Up
   Fenster."

   Gebaut wie basis-popup.js, mit denselben drei Regeln, damit es ein
   Hinweis bleibt und keine Belaestigung:
     - nicht sofort. Erst nach einer Weile oder wenn jemand ein gutes
       Stueck gelesen hat.
     - einmal am Tag. Waehrend einer Aktionswoche sind zehn Tage Ruhe
       zu lang - dann saehe es die Haelfte der Leute nie.
     - nie dazwischen. Steht die Kasse oder die Warteliste offen,
       bleibt das Fenster weg.

   Laeuft die Aktion nicht, passiert hier gar nichts. Am 1. Dezember
   um 0 Uhr hoert es von selbst auf.
   ============================================================ */
(function () {
  'use strict';
  if (window.AKTIONPOPUP) return;
  window.AKTIONPOPUP = true;

  var A = window.AKTION;
  if (!A || !A.laeuft()) return;

  var SCHUBLADE = 'dow_aktion_popup';
  var RUHE_STD  = 20;      // einmal am Tag reicht
  var NACH_MS   = 16000;
  var AB_ANTEIL = 0.4;

  function gesehen() {
    try {
      var t = Number(localStorage.getItem(SCHUBLADE) || 0);
      return t && (Date.now() - t) < RUHE_STD * 3600000;
    } catch (e) { return false; }
  }
  function merken() { try { localStorage.setItem(SCHUBLADE, String(Date.now())); } catch (e) {} }

  function stoert() {
    if (/warteliste|danke|erfolg/i.test(location.hash)) return true;
    var fenster = ['#preiseWin', '#bzHg', '.bz-hg', '.ec-hg', '#ecWrap', '#bpHg'];
    for (var i = 0; i < fenster.length; i++) {
      var e = document.querySelector(fenster[i]);
      if (e && e.offsetParent !== null) return true;
    }
    return false;
  }

  /* Jede Seite kauft anders ein. Wir nehmen, was da ist. */
  function kaufen() {
    merken(); zumachen();
    try {
      if (typeof window.premiumKaufen === 'function') return window.premiumKaufen();
      if (typeof window.buyPass === 'function') return window.buyPass('premium_month');
      if (typeof window.kaufen === 'function') return window.kaufen('premium_month');
    } catch (e) {}
    location.href = '/preise';
  }

  function restText() {
    var ms = A.bis - Date.now();
    var tage = Math.floor(ms / 86400000);
    var std  = Math.floor((ms % 86400000) / 3600000);
    if (tage > 0) return 'Noch ' + tage + (tage === 1 ? ' Tag' : ' Tage') + ', dann kostet Premium wieder ' + A.alt + ' €.';
    if (std > 0)  return 'Nur noch ' + std + (std === 1 ? ' Stunde' : ' Stunden') + ', dann kostet Premium wieder ' + A.alt + ' €.';
    return 'Heute ist der letzte Tag.';
  }

  function stil() {
    if (document.getElementById('ap-stil')) return;
    var s = document.createElement('style'); s.id = 'ap-stil';
    s.textContent = [
      '#apHg{position:fixed;inset:0;z-index:4100;background:rgba(10,12,14,.62);',
      '  display:grid;place-items:center;padding:18px;backdrop-filter:blur(3px)}',
      '#apHg[hidden]{display:none}',
      '.ap-karte{position:relative;width:100%;max-width:440px;background:#15171A;color:#fff;',
      '  border-radius:22px;padding:28px 24px 22px;box-shadow:0 26px 70px rgba(0,0,0,.55);',
      '  font-family:Inter,"Segoe UI",system-ui,sans-serif;text-align:left;box-sizing:border-box;',
      '  border:1px solid rgba(255,206,0,.25)}',
      '.ap-karte *{box-sizing:border-box}',
      '.ap-karte h3,.ap-karte p,.ap-karte li,.ap-karte b,.ap-karte span{text-decoration:none}',
      '.ap-zu{position:absolute;top:10px;right:10px;width:40px;height:40px;border:0;background:none;',
      '  font-size:20px;line-height:1;color:#8A9099;cursor:pointer;border-radius:50%}',
      '.ap-zu:hover{background:rgba(255,255,255,.08);color:#fff}',
      '.ap-fahne{display:inline-block;background:#FFCE00;color:#1A1A1A;font-size:11.5px;font-weight:800;',
      '  letter-spacing:.1em;text-transform:uppercase;padding:6px 12px;border-radius:999px}',
      '.ap-karte h3{font-family:"Space Grotesk",Inter,sans-serif;font-weight:700;letter-spacing:-.02em;',
      '  font-size:26px;line-height:1.15;margin:15px 0 0;text-wrap:balance;color:#fff}',
      '.ap-karte p{margin:11px 0 0;font-size:15.5px;line-height:1.6;color:#C3C9D1}',
      '.ap-preis{display:flex;align-items:baseline;gap:11px;margin:18px 0 0;flex-wrap:wrap}',
      '.ap-neu{font-family:"Space Grotesk",Inter,sans-serif;font-size:40px;font-weight:700;color:#FFCE00;line-height:1}',
      '.ap-alt{font-size:19px;color:#8A9099;text-decoration:line-through !important}',
      '.ap-pm{font-size:14.5px;color:#C3C9D1}',
      '.ap-spar{display:inline-block;margin:10px 0 0;background:rgba(45,212,191,.16);color:#2DD4BF;',
      '  font-size:13.5px;font-weight:700;padding:6px 12px;border-radius:999px}',
      '.ap-liste{list-style:none;margin:16px 0 0;padding:0;display:flex;flex-direction:column;gap:8px}',
      '.ap-liste li{display:flex;gap:9px;align-items:flex-start;font-size:15px;line-height:1.5;color:#E6E9ED}',
      '.ap-liste .h{flex:0 0 auto;width:20px;height:20px;border-radius:50%;background:#FFCE00;color:#1A1A1A;',
      '  display:grid;place-items:center;font-size:11px;font-weight:800;margin-top:2px}',
      '.ap-rest{margin:16px 0 0;font-size:13.5px;color:#FFCE00}',
      '.ap-kauf{display:block;width:100%;margin:14px 0 0;font:inherit;font-weight:700;font-size:16.5px;',
      '  cursor:pointer;border:0;border-radius:999px;padding:15px 18px;color:#06403A;',
      '  background:linear-gradient(135deg,#2DD4BF,#14B8A6);box-shadow:0 10px 26px rgba(20,184,166,.32)}',
      '.ap-kauf:hover{background:#14B8A6}',
      '.ap-spaeter{display:block;width:100%;margin:9px 0 0;background:none;border:0;font:inherit;',
      '  font-size:14px;color:#8A9099;cursor:pointer;padding:7px}',
      '.ap-spaeter:hover{color:#fff;text-decoration:underline}',
      '@media(max-width:420px){.ap-karte{padding:24px 18px 18px}.ap-karte h3{font-size:22px}.ap-neu{font-size:34px}}',
      '@media(prefers-reduced-motion:no-preference){',
      '  .ap-karte{animation:apRein .28s ease both}',
      '  @keyframes apRein{from{opacity:0;transform:translateY(14px) scale(.98)}to{opacity:1;transform:none}}}'
    ].join('\n');
    document.head.appendChild(s);
  }

  var hg = null, vorher = null;

  function zumachen() {
    merken();
    if (hg) { hg.remove(); hg = null; }
    document.removeEventListener('keydown', aufTaste);
    try { if (vorher && vorher.focus) vorher.focus(); } catch (e) {}
  }
  function aufTaste(e) { if (e.key === 'Escape') zumachen(); }

  function aufmachen() {
    if (gesehen() || stoert() || document.getElementById('apHg') || !A.laeuft()) return;
    stil();
    vorher = document.activeElement;
    hg = document.createElement('div');
    hg.id = 'apHg';
    hg.innerHTML =
      '<div class="ap-karte" role="dialog" aria-modal="true" aria-labelledby="apTitel">'
      + '<button class="ap-zu" type="button" aria-label="Schließen">✕</button>'
      + '<span class="ap-fahne">' + A.name + ' · ' + A.prozent + ' % Rabatt</span>'
      + '<h3 id="apTitel">Diese Woche sprichst du für <b style="color:#FFCE00">' + A.preis + ' €</b> im Monat.</h3>'
      + '<p>Der Sprechclub ist sonst geschlossen. Für die ' + A.name + ' machen wir auf — und du zahlst dauerhaft weniger.</p>'
      + '<div class="ap-preis"><span class="ap-neu">' + A.preis + ' €</span>'
      +   '<span class="ap-alt">' + A.alt + ' €</span><span class="ap-pm">im Monat</span></div>'
      + '<span class="ap-spar">Du sparst ' + A.spart + ' € — jeden Monat, solange du dabei bist</span>'
      + '<ul class="ap-liste">'
      +   '<li><span class="h">✓</span><span>Jeden Tag sprechen, <b>Montag bis Sonntag</b></span></li>'
      +   '<li><span class="h">✓</span><span><b>Unbegrenzter Zugang</b> — so oft du willst, ohne Stundenpaket</span></li>'
      +   '<li><span class="h">✓</span><span>Die ganze Lernplattform, <b>A1 bis C1</b></span></li>'
      +   '<li><span class="h">✓</span><span>Monatlich kündbar — <b>der Preis bleibt dir</b></span></li>'
      + '</ul>'
      + '<p class="ap-rest">' + restText() + '</p>'
      + '<button class="ap-kauf" type="button" id="apKauf">Für ' + A.preis + ' € dabei sein</button>'
      + '<button class="ap-spaeter" type="button">Vielleicht später</button>'
      + '</div>';
    document.body.appendChild(hg);
    hg.querySelector('.ap-zu').onclick = zumachen;
    hg.querySelector('.ap-spaeter').onclick = zumachen;
    hg.querySelector('#apKauf').onclick = kaufen;
    hg.addEventListener('click', function (e) { if (e.target === hg) zumachen(); });
    document.addEventListener('keydown', aufTaste);
    try { hg.querySelector('#apKauf').focus(); } catch (e) {}
  }

  function start() {
    if (gesehen()) return;
    var ab = setTimeout(aufmachen, NACH_MS);
    function beimScrollen() {
      var h = document.documentElement;
      var tief = (h.scrollTop || document.body.scrollTop)
               / Math.max(1, (h.scrollHeight - h.clientHeight));
      if (tief >= AB_ANTEIL) {
        window.removeEventListener('scroll', beimScrollen);
        clearTimeout(ab);
        aufmachen();
      }
    }
    window.addEventListener('scroll', beimScrollen, { passive: true });
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', start);
  else start();
})();
