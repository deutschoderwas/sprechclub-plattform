// Deutsch für die Pflege – Lektion 1: Die Schichtübergabe
window.LEKTION = {
  meta: { kurs: 'Deutsch für die Pflege', nr: 1, titel: 'Die Schichtübergabe', level: 'B1', bild: 'photo-1519494026892-80bbd2d6fd0d', dauer: 'ca. 20 Min' },
  intro: {
    text: 'Die Übergabe ist der wichtigste Moment deiner Schicht: In wenigen Minuten musst du alles Wesentliche weitergeben — klar, strukturiert und ohne Missverständnisse. Hier lernst du die Sätze, die du dafür jeden Tag brauchst.',
    du_lernst: ['Struktur einer Übergabe', 'Fachwortschatz Pflege', 'Zustand beschreiben', 'Passiv & Perfekt im Bericht']
  },
  dialog: {
    bild: 'photo-1519494026892-80bbd2d6fd0d',
    situation: 'Frühschicht übergibt an Spätschicht auf Station 3. Sabine (Frühdienst) informiert Kollegen Daniel.',
    lines: [
      { sp: 'Sabine', txt: 'So, Zimmer zwölf: Frau Krause, achtzig Jahre, nach Hüft-OP am Montag.' },
      { sp: 'Daniel', txt: 'Wie ist ihr Allgemeinzustand heute?' },
      { sp: 'Sabine', txt: 'Stabil. Die Vitalzeichen sind unauffällig, Blutdruck hundertdreißig zu achtzig.' },
      { sp: 'Daniel', txt: 'Hat sie Schmerzen angegeben?' },
      { sp: 'Sabine', txt: 'Ja, heute Morgen Schmerzstärke vier. Sie hat um acht Uhr ein Schmerzmittel bekommen.' },
      { sp: 'Daniel', txt: 'Und die Mobilisation?' },
      { sp: 'Sabine', txt: 'Sie wurde zweimal mobilisiert, mit dem Rollator bis zum Bad. Bitte heute Abend nochmal.' },
      { sp: 'Daniel', txt: 'Alles klar, ich übernehme. Gibt es noch etwas Besonderes?' },
      { sp: 'Sabine', txt: 'Die Wunde ist reizlos, der Verband wurde frisch gewechselt. Bitte auf die Flüssigkeitsbilanz achten.' }
    ]
  },
  vokabeln: [
    { de: 'die Übergabe', em: '🔄', bsp: 'Die Übergabe beginnt um 14 Uhr.' },
    { de: 'der Allgemeinzustand', em: '📋', bsp: 'Der Allgemeinzustand ist stabil.' },
    { de: 'die Vitalzeichen', em: '💓', bsp: 'Die Vitalzeichen sind unauffällig.' },
    { de: 'der Blutdruck', em: '🩺', bsp: '130 zu 80.' },
    { de: 'Schmerzen angeben', em: '😣', bsp: 'Sie gibt Schmerzen an.' },
    { de: 'die Schmerzstärke', em: '📊', bsp: 'Schmerzstärke vier von zehn.' },
    { de: 'das Schmerzmittel', em: '💊', bsp: 'Sie hat ein Schmerzmittel bekommen.' },
    { de: 'mobilisieren', em: '🚶', bsp: 'Sie wurde mobilisiert.' },
    { de: 'der Rollator', em: '🦯', bsp: 'mit dem Rollator laufen' },
    { de: 'die Wunde ist reizlos', em: '🩹', bsp: 'keine Rötung, keine Entzündung' },
    { de: 'der Verband', em: '🩹', bsp: 'Der Verband wurde gewechselt.' },
    { de: 'die Flüssigkeitsbilanz', em: '💧', bsp: 'Ein- und Ausfuhr dokumentieren' },
    { de: 'unauffällig', em: '✅', bsp: 'alles normal, nichts Auffälliges' },
    { de: 'Ich übernehme.', em: '🤝', bsp: 'Ich bin jetzt zuständig.' }
  ],
  grammatik: {
    title: 'Grammatik im Berufskontext',
    blocks: [
      {
        h: 'Passiv – der Ton der Dokumentation',
        txt: 'In der Übergabe zählt die Handlung, nicht wer sie gemacht hat. Deshalb: Passiv.',
        table: [
          ['Aktiv (wer?)', 'Passiv (was ist passiert?)'],
          ['Ich habe die Patientin mobilisiert.', 'Die Patientin wurde mobilisiert.'],
          ['Wir haben den Verband gewechselt.', 'Der Verband wurde gewechselt.'],
          ['Der Arzt hat das Medikament angesetzt.', 'Das Medikament wurde angesetzt.']
        ],
        note: 'Bauplan: werden (wurde) + Partizip II. Genau so steht es später auch in der Kurve.'
      },
      {
        h: 'Struktur einer guten Übergabe',
        txt: 'Halte immer diese Reihenfolge ein — dann vergisst du nichts:',
        table: [
          ['Schritt', 'Inhalt', 'Beispielsatz'],
          ['1. Person', 'Zimmer, Name, Alter, Diagnose', 'Zimmer 12, Frau Krause, 80, nach Hüft-OP.'],
          ['2. Zustand', 'Allgemeinzustand, Vitalzeichen', 'Der Zustand ist stabil.'],
          ['3. Verlauf', 'Was ist passiert?', 'Sie wurde zweimal mobilisiert.'],
          ['4. Offen', 'Was ist noch zu tun?', 'Bitte heute Abend nochmal mobilisieren.']
        ],
        note: 'Diese vier Schritte funktionieren auf jeder Station — merk sie dir als festes Gerüst.'
      }
    ]
  },
  uebungen: [
    { typ: 'listen', audio: 'Der Blutdruck ist hundertdreißig zu achtzig.', frage: 'Hör zu: Welcher Blutdruck wird genannt?', optionen: ['130 zu 80', '113 zu 80', '130 zu 18'], richtig: 0 },
    { typ: 'mc', frage: 'Welcher Satz gehört in eine professionelle Übergabe?', optionen: ['Die Patientin wurde zweimal mobilisiert.', 'Die Frau ist zweimal rumgelaufen.', 'Die ist heute viel gelaufen, glaub ich.'], richtig: 0, hinweis: 'Passiv + Fachwortschatz = professionell und präzise.' },
    { typ: 'mc', frage: '„Die Wunde ist reizlos" bedeutet:', optionen: ['Keine Rötung, keine Entzündung', 'Die Wunde tut nicht weh', 'Die Wunde ist geschlossen'], richtig: 0, hinweis: 'reizlos = ohne Entzündungszeichen' },
    { typ: 'gapbank', frage: 'Setz die Passivform richtig ein.', text: 'Der Verband ___ heute Morgen ___. Die Patientin ___ anschließend mobilisiert.', bank: ['wurde', 'gewechselt', 'wurde'], loesung: ['wurde', 'gewechselt', 'wurde'], hinweis: 'wurde + Partizip II' },
    { typ: 'match', frage: 'Fachbegriff und Bedeutung — was passt?', paare: [['Vitalzeichen', '💓 Puls, Blutdruck, Temperatur'], ['Mobilisation', '🚶 Bewegung/Aufstehen fördern'], ['Flüssigkeitsbilanz', '💧 Ein- und Ausfuhr'], ['unauffällig', '✅ ohne Besonderheiten']] },
    { typ: 'order', frage: 'Bau den Übergabesatz!', woerter: ['wurde', 'Die', 'mobilisiert', 'Patientin'], loesung: 'Die Patientin wurde mobilisiert', hinweis: 'Subjekt – wurde – Partizip II.' },
    { typ: 'mc', frage: 'Die Kollegin fragt: „Hat sie Schmerzen angegeben?" Beste Antwort:', optionen: ['Ja, Schmerzstärke vier, um acht Uhr ein Schmerzmittel erhalten.', 'Ja, ein bisschen.', 'Ich glaube schon, ja.'], richtig: 0, hinweis: 'Immer konkret: Stärke, Uhrzeit, Maßnahme.' },
    { typ: 'type', frage: 'Formuliere für die Übergabe: Der Patient hat heute Nacht schlecht geschlafen.', muster: 'Der Patient hat heute Nacht schlecht geschlafen.', akzeptiert: ['schlecht geschlafen', 'unruhig', 'schlaflos'], hinweis: 'Nenne die Beobachtung sachlich, z. B. „Der Patient war heute Nacht unruhig und hat schlecht geschlafen."' }
  ],
  zusammenfassung: {
    kernsaetze: [
      'Zimmer …, Frau/Herr …, … Jahre, nach …',
      'Der Allgemeinzustand ist stabil / reduziert.',
      'Die Vitalzeichen sind unauffällig.',
      'Sie/Er wurde zweimal mobilisiert.',
      'Die Wunde ist reizlos, der Verband wurde gewechselt.',
      'Bitte heute Abend noch … — Ich übernehme.'
    ],
    merke: [
      '<b>Passiv</b> für die Dokumentation: <b>wurde</b> + Partizip II (Die Patientin <b>wurde mobilisiert</b>).',
      'Die 4 Schritte jeder Übergabe: <b>1. Person → 2. Zustand → 3. Verlauf → 4. Offene Aufgaben</b>.',
      'Immer konkret statt vage: „Schmerzstärke 4, um 8 Uhr Schmerzmittel erhalten" statt „hatte etwas Schmerzen".'
    ],
    tipp: 'Schreib dir die vier Übergabe-Schritte auf einen kleinen Zettel für die Kitteltasche. Nach zwei Wochen brauchst du ihn nicht mehr — und deine Übergaben klingen wie aus dem Lehrbuch.'
  },
  sprechen: {
    task: 'Übe eine komplette Übergabe: Nimm eine erfundene Patientin und gib sie in vier Schritten weiter — Person, Zustand, Verlauf, offene Aufgaben.',
    tipps: ['Zimmer …, Frau/Herr …, … Jahre, nach …', 'Der Allgemeinzustand ist stabil / reduziert.', 'Sie/Er wurde … (mobilisiert, versorgt, gelagert).', 'Bitte heute Abend noch …']
  }
};
