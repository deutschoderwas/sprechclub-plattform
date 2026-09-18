/* ============================================================
   amanda-stimme.js — mit Amanda sprechen, nicht tippen

   Bisher war Amanda ein Chat: aufnehmen, hochladen, warten,
   vorlesen lassen. Vier Schritte, jedes Mal ein Knopfdruck, und
   zwischen Frage und Antwort lagen Sekunden. So redet niemand.

   Hier laeuft stattdessen ein echtes Gespraech: Amanda hoert
   durchgehend zu, antwortet in Julias Stimme, und man darf ihr
   ins Wort fallen. Die Leitung kommt von ElevenLabs Agents, die
   Eintrittskarte von api/amanda-stimme.js — der Schluessel
   bleibt auf dem Server.

   Ohne eingerichteten Agenten passiert nichts Schlimmes: die
   Ansicht sagt ehrlich, dass Sprechen noch nicht bereitsteht,
   und zeigt den Weg zum Textchat, der wie bisher laeuft.
   ============================================================ */
(function () {
  'use strict';
  if (window.AMSTIMME) return;

  var SDK = 'https://cdn.jsdelivr.net/npm/@elevenlabs/client@1.25.0/dist/lib.iife.js';

  var G = {
    lauf: null,      // die laufende Unterhaltung
    zeile: null,     // Zeilennummer in amanda_gespraeche
    start: 0,
    zustand: 'aus',  // aus | verbindet | hoert | spricht | fehler
    mitschrift: [],
    stumm: false,
    rest: 0,
    uhr: null
  };

  function el(id) { return document.getElementById(id); }
  function E(s) {
    return String(s == null ? '' : s).replace(/[&<>"']/g, function (c) {
      return ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c];
    });
  }
  function mmss(s) {
    s = Math.max(0, Math.round(s));
    return Math.floor(s / 60) + ':' + ('0' + (s % 60)).slice(-2);
  }

  /* ---------- Der Werkzeugkasten wird erst geladen, wenn jemand
       wirklich sprechen will. Ein Megabyte laedt man nicht auf
       Verdacht. ---------- */
  var ladung = null;
  function sdkLaden() {
    if (window.ElevenLabsClient) return Promise.resolve(window.ElevenLabsClient);
    if (ladung) return ladung;
    ladung = new Promise(function (ok, ab) {
      var s = document.createElement('script');
      s.src = SDK;
      s.onload = function () {
        window.ElevenLabsClient ? ok(window.ElevenLabsClient)
                                : ab(new Error('SDK geladen, aber leer'));
      };
      s.onerror = function () { ab(new Error('SDK laesst sich nicht laden')); };
      document.head.appendChild(s);
    });
    return ladung;
  }

  function token() {
    try {
      if (window.sb && window.sb.auth) {
        return window.sb.auth.getSession().then(function (r) {
          return (r && r.data && r.data.session && r.data.session.access_token) || '';
        });
      }
    } catch (e) {}
    return Promise.resolve('');
  }

  function ruf(koerper) {
    return token().then(function (t) {
      return fetch('/api/amanda-stimme', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Authorization: 'Bearer ' + t },
        body: JSON.stringify(koerper || {})
      }).then(function (r) {
        return r.json().then(function (j) { return { status: r.status, j: j }; });
      });
    });
  }

  /* ============================================================
     Die Ansicht
     ============================================================ */
  window.renderSprechenAmanda = function () {
    var v = el('v-amandasprechen'); if (!v) return;
    stil();
    v.innerHTML = geruest();
    zeichnen();
  };

  function geruest() {
    return ''
      + '<div class="as-kopf">'
      +   '<button class="as-zurueck" onclick="go(\'sprechen\')" aria-label="Zurück">←</button>'
      +   '<div><h2>Mit Amanda sprechen</h2>'
      +   '<p>Sie hört zu, antwortet sofort und du darfst ihr ins Wort fallen.</p></div>'
      + '</div>'
      + '<div class="as-buehne">'
      +   '<div class="as-kreis" id="asKreis"><span class="as-welle"></span>'
      +     '<img id="asBild" alt="" src="' + (window.AmandaBild ? window.AmandaBild('willkommen') : 'amanda/a-willkommen.webp') + '"'
      +     ' onerror="this.style.display=\'none\'">'
      +   '</div>'
      +   '<p class="as-zustand" id="asZustand">Bereit, wenn du es bist.</p>'
      +   '<p class="as-uhr" id="asUhr"></p>'
      +   '<div class="as-knoepfe" id="asKnoepfe"></div>'
      + '</div>'
      + '<div class="as-mit" id="asMit"></div>'
      + '<p class="as-fuss">Amanda spricht mit Julias Stimme. Sie korrigiert nur, wenn wirklich etwas falsch war — mitten im Gespräch, ohne dich zu bremsen.</p>';
  }

  var TEXTE = {
    aus:       'Bereit, wenn du es bist.',
    verbindet: 'Einen Moment, ich komme …',
    hoert:     'Ich höre zu — sprich einfach.',
    spricht:   'Amanda spricht …',
    fehler:    'Das hat nicht geklappt.'
  };

  function zeichnen() {
    var z = el('asZustand'), k = el('asKreis'), b = el('asKnoepfe');
    if (z) z.textContent = TEXTE[G.zustand] || '';
    if (k) k.className = 'as-kreis ' + G.zustand;

    if (!b) return;
    if (G.zustand === 'aus' || G.zustand === 'fehler') {
      b.innerHTML = '<button class="as-los" onclick="amStimmeStart()">Gespräch beginnen</button>';
    } else if (G.zustand === 'verbindet') {
      b.innerHTML = '<button class="as-los" disabled>Verbinde …</button>';
    } else {
      b.innerHTML = ''
        + '<button class="as-neben' + (G.stumm ? ' an' : '') + '" onclick="amStimmeStumm()">'
        +   (G.stumm ? 'Mikrofon an' : 'Kurz stumm') + '</button>'
        + '<button class="as-auf" onclick="amStimmeEnde()">Auflegen</button>';
    }
    mitschriftZeichnen();
  }

  function mitschriftZeichnen() {
    var m = el('asMit'); if (!m) return;
    if (!G.mitschrift.length) { m.innerHTML = ''; return; }
    m.innerHTML = '<h3 class="as-h3">Mitschrift</h3>' + G.mitschrift.map(function (z) {
      return '<div class="as-z ' + (z.wer === 'am' ? 'am' : 'du') + '">'
        + '<b>' + (z.wer === 'am' ? 'Amanda' : 'Du') + '</b>'
        + '<span>' + E(z.text) + '</span></div>';
    }).join('');
    m.scrollTop = m.scrollHeight;
  }

  function sagen(wer, text) {
    text = String(text || '').trim();
    if (!text) return;
    var letzte = G.mitschrift[G.mitschrift.length - 1];
    if (letzte && letzte.wer === wer && letzte.text === text) return;
    G.mitschrift.push({ wer: wer, text: text });
    if (G.mitschrift.length > 80) G.mitschrift.shift();
    mitschriftZeichnen();
  }

  function uhrAn() {
    uhrAus();
    G.uhr = setInterval(function () {
      var u = el('asUhr'); if (!u) return;
      var gelaufen = (Date.now() - G.start) / 1000;
      var uebrig = G.rest - gelaufen;
      u.textContent = mmss(gelaufen) + (uebrig < 300 ? ' · noch ' + mmss(uebrig) + ' diesen Monat' : '');
      if (uebrig <= 0) window.amStimmeEnde(true);
    }, 1000);
  }
  function uhrAus() { if (G.uhr) { clearInterval(G.uhr); G.uhr = null; } }

  /* ============================================================
     Anfangen
     ============================================================ */
  window.amStimmeStart = function () {
    if (G.lauf) return;
    G.zustand = 'verbindet'; G.mitschrift = []; zeichnen();

    var karte = null;

    sdkLaden()
      .then(function () {
        return navigator.mediaDevices.getUserMedia({ audio: true });
      })
      .then(function (strom) {
        // Den Strom selbst braucht der SDK nicht — wir wollten nur die Erlaubnis.
        strom.getTracks().forEach(function (t) { t.stop(); });
        return ruf({ quelle: 'sprechen', thema: '' });
      })
      .then(function (a) {
        if (a.status === 503) throw new Error('nicht_eingerichtet');
        if (a.status === 402) throw new Error('kein_zugang');
        if (a.status === 429) throw new Error('monat:' + (a.j.grenze_minuten || 60));
        if (!a.j || !a.j.ok) throw new Error(a.j && a.j.error || 'unbekannt');
        karte = a.j;
        G.zeile = a.j.gespraech;
        G.rest = a.j.rest_sekunden || 3600;

        var o = {
          dynamicVariables: {
            name:          karte.variablen.name || '',
            niveau:        karte.variablen.niveau || 'B1',
            muttersprache: karte.variablen.muttersprache || '',
            thema:         karte.variablen.thema || ''
          },
          onConnect:    function () { G.start = Date.now(); G.zustand = 'hoert'; zeichnen(); uhrAn(); },
          onDisconnect: function () { aufraeumen(false); },
          onError:      function (e) { melden(String((e && e.message) || e)); },
          onModeChange: function (m) {
            G.zustand = (m && m.mode === 'speaking') ? 'spricht' : 'hoert';
            zeichnen();
          },
          onMessage: function (m) {
            if (!m) return;
            if (m.source === 'ai' || m.source === 'agent') sagen('am', m.message);
            else if (m.source === 'user') sagen('du', m.message);
          }
        };
        if (karte.art === 'webrtc') { o.conversationToken = karte.ticket; o.connectionType = 'webrtc'; }
        else { o.signedUrl = karte.ticket; }

        return window.ElevenLabsClient.Conversation.startSession(o);
      })
      .then(function (unterhaltung) { G.lauf = unterhaltung; })
      .catch(function (e) {
        var m = String((e && e.message) || e);
        if (m === 'nicht_eingerichtet') return melden('Sprechen ist noch nicht freigeschaltet. Schreib Amanda so lange im Chat — sie antwortet dort genauso.', true);
        if (m === 'kein_zugang')       return melden('Sprechen gehört zur Mitgliedschaft. Im Chat kannst du Amanda trotzdem fragen.', true);
        if (m.indexOf('monat:') === 0) return melden('Für diesen Monat sind deine Sprechminuten aufgebraucht. Ab dem Ersten geht es wieder los — bis dahin schreibt Amanda dir gern.', true);
        if (/Permission|NotAllowed|denied/i.test(m)) return melden('Ich darf das Mikrofon nicht benutzen. Erlaub es bitte im Browser und versuch es noch einmal.', true);
        melden('Die Verbindung kam nicht zustande. Versuch es gleich noch einmal.');
      });
  };

  function melden(text, sanft) {
    G.zustand = 'fehler'; zeichnen();
    var z = el('asZustand'); if (z) z.textContent = text;
    var k = el('asKreis'); if (k && sanft) k.className = 'as-kreis aus';
    uhrAus();
  }

  window.amStimmeStumm = function () {
    if (!G.lauf) return;
    G.stumm = !G.stumm;
    try { G.lauf.setMicMuted(G.stumm); } catch (e) {}
    zeichnen();
  };

  window.amStimmeEnde = function (wegenZeit) {
    if (!G.lauf) return;
    try { G.lauf.endSession(); } catch (e) {}
    aufraeumen(!!wegenZeit);
  };

  function aufraeumen(wegenZeit) {
    var sek = G.start ? Math.round((Date.now() - G.start) / 1000) : 0;
    var id = G.zeile, lauf = G.lauf;
    var gespraechId = '';
    try { gespraechId = (lauf && lauf.getId && lauf.getId()) || ''; } catch (e) {}

    G.lauf = null; G.zeile = null; G.start = 0; G.stumm = false;
    G.zustand = 'aus';
    uhrAus();
    var u = el('asUhr'); if (u) u.textContent = sek ? 'Das Gespräch hat ' + mmss(sek) + ' gedauert.' : '';
    zeichnen();
    if (wegenZeit) {
      var z = el('asZustand');
      if (z) z.textContent = 'Deine Sprechminuten für diesen Monat sind aufgebraucht.';
    }

    if (id) ruf({ aktion: 'ende', gespraech: id, sekunden: sek, gespraech_id: gespraechId })
      .catch(function () {});
  }

  /* Wer den Tab zumacht, legt auch auf — sonst laeuft die Uhr weiter. */
  window.addEventListener('pagehide', function () {
    if (!G.lauf) return;
    try { G.lauf.endSession(); } catch (e) {}
    try {
      if (G.zeile && navigator.sendBeacon) {
        navigator.sendBeacon('/api/amanda-stimme', new Blob([JSON.stringify({
          aktion: 'ende', gespraech: G.zeile,
          sekunden: Math.round((Date.now() - G.start) / 1000), abgebrochen: true
        })], { type: 'application/json' }));
      }
    } catch (e) {}
  });

  /* ============================================================
     Stil — dieselbe Welt wie die Sammelseiten
     ============================================================ */
  function stil() {
    if (el('as-stil')) return;
    var s = document.createElement('style'); s.id = 'as-stil';
    s.textContent = [
      '#v-amandasprechen{max-width:720px;margin:0 auto;',
      '  --as-ink:#14181B;--as-soft:#5A6B72;--as-line:#E7ECEE;--as-turq:#1B9BC0;',
      '  --as-turq-d:#15788F;--as-turq-soft:#E6F8FC;--as-paper:#fff;--as-grund:#F6F9FA}',
      '.as-kopf{display:flex;align-items:flex-start;gap:12px;margin:0 0 20px}',
      '.as-zurueck{flex:0 0 auto;width:44px;height:44px;border-radius:999px;border:1.5px solid var(--as-line);',
      '  background:var(--as-paper);color:var(--as-ink);font-size:19px;cursor:pointer}',
      '.as-zurueck:hover{border-color:var(--as-turq)}',
      '.as-kopf h2{font-size:clamp(23px,4vw,30px);margin:0 0 4px;letter-spacing:-.02em;line-height:1.15}',
      '.as-kopf p{margin:0;color:var(--as-soft);font-size:14.5px;line-height:1.5}',
      /* Buehne */
      '.as-buehne{display:flex;flex-direction:column;align-items:center;gap:14px;text-align:center;',
      '  background:var(--as-paper);border:1.5px solid var(--as-line);border-radius:22px;padding:34px 20px 28px}',
      '.as-kreis{position:relative;width:150px;height:150px;border-radius:999px;overflow:hidden;',
      '  background:var(--as-turq-soft);display:flex;align-items:center;justify-content:center;',
      '  border:3px solid var(--as-line);transition:border-color .2s}',
      '.as-kreis img{width:100%;height:100%;object-fit:cover}',
      '.as-kreis.hoert{border-color:var(--as-turq)}',
      '.as-kreis.spricht{border-color:var(--as-turq-d)}',
      '.as-kreis.verbindet{border-color:var(--as-turq);opacity:.75}',
      '.as-kreis.fehler{border-color:#D42A21}',
      /* Der Ring atmet, wenn Amanda spricht — man sieht, dass sie dran ist. */
      '.as-welle{position:absolute;inset:-3px;border-radius:999px;pointer-events:none;',
      '  box-shadow:0 0 0 0 rgba(27,155,192,.5)}',
      '.as-kreis.spricht .as-welle{animation:asPuls 1.5s ease-out infinite}',
      '.as-kreis.hoert .as-welle{animation:asPuls 2.6s ease-out infinite}',
      '@keyframes asPuls{0%{box-shadow:0 0 0 0 rgba(27,155,192,.45)}',
      '  100%{box-shadow:0 0 0 22px rgba(27,155,192,0)}}',
      '@media(prefers-reduced-motion:reduce){.as-kreis .as-welle{animation:none}}',
      '.as-zustand{margin:0;font-size:16.5px;font-weight:700;line-height:1.4;max-width:34ch}',
      '.as-uhr{margin:0;color:var(--as-soft);font-size:13.5px;',
      '  font-variant-numeric:tabular-nums;min-height:18px}',
      '.as-knoepfe{display:flex;gap:10px;flex-wrap:wrap;justify-content:center;margin-top:4px}',
      '.as-los,.as-auf,.as-neben{font:inherit;font-weight:700;font-size:15px;cursor:pointer;',
      '  border-radius:999px;padding:13px 26px;min-height:48px;border:none;transition:.15s}',
      '.as-los{background:var(--as-ink);color:#fff}',
      '.as-los:hover{background:#000}',
      '.as-los[disabled]{opacity:.5;cursor:default}',
      '.as-neben{background:var(--as-paper);color:var(--as-ink);border:1.5px solid var(--as-line)}',
      '.as-neben:hover{border-color:var(--as-turq)}',
      '.as-neben.an{background:var(--as-turq-soft);border-color:var(--as-turq);color:#10627A}',
      '.as-auf{background:#D42A21;color:#fff}',
      '.as-auf:hover{background:#B4231B}',
      /* Mitschrift */
      '.as-mit{margin-top:22px;max-height:340px;overflow-y:auto}',
      '.as-h3{font-size:15px;margin:0 0 10px;color:var(--as-soft)}',
      '.as-z{display:flex;flex-direction:column;gap:2px;background:var(--as-paper);',
      '  border:1.5px solid var(--as-line);border-radius:14px;padding:11px 14px;margin-bottom:8px}',
      '.as-z.am{background:var(--as-turq-soft);border-color:#CDEDF5}',
      '.as-z b{font-size:12px;font-weight:800;letter-spacing:.05em;text-transform:uppercase;color:var(--as-soft)}',
      '.as-z.am b{color:#10627A}',
      '.as-z span{font-size:15px;line-height:1.5}',
      '.as-fuss{margin:20px 0 0;color:var(--as-soft);font-size:13px;line-height:1.55;text-align:center}',
      '@media(max-width:620px){',
      '  .as-buehne{padding:26px 14px 22px}',
      '  .as-kreis{width:124px;height:124px}',
      '  .as-knoepfe{width:100%}',
      '  .as-los,.as-auf,.as-neben{flex:1;padding:13px 16px}',
      '  .as-mit{max-height:none}',
      '}'
    ].join('\n');
    document.head.appendChild(s);
  }

  window.AMSTIMME = { start: window.amStimmeStart, ende: window.amStimmeEnde };
})();
