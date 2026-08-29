/* ============================================================
   fortschritt.js — der Lernstand wandert in die Datenbank

   WARUM ES DIESE DATEI GIBT

   Alle Lernmodule — Üben, Lernbereich, Kurs, Vokabeltrainer,
   Prüfungsvorbereitung — haben ihren Fortschritt bisher nur im
   Speicher EINES Browsers abgelegt. Das hatte drei Folgen:

     · Wer am Handy übt und abends am Rechner weitermacht,
       fängt wieder bei null an.
     · Wer den Browserspeicher leert, verliert alles.
     · Die Lehrkraft sieht von keinem Mitglied, was es gemacht hat.

   WIE ES GELÖST IST — OHNE EINE EINZIGE FREMDE DATEI ZU ÄNDERN

   Alle Module speichern nicht direkt, sondern über zwei kleine
   Helfer aus konto.html: lsGet und lsSet. Diese Datei legt sich
   um lsSet herum. Jeder Speichervorgang läuft weiterhin genau wie
   vorher in den Browser — und zusätzlich, ein paar Sekunden
   später gebündelt, in die Tabelle "lernstand".

   Dadurch bleibt ueben.js, lernen.js, kurs.js, vokabeln.js und
   pruefung-bereich.js unangetastet. Wer diese Datei wieder
   entfernt, hat exakt den alten Zustand zurück.

   WAS BEIM GERÄTEWECHSEL PASSIERT

   Beim Laden wird verglichen, was in der Datenbank steht und was
   im Browser liegt. Der jüngere Stand gewinnt und wird auf die
   andere Seite übertragen. Wer auf zwei Geräten GLEICHZEITIG übt,
   behält den zuletzt gespeicherten Stand — eine echte Zusammen-
   führung Zeile für Zeile wäre hier mit Kanonen auf Spatzen
   geschossen.

   OHNE NETZ

   Nicht abgeschickte Änderungen liegen in einer Warteschlange im
   Browser und gehen beim nächsten Mal raus. Ein Ausfall der
   Datenbank darf das Üben nie blockieren — deshalb ist hier alles
   in try/catch und scheitert still.
   ============================================================ */
(function () {
  'use strict';
  if (window.__fortschrittAktiv) return;
  window.__fortschrittAktiv = true;

  /* Diese Schlüssel tragen Lernfortschritt und werden gespiegelt.
     Alles andere (Ansichtszustand, zuletzt geöffneter Reiter …)
     bleibt reine Browsersache und hat in der Datenbank nichts zu
     suchen. Neuen Schlüssel ergänzen: hier eintragen, fertig. */
  var SPIEGELN = ['ub', 'lern', 'kurs', 'vok', 'vokabeln', 'pruefLetzte', 'niveau', 'lz', 'lek'];

  /* Ein Sonderfall: die Kursbibliothek (lektion.html) schreibt ihren
     Stand nicht über lsSet, sondern direkt nach localStorage unter
     'dow_lek'. Genau der Fortschritt also, den das Onboarding als
     „Dein Weg" verkauft — und der beim Gerätewechsel verloren ging.
     Er wird hier an seinem eigenen Ort gelesen und geschrieben. */
  var EIGEN = { lek: 'dow_lek' };

  var WARTE = 'dow_fortschritt_warteschlange';
  var ZEIT  = '__zeit';           // Zeitstempel je Schlüssel, lokal
  var TAKT  = 4000;               // so oft wird gebündelt geschickt

  var offen = {};                 // Schlüssel -> true, muss noch raus
  var laeuft = false;
  var bereit = false;

  function jetzt() { return new Date().toISOString(); }
  function sb()   { return window.sb || null; }
  function uid()  { return (window.user && window.user.id) || null; }

  function geraet() {
    try {
      var b = navigator.userAgent;
      if (/iPhone|iPad|iPod/.test(b)) return 'iOS';
      if (/Android/.test(b))          return 'Android';
      if (/Macintosh/.test(b))        return 'Mac';
      if (/Windows/.test(b))          return 'Windows';
      return 'anderes';
    } catch (e) { return null; }
  }

  /* ---------- Zugriff auf den Browserspeicher ----------
     Genau derselbe Schlüsselaufbau wie in konto.html, damit beide
     Seiten dieselben Daten sehen: sc_<benutzer>_<schluessel> */
  function raw(k) { return 'sc_' + (uid() || 'anon') + '_' + k; }
  function holen(k) {
    try {
      var v = localStorage.getItem(EIGEN[k] || raw(k));
      return v == null ? null : JSON.parse(v);
    } catch (e) { return null; }
  }
  function legen(k, v) {
    try { localStorage.setItem(EIGEN[k] || raw(k), JSON.stringify(v)); } catch (e) {}
  }

  /* Die eigenen Schlüssel werden von einer anderen Seite geschrieben,
     ohne dass lsSet hier etwas mitbekommt. Beim Start wird deshalb
     verglichen: hat sich der Wert seit dem letzten Mal geändert,
     bekommt er einen frischen Zeitstempel und geht mit hoch. */
  function eigenePruefen() {
    Object.keys(EIGEN).forEach(function (k) {
      try {
        var jetztWert = JSON.stringify(holen(k));
        var schatten = localStorage.getItem(raw(k) + '__schatten');
        if (jetztWert === 'null') return;
        if (schatten !== jetztWert) {
          localStorage.setItem(raw(k) + '__schatten', jetztWert);
          zeitSetzen(k, jetzt());
          var w = warteLesen(); w[k] = zeitVon(k); warteSchreiben(w);
        }
      } catch (e) {}
    });
  }
  function zeitVon(k) { try { return localStorage.getItem(raw(k) + ZEIT) || null; } catch (e) { return null; } }
  function zeitSetzen(k, t) { try { localStorage.setItem(raw(k) + ZEIT, t); } catch (e) {} }

  /* ---------- Warteschlange ---------- */
  function warteLesen() {
    try { return JSON.parse(localStorage.getItem(WARTE)) || {}; } catch (e) { return {}; }
  }
  function warteSchreiben(o) {
    try { localStorage.setItem(WARTE, JSON.stringify(o)); } catch (e) {}
  }

  function vormerken(k) {
    if (SPIEGELN.indexOf(k) < 0) return;
    var t = jetzt();
    zeitSetzen(k, t);
    offen[k] = true;
    var w = warteLesen(); w[k] = t; warteSchreiben(w);
    planen();
  }

  var timer = null;
  function planen() {
    if (timer) return;
    timer = setTimeout(function () { timer = null; schicken(); }, TAKT);
  }

  /* ---------- Hochladen ---------- */
  function schicken() {
    if (laeuft || !bereit) return;
    var s = sb(), u = uid();
    if (!s || !u) return;

    var w = warteLesen();
    var schluessel = Object.keys(w);
    if (!schluessel.length) return;

    var zeilen = [];
    schluessel.forEach(function (k) {
      var v = holen(k);
      if (v === null || v === undefined) return;
      zeilen.push({
        user_id: u, schluessel: k, wert: v,
        aktualisiert_am: w[k] || jetzt(), geraet: geraet()
      });
    });
    if (!zeilen.length) { warteSchreiben({}); return; }

    laeuft = true;
    try {
      s.from('lernstand').upsert(zeilen, { onConflict: 'user_id,schluessel' })
        .then(function (r) {
          laeuft = false;
          if (r && r.error) { planen(); return; }   // beim nächsten Takt erneut
          /* Nur das wegräumen, was auch wirklich verschickt wurde —
             was zwischenzeitlich dazukam, bleibt in der Schlange. */
          var neu = warteLesen(), rest = {};
          Object.keys(neu).forEach(function (k) { if (neu[k] !== w[k]) rest[k] = neu[k]; });
          warteSchreiben(rest);
          if (Object.keys(rest).length) planen();
        }, function () { laeuft = false; planen(); });
    } catch (e) { laeuft = false; planen(); }
  }

  /* ---------- Beim Start abgleichen ----------
     Wer gewinnt: der jüngere Zeitstempel. */
  function abgleichen() {
    var s = sb(), u = uid();
    if (!s || !u) return;
    eigenePruefen();
    try {
      s.from('lernstand').select('schluessel,wert,aktualisiert_am').eq('user_id', u)
        .then(function (r) {
          var rows = (r && r.data) || [];
          var hochladen = false;

          rows.forEach(function (z) {
            if (SPIEGELN.indexOf(z.schluessel) < 0) return;
            var lokalZeit = zeitVon(z.schluessel);
            var lokalWert = holen(z.schluessel);
            var fern = new Date(z.aktualisiert_am).getTime();
            var hier = lokalZeit ? new Date(lokalZeit).getTime() : 0;

            if (lokalWert === null || fern > hier) {
              /* Die Datenbank ist jünger — Stand übernehmen. */
              legen(z.schluessel, z.wert);
              zeitSetzen(z.schluessel, z.aktualisiert_am);
              if (EIGEN[z.schluessel]) {
                try { localStorage.setItem(raw(z.schluessel) + '__schatten', JSON.stringify(z.wert)); } catch (e) {}
              }
            } else if (hier > fern) {
              hochladen = true;
              var w = warteLesen(); w[z.schluessel] = lokalZeit; warteSchreiben(w);
            }
          });

          /* Was hier liegt, aber in der Datenbank noch gar nicht steht
             — der erste Abgleich rettet den bisherigen Fortschritt. */
          var bekannt = {}; rows.forEach(function (z) { bekannt[z.schluessel] = true; });
          SPIEGELN.forEach(function (k) {
            if (bekannt[k]) return;
            if (holen(k) === null) return;
            if (!zeitVon(k)) zeitSetzen(k, jetzt());
            var w = warteLesen(); w[k] = zeitVon(k); warteSchreiben(w);
            hochladen = true;
          });

          bereit = true;
          if (hochladen || Object.keys(warteLesen()).length) schicken();
          try { window.dispatchEvent(new CustomEvent('fortschritt-bereit')); } catch (e) {}
        }, function () { bereit = true; });
    } catch (e) { bereit = true; }
  }

  /* ---------- Sich um lsSet legen ---------- */
  function einklinken() {
    if (typeof window.lsSet !== 'function' || window.lsSet.__umhuellt) return false;
    var original = window.lsSet;
    var neu = function (k, v) {
      var r = original.apply(this, arguments);
      try { vormerken(k); } catch (e) {}
      return r;
    };
    neu.__umhuellt = true;
    window.lsSet = neu;
    return true;
  }

  /* ---------- Loslegen, sobald Anmeldung und Helfer da sind ---------- */
  var versuche = 0;
  (function warten() {
    var da = einklinken();
    if (da && sb() && uid()) { abgleichen(); return; }
    if (++versuche > 120) return;              // nach ~60 s aufgeben
    setTimeout(warten, 500);
  })();

  /* Beim Verlassen der Seite noch schnell alles rausschicken.
     sendBeacon geht hier nicht, weil die Anmeldung mitmuss —
     stattdessen ein letzter regulärer Versuch. */
  ['visibilitychange', 'pagehide', 'beforeunload'].forEach(function (e) {
    window.addEventListener(e, function () {
      if (document.visibilityState === 'hidden' || e !== 'visibilitychange') {
        if (timer) { clearTimeout(timer); timer = null; }
        schicken();
      }
    });
  });

  /* Für die Startseite und die Lehrkraft-Ansicht:
     FORTSCHRITT.themen() gibt zurück, wie weit welches Thema ist. */
  window.FORTSCHRITT = {
    themen: function () {
      var s = holen('ub') || {};
      var out = {};
      Object.keys(s.themes || {}).forEach(function (k) {
        var t = s.themes[k] || {};
        out[k] = { best: t.best || 0, versuche: t.runs || 0 };
      });
      return out;
    },
    xp:    function () { return (holen('ub') || {}).xp || 0; },
    serie: function () { return (holen('ub') || {}).streak || 0; },
    jetztSichern: function () { schicken(); },
    offen: function () { return Object.keys(warteLesen()); }
  };
})();
