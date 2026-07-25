// Alltagsdeutsch B1 – Lektion 2: Der erste Tag im neuen Job
// deutschoderwas club · Kursmaterial
window.LEKTION = {
  meta: { kurs: 'Alltagsdeutsch B1', nr: 2, titel: 'Der erste Tag im neuen Job', level: 'B1', bild: 'th-arbeit', dauer: 'ca. 20 Min' },
  intro: {
    text: 'Die Bewerbung hat geklappt — jetzt stehst du am ersten Tag zwischen fremden Gesichtern, Spindschlüsseln und Passwörtern. Heute lernst du, wie du dich im Team vorstellst und wie du Menschen und Dinge genau benennst: der Kollege, der die Technik betreut, das Formular, das du noch unterschreiben musst.',
    du_lernst: ['Sich im Team vorstellen', 'Nach Abläufen und Zuständigkeiten fragen', 'Relativsätze im Nominativ und Akkusativ', 'Wortschatz Arbeitsplatz und Einarbeitung']
  },
  dialog: {
    bild: 'th-arbeit',
    situation: 'Olena hat ihren ersten Arbeitstag in einem Logistikbetrieb. Tobias aus dem Team zeigt ihr die Halle und das Büro.',
    lines: [
      { sp: 'Tobias', txt: 'Willkommen, Olena! Ich bin Tobias — der Kollege, der die Einarbeitung macht.' },
      { sp: 'Olena', txt: 'Freut mich. Ich bin ehrlich gesagt ein bisschen nervös.' },
      { sp: 'Tobias', txt: 'Völlig normal. Das hier ist der Spind, den du ab heute benutzen kannst. Der Schlüssel liegt schon drin.' },
      { sp: 'Olena', txt: 'Danke. Und wen frage ich, wenn ich einen Zugang zum System brauche?' },
      { sp: 'Tobias', txt: 'Das ist Frau Kowalski aus der Personalabteilung — die Kollegin, die alle Passwörter verwaltet.' },
      { sp: 'Olena', txt: 'Gibt es Unterlagen, die ich heute noch unterschreiben muss?' },
      { sp: 'Tobias', txt: 'Ja, zwei. Das Formular, das oben auf dem Stapel liegt, ist für die Krankenkasse. Das andere ist die Sicherheitsbelehrung.' },
      { sp: 'Olena', txt: 'Und die Pausen? Ich möchte nichts falsch machen.' },
      { sp: 'Tobias', txt: 'Halbe Stunde Mittag, meistens um zwölf. Die Kantine, die du im Erdgeschoss siehst, ist günstig und gar nicht schlecht.' },
      { sp: 'Olena', txt: 'Gut. Dann fange ich einfach an und frage, wenn etwas unklar ist.' }
    ]
  },
  vokabeln: [
    { de: 'die Einarbeitung', em: '🧭', bsp: 'Die Einarbeitung dauert zwei Wochen.' },
    { de: 'der Arbeitsplatz', em: '🖥️', bsp: 'Das ist ab heute dein Arbeitsplatz.' },
    { de: 'die Probezeit', em: '📆', bsp: 'Die Probezeit dauert sechs Monate.' },
    { de: 'der Spind', em: '🔐', bsp: 'Im Spind lässt du deine Jacke.' },
    { de: 'der Zugang', em: '🔑', bsp: 'Ich brauche einen Zugang zum System.' },
    { de: 'die Personalabteilung', em: '🏢', bsp: 'Verträge macht die Personalabteilung.' },
    { de: 'zuständig sein für', em: '👉', bsp: 'Wer ist für die Dienstpläne zuständig?' },
    { de: 'die Schicht', em: '🕕', bsp: 'Ich habe diese Woche Frühschicht.' },
    { de: 'die Besprechung', em: '🗓️', bsp: 'Montags ist um acht Besprechung.' },
    { de: 'die Kantine', em: '🍽️', bsp: 'Die Kantine ist im Erdgeschoss.' },
    { de: 'der Feierabend', em: '🌇', bsp: 'Ich mache um 16 Uhr Feierabend.' },
    { de: 'die Sicherheitsbelehrung', em: '⚠️', bsp: 'Ohne Sicherheitsbelehrung darfst du nicht in die Halle.' },
    { de: 'unterschreiben', em: '🖊️', bsp: 'Bitte hier unten unterschreiben.' },
    { de: 'sich melden bei', em: '📣', bsp: 'Melde dich bei mir, wenn etwas fehlt.' },
    { de: 'Bescheid sagen', em: '💡', bsp: 'Sag mir Bescheid, wenn du fertig bist.' }
  ],
  grammatik: {
    title: 'Grammatik im Kontext',
    blocks: [
      {
        h: 'Relativsätze — Nominativ und Akkusativ',
        txt: 'Tobias erklärt nicht „Das ist ein Kollege. Er macht die Einarbeitung", sondern hängt beide Sätze zusammen. Das Relativpronomen richtet sich im Geschlecht nach dem Wort davor, im Fall aber nach seiner Rolle im Nebensatz:',
        table: [
          ['Bezugswort', 'Nominativ (wer/was tut es?)', 'Akkusativ (wen/was?)'],
          ['der Kollege', 'der Kollege, der hier arbeitet', 'der Kollege, den ich frage'],
          ['die Kollegin', 'die Kollegin, die alles verwaltet', 'die Kollegin, die ich suche'],
          ['das Formular', 'das Formular, das hier liegt', 'das Formular, das ich unterschreibe'],
          ['die Unterlagen', 'die Unterlagen, die fehlen', 'die Unterlagen, die ich brauche']
        ],
        note: 'Nur beim Maskulinum sieht man den Unterschied: <b>der</b> im Nominativ, <b>den</b> im Akkusativ. Bei die und das bleibt die Form gleich — deshalb lohnt sich die Frage: <b>Wer</b> macht es, oder <b>wen/was</b> trifft es?'
      },
      {
        h: 'Wo steht was im Relativsatz',
        txt: 'Der Relativsatz ist ein Nebensatz — das konjugierte Verb rutscht ans Ende, und vor dem Relativpronomen steht immer ein Komma:',
        table: [
          ['Hauptsatz', 'Komma', 'Relativsatz mit Verb am Ende'],
          ['Das ist der Spind', ',', 'den du benutzen kannst.'],
          ['Das ist die Kollegin', ',', 'die die Passwörter verwaltet.'],
          ['Die Kantine ist günstig', ',', 'die du im Erdgeschoss siehst.'],
          ['Ich habe die Unterlagen dabei', ',', 'die ich unterschreiben muss.']
        ],
        note: 'Der Relativsatz steht möglichst <b>direkt hinter seinem Bezugswort</b>. Und Vorsicht: das Modalverb steht ganz am Ende (… benutzen <b>kannst</b>), nicht der Infinitiv.'
      }
    ]
  },
  uebungen: [
    { typ: 'listen', audio: 'Das ist der Kollege, der die Einarbeitung macht.', frage: 'Hör zu: Was macht der Kollege?', optionen: ['Er macht die Einarbeitung.', 'Er macht die Dienstpläne.', 'Er macht die Sicherheitsbelehrung.'], richtig: 0 },
    { typ: 'mc', frage: 'Das ist der Spind, ___ du ab heute benutzen kannst.', optionen: ['den', 'der', 'dem'], richtig: 0, hinweis: 'Frag im Nebensatz: Du benutzt wen oder was? Das ist Akkusativ — Maskulinum wird zu den.' },
    { typ: 'mc', frage: 'Das ist die Kollegin, ___ alle Passwörter verwaltet.', optionen: ['die', 'der', 'das'], richtig: 0, hinweis: 'Die Kollegin verwaltet — sie ist die handelnde Person, also Nominativ.' },
    { typ: 'gapbank', frage: 'Setz die passenden Relativpronomen ein.', text: 'Das ist die Kollegin, ___ die Dienstpläne schreibt. Hier ist der Ausweis, ___ du jeden Morgen brauchst. Das Formular, ___ auf dem Tisch liegt, ist für die Krankenkasse.', bank: ['die', 'den', 'das', 'dem', 'der'], loesung: ['die', 'den', 'das'], hinweis: 'Geschlecht kommt vom Bezugswort, der Fall von der Rolle im Nebensatz.' },
    { typ: 'order', frage: 'Bau den Satz mit Relativsatz!', woerter: ['Das', 'ist', 'der', 'Spind', 'den', 'du', 'benutzen', 'kannst'], loesung: 'Das ist der Spind den du benutzen kannst', hinweis: 'Erst der Hauptsatz, dann das Relativpronomen, dann das Subjekt — das konjugierte Verb ganz zum Schluss.' },
    { typ: 'order', frage: 'Bau die Frage für deinen ersten Tag!', woerter: ['Wer', 'ist', 'für', 'die', 'Dienstpläne', 'zuständig'], loesung: 'Wer ist für die Dienstpläne zuständig', hinweis: 'zuständig sein <b>für</b> + Akkusativ — die Präposition gehört fest zum Ausdruck.' },
    { typ: 'match', frage: 'Wer oder was macht was im Betrieb?', paare: [['die Personalabteilung', '🏢 Verträge und Papiere'], ['die Einarbeitung', '🧭 die ersten Wochen mit Begleitung'], ['die Sicherheitsbelehrung', '⚠️ Regeln vor dem ersten Einsatz'], ['die Probezeit', '📆 die ersten sechs Monate'], ['der Feierabend', '🌇 Schluss für heute']] },
    { typ: 'bild', bild: 'th-arbeit', frage: 'Du bist neu und weißt etwas nicht. Welche Reaktion ist am ersten Tag die beste?', optionen: ['Entschuldigung, könntest du mir kurz zeigen, wie das hier läuft?', 'Ich mache das einfach irgendwie und sage nichts.', 'Das habe ich in meinem alten Job ganz anders gemacht.', 'Kann das nicht jemand anders machen?'], richtig: 0, hinweis: 'Nachfragen ist am Anfang kein Zeichen von Schwäche — Fehler aus Schweigen kosten mehr.' },
    { typ: 'type', frage: 'Beschreib eine Person aus deinem Alltag mit einem Relativsatz.', muster: 'Das ist mein Nachbar, der jeden Morgen mit dem Hund rausgeht.', akzeptiert: ['der ', 'die ', 'das '], hinweis: 'Bau nach dem Muster: Bezugswort + Komma + der/die/das + … + Verb am Ende.' }
  ],
  zusammenfassung: {
    kernsaetze: [
      'Ich bin neu hier — an wen kann ich mich wenden?',
      'Das ist der Kollege, der die Einarbeitung macht.',
      'Gibt es Unterlagen, die ich noch unterschreiben muss?',
      'Wer ist für die Dienstpläne zuständig?',
      'Sag mir bitte Bescheid, wenn ich etwas falsch mache.'
    ],
    merke: [
      'Das Relativpronomen nimmt das <b>Geschlecht vom Bezugswort</b> und den <b>Fall aus dem Nebensatz</b>.',
      'Maskulinum ist der einzige Stolperstein: <b>der</b> (Nominativ) gegen <b>den</b> (Akkusativ).',
      'Im Relativsatz steht das konjugierte Verb <b>immer am Ende</b>, und davor kommt ein <b>Komma</b>.'
    ],
    tipp: 'Geh diese Woche durch deine Wohnung und beschreibe fünf Dinge mit einem Relativsatz: „Das ist der Stuhl, den ich nie benutze." Klingt albern, sitzt aber nach drei Tagen.'
  },
  sprechen: {
    task: 'Stell dich einem neuen Team vor: Name, was du vorher gemacht hast, und zwei Fragen zum Ablauf. Baue mindestens einen Relativsatz ein.',
    tipps: ['Hallo zusammen, ich bin … und fange heute an.', 'Vorher habe ich als … gearbeitet.', 'Wer ist die Person, die für … zuständig ist?', 'Gibt es etwas, das ich heute noch unterschreiben muss?']
  }
};
