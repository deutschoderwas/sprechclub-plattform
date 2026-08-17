/* ============================================================
   Der Lernpfad — Anzeige und Fortschritt
   Zeichnet aus LERNPFAD_B1 einen Weg: Blöcke untereinander,
   darin Lektionen. Eine Lektion startet eine echte Übungsrunde
   über ubStartListe() aus ueben.js.
   Fortschritt liegt unter dem Schlüssel "pfad" im Browser und
   wird von fortschritt.js automatisch mit der Datenbank
   abgeglichen — wie der übrige Lernstand auch.
   ============================================================ */
(function () {
  var STIL = [
    '.lp-kopf{margin-bottom:16px}',
    '.lp-weiter{background:linear-gradient(135deg,var(--turq,#35AFD0),#2795b3);color:#fff;border-radius:20px;padding:18px 20px;margin-bottom:18px}',
    '.lp-weiter .lp-ey{font-size:11.5px;font-weight:700;letter-spacing:.09em;text-transform:uppercase;opacity:.85;margin:0 0 4px}',
    '.lp-weiter h3{margin:0 0 3px;font-size:20px;color:#fff}',
    '.lp-weiter p{margin:0 0 13px;font-size:14px;opacity:.93}',
    '.lp-weiter button{background:#fff;color:var(--turq-ink,#10627A);border:0;border-radius:13px;padding:12px 22px;',
    'font:inherit;font-weight:800;font-size:15px;cursor:pointer;box-shadow:0 3px 0 rgba(0,0,0,.13)}',
    '.lp-block{background:#fff;border:1px solid var(--border,#E7ECEE);border-radius:18px;margin-bottom:12px;overflow:hidden}',
    '.lp-bk{display:flex;gap:13px;align-items:center;padding:15px 17px;cursor:pointer}',
    '.lp-bk .em{width:44px;height:44px;border-radius:14px;background:var(--turq-soft,#E6F8FC);display:grid;place-items:center;font-size:21px;flex:none}',
    '.lp-block.fertig .lp-bk .em{background:var(--turq,#35AFD0);color:#fff}',
    '.lp-bk .tx{flex:1;min-width:0}',
    '.lp-bk b{display:block;font-size:16.5px}',
    '.lp-bk small{color:var(--text-soft,#5A6B72);font-size:12.5px}',
    '.lp-bk .pf{width:46px;text-align:right;font-weight:800;font-size:13px;color:var(--turq-ink,#10627A)}',
    '.lp-bal{height:6px;background:#EEF3F5;border-radius:99px;overflow:hidden;margin-top:7px}',
    '.lp-bal i{display:block;height:100%;background:var(--turq,#35AFD0);border-radius:99px;transition:.3s}',
    '.lp-lek{border-top:1px solid var(--border,#E7ECEE);padding:8px 17px 14px;display:none}',
    '.lp-block.auf .lp-lek{display:block}',
    '.lp-s{display:flex;gap:12px;align-items:flex-start;position:relative;padding:9px 0;cursor:pointer;background:none;border:0;width:100%;text-align:left;font:inherit}',
    '.lp-s:not(:last-child)::before{content:"";position:absolute;left:17px;top:44px;bottom:0;width:2.5px;background:var(--border,#E7ECEE)}',
    '.lp-s.fertig:not(:last-child)::before{background:var(--turq,#35AFD0)}',
    '.lp-p{width:36px;height:36px;border-radius:50%;display:grid;place-items:center;font-size:16px;flex:none;',
    'background:#fff;border:2.5px solid var(--border,#E7ECEE);z-index:1}',
    '.lp-s.fertig .lp-p{background:var(--turq,#35AFD0);border-color:var(--turq,#35AFD0);color:#fff}',
    '.lp-s.jetzt .lp-p{border-color:var(--gold,#EBA30B);background:var(--gold-soft,#FDF1D6);box-shadow:0 0 0 4px var(--gold-soft,#FDF1D6)}',
    '.lp-s .tx{flex:1;padding-top:2px}',
    '.lp-s b{display:block;font-size:15px}',
    '.lp-s small{color:var(--text-soft,#5A6B72);font-size:12.5px}',
    '.lp-pill{display:inline-block;background:var(--gold-soft,#FDF1D6);color:#7a5504;border-radius:999px;padding:2px 9px;font-size:11px;font-weight:700;margin-top:4px}',
    '.lp-leer{color:var(--text-soft,#5A6B72);font-size:13.5px;padding:8px 0}'
  ].join('');

  function stilEinmal() {
    if (document.getElementById('lpStil')) return;
    var s = document.createElement('style'); s.id = 'lpStil'; s.textContent = STIL;
    document.head.appendChild(s);
  }

  /* Welcher Pfad gerade gezeigt wird — Alltag oder Beruf.
     Die App schaltet mit lpBereich() um, der Club bleibt bei Alltag. */
  var welcher = 'alltag';
  function daten() {
    if (welcher === 'beruf' && window.LERNPFAD_BERUF) {
      var b = window.LERNPFAD_BERUF;
      if (!b.bauplan && window.LERNPFAD_B1) b.bauplan = window.LERNPFAD_B1.bauplan;
      return b;
    }
    return window.LERNPFAD_B1;
  }
  window.lpBereich = function (b) { welcher = b; if (window.renderLernpfad) renderLernpfad(); };
  function stand() { var a=(window.lsGet ? lsGet('pfad', {}) : {}) || {}; a[welcher]=a[welcher]||{}; return a[welcher]; }
  function merken(o) { if(!window.lsSet) return; var a=lsGet('pfad',{})||{}; a[welcher]=o; lsSet('pfad', a); }

  function fertig(blockId, lektionId) {
    var s = stand(); return !!(s[blockId] && s[blockId][lektionId]);
  }
  function anzahlFertig(block) {
    var d = daten(), n = 0;
    d.bauplan.forEach(function (b) { if (fertig(block.id, b.id)) n++; });
    return n;
  }

  /* Aufgaben einer Lektion aus dem vorhandenen Bestand schneiden.
     Der ganze Block wird auf einmal aufgeteilt, damit keine Aufgabe
     zweimal vorkommt und keine Lektion halb leer bleibt — egal, wie
     viele Lücken oder Zuordnungen ein Thema gerade hat. */
  function ausThema(skId, thId) {
    var U = window.UEBUNGEN; if (!U || !thId) return [];
    var sk = (U.skills || []).filter(function (x) { return x.id === skId; })[0];
    if (!sk) return [];
    var th = sk.themes.filter(function (x) { return x.id === thId; })[0];
    return th ? th.exercises.slice() : [];
  }

  function verteilung(block) {
    var ws = ausThema('wortschatz', block.ws);
    var ho = ausThema('hoeren', block.ho);
    var luecken = ws.filter(function (e) { return e.type === 'gap'; });
    var rest    = ws.filter(function (e) { return e.type !== 'gap'; });
    var n = 8;
    var l1 = rest.slice(0, n);
    var l2 = rest.slice(n, n * 2);
    var l4 = luecken.slice(0, n);
    // zu wenige Lücken? Mit dem auffüllen, was noch übrig ist.
    if (l4.length < n) l4 = l4.concat(rest.slice(n * 2, n * 2 + (n - l4.length)));
    var l3 = ho.slice(0, n);
    var alle = ws.concat(ho);
    var l5 = alle.slice().sort(function () { return Math.random() - .5; }).slice(0, 12);
    return { l1: l1, l2: l2, l3: l3, l4: l4, l5: l5 };
  }

  function aufgaben(block, plan) {
    var v = verteilung(block);
    return v[plan.id] || [];
  }

  /* Die erste noch offene Lektion im ganzen Pfad */
  function naechste() {
    var d = daten(); if (!d) return null;
    for (var i = 0; i < d.bloecke.length; i++) {
      var bl = d.bloecke[i];
      for (var j = 0; j < d.bauplan.length; j++) {
        var pl = d.bauplan[j];
        if (pl.quelle === 'ho' && !bl.ho) continue;          // Block ohne Hörteil
        if (!fertig(bl.id, pl.id)) return { block: bl, plan: pl };
      }
    }
    return null;
  }

  window.lpStart = function (blockId, lektionId) {
    var d = daten();
    var bl = d.bloecke.filter(function (x) { return x.id === blockId; })[0];
    var pl = d.bauplan.filter(function (x) { return x.id === lektionId; })[0];
    if (!bl || !pl) return;
    var items = aufgaben(bl, pl);
    if (!items.length) { if (window.toast) toast('Für diese Lektion fehlen noch Übungen.'); return; }
    window.__lpLaeuft = { block: blockId, lektion: lektionId };
    window.ubStartListe(bl.titel + ' · ' + pl.titel, items, items.length);
  };

  window.lpAuf = function (blockId) {
    var el = document.getElementById('lpb-' + blockId);
    if (el) el.classList.toggle('auf');
  };

  /* Runde vorbei -> Lektion abhaken (ueben.js meldet sich per Ereignis) */
  window.addEventListener('ub:fertig', function (ev) {
    var lauf = window.__lpLaeuft; if (!lauf) return;
    window.__lpLaeuft = null;
    var pct = (ev.detail && ev.detail.prozent) || 0;
    if (pct < 50) return;                       // unter der Hälfte: nicht abhaken
    var s = stand();
    s[lauf.block] = s[lauf.block] || {};
    s[lauf.block][lauf.lektion] = { pct: pct, am: Date.now() };
    merken(s);
    if (document.getElementById('v-lernpfad')) window.renderLernpfad();
  });

  window.renderLernpfad = function () {
    stilEinmal();
    var ziel = document.getElementById('v-lernpfad'); if (!ziel) return;
    var d = daten();
    if (!d) { ziel.innerHTML = '<div class="lp-leer">Der Lernpfad wird gerade gebaut.</div>'; return; }

    var n = naechste();
    var kopf = n
      ? '<div class="lp-weiter"><p class="lp-ey">' + (anzahlFertig(n.block) ? 'Da warst du stehengeblieben' : 'Als Nächstes') + '</p>' +
        '<h3>' + n.block.emoji + ' ' + n.block.titel + '</h3>' +
        '<p>' + n.plan.titel + ' — ' + n.plan.unter + '</p>' +
        '<button onclick="lpStart(\'' + n.block.id + '\',\'' + n.plan.id + '\')">Weiterlernen</button></div>'
      : '<div class="lp-weiter"><p class="lp-ey">Geschafft</p><h3>Du hast den ganzen Pfad durch 🎉</h3>' +
        '<p>Wiederhole, was wackelt — oder nimm dir das nächste Niveau vor.</p></div>';

    var bloecke = d.bloecke.map(function (bl) {
      var plaene = d.bauplan.filter(function (p) { return !(p.quelle === 'ho' && !bl.ho); });
      var fert = plaene.filter(function (p) { return fertig(bl.id, p.id); }).length;
      var pct = Math.round(fert / plaene.length * 100);
      var offen = n && n.block.id === bl.id;
      var lekt = plaene.map(function (p) {
        var ist = fertig(bl.id, p.id);
        var jetzt = offen && n.plan.id === p.id;
        return '<button class="lp-s' + (ist ? ' fertig' : '') + (jetzt ? ' jetzt' : '') + '" onclick="lpStart(\'' + bl.id + '\',\'' + p.id + '\')">' +
          '<span class="lp-p">' + (ist ? '✓' : (jetzt ? '▶' : '·')) + '</span>' +
          '<span class="tx"><b>' + p.titel + '</b><small>' + p.unter + ' · ' + p.anzahl + ' Aufgaben</small>' +
          (jetzt ? '<span class="lp-pill">Du bist hier</span>' : '') + '</span></button>';
      }).join('');
      return '<div class="lp-block' + (pct === 100 ? ' fertig' : '') + (offen ? ' auf' : '') + '" id="lpb-' + bl.id + '">' +
        '<div class="lp-bk" onclick="lpAuf(\'' + bl.id + '\')">' +
          '<span class="em">' + (pct === 100 ? '✓' : bl.emoji) + '</span>' +
          '<span class="tx"><b>' + bl.titel + '</b><small>' + bl.versprechen + '</small>' +
            '<span class="lp-bal"><i style="width:' + pct + '%"></i></span></span>' +
          '<span class="pf">' + fert + '/' + plaene.length + '</span>' +
        '</div><div class="lp-lek">' + lekt +
          (window.apWoerter ? '<button class="lp-s" onclick="apWoerter(\'' + bl.ws + '\',\'' + bl.titel.replace(/'/g,'') + '\')">' +
            '<span class="lp-p">📖</span><span class="tx"><b>Die Wörter ansehen</b>' +
            '<small>mit Erklärung in deiner Sprache</small></span></button>' : '') +
        '</div></div>';
    }).join('');

    ziel.innerHTML =
      '<div class="pagehead lp-kopf"><h1>Dein Lernpfad</h1>' +
      '<p>' + d.titel + ' — ein Weg, Block für Block. Alles baut aufeinander auf.</p></div>' +
      kopf + bloecke;
  };
})();
