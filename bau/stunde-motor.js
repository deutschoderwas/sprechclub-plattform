
/* ---- Sprungleiste: markiert, wo man gerade ist ----
   Frueher hat sie Abschnitte umgeschaltet. Jetzt steht alles
   untereinander, die Leiste zeigt nur noch die Stelle an. */
(function(){
 var tabs=[].slice.call(document.querySelectorAll('nav.tabs a.tab'));
 var paare=tabs.map(function(a){return {a:a,sec:document.querySelector(a.getAttribute('href'))};})
               .filter(function(x){return x.sec;});
 if(!('IntersectionObserver' in window))return;
 var beob=new IntersectionObserver(function(eintraege){
  eintraege.forEach(function(e){
   if(!e.isIntersecting)return;
   tabs.forEach(function(t){t.classList.remove('active');});
   var p=paare.find(function(x){return x.sec===e.target;});
   if(p){p.a.classList.add('active');
     /* die aktive Marke in der schmalen Leiste in den Blick holen */
     if(p.a.scrollIntoView)p.a.scrollIntoView({block:'nearest',inline:'center'});}
  });
 },{rootMargin:'-40% 0px -55% 0px'});
 paare.forEach(function(x){beob.observe(x.sec);});
})();

/* ---- Hoehe des klebenden Umschalters messen, damit die
   Sprungleiste sauber darunter sitzt ---- */
(function(){
 var leiste=document.querySelector('.niv');
 if(!leiste)return;
 function miss(){document.documentElement.style.setProperty('--leiste',Math.round(leiste.offsetHeight)+'px');}
 miss();
 window.addEventListener('resize',miss);
 if(window.ResizeObserver)new ResizeObserver(miss).observe(leiste);
 if(document.fonts&&document.fonts.ready)document.fonts.ready.then(miss);
})();

/* ---- Vorlesen ---- */
function say(t){try{var u=new SpeechSynthesisUtterance(t);u.lang='de-DE';u.rate=.85;speechSynthesis.cancel();speechSynthesis.speak(u);}catch(e){}}
document.querySelectorAll('.speak').forEach(function(b){if(b.dataset.say)b.onclick=function(){say(b.dataset.say);};});

/* ---- Niveau-Umschalter ---- */
var nivk=document.querySelectorAll('.nivk button[data-niv]');
nivk.forEach(function(b){b.onclick=function(){
 var n=b.dataset.niv;document.body.setAttribute('data-niveau',n);
 nivk.forEach(function(x){x.setAttribute('aria-pressed',x.dataset.niv===n?'true':'false');});
 hazaehlen();
};});

/* ---- Hilfe-Knoepfe ---- */
document.querySelectorAll('.hilfe > button').forEach(function(b){
 var kasten=b.parentElement,text=b.textContent;
 b.setAttribute('aria-expanded','false');
 b.onclick=function(){var auf=kasten.classList.toggle('offen');
  b.setAttribute('aria-expanded',auf?'true':'false');
  b.textContent=auf?'✕ Hilfe schließen':text;};
});

/* ---- Bildkarten verdecken ---- */
var bg=document.getElementById('bgrid'),vb=document.getElementById('verdecken');
vb.onclick=function(){bg.classList.toggle('hide');bg.querySelectorAll('.bcard').forEach(function(c){c.classList.remove('auf');});
 vb.textContent=bg.classList.contains('hide')?'👁️ Wörter zeigen':'🙈 Wörter verdecken';};
bg.querySelectorAll('.bcard').forEach(function(c){c.addEventListener('click',function(){if(bg.classList.contains('hide'))c.classList.toggle('auf');});});

/* ---- Dialoge: Runde 1 / Runde 2 ---- */
document.querySelectorAll('.dwrap').forEach(function(d){
 var b=d.querySelector('.rbtn');
 b.onclick=function(){
  var zwei=d.dataset.runde==='1';
  d.dataset.runde=zwei?'2':'1';
  b.textContent=zwei?'◀︎ Runde 1 · Text zeigen':'▶︎ Runde 2 · du antwortest';
  b.classList.toggle('zwei',zwei);
  d.querySelectorAll('.dline.b').forEach(function(l){l.classList.remove('zeigen');});
 };
 d.querySelectorAll('.dcue').forEach(function(c){
  c.onclick=function(){c.closest('.dline').classList.add('zeigen');};});
});

/* ---- Hausaufgabe abhaken ---- */
var hastand=document.querySelector('[data-ha-stand]');
function hazaehlen(){
 if(!hastand)return;
 /* Nach dem Niveau zaehlen, nicht nach offsetParent: beim Laden ist der
    Hausaufgaben-Abschnitt noch zugeklappt und haette 0 von 0 ergeben. */
 var niv=document.body.getAttribute('data-niveau');
 var weg=niv==='a2'?'.nur-b1':'.nur-a2';
 var da=[].slice.call(document.querySelectorAll('[data-ha]')).filter(function(h){return !h.closest(weg);});
 var fertig=da.filter(function(h){return h.classList.contains('fertig');}).length;
 var voll=da.length>0&&fertig===da.length;
 hastand.textContent=voll?('Alle '+da.length+' Aufgaben geschafft. Stark — bis Mittwoch! 🎉')
                        :(fertig+' von '+da.length+' Aufgaben geschafft.');
 hastand.classList.toggle('voll',voll);
}
document.querySelectorAll('[data-ha]').forEach(function(h){
 h.setAttribute('aria-pressed','false');
 h.onclick=function(){var an=h.classList.toggle('fertig');
  h.setAttribute('aria-pressed',an?'true':'false');hazaehlen();};
});
hazaehlen();

/* ---- Daten aus den JSON-Bloecken im Koerper ----
   Der Motor ist fuer alle Stunden derselbe; nur die Daten wechseln.
   Fehlt ein Block, bleibt der Abschnitt einfach leer. */
function daten(id){
 var el=document.getElementById('daten-'+id);
 if(!el)return null;
 try{return JSON.parse(el.textContent);}catch(e){console.error('Daten "'+id+'" sind kaputt:',e);return null;}
}
/* ---- Mischen (Fisher-Yates) ----
   Ein Vergleich mit Math.random() mischt nicht gleichmaessig, die
   erste Stelle bleibt zu oft die erste. Deshalb richtig tauschen. */
function misch(liste){
 var a=liste.slice();
 for(var i=a.length-1;i>0;i--){var j=Math.floor(Math.random()*(i+1));var t=a[i];a[i]=a[j];a[j]=t;}
 return a;
}

/* ---- Sprechkarten ---- */
var SK=daten('sk')||[];
if(SK.length){
var lastsk=-1;
document.getElementById('sknew').onclick=function(){var i;
 do{i=Math.floor(Math.random()*SK.length);}while(i===lastsk&&SK.length>1);lastsk=i;
 document.getElementById('wsk').innerHTML=SK[i];};

}

/* ---- 90 Sekunden ---- */
var W90=daten('w90')||[];
if(W90.length){
var last90=-1,t90=null,rest=90;
function fmt(s){var m=Math.floor(s/60),r=s%60;return m+':'+(r<10?'0':'')+r;}
function zeige90(i){
 document.getElementById('w90').textContent=W90[i].w;
 document.getElementById('i90').src=W90[i].b;
 document.getElementById('i90').alt=W90[i].w;
 document.getElementById('hw90').innerHTML=W90[i].h.map(function(x){return '<span class="hw">'+x+'</span>';}).join('');
}
document.getElementById('new90').onclick=function(){var i;
 do{i=Math.floor(Math.random()*W90.length);}while(i===last90&&W90.length>1);last90=i;
 zeige90(i);clearInterval(t90);rest=90;document.getElementById('t90').textContent=fmt(rest);};
document.getElementById('start90').onclick=function(){clearInterval(t90);rest=90;
 var el=document.getElementById('t90');el.textContent=fmt(rest);
 t90=setInterval(function(){rest--;el.textContent=fmt(rest);
  if(rest<=0){clearInterval(t90);el.textContent='✅ Fertig!';}},1000);};
zeige90(0);last90=0;

}

/* ---- Quiz ---- */
var QUIZ=daten('quiz')||[];
var qc=document.getElementById('quiz');
if(qc&&QUIZ.length){
QUIZ.forEach(function(item){
 var d=document.createElement('div');d.className='quiz-q';
 d.innerHTML='<div class="qt">'+item.q+'</div>';
 var op=document.createElement('div');op.className='quiz-opts';
 /* Gemischt, sonst stuende die richtige Antwort immer an erster Stelle
    und man koennte die ganze Runde raten, ohne zu lesen. */
 var wahl=misch(item.o.map(function(t,i){return {t:t,richtig:i===item.c};}));
 wahl.forEach(function(w){
  var b=document.createElement('button');b.className='qopt';b.textContent=w.t;
  b.onclick=function(){
   if(d.dataset.done)return;d.dataset.done=1;
   if(w.richtig){b.classList.add('right');}
   else{
    b.classList.add('wrong');
    op.children[wahl.findIndex(function(x){return x.richtig;})].classList.add('right');
   }
   d.querySelector('.qexp').classList.add('show');};
  op.appendChild(b);});
 d.appendChild(op);
 var e=document.createElement('div');e.className='qexp';e.innerHTML='💡 '+item.e;d.appendChild(e);
 qc.appendChild(d);
});

}

/* ---- Lueckentext ---- */
var GAP=daten('gap')||[];
var g=document.getElementById('gap');
if(g&&GAP.length){
GAP.forEach(function(item){
 var row=document.createElement('div');row.style.margin='.35rem 0';
 var sel=document.createElement('select');
 var leer=document.createElement('option');leer.textContent='– wählen –';leer.value='';sel.appendChild(leer);
 misch(item.o).forEach(function(o){
  var op=document.createElement('option');op.textContent=o;op.value=o;sel.appendChild(op);});
 sel.onchange=function(){sel.className=sel.value===item.a?'ok':'no';};
 var teile=item.t.split('___');
 row.appendChild(document.createTextNode(teile[0]));row.appendChild(sel);
 row.appendChild(document.createTextNode(teile[1]||''));
 g.appendChild(row);
});

}

/* ---- Satzbauer ---- */
var GBAU=daten('gbau')||[];
var gbc=document.getElementById('gbau');
if(gbc&&GBAU.length){
{GBAU.forEach(function(item){
 var d=document.createElement('div');d.className='gbau';
 d.innerHTML='<div class="gfrage">🧱 '+item.f+'</div>';
 var teile=document.createElement('div');teile.className='gteile';
 var zeile=document.createElement('div');zeile.className='gzeile';
 var gebaut=[];
 misch(item.t).forEach(function(w){
  var b=document.createElement('button');b.className='gteil';b.textContent=w;
  b.onclick=function(){b.classList.add('weg');gebaut.push(w);zeile.classList.remove('ok','no');
   var s=document.createElement('span');s.textContent=w;zeile.appendChild(s);};
  teile.appendChild(b);});
 d.appendChild(teile);d.appendChild(zeile);
 var fuss=document.createElement('div');fuss.className='gfuss';
 var pr=document.createElement('button');pr.className='gmini';pr.textContent='✅ prüfen';
 var nm=document.createElement('button');nm.className='gmini hell';nm.textContent='↻ nochmal';
 var tp=document.createElement('div');tp.className='gtipp';tp.innerHTML='💡 '+item.e;
 pr.onclick=function(){var richtig=gebaut.join(' ')===item.l.join(' ');
  zeile.classList.remove('ok','no');zeile.classList.add(richtig?'ok':'no');tp.classList.add('show');};
 nm.onclick=function(){gebaut=[];zeile.innerHTML='';zeile.classList.remove('ok','no');tp.classList.remove('show');
  teile.querySelectorAll('.gteil').forEach(function(b){b.classList.remove('weg');});};
 fuss.appendChild(pr);fuss.appendChild(nm);d.appendChild(fuss);d.appendChild(tp);
 gbc.appendChild(d);
});}

}

/* ---- Lueckengeschichte ---- */
var GSTORY=daten('gstory');
var gsc=document.getElementById('gstory');
if(gsc&&GSTORY){
{
 var gsWahl=misch(GSTORY.o);   /* einmal mischen, alle Luecken zeigen dieselbe Reihenfolge */
 var st=GSTORY.t.split('___');
 st.forEach(function(txt,i){
  gsc.appendChild(document.createTextNode(txt));
  if(i<GSTORY.a.length){
   var sel=document.createElement('select');
   var leer=document.createElement('option');leer.textContent='– ? –';leer.value='';sel.appendChild(leer);
   gsWahl.forEach(function(o){var op=document.createElement('option');op.textContent=o;op.value=o;sel.appendChild(op);});
   (function(loesung){sel.onchange=function(){sel.className=loesung.indexOf(sel.value)>=0?'ok':'no';};})(GSTORY.a[i]);
   gsc.appendChild(sel);
  }
 });
}

}
