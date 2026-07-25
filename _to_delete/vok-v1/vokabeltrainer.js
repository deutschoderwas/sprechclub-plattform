/* ============================================================
   deutschoderwas club · Vokabeltrainer
   Tagesrunde aus Kursbibliothek, Live-Unterricht und Üben.
   Wiederholung nach Vergessenskurve, acht Aufgabentypen,
   Bild/Emoji, Ton und Beispielsätze in der Muttersprache.
   Ersetzt window.renderVokabeln aus konto.html.
   ============================================================ */
(function () {
  'use strict';

  var POOL = [], IDX = {}, BEKANNT = {}, STAND = {};
  var RUNDE = [], POS = 0, ERG = [], LAEUFT = false, GEPRUEFT = false;
  var ZIEL_VORGABE = [10, 15, 25, 40];

  /* ---------------- Grundlagen ---------------- */
  function sb() { return window.sb || null; }
  function esc(x) {
    return String(x == null ? '' : x).replace(/&/g, '&amp;').replace(/</g, '&lt;')
      .replace(/>/g, '&gt;').replace(/"/g, '&quot;');
  }
  function l1() {
    try { return localStorage.getItem('dow_l1') || ''; } catch (e) { return ''; }
  }
  function trWort(v) {
    var m = (window.VOK_TR || {})[l1()];
    return (m && m[v.id] && m[v.id][0]) || '';
  }
  function trSatz(v) {
    var m = (window.VOK_TR || {})[l1()];
    return (m && m[v.id] && m[v.id][1]) || '';
  }
  var RTL = { fa: 1, ar: 1, ur: 1, he: 1 };
  function trKlasse() { return RTL[l1()] ? ' vt-rtl' : ''; }

  function mische(a) {
    var b = a.slice();
    for (var i = b.length - 1; i > 0; i--) { var j = Math.floor(Math.random() * (i + 1)); var t = b[i]; b[i] = b[j]; b[j] = t; }
    return b;
  }
  function zufall(a) { return a[Math.floor(Math.random() * a.length)]; }

  /* ---------------- Ton ---------------- */
  var STIMME = null;
  function stimme() {
    if (STIMME) return STIMME;
    try {
      var v = speechSynthesis.getVoices().filter(function (x) { return /^de/i.test(x.lang); });
      STIMME = v.filter(function (x) { return /google|premium|siri|natural/i.test(x.name); })[0] || v[0] || null;
    } catch (e) { STIMME = null; }
    return STIMME;
  }
  try { speechSynthesis.onvoiceschanged = function () { STIMME = null; stimme(); }; } catch (e) {}
  function sprich(text, tempo) {
    try {
      speechSynthesis.cancel();
      var u = new SpeechSynthesisUtterance(String(text));
      u.lang = 'de-DE'; u.rate = tempo || 0.92;
      var s = stimme(); if (s) u.voice = s;
      speechSynthesis.speak(u);
    } catch (e) {}
  }
  window.__vtSprich = function (t, tempo, el) {
    sprich(t, tempo);
    if (el) { el.classList.add('vt-tont'); setTimeout(function () { el.classList.remove('vt-tont'); }, 700); }
  };

  /* ---------------- Bild ---------------- */
  function bild(v, gross) {
    var kl = 'vt-bild' + (gross ? ' gross' : '');
    var em = v.em || '🔤';
    return '<span class="' + kl + '">'
      + '<img src="vok-bild/' + encodeURIComponent(v.id) + '.webp" alt="" loading="lazy" '
      + 'onerror="this.style.display=\'none\';this.nextSibling.style.display=\'flex\'">'
      + '<span class="vt-em" style="display:none">' + em + '</span>'
      + '</span>';
  }
  function bildNurEmoji(v, gross) {
    return '<span class="vt-bild' + (gross ? ' gross' : '') + '"><span class="vt-em" style="display:flex">' + (v.em || '🔤') + '</span></span>';
  }

  /* ---------------- Wortquellen ---------------- */
  // Lektionen, die der Lernende geöffnet/abgeschlossen hat
  function lektionenGemacht() {
    var m = {};
    try { m = JSON.parse(localStorage.getItem('dow_lek') || '{}'); } catch (e) { m = {}; }
    var ids = {};
    Object.keys(m).forEach(function (k) {          // Schlüssel: "a1-1", "pflege-3" …
      var t = /^([a-z0-9]+)-(\d+)$/.exec(k);
      if (t) ids[t[1] + '-l' + t[2]] = 1;
    });
    return ids;
  }
  function niveauDesLernenden() {
    var n = '';
    try { n = (window.profile && (profile.level || profile.target_level)) || ''; } catch (e) {}
    var t = /([ABC][12])/.exec(String(n)); return t ? t[1] : 'A1';
  }
  var STUFEN = ['A1', 'A2', 'B1', 'B2', 'C1', 'C2'];

  // Vokabeln aus dem Live-Unterricht (aus konto.html)
  function ausLive() {
    var out = [];
    try {
      if (typeof collectVocab !== 'function') return out;
      collectVocab().forEach(function (v) {
        if (!v || !v.de) return;
        var id = 'live-' + slug(v.de);
        out.push({
          id: id, de: v.de, wort: v.de.replace(/^(der|die|das)\s+/i, ''),
          artikel: (/^(der|die|das)\s/i.exec(v.de) || [])[1] || null,
          art: /^(der|die|das)\s/i.test(v.de) ? 'nomen' : 'wort',
          em: v.em || '🎧', bsp: v.bsp || v.beispiel || '',
          niveau: niveauDesLernenden(), kurs: 'Live-Unterricht',
          thema: v.from || 'Deine Stunde', quelle: 'live',
          trDirekt: v.uebersetzung || v.tr || ''
        });
      });
    } catch (e) {}
    return out;
  }
  function slug(s) {
    return String(s).toLowerCase().replace(/ä/g, 'ae').replace(/ö/g, 'oe')
      .replace(/ü/g, 'ue').replace(/ß/g, 'ss').replace(/[^a-z0-9]+/g, '-')
      .replace(/^-|-$/g, '').slice(0, 48);
  }

  function alleWoerter() {
    var live = ausLive();
    var alles = POOL.concat(live);
    var gesehen = {};
    return alles.filter(function (v) {
      if (gesehen[v.id]) return false; gesehen[v.id] = 1; return true;
    });
  }

  /* ---------------- Runde bauen ---------------- */
  function baueRunde(ziel) {
    var alle = alleWoerter();
    var idx = {}; alle.forEach(function (v) { idx[v.id] = v; }); IDX = idx;

    var heute = new Date().toISOString().slice(0, 10);
    var faellig = [], neu = [];

    // 1) fällige Wiederholungen
    Object.keys(BEKANNT).forEach(function (id) {
      var s = BEKANNT[id];
      if (s.faellig && s.faellig > heute) return;
      if (idx[id]) faellig.push(idx[id]);
    });
    faellig.sort(function (a, b) {
      return (BEKANNT[b.id].falsch || 0) - (BEKANNT[a.id].falsch || 0);
    });

    // 2) neue Wörter: erst aus dem Live-Unterricht, dann aus bearbeiteten Lektionen,
    //    dann aus dem passenden Niveau
    var gemacht = lektionenGemacht();
    var mein = niveauDesLernenden();
    var meinIdx = Math.max(0, STUFEN.indexOf(mein));

    var kandidaten = alle.filter(function (v) { return !BEKANNT[v.id]; });
    function rang(v) {
      if (v.quelle === 'live') return 0;
      if ((v.quellen || []).some(function (q) { return gemacht[q]; })) return 1;
      var d = Math.abs(STUFEN.indexOf(v.niveau) - meinIdx);
      return 2 + d;
    }
    kandidaten.sort(function (a, b) {
      var ra = rang(a), rb = rang(b);
      if (ra !== rb) return ra - rb;
      return STUFEN.indexOf(a.niveau) - STUFEN.indexOf(b.niveau);
    });

    var maxNeu = Math.max(3, Math.round(ziel * 0.45));
    neu = kandidaten.slice(0, maxNeu);

    var runde = faellig.slice(0, ziel - Math.min(neu.length, maxNeu)).concat(neu);
    runde = runde.slice(0, ziel);
    if (runde.length < ziel) {
      // auffüllen mit weiteren neuen Wörtern
      var fehlt = ziel - runde.length;
      var drin = {}; runde.forEach(function (v) { drin[v.id] = 1; });
      runde = runde.concat(kandidaten.filter(function (v) { return !drin[v.id]; }).slice(0, fehlt));
    }
    return mische(runde);
  }

  /* ---------------- Aufgabentypen ---------------- */
  // Lücke nur, wenn das Wort wirklich im Beispielsatz vorkommt und ein Einzelwort ist
  function luecken(v) {
    if (!v.bsp || v.art === 'wendung') return null;
    var w = (v.wort || v.de).trim();
    if (!w || /\s/.test(w)) return null;           // keine Mehrwortausdrücke
    var re = new RegExp('(^|\\s)(' + w.replace(/[.*+?^${}()|[\]\\]/g, '\\$&') + ')(?=[\\s.,!?;:]|$)', 'i');
    return re.test(v.bsp) ? re : null;
  }
  // Stufe bestimmt, wie schwer die Aufgabe ist
  function typFuer(v) {
    var st = (BEKANNT[v.id] && BEKANNT[v.id].stufe) || 0;
    var hatTr = !!(trWort(v) || v.trDirekt);
    var hatBsp = !!v.bsp;
    var moeglich = [];
    if (!BEKANNT[v.id]) return 'kennenlernen';
    var langesWort = /\s/.test((v.wort || v.de).trim());   // Wendung oder Mehrwortausdruck
    var kannLuecke = !!luecken(v);

    if (st <= 1) { moeglich = hatTr ? ['uebersetzung', 'bild'] : ['bild']; }
    else if (st === 2) {
      moeglich = ['rueckwaerts', 'hoeren'];
      if (v.artikel) moeglich.push('artikel');
      if (kannLuecke) moeglich.push('luecke');
    } else if (st === 3) {
      moeglich = ['hoeren'];
      if (!langesWort) moeglich.push('tippen');
      if (kannLuecke) moeglich.push('luecke');
      if (v.artikel) moeglich.push('artikel');
    } else {
      moeglich = ['hoeren'];
      if (!langesWort) moeglich.push('tippen');
      if (hatBsp && v.bsp.split(/\s+/).length >= 4 && v.bsp.split(/\s+/).length <= 9) moeglich.push('satzbau');
      if (kannLuecke) moeglich.push('luecke');
    }
    if (!hatTr) moeglich = moeglich.filter(function (t) { return t !== 'rueckwaerts' && t !== 'uebersetzung' && t !== 'tippen'; });
    if (!moeglich.length) moeglich = hatTr ? ['rueckwaerts'] : ['bild'];
    return zufall(moeglich);
  }

  function ablenker(v, n, feld) {
    var alle = POOL.filter(function (x) {
      if (x.id === v.id) return false;
      if (feld === 'tr' && !trWort(x)) return false;
      if (feld === 'em' && !x.em) return false;
      return true;
    });
    var nah = alle.filter(function (x) { return x.niveau === v.niveau && x.art === v.art; });
    var mittel = alle.filter(function (x) { return x.art === v.art; });
    var quelle = nah.length >= n ? nah : (mittel.length >= n ? mittel : alle);
    var aus = mische(quelle).slice(0, n);
    var gesehen = {}; aus.forEach(function (x) { gesehen[x.id] = 1; });
    return aus;
  }

  /* ---------------- Aufbau der Oberfläche ---------------- */
  function stil() {
    if (document.getElementById('vt-stil')) return;
    var st = document.createElement('style'); st.id = 'vt-stil';
    st.textContent = `
.vt-wrap{max-width:720px;margin:0 auto}
.vt-start{background:linear-gradient(135deg,#14708B 0%,#1B9BC0 55%,#2CC0AE 100%);color:#fff;border-radius:22px;padding:26px 24px;margin-bottom:18px;position:relative;overflow:hidden}
.vt-start h2{font-family:'Space Grotesk',system-ui,sans-serif;font-size:24px;margin:0 0 6px;color:#fff}
.vt-start p{margin:0 0 18px;opacity:.93;font-size:14px;line-height:1.55;max-width:460px}
.vt-ring{position:absolute;right:22px;top:22px;width:96px;height:96px}
.vt-ring svg{transform:rotate(-90deg)}
.vt-ring .zahl{position:absolute;inset:0;display:flex;flex-direction:column;align-items:center;justify-content:center;font-weight:800;font-size:19px;line-height:1}
.vt-ring .zahl small{font-size:10px;font-weight:600;opacity:.85;margin-top:2px}
.vt-los{border:none;border-radius:13px;background:#fff;color:#14708B;font-family:inherit;font-size:15px;font-weight:800;padding:14px 26px;cursor:pointer;box-shadow:0 8px 20px rgba(0,0,0,.16);transition:transform .15s}
.vt-los:hover{transform:translateY(-2px)}
.vt-serie{display:inline-flex;align-items:center;gap:6px;background:rgba(255,255,255,.18);border-radius:999px;padding:5px 12px;font-size:12.5px;font-weight:700;margin-bottom:12px}
.vt-kpis{display:grid;grid-template-columns:repeat(auto-fit,minmax(140px,1fr));gap:12px;margin-bottom:18px}
.vt-kpi{background:#fff;border:1px solid var(--border,#ECE7DC);border-radius:15px;padding:14px 16px}
.vt-kpi .k{font-size:11.5px;font-weight:700;color:#8A857C;letter-spacing:.03em}
.vt-kpi .v{font-size:26px;font-weight:800;color:#141414;line-height:1.15;margin-top:2px;font-family:'Space Grotesk',system-ui,sans-serif}
.vt-kpi .d{font-size:12px;color:#8A857C}
.vt-zielwahl{display:flex;align-items:center;gap:8px;flex-wrap:wrap;font-size:13px;color:#6A655C;margin-bottom:8px}
.vt-zb{border:1px solid var(--border,#ECE7DC);background:#fff;border-radius:999px;padding:6px 13px;font-family:inherit;font-size:13px;font-weight:700;color:#4A4740;cursor:pointer}
.vt-zb.on{background:#14708B;border-color:#14708B;color:#fff}

.vt-lauf{background:#fff;border:1px solid var(--border,#ECE7DC);border-radius:20px;padding:22px 22px 18px;box-shadow:0 4px 18px rgba(0,0,0,.04)}
.vt-kopf{display:flex;align-items:center;gap:13px;margin-bottom:20px}
.vt-x{border:none;background:none;font-size:24px;color:#B4AEA4;cursor:pointer;line-height:1;padding:2px 6px;border-radius:8px}
.vt-x:hover{background:#F3F0E9;color:#5A5750}
.vt-bar{flex:1;height:11px;border-radius:999px;background:#EDE8DC;overflow:hidden}
.vt-bar i{display:block;height:100%;border-radius:999px;background:linear-gradient(90deg,#1B9BC0,#2CC0AE);transition:width .35s cubic-bezier(.3,.8,.3,1)}
.vt-zaehler{font-size:13px;font-weight:700;color:#8A857C;min-width:44px;text-align:right}

.vt-frage{font-size:13px;font-weight:700;color:#14708B;letter-spacing:.04em;text-transform:uppercase;margin-bottom:14px}
.vt-wort{font-family:'Space Grotesk',system-ui,sans-serif;font-size:32px;font-weight:700;line-height:1.2;color:#141414;margin:0 0 6px;display:flex;align-items:center;gap:12px;flex-wrap:wrap}
.vt-wort .lauts{border:none;background:#EAF8F5;color:#14708B;width:40px;height:40px;border-radius:12px;font-size:19px;cursor:pointer;flex:none;display:flex;align-items:center;justify-content:center;transition:transform .15s,background .2s}
.vt-wort .lauts:hover{background:#D3F0EA}
.vt-tont{transform:scale(1.12)}
.vt-hilf{font-size:14px;color:#6A655C;margin:0 0 18px;line-height:1.55}
.vt-hilf.vt-rtl{direction:rtl;text-align:right}

.vt-bild{width:112px;height:112px;border-radius:20px;background:linear-gradient(135deg,#F3F7F6,#E7F3F0);display:flex;align-items:center;justify-content:center;overflow:hidden;flex:none;margin:0 auto 16px}
.vt-bild.gross{width:150px;height:150px;border-radius:24px}
.vt-bild img{width:100%;height:100%;object-fit:cover;display:block}
.vt-bild .vt-em{width:100%;height:100%;align-items:center;justify-content:center;font-size:46px}
.vt-bild.gross .vt-em{font-size:62px}

.vt-opt{display:grid;gap:10px;margin-bottom:8px}
.vt-opt.zwei{grid-template-columns:1fr 1fr}
.vt-opt.bilder{grid-template-columns:1fr 1fr;gap:12px}
.vt-o{border:2px solid var(--border,#ECE7DC);background:#fff;border-radius:14px;padding:15px 17px;font-family:inherit;font-size:15.5px;font-weight:600;color:#2A2721;cursor:pointer;text-align:left;transition:border-color .16s,background .16s,transform .12s;line-height:1.4}
.vt-o:hover:not(:disabled){border-color:#1B9BC0;transform:translateY(-1px)}
.vt-o:disabled{cursor:default}
.vt-o.richtig{border-color:#1B9BC0;background:#EAF8F5;color:#08453D}
.vt-o.falsch{border-color:#DD5555;background:#FDEEEE;color:#8E2222}
.vt-o.vt-rtl{direction:rtl;text-align:right}
.vt-o.bildo{display:flex;flex-direction:column;align-items:center;gap:8px;padding:14px}
.vt-o.bildo .vt-bild{margin:0;width:96px;height:96px}
.vt-o.bildo span.t{font-size:13.5px;font-weight:700}

.vt-art{display:grid;grid-template-columns:repeat(3,1fr);gap:10px}
.vt-art .vt-o{text-align:center;font-size:19px;font-weight:800;padding:17px 8px}

.vt-eingabe{width:100%;border:2px solid var(--border,#ECE7DC);border-radius:14px;padding:15px 17px;font-family:inherit;font-size:17px;font-weight:600;color:#2A2721;outline:none;box-sizing:border-box}
.vt-eingabe:focus{border-color:#1B9BC0}
.vt-eingabe.richtig{border-color:#1B9BC0;background:#EAF8F5}
.vt-eingabe.falsch{border-color:#DD5555;background:#FDEEEE}

.vt-satz{font-size:19px;line-height:1.7;color:#2A2721;margin-bottom:18px;font-weight:600}
.vt-luecke{display:inline-block;min-width:96px;border-bottom:3px solid #1B9BC0;text-align:center;font-weight:800;color:#14708B;padding:0 6px}
.vt-bau{display:flex;flex-wrap:wrap;gap:8px;min-height:56px;border:2px dashed var(--border,#ECE7DC);border-radius:14px;padding:12px;margin-bottom:12px;align-content:flex-start}
.vt-teile{display:flex;flex-wrap:wrap;gap:8px;margin-bottom:8px}
.vt-teil{border:2px solid var(--border,#ECE7DC);background:#fff;border-radius:11px;padding:9px 14px;font-family:inherit;font-size:15px;font-weight:700;color:#2A2721;cursor:pointer}
.vt-teil:hover{border-color:#1B9BC0}

.vt-fuss{margin-top:16px;border-radius:16px;padding:16px 18px;display:none}
.vt-fuss.an{display:block;animation:vtIn .2s ease}
@keyframes vtIn{from{opacity:0;transform:translateY(8px)}to{opacity:1;transform:none}}
.vt-fuss.gut{background:#EAF8F5;border:1px solid #9EDCD0}
.vt-fuss.schlecht{background:#FDEEEE;border:1px solid #F0B9B9}
.vt-fuss b{display:block;font-size:15.5px;margin-bottom:4px}
.vt-fuss.gut b{color:#0A6157}
.vt-fuss.schlecht b{color:#9E2626}
.vt-fuss .lsg{font-size:14.5px;color:#3A3730;line-height:1.55}
.vt-fuss .lsg em{font-style:normal;font-weight:800;color:#14708B}
.vt-fuss .bspz{margin-top:8px;font-size:13.5px;color:#5A5750;line-height:1.55;border-top:1px solid rgba(0,0,0,.07);padding-top:8px}
.vt-fuss .bspz i{font-style:normal;color:#8A857C;display:block}
.vt-fuss .bspz i.vt-rtl{direction:rtl;text-align:right}
.vt-weiter{margin-top:14px;width:100%;border:none;border-radius:13px;padding:14px;font-family:inherit;font-size:15px;font-weight:800;color:#fff;cursor:pointer;background:linear-gradient(135deg,#14708B,#1B9BC0)}
.vt-weiter.rot{background:linear-gradient(135deg,#C24141,#DD5555)}

.vt-ende{text-align:center;padding:14px 6px}
.vt-ende .gr{font-size:56px;line-height:1;margin-bottom:10px}
.vt-ende h2{font-family:'Space Grotesk',system-ui,sans-serif;font-size:27px;margin:0 0 8px;color:#141414}
.vt-ende p{color:#6A655C;font-size:14.5px;margin:0 0 20px;line-height:1.6}
.vt-ergz{display:flex;gap:12px;justify-content:center;margin-bottom:22px;flex-wrap:wrap}
.vt-ergz div{background:#fff;border:1px solid var(--border,#ECE7DC);border-radius:14px;padding:12px 20px;min-width:96px}
.vt-ergz b{display:block;font-size:26px;font-family:'Space Grotesk',system-ui,sans-serif;color:#141414}
.vt-ergz span{font-size:12px;color:#8A857C;font-weight:600}
.vt-liste{text-align:left;margin:0 auto 20px;max-width:440px;display:flex;flex-direction:column;gap:7px}
.vt-liste .z{display:flex;align-items:center;gap:10px;background:#fff;border:1px solid var(--border,#ECE7DC);border-radius:12px;padding:10px 13px;font-size:14px}
.vt-liste .z b{flex:1;font-weight:700;color:#2A2721}
.vt-liste .z .st{font-size:12px;font-weight:700;padding:2px 9px;border-radius:999px}
.vt-liste .z .st.g{background:#EAF8F5;color:#0A6157}
.vt-liste .z .st.s{background:#FDEEEE;color:#9E2626}
.vt-leer{background:#fff;border:1px dashed var(--border,#ECE7DC);border-radius:16px;padding:26px;text-align:center;color:#6A655C;font-size:14.5px;line-height:1.6}
@media(max-width:620px){
  .vt-start{padding:22px 18px}.vt-start h2{font-size:21px}.vt-ring{width:74px;height:74px;right:16px;top:16px}
  .vt-wort{font-size:26px}.vt-lauf{padding:18px 16px 16px;border-radius:16px}
  .vt-opt.bilder{grid-template-columns:1fr 1fr}.vt-satz{font-size:17px}
}
`;
    document.head.appendChild(st);
  }

  /* ---------------- Startbild ---------------- */
  function ring(heute, ziel) {
    var p = ziel ? Math.min(1, heute / ziel) : 0;
    var r = 40, u = 2 * Math.PI * r;
    return '<div class="vt-ring"><svg width="96" height="96" viewBox="0 0 96 96">'
      + '<circle cx="48" cy="48" r="' + r + '" fill="none" stroke="rgba(255,255,255,.26)" stroke-width="9"/>'
      + '<circle cx="48" cy="48" r="' + r + '" fill="none" stroke="#fff" stroke-width="9" stroke-linecap="round" '
      + 'stroke-dasharray="' + u + '" stroke-dashoffset="' + (u * (1 - p)) + '"/></svg>'
      + '<div class="zahl">' + heute + '<small>von ' + ziel + '</small></div></div>';
  }

  function startbild() {
    var ziel = STAND.ziel || 15, heute = STAND.heute || 0;
    var faellig = STAND.faellig || 0, gelernt = STAND.gelernt || 0, serie = STAND.serie || 0;
    var neuDa = alleWoerter().filter(function (v) { return !BEKANNT[v.id]; }).length;
    var fertig = heute >= ziel;

    var text = fertig
      ? 'Tagesziel geschafft. Wenn du magst, mach einfach weiter — jede Wiederholung sitzt tiefer.'
      : (faellig > 0
        ? faellig + ' Wörter warten auf eine Wiederholung. Dazu kommen neue aus deinen Lektionen.'
        : 'Neue Wörter aus deinen Lektionen, aus dem Live-Unterricht und aus dem Üben — Stück für Stück.');

    return '<div class="vt-wrap">'
      + '<div class="vt-start">'
      + ring(heute, ziel)
      + (serie > 0 ? '<div class="vt-serie">🔥 ' + serie + (serie === 1 ? ' Tag' : ' Tage') + ' am Stück</div>' : '')
      + '<h2>' + (fertig ? 'Heute schon geschafft 🎉' : 'Deine Tagesrunde') + '</h2>'
      + '<p>' + text + '</p>'
      + '<button class="vt-los" onclick="__vtStart()">' + (fertig ? 'Weiter üben' : 'Runde starten') + '</button>'
      + '</div>'
      + '<div class="vt-kpis">'
      + '<div class="vt-kpi"><div class="k">Sitzt sicher</div><div class="v">' + gelernt + '</div><div class="d">Wörter</div></div>'
      + '<div class="vt-kpi"><div class="k">In Arbeit</div><div class="v">' + Math.max(0, (STAND.gesamt || 0) - gelernt) + '</div><div class="d">Wörter</div></div>'
      + '<div class="vt-kpi"><div class="k">Wartet noch</div><div class="v">' + neuDa + '</div><div class="d">neue Wörter</div></div>'
      + '</div>'
      + '<div class="vt-zielwahl"><span>Tagesziel:</span>'
      + ZIEL_VORGABE.map(function (z) {
        return '<button class="vt-zb' + (z === ziel ? ' on' : '') + '" onclick="__vtZiel(' + z + ')">' + z + '</button>';
      }).join('')
      + '</div>'
      + (l1() ? '' : '<div class="vt-leer" style="margin-top:14px">Tipp: Trag im Profil deine Muttersprache ein — dann siehst du zu jedem Wort die Übersetzung.</div>')
      + '</div>';
  }

  /* ---------------- Aufgaben zeichnen ---------------- */
  function kopf() {
    var p = RUNDE.length ? Math.round((POS / RUNDE.length) * 100) : 0;
    return '<div class="vt-kopf">'
      + '<button class="vt-x" onclick="__vtAbbruch()" aria-label="Runde beenden">×</button>'
      + '<div class="vt-bar"><i style="width:' + p + '%"></i></div>'
      + '<div class="vt-zaehler">' + (POS + 1) + '/' + RUNDE.length + '</div></div>';
  }
  function lautsprecher(t) {
    return '<button class="lauts" onclick="__vtSprich(\'' + esc(t).replace(/'/g, "\\'") + '\',0.92,this)" aria-label="Anhören">🔊</button>';
  }

  function zeichneAufgabe() {
    var v = RUNDE[POS]; if (!v) return abschluss();
    GEPRUEFT = false;
    var typ = v.__typ || (v.__typ = typFuer(v));
    var ziel = document.getElementById('v-vokabeln');
    var inhalt = '';

    if (typ === 'kennenlernen') {
      var ue = trWort(v) || v.trDirekt || '';
      inhalt = '<div class="vt-frage">Neues Wort</div>'
        + bild(v, true)
        + '<h3 class="vt-wort">' + esc(v.de) + lautsprecher(v.de) + '</h3>'
        + (ue ? '<p class="vt-hilf' + trKlasse() + '">' + esc(ue) + '</p>' : '')
        + (v.bsp ? '<div class="vt-fuss gut an" style="display:block"><b>So klingt es im Satz</b>'
          + '<div class="lsg">' + esc(v.bsp) + ' ' + lautsprecher(v.bsp) + '</div>'
          + (trSatz(v) ? '<div class="bspz"><i class="' + (RTL[l1()] ? 'vt-rtl' : '') + '">' + esc(trSatz(v)) + '</i></div>' : '')
          + '</div>' : '')
        + '<button class="vt-weiter" onclick="__vtAntwort(true)">Verstanden — weiter</button>';

    } else if (typ === 'uebersetzung') {
      var richtig = trWort(v) || v.trDirekt;
      var opt = mische(ablenker(v, 3, 'tr').map(trWort).concat([richtig]));
      inhalt = '<div class="vt-frage">Was heißt das?</div>'
        + '<h3 class="vt-wort">' + esc(v.de) + lautsprecher(v.de) + '</h3>'
        + '<div class="vt-opt">' + opt.map(function (o) {
          return '<button class="vt-o' + trKlasse() + '" onclick="__vtWahl(this,' + (o === richtig ? 'true' : 'false') + ')">' + esc(o) + '</button>';
        }).join('') + '</div>';

    } else if (typ === 'rueckwaerts') {
      var frage = trWort(v) || v.trDirekt;
      var opt2 = mische(ablenker(v, 3, 'de').map(function (x) { return x.de; }).concat([v.de]));
      inhalt = '<div class="vt-frage">Welches deutsche Wort ist das?</div>'
        + '<h3 class="vt-wort' + trKlasse() + '" style="font-size:26px">' + esc(frage) + '</h3>'
        + '<div class="vt-opt">' + opt2.map(function (o) {
          return '<button class="vt-o" onclick="__vtWahl(this,' + (o === v.de ? 'true' : 'false') + ')">' + esc(o) + '</button>';
        }).join('') + '</div>';

    } else if (typ === 'bild') {
      var kand = mische(ablenker(v, 3, 'em').concat([v]));
      inhalt = '<div class="vt-frage">Welches Bild passt?</div>'
        + '<h3 class="vt-wort">' + esc(v.de) + lautsprecher(v.de) + '</h3>'
        + '<div class="vt-opt bilder">' + kand.map(function (x) {
          return '<button class="vt-o bildo" onclick="__vtWahl(this,' + (x.id === v.id ? 'true' : 'false') + ')">'
            + bildNurEmoji(x) + '</button>';
        }).join('') + '</div>';

    } else if (typ === 'artikel') {
      inhalt = '<div class="vt-frage">Welcher Artikel?</div>'
        + '<h3 class="vt-wort">' + esc(v.wort) + lautsprecher(v.de) + '</h3>'
        + '<div class="vt-opt vt-art">' + ['der', 'die', 'das'].map(function (a) {
          return '<button class="vt-o" onclick="__vtWahl(this,' + (a === v.artikel ? 'true' : 'false') + ')">' + a + '</button>';
        }).join('') + '</div>';

    } else if (typ === 'luecke') {
      var wort = (v.wort || v.de).trim();
      var re = luecken(v);
      var mitLuecke = re
        ? esc(v.bsp).replace(re, '$1<span class="vt-luecke">•••</span>')
        : esc(v.bsp) + ' <span class="vt-luecke">•••</span>';
      var einzel = POOL.filter(function (x) {
        return x.id !== v.id && x.art === v.art && !/\s/.test((x.wort || x.de).trim());
      });
      var abl3 = mische(einzel.filter(function (x) { return x.niveau === v.niveau; }).length >= 3
        ? einzel.filter(function (x) { return x.niveau === v.niveau; }) : einzel).slice(0, 3);
      var opt3 = mische(abl3.map(function (x) { return (x.wort || x.de).trim(); }).concat([wort]));
      inhalt = '<div class="vt-frage">Welches Wort fehlt?</div>'
        + '<div class="vt-satz">' + mitLuecke + '</div>'
        + '<div class="vt-opt">' + opt3.map(function (o) {
          return '<button class="vt-o" onclick="__vtWahl(this,' + (o === wort ? 'true' : 'false') + ')">' + esc(o) + '</button>';
        }).join('') + '</div>';

    } else if (typ === 'hoeren') {
      var opt4 = mische(ablenker(v, 3, 'de').map(function (x) { return x.de; }).concat([v.de]));
      inhalt = '<div class="vt-frage">Hör zu — welches Wort ist es?</div>'
        + '<div style="text-align:center;margin-bottom:20px">'
        + '<button class="vt-los" style="background:#EAF8F5;color:#14708B;box-shadow:none;font-size:30px;width:82px;height:82px;border-radius:24px" '
        + 'onclick="__vtSprich(\'' + esc(v.de).replace(/'/g, "\\'") + '\',0.9,this)">🔊</button>'
        + '<div style="margin-top:8px"><button class="vt-teil" onclick="__vtSprich(\'' + esc(v.de).replace(/'/g, "\\'") + '\',0.55,this)">🐢 langsamer</button></div>'
        + '</div>'
        + '<div class="vt-opt">' + opt4.map(function (o) {
          return '<button class="vt-o" onclick="__vtWahl(this,' + (o === v.de ? 'true' : 'false') + ')">' + esc(o) + '</button>';
        }).join('') + '</div>';
      setTimeout(function () { sprich(v.de, 0.9); }, 260);

    } else if (typ === 'tippen') {
      var hinweis = trWort(v) || v.trDirekt || '';
      inhalt = '<div class="vt-frage">Schreib das deutsche Wort</div>'
        + bild(v, false)
        + '<h3 class="vt-wort' + trKlasse() + '" style="font-size:23px;justify-content:center">' + esc(hinweis) + '</h3>'
        + '<input class="vt-eingabe" id="vtIn" autocomplete="off" autocapitalize="off" spellcheck="false" '
        + 'placeholder="' + (v.artikel ? 'z. B. der Tisch' : 'auf Deutsch …') + '">'
        + '<button class="vt-weiter" style="margin-top:12px" onclick="__vtTippen()">Prüfen</button>';

    } else if (typ === 'satzbau') {
      var teile = mische(v.bsp.replace(/\s+/g, ' ').trim().split(' '));
      inhalt = '<div class="vt-frage">Bring den Satz in die richtige Reihenfolge</div>'
        + (trSatz(v) ? '<p class="vt-hilf' + trKlasse() + '">' + esc(trSatz(v)) + '</p>' : '')
        + '<div class="vt-bau" id="vtBau"></div>'
        + '<div class="vt-teile" id="vtTeile">' + teile.map(function (t, i) {
          return '<button class="vt-teil" onclick="__vtBau(this)">' + esc(t) + '</button>';
        }).join('') + '</div>'
        + '<button class="vt-weiter" onclick="__vtSatzPruefen()">Prüfen</button>';
    }

    ziel.innerHTML = '<div class="vt-wrap"><div class="vt-lauf">' + kopf() + inhalt
      + '<div class="vt-fuss" id="vtFuss"></div></div></div>';

    var inp = document.getElementById('vtIn');
    if (inp) {
      inp.focus();
      inp.addEventListener('keydown', function (e) { if (e.key === 'Enter') window.__vtTippen(); });
    }
    window.scrollTo(0, 0);
  }

  /* ---------------- Antworten ---------------- */
  function normal(s) {
    return String(s || '').toLowerCase().trim()
      .replace(/\s+/g, ' ').replace(/[.,!?;:]/g, '');
  }

  window.__vtWahl = function (el, richtig) {
    if (GEPRUEFT) return; GEPRUEFT = true;
    var v = RUNDE[POS];
    var box = el.parentNode;
    box.querySelectorAll('.vt-o').forEach(function (b) { b.disabled = true; });
    el.classList.add(richtig ? 'richtig' : 'falsch');
    if (!richtig) {
      // richtige Antwort mitmarkieren
      box.querySelectorAll('.vt-o').forEach(function (b) {
        if (b.getAttribute('onclick').indexOf('true') > -1) b.classList.add('richtig');
      });
    }
    rueckmeldung(richtig, v);
  };

  window.__vtTippen = function () {
    if (GEPRUEFT) return;
    var v = RUNDE[POS];
    var inp = document.getElementById('vtIn'); if (!inp) return;
    var ist = normal(inp.value);
    if (!ist) { inp.focus(); return; }
    GEPRUEFT = true;
    var soll = normal(v.de), sollOhne = normal(v.wort);
    var richtig = (ist === soll || ist === sollOhne);
    inp.classList.add(richtig ? 'richtig' : 'falsch');
    inp.disabled = true;
    rueckmeldung(richtig, v);
  };

  var BAU = [];
  window.__vtBau = function (el) {
    var bau = document.getElementById('vtBau');
    if (el.parentNode.id === 'vtTeile') { bau.appendChild(el); }
    else { document.getElementById('vtTeile').appendChild(el); }
  };
  window.__vtSatzPruefen = function () {
    if (GEPRUEFT) return; GEPRUEFT = true;
    var v = RUNDE[POS];
    var bau = document.getElementById('vtBau');
    var ist = [].slice.call(bau.querySelectorAll('.vt-teil')).map(function (b) { return b.textContent; }).join(' ');
    var richtig = normal(ist) === normal(v.bsp);
    bau.style.borderColor = richtig ? '#1B9BC0' : '#DD5555';
    bau.style.background = richtig ? '#EAF8F5' : '#FDEEEE';
    rueckmeldung(richtig, v);
  };

  function rueckmeldung(richtig, v) {
    ERG.push({ v: v, richtig: richtig });
    // Prüf-Knopf der Aufgabe ausblenden, damit nur noch „Weiter" dasteht
    document.querySelectorAll('.vt-lauf > .vt-weiter, .vt-wrap .vt-lauf .vt-weiter').forEach(function (b) {
      if (!b.closest('.vt-fuss')) b.style.display = 'none';
    });
    document.querySelectorAll('#vtTeile .vt-teil, #vtBau .vt-teil').forEach(function (b) {
      b.style.pointerEvents = 'none'; b.style.opacity = '.75';
    });
    var f = document.getElementById('vtFuss');
    var ue = trWort(v) || v.trDirekt || '';
    f.className = 'vt-fuss an ' + (richtig ? 'gut' : 'schlecht');
    f.innerHTML =
      '<b>' + (richtig ? zufall(['Richtig! 👏', 'Sitzt! ✅', 'Genau so. 🎯', 'Sehr gut! 💛']) : 'Noch nicht — schau nochmal hin') + '</b>'
      + '<div class="lsg"><em>' + esc(v.de) + '</em>' + (ue ? ' — ' + esc(ue) : '') + ' ' + lautsprecher(v.de) + '</div>'
      + (v.bsp ? '<div class="bspz">' + esc(v.bsp)
        + (trSatz(v) ? '<i class="' + (RTL[l1()] ? 'vt-rtl' : '') + '">' + esc(trSatz(v)) + '</i>' : '') + '</div>' : '')
      + '<button class="vt-weiter' + (richtig ? '' : ' rot') + '" onclick="__vtAntwort(' + richtig + ')">'
      + (POS + 1 >= RUNDE.length ? 'Runde abschließen' : 'Weiter') + '</button>';
    f.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  }

  window.__vtAntwort = async function (richtig) {
    var v = RUNDE[POS];
    if (v && v.__typ === 'kennenlernen') ERG.push({ v: v, richtig: true });
    // Lernstand speichern
    try {
      var c = sb();
      if (c && v) {
        var r = await c.rpc('vok_antwort', { p_vok_id: v.id, p_richtig: !!richtig, p_quelle: v.quelle || 'kurs' });
        if (r && r.data && r.data[0]) {
          BEKANNT[v.id] = { stufe: r.data[0].stufe, faellig: r.data[0].faellig_am, falsch: (BEKANNT[v.id] || {}).falsch || 0 };
        }
      }
    } catch (e) {}
    POS++;
    if (POS >= RUNDE.length) abschluss(); else zeichneAufgabe();
  };

  window.__vtAbbruch = function () {
    LAEUFT = false;
    ladeStand().then(function () { window.renderVokabeln(); });
  };

  /* ---------------- Abschluss ---------------- */
  function abschluss() {
    LAEUFT = false;
    var gut = ERG.filter(function (e) { return e.richtig; }).length;
    var schlecht = ERG.length - gut;
    var quote = ERG.length ? Math.round((gut / ERG.length) * 100) : 0;
    var kopfz = quote >= 90 ? ['🏆', 'Stark!'] : quote >= 70 ? ['🎉', 'Gut gemacht!'] : ['💪', 'Weiter so!'];

    var liste = ERG.slice(0, 12).map(function (e) {
      return '<div class="z">' + bildNurEmoji(e.v).replace('vt-bild', 'vt-bild" style="width:34px;height:34px;border-radius:9px')
        .replace('font-size:46px', 'font-size:18px')
        + '<b>' + esc(e.v.de) + '</b>'
        + '<span class="st ' + (e.richtig ? 'g' : 's') + '">' + (e.richtig ? 'sitzt' : 'nochmal') + '</span></div>';
    }).join('');

    document.getElementById('v-vokabeln').innerHTML =
      '<div class="vt-wrap"><div class="vt-lauf"><div class="vt-ende">'
      + '<div class="gr">' + kopfz[0] + '</div>'
      + '<h2>' + kopfz[1] + '</h2>'
      + '<p>' + (schlecht === 0
        ? 'Alles richtig. Die Wörter kommen wieder, wenn es Zeit zum Auffrischen ist.'
        : schlecht + (schlecht === 1 ? ' Wort siehst du' : ' Wörter siehst du') + ' bald wieder — genau dann, wenn du es sonst vergessen würdest.')
      + '</p>'
      + '<div class="vt-ergz">'
      + '<div><b>' + gut + '</b><span>richtig</span></div>'
      + '<div><b>' + schlecht + '</b><span>zum Üben</span></div>'
      + '<div><b>' + quote + '%</b><span>Trefferquote</span></div>'
      + '</div>'
      + '<div class="vt-liste">' + liste + '</div>'
      + '<button class="vt-los" style="background:linear-gradient(135deg,#14708B,#1B9BC0);color:#fff" onclick="__vtStart()">Noch eine Runde</button>'
      + '<div style="margin-top:10px"><button class="vt-teil" onclick="__vtAbbruch()">Für heute reicht\'s</button></div>'
      + '</div></div></div>';
    window.scrollTo(0, 0);
  }

  /* ---------------- Steuerung ---------------- */
  window.__vtStart = function () {
    var ziel = STAND.ziel || 15;
    RUNDE = baueRunde(ziel); POS = 0; ERG = []; LAEUFT = true;
    if (!RUNDE.length) {
      document.getElementById('v-vokabeln').innerHTML =
        '<div class="vt-wrap"><div class="vt-leer">Im Moment ist nichts fällig und es gibt keine neuen Wörter. '
        + 'Öffne eine Lektion in der Kursbibliothek — die Wörter daraus landen automatisch hier.</div></div>';
      return;
    }
    zeichneAufgabe();
  };

  window.__vtZiel = async function (z) {
    try { var c = sb(); if (c) await c.rpc('vok_ziel', { p_ziel: z }); } catch (e) {}
    STAND.ziel = z;
    window.renderVokabeln();
  };

  async function ladeStand() {
    var c = sb(); if (!c) return;
    try {
      var a = await c.rpc('vok_stand');
      STAND = (a && a.data) || {};
    } catch (e) { STAND = {}; }
    try {
      var b = await c.rpc('vok_bekannt');
      BEKANNT = {};
      ((b && b.data) || []).forEach(function (r) {
        BEKANNT[r.vok_id] = { stufe: r.stufe, gelernt: r.gelernt, falsch: 0 };
      });
      var f = await c.rpc('vok_faellig', { p_max: 200 });
      ((f && f.data) || []).forEach(function (r) {
        BEKANNT[r.vok_id] = BEKANNT[r.vok_id] || { stufe: r.stufe };
        BEKANNT[r.vok_id].faellig = '1970-01-01';
        BEKANNT[r.vok_id].falsch = r.falsch;
      });
    } catch (e) {}
  }

  function ladeSkript(pfad) {
    return new Promise(function (ok) {
      var s = document.createElement('script');
      s.src = pfad;
      s.onload = function () { ok(true); };
      s.onerror = function () { ok(false); };
      document.head.appendChild(s);
    });
  }
  // Wortliste erst beim Öffnen laden (spart Ladezeit auf allen anderen Seiten)
  var poolGeladen = null;
  function ladePool() {
    if (window.VOK_POOL && window.VOK_POOL.length) return Promise.resolve(true);
    if (poolGeladen) return poolGeladen;
    poolGeladen = ladeSkript('vokabeln-pool.js');
    return poolGeladen;
  }
  // Sprachdatei der Muttersprache nachladen
  function ladeSprache() {
    var l = l1(); if (!l) return Promise.resolve();
    if ((window.VOK_TR || {})[l]) return Promise.resolve();
    return ladeSkript('vok-tr/' + l + '.js');
  }

  /* ---------------- Einstieg ---------------- */
  window.renderVokabeln = async function () {
    stil();
    var ziel = document.getElementById('v-vokabeln');
    if (!ziel) return;
    if (!(window.VOK_POOL && window.VOK_POOL.length)) {
      ziel.innerHTML = '<div class="vt-wrap"><div class="vt-leer">Deine Wörter werden geladen …</div></div>';
      await ladePool();
    }
    POOL = window.VOK_POOL || [];
    if (!POOL.length) {
      ziel.innerHTML = '<div class="vt-wrap"><div class="vt-leer">Die Wortliste konnte nicht geladen werden. Lade die Seite bitte neu.</div></div>';
      return;
    }
    await ladeSprache();
    await ladeStand();
    if (LAEUFT) return;
    ziel.innerHTML = startbild();
  };

  window.VokTrainer = { neu: function () { return window.renderVokabeln(); } };
})();
