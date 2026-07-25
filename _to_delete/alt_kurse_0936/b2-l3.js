// Alltagsdeutsch B2 – Lektion 3: Künstliche Intelligenz im Alltag
// deutschoderwas club · Kursmaterial
window.LEKTION = {
  meta: { kurs: 'Alltagsdeutsch B2', nr: 3, titel: 'Künstliche Intelligenz im Alltag', level: 'B2', bild: 'th-digital', dauer: 'ca. 22 Min' },
  intro: {
    text: 'In fast jeder Firma hängt gerade eine neue Regel im Intranet: Was mit KI gemacht werden darf und was nicht. Solche Regeln stehen praktisch immer im Passiv mit Modalverb — „Kundendaten dürfen nicht hochgeladen werden". Und wenn Kollegen über die Zukunft reden, hörst du ständig Futur I, obwohl niemand die Zukunft kennt. Beides bekommst du hier.',
    du_lernst: ['Über Chancen und Risiken von KI sprechen', 'Regeln und Vorschriften verstehen', 'Passiv mit Modalverben', 'Futur I für Vermutungen']
  },
  dialog: {
    bild: 'th-digital',
    situation: 'Marta und Nguyen arbeiten in der Kommunikationsabteilung. Ab Montag ist ein KI-Tool für alle freigegeben — mit Auflagen.',
    lines: [
      { sp: 'Nguyen', txt: 'Hast du die Mail von der IT gelesen? Ab Montag darf das KI-Tool offiziell benutzt werden.' },
      { sp: 'Marta', txt: 'Endlich. Ich habe letzte Woche drei Stunden mit einem Protokoll verbracht, das in zwei Minuten erstellt werden könnte.' },
      { sp: 'Nguyen', txt: 'Genau dafür ist es gedacht. Aber es gibt klare Auflagen: Kundendaten dürfen auf keinen Fall hochgeladen werden.' },
      { sp: 'Marta', txt: 'Logisch, das ist ja auch heikel. Und jedes Ergebnis muss trotzdem gegengelesen werden, oder?' },
      { sp: 'Nguyen', txt: 'Unbedingt. Die Zahlen stimmen erstaunlich oft nicht. Das wird sich wohl irgendwann bessern, aber im Moment würde ich nichts ungeprüft rausschicken.' },
      { sp: 'Marta', txt: 'Einerseits spart das enorm Zeit, andererseits frage ich mich, was in fünf Jahren von meiner Arbeit übrig ist.' },
      { sp: 'Nguyen', txt: 'Die Routine wird verschwinden, das vermutet inzwischen jeder. Aber das Urteil wird man uns kaum abnehmen können.' },
      { sp: 'Marta', txt: 'Das hoffe ich. Wahrscheinlich werden wir eher zu Redakteuren: Wir schreiben nicht mehr alles selbst, wir prüfen und entscheiden.' },
      { sp: 'Nguyen', txt: 'Gute Beschreibung. Kommst du morgen zur Schulung? Da soll auch gezeigt werden, wie man brauchbare Anweisungen formuliert.' },
      { sp: 'Marta', txt: 'Bin dabei. Dennoch bleibe ich skeptisch, solange die Quellen nicht angegeben werden können.' }
    ]
  },
  vokabeln: [
    { de: 'die künstliche Intelligenz (KI)', em: '🤖', bsp: 'KI schreibt Protokolle in Minuten.' },
    { de: 'das Sprachmodell', em: '🧠', bsp: 'Das Sprachmodell erzeugt Text aus Wahrscheinlichkeiten.' },
    { de: 'freigeben', em: '🔓', bsp: 'Das Tool ist ab Montag freigegeben.' },
    { de: 'die Auflage', em: '📋', bsp: 'Die Nutzung ist an Auflagen gebunden.' },
    { de: 'der Datenschutz', em: '🔐', bsp: 'Der Datenschutz verbietet das Hochladen.' },
    { de: 'hochladen', em: '⬆️', bsp: 'Kundendaten dürfen nicht hochgeladen werden.' },
    { de: 'gegenlesen', em: '👓', bsp: 'Jedes Ergebnis muss gegengelesen werden.' },
    { de: 'ungeprüft', em: '⚠️', bsp: 'Schick nichts ungeprüft raus.' },
    { de: 'heikel', em: '😬', bsp: 'Personendaten sind heikel.' },
    { de: 'die Quelle angeben', em: '🔗', bsp: 'Woher stammt diese Zahl?' },
    { de: 'die Anweisung', em: '⌨️', bsp: 'Eine gute Anweisung ist konkret und kurz.' },
    { de: 'die Schulung', em: '🧑‍🏫', bsp: 'Morgen ist eine Schulung zum Tool.' },
    { de: 'die Routineaufgabe', em: '🔁', bsp: 'Routineaufgaben werden zuerst automatisiert.' },
    { de: 'skeptisch', em: '🤨', bsp: 'Ich bleibe vorerst skeptisch.' },
    { de: 'das Urteil', em: '⚖️', bsp: 'Das Urteil bleibt beim Menschen.' },
    { de: 'zuverlässig', em: '✅', bsp: 'Noch ist das Ergebnis nicht zuverlässig genug.' }
  ],
  grammatik: {
    title: 'Grammatik im Kontext',
    blocks: [
      {
        h: 'Passiv mit Modalverben — die Sprache der Regeln',
        txt: 'In der Mail der IT steht nie, wer etwas darf. Es steht nur, was gemacht werden darf. Dafür schiebt man das Modalverb vor das Passiv:',
        table: [
          ['Aktiv (wer tut es?)', 'Passiv mit Modalverb (was gilt?)'],
          ['Man muss jedes Ergebnis prüfen.', 'Jedes Ergebnis muss geprüft werden.'],
          ['Wir dürfen keine Kundendaten hochladen.', 'Kundendaten dürfen nicht hochgeladen werden.'],
          ['Man kann Protokolle automatisch erstellen.', 'Protokolle können automatisch erstellt werden.'],
          ['Morgen soll jemand zeigen, wie es geht.', 'Morgen soll gezeigt werden, wie es geht.'],
          ['Niemand kann die Quellen angeben.', 'Die Quellen können nicht angegeben werden.']
        ],
        note: 'Bauplan: <b>Modalverb auf Position 2 … Partizip II + werden am Satzende</b>. Im Nebensatz rutscht das Modalverb ganz nach hinten: „…, weil jedes Ergebnis geprüft <b>werden muss</b>."'
      },
      {
        h: 'Futur I — meistens keine Zukunft, sondern eine Vermutung',
        txt: 'Nguyen sagt „Das wird sich wohl bessern". Er weiß es nicht — er vermutet. Genau dafür benutzen Muttersprachler das Futur I im Alltag:',
        table: [
          ['Satz', 'Was er wirklich bedeutet'],
          ['Das wird wohl noch dauern.', 'Vermutung — ich bin mir nicht sicher'],
          ['Sie wird gerade in der Schulung sein.', 'Vermutung über <b>jetzt</b>, nicht über später'],
          ['Die Routine wird verschwinden.', 'Prognose über die Zukunft'],
          ['Er wird die Mail wohl übersehen haben.', 'Vermutung über die <b>Vergangenheit</b> (Futur II)'],
          ['Montag kommt das neue Tool.', 'echte Zukunft — dafür reicht Präsens + Zeitangabe']
        ],
        note: 'Bauplan: <b>werden + Infinitiv</b> am Satzende. Die typischen Begleiter sind <b>wohl, wahrscheinlich, vermutlich, sicher, bestimmt</b>. Für einen Termin brauchst du kein Futur — sag einfach Präsens.'
      }
    ]
  },
  uebungen: [
    { typ: 'listen', audio: 'Kundendaten dürfen auf keinen Fall hochgeladen werden.', frage: 'Hör zu: Was ist die Regel?', optionen: ['Kundendaten sind komplett verboten.', 'Kundendaten dürfen nur intern hochgeladen werden.', 'Kundendaten müssen vorher geprüft werden.'], richtig: 0 },
    { typ: 'mc', frage: 'Welcher Satz steht korrekt im Passiv mit Modalverb?', optionen: ['Jedes Ergebnis muss gegengelesen werden.', 'Jedes Ergebnis muss gegengelesen sein worden.', 'Jedes Ergebnis wird gegenlesen müssen.'], richtig: 0, hinweis: 'Der Bauplan ist fest: Modalverb auf Position 2, dann Partizip II, dann werden im Infinitiv ganz am Ende.' },
    { typ: 'mc', frage: '„Sie wird gerade in der Schulung sein." Was heißt das?', optionen: ['Ich vermute, dass sie jetzt in der Schulung ist.', 'Sie geht später zur Schulung.', 'Sie war gestern in der Schulung.'], richtig: 0, hinweis: 'Futur I plus ein Zeitwort wie gerade oder jetzt bedeutet keine Zukunft, sondern eine Vermutung über die Gegenwart.' },
    { typ: 'gapbank', frage: 'Passiv mit Modalverb — setz ein.', text: 'Protokolle ___ automatisch erstellt ___. Kundendaten ___ nicht hochgeladen werden. Morgen ___ gezeigt werden, wie man gute Anweisungen schreibt.', bank: ['können', 'werden', 'dürfen', 'soll', 'wird', 'muss'], loesung: ['können', 'werden', 'dürfen', 'soll'], hinweis: 'Das Modalverb richtet sich nach dem Subjekt und steht auf Position 2. Ganz am Satzende steht immer werden im Infinitiv — nie wird oder wurde.' },
    { typ: 'order', frage: 'Bau die Regel aus der IT-Mail!', woerter: ['Ergebnis', 'Jedes', 'muss', 'gegengelesen', 'werden'], loesung: 'Jedes Ergebnis muss gegengelesen werden', hinweis: 'Erst das Subjekt, dann das Modalverb auf Position 2, dann Partizip II und werden als Paar am Ende.' },
    { typ: 'order', frage: 'Bau die Vermutung!', woerter: ['Routine', 'Die', 'wird', 'wohl', 'verschwinden'], loesung: 'Die Routine wird wohl verschwinden', hinweis: 'Futur I heißt werden auf Position 2 und Infinitiv am Satzende. Das Wörtchen wohl macht aus der Prognose eine Vermutung.' },
    { typ: 'match', frage: 'Regel und Bedeutung — was passt zusammen?', paare: [['Kundendaten dürfen nicht hochgeladen werden.', '🔐 strenges Verbot'], ['Jedes Ergebnis muss geprüft werden.', '👓 Pflicht ohne Ausnahme'], ['Protokolle können erstellt werden.', '🤖 Möglichkeit, keine Pflicht'], ['Morgen soll gezeigt werden, wie es geht.', '🧑‍🏫 ist so geplant'], ['Die Quellen können nicht angegeben werden.', '⚠️ technisch gerade unmöglich']] },
    { typ: 'bild', bild: 'th-digital', frage: 'Eine Kollegin will einen Kundenvertrag ins KI-Tool kopieren. Was sagst du?', optionen: ['Vorsicht — Kundendaten dürfen nicht hochgeladen werden. Nimm ein anonymisiertes Beispiel.', 'Mach ruhig, das merkt sowieso niemand.', 'Frag lieber gar nicht erst nach, dann bist du auf der sicheren Seite.', 'Das Tool wird die Daten schon nicht speichern.'], richtig: 0, hinweis: 'Nenne die Regel und biete sofort eine erlaubte Alternative an. Ein reines Verbot hilft der Kollegin nicht weiter.' },
    { typ: 'type', frage: 'Formuliere eine Vermutung über die Zukunft deines Berufs mit Futur I.', muster: 'Routineaufgaben werden wahrscheinlich verschwinden, aber die Verantwortung wird bei uns bleiben.', akzeptiert: ['wird', 'werden'], hinweis: 'werden steht auf Position 2, der Infinitiv geht ans Satzende. Mit wohl, wahrscheinlich oder vermutlich zeigst du, dass du vermutest und nicht behauptest.' },
    { typ: 'mc', frage: 'Wie sagst du es im Nebensatz? „Ich schicke nichts raus, …"', optionen: ['… weil jedes Ergebnis geprüft werden muss.', '… weil jedes Ergebnis muss geprüft werden.', '… weil muss jedes Ergebnis geprüft werden.'], richtig: 0, hinweis: 'Im Nebensatz wandert das konjugierte Verb ganz ans Ende. Beim Passiv mit Modalverb steht es also hinter Partizip II und werden.' }
  ],
  zusammenfassung: {
    kernsaetze: [
      'Ab Montag darf das Tool offiziell benutzt werden.',
      'Kundendaten dürfen auf keinen Fall hochgeladen werden.',
      'Jedes Ergebnis muss gegengelesen werden.',
      'Das wird sich wohl irgendwann bessern.',
      'Solange die Quellen nicht angegeben werden können, bleibe ich skeptisch.'
    ],
    merke: [
      'Passiv mit Modalverb: <b>Modalverb (Position 2) … Partizip II + werden</b> am Satzende. Im Nebensatz steht das Modalverb ganz hinten.',
      'Futur I bedeutet im Alltag meist keine Zukunft, sondern eine <b>Vermutung</b> — erkennbar an <b>wohl, wahrscheinlich, vermutlich</b>.',
      'Für einen festen Termin reicht das <b>Präsens</b>: „Montag kommt das neue Tool." Futur I wäre hier unnötig schwerfällig.'
    ],
    tipp: 'Such im Intranet oder in einer Hausordnung fünf Sätze mit „darf", „muss" oder „kann" im Passiv und schreib sie ins Aktiv um. Danach denk beim nächsten Kaffee bewusst eine Vermutung im Futur I: „Der Aufzug wird wohl wieder kaputt sein." Genau so klingt echtes Deutsch.'
  },
  sprechen: {
    task: 'Nimm eine Minute zum Thema auf: Welche Aufgabe in deinem Alltag könnte automatisiert werden, welche auf keinen Fall — und wie sieht dein Beruf in zehn Jahren aus? Nutze mindestens einen Passivsatz mit Modalverb und eine Vermutung im Futur I.',
    tipps: ['In meinem Alltag könnte … automatisch erledigt werden.', '… darf auf keinen Fall an eine Maschine abgegeben werden.', 'Das wird sich vermutlich noch ändern.', 'In zehn Jahren werden wir wahrscheinlich eher prüfen als schreiben.']
  }
};
