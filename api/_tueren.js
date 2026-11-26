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
/* Julia, 26.11.2026 18:26: "ab dem 01.12 den Sprechclub fuer 139 Euro
   wieder anbieten, definitiv offen lassen, aber dafuer 3 Tage kostenlos
   (nach 3 Tagen wird automatisch abgebucht) ... Erst ab dem 01.12."
   Die Tueren gehen am Dienstag, 1.12. um 0 Uhr Berliner Zeit von allein
   auf und bleiben offen. Niemand muss nachts etwas umstellen. */
export const TUEREN_AUF   = Date.parse('2026-12-01T00:00:00+01:00');

/* 3 Tage kostenlos testen - Sprechclub monatlich UND Halbjahr
   (Julia, 26.11. 21:41: "doch halbjahres haben auch 3 tage"),
   NUR ab 1.12., NUR einmal pro Person (Pruefung in create-checkout.js). */
export const TESTZEIT_AB    = TUEREN_AUF;
export const TESTZEIT_TAGE  = 3;
export const TESTZEIT_PLAENE = ['premium_month', 'premium_6m'];
export const testzeitAktiv = (jetzt = Date.now()) => jetzt >= TESTZEIT_AB;

/* Julia, 26.11.2026 21:43: "6 monatsabo ist ab dem 1.12 30 prozent reduziert".
   Regulaer 834 EUR (6 x 139). 30 % weniger waeren 583,80 - wir nehmen 583,
   damit "30 %" stimmt und nicht uebertrieben ist (30,1 %). Gilt ab 1.12.
   dauerhaft fuer neue Halbjahresabos; die Black Week (399) laeuft bis 30.11. */
export const HALBJAHR_PREIS_AB_0112 = 583;

export const tuerenZu = (jetzt = Date.now()) =>
  !aktionLaeuft(jetzt)
  && jetzt >= TUEREN_ZU_AB && (!TUEREN_AUF || jetzt < TUEREN_AUF);
/* Waehrend der Aktion sind die Tueren offen. Das ist leicht zu
   uebersehen und waere teuer gewesen: Vor Premium stehen ZWEI Riegel,
   PREMIUM_PAUSIERT und tuerenZu. Haette ich nur den ersten geoeffnet,
   haette die Black Week sieben Tage lang beworben, was die Kasse mit
   "tueren_zu" abweist - und niemand haette es gemerkt, weil die Seite
   ja schoen aussieht. */

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
/* ------------------------------------------------------------
   BLACK WEEK 2026 — der Riegel geht von allein auf und wieder zu

   Julia, 12.11.2026: "Wir muessen die Landingpage marketingtechnisch
   ready machen fuer Black Friday, es gibt 30% Rabatt auf den
   Monatspreis Premium" · "Bitte 99 € Rabattpreis". Und auf die Frage,
   ob Premium dafuer wieder aufgeht: "Nur waehrend der Aktion."

   Also haengt der Riegel jetzt an der Uhr statt an einem Haken, den
   jemand setzen und wieder vergessen muss. Montag, 1.12. um 0 Uhr geht
   er wieder zu — Berliner Zeit, ohne dass jemand nachts am Rechner
   sitzt.

   Julia, 20.11.2026: "wir muessen wegen der Black week eine Aenderung
   machen und zwar oeffnen die Tueren schon ab dem 23.11 also Montag".
   Vorher war es der 24.11. Jetzt geht Premium einen Tag frueher auf,
   Montag 23.11. um 0 Uhr.

   Dieselben Daten stehen in aktion.js fuer die Seiten. Zwei Stellen,
   weil der Browser nicht entscheiden darf, was etwas kostet: Wer das
   Datum im eigenen Rechner verstellt, sieht vielleicht die Leiste,
   kommt aber nicht an den Preis.
   ------------------------------------------------------------ */
export const AKTION_VON = Date.parse('2026-11-23T00:00:00+01:00');
export const AKTION_BIS = Date.parse('2026-12-01T00:00:00+01:00');
export const AKTION_PREIS = 97;    // Premium im Monat waehrend der Aktion (= 30 % unter 139)
export const AKTION_ALT   = 139;   // regulaer

/* Julia, 21.11.2026: "wir brauchen noch ein 6 Monatsabo (50 % Rabatt)
   30% rabatt auf den Monatspreis und 50 % auf den Halbjahrespreis."

   Einen Halbjahrespreis gab es bis dahin nicht. Regulaer sind es sechs
   Monate zu 139 EUR, also 834 EUR. In der Aktionswoche kostet das
   halbe Jahr 399 EUR - das sind 66,50 EUR im Monat und 52 Prozent
   weniger. Wir werben trotzdem mit "50 %": die Aussage stimmt dann
   und ist sogar leicht untertrieben. */
export const AKTION_PREIS_6M = 399;   // halbes Jahr waehrend der Aktion
export const AKTION_ALT_6M   = 834;   // regulaer: 6 x 139

export const aktionLaeuft = (jetzt = Date.now()) =>
  jetzt >= AKTION_VON && jetzt < AKTION_BIS;

/* Premium ist pausiert — ausser waehrend der Aktion.
   Frueher eine Konstante; wer sie noch als Wert liest, bekommt den
   Stand beim Laden des Moduls. Darum gibt es premiumPausiert() als
   Funktion, und die Kasse benutzt sie. */
/* Ab dem 1.12. (TUEREN_AUF) dauerhaft offen - sonst haette dieser
   zweite Riegel den Sprechclub um Mitternacht wieder zugemacht, obwohl
   tuerenZu() schon "offen" sagt. */
export const premiumPausiert = (jetzt = Date.now()) =>
  !aktionLaeuft(jetzt) && !(TUEREN_AUF && jetzt >= TUEREN_AUF);

export const PREMIUM_PAUSIERT = premiumPausiert();

/* Alter Name, damit nichts bricht, was ihn noch benutzt. */
export const VERKAUF_PAUSIERT = PREMIUM_PAUSIERT;
