/* ============================================================
   deutschoderwas club · Fehler-Trainer
   Zeigt die persönlich gespeicherten Korrekturen (fehler_trainer).
   Erwartet Globals aus konto.html: sb, user, profile, isActive, esc
   Rendert in #v-fehler. Einstieg: window.renderFehlerTrainer()
   ============================================================ */
(function () {
  'use strict';
  var styled = false;
  function getSb() { try { return window.sb || (typeof sb !== 'undefined' ? sb : null); } catch (e) { return null; } }
  function getUser() { try { return window.user || (typeof user !== 'undefined' ? user : null); } catch (e) { return null; } }
  function E(s) { return (window.esc ? window.esc(s) : String(s == null ? '' : s).replace(/[&<>"]/g, function (c) { return ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]); })); }
  function root() { return document.getElementById('v-fehler'); }
  function active() { return (typeof isActive === 'function' ? isActive() : true); }
  function dstr(t) { try { return new Date(t).toLocaleDateString('de-DE', { day: '2-digit', month: 'short' }); } catch (e) { return ''; } }

  function injectStyle() {
    if (styled) return; styled = true;
    var css = `
    #v-fehler .ft-stats{display:grid;grid-template-columns:repeat(3,1fr);gap:14px;margin-bottom:22px}
    #v-fehler .ft-stat{background:#fff;border:1px solid #EEE7D8;border-radius:14px;padding:15px 18px;box-shadow:0 1px 2px rgba(30,25,15,.05)}
    #v-fehler .ft-stat .l{font-size:12.5px;color:#5A6169;margin-bottom:7px}
    #v-fehler .ft-stat .v{font-family:'Space Grotesk',inherit;font-size:24px;font-weight:700;line-height:1}
    #v-fehler .ft-stat .v.t{color:#0E8577}
    #v-fehler .ft-list{display:flex;flex-direction:column;gap:12px;max-width:760px}
    #v-fehler .ft-card{border:1px solid #C3EBE3;border-left:3px solid #2DD4BF;border-radius:13px;background:#F1FBF9;padding:14px 16px;transition:opacity .2s}
    #v-fehler .ft-card.done{background:#F7F6F3;border-color:#EEE7D8;border-left-color:#c7c6bf}
    #v-fehler .ft-top{display:flex;align-items:center;gap:8px;margin-bottom:7px}
    #v-fehler .ft-topic{font-size:11px;font-weight:800;letter-spacing:.03em;text-transform:uppercase;color:#0E8577;background:#ECFBF7;border:1px solid #C3EBE3;padding:2px 8px;border-radius:6px}
    #v-fehler .ft-card.done .ft-topic{color:#8B8F96;background:#F1EEE8;border-color:#EEE7D8}
    #v-fehler .ft-date{margin-left:auto;font-size:11.5px;color:#8B8F96}
    #v-fehler .ft-txt{font-size:15px;font-weight:700;color:#06403A;line-height:1.5}
    #v-fehler .ft-card.done .ft-txt{color:#5A6169}
    #v-fehler .ft-note{font-size:13px;color:#5A6169;margin-top:7px;padding-top:7px;border-top:1px dashed #C3EBE3;line-height:1.5}
    #v-fehler .ft-card.done .ft-note{border-top-color:#EEE7D8}
    #v-fehler .ft-act{margin-top:11px;display:flex;gap:8px;align-items:center}
    #v-fehler .ft-master{font-size:12.5px;font-weight:700;border:1px solid #C3EBE3;background:#fff;color:#06403A;border-radius:9px;padding:7px 13px;cursor:pointer;font-family:inherit}
    #v-fehler .ft-master:hover{background:#ECFBF7}
    #v-fehler .ft-master.on{background:linear-gradient(135deg,#2DD4BF,#14B8A6);color:#06403A;border-color:transparent}
    #v-fehler .ft-del{margin-left:auto;font-size:12px;color:#c7c6bf;background:none;border:none;cursor:pointer;font-family:inherit}
    #v-fehler .ft-del:hover{color:#DD0000}
    #v-fehler .ft-empty{text-align:center;padding:36px 22px;border:1px dashed #C3EBE3;border-radius:16px;background:#F1FBF9;max-width:520px;margin:8px auto}
    #v-fehler .ft-empty .ic{font-size:40px;margin-bottom:8px}
    #v-fehler .ft-empty h3{margin:0 0 6px}
    #v-fehler .ft-empty p{color:#5A6169;font-size:14px;max-width:400px;margin:0 auto}
    `;
    var st = document.createElement('style'); st.textContent = css; document.head.appendChild(st);
  }

  function gateHtml() {
    return '<div class="pagehead"><h1>📘 Fehler-Trainer</h1></div>' +
      '<div class="card" style="text-align:center;padding:34px 22px;border:2px solid #f5b942;background:#fff8ec">' +
      '<div style="font-size:40px">🔒</div><h2 style="margin:8px 0 6px">Nur für aktive Mitglieder</h2>' +
      '<p class="muted" style="max-width:420px;margin:0 auto 16px">Der Fehler-Trainer gehört zu deiner Mitgliedschaft.</p>' +
      '<a class="btn btn-primary" href="index.html#preise" style="display:inline-block">Pakete ansehen →</a></div>';
  }

  function cardHtml(r) {
    var done = !!r.mastered;
    return '<div class="ft-card' + (done ? ' done' : '') + '" data-id="' + E(r.id) + '">' +
      '<div class="ft-top"><span class="ft-topic">' + E(r.topic || 'Merksatz') + '</span><span class="ft-date">' + E(dstr(r.created_at)) + '</span></div>' +
      '<div class="ft-txt">' + E(r.corrected) + '</div>' +
      (r.note ? '<div class="ft-note">' + E(r.note) + '</div>' : '') +
      '<div class="ft-act">' +
        '<button type="button" class="ft-master' + (done ? ' on' : '') + '" data-master="' + E(r.id) + '">' + (done ? '✓ Gemeistert' : 'Als gemeistert markieren') + '</button>' +
        '<button type="button" class="ft-del" data-del="' + E(r.id) + '" title="Entfernen">entfernen</button>' +
      '</div></div>';
  }

  async function renderFehlerTrainer() {
    injectStyle();
    var r = root(); if (!r) return;
    var sb = getSb(), me = getUser();
    r.innerHTML = '<div class="pagehead"><h1>📘 Dein Fehler-Trainer</h1><p>Deine persönlichen Merksätze — aus jeder Korrektur in der Community.</p></div><div class="card">Lädt…</div>';
    if (!sb || !me) { r.innerHTML = gateHtml(); return; }
    if (!active()) { r.innerHTML = gateHtml(); return; }
    var rows = [];
    try {
      var res = await sb.from('fehler_trainer').select('id,corrected,note,topic,mastered,created_at').order('mastered', { ascending: true }).order('created_at', { ascending: false });
      rows = res.data || [];
    } catch (e) {}
    var total = rows.length, done = rows.filter(function (x) { return x.mastered; }).length;
    var head = '<div class="pagehead"><h1>📘 Dein Fehler-Trainer</h1><p>Deine persönlichen Merksätze — aus jeder Korrektur in der Community.</p></div>';
    if (!total) {
      r.innerHTML = head +
        '<div class="ft-empty"><div class="ic">🌱</div><h3>Noch keine Fehler gesammelt</h3>' +
        '<p>Sobald dich jemand in der Community korrigiert, tippst du auf „In meinen Fehler-Trainer" — hier sammeln sich dann deine ganz persönlichen Merksätze.</p></div>';
      return;
    }
    r.innerHTML = head +
      '<div class="ft-stats">' +
        '<div class="ft-stat"><div class="l">Gesammelt</div><div class="v">' + total + '</div></div>' +
        '<div class="ft-stat"><div class="l">Gemeistert</div><div class="v t">' + done + '</div></div>' +
        '<div class="ft-stat"><div class="l">Noch offen</div><div class="v">' + (total - done) + '</div></div>' +
      '</div>' +
      '<div class="ft-list">' + rows.map(cardHtml).join('') + '</div>';
    bind();
  }

  function bind() {
    var r = root(); if (!r) return;
    r.addEventListener('click', function (ev) {
      var t = ev.target; if (!t || !t.closest) return;
      var m = t.closest('[data-master]');
      if (m) { toggleMaster(m.getAttribute('data-master')); return; }
      var d = t.closest('[data-del]');
      if (d) { removeRow(d.getAttribute('data-del')); return; }
    });
  }

  async function toggleMaster(id) {
    var sb = getSb(); var card = root() && root().querySelector('.ft-card[data-id="' + id + '"]'); if (!card) return;
    var nowDone = !card.classList.contains('done');
    // optimistisch
    card.classList.toggle('done', nowDone);
    var btn = card.querySelector('[data-master]'); if (btn) { btn.classList.toggle('on', nowDone); btn.textContent = nowDone ? '✓ Gemeistert' : 'Als gemeistert markieren'; }
    updateStats();
    try { await sb.from('fehler_trainer').update({ mastered: nowDone }).eq('id', id); } catch (e) {}
  }

  async function removeRow(id) {
    if (typeof confirm === 'function' && !confirm('Diesen Merksatz aus deinem Fehler-Trainer entfernen?')) return;
    var sb = getSb(); var card = root() && root().querySelector('.ft-card[data-id="' + id + '"]'); if (card) card.remove();
    updateStats();
    try { await sb.from('fehler_trainer').delete().eq('id', id); } catch (e) {}
  }

  function updateStats() {
    var r = root(); if (!r) return;
    var cards = r.querySelectorAll('.ft-card'); var total = cards.length, done = 0;
    Array.prototype.forEach.call(cards, function (c) { if (c.classList.contains('done')) done++; });
    var vals = r.querySelectorAll('.ft-stat .v');
    if (vals.length === 3) { vals[0].textContent = total; vals[1].textContent = done; vals[2].textContent = total - done; }
    if (!total) renderFehlerTrainer();
  }

  window.renderFehlerTrainer = renderFehlerTrainer;
})();
