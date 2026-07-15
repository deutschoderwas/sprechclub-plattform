/* ============================================================
   deutschoderwas club · 8-Wochen-Challenge (nur Challenger)
   Ziel: 30 Live-Stunden in 8 Wochen. Themen stehen im Kalender.
   Erwartet Globals aus konto.html: sb, user, profile, isActive, esc, go
   Rendert in #v-challenge. Einstieg: window.renderChallenge()
   ============================================================ */
(function () {
  'use strict';
  var styled = false;
  function getSb() { try { return window.sb || (typeof sb !== 'undefined' ? sb : null); } catch (e) { return null; } }
  function getUser() { try { return window.user || (typeof user !== 'undefined' ? user : null); } catch (e) { return null; } }
  function E(s) { return (window.esc ? window.esc(s) : String(s == null ? '' : s).replace(/[&<>"]/g, function (c) { return ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]); })); }
  function root() { return document.getElementById('v-challenge'); }

  function injectStyle() {
    if (styled) return; styled = true;
    var css = `
    #v-challenge .ch-hero{border-radius:18px;padding:24px 26px;color:#fff;position:relative;overflow:hidden;background:linear-gradient(135deg,#7a1f10,#B30000 55%,#DD0000 130%);box-shadow:0 14px 40px rgba(179,0,0,.22);margin-bottom:20px}
    #v-challenge .ch-hero::after{content:"";position:absolute;right:-50px;top:-50px;width:230px;height:230px;border-radius:50%;background:radial-gradient(circle,rgba(255,206,0,.35),transparent 70%)}
    #v-challenge .ch-hero .e{font-size:12px;font-weight:800;letter-spacing:.08em;text-transform:uppercase;color:#FFD84D;position:relative}
    #v-challenge .ch-hero h1{font-size:26px;margin:8px 0 4px;color:#fff;position:relative}
    #v-challenge .ch-hero .sub{color:#ffe3e0;font-size:14.5px;position:relative;margin:0 0 18px}
    #v-challenge .ch-num{position:relative;display:flex;align-items:baseline;gap:10px;margin-bottom:4px}
    #v-challenge .ch-num b{font-family:'Space Grotesk',inherit;font-weight:700;font-size:44px;line-height:1;color:#fff}
    #v-challenge .ch-num span{font-size:16px;color:#ffe3e0;font-weight:600}
    #v-challenge .ch-bar{position:relative;margin-top:14px;height:11px;background:rgba(255,255,255,.22);border-radius:6px;overflow:hidden}
    #v-challenge .ch-bar i{display:block;height:100%;background:linear-gradient(90deg,#FFD84D,#FFCE00);border-radius:6px;transition:width .5s}
    #v-challenge .ch-meta{position:relative;display:flex;flex-wrap:wrap;gap:8px 20px;margin-top:14px;font-size:13px;color:#ffe8e5}
    #v-challenge .ch-meta b{color:#fff;font-family:'Space Grotesk',inherit;font-weight:700}
    #v-challenge .ch-cta{margin-top:18px;position:relative;display:inline-flex;align-items:center;gap:8px;background:#fff;color:#B30000;font-weight:800;font-size:14px;border:none;border-radius:11px;padding:11px 18px;cursor:pointer;font-family:inherit}
    #v-challenge .ch-sec{font-size:13px;font-weight:800;color:#8B8F96;text-transform:uppercase;letter-spacing:.05em;margin:6px 2px 12px}
    #v-challenge .ch-card{border:1px solid #EEE7D8;border-radius:16px;background:#fff;padding:20px;box-shadow:0 1px 2px rgba(30,25,15,.05);max-width:760px}
    #v-challenge .ch-dots{display:grid;grid-template-columns:repeat(10,1fr);gap:9px;max-width:520px}
    #v-challenge .ch-dots .d{aspect-ratio:1;border-radius:9px;background:#F1EEE8;display:flex;align-items:center;justify-content:center;font-family:'Space Grotesk',inherit;font-weight:700;font-size:12px;color:#B9B36A;border:1px solid #ECE6D6}
    #v-challenge .ch-dots .d.on{background:linear-gradient(135deg,#2DD4BF,#14B8A6);color:#06403A;border-color:#14B8A6;box-shadow:0 3px 10px rgba(18,165,148,.25)}
    #v-challenge .ch-dots .d.goal{background:#FFF7DA;border:1.5px solid #FFCE00;color:#8a6a00}
    #v-challenge .ch-dots .d.goal.on{background:linear-gradient(135deg,#FFD84D,#FFCE00);color:#7a5c00;border-color:#FFCE00}
    #v-challenge .ch-note{font-size:12.5px;color:#8B8F96;margin:16px 0 0;line-height:1.5}
    #v-challenge .ch-stats{display:flex;gap:12px;flex-wrap:wrap;margin:2px 0 20px;max-width:760px}
    #v-challenge .ch-stat{flex:1;min-width:150px;border:1px solid #EEE7D8;border-radius:14px;background:#fff;padding:15px 16px;box-shadow:0 1px 2px rgba(30,25,15,.05)}
    #v-challenge .ch-stat .k{font-family:'Space Grotesk',inherit;font-weight:700;font-size:26px;color:#22201B;line-height:1}
    #v-challenge .ch-stat .l{font-size:12.5px;color:#8B8F96;margin-top:5px}
    #v-challenge .ch-stat.hl .k{color:#0E8577}
    #v-challenge .ch-stat.warn .k{color:#B30000}
    #v-challenge .ch-lock{text-align:center;padding:40px 22px;border:2px solid #f5b942;background:#fff8ec;border-radius:16px;max-width:520px;margin:8px auto}
    #v-challenge .ch-lock .ic{font-size:44px;margin-bottom:8px}
    #v-challenge .ch-lock h3{margin:0 0 6px}
    #v-challenge .ch-lock p{color:#6B5B2E;font-size:14px;max-width:400px;margin:0 auto}
    `;
    var st = document.createElement('style'); st.textContent = css; document.head.appendChild(st);
  }

  function d0(x){ var d=new Date(x); return new Date(d.getFullYear(),d.getMonth(),d.getDate()); }
  function fmtDate(x){ try{ return new Date(x).toLocaleDateString('de-DE',{day:'numeric',month:'long'});}catch(e){return String(x);} }

  async function renderChallenge() {
    injectStyle();
    var r = root(); if (!r) return;
    var sb = getSb(), me = getUser();
    r.innerHTML = '<div class="pagehead"><h1>🔥 8-Wochen-Challenge</h1></div><div class="ch-card">Lädt…</div>';
    if (!sb || !me) { r.innerHTML = lockHtml(); return; }

    // Zugang: nur Challenger oder Team
    var ok = false;
    try { var pr = await sb.from('profiles').select('is_admin,is_teacher,is_challenger').eq('id', me.id).single(); ok = !!(pr.data && (pr.data.is_challenger || pr.data.is_admin || pr.data.is_teacher)); } catch (e) {}
    if (!ok) { r.innerHTML = lockHtml(); return; }

    var settings = { start_date: '2026-08-03', title: '8-Wochen-Challenge', weeks: 8, target_hours: 30 };
    try { var cs = await sb.from('challenge_settings').select('start_date,title,weeks,target_hours').limit(1).single(); if (cs.data) settings = cs.data; } catch (e) {}

    var done = 0;
    try { var h = await sb.rpc('challenge_my_hours'); if (typeof h.data === 'number') done = h.data; } catch (e) {}

    var target = settings.target_hours || 30;
    var totalW = settings.weeks || 8;
    var start = d0(settings.start_date), today = d0(new Date());
    var msDay = 86400000, msWeek = msDay * 7;
    var end = new Date(start.getTime() + totalW * msWeek);
    var diffDays = Math.round((today - start) / msDay);
    var daysLeft = Math.max(0, Math.round((end - today) / msDay));
    var started = diffDays >= 0;
    var finished = today >= end;
    var remaining = Math.max(0, target - done);
    var pct = Math.min(100, Math.round(done / target * 100));
    var weeksLeft = Math.max(0, Math.ceil(daysLeft / 7));
    var perWeek = (!finished && weeksLeft > 0) ? Math.ceil(remaining / weeksLeft) : 0;

    // Hero-Status
    var subLine, metaLine;
    if (!started) {
      subLine = 'Ziel: <b>' + target + ' Live-Stunden</b> in ' + totalW + ' Wochen.';
      metaLine = 'Start am <b>' + fmtDate(start) + '</b> · noch ' + Math.abs(diffDays) + ' Tag' + (Math.abs(diffDays) === 1 ? '' : 'e') + ' bis zum Start';
    } else if (finished) {
      subLine = done >= target ? 'Geschafft! Du hast dein Ziel erreicht. 🎉' : 'Challenge beendet — ' + done + ' von ' + target + ' Stunden.';
      metaLine = '';
    } else {
      subLine = 'Ziel: <b>' + target + ' Live-Stunden</b> in ' + totalW + ' Wochen.';
      metaLine = 'Noch <b>' + daysLeft + ' Tage</b>' + (perWeek > 0 ? ' · dein Tempo: <b>≈ ' + perWeek + ' Stunden/Woche</b>' : '');
    }

    var hero = '<div class="ch-hero"><div class="e">Exklusiv für Teilnehmer</div>' +
      '<h1>' + E(settings.title || '8-Wochen-Challenge') + '</h1>' +
      '<p class="sub">' + subLine + '</p>' +
      '<div class="ch-num"><b>' + done + '</b><span>von ' + target + ' Stunden</span></div>' +
      '<div class="ch-bar"><i style="width:' + pct + '%"></i></div>' +
      (metaLine ? '<div class="ch-meta">' + metaLine + '</div>' : '') +
      '<button type="button" class="ch-cta" id="chToLive">📅 Zu den Live-Stunden</button></div>';

    // Statistik
    var stats = '<div class="ch-stats">' +
      '<div class="ch-stat hl"><div class="k">' + done + '</div><div class="l">Besuchte Stunden</div></div>' +
      '<div class="ch-stat"><div class="k">' + remaining + '</div><div class="l">Noch bis zum Ziel</div></div>' +
      '<div class="ch-stat ' + (started && !finished && daysLeft <= 14 ? 'warn' : '') + '"><div class="k">' + (finished ? '–' : daysLeft) + '</div><div class="l">' + (finished ? 'Beendet' : 'Tage übrig') + '</div></div>' +
      '</div>';

    // 30 Zellen — jede fünfte ist ein Meilenstein
    var dots = '';
    for (var i = 1; i <= target; i++) {
      var isGoal = (i % 5 === 0);
      var on = i <= done;
      dots += '<div class="d' + (isGoal ? ' goal' : '') + (on ? ' on' : '') + '">' + (isGoal || on ? i : '') + '</div>';
    }

    r.innerHTML = '<div class="pagehead"><h1>🔥 8-Wochen-Challenge</h1><p>Besuche ' + target + ' Live-Stunden in ' + totalW + ' Wochen — dein Turbo für flüssiges Deutsch.</p></div>' +
      hero + stats +
      '<div class="ch-sec">Deine ' + target + ' Stunden</div>' +
      '<div class="ch-card"><div class="ch-dots">' + dots + '</div>' +
      '<p class="ch-note">Jede besuchte Live-Stunde füllt automatisch ein Feld — die Themen findest du im Kalender unter „Live-Stunden“. Anwesenheit wird nach der Stunde eingetragen.</p></div>';

    var btn = document.getElementById('chToLive');
    if (btn) btn.addEventListener('click', function () { if (typeof go === 'function') go('live'); else location.hash = 'live'; });
  }

  function lockHtml() {
    return '<div class="pagehead"><h1>🔥 8-Wochen-Challenge</h1></div>' +
      '<div class="ch-lock"><div class="ic">🔒</div><h3>Nur für Challenge-Teilnehmer</h3>' +
      '<p>Die 8-Wochen-Challenge ist ein exklusives Programm: 30 Live-Stunden in 8 Wochen. Wenn du dabei bist, wird dieser Bereich für dich freigeschaltet.</p></div>';
  }

  window.renderChallenge = renderChallenge;
})();
