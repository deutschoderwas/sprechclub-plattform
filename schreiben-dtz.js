/* ============================================================
   deutschoderwas club — SCHREIBEN Deutsch-Test für Zuwanderer (DTZ)

   Aufbau nach den offiziellen DTZ-Übungssätzen (g.a.s.t.) und dem
   Modellsatz („Sie hören jeden Text einmal"), geprüft 03.11.2026.
   Alle Texte und Aufgaben eigene. Erzeugt aus scratchpad/dtz.
   ============================================================ */

window.SCHREIBEN_TELC_DTZ = {
 "niveau": "telcDTZ",
 "pruefung": "Deutsch-Test für Zuwanderer",
 "minuten": 30,
 "punkte": 20,
 "intro": "Im DTZ schreibst du in dreißig Minuten einen Brief oder eine E-Mail. Du wählst zwischen Aufgabe A und B, jede hat vier Leitpunkte. Anrede und Gruß gehören dazu. Bewertet wird nach vier Kriterien mit je bis zu 5 Punkten: A2 ab 7, B1 ab 15.",
 "stufen": [
  {
   "nr": 1,
   "titel": "Der Brief",
   "zeichen": "🖼️",
   "was": "Anrede, Gruß, vier Leitpunkte."
  },
  {
   "nr": 2,
   "titel": "Bitten und beschweren",
   "zeichen": "🧩",
   "was": "Höflich schreiben, typische Fehler vermeiden."
  },
  {
   "nr": 3,
   "titel": "Die Aufgaben",
   "zeichen": "✉️",
   "was": "Je Runde A und B zur Wahl, wie in der Prüfung."
  },
  {
   "nr": 4,
   "titel": "Die Prüfung",
   "zeichen": "⏱️",
   "was": "Ein Brief, dreißig Minuten mit Uhr."
  }
 ],
 "bloecke": [
  {
   "id": "tds1",
   "stufe": 1,
   "titel": "Anrede und Gruß: formell und halbformell",
   "kurz": "Der Anfang und das Ende vom Brief sitzen, bevor der Inhalt kommt",
   "ziel": "Nach diesem Block weißt du, wie du Vermieter, Ämter, Kursleiter und Nachbarn richtig ansprichst, wie der erste Satz beginnt und welcher Gruß am Ende passt.",
   "zeichen": "✉️",
   "farbe": "turq",
   "aufgaben": [
    {
     "art": "wahl",
     "frage": "Sie schreiben an Ihren Vermieter, Herrn Kaya. Welche Anrede ist richtig?",
     "opt": [
      "Sehr geehrter Herr Kaya,",
      "Sehr geehrte Herr Kaya,",
      "Hallo Kaya!"
     ],
     "loesung": 0,
     "erklaerung": "„Sehr geehrter“ gehört zu „Herr“, „Sehr geehrte“ zu „Frau“. Nach der Anrede steht ein Komma."
    },
    {
     "art": "wahl",
     "frage": "Sie schreiben an die Hausverwaltung und kennen keinen Namen. Welche Anrede passt?",
     "opt": [
      "Liebe Hausverwaltung,",
      "Hallo zusammen,",
      "Sehr geehrte Damen und Herren,"
     ],
     "loesung": 2,
     "erklaerung": "Ohne Namen schreibt man in einem formellen Brief immer „Sehr geehrte Damen und Herren,“."
    },
    {
     "art": "wahl",
     "frage": "Ihre Kursleiterin heißt Frau Novak. Sie kennen sie gut, aber Sie sagen „Sie“ zu ihr. Welche Anrede passt?",
     "opt": [
      "Liebe Anna,",
      "Liebe Frau Novak,",
      "Sehr geehrte Damen und Herren,"
     ],
     "loesung": 1,
     "erklaerung": "Halbformell heißt: freundlich, aber mit Nachnamen und Sie-Form. „Liebe Frau Novak,“ passt genau."
    },
    {
     "art": "wahl",
     "frage": "Nach „Sehr geehrter Herr Kaya,“ kommt der erste Satz. Welcher ist richtig geschrieben?",
     "opt": [
      "Ich Schreibe ihnen wegen Heizung.",
      "Ich schreibe Ihnen, weil...",
      "ich schreibe Ihnen, weil die Heizung in meiner Wohnung nicht funktioniert."
     ],
     "loesung": 2,
     "erklaerung": "Nach dem Komma in der Anrede schreibt man klein weiter. „Ihnen“ schreibt man in der Sie-Form groß."
    },
    {
     "art": "wahl",
     "frage": "Der Brief beginnt mit „Sehr geehrte Damen und Herren,“. Welcher Gruß passt am Ende?",
     "opt": [
      "Mit freundlichen Grüßen",
      "Liebe Grüße",
      "Tschüss"
     ],
     "loesung": 0,
     "erklaerung": "Zu einer formellen Anrede gehört ein formeller Gruß. „Liebe Grüße“ ist für Freunde."
    },
    {
     "art": "wahl",
     "frage": "Sie schreiben Ihrer Nachbarin, Frau Berger, einen Zettel. Welcher Gruß passt?",
     "opt": [
      "Hochachtungsvoll",
      "Viele Grüße",
      "Küsschen"
     ],
     "loesung": 1,
     "erklaerung": "„Viele Grüße“ ist freundlich und passt gut zu einem halbformellen Brief an Nachbarn."
    },
    {
     "art": "wahl",
     "frage": "Sie laden Ihre Freundin Lina zum Essen ein. Welche Anrede ist richtig?",
     "opt": [
      "Sehr geehrte Lina,",
      "Lieber Lina,",
      "Liebe Lina,"
     ],
     "loesung": 2,
     "erklaerung": "Bei Freunden schreibt man „Liebe“ oder „Lieber“ und den Vornamen. Lina ist eine Frau, also „Liebe“."
    },
    {
     "art": "wahl",
     "frage": "Sie schreiben eine E-Mail an die Kita. Welcher Betreff ist am besten?",
     "opt": [
      "Frage",
      "Neue Abholzeit für Mila ab März",
      "Hallo!!!"
     ],
     "loesung": 1,
     "erklaerung": "Ein guter Betreff sagt in wenigen Wörtern, worum es geht. Die Kita weiß dann sofort, um welches Kind es geht."
    },
    {
     "art": "ordnen",
     "frage": "Bau den ersten Satz nach der Anrede.",
     "teile": [
      "vielen Dank",
      "für",
      "Ihren",
      "Brief",
      "vom",
      "12. Mai."
     ],
     "loesung": [
      0,
      1,
      2,
      3,
      4,
      5
     ],
     "erklaerung": "Der erste Satz beginnt klein, weil vor ihm das Komma der Anrede steht."
    },
    {
     "art": "ordnen",
     "frage": "Bau den letzten Satz vor dem Gruß.",
     "teile": [
      "Ich",
      "freue mich",
      "auf",
      "Ihre",
      "Antwort."
     ],
     "loesung": [
      0,
      1,
      2,
      3,
      4
     ],
     "erklaerung": "„sich freuen auf“ plus Akkusativ. „Ihre“ ist groß, weil es zur Sie-Form gehört."
    }
   ]
  },
  {
   "id": "tds2",
   "stufe": 1,
   "titel": "Vier Leitpunkte abarbeiten",
   "kurz": "Jeder Leitpunkt bekommt seine Sätze, keiner wird vergessen",
   "ziel": "Nach diesem Block planst du deinen Brief mit Stichwörtern, schreibst zu jedem der vier Leitpunkte ein bis drei passende Sätze und verbindest die Punkte mit einfachen Wörtern.",
   "zeichen": "✅",
   "farbe": "gold",
   "aufgaben": [
    {
     "art": "wahl",
     "frage": "Zu wie vielen Leitpunkten müssen Sie etwas schreiben?",
     "opt": [
      "Zu zwei, das sind die wichtigsten.",
      "Zu allen vier.",
      "So viele, wie man in der Zeit schafft."
     ],
     "loesung": 1,
     "erklaerung": "Für jeden fehlenden Punkt verlieren Sie Punkte bei der Aufgabenbewältigung. Lieber zu jedem Punkt kurz als zu zwei Punkten lang."
    },
    {
     "art": "wahl",
     "frage": "Leitpunkt: „Grund für Ihr Schreiben“. Welcher Satz passt am besten?",
     "opt": [
      "Ich habe ein Problem.",
      "Heizung kaputt.",
      "Ich schreibe Ihnen, weil seit Montag die Heizung im Wohnzimmer kalt bleibt."
     ],
     "loesung": 2,
     "erklaerung": "Der Satz sagt genau, was los ist und seit wann. „Ich habe ein Problem“ ist zu allgemein."
    },
    {
     "art": "wahl",
     "frage": "Leitpunkt: „Termin vorschlagen“. Welcher Satz passt?",
     "opt": [
      "Können Sie bitte am Donnerstag nach 16 Uhr kommen? Dann bin ich zu Hause.",
      "Ich habe Zeit.",
      "Kommen Sie irgendwann."
     ],
     "loesung": 0,
     "erklaerung": "Ein Vorschlag braucht einen Tag und eine Uhrzeit. Der zweite Satz sagt, warum es dann passt."
    },
    {
     "art": "wahl",
     "frage": "Wie viel schreiben Sie zu einem Leitpunkt?",
     "opt": [
      "Ein Wort reicht.",
      "Ein bis drei Sätze.",
      "Mindestens zehn Sätze."
     ],
     "loesung": 1,
     "erklaerung": "Ein bis drei Sätze pro Punkt reichen. So schaffen Sie alle vier Punkte in dreißig Minuten."
    },
    {
     "art": "wahl",
     "frage": "Müssen Sie die Leitpunkte genau in der Reihenfolge der Aufgabe schreiben?",
     "opt": [
      "Ja, sonst ist der Brief falsch.",
      "Nein, man soll sie mischen.",
      "Nein. Wichtig ist, dass alle vier vorkommen. Die Reihenfolge der Aufgabe hilft aber beim Planen."
     ],
     "loesung": 2,
     "erklaerung": "Bewertet wird, ob alle Punkte da sind und der Brief logisch ist. Die Reihenfolge auf dem Blatt ist meistens schon logisch."
    },
    {
     "art": "wahl",
     "frage": "Leitpunkt: „Entschuldigung“. Welcher Satz passt?",
     "opt": [
      "Sorry.",
      "Es tut mir leid, dass ich am Montag nicht im Kurs war.",
      "Ich war nicht da, das ist egal."
     ],
     "loesung": 1,
     "erklaerung": "„Es tut mir leid, dass …“ ist eine klare Entschuldigung und sagt gleich, wofür."
    },
    {
     "art": "wahl",
     "frage": "Sie sind mit Leitpunkt 2 fertig und beginnen Leitpunkt 3. Wie verbinden Sie die beiden?",
     "opt": [
      "Außerdem möchte ich fragen, ob ich die Hausaufgaben bekommen kann.",
      "Punkt drei: Hausaufgaben.",
      "Und und dann Hausaufgaben."
     ],
     "loesung": 0,
     "erklaerung": "Wörter wie „außerdem“, „deshalb“ und „zum Schluss“ verbinden die Punkte. Der Brief liest sich dann wie ein Brief und nicht wie eine Liste."
    },
    {
     "art": "wahl",
     "frage": "Was machen Sie in den ersten Minuten der Prüfung?",
     "opt": [
      "Sofort den ganzen Brief schreiben.",
      "Zu jedem Leitpunkt zwei, drei Stichwörter notieren.",
      "Den Brief zuerst in der Muttersprache schreiben."
     ],
     "loesung": 1,
     "erklaerung": "Mit Stichwörtern sehen Sie schnell, ob Sie zu jedem Punkt eine Idee haben. Dann geht das Schreiben schneller."
    },
    {
     "art": "ordnen",
     "frage": "Bau den Satz, der zum nächsten Leitpunkt führt.",
     "teile": [
      "Außerdem",
      "möchte",
      "ich",
      "Sie",
      "fragen,",
      "ob",
      "ich",
      "die Stunden",
      "nachholen",
      "kann."
     ],
     "loesung": [
      0,
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9
     ],
     "erklaerung": "Nach „außerdem“ steht das Verb an Position zwei. Im Satz mit „ob“ steht das Verb am Ende."
    },
    {
     "art": "ordnen",
     "frage": "Bau einen Satz mit Folge.",
     "teile": [
      "Deshalb",
      "kann",
      "ich",
      "am Freitag",
      "leider",
      "nicht",
      "kommen."
     ],
     "loesung": [
      0,
      1,
      2,
      3,
      4,
      5,
      6
     ],
     "erklaerung": "„Deshalb“ steht am Anfang, danach kommt sofort das Verb „kann“."
    }
   ]
  },
  {
   "id": "tds3",
   "stufe": 2,
   "titel": "Um etwas bitten und sich beschweren",
   "kurz": "Höflich bitten, sachlich beschweren, klar sagen, was Sie wollen",
   "ziel": "Nach diesem Block bittest du höflich um Hilfe, Urlaub oder eine Reparatur, beschreibst ein Problem sachlich und sagst am Ende genau, was du von deinem Gegenüber erwartest.",
   "zeichen": "🙏",
   "farbe": "rot",
   "aufgaben": [
    {
     "art": "wahl",
     "frage": "Welche Bitte an den Vermieter ist höflich?",
     "opt": [
      "Reparieren Sie sofort die Heizung!",
      "Die Heizung muss gemacht werden, sonst gibt es Ärger.",
      "Könnten Sie bitte so schnell wie möglich einen Handwerker schicken?"
     ],
     "loesung": 2,
     "erklaerung": "„Könnten Sie bitte …“ ist höflich und trotzdem klar. „So schnell wie möglich“ zeigt, dass es dringend ist."
    },
    {
     "art": "wahl",
     "frage": "Welcher Satz ist eine sachliche Beschwerde?",
     "opt": [
      "Leider ist die Lieferung bis heute nicht angekommen, obwohl ich schon am 3. März bezahlt habe.",
      "Sie sind unmöglich!",
      "Ich bin sehr, sehr böse auf Sie."
     ],
     "loesung": 0,
     "erklaerung": "Eine gute Beschwerde nennt Fakten: was fehlt und seit wann. Gefühle und Vorwürfe helfen nicht."
    },
    {
     "art": "wahl",
     "frage": "Sie bitten Ihre Chefin um Urlaub. Welcher Satz passt?",
     "opt": [
      "Ich mache im August Urlaub.",
      "Ich möchte gern vom 4. bis 15. August Urlaub nehmen. Wäre das möglich?",
      "Geben Sie mir Urlaub."
     ],
     "loesung": 1,
     "erklaerung": "Sie nennen den genauen Zeitraum und fragen. Die Chefin entscheidet, deshalb ist eine Frage besser als eine Ansage."
    },
    {
     "art": "wahl",
     "frage": "Was gehört in eine Beschwerde?",
     "opt": [
      "Nur wie wütend Sie sind.",
      "Eine lange Geschichte über den ganzen Monat.",
      "Was das Problem ist, seit wann es das gibt und was Sie jetzt erwarten."
     ],
     "loesung": 2,
     "erklaerung": "Problem, Zeit, Erwartung: Mit diesen drei Teilen weiß der Empfänger genau, was er tun soll."
    },
    {
     "art": "wahl",
     "frage": "Welcher Satz sagt klar, was Sie erwarten?",
     "opt": [
      "Vielleicht können Sie ja mal was machen.",
      "Bitte schicken Sie mir bis Ende der Woche ein neues Gerät oder das Geld zurück.",
      "Mir ist alles egal."
     ],
     "loesung": 1,
     "erklaerung": "Eine klare Forderung nennt, was passieren soll und bis wann."
    },
    {
     "art": "wahl",
     "frage": "Sie bitten Ihren Nachbarn um Hilfe. Welcher Satz passt?",
     "opt": [
      "Hätten Sie am Samstag vielleicht eine Stunde Zeit, mir mit dem Schrank zu helfen?",
      "Sie müssen mir am Samstag helfen.",
      "Helfen Sie Schrank Samstag."
     ],
     "loesung": 0,
     "erklaerung": "„Hätten Sie vielleicht …“ ist sehr höflich. Der Nachbar muss nicht helfen, deshalb fragt man vorsichtig."
    },
    {
     "art": "wahl",
     "frage": "Ich ___ Sie bitten, die Musik nach 22 Uhr leiser zu machen.",
     "opt": [
      "werde",
      "würde",
      "wurde"
     ],
     "loesung": 1,
     "erklaerung": "„Ich würde Sie bitten“ ist Konjunktiv II und klingt höflich. „Wurde“ ist Vergangenheit."
    },
    {
     "art": "wahl",
     "frage": "Sie kündigen Ihren Vertrag im Fitnessstudio. Welcher Satz ist richtig?",
     "opt": [
      "Ich will nicht mehr.",
      "Ich komme nicht mehr, tschüss.",
      "Hiermit kündige ich meinen Vertrag zum nächstmöglichen Termin."
     ],
     "loesung": 2,
     "erklaerung": "Eine Kündigung muss klar sein. „Hiermit kündige ich …“ ist der übliche Satz dafür."
    },
    {
     "art": "ordnen",
     "frage": "Bau eine höfliche Bitte.",
     "teile": [
      "Könnten",
      "Sie",
      "mir",
      "bitte",
      "bis Freitag",
      "Bescheid",
      "geben?"
     ],
     "loesung": [
      0,
      1,
      2,
      3,
      4,
      5,
      6
     ],
     "erklaerung": "Bei einer Ja-Nein-Frage steht das Verb „Könnten“ vorne, „geben“ steht am Ende."
    },
    {
     "art": "ordnen",
     "frage": "Bau den Satz, der das Problem beschreibt.",
     "teile": [
      "Leider",
      "funktioniert",
      "die Heizung",
      "seit Montag",
      "nicht",
      "mehr."
     ],
     "loesung": [
      0,
      1,
      2,
      3,
      4,
      5
     ],
     "erklaerung": "Nach „Leider“ kommt das Verb auf Position zwei. „Nicht mehr“ steht am Ende."
    }
   ]
  },
  {
   "id": "tds4",
   "stufe": 2,
   "titel": "Typische Fehler vermeiden: Verbposition und Großschreibung",
   "kurz": "Die Fehler, die am häufigsten Punkte kosten",
   "ziel": "Nach diesem Block stellst du das Verb im Hauptsatz und im Nebensatz an die richtige Stelle und schreibst Nomen und die Sie-Form richtig groß.",
   "zeichen": "🔍",
   "farbe": "lila",
   "aufgaben": [
    {
     "art": "wahl",
     "frage": "Welcher Satz ist richtig?",
     "opt": [
      "Am Montag ich war krank.",
      "Am Montag war ich krank.",
      "Am Montag krank ich war."
     ],
     "loesung": 1,
     "erklaerung": "Im Hauptsatz steht das Verb auf Position zwei, auch wenn der Satz mit einer Zeitangabe beginnt."
    },
    {
     "art": "wahl",
     "frage": "Welcher Satz ist richtig?",
     "opt": [
      "Ich komme später, weil ich einen Termin habe.",
      "Ich komme später, weil ich habe einen Termin.",
      "Ich komme später, weil habe ich einen Termin."
     ],
     "loesung": 0,
     "erklaerung": "Nach „weil“ steht das Verb am Ende."
    },
    {
     "art": "wahl",
     "frage": "Sie schreiben an Ihren Vermieter. Welcher Satz ist richtig?",
     "opt": [
      "Können sie mir helfen?",
      "können Sie mir Helfen?",
      "Können Sie mir helfen?"
     ],
     "loesung": 2,
     "erklaerung": "In der höflichen Form schreibt man „Sie“ groß. Verben wie „helfen“ schreibt man klein."
    },
    {
     "art": "wahl",
     "frage": "Welcher Satz ist richtig?",
     "opt": [
      "Ich brauche einen neuen termin.",
      "Ich brauche einen neuen Termin.",
      "Ich Brauche einen neuen Termin."
     ],
     "loesung": 1,
     "erklaerung": "Nomen schreibt man im Deutschen groß, Verben klein."
    },
    {
     "art": "wahl",
     "frage": "Welcher Satz an Ihre Kursleiterin ist richtig?",
     "opt": [
      "Ich danke Ihnen für Ihre Hilfe.",
      "Ich danke ihnen für ihre Hilfe.",
      "Ich danke Ihnen für ihre Hilfe."
     ],
     "loesung": 0,
     "erklaerung": "In der Sie-Form schreibt man „Ihnen“ und „Ihre“ beide groß."
    },
    {
     "art": "wahl",
     "frage": "Welcher Satz ist richtig?",
     "opt": [
      "Deshalb ich kann nicht kommen.",
      "Deshalb kommen ich nicht kann.",
      "Deshalb kann ich nicht kommen."
     ],
     "loesung": 2,
     "erklaerung": "Nach „deshalb“ kommt sofort das Verb, dann das Subjekt."
    },
    {
     "art": "wahl",
     "frage": "Welcher Satz ist richtig?",
     "opt": [
      "Ich habe gestern beim Arzt gewesen.",
      "Ich bin gestern beim Arzt gewesen.",
      "Ich war gestern beim Arzt gewesen."
     ],
     "loesung": 1,
     "erklaerung": "„Sein“ bildet das Perfekt mit „bin“. Noch einfacher ist: „Ich war gestern beim Arzt.“"
    },
    {
     "art": "wahl",
     "frage": "Welcher Satz ist richtig?",
     "opt": [
      "Ich hoffe, dass Sie bald antworten.",
      "Ich hoffe, dass Sie antworten bald.",
      "Ich hoffe, dass antworten Sie bald."
     ],
     "loesung": 0,
     "erklaerung": "Nach „dass“ steht das Verb am Ende."
    },
    {
     "art": "ordnen",
     "frage": "Bau einen Satz mit „weil“.",
     "teile": [
      "Ich",
      "kann",
      "am Dienstag",
      "nicht",
      "kommen,",
      "weil",
      "mein Sohn",
      "krank",
      "ist."
     ],
     "loesung": [
      0,
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8
     ],
     "erklaerung": "Im Hauptsatz steht „kann“ auf Position zwei, im Satz mit „weil“ steht „ist“ am Ende."
    },
    {
     "art": "ordnen",
     "frage": "Bau einen Satz im Perfekt.",
     "teile": [
      "Gestern",
      "habe",
      "ich",
      "Ihre",
      "E-Mail",
      "bekommen."
     ],
     "loesung": [
      0,
      1,
      2,
      3,
      4,
      5
     ],
     "erklaerung": "„Habe“ steht auf Position zwei, das Partizip „bekommen“ am Ende."
    }
   ]
  }
 ],
 "teile": [
  {
   "nr": 1,
   "art": "mitteilung",
   "name": "Brief oder E-Mail",
   "kurz": "Aufgabe A oder B, vier Leitpunkte",
   "was": "In jeder Runde stehen zwei Aufgaben, A und B, wie in der Prüfung. Schreib eine oder beide. Zu jeder gibt es ein Muster.",
   "tipp": "Schreib zu jedem Leitpunkt zwei, drei Sätze. Erst der Grund, dann was du möchtest, am Ende Dank und Gruß.",
   "zeichen": "✉️",
   "farbe": "turq",
   "punkte": 20,
   "runden": [
    {
     "id": "tdzsr1",
     "titel": "Runde 1: A oder B",
     "aufgaben": [
      {
       "id": "tda1",
       "typ": "formell",
       "situation": "In Ihrer Wohnung funktioniert die Heizung im Wohnzimmer nicht. Es ist Januar und sehr kalt. Schreiben Sie an Ihren Vermieter, Herrn Lindner.",
       "sorte": "brief",
       "an": "Herr Peter Lindner, Vermieter",
       "betreff": "Heizung in meiner Wohnung",
       "punkte": [
        {
         "nr": 1,
         "was": "Grund für Ihr Schreiben",
         "hinweis": "Beschreiben Sie das Problem genau."
        },
        {
         "nr": 2,
         "was": "Seit wann",
         "hinweis": "Sagen Sie, seit wann es das Problem gibt und was Sie schon versucht haben."
        },
        {
         "nr": 3,
         "was": "Bitte",
         "hinweis": "Bitten Sie um eine Reparatur."
        },
        {
         "nr": 4,
         "was": "Termin",
         "hinweis": "Sagen Sie, wann Sie zu Hause sind."
        }
       ],
       "muster": "Betreff: Heizung in meiner Wohnung\nSehr geehrter Herr Lindner,\nich wohne in der Gartenstraße 14 im zweiten Stock. Leider funktioniert die Heizung im Wohnzimmer nicht. Sie bleibt kalt, auch wenn ich sie ganz aufdrehe.\nDas Problem gibt es seit letztem Montag. Ich habe die Heizung schon entlüftet, aber das hat nicht geholfen. Im Moment ist es im Wohnzimmer nur 15 Grad warm, und meine Tochter ist erkältet.\nBitte schicken Sie so schnell wie möglich einen Handwerker.\nIch bin jeden Tag ab 15 Uhr zu Hause. Am Samstag bin ich den ganzen Tag da. Sie erreichen mich unter 0176 2345 1189.\nMit freundlichen Grüßen\nDaniel Okafor",
       "hilfen": [
        "Leider funktioniert … nicht.",
        "Das Problem gibt es seit …",
        "Ich habe schon …, aber das hat nicht geholfen.",
        "Bitte schicken Sie so schnell wie möglich …",
        "Ich bin … zu Hause.",
        "Sie erreichen mich unter …"
       ],
       "erklaerung": "Jeder Leitpunkt hat einen eigenen kleinen Absatz. Details wie 15 Grad und die kranke Tochter zeigen, dass die Reparatur dringend ist.",
       "rubrik": [
        {
         "t": "I Aufgabenbewältigung",
         "h": "Alle vier Leitpunkte drin, mit Anrede und Gruß? Passt der Text zur Situation?",
         "stufen": [
          {
           "w": 5,
           "t": "A",
           "d": "B1, gut erfüllt"
          },
          {
           "w": 4,
           "t": "B",
           "d": "B1 erfüllt"
          },
          {
           "w": 3,
           "t": "C",
           "d": "A2, gut erfüllt"
          },
          {
           "w": 2,
           "t": "D",
           "d": "A2 erfüllt"
          },
          {
           "w": 1,
           "t": "E",
           "d": "kaum"
          },
          {
           "w": 0,
           "t": "F",
           "d": "nicht"
          }
         ]
        },
        {
         "t": "II Kommunikative Gestaltung",
         "h": "Passt der Ton (Sie oder du)? Ist der Brief gut aufgebaut und verbunden?",
         "stufen": [
          {
           "w": 5,
           "t": "A",
           "d": "B1, gut erfüllt"
          },
          {
           "w": 4,
           "t": "B",
           "d": "B1 erfüllt"
          },
          {
           "w": 3,
           "t": "C",
           "d": "A2, gut erfüllt"
          },
          {
           "w": 2,
           "t": "D",
           "d": "A2 erfüllt"
          },
          {
           "w": 1,
           "t": "E",
           "d": "kaum"
          },
          {
           "w": 0,
           "t": "F",
           "d": "nicht"
          }
         ]
        },
        {
         "t": "III Korrektheit",
         "h": "Grammatik und Rechtschreibung: Vergleiche mit dem Muster.",
         "stufen": [
          {
           "w": 5,
           "t": "A",
           "d": "B1, gut erfüllt"
          },
          {
           "w": 4,
           "t": "B",
           "d": "B1 erfüllt"
          },
          {
           "w": 3,
           "t": "C",
           "d": "A2, gut erfüllt"
          },
          {
           "w": 2,
           "t": "D",
           "d": "A2 erfüllt"
          },
          {
           "w": 1,
           "t": "E",
           "d": "kaum"
          },
          {
           "w": 0,
           "t": "F",
           "d": "nicht"
          }
         ]
        },
        {
         "t": "IV Wortschatz",
         "h": "Passende Wörter, nicht immer dieselben?",
         "stufen": [
          {
           "w": 5,
           "t": "A",
           "d": "B1, gut erfüllt"
          },
          {
           "w": 4,
           "t": "B",
           "d": "B1 erfüllt"
          },
          {
           "w": 3,
           "t": "C",
           "d": "A2, gut erfüllt"
          },
          {
           "w": 2,
           "t": "D",
           "d": "A2 erfüllt"
          },
          {
           "w": 1,
           "t": "E",
           "d": "kaum"
          },
          {
           "w": 0,
           "t": "F",
           "d": "nicht"
          }
         ]
        }
       ],
       "max": 20,
       "keineKI": true,
       "ohneWortzahl": true,
       "woerter": 90,
       "platzhalter": "Schreib hier deinen Brief …",
       "rubrikTitel": "Bewerte dich nach den vier Kriterien",
       "rubrikHinweis": "Jedes Kriterium bis 5 Punkte, zusammen 20: A2 ab 7, B1 ab 15. Wie die Prüfer die Stufen genau verteilen, ist nicht veröffentlicht; die Stufen hier sind eine Übungsschätzung. Eine Wortzahl gibt es nicht, schreib möglichst viel zu allen vier Punkten."
      },
      {
       "id": "tda2",
       "typ": "halbformell",
       "situation": "Sie waren drei Tage nicht im Deutschkurs, weil Ihr Kind krank war. Schreiben Sie eine E-Mail an Ihre Kursleiterin, Frau Brandt.",
       "sorte": "email",
       "an": "Frau Sabine Brandt, Kursleiterin",
       "betreff": "Fehlzeit von Montag bis Mittwoch",
       "punkte": [
        {
         "nr": 1,
         "was": "Entschuldigung",
         "hinweis": "Entschuldigen Sie sich, dass Sie nicht im Kurs waren."
        },
        {
         "nr": 2,
         "was": "Grund",
         "hinweis": "Erklären Sie, warum Sie nicht kommen konnten."
        },
        {
         "nr": 3,
         "was": "Unterricht",
         "hinweis": "Fragen Sie nach den Hausaufgaben und Materialien."
        },
        {
         "nr": 4,
         "was": "Wiederkommen",
         "hinweis": "Sagen Sie, wann Sie wieder im Kurs sind."
        }
       ],
       "muster": "Betreff: Fehlzeit von Montag bis Mittwoch\nLiebe Frau Brandt,\nes tut mir leid, dass ich von Montag bis Mittwoch nicht im Kurs war. Ich konnte Ihnen leider nicht früher Bescheid geben.\nMein Sohn Emre hatte hohes Fieber und durfte nicht in die Kita. Mein Mann musste arbeiten, deshalb bin ich bei ihm geblieben. Eine Bescheinigung vom Kinderarzt bringe ich mit.\nWas haben Sie in diesen drei Tagen gemacht? Können Sie mir bitte die Hausaufgaben und die Arbeitsblätter schicken? Dann kann ich zu Hause schon etwas nachholen.\nMeinem Sohn geht es jetzt besser. Ab Donnerstag bin ich wieder im Kurs.\nViele Grüße\nSelin Aydın",
       "hilfen": [
        "Es tut mir leid, dass ich … nicht … war.",
        "… hatte Fieber, deshalb …",
        "Eine Bescheinigung bringe ich mit.",
        "Können Sie mir bitte … schicken?",
        "Dann kann ich … nachholen.",
        "Ab … bin ich wieder im Kurs."
       ],
       "erklaerung": "Halbformell: „Liebe Frau Brandt“ und „Viele Grüße“, aber durchgehend Sie-Form. Die Bescheinigung zeigt, dass die Fehlzeit entschuldigt ist.",
       "rubrik": [
        {
         "t": "I Aufgabenbewältigung",
         "h": "Alle vier Leitpunkte drin, mit Anrede und Gruß? Passt der Text zur Situation?",
         "stufen": [
          {
           "w": 5,
           "t": "A",
           "d": "B1, gut erfüllt"
          },
          {
           "w": 4,
           "t": "B",
           "d": "B1 erfüllt"
          },
          {
           "w": 3,
           "t": "C",
           "d": "A2, gut erfüllt"
          },
          {
           "w": 2,
           "t": "D",
           "d": "A2 erfüllt"
          },
          {
           "w": 1,
           "t": "E",
           "d": "kaum"
          },
          {
           "w": 0,
           "t": "F",
           "d": "nicht"
          }
         ]
        },
        {
         "t": "II Kommunikative Gestaltung",
         "h": "Passt der Ton (Sie oder du)? Ist der Brief gut aufgebaut und verbunden?",
         "stufen": [
          {
           "w": 5,
           "t": "A",
           "d": "B1, gut erfüllt"
          },
          {
           "w": 4,
           "t": "B",
           "d": "B1 erfüllt"
          },
          {
           "w": 3,
           "t": "C",
           "d": "A2, gut erfüllt"
          },
          {
           "w": 2,
           "t": "D",
           "d": "A2 erfüllt"
          },
          {
           "w": 1,
           "t": "E",
           "d": "kaum"
          },
          {
           "w": 0,
           "t": "F",
           "d": "nicht"
          }
         ]
        },
        {
         "t": "III Korrektheit",
         "h": "Grammatik und Rechtschreibung: Vergleiche mit dem Muster.",
         "stufen": [
          {
           "w": 5,
           "t": "A",
           "d": "B1, gut erfüllt"
          },
          {
           "w": 4,
           "t": "B",
           "d": "B1 erfüllt"
          },
          {
           "w": 3,
           "t": "C",
           "d": "A2, gut erfüllt"
          },
          {
           "w": 2,
           "t": "D",
           "d": "A2 erfüllt"
          },
          {
           "w": 1,
           "t": "E",
           "d": "kaum"
          },
          {
           "w": 0,
           "t": "F",
           "d": "nicht"
          }
         ]
        },
        {
         "t": "IV Wortschatz",
         "h": "Passende Wörter, nicht immer dieselben?",
         "stufen": [
          {
           "w": 5,
           "t": "A",
           "d": "B1, gut erfüllt"
          },
          {
           "w": 4,
           "t": "B",
           "d": "B1 erfüllt"
          },
          {
           "w": 3,
           "t": "C",
           "d": "A2, gut erfüllt"
          },
          {
           "w": 2,
           "t": "D",
           "d": "A2 erfüllt"
          },
          {
           "w": 1,
           "t": "E",
           "d": "kaum"
          },
          {
           "w": 0,
           "t": "F",
           "d": "nicht"
          }
         ]
        }
       ],
       "max": 20,
       "keineKI": true,
       "ohneWortzahl": true,
       "woerter": 90,
       "platzhalter": "Schreib hier deinen Brief …",
       "rubrikTitel": "Bewerte dich nach den vier Kriterien",
       "rubrikHinweis": "Jedes Kriterium bis 5 Punkte, zusammen 20: A2 ab 7, B1 ab 15. Wie die Prüfer die Stufen genau verteilen, ist nicht veröffentlicht; die Stufen hier sind eine Übungsschätzung. Eine Wortzahl gibt es nicht, schreib möglichst viel zu allen vier Punkten."
      }
     ]
    },
    {
     "id": "tdzsr2",
     "titel": "Runde 2: A oder B",
     "aufgaben": [
      {
       "id": "tda3",
       "typ": "halbformell",
       "situation": "Sie fahren im August zwei Wochen weg. In dieser Zeit soll jemand Ihre Blumen gießen und Ihren Briefkasten leeren. Schreiben Sie Ihrem Nachbarn, Herrn Schulte, einen Brief.",
       "sorte": "brief",
       "an": "Herr Klaus Schulte, Nachbar",
       "betreff": "Blumen und Briefkasten im August",
       "punkte": [
        {
         "nr": 1,
         "was": "Grund",
         "hinweis": "Sagen Sie, warum und wie lange Sie weg sind."
        },
        {
         "nr": 2,
         "was": "Bitte",
         "hinweis": "Sagen Sie genau, was Herr Schulte machen soll."
        },
        {
         "nr": 3,
         "was": "Schlüssel",
         "hinweis": "Erklären Sie, wann und wie Sie ihm den Schlüssel geben."
        },
        {
         "nr": 4,
         "was": "Dank",
         "hinweis": "Bedanken Sie sich und bieten Sie selbst Hilfe an."
        }
       ],
       "muster": "Lieber Herr Schulte,\nich fahre vom 2. bis 16. August zu meiner Familie nach Portugal. Deshalb habe ich eine Bitte an Sie.\nKönnten Sie in dieser Zeit meine Blumen gießen? Es reicht, wenn Sie zweimal pro Woche kommen. Und könnten Sie bitte auch meinen Briefkasten leeren? Die Post können Sie einfach auf den Küchentisch legen.\nDen Schlüssel bringe ich Ihnen am Freitagabend vorbei, wenn Ihnen das passt. Sonst werfe ich ihn in Ihren Briefkasten.\nVielen Dank schon jetzt! Wenn Sie im Herbst wegfahren, helfe ich Ihnen natürlich auch gern.\nViele Grüße\nAna Ferreira\nerster Stock links",
       "hilfen": [
        "Ich fahre vom … bis … nach …",
        "Deshalb habe ich eine Bitte an Sie.",
        "Könnten Sie in dieser Zeit …?",
        "Es reicht, wenn Sie …",
        "Den Schlüssel bringe ich Ihnen … vorbei.",
        "Wenn Sie …, helfe ich Ihnen auch gern."
       ],
       "erklaerung": "Der Nachbar muss nicht helfen. Deshalb sind die Bitten als Fragen formuliert, und am Ende bietet die Schreiberin selbst Hilfe an.",
       "rubrik": [
        {
         "t": "I Aufgabenbewältigung",
         "h": "Alle vier Leitpunkte drin, mit Anrede und Gruß? Passt der Text zur Situation?",
         "stufen": [
          {
           "w": 5,
           "t": "A",
           "d": "B1, gut erfüllt"
          },
          {
           "w": 4,
           "t": "B",
           "d": "B1 erfüllt"
          },
          {
           "w": 3,
           "t": "C",
           "d": "A2, gut erfüllt"
          },
          {
           "w": 2,
           "t": "D",
           "d": "A2 erfüllt"
          },
          {
           "w": 1,
           "t": "E",
           "d": "kaum"
          },
          {
           "w": 0,
           "t": "F",
           "d": "nicht"
          }
         ]
        },
        {
         "t": "II Kommunikative Gestaltung",
         "h": "Passt der Ton (Sie oder du)? Ist der Brief gut aufgebaut und verbunden?",
         "stufen": [
          {
           "w": 5,
           "t": "A",
           "d": "B1, gut erfüllt"
          },
          {
           "w": 4,
           "t": "B",
           "d": "B1 erfüllt"
          },
          {
           "w": 3,
           "t": "C",
           "d": "A2, gut erfüllt"
          },
          {
           "w": 2,
           "t": "D",
           "d": "A2 erfüllt"
          },
          {
           "w": 1,
           "t": "E",
           "d": "kaum"
          },
          {
           "w": 0,
           "t": "F",
           "d": "nicht"
          }
         ]
        },
        {
         "t": "III Korrektheit",
         "h": "Grammatik und Rechtschreibung: Vergleiche mit dem Muster.",
         "stufen": [
          {
           "w": 5,
           "t": "A",
           "d": "B1, gut erfüllt"
          },
          {
           "w": 4,
           "t": "B",
           "d": "B1 erfüllt"
          },
          {
           "w": 3,
           "t": "C",
           "d": "A2, gut erfüllt"
          },
          {
           "w": 2,
           "t": "D",
           "d": "A2 erfüllt"
          },
          {
           "w": 1,
           "t": "E",
           "d": "kaum"
          },
          {
           "w": 0,
           "t": "F",
           "d": "nicht"
          }
         ]
        },
        {
         "t": "IV Wortschatz",
         "h": "Passende Wörter, nicht immer dieselben?",
         "stufen": [
          {
           "w": 5,
           "t": "A",
           "d": "B1, gut erfüllt"
          },
          {
           "w": 4,
           "t": "B",
           "d": "B1 erfüllt"
          },
          {
           "w": 3,
           "t": "C",
           "d": "A2, gut erfüllt"
          },
          {
           "w": 2,
           "t": "D",
           "d": "A2 erfüllt"
          },
          {
           "w": 1,
           "t": "E",
           "d": "kaum"
          },
          {
           "w": 0,
           "t": "F",
           "d": "nicht"
          }
         ]
        }
       ],
       "max": 20,
       "keineKI": true,
       "ohneWortzahl": true,
       "woerter": 90,
       "platzhalter": "Schreib hier deinen Brief …",
       "rubrikTitel": "Bewerte dich nach den vier Kriterien",
       "rubrikHinweis": "Jedes Kriterium bis 5 Punkte, zusammen 20: A2 ab 7, B1 ab 15. Wie die Prüfer die Stufen genau verteilen, ist nicht veröffentlicht; die Stufen hier sind eine Übungsschätzung. Eine Wortzahl gibt es nicht, schreib möglichst viel zu allen vier Punkten."
      },
      {
       "id": "tda4",
       "typ": "formell",
       "situation": "Ihre Schwester heiratet im Juli in Marokko. Sie möchten zwei Wochen Urlaub nehmen. Schreiben Sie eine E-Mail an Ihre Chefin, Frau Kessler.",
       "sorte": "email",
       "an": "Frau Monika Kessler, Abteilungsleiterin",
       "betreff": "Urlaubsantrag vom 7. bis 18. Juli",
       "punkte": [
        {
         "nr": 1,
         "was": "Grund",
         "hinweis": "Erklären Sie, warum Sie Urlaub brauchen."
        },
        {
         "nr": 2,
         "was": "Zeitraum",
         "hinweis": "Nennen Sie die genauen Tage."
        },
        {
         "nr": 3,
         "was": "Vertretung",
         "hinweis": "Sagen Sie, wer in dieser Zeit Ihre Arbeit macht."
        },
        {
         "nr": 4,
         "was": "Antwort",
         "hinweis": "Bitten Sie um eine Antwort und sagen Sie, bis wann."
        }
       ],
       "muster": "Betreff: Urlaubsantrag vom 7. bis 18. Juli\nSehr geehrte Frau Kessler,\nmeine Schwester heiratet im Juli in Marokko, und die ganze Familie fährt zur Hochzeit. Deshalb möchte ich gern Urlaub nehmen.\nIch brauche zwei Wochen, vom 7. bis zum 18. Juli. Am 21. Juli bin ich wieder bei der Arbeit.\nIch habe schon mit meinem Kollegen Herrn Petrović gesprochen. Er kann in dieser Zeit meine Schichten übernehmen. Dafür arbeite ich im August für ihn, wenn er Urlaub hat.\nBitte sagen Sie mir bis Ende Mai Bescheid, ob das geht. Ich möchte die Flüge bald buchen, weil sie sonst teurer werden.\nMit freundlichen Grüßen\nYoussef Amrani",
       "hilfen": [
        "Deshalb möchte ich gern Urlaub nehmen.",
        "Ich brauche … Wochen, vom … bis zum …",
        "Ich habe schon mit … gesprochen.",
        "Er kann in dieser Zeit … übernehmen.",
        "Bitte sagen Sie mir bis … Bescheid, ob das geht.",
        "…, weil sie sonst teurer werden."
       ],
       "erklaerung": "Die Chefin sieht sofort, dass die Arbeit in dieser Zeit gemacht wird. Das macht ein Ja leichter. Die Frist bis Ende Mai ist mit einem Grund erklärt.",
       "rubrik": [
        {
         "t": "I Aufgabenbewältigung",
         "h": "Alle vier Leitpunkte drin, mit Anrede und Gruß? Passt der Text zur Situation?",
         "stufen": [
          {
           "w": 5,
           "t": "A",
           "d": "B1, gut erfüllt"
          },
          {
           "w": 4,
           "t": "B",
           "d": "B1 erfüllt"
          },
          {
           "w": 3,
           "t": "C",
           "d": "A2, gut erfüllt"
          },
          {
           "w": 2,
           "t": "D",
           "d": "A2 erfüllt"
          },
          {
           "w": 1,
           "t": "E",
           "d": "kaum"
          },
          {
           "w": 0,
           "t": "F",
           "d": "nicht"
          }
         ]
        },
        {
         "t": "II Kommunikative Gestaltung",
         "h": "Passt der Ton (Sie oder du)? Ist der Brief gut aufgebaut und verbunden?",
         "stufen": [
          {
           "w": 5,
           "t": "A",
           "d": "B1, gut erfüllt"
          },
          {
           "w": 4,
           "t": "B",
           "d": "B1 erfüllt"
          },
          {
           "w": 3,
           "t": "C",
           "d": "A2, gut erfüllt"
          },
          {
           "w": 2,
           "t": "D",
           "d": "A2 erfüllt"
          },
          {
           "w": 1,
           "t": "E",
           "d": "kaum"
          },
          {
           "w": 0,
           "t": "F",
           "d": "nicht"
          }
         ]
        },
        {
         "t": "III Korrektheit",
         "h": "Grammatik und Rechtschreibung: Vergleiche mit dem Muster.",
         "stufen": [
          {
           "w": 5,
           "t": "A",
           "d": "B1, gut erfüllt"
          },
          {
           "w": 4,
           "t": "B",
           "d": "B1 erfüllt"
          },
          {
           "w": 3,
           "t": "C",
           "d": "A2, gut erfüllt"
          },
          {
           "w": 2,
           "t": "D",
           "d": "A2 erfüllt"
          },
          {
           "w": 1,
           "t": "E",
           "d": "kaum"
          },
          {
           "w": 0,
           "t": "F",
           "d": "nicht"
          }
         ]
        },
        {
         "t": "IV Wortschatz",
         "h": "Passende Wörter, nicht immer dieselben?",
         "stufen": [
          {
           "w": 5,
           "t": "A",
           "d": "B1, gut erfüllt"
          },
          {
           "w": 4,
           "t": "B",
           "d": "B1 erfüllt"
          },
          {
           "w": 3,
           "t": "C",
           "d": "A2, gut erfüllt"
          },
          {
           "w": 2,
           "t": "D",
           "d": "A2 erfüllt"
          },
          {
           "w": 1,
           "t": "E",
           "d": "kaum"
          },
          {
           "w": 0,
           "t": "F",
           "d": "nicht"
          }
         ]
        }
       ],
       "max": 20,
       "keineKI": true,
       "ohneWortzahl": true,
       "woerter": 90,
       "platzhalter": "Schreib hier deinen Brief …",
       "rubrikTitel": "Bewerte dich nach den vier Kriterien",
       "rubrikHinweis": "Jedes Kriterium bis 5 Punkte, zusammen 20: A2 ab 7, B1 ab 15. Wie die Prüfer die Stufen genau verteilen, ist nicht veröffentlicht; die Stufen hier sind eine Übungsschätzung. Eine Wortzahl gibt es nicht, schreib möglichst viel zu allen vier Punkten."
      }
     ]
    },
    {
     "id": "tdzsr3",
     "titel": "Runde 3: A oder B",
     "aufgaben": [
      {
       "id": "tda5",
       "typ": "halbformell",
       "situation": "Sie haben eine neue Arbeitsstelle. Ab nächstem Monat arbeiten Sie bis 16 Uhr. Ihre Tochter Mila geht in die Kita „Sonnenblume“, bis jetzt holen Sie sie um 14 Uhr ab. Schreiben Sie an die Leiterin der Kita, Frau Hoffmann.",
       "sorte": "email",
       "an": "Frau Ines Hoffmann, Kita „Sonnenblume“",
       "betreff": "Neue Abholzeit für Mila Rossi ab 1. März",
       "punkte": [
        {
         "nr": 1,
         "was": "Grund",
         "hinweis": "Erklären Sie, was sich bei Ihnen ändert."
        },
        {
         "nr": 2,
         "was": "Neue Abholzeit",
         "hinweis": "Sagen Sie, wann Sie Mila in Zukunft abholen."
        },
        {
         "nr": 3,
         "was": "Fragen",
         "hinweis": "Fragen Sie, was Sie dafür tun müssen."
        },
        {
         "nr": 4,
         "was": "Andere Person",
         "hinweis": "Sagen Sie, wer Mila manchmal abholt."
        }
       ],
       "muster": "Betreff: Neue Abholzeit für Mila Rossi ab 1. März\nLiebe Frau Hoffmann,\nich habe eine neue Stelle in einer Bäckerei gefunden und arbeite ab 1. März jeden Tag bis 16 Uhr.\nDeshalb kann ich Mila nicht mehr um 14 Uhr abholen. Ab März komme ich jeden Tag um halb fünf.\nIst das möglich? Muss ich dafür ein Formular ausfüllen oder mehr bezahlen? Bitte sagen Sie mir, was ich tun muss.\nManchmal holt meine Nachbarin, Frau Lange, Mila ab. Sie kennt Mila gut, und Mila geht gern mit ihr nach Hause. Ich gebe Frau Lange eine schriftliche Erlaubnis mit.\nVielen Dank für Ihre Hilfe.\nViele Grüße\nGiulia Rossi",
       "hilfen": [
        "Ich habe eine neue Stelle gefunden und arbeite ab …",
        "Deshalb kann ich … nicht mehr …",
        "Ab … komme ich jeden Tag um …",
        "Muss ich dafür …?",
        "Manchmal holt … Mila ab.",
        "Ich gebe … eine schriftliche Erlaubnis mit."
       ],
       "erklaerung": "Die Kita braucht zwei Dinge sicher: die neue Uhrzeit und wer das Kind abholen darf. Beides steht klar im Text.",
       "rubrik": [
        {
         "t": "I Aufgabenbewältigung",
         "h": "Alle vier Leitpunkte drin, mit Anrede und Gruß? Passt der Text zur Situation?",
         "stufen": [
          {
           "w": 5,
           "t": "A",
           "d": "B1, gut erfüllt"
          },
          {
           "w": 4,
           "t": "B",
           "d": "B1 erfüllt"
          },
          {
           "w": 3,
           "t": "C",
           "d": "A2, gut erfüllt"
          },
          {
           "w": 2,
           "t": "D",
           "d": "A2 erfüllt"
          },
          {
           "w": 1,
           "t": "E",
           "d": "kaum"
          },
          {
           "w": 0,
           "t": "F",
           "d": "nicht"
          }
         ]
        },
        {
         "t": "II Kommunikative Gestaltung",
         "h": "Passt der Ton (Sie oder du)? Ist der Brief gut aufgebaut und verbunden?",
         "stufen": [
          {
           "w": 5,
           "t": "A",
           "d": "B1, gut erfüllt"
          },
          {
           "w": 4,
           "t": "B",
           "d": "B1 erfüllt"
          },
          {
           "w": 3,
           "t": "C",
           "d": "A2, gut erfüllt"
          },
          {
           "w": 2,
           "t": "D",
           "d": "A2 erfüllt"
          },
          {
           "w": 1,
           "t": "E",
           "d": "kaum"
          },
          {
           "w": 0,
           "t": "F",
           "d": "nicht"
          }
         ]
        },
        {
         "t": "III Korrektheit",
         "h": "Grammatik und Rechtschreibung: Vergleiche mit dem Muster.",
         "stufen": [
          {
           "w": 5,
           "t": "A",
           "d": "B1, gut erfüllt"
          },
          {
           "w": 4,
           "t": "B",
           "d": "B1 erfüllt"
          },
          {
           "w": 3,
           "t": "C",
           "d": "A2, gut erfüllt"
          },
          {
           "w": 2,
           "t": "D",
           "d": "A2 erfüllt"
          },
          {
           "w": 1,
           "t": "E",
           "d": "kaum"
          },
          {
           "w": 0,
           "t": "F",
           "d": "nicht"
          }
         ]
        },
        {
         "t": "IV Wortschatz",
         "h": "Passende Wörter, nicht immer dieselben?",
         "stufen": [
          {
           "w": 5,
           "t": "A",
           "d": "B1, gut erfüllt"
          },
          {
           "w": 4,
           "t": "B",
           "d": "B1 erfüllt"
          },
          {
           "w": 3,
           "t": "C",
           "d": "A2, gut erfüllt"
          },
          {
           "w": 2,
           "t": "D",
           "d": "A2 erfüllt"
          },
          {
           "w": 1,
           "t": "E",
           "d": "kaum"
          },
          {
           "w": 0,
           "t": "F",
           "d": "nicht"
          }
         ]
        }
       ],
       "max": 20,
       "keineKI": true,
       "ohneWortzahl": true,
       "woerter": 90,
       "platzhalter": "Schreib hier deinen Brief …",
       "rubrikTitel": "Bewerte dich nach den vier Kriterien",
       "rubrikHinweis": "Jedes Kriterium bis 5 Punkte, zusammen 20: A2 ab 7, B1 ab 15. Wie die Prüfer die Stufen genau verteilen, ist nicht veröffentlicht; die Stufen hier sind eine Übungsschätzung. Eine Wortzahl gibt es nicht, schreib möglichst viel zu allen vier Punkten."
      },
      {
       "id": "tda6",
       "typ": "formell",
       "situation": "Sie sind seit zwei Jahren Mitglied im Fitnessstudio „FitPunkt“. Sie ziehen in eine andere Stadt und möchten den Vertrag kündigen. Schreiben Sie an das Fitnessstudio.",
       "sorte": "brief",
       "an": "Fitnessstudio FitPunkt, Mitgliederservice",
       "betreff": "Kündigung meiner Mitgliedschaft, Mitgliedsnummer 40817",
       "punkte": [
        {
         "nr": 1,
         "was": "Kündigung",
         "hinweis": "Kündigen Sie und nennen Sie Ihre Mitgliedsnummer."
        },
        {
         "nr": 2,
         "was": "Grund",
         "hinweis": "Erklären Sie, warum Sie kündigen."
        },
        {
         "nr": 3,
         "was": "Termin",
         "hinweis": "Sagen Sie, ab wann der Vertrag enden soll."
        },
        {
         "nr": 4,
         "was": "Bestätigung",
         "hinweis": "Bitten Sie um eine Bestätigung und sagen Sie, was mit dem Geld und der Karte passiert."
        }
       ],
       "muster": "Betreff: Kündigung meiner Mitgliedschaft, Mitgliedsnummer 40817\nSehr geehrte Damen und Herren,\nhiermit kündige ich meinen Vertrag mit der Mitgliedsnummer 40817.\nIch ziehe Ende April aus beruflichen Gründen nach Hamburg. Dort gibt es leider kein Studio von FitPunkt, deshalb kann ich nicht mehr bei Ihnen trainieren.\nBitte beenden Sie meine Mitgliedschaft zum 30. April. Wenn das nicht möglich ist, dann zum nächstmöglichen Termin.\nBitte schicken Sie mir eine schriftliche Bestätigung der Kündigung. Ab Mai dürfen Sie kein Geld mehr von meinem Konto abbuchen. Meine Mitgliedskarte gebe ich bei meinem letzten Besuch an der Theke ab.\nMit freundlichen Grüßen\nTomasz Wiśniewski",
       "hilfen": [
        "Hiermit kündige ich meinen Vertrag mit der Nummer …",
        "Ich ziehe … nach …",
        "Bitte beenden Sie meine Mitgliedschaft zum …",
        "Wenn das nicht möglich ist, dann zum nächstmöglichen Termin.",
        "Bitte schicken Sie mir eine schriftliche Bestätigung.",
        "Ab … dürfen Sie kein Geld mehr abbuchen."
       ],
       "erklaerung": "Eine Kündigung muss eindeutig sein: Nummer, Datum und die Bitte um Bestätigung. Der Satz mit dem nächstmöglichen Termin sichert ab, falls der 30. April nicht geht.",
       "rubrik": [
        {
         "t": "I Aufgabenbewältigung",
         "h": "Alle vier Leitpunkte drin, mit Anrede und Gruß? Passt der Text zur Situation?",
         "stufen": [
          {
           "w": 5,
           "t": "A",
           "d": "B1, gut erfüllt"
          },
          {
           "w": 4,
           "t": "B",
           "d": "B1 erfüllt"
          },
          {
           "w": 3,
           "t": "C",
           "d": "A2, gut erfüllt"
          },
          {
           "w": 2,
           "t": "D",
           "d": "A2 erfüllt"
          },
          {
           "w": 1,
           "t": "E",
           "d": "kaum"
          },
          {
           "w": 0,
           "t": "F",
           "d": "nicht"
          }
         ]
        },
        {
         "t": "II Kommunikative Gestaltung",
         "h": "Passt der Ton (Sie oder du)? Ist der Brief gut aufgebaut und verbunden?",
         "stufen": [
          {
           "w": 5,
           "t": "A",
           "d": "B1, gut erfüllt"
          },
          {
           "w": 4,
           "t": "B",
           "d": "B1 erfüllt"
          },
          {
           "w": 3,
           "t": "C",
           "d": "A2, gut erfüllt"
          },
          {
           "w": 2,
           "t": "D",
           "d": "A2 erfüllt"
          },
          {
           "w": 1,
           "t": "E",
           "d": "kaum"
          },
          {
           "w": 0,
           "t": "F",
           "d": "nicht"
          }
         ]
        },
        {
         "t": "III Korrektheit",
         "h": "Grammatik und Rechtschreibung: Vergleiche mit dem Muster.",
         "stufen": [
          {
           "w": 5,
           "t": "A",
           "d": "B1, gut erfüllt"
          },
          {
           "w": 4,
           "t": "B",
           "d": "B1 erfüllt"
          },
          {
           "w": 3,
           "t": "C",
           "d": "A2, gut erfüllt"
          },
          {
           "w": 2,
           "t": "D",
           "d": "A2 erfüllt"
          },
          {
           "w": 1,
           "t": "E",
           "d": "kaum"
          },
          {
           "w": 0,
           "t": "F",
           "d": "nicht"
          }
         ]
        },
        {
         "t": "IV Wortschatz",
         "h": "Passende Wörter, nicht immer dieselben?",
         "stufen": [
          {
           "w": 5,
           "t": "A",
           "d": "B1, gut erfüllt"
          },
          {
           "w": 4,
           "t": "B",
           "d": "B1 erfüllt"
          },
          {
           "w": 3,
           "t": "C",
           "d": "A2, gut erfüllt"
          },
          {
           "w": 2,
           "t": "D",
           "d": "A2 erfüllt"
          },
          {
           "w": 1,
           "t": "E",
           "d": "kaum"
          },
          {
           "w": 0,
           "t": "F",
           "d": "nicht"
          }
         ]
        }
       ],
       "max": 20,
       "keineKI": true,
       "ohneWortzahl": true,
       "woerter": 90,
       "platzhalter": "Schreib hier deinen Brief …",
       "rubrikTitel": "Bewerte dich nach den vier Kriterien",
       "rubrikHinweis": "Jedes Kriterium bis 5 Punkte, zusammen 20: A2 ab 7, B1 ab 15. Wie die Prüfer die Stufen genau verteilen, ist nicht veröffentlicht; die Stufen hier sind eine Übungsschätzung. Eine Wortzahl gibt es nicht, schreib möglichst viel zu allen vier Punkten."
      }
     ]
    },
    {
     "id": "tdzsr4",
     "titel": "Runde 4: A oder B",
     "aufgaben": [
      {
       "id": "tda7",
       "typ": "informell",
       "situation": "Sie haben Ihre Deutschprüfung bestanden und machen am Samstag eine kleine Feier. Schreiben Sie Ihrer Freundin Lena eine E-Mail.",
       "sorte": "email",
       "an": "Lena Hartmann",
       "betreff": "Einladung zu meiner Feier am Samstag",
       "punkte": [
        {
         "nr": 1,
         "was": "Grund",
         "hinweis": "Erzählen Sie, warum Sie feiern."
        },
        {
         "nr": 2,
         "was": "Zeit und Ort",
         "hinweis": "Sagen Sie, wann und wo die Feier ist."
        },
        {
         "nr": 3,
         "was": "Programm",
         "hinweis": "Beschreiben Sie, was Sie planen."
        },
        {
         "nr": 4,
         "was": "Bitte",
         "hinweis": "Sagen Sie, was Lena mitbringen kann, und bitten Sie um Antwort."
        }
       ],
       "muster": "Betreff: Einladung zu meiner Feier am Samstag\nLiebe Lena,\nstell dir vor, ich habe die Deutschprüfung bestanden! Ich habe so lange dafür gelernt und bin richtig froh. Das möchte ich mit dir und ein paar Freunden feiern.\nDie Feier ist am Samstag, den 14. Juni, ab 18 Uhr bei mir zu Hause. Meine neue Adresse ist Lindenweg 7.\nIch koche syrisches Essen, und wenn das Wetter schön ist, sitzen wir auf dem Balkon. Olga aus meinem Kurs kommt auch, du kennst sie schon.\nKannst du vielleicht einen Salat mitbringen? Bitte sag mir bis Donnerstag Bescheid, ob du kommst.\nIch freue mich auf dich!\nLiebe Grüße\nRana",
       "hilfen": [
        "Stell dir vor, ich habe …",
        "Das möchte ich mit dir feiern.",
        "Die Feier ist am … ab … Uhr bei …",
        "Wenn das Wetter schön ist, …",
        "Kannst du vielleicht … mitbringen?",
        "Bitte sag mir bis … Bescheid, ob du kommst."
       ],
       "erklaerung": "Bei einer Freundin schreibt man mit „du“ und darf persönlich sein. Trotzdem stehen alle wichtigen Informationen drin: Tag, Uhrzeit, Adresse und bis wann sie antworten soll.",
       "rubrik": [
        {
         "t": "I Aufgabenbewältigung",
         "h": "Alle vier Leitpunkte drin, mit Anrede und Gruß? Passt der Text zur Situation?",
         "stufen": [
          {
           "w": 5,
           "t": "A",
           "d": "B1, gut erfüllt"
          },
          {
           "w": 4,
           "t": "B",
           "d": "B1 erfüllt"
          },
          {
           "w": 3,
           "t": "C",
           "d": "A2, gut erfüllt"
          },
          {
           "w": 2,
           "t": "D",
           "d": "A2 erfüllt"
          },
          {
           "w": 1,
           "t": "E",
           "d": "kaum"
          },
          {
           "w": 0,
           "t": "F",
           "d": "nicht"
          }
         ]
        },
        {
         "t": "II Kommunikative Gestaltung",
         "h": "Passt der Ton (Sie oder du)? Ist der Brief gut aufgebaut und verbunden?",
         "stufen": [
          {
           "w": 5,
           "t": "A",
           "d": "B1, gut erfüllt"
          },
          {
           "w": 4,
           "t": "B",
           "d": "B1 erfüllt"
          },
          {
           "w": 3,
           "t": "C",
           "d": "A2, gut erfüllt"
          },
          {
           "w": 2,
           "t": "D",
           "d": "A2 erfüllt"
          },
          {
           "w": 1,
           "t": "E",
           "d": "kaum"
          },
          {
           "w": 0,
           "t": "F",
           "d": "nicht"
          }
         ]
        },
        {
         "t": "III Korrektheit",
         "h": "Grammatik und Rechtschreibung: Vergleiche mit dem Muster.",
         "stufen": [
          {
           "w": 5,
           "t": "A",
           "d": "B1, gut erfüllt"
          },
          {
           "w": 4,
           "t": "B",
           "d": "B1 erfüllt"
          },
          {
           "w": 3,
           "t": "C",
           "d": "A2, gut erfüllt"
          },
          {
           "w": 2,
           "t": "D",
           "d": "A2 erfüllt"
          },
          {
           "w": 1,
           "t": "E",
           "d": "kaum"
          },
          {
           "w": 0,
           "t": "F",
           "d": "nicht"
          }
         ]
        },
        {
         "t": "IV Wortschatz",
         "h": "Passende Wörter, nicht immer dieselben?",
         "stufen": [
          {
           "w": 5,
           "t": "A",
           "d": "B1, gut erfüllt"
          },
          {
           "w": 4,
           "t": "B",
           "d": "B1 erfüllt"
          },
          {
           "w": 3,
           "t": "C",
           "d": "A2, gut erfüllt"
          },
          {
           "w": 2,
           "t": "D",
           "d": "A2 erfüllt"
          },
          {
           "w": 1,
           "t": "E",
           "d": "kaum"
          },
          {
           "w": 0,
           "t": "F",
           "d": "nicht"
          }
         ]
        }
       ],
       "max": 20,
       "keineKI": true,
       "ohneWortzahl": true,
       "woerter": 90,
       "platzhalter": "Schreib hier deinen Brief …",
       "rubrikTitel": "Bewerte dich nach den vier Kriterien",
       "rubrikHinweis": "Jedes Kriterium bis 5 Punkte, zusammen 20: A2 ab 7, B1 ab 15. Wie die Prüfer die Stufen genau verteilen, ist nicht veröffentlicht; die Stufen hier sind eine Übungsschätzung. Eine Wortzahl gibt es nicht, schreib möglichst viel zu allen vier Punkten."
      },
      {
       "id": "tda8",
       "typ": "formell",
       "situation": "Sie haben in einem Onlineshop einen Wasserkocher bestellt. Er ist kaputt bei Ihnen angekommen. Schreiben Sie an den Kundenservice.",
       "sorte": "email",
       "an": "Kundenservice, Onlineshop Haushaltsstube",
       "betreff": "Defekter Wasserkocher, Bestellnummer 72-55031",
       "punkte": [
        {
         "nr": 1,
         "was": "Bestellung",
         "hinweis": "Sagen Sie, was Sie wann bestellt haben."
        },
        {
         "nr": 2,
         "was": "Problem",
         "hinweis": "Beschreiben Sie genau, was kaputt ist."
        },
        {
         "nr": 3,
         "was": "Forderung",
         "hinweis": "Sagen Sie, was Sie jetzt möchten."
        },
        {
         "nr": 4,
         "was": "Rücksendung",
         "hinweis": "Fragen Sie, wie Sie das Gerät zurückschicken."
        }
       ],
       "muster": "Betreff: Defekter Wasserkocher, Bestellnummer 72-55031\nSehr geehrte Damen und Herren,\nam 3. November habe ich bei Ihnen einen Wasserkocher für 34,99 Euro bestellt. Die Bestellnummer ist 72-55031.\nDas Paket ist gestern angekommen. Leider funktioniert der Wasserkocher nicht. Wenn ich ihn einschalte, leuchtet das Licht, aber das Wasser wird nicht warm. Außerdem hat der Deckel einen Riss.\nBitte schicken Sie mir einen neuen Wasserkocher. Wenn das nicht geht, möchte ich mein Geld zurück.\nWie kann ich das Gerät zurückschicken? Bekomme ich von Ihnen ein Rücksendeetikett, oder muss ich das Porto selbst bezahlen?\nMit freundlichen Grüßen\nMehmet Demir",
       "hilfen": [
        "Am … habe ich bei Ihnen … bestellt.",
        "Die Bestellnummer ist …",
        "Leider funktioniert … nicht.",
        "Wenn ich …, …",
        "Bitte schicken Sie mir … Wenn das nicht geht, möchte ich …",
        "Wie kann ich das Gerät zurückschicken?"
       ],
       "erklaerung": "Mit Bestellnummer und genauer Beschreibung kann der Kundenservice sofort helfen. Die Forderung hat einen Plan B: neues Gerät oder Geld zurück.",
       "rubrik": [
        {
         "t": "I Aufgabenbewältigung",
         "h": "Alle vier Leitpunkte drin, mit Anrede und Gruß? Passt der Text zur Situation?",
         "stufen": [
          {
           "w": 5,
           "t": "A",
           "d": "B1, gut erfüllt"
          },
          {
           "w": 4,
           "t": "B",
           "d": "B1 erfüllt"
          },
          {
           "w": 3,
           "t": "C",
           "d": "A2, gut erfüllt"
          },
          {
           "w": 2,
           "t": "D",
           "d": "A2 erfüllt"
          },
          {
           "w": 1,
           "t": "E",
           "d": "kaum"
          },
          {
           "w": 0,
           "t": "F",
           "d": "nicht"
          }
         ]
        },
        {
         "t": "II Kommunikative Gestaltung",
         "h": "Passt der Ton (Sie oder du)? Ist der Brief gut aufgebaut und verbunden?",
         "stufen": [
          {
           "w": 5,
           "t": "A",
           "d": "B1, gut erfüllt"
          },
          {
           "w": 4,
           "t": "B",
           "d": "B1 erfüllt"
          },
          {
           "w": 3,
           "t": "C",
           "d": "A2, gut erfüllt"
          },
          {
           "w": 2,
           "t": "D",
           "d": "A2 erfüllt"
          },
          {
           "w": 1,
           "t": "E",
           "d": "kaum"
          },
          {
           "w": 0,
           "t": "F",
           "d": "nicht"
          }
         ]
        },
        {
         "t": "III Korrektheit",
         "h": "Grammatik und Rechtschreibung: Vergleiche mit dem Muster.",
         "stufen": [
          {
           "w": 5,
           "t": "A",
           "d": "B1, gut erfüllt"
          },
          {
           "w": 4,
           "t": "B",
           "d": "B1 erfüllt"
          },
          {
           "w": 3,
           "t": "C",
           "d": "A2, gut erfüllt"
          },
          {
           "w": 2,
           "t": "D",
           "d": "A2 erfüllt"
          },
          {
           "w": 1,
           "t": "E",
           "d": "kaum"
          },
          {
           "w": 0,
           "t": "F",
           "d": "nicht"
          }
         ]
        },
        {
         "t": "IV Wortschatz",
         "h": "Passende Wörter, nicht immer dieselben?",
         "stufen": [
          {
           "w": 5,
           "t": "A",
           "d": "B1, gut erfüllt"
          },
          {
           "w": 4,
           "t": "B",
           "d": "B1 erfüllt"
          },
          {
           "w": 3,
           "t": "C",
           "d": "A2, gut erfüllt"
          },
          {
           "w": 2,
           "t": "D",
           "d": "A2 erfüllt"
          },
          {
           "w": 1,
           "t": "E",
           "d": "kaum"
          },
          {
           "w": 0,
           "t": "F",
           "d": "nicht"
          }
         ]
        }
       ],
       "max": 20,
       "keineKI": true,
       "ohneWortzahl": true,
       "woerter": 90,
       "platzhalter": "Schreib hier deinen Brief …",
       "rubrikTitel": "Bewerte dich nach den vier Kriterien",
       "rubrikHinweis": "Jedes Kriterium bis 5 Punkte, zusammen 20: A2 ab 7, B1 ab 15. Wie die Prüfer die Stufen genau verteilen, ist nicht veröffentlicht; die Stufen hier sind eine Übungsschätzung. Eine Wortzahl gibt es nicht, schreib möglichst viel zu allen vier Punkten."
      }
     ]
    }
   ]
  }
 ],
 "laeufe": [
  {
   "id": "tdzsl1",
   "titel": "Prüfungslauf 1",
   "minuten": 30,
   "aufgaben": [
    {
     "id": "tda9",
     "typ": "formell",
     "situation": "Sie haben am Dienstag um 10 Uhr einen Termin bei Ihrer Hausärztin, Frau Dr. Weber. Sie können nicht kommen. Schreiben Sie eine E-Mail an die Praxis.",
     "sorte": "email",
     "an": "Praxis Dr. Weber, Anmeldung",
     "betreff": "Absage Termin am Dienstag, 12. März, 10 Uhr",
     "punkte": [
      {
       "nr": 1,
       "was": "Absage",
       "hinweis": "Sagen Sie Ihren Termin ab."
      },
      {
       "nr": 2,
       "was": "Grund",
       "hinweis": "Erklären Sie, warum Sie nicht kommen können."
      },
      {
       "nr": 3,
       "was": "Neuer Termin",
       "hinweis": "Sagen Sie, wann Sie Zeit haben."
      },
      {
       "nr": 4,
       "was": "Rezept",
       "hinweis": "Sie brauchen bald ein neues Rezept. Fragen Sie, wie Sie es bekommen."
      }
     ],
     "muster": "Betreff: Absage Termin am Dienstag, 12. März, 10 Uhr\nSehr geehrte Damen und Herren,\nich habe am Dienstag, den 12. März, um 10 Uhr einen Termin bei Frau Dr. Weber. Leider kann ich nicht kommen.\nMeine Firma schickt mich in dieser Woche zu einer Schulung nach Köln. Ich habe das erst gestern erfahren.\nIch hätte gern einen neuen Termin. Ab dem 18. März habe ich jeden Vormittag Zeit, am liebsten vor 9 Uhr.\nAußerdem habe ich nur noch Tabletten für zehn Tage. Kann ich das Rezept für meine Blutdrucktabletten vorher in der Praxis abholen?\nMit freundlichen Grüßen\nOlena Kovalenko\nGeburtsdatum: 04.06.1979",
     "hilfen": [
      "Ich habe am … um … einen Termin bei …",
      "Leider kann ich nicht kommen.",
      "Ich habe das erst gestern erfahren.",
      "Ich hätte gern einen neuen Termin.",
      "Ab dem … habe ich … Zeit.",
      "Kann ich das Rezept … abholen?"
     ],
     "erklaerung": "Die Praxis findet den Termin schnell, weil Datum, Uhrzeit und Geburtsdatum dastehen. Der Grund ist kurz, mehr muss man der Praxis nicht erzählen.",
     "rubrik": [
      {
       "t": "I Aufgabenbewältigung",
       "h": "Alle vier Leitpunkte drin, mit Anrede und Gruß? Passt der Text zur Situation?",
       "stufen": [
        {
         "w": 5,
         "t": "A",
         "d": "B1, gut erfüllt"
        },
        {
         "w": 4,
         "t": "B",
         "d": "B1 erfüllt"
        },
        {
         "w": 3,
         "t": "C",
         "d": "A2, gut erfüllt"
        },
        {
         "w": 2,
         "t": "D",
         "d": "A2 erfüllt"
        },
        {
         "w": 1,
         "t": "E",
         "d": "kaum"
        },
        {
         "w": 0,
         "t": "F",
         "d": "nicht"
        }
       ]
      },
      {
       "t": "II Kommunikative Gestaltung",
       "h": "Passt der Ton (Sie oder du)? Ist der Brief gut aufgebaut und verbunden?",
       "stufen": [
        {
         "w": 5,
         "t": "A",
         "d": "B1, gut erfüllt"
        },
        {
         "w": 4,
         "t": "B",
         "d": "B1 erfüllt"
        },
        {
         "w": 3,
         "t": "C",
         "d": "A2, gut erfüllt"
        },
        {
         "w": 2,
         "t": "D",
         "d": "A2 erfüllt"
        },
        {
         "w": 1,
         "t": "E",
         "d": "kaum"
        },
        {
         "w": 0,
         "t": "F",
         "d": "nicht"
        }
       ]
      },
      {
       "t": "III Korrektheit",
       "h": "Grammatik und Rechtschreibung: Vergleiche mit dem Muster.",
       "stufen": [
        {
         "w": 5,
         "t": "A",
         "d": "B1, gut erfüllt"
        },
        {
         "w": 4,
         "t": "B",
         "d": "B1 erfüllt"
        },
        {
         "w": 3,
         "t": "C",
         "d": "A2, gut erfüllt"
        },
        {
         "w": 2,
         "t": "D",
         "d": "A2 erfüllt"
        },
        {
         "w": 1,
         "t": "E",
         "d": "kaum"
        },
        {
         "w": 0,
         "t": "F",
         "d": "nicht"
        }
       ]
      },
      {
       "t": "IV Wortschatz",
       "h": "Passende Wörter, nicht immer dieselben?",
       "stufen": [
        {
         "w": 5,
         "t": "A",
         "d": "B1, gut erfüllt"
        },
        {
         "w": 4,
         "t": "B",
         "d": "B1 erfüllt"
        },
        {
         "w": 3,
         "t": "C",
         "d": "A2, gut erfüllt"
        },
        {
         "w": 2,
         "t": "D",
         "d": "A2 erfüllt"
        },
        {
         "w": 1,
         "t": "E",
         "d": "kaum"
        },
        {
         "w": 0,
         "t": "F",
         "d": "nicht"
        }
       ]
      }
     ],
     "max": 20,
     "keineKI": true,
     "ohneWortzahl": true,
     "woerter": 90,
     "platzhalter": "Schreib hier deinen Brief …",
     "rubrikTitel": "Bewerte dich nach den vier Kriterien",
     "rubrikHinweis": "Jedes Kriterium bis 5 Punkte, zusammen 20: A2 ab 7, B1 ab 15. Wie die Prüfer die Stufen genau verteilen, ist nicht veröffentlicht; die Stufen hier sind eine Übungsschätzung. Eine Wortzahl gibt es nicht, schreib möglichst viel zu allen vier Punkten."
    }
   ]
  },
  {
   "id": "tdzsl2",
   "titel": "Prüfungslauf 2",
   "minuten": 30,
   "aufgaben": [
    {
     "id": "tda11",
     "typ": "halbformell",
     "situation": "Ihre Tochter Amira geht in die Klasse 3b. Sie haben diesen Elternbrief von der Klassenlehrerin bekommen. Antworten Sie Frau Schröder.",
     "eingang": {
      "von": "Katrin Schröder, Klassenlehrerin 3b, Grundschule am Park",
      "betreff": "Ausflug in den Tierpark am Freitag, 23. Mai",
      "text": "Liebe Eltern,\nam Freitag, den 23. Mai, fährt die Klasse 3b mit dem Bus in den Tierpark. Wir treffen uns um 8 Uhr an der Schule und sind um 14 Uhr zurück. Der Ausflug kostet 9 Euro für Bus und Eintritt. Bitte geben Sie Ihrem Kind ein Pausenbrot und etwas zu trinken mit.\nWir suchen noch zwei Eltern, die uns begleiten können.\nBitte antworten Sie mir bis Montag.\nViele Grüße\nKatrin Schröder"
     },
     "sorte": "brief",
     "an": "Frau Katrin Schröder, Klassenlehrerin 3b",
     "betreff": "Ausflug in den Tierpark am 23. Mai",
     "punkte": [
      {
       "nr": 1,
       "was": "Teilnahme",
       "hinweis": "Sagen Sie, ob Amira mitfährt."
      },
      {
       "nr": 2,
       "was": "Geld",
       "hinweis": "Sagen Sie, wie Sie die 9 Euro bezahlen."
      },
      {
       "nr": 3,
       "was": "Begleitung",
       "hinweis": "Sagen Sie, ob Sie mitkommen können, und warum."
      },
      {
       "nr": 4,
       "was": "Wichtiger Hinweis",
       "hinweis": "Informieren Sie die Lehrerin über etwas Wichtiges zur Gesundheit von Amira."
      }
     ],
     "muster": "Liebe Frau Schröder,\nvielen Dank für Ihren Brief. Amira darf am 23. Mai mit in den Tierpark fahren. Sie freut sich schon sehr.\nDie 9 Euro gebe ich ihr am Montag in einem Umschlag mit.\nIch kann den Ausflug gern begleiten. Am Freitag habe ich frei, weil ich nur von Montag bis Donnerstag arbeite.\nEine wichtige Information noch: Amira hat eine Allergie gegen Nüsse. Ich packe ihr Essen selbst ein, aber bitte geben Sie ihr keine Süßigkeiten von anderen Kindern. Ihr Notfallmedikament ist immer in ihrem Rucksack.\nViele Grüße\nHana Saleh",
     "hilfen": [
      "Vielen Dank für Ihren Brief.",
      "… darf am … mitfahren.",
      "Die … Euro gebe ich ihr am … mit.",
      "Ich kann den Ausflug gern begleiten.",
      "Eine wichtige Information noch: …",
      "Bitte geben Sie ihr keine …"
     ],
     "erklaerung": "Alle Fragen aus dem Elternbrief sind beantwortet. Der Hinweis zur Allergie ist kurz und sagt der Lehrerin genau, worauf sie achten muss.",
     "rubrik": [
      {
       "t": "I Aufgabenbewältigung",
       "h": "Alle vier Leitpunkte drin, mit Anrede und Gruß? Passt der Text zur Situation?",
       "stufen": [
        {
         "w": 5,
         "t": "A",
         "d": "B1, gut erfüllt"
        },
        {
         "w": 4,
         "t": "B",
         "d": "B1 erfüllt"
        },
        {
         "w": 3,
         "t": "C",
         "d": "A2, gut erfüllt"
        },
        {
         "w": 2,
         "t": "D",
         "d": "A2 erfüllt"
        },
        {
         "w": 1,
         "t": "E",
         "d": "kaum"
        },
        {
         "w": 0,
         "t": "F",
         "d": "nicht"
        }
       ]
      },
      {
       "t": "II Kommunikative Gestaltung",
       "h": "Passt der Ton (Sie oder du)? Ist der Brief gut aufgebaut und verbunden?",
       "stufen": [
        {
         "w": 5,
         "t": "A",
         "d": "B1, gut erfüllt"
        },
        {
         "w": 4,
         "t": "B",
         "d": "B1 erfüllt"
        },
        {
         "w": 3,
         "t": "C",
         "d": "A2, gut erfüllt"
        },
        {
         "w": 2,
         "t": "D",
         "d": "A2 erfüllt"
        },
        {
         "w": 1,
         "t": "E",
         "d": "kaum"
        },
        {
         "w": 0,
         "t": "F",
         "d": "nicht"
        }
       ]
      },
      {
       "t": "III Korrektheit",
       "h": "Grammatik und Rechtschreibung: Vergleiche mit dem Muster.",
       "stufen": [
        {
         "w": 5,
         "t": "A",
         "d": "B1, gut erfüllt"
        },
        {
         "w": 4,
         "t": "B",
         "d": "B1 erfüllt"
        },
        {
         "w": 3,
         "t": "C",
         "d": "A2, gut erfüllt"
        },
        {
         "w": 2,
         "t": "D",
         "d": "A2 erfüllt"
        },
        {
         "w": 1,
         "t": "E",
         "d": "kaum"
        },
        {
         "w": 0,
         "t": "F",
         "d": "nicht"
        }
       ]
      },
      {
       "t": "IV Wortschatz",
       "h": "Passende Wörter, nicht immer dieselben?",
       "stufen": [
        {
         "w": 5,
         "t": "A",
         "d": "B1, gut erfüllt"
        },
        {
         "w": 4,
         "t": "B",
         "d": "B1 erfüllt"
        },
        {
         "w": 3,
         "t": "C",
         "d": "A2, gut erfüllt"
        },
        {
         "w": 2,
         "t": "D",
         "d": "A2 erfüllt"
        },
        {
         "w": 1,
         "t": "E",
         "d": "kaum"
        },
        {
         "w": 0,
         "t": "F",
         "d": "nicht"
        }
       ]
      }
     ],
     "max": 20,
     "keineKI": true,
     "ohneWortzahl": true,
     "woerter": 90,
     "platzhalter": "Schreib hier deinen Brief …",
     "rubrikTitel": "Bewerte dich nach den vier Kriterien",
     "rubrikHinweis": "Jedes Kriterium bis 5 Punkte, zusammen 20: A2 ab 7, B1 ab 15. Wie die Prüfer die Stufen genau verteilen, ist nicht veröffentlicht; die Stufen hier sind eine Übungsschätzung. Eine Wortzahl gibt es nicht, schreib möglichst viel zu allen vier Punkten."
    }
   ]
  }
 ]
};
