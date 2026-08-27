/* ============================================================
   lektion-handy.js — die Reiterzeile bleibt sichtbar

   Am Handy stehen die Reiter in einer Zeile zum Wischen. Wer den
   letzten Reiter antippt, soll ihn danach auch sehen — sonst
   wirkt der Sprung wie ein Fehler. Diese Datei schiebt den
   aktiven Reiter in die Mitte, und zwar auch dann, wenn die
   Seite ihre eigene Reiterlogik mitbringt.
   ============================================================ */
(function () {
  'use strict';
  function mitte(el) {
    if (!el || !el.scrollIntoView) return;
    try { el.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' }); }
    catch (e) { el.scrollIntoView(); }
  }
  function los() {
    var leiste = document.querySelector('.tabs');
    if (!leiste) return;
    // Nach jedem Klick nachfassen: die Seite setzt .active selbst,
    // wir schieben danach nur noch ins Bild.
    leiste.addEventListener('click', function (e) {
      var t = e.target.closest ? e.target.closest('.tab') : null;
      if (!t) return;
      setTimeout(function () { mitte(document.querySelector('.tab.active') || t); }, 30);
    });
    mitte(leiste.querySelector('.tab.active'));
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', los, { once: true });
  else los();
})();
