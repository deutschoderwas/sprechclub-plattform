// Alltagsdeutsch A2 – Lektion 1: Termine machen und absagen
// deutschoderwas club · Kursmaterial
window.LEKTION = {
  meta: { kurs: 'Alltagsdeutsch A2', nr: 1, titel: 'Termine machen und absagen', level: 'A2', bild: 'th-tag', dauer: 'ca. 18 Min' },
  intro: {
    text: 'Ein Termin in Deutschland ist eine feste Verabredung — und wer nicht kommt, sagt vorher ab. Hier lernst du drei Dinge. Einen Termin am Telefon bekommen. Höflich absagen. Und einen Tag finden, der beiden passt. Danach bist du am Telefon nicht mehr sprachlos.',
    du_lernst: ['Am Telefon einen Termin vereinbaren', 'Höflich absagen und verschieben', 'können · müssen · wollen', 'Das Verb auf Position 2']
  },
  dialog: {
    bild: 'th-tag',
    situation: 'Amir ruft bei der Volkshochschule Hagen an. Er braucht einen Beratungstermin — und muss einen alten Termin loswerden.',
    lines: [
      { sp: 'Frau Yilmaz', txt: 'Volkshochschule Hagen, Yilmaz, guten Tag.' },
      { sp: 'Amir', txt: 'Guten Tag, Frau Yilmaz. Mein Name ist Amir Rahimi. Kann ich einen Termin für die Kursberatung bekommen?' },
      { sp: 'Frau Yilmaz', txt: 'Natürlich. Wann können Sie denn kommen?' },
      { sp: 'Amir', txt: 'Am Montag kann ich leider nicht, da muss ich arbeiten. Dienstagnachmittag würde gehen.' },
      { sp: 'Frau Yilmaz', txt: 'Dienstag um 15 Uhr ist noch frei. Passt Ihnen das?' },
      { sp: 'Amir', txt: 'Das passt mir sehr gut. Und noch etwas: Meinen Termin am Freitag muss ich leider absagen.' },
      { sp: 'Frau Yilmaz', txt: 'Kein Problem. Sagen Sie uns bitte immer einen Tag vorher Bescheid.' },
      { sp: 'Amir', txt: 'Mache ich. Ich will ja im September pünktlich mit dem Kurs anfangen.' },
      { sp: 'Frau Yilmaz', txt: 'Sehr gern. Dann bis Dienstag um 15 Uhr, Herr Rahimi.' }
    ]
  },
  vokabeln: [
    { de: 'der Termin', em: '📅', bsp: 'Am Dienstag habe ich einen Termin.' },
    { de: 'einen Termin vereinbaren', em: '🤝', bsp: 'Ich möchte einen Termin vereinbaren.' },
    { de: 'absagen', em: '❌', bsp: 'Ich muss den Termin leider absagen.' },
    { de: 'verschieben', em: '↔️', bsp: 'Können wir den Termin auf Mittwoch verschieben?' },
    { de: 'Bescheid sagen', em: '📣', bsp: 'Sag mir bitte einen Tag vorher Bescheid.' },
    { de: 'Das passt mir.', em: '✅', bsp: 'Dienstag um 15 Uhr passt mir.' },
    { de: 'frei sein', em: '🕒', bsp: 'Am Dienstag ist noch ein Termin frei.' },
    { de: 'die Beratung', em: '💬', bsp: 'Die Kursberatung dauert 20 Minuten.' },
    { de: 'der Nachmittag', em: '🌤️', bsp: 'Am Nachmittag habe ich Zeit.' },
    { de: 'pünktlich', em: '⏱️', bsp: 'Komm bitte pünktlich, nicht fünf Minuten später.' },
    { de: 'dringend', em: '⚠️', bsp: 'Der Termin ist dringend, es geht um die Anmeldung.' },
    { de: 'vorher', em: '⏪', bsp: 'Bitte rufen Sie einen Tag vorher an.' },
    { de: 'die Uhrzeit', em: '🕓', bsp: 'Welche Uhrzeit passt dir am besten?' }
  ],
  grammatik: {
    title: 'Grammatik im Kontext',
    blocks: [
      {
        h: 'können · müssen · wollen im Präsens',
        txt: 'Diese drei Verben sagen, was möglich, was nötig und was gewollt ist. Sie stehen fast nie allein — das zweite Verb kommt im Infinitiv ans Satzende.',
        table: [
          ['', 'können', 'müssen', 'wollen'],
          ['ich', 'kann', 'muss', 'will'],
          ['du', 'kannst', 'musst', 'willst'],
          ['er / sie / es', 'kann', 'muss', 'will'],
          ['wir', 'können', 'müssen', 'wollen'],
          ['ihr', 'könnt', 'müsst', 'wollt'],
          ['sie / Sie', 'können', 'müssen', 'wollen']
        ],
        note: 'ich und er/sie/es sind gleich — und ohne Endung: ich kann, er kann. Das zweite Verb bleibt im Infinitiv: Ich muss arbeiten.'
      },
      {
        h: 'Das Verb steht auf Position 2',
        txt: 'Vor dem Verb steht genau ein Element — nicht zwei. Alles andere kommt danach.',
        table: [
          ['Position 1', 'Verb', 'Mittelfeld', 'Satzende'],
          ['Ich', 'kann', 'am Dienstag', 'kommen.'],
          ['Am Dienstag', 'kann', 'ich', 'kommen.'],
          ['Den Termin am Freitag', 'muss', 'ich leider', 'absagen.'],
          ['Wann', 'können', 'Sie', 'kommen?']
        ],
        note: 'Steht etwas anderes vorne, rutscht das Subjekt hinter das Verb. Also: <b>Am Dienstag kann ich</b> — nicht „Am Dienstag ich kann".'
      }
    ]
  },
  uebungen: [
    { typ: 'listen', audio: 'Am Montag kann ich leider nicht, da muss ich arbeiten.', frage: 'Hör zu: Warum kann er am Montag nicht?', optionen: ['Er muss arbeiten.', 'Er ist krank.', 'Er hat schon einen anderen Termin.'], richtig: 0 },
    { typ: 'mc', frage: 'Ich ___ den Termin leider absagen.', optionen: ['muss', 'musst', 'müssen'], richtig: 0, hinweis: 'Bei ich hat das Modalverb keine Endung.' },
    { typ: 'mc', frage: 'Wortstellung: Welcher Satz ist richtig?', optionen: ['Am Dienstag kann ich kommen.', 'Am Dienstag ich kann kommen.', 'Ich am Dienstag kann kommen.'], richtig: 0, hinweis: 'Vor dem konjugierten Verb steht nur ein Element.' },
    { typ: 'mc', frage: 'Höflich absagen — was sagst du am Telefon?', optionen: ['Ich muss den Termin leider absagen. Können wir ihn verschieben?', 'Ich komme nicht.', 'Der Termin interessiert mich nicht mehr.'], richtig: 0, hinweis: 'Höflich heißt: Grund andeuten, sich entschuldigen, eine Lösung anbieten.' },
    { typ: 'gapbank', frage: 'Setz die Modalverben ein.', text: 'Am Montag ___ ich nicht kommen, da ___ ich arbeiten. Aber am Dienstag ___ ich Zeit.', bank: ['kann', 'muss', 'habe', 'will', 'darf'], loesung: ['kann', 'muss', 'habe'], hinweis: 'Möglichkeit → können · Pflicht → müssen. Das dritte Verb ist kein Modalverb.' },
    { typ: 'order', frage: 'Bring die Absage in die richtige Reihenfolge!', woerter: ['muss', 'Den', 'ich', 'absagen', 'Termin', 'leider'], loesung: 'Den Termin muss ich leider absagen', hinweis: 'Das Modalverb auf Position 2, der Infinitiv ganz ans Ende.' },
    { typ: 'order', frage: 'Bau die Frage!', woerter: ['kommen', 'Wann', 'Sie', 'können'], loesung: 'Wann können Sie kommen', hinweis: 'W-Wort auf Position 1, dann sofort das Verb.' },
    { typ: 'match', frage: 'Termin-Wortschatz: Was passt zusammen?', paare: [['absagen', '❌ doch nicht kommen'], ['verschieben', '↔️ auf einen anderen Tag legen'], ['Bescheid sagen', '📣 kurz informieren'], ['pünktlich', '⏱️ genau zur richtigen Zeit'], ['die Beratung', '💬 ein Gespräch mit Fachleuten']] },
    { typ: 'bild', bild: 'th-tag', frage: 'Dein Kalender ist voll und der vorgeschlagene Tag passt nicht. Was sagst du?', optionen: ['Da kann ich leider nicht. Können wir den Termin verschieben?', 'Ich will an dem Tag nicht.', 'Der Tag ist schlecht, suchen Sie einen neuen.', 'Nein.'], richtig: 0, hinweis: 'Eine Frage mit können klingt freundlicher als eine reine Absage.' },
    { typ: 'type', frage: 'Sag am Telefon ab: Du kannst am Freitag nicht kommen.', muster: 'Ich muss meinen Termin am Freitag leider absagen.', akzeptiert: ['muss .+absagen', 'kann .+nicht kommen', 'absagen'], hinweis: 'Modalverb auf Position 2, Infinitiv ans Satzende.' }
  ],
  zusammenfassung: {
    kernsaetze: [
      'Kann ich einen Termin für … bekommen?',
      'Wann können Sie kommen? – Am Dienstagnachmittag kann ich.',
      'Passt Ihnen der Termin? – Ja, das passt mir gut.',
      'Ich muss den Termin am Freitag leider absagen.',
      'Können wir den Termin verschieben? Ich sage Ihnen vorher Bescheid.'
    ],
    merke: [
      'Modalverben: <b>ich kann · du kannst · er kann</b> — bei <b>ich</b> und <b>er/sie/es</b> keine Endung.',
      'Das zweite Verb steht im <b>Infinitiv am Satzende</b>: Ich muss am Freitag <b>arbeiten</b>.',
      'Das konjugierte Verb steht immer auf <b>Position 2</b>. Steht die Zeitangabe vorne, kommt das Subjekt dahinter: Am Dienstag <b>kann ich</b>.'
    ],
    tipp: 'Sprich diese Woche eine echte Terminanfrage auf Deutsch — beim Friseur, in der Apotheke oder bei der Sprachschule. Schreib dir vorher drei Sätze auf einen Zettel: Anliegen, Wunschtag, Danke. Mehr brauchst du nicht.'
  },
  sprechen: {
    task: 'Ruf an und vereinbare einen Termin: Sag, wer du bist und was du willst, nenne einen Tag, an dem du nicht kannst, und einigt euch auf eine Uhrzeit. Sag am Ende noch einen alten Termin ab.',
    tipps: ['Guten Tag, mein Name ist … Kann ich einen Termin für … bekommen?', 'Am Montag kann ich leider nicht, da muss ich arbeiten.', 'Dienstag um 15 Uhr passt mir gut.', 'Meinen Termin am Freitag muss ich leider absagen.']
  }
};
