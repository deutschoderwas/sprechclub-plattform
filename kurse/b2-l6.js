// Alltagsdeutsch B2 – Lektion 6: Etwas überzeugend präsentieren
// deutschoderwas club · Kursmaterial
window.LEKTION = {
  meta: { kurs: 'Alltagsdeutsch B2', nr: 6, titel: 'Etwas überzeugend präsentieren', level: 'B2', bild: 'th-rhetorik', dauer: 'ca. 22 Min' },
  intro: {
    text: 'Deine Sätze können grammatisch tadellos sein und trotzdem niemanden erreichen. Der Grund ist fast immer die Satzklammer: Bis das entscheidende Wort am Ende kommt, ist der Saal längst weg. Heute lernst du zwei Werkzeuge, mit denen Profis sprechen — kurze Klammern mit Nachschub und die bewusste Besetzung von Position 1.',
    du_lernst: ['Eine Präsentation aufbauen und einsteigen', 'Satzklammer kurz halten', 'Ausklammerung: Wichtiges nachschieben', 'Betonung durch Wortstellung']
  },
  dialog: {
    bild: 'th-rhetorik',
    situation: 'Mehmet probt morgen früh seine Präsentation vor der Geschäftsleitung. Dr. Berger, Rhetoriktrainerin im Haus, hört sich seinen Einstieg an.',
    lines: [
      { sp: 'Dr. Berger', txt: 'Fangen wir an. Sagen Sie mir Ihren ersten Satz — genau so, wie Sie ihn morgen sagen würden.' },
      { sp: 'Mehmet', txt: 'Ich möchte Ihnen heute unser neues Ausbildungsprogramm vorstellen, das wir im vergangenen Jahr gemeinsam mit drei Partnerbetrieben entwickelt haben.' },
      { sp: 'Dr. Berger', txt: 'Grammatisch tadellos. Aber Ihre Klammer ist zu lang: Zwischen möchte und vorstellen liegen vierzehn Wörter. Bis dahin hat der Raum abgeschaltet. Was ist Ihre wichtigste Zahl?' },
      { sp: 'Mehmet', txt: 'Wir haben die Abbruchquote halbiert.' },
      { sp: 'Dr. Berger', txt: 'Dann sagen Sie genau das zuerst. Und das Detail schieben Sie hinter das Verb: „Wir haben die Abbruchquote halbiert — und zwar in nur zwei Jahren."' },
      { sp: 'Mehmet', txt: 'Also bewusst nachschieben, statt alles in die Mitte zu packen?' },
      { sp: 'Dr. Berger', txt: 'Genau. Diese Ausklammerung klingt gesprochen und nicht abgelesen. Und merken Sie sich: Was auf Position eins steht, bekommt das Gewicht.' },
      { sp: 'Mehmet', txt: 'Dann versuche ich es so: „Über eines möchte ich heute besonders sprechen — über die Menschen hinter dieser Zahl."' },
      { sp: 'Dr. Berger', txt: 'Sehr gut. Vorn geöffnet, hinten aufgelöst, dazwischen Luft. Genau so hört ein Publikum zu.' },
      { sp: 'Mehmet', txt: 'Zwar fühlt sich das ungewohnt an, aber es klingt tatsächlich klarer. Ich nehme es noch einmal von vorn.' }
    ]
  },
  vokabeln: [
    { de: 'die Kernbotschaft', em: '🎯', bsp: 'Was soll das Publikum behalten?' },
    { de: 'der Einstieg', em: '🚪', bsp: 'Der Einstieg entscheidet über die ersten Minuten.' },
    { de: 'das Publikum', em: '👥', bsp: 'Das Publikum schaltet nach acht Sekunden ab.' },
    { de: 'der rote Faden', em: '🧵', bsp: 'Ohne roten Faden verliert man den Saal.' },
    { de: 'die Abbruchquote', em: '📉', bsp: 'Wir haben die Abbruchquote halbiert.' },
    { de: 'halbieren', em: '➗', bsp: 'Die Zahl wurde halbiert.' },
    { de: 'und zwar', em: '➕', bsp: 'Wir haben es geschafft — und zwar in zwei Jahren.' },
    { de: 'hervorheben', em: '🖍️', bsp: 'Diesen Punkt möchte ich hervorheben.' },
    { de: 'auf den Punkt kommen', em: '📍', bsp: 'Komm im ersten Satz auf den Punkt.' },
    { de: 'nachschieben', em: '↪️', bsp: 'Das Detail schiebst du hinter das Verb nach.' },
    { de: 'eine Pause setzen', em: '⏸️', bsp: 'Nach der wichtigsten Zahl: zwei Sekunden Stille.' },
    { de: 'untermauern', em: '🧱', bsp: 'Ein Argument mit einer Zahl untermauern.' },
    { de: 'überzeugen', em: '💡', bsp: 'Klarheit überzeugt mehr als Lautstärke.' },
    { de: 'ungewohnt', em: '🌀', bsp: 'Am Anfang fühlt es sich ungewohnt an.' },
    { de: 'zum Schluss kommen', em: '🏁', bsp: 'Ich komme zum Schluss.' },
    { de: 'der Blickkontakt', em: '👀', bsp: 'Halte Blickkontakt, nicht Folienkontakt.' }
  ],
  grammatik: {
    title: 'Grammatik im Kontext',
    blocks: [
      {
        h: 'Satzklammer und Ausklammerung',
        txt: 'Im deutschen Hauptsatz stehen die beiden Verbteile weit auseinander und klammern alles dazwischen ein. Je voller diese Klammer, desto anstrengender der Satz. Profis halten sie kurz und schieben den Rest hinterher:',
        table: [
          ['Bauteil', 'Wo steht es?', 'Beispiel'],
          ['Klammer im Perfekt', 'haben / sein … Partizip II', 'Wir haben die Abbruchquote halbiert.'],
          ['Klammer mit Modalverb', 'Modalverb … Infinitiv', 'Ich möchte das Programm vorstellen.'],
          ['Klammer bei trennbarem Verb', 'Verbstamm … Präfix', 'Ich stelle Ihnen das Programm vor.'],
          ['Ausklammerung mit und zwar', 'Zusatz rutscht hinter die Klammer', 'Wir haben die Quote halbiert — und zwar in zwei Jahren.'],
          ['Ausklammerung beim Vergleich', 'als / wie steht hinter der Klammer', 'Wir haben mehr erreicht als im gesamten Vorjahr.'],
          ['Ausklammerung mit Präposition', 'Präpositionalgruppe hinter der Klammer', 'Das Projekt ist gescheitert — an fehlender Zeit.']
        ],
        note: 'Faustregel fürs Sprechen: <b>höchstens sieben Wörter zwischen den Verbteilen</b>. Alles Weitere schiebst du <b>hinter</b> das Satzende nach. Geschrieben wirkt das lässig, gesprochen wirkt es souverän — deshalb hört man es bei jeder guten Rede.'
      },
      {
        h: 'Betonung durch Wortstellung',
        txt: 'Position 1 ist die Bühne deines Satzes: Dort steht genau ein Element, und dann sofort das Verb. Was du dorthin stellst, hört dein Publikum am stärksten:',
        table: [
          ['Was du betonst', 'Satz', 'Wirkung'],
          ['nichts Besonderes', 'Ich möchte heute über die Menschen sprechen.', 'sachlich, neutral'],
          ['das Thema', 'Über die Menschen möchte ich heute sprechen.', 'das Thema bekommt das Gewicht'],
          ['die Zeit', 'Heute möchte ich über die Menschen sprechen.', 'der Zeitpunkt rückt nach vorn'],
          ['das Objekt', 'Diesen einen Punkt merken Sie sich bitte.', 'das Objekt wird zur Botschaft'],
          ['den Gegensatz', 'Nicht die Zahl zählt, sondern die Wirkung.', 'stellt zwei Dinge scharf gegeneinander']
        ],
        note: 'Egal was auf Position 1 steht — das <b>konjugierte Verb bleibt auf Position 2</b>. Und das zweite Gewicht liegt immer <b>am Satzende</b>. Was in der Mitte steht, hört fast niemand.'
      }
    ]
  },
  uebungen: [
    { typ: 'listen', audio: 'Wir haben die Abbruchquote halbiert — und zwar in nur zwei Jahren.', frage: 'Hör zu: Wo steht die Zeitangabe?', optionen: ['hinter dem Verb, als Nachschub', 'zwischen Subjekt und Verb', 'ganz am Satzanfang'], richtig: 0 },
    { typ: 'mc', frage: 'Welcher Satz ist für eine Präsentation am besten gebaut?', optionen: ['Wir haben die Abbruchquote halbiert — und zwar in nur zwei Jahren.', 'Wir haben die Abbruchquote gemeinsam mit drei Partnerbetrieben in nur zwei Jahren halbiert.', 'Die Halbierung der Abbruchquote ist in zwei Jahren gemeinsam mit drei Partnerbetrieben erfolgt.'], richtig: 0, hinweis: 'Kurze Klammer, dann Nachschub. Je mehr Wörter zwischen den beiden Verbteilen liegen, desto später versteht das Publikum, worum es geht.' },
    { typ: 'mc', frage: 'Du willst das Thema betonen, nicht den Zeitpunkt. Welcher Satz?', optionen: ['Über die Menschen möchte ich heute sprechen.', 'Heute möchte ich über die Menschen sprechen.', 'Ich möchte heute über die Menschen sprechen.'], richtig: 0, hinweis: 'Was du auf Position 1 stellst, bekommt das stärkste Gewicht. Das konjugierte Verb rückt dabei immer auf Position 2.' },
    { typ: 'gapbank', frage: 'Ausklammern: Setz die Wörter dorthin, wo sie hingehören.', text: 'Wir haben die Quote halbiert — ___ ___ in nur zwei Jahren. Wir haben mehr erreicht ___ im gesamten Vorjahr. Das Projekt ist gescheitert ___ fehlender Zeit.', bank: ['und', 'zwar', 'als', 'an', 'wie', 'für'], loesung: ['und', 'zwar', 'als', 'an'], hinweis: 'Nachschübe hängen hinter der geschlossenen Satzklammer. Typische Einleiter sind und zwar, Vergleiche mit als oder wie und Präpositionalgruppen.' },
    { typ: 'order', frage: 'Bau den Satz mit kurzer Klammer!', woerter: ['haben', 'Wir', 'die', 'Abbruchquote', 'halbiert'], loesung: 'Wir haben die Abbruchquote halbiert', hinweis: 'haben auf Position 2, Partizip II am Satzende — dazwischen so wenig wie möglich. Details kommen erst danach.' },
    { typ: 'order', frage: 'Bau den Satz so, dass das Thema auf Position 1 steht!', woerter: ['die', 'Über', 'Menschen', 'möchte', 'ich', 'heute', 'sprechen'], loesung: 'Über die Menschen möchte ich heute sprechen', hinweis: 'Die ganze Präpositionalgruppe zählt als ein Satzglied auf Position 1. Danach kommt sofort das konjugierte Verb, das Subjekt rutscht dahinter.' },
    { typ: 'match', frage: 'Bauteil und Funktion — was gehört zusammen?', paare: [['Satzklammer', '🔗 zwei Verbteile umschließen das Mittelfeld'], ['Ausklammerung', '↪️ Zusatz steht hinter der Klammer'], ['Position 1', '🎤 stärkste Betonung im Satz'], ['und zwar', '➕ leitet den Nachschub ein'], ['die Pause', '⏸️ lässt die Zahl wirken']] },
    { typ: 'bild', bild: 'th-rhetorik', frage: 'Du stehst vorn und hast acht Sekunden. Womit fängst du an?', optionen: ['Wir haben die Abbruchquote halbiert — und zwar in zwei Jahren. Wie, das zeige ich Ihnen jetzt.', 'Ich möchte Ihnen heute unser neues Ausbildungsprogramm vorstellen, das wir im vergangenen Jahr gemeinsam entwickelt haben.', 'Bevor ich anfange, kurz etwas zu meiner Person und zu unserer Abteilung.', 'Entschuldigen Sie bitte die Folien, die sind leider noch nicht ganz fertig.'], richtig: 0, hinweis: 'Erst das Ergebnis, dann der Weg. Ein Einstieg mit langer Klammer, Vorstellungsrunde oder Entschuldigung verschenkt genau die Sekunden, in denen dir alle zuhören.' },
    { typ: 'type', frage: 'Formuliere deine wichtigste Aussage mit kurzer Klammer und einem Nachschub.', muster: 'Wir haben die Kosten gesenkt — und zwar um ein Drittel im ersten Halbjahr.', akzeptiert: ['und zwar', 'als', ' an ', 'nämlich'], hinweis: 'Erst der vollständige, kurze Satz. Dann ein Gedankenstrich und der Zusatz — nicht umgekehrt und nicht dazwischen.' },
    { typ: 'mc', frage: 'Du kommst zum Schluss deiner Präsentation. Was ist der stärkste letzte Satz?', optionen: ['Eines nehmen Sie bitte mit: Hinter jeder Zahl steht ein Mensch.', 'Ja, das wars dann eigentlich auch schon von meiner Seite.', 'Ich hoffe, ich habe Sie nicht zu lange aufgehalten.', 'Wenn es noch Fragen gibt, dann gern jetzt, sonst danke.'], richtig: 0, hinweis: 'Am Satzende und am Redeende liegt das größte Gewicht. Verschenk es nicht an eine Floskel — setz die Kernbotschaft ganz nach hinten.' }
  ],
  zusammenfassung: {
    kernsaetze: [
      'Wir haben die Abbruchquote halbiert — und zwar in nur zwei Jahren.',
      'Über eines möchte ich heute besonders sprechen: über die Menschen hinter dieser Zahl.',
      'Diesen einen Punkt merken Sie sich bitte.',
      'Nicht die Zahl zählt, sondern die Wirkung.',
      'Eines nehmen Sie bitte mit: Hinter jeder Zahl steht ein Mensch.'
    ],
    merke: [
      'Satzklammer kurz halten: <b>höchstens sieben Wörter</b> zwischen den beiden Verbteilen. Alles Weitere wird <b>nachgeschoben</b>.',
      'Ausklammerung heißt: Der Zusatz steht <b>hinter</b> der geschlossenen Klammer — mit <b>und zwar</b>, mit <b>als / wie</b> oder mit einer Präposition.',
      'Auf <b>Position 1</b> steht genau <b>ein</b> Satzglied, danach sofort das <b>konjugierte Verb</b>. Was dort steht, hört dein Publikum am lautesten — was in der Mitte steht, fast gar nicht.'
    ],
    tipp: 'Nimm deinen nächsten Präsentationseinstieg auf und zähl die Wörter zwischen deinen beiden Verbteilen. Sind es mehr als sieben, teil den Satz: kurzer Hauptsatz, Gedankenstrich, Nachschub. Sprich beide Fassungen laut hintereinander — du hörst den Unterschied sofort.'
  },
  sprechen: {
    task: 'Halte eine Minute Präsentation zu einem Projekt aus deinem Alltag: Steig mit deinem stärksten Ergebnis ein, schieb das Detail nach, betone einen Punkt bewusst über Position 1 und beende die Minute mit deiner Kernbotschaft.',
    tipps: ['Wir haben … — und zwar …', 'Über eines möchte ich heute besonders sprechen: …', 'Diesen Punkt merken Sie sich bitte.', 'Eines nehmen Sie bitte mit: …']
  }
};
