/* ============================================================
   deutschoderwas club · Sprech-Buddy-Matching
   Erwartet Globals aus konto.html: sb, user, profile, esc, go
   - window.renderBuddyWidget(hostEl)  -> kompaktes Widget (rechte Spalte)
   - window.renderBuddy()              -> eigene Ansicht #v-buddy
   Anschreiben-Hook: window.openDM(userId, name) (von Direktnachrichten gestellt);
   Fallback: go('community').
   ============================================================ */
(function () {
  'use strict';
  var styled = false;
  function getSb() { try { return window.sb || (typeof sb !== 'undefined' ? sb : null); } catch (e) { return null; } }
  function getProfile() { try { return window.profile || (typeof profile !== 'undefined' ? profile : null); } catch (e) { return null; } }
  function E(s) { return (window.esc ? window.esc(s) : String(s == null ? '' : s).replace(/[&<>"]/g, function (c) { return ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]); })); }
  function initials(n) { n = String(n || 'M').trim(); var p = n.split(/\s+/); return ((p[0] || '?')[0] + (p[1] ? p[1][0] : '')).toUpperCase(); }
  function avColor(name) { var s = String(name || '?'), h = 0; for (var i = 0; i < s.length; i++) { h = (h * 31 + s.charCodeAt(i)) >>> 0; } return 'hsl(' + (h % 360) + ',48%,68%)'; }

  function injectStyle() {
    if (styled) return; styled = true;
    var css = `
    .bd-card{border:1px solid #ECE4D3;border-radius:16px;background:linear-gradient(180deg,#FFFDF8,#FFF9EE);box-shadow:0 8px 24px rgba(30,25,15,.06);padding:18px 18px 16px;position:relative;overflow:hidden}
    .bd-head{display:flex;align-items:center;gap:10px;margin-bottom:10px}
    .bd-ic{flex:0 0 34px;width:34px;height:34px;border-radius:10px;background:#E7FBF6;border:1px solid #C3EBE3;display:flex;align-items:center;justify-content:center;font-size:17px}
    .bd-head h4{margin:0;font-size:15px;font-family:'Space Grotesk',inherit;font-weight:700;color:#211E18}
    .bd-blurb{font-size:13px;color:#6B6154;line-height:1.5;margin:0 0 14px}
    .bd-btn{display:inline-flex;align-items:center;justify-content:center;gap:8px;width:100%;border:none;border-radius:11px;padding:11px 14px;font-family:inherit;font-weight:800;font-size:14px;cursor:pointer;background:radial-gradient(120% 120% at 30% 25%,#3DE0CC,#12A594);color:#06403A;box-shadow:0 6px 16px rgba(18,165,148,.28);transition:transform .12s,box-shadow .12s}
    .bd-btn:hover{transform:translateY(-1px);box-shadow:0 10px 22px rgba(18,165,148,.36)}
    .bd-btn.sub{background:#F5F1E8;color:#5A5346;box-shadow:none;font-weight:700}
    .bd-btn.sub:hover{background:#EFEADF;transform:none;box-shadow:none}
    .bd-row{display:flex;gap:8px;margin-top:10px}
    .bd-row .bd-btn{width:auto;flex:1}
    .bd-wait{display:flex;align-items:center;gap:11px;background:#FFF7DA;border:1px solid #F3E2A0;border-radius:12px;padding:12px 14px;margin-bottom:12px}
    .bd-wait .sp{flex:0 0 18px;width:18px;height:18px;border-radius:50%;border:2.5px solid #E7CE7A;border-top-color:#B98900;animation:bd-spin 1s linear infinite}
    @keyframes bd-spin{to{transform:rotate(360deg)}}
    .bd-wait .t{font-size:13px;color:#7a5c00;line-height:1.4}
    .bd-wait .t b{font-weight:800}
    .bd-buddy{display:flex;align-items:center;gap:13px;background:#fff;border:1px solid #EEE7D8;border-radius:13px;padding:13px 14px;margin-bottom:12px}
    .bd-buddy .av{flex:0 0 46px;width:46px;height:46px;border-radius:50%;display:flex;align-items:center;justify-content:center;font-weight:800;font-size:16px;color:#3a3a3a;box-shadow:0 2px 6px rgba(0,0,0,.08)}
    .bd-buddy .nm{font-weight:800;font-size:15px;color:#211E18}
    .bd-buddy .meta{font-size:12.5px;color:#8B8F96;margin-top:2px;display:flex;align-items:center;gap:7px;flex-wrap:wrap}
    .bd-lv{font-size:11px;font-weight:800;color:#0E8577;background:#ECFBF7;border:1px solid #C3EBE3;border-radius:6px;padding:1px 7px}
    .bd-online{display:inline-flex;align-items:center;gap:5px}
    .bd-online .dot{width:7px;height:7px;border-radius:50%;background:#2BC48A;display:inline-block}
    .bd-mini{font-size:11.5px;color:#8B8F96;margin:2px 0 0;text-align:center}
    /* eigene Ansicht */
    #v-buddy .bd-grid{display:grid;grid-template-columns:1.15fr .85fr;gap:18px;align-items:start}
    @media(max-width:820px){#v-buddy .bd-grid{grid-template-columns:1fr}}
    #v-buddy .bd-sec{font-size:13px;font-weight:800;color:#8B8F96;text-transform:uppercase;letter-spacing:.05em;margin:2px 2px 12px}
    #v-buddy .bd-steps{display:flex;flex-direction:column;gap:11px}
    #v-buddy .bd-step{display:flex;gap:12px;border:1px solid #EEE7D8;border-radius:13px;background:#fff;padding:14px 15px;box-shadow:0 1px 2px rgba(30,25,15,.05)}
    #v-buddy .bd-step .n{flex:0 0 28px;width:28px;height:28px;border-radius:9px;background:#ECFBF7;color:#0E8577;font-family:'Space Grotesk',inherit;font-weight:700;font-size:14px;display:flex;align-items:center;justify-content:center}
    #v-buddy .bd-step h4{margin:0 0 3px;font-size:14.5px}
    #v-buddy .bd-step p{margin:0;font-size:13px;color:#6B6154;line-height:1.5}
    #v-buddy .bd-safe{font-size:12px;color:#8B8F96;line-height:1.5;margin:14px 2px 0}
    `;
    var st = document.createElement('style'); st.textContent = css; document.head.appendChild(st);
  }

  var busy = false;
  async function call(fn, arg) {
    var sb = getSb(); if (!sb) return { state: 'off' };
    try { var r = await sb.rpc(fn, arg || {}); return (r && r.data) || { state: 'off' }; } catch (e) { return { state: 'off' }; }
  }
  async function loadStatus() { return call('buddy_status'); }

  function sinceStr(iso) {
    if (!iso) return '';
    var days = Math.floor((Date.now() - new Date(iso).getTime()) / 86400000);
    if (days <= 0) return 'seit heute';
    if (days === 1) return 'seit gestern';
    return 'seit ' + days + ' Tagen';
  }

  function widgetHtml(st) {
    var head = '<div class="bd-head"><span class="bd-ic">🤝</span><h4>Dein Sprech-Buddy</h4></div>';
    if (st.state === 'matched' && st.buddy) {
      var b = st.buddy;
      return head +
        '<div class="bd-buddy"><span class="av" style="background:' + avColor(b.name) + '">' + E(initials(b.name)) + '</span>' +
        '<div><div class="nm">' + E(b.name) + '</div><div class="meta">' +
        (b.level ? '<span class="bd-lv">' + E(b.level) + '</span>' : '') +
        '<span>' + E(sinceStr(b.since)) + '</span></div></div></div>' +
        '<button type="button" class="bd-btn" data-act="dm">💬 Anschreiben</button>' +
        '<div class="bd-row"><button type="button" class="bd-btn sub" data-act="new">Neuer Buddy</button>' +
        '<button type="button" class="bd-btn sub" data-act="leave">Pause</button></div>';
    }
    if (st.state === 'waiting') {
      var n = st.pool_waiting || 0;
      return head +
        '<div class="bd-wait"><span class="sp"></span><span class="t"><b>Wir suchen einen Partner…</b><br>' +
        (n > 0 ? 'Sobald sich jemand auf deinem Niveau anmeldet, matchen wir euch.' : 'Du bist gerade allein im Pool — sei bereit, wir melden dich sofort.') +
        '</span></div>' +
        '<button type="button" class="bd-btn sub" data-act="leave">Aus dem Pool nehmen</button>';
    }
    return head +
      '<p class="bd-blurb">Wir matchen dich mit einem Lernpartner auf deinem Niveau — für <b>10 Minuten Sprechen pro Tag</b>. Gemeinsam übt es sich leichter.</p>' +
      '<button type="button" class="bd-btn" data-act="join">🔎 Buddy finden</button>';
  }

  function bind(host, rerender) {
    Array.prototype.forEach.call(host.querySelectorAll('[data-act]'), function (b) {
      b.addEventListener('click', async function () {
        if (busy) return;
        var act = b.getAttribute('data-act');
        if (act === 'dm') {
          var st = host.__st;
          if (st && st.buddy && typeof window.openDM === 'function') window.openDM(st.buddy.id, st.buddy.name);
          else if (typeof window.go === 'function') window.go('community');
          else location.hash = 'community';
          return;
        }
        busy = true; b.disabled = true;
        var lv = (getProfile() && getProfile().level) || null;
        var res;
        if (act === 'join') res = await call('buddy_join', { p_level: lv });
        else if (act === 'new') res = await call('buddy_new');
        else if (act === 'leave') res = await call('buddy_leave');
        busy = false;
        if (res) rerender(res);
      });
    });
  }

  async function renderBuddyWidget(host) {
    injectStyle();
    if (typeof host === 'string') host = document.getElementById(host);
    if (!host) return;
    host.innerHTML = '<div class="bd-card"><div class="bd-head"><span class="bd-ic">🤝</span><h4>Dein Sprech-Buddy</h4></div><p class="bd-blurb">Lädt…</p></div>';
    var st = await loadStatus();
    var paint = function (s) {
      host.innerHTML = '<div class="bd-card">' + widgetHtml(s) + '</div>';
      host.__st = s;
      bind(host, paint);
    };
    paint(st);
    return st;
  }

  async function renderBuddy() {
    injectStyle();
    var r = document.getElementById('v-buddy'); if (!r) return;
    r.innerHTML = '<div class="pagehead"><h1>🤝 Sprech-Buddy</h1></div><div class="bd-card"><p class="bd-blurb">Lädt…</p></div>';
    var st = await loadStatus();
    var paint = function (s) {
      r.innerHTML =
        '<div class="pagehead"><h1>🤝 Sprech-Buddy</h1><p>Finde einen Lernpartner auf deinem Niveau — 10 Minuten Sprechen pro Tag machen den Unterschied.</p></div>' +
        '<div class="bd-grid">' +
          '<div><div class="bd-sec">Dein Match</div><div class="bd-card" id="bdW">' + widgetHtml(s) + '</div></div>' +
          '<div><div class="bd-sec">So funktioniert\'s</div><div class="bd-steps">' +
            '<div class="bd-step"><div class="n">1</div><div><h4>Anmelden</h4><p>Tippe auf „Buddy finden" — du kommst in den Pool deines Niveaus.</p></div></div>' +
            '<div class="bd-step"><div class="n">2</div><div><h4>Match</h4><p>Wir verbinden dich mit einem passenden Lernpartner aus der Community.</p></div></div>' +
            '<div class="bd-step"><div class="n">3</div><div><h4>Sprechen</h4><p>Schreibt euch, verabredet euch und übt jeden Tag 10 Minuten zusammen.</p></div></div>' +
          '</div><p class="bd-safe">🔒 Deine Kontaktdaten bleiben privat — geschrieben wird nur hier in der Community. Du kannst jederzeit „Pause" machen oder einen neuen Buddy wählen.</p></div>' +
        '</div>';
      var w = document.getElementById('bdW');
      if (w) { w.__st = s; bind(w, function (s2) { paint(s2); }); }
    };
    paint(st);
  }

  window.renderBuddyWidget = renderBuddyWidget;
  window.renderBuddy = renderBuddy;
})();
