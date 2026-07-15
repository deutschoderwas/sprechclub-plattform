/* ============================================================
   deutschoderwas club · Sprech-Challenge des Tages
   Erwartet Globals aus konto.html: sb, user, profile, esc, go
   - window.renderSprechBanner(hostEl)  -> Banner (z.B. oben im Community-Feed)
   - window.renderSprech()              -> eigene Ansicht #v-sprech
   Antworten hakt in die Audio-Pipeline ein:
     window.startSprechAnswer(promptText, onDone)  (von community.js gestellt)
     danach sb.rpc('speak_mark_answer', { p_message }) fuer die Serie.
   ============================================================ */
(function () {
  'use strict';
  var styled = false;
  function getSb() { try { return window.sb || (typeof sb !== 'undefined' ? sb : null); } catch (e) { return null; } }
  function getUser() { try { return window.user || (typeof user !== 'undefined' ? user : null); } catch (e) { return null; } }
  function E(s) { return (window.esc ? window.esc(s) : String(s == null ? '' : s).replace(/[&<>"]/g, function (c) { return ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]); })); }
  function initials(n) { n = String(n || 'M').trim(); var p = n.split(/\s+/); return ((p[0] || '?')[0] + (p[1] ? p[1][0] : '')).toUpperCase(); }
  function avColor(name) { var s = String(name || '?'), h = 0; for (var i = 0; i < s.length; i++) { h = (h * 31 + s.charCodeAt(i)) >>> 0; } return 'hsl(' + (h % 360) + ',48%,70%)'; }

  function injectStyle() {
    if (styled) return; styled = true;
    var css = `
    .sq-card{position:relative;border:1px solid #ECE4D3;border-radius:18px;background:linear-gradient(180deg,#FFFDF8,#FFF9EE);box-shadow:0 10px 30px rgba(30,25,15,.06);overflow:hidden}
    .sq-card::before{content:"";position:absolute;left:0;top:0;bottom:0;width:5px;background:linear-gradient(180deg,#2DD4BF,#12A594)}
    .sq-in{display:flex;gap:22px;align-items:center;padding:20px 24px 20px 26px;flex-wrap:wrap}
    .sq-main{flex:1;min-width:240px}
    .sq-toprow{display:flex;align-items:center;gap:10px;flex-wrap:wrap;margin-bottom:10px}
    .sq-pill{font-size:11px;font-weight:800;letter-spacing:.09em;text-transform:uppercase;color:#0E8577;background:#E7FBF6;border:1px solid #C3EBE3;border-radius:999px;padding:4px 11px}
    .sq-streak{display:inline-flex;align-items:center;gap:6px;font-size:12px;font-weight:800;color:#8a5a00;background:#FFF4D6;border:1px solid #F3E2A0;border-radius:999px;padding:4px 11px}
    .sq-q{font-family:'Space Grotesk',Inter,sans-serif;font-weight:700;font-size:21px;line-height:1.28;color:#211E18;margin:0 0 6px}
    .sq-hint{font-size:13.5px;color:#6B6154;line-height:1.5;margin:0;max-width:560px}
    .sq-foot{display:flex;align-items:center;gap:11px;margin-top:16px;flex-wrap:wrap}
    .sq-stack{display:flex;align-items:center}
    .sq-stack .av{width:30px;height:30px;border-radius:50%;border:2px solid #FFFCF5;display:flex;align-items:center;justify-content:center;font-size:11px;font-weight:800;color:#3a3a3a;margin-left:-9px;box-shadow:0 1px 2px rgba(0,0,0,.08)}
    .sq-stack .av:first-child{margin-left:0}
    .sq-stack .more{background:#EDE7DA;color:#7a7365}
    .sq-count{font-size:13px;color:#6B6154}
    .sq-count b{color:#211E18;font-weight:800;font-family:'Space Grotesk',inherit}
    .sq-side{flex:0 0 auto;display:flex;flex-direction:column;align-items:center;gap:8px;min-width:96px}
    .sq-mic{width:66px;height:66px;border-radius:50%;border:none;cursor:pointer;background:radial-gradient(120% 120% at 30% 25%,#3DE0CC,#12A594);box-shadow:0 10px 24px rgba(18,165,148,.35),inset 0 1px 0 rgba(255,255,255,.4);color:#06403A;font-size:26px;display:flex;align-items:center;justify-content:center;transition:transform .12s,box-shadow .12s;font-family:inherit}
    .sq-mic:hover{transform:translateY(-2px);box-shadow:0 14px 30px rgba(18,165,148,.42)}
    .sq-mic:active{transform:translateY(0)}
    .sq-side .lbl{font-size:12.5px;font-weight:700;color:#0E8577}
    .sq-card.done .sq-mic{background:#EAF6F3;color:#0E8577;box-shadow:inset 0 0 0 1.5px #C3EBE3;cursor:default}
    .sq-card.done .sq-mic:hover{transform:none;box-shadow:inset 0 0 0 1.5px #C3EBE3}
    .sq-card.done .sq-side .lbl{color:#0E8577}
    .sq-done-note{font-size:11.5px;color:#8B8F96;text-align:center;max-width:110px;line-height:1.35}
    /* eigene Ansicht */
    #v-sprech .sq-steps{display:grid;grid-template-columns:repeat(3,1fr);gap:14px;margin-top:20px}
    @media(max-width:720px){#v-sprech .sq-steps{grid-template-columns:1fr}}
    #v-sprech .sq-step{border:1px solid #EEE7D8;border-radius:14px;background:#fff;padding:16px 17px;box-shadow:0 1px 2px rgba(30,25,15,.05)}
    #v-sprech .sq-step .n{width:28px;height:28px;border-radius:9px;background:#ECFBF7;color:#0E8577;font-family:'Space Grotesk',inherit;font-weight:700;font-size:14px;display:flex;align-items:center;justify-content:center;margin-bottom:9px}
    #v-sprech .sq-step h4{margin:0 0 4px;font-size:15px}
    #v-sprech .sq-step p{margin:0;font-size:13px;color:#6B6154;line-height:1.5}
    #v-sprech .sq-week{display:flex;gap:8px;margin-top:6px}
    #v-sprech .sq-week .dot{flex:1;height:8px;border-radius:5px;background:#EDE7DA}
    #v-sprech .sq-week .dot.on{background:linear-gradient(90deg,#FFD84D,#FFCE00)}
    #v-sprech .sq-sec{font-size:13px;font-weight:800;color:#8B8F96;text-transform:uppercase;letter-spacing:.05em;margin:24px 2px 12px}
    `;
    var st = document.createElement('style'); st.textContent = css; document.head.appendChild(st);
  }

  async function loadData() {
    var sb = getSb(); var out = { prompt: null, stats: { today_count: 0, answered_today: false, streak: 0, recent: [] } };
    if (!sb) return out;
    try {
      var p = await sb.from('speak_prompts').select('prompt,hint,for_date').eq('is_active', true).lte('for_date', new Date().toISOString().slice(0, 10)).order('for_date', { ascending: false }).limit(1).single();
      if (p && p.data) out.prompt = p.data;
    } catch (e) {}
    try { var s = await sb.rpc('speak_stats'); if (s && s.data) out.stats = s.data; } catch (e) {}
    return out;
  }

  function bannerHtml(data) {
    var p = data.prompt || { prompt: 'Heute keine Sprech-Challenge — schau morgen wieder rein!', hint: '' };
    var st = data.stats || {};
    var streak = st.streak || 0, count = st.today_count || 0, done = !!st.answered_today;
    var recent = st.recent || [];

    var streakChip = streak > 0 ? '<span class="sq-streak">🔥 ' + streak + '-Tage-Serie</span>' : '';

    var stack = '';
    if (recent.length) {
      var shown = recent.slice(0, 4);
      stack = '<div class="sq-stack">' + shown.map(function (nm) {
        return '<span class="av" style="background:' + avColor(nm) + '">' + E(initials(nm)) + '</span>';
      }).join('') + (count > shown.length ? '<span class="av more">+' + (count - shown.length) + '</span>' : '') + '</div>';
    }
    var countTxt = count > 0
      ? '<span class="sq-count"><b>' + count + '</b> ' + (count === 1 ? 'Stimme heute' : 'Stimmen heute') + '</span>'
      : '<span class="sq-count">Mach heute den Anfang — deine Stimme zählt.</span>';

    var side = done
      ? '<div class="sq-side"><button type="button" class="sq-mic" aria-label="Heute erledigt">✓</button><span class="lbl">Erledigt</span><span class="sq-done-note">Stark! Komm morgen für die nächste Frage wieder.</span></div>'
      : '<div class="sq-side"><button type="button" class="sq-mic" id="sqAnswer" aria-label="Antworten">🎙️</button><span class="lbl">Antworten</span></div>';

    return '<div class="sq-card' + (done ? ' done' : '') + '"><div class="sq-in">' +
      '<div class="sq-main">' +
        '<div class="sq-toprow"><span class="sq-pill">Sprech-Challenge des Tages</span>' + streakChip + '</div>' +
        '<p class="sq-q">' + E(p.prompt) + '</p>' +
        (p.hint ? '<p class="sq-hint">' + E(p.hint) + '</p>' : '') +
        '<div class="sq-foot">' + stack + countTxt + '</div>' +
      '</div>' + side +
    '</div></div>';
  }

  function bindAnswer(scope, promptText) {
    var btn = scope.querySelector('#sqAnswer'); if (!btn) return;
    btn.addEventListener('click', function () {
      if (typeof window.startSprechAnswer === 'function') {
        window.startSprechAnswer(promptText, function (messageId) {
          try { var sb = getSb(); if (sb && messageId) sb.rpc('speak_mark_answer', { p_message: messageId }); } catch (e) {}
        });
      } else if (typeof window.go === 'function') { window.go('community'); }
      else { location.hash = 'community'; }
    });
  }

  // Banner in beliebigen Host rendern (z.B. oben im Community-Feed)
  async function renderSprechBanner(host) {
    injectStyle();
    if (typeof host === 'string') host = document.getElementById(host);
    if (!host) return;
    var data = await loadData();
    host.innerHTML = bannerHtml(data);
    bindAnswer(host, data.prompt ? data.prompt.prompt : '');
    return data;
  }

  // Eigene Ansicht
  async function renderSprech() {
    injectStyle();
    var r = document.getElementById('v-sprech'); if (!r) return;
    r.innerHTML = '<div class="pagehead"><h1>🎙️ Sprech-Challenge des Tages</h1></div><div class="sq-card"><div class="sq-in">Lädt…</div></div>';
    var data = await loadData();
    var st = data.stats || {}; var streak = st.streak || 0;
    var week = '';
    for (var i = 6; i >= 0; i--) { week += '<span class="dot' + (i < streak ? ' on' : '') + '"></span>'; }

    r.innerHTML =
      '<div class="pagehead"><h1>🎙️ Sprech-Challenge des Tages</h1><p>Jeden Tag eine kleine Frage — 60 Sekunden sprechen, Feedback bekommen, dranbleiben.</p></div>' +
      bannerHtml(data) +
      '<div class="sq-sec">Deine Serie</div>' +
      '<div class="sq-step" style="max-width:420px"><div style="font-size:13.5px;color:#6B6154;margin-bottom:8px">' +
        (streak > 0 ? '<b style="color:#211E18;font-family:\'Space Grotesk\',inherit">' + streak + ' Tage</b> in Folge — bleib dran! 🔥' : 'Starte heute deine Serie — jeden Tag eine Antwort.') +
      '</div><div class="sq-week">' + week + '</div></div>' +
      '<div class="sq-sec">So funktioniert\'s</div>' +
      '<div class="sq-steps">' +
        '<div class="sq-step"><div class="n">1</div><h4>Frage lesen</h4><p>Jeden Tag wartet eine neue, alltagsnahe Sprech-Aufgabe auf dich.</p></div>' +
        '<div class="sq-step"><div class="n">2</div><h4>Aufnehmen</h4><p>Tippe auf „Antworten" und nimm eine kurze Sprachnachricht auf — ganz ohne Druck.</p></div>' +
        '<div class="sq-step"><div class="n">3</div><h4>Feedback</h4><p>Das Team und deine Buddys hören rein und korrigieren freundlich. So wirst du hörbar besser.</p></div>' +
      '</div>';
    bindAnswer(r, data.prompt ? data.prompt.prompt : '');
  }

  window.renderSprechBanner = renderSprechBanner;
  window.renderSprech = renderSprech;
})();
