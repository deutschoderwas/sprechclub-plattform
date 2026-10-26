/* dialog-bilder.js — 33 Gespräche hatten kein eigenes Foto (26.10.2026:
   30 davon haben jetzt eins, ihre Zeilen sind raus); statt eines
   leeren Kopfes zeigen sie jetzt ein vorhandenes Bild aus derselben
   Situation (Amt, Praxis, Büro, Lager …). Ein eigenes Foto hat Vorrang:
   Liegt später bilder/dialog/<id>.jpg vor, einfach die Zeile löschen. */
(function () {
  /* Seit 26.10.2026 leer: alle Gespräche haben ein eigenes Foto.
     Die Datei bleibt, falls ein neues Gespräch noch keins hat. */
  var BILD = {
  };
  var D = window.DIALOGE; if (!D) return;
  var liste = Array.isArray(D) ? D : Object.keys(D).map(function (k) { return D[k]; });
  liste.forEach(function (d) { if (d && !d.bild && BILD[d.id]) d.bild = BILD[d.id]; });
})();
