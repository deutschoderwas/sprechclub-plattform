/* ============================================================
   amanda-gemini.js — Amanda live über Gemini

   Julia, 4.11.2026: "Was haben wir für Alternativen zu ElevenLabs
   weil es sehr teuer bei vielen Mitgliedern wird" — "Gemini Live ist
   gut" — "lass uns das machen."

   Rund 2 Cent in der Minute statt 8 bis 10. Bei hundert Mitgliedern,
   die je eine Stunde im Monat sprechen, sind das etwa 140 Euro statt
   900.

   Der Browser spricht direkt mit Google, aber NIE mit unserem
   Schlüssel: api/amanda-stimme holt eine Eintrittskarte, die eine
   Minute lang gilt und genau einmal benutzt werden darf. Modell,
   Stimme und Amandas Anweisung stehen in der Karte — unterwegs lässt
   sich daran nichts mehr ändern.

   Audio, weil es sonst stumm bleibt:
     hin    roh PCM, 16 Bit, mono, 16 kHz, little endian, base64
     zurück roh PCM, 16 Bit, mono, 24 kHz
   Die Samplerate des Mikrofons legt der Browser fest, nicht wir —
   auf iPhones sind es meist 48 kHz. Deshalb rechnen wir selbst
   herunter, statt uns auf AudioContext({sampleRate}) zu verlassen:
   Safari ignoriert den Wunsch je nach Version stillschweigend, und
   dann klingt Amanda wie ein Kassettenrekorder auf halber Geschwindigkeit.
   ============================================================ */
(function () {
  'use strict';
  if (window.AMGEMINI) return;

  var WS = 'wss://generativelanguage.googleapis.com/ws/'
         + 'google.ai.generativelanguage.v1alpha.GenerativeService.BidiGenerateContentConstrained';

  var EIN_HZ  = 16000;   // was Gemini erwartet
  var AUS_HZ  = 24000;   // was Gemini schickt
  var STUECK  = 2048;    // Puffergröße der Aufnahme

  var G = {
    draht: null,       // die WebSocket-Leitung
    mikro: null,       // MediaStream
    aufCtx: null,      // AudioContext der Aufnahme
    abCtx: null,       // AudioContext der Wiedergabe
    knoten: null,
    quelle: null,
    laeuft: false,
    stumm: false,
    naechste: 0,       // wann das nächste Stück abgespielt wird
    spieler: [],       // laufende Wiedergaben, zum Abbrechen
    aufHand: null      // Rückmeldungen an die Oberfläche
  };

  /* ---------- Werkzeug ---------- */
  function b64Von(bytes) {
    var s = '', i, b = new Uint8Array(bytes);
    for (i = 0; i < b.length; i += 0x8000) {
      s += String.fromCharCode.apply(null, b.subarray(i, i + 0x8000));
    }
    return btoa(s);
  }
  function bytesVon(b64) {
    var roh = atob(b64), n = roh.length, aus = new Uint8Array(n);
    for (var i = 0; i < n; i++) aus[i] = roh.charCodeAt(i);
    return aus;
  }

  /* Float32 in einer beliebigen Rate -> Int16 bei 16 kHz.
     Lineare Interpolation reicht: für Sprache hört man den
     Unterschied zu einem richtigen Filter nicht, und ein Filter in
     JavaScript kostet auf alten Handys mehr, als er bringt. */
  function runterRechnen(ein, vonHz) {
    var faktor = vonHz / EIN_HZ;
    var laenge = Math.round(ein.length / faktor);
    var aus = new Int16Array(laenge);
    for (var i = 0; i < laenge; i++) {
      var stelle = i * faktor;
      var a = Math.floor(stelle), b = Math.min(a + 1, ein.length - 1);
      var w = ein[a] + (ein[b] - ein[a]) * (stelle - a);
      w = Math.max(-1, Math.min(1, w));
      aus[i] = w < 0 ? w * 0x8000 : w * 0x7FFF;
    }
    return aus;
  }

  function melden(was, wert) {
    if (G.aufHand) { try { G.aufHand(was, wert); } catch (e) {} }
  }

  /* ---------- Wiedergabe ----------
     Die Stücke kommen schneller herein, als sie dauern. Also werden
     sie aneinandergereiht statt übereinandergelegt — sonst reden
     mehrere Amandas gleichzeitig. */
  function abspielen(bytes) {
    if (!G.abCtx) return;
    var roh = new Int16Array(bytes.buffer, bytes.byteOffset, bytes.byteLength / 2);
    var puffer = G.abCtx.createBuffer(1, roh.length, AUS_HZ);
    var kanal = puffer.getChannelData(0);
    for (var i = 0; i < roh.length; i++) kanal[i] = roh[i] / 32768;

    var q = G.abCtx.createBufferSource();
    q.buffer = puffer;
    q.connect(G.abCtx.destination);
    var jetzt = G.abCtx.currentTime;
    if (G.naechste < jetzt) G.naechste = jetzt + 0.03;
    q.start(G.naechste);
    G.naechste += puffer.duration;
    G.spieler.push(q);
    q.onended = function () {
      var i = G.spieler.indexOf(q); if (i >= 0) G.spieler.splice(i, 1);
      if (!G.spieler.length) melden('hoert');
    };
    melden('spricht');
  }

  function wiedergabeStoppen() {
    G.spieler.forEach(function (q) { try { q.stop(); } catch (e) {} });
    G.spieler = [];
    G.naechste = 0;
  }

  /* ---------- Anfangen ---------- */
  function start(karte, aufHand) {
    if (G.laeuft) return Promise.resolve();
    G.aufHand = aufHand || null;
    G.laeuft = true;
    G.naechste = 0;

    return navigator.mediaDevices.getUserMedia({
      audio: { echoCancellation: true, noiseSuppression: true, autoGainControl: true }
    }).then(function (strom) {
      G.mikro = strom;

      var AC = window.AudioContext || window.webkitAudioContext;
      G.aufCtx = new AC();
      G.abCtx  = new AC();
      /* iOS startet Audio angehalten; der Klick, der uns hierher
         gebracht hat, erlaubt das Aufwecken. */
      if (G.aufCtx.state === 'suspended') G.aufCtx.resume();
      if (G.abCtx.state  === 'suspended') G.abCtx.resume();

      return new Promise(function (fertig, schief) {
        var d = new WebSocket(WS + '?access_token=' + encodeURIComponent(karte.ticket));
        G.draht = d;
        var offen = false;

        d.onopen = function () {
          offen = true;
          /* Nur das Modell: alles andere steht in der Karte und darf
             hier nicht noch einmal gesetzt werden. */
          d.send(JSON.stringify({ setup: { model: 'models/' + (karte.modell || '') } }));
          leitungAnzapfen();
          melden('hoert');
          fertig();
        };

        d.onmessage = function (ev) {
          var text = ev.data;
          if (text instanceof Blob) { text.text().then(verarbeiten); return; }
          verarbeiten(text);
        };

        d.onerror = function () {
          if (!offen) schief(new Error('verbindung'));
        };

        d.onclose = function (ev) {
          var grund = (ev && (ev.reason || ev.code)) || '';
          G.laeuft = false;
          melden('zu', String(grund));
          aufraeumen();
        };
      });
    });
  }

  function verarbeiten(roh) {
    var n;
    try { n = JSON.parse(roh); } catch (e) { return; }

    var sc = n.serverContent;
    if (!sc) return;

    /* Dazwischengeredet: was noch in der Leitung liegt, ist überholt. */
    if (sc.interrupted) { wiedergabeStoppen(); melden('hoert'); }

    if (sc.inputTranscription && sc.inputTranscription.text) {
      melden('du', sc.inputTranscription.text);
    }
    if (sc.outputTranscription && sc.outputTranscription.text) {
      melden('am', sc.outputTranscription.text);
    }

    var teile = sc.modelTurn && sc.modelTurn.parts;
    if (teile && teile.length) {
      for (var i = 0; i < teile.length; i++) {
        var d = teile[i].inlineData;
        if (d && d.data) abspielen(bytesVon(d.data));
      }
    }
  }

  /* ---------- Mikrofon anzapfen ----------
     ScriptProcessor ist veraltet, aber er läuft überall, auch auf
     älteren iPhones. Ein AudioWorklet wäre sauberer und würde genau
     dort nicht laufen, wo die Schülerinnen sitzen. */
  function leitungAnzapfen() {
    G.quelle = G.aufCtx.createMediaStreamSource(G.mikro);
    G.knoten = G.aufCtx.createScriptProcessor(STUECK, 1, 1);
    G.knoten.onaudioprocess = function (ev) {
      if (!G.laeuft || G.stumm) return;
      if (!G.draht || G.draht.readyState !== 1) return;
      var ein = ev.inputBuffer.getChannelData(0);
      var klein = runterRechnen(ein, G.aufCtx.sampleRate);
      G.draht.send(JSON.stringify({
        realtimeInput: {
          audio: { data: b64Von(klein.buffer), mimeType: 'audio/pcm;rate=' + EIN_HZ }
        }
      }));
    };
    G.quelle.connect(G.knoten);
    /* Der Knoten muss irgendwo hinführen, sonst arbeitet er nicht —
       aber nicht hörbar, sonst hört man sich selbst. */
    var stille = G.aufCtx.createGain();
    stille.gain.value = 0;
    G.knoten.connect(stille);
    stille.connect(G.aufCtx.destination);
  }

  function aufraeumen() {
    wiedergabeStoppen();
    try { G.knoten && (G.knoten.onaudioprocess = null); } catch (e) {}
    try { G.quelle && G.quelle.disconnect(); } catch (e) {}
    try { G.knoten && G.knoten.disconnect(); } catch (e) {}
    try { G.mikro && G.mikro.getTracks().forEach(function (t) { t.stop(); }); } catch (e) {}
    try { G.aufCtx && G.aufCtx.close(); } catch (e) {}
    try { G.abCtx && G.abCtx.close(); } catch (e) {}
    G.knoten = null; G.quelle = null; G.mikro = null;
    G.aufCtx = null; G.abCtx = null; G.draht = null;
    G.laeuft = false; G.stumm = false;
  }

  function ende() {
    G.laeuft = false;
    try { G.draht && G.draht.close(); } catch (e) {}
    aufraeumen();
  }

  function stumm(an) {
    G.stumm = !!an;
    return G.stumm;
  }

  window.AMGEMINI = { start: start, ende: ende, stumm: stumm, laeuft: function () { return G.laeuft; } };
})();
