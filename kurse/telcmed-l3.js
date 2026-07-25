// telc Medizin – Fachsprachprüfung – Lektion 3: Teil 3 — das Arzt-Arzt-Gespräch
// deutschoderwas club · Kursmaterial
window.LEKTION = {
  meta: { kurs: 'telc Medizin – Fachsprachprüfung', nr: 3, titel: 'Teil 3 — das Arzt-Arzt-Gespräch', level: 'B2–C1', bild: 'th-arbeit', dauer: 'ca. 25 Min' },
  intro: {
    text: 'In Teil 3 sitzt dir kein Patient gegenüber, sondern eine Kollegin — und die unterbricht. Du stellst deinen Fall in fünf Zügen vor, wirst nach zwei Sätzen gestoppt, beantwortest die Zwischenfrage und findest zurück in deine Struktur. Genau das übst du hier, inklusive der Sätze für den Moment, in dem du etwas vergessen hast.',
    du_lernst: ['Fallvorstellung in fünf Zügen', 'erweiterte Attribute statt Nebensätze', 'Zwischenfragen abfangen und weitermachen', 'Vorgehen vorschlagen statt aufzählen']
  },
  dialog: {
    bild: 'th-arbeit',
    situation: 'Fachsprachprüfung, Teil 3. Dr. Oyelaran stellt der Prüferin Dr. Freitag ihren Fall vor. Nach zwei Sätzen kommt die erste Zwischenfrage.',
    lines: [
      { sp: 'Dr. Oyelaran', txt: 'Ich stelle Ihnen Frau Ruzicka vor, 54 Jahre, die sich mit seit drei Tagen bestehenden rechtsseitigen Oberbauchschmerzen vorgestellt hat.' },
      { sp: 'Dr. Freitag', txt: 'Kolikartig oder dauerhaft?' },
      { sp: 'Dr. Oyelaran', txt: 'Kolikartig, postprandial verstärkt, mit Ausstrahlung in die rechte Schulter.' },
      { sp: 'Dr. Freitag', txt: 'Gut. Und Ihre Verdachtsdiagnose?' },
      { sp: 'Dr. Oyelaran', txt: 'Am ehesten dürfte eine Cholezystolithiasis mit beginnender Cholezystitis vorliegen. Dafür sprechen der Schmerzcharakter, das Fieber und —' },
      { sp: 'Dr. Freitag', txt: 'Moment. Fieber haben Sie vorhin nicht erwähnt. Wie hoch, seit wann?' },
      { sp: 'Dr. Oyelaran', txt: 'Entschuldigung, das habe ich übersprungen: 38,4 Grad seit gestern Abend, zu Hause gemessen. Darf ich noch den Untersuchungsbefund nachreichen?' },
      { sp: 'Dr. Freitag', txt: 'Bitte. Und dann sagen Sie mir, was Sie vorschlagen.' },
      { sp: 'Dr. Oyelaran', txt: 'Druckschmerz im rechten Oberbauch, Murphy-Zeichen positiv, kein Ikterus. Ich würde zunächst Labor mit Entzündungs- und Cholestaseparametern abnehmen und eine Abdomensonografie veranlassen. Bei Bestätigung dann die chirurgische Vorstellung.' }
    ]
  },
  vokabeln: [
    { de: 'die Fallvorstellung', em: '🗣️', bsp: 'Ich stelle Ihnen Frau … vor, … Jahre alt.' },
    { de: 'kolikartig', em: '🌊', bsp: 'Schmerz in Wellen, an- und abschwellend' },
    { de: 'postprandial', em: '🍽️', bsp: 'nach dem Essen auftretend oder verstärkt' },
    { de: 'die Ausstrahlung', em: '↗️', bsp: 'mit Ausstrahlung in die rechte Schulter' },
    { de: 'das Murphy-Zeichen', em: '👐', bsp: 'Untersuchungszeichen bei Gallenblasenentzündung' },
    { de: 'der Ikterus', em: '💛', bsp: 'Gelbfärbung von Haut und Skleren' },
    { de: 'die Entzündungsparameter', em: '🔥', bsp: 'CRP, Leukozyten' },
    { de: 'die Cholestaseparameter', em: '🧪', bsp: 'Bilirubin, Gamma-GT, alkalische Phosphatase' },
    { de: 'die Abdomensonografie', em: '📡', bsp: 'Ultraschall des Bauchraums' },
    { de: 'das Procedere', em: '➡️', bsp: 'Was als Nächstes geschieht.' },
    { de: 'veranlassen', em: '📋', bsp: 'Ich würde zunächst eine Sonografie veranlassen.' },
    { de: 'Am ehesten dürfte … vorliegen.', em: '🎯', bsp: 'vorsichtig formulierte Verdachtsdiagnose' },
    { de: 'Dafür spricht …', em: '➕', bsp: 'Begründung der Diagnose' },
    { de: 'die Zwischenfrage', em: '✋', bsp: 'Die Prüferin unterbricht — das ist normal.' },
    { de: 'Das habe ich übersprungen.', em: '↩️', bsp: 'Rettungssatz nach einer Lücke' },
    { de: 'Darf ich noch … nachreichen?', em: '📎', bsp: 'zurück in die eigene Struktur' }
  ],
  grammatik: {
    title: 'Grammatik im Kontext',
    blocks: [
      {
        h: 'Erweiterte Attribute — der Klang der Fallvorstellung',
        txt: 'Statt eines Relativsatzes packst du die Information vor das Nomen. Das ist dichter, schneller und klingt sofort nach Klinik.',
        table: [
          ['Relativsatz (gesprochen)', 'Erweitertes Attribut (Fallvorstellung)'],
          ['Schmerzen, die seit drei Tagen bestehen', 'seit drei Tagen bestehende Schmerzen'],
          ['ein Befund, der bereits erhoben wurde', 'ein bereits erhobener Befund'],
          ['eine Patientin, die im Rollstuhl sitzt', 'eine im Rollstuhl sitzende Patientin'],
          ['Werte, die deutlich erhöht sind', 'deutlich erhöhte Werte'],
          ['ein Schmerz, der nach dem Essen zunimmt', 'ein postprandial zunehmender Schmerz']
        ],
        note: 'Partizip I (bestehend) heißt aktiv und gleichzeitig. Partizip II (erhoben) heißt passiv und abgeschlossen. Wer das verwechselt, sagt Dinge, die keiner versteht.'
      },
      {
        h: 'Fünf Züge, sechs Minuten',
        txt: 'So läuft die Vorstellung ab, wenn dich niemand unterbricht. Wenn doch: Frage beantworten, dann mit dem nächsten Zug weitermachen.',
        table: [
          ['Zug', 'Redemittel', 'Zeit'],
          ['1. Vorstellung', 'Ich stelle Ihnen Frau … vor, … Jahre alt, die sich mit … vorgestellt hat.', '30 Sek'],
          ['2. Anamnese', 'Anamnestisch berichtet die Patientin über …', '2 Min'],
          ['3. Befund', 'In der körperlichen Untersuchung zeigte sich …', '1 Min'],
          ['4. Verdachtsdiagnose', 'Am ehesten dürfte … vorliegen. Dafür spricht …', '1 Min'],
          ['5. Procedere', 'Ich würde zunächst … veranlassen, bei Bestätigung dann …', '1,5 Min']
        ],
        note: 'Nach jeder Zwischenfrage sagst du einen Satz, der zurückführt: „Um beim Befund zu bleiben …" oder „Darf ich noch das Procedere ergänzen?" So bleibst du sichtbar strukturiert.'
      }
    ]
  },
  uebungen: [
    { typ: 'order', frage: 'Bau den Eröffnungssatz der Fallvorstellung!', woerter: ['Ihnen', 'stelle', 'Ich', 'vor', 'Ruzicka', 'Frau'], loesung: 'Ich stelle Ihnen Frau Ruzicka vor', hinweis: 'Trennbares Verb: vorstellen — das Präfix vor steht am Satzende.' },
    { typ: 'mc', frage: 'Die Prüferin unterbricht dich mitten im Satz. Was ist die beste Reaktion?', optionen: ['Die Frage kurz beantworten und danach zur eigenen Struktur zurückkehren.', 'Den angefangenen Satz erst zu Ende sprechen.', 'Von vorn anfangen, damit nichts fehlt.'], richtig: 0, hinweis: 'Zwischenfragen gehören zur Prüfung. Bewertet wird, ob du reagieren und danach weiterstrukturieren kannst.' },
    { typ: 'gapbank', frage: 'Mach aus den Relativsätzen erweiterte Attribute.', text: 'eine seit drei Tagen ___ Übelkeit, ein bereits ___ Röntgenbild, deutlich ___ Leberwerte', bank: ['bestehende', 'angefertigtes', 'erhöhte', 'bestehend', 'erhöhend'], loesung: ['bestehende', 'angefertigtes', 'erhöhte'], hinweis: 'Partizip I für aktive Gleichzeitigkeit, Partizip II für abgeschlossene Vorgänge. Danach normale Adjektivendung.' },
    { typ: 'match', frage: 'Fachbegriff und Bedeutung — was passt?', paare: [['kolikartig', '🌊 in Wellen an- und abschwellend'], ['postprandial', '🍽️ nach dem Essen'], ['Ikterus', '💛 Gelbfärbung von Haut und Skleren'], ['Cholestaseparameter', '🧪 Bilirubin, Gamma-GT'], ['Procedere', '➡️ das weitere Vorgehen']] },
    { typ: 'listen', audio: 'Am ehesten dürfte eine Cholezystolithiasis mit beginnender Cholezystitis vorliegen.', frage: 'Hör zu: Wie sicher ist sich die Ärztin?', optionen: ['Sie hält es für sehr wahrscheinlich, legt sich aber nicht endgültig fest.', 'Sie ist sich völlig sicher.', 'Sie hält es für unwahrscheinlich.'], richtig: 0 },
    { typ: 'bild', bild: 'th-arbeit', frage: 'Welcher Zug fehlt in dieser Fallvorstellung: Vorstellung, Anamnese, Befund, Procedere?', optionen: ['die Verdachtsdiagnose mit Begründung', 'die Sozialanamnese', 'die Entlassungsplanung'], richtig: 0, hinweis: 'Ohne Verdachtsdiagnose ist es eine Aufzählung, keine Vorstellung. Zwischen Befund und Procedere gehört immer die Bewertung.' },
    { typ: 'mc', frage: 'Du merkst mitten im Satz, dass du das Fieber vergessen hast. Was sagst du?', optionen: ['Entschuldigung, das habe ich übersprungen: 38,4 Grad seit gestern Abend.', 'Nichts — sonst fällt es vielleicht gar nicht auf.', 'Ich fange noch einmal von vorne an.'], richtig: 0, hinweis: 'Eine benannte Lücke ist ein Zeichen von Kontrolle. Eine verschwiegene Lücke ist ein inhaltlicher Fehler.' },
    { typ: 'type', frage: 'Formuliere dein Procedere: Labor mit Entzündungsparametern, danach Ultraschall des Bauchs.', muster: 'Ich würde zunächst ein Labor mit Entzündungsparametern abnehmen und anschließend eine Abdomensonografie veranlassen.', akzeptiert: ['ich würde', 'zunächst', 'veranlassen'], hinweis: 'Konjunktiv II mit „ich würde … veranlassen" macht aus einer Aufzählung einen Vorschlag — genau das erwartet die Kommission von einer Kollegin.' },
    { typ: 'mc', frage: 'Welcher Satz führt nach einer Zwischenfrage sauber zurück in die Struktur?', optionen: ['Um beim Untersuchungsbefund zu bleiben: …', 'Wie gesagt, also, ja …', 'Was wollten Sie noch wissen?'], richtig: 0, hinweis: 'Ein Rückführungssatz macht deine Gliederung hörbar. Ohne ihn wirkt jede Antwort wie ein Abbruch.' }
  ],
  zusammenfassung: {
    kernsaetze: [
      'Ich stelle Ihnen Frau … vor, … Jahre alt, die sich mit … vorgestellt hat.',
      'Anamnestisch berichtet die Patientin über seit … bestehende …',
      'In der körperlichen Untersuchung zeigte sich …',
      'Am ehesten dürfte … vorliegen. Dafür spricht …, dagegen spricht …',
      'Ich würde zunächst … veranlassen, bei Bestätigung dann …'
    ],
    merke: [
      '<b>Fünf Züge</b>: Vorstellung → Anamnese → Befund → Verdachtsdiagnose → Procedere.',
      'Relativsatz wird <b>erweitertes Attribut</b>: <b>seit drei Tagen bestehende</b> Schmerzen.',
      'Nach jeder Zwischenfrage ein <b>Rückführungssatz</b>: „Um beim Befund zu bleiben …"'
    ],
    tipp: 'Bitte jemanden, dir beim Üben zweimal pro Vorstellung ins Wort zu fallen — mit einer beliebigen Frage. Trainiere nicht die perfekte Vorstellung, sondern die unterbrochene. Genau die kommt in der Prüfung.'
  },
  sprechen: {
    task: 'Stell einen Fall aus deinem letzten Dienst in fünf Zügen vor, laut und in maximal sechs Minuten. Nimm dich auf und prüfe danach: Kommt jeder der fünf Züge vor, und ist die Verdachtsdiagnose begründet?',
    tipps: ['Ich stelle Ihnen Herrn … vor, … Jahre alt.', 'In der körperlichen Untersuchung zeigte sich …', 'Am ehesten dürfte … vorliegen.', 'Um beim Befund zu bleiben: …']
  }
};
