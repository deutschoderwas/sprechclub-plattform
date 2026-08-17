/* ============================================================
   deutschoderwas club — Hilfe-Chat unten rechts
   Einbinden mit:  <script src="hilfe-chat.js" defer></script>
   Braucht nichts weiter. Wenn auf der Seite ein angemeldeter
   Supabase-Nutzer existiert (window.sb), wird sein Zugang
   automatisch mitgeschickt — sonst fragt der Chat nach der
   E-Mail-Adresse, damit Julia antworten kann.
   ============================================================ */
(function () {
  if (window.__hilfeChat) return; window.__hilfeChat = true;

  var ROT = '#DD0000', DUNKEL = '#1A1A1A';
  var verlauf = [], offen = false, laeuft = false, adresse = '';

  var css = document.createElement('style');
  css.textContent = [
    '.hc-btn{position:fixed;right:18px;bottom:18px;z-index:9500;width:56px;height:56px;border-radius:50%;border:0;',
    'background:' + ROT + ';color:#fff;font-size:24px;cursor:pointer;box-shadow:0 6px 22px rgba(0,0,0,.28);',
    'display:flex;align-items:center;justify-content:center;transition:transform .15s}',
    '.hc-btn:hover{transform:scale(1.06)}',
    '.hc-box{position:fixed;right:18px;bottom:84px;z-index:9501;width:340px;max-width:calc(100vw - 36px);',
    'background:#fff;border-radius:18px;box-shadow:0 18px 50px rgba(0,0,0,.3);overflow:hidden;',
    'font-family:inherit;display:none;flex-direction:column;max-height:min(560px,calc(100vh - 120px))}',
    '.hc-box.auf{display:flex}',
    '.hc-kopf{background:' + DUNKEL + ';color:#fff;padding:13px 16px;display:flex;justify-content:space-between;align-items:center}',
    '.hc-kopf b{font-size:15px}.hc-kopf span{opacity:.75;font-size:12px;display:block;margin-top:1px}',
    '.hc-zu{background:none;border:0;color:#fff;font-size:20px;cursor:pointer;line-height:1;padding:0 2px}',
    '.hc-lauf{flex:1;overflow-y:auto;padding:14px;background:#FAF9F7}',
    '.hc-m{max-width:86%;margin-bottom:9px;padding:9px 12px;border-radius:14px;font-size:14px;line-height:1.45;white-space:pre-wrap}',
    '.hc-m.bot{background:#fff;border:1px solid #ECE8E1;color:#1A1A1A;border-bottom-left-radius:5px}',
    '.hc-m.du{background:' + ROT + ';color:#fff;margin-left:auto;border-bottom-right-radius:5px}',
    '.hc-m.warte{color:#8A8478;font-style:italic;background:none;border:0;padding-left:2px}',
    '.hc-fuss{border-top:1px solid #ECE8E1;padding:10px;background:#fff}',
    '.hc-fuss input,.hc-fuss textarea{width:100%;border:1px solid #DDD7CC;border-radius:11px;padding:9px 11px;',
    'font-family:inherit;font-size:14px;resize:none;box-sizing:border-box}',
    '.hc-fuss input{margin-bottom:7px}',
    '.hc-fuss textarea:focus,.hc-fuss input:focus{outline:2px solid ' + ROT + ';outline-offset:-1px}',
    '.hc-reihe{display:flex;gap:7px;align-items:flex-end;margin-top:7px}',
    '.hc-send{background:' + ROT + ';color:#fff;border:0;border-radius:11px;padding:9px 15px;font-weight:700;cursor:pointer;font-size:14px}',
    '.hc-send:disabled{opacity:.5;cursor:default}',
    '.hc-hin{font-size:11.5px;color:#8A8478;margin-top:7px;line-height:1.4}',
    '@media(max-width:520px){.hc-box{right:10px;left:10px;width:auto;bottom:78px}.hc-btn{right:14px;bottom:14px}}'
  ].join('');
  document.head.appendChild(css);

  var knopf = document.createElement('button');
  knopf.className = 'hc-btn'; knopf.type = 'button';
  knopf.setAttribute('aria-label', 'Hilfe & Fragen');
  knopf.innerHTML = '&#128172;';

  var box = document.createElement('div');
  box.className = 'hc-box';
  box.innerHTML =
    '<div class="hc-kopf"><div><b>Fragen?</b><span>Wir antworten sofort — sonst Julia per E-Mail.</span></div>' +
    '<button class="hc-zu" type="button" aria-label="Schließen">&times;</button></div>' +
    '<div class="hc-lauf" id="hcLauf"></div>' +
    '<div class="hc-fuss">' +
    '<input id="hcMail" type="email" placeholder="Deine E-Mail — damit wir antworten können" autocomplete="email">' +
    '<div class="hc-reihe"><textarea id="hcText" rows="2" placeholder="Deine Frage …"></textarea>' +
    '<button class="hc-send" id="hcSend" type="button">Senden</button></div>' +
    '<div class="hc-hin">Deine Frage geht immer auch an Julia. Sie antwortet dir per E-Mail.</div></div>';

  document.addEventListener('DOMContentLoaded', starten);
  if (document.readyState !== 'loading') starten();

  function starten() {
    if (knopf.parentNode) return;
    document.body.appendChild(knopf); document.body.appendChild(box);
    knopf.onclick = umschalten;
    box.querySelector('.hc-zu').onclick = umschalten;
    box.querySelector('#hcSend').onclick = senden;
    box.querySelector('#hcText').addEventListener('keydown', function (e) {
      if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); senden(); }
    });
  }

  function umschalten() {
    offen = !offen;
    box.classList.toggle('auf', offen);
    knopf.innerHTML = offen ? '&times;' : '&#128172;';
    if (offen) {
      if (!verlauf.length) {
        zeigen('bot', 'Hallo! Frag mich alles rund um den Club — Guthaben, Stunden buchen oder stornieren, Technik. Wenn ich nicht weiterweiß, leite ich deine Frage an Julia weiter.');
      }
      pruefeAnmeldung();
      setTimeout(function () { var t = box.querySelector('#hcText'); if (t) t.focus(); }, 60);
    }
  }

  // Zugang der angemeldeten Person holen. Nicht jede Seite legt den
  // Supabase-Client auf window ab — dann lesen wir die Sitzung direkt
  // aus dem Browserspeicher, wo Supabase sie selbst ablegt.
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

  // Angemeldet? Dann brauchen wir das E-Mail-Feld nicht.
  async function pruefeAnmeldung() {
    var feld = box.querySelector('#hcMail');
    if (!feld) return;
    var t = await holeToken();
    if (t) { feld.style.display = 'none'; adresse = ''; }
  }

  function zeigen(wer, text) {
    var lauf = box.querySelector('#hcLauf');
    var d = document.createElement('div');
    d.className = 'hc-m ' + (wer === 'bot' ? 'bot' : 'du');
    d.textContent = text;
    lauf.appendChild(d); lauf.scrollTop = lauf.scrollHeight;
    verlauf.push({ wer: wer, text: text });
    return d;
  }

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
          zeigen('bot', 'Schreib bitte noch deine E-Mail-Adresse dazu — sonst können wir dir nicht antworten.');
        }
        return;
      }
    }
    feldT.value = '';
    zeigen('du', frage);

    laeuft = true;
    box.querySelector('#hcSend').disabled = true;
    var lauf = box.querySelector('#hcLauf');
    var warte = document.createElement('div');
    warte.className = 'hc-m warte'; warte.textContent = 'schreibt …';
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
})();
