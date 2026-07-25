/* ============================================================
   deutschoderwas club · Schwebender Community-Chat-Knopf
   Läuft auf jeder Seite mit. Im Schülerbereich öffnet er die
   Chat-Ansicht, auf allen anderen Seiten führt er dorthin.
   Zähler kommt von der RPC community_ungelesen_gesamt().
   ============================================================ */
(function () {
  'use strict';

  var knopf = null, zahl = null, timer = null, gebaut = false;

  function imKonto() { return !!document.getElementById('v-community'); }
  function chatOffen() {
    if (!imKonto()) return false;
    var v = (location.hash || '').replace('#', '');
    return v === 'community';
  }
  function sb() { try { return window.sb || null; } catch (e) { return null; } }

  function stil() {
    if (document.getElementById('dowChatStil')) return;
    var st = document.createElement('style');
    st.id = 'dowChatStil';
    st.textContent = `
#dowChatFab{position:fixed;right:20px;bottom:22px;z-index:300;display:flex;align-items:center;gap:9px;
  background:linear-gradient(135deg,#12A594,#0E8577);color:#fff;border:none;border-radius:999px;
  padding:13px 19px 13px 16px;font-family:'Inter',system-ui,-apple-system,sans-serif;font-size:14px;font-weight:700;
  cursor:pointer;box-shadow:0 8px 26px rgba(14,133,119,.34),0 2px 6px rgba(0,0,0,.08);
  transition:transform .16s ease,box-shadow .16s ease,opacity .2s ease;text-decoration:none;line-height:1}
#dowChatFab:hover{transform:translateY(-2px);box-shadow:0 12px 32px rgba(14,133,119,.4)}
#dowChatFab:active{transform:translateY(0)}
#dowChatFab .cf-i{font-size:18px;line-height:1}
#dowChatFab .cf-n{position:absolute;top:-5px;right:-4px;min-width:21px;height:21px;padding:0 6px;border-radius:999px;
  background:#DD0000;color:#fff;font-size:11px;font-weight:800;display:none;align-items:center;justify-content:center;
  border:2px solid #fff;box-sizing:border-box}
#dowChatFab .cf-n.da{display:flex}
#dowChatFab.weg{display:none}
@keyframes dowChatPuls{0%{box-shadow:0 8px 26px rgba(14,133,119,.34),0 0 0 0 rgba(18,165,148,.5)}
  70%{box-shadow:0 8px 26px rgba(14,133,119,.34),0 0 0 14px rgba(18,165,148,0)}
  100%{box-shadow:0 8px 26px rgba(14,133,119,.34),0 0 0 0 rgba(18,165,148,0)}}
#dowChatFab.puls{animation:dowChatPuls 2s ease-out 2}
@media(max-width:900px){
  #dowChatFab{right:14px;bottom:84px;padding:12px 16px 12px 14px;font-size:13.5px}
  #dowChatFab .cf-t{display:none}
  #dowChatFab{border-radius:50%;width:54px;height:54px;padding:0;justify-content:center}
}
`;
    document.head.appendChild(st);
  }

  function bauen() {
    if (gebaut) return;
    gebaut = true;
    stil();
    knopf = document.createElement(imKonto() ? 'button' : 'a');
    knopf.id = 'dowChatFab';
    if (imKonto()) knopf.type = 'button'; else knopf.href = 'konto.html#community';
    knopf.setAttribute('aria-label', 'Community-Chat öffnen');
    knopf.innerHTML = '<span class="cf-i">💬</span><span class="cf-t">Community-Chat</span><span class="cf-n">0</span>';
    if (imKonto()) {
      knopf.addEventListener('click', function () {
        if (window.go) window.go('community'); else location.hash = 'community';
      });
    }
    document.body.appendChild(knopf);
    zahl = knopf.querySelector('.cf-n');
    sichtbarkeit();
    window.addEventListener('hashchange', sichtbarkeit);
  }

  function sichtbarkeit() {
    if (!knopf) return;
    knopf.classList.toggle('weg', chatOffen());
  }

  function setzen(n) {
    if (!zahl) return;
    n = Math.max(0, n | 0);
    zahl.textContent = n > 99 ? '99+' : String(n);
    zahl.classList.toggle('da', n > 0);
    if (n > 0 && !knopf.classList.contains('puls')) {
      knopf.classList.add('puls');
      setTimeout(function () { knopf && knopf.classList.remove('puls'); }, 4200);
    }
  }

  async function zaehlen() {
    var c = sb(); if (!c) return;
    try {
      var r = await c.rpc('community_ungelesen_gesamt');
      if (r && typeof r.data === 'number') setzen(r.data);
    } catch (e) {}
  }

  function start() {
    bauen();
    zaehlen();
    if (timer) clearInterval(timer);
    timer = setInterval(zaehlen, 90000);
    document.addEventListener('visibilitychange', function () { if (!document.hidden) zaehlen(); });
  }

  window.ChatKnopf = { start: start, zaehlen: zaehlen, setzen: setzen };

  // Auf Seiten ohne eigenen Start-Aufruf selbst hochfahren
  if (!document.getElementById('v-community')) {
    if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', function(){ bauen(); zaehlen(); });
    else { bauen(); zaehlen(); }
  }
})();
