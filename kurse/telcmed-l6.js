// telc Medizin – Fachsprachprüfung – Lektion 6: Die komplette Prüfungssimulation
// deutschoderwas club · Kursmaterial
window.LEKTION = {
  meta: { kurs: 'telc Medizin – Fachsprachprüfung', nr: 6, titel: 'Die komplette Prüfungssimulation', level: 'B2–C1', bild: 'th-bildung', dauer: 'ca. 25 Min' },
  intro: {
    text: 'Sechzig Minuten, drei Teile, eine Uhr. Wer hier scheitert, scheitert fast nie am Fachwissen — sondern daran, dass Teil 1 zu lang war, dass der Brief klingt wie gesprochen und dass bei der ersten unsicheren Frage Stille eintritt. Diese Lektion sammelt die Fehler, die wirklich passieren, und die Sätze, die dich aus jedem Loch herausholen.',
    du_lernst: ['Zeitplan über alle drei Teile', 'Unsicherheit sprachlich abfedern', 'die häufigsten Durchfallgründe', 'was die Kommission wirklich bewertet']
  },
  dialog: {
    bild: 'th-bildung',
    situation: 'Prüfungstag, 8:40 Uhr. Nach der Simulation nimmt Prüfer Dr. Weinhold die Kandidatin Sofia Marchetti kurz beiseite — die nächste Gruppe wartet schon vor der Tür.',
    lines: [
      { sp: 'Dr. Weinhold', txt: 'Frau Marchetti, ganz kurz zur Rückmeldung. Wir haben fünf Minuten, dann kommt die nächste Gruppe.' },
      { sp: 'Sofia Marchetti', txt: 'Ich weiß schon, was Sie sagen werden. Teil eins hat zu lange gedauert.' },
      { sp: 'Dr. Weinhold', txt: 'Zwölf Minuten freies Erzählen. Danach hatten Sie keine Zeit mehr für Medikamente und Allergien. Das ist der häufigste Grund, warum jemand hier durchfällt — nicht fehlendes Fachwissen.' },
      { sp: 'Sofia Marchetti', txt: 'Und die Dokumentation?' },
      { sp: 'Dr. Weinhold', txt: 'Vollständig, aber Sie schreiben, wie Sie sprechen. „Der Patient hat mir erzählt, dass …" gehört nicht in einen Arztbrief.' },
      { sp: 'Sofia Marchetti', txt: 'Und Teil drei? Bei der Differenzialdiagnose bin ich völlig ins Stocken geraten.' },
      { sp: 'Dr. Weinhold', txt: 'Ins Stocken geraten ist nicht das Problem. Sie haben „Ich weiß es nicht" gesagt und dann zwanzig Sekunden geschwiegen. Sagen Sie stattdessen, was Sie ausschließen wollen und womit.' },
      { sp: 'Sofia Marchetti', txt: 'Also lieber laut denken als schweigen.' },
      { sp: 'Dr. Weinhold', txt: 'Genau. Wir prüfen Ihre Sprache, nicht Ihre Facharztreife. Wer redet, kann Punkte sammeln. Wer schweigt, kann es nicht.' }
    ]
  },
  vokabeln: [
    { de: 'die Prüfungskommission', em: '👥', bsp: 'zwei Prüfende, oft ein Arzt und eine Sprachprüferin' },
    { de: 'die Rückmeldung', em: '💬', bsp: 'kurzes Feedback nach der Prüfung' },
    { de: 'ins Stocken geraten', em: '⏸️', bsp: 'Man kommt nicht weiter, sucht Worte.' },
    { de: 'laut denken', em: '🧠', bsp: 'Ich überlege gerade, ob …' },
    { de: 'ausschließen', em: '🚫', bsp: 'Eine Perforation möchte ich ausschließen.' },
    { de: 'Das kann ich nicht sicher sagen.', em: '🤷', bsp: 'ehrlich, aber mit Fortsetzung' },
    { de: 'dürfte / müsste / könnte', em: '⚖️', bsp: 'Abstufungen der Sicherheit' },
    { de: 'Genauer gesagt: …', em: '🎯', bsp: 'Selbstkorrektur mitten im Satz' },
    { de: 'Ich korrigiere mich.', em: '↩️', bsp: 'Fehler benennen statt verstecken' },
    { de: 'Habe ich Ihre Frage richtig verstanden?', em: '❓', bsp: 'Zeit gewinnen und absichern' },
    { de: 'das Zeitmanagement', em: '⏱️', bsp: 'dreimal zwanzig Minuten, kein Nachschlag' },
    { de: 'die Bewertungskriterien', em: '📊', bsp: 'Was zählt, steht nicht im Lehrbuch.' },
    { de: 'die Vollständigkeit', em: '✅', bsp: 'Alle Abschnitte kommen vor.' },
    { de: 'die Verständlichkeit', em: '👂', bsp: 'Versteht ein Laie, was du sagst?' },
    { de: 'der Registerwechsel', em: '🔀', bsp: 'Patientensprache und Fachsprache trennen' },
    { de: 'die Aussprache und Betonung', em: '🗣️', bsp: 'Auch Fachwörter müssen verstanden werden.' }
  ],
  grammatik: {
    title: 'Grammatik im Kontext',
    blocks: [
      {
        h: 'Sicherheit abstufen — die Modalverben der Vermutung',
        txt: 'Niemand erwartet, dass du dir sicher bist. Erwartet wird, dass du deine Unsicherheit sprachlich sauber ausdrückst statt zu schweigen.',
        table: [
          ['Sicherheit', 'Formulierung', 'Beispielsatz'],
          ['sehr sicher', 'Es handelt sich um …', 'Es handelt sich um eine Appendizitis.'],
          ['ziemlich sicher', 'dürfte / müsste', 'Am ehesten dürfte eine Appendizitis vorliegen.'],
          ['möglich', 'könnte / käme infrage', 'Differenzialdiagnostisch käme eine Divertikulitis infrage.'],
          ['unwahrscheinlich', 'eher unwahrscheinlich, dagegen spricht …', 'Dagegen spricht das fehlende Fieber.'],
          ['unsicher, aber handlungsfähig', 'Das kann ich nicht sicher sagen, ich würde … abklären.', 'Das kann ich nicht sicher sagen — ich würde zunächst sonografieren.']
        ],
        note: 'dürfte ist die starke Vermutung, könnte die bloße Möglichkeit. Mit diesen zwei Wörtern überstehst du jede Frage, deren Antwort du nicht kennst.'
      },
      {
        h: 'Sechzig Minuten, drei Teile, drei typische Fehler',
        txt: 'So sieht der Prüfungstag aus. Präg dir vor allem die rechte Spalte ein — das sind die Gründe, aus denen tatsächlich Kandidaten durchfallen.',
        table: [
          ['Teil', 'Dauer', 'Was bewertet wird', 'Häufigster Fehler'],
          ['Teil 1 — Anamnese', '20 Min', 'Vollständigkeit, verständliche Patientensprache', 'zu langes freies Erzählen, Medikamente fehlen'],
          ['Übergang', 'wenige Minuten', 'Notizen sortieren, Überschriften vorbereiten', 'unlesbare Stichworte'],
          ['Teil 2 — Dokumentation', '20 Min', 'Nominalstil, Gliederung, Fachtermini', 'gesprochene Sprache, letzte Abschnitte fehlen'],
          ['Teil 3 — Arzt-Arzt-Gespräch', '20 Min', 'Fachsprache, Struktur, Reaktion auf Rückfragen', 'Schweigen bei Unsicherheit']
        ],
        note: 'Bewertet werden Sprache, Struktur und Vollständigkeit — nicht, ob deine Diagnose am Ende die richtige war.'
      }
    ]
  },
  uebungen: [
    { typ: 'mc', frage: 'Du kennst die Antwort auf eine Prüferfrage nicht. Was sagst du?', optionen: ['Das weiß ich leider nicht, dazu kann ich Ihnen im Moment wirklich nichts sagen.', 'Das kann ich nicht sicher sagen. Ich würde zunächst eine Sonografie veranlassen, um … auszuschließen.', 'Da würde ich lieber kurz überlegen und erst antworten, wenn es mir wieder einfällt.'], richtig: 1, hinweis: 'Ehrlich bleiben, aber weitersprechen. Jeder Satz, der ein Vorgehen begründet, bringt Punkte.' },
    { typ: 'listen', audio: 'Differenzialdiagnostisch käme am ehesten eine Divertikulitis infrage.', frage: 'Hör zu: Wie sicher ist sich der Arzt?', optionen: ['Er hält es für möglich, nicht für sicher.', 'Er ist sich vollkommen sicher.', 'Er schließt es aus.'], richtig: 0 },
    { typ: 'gapbank', frage: 'Setz die passenden Modalverben ein.', text: 'Am ehesten ___ eine Cholezystitis vorliegen. Differenzialdiagnostisch ___ auch ein Ulkus infrage kommen. Sicher sagen ___ ich das erst nach der Sonografie.', bank: ['dürfte', 'könnte', 'kann', 'muss', 'darf'], loesung: ['dürfte', 'könnte', 'kann'], hinweis: 'dürfte = starke Vermutung, könnte = Möglichkeit, kann = reale Fähigkeit. Drei Stufen, drei verschiedene Aussagen.' },
    { typ: 'match', frage: 'Welcher Fehler gehört zu welchem Prüfungsteil?', paare: [['zwölf Minuten freies Erzählen', '⏱️ Teil 1'], ['„Der Patient hat gesagt, dass …" im Brief', '📄 Teil 2'], ['zwanzig Sekunden Schweigen nach einer Rückfrage', '🗣️ Teil 3'], ['unlesbare Notizen', '📝 Übergang zwischen den Teilen'], ['Fachwort ohne Erklärung beim Patienten', '👂 Verständlichkeit']] },
    { typ: 'order', frage: 'Bau den Satz, mit dem du dich selbst korrigierst!', woerter: ['mich', 'Ich', 'korrigiere', 'einem', 'Punkt', 'in'], loesung: 'Ich korrigiere mich in einem Punkt', hinweis: 'Reflexivpronomen steht direkt hinter dem konjugierten Verb, die Präpositionalergänzung danach.' },
    { typ: 'bild', bild: 'th-bildung', frage: 'Was wird in der Fachsprachprüfung bewertet?', optionen: ['Sprache, Struktur und Vollständigkeit', 'die medizinisch korrekte Enddiagnose', 'die Anzahl der verwendeten Fachwörter'], richtig: 0, hinweis: 'Es ist eine Sprachprüfung. Eine falsche Verdachtsdiagnose mit sauberer Begründung ist besser als eine richtige ohne.' },
    { typ: 'mc', frage: 'Nach zehn Minuten in Teil 1 hast du noch keine Medikamente erfragt. Was tust du?', optionen: ['Freundlich lenken und sofort zu Vorerkrankungen, Medikamenten und Allergien wechseln.', 'Den Patienten weiter erzählen lassen, das wirkt empathisch.', 'Die Medikamente später einfach in den Brief schreiben.'], richtig: 0, hinweis: 'Was in Teil 1 nicht erfragt wurde, darf in Teil 2 nicht auftauchen. Erfundene Angaben sind ein schwerer Fehler.' },
    { typ: 'type', frage: 'Der Prüfer fragt nach einer Differenzialdiagnose, die dir nicht einfällt. Formuliere eine Antwort, die dich weiterbringt.', muster: 'Das kann ich im Moment nicht sicher sagen. Ausschließen möchte ich vor allem eine Perforation, dafür würde ich eine Abdomenübersicht veranlassen.', akzeptiert: ['nicht sicher sagen', 'ausschließen', 'ich würde'], hinweis: 'Struktur der Rettung: Unsicherheit benennen — sagen, was du ausschließen willst — sagen, womit. Drei Schritte, immer verfügbar.' },
    { typ: 'mc', frage: 'Welcher Satz zeigt einen sauberen Registerwechsel?', optionen: ['Zum Patienten: „Wir schauen mit einer Kamera in den Magen." Zum Kollegen: „Ich habe eine Gastroskopie veranlasst."', 'Zum Patienten: „Wir führen eine Gastroskopie durch." Zum Kollegen: „Wir schauen mal in den Magen rein."', 'Beide Male: „Wir gucken uns das mal an."'], richtig: 0, hinweis: 'Fachsprache nach oben, Alltagssprache nach unten. Wer das Register nicht wechselt, verliert in beiden Richtungen.' },
    { typ: 'gapbank', frage: 'Ergänze deinen Zeitplan.', text: 'Teil 1 dauert ___ Minuten, Teil 2 ebenfalls ___ Minuten, Teil 3 noch einmal ___ Minuten — insgesamt ___ Minuten.', bank: ['20', '20', '20', '60', '45'], loesung: ['20', '20', '20', '60'], hinweis: 'Dreimal zwanzig Minuten, kein Nachschlag. Wer den Rhythmus im Kopf hat, verliert ihn auch unter Anspannung nicht.' }
  ],
  zusammenfassung: {
    kernsaetze: [
      'Am ehesten dürfte … vorliegen, differenzialdiagnostisch käme … infrage.',
      'Das kann ich nicht sicher sagen — ausschließen möchte ich vor allem …',
      'Genauer gesagt: … / Ich korrigiere mich: …',
      'Habe ich Ihre Frage richtig verstanden?',
      'Dreimal zwanzig Minuten: Anamnese, Dokumentation, Arzt-Arzt-Gespräch.'
    ],
    merke: [
      '<b>Wer redet, sammelt Punkte. Wer schweigt, nicht.</b> Unsicherheit wird formuliert, nicht ausgesessen.',
      'Der häufigste Durchfallgrund ist <b>Zeitnot in Teil 1</b> — ab Minute zwölf gehören Medikamente und Allergien auf den Tisch.',
      'Bewertet werden <b>Sprache, Struktur, Vollständigkeit</b> — nicht die richtige Enddiagnose.'
    ],
    tipp: 'Simuliere in dieser Woche einmal die vollen sechzig Minuten am Stück: zwanzig Minuten Anamnese mit einer Freundin als Patientin, zwanzig Minuten schreiben ohne Hilfsmittel, zwanzig Minuten Fallvorstellung mit Zwischenfragen. Nur der Durchlauf am Stück zeigt dir, wo dir wirklich die Luft ausgeht.'
  },
  sprechen: {
    task: 'Lass dir fünf schwierige Prüferfragen stellen, auf die du keine sichere Antwort hast, und beantworte jede laut in drei Schritten: Unsicherheit benennen, sagen was du ausschließen willst, sagen womit.',
    tipps: ['Am ehesten dürfte … vorliegen.', 'Differenzialdiagnostisch käme … infrage.', 'Das kann ich nicht sicher sagen — ich würde zunächst …', 'Habe ich Ihre Frage richtig verstanden?']
  }
};
