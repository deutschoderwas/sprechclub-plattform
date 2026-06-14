/* deutschoderwas club — Effekte: bunter Hintergrund, schwebende Emojis, 3D-Tilt */
(function(){
  function build(){
    if (document.querySelector('.club-bg')) return;
    var bg = document.createElement('div'); bg.className='club-bg';
    bg.innerHTML='<div class="blob b1"></div><div class="blob b2"></div><div class="blob b3"></div><div class="blob b4"></div>';
    document.body.appendChild(bg);

    var fl = document.createElement('div'); fl.className='club-floaties';
    var EMO=['🗣️','📚','🎧','📐','🎓','💬','🎤','✨','🇩🇪','❤️'];
    EMO.forEach(function(e){
      var s=document.createElement('div'); s.className='club-fl'; s.textContent=e;
      s.style.left=(6+Math.random()*88)+'%'; s.style.top=(8+Math.random()*82)+'%';
      s.style.fontSize=(30+Math.random()*26)+'px'; s.style.animationDelay=(-Math.random()*7)+'s';
      s.dataset.depth=(0.4+Math.random()*1.1).toFixed(2); fl.appendChild(s);
    });
    document.body.appendChild(fl);

    window.addEventListener('mousemove', function(e){
      var mx=(e.clientX/window.innerWidth-.5), my=(e.clientY/window.innerHeight-.5);
      var nodes=fl.children;
      for (var i=0;i<nodes.length;i++){ var d=+nodes[i].dataset.depth;
        nodes[i].style.marginLeft=(mx*28*d)+'px'; nodes[i].style.marginTop=(my*28*d)+'px'; }
    },{passive:true});

    bindTilt(); setTimeout(bindTilt, 1500);
  }
  function bindTilt(){
    document.querySelectorAll('.tile,.course,.paket').forEach(function(t){
      if (t._tilt) return; t._tilt=1; t.style.transition='transform .12s ease-out,box-shadow .2s'; t.style.transformStyle='preserve-3d';
      t.addEventListener('mousemove',function(e){ var r=t.getBoundingClientRect();
        var px=(e.clientX-r.left)/r.width-.5, py=(e.clientY-r.top)/r.height-.5;
        t.style.transform='perspective(900px) rotateY('+(px*9)+'deg) rotateX('+(-py*9)+'deg) translateY(-5px)'; });
      t.addEventListener('mouseleave',function(){ t.style.transform=''; });
    });
  }
  if (document.body) build(); else document.addEventListener('DOMContentLoaded', build);
})();
