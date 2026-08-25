// telc Medizin – Fachsprachprüfung – Lektion 2: Teil 2 — die schriftliche Dokumentation
// deutschoderwas club · Kursmaterial
window.LEKTION = {
  meta: { kurs: 'telc Medizin – Fachsprachprüfung', nr: 2, titel: 'Teil 2 — die schriftliche Dokumentation', level: 'B2–C1', bild: 'th-fachtext', dauer: 'ca. 25 Min' },
  intro: {
    text: 'Zwanzig Minuten, ein leeres Blatt, und alles, was der Patient dir eben erzählt hat, muss in Arztdeutsch darauf. Der häufigste Fehler ist nicht fehlendes Fachvokabular — es ist gesprochene Sprache auf dem Papier. Hier lernst du, wie du aus Sätzen Substantive machst und in welcher Reihenfolge du schreibst, damit dir die Zeit reicht.',
    du_lernst: ['Nominalstil statt wörtlicher Rede', 'die sieben Abschnitte des Arztbriefs', 'was auf keinen Fall in die Anamnese gehört', 'zuerst Überschriften, dann Inhalt']
  },
  dialog: {
    bild: 'th-fachtext',
    situation: 'Prüfungsvorbereitung an der Landesärztekammer. Kursleiterin Dr. Sandberg geht mit Amir Haddad seinen Dokumentationsteil durch — zwanzig Minuten hatte er, gebraucht hat er fünfunddreißig.',
    lines: [
      { sp: 'Dr. Sandberg', txt: 'Inhaltlich ist Ihr Brief vollständig, Herr Haddad. Aber lesen Sie mir bitte Ihren zweiten Satz laut vor.' },
      { sp: 'Amir Haddad', txt: '„Der Patient hat gesagt, dass er seit drei Tagen Schmerzen im Bauch hat."' },
      { sp: 'Dr. Sandberg', txt: 'Und wie steht so ein Satz in einem Arztbrief?' },
      { sp: 'Amir Haddad', txt: 'Der Patient berichtet über seit drei Tagen bestehende Abdominalschmerzen?' },
      { sp: 'Dr. Sandberg', txt: 'Genau so. Nominalstil, keine wörtliche Rede, kein „hat gesagt". Und was steht bei Ihnen unter Anamnese?' },
      { sp: 'Amir Haddad', txt: 'Die Beschwerden — und am Ende habe ich noch meine Verdachtsdiagnose dazugeschrieben.' },
      { sp: 'Dr. Sandberg', txt: 'Und genau das kostet Punkte. Die Anamnese ist Anamnese. Die Verdachtsdiagnose kommt an den Schluss, mit Begründung.' },
      { sp: 'Amir Haddad', txt: 'Ich hatte am Ende noch fünf Minuten und habe alles zusammengezogen. Die Sozialanamnese fehlt deshalb ganz.' },
      { sp: 'Dr. Sandberg', txt: 'Dann machen Sie es nächstes Mal andersherum: erst alle sieben Überschriften aufs Blatt, dann auffüllen. Was leer bleibt, sehen Sie sofort.' }
    ]
  },
  vokabeln: [
    { de: 'der Arztbrief', em: '📄', bsp: 'In Teil 2 schreibst du einen kompletten Aufnahmebefund.' },
    { de: 'der Nominalstil', em: '🧱', bsp: 'Statt „er hat erbrochen": zweimaliges Erbrechen.' },
    { de: 'die Eigenanamnese', em: '🗒️', bsp: 'Was der Patient selbst über sich berichtet.' },
    { de: 'der Patient berichtet über …', em: '✍️', bsp: 'Standardeinleitung des Anamneseteils' },
    { de: 'anamnestisch', em: '🔍', bsp: 'Anamnestisch Fieber in der vergangenen Nacht.' },
    { de: 'die Vorerkrankungen', em: '📁', bsp: 'Diagnosen und Operationen, chronologisch' },
    { de: 'die Dauermedikation', em: '💊', bsp: 'Wirkstoff, Dosis, Einnahmezeitpunkt' },
    { de: 'die Unverträglichkeit', em: '⚠️', bsp: 'Allergien und Unverträglichkeiten getrennt nennen.' },
    { de: 'der Nikotinabusus', em: '🚬', bsp: 'Nikotinabusus seit 20 Jahren, ca. 15 Zigaretten täglich.' },
    { de: 'der Untersuchungsbefund', em: '🩺', bsp: 'Was du selbst gesehen und getastet hast.' },
    { de: 'bei Aufnahme', em: '🏥', bsp: 'Bei Aufnahme wacher, orientierter Patient.' },
    { de: 'die Verdachtsdiagnose', em: '🎯', bsp: 'Ein Satz — mit Begründung.' },
    { de: 'die Differenzialdiagnose', em: '🔀', bsp: 'Zwei bis drei ernsthafte Alternativen.' },
    { de: 'die Epikrise', em: '📑', bsp: 'zusammenfassende Beurteilung am Briefende' },
    { de: 'die Abdominalschmerzen', em: '🫃', bsp: 'Fachwort für Bauchschmerzen' },
    { de: 'die Gliederung', em: '🗂️', bsp: 'Überschriften zuerst — dann füllst du auf.' }
  ],
  grammatik: {
    title: 'Grammatik im Kontext',
    blocks: [
      {
        h: 'Nominalstil — vom Satz zum Substantiv',
        txt: 'Gesprochen wird mit Verben, geschrieben wird mit Substantiven. Der Trick ist immer derselbe: Verb zu Nomen, Zeitangabe nach vorn, Nebensätze auflösen.',
        table: [
          ['So sagt es der Patient', 'So steht es im Brief'],
          ['Ich habe seit drei Tagen Schmerzen im Bauch.', 'seit drei Tagen bestehende Abdominalschmerzen'],
          ['Ich habe gestern zweimal gebrochen.', 'zweimaliges Erbrechen am Vortag'],
          ['Ich rauche seit zwanzig Jahren.', 'Nikotinabusus seit 20 Jahren'],
          ['Meine Mutter ist an Darmkrebs gestorben.', 'Kolonkarzinom der Mutter'],
          ['Wir haben ihm Blut abgenommen.', 'Blutentnahme erfolgt'],
          ['Er kann nachts nicht flach liegen.', 'Orthopnoe']
        ],
        note: 'Faustregel: Wenn im Arztbrief ein „dass" oder ein „hat gesagt" auftaucht, hast du gesprochen statt geschrieben.'
      },
      {
        h: 'Sieben Überschriften — und was jeweils schiefgeht',
        txt: 'Diese Reihenfolge erwartet die Kommission. Schreib sie in den ersten zwei Minuten untereinander aufs Blatt:',
        table: [
          ['Abschnitt', 'Was hineingehört', 'Typischer Fehler'],
          ['Anamnese', 'aktuelle Beschwerden, Verlauf, Begleitsymptome', 'die Diagnose vorwegnehmen'],
          ['Vorerkrankungen', 'Diagnosen, Voroperationen', 'mit den Medikamenten vermischen'],
          ['Medikation und Allergien', 'Wirkstoff, Dosis, Unverträglichkeiten', '„nimmt Tabletten gegen den Blutdruck"'],
          ['Familien- und Sozialanamnese', 'Erkrankungen der Verwandten, Beruf, Noxen', 'aus Zeitmangel ganz weglassen'],
          ['Untersuchungsbefund', 'was du selbst gesehen, gehört, getastet hast', 'nur „unauffällig" schreiben'],
          ['Verdachtsdiagnose', 'ein Satz plus Begründung', 'ohne jede Begründung nennen'],
          ['Differenzialdiagnosen und weiteres Vorgehen', 'zwei bis drei Alternativen, geplante Diagnostik', 'einen Aufsatz schreiben']
        ],
        note: 'Ein unvollständiger Abschnitt kostet weniger Punkte als ein fehlender. Lieber überall drei Zeilen als nirgends zehn.'
      }
    ]
  },
  uebungen: [
    { typ: 'mc', frage: 'Welcher Satz gehört in einen Arztbrief?', optionen: ['Der Patient berichtet über seit drei Tagen bestehende Abdominalschmerzen.', 'Der Patient hat gesagt, dass er seit drei Tagen Schmerzen im Bauch hat.', 'Er hat mir erzählt, sein Bauch tut seit Dienstag weh.'], richtig: 0, hinweis: 'Nominalstil und indirekte Wiedergabe. Wörtliche Rede und „hat gesagt" sind gesprochene Sprache.' },
    { typ: 'listen', audio: 'Bei Aufnahme zeigte sich ein deutlicher Druckschmerz im rechten Unterbauch.', frage: 'Hör zu: Unter welche Überschrift gehört dieser Satz?', optionen: ['Untersuchungsbefund', 'Anamnese', 'Weiteres Vorgehen'], richtig: 0 },
    { typ: 'gapbank', frage: 'Setz die Nominalformen ein.', text: 'seit drei Tagen ___ Abdominalschmerzen, ___ Erbrechen am Vortag, ___ seit 20 Jahren', bank: ['bestehende', 'zweimaliges', 'Nikotinabusus', 'geraucht', 'bestehen'], loesung: ['bestehende', 'zweimaliges', 'Nikotinabusus'], hinweis: 'Partizip I als Attribut (bestehende), Zahladjektiv statt Verb (zweimaliges), Substantiv statt Tätigkeit (Nikotinabusus).' },
    { typ: 'order', frage: 'Bau die Standardeinleitung des Anamneseteils!', woerter: ['berichtet', 'Patient', 'über', 'Der', 'Beschwerden', 'zunehmende'], loesung: 'Der Patient berichtet über zunehmende Beschwerden', hinweis: 'berichten über + Akkusativ. Das Adjektivattribut steht vor dem Nomen.' },
    { typ: 'match', frage: 'Welche Angabe gehört unter welche Überschrift?', paare: [['seit gestern Übelkeit und Erbrechen', '🗒️ Anamnese'], ['Cholezystektomie 2019', '📁 Vorerkrankungen'], ['Ramipril 5 mg morgens', '💊 Medikation'], ['Vater mit Herzinfarkt mit 52 Jahren', '👨‍👩‍👦 Familienanamnese'], ['Abdomensonografie geplant', '🔀 Weiteres Vorgehen']] },
    { typ: 'mc', frage: 'Nach zwölf Minuten hast du erst die Anamnese fertig. Was tust du?', optionen: ['Alle restlichen Überschriften hinschreiben und stichwortartig füllen.', 'Die Anamnese noch schöner ausformulieren.', 'Den Rest weglassen und den Brief sauber abschließen.'], richtig: 0, hinweis: 'Bewertet wird die Vollständigkeit der Gliederung. Ein knapper Abschnitt bringt Punkte, ein fehlender bringt null.' },
    { typ: 'bild', bild: 'th-fachtext', frage: 'Wohin gehört die Verdachtsdiagnose?', optionen: ['ans Ende, mit Begründung', 'in den ersten Satz der Anamnese', 'gar nicht in den Brief'], richtig: 0, hinweis: 'Erst die Fakten, dann die Bewertung. Wer die Diagnose vorwegnimmt, verrät, dass er nicht sauber trennt.' },
    { typ: 'type', frage: 'Schreib fachsprachlich: Der Patient sagt, er habe letzte Nacht Fieber gehabt und stark geschwitzt.', muster: 'Anamnestisch Fieber und ausgeprägtes Schwitzen in der vergangenen Nacht.', akzeptiert: ['anamnestisch', 'fieber', 'nachtschweiß'], hinweis: 'Mit „anamnestisch" kennzeichnest du in einem Wort, dass die Angabe vom Patienten stammt und nicht von dir gemessen wurde.' },
    { typ: 'mc', frage: 'Was ist an „Der Patient nimmt Tabletten gegen den Blutdruck" falsch?', optionen: ['Es fehlen Wirkstoff und Dosis.', 'Blutdruck ist kein Fachwort.', 'Der Satz gehört in die Familienanamnese.'], richtig: 0, hinweis: 'Die Medikation braucht immer Wirkstoff, Dosis und Einnahmezeitpunkt — sonst ist sie klinisch wertlos.' },
    { typ: 'gapbank', frage: 'Vervollständige die Verdachtsdiagnose mit Begründung.', text: '___ handelt es sich um eine akute Appendizitis. ___ sprechen der Druckschmerz im rechten Unterbauch und die erhöhte Temperatur. ___ spricht das Fehlen von Erbrechen.', bank: ['Am ehesten', 'Dafür', 'Dagegen', 'Deshalb', 'Trotzdem'], loesung: ['Am ehesten', 'Dafür', 'Dagegen'], hinweis: 'Dafür spricht … / Dagegen spricht … ist die feste Begründungsformel. Ohne sie bleibt die Verdachtsdiagnose eine Behauptung.' }
  ],
  zusammenfassung: {
    kernsaetze: [
      'Der Patient berichtet über seit drei Tagen bestehende Abdominalschmerzen.',
      'Anamnestisch Fieber in der vergangenen Nacht.',
      'Bei Aufnahme wacher, allseits orientierter Patient in reduziertem Allgemeinzustand.',
      'Am ehesten handelt es sich um … Dafür spricht …, dagegen spricht …',
      'Differenzialdiagnostisch kommen … in Betracht.'
    ],
    merke: [
      '<b>Nominalstil</b>: Verb wird Nomen, Zeitangabe nach vorn — <b>zweimaliges Erbrechen am Vortag</b>.',
      'Kein <b>„hat gesagt", kein „dass"</b> im Arztbrief. Was der Patient angibt, heißt <b>anamnestisch</b>.',
      'Erst die <b>sieben Überschriften</b> aufs Blatt, dann auffüllen. Vollständigkeit schlägt Schönheit.'
    ],
    tipp: 'Nimm dir diese Woche jeden Tag eine Anamnese aus einer Serie, einem Podcast oder aus deinem eigenen Dienst und schreib sie in genau zwanzig Minuten mit Stoppuhr auf Papier. Danach streichst du jedes Verb an, das ein Substantiv sein könnte. Nach fünf Tagen schreibst du automatisch im Nominalstil.'
  },
  sprechen: {
    task: 'Lies deinen letzten geschriebenen Aufnahmebefund laut vor und formuliere dabei jeden gesprochenen Satz sofort in den Nominalstil um. Sprich beide Fassungen nacheinander — erst die Patientenversion, dann die Briefversion.',
    tipps: ['Der Patient berichtet über …', 'Anamnestisch bestehen seit … Beschwerden.', 'Bei Aufnahme zeigte sich …', 'Am ehesten handelt es sich um …']
  }
};
