/* deutschoderwas club — Üben (Selbstlern-Bereich, Duolingo-Stil)
   Daten: window.UEBUNGEN (uebungen.js). Nutzt lsGet/lsSet/toast aus konto.html (mit Fallbacks).
   Eigenständig: eigene Render-/Grading-/Gamification-Logik, koppelt nicht an die Buchungs-Engine. */
(function(){
  if(window.__ubInit) return; window.__ubInit=true;

  // ---------- kleine Helfer (Fallbacks, falls konto.html-Globals fehlen) ----
  function E(s){ return String(s==null?'':s).replace(/[&<>"]/g,function(c){return({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]);}); }
  function shuf(a){ a=a.slice(); for(var i=a.length-1;i>0;i--){var j=Math.floor(Math.random()*(i+1)); var t=a[i];a[i]=a[j];a[j]=t;} return a; }
  function nrm(s){ return String(s==null?'':s).trim().toLowerCase().replace(/\s+/g,' ').replace(/[.!?,;]+$/,''); }
  /* --- Hilfen für Wortkarte, Tippen, Buchstaben, Artikel ---------------- */
  var ART_FARBE={der:'#2F6FD0',die:'#D0407A',das:'#1E9E63'};
  function ohneArt(s){ return String(s==null?'':s).replace(/^(der|die|das)\s+/i,'').trim(); }
  /* Beispielsätze markieren das Zielwort zwischen §…§ — daraus wird der
     gelbe Textmarker, so wie im Vokabeltrainer. */
  function satzHtml(s){ if(!s) return '';
    return E(String(s)).replace(/§([^§]+)§/g,function(_,w){ return '<mark>'+w+'</mark>'; }); }
  function satzRein(s){ return String(s==null?'':s).replace(/§/g,''); }
  /* Ein Tippfehler soll nicht wie ein Fehler behandelt werden: wer
     „Bewerbnug" schreibt, kann das Wort. Ab fünf Buchstaben ist ein
     Dreher oder ein fehlender Buchstabe erlaubt. */
  function abstand(a,b){ a=String(a);b=String(b);
    var m=a.length,n=b.length,i,j,v0=[],v1=[];
    if(Math.abs(m-n)>1) return 9;
    for(j=0;j<=n;j++) v0[j]=j;
    for(i=0;i<m;i++){ v1[0]=i+1;
      for(j=0;j<n;j++){ var c=a.charAt(i)===b.charAt(j)?0:1;
        v1[j+1]=Math.min(v1[j]+1,v0[j+1]+1,v0[j]+c); }
      for(j=0;j<=n;j++) v0[j]=v1[j]; }
    return v0[n]; }
  function fastGleich(a,b){ a=nrm(a); b=nrm(b);
    if(a===b) return true;
    if(b.length>=5 && abstand(a,b)<=1) return true;
    return false; }
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
  /* Langsamer vorlesen — fuer Lernende oft wichtiger als die normale Fassung. */
  function speakSlow(text){ try{ stopAudio(); if(!window.speechSynthesis)return;
    var u=new SpeechSynthesisUtterance(text); u.lang='de-DE'; u.rate=0.6;
    var vs=(speechSynthesis.getVoices()||[]).filter(function(v){return /^de/i.test(v.lang);}); if(vs.length)u.voice=vs[0];
    speechSynthesis.speak(u);
  }catch(e){} }
  window.ubSpeakSlow=speakSlow;
  /* Zwei kleine Knoepfe: normal und langsam. Fuer jeden Satz, den man hoeren koennen sollte. */
  function tonKnoepfe(text){
    if(!text) return '';
    var t=String(text).replace(/<[^>]+>/g,'').replace(/_{2,}/g,' … ').replace(/\s+/g,' ').trim();
    if(!t) return '';
    /* Der Text landet in einem onclick-Attribut: Anfuehrungszeichen und
       Zeilenumbrueche wuerden es zerreissen, also vorher entschaerfen. */
    var q=t.replace(/[„“”"]/g,'').replace(/\\/g,'\\\\').replace(/'/g,"\\'").replace(/[\r\n]+/g,' ');
    return '<div class="ub-ton">'+
      '<button class="ub-play ub-ton-b" title="Vorlesen" onclick="ubSpeak(\''+q+'\')">🔊</button>'+
      '<button class="ub-play ub-ton-b" title="Langsam vorlesen" onclick="ubSpeakSlow(\''+q+'\')">🐢</button>'+
      '</div>';
  }
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

  // ---------- Shadowing: Aufnahme & Vergleich ------------------------------
  var shRec=null, shChunks=[], shStream=null, shUrl=null;
  function shadowReset(){ try{ if(shRec&&shRec.state==='recording')shRec.stop(); }catch(e){} try{ if(shStream)shStream.getTracks().forEach(function(t){t.stop();}); }catch(e){} shStream=null; shRec=null; if(shUrl){try{URL.revokeObjectURL(shUrl);}catch(e){}} shUrl=null; }
  window.ubPlayMine=function(btn){ if(shUrl) window.ubPlayUrl(shUrl,btn); };
  window.ubRecToggle=function(){
    var b=document.getElementById('ubRecBtn'); if(!b)return;
    if(shRec && shRec.state==='recording'){ try{shRec.stop();}catch(e){} return; }
    if(!navigator.mediaDevices||!window.MediaRecorder){ alert('Dein Browser unterstützt leider keine Sprachaufnahme.'); return; }
    stopAudio();
    navigator.mediaDevices.getUserMedia({audio:true}).then(function(stream){
      shStream=stream; shChunks=[];
      var mime=MediaRecorder.isTypeSupported('audio/webm')?'audio/webm':(MediaRecorder.isTypeSupported('audio/mp4')?'audio/mp4':'');
      shRec=new MediaRecorder(stream, mime?{mimeType:mime}:undefined);
      shRec.ondataavailable=function(ev){ if(ev.data&&ev.data.size)shChunks.push(ev.data); };
      shRec.onstop=function(){ if(shStream){shStream.getTracks().forEach(function(t){t.stop();});shStream=null;}
        if(shUrl){try{URL.revokeObjectURL(shUrl);}catch(e){}}
        var blob=new Blob(shChunks,{type:(shRec&&shRec.mimeType)||'audio/webm'}); shUrl=URL.createObjectURL(blob);
        b.innerHTML='🎙️ Nochmal aufnehmen'; b.classList.remove('rec'); shadowCmp(); };
      shRec.start(); b.innerHTML='⏹ Aufnahme stoppen'; b.classList.add('rec');
      var c=document.getElementById('ubCmp'); if(c)c.innerHTML='<div class="ub-tip" style="color:#dc2626;font-weight:700">🔴 Aufnahme läuft … sprich den Satz nach</div>';
    }).catch(function(){ alert('Bitte erlaube den Mikrofon-Zugriff, um dich aufzunehmen.'); });
  };
  function shadowCmp(){ var c=document.getElementById('ubCmp'); if(!c||!S)return; var e=S.items[S.idx];
    c.innerHTML='<div class="ub-cmp"><button class="ub-cmp-btn" onclick="ubPlayUrl(\''+E(e.audioUrl)+'\',this)">🔊 Original</button>'+
      '<button class="ub-cmp-btn mine" onclick="ubPlayMine(this)">🎧 Deine Aufnahme</button></div>'+
      '<div class="ub-tip">Klingt es ähnlich? Wiederhol ruhig ein paar Mal – dann unten auf „Fertig".</div>'; }

  // ---------- CSS -----------------------------------------------------------
  function injectCSS(){ if(document.getElementById('ubCSS'))return; var st=document.createElement('style'); st.id='ubCSS';
    st.textContent = `
    /* Alles, was zu Üben gehört, rechnet Polster und Rahmen in die Breite ein.
       Ohne diese Zeile ragten Kopfzeile, Eingabefeld und Knöpfe auf dem Handy
       bis zu 36 px rechts aus dem Bild. */
    [class^="ub-"],[class*=" ub-"],#ubOv,#ubOv *{box-sizing:border-box}
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
    .ub-niv{display:flex;align-items:center;gap:10px;margin:26px 0 10px;font-size:16px;font-weight:800;color:var(--ink,#2B2B2B)}
    .ub-niv:first-child{margin-top:8px}
    .ub-niv .lv{display:inline-flex;align-items:center;justify-content:center;min-width:38px;height:26px;padding:0 9px;border-radius:40px;background:var(--rot,#DD0000);color:#fff;font-size:13px;font-weight:800;letter-spacing:.3px}
    .ub-niv .anz{margin-left:auto;font-size:13px;font-weight:600;color:var(--mute,#9A948B)}
    .ub-grid[hidden]{display:none}
    .ub-grid+.ub-grid{margin-top:12px}
    .ub-mehrbtn{width:100%;margin-top:12px;border:1.5px solid var(--border,#ECECEC);background:var(--card,#fff);border-radius:40px;padding:13px 18px;font-weight:700;font-size:14px;cursor:pointer;color:var(--ink,#2B2B2B);min-height:48px}
    .ub-mehrbtn:hover{border-color:var(--rot,#DD0000);color:var(--rot,#DD0000)}
    @media(max-width:640px){.ub-niv{font-size:15px;margin:20px 0 8px}.ub-niv .anz{font-size:12px}}
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
    .ub-x{border:none;background:none;font-size:26px;cursor:pointer;color:var(--soft,#5C5C5C);line-height:1;
      min-width:44px;min-height:44px;display:flex;align-items:center;justify-content:center;border-radius:50%}
    .ub-x:hover{background:rgba(32,33,31,.06)}
    .ub-ende{font-size:22px}
    .ub-prog{flex:1;height:14px;border-radius:10px;background:#e9e4d8;overflow:hidden}
    .ub-prog span{display:block;height:100%;background:var(--turq,#2DD4BF);transition:width .3s}
    .ub-hearts{font-size:18px;letter-spacing:1px;white-space:nowrap}
    .ub-body{flex:1;overflow-y:auto;padding:8px 18px 20px;max-width:680px;margin:0 auto;width:100%}
    .ub-q{font-size:21px;font-weight:800;font-family:'Space Grotesk',sans-serif;line-height:1.25;margin:10px 0 18px}
    .ub-thbild{position:relative;border-radius:14px;overflow:hidden;margin:0 0 16px;background:#ECECEC}
    .ub-thbild img{display:block;width:100%;height:110px;object-fit:cover;opacity:.92}
    .ub-thbild span{position:absolute;left:0;right:0;bottom:0;padding:20px 13px 9px;color:#fff;font-weight:800;font-size:14px;background:linear-gradient(to top,rgba(9,14,20,.85),rgba(9,14,20,0))}
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
    /* Kleine Tonknoepfe an jeder Aufgabe: normal und langsam. */
    .ub-ton{display:flex;gap:8px;justify-content:center;margin:-6px 0 16px}
    .ub-ton-b{width:46px;height:46px;font-size:19px;margin:0;box-shadow:0 3px 10px rgba(45,212,191,.28)}
    .ub-loes{display:flex;align-items:center;gap:10px;margin-top:12px;padding:10px 12px;background:#fff;
      border:1px solid var(--border,#ECECEC);border-radius:12px;text-align:left;line-height:1.45;font-weight:600;color:#333}
    .ub-loes .ub-ton{margin:0;flex:0 0 auto}
    .ub-loes .ub-ton-b{width:40px;height:40px;font-size:17px}
    /* Lernpfad: Schrittnummer und das, was vorher sitzen sollte. */
    .ub-schritt{display:inline-flex;align-items:center;align-self:flex-start;width:fit-content;
      gap:5px;font-size:12px;font-weight:800;color:#7C3AED;background:#F3EDFF;
      border-radius:999px;padding:3px 9px;letter-spacing:.02em;margin:2px 0 0}
    .ub-warum{font-size:13px;line-height:1.5;color:#555;margin:6px 0 2px}
    .ub-vorher{font-size:12px;line-height:1.45;color:#8A8079;margin-top:6px}
    .ub-vorher b{color:#5A5048;font-weight:700}
    .ub-schritt,.ub-warum,.ub-vorher{overflow-wrap:anywhere}
    /* Drei Kacheln nebeneinander brauchen 384px — auf schmalen Handys
       lief die Seite dadurch seitlich weg. Ab hier zwei pro Zeile. */
    .ub-stat > div{min-width:0}
    @media(max-width:430px){
      .ub-top{gap:8px}
      .ub-stat{min-width:calc(50% - 6px);padding:12px 13px;gap:9px}
      .ub-stat .ico{font-size:22px}
      .ub-stat .big{font-size:19px}
    }
    @media(max-width:520px){ .ub-ton-b{width:52px;height:52px;font-size:21px} }
    /* Lesen: der Text steht ruhig da, die Frage kommt darunter. */
    .ub-lestext{text-align:left;background:#fff;border:1px solid var(--border,#ECECEC);border-radius:14px;
      padding:14px 16px;font-size:16px;line-height:1.7;margin:4px 0 14px;color:#222}
    .ub-lestext p{margin:0 0 10px} .ub-lestext p:last-child{margin:0}
    /* Schreiben: eigenes Feld, danach die Musterloesung. */
    .ub-schreib{width:100%;border:2px solid var(--border,#ECECEC);border-radius:14px;padding:12px 14px;
      font:inherit;font-size:16px;line-height:1.6;resize:vertical;min-height:110px;background:#fff;color:#222}
    .ub-schreib:focus{outline:none;border-color:var(--turq,#2DD4BF)}
    .ub-muster{text-align:left;margin-top:12px;padding:12px 14px;background:#F4FDFB;
      border:1px solid #A7E8DE;border-radius:14px;font-size:16px;line-height:1.6;color:#1f3f3a}
    .ub-zaehl{text-align:right;font-size:13px;color:#888;margin-top:6px}
    /* Fehlersuche: jedes Wort ist antippbar. */
    .ub-fsatz{display:flex;flex-wrap:wrap;gap:6px;justify-content:center;margin:8px 0 4px}
    .ub-fw{border:2px solid transparent;background:#F3F3F1;border-radius:10px;padding:8px 11px;
      font-size:17px;font-weight:600;cursor:pointer;transition:.12s;min-height:44px}
    .ub-fw:hover:not(.aus){background:#FFF3CC}
    .ub-fw.aus{cursor:default}
    .ub-fw.gut{background:#E7F7EC;border-color:#16a34a}
    .ub-fw.schlecht{background:#FDECEA;border-color:#dc2626}
    /* Lange Komposita — Krankenversicherungskarte, Aufenthaltserlaubnis —
       liefen auf schmalen Schirmen seitlich aus dem Bild. Sie duerfen
       jetzt umbrechen, und die Schrift wird auf dem Handy etwas kleiner. */
    .ub-word{font-size:30px;font-weight:800;font-family:'Space Grotesk',sans-serif;text-align:center;margin:6px 0;
             overflow-wrap:anywhere;hyphens:auto;max-width:100%}
    @media(max-width:520px){ .ub-word{font-size:25px} }
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
    /* vibrante Übersicht */
    .ub-hero{background:linear-gradient(120deg,rgba(221,0,0,.10),rgba(255,206,0,.10) 55%,rgba(45,212,191,.16));border:1px solid var(--border,#ECECEC);border-radius:24px;padding:22px 24px;margin-bottom:16px;box-shadow:0 10px 26px rgba(0,0,0,.05)}
    .ub-hero h1{font-family:'Space Grotesk',sans-serif;font-size:30px;margin:0;line-height:1.05}
    .ub-hero p{color:var(--soft,#5C5C5C);margin:8px 0 0;max-width:640px}
    .ub-tcard{background:var(--card,#fff);border:1px solid var(--border,#ECECEC);border-radius:22px;overflow:hidden;box-shadow:0 10px 24px rgba(0,0,0,.06);display:flex;flex-direction:column;transition:transform .18s,box-shadow .25s}
    .ub-tcard:hover{transform:translateY(-6px);box-shadow:0 22px 44px rgba(0,0,0,.13)}
    .ub-band{height:92px;position:relative;display:flex;align-items:center;justify-content:center}
    .ub-bild{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;opacity:.92}
    .ub-band>*:not(.ub-bild){position:relative}
    .ub-band::after{content:'';position:absolute;inset:0;background:radial-gradient(120px 80px at 80% 0,rgba(255,255,255,.35),transparent)}
    .ub-emoji{width:60px;height:60px;border-radius:50%;background:rgba(255,255,255,.94);display:flex;align-items:center;justify-content:center;font-size:30px;font-weight:800;box-shadow:0 8px 18px rgba(0,0,0,.2);z-index:1}
    .ub-lv2{position:absolute;top:10px;left:12px;background:rgba(0,0,0,.28);color:#fff;font-size:11px;font-weight:800;letter-spacing:.04em;padding:3px 9px;border-radius:20px}
    .ub-done{position:absolute;top:10px;right:12px;background:rgba(255,255,255,.92);color:#16a34a;font-size:11px;font-weight:800;padding:3px 9px;border-radius:20px}
    .ub-tbody{padding:14px 16px 16px;display:flex;flex-direction:column;gap:9px;flex:1}
    .ub-tbody .tt{font-family:'Space Grotesk',sans-serif;font-weight:800;font-size:16px;line-height:1.15}
    .ub-tbody .meta{font-size:12.5px;color:var(--soft,#5C5C5C)}
    .ub-go2{margin-top:4px;border:none;border-radius:40px;padding:11px;font-weight:800;color:#fff;cursor:pointer;font-family:inherit;font-size:14.5px;transition:filter .15s}
    .ub-go2:hover{filter:brightness(1.08)}
    .ub-lesson{display:block;text-align:center;font-size:13px;font-weight:700;color:var(--soft,#5C5C5C);text-decoration:none;padding:8px;border-radius:30px;border:1.5px solid var(--border,#ECECEC);transition:.15s}
    /* Tippflaechen am Handy: ein Daumen braucht 46px, nicht 34. */
    @media(max-width:640px){
      .ub-go2{min-height:48px;padding:13px}
      .ub-lesson{min-height:46px;padding:13px 8px;display:flex;align-items:center;justify-content:center}
      .ub-skill{min-height:46px;padding:11px 16px}
      .ub-mix{min-height:52px}
    }
    .ub-lesson:hover{border-color:var(--turq,#2DD4BF);color:var(--ink,#1A1A1A);background:rgba(45,212,191,.07)}
    .ub-recbtn{border:2px solid #7C3AED;background:#fff;color:#7C3AED;border-radius:40px;padding:13px 22px;font-weight:800;font-size:16px;cursor:pointer;font-family:inherit;transition:.15s}
    .ub-recbtn:hover{background:rgba(124,58,237,.08)}
    .ub-recbtn.rec{background:#dc2626;border-color:#dc2626;color:#fff;animation:ubpulse 1s infinite}
    .ub-cmp{display:flex;gap:10px;justify-content:center;margin:14px 0 4px;flex-wrap:wrap}
    .ub-cmp-btn{border:2px solid var(--border,#ECECEC);background:#fff;border-radius:40px;padding:11px 18px;font-weight:700;font-size:15px;cursor:pointer;font-family:inherit}
    .ub-cmp-btn.mine{border-color:#7C3AED;color:#7C3AED}
    .ub-cmp-btn.playing{background:var(--turq,#2DD4BF);color:#fff;border-color:var(--turq,#2DD4BF)}

    /* ---- Wortkarte, Tippen, Buchstabensalat, Artikel ----
       Die vier Formen, die aus dem Wiedererkennen ein Können machen. */
    .ub-karte{background:var(--card,#fff);border:2px solid var(--border,#ECECEC);border-radius:20px;padding:16px 15px 18px;text-align:center;box-shadow:0 8px 22px rgba(0,0,0,.06)}
    .ub-karte .kimg{display:block;width:100%;height:150px;object-fit:cover;border-radius:14px;margin-bottom:12px}
    .ub-karte .em{font-size:50px;line-height:1;display:block;margin-bottom:4px}
    .ub-karte .wort{font-size:26px;font-weight:800;font-family:'Space Grotesk',sans-serif;line-height:1.22;display:flex;gap:9px;align-items:center;justify-content:center;flex-wrap:wrap;overflow-wrap:anywhere;max-width:100%}
    .ub-karte .bed{margin-top:9px;font-size:16px;color:var(--soft,#5C5C5C);line-height:1.5}
    .ub-art{display:inline-flex;align-items:center;justify-content:center;padding:3px 13px;border-radius:30px;font-size:15px;font-weight:800;color:#fff;background:var(--af,#2F6FD0)}
    .ub-satzbox{margin-top:14px;background:var(--bg,#FFF7E6);border:1.5px solid var(--border,#ECECEC);border-radius:14px;padding:12px 14px;font-size:16.5px;line-height:1.55;text-align:left}
    .ub-satzbox mark{background:#FFE100;padding:1px 4px;border-radius:5px;font-weight:800;color:var(--ink,#20211F)}
    .ub-regel{margin-top:12px;text-align:left;display:flex;flex-direction:column;gap:9px}
    .ub-regel .z{background:var(--bg,#FFF7E6);border-left:4px solid var(--turq,#2DD4BF);border-radius:0 12px 12px 0;padding:10px 13px}
    .ub-regel .z b{display:block;font-size:16.5px;line-height:1.45;font-weight:700}
    .ub-regel .z span{display:block;margin-top:3px;font-size:14px;color:var(--soft,#5C5C5C);line-height:1.45}
    .ub-bed{font-size:19px;line-height:1.45;text-align:center;color:var(--ink,#2B2B2B);font-weight:600;margin:2px 0 16px}
    .ub-emj{font-size:46px;text-align:center;display:block;margin:2px 0 6px;line-height:1}
    .ub-drei{display:flex;gap:10px}
    .ub-drei .ub-opt{flex:1;text-align:center;font-size:19px;font-weight:800}
    .ub-chips.buch .ub-chip{min-width:46px;text-align:center;font-size:19px;font-weight:800;letter-spacing:.5px}
    .ub-build.buch{letter-spacing:1px}
    .ub-kimgs{display:block;width:100%;max-height:170px;object-fit:cover;border-radius:14px;margin:0 0 14px}
    /* Der Wiederholen-Knopf steht neben dem Schnell-Mix und sagt,
       wie viele Wörter heute dran sind. Ohne faellige Woerter kommt
       er gar nicht erst. */
    .ub-zwei{display:flex;gap:10px;flex-wrap:wrap;margin-bottom:18px}
    .ub-zwei>button{flex:1 1 240px;margin-bottom:0}
    .ub-wdh{background:linear-gradient(135deg,#1990A4,#2DD4BF);color:#fff;border:none;border-radius:18px;padding:16px 20px;font-weight:800;font-size:16px;cursor:pointer;box-shadow:0 10px 24px rgba(25,144,164,.25);min-height:52px}
    .ub-wmark{display:inline-block;background:#FFE100;color:#20211F;border-radius:20px;padding:2px 10px;font-size:12.5px;font-weight:800;margin-bottom:10px}
    `;
    document.head.appendChild(st);
  }
  function celebrate(t,sub){ injectCSS(); var d=document.createElement('div'); d.className='ub-cele';
    d.innerHTML='<div class="box"><div style="font-size:54px">🎉</div><h3 style="font-family:Space Grotesk,sans-serif;margin:6px 0">'+E(t)+'</h3><p style="color:#5C5C5C">'+E(sub||'')+'</p></div>';
    d.onclick=function(){ d.remove(); }; document.body.appendChild(d); setTimeout(function(){ if(d.parentNode)d.remove(); },2200); }

  // ---------- HOME ----------------------------------------------------------
  var curSkill=null;
  function skillById(id){ return (UEBUNGEN.skills||[]).filter(function(s){return s.id===id;})[0]; }
  // Emoji je Thema (für vibrante Karten)
  var UB_EMOJI={arbeit:'💼',bildung:'📚',einkaufen:'🛒',essen:'🍳',gefuehle:'😊',gesundheit:'🩺',medien:'📱',natur:'🌳',persoenlichkeit:'😎',redewendungen:'💬',reisen:'✈️',stadt:'🚉','starke-adjektive':'💪','typisch-deutsch':'🇩🇪',wohnen:'🛋️',adjektivdeklination:'🧩',genitiv:'🔑','indirekte-rede':'🗣️',konjunktiv2:'💭',konnektoren:'🔗',nebensaetze:'🧷','passiv-praesens':'🔁','passiv-vergangenheit':'🕰️','perfekt-praeteritum':'⏳',relativsaetze:'📎','temporale-nebensaetze':'⏰',wechselpraepositionen:'📍',ch:'🔤',r:'🌀','s-z-ss':'🔊',satzmelodie:'🎵',umlaute:'Ä','v-w-f':'💨',vokale:'🅰️',wortakzent:'📢'};
  var UB_PAL=[['#DD0000','#FF7A00'],['#2563EB','#2DD4BF'],['#13A89A','#16a34a'],['#FF7A00','#FFCE00'],['#E83E8C','#7C3AED'],['#DD0000','#E83E8C'],['#2563EB','#7C3AED'],['#16a34a','#2DD4BF'],['#7C3AED','#2563EB'],['#FF7A00','#DD0000'],['#2DD4BF','#2563EB'],['#13A89A','#2563EB'],['#DD0000','#FFCE00'],['#FFCE00','#FF7A00'],['#7C3AED','#E83E8C']];
  // Passende Lektionsseite je Übungs-Thema (1:1-Verzahnung)
  /* Der Link zur Lektion wurde frueher aus dem Themennamen geraten
     (wortschatz-<id>-b1.html). Von 169 solchen Links fuehrten 118 auf
     eine Seite, die es nicht gibt. Jetzt wird nachgeschlagen, was
     wirklich im Ordner liegt — steht nichts drin, gibt es auch
     keinen Knopf. Der Katalog kommt aus bau/mach-katalog.js. */
  /* Bei 60 Themen stand im Feld bild eine Unsplash-Adresse: ein
     fremdes Foto von einem fremden Server. Der Katalog haelt
     stattdessen unser eigenes Themenbild bereit, sonst das
     Szenenbild des Bereichs im Amanda-Stil. */
  function bildVon(t){
    var k=window.THEMA_BILD;
    if(k && k[t.id]) return k[t.id];
    if(t.bild && String(t.bild).indexOf('http')!==0) return t.bild;
    return '';
  }

  function lessonUrl(skId,thId){ if(!skId||skId==='mix'||skId==='shadowing'||!thId)return null;
    var k=window.LEKTION_ZU; return (k && k[skId+':'+thId]) || null;
  }

  // ---------- Shadowing-Daten (native Audios, aufsteigend A1 -> C1) --------
  var SHADOW_CDN='https://d8j0ntlcm91z4.cloudfront.net/user_38tIQPWpEsaUmk18tYN8mskaaAF/';
  var SHADOW_ITEMS=[
    {type:'shadow',level:'A1',text:'Guten Morgen! Wie geht es dir heute?',audioUrl:SHADOW_CDN+'hf_20260621_105327_201627b4-0d95-4575-9fab-263b70d5b1d7.mp3',tip:'Freundlich und melodisch sprechen.'},
    {type:'shadow',level:'A1',text:'Ich hätte gern einen Kaffee, bitte.',audioUrl:SHADOW_CDN+'hf_20260621_105329_b71adfc9-726a-45c7-9164-8e1fa702f15e.mp3',tip:'Höflicher Ton – „hätte" mit langem ä.'},
    {type:'shadow',level:'A2',text:'Könnten Sie mir bitte kurz helfen?',audioUrl:SHADOW_CDN+'hf_20260621_105331_a4469e51-e21c-4bea-be98-a1f3b2c7f9e8.mp3',tip:'Den Umlaut „ö" in „könnten" rund aussprechen.'},
    {type:'shadow',level:'A2',text:'Am Wochenende gehe ich gern im Park spazieren.',audioUrl:SHADOW_CDN+'hf_20260621_105332_011ce728-1080-4efc-bf68-f9e62be436b1.mp3',tip:'Gleichmäßiger Rhythmus, „sch" in „spazieren".'},
    {type:'shadow',level:'B1',text:'Ich würde mich sehr freuen, wenn das klappt.',audioUrl:SHADOW_CDN+'hf_20260621_105333_5e392bf0-ec1f-40cd-bbcb-77180f3aa688.mp3',tip:'„würde" mit ü; Satzmelodie leicht steigend.'},
    {type:'shadow',level:'B1',text:'Entschuldigung, ich habe Sie leider nicht ganz verstanden.',audioUrl:SHADOW_CDN+'hf_20260621_105401_2ae6c6f8-3ec1-48e2-8c60-abce50ecd085.mp3',tip:'Deutlich und nicht zu schnell.'},
    {type:'shadow',level:'B2',text:'Meiner Meinung nach sollten wir das noch einmal in Ruhe überdenken.',audioUrl:SHADOW_CDN+'hf_20260621_105402_4221f936-78b4-4c97-a661-3498bd6e7aa6.mp3',tip:'Längerer Satz – in zwei Atemgruppen sprechen.'},
    {type:'shadow',level:'B2',text:'Trotz des schlechten Wetters hatten wir richtig viel Spaß.',audioUrl:SHADOW_CDN+'hf_20260621_105403_6c6548d1-cf68-4911-9bc7-6128619f2cdb.mp3',tip:'„Spaß" mit langem a und scharfem ß.'},
    {type:'shadow',level:'C1',text:'Ehrlich gesagt fällt es mir schwer, das alles nachzuvollziehen.',audioUrl:SHADOW_CDN+'hf_20260621_105405_92f3c151-fb4e-46bb-a928-d885ac2f7464.mp3',tip:'Betonung auf „schwer" und „nachzuvollziehen".'},
    {type:'shadow',level:'C1',text:'Lassen Sie uns das Thema beim nächsten Treffen ausführlich vertiefen.',audioUrl:SHADOW_CDN+'hf_20260621_105406_da2ebb51-d4dc-481c-8af8-2bb1e353b1f2.mp3',tip:'Formell und ruhig; klare Endung bei „vertiefen".'}
  ];
  function ensureShadow(){ if(!window.UEBUNGEN||!UEBUNGEN.skills)return;
    if(UEBUNGEN.skills.some(function(s){return s.id==='shadowing';}))return;
    UEBUNGEN.skills.push({id:'shadowing',name:'Shadowing',emoji:'🗣️',color:'#7C3AED',themes:[
      {id:'shadowing',title:'Aussprache: Nachsprechen & Aufnehmen',level:'A1–C1',emoji:'🎙️',exercises:SHADOW_ITEMS}
    ]}); }

  function renderUeben(){
    injectCSS();
    var el=document.getElementById('v-ueben'); if(!el)return;
    if(!window.UEBUNGEN||!UEBUNGEN.skills||!UEBUNGEN.skills.length){ el.innerHTML='<div class="pagehead"><h1>Üben</h1></div><div class="empty">Übungen werden geladen … lade die Seite neu, falls hier länger nichts erscheint.</div>'; return; }
    ensureShadow();
    /* Die zusätzlichen Übungsformen entstehen erst im Browser. Wenn
       vielfalt.js vor den Daten geladen wurde, holt es das hier nach. */
    try{ if(window.VIELFALT && VIELFALT.alle) VIELFALT.alle(); }catch(e){}
    var s=load(); var goal=META().dailyGoal||30; var pct=Math.min(100,Math.round((s.dayXP||0)/goal*100));
    var fael=wdhFaellig().length;
    if(!curSkill) curSkill=UEBUNGEN.skills[0].id;
    var sk=skillById(curSkill)||UEBUNGEN.skills[0];
    var head=
      '<div class="ub-hero"><h1>Üben 🎮</h1><p>Üb wann du willst – Vokabeln, Grammatik, Hören & Aussprache. Sammle XP, halte deinen Streak und öffne zu jedem Thema die passende Lektion.</p></div>'+
      '<div class="ub-top">'+
        '<div class="ub-stat"><span class="ico">🔥</span><div><div class="big">'+(s.streak||0)+'</div><div class="lbl">Tage-Streak</div></div></div>'+
        '<div class="ub-stat"><span class="ico">⭐</span><div><div class="big">'+(s.xp||0)+'</div><div class="lbl">XP gesamt</div></div></div>'+
        '<div class="ub-stat"><div class="ub-ring" style="--p:'+pct+'"><span>'+(s.dayXP||0)+'</span></div><div><div class="big">'+Math.min(s.dayXP||0,goal)+'/'+goal+'</div><div class="lbl">Tagesziel</div></div></div>'+
      '</div>'+
      '<div class="ub-zwei">'+
        '<button class="ub-mix" onclick="ubStartMix()">⚡ Schnell-Mix · 10 Aufgaben quer durch alles</button>'+
        (fael>0?'<button class="ub-wdh" onclick="ubStartWdh()">🔁 Wiederholen · '+fael+(fael===1?' Wort':' Wörter')+' sind heute dran</button>':'')+
      '</div>';
    var pills='<div class="ub-skills">'+UEBUNGEN.skills.map(function(x){
        var on=x.id===curSkill; return '<button class="ub-skill'+(on?' on':'')+'" style="'+(on?'background:'+(x.color||'#DD0000')+';border-color:'+(x.color||'#DD0000'):'')+'" onclick="ubSetSkill(\''+x.id+'\')">'+x.emoji+' '+E(x.name)+'</button>';
      }).join('')+'</div>';
    /* Nach Niveau geordnet. Vorher lagen alle Themen eines Bereichs in
       einem einzigen Gitter - bei 47 Hoerthemen fand ein Anfaenger
       seins nicht. Jetzt kommt A1 zuerst, mit Ueberschrift und Anzahl. */
    var NIV=['A1','A2','B1','B2','C1'];
    var NIV_TEXT={A1:'Ganz am Anfang',A2:'Schon etwas sicherer',B1:'Alltag auf eigenen Beinen',B2:'Feinheiten und Meinung',C1:'Fast wie zu Hause'};
    function karte(t,idx){
        var tp=(s.themes[themeKey(sk.id,t.id)]||{}).best||0;
        var g=UB_PAL[idx%UB_PAL.length]; var grad='linear-gradient(135deg,'+g[0]+','+g[1]+')';
        var em=t.emoji||UB_EMOJI[t.id]||sk.emoji; var lu=lessonUrl(sk.id,t.id);
        return '<div class="ub-tcard">'+
          '<div class="ub-band" style="background:'+grad+'">'+
            (bildVon(t) ? '<img class="ub-bild" src="'+E(bildVon(t))+'" alt="" loading="lazy" onerror="this.remove()">' : '')+
            (t.level?'<span class="ub-lv2">'+E(t.level)+'</span>':'')+
            (tp>=100?'<span class="ub-done">✓ fertig</span>':'')+
            '<span class="ub-emoji">'+em+'</span>'+
          '</div>'+
          '<div class="ub-tbody">'+
            '<div class="tt">'+E(t.title)+'</div>'+
            pfadHtml(t)+
            '<div class="meta">'+t.exercises.length+' Aufgaben'+(tp?' · beste Runde '+tp+'%':'')+'</div>'+
            '<div class="ub-pbar"><span style="width:'+tp+'%;background:'+grad+'"></span></div>'+
            '<button class="ub-go2" style="background:'+grad+'" onclick="ubStart(\''+sk.id+'\',\''+t.id+'\')">Üben →</button>'+
            (lu?'<a class="ub-lesson" href="'+lu+'" target="_blank" rel="noopener">📖 Passende Lektion</a>':'')+
          '</div>'+
        '</div>';
    }
    /* Der Lernpfad sagt, in welcher Reihenfolge die Themen Sinn ergeben
       und was vorher sitzen sollte. Fehlt die Datei, bleibt alles wie
       vorher — es steht dann nur keine Schrittnummer auf der Karte.
       Nicht verwechseln mit lernpfad.js: das ordnet die Dialogsituationen. */
    function pfadHtml(t){
      var LP=window.GRAMMATIKPFAD; if(!LP) return '';
      var sch=LP.schritt(t.id); if(!sch) return '';
      var h='<div class="ub-schritt">Schritt '+sch.nr+'</div>';
      if(sch.warum) h+='<div class="ub-warum">'+E(sch.warum)+'</div>';
      var vor=LP.vorher(t.id);
      if(vor.length) h+='<div class="ub-vorher">Vorher sitzen sollte: <b>'+vor.map(E).join('</b>, <b>')+'</b></div>';
      return h;
    }
    var geordnet = (window.GRAMMATIKPFAD ? window.GRAMMATIKPFAD.sortiere(sk.themes) : sk.themes);
    var faecher={}, rest=[];
    geordnet.forEach(function(t){
      /* Die Karte braucht den Platz im Originalarray, nicht in der
         sortierten Liste — sonst zeigt der Fortschritt auf das
         falsche Thema. */
      var i = sk.themes.indexOf(t);
      var lv=String(t.level||'').trim().toUpperCase();
      if(NIV.indexOf(lv)<0){ rest.push({t:t,i:i}); return; }
      (faecher[lv]=faecher[lv]||[]).push({t:t,i:i});
    });
    /* Lange Faecher werden zusammengelegt: acht Themen stehen offen,
       der Rest kommt auf Knopfdruck. Auf B1 sind es 41 - ohne das
       scrollt man am Handy minutenlang an Karten vorbei. */
    var OFFEN=8;
    function fach(lv,text,liste){
      var kopf='<h2 class="ub-niv"><span class="lv">'+E(lv)+'</span>'+E(text)+
        '<span class="anz">'+liste.length+(liste.length===1?' Thema':' Themen')+'</span></h2>';
      var bau=function(l){ return '<div class="ub-grid">'+l.map(function(o){return karte(o.t,o.i);}).join('')+'</div>'; };
      if(liste.length<=OFFEN) return kopf+bau(liste);
      var key=sk.id+'-'+lv.toLowerCase().replace(/[^a-z0-9]/g,'');
      return kopf+bau(liste.slice(0,OFFEN))+
        '<div class="ub-grid" id="ubMehr-'+key+'" hidden>'+liste.slice(OFFEN).map(function(o){return karte(o.t,o.i);}).join('')+'</div>'+
        '<button class="ub-mehrbtn" data-alle="'+liste.length+'" onclick="ubMehr(\''+key+'\',this)">Alle '+liste.length+' Themen zeigen ▾</button>';
    }
    window.ubMehr=function(key,btn){
      var d=document.getElementById('ubMehr-'+key); if(!d)return;
      d.hidden=!d.hidden;
      btn.textContent = d.hidden ? ('Alle '+btn.getAttribute('data-alle')+' Themen zeigen ▾') : 'Weniger zeigen ▴';
    };
    var teile=[];
    NIV.forEach(function(lv){ var f=faecher[lv]; if(f&&f.length) teile.push(fach(lv,NIV_TEXT[lv],f)); });
    if(rest.length) teile.push(fach('alle','Für jedes Niveau',rest));
    var cards=teile.join('');
    el.innerHTML=head+pills+cards;
  }
  window.renderUeben=renderUeben;
  window.ubSetSkill=function(id){ curSkill=id; renderUeben(); };

  // ---------- SESSION -------------------------------------------------------
  var S=null; // session state
  function ensureOverlay(){ var o=document.getElementById('ubOv'); if(o)return o;
    o=document.createElement('div'); o.className='ub-ov'; o.id='ubOv';
    /* Zwei getrennte Knoepfe: der Pfeil geht eine Aufgabe zurueck, das
       Kreuz beendet die Runde. Vorher war es einer, der je nach Stelle
       mal das eine und mal das andere tat — wer zurueckging, kam nicht
       mehr heraus. */
    o.innerHTML='<div class="ub-head">'
                 +'<button class="ub-x" id="ubZur" onclick="ubZurueck()" aria-label="Eine Aufgabe zurück" title="Eine Aufgabe zurück">←</button>'
                 +'<div class="ub-prog"><span id="ubProg" style="width:0"></span></div>'
                 +'<div class="ub-hearts" id="ubHearts"></div>'
                 +'<button class="ub-x ub-ende" id="ubZu" onclick="ubClose()" aria-label="Übung beenden" title="Übung beenden">✕</button>'
                 +'</div>'+
                '<div class="ub-body" id="ubBody"></div>'+
                '<div class="ub-foot"><button class="ub-btn" id="ubBtn" disabled onclick="ubBtn()">Prüfen</button></div>';
    document.body.appendChild(o); return o; }
  function pickItems(list,n){ return shuf(list).slice(0,Math.min(n,list.length)); }

  /* ---------- Wiederholung mit Abstand -----------------------------------
     Ein Wort, das man einmal richtig hatte, ist nicht gelernt. Gelernt
     ist es, wenn es nach einem Tag, nach vier Tagen und nach zwei
     Wochen immer noch sitzt. Darum merkt sich der Üben-Bereich zu
     jedem Wort eine Stufe: richtig schiebt es eine Stufe weiter und
     damit weiter nach hinten, falsch setzt es auf Stufe eins zurück.
     Gespeichert wird das im Gerät, nicht im Netz — es ist eine
     Lernhilfe, keine Note.                                              */
  var ABSTAND=[0,1,2,4,8,16,30];
  function inTagen(n){ var d=new Date(); d.setDate(d.getDate()+n);
    return d.getFullYear()+'-'+('0'+(d.getMonth()+1)).slice(-2)+'-'+('0'+d.getDate()).slice(-2); }
  function wdhAlle(){ var o=gGet('wdh',null); return (o&&typeof o==='object')?o:{}; }
  function wdhMerken(e, ok){
    try{
      var o=wdhAlle(); var k=String(e.w); var s=o[k]||{};
      /* Richtig: eine Stufe weiter und entsprechend später wieder.
         Falsch: zurück auf Stufe eins und noch heute wieder dran. */
      if(ok){ s.s=Math.min(ABSTAND.length-1,(s.s||0)+1); s.f=inTagen(ABSTAND[s.s]); }
      else { s.s=1; s.f=today(); }
      s.z = today();
      if(e.info && !s.i) s.i=String(e.info).slice(0,80);
      if(e.emoji && !s.e) s.e=e.emoji;
      o[k]=s; gSet('wdh',o);
    }catch(x){}
  }
  function wdhFaellig(){ var o=wdhAlle(), h=today(), n=[];
    for(var k in o){ if(!o.hasOwnProperty(k))continue; if(!o[k].f || o[k].f<=h) n.push(k); }
    return n; }
  window.ubFaellig=wdhFaellig;
  /* Prüfhaken: sagt, welche Aufgabe gerade dran ist. Wird beim
     Durchklicken im Testlauf gebraucht, sonst von niemandem. */
  window.ubAktuell=function(){ return (S && S.items && S.items[S.idx]) || null; };

  /* Zu einem Wort die Aufgaben finden, in denen es vorkommt. Der
     Katalog wird einmal gebaut und dann behalten. */
  var WORT_IDX=null, WORT_IDX_N=-1;
  function aufgabenZahl(){ var n=0;
    (UEBUNGEN.skills||[]).forEach(function(sk){ (sk.themes||[]).forEach(function(t){ n+=(t.exercises||[]).length; }); });
    return n; }
  function wortIndex(){
    var n=aufgabenZahl();
    /* Kommen später Aufgaben dazu (vielfalt.js baut sie in einer
       ruhigen Minute), wird der Katalog neu gebaut. */
    if(WORT_IDX && n===WORT_IDX_N) return WORT_IDX;
    WORT_IDX_N=n; WORT_IDX={};
    (UEBUNGEN.skills||[]).forEach(function(sk){
      if(sk.id==='shadowing') return;
      (sk.themes||[]).forEach(function(t){
        (t.exercises||[]).forEach(function(e){
          if(!e.w || e.type==='karte') return;
          (WORT_IDX[e.w]=WORT_IDX[e.w]||[]).push({e:e,sk:sk.id,th:t.id,titel:t.title});
        });
      });
    });
    return WORT_IDX;
  }

  /* ---------- Die Runde zusammenstellen ---------------------------------
     Nicht zwölf zufällige Aufgaben, sondern eine Runde mit Bogen:
     erst die Wortkarte, dann dasselbe Wort in einer anderen Form,
     dann der Rest — und kein Typ zweimal hintereinander. Am Ende
     zwei Aufgaben aus einem früheren Thema. So wiederholt sich
     jedes Wort innerhalb einer Runde mindestens zweimal.           */
  var LEICHT={karte:1}, REIHE=['choice','artikel','tippen','gap','order','buchstaben','match','listen','speak','shadow'];
  function baueRunde(sk,th,n){
    var alle=(th.exercises||[]).slice();
    if(alle.length<=n) return shuf(alle);
    var nachTyp={};
    alle.forEach(function(e){ (nachTyp[e.type]=nachTyp[e.type]||[]).push(e); });
    Object.keys(nachTyp).forEach(function(k){ nachTyp[k]=shuf(nachTyp[k]); });

    var runde=[], drin=[];
    function frei(e){ return e && drin.indexOf(e)<0; }
    function nimm(typ){ var l=nachTyp[typ]||[];
      for(var i=0;i<l.length;i++){ if(frei(l[i])){ drin.push(l[i]); return l[i]; } }
      return null; }

    /* 0. In einem Hörthema muss gehört werden. Es gibt dort viele
          Wortaufgaben ohne Ton — ohne diese Regel kam eine ganze Runde
          vor, in der nie eine Aufnahme lief. Zwei Hörtexte sind
          gesetzt, sobald es welche gibt. */
    var hoerbar = (nachTyp['listen'] || []).length;
    var gesetzt = [];
    if(hoerbar){
      var e1 = nimm('listen'); if(e1) gesetzt.push(e1);
      var e2 = hoerbar > 1 ? nimm('listen') : null; if(e2) gesetzt.push(e2);
    }

    /* 1. Eine Wortkarte zum Anfang — und gleich danach dasselbe Wort
          als Aufgabe. Das ist die Wiederholung im Kleinen. */
    var karte=nimm('karte');
    if(karte){ runde.push(karte);
      gesetzt.forEach(function(x){ runde.push(x); });
      gesetzt = [];
      var passend=null;
      REIHE.forEach(function(typ){ if(passend) return;
        (nachTyp[typ]||[]).forEach(function(e){ if(!passend && frei(e) && e.w===karte.w) passend=e; }); });
      if(passend){ drin.push(passend); runde.push(passend); }
    }

    gesetzt.forEach(function(x){ runde.push(x); });

    /* 2. Reihum durch die Formen, damit keine Runde nach Wahlfragen
          allein aussieht. */
    var typen=Object.keys(nachTyp).filter(function(t){ return !LEICHT[t]; });
    typen.sort(function(a,b){ return REIHE.indexOf(a)-REIHE.indexOf(b); });
    var wache=0, zaehl={}, grenze=3;
    runde.forEach(function(e){ zaehl[e.type]=(zaehl[e.type]||0)+1; });
    while(runde.length<n && wache++<200){
      var vorher=runde.length;
      for(var i=0;i<typen.length && runde.length<n;i++){
        /* Höchstens drei Aufgaben derselben Form je Runde — sonst
           frisst die Form mit dem größten Vorrat die halbe Runde.
           Erst wenn sonst nichts mehr da ist, wird die Grenze
           gelockert. */
        if((zaehl[typen[i]]||0)>=grenze) continue;
        var e=nimm(typen[i]);
        if(e){ runde.push(e); zaehl[e.type]=(zaehl[e.type]||0)+1; }
      }
      if(runde.length===vorher){ if(grenze>=12) break; grenze+=3; }
    }
    /* 3. Die letzten drei Plätze gehören Wörtern, die in dieser Runde
          schon vorkamen — in einer anderen Form. Ein Wort, das man
          einmal angeklickt hat, ist noch nicht gelernt; eines, das man
          erkannt, geschrieben und gehört hat, bleibt eher. */
    var woerter=[], formen={};
    runde.forEach(function(e){ if(e.w){ if(woerter.indexOf(e.w)<0) woerter.push(e.w); formen[e.w+'|'+e.type]=1; } });
    /* Bevorzugt die Formen, die etwas verlangen: schreiben, bauen,
       Artikel. Eine zweite Wahlfrage zum selben Wort bringt wenig. */
    var LIEBER=['tippen','buchstaben','artikel','order','gap','choice'];
    var wieder=[];
    shuf(woerter).forEach(function(w){
      if(wieder.length>=3) return;
      for(var i=0;i<LIEBER.length;i++){
        var typ=LIEBER[i];
        if(formen[w+'|'+typ]) continue;
        var kand=(nachTyp[typ]||[]).filter(function(e){ return e.w===w && frei(e); })[0];
        if(!kand) continue;
        formen[w+'|'+typ]=1; drin.push(kand); wieder.push(kand); return;
      }
    });

    /* 4. Noch nicht voll? Dann auffüllen, was übrig ist. */
    if(runde.length+wieder.length<n) shuf(alle).forEach(function(e){
      if(runde.length+wieder.length<n && frei(e)){ drin.push(e); runde.push(e); } });
    runde=runde.slice(0,Math.max(0,n-wieder.length)).concat(wieder);

    /* 5. Zum Schluss entzerren: gleiche Formen nicht hintereinander.
          Drei Wahlfragen am Stück fühlen sich an wie ein Fragebogen,
          nicht wie Üben. */
    return entzerren(runde);
  }

  /* Ordnet eine Liste so, dass möglichst nie zweimal dieselbe Form
     hintereinander steht: immer die Form nehmen, von der noch am
     meisten übrig ist — außer sie war gerade dran. Der Anfang bleibt,
     wie er ist (Wortkarte und das Wort dazu). */
  function entzerren(liste){
    if(liste.length<4) return liste;
    var fest=liste.slice(0,2), rest=liste.slice(2);
    var koerbe={};
    rest.forEach(function(e){ (koerbe[e.type]=koerbe[e.type]||[]).push(e); });
    var raus=[], letzter=fest.length?fest[fest.length-1].type:'';
    while(raus.length<rest.length){
      var beste=null, meiste=-1;
      for(var t in koerbe){
        if(!koerbe[t].length) continue;
        if(t===letzter && Object.keys(koerbe).some(function(x){ return x!==letzter && koerbe[x].length; })) continue;
        if(koerbe[t].length>meiste){ meiste=koerbe[t].length; beste=t; }
      }
      if(!beste) break;
      raus.push(koerbe[beste].shift()); letzter=beste;
    }
    return fest.concat(raus);
  }

  /* Zwei Aufgaben aus Themen, die schon einmal geübt wurden — und
     bevorzugt zu Wörtern, die heute wieder dran sind. */
  function wiederholungen(skId, thId, n){
    var idx=wortIndex(), raus=[];
    /* Erst, was heute wirklich dran ist. Ist heute nichts fällig,
       kommen Wörter aus früheren Runden trotzdem kurz vorbei — sonst
       sieht man sie bis zum Fälligkeitstag gar nicht wieder. */
    var o=wdhAlle();
    var heute=shuf(wdhFaellig());
    var spaeter=shuf(Object.keys(o).filter(function(w){ return heute.indexOf(w)<0; })
      .sort(function(a,b){ return (o[a].s||0)-(o[b].s||0); }).slice(0,40));
    heute.concat(spaeter).forEach(function(w){
      if(raus.length>=n) return;
      var kand=(idx[w]||[]).filter(function(x){ return x.th!==thId; });
      if(!kand.length) return;
      var x=kand[Math.floor(Math.random()*kand.length)];
      var kopie={}; for(var f in x.e) if(x.e.hasOwnProperty(f)) kopie[f]=x.e[f];
      kopie.__wdh=1; kopie.__vonTitel=x.titel||'';
      raus.push(kopie);
    });
    return raus;
  }

  window.ubStart=function(skId,thId){ var sk=skillById(skId); if(!sk)return; var th=sk.themes.filter(function(t){return t.id===thId;})[0]; if(!th)return;
    var items=baueRunde(sk,th,12).concat(wiederholungen(skId,thId,2));
    S={skId:skId,thId:thId,items:items,idx:0,correct:0,hearts:META().maxHearts||5,answered:false,sel:null,title:th.title,gewertet:[]};
    openSession(); };

  /* Die eigene Wiederholungsrunde: nur Wörter, die heute fällig sind,
     jedes in einer anderen Form als beim letzten Mal. */
  window.ubStartWdh=function(){
    var idx=wortIndex(), faellig=shuf(wdhFaellig()), items=[], letzter='';
    faellig.forEach(function(w){
      if(items.length>=12) return;
      var kand=(idx[w]||[]);
      if(!kand.length) return;
      var anders=kand.filter(function(o){ return o.e.type!==letzter; });
      var o=(anders.length?anders:kand)[Math.floor(Math.random()*(anders.length||kand.length))];
      letzter=o.e.type; items.push(o.e);
    });
    if(!items.length){ note('Heute ist nichts fällig — üb ein Thema, dann kommt es später zurück.'); return false; }
    S={skId:'mix',thId:'mix',items:items,idx:0,correct:0,hearts:META().maxHearts||5,
       answered:false,sel:null,title:'Wiederholung',gewertet:[]};
    openSession(); return true;
  };
  window.ubStartMix=function(){ var all=[]; (UEBUNGEN.skills||[]).forEach(function(sk){ if(sk.id==='shadowing')return; sk.themes.forEach(function(t){ t.exercises.forEach(function(e){ all.push(e); }); }); });
    S={skId:'mix',thId:'mix',items:pickItems(all,10),idx:0,correct:0,hearts:META().maxHearts||5,answered:false,sel:null,title:'Schnell-Mix',gewertet:[]};
    openSession(); };

  /* Ein Mix aus ausgewählten Themen — der Lernbereich baut damit die
     „Gemischten Übungen" für Freizeit oder Beruf auf einem Niveau.
     paare: [['wortschatz','essen'], ['hoeren','essen'], …]           */
  window.ubMixAuswahl=function(titel, paare, anzahl){
    var all=[];
    (paare||[]).forEach(function(p){
      var sk=skillById(p[0]); if(!sk) return;
      var th=(sk.themes||[]).filter(function(t){ return t.id===p[1]; })[0];
      if(th && th.exercises) th.exercises.forEach(function(e){ all.push(e); });
    });
    if(!all.length) return false;
    S={skId:'mix',thId:'mix',items:pickItems(all,anzahl||12),idx:0,correct:0,
       hearts:META().maxHearts||5,answered:false,sel:null,title:titel||'Gemischte Übungen',gewertet:[]};
    openSession();
    return true;
  };

  /* Eine Runde aus fertig übergebenen Aufgaben — damit die Nachbereitung einer
     Live-Stunde ihre eigene Mischung starten kann. */
  window.ubStartListe=function(titel, items, anzahl){
    var l=(items||[]).filter(function(e){ return e && e.type; });
    if(!l.length) return false;
    S={skId:'stunde',thId:'stunde',items:pickItems(l,anzahl||l.length),idx:0,correct:0,
       hearts:META().maxHearts||5,answered:false,sel:null,title:titel||'Nachbereitung',gewertet:[]};
    openSession();
    return true;
  };

  /* Themen ohne eigenes Foto in bilder/thema/ bekommen ein passendes geliehen. */
  var THFOTO = {
    arbeit:'buero', persoenlichkeit:'gefuehle', integration:'menschen',
    feste:'kultur', zahnarzt:'gesundheit'
  };
  /* Erst das eigene Foto, dann - falls es fehlt - das alte Netzbild, sonst weg.
     Vorher kam jedes Kopfbild von unsplash.com: fremde Adresse, oft unpassend
     und mehrfach vergeben (dasselbe Buch bei Genitiv wie bei Perfekt). */
  window.ubBildErsatz = function(img){
    img.onerror = null;
    var e = img.getAttribute('data-ersatz');
    if(e){ img.setAttribute('data-ersatz',''); img.src = e; return; }
    if(img.parentNode) img.parentNode.remove();
  };
  function themenBild(){
    if(!S) return '';
    var sk=skillById(S.skId); if(!sk) return '';
    var th=(sk.themes||[]).filter(function(t){return t.id===S.thId;})[0];
    if(!th) return '';
    var eigen = 'bilder/thema/' + (THFOTO[th.id] || th.id) + '.jpg';
    return '<div class="ub-thbild"><img src="'+E(eigen)+'" alt="" '
      + (th.bild ? 'data-ersatz="'+E(th.bild)+'" ' : '')
      + 'onerror="ubBildErsatz(this)">'
      +'<span>'+E(th.title||'')+'</span></div>';
  }

  function openSession(){ injectCSS(); var o=ensureOverlay(); o.classList.add('open');
    o.querySelector('.ub-foot').innerHTML='<button class="ub-btn" id="ubBtn" disabled onclick="ubBtn()">Prüfen</button>';
    document.body.style.overflow='hidden'; renderQ();
    /* Der Zurueck-Knopf des Handys soll die Uebung schliessen,
       nicht die ganze Ansicht verlassen. */
    if(window.zurueckAuf) zurueckAuf('ueben', function(){ window.ubClose(true); });
  }
  window.ubClose=function(force){
    if(!force && S && !S.ended && (S.idx>0 || S.answered)){
      if(!confirm('Übung abbrechen?\n\nDein Fortschritt in dieser Runde geht verloren.')) return;
    }
    var o=document.getElementById('ubOv'); if(o)o.classList.remove('open'); document.body.style.overflow=''; stopAudio(); shadowReset(); S=null;
    if(window.zurueckErledigt) zurueckErledigt('ueben');
    if(document.getElementById('v-ueben').classList.contains('active')) renderUeben(); };

  function hearts(){ var h=S.hearts,m=META().maxHearts||5,s=''; for(var i=0;i<m;i++)s+= i<h?'❤️':'🤍'; return s; }
  function setProg(){ document.getElementById('ubProg').style.width=Math.round(S.idx/S.items.length*100)+'%'; document.getElementById('ubHearts').innerHTML=hearts(); }

  var ART=['der','die','das'];

  /* Zwei Karten in einer: die Wortkarte für Wortschatz, Hören und
     Aussprache — und die Regelkarte für Grammatik, in der die Regel
     an drei echten Sätzen aus genau diesem Thema steht. */
  function karteHtml(e){
    if(e.regel){
      return '<div class="ub-karte">'+
        '<span class="em">'+E(e.emoji||'🧩')+'</span>'+
        '<div class="wort">'+E(e.wort||'Die Regel')+'</div>'+
        '<div class="bed">'+E(e.info||'')+'</div>'+
        '<div class="ub-regel">'+(e.beispiele||[]).map(function(b){
          return '<div class="z"><b>'+E(b.satz)+'</b>'+(b.warum?'<span>'+E(b.warum)+'</span>':'')+'</div>';
        }).join('')+'</div></div>';
    }
    var wort=ohneArt(e.wort||e.w||'');
    var art=String(e.art||'').toLowerCase();
    return '<div class="ub-karte">'+
      (e.img?'<img class="kimg" src="'+E(e.img)+'" alt="" onerror="this.remove()">':'')+
      (e.emoji?'<span class="em">'+E(e.emoji)+'</span>':'')+
      '<div class="wort">'+(ART_FARBE[art]?'<span class="ub-art" style="--af:'+ART_FARBE[art]+'">'+art+'</span>':'')+E(wort)+'</div>'+
      (e.info?'<div class="bed">'+E(e.info)+'</div>':'')+
      '<button class="ub-play" style="width:56px;height:56px;font-size:24px;margin:14px auto 4px" onclick="ubSpeak(\''+E(wort).replace(/'/g,"\\'")+'\')">🔊</button>'+
      (e.satz?'<div class="ub-satzbox">'+satzHtml(e.satz)+'</div>':'')+
    '</div>';
  }

  function renderQ(){
    stopAudio(); shadowReset();
    setProg(); S.answered=false; S.sel=null; S.order=null;
    /* Bei der ersten Aufgabe gibt es nichts, wohin der Pfeil fuehren
       koennte — dann ist er blass und tut nichts. Das Kreuz daneben
       bleibt immer da. */
    var zr=document.getElementById('ubZur');
    if(zr){ zr.disabled = S.idx<=0;
            zr.style.opacity = S.idx>0 ? '1' : '.3';
            zr.style.pointerEvents = S.idx>0 ? '' : 'none'; }
    var e=S.items[S.idx]; var body=document.getElementById('ubBody'); var btn=document.getElementById('ubBtn');
    btn.className='ub-btn'; btn.textContent='Prüfen'; btn.disabled=true;
    var h=(S.idx===0?themenBild():'');
    if(e.type==='choice'){
      /* Nennt die Frage die Bedeutung schon („Welches Wort passt: …"),
         verrät das Foto daneben die Lösung. Es kommt dann erst mit der
         Rückmeldung — dort hilft es beim Merken. */
      var bildSpaeter = e.img && /Welches Wort passt|gesucht:/.test(String(e.q||''));
      if(e.img && !bildSpaeter){ h+='<img class="ub-qimg" src="'+E(e.img)+'" alt="" onerror="this.remove()">'; }
      if(e.audio){ h+='<button class="ub-play" onclick="ubSpeak(\''+E(e.audio).replace(/'/g,"\\'")+'\')">🔊</button>'; }
      h+='<div class="ub-q">'+E(e.q||'Wähle die richtige Antwort:')+'</div>'+
         (e.audio?'':tonKnoepfe(e.q))+
         '<div class="ub-opts" id="ubOpts">'+
         shuf(e.options.map(function(o,k){return k;})).map(function(k){ return '<button class="ub-opt" data-k="'+k+'" onclick="ubChoose('+k+')">'+E(e.options[k])+'</button>'; }).join('')+'</div>';
      if(e.audio) setTimeout(function(){ speak(e.audio); },200);
    } else if(e.type==='gap'){
      h+=(e.img?'<img class="ub-qimg" src="'+E(e.img)+'" alt="" onerror="this.remove()">':'');
      /* Stammt der Satz aus einem Hörtext, kann man ihn hier hören —
         sonst ist die Lücke oft nicht eindeutig zu füllen. */
      if(e.audioUrl) h+='<button class="ub-play" onclick="ubPlayUrl(\''+E(e.audioUrl)+'\',this)">▶</button>';
      h+='<div class="ub-q">'+E((e.text||'').replace('___','_____'))+'</div>'+
         (e.audioUrl?'':tonKnoepfe(e.text))+
         '<input class="ub-input" id="ubGap" placeholder="Antwort eintippen…" autocomplete="off" autocapitalize="off">';
      if(e.hint) h+='<div class="ub-tip" style="text-align:left;margin-top:8px">💡 '+E(e.hint)+'</div>';
    } else if(e.type==='match'){
      if(e.img){ h+='<img class="ub-qimg" src="'+E(e.img)+'" alt="" onerror="this.remove()">'; }
      var rs=shuf(e.pairs.map(function(p){return p.r;}));
      h+='<div class="ub-q">'+E(e.intro||'Ordne zu:')+'</div>'+tonKnoepfe(e.intro)+e.pairs.map(function(p,k){
        return '<div class="ub-mrow"><b>'+E(p.l)+'</b><select id="ubM'+k+'" onchange="ubMatchChk()"><option value="">— wählen —</option>'+rs.map(function(r){return '<option>'+E(r)+'</option>';}).join('')+'</select></div>';
      }).join('');
    } else if(e.type==='order'){
      S.order={build:[],pool:shuf(String(e.answer).split(/\s+/).filter(Boolean).map(function(w,i){return {w:w,i:i};}))};
      if(e.audioUrl) h+='<button class="ub-play" onclick="ubPlayUrl(\''+E(e.audioUrl)+'\',this)">▶</button>';
      h+='<div class="ub-q">Bring die Wörter in die richtige Reihenfolge:</div><div class="ub-build" id="ubBuild"></div><div class="ub-chips" id="ubPool"></div>';
      if(e.hint) h+='<div class="ub-tip" style="text-align:left;margin-top:10px">💡 '+E(e.hint)+'</div>';
    } else if(e.type==='karte'){
      /* Die Wortkarte ist keine Frage. Sie ist der Moment davor:
         einmal alles sehen, hören und lesen — Bild, Artikel, Bedeutung,
         ein Satz aus dem Alltag. Danach kommt dasselbe Wort in der
         Runde als Aufgabe zurück. */
      h+=karteHtml(e);
      btn.disabled=false; btn.textContent='Verstanden 👍';
      if(!e.regel) setTimeout(function(){ speak(ohneArt(e.w||e.wort||'')); },260);
    } else if(e.type==='tippen'){
      if(e.img){ h+='<img class="ub-kimgs" src="'+E(e.img)+'" alt="" onerror="this.remove()">'; }
      else if(e.emoji){ h+='<span class="ub-emj">'+E(e.emoji)+'</span>'; }
      h+='<div class="ub-q" style="text-align:center;margin-bottom:8px">✍️ Wie heißt das Wort?</div>'+
         '<div class="ub-bed">'+E(e.info||'')+'</div>'+
         '<input class="ub-input" id="ubGap" placeholder="Wort eintippen…" autocomplete="off" autocapitalize="off" autocorrect="off" spellcheck="false">';
      if(e.tip) h+='<div class="ub-tip" style="margin-top:10px">💡 '+E(e.tip)+'</div>';
    } else if(e.type==='buchstaben'){
      /* Buchstabensalat: dieselbe Mechanik wie beim Satzbau, nur mit
         Buchstaben statt Wörtern. */
      S.order={build:[],pool:shuf(String(e.answer).split('').map(function(c,i){return {w:c,i:i};})),leim:''};
      if(e.img){ h+='<img class="ub-kimgs" src="'+E(e.img)+'" alt="" onerror="this.remove()">'; }
      else if(e.emoji){ h+='<span class="ub-emj">'+E(e.emoji)+'</span>'; }
      h+='<div class="ub-q" style="text-align:center;margin-bottom:8px">🔤 Bring die Buchstaben in die richtige Reihenfolge</div>'+
         (e.info?'<div class="ub-bed">'+E(e.info)+'</div>':'')+
         '<div class="ub-build buch" id="ubBuild"></div><div class="ub-chips buch" id="ubPool"></div>';
    } else if(e.type==='artikel'){
      if(e.img){ h+='<img class="ub-kimgs" src="'+E(e.img)+'" alt="" onerror="this.remove()">'; }
      else if(e.emoji){ h+='<span class="ub-emj">'+E(e.emoji)+'</span>'; }
      h+='<div class="ub-q" style="text-align:center">der, die oder das?</div>'+
         '<div class="ub-word" style="margin-top:-4px">'+E(e.wort||ohneArt(e.w))+'</div>'+
         (e.satz?'<div class="ub-satzbox">'+satzHtml(e.satz)+'</div>':'')+
         '<div class="ub-opts ub-drei" id="ubOpts" style="margin-top:14px">'+
         ART.map(function(a,k){ return '<button class="ub-opt" data-k="'+k+'" onclick="ubChoose('+k+')">'+a+'</button>'; }).join('')+
         '</div>';
      setTimeout(function(){ speak(ohneArt(e.wort||e.w||'')); },240);
    } else if(e.type==='speak'){
      if(e.img){ h+='<img class="ub-qimg" src="'+E(e.img)+'" alt="" onerror="this.remove()">'; }
      h+='<div class="ub-q" style="text-align:center">🗣️ Hör zu und sprich nach</div>';
      if(e.audioUrl){ h+='<button class="ub-play" onclick="ubPlayUrl(\''+E(e.audioUrl)+'\',this)">▶</button>'; }
      else { h+='<button class="ub-play" onclick="ubSpeak(\''+E(e.word).replace(/'/g,"\\'")+'\')">🔊</button>'; }
      h+='<div class="ub-word">'+E(e.word)+'</div>'+(e.tip?'<div class="ub-tip">'+E(e.tip)+'</div>':'');
      btn.disabled=false; btn.textContent='👍 Hat geklappt';
      if(e.audioUrl){ setTimeout(function(){ ubPlayUrl(e.audioUrl, document.querySelector('#ubBody .ub-play')); },300); }
      else { setTimeout(function(){ speak(e.word); },200); }
    } else if(e.type==='lesen'){
      /* Erst lesen, dann antworten. Der Text bleibt beim Antworten sichtbar —
         Leseverstehen heisst nicht Auswendiglernen. */
      h+='<div class="ub-q">📖 Lies den Text und beantworte die Frage:</div>'+
         '<div class="ub-lestext">'+String(e.text||'').split(/\n\s*\n/).map(function(a){return '<p>'+E(a)+'</p>';}).join('')+'</div>'+
         tonKnoepfe(e.text)+
         '<div class="ub-q" style="font-size:18px;margin:14px 0 12px">'+E(e.q||'')+'</div>'+
         '<div class="ub-opts" id="ubOpts">'+
         shuf(e.options.map(function(o,k){return k;})).map(function(k){ return '<button class="ub-opt" data-k="'+k+'" onclick="ubChoose('+k+')">'+E(e.options[k])+'</button>'; }).join('')+
         '</div>';
    } else if(e.type==='schreiben'){
      /* Hier gibt es kein Richtig und kein Falsch, sondern einen Vergleich.
         Man schreibt selbst, dann sieht man eine moegliche Fassung. */
      h+='<div class="ub-q">✍️ '+E(e.auftrag||'Schreib deine Antwort:')+'</div>'+
         tonKnoepfe(e.auftrag)+
         '<textarea class="ub-schreib" id="ubSchreib" placeholder="Schreib hier …" oninput="ubSchreibZaehl()"></textarea>'+
         '<div class="ub-zaehl" id="ubZaehl">0 Wörter</div>';
      if(e.tipp) h+='<div class="ub-tip" style="text-align:left;margin-top:8px">💡 '+E(e.tipp)+'</div>';
      btn.disabled=false; btn.textContent='Lösung zeigen';
    } else if(e.type==='fehler'){
      /* Fehler finden schult das Auge fuer die eigene Sprache — man liest
         seinen eigenen Text danach anders. */
      S.fehlerWahl=null;
      h+='<div class="ub-q">🔍 In diesem Satz steckt ein Fehler. Tippe das falsche Wort an:</div>'+
         '<div class="ub-fsatz" id="ubFsatz">'+
         String(e.satz||'').split(/\s+/).filter(Boolean).map(function(w,k){
           return '<button class="ub-fw" data-w="'+E(w)+'" onclick="ubFehlerWahl('+k+',this)">'+E(w)+'</button>';
         }).join('')+'</div>';
    } else if(e.type==='listen'){
      if(e.img){ h+='<img class="ub-qimg" src="'+E(e.img)+'" alt="" onerror="this.remove()">'; }
      h+='<div class="ub-tip" style="margin-bottom:4px">'+E(e.label||'🎧 Hör gut zu – du kannst mehrmals hören')+'</div>'+
         '<button class="ub-play" onclick="ubPlayUrl(\''+E(e.audioUrl)+'\',this)">▶</button>'+
         '<div class="ub-q">'+E(e.q)+'</div><div class="ub-opts" id="ubOpts">'+
         shuf(e.options.map(function(o,k){return k;})).map(function(k){ return '<button class="ub-opt" data-k="'+k+'" onclick="ubChoose('+k+')">'+E(e.options[k])+'</button>'; }).join('')+'</div>';
    } else if(e.type==='shadow'){
      h+='<div class="ub-q" style="text-align:center">🗣️ Shadowing – hör zu &amp; sprich nach</div>';
      h+='<button class="ub-play" onclick="ubPlayUrl(\''+E(e.audioUrl)+'\',this)">▶</button>';
      h+='<div class="ub-word" style="font-size:22px;line-height:1.32">'+E(e.text)+'</div>';
      if(e.tip) h+='<div class="ub-tip">💡 '+E(e.tip)+'</div>';
      h+='<div style="text-align:center;margin-top:6px"><button class="ub-recbtn" id="ubRecBtn" onclick="ubRecToggle()">🎙️ Aufnehmen</button></div><div id="ubCmp"></div>';
      btn.disabled=false; btn.textContent='Fertig 👍';
      setTimeout(function(){ window.ubPlayUrl(e.audioUrl, document.querySelector('#ubBody .ub-play')); },300);
    }
    h+='<div class="ub-fb" id="ubFb"></div>';
    /* Kommt die Aufgabe aus einem früheren Thema, steht das dabei —
       sonst denkt man, man sei im falschen Thema gelandet. */
    if(e.__wdh) h='<span class="ub-wmark">🔁 Wiederholung'+(e.__vonTitel?': '+E(e.__vonTitel):'')+'</span>'+h;
    body.innerHTML=h; body.scrollTop=0;
    if(e.type==='gap'||e.type==='tippen'){ var g=document.getElementById('ubGap');
      g.addEventListener('input',function(){ btn.disabled=!g.value.trim(); });
      g.addEventListener('keydown',function(ev){ if(ev.key==='Enter'&&!btn.disabled) window.ubBtn(); });
      g.focus(); }
    if(e.type==='order'||e.type==='buchstaben') drawOrder();
  }

  /* Satzbau: im Deutschen sind oft mehrere Reihenfolgen richtig —
     „Am Vormittag habe ich einen Termin" und „Ich habe am Vormittag
     einen Termin" sind beide gutes Deutsch. Geprüft wird deshalb die
     Regel, um die es geht: alle Bausteine benutzt, der Satz beginnt
     wie vorgesehen, und das Verb steht an zweiter Stelle. Wer den
     Satz genau so baut wie gedacht, bekommt zusätzlich das Lob. */
  function satzbauOk(gebaut, e){
    var ziele=[e.answer].concat(e.alts||[]);
    for(var i=0;i<ziele.length;i++) if(nrm(gebaut)===nrm(ziele[i])) return true;
    var a=nrm(gebaut).split(/\s+/), b=nrm(e.answer).split(/\s+/);
    if(a.length!==b.length) return false;
    /* dieselben Wörter? */
    var s1=a.slice().sort().join('|'), s2=b.slice().sort().join('|');
    if(s1!==s2) return false;
    /* Anfang und Verbstelle wie vorgesehen — das ist die Regel,
       die der Satzbau übt. */
    if(a[0]!==b[0]) return false;
    if(a.length>1 && a[1]!==b[1]) return false;
    /* Was am Ende steht, muss am Ende bleiben — aber nur, wenn dort
       wirklich ein Verbteil steht (Partizip, Infinitiv, trennbare
       Vorsilbe). Endet der Satz auf ein Nomen, darf das Mittelfeld
       anders geordnet sein: „Ich habe zehn Jahre Erfahrung als
       Köchin" und „Ich habe als Köchin zehn Jahre Erfahrung" sind
       beide richtig. */
    var letzte=b[b.length-1];
    if(verbTeil(letzte) && a[a.length-1]!==letzte) return false;
    return true;
  }
  var VORSILBE=/^(an|ab|auf|aus|mit|vor|zu|ein|nach|her|hin|los|weg|zurück|fest|frei|statt|teil|wieder|bei|durch|über|um|unter)$/;
  function verbTeil(w){ w=String(w||''); return VORSILBE.test(w) || /(en|te|ten|end|t)$/.test(w); }

  window.ubChoose=function(k){ if(S.answered)return; S.sel=k; var opts=document.getElementById('ubOpts'); Array.prototype.forEach.call(opts.children,function(b){ b.classList.toggle('sel',+b.dataset.k===k); }); document.getElementById('ubBtn').disabled=false; };
  window.ubSchreibZaehl=function(){ var t=document.getElementById('ubSchreib'), z=document.getElementById('ubZaehl');
    if(!t||!z)return; var n=(t.value.trim().match(/\S+/g)||[]).length; z.textContent=n+(n===1?' Wort':' Wörter'); };
  window.ubFehlerWahl=function(k,btn){ if(S.answered)return; S.fehlerWahl=k;
    var fs=document.getElementById('ubFsatz');
    if(fs) Array.prototype.forEach.call(fs.children,function(b){ b.classList.remove('sel'); b.style.borderColor=''; });
    btn.style.borderColor='var(--turq,#2DD4BF)';
    document.getElementById('ubBtn').disabled=false; };
  window.ubMatchChk=function(){ var e=S.items[S.idx]; var all=e.pairs.every(function(p,k){ return document.getElementById('ubM'+k).value; }); document.getElementById('ubBtn').disabled=!all; };
  function drawOrder(){ var e=S.items[S.idx]; var b=document.getElementById('ubBuild'),p=document.getElementById('ubPool');
    var leer=(e.type==='buchstaben')?'Buchstaben unten antippen…':'Wörter unten antippen…';
    b.innerHTML=S.order.build.map(function(t,i){ return '<span class="ub-chip" onclick="ubUnpick('+i+')">'+E(t.w)+'</span>'; }).join('')||'<span style="color:var(--soft,#999);font-size:14px">'+leer+'</span>';
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
      ok=[e.answer].concat(e.alts||[]).some(function(a){return nrm(a)===nrm(v);});
      /* Die Erklärung mitgeben — sonst sieht man nur die Lösung, nicht das Warum. */
      sol='Richtig: '+e.answer+(e.explain?' — '+e.explain:'');
    } else if(e.type==='match'){ ok=e.pairs.every(function(p,k){ var sel=document.getElementById('ubM'+k); sel.disabled=true; var good=nrm(sel.value)===nrm(p.r); sel.style.borderColor=good?'#16a34a':'#dc2626'; return good; }); sol=ok?'':'Schau dir die richtigen Paare nochmal an.';
    } else if(e.type==='order'){ var built=S.order.build.map(function(t){return t.w;}).join(' ');
      ok=satzbauOk(built, e);
      sol='So war der Satz gemeint: '+e.answer;
    } else if(e.type==='buchstaben'){ var wort=S.order.build.map(function(t){return t.w;}).join('');
      ok=nrm(wort)===nrm(e.answer); sol='Richtig: '+e.answer;
    } else if(e.type==='tippen'){ var t=document.getElementById('ubGap'); var vv=t.value; t.disabled=true;
      var ziele=[e.answer].concat(e.alts||[]).concat([ohneArt(e.answer)]);
      ok=ziele.some(function(a){ return nrm(a)===nrm(vv); });
      /* Fast richtig zählt als richtig — mit Hinweis auf die Schreibweise. */
      var fast=!ok && ziele.some(function(a){ return fastGleich(vv,a); });
      if(fast) ok=true;
      sol=(fast?'Fast! So schreibt man es: ':'Richtig: ')+e.answer;
      if(ok&&e.w) markKnown(e.w);
    } else if(e.type==='artikel'){ ok=(ART[S.sel]===String(e.answer).toLowerCase());
      var aopts=document.getElementById('ubOpts'); var rk=ART.indexOf(String(e.answer).toLowerCase());
      Array.prototype.forEach.call(aopts.children,function(b){ var k=+b.dataset.k; b.disabled=true; b.classList.remove('sel');
        if(k===rk)b.classList.add('right'); else if(k===S.sel)b.classList.add('wrong'); });
      sol=String(e.answer)+' '+(e.wort||ohneArt(e.w));
      if(ok&&e.w) markKnown(e.w);
    } else if(e.type==='karte'){ ok=true;
    } else if(e.type==='speak'||e.type==='shadow'){ ok=true; }
    else if(e.type==='lesen'){ ok=(S.sel===e.answer); var leopts=document.getElementById('ubOpts');
      if(leopts) Array.prototype.forEach.call(leopts.children,function(b){ var k=+b.dataset.k;
        b.disabled=true; b.classList.remove('sel'); if(k===e.answer)b.classList.add('right'); else if(k===S.sel)b.classList.add('wrong'); });
      sol=e.explain||('Richtig wäre: '+(e.options?e.options[e.answer]:'')); }
    else if(e.type==='schreiben'){ ok=true;
      var ta=document.getElementById('ubSchreib'); if(ta) ta.disabled=true; }
    else if(e.type==='fehler'){ var gewaehlt=S.fehlerWahl;
      var woerter=String(e.satz||'').split(/\s+/).filter(Boolean);
      /* Das falsche Wort wird ueber den Text gesucht. Damit eine Aufgabe nicht
         daran scheitert, dass jemand den Punkt mitgeschrieben hat, werden auf
         beiden Seiten die Satzzeichen abgeschnitten. Kommt ein Wort mehrfach
         vor, kann die Aufgabe mit falschIdx sagen, welches gemeint ist. */
      var ohnePunkt=function(w){ return String(w).replace(/^[«»„“”"'(]+|[.,!?;:«»„“”"')]+$/g,''); };
      var ziel=ohnePunkt(e.falsch);
      var zielIdx=(typeof e.falschIdx==='number')?e.falschIdx:-1;
      if(zielIdx<0) woerter.forEach(function(w,k){ if(zielIdx<0 && ohnePunkt(w)===ziel) zielIdx=k; });
      if(zielIdx<0) woerter.forEach(function(w,k){ if(zielIdx<0 && ohnePunkt(w).toLowerCase()===ziel.toLowerCase()) zielIdx=k; });
      ok=(gewaehlt===zielIdx);
      var fs=document.getElementById('ubFsatz');
      if(fs) Array.prototype.forEach.call(fs.children,function(b,k){ b.classList.add('aus');
        if(k===zielIdx)b.classList.add('gut'); else if(k===gewaehlt)b.classList.add('schlecht'); });
      sol=(e.explain||'')+' Richtig heißt es: '+(e.richtig||''); }
    else if(e.type==='listen'){ ok=(S.sel===e.answer); var lopts=document.getElementById('ubOpts');
      Array.prototype.forEach.call(lopts.children,function(b){ var k=+b.dataset.k; b.disabled=true; b.classList.remove('sel'); if(k===e.answer)b.classList.add('right'); else if(k===S.sel)b.classList.add('wrong'); });
      sol=e.explain?e.explain:'Hör nochmal genau hin.'; }

    S.answered=true; var btn=document.getElementById('ubBtn');
    var selfRated=(e.type==='speak'||e.type==='shadow'||e.type==='karte'||e.type==='schreiben');
    /* Jede Antwort zu einem Wort landet im Wiederholungsplan: richtig
       schiebt das Wort nach hinten, falsch holt es zurück. */
    if(e.w && e.type!=='karte') wdhMerken(e, ok);
    /* Wer zurückgeht und dieselbe Aufgabe nochmal löst, verliert kein zweites Herz
       und bekommt keine zweiten Punkte. */
    var schonGewertet=!!S.gewertet[S.idx]; S.gewertet[S.idx]=true;
    if(schonGewertet){
      if(ok){ fb.className='ub-fb ok'; fb.innerHTML='✓ Richtig!'; }
      else { fb.className='ub-fb no'; fb.innerHTML='✗ '+E(sol); }
    }
    else if(!selfRated){
      if(ok){ S.correct++; addXP(META().xpPerCorrect||10); fb.className='ub-fb ok'; fb.innerHTML='✓ Richtig! +'+(META().xpPerCorrect||10)+' XP'; }
      /* Beim Satzbau kostet ein anderer Bau kein Herz: im Deutschen
         sind oft zwei Reihenfolgen richtig, und wir prüfen nur gegen
         eine. Der gemeinte Satz steht daneben. */
      else if(e.type==='order'){ fb.className='ub-fb no'; fb.innerHTML='So war der Satz gemeint:<br><b>'+E(e.answer)+'</b>'; }
      else { S.hearts--; setProg(); fb.className='ub-fb no'; fb.innerHTML='✗ '+E(sol); }
    } else { S.correct++; addXP(Math.round((META().xpPerCorrect||10)/2)); fb.className='ub-fb ok';
      fb.innerHTML=(e.type==='karte'?'Gemerkt? Das Wort kommt gleich noch einmal.':'Klasse! Weiter so.')+' +'+Math.round((META().xpPerCorrect||10)/2)+' XP'; }
    /* Nach der Antwort den vollstaendigen, richtigen Satz hoeren —
       so praegt sich die Loesung ueber das Ohr ein, nicht nur ueber das Auge. */
    var loesung='';
    if(e.type==='gap' && e.text) loesung=String(e.text).replace('___', String(e.answer||''));
    else if(e.type==='order') loesung=String(e.answer||'');
    else if(e.type==='buchstaben') loesung=String(e.answer||'');
    else if(e.type==='choice' && e.options && typeof e.answer==='number') loesung=String(e.options[e.answer]||'');
    else if(e.type==='tippen') loesung=String(e.answer||e.wort||e.w||'');
    else if(e.type==='fehler') loesung=String(e.richtig||'');
    else if(e.type==='lesen' && e.options && typeof e.answer==='number') loesung=String(e.options[e.answer]||'');
    if(loesung && !e.audioUrl){
      fb.innerHTML+='<div class="ub-loes">'+tonKnoepfe(loesung)+'<span>'+E(loesung)+'</span></div>';
      if(!ok) setTimeout(function(){ speak(loesung.replace(/<[^>]+>/g,'')); }, 350);
    }
    if(e.type==='schreiben' && e.muster){
      fb.innerHTML+='<div class="ub-muster"><b>Ein möglicher Text:</b><br>'+E(e.muster)+'</div>'+tonKnoepfe(e.muster);
    }
    if(e.type==='listen'){ fb.innerHTML+='<div style="margin-top:10px;padding:11px 13px;background:#fff;border:1px solid var(--border,#ECECEC);border-radius:12px;font-weight:500;color:#333;line-height:1.5">📝 <b>Das hast du gehört:</b><br>'+E(e.transcript)+'</div>'; }
    if(e.type==='choice' && e.img && /Welches Wort passt|gesucht:/.test(String(e.q||''))){
      fb.innerHTML+='<img class="ub-qimg" style="margin:10px 0 0" src="'+E(e.img)+'" alt="" onerror="this.remove()">';
    }
    btn.className='ub-btn'+((!ok&&!selfRated)?' no':''); btn.disabled=false;
    btn.textContent=(S.idx>=S.items.length-1)?'Abschließen':'Weiter';
    if(S.hearts<=0 && !selfRated && !ok){ btn.textContent='Runde beenden'; }
  }

  window.ubZurueck=function(){ if(!S) return;
    if(S.ended||S.idx<=0) return window.ubClose();
    S.idx--; renderQ(); };

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
    // Der Lernpfad hoert mit: welche Runde ist gerade fertig geworden?
    try { window.dispatchEvent(new CustomEvent('ub:fertig', { detail:{
      skId:S.skId, thId:S.thId, titel:S.title||'', richtig:S.correct, gesamt:total, prozent:pct }})); } catch(e){}
    var em = outOfHearts?'💔':(pct>=80?'🏆':(pct>=50?'💪':'🙂'));
    var msg= outOfHearts?'Keine Herzen mehr – kein Problem, übernächste Runde klappt’s besser!':(pct>=80?'Stark gemacht!':(pct>=50?'Gut – dranbleiben!':'Übung macht den Meister.'));
    var body=document.getElementById('ubBody');
    body.innerHTML='<div class="ub-end"><div class="em">'+em+'</div><h2>'+E(msg)+'</h2>'+
      '<p>'+S.correct+' von '+total+' richtig</p>'+
      '<p class="xp">+'+ (S.correct*(META().xpPerCorrect||10)) +' XP</p></div>';
    document.getElementById('ubProg').style.width='100%';
    var foot=document.querySelector('#ubOv .ub-foot');
    var lu=lessonUrl(S.skId,S.thId);
    foot.innerHTML='<button class="ub-btn" onclick="ubAgain()">Nochmal üben</button>'+
                   (lu?'<a class="ub-btn" href="'+lu+'" target="_blank" rel="noopener" style="display:block;text-align:center;text-decoration:none;background:linear-gradient(135deg,var(--primary,#DD0000),var(--accent,#FFCE00));margin-top:10px">📖 Passende Lektion ansehen</a>':'')+
                   '<button class="ub-btn" style="background:#fff;color:var(--ink,#1A1A1A);border:2px solid var(--border,#ECECEC);box-shadow:none;margin-top:10px" onclick="ubClose()">Fertig</button>';
  }
  window.ubAgain=function(){ var foot=document.querySelector('#ubOv .ub-foot'); foot.innerHTML='<button class="ub-btn" id="ubBtn" disabled onclick="ubBtn()">Prüfen</button>';
    if(S.thId==='mix') ubStartMix(); else ubStart(S.skId,S.thId); };

})();
