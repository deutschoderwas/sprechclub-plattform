/* deutschoderwas club — Üben (Selbstlern-Bereich, Duolingo-Stil)
   Daten: window.UEBUNGEN (uebungen.js). Nutzt lsGet/lsSet/toast aus konto.html (mit Fallbacks).
   Eigenständig: eigene Render-/Grading-/Gamification-Logik, koppelt nicht an die Buchungs-Engine. */
(function(){
  if(window.__ubInit) return; window.__ubInit=true;

  // ---------- kleine Helfer (Fallbacks, falls konto.html-Globals fehlen) ----
  function E(s){ return String(s==null?'':s).replace(/[&<>"]/g,function(c){return({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]);}); }
  function shuf(a){ a=a.slice(); for(var i=a.length-1;i>0;i--){var j=Math.floor(Math.random()*(i+1)); var t=a[i];a[i]=a[j];a[j]=t;} return a; }
  function nrm(s){ return String(s==null?'':s).trim().toLowerCase().replace(/\s+/g,' ').replace(/[.!?,;]+$/,''); }
  function gGet(k,d){ try{ if(window.lsGet) return lsGet(k,d); var v=JSON.parse(localStorage.getItem('ub_'+k)); return v==null?d:v; }catch(e){ return d; } }
  function gSet(k,v){ try{ if(window.lsSet) return lsSet(k,v); localStorage.setItem('ub_'+k,JSON.stringify(v)); }catch(e){} }
  function note(t){ try{ if(window.toast) return toast(t); }catch(e){} }
  function today(){ var d=new Date(); return d.getFullYear()+'-'+('0'+(d.getMonth()+1)).slice(-2)+'-'+('0'+d.getDate()).slice(-2); }
  function yest(){ var d=new Date(); d.setDate(d.getDate()-1); return d.getFullYear()+'-'+('0'+(d.getMonth()+1)).slice(-2)+'-'+('0'+d.getDate()).slice(-2); }
  function META(){ return (window.UEBUNGEN&&UEBUNGEN.meta)||{dailyGoal:30,maxHearts:5,xpPerCorrect:10}; }

  // ---------- Gamification-State -------------------------------------------
  function load(){ var s=gGet('ub',null)||{}; if(s.dayKey!==today()){ s.dayKey=today(); s.dayXP=0; } if(typeof s.xp!=='number')s.xp=0; if(typeof s.streak!=='number')s.streak=0; s.themes=s.themes||{}; return s; }
  function save(s){ gSet('ub',s); }
  function addXP(n){ var s=load(); s.xp+=n; s.dayXP=(s.dayXP||0)+n; var goal=META().dailyGoal||30;
    if(s.dayXP>=goal && s.goalDay!==today()){ if(s.goalDay===yest())s.streak=(s.streak||0)+1; else s.streak=1; s.goalDay=today(); save(s);
      setTimeout(function(){ celebrate('🔥 Tagesziel geschafft!','Streak: '+s.streak+' '+(s.streak===1?'Tag':'Tage')); },250); return s; }
    save(s); return s; }
  function markKnown(de){ if(!de)return; try{ var k=gGet('known',[])||[]; if(k.indexOf(de)<0){ k.push(de); gSet('known',k); } }catch(e){} }
  function themeKey(sk,th){ return sk+'|'+th; }

  // ---------- Audio ---------------------------------------------------------
  var curAudio=null, curBtn=null;
  function stopAudio(){ try{ if(curAudio){ curAudio.pause(); curAudio.currentTime=0; } }catch(e){}
    if(curBtn){ try{ curBtn.innerHTML='▶'; curBtn.classList.remove('playing'); }catch(e){} }
    curAudio=null; curBtn=null; try{ if(window.speechSynthesis)speechSynthesis.cancel(); }catch(e){} }
  window.ubStopAudio=stopAudio;
  function speak(text){ try{ stopAudio(); if(!window.speechSynthesis)return;
    var u=new SpeechSynthesisUtterance(text); u.lang='de-DE'; u.rate=0.92;
    var vs=(speechSynthesis.getVoices()||[]).filter(function(v){return /^de/i.test(v.lang);}); if(vs.length)u.voice=vs[0];
    speechSynthesis.speak(u);
  }catch(e){} }
  window.ubSpeak=speak;
  // Natürliche Stimme (echtes mp3) – Start/Stop-Umschalter
  window.ubPlayUrl=function(url,btn){
    if(curAudio && curBtn===btn){ stopAudio(); return; }
    stopAudio();
    try{ var a=new Audio(url); curAudio=a; curBtn=btn;
      if(btn){ btn.innerHTML='⏸'; btn.classList.add('playing'); }
      a.onended=function(){ if(curBtn){curBtn.innerHTML='▶';curBtn.classList.remove('playing');} curAudio=null; curBtn=null; };
      a.onerror=function(){ if(curBtn){curBtn.innerHTML='🔇';curBtn.classList.remove('playing');} curAudio=null; curBtn=null; };
      a.play().catch(function(){});
    }catch(e){}
  };

  // ---------- CSS -----------------------------------------------------------
  function injectCSS(){ if(document.getElementById('ubCSS'))return; var st=document.createElement('style'); st.id='ubCSS';
    st.textContent = `
    .navlink-hl{background:linear-gradient(90deg,rgba(221,0,0,.10),rgba(45,212,191,.12));font-weight:800}
    .ub-top{display:flex;gap:12px;flex-wrap:wrap;margin-bottom:18px}
    .ub-stat{flex:1;min-width:120px;background:var(--card,#fff);border:1px solid var(--border,#ECECEC);border-radius:18px;padding:14px 16px;display:flex;align-items:center;gap:12px;box-shadow:0 6px 18px rgba(0,0,0,.05)}
    .ub-stat .ico{font-size:26px}
    .ub-stat .big{font-size:22px;font-weight:800;font-family:'Space Grotesk',sans-serif;line-height:1}
    .ub-stat .lbl{font-size:12px;color:var(--soft,#5C5C5C)}
    .ub-ring{--p:0;width:54px;height:54px;border-radius:50%;background:conic-gradient(var(--turq,#2DD4BF) calc(var(--p)*1%),#eee 0);display:flex;align-items:center;justify-content:center;flex:0 0 auto}
    .ub-ring span{width:42px;height:42px;border-radius:50%;background:var(--card,#fff);display:flex;align-items:center;justify-content:center;font-weight:800;font-size:12px}
    .ub-skills{display:flex;gap:8px;flex-wrap:wrap;margin:6px 0 16px}
    .ub-skill{border:1.5px solid var(--border,#ECECEC);background:#fff;border-radius:40px;padding:9px 16px;font-weight:700;font-size:14px;cursor:pointer;display:flex;gap:7px;align-items:center;transition:.15s}
    .ub-skill.on{color:#fff}
    .ub-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(230px,1fr));gap:12px}
    .ub-card{background:var(--card,#fff);border:1px solid var(--border,#ECECEC);border-radius:18px;padding:15px 16px;box-shadow:0 6px 16px rgba(0,0,0,.05);display:flex;flex-direction:column;gap:8px;transition:transform .15s,box-shadow .2s}
    .ub-card:hover{transform:translateY(-3px);box-shadow:0 14px 28px rgba(0,0,0,.10)}
    .ub-card .emj{font-size:24px}
    .ub-card .tt{font-weight:800;font-family:'Space Grotesk',sans-serif;line-height:1.15}
    .ub-card .lv{font-size:11px;font-weight:800;letter-spacing:.04em;background:var(--bg,#FFF7E6);color:var(--soft,#5C5C5C);padding:2px 8px;border-radius:20px;align-self:flex-start}
    .ub-pbar{height:8px;border-radius:6px;background:#eee;overflow:hidden}
    .ub-pbar span{display:block;height:100%;background:var(--turq,#2DD4BF)}
    .ub-go{margin-top:4px;border:none;border-radius:40px;padding:10px;font-weight:800;color:#fff;cursor:pointer;background:var(--primary,#DD0000)}
    .ub-mix{background:linear-gradient(135deg,var(--primary,#DD0000),var(--accent,#FFCE00));color:#fff;border:none;border-radius:18px;padding:16px 20px;font-weight:800;font-size:16px;cursor:pointer;width:100%;margin-bottom:18px;box-shadow:0 10px 24px rgba(221,0,0,.25)}
    /* Session overlay */
    .ub-ov{position:fixed;inset:0;z-index:4000;background:var(--cream,#FFFCF5);display:none;flex-direction:column}
    .ub-ov.open{display:flex}
    .ub-head{display:flex;align-items:center;gap:14px;padding:14px 18px;max-width:680px;margin:0 auto;width:100%}
    .ub-x{border:none;background:none;font-size:26px;cursor:pointer;color:var(--soft,#5C5C5C);line-height:1}
    .ub-prog{flex:1;height:14px;border-radius:10px;background:#e9e4d8;overflow:hidden}
    .ub-prog span{display:block;height:100%;background:var(--turq,#2DD4BF);transition:width .3s}
    .ub-hearts{font-size:18px;letter-spacing:1px;white-space:nowrap}
    .ub-body{flex:1;overflow-y:auto;padding:8px 18px 20px;max-width:680px;margin:0 auto;width:100%}
    .ub-q{font-size:21px;font-weight:800;font-family:'Space Grotesk',sans-serif;line-height:1.25;margin:10px 0 18px}
    .ub-qimg{display:block;width:100%;max-height:230px;object-fit:cover;border-radius:14px;border:1px solid var(--border,#ECECEC);margin:6px 0 16px;box-shadow:0 8px 20px rgba(0,0,0,.08)}
    .ub-opts{display:flex;flex-direction:column;gap:10px}
    .ub-opt{border:2px solid var(--border,#ECECEC);background:#fff;border-radius:14px;padding:15px 16px;font-size:16px;text-align:left;cursor:pointer;transition:.12s;font-weight:600}
    .ub-opt:hover{border-color:var(--turq,#2DD4BF)}
    .ub-opt.sel{border-color:var(--turq,#2DD4BF);background:rgba(45,212,191,.08)}
    .ub-opt.right{border-color:#16a34a;background:#dcfce7}
    .ub-opt.wrong{border-color:#dc2626;background:#fee2e2}
    .ub-opt[disabled]{cursor:default}
    .ub-input{width:100%;border:2px solid var(--border,#ECECEC);border-radius:14px;padding:15px 16px;font-size:17px;font-family:inherit}
    .ub-input:focus{outline:none;border-color:var(--turq,#2DD4BF)}
    .ub-mrow{display:flex;gap:10px;align-items:center;margin-bottom:10px}
    .ub-mrow b{flex:0 0 42%;font-weight:700}
    .ub-mrow select{flex:1;padding:11px;border-radius:12px;border:2px solid var(--border,#ECECEC);font-size:15px;font-family:inherit}
    .ub-chips{display:flex;flex-wrap:wrap;gap:8px;margin-top:10px}
    .ub-chip{border:2px solid var(--border,#ECECEC);background:#fff;border-radius:12px;padding:9px 13px;font-size:16px;cursor:pointer;font-weight:600}
    .ub-build{min-height:54px;border-bottom:2px dashed var(--border,#ECECEC);padding:8px 0;display:flex;flex-wrap:wrap;gap:8px;align-items:center}
    .ub-play{border:none;background:var(--turq,#2DD4BF);color:#fff;border-radius:50%;width:74px;height:74px;font-size:30px;cursor:pointer;display:flex;align-items:center;justify-content:center;margin:6px auto 18px;box-shadow:0 8px 20px rgba(45,212,191,.4);transition:.15s}
    .ub-play:hover{transform:scale(1.06)}
    .ub-play.playing{background:var(--primary,#DD0000);box-shadow:0 8px 22px rgba(221,0,0,.4);animation:ubpulse 1s infinite}
    @keyframes ubpulse{0%,100%{transform:scale(1)}50%{transform:scale(1.07)}}
    .ub-word{font-size:30px;font-weight:800;font-family:'Space Grotesk',sans-serif;text-align:center;margin:6px 0}
    .ub-tip{text-align:center;color:var(--soft,#5C5C5C);margin-bottom:14px}
    .ub-fb{margin-top:14px;padding:13px 15px;border-radius:14px;font-weight:700;display:none}
    .ub-fb.ok{background:#dcfce7;color:#166534;display:block}
    .ub-fb.no{background:#fee2e2;color:#991b1b;display:block}
    .ub-foot{padding:14px 18px;max-width:680px;margin:0 auto;width:100%}
    .ub-btn{width:100%;border:none;border-radius:40px;padding:16px;font-size:16px;font-weight:800;color:#fff;cursor:pointer;background:var(--turq,#2DD4BF);box-shadow:0 8px 20px rgba(45,212,191,.35)}
    .ub-btn[disabled]{opacity:.4;cursor:default;box-shadow:none}
    .ub-btn.no{background:#dc2626}
    .ub-end{text-align:center;padding:30px 10px}
    .ub-end .em{font-size:60px}
    .ub-end h2{font-family:'Space Grotesk',sans-serif;margin:10px 0}
    .ub-end .xp{font-size:20px;font-weight:800;color:var(--primary,#DD0000)}
    .ub-cele{position:fixed;inset:0;z-index:5000;display:flex;align-items:center;justify-content:center;background:rgba(0,0,0,.35);animation:ubfade .3s}
    .ub-cele .box{background:#fff;border-radius:22px;padding:26px 30px;text-align:center;max-width:300px;box-shadow:0 20px 50px rgba(0,0,0,.3)}
    @keyframes ubfade{from{opacity:0}to{opacity:1}}
    `;
    document.head.appendChild(st);
  }
  function celebrate(t,sub){ injectCSS(); var d=document.createElement('div'); d.className='ub-cele';
    d.innerHTML='<div class="box"><div style="font-size:54px">🎉</div><h3 style="font-family:Space Grotesk,sans-serif;margin:6px 0">'+E(t)+'</h3><p style="color:#5C5C5C">'+E(sub||'')+'</p></div>';
    d.onclick=function(){ d.remove(); }; document.body.appendChild(d); setTimeout(function(){ if(d.parentNode)d.remove(); },2200); }

  // ---------- HOME ----------------------------------------------------------
  var curSkill=null;
  function skillById(id){ return (UEBUNGEN.skills||[]).filter(function(s){return s.id===id;})[0]; }
  function renderUeben(){
    injectCSS();
    var el=document.getElementById('v-ueben'); if(!el)return;
    if(!window.UEBUNGEN||!UEBUNGEN.skills||!UEBUNGEN.skills.length){ el.innerHTML='<div class="pagehead"><h1>Üben</h1></div><div class="empty">Übungen werden geladen … lade die Seite neu, falls hier länger nichts erscheint.</div>'; return; }
    var s=load(); var goal=META().dailyGoal||30; var pct=Math.min(100,Math.round((s.dayXP||0)/goal*100));
    if(!curSkill) curSkill=UEBUNGEN.skills[0].id;
    var sk=skillById(curSkill)||UEBUNGEN.skills[0];
    var head=
      '<div class="pagehead"><h1>Üben 🎮</h1><p>Üb wann du willst – Vokabeln, Grammatik, Hören und Aussprache. Sammle XP und halte deinen Streak.</p></div>'+
      '<div class="ub-top">'+
        '<div class="ub-stat"><span class="ico">🔥</span><div><div class="big">'+(s.streak||0)+'</div><div class="lbl">Tage-Streak</div></div></div>'+
        '<div class="ub-stat"><span class="ico">⭐</span><div><div class="big">'+(s.xp||0)+'</div><div class="lbl">XP gesamt</div></div></div>'+
        '<div class="ub-stat"><div class="ub-ring" style="--p:'+pct+'"><span>'+(s.dayXP||0)+'</span></div><div><div class="big">'+Math.min(s.dayXP||0,goal)+'/'+goal+'</div><div class="lbl">Tagesziel</div></div></div>'+
      '</div>'+
      '<button class="ub-mix" onclick="ubStartMix()">⚡ Schnell-Mix · 10 Aufgaben quer durch alles</button>';
    var pills='<div class="ub-skills">'+UEBUNGEN.skills.map(function(x){
        var on=x.id===curSkill; return '<button class="ub-skill'+(on?' on':'')+'" style="'+(on?'background:'+(x.color||'#DD0000')+';border-color:'+(x.color||'#DD0000'):'')+'" onclick="ubSetSkill(\''+x.id+'\')">'+x.emoji+' '+E(x.name)+'</button>';
      }).join('')+'</div>';
    var cards='<div class="ub-grid">'+sk.themes.map(function(t){
        var tp=(s.themes[themeKey(sk.id,t.id)]||{}).best||0;
        return '<div class="ub-card"><span class="emj">'+(t.emoji||sk.emoji)+'</span>'+
          (t.level?'<span class="lv">'+E(t.level)+'</span>':'')+
          '<div class="tt">'+E(t.title)+'</div>'+
          '<div class="lbl" style="font-size:12px;color:var(--soft,#5C5C5C)">'+t.exercises.length+' Aufgaben'+(tp?' · beste Runde '+tp+'%':'')+'</div>'+
          '<div class="ub-pbar"><span style="width:'+tp+'%"></span></div>'+
          '<button class="ub-go" style="background:'+(sk.color||'#DD0000')+'" onclick="ubStart(\''+sk.id+'\',\''+t.id+'\')">Üben →</button>'+
        '</div>';
      }).join('')+'</div>';
    el.innerHTML=head+pills+cards;
  }
  window.renderUeben=renderUeben;
  window.ubSetSkill=function(id){ curSkill=id; renderUeben(); };

  // ---------- SESSION -------------------------------------------------------
  var S=null; // session state
  function ensureOverlay(){ var o=document.getElementById('ubOv'); if(o)return o;
    o=document.createElement('div'); o.className='ub-ov'; o.id='ubOv';
    o.innerHTML='<div class="ub-head"><button class="ub-x" onclick="ubClose()">×</button><div class="ub-prog"><span id="ubProg" style="width:0"></span></div><div class="ub-hearts" id="ubHearts"></div></div>'+
                '<div class="ub-body" id="ubBody"></div>'+
                '<div class="ub-foot"><button class="ub-btn" id="ubBtn" disabled onclick="ubBtn()">Prüfen</button></div>';
    document.body.appendChild(o); return o; }
  function pickItems(list,n){ return shuf(list).slice(0,Math.min(n,list.length)); }

  window.ubStart=function(skId,thId){ var sk=skillById(skId); if(!sk)return; var th=sk.themes.filter(function(t){return t.id===thId;})[0]; if(!th)return;
    S={skId:skId,thId:thId,items:pickItems(th.exercises,12),idx:0,correct:0,hearts:META().maxHearts||5,answered:false,sel:null,title:th.title};
    openSession(); };
  window.ubStartMix=function(){ var all=[]; (UEBUNGEN.skills||[]).forEach(function(sk){ sk.themes.forEach(function(t){ t.exercises.forEach(function(e){ all.push(e); }); }); });
    S={skId:'mix',thId:'mix',items:pickItems(all,10),idx:0,correct:0,hearts:META().maxHearts||5,answered:false,sel:null,title:'Schnell-Mix'};
    openSession(); };

  function openSession(){ injectCSS(); var o=ensureOverlay(); o.classList.add('open');
    o.querySelector('.ub-foot').innerHTML='<button class="ub-btn" id="ubBtn" disabled onclick="ubBtn()">Prüfen</button>';
    document.body.style.overflow='hidden'; renderQ(); }
  window.ubClose=function(force){
    if(!force && S && !S.ended && (S.idx>0 || S.answered)){
      if(!confirm('Übung abbrechen?\n\nDein Fortschritt in dieser Runde geht verloren.')) return;
    }
    var o=document.getElementById('ubOv'); if(o)o.classList.remove('open'); document.body.style.overflow=''; stopAudio(); S=null; if(document.getElementById('v-ueben').classList.contains('active')) renderUeben(); };

  function hearts(){ var h=S.hearts,m=META().maxHearts||5,s=''; for(var i=0;i<m;i++)s+= i<h?'❤️':'🤍'; return s; }
  function setProg(){ document.getElementById('ubProg').style.width=Math.round(S.idx/S.items.length*100)+'%'; document.getElementById('ubHearts').innerHTML=hearts(); }

  function renderQ(){
    stopAudio();
    setProg(); S.answered=false; S.sel=null; S.order=null;
    var e=S.items[S.idx]; var body=document.getElementById('ubBody'); var btn=document.getElementById('ubBtn');
    btn.className='ub-btn'; btn.textContent='Prüfen'; btn.disabled=true;
    var h='';
    if(e.type==='choice'){
      if(e.img){ h+='<img class="ub-qimg" src="'+E(e.img)+'" alt="">'; }
      if(e.audio){ h+='<button class="ub-play" onclick="ubSpeak(\''+E(e.audio).replace(/'/g,"\\'")+'\')">🔊</button>'; }
      h+='<div class="ub-q">'+E(e.q||'Wähle die richtige Antwort:')+'</div><div class="ub-opts" id="ubOpts">'+
         shuf(e.options.map(function(o,k){return k;})).map(function(k){ return '<button class="ub-opt" data-k="'+k+'" onclick="ubChoose('+k+')">'+E(e.options[k])+'</button>'; }).join('')+'</div>';
      if(e.audio) setTimeout(function(){ speak(e.audio); },200);
    } else if(e.type==='gap'){
      h+=(e.img?'<img class="ub-qimg" src="'+E(e.img)+'" alt="">':'')+'<div class="ub-q">'+E((e.text||'').replace('___','_____'))+'</div><input class="ub-input" id="ubGap" placeholder="Antwort eintippen…" autocomplete="off" autocapitalize="off">';
      if(e.hint) h+='<div class="ub-tip" style="text-align:left;margin-top:8px">💡 '+E(e.hint)+'</div>';
    } else if(e.type==='match'){
      if(e.img){ h+='<img class="ub-qimg" src="'+E(e.img)+'" alt="">'; }
      var rs=shuf(e.pairs.map(function(p){return p.r;}));
      h+='<div class="ub-q">'+E(e.intro||'Ordne zu:')+'</div>'+e.pairs.map(function(p,k){
        return '<div class="ub-mrow"><b>'+E(p.l)+'</b><select id="ubM'+k+'" onchange="ubMatchChk()"><option value="">— wählen —</option>'+rs.map(function(r){return '<option>'+E(r)+'</option>';}).join('')+'</select></div>';
      }).join('');
    } else if(e.type==='order'){
      S.order={build:[],pool:shuf(String(e.answer).split(/\s+/).filter(Boolean).map(function(w,i){return {w:w,i:i};}))};
      h+='<div class="ub-q">Bring die Wörter in die richtige Reihenfolge:</div><div class="ub-build" id="ubBuild"></div><div class="ub-chips" id="ubPool"></div>';
      if(e.hint) h+='<div class="ub-tip" style="text-align:left;margin-top:10px">💡 '+E(e.hint)+'</div>';
    } else if(e.type==='speak'){
      h+='<div class="ub-q" style="text-align:center">🗣️ Hör zu und sprich nach</div>'+
         '<button class="ub-play" onclick="ubSpeak(\''+E(e.word).replace(/'/g,"\\'")+'\')">🔊</button>'+
         '<div class="ub-word">'+E(e.word)+'</div>'+(e.tip?'<div class="ub-tip">'+E(e.tip)+'</div>':'');
      btn.disabled=false; btn.textContent='👍 Hat geklappt';
      setTimeout(function(){ speak(e.word); },200);
    } else if(e.type==='listen'){
      if(e.img){ h+='<img class="ub-qimg" src="'+E(e.img)+'" alt="">'; }
      h+='<div class="ub-tip" style="margin-bottom:4px">'+E(e.label||'🎧 Hör gut zu – du kannst mehrmals hören')+'</div>'+
         '<button class="ub-play" onclick="ubPlayUrl(\''+E(e.audioUrl)+'\',this)">▶</button>'+
         '<div class="ub-q">'+E(e.q)+'</div><div class="ub-opts" id="ubOpts">'+
         shuf(e.options.map(function(o,k){return k;})).map(function(k){ return '<button class="ub-opt" data-k="'+k+'" onclick="ubChoose('+k+')">'+E(e.options[k])+'</button>'; }).join('')+'</div>';
    }
    h+='<div class="ub-fb" id="ubFb"></div>';
    body.innerHTML=h; body.scrollTop=0;
    if(e.type==='gap'){ var g=document.getElementById('ubGap'); g.addEventListener('input',function(){ btn.disabled=!g.value.trim(); }); g.focus(); }
    if(e.type==='order') drawOrder();
  }

  window.ubChoose=function(k){ if(S.answered)return; S.sel=k; var opts=document.getElementById('ubOpts'); Array.prototype.forEach.call(opts.children,function(b){ b.classList.toggle('sel',+b.dataset.k===k); }); document.getElementById('ubBtn').disabled=false; };
  window.ubMatchChk=function(){ var e=S.items[S.idx]; var all=e.pairs.every(function(p,k){ return document.getElementById('ubM'+k).value; }); document.getElementById('ubBtn').disabled=!all; };
  function drawOrder(){ var e=S.items[S.idx]; var b=document.getElementById('ubBuild'),p=document.getElementById('ubPool');
    b.innerHTML=S.order.build.map(function(t,i){ return '<span class="ub-chip" onclick="ubUnpick('+i+')">'+E(t.w)+'</span>'; }).join('')||'<span style="color:var(--soft,#999);font-size:14px">Wörter unten antippen…</span>';
    p.innerHTML=S.order.pool.map(function(t){ return '<span class="ub-chip" onclick="ubPick('+t.i+')">'+E(t.w)+'</span>'; }).join('');
    document.getElementById('ubBtn').disabled=S.order.build.length===0; }
  window.ubPick=function(i){ var pi=S.order.pool.map(function(t){return t.i;}).indexOf(i); if(pi<0)return; S.order.build.push(S.order.pool[pi]); S.order.pool.splice(pi,1); drawOrder(); };
  window.ubUnpick=function(p){ S.order.pool.push(S.order.build[p]); S.order.build.splice(p,1); drawOrder(); };

  window.ubBtn=function(){ if(!S)return; if(!S.answered) grade(); else next(); };

  function grade(){
    var e=S.items[S.idx]; var fb=document.getElementById('ubFb'); var ok=false; var sol='';
    if(e.type==='choice'){ ok=(S.sel===e.answer); var opts=document.getElementById('ubOpts');
      Array.prototype.forEach.call(opts.children,function(b){ var k=+b.dataset.k; b.disabled=true; b.classList.remove('sel'); if(k===e.answer)b.classList.add('right'); else if(k===S.sel)b.classList.add('wrong'); });
      sol=e.explain?e.explain:'Richtig: '+e.options[e.answer];
      if(ok&&e.w) markKnown(e.w);
    } else if(e.type==='gap'){ var v=document.getElementById('ubGap').value; document.getElementById('ubGap').disabled=true;
      ok=[e.answer].concat(e.alts||[]).some(function(a){return nrm(a)===nrm(v);}); sol='Richtig: '+e.answer;
    } else if(e.type==='match'){ ok=e.pairs.every(function(p,k){ var sel=document.getElementById('ubM'+k); sel.disabled=true; var good=nrm(sel.value)===nrm(p.r); sel.style.borderColor=good?'#16a34a':'#dc2626'; return good; }); sol=ok?'':'Schau dir die richtigen Paare nochmal an.';
    } else if(e.type==='order'){ var built=S.order.build.map(function(t){return t.w;}).join(' '); ok=nrm(built)===nrm(e.answer); sol='Richtig: '+e.answer;
    } else if(e.type==='speak'){ ok=true; }
    else if(e.type==='listen'){ ok=(S.sel===e.answer); var lopts=document.getElementById('ubOpts');
      Array.prototype.forEach.call(lopts.children,function(b){ var k=+b.dataset.k; b.disabled=true; b.classList.remove('sel'); if(k===e.answer)b.classList.add('right'); else if(k===S.sel)b.classList.add('wrong'); });
      sol=e.explain?e.explain:'Hör nochmal genau hin.'; }

    S.answered=true; var btn=document.getElementById('ubBtn');
    if(e.type!=='speak'){
      if(ok){ S.correct++; addXP(META().xpPerCorrect||10); fb.className='ub-fb ok'; fb.innerHTML='✓ Richtig! +'+(META().xpPerCorrect||10)+' XP'; }
      else { S.hearts--; setProg(); fb.className='ub-fb no'; fb.innerHTML='✗ '+E(sol); }
    } else { S.correct++; addXP(Math.round((META().xpPerCorrect||10)/2)); fb.className='ub-fb ok'; fb.innerHTML='Klasse! Weiter so. +'+Math.round((META().xpPerCorrect||10)/2)+' XP'; }
    if(e.type==='listen'){ fb.innerHTML+='<div style="margin-top:10px;padding:11px 13px;background:#fff;border:1px solid var(--border,#ECECEC);border-radius:12px;font-weight:500;color:#333;line-height:1.5">📝 <b>Das hast du gehört:</b><br>'+E(e.transcript)+'</div>'; }
    btn.className='ub-btn'+((!ok&&e.type!=='speak')?' no':''); btn.disabled=false;
    btn.textContent=(S.idx>=S.items.length-1)?'Abschließen':'Weiter';
    if(S.hearts<=0 && e.type!=='speak' && !ok){ btn.textContent='Runde beenden'; }
  }

  function next(){ var e=S.items[S.idx];
    if(S.hearts<=0){ return end(true); }
    S.idx++; if(S.idx>=S.items.length) return end(false);
    renderQ();
  }

  function end(outOfHearts){
    S.ended=true;
    var total=S.items.length; var pct=Math.min(100,Math.round(S.correct/total*100));
    // Themen-Fortschritt (beste Runde) speichern
    if(S.thId!=='mix'){ var st=load(); var key=themeKey(S.skId,S.thId); var prev=(st.themes[key]||{}).best||0; if(pct>prev){ st.themes[key]={best:pct}; save(st); } }
    var em = outOfHearts?'💔':(pct>=80?'🏆':(pct>=50?'💪':'🙂'));
    var msg= outOfHearts?'Keine Herzen mehr – kein Problem, übernächste Runde klappt’s besser!':(pct>=80?'Stark gemacht!':(pct>=50?'Gut – dranbleiben!':'Übung macht den Meister.'));
    var body=document.getElementById('ubBody');
    body.innerHTML='<div class="ub-end"><div class="em">'+em+'</div><h2>'+E(msg)+'</h2>'+
      '<p>'+S.correct+' von '+total+' richtig</p>'+
      '<p class="xp">+'+ (S.correct*(META().xpPerCorrect||10)) +' XP</p></div>';
    document.getElementById('ubProg').style.width='100%';
    var foot=document.querySelector('#ubOv .ub-foot');
    foot.innerHTML='<button class="ub-btn" onclick="ubAgain()">Nochmal üben</button>'+
                   '<button class="ub-btn" style="background:#fff;color:var(--ink,#1A1A1A);border:2px solid var(--border,#ECECEC);box-shadow:none;margin-top:10px" onclick="ubClose()">Fertig</button>';
  }
  window.ubAgain=function(){ var foot=document.querySelector('#ubOv .ub-foot'); foot.innerHTML='<button class="ub-btn" id="ubBtn" disabled onclick="ubBtn()">Prüfen</button>';
    if(S.thId==='mix') ubStartMix(); else ubStart(S.skId,S.thId); };

})();
