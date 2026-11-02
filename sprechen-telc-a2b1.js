/* ============================================================
   deutschoderwas club — SPRECHEN telc Deutsch A2·B1

   Aufbau nach dem offiziellen telc-Format (Übungstest 1 Deutsch
   A2·B1, geprüft 02.11.2026). Ergebnis der Prüfung ist A2 oder B1.
   Alle Texte und Aufgaben eigene, nur das Format ist nachgebaut.
   Erzeugt aus scratchpad/telca2b1 mit bau.js.
   ============================================================ */

window.SPRECHEN_TELC_A2B1 = {
 "niveau": "telcA2B1",
 "pruefung": "telc Deutsch A2·B1",
 "minuten": 15,
 "punkte": 60,
 "intro": "Die mündliche Prüfung bei telc A2·B1 ist eine Paarprüfung, etwa fünfzehn Minuten, ohne Vorbereitungszeit. Drei Teile: dich vorstellen und Fragen beantworten, gemeinsam etwas planen, deine Meinung zu einem Thema begründen (dafür hast du etwa eine Minute für Notizen). Sprich laut, nimm dich auf und vergleiche mit dem Muster.",
 "stufen": [
  {
   "nr": 1,
   "titel": "Die Bausteine",
   "zeichen": "🧱",
   "was": "Sich vorstellen, Vorschläge machen und reagieren."
  },
  {
   "nr": 2,
   "titel": "Meinung sagen",
   "zeichen": "💬",
   "was": "Meinung sagen und begründen."
  },
  {
   "nr": 3,
   "titel": "Die drei Teile",
   "zeichen": "🎯",
   "was": "Vorstellen, Planen, Meinung — mit Musterlösung zum Anhören."
  },
  {
   "nr": 4,
   "titel": "Die ganze Prüfung",
   "zeichen": "⏱️",
   "was": "Alle drei Teile hintereinander, fünfzehn Minuten."
  }
 ],
 "bloecke": [
  {
   "id": "tam1",
   "stufe": 1,
   "titel": "Sich vorstellen und Fragen beantworten",
   "kurz": "Ganze Sätze, kleine Details, natürliche Antworten",
   "ziel": "Nach diesem Block stellst du dich sicher vor und beantwortest Anschlussfragen mit ein paar Sätzen.",
   "zeichen": "👋",
   "farbe": "turq",
   "aufgaben": [
    {
     "art": "wahl",
     "frage": "Auf dem Blatt steht „Land\". Was sagst du?",
     "optionen": [
      "Land: Syrien.",
      "Ich komme aus Syrien, aus der Stadt Aleppo.",
      "Ich bin Land Syrien."
     ],
     "loesung": 1,
     "erklaerung": "Ein ganzer Satz mit einem kleinen Detail klingt natürlich und zeigt mehr."
    },
    {
     "art": "wahl",
     "frage": "Stichwort „Sprachen\". Welcher Satz ist richtig?",
     "optionen": [
      "Ich spreche Arabisch, Englisch und ein bisschen Deutsch.",
      "Ich sprechen Arabisch und Englisch.",
      "Sprachen ist Arabisch."
     ],
     "loesung": 0,
     "erklaerung": "„Ich spreche\" — das Verb passt zu „ich\". „Ein bisschen\" ist ehrlich und ganz normal."
    },
    {
     "art": "wahl",
     "frage": "Stichwort „Wohnort\". Was passt?",
     "optionen": [
      "Ich wohne seit zwei Jahren in Bremen.",
      "Ich wohne in Bremen seit zwei Jahre.",
      "Ich wohnen Bremen."
     ],
     "loesung": 0,
     "erklaerung": "„Seit\" mit Dativ: seit zwei Jahren."
    },
    {
     "art": "wahl",
     "frage": "Der Prüfer fragt: „Warum lernen Sie Deutsch?\" Welche Antwort ist am besten?",
     "optionen": [
      "Ja.",
      "Weil ich hier lebe und arbeite. Außerdem möchte ich mit den Lehrern meiner Kinder sprechen.",
      "Deutsch ist schwer."
     ],
     "loesung": 1,
     "erklaerung": "Zwei Gründe in ganzen Sätzen — mehr braucht die Anschlussfrage nicht."
    },
    {
     "art": "wahl",
     "frage": "Stichwort „Familie\". Was sagst du?",
     "optionen": [
      "Ich bin verheiratet und habe zwei Kinder.",
      "Ich habe verheiratet.",
      "Familie ja."
     ],
     "loesung": 0,
     "erklaerung": "„Ich bin verheiratet\" — mit „sein\", nicht mit „haben\"."
    },
    {
     "art": "wahl",
     "frage": "Du verstehst die Frage des Prüfers nicht. Was sagst du?",
     "optionen": [
      "Nichts und warten.",
      "Entschuldigung, können Sie die Frage bitte wiederholen?",
      "Was?"
     ],
     "loesung": 1,
     "erklaerung": "Nachfragen ist erlaubt und zeigt, dass du kommunizieren kannst."
    },
    {
     "art": "wahl",
     "frage": "Stichwort „Beruf\". Du suchst gerade Arbeit. Was sagst du?",
     "optionen": [
      "Ich habe keinen Beruf.",
      "In meiner Heimat war ich Elektriker. Hier suche ich gerade eine Stelle.",
      "Beruf nein."
     ],
     "loesung": 1,
     "erklaerung": "Auch ohne Arbeit kannst du etwas erzählen: früher und jetzt."
    },
    {
     "art": "ordnen",
     "frage": "Bau den Satz zum Stichwort „Hobby\".",
     "teile": [
      "In meiner Freizeit",
      "spiele",
      "ich",
      "gern",
      "Fußball."
     ],
     "loesung": [
      0,
      1,
      2,
      3,
      4
     ],
     "erklaerung": "Der Satz beginnt mit „In meiner Freizeit\", also steht das Verb direkt danach."
    },
    {
     "art": "ordnen",
     "frage": "Bau den Satz zum Stichwort „Wohnort\".",
     "teile": [
      "Ich",
      "wohne",
      "mit meiner Familie",
      "in einer kleinen Wohnung",
      "in Kassel."
     ],
     "loesung": [
      0,
      1,
      2,
      3,
      4
     ],
     "erklaerung": "Erst wer, dann wie und wo: mit meiner Familie, in einer Wohnung, in Kassel."
    },
    {
     "art": "ordnen",
     "frage": "Bau die Antwort auf „Seit wann sind Sie in Deutschland?\"",
     "teile": [
      "Ich",
      "bin",
      "seit",
      "drei Jahren",
      "in Deutschland."
     ],
     "loesung": [
      0,
      1,
      2,
      3,
      4
     ],
     "erklaerung": "„Seit\" plus Dativ, das Verb „bin\" an Position zwei."
    }
   ]
  },
  {
   "id": "tam2",
   "stufe": 1,
   "titel": "Vorschläge machen und reagieren",
   "kurz": "Gemeinsam planen heißt: vorschlagen, zustimmen, ablehnen, einigen",
   "ziel": "Nach diesem Block machst du Vorschläge und reagierst freundlich auf die Ideen deiner Partnerin oder deines Partners.",
   "zeichen": "🤝",
   "farbe": "gold",
   "aufgaben": [
    {
     "art": "wahl",
     "frage": "Wie machst du einen Vorschlag?",
     "optionen": [
      "Wir machen das am Samstag. Punkt.",
      "Wollen wir die Feier am Samstag machen?",
      "Samstag."
     ],
     "loesung": 1,
     "erklaerung": "„Wollen wir …?\", „Wir könnten …\" oder „Wie wäre es mit …?\" klingen freundlich und offen."
    },
    {
     "art": "wahl",
     "frage": "Dein Partner sagt: „Wir könnten Pizza bestellen.\" Du findest das gut. Was sagst du?",
     "optionen": [
      "Gute Idee! Das ist einfach und alle mögen Pizza.",
      "Ja.",
      "Pizza ist Pizza."
     ],
     "loesung": 0,
     "erklaerung": "Zustimmen plus kurzer Grund — so wird ein Gespräch daraus."
    },
    {
     "art": "wahl",
     "frage": "Deine Partnerin schlägt Sonntag vor. Du kannst nicht. Was sagst du?",
     "optionen": [
      "Nein, das ist schlecht.",
      "Am Sonntag kann ich leider nicht, da besuche ich meine Eltern. Geht auch Samstag?",
      "Sonntag nicht."
     ],
     "loesung": 1,
     "erklaerung": "Ablehnen ist erlaubt — mit Grund und neuem Vorschlag bleibt es höflich."
    },
    {
     "art": "wahl",
     "frage": "Welcher Satz ist ein Vorschlag?",
     "optionen": [
      "Wie wäre es mit einem Ausflug an den See?",
      "Ich war gestern am See.",
      "Der See ist groß."
     ],
     "loesung": 0,
     "erklaerung": "„Wie wäre es mit …?\" ist ein typischer Vorschlag."
    },
    {
     "art": "wahl",
     "frage": "Wie fragst du nach der Meinung deines Partners?",
     "optionen": [
      "Was meinst du?",
      "Du meinst nichts.",
      "Meinung!"
     ],
     "loesung": 0,
     "erklaerung": "„Was meinst du?\" oder „Was denkst du?\" bringt den Partner ins Gespräch."
    },
    {
     "art": "wahl",
     "frage": "Am Ende müsst ihr euch einigen. Welcher Satz passt?",
     "optionen": [
      "Also, dann treffen wir uns am Samstag um zehn am Bahnhof.",
      "Mal sehen.",
      "Ich weiß nicht."
     ],
     "loesung": 0,
     "erklaerung": "Eine Einigung fasst kurz zusammen, was ihr beschlossen habt."
    },
    {
     "art": "wahl",
     "frage": "Was ist in Teil zwei ein typischer Fehler?",
     "optionen": [
      "Nur eigene Ideen sagen und nicht auf den Partner reagieren.",
      "Fragen stellen.",
      "Einen Kompromiss suchen."
     ],
     "loesung": 0,
     "erklaerung": "Es heißt „gemeinsam planen\". Ihr müsst miteinander sprechen, nicht nebeneinander."
    },
    {
     "art": "ordnen",
     "frage": "Bau den Vorschlag.",
     "teile": [
      "Wir",
      "könnten",
      "zusammen",
      "einen Kuchen",
      "backen."
     ],
     "loesung": [
      0,
      1,
      2,
      3,
      4
     ],
     "erklaerung": "„Könnten\" an Position zwei, das zweite Verb „backen\" am Ende."
    },
    {
     "art": "ordnen",
     "frage": "Bau die höfliche Ablehnung.",
     "teile": [
      "Das",
      "finde",
      "ich",
      "nicht so gut,",
      "denn",
      "das",
      "ist",
      "zu teuer."
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
     "erklaerung": "Nach „denn\" bleibt die normale Wortstellung: denn das ist zu teuer."
    },
    {
     "art": "ordnen",
     "frage": "Bau die Frage mit Vorschlag.",
     "teile": [
      "Was",
      "hältst",
      "du",
      "davon,",
      "wenn",
      "wir",
      "am Sonntag",
      "grillen?"
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
     "erklaerung": "Nach „wenn\" steht das Verb am Ende: wenn wir am Sonntag grillen."
    }
   ]
  },
  {
   "id": "tam3",
   "stufe": 2,
   "titel": "Meinung sagen und begründen",
   "kurz": "Zwei Seiten sehen, eine Meinung haben, ein Beispiel geben",
   "ziel": "Nach diesem Block sprichst du über beide Aspekte eines Themas und begründest deine Meinung mit einem Beispiel.",
   "zeichen": "💬",
   "farbe": "rot",
   "aufgaben": [
    {
     "art": "wahl",
     "frage": "Wie beginnst du deine Meinung?",
     "optionen": [
      "Meiner Meinung nach ist das eine gute Idee.",
      "Meine Meinung ist eine gute Idee.",
      "Ich meine nach."
     ],
     "loesung": 0,
     "erklaerung": "„Meiner Meinung nach\" — danach kommt sofort das Verb: ist."
    },
    {
     "art": "wahl",
     "frage": "Welcher Satz zeigt einen Vorteil?",
     "optionen": [
      "Ein Vorteil ist, dass man Zeit spart.",
      "Ein Vorteil ist, dass man spart Zeit.",
      "Vorteil Zeit."
     ],
     "loesung": 0,
     "erklaerung": "Im Satz mit „dass\" steht das Verb am Ende: dass man Zeit spart."
    },
    {
     "art": "wahl",
     "frage": "Was gehört zu einer guten Meinung im Teil drei?",
     "optionen": [
      "Nur „Ich finde das gut.\"",
      "Eine Meinung mit Grund und einem Beispiel.",
      "Eine lange Liste mit Wörtern."
     ],
     "loesung": 1,
     "erklaerung": "Meinung, Grund, Beispiel — mit diesen drei Schritten bist du auf der sicheren Seite."
    },
    {
     "art": "wahl",
     "frage": "Wie gibst du ein Beispiel?",
     "optionen": [
      "Zum Beispiel fährt meine Nachbarin jeden Tag mit dem Fahrrad zur Arbeit.",
      "Zum Beispiel meine Nachbarin fährt Fahrrad.",
      "Beispiel Fahrrad."
     ],
     "loesung": 0,
     "erklaerung": "Nach „zum Beispiel\" am Satzanfang kommt das Verb direkt danach."
    },
    {
     "art": "wahl",
     "frage": "Wie zeigst du die andere Seite?",
     "optionen": [
      "Andererseits ist es aber auch teuer.",
      "Andererseits es ist teuer.",
      "Und teuer."
     ],
     "loesung": 0,
     "erklaerung": "„Einerseits … andererseits\" zeigt zwei Seiten. Nach „andererseits\" kommt das Verb."
    },
    {
     "art": "wahl",
     "frage": "Dein Partner fragt: „Und wie ist das in deinem Land?\" Was antwortest du?",
     "optionen": [
      "In meinem Land ist das ähnlich, aber viele Familien haben weniger Geld dafür.",
      "Mein Land.",
      "Weiß nicht."
     ],
     "loesung": 0,
     "erklaerung": "Ein Vergleich mit deinem Land ist eine starke Antwort und leicht zu erzählen."
    },
    {
     "art": "wahl",
     "frage": "Du bist nur teilweise einverstanden. Was sagst du?",
     "optionen": [
      "Da hast du teilweise recht, aber ich sehe das ein bisschen anders.",
      "Falsch.",
      "Ja, ja."
     ],
     "loesung": 0,
     "erklaerung": "So widersprichst du höflich und bleibst im Gespräch."
    },
    {
     "art": "ordnen",
     "frage": "Bau die Meinung mit Grund.",
     "teile": [
      "Ich",
      "finde",
      "das",
      "gut,",
      "weil",
      "Kinder",
      "so",
      "mehr",
      "lernen."
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
     "erklaerung": "Im weil-Satz steht das Verb am Ende: weil Kinder so mehr lernen."
    },
    {
     "art": "ordnen",
     "frage": "Bau den Satz mit „einerseits\".",
     "teile": [
      "Einerseits",
      "ist",
      "das Handy",
      "praktisch,",
      "andererseits",
      "lenkt",
      "es",
      "ab."
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
     "erklaerung": "Nach „einerseits\" und „andererseits\" steht jeweils das Verb."
    },
    {
     "art": "ordnen",
     "frage": "Bau die Zusammenfassung.",
     "teile": [
      "Deshalb",
      "bin",
      "ich",
      "der Meinung,",
      "dass",
      "eine Regel",
      "wichtig",
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
      7
     ],
     "erklaerung": "„Deshalb\" plus Verb, und im dass-Satz steht das Verb am Ende."
    }
   ]
  }
 ],
 "teile": [
  {
   "nr": 1,
   "art": "erzaehlen",
   "name": "Sich vorstellen",
   "kurz": "Zu den Stichwörtern erzählen, dann eine Anschlussfrage",
   "was": "Du stellst dich anhand von Stichwörtern vor. Danach stellt dir jemand eine Anschlussfrage.",
   "tipp": "Zu jedem Stichwort ganze Sätze — und lieber ein Detail mehr: nicht nur „Ich koche gern\", sondern auch was.",
   "zeichen": "👋",
   "farbe": "turq",
   "punkte": 15,
   "runden": [
    {
     "id": "ta2b1m1r1",
     "thema": "Sich vorstellen",
     "karten": [
      {
       "kopf": "Teil 1 · Sich vorstellen",
       "kopfb": "Stichwortkarte",
       "auftrag": [
        "Stell dich vor — zu jedem Stichwort ein, zwei Sätze.",
        "Beantworte danach die Anschlussfrage."
       ],
       "id": "tat1k1",
       "thema": "Sich vorstellen",
       "punkte": [
        "Name",
        "Land",
        "Sprachen",
        "Wohnort",
        "Familie",
        "Beruf",
        "Hobby"
       ],
       "mustervortrag": "Guten Tag, ich heiße Amina Yusuf. Ich komme aus Somalia, aus der Hauptstadt Mogadischu. Ich spreche Somali, Arabisch und Englisch und jetzt auch ein bisschen Deutsch. Seit vier Jahren wohne ich in Hannover, in einer Wohnung in der Nähe vom Hauptbahnhof. Ich bin verheiratet und habe drei Kinder. Mein ältester Sohn geht schon in die fünfte Klasse. Zurzeit mache ich eine Ausbildung als Pflegehelferin in einem Altenheim. Die Arbeit ist anstrengend, aber sie macht mir viel Spaß, weil ich gern mit Menschen arbeite. In meiner Freizeit koche ich gern für Freunde und gehe mit meinen Kindern in den Park.",
       "frage": "Was gefällt Ihnen an Hannover besonders?",
       "musterantwort": "Mir gefallen die vielen Parks. Am Wochenende sind wir oft im Grünen, und die Kinder können dort spielen."
      }
     ]
    },
    {
     "id": "ta2b1m1r2",
     "thema": "Sich vorstellen",
     "karten": [
      {
       "kopf": "Teil 1 · Sich vorstellen",
       "kopfb": "Stichwortkarte",
       "auftrag": [
        "Stell dich vor — zu jedem Stichwort ein, zwei Sätze.",
        "Beantworte danach die Anschlussfrage."
       ],
       "id": "tat1k2",
       "thema": "Sich vorstellen",
       "punkte": [
        "Name",
        "Land",
        "Sprachen",
        "Wohnort",
        "Familie",
        "Beruf",
        "Hobby"
       ],
       "mustervortrag": "Hallo, mein Name ist Bogdan Ionescu. Ich komme aus Rumänien, aus einer kleinen Stadt in der Nähe von Cluj. Meine Muttersprache ist Rumänisch, außerdem spreche ich Italienisch, weil ich früher drei Jahre in Italien gearbeitet habe. Deutsch lerne ich seit zwei Jahren. Ich wohne jetzt in Augsburg. Ich bin nicht verheiratet, aber ich habe eine Freundin, sie kommt aus Polen. Meine Eltern und meine Schwester leben noch in Rumänien. Von Beruf bin ich Lastwagenfahrer, ich fahre jeden Tag in der Region und liefere Möbel aus. Mein Hobby ist Angeln. Am Wochenende sitze ich gern am Fluss, da ist es ruhig.",
       "frage": "Was vermissen Sie aus Rumänien?",
       "musterantwort": "Vor allem meine Familie und das Essen von meiner Mutter. Ich telefoniere jeden Sonntag mit meinen Eltern."
      }
     ]
    },
    {
     "id": "ta2b1m1r3",
     "thema": "Sich vorstellen",
     "karten": [
      {
       "kopf": "Teil 1 · Sich vorstellen",
       "kopfb": "Stichwortkarte",
       "auftrag": [
        "Stell dich vor — zu jedem Stichwort ein, zwei Sätze.",
        "Beantworte danach die Anschlussfrage."
       ],
       "id": "tat1k3",
       "thema": "Sich vorstellen",
       "punkte": [
        "Name",
        "Land",
        "Sprachen",
        "Wohnort",
        "Familie",
        "Beruf",
        "Hobby"
       ],
       "mustervortrag": "Guten Tag, ich bin Lucía Fernández und komme aus Kolumbien, aus Medellín. Ich spreche Spanisch, Englisch und Deutsch. Seit einem Jahr wohne ich in Leipzig, vorher habe ich ein halbes Jahr in Berlin gewohnt. In Leipzig ist die Miete günstiger, deshalb sind wir umgezogen. Ich lebe mit meinem Mann zusammen, er ist Deutscher. Kinder haben wir noch nicht. In Kolumbien habe ich als Lehrerin für Mathematik gearbeitet. Hier arbeite ich im Moment in einem Café, aber ich möchte bald wieder als Lehrerin arbeiten. Dafür brauche ich ein gutes Deutsch. In meiner Freizeit tanze ich Salsa und lese gern Romane.",
       "frage": "Wie haben Sie Ihren Mann kennengelernt?",
       "musterantwort": "Wir haben uns auf einer Reise in Kolumbien kennengelernt. Er war als Tourist in Medellín, und ich habe ihm den Weg gezeigt."
      }
     ]
    }
   ]
  },
  {
   "nr": 2,
   "art": "planen",
   "name": "Gemeinsam etwas planen",
   "kurz": "Vorschlagen, reagieren, einigen",
   "was": "Ihr plant zusammen etwas, zum Beispiel eine Feier. Ihr macht Vorschläge, reagiert und einigt euch.",
   "tipp": "Zu jedem Punkt ein Vorschlag. „Was meinst du?\" hält das Gespräch am Laufen.",
   "zeichen": "🤝",
   "farbe": "gruen",
   "punkte": 15,
   "runden": [
    {
     "id": "ta2b1m2r1",
     "thema": "Weihnachtsfeier im Kurs",
     "karten": [
      {
       "kopf": "Teil 2 · Gemeinsam etwas planen",
       "auftrag": [
        "Mach Vorschläge zu allen Punkten.",
        "Reagiere auf die Vorschläge deines Gegenübers.",
        "Einigt euch auf einen Plan."
       ],
       "id": "tat2k1",
       "thema": "Weihnachtsfeier im Kurs",
       "aufgabe": "Euer Deutschkurs möchte vor den Ferien eine kleine Weihnachtsfeier machen. Ihr sollt die Feier zusammen planen.",
       "punkte": [
        "Wann und wo?",
        "Essen und Getränke?",
        "Musik oder Spiele?",
        "Wer macht was?"
       ],
       "mustervorschlag": "Ich schlage vor, dass wir die Feier am letzten Kurstag machen, also am Freitag vor den Ferien. Dann sind alle da. Wir könnten im Kursraum feiern, das kostet nichts. Beim Essen finde ich es schön, wenn jeder etwas mitbringt, zum Beispiel Plätzchen oder etwas aus seinem Land. Getränke wie Tee und Saft können wir zusammen kaufen. Für die Stimmung könnten wir Weihnachtslieder hören oder ein kleines Spiel machen, zum Beispiel ein Wichteln. Ich kann gern die Musik organisieren. Was meinst du, kannst du die Getränke kaufen?",
       "mustereinigung": "Also, wir feiern am Freitag im Kursraum, jeder bringt etwas zu essen mit, du kaufst die Getränke und ich kümmere mich um die Musik und das Wichteln."
      }
     ]
    },
    {
     "id": "ta2b1m2r2",
     "thema": "Ausflug mit dem Kurs",
     "karten": [
      {
       "kopf": "Teil 2 · Gemeinsam etwas planen",
       "auftrag": [
        "Mach Vorschläge zu allen Punkten.",
        "Reagiere auf die Vorschläge deines Gegenübers.",
        "Einigt euch auf einen Plan."
       ],
       "id": "tat2k2",
       "thema": "Ausflug mit dem Kurs",
       "aufgabe": "Ihr möchtet mit eurem Deutschkurs an einem Wochenende einen Ausflug machen. Plant den Ausflug zusammen.",
       "punkte": [
        "Wohin?",
        "Wann treffen?",
        "Wie fahren?",
        "Was mitnehmen?"
       ],
       "mustervorschlag": "Wie wäre es mit einem Ausflug an den See? Da kann man spazieren gehen, und wenn es warm ist, auch schwimmen. Ich würde den Samstag vorschlagen, weil viele am Sonntag Zeit mit der Familie verbringen. Wir könnten uns um neun Uhr am Bahnhof treffen und mit dem Zug fahren. Mit einem Gruppenticket ist das nicht so teuer. Jeder sollte etwas zu essen und zu trinken mitnehmen, dann machen wir dort ein Picknick. Und vielleicht eine Regenjacke, falls das Wetter schlecht wird. Was denkst du, ist der See eine gute Idee, oder hast du einen anderen Vorschlag?",
       "mustereinigung": "Gut, dann fahren wir am Samstag mit dem Zug an den See, wir treffen uns um neun am Bahnhof, und jeder bringt etwas für das Picknick mit."
      }
     ]
    },
    {
     "id": "ta2b1m2r3",
     "thema": "Nachbarschaftsfest",
     "karten": [
      {
       "kopf": "Teil 2 · Gemeinsam etwas planen",
       "auftrag": [
        "Mach Vorschläge zu allen Punkten.",
        "Reagiere auf die Vorschläge deines Gegenübers.",
        "Einigt euch auf einen Plan."
       ],
       "id": "tat2k3",
       "thema": "Nachbarschaftsfest",
       "aufgabe": "In eurem Haus wohnen viele Familien. Ihr möchtet im Sommer ein Fest im Hof organisieren, damit sich die Nachbarn besser kennenlernen.",
       "punkte": [
        "Termin?",
        "Essen?",
        "Einladung?",
        "Aufräumen?"
       ],
       "mustervorschlag": "Ich finde, ein Samstag im Juli wäre gut, dann ist das Wetter meistens schön und die Kinder haben Ferien. Wir könnten am Nachmittag anfangen, so gegen drei Uhr. Beim Essen schlage ich vor, dass wir grillen und jede Familie einen Salat oder einen Kuchen mitbringt. Für die Einladung könnten wir einen Zettel im Treppenhaus aufhängen und auch in jeden Briefkasten einen kleinen Brief werfen. Wichtig ist auch das Aufräumen. Ich denke, das sollten alle zusammen machen, dann geht es schnell. Was meinst du, sollen wir vorher auch den Hausmeister fragen?",
       "mustereinigung": "Okay, wir feiern an einem Samstag im Juli ab drei Uhr im Hof, wir grillen, jeder bringt etwas mit, wir hängen Einladungen auf und räumen am Ende alle zusammen auf."
      }
     ]
    },
    {
     "id": "ta2b1m2r4",
     "thema": "Abschiedsgeschenk",
     "karten": [
      {
       "kopf": "Teil 2 · Gemeinsam etwas planen",
       "auftrag": [
        "Mach Vorschläge zu allen Punkten.",
        "Reagiere auf die Vorschläge deines Gegenübers.",
        "Einigt euch auf einen Plan."
       ],
       "id": "tat2k4",
       "thema": "Abschiedsgeschenk",
       "aufgabe": "Eine Kollegin geht in Rente. Ihr möchtet zusammen ein Abschiedsgeschenk für sie besorgen.",
       "punkte": [
        "Was schenken?",
        "Wie viel Geld?",
        "Wer kauft ein?",
        "Wann übergeben?"
       ],
       "mustervorschlag": "Unsere Kollegin reist doch sehr gern. Deshalb würde ich vorschlagen, dass wir ihr einen Gutschein für ein schönes Hotel schenken. Dazu könnten wir eine Karte kaufen, und alle schreiben etwas hinein. Ich finde, zehn Euro pro Person sind in Ordnung, das kann jeder bezahlen. Wir sind ungefähr fünfzehn Leute, dann haben wir genug Geld. Ich kann das Geld einsammeln, und du kaufst vielleicht den Gutschein im Internet? Übergeben könnten wir das Geschenk an ihrem letzten Arbeitstag, vielleicht mit Kaffee und Kuchen in der Pause. Bist du einverstanden?",
       "mustereinigung": "Gut, wir schenken ihr einen Hotelgutschein und eine Karte, jeder gibt zehn Euro, ich sammle das Geld ein, du kaufst den Gutschein, und wir übergeben alles an ihrem letzten Tag bei Kaffee und Kuchen."
      }
     ]
    }
   ]
  },
  {
   "nr": 3,
   "art": "erzaehlen",
   "name": "Meinung begründen",
   "kurz": "Zwei Aspekte eines Themas, deine Meinung",
   "was": "Du bekommst ein Thema mit zwei Aspekten. Du sprichst über beide, sagst deine Meinung und begründest sie.",
   "tipp": "Ein klarer Aufbau hilft: „Einerseits …, andererseits … Ich finde …, weil … Zum Beispiel …\"",
   "zeichen": "⚖️",
   "farbe": "gold",
   "punkte": 15,
   "runden": [
    {
     "id": "ta2b1m3r1",
     "thema": "Kinder und Handys",
     "karten": [
      {
       "kopf": "Teil 3 · Meinung begründen",
       "kopfb": "Themenkarte",
       "auftrag": [
        "Sprich über beide Aspekte des Themas.",
        "Sag deine Meinung und begründe sie — mit einem Beispiel.",
        "Reagiere auf die Rückfrage."
       ],
       "id": "tat3k1",
       "thema": "Kinder und Handys",
       "punkte": [
        "Aspekt 1: Sicherheit und Kontakt",
        "Aspekt 2: zu viel Zeit am Bildschirm",
        "Deine Meinung",
        "Ein Beispiel"
       ],
       "mustervortrag": "Mein Thema ist: Sollen Kinder ein eigenes Handy haben? Einerseits ist ein Handy praktisch. Die Eltern können ihr Kind immer anrufen und wissen, wo es ist. Das gibt Sicherheit, zum Beispiel auf dem Schulweg. Andererseits verbringen viele Kinder zu viel Zeit am Bildschirm. Sie spielen lieber am Handy, als draußen mit Freunden zu spielen. Meiner Meinung nach brauchen Kinder erst ab zehn oder elf Jahren ein Handy, und dann nur mit klaren Regeln. Zum Beispiel hat mein Sohn mit elf ein einfaches Handy bekommen. Er darf es nur eine Stunde am Tag benutzen, und beim Essen liegt es nicht auf dem Tisch. Das funktioniert bei uns gut.",
       "frage": "Und was machst du, wenn sich dein Sohn nicht an die Regeln hält?",
       "musterantwort": "Dann ist das Handy für einen Tag weg. Das ist zum Glück erst einmal passiert, und seitdem hält er sich daran."
      }
     ]
    },
    {
     "id": "ta2b1m3r2",
     "thema": "Einkaufen im Internet",
     "karten": [
      {
       "kopf": "Teil 3 · Meinung begründen",
       "kopfb": "Themenkarte",
       "auftrag": [
        "Sprich über beide Aspekte des Themas.",
        "Sag deine Meinung und begründe sie — mit einem Beispiel.",
        "Reagiere auf die Rückfrage."
       ],
       "id": "tat3k2",
       "thema": "Einkaufen im Internet",
       "punkte": [
        "Aspekt 1: bequem und oft billiger",
        "Aspekt 2: Geschäfte in der Stadt schließen",
        "Deine Meinung",
        "Ein Beispiel"
       ],
       "mustervortrag": "Ich spreche über das Thema Einkaufen im Internet. Ein großer Vorteil ist, dass es sehr bequem ist. Man kann zu jeder Zeit bestellen, auch spät am Abend, und die Sachen kommen nach Hause. Oft sind die Preise auch günstiger. Ein Nachteil ist aber, dass viele kleine Geschäfte in der Stadt schließen müssen. Dann ist die Innenstadt leer, und Menschen verlieren ihre Arbeit. Ich persönlich kaufe Elektronik und Bücher meistens online, aber Kleidung und Schuhe kaufe ich lieber im Geschäft. Ich möchte die Sachen anprobieren. Einmal habe ich Schuhe im Internet bestellt, und sie waren zu klein. Das Zurückschicken war sehr kompliziert.",
       "frage": "Glaubst du, dass es in zehn Jahren noch Geschäfte in der Stadt gibt?",
       "musterantwort": "Ja, ich glaube schon, aber weniger. Viele Leute wollen die Sachen sehen und anfassen, und Einkaufen in der Stadt macht auch Spaß."
      }
     ]
    },
    {
     "id": "ta2b1m3r3",
     "thema": "Mit dem Auto oder mit dem Fahrrad zur Arbeit",
     "karten": [
      {
       "kopf": "Teil 3 · Meinung begründen",
       "kopfb": "Themenkarte",
       "auftrag": [
        "Sprich über beide Aspekte des Themas.",
        "Sag deine Meinung und begründe sie — mit einem Beispiel.",
        "Reagiere auf die Rückfrage."
       ],
       "id": "tat3k3",
       "thema": "Mit dem Auto oder mit dem Fahrrad zur Arbeit",
       "punkte": [
        "Aspekt 1: Auto ist schnell und bequem",
        "Aspekt 2: Fahrrad ist gesund und billig",
        "Deine Meinung",
        "Ein Beispiel"
       ],
       "mustervortrag": "Mein Thema ist, wie man am besten zur Arbeit fährt. Viele Menschen fahren mit dem Auto, weil es schnell und bequem ist. Man wird nicht nass, wenn es regnet, und man kann auch große Sachen transportieren. Das Fahrrad hat aber auch viele Vorteile. Es ist gesund, es kostet fast nichts und es ist gut für die Umwelt. Außerdem sucht man keinen Parkplatz. Meiner Meinung nach ist das Fahrrad für kurze Wege die beste Lösung. Für lange Wege ist das Auto oder der Bus besser. Mein Arbeitsweg ist zum Beispiel nur vier Kilometer lang. Ich fahre im Sommer immer mit dem Fahrrad und bin in fünfzehn Minuten da.",
       "frage": "Und im Winter? Fährst du dann auch mit dem Fahrrad?",
       "musterantwort": "Nur wenn es trocken ist. Bei Schnee und Eis nehme ich lieber den Bus, das ist mir zu gefährlich."
      }
     ]
    },
    {
     "id": "ta2b1m3r4",
     "thema": "Haustiere in der Stadtwohnung",
     "karten": [
      {
       "kopf": "Teil 3 · Meinung begründen",
       "kopfb": "Themenkarte",
       "auftrag": [
        "Sprich über beide Aspekte des Themas.",
        "Sag deine Meinung und begründe sie — mit einem Beispiel.",
        "Reagiere auf die Rückfrage."
       ],
       "id": "tat3k4",
       "thema": "Haustiere in der Stadtwohnung",
       "punkte": [
        "Aspekt 1: Tiere machen glücklich",
        "Aspekt 2: wenig Platz und viel Arbeit",
        "Deine Meinung",
        "Ein Beispiel"
       ],
       "mustervortrag": "Ich möchte über Haustiere in der Stadt sprechen. Einerseits machen Tiere viele Menschen glücklich. Besonders für Kinder und alte Menschen ist ein Hund oder eine Katze eine schöne Gesellschaft. Andererseits haben Tiere in einer kleinen Stadtwohnung oft wenig Platz. Ein Hund muss mehrmals am Tag raus, auch wenn es regnet oder man müde ist. Außerdem kostet ein Tier viel Geld, zum Beispiel beim Tierarzt. Ich finde, eine Katze passt gut in eine Wohnung, ein großer Hund aber nicht. Meine Nachbarin hat zum Beispiel einen großen Hund im dritten Stock. Er bellt oft, wenn sie bei der Arbeit ist, und das stört die anderen Nachbarn.",
       "frage": "Hast du selbst ein Haustier?",
       "musterantwort": "Nein, im Moment nicht. Aber als Kind hatte ich eine Katze, und meine Tochter wünscht sich auch eine."
      }
     ]
    }
   ]
  }
 ],
 "laeufe": [
  {
   "id": "ta2b1ml1",
   "titel": "Prüfungslauf 1",
   "minuten": 15,
   "teile": [
    {
     "nr": 1,
     "art": "erzaehlen",
     "thema": "Sich vorstellen",
     "karten": [
      {
       "kopf": "Teil 1 · Sich vorstellen",
       "kopfb": "Stichwortkarte",
       "auftrag": [
        "Stell dich vor — zu jedem Stichwort ein, zwei Sätze.",
        "Beantworte danach die Anschlussfrage."
       ],
       "id": "tat1k4",
       "thema": "Sich vorstellen",
       "punkte": [
        "Name",
        "Land",
        "Sprachen",
        "Wohnort",
        "Familie",
        "Beruf",
        "Hobby"
       ],
       "mustervortrag": "Hallo, ich heiße Farid Rahimi. Ich komme aus Afghanistan, aus Herat. Ich spreche Dari und Paschtu, ein bisschen Englisch und natürlich Deutsch. Seit sechs Jahren lebe ich in Deutschland, jetzt wohne ich in einem kleinen Dorf in der Nähe von Ulm. Meine Frau und unsere zwei Töchter sind seit einem Jahr auch hier. Das war ein sehr glücklicher Tag für mich. Ich arbeite als Koch in einem Restaurant. Ich habe hier eine Ausbildung gemacht und bin jetzt fertig. Am liebsten koche ich Gerichte aus meiner Heimat, aber auch Spätzle kann ich schon gut. In meiner Freizeit spiele ich Kricket in einem Verein.",
       "frage": "Was ist schwierig an Ihrer Arbeit als Koch?",
       "musterantwort": "Die Arbeitszeiten sind schwierig. Ich arbeite oft am Abend und am Wochenende, deshalb habe ich wenig Zeit für meine Familie."
      }
     ]
    },
    {
     "nr": 2,
     "art": "planen",
     "thema": "Kinderfest",
     "karten": [
      {
       "kopf": "Teil 2 · Gemeinsam etwas planen",
       "auftrag": [
        "Mach Vorschläge zu allen Punkten.",
        "Reagiere auf die Vorschläge deines Gegenübers.",
        "Einigt euch auf einen Plan."
       ],
       "id": "tat2k5",
       "thema": "Kinderfest",
       "aufgabe": "Der Kindergarten eurer Kinder macht ein Sommerfest. Die Eltern sollen einen Stand mit Spielen für die Kinder organisieren.",
       "punkte": [
        "Welche Spiele?",
        "Was braucht ihr?",
        "Preise für die Kinder?",
        "Wer hilft wann?"
       ],
       "mustervorschlag": "Ich hätte eine Idee: Wir könnten Dosenwerfen machen. Das ist einfach, und die Kinder lieben es. Außerdem könnten wir Kinderschminken anbieten, das machen die Kleinen auch sehr gern. Wir brauchen dafür leere Dosen, Bälle und Schminkfarben. Die Dosen kann jeder zu Hause sammeln. Als Preise finde ich kleine Sachen gut, zum Beispiel Luftballons oder Aufkleber, nicht zu viele Süßigkeiten. Das Fest dauert vier Stunden. Wir könnten uns abwechseln, jeder hilft zwei Stunden. Was meinst du, möchtest du lieber am Anfang oder am Ende helfen?",
       "mustereinigung": "Also, wir machen Dosenwerfen und Kinderschminken, die Preise sind Luftballons und Aufkleber, ich helfe die ersten zwei Stunden und du die letzten zwei."
      }
     ]
    },
    {
     "nr": 3,
     "art": "erzaehlen",
     "thema": "Arbeiten im Homeoffice",
     "karten": [
      {
       "kopf": "Teil 3 · Meinung begründen",
       "kopfb": "Themenkarte",
       "auftrag": [
        "Sprich über beide Aspekte des Themas.",
        "Sag deine Meinung und begründe sie — mit einem Beispiel.",
        "Reagiere auf die Rückfrage."
       ],
       "id": "tat3k5",
       "thema": "Arbeiten im Homeoffice",
       "punkte": [
        "Aspekt 1: kein Arbeitsweg, mehr Zeit",
        "Aspekt 2: weniger Kontakt zu Kollegen",
        "Deine Meinung",
        "Ein Beispiel"
       ],
       "mustervortrag": "Mein Thema ist das Homeoffice. Ein Vorteil ist, dass man keinen Arbeitsweg hat. So spart man Zeit und Geld und hat mehr Zeit für die Familie. Man kann auch ruhiger arbeiten, weil niemand stört. Ein Nachteil ist aber, dass man die Kollegen nur selten sieht. Man fühlt sich vielleicht allein, und manche Probleme kann man am Telefon nicht so gut lösen. Meiner Meinung nach ist eine Mischung am besten, zum Beispiel zwei Tage zu Hause und drei Tage im Büro. Mein Mann arbeitet genau so. Am Montag und Freitag ist er zu Hause, und dann bringt er die Kinder in die Schule. Das hilft uns sehr.",
       "frage": "Geht Homeoffice bei deiner Arbeit auch?",
       "musterantwort": "Nein, leider nicht. Ich arbeite in einer Bäckerei, da muss ich natürlich vor Ort sein."
      }
     ]
    }
   ]
  },
  {
   "id": "ta2b1ml2",
   "titel": "Prüfungslauf 2",
   "minuten": 15,
   "teile": [
    {
     "nr": 1,
     "art": "erzaehlen",
     "thema": "Sich vorstellen",
     "karten": [
      {
       "kopf": "Teil 1 · Sich vorstellen",
       "kopfb": "Stichwortkarte",
       "auftrag": [
        "Stell dich vor — zu jedem Stichwort ein, zwei Sätze.",
        "Beantworte danach die Anschlussfrage."
       ],
       "id": "tat1k5",
       "thema": "Sich vorstellen",
       "punkte": [
        "Name",
        "Land",
        "Sprachen",
        "Wohnort",
        "Familie",
        "Beruf",
        "Hobby"
       ],
       "mustervortrag": "Guten Tag, mein Name ist Mei Chen. Ich komme aus China, aus Chengdu im Südwesten. Ich spreche Chinesisch, Englisch und Deutsch. Ich wohne seit drei Jahren in Stuttgart, nicht weit von meiner Firma. Ich bin geschieden und habe einen Sohn. Er ist zwölf Jahre alt und spielt sehr gut Klavier. Ich bin Ingenieurin und arbeite bei einer Firma, die Autoteile herstellt. Bei der Arbeit sprechen wir oft Englisch, deshalb lerne ich Deutsch jetzt in einem Abendkurs. Ich möchte mich mit den Nachbarn und den Lehrern meines Sohnes besser unterhalten. In meiner Freizeit wandere ich gern, am liebsten im Schwarzwald.",
       "frage": "Warum lernen Sie Deutsch in einem Abendkurs?",
       "musterantwort": "Weil ich tagsüber arbeite. Der Kurs ist zweimal pro Woche am Abend, das passt gut zu meiner Arbeit."
      }
     ]
    },
    {
     "nr": 2,
     "art": "planen",
     "thema": "Beim Umzug helfen",
     "karten": [
      {
       "kopf": "Teil 2 · Gemeinsam etwas planen",
       "auftrag": [
        "Mach Vorschläge zu allen Punkten.",
        "Reagiere auf die Vorschläge deines Gegenübers.",
        "Einigt euch auf einen Plan."
       ],
       "id": "tat2k6",
       "thema": "Beim Umzug helfen",
       "aufgabe": "Ein Freund aus eurem Kurs zieht in eine neue Wohnung. Ihr wollt ihm zusammen beim Umzug helfen.",
       "punkte": [
        "Wann?",
        "Transport?",
        "Essen und Trinken?",
        "Was noch machen?"
       ],
       "mustervorschlag": "Ich glaube, am besten helfen wir am Samstag, da haben die meisten frei. Wir sollten früh anfangen, vielleicht um acht Uhr, dann sind wir am Nachmittag fertig. Für den Transport könnten wir einen kleinen Lastwagen mieten. Das ist nicht so teuer, wenn wir uns die Kosten teilen. Beim Essen schlage ich vor, dass wir mittags Brötchen und Getränke kaufen, dann müssen wir nicht kochen. Und ich denke, wir könnten ihm auch helfen, die Lampen aufzuhängen und die Möbel aufzubauen. Ich habe einen Akkuschrauber, den bringe ich mit. Was hältst du davon?",
       "mustereinigung": "Gut, wir helfen am Samstag ab acht Uhr, wir mieten zusammen einen kleinen Lastwagen, du kaufst Brötchen und Getränke, und ich bringe den Akkuschrauber für die Möbel mit."
      }
     ]
    },
    {
     "nr": 3,
     "art": "erzaehlen",
     "thema": "Fertiggerichte oder selbst kochen",
     "karten": [
      {
       "kopf": "Teil 3 · Meinung begründen",
       "kopfb": "Themenkarte",
       "auftrag": [
        "Sprich über beide Aspekte des Themas.",
        "Sag deine Meinung und begründe sie — mit einem Beispiel.",
        "Reagiere auf die Rückfrage."
       ],
       "id": "tat3k6",
       "thema": "Fertiggerichte oder selbst kochen",
       "punkte": [
        "Aspekt 1: Fertiggerichte sparen Zeit",
        "Aspekt 2: selbst kochen ist gesünder",
        "Deine Meinung",
        "Ein Beispiel"
       ],
       "mustervortrag": "Ich spreche über das Thema Essen. Viele Menschen kaufen heute Fertiggerichte. Das ist praktisch, weil man nach der Arbeit oft müde ist und wenig Zeit hat. In zehn Minuten ist das Essen fertig. Selbst kochen ist aber gesünder. Man weiß genau, was im Essen ist, und man benutzt frisches Gemüse. Außerdem ist es oft billiger. Ich finde, man sollte so oft wie möglich selbst kochen, aber manchmal ist ein Fertiggericht auch in Ordnung. Bei uns zum Beispiel kochen wir am Sonntag für zwei oder drei Tage vor. Dann haben wir auch unter der Woche gesundes Essen und brauchen nicht viel Zeit.",
       "frage": "Was kochst du am Sonntag meistens vor?",
       "musterantwort": "Meistens eine große Suppe oder einen Eintopf mit viel Gemüse. Das schmeckt am nächsten Tag sogar noch besser."
      }
     ]
    }
   ]
  }
 ]
};
