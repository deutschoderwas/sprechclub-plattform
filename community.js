/* ============================================================
   deutschoderwas club · Community-Chat (Discord-Stil)
   - Themen-Kanäle, Text- & Sprachnachrichten, Echtzeit
   - Nur für aktive Mitglieder (DB-RLS: has_full_access)
   Erwartet Globals aus konto.html: sb, user, profile, isActive, esc
   Rendert in #v-community. Einstieg: window.renderCommunity()
   ============================================================ */
(function () {
  'use strict';
  var sbc, ME, PROF, channels = [], cur = null, chan = null, isTeam = false, isChallenger = false, styled = false;
  var corr = {}, savedCorr = {}, myName = 'Mitglied';
  var rec = null, recChunks = [], recStart = 0, recTimer = null, recStream = null;

  // Globals robust holen: funktioniert auf konto.html (sb/user/profile) UND admin.html (sb/me)
  function getSb() { try { return window.sb || (typeof sb !== 'undefined' ? sb : null); } catch (e) { return null; } }
  function getUser() { try { return window.user || (typeof user !== 'undefined' ? user : null) || (typeof me !== 'undefined' ? me : null); } catch (e) { return null; } }
  function getProfile() { try { return window.profile || (typeof profile !== 'undefined' ? profile : null) || {}; } catch (e) { return {}; } }

  function E(s) { return (window.esc ? window.esc(s) : String(s == null ? '' : s).replace(/[&<>"]/g, function (c) { return ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]); })); }
  function root() { return document.getElementById('v-community'); }
  function q(sel) { var r = root(); return r ? r.querySelector(sel) : null; }
  function active() { return (typeof isActive === 'function' ? isActive() : true); }

  function injectStyle() {
    if (styled) return; styled = true;
    var css = `
    #v-community .cm{display:grid;grid-template-columns:250px 1fr 300px;gap:0;border:1px solid #EEE7D8;border-radius:16px;overflow:hidden;background:#fff;height:calc(100vh - 150px);min-height:560px;width:100%;box-shadow:0 2px 6px rgba(30,25,15,.05),0 16px 36px rgba(30,25,15,.08)}
    #v-community .cm-rail{background:#FBF8F1;border-left:1px solid #EEE7D8;padding:16px 15px;overflow-y:auto;display:flex;flex-direction:column;gap:16px}
    #v-community .cm-sprech{padding:14px 16px 0}
    #v-community .cm-sprech:empty{display:none}
    #v-community .cm-board{border:1px solid #ECE4D3;border-radius:16px;background:linear-gradient(180deg,#FFFDF8,#FFF9EE);box-shadow:0 6px 20px rgba(30,25,15,.05);padding:16px 16px 12px}
    #v-community .cm-board h4{margin:0 0 10px;font-family:'Space Grotesk',inherit;font-weight:700;font-size:14px;color:#211E18;display:flex;align-items:center;gap:7px}
    #v-community .cm-brow{display:flex;align-items:center;gap:10px;padding:7px 4px}
    #v-community .cm-brow+.cm-brow{border-top:1px solid #F2ECDF}
    #v-community .cm-brow .rk{flex:0 0 24px;width:24px;height:24px;border-radius:8px;display:flex;align-items:center;justify-content:center;font-family:'Space Grotesk',inherit;font-weight:700;font-size:12px;background:#F1EEE8;color:#8B8F96}
    #v-community .cm-brow.top1 .rk{background:linear-gradient(135deg,#FFE27A,#FFCE00);color:#7a5c00}
    #v-community .cm-brow.top2 .rk{background:#E7E9EC;color:#5A6169}
    #v-community .cm-brow.top3 .rk{background:#F6DDBE;color:#8a5a1e}
    #v-community .cm-brow .nm{flex:1;min-width:0;font-weight:600;font-size:13.5px;color:#22201B;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
    #v-community .cm-brow .pt{font-family:'Space Grotesk',inherit;font-weight:700;font-size:12.5px;color:#0E8577}
    #v-community .cm-board .empty{font-size:12.5px;color:#8B8F96;padding:6px 2px;line-height:1.5}
    #v-community .cm-side{background:#FBF8F1;border-right:1px solid #EEE7D8;padding:14px 10px;overflow-y:auto}
    @media(max-width:1100px){#v-community .cm{grid-template-columns:250px 1fr}#v-community .cm-rail{display:none}}
    #v-community .cm-side h4{font-size:10.5px;text-transform:uppercase;letter-spacing:.05em;color:#8B8F96;margin:8px 9px 8px;font-weight:700}
    #v-community .cm-ch{display:flex;align-items:center;gap:9px;width:100%;border:none;background:none;text-align:left;padding:8px 10px;border-radius:9px;cursor:pointer;font-family:inherit;font-size:14px;font-weight:600;color:#5A6169;margin-bottom:1px;transition:background .12s,color .12s}
    #v-community .cm-ch:hover{background:#F2ECDF;color:#191B1C}
    #v-community .cm-ch.on{background:#ECFBF7;color:#06403A}
    #v-community .cm-ch .e{font-size:15px;opacity:.85}
    #v-community .cm-ch.on .e{opacity:1}
    #v-community .cm-ch .lock{margin-left:6px;font-size:12px;opacity:.6}
    #v-community .cm-ch .cm-nm{flex:1;min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}
    #v-community .cm-ch .cm-unread{flex:0 0 auto;background:#DD0000;color:#fff;font-size:10.5px;font-weight:800;min-width:18px;height:18px;border-radius:9px;padding:0 5px;display:inline-flex;align-items:center;justify-content:center;margin-left:auto}
    #v-community .cm-main{display:flex;flex-direction:column;min-width:0;min-height:0;background:#fff}
    #v-community .cm-head{padding:13px 18px;border-bottom:1px solid #EEE7D8}
    #v-community .cm-head b{font-size:15.5px;font-weight:700}
    #v-community .cm-head span{display:block;font-size:12.5px;color:#8B8F96;margin-top:2px}
    #v-community .cm-msgs{flex:1;min-height:0;overflow-y:auto;padding:12px 16px;display:flex;flex-direction:column;gap:2px;background:#fff}
    #v-community .cm-row{display:flex;gap:11px;max-width:100%;padding:6px 8px;margin:0 -8px;border-radius:9px}
    #v-community .cm-row:hover{background:#FBF8F1}
    #v-community .cm-row.me{flex-direction:row}
    #v-community .cm-av{flex:0 0 36px;width:36px;height:36px;border-radius:50%;color:#fff;font-weight:700;font-size:13px;display:flex;align-items:center;justify-content:center;box-shadow:0 1px 3px rgba(30,25,15,.12)}
    #v-community .cm-col{min-width:0;flex:1}
    #v-community .cm-meta{font-size:12px;color:#8B8F96;margin-bottom:1px;font-weight:600;display:flex;align-items:baseline;gap:7px}
    #v-community .cm-meta > :first-child{color:#191B1C;font-weight:700;font-size:13.5px}
    #v-community .cm-time{font-weight:400;color:#8B8F96;font-size:11px}
    #v-community .cm-bub{background:none;border:none;padding:0;font-size:14px;line-height:1.5;color:#2b2f33;word-break:break-word}
    #v-community .cm-audio{display:flex;align-items:center;gap:8px}
    #v-community .cm-audio audio{height:34px}
    #v-community .cm-bub img.cm-img{max-width:260px;max-height:260px;width:auto;border-radius:12px;display:block;cursor:zoom-in;margin-top:4px;border:1px solid #EEE7D8}
    #v-community .cm-cap{margin-top:5px;font-size:14px;line-height:1.4}
    #v-community .cm-del{background:none;border:none;cursor:pointer;color:#c7c6bf;font-size:12px;margin-left:auto;padding:0 4px}
    #v-community .cm-del:hover{color:#DD0000}
    #v-community .cm-foot{padding:11px 14px;border-top:1px solid #EEE7D8;display:flex;gap:8px;align-items:center;background:#fff;position:relative}
    #v-community .cm-inp{flex:1;border:1px solid #EEE7D8;border-radius:12px;padding:10px 14px;font-size:14px;font-family:inherit;outline:none;resize:none;max-height:120px;background:#fff}
    #v-community .cm-inp:focus{border-color:#2DD4BF}
    #v-community .cm-btn{flex:0 0 auto;border:none;cursor:pointer;width:40px;height:40px;border-radius:10px;font-size:17px;display:flex;align-items:center;justify-content:center;font-family:inherit}
    #v-community .cm-send{background:linear-gradient(135deg,#2DD4BF,#14B8A6);color:#06403A}
    #v-community .cm-mic{background:#FBF8F1;color:#5A6169}
    #v-community .cm-img{background:#FBF8F1;color:#5A6169}
    #v-community .cm-emo{background:#FBF8F1}
    #v-community .cm-mic.rec{background:#DD0000;color:#fff;animation:cmPulse 1s infinite}
    @keyframes cmPulse{0%,100%{box-shadow:0 0 0 0 rgba(221,0,0,.5)}50%{box-shadow:0 0 0 10px rgba(221,0,0,0)}}
    #v-community .cm-readonly{flex:1;text-align:center;color:#8B8F96;font-size:13px;font-weight:600}
    #v-community .cm-empty{margin:auto;color:#8B8F96;text-align:center;font-size:14px}
    #v-community .cm-emopick{position:absolute;bottom:60px;left:12px;right:12px;background:#fff;border:1px solid #EEE7D8;border-radius:14px;box-shadow:0 10px 26px rgba(0,0,0,.12);padding:8px;display:flex;flex-wrap:wrap;gap:2px;max-height:190px;overflow-y:auto;z-index:30}
    #v-community .cm-emoi{border:none;background:none;cursor:pointer;font-size:22px;line-height:1;padding:5px 6px;border-radius:8px}
    #v-community .cm-emoi:hover{background:#FBF8F1}
    #v-community .cm-reax{display:flex;flex-wrap:wrap;gap:5px;margin-top:5px;align-items:center;position:relative}
    #v-community .cm-reax-chip{display:inline-flex;align-items:center;gap:4px;border:1px solid #EEE7D8;background:#fff;border-radius:20px;padding:2px 8px;font-size:13px;cursor:pointer;font-family:inherit;line-height:1.4}
    #v-community .cm-reax-chip span{font-weight:700;font-size:12px;color:#8B8F96}
    #v-community .cm-reax-chip.mine{background:#ECFBF7;border-color:#C3EBE3}
    #v-community .cm-reax-chip.mine span{color:#06403A}
    #v-community .cm-reax-add{border:none;background:none;cursor:pointer;font-size:15px;line-height:1;padding:2px 6px;border-radius:20px;opacity:.5}
    #v-community .cm-reax-add:hover{opacity:1;background:#FBF8F1}
    #v-community .cm-reax-pop{position:absolute;bottom:26px;left:0;background:#fff;border:1px solid #EEE7D8;border-radius:22px;box-shadow:0 8px 22px rgba(0,0,0,.14);padding:4px 6px;display:flex;gap:2px;z-index:40}
    #v-community .cm-reax-q{border:none;background:none;cursor:pointer;font-size:20px;line-height:1;padding:3px 4px;border-radius:8px;transition:transform .1s}
    #v-community .cm-reax-q:hover{background:#FBF8F1;transform:scale(1.15)}
    #v-community .cm-correct{border:none;background:none;cursor:pointer;color:#0E8577;font-size:11.5px;font-weight:700;padding:1px 6px;border-radius:6px;margin-left:2px}
    #v-community .cm-correct:hover{background:#ECFBF7}
    #v-community .cm-corrs{display:flex;flex-direction:column;gap:6px;margin-top:6px}
    #v-community .cm-corr{border:1px solid #C3EBE3;border-left:3px solid #2DD4BF;border-radius:11px;background:#F1FBF9;padding:9px 12px;max-width:560px}
    #v-community .cm-corr-h{font-size:11.5px;font-weight:800;color:#06403A;margin-bottom:5px}
    #v-community .cm-corr-txt{font-size:14px;font-weight:700;color:#06403A;line-height:1.5}
    #v-community .cm-corr-note{font-size:12.5px;color:#5A6169;margin-top:6px;padding-top:6px;border-top:1px dashed #C3EBE3;line-height:1.45}
    #v-community .cm-corr-act{margin-top:8px}
    #v-community .cm-corr-save{font-size:11.5px;font-weight:700;border:1px solid #C3EBE3;background:#fff;color:#06403A;border-radius:8px;padding:5px 10px;cursor:pointer;font-family:inherit}
    #v-community .cm-corr-save:hover{background:#ECFBF7}
    #v-community .cm-corr-save.done{background:#ECFBF7;color:#0E8577;cursor:default}
    #v-community .cm-corrform{margin-top:7px;border:1px solid #C3EBE3;border-radius:11px;background:#fff;padding:10px 12px;max-width:560px}
    #v-community .cm-corrform label{font-size:11px;font-weight:700;color:#8B8F96;text-transform:uppercase;letter-spacing:.04em;display:block;margin-bottom:4px}
    #v-community .cm-corrform textarea,#v-community .cm-corrform input{width:100%;border:1px solid #EEE7D8;border-radius:9px;padding:8px 10px;font-family:inherit;font-size:13.5px;outline:none;margin-bottom:8px;resize:vertical;line-height:1.4}
    #v-community .cm-corrform textarea:focus,#v-community .cm-corrform input:focus{border-color:#2DD4BF}
    #v-community .cm-corrform .r{display:flex;gap:8px;justify-content:flex-end}
    #v-community .cm-corrform button{font-size:12.5px;font-weight:700;border-radius:8px;padding:7px 13px;cursor:pointer;border:1px solid #EEE7D8;background:#fff;font-family:inherit}
    #v-community .cm-corrform button.save{background:linear-gradient(135deg,#2DD4BF,#14B8A6);color:#06403A;border-color:transparent}
    @media(max-width:640px){#v-community .cm{grid-template-columns:1fr;height:auto}#v-community .cm-side{display:flex;gap:6px;overflow-x:auto;border-right:none;border-bottom:1px solid #EEE7D8}#v-community .cm-side h4{display:none}#v-community .cm-ch{white-space:nowrap}#v-community .cm-msgs{height:54vh}}
    `;
    var st = document.createElement('style'); st.textContent = css; document.head.appendChild(st);
  }

  function gateHtml() {
    return '<div class="pagehead"><h1>💬 Community</h1><p>Chatte mit anderen Mitgliedern — Text &amp; Sprachnachrichten.</p></div>' +
      '<div class="card" style="text-align:center;padding:34px 22px;border:2px solid #f5b942;background:#fff8ec">' +
      '<div style="font-size:40px">🔒</div>' +
      '<h2 style="margin:8px 0 6px">Nur für aktive Mitglieder</h2>' +
      '<p class="muted" style="max-width:420px;margin:0 auto 16px">Die Community ist exklusiv für Mitglieder mit aktivem Guthaben oder Pass. Sichere dir ein Paket und sei dabei!</p>' +
      '<a class="btn btn-primary" href="index.html#preise" style="display:inline-block">Pakete ansehen →</a></div>';
  }

  function initials(n) { n = (n || 'Mitglied').trim(); var p = n.split(/\s+/); return ((p[0] || '?')[0] + (p[1] ? p[1][0] : '')).toUpperCase(); }
  function timeStr(t) { var d = new Date(t); return d.toLocaleTimeString('de-DE', { hour: '2-digit', minute: '2-digit' }); }

  // ---- Ungelesen-Zähler pro Kanal (individuell pro Mitglied, gespeichert im Browser) ----
  var unread = {}, badgeChan = null;
  function seenKey() { return 'cm_seen_' + (ME && ME.id ? ME.id : 'x'); }
  function loadSeen() { try { return JSON.parse(localStorage.getItem(seenKey()) || '{}') || {}; } catch (e) { return {}; } }
  function saveSeen(o) { try { localStorage.setItem(seenKey(), JSON.stringify(o)); } catch (e) {} }
  function markSeen(slug) { var o = loadSeen(); o[slug] = Date.now(); saveSeen(o); unread[slug] = 0; }
  async function computeUnread() {
    unread = {};
    try {
      var since = new Date(Date.now() - 45 * 24 * 3600 * 1000).toISOString();
      var res = await sbc.from('community_messages').select('channel,created_at,user_id').is('deleted_at', null).gte('created_at', since).order('created_at', { ascending: false }).limit(800);
      var rows = res.data || [], seen = loadSeen();
      rows.forEach(function (m) {
        if (m.user_id === ME.id) return;
        if (new Date(m.created_at).getTime() > (seen[m.channel] || 0)) unread[m.channel] = (unread[m.channel] || 0) + 1;
      });
    } catch (e) {}
  }
  function badgeHtml(slug) { var n = unread[slug] || 0; return n > 0 ? '<span class="cm-unread">' + (n > 99 ? '99+' : n) + '</span>' : ''; }
  function updateBadge(slug) {
    var btn = root() && root().querySelector('.cm-ch[data-ch="' + slug + '"]'); if (!btn) return;
    var b = btn.querySelector('.cm-unread'), n = unread[slug] || 0;
    if (n <= 0) { if (b) b.remove(); return; }
    if (!b) { b = document.createElement('span'); b.className = 'cm-unread'; btn.insertBefore(b, btn.querySelector('.lock')); }
    b.textContent = n > 99 ? '99+' : n;
  }
  function subscribeBadges() {
    if (badgeChan) return;
    badgeChan = sbc.channel('comm-badges')
      .on('postgres_changes', { event: 'INSERT', schema: 'public', table: 'community_messages' }, function (p) {
        var m = p.new; if (!m || m.deleted_at || m.user_id === ME.id || m.channel === cur) return;
        unread[m.channel] = (unread[m.channel] || 0) + 1; updateBadge(m.channel);
      })
      .subscribe();
  }

  async function renderCommunity() {
    injectStyle();
    var r = root(); if (!r) return;
    sbc = getSb(); ME = getUser(); PROF = getProfile();
    myName = (PROF && PROF.name) || 'Mitglied';
    r.innerHTML = '<div class="pagehead"><h1>💬 Community</h1></div><div class="card">Lädt…</div>';
    if (!sbc || !ME) { r.innerHTML = gateHtml(); return; }
    // Zugang serverseitig prüfen (maßgeblich)
    var access = false;
    try { var a = await sbc.rpc('has_full_access'); access = !!a.data; } catch (e) { access = active(); }
    if (!access) { stopAll(); r.innerHTML = gateHtml(); return; }
    // eigene Rolle (für Team-Kanäle)
    try { var pr = await sbc.from('profiles').select('is_admin,is_teacher,is_challenger').eq('id', ME.id).single(); isTeam = !!(pr.data && (pr.data.is_admin || pr.data.is_teacher)); isChallenger = !!(pr.data && pr.data.is_challenger); } catch (e) { isTeam = false; isChallenger = false; }
    // Kanäle (Challenge-Kanal nur für Challenger/Team sichtbar)
    var ch = await sbc.from('community_channels').select('slug,name,emoji,description,team_only,challenge_only,sort_order').eq('is_active', true).order('sort_order');
    channels = (ch.data || []).filter(function (c) { return (!c.challenge_only) || isChallenger || isTeam; });
    if (!channels.length) { r.innerHTML = '<div class="pagehead"><h1>💬 Community</h1></div><div class="card">Noch keine Kanäle.</div>'; return; }
    if (!cur || !channels.some(function (c) { return c.slug === cur; })) cur = channels[0].slug;
    await computeUnread();
    r.innerHTML = shellHtml();
    bindShell();
    subscribeBadges();
    mountExtras();
    await openChannel(cur);
  }

  // Feinschliff: Sprech-Challenge-Banner + Buddy-Widget + Wochen-Bestenliste in den Hub holen
  function mountExtras(){
    try{ if(window.renderSprechBanner) window.renderSprechBanner('cmSprech'); }catch(e){}
    try{ if(window.renderBuddyWidget) window.renderBuddyWidget('cmBuddy'); }catch(e){}
    try{ renderMiniBoard(); }catch(e){}
  }
  async function renderMiniBoard(){
    var host = document.getElementById('cmBoard'); if(!host) return;
    var rows=[];
    try{ var r=await sbc.rpc('xp_leaderboard_week'); rows=(r&&r.data)||[]; }catch(e){}
    var inner='<h4>🏅 Aktivste diese Woche</h4>';
    if(!rows.length){ inner+='<div class="empty">Diese Woche noch ruhig — schreib etwas und sei ganz vorn! ✨</div>'; }
    else{ inner+=rows.slice(0,5).map(function(row,i){ var rank=i+1; var top=rank<=3?' top'+rank:''; var medal=rank===1?'🥇':rank===2?'🥈':rank===3?'🥉':rank; return '<div class="cm-brow'+top+'"><span class="rk">'+medal+'</span><span class="nm">'+E(row.name||'Mitglied')+'</span><span class="pt">'+(row.points||0)+' XP</span></div>'; }).join(''); }
    host.innerHTML=inner;
  }
  // Von der Sprech-Challenge: Antwort direkt als Sprachnachricht aufnehmen
  var challengePending = null;
  window.startSprechAnswer = function(promptText, onDone){
    var box = q('#cmMsgs');
    if(!box || !channels.length){ if(typeof go==='function') go('community'); else location.hash='community'; return; }
    challengePending = onDone || null;
    try{ toggleRec(); }catch(e){}
    var foot = q('#cmFoot'); if(foot){ try{ foot.scrollIntoView({block:'nearest'}); }catch(e){} }
  };

  function shellHtml() {
    return '<div class="pagehead"><h1>💬 Community</h1><p>Chatte mit anderen Mitgliedern — Text &amp; Sprachnachrichten, in Echtzeit.</p></div>' +
      '<div class="cm">' +
        '<div class="cm-side"><h4>Kanäle</h4>' +
          channels.map(function (c) {
            return '<button class="cm-ch' + (c.slug === cur ? ' on' : '') + '" data-ch="' + E(c.slug) + '">' +
              '<span class="e">' + E(c.emoji || '#') + '</span><span class="cm-nm">' + E(c.name) + '</span>' +
              badgeHtml(c.slug) +
              (c.team_only ? '<span class="lock" title="Nur Team postet">📣</span>' : '') + '</button>';
          }).join('') +
        '</div>' +
        '<div class="cm-main">' +
          '<div class="cm-sprech" id="cmSprech"></div>' +
          '<div class="cm-head" id="cmHead"></div>' +
          '<div class="cm-msgs" id="cmMsgs"></div>' +
          '<div class="cm-foot" id="cmFoot"></div>' +
        '</div>' +
        '<div class="cm-rail">' +
          '<div id="cmBuddy"></div>' +
          '<div class="cm-board" id="cmBoard"><h4>🏅 Aktivste diese Woche</h4><div class="empty">Lädt…</div></div>' +
        '</div>' +
      '</div>';
  }

  function bindShell() {
    Array.prototype.forEach.call(root().querySelectorAll('.cm-ch'), function (b) {
      b.addEventListener('click', function () { var s = b.getAttribute('data-ch'); if (s !== cur) { cur = s; root().querySelectorAll('.cm-ch').forEach(function (x) { x.classList.toggle('on', x.getAttribute('data-ch') === cur); }); openChannel(cur); } });
    });
  }

  var channel = null;
  async function openChannel(slug) {
    var c = channels.filter(function (x) { return x.slug === slug; })[0]; if (!c) return;
    markSeen(slug); updateBadge(slug);
    var head = q('#cmHead'); if (head) head.innerHTML = '<b>' + E(c.emoji || '') + ' ' + E(c.name) + '</b><span>' + E(c.description || '') + '</span>';
    renderFoot(c);
    var box = q('#cmMsgs'); if (box) box.innerHTML = '<div class="cm-empty">Lädt…</div>';
    // Nachrichten laden
    var res = await sbc.from('community_messages').select('id,user_id,kind,body,audio_path,audio_secs,image_path,author_name,created_at').eq('channel', slug).is('deleted_at', null).order('created_at').limit(200);
    var rows = res.data || [];
    await hydrateAudio(rows);
    reax = {}; corr = {};
    await loadReactions(rows.map(function (m) { return m.id; }));
    await loadCorrections(rows.map(function (m) { return m.id; }));
    renderMsgs(rows);
    subscribe(slug);
  }

  async function hydrateAudio(rows) {
    // Audio-URLs
    var apaths = rows.filter(function (m) { return m.kind === 'audio' && m.audio_path; }).map(function (m) { return m.audio_path; });
    if (apaths.length) {
      try {
        var s = await sbc.storage.from('community-audio').createSignedUrls(apaths, 3600);
        var map = {}; (s.data || []).forEach(function (x) { if (x.path && x.signedUrl) map[x.path] = x.signedUrl; });
        rows.forEach(function (m) { if (m.kind === 'audio' && map[m.audio_path]) m._url = map[m.audio_path]; });
      } catch (e) {}
    }
    // Bild-URLs
    var ipaths = rows.filter(function (m) { return m.kind === 'image' && m.image_path; }).map(function (m) { return m.image_path; });
    if (ipaths.length) {
      try {
        var si = await sbc.storage.from('community-image').createSignedUrls(ipaths, 3600);
        var mi = {}; (si.data || []).forEach(function (x) { if (x.path && x.signedUrl) mi[x.path] = x.signedUrl; });
        rows.forEach(function (m) { if (m.kind === 'image' && mi[m.image_path]) m._url = mi[m.image_path]; });
      } catch (e) {}
    }
  }

  function avColor(name) { var s = String(name || '?'), h = 0; for (var i = 0; i < s.length; i++) { h = (h * 31 + s.charCodeAt(i)) >>> 0; } return 'hsl(' + (h % 360) + ',52%,72%)'; }
  // ---- Reaktionen (WhatsApp-Stil) ----
  var QUICK = ['👍','❤️','😂','😮','😢','🙏','🎉','🔥'];
  var reax = {};
  function isRealId(id){ return !!id && String(id).indexOf('tmp-') !== 0 && String(id).indexOf('up-') !== 0; }
  async function loadReactions(ids){
    ids = (ids || []).filter(isRealId);
    if (!ids.length) return;
    try {
      var res = await sbc.from('community_reactions').select('message_id,emoji,user_id').in('message_id', ids);
      var map = {}; ids.forEach(function(id){ map[id] = {}; });
      (res.data || []).forEach(function(r){
        var mm = map[r.message_id] || (map[r.message_id] = {});
        var e = mm[r.emoji] || (mm[r.emoji] = { count:0, mine:false });
        e.count++; if (r.user_id === ME.id) e.mine = true;
      });
      ids.forEach(function(id){ reax[id] = map[id] || {}; });
    } catch (e) {}
  }
  function reaxBarHtml(id){
    if (!isRealId(id)) return '';
    var r = reax[id] || {};
    var chips = Object.keys(r).map(function(em){
      var d = r[em];
      return '<button type="button" class="cm-reax-chip' + (d.mine ? ' mine' : '') + '" data-reax="' + E(id) + '" data-emoji="' + E(em) + '">' + em + '<span>' + d.count + '</span></button>';
    }).join('');
    return '<div class="cm-reax" data-reaxbar="' + E(id) + '">' + chips +
      '<button type="button" class="cm-reax-add" data-reaxadd="' + E(id) + '" title="Reagieren">🙂</button>' +
      '<span class="cm-reax-pop" data-reaxpop="' + E(id) + '" style="display:none">' +
        QUICK.map(function(em){ return '<button type="button" class="cm-reax-q" data-reax="' + E(id) + '" data-emoji="' + em + '">' + em + '</button>'; }).join('') +
      '</span></div>';
  }
  function updateReaxBar(id){
    var bar = root() && root().querySelector('[data-reaxbar="' + id + '"]'); if (!bar) return;
    var tmp = document.createElement('div'); tmp.innerHTML = reaxBarHtml(id);
    var nb = tmp.firstChild; if (nb && bar.parentNode) bar.parentNode.replaceChild(nb, bar);
  }
  function ensureReaxBar(node, id){
    if (!node || !isRealId(id)) return;
    var col = node.querySelector('.cm-col'); if (!col) return;
    if (col.querySelector('.cm-reax')) return;
    reax[id] = reax[id] || {};
    col.insertAdjacentHTML('beforeend', reaxBarHtml(id));
  }
  async function toggleReaction(id, emoji){
    if (!isRealId(id) || !emoji) return;
    var cur0 = reax[id] && reax[id][emoji];
    var mine = cur0 && cur0.mine;
    try {
      if (mine) { await sbc.from('community_reactions').delete().eq('message_id', id).eq('user_id', ME.id).eq('emoji', emoji); }
      else { await sbc.from('community_reactions').insert({ message_id: id, emoji: emoji }); }
    } catch (e) {}
    await loadReactions([id]); updateReaxBar(id);
  }
  var reaxRefreshT = null;
  function refreshVisibleReactions(){
    if (reaxRefreshT) clearTimeout(reaxRefreshT);
    reaxRefreshT = setTimeout(async function(){
      var box = q('#cmMsgs'); if (!box) return;
      var ids = [];
      Array.prototype.forEach.call(box.querySelectorAll('.cm-row'), function(rw){ var id = rw.getAttribute('data-id'); if (isRealId(id)) ids.push(id); });
      if (!ids.length) return;
      await loadReactions(ids); ids.forEach(updateReaxBar);
    }, 180);
  }
  function onReaxClick(ev){
    var t = ev.target; if (!t || !t.closest) return;
    var add = t.closest('[data-reaxadd]');
    if (add) { ev.stopPropagation(); var id = add.getAttribute('data-reaxadd'); var pop = root().querySelector('[data-reaxpop="' + id + '"]');
      var show = pop && pop.style.display === 'none';
      Array.prototype.forEach.call(root().querySelectorAll('.cm-reax-pop'), function(p){ p.style.display = 'none'; });
      if (pop) pop.style.display = show ? 'flex' : 'none'; return; }
    var re = t.closest('[data-reax]');
    if (re) { ev.stopPropagation(); var mid = re.getAttribute('data-reax'), em = re.getAttribute('data-emoji');
      var pop2 = root().querySelector('[data-reaxpop="' + mid + '"]'); if (pop2) pop2.style.display = 'none';
      toggleReaction(mid, em); return; }
  }

  function msgHtml(m) {
    var me = m.user_id === ME.id;
    var body;
    if (m.kind === 'audio') {
      body = '<div class="cm-audio">🎧 ' + (m._url ? '<audio controls preload="none" src="' + E(m._url) + '"></audio>' : '<span class="muted">Sprachnachricht</span>') + (m.audio_secs ? '<span class="muted">' + Math.round(m.audio_secs) + 's</span>' : '') + '</div>';
    } else if (m.kind === 'image') {
      body = (m._url ? '<a href="' + E(m._url) + '" target="_blank" rel="noopener"><img class="cm-img" src="' + E(m._url) + '" alt="Bild" loading="lazy"></a>' : '<span class="muted">📷 Bild</span>') + (m.body ? '<div class="cm-cap">' + E(m.body) + '</div>' : '');
    } else {
      body = E(m.body || '');
    }
    var canDel = me; // (Admin-Löschung via DB)
    return '<div class="cm-row' + (me ? ' me' : '') + '" data-id="' + E(m.id) + '">' +
      '<div class="cm-av" style="background:' + avColor(m.author_name) + '">' + E(initials(m.author_name)) + '</div>' +
      '<div class="cm-col"><div class="cm-meta">' + E(m.author_name || 'Mitglied') + '<span class="cm-time">' + timeStr(m.created_at) + '</span>' +
      (canDel ? '<button class="cm-del" data-del="' + E(m.id) + '" title="Löschen">✕</button>' : '') + correctBtnHtml(m) + '</div>' +
      '<div class="cm-bub">' + body + '</div>' + reaxBarHtml(m.id) + corrListHtml(m.id) + '</div></div>';
  }

  function renderMsgs(rows) {
    var box = q('#cmMsgs'); if (!box) return;
    if (!rows.length) { box.innerHTML = '<div class="cm-empty">Noch keine Nachrichten — schreib die erste! ✍️</div>'; return; }
    box.innerHTML = rows.map(msgHtml).join('');
    box.scrollTop = box.scrollHeight;
    Array.prototype.forEach.call(box.querySelectorAll('[data-del]'), function (b) {
      b.addEventListener('click', function () { delMsg(b.getAttribute('data-del')); });
    });
    if (!box.__reaxBound) { box.__reaxBound = true; box.addEventListener('click', onReaxClick); box.addEventListener('click', onCorrClick);
      if (!window.__cmReaxDoc) { window.__cmReaxDoc = true; document.addEventListener('click', function () { Array.prototype.forEach.call(document.querySelectorAll('#v-community .cm-reax-pop'), function (p) { p.style.display = 'none'; }); }); }
    }
  }

  function appendMsg(m) {
    var box = q('#cmMsgs'); if (!box) return;
    var near = box.scrollHeight - box.scrollTop - box.clientHeight < 120;
    if (box.querySelector('.cm-empty')) box.innerHTML = '';
    box.insertAdjacentHTML('beforeend', msgHtml(m));
    var last = box.lastElementChild;
    if (last) { var db = last.querySelector('[data-del]'); if (db) db.addEventListener('click', function () { delMsg(db.getAttribute('data-del')); }); }
    if (near || m.user_id === ME.id) box.scrollTop = box.scrollHeight;
  }

  function subscribe(slug) {
    if (channel) { try { sbc.removeChannel(channel); } catch (e) {} channel = null; }
    channel = sbc.channel('comm:' + slug)
      .on('postgres_changes', { event: 'INSERT', schema: 'public', table: 'community_messages', filter: 'channel=eq.' + slug }, function (p) {
        var m = p.new; if (!m || m.deleted_at) return;
        if (m.user_id === ME.id && document.querySelector('[data-id="' + m.id + '"]')) return; // schon optimistisch da
        if ((m.kind === 'audio' && m.audio_path) || (m.kind === 'image' && m.image_path)) { hydrateAudio([m]).then(function () { appendMsg(m); }); } else { appendMsg(m); }
      })
      .on('postgres_changes', { event: 'UPDATE', schema: 'public', table: 'community_messages', filter: 'channel=eq.' + slug }, function (p) {
        if (p.new && p.new.deleted_at) { var n = document.querySelector('[data-id="' + p.new.id + '"]'); if (n) n.remove(); }
      })
      .on('postgres_changes', { event: 'INSERT', schema: 'public', table: 'community_reactions' }, function (p) {
        var m = p.new; if (!m || !m.message_id) return;
        if (document.querySelector('[data-id="' + m.message_id + '"]')) { loadReactions([m.message_id]).then(function () { updateReaxBar(m.message_id); }); }
      })
      .on('postgres_changes', { event: 'DELETE', schema: 'public', table: 'community_reactions' }, function () { refreshVisibleReactions(); })
      .on('postgres_changes', { event: 'INSERT', schema: 'public', table: 'community_corrections', filter: 'channel=eq.' + slug }, function (p) { var c = p.new; if (!c || c.deleted_at) return; addCorrectionLive(c); })
      .on('postgres_changes', { event: 'UPDATE', schema: 'public', table: 'community_corrections', filter: 'channel=eq.' + slug }, function (p) { if (p.new && p.new.deleted_at) removeCorrectionLive(p.new.id); })
      .subscribe();
  }

  function insertEmoji(ch) {
    var inp = q('#cmInp'); if (!inp) return;
    var s = inp.selectionStart, e = inp.selectionEnd;
    if (s == null) { s = e = inp.value.length; }
    inp.value = inp.value.slice(0, s) + ch + inp.value.slice(e);
    var pos = s + ch.length; try { inp.selectionStart = inp.selectionEnd = pos; } catch (x) {}
    inp.focus();
    try { inp.dispatchEvent(new Event('input')); } catch (x) {}
  }

  function renderFoot(c) {
    var foot = q('#cmFoot'); if (!foot) return;
    if (c.team_only && !isTeam) { foot.innerHTML = '<div class="cm-readonly">📣 Nur das Team postet hier — du bekommst alle Neuigkeiten mit.</div>'; return; }
    foot.innerHTML = '<button class="cm-btn cm-mic" id="cmMic" title="Sprachnachricht aufnehmen">🎤</button>' +
      '<button class="cm-btn cm-img" id="cmImg" title="Bild senden">📷</button>' +
      '<button class="cm-btn cm-emo" id="cmEmo" title="Emoji">😊</button>' +
      '<input type="file" id="cmFile" accept="image/*" style="display:none">' +
      '<div class="cm-emopick" id="cmEmoPick" style="display:none"></div>' +
      '<textarea class="cm-inp" id="cmInp" rows="1" placeholder="Nachricht schreiben…"></textarea>' +
      '<button class="cm-btn cm-send" id="cmSend" title="Senden">➤</button>';
    var inp = q('#cmInp'), send = q('#cmSend'), mic = q('#cmMic'), imgBtn = q('#cmImg'), file = q('#cmFile'), emo = q('#cmEmo'), pick = q('#cmEmoPick');
    function autoGrow() { inp.style.height = 'auto'; inp.style.height = Math.min(120, inp.scrollHeight) + 'px'; }
    inp.addEventListener('input', autoGrow);
    inp.addEventListener('keydown', function (e) { if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); sendText(); } });
    send.addEventListener('click', sendText);
    mic.addEventListener('click', toggleRec);
    if (imgBtn && file) { imgBtn.addEventListener('click', function () { file.click(); }); file.addEventListener('change', function () { if (file.files && file.files[0]) uploadImage(file.files[0]); file.value = ''; }); }
    if (emo && pick) {
      pick.innerHTML = '😀 😃 😄 😁 😆 😅 😂 🤣 🙂 😉 😊 😍 🥰 😘 😗 😜 🤪 🤗 🤔 😎 🥳 😴 🙄 😮 😳 🥺 😢 😭 😤 😡 👍 👎 👏 🙏 💪 🙌 👋 🤝 ✌️ 🔥 🎉 ⭐ 💯 ❤️ 🧡 💛 💚 💙 💜 ✅ ❌'.split(' ').map(function (x) { return '<button type="button" class="cm-emoi">' + x + '</button>'; }).join('');
      emo.addEventListener('click', function (ev) { ev.stopPropagation(); pick.style.display = (pick.style.display === 'none' ? 'flex' : 'none'); });
      pick.addEventListener('click', function (ev) { ev.stopPropagation(); var t = ev.target; if (t && t.classList && t.classList.contains('cm-emoi')) insertEmoji(t.textContent); });
      if (!window.__cmEmoDoc) { window.__cmEmoDoc = true; document.addEventListener('click', function () { var p = document.getElementById('cmEmoPick'); if (p) p.style.display = 'none'; }); }
    }
  }

  // Admin (Julia) über neue Nachrichten informieren – serverseitig gebündelt (max. 1 Mail/Kanal/Stunde).
  async function notifyAdminNewMsg(channel) {
    try {
      var s = await sbc.auth.getSession();
      var tok = s && s.data && s.data.session && s.data.session.access_token;
      if (!tok) return;
      fetch('/api/notify-community', { method: 'POST', headers: { 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + tok }, body: JSON.stringify({ channel: channel }) }).catch(function () {});
    } catch (e) {}
  }

  async function sendText() {
    var inp = q('#cmInp'); if (!inp) return; var t = inp.value.trim(); if (!t) return;
    inp.value = ''; inp.style.height = 'auto';
    var name = (PROF && PROF.name) || 'Mitglied';
    var optimistic = { id: 'tmp-' + Date.now(), user_id: ME.id, kind: 'text', body: t, author_name: name, created_at: new Date().toISOString() };
    appendMsg(optimistic);
    var res = await sbc.from('community_messages').insert({ channel: cur, kind: 'text', body: t, author_name: name }).select('id').single();
    var tmp = document.querySelector('[data-id="tmp-' + optimistic.id.slice(4) + '"]');
    if (res.error) { if (tmp) tmp.querySelector('.cm-bub').insertAdjacentHTML('beforeend', ' <span style="color:#DD0000;font-size:12px">⚠︎ nicht gesendet</span>'); return; }
    // tmp-Id durch echte Id ersetzen, damit Realtime-Echo nicht dupliziert
    var node = document.querySelector('[data-id="' + optimistic.id + '"]'); if (node && res.data) { node.setAttribute('data-id', res.data.id); ensureReaxBar(node, res.data.id); }
    notifyAdminNewMsg(cur);
  }

  // ---- Audio-Aufnahme ----
  async function toggleRec() {
    var mic = q('#cmMic'); if (!mic) return;
    if (rec && rec.state === 'recording') { stopRec(); return; }
    if (!navigator.mediaDevices || !window.MediaRecorder) { alert('Dein Browser unterstützt keine Sprachaufnahme.'); return; }
    try {
      recStream = await navigator.mediaDevices.getUserMedia({ audio: true });
    } catch (e) { alert('Mikrofon-Zugriff nötig, um Sprachnachrichten zu senden.'); return; }
    recChunks = []; recStart = Date.now();
    var mime = MediaRecorder.isTypeSupported('audio/webm') ? 'audio/webm' : (MediaRecorder.isTypeSupported('audio/mp4') ? 'audio/mp4' : '');
    rec = new MediaRecorder(recStream, mime ? { mimeType: mime } : undefined);
    rec.ondataavailable = function (e) { if (e.data && e.data.size) recChunks.push(e.data); };
    rec.onstop = uploadRec;
    rec.start();
    mic.classList.add('rec'); mic.textContent = '⏹';
    var inp = q('#cmInp'); if (inp) inp.placeholder = 'Aufnahme läuft… zum Senden auf ⏹ tippen';
  }
  function stopRec() { try { rec.stop(); } catch (e) {} if (recStream) { recStream.getTracks().forEach(function (t) { t.stop(); }); recStream = null; } var mic = q('#cmMic'); if (mic) { mic.classList.remove('rec'); mic.textContent = '🎤'; } var inp = q('#cmInp'); if (inp) inp.placeholder = 'Nachricht schreiben…'; }
  async function uploadRec() {
    var secs = Math.max(1, Math.round((Date.now() - recStart) / 1000));
    if (secs < 1 || !recChunks.length) return;
    var type = (rec && rec.mimeType) || 'audio/webm';
    var ext = type.indexOf('mp4') >= 0 ? 'mp4' : 'webm';
    var blob = new Blob(recChunks, { type: type });
    if (blob.size > 10 * 1024 * 1024) { alert('Aufnahme zu lang (max. 10 MB).'); return; }
    var path = ME.id + '/' + Date.now() + '.' + ext;
    var name = (PROF && PROF.name) || 'Mitglied';
    var box = q('#cmMsgs'); var loadId = 'up-' + Date.now();
    if (box) { box.insertAdjacentHTML('beforeend', '<div class="cm-row me" data-id="' + loadId + '"><div class="cm-av">' + E(initials(name)) + '</div><div><div class="cm-meta">' + E(name) + '</div><div class="cm-bub">🎤 wird gesendet…</div></div></div>'); box.scrollTop = box.scrollHeight; }
    var up = await sbc.storage.from('community-audio').upload(path, blob, { contentType: type, upsert: false });
    var ln = document.querySelector('[data-id="' + loadId + '"]');
    if (up.error) { if (ln) ln.querySelector('.cm-bub').innerHTML = '⚠︎ Audio nicht gesendet'; return; }
    var res = await sbc.from('community_messages').insert({ channel: cur, kind: 'audio', audio_path: path, audio_secs: secs, author_name: name }).select('id').single();
    if (res.error) { if (ln) ln.querySelector('.cm-bub').innerHTML = '⚠︎ nicht gesendet'; return; }
    var sg = await sbc.storage.from('community-audio').createSignedUrl(path, 3600);
    if (ln) { ln.setAttribute('data-id', res.data.id); ln.querySelector('.cm-bub').innerHTML = '<div class="cm-audio">🎧 <audio controls preload="none" src="' + E(sg.data ? sg.data.signedUrl : '') + '"></audio><span class="muted">' + secs + 's</span></div>'; ensureReaxBar(ln, res.data.id); }
    notifyAdminNewMsg(cur);
    if (challengePending) { try { challengePending(res.data && res.data.id); } catch (e) {} challengePending = null; }
  }

  // ---- Bild senden ----
  async function uploadImage(fileObj) {
    if (!fileObj) return;
    if (!/^image\//.test(fileObj.type || '')) { alert('Bitte ein Bild auswählen.'); return; }
    if (fileObj.size > 6 * 1024 * 1024) { alert('Bild zu groß (max. 6 MB).'); return; }
    var ext = ((fileObj.name || '').split('.').pop() || 'jpg').toLowerCase().replace(/[^a-z0-9]/g, '') || 'jpg';
    var path = ME.id + '/' + Date.now() + '.' + ext;
    var name = (PROF && PROF.name) || 'Mitglied';
    var box = q('#cmMsgs'); var loadId = 'up-' + Date.now();
    if (box) { box.insertAdjacentHTML('beforeend', '<div class="cm-row me" data-id="' + loadId + '"><div class="cm-av" style="background:' + avColor(name) + '">' + E(initials(name)) + '</div><div class="cm-col"><div class="cm-meta">' + E(name) + '</div><div class="cm-bub">📷 wird gesendet…</div></div></div>'); box.scrollTop = box.scrollHeight; }
    var up = await sbc.storage.from('community-image').upload(path, fileObj, { contentType: fileObj.type, upsert: false });
    var ln = document.querySelector('[data-id="' + loadId + '"]');
    if (up.error) { if (ln) ln.querySelector('.cm-bub').innerHTML = '⚠︎ Bild nicht gesendet'; return; }
    var res = await sbc.from('community_messages').insert({ channel: cur, kind: 'image', image_path: path, author_name: name }).select('id').single();
    if (res.error) { if (ln) ln.querySelector('.cm-bub').innerHTML = '⚠︎ nicht gesendet'; return; }
    var sg = await sbc.storage.from('community-image').createSignedUrl(path, 3600);
    if (ln) { ln.setAttribute('data-id', res.data.id); ln.querySelector('.cm-bub').innerHTML = (sg.data ? '<a href="' + E(sg.data.signedUrl) + '" target="_blank" rel="noopener"><img class="cm-img" src="' + E(sg.data.signedUrl) + '" alt="Bild"></a>' : '📷 Bild'); ensureReaxBar(ln, res.data.id); }
    notifyAdminNewMsg(cur);
  }

  async function delMsg(id) {
    if (!id || id.indexOf('tmp-') === 0 || id.indexOf('up-') === 0) return;
    if (!confirm('Diese Nachricht löschen?')) return;
    var res = await sbc.from('community_messages').update({ deleted_at: new Date().toISOString() }).eq('id', id);
    if (!res.error) { var n = document.querySelector('[data-id="' + id + '"]'); if (n) n.remove(); }
  }

  function stopAll() { if (channel) { try { sbc.removeChannel(channel); } catch (e) {} channel = null; } if (badgeChan) { try { sbc.removeChannel(badgeChan); } catch (e) {} badgeChan = null; } if (rec && rec.state === 'recording') stopRec(); }


  // ---- Korrekturen (freundlich) + Fehler-Trainer ----
  function loadCorrections(ids) {
    ids = (ids || []).filter(isRealId);
    if (!ids.length) return Promise.resolve();
    return sbc.from('community_corrections').select('id,message_id,corrector_name,corrected,note,created_at').in('message_id', ids).is('deleted_at', null).order('created_at').then(function (res) {
      var map = {}; (res.data || []).forEach(function (c) { (map[c.message_id] || (map[c.message_id] = [])).push(c); });
      ids.forEach(function (id) { corr[id] = map[id] || []; });
      var cids = (res.data || []).map(function (c) { return c.id; });
      if (!cids.length) return;
      return sbc.from('fehler_trainer').select('correction_id').in('correction_id', cids).then(function (sv) {
        (sv.data || []).forEach(function (r) { if (r.correction_id) savedCorr[r.correction_id] = true; });
      });
    }).catch(function () {});
  }
  function corrItemHtml(c) {
    var saved = !!savedCorr[c.id];
    return '<div class="cm-corr" data-corr="' + E(c.id) + '">' +
      '<div class="cm-corr-h">✎ Korrektur von ' + E(c.corrector_name || 'Team') + '</div>' +
      '<div class="cm-corr-txt">' + E(c.corrected) + '</div>' +
      (c.note ? '<div class="cm-corr-note">' + E(c.note) + '</div>' : '') +
      '<div class="cm-corr-act"><button type="button" class="cm-corr-save' + (saved ? ' done' : '') + '" data-savecorr="' + E(c.id) + '"' + (saved ? ' disabled' : '') + '>' + (saved ? '✓ Im Fehler-Trainer' : '+ In meinen Fehler-Trainer') + '</button></div>' +
      '</div>';
  }
  function corrListHtml(mid) {
    var list = corr[mid] || [];
    return '<div class="cm-corrs" data-corrs="' + E(mid) + '">' + list.map(corrItemHtml).join('') + '</div>';
  }
  function correctBtnHtml(m) {
    if (!isTeam || !ME || m.user_id === ME.id || m.kind !== 'text' || !isRealId(m.id)) return '';
    return '<button type="button" class="cm-correct" data-correct="' + E(m.id) + '" title="Freundlich korrigieren">✎ korrigieren</button>';
  }
  function renderCorrsFor(mid) {
    var box = root() && root().querySelector('[data-corrs="' + mid + '"]');
    if (!box) return;
    box.innerHTML = (corr[mid] || []).map(corrItemHtml).join('');
  }
  function addCorrectionLive(c) {
    var arr = corr[c.message_id] || (corr[c.message_id] = []);
    for (var i = 0; i < arr.length; i++) { if (arr[i].id === c.id) return; }
    arr.push(c); renderCorrsFor(c.message_id);
  }
  function removeCorrectionLive(id) {
    Object.keys(corr).forEach(function (mid) {
      var arr = corr[mid] || [];
      for (var i = 0; i < arr.length; i++) { if (arr[i].id === id) { arr.splice(i, 1); renderCorrsFor(mid); break; } }
    });
  }
  function openCorrectForm(mid) {
    var rowEl = root() && root().querySelector('.cm-row[data-id="' + mid + '"]');
    if (!rowEl) return;
    var col = rowEl.querySelector('.cm-col'); if (!col) return;
    if (col.querySelector('.cm-corrform')) { col.querySelector('.cm-corrform textarea').focus(); return; }
    var orig = ''; var bub = col.querySelector('.cm-bub'); if (bub) orig = bub.textContent || '';
    var form = document.createElement('div'); form.className = 'cm-corrform';
    form.innerHTML = '<label>Richtige Version</label><textarea rows="2" class="cf-txt"></textarea>' +
      '<label>Kurzer Merksatz (optional)</label><input type="text" class="cf-note" placeholder="z. B. Perfekt: Partizip ans Satzende">' +
      '<div class="r"><button type="button" class="cf-cancel">Abbrechen</button><button type="button" class="save cf-save">Korrektur senden</button></div>';
    var corrsBox = col.querySelector('.cm-corrs');
    if (corrsBox) col.insertBefore(form, corrsBox); else col.appendChild(form);
    var ta = form.querySelector('.cf-txt'); ta.value = (orig || '').trim(); ta.focus();
    form.querySelector('.cf-cancel').addEventListener('click', function () { form.remove(); });
    form.querySelector('.cf-save').addEventListener('click', function () { submitCorrection(mid, ta.value.trim(), form.querySelector('.cf-note').value.trim(), form); });
  }
  async function submitCorrection(mid, corrected, note, form) {
    if (!corrected) return;
    var btn = form.querySelector('.cf-save'); if (btn) { btn.disabled = true; btn.textContent = 'sende…'; }
    var res = await sbc.from('community_corrections').insert({ message_id: mid, channel: cur, corrector_name: myName, corrected: corrected, note: note || null }).select('id,message_id,corrector_name,corrected,note,created_at').single();
    if (res.error) { if (btn) { btn.disabled = false; btn.textContent = 'Korrektur senden'; } alert('Korrektur konnte nicht gesendet werden.'); return; }
    form.remove(); addCorrectionLive(res.data);
  }
  async function saveTrainer(cid) {
    var found = null;
    Object.keys(corr).forEach(function (mid) { (corr[mid] || []).forEach(function (c) { if (c.id === cid) found = c; }); });
    if (!found) return;
    var btn = root() && root().querySelector('[data-savecorr="' + cid + '"]');
    if (btn) { btn.classList.add('done'); btn.disabled = true; btn.textContent = '✓ Im Fehler-Trainer'; }
    savedCorr[cid] = true;
    try { await sbc.from('fehler_trainer').insert({ correction_id: cid, corrected: found.corrected, note: found.note || null }); } catch (e) {}
  }
  function onCorrClick(ev) {
    var t = ev.target; if (!t || !t.closest) return;
    var cb = t.closest('[data-correct]');
    if (cb) { ev.stopPropagation(); openCorrectForm(cb.getAttribute('data-correct')); return; }
    var sv = t.closest('[data-savecorr]');
    if (sv) { ev.stopPropagation(); if (!sv.classList.contains('done')) saveTrainer(sv.getAttribute('data-savecorr')); return; }
  }

  window.renderCommunity = renderCommunity;
  window.addEventListener('hashchange', function () { if ((location.hash || '').slice(1) !== 'community') stopAll(); });
})();
