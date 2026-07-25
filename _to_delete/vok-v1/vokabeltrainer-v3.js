/* ============================================================
   deutschoderwas club · Vokabeltrainer (Vollbild)
   Tagesrunde aus Kursbibliothek, Live-Unterricht und Üben.
   Wiederholung nach Vergessenskurve, neun Aufgabentypen,
   Wortmarkierung im Satz, Artikelfarben, Ton, Tastatur.
   Ersetzt window.renderVokabeln aus konto.html.
   ============================================================ */
(function () {
  'use strict';

  var POOL = [], BEKANNT = {}, STAND = {};
  var RUNDE = [], POS = 0, ERG = [], LAEUFT = false, GEPRUEFT = false, SERIE = {};
  var ZIEL_VORGABE = [10, 15, 25, 40];

  /* ================= Grundlagen ================= */
  function sb() { return window.sb || null; }
  function esc(x) {
    return String(x == null ? '' : x).replace(/&/g, '&amp;').replace(/</g, '&lt;')
      .replace(/>/g, '&gt;').replace(/"/g, '&quot;');
  }
  function l1() { try { return localStorage.getItem('dow_l1') || ''; } catch (e) { return ''; } }
  function trRoh(id) { var m = (window.VOK_TR || {})[l1()]; return (m && m[id]) || null; }
  function trWort(v) {
    var a = trRoh(v.id); if (a && a[0]) return a[0];
    if (v.zwilling) { var b = trRoh(v.zwilling); if (b && b[0]) return b[0]; }
    return v.trDirekt || '';
  }
  function trSatz(v) {
    var a = trRoh(v.id); if (a && a[1]) return a[1];
    if (v.zwilling) { var b = trRoh(v.zwilling); if (b && b[1]) return b[1]; }
    return '';
  }
  var RTL = { fa: 1, ar: 1, ur: 1, he: 1 };
  function rtl() { return !!RTL[l1()]; }
  function rtlK() { return rtl() ? ' vt-rtl' : ''; }

  function mische(a) {
    var b = a.slice();
    for (var i = b.length - 1; i > 0; i--) { var j = Math.floor(Math.random() * (i + 1)); var t = b[i]; b[i] = b[j]; b[j] = t; }
    return b;
  }
  function zufall(a) { return a[Math.floor(Math.random() * a.length)]; }
  function q(sel) { return document.querySelector(sel); }
  function qa(sel) { return [].slice.call(document.querySelectorAll(sel)); }

  /* ================= Artikelfarben ================= */
  // Im Deutschunterricht üblich: der = blau, die = rot, das = grün
  var ART_FARBE = { der: '#2F6FD0', die: '#D0407A', das: '#1E9E63' };
  function artikelChip(a) {
    if (!a) return '';
    return '<span class="vt-artchip" style="--af:' + ART_FARBE[a] + '">' + a + '</span>';
  }

  /* ================= Ton ================= */
  var STIMME = null;
  function stimme() {
    if (STIMME) return STIMME;
    try {
      var v = speechSynthesis.getVoices().filter(function (x) { return /^de/i.test(x.lang); });
      STIMME = v.filter(function (x) { return /google|premium|siri|natural|anna|petra/i.test(x.name); })[0] || v[0] || null;
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
    if (el) { el.classList.add('vt-tont'); setTimeout(function () { el.classList.remove('vt-tont'); }, 620); }
  };

  /* ================= Wort im Satz markieren ================= */
  function wortRegex(w) {
    w = String(w || '').trim();
    if (!w) return null;
    var stamm = w.replace(/(en|er|es|em|e|n|s)$/i, '');
    if (stamm.length < 3) stamm = w;
    return new RegExp('(^|[\\s(„"\'])(' + stamm.replace(/[.*+?^${}()|[\]\\]/g, '\\$&') + '[a-zäöüß]{0,4})(?=[\\s.,!?;:)"„\']|$)', 'i');
  }
  function satzMarkiert(satz, wort, klasse) {
    var s = esc(satz || '');
    var re = wortRegex(wort);
    if (!re) return s;
    return s.replace(re, '$1<mark class="vt-mark' + (klasse ? ' ' + klasse : '') + '">$2</mark>');
  }

  /* ================= Bild ================= */
  // Wortkarte, wenn es kein Bild und kein Emoji gibt: Anfangsbuchstabe in Artikelfarbe
  function wortKarte(v, gr) {
    var f = (v.artikel && ART_FARBE[v.artikel]) || '#1B9BC0';
    var buch = (v.wort || v.de || '?').trim().charAt(0).toUpperCase();
    return '<span class="vt-bild ' + (gr || '') + ' vt-typo" style="--tk:' + f + '">'
      + '<span class="vt-typo-b">' + esc(buch) + '</span></span>';
  }
  function bild(v, gr) {
    var id = v.zwilling || v.id;
    if (!v.em && !v.zwilling && v.quelle === 'live') return wortKarte(v, gr);
    return '<span class="vt-bild ' + (gr || '') + '">'
      + '<img src="vok-bild/' + encodeURIComponent(id) + '.webp" alt="" loading="lazy" '
      + 'onerror="this.style.display=\'none\';this.nextSibling.style.display=\'flex\'">'
      + '<span class="vt-em" style="display:none">' + (v.em || '🔤') + '</span></span>';
  }
  function bildEmoji(v, gr) {
    if (!v.em) return wortKarte(v, gr);
    return '<span class="vt-bild ' + (gr || '') + '"><span class="vt-em" style="display:flex">' + v.em + '</span></span>';
  }

  /* ================= Wortquellen ================= */
  function lektionenGemacht() {
    var m = {};
    try { m = JSON.parse(localStorage.getItem('dow_lek') || '{}'); } catch (e) { m = {}; }
    var ids = {};
    Object.keys(m).forEach(function (k) {
      var t = /^([a-z0-9]+)-(\d+)$/.exec(k);
      if (t) ids[t[1] + '-l' + t[2]] = 1;
    });
    return ids;
  }
  function meinNiveau() {
    var n = '';
    try { n = (window.profile && (profile.level || profile.target_level)) || ''; } catch (e) {}
    var t = /([ABC][12])/.exec(String(n)); return t ? t[1] : 'A1';
  }
  var STUFEN = ['A1', 'A2', 'B1', 'B2', 'C1', 'C2'];
  function slug(s) {
    return String(s).toLowerCase().replace(/ä/g, 'ae').replace(/ö/g, 'oe')
      .replace(/ü/g, 'ue').replace(/ß/g, 'ss').replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '').slice(0, 48);
  }
  // Kern eines Eintrags fuer den Abgleich: ohne Artikel, ohne Zusaetze in Klammern
  function kernWort(s) {
    return String(s || '').replace(/^(der|die|das)\s+/i, '')
      .replace(/\s*\(.*?\)\s*/g, ' ').replace(/\s+/g, ' ').trim().toLowerCase();
  }
  var POOL_IDX = null;
  function poolIndex() {
    if (POOL_IDX) return POOL_IDX;
    POOL_IDX = {};
    POOL.forEach(function (v) {
      var k = kernWort(v.de);
      if (k && !POOL_IDX[k]) POOL_IDX[k] = v;
    });
    return POOL_IDX;
  }
  function ausLive() {
    var out = [], idx = poolIndex();
    try {
      if (typeof collectVocab !== 'function') return out;
      collectVocab().forEach(function (v) {
        if (!v || !v.de) return;
        var a = (/^(der|die|das)\s/i.exec(v.de) || [])[1];
        var zwilling = idx[kernWort(v.de)] || null;   // gibt es das Wort auch im Kurs?
        out.push({
          id: 'live-' + slug(v.de), de: v.de,
          wort: v.de.replace(/^(der|die|das)\s+/i, ''),
          artikel: (a ? a.toLowerCase() : null) || (zwilling && zwilling.artikel) || null,
          art: a ? 'nomen' : (zwilling ? zwilling.art : 'wort'),
          em: v.em || (zwilling && zwilling.em) || '',
          bsp: v.bsp || v.beispiel || (zwilling && zwilling.bsp) || '',
          niveau: (zwilling && zwilling.niveau) || meinNiveau(),
          kurs: 'Live-Unterricht', thema: v.from || 'Deine Stunde',
          quelle: 'live',
          zwilling: zwilling ? zwilling.id : null,       // fuer Bild und Uebersetzung
          trDirekt: v.uebersetzung || v.tr || ''
        });
      });
    } catch (e) {}
    return out;
  }
  function alleWoerter() {
    var alles = POOL.concat(ausLive()), g = {};
    return alles.filter(function (v) { if (g[v.id]) return false; g[v.id] = 1; return true; });
  }

  /* ================= Runde bauen ================= */
  function baueRunde(ziel) {
    var alle = alleWoerter(), idx = {};
    alle.forEach(function (v) { idx[v.id] = v; });
    var heute = new Date().toISOString().slice(0, 10);

    var faellig = [];
    Object.keys(BEKANNT).forEach(function (id) {
      var s = BEKANNT[id];
      if (s.faellig && s.faellig > heute) return;
      if (idx[id]) faellig.push(idx[id]);
    });
    faellig.sort(function (a, b) { return (BEKANNT[b.id].falsch || 0) - (BEKANNT[a.id].falsch || 0); });

    var gemacht = lektionenGemacht(), meinIdx = Math.max(0, STUFEN.indexOf(meinNiveau()));
    var kand = alle.filter(function (v) { return !BEKANNT[v.id]; });
    function rang(v) {
      if (v.quelle === 'live') return 0;
      if ((v.quellen || []).some(function (x) { return gemacht[x]; })) return 1;
      return 2 + Math.abs(STUFEN.indexOf(v.niveau) - meinIdx);
    }
    kand.sort(function (a, b) {
      var r = rang(a) - rang(b);
      return r || (STUFEN.indexOf(a.niveau) - STUFEN.indexOf(b.niveau));
    });

    var maxNeu = Math.max(3, Math.round(ziel * 0.45));
    var neu = kand.slice(0, maxNeu);
    var woerter = faellig.slice(0, Math.max(0, ziel - neu.length)).concat(neu).slice(0, ziel);
    if (woerter.length < ziel) {
      var drin = {}; woerter.forEach(function (v) { drin[v.id] = 1; });
      woerter = woerter.concat(kand.filter(function (v) { return !drin[v.id]; }).slice(0, ziel - woerter.length));
    }
    return baueAufgaben(mische(woerter));
  }

  // Aus Wörtern werden Aufgaben. Neue Wörter bekommen eine kleine Serie:
  // kennenlernen -> wiedererkennen -> selbst produzieren.
  function baueAufgaben(woerter) {
    var erste = [], spaeter = [];
    woerter.forEach(function (v) {
      if (!BEKANNT[v.id]) {
        var a = leichterTyp(v), b = schwererTyp(v, a);
        erste.push({ v: v, typ: 'kennenlernen', letzte: false });
        erste.push({ v: v, typ: a, letzte: false });
        spaeter.push({ v: v, typ: b, letzte: true });
      } else {
        erste.push({ v: v, typ: typFuer(v), letzte: true });
      }
    });
    var alle = erste.concat(mische(spaeter));

    // Ein Spiel in die Mitte, wenn genug Wörter mit Übersetzung da sind
    var mitTr = woerter.filter(function (v) { return !!trWort(v); });
    if (mitTr.length >= 5) {
      var pos = Math.min(alle.length, Math.max(3, Math.round(alle.length / 3)));
      alle.splice(pos, 0, { spiel: 'paare', woerter: mische(mitTr).slice(0, 5) });
    }
    return alle;
  }

  // Leichte erste Übung nach dem Kennenlernen
  function leichterTyp(v) {
    var m = [];
    if (trWort(v)) m.push('uebersetzung');
    if (v.em) m.push('bild');
    m.push('hoeren');
    return zufall(m);
  }
  // Zweite, schwerere Übung — möglichst eine andere Form
  function schwererTyp(v, nicht) {
    var m = [];
    if (v.artikel) m.push('artikel');
    if (luecken(v)) m.push('luecke');
    if (!/\s/.test((v.wort || v.de).trim())) m.push('buchstaben');
    if (trWort(v)) m.push('rueckwaerts');
    m.push('hoeren');
    m = m.filter(function (t) { return t !== nicht; });
    return m.length ? zufall(m) : 'hoeren';
  }

  /* ================= Aufgabentypen ================= */
  function luecken(v) {
    if (!v.bsp || v.art === 'wendung') return null;
    var w = (v.wort || v.de).trim();
    if (!w || /\s/.test(w)) return null;
    var re = wortRegex(w);
    return (re && re.test(v.bsp)) ? re : null;
  }
  var TYP_INFO = {
    kennenlernen: { f: 'Neues Wort', farbe: '#1B9BC0', ic: '✨' },
    uebersetzung: { f: 'Was heißt das?', farbe: '#1B9BC0', ic: '💬' },
    rueckwaerts: { f: 'Welches deutsche Wort ist das?', farbe: '#2F6FD0', ic: '🔁' },
    bild: { f: 'Welches Bild passt?', farbe: '#E0A020', ic: '🖼️' },
    artikel: { f: 'der, die oder das?', farbe: '#8B4FC7', ic: '🎯' },
    luecke: { f: 'Welches Wort fehlt im Satz?', farbe: '#E07B39', ic: '🧩' },
    hoeren: { f: 'Hör genau hin', farbe: '#3E5FCC', ic: '🎧' },
    tippen: { f: 'Schreib das Wort auf Deutsch', farbe: '#14708B', ic: '⌨️' },
    satzbau: { f: 'Bau den Satz', farbe: '#C7457F', ic: '🧱' },
    satzhoeren: { f: 'Hör den Satz — welches Wort fehlt?', farbe: '#3E5FCC', ic: '👂' }
  };

  function typFuer(v) {
    if (!BEKANNT[v.id]) return 'kennenlernen';
    var st = (BEKANNT[v.id] && BEKANNT[v.id].stufe) || 0;
    var hatTr = !!trWort(v), hatBsp = !!v.bsp;
    var lang = /\s/.test((v.wort || v.de).trim());
    var kannL = !!luecken(v);
    var m = [];
    if (st <= 1) { m = hatTr ? ['uebersetzung', 'bild'] : ['bild']; }
    else if (st === 2) {
      m = ['rueckwaerts', 'hoeren'];
      if (v.artikel) m.push('artikel');
      if (kannL) m.push('luecke');
    } else if (st === 3) {
      m = ['hoeren'];
      if (!lang) m.push('tippen');
      if (kannL) { m.push('luecke'); m.push('satzhoeren'); }
      if (v.artikel) m.push('artikel');
    } else {
      m = ['hoeren'];
      if (!lang) m.push('tippen');
      if (kannL) m.push('satzhoeren');
      var wz = hatBsp ? v.bsp.split(/\s+/).length : 0;
      if (wz >= 4 && wz <= 9) m.push('satzbau');
    }
    if (!hatTr) m = m.filter(function (t) { return t !== 'rueckwaerts' && t !== 'uebersetzung' && t !== 'tippen'; });
    if (!m.length) m = hatTr ? ['rueckwaerts'] : ['bild'];
    return zufall(m);
  }

  function ablenker(v, n, art) {
    var basis = POOL.filter(function (x) {
      if (x.id === v.id) return false;
      if (art === 'tr' && !trWort(x)) return false;
      if (art === 'einzel' && /\s/.test((x.wort || x.de).trim())) return false;
      return true;
    });
    var nah = basis.filter(function (x) { return x.niveau === v.niveau && x.art === v.art; });
    var mit = basis.filter(function (x) { return x.art === v.art; });
    var quelle = nah.length >= n ? nah : (mit.length >= n ? mit : basis);
    return mische(quelle).slice(0, n);
  }

  /* ================= Stil ================= */
  function stil() {
    if (document.getElementById('vt-stil')) return;
    var st = document.createElement('style'); st.id = 'vt-stil';
    st.textContent = `
/* ---------- Startseite im Schülerbereich ---------- */
.vt-hero{position:relative;overflow:hidden;border-radius:26px;padding:34px 32px;margin-bottom:22px;color:#fff;
  background:linear-gradient(135deg,#0B6157 0%,#14708B 42%,#2CC0AE 100%)}
.vt-hero::after{content:'';position:absolute;right:-70px;top:-70px;width:280px;height:280px;border-radius:50%;background:rgba(255,255,255,.08)}
.vt-hero::before{content:'';position:absolute;right:60px;bottom:-110px;width:200px;height:200px;border-radius:50%;background:rgba(255,255,255,.06)}
.vt-hero-in{position:relative;z-index:1;display:flex;gap:28px;align-items:center;flex-wrap:wrap}
.vt-hero-tx{flex:1;min-width:260px}
.vt-hero h1{font-family:'Space Grotesk',system-ui,sans-serif;font-size:36px;line-height:1.1;margin:0 0 10px;color:#fff}
.vt-hero p{margin:0 0 22px;font-size:16px;line-height:1.6;opacity:.94;max-width:520px}
.vt-serie{display:inline-flex;align-items:center;gap:7px;background:rgba(255,255,255,.2);border-radius:999px;padding:7px 15px;font-size:13.5px;font-weight:800;margin-bottom:14px}
.vt-los{border:none;border-radius:16px;background:#fff;color:#0B6157;font-family:inherit;font-size:17px;font-weight:800;
  padding:17px 34px;cursor:pointer;box-shadow:0 12px 30px rgba(0,0,0,.2);transition:transform .16s,box-shadow .16s}
.vt-los:hover{transform:translateY(-3px);box-shadow:0 18px 40px rgba(0,0,0,.26)}
.vt-ring{position:relative;width:150px;height:150px;flex:none}
.vt-ring svg{transform:rotate(-90deg)}
.vt-ring .zahl{position:absolute;inset:0;display:flex;flex-direction:column;align-items:center;justify-content:center;line-height:1}
.vt-ring .zahl b{font-family:'Space Grotesk',system-ui,sans-serif;font-size:38px;font-weight:700}
.vt-ring .zahl small{font-size:12px;font-weight:700;opacity:.88;margin-top:4px}
.vt-kpis{display:grid;grid-template-columns:repeat(auto-fit,minmax(190px,1fr));gap:16px;margin-bottom:22px}
.vt-kpi{background:#fff;border:1px solid var(--border,#ECE7DC);border-radius:20px;padding:20px 22px;position:relative;overflow:hidden}
.vt-kpi>i{position:absolute;right:16px;top:16px;font-size:26px;font-style:normal;opacity:.9}
.vt-kpi .k{font-size:12.5px;font-weight:800;color:#8A857C;letter-spacing:.04em;text-transform:uppercase}
.vt-kpi .v{font-size:38px;font-weight:800;color:#141414;line-height:1.1;margin-top:4px;font-family:'Space Grotesk',system-ui,sans-serif}
.vt-kpi .d{font-size:13px;color:#8A857C;margin-top:2px}
.vt-kpi .balken{height:7px;border-radius:99px;background:#EFEADF;margin-top:12px;overflow:hidden}
.vt-kpi .balken>i{position:static;display:block;height:100%;border-radius:99px;background:linear-gradient(90deg,#1B9BC0,#2CC0AE);font-size:0}
.vt-zeile{display:flex;align-items:center;gap:10px;flex-wrap:wrap;font-size:14px;color:#6A655C;margin-bottom:10px;font-weight:600}
.vt-zb{border:2px solid var(--border,#ECE7DC);background:#fff;border-radius:999px;padding:9px 18px;font-family:inherit;font-size:14px;font-weight:800;color:#4A4740;cursor:pointer;transition:all .15s}
.vt-zb:hover{border-color:#1B9BC0}
.vt-zb.on{background:#14708B;border-color:#14708B;color:#fff}
.vt-hinweis{background:#FFF8E4;border:1px solid #F0DFA8;border-radius:16px;padding:16px 20px;font-size:14.5px;color:#6B5A22;line-height:1.6}

/* ---------- Vollbild-Runde ---------- */
#vtVoll{position:fixed;inset:0;z-index:900;background:#FAF8F2;display:flex;flex-direction:column;
  font-family:'Inter',system-ui,-apple-system,sans-serif;animation:vtAuf .22s ease}
@keyframes vtAuf{from{opacity:0;transform:scale(.99)}to{opacity:1;transform:none}}
#vtVoll *{box-sizing:border-box}
.vt-top{flex:none;display:flex;align-items:center;gap:18px;padding:18px 26px;background:#fff;border-bottom:1px solid #EDE8DC}
.vt-x{border:none;background:none;font-size:30px;line-height:1;color:#B4AEA4;cursor:pointer;padding:2px 10px;border-radius:11px;flex:none}
.vt-x:hover{background:#F3F0E9;color:#5A5750}
.vt-bar{flex:1;height:16px;border-radius:999px;background:#EDE8DC;overflow:hidden;position:relative}
.vt-bar>i{display:block;height:100%;border-radius:999px;background:linear-gradient(90deg,#1B9BC0,#2CC0AE);
  transition:width .4s cubic-bezier(.3,.9,.3,1);position:relative}
.vt-bar>i::after{content:'';position:absolute;inset:0 0 50% 0;border-radius:999px;background:rgba(255,255,255,.25)}
.vt-top .n{font-size:16px;font-weight:800;color:#6A655C;flex:none;min-width:66px;text-align:right;font-variant-numeric:tabular-nums}
.vt-top .fl{flex:none;display:flex;align-items:center;gap:6px;background:#FFF3D6;color:#8A6D14;border-radius:999px;padding:7px 14px;font-size:14px;font-weight:800}

.vt-buehne{flex:1;overflow-y:auto;display:flex;flex-direction:column;align-items:center;padding:34px 24px 210px}
.vt-karte{width:100%;max-width:860px}
.vt-etikett{display:inline-flex;align-items:center;gap:9px;background:var(--tf,#1B9BC0);color:#fff;border-radius:999px;
  padding:9px 20px;font-size:14px;font-weight:800;margin-bottom:26px}
.vt-etikett .ic{font-size:16px}

.vt-gross{font-family:'Space Grotesk',system-ui,sans-serif;font-size:clamp(34px,5.4vw,58px);font-weight:700;
  line-height:1.12;color:#141414;margin:0 0 14px;display:flex;align-items:center;gap:18px;flex-wrap:wrap}
.vt-gross.mitte{justify-content:center;text-align:center}
.vt-lauts{border:none;background:#EAF8F5;color:#14708B;width:60px;height:60px;border-radius:19px;font-size:27px;cursor:pointer;
  flex:none;display:inline-flex;align-items:center;justify-content:center;transition:transform .16s,background .2s;vertical-align:middle}
.vt-lauts:hover{background:#D3F0EA;transform:scale(1.05)}
.vt-lauts.klein{width:46px;height:46px;font-size:21px;border-radius:14px}
.vt-tont{transform:scale(1.16)}
.vt-unter{font-size:clamp(17px,2.3vw,22px);color:#5A5750;line-height:1.5;margin:0 0 30px;font-weight:600}
.vt-unter.vt-rtl{direction:rtl;text-align:right}

.vt-artchip{display:inline-block;background:var(--af,#666);color:#fff;border-radius:9px;padding:2px 11px;font-size:.62em;
  font-weight:800;vertical-align:middle;margin-right:12px;font-family:'Inter',system-ui,sans-serif}

.vt-mark{background:linear-gradient(180deg,transparent 52%,#FFE59A 52%);color:inherit;padding:0 3px;border-radius:3px;font-weight:800}
.vt-mark.gruen{background:linear-gradient(180deg,transparent 52%,#A9EBD3 52%)}
.vt-mark.rot{background:linear-gradient(180deg,transparent 52%,#FFC9C9 52%)}

.vt-satzbox{background:#fff;border:2px solid #EDE8DC;border-radius:22px;padding:26px 30px;margin-bottom:28px}
.vt-satz{font-size:clamp(21px,3vw,30px);line-height:1.6;color:#20221F;font-weight:600;margin:0}
.vt-satz-tr{font-size:16px;color:#8A857C;margin-top:12px;line-height:1.5}
.vt-satz-tr.vt-rtl{direction:rtl;text-align:right}

.vt-bild{width:170px;height:170px;border-radius:30px;background:linear-gradient(135deg,#F2F8F6,#E4F2EE);
  display:flex;align-items:center;justify-content:center;overflow:hidden;flex:none;margin:0 auto 26px}
.vt-bild.gr{width:230px;height:230px;border-radius:38px}
.vt-bild.mini{width:64px;height:64px;border-radius:17px;margin:0}
.vt-bild img{width:100%;height:100%;object-fit:cover;display:block}
.vt-bild .vt-em{width:100%;height:100%;align-items:center;justify-content:center;font-size:76px}
.vt-bild.gr .vt-em{font-size:104px}
.vt-bild.mini .vt-em{font-size:30px}

.vt-opt{display:grid;gap:14px}
.vt-opt.zwei{grid-template-columns:1fr 1fr}
.vt-opt.bilder{grid-template-columns:repeat(auto-fit,minmax(190px,1fr))}
.vt-opt.drei{grid-template-columns:repeat(3,1fr)}
.vt-o{position:relative;border:3px solid #E7E1D4;background:#fff;border-radius:20px;padding:22px 26px;font-family:inherit;
  font-size:clamp(17px,2.1vw,21px);font-weight:700;color:#20221F;cursor:pointer;text-align:left;line-height:1.35;
  transition:border-color .16s,background .16s,transform .12s,box-shadow .16s;box-shadow:0 3px 0 #E7E1D4}
.vt-o:hover:not(:disabled){border-color:#1B9BC0;transform:translateY(-2px);box-shadow:0 6px 0 #B9E4DC}
.vt-o:disabled{cursor:default}
.vt-o .taste{position:absolute;left:13px;top:11px;font-size:11px;font-weight:800;color:#B4AEA4;border:1px solid #E7E1D4;border-radius:6px;padding:0 6px}
.vt-o.richtig{border-color:#1B9BC0;background:#E9F9F5;color:#07463E;box-shadow:0 3px 0 #9EDCD0}
.vt-o.falsch{border-color:#E05B5B;background:#FDEFEF;color:#8E2222;box-shadow:0 3px 0 #F2B5B5}
.vt-o.vt-rtl{direction:rtl;text-align:right}
.vt-o.bildo{display:flex;flex-direction:column;align-items:center;gap:12px;padding:20px 14px}
.vt-o.bildo .vt-bild{width:120px;height:120px;margin:0;border-radius:22px}
.vt-o.bildo .vt-bild .vt-em{font-size:56px}
.vt-o.artikel{text-align:center;font-size:clamp(24px,3.4vw,34px);font-weight:800;padding:30px 12px;
  border-color:var(--af);color:var(--af)}
.vt-o.artikel:hover:not(:disabled){border-color:var(--af)}

.vt-eingabe{width:100%;border:3px solid #E7E1D4;border-radius:20px;padding:24px 26px;font-family:inherit;
  font-size:clamp(20px,2.6vw,26px);font-weight:700;color:#20221F;outline:none;background:#fff;box-shadow:0 3px 0 #E7E1D4}
.vt-eingabe:focus{border-color:#1B9BC0;box-shadow:0 3px 0 #B9E4DC}
.vt-eingabe.richtig{border-color:#1B9BC0;background:#E9F9F5}
.vt-eingabe.falsch{border-color:#E05B5B;background:#FDEFEF}

.vt-bau{display:flex;flex-wrap:wrap;gap:11px;min-height:88px;border:3px dashed #DCD5C5;border-radius:20px;
  padding:18px;margin-bottom:16px;align-content:flex-start;background:#fff}
.vt-teile{display:flex;flex-wrap:wrap;gap:11px}
.vt-teil{border:3px solid #E7E1D4;background:#fff;border-radius:15px;padding:13px 20px;font-family:inherit;
  font-size:clamp(16px,2vw,21px);font-weight:700;color:#20221F;cursor:pointer;box-shadow:0 3px 0 #E7E1D4;transition:transform .12s}
.vt-teil:hover{border-color:#1B9BC0;transform:translateY(-2px)}

.vt-hoerknopf{width:150px;height:150px;border-radius:44px;border:none;background:linear-gradient(135deg,#3E5FCC,#6B84E0);
  color:#fff;font-size:60px;cursor:pointer;margin:0 auto 18px;display:flex;align-items:center;justify-content:center;
  box-shadow:0 16px 40px rgba(62,95,204,.36);transition:transform .16s}
.vt-hoerknopf:hover{transform:scale(1.05)}
.vt-langsam{display:block;margin:0 auto 30px;border:2px solid #E7E1D4;background:#fff;border-radius:999px;
  padding:11px 22px;font-family:inherit;font-size:15px;font-weight:700;color:#5A5750;cursor:pointer}
.vt-langsam:hover{border-color:#3E5FCC;color:#3E5FCC}

.vt-fuss{position:fixed;left:0;right:0;bottom:0;z-index:2;background:#fff;border-top:2px solid #EDE8DC;
  padding:20px 26px calc(20px + env(safe-area-inset-bottom));transform:translateY(115%);transition:transform .26s cubic-bezier(.2,.9,.3,1)}
.vt-fuss.an{transform:none}
.vt-fuss.gut{background:#E9F9F5;border-top-color:#9EDCD0}
.vt-fuss.schlecht{background:#FDEFEF;border-top-color:#F2B5B5}
.vt-fuss-in{max-width:860px;margin:0 auto;display:flex;align-items:center;gap:24px;flex-wrap:wrap}
.vt-fuss-tx{flex:1;min-width:230px}
.vt-fuss b{display:flex;align-items:center;gap:10px;font-size:22px;font-family:'Space Grotesk',system-ui,sans-serif;margin-bottom:6px}
.vt-fuss.gut b{color:#0A6157}
.vt-fuss.schlecht b{color:#9E2626}
.vt-fuss .lsg{font-size:17px;color:#2A2721;line-height:1.5;font-weight:600;display:flex;align-items:center;gap:10px;flex-wrap:wrap}
.vt-fuss .lsg .vt-lauts{width:38px;height:38px;font-size:17px;border-radius:12px}
.vt-fuss .lsg em{font-style:normal;font-weight:800}
.vt-fuss .bspz{margin-top:8px;font-size:15px;color:#5A5750;line-height:1.5}
.vt-fuss .bspz i{font-style:normal;color:#8A857C;display:block;margin-top:3px}
.vt-fuss .bspz i.vt-rtl{direction:rtl;text-align:right}
.vt-fuss .wieder{margin-top:8px;font-size:13.5px;color:#8A857C;font-weight:600}
.vt-weiter{flex:none;border:none;border-radius:17px;padding:20px 44px;font-family:inherit;font-size:18px;font-weight:800;
  color:#fff;cursor:pointer;background:linear-gradient(135deg,#14708B,#1B9BC0);box-shadow:0 8px 22px rgba(14,124,112,.34);transition:transform .15s}
.vt-weiter:hover{transform:translateY(-2px)}
.vt-weiter.rot{background:linear-gradient(135deg,#C24141,#E05B5B);box-shadow:0 8px 22px rgba(194,65,65,.32)}
.vt-pruefen{width:100%;margin-top:22px;border:none;border-radius:17px;padding:20px;font-family:inherit;font-size:18px;
  font-weight:800;color:#fff;cursor:pointer;background:linear-gradient(135deg,#14708B,#1B9BC0);box-shadow:0 8px 22px rgba(14,124,112,.3)}

.vt-ende{max-width:640px;margin:0 auto;text-align:center;padding-top:20px}
.vt-ende .gr{font-size:96px;line-height:1;margin-bottom:14px;animation:vtHuepf .6s cubic-bezier(.3,1.6,.5,1)}
@keyframes vtHuepf{0%{transform:scale(.4);opacity:0}60%{transform:scale(1.15)}100%{transform:none;opacity:1}}
.vt-ende h2{font-family:'Space Grotesk',system-ui,sans-serif;font-size:42px;margin:0 0 12px;color:#141414}
.vt-ende p{color:#5A5750;font-size:17px;margin:0 0 30px;line-height:1.6}
.vt-ergz{display:flex;gap:16px;justify-content:center;margin-bottom:32px;flex-wrap:wrap}
.vt-ergz div{background:#fff;border:2px solid #EDE8DC;border-radius:20px;padding:20px 30px;min-width:130px}
.vt-ergz b{display:block;font-size:40px;font-family:'Space Grotesk',system-ui,sans-serif;color:#141414;line-height:1.1}
.vt-ergz span{font-size:13.5px;color:#8A857C;font-weight:700}
.vt-liste{text-align:left;margin:0 auto 30px;display:flex;flex-direction:column;gap:10px}
.vt-liste .z{display:flex;align-items:center;gap:14px;background:#fff;border:2px solid #EDE8DC;border-radius:16px;padding:13px 18px}
.vt-liste .z .tx{flex:1;min-width:0}
.vt-liste .z .tx b{display:block;font-size:17px;font-weight:800;color:#20221F}
.vt-liste .z .tx span{font-size:14px;color:#8A857C}
.vt-liste .z .st{font-size:12.5px;font-weight:800;padding:5px 12px;border-radius:999px;flex:none}
.vt-liste .z .st.g{background:#E9F9F5;color:#0A6157}
.vt-liste .z .st.s{background:#FDEFEF;color:#9E2626}
.vt-konfetti{position:fixed;inset:0;pointer-events:none;z-index:3;overflow:hidden}
.vt-konf{position:absolute;width:11px;height:16px;border-radius:2px;animation:vtFall linear forwards}
@keyframes vtFall{to{transform:translateY(105vh) rotate(720deg);opacity:.15}}

/* Wortkarte statt Bild, wenn nichts da ist */
.vt-bild.vt-typo{background:linear-gradient(135deg,color-mix(in srgb,var(--tk) 12%,#fff),color-mix(in srgb,var(--tk) 26%,#fff));
  box-shadow:inset 0 0 0 2px color-mix(in srgb,var(--tk) 30%,transparent)}
.vt-typo-b{font-family:'Space Grotesk',system-ui,sans-serif;font-size:64px;font-weight:700;color:var(--tk);line-height:1}
.vt-bild.gr .vt-typo-b{font-size:92px}
.vt-bild.mini .vt-typo-b{font-size:26px}

/* Buchstabensalat */
.vt-bau.vt-buch{gap:8px;min-height:82px;align-items:center}
.vt-teil.vt-bt{min-width:56px;text-align:center;font-size:clamp(20px,2.6vw,28px);padding:12px 10px;font-weight:800}

/* Spiel: Paare finden */
.vt-paare{display:grid;grid-template-columns:1fr 1fr;gap:16px}
.vt-sp{display:flex;flex-direction:column;gap:11px}
.vt-pk{display:flex;align-items:center;gap:11px;border:3px solid #E7E1D4;background:#fff;border-radius:16px;
  padding:16px 18px;font-family:inherit;font-size:clamp(15px,1.9vw,19px);font-weight:700;color:#20221F;
  cursor:pointer;text-align:left;box-shadow:0 3px 0 #E7E1D4;transition:all .15s;min-height:62px}
.vt-pk:hover{border-color:#C7457F;transform:translateY(-2px)}
.vt-pk .e{font-size:23px;flex:none}
.vt-pk.gewaehlt{border-color:#C7457F;background:#FDF0F6;box-shadow:0 3px 0 #F0B9D4}
.vt-pk.daneben{border-color:#E05B5B;background:#FDEFEF;animation:vtWackel .3s}
@keyframes vtWackel{0%,100%{transform:none}25%{transform:translateX(-5px)}75%{transform:translateX(5px)}}
.vt-pk.fertig{border-color:#1B9BC0;background:#E9F9F5;color:#0A6157;box-shadow:0 3px 0 #9EDCD0;cursor:default;opacity:.75}
.vt-pk.vt-rtl{direction:rtl;text-align:right}
@media(max-width:760px){
  .vt-paare{gap:10px}
  .vt-pk{padding:13px 13px;min-height:54px;border-radius:13px;font-size:14.5px;gap:8px}
  .vt-pk .e{font-size:19px}
}

.vt-leer{background:#fff;border:2px dashed #E7E1D4;border-radius:22px;padding:40px;text-align:center;color:#6A655C;font-size:16px;line-height:1.65}

@media(max-width:760px){
  .vt-hero{padding:26px 22px;border-radius:22px}
  .vt-hero h1{font-size:29px}
  .vt-hero-in{gap:18px}
  .vt-ring{width:110px;height:110px}
  .vt-ring .zahl b{font-size:29px}
  .vt-top{padding:13px 15px;gap:12px}
  .vt-top .fl{display:none}
  .vt-buehne{padding:24px 16px 240px}
  .vt-opt.drei{grid-template-columns:1fr}
  .vt-opt.zwei{grid-template-columns:1fr}
  .vt-o{padding:18px 20px;border-radius:17px}
  .vt-o .taste{display:none}
  .vt-satzbox{padding:20px 18px;border-radius:18px}
  .vt-fuss{padding:16px 16px calc(16px + env(safe-area-inset-bottom))}
  .vt-fuss-in{gap:14px}
  .vt-weiter{width:100%;padding:18px}
  .vt-ende h2{font-size:31px}
  .vt-ende .gr{font-size:72px}
  .vt-hoerknopf{width:120px;height:120px;font-size:48px;border-radius:36px}
}
`;
    document.head.appendChild(st);
  }

  /* ================= Startseite ================= */
  function ring(heute, ziel) {
    var p = ziel ? Math.min(1, heute / ziel) : 0, r = 64, u = 2 * Math.PI * r;
    return '<div class="vt-ring"><svg width="150" height="150" viewBox="0 0 150 150">'
      + '<circle cx="75" cy="75" r="' + r + '" fill="none" stroke="rgba(255,255,255,.24)" stroke-width="13"/>'
      + '<circle cx="75" cy="75" r="' + r + '" fill="none" stroke="#fff" stroke-width="13" stroke-linecap="round" '
      + 'stroke-dasharray="' + u + '" stroke-dashoffset="' + (u * (1 - p)) + '"/></svg>'
      + '<div class="zahl"><b>' + heute + '</b><small>von ' + ziel + ' heute</small></div></div>';
  }

  function startbild() {
    var ziel = STAND.ziel || 15, heute = STAND.heute || 0;
    var faellig = STAND.faellig || 0, gelernt = STAND.gelernt || 0;
    var gesamt = STAND.gesamt || 0, serie = STAND.serie || 0;
    var neuDa = alleWoerter().filter(function (v) { return !BEKANNT[v.id]; }).length;
    var fertig = heute >= ziel;
    var anteil = gesamt ? Math.round((gelernt / gesamt) * 100) : 0;

    return '<div class="vt-hero"><div class="vt-hero-in"><div class="vt-hero-tx">'
      + (serie > 0 ? '<div class="vt-serie">🔥 ' + serie + (serie === 1 ? ' Tag' : ' Tage') + ' am Stück</div>' : '')
      + '<h1>' + (fertig ? 'Tagesziel geschafft 🎉' : 'Deine Tagesrunde') + '</h1>'
      + '<p>' + (fertig
        ? 'Für heute hast du genug getan. Wenn du magst, häng noch eine Runde dran — jede Wiederholung sitzt tiefer.'
        : (faellig > 0
          ? '<b>' + faellig + ' ' + (faellig === 1 ? 'Wort wartet' : 'Wörter warten') + '</b> auf eine Wiederholung — genau jetzt, bevor du sie vergisst. Dazu kommen neue aus deinen Lektionen.'
          : 'Neue Wörter aus deinen Lektionen, aus dem Live-Unterricht und aus dem Üben. Jedes mit Bild, Ton und Beispielsatz.'))
      + '</p>'
      + '<button class="vt-los" onclick="__vtStart()">' + (fertig ? 'Noch eine Runde' : 'Runde starten') + ' →</button>'
      + '</div>' + ring(heute, ziel) + '</div></div>'

      + '<div class="vt-kpis">'
      + '<div class="vt-kpi"><i>🏆</i><div class="k">Sitzt sicher</div><div class="v">' + gelernt + '</div>'
      + '<div class="d">von ' + gesamt + ' geübten Wörtern</div>'
      + '<div class="balken"><i style="width:' + anteil + '%"></i></div></div>'
      + '<div class="vt-kpi"><i>🔁</i><div class="k">Heute fällig</div><div class="v">' + faellig + '</div><div class="d">zum Auffrischen</div></div>'
      + '<div class="vt-kpi"><i>✨</i><div class="k">Wartet auf dich</div><div class="v">' + neuDa + '</div><div class="d">neue Wörter</div></div>'
      + '</div>'

      + '<div class="vt-zeile"><span>Wörter pro Tag:</span>'
      + ZIEL_VORGABE.map(function (z) {
        return '<button class="vt-zb' + (z === ziel ? ' on' : '') + '" onclick="__vtZiel(' + z + ')">' + z + '</button>';
      }).join('') + '</div>'
      + (l1() ? '' : '<div class="vt-hinweis">💡 Trag im Profil deine Muttersprache ein — dann steht zu jedem Wort und jedem Beispielsatz die Übersetzung dabei.</div>');
  }

  /* ================= Vollbild ================= */
  function voll() {
    var d = document.getElementById('vtVoll');
    if (d) return d;
    d = document.createElement('div'); d.id = 'vtVoll';
    d.innerHTML = '<div class="vt-top"></div><div class="vt-buehne"><div class="vt-karte" id="vtKarte"></div></div>'
      + '<div class="vt-fuss" id="vtFuss"></div>';
    document.body.appendChild(d);
    document.body.style.overflow = 'hidden';
    document.addEventListener('keydown', taste);
    return d;
  }
  function vollZu() {
    var d = document.getElementById('vtVoll');
    if (d) d.remove();
    document.body.style.overflow = '';
    document.removeEventListener('keydown', taste);
    try { speechSynthesis.cancel(); } catch (e) {}
  }
  function taste(e) {
    if (e.key === 'Escape') { window.__vtAbbruch(); return; }
    var f = document.getElementById('vtFuss');
    if (f && f.classList.contains('an')) {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault(); var b = f.querySelector('.vt-weiter'); if (b) b.click();
      }
      return;
    }
    if (/^[1-9]$/.test(e.key) && !/input|textarea/i.test((e.target && e.target.tagName) || '')) {
      var opts = qa('#vtKarte .vt-o');
      var i = parseInt(e.key, 10) - 1;
      if (opts[i]) { e.preventDefault(); opts[i].click(); }
    }
    if (e.key === 'Enter') {
      var p = q('#vtKarte .vt-pruefen'); if (p) { e.preventDefault(); p.click(); }
    }
  }

  function kopf() {
    var p = RUNDE.length ? Math.round((POS / RUNDE.length) * 100) : 0;
    var serie = STAND.serie || 0;
    q('#vtVoll .vt-top').innerHTML =
      '<button class="vt-x" onclick="__vtAbbruch()" aria-label="Runde beenden">×</button>'
      + '<div class="vt-bar"><i style="width:' + p + '%"></i></div>'
      + (serie > 0 ? '<div class="fl">🔥 ' + serie + '</div>' : '')
      + '<div class="n">' + (POS + 1) + ' / ' + RUNDE.length + '</div>';
  }
  function lauts(t, klein) {
    return '<button class="vt-lauts' + (klein ? ' klein' : '') + '" onclick="__vtSprich(\''
      + esc(t).replace(/'/g, "\\'") + '\',0.92,this)" aria-label="Anhören">🔊</button>';
  }
  function etikett(typ) {
    var i = TYP_INFO[typ] || TYP_INFO.uebersetzung;
    return '<div class="vt-etikett" style="--tf:' + i.farbe + '"><span class="ic">' + i.ic + '</span>' + i.f + '</div>';
  }
  function tasteN(i) { return '<span class="taste">' + (i + 1) + '</span>'; }

  /* ================= Aufgaben ================= */
  function zeichne() {
    var a = RUNDE[POS];
    if (!a) return abschluss();
    GEPRUEFT = false;
    if (a.spiel === 'paare') return zeichnePaare(a);
    var v = a.v;
    var typ = a.typ;
    voll(); kopf();
    var f = document.getElementById('vtFuss');
    f.className = 'vt-fuss'; f.innerHTML = '';
    var k = document.getElementById('vtKarte');
    var h = etikett(typ);

    if (typ === 'kennenlernen') {
      var ue = trWort(v);
      h += bild(v, 'gr')
        + '<h2 class="vt-gross mitte">' + artikelChip(v.artikel) + esc(v.wort || v.de) + lauts(v.de) + '</h2>'
        + (ue ? '<p class="vt-unter' + rtlK() + '" style="text-align:center">' + esc(ue) + '</p>' : '')
        + (v.bsp ? '<div class="vt-satzbox"><p class="vt-satz">' + satzMarkiert(v.bsp, v.wort || v.de) + ' ' + lauts(v.bsp, 1) + '</p>'
          + (trSatz(v) ? '<div class="vt-satz-tr' + rtlK() + '">' + esc(trSatz(v)) + '</div>' : '') + '</div>' : '')
        + '<button class="vt-pruefen" onclick="__vtWeiterNeu()">Verstanden — weiter</button>';

    } else if (typ === 'uebersetzung') {
      var r1 = trWort(v);
      var o1 = mische(ablenker(v, 3, 'tr').map(trWort).concat([r1]));
      h += '<h2 class="vt-gross">' + artikelChip(v.artikel) + esc(v.wort || v.de) + lauts(v.de) + '</h2>'
        + '<div class="vt-opt">' + o1.map(function (o, i) {
          return '<button class="vt-o' + rtlK() + '" onclick="__vtWahl(this,' + (o === r1) + ')">' + tasteN(i) + esc(o) + '</button>';
        }).join('') + '</div>';

    } else if (typ === 'rueckwaerts') {
      var o2 = mische(ablenker(v, 3, 'de').map(function (x) { return x.de; }).concat([v.de]));
      h += '<h2 class="vt-gross' + rtlK() + '">' + esc(trWort(v)) + '</h2>'
        + '<div class="vt-opt">' + o2.map(function (o, i) {
          return '<button class="vt-o" onclick="__vtWahl(this,' + (o === v.de) + ')">' + tasteN(i) + esc(o) + '</button>';
        }).join('') + '</div>';

    } else if (typ === 'bild') {
      var kand = mische(ablenker(v, 3, 'em').concat([v]));
      h += '<h2 class="vt-gross mitte">' + artikelChip(v.artikel) + esc(v.wort || v.de) + lauts(v.de) + '</h2>'
        + '<div class="vt-opt bilder">' + kand.map(function (x, i) {
          return '<button class="vt-o bildo" onclick="__vtWahl(this,' + (x.id === v.id) + ')">' + tasteN(i) + bildEmoji(x) + '</button>';
        }).join('') + '</div>';

    } else if (typ === 'artikel') {
      h += '<h2 class="vt-gross mitte">' + esc(v.wort) + lauts(v.de) + '</h2>'
        + (v.bsp ? '<div class="vt-satzbox"><p class="vt-satz">' + satzMarkiert(v.bsp, v.wort) + '</p></div>' : '')
        + '<div class="vt-opt drei">' + ['der', 'die', 'das'].map(function (a, i) {
          return '<button class="vt-o artikel" style="--af:' + ART_FARBE[a] + '" onclick="__vtWahl(this,' + (a === v.artikel) + ')">' + tasteN(i) + a + '</button>';
        }).join('') + '</div>';

    } else if (typ === 'luecke') {
      var w = (v.wort || v.de).trim();
      var satz = esc(v.bsp).replace(luecken(v), '$1<mark class="vt-mark" style="background:none;border-bottom:4px solid #E07B39;color:#E07B39;letter-spacing:2px">•••</mark>');
      var o3 = mische(ablenker(v, 3, 'einzel').map(function (x) { return (x.wort || x.de).trim(); }).concat([w]));
      h += '<div class="vt-satzbox"><p class="vt-satz">' + satz + '</p>'
        + (trSatz(v) ? '<div class="vt-satz-tr' + rtlK() + '">' + esc(trSatz(v)) + '</div>' : '') + '</div>'
        + '<div class="vt-opt zwei">' + o3.map(function (o, i) {
          return '<button class="vt-o" onclick="__vtWahl(this,' + (o === w) + ')">' + tasteN(i) + esc(o) + '</button>';
        }).join('') + '</div>';

    } else if (typ === 'hoeren') {
      var o4 = mische(ablenker(v, 3, 'de').map(function (x) { return x.de; }).concat([v.de]));
      h += '<button class="vt-hoerknopf" onclick="__vtSprich(\'' + esc(v.de).replace(/'/g, "\\'") + '\',0.9,this)">🔊</button>'
        + '<button class="vt-langsam" onclick="__vtSprich(\'' + esc(v.de).replace(/'/g, "\\'") + '\',0.5,this)">🐢 langsamer abspielen</button>'
        + '<div class="vt-opt zwei">' + o4.map(function (o, i) {
          return '<button class="vt-o" onclick="__vtWahl(this,' + (o === v.de) + ')">' + tasteN(i) + esc(o) + '</button>';
        }).join('') + '</div>';
      setTimeout(function () { sprich(v.de, 0.9); }, 280);

    } else if (typ === 'satzhoeren') {
      var w2 = (v.wort || v.de).trim();
      var satz2 = esc(v.bsp).replace(luecken(v), '$1<mark class="vt-mark" style="background:none;border-bottom:4px solid #3E5FCC;color:#3E5FCC;letter-spacing:2px">•••</mark>');
      var o5 = mische(ablenker(v, 3, 'einzel').map(function (x) { return (x.wort || x.de).trim(); }).concat([w2]));
      h += '<button class="vt-hoerknopf" onclick="__vtSprich(\'' + esc(v.bsp).replace(/'/g, "\\'") + '\',0.88,this)">🔊</button>'
        + '<button class="vt-langsam" onclick="__vtSprich(\'' + esc(v.bsp).replace(/'/g, "\\'") + '\',0.5,this)">🐢 langsamer abspielen</button>'
        + '<div class="vt-satzbox"><p class="vt-satz">' + satz2 + '</p></div>'
        + '<div class="vt-opt zwei">' + o5.map(function (o, i) {
          return '<button class="vt-o" onclick="__vtWahl(this,' + (o === w2) + ')">' + tasteN(i) + esc(o) + '</button>';
        }).join('') + '</div>';
      setTimeout(function () { sprich(v.bsp, 0.88); }, 300);

    } else if (typ === 'tippen') {
      h += bild(v, '')
        + '<h2 class="vt-gross mitte' + rtlK() + '" style="font-size:clamp(26px,3.6vw,38px)">' + esc(trWort(v)) + '</h2>'
        + '<input class="vt-eingabe" id="vtIn" autocomplete="off" autocapitalize="off" autocorrect="off" spellcheck="false" '
        + 'placeholder="' + (v.artikel ? 'mit Artikel, z. B. der Tisch' : 'auf Deutsch schreiben …') + '">'
        + '<button class="vt-pruefen" onclick="__vtTippen()">Prüfen</button>';

    } else if (typ === 'buchstaben') {
      var ziel = (v.wort || v.de).trim();
      var buchst = mische(ziel.split(''));
      h += bild(v, '')
        + (trWort(v) ? '<h2 class="vt-gross mitte' + rtlK() + '" style="font-size:clamp(22px,3vw,32px)">' + esc(trWort(v)) + '</h2>' : '')
        + '<div class="vt-bau vt-buch" id="vtBau"></div>'
        + '<div class="vt-teile" id="vtTeile">' + buchst.map(function (c) {
          return '<button class="vt-teil vt-bt" onclick="__vtBau(this)">' + esc(c) + '</button>';
        }).join('') + '</div>'
        + '<button class="vt-pruefen" onclick="__vtBuchPruefen()">Prüfen</button>';

    } else if (typ === 'satzbau') {
      var teile = mische(v.bsp.replace(/\s+/g, ' ').trim().split(' '));
      h += (trSatz(v) ? '<p class="vt-unter' + rtlK() + '">' + esc(trSatz(v)) + '</p>' : '')
        + '<div class="vt-bau" id="vtBau"></div>'
        + '<div class="vt-teile" id="vtTeile">' + teile.map(function (t) {
          return '<button class="vt-teil" onclick="__vtBau(this)">' + esc(t) + '</button>';
        }).join('') + '</div>'
        + '<button class="vt-pruefen" onclick="__vtSatzPruefen()">Prüfen</button>';
    }

    k.innerHTML = h;
    var inp = document.getElementById('vtIn');
    if (inp) { inp.focus(); inp.addEventListener('keydown', function (e) { if (e.key === 'Enter') window.__vtTippen(); }); }
    var b = q('#vtVoll .vt-buehne'); if (b) b.scrollTop = 0;
  }

  /* ================= Spiel: Paare finden ================= */
  var PAAR = { offen: null, fertig: 0, gesamt: 0, fehler: 0 };
  function zeichnePaare(a) {
    voll(); kopf();
    var f = document.getElementById('vtFuss'); f.className = 'vt-fuss'; f.innerHTML = '';
    PAAR = { offen: null, fertig: 0, gesamt: a.woerter.length, fehler: 0, woerter: a.woerter };
    var links = mische(a.woerter.slice());
    var rechts = mische(a.woerter.slice());
    document.getElementById('vtKarte').innerHTML =
      '<div class="vt-etikett" style="--tf:#C7457F"><span class="ic">🎴</span>Finde die Paare</div>'
      + '<p class="vt-unter">Tippe ein deutsches Wort an und dann seine Übersetzung.</p>'
      + '<div class="vt-paare">'
      + '<div class="vt-sp">' + links.map(function (v) {
        return '<button class="vt-pk" data-id="' + esc(v.id) + '" data-seite="l" onclick="__vtPaar(this)">'
          + (v.em ? '<span class="e">' + v.em + '</span>' : '') + '<span>' + esc(v.de) + '</span></button>';
      }).join('') + '</div>'
      + '<div class="vt-sp">' + rechts.map(function (v) {
        return '<button class="vt-pk' + rtlK() + '" data-id="' + esc(v.id) + '" data-seite="r" onclick="__vtPaar(this)">'
          + '<span>' + esc(trWort(v)) + '</span></button>';
      }).join('') + '</div>'
      + '</div>';
    var b = q('#vtVoll .vt-buehne'); if (b) b.scrollTop = 0;
  }
  window.__vtPaar = function (el) {
    if (el.classList.contains('fertig')) return;
    var offen = PAAR.offen;
    if (!offen) {
      qa('.vt-pk.gewaehlt').forEach(function (x) { x.classList.remove('gewaehlt'); });
      el.classList.add('gewaehlt'); PAAR.offen = el; return;
    }
    if (offen === el) { el.classList.remove('gewaehlt'); PAAR.offen = null; return; }
    if (offen.dataset.seite === el.dataset.seite) {
      offen.classList.remove('gewaehlt'); el.classList.add('gewaehlt'); PAAR.offen = el; return;
    }
    var treffer = offen.dataset.id === el.dataset.id;
    if (treffer) {
      offen.classList.remove('gewaehlt'); offen.classList.add('fertig');
      el.classList.add('fertig');
      PAAR.offen = null; PAAR.fertig++;
      var wort = null;
      PAAR.woerter.forEach(function (v) { if (v.id === el.dataset.id) wort = v; });
      if (wort) sprich(wort.de, 0.95);
      if (PAAR.fertig >= PAAR.gesamt) setTimeout(paareFertig, 420);
    } else {
      PAAR.fehler++;
      var a1 = offen, b1 = el;
      a1.classList.add('daneben'); b1.classList.add('daneben');
      setTimeout(function () {
        a1.classList.remove('daneben', 'gewaehlt'); b1.classList.remove('daneben');
      }, 480);
      PAAR.offen = null;
    }
  };
  function paareFertig() {
    var f = document.getElementById('vtFuss');
    var gut = PAAR.fehler === 0;
    f.className = 'vt-fuss an ' + (gut ? 'gut' : 'schlecht');
    f.innerHTML = '<div class="vt-fuss-in"><div class="vt-fuss-tx">'
      + '<b>' + (gut ? '<span>🎴</span>Alle Paare auf Anhieb!' : '<span>🎴</span>Geschafft — mit ' + PAAR.fehler + ' Fehlversuch' + (PAAR.fehler === 1 ? '' : 'en')) + '</b>'
      + '<div class="lsg">' + PAAR.gesamt + ' Wörter zugeordnet.</div></div>'
      + '<button class="vt-weiter" onclick="__vtAntwort()">Weiter →</button></div>';
  }

  /* ================= Antworten ================= */
  function normal(s) {
    return String(s || '').toLowerCase().trim().replace(/\s+/g, ' ').replace(/[.,!?;:]/g, '');
  }
  window.__vtWahl = function (el, richtig) {
    if (GEPRUEFT) return; GEPRUEFT = true;
    qa('#vtKarte .vt-o').forEach(function (b) {
      b.disabled = true;
      if (b !== el && (b.getAttribute('onclick') || '').indexOf('true') > -1) b.classList.add('richtig');
    });
    el.classList.add(richtig ? 'richtig' : 'falsch');
    rueck(richtig);
  };
  window.__vtTippen = function () {
    if (GEPRUEFT) return;
    var v = RUNDE[POS].v, inp = document.getElementById('vtIn');
    if (!inp) return;
    var ist = normal(inp.value); if (!ist) { inp.focus(); return; }
    GEPRUEFT = true;
    var richtig = (ist === normal(v.de) || ist === normal(v.wort));
    inp.classList.add(richtig ? 'richtig' : 'falsch'); inp.disabled = true;
    rueck(richtig);
  };
  window.__vtBau = function (el) {
    var bau = document.getElementById('vtBau');
    if (el.parentNode.id === 'vtTeile') bau.appendChild(el);
    else document.getElementById('vtTeile').appendChild(el);
  };
  window.__vtBuchPruefen = function () {
    if (GEPRUEFT) return; GEPRUEFT = true;
    var v = RUNDE[POS].v, bau = document.getElementById('vtBau');
    var ist = qa('#vtBau .vt-teil').map(function (b) { return b.textContent; }).join('');
    var richtig = normal(ist) === normal(v.wort || v.de);
    bau.style.borderColor = richtig ? '#1B9BC0' : '#E05B5B';
    bau.style.background = richtig ? '#E9F9F5' : '#FDEFEF';
    rueck(richtig);
  };
  window.__vtSatzPruefen = function () {
    if (GEPRUEFT) return; GEPRUEFT = true;
    var v = RUNDE[POS].v, bau = document.getElementById('vtBau');
    var ist = qa('#vtBau .vt-teil').map(function (b) { return b.textContent; }).join(' ');
    var richtig = normal(ist) === normal(v.bsp);
    bau.style.borderColor = richtig ? '#1B9BC0' : '#E05B5B';
    bau.style.background = richtig ? '#E9F9F5' : '#FDEFEF';
    rueck(richtig);
  };
  window.__vtWeiterNeu = function () { weiter(); };

  function naechsterAbstand(stufe) {
    var t = [0, 1, 3, 7, 16, 35, 75][Math.min(stufe, 6)];
    if (t <= 0) return 'gleich noch einmal';
    if (t === 1) return 'morgen wieder';
    if (t < 30) return 'in ' + t + ' Tagen wieder';
    return 'in ' + Math.round(t / 30) + ' Monaten wieder';
  }

  function rueck(richtig) {
    var a = RUNDE[POS], v = a.v;
    if (!richtig) SERIE[v.id] = true;                 // Fehler in der Serie merken
    if (a.letzte) ERG.push({ v: v, richtig: !SERIE[v.id] });
    qa('#vtKarte .vt-pruefen').forEach(function (b) { b.style.display = 'none'; });
    qa('#vtTeile .vt-teil, #vtBau .vt-teil').forEach(function (b) { b.style.pointerEvents = 'none'; b.style.opacity = '.7'; });

    var st = (BEKANNT[v.id] && BEKANNT[v.id].stufe) || 0;
    var zaehlt = !SERIE[v.id] && richtig;
    var neuStufe = zaehlt ? Math.min(st + 1, 6) : (st <= 1 ? 0 : 1);
    var ue = trWort(v);
    var f = document.getElementById('vtFuss');
    f.className = 'vt-fuss an ' + (richtig ? 'gut' : 'schlecht');
    f.innerHTML = '<div class="vt-fuss-in"><div class="vt-fuss-tx">'
      + '<b>' + (richtig ? '<span>✅</span>' + zufall(['Richtig!', 'Sitzt!', 'Genau so.', 'Sehr gut!', 'Perfekt.'])
        : '<span>💡</span>Noch nicht — so ist es richtig') + '</b>'
      + '<div class="lsg"><em>' + artikelChip(v.artikel) + esc(v.wort || v.de) + '</em>'
      + (ue ? ' — ' + esc(ue) : '') + ' ' + lauts(v.de, 1) + '</div>'
      + (v.bsp ? '<div class="bspz">' + satzMarkiert(v.bsp, v.wort || v.de, richtig ? 'gruen' : 'rot')
        + (trSatz(v) ? '<i class="' + (rtl() ? 'vt-rtl' : '') + '">' + esc(trSatz(v)) + '</i>' : '') + '</div>' : '')
      + (a.letzte ? '<div class="wieder">🔁 Dieses Wort kommt ' + naechsterAbstand(neuStufe) + '.</div>'
                  : '<div class="wieder">➡️ Gleich noch eine Übung zu diesem Wort.</div>')
      + '</div>'
      + '<button class="vt-weiter' + (richtig ? '' : ' rot') + '" onclick="__vtAntwort()">'
      + (POS + 1 >= RUNDE.length ? 'Runde abschließen' : 'Weiter') + ' →</button></div>';
  }

  // Lernstand nur am Ende einer Wortserie schreiben
  async function buchen(v, richtig) {
    try {
      var c = sb();
      if (c && v) {
        var r = await c.rpc('vok_antwort', { p_vok_id: v.id, p_richtig: !!richtig, p_quelle: v.quelle || 'kurs' });
        if (r && r.data && r.data[0]) {
          BEKANNT[v.id] = { stufe: r.data[0].stufe, faellig: r.data[0].faellig_am, falsch: (BEKANNT[v.id] || {}).falsch || 0 };
        }
      }
    } catch (e) {}
    STAND.heute = (STAND.heute || 0) + 1;
  }
  function weiter() {
    POS++;
    if (POS >= RUNDE.length) abschluss(); else zeichne();
  }
  window.__vtAntwort = async function () {
    var a = RUNDE[POS];
    if (a && a.letzte && a.v) {
      var ok = !SERIE[a.v.id];
      await buchen(a.v, ok);
      // Nicht gekonnt? Dann kommt das Wort am Ende der Runde noch einmal.
      if (!ok && !a.wieder && RUNDE.length < 42) {
        SERIE[a.v.id] = false;
        RUNDE.push({ v: a.v, typ: leichterTyp(a.v), letzte: true, wieder: true });
      }
    }
    weiter();
  };

  window.__vtAbbruch = function () {
    LAEUFT = false; vollZu();
    ladeStand().then(function () { window.renderVokabeln(); });
  };

  /* ================= Abschluss ================= */
  function konfetti() {
    var farben = ['#1B9BC0', '#2CC0AE', '#E0A020', '#C7457F', '#3E5FCC', '#8B4FC7'];
    var d = document.createElement('div'); d.className = 'vt-konfetti';
    var h = '';
    for (var i = 0; i < 70; i++) {
      h += '<span class="vt-konf" style="left:' + (Math.random() * 100) + '%;top:-24px;background:'
        + zufall(farben) + ';animation-duration:' + (2.2 + Math.random() * 2) + 's;animation-delay:'
        + (Math.random() * 0.7) + 's"></span>';
    }
    d.innerHTML = h;
    var v = document.getElementById('vtVoll'); if (v) v.appendChild(d);
    setTimeout(function () { d.remove(); }, 5200);
  }

  function abschluss() {
    LAEUFT = false;
    voll();
    q('#vtVoll .vt-top').innerHTML = '<button class="vt-x" onclick="__vtAbbruch()">×</button>'
      + '<div class="vt-bar"><i style="width:100%"></i></div><div class="n">fertig</div>';
    var f = document.getElementById('vtFuss'); f.className = 'vt-fuss'; f.innerHTML = '';

    var gut = ERG.filter(function (e) { return e.richtig; }).length;
    var schlecht = ERG.length - gut;
    var quote = ERG.length ? Math.round((gut / ERG.length) * 100) : 0;
    var kopfz = quote >= 90 ? ['🏆', 'Stark!'] : quote >= 70 ? ['🎉', 'Gut gemacht!'] : ['💪', 'Weiter so!'];

    var liste = ERG.map(function (e) {
      return '<div class="z">' + bildEmoji(e.v, 'mini')
        + '<div class="tx"><b>' + esc(e.v.de) + '</b><span>' + esc(trWort(e.v) || e.v.thema || '') + '</span></div>'
        + '<span class="st ' + (e.richtig ? 'g' : 's') + '">' + (e.richtig ? 'sitzt' : 'nochmal') + '</span></div>';
    }).join('');

    document.getElementById('vtKarte').innerHTML = '<div class="vt-ende">'
      + '<div class="gr">' + kopfz[0] + '</div><h2>' + kopfz[1] + '</h2>'
      + '<p>' + (schlecht === 0
        ? 'Alles richtig. Die Wörter kommen genau dann zurück, wenn es Zeit zum Auffrischen ist.'
        : schlecht + (schlecht === 1
          ? ' Wort siehst du bald wieder — genau dann, wenn du es sonst vergessen würdest.'
          : ' Wörter siehst du bald wieder — genau dann, wenn du sie sonst vergessen würdest.'))
      + '</p>'
      + '<div class="vt-ergz">'
      + '<div><b>' + gut + '</b><span>richtig</span></div>'
      + '<div><b>' + schlecht + '</b><span>zum Üben</span></div>'
      + '<div><b>' + quote + '%</b><span>Trefferquote</span></div></div>'
      + '<div class="vt-liste">' + liste + '</div>'
      + '<button class="vt-los" style="background:linear-gradient(135deg,#14708B,#1B9BC0);color:#fff" onclick="__vtStart()">Noch eine Runde →</button>'
      + '<div style="margin-top:14px"><button class="vt-langsam" style="display:inline-block" onclick="__vtAbbruch()">Für heute reicht\'s</button></div>'
      + '</div>';
    if (quote >= 70) konfetti();
    var b = q('#vtVoll .vt-buehne'); if (b) b.scrollTop = 0;
  }

  /* ================= Steuerung ================= */
  window.__vtStart = function () {
    SERIE = {}; RUNDE = baueRunde(STAND.ziel || 15); POS = 0; ERG = []; LAEUFT = true;
    if (!RUNDE.length) {
      vollZu();
      document.getElementById('v-vokabeln').innerHTML =
        '<div class="vt-leer">Im Moment ist nichts fällig und es gibt keine neuen Wörter mehr. '
        + 'Öffne eine Lektion in der Kursbibliothek — die Wörter daraus landen automatisch hier.</div>';
      return;
    }
    zeichne();
  };
  window.__vtZiel = async function (z) {
    try { var c = sb(); if (c) await c.rpc('vok_ziel', { p_ziel: z }); } catch (e) {}
    STAND.ziel = z; window.renderVokabeln();
  };

  async function ladeStand() {
    var c = sb(); if (!c) return;
    try { var a = await c.rpc('vok_stand'); STAND = (a && a.data) || {}; } catch (e) { STAND = {}; }
    try {
      var b = await c.rpc('vok_bekannt');
      BEKANNT = {};
      ((b && b.data) || []).forEach(function (r) { BEKANNT[r.vok_id] = { stufe: r.stufe, gelernt: r.gelernt, falsch: 0 }; });
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
      var s = document.createElement('script'); s.src = pfad;
      s.onload = function () { ok(true); }; s.onerror = function () { ok(false); };
      document.head.appendChild(s);
    });
  }
  var poolLauf = null;
  function ladePool() {
    if (window.VOK_POOL && window.VOK_POOL.length) return Promise.resolve(true);
    if (poolLauf) return poolLauf;
    poolLauf = ladeSkript('vokabeln-pool.js');
    return poolLauf;
  }
  function ladeSprache() {
    var l = l1(); if (!l) return Promise.resolve();
    if ((window.VOK_TR || {})[l]) return Promise.resolve();
    return ladeSkript('vok-tr/' + l + '.js');
  }

  /* ================= Einstieg ================= */
  window.renderVokabeln = async function () {
    stil();
    var ziel = document.getElementById('v-vokabeln');
    if (!ziel) return;
    if (!(window.VOK_POOL && window.VOK_POOL.length)) {
      ziel.innerHTML = '<div class="vt-leer">Deine Wörter werden geladen …</div>';
      await ladePool();
    }
    POOL = window.VOK_POOL || [];
    if (!POOL.length) {
      ziel.innerHTML = '<div class="vt-leer">Die Wortliste konnte nicht geladen werden. Lade die Seite bitte neu.</div>';
      return;
    }
    await ladeSprache();
    await ladeStand();
    if (LAEUFT) return;
    ziel.innerHTML = startbild();
  };

  window.VokTrainer = { neu: function () { return window.renderVokabeln(); } };
})();
