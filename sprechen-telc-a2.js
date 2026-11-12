/* ============================================================
   telc Deutsch A2 (Start Deutsch 2) — Sprechen
   Aufbau nach dem telc-Übungstest Deutsch A2 (Stand 12/2024),
   Paarprüfung, ca. 15 Minuten, keine Vorbereitungszeit:
     Teil 1  Sich vorstellen (Name, Alter, Land, Wohnort, Sprachen,
             Beruf, Hobby), danach zwei Zusatzfragen — 3 Punkte
     Teil 2  Alltagsgespräch mit Fragekarten (Was? Wo? Wann? …),
             drei Fragen stellen, drei beantworten — 6 Punkte
     Teil 3  Gemeinsam etwas aushandeln mit Mindmaps — 6 Punkte
   ============================================================ */
(function(){
var K2 = 'Teil 2 · Alltagsgespräch', K3 = 'Teil 3 · Etwas aushandeln';
var AUF1 = ['Stell dich vor: alle sieben Stichwörter in ganzen Sätzen.',
            'Beantworte die erste Zusatzfrage in ein, zwei Sätzen.',
            'Beantworte die zweite Zusatzfrage.'];
window.SPRECHEN_TELC_A2 = {
  niveau:'telcA2', pruefung:'telc Deutsch A2', minuten:15, punkte:15,
  stufen:[
    { nr:1, titel:'Fragen und Antworten', zeichen:'❓', was:'Aus einem Fragewort eine ganze Frage bauen und in ganzen Sätzen antworten.' },
    { nr:2, titel:'Vorschlagen und einigen', zeichen:'🤝', was:'Vorschläge machen, ablehnen, begründen und am Ende eine Lösung finden.' },
    { nr:3, titel:'Die drei Teile', zeichen:'🎯', was:'Jeder Prüfungsteil einzeln, mit Karte, Aufnahme, Musterlösung und Selbstcheck.' },
    { nr:4, titel:'Die ganze Prüfung', zeichen:'⏱️', was:'Alle drei Teile hintereinander, etwa 15 Minuten.' } ],

  bloecke:[
    { id:'ta2s1', stufe:1, titel:'Fragen mit Fragewort', kurz:'Wann? Wie oft? Wie lange?',
      ziel:'Nach diesem Block baust du aus jeder Fragekarte eine richtige Frage.', zeichen:'❓', farbe:'gruen',
      aufgaben:[
        { art:'wahl', frage:'Karte: „Wann?“ Thema Tagesablauf. Welche Frage passt?', optionen:['Wann stehst du am Morgen auf?','Wann du stehst auf?','Wann aufstehen?'], loesung:0,
          erklaerung:'Fragewort, dann das Verb, dann die Person: Wann stehst du auf?' },
        { art:'wahl', frage:'Karte: „Wie oft?“ Welche Frage passt?', optionen:['Wie oft gehst du einkaufen?','Wie oft du einkaufen?','Wie oft gehst einkaufen du?'], loesung:0,
          erklaerung:'Wie oft + Verb + Person.' },
        { art:'wahl', frage:'Karte: „Wie lange?“ Welche Antwort passt zu „Wie lange arbeitest du?“', optionen:['Acht Stunden, von acht bis vier.','Um acht Uhr.','Jeden Tag.'], loesung:0,
          erklaerung:'Wie lange fragt nach einer Dauer. „Um acht“ wäre die Antwort auf „Wann?“.' },
        { art:'wahl', frage:'Karte: „Wohin?“ Welche Frage passt?', optionen:['Wohin fährst du nach der Arbeit?','Wo fährst du nach der Arbeit?','Woher fährst du nach der Arbeit?'], loesung:0,
          erklaerung:'Wohin fragt nach dem Ziel einer Bewegung.' },
        { art:'ordnen', frage:'Bau die Frage: Karte „Was?“', teile:['Was','isst','du','zum Frühstück'], loesung:[0,1,2,3],
          erklaerung:'Fragewort, Verb, Person, Rest.' },
        { art:'ordnen', frage:'Bau die Frage: Karte „Wo?“', teile:['Wo','machst','du','am liebsten','Pause'], loesung:[0,1,2,3,4],
          erklaerung:'Wo machst du am liebsten Pause?' },
        { art:'wahl', frage:'Auf der Jokerkarte steht nur ein Fragezeichen. Was machst du?', optionen:['Ich stelle eine eigene Frage zum Thema.','Ich sage nichts.','Ich nehme eine neue Karte.'], loesung:0,
          erklaerung:'Mit dem Joker stellst du eine freie Frage zum Thema, zum Beispiel: Kochst du gern?' },
        { art:'wahl', frage:'Was ist bei der Antwort wichtig?', optionen:['Ein ganzer Satz','Nur ein Wort','Eine Gegenfrage'], loesung:0,
          erklaerung:'Ein ganzer Satz zeigt, was du kannst: „Ich stehe um sechs Uhr auf.“' } ] },

    { id:'ta2s2', stufe:2, titel:'Vorschlagen und einigen', kurz:'Wollen wir …? Lieber … Gut, dann …',
      ziel:'Nach diesem Block kannst du freundlich ablehnen und am Ende klar zusammenfassen.', zeichen:'🤝', farbe:'rot',
      aufgaben:[
        { art:'wahl', frage:'Welcher Satz ist ein Vorschlag?', optionen:['Wollen wir zusammen tanzen gehen?','Ich tanze.','Tanzen ist schwer.'], loesung:0,
          erklaerung:'Wollen wir …? ist die einfachste Form für einen Vorschlag.' },
        { art:'wahl', frage:'Wie lehnst du freundlich ab?', optionen:['Hm, tanzen mag ich nicht so. Wie wäre es mit Kochen?','Nein.','Das ist dumm.'], loesung:0,
          erklaerung:'Kurz sagen, warum nicht, und gleich einen anderen Vorschlag machen.' },
        { art:'wahl', frage:'Wie fragst du nach der Meinung?', optionen:['Was meinst du?','Du meinst.','Meinung bitte.'], loesung:0,
          erklaerung:'Nach der Meinung fragen gehört zum Aushandeln dazu.' },
        { art:'wahl', frage:'Welcher Satz fasst am Ende gut zusammen?', optionen:['Gut, dann machen wir einen Kochkurs und gehen Fahrrad fahren.','Ja.','Vielleicht.'], loesung:0,
          erklaerung:'Am Ende steht ein klares Ergebnis mit beiden Aktivitäten.' },
        { art:'ordnen', frage:'Bring das Gespräch in die richtige Reihenfolge.', teile:['Wollen wir zusammen Fußball spielen?','Fußball ist mir zu anstrengend. Wie wäre es mit Tischtennis?','Gute Idee! Und am Wochenende fotografieren wir?','Ja, gern. Dann machen wir das so.'], loesung:[0,1,2,3],
          erklaerung:'Vorschlag, Gegenvorschlag mit Grund, Zustimmung und neuer Vorschlag, Einigung.' },
        { art:'wahl', frage:'Warum ist Begründen wichtig?', optionen:['Weil Warum? und Warum nicht? auf der Karte stehen.','Weil man dann länger spricht.','Es ist nicht wichtig.'], loesung:0,
          erklaerung:'Die Karte fragt: Was? Wann? Warum? Warum nicht? Also gehören Gründe dazu.' } ] }
  ],

  teile:[
    { nr:1, art:'vorstellen', name:'Sich vorstellen', kurz:'Sieben Stichwörter, dann zwei Zusatzfragen',
      was:'Du stellst dich mit Hilfe von sieben Stichwörtern vor. Danach stellen dir die Prüfenden zwei Fragen zu dem, was du gesagt hast.',
      tipp:'Ganze Sätze, kein Stichwort auslassen. Bei den Zusatzfragen reichen ein, zwei Sätze.',
      zeichen:'🙋', farbe:'gruen', punkte:3,
      runden:[
        { id:'ta2s1r1', stichwoerter:['Name','Alter','Land','Wohnort','Sprachen','Beruf','Hobby'], auftrag:AUF1,
          zusatzfragen:[ { frage:'Wie lange wohnen Sie schon in Bremen?', antwort:'Ich wohne seit zwei Jahren in Bremen. Vorher habe ich in Hannover gewohnt.' },
                         { frage:'Was gefällt Ihnen an Ihrem Beruf?', antwort:'Ich arbeite gern mit Kindern. Jeder Tag ist anders.' } ],
          muster:'Ich heiße Leyla Öztürk und bin 29 Jahre alt. Ich komme aus der Türkei und wohne jetzt in Bremen. Ich spreche Türkisch, Englisch und ein bisschen Deutsch. Ich arbeite als Erzieherin in einer Kita. In meiner Freizeit lese ich gern und gehe schwimmen.',
          erklaerung:'Sieben Stichwörter, sieben Aussagen. Bei den Zusatzfragen hilft es, einen Satz mehr zu sagen als nötig.' },
        { id:'ta2s1r2', stichwoerter:['Name','Alter','Land','Wohnort','Sprachen','Beruf','Hobby'], auftrag:AUF1,
          zusatzfragen:[ { frage:'Warum lernen Sie Deutsch?', antwort:'Ich möchte in Deutschland als Mechaniker arbeiten. Dafür brauche ich gutes Deutsch.' },
                         { frage:'Wie oft spielen Sie Fußball?', antwort:'Zweimal pro Woche, am Dienstag und am Samstag, in einem Verein.' } ],
          muster:'Mein Name ist Ivan Petrov. Ich bin 34 Jahre alt und komme aus Bulgarien. Ich wohne in Stuttgart. Ich spreche Bulgarisch, Russisch und Deutsch. Ich bin Mechaniker von Beruf. Mein Hobby ist Fußball.',
          erklaerung:'Das Hobby ist oft Thema der Zusatzfrage. Denk an „wie oft“ und „mit wem“.' } ] },

    { nr:2, art:'fragen', name:'Alltagsgespräch', kurz:'Fragekarten zum Alltag — fragen und antworten',
      was:'Ihr bekommt Karten mit Fragewörtern zu einem Thema, zum Beispiel Tagesablauf. Du stellst mit jeder Karte eine Frage und beantwortest die Fragen deines Gegenübers.',
      tipp:'Fragewort, Verb, Person: Wann stehst du auf? Antworte immer in einem ganzen Satz.',
      zeichen:'❓', farbe:'gelb', punkte:6,
      runden:[
        { id:'ta2s2r1', thema:'Tagesablauf', karten:[
          { kopf:K2, stichwort:'Wann?', musterfrage:'Wann stehst du am Morgen auf?', musterantwort:'Ich stehe meistens um halb sieben auf.' },
          { kopf:K2, stichwort:'Wie lange?', musterfrage:'Wie lange arbeitest du am Tag?', musterantwort:'Ich arbeite acht Stunden, von acht bis vier.' },
          { kopf:K2, stichwort:'?', musterfrage:'Was machst du am Abend gern?', musterantwort:'Am Abend koche ich und sehe ein bisschen fern.' } ],
          erklaerung:'Bei der Jokerkarte mit dem Fragezeichen stellst du eine eigene Frage zum Thema.' },
        { id:'ta2s2r2', thema:'Einkaufen', karten:[
          { kopf:K2, stichwort:'Wo?', musterfrage:'Wo kaufst du am liebsten ein?', musterantwort:'Ich kaufe am liebsten auf dem Markt ein, weil das Gemüse frisch ist.' },
          { kopf:K2, stichwort:'Wie oft?', musterfrage:'Wie oft gehst du einkaufen?', musterantwort:'Ich gehe zweimal pro Woche einkaufen.' },
          { kopf:K2, stichwort:'Was?', musterfrage:'Was kaufst du immer?', musterantwort:'Ich kaufe immer Brot, Milch und Obst.' } ],
          erklaerung:'Zum Thema passende Fragen sind wichtig. Eine Frage zum Wetter passt hier nicht.' },
        { id:'ta2s2r3', thema:'Wochenende', karten:[
          { kopf:K2, stichwort:'Wohin?', musterfrage:'Wohin fährst du am Wochenende gern?', musterantwort:'Am Wochenende fahre ich gern an einen See.' },
          { kopf:K2, stichwort:'Mit wem?', musterfrage:'Mit wem verbringst du das Wochenende?', musterantwort:'Meistens mit meiner Familie und manchmal mit Freunden.' },
          { kopf:K2, stichwort:'Was?', musterfrage:'Was machst du am Sonntag?', musterantwort:'Am Sonntag schlafe ich lange und frühstücke in Ruhe.' } ],
          erklaerung:'Hör auf die Frage: „Mit wem“ braucht eine Person in der Antwort.' } ] },

    { nr:3, art:'planen', name:'Etwas aushandeln', kurz:'Zwei Mindmaps, ein gemeinsames Ergebnis',
      was:'Jeder von euch hat eine Mindmap mit Ideen. Ihr sprecht über die Vorschläge, sagt, was euch gefällt und was nicht, und einigt euch am Ende auf etwas Gemeinsames.',
      tipp:'Sag zu jedem Vorschlag, warum oder warum nicht. Und frag dein Gegenüber immer wieder: Was meinst du?',
      zeichen:'🤝', farbe:'rot', punkte:6,
      runden:[
        { id:'ta2s3r1', thema:'Ein neues Hobby', karten:[
          { kopf:K3, aufgabe:'Ihr sucht ein neues Hobby, das ihr zusammen machen könnt. Findet zwei Aktivitäten.',
            punkte:['Singen','Tanzen','Malen','Fußball spielen','?','Was? Wann? Warum? Warum nicht?'],
            mustervorschlag:'Wollen wir zusammen tanzen gehen? Ich tanze gern, und es gibt einen Kurs am Freitagabend. Malen finde ich nicht so gut, ich bin nicht kreativ. Was meinst du?',
            mustereinigung:'Gut, dann gehen wir am Freitag zum Tanzkurs und spielen am Sonntag Tischtennis im Park.' } ] },
        { id:'ta2s3r2', thema:'Ein Geschenk für eine Kollegin', karten:[
          { kopf:K3, aufgabe:'Eure Kollegin hat bald Geburtstag. Ihr wollt zusammen etwas schenken. Einigt euch.',
            punkte:['Blumen','Buch','Gutschein','Kuchen backen','?','Was? Wie teuer? Warum? Warum nicht?'],
            mustervorschlag:'Wie wäre es mit einem Gutschein für ein Restaurant? Sie geht gern essen. Ein Buch finde ich schwierig, weil wir nicht wissen, was sie liest.',
            mustereinigung:'Okay, dann kaufen wir einen Gutschein für das Restaurant am Markt und backen zusammen einen Kuchen.' } ] },
        { id:'ta2s3r3', thema:'Ein Ausflug am Wochenende', karten:[
          { kopf:K3, aufgabe:'Ihr wollt am Wochenende zusammen etwas unternehmen. Findet zwei Dinge.',
            punkte:['Zoo','Schwimmbad','Museum','Fahrrad fahren','?','Was? Wann? Warum? Warum nicht?'],
            mustervorschlag:'Wollen wir am Samstag in den Zoo gehen? Das Wetter soll schön sein. Ins Museum möchte ich lieber nicht, das ist mir zu ruhig. Was denkst du?',
            mustereinigung:'Gut, dann gehen wir am Samstag in den Zoo und am Sonntag fahren wir Fahrrad.' } ] } ] }
  ],

  laeufe:[
    { id:'ta2sl1', titel:'Prüfungslauf 1', minuten:15, teile:[
      { nr:1, art:'vorstellen', stichwoerter:['Name','Alter','Land','Wohnort','Sprachen','Beruf','Hobby'], auftrag:AUF1,
        zusatzfragen:[ { frage:'Seit wann sind Sie in Deutschland?', antwort:'Ich bin seit einem Jahr in Deutschland. Ich bin mit meiner Familie gekommen.' },
                       { frage:'Wo kochen Sie am liebsten?', antwort:'Zu Hause, für meine Familie. Am Wochenende kochen wir zusammen.' } ],
        muster:'Ich heiße Amal Rahimi und bin 41 Jahre alt. Ich komme aus Afghanistan und wohne in Kassel. Ich spreche Dari, Englisch und Deutsch. Ich arbeite als Köchin in einem Restaurant. Mein Hobby ist Kochen, natürlich.' },
      { nr:2, art:'fragen', thema:'Arbeit', karten:[
        { kopf:K2, stichwort:'Wo?', musterfrage:'Wo arbeitest du?', musterantwort:'Ich arbeite in einem Krankenhaus.' },
        { kopf:K2, stichwort:'Wie?', musterfrage:'Wie kommst du zur Arbeit?', musterantwort:'Ich fahre mit dem Fahrrad zur Arbeit.' },
        { kopf:K2, stichwort:'?', musterfrage:'Was gefällt dir an deiner Arbeit?', musterantwort:'Mir gefallen meine Kollegen.' } ] },
      { nr:3, art:'planen', thema:'Ein Kurs zusammen', karten:[
        { kopf:K3, aufgabe:'Ihr wollt zusammen einen Kurs machen. Findet zwei Kurse.',
          punkte:['Kochkurs','Yoga','Computerkurs','Schwimmen','?','Was? Wann? Warum? Warum nicht?'],
          mustervorschlag:'Wollen wir einen Kochkurs machen? Ich möchte gern neue Gerichte lernen. Yoga ist mir zu langweilig. Was meinst du?',
          mustereinigung:'Gut, dann machen wir am Dienstag den Kochkurs und am Samstag gehen wir schwimmen.' } ] } ] },
    { id:'ta2sl2', titel:'Prüfungslauf 2', minuten:15, teile:[
      { nr:1, art:'vorstellen', stichwoerter:['Name','Alter','Land','Wohnort','Sprachen','Beruf','Hobby'], auftrag:AUF1,
        zusatzfragen:[ { frage:'Was machen Sie in Ihrem Beruf?', antwort:'Ich repariere Computer und helfe Kunden am Telefon.' },
                       { frage:'Mit wem wandern Sie?', antwort:'Mit meiner Frau und manchmal mit Kollegen.' } ],
        muster:'Mein Name ist Diego Ramírez. Ich bin 36 Jahre alt und komme aus Kolumbien. Ich wohne in Frankfurt. Ich spreche Spanisch, Englisch und Deutsch. Ich bin IT-Techniker. In meiner Freizeit wandere ich gern.' },
      { nr:2, art:'fragen', thema:'Essen', karten:[
        { kopf:K2, stichwort:'Was?', musterfrage:'Was isst du gern zum Frühstück?', musterantwort:'Zum Frühstück esse ich gern Brot mit Käse.' },
        { kopf:K2, stichwort:'Wann?', musterfrage:'Wann isst du zu Mittag?', musterantwort:'Ich esse um zwölf Uhr zu Mittag, in der Kantine.' },
        { kopf:K2, stichwort:'Wie oft?', musterfrage:'Wie oft gehst du ins Restaurant?', musterantwort:'Ich gehe einmal im Monat ins Restaurant.' } ] },
      { nr:3, art:'planen', thema:'Ein Fest im Kurs', karten:[
        { kopf:K3, aufgabe:'Euer Deutschkurs ist bald zu Ende. Ihr plant zusammen ein kleines Fest. Einigt euch auf zwei Dinge.',
          punkte:['Picknick','Restaurant','Musik','Spiele','?','Was? Wann? Warum? Warum nicht?'],
          mustervorschlag:'Wie wäre es mit einem Picknick im Park? Das ist günstig und alle können etwas mitbringen. Ein Restaurant ist mir zu teuer. Was denkst du?',
          mustereinigung:'Okay, dann machen wir am Freitag ein Picknick im Park und spielen dort zusammen Spiele.' } ] } ] }
  ]
};
})();
