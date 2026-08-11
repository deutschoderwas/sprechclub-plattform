/* ============================================================
   deutschoderwas club — SPRECHEN B1 (Zertifikat B1)

   Aufbau nach der offiziellen Testbeschreibung: drei Teile,
   circa fünfzehn Minuten, Paarprüfung.

     Teil 1  Gemeinsam etwas planen — ihr müsst euch einigen
     Teil 2  Ein Thema präsentieren — fünf Folien, frei gesprochen
     Teil 3  Über eine Präsentation sprechen — Rückmeldung,
             Frage stellen, Frage beantworten

   Der Sprung von A2 auf B1: In A2 erzählt man von sich. In B1
   hält man einen kleinen Vortrag mit fester Gliederung, gibt
   einer anderen Person eine Rückmeldung und reagiert auf
   Nachfragen. Der häufigste Fehler ist Teil 2: Wer die fünf
   Folien nicht der Reihe nach abarbeitet, verliert Punkte,
   auch wenn er flüssig spricht.

   Punkte: Teil 1 drei, Teil 2 drei, Teil 3 sechs — zusammen zwölf.
   Pro Karte gibt es drei Punkte.

   muster… sind Musterlösungen zum Vergleichen, nicht zum
   Auswendiglernen. Die Lernenden nehmen sich selbst auf,
   hören danach das Muster und haken ehrlich ab.
   ============================================================ */

window.SPRECHEN_B1 = {

  niveau: 'B1',
  pruefung: 'Zertifikat B1',
  minuten: 15,
  punkte: 12,

  stufen: [
    { nr:1, titel:'Planen und sich einigen', zeichen:'🤝',
      was:'Vorschlagen, widersprechen, Kompromiss finden — und am Ende ein klares Ergebnis formulieren.' },
    { nr:2, titel:'Die fünf Folien', zeichen:'🗂️',
      was:'Die feste Gliederung der Präsentation. Wer sie kennt, muss im Kopf nichts mehr suchen.' },
    { nr:3, titel:'Die drei Aufgabentypen', zeichen:'🎯',
      was:'Jeder Prüfungsteil einzeln geübt — mit Karte, Musterlösung und Selbstcheck.' },
    { nr:4, titel:'Die ganze Prüfung', zeichen:'⏱️',
      was:'Alle drei Teile hintereinander, fünfzehn Minuten — so wie am Prüfungstag.' }
  ],

  /* ==========================================================
     STUFE 1 und 2 — Übungen vor den echten Karten
     ========================================================== */

  bloecke: [

    { id:'b1sp1b1', stufe:1, titel:'Vorschlagen und einigen',
      kurz:'Die Sätze, mit denen Teil eins steht und fällt',
      ziel:'Nach diesem Block machst du Vorschläge, lehnst höflich ab und formulierst am Ende eine klare Einigung.',
      zeichen:'🤝', farbe:'gruen',
      aufgaben: [
        { art:'wahl', frage:'Womit eröffnest du die Planung am besten?',
          optionen:['Wir machen das so.','Wollen wir mit dem Termin anfangen?','Ich weiß nicht.'],
          loesung:1,
          erklaerung:'Eine Frage lädt die andere Person ein. Eine Ansage macht aus dem Gespräch einen Vortrag.' },
        { art:'wahl', frage:'Welcher Vorschlag ist begründet?',
          optionen:['Samstag.','Wollen wir Samstag nehmen? Da haben die meisten frei.','Samstag wäre gut, oder?'],
          loesung:1,
          erklaerung:'Auf B1 wird bewertet, ob du begründest. Ein Vorschlag ohne Grund ist nur ein halber.' },
        { art:'wahl', frage:'Deine Partnerin schlägt etwas vor, das du zu teuer findest. Was sagst du?',
          optionen:['Nein.','Das ist mir ehrlich gesagt zu teuer — wie wäre es mit …?','Das geht gar nicht.'],
          loesung:1,
          erklaerung:'Ablehnen und sofort etwas anbieten. Ohne Gegenvorschlag bleibt das Gespräch stehen.' },
        { art:'wahl', frage:'Welcher Satz holt die andere Person aktiv ins Gespräch?',
          optionen:['Was hältst du davon?','Ich finde das gut.','So machen wir das.'],
          loesung:0,
          erklaerung:'Rückfragen sind der einfachste Weg, in Teil eins Punkte zu holen.' },
        { art:'wahl', frage:'Wie beendest du die Planung richtig?',
          optionen:['Mal sehen.','Gut, dann treffen wir uns am Samstag um zehn am Bahnhof.','Ich denke darüber nach.'],
          loesung:1,
          erklaerung:'Ohne konkretes Ergebnis fehlt der Aufgabe das Ende — und dir ein Punkt.' },
        { art:'wahl', frage:'Was ist in Teil eins der häufigste Fehler?',
          optionen:['Zu viele Fragen stellen.','Nur die eigenen Vorschläge nennen und nicht reagieren.','Zu höflich sein.'],
          loesung:1,
          erklaerung:'Teil eins ist ein Gespräch. Wer nicht auf die andere Person eingeht, verliert Punkte trotz gutem Deutsch.' },
        { art:'ordnen', frage:'Bau den begründeten Vorschlag.',
          teile:['Wollen','wir','den Ausflug','am Sonntag machen,','weil','da','weniger los ist'],
          loesung:[0,1,2,3,4,5,6],
          erklaerung:'Nach „weil" steht das Verb am Ende: … weniger los ist.' },
        { art:'ordnen', frage:'Bau die höfliche Ablehnung mit Gegenvorschlag.',
          teile:['Das','passt','mir leider nicht,','aber','wir','könnten','auch am Freitag'],
          loesung:[0,1,2,3,4,5,6],
          erklaerung:'„leider" macht die Absage höflich, „aber" leitet die Alternative ein.' },
        { art:'ordnen', frage:'Bau die Einigung.',
          teile:['Dann','bleibt es','beim Samstag','und ich','kümmere','mich','um die Tickets'],
          loesung:[0,1,2,3,4,5,6],
          erklaerung:'„Dann bleibt es bei …" ist die stärkste Abschlussformel in Teil eins.' },
        { art:'wahl', frage:'Über wie viele Punkte müsst ihr euch in Teil eins einigen?',
          optionen:['Nur über einen.','Über alle Punkte, die auf der Karte stehen.','Über gar keinen, Hauptsache ihr redet.'],
          loesung:1,
          erklaerung:'Die Stichpunkte auf der Karte sind eure Checkliste. Jeder muss besprochen sein.' }
      ] },

    { id:'b1sp1b2', stufe:1, titel:'Im Gespräch bleiben',
      kurz:'Nachfragen, Zeit gewinnen, sich wehren, wenn unterbrochen wird',
      ziel:'Nach diesem Block bricht dir das Gespräch nicht mehr ab, wenn du kurz nicht weiterweißt.',
      zeichen:'💬', farbe:'gruen',
      aufgaben: [
        { art:'wahl', frage:'Du hast die Frage nicht verstanden. Was sagst du?',
          optionen:['Nichts.','Entschuldigung, wie meinst du das genau?','Ja, genau.'],
          loesung:1,
          erklaerung:'Nachfragen kostet keine Punkte. Schweigen oder falsches Zustimmen schon.' },
        { art:'wahl', frage:'Du brauchst einen Moment zum Nachdenken. Welcher Satz hilft?',
          optionen:['Moment, lass mich kurz überlegen.','…','Ich weiß es nicht.'],
          loesung:0,
          erklaerung:'Ein Satz, der Zeit kauft, wirkt souverän. Eine Pause ohne Worte wirkt wie ein Blackout.' },
        { art:'wahl', frage:'Deine Partnerin unterbricht dich dauernd. Was sagst du?',
          optionen:['Sei mal ruhig.','Lass mich das bitte kurz zu Ende sagen.','Nichts, du hörst auf zu reden.'],
          loesung:1,
          erklaerung:'Freundlich, aber bestimmt — so verteidigst du deinen Redeanteil, ohne unhöflich zu werden.' },
        { art:'wahl', frage:'Welcher Satz sichert ab, dass du richtig verstanden hast?',
          optionen:['Habe ich dich richtig verstanden, dass du lieber später willst?','Ja ja.','Egal.'],
          loesung:0,
          erklaerung:'Diese Formel bringt dir Zeit und zeigt gleichzeitig, dass du zuhörst.' },
        { art:'wahl', frage:'Deiner Partnerin fällt ein Wort nicht ein. Was tust du?',
          optionen:['Du wartest schweigend.','Du hilfst kurz: „Meinst du vielleicht …?"','Du redest einfach weiter.'],
          loesung:1,
          erklaerung:'Zusammenarbeit wird in der Paarprüfung positiv bewertet — beide profitieren.' },
        { art:'wahl', frage:'Was zählt in einer Paarprüfung besonders?',
          optionen:['Möglichst lange allein sprechen.','Etwa gleich viel Redeanteil für beide.','Möglichst schnell fertig sein.'],
          loesung:1,
          erklaerung:'Wer die andere Person nicht zu Wort kommen lässt, schadet sich selbst.' },
        { art:'ordnen', frage:'Bau die Rückfrage.',
          teile:['Könntest','du','das','bitte','noch einmal','erklären'],
          loesung:[0,1,2,3,4,5],
          erklaerung:'Das zweite Verb steht im Infinitiv ganz am Ende.' },
        { art:'ordnen', frage:'Bau den Satz, der Zeit gewinnt.',
          teile:['Da','muss','ich','kurz','überlegen'],
          loesung:[0,1,2,3,4],
          erklaerung:'Steht etwas anderes vorn, folgt sofort das Verb: Da muss ich …' },
        { art:'ordnen', frage:'Bau den Satz, mit dem du zum Thema zurückkehrst.',
          teile:['Um','noch einmal','auf','deinen Vorschlag','zurückzukommen'],
          loesung:[0,1,2,3,4],
          erklaerung:'„Um … zurückzukommen" ist eine feste Wendung, mit der man den Faden wieder aufnimmt.' },
        { art:'wahl', frage:'Was solltest du in der Prüfung auf keinen Fall tun?',
          optionen:['Nachfragen.','Auswendig Gelerntes herunterbeten, egal was gefragt wurde.','Dich korrigieren.'],
          loesung:1,
          erklaerung:'Prüfer erkennen auswendig Gelerntes sofort — und es passt fast nie zur Aufgabe.' }
      ] },

    { id:'b1sp2b1', stufe:2, titel:'Die fünf Folien',
      kurz:'Der feste Aufbau der Präsentation in Teil zwei',
      ziel:'Nach diesem Block weißt du auswendig, was auf jede der fünf Folien gehört.',
      zeichen:'🗂️', farbe:'gold',
      aufgaben: [
        { art:'wahl', frage:'Was gehört auf die erste Folie?',
          optionen:['Deine Meinung.','Das Thema vorstellen und sagen, worüber du sprichst.','Ein Dankeschön.'],
          loesung:1,
          erklaerung:'Folie eins ist der Einstieg: Thema nennen, kurz sagen, was kommt.' },
        { art:'wahl', frage:'Was gehört auf die zweite Folie?',
          optionen:['Deine eigenen Erfahrungen mit dem Thema.','Statistiken.','Die Zusammenfassung.'],
          loesung:0,
          erklaerung:'Folie zwei ist persönlich — genau deshalb ist sie die leichteste.' },
        { art:'wahl', frage:'Was gehört auf die dritte Folie?',
          optionen:['Deine Meinung.','Die Situation in deinem Heimatland.','Der Dank ans Publikum.'],
          loesung:1,
          erklaerung:'Folie drei fragt nach deinem Herkunftsland — hier kannst du vergleichen.' },
        { art:'wahl', frage:'Was gehört auf die vierte Folie?',
          optionen:['Vor- und Nachteile plus deine Meinung.','Nur Vorteile.','Eine Wiederholung von Folie eins.'],
          loesung:0,
          erklaerung:'Folie vier ist die anspruchsvollste: abwägen und danach Stellung beziehen.' },
        { art:'wahl', frage:'Was gehört auf die fünfte Folie?',
          optionen:['Ein neues Thema.','Abschluss und Dank ans Publikum.','Deine Erfahrungen.'],
          loesung:1,
          erklaerung:'Folie fünf rundet ab: kurzes Fazit, dann Dank. Wer sie auslässt, verliert Punkte.' },
        { art:'wahl', frage:'Wie lange sollte die Präsentation ungefähr dauern?',
          optionen:['Eine halbe Minute.','Etwa drei bis vier Minuten.','Zehn Minuten.'],
          loesung:1,
          erklaerung:'Fünf Folien, pro Folie etwa vier bis fünf Sätze — das ergibt ungefähr drei bis vier Minuten.' },
        { art:'wahl', frage:'Dir fällt zu einer Folie wenig ein. Was tust du?',
          optionen:['Du überspringst sie.','Du sagst wenigstens zwei einfache Sätze.','Du hörst ganz auf.'],
          loesung:1,
          erklaerung:'Jede ausgelassene Folie kostet. Zwei einfache Sätze sind immer besser als Schweigen.' },
        { art:'ordnen', frage:'Bau den Einstiegssatz für Folie eins.',
          teile:['Ich','möchte','heute','über das Thema Ehrenamt','sprechen'],
          loesung:[0,1,2,3,4],
          erklaerung:'Bei zwei Verben steht das zweite im Infinitiv ganz hinten.' },
        { art:'ordnen', frage:'Bau die Überleitung zu Folie drei.',
          teile:['In meinem Heimatland','ist','das','ein bisschen','anders'],
          loesung:[0,1,2,3,4],
          erklaerung:'Steht die Ortsangabe vorn, folgt sofort das Verb.' },
        { art:'ordnen', frage:'Bau den Abschlusssatz.',
          teile:['Vielen Dank','für','eure','Aufmerksamkeit','—','habt','ihr','Fragen'],
          loesung:[0,1,2,3,4,5,6,7],
          erklaerung:'Dank plus Frage ans Publikum leitet direkt zu Teil drei über.' }
      ] },

    { id:'b1sp2b2', stufe:2, titel:'Rückmeldung geben',
      kurz:'Loben, nachfragen, antworten — die drei Schritte in Teil drei',
      ziel:'Nach diesem Block gibst du eine freundliche Rückmeldung und stellst eine Frage, die wirklich zum Vortrag passt.',
      zeichen:'🪞', farbe:'gold',
      aufgaben: [
        { art:'wahl', frage:'Welche Rückmeldung ist am besten?',
          optionen:['War gut.','Mir hat besonders gefallen, wie du von deiner Großmutter erzählt hast.','Ich habe nichts verstanden.'],
          loesung:1,
          erklaerung:'Konkret loben zeigt, dass du zugehört hast. Ein pauschales „war gut" bringt keine Punkte.' },
        { art:'wahl', frage:'Welche Frage passt zu einem Vortrag über Ehrenamt?',
          optionen:['Wie alt bist du?','Machst du selbst etwas ehrenamtlich?','Wie spät ist es?'],
          loesung:1,
          erklaerung:'Die Frage muss aus dem Vortrag kommen, nicht aus dem Nichts.' },
        { art:'wahl', frage:'Du wirst gefragt, warum du das Thema gewählt hast. Was antwortest du?',
          optionen:['Weiß nicht.','Weil ich das selbst erlebt habe — meine Schwester macht das seit Jahren.','Das war Zufall.'],
          loesung:1,
          erklaerung:'Eine begründete Antwort mit Beispiel ist genau das, was bewertet wird.' },
        { art:'wahl', frage:'Was tust du, wenn du die Frage nicht beantworten kannst?',
          optionen:['Du schweigst.','Du sagst ehrlich: „Da habe ich keine Erfahrung, aber ich denke, dass …"','Du erfindest etwas Kompliziertes.'],
          loesung:1,
          erklaerung:'Ehrlich sein und trotzdem etwas sagen — das rettet die Situation und zeigt Sprachvermögen.' },
        { art:'wahl', frage:'Welche Rückmeldung ist unhöflich?',
          optionen:['Das war interessant, besonders der Teil über die Kosten.','Deine Aussprache war schlecht.','Ich fand deine Beispiele gut.'],
          loesung:1,
          erklaerung:'In Teil drei geht es um den Inhalt, nicht um die Sprache der anderen Person.' },
        { art:'wahl', frage:'Wie viele Fragen sollst du in Teil drei stellen?',
          optionen:['Keine.','Mindestens eine, die zum Vortrag passt.','Möglichst zehn.'],
          loesung:1,
          erklaerung:'Eine gute Frage reicht. Sie muss aber wirklich zum Gehörten passen.' },
        { art:'ordnen', frage:'Bau die konkrete Rückmeldung.',
          teile:['Mir','hat','besonders','dein Beispiel','aus dem Krankenhaus','gefallen'],
          loesung:[0,1,2,3,4,5],
          erklaerung:'Im Perfekt steht das Partizip ganz am Ende: hat … gefallen.' },
        { art:'ordnen', frage:'Bau die Nachfrage.',
          teile:['Würdest','du','das','noch einmal','so','machen'],
          loesung:[0,1,2,3,4,5],
          erklaerung:'Der Konjunktiv „würdest" macht aus der Frage eine höfliche Nachfrage.' },
        { art:'ordnen', frage:'Bau die ehrliche Antwort.',
          teile:['Damit','habe','ich','selbst','keine Erfahrung,','aber','ich','denke schon'],
          loesung:[0,1,2,3,4,5,6,7],
          erklaerung:'Zugeben und trotzdem etwas beitragen — genau das wird positiv bewertet.' },
        { art:'wahl', frage:'Was ist in Teil drei am wichtigsten?',
          optionen:['Möglichst viele Fremdwörter.','Zeigen, dass du zugehört hast.','Möglichst schnell antworten.'],
          loesung:1,
          erklaerung:'Teil drei prüft Zuhören und Reagieren, nicht Wortschatzumfang.' }
      ] }
  ],

  /* ==========================================================
     STUFE 3 — die echten Prüfungsteile
     ========================================================== */

  teile: [

    { nr:1, art:'planen', name:'Gemeinsam etwas planen',
      kurz:'Ihr habt dieselbe Aufgabe und müsst euch einigen',
      was:'Ihr bekommt beide dieselbe Karte: eine Situation und mehrere Punkte, die ihr klären müsst. Ihr macht Vorschläge, widersprecht und einigt euch.',
      tipp:'Rede nicht allein. Zwei Punkte für Vorschlag und Reaktion, einer für die klare Einigung am Ende.',
      zeichen:'🤝', farbe:'gruen', punkte:3,
      runden: [
        { id:'b1s1r1', thema:'Ein Abschiedsfest',
          karten: [
            { aufgabe:'Eine Kollegin verlässt nach fünf Jahren den Betrieb. Ihr wollt ein Abschiedsfest organisieren.',
              punkte:['Wann und wo?','Wer wird eingeladen?','Was gibt es zu essen?','Was schenkt ihr?'],
              mustervorschlag:'Wollen wir das Fest am letzten Freitag im Monat machen? Da haben die meisten früher Schluss. Als Ort würde ich den Pausenraum vorschlagen, der ist groß genug und kostet nichts. Beim Essen wäre ich für Fingerfood, das kann jeder mitbringen. Was hältst du davon?',
              mustereinigung:'Gut, dann machen wir es am letzten Freitag um sechzehn Uhr im Pausenraum, jeder bringt etwas zu essen mit und wir sammeln zwanzig Euro pro Person für ein gemeinsames Geschenk.' }
          ],
          erklaerung:'Vier Punkte auf der Karte heißt: vier Dinge müssen besprochen sein. Am Ende steht immer ein klarer Satz mit dem Ergebnis.' },

        { id:'b1s1r2', thema:'Ein Wochenende in einer anderen Stadt',
          karten: [
            { aufgabe:'Ihr habt beide ein langes Wochenende frei und wollt gemeinsam verreisen.',
              punkte:['Wohin?','Wie hinfahren?','Wo übernachten?','Was kostet es ungefähr?'],
              mustervorschlag:'Ich würde gern nach Hamburg fahren, dort war ich noch nie. Mit dem Zug sind wir in drei Stunden da, und wenn wir früh buchen, wird es nicht teuer. Übernachten könnten wir in einem Hostel, das spart Geld für Essen und Museen. Wärst du damit einverstanden?',
              mustereinigung:'Abgemacht: Wir fahren am Freitagmorgen mit dem Zug nach Hamburg, schlafen zwei Nächte im Hostel und rechnen mit ungefähr hundertfünfzig Euro pro Person.' }
          ],
          erklaerung:'„Ich würde gern …" ist höflicher als „Ich will". Und ein Preisrahmen gehört zur Einigung dazu.' },

        { id:'b1s1r3', thema:'Ein Deutschkurs-Treffen',
          karten: [
            { aufgabe:'Euer Deutschkurs endet bald. Ihr wollt ein Treffen organisieren, damit der Kontakt nicht abbricht.',
              punkte:['Wie oft?','Wo trefft ihr euch?','Was macht ihr dort?','Wer organisiert?'],
              mustervorschlag:'Ich schlage vor, dass wir uns einmal im Monat treffen. Öfter schafft niemand, seltener schläft es ein. Als Ort fände ich ein Café gut, das ist für alle leicht zu erreichen. Und wir sollten nur Deutsch sprechen, sonst bringt es nichts. Was meinst du?',
              mustereinigung:'Dann treffen wir uns jeden ersten Samstag im Monat um fünfzehn Uhr im Café am Markt, sprechen nur Deutsch, und ich lege eine Gruppe an, in der wir uns erinnern.' }
          ],
          erklaerung:'„Öfter schafft niemand, seltener schläft es ein" — solche kurzen Begründungen wirken stark und sind leicht zu bauen.' },

        { id:'b1s1r4', thema:'Hilfe für eine kranke Nachbarin',
          karten: [
            { aufgabe:'Eure Nachbarin hat sich das Bein gebrochen und kann drei Wochen nicht einkaufen. Ihr wollt helfen.',
              punkte:['Wer macht was?','Wie oft?','Wie klärt ihr das Geld?','Wer spricht mit ihr?'],
              mustervorschlag:'Ich könnte zweimal in der Woche einkaufen gehen, dienstags und freitags passt es mir gut. Vielleicht übernimmst du die Post und den Müll? Beim Geld würde ich vorschlagen, dass sie uns die Quittungen bezahlt, dann muss niemand rechnen. Wäre das für dich in Ordnung?',
              mustereinigung:'Gut, dann kaufe ich dienstags und freitags ein, du kümmerst dich um Post und Müll, wir geben ihr die Quittungen, und du sprichst sie heute Abend darauf an.' }
          ],
          erklaerung:'Aufgaben verteilen gehört zur Planung. „Vielleicht übernimmst du …?" ist dafür die höflichste Form.' }
      ] },

    { nr:2, art:'erzaehlen', name:'Ein Thema präsentieren',
      kurz:'Fünf Folien, frei gesprochen, etwa drei bis vier Minuten',
      was:'Du hältst eine kleine Präsentation nach fester Gliederung: Thema, eigene Erfahrungen, Situation im Heimatland, Vor- und Nachteile mit deiner Meinung, Abschluss.',
      tipp:'Geh die fünf Folien der Reihe nach durch. Wer eine auslässt, verliert Punkte — auch bei flüssigem Deutsch.',
      zeichen:'🗂️', farbe:'gold', punkte:3,
      runden: [
        { id:'b1s2r1', thema:'Ehrenamt',
          karten: [
            { thema:'Ehrenamtlich arbeiten',
              punkte:['1 Thema vorstellen','2 Deine Erfahrungen','3 In deinem Heimatland','4 Vorteile, Nachteile, deine Meinung','5 Abschluss und Dank'],
              mustervortrag:'Ich möchte heute über das Thema Ehrenamt sprechen, also über Arbeit, für die man kein Geld bekommt. In Deutschland machen das sehr viele Menschen, in Vereinen, bei der Feuerwehr oder in der Nachbarschaftshilfe.\nIch selbst habe zwei Jahre lang samstags in einer Kleiderkammer geholfen. Das war anstrengend, aber ich habe dort mein Deutsch mehr verbessert als in jedem Kurs, weil ich einfach reden musste.\nIn meinem Heimatland ist das ein bisschen anders. Man hilft sehr viel, aber meistens in der Familie oder unter Nachbarn, seltener in einem Verein mit festen Zeiten.\nEin Vorteil ist, dass man schnell Leute kennenlernt und etwas Sinnvolles tut. Ein Nachteil ist die Zeit — wer Schicht arbeitet oder kleine Kinder hat, schafft das kaum. Meiner Meinung nach sollte jeder es einmal versuchen, aber niemand sollte sich schlecht fühlen, wenn es gerade nicht geht.\nDas war meine Präsentation. Vielen Dank für eure Aufmerksamkeit — habt ihr Fragen?',
              musterantwort:'Angefangen habe ich, weil eine Nachbarin mich einfach mitgenommen hat. Allein hätte ich mich nicht getraut.' }
          ],
          erklaerung:'Fünf Folien, fünf Absätze. Wer sich diesen Rhythmus angewöhnt, muss im Kopf nichts mehr suchen.' },

        { id:'b1s2r2', thema:'Einkaufen im Internet',
          karten: [
            { thema:'Online einkaufen',
              punkte:['1 Thema vorstellen','2 Deine Erfahrungen','3 In deinem Heimatland','4 Vorteile, Nachteile, deine Meinung','5 Abschluss und Dank'],
              mustervortrag:'Mein Thema ist heute das Einkaufen im Internet. Fast jeder bestellt inzwischen online, von Kleidung bis zu Lebensmitteln.\nIch bestelle selbst ziemlich viel, vor allem Schuhe, weil ich große Größen brauche und die im Laden fast nie da sind. Einmal habe ich allerdings drei Wochen auf ein Paket gewartet, das am Ende gar nicht ankam.\nIn meinem Heimatland war das lange anders. Die Leute haben lieber im Geschäft gekauft, weil sie dem Zahlen im Internet nicht vertraut haben. Inzwischen ändert sich das schnell, besonders bei jüngeren Leuten.\nDer größte Vorteil ist die Auswahl und dass die Geschäfte nachts nicht zuhaben. Der Nachteil ist, dass die kleinen Läden in der Stadt sterben. Ich finde, man sollte beides machen — bequem bestellen, aber auch bewusst vor Ort kaufen.\nVielen Dank fürs Zuhören. Wenn ihr Fragen habt, gern.',
              musterantwort:'Ja, ich habe schon einmal etwas zurückgeschickt. Das ging problemlos, ich musste nur zur Post.' }
          ],
          erklaerung:'Ein kleines Missgeschick auf Folie zwei macht die Präsentation lebendig — und ist leichter zu erzählen als abstrakte Sätze.' },

        { id:'b1s2r3', thema:'Sport im Alltag',
          karten: [
            { thema:'Sport im Alltag',
              punkte:['1 Thema vorstellen','2 Deine Erfahrungen','3 In deinem Heimatland','4 Vorteile, Nachteile, deine Meinung','5 Abschluss und Dank'],
              mustervortrag:'Heute geht es bei mir um Sport im Alltag — also nicht um Leistungssport, sondern um Bewegung neben Arbeit und Familie.\nIch habe lange gar keinen Sport gemacht und dann angefangen, mit dem Rad zur Arbeit zu fahren. Das sind zwanzig Minuten pro Strecke, und ich merke seit einem Jahr wirklich einen Unterschied, besonders beim Schlafen.\nIn meinem Heimatland gehen viele Leute weniger ins Fitnessstudio, dafür wird mehr zu Fuß gegangen und im Alltag getragen und geschleppt. Vereine wie hier gibt es kaum.\nDer Vorteil von Alltagssport ist, dass er nichts kostet und man keine extra Zeit braucht. Der Nachteil ist das Wetter — im November überlegt man es sich zweimal. Ich bin trotzdem überzeugt, dass eine kleine feste Gewohnheit mehr bringt als drei Monate Fitnessstudio und dann nichts mehr.\nDanke für eure Aufmerksamkeit.',
              musterantwort:'Bei Regen nehme ich den Bus, ohne schlechtes Gewissen. Sonst höre ich nämlich ganz auf.' }
          ],
          erklaerung:'„nicht …, sondern …" auf Folie eins grenzt das Thema ein und zeigt sofort sprachliches Können.' },

        { id:'b1s2r4', thema:'Leben in der Stadt oder auf dem Land',
          karten: [
            { thema:'Stadt oder Land',
              punkte:['1 Thema vorstellen','2 Deine Erfahrungen','3 In deinem Heimatland','4 Vorteile, Nachteile, deine Meinung','5 Abschluss und Dank'],
              mustervortrag:'Ich spreche heute über die Frage, ob man besser in der Stadt oder auf dem Land lebt. Die Frage stellt sich fast jeder irgendwann, spätestens wenn Kinder kommen.\nIch habe beides erlebt. Aufgewachsen bin ich in einem Dorf mit vierhundert Einwohnern, seit sechs Jahren wohne ich in Dortmund. Am Anfang war mir die Stadt zu laut, heute möchte ich den kurzen Weg zum Arzt nicht mehr missen.\nIn meinem Heimatland ziehen sehr viele junge Leute in die großen Städte, weil es auf dem Land kaum Arbeit gibt. Die Dörfer werden älter und leerer.\nDer Vorteil der Stadt ist, dass alles nah ist: Ärzte, Schulen, Kultur. Der Nachteil sind die Mieten und der Lärm. Auf dem Land ist es umgekehrt. Für mich persönlich überwiegt im Moment die Stadt, aber ich kann mir vorstellen, später wieder aufs Land zu ziehen.\nVielen Dank — ich bin gespannt auf eure Fragen.',
              musterantwort:'Was ich am meisten vermisse, ist die Ruhe am Abend. Und dass man jeden im Dorf gekannt hat.' }
          ],
          erklaerung:'„Für mich persönlich überwiegt …" ist eine sehr gute Formel für Folie vier: abwägen und trotzdem Stellung beziehen.' }
      ] },

    { nr:3, art:'rueckmeldung', name:'Über eine Präsentation sprechen',
      kurz:'Rückmeldung geben, nachfragen, selbst antworten',
      was:'Nach den Präsentationen sprecht ihr darüber. Du gibst eine kurze Rückmeldung, stellst eine Frage — und beantwortest die Frage zu deinem eigenen Vortrag.',
      tipp:'Lob konkret, nicht pauschal. Und die Frage muss wirklich aus dem Vortrag kommen.',
      zeichen:'🪞', farbe:'rot', punkte:6,
      runden: [
        { id:'b1s3r1', thema:'Nach der Präsentation über Ehrenamt',
          karten: [
            { thema:'Ehrenamt', gehoert:'Deine Partnerin hat über ehrenamtliche Arbeit gesprochen und von ihrer Zeit in einer Kleiderkammer erzählt.',
              punkte:['Rückmeldung','Frage stellen','Eigene Frage beantworten'],
              musterrueckmeldung:'Mir hat besonders gefallen, wie du von der Kleiderkammer erzählt hast — das war sehr anschaulich, man konnte es sich richtig vorstellen.',
              musterfrage:'Hattest du am Anfang Angst, dass dein Deutsch nicht reicht?',
              musterantwort:'Bei mir war das genauso. Ich habe mich ein halbes Jahr nicht getraut und ärgere mich heute darüber.' },
            { thema:'Ehrenamt', gehoert:'Dein Partner hat über die Freiwillige Feuerwehr in seinem Dorf gesprochen.',
              punkte:['Rückmeldung','Frage stellen','Eigene Frage beantworten'],
              musterrueckmeldung:'Ich fand interessant, dass bei euch fast jeder Zweite dabei ist. Das hätte ich nicht gedacht.',
              musterfrage:'Wie viel Zeit kostet das denn in der Woche?',
              musterantwort:'Nein, bei uns gibt es so etwas nicht. Deshalb war das für mich am Anfang hier ganz neu.' }
          ],
          erklaerung:'Konkret loben heißt: eine bestimmte Stelle nennen. „War gut" bringt keine Punkte.' },

        { id:'b1s3r2', thema:'Nach der Präsentation über Online-Einkauf',
          karten: [
            { thema:'Online einkaufen', gehoert:'Deine Partnerin hat über das Einkaufen im Internet gesprochen und ein Paket erwähnt, das nie ankam.',
              punkte:['Rückmeldung','Frage stellen','Eigene Frage beantworten'],
              musterrueckmeldung:'Dein Beispiel mit dem verschwundenen Paket war gut gewählt — das kennen wahrscheinlich alle hier.',
              musterfrage:'Hast du das Geld am Ende zurückbekommen?',
              musterantwort:'Ich bestelle eigentlich nur Sachen, die ich im Laden nicht bekomme. Kleidung kaufe ich lieber vor Ort.' },
            { thema:'Online einkaufen', gehoert:'Dein Partner hat gesagt, dass die kleinen Läden in der Innenstadt verschwinden.',
              punkte:['Rückmeldung','Frage stellen','Eigene Frage beantworten'],
              musterrueckmeldung:'Der Punkt mit den kleinen Läden hat mich zum Nachdenken gebracht, daran hatte ich vorher gar nicht gedacht.',
              musterfrage:'Kaufst du selbst bewusst in kleinen Geschäften ein?',
              musterantwort:'Ehrlich gesagt nicht immer. Ich nehme oft das Bequeme, obwohl ich es besser weiß.' }
          ],
          erklaerung:'„Das hat mich zum Nachdenken gebracht" ist eine starke Rückmeldung — und leicht zu merken.' },

        { id:'b1s3r3', thema:'Nach der Präsentation über Stadt und Land',
          karten: [
            { thema:'Stadt oder Land', gehoert:'Deine Partnerin ist in einem Dorf aufgewachsen und wohnt jetzt in der Stadt.',
              punkte:['Rückmeldung','Frage stellen','Eigene Frage beantworten'],
              musterrueckmeldung:'Ich fand gut, dass du beide Seiten beschrieben hast und nicht einfach gesagt hast, das eine sei besser.',
              musterfrage:'Würdest du wieder aufs Land ziehen, wenn du Kinder hättest?',
              musterantwort:'Ich bin in einer großen Stadt aufgewachsen und vermisse eigentlich nichts. Aber die Mieten machen mir Sorgen.' },
            { thema:'Stadt oder Land', gehoert:'Dein Partner hat erzählt, dass die Dörfer in seinem Heimatland immer leerer werden.',
              punkte:['Rückmeldung','Frage stellen','Eigene Frage beantworten'],
              musterrueckmeldung:'Der Teil über die leeren Dörfer war für mich das Interessanteste, so etwas kenne ich aus meiner Region auch.',
              musterfrage:'Glaubst du, dass sich das noch ändern lässt?',
              musterantwort:'Bei uns war es ähnlich. Nach der Schule sind fast alle weggegangen, ich auch.' }
          ],
          erklaerung:'Die Frage darf ruhig persönlich sein — solange sie an das anknüpft, was wirklich gesagt wurde.' }
      ] }
  ],

  /* ==========================================================
     STUFE 4 — die ganze Prüfung
     ========================================================== */

  laeufe: [

    { id:'b1spl1', titel:'Prüfungslauf 1', minuten:15,
      teile: [
        { nr:1, art:'planen', thema:'Ein Ausflug mit dem Kurs',
          karten: [
            { aufgabe:'Euer Deutschkurs möchte einen gemeinsamen Ausflug machen. Plant ihn.',
              punkte:['Wann?','Wohin?','Wie hinkommen?','Was kostet es?'],
              mustervorschlag:'Wollen wir den Ausflug an einem Samstag machen? Unter der Woche arbeiten zu viele. Ich würde den Zoo vorschlagen, da kann man auch bei schlechtem Wetter etwas machen. Mit der Straßenbahn sind wir in zwanzig Minuten da. Was hältst du davon?',
              mustereinigung:'Dann fahren wir am übernächsten Samstag um zehn Uhr mit der Straßenbahn zum Zoo, der Eintritt kostet mit Gruppenrabatt neun Euro, und jeder bringt sein Essen selbst mit.' }
          ] },
        { nr:2, art:'erzaehlen', thema:'Gesundes Essen',
          karten: [
            { thema:'Gesund essen',
              punkte:['1 Thema vorstellen','2 Deine Erfahrungen','3 In deinem Heimatland','4 Vorteile, Nachteile, deine Meinung','5 Abschluss und Dank'],
              mustervortrag:'Ich möchte heute über gesundes Essen sprechen. Damit meine ich nicht Diäten, sondern das, was man jeden Tag isst.\nIch habe lange sehr unregelmäßig gegessen, oft erst spät abends. Seit ich mir morgens etwas mitnehme, geht es mir deutlich besser, und ich spare nebenbei ziemlich viel Geld.\nIn meinem Heimatland wird meistens frisch gekocht, oft für die ganze Familie auf einmal. Fertiggerichte kannte ich vor meinem Umzug fast gar nicht.\nDer Vorteil von gesundem Essen ist klar: Man fühlt sich wacher und wird seltener krank. Der Nachteil ist die Zeit, denn Kochen dauert nun einmal. Ich finde, es lohnt sich trotzdem — man muss ja nicht jeden Tag aufwendig kochen, einmal am Wochenende vorkochen reicht oft schon.\nVielen Dank für eure Aufmerksamkeit.',
              musterantwort:'Am schwersten fällt mir der Abend. Wenn ich müde bin, greife ich doch zur Pizza.' }
          ] },
        { nr:3, art:'rueckmeldung', thema:'Nach den Präsentationen',
          karten: [
            { thema:'Gesund essen', gehoert:'Deine Partnerin hat über gesundes Essen gesprochen und erzählt, dass sie sich morgens etwas mitnimmt.',
              punkte:['Rückmeldung','Frage stellen','Eigene Frage beantworten'],
              musterrueckmeldung:'Mir hat gefallen, dass du einen ganz praktischen Tipp gegeben hast statt nur allgemeiner Ratschläge.',
              musterfrage:'Wie lange brauchst du morgens dafür?',
              musterantwort:'Bei mir scheitert es meistens am Einkaufen. Wenn nichts da ist, esse ich, was gerade da ist.' },
            { thema:'Gesund essen', gehoert:'Dein Partner hat gesagt, dass in seinem Heimatland fast immer frisch gekocht wird.',
              punkte:['Rückmeldung','Frage stellen','Eigene Frage beantworten'],
              musterrueckmeldung:'Der Vergleich mit deinem Heimatland war interessant — dass du Fertiggerichte vorher gar nicht kanntest, hätte ich nicht gedacht.',
              musterfrage:'Kochst du hier noch genauso wie zu Hause?',
              musterantwort:'Bei uns war es ähnlich, aber am Wochenende gab es immer etwas Besonderes. Das mache ich hier auch noch so.' }
          ] }
      ] },

    { id:'b1spl2', titel:'Prüfungslauf 2', minuten:15,
      teile: [
        { nr:1, art:'planen', thema:'Ein Geschenk für die Lehrerin',
          karten: [
            { aufgabe:'Euer Kurs endet. Ihr wollt der Lehrerin ein Geschenk machen. Plant das.',
              punkte:['Was schenken?','Wie viel Geld?','Wer sammelt ein?','Wann übergeben?'],
              mustervorschlag:'Ich schlage vor, dass wir etwas Gemeinsames kaufen statt vieler kleiner Sachen. Vielleicht ein Buch über unsere Stadt und dazu eine Karte, in die alle etwas schreiben. Fünf Euro pro Person würden dafür reichen. Wärst du einverstanden?',
              mustereinigung:'Gut, dann sammeln wir fünf Euro pro Person, du sprichst die anderen an, ich kaufe das Buch und die Karte, und wir übergeben es in der letzten Stunde am Freitag.' }
          ] },
        { nr:2, art:'erzaehlen', thema:'Handys im Alltag',
          karten: [
            { thema:'Das Handy im Alltag',
              punkte:['1 Thema vorstellen','2 Deine Erfahrungen','3 In deinem Heimatland','4 Vorteile, Nachteile, deine Meinung','5 Abschluss und Dank'],
              mustervortrag:'Mein Thema ist heute das Handy im Alltag — also wie sehr dieses kleine Gerät unseren Tag bestimmt.\nIch schaue morgens als Erstes darauf, obwohl ich weiß, dass das keine gute Idee ist. Vor einem halben Jahr habe ich es eine Woche lang abends in die Küche gelegt, und ich habe in dieser Woche wirklich besser geschlafen.\nIn meinem Heimatland ist das Handy noch wichtiger als hier, weil vieles nur darüber läuft — Bezahlen, Behörden, sogar der Arzttermin.\nDer große Vorteil ist, dass man alles dabei hat und immer erreichbar ist. Der Nachteil ist genau derselbe: Man ist eben immer erreichbar. Meiner Meinung nach kommt es nicht auf die Zeit an, sondern darauf, was man damit macht.\nDanke fürs Zuhören — habt ihr Fragen?',
              musterantwort:'Ganz ohne Handy könnte ich nicht mehr leben, ehrlich gesagt. Aber ich hätte gern mehr Kontrolle darüber.' }
          ] },
        { nr:3, art:'rueckmeldung', thema:'Nach den Präsentationen',
          karten: [
            { thema:'Das Handy im Alltag', gehoert:'Deine Partnerin hat erzählt, dass sie ihr Handy eine Woche lang abends in die Küche gelegt hat.',
              punkte:['Rückmeldung','Frage stellen','Eigene Frage beantworten'],
              musterrueckmeldung:'Der Versuch mit der Küche hat mir gut gefallen — das ist etwas, das man sofort ausprobieren kann.',
              musterfrage:'Hast du das danach beibehalten?',
              musterantwort:'Ich habe es nie ausprobiert, aber nach deinem Vortrag würde ich es gern einmal versuchen.' },
            { thema:'Das Handy im Alltag', gehoert:'Dein Partner hat gesagt, dass in seinem Heimatland fast alles über das Handy läuft.',
              punkte:['Rückmeldung','Frage stellen','Eigene Frage beantworten'],
              musterrueckmeldung:'Ich fand spannend, dass bei euch sogar Behördengänge über das Handy gehen. Hier ist das noch ganz anders.',
              musterfrage:'Was hat dich hier in Deutschland am meisten überrascht?',
              musterantwort:'Bei uns ging vieles schon vor Jahren digital. Deshalb war das Papier auf den Ämtern hier für mich ein kleiner Schock.' }
          ] }
      ] }
  ]

};
