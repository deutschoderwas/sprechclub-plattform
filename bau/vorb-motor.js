
(function(){
  const tabs=[...document.querySelectorAll('nav.tabs a')];
  const map=tabs.map(a=>({a,sec:document.querySelector(a.getAttribute('href'))})).filter(x=>x.sec);
  if('IntersectionObserver' in window){
    const obs=new IntersectionObserver(es=>{es.forEach(e=>{if(e.isIntersecting){tabs.forEach(t=>t.classList.remove('active'));const m=map.find(x=>x.sec===e.target);if(m)m.a.classList.add('active');}});},{rootMargin:'-45% 0px -50% 0px'});
    map.forEach(x=>obs.observe(x.sec));
  }
  document.querySelectorAll('[data-quiz] .quiz-q').forEach(q=>{
    q.querySelectorAll('.quiz-opt').forEach(opt=>{opt.addEventListener('click',()=>{
      if(q.classList.contains('answered'))return;q.classList.add('answered');
      const correct=q.querySelector('.quiz-opt[data-correct]');
      if(opt.hasAttribute('data-correct'))opt.classList.add('correct');
      else{opt.classList.add('wrong');if(correct)correct.classList.add('correct');}
    });});
  });
  document.querySelectorAll('[data-fillgap]').forEach(box=>{
    const btn=box.querySelector('[data-check]'),score=box.querySelector('[data-score]');if(!btn)return;
    btn.addEventListener('click',()=>{let ok=0;const sels=box.querySelectorAll('select[data-answer]');
      sels.forEach(s=>{s.classList.remove('ok','no');if(s.value===s.getAttribute('data-answer')){s.classList.add('ok');ok++;}else s.classList.add('no');});
      if(score)score.textContent=ok+' / '+sels.length+' richtig'+(ok===sels.length?' 🎉':'');});
  });
  document.querySelectorAll('[data-match]').forEach(box=>{
    let selLeft=null;
    box.querySelectorAll('.match-item').forEach(item=>{item.addEventListener('click',()=>{
      if(item.classList.contains('done'))return;
      const isLeft=item.hasAttribute('data-left');
      if(isLeft){box.querySelectorAll('.match-item.sel').forEach(s=>s.classList.remove('sel'));item.classList.add('sel');selLeft=item;return;}
      if(!selLeft)return;
      if(item.getAttribute('data-right')===selLeft.getAttribute('data-left')){item.classList.add('done');selLeft.classList.add('done');selLeft.classList.remove('sel');selLeft=null;}
      else{item.classList.add('no');setTimeout(()=>item.classList.remove('no'),500);}
    });});
  });
  /* Jede Vorbereitung speichert unter ihrem eigenen Schluessel — sonst
     ueberschreiben sich die Notizen von zwei Seiten gegenseitig. */
  const KEY = document.body.getAttribute("data-speicher") || "dow-vorb";
  let store={};try{store=JSON.parse(localStorage.getItem(KEY)||'{}');}catch(e){}
  const fields=[...document.querySelectorAll('.notefield[data-save]')];
  fields.forEach(f=>{const k=f.getAttribute('data-save');if(store[k])f.value=store[k];});
  const stateEl=document.querySelector('[data-savestate]');
  function save(flash){const o={};fields.forEach(f=>o[f.getAttribute('data-save')]=f.value);
    try{localStorage.setItem(KEY,JSON.stringify(o));}catch(e){}
    if(stateEl){const t=new Date().toLocaleTimeString('de-DE',{hour:'2-digit',minute:'2-digit'});
      stateEl.textContent=(flash?'✓ Gespeichert':'Automatisch gespeichert')+' um '+t+' Uhr.';}}
  let timer;fields.forEach(f=>f.addEventListener('input',()=>{clearTimeout(timer);timer=setTimeout(()=>save(false),700);}));
  const sb=document.querySelector('[data-savebtn]');if(sb)sb.addEventListener('click',()=>save(true));
})();
