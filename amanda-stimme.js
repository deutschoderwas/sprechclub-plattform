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
    uhr: null,
    pegel: 0,        // wie laut es gerade ist, 0 bis 1
    pegelStop: null, // haelt die Pegelschleife an
    hatte: false,    // schon einmal gesprochen? (nur fuer den Knopftext)
    /* Julia, 3.11.2026: "eine Schuelerin schreibt dass amanda auf der
       plattform nicht funktioniert wenn man mit ihr LIVE reden
       moechte." Das Bild zeigte ein ewiges "Verbinde ...".
       Zwei Dinge fehlten: ein Wachhund, der das Warten beendet, und
       der Grund, warum die Leitung wieder zugeht. Beides steht jetzt
       hier und geht am Ende mit an den Server, damit es im Protokoll
       nachlesbar ist statt nur im Gefuehl der Schuelerin. */
    modus: 'live',   // live (ElevenLabs) oder frei (Browser-Stimme)
    grund: '',       // warum die Leitung zuging
    wachhund: null   // beendet das Warten nach 25 Sekunden
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
    var balken = '';
    var kraft = [0.55, 0.78, 1, 0.86, 1, 0.74, 0.5];
    for (var i = 0; i < kraft.length; i++) {
      balken += '<i style="--f:' + kraft[i] + ';--v:' + (i * 0.09) + 's"></i>';
    }
    return ''
      + '<div class="as-kopf">'
      +   '<button class="as-zurueck" onclick="go(\'sprechen\')" aria-label="Zurück">←</button>'
      +   '<div><span class="as-eb">Live · sie hört dir zu</span>'
      +   '<h2>Mit Amanda sprechen</h2>'
      +   '<p>Einfach reden. Sie antwortet sofort, und du darfst ihr ins Wort fallen.</p></div>'
      + '</div>'
      + '<div class="as-buehne aus" id="asBuehne">'
      +   '<div class="as-figur">'
      +     '<span class="as-aura a2" aria-hidden="true"></span>'
      +     '<span class="as-aura a1" aria-hidden="true"></span>'
      +     '<img id="asBild" alt="Amanda" data-pose="willkommen"'
      +     ' src="' + pfad('willkommen') + '" onerror="this.style.visibility=\'hidden\'">'
      +   '</div>'
      +   '<div class="as-eq" aria-hidden="true">' + balken + '</div>'
      +   '<p class="as-zustand" id="asZustand">Bereit, wenn du es bist.</p>'
      +   '<p class="as-uhr" id="asUhr"></p>'
      +   '<div class="as-knoepfe" id="asKnoepfe"></div>'
      + '</div>'
      + '<div class="as-mit" id="asMit"></div>'
      + '<details class="as-archiv" id="asArchiv">'
      +   '<summary><b>Deine Mitschrift</b>'
      +   '<span>alles, was du mit Amanda besprochen hast</span></summary>'
      +   '<div class="as-archiv-in" id="asArchivIn"></div>'
      + '</details>'
      + '<p class="as-fuss">Amanda spricht mit Julias Stimme. Sie korrigiert nur, wenn wirklich '
      + 'etwas falsch war — mitten im Gespräch, ohne dich zu bremsen. Alles, was gesagt wird, '
      + 'steht danach in deiner Mitschrift.</p>';
  }

  /* ---------- Amandas Bild: eine Haltung je Zustand ----------
     Einen Videoklon braucht dafuer niemand. Die Zeichnungen gibt
     es schon, und wer sieht, dass Amanda beim Zuhoeren anders
     dasteht als beim Reden, glaubt ihr das Gespraech. */
  var POSE = {
    aus:       'willkommen',
    verbindet: 'uhr',
    hoert:     'hoeren',
    spricht:   'zeigen',
    fehler:    'ups'
  };
  function pfad(pose) {
    if (window.AmandaBild) return window.AmandaBild(pose);
    var ERSATZ = {
      willkommen: 'a-willkommen.webp', uhr: 'a-uhr.webp', hoeren: 'a-hoeren.webp',
      zeigen: 'a-zeigen.webp', ups: 'amanda-ups.webp'
    };
    return 'amanda/' + (ERSATZ[pose] || ERSATZ.willkommen);
  }
  function poseSetzen() {
    var b = el('asBild'); if (!b) return;
    var p = POSE[G.zustand] || 'willkommen';
    if (b.getAttribute('data-pose') === p) return;
    b.setAttribute('data-pose', p);
    b.src = pfad(p);
    b.classList.remove('as-rein');
    void b.offsetWidth;                 // damit die Bewegung neu startet
    b.classList.add('as-rein');
  }

  /* ---------- Der Pegel: das Bild atmet mit der Stimme ----------
     Spricht Amanda, folgt die Aura ihrer Lautstaerke; hoert sie zu,
     folgt sie dem Mikrofon. Nach oben traege, nach unten schnell —
     sonst zappelt alles. */
  var RUHIG = false;
  try { RUHIG = window.matchMedia('(prefers-reduced-motion:reduce)').matches; } catch (e) {}

  function pegelAn() {
    pegelAus();
    if (RUHIG) return;
    var laeuft = true;
    G.pegelStop = function () { laeuft = false; };
    (function schritt() {
      if (!laeuft) return;
      var w = 0;
      try {
        if (G.lauf) {
          w = (G.zustand === 'spricht')
            ? (G.lauf.getOutputVolume ? G.lauf.getOutputVolume() : 0)
            : (G.lauf.getInputVolume ? G.lauf.getInputVolume() : 0);
        }
      } catch (e) {}
      w = Math.max(0, Math.min(1, Number(w) || 0));
      G.pegel = (w > G.pegel) ? (G.pegel * 0.45 + w * 0.55) : (G.pegel * 0.78 + w * 0.22);
      var b = el('asBuehne');
      if (b) b.style.setProperty('--laut', G.pegel.toFixed(3));
      requestAnimationFrame(schritt);
    })();
  }
  function pegelAus() {
    if (G.pegelStop) { try { G.pegelStop(); } catch (e) {} G.pegelStop = null; }
    G.pegel = 0;
    var b = el('asBuehne');
    if (b) b.style.setProperty('--laut', '0');
  }

  /* ---------- Die Mitschrift von frueher ---------- */
  function archivAn() {
    var d = el('asArchiv'); if (!d || d.__dran) return;
    d.__dran = true;
    d.addEventListener('toggle', function () {
      if (!d.open || !window.AmandaMitschrift) return;
      window.AmandaMitschrift.zeichnen('asArchivIn', { neu: true });
    });
  }
  function archivFrischen() {
    var d = el('asArchiv');
    if (d && d.open && window.AmandaMitschrift) {
      window.AmandaMitschrift.zeichnen('asArchivIn', { neu: true });
    }
  }

  var TEXTE = {
    aus:       'Bereit, wenn du es bist.',
    verbindet: 'Einen Moment, ich komme …',
    hoert:     'Ich höre zu — sprich einfach.',
    spricht:   'Amanda spricht …',
    fehler:    'Das hat nicht geklappt.'
  };

  function zeichnen() {
    var z = el('asZustand'), k = el('asBuehne'), b = el('asKnoepfe');
    if (z) z.textContent = TEXTE[G.zustand] || '';
    if (k) k.className = 'as-buehne ' + G.zustand;
    poseSetzen();
    archivAn();

    if (!b) return;
    if (G.zustand === 'aus' || G.zustand === 'fehler') {
      b.innerHTML = '<button class="as-los" onclick="amStimmeStart()">'
        + '<span class="as-mik" aria-hidden="true">\uD83C\uDF99\uFE0F</span>'
        + (G.hatte ? 'Noch einmal sprechen' : 'Gespräch beginnen') + '</button>';
      /* Kam die Leitung nicht zustande, steht der freie Weg bereit:
         das Gerät hört zu und liest vor. Andere Stimme, aber es geht
         sofort und es kostet nichts. */
      if (G.zustand === 'fehler' && freiMoeglich()) {
        b.innerHTML += '<button class="as-neben" onclick="amFreiStart()">'
          + 'Trotzdem sprechen — mit der Stimme deines Geräts</button>';
      }
    } else if (G.modus === 'frei') {
      b.innerHTML = '<button class="as-auf" onclick="amFreiEnde()">Auflegen</button>';
    } else if (G.zustand === 'verbindet') {
      b.innerHTML = '<button class="as-los" disabled>'
        + '<span class="as-mik" aria-hidden="true">\uD83C\uDF99\uFE0F</span>Verbinde …</button>';
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
    /* Und ab in die Mitschrift, die das Gespraech ueberlebt. */
    if (window.AmandaMitschrift) {
      try {
        window.AmandaMitschrift.notiz(wer === 'am' ? 'amanda' : 'du', text,
          { art: 'sprechen', gespraech: G.zeile });
      } catch (e) {}
    }
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
  /* Welcher Anbieter? Julia, 4.11.2026: "Gemini Live ist gut, lass uns
     das machen." Gemini kostet rund 2 Cent in der Minute statt 8 bis
     10 bei ElevenLabs. Antwortet der Server mit "nicht eingerichtet"
     (Schluessel fehlt noch), faellt der Start von selbst auf den
     alten Weg zurueck - und erst wenn auch der nicht kommt, auf die
     Stimme des Geraets. Kein Zustand, den jemand von Hand umlegen
     muss. */
  var ANBIETER = 'gemini';

  window.amStimmeStart = function (anbieter) {
    if (G.lauf) return;
    G.zustand = 'verbindet'; G.mitschrift = []; G.grund = ''; zeichnen();

    if (G.wachhund) clearTimeout(G.wachhund);
    G.wachhund = setTimeout(function () {
      if (G.lauf || G.zustand !== 'verbindet') return;
      melden('Die Verbindung kommt gerade nicht zustande. Schreib Amanda so lange im Chat \u2014 sie antwortet dort genauso.', true);
    }, 25000);

    var karte = null;

    /* Bei Gemini brauchen wir das ElevenLabs-SDK nicht - ein
       Megabyte, das sonst bei jedem Start mitlaeuft. Und das Mikrofon
       holt sich amanda-gemini.js selbst, direkt nach dem Klick. */
    var erst = ((anbieter || ANBIETER) === 'gemini')
      ? Promise.resolve()
      : sdkLaden().then(function () {
          return navigator.mediaDevices.getUserMedia({ audio: true });
        }).then(function (strom) {
          strom.getTracks().forEach(function (t) { t.stop(); });
        });

    erst
      .then(function () {
        return ruf({ quelle: 'sprechen', thema: '', anbieter: (anbieter || ANBIETER) });
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
          onConnect:    function () {
            if (G.wachhund) { clearTimeout(G.wachhund); G.wachhund = null; }
            G.start = Date.now(); G.zustand = 'hoert'; zeichnen(); uhrAn(); pegelAn();
          },
          onDisconnect: function (d) {
            /* Den Grund festhalten, BEVOR aufgeraeumt wird. Der SDK
               legt ihn je nach Fassung anders ab. */
            try {
              G.grund = (d && (d.reason || d.message
                        || (d.details && (d.details.reason || d.details.message)))) || '';
              if (!G.grund && d) G.grund = JSON.stringify(d).slice(0, 300);
            } catch (e) {}
            aufraeumen(false);
          },
          onError: function (e) {
            try { G.grund = String((e && e.message) || e).slice(0, 300); } catch (x) {}
            melden(String((e && e.message) || e));
          },
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
        /* Gemini laeuft ueber amanda-gemini.js: eigene Leitung,
           eigenes Audio, dieselbe Oberflaeche. */
        if (karte.art === 'gemini') {
          if (!window.AMGEMINI) throw new Error('gemini_fehlt');
          return window.AMGEMINI.start(karte, function (was, wert) {
            if (was === 'hoert')   { G.zustand = 'hoert';   zeichnen(); return; }
            if (was === 'spricht') { G.zustand = 'spricht'; zeichnen(); return; }
            if (was === 'du' || was === 'am') { sagen(was, wert); return; }
            if (was === 'zu') { G.grund = String(wert || ''); aufraeumen(false); }
          }).then(function () {
            if (G.wachhund) { clearTimeout(G.wachhund); G.wachhund = null; }
            G.lauf = { gemini: true,
                       setMicMuted: function (an) { window.AMGEMINI.stumm(an); },
                       endSession:  function () { window.AMGEMINI.ende(); },
                       getId: function () { return ''; } };
            G.start = Date.now(); G.zustand = 'hoert'; zeichnen(); uhrAn(); pegelAn();
            return G.lauf;
          });
        }

        if (karte.art === 'webrtc') { o.conversationToken = karte.ticket; o.connectionType = 'webrtc'; }
        else { o.signedUrl = karte.ticket; }

        return window.ElevenLabsClient.Conversation.startSession(o);
      })
      .then(function (unterhaltung) { G.lauf = unterhaltung; })
      .catch(function (e) {
        if (G.wachhund) { clearTimeout(G.wachhund); G.wachhund = null; }
        var m = String((e && e.message) || e);
        /* Der Gemini-Schluessel fehlt noch? Dann einmal still den
           alten Weg versuchen, statt der Schuelerin zu sagen, es
           ginge nicht. Nur einmal - sonst drehen wir uns im Kreis. */
        if (m === 'nicht_eingerichtet' && (anbieter || ANBIETER) === 'gemini') {
          G.zustand = 'aus';
          return window.amStimmeStart('eleven');
        }
        if (m === 'nicht_eingerichtet') return melden('Sprechen ist noch nicht freigeschaltet. Schreib Amanda so lange im Chat — sie antwortet dort genauso.', true);
        if (m === 'gemini_fehlt') return melden('Das Sprechen konnte nicht geladen werden. Lade die Seite bitte neu.', true);
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
    if (G.wachhund) { clearTimeout(G.wachhund); G.wachhund = null; }
    var sek = G.start ? Math.round((Date.now() - G.start) / 1000) : 0;
    var sofortWeg = (G.start > 0 && sek < 5 && !wegenZeit);
    var grund = G.grund;
    var id = G.zeile, lauf = G.lauf;
    var gespraechId = '';
    try { gespraechId = (lauf && lauf.getId && lauf.getId()) || ''; } catch (e) {}

    G.lauf = null; G.zeile = null; G.start = 0; G.stumm = false;
    if (sek) G.hatte = true;
    G.zustand = 'aus';
    uhrAus();
    pegelAus();
    /* Den letzten Satz nicht im Stapel liegen lassen. */
    if (window.AmandaMitschrift) {
      try { window.AmandaMitschrift.spuelen(); } catch (e) {}
      setTimeout(archivFrischen, 1200);
    }
    var u = el('asUhr'); if (u) u.textContent = sek ? 'Das Gespräch hat ' + mmss(sek) + ' gedauert.' : '';
    zeichnen();
    /* Die Leitung ging sofort wieder zu. Das liegt nicht am Mikrofon
       und nicht am Netz der Schuelerin — sie soll nicht glauben, sie
       haette etwas falsch gemacht. */
    if (sofortWeg) {
      melden('Amanda konnte das Gespräch gerade nicht annehmen. Das liegt nicht an dir — '
             + 'wir kümmern uns darum. Schreib ihr so lange im Chat, dort antwortet sie wie immer.', true);
    }
    if (wegenZeit) {
      var z = el('asZustand');
      if (z) z.textContent = 'Deine Sprechminuten für diesen Monat sind aufgebraucht.';
    }

    if (id) ruf({ aktion: 'ende', gespraech: id, sekunden: sek,
                  gespraech_id: gespraechId, grund: grund })
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
      /* Dieselbe Welt wie der Lernraum: haarfeine Linien, Licht
         statt versetztem Klotz, Petrol als Akzent, Rot nur fuer
         den einen Knopf, der zaehlt. */
      '#v-amandasprechen{max-width:760px;margin:0 auto;',
      '  --as-ink:var(--tinte,#1D1B18);--as-soft:var(--text-soft,#5C574C);',
      '  --as-line:var(--linie,#E7ECEE);--as-teal:var(--tuerkis,#4FB3AE);',
      '  --as-teal-d:var(--tuerkis-dunkel,#0E7C7B);--as-teal-soft:var(--tuerkis-hauch,#DCEFEC);',
      '  --as-paper:var(--karte,#fff);--as-creme:var(--creme,#F6F9FA);',
      '  --as-rot:var(--rot,#D42A21);',
      '  --as-schatten:var(--schatten,0 1px 2px rgba(29,27,24,.05),0 8px 24px -12px rgba(29,27,24,.18))}',
      /* Kopf */
      '.as-kopf{display:flex;align-items:flex-start;gap:12px;margin:0 0 18px}',
      '.as-zurueck{flex:0 0 auto;width:44px;height:44px;border-radius:999px;',
      '  border:1px solid var(--as-line);background:var(--as-paper);color:var(--as-ink);',
      '  font-size:19px;cursor:pointer;transition:border-color .15s,background .15s}',
      '.as-zurueck:hover{border-color:var(--as-teal-d);background:var(--as-teal-soft)}',
      '.as-eb{display:block;font-family:var(--schrift-marker,"Caveat",cursive);',
      '  color:var(--as-teal-d);font-size:19px;line-height:1.1;margin-bottom:1px}',
      '.as-kopf h2{font-family:var(--schrift-titel,"Caveat Brush",cursive);font-weight:400;',
      '  font-size:clamp(27px,4.6vw,36px);margin:0 0 5px;line-height:1.05;color:var(--as-ink)}',
      '.as-kopf p{margin:0;color:var(--as-soft);font-size:14.5px;line-height:1.5;max-width:46ch}',
      /* Die Buehne — hier steht Amanda */
      '.as-buehne{--laut:0;position:relative;overflow:hidden;',
      '  display:flex;flex-direction:column;align-items:center;gap:13px;text-align:center;',
      '  background:radial-gradient(130% 78% at 50% 2%,var(--as-teal-soft) 0%,rgba(220,239,236,0) 64%),',
      '    linear-gradient(170deg,var(--as-creme),var(--as-paper));',
      '  border:1px solid var(--as-line);border-radius:18px;',
      '  box-shadow:var(--as-schatten);padding:24px 20px}',
      /* Die Figur */
      '.as-figur{position:relative;width:min(280px,74vw);height:206px;',
      '  display:flex;align-items:flex-end;justify-content:center}',
      '.as-figur img{position:relative;z-index:2;height:202px;width:auto;max-width:100%;',
      '  object-fit:contain;object-position:center bottom;',
      '  filter:drop-shadow(0 10px 18px rgba(29,27,24,.14));',
      '  transform:translateY(calc(var(--laut) * -5px)) scale(calc(1 + var(--laut) * .028));',
      '  transition:transform .09s linear}',
      '.as-rein{animation:asRein .42s cubic-bezier(.2,.9,.3,1.1)}',
      '@keyframes asRein{from{opacity:0;transform:translateY(9px) scale(.97)}to{opacity:1}}',
      /* Aura: ein weicher Schein und ein feiner Ring, beide am Pegel */
      '.as-aura{position:absolute;left:50%;bottom:8px;border-radius:999px;',
      '  pointer-events:none;z-index:1}',
      '.as-aura.a1{width:184px;height:184px;margin-left:-92px;',
      '  background:radial-gradient(circle,rgba(79,179,174,.34),rgba(79,179,174,0) 70%);',
      '  transform:scale(calc(.86 + var(--laut) * .38));transition:transform .09s linear}',
      '.as-aura.a2{width:242px;height:242px;margin-left:-121px;',
      '  border:1px dashed rgba(14,124,123,.42);',
      '  opacity:calc(.32 + var(--laut) * .55);',
      '  transform:scale(calc(.94 + var(--laut) * .13));',
      '  transition:transform .09s linear,opacity .12s linear}',
      '.as-buehne.aus .as-aura,.as-buehne.fehler .as-aura{opacity:.15}',
      '.as-buehne.hoert .as-aura.a2,.as-buehne.spricht .as-aura.a2{animation:asDreh 28s linear infinite}',
      '.as-buehne.verbindet .as-aura.a2{animation:asDreh 7s linear infinite}',
      '@keyframes asDreh{to{rotate:360deg}}',
      '.as-buehne.fehler .as-aura.a2{border-color:rgba(212,42,33,.38)}',
      /* Pegelbalken: man sieht, wer gerade redet */
      '.as-eq{display:flex;align-items:flex-end;gap:5px;height:24px;margin-top:-4px}',
      '.as-eq i{width:4px;height:100%;border-radius:999px;transform-origin:50% 100%;',
      '  background:linear-gradient(180deg,var(--as-teal),var(--as-teal-d));',
      '  transform:scaleY(calc(.1 + var(--laut) * var(--f)));transition:transform .08s linear}',
      '.as-buehne.aus .as-eq,.as-buehne.fehler .as-eq{opacity:.2}',
      '.as-buehne.verbindet .as-eq i{animation:asWipp .9s ease-in-out infinite alternate;',
      '  animation-delay:var(--v)}',
      '@keyframes asWipp{from{transform:scaleY(.12)}to{transform:scaleY(.58)}}',
      /* Text und Uhr */
      '.as-zustand{margin:0;font-size:16.5px;font-weight:700;line-height:1.35;max-width:32ch}',
      '.as-uhr{margin:0;color:var(--as-soft);font-size:13.5px;',
      '  font-variant-numeric:tabular-nums;min-height:18px}',
      /* Knoepfe */
      '.as-knoepfe{display:flex;gap:10px;flex-wrap:wrap;justify-content:center;margin-top:2px}',
      '.as-los,.as-auf,.as-neben{font:inherit;font-weight:700;cursor:pointer;border-radius:12px;',
      '  display:inline-flex;align-items:center;justify-content:center;gap:9px;',
      '  transition:background .15s,border-color .15s,transform .1s,box-shadow .15s}',
      '.as-los{font-size:16px;padding:14px 28px;min-height:52px;color:#fff;border:1px solid transparent;',
      '  background:var(--as-rot);box-shadow:0 6px 18px -10px rgba(212,42,33,.8)}',
      '.as-los:hover{background:#B4231B;box-shadow:0 10px 24px -12px rgba(212,42,33,.9)}',
      '.as-los:active{transform:translateY(1px)}',
      '.as-los[disabled]{opacity:.55;cursor:default;transform:none;box-shadow:none}',
      '.as-los .as-mik{font-size:19px;line-height:1}',
      '.as-neben{font-size:15px;padding:12px 20px;min-height:48px;background:var(--as-paper);',
      '  color:var(--as-ink);border:1px solid var(--as-line)}',
      '.as-neben:hover{border-color:var(--as-teal-d);background:var(--as-teal-soft)}',
      '.as-neben.an{background:var(--as-teal-soft);border-color:var(--as-teal-d);color:var(--as-teal-d)}',
      '.as-auf{font-size:15px;padding:12px 22px;min-height:48px;background:var(--as-rot);',
      '  color:#fff;border:1px solid transparent}',
      '.as-auf:hover{background:#B4231B}',
      /* Die Mitschrift des laufenden Gespraechs */
      '.as-mit{margin-top:20px;max-height:360px;overflow-y:auto}',
      '.as-h3{font-family:var(--schrift-marker,"Caveat",cursive);font-size:20px;',
      '  margin:0 0 8px;color:var(--as-teal-d);font-weight:400}',
      '.as-z{display:flex;flex-direction:column;gap:2px;background:var(--as-paper);',
      '  border:1px solid var(--as-line);border-radius:14px;padding:11px 14px;margin-bottom:8px;',
      '  animation:asZRein .3s ease-out}',
      '@keyframes asZRein{from{opacity:0;transform:translateY(6px)}}',
      '.as-z.am{background:var(--as-teal-soft);border-color:transparent}',
      '.as-z b{font-size:11.5px;font-weight:800;letter-spacing:.05em;text-transform:uppercase;',
      '  color:var(--as-soft)}',
      '.as-z.am b{color:var(--as-teal-d)}',
      '.as-z span{font-size:15px;line-height:1.55;overflow-wrap:anywhere}',
      /* Die Mitschrift von frueher */
      '.as-archiv{margin-top:18px;background:var(--as-paper);border:1px solid var(--as-line);',
      '  border-radius:18px;overflow:hidden}',
      '.as-archiv[open]{box-shadow:var(--as-schatten)}',
      '.as-archiv>summary{display:flex;align-items:center;gap:10px;flex-wrap:wrap;',
      '  cursor:pointer;list-style:none;padding:15px 18px;min-height:54px}',
      '.as-archiv>summary::-webkit-details-marker{display:none}',
      '.as-archiv>summary b{font-family:var(--schrift-titel,"Caveat Brush",cursive);',
      '  font-weight:400;font-size:20px}',
      '.as-archiv>summary span{font-size:13px;color:var(--as-soft)}',
      '.as-archiv>summary::after{content:"+";margin-left:auto;font-size:20px;',
      '  font-weight:700;color:var(--as-teal-d)}',
      '.as-archiv[open]>summary::after{content:"\\2013"}',
      '.as-archiv[open]>summary{border-bottom:1px solid var(--as-line)}',
      '.as-archiv-in{padding:16px 18px 18px}',
      '.as-fuss{margin:18px 0 0;color:var(--as-soft);font-size:13px;line-height:1.6;text-align:center}',
      /* Am Handy */
      '@media(max-width:620px){',
      '  .as-buehne{padding:20px 14px;border-radius:16px}',
      '  .as-figur{height:162px;width:min(220px,72vw)}',
      '  .as-figur img{height:158px}',
      '  .as-aura.a1{width:142px;height:142px;margin-left:-71px}',
      '  .as-aura.a2{width:186px;height:186px;margin-left:-93px}',
      '  .as-zustand{font-size:15.5px}',
      '  .as-knoepfe{width:100%}',
      '  .as-los{width:100%;padding:14px 18px}',
      '  .as-neben,.as-auf{flex:1;padding:12px 10px;min-height:48px}',
      '  .as-mit{max-height:none}',
      '  .as-archiv-in{padding:14px}',
      '}',
      '@media(prefers-reduced-motion:reduce){',
      '  .as-aura,.as-eq i,.as-figur img,.as-rein,.as-z{animation:none!important;',
      '    transition:none!important;transform:none!important}',
      '}'
    ].join('\n');
    document.head.appendChild(s);
  }


  /* ============================================================
     Der freie Weg: das Gerät hört zu, das Gerät spricht

     Julia, 3.11.2026: "wir müssen das reparieren oder einen anderen
     Anbieter finden, der zuverlässig funktioniert und kostenlos ist."

     Einen Anbieter, der beides ist, gibt es nicht — jeder rechnet pro
     Minute ab. Was es gibt, ist der Browser selbst: er kann zuhören
     (Spracherkennung) und vorlesen (Sprachausgabe), beides kostenlos
     und ohne fremdes Konto. Amandas Verstand bleibt derselbe wie im
     Chat (api/amanda-chat).

     Ehrlich zu den Grenzen, damit niemand überrascht wird:
       - Die Stimme ist die des Geräts, NICHT Julias Stimme.
       - Man kann Amanda nicht ins Wort fallen; sie redet zu Ende.
       - Firefox kann keine Spracherkennung. Safari erst ab iOS 14.5.
     Dafür kostet es nichts und fällt nie wegen eines fremden Kontos
     aus. Deshalb ist es der Rückfall, nicht der Hauptweg.
     ============================================================ */
  var F = { hoerer: null, laeuft: false, denkt: false, stimme: null, verlauf: [] };

  function freiMoeglich() {
    return !!(window.SpeechRecognition || window.webkitSpeechRecognition)
        && !!window.speechSynthesis;
  }

  /* Eine deutsche Stimme aussuchen. Die Liste kommt bei manchen
     Browsern erst verzögert, deshalb fragen wir bei jedem Satz neu. */
  function deutscheStimme() {
    if (F.stimme) return F.stimme;
    var alle = [];
    try { alle = window.speechSynthesis.getVoices() || []; } catch (e) {}
    var de = alle.filter(function (v) { return /^de(-|_|$)/i.test(v.lang || ''); });
    if (!de.length) return null;
    /* Eine weibliche Stimme, wenn es sie gibt — Amanda ist eine Frau. */
    var lieb = de.filter(function (v) { return /anna|petra|katja|marlene|female|weib/i.test(v.name || ''); });
    F.stimme = lieb[0] || de[0];
    return F.stimme;
  }

  function vorlesen(text) {
    return new Promise(function (fertig) {
      if (!text) return fertig();
      var sp;
      try {
        window.speechSynthesis.cancel();
        sp = new SpeechSynthesisUtterance(text);
      } catch (e) { return fertig(); }
      var st = deutscheStimme();
      if (st) sp.voice = st;
      sp.lang = (st && st.lang) || 'de-DE';
      sp.rate = 0.96;
      var schonFertig = false;
      function raus() { if (!schonFertig) { schonFertig = true; fertig(); } }
      sp.onend = raus;
      sp.onerror = raus;
      /* Sicherheitsnetz: manche Geräte melden das Ende nie. */
      setTimeout(raus, Math.min(45000, 2500 + text.length * 90));
      try { window.speechSynthesis.speak(sp); } catch (e) { raus(); }
    });
  }

  function hoererBauen() {
    var SR = window.SpeechRecognition || window.webkitSpeechRecognition;
    var h = new SR();
    h.lang = 'de-DE';
    h.interimResults = true;
    h.continuous = false;
    h.maxAlternatives = 1;

    h.onresult = function (ev) {
      var fertig = '', vorlaeufig = '';
      for (var i = ev.resultIndex; i < ev.results.length; i++) {
        var t = ev.results[i][0].transcript;
        if (ev.results[i].isFinal) fertig += t; else vorlaeufig += t;
      }
      if (vorlaeufig && !fertig) {
        var z = el('asZustand');
        if (z) z.textContent = '… ' + vorlaeufig;
      }
      if (fertig.trim()) antworten(fertig.trim());
    };

    h.onerror = function (ev) {
      var art = (ev && ev.error) || '';
      if (art === 'no-speech' || art === 'aborted') return;   /* einfach nichts gesagt */
      if (art === 'not-allowed' || art === 'service-not-allowed') {
        freiEnde();
        return melden('Ich darf das Mikrofon nicht benutzen. Erlaub es bitte im Browser und versuch es noch einmal.', true);
      }
      freiEnde();
      melden('Das Zuhören hat gerade nicht geklappt. Versuch es noch einmal — oder schreib Amanda im Chat.', true);
    };

    /* Nach jeder Pause neu anfangen, solange das Gespräch läuft.
       continuous=true halten viele Browser nicht durch. */
    h.onend = function () {
      if (F.laeuft && !F.denkt) { try { h.start(); } catch (e) {} }
    };
    return h;
  }

  function antworten(gesagt) {
    sagen('du', gesagt);
    F.verlauf.push({ wer: 'du', text: gesagt });
    F.denkt = true;
    try { F.hoerer.abort(); } catch (e) {}
    G.zustand = 'spricht'; zeichnen();
    var z = el('asZustand'); if (z) z.textContent = 'Amanda denkt nach …';

    token().then(function (t) {
      return fetch('/api/amanda-chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Authorization: 'Bearer ' + t },
        body: JSON.stringify({ verlauf: F.verlauf.slice(-12) })
      });
    })
    .then(function (r) { return r.json(); })
    .then(function (j) {
      if (!j || !j.ok || !j.text) throw new Error('keine Antwort');
      F.verlauf.push({ wer: 'am', text: j.text });
      sagen('am', j.text);
      return vorlesen(j.text);
    })
    .catch(function () {
      var t = 'Entschuldige, da ist etwas dazwischengekommen. Sag es bitte noch einmal.';
      sagen('am', t);
      return vorlesen(t);
    })
    .then(function () {
      F.denkt = false;
      if (!F.laeuft) return;
      G.zustand = 'hoert'; zeichnen();
      try { F.hoerer.start(); } catch (e) {}
    });
  }

  window.amFreiStart = function () {
    if (F.laeuft || G.lauf) return;
    if (!freiMoeglich()) {
      return melden('Dieser Browser kann noch nicht zuhören. In Chrome oder Safari geht es — '
                    + 'oder schreib Amanda im Chat, dort antwortet sie wie immer.', true);
    }
    /* Die Stimmen laden bei manchen Browsern erst nach dem ersten
       Zugriff. Also jetzt schon einmal anstossen. */
    try { window.speechSynthesis.getVoices(); } catch (e) {}
    F.verlauf = []; F.denkt = false; F.laeuft = true;
    G.modus = 'frei'; G.mitschrift = []; G.hatte = true;
    try { F.hoerer = hoererBauen(); } catch (e) {
      F.laeuft = false;
      return melden('Dieser Browser kann noch nicht zuhören. Schreib Amanda im Chat.', true);
    }
    G.zustand = 'hoert'; zeichnen();
    var z = el('asZustand'); if (z) z.textContent = 'Ich höre dir zu — sprich einfach los.';
    /* Der erste Satz kommt von Amanda, damit es sich wie ein Gespräch
       anfühlt und nicht wie ein Diktiergerät. */
    vorlesen('Hallo! Schön, dass du da bist. Erzähl mir einfach, was du möchtest.');
    try { F.hoerer.start(); } catch (e) {}
  };

  window.amFreiEnde = function () { freiEnde(); };

  function freiEnde() {
    F.laeuft = false; F.denkt = false;
    try { F.hoerer && F.hoerer.abort(); } catch (e) {}
    try { window.speechSynthesis.cancel(); } catch (e) {}
    F.hoerer = null;
    G.modus = 'live';
    G.zustand = 'aus';
    zeichnen();
    if (window.AmandaMitschrift) { try { window.AmandaMitschrift.spuelen(); } catch (e) {} }
  }

  window.AMSTIMME = { start: window.amStimmeStart, ende: window.amStimmeEnde,
                       frei: window.amFreiStart, freiEnde: window.amFreiEnde };
})();
