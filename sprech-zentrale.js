/* ============================================================
   sprech-zentrale.js — die Sprechmodi oben im Bereich "Sprechen"

   Warum (9.11.2026): Julia: "Schau dir bitte Talkpal an, wir müssen
   es so professionell wie da machen, aber natürlich weiterhin unser
   Design und unser Konzept."
   Talkpal ordnet alles nach Modi: Anruf, Rollenspiel, Debatte, Sätze
   nachsprechen. Bei uns gab es das alles schon, nur verstreut: Amanda
   im Menü, 110 Gespräche im Bereich, Shadowing und Aussprache hinter
   "Grammatik & Übungen". Hier steht es jetzt an einer Stelle, mit
   echten Fotos, in unserem Stil.

   Nach aussen:
     window.sprechModiHtml()      — die Karten für renderSprechen (hubs.js)
     window.spModus(id)           — einen Modus öffnen
     window.spDiskussion(i)       — mit Amanda über ein Thema streiten
   ============================================================ */
(function () {
  'use strict';
  if (window.sprechModiHtml) return;

  function E(s) {
    return String(s == null ? '' : s).replace(/[&<>"']/g, function (c) {
      return ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c];
    });
  }
  function el(id) { return document.getElementById(id); }
  function gehe(v) { try { window.go(v); } catch (e) { location.hash = v; } }
  function amandaDa() { return !window.AMANDA_SPRECHEN_AUS; }
  function niveau() { try { return window.ICH ? window.ICH.niveau() : 'B1'; } catch (e) { return 'B1'; } }

  /* Streitfragen je Stufe. Alltagsnah, keine Parteipolitik. */
  var FRAGEN = {
    A1: ['Ist Kaffee besser als Tee?', 'Lieber Sommer oder Winter?', 'Ist es besser, in der Stadt zu wohnen?', 'Braucht man am Wochenende einen Plan?'],
    A2: ['Stadt oder Land: Wo lebt man besser?', 'Selbst kochen oder Essen bestellen?', 'Ist ein Haustier eine gute Idee?', 'Urlaub am Meer oder in den Bergen?'],
    B1: ['Sollten Geschäfte am Sonntag öffnen?', 'Homeoffice: mehr Freiheit oder mehr Stress?', 'Braucht man heute noch ein Auto?', 'Ab wann sollten Kinder ein Handy haben?'],
    B2: ['Die Vier-Tage-Woche für alle?', 'Sollte Fleisch teurer werden?', 'Verbinden soziale Medien oder trennen sie?', 'Sollte Trinkgeld abgeschafft werden?'],
    C1: ['Macht künstliche Intelligenz uns klüger oder bequemer?', 'Sollte ein Studium überall kostenlos sein?', 'Ist Tourismus ein Segen oder eine Last für Städte?', 'Brauchen wir weniger Konsum?']
  };
  function fragen() { return FRAGEN[niveau()] || FRAGEN.B1; }

  var MODI = [
    { id: 'anruf', t: 'Mit Amanda telefonieren', u: 'Frei sprechen, über alles. Sie antwortet sofort und korrigiert freundlich.',
      bild: 'bilder/dialog/telefon-melden-s.jpg', amanda: true },
    { id: 'diskussion', t: 'Diskutieren', u: 'Vertritt deine Meinung. Amanda hält dagegen.',
      bild: 'bilder/dialog/feedback-s.jpg', amanda: true },
    { id: 'rollenspiel', t: 'Rollenspiel', u: 'Arzt, Amt, Bewerbung: echte Situationen Schritt für Schritt.',
      bild: 'bilder/dialog/restaurant-s.jpg' },
    { id: 'nachsprechen', t: 'Sätze nachsprechen', u: 'Hören, nachsprechen, vergleichen. Für Melodie und Tempo.',
      bild: 'bilder/thema/satzmelodie-s.jpg' },
    { id: 'aussprache', t: 'Aussprache', u: 'Ü, ch, r und Co. Laut für Laut, mit Aufnahme.',
      bild: 'bilder/thema/umlaute-s.jpg' }
  ];

  window.sprechModiHtml = function () {
    stil();
    var m = MODI.filter(function (x) { return !x.amanda || amandaDa(); });
    return '<section class="sp-zentrale">'
      + '<div class="sp-modi">' + m.map(function (x) {
        return '<button class="sp-m" onclick="spModus(\'' + x.id + '\')">'
          + '<span class="sp-mb"><img src="' + E(x.bild) + '" alt="" loading="lazy" onerror="this.parentNode.remove()"></span>'
          + '<span class="sp-mt"><b>' + E(x.t) + '</b><span>' + E(x.u) + '</span></span></button>';
      }).join('') + '</div>'
      + '<div id="spDisk"></div>'
      + '</section>';
  };

  window.spModus = function (id) {
    if (id === 'anruf') { window.AM_THEMA = ''; window.AM_THEMA_ANZEIGE = ''; return gehe('amandasprechen'); }
    if (id === 'diskussion') return diskussionZeigen();
    if (id === 'rollenspiel') {
      var g = document.querySelector('#v-sprechen .hb-git');
      if (g) { try { g.scrollIntoView({ behavior: 'smooth', block: 'start' }); } catch (e) {} }
      return;
    }
    if (id === 'nachsprechen' || id === 'aussprache') {
      if (window.ubRaum) return window.ubRaum(id === 'nachsprechen' ? 'shadowing' : 'aussprache');
      return gehe('ueben');
    }
  };

  function diskussionZeigen() {
    var z = el('spDisk'); if (!z) return;
    if (z.innerHTML) { z.innerHTML = ''; return; }
    z.innerHTML = '<div class="sp-disk"><p class="sp-kick">Diskutieren · ' + E(niveau()) + '</p>'
      + '<h3>Worüber willst du streiten?</h3>'
      + '<div class="sp-fragen">' + fragen().map(function (f, i) {
        return '<button onclick="spDiskussion(' + i + ')">' + E(f) + '</button>';
      }).join('') + '</div>'
      + '<p class="sp-hin">Sag zuerst deine Meinung. Amanda nimmt die Gegenseite ein, fragt nach und hilft dir mit Wörtern, wenn dir eins fehlt.</p></div>';
    try { z.scrollIntoView({ behavior: 'smooth', block: 'nearest' }); } catch (e) {}
  }
  window.spDiskussion = function (i) {
    var f = fragen()[i]; if (!f) return;
    /* Das Thema geht an Amanda (max. 80 Zeichen) — mit der Bitte, die
       Gegenseite zu vertreten. Angezeigt wird nur die Frage. */
    window.AM_THEMA = ('Diskussion, vertritt die Gegenseite: ' + f).slice(0, 80);
    window.AM_THEMA_ANZEIGE = f;
    gehe('amandasprechen');
    setTimeout(function () { try { if (window.renderSprechenAmanda) window.renderSprechenAmanda(); } catch (e) {} }, 60);
  };

  function stil() {
    if (el('sp-stil')) return;
    var s = document.createElement('style'); s.id = 'sp-stil';
    s.textContent = [
      '.sp-zentrale{margin:0 0 22px}',
      '.sp-modi{display:grid;grid-template-columns:repeat(auto-fill,minmax(190px,1fr));gap:12px}',
      '.sp-m{display:flex;flex-direction:column;text-align:left;padding:0;overflow:hidden;background:#fff;border:1px solid #E7EBF0;border-radius:16px;font:inherit;color:inherit;cursor:pointer;transition:box-shadow .2s,transform .2s}',
      '.sp-m:hover{transform:translateY(-2px);box-shadow:0 12px 28px -16px rgba(18,24,31,.35)}',
      '.sp-mb{display:block;aspect-ratio:16/10;background:#F6F9FA;overflow:hidden}',
      '.sp-mb img{width:100%;height:100%;object-fit:cover;display:block}',
      '.sp-mt{display:flex;flex-direction:column;gap:4px;padding:12px 14px 14px}',
      '.sp-mt b{font-size:15.5px;color:#12181F}',
      '.sp-mt span{font-size:13px;color:#5E6A78;line-height:1.45}',
      '.sp-disk{margin-top:14px;background:#fff;border:1px solid #E7EBF0;border-radius:16px;padding:18px}',
      '.sp-kick{margin:0 0 4px;font-size:11.5px;font-weight:700;letter-spacing:.08em;text-transform:uppercase;color:#14708B}',
      '.sp-disk h3{font-family:"Space Grotesk",Inter,sans-serif;font-size:19px;margin:0 0 12px}',
      '.sp-fragen{display:grid;gap:8px}',
      '.sp-fragen button{text-align:left;border:1px solid #E7EBF0;background:#F6F9FA;border-radius:12px;padding:12px 14px;font:inherit;font-size:15px;font-weight:600;color:#12181F;cursor:pointer}',
      '.sp-fragen button:hover{border-color:#14708B;background:#EAF6FA}',
      '.sp-hin{margin:12px 0 0;font-size:13.5px;color:#5E6A78;line-height:1.5}',
      '@media(max-width:620px){.sp-modi{grid-template-columns:1fr 1fr;gap:10px}.sp-mt{padding:10px 11px 12px}.sp-mt span{display:none}.sp-mt b{font-size:14px}}'
    ].join('\n');
    document.head.appendChild(s);
  }
})();
