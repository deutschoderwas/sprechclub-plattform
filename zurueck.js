/* ============================================================
   zurueck.js — der Zurück-Knopf geht einen Schritt zurück

   Das Problem: Kurs, Übung, Chat-Kanal und Material-Thema sind
   Zustände INNERHALB einer Ansicht. Sie standen nie in der
   Adresse, also kannte der Browser sie nicht. Wer im Handy auf
   "zurück" tippte, flog deshalb aus der ganzen Ansicht heraus —
   meist bis zur Startseite.

   Die Lösung: Jeder solche Zustand meldet sich beim Öffnen hier
   an und legt einen Eintrag in die Verlaufsliste. Ein Druck auf
   "zurück" schliesst dann genau diesen einen Zustand — und erst
   wenn keiner mehr offen ist, geht es eine Ansicht zurück.

   Anmelden beim Öffnen:
       zurueckAuf('ueben', function(){ ubClose(true); });

   Wird derselbe Zustand über ein X im Bild geschlossen, sagt man
   Bescheid, damit der Verlauf sauber bleibt:
       zurueckErledigt('ueben');
   ============================================================ */
(function () {
  'use strict';
  if (window.__zurueck) return;
  window.__zurueck = true;

  var stapel = [];        // [{name, schliessen}]
  var eigenerSchritt = 0; // so viele popstate-Ereignisse haben wir selbst ausgelöst

  /* Ein Zustand geht auf. */
  window.zurueckAuf = function (name, schliessen) {
    if (!name || typeof schliessen !== 'function') return;
    // Zweimal derselbe Zustand hintereinander waere ein toter Zurueck-Druck.
    if (stapel.length && stapel[stapel.length - 1].name === name) return;
    stapel.push({ name: name, schliessen: schliessen });
    try { history.pushState({ dowStufe: stapel.length, dowName: name }, ''); } catch (e) {}
  };

  /* Der Zustand wurde im Bild geschlossen (X, "fertig", Auswahl getroffen). */
  window.zurueckErledigt = function (name) {
    var i = -1;
    for (var k = stapel.length - 1; k >= 0; k--) { if (stapel[k].name === name) { i = k; break; } }
    if (i < 0) return;
    var wieViele = stapel.length - i;   // dieser Zustand und alles darueber
    stapel.splice(i, stapel.length - i);
    eigenerSchritt += wieViele;
    try { history.go(-wieViele); } catch (e) { eigenerSchritt -= wieViele; }
  };

  /* Wie viele Zustaende sind gerade offen? Praktisch fuer Tests. */
  window.zurueckOffen = function () { return stapel.map(function (x) { return x.name; }); };

  window.addEventListener('popstate', function () {
    if (eigenerSchritt > 0) { eigenerSchritt--; return; }   // wir haben selbst zurueckgedrueckt
    var oben = stapel.pop();
    if (!oben) return;                                       // nichts offen -> Browser macht normal weiter
    try { oben.schliessen(); } catch (e) {}
  });

  /* Wechselt die Ansicht (Adresse ändert sich), sind alle
     Unterzustände hinfällig — sonst zeigt der Stapel auf etwas,
     das gar nicht mehr am Bildschirm ist. */
  window.addEventListener('hashchange', function () {
    stapel.length = 0;
    eigenerSchritt = 0;
  });
})();
