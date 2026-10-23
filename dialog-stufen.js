/* ============================================================
   dialog-stufen.js — drei Stufen pro Gespräch

   Julia, 23.10.2026: "Nicht einfach frei, sondern es müssten auch
   Übungsdialoge geben, wo man das mitlesen kann." Und danach:
   "Noch robuster, noch besser. Auch das Niveau anpassen und
   erweitern. Auch mal die Umgangssprache hinzufügen."

   Bisher gab es pro Situation nur eine Stufe: Amanda sagt etwas,
   du antwortest frei. Für A1 und A2 ist das ein Sprung ins kalte
   Wasser — man soll produzieren, bevor man das Gespräch je ganz
   gesehen hat.

   Jetzt sind es drei:

     1. Mitlesen     Das ganze Gespräch steht da, beide Seiten.
                     Jede Zeile antippen zum Hören, oder alles am
                     Stück vorlesen — normal oder langsam.
     2. Mitsprechen  Du übernimmst eine Rolle und kannst sie
                     tauschen. Die andere Seite wird gesprochen,
                     deine Zeile steht da und du liest sie laut.
     3. Frei sprechen  Genau wie bisher — Hinweise statt Text.

   WOHER DER TEXT KOMMT: aus nichts Neuem. In jedem Schritt steht
   schon beides — was Amanda sagt (`amanda`) und eine Musterantwort
   (`beispiel`). Zusammengelesen ergibt das den vollständigen
   Dialog.

   NEU UND FREIWILLIG — wer die Felder nicht hat, verliert nichts:
     klartext         Standarddeutsch zu Amandas Zeile
     beispielKlartext Standarddeutsch zur Musterantwort
     woerter          [{w:"platt", b:"müde"}] — kurze Worterklärungen
   Hat ein Schritt davon etwas, erscheint unter der Zeile ein
   Knopf „Klartext" und darunter die Worterklärungen. Genau das
   fehlt bei Umgangssprache: man liest „Joa, geht so" und weiß
   nicht, dass das „einigermaßen" heißt.

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

  /* ---------- Stimme ----------
     Zwei Fallen, die beide schon dafür gesorgt haben, dass
     Vorleseschleifen hängen bleiben: speechSynthesis meldet auf
     dem Handy manchmal nie `onend`, und eine fremde Stimme ruft
     den Rückruf vielleicht gar nicht. Deshalb läuft zu jedem
     Satz eine Reißleine mit, die nach der erwarteten Sprechdauer
     weitermacht. Jeder Rückruf feuert höchstens einmal. */
  var TEMPO = 1;           // 1 = normal, .72 = langsam
  var laufendeStimme = 0;  // Nummer der laufenden Ausgabe

  function sprich(text, fertig){
    var meine = ++laufendeStimme;
    var raus = false;
    function schluss(){
      if (raus || meine !== laufendeStimme) return;
      raus = true; if (fertig) fertig();
    }
    if (!text) { schluss(); return; }
    /* Reißleine: grob 80 ms je Zeichen bei normalem Tempo, plus Luft. */
    var dauer = Math.min(30000, 1400 + String(text).length * 80 / TEMPO);
    setTimeout(schluss, dauer);
    try {
      if (window.sagen) { window.sagen(text, { rolle:'amanda', tempo:TEMPO, fertig:schluss }); return; }
      if (!window.speechSynthesis) { schluss(); return; }
      speechSynthesis.cancel();
      var u = new SpeechSynthesisUtterance(text);
      u.lang = 'de-DE'; u.rate = .97 * TEMPO;
      u.onend = schluss; u.onerror = schluss;
      speechSynthesis.speak(u);
    } catch (e) { schluss(); }
  }
  function stille(){
    laufendeStimme++;   // alle laufenden Rückrufe verfallen
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
      if (s.amanda) z.push({ wer:'am', text:String(s.amanda), i:i,
        klar:s.klartext || '', woerter:null });
      if (s.beispiel) z.push({ wer:'du', text:String(s.beispiel), i:i,
        klar:s.beispielKlartext || '', hinweis:s.hinweis || '',
        woerter:(s.woerter && s.woerter.length) ? s.woerter : null });
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
'  display:none;align-items:flex-end;justify-content:center;',
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
'  border-top:1px solid #F1ECE2;background:#fff;display:flex;gap:9px;align-items:center;flex-wrap:wrap}',

/* Startkarte */
'.ds-ort{background:#F6F1E6;border-radius:13px;padding:11px 13px;font-size:13.5px;',
'  color:#5C5347;line-height:1.5;margin-bottom:14px}',
'.ds-umg{display:inline-flex;align-items:center;gap:6px;background:#FDF3D6;color:#7A6418;',
'  border-radius:999px;padding:5px 11px;font-size:12px;font-weight:700;margin-bottom:14px}',
'.ds-stufe{display:flex;gap:12px;align-items:flex-start;width:100%;text-align:left;',
'  background:#fff;border:1px solid #EFEAE0;border-radius:15px;padding:13px 14px;',
'  margin-bottom:10px;cursor:pointer;font-family:inherit;',
'  transition:border-color .15s ease,box-shadow .15s ease}',
'.ds-stufe:active{border-color:#39CCE3;box-shadow:0 0 0 3px rgba(57,204,227,.16)}',
'.ds-stufe > span:last-child{min-width:0;flex:1}',
'.ds-nr{flex:0 0 30px;width:30px;height:30px;border-radius:50%;background:#E6F8FC;color:#10627A;',
'  font-weight:800;font-size:13px;display:flex;align-items:center;justify-content:center}',
'.ds-stufe.fertig .ds-nr{background:#10627A;color:#fff}',
'.ds-stufe .t{display:block;font-weight:700;font-size:14.5px;color:#14181B;line-height:1.3}',
'.ds-stufe .u{display:block;font-size:12.5px;color:#7A838A;line-height:1.45;margin-top:3px}',

/* Gesprächszeilen */
'.ds-paar{margin:0 0 11px}',
'.ds-z{display:flex;gap:9px;align-items:flex-end}',
'.ds-z.du{flex-direction:row-reverse}',
'.ds-av{flex:0 0 28px;width:28px;height:28px;border-radius:50%;background:#10627A;color:#fff;',
'  font-size:13px;display:flex;align-items:center;justify-content:center;overflow:hidden}',
'.ds-z.du .ds-av{background:#10627A;color:#fff;font-size:10.5px;font-weight:800;letter-spacing:.2px}',
'.ds-bb{max-width:78%;background:#fff;border:1px solid #EFEAE0;border-radius:15px 15px 15px 5px;',
'  padding:9px 12px;font-size:15px;line-height:1.5;color:#14181B;cursor:pointer;',
'  transition:border-color .15s ease}',
'.ds-z.du .ds-bb{background:#E9F6FA;border-color:#CDEAF2;border-radius:15px 15px 5px 15px}',
'.ds-z.jetzt .ds-bb{border-color:#39CCE3;box-shadow:0 0 0 3px rgba(57,204,227,.2)}',
'.ds-rolle{font-size:10.5px;font-weight:700;letter-spacing:.3px;text-transform:uppercase;',
'  color:#9AA2A8;margin:0 0 8px}',
'.ds-tipp{font-size:12.5px;color:#8A7F6C;background:#FDF7E6;border-radius:10px;',
'  padding:7px 11px;margin:0 0 7px 37px;line-height:1.45}',
'.ds-paar.du .ds-tipp{margin:0 37px 7px 0;text-align:right}',

/* Klartext und Worterklärungen */
'.ds-klarK{display:inline-flex;align-items:center;gap:4px;border:none;background:#F3EFE7;',
'  color:#6B7278;border-radius:999px;padding:3px 10px;font-size:11.5px;font-weight:700;',
'  font-family:inherit;cursor:pointer;margin:5px 0 0 37px}',
'.ds-paar.du .ds-klarK{margin:5px 37px 0 0}',
'.ds-klar{display:none;font-size:13.5px;color:#4F5A61;background:#F2F8FA;border-left:3px solid #9FDDEC;',
'  border-radius:0 10px 10px 0;padding:8px 11px;margin:6px 0 0 37px;line-height:1.5}',
'.ds-paar.du .ds-klar{margin:6px 37px 0 0;border-left:none;border-right:3px solid #9FDDEC;',
'  border-radius:10px 0 0 10px;text-align:right}',
'.ds-klar.auf{display:block}',
'.ds-klar b{color:#10627A;font-weight:700}',
'.ds-woerter{display:none;margin:6px 0 0 37px;font-size:12.5px;line-height:1.6;color:#5C5347}',
'.ds-paar.du .ds-woerter{margin:6px 37px 0 0;text-align:right}',
'.ds-woerter.auf{display:block}',
'.ds-woerter i{font-style:normal;font-weight:700;color:#14181B}',

/* Knöpfe */
'.ds-k{border:none;border-radius:999px;font-family:inherit;font-weight:700;font-size:14px;',
'  padding:11px 18px;cursor:pointer;line-height:1.2}',
'.ds-k.voll{flex:1 1 150px;background:linear-gradient(145deg,#39CCE3,#10627A);color:#fff;',
'  box-shadow:0 5px 14px rgba(16,98,122,.3)}',
'.ds-k.still{background:#F3EFE7;color:#4A5257;flex:0 0 auto}',
'.ds-k.klein{font-size:12.5px;padding:8px 13px}',
'.ds-k.an{background:#10627A;color:#fff}',
'.ds-k:disabled{opacity:.45;cursor:default;box-shadow:none}',
'.ds-fertig{text-align:center;padding:18px 6px 4px}',
'.ds-fertig .h{font-family:"Space Grotesk",Inter,sans-serif;font-size:17px;color:#14181B;',
'  font-weight:700;margin-bottom:5px}',
'.ds-fertig .p{font-size:13.5px;color:#7A838A;line-height:1.5}',
'@media(prefers-reduced-motion:reduce){.ds-stufe,.ds-bb,.ds-k{transition:none}}'
    ].join('\n');
    document.head.appendChild(st);
  }

  /* ---------- Zustand ---------- */
  var G = null;   /* {d, skript, stufe, pos, laeuft, rolle} */

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
      var auf = el('dsOv') && el('dsOv').classList.contains('auf');
      if (!auf) return;
      if (ev.key === 'Escape') { ev.preventDefault(); return zu(); }
      /* Leertaste und Eingabe bedienen den Hauptknopf — man muss
         beim Mitsprechen nicht zwischen Text und Knopf zielen. */
      if (ev.key === 'Enter' || ev.key === ' ') {
        var h = el('dsHaupt');
        if (h && !h.disabled) { ev.preventDefault(); h.click(); }
      }
    });
  }

  function auf(d){
    stil(); ovBauen();
    G = { d:d, skript:skript(d), stufe:null, pos:0, laeuft:false, rolle:'du' };
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

  /* ---------- Hat das Gespräch Umgangssprache? ---------- */
  function hatKlartext(d){
    return (d.schritte || []).some(function (s) {
      return s.klartext || s.beispielKlartext || (s.woerter && s.woerter.length);
    });
  }

  /* ---------- Stufe 0: die Wahl ---------- */
  function wahl(){
    if (!G) return;
    stille();
    var d = G.d, id = d.id;
    var stufen = [
      ['lesen', 'Mitlesen', 'Das ganze Gespräch steht da — beide Seiten. Tipp eine Zeile an, um sie zu hören.'],
      ['mit',   'Mitsprechen', 'Du übernimmst eine Rolle. Deine Sätze stehen noch da — lies sie laut vor.'],
      ['frei',  'Frei sprechen', 'Nur noch Hinweise, kein Text. Antworte mit eigenen Worten.']
    ];
    el('dsKoerper').innerHTML =
      (hatKlartext(d) ? '<div class="ds-umg">🗣 So wird wirklich gesprochen — mit Klartext</div>' : '') +
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

  /* ---------- Eine Zeile samt Klartext ---------- */
  function wer(z){ return z.wer === 'du' ? 'du' : 'am'; }
  function avatar(z){
    return z.wer === 'du' ? 'Du' : E(G.d.em || 'A');
  }
  function paarHtml(z, i, mitHinweis){
    var du = z.wer === 'du';
    var h = '<div class="ds-paar ' + wer(z) + '" data-p="' + i + '">';
    if (mitHinweis && z.hinweis) h += '<div class="ds-tipp">' + E(z.hinweis) + '</div>';
    h += '<div class="ds-z ' + wer(z) + '" data-z="' + i + '">' +
           '<span class="ds-av">' + (du ? 'Du' : E(G.d.em || 'A')) + '</span>' +
           '<span class="ds-bb">' + E(z.text) + '</span>' +
         '</div>';
    if (z.klar || z.woerter) {
      h += '<button class="ds-klarK" type="button" data-klar="' + i + '">Klartext</button>';
      if (z.klar) h += '<div class="ds-klar" data-klarbox="' + i + '"><b>Auf Standarddeutsch:</b> ' + E(z.klar) + '</div>';
      if (z.woerter) h += '<div class="ds-woerter" data-klarbox="' + i + '">' +
        z.woerter.map(function (w) { return '<i>' + E(w.w) + '</i> — ' + E(w.b); }).join('<br>') + '</div>';
    }
    return h + '</div>';
  }

  function klarSchalten(i){
    var k = el('dsKoerper'); if (!k) return;
    var auf = false;
    Array.prototype.forEach.call(k.querySelectorAll('[data-klarbox="' + i + '"]'), function (b) {
      b.classList.toggle('auf'); auf = b.classList.contains('auf');
    });
    var kn = k.querySelector('[data-klar="' + i + '"]');
    if (kn) kn.classList.toggle('an', auf);
  }

  function zeileHoeren(i){
    if (!G) return;
    var z = G.skript[i]; if (!z) return;
    halt();
    hervor(i);
    sprich(z.text, function () { hervor(-1); });
  }

  function koerperKlick(ev){
    var t = ev.target; if (!t.closest) return;
    var kb = t.closest('[data-klar]');
    if (kb) { ev.stopPropagation(); return klarSchalten(+kb.getAttribute('data-klar')); }
    var r = t.closest('[data-z]');
    if (r) return zeileHoeren(+r.getAttribute('data-z'));
  }

  /* ---------- Stufe 1: Mitlesen ---------- */
  function lesen(){
    if (!G) return;
    var k = el('dsKoerper');
    k.innerHTML =
      '<div class="ds-rolle">Das ganze Gespräch — tipp eine Zeile an, um sie zu hören</div>' +
      G.skript.map(function (z, i) { return paarHtml(z, i, false); }).join('');
    k.onclick = koerperKlick;
    fussLesen();
    merken(G.d.id, 'lesen');
  }

  function fussLesen(){
    el('dsFuss').innerHTML =
      '<button class="ds-k voll" id="dsHaupt" type="button">▶ Alles vorlesen</button>' +
      '<button class="ds-k still klein" id="dsTempo" type="button">' +
        (TEMPO < 1 ? 'Langsam ✓' : 'Langsam') + '</button>' +
      '<button class="ds-k still klein" id="dsZurueck" type="button">Zurück</button>';
    el('dsZurueck').onclick = function () { halt(); wahl(); };
    el('dsHaupt').onclick = function () { G && G.laeuft ? halt() : vorlesen(0); };
    el('dsTempo').onclick = function () {
      TEMPO = TEMPO < 1 ? 1 : .72;
      var lief = G && G.laeuft; halt();
      el('dsTempo').textContent = TEMPO < 1 ? 'Langsam ✓' : 'Langsam';
      el('dsTempo').classList.toggle('an', TEMPO < 1);
      if (lief) vorlesen(0);
    };
    el('dsTempo').classList.toggle('an', TEMPO < 1);
  }

  function hervor(i){
    var k = el('dsKoerper'); if (!k) return;
    Array.prototype.forEach.call(k.querySelectorAll('.ds-z.jetzt'), function (r) { r.classList.remove('jetzt'); });
    if (i < 0) return;
    var r = k.querySelector('[data-z="' + i + '"]');
    if (r) { r.classList.add('jetzt'); try { r.scrollIntoView({ block:'nearest' }); } catch (e) {} }
  }

  function halt(){
    stille();
    if (!G) return;
    G.laeuft = false; hervor(-1);
    var p = el('dsHaupt');
    if (p && G.stufe === 'lesen') p.innerHTML = '▶ Alles vorlesen';
  }

  function vorlesen(i){
    if (!G) return;
    if (i >= G.skript.length) { halt(); return; }
    G.laeuft = true;
    var p = el('dsHaupt'); if (p) p.innerHTML = '⏸ Anhalten';
    hervor(i);
    sprich(G.skript[i].text, function () {
      if (!G || !G.laeuft) return;
      setTimeout(function () { if (G && G.laeuft) vorlesen(i + 1); }, 300);
    });
  }

  /* ---------- Stufe 2: Mitsprechen ----------
     G.rolle sagt, welche Seite DU liest. Tauschen ist wichtig:
     wer immer nur antwortet, übt nie das Fragen. */
  function mitsprechen(){
    if (!G) return;
    G.pos = 0;
    el('dsKoerper').innerHTML =
      '<div class="ds-rolle">Du liest: ' +
      (G.rolle === 'du' ? 'die blauen Zeilen' : 'die weißen Zeilen') + '</div>';
    el('dsKoerper').onclick = koerperKlick;
    el('dsFuss').innerHTML =
      '<button class="ds-k voll" id="dsHaupt" type="button">Los geht’s</button>' +
      '<button class="ds-k still klein" id="dsTausch" type="button">Rolle tauschen</button>' +
      '<button class="ds-k still klein" id="dsZurueck" type="button">Zurück</button>';
    el('dsZurueck').onclick = function () { halt(); wahl(); };
    el('dsTausch').onclick = function () {
      halt(); G.rolle = (G.rolle === 'du') ? 'am' : 'du'; mitsprechen();
    };
    el('dsHaupt').onclick = schritt;
  }

  function anhaengen(html){
    var k = el('dsKoerper'); if (!k) return null;
    k.insertAdjacentHTML('beforeend', html);
    var l = k.lastElementChild;
    k.scrollTop = k.scrollHeight;
    return l;
  }

  function schritt(){
    if (!G || G.stufe !== 'mit') return;
    var h = el('dsHaupt');
    if (G.pos >= G.skript.length) return mitFertig();
    var z = G.skript[G.pos], i = G.pos;
    G.pos++;

    var meine = (wer(z) === G.rolle);
    anhaengen(paarHtml(z, i, !meine ? false : true));
    var zeile = el('dsKoerper').querySelector('[data-z="' + i + '"]');

    if (!meine) {
      /* Die andere Seite spricht — der Text steht trotzdem da. */
      if (zeile) zeile.classList.add('jetzt');
      if (h) { h.disabled = true; h.innerHTML = '…'; }
      sprich(z.text, function () {
        if (!G || G.stufe !== 'mit') return;
        if (zeile) zeile.classList.remove('jetzt');
        var n = G.skript[G.pos];
        if (n && wer(n) === G.rolle) return schritt();   /* gleich deine Zeile zeigen */
        if (h) { h.disabled = false; h.innerHTML = 'Weiter'; h.onclick = schritt; }
      });
      return;
    }

    /* Deine Zeile: hinstellen, laut vorlesen lassen, dann weiter. */
    if (zeile) zeile.classList.add('jetzt');
    if (h) {
      h.disabled = false;
      h.innerHTML = 'Gelesen — weiter';
      h.onclick = function () {
        if (zeile) zeile.classList.remove('jetzt');
        h.onclick = schritt;
        schritt();
      };
    }
  }

  function mitFertig(){
    if (!G) return;
    merken(G.d.id, 'mit');
    anhaengen('<div class="ds-fertig"><div class="h">Durch — gut gemacht.</div>' +
      '<div class="p">Tausch die Rolle, oder nimm dasselbe Gespräch ohne Text: ' +
      'Amanda fragt, du antwortest mit eigenen Worten.</div></div>');
    var h = el('dsHaupt');
    if (h) { h.disabled = false; h.innerHTML = 'Frei sprechen'; h.onclick = function () { starte('frei'); }; }
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
    var n = 0;
    var t = setInterval(function () { if (einhaengen() || ++n > 40) clearInterval(t); }, 250);
  }

  window.DLGSTUFEN = { auf:auf, zu:zu, skript:skript, hatKlartext:hatKlartext };
})();
