/* ============================================================
   dialog-stufen.js — drei Stufen pro Gespräch

   Julia, 23.10.2026: "Nicht einfach frei, sondern es müssten auch
   Übungsdialoge geben, wo man das mitlesen kann — zumindest auf
   dem A1-B1 Niveau."

   Bisher gab es pro Situation nur eine Stufe: Amanda sagt etwas,
   du antwortest frei. Für A1 und A2 ist das ein Sprung ins kalte
   Wasser — man soll produzieren, bevor man das Gespräch je ganz
   gesehen hat.

   Jetzt sind es drei:

     1. Mitlesen     Das ganze Gespräch steht da, beide Seiten.
                     Jede Zeile lässt sich antippen und anhören,
                     oder man lässt alles am Stück vorlesen.
     2. Mitsprechen  Dasselbe Gespräch, aber du übernimmst eine
                     Rolle. Amandas Zeilen werden gesprochen,
                     deine stehen da und du liest sie laut vor.
     3. Frei sprechen  Genau wie bisher — Hinweise statt Text.

   WOHER DER TEXT KOMMT: aus nichts Neuem. In jedem Schritt steht
   schon beides — was Amanda sagt (`amanda`) und eine Musterantwort
   (`beispiel`). Zusammengelesen ergibt das den vollständigen
   Dialog. Alle 130 Situationen haben in jedem Schritt eine
   Musterantwort, keine einzige Lücke.

   EINBAU: eine Zeile in konto.html, NACH lernen.js. Die Datei
   fasst lernen.js nicht an, sondern legt sich nur davor: Stufe 3
   ruft die alte Funktion unverändert auf. Nimmt man die Zeile
   heraus, ist alles wie vorher.
   ============================================================ */
(function () {
  'use strict';
  if (window.DLGSTUFEN) return;

  /* ---------- Werkzeug ---------- */
  function E(s){ return String(s==null?'':s)
    .replace(/[&<>"]/g,function(c){ return ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]); }); }
  function el(id){ return document.getElementById(id); }

  /* Dieselbe Stimme wie im freien Gespräch: wenn die Plattform eine
     eigene hat, die; sonst die des Browsers. */
  function sprich(text, fertig){
    if (!text) { if (fertig) fertig(); return; }
    try {
      if (window.sagen) return window.sagen(text, { rolle:'amanda', fertig:fertig });
      if (!window.speechSynthesis) { if (fertig) fertig(); return; }
      speechSynthesis.cancel();
      var u = new SpeechSynthesisUtterance(text);
      u.lang = 'de-DE'; u.rate = .95;
      if (fertig) u.onend = fertig;
      speechSynthesis.speak(u);
    } catch (e) { if (fertig) fertig(); }
  }
  function stille(){
    try {
      if (window.stimmeStopp) return window.stimmeStopp();
      if (window.speechSynthesis) speechSynthesis.cancel();
    } catch (e) {}
  }

  /* ---------- Was schon geschafft ist ----------
     Eigener Schlüssel: der alte ("lern") merkt sich das freie
     Gespräch, und das soll nicht als erledigt gelten, nur weil
     jemand mitgelesen hat. */
  function stand(){
    try { return JSON.parse(localStorage.getItem('dlgstufen') || '{}') || {}; }
    catch (e) { return {}; }
  }
  function merken(id, stufe){
    try {
      var s = stand(); (s[id] || (s[id] = {}))[stufe] = 1;
      localStorage.setItem('dlgstufen', JSON.stringify(s));
    } catch (e) {}
  }
  function geschafft(id, stufe){ var s = stand()[id]; return !!(s && s[stufe]); }

  /* ---------- Das Gespräch als fertiger Text ----------
     Amandas Zeile, dann die Musterantwort — abwechselnd. */
  function skript(d){
    var z = [];
    (d.schritte || []).forEach(function (s, i) {
      if (s.amanda)  z.push({ wer:'am', text:String(s.amanda), i:i });
      if (s.beispiel) z.push({ wer:'du', text:String(s.beispiel), i:i, hinweis:s.hinweis||'' });
    });
    return z;
  }

  /* ---------- Stil ---------- */
  function stil(){
    if (el('dsStil')) return;
    var st = document.createElement('style');
    st.id = 'dsStil';
    st.textContent = [
'.ds-ov{position:fixed;inset:0;z-index:10050;background:rgba(20,24,27,.55);',
'  display:flex;align-items:flex-end;justify-content:center;',
'  font-family:Inter,system-ui,-apple-system,sans-serif}',
'.ds-ov.auf{display:flex}',
'@media(min-width:760px){.ds-ov{align-items:center;padding:28px}}',
'.ds-box{background:#FFFDF9;width:100%;max-width:640px;max-height:100%;min-height:62vh;',
'  border-radius:20px 20px 0 0;display:flex;flex-direction:column;overflow:hidden;',
'  box-shadow:0 -10px 40px rgba(20,24,27,.26)}',
'@media(min-width:760px){.ds-box{border-radius:20px;max-height:88vh;min-height:0}}',
'.ds-kopf{flex:0 0 auto;display:flex;align-items:center;gap:10px;',
'  padding:13px 12px 12px 16px;border-bottom:1px solid #F1ECE2;background:#fff;position:relative}',
'.ds-kopf::before{content:"";position:absolute;left:0;right:0;top:0;height:3px;',
'  background:linear-gradient(90deg,#14181B 0 25%,#D42A21 25% 50%,#FFE100 50% 75%,#10627A 75% 100%)}',
'.ds-kopf .em{font-size:22px;line-height:1}',
'.ds-kopf .tx{min-width:0;flex:1}',
'.ds-kopf b{display:block;font-family:"Space Grotesk",Inter,sans-serif;font-size:16px;',
'  color:#14181B;line-height:1.25;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}',
'.ds-kopf .lvl{display:block;font-size:11.5px;color:#8A939A;margin-top:1px}',
'.ds-x{border:none;background:#F3EFE7;color:#5C6368;width:34px;height:34px;border-radius:50%;',
'  font-size:15px;cursor:pointer;flex:none;line-height:1}',
'.ds-koerper{flex:1 1 auto;overflow-y:auto;min-height:0;',
'  padding:16px 16px calc(18px + env(safe-area-inset-bottom));',
'  -webkit-overflow-scrolling:touch;overflow-anchor:none}',
'.ds-fuss{flex:0 0 auto;padding:10px 14px calc(12px + env(safe-area-inset-bottom));',
'  border-top:1px solid #F1ECE2;background:#fff;display:flex;gap:9px;align-items:center}',

/* Startkarte */
'.ds-ort{background:#F6F1E6;border-radius:13px;padding:11px 13px;font-size:13.5px;',
'  color:#5C5347;line-height:1.5;margin-bottom:16px}',
'.ds-stufe{display:flex;gap:12px;align-items:flex-start;width:100%;text-align:left;',
'  background:#fff;border:1px solid #EFEAE0;border-radius:15px;padding:13px 14px;',
'  margin-bottom:10px;cursor:pointer;font-family:inherit;',
'  transition:border-color .15s ease,box-shadow .15s ease}',
'.ds-stufe:active{border-color:#39CCE3;box-shadow:0 0 0 3px rgba(57,204,227,.16)}',
'.ds-nr{flex:0 0 30px;width:30px;height:30px;border-radius:50%;background:#E6F8FC;color:#10627A;',
'  font-weight:800;font-size:13px;display:flex;align-items:center;justify-content:center}',
'.ds-stufe.fertig .ds-nr{background:#10627A;color:#fff}',
'.ds-stufe > span:last-child{min-width:0;flex:1}',
'.ds-stufe .t{display:block;font-weight:700;font-size:14.5px;color:#14181B;line-height:1.3}',
'.ds-stufe .u{display:block;font-size:12.5px;color:#7A838A;line-height:1.45;margin-top:3px}',

/* Gesprächszeilen */
'.ds-z{display:flex;gap:9px;margin:0 0 11px;align-items:flex-end}',
'.ds-z.du{flex-direction:row-reverse}',
'.ds-av{flex:0 0 28px;width:28px;height:28px;border-radius:50%;background:#10627A;color:#fff;',
'  font-size:13px;display:flex;align-items:center;justify-content:center;overflow:hidden}',
'.ds-z.du .ds-av{background:#10627A;color:#fff;font-size:10.5px;font-weight:800;letter-spacing:.2px}',
'.ds-av img{width:100%;height:100%;object-fit:cover}',
'.ds-bb{max-width:78%;background:#fff;border:1px solid #EFEAE0;border-radius:15px 15px 15px 5px;',
'  padding:9px 12px;font-size:15px;line-height:1.5;color:#14181B;cursor:pointer;',
'  transition:background .15s ease,border-color .15s ease}',
'.ds-z.du .ds-bb{background:#E9F6FA;border-color:#CDEAF2;border-radius:15px 15px 5px 15px}',
'.ds-z.jetzt .ds-bb{border-color:#39CCE3;box-shadow:0 0 0 3px rgba(57,204,227,.2)}',
'.ds-z.wartet .ds-bb{color:transparent;background:#F2EEE6;border-style:dashed;user-select:none}',
'.ds-rolle{font-size:10.5px;font-weight:700;letter-spacing:.3px;text-transform:uppercase;',
'  color:#9AA2A8;margin:0 0 3px}',
'.ds-tipp{font-size:12.5px;color:#8A7F6C;background:#FDF7E6;border-radius:10px;',
'  padding:7px 11px;margin:0 0 11px 37px;line-height:1.45}',
'.ds-z.du + .ds-tipp{margin:0 37px 11px 0;text-align:right}',

/* Knöpfe */
'.ds-k{border:none;border-radius:999px;font-family:inherit;font-weight:700;font-size:14px;',
'  padding:11px 18px;cursor:pointer;line-height:1.2}',
'.ds-k.voll{flex:1 1 auto;background:linear-gradient(145deg,#39CCE3,#10627A);color:#fff;',
'  box-shadow:0 5px 14px rgba(16,98,122,.3)}',
'.ds-k.still{background:#F3EFE7;color:#4A5257;flex:0 0 auto}',
'.ds-k:disabled{opacity:.45;cursor:default;box-shadow:none}',
'.ds-fertig{text-align:center;padding:18px 6px 4px}',
'.ds-fertig .h{font-family:"Space Grotesk",Inter,sans-serif;font-size:17px;color:#14181B;',
'  font-weight:700;margin-bottom:5px}',
'.ds-fertig .p{font-size:13.5px;color:#7A838A;line-height:1.5}',
'@media(prefers-reduced-motion:reduce){.ds-stufe,.ds-bb,.ds-k{transition:none}}'
    ].join('\n');
    document.head.appendChild(st);
  }

  /* ---------- Hülle ---------- */
  var G = null;   // {d, skript, stufe, pos, laeuft}

  function ovBauen(){
    if (el('dsOv')) return;
    var o = document.createElement('div');
    o.className = 'ds-ov'; o.id = 'dsOv';
    o.innerHTML =
      '<div class="ds-box" role="dialog" aria-modal="true" aria-labelledby="dsTitel">' +
        '<header class="ds-kopf"><span class="em" id="dsEm">💬</span>' +
          '<span class="tx"><b id="dsTitel"></b><span class="lvl" id="dsLvl"></span></span>' +
          '<button class="ds-x" id="dsX" type="button" aria-label="Schließen">✕</button></header>' +
        '<div class="ds-koerper" id="dsKoerper"></div>' +
        '<footer class="ds-fuss" id="dsFuss"></footer>' +
      '</div>';
    document.body.appendChild(o);
    o.addEventListener('click', function (ev) { if (ev.target === o) zu(); });
    el('dsX').addEventListener('click', zu);
    document.addEventListener('keydown', function (ev) {
      if (ev.key === 'Escape' && el('dsOv') && el('dsOv').classList.contains('auf')) zu();
    });
  }

  function auf(d){
    stil(); ovBauen();
    G = { d:d, skript:skript(d), stufe:null, pos:0, laeuft:false };
    el('dsEm').textContent = d.em || '💬';
    el('dsTitel').textContent = d.titel || 'Gespräch';
    el('dsLvl').textContent = (d.lvl || '') + (d.dauer ? ' · ' + d.dauer : '');
    el('dsOv').classList.add('auf');
    document.body.style.overflow = 'hidden';
    wahl();
  }

  function zu(){
    stille();
    var o = el('dsOv'); if (o) o.classList.remove('auf');
    document.body.style.overflow = '';
    G = null;
  }

  /* ---------- Stufe 0: die Wahl ---------- */
  function wahl(){
    if (!G) return;
    var d = G.d, id = d.id;
    var stufen = [
      ['lesen', 'Mitlesen', 'Das ganze Gespräch steht da — beide Seiten. Tipp eine Zeile an, um sie zu hören.'],
      ['mit',   'Mitsprechen', 'Du übernimmst eine Rolle. Deine Sätze stehen noch da — lies sie laut vor.'],
      ['frei',  'Frei sprechen', 'Nur noch Hinweise, kein Text. Antworte mit eigenen Worten.']
    ];
    el('dsKoerper').innerHTML =
      (d.ort ? '<div class="ds-ort">' + E(d.ort) + '</div>' : '') +
      stufen.map(function (s, i) {
        var fertig = s[0] !== 'frei' && geschafft(id, s[0]);
        return '<button class="ds-stufe' + (fertig ? ' fertig' : '') + '" type="button" data-stufe="' + s[0] + '">' +
          '<span class="ds-nr">' + (fertig ? '✓' : (i + 1)) + '</span>' +
          '<span><span class="t">' + E(s[1]) + '</span><span class="u">' + E(s[2]) + '</span></span></button>';
      }).join('');
    el('dsFuss').innerHTML = '';
    el('dsFuss').style.display = 'none';
    el('dsKoerper').onclick = function (ev) {
      var b = ev.target.closest && ev.target.closest('[data-stufe]');
      if (!b) return;
      starte(b.getAttribute('data-stufe'));
    };
  }

  function starte(stufe){
    if (!G) return;
    if (stufe === 'frei') { var d = G.d; zu(); return weiterAnAlt(d); }
    G.stufe = stufe; G.pos = 0; G.laeuft = false;
    el('dsFuss').style.display = '';
    if (stufe === 'lesen') return lesen();
    return mitsprechen();
  }

  /* ---------- Zeile zeichnen ---------- */
  function zeileHtml(z, i, verdeckt){
    var du = z.wer === 'du';
    var av = du ? 'Du' : (G.d.em || 'A');
    return '<div class="ds-z ' + (du ? 'du' : 'am') + (verdeckt ? ' wartet' : '') + '" data-z="' + i + '">' +
        '<span class="ds-av">' + (du ? 'Du' : E(av)) + '</span>' +
        '<span class="ds-bb">' + E(z.text) + '</span>' +
      '</div>';
  }

  /* ---------- Stufe 1: Mitlesen ---------- */
  function lesen(){
    if (!G) return;
    var k = el('dsKoerper');
    k.innerHTML =
      '<div class="ds-rolle">Das ganze Gespräch</div>' +
      G.skript.map(function (z, i) { return zeileHtml(z, i, false); }).join('');
    k.onclick = function (ev) {
      var r = ev.target.closest && ev.target.closest('[data-z]');
      if (!r) return;
      var z = G.skript[+r.getAttribute('data-z')]; if (!z) return;
      halt();
      hervor(+r.getAttribute('data-z'));
      sprich(z.text, function () { hervor(-1); });
    };
    el('dsFuss').innerHTML =
      '<button class="ds-k voll" id="dsPlay" type="button">▶ Alles vorlesen</button>' +
      '<button class="ds-k still" id="dsZurueck" type="button">Zurück</button>';
    el('dsZurueck').onclick = function () { halt(); wahl(); };
    el('dsPlay').onclick = function () { G.laeuft ? halt() : vorlesen(0); };
    merken(G.d.id, 'lesen');
  }

  function hervor(i){
    var k = el('dsKoerper'); if (!k) return;
    Array.prototype.forEach.call(k.querySelectorAll('.ds-z'), function (r) { r.classList.remove('jetzt'); });
    if (i < 0) return;
    var r = k.querySelector('[data-z="' + i + '"]');
    if (r) { r.classList.add('jetzt'); r.scrollIntoView({ block:'nearest' }); }
  }

  function halt(){
    if (!G) return;
    G.laeuft = false; stille(); hervor(-1);
    var p = el('dsPlay'); if (p) p.innerHTML = '▶ Alles vorlesen';
  }

  function vorlesen(i){
    if (!G) return;
    if (i >= G.skript.length) { halt(); return; }
    G.laeuft = true;
    var p = el('dsPlay'); if (p) p.innerHTML = '⏸ Anhalten';
    hervor(i);
    sprich(G.skript[i].text, function () {
      if (!G || !G.laeuft) return;
      setTimeout(function () { if (G && G.laeuft) vorlesen(i + 1); }, 320);
    });
  }

  /* ---------- Stufe 2: Mitsprechen ---------- */
  function mitsprechen(){
    if (!G) return;
    el('dsKoerper').innerHTML = '<div class="ds-rolle">Du bist dran, wenn die Blase blau wird</div>';
    el('dsKoerper').onclick = null;
    el('dsFuss').innerHTML =
      '<button class="ds-k voll" id="dsWeiter" type="button">Los geht’s</button>' +
      '<button class="ds-k still" id="dsZurueck" type="button">Zurück</button>';
    el('dsZurueck').onclick = function () { halt(); wahl(); };
    el('dsWeiter').onclick = schritt;
    G.pos = 0;
  }

  function anhaengen(html){
    var k = el('dsKoerper'); if (!k) return null;
    k.insertAdjacentHTML('beforeend', html);
    var l = k.lastElementChild;
    k.scrollTop = k.scrollHeight;
    return l;
  }

  function schritt(){
    if (!G) return;
    var w = el('dsWeiter');
    if (G.pos >= G.skript.length) return mitFertig();
    var z = G.skript[G.pos], i = G.pos;
    G.pos++;

    if (z.wer === 'am') {
      /* Amanda spricht — der Text steht trotzdem da, damit man mitliest. */
      var r = anhaengen(zeileHtml(z, i, false));
      if (r) r.classList.add('jetzt');
      if (w) { w.disabled = true; w.innerHTML = '…'; }
      sprich(z.text, function () {
        if (!G) return;
        if (r) r.classList.remove('jetzt');
        /* Steht als Nächstes deine Zeile, zeigen wir sie gleich mit an. */
        if (G.skript[G.pos] && G.skript[G.pos].wer === 'du') return schritt();
        if (w) { w.disabled = false; w.innerHTML = 'Weiter'; }
      });
      return;
    }

    /* Deine Zeile: hinstellen, laut vorlesen lassen, dann weiter. */
    if (z.hinweis) anhaengen('<div class="ds-tipp">' + E(z.hinweis) + '</div>');
    var rd = anhaengen(zeileHtml(z, i, false));
    if (rd) rd.classList.add('jetzt');
    if (w) {
      w.disabled = false;
      w.innerHTML = 'Gelesen — weiter';
      w.onclick = function () {
        if (rd) rd.classList.remove('jetzt');
        w.onclick = schritt;
        schritt();
      };
    }
  }

  function mitFertig(){
    if (!G) return;
    merken(G.d.id, 'mit');
    anhaengen('<div class="ds-fertig"><div class="h">Durch — gut gemacht.</div>' +
      '<div class="p">Jetzt dasselbe Gespräch ohne Text: Amanda fragt, du antwortest mit eigenen Worten.</div></div>');
    var w = el('dsWeiter');
    if (w) { w.disabled = false; w.innerHTML = 'Frei sprechen'; w.onclick = function () { starte('frei'); }; }
  }

  /* ---------- Stufe 3: das alte Gespräch, unverändert ---------- */
  var alt = null;
  function weiterAnAlt(d){ if (alt) alt(d); }

  function einhaengen(){
    if (typeof window.lernDialogDaten !== 'function') return false;
    if (window.lernDialogDaten.__stufen) return true;
    alt = window.lernDialogDaten;
    var neu = function (d) {
      if (!d || !d.schritte || !d.schritte.length) return alt(d);
      /* Hat ein Schritt keine Musterantwort, gäbe es keinen vollständigen
         Text zum Mitlesen — dann bleibt es beim freien Gespräch. */
      for (var i = 0; i < d.schritte.length; i++) {
        var b = d.schritte[i] && d.schritte[i].beispiel;
        if (!b || !String(b).trim()) return alt(d);
      }
      return auf(d);
    };
    neu.__stufen = true;
    window.lernDialogDaten = neu;
    return true;
  }

  if (!einhaengen()) {
    /* lernen.js ist noch nicht geladen — kurz warten, dann aufgeben. */
    var n = 0;
    var t = setInterval(function () {
      if (einhaengen() || ++n > 40) clearInterval(t);
    }, 250);
  }

  window.DLGSTUFEN = { auf:auf, zu:zu, skript:skript };
})();
