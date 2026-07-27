/* ============================================================
   deutschoderwas — Stimmen
   Gemeinsame Sprachausgabe für Plattform und App.

   Drei Dinge machen den Unterschied zwischen „Roboter" und „Mensch":
     1. Die richtige Stimme. Auf iPhone und Mac gibt es sehr gute
        deutsche Stimmen, sie müssen aber einmal geladen werden.
     2. Keine verbogene Tonhöhe. Sobald man am Pitch dreht, klingt
        jede Stimme blechern. Sprecher unterscheiden wir über die
        Stimmenauswahl, nicht über Verzerrung.
     3. Satz für Satz sprechen, mit echten Pausen dazwischen.
        Lange Texte am Stück brechen auf dem Handy ab — daher
        das Abgehackte.

   window.sagen(text, {rolle, langsam, fertig, aufElement})
   window.rollenStimme(rolle) · window.stimmenBereit(fn)
   window.stimmenGut()        -> ist eine gute Stimme da?
   window.stimmenHinweis()    -> Anleitung zum Nachladen (nur einmal)
   ============================================================ */
(function () {
  'use strict';

  var ALLE = [], DE = [], bereit = false, warteschlange = [];

  /* Die wirklich guten Stimmen zuerst. „Premium" und „Enhanced" sind
     die hochwertigen Varianten von Apple, sie klingen fast menschlich. */
  var SEHR_GUT = [
    'Anna (Premium)', 'Anna (Erweitert)', 'Anna (Enhanced)',
    'Petra (Premium)', 'Petra (Erweitert)', 'Petra (Enhanced)',
    'Markus (Premium)', 'Markus (Erweitert)', 'Markus (Enhanced)',
    'Yannick (Premium)', 'Yannick (Erweitert)', 'Yannick (Enhanced)',
    'Helena (Premium)', 'Helena (Erweitert)',
    'Viktor (Premium)', 'Viktor (Erweitert)',
    'Google Deutsch', 'Microsoft Katja', 'Microsoft Conrad', 'Microsoft Amala'
  ];
  var WEIBLICH = ['Anna', 'Petra', 'Helena', 'Katja', 'Marlene', 'Amala', 'Vicki', 'Sandy', 'Google Deutsch'];
  var MAENNLICH = ['Markus', 'Yannick', 'Conrad', 'Viktor', 'Stefan', 'Reed', 'Rocko', 'Eddy', 'Daniel'];

  function trifft(v, liste) {
    for (var i = 0; i < liste.length; i++) if (v.name.indexOf(liste[i]) >= 0) return i;
    return -1;
  }
  function istGut(v) { return trifft(v, SEHR_GUT) >= 0; }
  function istWeiblich(v) { return trifft(v, WEIBLICH) >= 0; }
  function istMaennlich(v) { return trifft(v, MAENNLICH) >= 0; }

  function laden() {
    try { ALLE = window.speechSynthesis.getVoices() || []; } catch (e) { ALLE = []; }
    DE = ALLE.filter(function (v) { return /^de([-_]|$)/i.test(v.lang || ''); });
    DE.sort(function (a, b) {
      var ga = trifft(a, SEHR_GUT), gb = trifft(b, SEHR_GUT);
      if ((ga >= 0) !== (gb >= 0)) return ga >= 0 ? -1 : 1;
      if (ga >= 0 && gb >= 0 && ga !== gb) return ga - gb;
      if (a.localService !== b.localService) return a.localService ? -1 : 1;
      return String(a.name).localeCompare(String(b.name));
    });
    if (DE.length && !bereit) {
      bereit = true;
      warteschlange.splice(0).forEach(function (f) { try { f(); } catch (e) { } });
    }
  }

  if ('speechSynthesis' in window) {
    laden();
    window.speechSynthesis.onvoiceschanged = laden;
    setTimeout(laden, 350); setTimeout(laden, 1400); setTimeout(laden, 3000);
  }

  window.stimmenBereit = function (fn) { bereit ? fn() : warteschlange.push(fn); };
  window.stimmenListe = function () {
    return DE.map(function (v) { return v.name + '  ·  ' + (istGut(v) ? 'gut' : 'einfach'); });
  };
  window.stimmenGut = function () { return DE.some(istGut); };

  /* ---------- Rollen ---------- */
  var VERGEBEN = {}, ZAEHLER = 0;

  function ersteFreie(liste, benutzt) {
    for (var i = 0; i < liste.length; i++) if (benutzt.indexOf(liste[i]) < 0) return liste[i];
    return null;
  }

  window.rollenStimme = function (rolle) {
    rolle = rolle || 'julia';
    if (VERGEBEN[rolle]) return VERGEBEN[rolle];

    var w = DE.filter(istWeiblich), m = DE.filter(istMaennlich);
    var benutzt = Object.keys(VERGEBEN).map(function (k) { return VERGEBEN[k].v; });
    var v = null;

    if (rolle === 'julia') {
      v = w[0] || DE[0] || null;
    } else if (rolle === 'amanda') {
      v = ersteFreie(w, benutzt) || w[0] || DE[0] || null;
    } else if (rolle === 'du') {
      v = ersteFreie(m, benutzt) || ersteFreie(w, benutzt) || ersteFreie(DE, benutzt) || DE[0] || null;
    } else {
      var gerade = (ZAEHLER++ % 2) === 0;
      v = ersteFreie(gerade ? w : m, benutzt) || ersteFreie(gerade ? m : w, benutzt)
        || ersteFreie(DE, benutzt) || DE[0] || null;
    }

    /* Tonhöhe bleibt neutral — daran zu drehen klingt sofort künstlich.
       Nur wenn das Gerät wirklich bloss EINE deutsche Stimme hat, müssen
       wir sie leicht verstellen, sonst klingt ein Dialog nach einer Person.
       Selbst dann bleiben wir vorsichtig. */
    var pitch = 1.0, rate = 0.97;
    if (DE.length < 2 && rolle !== 'julia') {
      if (rolle === 'amanda') { pitch = 1.06; rate = 0.98; }
      else if (rolle === 'du') { pitch = 0.94; rate = 0.95; }
      else { var n = Object.keys(VERGEBEN).length; pitch = (n % 2 === 0) ? 1.06 : 0.94; }
    }

    VERGEBEN[rolle] = { v: v, pitch: pitch, rate: rate };
    return VERGEBEN[rolle];
  };

  window.rollenZuruecksetzen = function (nurDialog) {
    if (nurDialog) {
      Object.keys(VERGEBEN).forEach(function (k) {
        if (['julia', 'amanda', 'du'].indexOf(k) < 0) delete VERGEBEN[k];
      });
      ZAEHLER = 0;
    } else { VERGEBEN = {}; ZAEHLER = 0; }
  };

  /* ---------- Sprechen ---------- */
  var laeuft = false, abbrechen = false;

  /* Text in Sätze zerlegen. Lange Stücke bricht die Sprachausgabe auf dem
     Handy gern mittendrin ab — genau das klingt abgehackt. */
  function saetze(t) {
    var roh = String(t).replace(/\s+/g, ' ').trim();
    if (!roh) return [];
    var teile = roh.match(/[^.!?…]+[.!?…]+["»)]?|[^.!?…]+$/g) || [roh];
    var raus = [];
    teile.forEach(function (x) {
      x = x.trim(); if (!x) return;
      // sehr lange Sätze zusätzlich an Kommas teilen
      if (x.length > 165) {
        var stuecke = x.split(/,\s+/);
        var puffer = '';
        stuecke.forEach(function (st, i) {
          var kandidat = puffer ? puffer + ', ' + st : st;
          if (kandidat.length > 140 && puffer) { raus.push(puffer); puffer = st; }
          else puffer = kandidat;
        });
        if (puffer) raus.push(puffer);
      } else raus.push(x);
    });
    return raus;
  }

  /* Pause nach einem Satz — wie beim echten Sprechen */
  function pause(satz) {
    if (/[!?]$/.test(satz)) return 340;
    if (/[.…]$/.test(satz)) return 300;
    return 190;
  }

  var ttsAudio = null;
  function ttsAus() { return !!(window.SPRECHCLUB_CONFIG && window.SPRECHCLUB_CONFIG.TTS === false); }

  /* ------------------------------------------------------------
     Fertige Aufnahmen in Julias Stimme

     Fuer die feststehenden Saetze der Plattform liegen Dateien
     unter ton/. Die sind sofort da, kosten nichts und klingen
     immer gleich. Gibt es zu einem Text keine Aufnahme, geht es
     wie bisher weiter: erst der Vorlese-Dienst, dann das Geraet.
     ------------------------------------------------------------ */
  var tonAudio = null;

  function tonSchluessel(t) {
    return String(t == null ? '' : t).toLowerCase().replace(/\s+/g, ' ').replace(/^ | $/g, '');
  }
  function tonDatei(t) {
    try {
      var v = window.STIMME_DATEIEN; if (!v) return null;
      var id = v[tonSchluessel(t)];
      return id ? ('ton/' + id + '.mp3') : null;
    } catch (e) { return null; }
  }
  function tonStopp() {
    try { if (tonAudio) { tonAudio.pause(); tonAudio.currentTime = 0; } } catch (e) { }
    tonAudio = null;
  }
  /* true, wenn die Aufnahme wirklich startet */
  function tonSagen(datei, text, opt) {
    try {
      abbrechen = false; laeuft = true;
      if (opt.aufElement) opt.aufElement.classList.add('spricht');
      var a = new Audio(datei); tonAudio = a;
      a.playbackRate = opt.langsam ? 0.8 : 1;
      function fertig() {
        if (tonAudio === a) tonAudio = null;
        laeuft = false;
        if (opt.aufElement) opt.aufElement.classList.remove('spricht');
        if (opt.fertig) opt.fertig();
      }
      a.onended = fertig;
      /* Laesst sich die Datei nicht abspielen, uebernimmt der Vorlese-Dienst */
      a.onerror = function () { if (tonAudio === a) tonAudio = null; weiterOhneAufnahme(text, opt); };
      var p = a.play();
      if (p && p.catch) p.catch(function () { if (tonAudio === a) tonAudio = null; weiterOhneAufnahme(text, opt); });
      return true;
    } catch (e) { return false; }
  }
  function weiterOhneAufnahme(text, opt) {
    if (!ttsAus() && typeof fetch === 'function' && navigator.onLine !== false) { ttsSagen(text, opt); return; }
    geraetSagen(text, opt);
  }
  /* Fuer die Anzeige: gibt es zu diesem Satz eine echte Aufnahme? */
  window.echteStimme = function (t) { return !!tonDatei(t); };

  /* Echte Stimme (ElevenLabs) — mit sauberem Rückfall auf die Gerätestimme,
     falls kein Schlüssel gesetzt ist, kein Netz da ist oder etwas schiefgeht. */
  function ttsSagen(text, opt) {
    abbrechen = false; laeuft = true;
    if (opt.aufElement) opt.aufElement.classList.add('spricht');
    function fertig() { laeuft = false; if (opt.aufElement) opt.aufElement.classList.remove('spricht'); if (opt.fertig) opt.fertig(); }
    fetch('/api/tts', {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify({ text: String(text), rolle: opt.rolle || '', langsam: !!opt.langsam })
    })
      .then(function (r) { if (!r.ok) throw 0; return r.json(); })
      .then(function (j) {
        if (abbrechen) { fertig(); return; }
        if (!j || !j.url) { geraetSagen(text, opt); return; }
        var a = new Audio(j.url); ttsAudio = a;
        a.onended = function () { if (ttsAudio === a) ttsAudio = null; fertig(); };
        a.onerror = function () { if (ttsAudio === a) ttsAudio = null; geraetSagen(text, opt); };
        var p = a.play(); if (p && p.catch) p.catch(function () { if (ttsAudio === a) ttsAudio = null; geraetSagen(text, opt); });
      })
      .catch(function () { if (abbrechen) { fertig(); return; } geraetSagen(text, opt); });
  }

  window.sagen = function (text, opt) {
    opt = opt || {};
    if (!text) { if (opt.fertig) opt.fertig(); return; }
    window.sagenStopp();
    var datei = tonDatei(text);
    if (datei && tonSagen(datei, text, opt)) return;
    weiterOhneAufnahme(text, opt);
  };

  function geraetSagen(text, opt) {
    opt = opt || {};
    if (!('speechSynthesis' in window) || !text) { if (opt.fertig) opt.fertig(); return; }

    abbrechen = true;
    try { window.speechSynthesis.cancel(); } catch (e) { }

    function los() {
      abbrechen = false; laeuft = true;
      var st = window.rollenStimme(opt.rolle);
      var teile = saetze(text);
      var i = 0;
      if (opt.aufElement) opt.aufElement.classList.add('spricht');

      function ende() {
        laeuft = false;
        if (opt.aufElement) opt.aufElement.classList.remove('spricht');
        if (opt.fertig) opt.fertig();
      }

      function weiter() {
        if (abbrechen) { ende(); return; }
        if (i >= teile.length) { ende(); return; }
        var satz = teile[i++];
        var u = new SpeechSynthesisUtterance(satz);
        u.lang = 'de-DE';
        u.pitch = st.pitch;
        u.rate = opt.langsam ? Math.max(0.6, st.rate - 0.30) : st.rate;
        if (st.v) u.voice = st.v;
        u.onend = function () { setTimeout(weiter, pause(satz)); };
        u.onerror = function () { setTimeout(weiter, 60); };
        try { window.speechSynthesis.speak(u); }
        catch (e) { setTimeout(weiter, 60); }
      }
      weiter();
    }

    // kurz warten, damit cancel() auf dem Handy wirklich durch ist
    if (bereit) setTimeout(los, 60);
    else window.stimmenBereit(function () { setTimeout(los, 60); });
  }

  window.sagenStopp = function () {
    abbrechen = true; laeuft = false;
    try { if (ttsAudio) { ttsAudio.pause(); ttsAudio.currentTime = 0; } } catch (e) { }
    ttsAudio = null;
    tonStopp();
    try { window.speechSynthesis.cancel(); } catch (e) { }
  };
  window.sagenLaeuft = function () { return laeuft; };

  /* Zwei Menschen im Wechsel */
  window.dialogSprechen = function (zeilen, opt) {
    opt = opt || {};
    var i = 0;
    function weiter() {
      if (i >= zeilen.length) { if (opt.fertig) opt.fertig(); return; }
      var z = zeilen[i++];
      if (opt.beiZeile) opt.beiZeile(z, i - 1);
      window.sagen(z.text, {
        rolle: z.wer, aufElement: z.el,
        fertig: function () { setTimeout(weiter, 480); }
      });
    }
    weiter();
  };

  /* ---------- Hinweis, wenn nur eine einfache Stimme da ist ----------
     Auf dem iPhone sind die guten deutschen Stimmen nicht vorinstalliert.
     Ein Hinweis, einmal, mit dem genauen Weg — das ist der größte
     Sprung in der Klangqualität, den man machen kann. */
  window.stimmenHinweis = function (erzwingen) {
    try { if (!erzwingen && localStorage.getItem('dow_stimmhinweis') === 'weg') return false; } catch (e) { }
    if (!DE.length || window.stimmenGut()) return false;
    if (document.getElementById('stimmHinweis')) return false;

    var ios = /iphone|ipad|ipod/i.test(navigator.userAgent);
    var mac = /macintosh/i.test(navigator.userAgent) && !ios;
    var weg = ios
      ? 'Einstellungen → <b>Bedienungshilfen</b> → Gesprochene Inhalte → <b>Stimmen</b> → Deutsch → <b>Anna (Premium)</b> laden'
      : mac
      ? 'Systemeinstellungen → <b>Bedienungshilfen</b> → Gesprochene Inhalte → Systemstimme → <b>Anpassen</b> → Deutsch → <b>Anna (Premium)</b>'
      : 'In den Systemeinstellungen deines Geräts unter Sprache eine hochwertige deutsche Stimme nachladen';

    var d = document.createElement('div');
    d.id = 'stimmHinweis';
    d.style.cssText = 'position:fixed;left:12px;right:12px;bottom:calc(80px + env(safe-area-inset-bottom));'
      + 'z-index:800;background:#fff;border:1px solid #EBE7DF;border-radius:18px;padding:14px 15px;'
      + 'box-shadow:0 16px 40px -12px rgba(23,23,23,.42);font:400 13.5px/1.5 Inter,system-ui,sans-serif;'
      + 'max-width:480px;margin:0 auto;color:#171717';
    d.innerHTML =
      '<div style="display:flex;gap:11px;align-items:flex-start">'
      + '<span style="font-size:22px;line-height:1">🔊</span>'
      + '<div style="flex:1"><b style="display:block;margin-bottom:4px">Die Stimme klingt blechern?</b>'
      + '<span style="color:#6E6A63">Dein Gerät hat noch die einfache deutsche Stimme. Mit der guten klingt alles fast menschlich:<br>'
      + weg + '</span></div>'
      + '<button style="border:none;background:none;font-size:19px;color:#A19C93;padding:0 4px;cursor:pointer" '
      + 'onclick="try{localStorage.setItem(\'dow_stimmhinweis\',\'weg\')}catch(e){};this.closest(\'#stimmHinweis\').remove()">×</button>'
      + '</div>';
    document.body.appendChild(d);
    return true;
  };
})();
