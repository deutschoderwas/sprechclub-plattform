/* ============================================================
   dow-held.js — die Petrol-Bühne oben in einem Bereich

   Warum (15.11.2026): Julia wollte die ganze Plattform „noch
   moderner, noch professioneller, weniger KI“, im Stil von „Meine
   Stunden“. Start, Für dich, Üben, Sprechen, Prüfungen und der
   Vokabeltrainer haben dafür je eine eigene Bühne bekommen. Für die
   übrigen Bereiche steht sie hier einmal, damit sie überall gleich
   aussieht und nicht jedes Mal neu geschrieben wird.

   window.dowHeld({
     titel: 'Schreiben',
     text:  'Ein Satz darunter.',
     bild:  'bilder/bereich/sw-hero.webp',   // fehlt es, bleibt nur der Text
     chips: [{ ic: 'liste', t: '<b>76</b> Aufgaben' }, …],   // t ist HTML
     knopf: { t: 'Los', ic: 'pfeil', tun: "go('x')" }         // oder href
   })  -> HTML-Text

   Wer die Datei nicht geladen hat, ruft sie nicht auf: jeder Aufrufer
   prüft window.dowHeld und fällt sonst auf seine alte Überschrift zurück.
   ============================================================ */
(function () {
  'use strict';
  if (window.dowHeld) return;

  function E(s) {
    return String(s == null ? '' : s).replace(/[&<>"']/g, function (c) {
      return ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c];
    });
  }

  var IC = {
    liste: '<path d="M8 6h13"/><path d="M8 12h13"/><path d="M8 18h13"/><path d="M3 6h.01"/><path d="M3 12h.01"/><path d="M3 18h.01"/>',
    stufen: '<path d="M3 20h4v-5h4v-5h4V5h6"/>',
    haken: '<path d="M20 6 9 17l-5-5"/>',
    pfeil: '<path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>',
    stift: '<path d="M12 20h9"/><path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4z"/>',
    kopfhoerer: '<path d="M3 14h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7a9 9 0 0 1 18 0v7a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3"/>',
    text: '<path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5z"/><path d="M14 2v6h6"/><path d="M8 13h8"/><path d="M8 17h5"/>',
    stern: '<path d="m12 2 3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01z"/>',
    blase: '<path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>',
    buch: '<path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/>',
    ziel: '<circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/>'
  };
  function ic(k) {
    return '<svg class="dwh-ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" '
      + 'stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' + (IC[k] || '') + '</svg>';
  }
  window.dowIcon = ic;

  function stil() {
    if (document.getElementById('dwh-stil')) return;
    var st = document.createElement('style'); st.id = 'dwh-stil';
    st.textContent = [
      '.dwh{display:grid;grid-template-columns:minmax(0,1.5fr) minmax(0,1fr);border-radius:24px;overflow:hidden;background:linear-gradient(140deg,#0E6D85,#0A4E62);color:#fff;margin:0 0 22px;box-shadow:0 22px 44px -26px rgba(10,78,98,.65)}',
      '.dwh.ohne{grid-template-columns:1fr}',
      '.dwh-tx{padding:30px 32px;display:flex;flex-direction:column;gap:14px;justify-content:center;min-width:0}',
      '.dwh h1{font-family:"Space Grotesk",Inter,sans-serif;font-size:clamp(26px,3.4vw,38px);font-weight:700;letter-spacing:-.025em;line-height:1.1;margin:0;color:#fff}',
      '.dwh-sub{margin:0;color:#D6EEF5;font-size:15px;line-height:1.55;max-width:540px}',
      '.dwh-chips{display:flex;flex-wrap:wrap;gap:8px}',
      '.dwh-chip{display:inline-flex;align-items:center;gap:7px;background:rgba(255,255,255,.12);border:1px solid rgba(255,255,255,.22);border-radius:999px;padding:6px 12px;font-size:13px;color:#E6F5FA;white-space:nowrap}',
      '.dwh-chip b{color:#fff}',
      '.dwh-ic{width:18px;height:18px;flex:0 0 auto}',
      '.dwh-chip .dwh-ic{width:15px;height:15px;color:#A9DEEE}',
      '.dwh-knopf{align-self:flex-start;display:inline-flex;align-items:center;gap:9px;background:#fff;color:#0A4E62;border:0;border-radius:14px;padding:12px 20px;font:inherit;font-weight:700;font-size:15px;cursor:pointer;min-height:50px;text-decoration:none;box-shadow:0 10px 22px -12px rgba(0,0,0,.45);transition:transform .15s}',
      '.dwh-knopf:hover{transform:translateY(-1px)}',
      '.dwh-knopf .dwh-ic{color:#0E6D85}',
      '.dwh-bild{display:block;position:relative;min-height:240px;background:#0B5A70}',
      '.dwh-bild img{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;display:block}',
      '.dwh-bild::before{content:"";position:absolute;inset:0;z-index:1;background:linear-gradient(90deg,#0C5D74 0%,rgba(12,93,116,0) 38%)}',
      '@media(max-width:760px){',
      '  .dwh{grid-template-columns:1fr;border-radius:20px;margin-bottom:16px}',
      '  .dwh-bild{order:-1;min-height:0;aspect-ratio:16/7}',
      '  .dwh-bild::before{background:linear-gradient(0deg,#0D6680 0%,rgba(13,102,128,0) 55%)}',
      '  .dwh-tx{padding:14px 18px 20px;gap:12px}',
      '  .dwh-sub{font-size:14.5px}',
      '  .dwh-knopf{align-self:stretch;justify-content:center}',
      '}'
    ].join('\n');
    document.head.appendChild(st);
  }

  window.dowHeld = function (o) {
    o = o || {};
    stil();
    var chips = (o.chips || []).filter(Boolean).map(function (c) {
      return '<span class="dwh-chip">' + ic(c.ic) + c.t + '</span>';
    }).join('');
    var k = o.knopf, knopf = '';
    if (k) {
      knopf = k.href
        ? '<a class="dwh-knopf" href="' + E(k.href) + '"' + (k.neu ? ' target="_blank" rel="noopener"' : '') + '>' + ic(k.ic || 'pfeil') + E(k.t) + '</a>'
        : '<button type="button" class="dwh-knopf" onclick="' + E(k.tun) + '">' + ic(k.ic || 'pfeil') + E(k.t) + '</button>';
    }
    return '<header class="dwh' + (o.bild ? '' : ' ohne') + '"><div class="dwh-tx">'
      + '<h1>' + E(o.titel) + '</h1>'
      + (o.text ? '<p class="dwh-sub">' + E(o.text) + '</p>' : '')
      + (chips ? '<div class="dwh-chips">' + chips + '</div>' : '')
      + knopf
      + '</div>'
      + (o.bild ? '<span class="dwh-bild"><img src="' + E(o.bild) + '" alt="" onerror="var h=this.closest(\'.dwh\');if(h)h.classList.add(\'ohne\');this.parentNode.remove()"></span>' : '')
      + '</header>';
  };
})();
