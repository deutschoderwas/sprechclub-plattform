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
  var channels = [], roster = [], dmThreads = [], cur = null, mode = 'channel', dmActive = null, curMsgs = [];
  var isTeam = false, isAdmin = false, isChallenger = false, myName = 'Mitglied';
  var reax = {}, corr = {}, savedCorr = {};
  var replyTo = null, zielSlug = null;
  var chan = null, badgeChan = null;
  /* Robustheit: Wir merken uns, wie weit der Verlauf geladen ist und
     wann die letzte Nachricht kam. Nach jedem Verbindungsabbruch —
     und am Handy passiert das staendig — holen wir genau die Luecke nach. */
  var SEITE = 60;               // so viele Nachrichten pro Ladung
  var aeltesteZeit = null;      // Anfang des geladenen Verlaufs
  var letzteZeit = null;        // Ende des geladenen Verlaufs
  var mehrDa = false;           // gibt es noch aeltere?
  var holtGerade = false;
  var verbunden = true;
  var FELDER = 'id,user_id,kind,body,audio_path,audio_secs,image_path,author_name,created_at,pinned_at,antwort_auf';
  var rec = null, recStream = null, recChunks = [], recStart = 0;

  function getSb(){ try{ return window.sb || (typeof sb!=='undefined'?sb:null);}catch(e){return null;} }
  function getUser(){ try{ return window.user || (typeof user!=='undefined'?user:null);}catch(e){return null;} }
  function getProfile(){ try{ return window.profile || (typeof profile!=='undefined'?profile:null);}catch(e){return null;} }
  function active(){ try{ return (typeof isActive==='function')?isActive():true; }catch(e){ return true; } }
  function E(s){ return (window.esc?window.esc(s):String(s==null?'':s).replace(/[&<>"]/g,function(c){return ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]);})); }
  function root(){ return document.getElementById('v-community'); }
  function q(sel){ var r=root(); return r?r.querySelector(sel):null; }
  function vorname(n){ return String(n==null?'':n).trim().split(/\s+/)[0] || 'Mitglied'; }
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
    copy:'<rect x="9" y="9" width="11" height="11" rx="2"/><path d="M5 15V5a2 2 0 0 1 2-2h8"/>',
    close:'<path d="M18 6 6 18M6 6l12 12"/>',
    back:'<path d="m15 18-6-6 6-6"/>',
    reply:'<path d="M9 14 4 9l5-5"/><path d="M4 9h7a9 9 0 0 1 9 9v2"/>',
    bell:'<path d="M18 8a6 6 0 1 0-12 0c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.7 21a2 2 0 0 1-3.4 0"/>'
  };
  function svg(p,cls){ return '<svg class="ico '+(cls||'')+'" viewBox="0 0 24 24">'+p+'</svg>'; }

  function injectStyle(){
    if(styled) return; styled=true;
    try{
      if(!document.getElementById('dowFonts')){
        ['https://fonts.googleapis.com','https://fonts.gstatic.com'].forEach(function(h,i){
          var pc=document.createElement('link'); pc.rel='preconnect'; pc.href=h;
          if(i) pc.crossOrigin=''; document.head.appendChild(pc);
        });
        var fl=document.createElement('link'); fl.id='dowFonts'; fl.rel='stylesheet';
        fl.href='https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;600;700&family=Inter:wght@400;500;600;700;800&display=swap';
        document.head.appendChild(fl);
      }
    }catch(e){}
    var css = `
    #v-community{--brand:#1B9BC0;--brand-2:#14708B;--brand-ink:#0A3F39;--brand-wash:#F1FAF8;--brand-line:#CDEBE5;--red:#D23B3B;--gold:#C79600;--ink:#191B1C;--t1:#191B1C;--t2:#5A6169;--t3:#8B929A;--surface:#FFFFFF;--surface-2:#FAFAF8;--line:#E6E5E0;--line-2:#EFEEEA;--fh:'Space Grotesk','Inter',sans-serif}
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
    #v-community .ch-hd .bk{color:var(--t2);cursor:pointer;padding:5px;border-radius:8px;border:none;background:none;display:none;flex:none}
    #v-community .ch-hd .bk:hover{background:var(--surface-2)}
    @media(max-width:680px){#v-community .ch-hd .bk{display:inline-flex}}
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
    #v-community .mt{font-size:13.5px;color:#2b2f33;margin-top:2px;line-height:1.55;word-wrap:break-word;white-space:pre-wrap}
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
    #v-community .mimg{margin-top:6px;width:230px;max-width:100%;aspect-ratio:4/3;object-fit:cover;border-radius:10px;border:1px solid var(--line);display:block;cursor:pointer;background:#E7ECEE}
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
    #v-community .cmp-in input,#v-community .cmp-in textarea{flex:1;min-width:0;border:none;outline:none;background:none;font-family:inherit;font-size:13.5px;padding:9px 6px;color:var(--t1);line-height:1.5}
    #v-community .cmp-in textarea{resize:none;max-height:150px;overflow-y:auto;display:block}
    #v-community .cmp-in{align-items:flex-end}
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
    @media(max-width:680px){#v-community .comm{grid-template-columns:1fr;height:calc(100dvh - 140px);min-height:460px}#v-community .cs{border-right:none}#v-community .chat{display:none}#v-community .comm.chatauf .cs{display:none}#v-community .comm.chatauf .chat{display:flex}#v-community .ch{padding:10px 10px;font-size:14px}#v-community .ch .ce{font-size:15px;width:20px}#v-community .feed{padding:6px 13px}#v-community .ch-hd{padding:0 12px;gap:8px}#v-community .ch-hd .de{display:none}}
    `;
    var st=document.createElement('style'); st.textContent=css+`
#v-community .ch.newsch{background:linear-gradient(135deg,#F6F9FA,#E7ECEE);border:1px solid #F0DFA0;color:#7a5c00;font-weight:800;margin:0 0 10px}
#v-community .ch.newsch .nx{font-size:15px;margin-right:3px}
#v-community .ch.newsch.on{background:linear-gradient(135deg,#14181B,#3a3a3a);color:#FFCE00;border-color:#14181B}
#v-community .pinbar{margin:0;border-bottom:1px solid var(--line-2,#F6F9FA);background:#FFFFFF}
#v-community .pinbar .ph{display:flex;align-items:center;gap:6px;font-size:11px;font-weight:800;text-transform:uppercase;letter-spacing:.05em;color:#9A6B00;padding:8px 16px 3px}
#v-community .pinrow{display:flex;align-items:flex-start;gap:10px;padding:4px 16px 8px;font-size:13.5px}
#v-community .pinrow .pc{flex:1;min-width:0}
#v-community .pinrow .pa{font-weight:700;font-size:12px;color:#6B6154}
#v-community .pinrow .pt{color:#22201B;line-height:1.4;word-break:break-word;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden}
#v-community .pinrow .punp{border:none;background:none;cursor:pointer;color:#c7a24a;font-size:12px;font-weight:700;font-family:inherit;flex:0 0 auto}
#v-community .pinrow .punp:hover{color:#D42A21}
#v-community .mh .pinbtn{cursor:pointer;font-size:13px;opacity:.5;margin-left:2px}
#v-community .mh .pinbtn:hover{opacity:1}
#v-community .m.pinned .pinbtn{opacity:1}
#v-community .m{position:relative}
#v-community .rc:empty{display:none}
#v-community .rc{margin-top:5px}
#v-community .mh-pin{opacity:.5;margin-left:3px;display:inline-flex;vertical-align:middle}
#v-community .msg-actions{position:absolute;top:-12px;right:10px;display:none;gap:1px;background:#fff;border:1px solid var(--line,#E6E5E0);border-radius:9px;box-shadow:0 5px 16px rgba(20,20,20,.15);padding:2px;z-index:6}
#v-community .m:hover .msg-actions{display:flex}
#v-community .msg-actions button{border:none;background:none;cursor:pointer;padding:6px 7px;border-radius:6px;color:#5A6169;display:inline-flex;align-items:center;font-size:13px;line-height:1;font-family:inherit}
#v-community .msg-actions button:hover{background:#F1EEE8;color:#191B1C}
#v-community .msg-actions button.ki:hover{background:#F3EEFF;color:#8B5CF6}
#v-community .msg-actions button.del:hover{background:#FEF5F5;color:#D42A21}
@media(max-width:900px){#v-community .m{flex-wrap:wrap}#v-community .msg-actions{position:static;display:inline-flex;width:100%;margin:3px 0 0 47px;box-shadow:none;border:none;background:none;padding:0;gap:2px}#v-community .msg-actions button{padding:5px 7px;color:#9A978E}#v-community .m:hover .msg-actions{display:inline-flex}}
.cm-confirm-ov{position:fixed;inset:0;background:rgba(20,20,20,.45);z-index:99999;display:flex;align-items:center;justify-content:center;padding:22px;animation:ccfade .14s ease}
@keyframes ccfade{from{opacity:0}to{opacity:1}}
.cm-confirm{background:#fff;border-radius:18px;max-width:340px;width:100%;padding:20px 20px 15px;box-shadow:0 24px 64px rgba(0,0,0,.32);animation:ccpop .18s cubic-bezier(.2,.9,.3,1.2);font-family:'Inter',system-ui,sans-serif}
@keyframes ccpop{from{opacity:0;transform:scale(.93)}to{opacity:1;transform:none}}
.cm-confirm .cc-t{font-family:'Space Grotesk',Inter,sans-serif;font-weight:700;font-size:17px;color:#191B1C;margin-bottom:6px}
.cm-confirm .cc-m{font-size:14px;color:#5A6169;line-height:1.5;margin-bottom:18px}
.cm-confirm .cc-a{display:flex;gap:8px;justify-content:flex-end}
.cm-confirm .cc-a button{border:none;border-radius:10px;padding:10px 18px;font-weight:700;font-size:14px;cursor:pointer;font-family:inherit;transition:.12s}
.cm-confirm .cc-cancel{background:#F1EEE8;color:#5A5346}
.cm-confirm .cc-cancel:hover{background:#E7ECEE}
.cm-confirm .cc-ok{background:#D42A21;color:#fff}
.cm-confirm .cc-ok:hover{background:#B80000}
#v-community .cs-srch{padding:8px 10px 4px}
#v-community .cs-srch input{width:100%;border:1px solid var(--line,#E6E5E0);border-radius:9px;padding:8px 11px;font-family:inherit;font-size:13px;background:#fff;outline:none;-webkit-appearance:none}
#v-community .cs-srch input:focus{border-color:var(--brand,#1B9BC0)}
#v-community .srch-sec{font-size:11px;font-weight:800;letter-spacing:.05em;text-transform:uppercase;color:#8B929A;padding:13px 16px 6px}
#v-community .srch-mem{display:flex;align-items:center;gap:10px;padding:6px 16px}
#v-community .srch-res{display:block;width:100%;text-align:left;border:none;background:none;cursor:pointer;padding:9px 16px;font-family:inherit}
#v-community .srch-res:hover{background:#F6F3EC}
#v-community .srch-res .sr-top{display:flex;align-items:center;gap:8px;font-size:12px;margin-bottom:2px}
#v-community .srch-res .sr-ch{font-weight:700;color:var(--brand-2,#14708B)}
#v-community .srch-res .sr-au{font-weight:600;color:#5A6169}
#v-community .srch-res .sr-top time{margin-left:auto;color:#8B929A}
#v-community .srch-res .sr-body{font-size:14px;color:#22201B;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}
/* ---------- Sidebar v3: Gruppen, Abos, Entdecken ---------- */
#v-community .cs-l{padding:6px 8px 22px}
#v-community .grp{margin-top:9px}
#v-community .grp>.gh{display:flex;align-items:center;gap:6px;width:100%;border:none;background:none;cursor:pointer;font-family:inherit;font-size:10.5px;font-weight:700;letter-spacing:.06em;text-transform:uppercase;color:var(--t3);padding:7px 9px 5px;text-align:left}
#v-community .grp>.gh:hover{color:var(--t2)}
#v-community .grp>.gh .gx{transition:transform .15s;display:inline-block;font-size:9px;color:#b6b4ac}
#v-community .grp.zu>.gh .gx{transform:rotate(-90deg)}
#v-community .grp.zu .glist{display:none}
#v-community .grp>.gh .gn{margin-left:auto;font-size:10px;font-weight:800;color:#fff;background:#757266;border-radius:8px;padding:0 5px;min-width:16px;height:15px;display:flex;align-items:center;justify-content:center}
#v-community .ch .ce{font-size:13.5px;width:17px;text-align:center;flex:none;line-height:1}
#v-community .cs-more{margin:14px 9px 0;width:calc(100% - 18px);border:1px dashed var(--line);background:#fff;border-radius:10px;padding:9px 8px;font-family:inherit;font-size:12.5px;font-weight:600;color:var(--brand-2);cursor:pointer}
#v-community .cs-more:hover{background:var(--brand-wash);border-color:var(--brand-line)}
#v-community .ch-hd .ch-join{margin-left:auto;border:1px solid var(--brand-line);background:var(--brand-wash);color:var(--brand-2);border-radius:9px;padding:6px 12px;font-family:inherit;font-size:12.5px;font-weight:700;cursor:pointer;flex:none}
#v-community .ch-hd .ch-join:hover{background:var(--brand);color:#fff;border-color:var(--brand)}
#v-community .ch-guide{margin:12px 18px 0;border:1px solid var(--brand-line);background:var(--brand-wash);border-radius:10px;padding:9px 13px;font-size:12.5px;color:var(--brand-ink);line-height:1.5}
#v-community .ch-guide b{font-weight:700}
/* Kanal-Browser */
.kb-ov{position:fixed;inset:0;background:rgba(20,20,20,.45);z-index:99998;display:flex;align-items:flex-start;justify-content:center;padding:38px 18px;overflow:auto;font-family:'Inter',system-ui,sans-serif;animation:ccfade .14s ease}
.kb-bx{background:#fff;border-radius:18px;max-width:740px;width:100%;box-shadow:0 24px 64px rgba(0,0,0,.3);overflow:hidden;animation:ccpop .18s cubic-bezier(.2,.9,.3,1.2)}
.kb-h{padding:20px 24px 15px;border-bottom:1px solid #EFEEEA;display:flex;align-items:flex-start;gap:12px}
.kb-h h3{font-family:'Space Grotesk',Inter,sans-serif;font-size:19px;margin:0 0 3px;color:#191B1C}
.kb-h p{font-size:13px;color:#5A6169;margin:0;line-height:1.5}
.kb-h .kb-x{margin-left:auto;border:none;background:#F1EEE8;border-radius:9px;width:30px;height:30px;font-size:15px;cursor:pointer;color:#5A6169;flex:none}
.kb-h .kb-x:hover{background:#E7ECEE}
.kb-b{padding:2px 24px 22px;max-height:62vh;overflow:auto}
.kb-g{font-size:11px;font-weight:800;letter-spacing:.05em;text-transform:uppercase;color:#8B929A;padding:18px 0 6px}
.kb-r{display:flex;align-items:center;gap:12px;padding:10px 0;border-bottom:1px solid #F4F3EF}
.kb-r .kb-e{width:38px;height:38px;border-radius:11px;background:#F1FAF8;display:flex;align-items:center;justify-content:center;font-size:18px;flex:none}
.kb-r .kb-t{flex:1;min-width:0}
.kb-r .kb-t b{font-size:14px;display:block;color:#191B1C}
.kb-r .kb-t small{font-size:12.5px;color:#5A6169;display:block;line-height:1.45}
.kb-r .kb-t .kb-meta{font-size:11.5px;color:#8B929A;margin-top:2px}
.kb-r .kb-btn{border:1px solid #CDEBE5;background:#F1FAF8;color:#14708B;border-radius:9px;padding:7px 14px;font-family:inherit;font-size:12.5px;font-weight:700;cursor:pointer;flex:none;min-width:86px}
.kb-r .kb-btn.on{background:#14708B;border-color:#14708B;color:#fff}
.kb-r .kb-btn:hover{filter:brightness(.96)}
/* Antworten */
#v-community .quote{border-left:3px solid var(--brand-line);background:var(--surface-2);border-radius:0 8px 8px 0;padding:5px 10px;margin:1px 0 5px;font-size:12.5px;color:var(--t2);cursor:pointer;max-width:440px}
#v-community .quote b{color:var(--brand-2);font-weight:700;margin-right:5px}
#v-community .quote .qt{display:block;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}
#v-community .replybar{display:flex;align-items:center;gap:9px;background:var(--brand-wash);border:1px solid var(--brand-line);border-radius:10px;padding:7px 11px;margin-bottom:7px;font-size:12.5px;color:var(--brand-ink);font-weight:600}
#v-community .replybar .rq{flex:1;min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;color:var(--t2);font-weight:400}
#v-community .replybar button{border:none;background:none;cursor:pointer;color:var(--t3);font-size:16px;line-height:1;padding:2px 4px}
#v-community .m.hl{background:#F6F9FA}

/* ============================================================
   Schulheft-Stil — dieselbe Marke wie deutschoderwas-club.de
   ============================================================ */
#v-community{
  --tuerkis:#39CCE3; --tuerkis-dunkel:#10627A; --auf-tuerkis:#063138;
  --gelb:#FFE100; --gruen:#77D42A; --rot-s:#D42A21; --tinte:#14181B;
  --creme:#F6F9FA; --karte:#FFFFFF; --hand:255px 12px 225px 15px/15px 225px 15px 255px;
  --brand:#39CCE3; --brand-2:#10627A; --brand-ink:#063138;
  --brand-wash:#E6F8FC; --brand-line:#1B9BC0;
  --red:#D42A21; --gold:#C79600;
  --ink:#14181B; --t1:#14181B; --t2:#5A6B72; --t3:#8A9AA1;
  --surface:#FFFFFF; --surface-2:#F6F9FA; --line:#E7ECEE; --line-2:#E7ECEE;
  --fh:'Space Grotesk','Inter',sans-serif;
}
#v-community .pagehead h1{font-family:'Space Grotesk','Inter',sans-serif!important;font-size:clamp(22px,3vw,30px)!important;font-weight:700!important;letter-spacing:-.01em;color:var(--tinte)}
#v-community .pagehead p{color:var(--t2)}

/* Rahmen und Spalten */
#v-community .comm{
  border:2.5px solid var(--tinte)!important;border-radius:18px!important;
  background:var(--karte)!important;box-shadow:4px 5px 0 rgba(32,33,31,.12)!important}
#v-community .cs{border-right:2.5px solid var(--tinte)!important;background:var(--creme)!important}
#v-community .ms{border-left:2.5px solid var(--tinte)!important;background:var(--creme)!important}
#v-community .cs-h{border-bottom:2.5px solid var(--line)!important}
#v-community .cs-h b{font-family:var(--fh)!important;font-weight:700!important}
#v-community .ch-hd{border-bottom:2.5px solid var(--tinte)!important;background:var(--karte)}
#v-community .ch-hd .ti{font-family:var(--fh)!important;font-weight:700!important;font-size:16px!important}

/* Kanalliste */
#v-community .cg,#v-community .gh{font-family:var(--fh)!important;font-weight:700!important;color:var(--tuerkis-dunkel)!important;letter-spacing:.02em!important}
#v-community .ch{border-radius:11px!important;font-weight:600}
#v-community .ch:hover{background:rgba(57,204,227,.14)!important;color:var(--tinte)!important}
#v-community .ch.on{background:rgba(57,204,227,.26)!important;border:2px solid var(--tuerkis)!important;color:var(--auf-tuerkis)!important}
#v-community .ch .cn{background:var(--rot-s)!important;border:2px solid var(--tinte);font-family:var(--fh)}
#v-community .cs-more{font-family:var(--fh)!important;font-weight:700!important;border:2.5px solid var(--tinte)!important;
  border-radius:var(--hand)!important;background:var(--karte)!important;color:var(--tinte)!important;
  box-shadow:2px 3px 0 rgba(32,33,31,.14)!important}

/* Ein Beitrag samt Antworten = eine Karte */
#v-community .feed{padding:12px 16px 10px}
#v-community .thr{
  background:var(--karte);border:2.5px solid var(--tinte);border-radius:16px;
  box-shadow:3px 4px 0 rgba(32,33,31,.10);padding:12px 14px 10px;margin:0 0 14px}
#v-community .thr .m{margin:0;padding:0;background:none!important}
#v-community .thr .m:hover{background:none!important}
#v-community .mh .w{font-family:var(--fh)!important;font-weight:700!important;font-size:14px!important;color:var(--tinte)!important}
#v-community .mt{color:#2e322c;font-size:14px}
#v-community .m.pinned{outline:none}
#v-community .m.hl{background:rgba(255,225,0,.30)!important;border-radius:10px}

/* Antworten haengen sichtbar unter dem Beitrag */
#v-community .thr-a{margin:2px 0 0 12px;padding-left:14px;border-left:2.5px solid var(--line)}
#v-community .thr-a:empty{display:none}
#v-community .m-a{padding:8px 0 2px!important}
#v-community .m-a .ava{width:28px;height:28px;font-size:11px}
#v-community .m-a .mh .w{font-size:13px!important}
#v-community .thr-mehr{display:block;width:100%;text-align:left;border:none;background:none;cursor:pointer;
  font-family:var(--fh);font-weight:700;font-size:12.5px;color:var(--tuerkis-dunkel);padding:7px 0 5px}
#v-community .thr-mehr:hover{text-decoration:underline}

/* Schnellzeile: reagieren und antworten */
#v-community .schnell{display:flex;align-items:center;gap:5px;margin-top:8px;padding-top:8px;border-top:2px dotted var(--line)}
#v-community .schnell .sr-e{border:2px solid transparent;background:none;cursor:pointer;font-size:16px;
  line-height:1;padding:3px 5px;border-radius:9px;transition:transform .12s}
#v-community .schnell .sr-e:hover{background:var(--brand-wash);border-color:var(--tuerkis);transform:scale(1.15)}
#v-community .schnell .sr-r{margin-left:auto;display:inline-flex;align-items:center;gap:5px;cursor:pointer;
  font-family:var(--fh);font-weight:700;font-size:12.5px;color:var(--auf-tuerkis);
  background:var(--brand-wash);border:2px solid var(--tuerkis);border-radius:var(--hand);padding:4px 12px}
#v-community .schnell .sr-r:hover{background:var(--tuerkis)}

/* Reaktionen */
#v-community .rc span{border:2px solid var(--tinte)!important;background:var(--karte)!important;
  border-radius:20px!important;font-family:var(--fh)!important;font-weight:700!important;color:var(--t2)!important}
#v-community .rc span.on{background:var(--gelb)!important;color:var(--tinte)!important;border-color:var(--tinte)!important}
#v-community .repop{border:2.5px solid var(--tinte)!important;border-radius:14px!important;
  background:var(--karte)!important;box-shadow:3px 4px 0 rgba(32,33,31,.16)!important}

/* Zitat und Antwortleiste */
#v-community .quote{border-left:3px solid var(--tuerkis)!important;background:var(--brand-wash)!important;border-radius:0 9px 9px 0}
#v-community .replybar{background:var(--brand-wash)!important;border:2.5px solid var(--tuerkis)!important;
  border-radius:11px!important;color:var(--auf-tuerkis)!important;font-family:var(--fh)}

/* Sprachnachricht */
#v-community .voice{border:2.5px solid var(--tinte)!important;border-radius:13px!important;background:#fff!important;
  box-shadow:2px 3px 0 rgba(32,33,31,.10)!important}
#v-community .voice .vp{background:var(--gelb)!important;color:var(--tinte)!important;border:2.5px solid var(--tinte)!important}
#v-community .wave i{background:#cfe7ec}
#v-community .wave i.p{background:var(--tuerkis-dunkel)}

/* Schreibfeld */
#v-community .cmp-in{border:2.5px solid var(--tinte)!important;border-radius:15px!important;background:#fff!important;
  box-shadow:2px 3px 0 rgba(32,33,31,.10)!important}
#v-community .cmp-in textarea{font-family:'Inter',system-ui,sans-serif!important;font-size:14px!important;color:var(--tinte)}
#v-community .cse{background:var(--tuerkis)!important;color:var(--auf-tuerkis)!important;border:2.5px solid var(--auf-tuerkis)!important;
  border-radius:50%!important;box-shadow:1px 2px 0 rgba(6,49,56,.30)!important}
#v-community .ct{color:var(--t2)!important;border-radius:10px!important}
#v-community .ct:hover{background:var(--brand-wash)!important;color:var(--auf-tuerkis)!important}
#v-community .ct.rec{background:var(--rot-s)!important;color:#fff!important}
#v-community .chint{font-size:11.5px!important;color:var(--t3)}

/* Mitgliederspalte */
#v-community .ms h4{font-family:var(--fh)!important;font-weight:700!important;color:var(--tuerkis-dunkel)!important}
#v-community .mn{font-family:var(--fh)!important;font-weight:700!important}
#v-community .ava{border:2px solid var(--tinte);font-family:var(--fh)!important}

/* Trennlinie zwischen Tagen */
#v-community .dsep{font-family:var(--fh)!important;font-weight:700!important;color:var(--tuerkis-dunkel)!important}
#v-community .dsep::before,#v-community .dsep::after{background:var(--line)!important}

#v-community .cm-empty{font-family:'Inter',sans-serif;font-size:14px;color:var(--t2);line-height:1.6;max-width:320px}
#v-community .cm-empty b{display:block;font-family:'Space Grotesk','Inter',sans-serif;font-size:16px;color:var(--t1);margin-bottom:4px}

/* ============================================================
   Ruhe im Layout — nichts springt, nichts wackelt
   ============================================================ */

/* Scrollleisten belegen ihren Platz dauerhaft. Sonst rutscht der ganze
   Inhalt seitwaerts, sobald eine Leiste auftaucht oder verschwindet. */
#v-community .feed,#v-community .cs-l,#v-community .ms{scrollbar-gutter:stable}
#v-community .feed{overflow-anchor:auto;overscroll-behavior:contain}
#v-community .cmp-box,#v-community .ch-hd,#v-community #cmPinned{overflow-anchor:none}

/* Die Reaktionszeile hat immer dieselbe Hoehe. Die erste Reaktion an einem
   Beitrag schiebt dadurch nichts mehr nach unten. */
#v-community .rc{min-height:26px;margin-top:4px;align-items:center}
#v-community .m-a .rc{min-height:22px}
#v-community .rc span{min-height:22px;line-height:1}

/* Der Ungelesen-Zaehler sitzt fest rechts im Kanal, statt den Namen
   zusammenzuschieben, sobald eine Zahl erscheint. */
#v-community .ch{position:relative;padding-right:38px!important}
#v-community .ch .cn{position:absolute;right:9px;top:50%;transform:translateY(-50%);margin-left:0!important}
#v-community .gh{position:relative;padding-right:34px}
#v-community .gh .gn{position:absolute;right:8px;top:50%;transform:translateY(-50%)}

/* Feste Hoehen dort, wo Inhalt nachgeladen wird */
#v-community .ava{flex:0 0 auto}
#v-community .voice{min-height:50px}
#v-community .wave{min-height:24px}
#v-community .schnell{min-height:34px}
#v-community .schnell .sr-r{flex:0 0 auto;white-space:nowrap}
#v-community .mh{min-height:19px}
#v-community .mh time{flex:0 0 auto;font-variant-numeric:tabular-nums}
#v-community .mh .w{white-space:nowrap;overflow:hidden;text-overflow:ellipsis;max-width:14em}

/* Beim Laden der Handschrift-Schriften soll die Zeile nicht umspringen */
#v-community .pagehead h1,#v-community .ch-hd .ti,#v-community .mh .w{font-synthesis:none}

/* Keine Bewegung, die Platz kostet — nur Farbe und Skalierung */
#v-community .ch,#v-community .thr,#v-community .rc span,#v-community .sr-e,#v-community .sr-r{
  transition:background-color .14s ease,border-color .14s ease,color .14s ease,transform .12s ease}
#v-community .thr{contain:layout style}

/* Wer es ruhiger mag oder Bewegung schlecht vertraegt, bekommt gar keine */
@media (prefers-reduced-motion:reduce){
  #v-community *,#v-community *::before,#v-community *::after{
    transition-duration:.01ms!important;animation-duration:.01ms!important;scroll-behavior:auto!important}
  #v-community .schnell .sr-e:hover{transform:none}
}

@media(max-width:900px){
  /* Auf dem Handy gibt es kein Schweben: die Werkzeugleiste steht dann
     immer da. Beim Hauptbeitrag ist das doppelt, weil die Schnellzeile
     Reagieren und Antworten schon anbietet. */
  #v-community .thr > .m > .msg-actions [data-addr],
  #v-community .thr > .m > .msg-actions [data-rep]{display:none}
  #v-community .msg-actions{margin-top:1px!important;opacity:.75}
  #v-community .chint{display:none!important}
}
@media(max-width:680px){
  #v-community .thr{padding:10px 11px 8px;border-radius:14px;margin-bottom:11px}
  #v-community .thr-a{margin-left:2px;padding-left:9px}
  #v-community .schnell{gap:3px;margin-top:6px;padding-top:6px}
  #v-community .schnell .sr-e{font-size:19px;padding:4px 5px}
  #v-community .schnell .sr-r{padding:4px 10px;font-size:12px}
  #v-community .cmp-in textarea{font-size:16px!important}
}

/* ============================================================
   Handy: der Verlauf liest sich wie in einem Messenger
   ============================================================ */
#v-community .mzeit{display:none}
#v-community .chat{position:relative}
#v-community .neupille{position:absolute;left:50%;transform:translateX(-50%);bottom:92px;z-index:9;
  display:none;align-items:center;gap:6px;background:var(--tuerkis);color:var(--auf-tuerkis);
  border:2.5px solid var(--auf-tuerkis);border-radius:999px;padding:6px 15px;cursor:pointer;
  font-family:var(--fh);font-weight:700;font-size:13px;box-shadow:2px 3px 0 rgba(6,49,56,.25)}
#v-community .neupille.an{display:inline-flex}

@media(max-width:680px){
  /* Keine Karte mehr um jeden Beitrag — nur noch Sprechblasen auf Papier. */
  #v-community .feed{padding:8px 11px 14px;background:
    radial-gradient(circle at 1px 1px, rgba(32,33,31,.055) 1px, transparent 0) 0 0/17px 17px, var(--creme)}
  #v-community .feed .thr{background:none;border:none;box-shadow:none;padding:0;margin:0 0 3px;border-radius:0}
  #v-community .feed .thr-a{margin:2px 0 7px 15px;padding-left:11px;border-left:2px solid var(--line)}

  #v-community .feed .m{display:flex;flex-wrap:nowrap;gap:7px;align-items:flex-start;padding:2px 0;margin:0;
    background:none!important;-webkit-touch-callout:none;-webkit-user-select:none;user-select:none}
  #v-community .feed .m .ava{width:27px;height:27px;font-size:10.5px;border-width:2px;margin-top:3px}
  #v-community .feed .mb{flex:0 1 auto;max-width:83%;min-width:0;
    background:var(--karte);border:2px solid var(--tinte);border-radius:15px 15px 15px 5px;
    padding:6px 10px 4px;box-shadow:2px 2px 0 rgba(32,33,31,.10)}
  #v-community .feed .mt{font-size:14.5px;line-height:1.45;margin-top:1px}

  /* Eigene Beiträge stehen rechts und sind türkis getönt. */
  #v-community .feed .m.me{flex-direction:row-reverse}
  #v-community .feed .m.me .ava{display:none}
  #v-community .feed .m.me .mb{background:var(--brand-wash);border-color:var(--tuerkis-dunkel);
    border-radius:15px 15px 5px 15px;box-shadow:-2px 2px 0 rgba(25,144,164,.18)}
  #v-community .feed .m.me .mh{display:none}

  /* Folgt kurz darauf noch ein Beitrag derselben Person, fällt der Kopf weg. */
  #v-community .feed .m.folge{padding-top:0;margin-top:-1px}
  #v-community .feed .m.folge .mh{display:none}
  #v-community .feed .m.folge .ava{visibility:hidden;height:0;margin:0}

  #v-community .feed .mh{gap:6px;margin-bottom:1px;min-height:0}
  #v-community .feed .mh .w{font-size:13px!important;max-width:9.5em}
  #v-community .feed .mh time{display:none}
  #v-community .feed .mzeit{display:block;text-align:right;font-size:10.5px;color:var(--t3);
    margin-top:2px;line-height:1;font-variant-numeric:tabular-nums}
  #v-community .feed .m.me .mzeit{color:#2f7d8c}
  #v-community .feed .m.m-sendet .mzeit::after{content:" · sendet"}
  #v-community .feed .m.m-fehler .mzeit{color:var(--rot-s);font-weight:700}
  #v-community .feed .m.gehalten .mb{transform:scale(.97);filter:brightness(.96)}

  /* Bild, Ton und Korrektur passen sich der Blase an. */
  #v-community .feed .mimg{width:100%;max-width:216px;margin-top:4px}
  #v-community .feed .voice{max-width:100%;margin-top:3px;padding:6px 9px;border-width:2px}
  #v-community .feed .corr,#v-community .feed .corrform{max-width:100%}
  #v-community .feed .quote{margin-bottom:4px}

  #v-community .feed .rc{min-height:0;margin-top:5px;gap:4px}
  #v-community .feed .rc span{font-size:11.5px;padding:0 7px;min-height:20px;border-width:2px}
  #v-community .feed .m.me .rc span{background:#fff!important}
  #v-community .feed .m.me .rc{justify-content:flex-end}

  /* Die Werkzeugleiste weicht dem Halte-Menü. */
  #v-community .feed .msg-actions{display:none!important}
  #v-community .feed .schnell{margin:1px 0 8px 34px;padding:0;border-top:none;min-height:0;gap:2px}
  #v-community .feed .schnell .sr-e{font-size:17px;padding:2px 4px}
  #v-community .feed .schnell .sr-e:nth-of-type(n+4){display:none}
  #v-community .feed .schnell .sr-r{padding:2px 10px;font-size:11.5px;border-width:2px;
    background:none;border-color:var(--line);color:var(--t2)}
  #v-community .feed .m.me + .schnell{margin-left:0;justify-content:flex-end}
  #v-community .feed .thr-mehr{padding:4px 0 6px 34px;font-size:12px}
  #v-community .feed .dsep{margin:13px 0 8px;font-size:12px}
  #v-community .feed .dsep::before,#v-community .feed .dsep::after{height:2px}

  /* Das Schreibfeld sitzt fest am unteren Rand. */
  #v-community .cmp{padding:8px 10px calc(10px + env(safe-area-inset-bottom));border-top:2.5px solid var(--tinte);background:var(--karte)}
  #v-community .comm{min-height:0}
}

/* Das Halte-Menü hängt an <body>, deshalb bringt es seine Farben mit. */
.cm-sheet-ov{--tinte:#14181B;--karte:#FFFFFF;--line:#E7ECEE;--brand-wash:#E6F8FC;
  --rot-s:#D42A21;--t2:#5A6B72;--t3:#8A9AA1;--fh:'Space Grotesk','Inter',sans-serif;
  position:fixed;inset:0;background:rgba(20,20,20,.42);z-index:99998;
  display:flex;align-items:flex-end;justify-content:center;animation:ccfade .14s ease}
.cm-sheet{width:100%;max-width:520px;background:var(--karte);border:2.5px solid var(--tinte);
  border-bottom:none;border-radius:20px 20px 0 0;padding:8px 12px calc(14px + env(safe-area-inset-bottom));
  animation:sheetauf .18s ease;box-shadow:0 -6px 24px rgba(20,20,20,.18)}
@keyframes sheetauf{from{transform:translateY(20px);opacity:.5}to{transform:none;opacity:1}}
.cm-sheet .griff{width:44px;height:4px;border-radius:3px;background:var(--line);margin:2px auto 10px}
.cm-sheet .cs-vor{font-family:"Inter",system-ui,sans-serif;font-size:12.5px;color:var(--t2);
  padding:0 8px 9px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}
.cm-sheet .cs-vor b{color:var(--tinte)}
.cm-sheet .cs-reax{display:flex;justify-content:space-between;gap:2px;padding:0 2px 10px;
  border-bottom:2px dotted var(--line);margin-bottom:6px}
.cm-sheet .cs-reax button{border:none;background:none;font-size:26px;line-height:1;padding:4px;
  border-radius:12px;cursor:pointer}
.cm-sheet .cs-reax button:active{background:var(--brand-wash);transform:scale(1.15)}
.cm-sheet .cs-akt button{display:flex;align-items:center;gap:12px;width:100%;border:none;background:none;
  font-family:var(--fh);font-weight:700;font-size:15px;color:var(--tinte);padding:11px 8px;
  border-radius:11px;cursor:pointer;text-align:left}
.cm-sheet .cs-akt button:active{background:var(--brand-wash)}
.cm-sheet .cs-akt button.del{color:var(--rot-s)}
.cm-sheet .cs-akt .ico{width:20px;height:20px;flex:none;stroke:currentColor;stroke-width:1.7;fill:none;
  stroke-linecap:round;stroke-linejoin:round}

/* ============================================================
   MESSENGER-SCHLIFF
   Darueber lag bis hierher eine Aufkleber-Optik: ueberall 2,5 px
   schwarze Rahmen und harte versetzte Schatten. Das sieht nach
   Bastelbogen aus, nicht nach einem Messenger, den man den ganzen
   Tag offen hat. Dieser Block setzt die Flaechen zurueck auf
   weiches Papier, echte Sprechblasen und eine ruhige Kanalliste
   — in den Markenfarben, auf allen Bildschirmgroessen gleich.
   ============================================================ */
#v-community .comm{
  border:1px solid #E7E3DA !important;border-radius:16px !important;
  background:#fff !important;box-shadow:0 1px 2px rgba(20,24,27,.04),0 14px 34px rgba(20,24,27,.07) !important}
#v-community .cs{border-right:1px solid #EFEBE2 !important;background:#FCFAF5 !important}
#v-community .ms{border-left:1px solid #EFEBE2 !important;background:#FCFAF5 !important}
#v-community .cs-h{border-bottom:1px solid #EFEBE2 !important}
#v-community .ch-hd{border-bottom:1px solid #EFEBE2 !important;background:#fff !important}

/* Kanalliste: ruhige Zeilen, der aktive Kanal nur sanft getoent. */
#v-community .ch{border:none !important;border-radius:10px !important}
#v-community .ch:hover{background:#F2EFE7 !important}
#v-community .ch.on{background:#DFF4F9 !important;border:none !important;color:#063138 !important;font-weight:700}
#v-community .ch .cn{border:none !important;box-shadow:none !important}
#v-community .ch.newsch{border:1px solid #F0DFA0 !important;box-shadow:none !important}
#v-community .cs-more{border:1px solid #DCD6CA !important;box-shadow:none !important;border-radius:11px !important}

/* Der Verlauf liegt auf hellem Papier, ohne Punktraster. */
#v-community .feed{background:#FBF8F2 !important;padding:10px 16px 14px !important}
#v-community .thr{background:none !important;border:none !important;box-shadow:none !important;
  padding:0 !important;margin:0 0 4px !important;border-radius:0 !important}
#v-community .thr-a{margin:2px 0 8px 16px !important;padding-left:12px !important;
  border-left:2px solid #E7E3DA !important}

/* Echte Sprechblasen — auch am grossen Bildschirm, nicht nur am Handy. */
#v-community .feed .m{display:flex !important;flex-wrap:nowrap;gap:8px;align-items:flex-start;
  padding:2px 0 !important;margin:0 !important;background:none !important}
#v-community .feed .m:hover{background:none !important}
#v-community .feed .m .ava{width:30px;height:30px;font-size:11.5px;border:none !important;
  margin-top:3px;box-shadow:none !important}
#v-community .feed .mb{flex:0 1 auto;max-width:min(78%,560px);min-width:0;
  background:#fff !important;border:1px solid #ECE8E0 !important;border-radius:16px 16px 16px 5px !important;
  padding:7px 12px 5px !important;box-shadow:0 1px 1.5px rgba(20,24,27,.05) !important}
#v-community .feed .mt{font-size:14.5px;line-height:1.5}

/* Eigene Beitraege rechts, in Markentuerkis. */
#v-community .feed .m.me{flex-direction:row-reverse}
#v-community .feed .m.me .ava{display:none}
#v-community .feed .m.me .mb{background:#DFF4F9 !important;border-color:#C7E9F1 !important;
  border-radius:16px 16px 5px 16px !important;box-shadow:0 1px 1.5px rgba(16,98,122,.08) !important}
#v-community .feed .m.me .mh{display:none}
#v-community .feed .m.folge{padding-top:0 !important;margin-top:-1px !important}
#v-community .feed .m.folge .mh{display:none}
#v-community .feed .m.folge .ava{visibility:hidden;height:0;margin:0}

#v-community .feed .mh{gap:7px;margin-bottom:1px}
#v-community .feed .mh .w{font-size:13px !important}
#v-community .feed .mh time{display:none}
#v-community .feed .mzeit{display:block;text-align:right;font-size:10.5px;color:#9AA3A8;
  margin-top:2px;line-height:1;font-variant-numeric:tabular-nums}
#v-community .feed .m.me .mzeit{color:#3E8294}

/* Zustand beim Senden — man soll sehen, ob etwas raus ist. */
#v-community .feed .m.m-sendet .mb{opacity:.72}
#v-community .feed .m.m-sendet .mzeit::after{content:" · sendet"}
#v-community .feed .m.m-fehler .mb{border-color:#E8B4B0 !important;background:#FFF6F5 !important}
#v-community .feed .m.m-fehler .mzeit{color:#D42A21;font-weight:700}
#v-community .feed .m.m-fehler .mzeit::after{content:" · nicht gesendet"}

/* Tagestrenner als ruhige Pille statt Linie mit Schrift. */
#v-community .dsep{margin:14px 0 8px !important}
#v-community .dsep::before,#v-community .dsep::after{background:#EDE8DE !important;height:1px !important}

/* Reaktionen leichter. */
#v-community .rc span{border:1px solid #E7E3DA !important;box-shadow:none !important;background:#fff !important}
#v-community .rc span.on{background:#DFF4F9 !important;border-color:#C7E9F1 !important;color:#063138 !important}

/* Schreibfeld: ein Feld, ein Rahmen. Vorher lagen zwei ineinander. */
#v-community .cmp{background:#fff !important;border-top:1px solid #EFEBE2 !important;padding:10px 16px 14px !important}
#v-community .cmp-box{border:1px solid #DDD8CE !important;border-radius:22px !important;
  box-shadow:none !important;background:#fff !important;padding:3px 5px !important}
#v-community .cmp-box:focus-within{border-color:#39CCE3 !important;box-shadow:0 0 0 3px rgba(57,204,227,.18) !important}
#v-community .cse{border-radius:50% !important;background:#10627A !important;color:#fff !important;
  border:none !important;box-shadow:none !important;width:36px;height:36px}
#v-community .cse:hover{background:#0B4E60 !important}
#v-community .ct{border:none !important;box-shadow:none !important}

/* Die Pille "neue Nachrichten" gehoert zum selben Stil. */
#v-community .neupille{border:none !important;background:#10627A !important;color:#fff !important;
  box-shadow:0 6px 18px rgba(16,98,122,.3) !important}

/* Angepinntes oben: ein ruhiger Streifen, keine zweite Karte. */
#v-community .pinbar{background:#FFFCF2 !important;border-bottom:1px solid #F0E6CE !important}

/* Der Mail-Haken fuer Julia. Er sitzt unter dem Schreibfeld, ist aber
   nur fuer Team sichtbar und faellt nach jedem Senden von selbst
   wieder zurueck. */
#v-community .mailhaken{display:flex;align-items:center;gap:8px;margin:7px 2px 0;padding:7px 11px;
  border:1px solid #F0E6CE;background:#FFFCF2;border-radius:11px;cursor:pointer;
  font-size:12.5px;color:#6B6154;line-height:1.35}
#v-community .mailhaken input{width:16px;height:16px;flex:none;accent-color:#10627A;cursor:pointer}
#v-community .mailhaken b{color:#1A1A1A}
#v-community .mailhaken[data-stand]{border-color:#C7E9F1;background:#F2FBFD}
#v-community .mailhaken[data-stand] span{visibility:hidden}
#v-community .mailhaken[data-stand]::after{position:absolute;margin-left:26px;font-weight:600;color:#10627A}
#v-community .mailhaken{position:relative}
#v-community .mailhaken[data-stand="sendet"]::after{content:"Mail geht raus …"}
#v-community .mailhaken[data-stand="fertig"]::after{content:"Verschickt an " attr(data-zahl)}
#v-community .mailhaken[data-stand="fehler"]::after{content:"Mail konnte nicht verschickt werden";color:#D42A21}

/* Reaktionsleiste und "Antworten" standen unter JEDER Nachricht fest
   eingeblendet. Das ist der zweite Grund, warum der Verlauf nicht nach
   Messenger aussieht: ein Drittel der Flaeche sind Knoepfe. Am grossen
   Bildschirm erscheinen sie jetzt erst, wenn die Maus ueber der
   Nachricht liegt; am Handy bleibt das Halte-Menue der Weg dorthin. */
@media(hover:hover) and (min-width:681px){
  #v-community .feed .schnell{opacity:0;max-height:0;overflow:hidden;margin:0 !important;
    padding:0 !important;border-top:none !important;min-height:0 !important;
    transition:opacity .12s ease,max-height .12s ease}
  #v-community .feed .thr:hover .schnell,
  #v-community .feed .schnell:focus-within{opacity:1;max-height:46px;margin:2px 0 6px 38px !important}
}
@media(max-width:680px){
  #v-community .feed .schnell{opacity:0;max-height:0;overflow:hidden;margin:0 !important;padding:0 !important}
}

@media(max-width:680px){
  #v-community .feed{padding:8px 11px 14px !important;background:#FBF8F2 !important}
  #v-community .feed .mb{max-width:84%;padding:7px 11px 5px !important}
  #v-community .cmp{padding:8px 10px calc(10px + env(safe-area-inset-bottom)) !important;
    border-top:1px solid #EFEBE2 !important}
}

/* ============================================================
   MESSENGER — Themenliste und feste Handy-Flaeche
   Die Liste zeigt Themen so, wie WhatsApp Gespraeche zeigt:
   Zeichen, Name, letzte Nachricht, Zeit, Ungelesen-Zahl.
   ============================================================ */
#v-community .cs-l{padding:0 !important;overflow-x:hidden}
#v-community .ch{display:flex !important;align-items:center;gap:12px;width:100%;
  padding:9px 14px !important;margin:0 !important;border:none !important;
  border-bottom:1px solid #F1EDE4 !important;border-radius:0 !important;
  background:#fff !important;box-shadow:none !important;cursor:pointer;text-align:left;
  font-family:inherit;min-height:64px;transform:none !important}
#v-community .ch:hover{background:#F7F4EC !important}
#v-community .ch.on{background:#E6F8FC !important}
#v-community .ch .ce{width:46px !important;height:46px;flex:none;border-radius:50% !important;
  background:#F1FAFC;border:1px solid #DCEFF4;display:flex;align-items:center;justify-content:center;
  font-size:22px !important;line-height:1}
#v-community .ch .chx{flex:1;min-width:0;display:flex;flex-direction:column;gap:3px}
#v-community .ch .chtop{display:flex;align-items:baseline;gap:8px}
#v-community .ch .nm2{flex:1;min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;
  font-family:var(--fh);font-weight:600;font-size:15.5px;color:#14181B}
#v-community .ch .cht{flex:none;font-size:11.5px;color:#8A9AA1;font-variant-numeric:tabular-nums}
#v-community .ch .chbot{display:flex;align-items:center;gap:8px}
#v-community .ch .chp{flex:1;min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;
  font-size:13.5px;color:#6B7C84;font-weight:400}
#v-community .ch .chp i{font-style:normal;color:#9AA7AC}
#v-community .ch .cn{flex:none;margin:0 !important;background:#10627A !important;color:#fff !important;
  font-size:11px;font-weight:700;min-width:20px;height:20px;padding:0 6px;border-radius:10px;
  display:flex;align-items:center;justify-content:center}
#v-community .ch.neu .nm2{font-weight:700}
#v-community .ch.neu .chp{color:#14181B}
#v-community .ch .pd{margin-right:2px}
#v-community .cg{padding:13px 14px 6px;font-size:11px;font-weight:700;letter-spacing:.05em;
  text-transform:uppercase;color:#8A9AA1;background:#FBF8F2}
#v-community .cs-h{background:#fff !important}
#v-community .cs-srch{padding:8px 12px !important;background:#fff}
#v-community .cs-srch input{width:100%;border:1px solid #E7E3DA;background:#F7F4EC;border-radius:999px;
  padding:9px 14px;font-family:inherit;font-size:14px;color:#14181B;outline:none}
#v-community .cs-srch input:focus{border-color:#39CCE3;background:#fff}

@media(max-width:900px){
  /* Der Chat ist am Handy eine feste Flaeche zwischen Kopfzeile und
     Tableiste. Nichts scrollt mit, das Schreibfeld steht immer sichtbar
     ueber der Tableiste. Die Hoehen misst passeHoehe() aus den echten
     Leisten — frueher war die Rechnung geraten und das Schreibfeld lag
     hinter der Tableiste. */
  body.cm-voll{overflow:hidden !important}
  body.cm-voll .content-inner{padding:0 !important}
  #v-community.active.cm-fest{position:fixed !important;left:0 !important;right:0 !important;
    top:var(--cm-oben,56px) !important;bottom:var(--cm-unten,64px) !important;
    width:auto !important;max-width:none !important;
    z-index:58;overflow:hidden !important;background:#FBF8F2;animation:none !important}
  #v-community.active.cm-fest.cm-tast{bottom:auto !important;height:var(--cm-hoehe,62vh) !important}
  #v-community .pagehead{display:none !important}
  #v-community .comm{display:block !important;height:100% !important;width:100% !important;
    max-width:100% !important;min-height:0 !important;border:none !important;border-radius:0 !important;
    box-shadow:none !important;overflow:hidden !important}
  #v-community .ms{display:none !important}

  /* Erst die Themen, dann das Gespraech. */
  #v-community .cs{display:flex !important;flex-direction:column !important;
    height:100% !important;width:100% !important;max-width:100% !important;min-width:0 !important;
    border:none !important;background:#fff !important;overflow:hidden !important}
  #v-community .comm.chatauf .cs{display:none !important}
  #v-community .cs-h{flex:0 0 auto;padding:10px 14px 8px !important;border-bottom:1px solid #F1EDE4 !important}
  #v-community .cs-l{flex:1 1 auto !important;flex-direction:column !important;flex-wrap:nowrap !important;
    overflow-y:auto !important;overflow-x:hidden !important;min-height:0 !important;
    padding:0 !important;-webkit-overflow-scrolling:touch}
  #v-community .ch{width:100% !important;white-space:normal !important;flex:0 0 auto !important}
  #v-community .cg{display:block !important}
  #v-community .cs-more{display:none !important}

  #v-community .chat{display:none !important}
  #v-community .comm.chatauf .chat{display:flex !important;flex-direction:column !important;
    height:100% !important;min-height:0 !important;width:100% !important;max-width:100% !important}
  #v-community .ch-hd{flex:0 0 auto !important;height:52px !important;padding:0 10px 0 2px !important;
    gap:4px !important;background:#fff !important}
  #v-community .ch-hd .bk{display:inline-flex !important;align-items:center;justify-content:center;
    width:36px;height:36px;flex:none}
  #v-community .ch-hd .de{display:none !important}
  #v-community .ch-hd .ti{min-width:0;flex:1;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;
    font-size:16px !important}
  #v-community .ch-guide{margin:8px 12px 0 !important;font-size:12px !important}
  #v-community .pinbar{flex:0 0 auto !important}
  #v-community .pinbar .ph{padding:7px 12px 2px !important}
  #v-community .pinrow{padding:0 12px 9px !important;gap:8px}
  #v-community .pinrow .punp{flex:none}
  #v-community .feed{flex:1 1 auto !important;min-height:0 !important;
    overflow-y:auto !important;overflow-x:hidden !important;
    padding:10px 10px 12px !important;-webkit-overflow-scrolling:touch}
  #v-community .feed .mb{max-width:86% !important}
  #v-community .cmp{flex:0 0 auto !important;background:#fff !important;
    padding:7px 9px 9px !important;border-top:1px solid #EFEBE2 !important}
  #v-community .cmp-box{border-radius:22px !important}
  #v-community .ct{font-size:16px !important}
}

/* ---- Feinschliff nach dem ersten Blick am Handy ----
   Das Schreibfeld hatte zwei Rahmen ineinander, die Pinnleiste nahm ein
   Viertel des Bildschirms, und Zeit und Ungelesen-Zahl lagen uebereinander. */
#v-community .cmp-in{border:none !important;border-radius:0 !important;
  box-shadow:none !important;background:none !important;padding:0 !important}
#v-community .cmp-box{padding:3px 4px 3px 8px !important}
#v-community .chint{display:none !important}

#v-community .ch{min-height:70px !important}
#v-community .ch .chx{gap:5px}
#v-community .ch .cn{min-width:19px;height:19px;font-size:10.5px}

#v-community .pinbar .ph{padding:7px 14px 1px !important;font-size:10px !important}
#v-community .pinrow{display:flex;align-items:flex-start;gap:8px;padding:0 14px 8px}
#v-community .pinrow .pc{flex:1;min-width:0}
#v-community .pinrow .pa{font-size:11.5px;font-weight:700;color:#9A6B00;margin-bottom:1px}
#v-community .pinrow .pt{font-size:12.5px;line-height:1.45;color:#5A4A2A;
  display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden}
#v-community .pinrow .punp{flex:none;border:none;background:none;cursor:pointer;
  font-size:11.5px;font-weight:700;color:#9A6B00;padding:2px 0 0}

@media(max-width:900px){
  #v-community .feed .mt{font-size:14.5px !important;line-height:1.45 !important}
  #v-community .feed .mh .w{font-size:12.5px !important}
  #v-community .feed .ava{width:28px !important;height:28px !important;font-size:11px !important}
  #v-community .cs-h b{font-size:15px}
  #v-community .mailhaken{margin:6px 2px 0 !important;padding:6px 9px !important;font-size:11.5px !important}
}

/* Zeit und Ungelesen-Zahl stehen rechts untereinander — wie im Messenger.
   Vorher lagen sie in den Textzeilen und ueberdeckten sich. */
#v-community .ch .chx{display:flex;flex-direction:column;gap:3px;flex:1;min-width:0}
#v-community .ch .chr{display:flex;flex-direction:column;align-items:flex-end;gap:6px;
  flex:none;min-width:42px;padding-top:2px}
#v-community .ch .chtop,#v-community .ch .chbot{display:contents}
#v-community .cs-l{padding-bottom:14px !important}

/* Die Ungelesen-Zahl stand absolut positioniert und legte sich auf die
   Uhrzeit. Sie gehoert in den Fluss der rechten Spalte. */
#v-community .ch .cn{position:static !important;top:auto !important;right:auto !important;
  left:auto !important;bottom:auto !important;transform:none !important}
#v-community .ch .chr{min-height:40px;justify-content:flex-start}

/* Am grossen Bildschirm braucht die Themenliste mehr Platz, sonst stehen
   dort nur abgeschnittene Namen. */
@media(min-width:901px){
  #v-community .comm{grid-template-columns:302px 1fr 244px !important}
  #v-community .ch{min-height:62px !important;padding:8px 12px !important}
  #v-community .ch .ce{width:40px !important;height:40px;font-size:19px !important}
  #v-community .ch .nm2{font-size:14.5px}
  #v-community .ch .chp{font-size:12.5px}
  #v-community .ch .chr{min-width:40px;min-height:34px}
}
@media(min-width:901px) and (max-width:1180px){
  #v-community .comm{grid-template-columns:284px 1fr !important}
}

`; document.head.appendChild(st);
  }

  var QUICK=['👍','❤️','😂','😮','🙏','🔥','🎉','👏'];
  var EMOJIS='😀 😃 😄 😁 😆 😅 😂 🤣 🙂 😉 😊 😍 🥰 😘 😜 🤗 🤔 😎 🥳 😴 🙄 😮 🥺 😢 😭 😡 👍 👎 👏 🙏 💪 🙌 👋 🤝 🔥 🎉 ⭐ 💯 ❤️ 🧡 💛 💚 💙 ✅ ❌'.split(' ');

  // ---------- Kanäle, Abos, Ungelesen (Server) ----------
  function chanBy(slug){ for(var i=0;i<channels.length;i++){ if(channels[i].slug===slug) return channels[i]; } return null; }

  async function ladeKanaele(){
    var list=[];
    try{ var r=await sbc.rpc('community_kanaele'); list=(r&&r.data)||[]; }catch(e){ list=[]; }
    if(!list.length){
      try{
        var ch=await sbc.from('community_channels').select('slug,name,emoji,description,team_only,challenge_only,grp,sort_order').eq('is_active',true).order('sort_order');
        list=(ch.data||[]).map(function(c){ c.gefolgt=true; c.ungelesen=0; return c; });
      }catch(e2){ list=[]; }
    }
    channels=list.filter(function(c){ return (!c.challenge_only)||isChallenger||isTeam; });
  }

  async function markSeen(slug){
    var c=chanBy(slug); if(c) c.ungelesen=0;
    updateBadge(slug); updateGroupCounts();
    try{ await sbc.rpc('community_gelesen',{p_channel:slug}); }catch(e){}
    try{ if(window.ChatKnopf) ChatKnopf.zaehlen(); }catch(e){}
  }

  async function folgen(slug,ja){
    var c=chanBy(slug); if(!c) return;
    c.gefolgt=!!ja;
    try{ await sbc.rpc('community_folgen',{p_channel:slug,p_gefolgt:!!ja,p_stumm:null}); }catch(e){}
    paintSidebar();
    if(!ja && cur===slug){ var erste=channels.filter(function(x){return x.gefolgt;})[0]; if(erste) openChannel(erste.slug); }
  }

  // Klappzustand der Gruppen
  function zuKey(){ return 'cm_grp_zu_'+(ME&&ME.id?ME.id:'x'); }
  function ladeZu(){ try{ return JSON.parse(localStorage.getItem(zuKey())||'{}')||{}; }catch(e){ return {}; } }
  function speichereZu(o){ try{ localStorage.setItem(zuKey(),JSON.stringify(o)); }catch(e){} }
  var grpZu = {};

  // ---------- Render Shell ----------
  async function renderCommunity(){
    injectStyle();
    var r=root(); if(!r) return;
    sbc=getSb(); ME=getUser(); PROF=getProfile();
    myName=(PROF&&PROF.name)||'Mitglied';
    r.innerHTML='<div class="pagehead"><h1>Community-Chat</h1></div><div class="cm-empty">Lädt…</div>';
    if(!sbc||!ME){ r.innerHTML=gateHtml(); return; }
    var access=false;
    try{ var a=await sbc.rpc('has_full_access'); access=!!a.data; }catch(e){ access=active(); }
    if(!access){ stopAll(); r.innerHTML=gateHtml(); return; }
    try{ var pr=await sbc.from('profiles').select('is_admin,is_teacher,is_challenger').eq('id',ME.id).single(); isTeam=!!(pr.data&&(pr.data.is_admin||pr.data.is_teacher)); isAdmin=!!(pr.data&&pr.data.is_admin); isChallenger=!!(pr.data&&pr.data.is_challenger); }catch(e){}
    try{ await sbc.rpc('community_start'); }catch(e){}
    await ladeKanaele();
    try{ var rs=await sbc.rpc('community_roster'); roster=(rs&&rs.data)||[]; }catch(e){ roster=[]; }
    /* Die Zahlen rechts — Mitglieder, Beitraege, Themen — standen als
       drei Punkte da, seit es sie gibt. Die Funktion holte sie richtig
       aus der Datenbank, nur rief sie niemand auf. Jetzt schon. */
    try{ await ladeAktivitaet(); }catch(e){}
    try{ var dt=await sbc.rpc('dm_threads'); dmThreads=(dt&&dt.data)||[]; }catch(e){ dmThreads=[]; }
    if(!channels.length){ r.innerHTML='<div class="pagehead"><h1>Community-Chat</h1></div><div class="cm-empty">Noch keine Kanäle.</div>'; return; }
    grpZu=ladeZu();
    var direkt=false;
    if(zielSlug&&chanBy(zielSlug)){ var zc=chanBy(zielSlug); if(!zc.gefolgt){ zc.gefolgt=true; try{ sbc.rpc('community_folgen',{p_channel:zielSlug,p_gefolgt:true,p_stumm:null}); }catch(e){} } cur=zielSlug; zielSlug=null; direkt=true; }
    var meine=channels.filter(function(c){ return c.gefolgt; });
    if(!meine.length) meine=channels;
    var akt=chanBy(cur);
    if(!akt||!akt.gefolgt) cur=(meine[0]||channels[0]).slug;
    r.innerHTML=shellHtml();
    bindSidebar();
    subscribeBadges();
    if(!window.__cmPresence){ window.__cmPresence=true; window.addEventListener('club-presence',function(){ try{paintPresence();}catch(e){} }); }
    hoeheUeberwachen();
    /* Am Handy beginnt man in der Themenliste. Ein Thema oeffnet sich
       erst beim Antippen — oder sofort, wenn ein Link darauf zeigt. */
    if(istHandy() && !direkt){ passeHoehe(); }
    else { await openChannel(cur); }
  }

  function gateHtml(){
    return '<div class="pagehead"><h1>Community-Chat</h1></div>'+
      '<div class="gate"><div style="font-size:34px">🔒</div><h3 style="margin:8px 0 6px">Nur für aktive Mitglieder</h3>'+
      '<p style="color:#5A6169;max-width:400px;margin:0 auto 14px">Die Community ist exklusiv für Mitglieder mit aktivem Guthaben oder Pass.</p>'+
      '<a href="index.html#preise" style="display:inline-block;background:#B3E6F4;color:#fff;font-weight:600;padding:9px 15px;border-radius:9px">Pakete ansehen →</a></div>';
  }

  var GRP={
    start:    {t:'Start hier',      s:'Ankommen und Überblick'},
    stufe:    {t:'Deine Stufe',     s:'Schreib mit Leuten auf deinem Niveau'},
    lernen:   {t:'Lernen & Üben',   s:'Grammatik, Wortschatz, Aussprache, Schreiben'},
    ziel:     {t:'Dein Ziel',       s:'Beruf, Pflege, Studium, Prüfung, Alltag'},
    austausch:{t:'Austausch',       s:'Reden, feiern, empfehlen'},
    challenge:{t:'Challenge',       s:'Nur für Challenge-Teilnehmer'}
  };
  var GRP_ORDER=['start','stufe','lernen','ziel','austausch','challenge'];

  /* Kurze Zeitangabe wie im Messenger: heute die Uhrzeit, gestern
     "Gestern", in dieser Woche der Wochentag, sonst das Datum. */
  function kurzZeit(iso){
    if(!iso) return '';
    var d=new Date(iso); if(isNaN(d)) return '';
    var n=new Date();
    if(d.toDateString()===n.toDateString()) return d.toLocaleTimeString('de-DE',{hour:'2-digit',minute:'2-digit'});
    var g=new Date(n.getTime()-86400000);
    if(d.toDateString()===g.toDateString()) return 'Gestern';
    if((n-d)<6*86400000) return ['So','Mo','Di','Mi','Do','Fr','Sa'][d.getDay()];
    return d.toLocaleDateString('de-DE',{day:'2-digit',month:'2-digit'});
  }
  function chanRow(c){
    var n=c.ungelesen||0;
    var vor = c.letzter_text
      ? ((c.letzter_name?E(vorname(c.letzter_name))+': ':'')+E(String(c.letzter_text).replace(/\s+/g,' ').slice(0,90)))
      : '<i>'+E(c.description||'Noch keine Nachricht')+'</i>';
    return '<button class="ch'+(mode==='channel'&&c.slug===cur?' on':'')+(n>0?' neu':'')+'" data-ch="'+E(c.slug)+'">'+
      '<span class="ce">'+E(c.emoji||'#')+'</span>'+
      '<span class="chx"><span class="nm2">'+E(c.name)+'</span><span class="chp">'+vor+'</span></span>'+
      '<span class="chr"><span class="cht">'+E(kurzZeit(c.letzte))+'</span>'+(n>0?'<span class="cn">'+(n>99?'99+':n)+'</span>':'')+'</span>'+
      '</button>';
  }
  function dmRow(t){
    return '<button class="ch'+(mode==='dm'&&dmActive&&dmActive.id===t.partner_id?' on':'')+'" data-dm="'+E(t.partner_id)+'" data-nm="'+E(t.name)+'">'+
      '<span class="pd" style="background:'+(t.unread>0?'#2FA36B':'#c7c6bf')+'"></span><span class="nm2">'+E(t.name)+'</span>'+
      (t.unread>0?'<span class="cn">'+(t.unread>99?'99+':t.unread)+'</span>':'')+'</button>';
  }

  function meineKanaele(g){
    return channels.filter(function(c){ return (c.grp||'austausch')===g && c.slug!=='club-news' && c.gefolgt; });
  }
  function sideHtml(){
    /* Eine Liste, keine Ordner: oben das Thema, in dem zuletzt etwas
       passiert ist. Genau so, wie man es aus WhatsApp kennt. */
    var list=channels.slice().sort(function(a,b){
      var x=a.letzte?Date.parse(a.letzte):0, y=b.letzte?Date.parse(b.letzte):0;
      if(x!==y) return y-x;
      return (a.sort_order||99)-(b.sort_order||99);
    });
    var h=list.map(chanRow).join('');
    if(dmThreads.length){
      h+='<div class="cg">Direktnachrichten</div>'+dmThreads.map(dmRow).join('');
    }
    return h||'<div class="cm-empty">Noch keine Themen.</div>';
  }
  function paintSidebar(){
    var l=q('.cs-l'); if(!l) return;
    var h=sideHtml();
    if(l.innerHTML===h) return;          // nichts geaendert, nichts anfassen
    var oben=l.scrollTop;
    l.innerHTML=h; l.scrollTop=oben;     // Bildlauf der Liste bleibt stehen
    bindSidebar();
  }
  function updateGroupCounts(){
    var r=root(); if(!r) return;
    GRP_ORDER.forEach(function(g){
      var box=r.querySelector('.grp[data-grp="'+g+'"]'); if(!box) return;
      var un=0; meineKanaele(g).forEach(function(c){ un+=(c.ungelesen||0); });
      var b=box.querySelector('.gn'); if(!b) return;
      b.textContent=un>99?'99+':un; b.style.display=un>0?'':'none';
    });
  }

  function shellHtml(){
    return '<div class="pagehead"><h1>Community-Chat</h1><p>Schreib mit anderen Mitgliedern — nach Stufe, Thema und Ziel sortiert.</p></div>'+
      '<div class="comm">'+
        '<div class="cs"><div class="cs-h"><b>Community</b><div class="st"><i></i><span id="cmMitgl">'+(((window.__commAkt||{}).mitglieder)?((window.__commAkt||{}).mitglieder+' Mitglieder \u00b7 '):'')+'</span><span id="cmOnline">'+countOnline()+'</span> online</div></div>'+
          '<div class="cs-srch"><input type="search" id="cmSearch" placeholder="Suchen …" autocomplete="off"></div>'+
          '<div class="cs-l">'+sideHtml()+'</div></div>'+
        '<div class="chat" id="cmChat"></div>'+
        '<div class="ms" id="cmRoster">'+rosterHtml()+'</div>'+
      '</div>';
  }

  // ---------- Kanal-Browser ----------
  function openBrowser(){
    var ov=document.createElement('div'); ov.className='kb-ov';
    var body='';
    GRP_ORDER.forEach(function(g){
      var list=channels.filter(function(c){ return (c.grp||'austausch')===g && c.slug!=='club-news'; });
      if(!list.length) return;
      body+='<div class="kb-g">'+E(GRP[g].t)+' · <span style="text-transform:none;font-weight:600;letter-spacing:0">'+E(GRP[g].s)+'</span></div>';
      list.forEach(function(c){
        var meta=(c.gesamt?c.gesamt+' Beiträge':'noch keine Beiträge');
        body+='<div class="kb-r"><div class="kb-e">'+E(c.emoji||'#')+'</div>'+
          '<div class="kb-t"><b>'+E(c.name)+'</b><small>'+E(c.description||'')+'</small><div class="kb-meta">'+E(meta)+'</div></div>'+
          '<button class="kb-btn'+(c.gefolgt?' on':'')+'" data-kb="'+E(c.slug)+'">'+(c.gefolgt?'Dabei ✓':'Folgen')+'</button></div>';
      });
    });
    ov.innerHTML='<div class="kb-bx"><div class="kb-h"><div><h3>Themen entdecken</h3><p>Such dir aus, was zu dir passt. Du kannst jederzeit folgen oder wieder abbestellen — deine Auswahl gilt auf allen Geräten.</p></div><button class="kb-x" type="button">✕</button></div><div class="kb-b">'+body+'</div></div>';
    document.body.appendChild(ov);
    function close(){ if(ov.parentNode) ov.parentNode.removeChild(ov); document.removeEventListener('keydown',onKey); }
    function onKey(e){ if(e.key==='Escape') close(); }
    document.addEventListener('keydown',onKey);
    ov.addEventListener('click',function(e){
      if(e.target===ov){ close(); return; }
      if(e.target.classList&&e.target.classList.contains('kb-x')){ close(); return; }
      var b=e.target.closest&&e.target.closest('[data-kb]');
      if(b){
        var sl=b.getAttribute('data-kb'), c=chanBy(sl); if(!c) return;
        var neu=!c.gefolgt;
        folgen(sl,neu);
        b.classList.toggle('on',neu); b.textContent=neu?'Dabei ✓':'Folgen';
      }
    });
  }

  function rosterHtml(){
    /* Keine Namensliste: wer hier lernt, geht niemanden etwas an.
       Namen stehen nur noch an den Beiträgen, die jemand schreibt.
       Die Zahlen kommen echt aus der Datenbank (RPC community_zahlen). */
    var f = window.__commAkt || {};
    var mg = (f.mitglieder == null) ? '' : f.mitglieder;
    var wo = (f.woche == null) ? '…' : f.woche;
    var th = (f.themen == null) ? '…' : f.themen;
    var heute = amandaFrage();
    return ''
      + '<div class="akt akt-mg">'
      +   '<h4>Community-Mitglieder</h4>'
      +   '<div class="akt-gross" id="aktMitglieder">' + mg + '</div>'
      +   '<div class="akt-hin">Alle lernen hier Deutsch — genau wie du.</div>'
      + '</div>'
      + (((wo===0||wo==='…') && (th===0||th==='…')) ? ''
         : '<div class="akt">'
         +   '<h4>Diese Woche</h4>'
         +   (wo ? '<div class="akt-z"><b id="aktWoche">' + wo + '</b><span>' + (wo===1?'Beitrag':'Beiträge') + '</span></div>' : '')
         +   (th ? '<div class="akt-z"><b id="aktThemen">' + th + '</b><span>' + (th===1?'Thema':'Themen') + '</span></div>' : '')
         +   '<div class="akt-hin">Schreib etwas — jede Frage hilft auch den anderen.</div>'
         + '</div>')
      + '<div class="akt amanda">'
      +   '<h4>Amandas Frage des Tages</h4>'
      +   '<p class="akt-frage">' + E(heute) + '</p>'
      +   '<div class="akt-hin">Antworte einfach im Kanal, der dir am besten passt.</div>'
      + '</div>';
  }

  /* Eine feste Frage pro Tag — gleiche Frage fuer alle, ohne Server.
     Klar als Amandas Frage gekennzeichnet, damit niemand sie fuer
     einen Beitrag eines Mitglieds haelt. */
  function amandaFrage(){
    var F = [
      'Welches deutsche Wort findest du am schönsten — und warum?',
      'Was war diese Woche dein kleiner Erfolg auf Deutsch?',
      'Welchen Satz sagst du im Alltag am häufigsten?',
      'Was verstehst du im Deutschen immer noch nicht?',
      'Lieber schreiben oder lieber sprechen? Und warum?',
      'Welches Wort hast du zuletzt neu gelernt?',
      'Was war deine peinlichste Verwechslung auf Deutsch?',
      'Wo sprichst du im Alltag am meisten Deutsch?',
      'Welche Serie oder welchen Podcast schaust du auf Deutsch?',
      'Was möchtest du bis Ende des Monats auf Deutsch schaffen?',
      'Welche Regel vergisst du jedes Mal wieder?',
      'Was hilft dir mehr: Grammatik üben oder einfach reden?',
      'Welches deutsche Wort gibt es in deiner Sprache nicht?',
      'Wann hast du dich zuletzt getraut, Deutsch zu sprechen?'
    ];
    var d = new Date();
    var tag = Math.floor((d - new Date(d.getFullYear(),0,0)) / 864e5);
    return F[tag % F.length];
  }

  /* Zaehlt, was in den letzten sieben Tagen geschrieben wurde.
     Wird zweimal gerufen: einmal vor dem Zeichnen, damit die Zahlen
     gleich im HTML stehen, und einmal danach, falls die Antwort
     langsamer war als die Seite. */
  async function ladeAktivitaet(){
    try{
      if(!sbc) return;
      var r = await sbc.rpc('community_zahlen');
      var z = (r && r.data && r.data[0]) || null;
      if(!z) return;
      window.__commAkt = { mitglieder:z.mitglieder, woche:z.beitraege_woche, themen:z.themen_woche };
      var m=q('#aktMitglieder'), c=q('#aktWoche'), d=q('#aktThemen');
      if(m) m.textContent = z.mitglieder;
      if(c) c.textContent = z.beitraege_woche;
      if(d) d.textContent = z.themen_woche;
      var k=q('#cmMitgl'); if(k) k.textContent = z.mitglieder ? (z.mitglieder+' Mitglieder \u00b7 ') : '';
    }catch(e){}
  }


  function bindSidebar(){
    var r=root();
    Array.prototype.forEach.call(r.querySelectorAll('[data-ch]'),function(b){ b.addEventListener('click',function(){ var s=b.getAttribute('data-ch'); if(mode==='channel'&&s===cur) return; mode='channel'; cur=s; refreshSideActive(); openChannel(s); }); });
    Array.prototype.forEach.call(r.querySelectorAll('[data-dm]'),function(b){ b.addEventListener('click',function(){ openDM(b.getAttribute('data-dm'),b.getAttribute('data-nm')); }); });
    Array.prototype.forEach.call(r.querySelectorAll('[data-gtog]'),function(b){
      b.addEventListener('click',function(){
        var g=b.getAttribute('data-gtog'), box=b.parentNode;
        var zu=!box.classList.contains('zu');
        box.classList.toggle('zu',zu);
        grpZu[g]=zu; speichereZu(grpZu);
      });
    });
    var mb=r.querySelector('#cmMore'); if(mb) mb.parentNode.removeChild(mb);
    var si=r.querySelector('#cmSearch'); if(si&&!si.__cmAn){ si.__cmAn=1; si.addEventListener('input',function(){ clearTimeout(_searchTimer); var v=si.value; _searchTimer=setTimeout(function(){ communitySearch(v); },250); }); }
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
  var _searchTimer=null;
  async function communitySearch(term){
    term=(term||'').trim();
    var chat=document.getElementById('cmChat'); if(!chat) return;
    if(term.length<2){ if(mode==='search'){ mode='channel'; openChannel(cur); } return; }
    mode='search';
    chat.innerHTML='<div class="ch-hd"><div class="ti"><span class="h">\ud83d\udd0d</span>Suche: \u201e'+E(term)+'"</div></div><div class="feed" id="cmFeed"><div class="cm-empty">Suche l\u00e4uft \u2026</div></div>';
    var msgs=[];
    try{ var rr=await sbc.from('community_messages').select('id,channel,author_name,body,kind,created_at').ilike('body','%'+term+'%').is('deleted_at',null).order('created_at',{ascending:false}).limit(40); msgs=(rr&&rr.data)||[]; }catch(e){}
    if(mode!=='search') return;
    var lc=term.toLowerCase();
    var mem=roster.filter(function(m){return String(m.name||'').toLowerCase().indexOf(lc)>=0;});
    var chName={}; channels.forEach(function(c){chName[c.slug]=c.name;});
    var box=document.getElementById('cmFeed'); if(!box) return;
    var html='';
    if(mem.length){ html+='<div class="srch-sec">Mitglieder</div>'+mem.slice(0,8).map(function(m){var fn=String(m.name||'').split(' ')[0];return '<div class="srch-mem"><div class="ava '+avClass(m.name)+'">'+E(initials(fn))+'</div><div><b>'+E(fn)+'</b> <span class="muted">\u00b7 '+(m.is_team?'Team':(m.level?E(m.level):'Mitglied'))+'</span></div></div>';}).join(''); }
    html+='<div class="srch-sec">Nachrichten'+(msgs.length?' ('+msgs.length+')':'')+'</div>';
    if(!msgs.length){ html+='<div class="cm-empty">Keine passenden Nachrichten.</div>'; }
    else{ html+=msgs.map(function(m){ var body=m.kind==='text'?E(m.body||''):(m.kind==='audio'?'\ud83c\udfa7 Sprachnachricht':(m.kind==='image'?'\ud83d\udcf7 Bild':'')); return '<button class="srch-res" data-goch="'+E(m.channel)+'"><div class="sr-top"><span class="sr-ch"># '+E(chName[m.channel]||m.channel)+'</span><span class="sr-au">'+E(String(m.author_name||'Mitglied').split(' ')[0])+'</span><time>'+timeStr(m.created_at)+'</time></div><div class="sr-body">'+body+'</div></button>'; }).join(''); }
    box.innerHTML=html;
    box.onclick=function(ev){ var rz=ev.target.closest&&ev.target.closest('[data-goch]'); if(rz){ var sl=rz.getAttribute('data-goch'); var inp=document.getElementById('cmSearch'); if(inp)inp.value=''; mode='channel'; cur=sl; refreshSideActive(); openChannel(sl); } };
  }
  /* Kanal zu: Liste wieder zeigen und den Verlaufseintrag aufloesen. */
  function kanalZu(){
    var w=q('.comm'); if(w) w.classList.remove('chatauf');
    try{ paintSidebar(); }catch(e){}
    setTimeout(passeHoehe,40);
    if(window.zurueckErledigt) zurueckErledigt('kanal');
  }

  async function openChannel(slug){
    mode='channel'; cur=slug; replyTo=null;
    var c=chanBy(slug); if(!c) return;
    markSeen(slug);
    var chat=q('#cmChat'); if(!chat) return;
    var canPost = !(c.team_only && !isTeam);
    chat.innerHTML=
      '<div class="ch-hd"><button class="bk" type="button" data-zurueck aria-label="Zurück">'+svg(IC.back)+'</button><div class="ti"><span class="h">'+E(c.emoji||'#')+'</span>'+E(c.name)+'</div>'+
        (c.description?'<div class="de">'+E(c.description)+'</div>':'')+
        (c.gefolgt?'':'<button class="ch-join" type="button" data-join="'+E(slug)+'">＋ Folgen</button>')+'</div>'+
      (c.leitfaden?'<div class="ch-guide"><b>So läuft es hier:</b> '+E(c.leitfaden)+'</div>':'')+
      '<div class="pinbar" id="cmPinned" style="display:none"></div>'+
      '<div class="feed" id="cmFeed"><div class="cm-empty">Lädt…</div></div>'+
      '<div class="cmp" id="cmCmp"></div>';
    var jb=chat.querySelector('[data-join]');
    if(jb) jb.addEventListener('click',function(){ folgen(slug,true); jb.remove(); });
    var zb=chat.querySelector('[data-zurueck]');
    if(zb) zb.addEventListener('click',function(){ kanalZu(); });
    var cw=q('.comm'); if(cw) cw.classList.add('chatauf');
    /* Am Handy deckt der offene Kanal die Kanalliste ab. Der Zurueck-Knopf
       des Telefons soll deshalb erst den Kanal schliessen. */
    if(window.zurueckAuf && cw && cw.classList.contains('chatauf')){
      zurueckAuf('kanal', function(){ var w=q('.comm'); if(w) w.classList.remove('chatauf'); });
    }
    renderComposer(canPost);
    hoeheUeberwachen();
    if(istHandy()){ try{ if(cw) cw.scrollIntoView({block:'start'}); }catch(e){} setTimeout(passeHoehe,60); setTimeout(passeHoehe,320); }
    /* Die NEUESTEN zuerst holen und dann umdrehen. Vorher wurden die
       ersten 200 geladen — in einem vollen Kanal haette man ewig alte
       Nachrichten gesehen und die neuen nie. */
    var res=await sbc.from('community_messages').select(FELDER).eq('channel',slug).is('deleted_at',null)
              .order('created_at',{ascending:false}).limit(SEITE);
    if(res.error){ res=await sbc.from('community_messages').select('id,user_id,kind,body,audio_path,audio_secs,image_path,author_name,created_at,pinned_at').eq('channel',slug).is('deleted_at',null).order('created_at',{ascending:false}).limit(SEITE); }
    var rows=(res.data||[]).slice().reverse(); curMsgs=rows;
    mehrDa = (res.data||[]).length >= SEITE;
    aeltesteZeit = rows.length ? rows[0].created_at : null;
    letzteZeit  = rows.length ? rows[rows.length-1].created_at : null;
    await hydrateMedia(rows);
    reax={}; corr={};
    await loadReactions(rows.map(function(m){return m.id;}));
    await loadCorrections(rows.map(function(m){return m.id;}));
    renderFeed(rows);
    renderPinned();
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
    return '<div class="rc" data-rc="'+E(id)+'">'+chips+'</div>';
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
    var rp=t.closest('[data-rep]'); if(rp){ ev.stopPropagation(); setReply(rp.getAttribute('data-rep')); return; }
    var gt=t.closest('[data-goto]'); if(gt){ ev.stopPropagation(); springZu(gt.getAttribute('data-goto')); return; }
    var re=t.closest('[data-reax]');
    if(re){ ev.stopPropagation(); toggleReaction(re.getAttribute('data-reax'),re.getAttribute('data-emoji')); return; }
    var cb=t.closest('[data-corrbtn]'); if(cb){ ev.stopPropagation(); openCorrectForm(cb.getAttribute('data-corrbtn')); return; }
    var kb=t.closest('[data-kibtn]'); if(kb){ ev.stopPropagation(); aiCorrect(kb.getAttribute('data-kibtn')); return; }
    var pn=t.closest('[data-pin]'); if(pn){ ev.stopPropagation(); togglePin(pn.getAttribute('data-pin')); return; }
    var sv=t.closest('[data-savecorr]'); if(sv){ ev.stopPropagation(); saveTrainer(sv.getAttribute('data-savecorr')); return; }
    var mh=t.closest('[data-mehr]');
    if(mh){
      ev.stopPropagation();
      var box=q('#cmFeed');
      var vorH=box?box.scrollHeight:0, vorT=box?box.scrollTop:0;
      var alt2=q('.thr-alt[data-alt="'+mh.getAttribute('data-mehr')+'"]');
      if(alt2) alt2.hidden=false;
      mh.remove();
      // Der aufgeklappte Teil steht oberhalb — Bildlauf mitziehen, damit
      // der Beitrag unter dem Finger stehen bleibt.
      if(box){ box.scrollTop = vorT + (box.scrollHeight - vorH); }
      return;
    }
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
          h.style.color='#14708B'; h.textContent='✨ KI: Der Satz ist korrekt 👍 — du kannst trotzdem etwas anmerken.';
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
  function kurzText(m){
    if(!m) return 'Nachricht';
    if(m.kind==='audio') return '🎧 Sprachnachricht';
    if(m.kind==='image') return '📷 Bild';
    return String(m.body||'').slice(0,120);
  }
  function quoteHtml(m){
    if(!m.antwort_auf) return '';
    var p=null; for(var i=0;i<curMsgs.length;i++){ if(curMsgs[i].id===m.antwort_auf){ p=curMsgs[i]; break; } }
    return '<div class="quote" data-goto="'+E(m.antwort_auf)+'"><b>'+E(p?String(p.author_name||'Mitglied').split(' ')[0]:'Antwort')+'</b><span class="qt">'+E(p?kurzText(p):'Ältere Nachricht — im Verlauf nachlesen')+'</span></div>';
  }
  /* Wer im Chat schreibt, muss erkennbar sein. Amanda, Mila und Tom
     sind KI-Begleiter und tragen das Schild an jedem Beitrag — nicht
     nur auf der Startseite. Ohne das waere es Taeuschung. */
  function schild(name){
    var n = String(name||'');
    if(/^(amanda|mila|tom)\b/i.test(n)) return '<span class="m-ki">KI</span>';
    if(/^julia/i.test(n))               return '<span class="m-team">Team</span>';
    return '';
  }

  function msgHtml(m,istAntwort){
    var vn=vorname(m.author_name);
    var meins=!!(m.user_id&&ME&&m.user_id===ME.id);
    return '<div class="m'+(m.pinned_at?' pinned':'')+(istAntwort?' m-a':'')+(meins?' me':'')+'" data-id="'+E(m.id)+'" data-u="'+E(m.user_id||'')+'" data-t="'+E(m.created_at||'')+'"><div class="ava '+avClass(m.author_name)+'">'+E(initials(vn))+'</div>'+
      '<div class="mb"><div class="mh"><span class="w">'+E(vn)+'</span>'+schild(m.author_name)+'<time>'+timeStr(m.created_at)+'</time>'+(m.pinned_at?'<span class="mh-pin" title="Angepinnt">'+svg(IC.pin,'ico-sm')+'</span>':'')+'</div>'+
      (istAntwort?'':quoteHtml(m))+bodyHtml(m)+rcHtml(m.id)+'<div data-corrslot="'+E(m.id)+'">'+corrsFor(m.id)+'</div><span class="mzeit">'+timeStr(m.created_at)+'</span></div>'+
      msgActions(m)+'</div>';
  }
  // Schnellzeile unter jedem Beitrag: reagieren und antworten ohne Umweg
  function schnellHtml(m){
    if(!isRealId(m.id)) return '';
    var chips=QUICK.slice(0,5).map(function(em){
      return '<button class="sr-e" data-reax="'+E(m.id)+'" data-emoji="'+em+'" title="'+em+'">'+em+'</button>';
    }).join('');
    return '<div class="schnell">'+chips+
      '<button class="sr-r" data-rep="'+E(m.id)+'">'+svg(IC.reply,'ico-sm')+'Antworten</button></div>';
  }
  function msgActions(m){
    if(!isRealId(m.id)) return '';
    var me=m.user_id===ME.id, a='<div class="msg-actions">';
    a+='<button data-addr="'+E(m.id)+'" title="Reagieren">'+svg(IC.emoji,'ico-sm')+'</button>';
    a+='<button data-rep="'+E(m.id)+'" title="Antworten">'+svg(IC.reply,'ico-sm')+'</button>';
    if(isTeam&&!me&&m.kind==='text'){ a+='<button data-corrbtn="'+E(m.id)+'" title="Korrigieren">'+svg(IC.pencil,'ico-sm')+'</button><button class="ki" data-kibtn="'+E(m.id)+'" title="KI-Vorschlag">✨</button>'; }
    if(isAdmin){ a+='<button data-pin="'+E(m.id)+'" title="'+(m.pinned_at?'Anheftung lösen':'Anpinnen')+'">'+svg(IC.pin,'ico-sm')+'</button>'; }
    if(me||isAdmin){ a+='<button class="del" data-del="'+E(m.id)+'" title="Löschen">'+svg(IC.close,'ico-sm')+'</button>'; }
    return a+'</div>';
  }
  // Beitrag + seine Antworten zu einem Strang buendeln (zwei Ebenen, wie bei Skool)
  function baueStraenge(rows){
    var idx={}, kinder={}, wurzeln=[];
    rows.forEach(function(m){ idx[m.id]=m; });
    rows.forEach(function(m){
      var p=m.antwort_auf;
      if(!p || !idx[p]){ wurzeln.push(m); return; }
      var w=p, schutz=0;
      while(idx[w] && idx[w].antwort_auf && idx[idx[w].antwort_auf] && schutz++<8){ w=idx[w].antwort_auf; }
      (kinder[w]||(kinder[w]=[])).push(m);
    });
    return {wurzeln:wurzeln, kinder:kinder};
  }
  var ANTW_AUF=3; // so viele Antworten stehen offen da, der Rest klappt auf
  function strangHtml(m,kinder){
    var a=(kinder[m.id]||[]).sort(function(x,y){ return new Date(x.created_at)-new Date(y.created_at); });
    var h='<div class="thr" data-thr="'+E(m.id)+'">'+msgHtml(m)+schnellHtml(m);
    h+='<div class="thr-a" data-ans="'+E(m.id)+'">';
    if(a.length>ANTW_AUF){
      h+='<button class="thr-mehr" data-mehr="'+E(m.id)+'">'+(a.length-ANTW_AUF)+' ältere '+(a.length-ANTW_AUF===1?'Antwort':'Antworten')+' anzeigen</button>';
      h+='<div class="thr-alt" data-alt="'+E(m.id)+'" hidden>'+a.slice(0,a.length-ANTW_AUF).map(function(x){return msgHtml(x,true);}).join('')+'</div>';
      h+=a.slice(a.length-ANTW_AUF).map(function(x){return msgHtml(x,true);}).join('');
    } else {
      h+=a.map(function(x){return msgHtml(x,true);}).join('');
    }
    h+='</div></div>';
    return h;
  }
  /* Schreibt jemand mehrere Beiträge kurz hintereinander, gehören sie
     zusammen: der zweite bekommt keinen eigenen Kopf mehr, sondern hängt
     sich unter den ersten. Genau so sieht ein Messenger aus. */
  function gleicherOrt(a,b){
    if(a.parentElement===b.parentElement) return true;
    var ta=a.closest('.thr'), tb=b.closest('.thr');
    return !!(ta&&tb&&a.parentElement===ta&&b.parentElement===tb&&tb.previousElementSibling===ta);
  }
  function gruppiere(){
    var box=q('#cmFeed'); if(!box) return;
    var alle=box.querySelectorAll('.m'), vor=null;
    for(var i=0;i<alle.length;i++){
      var el=alle[i]; el.classList.remove('folge');
      var u=el.getAttribute('data-u')||'', t=Date.parse(el.getAttribute('data-t')||'')||0;
      if(vor && u && u===vor.u && t && vor.t && Math.abs(t-vor.t)<300000 && gleicherOrt(vor.el,el)) el.classList.add('folge');
      vor={el:el,u:u,t:t};
    }
  }

  function renderFeed(rows){
    var box=q('#cmFeed'); if(!box) return;
    if(!rows.length){ box.innerHTML='<div class="cm-empty"><b>Hier hat noch niemand geschrieben.</b>Sei die Erste — eine Frage, ein Satz über deinen Tag, irgendetwas. Die anderen trauen sich dann auch.</div>'; }
    else{
      var st=baueStraenge(rows), out='', last='';
      st.wurzeln.forEach(function(m){
        var dl=new Date(m.created_at).toDateString();
        if(dl!==last){ last=dl; out+='<div class="dsep">'+E(dayLabel(m.created_at))+'</div>'; }
        out+=strangHtml(m,st.kinder);
      });
      box.innerHTML=(mehrDa?'<button type="button" class="cm-mehr" id="cmMehr">Ältere Nachrichten laden</button>':'')+out;
      var mb=box.querySelector('#cmMehr');
      if(mb) mb.addEventListener('click',function(){ ladeAeltere(mb); });
    }
    gruppiere();
    box.scrollTop=box.scrollHeight;
    neuPille(false);
    if(!box.__b){ box.__b=true; box.addEventListener('click',onFeedClick);
      box.addEventListener('scroll',function(){ if(box.scrollHeight-box.scrollTop-box.clientHeight<80) neuPille(false); },{passive:true});
      halteBinden(box);
      if(!window.__cmDoc){ window.__cmDoc=true; document.addEventListener('click',function(){ var p=document.querySelector('#v-community .repop'); if(p)p.remove(); var e=document.querySelector('#v-community .emopick'); if(e)e.style.display='none'; }); } }
  }
  function renderPinned(){
    var box=q('#cmPinned'); if(!box) return;
    var pins=(curMsgs||[]).filter(function(m){return m.pinned_at;});
    if(!pins.length){ box.style.display='none'; box.innerHTML=''; return; }
    box.style.display='block';
    box.innerHTML='<div class="ph">'+svg(IC.pin,'ico-sm')+'Angepinnt</div>'+pins.map(function(m){
      var txt=m.kind==='text'?E(m.body||''):(m.kind==='audio'?'🎧 Sprachnachricht':(m.kind==='image'?'📷 Bild':''));
      return '<div class="pinrow"><div class="pc"><div class="pa">'+E(vorname(m.author_name))+'</div><div class="pt">'+txt+'</div></div>'+(isAdmin?'<button class="punp" data-unpin="'+E(m.id)+'">lösen</button>':'')+'</div>';
    }).join('');
    box.onclick=function(ev){ var u=ev.target.closest&&ev.target.closest('[data-unpin]'); if(u){ togglePin(u.getAttribute('data-unpin')); } };
  }
  async function togglePin(id){
    var m=(curMsgs||[]).filter(function(x){return x.id===id;})[0]; if(!m) return;
    var now=m.pinned_at?null:new Date().toISOString();
    m.pinned_at=now;
    var el=q('.m[data-id="'+id+'"]'); if(el)el.classList.toggle('pinned',!!now);
    renderPinned();
    try{ await sbc.from('community_messages').update({pinned_at:now}).eq('id',id); }catch(e){}
  }
  function wurzelVon(id){
    var idx={},i; for(i=0;i<curMsgs.length;i++) idx[curMsgs[i].id]=curMsgs[i];
    var w=id, schutz=0;
    while(idx[w] && idx[w].antwort_auf && idx[idx[w].antwort_auf] && schutz++<8){ w=idx[w].antwort_auf; }
    return w;
  }
  function appendMsg(m){
    /* Nach einem Verbindungsabbruch kann dieselbe Nachricht zweimal
       ankommen — einmal live, einmal beim Nachholen. Einmal reicht. */
    if(m && m.id){
      for(var _i=0;_i<curMsgs.length;_i++){ if(curMsgs[_i].id===m.id) return; }
      if(q('[data-id="'+m.id+'"]')) return;
    }
    curMsgs.push(m);
    if(m && m.created_at && (!letzteZeit || m.created_at > letzteZeit)) letzteZeit = m.created_at;
    var box=q('#cmFeed'); if(!box) return;
    if(box.querySelector('.cm-empty')) box.innerHTML='';
    var near=box.scrollHeight-box.scrollTop-box.clientHeight<140;
    var slot=null;
    if(m.antwort_auf){
      var w=wurzelVon(m.antwort_auf);
      slot=box.querySelector('.thr-a[data-ans="'+w+'"]');
    }
    if(slot){ slot.insertAdjacentHTML('beforeend',msgHtml(m,true)); }
    else{ box.insertAdjacentHTML('beforeend','<div class="thr" data-thr="'+E(m.id)+'">'+msgHtml(m)+schnellHtml(m)+'<div class="thr-a" data-ans="'+E(m.id)+'"></div></div>'); }
    gruppiere();
    if(near||m.user_id===ME.id){ box.scrollTop=box.scrollHeight; neuPille(false); }
    else neuPille(true);
  }
  function togglePlay(btn){
    var src=btn.getAttribute('data-src'); if(!src) return;
    if(btn.__a){ if(btn.__a.paused){ btn.__a.play(); btn.innerHTML=svg(IC.pause,'ico-sm'); } else { btn.__a.pause(); btn.innerHTML=svg(IC.play,'ico-sm'); } return; }
    var a=new Audio(src); btn.__a=a; a.play(); btn.innerHTML=svg(IC.pause,'ico-sm');
    a.addEventListener('ended',function(){ btn.innerHTML=svg(IC.play,'ico-sm'); });
  }
  function cmConfirm(title,msg,okLabel,onOk){
    var ov=document.createElement('div'); ov.className='cm-confirm-ov';
    ov.innerHTML='<div class="cm-confirm"><div class="cc-t">'+E(title)+'</div><div class="cc-m">'+E(msg)+'</div><div class="cc-a"><button class="cc-cancel" type="button">Abbrechen</button><button class="cc-ok" type="button">'+E(okLabel)+'</button></div></div>';
    document.body.appendChild(ov);
    function close(){ if(ov.parentNode) ov.parentNode.removeChild(ov); document.removeEventListener('keydown',onKey); }
    function onKey(e){ if(e.key==='Escape') close(); }
    document.addEventListener('keydown',onKey);
    ov.addEventListener('click',function(e){ if(e.target===ov) close(); });
    ov.querySelector('.cc-cancel').addEventListener('click',close);
    ov.querySelector('.cc-ok').addEventListener('click',function(){ close(); try{ onOk(); }catch(e){} });
  }
  function delMsg(id){
    if(!isRealId(id)) return;
    cmConfirm('Nachricht löschen?','Diese Nachricht wird für alle entfernt. Das kann nicht rückgängig gemacht werden.','Löschen',async function(){
      try{ await sbc.from('community_messages').update({deleted_at:new Date().toISOString()}).eq('id',id); var n=q('[data-id="'+id+'"]'); if(n)n.remove(); }catch(e){}
    });
  }

  // ---------- Composer ----------
  function renderComposer(canPost){
    var foot=q('#cmCmp'); if(!foot) return;
    if(!canPost){ foot.innerHTML='<div class="cmp-lock">'+svg(IC.pin,'ico-sm')+'Nur das Team schreibt hier — du bekommst alle Neuigkeiten mit.</div>'; return; }
    var schmal = false; try{ schmal = window.innerWidth < 560; }catch(e){}
    var ph = mode==='dm'
      ? ('Nachricht an '+E(vorname((dmActive&&dmActive.name)||''))+' …')
      : (schmal ? 'Schreib etwas …' : 'Nachricht an #'+E(cur)+' …');
    foot.innerHTML='<div class="cmp-box"><div id="cmReply"></div><div class="emopick" id="cmEmo2"></div><div class="cmp-in">'+
      '<button class="ct" id="cImg" title="Bild">'+svg(IC.img)+'</button>'+
      '<textarea id="cInp" rows="1" placeholder="'+ph+'"></textarea>'+
      '<button class="ct" id="cEmo" title="Emoji">'+svg(IC.emoji)+'</button>'+
      '<button class="ct" id="cMic" title="Sprachnachricht">'+svg(IC.mic)+'</button>'+
      '<input type="file" id="cFile" accept="image/*" style="display:none">'+
      '<button class="cse" id="cSend" title="Senden">'+svg(IC.send,'ico-sm')+'</button>'+
      '</div></div>'+
      (isTeam ? '<label class="mailhaken"><input type="checkbox" id="cMail"><span>Wichtig: auch per <b>E-Mail</b> an alle Mitglieder schicken</span></label>' : '')+
      '<div class="chint">'+svg(IC.mic,'ico-sm')+'Sprachnachricht aufnehmen · <b style="color:var(--t2)">Enter</b> senden · <b style="color:var(--t2)">Shift+Enter</b> neue Zeile</div>';
    var inp=q('#cInp'),send=q('#cSend'),mic=q('#cMic'),img=q('#cImg'),file=q('#cFile'),emo=q('#cEmo'),pick=q('#cmEmo2');
    if(inp){
      inp.addEventListener('keydown',function(e){ if(e.key==='Enter'&&!e.shiftKey){ e.preventDefault(); doSend(); } });
      /* Geht die Tastatur auf, schrumpft das sichtbare Fenster. Wir messen
         nach und ziehen den Verlauf ans Ende — das Schreibfeld bleibt so
         immer sichtbar, statt unter der Tastatur zu verschwinden. */
      inp.addEventListener('focus',function(){
        if(!istHandy()) return;
        setTimeout(function(){ passeHoehe(); var b=q('#cmFeed'); if(b) b.scrollTop=b.scrollHeight; },220);
        setTimeout(passeHoehe,560);
      });
      inp.addEventListener('blur',function(){ if(istHandy()) setTimeout(passeHoehe,220); });
      inp.addEventListener('input',function(){
        var box=q('#cmFeed');
        var unten = box ? (box.scrollHeight-box.scrollTop-box.clientHeight < 60) : false;
        inp.style.height='auto'; inp.style.height=Math.min(150,inp.scrollHeight)+'px';
        // Waechst das Feld, schrumpft der Feed. Wer unten stand, bleibt unten.
        if(box&&unten) box.scrollTop=box.scrollHeight;
      });
    }
    if(send) send.addEventListener('click',doSend);
    if(mic) mic.addEventListener('click',toggleRec);
    if(img&&file){ img.addEventListener('click',function(){file.click();}); file.addEventListener('change',function(){ if(file.files&&file.files[0]) uploadImage(file.files[0]); file.value=''; }); }
    if(emo&&pick){ pick.innerHTML=EMOJIS.map(function(x){return '<button type="button">'+x+'</button>';}).join('');
      emo.addEventListener('click',function(ev){ ev.stopPropagation(); pick.style.display=(pick.style.display==='flex'?'none':'flex'); });
      pick.addEventListener('click',function(ev){ ev.stopPropagation(); var t=ev.target; if(t.tagName==='BUTTON'){ inp.value+=t.textContent; inp.focus(); } });
    }
  }
  function setReply(id){
    var m=null; for(var i=0;i<curMsgs.length;i++){ if(curMsgs[i].id===id){ m=curMsgs[i]; break; } }
    if(!m) return;
    replyTo={id:id,name:String(m.author_name||'Mitglied').split(' ')[0],text:kurzText(m)};
    paintReply();
    var inp=q('#cInp'); if(inp) inp.focus();
  }
  function paintReply(){
    var box=q('#cmReply'); if(!box) return;
    if(!replyTo){ box.innerHTML=''; return; }
    box.innerHTML='<div class="replybar">'+svg(IC.reply,'ico-sm')+'Antwort an '+E(replyTo.name)+'<span class="rq">'+E(replyTo.text)+'</span><button type="button" id="cmReplyX" title="Abbrechen">✕</button></div>';
    var x=q('#cmReplyX'); if(x) x.addEventListener('click',function(){ replyTo=null; paintReply(); });
  }
  function springZu(id){
    var el=q('.m[data-id="'+id+'"]');
    if(!el){ return; }
    el.scrollIntoView({block:'center',behavior:'smooth'});
    el.classList.add('hl'); setTimeout(function(){ el.classList.remove('hl'); },1600);
  }
  var sending=false;
  async function doSend(){
    if(sending) return; var inp=q('#cInp'); if(!inp) return; var t=inp.value.trim(); if(!t) return;
    sending=true; inp.value=''; try{ inp.style.height='auto'; }catch(e){}
    if(mode==='dm'){ await dmSend(t); sending=false; return; }
    var tmp='tmp-'+Date.now();
    var aw=replyTo?replyTo.id:null;
    appendMsg({id:tmp,user_id:ME.id,kind:'text',body:t,author_name:myName,created_at:new Date().toISOString(),antwort_auf:aw});
    replyTo=null; paintReply();
    var row={channel:cur,kind:'text',body:t,author_name:myName};
    if(aw) row.antwort_auf=aw;
    await sendeZeile(row,tmp);
    sending=false;
  }

  /* Frueher verschwand ein Sendefehler still: die Nachricht stand da,
     war aber nie gespeichert. Jetzt sieht man es — und kann sie mit
     einem Tippen noch einmal schicken. */
  async function sendeZeile(row,tmp){
    var node=q('[data-id="'+tmp+'"]');
    if(node){ node.classList.add('m-sendet'); node.classList.remove('m-fehler'); }
    try{
      var res=await sbc.from('community_messages').insert(row).select('id').single();
      if(res.error && row.antwort_auf){ delete row.antwort_auf; res=await sbc.from('community_messages').insert(row).select('id').single(); }
      if(res.error) throw res.error;
      node=q('[data-id="'+tmp+'"]');
      if(node && res.data){
        node.setAttribute('data-id',res.data.id);
        node.classList.remove('m-sendet','m-fehler');
        var w=node.querySelector('.m-warn'); if(w) w.remove();
        for(var i=0;i<curMsgs.length;i++){ if(curMsgs[i].id===tmp){ curMsgs[i].id=res.data.id; break; } }
      }
      notifyAdmin(cur, row && row.body);
      /* Der Haken "auch per Mail" gilt immer nur fuer diese eine
         Nachricht - danach ist er wieder aus, damit nicht versehentlich
         jeder Halbsatz im Postfach aller Mitglieder landet. */
      try{
        var hk=q('#cMail');
        if(hk && hk.checked && isTeam && res.data && res.data.id){ hk.checked=false; perMailSchicken(res.data.id); }
      }catch(e){}
      return true;
    }catch(e){
      node=q('[data-id="'+tmp+'"]');
      if(node){
        node.classList.remove('m-sendet'); node.classList.add('m-fehler');
        if(!node.querySelector('.m-warn')){
          var d=document.createElement('div');
          d.className='m-warn';
          d.innerHTML='Nicht gesendet <button type="button" data-nochmal="'+E(tmp)+'">nochmal senden</button>';
          node.appendChild(d);
          d.querySelector('button').addEventListener('click',function(){ sendeZeile(row,tmp); });
        }
      }
      return false;
    }
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
      notifyAdmin(cur, '🎤 Sprachnachricht');
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
      notifyAdmin(cur, '📷 Bild');
    }catch(e){}
  }
  /* Zwei Wege, ein Auslöser: die Mail an die Adminadresse wie bisher —
     und die Glocke bei allen aktiven Mitgliedern. Die Glocke braucht
     keinen Versanddienst; sie schreibt nur eine Zeile in die Tabelle
     `benachrichtigungen`, auf die benachrichtigungen.js live hört. */
  /* Schickt eine bereits gespeicherte Nachricht zusaetzlich als E-Mail
     an alle aktiven Mitglieder. Der Server prueft Rechte und verhindert
     ueber email_log, dass dieselbe Nachricht zweimal rausgeht. */
  async function perMailSchicken(messageId){
    var hinweis=q('.mailhaken');
    if(hinweis) hinweis.setAttribute('data-stand','sendet');
    try{
      var sess=await sbc.auth.getSession();
      var tok=sess&&sess.data&&sess.data.session&&sess.data.session.access_token;
      if(!tok) throw new Error('kein Token');
      var r=await fetch('/api/chat-broadcast',{method:'POST',
        headers:{'Content-Type':'application/json','Authorization':'Bearer '+tok},
        body:JSON.stringify({message_id:messageId})});
      var d=await r.json().catch(function(){ return {}; });
      if(!r.ok||!d.ok) throw new Error(d.error||'Fehler');
      if(hinweis){
        hinweis.setAttribute('data-stand','fertig');
        hinweis.setAttribute('data-zahl', d.already_sent ? 'schon verschickt' : ((d.verschickt||0)+' Mitglieder'));
      }
    }catch(e){
      if(hinweis) hinweis.setAttribute('data-stand','fehler');
    }
    setTimeout(function(){ var h=q('.mailhaken'); if(h){ h.removeAttribute('data-stand'); h.removeAttribute('data-zahl'); } },6000);
  }

  async function notifyAdmin(channel, text){
    try{ var s=await sbc.auth.getSession(); var tok=s&&s.data&&s.data.session&&s.data.session.access_token; if(!tok) return;
      var kopf={'Content-Type':'application/json','Authorization':'Bearer '+tok};
      fetch('/api/notify-community',{method:'POST',headers:kopf,body:JSON.stringify({channel:channel})}).catch(function(){});
      fetch('/api/notify-community-mitglieder',{method:'POST',headers:kopf,
        body:JSON.stringify({channel:channel,text:text||''})}).catch(function(){}); }catch(e){}
  }

  // ---------- Direktnachrichten (inline) ----------
  function dmMsgHtml(m){
    var meins=m.sender_id===ME.id;
    var nm=meins?myName:((dmActive&&dmActive.name)||'Mitglied');
    return '<div class="m'+(meins?' me':'')+'" data-id="'+E(m.id||'')+'" data-u="'+E(m.sender_id||'')+'" data-t="'+E(m.created_at||'')+'">'+
      '<div class="ava '+avClass(nm)+'">'+E(initials(nm))+'</div>'+
      '<div class="mb"><div class="mh"><span class="w">'+(meins?'Du':E(vorname(nm)))+'</span><time>'+timeStr(m.created_at)+'</time></div>'+
      '<div class="mt">'+E(m.body||'')+'</div><span class="mzeit">'+timeStr(m.created_at)+'</span></div></div>';
  }

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
    else{ box.innerHTML=rows.map(dmMsgHtml).join(''); gruppiere(); box.scrollTop=box.scrollHeight; }
    try{ await sbc.rpc('dm_mark_read',{p_partner:partnerId}); }catch(e){}
  }
  async function dmSend(t){
    var box=q('#cmFeed'); if(box){ if(box.querySelector('.cm-empty'))box.innerHTML=''; box.insertAdjacentHTML('beforeend',dmMsgHtml({id:'tmp-'+Date.now(),sender_id:ME.id,body:t,created_at:new Date().toISOString()})); gruppiere(); box.scrollTop=box.scrollHeight; }
    try{ await sbc.from('direct_messages').insert({recipient_id:dmActive.id,kind:'text',body:t}); }catch(e){}
  }

  // ---------- Realtime + Badges ----------
  function badgeHtml(){}
  function updateBadge(slug){
    var btn=q('.ch[data-ch="'+slug+'"]'); if(!btn) return;
    var c=chanBy(slug), b=btn.querySelector('.cn'), n=(c&&c.ungelesen)||0;
    btn.classList.toggle('neu', n>0);
    if(n<=0){ if(b)b.remove(); return; }
    /* Die Zahl gehoert in die rechte Spalte, unter die Uhrzeit. */
    if(!b){ b=document.createElement('span'); b.className='cn'; (btn.querySelector('.chr')||btn).appendChild(b); }
    b.textContent=n>99?'99+':n;
  }
  function subscribeBadges(){
    if(badgeChan) return;
    badgeChan=sbc.channel('cmv2-badges').on('postgres_changes',{event:'INSERT',schema:'public',table:'community_messages'},function(p){
      var m=p.new; if(!m||m.deleted_at||m.user_id===ME.id||(mode==='channel'&&m.channel===cur)) return;
      var c=chanBy(m.channel); if(!c) return;
      c.ungelesen=(c.ungelesen||0)+1; c.gesamt=(c.gesamt||0)+1;
      /* Das Thema rutscht nach oben und zeigt die neue Vorschau — wie im Messenger. */
      c.letzte=m.created_at||new Date().toISOString();
      c.letzter_text=(m.kind==='audio')?'Sprachnachricht':((m.kind==='image')?'Bild':(m.body||''));
      c.letzter_name=m.author_name||'Mitglied';
      try{ paintSidebar(); }catch(e){ updateBadge(m.channel); }
      updateGroupCounts();
    }).subscribe();
  }
  /* Holt alles, was seit der letzten bekannten Nachricht geschrieben
     wurde. Wird nach jedem erfolgreichen Verbinden aufgerufen — damit
     schliesst sich die Luecke, die durch Funkloch oder Bildschirm-aus
     entstanden ist. */
  async function nachholen(){
    if(mode!=='channel' || !cur || !letzteZeit || holtGerade) return;
    holtGerade = true;
    try{
      var r = await sbc.from('community_messages').select(FELDER)
                .eq('channel',cur).is('deleted_at',null)
                .gt('created_at',letzteZeit).order('created_at').limit(200);
      var neue = (r && r.data) || [];
      if(neue.length){
        await hydrateMedia(neue);
        await loadReactions(neue.map(function(m){return m.id;}));
        neue.forEach(appendMsg);
      }
    }catch(e){}
    holtGerade = false;
  }

  /* Aeltere Nachrichten oben nachladen — ohne dass der Feed springt. */
  async function ladeAeltere(btn){
    if(!mehrDa || !aeltesteZeit || holtGerade) return;
    holtGerade = true;
    if(btn){ btn.disabled=true; btn.textContent='Lädt …'; }
    var box=q('#cmFeed');
    var vorher = box ? box.scrollHeight : 0;
    try{
      var r = await sbc.from('community_messages').select(FELDER)
                .eq('channel',cur).is('deleted_at',null)
                .lt('created_at',aeltesteZeit)
                .order('created_at',{ascending:false}).limit(SEITE);
      var alte = ((r && r.data) || []).slice().reverse();
      mehrDa = ((r && r.data) || []).length >= SEITE;
      if(alte.length){
        await hydrateMedia(alte);
        await loadReactions(alte.map(function(m){return m.id;}));
        await loadCorrections(alte.map(function(m){return m.id;}));
        aeltesteZeit = alte[0].created_at;
        curMsgs = alte.concat(curMsgs);
        renderFeed(curMsgs);
        if(box) box.scrollTop = box.scrollHeight - vorher;   // Blick bleibt stehen
      }
    }catch(e){}
    holtGerade = false;
  }

  /* Eine ruhige Zeile statt einer Fehlermeldung: sie sagt Bescheid,
     wenn gerade nichts durchkommt, und verschwindet von selbst wieder. */
  function zeigeVerbindung(ok){
    if(verbunden===ok) return;
    verbunden = ok;
    var chat=q('#cmChat'); if(!chat) return;
    var b=chat.querySelector('.cm-offline');
    if(ok){ if(b) b.remove(); return; }
    if(b) return;
    var d=document.createElement('div');
    d.className='cm-offline';
    d.textContent='Keine Verbindung — neue Nachrichten kommen, sobald du wieder online bist.';
    var hd=chat.querySelector('.ch-hd');
    if(hd&&hd.parentNode) hd.parentNode.insertBefore(d, hd.nextSibling);
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
      .subscribe(function(status){
        if(status==='SUBSCRIBED'){ zeigeVerbindung(true); nachholen(); }
        else if(status==='CHANNEL_ERROR'||status==='TIMED_OUT'||status==='CLOSED'){ zeigeVerbindung(false); }
      });
  }

  /* Am Handy schlaeft die Verbindung, sobald der Bildschirm aus geht
     oder das Netz wechselt. Beim Zurueckkommen bauen wir sie neu auf
     und holen die Luecke nach. Ohne das bleibt der Chat still stehen,
     ohne dass jemand merkt, dass etwas fehlt. */
  function wiederVerbinden(){
    if(mode!=='channel'||!cur) return;
    subscribe(cur);
  }
  if(!window.__cmWach){
    window.__cmWach = true;
    document.addEventListener('visibilitychange',function(){ if(!document.hidden) wiederVerbinden(); });
    window.addEventListener('online',function(){ zeigeVerbindung(true); wiederVerbinden(); });
    window.addEventListener('offline',function(){ zeigeVerbindung(false); });
    window.addEventListener('focus',wiederVerbinden);
  }
  function countOnline(){ var ON=window.CLUB_ONLINE||{}; return roster.filter(function(m){return ON[m.id];}).length; }
  function paintPresence(){
    var rEl=q('#cmRoster');
    if(rEl){
      var h=rosterHtml();
      if(rEl.innerHTML!==h){ var oben=rEl.scrollTop; rEl.innerHTML=h; rEl.scrollTop=oben; }
    }
    var o=q('#cmOnline'); if(o){ var z=String(countOnline()); if(o.textContent!==z) o.textContent=z; }
  }
  function stopAll(){ try{ if(chan)sbc.removeChannel(chan); if(badgeChan)sbc.removeChannel(badgeChan); }catch(e){} chan=null; badgeChan=null; }

  /* ============================================================
     Handy: Höhe, neue Nachrichten, Halte-Menü
     ============================================================ */
  function istHandy(){ try{ return window.matchMedia('(max-width:900px)').matches; }catch(e){ return window.innerWidth<=900; } }

  /* Früher stand hier eine feste Rechnung (100dvh minus 140 Pixel). Sobald
     die Tastatur aufging, stimmte sie nicht mehr und das Schreibfeld rutschte
     aus dem Bild. Jetzt messen wir das wirklich sichtbare Fenster. */
  function passeHoehe(){
    var r=root(); if(!r) return;
    var w=q('.comm'); if(w&&w.style.height) w.style.height='';
    var an = istHandy() && r.classList.contains('active');
    document.body.classList.toggle('cm-voll', an);
    r.classList.toggle('cm-fest', an);
    if(!an){ r.classList.remove('cm-tast'); return; }
    /* Die Leisten werden gemessen, nicht geraten: oben die Kopfzeile,
       unten die Tableiste. Dazwischen steht der Chat fest. */
    var tb=document.querySelector('.topbar'), oben=0;
    try{ if(tb && getComputedStyle(tb).display!=='none') oben=Math.max(0,Math.round(tb.getBoundingClientRect().bottom)); }catch(e){}
    var nav=document.getElementById('clTabs'), unten=0;
    try{ if(nav && getComputedStyle(nav).display!=='none') unten=Math.round(nav.getBoundingClientRect().height); }catch(e){}
    r.style.setProperty('--cm-oben', oben+'px');
    r.style.setProperty('--cm-unten', unten+'px');
    /* Tastatur offen: die Tableiste liegt dann darunter. Dann zaehlt
       das wirklich sichtbare Fenster, damit das Schreibfeld sichtbar bleibt. */
    var vv=window.visualViewport;
    var tast = vv ? ((window.innerHeight - vv.height) > 140) : false;
    r.classList.toggle('cm-tast', tast);
    if(tast && vv) r.style.setProperty('--cm-hoehe', Math.max(220, Math.round(vv.height - oben))+'px');
  }
  var _hoeheAn=false;
  function hoeheUeberwachen(){
    if(_hoeheAn) return; _hoeheAn=true;
    var lauf=null;
    function nach(){
      clearTimeout(lauf);
      lauf=setTimeout(function(){
        var box=q('#cmFeed');
        var unten=box?(box.scrollHeight-box.scrollTop-box.clientHeight<160):false;
        passeHoehe();
        if(box&&unten) box.scrollTop=box.scrollHeight;
      },60);
    }
    window.addEventListener('resize',nach);
    window.addEventListener('orientationchange',nach);
    window.addEventListener('hashchange',nach);
    try{ var vv=window.visualViewport; if(vv){ vv.addEventListener('resize',nach); vv.addEventListener('scroll',nach); } }catch(e){}
    passeHoehe();
  }

  /* Wer weiter oben liest, wird von einer neuen Nachricht nicht mehr
     weggerissen — es kommt nur eine Pille zum Antippen. */
  function neuPille(an){
    var chat=q('#cmChat'); if(!chat) return;
    var p=chat.querySelector('.neupille');
    if(!an){ if(p) p.classList.remove('an'); return; }
    if(!p){
      p=document.createElement('button'); p.type='button'; p.className='neupille';
      p.innerHTML='↓ Neue Nachrichten';
      p.addEventListener('click',function(){ var b=q('#cmFeed'); if(b) b.scrollTop=b.scrollHeight; neuPille(false); });
      chat.appendChild(p);
    }
    p.classList.add('an');
  }

  /* Auf dem Handy gibt es kein Schweben mit der Maus. Statt einer Leiste,
     die dauernd mitlaeuft, hält man die Nachricht kurz gedrückt — dann
     kommt ein Menü von unten, wie man es aus jedem Messenger kennt. */
  var SHEET_ATTR=['data-rep','data-corrbtn','data-kibtn','data-pin','data-del'];
  var SHEET_WORT={'data-rep':'Antworten','data-corrbtn':'Korrigieren','data-kibtn':'KI-Vorschlag','data-pin':'Anpinnen','data-del':'Löschen'};
  function sheetZu(){ var o=document.querySelector('.cm-sheet-ov'); if(o) o.remove(); }
  function sheetAuf(mEl){
    if(!mEl) return;
    var id=mEl.getAttribute('data-id'); if(!id||!isRealId(id)) return;
    sheetZu();
    var m=null,i;
    for(i=0;i<curMsgs.length;i++){ if(curMsgs[i].id===id){ m=curMsgs[i]; break; } }
    var orig=mEl.querySelector('.msg-actions');
    var akt='';
    if(orig){
      var bs=orig.querySelectorAll('button');
      for(var k=0;k<bs.length;k++){
        var b=bs[k], attr=null;
        for(var j=0;j<SHEET_ATTR.length;j++){ if(b.hasAttribute(SHEET_ATTR[j])){ attr=SHEET_ATTR[j]; break; } }
        if(!attr) continue;
        var wort=SHEET_WORT[attr];
        if(attr==='data-pin'&&m&&m.pinned_at) wort='Anheftung lösen';
        akt+='<button type="button" class="'+(attr==='data-del'?'del':'')+'" data-k="'+k+'">'+b.innerHTML+'<span>'+E(wort)+'</span></button>';
      }
    }
    if(m&&m.kind==='text'&&m.body) akt+='<button type="button" data-kopie="1">'+svg(IC.copy,'ico-sm')+'<span>Text kopieren</span></button>';
    var reax=QUICK.map(function(em){ return '<button type="button" data-em="'+em+'">'+em+'</button>'; }).join('');
    var ov=document.createElement('div'); ov.className='cm-sheet-ov';
    ov.innerHTML='<div class="cm-sheet"><div class="griff"></div>'+
      '<div class="cs-vor"><b>'+E(vorname(m?m.author_name:''))+'</b> '+E(m?kurzText(m):'')+'</div>'+
      '<div class="cs-reax">'+reax+'</div>'+(akt?'<div class="cs-akt">'+akt+'</div>':'')+'</div>';
    document.body.appendChild(ov);
    ov.addEventListener('click',function(ev){
      if(ev.target===ov){ sheetZu(); return; }
      var em=ev.target.closest('[data-em]');
      if(em){ toggleReaction(id,em.getAttribute('data-em')); sheetZu(); return; }
      var kp=ev.target.closest('[data-kopie]');
      if(kp){ try{ if(navigator.clipboard) navigator.clipboard.writeText(m.body||''); }catch(e){} sheetZu(); return; }
      var kb=ev.target.closest('[data-k]');
      if(kb&&orig){ var o=orig.querySelectorAll('button')[+kb.getAttribute('data-k')]; sheetZu(); if(o) o.click(); return; }
    });
  }
  function halteBinden(box){
    if(box.__halt) return; box.__halt=true;
    var timer=null, sx=0, sy=0, ziel=null;
    function ab(){ if(timer){ clearTimeout(timer); timer=null; } ziel=null; }
    box.addEventListener('touchstart',function(ev){
      if(!istHandy()) return;
      if(!ev.touches||ev.touches.length!==1){ ab(); return; }
      var t=ev.target; if(!t.closest) return;
      if(t.closest('button,a,input,textarea,.rc span,.schnell,.quote,.corr')) return;
      var el=t.closest('.m'); if(!el) return;
      ziel=el; sx=ev.touches[0].clientX; sy=ev.touches[0].clientY;
      timer=setTimeout(function(){
        timer=null; if(!ziel) return;
        try{ if(navigator.vibrate) navigator.vibrate(12); }catch(e){}
        var z=ziel; z.classList.add('gehalten');
        setTimeout(function(){ z.classList.remove('gehalten'); },260);
        sheetAuf(z); ziel=null;
      },430);
    },{passive:true});
    box.addEventListener('touchmove',function(ev){
      if(!timer||!ev.touches||!ev.touches[0]) return;
      var t=ev.touches[0];
      if(Math.abs(t.clientX-sx)>10||Math.abs(t.clientY-sy)>10) ab();
    },{passive:true});
    box.addEventListener('touchend',ab,{passive:true});
    box.addEventListener('touchcancel',ab,{passive:true});
  }

  window.renderCommunity=renderCommunity;

  // Von außen (z. B. aus einer Benachrichtigung) einen Kanal öffnen
  window.communityOeffne=function(slug){
    zielSlug=slug;
    try{ if(window.go) window.go('community'); }catch(e){}
    setTimeout(function(){
      if(!zielSlug) return;
      var c=chanBy(zielSlug); if(!c){ return; }
      var s=zielSlug; zielSlug=null;
      if(!c.gefolgt) folgen(s,true);
      mode='channel'; cur=s; paintSidebar(); openChannel(s);
    },500);
  };
})();
