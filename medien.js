/* ============================================================
   Medien — Reels, Podcast, Videos an einem Ort.
   Holt die Podcastfolgen aus podcasts.js (die kommen selbst aus
   der Datenbank) und zeigt daneben die Plätze für Julias Reels
   und die längeren Erklärvideos.
   ============================================================ */
(function () {
  var STIL = [
    '#v-medien .md-filter{display:flex;gap:7px;margin:0 0 14px;overflow-x:auto}',
    '#v-medien .md-filter button{background:#fff;border:1.5px solid var(--border,#E7ECEE);border-radius:999px;',
    'padding:7px 15px;font:inherit;font-size:13.5px;font-weight:700;cursor:pointer;white-space:nowrap}',
    '#v-medien .md-filter button.an{background:var(--ink,#14181B);color:#fff;border-color:var(--ink,#14181B)}',
    '#v-medien .md-gitter{display:grid;grid-template-columns:repeat(auto-fill,minmax(150px,1fr));gap:11px}',
    '#v-medien .md-kachel{background:#fff;border:1px solid var(--border,#E7ECEE);border-radius:15px;overflow:hidden;cursor:pointer}',
    '#v-medien .md-bild{height:96px;display:grid;place-items:center;font-size:30px;background:var(--turq-soft,#E6F8FC)}',
    '#v-medien .md-kachel:nth-child(2n) .md-bild{background:var(--gold-soft,#FDF1D6)}',
    '#v-medien .md-text{padding:10px 12px}',
    '#v-medien .md-text b{display:block;font-size:14.5px}',
    '#v-medien .md-text small{color:var(--text-soft,#5A6B72);font-size:12px}',
    '#v-medien .md-dauer{display:inline-block;background:var(--ink,#14181B);color:#fff;border-radius:7px;',
    'padding:2px 8px;font-size:11px;font-weight:800;margin-bottom:4px}',
    '#v-medien .md-zeile{display:flex;gap:12px;align-items:center;background:#fff;border:1px solid var(--border,#E7ECEE);',
    'border-radius:14px;padding:11px 13px;margin-bottom:9px;cursor:pointer}',
    '#v-medien .md-play{width:36px;height:36px;border-radius:10px;background:var(--turq-soft,#E6F8FC);',
    'color:var(--turq-ink,#10627A);display:grid;place-items:center;font-size:15px;flex:none}',
    '#v-medien .md-zeile b{display:block;font-size:15px}',
    '#v-medien .md-zeile small{color:var(--text-soft,#5A6B72);font-size:12.5px}',
    '#v-medien .md-stufe{margin-left:auto;background:var(--gold-soft,#FDF1D6);color:#7a5504;border-radius:999px;',
    'padding:2px 9px;font-size:11.5px;font-weight:800}',
    '#v-medien .md-leer{background:#fff;border:1px dashed var(--border,#E7ECEE);border-radius:15px;padding:20px;',
    'text-align:center;color:var(--text-soft,#5A6B72);font-size:14px}'
  ].join('');

  function stil() {
    if (document.getElementById('mdStil')) return;
    var e = document.createElement('style'); e.id = 'mdStil'; e.textContent = STIL;
    document.head.appendChild(e);
  }

  function folgen() {
    var l = window.PODCASTS || window.PODCASTS_SEED || [];
    return l.slice().sort(function (a, b) {
      return String(b.datum || '').localeCompare(String(a.datum || ''));
    });
  }

  window.mdTeil = function (n) {
    ['md-reels', 'md-podcast', 'md-videos'].forEach(function (id, i) {
      var el = document.getElementById(id); if (el) el.style.display = i === n ? '' : 'none';
    });
    var kn = document.querySelectorAll('#v-medien .md-filter button');
    Array.prototype.forEach.call(kn, function (b, i) { b.classList.toggle('an', i === n); });
  };

  window.renderMedien = function () {
    stil();
    var ziel = document.getElementById('v-medien'); if (!ziel) return;
    var f = folgen();

    var podcast = f.length
      ? f.map(function (p) {
          return '<div class="md-zeile" onclick="location.href=\'podcast.html#' + (p.id || '') + '\'">' +
            '<span class="md-play">▶</span>' +
            '<span><b>' + (p.titel || 'Folge') + '</b>' +
            '<small>' + (p.tag ? p.tag + ' · ' : '') + 'mit Text zum Mitlesen</small></span>' +
            (p.level ? '<span class="md-stufe">' + p.level + '</span>' : '') + '</div>';
        }).join('')
      : '<div class="md-leer">Die Folgen werden geladen …</div>';

    ziel.innerHTML =
      '<div class="pagehead"><h1>Medien</h1><p>Hören und sehen — kurz zwischendurch oder in Ruhe.</p></div>' +
      '<div class="md-filter">' +
        '<button onclick="mdTeil(0)">Reels</button>' +
        '<button class="an" onclick="mdTeil(1)">Podcast</button>' +
        '<button onclick="mdTeil(2)">Videos</button>' +
      '</div>' +
      '<div id="md-reels" style="display:none"><div class="md-leer">' +
        'Hier kommen die kurzen Clips hin — die, die du sonst auf Instagram postest.<br>' +
        'Sobald die ersten hochgeladen sind, stehen sie hier nach Thema sortiert.' +
      '</div></div>' +
      '<div id="md-podcast">' + podcast + '</div>' +
      '<div id="md-videos" style="display:none"><div class="md-leer">' +
        'Platz für die längeren Erklärvideos — ein Thema von Anfang bis Ende,<br>mit den passenden Übungen direkt danach.' +
      '</div></div>';
  };
})();
