var $=function(id){return document.getElementById(id);};
function mische(a){var m=a.slice();for(var j=m.length-1;j>0;j--){var i=Math.floor(Math.random()*(j+1));var h=m[j];m[j]=m[i];m[i]=h;}return m;}

/* ---------- Reiter ---------- */
document.querySelectorAll('.tab').forEach(function(t){
  t.addEventListener('click',function(){
    document.querySelectorAll('.tab').forEach(function(x){x.classList.remove('active');});
    document.querySelectorAll('.section').forEach(function(x){x.classList.remove('active');});
    t.classList.add('active');
    document.querySelector('.section[data-section="'+t.dataset.tab+'"]').classList.add('active');
    window.scrollTo({top:0,behavior:'smooth'});
  });
});

/* ---------- Vorlesen (Stimme des Browsers) ---------- */
var STIMME=null, sprechbar=('speechSynthesis' in window);
function stimmeWaehlen(){
  if(!sprechbar) return;
  var v=window.speechSynthesis.getVoices().filter(function(x){return /^de/i.test(x.lang);});
  if(v.length){
    var gut=v.filter(function(x){return /google|premium|natural|siri|anna|petra|markus/i.test(x.name);});
    STIMME=(gut[0]||v[0]);
  }
}
if(sprechbar){ stimmeWaehlen(); window.speechSynthesis.onvoiceschanged=stimmeWaehlen; }
function sprich(text,knopf,tempo){
  if(!sprechbar) return;
  window.speechSynthesis.cancel();
  var u=new SpeechSynthesisUtterance(String(text).replace(/<[^>]+>/g,'').replace(/\s+/g,' ').trim());
  u.lang='de-DE'; u.rate=tempo||0.92; if(STIMME) u.voice=STIMME;
  if(knopf){ knopf.classList.add('spricht'); u.onend=function(){knopf.classList.remove('spricht');}; u.onerror=function(){knopf.classList.remove('spricht');}; }
  window.speechSynthesis.speak(u);
}
function hoerKnopf(text,titel,langsam){
  var b=document.createElement('button');
  b.className='hk'; b.type='button';
  b.innerHTML='🔊'+(langsam?' <span class="hklang">langsam</span>':'');
  b.title=titel||'Vorlesen';
  b.addEventListener('click',function(e){e.stopPropagation();sprich(text,b,langsam?0.62:0.92);});
  return b;
}

/* ---------- Reiter 3: Bildkarten mit Vorlesen ---------- */
(function(){
  var g=$('bgrid'); if(!g) return;
  SAETZE.forEach(function(k){
    var d=document.createElement('div'); d.className='bcard';
    d.innerHTML='<img src="bilder/gram/'+BASIS+'-'+k.b+'.jpg" alt="" loading="lazy">'+
      '<div class="bb"><div class="bsatz">'+k.s+'</div><div class="bwirk">'+k.w+'</div><div class="bton"></div></div>';
    var t=d.querySelector('.bton');
    var rein=k.s.replace(/<[^>]+>/g,'').replace(/^[^—]*—\s*/,'');
    t.appendChild(hoerKnopf(rein,'Satz vorlesen'));
    t.appendChild(hoerKnopf(rein,'Langsam vorlesen',true));
    g.appendChild(d);
  });
})();

/* ---------- Reiter 4: Spiel ---------- */
var sNr=-1,sPunkte=0,sGespielt=0,sOffen=false;
function spielFrage(){
  sNr++;
  if(sNr>=SPIEL.length){
    $('sStimmung').textContent='Fertig!';
    $('sSatz').innerHTML='Du hast <b>'+sPunkte+' von '+SPIEL.length+'</b> getroffen.';
    $('sKnoepfe').innerHTML=''; $('sRueck').className='rueck';
    $('sWeiter').style.display='none'; return;
  }
  var f=SPIEL[sNr]; sOffen=true;
  $('sStimmung').textContent=f.stimmung;
  $('sSatz').innerHTML=f.satz.replace('___','<b>?</b>');
  $('sRueck').className='rueck';
  $('sWeiter').style.display='none';
  var k=$('sKnoepfe'); k.innerHTML='';
  mische(f.o).forEach(function(w){
    var b=document.createElement('button'); b.className='pk'; b.textContent=w;
    b.addEventListener('click',function(){ antwort(b,w,f); });
    k.appendChild(b);
  });
}
function antwort(btn,wort,f){
  if(!sOffen)return; sOffen=false; sGespielt++;
  var ok=wort===f.r;
  document.querySelectorAll('#sKnoepfe .pk').forEach(function(b){
    b.classList.add('aus');
    if(b.textContent===f.r) b.classList.add('richtig');
  });
  if(!ok) btn.classList.add('falsch');
  if(ok) sPunkte++;
  $('sSatz').innerHTML=f.satz.replace('___','<b>'+f.r+'</b>');
  $('sRueck').innerHTML=(ok?'✅ Getroffen. ':'❌ Nicht ganz. ')+f.e;
  $('sRueck').className='rueck an';
  $('sPunkte').textContent=sPunkte+' von '+sGespielt;
  $('sWeiter').style.display='';
}
$('sWeiter').addEventListener('click',spielFrage);
$('sNeu').addEventListener('click',function(){sNr=-1;sPunkte=0;sGespielt=0;$('sPunkte').textContent='0 von 0';$('sWeiter').style.display='';spielFrage();});
spielFrage();

/* ---------- Reiter 5: Üben, sieben Aufgabenformen ---------- */
var uFertig=0;
function fertig(){
  uFertig++; $('uTxt').textContent=uFertig+' von '+UEB.length;
  $('uBar').style.width=(uFertig/UEB.length*100)+'%';
}
function erkl(d){ var e=d.querySelector('.uerkl'); if(e) e.classList.add('an'); }

function bauWahl(d,a){                      /* gap + choice: anklicken */
  var box=d.querySelector('.uopts');
  mische(a.o).forEach(function(w){
    var b=document.createElement('button'); b.className='uo'; b.textContent=w;
    b.addEventListener('click',function(){
      if(b.classList.contains('aus'))return;
      box.querySelectorAll('.uo').forEach(function(x){ x.classList.add('aus'); if(x.textContent===a.r) x.classList.add('richtig'); });
      if(w!==a.r) b.classList.add('falsch');
      var lk=d.querySelector('.luecke');
      if(lk){ lk.textContent=a.r; lk.classList.add('voll'); }
      erkl(d); fertig();
    });
    box.appendChild(b);
  });
}

function bauSatzbau(d,a){                   /* bau: Wörter in die richtige Reihenfolge */
  var box=d.querySelector('.uopts');
  box.className='uopts satzbau';
  var ziel=document.createElement('div'); ziel.className='sbziel';
  var vorrat=document.createElement('div'); vorrat.className='sbvorrat';
  var hinweis=document.createElement('div'); hinweis.className='sbhinweis';
  box.appendChild(ziel); box.appendChild(vorrat); box.appendChild(hinweis);
  var gesetzt=[], erledigt=false;
  function zeichne(){
    ziel.innerHTML='';
    if(!gesetzt.length){ ziel.innerHTML='<span class="sbleer">Tippe die Wörter der Reihe nach an</span>'; }
    gesetzt.forEach(function(w,i){
      var s=document.createElement('button'); s.className='sbw gesetzt'; s.textContent=w;
      s.addEventListener('click',function(){ if(erledigt)return; gesetzt.splice(i,1); zeichne(); pruefe(); });
      ziel.appendChild(s);
    });
  }
  function pruefe(){
    if(erledigt) return;
    hinweis.textContent='';
    if(gesetzt.length<a.w.length) return;
    erledigt=true;
    var richtig=gesetzt.join(' ')===a.w.join(' ');
    ziel.querySelectorAll('.sbw').forEach(function(s,i){ s.classList.add(gesetzt[i]===a.w[i]?'ok':'nok'); });
    hinweis.innerHTML=(richtig?'✅ Genau so. ':'❌ Nicht ganz. Richtig ist: <b>'+a.w.join(' ')+'</b>');
    hinweis.classList.add('an');
    vorrat.style.display='none';
    var h=hoerKnopf(a.w.join(' '),'Richtige Lösung hören'); hinweis.appendChild(document.createTextNode(' ')); hinweis.appendChild(h);
    erkl(d); fertig();
  }
  mische(a.w).forEach(function(w){
    var b=document.createElement('button'); b.className='sbw'; b.textContent=w;
    b.addEventListener('click',function(){
      if(erledigt||b.classList.contains('weg'))return;
      b.classList.add('weg'); gesetzt.push(w); zeichne(); pruefe();
    });
    vorrat.appendChild(b);
  });
  zeichne();
}

function bauSortieren(d,a){                 /* sort: Wörter in Kategorien einsortieren */
  var box=d.querySelector('.uopts');
  box.className='uopts sortier';
  var faecher=document.createElement('div'); faecher.className='sofaecher';
  var vorrat=document.createElement('div'); vorrat.className='sovorrat';
  var hinweis=document.createElement('div'); hinweis.className='sbhinweis';
  var listen=[];
  a.kat.forEach(function(name,ki){
    var f=document.createElement('div'); f.className='sofach';
    f.innerHTML='<div class="sokopf">'+name+'</div>';
    var l=document.createElement('div'); l.className='soliste'; f.appendChild(l);
    listen.push(l); faecher.appendChild(f);
  });
  box.appendChild(vorrat); box.appendChild(faecher); box.appendChild(hinweis);
  var offen=a.items.length, gewaehlt=null;
  function waehle(btn){
    vorrat.querySelectorAll('.sow').forEach(function(x){x.classList.remove('aktiv');});
    if(gewaehlt===btn){ gewaehlt=null; return; }
    gewaehlt=btn; btn.classList.add('aktiv');
  }
  a.items.forEach(function(it){
    var b=document.createElement('button'); b.className='sow'; b.textContent=it[0]; b.dataset.k=it[1];
    b.addEventListener('click',function(){ if(!b.classList.contains('weg')) waehle(b); });
    vorrat.appendChild(b);
  });
  listen.forEach(function(l,ki){
    l.parentNode.addEventListener('click',function(){
      if(!gewaehlt) return;
      var richtig=Number(gewaehlt.dataset.k)===ki;
      var s=document.createElement('span'); s.className='sotreffer '+(richtig?'ok':'nok');
      s.textContent=gewaehlt.textContent+(richtig?'':' ✗');
      l.appendChild(s);
      gewaehlt.classList.add('weg'); gewaehlt.classList.remove('aktiv'); gewaehlt=null;
      offen--;
      if(offen===0){
        var falsch=box.querySelectorAll('.sotreffer.nok').length;
        hinweis.innerHTML=falsch?('❌ '+falsch+' davon gehören woanders hin.'):'✅ Alles am richtigen Platz.';
        hinweis.classList.add('an'); erkl(d); fertig();
      }
    });
  });
}

function bauHoeren(d,a){                    /* hoer: erst hören, dann antworten */
  var f=d.querySelector('.ufrage');
  var kopf=document.createElement('div'); kopf.className='hoerbox';
  kopf.innerHTML='<span class="hoerlbl">Hör zu:</span>';
  kopf.appendChild(hoerKnopf(a.audio,'Abspielen'));
  kopf.appendChild(hoerKnopf(a.audio,'Langsam abspielen',true));
  f.parentNode.insertBefore(kopf,f.nextSibling);
  if(!sprechbar){
    var w=document.createElement('div'); w.className='sbhinweis an';
    w.textContent='Dein Browser kann nicht vorlesen. Hier steht der Satz: '+a.audio;
    kopf.appendChild(w);
  }
  bauWahl(d,a);
  var alt=d.querySelector('.uerkl');
  alt.innerHTML='<b>Gehört:</b> '+a.audio+'<br>'+a.e;
}

function bauFehler(d,a){                    /* fehler: das falsche Wort finden */
  var box=d.querySelector('.uopts');
  box.className='uopts fehlerjagd';
  var satz=document.createElement('div'); satz.className='fjsatz';
  var hinweis=document.createElement('div'); hinweis.className='sbhinweis';
  box.appendChild(satz); box.appendChild(hinweis);
  var erledigt=false;
  a.s2.split(' ').forEach(function(w){
    var b=document.createElement('button'); b.className='fjw'; b.textContent=w;
    b.addEventListener('click',function(){
      if(erledigt) return; erledigt=true;
      var treffer=w.replace(/[.,!?;:]$/,'')===a.falsch;
      satz.querySelectorAll('.fjw').forEach(function(x){
        x.classList.add('aus');
        if(x.textContent.replace(/[.,!?;:]$/,'')===a.falsch) x.classList.add('ok');
      });
      if(!treffer) b.classList.add('nok');
      hinweis.innerHTML=(treffer?'✅ Gefunden. ':'❌ Der Fehler steckt woanders. ')+
        'Richtig heißt es: <b>'+a.richtig+'</b>';
      hinweis.classList.add('an');
      hinweis.appendChild(document.createTextNode(' '));
      hinweis.appendChild(hoerKnopf(a.richtig,'Richtige Fassung hören'));
      erkl(d); fertig();
    });
    satz.appendChild(b);
  });
}

function bauSchreiben(d,a){                 /* schreib: selbst formulieren, dann vergleichen */
  var box=d.querySelector('.uopts');
  box.className='uopts schreiben';
  var ta=document.createElement('textarea'); ta.className='schrfeld'; ta.rows=2;
  ta.placeholder='Schreib deinen Satz…';
  var reihe=document.createElement('div'); reihe.className='schrreihe';
  var knopf=document.createElement('button'); knopf.className='btn'; knopf.type='button'; knopf.textContent='Lösung zeigen';
  var muster=document.createElement('div'); muster.className='schrmuster';
  reihe.appendChild(knopf);
  box.appendChild(ta); box.appendChild(reihe); box.appendChild(muster);
  knopf.addEventListener('click',function(){
    if(knopf.disabled) return; knopf.disabled=true;
    muster.innerHTML='<b>Ein möglicher Satz:</b> '+a.muster;
    muster.appendChild(document.createTextNode(' '));
    muster.appendChild(hoerKnopf(a.muster,'Lösung hören'));
    muster.classList.add('an');
    erkl(d); fertig();
  });
}

(function(){
  var g=$('ugrid'); if(!g) return;
  UEB.forEach(function(a,nr){
    var d=document.createElement('div'); d.className='uauf';
    var kopf='<span class="unr">'+(nr+1)+'.</span> ';
    var art={gap:'Lücke',choice:'Auswahl',bau:'Satz bauen',sort:'Sortieren',hoer:'Hören',fehler:'Fehler finden',schreib:'Schreiben'}[a.t]||'Aufgabe';
    var text = a.t==='gap' ? a.s.replace('___','<span class="luecke">?</span>') : a.s;
    d.innerHTML='<div class="uart">'+art+'</div>'+
                '<div class="ufrage">'+kopf+text+'</div>'+
                '<div class="uopts"></div>'+
                '<div class="uerkl">'+a.e+'</div>';
    if(a.t==='bau') bauSatzbau(d,a);
    else if(a.t==='sort') bauSortieren(d,a);
    else if(a.t==='hoer') bauHoeren(d,a);
    else if(a.t==='fehler') bauFehler(d,a);
    else if(a.t==='schreib') bauSchreiben(d,a);
    else bauWahl(d,a);
    g.appendChild(d);
  });
  $('uTxt').textContent='0 von '+UEB.length;
})();

/* ---------- Reiter 6: Sprechkarten vorlesen lassen ---------- */
(function(){
  document.querySelectorAll('.dk').forEach(function(k){
    var q=k.querySelector('.dq'); if(!q) return;
    var b=hoerKnopf(q.textContent,'Frage vorlesen');
    b.classList.add('dkton');
    k.appendChild(b);
  });
})();
