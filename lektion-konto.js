/* ============================================================
   lektion-konto.js — die Lektionsseiten melden sich zurück

   WARUM ES DIESE DATEI GIBT

   Der Lernbereich zählt 381 fertige Lektionsseiten. Gemessen am
   11. September 2026 hatten 362 davon keinerlei Verbindung zum
   Konto: eigenständige HTML-Dateien, die weder wussten, wer sie
   öffnet, noch irgendwem sagten, dass sie geöffnet wurden.

   Zwei Folgen hatte das:

     · Der Lernbereich zeigt „% geschafft" und „✓ fertig" — aber
       diese Angaben konnten nie stimmen, weil keine Lektion je
       etwas zurückgemeldet hat. Wer die Lektion durchgearbeitet
       hat, sah beim nächsten Besuch denselben leeren Stand.
     · Jede Lektion war unter ihrer Adresse frei erreichbar. Wer
       den Link hatte, brauchte keine Mitgliedschaft.

   WAS DIESE DATEI TUT

     1. Prüft die Anmeldung und die Mitgliedschaft. Beides über
        die Datenbankfunktion darf_rein(), damit die Regel an
        einer einzigen Stelle steht und nicht in jeder Seite neu.
     2. Meldet beim Öffnen und beim Verlassen, welche Lektion wie
        lange offen war — in die Tabelle lektion_fortschritt.
     3. Setzt „fertig", wenn jemand wirklich durch ist: mindestens
        eine Minute auf der Seite UND bis ans Ende gescrollt.
        Ein kurzer Blick zählt nicht.

   IM KLASSENRAUM

   klassenraum.html zeigt dieselben Seiten in einem iframe. Dort
   darf niemals weitergeleitet werden — sonst fliegt die ganze
   Klasse aus dem Raum. Im iframe wird deshalb nur gemeldet, und
   die Zugangsprüfung überlässt die Seite dem Elternfenster, das
   sie ohnehin schon gemacht hat.

   WENN ETWAS NICHT GEHT

   Eine kaputte Datenbank darf keinen Unterricht verhindern. Alles
   außer der Zugangsprüfung scheitert still. Die Zugangsprüfung
   selbst lässt im Zweifel durch: lieber einmal jemand zu viel
   drin als eine zahlende Teilnehmerin ausgesperrt.
   ============================================================ */
(function () {
  'use strict';
  if (window.__lektionKonto) return;
  window.__lektionKonto = true;

  var IMRAHMEN = (function () { try { return window.self !== window.top; } catch (e) { return true; } })();
  var DATEI = (location.pathname.replace(/^\/+/, '') || 'index.html');
  var START = Date.now();
  var sb = null, gemeldet = false, fertigGemeldet = false;
  var MINDESTZEIT = 60000;     // eine Minute, bevor etwas „fertig" heißen darf
  var TIEFE = 0;               // wie weit die Seite gelesen wurde, 0–1

  /* ---------- Skripte nachladen ---------- */
  function laden(src, fertig) {
    var s = document.createElement('script');
    s.src = src;
    /* onload uebergibt ein Event. Wuerde das direkt an fertig() gehen,
       zaehlte jeder erfolgreiche Ladevorgang als Fehler — und das ganze
       Skript schaltete sich auf jeder Seite still ab. Gefunden im Test,
       nicht im Betrieb. */
    s.onload  = function () { fertig(); };
    s.onerror = function () { fertig(new Error(src)); };
    document.head.appendChild(s);
  }
  function bereit(fn) {
    if (window.supabase && window.supabase.createClient && window.SPRECHCLUB_CONFIG) return fn();
    var offen = 0, fehler = false;
    function fertig(e) { if (e) fehler = true; if (--offen <= 0) fn(fehler); }
    if (!window.SPRECHCLUB_CONFIG) { offen++; laden(wurzel() + 'config.js', fertig); }
    if (!(window.supabase && window.supabase.createClient)) {
      offen++; laden('https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2/dist/umd/supabase.min.js', fertig);
    }
    if (!offen) fn();
  }
  /* Die Lektionen liegen teils in Unterordnern (Unterricht-ab-14-09/…).
     config.js liegt immer in der Wurzel. */
  function wurzel() {
    var tiefe = (location.pathname.replace(/^\/+|[^\/]*$/g, '').match(/\//g) || []).length;
    return tiefe ? new Array(tiefe + 1).join('../') : '';
  }

  /* ---------- Vorhang, wenn die Mitgliedschaft fehlt ---------- */
  function vorhang(angemeldet) {
    var d = document.createElement('div');
    d.setAttribute('style',
      'position:fixed;inset:0;z-index:2147483000;background:rgba(22,22,22,.72);' +
      'display:flex;align-items:center;justify-content:center;padding:20px;' +
      "font-family:Inter,'Segoe UI',system-ui,sans-serif;-webkit-backdrop-filter:blur(3px);backdrop-filter:blur(3px)");
    d.innerHTML =
      '<div style="background:#fff;border-radius:20px;max-width:420px;width:100%;padding:30px 26px;' +
      'text-align:center;box-shadow:0 24px 60px rgba(0,0,0,.3)">' +
      '<div style="font-size:2.6rem;line-height:1;margin-bottom:12px">🔒</div>' +
      '<h2 style="font-family:\'Space Grotesk\',Inter,sans-serif;font-size:1.35rem;margin:0 0 10px;color:#161616">' +
      (angemeldet ? 'Deine Mitgliedschaft ist nicht aktiv' : 'Nur für Mitglieder') + '</h2>' +
      '<p style="margin:0 0 20px;color:#5B6470;font-size:.97rem;line-height:1.6">' +
      (angemeldet
        ? 'Für die Lernplattform brauchst du eine aktive Mitgliedschaft. Dein Fortschritt bleibt gespeichert und ist sofort wieder da.'
        : 'Diese Lektion gehört zur Lernplattform. Melde dich an oder sieh dir die Mitgliedschaften an.') +
      '</p>' +
      '<a href="' + wurzel() + 'preise.html" style="display:block;background:linear-gradient(135deg,#2DD4BF,#14B8A6);' +
      'color:#06403A;font-weight:700;text-decoration:none;padding:14px 18px;border-radius:999px;margin-bottom:10px">' +
      'Mitgliedschaft ansehen →</a>' +
      (angemeldet ? '' :
        '<a href="' + wurzel() + 'konto.html" style="display:block;color:#10627A;text-decoration:none;font-size:.92rem;padding:8px">' +
        'Ich habe schon ein Konto → anmelden</a>') +
      '</div>';
    document.body.appendChild(d);
    document.documentElement.style.overflow = 'hidden';
    setTimeout(function () { location.href = wurzel() + 'preise.html'; }, 12000);
  }

  /* ---------- Melden ---------- */
  function sekunden() { return Math.min(Math.round((Date.now() - START) / 1000), 7200); }
  function durch() { return TIEFE >= .8 && (Date.now() - START) >= MINDESTZEIT; }

  function melden(fertig) {
    if (!sb) return;
    if (fertig && fertigGemeldet) return;
    if (fertig) fertigGemeldet = true;
    try {
      sb.rpc('lektion_gesehen', { p_datei: DATEI, p_fertig: !!fertig, p_sekunden: sekunden() })
        .then(function () {}, function () {});
    } catch (e) {}
  }

  /* Lesetiefe mitschreiben. Auf kurzen Seiten, die ganz auf den
     Bildschirm passen, gibt es nichts zu scrollen — die gelten
     nach der Mindestzeit als gelesen. */
  function tiefeMessen() {
    try {
      var h = document.documentElement, b = document.body;
      var ganz = Math.max(h.scrollHeight, b ? b.scrollHeight : 0);
      var sicht = window.innerHeight || h.clientHeight;
      if (ganz <= sicht + 40) { TIEFE = 1; return; }
      var oben = window.pageYOffset || h.scrollTop || 0;
      var t = (oben + sicht) / ganz;
      if (t > TIEFE) TIEFE = t;
    } catch (e) {}
  }

  /* ---------- Loslegen ---------- */
  bereit(function (fehler) {
    if (fehler || !window.supabase || !window.SPRECHCLUB_CONFIG) return;   // still scheitern
    var C = window.SPRECHCLUB_CONFIG;
    try {
      sb = window.sb || window.supabase.createClient(C.SUPABASE_URL, C.SUPABASE_ANON_KEY,
        /* Keine eigene storageKey-Angabe: konto.html legt die Anmeldung
           unter dem Standardschluessel ab, und genau die soll hier
           wiedergefunden werden. Ein eigener Schluessel wuerde jede
           Lektion als abgemeldet sehen und alle aussperren. */
        { auth: { persistSession: true, autoRefreshToken: true } });
    } catch (e) { return; }

    sb.auth.getSession().then(function (r) {
      var sitzung = r && r.data && r.data.session;
      if (!sitzung) { if (!IMRAHMEN) vorhang(false); return; }

      /* Angemeldet — melden darf jetzt losgehen. */
      if (!gemeldet) { gemeldet = true; melden(false); }

      sb.rpc('darf_rein').then(function (a) {
        /* Kein Ergebnis heißt: die Frage konnte nicht beantwortet
           werden. Dann nicht aussperren. Nur ein klares Nein sperrt. */
        if (a && !a.error && a.data === false && !IMRAHMEN) vorhang(true);
      }, function () {});
    }, function () {});
  });

  /* Lesetiefe und Abschluss */
  ['scroll', 'resize'].forEach(function (e) {
    window.addEventListener(e, tiefeMessen, { passive: true });
  });
  tiefeMessen();
  setTimeout(tiefeMessen, 1500);

  /* Nach der Mindestzeit einmal nachsehen, ob es schon „fertig" ist —
     und danach im ruhigen Takt, solange die Seite offen bleibt. */
  setInterval(function () { tiefeMessen(); if (durch()) melden(true); }, 15000);

  ['visibilitychange', 'pagehide', 'beforeunload'].forEach(function (e) {
    window.addEventListener(e, function () {
      if (e === 'visibilitychange' && document.visibilityState !== 'hidden') return;
      tiefeMessen();
      melden(durch());
    });
  });
})();
