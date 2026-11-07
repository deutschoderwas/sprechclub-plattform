// ============================================================
//  Die Freebie-Liste — die EINZIGE Stelle, die du anfassen musst
//
//  Julia, 7.11.2026: "Ich brauche eben eine kurze Seite, die aufgeht,
//  wenn ich ein Freebie geben möchte die ein Wort kommentieren, so
//  dass sie die Email eintragen und dafür ein freebie bekommen."
//
//  SO LEGST DU EIN NEUES FREEBIE AN:
//
//    1. Die PDF-Datei in den Ordner  freebies/  legen,
//       zum Beispiel  freebies/der-die-das.pdf
//    2. Hier unten einen Eintrag dazuschreiben — den von "sos"
//       abschreiben und die Zeilen ändern reicht.
//    3. Der Link, den du auf Instagram schickst, heißt dann
//          deutschoderwas-club.de/f/DEIN-SCHLÜSSEL
//
//  Mehr ist nicht nötig. Die Seite baut sich aus diesem Eintrag.
//
//  Der Schlüssel (links vor dem Doppelpunkt) steht im Link. Nur
//  Kleinbuchstaben, Zahlen und Bindestriche — keine Umlaute, keine
//  Leerzeichen, sonst bricht der Link.
// ============================================================

export const FREEBIES = {

  'sos': {
    augen:  'Für den Moment, in dem dir die Worte fehlen',
    titel:  'SOS!',
    zeile2: '50 Sätze fürs',
    stark:  'echte Leben.',
    zitat:  '„Ich kann Deutsch. Aber gerade ist alles weg.“',
    unter:  'Kennst du? Dann ist das hier für dich.',
    punkte: [
      'Nachfragen, bestellen, widersprechen — 50 Sätze von A2 bis C1',
      'Mit englischer Übersetzung und der lockeren Alltagsvariante',
      'Zum Ausfüllen: abhaken, was du schon benutzt hast',
    ],
    datei:  '/freebies/sos-alltag.pdf',
    knopf:  'Schick mir die 50 Sätze',
    liste:  0,        // 0 = die Liste aus BREVO_FREEBIE_LIST_ID nehmen
  },

};

/* Wird ein Schlüssel benutzt, den es hier nicht gibt, zeigt die Seite
   das hier. Besser eine freundliche Seite als eine leere. */
export const UNBEKANNT = {
  augen:  '',
  titel:  'Hm.',
  zeile2: 'Diesen Link',
  stark:  'gibt es nicht.',
  zitat:  '',
  unter:  'Da hat sich etwas verlaufen. Schreib uns kurz, welches Material du gesucht hast — wir schicken es dir.',
  punkte: [],
  datei:  '',
  knopf:  '',
  liste:  0,
};

export function freebieVon(schluessel) {
  const k = String(schluessel || '').trim().toLowerCase();
  return Object.prototype.hasOwnProperty.call(FREEBIES, k) ? FREEBIES[k] : null;
}
