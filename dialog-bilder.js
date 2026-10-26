/* dialog-bilder.js — 33 Gespräche hatten kein eigenes Foto (26.10.2026:
   30 davon haben jetzt eins, ihre Zeilen sind raus); statt eines
   leeren Kopfes zeigen sie jetzt ein vorhandenes Bild aus derselben
   Situation (Amt, Praxis, Büro, Lager …). Ein eigenes Foto hat Vorrang:
   Liegt später bilder/dialog/<id>.jpg vor, einfach die Zeile löschen. */
(function () {
  var BILD = {
    'wetter-arbeit': 'anweisung-baustelle',
    'telefon-praxis': 'arzt-termin',
    'weiterbildung-beratung': 'jobcenter-weiterbewilligung'
  };
  var D = window.DIALOGE; if (!D) return;
  var liste = Array.isArray(D) ? D : Object.keys(D).map(function (k) { return D[k]; });
  liste.forEach(function (d) { if (d && !d.bild && BILD[d.id]) d.bild = BILD[d.id]; });
})();
