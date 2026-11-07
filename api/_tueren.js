// ============================================================
//  api/_tueren.js — die EINE Stelle fuer "sind die Tueren offen?"
//
//  Julia, 31.10.2026: Um Mitternacht schliesst der Sprechclub. Die
//  Tueren oeffnen im Dezember wieder, dann mit mehr Live-Unterricht
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

/* Welcher Kauf haengt an den Tueren? Der Sprechclub selbst. */
export const istSprechclubPlan = (id) => /^premium_/.test(String(id || ''));

/* ------------------------------------------------------------
   Julia, 3.11.2026: "Es gibt erstmal nur die Warteliste (der Preis
   ist nur da damit sie wissen wie teuer das ist)", "Es gibt noch
   kein Kaufen", "Nur die Warteliste."

   Also stand der Verkauf still — und zwar alles, auch die Basis.

   Julia, 7.11.2026: "Die Basis community kann man immer kaufen also
   das abonnieren." Der Riegel haelt seitdem nur noch Premium an; er
   heisst deshalb PREMIUM_PAUSIERT. Die Basis-Community laeuft
   durch.
   Die Preise bleiben auf den Seiten stehen, damit man weiss, worauf
   man wartet; nur kaufen kann man gerade nichts.

   WIEDER VERKAUFEN sind zwei Zeilen:
     1. hier VERKAUF_PAUSIERT auf false setzen
     2. in index.html, club.html, preise.html und sprechclub.html
        window.VERKAUF_PAUSIERT auf false
   Der Riegel hier ist der entscheidende: er haelt auch, wenn jemand
   mit einem alten Link direkt in die Kasse springt.
   ------------------------------------------------------------ */
export const PREMIUM_PAUSIERT = true;

/* Alter Name, damit nichts bricht, was ihn noch benutzt. */
export const VERKAUF_PAUSIERT = PREMIUM_PAUSIERT;
