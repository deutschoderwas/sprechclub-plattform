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

  /* 14.11.2026: eigene Fotos im gleichen Petrol-Look (bilder/bereich/sp-*).
     Das alte Bild bleibt als Ersatz, falls eines fehlt. */
  var MODI = [
    { id: 'anruf', t: 'Mit Amanda telefonieren', u: 'Frei sprechen, über alles. Sie antwortet sofort und korrigiert freundlich.',
      bild: 'bilder/bereich/sp-anruf.webp', alt: 'bilder/dialog/telefon-melden-s.jpg', ic: 'telefon', amanda: true },
    { id: 'diskussion', t: 'Diskutieren', u: 'Vertritt deine Meinung. Amanda hält dagegen.',
      bild: 'bilder/bereich/sp-diskussion.webp', alt: 'bilder/dialog/feedback-s.jpg', ic: 'blasen', amanda: true },
    /* 12.11.2026: die Timer-Übung aus den Grammatikfokus-Stunden (sprech-minute.js) */
    { id: 'minute', t: 'Eine Minute frei sprechen', u: 'Thema ziehen, Timer starten, losreden. So übst du freies Sprechen.',
      bild: 'bilder/bereich/sp-minute.webp', alt: 'bilder/thema/redemittel-s.jpg', ic: 'uhr' },
    { id: 'rollenspiel', t: 'Rollenspiel', u: 'Arzt, Amt, Bewerbung: echte Situationen Schritt für Schritt.',
      bild: 'bilder/bereich/sp-rollenspiel.webp', alt: 'bilder/dialog/restaurant-s.jpg', ic: 'leute' },
    { id: 'nachsprechen', t: 'Sätze nachsprechen', u: 'Hören, nachsprechen, vergleichen. Für Melodie und Tempo.',
      bild: 'bilder/bereich/sp-nachsprechen.webp', alt: 'bilder/thema/satzmelodie-s.jpg', ic: 'welle' },
    { id: 'aussprache', t: 'Aussprache', u: 'Ü, ch, r und Co. Laut für Laut, mit Aufnahme.',
      bild: 'bilder/bereich/sp-aussprache.webp', alt: 'bilder/thema/umlaute-s.jpg', ic: 'mikro' }
  ];
  var IC = {
    telefon: '<path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.4 1.8.7 2.7a2 2 0 0 1-.5 2.1L8 9.8a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.7.7a2 2 0 0 1 1.7 2z"/>',
    blasen: '<path d="M14 9a2 2 0 0 1-2 2H6l-4 4V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2z"/><path d="M18 9h2a2 2 0 0 1 2 2v11l-4-4h-6a2 2 0 0 1-2-2v-1"/>',
    uhr: '<circle cx="12" cy="13" r="8"/><path d="M12 9v4l2 2"/><path d="M5 3 2 6"/><path d="m22 6-3-3"/>',
    leute: '<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.9"/><path d="M16 3.1a4 4 0 0 1 0 7.8"/>',
    welle: '<path d="M2 10v3"/><path d="M6 6v11"/><path d="M10 3v18"/><path d="M14 8v7"/><path d="M18 5v13"/><path d="M22 10v3"/>',
    mikro: '<path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3z"/><path d="M19 10v2a7 7 0 0 1-14 0v-2"/><path d="M12 19v3"/>',
    pfeil: '<path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>'
  };
  function ic(k) { return '<svg class="sp-ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' + (IC[k] || '') + '</svg>'; }

  /* Die Bühne oben im Bereich: Foto, drei Fakten, zwei Wege hinein. */
  window.sprechHeldHtml = function (anzahlGespraeche) {
    stil();
    var m = MODI.filter(function (x) { return !x.amanda || amandaDa(); });
    var n = anzahlGespraeche || 0;
    return '<header class="sp-held"><div class="sp-held-tx">'
      + '<h1>Sprechen, so oft du willst</h1>'
      + '<p class="sp-sub">Mit Amanda, im Rollenspiel oder live im Sprechclub. Ohne Zuschauer und in deinem Tempo.</p>'
      + '<div class="sp-chips">'
      +   '<span class="sp-chip">' + ic('mikro') + '<b>' + m.length + '</b> Sprechformen</span>'
      +   (n ? '<span class="sp-chip">' + ic('leute') + '<b>' + n + '</b> Rollenspiele</span>' : '')
      +   '<span class="sp-chip">' + ic('blasen') + 'Live-Club mit Lehrer</span>'
      + '</div>'
      + '<div class="sp-tun">'
      +   (amandaDa() ? '<button class="sp-haupt" onclick="spModus(\'anruf\')">' + ic('telefon') + 'Mit Amanda telefonieren</button>' : '')
      +   '<button class="' + (amandaDa() ? 'sp-neben' : 'sp-haupt') + '" onclick="spModus(\'rollenspiel\')">' + ic('leute') + 'Rollenspiel wählen</button>'
      + '</div>'
      + '</div><span class="sp-held-bild"><img src="bilder/bereich/sp-hero.webp" alt="" onerror="this.parentNode.remove()"></span></header>';
  };

  window.sprechModiHtml = function () {
    stil();
    var m = MODI.filter(function (x) { return !x.amanda || amandaDa(); });
    return '<section class="sp-zentrale">'
      + '<div class="sp-modi">' + m.map(function (x) {
        return '<button class="sp-m" onclick="spModus(\'' + x.id + '\')">'
          + '<span class="sp-mb"><img src="' + E(x.bild) + '" alt="" loading="lazy" onerror="if(this.dataset.f){this.parentNode.remove()}else{this.dataset.f=1;this.src=\'' + E(x.alt || '') + '\'}">'
          + '<i class="sp-mi">' + ic(x.ic) + '</i></span>'
          + '<span class="sp-mt"><b>' + E(x.t) + '</b><span>' + E(x.u) + '</span></span></button>';
      }).join('') + '</div>'
      + '<div id="spDisk"></div>'
      + '</section>';
  };

  window.spModus = function (id) {
    if (id === 'anruf') { window.AM_THEMA = ''; window.AM_THEMA_ANZEIGE = ''; return gehe('amandasprechen'); }
    if (id === 'diskussion') return diskussionZeigen();
    if (id === 'minute') { if (window.spMinute) window.spMinute(); return; }
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
    if (z.innerHTML && z.getAttribute('data-was') !== 'minute') { z.innerHTML = ''; z.removeAttribute('data-was'); return; }
    try { if (window.spmStopp) window.spmStopp(); } catch (e) {}
    z.setAttribute('data-was', 'disk');
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
      '@media(max-width:620px){.sp-modi{grid-template-columns:1fr 1fr;gap:10px}.sp-mt{padding:10px 11px 12px}.sp-mt span{display:none}.sp-mt b{font-size:14px}}',
      /* 14.11.2026: Bühne, Moduskarten mit Symbol, Club-Band und Reiter im Stil von „Meine Stunden“ */
      '.sp-ic{width:18px;height:18px;flex:0 0 auto}',
      '#v-sprechen .sp-modi{grid-template-columns:repeat(3,minmax(0,1fr));gap:16px}',
      '#v-sprechen .sp-m{border-radius:18px}',
      '.sp-mb{position:relative}',
      '.sp-mi{position:absolute;left:10px;bottom:10px;width:34px;height:34px;border-radius:10px;background:rgba(255,255,255,.95);color:#0E6D85;display:flex;align-items:center;justify-content:center;box-shadow:0 4px 12px -4px rgba(0,0,0,.35)}',
      '.sp-mt b{font-family:"Space Grotesk",Inter,sans-serif;font-weight:700}',
      '.sp-held{display:grid;grid-template-columns:minmax(0,1.5fr) minmax(0,1fr);border-radius:24px;overflow:hidden;background:linear-gradient(140deg,#0E6D85,#0A4E62);color:#fff;margin:0 0 22px;box-shadow:0 22px 44px -26px rgba(10,78,98,.65)}',
      '.sp-held-tx{padding:30px 32px;display:flex;flex-direction:column;gap:14px;justify-content:center;min-width:0}',
      '.sp-held h1{font-family:"Space Grotesk",Inter,sans-serif;font-size:clamp(26px,3.4vw,38px);letter-spacing:-.025em;line-height:1.1;margin:0;color:#fff}',
      '.sp-sub{margin:0;color:#D6EEF5;font-size:15px;line-height:1.55;max-width:500px}',
      '.sp-chips{display:flex;flex-wrap:wrap;gap:8px}',
      '.sp-chip{display:inline-flex;align-items:center;gap:7px;background:rgba(255,255,255,.12);border:1px solid rgba(255,255,255,.22);border-radius:999px;padding:6px 12px;font-size:13px;color:#E6F5FA;white-space:nowrap}',
      '.sp-chip b{color:#fff}',
      '.sp-chip .sp-ic{width:15px;height:15px;color:#A9DEEE}',
      '.sp-tun{display:flex;flex-wrap:wrap;gap:10px;margin-top:2px}',
      '.sp-haupt,.sp-neben{display:inline-flex;align-items:center;justify-content:center;gap:9px;border-radius:14px;padding:12px 18px;font:inherit;font-weight:700;font-size:15px;cursor:pointer;min-height:50px}',
      '.sp-haupt{background:#fff;color:#0A4E62;border:0;box-shadow:0 10px 22px -12px rgba(0,0,0,.45)}',
      '.sp-haupt .sp-ic{color:#0E6D85}',
      '.sp-neben{background:transparent;color:#fff;border:1.5px solid rgba(255,255,255,.45)}',
      '.sp-neben:hover{background:rgba(255,255,255,.1)}',
      '.sp-held-bild{display:block;position:relative;min-height:260px;background:#0B5A70}',
      '.sp-held-bild img{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;display:block}',
      '.sp-held-bild::before{content:"";position:absolute;inset:0;z-index:1;background:linear-gradient(90deg,#0C5D74 0%,rgba(12,93,116,0) 38%)}',
      '#v-sprechen .hb-club{background:#F2F8FA;border:1px solid #D5E8EE;border-radius:18px;box-shadow:none}',
      '#v-sprechen .hb-kick{color:#0E6D85}',
      '#v-sprechen .hb-btn{background:#0E6D85;border-radius:12px}',
      '#v-sprechen .hb-btn:hover{background:#0A4E62}',
      '#v-sprechen .hb-btn.hell{background:#fff;color:#0A4E62;border:1px solid #D5E8EE}',
      '#v-sprechen .hb-btn.hell:hover{border-color:#0E6D85}',
      '#v-sprechen .hb-rollen{font-size:22px;margin:30px 0 12px}',
      '#v-sprechen .hb-reiter{display:inline-flex;gap:4px;padding:4px;background:#F1F4F7;border:1px solid #E7EBF0;border-radius:14px}',
      '#v-sprechen .hb-r{border:0;background:transparent;border-radius:10px;padding:9px 18px;font-weight:600;font-size:14.5px;color:#4B5A63;min-height:42px}',
      '#v-sprechen .hb-r.on{background:#fff;color:#0A4E62;box-shadow:0 2px 8px -3px rgba(18,24,31,.25)}',
      '@media(max-width:900px){#v-sprechen .sp-modi{grid-template-columns:repeat(2,minmax(0,1fr))}}',
      '@media(max-width:760px){.sp-held{grid-template-columns:1fr;border-radius:20px;margin-bottom:16px}',
      '  .sp-held-bild{order:-1;min-height:0;aspect-ratio:16/7}',
      '  .sp-held-bild::before{background:linear-gradient(0deg,#0D6680 0%,rgba(13,102,128,0) 55%)}',
      '  .sp-held-tx{padding:14px 18px 20px;gap:12px}.sp-sub{font-size:14.5px}',
      '  .sp-tun>button{flex:1 1 100%}}',
      '@media(max-width:620px){#v-sprechen .sp-modi{gap:10px}.sp-mi{width:30px;height:30px;left:8px;bottom:8px}.sp-mi .sp-ic{width:16px;height:16px}}'
    ].join('\n');
    document.head.appendChild(s);
  }
})();
