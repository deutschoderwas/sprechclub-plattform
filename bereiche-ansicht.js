/* ============================================================
   bereiche-ansicht.js — „Deutsch für Freizeit & Beruf"

   Zeigt, was bereiche.js zugeordnet hat. Zwei Wege, darunter
   Gruppen, darunter Orte beziehungsweise Berufsfelder. Ein Klick
   öffnet den Ort: seine Situationen mit Amanda, seine Wörter,
   seine Bausteine, seine Lektion.

   Diese Datei erzeugt keinen einzigen neuen Übungsinhalt. Sie
   ruft nur, was es schon gibt:
     window.lernDialog(id)        eine Situation mit Amanda
     window.ubStart(skill, thema) eine Übungsreihe
     window.AmandaFragen(text)    Amanda im Chat
     berufe.js                    die zwanzig Berufsfelder

   Einbinden NACH bereiche.js, dialoge.js, uebungen.js, berufe.js,
   lernen.js und ueben.js:
     <script src="bereiche-ansicht.js?v=1" defer></script>
   ============================================================ */
(function () {
  'use strict';
  if (window.__bereiche) return;
  window.__bereiche = true;

  /* ---------- Kleinkram ---------- */
  function E(s){ return String(s==null?'':s).replace(/[&<>"']/g,function(c){
    return {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]; }); }
  function J(k,d){ try{ if(window.lsGet) return lsGet(k,d);
    var v=JSON.parse(localStorage.getItem('ub_'+k)); return v==null?d:v; }catch(e){ return d; } }
  function el(id){ return document.getElementById(id); }
  /* club-zeichen.js legt seinen Stil auf .zeichen — ohne diesen
     Rahmen kaeme das Zeichen ohne Strich und ohne Farbe heraus. */
  function zeichen(name){
    if(window.ZEICHEN && ZEICHEN.html){
      try{
        if(ZEICHEN.stil) ZEICHEN.stil();
        var h=ZEICHEN.html(name);
        if(h) return '<span class="zeichen">'+h+'</span>';
      }catch(e){}
    }
    return '';
  }
  function amandaBild(p){ return window.AmandaBild ? window.AmandaBild(p) : ('amanda/amanda-'+p+'.webp'); }

  function wege(){ return window.BEREICHE_WEGE||[]; }
  function gruppen(){ return window.BEREICHE_GRUPPEN||[]; }
  function alle(){ return window.BEREICHE||[]; }
  function berufsfeld(id){
    var B=window.BERUFE||[]; for(var i=0;i<B.length;i++) if(B[i].id===id) return B[i]; return null; }
  function bereichVon(id){
    var A=alle(); for(var i=0;i<A.length;i++) if(A[i].id===id) return A[i]; return null; }

  /* Titel und Niveau kommen beim Berufsfeld aus berufe.js */
  function titel(b){ if(b.t) return b.t; var f=berufsfeld(b.beruf); return f?f.t:b.id; }
  function unter(b){
    if(b.u) return b.u;
    var f=berufsfeld(b.beruf);
    if(!f) return '';
    if(f.unter) return f.unter;
    if(f.handlungen && f.handlungen.length)
      return f.handlungen.slice(0,2).map(function(h){return h.t;}).join(' · ');
    return f.warum ? String(f.warum).split('.')[0]+'.' : '';
  }
  function niveau(b){ if(b.lvl) return b.lvl; var f=berufsfeld(b.beruf); return f?(f.lvl||''):''; }

  /* ---------- Zählen, was drinsteckt ---------- */
  /* Ein Berufsfeld bringt eigene Dialoge mit, und in bereiche.js
     stehen noch welche aus dialoge.js. Manche meinen dasselbe
     („Die Uebergabe auf Station" und „Uebergabe auf der Station") —
     die zaehlen wir nur einmal. */
  function schluessel(t){
    return String(t||'').toLowerCase()
      .replace(/\b(der|die|das|dem|den|des|ein|eine|einer|einem|einen)\b/g,'')
      .replace(/[^a-zäöüß]+/g,'');
  }
  function dialoge(b){
    var D=window.DIALOGE||[], a=[], gesehen={};
    function dazu(d){
      if(!d) return;
      var k=schluessel(d.titel);
      if(gesehen[k]) return;
      gesehen[k]=1; a.push(d);
    }
    (b.dlg||[]).forEach(function(id){
      for(var i=0;i<D.length;i++) if(D[i].id===id){ dazu(D[i]); break; }
    });
    var f=berufsfeld(b.beruf);
    if(f && f.dialoge) f.dialoge.forEach(dazu);
    return a;
  }
  function themaVon(sk,th){
    var U=window.UEBUNGEN; if(!U||!U.skills) return null;
    for(var i=0;i<U.skills.length;i++){ if(U.skills[i].id!==sk) continue;
      var ts=U.skills[i].themes||[];
      for(var j=0;j<ts.length;j++) if(ts[j].id===th) return ts[j];
    } return null;
  }
  function aufgaben(sk,ids){
    var n=0; (ids||[]).forEach(function(t){ var x=themaVon(sk,t); if(x&&x.exercises) n+=x.exercises.length; });
    return n;
  }
  function uebungenZahl(b){
    var n=aufgaben('wortschatz',b.ws)+aufgaben('hoeren',b.ho);
    var f=berufsfeld(b.beruf); if(f&&f.ueb) n+=f.ueb.length;
    return n;
  }

  /* ---------- Stand ---------- */
  function dialogFertig(id){ var s=J('lern',null)||{}; return !!((s.dlg||{})[id]); }
  function themaBest(sk,th){ var s=J('ub',{})||{}; return ((s.themes||{})[sk+'|'+th]||{}).best||0; }
  function stand(b){
    var teile=[], d=dialoge(b);
    d.forEach(function(x){ teile.push(dialogFertig(x.id)?100:0); });
    (b.ws||[]).forEach(function(t){ teile.push(themaBest('wortschatz',t)); });
    (b.ho||[]).forEach(function(t){ teile.push(themaBest('hoeren',t)); });
    if(!teile.length) return 0;
    var s=0; teile.forEach(function(x){ s+=x; });
    return Math.round(s/teile.length);
  }

  /* ---------- Filter ---------- */
  var fWeg='freizeit', fNiveau='alle', fSuche='';
  var STUFEN=['A1','A2','B1','B2','C1','C2'];
  function niveauPasst(lvl,wunsch){
    if(!wunsch||wunsch==='alle') return true;
    var teile=String(lvl||'').split(/[–—\-\/]/).map(function(s){return s.trim().toUpperCase();}).filter(Boolean);
    if(!teile.length) return true;
    var von=STUFEN.indexOf(teile[0]), bis=STUFEN.indexOf(teile[teile.length-1]), ich=STUFEN.indexOf(wunsch);
    if(von<0||ich<0) return String(lvl||'').indexOf(wunsch)>=0;
    if(bis<0) bis=von;
    return ich>=von && ich<=bis;
  }
  function passt(b){
    if(b.weg!==fWeg) return false;
    if(!niveauPasst(niveau(b),fNiveau)) return false;
    if(fSuche){
      var t=(titel(b)+' '+unter(b)+' '+b.id).toLowerCase();
      if(t.indexOf(fSuche)<0) return false;
    }
    return true;
  }

  /* ============================================================
     Der Stil — die Handschrift des Lernraum-Entwurfs
     ============================================================ */
  function stil(){
    if(el('bereicheCSS')) return;
    var s=document.createElement('style'); s.id='bereicheCSS';
    s.textContent = [
      '#v-bereiche{',
      '--flaeche:#FFFFFF;--flaeche-2:#F5F0E4;--kante:#E7DFCD;',
      '--ink:#1D1B18;--ink-2:#5C574C;--ink-3:#928B7A;',
      '--petrol:#0E7C7B;--petrol-weich:#DCEFEC;',
      '--brot:#DD0000;--gold:#FFC94A;--gold-weich:#FFF3D6;',
      '--wolke:0 1px 2px rgba(29,27,24,.05), 0 8px 24px -12px rgba(29,27,24,.18);',
      'font-family:var(--schrift-text,Inter,system-ui,sans-serif);color:var(--ink);}',
      '#v-bereiche .be-titel{font-family:var(--schrift-titel,"Caveat Brush",cursive);font-weight:400;line-height:1.06;}',
      '#v-bereiche .be-kopf3{font-family:var(--schrift-kopf,"Shantell Sans",sans-serif);font-weight:700;letter-spacing:-.005em;}',
      '#v-bereiche .be-zuruf{font-family:"Caveat",var(--schrift-titel,cursive);font-size:20px;font-weight:600;',
      'color:var(--petrol);display:inline-block;transform:rotate(-1deg);margin-bottom:1px;}',

      /* Bühne */
      '#v-bereiche .be-buehne{display:grid;grid-template-columns:1fr auto;gap:18px;align-items:end;',
      'background:var(--flaeche);border:1px solid var(--kante);border-radius:20px;box-shadow:var(--wolke);',
      'padding:26px 28px 0;overflow:hidden;margin-bottom:22px;}',
      '#v-bereiche .be-buehne .tx{padding-bottom:26px;min-width:0;}',
      '#v-bereiche .be-buehne h2{font-size:clamp(28px,3.6vw,40px);margin:0 0 8px;}',
      '#v-bereiche .be-buehne p{color:var(--ink-2);font-size:15px;max-width:52ch;margin:0;}',
      '#v-bereiche .be-buehne img{height:150px;width:auto;display:block;margin-bottom:-2px;flex:none;}',
      '@media(max-width:700px){#v-bereiche .be-buehne{grid-template-columns:1fr;padding:20px 20px 0;}',
      '#v-bereiche .be-buehne img{height:104px;justify-self:end;}#v-bereiche .be-buehne .tx{padding-bottom:14px;}}',

      /* die zwei Wege */
      '#v-bereiche .be-wege{display:grid;grid-template-columns:1fr 1fr;gap:14px;margin-bottom:22px;}',
      '@media(max-width:640px){#v-bereiche .be-wege{grid-template-columns:1fr;}}',
      '#v-bereiche .be-weg{display:flex;gap:13px;align-items:flex-start;text-align:left;width:100%;',
      'background:var(--flaeche);border:1px solid var(--kante);border-radius:16px;padding:15px 17px;',
      'cursor:pointer;font-family:inherit;transition:border-color .13s,box-shadow .13s,background .13s;}',
      '#v-bereiche .be-weg:hover{border-color:var(--petrol);box-shadow:var(--wolke);}',
      '#v-bereiche .be-weg[aria-pressed="true"]{background:var(--petrol-weich);border-color:var(--petrol);}',
      '#v-bereiche .be-weg .zn{width:26px;height:26px;flex:none;margin-top:1px;}',
      '#v-bereiche .be-weg .zn svg{width:26px;height:26px;display:block;}',
      '#v-bereiche .be-weg b{display:block;font-family:var(--schrift-kopf,"Shantell Sans",sans-serif);',
      'font-size:16px;font-weight:700;margin-bottom:2px;}',
      '#v-bereiche .be-weg span{display:block;font-size:13.5px;color:var(--ink-2);line-height:1.45;}',
      '#v-bereiche .be-weg em{display:block;font-style:normal;font-size:12px;color:var(--ink-3);margin-top:5px;}',

      /* Filterleiste */
      '#v-bereiche .be-leiste{display:flex;flex-wrap:wrap;gap:8px;align-items:center;margin-bottom:24px;}',
      '#v-bereiche .be-stufe{border:1px solid var(--kante);background:var(--flaeche);color:var(--ink-2);',
      'border-radius:99px;padding:6px 13px;font-size:13px;font-weight:600;cursor:pointer;font-family:inherit;}',
      '#v-bereiche .be-stufe:hover{border-color:var(--petrol);color:var(--petrol);}',
      '#v-bereiche .be-stufe[aria-pressed="true"]{background:var(--ink);border-color:var(--ink);color:#fff;}',
      '#v-bereiche .be-suche{flex:1;min-width:180px;border:1px solid var(--kante);border-radius:99px;',
      'padding:8px 15px;font-family:inherit;font-size:14px;background:var(--flaeche);color:var(--ink);}',
      '#v-bereiche .be-suche:focus{outline:none;border-color:var(--petrol);box-shadow:0 0 0 3px var(--petrol-weich);}',

      /* Gruppe */
      '#v-bereiche .be-gruppe{margin-bottom:30px;}',
      '#v-bereiche .be-gruppe > header{margin-bottom:13px;}',
      '#v-bereiche .be-gruppe h3{font-size:21px;margin:0;}',
      '#v-bereiche .be-gruppe header p{margin:3px 0 0;color:var(--ink-3);font-size:13.5px;}',

      /* Kacheln */
      '#v-bereiche .be-raster{display:grid;grid-template-columns:repeat(auto-fill,minmax(216px,1fr));gap:14px;}',
      '#v-bereiche .be-k{display:flex;flex-direction:column;text-align:left;background:var(--flaeche);',
      'border:1px solid var(--kante);border-radius:16px;overflow:hidden;cursor:pointer;font-family:inherit;',
      'padding:0;transition:transform .13s,border-color .13s,box-shadow .13s;}',
      '#v-bereiche .be-k:hover{transform:translateY(-2px);border-color:var(--petrol);box-shadow:var(--wolke);}',
      '#v-bereiche .be-k .bd{height:104px;background:var(--flaeche-2);display:grid;place-items:center;overflow:hidden;}',
      '#v-bereiche .be-k .bd img{width:100%;height:100%;object-fit:cover;display:block;}',
      '#v-bereiche .be-k .bd svg{width:46px;height:46px;}',
      '#v-bereiche .be-k .tx{padding:12px 14px 14px;display:flex;flex-direction:column;gap:5px;flex:1;}',
      '#v-bereiche .be-k b{font-family:var(--schrift-kopf,"Shantell Sans",sans-serif);font-size:15px;',
      'font-weight:700;line-height:1.25;}',
      '#v-bereiche .be-k p{margin:0;font-size:13px;color:var(--ink-2);line-height:1.45;}',
      '#v-bereiche .be-k .fuss{margin-top:auto;padding-top:9px;display:flex;align-items:center;gap:8px;}',
      '#v-bereiche .be-chip{font-size:11.5px;font-weight:700;color:var(--ink-2);background:var(--flaeche-2);',
      'border-radius:99px;padding:2px 9px;font-variant-numeric:tabular-nums;white-space:nowrap;}',
      '#v-bereiche .be-zahl{font-size:11.5px;color:var(--ink-3);font-variant-numeric:tabular-nums;}',
      '#v-bereiche .be-balken{height:4px;border-radius:99px;background:var(--flaeche-2);overflow:hidden;margin-top:9px;}',
      '#v-bereiche .be-balken i{display:block;height:100%;background:var(--petrol);border-radius:99px;}',

      /* Detail */
      '#v-bereiche .be-zurueck{background:none;border:0;color:var(--ink-2);font-family:inherit;font-size:14px;',
      'cursor:pointer;padding:4px 0;margin-bottom:12px;display:inline-flex;gap:7px;align-items:center;}',
      '#v-bereiche .be-zurueck:hover{color:var(--petrol);}',
      '#v-bereiche .be-block{background:var(--flaeche);border:1px solid var(--kante);border-radius:18px;',
      'box-shadow:var(--wolke);padding:20px 22px;margin-bottom:16px;}',
      '#v-bereiche .be-block > h3{font-size:18px;margin:0 0 3px;}',
      '#v-bereiche .be-block > .hin{margin:0 0 14px;color:var(--ink-3);font-size:13.5px;}',
      '#v-bereiche .be-liste{display:flex;flex-direction:column;gap:8px;}',
      '#v-bereiche .be-z{display:flex;align-items:center;gap:12px;width:100%;text-align:left;background:var(--flaeche);',
      'border:1px solid var(--kante);border-radius:12px;padding:11px 13px;cursor:pointer;font-family:inherit;',
      'transition:border-color .13s,background .13s;}',
      '#v-bereiche .be-z:hover{border-color:var(--petrol);background:var(--petrol-weich);}',
      '#v-bereiche .be-z .lv{font-size:11px;font-weight:800;color:var(--petrol);background:var(--petrol-weich);'
      +'border-radius:99px;padding:3px 9px;flex:none;min-width:52px;text-align:center;white-space:nowrap;}',
      '#v-bereiche .be-z .nm{flex:1;min-width:0;font-size:14.5px;font-weight:600;}',
      '#v-bereiche .be-z .nm small{display:block;font-weight:400;font-size:12.5px;color:var(--ink-3);margin-top:1px;}',
      '#v-bereiche .be-z .ok{color:var(--petrol);font-weight:700;font-size:13px;flex:none;}',
      '#v-bereiche .be-knoepfe{display:flex;flex-wrap:wrap;gap:8px;}',
      '#v-bereiche .be-b{border:1px solid var(--kante);background:var(--flaeche);color:var(--ink-2);border-radius:99px;',
      'padding:8px 15px;font-size:13.5px;font-weight:600;cursor:pointer;font-family:inherit;text-decoration:none;',
      'display:inline-flex;align-items:center;gap:7px;}',
      '#v-bereiche .be-b:hover{border-color:var(--petrol);color:var(--petrol);}',
      '#v-bereiche .be-b.voll{background:var(--brot);border-color:var(--brot);color:#fff;}',
      '#v-bereiche .be-b.voll:hover{background:#B00000;border-color:#B00000;color:#fff;}',
      '#v-bereiche .be-leer{color:var(--ink-3);font-size:13.5px;margin:0;}',
      '#v-bereiche .be-hand{display:flex;gap:10px;align-items:flex-start;padding:9px 0;border-bottom:1px solid var(--kante);}',
      '#v-bereiche .be-hand:last-child{border-bottom:0;}',
      '#v-bereiche .be-hand .lv{font-size:11px;font-weight:800;color:var(--petrol);background:var(--petrol-weich);',
      'border-radius:99px;padding:2px 8px;flex:none;margin-top:2px;}',
      '#v-bereiche .be-hand b{display:block;font-size:14.5px;font-weight:600;}',
      '#v-bereiche .be-hand span{display:block;font-size:13px;color:var(--ink-3);margin-top:1px;}',
      '#v-bereiche .zeichen .tn{stroke:var(--ink);}',
      '#v-bereiche .zeichen .mk{fill:var(--gold);opacity:.5;}',
      '#v-bereiche .zeichen .tu{fill:var(--petrol);opacity:.45;}',
      '#v-bereiche .zeichen .fu{fill:var(--petrol);}',
      '#v-bereiche .zeichen .ge{fill:var(--gold);}',
      '#v-bereiche .be-chunk{padding:9px 0;border-bottom:1px solid var(--kante);}',
      '#v-bereiche .be-chunk:last-child{border-bottom:0;}',
      '#v-bereiche .be-chunk b{display:block;font-size:14.5px;font-weight:600;}',
      '#v-bereiche .be-chunk .hi{display:block;font-size:13px;color:var(--ink-3);margin-top:1px;}',
      '#v-bereiche .be-chunk .bsp{display:block;font-size:13.5px;color:var(--ink-2);font-style:italic;margin-top:3px;}',
      '#v-bereiche .be-chunk.spaet{display:none;}',
      '#v-bereiche .be-chunks.offen .be-chunk.spaet{display:block;}',
      '#v-bereiche .be-mehr{margin-top:12px;background:var(--petrol-weich);color:var(--petrol);border:1px solid var(--petrol);',
      'border-radius:99px;padding:8px 16px;font-family:inherit;font-size:13.5px;font-weight:700;cursor:pointer;}',
      '#v-bereiche .be-mehr:hover{background:var(--petrol);color:#fff;}',
      '#v-bereiche .be-saetze{display:flex;flex-direction:column;gap:8px;}',
      '#v-bereiche .be-satz{background:var(--flaeche-2);border:1px solid var(--kante);border-radius:12px;padding:10px 13px;}',
      '#v-bereiche .be-satz b{display:block;font-size:14.5px;font-weight:600;}',
      '#v-bereiche .be-satz span{display:block;font-size:13px;color:var(--ink-3);margin-top:2px;}',
      '#v-bereiche .be-schreib{background:var(--flaeche-2);border:1px solid var(--kante);border-radius:14px;padding:14px 16px;}',
      '#v-bereiche .be-schreib .auf{margin:0 0 10px;font-size:15px;font-weight:600;}',
      '#v-bereiche .be-schreib ul{margin:0 0 10px;padding-left:20px;}',
      '#v-bereiche .be-schreib li{font-size:13.5px;color:var(--ink-2);margin-bottom:3px;}',
      '#v-bereiche .be-schreib .hilfe{margin:0;font-size:13px;color:var(--ink-3);border-top:1px solid var(--kante);padding-top:9px;}',
      /* ---------- Am Handy: aus Kacheln wird eine Liste ----------
         49 Bereiche als grosse Bildkacheln ergaben am Handy eine
         Seite von fast 7000 Pixeln — man scrollt an allem vorbei,
         statt etwas zu finden. Als Zeile mit kleinem Bild links
         passt viermal so viel auf den Bildschirm. */
      '@media(max-width:760px){',
      '  #v-bereiche .be-liste{gap:7px;}',
      '  #v-bereiche .be-k{flex-direction:row;align-items:stretch;}',
      '  #v-bereiche .be-k .bd{width:78px;height:auto;min-height:78px;flex:none;}',
      '  #v-bereiche .be-k .tx{padding:10px 12px 10px 12px;gap:3px;}',
      '  #v-bereiche .be-k b{font-size:14.5px;}',
      '  #v-bereiche .be-k p{font-size:12.5px;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden;}',
      '  #v-bereiche .be-k .fuss{padding-top:6px;flex-wrap:wrap;gap:6px;}',
      '  #v-bereiche .be-balken{margin-top:6px;}',
      /* Die Gruppenueberschrift bleibt stehen: man weiss immer, wo man ist. */
      '  #v-bereiche .be-gruppe > header{position:sticky;top:0;z-index:5;padding:8px 0 6px;',
      '    background:linear-gradient(var(--grund,#FAF8F2) 82%,transparent);margin-bottom:8px;}',
      '  #v-bereiche .be-gruppe{margin-bottom:20px;}',
      '  #v-bereiche .be-gruppe h3{font-size:18px;}',
      '  #v-bereiche .be-gruppe header p{font-size:12.5px;}',
      '}',
      '#v-bereiche .be-schritt{display:inline-grid;place-items:center;width:26px;height:26px;flex:none;',
      '  border-radius:50%;background:var(--petrol,#1990A4);color:#fff;font-size:14px;font-weight:800;',
      '  margin-right:9px;vertical-align:2px;font-family:system-ui,sans-serif;}',
      '#v-bereiche .be-kopf3{display:flex;align-items:center;}',
      '@media(max-width:760px){#v-bereiche .be-schritt{width:23px;height:23px;font-size:13px;margin-right:7px;}}',
      '@media(prefers-reduced-motion:reduce){#v-bereiche *{transition:none!important;}}'
    ].join('');
    document.head.appendChild(s);
  }

  /* ============================================================
     Die Übersicht
     ============================================================ */
  function kachel(b){
    var d=dialoge(b).length, u=uebungenZahl(b), p=stand(b), zahl=[];
    if(d) zahl.push(d+' '+(d===1?'Situation':'Situationen'));
    if(u) zahl.push(u+' Übungen');
    if(b.lek) zahl.push('Lektion');
    var kopf = b.bild
      ? '<img src="amanda/'+E(b.bild)+'.webp" alt="" loading="lazy" onerror="this.remove()">'
      : (b.zeichen ? zeichen(b.zeichen) : '');
    return '<button class="be-k" type="button" onclick="bereichOeffnen(\''+E(b.id)+'\')">' +
      '<span class="bd">'+kopf+'</span>' +
      '<span class="tx">' +
        '<b>'+E(titel(b))+'</b>' +
        '<p>'+E(unter(b))+'</p>' +
        '<span class="fuss"><span class="be-chip">'+E(niveau(b))+'</span>' +
        '<span class="be-zahl">'+E(zahl.join(' · '))+'</span></span>' +
        (p>0 ? '<span class="be-balken"><i style="width:'+p+'%"></i></span>' : '') +
      '</span></button>';
  }

  window.renderBereiche = function(){
    stil();
    var ziel = el('v-bereiche'); if(!ziel) return;
    var W=wege(), aktiv=null;
    W.forEach(function(w){ if(w.id===fWeg) aktiv=w; });

    var h = '<div class="be">';

    /* Bühne */
    h += '<div class="be-buehne"><div class="tx">' +
         '<span class="be-zuruf">Wo willst du Deutsch können?</span>' +
         '<h2 class="be-titel">Such dir den Ort — das Material liegt schon bereit</h2>' +
         '<p>Jeder Ort bringt seine Situationen mit Amanda mit, seine Wörter, seine Grammatik und seine Lektion. ' +
         'Du musst nichts suchen: klick auf den Ort, an dem du das nächste Mal Deutsch sprichst.</p>' +
         '</div><img src="'+amandaBild('zeigen')+'" alt="" onerror="this.remove()"></div>';

    /* die zwei Wege */
    h += '<div class="be-wege">';
    W.forEach(function(w){
      var n = alle().filter(function(b){ return b.weg===w.id; }).length;
      h += '<button class="be-weg" type="button" aria-pressed="'+(w.id===fWeg)+'" onclick="bereichWeg(\''+E(w.id)+'\')">' +
           '<span class="zn">'+zeichen(w.zeichen)+'</span>' +
           '<span><b>'+E(w.t)+'</b><span>'+E(w.u)+'</span>' +
           '<em>'+n+' Bereiche</em></span></button>';
    });
    h += '</div>';

    /* Filter */
    h += '<div class="be-leiste">';
    ['alle','A1','A2','B1','B2','C1'].forEach(function(s){
      h += '<button class="be-stufe" type="button" aria-pressed="'+(s===fNiveau)+'" onclick="bereichStufe(\''+s+'\')">' +
           (s==='alle'?'Alle Niveaus':s) + '</button>';
    });
    h += '<input class="be-suche" type="search" placeholder="Ort suchen — Arzt, Amt, Pflege …" ' +
         'value="'+E(fSuche)+'" oninput="bereichSuche(this.value)">';
    h += '</div>';

    /* Gruppen */
    var leer=true;
    gruppen().filter(function(g){ return g.weg===fWeg; }).forEach(function(g){
      var liste = alle().filter(function(b){ return b.gr===g.id && passt(b); });
      if(!liste.length) return;
      leer=false;
      h += '<section class="be-gruppe"><header>' +
           '<h3 class="be-kopf3">'+E(g.t)+'</h3><p>'+E(g.u)+'</p></header>' +
           '<div class="be-raster">' + liste.map(kachel).join('') + '</div></section>';
    });
    if(leer){
      h += '<div class="be-block"><h3 class="be-kopf3">Dazu finde ich gerade nichts</h3>' +
           '<p class="hin">Nimm ein anderes Niveau oder lösche die Suche — dann kommt alles zurück.</p></div>';
    }

    h += '</div>';
    ziel.innerHTML = h;
    ziel.scrollTop = 0;
  };

  /* ============================================================
     Ein Ort im Einzelnen
     ============================================================ */
  /* Ein geoeffneter Bereich ist ein eigener Schritt: der Zurueck-Knopf
     fuehrt zurueck zur Liste, nicht aus dem Lernbereich heraus. */
  window.bereichSchliessen = function(){
    if(window.zurueckErledigt) zurueckErledigt('bereich');
    renderBereiche();
  };
  /* Die Nummer vor der Ueberschrift. Sie ist kein Schmuck: sie sagt,
     in welcher Reihenfolge man hier vorgeht. */
  function schritt(n){ return '<span class="be-schritt">' + n + '</span>'; }

  window.bereichOeffnen = function(id){
    stil();
    var b = bereichVon(id); if(!b) return;
    /* Fuer 'Weiter, wo du warst' — App und Plattform schreiben in
       dieselbe Notiz. */
    try{ if(window.LERNSTRUKTUR) LERNSTRUKTUR.merken({typ:'bereich', id:b.id, weg:b.weg, titel:titel(b)}); }catch(e){}
    if(window.zurueckAuf) zurueckAuf('bereich', function(){ renderBereiche(); });
    var ziel = el('v-bereiche'); if(!ziel) return;
    var f = berufsfeld(b.beruf);
    var d = dialoge(b), p = stand(b);

    var kopfBild = b.bild
      ? '<img src="amanda/'+E(b.bild)+'.webp" alt="" onerror="this.remove()">'
      : '<img src="'+amandaBild('schlau')+'" alt="" onerror="this.remove()">';

    var h = '<div class="be">';
    h += '<button class="be-zurueck" type="button" onclick="bereichSchliessen()">&larr; Alle Bereiche</button>';

    h += '<div class="be-buehne"><div class="tx">' +
         '<span class="be-zuruf">'+E(fWeg==='beruf'?'Deutsch für den Beruf':'Deutsch für die Freizeit')+'</span>' +
         '<h2 class="be-titel">'+E(titel(b))+'</h2>' +
         '<p>'+E(unter(b))+'</p>' +
         '<div class="be-leiste" style="margin:14px 0 20px">' +
           '<span class="be-chip">'+E(niveau(b))+'</span>' +
           (d.length?'<span class="be-chip">'+d.length+' Situationen</span>':'') +
           (uebungenZahl(b)?'<span class="be-chip">'+uebungenZahl(b)+' Übungen</span>':'') +
           (p>0?'<span class="be-chip">'+p+' % geschafft</span>':'') +
           (f&&f.pruef?'<span class="be-chip">'+E(String(f.pruef).split(/\s·\s|,\s/)[0])+'</span>':'') +
         '</div></div>' + kopfBild + '</div>';

    /* Beruf: was der Arbeitstag verlangt */
    if(f && f.handlungen && f.handlungen.length){
      h += '<div class="be-block"><h3 class="be-kopf3">Das verlangt dein Arbeitstag</h3>' +
           '<p class="hin">Keine Vokabelliste — die Sprachhandlungen, die in diesem Feld wirklich vorkommen.</p>';
      f.handlungen.forEach(function(x){
        h += '<div class="be-hand"><span class="lv">'+E(x.lvl||'')+'</span><div>' +
             '<b>'+E(x.t)+'</b>'+(x.e?'<span>'+E(x.e)+'</span>':'')+'</div></div>';
      });
      h += '</div>';
    }

    /* Beruf: die Wendungen, die der Tag verlangt */
    if(f && f.chunks && f.chunks.length){
      var ck=f.chunks, sicht=12;
      h += '<div class="be-block"><h3 class="be-kopf3">Die Wendungen für deinen Tag</h3>' +
           '<p class="hin">Nicht einzelne Wörter — ganze Wendungen, so wie sie im Betrieb gesagt werden. ' +
           E(ck.length)+' Stück.</p><div class="be-chunks">';
      ck.forEach(function(c,i){
        h += '<div class="be-chunk'+(i>=sicht?' spaet':'')+'">' +
             '<b>'+E(c.de)+'</b>' +
             (c.hi?'<span class="hi">'+E(c.hi)+'</span>':'') +
             (c.bsp?'<span class="bsp">„'+E(c.bsp)+'"</span>':'') +
             '</div>';
      });
      h += '</div>';
      if(ck.length>sicht)
        h += '<button class="be-mehr" type="button" onclick="bereichMehr(this)">' +
             'Alle '+E(ck.length)+' Wendungen zeigen</button>';
      h += '</div>';
    }

    /* Beruf: Saetze, die immer gehen */
    if(f && f.saetze && f.saetze.length){
      h += '<div class="be-block"><h3 class="be-kopf3">Sätze, die immer gehen</h3>' +
           '<p class="hin">Wenn du nicht weiterweißt: einer dieser Sätze passt fast immer.</p>' +
           '<div class="be-saetze">';
      f.saetze.forEach(function(x){
        h += '<div class="be-satz"><b>'+E(x.de)+'</b>' +
             (x.wann?'<span>'+E(x.wann)+'</span>':'')+'</div>';
      });
      h += '</div></div>';
    }

    /* Beruf: einmal schreiben */
    if(f && f.schreiben && f.schreiben.auf){
      var sc=f.schreiben;
      h += '<div class="be-block"><h3 class="be-kopf3">Einmal schreiben</h3>' +
           '<p class="hin">Eine Aufgabe aus dem Berufsalltag. Schreib sie und schick sie Julia zur Korrektur.</p>' +
           '<div class="be-schreib"><p class="auf">'+E(sc.auf)+'</p>';
      if(sc.punkte && sc.punkte.length){
        h += '<ul>';
        sc.punkte.forEach(function(x){ h += '<li>'+E(x)+'</li>'; });
        h += '</ul>';
      }
      if(sc.hilfe) h += '<p class="hilfe">'+E(sc.hilfe)+'</p>';
      h += '</div></div>';
    }

    /* Situationen mit Amanda — Schritt 3 auf dem Weg */
    var blockSprechen = '<div class="be-block"><h3 class="be-kopf3">' + schritt(3) +
         'Sprich es mit Amanda durch</h3>' +
         '<p class="hin">Sie fängt an, du antwortest. Mit Redemitteln, falls dir das Wort fehlt.</p>';
    if(d.length){
      blockSprechen += '<div class="be-liste">';
      d.forEach(function(x){
        var fertig = dialogFertig(x.id);
        /* Kein Emoji: das Niveau steht links, das sagt etwas.
           Emojis sehen auf jedem Geraet anders aus. */
        blockSprechen += '<button class="be-z" type="button" onclick="bereichDialog(\''+E(x.id)+'\')">' +
             '<span class="lv">'+E(x.lvl||'')+'</span>' +
             '<span class="nm">'+E(x.titel)+(x.dauer?'<small>'+E(x.dauer)+'</small>':'')+'</span>' +
             (fertig?'<span class="ok">geschafft</span>':'') +
             '</button>';
      });
      blockSprechen += '</div>';
    } else {
      blockSprechen += '<p class="be-leer">Für diesen Bereich baue ich die Situationen gerade. Die Wörter und die Lektion unten gibt es schon.</p>';
    }
    blockSprechen += '</div>';

    /* Wörter und Hören */
    var wortListe = (b.ws||[]).filter(function(t){ return !!themaVon('wortschatz',t); });
    var hoerListe = (b.ho||[]).filter(function(t){ return !!themaVon('hoeren',t); });
    var blockWoerter = '', blockHoeren = '';
    if(wortListe.length){
      blockWoerter = '<div class="be-block"><h3 class="be-kopf3">' + schritt(1) + 'Die Wörter dazu</h3>' +
           '<p class="hin">Fang hier an. Genau der Wortschatz, den dieser Ort verlangt — nicht der ganze Trainer.</p>' +
           '<div class="be-knoepfe">';
      wortListe.forEach(function(t){
        var th=themaVon('wortschatz',t), n=(th.exercises||[]).length, best=themaBest('wortschatz',t);
        blockWoerter += '<button class="be-b" type="button" onclick="bereichUeben(\'wortschatz\',\''+E(t)+'\')">' +
             E(th.title||t) + ' <span class="be-zahl">'+n+(best?' · '+best+' %':'')+'</span></button>';
      });
      blockWoerter += '</div></div>';
    }
    if(hoerListe.length){
      blockHoeren = '<div class="be-block"><h3 class="be-kopf3">' + schritt(2) + 'Hör es im Alltag</h3>' +
           '<p class="hin">Dieselben Wörter, aber gesprochen — so, wie sie an diesem Ort wirklich klingen.</p>' +
           '<div class="be-knoepfe">';
      hoerListe.forEach(function(t){
        var th=themaVon('hoeren',t);
        blockHoeren += '<button class="be-b" type="button" onclick="bereichUeben(\'hoeren\',\''+E(t)+'\')">' +
             E(th.title||t)+'</button>';
      });
      blockHoeren += '</div></div>';
    }

    h += blockWoerter + blockHoeren + blockSprechen;

    /* Bausteine */
    var bau = (b.hilf||[]);
    if(bau.length){
      h += '<div class="be-block"><h3 class="be-kopf3">Wenn du magst: die Grammatik dazu</h3>' +
           '<p class="hin">Nur die Bausteine, die an diesem Ort vorkommen.</p><div class="be-knoepfe">';
      bau.forEach(function(id){
        var g=themaVon('grammatik',id), a=themaVon('aussprache',id);
        var th=g||a, sk=g?'grammatik':'aussprache';
        if(!th) return;
        h += '<button class="be-b" type="button" onclick="bereichUeben(\''+sk+'\',\''+E(id)+'\')">' +
             E(th.title||id)+'</button>';
      });
      h += '</div></div>';
    }

    /* Lektion und Amanda — der letzte Schritt */
    h += '<div class="be-block"><h3 class="be-kopf3">' + schritt(4) + 'Alles zusammen in der Lektion</h3>' +
         '<p class="hin">Einstieg, Wortschatz, Dialoge, Debatte, freies Sprechen und Übungen — auf einer Seite.</p>' +
         '<div class="be-knoepfe">';
    if(b.lek) h += '<a class="be-b voll" href="'+E(b.lek)+'" target="_blank" rel="noopener">Die ganze Lektion öffnen</a>';
    h += '<button class="be-b" type="button" onclick="bereichAmanda(\''+E(b.id)+'\')">Amanda dazu fragen</button>';
    h += '</div></div>';

    h += '</div>';
    ziel.innerHTML = h;
    ziel.scrollTop = 0;
    try{ window.scrollTo({top:0,behavior:'instant'}); }catch(e){ window.scrollTo(0,0); }
  };

  /* ---------- Was die Knöpfe tun ---------- */
  window.bereichMehr = function(kn){
    var block = kn.parentNode.querySelector('.be-chunks');
    if(block){ block.classList.add('offen'); kn.remove(); }
  };

  window.bereichWeg = function(w){ fWeg=w; fSuche=''; window.renderBereiche(); };
  window.bereichStufe = function(s){ fNiveau=s; window.renderBereiche(); };
  window.bereichSuche = function(v){
    fSuche=String(v||'').trim().toLowerCase();
    var pos=null, feld=document.querySelector('#v-bereiche .be-suche');
    if(feld) pos=feld.selectionStart;
    window.renderBereiche();
    var neu=document.querySelector('#v-bereiche .be-suche');
    if(neu){ neu.focus(); if(pos!=null) try{ neu.setSelectionRange(pos,pos); }catch(e){} }
  };
  window.bereichDialog = function(id){
    if(window.lernDialog) return window.lernDialog(id);
    if(window.toast) toast('Die Situationen laden gerade noch.');
  };
  window.bereichUeben = function(sk,th){
    if(window.ubStart) return window.ubStart(sk,th);
    if(window.toast) toast('Der Übungsteil lädt gerade noch.');
  };
  window.bereichAmanda = function(id){
    var b=bereichVon(id); if(!b) return;
    var frage='Ich möchte Deutsch für „'+titel(b)+'" üben. Gib mir bitte drei Sätze, die ich dort wirklich brauche.';
    if(window.AmandaFragen) return window.AmandaFragen(frage);
    if(window.toast) toast('Amanda ist gleich da.');
  };
})();
