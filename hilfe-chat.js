/* ============================================================
   deutschoderwas club — Amanda, die Lehrerin im Chat
   Einbinden mit:  <script src="hilfe-chat.js?v=3" defer></script>

   Amanda beantwortet alles: Grammatik, Wortschatz, Leben in
   Deutschland, Fragen zur Plattform. Sie antwortet immer auf
   Deutsch und sie zeigt es — fette Wörter, Beispielsätze,
   Merksätze. Wer lieber spricht, hält das Mikrofon gedrückt.

   Braucht nichts weiter. Wenn window.sb vorhanden ist, wird der
   Zugang der angemeldeten Person automatisch mitgeschickt.
   ============================================================ */
(function () {
  if (window.__hilfeChat) return; window.__hilfeChat = true;

  var verlauf = [], offen = false, laeuft = false, adresse = '';
  var rec = null, brocken = [], nimmtAuf = false;

  function amandaBild(pose) {
    return window.AmandaBild ? window.AmandaBild(pose) : ('amanda/amanda-' + (pose || 'hallo') + '.webp');
  }

  /* ---------- Stil: derselbe Baukasten wie die Plattform ---------- */
  var css = document.createElement('style');
  css.textContent = [
    '.hc-btn{position:fixed;right:18px;bottom:18px;z-index:9500;width:62px;height:62px;border-radius:50%;',
    'border:2px solid var(--tinte,#20211F);background:var(--karte,#FFFDF3);cursor:pointer;padding:0;',
    'box-shadow:3px 4px 0 rgba(32,33,31,.22);transition:transform .15s;overflow:hidden;display:block}',
    '.hc-btn img{width:100%;height:100%;object-fit:cover;object-position:top center;display:block}',
    '.hc-btn:hover{transform:translateY(-2px) scale(1.04)}',
    '.hc-btn .kr{display:none;font-size:26px;line-height:58px;color:var(--tinte,#20211F)}',
    '.hc-btn.zu img{display:none}.hc-btn.zu .kr{display:block}',

    '.hc-box{position:fixed;right:18px;bottom:92px;z-index:9501;width:370px;max-width:calc(100vw - 36px);',
    'background:var(--karte,#FFFDF3);border:2px solid var(--tinte,#20211F);border-radius:22px;',
    'box-shadow:0 20px 54px -14px rgba(32,33,31,.42);overflow:hidden;font-family:inherit;',
    'display:none;flex-direction:column;max-height:min(600px,calc(100vh - 130px))}',
    '.hc-box.auf{display:flex}',

    '.hc-kopf{background:linear-gradient(135deg,#FFF6D9,var(--karte,#FFFDF3));',
    'border-bottom:2px solid var(--tinte,#20211F);padding:12px 14px 10px;display:flex;gap:11px;align-items:flex-end}',
    '.hc-kopf img{height:60px;width:auto;flex:none;margin-bottom:-10px}',
    '.hc-kopf .tx{flex:1;min-width:0;padding-bottom:4px}',
    '.hc-kopf b{display:block;font-family:var(--schrift-kopf,"Shantell Sans",sans-serif);font-size:16px;',
    'font-weight:800;color:var(--tinte,#20211F);line-height:1.2}',
    '.hc-kopf span{display:block;font-size:12px;color:var(--text-soft,#54594A);margin-top:1px}',
    '.hc-zu{background:none;border:0;color:var(--text-soft,#54594A);font-size:21px;cursor:pointer;',
    'line-height:1;padding:2px 4px;align-self:flex-start;border-radius:8px}',

    '.hc-lauf{flex:1;overflow-y:auto;padding:14px;background:var(--creme,#FFF8E0)}',
    '.hc-m{max-width:90%;margin-bottom:10px;padding:10px 13px;border-radius:16px;font-size:14.5px;line-height:1.55}',
    '.hc-m.bot{background:var(--karte,#FFFDF3);border:1.5px solid var(--linie,#E7DFC7);',
    'color:var(--tinte,#20211F);border-bottom-left-radius:6px}',
    '.hc-m.du{background:var(--rot,#DD0000);color:#fff;margin-left:auto;border-bottom-right-radius:6px;white-space:pre-wrap}',
    '.hc-m.warte{color:var(--text-soft,#54594A);font-style:italic;background:none;border:0;padding-left:2px}',

    /* Amandas vier Zeichen */
    '.hc-m.bot p{margin:0 0 7px}.hc-m.bot p:last-child{margin-bottom:0}',
    '.hc-m.bot b{font-weight:800;color:var(--tuerkis-dunkel,#1990A4)}',
    '.hc-bsp{margin:7px 0;padding:7px 11px;border-left:3px solid var(--tuerkis-dunkel,#1990A4);',
    'background:var(--tuerkis-hauch,#EAFBFE);border-radius:0 10px 10px 0;font-size:14.5px}',
    '.hc-bsp b{color:var(--tinte,#20211F)!important;',
    'background:linear-gradient(transparent 58%,var(--gelb,#FFE100) 58%);padding:0 1px}',
    '.hc-pkt{margin:3px 0 3px 2px;padding-left:15px;position:relative}',
    '.hc-pkt::before{content:"";position:absolute;left:2px;top:.62em;width:6px;height:6px;border-radius:50%;',
    'background:var(--rot,#DD0000)}',
    '.hc-merk{margin:9px 0 2px;padding:8px 12px;border:1.5px solid var(--gelb,#FFE100);border-radius:12px;',
    'background:#FFFBEC;font-weight:700;color:#6B5A22;display:flex;gap:8px;align-items:flex-start}',
    '.hc-merk::before{content:"★";color:var(--rot,#DD0000);flex:none;line-height:1.5}',

    '.hc-fuss{border-top:1.5px solid var(--linie,#E7DFC7);padding:10px 11px 11px;background:var(--karte,#FFFDF3)}',
    '.hc-fuss input,.hc-fuss textarea{width:100%;border:1.5px solid var(--linie,#E7DFC7);border-radius:13px;',
    'padding:9px 12px;font-family:inherit;font-size:14.5px;resize:none;box-sizing:border-box;',
    'background:#fff;color:var(--tinte,#20211F)}',
    '.hc-fuss input{margin-bottom:7px}',
    '.hc-fuss textarea:focus,.hc-fuss input:focus{outline:none;border-color:var(--tuerkis-dunkel,#1990A4);',
    'box-shadow:0 0 0 3px var(--tuerkis-hauch,#EAFBFE)}',
    '.hc-reihe{display:flex;gap:7px;align-items:flex-end}',
    '.hc-mik,.hc-send{border:0;border-radius:50px;cursor:pointer;font-family:inherit;font-weight:700;flex:none}',
    '.hc-mik{width:42px;height:42px;border:1.5px solid var(--linie,#E7DFC7);background:var(--creme,#FFF8E0);',
    'font-size:18px;line-height:1;padding:0;color:var(--tinte,#20211F)}',
    '.hc-mik:hover{border-color:var(--tuerkis-dunkel,#1990A4)}',
    '.hc-mik.an{background:var(--rot,#DD0000);border-color:var(--rot,#DD0000);color:#fff;animation:hcPuls 1s infinite}',
    '@keyframes hcPuls{50%{opacity:.55}}',
    '.hc-send{background:var(--rot,#DD0000);color:#fff;padding:10px 17px;font-size:14.5px}',
    '.hc-send:disabled{opacity:.5;cursor:default}',
    '.hc-hin{font-size:11.5px;color:#8C8574;margin-top:8px;line-height:1.45}',
    '@media(prefers-reduced-motion:reduce){.hc-mik.an{animation:none}}',
    '@media(max-width:520px){.hc-box{right:10px;left:10px;width:auto;bottom:82px}.hc-btn{right:14px;bottom:14px;width:54px;height:54px}',
    '.hc-btn .kr{line-height:50px}.hc-kopf img{height:50px}}',

    /* In der Handy-Ansicht steht unten die Reiterleiste. Amanda sass
       genau darauf und hat die Reiter verdeckt. Sie rueckt darueber,
       wird kleiner und halbdurchsichtig, solange man sie nicht braucht —
       sichtbar, aber nicht im Weg. */
    '@media(max-width:900px){',
    '.hc-btn{width:50px;height:50px;right:12px;',
    'bottom:calc(78px + env(safe-area-inset-bottom));opacity:.82}',
    '.hc-btn:hover,.hc-btn:focus-visible,.hc-btn.zu{opacity:1}',
    '.hc-btn .kr{line-height:46px;font-size:22px}',
    '.hc-box{bottom:calc(136px + env(safe-area-inset-bottom));',
    'max-height:calc(100vh - 210px)}',
    '}'
  ].join('');
  document.head.appendChild(css);

  var knopf = document.createElement('button');
  knopf.className = 'hc-btn'; knopf.type = 'button';
  knopf.setAttribute('aria-label', 'Amanda fragen');
  knopf.innerHTML = '<img src="' + amandaBild('hallo') + '" alt=""><span class="kr">&times;</span>';

  var box = document.createElement('div');
  box.className = 'hc-box';
  box.setAttribute('role', 'dialog');
  box.setAttribute('aria-label', 'Amanda fragen');
  box.innerHTML =
    '<div class="hc-kopf"><img src="' + amandaBild('schlau') + '" alt="">' +
    '<div class="tx"><b>Amanda</b><span>Frag mich alles — auf Deutsch.</span></div>' +
    '<button class="hc-zu" type="button" aria-label="Schließen">&times;</button></div>' +
    '<div class="hc-lauf" id="hcLauf"></div>' +
    '<div class="hc-fuss">' +
    '<input id="hcMail" type="email" placeholder="Deine E-Mail — damit Julia antworten kann" autocomplete="email">' +
    '<div class="hc-reihe">' +
    '<button class="hc-mik" id="hcMik" type="button" aria-label="Sprachnachricht aufnehmen">&#127908;</button>' +
    '<textarea id="hcText" rows="2" placeholder="Deine Frage — tippen oder sprechen …"></textarea>' +
    '<button class="hc-send" id="hcSend" type="button">Senden</button></div>' +
    '<div class="hc-hin">Amanda antwortet sofort. Wenn nur Julia helfen kann, gibt Amanda es an sie weiter.</div></div>';

  document.addEventListener('DOMContentLoaded', starten);
  if (document.readyState !== 'loading') starten();

  function starten() {
    if (knopf.parentNode) return;
    document.body.appendChild(knopf); document.body.appendChild(box);
    knopf.onclick = umschalten;
    box.querySelector('.hc-zu').onclick = umschalten;
    box.querySelector('#hcSend').onclick = senden;
    box.querySelector('#hcMik').onclick = mikro;
    box.querySelector('#hcText').addEventListener('keydown', function (e) {
      if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); senden(); }
    });
  }

  function umschalten() {
    offen = !offen;
    box.classList.toggle('auf', offen);
    knopf.classList.toggle('zu', offen);
    knopf.setAttribute('aria-label', offen ? 'Schließen' : 'Amanda fragen');
    if (offen) {
      if (!verlauf.length) {
        zeigen('bot', 'Hallo! Ich bin *Amanda*. Frag mich alles — Grammatik, ein Wort, ein Satz zum Prüfen, das Leben in Deutschland oder etwas zum Club.\n> Was ist der Unterschied zwischen *kennen* und *wissen*?\nDu kannst auch auf das Mikrofon tippen und einfach sprechen.');
      }
      pruefeAnmeldung();
      setTimeout(function () { var t = box.querySelector('#hcText'); if (t) t.focus(); }, 60);
    }
  }

  /* ---------- Zugang der angemeldeten Person ---------- */
  async function holeToken() {
    try {
      if (window.sb && window.sb.auth) {
        var s = await window.sb.auth.getSession();
        if (s && s.data && s.data.session) return s.data.session.access_token;
      }
    } catch (e) { /* weiter unten versuchen */ }
    try {
      for (var i = 0; i < localStorage.length; i++) {
        var k = localStorage.key(i);
        if (!/^sb-.*-auth-token$/.test(k)) continue;
        var w = JSON.parse(localStorage.getItem(k) || '{}');
        var t = w.access_token || (w.currentSession && w.currentSession.access_token);
        if (t) return t;
      }
    } catch (e) { /* nicht angemeldet */ }
    return '';
  }

  async function pruefeAnmeldung() {
    var feld = box.querySelector('#hcMail');
    if (!feld) return;
    var t = await holeToken();
    if (t) { feld.style.display = 'none'; adresse = ''; }
  }

  /* ---------- Amandas vier Zeichen sichtbar machen ----------
     *fett*  ·  "> " Beispielsatz  ·  "· " Punkt  ·  "! " Merksatz
     Gebaut wird alles mit textContent — es kommt nie HTML aus der
     Antwort in die Seite. */
  function fett(ziel, text) {
    var teile = String(text).split(/\*([^*\n]+)\*/);
    for (var i = 0; i < teile.length; i++) {
      if (!teile[i]) continue;
      if (i % 2) { var b = document.createElement('b'); b.textContent = teile[i]; ziel.appendChild(b); }
      else ziel.appendChild(document.createTextNode(teile[i]));
    }
    return ziel;
  }

  function malen(ziel, text) {
    var zeilen = String(text).split('\n');
    var absatz = null;
    function schliessen() { absatz = null; }

    zeilen.forEach(function (z) {
      var t = z.trim();
      if (!t) { schliessen(); return; }

      if (/^>\s+/.test(t)) {
        schliessen();
        ziel.appendChild(fett(el('div', 'hc-bsp'), t.replace(/^>\s+/, '')));
      } else if (/^[·•]\s+/.test(t) || /^-\s+/.test(t)) {
        schliessen();
        ziel.appendChild(fett(el('div', 'hc-pkt'), t.replace(/^[·•-]\s+/, '')));
      } else if (/^!\s+/.test(t)) {
        schliessen();
        var m = el('div', 'hc-merk');
        ziel.appendChild(fett(m, t.replace(/^!\s+/, '')));
      } else {
        if (!absatz) { absatz = el('p', ''); ziel.appendChild(absatz); }
        else absatz.appendChild(document.createTextNode(' '));
        fett(absatz, t);
      }
    });
    if (!ziel.childNodes.length) ziel.textContent = text;
    return ziel;
  }

  function el(tag, klasse) {
    var d = document.createElement(tag);
    if (klasse) d.className = klasse;
    return d;
  }

  /* Amandas Zeichen sind fuer die Augen — die Stimme ueberliest sie. */
  function nurText(t) {
    return String(t || '')
      .replace(/^\s*[>!\u00b7\u2022-]\s+/gm, '')
      .replace(/\*([^*\n]+)\*/g, '$1')
      .replace(/_([^_\n]+)_/g, '$1')
      .replace(/\n{2,}/g, '\n')
      .trim();
  }

  /* Vorlesen; ein zweiter Druck haelt an. */
  function sprich(text, knopf) {
    var rein = nurText(text);
    if (!rein || !window.sagen) return;
    var laeuft2 = !!(window.sagenLaeuft && window.sagenLaeuft());
    var warDieser = !!(knopf && knopf.className.indexOf('an') >= 0);
    if (window.sagenStopp) window.sagenStopp();
    var alle = document.querySelectorAll('.af-hoer.an');
    for (var i = 0; i < alle.length; i++) alle[i].classList.remove('an');
    if (laeuft2 && warDieser) return;
    if (knopf) knopf.classList.add('an');
    window.sagen(rein, { rolle: 'amanda', fertig: function () { if (knopf) knopf.classList.remove('an'); } });
  }

  function hoerKnopf(blase, text) {
    if (!window.sagen) return null;
    var h = el('button', 'af-hoer');
    h.type = 'button';
    h.setAttribute('aria-label', 'Antwort vorlesen');
    h.innerHTML = '<span aria-hidden="true">\uD83D\uDD0A</span> Vorlesen';
    h.onclick = function () { sprich(text, h); };
    blase.appendChild(h);
    return h;
  }

  function zeigen(wer, text) {
    var lauf = box.querySelector('#hcLauf');
    var d = el('div', 'hc-m ' + (wer === 'bot' ? 'bot' : 'du'));
    if (wer === 'bot') { malen(d, text); hoerKnopf(d, text); } else d.textContent = text;
    lauf.appendChild(d); lauf.scrollTop = lauf.scrollHeight;
    verlauf.push({ wer: wer, text: text });
    return d;
  }

  /* ---------- Sprechen statt tippen ---------- */
  async function mikro() {
    var m = box.querySelector('#hcMik');
    if (nimmtAuf) { try { rec.stop(); } catch (e) {} return; }
    if (!navigator.mediaDevices || !window.MediaRecorder) {
      zeigen('bot', 'Dein Browser kann leider nicht aufnehmen. Schreib mir die Frage einfach.');
      return;
    }
    var strom;
    try { strom = await navigator.mediaDevices.getUserMedia({ audio: true }); }
    catch (e) {
      zeigen('bot', 'Ich darf das Mikrofon nicht benutzen. Erlaub es bitte im Browser — oder schreib mir.');
      return;
    }
    var typ = MediaRecorder.isTypeSupported('audio/webm') ? 'audio/webm'
            : (MediaRecorder.isTypeSupported('audio/mp4') ? 'audio/mp4' : '');
    brocken = [];
    rec = typ ? new MediaRecorder(strom, { mimeType: typ }) : new MediaRecorder(strom);
    rec.ondataavailable = function (e) { if (e.data && e.data.size) brocken.push(e.data); };
    rec.onstop = async function () {
      nimmtAuf = false;
      m.classList.remove('an');
      m.innerHTML = '&#127908;';
      strom.getTracks().forEach(function (s) { s.stop(); });
      var blob = new Blob(brocken, { type: (rec && rec.mimeType) || 'audio/webm' });
      if (blob.size < 1200) return;
      await verstehen(blob);
    };
    rec.start();
    nimmtAuf = true;
    m.classList.add('an');
    m.innerHTML = '&#9632;';
  }

  async function verstehen(blob) {
    var feldT = box.querySelector('#hcText');
    var vorher = feldT.placeholder;
    feldT.placeholder = 'Ich höre zu …';
    try {
      var b64 = await alsBase64(blob);
      var kopf = { 'Content-Type': 'application/json' };
      var token = await holeToken();
      if (token) kopf.Authorization = 'Bearer ' + token;
      var r = await fetch('/api/hoeren', {
        method: 'POST', headers: kopf,
        body: JSON.stringify({ audio: b64, typ: blob.type })
      });
      var j = await r.json();
      feldT.placeholder = vorher;
      if (j && j.ok && j.text) { feldT.value = j.text; senden(); }
      else zeigen('bot', 'Das habe ich nicht verstanden. Sprich bitte noch einmal — oder schreib es mir.');
    } catch (e) {
      feldT.placeholder = vorher;
      zeigen('bot', 'Die Aufnahme kam nicht an. Schreib mir die Frage gern.');
    }
  }

  function alsBase64(blob) {
    return new Promise(function (loesen, ab) {
      var r = new FileReader();
      r.onload = function () {
        var s = String(r.result || ''); var i = s.indexOf(',');
        loesen(i > -1 ? s.slice(i + 1) : s);
      };
      r.onerror = ab;
      r.readAsDataURL(blob);
    });
  }

  /* ---------- Senden ---------- */
  async function senden() {
    if (laeuft) return;
    var feldT = box.querySelector('#hcText'), feldM = box.querySelector('#hcMail');
    var frage = (feldT.value || '').trim();
    if (!frage) return;
    if (feldM && feldM.style.display !== 'none') {
      adresse = (feldM.value || '').trim();
      if (!adresse || adresse.indexOf('@') < 1) {
        feldM.focus();
        var w = box.querySelector('#hcLauf').lastChild;
        if (!w || w.textContent.indexOf('E-Mail-Adresse') < 0) {
          zeigen('bot', 'Schreib bitte noch deine E-Mail-Adresse dazu — sonst kann Julia dir nicht antworten.');
        }
        return;
      }
    }
    feldT.value = '';
    zeigen('du', frage);

    laeuft = true;
    box.querySelector('#hcSend').disabled = true;
    var lauf = box.querySelector('#hcLauf');
    var warte = el('div', 'hc-m warte');
    warte.textContent = 'Amanda schreibt …';
    lauf.appendChild(warte); lauf.scrollTop = lauf.scrollHeight;

    var kopf = { 'Content-Type': 'application/json' };
    var token = await holeToken();
    if (token) kopf.Authorization = 'Bearer ' + token;

    try {
      var r = await fetch('/api/support-chat', {
        method: 'POST', headers: kopf,
        body: JSON.stringify({
          verlauf: verlauf.slice(-12),
          email: adresse || undefined,
          seite: location.pathname
        })
      });
      var j = await r.json();
      warte.remove();
      zeigen('bot', (j && j.text) || 'Da ist gerade etwas schiefgegangen. Schreib mir gern direkt: deutschoderwas@gmail.com');
    } catch (e) {
      warte.remove();
      zeigen('bot', 'Die Verbindung hat nicht geklappt. Schreib mir gern direkt: deutschoderwas@gmail.com');
    }
    laeuft = false;
    box.querySelector('#hcSend').disabled = false;
  }

  /* Andere Stellen dürfen mitbenutzen, was hier schon gebaut ist:
     AmandaMalen  — Amandas vier Zeichen in ein Element malen
     AmandaToken  — den Zugang der angemeldeten Person holen
     AmandaFragen — den Chat öffnen und gleich etwas fragen */
  window.AmandaMalen = malen;
  window.AmandaToken = holeToken;
  /* Andere Stellen dürfen Amanda öffnen: window.AmandaFragen('...') */
  window.AmandaFragen = function (frage) {
    if (!offen) umschalten();
    if (frage) {
      var t = box.querySelector('#hcText');
      if (t) { t.value = frage; senden(); }
    }
  };
})();
