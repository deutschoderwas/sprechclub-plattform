/* ============================================================
   deutschoderwas club — Lernziel & Onboarding
   Ein Ziel. Ein Termin. Ein Weg.
   Nutzt window.sb (Supabase-Client) und window.user aus konto.html
   ============================================================ */
(function(){
'use strict';
var I=function(n,s,c){ return window.ICON?window.ICON(n,s,c):''; };

/* ---------- Daten ---------- */
var ZIELE=[
 {id:'pflege',  t:'Deutsch für die Pflege',      s:'Schichtübergabe, Dokumentation, Angehörige', b:'pflege-l1',  pfad:'pflege',     niv:'B1'},
 {id:'medizin', t:'Deutsch für Mediziner',       s:'Anamnese, Aufklärung, Kollegengespräch',     b:'medizin-l1', pfad:'medizin',    niv:'B2'},
 {id:'buero',   t:'Büro & Logistik',             s:'Telefon, E-Mails, Meetings, Lieferketten',   b:'buero-l1',   pfad:'buero',      niv:'B1'},
 {id:'pruefung',t:'Eine Prüfung bestehen',       s:'Goethe, telc oder DTZ — mit Prüfungstraining',b:'kat-pruefung',pfad:'goethetelc',niv:'B1'},
 {id:'alltag',  t:'Alltag & Leben in Deutschland',s:'Ämter, Wohnung, Arzt, Nachbarn, Smalltalk', b:'kat-alltag', pfad:'',           niv:'B1'},
 {id:'studium', t:'Studium & Uni',               s:'Vorlesung, Referat, wissenschaftliche Texte', b:'kat-skills', pfad:'',          niv:'C1'}
];
var PRUEFUNGEN=[
 {id:'goethe_a1',t:'Goethe A1',n:'A1'},{id:'goethe_a2',t:'Goethe A2',n:'A2'},
 {id:'goethe_b1',t:'Goethe B1',n:'B1'},{id:'goethe_b2',t:'Goethe B2',n:'B2'},
 {id:'goethe_c1',t:'Goethe C1',n:'C1'},{id:'goethe_c2',t:'Goethe C2',n:'C2'},
 {id:'telc_a2',t:'telc A2',n:'A2'},{id:'telc_b1',t:'telc B1',n:'B1'},
 {id:'telc_b2',t:'telc B2',n:'B2'},{id:'telc_c1',t:'telc C1 Hochschule',n:'C1'},
 {id:'telc_b1b2_pflege',t:'telc B1·B2 Pflege',n:'B2'},{id:'telc_b2c1_medizin',t:'telc B2·C1 Medizin',n:'C1'},
 {id:'telc_b1_beruf',t:'telc B1+ Beruf',n:'B1'},{id:'dtz',t:'DTZ (Deutsch-Test für Zuwanderer)',n:'B1'}
];
var NIVEAUS=['A1','A2','B1','B2','C1','C2'];
var TEMPO=[
 {id:15,t:'15 Minuten am Tag',s:'Ruhig und stetig — rund 1,5 Stunden pro Woche'},
 {id:30,t:'30 Minuten am Tag',s:'Der Weg der meisten — rund 3,5 Stunden pro Woche'},
 {id:60,t:'1 Stunde am Tag',  s:'Du hast es eilig — rund 7 Stunden pro Woche'}
];
var LEVELPFAD={A1:'a1',A2:'a2',B1:'b1',B2:'b2',C1:'c1',C2:'c2'};
/* Muttersprachen — dieselben Codes wie die Oberflächen-Übersetzung */
var SPRACHEN=[
 {id:'en', t:'English',    s:'Englisch'},
 {id:'tr', t:'Türkçe',     s:'Türkisch'},
 {id:'ru', t:'Русский',    s:'Russisch'},
 {id:'uk', t:'Українська', s:'Ukrainisch'},
 {id:'es', t:'Español',    s:'Spanisch'},
 {id:'it', t:'Italiano',   s:'Italienisch'},
 {id:'fa', t:'فارسی',      s:'Persisch'},
 {id:'de', t:'Deutsch',    s:'ich brauche keine Übersetzung'}
];

var LZ = window.LZ = { data:null, offen:false, SPRACHEN:SPRACHEN };
var st={};   /* Zwischenstand im Assistenten */
var schritt=0;

/* ---------- Styles ---------- */
function styles(){
  if(document.getElementById('lz-style')) return;
  var s=document.createElement('style'); s.id='lz-style';
  s.textContent=[
'#lzov{position:fixed;inset:0;z-index:9000;background:#FBF9F5;overflow-y:auto;-webkit-overflow-scrolling:touch;font-family:Inter,system-ui,-apple-system,sans-serif;color:#171717}',
'#lzov *{box-sizing:border-box}',
'.lz-bar{position:sticky;top:0;background:rgba(251,249,245,.94);backdrop-filter:saturate(1.4) blur(14px);border-bottom:1px solid #F4F1EA;z-index:2}',
'.lz-bar-in{max-width:660px;margin:0 auto;padding:13px 20px;display:flex;align-items:center;gap:14px}',
'.lz-back{width:36px;height:36px;border-radius:11px;border:1px solid #EBE7DF;background:#fff;color:#6E6A63;display:flex;align-items:center;justify-content:center;cursor:pointer;flex:none;transition:.2s}',
'.lz-back:hover{color:#171717;border-color:#9A958C}',
'.lz-back[hidden]{display:none}',
'.lz-prog{flex:1;height:5px;border-radius:99px;background:#EBE7DF;overflow:hidden}',
'.lz-prog i{display:block;height:100%;background:#1B9BC0;border-radius:99px;transition:width .45s cubic-bezier(.16,1,.3,1)}',
'.lz-step{font-size:12.5px;font-weight:600;color:#9A958C;flex:none;font-variant-numeric:tabular-nums}',
'.lz-spaet{border:none;background:none;font-family:inherit;font-size:13.5px;font-weight:600;color:#9A958C;cursor:pointer;flex:none;padding:6px 2px;transition:.2s}',
'.lz-spaet:hover{color:#171717}',
'.lz-wrap{max-width:660px;margin:0 auto;padding:30px 20px 60px}',
'@keyframes lzup{from{opacity:0;transform:translateY(14px)}to{opacity:1;transform:none}}',
'.lz-pane{animation:lzup .45s cubic-bezier(.16,1,.3,1) both}',
'.lz-k{font-size:11.5px;font-weight:700;letter-spacing:.09em;text-transform:uppercase;color:#14708B;margin-bottom:9px}',
'.lz-h{font-family:"Space Grotesk",Inter,sans-serif;font-size:clamp(25px,5.6vw,32px);font-weight:700;letter-spacing:-.03em;line-height:1.14;margin:0 0 10px}',
'.lz-p{color:#6E6A63;font-size:15px;line-height:1.65;margin:0 0 24px;max-width:520px}',
'.lz-opts{display:grid;gap:11px;margin-bottom:26px}',
'.lz-o{display:flex;align-items:center;gap:15px;width:100%;text-align:left;border:1.5px solid #EBE7DF;background:#fff;border-radius:18px;padding:13px 15px;cursor:pointer;font-family:inherit;transition:.18s;box-shadow:0 1px 2px rgba(23,23,23,.03)}',
'.lz-o:hover{border-color:#9A958C;transform:translateY(-1px)}',
'.lz-o.on{border-color:#1B9BC0;background:#E6F8FC;box-shadow:0 0 0 3px rgba(27,155,192,.12)}',
'.lz-o .im{width:60px;height:60px;border-radius:14px;overflow:hidden;flex:none;background:#F4F1EA}',
'.lz-o .im img{display:block;width:100%;height:100%;object-fit:cover}',
'.lz-o .tx{flex:1;min-width:0}',
'.lz-o .tx b{display:block;font-family:"Space Grotesk",Inter,sans-serif;font-size:16px;font-weight:600;letter-spacing:-.015em;margin-bottom:3px}',
'.lz-o .tx span{display:block;font-size:13.5px;color:#6E6A63;line-height:1.5}',
'.lz-o .ck{width:24px;height:24px;border-radius:50%;border:1.5px solid #EBE7DF;flex:none;display:flex;align-items:center;justify-content:center;color:#fff}',
'.lz-o.on .ck{background:#1B9BC0;border-color:#1B9BC0}',
'.lz-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(96px,1fr));gap:10px;margin-bottom:24px}',
'.lz-n{border:1.5px solid #EBE7DF;background:#fff;border-radius:15px;padding:15px 8px;cursor:pointer;font-family:"Space Grotesk",Inter,sans-serif;font-size:19px;font-weight:700;letter-spacing:-.02em;color:#171717;transition:.18s}',
'.lz-n:hover{border-color:#9A958C}',
'.lz-n.on{border-color:#1B9BC0;background:#E6F8FC;color:#14708B}',
'.lz-n small{display:block;font-family:Inter,sans-serif;font-size:11.5px;font-weight:500;color:#9A958C;margin-top:3px;letter-spacing:0}',
'.lz-n.on small{color:#14708B}',
'.lz-chips{display:flex;flex-wrap:wrap;gap:9px;margin-bottom:18px}',
'.lz-c{border:1.5px solid #EBE7DF;background:#fff;border-radius:99px;padding:10px 17px;cursor:pointer;font-family:inherit;font-size:14.5px;font-weight:600;color:#6E6A63;transition:.18s}',
'.lz-c:hover{border-color:#9A958C}',
'.lz-c.on{border-color:#1B9BC0;background:#E6F8FC;color:#14708B}',
'.lz-lab{display:block;font-size:13px;font-weight:600;color:#6E6A63;margin-bottom:8px}',
'.lz-date{width:100%;max-width:280px;border:1.5px solid #EBE7DF;border-radius:16px;padding:13px 15px;font-size:16px;font-family:inherit;color:#171717;background:#fff;outline:none;margin-bottom:22px}',
'.lz-date:focus{border-color:#1B9BC0}',
'.lz-btn{border:none;cursor:pointer;font-family:inherit;font-weight:600;font-size:15.5px;border-radius:99px;padding:15px 30px;display:inline-flex;align-items:center;gap:9px;text-decoration:none;transition:.2s}',
'.lz-btn.p{background:#1B9BC0;color:#fff;box-shadow:0 10px 26px -14px rgba(27,155,192,.95)}',
'.lz-btn.p:hover{background:#14708B}',
'.lz-btn.p:disabled{background:#EBE7DF;color:#9A958C;cursor:not-allowed;box-shadow:none}',
'.lz-btn.g{background:transparent;color:#6E6A63;padding:15px 10px}',
'.lz-btn.g:hover{color:#171717}',
'.lz-row{display:flex;gap:8px;align-items:center;flex-wrap:wrap}',
'.lz-link{display:inline-flex;align-items:center;gap:8px;background:#fff;border:1px dashed #C7E9F3;color:#14708B;border-radius:14px;padding:13px 16px;text-decoration:none;font-size:14.5px;font-weight:600;margin-bottom:24px;transition:.2s}',
'.lz-link:hover{border-style:solid;background:#E6F8FC}',
/* Abschluss */
'.lz-fin{background:linear-gradient(135deg,#14708B,#1B9BC0);border-radius:24px;padding:26px 24px;color:#fff;margin-bottom:18px;box-shadow:0 18px 44px -22px rgba(27,155,192,1)}',
'.lz-fin .fk{font-size:11.5px;font-weight:700;letter-spacing:.09em;text-transform:uppercase;opacity:.82;margin-bottom:8px}',
'.lz-fin h3{font-family:"Space Grotesk",Inter,sans-serif;font-size:25px;font-weight:700;letter-spacing:-.025em;margin:0 0 14px;line-height:1.2}',
'.lz-fin ul{list-style:none;margin:0;padding:0;display:grid;gap:9px}',
'.lz-fin li{display:flex;gap:10px;align-items:flex-start;font-size:14.5px;line-height:1.5;opacity:.96}',
'.lz-fin li b{font-weight:700}',
/* Dashboard-Karte */
'.lz-card{display:block;background:#fff;border:1px solid #EBE7DF;border-radius:20px;padding:18px 19px;text-decoration:none;color:#171717;margin-bottom:16px;box-shadow:0 1px 2px rgba(23,23,23,.04),0 12px 30px -24px rgba(23,23,23,.5);transition:.2s}',
'.lz-card:hover{border-color:#C7E9F3;transform:translateY(-1px)}',
'.lz-card .ch{display:flex;align-items:center;gap:9px;margin-bottom:9px}',
'.lz-card .ch .kk{font-size:11px;font-weight:700;letter-spacing:.08em;text-transform:uppercase;color:#14708B}',
'.lz-card .ch .rest{margin-left:auto;font-size:12.5px;font-weight:600;color:#9A958C;font-variant-numeric:tabular-nums}',
'.lz-card h4{font-family:"Space Grotesk",Inter,sans-serif;font-size:19px;font-weight:700;letter-spacing:-.025em;margin:0 0 4px;line-height:1.25}',
'.lz-card .sub{font-size:13.5px;color:#6E6A63;line-height:1.5;margin:0 0 13px}',
'.lz-card .tr{height:7px;border-radius:99px;background:#F4F1EA;overflow:hidden;margin-bottom:9px}',
'.lz-card .tr i{display:block;height:100%;background:#1B9BC0;border-radius:99px;transition:width .6s cubic-bezier(.16,1,.3,1)}',
'.lz-card .go{display:flex;align-items:center;gap:7px;font-size:14px;font-weight:600;color:#14708B}',
'.lz-card .go .ar{margin-left:auto;display:flex}',
'@media(max-width:560px){.lz-wrap{padding:24px 16px 50px}.lz-o .im{width:52px;height:52px}}',
'@media(prefers-reduced-motion:reduce){#lzov *{animation:none!important;transition:none!important}}'
  ].join('\n');
  document.head.appendChild(s);
}

/* ---------- Laden ---------- */
LZ.laden=async function(){
  var sb=window.sb, u=window.user;
  if(!sb||!u) return null;
  try{
    var r=await sb.from('lernziel').select('*').eq('user_id',u.id).maybeSingle();
    LZ.data=(r&&r.data)||null;
  }catch(e){ LZ.data=null; }
  return LZ.data;
};

/* Nach dem Login: nur beim allerersten Mal von selbst aufpoppen */
LZ.pruefe=async function(){
  await LZ.laden();
  LZ.spracheSetzen();
  if(!LZ.data){
    var g=null; try{ g=localStorage.getItem('dow_lz_skip'); }catch(e){}
    if(!g) LZ.starten();
  } else {
    LZ.zeichneKarte();
  }
};

/* Muttersprache global verfügbar machen — Lektionen zeigen darunter die Übersetzung */
LZ.spracheSetzen=function(){
  var l=(LZ.data&&LZ.data.muttersprache)||null;
  if(!l){ try{ l=localStorage.getItem('dow_l1'); }catch(e){} }
  window.DOW_L1 = (l&&l!=='de') ? l : null;
  try{ if(l) localStorage.setItem('dow_l1',l); }catch(e){}
  return window.DOW_L1;
};

/* ---------- Assistent ---------- */
LZ.starten=function(neu){
  styles();
  st = LZ.data ? {
    ziel:LZ.data.ziel, pruefung:LZ.data.pruefung, start:LZ.data.start_niveau,
    ziel_niveau:LZ.data.ziel_niveau, termin:LZ.data.termin, minuten:LZ.data.minuten_woche,
    sprache:LZ.data.muttersprache
  } : { minuten:30 };
  schritt=0; LZ.offen=true;
  var ov=document.getElementById('lzov');
  if(!ov){
    ov=document.createElement('div'); ov.id='lzov';
    ov.innerHTML='<div class="lz-bar"><div class="lz-bar-in">'
      +'<button class="lz-back" id="lzBack" onclick="LZ.zurueck()" aria-label="Zurück"></button>'
      +'<span class="lz-prog"><i id="lzProg"></i></span>'
      +'<span class="lz-step" id="lzStep"></span>'
      +'<button class="lz-spaet" onclick="LZ.spaeter()">Später</button></div></div>'
      +'<div class="lz-wrap" id="lzWrap"></div>';
    document.body.appendChild(ov);
  }
  document.body.style.overflow='hidden';
  ov.style.display='block';
  document.getElementById('lzBack').innerHTML=I('arrowL',18);
  mal();
};
/* Nicht einsperren: jederzeit raus, kommt beim nächsten Mal nicht ungefragt wieder */
LZ.spaeter=function(){
  try{ localStorage.setItem('dow_lz_skip','1'); }catch(e){}
  LZ.schliessen();
};
LZ.schliessen=function(){
  var ov=document.getElementById('lzov');
  if(ov) ov.style.display='none';
  document.body.style.overflow='';
  LZ.offen=false;
};

function panes(){
  var p=[pSprache, pZiel];
  if(st.ziel==='pruefung') p.push(pPruefung);
  p.push(pNiveau, pTermin, pTempo, pFertig);
  return p;
}
function mal(){
  var P=panes();
  if(schritt>=P.length) schritt=P.length-1;
  document.getElementById('lzWrap').innerHTML='<div class="lz-pane">'+P[schritt]()+'</div>';
  document.getElementById('lzProg').style.width=Math.round((schritt/(P.length-1))*100)+'%';
  document.getElementById('lzStep').textContent=(schritt+1)+' / '+P.length;
  document.getElementById('lzBack').hidden = schritt===0;
  document.getElementById('lzov').scrollTop=0;
}
LZ.zurueck=function(){ if(schritt>0){ schritt--; mal(); } };
LZ.weiter =function(){ schritt++; mal(); };

function bild(id){ return 'illu/'+id+'-s.jpg'; }
function esc(x){ return String(x==null?'':x).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;'); }

/* Schritt 0 — Muttersprache */
function pSprache(){
  return '<div class="lz-k">Deine Sprache</div>'
   +'<h1 class="lz-h">Welche Sprache sprichst du am besten?</h1>'
   +'<p class="lz-p">In den Lektionen steht dann unter jedem neuen Wort und unter jedem Dialogsatz eine kleine Übersetzung. Du musst nie raten, was etwas heißt — und nie das Handy zum Nachschlagen aus der Hand legen.</p>'
   +'<div class="lz-chips">'+SPRACHEN.map(function(l){
      return '<button class="lz-c'+(st.sprache===l.id?' on':'')+'" onclick="LZ.setSprache(\''+l.id+'\')">'
        +'<span style="font-weight:700">'+l.t+'</span>'
        +'<span style="opacity:.7;font-weight:400"> · '+l.s+'</span></button>';
     }).join('')+'</div>'
   +'<div class="lz-row"><button class="lz-btn p" onclick="LZ.weiter()"'+(st.sprache?'':' disabled')+'>'
   +'<span>Weiter</span>'+I('arrowR',17)+'</button>'
   +'<button class="lz-btn g" onclick="LZ.ohneSprache()">Meine Sprache ist nicht dabei</button></div>';
}
LZ.setSprache=function(id){ st.sprache=id; setTimeout(LZ.weiter,180); mal(); };
LZ.ohneSprache=function(){ st.sprache='de'; LZ.weiter(); };

/* Schritt 1 — Ziel */
function pZiel(){
  return '<div class="lz-k">Dein Ziel</div>'
   +'<h1 class="lz-h">Warum lernst du Deutsch?</h1>'
   +'<p class="lz-p">Sag mir das eine, was dir am wichtigsten ist. Ich baue dir daraus einen Weg — statt dich mit zwanzig Kacheln allein zu lassen. Ändern kannst du das jederzeit.</p>'
   +'<div class="lz-opts">'+ZIELE.map(function(z){
      return '<button class="lz-o'+(st.ziel===z.id?' on':'')+'" onclick="LZ.setZiel(\''+z.id+'\')">'
       +'<span class="im"><img src="'+bild(z.b)+'" alt="" onerror="this.parentNode.style.background=\'#E6F8FC\'"></span>'
       +'<span class="tx"><b>'+z.t+'</b><span>'+z.s+'</span></span>'
       +'<span class="ck">'+I('check',14)+'</span></button>';
     }).join('')+'</div>';
}
LZ.setZiel=function(id){
  st.ziel=id;
  var z=ZIELE.filter(function(x){return x.id===id;})[0];
  if(z&&!st.ziel_niveau) st.ziel_niveau=z.niv;
  setTimeout(LZ.weiter,180);
  mal();
};

/* Schritt 1b — Prüfung */
function pPruefung(){
  return '<div class="lz-k">Deine Prüfung</div>'
   +'<h1 class="lz-h">Welche Prüfung machst du?</h1>'
   +'<p class="lz-p">Danach richtet sich alles: welche Fertigkeiten du trainierst, welche Aufgabentypen du siehst, wie die Simulation aussieht.</p>'
   +'<div class="lz-chips">'+PRUEFUNGEN.map(function(p){
      return '<button class="lz-c'+(st.pruefung===p.id?' on':'')+'" onclick="LZ.setPruef(\''+p.id+'\')">'+p.t+'</button>';
     }).join('')+'</div>'
   +'<div class="lz-row"><button class="lz-btn p" onclick="LZ.weiter()"'+(st.pruefung?'':' disabled')+'>'
   +'<span>Weiter</span>'+I('arrowR',17)+'</button></div>';
}
LZ.setPruef=function(id){
  st.pruefung=id;
  var p=PRUEFUNGEN.filter(function(x){return x.id===id;})[0];
  if(p) st.ziel_niveau=p.n;
  mal();
};

/* Schritt 2 — aktuelles Niveau */
function pNiveau(){
  var NAM={A1:'Anfang',A2:'Grundlagen',B1:'Selbstständig',B2:'Sicher',C1:'Fließend',C2:'Fast wie Muttersprache'};
  return '<div class="lz-k">Dein Stand</div>'
   +'<h1 class="lz-h">Wo stehst du gerade?</h1>'
   +'<p class="lz-p">Schätz ruhig. Ich passe den Weg an, sobald ich sehe, wie du wirklich arbeitest.</p>'
   +'<div class="lz-grid">'+NIVEAUS.map(function(n){
      return '<button class="lz-n'+(st.start===n?' on':'')+'" onclick="LZ.setStart(\''+n+'\')">'+n+'<small>'+NAM[n]+'</small></button>';
     }).join('')+'</div>'
   +'<a class="lz-link" href="niveau-test-club.html">'+I('target',17)+'<span>Ich bin unsicher — Niveautest machen (10 Minuten)</span></a>'
   +'<div class="lz-row"><button class="lz-btn p" onclick="LZ.weiter()"'+(st.start?'':' disabled')+'>'
   +'<span>Weiter</span>'+I('arrowR',17)+'</button></div>';
}
LZ.setStart=function(n){
  st.start=n;
  var zi=NIVEAUS.indexOf(st.ziel_niveau||''), si=NIVEAUS.indexOf(n);
  if(zi<=si) st.ziel_niveau=NIVEAUS[Math.min(si+1,5)];
  mal();
};

/* Schritt 3 — Termin */
function pTermin(){
  var pr = st.ziel==='pruefung';
  var heute=new Date(); var iso=function(d){ return d.toISOString().slice(0,10); };
  var vor=[['3 Monate',3],['6 Monate',6],['1 Jahr',12]].map(function(v){
    var d=new Date(heute.getTime()); d.setMonth(d.getMonth()+v[1]);
    return '<button class="lz-c'+(st.termin===iso(d)?' on':'')+'" onclick="LZ.setTermin(\''+iso(d)+'\')">In '+v[0]+'</button>';
  }).join('');
  return '<div class="lz-k">Dein Termin</div>'
   +'<h1 class="lz-h">'+(pr?'Wann ist deine Prüfung?':'Bis wann willst du da sein?')+'</h1>'
   +'<p class="lz-p">'+(pr
      ? 'Mit dem Datum rechne ich dir aus, wie viel du pro Woche schaffen musst — und erinnere dich, bevor es eng wird.'
      : 'Ein Datum macht aus einem Wunsch einen Plan. Du kannst es jederzeit verschieben, dafür schäme sich niemand.')+'</p>'
   +(pr?'':'<div class="lz-chips">'+vor+'</div>')
   +'<label class="lz-lab" for="lzDate">'+(pr?'Prüfungstermin':'Zieldatum')+'</label>'
   +'<input class="lz-date" id="lzDate" type="date" min="'+iso(heute)+'" value="'+(st.termin||'')+'" onchange="LZ.setTermin(this.value)">'
   +'<div class="lz-row"><button class="lz-btn p" onclick="LZ.weiter()"'+((pr&&!st.termin)?' disabled':'')+'>'
   +'<span>Weiter</span>'+I('arrowR',17)+'</button>'
   +(pr?'':'<button class="lz-btn g" onclick="LZ.ohneTermin()">Ohne festen Termin</button>')+'</div>';
}
LZ.setTermin=function(d){ st.termin=d||null; mal(); };
LZ.ohneTermin=function(){ st.termin=null; LZ.weiter(); };

/* Schritt 4 — Tempo */
function pTempo(){
  return '<div class="lz-k">Dein Tempo</div>'
   +'<h1 class="lz-h">Wie viel Zeit hast du wirklich?</h1>'
   +'<p class="lz-p">Sei ehrlich zu dir. Fünfzehn Minuten, die du jeden Tag machst, bringen mehr als zwei Stunden, die du dir vornimmst und nie schaffst.</p>'
   +'<div class="lz-opts">'+TEMPO.map(function(t){
      return '<button class="lz-o'+(st.minuten===t.id?' on':'')+'" onclick="LZ.setTempo('+t.id+')" style="padding:16px">'
       +'<span class="tx"><b>'+t.t+'</b><span>'+t.s+'</span></span>'
       +'<span class="ck">'+I('check',14)+'</span></button>';
     }).join('')+'</div>'
   +'<div class="lz-row"><button class="lz-btn p" onclick="LZ.weiter()">'
   +'<span>Meinen Weg zeigen</span>'+I('arrowR',17)+'</button></div>';
}
LZ.setTempo=function(m){ st.minuten=m; mal(); };

/* Schritt 5 — Abschluss */
function pfadVon(){
  var z=ZIELE.filter(function(x){return x.id===st.ziel;})[0];
  if(z&&z.pfad) return z.pfad;
  return LEVELPFAD[st.start||'A1']||'a1';
}
function zielName(){
  if(st.ziel==='pruefung'){
    var p=PRUEFUNGEN.filter(function(x){return x.id===st.pruefung;})[0];
    return p?p.t:'deine Prüfung';
  }
  var z=ZIELE.filter(function(x){return x.id===st.ziel;})[0];
  return z?z.t:'dein Ziel';
}
function tage(){
  if(!st.termin) return null;
  var d=Math.ceil((new Date(st.termin)-new Date())/86400000);
  return d>0?d:0;
}
function pFertig(){
  var t=tage();
  var proWoche=String(Math.round(st.minuten*7/60*10)/10).replace('.',',');
  return '<div class="lz-k">Dein Weg steht</div>'
   +'<h1 class="lz-h">Ab hier musst du nicht mehr überlegen.</h1>'
   +'<p class="lz-p">Du öffnest den Club, und ich zeige dir genau eine Sache. Die machst du. Fertig.</p>'
   +'<div class="lz-fin"><div class="fk">Dein Ziel</div><h3>'+esc(zielName())+'</h3><ul>'
   +'<li>'+I('target',17)+'<span>Von <b>'+esc(st.start||'A1')+'</b> auf <b>'+esc(st.ziel_niveau||'B1')+'</b></span></li>'
   +(t!==null?'<li>'+I('clock',17)+'<span><b>'+t+' Tage</b> bis zum '+new Date(st.termin).toLocaleDateString('de-DE',{day:'numeric',month:'long',year:'numeric'})+'</span></li>'
             :'<li>'+I('clock',17)+'<span>In deinem Tempo — ohne Termin</span></li>')
   +'<li>'+I('spark',17)+'<span><b>'+st.minuten+' Minuten</b> am Tag · rund '+proWoche+' Stunden pro Woche</span></li>'
   +(st.sprache&&st.sprache!=='de'
      ? '<li>'+I('book',17)+'<span>Übersetzungen auf <b>'+esc((SPRACHEN.filter(function(x){return x.id===st.sprache;})[0]||{}).t||'')+'</b> unter jedem neuen Wort</span></li>'
      : '')
   +'<li>'+I('chat',17)+'<span>Julia liest deine Texte persönlich — und die Community ist immer da</span></li>'
   +'</ul></div>'
   +'<div class="lz-row"><button class="lz-btn p" id="lzSave" onclick="LZ.speichern()">'
   +I('check',17)+'<span>Los geht\'s</span></button>'
   +'<button class="lz-btn g" onclick="LZ.zurueck()">Nochmal ändern</button></div>';
}

/* ---------- Speichern ---------- */
LZ.speichern=async function(){
  var b=document.getElementById('lzSave');
  if(b){ b.disabled=true; b.innerHTML='<span>Wird gespeichert …</span>'; }
  var row={ user_id:window.user.id, ziel:st.ziel, pruefung:st.pruefung||null,
            start_niveau:st.start||null, ziel_niveau:st.ziel_niveau||null,
            termin:st.termin||null, minuten_woche:st.minuten||30, pfad:pfadVon(),
            muttersprache:st.sprache||null };
  try{
    var r=await window.sb.from('lernziel').upsert(row,{onConflict:'user_id'});
    if(r.error) throw r.error;
    LZ.data=row;
    LZ.spracheSetzen();
    try{ localStorage.setItem('dow_lz_skip','1'); }catch(e){}
    LZ.schliessen();
    LZ.zeichneKarte();
    if(typeof window.go==='function') window.go('dashboard');
  }catch(e){
    if(b){ b.disabled=false; b.innerHTML=I('check',17)+'<span>Nochmal versuchen</span>'; }
    alert('Das Speichern hat nicht geklappt: '+(e.message||'unbekannter Fehler'));
  }
};

/* ---------- Dashboard-Karte ---------- */
LZ.kartenHTML=function(){
  var d=LZ.data; if(!d) return '';
  styles();
  var pfad=d.pfad||'a1';
  var lek=[], done={};
  try{ done=JSON.parse(localStorage.getItem('dow_lek')||'{}'); }catch(e){}
  try{ lek=(window.KB_LESSONS&&window.KB_LESSONS[pfad])||[]; }catch(e){}
  var fertig=lek.filter(function(l){ var k=done[pfad+'-'+l.n]; return k&&k.done; }).length;
  var pct=lek.length?Math.round(fertig/lek.length*100):0;
  var naechste=lek.filter(function(l){ var k=done[pfad+'-'+l.n]; return !(k&&k.done); })[0]||lek[0];
  var t=null;
  if(d.termin){ t=Math.ceil((new Date(d.termin)-new Date())/86400000); if(t<0) t=0; }
  var nam = d.ziel==='pruefung'
    ? ((PRUEFUNGEN.filter(function(x){return x.id===d.pruefung;})[0]||{}).t||'Prüfung')
    : ((ZIELE.filter(function(x){return x.id===d.ziel;})[0]||{}).t||'Dein Weg');
  var href, sub, go;
  if(!lek.length){
    href='#kurse';
    sub='Dein Kursbereich ist eingerichtet — schau dir an, was dort auf dich wartet.';
    go='Kurs öffnen';
  } else if(naechste){
    href='lektion.html?k='+encodeURIComponent(pfad)+'&l='+naechste.n;
    sub='Als Nächstes: Lektion '+naechste.n+' — '+esc(naechste.t);
    go=fertig?('Weiter — '+fertig+' von '+lek.length+' geschafft'):'Jetzt anfangen';
  } else {
    href='#kurse';
    sub='Alle '+lek.length+' Lektionen geschafft. Stark. Such dir den nächsten Bereich aus.';
    go='Weitermachen';
  }
  return '<a class="lz-card" href="'+href+'">'
   +'<span class="ch">'+I('target',16,'')+'<span class="kk">Dein Weg</span>'
   +(t!==null?'<span class="rest">noch '+t+' '+(t===1?'Tag':'Tage')+'</span>':'')+'</span>'
   +'<h4>'+esc(nam)+'</h4>'
   +'<p class="sub">'+sub+'</p>'
   +'<span class="tr"><i style="width:'+pct+'%"></i></span>'
   +'<span class="go">'+I('play',16)+'<span>'+go+'</span>'
   +'<span class="ar">'+I('arrowR',17)+'</span></span></a>';
};
LZ.zeichneKarte=function(){
  var h=LZ.kartenHTML();
  ['lzSlot','lzSlotM'].forEach(function(id){
    var el=document.getElementById(id);
    if(el) el.innerHTML=h;
  });
};
})();
