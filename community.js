/* ============================================================
   deutschoderwas club · Community — v2-Profi-Design
   Erwartet Globals aus konto.html: sb, user, profile, isActive, esc, go
   Rendert in #v-community. Einstieg: window.renderCommunity()
   Behält ALLE Funktionen: Kanäle, Text/Audio/Bild, Reaktionen,
   Team-Korrektur → Fehler-Trainer, Direktnachrichten, Realtime, Ungelesen.
   ============================================================ */
(function () {
  'use strict';
  var styled = false, sbc = null, ME = null, PROF = null;
  var channels = [], roster = [], dmThreads = [], cur = null, mode = 'channel', dmActive = null;
  var isTeam = false, isAdmin = false, isChallenger = false, myName = 'Mitglied';
  var reax = {}, corr = {}, savedCorr = {};
  var chan = null, badgeChan = null;
  var rec = null, recStream = null, recChunks = [], recStart = 0;

  function getSb(){ try{ return window.sb || (typeof sb!=='undefined'?sb:null);}catch(e){return null;} }
  function getUser(){ try{ return window.user || (typeof user!=='undefined'?user:null);}catch(e){return null;} }
  function getProfile(){ try{ return window.profile || (typeof profile!=='undefined'?profile:null);}catch(e){return null;} }
  function active(){ try{ return (typeof isActive==='function')?isActive():true; }catch(e){ return true; } }
  function E(s){ return (window.esc?window.esc(s):String(s==null?'':s).replace(/[&<>"]/g,function(c){return ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]);})); }
  function root(){ return document.getElementById('v-community'); }
  function q(sel){ var r=root(); return r?r.querySelector(sel):null; }
  function initials(n){ n=String(n||'M').trim(); var p=n.split(/\s+/); return ((p[0]||'?')[0]+(p[1]?p[1][0]:'')).toUpperCase(); }
  function avClass(name){ var s=String(name||'?'),h=0; for(var i=0;i<s.length;i++){h=(h*31+s.charCodeAt(i))>>>0;} return 'a'+((h%6)+1); }
  function isRealId(id){ return !!id && String(id).indexOf('tmp-')!==0 && String(id).indexOf('up-')!==0; }
  function timeStr(t){ try{ return new Date(t).toLocaleTimeString('de-DE',{hour:'2-digit',minute:'2-digit'}); }catch(e){return '';} }
  function dayLabel(t){ var d=new Date(t),n=new Date(); if(d.toDateString()===n.toDateString())return 'Heute'; var y=new Date(n-864e5); if(d.toDateString()===y.toDateString())return 'Gestern'; return d.toLocaleDateString('de-DE',{weekday:'long',day:'numeric',month:'long'}); }

  var IC = {
    pin:'<path d="M12 17.5 6.2 20l1.1-6.4L2.6 9l6.5-.9L12 2.3l2.9 5.8 6.5.9-4.7 4.6L17.8 20z"/>',
    search:'<circle cx="11" cy="11" r="7"/><path d="m20 20-3-3"/>',
    clip:'<path d="m21 11.5-8.6 8.6a4.5 4.5 0 0 1-6.4-6.4l8.3-8.3a3 3 0 0 1 4.2 4.2l-8.3 8.3a1.5 1.5 0 0 1-2.1-2.1l7.6-7.6"/>',
    emoji:'<circle cx="12" cy="12" r="9"/><path d="M8 14s1.4 2 4 2 4-2 4-2M9 9.5h.01M15 9.5h.01"/>',
    mic:'<rect x="9" y="3" width="6" height="11" rx="3"/><path d="M5 11a7 7 0 0 0 14 0M12 18v3"/>',
    send:'<path d="M22 2 11 13M22 2l-7 20-4-9-9-4z"/>',
    play:'<path d="M8 5v14l11-7z" fill="currentColor" stroke="none"/>',
    pause:'<path d="M8 5v14M16 5v14" stroke-width="2.2"/>',
    img:'<rect x="3" y="5" width="18" height="14" rx="2"/><circle cx="8.5" cy="10" r="1.8"/><path d="m4 17 5-4 3.5 2.5L16 12l4 3.5"/>',
    file:'<path d="M14 3v5h5"/><path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8z"/>',
    pencil:'<path d="M12 20h9"/><path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4z"/>',
    check:'<path d="M20 6 9 17l-5-5"/>',
    close:'<path d="M18 6 6 18M6 6l12 12"/>',
    back:'<path d="m15 18-6-6 6-6"/>'
  };
  function svg(p,cls){ return '<svg class="ico '+(cls||'')+'" viewBox="0 0 24 24">'+p+'</svg>'; }

  function injectStyle(){
    if(styled) return; styled=true;
    var css = `
    #v-community{--brand:#12A594;--brand-2:#0E8577;--brand-ink:#0A3F39;--brand-wash:#F1FAF8;--brand-line:#CDEBE5;--red:#D23B3B;--gold:#C79600;--ink:#191B1C;--t1:#191B1C;--t2:#5A6169;--t3:#8B929A;--surface:#FFFFFF;--surface-2:#FAFAF8;--line:#E6E5E0;--line-2:#EFEEEA;--fh:'Space Grotesk','Inter',sans-serif}
    #v-community{font-size:14px;color:var(--t1)}
    #v-community .ico{width:19px;height:19px;stroke:currentColor;stroke-width:1.6;fill:none;stroke-linecap:round;stroke-linejoin:round;display:block}
    #v-community .ico-sm{width:15px;height:15px}
    #v-community .comm{display:grid;grid-template-columns:236px 1fr 244px;height:calc(100vh - 132px);min-height:560px;background:var(--surface);border:1px solid var(--line);border-radius:14px;overflow:hidden;box-shadow:0 1px 2px rgba(24,26,28,.05),0 12px 30px rgba(24,26,28,.06)}
    #v-community .cs{border-right:1px solid var(--line);background:var(--surface-2);display:flex;flex-direction:column;overflow:hidden;min-height:0}
    #v-community .cs-h{padding:15px 16px 13px;border-bottom:1px solid var(--line-2)}
    #v-community .cs-h b{font-size:14px;font-family:var(--fh);font-weight:600}
    #v-community .cs-h .st{font-size:11.5px;color:var(--t3);margin-top:4px;display:flex;align-items:center;gap:6px}
    #v-community .cs-h .st i{width:6px;height:6px;border-radius:50%;background:#2FA36B;display:inline-block}
    #v-community .cs-l{flex:1;overflow-y:auto;padding:9px 9px 16px;min-height:0}
    #v-community .cg{font-size:10.5px;font-weight:600;letter-spacing:.05em;text-transform:uppercase;color:var(--t3);padding:14px 9px 5px}
    #v-community .ch{display:flex;align-items:center;gap:8px;padding:6.5px 9px;border-radius:7px;color:var(--t2);font-size:13px;font-weight:500;margin-bottom:1px;cursor:pointer;border:none;background:none;width:100%;text-align:left;font-family:inherit}
    #v-community .ch .h{color:var(--t3);font-weight:600}
    #v-community .ch:hover{background:#efeee9;color:var(--t1)}
    #v-community .ch.on{background:#e9e8e2;color:var(--ink);font-weight:600}
    #v-community .ch.on .h{color:var(--brand-2)}
    #v-community .ch .cn{margin-left:auto;font-size:10.5px;font-weight:700;background:var(--red);color:#fff;min-width:17px;height:17px;padding:0 5px;border-radius:9px;display:flex;align-items:center;justify-content:center}
    #v-community .ch .pd{width:7px;height:7px;border-radius:50%;flex-shrink:0}
    #v-community .ch .nm2{flex:1;min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}
    #v-community .chat{display:flex;flex-direction:column;overflow:hidden;min-height:0;min-width:0}
    #v-community .ch-hd{height:53px;flex-shrink:0;border-bottom:1px solid var(--line);display:flex;align-items:center;gap:11px;padding:0 18px}
    #v-community .ch-hd .ti{font-family:var(--fh);font-weight:600;font-size:14.5px;display:flex;align-items:center;gap:6px}
    #v-community .ch-hd .ti .h{color:var(--brand-2)}
    #v-community .ch-hd .de{font-size:12px;color:var(--t3);padding-left:11px;border-left:1px solid var(--line);white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
    #v-community .ch-hd .bk{color:var(--t2);cursor:pointer;padding:4px;border-radius:6px}
    #v-community .note{margin:13px 18px 2px;border:1px solid var(--line);border-radius:9px;padding:10px 13px;display:flex;gap:10px;background:var(--surface-2)}
    #v-community .note .ni{color:var(--gold);flex-shrink:0;margin-top:1px}
    #v-community .note b{font-size:12.5px}
    #v-community .note p{font-size:12.5px;color:var(--t2);margin-top:1px;line-height:1.5}
    #v-community .feed{flex:1;overflow-y:auto;padding:6px 18px 8px;min-height:0}
    #v-community .dsep{display:flex;align-items:center;gap:12px;margin:16px 0 8px;color:var(--t3);font-size:11.5px;font-weight:600}
    #v-community .dsep::before,#v-community .dsep::after{content:"";flex:1;height:1px;background:var(--line-2)}
    #v-community .m{display:flex;gap:11px;padding:6px 8px;margin:0 -8px;border-radius:8px;position:relative}
    #v-community .m:hover{background:var(--surface-2)}
    #v-community .ava{border-radius:50%;display:flex;align-items:center;justify-content:center;flex-shrink:0;font-weight:600;font-size:13px;font-family:var(--fh);color:#fff;width:36px;height:36px}
    #v-community .a1{background:#3C6E64}#v-community .a2{background:#8A5A3B}#v-community .a3{background:#4A5B7A}#v-community .a4{background:#7A4A5E}#v-community .a5{background:#5E6B3C}#v-community .a6{background:#6B4A7A}
    #v-community .mb{flex:1;min-width:0}
    #v-community .mh{display:flex;align-items:baseline;gap:8px}
    #v-community .mh .w{font-weight:600;font-size:13.5px;font-family:var(--fh);letter-spacing:-.01em}
    #v-community .mh .rl{font-size:10px;font-weight:600;padding:1px 6px;border-radius:5px;background:var(--brand-wash);color:var(--brand-ink);border:1px solid var(--brand-line)}
    #v-community .mh .lv{font-size:10px;font-weight:600;padding:1px 5px;border-radius:5px;background:var(--line);color:var(--t2)}
    #v-community .mh time{font-size:11px;color:var(--t3)}
    #v-community .mh .del{margin-left:auto;opacity:0;color:var(--t3);cursor:pointer;padding:2px;border-radius:5px}
    #v-community .m:hover .mh .del{opacity:1}
    #v-community .mt{font-size:13.5px;color:#2b2f33;margin-top:2px;line-height:1.5;word-wrap:break-word}
    #v-community .mt .men{color:var(--brand-2);font-weight:600}
    #v-community .rc{display:inline-flex;gap:5px;margin-top:6px;flex-wrap:wrap;align-items:center}
    #v-community .rc span{display:inline-flex;align-items:center;gap:4px;background:var(--surface);border:1px solid var(--line);border-radius:20px;padding:1px 8px;font-size:12px;font-weight:600;color:var(--t2);cursor:pointer}
    #v-community .rc span.on{background:var(--brand-wash);border-color:var(--brand-line);color:var(--brand-ink)}
    #v-community .rc .adr{color:var(--t3);padding:2px 6px}
    #v-community .rc .adr .ico{width:14px;height:14px}
    #v-community .repop{position:absolute;z-index:6;background:#fff;border:1px solid var(--line);border-radius:11px;box-shadow:0 8px 22px rgba(24,26,28,.13);padding:4px;display:none;gap:1px}
    #v-community .repop button{border:none;background:none;font-size:18px;cursor:pointer;padding:3px 4px;border-radius:7px}
    #v-community .repop button:hover{background:var(--surface-2)}
    #v-community .voice{display:flex;align-items:center;gap:11px;background:var(--surface);border:1px solid var(--line);border-radius:10px;padding:8px 12px;max-width:330px;margin-top:5px}
    #v-community .voice .vp{width:32px;height:32px;border-radius:50%;background:var(--brand);color:#fff;display:flex;align-items:center;justify-content:center;flex-shrink:0;cursor:pointer;border:none}
    #v-community .wave{flex:1;display:flex;align-items:center;gap:2.5px;height:24px}
    #v-community .wave i{width:2.5px;border-radius:3px;background:#cfe7e2}
    #v-community .wave i.p{background:var(--brand)}
    #v-community .voice .vd{font-size:11.5px;color:var(--t3);font-variant-numeric:tabular-nums}
    #v-community .mfile{display:flex;align-items:center;gap:11px;background:var(--surface);border:1px solid var(--line);border-radius:10px;padding:9px 12px;max-width:320px;margin-top:5px;text-decoration:none}
    #v-community .mfile .fi{width:34px;height:34px;border-radius:7px;background:#EAF3F1;color:var(--brand-2);display:flex;align-items:center;justify-content:center;flex-shrink:0}
    #v-community .mfile b{font-size:12.5px;color:var(--ink)}
    #v-community .mfile small{font-size:11px;color:var(--t3);display:block}
    #v-community .mimg{margin-top:6px;max-width:230px;max-height:280px;border-radius:10px;border:1px solid var(--line);display:block;cursor:pointer}
    #v-community .corr{margin-top:7px;border:1px solid var(--brand-line);background:var(--brand-wash);border-radius:10px;padding:10px 12px;max-width:460px}
    #v-community .corr .ch2{display:flex;align-items:center;gap:6px;font-size:11.5px;font-weight:700;color:var(--brand-2);margin-bottom:4px}
    #v-community .corr .cx{font-size:13.5px;color:var(--ink);font-weight:600}
    #v-community .corr .cnote{font-size:12.5px;color:var(--t2);margin-top:5px;line-height:1.45}
    #v-community .corr .cact{display:flex;gap:7px;margin-top:9px}
    #v-community .corr .cbtn{font-size:12px;font-weight:600;border:1px solid var(--line);background:#fff;border-radius:8px;padding:5px 10px;cursor:pointer;display:inline-flex;align-items:center;gap:5px}
    #v-community .corr .cbtn.done{background:var(--brand-wash);border-color:var(--brand-line);color:var(--brand-2)}
    #v-community .corrbtn{font-size:11.5px;font-weight:600;color:var(--brand-2);cursor:pointer;display:inline-flex;align-items:center;gap:4px;margin-left:6px}
    #v-community .corrform{margin-top:7px;border:1px solid var(--line);border-radius:10px;background:#fff;padding:10px;max-width:460px}
    #v-community .corrform textarea{width:100%;border:1px solid var(--line);border-radius:8px;padding:8px 10px;font-family:inherit;font-size:13px;resize:vertical;outline:none;margin-bottom:6px}
    #v-community .corrform textarea:focus{border-color:var(--brand)}
    #v-community .corrform .cf-act{display:flex;gap:7px;justify-content:flex-end}
    #v-community .cmp{flex-shrink:0;padding:10px 18px 16px}
    #v-community .cmp-box{border:1px solid var(--line);border-radius:11px;background:var(--surface);padding:5px;position:relative}
    #v-community .cmp-box:focus-within{border-color:var(--brand)}
    #v-community .cmp-in{display:flex;align-items:center;gap:4px}
    #v-community .cmp-in input{flex:1;border:none;outline:none;background:none;font-family:inherit;font-size:13.5px;padding:9px 6px;color:var(--t1)}
    #v-community .ct{width:34px;height:34px;border-radius:8px;display:flex;align-items:center;justify-content:center;color:var(--t3);flex-shrink:0;border:none;background:none;cursor:pointer}
    #v-community .ct:hover{background:var(--surface-2);color:var(--t1)}
    #v-community .ct.rec{color:var(--red)}
    #v-community .cse{width:34px;height:34px;border-radius:8px;background:var(--brand);color:#fff;display:flex;align-items:center;justify-content:center;flex-shrink:0;border:none;cursor:pointer}
    #v-community .cse:hover{background:var(--brand-2)}
    #v-community .emopick{position:absolute;bottom:46px;left:6px;background:#fff;border:1px solid var(--line);border-radius:12px;box-shadow:0 10px 26px rgba(24,26,28,.14);padding:8px;display:none;flex-wrap:wrap;gap:2px;max-width:300px;z-index:8}
    #v-community .emopick button{border:none;background:none;font-size:19px;cursor:pointer;padding:3px;border-radius:7px}
    #v-community .emopick button:hover{background:var(--surface-2)}
    #v-community .chint{font-size:11px;color:var(--t3);padding:6px 6px 0;display:flex;gap:5px;align-items:center}
    #v-community .cmp-lock{padding:12px 14px;border:1px solid var(--line);border-radius:11px;background:var(--surface-2);color:var(--t2);font-size:12.5px;display:flex;gap:8px;align-items:center}
    #v-community .ms{border-left:1px solid var(--line);background:var(--surface-2);overflow-y:auto;padding:14px 12px;min-height:0}
    #v-community .ms h4{font-size:10.5px;font-weight:600;letter-spacing:.05em;text-transform:uppercase;color:var(--t3);padding:6px 8px 7px}
    #v-community .mem{display:flex;align-items:center;gap:10px;padding:6px 8px;border-radius:8px}
    #v-community .mem .mw{position:relative;flex-shrink:0}
    #v-community .mem .ava{width:32px;height:32px;font-size:11px}
    #v-community .mem .pr{position:absolute;bottom:-1px;right:-1px;width:10px;height:10px;border-radius:50%;border:2px solid var(--surface-2);background:#2FA36B}
    #v-community .mem .pr.of{background:#c7c6bf}
    #v-community .mem .mn{font-size:13px;font-weight:600;line-height:1.15;color:var(--ink)}
    #v-community .mem .msb{font-size:11px;color:var(--t3)}
    #v-community .mem.off{opacity:.55}
    #v-community .gate{max-width:520px;margin:20px auto;border:1px solid var(--line);border-radius:14px;background:#fff;padding:34px 24px;text-align:center}
    #v-community .cm-empty{margin:auto;text-align:center;color:var(--t3);font-size:13px;padding:30px}
    @media(max-width:1080px){#v-community .comm{grid-template-columns:230px 1fr}#v-community .ms{display:none}}
    @media(max-width:680px){#v-community .comm{grid-template-columns:1fr;height:auto}#v-community .cs{border-right:none;border-bottom:1px solid var(--line);max-height:180px}#v-community .cs-l{display:flex;flex-wrap:wrap;gap:4px}#v-community .cg{width:100%}#v-community .ch{width:auto}#v-community .feed{height:56vh}}
    `;
    var st=document.createElement('style'); st.textContent=css; document.head.appendChild(st);
  }

  var QUICK=['👍','❤️','😂','😮','🙏','🔥','🎉','👏'];
  var EMOJIS='😀 😃 😄 😁 😆 😅 😂 🤣 🙂 😉 😊 😍 🥰 😘 😜 🤗 🤔 😎 🥳 😴 🙄 😮 🥺 😢 😭 😡 👍 👎 👏 🙏 💪 🙌 👋 🤝 🔥 🎉 ⭐ 💯 ❤️ 🧡 💛 💚 💙 ✅ ❌'.split(' ');

  // ---------- Ungelesen ----------
  var unread={};
  function seenKey(){ return 'cmv2_seen_'+(ME&&ME.id?ME.id:'x'); }
  function loadSeen(){ try{ return JSON.parse(localStorage.getItem(seenKey())||'{}')||{}; }catch(e){ return {}; } }
  function saveSeen(o){ try{ localStorage.setItem(seenKey(),JSON.stringify(o)); }catch(e){} }
  function markSeen(slug){ var o=loadSeen(); o[slug]=Date.now(); saveSeen(o); unread[slug]=0; }
  async function computeUnread(){
    unread={};
    try{
      var since=new Date(Date.now()-45*864e5).toISOString();
      var res=await sbc.from('community_messages').select('channel,created_at,user_id').is('deleted_at',null).gte('created_at',since).order('created_at',{ascending:false}).limit(800);
      var rows=res.data||[], seen=loadSeen();
      rows.forEach(function(m){ if(m.user_id===ME.id) return; if(new Date(m.created_at).getTime()>(seen[m.channel]||0)) unread[m.channel]=(unread[m.channel]||0)+1; });
    }catch(e){}
  }

  // ---------- Render Shell ----------
  async function renderCommunity(){
    injectStyle();
    var r=root(); if(!r) return;
    sbc=getSb(); ME=getUser(); PROF=getProfile();
    myName=(PROF&&PROF.name)||'Mitglied';
    r.innerHTML='<div class="pagehead"><h1>Community</h1></div><div class="cm-empty">Lädt…</div>';
    if(!sbc||!ME){ r.innerHTML=gateHtml(); return; }
    var access=false;
    try{ var a=await sbc.rpc('has_full_access'); access=!!a.data; }catch(e){ access=active(); }
    if(!access){ stopAll(); r.innerHTML=gateHtml(); return; }
    try{ var pr=await sbc.from('profiles').select('is_admin,is_teacher,is_challenger').eq('id',ME.id).single(); isTeam=!!(pr.data&&(pr.data.is_admin||pr.data.is_teacher)); isAdmin=!!(pr.data&&pr.data.is_admin); isChallenger=!!(pr.data&&pr.data.is_challenger); }catch(e){}
    var ch=await sbc.from('community_channels').select('slug,name,emoji,description,team_only,challenge_only,grp,sort_order').eq('is_active',true).order('sort_order');
    channels=(ch.data||[]).filter(function(c){ return (!c.challenge_only)||isChallenger||isTeam; });
    try{ var rs=await sbc.rpc('community_roster'); roster=(rs&&rs.data)||[]; }catch(e){ roster=[]; }
    try{ var dt=await sbc.rpc('dm_threads'); dmThreads=(dt&&dt.data)||[]; }catch(e){ dmThreads=[]; }
    if(!channels.length){ r.innerHTML='<div class="pagehead"><h1>Community</h1></div><div class="cm-empty">Noch keine Kanäle.</div>'; return; }
    if(!cur||!channels.some(function(c){return c.slug===cur;})) cur=channels[0].slug;
    await computeUnread();
    r.innerHTML=shellHtml();
    bindSidebar();
    subscribeBadges();
    await openChannel(cur);
  }

  function gateHtml(){
    return '<div class="pagehead"><h1>Community</h1></div>'+
      '<div class="gate"><div style="font-size:34px">🔒</div><h3 style="margin:8px 0 6px">Nur für aktive Mitglieder</h3>'+
      '<p style="color:#5A6169;max-width:400px;margin:0 auto 14px">Die Community ist exklusiv für Mitglieder mit aktivem Guthaben oder Pass.</p>'+
      '<a href="index.html#preise" style="display:inline-block;background:#12A594;color:#fff;font-weight:600;padding:9px 15px;border-radius:9px">Pakete ansehen →</a></div>';
  }

  var GRP_LABEL={willkommen:'Willkommen',allgemein:'Allgemein',themen:'Themen'};
  function chanRow(c){
    var n=unread[c.slug]||0;
    return '<button class="ch'+(mode==='channel'&&c.slug===cur?' on':'')+'" data-ch="'+E(c.slug)+'">'+
      '<span class="h">#</span><span class="nm2">'+E(c.name)+'</span>'+
      (n>0?'<span class="cn">'+(n>99?'99+':n)+'</span>':'')+'</button>';
  }
  function dmRow(t){
    var pv=t.name;
    return '<button class="ch'+(mode==='dm'&&dmActive&&dmActive.id===t.partner_id?' on':'')+'" data-dm="'+E(t.partner_id)+'" data-nm="'+E(t.name)+'">'+
      '<span class="pd" style="background:'+(t.unread>0?'#2FA36B':'#c7c6bf')+'"></span><span class="nm2">'+E(pv)+'</span>'+
      (t.unread>0?'<span class="cn">'+(t.unread>99?'99+':t.unread)+'</span>':'')+'</button>';
  }
  function shellHtml(){
    var groups=['willkommen','allgemein','themen'];
    var sideChannels='';
    groups.forEach(function(g){
      var list=channels.filter(function(c){return (c.grp||'allgemein')===g;});
      if(!list.length) return;
      sideChannels+='<div class="cg">'+E(GRP_LABEL[g]||g)+'</div>'+list.map(chanRow).join('');
    });
    var dmHtml = dmThreads.length ? '<div class="cg">Direktnachrichten</div>'+dmThreads.map(dmRow).join('') : '';
    var online = roster.filter(function(m){return m.is_online;}).length;
    return '<div class="pagehead"><h1>Community</h1><p>Chatte mit anderen Mitgliedern — Text &amp; Sprachnachrichten, in Echtzeit.</p></div>'+
      '<div class="comm">'+
        '<div class="cs"><div class="cs-h"><b>Community</b><div class="st"><i></i>'+roster.length+' Mitglieder · '+online+' online</div></div>'+
          '<div class="cs-l">'+sideChannels+dmHtml+'</div></div>'+
        '<div class="chat" id="cmChat"></div>'+
        '<div class="ms" id="cmRoster">'+rosterHtml()+'</div>'+
      '</div>';
  }
  function rosterHtml(){
    var team=roster.filter(function(m){return m.is_team;});
    var onl=roster.filter(function(m){return !m.is_team&&m.is_online;});
    var off=roster.filter(function(m){return !m.is_team&&!m.is_online;});
    function row(m,cls){
      var fn=String(m.name||'Mitglied').trim().split(/\s+/)[0];
      return '<div class="mem'+(cls==='off'?' off':'')+'"><div class="mw"><div class="ava '+avClass(m.name)+'">'+E(initials(fn))+'</div><span class="pr'+(cls==='off'?' of':'')+'"></span></div>'+
        '<div><div class="mn">'+E(fn)+'</div><div class="msb">'+(m.is_team?'Team':(m.level?E(m.level):'Mitglied'))+'</div></div></div>';
    }
    var h='';
    if(team.length){ h+='<h4>Team</h4>'+team.map(function(m){return row(m,'on');}).join(''); }
    if(onl.length){ h+='<h4 style="margin-top:6px">Online — '+onl.length+'</h4>'+onl.map(function(m){return row(m,'on');}).join(''); }
    if(off.length){ h+='<h4 style="margin-top:6px">Mitglieder — '+off.length+'</h4>'+off.slice(0,40).map(function(m){return row(m,'off');}).join(''); }
    if(!h) h='<div class="cm-empty">Noch keine Mitglieder.</div>';
    return h;
  }

  function bindSidebar(){
    var r=root();
    Array.prototype.forEach.call(r.querySelectorAll('[data-ch]'),function(b){ b.addEventListener('click',function(){ var s=b.getAttribute('data-ch'); if(mode==='channel'&&s===cur) return; mode='channel'; cur=s; refreshSideActive(); openChannel(s); }); });
    Array.prototype.forEach.call(r.querySelectorAll('[data-dm]'),function(b){ b.addEventListener('click',function(){ openDM(b.getAttribute('data-dm'),b.getAttribute('data-nm')); }); });
  }
  function refreshSideActive(){
    var r=root(); if(!r) return;
    Array.prototype.forEach.call(r.querySelectorAll('.ch'),function(x){
      var isC=(mode==='channel'&&x.getAttribute('data-ch')===cur);
      var isD=(mode==='dm'&&dmActive&&x.getAttribute('data-dm')===dmActive.id);
      x.classList.toggle('on',isC||isD);
    });
  }

  // ---------- Channel öffnen ----------
  async function openChannel(slug){
    mode='channel';
    var c=channels.filter(function(x){return x.slug===slug;})[0]; if(!c) return;
    markSeen(slug); updateBadge(slug);
    var chat=q('#cmChat'); if(!chat) return;
    var canPost = !(c.team_only && !isTeam);
    chat.innerHTML=
      '<div class="ch-hd"><div class="ti"><span class="h">#</span>'+E(c.name)+'</div>'+(c.description?'<div class="de">'+E(c.description)+'</div>':'')+'</div>'+
      (c.description?'<div class="note"><span class="ni">'+svg(IC.pin,'ico-sm')+'</span><div><b>'+E(c.name)+'</b><p>'+E(c.description)+'</p></div></div>':'')+
      '<div class="feed" id="cmFeed"><div class="cm-empty">Lädt…</div></div>'+
      '<div class="cmp" id="cmCmp"></div>';
    renderComposer(canPost);
    var res=await sbc.from('community_messages').select('id,user_id,kind,body,audio_path,audio_secs,image_path,author_name,created_at').eq('channel',slug).is('deleted_at',null).order('created_at').limit(200);
    var rows=res.data||[];
    await hydrateMedia(rows);
    reax={}; corr={};
    await loadReactions(rows.map(function(m){return m.id;}));
    await loadCorrections(rows.map(function(m){return m.id;}));
    renderFeed(rows);
    subscribe(slug);
  }

  // ---------- Medien ----------
  async function hydrateMedia(rows){
    var ap=rows.filter(function(m){return m.kind==='audio'&&m.audio_path;}).map(function(m){return m.audio_path;});
    if(ap.length){ try{ var s=await sbc.storage.from('community-audio').createSignedUrls(ap,3600); var mp={}; (s.data||[]).forEach(function(x){if(x.path&&x.signedUrl)mp[x.path]=x.signedUrl;}); rows.forEach(function(m){if(m.kind==='audio'&&mp[m.audio_path])m._url=mp[m.audio_path];}); }catch(e){} }
    var ip=rows.filter(function(m){return m.kind==='image'&&m.image_path;}).map(function(m){return m.image_path;});
    if(ip.length){ try{ var si=await sbc.storage.from('community-image').createSignedUrls(ip,3600); var mi={}; (si.data||[]).forEach(function(x){if(x.path&&x.signedUrl)mi[x.path]=x.signedUrl;}); rows.forEach(function(m){if(m.kind==='image'&&mi[m.image_path])m._url=mi[m.image_path];}); }catch(e){} }
  }

  // ---------- Reaktionen ----------
  async function loadReactions(ids){
    ids=(ids||[]).filter(isRealId); if(!ids.length) return;
    try{ var res=await sbc.from('community_reactions').select('message_id,emoji,user_id').in('message_id',ids);
      var map={}; ids.forEach(function(id){map[id]={};});
      (res.data||[]).forEach(function(r){ var mm=map[r.message_id]||(map[r.message_id]={}); var e=mm[r.emoji]||(mm[r.emoji]={count:0,mine:false}); e.count++; if(r.user_id===ME.id)e.mine=true; });
      ids.forEach(function(id){reax[id]=map[id]||{};});
    }catch(e){}
  }
  function rcHtml(id){
    if(!isRealId(id)) return '';
    var r=reax[id]||{};
    var chips=Object.keys(r).map(function(em){var d=r[em];return '<span class="'+(d.mine?'on':'')+'" data-reax="'+E(id)+'" data-emoji="'+E(em)+'">'+em+' '+d.count+'</span>';}).join('');
    return '<div class="rc" data-rc="'+E(id)+'">'+chips+'<span class="adr" data-addr="'+E(id)+'" title="Reagieren">'+svg(IC.emoji,'ico-sm')+'</span></div>';
  }
  function updateRc(id){ var w=q('[data-rc="'+id+'"]'); if(!w) return; var t=document.createElement('div'); t.innerHTML=rcHtml(id); var nb=t.firstChild; if(nb&&w.parentNode) w.parentNode.replaceChild(nb,w); }
  async function toggleReaction(id,emoji){
    if(!isRealId(id)||!emoji) return;
    var c0=reax[id]&&reax[id][emoji], mine=c0&&c0.mine;
    try{ if(mine){ await sbc.from('community_reactions').delete().eq('message_id',id).eq('user_id',ME.id).eq('emoji',emoji); } else { await sbc.from('community_reactions').insert({message_id:id,emoji:emoji}); } }catch(e){}
    await loadReactions([id]); updateRc(id);
  }
  function onFeedClick(ev){
    var t=ev.target; if(!t||!t.closest) return;
    var addr=t.closest('[data-addr]');
    if(addr){ ev.stopPropagation(); showRepop(addr,addr.getAttribute('data-addr')); return; }
    var re=t.closest('[data-reax]');
    if(re){ ev.stopPropagation(); toggleReaction(re.getAttribute('data-reax'),re.getAttribute('data-emoji')); return; }
    var cb=t.closest('[data-corrbtn]'); if(cb){ ev.stopPropagation(); openCorrectForm(cb.getAttribute('data-corrbtn')); return; }
    var kb=t.closest('[data-kibtn]'); if(kb){ ev.stopPropagation(); aiCorrect(kb.getAttribute('data-kibtn')); return; }
    var sv=t.closest('[data-savecorr]'); if(sv){ ev.stopPropagation(); saveTrainer(sv.getAttribute('data-savecorr')); return; }
    var vp=t.closest('[data-play]'); if(vp){ ev.stopPropagation(); togglePlay(vp); return; }
    var dl=t.closest('[data-del]'); if(dl){ ev.stopPropagation(); delMsg(dl.getAttribute('data-del')); return; }
    var cf=t.closest('[data-corrsubmit]'); if(cf){ ev.stopPropagation(); submitCorrection(cf.getAttribute('data-corrsubmit')); return; }
    var cc=t.closest('[data-corrcancel]'); if(cc){ ev.stopPropagation(); var f=q('[data-corrform="'+cc.getAttribute('data-corrcancel')+'"]'); if(f)f.remove(); return; }
  }
  function showRepop(anchor,id){
    var ex=q('.repop'); if(ex) ex.remove();
    var pop=document.createElement('div'); pop.className='repop'; pop.style.display='flex';
    pop.innerHTML=QUICK.map(function(em){return '<button data-reax="'+E(id)+'" data-emoji="'+em+'">'+em+'</button>';}).join('');
    var feed=q('#cmFeed'); feed.appendChild(pop);
    var ar=anchor.getBoundingClientRect(), fr=feed.getBoundingClientRect();
    pop.style.left=Math.max(6,ar.left-fr.left)+'px'; pop.style.top=(ar.top-fr.top+feed.scrollTop-40)+'px';
    pop.addEventListener('click',function(e){ var b=e.target.closest('[data-reax]'); if(b){ toggleReaction(b.getAttribute('data-reax'),b.getAttribute('data-emoji')); pop.remove(); } });
  }

  // ---------- Korrekturen (Team) ----------
  async function loadCorrections(ids){
    ids=(ids||[]).filter(isRealId); if(!ids.length) return;
    try{
      var res=await sbc.from('community_corrections').select('id,message_id,corrector_name,corrected,note,created_at').in('message_id',ids).is('deleted_at',null).order('created_at');
      (res.data||[]).forEach(function(c){ (corr[c.message_id]||(corr[c.message_id]=[])).push(c); });
      var cids=(res.data||[]).map(function(c){return c.id;});
      if(cids.length){ var sv=await sbc.from('fehler_trainer').select('correction_id').in('correction_id',cids); (sv.data||[]).forEach(function(x){savedCorr[x.correction_id]=true;}); }
    }catch(e){}
  }
  function corrCardHtml(c){
    return '<div class="corr" data-corrcard="'+E(c.id)+'"><div class="ch2">'+svg(IC.pencil,'ico-sm')+'Korrektur von '+E(c.corrector_name||'Team')+'</div>'+
      '<div class="cx">'+E(c.corrected)+'</div>'+
      (c.note?'<div class="cnote">'+E(c.note)+'</div>':'')+
      '<div class="cact"><button class="cbtn'+(savedCorr[c.id]?' done':'')+'" data-savecorr="'+E(c.id)+'">'+svg(IC.check,'ico-sm')+(savedCorr[c.id]?'Im Fehler-Trainer':'In meinen Fehler-Trainer')+'</button></div></div>';
  }
  function corrsFor(mid){ return (corr[mid]||[]).map(corrCardHtml).join(''); }
  function correctBtnHtml(m){
    if(!isTeam||!ME||m.user_id===ME.id||m.kind!=='text'||!isRealId(m.id)) return '';
    return '<span class="corrbtn" data-corrbtn="'+E(m.id)+'">'+svg(IC.pencil,'ico-sm')+'korrigieren</span>'+
      '<span class="corrbtn kibtn" data-kibtn="'+E(m.id)+'" style="color:#8B5CF6">✨ KI-Vorschlag</span>';
  }
  function openCorrectForm(mid){
    var row=q('[data-id="'+mid+'"]'); if(!row) return; if(row.querySelector('[data-corrform]')) return;
    var mb=row.querySelector('.mb'); if(!mb) return;
    var f=document.createElement('div'); f.className='corrform'; f.setAttribute('data-corrform',mid);
    f.innerHTML='<textarea data-cin="corrected" rows="2" placeholder="Korrigierter Satz…"></textarea><textarea data-cin="note" rows="2" placeholder="Kurzer Hinweis (optional) — z.B. die Regel"></textarea><div class="cf-act"><button class="cbtn" data-corrcancel="'+mid+'">Abbrechen</button><button class="cbtn done" data-corrsubmit="'+mid+'">Korrektur senden</button></div>';
    mb.appendChild(f); var ta=f.querySelector('textarea'); if(ta) ta.focus();
  }
  async function submitCorrection(mid){
    var f=q('[data-corrform="'+mid+'"]'); if(!f) return;
    var corrected=(f.querySelector('[data-cin="corrected"]').value||'').trim();
    var note=(f.querySelector('[data-cin="note"]').value||'').trim();
    if(!corrected) return;
    try{ var res=await sbc.from('community_corrections').insert({message_id:mid,channel:cur,corrector_name:myName,corrected:corrected,note:note||null}).select('id,message_id,corrector_name,corrected,note,created_at').single();
      if(res.data){ (corr[mid]||(corr[mid]=[])).push(res.data); f.remove(); var row=q('[data-id="'+mid+'"]'); var slot=row&&row.querySelector('[data-corrslot]'); if(slot) slot.innerHTML=corrsFor(mid); }
    }catch(e){}
  }
  async function aiCorrect(mid){
    openCorrectForm(mid);
    var f=q('[data-corrform="'+mid+'"]'); if(!f) return;
    var ta=f.querySelector('[data-cin="corrected"]'); var nt=f.querySelector('[data-cin="note"]');
    var row=q('[data-id="'+mid+'"]'); var mt=row&&row.querySelector('.mt'); var orig=mt?mt.textContent:'';
    var oldh=f.querySelector('.ki-hint'); if(oldh)oldh.remove();
    if(ta){ ta.value='KI denkt nach …'; ta.disabled=true; } if(nt){ nt.disabled=true; }
    try{
      var s=await sbc.auth.getSession(); var tok=s&&s.data&&s.data.session&&s.data.session.access_token;
      var r=await fetch('/api/ai-correct',{method:'POST',headers:{'Content-Type':'application/json','Authorization':'Bearer '+tok},body:JSON.stringify({message_id:mid})});
      var j=await r.json();
      if(ta)ta.disabled=false; if(nt)nt.disabled=false;
      var h=document.createElement('div'); h.className='ki-hint'; h.style.cssText='font-size:12px;font-weight:600;margin-bottom:6px';
      if(j&&j.ok){
        if(j.has_error===false){
          if(ta)ta.value=orig; if(nt)nt.value='';
          h.style.color='#0E8577'; h.textContent='✨ KI: Der Satz ist korrekt 👍 — du kannst trotzdem etwas anmerken.';
        } else {
          if(ta)ta.value=j.corrected||''; if(nt)nt.value=(j.topic?('['+j.topic+'] '):'')+(j.note||'');
          h.style.color='#8B5CF6'; h.textContent='✨ KI-Vorschlag — bitte prüfen und dann „Korrektur senden".';
        }
        f.insertBefore(h,f.firstChild);
      } else { if(ta)ta.value=orig; if(nt)nt.value=''; }
    }catch(e){ if(ta){ta.disabled=false;ta.value=orig;} if(nt)nt.disabled=false; }
  }
  async function saveTrainer(cid){
    if(savedCorr[cid]) return;
    var c=null; Object.keys(corr).forEach(function(k){ (corr[k]||[]).forEach(function(x){if(x.id===cid)c=x;}); });
    if(!c) return;
    try{ await sbc.from('fehler_trainer').insert({correction_id:c.id,corrected:c.corrected,note:c.note||null,topic:null}); savedCorr[cid]=true;
      var b=q('[data-savecorr="'+cid+'"]'); if(b){ b.classList.add('done'); b.innerHTML=svg(IC.check,'ico-sm')+'Im Fehler-Trainer'; }
    }catch(e){}
  }

  // ---------- Nachricht rendern ----------
  function waveHtml(id){
    var s=String(id||'x'),h=0; for(var i=0;i<s.length;i++)h=(h*31+s.charCodeAt(i))>>>0;
    var bars=''; for(var k=0;k<20;k++){ h=(h*1103515245+12345)&0x7fffffff; var ht=6+(h%18); bars+='<i style="height:'+ht+'px"></i>'; }
    return bars;
  }
  function bodyHtml(m){
    if(m.kind==='audio'){
      return '<div class="voice"><button class="vp" data-play="'+E(m.id)+'"'+(m._url?' data-src="'+E(m._url)+'"':'')+'>'+svg(IC.play,'ico-sm')+'</button><div class="wave">'+waveHtml(m.id)+'</div><span class="vd">'+(m.audio_secs?Math.round(m.audio_secs)+'s':'')+'</span></div>';
    }
    if(m.kind==='image'){
      return (m._url?'<a href="'+E(m._url)+'" target="_blank" rel="noopener"><img class="mimg" src="'+E(m._url)+'" alt="Bild" loading="lazy"></a>':'<span style="color:#8B929A">📷 Bild</span>')+(m.body?'<div class="mt" style="margin-top:5px">'+E(m.body)+'</div>':'');
    }
    return '<div class="mt">'+E(m.body||'')+'</div>';
  }
  function msgHtml(m){
    var me=m.user_id===ME.id;
    var role = ''; // Team/level badge best-effort from author (unknown here) — team shown via correction ability
    return '<div class="m" data-id="'+E(m.id)+'"><div class="ava '+avClass(m.author_name)+'">'+E(initials(m.author_name))+'</div>'+
      '<div class="mb"><div class="mh"><span class="w">'+E(m.author_name||'Mitglied')+'</span><time>'+timeStr(m.created_at)+'</time>'+correctBtnHtml(m)+
      ((me||isAdmin)?'<span class="del" data-del="'+E(m.id)+'" title="Löschen">'+svg(IC.close,'ico-sm')+'</span>':'')+'</div>'+
      bodyHtml(m)+rcHtml(m.id)+'<div data-corrslot="'+E(m.id)+'">'+corrsFor(m.id)+'</div></div></div>';
  }
  function renderFeed(rows){
    var box=q('#cmFeed'); if(!box) return;
    if(!rows.length){ box.innerHTML='<div class="cm-empty">Noch keine Nachrichten — schreib die erste! ✍️</div>'; }
    else{
      var out='',last='';
      rows.forEach(function(m){ var dl=new Date(m.created_at).toDateString(); if(dl!==last){last=dl; out+='<div class="dsep">'+E(dayLabel(m.created_at))+'</div>';} out+=msgHtml(m); });
      box.innerHTML=out;
    }
    box.scrollTop=box.scrollHeight;
    if(!box.__b){ box.__b=true; box.addEventListener('click',onFeedClick); if(!window.__cmDoc){ window.__cmDoc=true; document.addEventListener('click',function(){ var p=document.querySelector('#v-community .repop'); if(p)p.remove(); var e=document.querySelector('#v-community .emopick'); if(e)e.style.display='none'; }); } }
  }
  function appendMsg(m){
    var box=q('#cmFeed'); if(!box) return;
    if(box.querySelector('.cm-empty')) box.innerHTML='';
    var near=box.scrollHeight-box.scrollTop-box.clientHeight<140;
    box.insertAdjacentHTML('beforeend',msgHtml(m));
    if(near||m.user_id===ME.id) box.scrollTop=box.scrollHeight;
  }
  function togglePlay(btn){
    var src=btn.getAttribute('data-src'); if(!src) return;
    if(btn.__a){ if(btn.__a.paused){ btn.__a.play(); btn.innerHTML=svg(IC.pause,'ico-sm'); } else { btn.__a.pause(); btn.innerHTML=svg(IC.play,'ico-sm'); } return; }
    var a=new Audio(src); btn.__a=a; a.play(); btn.innerHTML=svg(IC.pause,'ico-sm');
    a.addEventListener('ended',function(){ btn.innerHTML=svg(IC.play,'ico-sm'); });
  }
  async function delMsg(id){
    if(!isRealId(id)) return;
    try{ await sbc.from('community_messages').update({deleted_at:new Date().toISOString()}).eq('id',id); var n=q('[data-id="'+id+'"]'); if(n)n.remove(); }catch(e){}
  }

  // ---------- Composer ----------
  function renderComposer(canPost){
    var foot=q('#cmCmp'); if(!foot) return;
    if(!canPost){ foot.innerHTML='<div class="cmp-lock">'+svg(IC.pin,'ico-sm')+'Nur das Team schreibt hier — du bekommst alle Neuigkeiten mit.</div>'; return; }
    var ph = mode==='dm' ? ('Nachricht an '+E((dmActive&&dmActive.name)||'')+' …') : ('Nachricht an #'+E(cur)+' …');
    foot.innerHTML='<div class="cmp-box"><div class="emopick" id="cmEmo2"></div><div class="cmp-in">'+
      '<button class="ct" id="cImg" title="Bild">'+svg(IC.img)+'</button>'+
      '<input id="cInp" placeholder="'+ph+'">'+
      '<button class="ct" id="cEmo" title="Emoji">'+svg(IC.emoji)+'</button>'+
      '<button class="ct" id="cMic" title="Sprachnachricht">'+svg(IC.mic)+'</button>'+
      '<input type="file" id="cFile" accept="image/*" style="display:none">'+
      '<button class="cse" id="cSend" title="Senden">'+svg(IC.send,'ico-sm')+'</button>'+
      '</div></div><div class="chint">'+svg(IC.mic,'ico-sm')+'Sprachnachricht aufnehmen · <b style="color:var(--t2)">Enter</b> zum Senden</div>';
    var inp=q('#cInp'),send=q('#cSend'),mic=q('#cMic'),img=q('#cImg'),file=q('#cFile'),emo=q('#cEmo'),pick=q('#cmEmo2');
    if(inp){ inp.addEventListener('keydown',function(e){ if(e.key==='Enter'){ e.preventDefault(); doSend(); } }); }
    if(send) send.addEventListener('click',doSend);
    if(mic) mic.addEventListener('click',toggleRec);
    if(img&&file){ img.addEventListener('click',function(){file.click();}); file.addEventListener('change',function(){ if(file.files&&file.files[0]) uploadImage(file.files[0]); file.value=''; }); }
    if(emo&&pick){ pick.innerHTML=EMOJIS.map(function(x){return '<button type="button">'+x+'</button>';}).join('');
      emo.addEventListener('click',function(ev){ ev.stopPropagation(); pick.style.display=(pick.style.display==='flex'?'none':'flex'); });
      pick.addEventListener('click',function(ev){ ev.stopPropagation(); var t=ev.target; if(t.tagName==='BUTTON'){ inp.value+=t.textContent; inp.focus(); } });
    }
  }
  var sending=false;
  async function doSend(){
    if(sending) return; var inp=q('#cInp'); if(!inp) return; var t=inp.value.trim(); if(!t) return;
    sending=true; inp.value='';
    if(mode==='dm'){ await dmSend(t); sending=false; return; }
    var tmp='tmp-'+Date.now();
    appendMsg({id:tmp,user_id:ME.id,kind:'text',body:t,author_name:myName,created_at:new Date().toISOString()});
    try{ var res=await sbc.from('community_messages').insert({channel:cur,kind:'text',body:t,author_name:myName}).select('id').single(); var node=q('[data-id="'+tmp+'"]'); if(node&&res.data) node.setAttribute('data-id',res.data.id); notifyAdmin(cur); }catch(e){}
    sending=false;
  }

  // ---------- Audio ----------
  async function toggleRec(){
    var mic=q('#cMic'); if(!mic) return;
    if(rec&&rec.state==='recording'){ stopRec(); return; }
    if(!navigator.mediaDevices||!window.MediaRecorder){ alert('Dein Browser unterstützt keine Sprachaufnahme.'); return; }
    try{ recStream=await navigator.mediaDevices.getUserMedia({audio:true}); }catch(e){ alert('Mikrofon-Zugriff nötig.'); return; }
    recChunks=[]; recStart=Date.now();
    var mime=MediaRecorder.isTypeSupported('audio/webm')?'audio/webm':(MediaRecorder.isTypeSupported('audio/mp4')?'audio/mp4':'');
    rec=new MediaRecorder(recStream,mime?{mimeType:mime}:undefined);
    rec.ondataavailable=function(e){ if(e.data&&e.data.size) recChunks.push(e.data); };
    rec.onstop=uploadRec; rec.start();
    mic.classList.add('rec'); var inp=q('#cInp'); if(inp) inp.placeholder='Aufnahme läuft… zum Senden auf 🎙️ tippen';
  }
  function stopRec(){ try{rec.stop();}catch(e){} if(recStream){recStream.getTracks().forEach(function(t){t.stop();});recStream=null;} var mic=q('#cMic'); if(mic)mic.classList.remove('rec'); }
  async function uploadRec(){
    var secs=Math.max(1,Math.round((Date.now()-recStart)/1000)); if(!recChunks.length) return;
    if(mode==='dm'){ return; }
    var type=(rec&&rec.mimeType)||'audio/webm', ext=type.indexOf('mp4')>=0?'mp4':'webm';
    var blob=new Blob(recChunks,{type:type}); if(blob.size>10*1024*1024){ alert('Aufnahme zu lang (max. 10 MB).'); return; }
    var path=ME.id+'/'+Date.now()+'.'+ext, up='up-'+Date.now();
    appendMsg({id:up,user_id:ME.id,kind:'text',body:'🎤 wird gesendet…',author_name:myName,created_at:new Date().toISOString()});
    var ln=q('[data-id="'+up+'"]');
    try{
      var upr=await sbc.storage.from('community-audio').upload(path,blob,{contentType:type,upsert:false});
      if(upr.error){ if(ln)ln.querySelector('.mt')&&(ln.querySelector('.mt').textContent='⚠︎ Audio nicht gesendet'); return; }
      var res=await sbc.from('community_messages').insert({channel:cur,kind:'audio',audio_path:path,audio_secs:secs,author_name:myName}).select('id').single();
      var sg=await sbc.storage.from('community-audio').createSignedUrl(path,3600);
      if(ln&&res.data){ ln.setAttribute('data-id',res.data.id); var mb=ln.querySelector('.mb'); var mt=ln.querySelector('.mt'); if(mt) mt.outerHTML=bodyHtml({id:res.data.id,kind:'audio',audio_secs:secs,_url:sg.data?sg.data.signedUrl:''}); }
      notifyAdmin(cur);
    }catch(e){}
  }
  async function uploadImage(fileObj){
    if(!fileObj) return; if(!/^image\//.test(fileObj.type||'')){ alert('Bitte ein Bild auswählen.'); return; }
    if(fileObj.size>6*1024*1024){ alert('Bild zu groß (max. 6 MB).'); return; }
    if(mode==='dm'){ return; }
    var ext=((fileObj.name||'').split('.').pop()||'jpg').toLowerCase().replace(/[^a-z0-9]/g,'')||'jpg';
    var path=ME.id+'/'+Date.now()+'.'+ext, up='up-'+Date.now();
    appendMsg({id:up,user_id:ME.id,kind:'text',body:'📷 wird gesendet…',author_name:myName,created_at:new Date().toISOString()});
    var ln=q('[data-id="'+up+'"]');
    try{
      var upr=await sbc.storage.from('community-image').upload(path,fileObj,{contentType:fileObj.type,upsert:false});
      if(upr.error){ return; }
      var res=await sbc.from('community_messages').insert({channel:cur,kind:'image',image_path:path,author_name:myName}).select('id').single();
      var sg=await sbc.storage.from('community-image').createSignedUrl(path,3600);
      if(ln&&res.data){ ln.setAttribute('data-id',res.data.id); var mt=ln.querySelector('.mt'); if(mt) mt.outerHTML=bodyHtml({id:res.data.id,kind:'image',_url:sg.data?sg.data.signedUrl:''}); }
      notifyAdmin(cur);
    }catch(e){}
  }
  async function notifyAdmin(channel){
    try{ var s=await sbc.auth.getSession(); var tok=s&&s.data&&s.data.session&&s.data.session.access_token; if(!tok) return;
      fetch('/api/notify-community',{method:'POST',headers:{'Content-Type':'application/json','Authorization':'Bearer '+tok},body:JSON.stringify({channel:channel})}).catch(function(){}); }catch(e){}
  }

  // ---------- Direktnachrichten (inline) ----------
  async function openDM(partnerId,name){
    mode='dm'; dmActive={id:partnerId,name:name||'Mitglied'}; refreshSideActive();
    var chat=q('#cmChat'); if(!chat) return;
    chat.innerHTML='<div class="ch-hd"><span class="bk" id="dmBack">'+svg(IC.back)+'</span><div class="ti">'+E(dmActive.name)+'</div></div><div class="feed" id="cmFeed"><div class="cm-empty">Lädt…</div></div><div class="cmp" id="cmCmp"></div>';
    var bk=q('#dmBack'); if(bk) bk.addEventListener('click',function(){ mode='channel'; dmActive=null; refreshSideActive(); openChannel(cur); });
    renderComposer(true);
    var rows=[];
    try{ var r=await sbc.rpc('dm_thread',{p_partner:partnerId}); rows=(r&&r.data)||[]; }catch(e){}
    var box=q('#cmFeed');
    if(!rows.length){ box.innerHTML='<div class="cm-empty">Noch keine Nachrichten mit '+E(dmActive.name)+'. Sag Hallo 👋</div>'; }
    else{ box.innerHTML=rows.map(function(m){ return '<div class="m" data-id="'+E(m.id)+'"><div class="ava '+avClass(m.sender_id===ME.id?myName:dmActive.name)+'">'+E(initials(m.sender_id===ME.id?myName:dmActive.name))+'</div><div class="mb"><div class="mh"><span class="w">'+(m.sender_id===ME.id?'Du':E(dmActive.name))+'</span><time>'+timeStr(m.created_at)+'</time></div><div class="mt">'+E(m.body||'')+'</div></div></div>'; }).join(''); box.scrollTop=box.scrollHeight; }
    try{ await sbc.rpc('dm_mark_read',{p_partner:partnerId}); }catch(e){}
  }
  async function dmSend(t){
    var box=q('#cmFeed'); if(box){ if(box.querySelector('.cm-empty'))box.innerHTML=''; box.insertAdjacentHTML('beforeend','<div class="m"><div class="ava '+avClass(myName)+'">'+E(initials(myName))+'</div><div class="mb"><div class="mh"><span class="w">Du</span><time>'+timeStr(new Date().toISOString())+'</time></div><div class="mt">'+E(t)+'</div></div></div>'); box.scrollTop=box.scrollHeight; }
    try{ await sbc.from('direct_messages').insert({recipient_id:dmActive.id,kind:'text',body:t}); }catch(e){}
  }

  // ---------- Realtime + Badges ----------
  function badgeHtml(){}
  function updateBadge(slug){
    var btn=q('.ch[data-ch="'+slug+'"]'); if(!btn) return;
    var b=btn.querySelector('.cn'), n=unread[slug]||0;
    if(n<=0){ if(b)b.remove(); return; }
    if(!b){ b=document.createElement('span'); b.className='cn'; btn.appendChild(b); }
    b.textContent=n>99?'99+':n;
  }
  function subscribeBadges(){
    if(badgeChan) return;
    badgeChan=sbc.channel('cmv2-badges').on('postgres_changes',{event:'INSERT',schema:'public',table:'community_messages'},function(p){
      var m=p.new; if(!m||m.deleted_at||m.user_id===ME.id||(mode==='channel'&&m.channel===cur)) return;
      unread[m.channel]=(unread[m.channel]||0)+1; updateBadge(m.channel);
    }).subscribe();
  }
  function subscribe(slug){
    if(chan){ try{sbc.removeChannel(chan);}catch(e){} chan=null; }
    chan=sbc.channel('cmv2:'+slug)
      .on('postgres_changes',{event:'INSERT',schema:'public',table:'community_messages',filter:'channel=eq.'+slug},function(p){
        var m=p.new; if(!m||m.deleted_at||mode!=='channel') return;
        if(m.user_id===ME.id&&q('[data-id="'+m.id+'"]')) return;
        if((m.kind==='audio'&&m.audio_path)||(m.kind==='image'&&m.image_path)){ hydrateMedia([m]).then(function(){appendMsg(m);}); } else appendMsg(m);
      })
      .on('postgres_changes',{event:'INSERT',schema:'public',table:'community_reactions'},function(p){ var m=p.new; if(m&&m.message_id&&q('[data-id="'+m.message_id+'"]')) loadReactions([m.message_id]).then(function(){updateRc(m.message_id);}); })
      .on('postgres_changes',{event:'INSERT',schema:'public',table:'community_corrections',filter:'channel=eq.'+slug},function(p){ var c=p.new; if(!c||c.deleted_at) return; (corr[c.message_id]||(corr[c.message_id]=[])).push(c); var row=q('[data-id="'+c.message_id+'"]'); var slot=row&&row.querySelector('[data-corrslot]'); if(slot) slot.innerHTML=corrsFor(c.message_id); })
      .subscribe();
  }
  function stopAll(){ try{ if(chan)sbc.removeChannel(chan); if(badgeChan)sbc.removeChannel(badgeChan); }catch(e){} chan=null; badgeChan=null; }

  window.renderCommunity=renderCommunity;
})();
