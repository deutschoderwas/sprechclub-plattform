// Alltagsdeutsch C1 – Lektion 3: Arbeitswelt im Wandel
// deutschoderwas club · Kursmaterial
window.LEKTION = {
  meta: { kurs: 'Alltagsdeutsch C1', nr: 3, titel: 'Arbeitswelt im Wandel', level: 'C1', bild: 'th-arbeit', dauer: 'ca. 25 Min' },
  intro: {
    text: 'In Betriebsvorlagen steht nie „Wir streichen zwölf Stellen". Da steht „Effizienzsteigerung durch Prozessautomatisierung". Der Nominalstil versteckt, wer handelt — und die Passiversatzformen verstecken, wer entscheidet. Heute lernst du beides in beide Richtungen: dichte Schriftsprache zu erzeugen, wenn sie nötig ist, und sie in klare Sätze zurückzuübersetzen, wenn jemand sich hinter ihr versteckt.',
    du_lernst: ['Nominalstil in Verbalstil übersetzen — und zurück', 'Passiversatz: lässt sich, ist zu tun, -bar', 'Wer handelt hier eigentlich? Verantwortung sichtbar machen', 'Wortschatz Umbau, Qualifizierung, Mitbestimmung']
  },
  dialog: {
    bild: 'th-arbeit',
    situation: 'Betriebsrätin Marta Nowak und Personalleiter Herr Voss gehen die Vorlage zur Einführung eines KI-Assistenzsystems im Kundenservice durch.',
    lines: [
      { sp: 'Herr Voss', txt: 'Ich zitiere aus der Vorlage: „Die Einführung des Assistenzsystems erfolgt zum ersten Oktober unter Beteiligung des Betriebsrats."' },
      { sp: 'Marta', txt: 'Auf Deutsch: Sie führen das System im Oktober ein und fragen uns vorher. Sagen Sie es doch gleich so.' },
      { sp: 'Herr Voss', txt: 'Geschenkt. Also: Wir führen es ein. Die Frage der Qualifizierung ist bis dahin noch zu klären.' },
      { sp: 'Marta', txt: 'Zu klären ist vor allem, wer die Schulungen bezahlt und wann sie stattfinden. In der Freizeit lässt sich das nicht machen, das sage ich Ihnen jetzt schon.' },
      { sp: 'Herr Voss', txt: 'Das lässt sich einrichten, da sehe ich Spielraum. Schwieriger wird die Frage des Stellenabbaus.' },
      { sp: 'Marta', txt: 'Sie meinen: ob Stellen wegfallen. Ungeachtet aller Beteuerungen steht in Ihrer Vorlage „Effizienzsteigerung durch Prozessautomatisierung". Das ist kein neutraler Begriff, das ist eine Ankündigung.' },
      { sp: 'Herr Voss', txt: 'Die Formulierung kommt aus der Zentrale. Schön ist sie nicht, falsch leider auch nicht: Zwölf Arbeitsplätze sind auf Dauer nicht zu halten.' },
      { sp: 'Marta', txt: 'Nicht zu halten heißt, dass Sie sie nicht halten. Zwölf Menschen. Was ist mit Umschulung?' },
      { sp: 'Herr Voss', txt: 'Acht Stellen sind intern besetzbar, sofern die Betroffenen die Qualifizierung mitmachen. Vier bleiben offen. Das kann ich Ihnen heute nicht schönreden.' },
      { sp: 'Marta', txt: 'Danke für den geraden Satz. Dann verhandeln wir über diese vier — und zwar bevor die Vorlage in den Aufsichtsrat geht.' }
    ]
  },
  vokabeln: [
    { de: 'die Vorlage', em: '📄', bsp: 'In der Vorlage steht der genaue Wortlaut.' },
    { de: 'die Qualifizierung', em: '🎓', bsp: 'Wer bezahlt die Qualifizierung der Beschäftigten?' },
    { de: 'die Umschulung', em: '🔄', bsp: 'Umschulung statt Kündigung.' },
    { de: 'der Stellenabbau', em: '📉', bsp: 'Über den Stellenabbau wird noch verhandelt.' },
    { de: 'wegfallen', em: '❌', bsp: 'Zwölf Arbeitsplätze fallen weg.' },
    { de: 'die Effizienzsteigerung', em: '⚙️', bsp: 'Ein Wort, hinter dem oft Personalabbau steht.' },
    { de: 'die Prozessautomatisierung', em: '🤖', bsp: 'Abläufe übernimmt künftig die Software.' },
    { de: 'der Betriebsrat', em: '🧑‍⚖️', bsp: 'Der Betriebsrat hat ein Mitbestimmungsrecht.' },
    { de: 'der Aufsichtsrat', em: '🏢', bsp: 'Die Vorlage geht im November in den Aufsichtsrat.' },
    { de: 'Spielraum sehen', em: '↔️', bsp: 'Bei den Schulungszeiten sehe ich Spielraum.' },
    { de: 'die Beteuerung', em: '🙌', bsp: 'Beteuerungen ersetzen keine Zusage.' },
    { de: 'schönreden', em: '🎭', bsp: 'Das kann ich Ihnen nicht schönreden.' },
    { de: 'besetzbar', em: '🪑', bsp: 'Acht Stellen sind intern besetzbar.' },
    { de: 'auf Dauer', em: '⏳', bsp: 'Auf Dauer ist das nicht zu halten.' },
    { de: 'die Mitbestimmung', em: '✋', bsp: 'Mitbestimmung heißt: mitentscheiden, nicht anhören.' },
    { de: 'der Wortlaut', em: '🔤', bsp: 'Es kommt auf den genauen Wortlaut an.' }
  ],
  grammatik: {
    title: 'Grammatik im Kontext',
    blocks: [
      {
        h: 'Nominalstil und Verbalstil — dieselbe Sache, zwei Wirkungen',
        txt: 'Im Nominalstil steckt die Handlung im Substantiv, das Verb wird blass. Das wirkt sachlich und dicht — und verschweigt oft, wer etwas tut. Im Verbalstil kommt der Handelnde zurück:',
        table: [
          ['Nominalstil (Vorlage, Bericht, Antrag)', 'Verbalstil (Gespräch, Erklärung)', 'Wer handelt?'],
          ['Die Einführung erfolgt zum ersten Oktober.', 'Wir führen das System am ersten Oktober ein.', 'im Nominalstil unsichtbar'],
          ['unter Beteiligung des Betriebsrats', 'wir beteiligen den Betriebsrat / der Betriebsrat wird beteiligt', 'unsichtbar bis unklar'],
          ['nach Prüfung der Unterlagen', 'nachdem wir die Unterlagen geprüft haben', 'Nebensatz mit nachdem'],
          ['bei Nichteinhaltung der Frist', 'wenn die Frist nicht eingehalten wird', 'Nebensatz mit wenn'],
          ['zur Vermeidung von Doppelarbeit', 'damit niemand dieselbe Arbeit zweimal macht', 'Nebensatz mit damit'],
          ['trotz erheblicher Kosten', 'obwohl es erheblich mehr kostet', 'Nebensatz mit obwohl']
        ],
        note: 'Die Präposition verrät den Nebensatz: <b>nach</b> → nachdem · <b>bei</b> → wenn · <b>zur/zwecks</b> → damit oder um … zu · <b>trotz</b> → obwohl · <b>wegen</b> → weil. Und die Gegenprobe im Gespräch lautet immer: <b>Wer macht das?</b>'
      },
      {
        h: 'Passiversatzformen — Passiv ohne Passiv',
        txt: 'Neben „wird gemacht" gibt es vier Formen, die dasselbe leisten. Zwei davon hörst du im Dialog ständig, und sie sind im gesprochenen C1-Deutsch häufiger als das echte Passiv:',
        table: [
          ['Form', 'Bedeutung', 'Beispiel', 'Echtes Passiv'],
          ['sich lassen + Infinitiv', 'kann gemacht werden', 'Das lässt sich einrichten.', 'Das kann eingerichtet werden.'],
          ['sein + zu + Infinitiv', 'muss oder kann gemacht werden', 'Die Frage ist noch zu klären.', 'Die Frage muss geklärt werden.'],
          ['Adjektiv auf -bar / -lich', 'kann gemacht werden', 'Acht Stellen sind besetzbar.', 'Acht Stellen können besetzt werden.'],
          ['man + Aktiv', 'gesprochen, unbestimmt', 'Das kann man so nicht sagen.', 'Das kann so nicht gesagt werden.'],
          ['sich + Infinitiv + Adverb', 'wertend, über Eigenschaften', 'Der Bericht liest sich schwer.', '—']
        ],
        note: '„sein + zu + Infinitiv" ist doppeldeutig: <b>nicht zu halten</b> kann „kann nicht gehalten werden" oder „darf nicht gehalten werden" heißen. Genau darum ist die Form in Vorlagen so beliebt — sie sagt nicht, ob jemand nicht kann oder nicht will. Frag im Zweifel nach.'
      }
    ]
  },
  uebungen: [
    { typ: 'listen', audio: 'Zwölf Arbeitsplätze sind auf Dauer nicht zu halten.', frage: 'Hör zu: Was bedeutet dieser Satz im Klartext?', optionen: ['Zwölf Arbeitsplätze sollen wegfallen.', 'Zwölf Arbeitsplätze werden zusätzlich geschaffen.', 'Zwölf Beschäftigte werden umgeschult.'], richtig: 0 },
    { typ: 'mc', frage: 'Wie lautet „Die Einführung erfolgt im Oktober" im Verbalstil?', optionen: ['Wir führen das System im Oktober ein.', 'Die Einführung des Systems im Oktober.', 'Im Oktober die Einführung des Systems.'], richtig: 0, hinweis: 'Verbalstil heißt: Die Handlung steckt wieder im Verb und bekommt ein Subjekt. Erst dann steht da, wer etwas tut.' },
    { typ: 'mc', frage: '„Das lässt sich einrichten" bedeutet:', optionen: ['Das kann eingerichtet werden.', 'Das muss eingerichtet werden.', 'Das wurde bereits eingerichtet.'], richtig: 0, hinweis: '„sich lassen + Infinitiv" ersetzt „können + Passiv". Eine Pflicht drückt es gerade nicht aus — dafür bräuchtest du „ist einzurichten".' },
    { typ: 'mc', frage: 'Welcher Nebensatz steckt hinter „bei Nichteinhaltung der Frist"?', optionen: ['wenn die Frist nicht eingehalten wird', 'obwohl die Frist nicht eingehalten wird', 'nachdem die Frist eingehalten wurde'], richtig: 0, hinweis: 'Die Präposition zeigt den Nebensatztyp an: „bei" ist konditional und wird zu „wenn", nicht konzessiv und nicht temporal.' },
    { typ: 'gapbank', frage: 'Setz die Passiversatzformen ein.', text: 'Diese Frage ist bis Freitag noch zu ___. Der Termin ___ sich verschieben. Acht Stellen sind intern ___.', bank: ['klären', 'lässt', 'besetzbar', 'geklärt', 'wird', 'besetzt'], loesung: ['klären', 'lässt', 'besetzbar'], hinweis: 'Nach „ist zu" steht der Infinitiv, nicht das Partizip. „sich lassen" braucht die konjugierte Form von lassen. Und -bar macht aus dem Verb ein Adjektiv.' },
    { typ: 'order', frage: 'Bau den Satz mit Passiversatz!', woerter: ['Die', 'Frage', 'der', 'Qualifizierung', 'ist', 'noch', 'zu', 'klären'], loesung: 'Die Frage der Qualifizierung ist noch zu klären', hinweis: 'Bei „sein + zu + Infinitiv" bleibt das Verb im Infinitiv und steht ganz am Satzende, direkt hinter dem „zu".' },
    { typ: 'order', frage: 'Bau den Satz im Verbalstil!', woerter: ['Wir', 'führen', 'das', 'System', 'im', 'Oktober', 'ein'], loesung: 'Wir führen das System im Oktober ein', hinweis: 'Bei trennbaren Verben bleibt das Präfix am Satzende — auch dann, wenn dazwischen noch Zeitangaben stehen.' },
    { typ: 'match', frage: 'Nominalstil und Verbalstil — was gehört zusammen?', paare: [['nach Prüfung der Unterlagen', '🔎 nachdem wir die Unterlagen geprüft haben'], ['zur Vermeidung von Doppelarbeit', '🎯 damit niemand doppelt arbeitet'], ['trotz erheblicher Kosten', '💸 obwohl es viel mehr kostet'], ['bei Nichteinhaltung der Frist', '⏰ wenn die Frist nicht eingehalten wird'], ['wegen fehlender Nachweise', '📑 weil die Nachweise fehlen']] },
    { typ: 'bild', bild: 'th-arbeit', frage: 'In der Sitzung heißt es: „Eine Reduzierung des Personalbestands ist derzeit nicht auszuschließen." Wie fragst du sinnvoll nach?', optionen: ['Heißt das, dass Stellen gestrichen werden? Wenn ja, wie viele und in welchem Bereich?', 'Können Sie den Satz bitte noch einmal genauso wiederholen?', 'Das klingt ja beruhigend, dann ist ja alles offen.', 'Wer hat diese Formulierung eigentlich geschrieben?'], richtig: 0, hinweis: 'Wenn Nominalstil und Passiversatz zusammenkommen, verschwindet der Handelnde doppelt. Die wirksame Nachfrage übersetzt den Satz in Verbalstil zurück und verlangt Zahlen.' },
    { typ: 'type', frage: 'Übersetze in klares Deutsch: „Zur Sicherstellung der Qualität ist eine Schulung der Beschäftigten erforderlich."', muster: 'Damit die Qualität stimmt, müssen wir die Beschäftigten schulen.', akzeptiert: ['damit .+ schul', 'müssen .+ schul', 'weil .+ schul'], hinweis: 'Zwei Schritte: „zur Sicherstellung" wird zum Nebensatz mit damit, und „ist erforderlich" bekommt wieder ein Subjekt mit müssen.' }
  ],
  zusammenfassung: {
    kernsaetze: [
      'Auf Deutsch heißt das: Sie führen das System im Oktober ein.',
      'Die Frage der Qualifizierung ist bis dahin noch zu klären.',
      'Das lässt sich einrichten, da sehe ich Spielraum.',
      'Acht Stellen sind intern besetzbar, vier bleiben offen.',
      'Das kann ich Ihnen heute nicht schönreden.'
    ],
    merke: [
      'Der Nominalstil verschweigt den Handelnden. Deine Standardfrage lautet immer: <b>Wer macht das?</b>',
      'Die Präposition verrät den Nebensatz: <b>nach</b> → nachdem · <b>bei</b> → wenn · <b>zur</b> → damit · <b>trotz</b> → obwohl · <b>wegen</b> → weil.',
      'Passiversatz: <b>lässt sich + Infinitiv</b> = kann gemacht werden · <b>ist zu + Infinitiv</b> = muss oder kann gemacht werden · <b>-bar</b> = machbar.'
    ],
    tipp: 'Nimm eine E-Mail oder ein Protokoll aus deinem Arbeitsalltag und unterstreiche jedes Substantiv auf -ung. Schreib den Absatz einmal komplett in Verbalsätzen neu. Du brauchst mehr Wörter — und plötzlich steht in jedem Satz, wer was tut.'
  },
  sprechen: {
    task: 'Beschreibe eine Veränderung in deinem Arbeitsumfeld oder deiner Branche. Sag zuerst einen Satz so, wie er in einer offiziellen Vorlage stünde, und dann denselben Inhalt so, wie du ihn einer Kollegin erklären würdest. Nutze mindestens zweimal eine Passiversatzform.',
    tipps: ['In der Vorlage heißt es: … — auf Deutsch bedeutet das …', 'Das lässt sich machen, sofern …', 'Zu klären ist vor allem, wer … und wann …', 'Diese Stellen sind intern besetzbar, jene nicht.']
  }
};
