var $=function(id){return document.getElementById(id);};
document.querySelectorAll('.tab').forEach(function(t){
  t.addEventListener('click',function(){
    document.querySelectorAll('.tab').forEach(function(x){x.classList.remove('active');});
    document.querySelectorAll('.section').forEach(function(x){x.classList.remove('active');});
    t.classList.add('active');
    document.querySelector('.section[data-section="'+t.dataset.tab+'"]').classList.add('active');
    window.scrollTo({top:0,behavior:'smooth'});
  });
});
(function(){
  var g=$('bgrid');
  SAETZE.forEach(function(k){
    var d=document.createElement('div'); d.className='bcard';
    d.innerHTML='<img src="bilder/gram/'+BASIS+'-'+k.b+'.jpg" alt="" loading="lazy">'+
      '<div class="bb"><div class="bsatz">'+k.s+'</div><div class="bwirk">'+k.w+'</div></div>';
    g.appendChild(d);
  });
})();
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
  var mix=f.o.slice();
  for(var j=mix.length-1;j>0;j--){var i=Math.floor(Math.random()*(j+1));var h=mix[j];mix[j]=mix[i];mix[i]=h;}
  mix.forEach(function(w){
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
var uFertig=0;
(function(){
  var g=$('ugrid');
  UEB.forEach(function(a,nr){
    var d=document.createElement('div'); d.className='uauf';
    var kopf='<span style="color:var(--ink-mute);font-size:.85rem">'+(nr+1)+'. </span>';
    var frage = a.t==='gap' ? kopf+a.s.replace('___','<span class="luecke">?</span>') : kopf+a.s;
    d.innerHTML='<div class="ufrage">'+frage+'</div><div class="uopts"></div><div class="uerkl">'+a.e+'</div>';
    var box=d.querySelector('.uopts');
    var mix=a.o.slice();
    for(var j=mix.length-1;j>0;j--){var i=Math.floor(Math.random()*(j+1));var h=mix[j];mix[j]=mix[i];mix[i]=h;}
    mix.forEach(function(w){
      var b=document.createElement('button'); b.className='uo'; b.textContent=w;
      b.addEventListener('click',function(){
        if(b.classList.contains('aus'))return;
        box.querySelectorAll('.uo').forEach(function(x){ x.classList.add('aus'); if(x.textContent===a.r) x.classList.add('richtig'); });
        if(w!==a.r) b.classList.add('falsch');
        var lk=d.querySelector('.luecke');
        if(lk){ lk.textContent=a.r; lk.classList.add('voll'); }
        d.querySelector('.uerkl').classList.add('an');
        uFertig++; $('uTxt').textContent=uFertig+' von '+UEB.length;
        $('uBar').style.width=(uFertig/UEB.length*100)+'%';
      });
      box.appendChild(b);
    });
    g.appendChild(d);
  });
  $('uTxt').textContent='0 von '+UEB.length;
})();
