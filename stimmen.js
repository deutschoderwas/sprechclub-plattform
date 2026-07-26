/* ============================================================
   deutschoderwas — Stimmen
   Eine gemeinsame Verwaltung für alle Sprachausgabe auf Plattform und App.

   Zwei Ziele:
     1. So menschlich wie möglich klingen — die besten Stimmen zuerst.
     2. In Dialogen hört man zwei verschiedene Menschen, nicht eine Maschine.

   window.sagen(text, {rolle, langsam, fertig, aufElement})
   window.rollenStimme(rolle)   -> {v, pitch, rate}
   window.stimmenBereit(fn)     -> ruft fn, sobald die Stimmen geladen sind
   window.stimmenListe()        -> alle deutschen Stimmen (zum Nachsehen)

   Rollen:
     'julia'    warme Frauenstimme — Lob, Hinweise, die App spricht
     'amanda'   die Gesprächspartnerin im Dialog
     'du'       die Musterantwort der lernenden Person
     'a' / 'b'  die zwei Sprecher in den Kursdialogen
     alles andere wird automatisch abwechselnd verteilt
   ============================================================ */
(function () {
  'use strict';

  var ALLE = [], DE = [], bereit = false, warteschlange = [];

  /* Die Namen sind nach Klangqualität sortiert — oben stehen die,
     die am wenigsten nach Maschine klingen. */
  var GUT_WEIBLICH = [
    'Anna (Premium)', 'Anna (Enhanced)', 'Petra (Premium)', 'Petra (Enhanced)',
    'Helena (Premium)', 'Helena', 'Anna', 'Petra', 'Katja', 'Marlene',
    'Google Deutsch', 'Microsoft Katja', 'Microsoft Hedda', 'Vicki', 'Sandy', 'Grandma'
  ];
  var GUT_MAENNLICH = [
    'Markus (Premium)', 'Markus (Enhanced)', 'Yannick (Premium)', 'Yannick',
    'Markus', 'Conrad', 'Viktor', 'Microsoft Conrad', 'Microsoft Stefan',
    'Reed', 'Rocko', 'Eddy', 'Grandpa', 'Daniel'
  ];

  function rang(v, liste) {
    for (var i = 0; i < liste.length; i++) {
      if (v.name.indexOf(liste[i]) >= 0) return i;
    }
    return 999;
  }
  function istWeiblich(v) { return rang(v, GUT_WEIBLICH) < 999; }
  function istMaennlich(v) { return rang(v, GUT_MAENNLICH) < 999; }

  function laden() {
    try { ALLE = window.speechSynthesis.getVoices() || []; } catch (e) { ALLE = []; }
    DE = ALLE.filter(function (v) { return /^de([-_]|$)/i.test(v.lang || ''); });

    // beste zuerst: bekannte Namen vor unbekannten, lokale vor Netzstimmen
    DE.sort(function (a, b) {
      var ra = Math.min(rang(a, GUT_WEIBLICH), rang(a, GUT_MAENNLICH));
      var rb = Math.min(rang(b, GUT_WEIBLICH), rang(b, GUT_MAENNLICH));
      if (ra !== rb) return ra - rb;
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
    // manche Browser melden die Stimmen erst verspätet
    setTimeout(laden, 400);
    setTimeout(laden, 1600);
  }

  window.stimmenBereit = function (fn) {
    if (bereit) { try { fn(); } catch (e) { } } else warteschlange.push(fn);
  };
  window.stimmenListe = function () {
    return DE.map(function (v) { return v.name + '  ·  ' + v.lang + (v.localService ? '  (auf dem Gerät)' : '  (aus dem Netz)'); });
  };

  /* ---------- Rollen ---------- */
  var VERGEBEN = {};   // rolle -> {v, pitch, rate}
  var ZAEHLER = 0;

  function erste(liste, ausser) {
    for (var i = 0; i < liste.length; i++) {
      if (ausser.indexOf(liste[i]) < 0) return liste[i];
    }
    return null;
  }

  window.rollenStimme = function (rolle) {
    rolle = rolle || 'julia';
    if (VERGEBEN[rolle]) return VERGEBEN[rolle];

    var weiblich = DE.filter(istWeiblich);
    var maennlich = DE.filter(istMaennlich);
    var schonBenutzt = Object.keys(VERGEBEN).map(function (k) { return VERGEBEN[k].v; });

    var v = null, pitch = 1.0, rate = 0.94;

    if (rolle === 'julia' || rolle === 'amanda') {
      // warm, weiblich, ruhig — die Stimme, die die App spricht
      v = erste(weiblich, rolle === 'amanda' ? schonBenutzt : []) || weiblich[0] || DE[0] || null;
      pitch = rolle === 'amanda' ? 1.06 : 1.02;
      rate = rolle === 'amanda' ? 0.95 : 0.93;
    } else if (rolle === 'du') {
      // die zweite Person — bewusst anders als Amanda
      v = erste(maennlich, schonBenutzt) || erste(weiblich, schonBenutzt) || erste(DE, schonBenutzt) || DE[0] || null;
      pitch = 0.92; rate = 0.92;
    } else {
      // Kursdialoge: abwechselnd weiblich und männlich
      var gerade = (ZAEHLER++ % 2) === 0;
      var wunsch = gerade ? weiblich : maennlich;
      var andere = gerade ? maennlich : weiblich;
      v = erste(wunsch, schonBenutzt) || erste(andere, schonBenutzt) || erste(DE, schonBenutzt) || DE[0] || null;
      pitch = gerade ? 1.05 : 0.90;
      rate = gerade ? 0.95 : 0.91;
    }

    // Nur eine einzige Stimme auf dem Gerät? Dann müssen Tonhöhe und Tempo
    // den Unterschied machen — sonst klingt der Dialog nach einer Person.
    var einzeln = DE.length < 2;
    if (einzeln) {
      var n = Object.keys(VERGEBEN).length;
      if (rolle === 'julia') { pitch = 1.04; rate = 0.93; }
      else if (rolle === 'amanda') { pitch = 1.16; rate = 0.96; }
      else if (rolle === 'du') { pitch = 0.82; rate = 0.90; }
      else { pitch = (n % 2 === 0) ? 1.15 : 0.83; rate = (n % 2 === 0) ? 0.96 : 0.90; }
    }

    VERGEBEN[rolle] = { v: v, pitch: pitch, rate: rate };
    return VERGEBEN[rolle];
  };

  /* Rollen wieder freigeben — z.B. beim Wechsel in einen anderen Dialog */
  window.rollenZuruecksetzen = function (nurDialog) {
    if (nurDialog) {
      Object.keys(VERGEBEN).forEach(function (k) {
        if (k !== 'julia' && k !== 'amanda' && k !== 'du') delete VERGEBEN[k];
      });
      ZAEHLER = 0;
    } else { VERGEBEN = {}; ZAEHLER = 0; }
  };

  /* ---------- Sprechen ---------- */
  var laeuft = null;

  window.sagen = function (text, opt) {
    opt = opt || {};
    if (!('speechSynthesis' in window) || !text) { if (opt.fertig) opt.fertig(); return; }
    try { window.speechSynthesis.cancel(); } catch (e) { }

    function los() {
      var st = window.rollenStimme(opt.rolle);
      var u = new SpeechSynthesisUtterance(String(text));
      u.lang = 'de-DE';
      u.pitch = st.pitch;
      u.rate = opt.langsam ? Math.max(0.55, st.rate - 0.32) : st.rate;
      if (st.v) u.voice = st.v;
      if (opt.aufElement) opt.aufElement.classList.add('spricht');
      u.onend = function () {
        if (opt.aufElement) opt.aufElement.classList.remove('spricht');
        if (opt.fertig) opt.fertig();
      };
      u.onerror = function () {
        if (opt.aufElement) opt.aufElement.classList.remove('spricht');
        if (opt.fertig) opt.fertig();
      };
      laeuft = u;
      try { window.speechSynthesis.speak(u); } catch (e) { if (opt.fertig) opt.fertig(); }
    }

    if (bereit) los(); else window.stimmenBereit(los);
  };

  window.sagenStopp = function () {
    try { window.speechSynthesis.cancel(); } catch (e) { }
    laeuft = null;
  };

  /* Zwei Menschen im Wechsel: [{wer:'a', text:'…'}, {wer:'b', text:'…'}]
     Wird nacheinander gesprochen, mit einer kleinen Pause dazwischen. */
  window.dialogSprechen = function (zeilen, opt) {
    opt = opt || {};
    var i = 0;
    function weiter() {
      if (i >= zeilen.length) { if (opt.fertig) opt.fertig(); return; }
      var z = zeilen[i++];
      if (opt.beiZeile) opt.beiZeile(z, i - 1);
      window.sagen(z.text, {
        rolle: z.wer,
        aufElement: z.el,
        fertig: function () { setTimeout(weiter, 420); }   // Atempause wie im echten Gespräch
      });
    }
    weiter();
  };
})();
