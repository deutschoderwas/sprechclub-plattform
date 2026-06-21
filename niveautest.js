/* ============================================================
   deutschoderwas · Teste dein Deutschniveau – Test-Engine
   Eigenständige Mini-App, rendert in #niveautest-app.
   Braucht: niveautest-data.js (window.NIVEAUTEST)
   Bewertung nach Goethe/telc-Prinzip (siehe data-Datei).
   ============================================================ */
(function () {
  'use strict';
  var D = window.NIVEAUTEST;
  if (!D) { console.warn('NIVEAUTEST-Daten fehlen'); return; }

  // ---- Konfiguration (bei Bedarf anpassen) ----
  var CFG = {
    // Brevo-Newsletter-Formular (Double-Opt-in). Pro Seite überschreibbar via window.NIVEAUTEST_BREVO_URL:
    brevoServeUrl: (window.NIVEAUTEST_BREVO_URL || 'https://77660bde.sibforms.com/serve/MUIFAFxGmUPyAs01xjMCGfgSlBNdW6UOsHJsnTVskjW0rkCrOHGOpws9CMOflwga08XLd4cj9zK2bM9BEULUpsoyK3EGL6s6noGx3PfzaOEWkfc5gNZcfXt2_dkqOi5GYmyWpYGukizFZg1d4azqho-IxGgbLR6yNh-4UzqMCfbbNZSll_H6fiuDzZLkiuJAkn0l7cYLpDfE6r91'),
    // Vercel-Function: erfasst Lead + schickt Ergebnis-Mail.
    // Auf deutschoderwas.de wird window.NIVEAUTEST_RESULT_API auf die absolute Club-URL gesetzt.
    resultApi: (window.NIVEAUTEST_RESULT_API || '/api/niveau-result')
  };

  var LEVELS = D.LEVELS;
  var $ = function (id) { return document.getElementById(id); };
  function esc(s) { return String(s == null ? '' : s).replace(/[<>&"]/g, function (c) { return ({ '<': '&lt;', '>': '&gt;', '&': '&amp;', '"': '&quot;' })[c]; }); }
  function byId(id) { return D.ITEMS.filter(function (x) { return x.id === id; })[0]; }
  function shuffle(a) { a = a.slice(); for (var i = a.length - 1; i > 0; i--) { var j = Math.floor(Math.random() * (i + 1)); var t = a[i]; a[i] = a[j]; a[j] = t; } return a; }

  // ---- Zustand ----
  var S = {
    email: '', name: '', consent: false,
    mode: 'quick',
    qs: [],            // aktuelle Fragenliste (Reihenfolge)
    answers: {},       // id -> gewählter Index
    levelOrder: [],    // bei quick: Levels in Reihenfolge (für adaptiven Stopp)
    i: 0, root: null, finished: false
  };

  // ---- Fragen zusammenstellen ----
  function byLevelSkill(L, sk) { return D.ITEMS.filter(function (x) { return x.level === L && x.skill === sk; }); }

  // Mini-Test: 30 Aufgaben, strikt aufsteigend A1->C1 (6 pro Stufe: Lesen, Hören, dann Sprachbausteine)
  function pickMini() {
    var per = (typeof D.MINI_PER_LEVEL === 'number') ? D.MINI_PER_LEVEL : 6;
    var qs = [];
    LEVELS.forEach(function (L) {
      var les = byLevelSkill(L, 'lesen').slice(0, 2);
      var allHoe = byLevelSkill(L, 'hoeren');
      var examHoe = allHoe.filter(function (x) { return x.exam; });
      var hoe = (examHoe.length ? examHoe : allHoe).slice(0, 2); // im Mini-Test prüfungsnahe Hörszenen bevorzugen
      var bau = byLevelSkill(L, 'bausteine');
      var block = les.concat(hoe);
      block = block.concat(bau.slice(0, Math.max(0, per - block.length)));
      qs = qs.concat(block.slice(0, per));
    });
    return qs;
  }
  // Großer Test: alle Aufgaben, aufsteigend nach Stufe (innerhalb: Lesen, Hören, Sprachbausteine)
  function pickFull() {
    var order = ['lesen', 'hoeren', 'bausteine'];
    var qs = [];
    LEVELS.forEach(function (L) {
      order.forEach(function (sk) { byLevelSkill(L, sk).forEach(function (x) { qs.push(x); }); });
    });
    return qs;
  }

  // ---- Render-Helfer ----
  function setHTML(h) { S.root.innerHTML = h; }
  function brandBtn(label, onclick, cls) { return '<button class="nt-btn ' + (cls || '') + '" data-act="' + onclick + '">' + label + '</button>'; }

  // ===================== INTRO / GATE =====================
  // ---- Teaser auf der Seite (Hero + „Jetzt Test starten") ----
  function renderTeaser() {
    var t = document.getElementById('niveautest-teaser'); if (!t) return;
    var photo = D.HERO_CUTOUT || D.HERO_PHOTO || D.HERO_IMG || '';
    var bubble = D.HERO_BUBBLE || 'Auf welchem Niveau bin ich eigentlich?';
    t.innerHTML =
      '<div class="nt-card">' +
        '<div class="nt-hero nt-hero-cut">' +
          '<span class="nt-qm nt-qm1" aria-hidden="true">?</span>' +
          '<span class="nt-qm nt-qm2" aria-hidden="true">?</span>' +
          '<span class="nt-qm nt-qm3" aria-hidden="true">?</span>' +
          '<span class="nt-qm nt-qm4" aria-hidden="true">?</span>' +
          '<span class="nt-qm nt-qm5" aria-hidden="true">?</span>' +
          '<div class="nt-hero-text">' +
            '<div class="nt-bubble">' + esc(bubble) + '</div>' +
            '<div class="nt-hero-badges">' +
              LEVELS.map(function (L) { return '<span class="nt-lv-badge">' + L + '</span>'; }).join('') +
            '</div>' +
            '<a class="nt-btn nt-btn-primary nt-start" href="niveau-test.html">Jetzt Test starten →</a>' +
          '</div>' +
          '<div class="nt-cut"><img src="' + esc(photo) + '" alt="Julia – teste dein Deutschniveau"></div>' +
        '</div>' +
      '</div>';
  }

  // ---- Modal-Steuerung (Test öffnet sich in eigenem Fenster/Overlay) ----
  function openModal() {
    var m = document.getElementById('ntModal'); if (!m) { renderIntro(); return; }
    m.classList.add('open'); m.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
    renderIntro();
    var box = m.querySelector('.nt-modal-box'); if (box) box.scrollTop = 0;
  }
  function closeModal() {
    var m = document.getElementById('ntModal'); if (!m) return;
    m.classList.remove('open'); m.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
    try { var a = $('ntAudio'); if (a) a.pause(); } catch (e) {}
  }
  function setupModal() {
    var m = document.getElementById('ntModal'); if (!m) return;
    Array.prototype.forEach.call(m.querySelectorAll('[data-act="nt-close"]'), function (el) {
      el.addEventListener('click', closeModal);
    });
    document.addEventListener('keydown', function (e) { if (e.key === 'Escape' && m.classList.contains('open')) closeModal(); });
  }

  // ---- Test-Einstieg im Modal (kompakt, ohne Hero) ----
  function renderIntro() {
    S.finished = false;
    var unlocked = !!S.email;
    setHTML(
      '<div class="nt-card nt-intro">' +
        '<div class="nt-intro-body">' +
          '<span class="nt-eyebrow">Kostenlos · Goethe-/telc-Stil</span>' +
          '<h3 class="nt-h">Teste dein Deutschniveau 🎯</h3>' +
          '<p class="nt-sub">Interaktive Übungen mit <b>Leseverstehen</b>, <b>Hörverstehen</b> (echte Audios) und <b>Sprachbausteinen</b>. Du bekommst dein Niveau von <b>A1 bis C1</b> – bewertet nach demselben Prinzip wie Goethe &amp; telc.</p>' +
          (unlocked ? renderModeChoice() : renderGate()) +
        '</div>' +
      '</div>'
    );
    bind();
  }

  function renderGate() {
    return '<form class="nt-gate" id="ntGate">' +
        '<div class="nt-gate-row">' +
          '<input type="text" id="ntName" placeholder="Dein Vorname (optional)" autocomplete="given-name">' +
          '<input type="email" id="ntEmail" placeholder="deine@email.de" required autocomplete="email">' +
        '</div>' +
        '<label class="nt-consent"><input type="checkbox" id="ntConsent"> Ja, schick mir mein Ergebnis &amp; kostenlose Deutsch-Tipps per E-Mail. Jederzeit abbestellbar.</label>' +
        '<button type="submit" class="nt-btn nt-btn-primary nt-btn-lg">🔓 Gratis freischalten &amp; loslegen</button>' +
        '<div class="nt-gate-msg" id="ntGateMsg"></div>' +
        '<div class="nt-gate-note">Mit dem Freischalten stimmst du dem Erhalt von E-Mails zu. Kein Spam.</div>' +
      '</form>';
  }

  function renderModeChoice() {
    return '<div class="nt-welcome">Hallo' + (S.name ? ' ' + esc(S.name) : '') + ' 👋 Du bist startklar! Wähle deinen Test:</div>' +
      '<div class="nt-modes">' +
        '<button class="nt-mode" data-act="start:mini">' +
          '<div class="nt-mode-ic">⚡</div>' +
          '<div class="nt-mode-t">Mini-Test</div>' +
          '<div class="nt-mode-d">30 Aufgaben · von leicht bis schwer · ca. 7 Min</div>' +
        '</button>' +
        '<button class="nt-mode nt-mode-feat" data-act="start:full">' +
          '<div class="nt-mode-ic">📚</div>' +
          '<div class="nt-mode-t">Großer Test</div>' +
          '<div class="nt-mode-d">alle Fertigkeiten · ausführliche Auswertung · ca. 15–20 Min</div>' +
        '</button>' +
      '</div>';
  }

  // ===================== TESTLAUF =====================
  function startTest(mode) {
    S.mode = mode;
    S.answers = {};
    S.i = 0;
    S.qs = (mode === 'mini') ? pickMini() : pickFull();
    // Antwortoptionen je Frage einmal mischen (Reihenfolge stabil halten)
    S.qs.forEach(function (q) {
      if (!q._order) {
        var idx = q.options.map(function (_, k) { return k; });
        q._order = shuffle(idx);
      }
    });
    renderQuestion();
  }

  function curLevelOf(i) { return S.qs[i] ? S.qs[i].level : null; }

  // Visueller Niveau-Stepper A1 -> C1 (zeigt erledigte & aktuelle Stufe)
  function levelStepper(curLevel) {
    var ci = LEVELS.indexOf(curLevel);
    return '<div class="nt-step">' + LEVELS.map(function (L, i) {
      var st = i < ci ? 'done' : (i === ci ? 'cur' : '');
      return '<span class="nt-step-i ' + st + '">' + (i < ci ? '✓' : L) + '</span>';
    }).join('<span class="nt-step-line"></span>') + '</div>';
  }

  function renderQuestion() {
    var q = S.qs[S.i];
    var total = S.qs.length;
    var pct = Math.round((S.i) / total * 100);
    var sk = D.SKILLS[q.skill];
    var chosen = S.answers[q.id];
    var answered = chosen != null;

    var optsHtml = q._order.map(function (origIdx, pos) {
      var cls = 'nt-opt';
      if (answered) {
        if (origIdx === q.answer) cls += ' nt-correct';
        else if (origIdx === chosen) cls += ' nt-wrong';
        else cls += ' nt-dim';
      } else if (origIdx === chosen) cls += ' nt-sel';
      return '<button class="' + cls + '" data-act="opt:' + origIdx + '"' + (answered ? ' disabled' : '') +
        '><span class="nt-opt-k">' + String.fromCharCode(65 + pos) + '</span><span>' + esc(q.options[origIdx]) + '</span></button>';
    }).join('');

    var scene = q.img ? '<div class="nt-scene"><img src="' + esc(q.img) + '" alt="" loading="lazy"></div>' : '';
    var media = scene;
    if (q.skill === 'hoeren' && q.audio && D.AUDIO[q.audio]) {
      media = scene + '<div class="nt-audio">' +
        '<button class="nt-play" data-act="play"><span class="nt-play-ic">▶</span> Audio abspielen</button>' +
        '<span class="nt-audio-hint">🎧 So oft du willst</span>' +
        '<audio id="ntAudio" src="' + esc(D.AUDIO[q.audio].url) + '" preload="none"></audio>' +
      '</div>';
    } else if (q.skill === 'lesen' && q.context) {
      media = scene + '<div class="nt-readtext">' + esc(q.context) + '</div>';
    }

    var feedback = '';
    if (answered) {
      var ok = chosen === q.answer;
      feedback = '<div class="nt-fb ' + (ok ? 'nt-fb-ok' : 'nt-fb-no') + '">' +
        '<b>' + (ok ? '✓ Richtig!' : '✗ Nicht ganz.') + '</b> ' + esc(q.explain) + '</div>';
    }

    setHTML(
      '<div class="nt-card nt-run">' +
        '<div class="nt-bar"><div class="nt-bar-fill" style="width:' + pct + '%"></div></div>' +
        levelStepper(q.level) +
        '<div class="nt-meta">' +
          '<span class="nt-meta-l">' + sk.emoji + ' ' + esc(sk.name) + '</span>' +
          '<span class="nt-meta-r">Frage ' + (S.i + 1) + ' / ' + total + '</span>' +
        '</div>' +
        media +
        '<div class="nt-q">' + esc(q.q) + '</div>' +
        '<div class="nt-opts">' + optsHtml + '</div>' +
        feedback +
        '<div class="nt-run-foot">' +
          (answered ? brandBtn((S.i + 1 >= total ? 'Ergebnis ansehen →' : 'Weiter →'), 'next', 'nt-btn-primary nt-btn-lg') : '<span class="nt-pick-hint">Wähle eine Antwort</span>') +
        '</div>' +
      '</div>'
    );
    bind();
    scrollIntoTest(answered);
  }

  // Mobile-UX: nach Antwort zum Weiter-Button, bei neuer Frage zur Frage scrollen
  function scrollIntoTest(answered) {
    var raf = window.requestAnimationFrame || function (c) { return setTimeout(c, 16); };
    raf(function () {
      try {
        var card = S.root.querySelector('.nt-run'); if (!card) return;
        if (answered) { (S.root.querySelector('.nt-run-foot') || card).scrollIntoView({ behavior: 'smooth', block: 'center' }); }
        else { card.scrollIntoView({ behavior: 'smooth', block: 'start' }); }
      } catch (e) {}
    });
  }

  function choose(origIdx) {
    var q = S.qs[S.i];
    if (S.answers[q.id] != null) return;
    S.answers[q.id] = origIdx;
    renderQuestion();
  }

  function next() {
    // Adaptiver Stopp im Schnelltest: zwei schwache Stufen hintereinander => Ende
    if (S.mode === 'quick') {
      var here = curLevelOf(S.i), nxt = curLevelOf(S.i + 1);
      if (nxt && nxt !== here) {
        // gerade eine Stufe abgeschlossen -> Quote prüfen
        var ratios = levelRatios();
        var done = LEVELS.filter(function (L) { return ratios[L] && ratios[L].t > 0; });
        var last = ratios[here];
        var prevL = done[done.indexOf(here) - 1];
        var prev = prevL ? ratios[prevL] : null;
        var weak = last && (last.c / last.t) < 0.5;
        var prevWeak = prev && (prev.c / prev.t) < 0.5;
        if ((here === 'A1' && last && last.c === 0) || (weak && prevWeak)) {
          return finish(); // Deckel erreicht
        }
      }
    }
    if (S.i + 1 >= S.qs.length) return finish();
    S.i++;
    renderQuestion();
  }

  function levelRatios() {
    var r = {};
    S.qs.forEach(function (q, idx) {
      if (idx > S.i) return; // nur beantwortete/aktuelle
      if (S.answers[q.id] == null) return;
      (r[q.level] = r[q.level] || { t: 0, c: 0 });
      r[q.level].t++;
      if (S.answers[q.id] === q.answer) r[q.level].c++;
    });
    return r;
  }

  // ===================== AUSWERTUNG =====================
  function gradeFor(pct) {
    for (var i = 0; i < D.SCHEME.grades.length; i++) { if (pct >= D.SCHEME.grades[i].min) return D.SCHEME.grades[i].label; }
    return D.SCHEME.grades[D.SCHEME.grades.length - 1].label;
  }

  function computeResults() {
    var byMod = {}, byLv = {};
    var answeredQs = S.qs.filter(function (q) { return S.answers[q.id] != null; });
    answeredQs.forEach(function (q) {
      var ok = S.answers[q.id] === q.answer;
      (byMod[q.skill] = byMod[q.skill] || { t: 0, c: 0 }); byMod[q.skill].t++; if (ok) byMod[q.skill].c++;
      (byLv[q.level] = byLv[q.level] || { t: 0, c: 0 }); byLv[q.level].t++; if (ok) byLv[q.level].c++;
    });
    // CEFR-Einstufung: höchste Stufe von unten mit >=60 %
    var placed = 'unter A1';
    for (var k = 0; k < LEVELS.length; k++) {
      var L = LEVELS[k], b = byLv[L];
      if (b && (b.c / b.t) >= (D.SCHEME.pass / 100)) placed = L; else break;
    }
    var totalC = 0, totalT = 0;
    answeredQs.forEach(function (q) { totalT++; if (S.answers[q.id] === q.answer) totalC++; });
    var overallPct = totalT ? Math.round(totalC / totalT * 100) : 0;
    return { byMod: byMod, byLv: byLv, placed: placed, overallPct: overallPct, correct: totalC, total: totalT };
  }

  function finish() {
    S.finished = true;
    var R = computeResults();
    renderResults(R);
    sendResult(R);
  }

  function gaugeAngle(placed) {
    var stops = ['unter A1', 'A1', 'A2', 'B1', 'B2', 'C1'];
    var idx = Math.max(0, stops.indexOf(placed));
    // -90deg (links) bis +90deg (rechts)
    return -90 + (idx / (stops.length - 1)) * 180;
  }

  function renderResults(R) {
    var info = D.LEVEL_INFO[R.placed] || D.LEVEL_INFO['A1'];
    var modOrder = ['lesen', 'hoeren', 'bausteine'];
    var modRows = modOrder.filter(function (s) { return R.byMod[s]; }).map(function (s) {
      var b = R.byMod[s], pct = Math.round(b.c / b.t * 100), sk = D.SKILLS[s];
      var pass = pct >= D.SCHEME.pass;
      return '<div class="nt-mod">' +
        '<div class="nt-mod-h"><span>' + sk.emoji + ' ' + esc(sk.name) + '</span><span class="nt-mod-pts">' + pct + ' / 100</span></div>' +
        '<div class="nt-mod-bar"><div class="nt-mod-fill ' + (pass ? 'ok' : 'no') + '" style="width:' + pct + '%"></div></div>' +
        '<div class="nt-mod-grade">' + esc(gradeFor(pct)) + '</div>' +
      '</div>';
    }).join('');

    var ang = gaugeAngle(R.placed);
    setHTML(
      '<div class="nt-card nt-result">' +
        '<div class="nt-confetti">🎉</div>' +
        '<span class="nt-eyebrow">Dein Ergebnis</span>' +
        '<div class="nt-gauge">' +
          '<div class="nt-gauge-arc"></div>' +
          '<div class="nt-gauge-needle" style="transform:rotate(' + ang + 'deg)"></div>' +
          '<div class="nt-gauge-hub"></div>' +
          '<div class="nt-gauge-scale">' + ['A1','A2','B1','B2','C1'].map(function(L){return '<span>'+L+'</span>';}).join('') + '</div>' +
        '</div>' +
        '<div class="nt-level-big">' + (R.placed === 'unter A1' ? 'unter A1' : R.placed) + '</div>' +
        '<div class="nt-level-title">' + esc(info.title) + '</div>' +
        '<p class="nt-level-text">' + esc(info.text) + '</p>' +
        '<div class="nt-mods">' + modRows + '</div>' +
        '<div class="nt-overall">Gesamt: <b>' + R.overallPct + '%</b> richtig (' + R.correct + '/' + R.total + ') · bestanden ab 60% (wie bei Goethe &amp; telc)</div>' +
        '<div class="nt-tip">💡 <b>Dein nächster Schritt:</b> ' + esc(info.tip) + '</div>' +
        '<div class="nt-mailnote" id="ntMailNote">📧 Wir schicken dir dein Ergebnis gerade per E-Mail …</div>' +
        '<div class="nt-result-cta">' +
          '<a class="nt-btn nt-btn-primary nt-btn-lg" href="https://www.deutschoderwas-club.de/#preise">🚀 Zum passenden Sprechclub</a>' +
          brandBtn('↺ Test wiederholen', 'restart', 'nt-btn-ghost') +
        '</div>' +
      '</div>'
    );
    bind();
    try { var rc = S.root.querySelector('.nt-result'); if (rc) (window.requestAnimationFrame || function (c) { setTimeout(c, 16); })(function () { rc.scrollIntoView({ behavior: 'smooth', block: 'start' }); }); } catch (e) {}
    // Nadel-Animation
    var needle = S.root.querySelector('.nt-gauge-needle');
    var raf = window.requestAnimationFrame || function (c) { return setTimeout(c, 16); };
    if (needle) { needle.style.transform = 'rotate(-90deg)'; raf(function () { setTimeout(function () { needle.style.transform = 'rotate(' + ang + 'deg)'; }, 60); }); }
  }

  // ===================== E-MAIL / LEAD =====================
  function subscribeBrevo(email, name) {
    // Double-Opt-in über das bestehende Brevo-Formular (versteckter iframe)
    try {
      var ifr = document.createElement('iframe');
      ifr.name = 'ntBrevoTarget'; ifr.style.display = 'none';
      document.body.appendChild(ifr);
      var f = document.createElement('form');
      f.action = CFG.brevoServeUrl; f.method = 'POST'; f.target = 'ntBrevoTarget'; f.style.display = 'none';
      var e = document.createElement('input'); e.type = 'email'; e.name = 'EMAIL'; e.value = email; f.appendChild(e);
      if (name) { var n = document.createElement('input'); n.type = 'text'; n.name = 'VORNAME'; n.value = name; f.appendChild(n); }
      document.body.appendChild(f); f.submit();
      setTimeout(function () { try { f.remove(); } catch (e) {} }, 4000);
    } catch (e) { /* still ok */ }
  }

  function sendResult(R) {
    var note = $('ntMailNote');
    if (!S.email) { if (note) note.style.display = 'none'; return; }
    var payload = {
      email: S.email, name: S.name, mode: S.mode,
      level: R.placed, overall: R.overallPct,
      modules: Object.keys(R.byMod).map(function (s) { return { skill: s, pct: Math.round(R.byMod[s].c / R.byMod[s].t * 100) }; })
    };
    fetch(CFG.resultApi, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(payload) })
      .then(function (r) { return r.ok ? r.json() : null; })
      .then(function (j) { if (note) note.innerHTML = (j && j.ok) ? '📧 Dein Ergebnis ist unterwegs in dein Postfach!' : '📧 Dein Ergebnis siehst du oben – Mail folgt in Kürze.'; })
      .catch(function () { if (note) note.innerHTML = '📧 Dein Ergebnis siehst du oben.'; });
  }

  // ===================== EVENT-BINDING =====================
  function bind() {
    // Gate-Formular
    var gate = $('ntGate');
    if (gate) {
      gate.addEventListener('submit', function (ev) {
        ev.preventDefault();
        var email = ($('ntEmail').value || '').trim();
        var name = ($('ntName').value || '').trim();
        var consent = $('ntConsent').checked;
        var msg = $('ntGateMsg');
        if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) { msg.textContent = 'Bitte gib eine gültige E-Mail-Adresse ein.'; return; }
        if (!consent) { msg.textContent = 'Bitte stimme dem Erhalt der E-Mail zu, um das Ergebnis zu bekommen.'; return; }
        S.email = email; S.name = name; S.consent = true;
        subscribeBrevo(email, name);
        renderIntro();
      });
    }
    // alle data-act Buttons
    Array.prototype.forEach.call(S.root.querySelectorAll('[data-act]'), function (b) {
      b.addEventListener('click', function () {
        var act = b.getAttribute('data-act');
        if (act.indexOf('start:') === 0) return startTest(act.split(':')[1]);
        if (act.indexOf('opt:') === 0) return choose(parseInt(act.split(':')[1], 10));
        if (act === 'next') return next();
        if (act === 'restart') return renderIntro();
        if (act === 'play') return playAudio();
        if (act === 'gostart') return gostart();
        if (act === 'nt-close') return closeModal();
      });
    });
    Array.prototype.forEach.call(S.root.querySelectorAll('[data-close]'), function (el) {
      el.addEventListener('click', closeModal);
    });
  }

  function gostart() {
    var em = $('ntEmail');
    if (em) { try { em.scrollIntoView({ behavior: 'smooth', block: 'center' }); } catch (e) {} em.focus(); return; }
    var m = S.root.querySelector('.nt-modes');
    if (m) { try { m.scrollIntoView({ behavior: 'smooth', block: 'center' }); } catch (e) {} }
  }

  function playAudio() {
    var a = $('ntAudio'); if (!a) return;
    var btn = S.root.querySelector('.nt-play');
    try { a.currentTime = 0; a.play(); if (btn) btn.classList.add('playing'); a.onended = function () { if (btn) btn.classList.remove('playing'); }; } catch (e) {}
  }

  // ---- Start ----
  function init() {
    if (window.NT_PAGE) { S.root = $('niveautest-app'); if (S.root) renderIntro(); return; }
    renderTeaser();
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init); else init();
})();
