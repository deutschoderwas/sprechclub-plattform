/* ============================================================
   Chat-Gerüst für die App
   Wird von drei Bildschirmen benutzt: Community-Chat, Amandas Dialoge
   und dem freien Gespräch mit Amanda.

   Grundregeln, damit nichts mehr springt:
     · Der Bildschirm scrollt nie — nur die Nachrichtenliste.
     · Neue Nachrichten werden angehängt, nicht alles neu gezeichnet.
     · Nach unten gescrollt wird nur, wenn man vorher schon unten war.
     · Die Tastatur schiebt die Eingabe hoch, nicht die ganze Seite.
   ============================================================ */
(function () {
  'use strict';

  var TASTATUR_AN = false;

  /* ---------- Tastatur auf dem Handy ---------- */
  function tastaturBeobachten() {
    var vv = window.visualViewport;
    if (!vv) return;
    var app = document.getElementById('app');
    function passe() {
      if (!document.body.classList.contains('chatmodus') &&
          !(app && app.classList.contains('chatmodus'))) { setzeUnten(0); return; }
      var verdeckt = Math.max(0, window.innerHeight - vv.height - vv.offsetTop);
      setzeUnten(verdeckt);
      TASTATUR_AN = verdeckt > 80;
      if (TASTATUR_AN) nachUnten(true);
    }
    function setzeUnten(px) {
      if (app) app.style.paddingBottom = px ? px + 'px' : '';
    }
    vv.addEventListener('resize', passe);
    vv.addEventListener('scroll', passe);
  }
  if (document.readyState !== 'loading') tastaturBeobachten();
  else document.addEventListener('DOMContentLoaded', tastaturBeobachten);

  /* ---------- Chatmodus an- und ausschalten ---------- */
  window.chatModus = function (an) {
    var app = document.getElementById('app');
    if (app) app.classList.toggle('chatmodus', !!an);
    if (!an && app) app.style.paddingBottom = '';
    // Nichts darf über der Eingabe liegen — das blockiert sonst das Senden
    if (an) {
      ['instBan', 'stimmHinweis'].forEach(function (id) {
        var e = document.getElementById(id); if (e) e.remove();
      });
    }
  };

  /* ---------- Scrollen ---------- */
  function liste() { return document.querySelector('.ch-liste'); }

  function istUnten(l) {
    if (!l) return true;
    return (l.scrollHeight - l.scrollTop - l.clientHeight) < 90;
  }
  window.chatIstUnten = function () { return istUnten(liste()); };

  function nachUnten(sofort) {
    var l = liste(); if (!l) return;
    if (sofort) { l.scrollTop = l.scrollHeight; return; }
    try { l.scrollTo({ top: l.scrollHeight, behavior: 'smooth' }); }
    catch (e) { l.scrollTop = l.scrollHeight; }
  }
  window.chatNachUnten = nachUnten;

  /* Knopf „nach unten", wenn man weiter oben liest */
  window.chatKnopfPruefen = function () {
    var k = document.getElementById('chRunter'), l = liste();
    if (!k || !l) return;
    k.classList.toggle('da', !istUnten(l));
  };

  /* ---------- Eine Blase bauen ---------- */
  function farbeAus(name) {
    var t = String(name || '?'), h = 0;
    for (var i = 0; i < t.length; i++) h = (h * 31 + t.charCodeAt(i)) >>> 0;
    return 'hsl(' + (h % 360) + ',46%,58%)';
  }
  function kuerzel(n) {
    n = String(n || 'M').trim();
    var p = n.split(/\s+/);
    return ((p[0] || '?')[0] + (p[1] ? p[1][0] : '')).toUpperCase();
  }
  function E(s) {
    return String(s == null ? '' : s).replace(/[&<>"]/g, function (c) {
      return ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' })[c];
    });
  }

  /* m = { wer:'ich'|'am'|'du', name, text, zeit, avatarHTML, extraHTML } */
  window.chatBlase = function (m) {
    var d = document.createElement('div');
    d.className = 'bl ' + (m.wer === 'ich' ? 'ich' : (m.wer === 'am' ? 'am' : ''));
    if (m.id) d.dataset.id = m.id;

    var av = '';
    if (m.avatarHTML) av = '<span class="av">' + m.avatarHTML + '</span>';
    else if (m.name) av = '<span class="av" style="background:' + farbeAus(m.name) + '">' + E(kuerzel(m.name)) + '</span>';
    else av = '<span class="av" style="background:transparent;border:none"></span>';

    d.innerHTML = av
      + '<span class="sp">'
      + (m.name && m.wer !== 'ich' ? '<div class="nm">' + E(m.name) + '</div>' : '')
      + '<div class="bb">' + (m.html || E(m.text)) + (m.extraHTML || '') + '</div>'
      + (m.zeit ? '<div class="zeit">' + E(m.zeit) + '</div>' : '')
      + '</span>';
    return d;
  };

  /* Anhängen — scrollt nur mit, wenn man unten war */
  window.chatAnhaengen = function (el, immerScrollen) {
    var l = liste(); if (!l) return;
    var warUnten = istUnten(l);
    var knopf = document.getElementById('chRunter');
    if (knopf && knopf.parentNode === l) l.insertBefore(el, knopf);
    else l.appendChild(el);
    if (warUnten || immerScrollen) nachUnten(!warUnten ? true : false);
    else window.chatKnopfPruefen();
  };

  /* „tippt gerade" */
  window.chatTippt = function (an) {
    var l = liste(); if (!l) return;
    var alt = document.getElementById('chTippt');
    if (!an) { if (alt) alt.remove(); return; }
    if (alt) return;
    var warUnten = istUnten(l);
    var d = document.createElement('div');
    d.id = 'chTippt'; d.className = 'ch-tippt';
    d.innerHTML = '<i></i><i></i><i></i>';
    var kn = document.getElementById('chRunter');
    if (kn && kn.parentNode === l) l.insertBefore(d, kn); else l.appendChild(d);
    if (warUnten) nachUnten(true);
  };

  /* Eingabefeld: wächst mit, Enter sendet auf dem Rechner */
  window.chatEingabe = function (feld, knopf, senden) {
    if (!feld) return;
    feld.addEventListener('input', function () {
      feld.style.height = 'auto';
      feld.style.height = Math.min(feld.scrollHeight, 110) + 'px';
      if (knopf) knopf.disabled = !feld.value.trim();
    });
    feld.addEventListener('keydown', function (e) {
      if (e.key === 'Enter' && !e.shiftKey && window.innerWidth > 900) {
        e.preventDefault(); senden();
      }
    });
    feld.addEventListener('focus', function () { setTimeout(function () { nachUnten(true); }, 250); });
  };

  window.chatLeeren = function (feld, knopf) {
    if (!feld) return;
    feld.value = ''; feld.style.height = 'auto';
    if (knopf) knopf.disabled = true;
  };

  /* Sprechen ins Feld — einmal antippen, sprechen, fertig */
  window.chatSprechen = function (knopf, feld, absenden) {
    var SR = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SR) { if (window.toast) window.toast('Dein Gerät kann nicht zuhören — tipp die Antwort.'); return; }
    if (knopf._laeuft) { try { knopf._erk.stop(); } catch (e) { } return; }
    try {
      var r = new SR();
      r.lang = 'de-DE'; r.interimResults = true; r.continuous = false; r.maxAlternatives = 1;
      knopf._erk = r; knopf._laeuft = true;
      knopf.classList.add('laeuft');
      var fertig = '';
      r.onresult = function (e) {
        var zwischen = '';
        for (var i = e.resultIndex; i < e.results.length; i++) {
          if (e.results[i].isFinal) fertig += e.results[i][0].transcript;
          else zwischen += e.results[i][0].transcript;
        }
        feld.value = (fertig + zwischen).trim();
        feld.dispatchEvent(new Event('input'));
      };
      r.onend = function () {
        knopf._laeuft = false; knopf.classList.remove('laeuft');
        if (feld.value.trim() && absenden) setTimeout(absenden, 260);
      };
      r.onerror = function () {
        knopf._laeuft = false; knopf.classList.remove('laeuft');
      };
      r.start();
    } catch (e) { knopf._laeuft = false; knopf.classList.remove('laeuft'); }
  };

  /* Uhrzeit kurz */
  window.chatZeit = function (iso) {
    var d = iso ? new Date(iso) : new Date(), j = new Date();
    var t = d.toLocaleTimeString('de-DE', { hour: '2-digit', minute: '2-digit' });
    if (d.toDateString() === j.toDateString()) return t;
    return d.toLocaleDateString('de-DE', { day: '2-digit', month: '2-digit' }) + ' ' + t;
  };
})();
