// telc Medizin – Fachsprachprüfung – Lektion 1: Teil 1 — das Anamnesegespräch
// deutschoderwas club · Kursmaterial
window.LEKTION = {
  meta: { kurs: 'telc Medizin – Fachsprachprüfung', nr: 1, titel: 'Teil 1 — das Anamnesegespräch', level: 'B2–C1', bild: 'th-arzt', dauer: 'ca. 25 Min' },
  intro: {
    text: 'Zwanzig Minuten, ein Schauspieler und eine Prüfungskommission, die mitschreibt: Das ist Teil 1. Bewertet wird nicht, ob du die Diagnose findest, sondern ob deine Anamnese vollständig ist und ob du das Gespräch führst, statt dich führen zu lassen. Diese Lektion gibt dir den Frageaufbau, mit dem du in zwanzig Minuten alles abdeckst.',
    du_lernst: ['Trichter: von der offenen zur geschlossenen Frage', 'einen redseligen Patienten freundlich lenken', 'Laienbegriffe sofort verstehen', 'die Zusammenfassung am Schluss']
  },
  dialog: {
    bild: 'th-arzt',
    situation: 'Fachsprachprüfung, Teil 1. Dr. Rahimi hat zwanzig Minuten für die Anamnese. Der Simulationspatient Herr Kowalczyk kommt wegen Schwindel — und erzählt gern.',
    lines: [
      { sp: 'Dr. Rahimi', txt: 'Guten Tag, Herr Kowalczyk, mein Name ist Dr. Rahimi. Was führt Sie heute zu uns?' },
      { sp: 'Herr Kowalczyk', txt: 'Ja, also, mir wird in letzter Zeit immer so schwummrig. Meine Frau sagt schon seit Wochen, ich soll herkommen, aber Sie wissen ja, wie das ist …' },
      { sp: 'Dr. Rahimi', txt: 'Das kenne ich. Bleiben wir kurz bei diesem Gefühl: Dreht sich alles, oder ist es eher, als würden Sie schwanken?' },
      { sp: 'Herr Kowalczyk', txt: 'Als ob das Zimmer sich dreht. Wie auf einem Karussell. Dann muss ich mich irgendwo festhalten.' },
      { sp: 'Dr. Rahimi', txt: 'Wie lange dauert so ein Anfall — Sekunden oder Minuten? Und ist Ihnen dabei übel?' },
      { sp: 'Herr Kowalczyk', txt: 'Eine Minute vielleicht. Meistens, wenn ich mich im Bett umdrehe. Übel ist mir schon, erbrochen habe ich einmal, am Sonntag.' },
      { sp: 'Dr. Rahimi', txt: 'Nehmen Sie regelmäßig Medikamente ein? Und sind Vorerkrankungen bekannt?' },
      { sp: 'Herr Kowalczyk', txt: 'Blutverdünner. Und Zucker habe ich auch. Meine Mutter hatte das übrigens auch schon, die war damals sechsundsiebzig, als …' },
      { sp: 'Dr. Rahimi', txt: 'Zu Ihrer Familie komme ich gleich, versprochen. Vorher noch zwei kurze Fragen: Rauchen Sie, und wie viel Alkohol trinken Sie in der Woche?' }
    ]
  },
  vokabeln: [
    { de: 'der Simulationspatient', em: '🎭', bsp: 'In Teil 1 spielt ein Schauspieler den Patienten.' },
    { de: 'die offene Frage', em: '💬', bsp: 'Was führt Sie zu uns? — der Patient erzählt frei.' },
    { de: 'die geschlossene Frage', em: '✅', bsp: 'Haben Sie erbrochen? — Antwort: ja oder nein.' },
    { de: 'die Alternativfrage', em: '⚖️', bsp: 'Dreht sich alles, oder schwanken Sie?' },
    { de: 'das Gespräch lenken', em: '🧭', bsp: 'Bleiben wir kurz bei Ihren Beschwerden.' },
    { de: 'der Drehschwindel', em: '🌀', bsp: 'Fachwort: Vertigo. Alles dreht sich.' },
    { de: 'schwummrig', em: '😵', bsp: 'Laienwort für ein Schwindelgefühl.' },
    { de: 'der Lagerungsschwindel', em: '🛏️', bsp: 'tritt beim Umdrehen im Bett auf' },
    { de: 'die Begleitsymptome', em: '🤢', bsp: 'Übelkeit, Erbrechen, Ohrgeräusche?' },
    { de: 'der Blutverdünner', em: '🩸', bsp: 'Laienwort für einen Gerinnungshemmer — frag nach, welches Präparat.' },
    { de: 'die Familienanamnese', em: '👨‍👩‍👦', bsp: 'Gibt es Erkrankungen in Ihrer Familie?' },
    { de: 'die Sozialanamnese', em: '🏠', bsp: 'Beruf, Wohnsituation, Unterstützung zu Hause' },
    { de: 'die Noxen', em: '🚬', bsp: 'Nikotin, Alkohol, Drogen' },
    { de: 'die vegetative Anamnese', em: '🌙', bsp: 'Schlaf, Appetit, Stuhlgang, Gewicht' },
    { de: 'paraphrasieren', em: '🔁', bsp: 'Habe ich Sie richtig verstanden, dass …?' },
    { de: 'Ich fasse kurz zusammen.', em: '📝', bsp: 'Schlusssatz jeder guten Anamnese' }
  ],
  grammatik: {
    title: 'Grammatik im Kontext',
    blocks: [
      {
        h: 'Vier Fragetypen — und wann du welchen brauchst',
        txt: 'Jede Frageform holt eine andere Art von Information. Wer nur geschlossene Fragen stellt, bekommt ein Verhör. Wer nur offene stellt, bekommt die Lebensgeschichte.',
        table: [
          ['Typ', 'Beispiel', 'Wofür?'],
          ['offene W-Frage', 'Was führt Sie heute zu uns?', 'Einstieg — der Patient erzählt selbst'],
          ['Alternativfrage', 'Dreht sich alles, oder schwanken Sie?', 'Qualität eingrenzen'],
          ['geschlossene Frage', 'Haben Sie erbrochen?', 'ein Symptom gezielt abklären'],
          ['indirekte Frage', 'Können Sie mir sagen, ob Sie Fieber hatten?', 'höflich, wenn das Thema heikel wird']
        ],
        note: 'Nach ob, wann, warum steht das Verb am Satzende: … ob Sie Fieber hatten. Aber sparsam einsetzen — indirekte Fragen sind höflich, kosten aber Zeit.'
      },
      {
        h: 'Der Trichter — zwanzig Minuten im Zeitplan',
        txt: 'Weit anfangen, eng werden, zusammenfassen. So sieht der Ablauf mit der Uhr aus:',
        table: [
          ['Phase', 'Zeit', 'Formulierung'],
          ['Begrüßung, Anliegen', '0–2 Min', 'Mein Name ist … Was führt Sie heute zu uns?'],
          ['freies Erzählen', '2–5 Min', 'Erzählen Sie einfach. — Und dann?'],
          ['gezieltes Nachfragen', '5–12 Min', 'Wie lange dauert das? Ist Ihnen dabei übel?'],
          ['Vor-, Familien-, Sozialanamnese', '12–17 Min', 'Sind Vorerkrankungen bekannt? Rauchen Sie?'],
          ['Zusammenfassung', '17–20 Min', 'Ich fasse kurz zusammen: …']
        ],
        note: 'Wer bei Minute zwölf noch beim freien Erzählen ist, schafft Medikamente und Allergien nicht mehr — und genau daran scheitern die meisten in Teil 1.'
      }
    ]
  },
  uebungen: [
    { typ: 'listen', audio: 'Dreht sich alles, oder ist es eher, als würden Sie schwanken?', frage: 'Hör zu: Welcher Fragetyp ist das?', optionen: ['Alternativfrage', 'offene W-Frage', 'indirekte Frage'], richtig: 0 },
    { typ: 'mc', frage: 'Der Simulationspatient erzählt seit vier Minuten von seiner Mutter. Was tust du?', optionen: ['Zu Ihrer Familie komme ich gleich. Vorher noch eine kurze Frage: …', 'Ihn ausreden lassen — Höflichkeit geht vor.', 'Ihn stoppen: Das ist jetzt nicht wichtig.'], richtig: 0, hinweis: 'Lenken ist erlaubt und erwünscht. Kündige das Thema an, statt es abzuschneiden — dann bleibt der Kontakt erhalten.' },
    { typ: 'bild', bild: 'th-arzt', frage: 'Teil 1 dauert zwanzig Minuten. Womit fängst du an?', optionen: ['mit einer offenen Frage', 'mit der Medikamentenanamnese', 'mit deiner Verdachtsdiagnose'], richtig: 0, hinweis: 'Der Trichter läuft immer von weit nach eng — erst offen, dann gezielt.' },
    { typ: 'match', frage: 'Der Patient sagt … — du verstehst?', paare: [['schwummrig', '🌀 Schwindel'], ['Das Zimmer dreht sich.', '🎠 Drehschwindel'], ['Blutverdünner', '🩸 Antikoagulation'], ['Zucker', '🍬 Diabetes mellitus'], ['Ich habe gebrochen.', '🤮 Erbrechen']] },
    { typ: 'gapbank', frage: 'Mach daraus indirekte Fragen.', text: 'Können Sie mir sagen, ___ Sie Fieber ___? Ich würde außerdem gern wissen, ___ die Beschwerden begonnen haben.', bank: ['ob', 'hatten', 'wann', 'dass', 'haben'], loesung: ['ob', 'hatten', 'wann'], hinweis: 'Nach ob und wann steht das konjugierte Verb ganz am Ende des Nebensatzes.' },
    { typ: 'order', frage: 'Bau die Alternativfrage!', woerter: ['Schwindel', 'im', 'Liegen', 'oder', 'im', 'Stehen', 'auf', 'Tritt', 'der'], loesung: 'Tritt der Schwindel im Liegen oder im Stehen auf', hinweis: 'Entscheidungsfrage: Verb auf Position 1, trennbares Präfix ganz ans Ende.' },
    { typ: 'mc', frage: 'Welche Formulierung zeigt der Kommission, dass du aktiv zuhörst?', optionen: ['Aha, verstehe. Und wie ging es dann in den nächsten Tagen bei Ihnen weiter?', 'Das schreibe ich mir kurz auf, damit ich es später nicht wieder vergesse.', 'Habe ich Sie richtig verstanden, dass der Schwindel beim Umdrehen im Bett auftritt?'], richtig: 2, hinweis: 'Paraphrasieren heißt: mit eigenen Worten wiederholen und rückfragen. Das sichert die Information und wirkt professionell.' },
    { typ: 'mc', frage: 'Was gehört in die Sozialanamnese?', optionen: ['Beruf, Wohnsituation, Alkohol und Nikotin', 'Erkrankungen der Eltern und Geschwister', 'Wirkstoff und Dosis der Dauermedikation'], richtig: 0, hinweis: 'Sozialanamnese = Lebensumstände. Erkrankungen der Verwandten gehören in die Familienanamnese.' },
    { typ: 'type', frage: 'Fass am Ende zusammen: Drehschwindel seit Wochen, etwa eine Minute lang, beim Umdrehen im Bett, mit Übelkeit.', muster: 'Ich fasse kurz zusammen: Sie haben seit einigen Wochen Drehschwindel, der vor allem beim Umdrehen im Bett auftritt, etwa eine Minute anhält und von Übelkeit begleitet wird.', akzeptiert: ['ich fasse', 'zusammenfassend', 'habe ich sie richtig', 'ich wiederhole'], hinweis: 'Die Zusammenfassung gehört in die letzten drei Minuten. Sie zeigt der Kommission, dass du strukturiert gearbeitet hast — und du merkst selbst, was noch fehlt.' }
  ],
  zusammenfassung: {
    kernsaetze: [
      'Mein Name ist … Was führt Sie heute zu uns?',
      'Bleiben wir kurz bei diesem Gefühl: Dreht sich alles, oder schwanken Sie?',
      'Zu Ihrer Familie komme ich gleich. Vorher noch eine kurze Frage: …',
      'Habe ich Sie richtig verstanden, dass …?',
      'Ich fasse kurz zusammen: …'
    ],
    merke: [
      'Der Trichter: <b>offen → Alternativfrage → geschlossen</b>. Nie umgekehrt.',
      'Lenken statt abwürgen: <b>Dazu komme ich gleich</b> — Thema ankündigen, dann weiterfragen.',
      'Ab Minute zwölf gehören <b>Vorerkrankungen, Medikamente, Allergien, Noxen</b> auf den Tisch, sonst ist die Anamnese unvollständig.'
    ],
    tipp: 'Stell dir beim Üben einen Wecker auf zwölf Minuten. Wenn er klingelt und du noch keine Medikamente erfragt hast, brichst du ab und fängst neu an. Nach fünf Durchläufen sitzt das Tempo im Körper — und in der Prüfung brauchst du keine Uhr mehr.'
  },
  sprechen: {
    task: 'Nimm dir einen erfundenen Patienten mit Kopfschmerzen und sprich die ersten fünf Minuten laut: Begrüßung, offene Frage, freies Erzählen lassen, einmal freundlich lenken. Danach fasst du zusammen.',
    tipps: ['Mein Name ist … Was führt Sie heute zu uns?', 'Erzählen Sie einfach — ich unterbreche Sie nicht.', 'Dazu komme ich gleich. Vorher noch eine kurze Frage: …', 'Ich fasse kurz zusammen: …']
  }
};
