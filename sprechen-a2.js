/* ============================================================
   deutschoderwas club — SPRECHEN A2 (Goethe-Zertifikat A2)

   Aufbau nach der offiziellen Testbeschreibung: drei Teile,
   circa 15 Minuten, Paarprüfung.

     Teil 1  Fragen zur Person stellen und beantworten
     Teil 2  Von sich erzählen — Themenkarte mit Stichpunkten
     Teil 3  Gemeinsam etwas planen — ihr müsst euch einigen

   Der Unterschied zu A1 ist der Sprung vom Satz zum Zusammenhang.
   In A1 reicht ein richtiger Satz. In A2 musst du erzählen, also
   mehrere Sätze verbinden — und in Teil 3 auf jemanden eingehen,
   widersprechen und euch am Ende einigen.

   Der Weg hat vier Stufen, wie ein Lehrbuch aufgebaut:
   erst Fragen zur Person, dann zusammenhängend erzählen, dann
   Vorschläge und Einigung, zuletzt die ganze Prüfung mit Uhr.

   Punkte: Teil 1 neun, Teil 2 drei, Teil 3 drei — zusammen 15.
   Pro Karte gibt es drei Punkte: zwei für den Hauptteil (Frage,
   Vortrag, Vorschlag), einer für die Reaktion.

   muster… sind Musterlösungen zum Vergleichen, nicht zum
   Auswendiglernen. Die Lernenden nehmen sich selbst auf und
   haken danach ehrlich ab — dieselbe Mechanik wie bei A1.
   ============================================================ */

window.SPRECHEN_A2 = {

  niveau: 'A2',
  pruefung: 'Goethe-Zertifikat A2',
  minuten: 15,
  punkte: 15,

  stufen: [
    { nr:1, titel:'Fragen zur Person', zeichen:'❓',
      was:'Aus einem Stichwort eine richtige Frage bauen — und selbst in ganzen Sätzen antworten.' },
    { nr:2, titel:'Zusammenhängend erzählen', zeichen:'🧵',
      was:'Mehrere Sätze verbinden statt aufzuzählen. Das ist der eigentliche Sprung von A1 auf A2.' },
    { nr:3, titel:'Die Aufgabentypen', zeichen:'🎯',
      was:'Jeder Prüfungsteil einzeln geübt — mit Karte, Musterlösung und Selbstcheck.' },
    { nr:4, titel:'Die ganze Prüfung', zeichen:'⏱️',
      was:'Alle drei Teile hintereinander, so wie am Prüfungstag.' }
  ],

  /* ==========================================================
     STUFE 1 und 2 — Übungen vor den echten Karten
     ========================================================== */

  bloecke: [

    { id:'a2sp1b1', stufe:1, titel:'Fragen richtig bauen',
      kurz:'W-Frage oder Ja/Nein-Frage — und das Verb an die richtige Stelle',
      ziel:'Nach diesem Block baust du aus jedem Stichwort eine Frage, die ein Deutscher auch so stellen würde.',
      zeichen:'❓', farbe:'gruen',
      aufgaben: [
        { art:'wahl', frage:'Stichwort: „Wohnort". Welche Frage passt?',
          optionen:['Wo wohnen Sie?','Wo Sie wohnen?','Wo wohnen Sie ist?'],
          loesung:0,
          erklaerung:'In der Frage steht das Verb direkt nach dem Fragewort: Wo — wohnen — Sie.' },
        { art:'wahl', frage:'Stichwort: „Geschwister". Welche Frage passt?',
          optionen:['Sie haben Geschwister?','Haben Sie Geschwister?','Geschwister haben Sie?'],
          loesung:1,
          erklaerung:'Ohne Fragewort steht das Verb ganz vorn. „Sie haben Geschwister?" versteht man zwar, in der Prüfung zählt aber die richtige Form.' },
        { art:'wahl', frage:'Stichwort: „Frühstück". Welche Frage klingt natürlich?',
          optionen:['Was frühstücken Sie normalerweise?','Was ist Ihr Frühstück?','Frühstück Sie was?'],
          loesung:0,
          erklaerung:'„Was frühstücken Sie normalerweise?" ist die Frage, die man wirklich stellt. Wörtlich übersetzte Fragen klingen oft schief.' },
        { art:'wahl', frage:'Stichwort: „Urlaub — letztes Jahr". Was fragst du?',
          optionen:['Wo waren Sie letztes Jahr im Urlaub?','Wo sind Sie letztes Jahr im Urlaub?','Wo haben Sie letztes Jahr Urlaub?'],
          loesung:0,
          erklaerung:'„sein" bildet die Vergangenheit mit „war": Wo waren Sie? Das brauchst du in A2 ständig.' },
        { art:'wahl', frage:'Deine Partnerin fragt: „Wie lange lernen Sie schon Deutsch?" Was antwortest du am besten?',
          optionen:['Zwei Jahre.','Ich lerne seit zwei Jahren Deutsch.','Zwei Jahre Deutsch lernen.'],
          loesung:1,
          erklaerung:'Ein ganzer Satz bringt mehr Punkte als ein Wort. „seit" plus Dativ: seit zwei Jahren.' },
        { art:'wahl', frage:'Stichwort: „Weg zur Arbeit". Welche Frage passt am besten?',
          optionen:['Wie kommen Sie zur Arbeit?','Wie gehen Sie Arbeit?','Womit ist Ihre Arbeit?'],
          loesung:0,
          erklaerung:'„Wie kommen Sie zur Arbeit?" fragt nach dem Verkehrsmittel — genau das ist gemeint.' },
        { art:'wahl', frage:'Was ist bei einer Antwort in Teil 1 am wichtigsten?',
          optionen:['Möglichst lange sprechen.','Ein ganzer Satz, der wirklich zur Frage passt.','Möglichst schwierige Wörter benutzen.'],
          loesung:1,
          erklaerung:'Ein passender ganzer Satz reicht völlig. Wer am Thema vorbeiredet, verliert Punkte — auch wenn er viel sagt.' },
        { art:'ordnen', frage:'Bau die Frage: Stichwort „Hobbys".',
          teile:['Was','machen','Sie','in Ihrer Freizeit'],
          loesung:[0,1,2,3],
          erklaerung:'Fragewort, Verb, Person, Rest. Diese Reihenfolge passt bei fast jeder W-Frage.' },
        { art:'ordnen', frage:'Bau die Frage: Stichwort „Wochenende".',
          teile:['Haben','Sie','am Wochenende','frei'],
          loesung:[0,1,2,3],
          erklaerung:'Ja/Nein-Frage: Das Verb steht ganz vorn, danach die Person.' },
        { art:'ordnen', frage:'Bau die Antwort auf „Warum lernen Sie Deutsch?"',
          teile:['Ich','lerne','Deutsch,','weil','ich','hier','arbeiten möchte'],
          loesung:[0,1,2,3,4,5,6],
          erklaerung:'Nach „weil" rutscht das Verb ans Ende. Ein „weil"-Satz zeigt sofort, dass du über A1 hinaus bist.' }
      ] },

    { id:'a2sp1b2', stufe:1, titel:'In ganzen Sätzen antworten',
      kurz:'Nie nur ein Wort — immer ein Satz, gern mit einem Zusatz',
      ziel:'Nach diesem Block antwortest du automatisch mit einem Satz und hängst freiwillig eine kleine Information an.',
      zeichen:'💬', farbe:'gruen',
      aufgaben: [
        { art:'wahl', frage:'„Woher kommen Sie?" — welche Antwort bringt mehr Punkte?',
          optionen:['Aus Syrien.','Ich komme aus Syrien, aus einer kleinen Stadt bei Aleppo.','Syrien.'],
          loesung:1,
          erklaerung:'Ein Satz plus ein kleiner Zusatz zeigt, dass du frei sprechen kannst. Genau das wird bewertet.' },
        { art:'wahl', frage:'„Haben Sie Kinder?" — was ist die beste Antwort?',
          optionen:['Ja.','Ja, zwei — einen Sohn und eine Tochter.','Kinder ja zwei.'],
          loesung:1,
          erklaerung:'„Ja" allein ist richtig, aber zu wenig. Zwei Zusatzwörter machen daraus eine A2-Antwort.' },
        { art:'wahl', frage:'„Was machen Sie beruflich?" — welche Antwort passt?',
          optionen:['Ich arbeite als Krankenpflegerin in einem Krankenhaus.','Ich bin Arbeit Krankenhaus.','Meine Arbeit ist Krankenhaus.'],
          loesung:0,
          erklaerung:'„Ich arbeite als …" oder „Ich bin …" — beides geht. Der Beruf steht ohne Artikel: Ich bin Krankenpflegerin.' },
        { art:'wahl', frage:'Du verstehst die Frage nicht. Was sagst du?',
          optionen:['Nichts, du wartest einfach.','Entschuldigung, können Sie die Frage bitte wiederholen?','Ich weiß nicht.'],
          loesung:1,
          erklaerung:'Nachfragen ist erlaubt und kostet keine Punkte. Schweigen dagegen schon.' },
        { art:'wahl', frage:'„Wie ist das Wetter heute?" — welche Antwort ist am besten?',
          optionen:['Gut.','Es ist heute ziemlich kalt, aber die Sonne scheint.','Wetter gut heute.'],
          loesung:1,
          erklaerung:'Zwei Aussagen mit „aber" verbunden — das ist typisches A2-Niveau.' },
        { art:'wahl', frage:'Welcher Satz verbindet zwei Informationen richtig?',
          optionen:['Ich wohne in Bremen und arbeite in Hamburg.','Ich wohne in Bremen, arbeite in Hamburg ich.','Ich in Bremen wohne und Hamburg arbeite.'],
          loesung:0,
          erklaerung:'Nach „und" beginnt kein neuer Hauptsatz mit neuem Subjekt — man spart es einfach: „und arbeite in Hamburg".' },
        { art:'ordnen', frage:'Bau die Antwort auf „Wie lange wohnen Sie schon hier?"',
          teile:['Ich','wohne','seit drei Jahren','in Deutschland'],
          loesung:[0,1,2,3],
          erklaerung:'Zeitangabe vor Ortsangabe — die Regel heißt „te-ka-mo-lo": temporal vor lokal.' },
        { art:'ordnen', frage:'Bau die Antwort: „Was machen Sie am liebsten?"',
          teile:['Am liebsten','koche','ich','für meine Familie'],
          loesung:[0,1,2,3],
          erklaerung:'Steht etwas anderes vorn, rutscht das Subjekt hinter das Verb: Am liebsten koche ich …' },
        { art:'ordnen', frage:'Bau die Antwort mit Begründung.',
          teile:['Ich','fahre','mit dem Fahrrad,','weil','das','schneller','ist'],
          loesung:[0,1,2,3,4,5,6],
          erklaerung:'Nach „weil" steht das Verb am Ende: … weil das schneller ist.' },
        { art:'wahl', frage:'Was solltest du in Teil 1 auf keinen Fall tun?',
          optionen:['Nachfragen, wenn du etwas nicht verstehst.','Deine Antwort mit einem Zusatz erweitern.','Nur mit einem Wort antworten.'],
          loesung:2,
          erklaerung:'Einzelne Wörter sind die häufigste Punktebremse in Teil 1.' }
      ] },

    { id:'a2sp2b1', stufe:2, titel:'Erzählen statt aufzählen',
      kurz:'Zuerst, dann, danach — und ein Beispiel dazu',
      ziel:'Nach diesem Block hängst du deine Sätze aneinander, statt sie einzeln hinzustellen.',
      zeichen:'🧵', farbe:'gelb',
      aufgaben: [
        { art:'wahl', frage:'Welche Version klingt nach A2 und nicht mehr nach A1?',
          optionen:['Ich stehe auf. Ich frühstücke. Ich fahre zur Arbeit.','Ich stehe um sechs auf, dann frühstücke ich kurz und danach fahre ich zur Arbeit.','Aufstehen, Frühstück, Arbeit.'],
          loesung:1,
          erklaerung:'Verbindungswörter wie „dann" und „danach" machen aus drei Sätzen eine Erzählung.' },
        { art:'wahl', frage:'Welches Wort verbindet zwei Sätze zeitlich?',
          optionen:['aber','danach','weil'],
          loesung:1,
          erklaerung:'„danach" ordnet zeitlich. „aber" stellt gegenüber, „weil" begründet.' },
        { art:'wahl', frage:'Du sollst über dein Wochenende erzählen. Womit fängst du gut an?',
          optionen:['Also, mein Wochenende war ziemlich ruhig.','Wochenende.','Ich weiß nicht, was ich sagen soll.'],
          loesung:0,
          erklaerung:'Ein Einstiegssatz gibt dir Zeit zum Denken und dem Prüfer sofort einen Eindruck.' },
        { art:'wahl', frage:'Welcher Satz nennt ein Beispiel?',
          optionen:['Zum Beispiel gehe ich oft schwimmen.','Trotzdem gehe ich schwimmen.','Deshalb gehe ich schwimmen.'],
          loesung:0,
          erklaerung:'„zum Beispiel" ist in Teil 2 Gold wert — damit füllst du jeden Stichpunkt mit Leben.' },
        { art:'wahl', frage:'Wie sprichst du über gestern?',
          optionen:['Gestern bin ich ins Kino gegangen.','Gestern gehe ich ins Kino.','Gestern ich gehe ins Kino.'],
          loesung:0,
          erklaerung:'„gehen" bildet das Perfekt mit „sein": ich bin gegangen. Für A2 ist das Perfekt Pflicht.' },
        { art:'wahl', frage:'Auf der Karte steht ein Stichpunkt, zu dem dir nichts einfällt. Was tust du?',
          optionen:['Du überspringst ihn stillschweigend.','Du sagst einen einfachen Satz dazu, auch wenn er kurz ist.','Du hörst ganz auf zu sprechen.'],
          loesung:1,
          erklaerung:'Jeder Stichpunkt, den du auslässt, kostet. Ein einfacher Satz ist immer besser als Schweigen.' },
        { art:'ordnen', frage:'Bau den Satz über die Vergangenheit.',
          teile:['Letztes Wochenende','habe','ich','meine Familie','besucht'],
          loesung:[0,1,2,3,4],
          erklaerung:'Im Perfekt steht das Partizip ganz am Ende: habe … besucht.' },
        { art:'ordnen', frage:'Bau einen Satz mit „deshalb".',
          teile:['Ich','wohne','weit weg,','deshalb','stehe','ich','früh auf'],
          loesung:[0,1,2,3,4,5,6],
          erklaerung:'Nach „deshalb" kommt sofort das Verb, dann erst die Person.' },
        { art:'ordnen', frage:'Bau den Einstiegssatz.',
          teile:['Ich','möchte','euch','von meinem Alltag','erzählen'],
          loesung:[0,1,2,3,4],
          erklaerung:'Bei zwei Verben steht das zweite im Infinitiv ganz hinten: möchte … erzählen.' },
        { art:'wahl', frage:'Wie lange solltest du in Teil 2 ungefähr sprechen?',
          optionen:['Zwei bis drei Sätze reichen.','Ungefähr eine bis zwei Minuten, alle Stichpunkte.','So lange wie möglich, egal worüber.'],
          loesung:1,
          erklaerung:'Alle Stichpunkte der Karte, zusammenhängend — das ist die Aufgabe, nicht möglichst viel Text.' }
      ] },

    { id:'a2sp2b2', stufe:2, titel:'Vorschlagen, ablehnen, einigen',
      kurz:'Die Sätze, mit denen Teil 3 steht und fällt',
      ziel:'Nach diesem Block kannst du einen Vorschlag machen, höflich ablehnen und am Ende eine Einigung formulieren.',
      zeichen:'🤝', farbe:'gelb',
      aufgaben: [
        { art:'wahl', frage:'Welcher Satz ist ein guter Vorschlag?',
          optionen:['Wir gehen ins Kino.','Wollen wir vielleicht ins Kino gehen?','Kino!'],
          loesung:1,
          erklaerung:'„Wollen wir …?" ist die häufigste und höflichste Vorschlagsform in Teil 3.' },
        { art:'wahl', frage:'Wie lehnst du höflich ab und machst gleich einen Gegenvorschlag?',
          optionen:['Nein.','Das mag ich nicht.','Hm, lieber nicht — wollen wir stattdessen spazieren gehen?'],
          loesung:2,
          erklaerung:'Ablehnen und sofort etwas anbieten hält das Gespräch am Leben. Genau das wird in Teil 3 bewertet.' },
        { art:'wahl', frage:'Welcher Satz beendet die Planung mit einer Einigung?',
          optionen:['Gut, dann treffen wir uns am Samstag um drei.','Vielleicht.','Ich weiß nicht.'],
          loesung:0,
          erklaerung:'Ohne klare Einigung fehlt der Aufgabe das Ende — und dir ein Punkt.' },
        { art:'wahl', frage:'Deine Partnerin schlägt Samstag vor, du kannst aber nicht. Was sagst du?',
          optionen:['Samstag passt mir leider nicht. Geht auch Sonntag?','Nein, Samstag.','Ich kann nicht.'],
          loesung:0,
          erklaerung:'Absage plus Alternative — das ist das Muster für jeden Widerspruch in Teil 3.' },
        { art:'wahl', frage:'Welcher Satz fragt nach der Meinung der anderen?',
          optionen:['Was hältst du davon?','Ich finde das gut.','Das machen wir so.'],
          loesung:0,
          erklaerung:'In Teil 3 wird bewertet, ob ihr miteinander sprecht. Rückfragen sind dafür der einfachste Weg.' },
        { art:'wahl', frage:'Was ist in Teil 3 der häufigste Fehler?',
          optionen:['Zu höflich sein.','Nur die eigenen Vorschläge sagen und nicht auf die andere Person eingehen.','Zu viele Fragen stellen.'],
          loesung:1,
          erklaerung:'Teil 3 ist ein Gespräch, kein Vortrag. Wer nicht reagiert, verliert Punkte — auch bei perfektem Deutsch.' },
        { art:'ordnen', frage:'Bau den Vorschlag.',
          teile:['Wollen','wir','am Samstag','ins Schwimmbad','gehen'],
          loesung:[0,1,2,3,4],
          erklaerung:'Verb ganz vorn, das zweite Verb am Ende — die feste Form für Vorschläge.' },
        { art:'ordnen', frage:'Bau die höfliche Absage.',
          teile:['Das','ist','mir','leider','zu teuer'],
          loesung:[0,1,2,3,4],
          erklaerung:'„leider" macht aus einer Absage eine höfliche Absage. Ein kleines Wort mit großer Wirkung.' },
        { art:'ordnen', frage:'Bau die Einigung.',
          teile:['Dann','treffen','wir uns','um sieben','vor dem Kino'],
          loesung:[0,1,2,3,4],
          erklaerung:'„Dann …" leitet das Ergebnis ein. Zeit vor Ort — te-ka-mo-lo.' },
        { art:'wahl', frage:'Worüber müsst ihr euch in Teil 3 immer einigen?',
          optionen:['Nur darüber, ob ihr etwas macht.','Über die konkreten Punkte auf der Karte — zum Beispiel wann, wo und was.','Über gar nichts, Hauptsache ihr redet.'],
          loesung:1,
          erklaerung:'Die Stichpunkte auf der Karte sind die Checkliste. Jeder muss besprochen sein.' }
      ] }
  ],

  /* ==========================================================
     STUFE 3 — die echten Prüfungsteile
     ========================================================== */

  teile: [

    { nr:1, art:'fragen', name:'Fragen zur Person',
      kurz:'Kärtchen mit einem Stichwort — fragen und antworten',
      was:'Du ziehst Kärtchen mit je einem Stichwort. Zu jedem Stichwort stellst du deiner Partnerin eine Frage — und beantwortest ihre Frage.',
      tipp:'Aus dem Stichwort muss eine ganze Frage werden, aus der Antwort ein ganzer Satz. Zwei Punkte für die Frage, einer für die Antwort.',
      zeichen:'❓', farbe:'gruen', punkte:9,
      runden: [
        { id:'a2s1r1', thema:'Person und Herkunft',
          karten: [
            { stichwort:'Wohnort', musterfrage:'Wo wohnen Sie im Moment?',
              musterantwort:'Ich wohne in Dortmund, seit ungefähr zwei Jahren.' },
            { stichwort:'Sprachen', musterfrage:'Welche Sprachen sprechen Sie?',
              musterantwort:'Ich spreche Türkisch, Englisch und jetzt auch ein bisschen Deutsch.' },
            { stichwort:'Familie', musterfrage:'Haben Sie Familie hier in Deutschland?',
              musterantwort:'Ja, meine Schwester wohnt auch hier. Meine Eltern sind noch in der Türkei.' }
          ],
          erklaerung:'Auf dem Kärtchen steht nur ein Wort. Die Frage musst du selbst bauen — und sie muss grammatisch stimmen.' },
        { id:'a2s1r2', thema:'Alltag',
          karten: [
            { stichwort:'Frühstück', musterfrage:'Was frühstücken Sie normalerweise?',
              musterantwort:'Meistens nur einen Kaffee und ein Brot. Am Wochenende esse ich mehr.' },
            { stichwort:'Weg zur Arbeit', musterfrage:'Wie kommen Sie zur Arbeit?',
              musterantwort:'Ich fahre mit dem Bus, das dauert etwa zwanzig Minuten.' },
            { stichwort:'Feierabend', musterfrage:'Was machen Sie nach der Arbeit?',
              musterantwort:'Meistens koche ich und danach sehe ich eine Serie.' }
          ],
          erklaerung:'Alltagsthemen kommen fast immer dran. Wer hier drei fertige Sätze im Kopf hat, startet ruhig.' },
        { id:'a2s1r3', thema:'Freizeit',
          karten: [
            { stichwort:'Sport', musterfrage:'Machen Sie regelmäßig Sport?',
              musterantwort:'Ja, ich gehe zweimal in der Woche schwimmen.' },
            { stichwort:'Wochenende', musterfrage:'Was haben Sie am letzten Wochenende gemacht?',
              musterantwort:'Ich war mit Freunden im Park, das Wetter war richtig schön.' },
            { stichwort:'Musik', musterfrage:'Welche Musik hören Sie gern?',
              musterantwort:'Am liebsten höre ich ruhige Musik, besonders beim Kochen.' }
          ],
          erklaerung:'Bei „Wochenende" lohnt sich das Perfekt: „Ich war …", „Ich habe … gemacht."' },
        { id:'a2s1r4', thema:'Lernen und Zukunft',
          karten: [
            { stichwort:'Deutschkurs', musterfrage:'Wie lange besuchen Sie schon einen Deutschkurs?',
              musterantwort:'Ich lerne seit einem Jahr Deutsch, dreimal in der Woche abends.' },
            { stichwort:'Pläne', musterfrage:'Was möchten Sie nach der Prüfung machen?',
              musterantwort:'Ich möchte eine Ausbildung anfangen, am liebsten im Krankenhaus.' },
            { stichwort:'Schwierigkeiten', musterfrage:'Was ist für Sie am schwersten an Deutsch?',
              musterantwort:'Die Artikel sind schwer für mich, weil es die in meiner Sprache nicht gibt.' }
          ],
          erklaerung:'„weil" und „möchte" zeigen dem Prüfer sofort, dass du sicher über A1 hinaus bist.' }
      ] },

    { nr:2, art:'erzaehlen', name:'Von sich erzählen',
      kurz:'Themenkarte mit Stichpunkten — du erzählst zusammenhängend',
      was:'Du bekommst eine Karte mit einem Thema und mehreren Stichpunkten. Du erzählst ein bis zwei Minuten am Stück. Danach stellt dir jemand eine Nachfrage.',
      tipp:'Geh jeden Stichpunkt der Reihe nach durch und verbinde die Sätze mit dann, danach, außerdem. Zwei Punkte für den Vortrag, einer für die Nachfrage.',
      zeichen:'🧵', farbe:'gelb', punkte:3,
      runden: [
        { id:'a2s2r1', thema:'Mein Tag',
          karten: [
            { thema:'Mein Tag',
              punkte:['Wann stehen Sie auf?','Was machen Sie vormittags?','Wann haben Sie frei?','Was machen Sie abends?'],
              mustervortrag:'Ich stehe normalerweise um halb sechs auf, weil ich früh anfangen muss. Zuerst trinke ich einen Kaffee, dann fahre ich mit dem Bus zur Arbeit. Vormittags arbeite ich im Lager, das ist ziemlich anstrengend. Frei habe ich meistens ab vier Uhr. Abends koche ich für meine Familie und danach sehe ich noch ein bisschen fern.',
              musterantwort:'Am Wochenende ist es ganz anders — da schlafe ich bis neun.' }
          ],
          erklaerung:'Vier Stichpunkte, vier bis fünf Sätze. Wer einen Stichpunkt auslässt, verliert Punkte — auch bei sehr gutem Deutsch.' },
        { id:'a2s2r2', thema:'Essen und Trinken',
          karten: [
            { thema:'Essen und Trinken',
              punkte:['Was essen Sie gern?','Wo essen Sie meistens?','Kochen Sie selbst?','Was mögen Sie gar nicht?'],
              mustervortrag:'Am liebsten esse ich Gemüse und Reis, das gibt es bei uns fast jeden Tag. Meistens esse ich zu Hause, weil das billiger ist. Ich koche selbst, und zwar gern — besonders am Wochenende, wenn ich Zeit habe. Gar nicht mag ich Fisch, den Geruch kann ich nicht ausstehen.',
              musterantwort:'Mein Lieblingsgericht ist Linsensuppe, so wie meine Mutter sie macht.' }
          ],
          erklaerung:'„weil" und „besonders" heben deinen Vortrag sofort über die reine Aufzählung.' },
        { id:'a2s2r3', thema:'Wohnen',
          karten: [
            { thema:'Wohnen',
              punkte:['Wie wohnen Sie?','Wie viele Zimmer?','Was gefällt Ihnen?','Was möchten Sie ändern?'],
              mustervortrag:'Ich wohne in einer kleinen Wohnung im dritten Stock. Sie hat zwei Zimmer, eine Küche und ein Bad. Am besten gefällt mir der Balkon, dort sitze ich im Sommer fast jeden Abend. Ändern möchte ich eigentlich nur eins: Die Wohnung ist ziemlich laut, weil die Straße direkt davor ist.',
              musterantwort:'Ja, ich suche schon, aber die Mieten sind im Moment sehr hoch.' }
          ],
          erklaerung:'Der letzte Stichpunkt („Was möchten Sie ändern?") verlangt „möchte" — das solltest du sicher können.' },
        { id:'a2s2r4', thema:'Reisen',
          karten: [
            { thema:'Reisen',
              punkte:['Reisen Sie gern?','Wohin war Ihre letzte Reise?','Mit wem?','Was haben Sie dort gemacht?'],
              mustervortrag:'Ich reise sehr gern, aber leider habe ich nicht oft Zeit. Meine letzte Reise war nach Italien, das war letzten Sommer. Ich bin mit meiner Freundin gefahren, wir waren zehn Tage dort. Wir haben viel gesehen, sind jeden Tag am Meer gewesen und abends immer draußen essen gegangen.',
              musterantwort:'Am liebsten würde ich noch einmal hinfahren, aber im Frühling — im Sommer war es zu heiß.' }
          ],
          erklaerung:'Diese Karte ist eine reine Perfekt-Übung: bin gefahren, haben gesehen, sind gewesen, sind gegangen.' },
        { id:'a2s2r5', thema:'Arbeit und Beruf',
          karten: [
            { thema:'Arbeit und Beruf',
              punkte:['Was ist Ihr Beruf?','Seit wann?','Was gefällt Ihnen?','Was ist schwierig?'],
              mustervortrag:'Ich arbeite als Verkäuferin in einem Supermarkt. Das mache ich seit ungefähr drei Jahren, vorher war ich zu Hause bei den Kindern. Mir gefällt der Kontakt mit den Leuten, jeden Tag spreche ich mit vielen Menschen. Schwierig sind die Arbeitszeiten, weil ich oft am Samstag arbeiten muss.',
              musterantwort:'Später möchte ich gern in die Verwaltung wechseln, dann hätte ich normale Zeiten.' }
          ],
          erklaerung:'„seit" plus Dativ und ein Rückblick mit „vorher war ich" — beides typische A2-Bausteine.' }
      ] },

    { nr:3, art:'planen', name:'Gemeinsam etwas planen',
      kurz:'Ihr habt dieselbe Aufgabe und müsst euch einigen',
      was:'Ihr bekommt beide dieselbe Karte: eine Situation und mehrere Punkte, die ihr klären müsst. Ihr macht Vorschläge, widersprecht und einigt euch.',
      tipp:'Rede nicht allein — frag immer wieder nach. Zwei Punkte für Vorschlag und Reaktion, einer für die klare Einigung am Ende.',
      zeichen:'🤝', farbe:'rot', punkte:3,
      runden: [
        { id:'a2s3r1', thema:'Ein Ausflug',
          karten: [
            { aufgabe:'Ihr wollt zusammen einen Ausflug machen. Plant ihn.',
              punkte:['Wann?','Wohin?','Wie hinkommen?','Was mitnehmen?'],
              mustervorschlag:'Wollen wir am Sonntag einen Ausflug machen? Ich schlage den See vor, da war ich letztes Jahr und es war richtig schön. Wir könnten mit dem Zug fahren, das dauert nur eine halbe Stunde. Was hältst du davon?',
              mustereinigung:'Gut, dann fahren wir am Sonntag um zehn mit dem Zug zum See und jeder bringt etwas zu essen mit.' }
          ],
          erklaerung:'Vier Punkte auf der Karte heißt: vier Dinge müssen besprochen sein. Am Ende steht immer ein klarer Satz mit dem Ergebnis.' },
        { id:'a2s3r2', thema:'Ein Geburtstagsgeschenk',
          karten: [
            { aufgabe:'Eine Freundin hat Geburtstag. Ihr wollt zusammen ein Geschenk kaufen.',
              punkte:['Was schenken?','Wie viel Geld?','Wo kaufen?','Wann?'],
              mustervorschlag:'Wollen wir ihr ein Buch schenken? Sie liest sehr gern. Ich würde ungefähr zwanzig Euro ausgeben, das reicht für ein schönes Buch. Was meinst du — oder hast du eine bessere Idee?',
              mustereinigung:'Dann kaufen wir am Freitag zusammen in der Buchhandlung ein Buch für zwanzig Euro.' }
          ],
          erklaerung:'„Was meinst du?" ist der wichtigste Satz in Teil 3. Ohne Rückfrage wird aus dem Gespräch ein Vortrag.' },
        { id:'a2s3r3', thema:'Ein gemeinsames Essen',
          karten: [
            { aufgabe:'Ihr wollt für eure Kursgruppe zusammen kochen. Plant das Essen.',
              punkte:['Was kochen?','Wer kauft ein?','Wo kochen?','Wann anfangen?'],
              mustervorschlag:'Wollen wir eine große Gemüsesuppe machen? Die mögen fast alle und sie ist nicht teuer. Ich könnte einkaufen gehen, wenn du deine Küche anbietest. Passt dir das?',
              mustereinigung:'Abgemacht: Ich kaufe am Samstagvormittag ein, wir kochen bei dir und fangen um vier an.' }
          ],
          erklaerung:'Aufgaben verteilen ist Teil der Planung: „Ich könnte …, wenn du …" ist dafür die beste Form.' },
        { id:'a2s3r4', thema:'Ein Umzug',
          karten: [
            { aufgabe:'Ein Freund zieht um. Ihr wollt ihm helfen. Plant den Tag.',
              punkte:['Welcher Tag?','Wie viele Leute?','Auto oder Transporter?','Wer bringt Essen?'],
              mustervorschlag:'Ich schlage Samstag vor, da haben die meisten frei. Wir sollten mindestens vier Leute sein, sonst dauert es zu lange. Meinst du, ein Auto reicht, oder brauchen wir einen Transporter?',
              mustereinigung:'Gut, dann helfen wir am Samstag zu viert, mieten einen kleinen Transporter und ich bringe Pizza mit.' }
          ],
          erklaerung:'„Ich schlage … vor" und „Wir sollten …" sind stärker als „vielleicht" — trau dich, klar zu sprechen.' },
        { id:'a2s3r5', thema:'Ein Kursausflug ins Museum',
          karten: [
            { aufgabe:'Euer Kurs möchte ins Museum. Plant den Besuch.',
              punkte:['Welches Museum?','Wann?','Wie hinkommen?','Was kostet es?'],
              mustervorschlag:'Wollen wir ins Stadtmuseum gehen? Der Eintritt ist für Kursteilnehmer günstiger. Am Mittwochnachmittag haben wir alle frei, und mit der Straßenbahn sind wir in zehn Minuten da. Wäre das für dich okay?',
              mustereinigung:'Dann treffen wir uns am Mittwoch um zwei an der Haltestelle und fahren zusammen ins Stadtmuseum.' }
          ],
          erklaerung:'Preise und Uhrzeiten gehören in die Einigung. Wer sie weglässt, hat die Aufgabe nur halb gelöst.' }
      ] }
  ],

  /* ==========================================================
     STUFE 4 — die ganze Prüfung
     ========================================================== */

  laeufe: [

    { id:'a2sp1', titel:'Prüfungslauf 1', minuten:15,
      teile: [
        { nr:1, art:'fragen', thema:'Person und Alltag',
          karten: [
            { stichwort:'Beruf', musterfrage:'Was machen Sie beruflich?',
              musterantwort:'Ich arbeite als Elektriker, meistens auf Baustellen.' },
            { stichwort:'Wohnort', musterfrage:'Wo wohnen Sie und wie gefällt es Ihnen dort?',
              musterantwort:'Ich wohne in Essen. Es gefällt mir gut, weil alles in der Nähe ist.' },
            { stichwort:'Hobbys', musterfrage:'Was machen Sie in Ihrer Freizeit?',
              musterantwort:'Ich spiele Fußball, jeden Dienstag mit ein paar Kollegen.' }
          ] },
        { nr:2, art:'erzaehlen', thema:'Mein Wochenende',
          karten: [
            { thema:'Mein Wochenende',
              punkte:['Was machen Sie am Samstag?','Was am Sonntag?','Mit wem?','Was ist Ihnen wichtig?'],
              mustervortrag:'Am Samstag schlafe ich erst einmal aus, das brauche ich nach der Woche. Danach kaufe ich ein und putze die Wohnung. Am Sonntag treffe ich meistens Freunde, wir gehen spazieren oder sitzen im Café. Wichtig ist mir, dass ich mindestens einen Tag gar nichts machen muss.',
              musterantwort:'Nein, am Sonntag arbeite ich nie — das ist mir wirklich wichtig.' }
          ] },
        { nr:3, art:'planen', thema:'Ein Kinoabend',
          karten: [
            { aufgabe:'Ihr wollt zusammen ins Kino gehen. Plant den Abend.',
              punkte:['Welcher Film?','Wann?','Wo treffen?','Danach noch etwas?'],
              mustervorschlag:'Wollen wir am Freitag ins Kino gehen? Es läuft gerade ein neuer Film, der soll richtig gut sein. Wir könnten uns um halb acht vor dem Kino treffen. Was sagst du?',
              mustereinigung:'Gut, dann treffen wir uns am Freitag um halb acht vor dem Kino und gehen danach noch eine Kleinigkeit essen.' }
          ] }
      ] },

    { id:'a2sp2', titel:'Prüfungslauf 2', minuten:15,
      teile: [
        { nr:1, art:'fragen', thema:'Lernen und Leben',
          karten: [
            { stichwort:'Deutschkurs', musterfrage:'Wie oft gehen Sie in den Deutschkurs?',
              musterantwort:'Dreimal in der Woche, immer abends nach der Arbeit.' },
            { stichwort:'Einkaufen', musterfrage:'Wo kaufen Sie normalerweise ein?',
              musterantwort:'Meistens im Supermarkt um die Ecke, das ist am bequemsten.' },
            { stichwort:'Wetter', musterfrage:'Welches Wetter mögen Sie am liebsten?',
              musterantwort:'Ich mag den Herbst, weil es nicht zu heiß und nicht zu kalt ist.' }
          ] },
        { nr:2, art:'erzaehlen', thema:'Meine Stadt',
          karten: [
            { thema:'Meine Stadt',
              punkte:['Wo liegt Ihre Stadt?','Wie groß ist sie?','Was gefällt Ihnen?','Was fehlt?'],
              mustervortrag:'Meine Stadt liegt im Westen von Deutschland, ungefähr eine Stunde von Köln entfernt. Sie ist nicht besonders groß, hier wohnen etwa achtzigtausend Menschen. Mir gefällt, dass alles nah ist — man braucht kein Auto. Was mir fehlt, ist ein größeres Schwimmbad, das alte ist seit zwei Jahren geschlossen.',
              musterantwort:'Ja, ich wohne gern hier. Ich möchte nicht in eine große Stadt ziehen.' }
          ] },
        { nr:3, art:'planen', thema:'Ein Willkommensfest',
          karten: [
            { aufgabe:'In eurem Kurs sind neue Leute. Ihr wollt ein kleines Fest organisieren.',
              punkte:['Wann?','Wo?','Was zu essen?','Wer lädt ein?'],
              mustervorschlag:'Wollen wir nächsten Freitag ein kleines Fest machen? Im Kursraum ist genug Platz und es kostet nichts. Jeder könnte etwas zu essen mitbringen, dann wird es bunt. Wie findest du das?',
              mustereinigung:'Dann machen wir es am Freitag um sechs im Kursraum, jeder bringt etwas mit und ich schreibe allen eine Nachricht.' }
          ] }
      ] }
  ]

};
