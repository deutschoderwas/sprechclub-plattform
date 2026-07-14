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
    #v-community .cm{display:grid;grid-template-columns:270px 1fr;gap:0;border:1px solid #26221c;border-radius:18px;overflow:hidden;background:#fff;height:calc(100vh - 150px);min-height:560px;width:100%;box-shadow:0 18px 50px rgba(0,0,0,.10)}
    #v-community .cm-side{background:#161616;border-right:1px solid #262626;padding:16px 11px;overflow-y:auto}
    #v-community .cm-side h4{font-size:11px;text-transform:uppercase;letter-spacing:.12em;color:#8A8781;margin:4px 8px 12px;font-weight:800}
    #v-community .cm-ch{display:flex;align-items:center;gap:10px;width:100%;border:none;background:none;text-align:left;padding:10px 12px;border-radius:11px;cursor:pointer;font-family:inherit;font-size:14.5px;font-weight:600;color:#C9C6C0;margin-bottom:2px;transition:background .12s,color .12s}
    #v-community .cm-ch:hover{background:#2A2A2A;color:#fff}
    #v-community .cm-ch.on{background:#2DD4BF;color:#053b34;font-weight:800}
    #v-community .cm-ch .e{font-size:17px}
    #v-community .cm-ch .lock{margin-left:6px;font-size:12px;opacity:.6}
    #v-community .cm-ch .cm-nm{flex:1;min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}
    #v-community .cm-ch .cm-unread{flex:0 0 auto;background:var(--primary,#DD0000);color:#fff;font-size:11px;font-weight:800;min-width:19px;height:19px;border-radius:10px;padding:0 5px;display:inline-flex;align-items:center;justify-content:center;margin-left:auto}
    #v-community .cm-ch .cm-nm ~ .lock{margin-left:6px}
    #v-community .cm-ch.on .cm-unread{background:#fff;color:var(--secondary,#1A1A1A)}
    #v-community .cm-main{display:flex;flex-direction:column;min-width:0;min-height:0}
    #v-community .cm-head{padding:13px 18px;border-bottom:1px solid var(--border,#F0E5D8)}
    #v-community .cm-head b{font-size:16px}
    #v-community .cm-head span{display:block;font-size:12.5px;color:var(--text-soft,#6B7280)}
    #v-community .cm-msgs{flex:1;min-height:0;overflow-y:auto;padding:16px 18px;display:flex;flex-direction:column;gap:12px;background:linear-gradient(#fff,#fffdf7)}
    #v-community .cm-row{display:flex;gap:10px;max-width:78%}
    #v-community .cm-row.me{align-self:flex-end;flex-direction:row-reverse}
    #v-community .cm-av{flex:0 0 34px;width:34px;height:34px;border-radius:50%;background:var(--turquoise,#2DD4BF);color:#06403A;font-weight:800;font-size:13px;display:flex;align-items:center;justify-content:center}
    #v-community .cm-bub{background:#fff;border:1px solid var(--border,#F0E5D8);border-radius:14px;padding:9px 13px;font-size:14.5px;line-height:1.45;word-break:break-word}
    #v-community .cm-row.me .cm-bub{background:#E8FBF5;border-color:#bdeee2}
    #v-community .cm-meta{font-size:11.5px;color:var(--text-soft,#6B7280);margin-bottom:3px;font-weight:700}
    #v-community .cm-row.me .cm-meta{text-align:right}
    #v-community .cm-time{font-weight:400;opacity:.7;margin-left:6px}
    #v-community .cm-audio{display:flex;align-items:center;gap:8px}
    #v-community .cm-audio audio{height:34px}
    #v-community .cm-col{min-width:0}
    #v-community button.cm-img{background:var(--bg,#FFF8E0);color:var(--secondary,#1A1A1A)}
    #v-community .cm-bub img.cm-img{max-width:260px;max-height:260px;width:auto;border-radius:12px;display:block;cursor:zoom-in}
    #v-community .cm-cap{margin-top:6px;font-size:14px;line-height:1.4}
    #v-community .cm-av{box-shadow:0 1px 3px rgba(38,32,25,.12)}
    #v-community .cm-bub{box-shadow:0 1px 2px rgba(38,32,25,.05)}
    #v-community .cm-foot{position:relative}
    #v-community button.cm-emo{background:var(--bg,#FFF8E0)}
    #v-community .cm-emopick{position:absolute;bottom:62px;left:12px;right:12px;background:#fff;border:1px solid var(--border,#F0E5D8);border-radius:14px;box-shadow:0 10px 26px rgba(0,0,0,.14);padding:8px;display:flex;flex-wrap:wrap;gap:2px;max-height:190px;overflow-y:auto;z-index:30}
    #v-community .cm-emoi{border:none;background:none;cursor:pointer;font-size:22px;line-height:1;padding:5px 6px;border-radius:8px}
    #v-community .cm-emoi:hover{background:var(--bg,#FFF8E0)}
    #v-community .cm-foot{padding:12px 14px;border-top:1px solid var(--border,#F0E5D8);display:flex;gap:9px;align-items:center;background:#fff}
    #v-community .cm-inp{flex:1;border:1.5px solid var(--border,#F0E5D8);border-radius:22px;padding:11px 16px;font-size:14.5px;font-family:inherit;outline:none;resize:none;max-height:120px}
    #v-community .cm-inp:focus{border-color:var(--turquoise,#2DD4BF)}
    #v-community .cm-btn{flex:0 0 auto;border:none;cursor:pointer;width:44px;height:44px;border-radius:50%;font-size:19px;display:flex;align-items:center;justify-content:center;font-family:inherit}
    #v-community .cm-send{background:var(--turquoise,#2DD4BF);color:#06403A}
    #v-community .cm-mic{background:var(--bg,#FFF8E0);color:var(--secondary,#1A1A1A)}
    #v-community .cm-mic.rec{background:var(--primary,#DD0000);color:#fff;animation:cmPulse 1s infinite}
    @keyframes cmPulse{0%,100%{box-shadow:0 0 0 0 rgba(221,0,0,.5)}50%{box-shadow:0 0 0 10px rgba(221,0,0,0)}}
    #v-community .cm-readonly{flex:1;text-align:center;color:var(--text-soft,#6B7280);font-size:13.5px;font-weight:600}
    #v-community .cm-empty{margin:auto;color:var(--text-soft,#6B7280);text-align:center;font-size:14px}
    #v-community .cm-del{background:none;border:none;cursor:pointer;color:#bbb;font-size:12px;margin-left:6px}
    #v-community .cm-del:hover{color:var(--primary,#DD0000)}
    @media(max-width:640px){#v-community .cm{grid-template-columns:1fr;height:auto}#v-community .cm-side{display:flex;gap:6px;overflow-x:auto;border-right:none;border-bottom:1px solid var(--border,#F0E5D8)}#v-community .cm-side h4{display:none}#v-community .cm-ch{white-space:nowrap}#v-community .cm-msgs{height:54vh}}
    #v-community .cm-reax{display:flex;flex-wrap:wrap;gap:5px;margin-top:5px;align-items:center;position:relative}
    #v-community .cm-row.me .cm-reax{justify-content:flex-end}
    #v-community .cm-reax-chip{display:inline-flex;align-items:center;gap:4px;border:1px solid var(--border,#F0E5D8);background:#fff;border-radius:20px;padding:2px 8px;font-size:13px;cursor:pointer;font-family:inherit;line-height:1.4}
    #v-community .cm-reax-chip span{font-weight:700;font-size:12px;color:var(--text-soft,#6B7280)}
    #v-community .cm-reax-chip.mine{background:#E8FBF5;border-color:var(--turquoise,#2DD4BF)}
    #v-community .cm-reax-chip.mine span{color:#06403A}
    #v-community .cm-reax-add{border:none;background:none;cursor:pointer;font-size:15px;line-height:1;padding:2px 6px;border-radius:20px;opacity:.5}
    #v-community .cm-reax-add:hover{opacity:1;background:var(--bg,#FFF8E0)}
    #v-community .cm-reax-pop{position:absolute;bottom:26px;left:0;background:#fff;border:1px solid var(--border,#F0E5D8);border-radius:22px;box-shadow:0 8px 22px rgba(0,0,0,.16);padding:4px 6px;display:flex;gap:2px;z-index:40}
    #v-community .cm-row.me .cm-reax-pop{left:auto;right:0}
    #v-community .cm-reax-q{border:none;background:none;cursor:pointer;font-size:20px;line-height:1;padding:3px 4px;border-radius:8px;transition:transform .1s}
    #v-community .cm-reax-q:hover{background:var(--bg,#FFF8E0);transform:scale(1.15)}
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
    await openChannel(cur);
  }

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
          '<div class="cm-head" id="cmHead"></div>' +
          '<div class="cm-msgs" id="cmMsgs"></div>' +
          '<div class="cm-foot" id="cmFoot"></div>' +
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
    reax = {};
    await loadReactions(rows.map(function (m) { return m.id; }));
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
      (canDel ? '<button class="cm-del" data-del="' + E(m.id) + '" title="Löschen">✕</button>' : '') + '</div>' +
      '<div class="cm-bub">' + body + '</div>' + reaxBarHtml(m.id) + '</div></div>';
  }

  function renderMsgs(rows) {
    var box = q('#cmMsgs'); if (!box) return;
    if (!rows.length) { box.innerHTML = '<div class="cm-empty">Noch keine Nachrichten — schreib die erste! ✍️</div>'; return; }
    box.innerHTML = rows.map(msgHtml).join('');
    box.scrollTop = box.scrollHeight;
    Array.prototype.forEach.call(box.querySelectorAll('[data-del]'), function (b) {
      b.addEventListener('click', function () { delMsg(b.getAttribute('data-del')); });
    });
    if (!box.__reaxBound) { box.__reaxBound = true; box.addEventListener('click', onReaxClick);
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

  window.renderCommunity = renderCommunity;
  window.addEventListener('hashchange', function () { if ((location.hash || '').slice(1) !== 'community') stopAll(); });
})();
