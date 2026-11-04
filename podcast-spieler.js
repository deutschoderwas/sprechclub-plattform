/* ============================================================
   podcast-spieler.js — der Podcast wie ein richtiger Player

   Julia, 4.11.2026, auf die Liste im Schülerbereich: "Das schaut
   fürchterlich aus" — und davor: "Könnten wir den Podcast so machen,
   dass er wie bei Spotify abgespielt wird? Also richtig professionell
   und auch LIVE mitlesen, was ich sage?"

   Bisher lagen im Schülerbereich nackte <audio>-Leisten in einer
   Liste, und das Mitlesen war ein Textblock zum Aufklappen. Die
   wortgenauen Zeiten, die ElevenLabs mitliefert, lagen ungenutzt in
   der Datenbank — in einer Folge stecken bis zu achtzig Abschnitte
   mit Start und Ende für JEDES Wort.

   Jetzt: eine Leiste unten, die beim Weiterklicken weiterspielt, und
   darüber der Text, in dem das gesprochene Wort mitwandert. Klick auf
   einen Satz springt dorthin.

   Die Leiste hängt am <body>, nicht an einer Ansicht — deshalb
   überlebt sie den Wechsel von Medien zu Lernen. Genau das macht den
   Unterschied zwischen "Abspielgerät" und "Player".
   ============================================================ */
(function () {
  'use strict';
  if (window.PODSPIELER) return;

  var A = null;          // das Audio-Element, eines für alles
  var folge = null;      // die laufende Folge
  var satzJetzt = -1, wortJetzt = -1;
  var mitlesen = false;  // Textfenster offen?
  var folgen = true;     // Text mitscrollen?
  var tempi = [1, 1.25, 1.5, 0.85], tempoI = 0;

  function E(s) {
    return String(s == null ? '' : s).replace(/[&<>"]/g, function (c) {
      return ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' })[c];
    });
  }
  function el(id) { return document.getElementById(id); }
  function zeit(s) {
    s = Math.max(0, Math.floor(s || 0));
    return Math.floor(s / 60) + ':' + ('0' + (s % 60)).slice(-2);
  }
  function finde(id) {
    var alle = window.PODCASTS || [];
    for (var i = 0; i < alle.length; i++) if (alle[i].id === id) return alle[i];
    return null;
  }

  /* ---------- Gerüst ---------- */
  function bauen() {
    if (el('psBar')) return;
    stil();
    var d = document.createElement('div');
    d.id = 'psWrap';
    d.innerHTML =
      '<div id="psText" class="ps-text" hidden>'
      + '  <div class="ps-text-kopf">'
      + '    <b id="psTextTitel"></b>'
      + '    <div class="ps-text-knoepfe">'
      + '      <button id="psFolgen" class="ps-kl an" type="button">Mitscrollen</button>'
      + '      <button id="psTextZu" class="ps-kl" type="button">Schließen</button>'
      + '    </div>'
      + '  </div>'
      + '  <div id="psSaetze" class="ps-saetze"></div>'
      + '</div>'
      + '<div id="psBar" class="ps-bar" hidden>'
      + '  <div class="ps-fort" id="psFort"><i id="psFortIn"></i></div>'
      + '  <div class="ps-in">'
      + '    <img id="psBild" class="ps-bild" alt="">'
      + '    <div class="ps-meta">'
      + '      <b id="psTitel"></b>'
      + '      <span id="psUnter"></span>'
      + '    </div>'
      + '    <div class="ps-steuer">'
      + '      <button id="psZurueck" class="ps-rund" type="button" title="15 Sekunden zurück">−15</button>'
      + '      <button id="psPlay" class="ps-play" type="button" title="Abspielen">▶</button>'
      + '      <button id="psVor" class="ps-rund" type="button" title="15 Sekunden vor">+15</button>'
      + '    </div>'
      + '    <span class="ps-zeit"><b id="psJetzt">0:00</b> / <span id="psGanz">0:00</span></span>'
      + '    <button id="psTempo" class="ps-kl" type="button" title="Geschwindigkeit">1×</button>'
      + '    <button id="psLesen" class="ps-kl" type="button">Mitlesen</button>'
      + '    <button id="psZu" class="ps-rund ps-zu" type="button" title="Schließen">✕</button>'
      + '  </div>'
      + '</div>';
    document.body.appendChild(d);

    A = new Audio();
    A.preload = 'metadata';

    el('psPlay').onclick     = function () { A.paused ? A.play().catch(function () {}) : A.pause(); };
    el('psZurueck').onclick  = function () { A.currentTime = Math.max(0, A.currentTime - 15); };
    el('psVor').onclick      = function () { A.currentTime = Math.min(A.duration || 1e9, A.currentTime + 15); };
    el('psLesen').onclick    = function () { textSchalten(); };
    el('psTextZu').onclick   = function (e) { if (e) { e.preventDefault(); e.stopPropagation(); } textSchalten(false); };
    el('psTextZu').addEventListener('touchend', function (e) { e.preventDefault(); textSchalten(false); });
    el('psZu').onclick       = function (e) { if (e) { e.preventDefault(); e.stopPropagation(); } schliessen(); };
    /* Auf dem Handy kam der Klick manchmal gar nicht an: der Finger
       loest touchend aus, und wenn dazwischen gescrollt wurde, bleibt
       der Klick aus. Deshalb beide Wege, und der zweite verhindert
       den nachgereichten Klick. */
    el('psZu').addEventListener('touchend', function (e) { e.preventDefault(); schliessen(); });
    document.addEventListener('keydown', function (e) {
      if (e.key !== 'Escape') return;
      if (mitlesen) textSchalten(false); else if (!el('psBar').hidden) schliessen();
    });
    el('psFolgen').onclick   = function () {
      folgen = !folgen;
      el('psFolgen').classList.toggle('an', folgen);
      if (folgen) scrollen();
    };
    el('psTempo').onclick = function () {
      tempoI = (tempoI + 1) % tempi.length;
      A.playbackRate = tempi[tempoI];
      el('psTempo').textContent = String(tempi[tempoI]).replace('.', ',') + '×';
    };

    /* Springen: überall auf dem Balken, auch beim Ziehen. */
    var fort = el('psFort'), zieht = false;
    function setzen(ev) {
      var r = fort.getBoundingClientRect();
      var x = ((ev.touches ? ev.touches[0].clientX : ev.clientX) - r.left) / r.width;
      if (A.duration) A.currentTime = Math.max(0, Math.min(1, x)) * A.duration;
    }
    fort.addEventListener('mousedown', function (e) { zieht = true; setzen(e); });
    window.addEventListener('mousemove', function (e) { if (zieht) setzen(e); });
    window.addEventListener('mouseup', function () { zieht = false; });
    fort.addEventListener('touchstart', function (e) { setzen(e); }, { passive: true });

    A.addEventListener('play',  function () { el('psPlay').textContent = '❚❚'; });
    A.addEventListener('pause', function () { el('psPlay').textContent = '▶'; });
    A.addEventListener('loadedmetadata', function () { el('psGanz').textContent = zeit(A.duration); });
    A.addEventListener('timeupdate', takt);
    A.addEventListener('ended', function () {
      el('psPlay').textContent = '▶';
      if (folge && window.PODSPIELER_GEHOERT) {
        try { window.PODSPIELER_GEHOERT(folge.id); } catch (e) {}
      }
    });
  }

  /* ---------- Der Takt: Satz und Wort setzen ---------- */
  function takt() {
    var t = A.currentTime || 0;
    el('psJetzt').textContent = zeit(t);
    var p = A.duration ? (t / A.duration) * 100 : 0;
    el('psFortIn').style.width = p.toFixed(2) + '%';
    if (!mitlesen || !folge || !folge.transkript || !folge.transkript.length) return;

    var tr = folge.transkript, i = satzJetzt;
    /* Vorwärts ist der Normalfall, deshalb zuerst der billige Weg. */
    if (i < 0 || t < (tr[i] ? tr[i].t : 0) || (tr[i] && tr[i].e && t >= tr[i].e)) {
      i = -1;
      for (var k = 0; k < tr.length; k++) {
        if (t >= (tr[k].t || 0) - 0.05) i = k; else break;
      }
    }
    if (i !== satzJetzt) { satzSetzen(i); }
    if (i >= 0) wortSetzen(i, t);
  }

  function satzSetzen(i) {
    var box = el('psSaetze'); if (!box) return;
    var alt = box.querySelector('.ps-satz.jetzt');
    if (alt) {
      alt.className = 'ps-satz vorbei';
      Array.prototype.forEach.call(alt.querySelectorAll('.ps-w'), function (w) { w.className = 'ps-w'; });
    }
    satzJetzt = i; wortJetzt = -1;
    var neu = box.querySelector('.ps-satz[data-i="' + i + '"]');
    if (neu) { neu.className = 'ps-satz jetzt'; if (folgen) scrollen(); }
  }

  function wortSetzen(i, t) {
    var satz = el('psSaetze') && el('psSaetze').querySelector('.ps-satz[data-i="' + i + '"]');
    if (!satz) return;
    var ws = satz.querySelectorAll('.ps-w');
    if (!ws.length) return;
    var k = -1;
    for (var j = 0; j < ws.length; j++) {
      var wt = parseFloat(ws[j].getAttribute('data-t'));
      if (!isNaN(wt) && t >= wt - 0.04) k = j; else if (!isNaN(wt)) break;
    }
    if (k === wortJetzt) return;
    wortJetzt = k;
    for (var m = 0; m < ws.length; m++) {
      ws[m].className = 'ps-w' + (m < k ? ' gesagt' : m === k ? ' jetzt' : '');
    }
  }

  function scrollen() {
    var box = el('psSaetze'), n = box && box.querySelector('.ps-satz.jetzt');
    if (!box || !n) return;
    var ziel = n.offsetTop - box.clientHeight / 2 + n.offsetHeight / 2;
    box.scrollTo({ top: Math.max(0, ziel), behavior: 'smooth' });
  }

  /* ---------- Text aufbauen ---------- */
  function textBauen() {
    var box = el('psSaetze'); if (!box) return;
    var tr = (folge && folge.transkript) || [];
    if (!tr.length) {
      box.innerHTML = '<p class="ps-ohne">Zu dieser Folge gibt es noch keinen Text zum Mitlesen.</p>';
      return;
    }
    box.innerHTML = tr.map(function (s, i) {
      var worte = Array.isArray(s.w) ? s.w : null;
      var inhalt;
      if (worte && worte.length) {
        inhalt = worte.map(function (w) {
          return '<span class="ps-w" data-t="' + (w.t || 0) + '">' + E(w.x || '') + '</span>';
        }).join(' ');
      } else {
        /* Ohne Wortzeiten bleibt der Satz als Ganzes stehen — besser
           ein ruhiger Satz als ein falsch wanderndes Wort. */
        inhalt = E(s.x || s.roh || '');
      }
      return '<p class="ps-satz" data-i="' + i + '" data-t="' + (s.t || 0) + '">' + inhalt + '</p>';
    }).join('');

    box.onclick = function (ev) {
      var p = ev.target.closest && ev.target.closest('.ps-satz');
      if (!p) return;
      A.currentTime = parseFloat(p.getAttribute('data-t')) + 0.03;
      if (A.paused) A.play().catch(function () {});
    };
  }

  function textSchalten(auf) {
    mitlesen = (auf === undefined) ? !mitlesen : !!auf;
    var t = el('psText');
    if (mitlesen) {
      el('psTextTitel').textContent = (folge && folge.titel) || 'Mitlesen';
      textBauen();
      t.hidden = false;
      satzJetzt = -1; wortJetzt = -1;
      takt();
    } else {
      t.hidden = true;
    }
    el('psLesen').classList.toggle('an', mitlesen);
    document.body.classList.toggle('ps-text-auf', mitlesen);
  }

  /* Zumachen muss IMMER funktionieren. Vorher konnte ein Fehler in
     einem der Schritte die folgenden mitreissen - dann blieb die
     Leiste stehen, und der Knopf tat scheinbar nichts. Jetzt ist
     jeder Schritt fuer sich abgesichert, und die Leiste geht als
     Erstes weg, damit man die Wirkung sofort sieht. */
  function schliessen() {
    try { var b = el('psBar'); if (b) b.hidden = true; } catch (e) {}
    try { var t = el('psText'); if (t) t.hidden = true; } catch (e) {}
    try { document.body.classList.remove('ps-an', 'ps-text-auf'); } catch (e) {}
    try { A.pause(); } catch (e) {}
    try { A.src = ''; } catch (e) {}
    mitlesen = false;
    try { var l = el('psLesen'); if (l) l.classList.remove('an'); } catch (e) {}
    satzJetzt = -1; wortJetzt = -1;
    folge = null;
  }

  /* ---------- Der Eingang ---------- */
  window.podcastOeffnen = function (id, abspielen) {
    var f = finde(id);
    if (!f || !f.datei) {
      /* Ohne Tondatei gibt es nichts abzuspielen - dann lieber die
         alte Seite als eine Leiste, die nichts tut. */
      window.open('podcast.html#' + encodeURIComponent(id || ''), '_blank', 'noopener');
      return false;
    }
    bauen();
    var neu = !folge || folge.id !== f.id;
    folge = f;
    el('psBar').hidden = false;
    document.body.classList.add('ps-an');
    el('psTitel').textContent = f.titel || 'Folge';
    el('psUnter').textContent = [f.level, f.kurz || f.thema || ''].filter(Boolean).join(' · ');
    var b = el('psBild');
    if (f.bild) { b.src = f.bild; b.style.display = ''; } else { b.style.display = 'none'; }

    if (neu) {
      A.src = f.datei;
      A.playbackRate = tempi[tempoI];
      satzJetzt = -1; wortJetzt = -1;
      if (mitlesen) { el('psTextTitel').textContent = f.titel || ''; textBauen(); }
    }
    if (abspielen !== false) A.play().catch(function () {});
    return false;
  };

  window.PODSPIELER = {
    oeffnen: window.podcastOeffnen,
    zu: schliessen,
    laeuft: function () { return !!(A && !A.paused); }
  };

  /* ---------- Aussehen ---------- */
  function stil() {
    if (el('ps-stil')) return;
    var s = document.createElement('style'); s.id = 'ps-stil';
    s.textContent = [
      ':root{--ps-ink:#14181B;--ps-soft:#8A9BA2;--ps-turq:#2DD4BF;--ps-turq-d:#14B8A6}',
      'body.ps-an{padding-bottom:92px}',
      '.ps-bar{position:fixed;left:0;right:0;bottom:0;z-index:1200;background:#14181B;color:#fff;',
      '  box-shadow:0 -10px 34px rgba(0,0,0,.26);font-family:inherit}',
      '.ps-fort{height:6px;background:rgba(255,255,255,.14);cursor:pointer;position:relative}',
      '.ps-fort i{display:block;height:100%;width:0;background:linear-gradient(90deg,var(--ps-turq),var(--ps-turq-d));',
      '  border-radius:0 3px 3px 0;transition:width .15s linear}',
      '.ps-fort:hover{height:9px}',
      '.ps-in{display:flex;align-items:center;gap:14px;padding:11px 18px;max-width:1180px;margin:0 auto}',
      '.ps-bild{width:48px;height:48px;border-radius:10px;object-fit:cover;flex:0 0 auto;background:#223}',
      '.ps-meta{min-width:0;flex:1}',
      '.ps-meta b{display:block;font-size:15px;line-height:1.25;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}',
      '.ps-meta span{display:block;font-size:12.5px;color:var(--ps-soft);white-space:nowrap;overflow:hidden;text-overflow:ellipsis}',
      '.ps-steuer{display:flex;align-items:center;gap:9px;flex:0 0 auto}',
      '.ps-rund{border:1px solid rgba(255,255,255,.22);background:none;color:#fff;border-radius:999px;',
      '  min-width:44px;height:36px;padding:0 10px;font-size:13px;font-weight:700;cursor:pointer}',
      '.ps-rund:hover{background:rgba(255,255,255,.1)}',
      '.ps-zu{min-width:36px;padding:0;font-size:15px}',
      '.ps-play{border:none;background:var(--ps-turq);color:#06403A;border-radius:999px;width:48px;height:48px;',
      '  font-size:17px;font-weight:800;cursor:pointer;flex:0 0 auto}',
      '.ps-play:hover{background:var(--ps-turq-d)}',
      '.ps-zeit{font-size:13px;color:var(--ps-soft);font-variant-numeric:tabular-nums;flex:0 0 auto}',
      '.ps-zeit b{color:#fff;font-weight:700}',
      '.ps-kl{border:1px solid rgba(255,255,255,.22);background:none;color:#fff;border-radius:999px;',
      '  padding:7px 13px;font-size:12.5px;font-weight:700;cursor:pointer;flex:0 0 auto}',
      '.ps-kl:hover{background:rgba(255,255,255,.1)}',
      '.ps-kl.an{background:var(--ps-turq);color:#06403A;border-color:transparent}',
      /* Das Textfenster sitzt über der Leiste */
      '.ps-text{position:fixed;left:0;right:0;bottom:92px;top:auto;max-height:58vh;z-index:1199;',
      '  background:#FFFCF5;border-top:1px solid #F0E5D8;box-shadow:0 -14px 40px rgba(20,24,27,.14);',
      '  display:flex;flex-direction:column}',
      '.ps-text-kopf{display:flex;align-items:center;gap:12px;padding:12px 18px;border-bottom:1px solid #F0E5D8}',
      '.ps-text-kopf b{flex:1;min-width:0;font-size:15px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}',
      '.ps-text-knoepfe{display:flex;gap:8px;flex:0 0 auto}',
      '.ps-text-kopf .ps-kl{border-color:#E2D9CC;color:#5A6B72}',
      '.ps-text-kopf .ps-kl.an{background:var(--ps-turq);color:#06403A;border-color:transparent}',
      '.ps-saetze{overflow:auto;padding:16px 18px 26px;max-width:760px;margin:0 auto;width:100%;',
      '  font-size:18px;line-height:1.85;color:#14181B}',
      '.ps-satz{margin:0 0 10px;cursor:pointer;color:#9AA7AD;transition:color .2s}',
      '.ps-satz.vorbei{color:#6B7B82}',
      '.ps-satz.jetzt{color:#14181B}',
      '.ps-satz:hover{color:#14181B}',
      '.ps-w{transition:color .12s,background .12s;border-radius:5px}',
      '.ps-satz.jetzt .ps-w.gesagt{color:#14181B}',
      /* Padding statt box-shadow: der Schein eines Schattens legte sich
         sichtbar um das NACHFOLGENDE Wort, wenn die Zeile dort umbrach.
         Beim Nachsehen im Bild aufgefallen. */
      '.ps-satz.jetzt .ps-w.jetzt{background:#FFE9A8;color:#14181B;',
      '  padding:2px 3px;margin:0 -3px;box-decoration-break:clone;-webkit-box-decoration-break:clone}',
      '.ps-ohne{color:#6B7B82;font-size:15px}',
      /* ---- Handy ----
         Julia, 4.11.2026: "man kann im Handy nicht auf schliessen
         druecken". Die Leiste lief in einer einzigen Zeile um und
         schob das Kreuz aus dem Bild. Jetzt zwei feste Zeilen: oben
         Bild, Titel und das Kreuz - das Kreuz immer sichtbar, immer
         44 Pixel gross. Unten die Bedienung. */
      '@media(max-width:720px){',
      '  body.ps-an{padding-bottom:142px}',
      '  .ps-in{display:grid;grid-template-columns:40px 1fr 44px;',
      '    grid-template-areas:"bild meta zu" "steuer steuer steuer";',
      '    gap:8px 10px;padding:10px 12px 12px;align-items:center}',
      '  .ps-bild{grid-area:bild;width:40px;height:40px}',
      '  .ps-meta{grid-area:meta;min-width:0}',
      '  .ps-meta b{font-size:14.5px}',
      '  .ps-zu{grid-area:zu;width:44px;height:44px;min-width:44px;font-size:19px;justify-self:end}',
      '  .ps-steuer{grid-area:steuer;display:flex;align-items:center;justify-content:space-between;',
      '    gap:8px;width:100%}',
      '  .ps-steuer .ps-rund{min-width:52px;height:40px}',
      '  .ps-play{width:52px;height:52px;font-size:18px}',
      '  .ps-zeit,.ps-kl{display:none}',
      '  .ps-steuer .ps-zeit-m{display:block;font-size:12.5px;color:var(--ps-soft);',
      '    font-variant-numeric:tabular-nums}',
      '  .ps-steuer .ps-lesen-m{display:inline-block}',
      '  .ps-text{bottom:142px;max-height:50vh}',
      '  .ps-text-kopf{padding:10px 12px}',
      '  .ps-text-kopf .ps-kl{display:inline-block;padding:10px 14px;min-height:44px}',
      '  .ps-saetze{font-size:17px;padding:14px 14px 22px}',
      '}',
      '@media(prefers-reduced-motion:reduce){.ps-fort i,.ps-w,.ps-satz{transition:none}}'
    ].join('\n');
    document.head.appendChild(s);
  }
})();
