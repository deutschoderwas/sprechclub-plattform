// Alltagsdeutsch A2 – Lektion 4: Reisen und Urlaub
// deutschoderwas club · Kursmaterial
window.LEKTION = {
  meta: { kurs: 'Alltagsdeutsch A2', nr: 4, titel: 'Reisen und Urlaub', level: 'A2', bild: 'th-reise', dauer: 'ca. 18 Min' },
  intro: {
    text: 'Über Urlaub redet man in Deutschland ständig — im Büro, in der Kantine, beim Kaffee. Und fast jeder Urlaubssatz braucht eine Begründung oder eine Meinung. Genau darum geht es hier: weil und dass. Diese zwei Wörter lassen dein Deutsch sofort erwachsener klingen.',
    du_lernst: ['Über Reisepläne sprechen', 'Wortschatz Zug, Unterkunft, Gepäck', 'Nebensatz mit weil', 'Nebensatz mit dass']
  },
  dialog: {
    bild: 'th-reise',
    situation: 'Marta und Nguyen sitzen in der Kantine. Marta hat nächste Woche Urlaub — der erste seit Januar.',
    lines: [
      { sp: 'Nguyen', txt: 'Marta, du siehst müde aus.' },
      { sp: 'Marta', txt: 'Ich weiß. Ich freue mich riesig auf den Urlaub, weil ich seit Januar nicht frei hatte.' },
      { sp: 'Nguyen', txt: 'Wohin fährst du denn?' },
      { sp: 'Marta', txt: 'An die Ostsee. Ich glaube, dass das Wetter im September noch gut ist.' },
      { sp: 'Nguyen', txt: 'Mit dem Auto?' },
      { sp: 'Marta', txt: 'Nein, mit dem Zug, weil das Parken an der Küste so teuer ist. Und ihr?' },
      { sp: 'Nguyen', txt: 'Wir bleiben zu Hause, weil meine Tochter im September in die Schule kommt.' },
      { sp: 'Marta', txt: 'Schade! Aber ich finde, dass Urlaub zu Hause auch schön sein kann.' },
      { sp: 'Nguyen', txt: 'Stimmt. Schick mir bitte ein Foto vom Meer.' },
      { sp: 'Marta', txt: 'Mache ich. Ich hoffe nur, dass der Zug pünktlich ist.' }
    ]
  },
  vokabeln: [
    { de: 'der Urlaub', em: '🏖️', bsp: 'Im September habe ich zwei Wochen Urlaub.' },
    { de: 'die Reise', em: '🧭', bsp: 'Die Reise dauert fünf Stunden.' },
    { de: 'buchen', em: '💻', bsp: 'Ich habe die Unterkunft online gebucht.' },
    { de: 'die Unterkunft', em: '🏨', bsp: 'Wir suchen eine günstige Unterkunft.' },
    { de: 'die Ferienwohnung', em: '🏡', bsp: 'Die Ferienwohnung hat eine kleine Küche.' },
    { de: 'die Fahrkarte', em: '🎫', bsp: 'Die Fahrkarte kostet 39 Euro.' },
    { de: 'umsteigen', em: '🔁', bsp: 'In Hamburg müssen wir einmal umsteigen.' },
    { de: 'das Gepäck', em: '🧳', bsp: 'Mein Gepäck ist viel zu schwer.' },
    { de: 'die Küste', em: '🌊', bsp: 'An der Küste ist es oft windig.' },
    { de: 'sich freuen auf', em: '😀', bsp: 'Ich freue mich auf den Urlaub.' },
    { de: 'frei haben', em: '🗓️', bsp: 'Nächste Woche habe ich frei.' },
    { de: 'die Hinfahrt', em: '🚆', bsp: 'Die Hinfahrt ist am Samstagmorgen.' },
    { de: 'die Rückfahrt', em: '↩️', bsp: 'Die Rückfahrt buche ich später.' },
    { de: 'der Ausflug', em: '🥾', bsp: 'Am Dienstag machen wir einen Ausflug.' }
  ],
  grammatik: {
    title: 'Grammatik im Kontext',
    blocks: [
      {
        h: 'Nebensatz mit weil — die Begründung',
        txt: 'weil antwortet auf warum. Nach dem Komma dreht sich der Satz um: Das konjugierte Verb rutscht ganz nach hinten.',
        table: [
          ['Hauptsatz', 'weil + Mittelfeld', 'Verb am Ende'],
          ['Ich fahre mit dem Zug,', 'weil das Parken so teuer', 'ist.'],
          ['Ich freue mich,', 'weil ich lange nicht frei', 'hatte.'],
          ['Wir bleiben zu Hause,', 'weil meine Tochter in die Schule', 'kommt.'],
          ['Ich buche früh,', 'weil ich sparen', 'will.']
        ],
        note: 'Immer ein <b>Komma</b> vor weil. Bei Modalverben steht das Modalverb ganz am Ende: … weil ich arbeiten <b>muss</b>.'
      },
      {
        h: 'Nebensatz mit dass — Meinung und Vermutung',
        txt: 'dass kommt nach Verben des Denkens und Sagens. Die Wortstellung ist dieselbe wie bei weil.',
        table: [
          ['Einleitung', 'dass + Mittelfeld', 'Verb am Ende'],
          ['Ich glaube,', 'dass das Wetter noch gut', 'ist.'],
          ['Ich finde,', 'dass Urlaub zu Hause auch schön', 'sein kann.'],
          ['Ich hoffe,', 'dass der Zug pünktlich', 'ist.'],
          ['Ich weiß,', 'dass du den Termin abgesagt', 'hast.']
        ],
        note: 'Typische Einleitungen: <b>ich glaube · ich denke · ich finde · ich hoffe · ich weiß</b>. Achtung: <b>das</b> ist Artikel oder Pronomen, <b>dass</b> mit zwei s ist die Konjunktion.'
      }
    ]
  },
  uebungen: [
    { typ: 'listen', audio: 'Ich fahre mit dem Zug, weil das Parken an der Küste so teuer ist.', frage: 'Hör zu: Warum fährt sie mit dem Zug?', optionen: ['Das Parken ist zu teuer.', 'Sie hat kein Auto.', 'Der Zug ist schneller.'], richtig: 0 },
    { typ: 'mc', frage: 'Ich bleibe zu Hause, weil ich kein Geld ___.', optionen: ['habe', 'habe nicht', 'bin'], richtig: 0, hinweis: 'Im weil-Satz steht das konjugierte Verb ganz am Ende.' },
    { typ: 'mc', frage: 'Ich hoffe, ___ der Zug pünktlich ist.', optionen: ['dass', 'das', 'weil'], richtig: 0, hinweis: 'Nach hoffen, glauben und finden kommt die Konjunktion mit zwei s.' },
    { typ: 'gapbank', frage: 'weil oder dass?', text: 'Ich fahre an die Ostsee, ___ ich das Meer liebe. Ich glaube, ___ das Wetter im September noch gut ist.', bank: ['weil', 'dass', 'das', 'denn'], loesung: ['weil', 'dass'], hinweis: 'weil gibt den Grund an, dass leitet Meinung oder Vermutung ein.' },
    { typ: 'order', frage: 'Bau den Nebensatz!', woerter: ['ich', 'weil', 'habe', 'Urlaub'], loesung: 'weil ich Urlaub habe', hinweis: 'Nach weil kommt zuerst das Subjekt, das Verb geht ans Ende.' },
    { typ: 'order', frage: 'Sortiere den dass-Satz!', woerter: ['dass', 'ist', 'Ich', 'der', 'pünktlich', 'hoffe', 'Zug'], loesung: 'Ich hoffe dass der Zug pünktlich ist', hinweis: 'Der Hauptsatz bleibt normal, im dass-Satz wandert das Verb ans Ende.' },
    { typ: 'match', frage: 'Reise-Wortschatz: Was gehört zusammen?', paare: [['die Unterkunft', '🏨 Hotel oder Ferienwohnung'], ['umsteigen', '🔁 in einen anderen Zug wechseln'], ['die Hinfahrt', '🚆 der Weg zum Urlaubsort'], ['buchen', '💻 fest reservieren und bezahlen'], ['das Gepäck', '🧳 Koffer und Taschen']] },
    { typ: 'mc', frage: 'weil-Satz: Welche Variante stimmt?', optionen: ['Ich freue mich, weil ich Urlaub habe.', 'Ich freue mich, weil ich habe Urlaub.', 'Ich freue mich, weil habe ich Urlaub.'], richtig: 0, hinweis: 'weil schickt das konjugierte Verb an die letzte Stelle im Satz.' },
    { typ: 'bild', bild: 'th-reise', frage: 'Der Koffer ist gepackt. Eine Kollegin fragt: „Warum fährst du an die Ostsee?" Was antwortest du?', optionen: ['Weil ich das Meer liebe.', 'Weil ich liebe das Meer.', 'Denn ich das Meer liebe.', 'Dass ich das Meer liebe.'], richtig: 0, hinweis: 'Nach weil steht das Verb am Ende — auch in kurzen Antworten.' },
    { typ: 'type', frage: 'Warum lernst du Deutsch? Antworte mit weil.', muster: 'Ich lerne Deutsch, weil ich in Deutschland arbeiten will.', akzeptiert: ['weil ich .+', '^ich lerne .+weil .+'], hinweis: 'Komma, dann weil, dann Subjekt — und das Verb ganz ans Ende.' }
  ],
  zusammenfassung: {
    kernsaetze: [
      'Ich habe nächste Woche Urlaub und freue mich riesig darauf.',
      'Ich fahre mit dem Zug, weil das Parken zu teuer ist.',
      'In Hamburg müssen wir einmal umsteigen.',
      'Ich glaube, dass das Wetter im September noch gut ist.',
      'Ich hoffe, dass der Zug pünktlich ist.'
    ],
    merke: [
      'Nach <b>weil</b> und <b>dass</b> steht das konjugierte Verb <b>ganz am Ende</b>.',
      'Vor weil und dass steht immer ein <b>Komma</b>.',
      '<b>das</b> mit einem s = Artikel oder Pronomen · <b>dass</b> mit zwei s = Konjunktion nach glauben, finden, hoffen, wissen.'
    ],
    tipp: 'Nimm dir diese Woche jeden Tag eine Entscheidung vor — Essen, Weg, Einkauf — und begründe sie laut mit weil. Sieben Tage, sieben Sätze: Danach sitzt die Wortstellung von allein.'
  },
  sprechen: {
    task: 'Erzähl von deinem nächsten Urlaub: Wohin, mit wem, wie lange? Begründe mindestens zweimal mit weil und sag einmal deine Meinung mit dass.',
    tipps: ['Ich fahre nach …, weil …', 'Ich fahre mit dem Zug / dem Auto / dem Flugzeug, weil …', 'Ich glaube, dass das Wetter dort … ist.', 'Ich freue mich auf …']
  }
};
