/* ============================================================
   deutschoderwas club — SCHREIBEN B1 (Zertifikat B1)

   Aufbau nach der offiziellen Testbeschreibung: drei Teile,
   sechzig Minuten, drei Texte.

     Teil 1  private Nachricht an eine vertraute Person   ca. 80 Wörter
     Teil 2  Forumsbeitrag — die eigene Meinung           ca. 80 Wörter
     Teil 3  formelle E-Mail, höfliche Entschuldigung     ca. 40 Wörter

   Der Sprung von A1/A2: Es reicht nicht mehr, drei Punkte
   abzuhaken. Auf B1 wird bewertet, ob der Text zusammenhängt,
   ob die Anrede zum Anlass passt und ob du deine Meinung
   begründen kannst. Der häufigste Fehler ist die Verwechslung
   der Register — „du" an das Amt, „Sehr geehrte" an die Freundin.

   Pro Aufgabe gibt es zehn Punkte, drei Aufgaben also dreißig.
   Bewertet wird wie in der Prüfung: ab sechzig Prozent bestanden.

   muster ist eine Musterlösung zum Vergleichen, nicht zum
   Auswendiglernen. Die Lernenden schreiben selbst, vergleichen
   danach und haken ehrlich ab.
   ============================================================ */

window.SCHREIBEN_B1 = {

  niveau: 'B1',
  pruefung: 'Zertifikat B1',
  minuten: 60,
  punkte: 30,

  stufen: [
    { nr:1, titel:'Du oder Sie?', zeichen:'🎩',
      was:'Anrede, Grußformel und Ton — wer das verwechselt, verliert Punkte, auch bei fehlerfreier Grammatik.' },
    { nr:2, titel:'Sätze verbinden', zeichen:'🔗',
      was:'weil, deshalb, trotzdem, außerdem. Auf B1 wird bewertet, ob dein Text zusammenhängt.' },
    { nr:3, titel:'Die drei Aufgabentypen', zeichen:'🎯',
      was:'Jeder Prüfungsteil einzeln geübt — mit Aufgabe, Musterlösung und Selbstcheck.' },
    { nr:4, titel:'Die ganze Prüfung', zeichen:'⏱️',
      was:'Alle drei Texte hintereinander, sechzig Minuten mit Uhr — wie am Prüfungstag.' }
  ],

  /* ==========================================================
     STUFE 1 und 2 — Übungen vor den echten Schreibaufgaben
     ========================================================== */

  bloecke: [

    { id:'b1s1b1', stufe:1, titel:'Anrede und Gruß',
      kurz:'Der erste und der letzte Satz entscheiden über den Ton',
      ziel:'Nach diesem Block wählst du sicher zwischen privat und förmlich — in beide Richtungen.',
      zeichen:'🎩', farbe:'turq',
      aufgaben: [
        { art:'wahl', frage:'Du schreibst deiner Freundin Lena. Welche Anrede passt?',
          opt:['Sehr geehrte Frau Lena,','Liebe Lena,','Guten Tag Lena,'],
          loesung:1,
          erklaerung:'Bei Freunden immer „Liebe/Lieber" plus Vorname. „Sehr geehrte" wäre steif und in der Prüfung ein Fehler.' },
        { art:'wahl', frage:'Du schreibst an das Bürgeramt und kennst keinen Namen.',
          opt:['Sehr geehrte Damen und Herren,','Hallo zusammen,','Liebes Bürgeramt,'],
          loesung:0,
          erklaerung:'Ohne Namen ist „Sehr geehrte Damen und Herren" die einzige richtige Form.' },
        { art:'wahl', frage:'Du schreibst deinem Chef, Herrn Weigel, den du seit Jahren kennst und duzt.',
          opt:['Sehr geehrter Herr Weigel,','Lieber Herr Weigel,','Hallo Weigel,'],
          loesung:1,
          erklaerung:'„Lieber Herr" ist die Zwischenform: freundlich, aber respektvoll. Genau richtig bei bekannten Vorgesetzten.' },
        { art:'wahl', frage:'Welcher Gruß passt unter eine formelle E-Mail?',
          opt:['Liebe Grüße','Mit freundlichen Grüßen','Bis bald'],
          loesung:1,
          erklaerung:'„Mit freundlichen Grüßen" ist die Standardformel im förmlichen Schriftverkehr.' },
        { art:'wahl', frage:'Welcher Gruß passt unter eine Nachricht an einen Freund?',
          opt:['Hochachtungsvoll','Viele Grüße','Mit vorzüglicher Hochachtung'],
          loesung:1,
          erklaerung:'„Viele Grüße" oder „Liebe Grüße" — beides geht. Die anderen beiden sind veraltet und viel zu förmlich.' },
        { art:'wahl', frage:'Nach der Anrede „Liebe Lena," — wie geht es weiter?',
          opt:['Wie geht es dir?','wie geht es dir?','Wie Geht Es Dir?'],
          loesung:1,
          erklaerung:'Nach dem Komma der Anrede geht es klein weiter. Ein Klassiker unter den Fehlern.' },
        { art:'wahl', frage:'Du schreibst an eine Firma. Wie sprichst du die Leserin an?',
          opt:['du','Sie','ihr'],
          loesung:1,
          erklaerung:'Im förmlichen Text durchgehend „Sie", und zwar großgeschrieben.' },
        { art:'wahl', frage:'Welche Betreffzeile ist für eine formelle E-Mail am besten?',
          opt:['Hallo!','Frage','Absage für den Termin am 14. Mai'],
          loesung:2,
          erklaerung:'Der Betreff soll konkret sagen, worum es geht — am besten mit Datum.' },
        { art:'wahl', frage:'Du hast im Forum geschrieben. Wie schließt du deinen Beitrag am besten ab?',
          opt:['Mit freundlichen Grüßen, Ihre Maria Schulz','Was meint ihr dazu?','Hochachtungsvoll'],
          loesung:1,
          erklaerung:'Ein Forumsbeitrag lebt von der Rückfrage an die anderen. Formelle Grußformeln wirken dort falsch.' },
        { art:'wahl', frage:'Wo steht in einer förmlichen E-Mail dein Name?',
          opt:['Nur im Betreff.','Nach der Grußformel am Ende.','Gar nicht.'],
          loesung:1,
          erklaerung:'Ohne Namen am Ende weiß niemand, wer geschrieben hat — das kostet in der Prüfung Punkte.' }
      ] },

    { id:'b1s1b2', stufe:1, titel:'Höflich formulieren',
      kurz:'Bitten, absagen, sich entschuldigen — ohne unhöflich zu klingen',
      ziel:'Nach diesem Block schreibst du Absagen und Bitten so, wie man es in Deutschland erwartet.',
      zeichen:'🙏', farbe:'turq',
      aufgaben: [
        { art:'wahl', frage:'Du kannst nicht zu einem Termin kommen. Wie schreibst du das höflich?',
          opt:['Ich komme nicht.','Leider kann ich den Termin nicht wahrnehmen.','Ich habe keine Lust.'],
          loesung:1,
          erklaerung:'„leider" und „wahrnehmen" machen aus der Absage eine höfliche Absage.' },
        { art:'wahl', frage:'Du möchtest einen neuen Termin. Welche Formulierung passt?',
          opt:['Geben Sie mir einen neuen Termin.','Wäre ein Termin nächste Woche möglich?','Ich will nächste Woche kommen.'],
          loesung:1,
          erklaerung:'Die Frage im Konjunktiv („wäre") ist die höflichste Form einer Bitte.' },
        { art:'wahl', frage:'Wie entschuldigst du dich schriftlich am besten?',
          opt:['Sorry.','Ich bitte um Entschuldigung für die Unannehmlichkeiten.','Das war nicht meine Schuld.'],
          loesung:1,
          erklaerung:'„Ich bitte um Entschuldigung" ist die Standardformel im förmlichen Text.' },
        { art:'wahl', frage:'Du bittest um eine Auskunft. Welcher Satz ist am höflichsten?',
          opt:['Könnten Sie mir bitte mitteilen, wann der Kurs beginnt?','Sagen Sie mir, wann der Kurs beginnt.','Wann beginnt der Kurs???'],
          loesung:0,
          erklaerung:'„Könnten Sie bitte" plus Nebensatz — höflicher geht es kaum.' },
        { art:'wahl', frage:'Du sagst einer Freundin ab. Was passt?',
          opt:['Es tut mir echt leid, aber ich schaffe es am Samstag nicht.','Ich bedauere außerordentlich, Ihrer Einladung nicht folgen zu können.','Komme nicht.'],
          loesung:0,
          erklaerung:'Privat darf es locker sein — aber ein „es tut mir leid" gehört dazu.' },
        { art:'wahl', frage:'Wie kündigst du an, dass du dich meldest?',
          opt:['Ich melde mich bei Ihnen.','Sie hören von mir.','Melden Sie sich.'],
          loesung:0,
          erklaerung:'„Sie hören von mir" klingt fast drohend, „Melden Sie sich" schiebt die Arbeit weiter.' },
        { art:'wahl', frage:'Welcher Satz bedankt sich vorab am besten?',
          opt:['Danke im Voraus für Ihre Mühe.','Danke schon mal.','Ich erwarte Ihre Antwort.'],
          loesung:0,
          erklaerung:'„im Voraus" heißt: bevor etwas passiert ist. Eine feste Wendung im Schriftverkehr.' },
        { art:'wahl', frage:'Du willst einen Vorschlag machen. Welche Form passt förmlich?',
          opt:['Wir könnten uns am Dienstag treffen.','Wir treffen uns Dienstag.','Dienstag!'],
          loesung:0,
          erklaerung:'Der Konjunktiv „könnten" macht daraus einen Vorschlag statt einer Ansage.' },
        { art:'wahl', frage:'Was gehört NICHT in eine formelle E-Mail?',
          opt:['Eine Betreffzeile.','Ein Emoji.','Eine Grußformel.'],
          loesung:1,
          erklaerung:'Emojis sind privat in Ordnung, im förmlichen Text nicht.' },
        { art:'wahl', frage:'Wie beginnst du eine Bitte, ohne gleich zur Sache zu kommen?',
          opt:['Ich schreibe Ihnen, weil ich eine Frage zum Kurs habe.','Frage:','Also.'],
          loesung:0,
          erklaerung:'Ein Einleitungssatz nennt den Anlass — das erwartet man in einer förmlichen E-Mail.' }
      ] },

    { id:'b1s2b1', stufe:2, titel:'Sätze verbinden',
      kurz:'weil, deshalb, trotzdem, außerdem — und wo das Verb steht',
      ziel:'Nach diesem Block hängen deine Sätze zusammen, statt nebeneinanderzustehen.',
      zeichen:'🔗', farbe:'gold',
      aufgaben: [
        { art:'wahl', frage:'„Ich komme nicht, ___ ich krank bin."',
          opt:['weil','deshalb','trotzdem'],
          loesung:0,
          erklaerung:'„weil" leitet den Grund ein, und das Verb rutscht ans Ende: … weil ich krank bin.' },
        { art:'wahl', frage:'„Ich bin krank, ___ komme ich nicht."',
          opt:['weil','deshalb','obwohl'],
          loesung:1,
          erklaerung:'Nach „deshalb" kommt sofort das Verb: deshalb komme ich.' },
        { art:'wahl', frage:'„Es hat geregnet. ___ sind wir spazieren gegangen."',
          opt:['Deshalb','Trotzdem','Weil'],
          loesung:1,
          erklaerung:'„trotzdem" zeigt den Widerspruch: obwohl es geregnet hat.' },
        { art:'wahl', frage:'„Der Kurs ist günstig. ___ liegt er direkt bei mir um die Ecke."',
          opt:['Außerdem','Trotzdem','Deshalb'],
          loesung:0,
          erklaerung:'„außerdem" fügt ein zweites Argument in dieselbe Richtung hinzu.' },
        { art:'wahl', frage:'Welcher Satz ist richtig gebaut?',
          opt:['Ich weiß, dass er kommt morgen.','Ich weiß, dass er morgen kommt.','Ich weiß, dass kommt er morgen.'],
          loesung:1,
          erklaerung:'Nach „dass" steht das Verb ganz am Ende.' },
        { art:'wahl', frage:'„___ ich wenig Zeit habe, gehe ich jede Woche zum Kurs."',
          opt:['Obwohl','Weil','Deshalb'],
          loesung:0,
          erklaerung:'„obwohl" nennt einen Gegengrund — genau das passt hier.' },
        { art:'ordnen', frage:'Bau den Satz mit „weil".',
          teile:['Ich','kann','nicht kommen,','weil','ich','arbeiten','muss'],
          loesung:[0,1,2,3,4,5,6],
          erklaerung:'Bei zwei Verben im weil-Satz steht das gebeugte ganz hinten: … arbeiten muss.' },
        { art:'ordnen', frage:'Bau den Satz mit „deshalb".',
          teile:['Der Bus','fällt','aus,','deshalb','komme','ich','später'],
          loesung:[0,1,2,3,4,5,6],
          erklaerung:'Nach „deshalb" folgt sofort das Verb, dann erst das Subjekt.' },
        { art:'ordnen', frage:'Bau den höflichen Vorschlag.',
          teile:['Wir','könnten','uns','am Freitag','im Café','treffen'],
          loesung:[0,1,2,3,4,5],
          erklaerung:'Zeit vor Ort, das zweite Verb am Ende.' },
        { art:'ordnen', frage:'Bau den Meinungssatz mit Begründung.',
          teile:['Ich','finde','das','gut,','weil','alle','davon','profitieren'],
          loesung:[0,1,2,3,4,5,6,7],
          erklaerung:'Nach „weil" rutscht das Verb ans Ende: … profitieren.' }
      ] },

    { id:'b1s2b2', stufe:2, titel:'Meinung schreiben',
      kurz:'Der Baukasten für Teil zwei: These, Grund, Beispiel, Frage',
      ziel:'Nach diesem Block schreibst du einen Forumsbeitrag, der begründet ist statt nur behauptet.',
      zeichen:'💬', farbe:'gold',
      aufgaben: [
        { art:'wahl', frage:'Womit beginnst du einen Forumsbeitrag am besten?',
          opt:['Sehr geehrte Damen und Herren,','Ich habe den Beitrag gelesen und finde das Thema wichtig.','Hallo, ich bin neu hier.'],
          loesung:1,
          erklaerung:'Ein Bezug zum Thema zeigt sofort, dass du zur Sache schreibst.' },
        { art:'wahl', frage:'Welcher Satz nennt eine Meinung mit Begründung?',
          opt:['Ich finde das schlecht.','Ich finde das schlecht, weil viele Familien sich das nicht leisten können.','Das ist einfach so.'],
          loesung:1,
          erklaerung:'Ohne „weil" ist es nur eine Behauptung — in Teil zwei kostet das Punkte.' },
        { art:'wahl', frage:'Wie leitest du ein Beispiel aus deinem Leben ein?',
          opt:['Bei mir zu Hause ist es zum Beispiel so, dass …','Man sagt ja immer …','Wissenschaftler haben bewiesen, dass …'],
          loesung:0,
          erklaerung:'Ein eigenes Beispiel wirkt echt und ist leicht zu schreiben. Erfundene Studien wirken schnell hohl.' },
        { art:'wahl', frage:'Welche Wendung zeigt, dass du beide Seiten siehst?',
          opt:['Einerseits … andererseits …','Auf jeden Fall …','Ganz sicher …'],
          loesung:0,
          erklaerung:'Abwägen zeigt Sprachvermögen — das wird auf B1 positiv bewertet.' },
        { art:'wahl', frage:'Wie beendest du einen Forumsbeitrag gut?',
          opt:['Mit einer Frage an die anderen.','Mit „Mit freundlichen Grüßen".','Abrupt, mitten im Satz.'],
          loesung:0,
          erklaerung:'Die Rückfrage gehört zur Textsorte Forum und rundet den Beitrag ab.' },
        { art:'wahl', frage:'Wie viele Wörter soll dein Beitrag in Teil zwei ungefähr haben?',
          opt:['Etwa 30.','Etwa 80.','Mindestens 200.'],
          loesung:1,
          erklaerung:'Rund achtzig Wörter. Deutlich weniger gilt als unvollständig, viel mehr kostet nur Zeit.' },
        { art:'wahl', frage:'Was ist in Teil zwei am wichtigsten?',
          opt:['Möglichst schwierige Wörter.','Eine klare Meinung mit Begründung.','Möglichst lange Sätze.'],
          loesung:1,
          erklaerung:'Bewertet wird, ob man deinen Standpunkt versteht — nicht, wie kompliziert du schreibst.' },
        { art:'ordnen', frage:'Bau den Meinungseinstieg.',
          teile:['Meiner Meinung nach','sollte','man','das','anders','regeln'],
          loesung:[0,1,2,3,4,5],
          erklaerung:'Steht etwas anderes vorn, folgt sofort das Verb: Meiner Meinung nach sollte man …' },
        { art:'ordnen', frage:'Bau das abwägende Satzpaar.',
          teile:['Einerseits','ist','es','praktisch,','andererseits','kostet','es','viel Geld'],
          loesung:[0,1,2,3,4,5,6,7],
          erklaerung:'Nach beiden Wörtern steht jeweils sofort das Verb.' },
        { art:'ordnen', frage:'Bau die Schlussfrage.',
          teile:['Wie','seht','ihr','das','in','euren','Familien'],
          loesung:[0,1,2,3,4,5,6],
          erklaerung:'Im Forum duzt man die Gruppe: „seht ihr".' }
      ] }
  ],

  /* ==========================================================
     STUFE 3 — die echten Prüfungsteile
     ========================================================== */

  teile: [

    { nr:1, art:'mitteilung', name:'Private Nachricht',
      kurz:'An eine vertraute Person, etwa 80 Wörter',
      was:'Du schreibst einer Freundin, einem Freund oder einem Familienmitglied. Drei Punkte sind vorgegeben, alle müssen vorkommen.',
      tipp:'Du-Form, lockerer Ton, aber vollständige Sätze. Schreib zuerst Anrede und Gruß hin, dann die drei Punkte dazwischen.',
      zeichen:'✉️', farbe:'turq', punkte:10,
      runden: [
        { id:'s1r1', titel:'Runde 1',
          aufgaben: [
            { situation:'Eine Freundin, Nadja, hat dich zu ihrem Umzug am Samstag eingeladen. Du kannst nicht kommen. Schreib ihr eine Nachricht.',
              sorte:'email', an:'Nadja', betreff:'Samstag',
              punkte: [
                { nr:1, was:'Absage', hinweis:'Sag, dass du am Samstag nicht kommen kannst.' },
                { nr:2, was:'Grund', hinweis:'Erkläre, warum nicht.' },
                { nr:3, was:'Angebot', hinweis:'Biete an, wie du trotzdem helfen kannst.' }
              ],
              muster:'Liebe Nadja,\nvielen Dank für die Einladung, ich hätte dir wirklich gern geholfen. Leider muss ich am Samstag arbeiten, meine Kollegin ist krank geworden und ich kann nicht absagen.\nDafür hätte ich einen Vorschlag: Am Sonntag habe ich den ganzen Tag frei. Ich könnte dir beim Auspacken helfen und Kartons wegbringen. Außerdem kann ich am Freitagabend schon Umzugskartons vorbeibringen, ich habe noch zehn Stück im Keller.\nSag mir einfach Bescheid, was dir lieber ist.\nLiebe Grüße\nMarta',
              woerter:80,
              hilfen:['Vielen Dank für die Einladung …','Leider muss ich …','Dafür könnte ich …','Sag mir einfach Bescheid.'] },

            { situation:'Dein Freund Tobias hat gerade eine neue Stelle bekommen. Schreib ihm eine Nachricht.',
              sorte:'email', an:'Tobias', betreff:'Glückwunsch!',
              punkte: [
                { nr:1, was:'Glückwunsch', hinweis:'Gratuliere ihm zur neuen Stelle.' },
                { nr:2, was:'Nachfrage', hinweis:'Frag etwas über die neue Arbeit.' },
                { nr:3, was:'Vorschlag', hinweis:'Schlag ein Treffen vor, um zu feiern.' }
              ],
              muster:'Lieber Tobias,\nherzlichen Glückwunsch zu deiner neuen Stelle! Ich habe mich riesig für dich gefreut, als ich es gehört habe. Du hast lange gesucht, das hast du dir wirklich verdient.\nErzähl mal: Wann fängst du an, und musst du dafür umziehen? Ich hoffe nicht, ich hätte dich gern weiter in der Nähe.\nWollen wir das nächste Woche feiern? Ich hätte am Freitagabend Zeit und würde uns einen Tisch in unserem Lieblingsitaliener reservieren.\nMeld dich!\nViele Grüße\nSelin',
              woerter:80,
              hilfen:['Herzlichen Glückwunsch zu …','Erzähl mal: …','Wollen wir … feiern?','Meld dich!'] }
          ] },

        { id:'s1r2', titel:'Runde 2',
          aufgaben: [
            { situation:'Du warst eine Woche krank und hast den Deutschkurs verpasst. Schreib deiner Kurskollegin Bianca.',
              sorte:'email', an:'Bianca', betreff:'Kurs letzte Woche',
              punkte: [
                { nr:1, was:'Grund', hinweis:'Erkläre, warum du gefehlt hast.' },
                { nr:2, was:'Bitte', hinweis:'Bitte sie um die Unterlagen.' },
                { nr:3, was:'Gegenleistung', hinweis:'Biete etwas dafür an.' }
              ],
              muster:'Liebe Bianca,\nletzte Woche war ich leider krank und konnte nicht zum Kurs kommen. Ich hatte eine starke Erkältung und lag drei Tage im Bett.\nJetzt geht es mir wieder besser, aber mir fehlt natürlich alles vom Unterricht. Könntest du mir bitte deine Notizen und die Arbeitsblätter schicken? Ein Foto reicht völlig.\nDafür lade ich dich am Donnerstag nach dem Kurs auf einen Kaffee ein. Und wenn du mal etwas verpasst, mache ich dasselbe für dich.\nVielen Dank schon mal!\nLiebe Grüße\nOmar',
              woerter:80,
              hilfen:['Leider war ich krank …','Könntest du mir bitte …','Dafür lade ich dich …','Vielen Dank schon mal!'] },

            { situation:'Deine Cousine Elif besucht dich nächsten Monat zum ersten Mal in Deutschland. Schreib ihr.',
              sorte:'email', an:'Elif', betreff:'Dein Besuch',
              punkte: [
                { nr:1, was:'Freude', hinweis:'Sag, dass du dich auf den Besuch freust.' },
                { nr:2, was:'Organisation', hinweis:'Kläre eine praktische Frage zur Anreise.' },
                { nr:3, was:'Programm', hinweis:'Schlag vor, was ihr zusammen macht.' }
              ],
              muster:'Liebe Elif,\nich freue mich riesig, dass du endlich kommst! Wir haben uns fast zwei Jahre nicht gesehen.\nEine Frage zur Anreise: Kommst du mit dem Zug oder fliegst du? Wenn du fliegst, hole ich dich am Flughafen ab, das sind von mir aus nur vierzig Minuten. Schick mir einfach die Ankunftszeit.\nFür das Wochenende habe ich schon Ideen: Samstag könnten wir in die Stadt gehen und abends bei mir kochen, und am Sonntag zeige ich dir den See. Wenn du etwas anderes möchtest, sag ruhig Bescheid.\nBis bald!\nDeine Yasemin',
              woerter:80,
              hilfen:['Ich freue mich riesig, dass …','Eine Frage zur Anreise: …','Für das Wochenende habe ich Ideen: …','Bis bald!'] }
          ] },

        { id:'s1r3', titel:'Runde 3',
          aufgaben: [
            { situation:'Du hast dir von deinem Nachbarn Herrn Pohl, den du duzt, eine Bohrmaschine geliehen und sie beschädigt. Schreib ihm.',
              sorte:'email', an:'Jens Pohl', betreff:'Deine Bohrmaschine',
              punkte: [
                { nr:1, was:'Schaden', hinweis:'Sag, was passiert ist.' },
                { nr:2, was:'Entschuldigung', hinweis:'Entschuldige dich dafür.' },
                { nr:3, was:'Lösung', hinweis:'Sag, wie du das wiedergutmachen willst.' }
              ],
              muster:'Lieber Jens,\nich muss dir leider etwas Unangenehmes schreiben. Beim Bohren gestern ist mir deine Maschine heruntergefallen, und jetzt lässt sich der Bohrer nicht mehr richtig festmachen.\nDas tut mir wirklich sehr leid. Ich war unvorsichtig, das hätte nicht passieren dürfen.\nIch habe schon in einer Werkstatt angerufen, die Reparatur kostet etwa vierzig Euro und dauert drei Tage. Die zahle ich natürlich. Falls sie sich nicht lohnt, kaufe ich dir eine neue.\nSag mir bitte, was dir lieber ist.\nViele Grüße\nDaniel',
              woerter:80,
              hilfen:['Ich muss dir leider etwas Unangenehmes schreiben.','Das tut mir wirklich sehr leid.','Ich zahle natürlich …','Sag mir bitte, was dir lieber ist.'] },

            { situation:'Deine Freundin Katja hat dir geschrieben, dass sie sich in ihrer neuen Stadt einsam fühlt. Antworte ihr.',
              sorte:'email', an:'Katja', betreff:'Deine Nachricht',
              punkte: [
                { nr:1, was:'Mitgefühl', hinweis:'Zeig, dass du sie verstehst.' },
                { nr:2, was:'Eigene Erfahrung', hinweis:'Erzähl von einer ähnlichen Situation bei dir.' },
                { nr:3, was:'Rat', hinweis:'Gib ihr einen konkreten Tipp.' }
              ],
              muster:'Liebe Katja,\ndeine Nachricht hat mich berührt. Ich kann gut verstehen, dass du dich einsam fühlst — eine neue Stadt ist am Anfang einfach hart, auch wenn die Wohnung schön ist.\nMir ging es vor drei Jahren genauso, als ich nach Leipzig gezogen bin. Ein halbes Jahr lang kannte ich niemanden außer den Kollegen.\nWas mir geholfen hat, war ein Verein. Ich bin einfach zum Volleyball gegangen, obwohl ich es kaum konnte. Nach zwei Monaten hatte ich dort Freunde. Vielleicht gibt es bei dir etwas Ähnliches?\nRuf mich gern an, wenn du reden willst.\nLiebe Grüße\nAnne',
              woerter:80,
              hilfen:['Ich kann gut verstehen, dass …','Mir ging es genauso, als …','Was mir geholfen hat, war …','Ruf mich gern an.'] }
          ] }
      ] },

    { nr:2, art:'mitteilung', name:'Meinung im Forum',
      kurz:'Ein Forumsbeitrag mit eigener Meinung, etwa 80 Wörter',
      was:'Du liest eine Frage in einem Internetforum und schreibst deine Meinung dazu. Wichtig sind Standpunkt, Begründung und ein Beispiel.',
      tipp:'Der Baukasten: Bezug zum Thema, deine Meinung, Begründung mit weil, ein Beispiel aus deinem Leben, Frage an die anderen.',
      zeichen:'💬', farbe:'gold', punkte:10,
      runden: [
        { id:'s2r1', titel:'Runde 1',
          aufgaben: [
            { situation:'Im Forum „Leben in der Stadt" wird diskutiert: Sollten Innenstädte autofrei werden? Schreib deinen Beitrag.',
              sorte:'forum', an:'Forum „Leben in der Stadt"', betreff:'Autofreie Innenstadt — was meint ihr?',
              punkte: [
                { nr:1, was:'Meinung', hinweis:'Sag klar, was du davon hältst.' },
                { nr:2, was:'Begründung', hinweis:'Begründe mit weil oder denn.' },
                { nr:3, was:'Beispiel', hinweis:'Nenn ein Beispiel aus deinem Alltag.' },
                { nr:4, was:'Frage', hinweis:'Frag die anderen nach ihrer Erfahrung.' }
              ],
              muster:'Ich habe den Beitrag gelesen und finde das Thema sehr wichtig.\nMeiner Meinung nach wären autofreie Innenstädte ein Gewinn, weil die Luft besser wird und man sich mit Kindern viel sicherer bewegen kann.\nBei uns wurde vor zwei Jahren die Hauptstraße gesperrt. Am Anfang haben alle geschimpft, heute sitzen dort abends Familien draußen und die Geschäfte laufen besser als vorher.\nAllerdings muss der Bus dann auch abends fahren, sonst funktioniert es nicht.\nWie ist das bei euch in der Stadt?',
              woerter:80,
              hilfen:['Meiner Meinung nach …','… weil …','Bei uns war es so, dass …','Wie ist das bei euch?'] },

            { situation:'Im Forum „Arbeit und Familie" fragt jemand: Soll man Kindern Taschengeld geben? Schreib deinen Beitrag.',
              sorte:'forum', an:'Forum „Arbeit und Familie"', betreff:'Taschengeld — ja oder nein?',
              punkte: [
                { nr:1, was:'Meinung', hinweis:'Nenn deinen Standpunkt.' },
                { nr:2, was:'Begründung', hinweis:'Begründe ihn.' },
                { nr:3, was:'Beispiel', hinweis:'Erzähl von dir oder deiner Familie.' },
                { nr:4, was:'Frage', hinweis:'Frag nach den Erfahrungen der anderen.' }
              ],
              muster:'Das Thema finde ich spannend, weil es bei uns zu Hause oft diskutiert wird.\nIch bin dafür, Kindern Taschengeld zu geben. Nur wer selbst über Geld entscheidet, lernt auch, damit umzugehen — das kann man nicht theoretisch beibringen.\nMein Sohn bekommt seit der dritten Klasse fünf Euro im Monat. Am Anfang war alles nach zwei Tagen weg. Inzwischen spart er sogar auf ein Fahrrad, und ich habe ihm nichts erklären müssen.\nWichtig finde ich nur, dass es nicht vom Verhalten abhängt.\nWie handhabt ihr das bei euren Kindern?',
              woerter:80,
              hilfen:['Ich bin dafür/dagegen, dass …','Nur wer …, lernt auch …','Bei uns ist es so, dass …','Wie handhabt ihr das?'] }
          ] },

        { id:'s2r2', titel:'Runde 2',
          aufgaben: [
            { situation:'Im Forum „Gesund leben" wird gefragt: Sollten Schulen nur noch gesundes Essen anbieten? Schreib deinen Beitrag.',
              sorte:'forum', an:'Forum „Gesund leben"', betreff:'Nur noch gesundes Essen in der Schule?',
              punkte: [
                { nr:1, was:'Meinung', hinweis:'Nenn deinen Standpunkt.' },
                { nr:2, was:'Begründung', hinweis:'Begründe ihn.' },
                { nr:3, was:'Gegenseite', hinweis:'Nenn auch ein Argument der anderen Seite.' },
                { nr:4, was:'Frage', hinweis:'Frag die anderen.' }
              ],
              muster:'Ich lese hier schon länger mit und möchte auch etwas dazu sagen.\nIch bin dafür, dass Schulen gesundes Essen anbieten, denn viele Kinder essen mittags nur dort warm. Wenn es an diesem einen Ort nur Pommes gibt, hilft das niemandem.\nAndererseits verstehe ich das Argument, dass Verbote oft das Gegenteil bewirken. Meine Tochter hat sich in der fünften Klasse jeden Tag heimlich Süßigkeiten gekauft, gerade weil es in der Schule nichts gab.\nVielleicht wäre eine Mischung besser.\nWas gibt es bei euch in der Mensa?',
              woerter:80,
              hilfen:['Ich bin dafür, dass …','… denn …','Andererseits verstehe ich, dass …','Was gibt es bei euch?'] },

            { situation:'Im Forum „Deutsch lernen" fragt jemand: Braucht man einen Sprachkurs oder lernt man besser allein? Schreib deinen Beitrag.',
              sorte:'forum', an:'Forum „Deutsch lernen"', betreff:'Kurs oder allein lernen?',
              punkte: [
                { nr:1, was:'Meinung', hinweis:'Was hältst du für besser?' },
                { nr:2, was:'Begründung', hinweis:'Begründe deine Meinung.' },
                { nr:3, was:'Erfahrung', hinweis:'Erzähl von deinem eigenen Weg.' },
                { nr:4, was:'Frage', hinweis:'Frag die anderen nach ihren Erfahrungen.' }
              ],
              muster:'Die Frage kenne ich gut, ich habe beides ausprobiert.\nFür mich ist der Kurs klar besser, weil man dort sprechen muss. Allein liest und hört man viel, aber den Mund macht man nicht auf — und genau das ist ja das Schwierige.\nIch habe ein Jahr mit einer App gelernt und konnte danach kaum einen Satz sagen. Nach drei Monaten Kurs war das anders, obwohl ich weniger Zeit investiert habe.\nAm besten ist wahrscheinlich beides zusammen: Kurs für das Sprechen, allein für den Wortschatz.\nWie habt ihr es gemacht?',
              woerter:80,
              hilfen:['Für mich ist … besser, weil …','Ich habe die Erfahrung gemacht, dass …','Am besten ist wahrscheinlich …','Wie habt ihr es gemacht?'] }
          ] },

        { id:'s2r3', titel:'Runde 3',
          aufgaben: [
            { situation:'Im Forum „Wohnen" wird diskutiert: Ist Homeoffice besser als das Büro? Schreib deinen Beitrag.',
              sorte:'forum', an:'Forum „Wohnen und Arbeiten"', betreff:'Homeoffice oder Büro?',
              punkte: [
                { nr:1, was:'Meinung', hinweis:'Nenn deinen Standpunkt.' },
                { nr:2, was:'Vorteil', hinweis:'Nenn einen konkreten Vorteil.' },
                { nr:3, was:'Nachteil', hinweis:'Nenn auch einen Nachteil.' },
                { nr:4, was:'Frage', hinweis:'Frag die anderen.' }
              ],
              muster:'Ich arbeite seit vier Jahren teilweise zu Hause und finde das Thema deshalb interessant.\nMeiner Erfahrung nach ist eine Mischung am besten. Der größte Vorteil ist für mich der Weg: Ich spare täglich anderthalb Stunden und kann meine Tochter selbst von der Kita abholen.\nDer Nachteil ist die Einsamkeit. Manchmal spreche ich den ganzen Tag mit niemandem, und die kleinen Gespräche in der Küche fehlen mir wirklich.\nDeshalb gehe ich zweimal pro Woche ins Büro, freiwillig.\nWie viele Tage seid ihr zu Hause?',
              woerter:80,
              hilfen:['Meiner Erfahrung nach …','Der größte Vorteil ist …','Der Nachteil ist …','Wie ist das bei euch?'] },

            { situation:'Im Forum „Nachbarschaft" fragt jemand: Sollten Hunde in Mietwohnungen erlaubt sein? Schreib deinen Beitrag.',
              sorte:'forum', an:'Forum „Nachbarschaft"', betreff:'Hunde in Mietwohnungen',
              punkte: [
                { nr:1, was:'Meinung', hinweis:'Sag, was du davon hältst.' },
                { nr:2, was:'Begründung', hinweis:'Begründe deine Meinung.' },
                { nr:3, was:'Beispiel', hinweis:'Nenn ein Beispiel aus deinem Haus oder deiner Straße.' },
                { nr:4, was:'Frage', hinweis:'Frag die anderen nach ihrer Meinung.' }
              ],
              muster:'Ich wohne selbst zur Miete und habe dazu eine klare Meinung.\nHunde sollten grundsätzlich erlaubt sein, weil ein Tier für viele Menschen zur Familie gehört. Ein pauschales Verbot trifft oft genau die, die allein leben und den Hund am nötigsten hätten.\nIn unserem Haus wohnen zwei Hunde, und es gab noch nie Ärger. Probleme macht eher der Nachbar über mir, der nachts Musik hört.\nNatürlich muss man Rücksicht nehmen, das gilt aber für alle.\nWie ist die Regelung in euren Mietverträgen?',
              woerter:80,
              hilfen:['… sollten grundsätzlich erlaubt sein, weil …','Ein Verbot trifft oft …','In unserem Haus …','Wie ist das bei euch geregelt?'] }
          ] }
      ] },

    { nr:3, art:'mitteilung', name:'Formelle E-Mail',
      kurz:'Höflich und knapp an eine fremde Person, etwa 40 Wörter',
      was:'Du schreibst an eine Firma, eine Schule oder eine Behörde. Kurz, höflich und mit Sie — meist eine Absage oder eine Bitte.',
      tipp:'Vierzig Wörter reichen. Anrede, Anlass, Grund, Bitte oder Vorschlag, Gruß. Keine Emojis, kein „du".',
      zeichen:'📮', farbe:'rot', punkte:10,
      runden: [
        { id:'s3r1', titel:'Runde 1',
          aufgaben: [
            { situation:'Du hast einen Termin bei der Zahnärztin Frau Dr. Ritter am Dienstag um zehn Uhr. Du kannst nicht kommen. Schreib eine formelle E-Mail.',
              sorte:'email', an:'Praxis Dr. Ritter', betreff:'Termin am Dienstag, 10 Uhr',
              punkte: [
                { nr:1, was:'Absage', hinweis:'Sag, dass du den Termin nicht wahrnehmen kannst.' },
                { nr:2, was:'Grund', hinweis:'Nenn kurz den Grund.' },
                { nr:3, was:'Bitte', hinweis:'Bitte um einen neuen Termin.' }
              ],
              muster:'Sehr geehrte Frau Dr. Ritter,\nleider kann ich meinen Termin am Dienstag um zehn Uhr nicht wahrnehmen, da ich an diesem Tag beruflich verreisen muss.\nKönnten Sie mir bitte einen neuen Termin in der nächsten Woche geben? Am Nachmittag wäre mir am liebsten.\nVielen Dank im Voraus.\nMit freundlichen Grüßen\nLaura Menzel',
              woerter:40,
              hilfen:['Sehr geehrte Frau …','Leider kann ich … nicht wahrnehmen, da …','Könnten Sie mir bitte …','Mit freundlichen Grüßen'] },

            { situation:'Du möchtest dich für einen Deutschkurs an der Volkshochschule anmelden und hast eine Frage zum Termin. Schreib eine formelle E-Mail.',
              sorte:'email', an:'Volkshochschule', betreff:'Frage zum Abendkurs B1',
              punkte: [
                { nr:1, was:'Anlass', hinweis:'Sag, warum du schreibst.' },
                { nr:2, was:'Frage', hinweis:'Stell deine konkrete Frage.' },
                { nr:3, was:'Bitte', hinweis:'Bitte um eine Antwort.' }
              ],
              muster:'Sehr geehrte Damen und Herren,\nich interessiere mich für den Abendkurs Deutsch B1, der im September beginnt.\nKönnten Sie mir bitte mitteilen, an welchen Wochentagen der Kurs stattfindet und ob noch Plätze frei sind?\nÜber eine kurze Rückmeldung würde ich mich sehr freuen.\nMit freundlichen Grüßen\nAmir Nasser',
              woerter:40,
              hilfen:['Ich interessiere mich für …','Könnten Sie mir bitte mitteilen, …','Über eine Rückmeldung würde ich mich freuen.','Mit freundlichen Grüßen'] }
          ] },

        { id:'s3r2', titel:'Runde 2',
          aufgaben: [
            { situation:'Du hast im Internet eine Lampe bestellt. Sie ist beschädigt angekommen. Schreib eine formelle E-Mail an den Shop.',
              sorte:'email', an:'Kundenservice Wohnlicht', betreff:'Beschädigte Lieferung, Bestellnummer 48219',
              punkte: [
                { nr:1, was:'Problem', hinweis:'Beschreibe kurz den Schaden.' },
                { nr:2, was:'Nachweis', hinweis:'Sag, dass du Fotos hast oder mitschickst.' },
                { nr:3, was:'Wunsch', hinweis:'Sag, was du möchtest.' }
              ],
              muster:'Sehr geehrte Damen und Herren,\nam Montag habe ich die bestellte Lampe erhalten. Leider ist der Glasschirm gesprungen, vermutlich beim Transport.\nFotos des Schadens habe ich angehängt.\nIch bitte Sie, mir kostenlos Ersatz zu schicken. Sollte das nicht möglich sein, hätte ich gern den Kaufpreis zurück.\nMit freundlichen Grüßen\nTobias Krenn',
              woerter:40,
              hilfen:['Leider ist … beschädigt.','Fotos habe ich angehängt.','Ich bitte Sie, …','Mit freundlichen Grüßen'] },

            { situation:'Dein Kind kann wegen Krankheit nicht am Schulausflug teilnehmen. Schreib eine formelle E-Mail an die Klassenlehrerin Frau Bergmann.',
              sorte:'email', an:'Frau Bergmann', betreff:'Ausflug am Freitag — Krankmeldung',
              punkte: [
                { nr:1, was:'Mitteilung', hinweis:'Sag, dass dein Kind nicht mitkommt.' },
                { nr:2, was:'Grund', hinweis:'Nenn den Grund.' },
                { nr:3, was:'Frage', hinweis:'Frag nach den bereits gezahlten Kosten.' }
              ],
              muster:'Sehr geehrte Frau Bergmann,\nleider kann meine Tochter Sara am Freitag nicht am Ausflug teilnehmen. Sie hat eine Grippe und muss noch einige Tage zu Hause bleiben.\nEine Frage hätte ich noch: Können wir den bereits gezahlten Beitrag zurückbekommen?\nVielen Dank für Ihr Verständnis.\nMit freundlichen Grüßen\nHalima Osman',
              woerter:40,
              hilfen:['Leider kann meine Tochter … nicht …','Sie hat …','Eine Frage hätte ich noch: …','Vielen Dank für Ihr Verständnis.'] }
          ] },

        { id:'s3r3', titel:'Runde 3',
          aufgaben: [
            { situation:'Du möchtest deinen Vertrag im Fitnessstudio kündigen. Schreib eine formelle E-Mail.',
              sorte:'email', an:'Fitnessstudio Aktiv', betreff:'Kündigung Mitgliedsnummer 3157',
              punkte: [
                { nr:1, was:'Kündigung', hinweis:'Sag klar, dass du kündigst.' },
                { nr:2, was:'Zeitpunkt', hinweis:'Nenn den Termin, zu dem du kündigst.' },
                { nr:3, was:'Bitte', hinweis:'Bitte um eine Bestätigung.' }
              ],
              muster:'Sehr geehrte Damen und Herren,\nhiermit kündige ich meinen Vertrag mit der Mitgliedsnummer dreitausendeinhundertsiebenundfünfzig zum nächstmöglichen Termin, spätestens zum einunddreißigsten Dezember.\nBitte bestätigen Sie mir die Kündigung schriftlich und teilen Sie mir das genaue Enddatum mit.\nMit freundlichen Grüßen\nNina Falke',
              woerter:40,
              hilfen:['Hiermit kündige ich …','… zum nächstmöglichen Termin.','Bitte bestätigen Sie mir …','Mit freundlichen Grüßen'] },

            { situation:'Du hast dich auf eine Wohnung beworben und möchtest einen Besichtigungstermin. Schreib eine formelle E-Mail an die Hausverwaltung.',
              sorte:'email', an:'Hausverwaltung Steinbach', betreff:'Besichtigung Wohnung Lindenweg 4',
              punkte: [
                { nr:1, was:'Anlass', hinweis:'Nenn die Wohnung, um die es geht.' },
                { nr:2, was:'Bitte', hinweis:'Bitte um einen Besichtigungstermin.' },
                { nr:3, was:'Angabe', hinweis:'Sag, wann du Zeit hast.' }
              ],
              muster:'Sehr geehrte Damen und Herren,\nich habe Ihre Anzeige für die Zweizimmerwohnung im Lindenweg vier gelesen und interessiere mich sehr dafür.\nKönnten Sie mir bitte einen Besichtigungstermin anbieten? Ich bin werktags ab sechzehn Uhr und am Wochenende ganztägig erreichbar.\nÜber eine Antwort freue ich mich.\nMit freundlichen Grüßen\nPeter Lang',
              woerter:40,
              hilfen:['Ich habe Ihre Anzeige … gelesen.','Könnten Sie mir bitte … anbieten?','Ich bin … erreichbar.','Mit freundlichen Grüßen'] }
          ] }
      ] }
  ],

  /* ==========================================================
     STUFE 4 — die ganze Prüfung
     ========================================================== */

  laeufe: [

    { id:'b1sl1', titel:'Prüfungslauf 1', minuten:60,
      aufgaben: [
        { situation:'TEIL 1 — Ihre Freundin Ronja hat Ihnen geschrieben, dass sie am Wochenende in Ihre Stadt kommt. Antworten Sie ihr.',
          sorte:'email', an:'Ronja', betreff:'Dein Besuch am Wochenende',
          punkte: [
            { nr:1, was:'Reaktion', hinweis:'Reagiere auf die Nachricht.' },
            { nr:2, was:'Organisation', hinweis:'Kläre, wann und wo ihr euch trefft.' },
            { nr:3, was:'Vorschlag', hinweis:'Schlag vor, was ihr unternehmt.' }
          ],
          muster:'Liebe Ronja,\nwie schön, dass du am Wochenende kommst! Ich habe mich richtig gefreut, als ich deine Nachricht gelesen habe.\nWann genau bist du da? Ich hole dich gern am Bahnhof ab, wenn du mir die Ankunftszeit schickst. Übernachten kannst du selbstverständlich bei mir, das Sofa ist frei.\nAm Samstag könnten wir auf den Markt gehen und danach an den See fahren. Sonntag hätte ich Lust auf einen langen Brunch. Wenn du etwas anderes vorhast, sag einfach Bescheid.\nBis Samstag!\nLiebe Grüße\nJule',
          woerter:80,
          hilfen:['Wie schön, dass du …','Wann genau bist du da?','Am Samstag könnten wir …','Bis bald!'] },

        { situation:'TEIL 2 — Im Forum „Alltag" wird gefragt: Sollten alle Menschen einmal im Leben im Ausland gelebt haben? Schreiben Sie Ihre Meinung.',
          sorte:'forum', an:'Forum „Alltag"', betreff:'Einmal im Ausland leben — muss das sein?',
          punkte: [
            { nr:1, was:'Meinung', hinweis:'Sag klar, was du denkst.' },
            { nr:2, was:'Begründung', hinweis:'Begründe deine Meinung.' },
            { nr:3, was:'Beispiel', hinweis:'Nenn ein Beispiel aus deinem Leben.' },
            { nr:4, was:'Frage', hinweis:'Frag die anderen.' }
          ],
          muster:'Das Thema betrifft mich persönlich, deshalb schreibe ich gern etwas dazu.\nIch finde, man sollte niemanden dazu verpflichten, aber empfehlen würde ich es jedem. Im Ausland zu leben verändert den Blick auf das eigene Land, weil plötzlich alles erklärt werden muss, was vorher selbstverständlich war.\nIch bin vor fünf Jahren aus Serbien nach Deutschland gekommen. Am Anfang war es schwer, aber ich habe gelernt, mich in einer fremden Sprache durchzusetzen — das hätte ich zu Hause nie geübt.\nAllerdings kann sich das nicht jeder leisten.\nWie seht ihr das?',
          woerter:80,
          hilfen:['Ich finde, dass …','… weil …','Ich selbst habe …','Wie seht ihr das?'] },

        { situation:'TEIL 3 — Sie haben einen Sprachkurs gebucht, können aber am ersten Termin nicht teilnehmen. Schreiben Sie eine formelle E-Mail an die Sprachschule.',
          sorte:'email', an:'Sprachschule Lingua', betreff:'Erster Kurstermin am 3. September',
          punkte: [
            { nr:1, was:'Mitteilung', hinweis:'Sag, dass du am ersten Termin fehlst.' },
            { nr:2, was:'Grund', hinweis:'Nenn den Grund.' },
            { nr:3, was:'Bitte', hinweis:'Bitte darum, trotzdem im Kurs zu bleiben.' }
          ],
          muster:'Sehr geehrte Damen und Herren,\nleider kann ich am ersten Kurstermin am dritten September nicht teilnehmen, da ich an diesem Tag beruflich im Ausland bin.\nIch möchte den Kurs aber unbedingt besuchen und bitte Sie, meinen Platz zu behalten. Ab dem zweiten Termin bin ich regelmäßig dabei.\nVielen Dank für Ihr Verständnis.\nMit freundlichen Grüßen\nFatima Baran',
          woerter:40,
          hilfen:['Leider kann ich … nicht teilnehmen, da …','Ich bitte Sie, …','Vielen Dank für Ihr Verständnis.','Mit freundlichen Grüßen'] }
      ] },

    { id:'b1sl2', titel:'Prüfungslauf 2', minuten:60,
      aufgaben: [
        { situation:'TEIL 1 — Ihr Freund Marek hat Ihnen sein Fahrrad geliehen und fragt, wie es gelaufen ist. Antworten Sie ihm.',
          sorte:'email', an:'Marek', betreff:'Dein Fahrrad',
          punkte: [
            { nr:1, was:'Dank', hinweis:'Bedanke dich für das Fahrrad.' },
            { nr:2, was:'Bericht', hinweis:'Erzähl, wofür du es gebraucht hast.' },
            { nr:3, was:'Rückgabe', hinweis:'Kläre, wann du es zurückbringst.' }
          ],
          muster:'Lieber Marek,\nvielen Dank noch mal, dass du mir dein Fahrrad geliehen hast. Du hast mich damit wirklich gerettet.\nIch bin die ganze Woche damit zur Arbeit gefahren, weil mein Auto in der Werkstatt war. Am Mittwoch habe ich sogar einen Ausflug an den Fluss gemacht — das Wetter war zu schön, um drinnen zu bleiben.\nWann passt es dir, dass ich es zurückbringe? Ich hätte am Donnerstagabend oder am Samstagvormittag Zeit. Geputzt habe ich es schon.\nSag mir kurz Bescheid.\nViele Grüße\nEmre',
          woerter:80,
          hilfen:['Vielen Dank noch mal, dass du …','Ich habe es gebraucht, um …','Wann passt es dir, dass ich …','Sag mir kurz Bescheid.'] },

        { situation:'TEIL 2 — Im Forum „Familie" wird diskutiert: Sollten Großeltern regelmäßig auf die Enkelkinder aufpassen? Schreiben Sie Ihre Meinung.',
          sorte:'forum', an:'Forum „Familie"', betreff:'Großeltern als Babysitter?',
          punkte: [
            { nr:1, was:'Meinung', hinweis:'Nenn deinen Standpunkt.' },
            { nr:2, was:'Begründung', hinweis:'Begründe ihn.' },
            { nr:3, was:'Gegenseite', hinweis:'Nenn auch ein Argument dagegen.' },
            { nr:4, was:'Frage', hinweis:'Frag die anderen nach ihren Erfahrungen.' }
          ],
          muster:'Ich lese hier oft mit und möchte diesmal selbst etwas schreiben.\nIch finde es schön, wenn Großeltern helfen, aber verpflichtet sind sie dazu nicht. Viele haben ihr Leben lang gearbeitet und möchten die freie Zeit endlich für sich nutzen.\nBei uns holt meine Mutter die Kinder einmal pro Woche von der Kita ab. Das hilft uns enorm, und die Kinder lieben diesen Tag.\nAndererseits kenne ich Familien, in denen die Großeltern fast täglich einspringen müssen — das führt schnell zu Streit.\nWie ist das bei euch geregelt?',
          woerter:80,
          hilfen:['Ich finde, dass …','Bei uns ist es so, dass …','Andererseits …','Wie ist das bei euch?'] },

        { situation:'TEIL 3 — In Ihrer Wohnung ist die Heizung seit drei Tagen kalt. Schreiben Sie eine formelle E-Mail an die Hausverwaltung.',
          sorte:'email', an:'Hausverwaltung Reuter', betreff:'Heizung defekt — Wohnung 3b, Ahornweg 7',
          punkte: [
            { nr:1, was:'Problem', hinweis:'Beschreibe kurz das Problem.' },
            { nr:2, was:'Dauer', hinweis:'Sag, seit wann es besteht.' },
            { nr:3, was:'Bitte', hinweis:'Bitte um schnelle Reparatur.' }
          ],
          muster:'Sehr geehrte Damen und Herren,\nin meiner Wohnung im Ahornweg sieben, Wohnung drei b, bleibt die Heizung kalt, obwohl sie voll aufgedreht ist.\nDas Problem besteht seit Montag, also seit drei Tagen. Nachts wird es in den Zimmern sehr kalt.\nIch bitte Sie, möglichst schnell einen Handwerker zu schicken. Werktags bin ich ab siebzehn Uhr zu Hause.\nMit freundlichen Grüßen\nSonja Reiter',
          woerter:40,
          hilfen:['In meiner Wohnung … ist …','Das Problem besteht seit …','Ich bitte Sie, …','Mit freundlichen Grüßen'] }
      ] }
  ]

};
