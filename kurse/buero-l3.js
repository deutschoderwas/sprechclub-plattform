// Deutsch für Büro & Logistik – Lektion 3: Im Meeting das Wort ergreifen
// deutschoderwas club · Kursmaterial
window.LEKTION = {
  meta: { kurs: 'Deutsch für Büro & Logistik', nr: 3, titel: 'Im Meeting das Wort ergreifen', level: 'A2–B2', bild: 'th-arbeit', dauer: 'ca. 18 Min' },
  intro: {
    text: 'In Besprechungen reden oft die Schnellsten, nicht die mit den besten Argumenten. Wer wartet, bis die Pause groß genug ist, kommt nie dran. Hier lernst du die kurzen Formeln, mit denen du dir das Wort holst, und die Konnektoren, mit denen dein Einwand sitzt statt zu verpuffen.',
    du_lernst: ['Sich ins Gespräch einhaken', 'Zustimmen mit Substanz', 'Widersprechen, ohne zu verletzen', 'Konnektoren: allerdings, zumal, dennoch']
  },
  dialog: {
    bild: 'th-arbeit',
    situation: 'Wochenmeeting der Disposition bei Nordfracht. Teamleiterin Frau Berger will die Tourenplanung auf ein neues System umstellen — acht Minuten sind noch übrig.',
    lines: [
      { sp: 'Frau Berger', txt: 'Letzter Punkt, wir haben noch acht Minuten: Ab Mai planen wir die Touren im neuen System. Fragen?' },
      { sp: 'Sofia', txt: 'Ich finde das gut. Die Doppelerfassung fällt endlich weg, das spart uns jeden Morgen eine halbe Stunde.' },
      { sp: 'Mehmet', txt: 'Da würde ich gern kurz einhaken —' },
      { sp: 'Sofia', txt: 'Moment, ich war noch nicht fertig.' },
      { sp: 'Mehmet', txt: 'Entschuldigung, bitte.' },
      { sp: 'Sofia', txt: 'Ich wollte nur sagen: weniger Tippen heißt auch weniger Tippfehler.' },
      { sp: 'Mehmet', txt: 'Genau da liegt mein Punkt. Grundsätzlich stimme ich zu, allerdings haben wir im April die Inventur. Wenn beides zusammenfällt, macht niemand mehr die Übergabe sauber.' },
      { sp: 'Frau Berger', txt: 'Verstehe. Was schlagen Sie vor?' },
      { sp: 'Mehmet', txt: 'Start erst im Juni, zumal die Schulungen noch gar nicht terminiert sind.' },
      { sp: 'Frau Berger', txt: 'Guter Einwand. Wir ziehen das auf Juni. Sofia, hältst du das bitte im Protokoll fest?' }
    ]
  },
  vokabeln: [
    { de: 'einhaken', em: '🖐', bsp: 'Da würde ich gern kurz einhaken.' },
    { de: 'das Wort ergreifen', em: '🗣', bsp: 'Er ergreift selten das Wort.' },
    { de: 'Darf ich dazu kurz etwas sagen?', em: '✋', bsp: 'weiche Formel, um dranzukommen' },
    { de: 'Ich war noch nicht fertig.', em: '⏸', bsp: 'freundlich, aber klar gegen Unterbrechungen' },
    { de: 'Grundsätzlich stimme ich zu, allerdings …', em: '⚖️', bsp: 'zustimmen und dann einschränken' },
    { de: 'der Einwand', em: '💡', bsp: 'Guter Einwand — das prüfen wir.' },
    { de: 'Genau da liegt mein Punkt.', em: '🎯', bsp: 'an das Gesagte anknüpfen' },
    { de: 'Was schlagen Sie vor?', em: '🧭', bsp: 'vom Problem zur Lösung führen' },
    { de: 'Ich sehe das anders, weil …', em: '🙅', bsp: 'begründeter Widerspruch' },
    { de: 'Habe ich das richtig verstanden, dass …?', em: '🔍', bsp: 'absichern statt raten' },
    { de: 'auf den Punkt kommen', em: '⏱', bsp: 'Ich komme gleich auf den Punkt.' },
    { de: 'das Protokoll', em: '📝', bsp: 'etwas im Protokoll festhalten' },
    { de: 'terminieren', em: '📅', bsp: 'Die Schulungen sind noch nicht terminiert.' },
    { de: 'zusammenfallen', em: '🔀', bsp: 'Die Umstellung fällt mit der Inventur zusammen.' },
    { de: 'vertagen', em: '⏭', bsp: 'Lass uns den Punkt vertagen.' },
    { de: 'aufgreifen', em: '🔁', bsp: 'Das würde ich gern noch einmal aufgreifen.' }
  ],
  grammatik: {
    title: 'Grammatik im Berufskontext',
    blocks: [
      {
        h: 'Konnektoren der Argumentation',
        txt: 'Fünf Wörter reichen, um ein Argument zu bauen. Entscheidend ist, welches Signal sie senden und wo danach das Verb steht.',
        table: [
          ['Konnektor', 'Signal', 'Beispiel'],
          ['deshalb', 'Folge', 'Die Schulungen fehlen, deshalb starten wir später.'],
          ['allerdings', 'Einschränkung nach Zustimmung', 'Grundsätzlich ja, allerdings haben wir im April die Inventur.'],
          ['dennoch', 'Gegensatz trotz Zugeständnis', 'Das System kostet Zeit. Dennoch lohnt sich die Umstellung.'],
          ['insofern', 'Bezug auf das Gesagte', 'Insofern brauchen wir vier Wochen mehr.'],
          ['zumal', 'zusätzliches, stärkstes Argument', 'Start im Juni, zumal die Schulungen noch fehlen.']
        ],
        note: 'Nach deshalb, allerdings, dennoch und insofern kommt sofort das Verb: „allerdings haben wir …". Zumal leitet dagegen einen Nebensatz ein — dort wandert das Verb ans Ende.'
      },
      {
        h: 'Zustimmen, widersprechen, nachfragen — die Leiter',
        txt: 'Für jede Absicht gibt es eine weiche und eine klare Variante. Wähle die Stufe nach Situation und Hierarchie:',
        table: [
          ['Absicht', 'Weich', 'Klar'],
          ['zustimmen', 'Da bin ich ganz bei Ihnen.', 'Genau so sehe ich das auch.'],
          ['einschränken', 'Im Prinzip ja, allerdings …', 'Das gilt nur, wenn …'],
          ['widersprechen', 'Ich bin mir da nicht ganz sicher.', 'Ich sehe das anders, weil …'],
          ['nachfragen', 'Habe ich das richtig verstanden, dass …?', 'Was genau meinen Sie mit …?'],
          ['das Wort holen', 'Darf ich dazu kurz etwas sagen?', 'Da würde ich gern einhaken.']
        ],
        note: 'Widersprich nie ohne Zustimmung davor. „Grundsätzlich stimme ich zu, allerdings …" öffnet Türen — „Nein, das stimmt nicht" schließt sie.'
      }
    ]
  },
  uebungen: [
    { typ: 'listen', audio: 'Grundsätzlich stimme ich zu, allerdings haben wir im April die Inventur.', frage: 'Hör zu: Wie steht der Sprecher zum Vorschlag?', optionen: ['Er stimmt zu, sieht aber ein Problem beim Zeitpunkt.', 'Er lehnt den Vorschlag komplett ab.', 'Er hat den Vorschlag nicht verstanden.'], richtig: 0, hinweis: 'Zustimmung plus „allerdings" heißt: Sache gut, Rahmen schwierig.' },
    { typ: 'mc', frage: 'Jemand redet seit vier Minuten und du musst dringend dazu. Was sagst du?', optionen: ['Da würde ich gern kurz einhaken.', 'Jetzt bin ich mal dran.', 'Nichts, ich warte einfach ab.'], richtig: 0, hinweis: 'Einhaken ist im Meeting erlaubt — es braucht nur eine feste Formel.' },
    { typ: 'mc', frage: 'Welcher Satz widerspricht, ohne den anderen vor den Kopf zu stoßen?', optionen: ['Ich sehe das anders, weil die Schulungen noch fehlen.', 'Das ist doch Quatsch.', 'Nein.'], richtig: 0, hinweis: 'Widerspruch braucht immer eine Begründung mit „weil".'},
    { typ: 'gapbank', frage: 'Setz die Konnektoren ein.', text: 'Im Prinzip stimme ich zu, ___ fällt der Start mit der Inventur zusammen. Wir gehen auf Juni, ___ die Schulungen noch nicht terminiert sind.', bank: ['allerdings', 'zumal', 'deshalb', 'trotzdem'], loesung: ['allerdings', 'zumal'], hinweis: 'allerdings = Einschränkung, Verb folgt sofort · zumal = zusätzlicher Grund im Nebensatz, Verb ans Ende.' },
    { typ: 'order', frage: 'Bau die Formel zum Einhaken!', woerter: ['würde', 'kurz', 'Da', 'einhaken', 'ich', 'gern'], loesung: 'Da würde ich gern kurz einhaken', hinweis: 'Position 1 ist besetzt, also folgt das konjugierte Verb — der Infinitiv steht am Ende.' },
    { typ: 'match', frage: 'Redemittel und Funktion — was gehört zusammen?', paare: [['Ich war noch nicht fertig.', '⏸ eine Unterbrechung abwehren'], ['Habe ich das richtig verstanden, dass …?', '🔍 nachfragen und absichern'], ['Genau da liegt mein Punkt.', '🎯 an das Gesagte anknüpfen'], ['Lass uns das vertagen.', '⏭ auf einen späteren Termin schieben'], ['Was schlagen Sie vor?', '🧭 zur Lösung führen']] },
    { typ: 'bild', bild: 'th-arbeit', frage: 'Das Meeting hat noch drei Minuten und dein Thema kam nicht dran. Was sagst du?', optionen: ['Können wir das nächste Woche als ersten Punkt aufgreifen?', 'Ich habe auch noch was, aber egal.', 'Nichts — ich schreibe später eine Mail.'], richtig: 0, hinweis: 'Wer gleich den nächsten Termin nennt, verliert sein Thema nicht.' },
    { typ: 'mc', frage: 'Was muss zwingend ins Protokoll?', optionen: ['Entscheidung, verantwortliche Person und Termin', 'der komplette Diskussionsverlauf', 'die Stimmung im Team'], richtig: 0, hinweis: 'Ein Protokoll beantwortet drei Fragen: Was wurde entschieden, wer macht es, bis wann.' },
    { typ: 'type', frage: 'Widersprich höflich: Der Vorschlag ist gut, aber der Termin im April passt nicht.', muster: 'Grundsätzlich stimme ich zu, allerdings passt der April terminlich nicht.', akzeptiert: ['grundsätzlich', 'im prinzip', 'allerdings', 'ich sehe das anders'], hinweis: 'Erst Zustimmung, dann Einschränkung — und nach „allerdings" steht sofort das Verb.' }
  ],
  zusammenfassung: {
    kernsaetze: [
      'Da würde ich gern kurz einhaken.',
      'Grundsätzlich stimme ich zu, allerdings …',
      'Habe ich das richtig verstanden, dass …?',
      'Ich sehe das anders, weil …',
      'Was schlagen Sie vor? — Können wir das nächste Woche aufgreifen?'
    ],
    merke: [
      'Nach <b>allerdings, deshalb, dennoch, insofern</b> steht sofort das <b>Verb</b>.',
      '<b>Zumal</b> leitet einen Nebensatz ein — Verb ans <b>Ende</b>.',
      'Widerspruch immer <b>zweiteilig</b>: erst zustimmen, dann einschränken.'
    ],
    tipp: 'Nimm dir für das nächste Meeting genau einen Satz vor: „Da würde ich gern kurz einhaken." Sag ihn einmal, egal wie klein dein Beitrag ist. Nach drei Meetings kommt er von allein — und danach ist die Hürde weg.'
  },
  sprechen: {
    task: 'Spiel eine Meeting-Runde durch: Stimme einem Vorschlag zu, hake dich dann ein, nenne einen Einwand mit „allerdings" und schlage eine konkrete Lösung vor.',
    tipps: ['Da bin ich ganz bei Ihnen — allerdings …', 'Da würde ich gern kurz einhaken.', 'Habe ich das richtig verstanden, dass …?', 'Mein Vorschlag wäre: … , zumal …']
  }
};
