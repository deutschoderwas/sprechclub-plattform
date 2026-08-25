/* ============================================================
   deutschoderwas — Brücke zwischen der App und dem Gerät
   Läuft nur in der nativen Hülle (App Store / Play Store).
   Im Browser passiert hier gar nichts.

   Was das Gerät zusätzlich kann:
     · Erinnerung am Abend, wenn noch nichts geübt wurde
     · Erinnerung, damit die Serie nicht abreißt
     · Mitteilungen vom Club (neue Nachricht, Stunde beginnt gleich)
     · Kamera direkt öffnen statt Dateiauswahl
     · kleines Vibrieren bei richtig und falsch
     · Hinweis, wenn die Verbindung weg ist
     · Fortschritt teilen
   ============================================================ */
(function () {
  'use strict';

  var C = window.Capacitor;
  if (!C || !C.isNativePlatform || !C.isNativePlatform()) return;   // Browser: nichts tun

  var P = C.Plugins || {};
  window.__NATIV__ = true;
  window.__PLATTFORM__ = C.getPlatform ? C.getPlatform() : '';

  function lese(k, f) { try { var v = localStorage.getItem('dow_app_' + k); return v == null ? f : JSON.parse(v); } catch (e) { return f; } }
  function schreib(k, v) { try { localStorage.setItem('dow_app_' + k, JSON.stringify(v)); } catch (e) { } }

  /* ---------- Die App erneuert sich selbst ----------
     Beim Start prüft sie, ob auf dem Server eine neuere Fassung liegt,
     lädt sie im Hintergrund und benutzt sie beim nächsten Öffnen.
     Wichtig ist der Ruf „notifyAppReady": Bleibt er aus, geht die App
     automatisch auf die vorige Fassung zurück — so kann ein kaputtes
     Update niemanden aussperren. */
  (function () {
    var U = P.CapacitorUpdater;
    if (!U) return;
    // Sobald die Oberfläche steht, melden wir: alles in Ordnung.
    function bereit() {
      try { U.notifyAppReady(); } catch (e) { }
    }
    if (document.readyState === 'complete') setTimeout(bereit, 800);
    else window.addEventListener('load', function () { setTimeout(bereit, 800); });

    try {
      U.addListener('updateAvailable', function (i) {
        console.log('Neue Fassung gefunden: ' + (i && i.bundle && i.bundle.version));
      });
      U.addListener('downloadComplete', function () {
        // Kein Pop-up mitten im Lernen — beim nächsten Öffnen ist es da.
        console.log('Update geladen, wird beim nächsten Start benutzt.');
      });
      U.addListener('updateFailed', function () {
        console.log('Update fehlgeschlagen — die App läuft mit der bisherigen Fassung weiter.');
      });
    } catch (e) { }
  })();

  /* ---------- Statusleiste und Startbild ---------- */
  try { P.StatusBar && P.StatusBar.setStyle({ style: 'LIGHT' }); } catch (e) { }
  try { P.StatusBar && P.StatusBar.setBackgroundColor({ color: '#FBF9F5' }); } catch (e) { }
  window.addEventListener('load', function () {
    setTimeout(function () { try { P.SplashScreen && P.SplashScreen.hide(); } catch (e) { } }, 350);
  });

  /* ---------- Kleines Vibrieren ---------- */
  window.__spuere = function (art) {
    try {
      if (!P.Haptics) return;
      if (art === 'gut') P.Haptics.notification({ type: 'SUCCESS' });
      else if (art === 'schlecht') P.Haptics.notification({ type: 'ERROR' });
      else P.Haptics.impact({ style: 'LIGHT' });
    } catch (e) { }
  };

  /* ---------- Tägliche Erinnerung ---------- */
  var ERINNERUNG_ID = 4711, SERIE_ID = 4712;

  window.__erinnerungAn = async function (stunde, minute) {
    try {
      if (!P.LocalNotifications) return false;
      var erlaubt = await P.LocalNotifications.requestPermissions();
      if (erlaubt.display !== 'granted') return false;

      await P.LocalNotifications.cancel({ notifications: [{ id: ERINNERUNG_ID }, { id: SERIE_ID }] });

      var texte = [
        { title: 'Fünf Minuten Deutsch?', body: 'Dein Tagesziel wartet — das schaffst du noch.' },
        { title: 'Deine Serie läuft 🔥', body: 'Eine kurze Übung reicht, damit sie weiterläuft.' },
        { title: 'Amanda hat Zeit', body: 'Such dir eine Situation aus und sprich ein paar Sätze.' },
        { title: 'Kurz üben?', body: 'Ein paar Wörter, dann bist du für heute durch.' }
      ];
      var t = texte[Math.floor(Math.random() * texte.length)];

      await P.LocalNotifications.schedule({
        notifications: [{
          id: ERINNERUNG_ID,
          title: t.title,
          body: t.body,
          schedule: { on: { hour: stunde || 19, minute: minute || 0 }, repeats: true, allowWhileIdle: true },
          smallIcon: 'ic_stat_icon',
          iconColor: '#D83636'
        }]
      });
      schreib('erinnerung', { stunde: stunde || 19, minute: minute || 0 });
      return true;
    } catch (e) { return false; }
  };

  window.__erinnerungAus = async function () {
    try {
      await P.LocalNotifications.cancel({ notifications: [{ id: ERINNERUNG_ID }, { id: SERIE_ID }] });
      schreib('erinnerung', null);
    } catch (e) { }
  };

  window.__erinnerungStand = function () { return lese('erinnerung', null); };

  // Wenn heute schon geübt wurde, die Erinnerung für heute wegnehmen
  window.__heuteGeschafft = async function () {
    try { await P.LocalNotifications.cancel({ notifications: [{ id: SERIE_ID }] }); } catch (e) { }
  };

  /* ---------- Mitteilungen vom Club ---------- */
  window.__pushAnmelden = async function (sb, userId) {
    try {
      if (!P.PushNotifications) return null;
      var erg = await P.PushNotifications.requestPermissions();
      if (erg.receive !== 'granted') return null;
      await P.PushNotifications.register();

      P.PushNotifications.addListener('registration', async function (token) {
        try {
          if (sb && userId) {
            await sb.from('geraete').upsert({
              user_id: userId,
              token: token.value,
              plattform: window.__PLATTFORM__
            }, { onConflict: 'token' });
          }
        } catch (e) { }
      });

      // Wenn jemand auf die Mitteilung tippt: an die richtige Stelle springen
      P.PushNotifications.addListener('pushNotificationActionPerformed', function (a) {
        var ziel = a && a.notification && a.notification.data && a.notification.data.ziel;
        if (ziel) location.hash = ziel;
      });
      return true;
    } catch (e) { return null; }
  };

  /* ---------- Kamera ---------- */
  window.__fotoAufnehmen = async function () {
    try {
      if (!P.Camera) return null;
      var foto = await P.Camera.getPhoto({
        quality: 82,
        allowEditing: false,
        resultType: 'base64',
        source: 'PROMPT',
        width: 1400,
        promptLabelHeader: 'Foto für deine Wörter',
        promptLabelPhoto: 'Aus der Galerie',
        promptLabelPicture: 'Kamera öffnen',
        promptLabelCancel: 'Abbrechen'
      });
      return { base64: foto.base64String, mime: 'image/' + (foto.format || 'jpeg') };
    } catch (e) { return null; }
  };

  /* ---------- Verbindung ---------- */
  (function () {
    if (!P.Network) return;
    P.Network.addListener('networkStatusChange', function (s) {
      var alt = document.getElementById('offlineBand');
      if (!s.connected) {
        if (alt) return;
        var d = document.createElement('div');
        d.id = 'offlineBand';
        d.textContent = 'Keine Verbindung — dein Fortschritt wird gespeichert und später übertragen.';
        d.style.cssText = 'position:fixed;left:0;right:0;top:0;z-index:999;background:#D83636;color:#fff;'
          + 'font:600 13px/1.4 Inter,system-ui,sans-serif;padding:calc(8px + env(safe-area-inset-top)) 14px 8px;text-align:center';
        document.body.appendChild(d);
      } else if (alt) { alt.remove(); }
    });
  })();

  /* ---------- Teilen ---------- */
  window.__teilen = async function (text) {
    try {
      if (!P.Share) return false;
      await P.Share.share({
        title: 'deutschoderwas',
        text: text || 'Ich lerne Deutsch mit deutschoderwas — komm doch dazu!',
        url: 'https://www.deutschoderwas-club.de',
        dialogTitle: 'Teilen'
      });
      return true;
    } catch (e) { return false; }
  };

  /* ---------- Zurück-Taste auf Android ---------- */
  try {
    P.App && P.App.addListener('backButton', function (e) {
      // offene Ebenen zuerst schließen
      var ueb = document.getElementById('ueb');
      if (ueb && ueb.classList.contains('an')) {
        if (window.P && window.P.takt) { window.pruefAbbrechen && window.pruefAbbrechen(); }
        else { window.uebEnde && window.uebEnde(true); }
        return;
      }
      if (document.getElementById('amFrei')) { window.amandaFreiZu && window.amandaFreiZu(); return; }
      if (document.getElementById('pruefWahl')) { document.getElementById('pruefWahl').remove(); return; }
      if (window.D && window.D.offen) { window.dialogZurueck && window.dialogZurueck(); return; }
      if (window.CHAT && window.CHAT.offen) { window.chatZurueck && window.chatZurueck(); return; }
      if (location.hash && location.hash !== '#lernen') { window.zeige && window.zeige('lernen'); return; }
      if (e.canGoBack) { window.history.back(); } else { P.App.exitApp(); }
    });
  } catch (e) { }

  /* ---------- Links nach außen im Systembrowser ---------- */
  document.addEventListener('click', function (e) {
    var a = e.target && e.target.closest && e.target.closest('a[href^="http"]');
    if (!a) return;
    if (a.href.indexOf('deutschoderwas-club.de') >= 0) return;   // eigene Seiten bleiben drin
    e.preventDefault();
    try { P.Browser && P.Browser.open({ url: a.href, presentationStyle: 'popover' }); } catch (err) { }
  });
})();
