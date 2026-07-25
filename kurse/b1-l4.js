// Alltagsdeutsch B1 – Lektion 4: Gesund leben
// deutschoderwas club · Kursmaterial
window.LEKTION = {
  meta: { kurs: 'Alltagsdeutsch B1', nr: 4, titel: 'Gesund leben', level: 'B1', bild: 'th-arzt', dauer: 'ca. 20 Min' },
  intro: {
    text: 'Beim Arzt reicht es nicht zu sagen, wo es wehtut. Du musst erklären, warum du etwas tust — und warum du es trotz guter Vorsätze nicht tust. Heute lernst du die drei Sätze, die dafür gebraucht werden: obwohl für den Widerspruch, damit und um … zu für das Ziel.',
    du_lernst: ['Beschwerden und Gewohnheiten beschreiben', 'Widersprüche mit obwohl ausdrücken', 'Ziele mit damit und um … zu formulieren', 'Wortschatz Gesundheit, Bewegung und Ernährung']
  },
  dialog: {
    bild: 'th-arzt',
    situation: 'Sofia ist zur Vorsorgeuntersuchung bei Dr. Berger. Sie schläft schlecht und hat seit Monaten Rückenschmerzen.',
    lines: [
      { sp: 'Dr. Berger', txt: 'Ihre Werte sind in Ordnung, Frau Marchetti. Aber Sie sehen erschöpft aus. Wie schlafen Sie?' },
      { sp: 'Sofia', txt: 'Schlecht. Obwohl ich um zehn im Bett liege, bin ich morgens wie gerädert.' },
      { sp: 'Dr. Berger', txt: 'Und was machen Sie zwischen zehn und dem Einschlafen?' },
      { sp: 'Sofia', txt: 'Handy, ehrlich gesagt. Ich lese noch Nachrichten, um abzuschalten.' },
      { sp: 'Dr. Berger', txt: 'Das Handy schaltet Sie eher an als ab. Legen Sie es eine Stunde vorher weg, damit Ihr Kopf zur Ruhe kommt.' },
      { sp: 'Sofia', txt: 'Und der Rücken? Der tut weh, obwohl ich dreimal die Woche schwimmen gehe.' },
      { sp: 'Dr. Berger', txt: 'Schwimmen ist gut, reicht aber nicht. Sie sitzen acht Stunden am Tag. Stehen Sie jede Stunde einmal auf, um sich kurz zu strecken.' },
      { sp: 'Sofia', txt: 'Das vergesse ich garantiert.' },
      { sp: 'Dr. Berger', txt: 'Dann stellen Sie sich einen Wecker, damit Sie es nicht vergessen. Und ich schreibe Ihnen eine Überweisung für die Physiotherapie.' },
      { sp: 'Sofia', txt: 'Gut. Ich probiere beides zwei Wochen aus und melde mich dann wieder.' }
    ]
  },
  vokabeln: [
    { de: 'die Vorsorgeuntersuchung', em: '🩺', bsp: 'Einmal im Jahr zur Vorsorgeuntersuchung' },
    { de: 'die Beschwerden', em: '😖', bsp: 'Ich habe seit Monaten Beschwerden im Rücken.' },
    { de: 'die Werte', em: '📊', bsp: 'Ihre Werte sind in Ordnung.' },
    { de: 'erschöpft', em: '🥱', bsp: 'Abends bin ich völlig erschöpft.' },
    { de: 'einschlafen', em: '😴', bsp: 'Ich kann abends schlecht einschlafen.' },
    { de: 'abschalten', em: '🔌', bsp: 'Nach der Arbeit kann ich nicht abschalten.' },
    { de: 'sich bewegen', em: '🚶', bsp: 'Ich bewege mich zu wenig.' },
    { de: 'sich strecken', em: '🙆', bsp: 'Steh auf und streck dich kurz.' },
    { de: 'die Ernährung', em: '🥗', bsp: 'Meine Ernährung ist nicht ausgewogen.' },
    { de: 'ausgewogen', em: '⚖️', bsp: 'ausgewogen essen: Gemüse, Eiweiß, wenig Zucker' },
    { de: 'der Stress', em: '💢', bsp: 'Der Stress im Job macht mich fertig.' },
    { de: 'die Überweisung', em: '📄', bsp: 'Der Arzt schreibt eine Überweisung zum Facharzt.' },
    { de: 'die Physiotherapie', em: '🤸', bsp: 'Ich habe zehnmal Physiotherapie bekommen.' },
    { de: 'zur Ruhe kommen', em: '🌙', bsp: 'Abends muss der Kopf zur Ruhe kommen.' },
    { de: 'etwas ausprobieren', em: '🔁', bsp: 'Ich probiere es zwei Wochen aus.' }
  ],
  grammatik: {
    title: 'Grammatik im Kontext',
    blocks: [
      {
        h: 'obwohl — der Widerspruch',
        txt: 'Sofia geht schwimmen, und trotzdem tut der Rücken weh. Genau dafür ist obwohl da: Es verbindet zwei Sachen, die eigentlich nicht zusammenpassen.',
        table: [
          ['Satzbau', 'Beispiel'],
          ['Hauptsatz, obwohl + … + Verb', 'Der Rücken tut weh, obwohl ich schwimmen gehe.'],
          ['Obwohl + … + Verb, Verb + Subjekt', 'Obwohl ich um zehn im Bett liege, bin ich müde.'],
          ['obwohl (Nebensatz)', 'Ich bin müde, obwohl ich früh schlafen gehe.'],
          ['trotzdem (Hauptsatz)', 'Ich gehe früh schlafen. Trotzdem bin ich müde.']
        ],
        note: 'Nach <b>obwohl</b> steht das Verb <b>am Ende</b>. <b>trotzdem</b> sagt fast dasselbe, ist aber kein Nebensatz — danach kommt sofort das Verb: „Trotzdem <b>bin</b> ich müde."'
      },
      {
        h: 'damit oder um … zu — das Ziel',
        txt: 'Beide antworten auf die Frage „Wozu?". Der Unterschied liegt nur an den handelnden Personen:',
        table: [
          ['Form', 'Wann?', 'Beispiel'],
          ['um … zu + Infinitiv', 'gleiches Subjekt in beiden Teilen', 'Ich stehe auf, um mich zu strecken.'],
          ['damit + Nebensatz', 'zwei verschiedene Subjekte', 'Ich stelle den Wecker, damit mein Kollege pünktlich anruft.'],
          ['damit (auch möglich)', 'gleiches Subjekt geht auch', 'Ich lege das Handy weg, damit ich besser schlafe.'],
          ['trennbares Verb mit zu', 'zu steht in der Mitte', 'Ich lese Nachrichten, um abzuschalten.']
        ],
        note: 'Faustregel: <b>Gleiches Subjekt → um … zu</b> (kürzer und eleganter). <b>Anderes Subjekt → immer damit</b>. Bei trennbaren Verben rutscht das <b>zu</b> zwischen Vorsilbe und Verb: ab<b>zu</b>schalten, ein<b>zu</b>kaufen.'
      }
    ]
  },
  uebungen: [
    { typ: 'listen', audio: 'Obwohl ich früh ins Bett gehe, bin ich morgens müde.', frage: 'Hör zu: Was ist das Problem?', optionen: ['Sie ist müde, obwohl sie früh schlafen geht.', 'Sie geht zu spät ins Bett.', 'Sie steht zu früh auf.'], richtig: 0 },
    { typ: 'mc', frage: 'Ich gehe zu Fuß zur Arbeit, ___ mich mehr zu bewegen.', optionen: ['um', 'damit', 'obwohl'], richtig: 0, hinweis: 'Beide Teile haben dasselbe Subjekt (ich) — dann steht um … zu.' },
    { typ: 'mc', frage: 'Ich koche abends selbst, ___ meine Kinder gesünder essen.', optionen: ['damit', 'um', 'trotzdem'], richtig: 0, hinweis: 'Ich koche, aber die Kinder essen — zwei verschiedene Subjekte verlangen damit.' },
    { typ: 'mc', frage: 'Welcher Satz ist richtig gebaut?', optionen: ['Obwohl ich Sport mache, nehme ich nicht ab.', 'Obwohl ich mache Sport, nehme ich nicht ab.', 'Obwohl mache ich Sport, ich nehme nicht ab.'], richtig: 0, hinweis: 'Nach obwohl steht das Verb am Ende des Nebensatzes, im Hauptsatz danach kommt das Verb zuerst.' },
    { typ: 'gapbank', frage: 'Setz die richtigen Konnektoren ein.', text: 'Ich gehe zu Fuß zur Arbeit, ___ mich mehr zu bewegen. ___ ich genug schlafe, bin ich oft erschöpft. Der Arzt gibt mir eine Überweisung, ___ ich zur Physiotherapie gehen kann.', bank: ['um', 'Obwohl', 'damit', 'weil', 'zu'], loesung: ['um', 'Obwohl', 'damit'], hinweis: 'Ziel bei gleichem Subjekt: um … zu. Widerspruch: obwohl. Ziel mit Nebensatz: damit.' },
    { typ: 'order', frage: 'Bau den Satz mit dem Ziel!', woerter: ['Ich', 'nehme', 'die', 'Treppe', 'um', 'mich', 'mehr', 'zu', 'bewegen'], loesung: 'Ich nehme die Treppe um mich mehr zu bewegen', hinweis: 'Erst der Hauptsatz, dann um, und am Ende zu + Infinitiv.' },
    { typ: 'order', frage: 'Bau den Widerspruch!', woerter: ['Obwohl', 'ich', 'müde', 'bin', 'gehe', 'ich', 'joggen'], loesung: 'Obwohl ich müde bin gehe ich joggen', hinweis: 'Steht der obwohl-Satz vorn, folgt im Hauptsatz sofort das Verb, dann das Subjekt.' },
    { typ: 'match', frage: 'Welcher Rat passt zu welchem Ziel?', paare: [['das Handy weglegen', '🌙 damit der Kopf zur Ruhe kommt'], ['jede Stunde aufstehen', '🙆 um sich kurz zu strecken'], ['einen Wecker stellen', '⏰ damit man es nicht vergisst'], ['Gemüse einkaufen', '🥗 um sich ausgewogen zu ernähren'], ['zur Vorsorge gehen', '🩺 um die Werte prüfen zu lassen']] },
    { typ: 'bild', bild: 'th-arzt', frage: 'Der Arzt fragt: „Wie geht es Ihnen sonst?" Welche Antwort bringt euch weiter?', optionen: ['Eigentlich gut, aber ich schlafe seit drei Monaten schlecht, obwohl ich früh ins Bett gehe.', 'Ganz gut, danke.', 'Wie immer halt.', 'Fragen Sie lieber meinen Mann.'], richtig: 0, hinweis: 'Nenne Dauer und Widerspruch. Je konkreter deine Beschreibung, desto genauer die Diagnose.' },
    { typ: 'type', frage: 'Was willst du gesundheitlich ändern und wozu? Schreib einen Satz mit um … zu oder damit.', muster: 'Ich fahre ab Montag mit dem Rad zur Arbeit, um mich jeden Tag zu bewegen.', akzeptiert: ['um .+ zu ', 'damit '], hinweis: 'Gleiches Subjekt in beiden Teilen? Dann um … zu. Zwei verschiedene Personen? Dann damit.' }
  ],
  zusammenfassung: {
    kernsaetze: [
      'Ich habe seit drei Monaten Beschwerden im Rücken.',
      'Obwohl ich früh ins Bett gehe, bin ich morgens erschöpft.',
      'Ich lese abends Nachrichten, um abzuschalten.',
      'Legen Sie das Handy weg, damit Ihr Kopf zur Ruhe kommt.',
      'Ich probiere es zwei Wochen aus und melde mich wieder.'
    ],
    merke: [
      '<b>obwohl</b> leitet einen Nebensatz ein, das Verb steht <b>am Ende</b>. <b>trotzdem</b> steht im Hauptsatz, danach kommt <b>sofort das Verb</b>.',
      'Gleiches Subjekt → <b>um … zu + Infinitiv</b>. Verschiedene Subjekte → <b>damit + Nebensatz</b>.',
      'Bei trennbaren Verben wandert das <b>zu</b> in die Mitte: ab<b>zu</b>schalten, auf<b>zu</b>stehen, ein<b>zu</b>kaufen.'
    ],
    tipp: 'Formuliere für diese Woche genau ein Ziel in zwei Sätzen: einen mit um … zu und einen mit obwohl. Häng den Zettel an den Kühlschrank — dann liest du deine eigene Grammatik jeden Tag.'
  },
  sprechen: {
    task: 'Erzähl beim Arzt von deinem Alltag: Was tust du für deine Gesundheit, was klappt trotz guter Absicht nicht, und was willst du ändern? Nutze obwohl und um … zu.',
    tipps: ['Ich achte auf …, aber …', 'Obwohl ich …, habe ich immer noch …', 'Ich möchte …, um … zu …', 'Können Sie mir eine Überweisung geben, damit …?']
  }
};
