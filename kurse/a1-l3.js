// Alltagsdeutsch A1 – Lektion 3: Meine Familie
window.LEKTION = {
  meta: { kurs: 'Alltagsdeutsch A1', nr: 3, titel: 'Meine Familie', level: 'A1', bild: 'a1-l3', dauer: 'ca. 15 Min' },
  intro: {
    text: 'Über die Familie zu sprechen ist eines der ersten Themen in jedem Gespräch. Heute lernst du die Familienwörter, „mein/meine" und wie du über deine Liebsten erzählst.',
    du_lernst: ['Familienwörter', 'mein / meine', 'haben: ich habe / du hast', 'Über Personen erzählen']
  },
  dialog: {
    bild: 'a1-l3',
    situation: 'Lena zeigt Omar ein Foto auf ihrem Handy.',
    lines: [
      { sp: 'Lena', txt: 'Schau mal, das ist meine Familie.' },
      { sp: 'Omar', txt: 'Schön! Wer ist das?' },
      { sp: 'Lena', txt: 'Das ist mein Bruder Tom. Er ist zwanzig.' },
      { sp: 'Omar', txt: 'Und hast du auch Geschwister?' },
      { sp: 'Lena', txt: 'Ja, ich habe einen Bruder und eine Schwester.' },
      { sp: 'Omar', txt: 'Ich habe keine Geschwister. Aber ich habe zwei Kinder!' }
    ]
  },
  vokabeln: [
    { de: 'die Familie', em: '👨‍👩‍👧', bsp: 'Das ist meine Familie.' },
    { de: 'die Mutter', em: '👩', bsp: 'Meine Mutter heißt Eva.' },
    { de: 'der Vater', em: '👨', bsp: 'Mein Vater ist 50.' },
    { de: 'die Eltern', em: '👫', bsp: 'Meine Eltern wohnen in Hagen.' },
    { de: 'der Bruder', em: '🧑', bsp: 'Mein Bruder heißt Tom.' },
    { de: 'die Schwester', em: '👧', bsp: 'Meine Schwester ist 15.' },
    { de: 'die Geschwister', em: '👦👧', bsp: 'Hast du Geschwister?' },
    { de: 'das Kind / die Kinder', em: '🧒', bsp: 'Ich habe zwei Kinder.' },
    { de: 'der Mann / die Frau', em: '💍', bsp: 'Das ist mein Mann.' },
    { de: 'die Oma / der Opa', em: '👵', bsp: 'Meine Oma ist 78.' },
    { de: 'Ich habe …', em: '🤲', bsp: 'Ich habe einen Bruder.' },
    { de: 'Ich habe keine …', em: '🚫', bsp: 'Ich habe keine Geschwister.' },
    { de: 'Wer ist das?', em: '❓', bsp: 'Frage nach der Person' }
  ],
  grammatik: {
    title: 'Grammatik im Kontext',
    blocks: [
      {
        h: 'haben – ich habe eine Familie',
        table: [
          ['Person', 'haben', 'Beispiel'],
          ['ich', 'habe', 'Ich habe zwei Kinder.'],
          ['du', 'hast', 'Hast du Geschwister?'],
          ['er/sie', 'hat', 'Sie hat einen Bruder.'],
          ['Sie (formell)', 'haben', 'Haben Sie Kinder?']
        ],
        note: 'Auch „haben" ist unregelmäßig — aber genauso wichtig wie „sein".'
      },
      {
        h: 'mein oder meine?',
        txt: 'Das hängt vom Artikel des Wortes ab:',
        table: [
          ['Artikel', 'Possessiv', 'Beispiel'],
          ['der Bruder', 'mein', 'mein Bruder'],
          ['das Kind', 'mein', 'mein Kind'],
          ['die Schwester', 'meine', 'meine Schwester'],
          ['die Eltern (Plural)', 'meine', 'meine Eltern']
        ],
        note: 'Faustregel: der/das → mein · die + Plural → meine. Genauso: dein, sein, ihr.'
      }
    ]
  },
  uebungen: [
    { typ: 'listen', audio: 'Ich habe einen Bruder und eine Schwester.', frage: 'Hör zu: Wen hat sie?', optionen: ['einen Bruder und eine Schwester', 'zwei Brüder', 'keine Geschwister'], richtig: 0 },
    { typ: 'mc', frage: '___ Schwester heißt Anna.', optionen: ['Meine', 'Mein', 'Meiner'], richtig: 0, hinweis: 'die Schwester → meine' },
    { typ: 'mc', frage: '___ du Kinder?', optionen: ['Hast', 'Habe', 'Hat'], richtig: 0, hinweis: 'du → hast' },
    { typ: 'gapbank', frage: 'Füll die Lücken!', text: 'Das ist ___ Vater. Und das sind ___ Eltern.', bank: ['mein', 'meine', 'meiner'], loesung: ['mein', 'meine'], hinweis: 'der Vater → mein · die Eltern (Plural) → meine' },
    { typ: 'match', frage: 'Was passt zusammen?', paare: [['die Mutter', '👩 Mama'], ['der Bruder', '🧑 Sohn der Eltern'], ['die Oma', '👵 Mutter der Mutter'], ['die Kinder', '🧒 Sohn & Tochter']] },
    { typ: 'order', frage: 'Bau den Satz!', woerter: ['habe', 'Ich', 'Kinder', 'zwei'], loesung: 'Ich habe zwei Kinder', hinweis: 'Verb auf Position 2.' },
    { typ: 'mc', frage: 'Ich bin Einzelkind. Also: Ich habe ___ Geschwister.', optionen: ['keine', 'nicht', 'kein'], richtig: 0, hinweis: 'die Geschwister (Plural) → keine' },
    { typ: 'bild', bild: 'a1-l3', frage: 'Was siehst du auf dem Bild?', optionen: ['eine Familie', 'ein Büro', 'eine Schule', 'ein Krankenhaus'], richtig: 0, hinweis: 'Mehrere Personen, die zusammengehören.' },
    { typ: 'type', frage: 'Erzähl von deiner Familie: Hast du Geschwister?', muster: 'Ich habe eine Schwester.', akzeptiert: ['^ich habe .+', '^ich bin einzelkind'], hinweis: 'Beginne mit „Ich habe …" oder „Ich habe keine …"' }
  ],
  zusammenfassung: {
    kernsaetze: [
      'Das ist meine Familie.',
      'Ich habe einen Bruder und eine Schwester.',
      'Ich habe keine Geschwister.',
      'Meine Mutter heißt … und ist … Jahre alt.',
      'Wer ist das?'
    ],
    merke: [
      '<b>haben</b>: ich <b>habe</b> · du <b>hast</b> · er/sie <b>hat</b> · Sie <b>haben</b>.',
      '<b>der</b>/<b>das</b> → <b>mein</b> (mein Bruder, mein Kind) · <b>die</b> + Plural → <b>meine</b> (meine Schwester, meine Eltern).',
      'Verneinung bei Personen/Dingen: Ich habe <b>keine</b> Geschwister (nicht „nicht Geschwister").'
    ],
    tipp: 'Nimm ein Familienfoto und beschreibe jede Person laut auf Deutsch: Name, Alter, Wohnort. Das verbindet die Wörter mit echten Gesichtern — so vergisst du sie nicht mehr.'
  },
  sprechen: {
    task: 'Beschreibe deine Familie in vier Sätzen: Wer gehört dazu, wie heißen sie, wie alt sind sie, wo wohnen sie?',
    tipps: ['Meine Mutter heißt … und ist … Jahre alt.', 'Ich habe … Geschwister.', 'Meine Familie wohnt in …']
  }
};
