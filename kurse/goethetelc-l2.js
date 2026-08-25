// Vorbereitungstraining Goethe & telc – Lektion 2: Hören — was wirklich gefragt wird
// deutschoderwas club · Kursmaterial
window.LEKTION = {
  meta: { kurs: 'Vorbereitungstraining Goethe & telc', nr: 2, titel: 'Hören — was wirklich gefragt wird', level: 'A2–C1', bild: 'th-medien', dauer: 'ca. 25 Min' },
  intro: {
    text: 'Im Hörteil verlierst du keine Punkte, weil du zu wenig verstehst — sondern weil du zu viel mitschreibst. Hier lernst du, die Fragen in der Lesezeit auszuwerten, nur die eine gesuchte Information zu jagen und die Selbstkorrektur im Text zu erkennen, mit der fast jede Aufgabe arbeitet.',
    du_lernst: ['Die Hörteile und ihr Zweck', 'Lesezeit richtig nutzen', 'Selbstkorrektur heraushören', 'Stichwort statt Mitschrift']
  },
  dialog: {
    bild: 'th-medien',
    situation: 'Kopfhörer liegen noch auf dem Tisch. Herr Schneider spielt Nguyen die Stelle noch einmal vor, an der sie sich verhört hat.',
    lines: [
      { sp: 'Herr Schneider', txt: 'Teil 1, Aufgabe 3. Du hast „acht Uhr" angekreuzt. Hör noch mal.' },
      { sp: 'Aufnahme', txt: 'Der Kurs beginnt um acht — nein, Moment, um neun. Wir haben ja verschoben.' },
      { sp: 'Nguyen', txt: 'Ach nein. Er korrigiert sich mitten im Satz.' },
      { sp: 'Herr Schneider', txt: 'Er korrigiert sich immer. In jeder Prüfung. Das ist keine Panne, das ist die Aufgabe.' },
      { sp: 'Nguyen', txt: 'Aber ich schreibe doch mit, ich hatte die Acht schon notiert —' },
      { sp: 'Herr Schneider', txt: 'Und dann hast du auf dein Blatt geschaut statt zugehört. Was wird in der Aufgabe gefragt?' },
      { sp: 'Nguyen', txt: 'Wann der Kurs beginnt.' },
      { sp: 'Herr Schneider', txt: 'Eine Information. Warum schreibst du drei Zeilen mit?' },
      { sp: 'Nguyen', txt: 'Weil ich Angst habe, dass mir etwas entgeht.' },
      { sp: 'Herr Schneider', txt: 'Dir entgeht etwas, weil du schreibst. Fragen in der Lesezeit lesen, ein Stichwort notieren — und dann zuhören.' }
    ]
  },
  vokabeln: [
    { de: 'die Lesezeit vor dem Hören', em: '⏲️', bsp: 'Sie ist geschenkt — nutz jede Sekunde davon.' },
    { de: 'die Durchsage', em: '📢', bsp: 'am Bahnhof, im Kaufhaus, im Krankenhaus' },
    { de: 'die Ansage auf der Mailbox', em: '📞', bsp: 'Öffnungszeiten, Terminverschiebung, Rückruf' },
    { de: 'das Stichwort', em: '✏️', bsp: 'eine Zahl und ein Wort. Keine Sätze.' },
    { de: 'sich verhören', em: '😵', bsp: 'Ich habe acht verstanden, gesagt wurde neun.' },
    { de: 'die Selbstkorrektur', em: '🔁', bsp: '„… um acht — nein, um neun."' },
    { de: 'das Signalwort', em: '🚩', bsp: 'aber, allerdings, eigentlich, doch' },
    { de: 'die Zahlenangabe', em: '🔢', bsp: 'Gleis, Uhrzeit, Preis, Hausnummer' },
    { de: 'selektives Hören', em: '🎯', bsp: 'nur die eine gesuchte Information jagen' },
    { de: 'globales Hören', em: '🌍', bsp: 'Worum geht es überhaupt? Wer spricht mit wem?' },
    { de: 'die Hauptaussage', em: '💡', bsp: 'Was will die Person eigentlich sagen?' },
    { de: 'Sie hören den Text zweimal.', em: '2️⃣', bsp: 'Erster Durchgang: Richtung. Zweiter: Kontrolle.' },
    { de: 'den Faden verlieren', em: '🧶', bsp: 'Passiert. Weiter zur nächsten Aufgabe.' },
    { de: 'dranbleiben', em: '🏃', bsp: 'Verpasst ist verpasst — nicht zurückdenken.' },
    { de: 'die Umformulierung', em: '🔄', bsp: 'Gesagt: „Es hat leider nicht geklappt." Gemeint: erfolglos.' },
    { de: 'die Nebeninformation', em: 'ℹ️', bsp: 'Alles, wonach nicht gefragt ist. Ignorieren.' }
  ],
  grammatik: {
    title: 'Was die Prüfung von dir will',
    blocks: [
      {
        h: 'Die Hörteile und was sie von dir wollen',
        txt: 'Die Teile unterscheiden sich nicht im Schwierigkeitsgrad, sondern in der Hörart. Wer alles gleich hört, verliert im ersten Teil die Konzentration für den letzten. Die Spalte „Wie oft" folgt hier dem Goethe-Zertifikat B1 — bei telc und in anderen Stufen steht vor jedem Teil in der Anweisung, wie oft gespielt wird. Lies sie.',
        table: [
          ['Teil', 'Was du hörst', 'Wie oft', 'Gefragt ist', 'Deine Hörart'],
          ['1', 'kurze Ansagen, Mailbox, Durchsagen', 'zweimal', 'eine Zahl, eine Uhrzeit, ein Ort', 'selektiv'],
          ['2', 'eine Führung, eine Erklärung, ein Vortrag', 'einmal', 'Reihenfolge und Details', 'selektiv mit Verlauf'],
          ['3', 'Alltagsgespräch zwischen zwei Personen', 'einmal', 'wer will was, wer meint was', 'global und Detail in einem Durchgang'],
          ['4', 'Diskussion oder Interview mit Meinungen', 'zweimal', 'welche Meinung zu welcher Person', 'global']
        ],
        note: 'Nur einmal heißt: keine zweite Chance. Notier dort sofort, auch wenn du unsicher bist — später korrigierst du nicht mehr, du ergänzt nur.'
      },
      {
        h: 'Die fünf Fallen im Hörtext',
        txt: 'Die Aufgaben sind fast immer nach demselben Muster gebaut. Wenn du die fünf Muster kennst, hörst du sie kommen:',
        table: [
          ['Falle', 'So klingt es im Text', 'Was du machst'],
          ['Selbstkorrektur', '„Um acht — nein, Moment, um neun."', 'Immer gilt, was nach der Korrektur kommt.'],
          ['nicht … sondern', '„Nicht von Gleis 7, sondern von Gleis 12."', 'Das Wort nach sondern ist die Lösung.'],
          ['Plan gegen Wirklichkeit', '„Eigentlich wollte ich Freitag, aber es wird Samstag."', 'eigentlich kündigt eine Änderung an.'],
          ['zu viele Zahlen', '„Der Kurs kostet 90 Euro, mit Ermäßigung 60."', 'Erst prüfen, nach welcher Zahl gefragt ist.'],
          ['Umformulierung', '„Es hat leider nicht geklappt."', 'In der Aufgabe steht: erfolglos, hat nicht funktioniert.']
        ],
        note: 'Signalwörter sind deine Warnlampen: aber · allerdings · eigentlich · doch · nur · sondern. Wenn du eines hörst, kommt gleich die eigentliche Information.'
      }
    ]
  },
  uebungen: [
    { typ: 'listen', audio: 'Der Zug nach Hamburg fährt heute nicht von Gleis sieben, sondern von Gleis zwölf.', frage: 'Hör zu: Von welchem Gleis fährt der Zug?', optionen: ['Gleis 7', 'Gleis 12', 'Gleis 2'], richtig: 1 },
    { typ: 'listen', audio: 'Eigentlich wollte ich am Freitag kommen, aber jetzt wird es doch der Samstag.', frage: 'Hör zu: Wann kommt sie?', optionen: ['am Samstag', 'am Freitag', 'am Sonntag'], richtig: 0 },
    { typ: 'mc', frage: 'Du hörst: „Es hat leider nicht geklappt." Welche Aussage passt dazu?', optionen: ['Er hat es gar nicht erst versucht.', 'Er hatte Erfolg.', 'Seine Bewerbung war erfolglos.'], richtig: 2, hinweis: 'Die Aufgabe benutzt fast nie die Wörter aus der Aufnahme. Achte auf den Sinn.' },
    { typ: 'mc', frage: 'Was machst du in der Lesezeit vor dem Hören?', optionen: ['Die Fragen lesen und je ein Schlüsselwort unterstreichen', 'Die Augen schließen und dich sammeln', 'Schon einmal irgendetwas ankreuzen'], richtig: 0, hinweis: 'Nur wer weiß, wonach gefragt ist, kann selektiv hören.' },
    { typ: 'match', frage: 'Signalwort und was danach kommt — was passt zusammen?', paare: [['aber', '↩️ das Gegenteil von dem, was vorher stand'], ['eigentlich', '🤔 ein Plan, der gleich geändert wird'], ['sondern', '✅ die eine richtige Information'], ['also', '📎 die Zusammenfassung'], ['übrigens', 'ℹ️ eine Nebeninformation ohne Punkte']] },
    { typ: 'gapbank', frage: 'So arbeitest du dich durch den Hörteil. Setz ein.', text: 'In der ___ liest du die Fragen. Beim ersten Hören ___ du nur ein Stichwort. Beim zweiten Hören ___ du deine Antwort.', bank: ['Lesezeit', 'notierst', 'prüfst', 'übersetzt'], loesung: ['Lesezeit', 'notierst', 'prüfst'], hinweis: 'Zwei Durchgänge, zwei Aufgaben: sammeln, dann kontrollieren.' },
    { typ: 'order', frage: 'Bau die Durchsage!', woerter: ['fährt', 'Der', 'zwölf', 'von', 'Zug', 'heute', 'Gleis'], loesung: 'Der Zug fährt heute von Gleis zwölf', hinweis: 'Verb auf Position 2, dann Zeit, dann Ort.' },
    { typ: 'bild', bild: 'th-medien', frage: 'Du hörst eine Durchsage am Bahnhof. Worauf achtest du zuerst?', optionen: ['Auf die Stimme des Sprechers', 'Auf jedes einzelne Wort', 'Auf die Zahlen: Gleis, Uhrzeit, Zugnummer', 'Auf die Geräusche im Hintergrund'], richtig: 2, hinweis: 'In Ansagen tragen die Zahlen die Information. Alles andere ist Verpackung.' },
    { typ: 'mc', frage: 'Du hast eine Aufgabe verpasst und weißt die Antwort nicht. Was tust du?', optionen: ['Zurückdenken und die Stelle rekonstruieren', 'Sofort weiter zur nächsten Frage, das Feld später raten', 'Warten, bis dir die Antwort einfällt'], richtig: 1, hinweis: 'Der Text läuft weiter. Wer zurückdenkt, verliert die nächsten zwei Aufgaben dazu.' },
    { typ: 'type', frage: 'Am Telefon sagt eine Kollegin: „Ich schaffe es erst um halb sechs." Notiere die Information so, wie du sie in der Prüfung aufschreiben würdest.', muster: '17:30 — kommt später', akzeptiert: ['17', 'halb sechs', '5.30', '5:30'], hinweis: 'Ein Stichwort ist eine Zahl plus ein Wort. Ganze Sätze kosten dich den nächsten Hörabschnitt.' }
  ],
  zusammenfassung: {
    kernsaetze: [
      'Was nach der Selbstkorrektur kommt, gilt.',
      'Nach „sondern" steht die Lösung.',
      '„Eigentlich" kündigt an, dass gleich alles anders wird.',
      'Ein Stichwort ist eine Zahl und ein Wort — kein Satz.',
      'Verpasst ist verpasst: sofort weiter zur nächsten Aufgabe.'
    ],
    merke: [
      'Die Lesezeit ist Teil der Prüfung: <b>Fragen lesen und Schlüsselwörter unterstreichen</b>.',
      'Was du <b>nur einmal</b> hörst, notierst du sofort — nicht später aus dem Gedächtnis.',
      'Die Aufgabe benutzt <b>andere Wörter</b> als der Hörtext. Hör auf den Sinn, nicht auf die Vokabel.'
    ],
    tipp: 'Hör diese Woche jeden Morgen drei Minuten Nachrichtenradio, ohne mitzuschreiben. Danach sagst du laut: worum es ging, eine Zahl und einen Namen. Genau diese drei Dinge fragt die Prüfung ab.'
  },
  sprechen: {
    task: 'Such dir eine kurze Ansage, eine Mailbox oder eine Bahnhofsdurchsage. Hör sie einmal und fasse danach laut in drei Sätzen zusammen: Wer spricht, worum geht es, welche Zahl ist wichtig.',
    tipps: ['In der Ansage geht es um …', 'Wichtig ist die Uhrzeit / die Nummer …', 'Der Sprecher korrigiert sich: erst …, dann …', 'Gesagt wurde …, gemeint ist …']
  }
};
