var $q=function(id){return document.getElementById(id);};
document.querySelectorAll('.tab').forEach(function(t){
  t.addEventListener('click',function(){
    document.querySelectorAll('.tab').forEach(function(x){x.classList.remove('active');});
    document.querySelectorAll('.section').forEach(function(x){x.classList.remove('active');});
    t.classList.add('active');
    document.querySelector('.section[data-section="'+t.dataset.tab+'"]').classList.add('active');
    window.scrollTo({top:0,behavior:'smooth'});
  });
});
var sitZuletzt=-1, tabuZuletzt=-1, geheimZuletzt=-1;
var qRunde=-1,qNr=0,qPunkte=0,qOffen=false,qFertig=[];
function zaehleFunde(){
  var n=document.querySelectorAll('.find.done').length;
  $q('findZaehler').textContent=n+' von '+FINDEN.length+' gefunden'+(n===FINDEN.length?' — alles entdeckt! 🎉':'');
}
function neuesGeheim(){
  var i;do{i=Math.floor(Math.random()*FINDEN.length);}while(i===geheimZuletzt&&FINDEN.length>1);
  geheimZuletzt=i;$q('geheimWort').textContent=FINDEN[i];
}
function neuesTabu(){
  var i;do{i=Math.floor(Math.random()*TABU.length);}while(i===tabuZuletzt&&TABU.length>1);
  tabuZuletzt=i;var k=TABU[i];
  $q('tabuKarte').innerHTML='<div class="lbl">Erkläre dieses Wort</div><div class="kwort">'+k.w+'</div>'+
    '<div class="verboten"><div class="fl">🚫 Diese Wörter sind tabu</div><ul>'+k.f.map(function(x){return '<li>'+x+'</li>';}).join('')+'</ul></div>';
}
function neueSituation(){
  var i;do{i=Math.floor(Math.random()*SIT.length);}while(i===sitZuletzt&&SIT.length>1);
  sitZuletzt=i;var s=SIT[i];
  $q('sitKarte').innerHTML='<div class="sit-ort">'+s.ort+'</div><div class="sit-lage">'+s.lage+'</div>'+
    '<div class="sit-rollen"><div class="sit-r"><b>A —</b> '+s.a+'</div><div class="sit-r"><b>B —</b> '+s.b+'</div></div>'+
    '<div class="sit-woerter"><b>Diese Wörter sollen vorkommen:</b><br>'+s.w+'</div>';
}
function alleSituationen(){
  var d=$q('sitAlle');
  if(d.style.display==='block'){d.style.display='none';return;}
  d.style.display='block';
  d.innerHTML='<div class="debate-grid">'+SIT.map(function(s,i){
    return '<div class="debate"><div class="debate-num">Szene '+(i+1)+' · '+s.ort+'</div><div class="debate-q">'+s.lage+'</div>'+
      '<div class="sit-woerter">A — '+s.a+'<br>B — '+s.b+'<br><br>'+s.w+'</div></div>';}).join('')+'</div>';
}
function quizRundeStart(i){
  qRunde=i;qNr=0;qPunkte=0;qOffen=false;
  document.querySelectorAll('.qr').forEach(function(b){
    b.classList.toggle('active',+b.dataset.i===i);
    b.classList.toggle('fertig',qFertig.indexOf(+b.dataset.i)>=0 && +b.dataset.i!==i);
  });
  $q('quizEnde').style.display='none';$q('quizInhalt').style.display='block';
  quizFrage();
}
function quizFrage(){
  var R=QUIZ[qRunde];if(!R)return;
  if(qNr>=R.q.length){quizEnde();return;}
  var f=R.q[qNr];qOffen=true;
  $q('quizZaehler').textContent='Runde '+(qRunde+1)+' · '+R.t+' · Frage '+(qNr+1)+' von '+R.q.length;
  $q('quizPunkte').textContent=qPunkte+' von '+R.q.length;
  $q('quizBalken').style.width=(qNr/R.q.length*100)+'%';
  $q('quizFrage').innerHTML=f.f;
  var paare=f.o.map(function(t,j){return {t:t,ok:j===f.r};});
  for(var j=paare.length-1;j>0;j--){var k=Math.floor(Math.random()*(j+1));var h=paare[j];paare[j]=paare[k];paare[k]=h;}
  var buch='ABCD',opts=$q('quizOpts');opts.innerHTML='';
  paare.forEach(function(p,j){
    var b=document.createElement('button');
    b.className='qo';b.dataset.ok=p.ok?'1':'0';
    b.innerHTML='<span class="qo-b">'+buch[j]+'</span><span>'+p.t+'</span>';
    b.addEventListener('click',function(){quizAntwort(b,f);});
    opts.appendChild(b);
  });
  var e=$q('quizErkl');e.className='quiz-erkl';e.innerHTML='';
}
function quizAntwort(btn,f){
  if(!qOffen)return;qOffen=false;
  var ok=btn.dataset.ok==='1';
  document.querySelectorAll('#quizOpts .qo').forEach(function(b){
    b.classList.add('aus');
    if(b.dataset.ok==='1')b.classList.add('richtig');
  });
  if(!ok)btn.classList.add('falsch');
  if(ok)qPunkte++;
  $q('quizPunkte').textContent=qPunkte+' von '+QUIZ[qRunde].q.length;
  var e=$q('quizErkl');
  e.innerHTML=(ok?'✅ Richtig. ':'❌ Nicht ganz. ')+f.e;
  e.className='quiz-erkl an';
}
function quizWeiter(){
  if(qOffen){
    var b=$q('quizOpts').querySelector('.qo[data-ok="1"]');
    if(b){quizAntwort(b,QUIZ[qRunde].q[qNr]);qPunkte--;$q('quizPunkte').textContent=qPunkte+' von '+QUIZ[qRunde].q.length;return;}
  }
  qNr++;quizFrage();
}
function quizEnde(){
  var R=QUIZ[qRunde],n=R.q.length;
  if(qFertig.indexOf(qRunde)<0)qFertig.push(qRunde);
  document.querySelectorAll('.qr').forEach(function(b){
    b.classList.toggle('fertig',qFertig.indexOf(+b.dataset.i)>=0);
  });
  $q('quizBalken').style.width='100%';
  $q('quizInhalt').style.display='none';
  var lob=qPunkte===n?'Alles richtig — perfekt!':(qPunkte>=n-1?'Fast alles — stark!':(qPunkte>=n/2?'Gut gemacht. Die Erklärungen noch einmal ansehen, dann sitzt es.':'Diese Runde noch einmal — beim zweiten Mal bleibt es hängen.'));
  var naechste=(qRunde+1)%QUIZ.length;
  $q('quizEnde').style.display='block';
  $q('quizEnde').innerHTML='<div class="gross">'+qPunkte+'/'+n+'</div><p>'+lob+'</p>'+
    '<div class="controls"><button class="btn ghost" onclick="quizRundeStart('+qRunde+')">↺ Diese Runde nochmal</button>'+
    '<button class="btn" onclick="quizRundeStart('+naechste+')">'+QUIZ[naechste].i+' Weiter: '+QUIZ[naechste].t+' →</button></div>';
}
function start(){
  var g=$q('findGrid');
  FINDEN.forEach(function(w){
    var teile=w.split(' ');
    var d=document.createElement('div');
    d.className='find';
    d.innerHTML='<span class="art">'+teile[0]+'</span> '+teile.slice(1).join(' ');
    d.addEventListener('click',function(){d.classList.toggle('done');zaehleFunde();});
    g.appendChild(d);
  });
  var bg=$q('bgrid');
  WORT.forEach(function(k){
    var d=document.createElement('div');d.className='bcard';
    var bild=k.bild?'<img src="'+k.bild+'" alt="'+k.w+'" loading="lazy">':'';
    var art=k.a?'<span class="art">'+k.a+'</span> ':'';
    d.innerHTML=bild+'<div class="bb"><div class="bw">'+art+k.w+'</div>'+
      '<div class="bex">„'+k.s+'“</div><div class="bti">💡 '+k.t+'</div></div>';
    d.addEventListener('click',function(){if(bg.classList.contains('hide'))d.classList.toggle('auf');});
    bg.appendChild(d);
  });
  $q('verdecken').addEventListener('click',function(){
    var an=!bg.classList.contains('hide');
    bg.classList.toggle('hide',an);
    document.querySelectorAll('.bcard').forEach(function(c){c.classList.remove('auf');});
    this.textContent=an?'👁️ Wörter zeigen':'🙈 Wörter verdecken';
  });
  var qg=$q('quizRunden');
  QUIZ.forEach(function(R,i){
    var b=document.createElement('button');
    b.className='qr';b.dataset.i=i;
    b.innerHTML='<div class="qr-i">'+R.i+'</div><div class="qr-t">'+R.t+'</div><div class="qr-d">'+R.d+' · '+R.q.length+' Fragen</div>';
    b.addEventListener('click',function(){quizRundeStart(i);});
    qg.appendChild(b);
  });
  quizRundeStart(0);
  neuesGeheim();neuesTabu();neueSituation();
}
