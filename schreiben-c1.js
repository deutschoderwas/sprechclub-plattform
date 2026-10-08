/* ============================================================
   deutschoderwas club — SCHREIBEN C1 (Goethe-Zertifikat C1, modular)

   Aufbau nach dem Handbuch „Prüfungsziele, Testbeschreibung" des
   Goethe-Instituts, geprüft am 08.10.2026:

     Teil 1  Diskussionsbeitrag für ein Online-Forum (Produktion)
     Teil 2  (halb-)formelle E-Mail (Interaktion)
     zusammen 75 Minuten, 100 Punkte, bestanden ab 60.

   Bewertet wird nach sieben Kriterien: Spektrum sprachlicher
   Mittel, Wortschatz, Flüssigkeit, soziolinguistische
   Angemessenheit, Kohärenz und Kohäsion, grammatische
   Korrektheit, Orthografie. Zwei Bewertende, unabhängig.

   Auch hier die Warnung: Der Übungssatz, der auf goethe.de als
   erster zu finden ist, beschreibt die ALTE Prüfung (Aufgabe 1
   Grafikbeschreibung über 65 Minuten, Aufgabe 2 ein Brief mit
   zehn Lücken). Das ist nicht die modulare Fassung.

   Der Sprung von B2 auf C1: Auf B2 reichte eine klare Meinung
   mit Begründung und einem eingeräumten Gegenargument. Auf C1
   wird erwartet, dass man die Frage selbst noch einmal dreht —
   dass man zeigt, unter welchen Bedingungen die eigene Position
   gilt und wo sie an ihre Grenze kommt. Wer auf C1 nur fest
   behauptet, schreibt ein gutes B2.

   Die zweite Hürde ist das Register. Auf C1 wird Schärfe in
   höflicher Form verlangt: eine Beschwerde, die nichts
   zurücknimmt und trotzdem niemanden angreift.
   ============================================================ */

window.SCHREIBEN_C1 = {

  niveau: 'C1',
  pruefung: 'Goethe-Zertifikat C1 (modular)',
  minuten: 75,
  punkte: 30,

  stufen: [
    { nr:1, titel:'Abwägen statt behaupten', zeichen:'⚖️',
      was:'Auf C1 genügt keine feste Meinung. Du lernst, deine Position zu begrenzen — „sofern", „solange", „in dem Maße, in dem" — und damit stärker zu machen, nicht schwächer.' },
    { nr:2, titel:'Den Ton treffen', zeichen:'🎚️',
      was:'Verbindlich, aber bestimmt. Du übst, eine Forderung zu stellen, ohne zu fordern, und zu widersprechen, ohne anzugreifen.' },
    { nr:3, titel:'Die beiden Prüfungsteile', zeichen:'🎯',
      was:'Forumsbeitrag und formelle E-Mail, in Prüfungslänge und mit Uhr. Nach jedem Text siehst du eine Musterlösung und die Kriterien, nach denen bewertet wird.' }
  ],

  bloecke: [

    { id:'c1w1b1', stufe:1, titel:'Die Position begrenzen',
      kurz:'Bedingungen setzen, statt lauter zu behaupten',
      ziel:'Nach diesem Block schreibst du Sätze, die eine Meinung vertreten und zugleich sagen, wo sie gilt.',
      zeichen:'⚖️', farbe:'turq',
      aufgaben: [
        { art:'wahl', frage:'Welcher Satz klingt am ehesten nach C1?',
          opt:['Homeoffice ist besser für alle.','Homeoffice entlastet — allerdings nur dort, wo die Aufgaben planbar sind.','Homeoffice finde ich sehr gut.'],
          loesung:1, erklaerung:'C1 begrenzt die eigene Aussage und benennt die Bedingung. Das wirkt nicht schwächer, sondern durchdachter.' },
        { art:'wahl', frage:'„Das Argument überzeugt, ___ man die Kosten ausklammert."',
          opt:['weil','solange','obwohl'],
          loesung:1, erklaerung:'„solange" setzt die Bedingung, unter der das Zugeständnis gilt — und deutet an, dass es darüber hinaus nicht gilt.' },
        { art:'wahl', frage:'Welche Formulierung räumt ein, ohne die eigene Position aufzugeben?',
          opt:['Natürlich haben die Kritiker recht.','So berechtigt der Einwand ist, er trifft nur einen Teil der Fälle.','Die Kritiker irren sich völlig.'],
          loesung:1, erklaerung:'„So … ist, …" räumt ein und schränkt im selben Satz wieder ein. Das ist die C1-Bewegung.' },
        { art:'wahl', frage:'„Der Nutzen wächst ___, in dem die Betriebe mitziehen."',
          opt:['in dem Maße','in dem Fall','in der Weise'],
          loesung:0, erklaerung:'„in dem Maße, in dem" drückt eine Abhängigkeit aus: je mehr, desto mehr.' },
        { art:'wahl', frage:'Welcher Satz verschiebt die Frage, statt sie nur zu beantworten?',
          opt:['Ich bin dafür.','Die Frage ist weniger, ob man es tut, als unter welchen Bedingungen.','Das ist eine gute Frage.'],
          loesung:1, erklaerung:'„Weniger … als vielmehr" ist das Werkzeug, um die Fragestellung selbst zu drehen — ein typischer C1-Zug.' },
        { art:'wahl', frage:'„___ man die Zahlen genauer ansieht, relativiert sich der Befund."',
          opt:['Sobald','Falls','Weil'],
          loesung:0, erklaerung:'„Sobald" verknüpft zeitlich und logisch: Sowie man genauer hinsieht, passiert etwas mit dem Befund.' },
        { art:'wahl', frage:'Welcher Schluss ist auf C1 angemessen?',
          opt:['Deshalb bin ich dagegen.','Insgesamt überwiegen für mich die Vorteile, vorausgesetzt, die Einführung erfolgt schrittweise.','Also sollte man es lassen.'],
          loesung:1, erklaerung:'Ein C1-Fazit wiegt ab und nennt die Voraussetzung, unter der das Urteil steht.' },
        { art:'wahl', frage:'„Dieser Einwand ___ nur, wenn man unterstellt, dass alle Betriebe gleich sind."',
          opt:['gilt','trifft zu','greift'],
          loesung:2, erklaerung:'„greifen" heißt hier: wirksam sein, zutreffen. Eine gehobene, in Argumentationen übliche Wendung.' },
        { art:'wahl', frage:'Welche Wendung kündigt an, dass gleich die eigene Position kommt?',
          opt:['Bekanntlich …','Mir scheint hingegen …','Es heißt oft …'],
          loesung:1, erklaerung:'„Mir scheint hingegen" markiert den Wechsel von der referierten zur eigenen Meinung.' },
        { art:'wahl', frage:'„Die Maßnahme ist ___ sinnvoll, ___ sie befristet bleibt."',
          opt:['nur … sofern','auch … weil','immer … obwohl'],
          loesung:0, erklaerung:'„nur … sofern" ist die knappste Form, eine Zustimmung an eine Bedingung zu binden.' }
      ] },

    { id:'c1w1b2', stufe:2, titel:'Höflich und trotzdem deutlich',
      kurz:'Das Register der formellen E-Mail',
      ziel:'Nach diesem Block schreibst du eine Beschwerde, die nichts zurücknimmt und niemanden angreift.',
      zeichen:'🎚️', farbe:'gold',
      aufgaben: [
        { art:'wahl', frage:'Welche Formulierung ist verbindlich und zugleich bestimmt?',
          opt:['Ich erwarte eine sofortige Antwort.','Ich wäre Ihnen dankbar, wenn Sie mir bis Freitag antworten könnten.','Antworten Sie mir bitte mal.'],
          loesung:1, erklaerung:'Konjunktiv II plus konkreter Termin: höflich in der Form, hart in der Sache.' },
        { art:'wahl', frage:'„Leider ___ ich feststellen, dass die Lieferung erneut ausgeblieben ist."',
          opt:['muss','musste','habe'],
          loesung:0, erklaerung:'„Leider muss ich feststellen" ist die stehende Formel, mit der man einen Missstand benennt, ohne zu beschuldigen.' },
        { art:'wahl', frage:'Welcher Satz fordert, ohne zu fordern?',
          opt:['Sie müssen das sofort ändern.','Ich bitte Sie, mir einen verbindlichen Termin zu nennen.','Ändern Sie das endlich.'],
          loesung:1, erklaerung:'„Ich bitte Sie, zu …" ist eine Bitte in der Form und eine Forderung in der Wirkung — besonders mit „verbindlich".' },
        { art:'wahl', frage:'„Für eine kurze Rückmeldung ___ ich Ihnen dankbar."',
          opt:['bin','wäre','werde'],
          loesung:1, erklaerung:'Der Konjunktiv nimmt der Bitte die Schroffheit, ohne sie unverbindlich zu machen.' },
        { art:'wahl', frage:'Welche Anrede passt, wenn Sie den Namen nicht kennen?',
          opt:['Hallo zusammen,','Sehr geehrte Damen und Herren,','Liebes Team,'],
          loesung:1, erklaerung:'Die einzige formell korrekte Anrede ohne Namen. „Hallo zusammen" gehört in interne Mails.' },
        { art:'wahl', frage:'„___ Ihrer Zusage vom 3. Oktober ist bislang nichts geschehen."',
          opt:['Trotz','Wegen','Laut'],
          loesung:0, erklaerung:'„Trotz" + Genitiv stellt den Widerspruch zwischen Zusage und Ausbleiben her — sachlich und unmissverständlich.' },
        { art:'wahl', frage:'Welcher Schluss hält die Tür offen und setzt trotzdem eine Grenze?',
          opt:['Sonst sehen wir uns vor Gericht.','Sollte bis dahin keine Rückmeldung vorliegen, werde ich den Mietverein einschalten.','Ich hoffe auf Ihr Verständnis.'],
          loesung:1, erklaerung:'Eine angekündigte Folge, sachlich formuliert, ohne Drohgebärde — genau das verlangt C1.' },
        { art:'wahl', frage:'„Ich ___ Sie um Verständnis dafür, dass ich auf einer schriftlichen Bestätigung bestehe."',
          opt:['bitte','frage','hoffe'],
          loesung:0, erklaerung:'„um Verständnis bitten" ist die Formel, mit der man eine unbequeme Forderung abfedert, ohne sie zurückzunehmen.' },
        { art:'wahl', frage:'Welche Formulierung ist zu umgangssprachlich für eine formelle Mail?',
          opt:['Darüber hinaus möchte ich anmerken …','Und noch was: …','Ergänzend weise ich darauf hin …'],
          loesung:1, erklaerung:'„Und noch was" gehört in eine Nachricht an Freunde. Die beiden anderen sind Schriftdeutsch.' },
        { art:'wahl', frage:'„Gern ___ ich Ihnen die Unterlagen zukommen."',
          opt:['lasse','gebe','schicke'],
          loesung:0, erklaerung:'„jemandem etwas zukommen lassen" ist die formelle Wendung für zusenden.' }
      ] },

    { id:'c1w2b1', stufe:2, titel:'Der rote Faden',
      kurz:'Verweisen, wiederaufnehmen, nicht wiederholen',
      ziel:'Nach diesem Block hängen deine Absätze zusammen, ohne dass du dasselbe Wort dreimal benutzt.',
      zeichen:'🧵', farbe:'rot',
      aufgaben: [
        { art:'wahl', frage:'„Die Betriebe klagen über Bürokratie. ___ ist nicht neu."',
          opt:['Dieser Vorwurf','Diese Sache','Das Ding'],
          loesung:0, erklaerung:'Ein Verweiswort soll das Vorige benennen UND einordnen. „Dieser Vorwurf" tut beides; „Sache" ist leer.' },
        { art:'wahl', frage:'Wie nimmt man „die Einführung der Vier-Tage-Woche" im nächsten Satz am besten auf?',
          opt:['Die Einführung der Vier-Tage-Woche','Dieses Vorhaben','Es'],
          loesung:1, erklaerung:'Wiederaufnahme mit einem Oberbegriff vermeidet Wiederholung und zeigt zugleich, wie der Text das Thema einordnet.' },
        { art:'wahl', frage:'„___ wurde das Projekt gelobt. Inzwischen überwiegt die Skepsis."',
          opt:['Zunächst','Endlich','Schließlich'],
          loesung:0, erklaerung:'„Zunächst … inzwischen" spannt den Zeitbogen auf, den der Gegensatz braucht.' },
        { art:'wahl', frage:'Welcher Übergang leitet zu einem neuen Aspekt über?',
          opt:['Außerdem noch etwas anderes.','Damit eng verbunden ist eine zweite Frage.','Und dann gibt es noch was.'],
          loesung:1, erklaerung:'Der Satz verknüpft das Neue mit dem Alten, statt es nur anzuhängen.' },
        { art:'wahl', frage:'„Die Zahlen sind eindeutig. ___ bleibt die Deutung umstritten."',
          opt:['Dennoch','Deshalb','Dadurch'],
          loesung:0, erklaerung:'Zwischen Eindeutigkeit und Streit steht ein Widerspruch — „dennoch".' },
        { art:'wahl', frage:'Welcher Satz fasst zusammen, statt nur aufzuzählen?',
          opt:['Es gibt viele Gründe.','Beides zusammengenommen spricht für eine schrittweise Einführung.','Man kann vieles sagen.'],
          loesung:1, erklaerung:'„Beides zusammengenommen" bündelt das Vorherige und zieht daraus eine Folgerung.' },
        { art:'wahl', frage:'„Der zweite Punkt wiegt schwerer. ___ komme ich gleich."',
          opt:['Darauf','Dazu','Davon'],
          loesung:0, erklaerung:'„auf etwas zu sprechen kommen" — das Pronominaladverb muss die Präposition des Verbs aufnehmen.' },
        { art:'wahl', frage:'Welche Einleitung referiert eine fremde Position?',
          opt:['Ich finde, dass …','Vielfach wird eingewandt, dass …','Es ist so, dass …'],
          loesung:1, erklaerung:'„Vielfach wird eingewandt" führt die Gegenseite ein, ohne sie sich zu eigen zu machen.' },
        { art:'wahl', frage:'„Das gilt ___ für kleine Betriebe, ___ für die Verwaltung."',
          opt:['nicht nur … sondern auch','entweder … oder','weder … noch'],
          loesung:0, erklaerung:'Der Satz will erweitern, nicht ausschließen.' },
        { art:'wahl', frage:'Welcher Satz schließt einen Absatz ab und öffnet den nächsten?',
          opt:['Das war der erste Punkt.','Ob das in der Praxis trägt, zeigt der Blick auf die Betriebe, die es versucht haben.','Jetzt kommt Punkt zwei.'],
          loesung:1, erklaerung:'Er zieht ein Fazit und kündigt im selben Satz an, was folgt — ein Scharnier statt einer Aufzählung.' }
      ] },

    { id:'c1w2b2', stufe:2, titel:'Satzgefüge bauen',
      kurz:'Die langen Sätze, die C1 erwartet',
      ziel:'Nach diesem Block baust du Sätze mit Vorfeld, Einschub und Nebensatz, ohne die Wortstellung zu verlieren.',
      zeichen:'🏗️', farbe:'lila',
      aufgaben: [
        { art:'ordnen', frage:'Bau den Satz mit Vorfeld und Nebensatz.',
          teile:['Gerade weil die Zahlen eindeutig sind','sollte','man','die Deutung','nicht','den Lautesten überlassen'],
          loesung:[0,1,2,3,4,5],
          erklaerung:'Steht ein ganzer Nebensatz im Vorfeld, folgt sofort das gebeugte Verb — „sollte" auf Position zwei.' },
        { art:'ordnen', frage:'Bau den Konzessivsatz.',
          teile:['Obwohl der Aufwand erheblich ist','halten','die meisten Betriebe','an dem Verfahren','fest'],
          loesung:[0,1,2,3,4],
          erklaerung:'Nach dem Nebensatz im Vorfeld steht das gebeugte Verb, die Vorsilbe „fest" wandert ans Satzende.' },
        { art:'ordnen', frage:'Bau den Satz mit Einschub.',
          teile:['Die Regelung','die seit Januar gilt','hat','sich','bislang','bewährt'],
          loesung:[0,1,2,3,4,5],
          erklaerung:'Der Relativsatz schiebt sich zwischen Subjekt und Verb, ohne die Verbzweitstellung zu verändern.' },
        { art:'ordnen', frage:'Bau die Bedingung mit „sofern".',
          teile:['Sofern die Mittel rechtzeitig bewilligt werden','kann','das Vorhaben','im Frühjahr','beginnen'],
          loesung:[0,1,2,3,4],
          erklaerung:'Dieselbe Regel: Nebensatz im Vorfeld, dann sofort das gebeugte Verb.' },
        { art:'ordnen', frage:'Bau den Satz mit zweiteiligem Konnektor.',
          teile:['Nicht nur die Kosten','sondern auch der Zeitaufwand','sprechen','gegen','diese Lösung'],
          loesung:[0,1,2,3,4],
          erklaerung:'Bei „nicht nur … sondern auch" steht das Verb im Plural, weil zwei Subjekte verbunden sind.' },
        { art:'ordnen', frage:'Bau den Satz mit Partizipialattribut.',
          teile:['Die im Sommer begonnenen Arbeiten','werden','voraussichtlich','bis Jahresende','abgeschlossen'],
          loesung:[0,1,2,3,4],
          erklaerung:'Das Partizipialattribut ersetzt einen Relativsatz und gehört zum C1-Repertoire.' },
        { art:'ordnen', frage:'Bau den Satz mit „je … desto".',
          teile:['Je früher die Betriebe eingebunden werden','desto','geringer','ist','der Widerstand'],
          loesung:[0,1,2,3,4],
          erklaerung:'Nach „desto" steht der Komparativ, dann das Verb — eine Wortstellung, die oft misslingt.' },
        { art:'ordnen', frage:'Bau den Finalsatz.',
          teile:['Um Missverständnisse zu vermeiden','bitte','ich','Sie','um eine schriftliche Bestätigung'],
          loesung:[0,1,2,3,4],
          erklaerung:'Der Infinitivsatz im Vorfeld zählt als ein Satzglied; das gebeugte Verb folgt unmittelbar.' }
      ] }
  ],

  teile: [

    /* ====================== TEIL 1 ====================== */
    { nr:1, art:'mitteilung', name:'Diskussionsbeitrag im Forum',
      kurz:'Position beziehen, abwägen, zu einem Schluss kommen — etwa 230 Wörter',
      was:'Du liest einen Beitrag aus einem Online-Forum und schreibst deine eigene Stellungnahme. Bewertet wird nicht die Meinung, sondern wie du sie aufbaust: ob du die Frage einordnest, eine Position begründest, die Gegenseite ernst nimmst und am Ende sagst, unter welchen Bedingungen dein Urteil gilt.',
      tipp:'Der Unterschied zu B2 liegt im dritten Absatz. Auf B2 reicht „zwar … allerdings". Auf C1 wird erwartet, dass du die Fragestellung selbst noch einmal drehst: „Die Frage ist weniger, ob …, als vielmehr unter welchen Bedingungen …". Plane drei Minuten für die Gliederung.',
      zeichen:'💬', farbe:'turq', punkte:20,
      runden: [
        { id:'c1w1r1', titel:'Runde 1', aufgaben: [
          { situation:'Im Forum „Stadt und Zukunft" fordert ein Beitrag, Innenstädte vollständig für Autos zu sperren. Die Diskussion läuft hitzig. Schreiben Sie Ihre Stellungnahme.',
            sorte:'forum', an:'Forum „Stadt und Zukunft"', betreff:'Autofreie Innenstadt — konsequent oder weltfremd?',
            punkte: [
              { nr:1, was:'Die Frage einordnen', hinweis:'Beginne nicht mit deiner Meinung, sondern mit dem, was in der Debatte regelmäßig übersehen wird.' },
              { nr:2, was:'Position mit Bedingung', hinweis:'Beziehe Stellung — und sage im selben Absatz, wovon dein Urteil abhängt.' },
              { nr:3, was:'Die Gegenseite ernst nehmen', hinweis:'Führe das stärkste Gegenargument an, nicht das schwächste, und antworte darauf.' },
              { nr:4, was:'Schluss', hinweis:'Keine Wiederholung. Ziehe eine Folgerung, die über das Gesagte hinausgeht.' }
            ],
            woerter:230,
            hilfen: [
              'In der Debatte um … wird ein Punkt regelmäßig übersehen: …',
              'Meiner Einschätzung nach … — allerdings nur in dem Maße, in dem …',
              'So berechtigt der Einwand ist, er trifft nur dort zu, wo …',
              'Die Frage ist weniger, ob …, als vielmehr, unter welchen Bedingungen …'
            ],
            muster:'In der Debatte um autofreie Innenstädte wird ein Punkt regelmäßig übersehen: Gestritten wird über das Auto, entschieden wird über den Raum. Wer eine Straße sperrt, hat damit noch nicht gesagt, was dort stattdessen geschehen soll — und genau daran scheitern die meisten Versuche.\n\nMeiner Einschätzung nach ist eine weitgehend autofreie Innenstadt richtig, allerdings nur in dem Maße, in dem der Nahverkehr vorher ausgebaut wurde. Wo Busse im Zwanzig-Minuten-Takt fahren, ist eine Sperrung keine Befreiung, sondern eine Zumutung für die, die keine Wahl haben. In Städten dagegen, die ihr Netz zuerst verdichtet haben, ist der Widerstand nach zwei Jahren messbar zurückgegangen. Die Reihenfolge entscheidet also über die Akzeptanz, nicht die Radikalität der Maßnahme.\n\nDas stärkste Gegenargument kommt nicht von Autofahrern, sondern vom Handel: Wer schwere Einkäufe transportieren muss, kommt ohne Fahrzeug nicht aus. So berechtigt dieser Einwand ist, er trifft nur dort zu, wo Lieferdienste und Ladezonen fehlen. Beides lässt sich organisieren, kostet aber Geld, das in den Debatten selten genannt wird. Wer die Sperrung fordert, ohne diesen Posten einzuplanen, überlässt die Kosten am Ende denen, die sie am wenigsten tragen können.\n\nDie Frage ist deshalb weniger, ob Innenstädte autofrei werden sollten, als vielmehr, in welcher Reihenfolge. Wer zuerst sperrt und dann plant, erzeugt Widerstand, der jede spätere Maßnahme erschwert. Wer zuerst Alternativen schafft, muss am Ende vielleicht gar nicht mehr sperren.',
            erklaerung:'Der Text behauptet nicht, er begrenzt: „nur in dem Maße, in dem". Er nimmt das stärkste Gegenargument (Handel, nicht Autofahrer) und dreht im Schluss die Frage von „ob" auf „in welcher Reihenfolge" — genau das trennt C1 von B2.' } ] },

        { id:'c1w1r2', titel:'Runde 2', aufgaben: [
          { situation:'In einem Bildungsforum wird gefordert, Hausaufgaben an Schulen vollständig abzuschaffen. Schreiben Sie Ihre Stellungnahme.',
            sorte:'forum', an:'Forum „Schule heute"', betreff:'Hausaufgaben abschaffen — endlich oder zu einfach gedacht?',
            punkte: [
              { nr:1, was:'Die Frage einordnen', hinweis:'Woran hängt die Debatte wirklich — an den Aufgaben oder an etwas anderem?' },
              { nr:2, was:'Position mit Bedingung', hinweis:'Sage klar, was du hältst, und wovon es abhängt.' },
              { nr:3, was:'Gegenseite', hinweis:'Das stärkste Argument der anderen Seite, dann deine Antwort.' },
              { nr:4, was:'Schluss', hinweis:'Eine Folgerung, nicht eine Zusammenfassung.' }
            ],
            woerter:230,
            hilfen: [
              'Was in dieser Diskussion untergeht, ist …',
              'Ich halte … für richtig, vorausgesetzt, dass …',
              'Der gewichtigste Einwand lautet, … Darauf lässt sich erwidern, dass …',
              'Entscheidend ist daher nicht …, sondern …'
            ],
            muster:'Was in der Diskussion über Hausaufgaben regelmäßig untergeht, ist die Frage, wer sie eigentlich betreut. Solange die Hilfe zu Hause über den Erfolg entscheidet, verstärken Hausaufgaben genau die Unterschiede, die die Schule ausgleichen soll.\n\nIch halte eine Abschaffung für richtig, vorausgesetzt, die Zeit wird nicht gestrichen, sondern verlagert. Eine Stunde betreutes Üben in der Schule leistet mehr als drei Stunden Kampf am Küchentisch — und zwar für alle, nicht nur für die, deren Eltern Zeit und Deutschkenntnisse haben. Wird die Zeit dagegen ersatzlos gestrichen, verlieren gerade die Kinder, die das Üben am nötigsten hätten.\n\nDer gewichtigste Einwand lautet, dass selbstständiges Arbeiten erlernt werden muss und dass die Schule dafür nicht genug Raum hat. Darauf lässt sich erwidern, dass Selbstständigkeit nicht dadurch entsteht, dass man Kinder allein lässt, sondern dadurch, dass jemand da ist, wenn sie nicht weiterkommen. Was heute Selbstständigkeit heißt, ist in vielen Fällen schlicht das Fehlen von Unterstützung. Dass einige Kinder damit gut zurechtkommen, spricht nicht für das Verfahren, sondern für ihr Elternhaus.\n\nEntscheidend ist daher nicht, ob zu Hause oder in der Schule geübt wird, sondern ob die Betreuung gesichert ist. Eine Abschaffung ohne zusätzliches Personal wäre keine Entlastung, sondern nur eine Verschiebung des Problems — diesmal in den Unterricht hinein. Wer Hausaufgaben streichen will, muss deshalb zuerst sagen, wer die Stunden übernimmt und woher die Mittel dafür kommen. Alles andere ist eine Entlastung auf dem Papier.',
            erklaerung:'Auch hier: Die Position steht unter einer Bedingung („vorausgesetzt, die Zeit wird verlagert"), das Gegenargument wird in seiner stärksten Form zitiert, und der Schluss benennt die Gefahr der eigenen Forderung. Das wirkt souverän, nicht unentschieden.' } ] },

        { id:'c1w1r3', titel:'Runde 3', aufgaben: [
          { situation:'Ein Forumsbeitrag schlägt vor, Bewerbungen grundsätzlich anonym zu machen — ohne Name, Alter und Foto. Schreiben Sie Ihre Stellungnahme.',
            sorte:'forum', an:'Forum „Arbeitswelt heute"', betreff:'Anonyme Bewerbungen — gerechter oder nur bequemer?',
            punkte: [
              { nr:1, was:'Die Frage einordnen', hinweis:'Was verspricht man sich davon, und was lässt sich damit überhaupt erreichen?' },
              { nr:2, was:'Position mit Bedingung', hinweis:'Deine Haltung, und wo ihre Grenze liegt.' },
              { nr:3, was:'Gegenseite', hinweis:'Ein ernsthafter Einwand und deine Antwort darauf.' },
              { nr:4, was:'Schluss', hinweis:'Worauf es stattdessen ankäme.' }
            ],
            woerter:230,
            hilfen: [
              'Der Vorschlag klingt einleuchtend, berührt aber nur …',
              'Ich halte … für sinnvoll, solange man nicht erwartet, dass …',
              'Dagegen wird eingewandt, … Das trifft insofern zu, als …',
              'Worauf es ankäme, ist weniger … als …'
            ],
            muster:'Der Vorschlag klingt einleuchtend, berührt aber nur den ersten Schritt eines langen Verfahrens. Anonyme Unterlagen entscheiden darüber, wer eingeladen wird — nicht darüber, wer die Stelle bekommt. Spätestens im Gespräch sitzt dieselbe Person denselben Vorurteilen gegenüber.\n\nIch halte anonyme Bewerbungen dennoch für sinnvoll, solange man nicht erwartet, dass sie Diskriminierung beseitigen. Sie verschieben die Hürde nach hinten, und das ist mehr, als es klingt: Wer überhaupt erst eingeladen wird, bekommt die Gelegenheit, den Eindruck zu widerlegen, den ein Name ausgelöst hätte. Studien aus mehreren Ländern zeigen übereinstimmend, dass sich die Einladungsquote angleicht. Für die Betroffenen ist das kein kleiner Unterschied, sondern der Unterschied zwischen einer Absage und einem Gespräch.\n\nDagegen wird eingewandt, das Verfahren sei aufwendig und nehme kleinen Betrieben die Möglichkeit, Persönlichkeit früh einzuschätzen. Das trifft insofern zu, als der Aufwand real ist. Es setzt allerdings voraus, dass aus einem Foto und einem Geburtsjahr etwas über Persönlichkeit abzulesen wäre — und genau daran bestehen begründete Zweifel. Was dort gelesen wird, ist in aller Regel Herkunft, nicht Eignung.\n\nWorauf es ankäme, ist weniger die Anonymität der Unterlagen als die Struktur des Gesprächs danach: feste Fragen, mehrere Beurteilende, getrennte Bewertung. Ohne das bleibt die anonyme Bewerbung eine Geste, die beruhigt, ohne viel zu ändern. Sie taugt als erster Schritt, nicht als Beleg dafür, dass man das Problem gelöst hätte. Genau als solcher Beleg wird sie allerdings gern angeführt.',
            erklaerung:'Beachte den Mittelabsatz: Der Text gibt dem Einwand ausdrücklich recht („Das trifft insofern zu, als …") und entzieht ihm trotzdem die Grundlage. Dieses Einräumen bei gleichzeitigem Widerspruch ist die schwierigste und am höchsten bewertete C1-Bewegung.' } ] }
      ] },

    /* ====================== TEIL 2 ====================== */
    { nr:2, art:'mitteilung', name:'Formelle E-Mail',
      kurz:'Ein Anliegen durchsetzen, ohne den Ton zu verlieren — etwa 120 Wörter',
      was:'Du schreibst eine halbformelle oder formelle E-Mail an eine Stelle, von der du etwas willst. Bewertet wird, ob du den Sachverhalt klar darstellst, ein konkretes Anliegen formulierst und dabei das Register hältst.',
      tipp:'Drei Dinge entscheiden: ein Betreff, der den Vorgang eindeutig macht; ein konkreter Termin statt „baldmöglichst"; und ein Schluss, der eine Folge ankündigt, ohne zu drohen. Vermeide jede Spur von Ärger — die Schärfe liegt in der Sache, nicht im Ton.',
      zeichen:'✉️', farbe:'gold', punkte:10,
      runden: [
        { id:'c1w2r1', titel:'Runde 1', aufgaben: [
          { situation:'Sie haben vor fünf Wochen eine Fortbildung gebucht und bezahlt. Der Termin wurde zweimal verschoben, zuletzt ohne neue Angabe. Ihre Erstattungsanfrage blieb unbeantwortet. Schreiben Sie an den Anbieter.',
            sorte:'email', an:'Weiterbildungsinstitut Nordlicht', betreff:'Zweimal verschobener Kurs 2026-114 — Bitte um Entscheidung bis 20.10.',
            punkte: [
              { nr:1, was:'Sachverhalt', hinweis:'Buchung, Zahlung, beide Verschiebungen — mit Daten, ohne Wertung.' },
              { nr:2, was:'Was bisher geschah', hinweis:'Die unbeantwortete Anfrage sachlich erwähnen.' },
              { nr:3, was:'Anliegen mit Frist', hinweis:'Nenne genau zwei Möglichkeiten und ein Datum.' },
              { nr:4, was:'Schluss', hinweis:'Eine Folge ankündigen, ohne zu drohen.' }
            ],
            woerter:120,
            hilfen: [
              'Am … habe ich … gebucht und den Betrag von … überwiesen.',
              'Trotz meiner Anfrage vom … habe ich bislang keine Rückmeldung erhalten.',
              'Ich bitte Sie daher, mir bis zum … mitzuteilen, ob …',
              'Sollte bis dahin keine Nachricht vorliegen, werde ich …'
            ],
            muster:'Sehr geehrte Damen und Herren,\n\nam 2. September habe ich den Kurs „Projektsteuerung kompakt" (Buchungsnummer 2026-114) gebucht und den Betrag von 480 Euro überwiesen. Der ursprüngliche Termin am 24. September wurde auf den 8. Oktober verlegt und dieser erneut abgesagt, ohne dass ein neues Datum genannt wurde.\n\nTrotz meiner Anfrage vom 9. Oktober habe ich bislang keine Rückmeldung erhalten.\n\nIch bitte Sie daher, mir bis zum 20. Oktober mitzuteilen, ob ein verbindlicher Termin im laufenden Jahr zustande kommt. Andernfalls bitte ich um Erstattung des vollständigen Betrags einschließlich der bereits entrichteten Anmeldegebühr.\n\nSollte bis dahin keine Nachricht vorliegen, werde ich die Verbraucherzentrale um Unterstützung bitten.\n\nMit freundlichen Grüßen\nM. Albrecht',
            erklaerung:'Der Betreff nennt Vorgang und Frist — die Mail wirkt dadurch schon vor dem Öffnen verbindlich. Im Text steht kein einziges wertendes Wort („ärgerlich", „inakzeptabel"); die Schärfe entsteht allein durch Daten und die angekündigte Folge.' } ] },

        { id:'c1w2r2', titel:'Runde 2', aufgaben: [
          { situation:'Ihre Nachbarin stellt seit Monaten Sperrmüll in den gemeinsamen Kellerflur, der damit als Fluchtweg blockiert ist. Zwei persönliche Gespräche haben nichts bewirkt. Schreiben Sie an die Hausverwaltung.',
            sorte:'email', an:'Hausverwaltung Berg & Partner', betreff:'Blockierter Fluchtweg im Kellergeschoss, Haus 14 — Bitte um Abhilfe',
            punkte: [
              { nr:1, was:'Sachverhalt', hinweis:'Was genau steht wo, und seit wann.' },
              { nr:2, was:'Warum es dringend ist', hinweis:'Nenne den sicherheitsrelevanten Punkt, ohne zu dramatisieren.' },
              { nr:3, was:'Was du schon versucht hast', hinweis:'Die Gespräche erwähnen — das zeigt, dass du nicht sofort eskaliert bist.' },
              { nr:4, was:'Bitte mit Frist', hinweis:'Konkret, mit Datum.' }
            ],
            woerter:120,
            hilfen: [
              'Seit etwa … befinden sich im … mehrere …',
              'Der Durchgang ist dadurch auf … verengt; es handelt sich um den einzigen …',
              'Ich habe die Nachbarin zweimal persönlich angesprochen, bislang ohne Ergebnis.',
              'Ich bitte Sie, bis zum … für die Räumung zu sorgen.'
            ],
            muster:'Sehr geehrte Damen und Herren,\n\nseit etwa vier Monaten befinden sich im Kellerflur von Haus 14 mehrere Möbelstücke und Kartons, die der Wohnung 14c zuzuordnen sind. Der Durchgang ist dadurch auf etwa sechzig Zentimeter verengt.\n\nEs handelt sich um den einzigen Fluchtweg aus dem Kellergeschoss. Nach meiner Kenntnis ist eine solche Nutzung brandschutzrechtlich nicht zulässig.\n\nIch habe die Nachbarin zweimal persönlich angesprochen, zuletzt Mitte September, bislang ohne Ergebnis. Eine weitere Ansprache von meiner Seite erscheint mir nicht zielführend und würde das nachbarschaftliche Verhältnis unnötig belasten.\n\nIch bitte Sie daher, bis zum 25. Oktober für die Räumung zu sorgen oder mir mitzuteilen, wie Sie weiter vorgehen möchten.\n\nMit freundlichen Grüßen\nK. Steiger, Wohnung 14a',
            erklaerung:'„Nach meiner Kenntnis" und „erscheint mir nicht zielführend" sind die beiden C1-Scharniere: Der Text nennt den Rechtsverstoß, ohne ihn zu behaupten, und erklärt, warum er die Verwaltung einschaltet, ohne die Nachbarin anzugreifen.' } ] },

        { id:'c1w2r3', titel:'Runde 3', aufgaben: [
          { situation:'Sie arbeiten seit zwei Jahren in einem Betrieb. Eine Kollegin mit gleicher Aufgabe und kürzerer Betriebszugehörigkeit wurde befördert, Sie wurden nicht informiert. Sie möchten ein Gespräch mit der Personalleitung. Schreiben Sie die Anfrage.',
            sorte:'email', an:'Personalleitung, Frau Dr. Lorenz', betreff:'Bitte um ein Gespräch zur Stellenbesetzung im Bereich Disposition',
            punkte: [
              { nr:1, was:'Anlass', hinweis:'Sachlich benennen, ohne Vorwurf und ohne Namen der Kollegin.' },
              { nr:2, was:'Dein Anliegen', hinweis:'Was du wissen möchtest — und was nicht.' },
              { nr:3, was:'Dein Beitrag', hinweis:'Ein Satz zu deiner Arbeit, ohne dich anzupreisen.' },
              { nr:4, was:'Terminvorschlag', hinweis:'Konkret und flexibel zugleich.' }
            ],
            woerter:120,
            hilfen: [
              'wie ich erfahren habe, wurde die Position … zum … neu besetzt.',
              'Es geht mir nicht darum, die Entscheidung infrage zu stellen, sondern …',
              'Seit … verantworte ich … und würde gern wissen, welche Schritte …',
              'Für ein Gespräch stehe ich … zur Verfügung.'
            ],
            muster:'Sehr geehrte Frau Dr. Lorenz,\n\nwie ich vergangene Woche erfahren habe, wurde die Teamleitung im Bereich Disposition zum 1. Oktober neu besetzt. Über das Verfahren war mir nichts bekannt.\n\nEs geht mir nicht darum, die Entscheidung infrage zu stellen. Ich würde jedoch gern verstehen, nach welchen Kriterien die Stelle vergeben wurde und wie solche Positionen künftig ausgeschrieben werden.\n\nSeit zwei Jahren verantworte ich die Tourenplanung für den Südbezirk und habe die Umstellung auf das neue Planungssystem begleitet. Eine Entwicklungsperspektive in diese Richtung wäre für mich von erheblichem Interesse, und ich würde sie gern frühzeitig mit Ihnen besprechen.\n\nFür ein Gespräch stehe ich in den kommenden zwei Wochen jederzeit zur Verfügung; ein Termin am Vormittag wäre mir am liebsten.\n\nMit freundlichen Grüßen\nT. Marinescu',
            erklaerung:'Der schwierigste Satz ist „Es geht mir nicht darum, die Entscheidung infrage zu stellen." Er nimmt der Mail jede Spur von Beschwerde und macht den Weg frei für die eigentliche Frage. Die Kollegin wird nirgends erwähnt — das ist kein Zufall, sondern Teil der Leistung.' } ] }
      ] }
  ],

  laeufe: [
    { id:'c1wlauf1', titel:'Schreiben C1 — ein kompletter Durchgang', minuten:75,
      teile: [ { nr:1, art:'mitteilung', ref:'c1w1r1' }, { nr:2, art:'mitteilung', ref:'c1w2r1' } ] }
  ]
};
