// Alltagsdeutsch A1 – Lektion 1: Hallo! Ich bin …
// deutschoderwas club · Kursmaterial
window.LEKTION = {
  meta: { kurs: 'Alltagsdeutsch A1', nr: 1, titel: 'Hallo! Ich bin …', level: 'A1', bild: 'photo-1543269865-cbf427effbad', dauer: 'ca. 15 Min' },
  intro: {
    text: 'Willkommen zu deiner ersten Lektion! Heute lernst du, wie du dich auf Deutsch vorstellst: dein Name, dein Land, deine Stadt. Am Ende sprichst du deine ersten eigenen Sätze — versprochen!',
    du_lernst: ['Begrüßen & verabschieden', 'Sich vorstellen', 'Fragen: Wie? Woher? Wo?', 'heißen · kommen · wohnen']
  },
  dialog: {
    bild: 'photo-1543269865-cbf427effbad',
    situation: 'Lena und Omar treffen sich im Deutschkurs. Es ist ihr erster Tag.',
    lines: [
      { sp: 'Lena', txt: 'Hallo! Ich heiße Lena. Wie heißt du?' },
      { sp: 'Omar', txt: 'Hallo, Lena! Ich bin Omar. Woher kommst du?' },
      { sp: 'Lena', txt: 'Ich komme aus Deutschland, aus Hagen. Und du?' },
      { sp: 'Omar', txt: 'Ich komme aus Syrien. Ich wohne jetzt in Köln.' },
      { sp: 'Lena', txt: 'Schön! Freut mich.' },
      { sp: 'Omar', txt: 'Freut mich auch! Bis später, Lena.' }
    ]
  },
  vokabeln: [
    { de: 'Hallo!', em: '👋', bsp: 'Hallo, Lena!' },
    { de: 'Guten Morgen!', em: '🌅', bsp: 'früh am Tag' },
    { de: 'Guten Tag!', em: '☀️', bsp: 'am Tag' },
    { de: 'Guten Abend!', em: '🌙', bsp: 'am Abend' },
    { de: 'Tschüss!', em: '👋', bsp: 'zum Abschied' },
    { de: 'Bis später!', em: '⏰', bsp: 'zum Abschied' },
    { de: 'Ich heiße …', em: '💬', bsp: 'Ich heiße Lena.' },
    { de: 'Ich bin …', em: '🙋', bsp: 'Ich bin Omar.' },
    { de: 'Wie heißt du?', em: '❓', bsp: 'Frage nach dem Namen' },
    { de: 'Woher kommst du?', em: '🌍', bsp: 'Frage nach dem Land' },
    { de: 'Ich komme aus …', em: '✈️', bsp: 'Ich komme aus Syrien.' },
    { de: 'Ich wohne in …', em: '🏠', bsp: 'Ich wohne in Köln.' },
    { de: 'Freut mich!', em: '😊', bsp: 'beim Kennenlernen' }
  ],
  grammatik: {
    title: 'Grammatik im Kontext',
    blocks: [
      {
        h: 'heißen · kommen · wohnen',
        txt: 'Das Verb ändert sich mit der Person:',
        table: [
          ['', 'heißen', 'kommen', 'wohnen'],
          ['ich', 'heiße', 'komme', 'wohne'],
          ['du', 'heißt', 'kommst', 'wohnst'],
          ['Sie (formell)', 'heißen', 'kommen', 'wohnen']
        ],
        note: 'ich → -e · du → -st · Sie → -en. Das funktioniert bei ganz vielen Verben!'
      },
      {
        h: 'W-Fragen',
        table: [
          ['Frage', 'Beispiel', 'Antwort'],
          ['Wie?', 'Wie heißt du?', 'Ich heiße Omar.'],
          ['Woher?', 'Woher kommst du?', 'Ich komme aus Syrien.'],
          ['Wo?', 'Wo wohnst du?', 'Ich wohne in Köln.']
        ],
        note: 'aus + Land (Ich komme aus Syrien) · in + Stadt (Ich wohne in Köln).'
      }
    ]
  },
  uebungen: [
    { typ: 'listen', audio: 'Ich heiße Omar.', frage: 'Hör zu: Was sagt er?', optionen: ['Ich heiße Omar.', 'Ich wohne in Oman.', 'Ich komme aus Rom.'], richtig: 0 },
    { typ: 'mc', frage: 'Wie ___ du?', optionen: ['heißt', 'heiße', 'heißen'], richtig: 0, hinweis: 'du → -st' },
    { typ: 'gapbank', frage: 'Füll die Lücken. Tipp auf die Wörter!', text: 'Ich ___ aus Syrien. Ich ___ jetzt in Köln.', bank: ['komme', 'wohne', 'heiße'], loesung: ['komme', 'wohne'], hinweis: 'aus + Land = kommen · in + Stadt = wohnen' },
    { typ: 'match', frage: 'Was passt zusammen?', paare: [['Guten Morgen!', '🌅 früh am Tag'], ['Guten Abend!', '🌙 am Abend'], ['Tschüss!', '👋 zum Abschied'], ['Freut mich!', '😊 beim Kennenlernen']] },
    { typ: 'order', frage: 'Bau den Satz!', woerter: ['heiße', 'Ich', 'Anna'], loesung: 'Ich heiße Anna', hinweis: 'Das Verb steht auf Position 2.' },
    { typ: 'order', frage: 'Bau die Frage!', woerter: ['kommst', 'Woher', 'du'], loesung: 'Woher kommst du', hinweis: 'W-Wort zuerst, dann das Verb.' },
    { typ: 'mc', frage: 'Ich komme ___ Italien und wohne ___ Berlin.', optionen: ['aus · in', 'in · aus', 'aus · aus'], richtig: 0, hinweis: 'aus + Land · in + Stadt' },
    { typ: 'bild', bild: 'photo-1543269865-cbf427effbad', frage: 'Diese Menschen lernen sich gerade kennen. Was sagen sie zuerst?', optionen: ['Freut mich!', 'Auf Wiedersehen!', 'Guten Appetit!', 'Gute Nacht!'], richtig: 0, hinweis: 'Beim Kennenlernen sagt man „Freut mich!"' },
    { typ: 'type', frage: 'Und du? Antworte: Wie heißt du?', muster: 'Ich heiße Maria.', akzeptiert: ['^ich hei(ß|ss)e .+', '^ich bin .+'], hinweis: 'Beginne mit „Ich heiße …" oder „Ich bin …"' }
  ],
  zusammenfassung: {
    kernsaetze: [
      'Hallo! / Guten Morgen! / Guten Tag! / Guten Abend!',
      'Ich heiße … / Ich bin …',
      'Wie heißt du? – Woher kommst du? – Wo wohnst du?',
      'Ich komme aus … und ich wohne in …',
      'Freut mich! / Tschüss! / Bis später!'
    ],
    merke: [
      '<b>ich</b> heiß<b>e</b> · <b>du</b> heiß<b>t</b> · <b>Sie</b> heiß<b>en</b> — die Endung verrät die Person.',
      '<b>aus</b> + Land (Ich komme <b>aus</b> Syrien) · <b>in</b> + Stadt (Ich wohne <b>in</b> Köln).',
      'Bei W-Fragen steht das Fragewort immer zuerst: <b>Woher</b> kommst du?'
    ],
    tipp: 'Stell dich diese Woche jeden Tag einmal laut vor — im Spiegel, beim Kaffee, egal wo. Nach sieben Tagen kommt der Satz ganz von allein.'
  },
  sprechen: {
    task: 'Stell dich vor — laut und auf Deutsch! Sag drei Sätze: dein Name, dein Land, deine Stadt.',
    tipps: ['Ich heiße … / Ich bin …', 'Ich komme aus …', 'Ich wohne in …']
  }
};
