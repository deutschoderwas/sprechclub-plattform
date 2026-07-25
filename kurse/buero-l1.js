// Deutsch für Büro & Logistik – Lektion 1: Das Telefonat
window.LEKTION = {
  meta: { kurs: 'Deutsch für Büro & Logistik', nr: 1, titel: 'Am Telefon – professionell reagieren', level: 'A2', bild: 'photo-1557804506-669a67965ba0', dauer: 'ca. 18 Min' },
  intro: {
    text: 'Telefonieren ist für viele das Schwerste: Man sieht den anderen nicht und muss trotzdem sofort reagieren. Mit den festen Bausteinen aus dieser Lektion klingst du ab dem ersten Anruf sicher und professionell.',
    du_lernst: ['Sich am Telefon melden', 'Nachfragen ohne Angst', 'Termine verschieben', 'Höflich mit „würde/könnte"']
  },
  dialog: {
    bild: 'photo-1560250097-0b93528c311a',
    situation: 'Frau Yilmaz arbeitet in der Logistik. Ein Kunde ruft wegen einer Lieferung an.',
    lines: [
      { sp: 'Frau Yilmaz', txt: 'Meier Logistik, Yilmaz am Apparat. Was kann ich für Sie tun?' },
      { sp: 'Herr Klein', txt: 'Guten Tag, Klein hier. Es geht um die Lieferung für Auftrag vier-sieben-zwei.' },
      { sp: 'Frau Yilmaz', txt: 'Einen Moment bitte, ich schaue kurz nach. Könnten Sie die Nummer wiederholen?' },
      { sp: 'Herr Klein', txt: 'Gerne: vier – sieben – zwei.' },
      { sp: 'Frau Yilmaz', txt: 'Danke. Die Lieferung ist für Donnerstag geplant. Passt Ihnen das?' },
      { sp: 'Herr Klein', txt: 'Ehrlich gesagt wäre Freitag besser. Ginge das auch?' },
      { sp: 'Frau Yilmaz', txt: 'Ich schaue, was sich machen lässt. Ich rufe Sie bis heute Nachmittag zurück.' },
      { sp: 'Herr Klein', txt: 'Perfekt, vielen Dank. Auf Wiederhören!' }
    ]
  },
  vokabeln: [
    { de: '… am Apparat.', em: '☎️', bsp: 'Yilmaz am Apparat.' },
    { de: 'Was kann ich für Sie tun?', em: '🤝', bsp: 'freundlicher Einstieg' },
    { de: 'Es geht um …', em: '📋', bsp: 'Es geht um die Lieferung.' },
    { de: 'Einen Moment bitte.', em: '⏳', bsp: 'Zeit gewinnen' },
    { de: 'Könnten Sie das wiederholen?', em: '🔁', bsp: 'höflich nachfragen' },
    { de: 'Ich schaue kurz nach.', em: '🔎', bsp: 'Ich prüfe das eben.' },
    { de: 'der Auftrag', em: '📄', bsp: 'Auftrag 472' },
    { de: 'die Lieferung', em: '📦', bsp: 'Die Lieferung kommt Donnerstag.' },
    { de: 'Passt Ihnen das?', em: '✅', bsp: 'nach Zustimmung fragen' },
    { de: 'Ginge das auch?', em: '🙏', bsp: 'höfliche Bitte' },
    { de: 'Ich rufe Sie zurück.', em: '📞', bsp: 'Rückruf zusagen' },
    { de: 'Auf Wiederhören!', em: '👋', bsp: 'Verabschiedung am Telefon' },
    { de: 'Ehrlich gesagt …', em: '💬', bsp: 'höflich widersprechen' }
  ],
  grammatik: {
    title: 'Grammatik im Berufskontext',
    blocks: [
      {
        h: 'Höflichkeit: würde · könnte · wäre · ginge',
        txt: 'Im Büro macht die Höflichkeitsform den Unterschied zwischen „fordernd" und „professionell":',
        table: [
          ['Direkt', 'Professionell'],
          ['Wiederholen Sie das.', 'Könnten Sie das bitte wiederholen?'],
          ['Ich will Freitag.', 'Freitag wäre besser für mich.'],
          ['Geht das?', 'Ginge das auch?'],
          ['Ich rufe an.', 'Ich würde Sie gern zurückrufen.']
        ],
        note: 'Diese vier Wörter — würde, könnte, wäre, ginge — sind dein wichtigstes Werkzeug am Telefon.'
      },
      {
        h: 'Die Rettungssätze beim Nichtverstehen',
        txt: 'Nicht verstanden? Das ist völlig normal — wichtig ist, souverän nachzufragen:',
        table: [
          ['Situation', 'Dein Satz'],
          ['Zu schnell gesprochen', 'Könnten Sie bitte etwas langsamer sprechen?'],
          ['Name unklar', 'Wie schreibt man das bitte?'],
          ['Nummer unklar', 'Ich wiederhole zur Sicherheit: vier – sieben – zwei.'],
          ['Zeit gewinnen', 'Einen Moment bitte, ich schaue kurz nach.']
        ],
        note: 'Nachfragen wirkt nie unprofessionell — Fehler durch Raten schon.'
      }
    ]
  },
  uebungen: [
    { typ: 'listen', audio: 'Meier Logistik, Yilmaz am Apparat. Was kann ich für Sie tun?', frage: 'Hör zu: Wie meldet sie sich?', optionen: ['Firma, Name, Angebot zu helfen', 'nur mit dem Namen', 'nur mit der Firma'], richtig: 0, hinweis: 'Die professionelle Meldung hat immer drei Teile.' },
    { typ: 'mc', frage: 'Der Kunde spricht zu schnell. Was sagst du?', optionen: ['Könnten Sie bitte etwas langsamer sprechen?', 'Ich verstehe nichts.', 'Sprechen Sie langsam!'], richtig: 0, hinweis: 'Höflich mit „Könnten Sie …?"' },
    { typ: 'mc', frage: 'Wie sagst du höflich, dass Freitag besser passt?', optionen: ['Freitag wäre besser für mich.', 'Ich will Freitag.', 'Freitag, nicht Donnerstag.'], richtig: 0, hinweis: 'wäre = höfliche Form von „ist"' },
    { typ: 'gapbank', frage: 'Setz die höflichen Formen ein.', text: '___ Sie die Nummer bitte wiederholen? Donnerstag ___ leider schwierig.', bank: ['Könnten', 'wäre', 'Können'], loesung: ['Könnten', 'wäre'], hinweis: 'Könnten (Bitte) · wäre (höfliche Einschätzung)' },
    { typ: 'match', frage: 'Situation und passender Satz — was gehört zusammen?', paare: [['Zeit gewinnen', '⏳ Einen Moment bitte.'], ['Rückruf zusagen', '📞 Ich rufe Sie zurück.'], ['Thema nennen', '📋 Es geht um …'], ['Gespräch beenden', '👋 Auf Wiederhören!']] },
    { typ: 'order', frage: 'Bau die höfliche Frage!', woerter: ['Sie', 'wiederholen', 'Könnten', 'das', 'bitte'], loesung: 'Könnten Sie das bitte wiederholen', hinweis: 'Könnten + Sie + Objekt + bitte + Verb am Ende.' },
    { typ: 'mc', frage: 'Der Kunde nennt Auftragsnummer 472. Wie sicherst du dich ab?', optionen: ['Ich wiederhole zur Sicherheit: vier – sieben – zwei.', 'Okay, alles klar.', 'Ja, habe ich.'], richtig: 0, hinweis: 'Zahlen immer einzeln wiederholen — das verhindert teure Fehler.' },
    { typ: 'type', frage: 'Melde dich am Telefon: Du heißt Kaya und arbeitest bei Nordfracht.', muster: 'Nordfracht, Kaya am Apparat. Was kann ich für Sie tun?', akzeptiert: ['am apparat', 'mein name ist', 'guten tag.*kaya'], hinweis: 'Firma + Name + „am Apparat" + Angebot zu helfen.' }
  ],
  zusammenfassung: {
    kernsaetze: [
      '[Firma], [Name] am Apparat. Was kann ich für Sie tun?',
      'Es geht um … / Einen Moment bitte, ich schaue kurz nach.',
      'Könnten Sie das bitte wiederholen?',
      'Ich wiederhole zur Sicherheit: vier – sieben – zwei.',
      'Ich rufe Sie bis heute Nachmittag zurück. Auf Wiederhören!'
    ],
    merke: [
      'Vier Zauberwörter am Telefon: <b>würde</b> · <b>könnte</b> · <b>wäre</b> · <b>ginge</b>.',
      'Die professionelle Meldung hat <b>drei Teile</b>: Firma + Name + Angebot zu helfen.',
      'Zahlen <b>immer einzeln wiederholen</b> — das verhindert teure Fehler.'
    ],
    tipp: 'Schreib dir deine Meldeformel auf einen Zettel und leg ihn neben das Telefon. Die ersten fünf Sekunden entscheiden, wie sicher du wirkst — und die kannst du auswendig lernen.'
  },
  sprechen: {
    task: 'Spiel ein Telefonat durch: Du nimmst einen Anruf an, verstehst die Auftragsnummer nicht, fragst höflich nach und sagst einen Rückruf zu.',
    tipps: ['[Firma], [Name] am Apparat. Was kann ich für Sie tun?', 'Könnten Sie das bitte wiederholen?', 'Ich wiederhole zur Sicherheit: …', 'Ich rufe Sie bis … zurück.']
  }
};
