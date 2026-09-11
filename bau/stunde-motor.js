
/* ---- Sprungleiste: sie schaltet die Abschnitte wieder um ----
   Eine Weile stand alles untereinander. Gemessen an der Stunde
   „Kritik ueben": 28 512 Pixel, auf dem Handy 34 Bildschirme fuer
   eine Unterrichtsstunde. Man scrollt und scrollt und weiss nicht,
   wo man ist — und in der Stunde selbst kommt man nie durch.

   Jetzt zeigt die Seite einen Abschnitt. Die Leiste oben waehlt aus,
   am Ende jedes Abschnitts steht, was als Naechstes kommt. Wer die
   ganze Stunde am Stueck sehen will (zum Vorbereiten, zum Drucken),
   klickt auf „Alles". Beim Drucken kommt ohnehin alles mit, und ein
   Link mit #abschnitt oeffnet genau dort. */
(function(){
 var tabs=[].slice.call(document.querySelectorAll('nav.tabs a.tab'));
 var paare=tabs.map(function(a){return {a:a,sec:document.querySelector(a.getAttribute('href'))};})
               .filter(function(x){return x.sec;});
 if(paare.length<2) return;
 var alles=false, jetzt=paare[0].sec.id;

 /* Ohne JavaScript steht die Stunde weiterhin komplett da — erst
    hier wird ueberhaupt etwas versteckt. */
 document.body.classList.add('schaltet');

 var kopf=document.querySelector('.leiste');
 function hoehe(){ return kopf ? kopf.getBoundingClientRect().height+10 : 66; }

 /* Die aktive Marke in den schmalen Streifen holen — aber nur ihn
    schieben. scrollIntoView() nahm die ganze Seite mit: der Titel
    der Stunde rutschte beim Umschalten aus dem Bild. */
 function markeInsBild(a, weich){
  var streifen=a.parentNode;
  if(!streifen || streifen.scrollWidth<=streifen.clientWidth+2) return;
  /* Gerechnet wird ueber die Rechtecke, nicht ueber offsetLeft: der
     naechste positionierte Vorfahr ist die Leiste, nicht der Streifen
     — offsetLeft haette die Marke um die Breite der Niveau-Knoepfe
     verschoben. */
  var r=a.getBoundingClientRect(), rs=streifen.getBoundingClientRect();
  var links=streifen.scrollLeft+(r.left-rs.left)-(rs.width-r.width)/2;
  links=Math.max(0,Math.min(links,streifen.scrollWidth-streifen.clientWidth));
  if(Math.abs(links-streifen.scrollLeft)<2) return;
  /* Beim ersten Aufbau hart setzen. Ein weiches Scrollen im Streifen
     zog in Chrome die ganze Seite 399 Pixel mit nach unten, weil
     html{scroll-behavior:smooth} gilt — der Titel der Stunde war
     dann schon beim Laden aus dem Bild. */
  if(weich && streifen.scrollTo) streifen.scrollTo({left:links,behavior:'smooth'});
  else streifen.scrollLeft=links;
 }

 /* Der Umschalter erscheint nur, wo er wirklich etwas aendert.
    Vorher stand er auf jeder Seite, tat aber in vier von sieben
    Abschnitten gar nichts — man tippt, nichts passiert, und denkt,
    es sei kaputt. Jetzt sagt sein Verschwinden: Hier gibt es keine
    zwei Fassungen. */
 var umschalter=document.querySelector('.leiste .nivk');
 function umschalterZeigen(sec){
  if(!umschalter) return;
  var da = !!sec.querySelector('.nur-a2, .nur-b1');
  umschalter.style.display = da ? '' : 'none';
 }

 function zeige(id, springen, stumm){
  var da=paare.filter(function(p){return p.sec.id===id;})[0];
  if(!da) return;
  jetzt=id;
  paare.forEach(function(p){
   p.sec.hidden = !alles && p.sec.id!==id;
   p.a.classList.toggle('active', p.sec.id===id);
  });
  if(alles) paare.forEach(function(p){ p.sec.hidden=false; });
  umschalterZeigen(da.sec);
  markeInsBild(da.a, !!springen);
  if(springen){
   var y=da.sec.getBoundingClientRect().top+window.pageYOffset-hoehe();
   window.scrollTo({top:Math.max(0,y),behavior:'smooth'});
  }
  /* Die Marke kommt erst in die Adresse, wenn jemand wirklich
     umschaltet. Steht sie schon beim Laden drin, springt Chrome
     nachtraeglich selbst dorthin — sobald die Bilder da sind, zog es
     die Seite 399 Pixel nach unten und der Titel der Stunde war weg. */
  if(!stumm){ try{ history.replaceState(null,'','#'+id); }catch(e){} }
 }
 window.stundeZeige=zeige;

 tabs.forEach(function(a){
  a.addEventListener('click',function(ev){
   var id=(a.getAttribute('href')||'').replace('#','');
   if(!id) return;
   ev.preventDefault();
   if(alles){ alles=false; if(knopfAlles) knopfAlles.setAttribute('aria-pressed','false'); }
   zeige(id,true);
  });
 });

 /* Am Ende jedes Abschnitts: was jetzt drankommt. In der Stunde
    haelt das den Takt — man klickt weiter, statt zu suchen. */
 paare.forEach(function(p,i){
  var naechste=paare[i+1], vorige=paare[i-1];
  var z=document.createElement('div'); z.className='weiterzeile';
  if(vorige){
   var zur=document.createElement('button');
   zur.type='button'; zur.className='weiterknopf zurueck';
   zur.innerHTML='← '+vorige.a.textContent.trim();
   zur.addEventListener('click',function(){ zeige(vorige.sec.id,true); });
   z.appendChild(zur);
  }
  if(naechste){
   var w=document.createElement('button');
   w.type='button'; w.className='weiterknopf';
   w.innerHTML='Weiter: '+naechste.a.textContent.trim()+' →';
   w.addEventListener('click',function(){ zeige(naechste.sec.id,true); });
   z.appendChild(w);
  }
  if(z.children.length) p.sec.appendChild(z);
 });

 /* Der Schalter fuer die lange Ansicht sitzt am Ende der Leiste. */
 var knopfAlles=null;
 var streifen=document.querySelector('nav.tabs');
 if(streifen){
  knopfAlles=document.createElement('button');
  knopfAlles.type='button'; knopfAlles.className='tab tabAlles';
  knopfAlles.setAttribute('aria-pressed','false');
  knopfAlles.textContent='⇕ Alles';
  knopfAlles.title='Die ganze Stunde am Stück zeigen';
  knopfAlles.addEventListener('click',function(){
   alles=!alles;
   knopfAlles.setAttribute('aria-pressed', alles?'true':'false');
   if(alles){ paare.forEach(function(p){ p.sec.hidden=false; }); }
   else zeige(jetzt,true);
  });
  streifen.appendChild(knopfAlles);
 }

 var ausLink=(location.hash||'').replace('#','');
 var beimLaden=paare.filter(function(p){return p.sec.id===ausLink;}).length ? ausLink : paare[0].sec.id;
 zeige(beimLaden, false, beimLaden!==ausLink);
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

/* ---- Markierte Woerter ----
   Statt einer Wortschatzliste am Anfang steht das Wort dort, wo es
   gebraucht wird — angestrichen. Antippen zeigt Artikel, Bedeutung
   und einen Satz. Wer das Wort kennt, liest darueber hinweg.

   Gelb heisst: Wort dieser Stunde. Rot gepunktet heisst: Begriff,
   den viele verwechseln. */
(function(){
 var woerter=[].slice.call(document.querySelectorAll('.wm'));
 if(!woerter.length) return;
 var karte=null;

 function zu(){ if(karte){ karte.remove(); karte=null; }
  woerter.forEach(function(w){ w.classList.remove('offen'); }); }

 function auf(w){
  var schonOffen=w.classList.contains('offen');
  zu();
  if(schonOffen) return;
  w.classList.add('offen');
  karte=document.createElement('div');
  karte.className='wmk';
  var satz=w.dataset.bsp||'';
  karte.innerHTML='<button class="wmk-zu" aria-label="Schließen">✕</button>'
   + '<b>'+w.dataset.wort+'</b>'
   + '<span>'+(w.dataset.kurz||'')+'</span>'
   + (satz?'<em>'+satz+'</em>':'')
   + (satz?'<button class="wmk-ton" type="button">🔊 vorlesen</button>':'');
  document.body.appendChild(karte);

  /* Unter dem Wort, aber nie ueber den Rand hinaus. */
  var r=w.getBoundingClientRect(), b=karte.getBoundingClientRect();
  var links=r.left+r.width/2-b.width/2;
  links=Math.max(10,Math.min(links,window.innerWidth-b.width-10));
  var oben=r.bottom+window.pageYOffset+9;
  if(r.bottom+b.height+18>window.innerHeight && r.top>b.height+18)
   oben=r.top+window.pageYOffset-b.height-9;
  karte.style.left=links+'px'; karte.style.top=oben+'px';

  karte.querySelector('.wmk-zu').onclick=zu;
  var ton=karte.querySelector('.wmk-ton');
  if(ton) ton.onclick=function(){ say(satz); };
 }

 woerter.forEach(function(w){
  w.addEventListener('click',function(ev){ ev.stopPropagation(); auf(w); });
  w.addEventListener('keydown',function(ev){
   if(ev.key==='Enter'||ev.key===' '){ ev.preventDefault(); ev.stopPropagation(); auf(w); } });
 });
 document.addEventListener('click',zu);
 document.addEventListener('keydown',function(ev){ if(ev.key==='Escape') zu(); });
 window.addEventListener('resize',zu);
 /* Beim Abschnittswechsel schliessen — die Karte haengt am Koerper,
    nicht am Abschnitt, und wuerde sonst allein stehen bleiben. */
 document.querySelectorAll('nav.tabs a.tab, .weiterknopf').forEach(function(k){
  k.addEventListener('click',zu); });
})();

/* ---- Bildkarten verdecken ----
   Steht nur im Wortschatz-Abschnitt, und den gibt es seit dem Umbau
   nicht mehr in jeder Stunde. Ohne diese Abfrage brach der Motor an
   dieser Stelle ab — und mit ihm alles, was danach kommt: die zweite
   Dialogrunde, die Sprechkarten, die 90 Sekunden, Quiz und Lueckentext.
   Ein einziges fehlendes Element legte die halbe Stunde still. */
var bg=document.getElementById('bgrid'),vb=document.getElementById('verdecken');
if(bg&&vb){
 vb.onclick=function(){bg.classList.toggle('hide');bg.querySelectorAll('.bcard').forEach(function(c){c.classList.remove('auf');});
  vb.textContent=bg.classList.contains('hide')?'👁️ Wörter zeigen':'🙈 Wörter verdecken';};
 bg.querySelectorAll('.bcard').forEach(function(c){c.addEventListener('click',function(){if(bg.classList.contains('hide'))c.classList.toggle('auf');});});
}

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
/* Die Sprechuebung zieht aus denselben Saetzen, die oben bei den
   Merksaetzen stehen. Gleicher Mechanismus wie bei den Sprechkarten. */
var UEB=daten('ueb')||[];
if(UEB.length && document.getElementById('uebnew') && document.getElementById('wueb')){
  var uLetzt=-1;
  document.getElementById('uebnew').onclick=function(){var i;
    do{ i=Math.floor(Math.random()*UEB.length); }while(UEB.length>1 && i===uLetzt);
    uLetzt=i; document.getElementById('wueb').textContent=UEB[i];
  };
}

var SK=daten('sk')||[];
/* Auch hier: die Daten koennen da sein, der Abschnitt nicht.
   Gepruefte Elemente statt gepruefter Daten. */
if(SK.length && document.getElementById('sknew') && document.getElementById('wsk')){
var lastsk=-1;
document.getElementById('sknew').onclick=function(){var i;
 do{i=Math.floor(Math.random()*SK.length);}while(i===lastsk&&SK.length>1);lastsk=i;
 document.getElementById('wsk').innerHTML=SK[i];};

}

/* ---- 90 Sekunden ---- */
var W90=daten('w90')||[];
if(W90.length && document.getElementById('new90') && document.getElementById('w90')){
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
