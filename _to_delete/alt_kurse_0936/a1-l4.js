// Alltagsdeutsch A1 – Lektion 4: Essen & Trinken
// deutschoderwas club · Kursmaterial
window.LEKTION = {
  meta: { kurs: 'Alltagsdeutsch A1', nr: 4, titel: 'Essen & Trinken', level: 'A1', bild: 'th-essen', dauer: 'ca. 15 Min' },
  intro: {
    text: 'Heute bestellst du zum ersten Mal etwas auf Deutsch — im Café, am Imbiss, in der Kantine. Du lernst die zwei Sätze, mit denen du in Deutschland überall durchkommst: „Ich möchte …" und „Ich hätte gern …". Und du merkst: Nach diesen Sätzen wird aus „der" plötzlich „den".',
    du_lernst: ['Essen und Getränke benennen', 'Höflich bestellen', 'Akkusativ: der wird den', 'Ich möchte / Ich hätte gern']
  },
  dialog: {
    bild: 'th-essen',
    situation: 'Mittagspause im Café Lindner. Mehmet und Sofia setzen sich an einen Tisch, Kellner Tobias kommt an den Tisch.',
    lines: [
      { sp: 'Tobias', txt: 'Guten Tag! Was möchten Sie bestellen?' },
      { sp: 'Sofia', txt: 'Ich hätte gern eine Suppe und einen Tee, bitte.' },
      { sp: 'Tobias', txt: 'Sehr gern. Und Sie?' },
      { sp: 'Mehmet', txt: 'Ich möchte den Salat. Und ein Wasser, bitte.' },
      { sp: 'Tobias', txt: 'Tut mir leid, der Salat ist heute schon aus.' },
      { sp: 'Mehmet', txt: 'Oh, schade. Dann nehme ich das Brot mit Käse.' },
      { sp: 'Tobias', txt: 'Gute Wahl. Möchten Sie danach noch einen Kaffee?' },
      { sp: 'Mehmet', txt: 'Nein danke, nur das Wasser.' },
      { sp: 'Sofia', txt: 'Gut. Und die Rechnung später bitte zusammen.' }
    ]
  },
  vokabeln: [
    { de: 'das Frühstück', em: '🥐', bsp: 'das Essen am Morgen' },
    { de: 'das Mittagessen', em: '🍽️', bsp: 'das Essen um zwölf' },
    { de: 'das Abendessen', em: '🍲', bsp: 'das Essen am Abend' },
    { de: 'der Kaffee', em: '☕', bsp: 'Ich möchte einen Kaffee.' },
    { de: 'der Tee', em: '🍵', bsp: 'Ich hätte gern einen Tee.' },
    { de: 'das Wasser', em: '💧', bsp: 'Ein Wasser, bitte.' },
    { de: 'das Brot', em: '🍞', bsp: 'Ich nehme das Brot mit Käse.' },
    { de: 'der Käse', em: '🧀', bsp: 'Brot mit Käse' },
    { de: 'die Suppe', em: '🥣', bsp: 'Ich hätte gern die Suppe.' },
    { de: 'der Salat', em: '🥗', bsp: 'Der Salat ist heute aus.' },
    { de: 'Ich möchte …', em: '🙋', bsp: 'Ich möchte einen Kaffee.' },
    { de: 'Ich hätte gern …', em: '🙏', bsp: 'besonders höflich beim Bestellen' },
    { de: 'die Rechnung', em: '🧾', bsp: 'Die Rechnung, bitte!' },
    { de: 'Guten Appetit!', em: '😋', bsp: 'sagt man vor dem Essen' }
  ],
  grammatik: {
    title: 'Grammatik im Kontext',
    blocks: [
      {
        h: 'Akkusativ – wenn du etwas willst',
        txt: 'Bestellst du etwas, steht das Wort im Akkusativ. Nur ein einziger Artikel ändert sich dabei:',
        table: [
          ['Nominativ (das ist)', 'Akkusativ (ich möchte)', 'Beispiel'],
          ['der Salat', 'den Salat', 'Ich möchte den Salat.'],
          ['die Suppe', 'die Suppe', 'Ich hätte gern die Suppe.'],
          ['das Brot', 'das Brot', 'Ich nehme das Brot.'],
          ['ein Tee (der Tee)', 'einen Tee', 'Ich hätte gern einen Tee.'],
          ['eine Suppe / ein Wasser', 'eine Suppe / ein Wasser', 'Eine Suppe und ein Wasser, bitte.']
        ],
        note: 'Nur der maskuline Artikel wandert: der → den, ein → einen. die und das bleiben genau, wie sie sind.'
      },
      {
        h: 'Ich möchte · Ich hätte gern · Ich nehme',
        txt: 'Drei Bestellsätze, die überall funktionieren — von höflich bis ganz normal:',
        table: [
          ['Satz', 'Beispiel', 'Wann?'],
          ['Ich möchte …', 'Ich möchte den Salat.', 'immer richtig, freundlich'],
          ['Ich hätte gern …', 'Ich hätte gern einen Tee.', 'besonders höflich'],
          ['Ich nehme …', 'Ich nehme das Brot.', 'kurz, im Café ganz normal'],
          ['Möchten Sie …?', 'Möchten Sie einen Kaffee?', 'so fragt der Kellner']
        ],
        note: 'Nach möchte, hätte gern und nehme kommt immer der Akkusativ. Sag nie „Ich will …" — das klingt im Café unfreundlich.'
      }
    ]
  },
  uebungen: [
    { typ: 'listen', audio: 'Ich hätte gern einen Tee und eine Suppe.', frage: 'Hör zu: Was bestellt sie?', optionen: ['einen Tee und eine Suppe', 'einen Kaffee und ein Brot', 'einen Tee und einen Salat'], richtig: 0 },
    { typ: 'mc', frage: 'Ich möchte ___ Salat.', optionen: ['den', 'der', 'dem'], richtig: 0, hinweis: 'Im Akkusativ wird aus der → den. die und das bleiben gleich.' },
    { typ: 'mc', frage: 'Welcher Satz klingt im Café am höflichsten?', optionen: ['Ich hätte gern eine Suppe, bitte.', 'Ich will eine Suppe.', 'Suppe!'], richtig: 0, hinweis: '„Ich hätte gern …" ist die höflichste Bestellform. „Ich will" wirkt fordernd.' },
    { typ: 'gapbank', frage: 'Welcher Artikel passt?', text: 'Ich möchte ___ Kaffee und ___ Suppe.', bank: ['einen', 'eine', 'ein'], loesung: ['einen', 'eine'], hinweis: 'der Kaffee → einen · die Suppe → eine. Nur maskulin bekommt -en.' },
    { typ: 'match', frage: 'Was gehört im Café zusammen?', paare: [['der Kaffee', '☕ Getränk am Morgen'], ['das Brot', '🍞 schmeckt mit Käse'], ['die Rechnung', '🧾 kommt am Ende'], ['Guten Appetit!', '😋 sagt man vor dem Essen']] },
    { typ: 'order', frage: 'Bring die Bestellung in die richtige Reihenfolge!', woerter: ['gern', 'Ich', 'hätte', 'Suppe', 'die'], loesung: 'Ich hätte gern die Suppe', hinweis: 'Erst die Person, dann hätte, dann gern — und zum Schluss die Bestellung.' },
    { typ: 'bild', bild: 'th-essen', frage: 'Wo sitzen die Leute auf dem Bild?', optionen: ['in einem Café', 'in einem Supermarkt', 'in einem Bus', 'in einer Arztpraxis'], richtig: 0, hinweis: 'Achte auf Tische, Tassen und Teller.' },
    { typ: 'mc', frage: 'Der Kellner fragt: „Möchten Sie einen Kaffee?" Du willst nur Wasser. Was sagst du?', optionen: ['Nein danke, ich möchte nur ein Wasser.', 'Ja, kein Kaffee bitte.', 'Nein, ich hätte gern einen Kaffee.'], richtig: 0, hinweis: 'Erst höflich ablehnen („Nein danke"), dann sagen, was du wirklich willst.' },
    { typ: 'type', frage: 'Du sitzt im Café. Bestelle etwas zu essen und zu trinken.', muster: 'Ich hätte gern eine Suppe und einen Tee, bitte.', akzeptiert: ['^ich hätte gern .+', '^ich möchte .+', '^ich nehme .+'], hinweis: 'Beginne mit „Ich hätte gern …", „Ich möchte …" oder „Ich nehme …" und denk an den Akkusativ.' }
  ],
  zusammenfassung: {
    kernsaetze: [
      'Ich hätte gern eine Suppe und einen Tee, bitte.',
      'Ich möchte den Salat.',
      'Dann nehme ich das Brot mit Käse.',
      'Nein danke, nur das Wasser.',
      'Die Rechnung, bitte! – Guten Appetit!'
    ],
    merke: [
      'Akkusativ: <b>der → den</b>, <b>ein → einen</b>. <b>die</b> und <b>das</b> bleiben unverändert.',
      'Höflich bestellen: <b>Ich hätte gern …</b> oder <b>Ich möchte …</b> — nie „Ich will …".',
      'Nach <b>möchte</b>, <b>hätte gern</b> und <b>nehme</b> steht die Bestellung immer im <b>Akkusativ</b>.'
    ],
    tipp: 'Bestell diese Woche einmal wirklich auf Deutsch — Bäckerei, Imbiss oder Café, egal wo. Ein Satz reicht: „Ich hätte gern einen Kaffee, bitte." Beim zweiten Mal zittert die Stimme schon nicht mehr.'
  },
  sprechen: {
    task: 'Spiel die Bestellung laut durch: Du kommst ins Café, begrüßt den Kellner, bestellst ein Getränk und etwas zu essen und fragst am Ende nach der Rechnung.',
    tipps: ['Guten Tag!', 'Ich hätte gern … , bitte.', 'Ich möchte den / die / das …', 'Die Rechnung, bitte!']
  }
};
