/* ============================================================
   deutschoderwas club · Sprech-Tandem
   Erwartet aus konto.html: sb, user, profile, esc, go
   - window.renderBuddyWidget(hostEl)  -> kompaktes Widget
   - window.renderBuddy()              -> Ansicht #v-buddy
   Anschreiben: window.openDM(userId, name); Fallback go('community').
   Missionen aus tandem-missionen.js (window.TANDEM).
   ============================================================ */
(function () {
  'use strict';
  var styled = false;
  var NIVEAUS = ['A1','A2','B1','B2','C1','C2'];
  function I(n,s,c){ return window.ICON ? window.ICON(n,s,c) : ''; }
  function getSb(){ try{ return window.sb || (typeof sb!=='undefined'?sb:null); }catch(e){ return null; } }
  function getProfile(){ try{ return window.profile || (typeof profile!=='undefined'?profile:null); }catch(e){ return null; } }
  function E(s){ return String(s==null?'':s).replace(/[&<>"]/g,function(c){return ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]);}); }
  function initials(n){ n=String(n||'M').trim(); var p=n.split(/\s+/); return ((p[0]||'?')[0]+(p[1]?p[1][0]:'')).toUpperCase(); }
  function avColor(name){ var s=String(name||'?'),h=0; for(var i=0;i<s.length;i++){h=(h*31+s.charCodeAt(i))>>>0;} return 'hsl('+(h%360)+',42%,72%)'; }

  /* ---------- Stil (neue Designsprache) ---------- */
  function injectStyle(){
    if(styled) return; styled=true;
    var css = [
'.td{--ink:#171717;--ink2:#6E6A63;--ink3:#9A958C;--line:#EBE7DF;--line2:#F4F1EA;--acc:#12A594;--acc-d:#0E7C70;--acc-soft:#EAF7F4;--acc-line:#CFEBE5;--surf:#fff;font-family:Inter,system-ui,-apple-system,sans-serif;color:var(--ink)}',
'.td *{box-sizing:border-box}',
'@keyframes td-up{from{opacity:0;transform:translateY(10px)}to{opacity:1;transform:none}}',
'.td-card{background:var(--surf);border:1px solid var(--line);border-radius:20px;padding:19px;box-shadow:0 1px 2px rgba(23,23,23,.04),0 12px 30px -26px rgba(23,23,23,.6);animation:td-up .4s cubic-bezier(.16,1,.3,1) both}',
'.td-h{display:flex;align-items:center;gap:10px;margin-bottom:12px}',
'.td-h .ic{width:36px;height:36px;border-radius:11px;background:var(--acc-soft);border:1px solid var(--acc-line);color:var(--acc-d);display:flex;align-items:center;justify-content:center;flex:none}',
'.td-h h4{margin:0;font-family:"Space Grotesk",Inter,sans-serif;font-size:16.5px;font-weight:600;letter-spacing:-.02em;color:var(--ink)}',
'.td-h .sub{font-size:12.5px;color:var(--ink3);margin-top:1px}',
'.td-p{font-size:14px;color:var(--ink2);line-height:1.6;margin:0 0 15px}',
'.td-btn{display:inline-flex;align-items:center;justify-content:center;gap:8px;border:none;border-radius:99px;padding:12px 22px;font-family:inherit;font-weight:600;font-size:14.5px;cursor:pointer;text-decoration:none;transition:.2s}',
'.td-btn.p{background:var(--acc);color:#fff;box-shadow:0 9px 22px -14px rgba(18,165,148,.95)}',
'.td-btn.p:hover{background:var(--acc-d)}',
'.td-btn.p:disabled{background:var(--line);color:var(--ink3);cursor:not-allowed;box-shadow:none}',
'.td-btn.s{background:var(--surf);border:1px solid var(--line);color:var(--ink2)}',
'.td-btn.s:hover{border-color:var(--ink3);color:var(--ink)}',
'.td-btn.w{width:100%}',
'.td-row{display:flex;gap:8px;margin-top:9px;flex-wrap:wrap}',
'.td-row .td-btn{flex:1;min-width:120px}',
/* Partner */
'.td-b{display:flex;align-items:center;gap:13px;background:var(--acc-soft);border:1px solid var(--acc-line);border-radius:16px;padding:13px 14px;margin-bottom:13px}',
'.td-b .av{width:46px;height:46px;border-radius:50%;display:flex;align-items:center;justify-content:center;font-weight:700;font-size:16px;color:#fff;flex:none;text-shadow:0 1px 2px rgba(0,0,0,.15)}',
'.td-b .nm{font-family:"Space Grotesk",Inter,sans-serif;font-weight:600;font-size:16px;letter-spacing:-.015em}',
'.td-b .mt{font-size:12.5px;color:var(--ink2);margin-top:2px;display:flex;align-items:center;gap:8px;flex-wrap:wrap}',
'.td-lv{font-size:11px;font-weight:700;color:var(--acc-d);background:#fff;border:1px solid var(--acc-line);border-radius:6px;padding:2px 7px}',
/* Warten */
'.td-w{display:flex;align-items:center;gap:12px;background:#FDF8EA;border:1px solid #F0E2BD;border-radius:16px;padding:14px;margin-bottom:13px}',
'.td-w .sp{width:18px;height:18px;border-radius:50%;border:2.5px solid #EDDDA8;border-top-color:#B8931A;animation:td-spin 1s linear infinite;flex:none}',
'@keyframes td-spin{to{transform:rotate(360deg)}}',
'.td-w .t{font-size:13.5px;color:#6B5518;line-height:1.5}',
'.td-w .t b{font-weight:700;display:block}',
/* Mission */
'.td-m{background:var(--surf);border:1px solid var(--line);border-radius:20px;overflow:hidden;margin-bottom:13px;box-shadow:0 1px 2px rgba(23,23,23,.04),0 12px 30px -26px rgba(23,23,23,.6)}',
'.td-m .mim{position:relative;display:block;width:100%;aspect-ratio:16/7;overflow:hidden;background:var(--line2)}',
'.td-m .mim img{display:block;width:100%;height:100%;object-fit:cover}',
'.td-m .mh{background:linear-gradient(135deg,#0E7C70,#12A594);color:#fff;padding:17px 19px}',
/* Termin & Raum */
'.td-t{background:var(--surf);border:1px solid var(--line);border-radius:20px;overflow:hidden;margin-bottom:13px;box-shadow:0 1px 2px rgba(23,23,23,.04),0 12px 30px -26px rgba(23,23,23,.6)}',
'.td-t .th{display:flex;align-items:center;gap:10px;padding:15px 17px 0}',
'.td-t .th .ic{color:var(--acc-d)}',
'.td-t .th b{font-family:"Space Grotesk",Inter,sans-serif;font-size:15.5px;font-weight:600;letter-spacing:-.02em}',
'.td-t .tb{padding:13px 17px 17px}',
'.td-next{display:flex;align-items:center;gap:14px;background:linear-gradient(135deg,#0E7C70,#12A594);color:#fff;border-radius:16px;padding:15px 16px;margin-bottom:12px}',
'.td-next .dt{flex:none;text-align:center;background:rgba(255,255,255,.18);border-radius:12px;padding:8px 12px;min-width:62px}',
'.td-next .dt .d{font-family:"Space Grotesk",Inter,sans-serif;font-size:22px;font-weight:700;line-height:1}',
'.td-next .dt .m{font-size:11px;opacity:.9;margin-top:2px;text-transform:uppercase;letter-spacing:.05em}',
'.td-next .nx{flex:1;min-width:0}',
'.td-next .nx b{display:block;font-family:"Space Grotesk",Inter,sans-serif;font-size:16px;font-weight:600;letter-spacing:-.015em}',
'.td-next .nx span{display:block;font-size:13px;opacity:.92;margin-top:2px}',
'.td-vor{display:flex;align-items:flex-start;gap:11px;background:#FDF8EA;border:1px solid #F0E2BD;border-radius:14px;padding:13px 15px;margin-bottom:12px;font-size:14px;line-height:1.55;color:#6B5518}',
'.td-vor .ic{color:#B8931A;flex:none;margin-top:2px}',
'.td-form{display:flex;gap:8px;flex-wrap:wrap;align-items:center}',
'.td-form input{border:1.5px solid var(--line);border-radius:13px;padding:10px 13px;font-family:inherit;font-size:14.5px;color:var(--ink);background:var(--surf);outline:none;transition:border-color .2s}',
'.td-form input:focus{border-color:var(--acc)}',
'.td-raum{display:flex;align-items:center;justify-content:center;gap:9px;width:100%;border:none;border-radius:99px;padding:14px 22px;font-family:inherit;font-weight:600;font-size:15px;cursor:pointer;text-decoration:none;transition:.2s;background:var(--line2);color:var(--ink3)}',
'.td-raum.live{background:var(--acc);color:#fff;box-shadow:0 10px 26px -14px rgba(18,165,148,1)}',
'.td-raum.live:hover{background:var(--acc-d)}',
'.td-raum.bereit{background:var(--surf);border:1.5px solid var(--acc);color:var(--acc-d)}',
'.td-raum .pt{width:9px;height:9px;border-radius:50%;background:#fff;animation:td-blink 1.4s infinite}',
'@keyframes td-blink{0%,100%{opacity:1}50%{opacity:.35}}',
'.td-hist{font-size:12.5px;color:var(--ink3);margin-top:11px;line-height:1.55}',
'.td-m .mh .kk{font-size:11px;font-weight:700;letter-spacing:.09em;text-transform:uppercase;opacity:.84;margin-bottom:5px}',
'.td-m .mh h3{margin:0 0 6px;font-family:"Space Grotesk",Inter,sans-serif;font-size:20px;font-weight:700;letter-spacing:-.025em}',
'.td-m .mh p{margin:0;font-size:13.5px;line-height:1.55;opacity:.94}',
'.td-m .mh .mm{display:flex;gap:8px;margin-top:11px;flex-wrap:wrap}',
'.td-m .mh .mm span{font-size:11.5px;font-weight:600;background:rgba(255,255,255,.18);border-radius:99px;padding:4px 10px}',
'.td-m .mb{padding:17px 19px}',
'.td-s{margin-bottom:17px}',
'.td-s:last-child{margin-bottom:0}',
'.td-s .sl{display:flex;align-items:center;gap:8px;font-size:11.5px;font-weight:700;letter-spacing:.07em;text-transform:uppercase;color:var(--ink3);margin-bottom:9px}',
'.td-s .sl .ic{color:var(--acc-d)}',
'.td-s ol,.td-s ul{margin:0;padding:0;list-style:none;display:grid;gap:7px}',
'.td-s li{font-size:14.5px;line-height:1.55;color:var(--ink);display:flex;gap:9px}',
'.td-s li::before{content:"";width:5px;height:5px;border-radius:50%;background:var(--acc-line);flex:none;margin-top:8px}',
'.td-s.rm li{background:var(--acc-soft);border:1px solid var(--acc-line);border-radius:11px;padding:9px 12px;color:var(--acc-d);font-weight:500}',
'.td-s.rm li::before{display:none}',
'.td-auf{background:#FDF8EA;border:1px solid #F0E2BD;border-radius:14px;padding:13px 15px;font-size:14.5px;line-height:1.6;color:#6B5518}',
'.td-auf b{display:block;font-size:11.5px;font-weight:700;letter-spacing:.07em;text-transform:uppercase;color:#B8931A;margin-bottom:5px}',
'.td-wo{display:flex;flex-wrap:wrap;gap:7px}',
'.td-wo span{font-size:13px;font-weight:500;color:var(--ink2);background:var(--line2);border:1px solid var(--line);border-radius:99px;padding:6px 12px}',
'.td-fin{display:flex;align-items:center;gap:11px;border-top:1px solid var(--line2);margin-top:16px;padding-top:15px;flex-wrap:wrap}',
'.td-fin .ok{display:flex;align-items:center;gap:8px;font-size:13.5px;font-weight:600;color:var(--acc-d)}',
/* Missionsliste */
'.td-list{display:grid;gap:9px}',
'.td-li{display:flex;align-items:center;gap:12px;width:100%;text-align:left;border:1px solid var(--line);background:var(--surf);border-radius:15px;padding:12px 14px;cursor:pointer;font-family:inherit;transition:.18s}',
'.td-li:hover{border-color:var(--ink3);transform:translateY(-1px)}',
'.td-li.on{border-color:var(--acc);background:var(--acc-soft)}',
'.td-li .n{width:30px;height:30px;border-radius:10px;background:var(--line2);color:var(--ink2);font-family:"Space Grotesk",Inter,sans-serif;font-weight:700;font-size:13.5px;display:flex;align-items:center;justify-content:center;flex:none}',
'.td-li.done .n{background:var(--acc);color:#fff}',
'.td-li .tx{flex:1;min-width:0}',
'.td-li .tx b{display:block;font-size:14.5px;font-weight:600;letter-spacing:-.01em}',
'.td-li .tx span{display:block;font-size:12.5px;color:var(--ink2);margin-top:1px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}',
'.td-li .ar{color:var(--ink3);display:flex;flex:none}',
'.td-tabs{display:flex;gap:7px;margin-bottom:14px;flex-wrap:wrap}',
'.td-tb{border:1px solid var(--line);background:var(--surf);border-radius:99px;padding:7px 15px;font-family:inherit;font-size:13.5px;font-weight:600;color:var(--ink2);cursor:pointer;transition:.18s}',
'.td-tb:hover{border-color:var(--ink3)}',
'.td-tb.on{background:var(--ink);border-color:var(--ink);color:#fff}',
'.td-grid{display:grid;grid-template-columns:1.08fr .92fr;gap:18px;align-items:start}',
'@media(max-width:900px){.td-grid{grid-template-columns:1fr}}',
'.td-sec{font-size:11.5px;font-weight:700;color:var(--ink3);text-transform:uppercase;letter-spacing:.07em;margin:0 2px 11px}',
'.td-safe{font-size:12.5px;color:var(--ink3);line-height:1.6;margin:13px 2px 0;display:flex;gap:8px}',
'.td-safe .ic{flex:none;margin-top:1px}',
'@media(prefers-reduced-motion:reduce){.td *{animation:none!important;transition:none!important}}'
    ].join('\n');
    var st=document.createElement('style'); st.id='td-style'; st.textContent=css; document.head.appendChild(st);
  }

  /* ---------- Fortschritt ---------- */
  function doneMap(){ try{ return JSON.parse(localStorage.getItem('dow_tandem')||'{}'); }catch(e){ return {}; } }
  function setDone(id,v){
    var m=doneMap(); if(v) m[id]=Date.now(); else delete m[id];
    try{ localStorage.setItem('dow_tandem',JSON.stringify(m)); }catch(e){}
  }

  /* ---------- Missionen ---------- */
  function niveau(){
    var p=getProfile()||{};
    var lv=p.level||p.target_level;
    if(window.LZ&&LZ.data&&LZ.data.start_niveau) lv=LZ.data.start_niveau;
    return NIVEAUS.indexOf(lv)>=0?lv:'B1';
  }
  function missionen(lv){ return (window.TANDEM&&window.TANDEM[lv])||[]; }
  /* Mission der Woche: stabil pro Kalenderwoche, damit beide dieselbe sehen */
  function wocheIdx(len){
    if(!len) return 0;
    var d=new Date(), start=new Date(d.getFullYear(),0,1);
    var w=Math.floor(((d-start)/86400000+start.getDay()+1)/7);
    return w%len;
  }

  function missionHtml(m,lv){
    if(!m) return '';
    var fertig=!!doneMap()[m.id];
    return '<div class="td-m" id="tdM">'
     +(m.bild?'<span class="mim"><img src="illu/'+E(m.bild)+'.jpg" alt="" onerror="this.parentNode.style.display=\'none\'"></span>':'')
     +'<div class="mh"><div class="kk">Eure Mission</div><h3>'+E(m.t)+'</h3><p>'+E(m.ziel)+'</p>'
     +'<div class="mm"><span>'+E(lv)+'</span><span>'+E(m.dauer)+'</span><span>zu zweit</span></div></div>'
     +'<div class="mb">'
     +'<div class="td-s"><div class="sl">'+I('chat',14)+'Womit ihr anfangt</div><ol>'
     + m.fragen.map(function(f){ return '<li>'+E(f)+'</li>'; }).join('')+'</ol></div>'
     +'<div class="td-s rm"><div class="sl">'+I('bookmark',14)+'Diese Sätze benutzt ihr wirklich</div><ul>'
     + m.redemittel.map(function(r){ return '<li>'+E(r)+'</li>'; }).join('')+'</ul></div>'
     +'<div class="td-s"><div class="td-auf"><b>Eure Aufgabe</b>'+E(m.aufgabe)+'</div></div>'
     +'<div class="td-s"><div class="sl">'+I('cards',14)+'Wörter, die ihr braucht</div>'
     +'<div class="td-wo">'+m.woerter.map(function(w){ return '<span>'+E(w)+'</span>'; }).join('')+'</div></div>'
     +'<div class="td-fin">'
     +(fertig
       ? '<span class="ok">'+I('check',16)+'Geschafft</span><button class="td-btn s" data-mdone="'+E(m.id)+'" data-v="0">Doch nicht</button>'
       : '<button class="td-btn p" data-mdone="'+E(m.id)+'" data-v="1">'+I('check',16)+'<span>Haben wir gemacht</span></button>')
     +'</div></div></div>';
  }

  /* ---------- Supabase ---------- */
  var busy=false;
  async function call(fn,arg){
    var sb=getSb(); if(!sb) return {state:'off'};
    try{ var r=await sb.rpc(fn,arg||{}); return (r&&r.data)||{state:'off'}; }catch(e){ return {state:'off'}; }
  }
  function seit(iso){
    if(!iso) return '';
    var d=Math.floor((Date.now()-new Date(iso).getTime())/86400000);
    if(d<=0) return 'seit heute';
    if(d===1) return 'seit gestern';
    return 'seit '+d+' Tagen';
  }

  /* ---------- Termin & Raum ---------- */
  var RAUM=null, TERMINE=[];
  async function ladeRaum(){
    var sb=getSb(); RAUM=null; TERMINE=[];
    if(!sb) return null;
    try{ var r=await sb.rpc('buddy_raum'); RAUM=(r&&r.data&&r.data[0])||null; }catch(e){}
    if(RAUM){
      try{
        var t=await sb.from('buddy_termine').select('*')
          .eq('match_id',RAUM.match_id).neq('status','abgesagt')
          .order('wann',{ascending:true});
        TERMINE=(t&&t.data)||[];
      }catch(e){}
    }
    return RAUM;
  }
  function meineId(){ try{ return (window.user&&window.user.id)||null; }catch(e){ return null; } }
  var WT=['So','Mo','Di','Mi','Do','Fr','Sa'];
  var MO=['Jan','Feb','Mär','Apr','Mai','Jun','Jul','Aug','Sep','Okt','Nov','Dez'];
  function uhr(d){ return d.toLocaleTimeString('de-DE',{hour:'2-digit',minute:'2-digit'}); }
  function inTagen(d){
    var h=new Date(); h.setHours(0,0,0,0);
    var z=new Date(d); z.setHours(0,0,0,0);
    var n=Math.round((z-h)/86400000);
    if(n===0) return 'heute';
    if(n===1) return 'morgen';
    if(n<0) return 'vorbei';
    if(n<7) return 'in '+n+' Tagen';
    return 'am '+z.getDate()+'. '+MO[z.getMonth()];
  }
  function raumHref(name){
    if(!RAUM) return '#';
    return 'tandem-raum.html?raum='+encodeURIComponent(RAUM.raum)+'&mit='+encodeURIComponent(name||'');
  }
  function terminHtml(partnerName){
    if(!RAUM) return '';
    var jetzt=Date.now(), ich=meineId();
    var best=null, offen=null;
    TERMINE.forEach(function(t){
      var w=new Date(t.wann).getTime();
      var ende=w+(t.dauer_min||20)*60000;
      if(t.status==='bestaetigt'&&ende>jetzt-0&&!best) best=t;
      if(t.status==='vorgeschlagen'&&w>jetzt&&!offen) offen=t;
    });
    var kopf='<div class="th">'+I('clock',17)+'<b>Euer Termin</b></div>';
    var body='';

    if(best){
      var d=new Date(best.wann), w=d.getTime(), ende=w+(best.dauer_min||20)*60000;
      var live = jetzt>=w-10*60000 && jetzt<=ende;
      body+='<div class="td-next"><span class="dt"><span class="d">'+d.getDate()+'</span><span class="m">'+MO[d.getMonth()]+'</span></span>'
        +'<span class="nx"><b>'+WT[d.getDay()]+', '+uhr(d)+' Uhr</b>'
        +'<span>'+(live?'Jetzt — dein Partner wartet vielleicht schon.':inTagen(d)+' · '+(best.dauer_min||20)+' Minuten')+'</span></span></div>'
        +'<a class="td-raum '+(live?'live':'bereit')+'" href="'+raumHref(partnerName)+'" target="_blank" rel="noopener">'
        +(live?'<span class="pt"></span>':I('play',16))
        +'<span>'+(live?'Jetzt in euren Raum':'Euer Raum — jederzeit betreten')+'</span></a>'
        +'<div class="td-form" style="margin-top:10px"><button class="td-btn s" style="flex:1" data-tabsage="'+best.id+'">Termin absagen</button></div>';
    } else if(offen){
      var od=new Date(offen.wann);
      if(offen.von===ich){
        body+='<div class="td-vor">'+I('clock',17)+'<span><b>Du hast '+WT[od.getDay()]+', '+od.getDate()+'. '+MO[od.getMonth()]+' um '+uhr(od)+' Uhr vorgeschlagen.</b><br>'
          +E(partnerName||'Dein Partner')+' muss nur noch bestätigen.</span></div>'
          +'<div class="td-form"><button class="td-btn s" style="flex:1" data-tabsage="'+offen.id+'">Vorschlag zurücknehmen</button></div>';
      } else {
        body+='<div class="td-vor">'+I('spark',17)+'<span><b>'+E(partnerName||'Dein Partner')+' schlägt '+WT[od.getDay()]+', '+od.getDate()+'. '+MO[od.getMonth()]+' um '+uhr(od)+' Uhr vor.</b><br>Passt dir das?</span></div>'
          +'<div class="td-form"><button class="td-btn p" style="flex:1" data-tja="'+offen.id+'">'+I('check',15)+'<span>Passt — abgemacht</span></button>'
          +'<button class="td-btn s" data-tabsage="'+offen.id+'">Passt nicht</button></div>';
      }
      body+='<a class="td-raum bereit" style="margin-top:11px" href="'+raumHref(partnerName)+'" target="_blank" rel="noopener">'+I('play',16)+'<span>Raum jetzt schon öffnen</span></a>';
    } else {
      var m=new Date(Date.now()+86400000);
      var iso=m.getFullYear()+'-'+String(m.getMonth()+1).padStart(2,'0')+'-'+String(m.getDate()).padStart(2,'0');
      body+='<p class="td-p" style="margin-bottom:11px">Ihr habt noch keinen Termin. Schlag einen vor — dein Partner muss nur noch tippen.</p>'
        +'<div class="td-form">'
        +'<input type="date" id="tdDat" value="'+iso+'" min="'+iso+'">'
        +'<input type="time" id="tdZeit" value="19:00" step="900">'
        +'<button class="td-btn p" data-tneu="1">'+I('check',15)+'<span>Vorschlagen</span></button>'
        +'</div>'
        +'<a class="td-raum bereit" style="margin-top:12px" href="'+raumHref(partnerName)+'" target="_blank" rel="noopener">'+I('play',16)+'<span>Oder einfach jetzt in den Raum</span></a>';
    }
    var vergangen=TERMINE.filter(function(t){ return t.status==='bestaetigt'&&new Date(t.wann).getTime()<jetzt-3600000; }).length;
    if(vergangen) body+='<div class="td-hist">'+vergangen+' gemeinsame '+(vergangen===1?'Sitzung':'Sitzungen')+' bisher. Weiter so.</div>';
    return '<div class="td-t">'+kopf+'<div class="tb">'+body+'</div></div>';
  }
  function bindTermin(root,neu){
    var sb=getSb(), ich=meineId();
    Array.prototype.forEach.call(root.querySelectorAll('[data-tneu]'),function(b){
      b.addEventListener('click',async function(){
        var d=root.querySelector('#tdDat'), z=root.querySelector('#tdZeit');
        if(!d||!d.value||!z||!z.value) return;
        var wann=new Date(d.value+'T'+z.value+':00');
        if(isNaN(wann.getTime())||wann.getTime()<Date.now()){ alert('Bitte einen Termin in der Zukunft wählen.'); return; }
        b.disabled=true;
        try{
          var r=await sb.from('buddy_termine').insert({ match_id:RAUM.match_id, wann:wann.toISOString(), von:ich });
          if(r.error) throw r.error;
        }catch(e){ alert('Das hat nicht geklappt: '+(e.message||'unbekannt')); b.disabled=false; return; }
        await ladeRaum(); neu();
      });
    });
    Array.prototype.forEach.call(root.querySelectorAll('[data-tja]'),function(b){
      b.addEventListener('click',async function(){
        b.disabled=true;
        try{ await sb.from('buddy_termine').update({status:'bestaetigt'}).eq('id',b.getAttribute('data-tja')); }catch(e){}
        await ladeRaum(); neu();
      });
    });
    Array.prototype.forEach.call(root.querySelectorAll('[data-tabsage]'),function(b){
      b.addEventListener('click',async function(){
        b.disabled=true;
        try{ await sb.from('buddy_termine').update({status:'abgesagt'}).eq('id',b.getAttribute('data-tabsage')); }catch(e){}
        await ladeRaum(); neu();
      });
    });
  }

  function widgetHtml(s){
    var head='<div class="td-h"><span class="ic">'+I('chat',18)+'</span>'
      +'<div><h4>Dein Sprech-Tandem</h4><div class="sub">Ein echter Mensch, kein Bot</div></div></div>';
    if(s.state==='matched'&&s.buddy){
      var b=s.buddy;
      return head
       +'<div class="td-b"><span class="av" style="background:'+avColor(b.name)+'">'+E(initials(b.name))+'</span>'
       +'<div><div class="nm">'+E(b.name)+'</div><div class="mt">'
       +(b.level?'<span class="td-lv">'+E(b.level)+'</span>':'')+'<span>'+E(seit(b.since))+'</span></div></div></div>'
       +'<button type="button" class="td-btn p w" data-act="dm">'+I('chat',16)+'<span>Anschreiben</span></button>'
       +'<div class="td-row"><button type="button" class="td-btn s" data-act="new">Anderer Partner</button>'
       +'<button type="button" class="td-btn s" data-act="leave">Pause</button></div>';
    }
    if(s.state==='waiting'){
      var n=s.pool_waiting||0;
      return head
       +'<div class="td-w"><span class="sp"></span><span class="t"><b>Wir suchen jemanden für dich</b>'
       +(n>0?'Sobald sich jemand auf deinem Niveau meldet, seid ihr verbunden.'
            :'Gerade ist niemand im Pool. Sobald sich jemand meldet, bist du dran.')+'</span></div>'
       +'<button type="button" class="td-btn s w" data-act="leave">Doch nicht — raus aus dem Pool</button>';
    }
    return head
     +'<p class="td-p">Zehn Minuten sprechen am Tag verändern mehr als eine Stunde lesen. Wir verbinden dich mit jemandem auf deinem Niveau — und geben euch jede Woche eine Aufgabe, damit ihr nicht nach „Hallo" verstummt.</p>'
     +'<button type="button" class="td-btn p w" data-act="join">'+I('user',16)+'<span>Partner finden</span></button>';
  }

  function bind(host,rerender){
    Array.prototype.forEach.call(host.querySelectorAll('[data-act]'),function(b){
      b.addEventListener('click',async function(){
        if(busy) return;
        var act=b.getAttribute('data-act');
        if(act==='dm'){
          var s=host.__s;
          if(s&&s.buddy&&typeof window.openDM==='function') window.openDM(s.buddy.id,s.buddy.name);
          else if(typeof window.go==='function') window.go('community');
          else location.hash='community';
          return;
        }
        busy=true; b.disabled=true;
        var p=getProfile()||{};
        var lv=(window.LZ&&LZ.data&&LZ.data.start_niveau)||p.level||null;
        var res;
        if(act==='join') res=await call('buddy_join',{p_level:lv});
        else if(act==='new') res=await call('buddy_new');
        else if(act==='leave') res=await call('buddy_leave');
        busy=false;
        if(res) rerender(res);
      });
    });
  }
  function bindMission(root,repaint){
    Array.prototype.forEach.call(root.querySelectorAll('[data-mdone]'),function(b){
      b.addEventListener('click',function(){
        setDone(b.getAttribute('data-mdone'), b.getAttribute('data-v')==='1');
        repaint();
      });
    });
    Array.prototype.forEach.call(root.querySelectorAll('[data-mpick]'),function(b){
      b.addEventListener('click',function(){ repaint(b.getAttribute('data-mpick')); });
    });
    Array.prototype.forEach.call(root.querySelectorAll('[data-mlv]'),function(b){
      b.addEventListener('click',function(){ repaint(null,b.getAttribute('data-mlv')); });
    });
  }

  /* ---------- Widget ---------- */
  async function renderBuddyWidget(host){
    injectStyle();
    if(typeof host==='string') host=document.getElementById(host);
    if(!host) return;
    host.classList.add('td');
    host.innerHTML='<div class="td-card"><div class="td-h"><span class="ic">'+I('chat',18)+'</span><div><h4>Dein Sprech-Tandem</h4></div></div><p class="td-p">Wird geladen …</p></div>';
    var s=await call('buddy_status');
    var paint=function(x){
      host.innerHTML='<div class="td-card">'+widgetHtml(x)+'</div>';
      host.__s=x; bind(host,paint);
    };
    paint(s); return s;
  }

  /* ---------- Vollansicht ---------- */
  async function renderBuddy(){
    injectStyle();
    var r=document.getElementById('v-buddy'); if(!r) return;
    r.classList.add('td');
    r.innerHTML='<div class="pagehead"><h1>Sprech-Tandem</h1></div><div class="td-card"><p class="td-p">Wird geladen …</p></div>';
    var s=await call('buddy_status');
    if(s&&s.state==='matched') await ladeRaum();
    var lvAkt=niveau(), mAkt=null;

    var paint=function(pickId,pickLv){
      if(pickLv){ lvAkt=pickLv; mAkt=null; }
      if(pickId) mAkt=pickId;
      var liste=missionen(lvAkt);
      var m = mAkt ? (liste.filter(function(x){return x.id===mAkt;})[0]||liste[wocheIdx(liste.length)])
                   : liste[wocheIdx(liste.length)];
      var dm=doneMap();
      var geschafft=liste.filter(function(x){return dm[x.id];}).length;

      r.innerHTML=
        '<div class="pagehead"><h1>Sprech-Tandem</h1>'
        +'<p>Ein Mensch aus dem Club auf deinem Niveau — und jede Woche eine Aufgabe, die euch wirklich ins Sprechen bringt.</p></div>'
        +'<div class="td-grid">'
        +'<div>'
          +'<div class="td-sec">Eure Mission diese Woche</div>'
          + missionHtml(m,lvAkt)
          +'<div class="td-sec" style="margin-top:22px">Alle Missionen '+E(lvAkt)+' · '+geschafft+' von '+liste.length+' geschafft</div>'
          +'<div class="td-tabs">'+NIVEAUS.map(function(n){
              return '<button class="td-tb'+(n===lvAkt?' on':'')+'" data-mlv="'+n+'">'+n+'</button>';
            }).join('')+'</div>'
          +'<div class="td-list">'+liste.map(function(x,i){
              return '<button class="td-li'+(dm[x.id]?' done':'')+(m&&x.id===m.id?' on':'')+'" data-mpick="'+E(x.id)+'">'
                +'<span class="n">'+(dm[x.id]?I('check',15):(i+1))+'</span>'
                +'<span class="tx"><b>'+E(x.t)+'</b><span>'+E(x.ziel)+'</span></span>'
                +'<span class="ar">'+I('arrowR',16)+'</span></button>';
            }).join('')+'</div>'
        +'</div>'
        +'<div>'
          +'<div class="td-sec">Dein Partner</div>'
          +'<div class="td-card" id="tdW">'+widgetHtml(s)+'</div>'
          + ((s&&s.state==='matched'&&RAUM)
              ? '<div class="td-sec" style="margin-top:22px">Termin & Raum</div>'+terminHtml(s.buddy&&s.buddy.name)
              : '')
          +'<div class="td-sec" style="margin-top:22px">So läuft es ab</div>'
          +'<div class="td-card">'
            +'<div class="td-s"><ol style="gap:11px">'
            +'<li><span><b>Partner finden.</b> Du kommst in den Pool deines Niveaus — wir verbinden euch, sobald es passt.</span></li>'
            +'<li><span><b>Termin machen.</b> Schreibt euch hier im Club und einigt euch auf eine feste Zeit in der Woche.</span></li>'
            +'<li><span><b>Mission durchziehen.</b> Öffnet beide diese Seite, arbeitet die Punkte von oben nach unten ab.</span></li>'
            +'<li><span><b>Abhaken.</b> Jede Woche eine neue — nach einem Jahr habt ihr 50 Gespräche geführt.</span></li>'
            +'</ol></div>'
            +'<p class="td-safe">'+I('lock',14)+'<span>Deine Kontaktdaten bleiben privat. Geschrieben wird nur hier im Club, und du kannst jederzeit Pause machen oder einen anderen Partner wählen.</span></p>'
          +'</div>'
        +'</div></div>';

      var w=document.getElementById('tdW');
      if(w){ w.__s=s; bind(w,async function(x){ s=x; if(x&&x.state==='matched') await ladeRaum(); paint(m?m.id:null); }); }
      bindMission(r,paint);
      bindTermin(r,function(){ paint(m?m.id:null); });
    };
    paint();
  }

  window.renderBuddyWidget=renderBuddyWidget;
  window.renderBuddy=renderBuddy;
})();
