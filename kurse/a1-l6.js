// Alltagsdeutsch A1 – Lektion 6: Einkaufen im Supermarkt
// deutschoderwas club · Kursmaterial
window.LEKTION = {
  meta: { kurs: 'Alltagsdeutsch A1', nr: 6, titel: 'Einkaufen im Supermarkt', level: 'A1', bild: 'th-einkauf', dauer: 'ca. 15 Min' },
  intro: {
    text: 'Im Supermarkt brauchst du zwei Dinge: Du musst sagen können, wie viel du willst, und du musst fragen können, wo etwas steht. Heute lernst du beides. Und du siehst, warum es „ein Ei" heißt, aber „zehn Eier" — der Plural hat im Deutschen mehrere Endungen.',
    du_lernst: ['Lebensmittel im Supermarkt', 'Plural: die Eier, die Tomaten, die Brötchen', 'Mengen: ein Kilo, eine Packung', 'Fragen, wo etwas steht']
  },
  dialog: {
    bild: 'th-einkauf',
    situation: 'Fatima kauft nach der Arbeit ein. An der Theke im Supermarkt steht Herr Schneider.',
    lines: [
      { sp: 'Fatima', txt: 'Entschuldigung, wo finde ich die Eier?' },
      { sp: 'Herr Schneider', txt: 'Die Eier stehen hinten links, direkt neben der Milch.' },
      { sp: 'Fatima', txt: 'Danke! Und ich hätte gern ein Kilo Tomaten.' },
      { sp: 'Herr Schneider', txt: 'Sehr gern. Sonst noch etwas?' },
      { sp: 'Fatima', txt: 'Ja, zwei Packungen Nudeln und eine Flasche Öl.' },
      { sp: 'Herr Schneider', txt: 'Die Nudeln sind heute im Angebot — drei Packungen für zwei Euro.' },
      { sp: 'Fatima', txt: 'Super, dann nehme ich drei Packungen.' },
      { sp: 'Herr Schneider', txt: 'Und die Brötchen? Die sind ganz frisch von heute Morgen.' },
      { sp: 'Fatima', txt: 'Nein danke, das ist alles. Ich kaufe morgen wieder ein.' }
    ]
  },
  vokabeln: [
    { de: 'der Supermarkt', em: '🏪', bsp: 'Ich kaufe im Supermarkt ein.' },
    { de: 'das Ei / die Eier', em: '🥚', bsp: 'zehn Eier' },
    { de: 'die Tomate / die Tomaten', em: '🍅', bsp: 'ein Kilo Tomaten' },
    { de: 'die Nudeln', em: '🍝', bsp: 'gibt es nur im Plural' },
    { de: 'das Brötchen / die Brötchen', em: '🥖', bsp: 'im Plural gleich wie im Singular' },
    { de: 'die Milch', em: '🥛', bsp: 'ein Liter Milch' },
    { de: 'das Öl', em: '🫒', bsp: 'eine Flasche Öl' },
    { de: 'ein Kilo …', em: '⚖️', bsp: 'ein Kilo Tomaten' },
    { de: 'ein Liter …', em: '🧴', bsp: 'zwei Liter Milch' },
    { de: 'eine Packung …', em: '📦', bsp: 'zwei Packungen Nudeln' },
    { de: 'eine Flasche …', em: '🍾', bsp: 'drei Flaschen Wasser' },
    { de: 'im Angebot', em: '🏷️', bsp: 'Die Nudeln sind heute im Angebot.' },
    { de: 'Wo finde ich …?', em: '🔍', bsp: 'Wo finde ich die Eier?' },
    { de: 'Sonst noch etwas?', em: '❓', bsp: 'fragt der Verkäufer am Ende' }
  ],
  grammatik: {
    title: 'Grammatik im Kontext',
    blocks: [
      {
        h: 'Der Plural – fünf Endungen, ein Artikel',
        txt: 'Im Plural heißt der Artikel immer „die". Nur die Endung am Wort ist verschieden:',
        table: [
          ['Endung', 'Singular', 'Plural'],
          ['-n / -en', 'die Tomate', 'die Tomaten'],
          ['-e', 'das Brot', 'die Brote'],
          ['-er', 'das Ei', 'die Eier'],
          ['keine Endung', 'das Brötchen', 'die Brötchen'],
          ['-s', 'der Joghurt', 'die Joghurts']
        ],
        note: 'Die gute Nachricht: Im Plural ist der Artikel immer „die" — bei jedem Wort. Die schlechte: Die Endung musst du gleich mit dem Wort zusammen lernen.'
      },
      {
        h: 'Mengenangaben – wie viel willst du?',
        txt: 'Erst die Menge, dann die Ware. Dazwischen steht nichts — kein „von", kein Artikel:',
        table: [
          ['Menge', 'Beispiel', 'Achtung'],
          ['ein Kilo', 'ein Kilo Tomaten', 'Maß bleibt: zwei Kilo Tomaten'],
          ['ein Liter', 'ein Liter Milch', 'Maß bleibt: drei Liter Milch'],
          ['eine Packung', 'zwei Packungen Nudeln', 'Behälter im Plural: Packungen'],
          ['eine Flasche', 'drei Flaschen Öl', 'Behälter im Plural: Flaschen']
        ],
        note: 'Maße wie Kilo, Liter und Gramm bleiben auch bei mehreren gleich. Behälter wie Packung und Flasche bekommen die Pluralendung. Die Ware dahinter ändert sich nie.'
      }
    ]
  },
  uebungen: [
    { typ: 'listen', audio: 'Ich hätte gern ein Kilo Tomaten und zwei Packungen Nudeln.', frage: 'Hör zu: Was kauft sie?', optionen: ['1 Kilo Tomaten und 2 Packungen Nudeln', '2 Kilo Tomaten und 1 Packung Nudeln', '1 Kilo Nudeln und 2 Packungen Tomaten'], richtig: 0 },
    { typ: 'mc', frage: 'Wie heißt der Plural von „das Ei"?', optionen: ['die Eier', 'die Eien', 'die Eis'], richtig: 0, hinweis: 'Manche kurzen Nomen bekommen im Plural die Endung -er.' },
    { typ: 'mc', frage: 'Der Artikel im Plural ist …', optionen: ['immer die', 'immer der', 'immer das'], richtig: 0, hinweis: 'Egal ob der, die oder das im Singular — im Plural steht immer „die".' },
    { typ: 'gapbank', frage: 'Welche Menge passt?', text: 'Ich nehme ein ___ Tomaten, eine ___ Öl und zwei ___ Nudeln.', bank: ['Kilo', 'Flasche', 'Packungen', 'Liter'], loesung: ['Kilo', 'Flasche', 'Packungen'], hinweis: 'Gewicht in Kilo, Flüssigkeit in der Flasche, trockene Ware in der Packung. Ab zwei steht der Behälter im Plural.' },
    { typ: 'match', frage: 'Welche Menge passt zu welcher Ware?', paare: [['ein Kilo', '⚖️ Tomaten'], ['ein Liter', '🥛 Milch'], ['eine Packung', '📦 Nudeln'], ['eine Flasche', '🍾 Öl'], ['im Angebot', '🏷️ heute billiger']] },
    { typ: 'order', frage: 'Stell die Mengenangabe an die richtige Stelle!', woerter: ['Kilo', 'hätte', 'Ich', 'ein', 'gern', 'Tomaten'], loesung: 'Ich hätte gern ein Kilo Tomaten', hinweis: 'Erst der Bestellsatz, dann die Menge, dann die Ware.' },
    { typ: 'bild', bild: 'th-einkauf', frage: 'Wo ist diese Situation?', optionen: ['im Supermarkt', 'in einem Restaurant', 'in einer Arztpraxis', 'im Deutschkurs'], richtig: 0, hinweis: 'Achte auf Regale, Einkaufswagen und Preisschilder.' },
    { typ: 'mc', frage: 'Du willst zwei Flaschen Wasser. Was sagst du?', optionen: ['Ich hätte gern zwei Flaschen Wasser.', 'Ich hätte gern zwei Flasche Wassers.', 'Ich hätte gern zwei Wasser Flaschen.'], richtig: 0, hinweis: 'Der Behälter kommt in den Plural, die Ware bleibt unverändert dahinter stehen.' },
    { typ: 'order', frage: 'Bau die Frage an den Verkäufer!', woerter: ['die', 'Wo', 'ich', 'Eier', 'finde'], loesung: 'Wo finde ich die Eier', hinweis: 'W-Wort zuerst, dann das Verb, dann die Person.' },
    { typ: 'type', frage: 'Was brauchst du diese Woche? Schreib deinen Einkauf mit mindestens einer Mengenangabe.', muster: 'Ich brauche ein Kilo Kartoffeln und zwei Flaschen Wasser.', akzeptiert: ['^ich brauche .+', '^ich hätte gern .+', '^ich kaufe .+', '^ich nehme .+'], hinweis: 'Menge und Ware stehen direkt nebeneinander — ohne Artikel und ohne „von" dazwischen.' }
  ],
  zusammenfassung: {
    kernsaetze: [
      'Entschuldigung, wo finde ich die Eier?',
      'Ich hätte gern ein Kilo Tomaten.',
      'Zwei Packungen Nudeln und eine Flasche Öl, bitte.',
      'Die Nudeln sind heute im Angebot.',
      'Nein danke, das ist alles.'
    ],
    merke: [
      'Im Plural steht der Artikel <b>immer die</b> — die Eier, die Tomaten, die Brötchen.',
      'Plural-Endungen: <b>-n/-en</b>, <b>-e</b>, <b>-er</b>, <b>-s</b> oder <b>gar keine</b>. Lern sie gleich mit dem Wort.',
      'Mengenangabe + Ware, <b>ohne</b> Artikel dazwischen: ein Kilo <b>Tomaten</b>, zwei Packungen <b>Nudeln</b>.'
    ],
    tipp: 'Schreib deinen nächsten Einkaufszettel komplett auf Deutsch — und immer mit Menge davor: „2 Liter Milch, 1 Kilo Tomaten, 3 Packungen Nudeln". Im Laden liest du ihn dann leise mit. So lernst du Plural und Menge genau da, wo du sie brauchst.'
  },
  sprechen: {
    task: 'Spiel den Einkauf an der Theke: Frag, wo etwas steht, und bestell dann drei Dinge mit einer Mengenangabe. Antworte am Ende auf die Frage „Sonst noch etwas?".',
    tipps: ['Entschuldigung, wo finde ich …?', 'Ich hätte gern ein Kilo / einen Liter …', 'Zwei Packungen … und eine Flasche …, bitte.', 'Nein danke, das ist alles.']
  }
};
