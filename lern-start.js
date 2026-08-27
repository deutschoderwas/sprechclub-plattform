/* ============================================================
   lern-start.js — der Lernbereich bekommt drei Türen

   Vorher stand hinter „Üben" eine einzige lange Seite: Streak,
   XP und darunter alle 139 Themen aus allen vier Fertigkeiten als
   Kachelraster — am Handy über 21 000 Pixel Höhe. Material war
   genug da, nur keine Ordnung.

   Jetzt steht am Anfang die Frage, die sich ein Schüler wirklich
   stellt: Wofür lerne ich?

     1. Deutsch für die Prüfung   → die Prüfungsvorbereitung
     2. Deutsch für die Freizeit  → die Orte des Alltags
     3. Deutsch für den Beruf     → erst allgemein, dann das Feld

   Darunter die Werkzeuge — Vokabeltrainer, alle Übungen nach
   Fertigkeit, Kursbibliothek, Fehler-Trainer. Sie sind nicht
   weg, sie stehen nur nicht mehr gleichberechtigt neben der
   Frage, die zuerst kommt.

   Die alte Kachelseite ist nicht gelöscht: sie liegt hinter
   „Alle Übungen nach Fertigkeit" und heisst jetzt
   window.renderUebenGitter.

   Wird NACH ueben.js geladen. Nimmt man die Zeile in konto.html
   heraus, ist alles wie vorher.
   ============================================================ */
(function () {
  'use strict';
  if (window.__lernStart) return;
  window.__lernStart = true;

  function E(s) {
    return String(s == null ? '' : s).replace(/[&<>"']/g, function (c) {
      return ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c];
    });
  }
  function gehe(v) { try { if (window.go) return window.go(v); location.hash = v; } catch (e) {} }

  /* ---------- Zahlen kommen aus den Daten, nicht aus dem Kopf ---------- */
  function bereiche(weg) {
    var B = window.BEREICHE || [];
    return B.filter(function (b) { return b.weg === weg; });
  }
  function situationen(liste) {
    var D = window.DIALOGE || [], da = {};
    D.forEach(function (d) { da[d.id] = 1; });
    var n = 0;
    liste.forEach(function (b) { (b.dlg || []).forEach(function (x) { if (da[x]) n++; }); });
    return n;
  }
  function skill(id) {
    var U = window.UEBUNGEN;
    if (!U || !U.skills) return null;
    for (var i = 0; i < U.skills.length; i++) if (U.skills[i].id === id) return U.skills[i];
    return null;
  }
  function aufgabenGesamt() {
    var U = window.UEBUNGEN, n = 0;
    if (!U || !U.skills) return 0;
    U.skills.forEach(function (s) {
      (s.themes || []).forEach(function (t) { n += (t.exercises || []).length; });
    });
    return n;
  }
  function woerterGesamt() {
    var s = skill('wortschatz'), n = 0;
    if (s) (s.themes || []).forEach(function (t) { n += (t.words || []).length; });
    return n;
  }
  function pruefungen() {
    var P = window.PRUEFUNGEN_DATEN || [];
    return P.filter(function (p) { return !p.fach; }).length;
  }

  /* ---------- Aussehen ---------- */
  function stil() {
    if (document.getElementById('lern-start-stil')) return;
    var s = document.createElement('style');
    s.id = 'lern-start-stil';
    s.textContent = [
      '#v-ueben .ls-kopf{margin-bottom:22px;}',
      '#v-ueben .ls-zuruf{font-family:var(--schrift-kopf,"Shantell Sans",sans-serif);color:var(--petrol,#1990A4);',
      '  font-size:15px;display:block;margin-bottom:4px;}',
      '#v-ueben .ls-kopf h1{font-size:clamp(26px,4.2vw,38px);margin:0 0 6px;}',
      '#v-ueben .ls-kopf p{margin:0;color:var(--ink-2,#54594A);font-size:15px;max-width:60ch;}',

      /* die drei Türen */
      '#v-ueben .ls-tueren{display:grid;grid-template-columns:repeat(3,1fr);gap:16px;margin-bottom:30px;}',
      '#v-ueben .ls-tuer{display:flex;flex-direction:column;align-items:flex-start;text-align:left;gap:0;',
      '  background:var(--karte,#FFFDF3);border:2px solid var(--tinte,#20211F);border-radius:22px;',
      '  box-shadow:3px 4px 0 rgba(32,33,31,.10);padding:0;overflow:hidden;cursor:pointer;',
      '  font-family:inherit;width:100%;transition:transform .12s,box-shadow .12s;}',
      '#v-ueben .ls-tuer:hover{transform:translateY(-2px);box-shadow:4px 7px 0 rgba(32,33,31,.13);}',
      '#v-ueben .ls-tuer .band{height:8px;width:100%;display:block;}',
      '#v-ueben .ls-tuer .inn{padding:18px 20px 20px;display:block;width:100%;box-sizing:border-box;overflow-wrap:break-word;}',
      '#v-ueben .ls-tuer .zn{font-size:30px;line-height:1;display:block;margin-bottom:10px;}',
      '#v-ueben .ls-tuer b{display:block;font-family:var(--schrift-titel,"Caveat Brush",cursive);font-weight:400;',
      '  font-size:26px;line-height:1.1;margin-bottom:6px;color:var(--tinte,#20211F);}',
      '#v-ueben .ls-tuer span.u{display:block;color:var(--ink-2,#54594A);font-size:14.5px;line-height:1.5;}',
      '#v-ueben .ls-tuer .zahlen{display:block;margin-top:12px;color:var(--ink-3,#8A857C);font-size:13px;}',
      '#v-ueben .ls-tuer .los{display:inline-block;margin-top:14px;font-weight:700;font-size:14px;',
      '  color:var(--rot,#DD0000);}',

      /* Werkzeuge */
      '#v-ueben .ls-werk-t{font-size:13px;font-weight:700;letter-spacing:.09em;text-transform:uppercase;',
      '  color:var(--ink-3,#8A857C);margin:0 0 12px;}',
      '#v-ueben .ls-werk{display:grid;grid-template-columns:repeat(auto-fill,minmax(190px,1fr));gap:12px;}',
      '#v-ueben .ls-wk{display:flex;gap:11px;align-items:flex-start;text-align:left;width:100%;cursor:pointer;',
      '  background:var(--karte,#FFFDF3);border:1.5px solid var(--linie,#E7DFC7);border-radius:16px;',
      '  padding:13px 15px;font-family:inherit;transition:.12s;}',
      '#v-ueben .ls-wk:hover{border-color:var(--petrol,#1990A4);}',
      '#v-ueben .ls-wk .zn{font-size:20px;line-height:1.2;flex:none;}',
      '#v-ueben .ls-wk b{display:block;font-size:15px;margin-bottom:2px;color:var(--tinte,#20211F);}',
      '#v-ueben .ls-wk span{display:block;font-size:12.5px;color:var(--ink-3,#8A857C);line-height:1.4;}',

      /* Am Handy untereinander und flacher */
      '@media(max-width:820px){#v-ueben .ls-tueren{grid-template-columns:1fr;gap:12px;margin-bottom:24px;}',
      '  #v-ueben .ls-tuer .inn{padding:15px 16px 17px;}',
      '  #v-ueben .ls-tuer .zn{font-size:25px;margin-bottom:7px;}',
      '  #v-ueben .ls-tuer b{font-size:23px;}',
      '  #v-ueben .ls-tuer span.u{font-size:14px;}',
      '  #v-ueben .ls-werk{grid-template-columns:1fr;}}',
      '@media(prefers-reduced-motion:reduce){#v-ueben .ls-tuer{transition:none;}}'
    ].join('');
    document.head.appendChild(s);
  }

  /* ---------- Eine Tür ---------- */
  function tuer(o) {
    return '<button class="ls-tuer" type="button" onclick="' + o.klick + '">'
      + '<span class="band" style="background:' + o.farbe + '"></span>'
      + '<span class="inn">'
      + '<span class="zn">' + o.zeichen + '</span>'
      + '<b>' + E(o.titel) + '</b>'
      + '<span class="u">' + E(o.text) + '</span>'
      + '<span class="zahlen">' + E(o.zahlen) + '</span>'
      + '<span class="los">' + E(o.los) + ' →</span>'
      + '</span></button>';
  }
  function werkzeug(zeichen, titel, text, klick) {
    return '<button class="ls-wk" type="button" onclick="' + klick + '">'
      + '<span class="zn">' + zeichen + '</span>'
      + '<span><b>' + E(titel) + '</b><span>' + E(text) + '</span></span></button>';
  }

  /* ---------- Die Startseite ---------- */
  function renderStart() {
    stil();
    var ziel = document.getElementById('v-ueben');
    if (!ziel) return;

    var frei = bereiche('freizeit'), ber = bereiche('beruf');
    var pz = pruefungen();

    var h = '<div class="ls-kopf">'
      + '<span class="ls-zuruf">Dein Lernbereich</span>'
      + '<h1>Wofür lernst du gerade Deutsch?</h1>'
      + '<p>Such dir eine Tür aus. Dahinter liegt alles, was zu diesem Ziel gehört — '
      + 'Situationen zum Mitreden, Wörter, Hörtexte und die Lektion dazu.</p>'
      + '</div>';

    h += '<div class="ls-tueren">'
      + tuer({
          farbe: '#DD0000', zeichen: '🎓',
          titel: 'Für die Prüfung',
          text: 'Von A1 bis C1: die Module einzeln üben, Musterprüfungen schreiben, den eigenen Stand prüfen.',
          zahlen: (pz ? pz + ' Prüfungen · ' : '') + 'Lesen, Hören, Schreiben, Sprechen',
          los: 'Prüfung wählen',
          klick: "lernTuer('pruefung')"
        })
      + tuer({
          farbe: '#1990A4', zeichen: '🏡',
          titel: 'Für die Freizeit',
          text: 'Die Orte, an denen du jeden Tag Deutsch brauchst — vom Bäcker über den Arzt bis zum Amt.',
          zahlen: frei.length + ' Bereiche · ' + situationen(frei) + ' Situationen mit Amanda',
          los: 'Ort suchen',
          klick: "lernTuer('freizeit')"
        })
      + tuer({
          farbe: '#E0A106', zeichen: '🧰',
          titel: 'Für den Beruf',
          text: 'Erst, was in jedem Job gilt: Bewerbung, erste Tage, heikle Gespräche. Danach dein eigenes Berufsfeld.',
          zahlen: ber.length + ' Bereiche · ' + situationen(ber) + ' Situationen mit Amanda',
          los: 'Berufsfeld suchen',
          klick: "lernTuer('beruf')"
        })
      + '</div>';

    h += '<p class="ls-werk-t">Werkzeuge — immer verfügbar</p><div class="ls-werk">'
      + werkzeug('🃏', 'Vokabeltrainer', woerterGesamt() + ' Wörter mit Bild, Ton und Beispielsatz', "lernTuer('vokabeln')")
      + werkzeug('🎯', 'Alle Übungen nach Fertigkeit', aufgabenGesamt() + ' Aufgaben in Wortschatz, Grammatik, Hören, Aussprache', 'lernAlleUebungenGitter()')
      + werkzeug('📚', 'Kursbibliothek', 'Der geführte Weg A1 · A2 · B1, Lektion für Lektion', "lernTuer('kurse')")
      + werkzeug('🩹', 'Fehler-Trainer', 'Genau die Fehler üben, die dir wirklich passieren', "lernTuer('fehler')")
      + '</div>';

    ziel.innerHTML = h;
    try { window.scrollTo(0, 0); } catch (e) {}
    try { if (window.uebersetzen) window.uebersetzen(); } catch (e) {}
  }

  /* ---------- Türen öffnen ---------- */
  window.lernTuer = function (was) {
    if (was === 'freizeit' || was === 'beruf') {
      gehe('bereiche');
      // Die Bereichsansicht rendert beim Ansichtswechsel selbst; der
      // Filter wird direkt danach gesetzt, sonst stünde man wieder
      // in der Mischung aus beidem.
      setTimeout(function () { if (window.bereichWeg) window.bereichWeg(was); }, 0);
      return;
    }
    gehe(was);
  };

  /* Die alte Kachelseite bleibt erreichbar — mit einem Weg zurück. */
  window.lernAlleUebungenGitter = function () {
    if (!window.renderUebenGitter) return;
    window.renderUebenGitter();
    var ziel = document.getElementById('v-ueben');
    if (ziel && !ziel.querySelector('.ls-zurueck')) {
      var b = document.createElement('button');
      b.className = 'ls-zurueck btn';
      b.type = 'button';
      b.textContent = '← Zurück zum Lernbereich';
      b.style.cssText = 'margin:0 0 16px;border:1.5px solid var(--linie,#E7DFC7);background:var(--karte,#FFFDF3);'
        + 'border-radius:50px;padding:8px 16px;font-family:inherit;font-weight:700;cursor:pointer;';
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
