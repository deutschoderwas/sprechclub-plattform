/* ============================================================
   deutschoderwas club — SPRECHEN telc Deutsch B1

   Aufbau nach dem offiziellen telc-Format (Übungstest 1 Zertifikat
   Deutsch, geprüft 01.11.2026): Paarprüfung ca. 15 Minuten,
   20 Minuten Vorbereitung.

     Teil 1  Einander kennenlernen     ca. 3 Min   max. 15 Punkte
     Teil 2  Über ein Thema sprechen   ca. 6 Min   max. 30 Punkte
     Teil 3  Gemeinsam etwas planen    ca. 6 Min   max. 30 Punkte

   Die Karten nutzen kopf/auftrag/text/frage — pruefung-sprechen.js
   zeigt damit den Zeitschriftentext und die Nachfrage mit an.
   Alle Texte eigene. Prüfungslauf 2 nimmt die erste Kennenlern-
   Karte noch einmal (es gibt vier).
   ============================================================ */

window.SPRECHEN_TELC_B1 = {
 "niveau": "telcB1",
 "pruefung": "telc Deutsch B1",
 "minuten": 15,
 "punkte": 75,
 "intro": "Die mündliche Prüfung bei telc B1 ist eine Paarprüfung, etwa fünfzehn Minuten, vorher zwanzig Minuten Vorbereitung. Drei Teile: einander kennenlernen, über ein Thema sprechen (mit einem Zeitschriftentext), gemeinsam etwas planen. Bewertet werden Ausdrucksfähigkeit, Aufgabenbewältigung, formale Richtigkeit und Aussprache. Hier übst du allein — sprich laut, nimm dich auf und vergleiche mit dem Muster.",
 "stufen": [
  {
   "nr": 1,
   "titel": "Die Bausteine",
   "zeichen": "🧱",
   "was": "Sich vorstellen, nachfragen, einen Text wiedergeben."
  },
  {
   "nr": 2,
   "titel": "Im Gespräch",
   "zeichen": "💬",
   "was": "Meinung sagen, widersprechen, vorschlagen und sich einigen."
  },
  {
   "nr": 3,
   "titel": "Die drei Teile",
   "zeichen": "🎯",
   "was": "Kennenlernen, Thema, Planen — jeder Teil mit Musterlösung zum Anhören."
  },
  {
   "nr": 4,
   "titel": "Die ganze Prüfung",
   "zeichen": "⏱️",
   "was": "Alle drei Teile hintereinander, fünfzehn Minuten mit Uhr."
  }
 ],
 "bloecke": [
  {
   "id": "tb1m1",
   "stufe": 1,
   "titel": "Sich vorstellen und nachfragen",
   "kurz": "Aus Stichwörtern echte Fragen machen und natürlich antworten",
   "ziel": "Nach diesem Block stellst du dich in ganzen Sätzen vor und machst aus jedem Stichwort eine passende Frage an deine Partnerin oder deinen Partner.",
   "zeichen": "👋",
   "farbe": "turq",
   "aufgaben": [
    {
     "art": "wahl",
     "frage": "Auf deinem Blatt steht das Stichwort „Herkunft\". Was fragst du?",
     "optionen": [
      "Herkunft?",
      "Woher kommst du ursprünglich?",
      "Wo ist deine Herkunft gewesen?"
     ],
     "loesung": 1,
     "erklaerung": "Aus dem Stichwort wird eine ganze Frage. Ein Wort allein klingt wie ein Formular."
    },
    {
     "art": "wahl",
     "frage": "Stichwort „Deutsch gelernt — wo?\". Welche Frage ist richtig?",
     "optionen": [
      "Wann hast du Deutsch?",
      "Wo lernst du gestern Deutsch?",
      "Wo hast du Deutsch gelernt?"
     ],
     "loesung": 2,
     "erklaerung": "Perfekt mit „hast … gelernt\", weil du nach der Vergangenheit fragst."
    },
    {
     "art": "wahl",
     "frage": "Deine Partnerin sagt: „Ich komme aus Peru.\" Wie reagierst du am besten?",
     "optionen": [
      "Aha.",
      "Ach, spannend! Aus welcher Stadt genau?",
      "Ich komme aus Polen."
     ],
     "loesung": 1,
     "erklaerung": "Eine kurze Reaktion plus Nachfrage zeigt Interesse — genau das wird in Teil eins bewertet."
    },
    {
     "art": "wahl",
     "frage": "Du wirst gefragt: „Was machst du beruflich?\" Welche Antwort ist am stärksten?",
     "optionen": [
      "Krankenpfleger.",
      "Ja, ich arbeite.",
      "Ich bin Krankenpfleger und arbeite im Schichtdienst in einer Klinik."
     ],
     "loesung": 2,
     "erklaerung": "Ein ganzer Satz mit einem Detail zeigt, was du sprachlich kannst."
    },
    {
     "art": "wahl",
     "frage": "Was ist in Teil eins ein typischer Fehler?",
     "optionen": [
      "Nur die eigene Vorstellung vortragen und keine Fragen stellen.",
      "Auf die Antworten der Partnerin eingehen.",
      "Kurz von den eigenen Hobbys erzählen."
     ],
     "loesung": 0,
     "erklaerung": "Der Teil heißt „Einander kennenlernen\". Wer nur von sich spricht, erfüllt die Aufgabe nur zur Hälfte."
    },
    {
     "art": "wahl",
     "frage": "Du oder Sie — wie redet ihr euch in der Prüfung an?",
     "optionen": [
      "Immer Sie, sonst gibt es Punktabzug.",
      "Beides ist möglich, aber ihr bleibt bei einer Form.",
      "Mal so, mal so, das merkt niemand."
     ],
     "loesung": 1,
     "erklaerung": "Unter Prüfungsteilnehmern ist „du\" ganz normal. Wichtig ist nur, nicht hin und her zu springen."
    },
    {
     "art": "wahl",
     "frage": "Dein Partner spricht sehr schnell, und du hast seinen Beruf nicht verstanden. Was tust du?",
     "optionen": [
      "Du nickst und sagst „schön\".",
      "Du fragst einfach etwas anderes.",
      "Entschuldigung, was bist du von Beruf? Kannst du das bitte wiederholen?"
     ],
     "loesung": 2,
     "erklaerung": "Nachfragen ist echte Kommunikation und kostet keine Punkte. Falsches Nicken fällt sofort auf."
    },
    {
     "art": "ordnen",
     "frage": "Bau die Frage zum Stichwort „Familie\".",
     "teile": [
      "Hast",
      "du",
      "Geschwister",
      "oder",
      "eigene Kinder"
     ],
     "loesung": [
      0,
      1,
      2,
      3,
      4
     ],
     "erklaerung": "Ja-Nein-Frage: Das Verb steht ganz vorn."
    },
    {
     "art": "ordnen",
     "frage": "Bau die Antwort zu Wohnort und Herkunft.",
     "teile": [
      "Ich",
      "wohne",
      "seit zwei Jahren",
      "in Leipzig,",
      "aber",
      "ich",
      "komme",
      "aus der Ukraine"
     ],
     "loesung": [
      0,
      1,
      2,
      3,
      4,
      5,
      6,
      7
     ],
     "erklaerung": "„seit\" plus Präsens: Du wohnst immer noch dort. Nach „aber\" bleibt die normale Wortstellung."
    },
    {
     "art": "ordnen",
     "frage": "Bau die Frage zum Stichwort „Sprachen\".",
     "teile": [
      "Welche Sprachen",
      "sprichst",
      "du",
      "außer",
      "Deutsch"
     ],
     "loesung": [
      0,
      1,
      2,
      3,
      4
     ],
     "erklaerung": "W-Frage: Fragewort zuerst, dann sofort das Verb."
    }
   ]
  },
  {
   "id": "tb1m2",
   "stufe": 1,
   "titel": "Einen Text wiedergeben",
   "kurz": "Den Inhalt deines Textes in eigenen Worten erzählen",
   "ziel": "Nach diesem Block gibst du einen kurzen Meinungstext klar wieder und trennst sauber zwischen der Meinung im Text und deiner eigenen.",
   "zeichen": "📰",
   "farbe": "gold",
   "aufgaben": [
    {
     "art": "wahl",
     "frage": "Womit beginnst du die Wiedergabe deines Textes?",
     "optionen": [
      "Homeoffice ist schlecht.",
      "In meinem Text geht es um das Thema Homeoffice.",
      "Ich lese jetzt meinen Text vor."
     ],
     "loesung": 1,
     "erklaerung": "Erst das Thema nennen, dann die Person und ihre Meinung."
    },
    {
     "art": "wahl",
     "frage": "Welcher Satz ist Wiedergabe und nicht deine eigene Meinung?",
     "optionen": [
      "Die Autorin meint, dass Homeoffice einsam macht.",
      "Ich finde, Homeoffice macht einsam.",
      "Homeoffice macht einsam, das ist doch klar."
     ],
     "loesung": 0,
     "erklaerung": "„Die Autorin meint, dass …\" zeigt deutlich: Das ist ihre Position, nicht deine."
    },
    {
     "art": "wahl",
     "frage": "Wie stellst du die Person aus deinem Text vor?",
     "optionen": [
      "Er.",
      "Der Text sagt ich.",
      "Herr Brandt, ein Lehrer aus Bremen, findet, dass …"
     ],
     "loesung": 2,
     "erklaerung": "Name und eine kurze Beschreibung — so weiß dein Partner sofort, wer spricht."
    },
    {
     "art": "wahl",
     "frage": "Was solltest du bei der Wiedergabe vermeiden?",
     "optionen": [
      "Den Text Satz für Satz auswendig aufsagen.",
      "Die wichtigsten Gedanken in eigenen Worten sagen.",
      "Ein Beispiel aus dem Text nennen."
     ],
     "loesung": 0,
     "erklaerung": "Eigene Worte zeigen, dass du den Text verstanden hast. Auswendig Gelerntes zeigt das nicht."
    },
    {
     "art": "wahl",
     "frage": "Welcher Satz führt von der Wiedergabe zu deiner Meinung?",
     "optionen": [
      "Der Autor hat auch noch gesagt, dass …",
      "Und jetzt zu mir: Ich sehe das ein bisschen anders.",
      "Ende."
     ],
     "loesung": 1,
     "erklaerung": "Ein klarer Übergang hilft deiner Partnerin zu verstehen, wann du deine eigene Meinung sagst."
    },
    {
     "art": "wahl",
     "frage": "Was brauchst du auf B1 für die Wiedergabe mindestens?",
     "optionen": [
      "Konjunktiv eins in jedem Satz.",
      "Gar keine Kennzeichnung, man versteht es schon.",
      "Sätze wie „Sie sagt, dass …\" oder „Laut dem Text …\"."
     ],
     "loesung": 2,
     "erklaerung": "„dass\"-Sätze und „laut\" reichen völlig. Der Konjunktiv ist ein Plus, aber kein Muss."
    },
    {
     "art": "wahl",
     "frage": "Die Autorin nennt einen Grund für ihre Meinung. Wie gibst du ihn wieder?",
     "optionen": [
      "Kontakt im Büro, Punkt.",
      "Sie begründet das damit, dass sie im Büro mehr Kontakt hat.",
      "Sie hat Kontakt."
     ],
     "loesung": 1,
     "erklaerung": "„Sie begründet das damit, dass …\" verbindet Meinung und Grund in einem Satz."
    },
    {
     "art": "ordnen",
     "frage": "Bau den Einstieg in die Wiedergabe.",
     "teile": [
      "In meinem Text",
      "geht",
      "es",
      "um",
      "Sport im Verein"
     ],
     "loesung": [
      0,
      1,
      2,
      3,
      4
     ],
     "erklaerung": "„Es geht um …\" ist eine feste Wendung. Das Verb steht an Position zwei."
    },
    {
     "art": "ordnen",
     "frage": "Bau den Satz mit der Meinung des Autors.",
     "teile": [
      "Der Autor",
      "meint,",
      "dass",
      "Kinder",
      "kein eigenes Handy",
      "brauchen"
     ],
     "loesung": [
      0,
      1,
      2,
      3,
      4,
      5
     ],
     "erklaerung": "Nach „dass\" steht das Verb am Ende."
    },
    {
     "art": "ordnen",
     "frage": "Bau den Satz mit der Position der Autorin.",
     "teile": [
      "Sie",
      "ist",
      "der Meinung,",
      "dass",
      "man",
      "auf dem Land",
      "ruhiger",
      "lebt"
     ],
     "loesung": [
      0,
      1,
      2,
      3,
      4,
      5,
      6,
      7
     ],
     "erklaerung": "„der Meinung sein, dass …\" ist eine gute Alternative zu „meinen\"."
    }
   ]
  },
  {
   "id": "tb1m3",
   "stufe": 2,
   "titel": "Meinung sagen, zustimmen, widersprechen",
   "kurz": "Diskutieren, ohne unhöflich zu werden",
   "ziel": "Nach diesem Block sagst du klar deine Meinung, stimmst begründet zu, widersprichst höflich und bringst eigene Erfahrungen ein.",
   "zeichen": "💬",
   "farbe": "rot",
   "aufgaben": [
    {
     "art": "wahl",
     "frage": "Welcher Satz drückt deutlich eine Meinung aus?",
     "optionen": [
      "Das ist teuer gewesen.",
      "Kostet das viel?",
      "Meiner Meinung nach ist das zu teuer."
     ],
     "loesung": 2,
     "erklaerung": "„Meiner Meinung nach\" kündigt sofort an: Jetzt kommt meine Position."
    },
    {
     "art": "wahl",
     "frage": "Wie widersprichst du höflich?",
     "optionen": [
      "Da bin ich anderer Meinung, weil …",
      "Das ist Quatsch.",
      "Nein, falsch."
     ],
     "loesung": 0,
     "erklaerung": "Widerspruch ist erwünscht — aber mit Begründung und ohne den anderen anzugreifen."
    },
    {
     "art": "wahl",
     "frage": "Du findest das Argument deines Partners nur zum Teil richtig. Was sagst du?",
     "optionen": [
      "Stimmt nicht.",
      "Da hast du teilweise recht, aber …",
      "Genau, genau."
     ],
     "loesung": 1,
     "erklaerung": "Du zeigst Respekt und bringst trotzdem dein eigenes Argument."
    },
    {
     "art": "wahl",
     "frage": "Deine Partnerin sagt: „Online einkaufen ist bequemer.\" Du stimmst zu. Was ist am besten?",
     "optionen": [
      "Ja.",
      "Ich weiß nicht.",
      "Das sehe ich genauso, vor allem wenn man wenig Zeit hat."
     ],
     "loesung": 2,
     "erklaerung": "Zustimmung plus Grund — sonst bleibt es bei einem Wort, und das Gespräch stockt."
    },
    {
     "art": "wahl",
     "frage": "Wie holst du deinen Partner ins Gespräch?",
     "optionen": [
      "Wie siehst du das?",
      "Du denkst falsch.",
      "Sag mal was."
     ],
     "loesung": 0,
     "erklaerung": "Eine offene Frage gibt der anderen Person das Wort zurück. In der Paarprüfung zählt das."
    },
    {
     "art": "wahl",
     "frage": "Wie bringst du eine eigene Erfahrung ein?",
     "optionen": [
      "Man sagt das so.",
      "Ich habe selbst erlebt, dass …",
      "Alle Menschen machen das."
     ],
     "loesung": 1,
     "erklaerung": "Eigene Erfahrungen machen deine Meinung glaubwürdig und gehören zur Aufgabe in Teil zwei."
    },
    {
     "art": "wahl",
     "frage": "Wie vergleichst du mit deinem Heimatland?",
     "optionen": [
      "Bei uns ist sowieso alles besser.",
      "Mein Land.",
      "In meinem Land ist das ganz anders: Dort …"
     ],
     "loesung": 2,
     "erklaerung": "Ein konkreter Vergleich mit Beispiel ist stärker als ein pauschales Urteil."
    },
    {
     "art": "ordnen",
     "frage": "Bau den höflichen Widerspruch.",
     "teile": [
      "Ich",
      "bin",
      "da",
      "nicht ganz",
      "deiner Meinung"
     ],
     "loesung": [
      0,
      1,
      2,
      3,
      4
     ],
     "erklaerung": "„nicht ganz\" macht den Widerspruch weicher und freundlicher."
    },
    {
     "art": "ordnen",
     "frage": "Bau den Satz mit Vor- und Nachteil.",
     "teile": [
      "Einerseits",
      "ist",
      "das Leben auf dem Land",
      "ruhiger,",
      "andererseits",
      "braucht",
      "man",
      "ein Auto"
     ],
     "loesung": [
      0,
      1,
      2,
      3,
      4,
      5,
      6,
      7
     ],
     "erklaerung": "Nach „einerseits\" und „andererseits\" folgt direkt das Verb."
    },
    {
     "art": "ordnen",
     "frage": "Bau den Satz, der Verständnis zeigt und trotzdem widerspricht.",
     "teile": [
      "Ich",
      "verstehe",
      "dein Argument,",
      "trotzdem",
      "finde",
      "ich",
      "es",
      "zu streng"
     ],
     "loesung": [
      0,
      1,
      2,
      3,
      4,
      5,
      6,
      7
     ],
     "erklaerung": "Steht „trotzdem\" vorn, kommt danach sofort das Verb: trotzdem finde ich …"
    }
   ]
  },
  {
   "id": "tb1m4",
   "stufe": 2,
   "titel": "Vorschlagen, reagieren, sich einigen",
   "kurz": "Gemeinsam planen und am Ende ein klares Ergebnis haben",
   "ziel": "Nach diesem Block machst du begründete Vorschläge, reagierst auf die Ideen deiner Partnerin und formulierst am Ende eine klare Einigung.",
   "zeichen": "🤝",
   "farbe": "lila",
   "aufgaben": [
    {
     "art": "wahl",
     "frage": "Wie machst du einen Vorschlag?",
     "optionen": [
      "Freitag.",
      "Wie wäre es, wenn wir das Fest am Freitag machen?",
      "Ich mache das Fest."
     ],
     "loesung": 1,
     "erklaerung": "„Wie wäre es, wenn …\" lädt die andere Person ein, mitzuentscheiden."
    },
    {
     "art": "wahl",
     "frage": "Du findest die Idee gut. Wie reagierst du?",
     "optionen": [
      "Okay.",
      "Mir egal.",
      "Gute Idee! Und dann könnten wir noch Musik mitbringen."
     ],
     "loesung": 2,
     "erklaerung": "Zustimmen und eine eigene Idee ergänzen — so entwickelt ihr den Plan gemeinsam weiter."
    },
    {
     "art": "wahl",
     "frage": "Der Termin passt dir nicht. Was sagst du?",
     "optionen": [
      "Am Freitag kann ich leider nicht. Geht es bei dir auch am Samstag?",
      "Nein, Freitag nicht.",
      "Freitag ist schlecht."
     ],
     "loesung": 0,
     "erklaerung": "Ablehnen und sofort eine Alternative anbieten, sonst bleibt das Gespräch stehen."
    },
    {
     "art": "wahl",
     "frage": "Auf dem Blatt steht „Wer bezahlt was?\". Welcher Satz passt?",
     "optionen": [
      "Du bezahlst alles.",
      "Ich schlage vor, dass jeder zehn Euro gibt.",
      "Geld ist egal."
     ],
     "loesung": 1,
     "erklaerung": "„Ich schlage vor, dass …\" ist neutral, höflich und konkret."
    },
    {
     "art": "wahl",
     "frage": "Welche Stichpunkte müsst ihr in Teil drei besprechen?",
     "optionen": [
      "Nur den ersten.",
      "Die zwei wichtigsten.",
      "Alle Stichpunkte auf dem Blatt — und gern noch eine eigene Idee."
     ],
     "loesung": 2,
     "erklaerung": "Die Stichpunkte sind eure Checkliste. Eine eigene Idee zeigt zusätzlich Initiative."
    },
    {
     "art": "wahl",
     "frage": "Du hast Bedenken bei einem Vorschlag. Wie sagst du das freundlich?",
     "optionen": [
      "Hm, ich weiß nicht, ob das klappt. Was machen wir, wenn es regnet?",
      "Das klappt sowieso nie.",
      "Du sagst nichts und wartest."
     ],
     "loesung": 0,
     "erklaerung": "Bedenken als Frage formulieren — so bleibt das Gespräch freundlich und lösungsorientiert."
    },
    {
     "art": "wahl",
     "frage": "Wie beendet ihr die Planung?",
     "optionen": [
      "Tschüss.",
      "Also, dann machen wir es so: Samstag um zehn im Hof, und jeder bringt einen Tisch mit.",
      "Fertig."
     ],
     "loesung": 1,
     "erklaerung": "Am Ende steht ein Satz mit dem gemeinsamen Ergebnis. Ohne ihn fehlt der Aufgabe der Abschluss."
    },
    {
     "art": "ordnen",
     "frage": "Bau den Vorschlag zu den Kosten.",
     "teile": [
      "Wollen",
      "wir",
      "uns",
      "die Kosten",
      "teilen"
     ],
     "loesung": [
      0,
      1,
      2,
      3,
      4
     ],
     "erklaerung": "„Wollen wir …?\" ist eine typische, freundliche Vorschlagsfrage."
    },
    {
     "art": "ordnen",
     "frage": "Bau den Satz, mit dem ihr Aufgaben verteilt.",
     "teile": [
      "Ich",
      "kann",
      "die Getränke",
      "besorgen,",
      "wenn",
      "du",
      "dich",
      "um die Musik",
      "kümmerst"
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
     "erklaerung": "Nach „wenn\" steht das Verb am Ende: … um die Musik kümmerst."
    },
    {
     "art": "ordnen",
     "frage": "Bau den Satz, der die Einigung feststellt.",
     "teile": [
      "Dann",
      "sind",
      "wir",
      "uns",
      "also",
      "einig"
     ],
     "loesung": [
      0,
      1,
      2,
      3,
      4,
      5
     ],
     "erklaerung": "„sich einig sein\" — mit diesem Satz zeigt ihr, dass die Planung abgeschlossen ist."
    }
   ]
  }
 ],
 "teile": [
  {
   "nr": 1,
   "art": "erzaehlen",
   "name": "Einander kennenlernen",
   "kurz": "Sich vorstellen und nachfragen, etwa drei Minuten",
   "was": "Ihr lernt euch kennen: Jede Person erzählt zu den Stichwörtern etwas über sich und fragt die andere Person. Es ist ein Gespräch, kein Vortrag.",
   "tipp": "Frag zurück! „Und du? Woher kommst du?\" Wer nur von sich erzählt, verschenkt Punkte bei der Aufgabenbewältigung.",
   "zeichen": "👋",
   "farbe": "turq",
   "punkte": 15,
   "runden": [
    {
     "id": "tb1m1r1",
     "thema": "Einander kennenlernen",
     "karten": [
      {
       "kopf": "Teil 1 · Einander kennenlernen",
       "kopfb": "Stichwortkarte",
       "auftrag": [
        "Stell dich vor — zu jedem Stichwort ein, zwei ganze Sätze.",
        "Frag auch dein Gegenüber und antworte auf die Nachfrage."
       ],
       "id": "tb1t1k1",
       "thema": "Einander kennenlernen",
       "punkte": [
        "Name",
        "Herkunft",
        "Wohnort",
        "Familie",
        "Deutsch gelernt — wo?",
        "Beruf oder Ausbildung",
        "Sprachen",
        "Hobbys"
       ],
       "mustervortrag": "Hallo, ich heiße Daniela Souza und komme aus Brasilien, genauer gesagt aus Recife im Nordosten. Seit drei Jahren wohne ich in Nürnberg, zusammen mit meinem Mann und unserer Tochter. Sie ist sechs und spricht schon besser Deutsch als ich. Deutsch habe ich zuerst in einem Kurs in Recife gelernt, aber richtig sprechen gelernt habe ich erst hier, bei der Arbeit und im Kindergarten. Ich bin Physiotherapeutin und arbeite in einer Praxis in der Innenstadt. Meine Ausbildung wurde hier anerkannt, das hat aber fast ein Jahr gedauert. Außer Portugiesisch und Deutsch spreche ich Spanisch und ein bisschen Englisch. In meiner Freizeit tanze ich gern, am liebsten Forró, das ist ein Tanz aus meiner Heimat. Und am Wochenende gehen wir oft wandern. Und du, woher kommst du?",
       "frage": "Wie lange hat es gedauert, bis du dich in Nürnberg wohlgefühlt hast?",
       "musterantwort": "Ehrlich gesagt ungefähr ein Jahr. Am Anfang war der Winter schwer für mich, aber seit ich nette Kolleginnen habe und meine Tochter im Kindergarten Freunde gefunden hat, fühle ich mich hier zu Hause."
      }
     ]
    },
    {
     "id": "tb1m1r2",
     "thema": "Einander kennenlernen",
     "karten": [
      {
       "kopf": "Teil 1 · Einander kennenlernen",
       "kopfb": "Stichwortkarte",
       "auftrag": [
        "Stell dich vor — zu jedem Stichwort ein, zwei ganze Sätze.",
        "Frag auch dein Gegenüber und antworte auf die Nachfrage."
       ],
       "id": "tb1t1k2",
       "thema": "Einander kennenlernen",
       "punkte": [
        "Name",
        "Herkunft",
        "Wohnort",
        "Familie",
        "Deutsch gelernt — wo?",
        "Beruf",
        "Sprachen",
        "Freizeit"
       ],
       "mustervortrag": "Ich bin Tomasz Nowak, aber alle nennen mich Tomek. Ich komme aus Polen, aus einer kleinen Stadt in der Nähe von Breslau. Jetzt wohne ich in Dortmund, schon seit fünf Jahren. Ich bin verheiratet, und wir haben zwei Söhne, die gehen beide hier zur Schule. Deutsch habe ich am Anfang fast nur auf Baustellen gelernt, deshalb war mein Deutsch lange ziemlich lustig. Vor zwei Jahren habe ich dann einen Abendkurs an der Volkshochschule gemacht, und das hat sehr geholfen. Von Beruf bin ich Elektriker. Ich arbeite für einen kleinen Betrieb und bin jeden Tag bei anderen Kunden. Ich spreche Polnisch, Deutsch und ein bisschen Russisch aus der Schule. Meine Hobbys sind Fußball, natürlich, und Angeln. Am Sonntag sitze ich gern ganz ruhig am See. Und was machst du so in deiner Freizeit?",
       "frage": "Ist es nicht anstrengend, jeden Tag bei anderen Kunden zu sein?",
       "musterantwort": "Manchmal schon, besonders wenn jemand nicht zu Hause ist und ich umsonst komme. Aber genau das gefällt mir auch, weil kein Tag wie der andere ist und ich viele Leute kennenlerne."
      }
     ]
    },
    {
     "id": "tb1m1r3",
     "thema": "Einander kennenlernen",
     "karten": [
      {
       "kopf": "Teil 1 · Einander kennenlernen",
       "kopfb": "Stichwortkarte",
       "auftrag": [
        "Stell dich vor — zu jedem Stichwort ein, zwei ganze Sätze.",
        "Frag auch dein Gegenüber und antworte auf die Nachfrage."
       ],
       "id": "tb1t1k3",
       "thema": "Einander kennenlernen",
       "punkte": [
        "Name",
        "Herkunft",
        "Wohnort",
        "Familie",
        "Deutsch gelernt — wo?",
        "Studium oder Arbeit",
        "Sprachen",
        "Hobbys"
       ],
       "mustervortrag": "Hallo, mein Name ist Linh Tran. Ich komme aus Vietnam, aus Hanoi, und wohne seit anderthalb Jahren in Dresden. Hier studiere ich Informatik im dritten Semester. Meine Familie lebt noch in Vietnam, also meine Eltern und mein jüngerer Bruder. Wir telefonieren fast jeden Abend, wegen der Zeitverschiebung meistens sehr spät. Deutsch habe ich zuerst in Hanoi an einem Sprachinstitut gelernt, ungefähr ein Jahr lang, bevor ich das Visum bekommen habe. Neben dem Studium arbeite ich ein paar Stunden in der Woche in einer Bäckerei. Da lerne ich die Alltagssprache, die nicht im Lehrbuch steht. Ich spreche Vietnamesisch, Englisch und Deutsch, und jetzt lerne ich ein bisschen Japanisch. In meiner Freizeit koche ich gern für meine Mitbewohner, und ich spiele Badminton. Hast du auch Familie hier in Deutschland?",
       "frage": "Was war am Anfang in Deutschland am schwierigsten für dich?",
       "musterantwort": "Am schwierigsten war für mich der sächsische Dialekt. Im Kurs habe ich Hochdeutsch gelernt, und in der Bäckerei habe ich am Anfang fast nichts verstanden. Inzwischen finde ich ihn eigentlich ganz sympathisch."
      }
     ]
    }
   ]
  },
  {
   "nr": 2,
   "art": "erzaehlen",
   "name": "Über ein Thema sprechen",
   "kurz": "Einen Zeitschriftentext wiedergeben und diskutieren, etwa sechs Minuten",
   "was": "Jede Person hat einen anderen kurzen Meinungstext aus einer Zeitschrift zum selben Thema. Ihr erzählt euch, was in eurem Text steht, sagt eure Meinung und berichtet von eigenen Erfahrungen.",
   "tipp": "Trenne klar: „In meinem Text schreibt …\" für die Wiedergabe, „Ich persönlich finde …\" für deine Meinung. Lies den Text nicht vor — erzähl ihn.",
   "zeichen": "📰",
   "farbe": "gold",
   "punkte": 30,
   "runden": [
    {
     "id": "tb1m2r1",
     "thema": "Homeoffice",
     "karten": [
      {
       "kopf": "Teil 2 · Über ein Thema sprechen",
       "kopfb": "Zeitschriftentext",
       "auftrag": [
        "Gib den Text mit eigenen Worten wieder: Wer schreibt, was meint die Person?",
        "Sag deine Meinung, erzähl von eigenen Erfahrungen und wie es in deinem Land ist.",
        "Reagiere auf die Nachfrage deines Gegenübers."
       ],
       "id": "tb1t2k1",
       "thema": "Homeoffice",
       "quelle": "Alltag heute",
       "text": "Seit zwei Jahren arbeite ich fast nur noch zu Hause, und ehrlich gesagt vermisse ich das Büro. Am Anfang fand ich es toll: kein Stau, kein Wecker um sechs. Aber inzwischen fehlt mir der Kontakt zu den Kollegen. Die kurzen Gespräche in der Kaffeeküche waren oft wichtiger, als ich dachte, weil man dort schnell Probleme gelöst hat. Außerdem höre ich zu Hause nie richtig auf zu arbeiten, der Laptop steht ja immer auf dem Küchentisch. Ich wünsche mir zwei oder drei Bürotage pro Woche. — Petra Lindner, einundvierzig, Steuerberaterin",
       "punkte": [
        "Inhalt wiedergeben",
        "Deine Meinung",
        "Eigene Erfahrungen",
        "Wie ist es in deinem Land?"
       ],
       "mustervortrag": "In meinem Text geht es um das Thema Homeoffice. Petra Lindner ist Steuerberaterin und arbeitet seit zwei Jahren fast nur zu Hause. Am Anfang hat ihr das gefallen, weil sie nicht mehr im Stau stehen musste. Inzwischen vermisst sie aber ihre Kollegen. Sie meint, dass man bei kurzen Gesprächen in der Kaffeeküche viele Probleme schnell lösen kann. Außerdem schreibt sie, dass sie zu Hause nie richtig Feierabend hat. Deshalb wünscht sie sich zwei oder drei Tage pro Woche im Büro.\nIch kann sie gut verstehen, aber ich sehe es ein bisschen anders. Ich arbeite in der Buchhaltung und habe zwei Tage pro Woche Homeoffice. An diesen Tagen schaffe ich viel mehr, weil mich niemand unterbricht. Wichtig ist für mich, dass ich nach der Arbeit den Laptop wegräume, dann ist wirklich Schluss.\nIn meinem Heimatland, in Rumänien, ist Homeoffice noch nicht so verbreitet. Viele Chefs wollen ihre Mitarbeiter lieber im Büro sehen. Meiner Meinung nach ist eine Mischung am besten: ein paar Tage zu Hause, ein paar Tage im Büro. Wie ist das bei dir?",
       "frage": "Aber fühlst du dich zu Hause nicht manchmal einsam?",
       "musterantwort": "Manchmal schon, das gebe ich zu. Deshalb gehe ich in der Mittagspause oft spazieren oder rufe eine Kollegin an. Und an den Bürotagen genieße ich die Gespräche dann umso mehr."
      }
     ]
    },
    {
     "id": "tb1m2r2",
     "thema": "Gruppenreise oder allein reisen",
     "karten": [
      {
       "kopf": "Teil 2 · Über ein Thema sprechen",
       "kopfb": "Zeitschriftentext",
       "auftrag": [
        "Gib den Text mit eigenen Worten wieder: Wer schreibt, was meint die Person?",
        "Sag deine Meinung, erzähl von eigenen Erfahrungen und wie es in deinem Land ist.",
        "Reagiere auf die Nachfrage deines Gegenübers."
       ],
       "id": "tb1t2k2",
       "thema": "Gruppenreise oder allein reisen",
       "quelle": "Fernweh",
       "text": "Ich reise am liebsten allein. Dann kann ich jeden Tag selbst entscheiden, wie lange ich schlafe, wohin ich gehe und wo ich esse. In einer Gruppe muss man ständig Kompromisse machen, und am Ende sieht man vor allem den Bus von innen. Wenn ich allein unterwegs bin, komme ich außerdem viel leichter mit Einheimischen ins Gespräch. Natürlich ist es abends manchmal ein bisschen einsam. Aber in Hostels lernt man schnell andere Reisende kennen. Für mich ist allein reisen die echte Freiheit. — Jonas Berger, achtundzwanzig, Krankenpfleger",
       "punkte": [
        "Inhalt wiedergeben",
        "Deine Meinung",
        "Eigene Erfahrungen",
        "Wie ist es in deinem Land?"
       ],
       "mustervortrag": "In meinem Text geht es um die Frage, ob man lieber allein oder in einer Gruppe reisen sollte. Jonas Berger ist Krankenpfleger und reist am liebsten allein. Er sagt, dass er so jeden Tag selbst entscheiden kann, was er macht. In einer Gruppe muss man seiner Meinung nach zu viele Kompromisse machen. Außerdem findet er, dass man allein leichter mit Leuten aus dem Land ins Gespräch kommt. Er gibt zu, dass es abends manchmal einsam ist, aber das ist für ihn kein großes Problem.\nIch sehe das anders. Ich bin letztes Jahr mit einer Reisegruppe durch Schottland gefahren, und das war wunderbar. Ich musste nichts organisieren, und abends haben wir zusammen gegessen und viel gelacht. Allein hätte ich mich ehrlich gesagt nicht so sicher gefühlt.\nIn meinem Land, in Mexiko, reisen die meisten Leute mit der Familie, allein zu reisen ist eher selten. Ich glaube, es kommt auf den Charakter an. Wer gern plant und neugierig ist, ist allein glücklich. Wer Gesellschaft mag, fährt lieber mit einer Gruppe.",
       "frage": "Aber in einer Gruppe siehst du doch nur das, was der Reiseleiter zeigt, oder?",
       "musterantwort": "Das stimmt teilweise. Aber wir hatten jeden Nachmittag frei, und da bin ich auch allein durch die Städte gelaufen. So hatte ich eigentlich beides."
      }
     ]
    },
    {
     "id": "tb1m2r3",
     "thema": "Ein Handy für Kinder",
     "karten": [
      {
       "kopf": "Teil 2 · Über ein Thema sprechen",
       "kopfb": "Zeitschriftentext",
       "auftrag": [
        "Gib den Text mit eigenen Worten wieder: Wer schreibt, was meint die Person?",
        "Sag deine Meinung, erzähl von eigenen Erfahrungen und wie es in deinem Land ist.",
        "Reagiere auf die Nachfrage deines Gegenübers."
       ],
       "id": "tb1t2k3",
       "thema": "Ein Handy für Kinder",
       "quelle": "Familienblatt",
       "text": "In meiner Klasse haben schon viele Kinder mit acht Jahren ein eigenes Smartphone. Ich halte das für zu früh. Die Kinder schreiben sich abends noch Nachrichten, sind morgens müde und streiten sich in Gruppenchats, ohne dass die Eltern es merken. Viele können sich kaum noch eine halbe Stunde auf eine Aufgabe konzentrieren. Natürlich verstehe ich, dass Eltern ihr Kind erreichen wollen. Aber dafür reicht ein einfaches Handy ohne Internet. Ein Smartphone sollten Kinder erst mit zwölf oder dreizehn bekommen. — Sabine Krüger, neununddreißig, Grundschullehrerin",
       "punkte": [
        "Inhalt wiedergeben",
        "Deine Meinung",
        "Eigene Erfahrungen",
        "Wie ist es in deinem Land?"
       ],
       "mustervortrag": "Mein Text handelt von der Frage, ab wann Kinder ein eigenes Handy haben sollten. Die Autorin, Sabine Krüger, ist Grundschullehrerin. Sie erzählt, dass in ihrer Klasse schon viele Achtjährige ein Smartphone haben, und das findet sie zu früh. Ihrer Meinung nach sind die Kinder dadurch müde, streiten sich in Gruppenchats und können sich schlechter konzentrieren. Sie versteht zwar, dass Eltern ihre Kinder erreichen wollen, aber sie meint, dass dafür ein einfaches Handy reicht. Ein Smartphone sollten Kinder erst mit zwölf oder dreizehn Jahren bekommen.\nIch stimme ihr größtenteils zu. Mein Sohn ist zehn und fragt fast jeden Tag nach einem Smartphone, weil alle seine Freunde eins haben. Wir haben ihm ein altes Tastenhandy gegeben, damit er uns anrufen kann, wenn er vom Training kommt. Das funktioniert gut.\nIn Marokko, wo ich herkomme, ist es ähnlich: Die Kinder bekommen immer früher ein Handy. Ich finde, das Problem ist nicht das Gerät, sondern dass niemand Regeln macht. Wenn Eltern klare Zeiten festlegen, ist ein Handy vielleicht auch mit elf schon in Ordnung.",
       "frage": "Aber wird dein Sohn dann nicht ausgeschlossen, wenn er nicht im Klassenchat ist?",
       "musterantwort": "Diese Sorge habe ich auch. Bis jetzt klappt es aber, weil wichtige Informationen von der Schule sowieso an die Eltern gehen. Und mit seinen Freunden trifft er sich lieber auf dem Fußballplatz."
      }
     ]
    },
    {
     "id": "tb1m2r4",
     "thema": "Leben auf dem Land",
     "karten": [
      {
       "kopf": "Teil 2 · Über ein Thema sprechen",
       "kopfb": "Zeitschriftentext",
       "auftrag": [
        "Gib den Text mit eigenen Worten wieder: Wer schreibt, was meint die Person?",
        "Sag deine Meinung, erzähl von eigenen Erfahrungen und wie es in deinem Land ist.",
        "Reagiere auf die Nachfrage deines Gegenübers."
       ],
       "id": "tb1t2k4",
       "thema": "Leben auf dem Land",
       "quelle": "Wohnen und Leben",
       "text": "Vor drei Jahren sind wir von München in ein kleines Dorf gezogen, und ich habe es keinen Tag bereut. Unsere Wohnung in der Stadt war teuer und eng, jetzt haben wir ein altes Haus mit Garten zum gleichen Preis. Die Kinder spielen draußen, und die Nachbarn kennen sich. Klar, ohne Auto geht hier nichts, und der Bus fährt nur dreimal am Tag. Auch der nächste Arzt ist fünfzehn Kilometer entfernt. Aber dafür ist es ruhig, und die Luft ist sauber. Ich arbeite von zu Hause aus, deshalb passt das für mich perfekt. — Elena Weiß, vierunddreißig, Grafikerin",
       "punkte": [
        "Inhalt wiedergeben",
        "Deine Meinung",
        "Eigene Erfahrungen",
        "Wie ist es in deinem Land?"
       ],
       "mustervortrag": "In meinem Text geht es um das Leben auf dem Land. Elena Weiß ist Grafikerin und vor drei Jahren mit ihrer Familie aus München in ein Dorf gezogen. Sie sagt, dass sie diese Entscheidung nie bereut hat. In der Stadt war ihre Wohnung teuer und klein, jetzt hat sie für das gleiche Geld ein Haus mit Garten. Die Kinder können draußen spielen, und die Nachbarn kennen sich. Sie erwähnt aber auch Nachteile: Man braucht unbedingt ein Auto, der Bus fährt selten, und der Arzt ist weit weg. Weil sie von zu Hause aus arbeitet, ist das für sie trotzdem ideal.\nIch persönlich könnte nicht auf dem Land leben. Ich habe kein Auto, und ich arbeite im Schichtdienst in einem Krankenhaus. Ohne Straßenbahn würde ich nachts gar nicht nach Hause kommen. Außerdem gehe ich abends gern ins Kino oder treffe spontan Freunde.\nIn Syrien, wo ich aufgewachsen bin, ziehen die jungen Leute eher vom Land in die Städte, weil es dort Arbeit gibt. Ich denke, das Leben auf dem Land passt gut zu Familien, die flexibel arbeiten können, aber nicht zu jedem.",
       "frage": "Aber die Mieten in der Stadt kann doch kaum noch jemand bezahlen. Wäre das Land nicht eine Lösung?",
       "musterantwort": "Da hast du recht, die Mieten sind wirklich ein großes Problem. Für mich wäre aber ein Ort am Stadtrand mit guter Bahnverbindung die bessere Lösung als ein Dorf, in dem kaum ein Bus fährt."
      }
     ]
    }
   ]
  },
  {
   "nr": 3,
   "art": "planen",
   "name": "Gemeinsam etwas planen",
   "kurz": "Vorschlagen, reagieren, einigen — etwa sechs Minuten",
   "was": "Ihr bekommt dieselbe Aufgabe und plant zusammen etwas: wann, wo, was, wer bezahlt. Ihr macht Vorschläge, reagiert aufeinander und einigt euch.",
   "tipp": "Zu jedem Stichpunkt ein Vorschlag mit Begründung. Am Ende fasst einer den Plan in einem Satz zusammen.",
   "zeichen": "🤝",
   "farbe": "gruen",
   "punkte": 30,
   "runden": [
    {
     "id": "tb1m3r1",
     "thema": "Abschiedsfest im Sprachkurs",
     "karten": [
      {
       "kopf": "Teil 3 · Gemeinsam etwas planen",
       "auftrag": [
        "Mach Vorschläge zu allen Punkten und begründe sie.",
        "Reagiere auf die Vorschläge deines Gegenübers.",
        "Einigt euch am Ende auf einen gemeinsamen Plan."
       ],
       "id": "tb1t3k1",
       "thema": "Abschiedsfest im Sprachkurs",
       "aufgabe": "Euer Deutschkurs ist in zwei Wochen zu Ende. Ihr sollt für die Gruppe ein kleines Abschiedsfest organisieren.",
       "punkte": [
        "Wann und wo?",
        "Essen und Getränke?",
        "Geschenk für die Kursleiterin?",
        "Wer bezahlt was?",
        "Programm?"
       ],
       "mustervorschlag": "Ich würde vorschlagen, dass wir das Fest in der letzten Kursstunde machen, also am Donnerstag. Dann sind sicher alle da, und wir müssen keinen extra Termin suchen. Wir könnten im Kursraum feiern, wenn die Schule einverstanden ist. Beim Essen fände ich es schön, wenn jeder etwas aus seinem Land mitbringt, das passt doch gut zu einem Sprachkurs. Für die Kursleiterin könnten wir zusammen ein Buch kaufen, und alle schreiben etwas hinein. Dafür sammeln wir am besten fünf Euro pro Person. Und am Ende könnten wir ein kleines Quiz über den Kurs machen, das macht bestimmt Spaß. Was meinst du, sollen wir die Getränke kaufen, oder bringt die auch jeder selbst mit?",
       "mustereinigung": "Gut, dann feiern wir am Donnerstag in der letzten Stunde im Kursraum, jeder bringt ein Gericht aus seinem Land mit, wir sammeln fünf Euro pro Person für ein Buch und die Getränke, und du bereitest das Quiz vor."
      }
     ]
    },
    {
     "id": "tb1m3r2",
     "thema": "Ein Geschenk für eine Kollegin",
     "karten": [
      {
       "kopf": "Teil 3 · Gemeinsam etwas planen",
       "auftrag": [
        "Mach Vorschläge zu allen Punkten und begründe sie.",
        "Reagiere auf die Vorschläge deines Gegenübers.",
        "Einigt euch am Ende auf einen gemeinsamen Plan."
       ],
       "id": "tb1t3k2",
       "thema": "Ein Geschenk für eine Kollegin",
       "aufgabe": "Eure Kollegin Monika wird fünfzig und arbeitet seit zwanzig Jahren in eurer Firma. Ihr sollt ein Geschenk vom ganzen Team besorgen.",
       "punkte": [
        "Was schenkt ihr?",
        "Wie viel Geld gibt jeder?",
        "Wer sammelt das Geld?",
        "Wer kauft das Geschenk?",
        "Wann und wie übergebt ihr es?"
       ],
       "mustervorschlag": "Ich habe gehört, dass Monika gern ins Theater geht. Wie wäre es mit zwei Theaterkarten? Dann kann sie mit ihrem Mann einen schönen Abend haben. Blumen allein finde ich ein bisschen langweilig, aber einen kleinen Strauß könnten wir zusätzlich besorgen. Wir sind zwölf Leute im Team. Wenn jeder zehn Euro gibt, reicht das gut. Ich kann das Geld einsammeln, ich sitze ja direkt neben der Kaffeeküche, da kommen alle vorbei. Vielleicht kannst du die Karten kaufen? Du kennst dich doch mit dem Programm im Stadttheater aus. Übergeben könnten wir das Geschenk am Montag in der Mittagspause, mit Kuchen. Bist du einverstanden?",
       "mustereinigung": "Also, ich sammle bis Freitag von jedem zehn Euro ein, du kaufst zwei Theaterkarten und einen kleinen Strauß, und am Montag überreichen wir Monika alles in der Mittagspause mit Kuchen."
      }
     ]
    },
    {
     "id": "tb1m3r3",
     "thema": "Ein Flohmarkt in der Nachbarschaft",
     "karten": [
      {
       "kopf": "Teil 3 · Gemeinsam etwas planen",
       "auftrag": [
        "Mach Vorschläge zu allen Punkten und begründe sie.",
        "Reagiere auf die Vorschläge deines Gegenübers.",
        "Einigt euch am Ende auf einen gemeinsamen Plan."
       ],
       "id": "tb1t3k3",
       "thema": "Ein Flohmarkt in der Nachbarschaft",
       "aufgabe": "In eurem Haus wohnen viele Familien, und alle haben zu viele Sachen im Keller. Ihr wollt im Hof einen Flohmarkt für die Nachbarschaft organisieren.",
       "punkte": [
        "Wann?",
        "Wie informiert ihr die Nachbarn?",
        "Was braucht ihr?",
        "Essen und Getränke?",
        "Was passiert mit dem Geld?"
       ],
       "mustervorschlag": "Ich schlage einen Samstag im Mai vor, dann ist das Wetter meistens schon gut, und viele sind noch nicht im Urlaub. Wir sollten früh anfangen, so um zehn Uhr, damit wir am Nachmittag in Ruhe aufräumen können. Die Nachbarn könnten wir mit einem Zettel im Treppenhaus informieren, und zusätzlich schreiben wir in die Hausgruppe. Tische bringt am besten jeder selbst mit, aber ich kann noch zwei Klapptische aus dem Keller holen. Wie wäre es, wenn wir Kaffee und Kuchen verkaufen? Das Geld davon könnten wir dem Kindergarten in unserer Straße spenden. Dann haben alle etwas davon. Was hältst du davon?",
       "mustereinigung": "Dann machen wir den Flohmarkt am zweiten Samstag im Mai von zehn bis fünfzehn Uhr im Hof, hängen nächste Woche Zettel auf, jeder bringt seinen eigenen Tisch mit, und das Geld vom Kuchenverkauf geht an den Kindergarten."
      }
     ]
    },
    {
     "id": "tb1m3r4",
     "thema": "Ein Ausflug mit dem Kurs",
     "karten": [
      {
       "kopf": "Teil 3 · Gemeinsam etwas planen",
       "auftrag": [
        "Mach Vorschläge zu allen Punkten und begründe sie.",
        "Reagiere auf die Vorschläge deines Gegenübers.",
        "Einigt euch am Ende auf einen gemeinsamen Plan."
       ],
       "id": "tb1t3k4",
       "thema": "Ein Ausflug mit dem Kurs",
       "aufgabe": "Euer Kurs möchte an einem Samstag gemeinsam einen Ausflug machen. Ihr sollt den Tag planen.",
       "punkte": [
        "Wohin?",
        "Wie kommt ihr hin?",
        "Was macht ihr dort?",
        "Essen?",
        "Was macht ihr bei schlechtem Wetter?"
       ],
       "mustervorschlag": "Wie wäre es mit einem Ausflug an den See? Mit der Regionalbahn sind wir in einer Stunde da, und mit einem Gruppenticket ist das ganz günstig. Dort könnten wir einmal um den See wandern. Das sind ungefähr acht Kilometer, das schaffen auch die, die nicht so sportlich sind. Zum Essen würde ich ein Picknick vorschlagen. Jeder bringt etwas mit, dann müssen wir nicht ins Restaurant, und es bleibt billig. Falls es regnet, gibt es in der Nähe ein kleines Heimatmuseum, das wäre unser Notfallplan. Mir ist wichtig, dass wirklich alle mitkommen können. Was denkst du, ist dir das zu weit?",
       "mustereinigung": "Gut, wir fahren am Samstag um neun Uhr mit dem Gruppenticket an den See, wandern einmal herum, machen mittags ein Picknick, und wenn es regnet, gehen wir stattdessen ins Heimatmuseum."
      }
     ]
    }
   ]
  }
 ],
 "laeufe": [
  {
   "id": "tb1ml1",
   "titel": "Prüfungslauf 1",
   "minuten": 15,
   "teile": [
    {
     "nr": 1,
     "art": "erzaehlen",
     "thema": "Einander kennenlernen",
     "karten": [
      {
       "kopf": "Teil 1 · Einander kennenlernen",
       "kopfb": "Stichwortkarte",
       "auftrag": [
        "Stell dich vor — zu jedem Stichwort ein, zwei ganze Sätze.",
        "Frag auch dein Gegenüber und antworte auf die Nachfrage."
       ],
       "id": "tb1t1k4",
       "thema": "Einander kennenlernen",
       "punkte": [
        "Name",
        "Herkunft",
        "Wohnort",
        "Familie",
        "Deutsch gelernt — wo?",
        "Beruf oder Ausbildung",
        "Sprachen",
        "Hobbys"
       ],
       "mustervortrag": "Ich heiße Samuel Okafor und komme aus Nigeria, aus der Stadt Enugu. Seit zwei Jahren lebe ich in Bielefeld. Hier mache ich eine Ausbildung zum Mechatroniker, jetzt bin ich im zweiten Lehrjahr. Die Arbeit in der Werkstatt macht mir viel Spaß, nur die Berufsschule ist manchmal schwer, weil die Fachwörter so lang sind. Meine Eltern und meine drei Schwestern wohnen noch in Nigeria, aber mein Cousin lebt auch in Deutschland, in Köln. Deutsch habe ich in einem Integrationskurs gelernt und danach in einem Berufssprachkurs. Zu Hause spreche ich Igbo, außerdem Englisch, und jetzt natürlich Deutsch. In meiner Freizeit spiele ich Basketball in einem Verein, und sonntags singe ich in einem Chor. Und du, was machst du beruflich?",
       "frage": "Was möchtest du nach der Ausbildung machen?",
       "musterantwort": "Am liebsten möchte ich in meinem Betrieb bleiben, mein Chef hat mich schon gefragt. Später kann ich mir auch eine Weiterbildung zum Techniker vorstellen."
      }
     ]
    },
    {
     "nr": 2,
     "art": "erzaehlen",
     "thema": "Sport im Verein",
     "karten": [
      {
       "kopf": "Teil 2 · Über ein Thema sprechen",
       "kopfb": "Zeitschriftentext",
       "auftrag": [
        "Gib den Text mit eigenen Worten wieder: Wer schreibt, was meint die Person?",
        "Sag deine Meinung, erzähl von eigenen Erfahrungen und wie es in deinem Land ist.",
        "Reagiere auf die Nachfrage deines Gegenübers."
       ],
       "id": "tb1t2k5",
       "thema": "Sport im Verein",
       "quelle": "Aktiv leben",
       "text": "Ich habe lange Handball im Verein gespielt, aber vor zwei Jahren aufgehört. Das feste Training am Dienstag und Donnerstag hat einfach nicht mehr zu meinen Arbeitszeiten gepasst, und am Wochenende waren fast immer Spiele. Heute gehe ich joggen, wann ich will, und mache Übungen mit einer App. Das ist billiger und viel flexibler. Klar, die Mannschaft fehlt mir manchmal, vor allem das gemeinsame Essen nach dem Spiel. Aber für Erwachsene mit Beruf und Familie ist ein Verein oft zu viel Verpflichtung. — Can Yılmaz, einunddreißig, Bankkaufmann",
       "punkte": [
        "Inhalt wiedergeben",
        "Deine Meinung",
        "Eigene Erfahrungen",
        "Wie ist es in deinem Land?"
       ],
       "mustervortrag": "Mein Text behandelt das Thema Sport im Verein. Can Yılmaz ist Bankkaufmann und hat früher lange Handball in einem Verein gespielt. Vor zwei Jahren hat er aufgehört, weil die festen Trainingszeiten nicht mehr zu seiner Arbeit gepasst haben und am Wochenende fast immer Spiele waren. Heute joggt er, wann er will, und trainiert mit einer App. Er findet das billiger und flexibler. Er gibt zu, dass ihm die Mannschaft manchmal fehlt, aber seiner Meinung nach ist ein Verein für Erwachsene mit Beruf und Familie oft zu viel.\nIch sehe das anders. Ich spiele seit einem Jahr in einem Volleyballverein, und das war das Beste, was ich in Deutschland gemacht habe. Dort habe ich meine ersten deutschen Freunde gefunden, und mein Deutsch ist viel besser geworden. Allein joggen hätte mir dabei nicht geholfen.\nIn Indien, wo ich herkomme, gibt es kaum Vereine wie hier. Man spielt eher auf der Straße oder in der Schule. Ich finde, ein Verein ist nicht nur Sport, sondern auch ein Stück Heimat, besonders für Leute, die neu in einer Stadt sind.",
       "frage": "Und was machst du, wenn du wegen der Arbeit mal mehrere Wochen nicht zum Training kommen kannst?",
       "musterantwort": "Das ist bei uns kein Problem, wir sind eine Freizeitmannschaft. Man sagt einfach in der Gruppe Bescheid, und wenn man wiederkommt, freuen sich alle."
      }
     ]
    },
    {
     "nr": 3,
     "art": "planen",
     "thema": "Hilfe beim Umzug",
     "karten": [
      {
       "kopf": "Teil 3 · Gemeinsam etwas planen",
       "auftrag": [
        "Mach Vorschläge zu allen Punkten und begründe sie.",
        "Reagiere auf die Vorschläge deines Gegenübers.",
        "Einigt euch am Ende auf einen gemeinsamen Plan."
       ],
       "id": "tb1t3k5",
       "thema": "Hilfe beim Umzug",
       "aufgabe": "Euer Freund Karim zieht nächsten Monat in eine neue Wohnung im vierten Stock ohne Aufzug. Ihr wollt ihm beim Umzug helfen.",
       "punkte": [
        "Wann?",
        "Wie transportiert ihr die Möbel?",
        "Wer hilft noch mit?",
        "Wer macht was?",
        "Essen und Getränke für die Helfer?"
       ],
       "mustervorschlag": "Am besten machen wir den Umzug an einem Samstag, dann haben die meisten frei. Wir sollten früh anfangen, so um acht, weil vier Stockwerke ohne Aufzug wirklich anstrengend sind. Ich würde einen Transporter mieten. Ich habe einen Führerschein und bin so etwas schon öfter gefahren. Wir brauchen aber mehr Leute, mindestens sechs. Kannst du deine Brüder fragen? Die sind doch stark. Ich kann die Kartons besorgen und am Freitag mit Karim die Küche einpacken. Für die Helfer sollte Karim Pizza bestellen und genug Wasser kaufen, das ist das Mindeste. Was meinst du, schaffen wir das an einem Tag?",
       "mustereinigung": "Okay, der Umzug ist am Samstag um acht, ich miete den Transporter und hole die Kartons, du fragst deine Brüder, am Freitag packen wir zusammen die Küche ein, und Karim kümmert sich um Pizza und Getränke."
      }
     ]
    }
   ]
  },
  {
   "id": "tb1ml2",
   "titel": "Prüfungslauf 2",
   "minuten": 15,
   "teile": [
    {
     "nr": 1,
     "art": "erzaehlen",
     "thema": "Einander kennenlernen",
     "karten": [
      {
       "kopf": "Teil 1 · Einander kennenlernen",
       "kopfb": "Stichwortkarte",
       "auftrag": [
        "Stell dich vor — zu jedem Stichwort ein, zwei ganze Sätze.",
        "Frag auch dein Gegenüber und antworte auf die Nachfrage."
       ],
       "id": "tb1t1k1",
       "thema": "Einander kennenlernen",
       "punkte": [
        "Name",
        "Herkunft",
        "Wohnort",
        "Familie",
        "Deutsch gelernt — wo?",
        "Beruf oder Ausbildung",
        "Sprachen",
        "Hobbys"
       ],
       "mustervortrag": "Hallo, ich heiße Daniela Souza und komme aus Brasilien, genauer gesagt aus Recife im Nordosten. Seit drei Jahren wohne ich in Nürnberg, zusammen mit meinem Mann und unserer Tochter. Sie ist sechs und spricht schon besser Deutsch als ich. Deutsch habe ich zuerst in einem Kurs in Recife gelernt, aber richtig sprechen gelernt habe ich erst hier, bei der Arbeit und im Kindergarten. Ich bin Physiotherapeutin und arbeite in einer Praxis in der Innenstadt. Meine Ausbildung wurde hier anerkannt, das hat aber fast ein Jahr gedauert. Außer Portugiesisch und Deutsch spreche ich Spanisch und ein bisschen Englisch. In meiner Freizeit tanze ich gern, am liebsten Forró, das ist ein Tanz aus meiner Heimat. Und am Wochenende gehen wir oft wandern. Und du, woher kommst du?",
       "frage": "Wie lange hat es gedauert, bis du dich in Nürnberg wohlgefühlt hast?",
       "musterantwort": "Ehrlich gesagt ungefähr ein Jahr. Am Anfang war der Winter schwer für mich, aber seit ich nette Kolleginnen habe und meine Tochter im Kindergarten Freunde gefunden hat, fühle ich mich hier zu Hause."
      }
     ]
    },
    {
     "nr": 2,
     "art": "erzaehlen",
     "thema": "Online einkaufen",
     "karten": [
      {
       "kopf": "Teil 2 · Über ein Thema sprechen",
       "kopfb": "Zeitschriftentext",
       "auftrag": [
        "Gib den Text mit eigenen Worten wieder: Wer schreibt, was meint die Person?",
        "Sag deine Meinung, erzähl von eigenen Erfahrungen und wie es in deinem Land ist.",
        "Reagiere auf die Nachfrage deines Gegenübers."
       ],
       "id": "tb1t2k6",
       "thema": "Online einkaufen",
       "quelle": "Geld und Alltag",
       "text": "Viele denken, dass ältere Leute nicht im Internet einkaufen. Ich mache das seit Jahren und bin sehr zufrieden. Ich habe Probleme mit dem Knie, und schwere Einkäufe nach Hause zu tragen, fällt mir schwer. Jetzt bestelle ich Getränke, Waschmittel und sogar Bücher bequem vom Sofa aus. Mein Enkel hat mir am Anfang alles gezeigt. Natürlich gehe ich trotzdem gern auf den Wochenmarkt, wegen der Gespräche. Aber für schwere oder langweilige Sachen ist das Internet für mich eine große Hilfe. — Ingrid Vogel, siebenundsechzig, Rentnerin",
       "punkte": [
        "Inhalt wiedergeben",
        "Deine Meinung",
        "Eigene Erfahrungen",
        "Wie ist es in deinem Land?"
       ],
       "mustervortrag": "In meinem Text geht es um das Einkaufen im Internet. Die Autorin heißt Ingrid Vogel, sie ist Rentnerin und kauft schon seit Jahren online ein. Sie schreibt, dass viele Leute denken, ältere Menschen würden das nicht machen. Weil sie Probleme mit dem Knie hat, kann sie schwere Einkäufe nicht gut tragen. Deshalb bestellt sie Getränke, Waschmittel und Bücher im Internet. Am Anfang hat ihr Enkel ihr geholfen. Sie geht aber trotzdem gern auf den Markt, weil sie dort mit Leuten sprechen kann.\nIch finde ihre Haltung sehr vernünftig. Ich bestelle auch manche Sachen online, zum Beispiel Kleidung für meine Kinder, weil sie so schnell wachsen. Einmal habe ich aber eine Jacke bestellt, die viel zu klein war, und das Zurückschicken war ziemlich kompliziert.\nIn meiner Heimat, in Kenia, bezahlt man sehr viel mit dem Handy, aber Lebensmittel kauft man fast immer auf dem Markt. Meiner Meinung nach ist das Internet praktisch, aber wir sollten auch die kleinen Geschäfte in unserer Nähe unterstützen, sonst gibt es sie bald nicht mehr.",
       "frage": "Aber ist das nicht schlecht für die Umwelt, wenn sich jeder alles liefern lässt?",
       "musterantwort": "Das ist ein guter Punkt. Ich versuche deshalb, mehrere Sachen auf einmal zu bestellen und nur selten etwas zurückzuschicken. Ganz ohne Lieferungen geht es für mich aber nicht."
      }
     ]
    },
    {
     "nr": 3,
     "art": "planen",
     "thema": "Ein Kindergeburtstag",
     "karten": [
      {
       "kopf": "Teil 3 · Gemeinsam etwas planen",
       "auftrag": [
        "Mach Vorschläge zu allen Punkten und begründe sie.",
        "Reagiere auf die Vorschläge deines Gegenübers.",
        "Einigt euch am Ende auf einen gemeinsamen Plan."
       ],
       "id": "tb1t3k6",
       "thema": "Ein Kindergeburtstag",
       "aufgabe": "Lea, die Tochter eurer Nachbarn, wird sieben. Ihre Eltern haben wenig Zeit und haben euch gebeten, die Geburtstagsfeier zu organisieren.",
       "punkte": [
        "Wo feiert ihr?",
        "Wie viele Kinder?",
        "Spiele und Programm?",
        "Essen und Kuchen?",
        "Wer hilft am Tag selbst?"
       ],
       "mustervorschlag": "Ich würde gern auf dem Spielplatz im Park feiern, wenn das Wetter mitmacht. Dort haben die Kinder viel Platz, und in der Wohnung wird nichts schmutzig. Ich finde, acht Kinder sind genug, sonst wird es zu laut und zu chaotisch. Als Programm könnten wir eine Schatzsuche machen, das lieben Kinder in dem Alter. Die Hinweise kann ich vorbereiten. Beim Essen würde ich es einfach halten, zum Beispiel Würstchen und Obst, und natürlich einen Schokoladenkuchen. Den könntest du vielleicht backen? Am Tag selbst brauchen wir mindestens drei Erwachsene, damit immer jemand auf die Kinder aufpasst. Was hältst du davon?",
       "mustereinigung": "Dann feiern wir am Samstagnachmittag mit acht Kindern im Park, ich bereite die Schatzsuche vor, du backst den Schokoladenkuchen, Leas Eltern bringen Würstchen und Obst mit, und wir drei passen gemeinsam auf die Kinder auf."
      }
     ]
    }
   ]
  }
 ]
};
