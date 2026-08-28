/* ============================================================
   deutschoderwas club — LERNEN
   Üben und Kursbibliothek an einem Ort.

   Aufbau:
     1. Die Übersicht   — alle Themen als Fotokarten
     2. Die Themenseite — alles zu einem Thema untereinander
     3. Der Dialog      — echtes Gesprächsfenster mit Amanda

   Gebraucht werden:  themen.js · uebungen.js · dialoge.js
   Freiwillig:        stimmen.js (Stimmen) · klang.js (Geräusche)
   ============================================================ */
(function () {
  'use strict';

  /* ---------- kleine Helfer ---------- */
  function E(s){ return String(s==null?'':s).replace(/[&<>"']/g,function(c){
    return ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'})[c]; }); }
  function J(k,d){ try{ if(window.lsGet) return lsGet(k,d);
    var v=JSON.parse(localStorage.getItem('ub_'+k)); return v==null?d:v; }catch(e){ return d; } }
  function S(k,v){ try{ if(window.lsSet) return lsSet(k,v);
    localStorage.setItem('ub_'+k,JSON.stringify(v)); }catch(e){} }
  function note(t){ try{ if(window.toast) toast(t); }catch(e){} }
  function klang(n){ try{ if(window.klang) window.klang(n); }catch(e){} }
  function heute(){ var d=new Date(); return d.getFullYear()+'-'+('0'+(d.getMonth()+1)).slice(-2)+'-'+('0'+d.getDate()).slice(-2); }
  function el(id){ return document.getElementById(id); }
  function mix(a){ a=a.slice(); for(var i=a.length-1;i>0;i--){var j=Math.floor(Math.random()*(i+1)),t=a[i];a[i]=a[j];a[j]=t;} return a; }

  /* Stimme: nutzt stimmen.js, sonst der Browser direkt */
  function sprich(text,opt){
    opt=opt||{};
    if(window.sagen) return window.sagen(text,opt);
    try{ if(!window.speechSynthesis) return; speechSynthesis.cancel();
      var u=new SpeechSynthesisUtterance(text); u.lang='de-DE'; u.rate=.97;
      if(opt.fertig) u.onend=opt.fertig; speechSynthesis.speak(u); }catch(e){ if(opt.fertig)opt.fertig(); }
  }
  function stille(){ try{ if(window.stimmeStopp) return window.stimmeStopp();
    if(window.speechSynthesis) speechSynthesis.cancel(); }catch(e){} }

  /* ---------- Fortschritt ---------- */
  /* Die Übungen selbst schreiben in denselben Speicher wie bisher (Schlüssel „ub"),
     damit nichts verloren geht. Dialoge und Lektionen liegen unter „lern".      */
  function ubStand(){ return J('ub',{})||{}; }
  function themenStand(sk,th){ var s=ubStand(); return ((s.themes||{})[sk+'|'+th]||{}).best||0; }
  function lernStand(){ var s=J('lern',null)||{}; s.dlg=s.dlg||{}; s.zuletzt=s.zuletzt||null; return s; }
  function lernSpeichern(s){ S('lern',s); }
  function dialogFertig(id){ return !!lernStand().dlg[id]; }
  function dialogMerken(id){ var s=lernStand(); s.dlg[id]={am:heute()}; lernSpeichern(s); }
  function zuletztMerken(id){ var s=lernStand(); s.zuletzt=id; lernSpeichern(s); }

  /* ---------- Daten zusammenstellen ---------- */
  function themen(){ return window.THEMEN||[]; }
  function themaVon(id){ var a=themen(); for(var i=0;i<a.length;i++) if(a[i].id===id) return a[i]; return null; }

  function uebThema(skId,thId){
    var U=window.UEBUNGEN; if(!U||!U.skills) return null;
    for(var i=0;i<U.skills.length;i++){ if(U.skills[i].id!==skId) continue;
      var ts=U.skills[i].themes||[];
      for(var j=0;j<ts.length;j++) if(ts[j].id===thId) return ts[j]; }
    return null;
  }
  function aufgabenZahl(skId,ids){
    var n=0; (ids||[]).forEach(function(t){ var x=uebThema(skId,t); if(x&&x.exercises) n+=x.exercises.length; });
    return n;
  }
  function dialogeVon(th){
    var D=window.DIALOGE||[]; var kats=th.dlg||[]; if(!kats.length) return [];
    return D.filter(function(d){ return kats.indexOf(d.kat)>=0; });
  }

  /* Wie weit ist ein Thema? 0–100 */
  function fortschritt(th){
    var teile=[],i;
    (th.ws||[]).forEach(function(t){ teile.push(themenStand('wortschatz',t)); });
    (th.ho||[]).forEach(function(t){ teile.push(themenStand('hoeren',t)); });
    if(th.gr) teile.push(themenStand('grammatik',th.gr));
    if(th.au) teile.push(themenStand('aussprache',th.au));
    var dl=dialogeVon(th);
    if(dl.length){ var f=0; dl.forEach(function(d){ if(dialogFertig(d.id)) f++; }); teile.push(Math.round(f/dl.length*100)); }
    if(!teile.length) return 0;
    var sum=0; for(i=0;i<teile.length;i++) sum+=teile[i];
    return Math.round(sum/teile.length);
  }

  function foto(id){ return 'bilder/thema/'+id+'.jpg'; }

  /* ---------- Aussehen ---------- */
  function stil(){
    if(el('lernCSS')) return;
    var s=document.createElement('style'); s.id='lernCSS';
    s.textContent=[
'#v-lernen{--lb:#1F5FD1;--lb2:#12408F;--lr:#DD0000;--lg:#FFCE00;--lt:#12181F;--lm:#5E6A78;--lc:#fff;--ll:#E7EBF0;max-width:1180px;margin:0 auto;padding-bottom:70px}',
'#v-lernen *{box-sizing:border-box}',

/* Kopf */
'.ln-kopf{position:relative;overflow:hidden;border-radius:24px;padding:26px 28px;margin:0 0 20px;background:linear-gradient(120deg,#12408F 0%,#1F5FD1 58%,#2E86D8 100%);color:#fff}',
'.ln-kopf::after{content:"";position:absolute;right:-70px;top:-90px;width:280px;height:280px;border-radius:50%;background:rgba(255,255,255,.09)}',
'.ln-kopf::before{content:"";position:absolute;right:80px;bottom:-120px;width:200px;height:200px;border-radius:50%;background:rgba(255,206,0,.16)}',
'.ln-kopf h1{margin:0 0 4px;font-size:29px;line-height:1.15;letter-spacing:-.4px}',
'.ln-kopf p{margin:0;opacity:.9;font-size:14.5px;max-width:52ch}',
'.ln-zahlen{position:relative;z-index:2;display:flex;gap:10px;flex-wrap:wrap;margin-top:18px}',
'.ln-z{display:flex;align-items:center;gap:10px;background:rgba(255,255,255,.14);border:1px solid rgba(255,255,255,.22);border-radius:15px;padding:9px 14px;backdrop-filter:blur(6px)}',
'.ln-z b{font-size:19px;line-height:1;display:block}',
'.ln-z span{font-size:11.5px;opacity:.85;letter-spacing:.2px}',
'.ln-ring{width:40px;height:40px;border-radius:50%;display:grid;place-items:center;font-size:11px;font-weight:800;background:conic-gradient(var(--lg) calc(var(--p)*1%),rgba(255,255,255,.22) 0)}',
'.ln-ring i{width:30px;height:30px;border-radius:50%;background:#1B54B8;display:grid;place-items:center;font-style:normal;font-size:11px}',
'@media(max-width:760px){.ln-kopf{padding:20px 18px;border-radius:20px}.ln-kopf h1{font-size:24px}.ln-kopf p{font-size:13.5px}.ln-zahlen{flex-wrap:nowrap;overflow-x:auto;margin-top:14px;padding-bottom:3px;scrollbar-width:none}.ln-zahlen::-webkit-scrollbar{display:none}.ln-z{flex:0 0 auto}}',

/* Weitermachen */
'.ln-nband{display:flex;align-items:center;gap:14px;background:#fff;border:1px solid var(--ll);border-radius:18px;padding:13px 16px;margin:0 0 14px;box-shadow:0 3px 14px rgba(18,24,31,.05)}',
'.ln-nband .stufe{width:46px;height:46px;flex:0 0 46px;border-radius:14px;background:linear-gradient(135deg,#12408F,#2E86D8);color:#fff;display:grid;place-items:center;font-weight:800;font-size:17px}',
'.ln-nband .tx{flex:1;min-width:0}',
'.ln-nband b{display:block;font-size:15.5px;color:var(--lt)}',
'.ln-nband small{display:block;font-size:12.5px;color:var(--lm)}',
'.ln-nband .kn{display:flex;gap:7px;flex-wrap:wrap}',
'@media(max-width:640px){.ln-nband{flex-wrap:wrap}.ln-nband .kn{width:100%}.ln-nband .kn .ln-btn{flex:1}}',
'.ln-weiter{display:flex;gap:0;align-items:stretch;background:var(--lc);border:1px solid var(--ll);border-radius:20px;overflow:hidden;margin:0 0 22px;box-shadow:0 6px 22px rgba(18,24,31,.06)}',
'.ln-weiter .wb{width:210px;flex:0 0 210px;background:#EEF2F7 center/cover no-repeat}',
'.ln-weiter .wt{padding:18px 20px;display:flex;flex-direction:column;justify-content:center;gap:7px;min-width:0}',
'.ln-weiter .we{font-size:11.5px;font-weight:800;letter-spacing:.7px;text-transform:uppercase;color:var(--lb)}',
'.ln-weiter h3{margin:0;font-size:20px;color:var(--lt);letter-spacing:-.2px}',
'.ln-weiter p{margin:0;font-size:13.5px;color:var(--lm)}',
'@media(max-width:640px){.ln-weiter{flex-direction:column}.ln-weiter .wb{width:100%;flex:0 0 132px}}',

/* Knöpfe */
'.ln-btn{display:inline-flex;align-items:center;justify-content:center;gap:8px;border:none;cursor:pointer;font-family:inherit;font-weight:800;font-size:14.5px;padding:12px 20px;border-radius:13px;background:var(--lr);color:#fff;box-shadow:0 4px 0 #A80000;transition:transform .08s,box-shadow .08s;text-decoration:none}',
'.ln-btn:active{transform:translateY(3px);box-shadow:0 1px 0 #A80000}',
'.ln-btn.blau{background:var(--lb);box-shadow:0 4px 0 var(--lb2)}',
'.ln-btn.blau:active{box-shadow:0 1px 0 var(--lb2)}',
'.ln-btn.hell{background:#EEF2F8;color:var(--lb2);box-shadow:none;border:1px solid var(--ll)}',
'.ln-btn.klein{padding:9px 14px;font-size:13px;border-radius:11px}',
'.ln-btn[disabled]{opacity:.5;cursor:default;box-shadow:none}',

/* Filter */
'.ln-filter{position:sticky;top:0;z-index:20;background:rgba(247,248,250,.93);backdrop-filter:blur(10px);padding:12px 0 12px;margin:0 0 18px;border-bottom:1px solid var(--ll);display:flex;gap:10px;align-items:center}',
'.ln-chips{display:flex;gap:8px;flex-wrap:wrap;align-items:center;flex:1;min-width:0}',
'.ln-chip{border:1px solid var(--ll);background:#fff;color:var(--lm);border-radius:999px;padding:8px 15px;font-size:13.5px;font-weight:700;cursor:pointer;font-family:inherit;transition:.14s}',
'.ln-chip:hover{border-color:#C6D2E2;color:var(--lb2)}',
'.ln-chip.on{background:var(--lb);border-color:var(--lb);color:#fff}',
'.ln-chip.lv{padding:8px 12px;font-size:12.5px}',
'.ln-chip.lv.on{background:var(--lt);border-color:var(--lt)}',
'.ln-suche{flex:0 0 240px;position:relative}',
'.ln-suche input{width:100%;border:1px solid var(--ll);border-radius:999px;padding:9px 15px 9px 34px;font:inherit;font-size:13.5px;background:#fff;color:var(--lt)}',
'.ln-suche input:focus{outline:none;border-color:var(--lb)}',
'.ln-suche em{position:absolute;left:12px;top:50%;transform:translateY(-50%);font-style:normal;opacity:.45;font-size:13px}',
'@media(max-width:760px){.ln-filter{flex-direction:column-reverse;align-items:stretch;gap:9px;padding:10px 0}.ln-suche{flex:1 1 auto}.ln-chips{flex-wrap:nowrap;overflow-x:auto;padding-bottom:3px;-webkit-overflow-scrolling:touch;scrollbar-width:none}.ln-chips::-webkit-scrollbar{display:none}.ln-chip{flex:0 0 auto}}',

/* Themenraster */
'.ln-block{margin:0 0 30px}',
'.ln-bereich{margin:0 0 40px;padding:0 0 4px}',
'.ln-bereich + .ln-bereich{border-top:1px solid var(--ll);padding-top:30px}',
'.ln-bsblock{margin:22px 0 0;background:#F4F7FB;border:1px solid #E2E9F3;border-radius:18px;padding:16px 18px 18px}',
'.ln-bskopf{display:flex;align-items:baseline;gap:9px;margin:0 0 10px;flex-wrap:wrap}',
'.ln-bskopf b{font-size:14.5px;color:var(--lb2)}',
'.ln-bskopf span{font-size:12.5px;color:var(--lm)}',
'.ln-bsblock .ln-bsliste + .ln-bskopf{margin-top:18px}',
'.ln-bsliste{display:grid;grid-template-columns:repeat(auto-fill,minmax(216px,1fr));gap:9px}',
'.ln-bs{display:flex;align-items:center;gap:10px;text-align:left;border:1px solid #E2E9F3;background:#fff;border-radius:13px;padding:8px 11px 8px 8px;cursor:pointer;font-family:inherit;transition:.14s;width:100%}',
'.ln-bs:hover{border-color:var(--lb);transform:translateY(-2px);box-shadow:0 5px 14px rgba(18,24,31,.08)}',
'.ln-bs .bild{width:52px;height:38px;flex:0 0 52px;border-radius:9px;overflow:hidden;background:#DDE4EC;display:block}',
'.ln-bs .bild img{width:100%;height:100%;object-fit:cover;display:block}',
'.ln-bs .tx{min-width:0;flex:1}',
'.ln-bs b{display:block;font-size:13.5px;color:var(--lt);line-height:1.25}',
'.ln-bs small{display:block;font-size:11.5px;color:var(--lm);white-space:nowrap;overflow:hidden;text-overflow:ellipsis;margin-top:1px}',
'.ln-bs .hk{color:#16a34a;font-weight:800;font-size:14px}',
'.ln-bs.fertig{background:#F4FBF6;border-color:#CDEBD9}',
'@media(max-width:640px){.ln-bsblock{padding:13px 13px 15px;border-radius:15px}.ln-bsliste{grid-template-columns:1fr 1fr;gap:7px}.ln-bs{padding:7px 8px 7px 7px;gap:8px}.ln-bs .bild{width:42px;height:32px;flex:0 0 42px}.ln-bs b{font-size:12.5px}.ln-bs small{font-size:10.5px}}',
'.ln-bh{display:flex;align-items:baseline;gap:10px;margin:0 0 12px}',
'.ln-bh h2{margin:0;font-size:20px;color:var(--lt);letter-spacing:-.2px}',
'.ln-bh span{font-size:13px;color:var(--lm)}',
'.ln-raster{display:grid;grid-template-columns:repeat(auto-fill,minmax(232px,1fr));gap:16px}',
'@media(max-width:640px){.ln-raster{grid-template-columns:repeat(auto-fill,minmax(152px,1fr));gap:11px}.ln-titel{font-size:14px;left:10px;right:10px;bottom:9px}.ln-fuss{padding:9px 10px 11px}.ln-bh h2{font-size:18px}.ln-bh{flex-wrap:wrap;gap:4px 9px}}',
'.ln-karte{position:relative;border:none;padding:0;text-align:left;font-family:inherit;cursor:pointer;background:var(--lc);border-radius:18px;overflow:hidden;box-shadow:0 3px 14px rgba(18,24,31,.08);transition:transform .16s,box-shadow .16s;display:block;width:100%}',
'.ln-karte:hover{transform:translateY(-4px);box-shadow:0 12px 28px rgba(18,24,31,.14)}',
'.ln-bild{display:block;position:relative;aspect-ratio:16/10;overflow:hidden;background:#DDE4EC}',
'.ln-bild img{width:100%;height:100%;object-fit:cover;display:block;transition:transform .5s}',
'.ln-karte:hover .ln-bild img{transform:scale(1.06)}',
'.ln-bild .schl{display:block;position:absolute;inset:0;background:linear-gradient(to top,rgba(9,14,22,.78) 0%,rgba(9,14,22,.18) 45%,rgba(9,14,22,0) 72%)}',
'.ln-lv{white-space:nowrap;position:absolute;top:10px;left:10px;background:rgba(255,255,255,.94);color:var(--lb2);font-size:11px;font-weight:800;padding:4px 9px;border-radius:999px;letter-spacing:.3px}',
'.ln-fertig{white-space:nowrap;position:absolute;top:10px;right:10px;background:var(--lg);color:#3A2B00;font-size:11px;font-weight:800;padding:4px 9px;border-radius:999px}',
'.ln-titel{display:block;position:absolute;left:13px;right:13px;bottom:11px;color:#fff;font-size:16px;font-weight:800;line-height:1.22;text-shadow:0 1px 8px rgba(0,0,0,.4)}',
'.ln-fuss{display:block;padding:11px 13px 13px}',
'.ln-bsp{display:block;font-size:12.5px;line-height:1.35;color:var(--lb2);background:#F2F6FD;border-left:3px solid var(--lb);border-radius:0 8px 8px 0;padding:6px 9px;margin:0 0 9px}',
'.ln-hero .bsp{display:inline-block;margin-top:8px;background:rgba(255,255,255,.16);border:1px solid rgba(255,255,255,.28);border-radius:10px;padding:6px 12px;font-size:14px}',
'.ln-teile{display:flex;gap:6px;flex-wrap:wrap;margin:0 0 9px}',
'.ln-teil{display:inline-block;white-space:nowrap}',
'.ln-teil{font-size:11px;font-weight:700;color:var(--lm);background:#F1F4F8;border-radius:7px;padding:3px 7px}',
'.ln-bar{display:block;height:6px;border-radius:6px;background:#EDF0F4;overflow:hidden}',
'.ln-bar i{display:block;height:100%;border-radius:6px;background:linear-gradient(90deg,var(--lb),#4E93E8)}',
'.ln-bar.voll i{background:linear-gradient(90deg,#16a34a,#4ADE80)}',

/* Themenseite */
'.ln-zurueck{display:inline-flex;align-items:center;gap:7px;border:none;background:none;color:var(--lb);font:inherit;font-weight:800;font-size:14px;cursor:pointer;padding:6px 0;margin:0 0 12px}',
'.ln-hero{position:relative;border-radius:24px;overflow:hidden;margin:0 0 22px;background:#DDE4EC;aspect-ratio:24/9;min-height:190px}',
'.ln-hero img{position:absolute;inset:0;width:100%;height:100%;object-fit:cover}',
'.ln-hero .schl{position:absolute;inset:0;background:linear-gradient(to top,rgba(7,12,20,.86),rgba(7,12,20,.24) 55%,rgba(7,12,20,.05))}',
'.ln-hero .tx{position:absolute;left:26px;right:26px;bottom:22px;color:#fff}',
'.ln-hero h1{margin:6px 0 8px;font-size:31px;line-height:1.1;letter-spacing:-.5px}',
'.ln-hero .meta{display:flex;gap:8px;flex-wrap:wrap;align-items:center;font-size:13px;opacity:.94}',
'.ln-hero .pill{background:rgba(255,255,255,.2);border:1px solid rgba(255,255,255,.3);padding:3px 10px;border-radius:999px;font-weight:700;font-size:12px}',
'@media(max-width:640px){.ln-hero{aspect-ratio:16/10}.ln-hero h1{font-size:23px}.ln-hero .tx{left:16px;right:16px;bottom:16px}}',

'.ln-reihe{display:flex;align-items:center;gap:15px;background:var(--lc);border:1px solid var(--ll);border-radius:17px;padding:15px 17px;margin:0 0 11px;transition:.14s}',
'.ln-reihe:hover{border-color:#C7D5E9;box-shadow:0 5px 18px rgba(18,24,31,.07)}',
'.ln-reihe .nr{width:42px;height:42px;flex:0 0 42px;border-radius:13px;display:grid;place-items:center;font-size:19px;background:#EEF3FA}',
'.ln-reihe .tx{flex:1;min-width:0}',
'.ln-reihe b{display:block;font-size:15.5px;color:var(--lt);margin:0 0 2px}',
'.ln-reihe small{display:block;font-size:12.5px;color:var(--lm)}',
'.ln-reihe .ba{width:96px;flex:0 0 96px}',
'@media(max-width:640px){.ln-reihe{flex-wrap:wrap}.ln-reihe .ba{display:none}.ln-reihe .ln-btn{width:100%}}',
'.ln-reihe.zu{opacity:.55}',

'.ln-h3{margin:26px 0 12px;font-size:17px;color:var(--lt)}',
'.ln-dlg{display:grid;grid-template-columns:repeat(auto-fill,minmax(228px,1fr));gap:11px}',
'.ln-d{display:flex;align-items:center;gap:11px;text-align:left;border:1px solid var(--ll);background:#fff;border-radius:15px;padding:12px 13px;cursor:pointer;font-family:inherit;transition:.14s}',
'.ln-d:hover{border-color:var(--lb);transform:translateY(-2px)}',
'.ln-d .em{font-size:22px;width:38px;height:38px;flex:0 0 38px;border-radius:11px;background:#F2F6FC;display:grid;place-items:center}',
'.ln-d .db{width:54px;height:54px;flex:0 0 54px;border-radius:12px;overflow:hidden;background:#F2F6FC;position:relative;display:grid;place-items:center;font-size:21px}',
'.ln-d .db img{position:absolute;inset:0;width:100%;height:100%;object-fit:cover}',
'.ln-d .dt{min-width:0;flex:1}',
'.ln-d b{display:block;font-size:14px;color:var(--lt);white-space:nowrap;overflow:hidden;text-overflow:ellipsis}',
'.ln-d small{font-size:11.5px;color:var(--lm)}',
'.ln-d .ok{color:#16a34a;font-weight:800;font-size:14px}',

'.ln-leer{text-align:center;color:var(--lm);padding:36px 20px;background:#fff;border:1px dashed var(--ll);border-radius:18px}',

/* ---------- Gesprächsfenster ---------- */
'.dg-ov{--lb:#1F5FD1;--lb2:#12408F;--lr:#DD0000;--lg:#FFCE00;--lt:#12181F;--lm:#5E6A78;--lc:#fff;--ll:#E7EBF0;position:fixed;inset:0;z-index:9000;background:#F4F6F9;display:none;flex-direction:column}',
'.dg-ov.auf{display:flex}',
'.dg-kopf{flex:0 0 auto;display:flex;align-items:center;gap:12px;padding:12px 16px;background:#fff;border-bottom:1px solid #E7EBF0}',
'.dg-kopf .zu{border:none;background:#F1F4F8;width:36px;height:36px;border-radius:11px;font-size:20px;cursor:pointer;color:#5E6A78;line-height:1}',
'.dg-kopf .who{flex:1;min-width:0}',
'.dg-kopf b{display:block;font-size:15px;color:#12181F;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}',
'.dg-kopf small{display:block;font-size:12px;color:#5E6A78;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}',
'@media(max-width:520px){.dg-punkte i{width:14px}.dg-kopf{padding:10px 12px;gap:9px}.dg-kopf b{font-size:14.5px}}',
'.dg-punkte{display:flex;gap:5px}',
'.dg-punkte i{width:22px;height:5px;border-radius:5px;background:#E2E7EE;display:block}',
'.dg-punkte i.an{background:#1F5FD1}',
'.dg-szene{position:relative;border-radius:16px;overflow:hidden;margin:0 0 15px;background:#E7EBF0;box-shadow:0 2px 10px rgba(18,24,31,.09)}',
'.dg-szene.ohne{display:none}',
'.dg-szene img{display:block;width:100%;height:auto;max-height:230px;object-fit:cover}',
'.dg-szene .ort{position:absolute;left:0;right:0;bottom:0;padding:22px 14px 11px;font-size:13.5px;line-height:1.4;color:#fff;background:linear-gradient(to top,rgba(9,14,20,.86),rgba(9,14,20,0))}',
'@media(max-width:520px){.dg-szene img{max-height:170px}.dg-szene .ort{font-size:12.5px}}',
'.dg-liste{flex:1 1 auto;overflow-y:auto;overflow-x:hidden;padding:16px 14px 8px;-webkit-overflow-scrolling:touch;overscroll-behavior:contain;display:flex;flex-direction:column}',
'.dg-innen{margin-top:auto;width:100%}',
'.dg-b{display:flex;gap:9px;margin:0 0 13px;align-items:flex-end;max-width:660px}',
'.dg-b.ich{margin-left:auto;flex-direction:row-reverse}',
'.dg-av{width:34px;height:34px;flex:0 0 34px;border-radius:50%;background:#1F5FD1;color:#fff;display:grid;place-items:center;font-size:15px;font-weight:800;overflow:hidden}',
'.dg-av img{width:100%;height:100%;object-fit:cover}',
'.dg-bb{background:#fff;border-radius:17px 17px 17px 5px;padding:11px 14px;font-size:15px;line-height:1.45;color:#12181F;box-shadow:0 2px 8px rgba(18,24,31,.07);max-width:min(78%,520px);word-wrap:break-word}',
'.dg-b.ich .dg-bb{background:#1F5FD1;color:#fff;border-radius:17px 17px 5px 17px}',
'.dg-tippt{display:flex;gap:5px;padding:13px 16px;background:#fff;border-radius:17px 17px 17px 5px;width:60px;margin:0 0 13px;box-shadow:0 2px 8px rgba(18,24,31,.07)}',
'.dg-tippt i{width:7px;height:7px;border-radius:50%;background:#B9C3D0;animation:dgp 1.1s infinite}',
'.dg-tippt i:nth-child(2){animation-delay:.16s}.dg-tippt i:nth-child(3){animation-delay:.32s}',
'@keyframes dgp{0%,60%,100%{opacity:.3;transform:translateY(0)}30%{opacity:1;transform:translateY(-4px)}}',
'.dg-korr{margin:6px 0 0;background:#FFF4F4;border:1px solid #F6D5D5;border-left:3px solid #DD0000;border-radius:11px;padding:9px 12px;font-size:13.5px;color:#7A1414;max-width:min(78%,520px);margin-left:auto}',
'.dg-korr b{display:block;color:#12181F;margin:0 0 3px;font-size:14px}',
'.dg-lob{margin:6px 0 0 43px;font-size:13px;color:#137A45;font-weight:700}',
'.dg-aufg{background:#EEF3FA;border:1px solid #D6E2F3;border-radius:13px;padding:10px 13px;margin:0 0 13px 43px;font-size:13.5px;color:#12408F;max-width:520px}',
'.dg-bsp{margin:6px 0 0 43px;background:#F1FAF4;border:1px solid #CDEBD9;border-radius:13px;padding:10px 13px;font-size:14px;color:#12181F;max-width:520px}',
'.dg-bsp em{display:block;font-style:normal;font-size:11.5px;font-weight:800;color:#137A45;letter-spacing:.4px;text-transform:uppercase;margin:0 0 3px}',
'.dg-fuss{flex:0 0 auto;background:#fff;border-top:1px solid #E7EBF0;padding:9px 12px calc(9px + env(safe-area-inset-bottom))}',
'.dg-hilfen{display:flex;gap:7px;overflow-x:auto;padding:0 0 8px;scrollbar-width:none}',
'.dg-hilfen::-webkit-scrollbar{display:none}',
'.dg-hilf{flex:0 0 auto;border:1px solid #D6E2F3;background:#F5F8FD;color:#12408F;border-radius:999px;padding:7px 13px;font-size:13px;font-weight:600;cursor:pointer;font-family:inherit;white-space:nowrap}',
'.dg-hilf:hover{background:#E7EFFB}',
'.dg-hilf.tipp{border-color:#CDEBD9;background:#F1FAF4;color:#137A45}',
'.dg-eing{display:flex;gap:8px;align-items:flex-end}',
'.dg-eing textarea{flex:1;resize:none;border:1px solid #DEE4EC;border-radius:15px;padding:11px 14px;font:inherit;font-size:15px;max-height:110px;line-height:1.4;background:#F7F9FC;color:#12181F}',
'.dg-eing textarea:focus{outline:none;border-color:#1F5FD1;background:#fff}',
'.dg-rund{width:44px;height:44px;flex:0 0 44px;border-radius:50%;border:none;cursor:pointer;display:grid;place-items:center;font-size:19px;color:#fff;background:#1F5FD1}',
'.dg-rund.mic{background:#F1F4F8;color:#5E6A78}',
'.dg-rund.mic.laeuft{background:#DD0000;color:#fff;animation:dgpuls 1.1s infinite}',
'.dg-rund[disabled]{opacity:.45;cursor:default}',
'@keyframes dgpuls{0%,100%{box-shadow:0 0 0 0 rgba(221,0,0,.45)}70%{box-shadow:0 0 0 12px rgba(221,0,0,0)}}',
'.dg-ende{text-align:center;padding:24px 16px}',
'.dg-ende .gr{font-size:46px;margin:0 0 8px}',
'.dg-ende h3{margin:0 0 6px;font-size:22px;color:#12181F}',
'.dg-ende p{margin:0 0 16px;color:#5E6A78;font-size:14px}',
'.dg-ende .knoepfe{display:flex;gap:9px;justify-content:center;flex-wrap:wrap}'
    ].join('\n');
    document.head.appendChild(s);
  }

  /* ============================================================
     1 — Die Übersicht
     ============================================================ */
  var fBereich='alle', fNiveau='alle', fSuche='';

  function inBereich(th,b){
    if(th.art&&th.art!=='thema') return (th.br||[]).indexOf(b)>=0;
    return th.b===b;
  }
  function istThema(th){ return !th.art || th.art==='thema'; }

  /* Passt ein Thema zum gewaehlten Niveau?
     Die Themen tragen Spannen wie A2–C1. Frueher wurde einfach im Text
     gesucht — dabei fiel ein Thema „A1–B2“ beim Filter B1 heraus, obwohl
     B1 mittendrin liegt. Jetzt wird die Spanne wirklich aufgemacht. */
  var STUFEN=['A1','A2','B1','B2','C1','C2'];
  function niveauPasst(lvl,wunsch){
    if(!wunsch||wunsch==='alle') return true;
    var teile=String(lvl||'').split(/[\u2013\u2014\-\/]/).map(function(s){return s.trim().toUpperCase();}).filter(Boolean);
    if(!teile.length) return false;
    var von=STUFEN.indexOf(teile[0]), bis=STUFEN.indexOf(teile[teile.length-1]), ich=STUFEN.indexOf(wunsch);
    if(von<0||ich<0) return String(lvl||'').indexOf(wunsch)>=0;
    if(bis<0) bis=von;
    return ich>=von && ich<=bis;
  }

  function passtOhneBereich(th){
    if(!niveauPasst(th.lvl,fNiveau)) return false;
    if(fSuche){
      var t=(th.t+' '+th.id+' '+(th.lvl||'')+' '+(th.bsp||'')).toLowerCase();
      if(t.indexOf(fSuche)<0) return false;
    }
    return true;
  }

  function passt(th){
    if(fBereich!=='alle' && !inBereich(th,fBereich)) return false;
    if(!niveauPasst(th.lvl,fNiveau)) return false;
    if(fSuche){
      var t=(th.t+' '+th.id+' '+(th.lvl||'')).toLowerCase();
      if(t.indexOf(fSuche)<0) return false;
    }
    return true;
  }

  function teileVon(th){
    var a=[];
    var dl=dialogeVon(th).length; if(dl) a.push(dl+' Dialoge');
    var w=aufgabenZahl('wortschatz',th.ws); if(w) a.push(w+' Wörter');
    var h=aufgabenZahl('hoeren',th.ho); if(h) a.push('Hören');
    if(th.gr){ var g=aufgabenZahl('grammatik',[th.gr]); if(g) a.push(g+' Aufgaben'); }
    if(th.au){ var s=aufgabenZahl('aussprache',[th.au]); if(s) a.push(s+' Aufgaben'); }
    if(th.lek) a.push('Lektion');
    return a;
  }

  function karte(th){
    var p=fortschritt(th), teile=teileVon(th);
    return '<button class="ln-karte" onclick="lernThema(\''+th.id+'\')">'
      +'<span class="ln-bild">'
      +'<img src="'+foto(th.id)+'" alt="" loading="lazy" onerror="this.style.display=\'none\'">'
      +'<span class="schl"></span>'
      +'<span class="ln-lv">'+E(th.lvl||'')+'</span>'
      +(p>=100?'<span class="ln-fertig">✓ fertig</span>':'')
      +'<span class="ln-titel">'+E(th.t)+'</span>'
      +'</span>'
      +'<span class="ln-fuss">'
      +(th.bsp?'<span class="ln-bsp">'+E(th.bsp)+'</span>':'')
      +'<span class="ln-teile">'+teile.slice(0,3).map(function(x){return '<span class="ln-teil">'+E(x)+'</span>';}).join('')+'</span>'
      +'<span class="ln-bar'+(p>=100?' voll':'')+'"><i style="width:'+p+'%"></i></span>'
      +'</span></button>';
  }

  function baustein(th){
    var p = th.gr ? themenStand('grammatik',th.gr) : (th.au ? themenStand('aussprache',th.au) : 0);
    return '<button class="ln-bs'+(p>=100?' fertig':'')+'" onclick="lernThema(\''+th.id+'\')">'
      +'<span class="bild"><img src="'+foto(th.id)+'" alt="" loading="lazy" onerror="this.style.display=\'none\'"></span>'
      +'<span class="tx"><b>'+E(th.t)+'</b>'+(th.bsp?'<small>'+E(th.bsp)+'</small>':'')+'</span>'
      +(p>=100?'<span class="hk">✓</span>':'')
      +'</button>';
  }

  function bausteinBlock(bereichId){
    var g=themen().filter(function(x){ return x.art==='grammatik'  && passtOhneBereich(x) && inBereich(x,bereichId); });
    var a=themen().filter(function(x){ return x.art==='aussprache' && passtOhneBereich(x) && inBereich(x,bereichId); });
    if(!g.length && !a.length) return '';
    var out='<div class="ln-bsblock">';
    if(g.length) out+='<div class="ln-bskopf"><b>Grammatik dazu</b><span>'+g.length+' Regeln, die du hier brauchst</span></div>'
                    +'<div class="ln-bsliste">'+g.map(baustein).join('')+'</div>';
    if(a.length) out+='<div class="ln-bskopf"><b>Aussprache dazu</b><span>damit man dich vom ersten Satz an versteht</span></div>'
                    +'<div class="ln-bsliste">'+a.map(baustein).join('')+'</div>';
    return out+'</div>';
  }

  function tagesziel(){
    var s=ubStand(); var ziel=((window.UEBUNGEN&&UEBUNGEN.meta&&UEBUNGEN.meta.dailyGoal)||30);
    var xp=(s.dayKey===heute()?(s.dayXP||0):0);
    return {ziel:ziel, xp:xp, pct:Math.min(100,Math.round(xp/ziel*100)), streak:s.streak||0, gesamt:s.xp||0};
  }

  function weiterKarte(){
    var l=lernStand(), th=l.zuletzt?themaVon(l.zuletzt):null;
    if(!th){
      /* noch nichts gemacht: das erste Thema mit Dialogen vorschlagen */
      var a=themen().filter(function(x){return istThema(x) && (x.dlg||[]).length;});
      th=a[0]||themen()[0];
      if(!th) return '';
      return '<div class="ln-weiter"><div class="wb" style="background-image:url(\''+foto(th.id)+'\')"></div>'
        +'<div class="wt"><span class="we">Fang hier an</span><h3>'+E(th.t)+'</h3>'
        +'<p>Ein echtes Gespräch, ein paar Wörter, ein paar Aufgaben — zehn Minuten reichen.</p>'
        +'<div><button class="ln-btn" onclick="lernThema(\''+th.id+'\')">Losgehen →</button></div></div></div>';
    }
    var p=fortschritt(th);
    return '<div class="ln-weiter"><div class="wb" style="background-image:url(\''+foto(th.id)+'\')"></div>'
      +'<div class="wt"><span class="we">Weiter geht\'s</span><h3>'+E(th.t)+'</h3>'
      +'<p>Du warst zuletzt hier — '+p+' % geschafft.</p>'
      +'<div><button class="ln-btn" onclick="lernThema(\''+th.id+'\')">Weitermachen →</button></div></div></div>';
  }

  function niveauBand(){
    if(!window.NIVEAUS) return '';
    var jetzt=J('niveau','A1')||'A1', n=null, a=window.NIVEAUS;
    for(var i=0;i<a.length;i++) if(a[i].id===jetzt) n=a[i];
    if(!n) n=a[0];
    return '<div class="ln-nband">'
      +'<span class="stufe">'+E(n.id)+'</span>'
      +'<span class="tx"><b>'+E(n.t)+'</b><small>'+E(n.ziel?('Dein Ziel: '+n.ziel):n.u)+'</small></span>'
      +'<span class="kn">'
        +'<button class="ln-btn klein" onclick="lernZumKurs()">Zum Kurs →</button>'
        +'<button class="ln-btn hell klein" onclick="lernNiveauWechseln()">Niveau wechseln</button>'
      +'</span></div>';
  }
  window.lernZumKurs=function(){
    if(window.go && document.getElementById('v-kurs')){ go('kurs'); return; }
    if(window.renderKursA1) window.renderKursA1();
  };
  window.lernNiveauWechseln=function(){
    if(window.go && document.getElementById('v-kurs')){ go('kurs'); }
    if(window.renderNiveau) window.renderNiveau();
  };

  window.renderLernen=function(){
    stil();
    var v=el('v-lernen'); if(!v) return;
    if(!window.THEMEN){ v.innerHTML='<div class="ln-leer">Die Themen werden geladen …</div>'; return; }

    var z=tagesziel();
    var kopf='<div class="ln-kopf"><h1>Lernen</h1>'
      +'<p>Alles an einem Ort: echte Gespräche, Wörter, Hören, Grammatik und Aussprache — Thema für Thema.</p>'
      +'<div class="ln-zahlen">'
      +'<div class="ln-z"><div class="ln-ring" style="--p:'+z.pct+'"><i>'+z.xp+'</i></div><div><b>'+Math.min(z.xp,z.ziel)+'/'+z.ziel+'</b><span>Heute</span></div></div>'
      +'<div class="ln-z"><b>'+z.streak+'</b><span>Tage am Stück</span></div>'
      +'<div class="ln-z"><b>'+z.gesamt+'</b><span>Punkte gesamt</span></div>'
      +'<div class="ln-z" style="cursor:pointer" onclick="if(window.ubStartMix)ubStartMix()"><b>⚡</b><span>Schnell-Mix · 10 Aufgaben</span></div>'
      +'</div></div>';

    var ber=[{id:'alle',t:'Alles'},{id:'alltag',t:'Freizeit'},{id:'beruf',t:'Beruf'}];
    var chips='<div class="ln-chips">'
      +ber.map(function(b){ return '<button class="ln-chip'+(fBereich===b.id?' on':'')+'" onclick="lernFilter(\'b\',\''+b.id+'\')">'+E(b.t)+'</button>'; }).join('')
      +'<span style="width:1px;height:22px;background:#E0E5EC;margin:0 3px"></span>'
      +['alle','A1','A2','B1','B2','C1'].map(function(l){ return '<button class="ln-chip lv'+(fNiveau===l?' on':'')+'" onclick="lernFilter(\'n\',\''+l+'\')">'+(l==='alle'?'Alle':l)+'</button>'; }).join('')
      +'</div>'
      +'<div class="ln-suche"><em>🔍</em><input id="lnSuche" type="search" placeholder="Thema suchen …" value="'+E(fSuche)+'" oninput="lernFilter(\'s\',this.value)"></div>';

    var liste=themen().filter(passt), inhalt='';
    if(!liste.length){
      inhalt='<div class="ln-leer">Dazu haben wir noch nichts. Nimm einen anderen Filter — oder schreib mir, was dir fehlt.</div>';
    } else {
      (window.THEMEN_BEREICHE||[]).forEach(function(b){
        if(fBereich!=='alle' && fBereich!==b.id) return;
        var ts=liste.filter(function(x){ return istThema(x) && x.b===b.id; });
        var bs=bausteinBlock(b.id);
        if(!ts.length && !bs) return;
        inhalt+='<section class="ln-bereich"><div class="ln-bh"><h2>'+E(b.t)+'</h2><span>'+E(b.u)+'</span></div>'
          +(ts.length?'<div class="ln-raster">'+ts.map(karte).join('')+'</div>':'')
          +bs+'</section>';
      });
    }

    v.innerHTML=kopf+niveauBand()+weiterKarte()+'<div class="ln-filter">'+chips+'</div>'+inhalt;
    try{ window.scrollTo(0,0); }catch(e){}
  };

  window.lernFilter=function(art,wert){
    if(art==='b') fBereich=wert;
    else if(art==='n') fNiveau=wert;
    else if(art==='s'){
      fSuche=String(wert||'').trim().toLowerCase();
      /* beim Tippen nur die Liste neu bauen, damit der Cursor bleibt */
      var v=el('v-lernen'); if(!v) return;
      var liste=themen().filter(passt), inhalt='';
      if(!liste.length) inhalt='<div class="ln-leer">Dazu haben wir noch nichts.</div>';
      else (window.THEMEN_BEREICHE||[]).forEach(function(b){
        if(fBereich!=='alle' && fBereich!==b.id) return;
        var ts=liste.filter(function(x){ return istThema(x) && x.b===b.id; });
        var bs=bausteinBlock(b.id);
        if(!ts.length && !bs) return;
        inhalt+='<section class="ln-bereich"><div class="ln-bh"><h2>'+E(b.t)+'</h2><span>'+E(b.u)+'</span></div>'
          +(ts.length?'<div class="ln-raster">'+ts.map(karte).join('')+'</div>':'')
          +bs+'</section>';
      });
      var alt=v.querySelector('.ln-filter');
      while(alt && alt.nextSibling) v.removeChild(alt.nextSibling);
      var d=document.createElement('div'); d.innerHTML=inhalt;
      while(d.firstChild) v.appendChild(d.firstChild);
      return;
    }
    window.renderLernen();
  };

  /* ============================================================
     2 — Die Themenseite
     ============================================================ */
  var offenesThema=null;

  function bereichName(th){
    if(th.art==='grammatik') return 'Grammatik';
    if(th.art==='aussprache') return 'Aussprache';
    var b=(window.THEMEN_BEREICHE||[]).filter(function(x){return x.id===th.b;})[0];
    return b?b.t:'';
  }

  function reihe(o){
    var zu=o.zu?' zu':'';
    return '<div class="ln-reihe'+zu+'">'
      +'<span class="nr">'+o.em+'</span>'
      +'<span class="tx"><b>'+E(o.t)+'</b><small>'+E(o.u)+'</small></span>'
      +(o.p!=null?'<span class="ba"><span class="ln-bar'+(o.p>=100?' voll':'')+'"><i style="width:'+o.p+'%"></i></span></span>':'')
      +(o.zu?'<span style="font-size:17px;opacity:.5">🔒</span>':o.knopf)
      +'</div>';
  }

  /* Wohin führt der Zurück-Knopf über einem Thema?
     Der Lernbereich (lernbereich.js) beantwortet das genauer — er weiß,
     aus welchem Niveau und welchem Bereich man gekommen ist. Ohne ihn
     landet man wie früher auf der Themenübersicht. */
  function zurueckText(th){
    try{ if(window.lernZurueckText) return window.lernZurueckText(th); }catch(e){}
    return 'Alle Themen';
  }
  if(!window.lernZurueck) window.lernZurueck=function(){ window.renderLernen(); };

  window.lernThema=function(id){
    stil();
    var th=themaVon(id); var v=el('v-lernen'); if(!th||!v) return;
    offenesThema=id; zuletztMerken(id);

    var p=fortschritt(th), dl=dialogeVon(th);
    var teile=[];

    if(dl.length){
      var f=0; dl.forEach(function(d){ if(dialogFertig(d.id)) f++; });
      teile.push(reihe({em:'💬',t:'Sprechen',u:dl.length+' echte Gespräche · '+f+' geschafft',
        p:Math.round(f/dl.length*100),
        knopf:'<button class="ln-btn klein" onclick="lernErstenDialog(\''+id+'\')">Reden →</button>'}));
    }
    var w=aufgabenZahl('wortschatz',th.ws);
    if(w) teile.push(reihe({em:'🧠',t:'Wörter',u:w+' Wörter zu diesem Thema',
      p:themenStand('wortschatz',(th.ws||[])[0]),
      knopf:'<button class="ln-btn blau klein" onclick="lernUeben(\'wortschatz\',\''+(th.ws||[])[0]+'\')">Üben →</button>'}));
    var h=aufgabenZahl('hoeren',th.ho);
    if(h) teile.push(reihe({em:'🎧',t:'Hören',u:h+' Hörübungen',
      p:themenStand('hoeren',(th.ho||[])[0]),
      knopf:'<button class="ln-btn blau klein" onclick="lernUeben(\'hoeren\',\''+(th.ho||[])[0]+'\')">Hören →</button>'}));
    if(th.gr){ var g=aufgabenZahl('grammatik',[th.gr]);
      if(g) teile.push(reihe({em:'🧩',t:'Grammatik üben',u:g+' Aufgaben',
        p:themenStand('grammatik',th.gr),
        knopf:'<button class="ln-btn blau klein" onclick="lernUeben(\'grammatik\',\''+th.gr+'\')">Üben →</button>'})); }
    if(th.au){ var s=aufgabenZahl('aussprache',[th.au]);
      if(s) teile.push(reihe({em:'🗣️',t:'Aussprache üben',u:s+' Aufgaben mit Hören und Nachsprechen',
        p:themenStand('aussprache',th.au),
        knopf:'<button class="ln-btn blau klein" onclick="lernUeben(\'aussprache\',\''+th.au+'\')">Üben →</button>'})); }
    if(th.lek) teile.push(reihe({em:'📖',t:'Die Lektion',u:'Erklärung, Beispiele und Übungen am Stück',
      p:null,
      knopf:'<a class="ln-btn hell klein" href="'+th.lek+'" target="_blank" rel="noopener">Öffnen →</a>'}));
    if((th.ws||[]).length>1){
      var z=(th.ws||[])[1];
      teile.push(reihe({em:'➕',t:'Noch mehr Wörter',u:'Zusatzwortschatz zu diesem Thema',
        p:themenStand('wortschatz',z),
        knopf:'<button class="ln-btn blau klein" onclick="lernUeben(\'wortschatz\',\''+z+'\')">Üben →</button>'}));
    }

    if(!teile.length) teile.push('<div class="ln-leer">Dieses Thema wird gerade gefüllt. Schau bald wieder rein. 💛</div>');

    var hilfen='';
    var hs=(th.hilf||[]).map(themaVon).filter(Boolean);
    if(hs.length){
      hilfen='<h3 class="ln-h3">Grammatik &amp; Aussprache, die du hier brauchst</h3>'
        +'<div class="ln-bsliste">'+hs.map(baustein).join('')+'</div>';
    }

    var dialoge='';
    if(dl.length){
      dialoge='<h3 class="ln-h3">Alle Gespräche zu diesem Thema</h3><div class="ln-dlg">'
        +dl.map(function(d){
          var ok=dialogFertig(d.id);
          return '<button class="ln-d" onclick="lernDialog(\''+d.id+'\')">'
            +'<span class="db">'+(d.em||'💬')+'<img src="bilder/dialog/'+d.id+'-s.jpg" alt="" loading="lazy" onerror="this.remove()"></span>'
            +'<span class="dt"><b>'+E(d.titel)+'</b><small>'+E(d.lvl)+' · '+E(d.dauer||'')+'</small></span>'
            +(ok?'<span class="ok">✓</span>':'<span style="color:#B9C3D0">→</span>')
            +'</button>';
        }).join('')+'</div>';
    }

    v.innerHTML='<button class="ln-zurueck" onclick="lernZurueck()">← '+E(zurueckText(th))+'</button>'
      +'<div class="ln-hero"><img src="'+foto(id)+'" alt="" onerror="this.style.display=\'none\'"><span class="schl"></span>'
      +'<div class="tx"><div class="meta"><span class="pill">'+E(bereichName(th))+'</span>'
      +'<span class="pill">'+E(th.lvl||'')+'</span><span>'+p+' % geschafft</span></div>'
      +'<h1>'+E(th.t)+'</h1>'+(th.bsp?'<div class="bsp">'+E(th.bsp)+'</div>':'')+'</div></div>'
      +teile.join('')+hilfen+dialoge
      /* Die fertigen Seiten zu diesem Bereich — dieselbe Liste,
         die auch die App zeigt. Sie kommt aus lern-struktur.js. */
      +((window.LERNSTRUKTUR && LERNSTRUKTUR.mehrHtml) ? LERNSTRUKTUR.mehrHtml(id) : '');
    try{ window.scrollTo(0,0); }catch(e){}
  };

  /* Übung starten und danach die Themenseite auffrischen */
  var wrapGesetzt=false;
  window.lernUeben=function(sk,thId){
    if(!window.ubStart){ note('Die Übungen sind noch nicht geladen — lade die Seite neu.'); return; }
    if(!wrapGesetzt && window.ubClose){
      var alt=window.ubClose;
      window.ubClose=function(f){ alt(f);
        var v=el('v-lernen');
        if(v&&v.classList.contains('active')&&offenesThema) setTimeout(function(){ window.lernThema(offenesThema); },80); };
      wrapGesetzt=true;
    }
    window.ubStart(sk,thId);
  };

  window.lernErstenDialog=function(themaId){
    var th=themaVon(themaId); if(!th) return;
    var dl=dialogeVon(th); if(!dl.length) return;
    var offen=dl.filter(function(d){ return !dialogFertig(d.id); });
    window.lernDialog((offen[0]||dl[0]).id);
  };

  /* ============================================================
     3 — Das Gesprächsfenster

     Neu und der eigentliche Unterschied: Amanda liest, was die
     Person WIRKLICH geschrieben hat, und antwortet darauf.
     Das Skript ist nur noch der Plan — Ort, Rolle und das Ziel
     jedes Schritts. Fällt die Verbindung aus, läuft das alte
     Skript weiter, damit niemand vor einem toten Fenster sitzt.
     ============================================================ */
  var G=null; /* laufendes Gespräch */

  function dlgFoto(id,klein){ return 'bilder/dialog/'+id+(klein?'-s':'')+'.jpg'; }
  function rolleVon(id){ try{ return (window.DIALOG_ROLLEN||{})[id]||''; }catch(e){ return ''; } }

  /* Das Zugangstoken — je nachdem, wie die Seite eingerichtet ist */
  function mitToken(cb){
    var t=null;
    try{ t=(window.SB&&window.SB.session&&window.SB.session.access_token)||window.__TOKEN__||null; }catch(e){}
    if(t) return cb(t);
    var c=null;
    try{ c=window.sb||window.SBCLIENT||null; }catch(e){}
    if(c&&c.auth&&c.auth.getSession){
      c.auth.getSession().then(function(r){
        cb((r&&r.data&&r.data.session&&r.data.session.access_token)||null);
      }).catch(function(){ cb(null); });
      return;
    }
    cb(null);
  }

  function ovBauen(){
    var o=el('dgOv'); if(o) return o;
    o=document.createElement('div'); o.className='dg-ov'; o.id='dgOv';
    o.innerHTML=
      '<div class="dg-kopf">'
       +'<button class="zu" onclick="dgSchliessen()" aria-label="Zurück">←</button>'
       +'<span class="dg-av" id="dgAv">A</span>'
       +'<span class="who"><b id="dgTitel"></b><small id="dgUnter"></small></span>'
       +'<span class="dg-punkte" id="dgPunkte"></span>'
      +'</div>'
      +'<div class="dg-liste" id="dgListe"><div class="dg-innen" id="dgInnen"></div></div>'
      +'<div class="dg-fuss" id="dgFuss">'
        +'<div class="dg-hilfen" id="dgHilfen"></div>'
        +'<div class="dg-eing">'
          +'<button class="dg-rund mic" id="dgMic" onclick="dgSprechen()" aria-label="Sprechen">🎤</button>'
          +'<textarea id="dgFeld" rows="1" placeholder="Antworte auf Deutsch …"></textarea>'
          +'<button class="dg-rund" id="dgSend" onclick="dgSenden()" disabled aria-label="Senden">↑</button>'
        +'</div>'
      +'</div>';
    document.body.appendChild(o);

    var f=el('dgFeld'), b=el('dgSend');
    f.addEventListener('input',function(){
      f.style.height='auto'; f.style.height=Math.min(f.scrollHeight,110)+'px';
      b.disabled=!f.value.trim();
    });
    f.addEventListener('keydown',function(e){
      if(e.key==='Enter'&&!e.shiftKey&&window.innerWidth>900){ e.preventDefault(); window.dgSenden(); }
    });
    /* Tastatur auf dem Handy: die Eingabe hochschieben, nicht die Seite */
    if(window.visualViewport){
      var vv=window.visualViewport;
      var passe=function(){
        var ov=el('dgOv'); if(!ov||!ov.classList.contains('auf')) return;
        var verdeckt=Math.max(0,window.innerHeight-vv.height-vv.offsetTop);
        ov.style.paddingBottom=verdeckt?verdeckt+'px':'';
        if(verdeckt>80) runter(true);
      };
      vv.addEventListener('resize',passe); vv.addEventListener('scroll',passe);
    }
    return o;
  }

  function liste(){ return el('dgListe'); }
  function innen(){ return el('dgInnen'); }
  function unten(){ var l=liste(); return !l || (l.scrollHeight-l.scrollTop-l.clientHeight)<90; }
  function runter(sofort){
    var l=liste(); if(!l) return;
    if(sofort){ l.scrollTop=l.scrollHeight; return; }
    try{ l.scrollTo({top:l.scrollHeight,behavior:'smooth'}); }catch(e){ l.scrollTop=l.scrollHeight; }
  }
  function anhaengen(html){
    var l=liste(), i=innen(); if(!l||!i) return null;
    var war=unten();
    var d=document.createElement('div'); d.innerHTML=html;
    var erste=d.firstChild;
    while(d.firstChild) i.appendChild(d.firstChild);
    if(war) runter(true);
    return erste;
  }
  function tippt(an){
    var i=innen(); if(!i) return;
    var a=el('dgTippt');
    if(!an){ if(a) a.remove(); return; }
    if(a) return;
    var d=document.createElement('div'); d.id='dgTippt'; d.className='dg-tippt';
    d.innerHTML='<i></i><i></i><i></i>'; i.appendChild(d); runter(true);
  }
  function punkte(){
    var p=el('dgPunkte'); if(!p||!G) return;
    var s=''; for(var i=0;i<G.schritte.length;i++) s+='<i class="'+(i<=G.i?'an':'')+'"></i>';
    p.innerHTML=s;
  }
  function amandaSagt(text){
    if(!G) return;
    anhaengen('<div class="dg-b"><span class="dg-av">'
      +(G.foto?'<img src="'+E(G.foto)+'" alt="" onerror="this.parentNode.textContent=\''+E(G.em||'A')+'\'">':E(G.em||'A'))
      +'</span><span class="dg-bb">'+E(text)+'</span></div>');
    sprich(text,{rolle:'amanda'});
    runter();
  }

  window.lernDialog=function(id){
    var D=window.DIALOGE||[], d=null;
    for(var i=0;i<D.length;i++) if(D[i].id===id) d=D[i];
    if(!d){ note('Diesen Dialog finde ich gerade nicht.'); return; }
    return window.lernDialogDaten(d);
  };

  /* Ein Gespräch direkt aus Daten öffnen — dafür braucht es dialoge.js nicht.
     So kann auch die App die Gespräche aus dem A1-Kurs zeigen. */
  window.lernDialogDaten=function(d){
    if(!d) return;
    stil();
    ovBauen();
    G={id:d.id, titel:d.titel, em:(d.em||'💬'), ort:(d.ort||''), lvl:(d.lvl||''),
       rolle:d.rolle||rolleVon(d.id),
       foto:dlgFoto(d.bild||d.id,true), gross:dlgFoto(d.bild||d.id,false),
       schritte:d.schritte||[], i:0, richtig:0, laeuft:false, ende:false,
       verlauf:[], live:true, zeigtZiel:-1};

    el('dgOv').classList.add('auf');
    document.body.style.overflow='hidden';
    el('dgTitel').textContent=d.titel;
    el('dgUnter').textContent=(d.lvl||'')+(d.dauer?' · '+d.dauer:'');
    var av=el('dgAv');
    av.innerHTML='<img src="'+E(G.foto)+'" alt="" onerror="this.parentNode.textContent=\''+E(G.em)+'\'">';

    el('dgListe').innerHTML='<div class="dg-innen" id="dgInnen"></div>';
    el('dgFuss').style.display='';
    el('dgHilfen').innerHTML='';
    var f=el('dgFeld'); f.value=''; f.style.height='auto'; el('dgSend').disabled=true;
    punkte();

    /* Die Szene: das Foto zuerst, damit man sieht, wo man ist */
    anhaengen('<div class="dg-szene"><img src="'+E(G.gross)+'" alt="" '
      +'onerror="this.parentNode.classList.add(\'ohne\')">'
      +(G.ort?'<span class="ort">'+E(G.ort)+'</span>':'')+'</div>');

    tippt(true);
    dialogRuf('', function(j){
      tippt(false);
      if(!G) return;
      if(j && j.text){ amandaSagt(j.text); zielZeigen(); hilfenAus(j.vorschlaege); }
      else { G.live=false; skriptSchritt(); }
    });
  };

  /* Das Ziel dieses Schritts einmal zeigen — nicht bei jeder Antwort neu */
  function zielZeigen(){
    if(!G) return;
    var s=G.schritte[G.i]; if(!s||G.zeigtZiel===G.i) return;
    G.zeigtZiel=G.i;
    if(s.hinweis) anhaengen('<div class="dg-aufg">'+E(s.hinweis)+'</div>');
    hilfenZeigen(s);
  }

  /* Notlauf ohne Verbindung: das alte Skript */
  function skriptSchritt(){
    if(!G) return;
    var s=G.schritte[G.i]; if(!s) return fertig();
    punkte();
    amandaSagt(s.amanda);
    zielZeigen();
  }

  function dialogRuf(satz, fertigCB){
    if(!G) return fertigCB(null);
    var daten={
      titel:G.titel, ort:G.ort, rolle:G.rolle, level:G.lvl,
      schritte:G.schritte.map(function(s){
        return {amanda:s.amanda, hinweis:s.hinweis, beispiel:s.beispiel};
      }),
      i:G.i, verlauf:G.verlauf.slice(-16), satz:satz,
      l1:(function(){ try{ return (window.profile&&window.profile.native_language)||''; }catch(e){ return ''; } })()
    };
    var abgebrochen=false;
    var wecker=setTimeout(function(){ abgebrochen=true; fertigCB(null); }, 22000);
    mitToken(function(t){
      if(!t){ clearTimeout(wecker); if(!abgebrochen) fertigCB(null); return; }
      fetch('/api/dialog',{method:'POST',
        headers:{'content-type':'application/json','authorization':'Bearer '+t},
        body:JSON.stringify(daten)
      }).then(function(r){ return r.ok?r.json():null; })
        .then(function(j){ clearTimeout(wecker); if(!abgebrochen) fertigCB(j&&j.ok?j:null); })
        .catch(function(){ clearTimeout(wecker); if(!abgebrochen) fertigCB(null); });
    });
  }

  function hilfenAus(vorschlaege){
    var h=el('dgHilfen'); if(!h||!G) return;
    var s=G.schritte[G.i]||{};
    var teile=[];
    (vorschlaege||[]).forEach(function(r){
      teile.push('<button class="dg-hilf" onclick="dgEinsetzen('+JSON.stringify(r).replace(/"/g,'&quot;')+')">'+E(r)+'</button>');
    });
    if(!teile.length) (s.redemittel||[]).forEach(function(r){
      teile.push('<button class="dg-hilf" onclick="dgEinsetzen('+JSON.stringify(r).replace(/"/g,'&quot;')+')">'+E(r)+'</button>');
    });
    if(s.beispiel) teile.unshift('<button class="dg-hilf tipp" onclick="dgBeispiel()">💡 Beispielantwort</button>');
    teile.push('<button class="dg-hilf" onclick="dgNochmal()">🔁 Nochmal hören</button>');
    h.innerHTML=teile.join('');
  }

  function hilfenZeigen(s){ hilfenAus(null); }

  window.dgEinsetzen=function(t){
    var f=el('dgFeld'); if(!f) return;
    f.value=(f.value?f.value.replace(/\s*$/,' '):'')+t+' ';
    f.dispatchEvent(new Event('input'));
    try{ f.focus(); }catch(e){}
  };
  window.dgBeispiel=function(){
    if(!G) return; var s=G.schritte[G.i]; if(!s||!s.beispiel) return;
    anhaengen('<div class="dg-bsp"><em>So könnte man antworten</em>'+E(s.beispiel)+'</div>');
    sprich(s.beispiel,{rolle:'du'});
    runter();
  };
  window.dgNochmal=function(){
    if(!G) return;
    var letzte=null, i;
    for(i=G.verlauf.length-1;i>=0;i--) if(G.verlauf[i].wer==='am'){ letzte=G.verlauf[i].text; break; }
    var s=G.schritte[G.i];
    sprich(letzte||(s&&s.amanda)||'',{rolle:'amanda'});
  };

  window.dgSprechen=function(){
    var SR=window.SpeechRecognition||window.webkitSpeechRecognition;
    var k=el('dgMic'), f=el('dgFeld');
    if(!SR){ note('Dein Browser kann nicht zuhören — tipp deine Antwort einfach.'); return; }
    if(k._laeuft){ try{ k._erk.stop(); }catch(e){} return; }
    try{
      var r=new SR(); r.lang='de-DE'; r.interimResults=true; r.continuous=false; r.maxAlternatives=1;
      k._erk=r; k._laeuft=true; k.classList.add('laeuft');
      var fest='';
      r.onresult=function(e){
        var zwischen='';
        for(var i=e.resultIndex;i<e.results.length;i++){
          if(e.results[i].isFinal) fest+=e.results[i][0].transcript; else zwischen+=e.results[i][0].transcript;
        }
        f.value=(fest+zwischen).trim(); f.dispatchEvent(new Event('input'));
      };
      r.onend=function(){ k._laeuft=false; k.classList.remove('laeuft');
        if(f.value.trim()) setTimeout(window.dgSenden,280); };
      r.onerror=function(){ k._laeuft=false; k.classList.remove('laeuft'); };
      r.start();
    }catch(e){ k._laeuft=false; k.classList.remove('laeuft'); }
  };

  window.dgSenden=function(){
    if(!G||G.laeuft||G.ende) return;
    var f=el('dgFeld'); var t=(f.value||'').trim(); if(!t) return;
    var s=G.schritte[G.i]||{};
    G.laeuft=true;
    f.value=''; f.style.height='auto'; el('dgSend').disabled=true;
    anhaengen('<div class="dg-b ich"><span class="dg-bb">'+E(t)+'</span></div>');
    el('dgHilfen').innerHTML='';
    runter(true);
    tippt(true);

    if(!G.live) return altModus(t,s);

    dialogRuf(t, function(j){
      tippt(false);
      if(!G) return;
      if(!j){ G.live=false; return altModus(t,s); }

      G.verlauf.push({wer:'du',text:t});
      G.verlauf.push({wer:'am',text:j.text||''});

      if(j.text) amandaSagt(j.text);

      /* Die Korrektur kommt NACH Amandas Antwort — sie unterbricht das
         Gespräch nicht, sondern steht daneben. */
      if(j.korrektur && j.korrektur.korrigiert){
        anhaengen('<div class="dg-korr"><b>'+E(j.korrektur.korrigiert)+'</b>'
          +E(j.korrektur.hinweis||'')+'</div>');
        klang('tipp');
        try{ if(window.fehlerMerken) window.fehlerMerken({satz:t,richtig:j.korrektur.korrigiert,
          hinweis:j.korrektur.hinweis||'',thema:j.korrektur.thema||''}); }catch(e){}
      } else if(j.weiter){
        G.richtig++;
        klang('richtig');
      }

      if(j.weiter){
        G.i++;
        punkte();
        if(j.fertig || G.i>=G.schritte.length){ G.laeuft=false; return setTimeout(fertig,600); }
        setTimeout(function(){ if(G){ zielZeigen(); hilfenAus(j.vorschlaege); } },300);
      } else {
        hilfenAus(j.vorschlaege);
      }
      G.laeuft=false;
      runter();
    });
  };

  /* Ohne Verbindung: korrigieren wie früher, dann ein Schritt weiter */
  function altModus(t,s){
    korrigieren(t,s,function(erg){
      tippt(false);
      if(!G) return;
      G.laeuft=false;
      if(erg && erg.gut===false && erg.korrigiert){
        anhaengen('<div class="dg-korr"><b>'+E(erg.korrigiert)+'</b>'+E(erg.hinweis||'')+'</div>');
        klang('tipp');
      } else {
        G.richtig++;
        anhaengen('<div class="dg-lob">✓ '+E((erg&&erg.lob)||'Sehr gut!')+'</div>');
        klang('richtig');
      }
      runter();
      G.i++; punkte();
      if(G.i>=G.schritte.length) return setTimeout(fertig,600);
      setTimeout(function(){ if(G) skriptSchritt(); },700);
    });
  }

  function korrigieren(satz,schritt,fertigCB){
    mitToken(function(t){
      if(!t) return fertigCB(null);
      fetch('/api/ai-satz',{method:'POST',
        headers:{'content-type':'application/json','authorization':'Bearer '+t},
        body:JSON.stringify({satz:satz,frage:schritt.amanda,aufgabe:schritt.hinweis})
      }).then(function(r){ return r.ok?r.json():null; })
        .then(function(j){ fertigCB(j&&j.ok?j:null); })
        .catch(function(){ fertigCB(null); });
    });
  }

  function fertig(){
    if(!G||G.ende) return;
    G.ende=true;
    dialogMerken(G.id);
    klang('fertig');
    el('dgFuss').style.display='none';
    var ges=G.schritte.length;
    anhaengen('<div class="dg-ende"><div class="gr">🎉</div>'
      +'<h3>Geschafft!</h3>'
      +'<p>Du hast das ganze Gespräch geführt — '+G.richtig+' von '+ges+' Antworten saßen auf Anhieb.</p>'
      +'<div class="knoepfe">'
        +'<button class="ln-btn blau" onclick="dgWiederholen()">Nochmal</button>'
        +'<button class="ln-btn" onclick="dgSchliessen()">Fertig</button>'
      +'</div></div>');
    runter(true);
    try{ if(window.xpDazu) window.xpDazu(ges*5); }catch(e){}
  }

  window.dgWiederholen=function(){ if(G) window.lernDialog(G.id); };

  window.dgSchliessen=function(){
    stille();
    var o=el('dgOv'); if(o){ o.classList.remove('auf'); o.style.paddingBottom=''; }
    document.body.style.overflow='';
    G=null;
    var v=el('v-lernen');
    if(v&&v.classList.contains('active')&&offenesThema) window.lernThema(offenesThema);
  };

  /* Escape schließt */
  document.addEventListener('keydown',function(e){
    if(e.key==='Escape'){ var o=el('dgOv'); if(o&&o.classList.contains('auf')) window.dgSchliessen(); }
  });

  /* ============================================================
     Was der Lernbereich von hier braucht

     lernbereich.js baut die Übersicht neu (Niveau → Bereich → Thema).
     Die Themenseite, die Dialoge und die Fortschrittsrechnung bleiben
     hier. Damit beides dieselben Zahlen zeigt, gibt es diese Tür:
     ============================================================ */
  window.LERNTEILE = {
    fortschritt:   fortschritt,
    teileVon:      teileVon,
    foto:          foto,
    baustein:      baustein,
    karte:         karte,
    themaVon:      themaVon,
    istThema:      istThema,
    dialogeVon:    dialogeVon,
    aufgabenZahl:  aufgabenZahl,
    themenStand:   themenStand,
    tagesziel:     tagesziel,
    lernStand:     lernStand,
    stil:          stil,
    /* Nach einer Übung springt die Seite normalerweise zurück auf das
       zuletzt geöffnete Thema. Wer aus dem Lernbereich heraus einen
       gemischten Satz startet, war aber in keinem Thema — dann bitte
       nicht zurückspringen. */
    vergiss:       function(){ offenesThema=null; }
  };

})();
