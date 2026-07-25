// Deutsch für Mediziner – Lektion 4: Die Patientenvorstellung
// deutschoderwas club · Kursmaterial
window.LEKTION = {
  meta: { kurs: 'Deutsch für Mediziner', nr: 4, titel: 'Die Patientenvorstellung', level: 'B2–C1', bild: 'th-wissenschaft', dauer: 'ca. 22 Min' },
  intro: {
    text: 'In der Frühbesprechung hast du neunzig Sekunden pro Patient. Wer da in ganzen Nebensätzen erzählt, wird unterbrochen. Deutsche Ärzte schalten dafür in einen eigenen Modus: Substantive statt Verben, kein Artikel, kein Subjekt — „Aufnahme gestern bei zunehmender Dyspnoe". Diese Lektion zeigt dir, wie dieser Nominalstil gebaut wird, in welcher Reihenfolge du vorstellst, und wie du unmittelbar danach dasselbe für den Patienten wieder in normales Deutsch übersetzt.',
    du_lernst: ['Nominalstil bilden und auflösen', 'Die fünf Schritte der Vorstellung', 'Auf Zwischenfragen des Oberarztes reagieren', 'Fachbegriffe für Patienten übersetzen']
  },
  dialog: {
    bild: 'th-wissenschaft',
    situation: 'Frühbesprechung auf der Inneren, 7:45 Uhr. Assistenzärztin Dr. Petrova stellt einen Neuzugang vor, Oberarzt Dr. Halvorsen drängt.',
    lines: [
      { sp: 'Dr. Halvorsen', txt: 'Zimmer 14, bitte. Kurz — wir haben noch elf.' },
      { sp: 'Dr. Petrova', txt: 'Herr Diallo, 62 Jahre, Aufnahme gestern Abend über die Notaufnahme bei seit drei Tagen zunehmender Luftnot und Beinschwellung beidseits.' },
      { sp: 'Dr. Halvorsen', txt: 'Vorbekannt?' },
      { sp: 'Dr. Petrova', txt: 'Bekannte Herzschwäche, Bluthochdruck, Diabetes Typ 2. Bei Aufnahme Sauerstoffsättigung 88 Prozent unter Raumluft, Puls 104.' },
      { sp: 'Dr. Halvorsen', txt: 'Befunde. Bild und Labor.' },
      { sp: 'Dr. Petrova', txt: 'Im Röntgenbild Zeichen der Stauung, laborchemisch deutlich erhöhtes BNP, Nierenwerte im Normbereich. Unter Gabe von Furosemid Ausscheidung von zwei Litern über Nacht, dadurch Rückgang der Beinschwellung.' },
      { sp: 'Dr. Halvorsen', txt: 'Also kardiale Dekompensation. Ihre Einschätzung?' },
      { sp: 'Dr. Petrova', txt: 'Ich würde die Entwässerung fortführen, das Gewicht täglich kontrollieren und heute eine Echokardiografie anmelden. Zur Ursache wäre auch ein — ' },
      { sp: 'Dr. Halvorsen', txt: 'Machen Sie. Und erklären Sie dem Mann bitte in normalen Worten, was er hat. Er hat mich gestern im Flur gefragt, was „dekompensiert" bedeutet.' },
      { sp: 'Dr. Petrova', txt: 'Mache ich. Ich sage ihm: Das Herz schafft es gerade nicht, das Blut kräftig genug weiterzupumpen — deshalb sammelt sich Wasser in den Beinen und in der Lunge.' }
    ]
  },
  vokabeln: [
    { de: 'die Aufnahme', em: '🚪', bsp: 'Aufnahme gestern Abend über die Notaufnahme' },
    { de: 'vorbekannt / bekannt', em: '📁', bsp: 'Bekannte Herzschwäche, bekannter Diabetes' },
    { de: 'laborchemisch', em: '🧪', bsp: 'laborchemisch deutlich erhöhtes CRP' },
    { de: 'im Normbereich', em: '✅', bsp: 'Die Nierenwerte liegen im Normbereich.' },
    { de: 'unter Gabe von …', em: '💧', bsp: 'Unter Gabe von Furosemid Rückgang der Ödeme' },
    { de: 'der Rückgang', em: '📉', bsp: 'Rückgang der Schwellung über Nacht' },
    { de: 'die Ausscheidung', em: '🚽', bsp: 'Ausscheidung von zwei Litern über Nacht' },
    { de: 'die Verdachtsdiagnose', em: '❓', bsp: 'Verdachtsdiagnose: kardiale Dekompensation' },
    { de: 'die Einschätzung', em: '🧭', bsp: 'Und Ihre Einschätzung?' },
    { de: 'das weitere Prozedere', em: '➡️', bsp: 'Zum weiteren Prozedere schlage ich vor …' },
    { de: 'eine Untersuchung anmelden', em: '📞', bsp: 'Ich melde heute eine Echokardiografie an.' },
    { de: 'die Dekompensation', em: '🫀', bsp: 'Das Herz schafft die Belastung nicht mehr.' },
    { de: 'die Sauerstoffsättigung', em: '🅾️', bsp: 'Sättigung 88 Prozent unter Raumluft' },
    { de: 'unter Raumluft', em: '🌬️', bsp: 'ohne zusätzlichen Sauerstoff gemessen' },
    { de: 'fortführen', em: '🔄', bsp: 'Ich würde die Therapie unverändert fortführen.' },
    { de: 'in normalen Worten', em: '🗨️', bsp: 'Erklären Sie es ihm in normalen Worten.' }
  ],
  grammatik: {
    title: 'Sprache der Frühbesprechung',
    blocks: [
      {
        h: 'Nominalstil — das Verb wandert ins Substantiv',
        txt: 'Im Team sprichst du in Blöcken, nicht in Sätzen. Aus jedem Verb wird ein Substantiv, das Hilfsverb fällt weg, der Artikel oft auch. Was übrig bleibt, ist doppelt so schnell und trotzdem eindeutig:',
        table: [
          ['So würdest du es normal sagen', 'So stellst du vor'],
          ['Er wurde gestern Abend aufgenommen, weil er schlecht Luft bekam.', 'Aufnahme gestern Abend bei Luftnot'],
          ['Wir haben ihm Furosemid gegeben, danach ging die Schwellung zurück.', 'Unter Gabe von Furosemid Rückgang der Schwellung'],
          ['Das Röntgenbild zeigt, dass sich das Blut staut.', 'Im Röntgenbild Zeichen der Stauung'],
          ['Er hat über Nacht zwei Liter ausgeschieden.', 'Ausscheidung von zwei Litern über Nacht'],
          ['Wir wissen schon, dass er Diabetes hat.', 'Bekannter Diabetes mellitus Typ 2'],
          ['Es ist besser geworden, seit er die Tabletten nimmt.', 'Besserung unter der Medikation']
        ],
        note: 'Drei Bauteile reichen dir für fast alles: <b>bei</b> + Grund (bei Luftnot), <b>unter</b> + Therapie (unter Gabe von …), <b>im/laborchemisch</b> + Befund (im Röntgenbild …). Und die wichtigste Regel: Nominalstil gilt <b>nur im Team</b>. Am Patientenbett schaltest du zurück in ganze Sätze.'
      },
      {
        h: 'Die fünf Schritte — und niemand unterbricht dich',
        txt: 'Unterbrochen wirst du, wenn die Reihenfolge nicht stimmt. Halte diese fünf Schritte ein, dann bekommt der Oberarzt jede Information genau dann, wenn er sie erwartet:',
        table: [
          ['Schritt', 'Inhalt', 'Beispiel'],
          ['1. Wer und warum', 'Name, Alter, Aufnahmezeitpunkt, Aufnahmegrund', 'Herr Diallo, 62, Aufnahme gestern Abend bei Luftnot.'],
          ['2. Vorgeschichte', 'Vorerkrankungen, Dauermedikation, Risikofaktoren', 'Bekannte Herzschwäche, Bluthochdruck, Diabetes Typ 2.'],
          ['3. Befunde', 'Untersuchung, Labor, Bildgebung — nur das Auffällige', 'Sättigung 88 Prozent, im Röntgenbild Zeichen der Stauung.'],
          ['4. Verlauf', 'Was hast du gemacht, was ist daraufhin passiert?', 'Unter Furosemid Ausscheidung von zwei Litern, Rückgang der Schwellung.'],
          ['5. Einschätzung', 'Verdachtsdiagnose und dein Vorschlag', 'Verdacht auf kardiale Dekompensation. Ich würde die Entwässerung fortführen.']
        ],
        note: 'Schritt 5 ist der, an dem Berufsanfänger scheitern: Sie berichten und hören dann auf. Erwartet wird aber eine <b>Meinung</b> — „Ich würde …", „Mein Vorschlag wäre …", „Zur Sicherung würde ich … anmelden." Lieber ein falscher Vorschlag als gar keiner.'
      },
      {
        h: 'Zwei Minuten später: dasselbe für den Patienten',
        txt: 'Direkt nach der Besprechung stehst du am Bett — und musst dieselbe Sache ohne ein einziges Fachwort sagen. Übersetze nicht wörtlich, sondern erklär die Funktion:',
        table: [
          ['Fachbegriff', 'So erklärst du es dem Patienten'],
          ['kardiale Dekompensation', 'Das Herz schafft es gerade nicht, das Blut kräftig genug weiterzupumpen.'],
          ['Ödeme', 'Wasser, das sich im Gewebe sammelt — deshalb sind die Beine dick.'],
          ['Echokardiografie', 'Ein Ultraschall vom Herzen. Das tut nicht weh und dauert zwanzig Minuten.'],
          ['benigne / maligne', 'gutartig — also harmlos / bösartig — also eine Krebserkrankung'],
          ['das Rezidiv', 'Die Erkrankung ist an derselben Stelle wiedergekommen.'],
          ['die Punktion', 'Wir stechen mit einer dünnen Nadel hinein und entnehmen etwas Flüssigkeit.'],
          ['ambulant / stationär', 'Sie können am selben Tag nach Hause / Sie bleiben über Nacht hier.']
        ],
        note: 'Guter Test: Erklär es so, dass <b>ein Kind von zwölf Jahren</b> es nachsprechen könnte. Und immer nur <b>ein</b> Fachwort pro Satz einführen — dann bleibt es hängen, statt den ganzen Satz unverständlich zu machen.'
      }
    ]
  },
  uebungen: [
    { typ: 'listen', audio: 'Aufnahme gestern Abend über die Notaufnahme bei seit drei Tagen zunehmender Luftnot.', frage: 'Hör zu: Was erfährst du über den Patienten?', optionen: ['Er kam gestern Abend über die Notaufnahme, die Luftnot besteht seit drei Tagen.', 'Er liegt seit drei Tagen hier und bekam gestern Abend Luftnot.', 'Er wurde gestern Abend geplant zur Untersuchung einbestellt.'], richtig: 0 },
    { typ: 'mc', frage: 'Wie klingt „Wir haben ihm ein Entwässerungsmittel gegeben, danach ging die Schwellung zurück" im Nominalstil?', optionen: ['Unter Gabe von Furosemid Rückgang der Schwellung', 'Wir gaben Furosemid und die Schwellung ging zurück', 'Nachdem Furosemid gegeben wurde, ging die Schwellung zurück'], richtig: 0, hinweis: 'Im Nominalstil wird die Therapie mit „unter" angeschlossen und die Folge als Substantiv genannt. Beide anderen Varianten sind korrektes Deutsch, aber Erzählform statt Vorstellungsform.' },
    { typ: 'gapbank', frage: 'Setz die Nominalisierungen ein.', text: 'Bei ___ bestand eine Sättigung von 88 Prozent. Unter ___ von Furosemid kam es zum ___ der Beinschwellung. Zur ___ der Ursache wurde eine Echokardiografie angemeldet.', bank: ['Aufnahme', 'Gabe', 'Rückgang', 'Klärung', 'Anmeldung', 'Verlauf'], loesung: ['Aufnahme', 'Gabe', 'Rückgang', 'Klärung'], hinweis: 'Jede Präposition zieht ein bestimmtes Substantiv an: bei Aufnahme (Zeitpunkt), unter Gabe (Therapie), zum Rückgang (Folge), zur Klärung (Ziel).' },
    { typ: 'order', frage: 'Bau den ersten Satz der Vorstellung im Nominalstil!', woerter: ['Aufnahme', 'gestern', 'Abend', 'bei', 'zunehmender', 'Luftnot'], loesung: 'Aufnahme gestern Abend bei zunehmender Luftnot', hinweis: 'Reihenfolge im Nominalblock: erst das Ereignis, dann die Zeit, dann der Grund mit „bei". Ein Verb steht nirgends.' },
    { typ: 'match', frage: 'Fachbegriff und Patientensprache — was passt zusammen?', paare: [['Ödeme', '💧 Wasser sammelt sich im Gewebe'], ['Echokardiografie', '🫀 Ultraschall vom Herzen'], ['benigne', '🙂 gutartig, also harmlos'], ['das Rezidiv', '🔁 die Erkrankung ist wiedergekommen'], ['ambulant', '🏠 am selben Tag wieder nach Hause']] },
    { typ: 'mc', frage: 'Der Oberarzt fragt: „Und Ihre Einschätzung?" Was erwartet er?', optionen: ['Verdachtsdiagnose plus konkreten Vorschlag zum weiteren Vorgehen', 'eine Wiederholung der wichtigsten Laborwerte', 'die Aussage, dass die Entscheidung bei ihm liegt'], hinweis: 'Schritt 5 der Vorstellung verlangt eine Meinung, keine Zusammenfassung. Ein begründeter Vorschlag ist immer besser als gar keiner — korrigiert wird er notfalls im Team.', richtig: 0 },
    { typ: 'bild', bild: 'th-wissenschaft', frage: 'In welcher Reihenfolge stellst du vor?', optionen: ['Wer und warum → Vorgeschichte → Befunde → Verlauf → Einschätzung', 'Befunde → Wer und warum → Einschätzung → Vorgeschichte → Verlauf', 'Einschätzung → Befunde → Wer und warum → Verlauf → Vorgeschichte', 'Vorgeschichte → Verlauf → Wer und warum → Einschätzung → Befunde'], richtig: 0, hinweis: 'Das Team hört immer nach demselben Muster zu. Wer die Reihenfolge ändert, zwingt alle zum Zurückrechnen — und wird deshalb unterbrochen.' },
    { typ: 'type', frage: 'Erklär „kardiale Dekompensation" einem Patienten ohne jedes Fachwort.', muster: 'Ihr Herz schafft es im Moment nicht, das Blut kräftig genug weiterzupumpen. Deshalb sammelt sich Wasser in den Beinen und in der Lunge.', akzeptiert: ['herz', 'pump', 'wasser'], hinweis: 'Erklär die Funktion, nicht das Wort. Ein Bild aus dem Alltag hilft mehr als jede korrekte Definition — und immer nur ein neuer Begriff pro Satz.' },
    { typ: 'mc', frage: 'Was gehört NICHT in eine Kurzvorstellung von neunzig Sekunden?', optionen: ['Der Patient wohnt allein und mag keinen Krankenhauskaffee.', 'Sättigung bei Aufnahme 88 Prozent unter Raumluft.', 'Bekannte Herzschwäche und Diabetes Typ 2.'], richtig: 0, hinweis: 'In die Vorstellung gehört nur, was die Entscheidung beeinflusst. Soziale Angaben kommen erst dazu, wenn sie für Entlassung oder Versorgung relevant werden.' },
    { typ: 'order', frage: 'Bau deinen Vorschlag zum weiteren Prozedere!', woerter: ['Ich', 'würde', 'die', 'Entwässerung', 'fortführen', 'und', 'eine', 'Echokardiografie', 'anmelden'], loesung: 'Ich würde die Entwässerung fortführen und eine Echokardiografie anmelden', hinweis: 'Bei „würde" stehen beide Infinitive am Ende ihres Teilsatzes. So bleibt der Vorschlag höflich und trotzdem eindeutig.' }
  ],
  zusammenfassung: {
    kernsaetze: [
      'Herr Diallo, 62 Jahre, Aufnahme gestern Abend bei zunehmender Luftnot.',
      'Bekannte Herzschwäche, Bluthochdruck, Diabetes Typ 2.',
      'Im Röntgenbild Zeichen der Stauung, laborchemisch deutlich erhöhtes BNP.',
      'Unter Gabe von Furosemid Ausscheidung von zwei Litern über Nacht.',
      'Verdacht auf kardiale Dekompensation — ich würde die Entwässerung fortführen.'
    ],
    merke: [
      'Nominalstil baust du mit drei Bausteinen: <b>bei</b> + Grund · <b>unter</b> + Therapie · <b>im</b> + Befund. Verb und Artikel fallen weg.',
      'Die fünf Schritte: <b>Wer und warum → Vorgeschichte → Befunde → Verlauf → Einschätzung.</b> Schritt 5 wird erwartet, nicht angeboten.',
      '<b>Nominalstil nur im Team.</b> Am Bett sprichst du in ganzen Sätzen und führst höchstens ein Fachwort pro Satz ein.'
    ],
    tipp: 'Stell dir diese Woche jeden Abend einen einzigen Patienten laut vor — mit Stoppuhr, Ziel neunzig Sekunden. Nimm es auf und hör es einmal ab: Überall dort, wo du „und dann haben wir" sagst, wartet eine Nominalisierung darauf, dir zehn Sekunden zu schenken.'
  },
  sprechen: {
    task: 'Stell einen Patienten in neunzig Sekunden im Nominalstil vor — alle fünf Schritte, mit Einschätzung am Ende. Danach erklärst du demselben Patienten seine Diagnose in drei Sätzen ohne ein einziges Fachwort.',
    tipps: ['… Jahre, Aufnahme … über die Notaufnahme bei …', 'Bekannt sind …', 'Im Röntgenbild … , laborchemisch …', 'Verdacht auf … — ich würde … fortführen und … anmelden.']
  }
};
