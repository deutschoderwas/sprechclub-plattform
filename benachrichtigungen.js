/* ============================================================
   deutschoderwas club · Benachrichtigungen
   Glocke + Center. Erwartet window.sb und window.user (konto.html).
   Öffentlich:  NB.start()      – einmalig nach dem Login
                NB.oeffnen()    – Panel öffnen
                NB.zaehler()    – aktuellen Stand neu laden
                NB.glocke(el)   – ein weiteres Glocken-Element anmelden
   ============================================================ */
(function () {
  'use strict';

  var sbc = null, ME = null, offen = false, laden = false;
  var stand = 0, liste = [], kanal = null, timer = null, styled = false;
  var glocken = [];

  function esc(s){ return String(s==null?'':s).replace(/[&<>"]/g,function(c){return ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]);}); }
  function sb(){ try{ return window.sb || null; }catch(e){ return null; } }
  function me(){ try{ return window.user || null; }catch(e){ return null; } }

  var ICON = {
    antwort:    '💬',
    erwaehnung: '👋',
    korrektur:  '✍️',
    tandem:     '🤝',
    dm:         '✉️',
    news:       '📣',
    system:     '🔔'
  };
  var FARBE = {
    antwort:'#EAF3F1', erwaehnung:'#FFF3D6', korrektur:'#EDE7FF',
    tandem:'#E6F4EA', dm:'#EAF0FA', news:'#FFEDE3', system:'#F1EEE8'
  };

  function zeit(t){
    var d = new Date(t), jetzt = new Date(), s = Math.round((jetzt - d)/1000);
    if (s < 60) return 'gerade eben';
    if (s < 3600) return 'vor ' + Math.floor(s/60) + ' Min.';
    if (s < 86400) return 'vor ' + Math.floor(s/3600) + ' Std.';
    if (s < 172800) return 'gestern';
    if (s < 604800) return 'vor ' + Math.floor(s/86400) + ' Tagen';
    try { return d.toLocaleDateString('de-DE',{day:'numeric',month:'long'}); } catch(e){ return ''; }
  }

  function style(){
    if (styled) return; styled = true;
    var st = document.createElement('style');
    st.textContent = `
.nb-btn{position:relative;display:inline-flex;align-items:center;justify-content:center;width:38px;height:38px;border-radius:11px;border:1px solid var(--border,#ECECEC);background:#fff;cursor:pointer;font-size:17px;line-height:1;color:#141414;padding:0;flex:none;transition:.14s}
.nb-btn:hover{background:#F7F5F0;border-color:#E0DED7}
.nb-btn.auf{background:#141414;border-color:#141414;color:#fff}
.nb-btn .nb-n{position:absolute;top:-5px;right:-5px;min-width:18px;height:18px;padding:0 5px;border-radius:9px;background:#D23B3B;color:#fff;font-size:10.5px;font-weight:800;display:none;align-items:center;justify-content:center;font-family:'Inter',system-ui,sans-serif;box-shadow:0 0 0 2px #fff}
.nb-btn .nb-n.da{display:flex}
.nb-btn .nb-p{position:absolute;inset:0;border-radius:11px;pointer-events:none}
@keyframes nb-ring{0%{transform:rotate(0)}20%{transform:rotate(-13deg)}40%{transform:rotate(11deg)}60%{transform:rotate(-7deg)}80%{transform:rotate(5deg)}100%{transform:rotate(0)}}
.nb-btn.klingelt{animation:nb-ring .7s ease}

.nb-ov{position:fixed;inset:0;z-index:9998;background:transparent}
.nb-panel{position:fixed;z-index:9999;width:392px;max-width:calc(100vw - 24px);background:#fff;border:1px solid #ECECEC;border-radius:16px;box-shadow:0 22px 60px rgba(20,20,20,.22);overflow:hidden;font-family:'Inter',system-ui,-apple-system,sans-serif;animation:nb-in .16s cubic-bezier(.2,.9,.3,1.1)}
@keyframes nb-in{from{opacity:0;transform:translateY(-6px)}to{opacity:1;transform:none}}
.nb-h{display:flex;align-items:center;gap:10px;padding:14px 16px 12px;border-bottom:1px solid #F1EFEA}
.nb-h b{font-family:'Space Grotesk',Inter,sans-serif;font-size:15.5px;color:#141414}
.nb-h .nb-alle{margin-left:auto;border:none;background:none;color:#14708B;font-size:12.5px;font-weight:700;cursor:pointer;font-family:inherit;padding:4px 6px;border-radius:7px}
.nb-h .nb-alle:hover{background:#F1FAF8}
.nb-h .nb-x{border:none;background:#F5F3EE;width:26px;height:26px;border-radius:8px;cursor:pointer;color:#5A6169;font-size:13px;display:none}
.nb-b{max-height:min(62vh,520px);overflow-y:auto;overscroll-behavior:contain}
.nb-sec{font-size:10.5px;font-weight:800;letter-spacing:.06em;text-transform:uppercase;color:#9A978E;padding:12px 16px 5px}
.nb-r{display:flex;gap:11px;padding:11px 16px;cursor:pointer;border:none;background:none;width:100%;text-align:left;font-family:inherit;position:relative;align-items:flex-start}
.nb-r:hover{background:#FAF8F3}
.nb-r .nb-i{width:34px;height:34px;border-radius:10px;display:flex;align-items:center;justify-content:center;font-size:16px;flex:none}
.nb-r .nb-c{flex:1;min-width:0}
.nb-r .nb-t{font-size:13.5px;font-weight:650;color:#191B1C;line-height:1.35}
.nb-r .nb-x2{font-size:12.5px;color:#5A6169;line-height:1.45;margin-top:2px;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden}
.nb-r .nb-z{font-size:11.5px;color:#9A978E;margin-top:3px}
.nb-r .nb-pt{width:7px;height:7px;border-radius:50%;background:#1B9BC0;flex:none;margin-top:14px}
.nb-r.gelesen .nb-t{font-weight:550;color:#5A6169}
.nb-r.gelesen .nb-i{opacity:.6}
.nb-leer{padding:34px 20px;text-align:center;color:#8B929A;font-size:13.5px;line-height:1.6}
.nb-leer .nb-em{font-size:30px;display:block;margin-bottom:8px}
.nb-f{border-top:1px solid #F1EFEA;padding:9px 16px;font-size:11.5px;color:#9A978E;text-align:center}

@media(max-width:640px){
  .nb-ov{background:rgba(20,20,20,.35)}
  .nb-panel{left:0!important;right:0!important;top:auto!important;bottom:0;width:100%;max-width:100%;border-radius:18px 18px 0 0;animation:nb-up .2s cubic-bezier(.2,.9,.3,1.1)}
  @keyframes nb-up{from{transform:translateY(24px);opacity:0}to{transform:none;opacity:1}}
  .nb-h .nb-x{display:block}
  .nb-b{max-height:66vh}
}
`;
    document.head.appendChild(st);
  }

  // ---------- Glocken ----------
  function glocke(el){
    if (!el || glocken.indexOf(el) >= 0) return;
    style();
    el.classList.add('nb-btn');
    el.setAttribute('type','button');
    el.setAttribute('aria-label','Benachrichtigungen');
    if (!el.querySelector('.nb-n')) el.innerHTML = '🔔<span class="nb-n">0</span>';
    el.addEventListener('click', function(ev){ ev.preventDefault(); ev.stopPropagation(); umschalten(el); });
    glocken.push(el);
    male();
  }

  function male(){
    glocken.forEach(function(el){
      var b = el.querySelector('.nb-n'); if (!b) return;
      b.textContent = stand > 99 ? '99+' : String(stand);
      b.classList.toggle('da', stand > 0);
    });
  }

  function klingeln(){
    glocken.forEach(function(el){
      el.classList.remove('klingelt');
      void el.offsetWidth;
      el.classList.add('klingelt');
    });
  }

  // ---------- Daten ----------
  async function zaehler(){
    if (!sbc) return;
    try {
      var r = await sbc.rpc('benachrichtigungen_anzahl');
      var n = (r && typeof r.data === 'number') ? r.data : 0;
      if (n !== stand){ stand = n; male(); }
    } catch(e){}
  }

  async function laden_(){
    if (!sbc) return [];
    try {
      var r = await sbc.rpc('benachrichtigungen_liste', { p_limit: 40 });
      return (r && r.data) || [];
    } catch(e){ return []; }
  }

  // ---------- Panel ----------
  function umschalten(anchor){
    if (offen) { schliessen(); return; }
    oeffnen(anchor);
  }

  function schliessen(){
    offen = false;
    var p = document.getElementById('nbPanel'); if (p) p.remove();
    var o = document.getElementById('nbOv');    if (o) o.remove();
    glocken.forEach(function(el){ el.classList.remove('auf'); });
    document.removeEventListener('keydown', aufEsc);
  }
  function aufEsc(e){ if (e.key === 'Escape') schliessen(); }

  async function oeffnen(anchor){
    style();
    schliessen();
    offen = true;
    anchor = anchor || glocken[0];
    if (anchor) anchor.classList.add('auf');

    var ov = document.createElement('div'); ov.id = 'nbOv'; ov.className = 'nb-ov';
    ov.addEventListener('click', schliessen);
    document.body.appendChild(ov);

    var p = document.createElement('div'); p.id = 'nbPanel'; p.className = 'nb-panel';
    p.innerHTML = kopf() + '<div class="nb-b" id="nbBody"><div class="nb-leer">Lädt …</div></div>';
    document.body.appendChild(p);
    platzieren(p, anchor);
    document.addEventListener('keydown', aufEsc);

    p.addEventListener('click', function(ev){
      var x = ev.target.closest && ev.target.closest('.nb-x');
      if (x){ schliessen(); return; }
      var a = ev.target.closest && ev.target.closest('.nb-alle');
      if (a){ alleGelesen(); return; }
      var r = ev.target.closest && ev.target.closest('[data-nb]');
      if (r){ oeffneEintrag(r.getAttribute('data-nb')); return; }
    });

    if (laden) return;
    laden = true;
    liste = await laden_();
    laden = false;
    var b = document.getElementById('nbBody');
    if (b) b.innerHTML = koerper();
  }

  function platzieren(p, anchor){
    if (window.innerWidth <= 640) return;
    var r = anchor ? anchor.getBoundingClientRect() : { bottom: 60, right: window.innerWidth - 20 };
    var breite = 392;
    var links = Math.min(Math.max(12, r.right - breite), window.innerWidth - breite - 12);
    p.style.top = (r.bottom + 9) + 'px';
    p.style.left = links + 'px';
  }

  function kopf(){
    return '<div class="nb-h"><b>Benachrichtigungen</b>' +
      (stand > 0 ? '<button class="nb-alle" type="button">Alles gelesen</button>' : '<span style="margin-left:auto"></span>') +
      '<button class="nb-x" type="button" aria-label="Schließen">✕</button></div>';
  }

  function zeile(n){
    var f = FARBE[n.typ] || '#F1EEE8', i = ICON[n.typ] || '🔔';
    return '<button class="nb-r' + (n.gelesen ? ' gelesen' : '') + '" data-nb="' + esc(n.id) + '">' +
      '<span class="nb-i" style="background:' + f + '">' + i + '</span>' +
      '<span class="nb-c"><span class="nb-t">' + esc(n.titel) + '</span>' +
      (n.text ? '<span class="nb-x2">' + esc(n.text) + '</span>' : '') +
      '<span class="nb-z">' + esc(zeit(n.created_at)) + '</span></span>' +
      (n.gelesen ? '' : '<span class="nb-pt"></span>') +
      '</button>';
  }

  function koerper(){
    if (!liste.length) {
      return '<div class="nb-leer"><span class="nb-em">🌱</span>Noch nichts Neues.<br>Hier landen Antworten, Erwähnungen,<br>Korrekturen und Club-News.</div>';
    }
    var neu = liste.filter(function(n){ return !n.gelesen; });
    var alt = liste.filter(function(n){ return n.gelesen; });
    var h = '';
    if (neu.length) h += '<div class="nb-sec">Neu</div>' + neu.map(zeile).join('');
    if (alt.length) h += '<div class="nb-sec">Früher</div>' + alt.slice(0, 25).map(zeile).join('');
    h += '<div class="nb-f">Ältere Benachrichtigungen werden nach 60 Tagen entfernt.</div>';
    return h;
  }

  async function alleGelesen(){
    try { await sbc.rpc('benachrichtigungen_alle_gelesen'); } catch(e){}
    liste.forEach(function(n){ n.gelesen = true; });
    stand = 0; male();
    var p = document.getElementById('nbPanel');
    if (p) { p.innerHTML = kopf() + '<div class="nb-b" id="nbBody">' + koerper() + '</div>'; }
  }

  async function oeffneEintrag(id){
    var n = null;
    for (var i = 0; i < liste.length; i++) { if (liste[i].id === id) { n = liste[i]; break; } }
    if (!n) return;
    if (!n.gelesen) {
      n.gelesen = true;
      stand = Math.max(0, stand - 1); male();
      try { await sbc.rpc('benachrichtigung_gelesen', { p_id: id }); } catch(e){}
    }
    schliessen();
    springe(n);
  }

  function springe(n){
    var link = n.link || '';
    if (link.indexOf('community:dm:') === 0) {
      if (window.go) window.go('community');
      return;
    }
    if (link.indexOf('community:') === 0) {
      var slug = link.slice('community:'.length);
      if (window.communityOeffne) { window.communityOeffne(slug); return; }
      if (window.go) window.go('community');
      return;
    }
    if (link.indexOf('seite:') === 0) {
      location.href = link.slice('seite:'.length);
      return;
    }
    if (link) location.href = link;
  }

  // ---------- Realtime ----------
  function horchen(){
    if (kanal || !sbc || !ME) return;
    try {
      kanal = sbc.channel('nb-' + ME.id)
        .on('postgres_changes', { event: 'INSERT', schema: 'public', table: 'benachrichtigungen' }, function(p){
          var r = p && p.new; if (!r) return;
          if (r.user_id && r.user_id !== ME.id) return;
          stand = stand + 1; male(); klingeln();
          liste.unshift({ id:r.id, typ:r.typ, titel:r.titel, text:r.text, link:r.link,
                          kanal:r.kanal, von_name:r.von_name, created_at:r.created_at, gelesen:false });
          if (offen) {
            var b = document.getElementById('nbBody');
            var p2 = document.getElementById('nbPanel');
            if (p2) p2.innerHTML = kopf() + '<div class="nb-b" id="nbBody">' + koerper() + '</div>';
            else if (b) b.innerHTML = koerper();
          }
        })
        .subscribe();
    } catch(e){}
  }

  // ---------- Start ----------
  function start(){
    sbc = sb(); ME = me();
    if (!sbc || !ME) return;
    style();
    // vorhandene Glocken einsammeln
    Array.prototype.forEach.call(document.querySelectorAll('.tb-bell,[data-glocke]'), function(el){ glocke(el); });
    zaehler();
    horchen();
    if (timer) clearInterval(timer);
    timer = setInterval(zaehler, 90000);
    document.addEventListener('visibilitychange', function(){ if (!document.hidden) zaehler(); });
    window.addEventListener('resize', function(){ if (offen) schliessen(); });
  }

  window.NB = {
    start: start,
    oeffnen: function(){ oeffnen(glocken[0]); },
    zaehler: zaehler,
    glocke: glocke,
    stand: function(){ return stand; }
  };
})();
