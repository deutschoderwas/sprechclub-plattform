// Vorbereitungstraining Goethe & telc – Lektion 5: Sprechen — ein Thema präsentieren
// deutschoderwas club · Kursmaterial
window.LEKTION = {
  meta: { kurs: 'Vorbereitungstraining Goethe & telc', nr: 5, titel: 'Sprechen — ein Thema präsentieren', level: 'A2–C1', bild: 'th-rhetorik', dauer: 'ca. 25 Min' },
  intro: {
    text: 'Hier sprichst du allein, drei bis vier Minuten, zu einem Thema, das du vorher nicht kanntest. Bei Goethe B1 ist das Sprechen Teil 2, bei Goethe B2, C1 und telc B2 Teil 1 — die Aufgabe bleibt dieselbe. Bewertet wird nicht, ob du kluge Sachen sagst, sondern ob dein Beitrag einen erkennbaren Aufbau hat und ob du weiterredest, wenn ein Wort fehlt. Beides kannst du trainieren.',
    du_lernst: ['Der Fünf-Schritt-Aufbau', 'Redemittel für jede Phase', 'Weiterreden statt schweigen', 'Auf Nachfragen reagieren']
  },
  dialog: {
    bild: 'th-rhetorik',
    situation: 'Probeprüfung im Kursraum. Fatima präsentiert ihr Thema Ehrenamt — nach zwei Minuten stockt sie, und Tobias unterbricht.',
    lines: [
      { sp: 'Fatima', txt: 'Also, mein Thema ist Ehrenamt. Ich sage kurz, was das bedeutet, wie es in meinem Land ist und was ich selbst darüber denke.' },
      { sp: 'Tobias', txt: 'Gut. Weiter.' },
      { sp: 'Fatima', txt: 'In Deutschland arbeiten viele Menschen freiwillig, ohne Geld. Bei uns hilft man auch, aber eher in der Familie, nicht in so einem … äh …' },
      { sp: 'Tobias', txt: 'Stopp. Sie stocken. Was machen Sie jetzt?' },
      { sp: 'Fatima', txt: 'Ich habe das Wort vergessen.' },
      { sp: 'Tobias', txt: 'Dann sagen Sie es anders. „Das Wort fehlt mir gerade — ich meine eine Gruppe, die sich regelmäßig trifft und etwas organisiert." Das kostet null Punkte.' },
      { sp: 'Fatima', txt: 'Wirklich? Ich dachte, das ist ein Fehler.' },
      { sp: 'Tobias', txt: 'Ein Fehler ist Schweigen. Umschreiben ist eine Leistung, die wir extra bewerten. Und jetzt meine Nachfrage: Würden Sie selbst ein Ehrenamt übernehmen?' },
      { sp: 'Fatima', txt: 'Ja, gern — am liebsten mit Kindern. In meinem letzten Job habe ich viel mit Kindern gearbeitet, das hat mir Kraft gegeben.' },
      { sp: 'Tobias', txt: 'Sehen Sie: Antwort, Beispiel, eigene Erfahrung. Genau davon lebt dieser Teil.' }
    ]
  },
  vokabeln: [
    { de: 'die Kurzpräsentation', em: '🎤', bsp: 'drei bis vier Minuten, allein, mit Aufbau' },
    { de: 'das Thema gliedern', em: '🧱', bsp: 'Ich sage zuerst …, dann …, zum Schluss …' },
    { de: 'der Einstieg', em: '🚪', bsp: 'Ich möchte heute über … sprechen.' },
    { de: 'die eigene Erfahrung', em: '🧳', bsp: 'In meinem letzten Job habe ich …' },
    { de: 'die Situation in meinem Heimatland', em: '🗺️', bsp: 'Bei uns ist das anders, weil …' },
    { de: 'der Übergang', em: '➡️', bsp: 'Damit komme ich zum zweiten Punkt.' },
    { de: 'ein Beispiel nennen', em: '💡', bsp: 'Ich gebe Ihnen ein Beispiel: …' },
    { de: 'die Meinung begründen', em: '⚖️', bsp: 'Ich finde das gut, weil …' },
    { de: 'das Fazit', em: '🏁', bsp: 'Zusammenfassend würde ich sagen: …' },
    { de: 'die Nachfrage', em: '❓', bsp: 'Die Prüfenden fragen nach — das ist ein gutes Zeichen.' },
    { de: 'Habe ich Sie richtig verstanden?', em: '🔁', bsp: 'Rückversicherung, wenn die Frage unklar war' },
    { de: 'ins Stocken geraten', em: '🧊', bsp: 'Ein Wort fehlt — weiterreden statt schweigen.' },
    { de: 'umschreiben', em: '🔧', bsp: 'Ich meine so eine Art …' },
    { de: 'die Sprechzeit', em: '⏱️', bsp: 'Zu kurz kostet mehr Punkte als ein Fehler.' },
    { de: 'der Blickkontakt', em: '👀', bsp: 'Schau die Prüfenden an, nicht deinen Zettel.' }
  ],
  grammatik: {
    title: 'Was die Prüfung von dir will',
    blocks: [
      {
        h: 'Der Fünf-Schritt-Aufbau — und was er dir einbringt',
        txt: 'Die Prüfenden haben ein Raster im Kopf. Sie hören, ob es einen Anfang, eine Mitte und einen Schluss gibt. Halte dich an diese fünf Schritte, und der Aufbau ist abgehakt, bevor du inhaltlich überhaupt anfängst:',
        table: [
          ['Schritt', 'Was du sagst', 'Redemittel', 'Zeit'],
          ['1. Thema nennen', 'worum es geht', 'Ich möchte heute über … sprechen.', 'ca. 15 Sek'],
          ['2. Gliederung ankündigen', 'was in welcher Reihenfolge kommt', 'Zuerst …, dann …, zum Schluss …', 'ca. 15 Sek'],
          ['3. Sachteil', 'wie es hier und bei dir zu Hause ist', 'In Deutschland … Bei uns dagegen …', 'ca. 90 Sek'],
          ['4. Eigene Erfahrung', 'ein konkretes Beispiel aus deinem Leben', 'Ich selbst habe … Damals …', 'ca. 45 Sek'],
          ['5. Fazit und Meinung', 'was du davon hältst', 'Zusammenfassend finde ich, dass …', 'ca. 30 Sek']
        ],
        note: 'Schritt 4 ist der, den fast alle weglassen — und genau der bringt die Punkte. Ein Beispiel aus dem eigenen Leben kann niemand auswendig gelernt haben.'
      },
      {
        h: 'Wenn es hakt: fünf Notfallsätze',
        txt: 'Jede Kandidatin bleibt einmal hängen. Bewertet wird nicht, ob das passiert, sondern was du danach machst:',
        table: [
          ['Problem', 'Was Punkte kostet', 'Was du stattdessen sagst'],
          ['Dir fehlt ein Wort', 'schweigen oder auf Englisch wechseln', 'Das Wort fehlt mir gerade — ich meine so etwas wie …'],
          ['Du hast die Frage nicht verstanden', 'irgendetwas antworten', 'Könnten Sie die Frage bitte noch einmal wiederholen?'],
          ['Du bist unsicher, ob du richtig verstanden hast', 'raten und danebenliegen', 'Habe ich Sie richtig verstanden: Sie meinen …?'],
          ['Dir fällt nichts zum Thema ein', 'pausieren und warten', 'Dazu fällt mir ein Beispiel aus meiner Familie ein: …'],
          ['Du verlierst den Faden', 'von vorn anfangen', 'Damit komme ich zu meinem nächsten Punkt.']
        ],
        note: 'Diese fünf Sätze sind Rettungsringe. Lern sie so, dass sie im Schlaf kommen — dann kann dich keine Lücke aus dem Konzept bringen.'
      }
    ]
  },
  uebungen: [
    { typ: 'mc', frage: 'Mitten im Satz fehlt dir ein Wort. Was ist die beste Reaktion?', optionen: ['Das Wort umschreiben und weitersprechen', 'Schweigen, bis es dir einfällt', 'Kurz auf Englisch wechseln'], richtig: 0, hinweis: 'Umschreiben zeigt Sprachkompetenz. Schweigen zeigt gar nichts.' },
    { typ: 'listen', audio: 'Ich möchte heute über mein Thema sprechen: das Ehrenamt in Deutschland.', frage: 'Hör zu: In welchem Schritt der Präsentation ist die Sprecherin?', optionen: ['mitten im Beispiel', 'ganz am Anfang — sie nennt das Thema', 'am Ende — sie zieht ein Fazit'], richtig: 1 },
    { typ: 'match', frage: 'Schritt und Redemittel — was gehört zusammen?', paare: [['Thema nennen', '🚪 Ich möchte heute über … sprechen.'], ['Gliederung ankündigen', '🧱 Zuerst …, dann …, zum Schluss …'], ['Beispiel bringen', '💡 Ich gebe Ihnen ein Beispiel: …'], ['Meinung sagen', '⚖️ Ich persönlich finde, dass …'], ['Fazit ziehen', '🏁 Zusammenfassend würde ich sagen: …']] },
    { typ: 'gapbank', frage: 'Setz die Redemittel für Einstieg und Gliederung ein.', text: 'Ich möchte heute über das Ehrenamt ___. ___ erkläre ich kurz den Begriff, ___ berichte ich, wie das in meinem Heimatland läuft.', bank: ['sprechen', 'Zuerst', 'dann', 'trotzdem'], loesung: ['sprechen', 'Zuerst', 'dann'], hinweis: 'Der Einstieg nennt das Thema, die Gliederung nennt die Reihenfolge.' },
    { typ: 'order', frage: 'Bau den Vergleichssatz für den Sachteil!', woerter: ['Heimatland', 'meinem', 'ganz', 'In', 'das', 'anders', 'ist'], loesung: 'In meinem Heimatland ist das ganz anders', hinweis: 'Ortsangabe zuerst, dann das Verb auf Position 2.' },
    { typ: 'mc', frage: 'Die Prüferin stellt eine Frage, die du nicht verstanden hast. Was sagst du?', optionen: ['Das weiß ich leider nicht.', 'Irgendetwas, das ungefähr passt.', 'Könnten Sie die Frage bitte noch einmal wiederholen?'], richtig: 2, hinweis: 'Nachfragen ist erlaubt und wird als Gesprächsstrategie positiv gewertet.' },
    { typ: 'bild', bild: 'th-rhetorik', frage: 'Du präsentierst vor zwei Prüfenden. Wohin schaust du?', optionen: ['Abwechselnd zu beiden — nicht dauerhaft auf deine Notizen', 'Nur auf deine Karteikarte', 'Aus dem Fenster, das beruhigt', 'Nur zu der Person, die freundlicher wirkt'], richtig: 0, hinweis: 'Blickkontakt gehört zur Bewertung der Präsentation, nicht nur die Sprache.' },
    { typ: 'mc', frage: 'Was bringt in der Präsentation die meisten Punkte?', optionen: ['Möglichst viele schwierige Wörter', 'Ein klarer Aufbau mit einem eigenen Beispiel', 'Möglichst schnelles Sprechen'], richtig: 1, hinweis: 'Bewertet werden Aufbau, Zusammenhang und Eigenständigkeit — nicht Vokabelakrobatik.' },
    { typ: 'mc', frage: 'Deine Präsentation ist nach 90 Sekunden zu Ende, obwohl drei Minuten vorgesehen sind. Was folgt daraus?', optionen: ['Nichts, kurz und knapp ist gut.', 'Du bekommst Extrapunkte für Effizienz.', 'Es fehlen Punkte, weil ganze Schritte nicht bewertet werden können.'], richtig: 2, hinweis: 'Was nicht gesagt wird, kann nicht bewertet werden. Deshalb ist Schritt 4 Pflicht.' },
    { typ: 'type', frage: 'Nenne dein Thema und deine Gliederung in einem einzigen Satz.', muster: 'Ich möchte heute über das Thema Ehrenamt sprechen: zuerst der Begriff, dann meine eigene Erfahrung, zum Schluss meine Meinung.', akzeptiert: ['^ich möchte', '^heute', '^mein thema', '^ich spreche'], hinweis: 'Erst das Thema nennen, dann mit zuerst, dann, zum Schluss die Reihenfolge ankündigen.' }
  ],
  zusammenfassung: {
    kernsaetze: [
      'Ich möchte heute über … sprechen.',
      'Zuerst …, dann …, zum Schluss …',
      'In Deutschland ist es so, bei uns dagegen …',
      'Ich selbst habe damit folgende Erfahrung gemacht: …',
      'Zusammenfassend würde ich sagen, dass …'
    ],
    merke: [
      'Fünf Schritte, nicht drei: Thema · Gliederung · Sachteil · <b>eigene Erfahrung</b> · Fazit.',
      'Ein fehlendes Wort ist kein Fehler. <b>Schweigen ist der Fehler.</b> Umschreib es und red weiter.',
      'Nachfragen ist erlaubt: <b>Könnten Sie die Frage bitte wiederholen?</b> — das bringt Punkte statt Abzug.'
    ],
    tipp: 'Stell dir diese Woche jeden Tag einen Wecker auf drei Minuten und sprich über ein zufälliges Thema aus der Zeitung — immer nach denselben fünf Schritten. Nimm dich auf und hör nur auf eines: Kommt Schritt 4, dein eigenes Beispiel, wirklich vor?'
  },
  sprechen: {
    task: 'Wähl ein Thema, das du heute in den Nachrichten gesehen hast, und halte dazu eine Kurzpräsentation von drei Minuten — mit allen fünf Schritten und mindestens einem Beispiel aus deinem eigenen Leben.',
    tipps: ['Ich möchte heute über … sprechen.', 'Zuerst …, dann …, zum Schluss …', 'Ich selbst habe erlebt, dass …', 'Zusammenfassend würde ich sagen: …']
  }
};
