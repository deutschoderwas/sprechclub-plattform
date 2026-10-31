// ============================================================
//  api/_tueren.js — die EINE Stelle fuer "sind die Tueren offen?"
//
//  Julia, 31.10.2026: Um Mitternacht schliesst der Sprechclub. Die
//  Tueren oeffnen Mitte November wieder, dann mit mehr Live-Unterricht
//  und mehr Flexibilitaet. Bis dahin sammeln wir Leute auf der
//  Warteliste, statt sofort zu verkaufen.
//
//  Vorher stand dieselbe Rechnung an drei Stellen. Das geht genau so
//  lange gut, bis eine davon vergessen wird — und dann verkauft die
//  Seite weiter, waehrend die Mail schon von der Warteliste spricht.
//  Darum steht sie jetzt nur noch hier.
//
//  WENN DIE TUEREN WIEDER AUFGEHEN sind es zwei Zeilen:
//    1. hier unten TUEREN_AUF auf das Datum setzen
//    2. in index.html ganz oben window.TUEREN_AUF auf dasselbe Datum
//  Mehr nicht. Der Rest haengt daran.
// ============================================================

export const TUEREN_ZU_AB = Date.parse('2026-11-01T00:00:00+01:00');
export const TUEREN_AUF   = null;   // z. B. Date.parse('2026-11-16T00:00:00+01:00')

export const tuerenZu = (jetzt = Date.now()) =>
  jetzt >= TUEREN_ZU_AB && (!TUEREN_AUF || jetzt < TUEREN_AUF);

/* Welcher Kauf haengt an den Tueren? Nur der Sprechclub selbst.
   Die Community bleibt ausdruecklich offen — die Lernplattform ist
   genau das, was wir waehrend der Pause anbieten, und die
   Willkommensmail schickt die Leute auch dorthin. */
export const istSprechclubPlan = (id) => /^premium_/.test(String(id || ''));
