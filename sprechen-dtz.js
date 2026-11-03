/* ============================================================
   deutschoderwas club — SPRECHEN Deutsch-Test für Zuwanderer (DTZ)

   Aufbau nach den offiziellen DTZ-Übungssätzen (g.a.s.t.) und dem
   Modellsatz („Sie hören jeden Text einmal"), geprüft 03.11.2026.
   Alle Texte und Aufgaben eigene. Erzeugt aus scratchpad/dtz.
   ============================================================ */

window.SPRECHEN_TELC_DTZ = {
 "niveau": "telcDTZ",
 "pruefung": "Deutsch-Test für Zuwanderer",
 "minuten": 16,
 "punkte": 100,
 "intro": "Die mündliche Prüfung im DTZ dauert etwa sechzehn Minuten zu zweit. Teil 1: Du stellst dich vor. Teil 2: Du beschreibst ein Foto und erzählst von deinen Erfahrungen. Teil 3: Ihr plant zusammen etwas. Von 100 Punkten gibt es 50 für die Aufgaben und 50 für Aussprache, Flüssigkeit, Korrektheit und Wortschatz. A2 ab 35, B1 ab 75. Sprich laut, nimm dich auf und vergleiche mit dem Muster.",
 "stufen": [
  {
   "nr": 1,
   "titel": "Die Bausteine",
   "zeichen": "🧱",
   "was": "Sich vorstellen, ein Foto beschreiben."
  },
  {
   "nr": 2,
   "titel": "Erzählen und planen",
   "zeichen": "💬",
   "was": "Eigene Erfahrungen, gemeinsam planen."
  },
  {
   "nr": 3,
   "titel": "Die drei Teile",
   "zeichen": "🎯",
   "was": "Mit Musterlösung zum Anhören."
  },
  {
   "nr": 4,
   "titel": "Die ganze Prüfung",
   "zeichen": "⏱️",
   "was": "Alle drei Teile hintereinander, sechzehn Minuten."
  }
 ],
 "bloecke": [
  {
   "id": "tdm1",
   "stufe": 1,
   "titel": "Sich vorstellen",
   "kurz": "Name, Herkunft, Wohnort, Arbeit, Familie, Sprachen in ganzen Sätzen",
   "ziel": "Nach diesem Block stellst du dich zu allen sechs Stichwörtern in ganzen Sätzen vor, gibst zu jedem Punkt ein kleines Detail und antwortest sicher auf die Zusatzfrage der Prüferin.",
   "zeichen": "🙋",
   "farbe": "turq",
   "aufgaben": [
    {
     "art": "wahl",
     "frage": "Wie beginnst du am besten?",
     "optionen": [
      "Name Lucía.",
      "Guten Tag, ich heiße Lucía Romero und komme aus Peru.",
      "Ich bin hier."
     ],
     "loesung": 1,
     "erklaerung": "Ein Gruß und ein ganzer Satz mit Namen und Herkunft sind ein sicherer Anfang."
    },
    {
     "art": "wahl",
     "frage": "Stichwort „Geburtsort“. Welcher Satz ist richtig?",
     "optionen": [
      "Ich bin in Izmir geboren, das ist eine große Stadt am Meer in der Türkei.",
      "Ich habe in Izmir geboren.",
      "Geboren Izmir."
     ],
     "loesung": 0,
     "erklaerung": "„Ich bin in … geboren“ ist die richtige Form. Ein kleiner Satz über die Stadt macht die Antwort lebendig."
    },
    {
     "art": "wahl",
     "frage": "Stichwort „Wohnort“. Welcher Satz ist richtig?",
     "optionen": [
      "Ich wohnen in Kassel.",
      "Ich bin in Kassel wohne.",
      "Ich wohne seit drei Jahren in Kassel, im Stadtteil Wehlheiden."
     ],
     "loesung": 2,
     "erklaerung": "Mit „seit“ sagst du, wie lange du schon dort wohnst. Das ist ein gutes Detail."
    },
    {
     "art": "wahl",
     "frage": "Du arbeitest im Moment nicht. Was sagst du zum Stichwort „Arbeit“?",
     "optionen": [
      "Ich arbeite nicht. Fertig.",
      "Im Moment arbeite ich nicht, weil ich den Deutschkurs mache. In meinem Heimatland war ich Friseurin.",
      "Ich nicht Arbeit."
     ],
     "loesung": 1,
     "erklaerung": "Auch ohne Arbeit hast du etwas zu sagen: warum nicht, und was du früher gemacht hast."
    },
    {
     "art": "wahl",
     "frage": "Stichwort „Familie“. Welcher Satz ist richtig?",
     "optionen": [
      "Ich habe verheiratet mit zwei Kinder.",
      "Familie ja, zwei.",
      "Ich bin verheiratet und habe zwei Kinder, einen Sohn und eine Tochter."
     ],
     "loesung": 2,
     "erklaerung": "„Ich bin verheiratet“ mit „sein“, und „zwei Kinder“ ohne n."
    },
    {
     "art": "wahl",
     "frage": "Stichwort „Sprachen“. Welcher Satz ist richtig?",
     "optionen": [
      "Meine Muttersprache ist Arabisch. Ich spreche auch Englisch und jetzt ein bisschen Deutsch.",
      "Ich sprechen Arabisch und Englisch.",
      "Arabisch, Englisch, Deutsch."
     ],
     "loesung": 0,
     "erklaerung": "„Meine Muttersprache ist …“ und „Ich spreche auch …“ sind zwei einfache, sichere Sätze."
    },
    {
     "art": "wahl",
     "frage": "Du hast die Zusatzfrage nicht verstanden. Was sagst du?",
     "optionen": [
      "Was?",
      "Ich weiß nicht.",
      "Entschuldigung, können Sie die Frage bitte noch einmal wiederholen?"
     ],
     "loesung": 2,
     "erklaerung": "Nachfragen ist erlaubt und kostet keine Punkte. Schweigen kostet Punkte."
    },
    {
     "art": "wahl",
     "frage": "Wie viel sagst du zu jedem Stichwort?",
     "optionen": [
      "Ein Wort reicht.",
      "Ein bis drei Sätze, mit einem kleinen Detail.",
      "Möglichst lange, fünf Minuten über die Familie."
     ],
     "loesung": 1,
     "erklaerung": "Teil 1 dauert nur ein paar Minuten. Ein bis drei Sätze pro Punkt passen gut."
    },
    {
     "art": "wahl",
     "frage": "Die Prüferin fragt: „Was machen Sie gern in Ihrer Freizeit?“ Welche Antwort ist am besten?",
     "optionen": [
      "Fußball.",
      "In meiner Freizeit gehe ich gern mit meinen Kindern in den Park, und am Wochenende spiele ich Fußball.",
      "Ich habe keine Freizeit, keine."
     ],
     "loesung": 1,
     "erklaerung": "Ganze Sätze und zwei Beispiele zeigen, dass du frei sprechen kannst."
    },
    {
     "art": "wahl",
     "frage": "Du sagst: „Ich bin Busfahrer.“ Wie machst du daraus eine bessere Antwort?",
     "optionen": [
      "Ich bin Busfahrer, Busfahrer.",
      "Bus.",
      "Ich bin Busfahrer. Ich fahre jeden Tag die Linie zwölf durch die Stadt, meistens in der Frühschicht."
     ],
     "loesung": 2,
     "erklaerung": "Ein Detail zur Arbeit macht aus einem Satz eine richtige Antwort."
    }
   ]
  },
  {
   "id": "tdm2",
   "stufe": 1,
   "titel": "Ein Foto beschreiben",
   "kurz": "Was man sieht, wo es ist, was vielleicht los ist",
   "ziel": "Nach diesem Block beschreibst du ein Foto in ganzen Sätzen, sagst, wo im Bild etwas ist, und machst Vermutungen über die Situation, ohne etwas als sicher zu erfinden.",
   "zeichen": "📷",
   "farbe": "gold",
   "aufgaben": [
    {
     "art": "wahl",
     "frage": "Wie beginnst du deine Fotobeschreibung?",
     "optionen": [
      "Ich sehe Foto.",
      "Auf dem Foto sieht man eine Familie in einer Küche.",
      "Familie Küche."
     ],
     "loesung": 1,
     "erklaerung": "„Auf dem Foto sieht man …“ ist ein sicherer erster Satz."
    },
    {
     "art": "wahl",
     "frage": "Welcher Satz ist richtig?",
     "optionen": [
      "Im Hintergrund sieht man Bäume.",
      "Im Hintergrund man sieht Bäume.",
      "Hinten Bäume sind."
     ],
     "loesung": 0,
     "erklaerung": "Nach „Im Hintergrund“ kommt das Verb auf Position zwei: „sieht man“."
    },
    {
     "art": "wahl",
     "frage": "Auf dem Foto schaut eine Frau im Bus aus dem Fenster. Welcher Satz ist eine gute Vermutung?",
     "optionen": [
      "Die Frau ist traurig, weil ihr Mann weg ist.",
      "Die Frau fährt zur Arbeit, das ist sicher.",
      "Vielleicht wartet sie auf ihre Haltestelle."
     ],
     "loesung": 2,
     "erklaerung": "Mit „vielleicht“ oder „ich glaube“ zeigst du, dass es eine Vermutung ist. Erfinde nichts als sichere Tatsache."
    },
    {
     "art": "wahl",
     "frage": "Wie beschreibst du eine Person richtig?",
     "optionen": [
      "ein alt Mann mit graue Haare",
      "ein älterer Mann mit grauen Haaren",
      "ein Mann alt grau"
     ],
     "loesung": 1,
     "erklaerung": "Nach „mit“ steht der Dativ: „mit grauen Haaren“."
    },
    {
     "art": "wahl",
     "frage": "Die Prüferin fragt: „Was für eine Situation zeigt das Bild?“ Was sagst du?",
     "optionen": [
      "Ich glaube, das ist ein Umzug. Die beiden ziehen gerade in eine neue Wohnung ein.",
      "Das ist ein Foto.",
      "Umzug ist."
     ],
     "loesung": 0,
     "erklaerung": "Hier sagst du, was passiert, nicht nur, was man sieht. „Ich glaube, das ist …“ passt gut."
    },
    {
     "art": "wahl",
     "frage": "Du kennst ein Wort nicht, zum Beispiel „Reifenschaukel“. Was machst du?",
     "optionen": [
      "Still sein und warten.",
      "Ein Wort aus deiner Sprache sagen.",
      "Umschreiben: Das ist eine Schaukel aus einem großen Reifen."
     ],
     "loesung": 2,
     "erklaerung": "Umschreiben ist eine gute Strategie. Die Prüfer wollen hören, dass du dir helfen kannst."
    },
    {
     "art": "wahl",
     "frage": "Welcher Satz ist richtig?",
     "optionen": [
      "Der Mechaniker trägt graue Arbeitskleidung.",
      "Der Mechaniker trägt grau Arbeitskleidung.",
      "Der Mechaniker tragen graue Arbeitskleidung."
     ],
     "loesung": 0,
     "erklaerung": "Das Adjektiv vor dem Nomen bekommt eine Endung: „graue Arbeitskleidung“."
    },
    {
     "art": "wahl",
     "frage": "Die Personen auf dem Foto lachen. Wie sagst du das?",
     "optionen": [
      "Gut.",
      "Die Stimmung ist lustig Menschen.",
      "Die beiden lachen, die Stimmung ist also gut."
     ],
     "loesung": 2,
     "erklaerung": "Erst sagen, was man sieht, dann was es bedeutet. Das zeigt, dass du genau hinschaust."
    },
    {
     "art": "wahl",
     "frage": "Wie viel beschreibst du?",
     "optionen": [
      "Nur eine Sache nennen.",
      "Personen, Ort, was sie machen, und ein, zwei Details.",
      "Jedes kleine Ding im Bild, fünf Minuten lang."
     ],
     "loesung": 1,
     "erklaerung": "Die wichtigsten Dinge reichen. Danach brauchst du noch Zeit für deine eigene Erfahrung."
    },
    {
     "art": "wahl",
     "frage": "Wie kommst du von der Beschreibung zu deiner eigenen Erfahrung?",
     "optionen": [
      "Das kenne ich auch. Als ich nach Deutschland gekommen bin, …",
      "Ende.",
      "Und jetzt ich."
     ],
     "loesung": 0,
     "erklaerung": "„Das kenne ich auch“ ist eine einfache Brücke zum zweiten Teil."
    }
   ]
  },
  {
   "id": "tdm3",
   "stufe": 2,
   "titel": "Über eigene Erfahrungen sprechen",
   "kurz": "Erzählen, vergleichen, ein Beispiel geben",
   "ziel": "Nach diesem Block erzählst du im Perfekt von eigenen Erlebnissen, vergleichst dein Heimatland mit Deutschland und gibst ein konkretes Beispiel aus deinem Alltag.",
   "zeichen": "💬",
   "farbe": "rot",
   "aufgaben": [
    {
     "art": "wahl",
     "frage": "Welcher Satz ist richtig?",
     "optionen": [
      "Letztes Jahr ich habe umgezogen.",
      "Letztes Jahr bin ich umgezogen.",
      "Letztes Jahr habe ich umgezogen."
     ],
     "loesung": 1,
     "erklaerung": "„Umziehen“ bildet das Perfekt mit „sein“. Das Verb steht auf Position zwei."
    },
    {
     "art": "wahl",
     "frage": "Wie vergleichst du dein Heimatland mit Deutschland?",
     "optionen": [
      "Heimatland Markt, Deutschland Supermarkt.",
      "In meinem Heimatland ist alles besser.",
      "In meinem Heimatland kaufen viele Leute auf dem Markt ein. Hier gehe ich meistens in den Supermarkt."
     ],
     "loesung": 2,
     "erklaerung": "Zwei klare Sätze, einer über früher dort, einer über heute hier. So wird der Vergleich verständlich."
    },
    {
     "art": "wahl",
     "frage": "Wie sagst du, wie es dir damit ging?",
     "optionen": [
      "Am Anfang war das schwer für mich, aber jetzt komme ich gut zurecht.",
      "Schwer.",
      "Am Anfang ich war schwer."
     ],
     "loesung": 0,
     "erklaerung": "„Am Anfang … aber jetzt …“ zeigt eine Entwicklung. Das klingt natürlich."
    },
    {
     "art": "wahl",
     "frage": "Welcher Satz sagt, wie oft du etwas machst?",
     "optionen": [
      "Ich fahre Bus Tag.",
      "Ich fahre jeden Tag mit dem Bus zur Arbeit.",
      "Ich fahre mit dem Bus jeder Tag."
     ],
     "loesung": 1,
     "erklaerung": "„Jeden Tag“ steht im Akkusativ. „Mit dem Bus“ sagt, wie du fährst."
    },
    {
     "art": "wahl",
     "frage": "Wie erzählst du ein kleines Beispiel?",
     "optionen": [
      "Busse sind manchmal falsch.",
      "Ich weiß nicht mehr.",
      "Einmal habe ich den falschen Bus genommen und bin am anderen Ende der Stadt angekommen."
     ],
     "loesung": 2,
     "erklaerung": "Mit „einmal“ beginnt eine kleine Geschichte. Ein echtes Beispiel ist besser als ein allgemeiner Satz."
    },
    {
     "art": "wahl",
     "frage": "Du hast mit dem Thema selbst keine Erfahrung. Was sagst du?",
     "optionen": [
      "Dazu kann ich nichts sagen.",
      "Selbst habe ich das noch nicht gemacht, aber meine Schwester arbeitet in einer Werkstatt. Sie erzählt oft davon.",
      "Nein."
     ],
     "loesung": 1,
     "erklaerung": "Erzähl von einer Person, die du kennst, oder davon, wie es in deinem Heimatland ist. So hast du trotzdem etwas zu sagen."
    },
    {
     "art": "wahl",
     "frage": "Die Prüferin fragt: „Und wie ist das bei Ihnen zu Hause?“ Wie beginnst du?",
     "optionen": [
      "Bei uns zu Hause ist das ein bisschen anders.",
      "Weiß nicht.",
      "Zu Hause."
     ],
     "loesung": 0,
     "erklaerung": "Mit dem ersten Satz zeigst du, dass du die Frage verstanden hast. Danach kommen die Details."
    },
    {
     "art": "wahl",
     "frage": "Wie sagst du deine Meinung?",
     "optionen": [
      "Ich finde gut Kinder draußen.",
      "Ich finde, dass Kinder draußen gut.",
      "Ich finde es gut, dass Kinder hier viel draußen spielen."
     ],
     "loesung": 2,
     "erklaerung": "„Ich finde es gut, dass …“ und das Verb am Ende. Ein sicherer Satz für deine Meinung."
    },
    {
     "art": "wahl",
     "frage": "Wie sprichst du über früher und heute?",
     "optionen": [
      "Früher ich kochen nie. Heute ich koche.",
      "Früher habe ich nie gekocht. Heute koche ich jeden Abend für meine Familie.",
      "Früher nie kochen, heute immer."
     ],
     "loesung": 1,
     "erklaerung": "Früher im Perfekt, heute im Präsens. Nach „Früher“ und „Heute“ steht das Verb auf Position zwei."
    },
    {
     "art": "wahl",
     "frage": "Dein Partner hat von seinem Umzug erzählt. Wie reagierst du?",
     "optionen": [
      "Okay.",
      "Falsch.",
      "Das kenne ich. Bei mir war es ähnlich, ich musste auch lange suchen."
     ],
     "loesung": 2,
     "erklaerung": "Wer auf den Partner reagiert, zeigt, dass er zuhört. Das gehört zur Prüfung dazu."
    }
   ]
  },
  {
   "id": "tdm4",
   "stufe": 2,
   "titel": "Gemeinsam planen und sich einigen",
   "kurz": "Vorschlagen, zustimmen, ablehnen, Aufgaben verteilen",
   "ziel": "Nach diesem Block machst du in Teil 3 Vorschläge mit Begründung, reagierst auf die Ideen deines Partners, findest einen Kompromiss und fasst am Ende das Ergebnis zusammen.",
   "zeichen": "🤝",
   "farbe": "lila",
   "aufgaben": [
    {
     "art": "wahl",
     "frage": "Wie machst du einen Vorschlag?",
     "optionen": [
      "Wie wäre es, wenn wir am Samstag fahren?",
      "Samstag.",
      "Wir fahren Samstag, fertig."
     ],
     "loesung": 0,
     "erklaerung": "„Wie wäre es, wenn …“ ist ein freundlicher Vorschlag. Der Partner kann gut darauf antworten."
    },
    {
     "art": "wahl",
     "frage": "Wie stimmst du zu?",
     "optionen": [
      "Ja ja.",
      "Gute Idee, das machen wir so.",
      "Ist mir egal."
     ],
     "loesung": 1,
     "erklaerung": "Eine kurze, klare Zustimmung zeigt, dass du zuhörst und mitplanst."
    },
    {
     "art": "wahl",
     "frage": "Der Termin passt dir nicht. Wie sagst du das höflich?",
     "optionen": [
      "Das ist keine gute Idee.",
      "Nein, nie.",
      "Samstag passt mir leider nicht, da arbeite ich. Geht vielleicht Sonntag?"
     ],
     "loesung": 2,
     "erklaerung": "Nein sagen ist erlaubt. Wichtig sind ein Grund und ein neuer Vorschlag."
    },
    {
     "art": "wahl",
     "frage": "Welcher Vorschlag ist begründet?",
     "optionen": [
      "Ich bringe Kuchen.",
      "Ich würde Kuchen mitbringen, weil man ihn gut am Tag vorher backen kann.",
      "Kuchen ist Kuchen."
     ],
     "loesung": 1,
     "erklaerung": "Mit „weil“ begründest du deinen Vorschlag. Das zählt in der Bewertung."
    },
    {
     "art": "wahl",
     "frage": "Wie fragst du nach der Meinung deines Partners?",
     "optionen": [
      "Was meinst du dazu?",
      "Du sagst jetzt.",
      "Und?"
     ],
     "loesung": 0,
     "erklaerung": "„Was meinst du dazu?“ oder „Was hältst du davon?“ bringen den Partner ins Gespräch."
    },
    {
     "art": "wahl",
     "frage": "Wie verteilst du Aufgaben?",
     "optionen": [
      "Du machst alles.",
      "Aufgaben später.",
      "Ich kümmere mich um die Getränke. Kannst du die Einladung schreiben?"
     ],
     "loesung": 2,
     "erklaerung": "Erst sagen, was du selbst machst, dann den Partner fragen. Das ist fair und klar."
    },
    {
     "art": "wahl",
     "frage": "Über welche Punkte auf der Karte sprecht ihr?",
     "optionen": [
      "Nur über den ersten.",
      "Über alle Punkte, und ihr dürft auch eigene Ideen bringen.",
      "Über gar keinen, Hauptsache ihr redet."
     ],
     "loesung": 1,
     "erklaerung": "Alle Punkte sollen vorkommen. Eigene Ideen sind ein Plus."
    },
    {
     "art": "wahl",
     "frage": "Was ist ein typischer Fehler in Teil 3?",
     "optionen": [
      "Zu viele Fragen an den Partner stellen.",
      "Zu höflich sein.",
      "Nur die eigenen Ideen nennen und nicht auf den Partner reagieren."
     ],
     "loesung": 2,
     "erklaerung": "Teil 3 ist ein Gespräch. Wer nur einen Vortrag hält, verliert Punkte."
    },
    {
     "art": "wahl",
     "frage": "Dein Partner möchte grillen, du möchtest ein Picknick. Wie findet ihr einen Kompromiss?",
     "optionen": [
      "Wir machen ein Picknick, und wer möchte, bringt einen kleinen Grill mit.",
      "Picknick ist besser, Schluss.",
      "Dann machen wir gar nichts."
     ],
     "loesung": 0,
     "erklaerung": "Ein Kompromiss nimmt etwas von beiden Ideen. So einigt ihr euch schnell."
    },
    {
     "art": "wahl",
     "frage": "Wie fasst du am Ende zusammen?",
     "optionen": [
      "Mal sehen.",
      "Also, dann machen wir es so: Wir treffen uns am Samstag um zehn am Bahnhof, und jeder bringt etwas zu essen mit.",
      "Ich denke noch darüber nach."
     ],
     "loesung": 1,
     "erklaerung": "Eine kurze Zusammenfassung mit Tag, Zeit und Aufgaben zeigt: Ihr habt euch geeinigt."
    }
   ]
  }
 ],
 "teile": [
  {
   "nr": 1,
   "art": "erzaehlen",
   "name": "Über sich sprechen",
   "kurz": "Name, Herkunft, Familie, Arbeit, Sprachen",
   "was": "Du stellst dich mit den Stichwörtern vor. Danach stellt die Prüferin eine Zusatzfrage.",
   "tipp": "Zu jedem Stichwort ein, zwei ganze Sätze. Nicht auswendig wie eine Liste, sondern erzählen.",
   "zeichen": "👋",
   "farbe": "turq",
   "punkte": 10,
   "runden": [
    {
     "id": "tdzm1r1",
     "thema": "Über sich sprechen",
     "karten": [
      {
       "kopf": "Teil 1 · Über sich sprechen",
       "kopfb": "Stichwörter",
       "auftrag": [
        "Stell dich vor: Zu jedem Stichwort ein, zwei Sätze.",
        "Beantworte danach die Zusatzfrage."
       ],
       "id": "tdm1k1",
       "thema": "Über sich sprechen",
       "punkte": [
        "Name",
        "Geburtsort",
        "Wohnort",
        "Arbeit/Beruf",
        "Familie",
        "Sprachen"
       ],
       "mustervortrag": "Guten Tag, mein Name ist Carlos Mendes. Ich bin in Recife geboren, das ist eine große Stadt im Nordosten von Brasilien, direkt am Meer. Seit zwei Jahren wohne ich in Bielefeld. Die Stadt ist nicht so groß, aber ruhig, und das gefällt mir. Ich bin Koch von Beruf. Im Moment arbeite ich in der Küche von einem Hotel, meistens am Abend und am Wochenende. Ich bin verheiratet, meine Frau kommt aus Deutschland. Wir haben eine kleine Tochter, sie ist drei Jahre alt und geht in die Kita. Meine Muttersprache ist Portugiesisch. Ich spreche auch Spanisch und Englisch, und jetzt lerne ich Deutsch im Integrationskurs. Mit meiner Tochter spreche ich Portugiesisch, damit sie beide Sprachen lernt.",
       "frage": "Was machen Sie gern in Ihrer Freizeit?",
       "musterantwort": "In meiner Freizeit koche ich auch gern, aber dann für Freunde und nicht für Gäste im Hotel. Am Sonntag gehen wir als Familie oft in den Park oder an den See. Und manchmal spiele ich mit Kollegen Fußball."
      }
     ]
    },
    {
     "id": "tdzm1r2",
     "thema": "Über sich sprechen",
     "karten": [
      {
       "kopf": "Teil 1 · Über sich sprechen",
       "kopfb": "Stichwörter",
       "auftrag": [
        "Stell dich vor: Zu jedem Stichwort ein, zwei Sätze.",
        "Beantworte danach die Zusatzfrage."
       ],
       "id": "tdm1k2",
       "thema": "Über sich sprechen",
       "punkte": [
        "Name",
        "Geburtsort",
        "Wohnort",
        "Arbeit/Beruf",
        "Familie",
        "Sprachen"
       ],
       "mustervortrag": "Guten Tag, ich heiße Nguyen Thi Lan. Nguyen ist mein Familienname, Lan ist mein Vorname. Geboren bin ich in Hanoi, der Hauptstadt von Vietnam. Seit vier Jahren lebe ich in Leipzig, im Stadtteil Grünau. Ich arbeite als Pflegehelferin in einem Altenheim. Die Arbeit ist manchmal anstrengend, aber ich mag die alten Leute sehr. Ich bin verheiratet und habe zwei Söhne. Sie sind acht und zwölf Jahre alt und sprechen schon besser Deutsch als ich. Meine Muttersprache ist Vietnamesisch. Englisch habe ich in der Schule gelernt, aber ich habe viel vergessen. Deutsch lerne ich jeden Tag, im Kurs und bei der Arbeit.",
       "frage": "Wie haben Sie am Anfang Deutsch gelernt?",
       "musterantwort": "Am Anfang habe ich mit einer App gelernt, jeden Abend ungefähr eine halbe Stunde. Dann habe ich mit dem Integrationskurs angefangen. Am meisten hilft mir aber die Arbeit, weil ich dort den ganzen Tag Deutsch sprechen muss."
      }
     ]
    },
    {
     "id": "tdzm1r3",
     "thema": "Über sich sprechen",
     "karten": [
      {
       "kopf": "Teil 1 · Über sich sprechen",
       "kopfb": "Stichwörter",
       "auftrag": [
        "Stell dich vor: Zu jedem Stichwort ein, zwei Sätze.",
        "Beantworte danach die Zusatzfrage."
       ],
       "id": "tdm1k3",
       "thema": "Über sich sprechen",
       "punkte": [
        "Name",
        "Geburtsort",
        "Wohnort",
        "Arbeit/Beruf",
        "Familie",
        "Sprachen"
       ],
       "mustervortrag": "Hallo, mein Name ist Ahmet Yılmaz. Ich komme aus der Türkei, geboren bin ich in Kayseri. Das ist eine Stadt in der Mitte vom Land, und im Winter ist es dort sehr kalt. Jetzt wohne ich seit eineinhalb Jahren in Gelsenkirchen. Hier lebt auch mein Onkel, er hat mir am Anfang viel geholfen. Von Beruf bin ich Lastwagenfahrer. Ich fahre für eine Spedition, meistens hier in Nordrhein-Westfalen, manchmal auch bis nach Holland. Ich bin noch nicht verheiratet. Meine Eltern und meine Schwester leben in Kayseri, ich telefoniere fast jeden Tag mit ihnen. Ich spreche Türkisch und ein bisschen Englisch. Deutsch lerne ich im Abendkurs, weil ich tagsüber arbeite.",
       "frage": "Was gefällt Ihnen an Gelsenkirchen?",
       "musterantwort": "Mir gefällt, dass die Leute hier sehr direkt sind und schnell mit einem reden. Und es gibt viele Parks, das habe ich nicht erwartet. Nur das Wetter ist oft grau, daran muss ich mich noch gewöhnen."
      }
     ]
    },
    {
     "id": "tdzm1r4",
     "thema": "Über sich sprechen",
     "karten": [
      {
       "kopf": "Teil 1 · Über sich sprechen",
       "kopfb": "Stichwörter",
       "auftrag": [
        "Stell dich vor: Zu jedem Stichwort ein, zwei Sätze.",
        "Beantworte danach die Zusatzfrage."
       ],
       "id": "tdm1k4",
       "thema": "Über sich sprechen",
       "punkte": [
        "Name",
        "Geburtsort",
        "Wohnort",
        "Arbeit/Beruf",
        "Familie",
        "Sprachen"
       ],
       "mustervortrag": "Guten Tag, ich heiße Priya Sharma. Ich bin in Pune geboren, das liegt im Westen von Indien, ungefähr drei Stunden von Mumbai entfernt. Seit einem Jahr wohne ich mit meiner Familie in Stuttgart. Mein Mann arbeitet hier als Ingenieur, deshalb sind wir nach Deutschland gekommen. In Indien war ich Buchhalterin in einer großen Firma. Im Moment arbeite ich nicht, weil unser Sohn erst zehn Monate alt ist. Ich bin also zu Hause und mache nebenbei den Deutschkurs. Ich spreche Hindi und Marathi, das ist die Sprache in meiner Region. Englisch spreche ich auch gut, das habe ich bei der Arbeit jeden Tag gebraucht. Deutsch ist für mich noch schwer, besonders die Artikel.",
       "frage": "Was möchten Sie in Zukunft beruflich machen?",
       "musterantwort": "Ich möchte gern wieder in der Buchhaltung arbeiten. Dafür muss mein Deutsch aber noch besser werden. Wenn mein Sohn in die Kita geht, möchte ich eine Weiterbildung machen und mich dann bei Firmen hier in Stuttgart bewerben."
      }
     ]
    }
   ]
  },
  {
   "nr": 2,
   "art": "erzaehlen",
   "name": "Über Erfahrungen sprechen",
   "kurz": "Ein Foto beschreiben, eigene Erfahrungen",
   "was": "Du bekommst ein Foto aus dem Alltag. Du sagst, was du siehst und was für eine Situation das ist, und erzählst von deinen Erfahrungen.",
   "tipp": "Erst beschreiben („Auf dem Foto sehe ich …\"), dann von dir erzählen („Ich habe auch schon …\").",
   "zeichen": "📷",
   "farbe": "gold",
   "punkte": 20,
   "runden": [
    {
     "id": "tdzm2r1",
     "thema": "Umziehen",
     "karten": [
      {
       "kopf": "Teil 2 · Über Erfahrungen sprechen",
       "kopfb": "Foto",
       "auftrag": [
        "Sag, was du auf dem Foto siehst und was für eine Situation das ist.",
        "Erzähl von deinen eigenen Erfahrungen.",
        "Beantworte die Fragen der Prüferin."
       ],
       "id": "tdm2k1",
       "foto": "umzug",
       "thema": "Umziehen",
       "bild": "Ein junger Mann und eine junge Frau in weißen T-Shirts tragen beim Einzug Sachen in eine helle Wohnung. Er trägt einen großen Karton, sie eine weiße Holzkiste mit grünen Pflanzen. Beide lachen.",
       "punkte": [
        "Was sehen Sie auf dem Foto?",
        "Was für eine Situation zeigt das Bild?",
        "Welche Erfahrungen haben Sie damit?"
       ],
       "mustervortrag": "Auf dem Foto sieht man einen jungen Mann und eine junge Frau. Beide tragen weiße T-Shirts. Sie sind in einer hellen Wohnung und tragen Sachen hinein. Der Mann hat einen großen Karton in den Händen. Die Frau trägt eine weiße Holzkiste, darin stehen grüne Pflanzen. Die beiden lachen, sie haben also gute Laune. Ich glaube, das ist ein Umzug. Vielleicht ist das ihre erste gemeinsame Wohnung, und sie ziehen gerade ein. Ich bin in Deutschland schon zweimal umgezogen. Beim ersten Mal hatte ich nur zwei Koffer, das war einfach. Beim zweiten Mal hatten wir schon Möbel und viele Kartons. Freunde aus meinem Deutschkurs haben geholfen, und wir haben einen kleinen Transporter gemietet. Am Abend haben wir zusammen Pizza auf dem Boden gegessen, weil der Tisch noch nicht aufgebaut war. Das war anstrengend, aber auch schön.",
       "frage": "Was war beim Umzug in Deutschland schwierig für Sie?",
       "musterantwort": "Am schwierigsten war die Suche nach der Wohnung. Ich habe mehr als zwei Monate gesucht und viele Absagen bekommen. Danach musste ich mich noch beim Bürgeramt ummelden. Das ging aber schnell, weil ich vorher online einen Termin gemacht habe. Bei der Wohnungssuche hat mir zum Glück eine Freundin geholfen."
      }
     ]
    },
    {
     "id": "tdzm2r2",
     "thema": "Einkaufen auf dem Markt",
     "karten": [
      {
       "kopf": "Teil 2 · Über Erfahrungen sprechen",
       "kopfb": "Foto",
       "auftrag": [
        "Sag, was du auf dem Foto siehst und was für eine Situation das ist.",
        "Erzähl von deinen eigenen Erfahrungen.",
        "Beantworte die Fragen der Prüferin."
       ],
       "id": "tdm2k2",
       "foto": "markt",
       "thema": "Einkaufen auf dem Markt",
       "bild": "Auf einem überdachten Markt stehen zwei Männer an einem Stand mit vielen Kürbissen. Einer hält einen Kürbis in der Hand und schaut ihn an. Im Hintergrund sieht man Pflanzen und ein Auto.",
       "punkte": [
        "Was sehen Sie auf dem Foto?",
        "Was für eine Situation zeigt das Bild?",
        "Welche Erfahrungen haben Sie damit?"
       ],
       "mustervortrag": "Auf dem Foto sieht man einen Markt. Er ist überdacht, man kann also auch bei Regen einkaufen. An einem Stand stehen zwei Männer, und auf dem Stand liegen sehr viele Kürbisse. Ein Mann hält einen Kürbis in der Hand und schaut ihn genau an. Vielleicht möchte er ihn kaufen und prüft, ob er gut ist. Oder er ist der Verkäufer und zeigt ihn dem anderen Mann. Im Hintergrund sieht man Pflanzen und ein Auto. Weil es so viele Kürbisse gibt, ist es wahrscheinlich Herbst. Ich gehe auch gern auf den Markt. Bei uns ist jeden Samstag Wochenmarkt auf dem Platz vor dem Rathaus. Dort kaufe ich Obst, Gemüse und manchmal Käse. Es ist etwas teurer als im Supermarkt, aber das Gemüse ist frisch und kommt aus der Region. In Kolumbien, wo ich herkomme, war der Markt viel lauter und größer. Da hat man auch oft über den Preis gesprochen, das macht man hier nicht.",
       "frage": "Was kochen Sie mit Kürbis?",
       "musterantwort": "Ich mache gern Kürbissuppe, das habe ich hier in Deutschland gelernt. Eine Kollegin hat mir das Rezept gegeben. Man braucht nur Kürbis, Zwiebeln, Kartoffeln und ein bisschen Ingwer. Meine Kinder essen die Suppe am liebsten mit frischem Brot. Im Herbst koche ich sie fast jede Woche."
      }
     ]
    },
    {
     "id": "tdzm2r3",
     "thema": "Mit Bus und Bahn fahren",
     "karten": [
      {
       "kopf": "Teil 2 · Über Erfahrungen sprechen",
       "kopfb": "Foto",
       "auftrag": [
        "Sag, was du auf dem Foto siehst und was für eine Situation das ist.",
        "Erzähl von deinen eigenen Erfahrungen.",
        "Beantworte die Fragen der Prüferin."
       ],
       "id": "tdm2k3",
       "foto": "bus",
       "thema": "Mit Bus und Bahn fahren",
       "bild": "Blick in einen Stadtbus von innen: gelbe Haltestangen, Fahrgäste sitzen auf den Sitzen, eine Frau mit langen Haaren schaut aus dem Fenster.",
       "punkte": [
        "Was sehen Sie auf dem Foto?",
        "Was für eine Situation zeigt das Bild?",
        "Welche Erfahrungen haben Sie damit?"
       ],
       "mustervortrag": "Auf dem Foto sieht man einen Stadtbus von innen. Es gibt gelbe Haltestangen, an denen man sich festhalten kann. Einige Fahrgäste sitzen auf den Sitzen. Eine Frau mit langen Haaren schaut aus dem Fenster. Vielleicht denkt sie nach, oder sie schaut, wann ihre Haltestelle kommt. Ich vermute, das ist eine ganz normale Fahrt im Alltag. Die Leute fahren mit dem Bus zur Arbeit, zum Einkaufen oder nach Hause. Ich fahre auch fast jeden Tag mit dem Bus. Ich habe kein Auto, deshalb habe ich eine Monatskarte. Morgens nehme ich den Bus um sieben Uhr zehn zum Deutschkurs. Meistens ist er pünktlich. Im Winter kommt er aber manchmal zu spät, und dann friere ich an der Haltestelle. Am Anfang war es schwer für mich, die Fahrpläne zu verstehen. Jetzt benutze ich eine App, und das ist viel einfacher.",
       "frage": "Fahren Sie lieber mit dem Bus oder mit dem Fahrrad?",
       "musterantwort": "Im Sommer fahre ich lieber mit dem Fahrrad, weil das gesund ist und nichts kostet. Aber im Winter, wenn es regnet oder kalt ist, nehme ich den Bus. Mit den Kindern fahren wir auch meistens mit dem Bus, das ist sicherer."
      }
     ]
    },
    {
     "id": "tdzm2r4",
     "thema": "Kochen in der Familie",
     "karten": [
      {
       "kopf": "Teil 2 · Über Erfahrungen sprechen",
       "kopfb": "Foto",
       "auftrag": [
        "Sag, was du auf dem Foto siehst und was für eine Situation das ist.",
        "Erzähl von deinen eigenen Erfahrungen.",
        "Beantworte die Fragen der Prüferin."
       ],
       "id": "tdm2k4",
       "foto": "kochen",
       "thema": "Kochen in der Familie",
       "bild": "In einer hellen Küche bereitet ein älterer Mann mit grauen Haaren zusammen mit zwei Kindern, einem Jungen und einem Mädchen, Essen vor. Auf dem Tisch stehen Schüsseln und Zitronen.",
       "punkte": [
        "Was sehen Sie auf dem Foto?",
        "Was für eine Situation zeigt das Bild?",
        "Welche Erfahrungen haben Sie damit?"
       ],
       "mustervortrag": "Auf dem Foto sieht man eine helle Küche. Ein älterer Mann mit grauen Haaren bereitet zusammen mit zwei Kindern Essen vor. Die Kinder sind ein Junge und ein Mädchen. Auf dem Tisch stehen Schüsseln und Zitronen. Ich glaube, der Mann ist der Opa, und er kocht mit seinen Enkelkindern. Vielleicht machen sie einen Kuchen mit Zitrone oder einen Salat. Das ist eine schöne Situation in der Familie, die Kinder lernen beim Opa etwas Neues. Bei uns in der Familie hat früher meistens meine Mutter gekocht. Als ich klein war, durfte ich ihr oft helfen. Ich habe zum Beispiel den Teig für das Brot geknetet. Heute koche ich selbst mit meinen zwei Töchtern. Am Sonntag machen wir oft zusammen gefüllte Weinblätter, das ist ein Gericht aus der Türkei. Die Kinder rollen die Blätter, und ich mache die Füllung. Das dauert lange, aber wir reden und lachen viel dabei.",
       "frage": "Wer kocht bei Ihnen zu Hause?",
       "musterantwort": "Unter der Woche koche meistens ich, weil mein Mann bis abends arbeitet. Am Wochenende kocht er, und dann gibt es oft etwas vom Grill. Die Kinder helfen beim Tischdecken. Das finde ich wichtig, jeder soll etwas machen. Nach dem Essen räumen wir dann alle zusammen auf."
      }
     ]
    }
   ]
  },
  {
   "nr": 3,
   "art": "planen",
   "name": "Gemeinsam etwas planen",
   "kurz": "Zusammen einen Plan machen",
   "was": "Ihr plant zusammen etwas, zum Beispiel eine Wanderung mit dem Deutschkurs. Vorschläge machen, reagieren, einigen.",
   "tipp": "Zu jedem Punkt einen Vorschlag. Und reagieren: „Gute Idee!\", „Das geht leider nicht, weil …\".",
   "zeichen": "🤝",
   "farbe": "gruen",
   "punkte": 20,
   "runden": [
    {
     "id": "tdzm3r1",
     "thema": "Wanderung mit dem Deutschkurs",
     "karten": [
      {
       "kopf": "Teil 3 · Gemeinsam etwas planen",
       "auftrag": [
        "Mach Vorschläge zu allen Punkten.",
        "Reagiere auf dein Gegenüber.",
        "Einigt euch auf einen Plan."
       ],
       "id": "tdm3k1",
       "thema": "Wanderung mit dem Deutschkurs",
       "aufgabe": "Ihr Deutschkurs möchte zum Ende des Kurses zusammen wandern. Planen Sie die Wanderung gemeinsam.",
       "punkte": [
        "Wann?",
        "Wohin und wie weit?",
        "Wie kommen wir hin?",
        "Essen und Trinken?",
        "Was machen wir bei Regen?"
       ],
       "mustervorschlag": "Ich würde vorschlagen, dass wir am Samstag in zwei Wochen wandern. Am Wochenende haben fast alle frei, auch die Leute, die arbeiten. Wie wäre es mit dem Weg um den See? Der ist nicht so schwer, ungefähr zehn Kilometer, das schaffen alle im Kurs. Hinkommen können wir mit dem Zug, der fährt jede Stunde, und mit einem Gruppenticket ist es günstig. Beim Essen finde ich ein Picknick am besten. Jeder bringt etwas mit, dann haben wir Essen aus vielen Ländern. Und wenn es regnet, verschieben wir die Wanderung einfach um eine Woche. Was meinst du, sollen wir auch die Kursleiterin fragen, ob sie mitkommt?",
       "mustereinigung": "Gut, dann machen wir es so: Wir wandern am Samstag in zwei Wochen um den See und nehmen den Zug um neun Uhr. Jeder bringt etwas für das Picknick mit, und bei Regen gehen wir eine Woche später. Ich frage die Kursleiterin, und du schreibst eine Nachricht in unsere Kursgruppe."
      }
     ]
    },
    {
     "id": "tdzm3r2",
     "thema": "Abschiedsfest für die Kursleiterin",
     "karten": [
      {
       "kopf": "Teil 3 · Gemeinsam etwas planen",
       "auftrag": [
        "Mach Vorschläge zu allen Punkten.",
        "Reagiere auf dein Gegenüber.",
        "Einigt euch auf einen Plan."
       ],
       "id": "tdm3k2",
       "thema": "Abschiedsfest für die Kursleiterin",
       "aufgabe": "Ihre Kursleiterin, Frau Wagner, hört nach diesem Kurs auf und zieht in eine andere Stadt. Planen Sie zusammen ein kleines Abschiedsfest.",
       "punkte": [
        "Wann und wo?",
        "Essen und Getränke?",
        "Geschenk?",
        "Wer bezahlt?",
        "Programm?"
       ],
       "mustervorschlag": "Ich finde, wir sollten das Fest am letzten Kurstag machen, direkt nach dem Unterricht. Dann sind sowieso alle da. Wir könnten im Kursraum feiern, wenn die Schule das erlaubt. Das kostet nichts. Beim Essen schlage ich vor, dass jeder etwas aus seinem Land mitbringt. Frau Wagner hat oft gesagt, dass sie gern neue Gerichte probiert. Als Geschenk könnten wir ein Fotobuch machen, mit Fotos aus dem Kurs und einem kurzen Satz von jedem. Das ist persönlich und nicht so teuer. Ich denke, jeder gibt fünf Euro, dann reicht das Geld für das Buch und für Blumen. Und vielleicht kann jemand eine kleine Rede halten. Möchtest du das machen? Dein Deutsch ist richtig gut.",
       "mustereinigung": "Also, wir feiern am letzten Kurstag nach dem Unterricht im Kursraum, und jeder bringt ein Gericht mit. Ich sammle die fünf Euro ein und bestelle das Fotobuch, du kaufst die Blumen. Die Rede halten wir zusammen, und jeder von uns sagt ein paar Sätze."
      }
     ]
    },
    {
     "id": "tdzm3r3",
     "thema": "Nachbarn beim Umzug helfen",
     "karten": [
      {
       "kopf": "Teil 3 · Gemeinsam etwas planen",
       "auftrag": [
        "Mach Vorschläge zu allen Punkten.",
        "Reagiere auf dein Gegenüber.",
        "Einigt euch auf einen Plan."
       ],
       "id": "tdm3k3",
       "thema": "Nachbarn beim Umzug helfen",
       "aufgabe": "Ihr Nachbar, Herr Osei, zieht am Samstag in eine neue Wohnung im gleichen Stadtteil. Er ist schon älter und braucht Hilfe. Planen Sie zusammen, wie Sie ihm helfen.",
       "punkte": [
        "Wann anfangen?",
        "Transport?",
        "Wer packt was?",
        "Essen für die Helfer?",
        "Was passiert mit alten Möbeln?"
       ],
       "mustervorschlag": "Ich würde gern früh anfangen, so um acht Uhr. Dann sind wir am Nachmittag fertig, und Herr Osei kann am Abend schon in der neuen Wohnung schlafen. Für den Transport brauchen wir einen Transporter. Mein Schwager hat so ein Auto, ich kann ihn fragen. Beim Packen schlage ich vor, dass du mit Herrn Osei die Küche machst. Da gibt es viele Gläser und Teller, die muss man vorsichtig einpacken. Ich trage mit meinem Schwager die schweren Möbel. Mittags sollten wir eine Pause machen. Wir könnten einfach Brötchen holen, das geht schnell. Und die alten Möbel, die er nicht mehr braucht, können wir zum Sperrmüll geben. Den muss man bei der Stadt anmelden, oder? Weißt du, wie das geht?",
       "mustereinigung": "Okay, dann treffen wir uns am Samstag um acht bei Herrn Osei. Mein Schwager kommt mit dem Transporter, und wir beide tragen die Möbel. Du packst mit Herrn Osei die Küche ein und holst mittags Brötchen. Den Sperrmüll meldest du am Montag online bei der Stadt an."
      }
     ]
    },
    {
     "id": "tdzm3r4",
     "thema": "Kindergeburtstag",
     "karten": [
      {
       "kopf": "Teil 3 · Gemeinsam etwas planen",
       "auftrag": [
        "Mach Vorschläge zu allen Punkten.",
        "Reagiere auf dein Gegenüber.",
        "Einigt euch auf einen Plan."
       ],
       "id": "tdm3k4",
       "thema": "Kindergeburtstag",
       "aufgabe": "Ihre Kinder sind in derselben Klasse und werden im gleichen Monat acht Jahre alt. Sie möchten zusammen einen Kindergeburtstag feiern. Planen Sie das Fest.",
       "punkte": [
        "Wann und wo?",
        "Wie viele Kinder?",
        "Essen?",
        "Spiele?",
        "Wer hilft?"
       ],
       "mustervorschlag": "Wie wäre es, wenn wir am Samstagnachmittag feiern, von drei bis sechs? Bei mir in der Wohnung ist es zu eng, aber in unserem Haus gibt es einen Gemeinschaftsraum. Den kann man für einen Tag mieten, das kostet nur zwanzig Euro. Ich würde nicht zu viele Kinder einladen, vielleicht zehn, also fünf von jedem Kind. Sonst wird es zu laut. Beim Essen denke ich an einen Kuchen und kleine Würstchen. Wir sollten die Eltern aber vorher fragen, ob ein Kind eine Allergie hat. Zum Spielen gibt es Topfschlagen und Stopptanz, das kennen die Kinder aus der Schule, und es macht immer Spaß. Was meinst du, sollen wir noch eine Person fragen, die hilft? Mit zehn Kindern sind zwei Erwachsene vielleicht zu wenig.",
       "mustereinigung": "Gut, dann feiern wir am Samstag von drei bis sechs im Gemeinschaftsraum, und jedes Kind lädt fünf Freunde ein. Ich backe den Kuchen und frage nach Allergien, du kümmerst dich um die Würstchen und die Spiele. Und deine Schwester fragen wir, ob sie uns hilft."
      }
     ]
    }
   ]
  }
 ],
 "laeufe": [
  {
   "id": "tdzml1",
   "titel": "Prüfungslauf 1",
   "minuten": 16,
   "teile": [
    {
     "nr": 1,
     "art": "erzaehlen",
     "thema": "Über sich sprechen",
     "karten": [
      {
       "kopf": "Teil 1 · Über sich sprechen",
       "kopfb": "Stichwörter",
       "auftrag": [
        "Stell dich vor: Zu jedem Stichwort ein, zwei Sätze.",
        "Beantworte danach die Zusatzfrage."
       ],
       "id": "tdm1k5",
       "thema": "Über sich sprechen",
       "punkte": [
        "Name",
        "Geburtsort",
        "Wohnort",
        "Arbeit/Beruf",
        "Familie",
        "Sprachen"
       ],
       "mustervortrag": "Guten Tag, mein Name ist Kofi Asante. Ich komme aus Ghana, aus Kumasi. Das ist die zweitgrößte Stadt im Land. Seit drei Jahren wohne ich in Hannover. Zuerst habe ich in einem Lager gearbeitet, jetzt mache ich eine Ausbildung zum Elektroniker. Ich bin im zweiten Lehrjahr und gehe zwei Tage pro Woche in die Berufsschule. Ich bin nicht verheiratet, aber ich habe eine Freundin, sie kommt auch aus Ghana. Meine Eltern und meine drei Brüder leben noch in Kumasi. Ich spreche Twi, das ist meine Muttersprache, und Englisch, weil das in Ghana die Amtssprache ist. Deutsch spreche ich jeden Tag in der Firma, und das hilft mir sehr.",
       "frage": "Was essen Sie gern?",
       "musterantwort": "Am liebsten esse ich Fufu mit Erdnusssuppe, das ist ein Gericht aus Ghana. Das kochen meine Freundin und ich oft am Wochenende. Aber ich esse auch gern deutsches Essen, zum Beispiel Bratkartoffeln mit Spiegelei."
      }
     ]
    },
    {
     "nr": 2,
     "art": "erzaehlen",
     "thema": "Kinder und Freizeit",
     "karten": [
      {
       "kopf": "Teil 2 · Über Erfahrungen sprechen",
       "kopfb": "Foto",
       "auftrag": [
        "Sag, was du auf dem Foto siehst und was für eine Situation das ist.",
        "Erzähl von deinen eigenen Erfahrungen.",
        "Beantworte die Fragen der Prüferin."
       ],
       "id": "tdm2k5",
       "foto": "spielplatz",
       "thema": "Kinder und Freizeit",
       "bild": "Auf einem Spielplatz schaukeln zwei Kinder auf einer großen Reifenschaukel. Ein Mädchen in einem bunten Kleid lacht. Im Hintergrund sieht man Bäume.",
       "punkte": [
        "Was sehen Sie auf dem Foto?",
        "Was für eine Situation zeigt das Bild?",
        "Welche Erfahrungen haben Sie damit?"
       ],
       "mustervortrag": "Auf dem Foto sieht man einen Spielplatz. Zwei Kinder schaukeln auf einer großen Reifenschaukel. Ein Mädchen trägt ein buntes Kleid und lacht. Im Hintergrund sieht man Bäume. Ich glaube, es ist ein warmer Tag, vielleicht im Sommer, weil das Mädchen ein Kleid trägt. Die Kinder haben viel Spaß. Vielleicht sitzen die Eltern in der Nähe auf einer Bank, aber auf dem Foto sieht man sie nicht. Ich habe einen Sohn, er ist fünf Jahre alt. Fast jeden Nachmittag nach der Kita gehen wir auf den Spielplatz bei uns in der Nähe. Dort gibt es auch so eine Reifenschaukel, und das ist sein Lieblingsplatz. Auf dem Spielplatz habe ich auch andere Eltern kennengelernt. Mit einer Mutter aus der Nachbarschaft habe ich am Anfang nur ein bisschen gesprochen, heute sind wir Freundinnen. So habe ich auch viel Deutsch gelernt.",
       "frage": "Was können Kinder in Ihrer Stadt in der Freizeit machen?",
       "musterantwort": "Es gibt viele Möglichkeiten, zum Beispiel Spielplätze, ein Schwimmbad und Sportvereine. Die Stadtbibliothek hat jeden Mittwoch eine Vorlesestunde für Kinder, die ist kostenlos. Im Sommer gibt es auch ein Ferienprogramm, aber da muss man sich früh anmelden. Mein Sohn war letztes Jahr dabei, und es hat ihm sehr gefallen."
      }
     ]
    },
    {
     "nr": 3,
     "art": "planen",
     "thema": "Ausflug mit den Kindern der Kita",
     "karten": [
      {
       "kopf": "Teil 3 · Gemeinsam etwas planen",
       "auftrag": [
        "Mach Vorschläge zu allen Punkten.",
        "Reagiere auf dein Gegenüber.",
        "Einigt euch auf einen Plan."
       ],
       "id": "tdm3k5",
       "thema": "Ausflug mit den Kindern der Kita",
       "aufgabe": "Die Kita Ihrer Kinder macht im Juni einen Ausflug mit zwanzig Kindern. Die zwei Erzieherinnen brauchen Hilfe von den Eltern. Planen Sie den Ausflug zusammen.",
       "punkte": [
        "Wohin?",
        "Wie kommen wir hin?",
        "Wie viele Eltern kommen mit?",
        "Essen?",
        "Was müssen die Kinder mitnehmen?"
       ],
       "mustervorschlag": "Ich schlage vor, dass wir auf den Bauernhof am Stadtrand fahren. Dort gibt es Tiere, und die Kinder dürfen sie füttern. Das ist für kleine Kinder genau richtig. Hinkommen können wir mit dem Linienbus, die Fahrt dauert nur zwanzig Minuten. Einen eigenen Bus zu mieten ist zu teuer, finde ich. Für die Begleitung brauchen wir genug Erwachsene. Ich denke, auf vier Kinder sollte ein Erwachsener kommen. Bei zwanzig Kindern sind das fünf Personen. Zusammen mit den zwei Erzieherinnen brauchen wir also noch drei Eltern. Zum Essen kann jedes Kind sein eigenes Frühstück mitbringen. Wichtig ist auch, dass alle feste Schuhe und eine Regenjacke dabeihaben, auf einem Bauernhof wird man schnell schmutzig. Was denkst du, sollen wir einen Brief an alle Eltern schreiben?",
       "mustereinigung": "Also, wir fahren mit dem Linienbus zum Bauernhof und suchen drei Eltern als Begleitung. Jedes Kind bringt sein Frühstück mit, dazu feste Schuhe und eine Regenjacke. Ich schreibe den Brief an die Eltern, und du hängst eine Liste in der Kita auf, wo man sich eintragen kann."
      }
     ]
    }
   ]
  },
  {
   "id": "tdzml2",
   "titel": "Prüfungslauf 2",
   "minuten": 16,
   "teile": [
    {
     "nr": 1,
     "art": "erzaehlen",
     "thema": "Über sich sprechen",
     "karten": [
      {
       "kopf": "Teil 1 · Über sich sprechen",
       "kopfb": "Stichwörter",
       "auftrag": [
        "Stell dich vor: Zu jedem Stichwort ein, zwei Sätze.",
        "Beantworte danach die Zusatzfrage."
       ],
       "id": "tdm1k6",
       "thema": "Über sich sprechen",
       "punkte": [
        "Name",
        "Geburtsort",
        "Wohnort",
        "Arbeit/Beruf",
        "Familie",
        "Sprachen"
       ],
       "mustervortrag": "Hallo, ich heiße Elena Popescu. Ich bin in Cluj geboren, das ist eine Stadt im Norden von Rumänien. Seit fünf Jahren lebe ich in Nürnberg. Ich arbeite als Verkäuferin in einer Bäckerei. Ich fange sehr früh an, um halb sechs, aber dafür habe ich am Nachmittag frei. Ich lebe mit meinen zwei Töchtern zusammen. Sie sind neun und vierzehn Jahre alt. Die Ältere hilft mir manchmal mit Briefen vom Amt, weil ihr Deutsch sehr gut ist. Meine Muttersprache ist Rumänisch. Ich spreche auch Italienisch, weil ich vor Deutschland drei Jahre in Italien gearbeitet habe. Und Deutsch lerne ich natürlich auch, zweimal pro Woche am Abend.",
       "frage": "Wie verbringen Sie das Wochenende?",
       "musterantwort": "Am Samstag muss ich oft arbeiten, aber nur bis zwölf. Am Sonntag schlafen wir lange und frühstücken zusammen. Am Nachmittag gehen wir spazieren oder ins Schwimmbad, je nachdem, wie das Wetter ist."
      }
     ]
    },
    {
     "nr": 2,
     "art": "erzaehlen",
     "thema": "Arbeit",
     "karten": [
      {
       "kopf": "Teil 2 · Über Erfahrungen sprechen",
       "kopfb": "Foto",
       "auftrag": [
        "Sag, was du auf dem Foto siehst und was für eine Situation das ist.",
        "Erzähl von deinen eigenen Erfahrungen.",
        "Beantworte die Fragen der Prüferin."
       ],
       "id": "tdm2k6",
       "foto": "werkstatt",
       "thema": "Arbeit",
       "bild": "Ein Mechaniker in grauer Arbeitskleidung beugt sich über den offenen Motorraum eines Autos und arbeitet am Motor.",
       "punkte": [
        "Was sehen Sie auf dem Foto?",
        "Was für eine Situation zeigt das Bild?",
        "Welche Erfahrungen haben Sie damit?"
       ],
       "mustervortrag": "Auf dem Foto sieht man einen Mechaniker. Er trägt graue Arbeitskleidung. Er beugt sich über ein Auto, der Motorraum ist offen, und er arbeitet am Motor. Ich vermute, das ist in einer Autowerkstatt. Vielleicht ist das Auto kaputt, oder es ist zur Inspektion da. Die Arbeit sieht anstrengend aus, man muss lange stehen und sich bücken. Man braucht dafür auch viel Wissen über Technik. Ich habe selbst in meinem Heimatland in einer Werkstatt gearbeitet, bei meinem Onkel in Tunesien. Dort habe ich vor allem Reifen gewechselt und beim Ölwechsel geholfen. Hier in Deutschland arbeite ich im Moment in einem Lager, weil meine Ausbildung noch nicht anerkannt ist. Ich möchte aber gern wieder als Mechaniker arbeiten. Mit meinem eigenen Auto war ich hier auch schon in der Werkstatt. Die Reparatur war ziemlich teuer, aber der Mechaniker hat mir alles gut erklärt.",
       "frage": "Was ist Ihnen bei der Arbeit wichtig?",
       "musterantwort": "Mir ist wichtig, dass das Team gut ist und man sich gegenseitig hilft. Natürlich muss auch der Lohn stimmen. Und ich möchte etwas Neues lernen, also nicht jeden Tag nur dieselbe Arbeit machen. Im Lager habe ich zum Glück nette Kollegen, das hilft mir sehr."
      }
     ]
    },
    {
     "nr": 3,
     "art": "planen",
     "thema": "Flohmarkt im Haus",
     "karten": [
      {
       "kopf": "Teil 3 · Gemeinsam etwas planen",
       "auftrag": [
        "Mach Vorschläge zu allen Punkten.",
        "Reagiere auf dein Gegenüber.",
        "Einigt euch auf einen Plan."
       ],
       "id": "tdm3k6",
       "thema": "Flohmarkt im Haus",
       "aufgabe": "Die Mieter in Ihrem Haus möchten einen Flohmarkt im Hof machen. Sie beide organisieren ihn. Planen Sie zusammen.",
       "punkte": [
        "Wann?",
        "Wo stehen die Tische?",
        "Werbung?",
        "Essen und Getränke?",
        "Was passiert mit den Sachen, die übrig bleiben?"
       ],
       "mustervorschlag": "Ich würde den Flohmarkt an einem Sonntag im Mai machen, von zehn bis vier. Da ist es schon warm, und am Sonntag haben die meisten Leute Zeit. Die Tische können wir im Hof an der Wand entlang aufstellen, dann bleibt in der Mitte Platz zum Laufen. Wir müssen aber vorher die Hausverwaltung fragen, ob wir den Hof benutzen dürfen. Für die Werbung könnten wir Zettel im Treppenhaus und in den Geschäften in unserer Straße aufhängen. Dann kommen auch Leute aus der Nachbarschaft. Beim Essen würde ich es einfach halten, nur Kaffee und Kuchen. Das Geld davon könnten wir für neue Spielsachen im Hof sammeln. Und was übrig bleibt, bringen wir zum Sozialkaufhaus. Was hältst du davon?",
       "mustereinigung": "Gut, dann machen wir den Flohmarkt am zweiten Sonntag im Mai von zehn bis vier im Hof. Ich frage nächste Woche bei der Hausverwaltung nach, und du machst die Zettel. Den Kuchen backen wir beide, und was übrig bleibt, bringen wir am Montag zum Sozialkaufhaus."
      }
     ]
    }
   ]
  }
 ]
};
