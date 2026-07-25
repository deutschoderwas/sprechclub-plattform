// Deutsch für Büro & Logistik – Lektion 5: Termine koordinieren
// deutschoderwas club · Kursmaterial
window.LEKTION = {
  meta: { kurs: 'Deutsch für Büro & Logistik', nr: 5, titel: 'Termine koordinieren', level: 'A2–B2', bild: 'th-tag', dauer: 'ca. 18 Min' },
  intro: {
    text: 'Drei Kalender, zwei Abteilungen, ein Besprechungsraum — und irgendwer kann immer nicht. Hier lernst du, wie du Termine als Vorschlag formulierst, absagst und verschiebst, ohne dass sich jemand übergangen fühlt. Die wichtigste Regel dabei: Wer absagt, liefert immer eine Alternative mit.',
    du_lernst: ['Vorschlagen mit „Wie wäre es mit …?"', 'Absagen mit Grund und Alternative', 'Verschieben statt streichen', 'Zeitfenster, Puffer, Rücksprache']
  },
  dialog: {
    bild: 'th-tag',
    situation: 'Fatima aus dem Innendienst und Tobias aus dem Lager suchen einen Termin für die Inventurbesprechung. Beide haben eine volle Woche.',
    lines: [
      { sp: 'Fatima', txt: 'Tobias, uns fehlt noch die Inventurbesprechung. Wie wäre es mit Dienstag um zehn?' },
      { sp: 'Tobias', txt: 'Dienstag zehn bin ich im Wareneingang, da kommt die Sammelladung.' },
      { sp: 'Fatima', txt: 'Und Dienstag nach der Mittagspause, so gegen halb zwei?' },
      { sp: 'Tobias', txt: 'Das ginge — aber nur eine halbe Stunde. Um drei habe ich Staplerschulung.' },
      { sp: 'Fatima', txt: 'Eine halbe Stunde wird knapp. Sollten wir lieber auf Mittwoch früh gehen? Acht Uhr, dann sind wir vor dem Tagesgeschäft durch.' },
      { sp: 'Tobias', txt: 'Acht ist mir ehrlich gesagt zu früh. Neun?' },
      { sp: 'Fatima', txt: 'Neun passt. Ich lege dreißig Minuten Puffer dahinter, falls wir länger brauchen.' },
      { sp: 'Tobias', txt: 'Gut. Und schick bitte eine Einladung mit Raum, sonst suche ich wieder das halbe Haus ab.' },
      { sp: 'Fatima', txt: 'Kleiner Besprechungsraum. Einladung kommt in fünf Minuten, dann steht der Termin.' }
    ]
  },
  vokabeln: [
    { de: 'Wie wäre es mit …?', em: '💡', bsp: 'Wie wäre es mit Dienstag um zehn?' },
    { de: 'Sollten wir lieber …?', em: '🔀', bsp: 'Sollten wir lieber auf Mittwoch gehen?' },
    { de: 'Der Termin steht.', em: '📌', bsp: 'Mittwoch, neun Uhr — der Termin steht.' },
    { de: 'verschieben', em: '➡️', bsp: 'Können wir auf Donnerstag verschieben?' },
    { de: 'absagen', em: '❌', bsp: 'Ich muss den Termin leider absagen.' },
    { de: 'Da bin ich schon verplant.', em: '📕', bsp: 'Am Dienstagvormittag bin ich schon verplant.' },
    { de: 'Das kollidiert mit …', em: '💢', bsp: 'Das kollidiert mit der Schulung.' },
    { de: 'Das wird knapp.', em: '⏱', bsp: 'Eine halbe Stunde wird knapp.' },
    { de: 'der Puffer', em: '🧯', bsp: 'dreißig Minuten Puffer einplanen' },
    { de: 'das Zeitfenster', em: '🪟', bsp: 'Haben Sie diese Woche noch ein Zeitfenster?' },
    { de: 'Rücksprache halten', em: '🗣', bsp: 'Ich halte kurz Rücksprache mit dem Lager.' },
    { de: 'Alternativ könnte ich Ihnen … anbieten.', em: '🔁', bsp: 'Alternativ könnte ich Ihnen Donnerstag anbieten.' },
    { de: 'Mir ist etwas dazwischengekommen.', em: '🌀', bsp: 'ehrlicher Grund für eine kurzfristige Absage' },
    { de: 'kurzfristig', em: '⚡', bsp: 'Die Absage kam sehr kurzfristig.' },
    { de: 'das Tagesgeschäft', em: '📊', bsp: 'vor dem Tagesgeschäft fertig sein' },
    { de: 'den Termin bestätigen', em: '✅', bsp: 'Ich bestätige Ihnen den Termin schriftlich.' }
  ],
  grammatik: {
    title: 'Grammatik im Berufskontext',
    blocks: [
      {
        h: 'Vorschlagen mit Konjunktiv II',
        txt: 'Ein Termin im Indikativ ist eine Ansage. Im Konjunktiv II wird daraus ein Vorschlag, den der andere ablehnen darf — und genau deshalb sagt er meistens ja.',
        table: [
          ['Ansage', 'Vorschlag'],
          ['Wir machen Dienstag zehn Uhr.', 'Wie wäre es mit Dienstag um zehn?'],
          ['Nehmen wir Mittwoch.', 'Sollten wir lieber auf Mittwoch gehen?'],
          ['Kommen Sie um neun.', 'Würde Ihnen neun Uhr passen?'],
          ['Ich habe nur 30 Minuten.', 'Ich hätte am Dienstag ein Zeitfenster von 30 Minuten.'],
          ['Das geht nicht.', 'Das wäre bei mir leider schwierig — alternativ könnte ich Donnerstag anbieten.']
        ],
        note: 'Der Unterschied ist ein einziges Wort: ist wird zu wäre, kann zu könnte, hat zu hätte, wird zu würde. Mehr braucht ein höflicher Vorschlag nicht.'
      },
      {
        h: 'Absagen in vier Schritten — nie ohne Alternative',
        txt: 'Eine Absage besteht aus vier kurzen Teilen. Wer einen davon weglässt, erzeugt Rückfragen oder Ärger:',
        table: [
          ['Schritt', 'Funktion', 'Beispielsatz'],
          ['1. Bedauern', 'Ton setzen', 'Leider muss ich unseren Termin am Dienstag absagen.'],
          ['2. Grund, kurz', 'Nachvollziehbarkeit', 'Mir ist die Inventur dazwischengekommen.'],
          ['3. Alternative', 'den Termin retten', 'Alternativ könnte ich Ihnen Mittwoch, 9 Uhr, oder Donnerstag, 14 Uhr, anbieten.'],
          ['4. Bestätigung', 'Verbindlichkeit', 'Sagen Sie mir bitte kurz Bescheid, welcher Termin Ihnen besser passt.']
        ],
        note: 'Zwei konkrete Alternativen sind besser als die Frage „Wann hätten Sie denn Zeit?" — die schiebt die ganze Arbeit zurück zum anderen.'
      }
    ]
  },
  uebungen: [
    { typ: 'listen', audio: 'Sollten wir lieber auf Mittwoch früh gehen? Acht Uhr, dann sind wir vor dem Tagesgeschäft durch.', frage: 'Hör zu: Was macht die Sprecherin?', optionen: ['Sie schlägt einen anderen Termin vor und begründet ihn.', 'Sie sagt den Termin endgültig ab.', 'Sie bestätigt den bestehenden Termin.'], richtig: 0, hinweis: '„Sollten wir lieber …?" ist ein Vorschlag, keine Absage.' },
    { typ: 'mc', frage: 'Wie schlägst du einen Termin vor, ohne ihn vorzuschreiben?', optionen: ['Wie wäre es mit Dienstag um zehn?', 'Wir machen Dienstag zehn Uhr.', 'Dienstag zehn. Passt.'], richtig: 0, hinweis: 'Konjunktiv II macht aus der Ansage einen Vorschlag.' },
    { typ: 'mc', frage: 'Was fehlt in der Absage „Ich kann Dienstag leider nicht."?', optionen: ['ein kurzer Grund und mindestens eine Alternative', 'eine Entschuldigung in Großbuchstaben', 'der Name des Vorgesetzten'], richtig: 0, hinweis: 'Eine Absage ohne Alternative wirkt wie Desinteresse.' },
    { typ: 'gapbank', frage: 'Setz die Konjunktiv-II-Formen ein.', text: 'Wie ___ es mit Mittwoch um neun? Ich ___ am Vormittag noch ein Zeitfenster. Alternativ ___ ich Ihnen Donnerstag anbieten.', bank: ['wäre', 'hätte', 'könnte', 'war', 'habe'], loesung: ['wäre', 'hätte', 'könnte'], hinweis: 'sein → wäre · haben → hätte · können → könnte. Alle drei mit Umlaut.' },
    { typ: 'order', frage: 'Bau den Vorschlag zum Verschieben!', woerter: ['auf', 'Sollten', 'verschieben', 'wir', 'Mittwoch', 'lieber', 'den', 'Termin'], loesung: 'Sollten wir den Termin lieber auf Mittwoch verschieben', hinweis: 'Ja-Nein-Frage: konjugiertes Verb zuerst, Infinitiv ans Ende.' },
    { typ: 'match', frage: 'Satz und Absicht — was gehört zusammen?', paare: [['Das kollidiert mit der Schulung.', '💢 einen Terminkonflikt nennen'], ['Alternativ könnte ich Donnerstag anbieten.', '🔁 einen Ausweichtermin geben'], ['Ich lege dreißig Minuten Puffer dahinter.', '🧯 Zeitreserve einplanen'], ['Ich halte kurz Rücksprache.', '🗣 erst intern abstimmen'], ['Ich bestätige Ihnen den Termin schriftlich.', '✅ verbindlich machen']] },
    { typ: 'bild', bild: 'th-tag', frage: 'Der Kunde schreibt: „Wann hätten Sie denn Zeit?" Was antwortest du am besten?', optionen: ['Ich könnte Ihnen Mittwoch, 9 Uhr, oder Donnerstag, 14 Uhr, anbieten.', 'Eigentlich fast immer.', 'Schauen Sie einfach in meinen Kalender.'], richtig: 0, hinweis: 'Zwei konkrete Vorschläge beenden das Hin und Her sofort.' },
    { typ: 'mc', frage: 'Was gehört in eine Einladung, damit niemand nachfragen muss?', optionen: ['Datum, Uhrzeit und die Namen aller Kollegen', 'Thema, eine kurze Begrüßung und viele Grüße', 'Datum, Uhrzeit, Dauer, Ort oder Link und Thema'], richtig: 2, hinweis: 'Jede fehlende Angabe erzeugt eine Rückfrage — und die kostet mehr Zeit als das Eintippen.' },
    { typ: 'type', frage: 'Sag den Termin am Dienstag ab und biete zwei Alternativen an.', muster: 'Leider muss ich unseren Termin am Dienstag absagen, mir ist die Inventur dazwischengekommen. Alternativ könnte ich Ihnen Mittwoch, 9 Uhr, oder Donnerstag, 14 Uhr, anbieten.', akzeptiert: ['leider', 'alternativ', 'könnte ich', 'müsste ich'], hinweis: 'Vier Schritte: Bedauern, kurzer Grund, zwei Alternativen, Bitte um Bestätigung.' }
  ],
  zusammenfassung: {
    kernsaetze: [
      'Wie wäre es mit Dienstag um zehn?',
      'Sollten wir lieber auf Mittwoch gehen? Neun Uhr wäre bei mir frei.',
      'Leider muss ich den Termin absagen, mir ist etwas dazwischengekommen.',
      'Alternativ könnte ich Ihnen Mittwoch, 9 Uhr, oder Donnerstag, 14 Uhr, anbieten.',
      'Ich bestätige Ihnen den Termin schriftlich — mit Raum und Dauer.'
    ],
    merke: [
      'Vorschlag statt Ansage: <b>wäre · hätte · könnte · würde</b>.',
      'Absage in vier Schritten: <b>Bedauern → Grund → Alternative → Bestätigung</b>.',
      'Immer <b>zwei konkrete Termine</b> anbieten, nie „Wann passt es Ihnen?"'
    ],
    tipp: 'Schau dir eine Woche lang jede Terminmail an, die du verschickst, und prüfe nur eine Sache: Stehen zwei konkrete Vorschläge drin? Wenn ja, sparst du im Schnitt zwei Mails pro Termin — das sind über ein Jahr locker zwei Arbeitstage.'
  },
  sprechen: {
    task: 'Sag einen Termin ab und rette ihn: Nenne dein Bedauern, einen kurzen Grund, zwei konkrete Alternativen und bitte um eine Bestätigung — laut und in ganzen Sätzen.',
    tipps: ['Leider muss ich unseren Termin am … absagen.', 'Mir ist … dazwischengekommen.', 'Alternativ könnte ich Ihnen … oder … anbieten.', 'Sagen Sie mir bitte kurz Bescheid, was Ihnen besser passt.']
  }
};
