// Deutsch für Mediziner – Lektion 1: Die Anamnese
window.LEKTION = {
  meta: { kurs: 'Deutsch für Mediziner', nr: 1, titel: 'Die Anamnese – das Erstgespräch', level: 'B2–C1', bild: 'medizin-l1', dauer: 'ca. 20 Min' },
  intro: {
    text: 'Die Anamnese entscheidet über alles Weitere. Du musst offene Fragen stellen, aktiv zuhören und die Beschwerden des Patienten in Fachsprache übersetzen — genau das trainiert diese Lektion, so wie es auch in der Fachsprachprüfung verlangt wird.',
    du_lernst: ['Anamnese strukturiert führen', 'Laiensprache → Fachsprache', 'Schmerzen erfragen', 'Konjunktiv II für höfliche Fragen']
  },
  dialog: {
    bild: 'medizin-l1',
    situation: 'Notaufnahme. Dr. Bauer nimmt einen Patienten mit Brustschmerzen auf.',
    lines: [
      { sp: 'Dr. Bauer', txt: 'Guten Tag, Herr Möller. Was führt Sie heute zu uns?' },
      { sp: 'Herr Möller', txt: 'Ich habe seit gestern so ein Drücken auf der Brust. Und mir ist ganz komisch.' },
      { sp: 'Dr. Bauer', txt: 'Können Sie mir den Schmerz genauer beschreiben? Eher stechend oder dumpf?' },
      { sp: 'Herr Möller', txt: 'Dumpf, wie ein schweres Gewicht. Und es zieht in den linken Arm.' },
      { sp: 'Dr. Bauer', txt: 'Seit wann genau haben Sie diese Beschwerden?' },
      { sp: 'Herr Möller', txt: 'Seit gestern Abend, nach dem Essen. Es kommt und geht.' },
      { sp: 'Dr. Bauer', txt: 'Wird es bei Belastung stärker? Zum Beispiel beim Treppensteigen?' },
      { sp: 'Herr Möller', txt: 'Ja, genau. Beim Treppensteigen wird es schlimmer.' },
      { sp: 'Dr. Bauer', txt: 'Nehmen Sie regelmäßig Medikamente ein? Und sind Vorerkrankungen bekannt?' },
      { sp: 'Herr Möller', txt: 'Ich nehme Tabletten gegen hohen Blutdruck. Sonst nichts.' }
    ]
  },
  vokabeln: [
    { de: 'Was führt Sie zu uns?', em: '🩺', bsp: 'Offene Eingangsfrage' },
    { de: 'die Beschwerden', em: '😖', bsp: 'Seit wann haben Sie diese Beschwerden?' },
    { de: 'stechend / dumpf', em: '⚡', bsp: 'Ist der Schmerz stechend oder dumpf?' },
    { de: 'ausstrahlen', em: '↗️', bsp: 'Der Schmerz strahlt in den linken Arm aus.' },
    { de: 'bei Belastung', em: '🏃', bsp: 'Wird es bei Belastung stärker?' },
    { de: 'die Vorerkrankungen', em: '📁', bsp: 'Sind Vorerkrankungen bekannt?' },
    { de: 'die Medikation', em: '💊', bsp: 'Nehmen Sie Medikamente ein?' },
    { de: 'die Thoraxschmerzen', em: '🫀', bsp: 'Fachwort für Brustschmerzen' },
    { de: 'die Dyspnoe', em: '🫁', bsp: 'Fachwort für Atemnot' },
    { de: 'die Hypertonie', em: '📈', bsp: 'Fachwort für Bluthochdruck' },
    { de: 'die Übelkeit', em: '🤢', bsp: 'Ist Ihnen übel?' },
    { de: 'Könnten Sie … beschreiben?', em: '💬', bsp: 'höfliche Bitte (Konjunktiv II)' },
    { de: 'intermittierend', em: '🔁', bsp: 'Fachwort für „kommt und geht"' }
  ],
  grammatik: {
    title: 'Sprache im ärztlichen Gespräch',
    blocks: [
      {
        h: 'Laiensprache → Fachsprache',
        txt: 'Der Patient spricht Alltagssprache. Du dokumentierst in Fachsprache. Diese Übersetzung wird in der FSP geprüft:',
        table: [
          ['Patient sagt', 'Du dokumentierst'],
          ['Drücken auf der Brust', 'Thoraxschmerz, dumpf'],
          ['Es zieht in den linken Arm.', 'Ausstrahlung in den linken Arm'],
          ['Mir ist komisch / schlecht.', 'Übelkeit, vegetative Begleitsymptomatik'],
          ['Ich krieg schlecht Luft.', 'Dyspnoe'],
          ['Tabletten gegen hohen Blutdruck', 'antihypertensive Medikation bei Hypertonie'],
          ['Es kommt und geht.', 'intermittierend']
        ],
        note: 'Im Gespräch mit dem Patienten benutzt du die einfache Sprache — im Arztbrief die Fachsprache. Beides musst du beherrschen.'
      },
      {
        h: 'Konjunktiv II – höflich fragen',
        txt: 'Höflichkeit schafft Vertrauen. Mit Konjunktiv II klingt jede Frage weicher:',
        table: [
          ['Direkt', 'Höflich (Konjunktiv II)'],
          ['Beschreiben Sie den Schmerz.', 'Könnten Sie den Schmerz beschreiben?'],
          ['Ich will Sie untersuchen.', 'Ich würde Sie gern untersuchen.'],
          ['Machen Sie den Oberkörper frei.', 'Würden Sie bitte den Oberkörper frei machen?']
        ],
        note: 'könnte · würde · dürfte — drei Wörter, die dein Deutsch sofort professionell klingen lassen.'
      },
      {
        h: 'Die 7 W-Fragen des Schmerzes',
        txt: 'Ein festes Gerüst, mit dem du nichts vergisst:',
        table: [
          ['Frage', 'Formulierung'],
          ['Wo?', 'Wo genau haben Sie die Schmerzen?'],
          ['Seit wann?', 'Seit wann bestehen die Beschwerden?'],
          ['Wie?', 'Ist der Schmerz stechend, dumpf oder brennend?'],
          ['Wie stark?', 'Auf einer Skala von 1 bis 10?'],
          ['Ausstrahlung?', 'Strahlt der Schmerz irgendwohin aus?'],
          ['Auslöser?', 'Wird es bei Belastung stärker?'],
          ['Begleitsymptome?', 'Haben Sie auch Übelkeit oder Atemnot?']
        ],
        note: 'Diese sieben Fragen deckst du in jeder Anamnese ab — dann ist deine Dokumentation vollständig.'
      }
    ]
  },
  uebungen: [
    { typ: 'listen', audio: 'Der Schmerz ist dumpf und strahlt in den linken Arm aus.', frage: 'Hör zu: Wie wird der Schmerz beschrieben?', optionen: ['dumpf, mit Ausstrahlung in den linken Arm', 'stechend, ohne Ausstrahlung', 'brennend, im rechten Arm'], richtig: 0 },
    { typ: 'mc', frage: 'Der Patient sagt: „Ich krieg schlecht Luft." Wie dokumentierst du das?', optionen: ['Dyspnoe', 'Hypertonie', 'Vertigo'], richtig: 0, hinweis: 'Dyspnoe = Atemnot' },
    { typ: 'mc', frage: 'Welche Eingangsfrage ist am besten (offen, nicht suggestiv)?', optionen: ['Was führt Sie heute zu uns?', 'Haben Sie Brustschmerzen?', 'Sie haben sicher Herzprobleme, oder?'], richtig: 0, hinweis: 'Offene Fragen zuerst — sie liefern die meisten Informationen.' },
    { typ: 'match', frage: 'Laiensprache ↔ Fachsprache — was passt?', paare: [['Drücken auf der Brust', '🫀 Thoraxschmerz'], ['Es kommt und geht.', '🔁 intermittierend'], ['Tabletten gegen hohen Blutdruck', '📈 antihypertensive Medikation'], ['Mir ist schlecht.', '🤢 Übelkeit']] },
    { typ: 'gapbank', frage: 'Mach die Fragen höflich (Konjunktiv II).', text: '___ Sie den Schmerz genauer beschreiben? Ich ___ Sie jetzt gern untersuchen.', bank: ['Könnten', 'würde', 'Können'], loesung: ['Könnten', 'würde'], hinweis: 'könnten (Frage) · würde gern (Absicht)' },
    { typ: 'order', frage: 'Bau die Anamnesefrage!', woerter: ['bestehen', 'wann', 'Seit', 'Beschwerden', 'die'], loesung: 'Seit wann bestehen die Beschwerden', hinweis: 'Seit wann + Verb + Subjekt.' },
    { typ: 'mc', frage: 'Was fehlt noch in dieser Anamnese: Ort, Zeit, Charakter, Stärke, Ausstrahlung, Auslöser — und …?', optionen: ['Begleitsymptome', 'Adresse des Patienten', 'Beruf des Patienten'], richtig: 0, hinweis: 'Die 7. W-Frage: Übelkeit, Atemnot, Schwitzen?' },
    { typ: 'type', frage: 'Formuliere höflich: Du möchtest, dass der Patient den Oberkörper frei macht.', muster: 'Würden Sie bitte den Oberkörper frei machen?', akzeptiert: ['würden sie', 'könnten sie', 'dürfte ich'], hinweis: 'Beginne mit „Würden Sie bitte …" oder „Könnten Sie bitte …"' }
  ],
  zusammenfassung: {
    kernsaetze: [
      'Was führt Sie heute zu uns?',
      'Könnten Sie den Schmerz genauer beschreiben?',
      'Seit wann bestehen die Beschwerden?',
      'Strahlt der Schmerz irgendwohin aus?',
      'Wird es bei Belastung stärker?',
      'Sind Vorerkrankungen bekannt? Nehmen Sie Medikamente ein?'
    ],
    merke: [
      'Die <b>7 W-Fragen</b>: Wo? Seit wann? Wie? Wie stark? Ausstrahlung? Auslöser? Begleitsymptome?',
      '<b>Konjunktiv II</b> = Professionalität: <b>könnten</b> · <b>würde</b> · <b>dürfte</b>.',
      'Übersetzen: Drücken auf der Brust → <b>Thoraxschmerz</b> · schlecht Luft → <b>Dyspnoe</b> · kommt und geht → <b>intermittierend</b>.'
    ],
    tipp: 'Übe die 7 W-Fragen so lange, bis sie automatisch kommen. In der Fachsprachprüfung zählt nicht, ob du jedes Fachwort kennst — sondern ob deine Anamnese vollständig und strukturiert ist.'
  },
  sprechen: {
    task: 'Führe eine vollständige Anamnese: Stell die 7 W-Fragen zu einem Patienten mit Bauchschmerzen — laut und in ganzen Sätzen.',
    tipps: ['Was führt Sie heute zu uns?', 'Könnten Sie den Schmerz genauer beschreiben?', 'Seit wann bestehen die Beschwerden?', 'Strahlt der Schmerz irgendwohin aus?', 'Sind Vorerkrankungen bekannt?']
  }
};
