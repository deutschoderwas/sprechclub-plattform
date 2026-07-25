// telc Medizin – Fachsprachprüfung – Lektion 5: Das Aufklärungsgespräch
// deutschoderwas club · Kursmaterial
window.LEKTION = {
  meta: { kurs: 'telc Medizin – Fachsprachprüfung', nr: 5, titel: 'Das Aufklärungsgespräch', level: 'B2–C1', bild: 'th-gespraech', dauer: 'ca. 25 Min' },
  intro: {
    text: 'Jetzt geht es in die andere Richtung: Du hast das Fachwort im Kopf und musst es in eine Sprache übersetzen, die eine verunsicherte Frau um halb zehn abends versteht. Die Kommission hört genau hin, ob du Risiken ehrlich benennst und ob du dich rückversicherst, dass wirklich angekommen ist, was du gesagt hast.',
    du_lernst: ['Fachbegriffe in Alltagssprache übersetzen', 'Häufigkeiten ehrlich benennen', 'Rückversicherung mit eigenen Worten', 'zur Einwilligung führen']
  },
  dialog: {
    bild: 'th-gespraech',
    situation: 'Endoskopie-Abteilung, kurz vor Feierabend. Dr. Boulos klärt Frau Yildirim über die Darmspiegelung am nächsten Morgen auf. Sie hat schon viel von ihrer Schwester gehört.',
    lines: [
      { sp: 'Dr. Boulos', txt: 'Frau Yildirim, morgen früh ist bei Ihnen eine Koloskopie geplant — eine Spiegelung des Dickdarms.' },
      { sp: 'Frau Yildirim', txt: 'Da wird man doch schlafen gelegt, oder? Meine Schwester sagt, sie hat überhaupt nichts gemerkt.' },
      { sp: 'Dr. Boulos', txt: 'Sie bekommen ein Beruhigungsmittel über die Vene. Sie schlafen dabei, aber es ist keine Vollnarkose — Sie atmen die ganze Zeit selbst.' },
      { sp: 'Frau Yildirim', txt: 'Und was machen Sie da genau?' },
      { sp: 'Dr. Boulos', txt: 'Wir führen einen dünnen, beweglichen Schlauch mit einer kleinen Kamera ein und schauen uns die Darmschleimhaut von innen an. Wenn wir Polypen finden — das sind kleine Wucherungen der Schleimhaut —, nehmen wir sie gleich mit ab.' },
      { sp: 'Frau Yildirim', txt: 'Wucherungen. Ist das dann Krebs?' },
      { sp: 'Dr. Boulos', txt: 'Meistens nicht. Polypen sind zunächst gutartig. Aus einigen kann aber über viele Jahre Krebs entstehen — genau deshalb nehmen wir sie heraus.' },
      { sp: 'Frau Yildirim', txt: 'Und wenn etwas schiefgeht? Meine Schwester meinte, das sei völlig harmlos.' },
      { sp: 'Dr. Boulos', txt: 'Ganz harmlos ist keine Untersuchung. Häufig ist der Bauch danach etwas gebläht. Selten kann es an der Abtragungsstelle bluten. Sehr selten, bei etwa einer von tausend Untersuchungen, entsteht ein kleiner Riss in der Darmwand — dann müsste operiert werden. Erzählen Sie mir bitte einmal mit Ihren eigenen Worten, was morgen passiert, damit ich sicher bin, dass ich es verständlich erklärt habe.' }
    ]
  },
  vokabeln: [
    { de: 'die Koloskopie', em: '🔬', bsp: 'Für die Patientin: eine Spiegelung des Dickdarms.' },
    { de: 'die Sedierung', em: '😴', bsp: 'ein Beruhigungsmittel über die Vene' },
    { de: 'die Vollnarkose', em: '🫁', bsp: 'Wichtig für die Patientin: Sedierung ist keine Vollnarkose.' },
    { de: 'der Polyp', em: '🍄', bsp: 'eine kleine Wucherung der Schleimhaut' },
    { de: 'gutartig / bösartig', em: '⚖️', bsp: 'benigne / maligne in Patientensprache' },
    { de: 'die Biopsie', em: '🧫', bsp: 'Wir entnehmen eine winzige Gewebeprobe.' },
    { de: 'die Perforation', em: '🕳️', bsp: 'ein kleiner Riss in der Darmwand' },
    { de: 'die Nachblutung', em: '🩸', bsp: 'Selten kann es an der Abtragungsstelle bluten.' },
    { de: 'die Aufklärung', em: '📋', bsp: 'Pflichtgespräch vor jedem Eingriff' },
    { de: 'die Einwilligung', em: '✍️', bsp: 'Sind Sie damit einverstanden?' },
    { de: 'der Aufklärungsbogen', em: '📄', bsp: 'Hier unten brauche ich Ihre Unterschrift.' },
    { de: 'die Alternative', em: '🔀', bsp: 'Alternativ käme … infrage.' },
    { de: 'häufig / selten / sehr selten', em: '📊', bsp: 'Häufigkeiten immer benennen, nie beschönigen.' },
    { de: 'Konnte ich das verständlich erklären?', em: '❓', bsp: 'Rückversicherung, nicht Floskel' },
    { de: 'mit Ihren eigenen Worten', em: '🗣️', bsp: 'Erzählen Sie mir, was morgen passiert.' },
    { de: 'Haben Sie noch Fragen dazu?', em: '💭', bsp: 'Pause machen und wirklich warten.' }
  ],
  grammatik: {
    title: 'Grammatik im Kontext',
    blocks: [
      {
        h: 'Zurück zum Verb — Fachwort in Alltagssprache',
        txt: 'Im Arztbrief machst du aus Verben Nomen. Hier machst du das Gegenteil: aus dem Nomen wieder eine Handlung, die man sich vorstellen kann.',
        table: [
          ['Fachbegriff', 'So erklärst du es'],
          ['Koloskopie', 'Wir schauen mit einer kleinen Kamera in den Dickdarm hinein.'],
          ['Sedierung', 'Sie bekommen ein Beruhigungsmittel über die Vene und schlafen dabei.'],
          ['Polyp', 'eine kleine Wucherung, die aus der Darmschleimhaut herauswächst'],
          ['Biopsie', 'Wir entnehmen eine winzige Gewebeprobe und lassen sie untersuchen.'],
          ['Perforation', 'Es entsteht ein kleiner Riss in der Darmwand.'],
          ['maligne Entartung', 'Aus der Wucherung kann über Jahre Krebs entstehen.']
        ],
        note: 'Formel: Fachwort nennen, kurz absetzen, mit einem Verb erklären. „Eine Koloskopie — wir schauen mit einer Kamera in den Darm hinein." Das Fachwort weglassen ist falsch, es unerklärt lassen auch.'
      },
      {
        h: 'Wahrscheinlichkeit ehrlich ausdrücken',
        txt: 'Risiken werden nicht verschwiegen und nicht dramatisiert. Dafür gibt es feste Stufen — und für die hypothetische Folge den Konjunktiv II.',
        table: [
          ['Häufigkeit', 'Formulierung', 'Beispielsatz'],
          ['sehr häufig', 'fast immer, regelmäßig', 'Der Bauch ist danach fast immer etwas gebläht.'],
          ['häufig', 'häufig, oft', 'Häufig kommt es zu leichten Krämpfen.'],
          ['selten', 'selten, in Einzelfällen', 'Selten kann es an der Abtragungsstelle bluten.'],
          ['sehr selten', 'sehr selten, bei etwa einer von tausend', 'Sehr selten entsteht ein Riss in der Darmwand.'],
          ['hypothetische Folge', 'Konjunktiv II: müsste, würde, käme', 'Dann müsste operiert werden.']
        ],
        note: 'Der Satz „Da kann nichts passieren" ist juristisch falsch und in der Prüfung ein schwerer Fehler. Sag stattdessen, wie selten etwas ist und was dann geschähe.'
      }
    ]
  },
  uebungen: [
    { typ: 'match', frage: 'Fachbegriff und Patientenerklärung — was passt?', paare: [['Sedierung', '😴 ein Beruhigungsmittel über die Vene'], ['Polyp', '🍄 eine kleine Wucherung der Schleimhaut'], ['Biopsie', '🧫 eine winzige Gewebeprobe'], ['Perforation', '🕳️ ein kleiner Riss in der Darmwand'], ['benigne', '⚖️ gutartig']] },
    { typ: 'mc', frage: 'Die Patientin fragt: „Kann da was passieren?" Welche Antwort ist richtig?', optionen: ['Selten kann es bluten, sehr selten entsteht ein Riss — dann müsste operiert werden.', 'Nein, da kann überhaupt nichts passieren.', 'Theoretisch kann immer alles passieren.'], richtig: 0, hinweis: 'Risiken werden benannt und eingeordnet. Verharmlosen und Dramatisieren sind beides Aufklärungsfehler.' },
    { typ: 'listen', audio: 'Sehr selten, bei etwa einer von tausend Untersuchungen, entsteht ein Riss in der Darmwand.', frage: 'Hör zu: Wie häufig ist dieses Risiko?', optionen: ['sehr selten, etwa 0,1 Prozent', 'häufig, etwa 10 Prozent', 'in jedem hundertsten Fall'], richtig: 0 },
    { typ: 'gapbank', frage: 'Setz die Häufigkeitsangaben passend ein.', text: '___ ist der Bauch danach etwas gebläht. ___ kommt es zu einer Nachblutung. ___ entsteht ein Riss, dann ___ operiert werden.', bank: ['Fast immer', 'Selten', 'Sehr selten', 'müsste', 'kann'], loesung: ['Fast immer', 'Selten', 'Sehr selten', 'müsste'], hinweis: 'Von häufig nach selten absteigend. Die hypothetische Folge steht im Konjunktiv II: müsste operiert werden.' },
    { typ: 'order', frage: 'Bau die Rückversicherungsfrage!', woerter: ['Worten', 'Sie', 'mir', 'Ihren', 'eigenen', 'was', 'passiert', 'morgen', 'Erzählen', 'mit'], loesung: 'Erzählen Sie mir mit Ihren eigenen Worten was morgen passiert', hinweis: 'Imperativ mit Sie, dann die Angaben, zuletzt der Nebensatz mit dem Verb am Ende.' },
    { typ: 'bild', bild: 'th-gespraech', frage: 'Womit endet ein vollständiges Aufklärungsgespräch?', optionen: ['mit Rückversicherung und Einwilligung', 'mit der Verdachtsdiagnose', 'mit dem Untersuchungsbefund'], richtig: 0, hinweis: 'Aufklärung ohne dokumentierte Einwilligung ist keine Aufklärung. Vorher kommt die Rückversicherung, dass alles verstanden wurde.' },
    { typ: 'mc', frage: 'Welche Rückversicherung ist wirklich eine Rückversicherung?', optionen: ['Erzählen Sie mir bitte mit Ihren eigenen Worten, was morgen passiert.', 'Haben Sie alles verstanden?', 'Alles klar so weit, ja?'], richtig: 0, hinweis: 'Auf „Haben Sie alles verstanden?" sagen fast alle Menschen ja. Erst das Nacherzählen zeigt, was angekommen ist.' },
    { typ: 'type', frage: 'Erkläre einer Patientin in einem Satz, was eine Biopsie ist.', muster: 'Wir entnehmen dabei eine winzige Gewebeprobe und lassen sie im Labor untersuchen.', akzeptiert: ['gewebeprobe', 'kleines stück', 'probe'], hinweis: 'Ein Verb, ein Bild, kein zweites Fachwort. „Wir entnehmen …" ist verständlicher als „es erfolgt eine Entnahme".' },
    { typ: 'mc', frage: 'Die Patientin sagt: „Meine Schwester meinte, das sei völlig harmlos." Wie reagierst du?', optionen: ['Ganz harmlos ist keine Untersuchung — ich sage Ihnen, womit man rechnen muss.', 'Wenn Ihre Schwester das sagt, wird es stimmen.', 'Ihre Schwester ist keine Ärztin.'], richtig: 0, hinweis: 'Falsche Vorannahmen musst du freundlich korrigieren. Weder bestätigen noch die Bezugsperson abwerten.' },
    { typ: 'gapbank', frage: 'Vervollständige den Schluss des Gesprächs.', text: 'Haben Sie noch ___ dazu? Sind Sie damit ___? Dann brauche ich hier unten noch Ihre ___.', bank: ['Fragen', 'einverstanden', 'Unterschrift', 'Zeit', 'Beschwerden'], loesung: ['Fragen', 'einverstanden', 'Unterschrift'], hinweis: 'Feste Reihenfolge am Ende: offene Frage, Einverständnis, Dokumentation.' }
  ],
  zusammenfassung: {
    kernsaetze: [
      'Morgen ist bei Ihnen eine Koloskopie geplant — eine Spiegelung des Dickdarms.',
      'Sie bekommen ein Beruhigungsmittel über die Vene, aber es ist keine Vollnarkose.',
      'Häufig ist …, selten kann …, sehr selten entsteht … Dann müsste operiert werden.',
      'Erzählen Sie mir bitte mit Ihren eigenen Worten, was morgen passiert.',
      'Haben Sie noch Fragen dazu? Sind Sie damit einverstanden?'
    ],
    merke: [
      'Fachwort nennen, absetzen, <b>mit einem Verb erklären</b> — nie das Fachwort weglassen, nie unerklärt lassen.',
      'Risiken in <b>Stufen</b>: fast immer → häufig → selten → sehr selten. Die Folge im <b>Konjunktiv II</b>.',
      '„Haben Sie alles verstanden?" ist keine Rückversicherung. <b>Nacherzählen lassen</b> ist eine.'
    ],
    tipp: 'Such dir drei Eingriffe, die auf deiner Station täglich vorkommen, und schreib zu jedem sechs Sätze auf: Zweck, Ablauf, häufiges Risiko, seltenes Risiko, Alternative, Rückversicherung. Sprich sie so lange laut, bis kein einziges unerklärtes Fachwort mehr darin vorkommt.'
  },
  sprechen: {
    task: 'Kläre laut über eine Magenspiegelung auf: Zweck, Ablauf, ein häufiges und ein sehr seltenes Risiko, eine Alternative — und schließe mit der Bitte, dir alles noch einmal mit eigenen Worten zu erzählen.',
    tipps: ['Wir möchten … durchführen, weil …', 'Zuerst …, dann …, zum Schluss …', 'Häufig ist …, sehr selten kann …', 'Erzählen Sie mir bitte mit Ihren eigenen Worten …']
  }
};
