/* ============================================================
   deutschoderwas club · Direktnachrichten (1:1) — WhatsApp-Stil
   Text · Sprachnachrichten · Bilder · Emojis · Emoji-Reaktionen · gelesen-Häkchen
   Erwartet Globals aus konto.html: sb, user, profile, esc, go
   - window.renderDM()             -> Ansicht #v-dm
   - window.openDM(userId, name)   -> Thread mit einem Mitglied oeffnen
   Buckets: community-audio / community-image (wie im Community-Chat).
   ============================================================ */
(function () {
  'use strict';
  var styled = false, sbc = null, ME = null, PROF = null;
  var active = null, pending = null, rtChan = null;
  var reax = {};
  var rec = null, recStream = null, recChunks = [], recStart = 0;

  function getSb() { try { return window.sb || (typeof sb !== 'undefined' ? sb : null); } catch (e) { return null; } }
  function getUser() { try { return window.user || (typeof user !== 'undefined' ? user : null); } catch (e) { return null; } }
  function getProfile() { try { return window.profile || (typeof profile !== 'undefined' ? profile : null); } catch (e) { return null; } }
  function E(s) { return (window.esc ? window.esc(s) : String(s == null ? '' : s).replace(/[&<>"]/g, function (c) { return ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]); })); }
  function initials(n) { n = String(n || 'M').trim(); var p = n.split(/\s+/); return ((p[0] || '?')[0] + (p[1] ? p[1][0] : '')).toUpperCase(); }
  function avColor(name) { var s = String(name || '?'), h = 0; for (var i = 0; i < s.length; i++) { h = (h * 31 + s.charCodeAt(i)) >>> 0; } return 'hsl(' + (h % 360) + ',48%,68%)'; }
  function q(sel) { var r = document.getElementById('v-dm'); return r ? r.querySelector(sel) : null; }
  function isRealId(id) { return !!id && String(id).indexOf('tmp-') !== 0 && String(id).indexOf('up-') !== 0; }
  function tstr(t) { var d = new Date(t), now = new Date(); if (d.toDateString() === now.toDateString()) return d.toLocaleTimeString('de-DE', { hour: '2-digit', minute: '2-digit' }); return d.toLocaleDateString('de-DE', { day: '2-digit', month: '2-digit' }); }
  function dayLabel(d) { return new Date(d).toLocaleDateString('de-DE', { weekday: 'long', day: 'numeric', month: 'long' }); }

  var QUICK = ['👍', '❤️', '😂', '😮', '😢', '🙏', '🎉', '🔥'];
  var EMOJIS = '😀 😃 😄 😁 😆 😅 😂 🤣 🙂 😉 😊 😍 🥰 😘 😗 😜 🤪 🤗 🤔 😎 🥳 😴 🙄 😮 😳 🥺 😢 😭 😤 😡 👍 👎 👏 🙏 💪 🙌 👋 🤝 ✌️ 🔥 🎉 ⭐ 💯 ❤️ 🧡 💛 💚 💙 💜 ✅ ❌'.split(' ');

  function injectStyle() {
    if (styled) return; styled = true;
    var css = `
    #v-dm .dm-wrap{display:grid;grid-template-columns:320px 1fr;gap:0;border:1px solid #ECE4D3;border-radius:16px;background:#fff;overflow:hidden;box-shadow:0 10px 30px rgba(30,25,15,.06);height:620px}
    @media(max-width:760px){#v-dm .dm-wrap{grid-template-columns:1fr}#v-dm .dm-wrap.open .dm-list{display:none}#v-dm .dm-wrap:not(.open) .dm-thread{display:none}}
    #v-dm .dm-list{border-right:1px solid #F0E9DA;background:#FFFDF8;display:flex;flex-direction:column;min-height:0}
    #v-dm .dm-list h4{margin:0;padding:16px 18px 12px;font-family:'Space Grotesk',inherit;font-weight:700;font-size:16px;color:#211E18}
    #v-dm .dm-threads{overflow-y:auto;flex:1;min-height:0}
    #v-dm .dm-ti{display:flex;gap:11px;align-items:center;padding:11px 16px;cursor:pointer;border:none;background:none;width:100%;text-align:left;font-family:inherit;border-left:3px solid transparent}
    #v-dm .dm-ti:hover{background:#F6F1E6}
    #v-dm .dm-ti.on{background:#F1FBF9;border-left-color:#2DD4BF}
    #v-dm .dm-ti .av{flex:0 0 42px;width:42px;height:42px;border-radius:50%;display:flex;align-items:center;justify-content:center;font-weight:800;font-size:15px;color:#3a3a3a}
    #v-dm .dm-ti .mid{flex:1;min-width:0}
    #v-dm .dm-ti .nm{font-weight:700;font-size:14.5px;color:#211E18;display:flex;justify-content:space-between;gap:8px}
    #v-dm .dm-ti .nm .tm{font-weight:600;font-size:11.5px;color:#A79F90;flex:0 0 auto}
    #v-dm .dm-ti .row2{display:flex;align-items:center;gap:7px;margin-top:2px}
    #v-dm .dm-ti .pv{flex:1;min-width:0;font-size:13px;color:#8B8F96;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
    #v-dm .dm-ti .pv.un{color:#3A3A3A;font-weight:600}
    #v-dm .dm-badge{flex:0 0 auto;min-width:19px;height:19px;padding:0 5px;border-radius:10px;background:#2DD4BF;color:#06403A;font-size:11px;font-weight:800;display:flex;align-items:center;justify-content:center}
    #v-dm .dm-empty{color:#8B8F96;font-size:13.5px;padding:22px 18px;line-height:1.5}
    #v-dm .dm-thread{display:flex;flex-direction:column;min-height:0;background:#FBF8F1}
    #v-dm .dm-thead{display:flex;align-items:center;gap:11px;padding:13px 18px;border-bottom:1px solid #F0E9DA;background:#fff}
    #v-dm .dm-thead .av{flex:0 0 38px;width:38px;height:38px;border-radius:50%;display:flex;align-items:center;justify-content:center;font-weight:800;font-size:14px;color:#3a3a3a}
    #v-dm .dm-thead .nm{font-weight:800;font-size:15.5px;color:#211E18}
    #v-dm .dm-thead .bk{display:none;margin-right:2px;background:none;border:none;font-size:20px;cursor:pointer;color:#6B6154}
    @media(max-width:760px){#v-dm .dm-thead .bk{display:block}}
    #v-dm .dm-msgs{flex:1;min-height:0;overflow-y:auto;padding:18px;display:flex;flex-direction:column;gap:3px}
    #v-dm .dm-row{display:flex;flex-direction:column;max-width:82%}
    #v-dm .dm-row.me{align-self:flex-end;align-items:flex-end}
    #v-dm .dm-row.them{align-self:flex-start;align-items:flex-start}
    #v-dm .dm-b{padding:8px 12px 6px;border-radius:14px;font-size:14px;line-height:1.45;box-shadow:0 1px 1px rgba(30,25,15,.06);word-wrap:break-word;position:relative}
    #v-dm .dm-row.them .dm-b{background:#fff;border:1px solid #EEE7D8;color:#22201B;border-bottom-left-radius:5px}
    #v-dm .dm-row.me .dm-b{background:linear-gradient(135deg,#2DD4BF,#14B8A6);color:#06403A;border-bottom-right-radius:5px}
    #v-dm .dm-b .foot{display:flex;align-items:center;gap:4px;justify-content:flex-end;margin-top:2px;font-size:10.5px;opacity:.65}
    #v-dm .dm-b .tick{font-size:11px;letter-spacing:-2px}
    #v-dm .dm-row.me .dm-b .tick.read{color:#0B5CAB;opacity:1}
    #v-dm .dm-audio{display:flex;align-items:center;gap:8px}
    #v-dm .dm-audio audio{height:34px;max-width:210px}
    #v-dm .dm-audio .s{font-size:11px;opacity:.7}
    #v-dm .dm-img{max-width:230px;max-height:280px;border-radius:9px;display:block;cursor:pointer}
    #v-dm .dm-cap{margin-top:5px}
    #v-dm .dm-day{align-self:center;font-size:11px;color:#A79F90;background:#F1EEE6;border-radius:8px;padding:2px 10px;margin:8px 0}
    #v-dm .dm-th-empty{margin:auto;text-align:center;color:#8B8F96;font-size:13.5px;max-width:280px;line-height:1.5}
    /* Reaktionen */
    #v-dm .dm-reaxwrap{display:flex;align-items:center;gap:6px;margin-top:2px;min-height:16px}
    #v-dm .dm-row.me .dm-reaxwrap{flex-direction:row-reverse}
    #v-dm .dm-reax{display:flex;gap:4px;flex-wrap:wrap}
    #v-dm .dm-chip{display:inline-flex;align-items:center;gap:3px;background:#fff;border:1px solid #E4DCC9;border-radius:11px;padding:1px 7px;font-size:12px;cursor:pointer;line-height:1.5}
    #v-dm .dm-chip.mine{background:#ECFBF7;border-color:#C3EBE3}
    #v-dm .dm-chip span{font-size:11px;font-weight:700;color:#6B6154}
    #v-dm .dm-addr{opacity:0;background:none;border:none;cursor:pointer;font-size:14px;color:#A79F90;padding:0 2px;transition:opacity .12s}
    #v-dm .dm-row:hover .dm-addr{opacity:1}
    #v-dm .dm-pop{position:relative}
    #v-dm .dm-popmenu{position:absolute;bottom:22px;background:#fff;border:1px solid #E4DCC9;border-radius:12px;box-shadow:0 8px 22px rgba(30,25,15,.14);padding:5px;display:none;gap:2px;z-index:5}
    #v-dm .dm-row.me .dm-popmenu{right:0}
    #v-dm .dm-row.them .dm-popmenu{left:0}
    #v-dm .dm-popmenu button{border:none;background:none;font-size:19px;cursor:pointer;padding:3px 4px;border-radius:8px}
    #v-dm .dm-popmenu button:hover{background:#F3EFE6}
    /* Composer */
    #v-dm .dm-foot{display:flex;gap:8px;align-items:flex-end;padding:11px 13px;border-top:1px solid #F0E9DA;background:#fff;position:relative}
    #v-dm .dm-cbtn{flex:0 0 auto;width:38px;height:38px;border:none;border-radius:10px;background:#F5F1E8;color:#5A5346;font-size:17px;cursor:pointer}
    #v-dm .dm-cbtn:hover{background:#EFEADF}
    #v-dm .dm-cbtn.rec{background:#FDE7E7;color:#DD0000;animation:dm-pulse 1s infinite}
    @keyframes dm-pulse{0%,100%{opacity:1}50%{opacity:.55}}
    #v-dm .dm-foot textarea{flex:1;resize:none;border:1px solid #E4DCC9;border-radius:12px;padding:9px 13px;font-family:inherit;font-size:14px;max-height:120px;background:#FFFDF8;color:#22201B;outline:none}
    #v-dm .dm-foot textarea:focus{border-color:#2DD4BF;box-shadow:0 0 0 3px rgba(45,212,191,.14)}
    #v-dm .dm-send{flex:0 0 auto;width:42px;height:42px;border:none;border-radius:12px;background:radial-gradient(120% 120% at 30% 25%,#3DE0CC,#12A594);color:#06403A;font-size:18px;cursor:pointer;box-shadow:0 6px 14px rgba(18,165,148,.28)}
    #v-dm .dm-emopick{position:absolute;bottom:60px;left:12px;background:#fff;border:1px solid #E4DCC9;border-radius:14px;box-shadow:0 10px 26px rgba(30,25,15,.14);padding:9px;display:none;flex-wrap:wrap;gap:3px;max-width:300px;z-index:6}
    #v-dm .dm-emopick button{border:none;background:none;font-size:20px;cursor:pointer;padding:3px;border-radius:7px}
    #v-dm .dm-emopick button:hover{background:#F3EFE6}
    #v-dm .dm-placeholder{display:flex;align-items:center;justify-content:center;text-align:center;color:#8B8F96;font-size:14px;padding:24px;height:100%}
    `;
    var st = document.createElement('style'); st.textContent = css; document.head.appendChild(st);
  }

  // ---------- Threads-Liste ----------
  async function loadThreads() { try { var r = await sbc.rpc('dm_threads'); return (r && r.data) || []; } catch (e) { return []; } }
  function preview(t) {
    if (t.last_kind === 'audio') return '🎙️ Sprachnachricht';
    if (t.last_kind === 'image') return '📷 Bild';
    return t.last_body || '';
  }
  function threadItemHtml(t) {
    var pv = (t.last_from_me ? 'Du: ' : '') + preview(t);
    return '<button class="dm-ti' + (active && active.id === t.partner_id ? ' on' : '') + '" data-open="' + E(t.partner_id) + '" data-name="' + E(t.name) + '">' +
      '<span class="av" style="background:' + avColor(t.name) + '">' + E(initials(t.name)) + '</span>' +
      '<span class="mid"><span class="nm">' + E(t.name) + '<span class="tm">' + tstr(t.last_at) + '</span></span>' +
      '<span class="row2"><span class="pv' + (t.unread > 0 ? ' un' : '') + '">' + E(pv) + '</span>' +
      (t.unread > 0 ? '<span class="dm-badge">' + (t.unread > 99 ? '99+' : t.unread) + '</span>' : '') +
      '</span></span></button>';
  }
  async function renderList() {
    var box = q('.dm-threads'); if (!box) return;
    var threads = await loadThreads();
    if (!threads.length && !active) { box.innerHTML = '<div class="dm-empty">Noch keine Nachrichten.<br>Finde einen Sprech-Buddy und schreib die erste Nachricht! 🤝</div>'; return; }
    box.innerHTML = threads.map(threadItemHtml).join('');
    Array.prototype.forEach.call(box.querySelectorAll('[data-open]'), function (b) {
      b.addEventListener('click', function () { openThread(b.getAttribute('data-open'), b.getAttribute('data-name')); });
    });
  }

  // ---------- Medien signieren ----------
  async function hydrateMedia(rows) {
    var ap = rows.filter(function (m) { return m.kind === 'audio' && m.audio_path; }).map(function (m) { return m.audio_path; });
    if (ap.length) { try { var s = await sbc.storage.from('community-audio').createSignedUrls(ap, 3600); var mp = {}; (s.data || []).forEach(function (x) { if (x.path && x.signedUrl) mp[x.path] = x.signedUrl; }); rows.forEach(function (m) { if (m.kind === 'audio' && mp[m.audio_path]) m._url = mp[m.audio_path]; }); } catch (e) {} }
    var ip = rows.filter(function (m) { return m.kind === 'image' && m.image_path; }).map(function (m) { return m.image_path; });
    if (ip.length) { try { var si = await sbc.storage.from('community-image').createSignedUrls(ip, 3600); var mi = {}; (si.data || []).forEach(function (x) { if (x.path && x.signedUrl) mi[x.path] = x.signedUrl; }); rows.forEach(function (m) { if (m.kind === 'image' && mi[m.image_path]) m._url = mi[m.image_path]; }); } catch (e) {} }
  }

  // ---------- Reaktionen ----------
  async function loadReactions(ids) {
    ids = (ids || []).filter(isRealId); if (!ids.length) return;
    try {
      var res = await sbc.from('dm_reactions').select('message_id,emoji,user_id').in('message_id', ids);
      var map = {}; ids.forEach(function (id) { map[id] = {}; });
      (res.data || []).forEach(function (r) { var mm = map[r.message_id] || (map[r.message_id] = {}); var e = mm[r.emoji] || (mm[r.emoji] = { count: 0, mine: false }); e.count++; if (r.user_id === ME.id) e.mine = true; });
      ids.forEach(function (id) { reax[id] = map[id] || {}; });
    } catch (e) {}
  }
  function reaxHtml(id) {
    if (!isRealId(id)) return '<div class="dm-reaxwrap"></div>';
    var r = reax[id] || {};
    var chips = Object.keys(r).map(function (em) { var d = r[em]; return '<button type="button" class="dm-chip' + (d.mine ? ' mine' : '') + '" data-reax="' + E(id) + '" data-emoji="' + E(em) + '">' + em + '<span>' + d.count + '</span></button>'; }).join('');
    return '<div class="dm-reaxwrap" data-reaxwrap="' + E(id) + '">' +
      '<div class="dm-pop"><button type="button" class="dm-addr" data-addr="' + E(id) + '" title="Reagieren">🙂</button>' +
      '<div class="dm-popmenu" data-popmenu="' + E(id) + '">' + QUICK.map(function (em) { return '<button type="button" data-reax="' + E(id) + '" data-emoji="' + em + '">' + em + '</button>'; }).join('') + '</div></div>' +
      '<div class="dm-reax">' + chips + '</div></div>';
  }
  function updateReax(id) {
    var w = q('[data-reaxwrap="' + id + '"]'); if (!w) return;
    var tmp = document.createElement('div'); tmp.innerHTML = reaxHtml(id);
    var nb = tmp.firstChild; if (nb && w.parentNode) w.parentNode.replaceChild(nb, w);
  }
  async function toggleReaction(id, emoji) {
    if (!isRealId(id) || !emoji) return;
    var cur0 = reax[id] && reax[id][emoji], mine = cur0 && cur0.mine;
    try { if (mine) { await sbc.from('dm_reactions').delete().eq('message_id', id).eq('user_id', ME.id).eq('emoji', emoji); } else { await sbc.from('dm_reactions').insert({ message_id: id, emoji: emoji }); } } catch (e) {}
    await loadReactions([id]); updateReax(id);
  }
  function onReaxClick(ev) {
    var t = ev.target; if (!t || !t.closest) return;
    var addr = t.closest('[data-addr]');
    if (addr) { ev.stopPropagation(); var id = addr.getAttribute('data-addr'); var pm = q('[data-popmenu="' + id + '"]'); var show = pm && pm.style.display !== 'flex'; Array.prototype.forEach.call(document.querySelectorAll('#v-dm .dm-popmenu'), function (p) { p.style.display = 'none'; }); if (pm) pm.style.display = show ? 'flex' : 'none'; return; }
    var re = t.closest('[data-reax]');
    if (re) { ev.stopPropagation(); var mid = re.getAttribute('data-reax'), em = re.getAttribute('data-emoji'); var pm2 = q('[data-popmenu="' + mid + '"]'); if (pm2) pm2.style.display = 'none'; toggleReaction(mid, em); }
  }

  // ---------- Nachricht rendern ----------
  function bodyHtml(m) {
    if (m.kind === 'audio') return '<div class="dm-audio">🎧 ' + (m._url ? '<audio controls preload="none" src="' + E(m._url) + '"></audio>' : '<span class="s">Sprachnachricht</span>') + (m.audio_secs ? '<span class="s">' + Math.round(m.audio_secs) + 's</span>' : '') + '</div>';
    if (m.kind === 'image') return (m._url ? '<a href="' + E(m._url) + '" target="_blank" rel="noopener"><img class="dm-img" src="' + E(m._url) + '" alt="Bild" loading="lazy"></a>' : '<span class="s">📷 Bild</span>') + (m.body ? '<div class="dm-cap">' + E(m.body) + '</div>' : '');
    return E(m.body || '');
  }
  function tickHtml(m) {
    if (m.sender_id !== ME.id) return '';
    return '<span class="tick' + (m.read_at ? ' read' : '') + '">' + (m.read_at ? '✓✓' : '✓') + '</span>';
  }
  function msgHtml(m) {
    var me = m.sender_id === ME.id;
    return '<div class="dm-row ' + (me ? 'me' : 'them') + '" data-id="' + E(m.id) + '">' +
      '<div class="dm-b">' + bodyHtml(m) + '<div class="foot"><span class="tm">' + tstr(m.created_at) + '</span>' + tickHtml(m) + '</div></div>' +
      reaxHtml(m.id) + '</div>';
  }
  function msgsHtml(rows) {
    if (!rows.length) return '<div class="dm-th-empty">Noch keine Nachrichten mit dieser Person.<br>Sag einfach „Hallo" 👋 und übt zusammen!</div>';
    var out = '', lastDay = '';
    rows.forEach(function (m) { var dl = new Date(m.created_at).toDateString(); if (dl !== lastDay) { lastDay = dl; out += '<div class="dm-day">' + E(dayLabel(m.created_at)) + '</div>'; } out += msgHtml(m); });
    return out;
  }
  function appendMsg(m) {
    var box = q('#dmMsgs'); if (!box) return;
    if (box.querySelector('.dm-th-empty')) box.innerHTML = '';
    var near = box.scrollHeight - box.scrollTop - box.clientHeight < 140;
    box.insertAdjacentHTML('beforeend', msgHtml(m));
    if (near || m.sender_id === ME.id) box.scrollTop = box.scrollHeight;
  }

  // ---------- Thread oeffnen ----------
  async function openThread(partnerId, name) {
    active = { id: partnerId, name: name || 'Mitglied' };
    if (!name || name === 'Mitglied') { try { var nn = await sbc.rpc('dm_partner_name', { p_id: partnerId }); if (nn && nn.data) active.name = nn.data; } catch (e) {} }
    var wrap = q('.dm-wrap'); if (wrap) wrap.classList.add('open');
    var box = q('.dm-threads'); if (box) Array.prototype.forEach.call(box.querySelectorAll('.dm-ti'), function (b) { b.classList.toggle('on', b.getAttribute('data-open') === partnerId); });

    var pane = q('.dm-thread'); if (!pane) return;
    pane.innerHTML =
      '<div class="dm-thead"><button class="bk" data-back>‹</button>' +
      '<span class="av" style="background:' + avColor(active.name) + '">' + E(initials(active.name)) + '</span>' +
      '<span class="nm">' + E(active.name) + '</span></div>' +
      '<div class="dm-msgs" id="dmMsgs"><div class="dm-th-empty">Lädt…</div></div>' +
      footHtml();
    var bk = pane.querySelector('[data-back]'); if (bk) bk.addEventListener('click', function () { active = null; var w = q('.dm-wrap'); if (w) w.classList.remove('open'); });

    var rows = [];
    try { var r = await sbc.rpc('dm_thread', { p_partner: partnerId }); rows = (r && r.data) || []; } catch (e) {}
    await hydrateMedia(rows);
    reax = {};
    await loadReactions(rows.map(function (m) { return m.id; }));
    var mbox = q('#dmMsgs'); if (mbox) { mbox.innerHTML = msgsHtml(rows); mbox.scrollTop = mbox.scrollHeight; mbox.addEventListener('click', onReaxClick); }
    try { await sbc.rpc('dm_mark_read', { p_partner: partnerId }); } catch (e) {}
    renderList();
    bindFoot();
  }

  // ---------- Composer ----------
  function footHtml() {
    return '<div class="dm-foot">' +
      '<button class="dm-cbtn" id="dmMic" title="Sprachnachricht">🎤</button>' +
      '<button class="dm-cbtn" id="dmImgBtn" title="Bild">📷</button>' +
      '<button class="dm-cbtn" id="dmEmo" title="Emoji">😊</button>' +
      '<input type="file" id="dmFile" accept="image/*" style="display:none">' +
      '<div class="dm-emopick" id="dmEmoPick"></div>' +
      '<textarea id="dmInput" rows="1" placeholder="Nachricht schreiben…"></textarea>' +
      '<button class="dm-send" id="dmSend" title="Senden">➤</button></div>';
  }
  function bindFoot() {
    var input = q('#dmInput'), send = q('#dmSend'), mic = q('#dmMic'), imgBtn = q('#dmImgBtn'), file = q('#dmFile'), emo = q('#dmEmo'), pick = q('#dmEmoPick');
    function grow() { if (!input) return; input.style.height = 'auto'; input.style.height = Math.min(120, input.scrollHeight) + 'px'; }
    if (input) { input.addEventListener('input', grow); input.addEventListener('keydown', function (e) { if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); sendText(); } }); input.focus(); }
    if (send) send.addEventListener('click', sendText);
    if (mic) mic.addEventListener('click', toggleRec);
    if (imgBtn && file) { imgBtn.addEventListener('click', function () { file.click(); }); file.addEventListener('change', function () { if (file.files && file.files[0]) uploadImage(file.files[0]); file.value = ''; }); }
    if (emo && pick) {
      pick.innerHTML = EMOJIS.map(function (x) { return '<button type="button">' + x + '</button>'; }).join('');
      emo.addEventListener('click', function (ev) { ev.stopPropagation(); pick.style.display = (pick.style.display === 'flex' ? 'none' : 'flex'); });
      pick.addEventListener('click', function (ev) { ev.stopPropagation(); var t = ev.target; if (t && t.tagName === 'BUTTON') { var s = input.selectionStart == null ? input.value.length : input.selectionStart, e2 = input.selectionEnd == null ? input.value.length : input.selectionEnd; input.value = input.value.slice(0, s) + t.textContent + input.value.slice(e2); input.focus(); grow(); } });
    }
    if (!window.__dmDoc) { window.__dmDoc = true; document.addEventListener('click', function () { var p = document.getElementById('dmEmoPick'); if (p) p.style.display = 'none'; Array.prototype.forEach.call(document.querySelectorAll('#v-dm .dm-popmenu'), function (x) { x.style.display = 'none'; }); }); }
  }

  var sending = false;
  async function sendText() {
    if (sending || !active) return;
    var input = q('#dmInput'); if (!input) return; var body = input.value.trim(); if (!body) return;
    sending = true; input.value = ''; input.style.height = 'auto';
    var tmp = 'tmp-' + Date.now();
    appendMsg({ id: tmp, sender_id: ME.id, kind: 'text', body: body, created_at: new Date().toISOString(), read_at: null });
    try { var res = await sbc.from('direct_messages').insert({ recipient_id: active.id, kind: 'text', body: body }).select('id').single(); var node = q('[data-id="' + tmp + '"]'); if (node && res && res.data) node.setAttribute('data-id', res.data.id); } catch (e) {}
    sending = false; renderList();
  }

  // ---- Sprachaufnahme ----
  async function toggleRec() {
    var mic = q('#dmMic'); if (!mic) return;
    if (rec && rec.state === 'recording') { stopRec(); return; }
    if (!navigator.mediaDevices || !window.MediaRecorder) { alert('Dein Browser unterstützt keine Sprachaufnahme.'); return; }
    try { recStream = await navigator.mediaDevices.getUserMedia({ audio: true }); } catch (e) { alert('Mikrofon-Zugriff nötig, um Sprachnachrichten zu senden.'); return; }
    recChunks = []; recStart = Date.now();
    var mime = MediaRecorder.isTypeSupported('audio/webm') ? 'audio/webm' : (MediaRecorder.isTypeSupported('audio/mp4') ? 'audio/mp4' : '');
    rec = new MediaRecorder(recStream, mime ? { mimeType: mime } : undefined);
    rec.ondataavailable = function (e) { if (e.data && e.data.size) recChunks.push(e.data); };
    rec.onstop = uploadRec; rec.start();
    mic.classList.add('rec'); mic.textContent = '⏹';
    var inp = q('#dmInput'); if (inp) inp.placeholder = 'Aufnahme läuft… zum Senden auf ⏹ tippen';
  }
  function stopRec() { try { rec.stop(); } catch (e) {} if (recStream) { recStream.getTracks().forEach(function (t) { t.stop(); }); recStream = null; } var mic = q('#dmMic'); if (mic) { mic.classList.remove('rec'); mic.textContent = '🎤'; } var inp = q('#dmInput'); if (inp) inp.placeholder = 'Nachricht schreiben…'; }
  async function uploadRec() {
    var secs = Math.max(1, Math.round((Date.now() - recStart) / 1000));
    if (!recChunks.length || !active) return;
    var type = (rec && rec.mimeType) || 'audio/webm', ext = type.indexOf('mp4') >= 0 ? 'mp4' : 'webm';
    var blob = new Blob(recChunks, { type: type });
    if (blob.size > 10 * 1024 * 1024) { alert('Aufnahme zu lang (max. 10 MB).'); return; }
    var path = ME.id + '/' + Date.now() + '.' + ext, up = 'up-' + Date.now();
    appendMsg({ id: up, sender_id: ME.id, kind: 'text', body: '🎤 wird gesendet…', created_at: new Date().toISOString() });
    var ln = q('[data-id="' + up + '"]');
    try {
      var upr = await sbc.storage.from('community-audio').upload(path, blob, { contentType: type, upsert: false });
      if (upr.error) { if (ln) ln.querySelector('.dm-b').innerHTML = '⚠︎ Audio nicht gesendet'; return; }
      var res = await sbc.from('direct_messages').insert({ recipient_id: active.id, kind: 'audio', audio_path: path, audio_secs: secs }).select('id').single();
      var sg = await sbc.storage.from('community-audio').createSignedUrl(path, 3600);
      if (ln && res && res.data) { ln.setAttribute('data-id', res.data.id); ln.querySelector('.dm-b').innerHTML = '<div class="dm-audio">🎧 <audio controls preload="none" src="' + E(sg.data ? sg.data.signedUrl : '') + '"></audio><span class="s">' + secs + 's</span></div><div class="foot"><span class="tm">' + tstr(new Date().toISOString()) + '</span><span class="tick">✓</span></div>'; }
    } catch (e) {}
    renderList();
  }

  // ---- Bild senden ----
  async function uploadImage(fileObj) {
    if (!fileObj || !active) return;
    if (!/^image\//.test(fileObj.type || '')) { alert('Bitte ein Bild auswählen.'); return; }
    if (fileObj.size > 6 * 1024 * 1024) { alert('Bild zu groß (max. 6 MB).'); return; }
    var ext = ((fileObj.name || '').split('.').pop() || 'jpg').toLowerCase().replace(/[^a-z0-9]/g, '') || 'jpg';
    var path = ME.id + '/' + Date.now() + '.' + ext, up = 'up-' + Date.now();
    appendMsg({ id: up, sender_id: ME.id, kind: 'text', body: '📷 wird gesendet…', created_at: new Date().toISOString() });
    var ln = q('[data-id="' + up + '"]');
    try {
      var upr = await sbc.storage.from('community-image').upload(path, fileObj, { contentType: fileObj.type, upsert: false });
      if (upr.error) { if (ln) ln.querySelector('.dm-b').innerHTML = '⚠︎ Bild nicht gesendet'; return; }
      var res = await sbc.from('direct_messages').insert({ recipient_id: active.id, kind: 'image', image_path: path }).select('id').single();
      var sg = await sbc.storage.from('community-image').createSignedUrl(path, 3600);
      if (ln && res && res.data) { ln.setAttribute('data-id', res.data.id); ln.querySelector('.dm-b').innerHTML = (sg.data ? '<a href="' + E(sg.data.signedUrl) + '" target="_blank" rel="noopener"><img class="dm-img" src="' + E(sg.data.signedUrl) + '" alt="Bild"></a>' : '📷 Bild') + '<div class="foot"><span class="tm">' + tstr(new Date().toISOString()) + '</span><span class="tick">✓</span></div>'; }
    } catch (e) {}
    renderList();
  }

  // ---------- Realtime ----------
  function subscribe() {
    if (rtChan || !sbc.channel) return;
    try {
      rtChan = sbc.channel('dm-' + ME.id)
        .on('postgres_changes', { event: 'INSERT', schema: 'public', table: 'direct_messages', filter: 'recipient_id=eq.' + ME.id }, function (p) {
          var m = p.new; if (!m) return;
          if (active && m.sender_id === active.id) {
            if ((m.kind === 'audio' && m.audio_path) || (m.kind === 'image' && m.image_path)) hydrateMedia([m]).then(function () { appendMsg(m); }); else appendMsg(m);
            try { sbc.rpc('dm_mark_read', { p_partner: active.id }); } catch (e) {}
          }
          renderList();
        })
        .on('postgres_changes', { event: 'UPDATE', schema: 'public', table: 'direct_messages' }, function (p) {
          var m = p.new; if (!m || m.sender_id !== ME.id) return;
          var node = q('[data-id="' + m.id + '"]'); if (!node) return;
          var tk = node.querySelector('.tick'); if (tk && m.read_at) { tk.textContent = '✓✓'; tk.classList.add('read'); }
        })
        .on('postgres_changes', { event: 'INSERT', schema: 'public', table: 'dm_reactions' }, function (p) { var m = p.new; if (m && m.message_id && q('[data-id="' + m.message_id + '"]')) loadReactions([m.message_id]).then(function () { updateReax(m.message_id); }); })
        .on('postgres_changes', { event: 'DELETE', schema: 'public', table: 'dm_reactions' }, function () { var box = q('#dmMsgs'); if (!box) return; var ids = []; Array.prototype.forEach.call(box.querySelectorAll('.dm-row'), function (rw) { var id = rw.getAttribute('data-id'); if (isRealId(id)) ids.push(id); }); if (ids.length) loadReactions(ids).then(function () { ids.forEach(updateReax); }); })
        .subscribe();
    } catch (e) {}
  }

  async function renderDM() {
    injectStyle();
    sbc = getSb(); ME = getUser(); PROF = getProfile();
    var r = document.getElementById('v-dm'); if (!r) return;
    if (!sbc || !ME) { r.innerHTML = '<div class="pagehead"><h1>💌 Nachrichten</h1></div><div class="dm-placeholder">Bitte melde dich an.</div>'; return; }
    r.innerHTML =
      '<div class="pagehead"><h1>💌 Nachrichten</h1><p>Schreib direkt mit deinem Sprech-Buddy und anderen Mitgliedern — Text, Sprache, Bilder.</p></div>' +
      '<div class="dm-wrap"><div class="dm-list"><h4>Unterhaltungen</h4><div class="dm-threads"></div></div>' +
      '<div class="dm-thread"><div class="dm-placeholder">Wähle links eine Unterhaltung — oder starte über „Anschreiben" bei deinem Sprech-Buddy.</div></div></div>';
    await renderList();
    subscribe();
    if (pending) { var pp = pending; pending = null; openThread(pp.id, pp.name); }
  }

  function openDM(userId, name) {
    if (!userId) return;
    pending = { id: userId, name: name };
    var onDm = (location.hash || '').indexOf('dm') >= 0;
    if (typeof window.go === 'function') window.go('dm'); else location.hash = 'dm';
    if (document.getElementById('v-dm') && sbc && ME && onDm) { pending = null; openThread(userId, name); }
  }

  window.renderDM = renderDM;
  window.openDM = openDM;
})();
