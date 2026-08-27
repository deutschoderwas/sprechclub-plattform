/* ============================================================
   lern-start.js — der Lernbereich der Plattform

   Vorher stand hinter „Üben" eine einzige lange Seite: Streak,
   XP und darunter alle Themen aus allen vier Fertigkeiten als
   Kachelraster — am Handy 64 Kacheln und über 21 000 Pixel Höhe.
   Material genug, nur keine Ordnung.

   Jetzt steht am Anfang die Frage, die sich ein Schüler wirklich
   stellt: Wofür lerne ich? Dahinter die drei Türen aus
   lern-struktur.js — dieselben, die auch die App zeigt.

   Die alte Kachelseite ist nicht gelöscht: sie liegt hinter
   „Alle Übungen nach Fertigkeit" und heisst jetzt
   window.renderUebenGitter.

   Wird NACH ueben.js und lern-struktur.js geladen.
   ============================================================ */
(function () {
  'use strict';
  if (window.__lernStart) return;
  window.__lernStart = true;

  function gehe(v) { try { if (window.go) return window.go(v); location.hash = v; } catch (e) {} }
  function LS() { return window.LERNSTRUKTUR; }

  function renderStart() {
    var ziel = document.getElementById('v-ueben');
    if (!ziel) return;
    if (!LS()) { if (window.renderUebenGitter) window.renderUebenGitter(); return; }
    LS().stil();
    kopfStil();

    var h = '<div class="ls-kopf">'
      + '<span class="ls-zuruf">Dein Lernbereich</span>'
      + '<h1>Wofür lernst du gerade Deutsch?</h1>'
      + '<p>Such dir eine Tür aus. Dahinter liegt alles, was zu diesem Ziel gehört — '
      + 'Situationen zum Mitreden, Wörter, Hörtexte und die Lektion dazu.</p>'
      + '</div>';

    h += LS().tuerenHtml(function (t) { return "lernTuer('" + t.id + "')"; });
    h += LS().werkzeugHtml(function (w) { return "lernWerkzeug('" + w.id + "')"; });

    ziel.innerHTML = h;
    try { window.scrollTo(0, 0); } catch (e) {}
    try { if (window.uebersetzen) window.uebersetzen(); } catch (e) {}
  }

  function kopfStil() {
    if (document.getElementById('lern-start-stil')) return;
    var s = document.createElement('style');
    s.id = 'lern-start-stil';
    s.textContent = [
      '#v-ueben .ls-kopf{margin-bottom:22px;}',
      '#v-ueben .ls-zuruf{font-family:var(--schrift-kopf,"Shantell Sans",sans-serif);',
      '  color:var(--petrol,#1990A4);font-size:15px;display:block;margin-bottom:4px;}',
      '#v-ueben .ls-kopf h1{font-size:clamp(26px,4.2vw,38px);margin:0 0 6px;}',
      '#v-ueben .ls-kopf p{margin:0;color:var(--ink-2,#54594A);font-size:15px;max-width:60ch;}'
    ].join('');
    document.head.appendChild(s);
  }

  /* ---------- Türen öffnen ---------- */
  window.lernTuer = function (was) {
    if (was === 'freizeit' || was === 'beruf') {
      gehe('bereiche');
      // Die Bereichsansicht rendert beim Ansichtswechsel selbst; der
      // Filter kommt direkt danach, sonst stünde man wieder in der
      // Mischung aus beidem.
      setTimeout(function () { if (window.bereichWeg) window.bereichWeg(was); }, 0);
      return;
    }
    gehe(was);
  };

  window.lernWerkzeug = function (was) {
    if (was === 'gitter') return window.lernAlleUebungenGitter();
    gehe(was);
  };

  /* Die alte Kachelseite bleibt erreichbar — mit einem Weg zurück. */
  window.lernAlleUebungenGitter = function () {
    if (!window.renderUebenGitter) return;
    window.renderUebenGitter();
    var ziel = document.getElementById('v-ueben');
    if (ziel && !ziel.querySelector('.ls-zurueck')) {
      var b = document.createElement('button');
      b.className = 'ls-zurueck';
      b.type = 'button';
      b.textContent = '← Zurück zum Lernbereich';
      b.style.cssText = 'margin:0 0 16px;border:1.5px solid var(--linie,#E7DFC7);'
        + 'background:var(--karte,#FFFDF3);border-radius:50px;padding:8px 16px;'
        + 'font-family:inherit;font-weight:700;cursor:pointer;';
      b.onclick = function () { renderStart(); };
      ziel.insertBefore(b, ziel.firstChild);
    }
    if (window.zurueckAuf) window.zurueckAuf('uebenGitter', function () { renderStart(); });
    try { window.scrollTo(0, 0); } catch (e) {}
  };

  /* ---------- Übernehmen ---------- */
  if (typeof window.renderUeben === 'function' && !window.renderUebenGitter) {
    window.renderUebenGitter = window.renderUeben;
  }
  window.renderUeben = renderStart;
  window.renderLernstart = renderStart;
})();
