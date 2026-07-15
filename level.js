/* ============================================================
   deutschoderwas club · Sprach-Level & XP + Bestenliste
   Erwartet Globals aus konto.html: sb, user, profile, isActive, esc, go
   Rendert in #v-level. Einstieg: window.renderLevel()
   XP kommt automatisch aus xp_events (Trigger im Backend):
     Nachricht +3 · Sprachnachricht +5 · Bild +2 · Korrektur +10 · Live-Stunde +15
   ============================================================ */
(function () {
  'use strict';
  var styled = false;

  function getSb() { try { return window.sb || (typeof sb !== 'undefined' ? sb : null); } catch (e) { return null; } }
  function getUser() { try { return window.user || (typeof user !== 'undefined' ? user : null); } catch (e) { return null; } }
  function E(s) { return (window.esc ? window.esc(s) : String(s == null ? '' : s).replace(/[&<>"]/g, function (c) { return ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]); })); }
  function root() { return document.getElementById('v-level'); }

  // ---- Level-Leiter (kumulatives XP) ----
  var LEVELS = [
    { min: 0,    name: 'Einsteiger',      emoji: '🌱' },
    { min: 60,   name: 'Zuhörer',         emoji: '👂' },
    { min: 150,  name: 'Mitredner',       emoji: '💬' },
    { min: 300,  name: 'Plaudertasche',   emoji: '🗣️' },
    { min: 500,  name: 'Wortakrobat',     emoji: '🤹' },
    { min: 750,  name: 'Sprachtalent',    emoji: '⭐' },
    { min: 1100, name: 'Redegewandt',     emoji: '🔥' },
    { min: 1550, name: 'Sprachprofi',     emoji: '🏆' },
    { min: 2100, name: 'Wortmeister',     emoji: '👑' },
    { min: 3000, name: 'Deutsch-Legende', emoji: '🚀' }
  ];
  function levelFor(total) {
    var i = 0;
    for (var k = 0; k < LEVELS.length; k++) { if (total >= LEVELS[k].min) i = k; }
    var cur = LEVELS[i], next = LEVELS[i + 1] || null;
    var lo = cur.min, hi = next ? next.min : cur.min;
    var pct = next ? Math.round((total - lo) / (hi - lo) * 100) : 100;
    return { idx: i, num: i + 1, cur: cur, next: next, pct: Math.max(0, Math.min(100, pct)), toNext: next ? (hi - total) : 0 };
  }

  function injectStyle() {
    if (styled) return; styled = true;
    var css = `
    #v-level .lv-hero{border-radius:18px;padding:24px 26px;position:relative;overflow:hidden;background:linear-gradient(135deg,#0E5C52,#12A594 60%,#2DD4BF 130%);box-shadow:0 14px 40px rgba(18,165,148,.24);margin-bottom:20px;display:flex;gap:22px;align-items:center;flex-wrap:wrap}
    #v-level .lv-hero::after{content:"";position:absolute;right:-40px;bottom:-60px;width:220px;height:220px;border-radius:50%;background:radial-gradient(circle,rgba(255,206,0,.30),transparent 70%)}
    #v-level .lv-badge{flex:0 0 92px;width:92px;height:92px;border-radius:22px;background:rgba(255,255,255,.16);border:2px solid rgba(255,255,255,.5);display:flex;flex-direction:column;align-items:center;justify-content:center;position:relative;backdrop-filter:blur(2px)}
    #v-level .lv-badge .em{font-size:30px;line-height:1}
    #v-level .lv-badge .lb{font-size:10.5px;font-weight:800;letter-spacing:.06em;color:#fff;margin-top:3px;text-transform:uppercase;opacity:.92}
    #v-level .lv-badge .ln{font-family:'Space Grotesk',inherit;font-weight:700;font-size:19px;color:#fff;line-height:1}
    #v-level .lv-info{flex:1;min-width:220px;position:relative}
    #v-level .lv-info .e{font-size:12px;font-weight:800;letter-spacing:.08em;text-transform:uppercase;color:#CFFCF3}
    #v-level .lv-info h1{font-size:25px;margin:5px 0 3px;color:#fff}
    #v-level .lv-info .xp{color:#EAFFFB;font-size:14.5px;margin:0 0 14px}
    #v-level .lv-info .xp b{color:#fff;font-weight:800}
    #v-level .lv-bar{height:10px;background:rgba(255,255,255,.22);border-radius:6px;overflow:hidden}
    #v-level .lv-bar i{display:block;height:100%;background:linear-gradient(90deg,#FFD84D,#FFCE00);border-radius:6px;transition:width .5s}
    #v-level .lv-next{color:#EAFFFB;font-size:12.5px;margin-top:8px}
    #v-level .lv-grid{display:grid;grid-template-columns:1.3fr 1fr;gap:18px;align-items:start}
    @media(max-width:820px){#v-level .lv-grid{grid-template-columns:1fr}}
    #v-level .lv-sec{font-size:13px;font-weight:800;color:#8B8F96;text-transform:uppercase;letter-spacing:.05em;margin:2px 2px 10px}
    #v-level .lv-card{border:1px solid #EEE7D8;border-radius:16px;background:#fff;padding:18px 18px;box-shadow:0 1px 2px rgba(30,25,15,.05)}
    #v-level .lb-row{display:flex;align-items:center;gap:12px;padding:10px 8px;border-radius:11px}
    #v-level .lb-row+.lb-row{border-top:1px solid #F2ECDF}
    #v-level .lb-row .rk{flex:0 0 30px;width:30px;height:30px;border-radius:9px;display:flex;align-items:center;justify-content:center;font-family:'Space Grotesk',inherit;font-weight:700;font-size:14px;background:#F1EEE8;color:#8B8F96}
    #v-level .lb-row .nm{flex:1;min-width:0;font-weight:600;font-size:14.5px;color:#22201B;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
    #v-level .lb-row .pt{font-family:'Space Grotesk',inherit;font-weight:700;font-size:14px;color:#0E8577;white-space:nowrap}
    #v-level .lb-row.top1 .rk{background:linear-gradient(135deg,#FFE27A,#FFCE00);color:#7a5c00}
    #v-level .lb-row.top2 .rk{background:#E7E9EC;color:#5A6169}
    #v-level .lb-row.top3 .rk{background:#F6DDBE;color:#8a5a1e}
    #v-level .lb-row.me{background:#F1FBF9;box-shadow:inset 0 0 0 1.5px #C3EBE3}
    #v-level .lb-row.me .nm::after{content:"· du";color:#0E8577;font-weight:700;margin-left:6px;font-size:12.5px}
    #v-level .lb-empty{color:#8B8F96;font-size:13.5px;text-align:center;padding:18px 8px}
    #v-level .lv-week{background:#F1FBF9;border:1px solid #C3EBE3;border-radius:11px;padding:11px 14px;margin-bottom:14px;font-size:13.5px;color:#06403A}
    #v-level .lv-week b{font-family:'Space Grotesk',inherit;font-weight:700}
    #v-level .earn{display:flex;flex-direction:column;gap:9px}
    #v-level .earn .row{display:flex;align-items:center;gap:11px;font-size:13.5px;color:#3A3A3A}
    #v-level .earn .row .ic{flex:0 0 32px;width:32px;height:32px;border-radius:10px;background:#F1EEE8;display:flex;align-items:center;justify-content:center;font-size:16px}
    #v-level .earn .row .pv{margin-left:auto;font-family:'Space Grotesk',inherit;font-weight:700;font-size:13.5px;color:#0E8577;background:#ECFBF7;border:1px solid #C3EBE3;border-radius:7px;padding:2px 9px}
    #v-level .earn .row.gold .pv{color:#8a6a00;background:#FFF7DA;border-color:#F3E2A0}
    #v-level .lv-ladder{display:flex;flex-wrap:wrap;gap:7px;margin-top:12px}
    #v-level .lv-ladder .st{font-size:11.5px;padding:4px 9px;border-radius:7px;background:#F5F1E8;color:#8B8F96;font-weight:600}
    #v-level .lv-ladder .st.on{background:#ECFBF7;color:#0E8577;border:1px solid #C3EBE3}
    #v-level .lv-ladder .st.cur{background:linear-gradient(135deg,#2DD4BF,#14B8A6);color:#06403A;font-weight:800}
    `;
    var st = document.createElement('style'); st.textContent = css; document.head.appendChild(st);
  }

  async function renderLevel() {
    injectStyle();
    var r = root(); if (!r) return;
    var sb = getSb(), me = getUser();
    r.innerHTML = '<div class="pagehead"><h1>🎯 Dein Sprach-Level</h1></div><div class="lv-card">Lädt…</div>';
    if (!sb || !me) { r.innerHTML = '<div class="pagehead"><h1>🎯 Dein Sprach-Level</h1></div><div class="lv-card">Bitte melde dich an.</div>'; return; }

    // Eigene XP (RLS: nur eigene Zeilen sichtbar)
    var total = 0, week = 0;
    try {
      var ev = await sb.from('xp_events').select('points,created_at').eq('user_id', me.id);
      var rows = (ev && ev.data) || [];
      var wkAgo = Date.now() - 7 * 86400000;
      rows.forEach(function (x) { var p = x.points || 0; total += p; if (new Date(x.created_at).getTime() >= wkAgo) week += p; });
    } catch (e) {}

    // Bestenliste diese Woche (aggregierte Funktion)
    var board = [];
    try { var lb = await sb.rpc('xp_leaderboard_week'); board = (lb && lb.data) || []; } catch (e) {}

    var L = levelFor(total);

    // Hero
    var badge = '<div class="lv-badge"><div class="em">' + L.cur.emoji + '</div>' +
      '<div class="lb">Level</div><div class="ln">' + L.num + '</div></div>';
    var nextLine = L.next
      ? 'Noch <b>' + L.toNext + ' XP</b> bis Level ' + (L.num + 1) + ': ' + E(L.next.name) + ' ' + L.next.emoji
      : 'Höchstes Level erreicht — Wahnsinn! 🎉';
    var hero = '<div class="lv-hero">' + badge +
      '<div class="lv-info"><div class="e">' + E(L.cur.name) + '</div>' +
      '<h1>' + total + ' XP gesammelt</h1>' +
      '<p class="xp">Diese Woche: <b>+' + week + ' XP</b></p>' +
      '<div class="lv-bar"><i style="width:' + L.pct + '%"></i></div>' +
      '<div class="lv-next">' + nextLine + '</div></div></div>';

    // Level-Leiter Chips
    var ladder = '<div class="lv-ladder">' + LEVELS.map(function (lv, i) {
      var cls = i < L.idx ? 'on' : (i === L.idx ? 'cur' : '');
      return '<span class="st ' + cls + '">' + lv.emoji + ' ' + E(lv.name) + '</span>';
    }).join('') + '</div>';

    // Bestenliste
    var lbHtml;
    if (!board.length) {
      lbHtml = '<div class="lb-empty">Noch keine Aktivität diese Woche. Schreib etwas in der Community und sei die/der Erste! ✨</div>';
    } else {
      lbHtml = board.map(function (row, i) {
        var rank = i + 1;
        var top = rank <= 3 ? ' top' + rank : '';
        var meClass = (row.user_id && me && row.user_id === me.id) ? ' me' : '';
        var medal = rank === 1 ? '🥇' : rank === 2 ? '🥈' : rank === 3 ? '🥉' : rank;
        return '<div class="lb-row' + top + meClass + '"><div class="rk">' + medal + '</div>' +
          '<div class="nm">' + E(row.name || 'Mitglied') + '</div>' +
          '<div class="pt">' + (row.points || 0) + ' XP</div></div>';
      }).join('');
    }

    // XP-Legende
    var earn = '<div class="earn">' +
      '<div class="row"><span class="ic">💬</span> Nachricht schreiben <span class="pv">+3</span></div>' +
      '<div class="row"><span class="ic">🎙️</span> Sprachnachricht senden <span class="pv">+5</span></div>' +
      '<div class="row gold"><span class="ic">✅</span> Jemanden korrigieren <span class="pv">+10</span></div>' +
      '<div class="row gold"><span class="ic">🎧</span> Live-Stunde besuchen <span class="pv">+15</span></div>' +
      '</div>';

    r.innerHTML =
      '<div class="pagehead"><h1>🎯 Dein Sprach-Level</h1><p>Jede Nachricht, jede Korrektur, jede Live-Stunde bringt dich weiter.</p></div>' +
      hero +
      '<div class="lv-grid">' +
        '<div><div class="lv-sec">🏅 Aktivste diese Woche</div>' +
          '<div class="lv-card">' +
            (week ? '<div class="lv-week">Deine Woche: <b>+' + week + ' XP</b> — mach weiter so!</div>' : '') +
            lbHtml + '</div>' +
          ladder + '</div>' +
        '<div><div class="lv-sec">✨ So sammelst du XP</div>' +
          '<div class="lv-card">' + earn +
            '<p style="font-size:12.5px;color:#8B8F96;margin:14px 0 0;line-height:1.5">Deine Punkte zählen automatisch — einfach aktiv sein in der Community und im Live-Unterricht.</p>' +
          '</div></div>' +
      '</div>';
  }

  window.renderLevel = renderLevel;
})();
