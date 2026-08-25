// telc Medizin – Fachsprachprüfung – Lektion 4: Vom Laienwort zum Fachbegriff
// deutschoderwas club · Kursmaterial
window.LEKTION = {
  meta: { kurs: 'telc Medizin – Fachsprachprüfung', nr: 4, titel: 'Vom Laienwort zum Fachbegriff', level: 'B2–C1', bild: 'th-sprache', dauer: 'ca. 25 Min' },
  intro: {
    text: 'Niemand kann zehntausend Fachwörter auswendig lernen — aber jeder kann fünfzig Bausteine lernen. Wer weiß, dass -itis Entzündung heißt und -ektomie Herausschneiden, versteht auch ein Wort, das er noch nie gehört hat. Dazu kommt die zweite Baustelle: das Ohr für Laienwörter, die kein Lehrbuch enthält.',
    du_lernst: ['griechisch-lateinische Bausteine', 'Artikel aus der Endung ableiten', 'typische Patientenwörter der Prüfung', 'unbekannte Fachwörter erschließen']
  },
  dialog: {
    bild: 'th-sprache',
    situation: 'Klinikbibliothek, zwei Wochen vor der Prüfung. Marta Vasilenko und Nguyen Minh gehen Karteikarten durch. Nguyen hat es eilig, sein Spätdienst beginnt um zwanzig Uhr.',
    lines: [
      { sp: 'Marta', txt: 'Nächste Karte: Nasenbluten.' },
      { sp: 'Nguyen', txt: 'Epistaxis. Zu leicht. Gib mir was aus der Prüfung von letzter Woche.' },
      { sp: 'Marta', txt: 'Bitte. Der Patient sagt: „Ich habe Wasser in den Beinen."' },
      { sp: 'Nguyen', txt: 'Ödeme. Genauer: periphere Ödeme, Unterschenkelödeme beidseits.' },
      { sp: 'Marta', txt: 'Und wenn er sagt, er hat Blutarmut, und die Nachbarin hatte Gelbsucht?' },
      { sp: 'Nguyen', txt: 'Anämie und Ikterus. Herzinfarkt ist Myokardinfarkt, Wasserlassen ist Miktion, Krampfanfall ist Konvulsion. Weiter, ich muss um acht auf Station.' },
      { sp: 'Marta', txt: 'Nicht so schnell. Was heißt denn -ektomie?' },
      { sp: 'Nguyen', txt: 'Herausschneiden. Appendektomie, Nephrektomie … Moment. Was war noch mal -stomie?' },
      { sp: 'Marta', txt: 'Siehst du. Eine künstliche Öffnung nach außen — Tracheostomie, Kolostomie. Deshalb lernen wir die Endungen und nicht die Wörter.' }
    ]
  },
  vokabeln: [
    { de: 'die Epistaxis', em: '👃', bsp: 'Fachwort für Nasenbluten' },
    { de: 'das Ödem', em: '🦵', bsp: 'Patient: „Wasser in den Beinen"' },
    { de: 'die Anämie', em: '🩸', bsp: 'Patient: „Blutarmut"' },
    { de: 'der Ikterus', em: '💛', bsp: 'Patient: „Gelbsucht"' },
    { de: 'die Miktion', em: '🚻', bsp: 'Patient: „Wasserlassen"' },
    { de: 'die Konvulsion', em: '⚡', bsp: 'Patient: „Krampfanfall"' },
    { de: 'der Pruritus', em: '🖐️', bsp: 'Patient: „Es juckt überall."' },
    { de: 'die Dysphagie', em: '🥄', bsp: 'Patient: „Das Essen bleibt mir im Hals stecken."' },
    { de: 'die Obstipation', em: '🧱', bsp: 'Patient: „Ich habe seit Tagen Verstopfung."' },
    { de: 'die Synkope', em: '💫', bsp: 'Patient: „Ich bin einfach umgekippt."' },
    { de: 'die Hämaturie', em: '🔴', bsp: 'Patient: „Da war Blut im Urin."' },
    { de: 'die Nykturie', em: '🌙', bsp: 'Patient: „Ich muss nachts dreimal raus."' },
    { de: '-ektomie', em: '✂️', bsp: 'operative Entfernung: Appendektomie' },
    { de: '-skopie', em: '🔭', bsp: 'Spiegelung: Gastroskopie' },
    { de: '-stomie', em: '🕳️', bsp: 'künstliche Öffnung: Kolostomie' },
    { de: '-itis', em: '🔥', bsp: 'Entzündung: Gastritis, Otitis' },
    { de: 'hyper- / hypo-', em: '📈', bsp: 'zu viel / zu wenig: Hypertonie, Hypotonie' }
  ],
  grammatik: {
    title: 'Grammatik im Kontext',
    blocks: [
      {
        h: 'Bausteine statt Vokabelliste',
        txt: 'Jedes lange Fachwort besteht aus zwei bis drei Teilen. Wenn du die Teile kennst, kannst du das Wort zerlegen — auch beim ersten Hören.',
        table: [
          ['Baustein', 'Bedeutung', 'Beispiel'],
          ['-itis', 'Entzündung', 'Gastritis, Otitis, Appendizitis'],
          ['-ektomie', 'operative Entfernung', 'Appendektomie, Nephrektomie'],
          ['-skopie', 'Spiegelung, Hineinschauen', 'Gastroskopie, Bronchoskopie'],
          ['-stomie', 'künstliche Öffnung nach außen', 'Kolostomie, Tracheostomie'],
          ['-algie', 'Schmerz', 'Neuralgie, Myalgie'],
          ['-ämie', 'im Blut', 'Anämie, Hyperkaliämie'],
          ['-urie', 'im Urin', 'Hämaturie, Nykturie'],
          ['dys-', 'gestört, erschwert', 'Dysphagie, Dyspnoe'],
          ['hyper- / hypo-', 'zu viel / zu wenig', 'Hypertonie / Hypotonie']
        ],
        note: 'Zerlegen statt raten: Hyper-kali-ämie ist zu viel Kalium im Blut. Das kannst du herleiten, ohne das Wort je gelesen zu haben.'
      },
      {
        h: 'Den Artikel liest du an der Endung ab',
        txt: 'Bei Fachwörtern musst du den Artikel nie einzeln lernen — die Endung verrät ihn fast immer.',
        table: [
          ['Endung', 'Artikel', 'Beispiele'],
          ['-itis', 'die', 'die Gastritis, die Otitis, die Zystitis'],
          ['-ie', 'die', 'die Anämie, die Therapie, die Dysphagie'],
          ['-ose / -urie', 'die', 'die Arthrose, die Thrombose, die Hämaturie'],
          ['-om', 'das', 'das Karzinom, das Hämatom, das Adenom'],
          ['-em', 'das', 'das Ödem, das Emphysem, das Ekzem'],
          ['-us', 'der', 'der Ikterus, der Bolus, der Reflux']
        ],
        note: 'Zwei echte Ausnahmen musst du dir merken: das Ulkus und das Virus sind trotz der Endung -us Neutrum. Bei Wörtern wie Thorax und Abdomen hilft keine Endungsregel — der Thorax, das Abdomen lernst du einzeln.'
      }
    ]
  },
  uebungen: [
    { typ: 'match', frage: 'Der Patient sagt … — wie heißt es im Arztbrief?', paare: [['Wasser in den Beinen', '🦵 periphere Ödeme'], ['Blutarmut', '🩸 Anämie'], ['Gelbsucht', '💛 Ikterus'], ['Ich bin einfach umgekippt.', '💫 Synkope'], ['Das Essen bleibt mir im Hals stecken.', '🥄 Dysphagie']] },
    { typ: 'mc', frage: 'Was bedeutet Hyperkaliämie, wenn du das Wort zerlegst?', optionen: ['zu viel Kalium im Blut', 'zu wenig Kalium im Urin', 'eine Entzündung der Niere'], richtig: 0, hinweis: 'hyper- = zu viel, -ämie = im Blut. Die Bausteine tragen die ganze Bedeutung.' },
    { typ: 'listen', audio: 'Die Patientin klagt über Pruritus am gesamten Integument.', frage: 'Hör zu: Worüber klagt die Patientin?', optionen: ['über Juckreiz an der ganzen Haut', 'über Schmerzen im ganzen Körper', 'über Ausschlag an den Händen'], richtig: 0 },
    { typ: 'gapbank', frage: 'Setz die richtigen Artikel ein.', text: '___ Gastritis, ___ Karzinom, ___ Ikterus, ___ Ödem', bank: ['die', 'das', 'der', 'das', 'den'], loesung: ['die', 'das', 'der', 'das'], hinweis: '-itis immer feminin, -om und -em immer neutrum, -us immer maskulin.' },
    { typ: 'mc', frage: 'Ein Kollege sagt Cholezystektomie. Was ist passiert?', optionen: ['Die Gallenblase wurde operativ entfernt.', 'Die Gallenblase wurde gespiegelt.', 'Die Gallenblase ist entzündet.'], richtig: 0, hinweis: '-ektomie = herausschneiden, -skopie = hineinschauen, -itis = Entzündung. Drei Endungen, drei völlig verschiedene Aussagen.' },
    { typ: 'order', frage: 'Bau die Erklärung für einen Patienten!', woerter: ['bedeutet', 'eine', 'des', 'Magens', 'Gastritis', 'Entzündung'], loesung: 'Gastritis bedeutet eine Entzündung des Magens', hinweis: 'Genitivattribut: des Magens steht hinter dem Nomen, auf das es sich bezieht.' },
    { typ: 'bild', bild: 'th-sprache', frage: 'Du hörst in der Prüfung ein Fachwort, das du nicht kennst. Was tust du?', optionen: ['Das Wort in Bausteine zerlegen und die Bedeutung herleiten.', 'Höflich lächeln und weiterreden.', 'Sofort sagen, dass du es nicht kennst.'], richtig: 0, hinweis: 'Die Bausteine sind dein Sicherheitsnetz. Erst wenn das Zerlegen nicht trägt, fragst du gezielt nach.' },
    { typ: 'type', frage: 'Übersetze in die Fachsprache: Der Patient muss nachts dreimal auf die Toilette und hat einmal Blut im Urin bemerkt.', muster: 'Nykturie mit dreimaligem nächtlichem Wasserlassen, einmalig Hämaturie.', akzeptiert: ['nykturie', 'hämaturie'], hinweis: 'nykt- = Nacht, häm- = Blut, -urie = im Urin. Zwei Bausteine ergeben zwei fertige Fachwörter.' },
    { typ: 'mc', frage: 'Welches Wortpaar bedeutet das Gegenteil voneinander?', optionen: ['Hypertonie und Hypotonie', 'Gastritis und Gastroskopie', 'Anämie und Hämaturie'], richtig: 0, hinweis: 'hyper- und hypo- sind das klassische Gegensatzpaar. Verwechseln kann hier gefährlich werden.' },
    { typ: 'gapbank', frage: 'Ergänze die Bausteine.', text: 'Eine Spiegelung des Magens heißt Gastro___. Eine Entfernung der Niere heißt Nephr___. Eine künstliche Öffnung des Dickdarms heißt Kolo___.', bank: ['skopie', 'ektomie', 'stomie', 'itis'], loesung: ['skopie', 'ektomie', 'stomie'], hinweis: 'Hineinschauen, Herausschneiden, Öffnung nach außen — drei Handlungen, drei feste Endungen.' }
  ],
  zusammenfassung: {
    kernsaetze: [
      'Wasser in den Beinen heißt periphere Ödeme.',
      'Der Patient ist umgekippt — dokumentiert wird eine Synkope.',
      'Hyper-kali-ämie: zu viel Kalium im Blut.',
      'Gastro-skopie ist hineinschauen, Nephr-ektomie ist herausschneiden.',
      'Endung -itis, -ie, -ose: die. Endung -om, -em: das. Endung -us: der.'
    ],
    merke: [
      'Lern <b>Bausteine, keine Wortlisten</b>: -itis, -ektomie, -skopie, -stomie, -algie, -ämie, -urie.',
      '<b>hyper- = zu viel, hypo- = zu wenig, dys- = gestört.</b> Drei Präfixe, hunderte Wörter.',
      'Den <b>Artikel</b> liest du an der Endung ab — nicht auswendig lernen, ableiten.'
    ],
    tipp: 'Schreib diese Woche eine zweispaltige Liste: links jedes Laienwort, das dir im Dienst wirklich begegnet ist, rechts das Fachwort. Nach sieben Tagen hast du keine Lehrbuchliste, sondern deine eigene — und genau die Wörter fallen in der Prüfung.'
  },
  sprechen: {
    task: 'Nimm zehn Fachwörter aus dieser Lektion und erkläre jedes laut in einem Satz, so wie du es einem Patienten sagen würdest. Danach zerlegst du fünf davon hörbar in ihre Bausteine.',
    tipps: ['… bedeutet eine Entzündung des/der …', 'Das Wort besteht aus … und …', 'hyper- heißt zu viel, hypo- heißt zu wenig.', '-skopie heißt hineinschauen, -ektomie heißt entfernen.']
  }
};
