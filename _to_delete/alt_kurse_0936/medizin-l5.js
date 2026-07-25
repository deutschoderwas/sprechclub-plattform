// Deutsch für Mediziner – Lektion 5: Telefonat mit der Kollegin
// deutschoderwas club · Kursmaterial
window.LEKTION = {
  meta: { kurs: 'Deutsch für Mediziner', nr: 5, titel: 'Telefonat mit der Kollegin', level: 'B2–C1', bild: 'th-arbeit', dauer: 'ca. 22 Min' },
  intro: {
    text: 'Am Telefon fehlt dir alles, worauf du dich sonst verlässt: kein Gesicht, keine Kurve, kein Nachfragen mit den Augen. Die Kollegin am anderen Ende hat zwei Minuten und steht selbst unter Druck. Deshalb gilt hier eine eigene Grammatik: Wer bist du, was willst du, was ist passiert — in dieser Reihenfolge, verbunden mit Wörtern, die den Ablauf hörbar machen. Und am Ende wiederholst du die Absprache, immer.',
    du_lernst: ['Ein Telefonat in vier Zügen führen', 'Konnektoren der Reihenfolge sicher einsetzen', 'Rückfragen stellen, ohne unsicher zu wirken', 'Absprachen bestätigen und wiederholen']
  },
  dialog: {
    bild: 'th-arbeit',
    situation: 'Nachtdienst, kurz vor Mitternacht. Dr. Tran von der Inneren meldet der diensthabenden Radiologin Dr. Lindqvist eine dringende Untersuchung an. Die Leitung rauscht.',
    lines: [
      { sp: 'Dr. Lindqvist', txt: 'Radiologie, Lindqvist.' },
      { sp: 'Dr. Tran', txt: 'Guten Abend, Tran hier, Innere, Station 4. Ich rufe wegen einer dringenden CT-Anmeldung an. Passt es gerade?' },
      { sp: 'Dr. Lindqvist', txt: 'Zwei Minuten, dann muss ich zurück in den Untersuchungsraum. Schießen Sie los.' },
      { sp: 'Dr. Tran', txt: 'Frau Kowalczyk, 74 Jahre. Aufnahme heute Nachmittag mit akutem Bauch. Zunächst Ultraschall, der war unauffällig. Daraufhin Labor: Leukozyten 18 000, CRP 240. Im Anschluss deutliche klinische Verschlechterung, Blutdruck 90 zu 50.' },
      { sp: 'Dr. Lindqvist', txt: 'Moment — achtzehntausend oder achttausend? Die Leitung ist schlecht.' },
      { sp: 'Dr. Tran', txt: 'Achtzehntausend. Eins, acht und drei Nullen.' },
      { sp: 'Dr. Lindqvist', txt: 'Danke. Nierenwerte? Bekannte Kontrastmittelallergie?' },
      { sp: 'Dr. Tran', txt: 'Kreatinin 1,1, keine bekannte Allergie. Zugang liegt bereits.' },
      { sp: 'Dr. Lindqvist', txt: 'Gut, dann bringen Sie sie in zwanzig Minuten runter. Schriftliche Anmeldung schicken Sie parallel. Wiederholen Sie das bitte kurz.' },
      { sp: 'Dr. Tran', txt: 'Ich wiederhole: Frau Kowalczyk in zwanzig Minuten in der Radiologie, Zugang liegt, Anmeldung geht sofort digital raus. Bei wem melde ich mich, wenn sich der Zustand vorher verschlechtert?' }
    ]
  },
  vokabeln: [
    { de: 'Passt es gerade?', em: '⏱️', bsp: 'Höflicher Türöffner am Telefon' },
    { de: 'Ich rufe an wegen …', em: '📞', bsp: 'Ich rufe wegen einer Anmeldung an.' },
    { de: 'Schießen Sie los.', em: '🚀', bsp: 'salopp für „Fangen Sie an."' },
    { de: 'die Anmeldung / anmelden', em: '📝', bsp: 'Die Anmeldung geht digital raus.' },
    { de: 'zunächst', em: '1️⃣', bsp: 'Zunächst haben wir sie untersucht.' },
    { de: 'daraufhin', em: '2️⃣', bsp: 'Daraufhin folgte die Blutentnahme.' },
    { de: 'im Anschluss', em: '3️⃣', bsp: 'Im Anschluss kam es zur Verschlechterung.' },
    { de: 'parallel dazu', em: '⏸️', bsp: 'Parallel dazu läuft die Infusion.' },
    { de: 'die klinische Verschlechterung', em: '⚠️', bsp: 'Es kam zur klinischen Verschlechterung.' },
    { de: 'Die Leitung ist schlecht.', em: '📶', bsp: 'Können Sie das bitte wiederholen?' },
    { de: 'Ich wiederhole: …', em: '🔁', bsp: 'Ich wiederhole: in zwanzig Minuten unten.' },
    { de: 'buchstabieren', em: '🔤', bsp: 'Können Sie den Namen buchstabieren?' },
    { de: 'der venöse Zugang', em: '💉', bsp: 'Der Zugang liegt bereits.' },
    { de: 'das Konsil anfordern', em: '🤝', bsp: 'Ich würde gern ein neurologisches Konsil anfordern.' },
    { de: 'Habe ich Sie richtig verstanden, dass …?', em: '❓', bsp: 'Rückfrage zur Absicherung' },
    { de: 'Bei wem melde ich mich, wenn …?', em: '📲', bsp: 'Klärt die Zuständigkeit für den Notfall.' }
  ],
  grammatik: {
    title: 'Sprache am Telefon',
    blocks: [
      {
        h: 'Konnektoren der Reihenfolge — der Ablauf wird hörbar',
        txt: 'Am Telefon kann die Kollegin nichts nachlesen. Sie muss den Ablauf im Kopf sortieren, während du sprichst. Diese Wörter erledigen das Sortieren für sie — und sie stehen fast immer auf Position 1, das Verb rutscht dahinter:',
        table: [
          ['Position im Ablauf', 'Konnektor', 'Beispielsatz'],
          ['Anfang', 'zunächst / zuerst', 'Zunächst haben wir einen Ultraschall gemacht.'],
          ['unmittelbare Folge', 'daraufhin', 'Daraufhin ist der Blutdruck abgefallen.'],
          ['nächster Schritt', 'im Anschluss / anschließend', 'Im Anschluss wurde Blut abgenommen.'],
          ['gleichzeitig', 'parallel dazu / währenddessen', 'Parallel dazu läuft eine Infusion.'],
          ['Ende', 'zuletzt / schließlich', 'Schließlich haben wir Sie angerufen.'],
          ['Rückblick', 'zuvor / im Vorfeld', 'Zuvor war sie nie im Krankenhaus.']
        ],
        note: 'Achte auf die Inversion: Steht der Konnektor vorn, kommt sofort das <b>Verb</b>, erst danach das Subjekt — „Daraufhin <b>ist</b> der Blutdruck abgefallen", nicht „Daraufhin der Blutdruck ist abgefallen". Und Vorsicht bei <b>danach</b>: Es funktioniert im Alltag, wirkt in der Übergabe aber schnell wie eine Erzählung am Küchentisch.'
      },
      {
        h: 'Rückfragen, die dich souverän wirken lassen',
        txt: 'Nachfragen ist am Telefon kein Zeichen von Schwäche, sondern Standard — falsch verstandene Zahlen kosten Patienten. Wichtig ist nur, wie du fragst: nicht „Wie bitte?", sondern gezielt:',
        table: [
          ['Was du brauchst', 'So fragst du'],
          ['Zahl unsicher verstanden', 'Achtzehntausend oder achttausend? Die Leitung ist schlecht.'],
          ['Name unklar', 'Können Sie den Namen bitte buchstabieren?'],
          ['Auftrag absichern', 'Habe ich Sie richtig verstanden, dass ich sie sofort runterbringen soll?'],
          ['Indirekte Frage stellen', 'Können Sie mir sagen, ob die Untersuchung heute noch möglich ist?'],
          ['Zuständigkeit klären', 'Bei wem melde ich mich, wenn sich der Zustand verschlechtert?'],
          ['Zusammenfassen', 'Ich wiederhole kurz: … Ist das so richtig?']
        ],
        note: 'Bei indirekten Fragen wandert das Verb ans Ende: „Können Sie mir sagen, ob die Untersuchung heute noch möglich <b>ist</b>?" Und Zahlen sagst du bei Störgeräuschen zweimal — einmal als Wort, einmal in Ziffern: <b>„Achtzehntausend. Eins, acht und drei Nullen."</b>'
      },
      {
        h: 'Vier Züge — mehr braucht kein Telefonat',
        txt: 'Wer am Telefon ausholt, wird abgeschnitten. Diese vier Züge dauern zusammen weniger als neunzig Sekunden und enthalten alles, was die Kollegin für ihre Entscheidung braucht:',
        table: [
          ['Zug', 'Was du sagst', 'Beispiel'],
          ['1. Melden', 'Name, Fachabteilung, Station', 'Tran hier, Innere, Station 4.'],
          ['2. Anliegen zuerst', 'in einem Satz, bevor du erzählst', 'Ich rufe wegen einer dringenden CT-Anmeldung an. Passt es gerade?'],
          ['3. Fakten in der Reihenfolge', 'Patient, Grund, Verlauf, aktuelle Werte', 'Frau K., 74, akuter Bauch. Zunächst … daraufhin … im Anschluss …'],
          ['4. Absprache wiederholen', 'wer macht was, bis wann', 'Ich wiederhole: in zwanzig Minuten unten, Anmeldung geht sofort raus.']
        ],
        note: 'Der häufigste Fehler ist Zug 2: Erst zwei Minuten Vorgeschichte, dann das Anliegen. Sag <b>zuerst, was du willst</b> — dann weiß dein Gegenüber, worauf es beim Zuhören achten muss.'
      }
    ]
  },
  uebungen: [
    { typ: 'listen', audio: 'Zunächst Ultraschall, daraufhin Labor, im Anschluss deutliche klinische Verschlechterung.', frage: 'Hör zu: In welcher Reihenfolge ist das passiert?', optionen: ['Ultraschall, dann Labor, dann Verschlechterung', 'Labor, dann Ultraschall, dann Verschlechterung', 'Verschlechterung, dann Ultraschall, dann Labor'], richtig: 0 },
    { typ: 'mc', frage: 'Womit beginnst du das Telefonat?', optionen: ['Tran hier, Innere, Station 4. Ich rufe wegen einer dringenden Anmeldung an.', 'Also, wir haben da heute Nachmittag eine Patientin aufgenommen, die kam über die Notaufnahme …', 'Entschuldigen Sie bitte die Störung, ich weiß, Sie haben sicher viel zu tun …'], richtig: 0, hinweis: 'Zug 1 und 2 gehören zusammen: erst wer du bist, dann sofort das Anliegen. Vorgeschichte und ausführliche Entschuldigungen kosten genau die Zeit, die dein Gegenüber nicht hat.' },
    { typ: 'gapbank', frage: 'Setz die Konnektoren der Reihenfolge ein.', text: 'Die Patientin kam um 14 Uhr in die Notaufnahme. ___ haben wir sie klinisch untersucht, ___ folgte die Blutentnahme, und ___ wurde der Ultraschall gemacht.', bank: ['Zunächst', 'daraufhin', 'im Anschluss', 'zuvor', 'schließlich'], loesung: ['Zunächst', 'daraufhin', 'im Anschluss'], hinweis: 'Die drei Konnektoren markieren Anfang, unmittelbare Folge und nächsten Schritt. „zuvor" würde zurück in die Vergangenheit springen und die Reihenfolge zerstören.' },
    { typ: 'order', frage: 'Bau den Satz mit Konnektor am Anfang!', woerter: ['Daraufhin', 'ist', 'der', 'Blutdruck', 'deutlich', 'abgefallen'], loesung: 'Daraufhin ist der Blutdruck deutlich abgefallen', hinweis: 'Steht der Konnektor auf Position 1, folgt sofort das konjugierte Verb und erst danach das Subjekt. Das Partizip bleibt am Satzende.' },
    { typ: 'match', frage: 'Rückfrage und Zweck — was gehört zusammen?', paare: [['Können Sie das bitte buchstabieren?', '🔤 Name akustisch sichern'], ['Habe ich Sie richtig verstanden, dass …?', '✅ Auftrag bestätigen'], ['Bei wem melde ich mich, wenn …?', '📲 Zuständigkeit klären'], ['Ich wiederhole kurz: …', '🔁 Absprache absichern']] },
    { typ: 'mc', frage: 'Die Leitung rauscht, du hast eine Zahl nur halb verstanden. Was tust du?', optionen: ['Achtzehntausend oder achttausend? Die Leitung ist schlecht.', 'Du schreibst den wahrscheinlicheren Wert auf und fragst nicht nach.', 'Wie bitte? Ich habe leider gar nichts verstanden.'], richtig: 0, hinweis: 'Frag die konkrete Alternative ab, statt allgemein nachzufragen — das dauert zwei Sekunden statt zwanzig. Raten ist bei Zahlen nie eine Option.' },
    { typ: 'bild', bild: 'th-arbeit', frage: 'Die Kollegin sagt: „Zwei Minuten, dann muss ich zurück. Schießen Sie los." Wie reagierst du?', optionen: ['Du nennst sofort Patientin, Grund und Verlauf in der festen Reihenfolge.', 'Du entschuldigst dich ausführlich für die Störung.', 'Du fragst, ob du besser in einer Stunde noch einmal anrufen sollst.', 'Du liest die komplette Aufnahmedokumentation vor.'], richtig: 0, hinweis: 'Der Satz ist eine Einladung, nicht eine Beschwerde. Zwei Minuten reichen für alle vier Züge — wenn du keine Zeit mit Höflichkeitsschleifen verlierst.' },
    { typ: 'type', frage: 'Die Kollegin sagt: „Bringen Sie sie in zwanzig Minuten runter, Zugang muss liegen." Bestätige die Absprache.', muster: 'Ich wiederhole: in zwanzig Minuten unten, venöser Zugang liegt.', akzeptiert: ['ich wiederhole', 'habe ich sie richtig verstanden', 'also in zwanzig minuten'], hinweis: 'Wiederhole immer das Ergebnis, nie das ganze Gespräch: wer, was, bis wann. Damit ist die Absprache für beide Seiten dokumentiert.' },
    { typ: 'mc', frage: 'Welche Angabe fehlt in dieser Anmeldung zwingend: Name, Alter, Aufnahmegrund, aktuelle Werte — und …?', optionen: ['Nierenwerte und bekannte Kontrastmittelallergie', 'Beruf und Familienstand', 'Name des aufnehmenden Kollegen'], richtig: 0, hinweis: 'Die Radiologie kann ohne Nierenwerte und Allergiestatus kein Kontrastmittel geben. Wer das nicht mitliefert, wird garantiert zurückgerufen — und verliert doppelt Zeit.' },
    { typ: 'order', frage: 'Bau den Eröffnungssatz mit trennbarem Verb!', woerter: ['Ich', 'rufe', 'wegen', 'einer', 'dringenden', 'Anmeldung', 'an'], loesung: 'Ich rufe wegen einer dringenden Anmeldung an', hinweis: 'Bei „anrufen" bleibt die Vorsilbe „an" ganz am Satzende stehen, egal wie lang die Angabe dazwischen ist.' }
  ],
  zusammenfassung: {
    kernsaetze: [
      'Tran hier, Innere, Station 4. Ich rufe wegen einer dringenden Anmeldung an. Passt es gerade?',
      'Zunächst Ultraschall, daraufhin Labor, im Anschluss klinische Verschlechterung.',
      'Achtzehntausend. Eins, acht und drei Nullen.',
      'Habe ich Sie richtig verstanden, dass ich sie sofort runterbringen soll?',
      'Ich wiederhole: in zwanzig Minuten unten, Zugang liegt, Anmeldung geht sofort raus.',
      'Bei wem melde ich mich, wenn sich der Zustand vorher verschlechtert?'
    ],
    merke: [
      'Vier Züge: <b>Melden → Anliegen → Fakten → Absprache wiederholen.</b> Das Anliegen kommt vor der Geschichte.',
      'Konnektor auf Position 1 heißt <b>Verb auf Position 2</b>: „Daraufhin <b>ist</b> der Blutdruck abgefallen."',
      'Zahlen bei schlechter Leitung <b>zweimal</b> geben — als Wort und in Ziffern. Und jede Absprache am Ende wiederholen.'
    ],
    tipp: 'Schreib dir die vier Züge auf die Rückseite deines Diensttelefons oder auf einen Zettel neben den Stationsapparat. Vor jedem Anruf formulierst du Zug 2 einmal im Kopf — einen einzigen Satz, der sagt, was du willst. Das ist die halbe Miete: Wer sein Anliegen in einem Satz sagen kann, wird nicht unterbrochen.'
  },
  sprechen: {
    task: 'Ruf eine Kollegin an und fordere ein Konsil an — laut, in vier Zügen. Nutze dabei mindestens drei Konnektoren der Reihenfolge und beende das Gespräch damit, dass du die Absprache wiederholst.',
    tipps: ['… hier, Abteilung …, Station … Passt es gerade?', 'Ich rufe wegen … an.', 'Zunächst … daraufhin … im Anschluss …', 'Ich wiederhole kurz: … Ist das so richtig?']
  }
};
