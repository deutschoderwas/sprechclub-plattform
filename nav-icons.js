/* ============================================================
   deutschoderwas club — die Symbole in der Seitenleiste

   Vorher standen dort Emoji: 🏠 🎓 🃏 🏆 ✍️ … Jedes in einem anderen
   Stil, andere Farben, andere Strichstärke — je nach Gerät sahen sie
   auch noch unterschiedlich aus. Zusammen wirkte das unruhig.

   Jetzt: ein Satz Linien-Symbole, alle 24×24, alle Strichstärke 1.75,
   alle in derselben Farbe. Sie sitzen auf einem weichen Plättchen,
   wie die Symbole auf der Landingpage.
   ============================================================ */
(function(){
  'use strict';

  var P = {
    haus:      '<path d="M3.5 10.8 12 3.8l8.5 7M6 9.6V19a1.2 1.2 0 0 0 1.2 1.2h3V15h3.6v5.2h3A1.2 1.2 0 0 0 18 19V9.6"/>',
    kalender:  '<rect x="3.2" y="5" width="17.6" height="15.4" rx="3"/><path d="M3.2 9.6h17.6M8 2.8v4M16 2.8v4"/>',
    hut:       '<path d="M2.8 8.6 12 4.4l9.2 4.2-9.2 4.2z"/><path d="M6.6 10.6v4.6c0 1.6 2.4 2.9 5.4 2.9s5.4-1.3 5.4-2.9v-4.6M20.4 9.2v5.4"/>',
    kompass:   '<circle cx="12" cy="12" r="8.6"/><path d="m14.9 9.1-1.6 4.2-4.2 1.6 1.6-4.2z"/>',
    karten:    '<rect x="7.4" y="6.6" width="12.8" height="13.6" rx="2.6"/><path d="M16.2 6.6V5.2A2 2 0 0 0 14.2 3.2H5.6a2 2 0 0 0-2 2v9.4"/>',
    buch:      '<path d="M4 5.4A1.8 1.8 0 0 1 5.8 3.6H19v14.2H5.8A1.8 1.8 0 0 0 4 19.6z"/><path d="M4 19.6a1.8 1.8 0 0 0 1.8 1.8H19v-3.6"/>',
    zweipersonen:'<circle cx="9" cy="8" r="3.2"/><path d="M3.4 19.6c0-3 2.5-4.8 5.6-4.8s5.6 1.8 5.6 4.8"/><path d="M16.2 5.2a3.2 3.2 0 0 1 0 6.2M17.4 14.4c2.1.5 3.6 2 3.6 4"/>',
    stift:     '<path d="M4 20.2 4.8 16l11-11a2.3 2.3 0 0 1 3.2 3.2l-11 11z"/><path d="M14.2 6.6 17.4 9.8"/>',
    ordner:    '<path d="M3.4 7.6a2 2 0 0 1 2-2h3.8l2 2.6h7.4a2 2 0 0 1 2 2v8.2a2 2 0 0 1-2 2H5.4a2 2 0 0 1-2-2z"/>',
    pokal:     '<path d="M8.2 4h7.6v4.2a3.8 3.8 0 0 1-7.6 0z"/><path d="M8.2 5.2H5.4v1.8a2.8 2.8 0 0 0 2.8 2.8M15.8 5.2h2.8V7a2.8 2.8 0 0 1-2.8 2.8"/><path d="M10.2 12.6h3.6M9.2 20.2h5.6M12 12.6v7.6"/>',
    brief:     '<rect x="3.2" y="5.4" width="17.6" height="13.2" rx="2.6"/><path d="m4.2 7.4 7.8 5.8 7.8-5.8"/>',
    mikro:     '<rect x="9.2" y="2.8" width="5.6" height="10.4" rx="2.8"/><path d="M5.4 11.2a6.6 6.6 0 0 0 13.2 0M12 17.8v3.4"/>',
    leiter:    '<path d="M7.4 3.4v17.2M16.6 3.4v17.2M7.4 7.6h9.2M7.4 12h9.2M7.4 16.4h9.2"/>',
    karte:     '<rect x="3.2" y="6" width="17.6" height="12" rx="2.6"/><path d="M3.2 10.2h17.6M16.6 14.4h1.6"/>',
    person:    '<circle cx="12" cy="8.4" r="3.6"/><path d="M4.8 20.4c0-3.4 3.2-5.4 7.2-5.4s7.2 2 7.2 5.4"/>',
    plus:      '<circle cx="12" cy="12" r="8.6"/><path d="M12 8.2v7.6M8.2 12h7.6"/>',
    tuer:      '<path d="M14.4 3.6H6.6a2 2 0 0 0-2 2v12.8a2 2 0 0 0 2 2h7.8"/><path d="M17.8 15.4 21.2 12l-3.4-3.4M9.6 12h11.6"/>',
    chat:      '<path d="M20.8 11.4a7.4 7.4 0 0 1-7.4 7.4H8.2l-4 2.8v-3.5a7.4 7.4 0 0 1 9.2-13 7.4 7.4 0 0 1 7.4 6.3z"/>',
    welle:     '<path d="M4 12h2.6l2-6 3 13 3-9.4 1.8 2.4H20"/>',
    ziel:      '<circle cx="12" cy="12" r="8.4"/><circle cx="12" cy="12" r="4.2"/><circle cx="12" cy="12" r="1"/>'
  };

  /* Welches Symbol gehört zu welchem Eintrag */
  var ZU_ANSICHT = {
    dashboard:'haus', kalender:'kalender', stunden:'kalender', kurs:'hut',
    pruefung:'ziel', ueben:'leiter',
    lernen:'kompass', vokabeln:'karten', fehler:'buch', buddy:'zweipersonen',
    materialien:'ordner', fortschritt:'pokal', nachrichten:'brief',
    amanda:'mikro', lernpfad:'leiter', guthaben:'karte', profil:'person',
    community:'chat', podcast:'welle', schreiben:'stift', kurse:'buch'
  };
  var ZU_LINK = {
    'korrektur.html':'stift',
    'aussprache.html':'welle',
    'index.html':'haus'
  };

  function svg(name, groesse){
    var d = P[name]; if(!d) return '';
    return '<svg viewBox="0 0 24 24" width="'+(groesse||20)+'" height="'+(groesse||20)+'" fill="none" '
      + 'stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" '
      + 'aria-hidden="true">' + d + '</svg>';
  }

  function name(el){
    var v = el.getAttribute('data-view');
    if(v && ZU_ANSICHT[v]) return ZU_ANSICHT[v];
    var h = el.getAttribute('href')||'';
    for(var k in ZU_LINK) if(h.indexOf(k)>=0) return ZU_LINK[k];
    var t = (el.textContent||'').toLowerCase();
    if(t.indexOf('abmelden')>=0 || t.indexOf('log out')>=0) return 'tuer';
    if(t.indexOf('buchen')>=0 || t.indexOf('book')>=0) return 'plus';
    if(t.indexOf('julia')>=0) return 'stift';
    if(t.indexOf('podcast')>=0) return 'welle';
    return null;
  }

  function malen(){
    var n = document.querySelectorAll('.sidebar .navlink, nav.sidebar .navlink');
    if(!n.length) n = document.querySelectorAll('.navlink');
    Array.prototype.forEach.call(n, function(el){
      var ic = el.querySelector('.ic');
      if(!ic || ic.dataset.dow === '1') return;
      var s = name(el);
      if(!s) return;
      ic.dataset.dow = '1';
      ic.innerHTML = svg(s, el.classList.contains('navlink-chat') ? 21 : 20);
    });
  }

  if(document.readyState === 'loading') document.addEventListener('DOMContentLoaded', malen);
  else malen();
  /* Die Navigation wird an einigen Stellen nachträglich ergänzt */
  setTimeout(malen, 400);
  setTimeout(malen, 1600);
  window.navSymboleMalen = malen;
})();
