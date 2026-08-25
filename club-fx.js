/* deutschoderwas club — Effekte: ruhiger Farbverlauf-Hintergrund + dezenter 3D-Tilt */
(function(){
  function build(){
    if (document.querySelector('.club-bg')) return;
    var bg = document.createElement('div'); bg.className='club-bg';
    bg.innerHTML='<div class="blob b1"></div><div class="blob b2"></div><div class="blob b3"></div><div class="blob b4"></div>';
    document.body.appendChild(bg);

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
