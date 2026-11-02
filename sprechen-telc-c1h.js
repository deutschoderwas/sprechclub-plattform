/* ============================================================
   deutschoderwas club — SPRECHEN telc Deutsch C1 Hochschule

   Aufbau nach dem offiziellen telc-Format (telc „Tipps zur
   Prüfungsvorbereitung Deutsch C1 Hochschule", geprüft 02.11.2026).
   Alle Texte und Aufgaben eigene, nur das Format ist nachgebaut.
   Erzeugt aus scratchpad/telcc1 mit bau.js.
   ============================================================ */

window.SPRECHEN_TELC_C1H = {
 "niveau": "telcC1H",
 "pruefung": "telc Deutsch C1 Hochschule",
 "minuten": 16,
 "punkte": 48,
 "intro": "Die mündliche Prüfung bei telc C1 Hochschule dauert etwa sechzehn Minuten zu zweit, vorher hast du zwanzig Minuten Vorbereitung. Du hältst eine Präsentation von drei Minuten, fasst die Präsentation deines Gegenübers zusammen und stellst Fragen, und ihr diskutiert über ein Zitat. Bewertet werden Inhalt und Sprache: Flüssigkeit, Repertoire, grammatische Richtigkeit, Aussprache. Sprich laut, nimm dich auf und vergleiche mit dem Muster.",
 "stufen": [
  {
   "nr": 1,
   "titel": "Präsentieren",
   "zeichen": "🎤",
   "was": "Eine Präsentation aufbauen, zusammenfassen und nachfragen."
  },
  {
   "nr": 2,
   "titel": "Diskutieren",
   "zeichen": "⚖️",
   "was": "Ein Zitat erläutern und Stellung nehmen."
  },
  {
   "nr": 3,
   "titel": "Die Teile",
   "zeichen": "🎯",
   "was": "Präsentation, Zusammenfassung, Diskussion — mit Musterlösung zum Anhören."
  },
  {
   "nr": 4,
   "titel": "Die ganze Prüfung",
   "zeichen": "⏱️",
   "was": "Alles hintereinander, sechzehn Minuten."
  }
 ],
 "bloecke": [
  {
   "id": "tc1m1",
   "stufe": 1,
   "titel": "Eine Präsentation aufbauen",
   "kurz": "Thema eingrenzen, Aspekte ordnen, mit einem Fazit landen — in drei Minuten",
   "ziel": "Nach diesem Block hältst du eine dreiminütige Präsentation, die klar eingegrenzt, logisch gegliedert und an dein Gegenüber gerichtet ist.",
   "zeichen": "📊",
   "farbe": "turq",
   "aufgaben": [
    {
     "art": "wahl",
     "frage": "Wie lange dauert die Präsentation in Teil 1A ungefähr?",
     "optionen": [
      "Etwa drei Minuten",
      "Etwa zehn Minuten",
      "Etwa dreißig Sekunden"
     ],
     "loesung": 0,
     "erklaerung": "Rund drei Minuten — danach fasst dein Partner zusammen und stellt Fragen."
    },
    {
     "art": "wahl",
     "frage": "An wen richtest du deine Präsentation?",
     "optionen": [
      "Nur an die Prüfer",
      "An deinen Gesprächspartner",
      "An niemanden, du liest vor"
     ],
     "loesung": 1,
     "erklaerung": "In Teil 1A sprichst du deinen Partner an, denn er muss deinen Vortrag anschließend zusammenfassen."
    },
    {
     "art": "wahl",
     "frage": "Welcher Einstieg grenzt das Thema am besten ein?",
     "optionen": [
      "Ich spreche heute über Umwelt.",
      "Ich möchte mich heute auf eine Frage konzentrieren: Was können Hochschulen konkret tun, um ihren Energieverbrauch zu senken?",
      "Umwelt ist das wichtigste Thema überhaupt."
     ],
     "loesung": 1,
     "erklaerung": "Ein großes Thema wird erst durch eine konkrete Leitfrage in drei Minuten machbar."
    },
    {
     "art": "wahl",
     "frage": "Welcher Satz kündigt die Gliederung an?",
     "optionen": [
      "Dazu werde ich zunächst die Ausgangslage skizzieren, dann zwei Lösungsansätze vorstellen und zum Schluss ein kurzes Fazit ziehen.",
      "Ich rede jetzt einfach mal los.",
      "Am Ende gibt es noch was."
     ],
     "loesung": 0,
     "erklaerung": "„Zunächst … dann … zum Schluss\" gibt deinem Zuhörer eine Landkarte für die nächsten drei Minuten."
    },
    {
     "art": "wahl",
     "frage": "Wie viele Aspekte behandelst du in drei Minuten sinnvollerweise?",
     "optionen": [
      "Einen einzigen",
      "Zwei bis drei",
      "Acht bis zehn"
     ],
     "loesung": 1,
     "erklaerung": "Zwei bis drei Aspekte lassen sich mit Beispielen ausführen, ohne dass die Zeit davonläuft."
    },
    {
     "art": "wahl",
     "frage": "Mit welchem Satz leitest du zum zweiten Aspekt über?",
     "optionen": [
      "Und dann noch was.",
      "Damit komme ich zu meinem zweiten Punkt, nämlich der Frage der Finanzierung.",
      "Zweitens Finanzierung."
     ],
     "loesung": 1,
     "erklaerung": "Eine ausformulierte Überleitung zeigt Struktur und gibt dem Zuhörer Orientierung."
    },
    {
     "art": "wahl",
     "frage": "Welcher Satz führt ein Beispiel aus eigener Erfahrung ein?",
     "optionen": [
      "Das kann ich an einem Beispiel aus meinem eigenen Studium veranschaulichen.",
      "Beispiele sind unwichtig.",
      "Wie jeder weiß, …"
     ],
     "loesung": 0,
     "erklaerung": "„Veranschaulichen\" ist ein typisches Präsentationsverb und kündigt das Beispiel klar an."
    },
    {
     "art": "wahl",
     "frage": "Was gehört in ein gutes Fazit?",
     "optionen": [
      "Eine kurze Antwort auf die Leitfrage vom Anfang",
      "Ein völlig neues Thema",
      "Eine Entschuldigung für die Länge"
     ],
     "loesung": 0,
     "erklaerung": "Das Fazit schließt den Kreis: Du beantwortest die Frage, die du am Anfang gestellt hast."
    },
    {
     "art": "ordnen",
     "frage": "Bau den Einstieg in deine Präsentation.",
     "teile": [
      "In",
      "meiner",
      "Präsentation",
      "möchte",
      "ich",
      "der",
      "Frage",
      "nachgehen,",
      "ob",
      "Noten",
      "gerecht",
      "sind."
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
      9,
      10,
      11
     ],
     "erklaerung": "„Einer Frage nachgehen\" ist eine elegante Wendung, um die Leitfrage einzuführen."
    },
    {
     "art": "ordnen",
     "frage": "Bau den Schlusssatz.",
     "teile": [
      "Damit",
      "komme",
      "ich",
      "zum",
      "Schluss",
      "und",
      "danke",
      "dir",
      "für",
      "deine",
      "Aufmerksamkeit."
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
      9,
      10
     ],
     "erklaerung": "Nach „Damit\" auf Position eins folgt das Verb „komme\"; du sprichst deinen Partner direkt an."
    }
   ]
  },
  {
   "id": "tc1m2",
   "stufe": 1,
   "titel": "Zusammenfassen und nachfragen",
   "kurz": "Die Präsentation des Partners in eigenen Worten wiedergeben und gezielt nachhaken",
   "ziel": "Nach diesem Block fasst du eine gehörte Präsentation knapp und genau zusammen und stellst Anschlussfragen, die das Gespräch vertiefen.",
   "zeichen": "🔁",
   "farbe": "gold",
   "aufgaben": [
    {
     "art": "wahl",
     "frage": "Was ist in Teil 1B deine Aufgabe?",
     "optionen": [
      "Die Präsentation des Partners zusammenfassen und Fragen stellen",
      "Eine zweite Präsentation zum gleichen Thema halten",
      "Die Präsentation des Partners benoten"
     ],
     "loesung": 0,
     "erklaerung": "Du zeigst, dass du verstanden hast, und bringst mit Fragen ein Gespräch in Gang."
    },
    {
     "art": "wahl",
     "frage": "Welcher Einstieg in die Zusammenfassung passt am besten?",
     "optionen": [
      "Du hast über etwas geredet.",
      "Wenn ich dich richtig verstanden habe, ging es dir vor allem um die Frage, ob …",
      "Deine Präsentation war gut."
     ],
     "loesung": 1,
     "erklaerung": "„Wenn ich dich richtig verstanden habe\" leitet höflich und präzise die Zusammenfassung ein."
    },
    {
     "art": "wahl",
     "frage": "Wie lang soll deine Zusammenfassung ungefähr sein?",
     "optionen": [
      "Ein Wort",
      "Einige Sätze mit den Hauptpunkten",
      "So lang wie die Präsentation selbst"
     ],
     "loesung": 1,
     "erklaerung": "Du gibst nur die Kernaussagen wieder — Leitfrage, Hauptaspekte, Fazit."
    },
    {
     "art": "wahl",
     "frage": "Welche Formulierung gibt die Hauptaussage deines Partners wieder?",
     "optionen": [
      "Dein zentrales Argument war, dass …",
      "Ich finde, dass …",
      "Man sagt ja, dass …"
     ],
     "loesung": 0,
     "erklaerung": "In der Zusammenfassung geht es um die Position des Partners, nicht um deine eigene."
    },
    {
     "art": "wahl",
     "frage": "Welche Anschlussfrage vertieft das Gespräch am besten?",
     "optionen": [
      "War das alles?",
      "Du hast erwähnt, dass kleine Hochschulen benachteiligt sind. Woran machst du das konkret fest?",
      "Wie spät ist es?"
     ],
     "loesung": 1,
     "erklaerung": "Eine gute Anschlussfrage greift einen konkreten Punkt auf und bittet um Begründung oder Beispiel."
    },
    {
     "art": "wahl",
     "frage": "Du hast einen Punkt nicht genau verstanden. Was sagst du?",
     "optionen": [
      "Das war unverständlich.",
      "Könntest du noch einmal erläutern, was du mit „nachgelagerten Beiträgen\" gemeint hast?",
      "Egal."
     ],
     "loesung": 1,
     "erklaerung": "Eine höfliche Rückfrage mit Konjunktiv II zeigt Interesse und klärt Missverständnisse."
    },
    {
     "art": "wahl",
     "frage": "Dein Partner fragt nach deiner Präsentation. Wie beginnst du eine Antwort, um Zeit zu gewinnen?",
     "optionen": [
      "Das ist eine interessante Frage. Darauf bin ich in meiner Präsentation nur kurz eingegangen.",
      "Keine Ahnung.",
      "Das habe ich doch gesagt!"
     ],
     "loesung": 0,
     "erklaerung": "Eine kurze würdigende Einleitung verschafft dir Zeit und wirkt souverän."
    },
    {
     "art": "wahl",
     "frage": "Welcher Satz ist eine Zusammenfassung und keine Bewertung?",
     "optionen": [
      "Du hast zwei Modelle verglichen und dich am Ende für eine Mischform ausgesprochen.",
      "Deine Mischform überzeugt mich nicht.",
      "Das war die beste Präsentation."
     ],
     "loesung": 0,
     "erklaerung": "Zusammenfassen heißt: neutral wiedergeben, was der andere gesagt hat."
    },
    {
     "art": "ordnen",
     "frage": "Bau den Einstieg in die Zusammenfassung.",
     "teile": [
      "Du",
      "hast",
      "dich",
      "in",
      "deiner",
      "Präsentation",
      "mit",
      "der",
      "Frage",
      "beschäftigt,",
      "ob",
      "…"
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
      9,
      10,
      11
     ],
     "erklaerung": "„Sich mit einer Frage beschäftigen\" ist ein vielseitiger Einstieg in jede Zusammenfassung."
    },
    {
     "art": "ordnen",
     "frage": "Bau die Anschlussfrage.",
     "teile": [
      "Mich",
      "würde",
      "noch",
      "interessieren,",
      "wie",
      "du",
      "das",
      "in",
      "der",
      "Praxis",
      "umsetzen",
      "würdest."
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
      9,
      10,
      11
     ],
     "erklaerung": "Im indirekten Fragesatz mit „wie\" steht das konjugierte Verb „würdest\" am Ende."
    }
   ]
  },
  {
   "id": "tc1m3",
   "stufe": 2,
   "titel": "Ein Zitat erläutern und Stellung nehmen",
   "kurz": "Was ist gemeint, was halte ich davon, und warum?",
   "ziel": "Nach diesem Block erläuterst du ein Zitat in eigenen Worten, beziehst begründet Stellung und reagierst sachlich auf Einwände deines Partners.",
   "zeichen": "🗨️",
   "farbe": "rot",
   "aufgaben": [
    {
     "art": "wahl",
     "frage": "Was bedeutet „ein Zitat erläutern\"?",
     "optionen": [
      "Das Zitat wörtlich wiederholen",
      "In eigenen Worten erklären, was gemeint ist und worauf es anspielt",
      "Sofort sagen, ob man zustimmt"
     ],
     "loesung": 1,
     "erklaerung": "Erst erläutern, dann bewerten: Du zeigst, dass du die Aussage und ihren Hintergrund verstanden hast."
    },
    {
     "art": "wahl",
     "frage": "Welcher Satz leitet die Erläuterung eines Zitats ein?",
     "optionen": [
      "Mit dieser Aussage spielt die Autorin darauf an, dass …",
      "Das Zitat ist falsch.",
      "Ich habe das Zitat gelesen."
     ],
     "loesung": 0,
     "erklaerung": "„Darauf anspielen, dass\" zeigt, dass du die Absicht hinter der Aussage erkennst."
    },
    {
     "art": "wahl",
     "frage": "Welche Formulierung drückt eine eingeschränkte Zustimmung aus?",
     "optionen": [
      "Da stimme ich voll und ganz zu.",
      "Im Grunde teile ich diese Ansicht, allerdings nur mit einer wichtigen Einschränkung.",
      "Das ist völliger Unsinn."
     ],
     "loesung": 1,
     "erklaerung": "Differenzierte Stellungnahmen sind auf C1-Niveau überzeugender als reine Zustimmung oder Ablehnung."
    },
    {
     "art": "wahl",
     "frage": "Dein Partner widerspricht dir. Welche Reaktion ist angemessen?",
     "optionen": [
      "Das sehe ich anders, und Punkt.",
      "Diesen Einwand kann ich nachvollziehen. Dennoch würde ich zu bedenken geben, dass …",
      "Du hast keine Ahnung."
     ],
     "loesung": 1,
     "erklaerung": "Erst den Einwand würdigen, dann das eigene Argument dagegensetzen — so bleibt die Diskussion sachlich."
    },
    {
     "art": "wahl",
     "frage": "Welcher Satz begründet eine Position mit einem Beispiel?",
     "optionen": [
      "Das zeigt sich etwa daran, dass in meinem Studiengang …",
      "Das ist halt so.",
      "Das finden alle."
     ],
     "loesung": 0,
     "erklaerung": "„Das zeigt sich etwa daran, dass\" verbindet Behauptung und Beleg."
    },
    {
     "art": "wahl",
     "frage": "Wie beziehst du deinen Partner aktiv in die Diskussion ein?",
     "optionen": [
      "Wie siehst du das? Hast du ähnliche Erfahrungen gemacht?",
      "Ich rede jetzt weiter.",
      "Du musst mir zustimmen."
     ],
     "loesung": 0,
     "erklaerung": "Offene Fragen an den Partner sind ausdrücklich Teil der Aufgabe."
    },
    {
     "art": "wahl",
     "frage": "Welche Wendung signalisiert, dass du die Gegenposition ernst nimmst?",
     "optionen": [
      "Man darf allerdings nicht außer Acht lassen, dass …",
      "Das ist irrelevant.",
      "Darüber muss man nicht reden."
     ],
     "loesung": 0,
     "erklaerung": "„Nicht außer Acht lassen\" zeigt, dass du auch andere Gesichtspunkte berücksichtigst."
    },
    {
     "art": "wahl",
     "frage": "Welcher Satz fasst die Diskussion am Ende gut zusammen?",
     "optionen": [
      "Wir sind uns also einig, dass …, auch wenn wir die Gewichtung unterschiedlich sehen.",
      "Ich habe gewonnen.",
      "Fertig."
     ],
     "loesung": 0,
     "erklaerung": "Gemeinsamkeiten und Unterschiede benennen — ein runder Abschluss für die Diskussion."
    },
    {
     "art": "ordnen",
     "frage": "Bau den Satz zur Erläuterung des Zitats.",
     "teile": [
      "Der",
      "Autor",
      "möchte",
      "damit",
      "zum",
      "Ausdruck",
      "bringen,",
      "dass",
      "Wissen",
      "allein",
      "nicht",
      "genügt."
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
      9,
      10,
      11
     ],
     "erklaerung": "„Etwas zum Ausdruck bringen\" ist eine feste Wendung für die Erläuterung einer Aussage."
    },
    {
     "art": "ordnen",
     "frage": "Bau die Reaktion auf einen Einwand.",
     "teile": [
      "Da",
      "ist",
      "etwas",
      "dran,",
      "aber",
      "ich",
      "sehe",
      "das",
      "etwas",
      "differenzierter."
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
     "erklaerung": "„Da ist etwas dran\" erkennt den Einwand an; „differenzierter\" kündigt deine eigene Sicht an."
    }
   ]
  }
 ],
 "teile": [
  {
   "nr": 1,
   "art": "erzaehlen",
   "name": "Präsentation",
   "kurz": "Drei Minuten zu einem Thema, an dein Gegenüber gerichtet",
   "was": "Du hältst eine kurze Präsentation: Thema eingrenzen, zwei, drei Aspekte, ein Beispiel, ein Fazit.",
   "tipp": "Kündige die Gliederung an („Ich möchte auf drei Punkte eingehen …\") — das macht dich verständlich und ruhig.",
   "zeichen": "🎤",
   "farbe": "turq",
   "punkte": 6,
   "runden": [
    {
     "id": "tc1m1r1",
     "thema": "Wie nachhaltig ist der Campus?",
     "karten": [
      {
       "kopf": "Teil 1A · Präsentation",
       "kopfb": "Themenkarte",
       "auftrag": [
        "Halte eine Präsentation von etwa drei Minuten — an dein Gegenüber gerichtet.",
        "Beantworte danach die Anschlussfrage."
       ],
       "id": "tc1a1",
       "thema": "Wie nachhaltig ist der Campus?",
       "punkte": [
        "Thema nennen und eingrenzen",
        "Zwei, drei Aspekte",
        "Beispiel oder Erfahrung",
        "Fazit"
       ],
       "mustervortrag": "In meiner Präsentation möchte ich mich mit der Frage beschäftigen, wie Hochschulen ihren Campus nachhaltiger gestalten können. Das Thema Nachhaltigkeit ist natürlich riesig, deshalb konzentriere ich mich auf einen Bereich, den wir alle aus dem Alltag kennen: den Energieverbrauch und die Ernährung auf dem Campus. Dazu werde ich zunächst kurz die Ausgangslage beschreiben, dann zwei konkrete Ansätze vorstellen und zum Schluss ein Fazit ziehen. Zur Ausgangslage: Hochschulen sind eigentlich kleine Städte. Tausende Menschen kommen jeden Tag zusammen, Hörsäle werden beheizt und beleuchtet, Labore laufen rund um die Uhr, und in den Mensen werden täglich riesige Mengen an Essen gekocht. Entsprechend hoch ist der Energieverbrauch. Gleichzeitig haben Hochschulen eine Vorbildfunktion, denn hier werden die Fachkräfte von morgen ausgebildet, und hier wird zum Klimawandel geforscht. Damit komme ich zu meinem ersten Ansatz, nämlich den Gebäuden. Viele Hochschulgebäude stammen aus einer Zeit, in der Energie billig war. Sie sind schlecht gedämmt, die Fenster sind alt, und oft brennt das Licht auch in leeren Räumen. Hier ließe sich mit vergleichsweise einfachen Mitteln viel erreichen, etwa mit Bewegungsmeldern, einer intelligenten Heizungssteuerung oder Solaranlagen auf den großen Flachdächern. Das kostet zwar zunächst Geld, rechnet sich aber meist schon nach wenigen Jahren. Außerdem können solche Maßnahmen gleich für die Lehre genutzt werden, etwa wenn Studenten der Ingenieurwissenschaften die Daten der Anlagen auswerten. Mein zweiter Punkt betrifft die Mensa. Fleischgerichte verursachen deutlich mehr Treibhausgase als pflanzliche Gerichte. Einige Hochschulen haben deshalb begonnen, das vegetarische Angebot auszubauen und günstiger anzubieten. Das kann ich an einem Beispiel aus meiner eigenen Hochschule veranschaulichen. Dort gibt es seit letztem Jahr zweimal pro Woche einen sogenannten Klimatag, an dem nur vegetarische und vegane Gerichte angeboten werden. Am Anfang gab es heftige Proteste, manche haben sogar mit einem Boykott gedroht. Inzwischen hat sich die Aufregung aber gelegt, und laut einer Umfrage des Studentenwerks sind die meisten mit dem Angebot zufrieden. Ich selbst habe dadurch einige Gerichte entdeckt, die ich sonst nie probiert hätte. Was bedeutet das nun für meine Ausgangsfrage? Ich denke, es zeigt sich, dass Hochschulen durchaus etwas bewegen können, wenn sie bei konkreten Alltagsbereichen ansetzen, statt nur große Strategiepapiere zu schreiben. Entscheidend ist allerdings, dass man die Menschen auf dem Campus mitnimmt und nicht einfach Verbote ausspricht. Wenn Studenten und Mitarbeiter verstehen, warum etwas geändert wird, und mitreden dürfen, ist die Akzeptanz viel höher. Damit komme ich zum Schluss und danke dir für deine Aufmerksamkeit.",
       "frage": "Du hast gesagt, dass sich Investitionen in Gebäude schnell rechnen. Warum passiert das dann an vielen Hochschulen trotzdem nicht?",
       "musterantwort": "Das ist eine berechtigte Frage. Meines Wissens liegt das vor allem daran, dass Hochschulen ihr Budget für Gebäude oft gar nicht selbst verwalten, sondern auf Mittel vom Land warten müssen. Hinzu kommt, dass die Einsparungen erst in einigen Jahren sichtbar werden, während die Kosten sofort anfallen."
      }
     ]
    },
    {
     "id": "tc1m1r2",
     "thema": "Lernen mit dem Smartphone",
     "karten": [
      {
       "kopf": "Teil 1A · Präsentation",
       "kopfb": "Themenkarte",
       "auftrag": [
        "Halte eine Präsentation von etwa drei Minuten — an dein Gegenüber gerichtet.",
        "Beantworte danach die Anschlussfrage."
       ],
       "id": "tc1a2",
       "thema": "Lernen mit dem Smartphone",
       "punkte": [
        "Thema nennen und eingrenzen",
        "Zwei, drei Aspekte",
        "Beispiel oder Erfahrung",
        "Fazit"
       ],
       "mustervortrag": "Ich möchte heute über ein Gerät sprechen, das wir alle ständig bei uns tragen: das Smartphone. Genauer gesagt geht es mir um die Frage, ob das Smartphone beim Lernen im Studium eher hilft oder eher schadet. Ich werde dazu zunächst die Vorteile beleuchten, anschließend auf die Probleme eingehen und am Ende ein persönliches Fazit ziehen. Beginnen wir mit den Vorteilen. Das Smartphone hat das Lernen zweifellos flexibler gemacht. Man kann Vokabeln in der Straßenbahn wiederholen, Vorlesungsfolien in der Mittagspause noch einmal anschauen oder sich mit Kommilitonen in Lerngruppen über Nachrichtendienste austauschen. Außerdem gibt es inzwischen zahlreiche Lernprogramme, die Inhalte in kleinen Einheiten anbieten und den Lernstand automatisch anpassen. Gerade für Menschen, die neben dem Studium arbeiten, ist das ein großer Gewinn, weil sie auch kurze Zeitfenster sinnvoll nutzen können. Auf der anderen Seite gibt es ein ernstzunehmendes Problem, und das ist die Ablenkung. Forscher sprechen in diesem Zusammenhang von Unterbrechungskosten. Jedes Mal, wenn wir eine Nachricht lesen, verlieren wir den Faden und brauchen einige Minuten, bis wir uns wieder vollständig auf die eigentliche Aufgabe konzentrieren. Wer also beim Lernen ständig aufs Display schaut, lernt zwar scheinbar lange, aber in Wirklichkeit ziemlich ineffizient. Einige Untersuchungen deuten sogar darauf hin, dass schon die bloße Anwesenheit des Smartphones auf dem Tisch die Konzentration verringert, selbst wenn es ausgeschaltet ist. Dazu möchte ich dir von meiner eigenen Erfahrung erzählen. Im letzten Semester habe ich für eine schwierige Statistikprüfung gelernt und war ständig unzufrieden mit meinem Fortschritt. Irgendwann habe ich ein kleines Experiment gemacht: Ich habe das Handy beim Lernen in einen anderen Raum gelegt und nur in festen Pausen nachgeschaut. Die ersten Tage waren ehrlich gesagt ziemlich unangenehm, weil ich das Gefühl hatte, etwas zu verpassen. Aber nach einer Woche habe ich gemerkt, dass ich in zwei Stunden mehr geschafft habe als vorher an einem ganzen Nachmittag. Die Prüfung habe ich dann übrigens deutlich besser bestanden als erwartet. Was ist also mein Fazit? Ich glaube nicht, dass das Smartphone an sich gut oder schlecht für das Lernen ist. Es kommt darauf an, wie bewusst wir es einsetzen. Für kurze Wiederholungen und die Organisation von Lerngruppen ist es ein hervorragendes Werkzeug. Für konzentriertes, tiefes Lernen sollte man es aber besser weglegen. Vielleicht wäre es sogar sinnvoll, wenn Hochschulen diese Lerntechniken schon in den ersten Semestern vermitteln würden. Das war meine Präsentation, vielen Dank fürs Zuhören.",
       "frage": "Du sprichst von Lernprogrammen. Glaubst du, dass solche Programme eine Vorlesung ersetzen können?",
       "musterantwort": "Ersetzen eher nicht, ergänzen auf jeden Fall. Die Programme eignen sich gut zum Wiederholen und Einüben, aber sie können kaum erklären, warum etwas so ist, oder auf individuelle Fragen eingehen. Dafür braucht man meiner Meinung nach weiterhin Menschen."
      }
     ]
    },
    {
     "id": "tc1m1r3",
     "thema": "Wohnungsnot in Universitätsstädten",
     "karten": [
      {
       "kopf": "Teil 1A · Präsentation",
       "kopfb": "Themenkarte",
       "auftrag": [
        "Halte eine Präsentation von etwa drei Minuten — an dein Gegenüber gerichtet.",
        "Beantworte danach die Anschlussfrage."
       ],
       "id": "tc1a3",
       "thema": "Wohnungsnot in Universitätsstädten",
       "punkte": [
        "Thema nennen und eingrenzen",
        "Zwei, drei Aspekte",
        "Beispiel oder Erfahrung",
        "Fazit"
       ],
       "mustervortrag": "Das Thema meiner Präsentation ist die Wohnungsnot in Universitätsstädten. Ich möchte dabei vor allem der Frage nachgehen, warum es für Studenten so schwierig geworden ist, ein bezahlbares Zimmer zu finden, und was man dagegen tun könnte. Ich beginne mit den Ursachen, stelle dann zwei mögliche Lösungen vor und schließe mit meiner persönlichen Einschätzung. Zunächst zu den Ursachen. In den letzten Jahren ist die Zahl der Studenten in vielen Städten deutlich gestiegen, während kaum neue Wohnheime gebaut wurden. Gleichzeitig ziehen immer mehr Menschen in die Städte, weil es dort Arbeitsplätze gibt. Studenten konkurrieren also mit Berufstätigen, Familien und Senioren um denselben knappen Wohnraum. Da sie meist wenig Geld haben, ziehen sie dabei oft den Kürzeren. Hinzu kommt, dass in beliebten Vierteln viele Wohnungen in teure möblierte Apartments umgewandelt werden, die nur auf Zeit vermietet werden. Für Studenten aus dem Ausland ist die Lage oft besonders schwierig, weil sie keine Bürgschaft vorweisen können und die Wohnung meist aus der Ferne suchen müssen. Welche Lösungen gibt es? Der erste und naheliegendste Ansatz ist der Bau neuer Wohnheime. Studentenwerke könnten damit günstigen Wohnraum anbieten, allerdings dauert die Planung oft viele Jahre, und geeignete Grundstücke sind knapp. Ein zweiter, etwas ungewöhnlicherer Ansatz ist das sogenannte Wohnen für Hilfe. Dabei wohnen Studenten bei älteren Menschen und zahlen statt Miete mit Unterstützung im Alltag, zum Beispiel beim Einkaufen oder im Garten. Davon profitieren beide Seiten: Die Studenten sparen Geld, und die Senioren sind weniger allein. Genau dieses Modell hat übrigens eine Freundin von mir ausprobiert. Sie hat zu Beginn ihres Studiums monatelang vergeblich nach einem Zimmer gesucht und schon überlegt, das Studium abzubrechen. Dann hat sie über ein Projekt der Stadt eine ältere Dame kennengelernt, die allein in einem großen Haus lebte. Anfangs war es für beide eine Umstellung, schließlich kannten sie sich gar nicht. Aber inzwischen kochen sie oft zusammen, und meine Freundin sagt, sie habe dort fast eine zweite Familie gefunden. Nun zu meinem Fazit. Ich bin davon überzeugt, dass es keine einfache Lösung für die Wohnungsnot gibt. Neue Wohnheime sind unverzichtbar, aber sie allein werden das Problem nicht schnell genug lösen. Deshalb halte ich es für sinnvoll, zusätzlich auf kreative Modelle wie Wohnen für Hilfe zu setzen und diese stärker bekannt zu machen. Letztlich ist das aber auch eine politische Frage, denn wenn Wohnen zu teuer wird, entscheidet am Ende der Geldbeutel darüber, wer studieren kann. Vielen Dank, dass du mir zugehört hast.",
       "frage": "Siehst du bei dem Modell Wohnen für Hilfe auch Risiken?",
       "musterantwort": "Ja, durchaus. Es kann zum Beispiel schwierig werden, wenn die Erwartungen nicht klar abgesprochen sind und plötzlich viel mehr Hilfe verlangt wird als vereinbart. Deshalb finde ich es wichtig, dass eine Vermittlungsstelle die Beteiligten begleitet und bei Konflikten unterstützt."
      }
     ]
    },
    {
     "id": "tc1m1r4",
     "thema": "Warum Menschen Prüfungen aufschieben",
     "karten": [
      {
       "kopf": "Teil 1A · Präsentation",
       "kopfb": "Themenkarte",
       "auftrag": [
        "Halte eine Präsentation von etwa drei Minuten — an dein Gegenüber gerichtet.",
        "Beantworte danach die Anschlussfrage."
       ],
       "id": "tc1a4",
       "thema": "Warum Menschen Prüfungen aufschieben",
       "punkte": [
        "Thema nennen und eingrenzen",
        "Zwei, drei Aspekte",
        "Beispiel oder Erfahrung",
        "Fazit"
       ],
       "mustervortrag": "Kennst du das Gefühl, dass eine wichtige Hausarbeit ansteht und man plötzlich das dringende Bedürfnis hat, die Küche aufzuräumen? Genau darum geht es in meiner Präsentation, nämlich um das Aufschieben, in der Psychologie Prokrastination genannt. Ich möchte mich dabei auf zwei Fragen konzentrieren: Warum schieben wir wichtige Aufgaben auf, und was hilft dagegen? Zum Schluss erzähle ich noch kurz, was bei mir funktioniert hat. Zunächst zur ersten Frage. Lange Zeit dachte man, Menschen schöben Aufgaben einfach aus Faulheit oder schlechtem Zeitmanagement auf. Neuere psychologische Forschung zeigt aber ein anderes Bild. Aufschieben ist vor allem ein Problem der Gefühlsregulation. Wenn eine Aufgabe unangenehme Gefühle auslöst, zum Beispiel Angst zu versagen, Langeweile oder Überforderung, dann weichen wir aus, um uns kurzfristig besser zu fühlen. Das Problem ist nur, dass die Aufgabe dadurch nicht verschwindet. Im Gegenteil: Je näher die Frist rückt, desto größer werden Stress und schlechtes Gewissen, und das macht den Einstieg noch schwerer. Man gerät also in eine Art Teufelskreis. Was kann man nun dagegen tun? Ein bewährter Ansatz besteht darin, große Aufgaben in sehr kleine Schritte zu zerlegen. Statt sich vorzunehmen, heute die Hausarbeit zu schreiben, nimmt man sich vor, zwanzig Minuten lang Notizen zu einem einzigen Kapitel zu machen. Ein kleiner Schritt löst viel weniger Widerstand aus. Ein zweiter Ansatz betrifft den Umgang mit sich selbst. Untersuchungen deuten darauf hin, dass Menschen, die sich nach einem Rückschlag nicht selbst beschimpfen, sondern freundlich mit sich umgehen, beim nächsten Mal weniger aufschieben. Das klingt vielleicht überraschend, ist aber logisch, wenn man bedenkt, dass negative Gefühle das Aufschieben ja gerade auslösen. Ich selbst war lange eine echte Meisterin im Aufschieben. Bei meiner Bachelorarbeit habe ich wochenlang Literatur gesammelt, ohne einen einzigen Satz zu schreiben, weil ich Angst hatte, dass der Text nicht gut genug wird. Geholfen hat mir schließlich eine Schreibgruppe an meiner Hochschule. Wir haben uns jeden Morgen getroffen und gemeinsam eine Stunde lang still geschrieben. Allein die Tatsache, dass andere neben mir saßen und arbeiteten, hat mir enorm geholfen anzufangen. Mein Fazit lautet daher: Aufschieben ist kein Charakterfehler, sondern eine verständliche, wenn auch ungünstige Strategie im Umgang mit unangenehmen Gefühlen. Wer das versteht, kann gezielter dagegen vorgehen, etwa mit kleinen Schritten, mehr Nachsicht mit sich selbst und der Unterstützung durch andere. Damit bin ich am Ende und bedanke mich für deine Aufmerksamkeit.",
       "frage": "Glaubst du, dass Hochschulen mehr tun sollten, um Studenten beim Aufschieben zu helfen?",
       "musterantwort": "Ja, ich denke schon. Schreibgruppen oder kurze Workshops zum Zeitmanagement kosten nicht viel, könnten aber vielen helfen. Wichtig wäre allerdings, dass diese Angebote bekannter werden, denn viele wissen gar nicht, dass es sie gibt."
      }
     ]
    }
   ]
  },
  {
   "nr": 2,
   "art": "rueckmeldung",
   "name": "Zusammenfassung und Anschlussfragen",
   "kurz": "Die Präsentation des anderen zusammenfassen, nachfragen, antworten",
   "was": "Du fasst zusammen, was dein Gegenüber präsentiert hat, stellst eine Anschlussfrage und beantwortest eine Frage zu deiner eigenen Präsentation.",
   "tipp": "„Wenn ich dich richtig verstanden habe, …\" — und dann nur das Wichtigste, in eigenen Worten.",
   "zeichen": "🔁",
   "farbe": "gold",
   "punkte": 4,
   "runden": [
    {
     "id": "tc1m2r1",
     "thema": "Schlaf und Lernerfolg",
     "karten": [
      {
       "kopf": "Teil 1B · Zusammenfassung und Anschlussfragen",
       "auftrag": [
        "Fasse die Präsentation deines Gegenübers in eigenen Worten zusammen.",
        "Stell eine Anschlussfrage.",
        "Beantworte eine Frage zu deiner eigenen Präsentation."
       ],
       "id": "tc1b1",
       "thema": "Schlaf und Lernerfolg",
       "gehoert": "Dein Partner hat über den Zusammenhang zwischen Schlaf und Lernen gesprochen. Er erklärte, dass das Gehirn im Schlaf Gelerntes festigt und dass Studenten vor Prüfungen oft zu wenig schlafen. Als Beispiel nannte er eine Prüfungsphase, in der er nachts gelernt und trotzdem schlecht abgeschnitten hatte. Sein Fazit: Ausreichend Schlaf sei keine verlorene Lernzeit, sondern Teil des Lernens. Hochschulen sollten Prüfungen deshalb nicht zu früh am Morgen ansetzen.",
       "punkte": [
        "Zusammenfassen",
        "Nachfragen",
        "Antworten"
       ],
       "musterrueckmeldung": "Wenn ich dich richtig verstanden habe, ging es dir vor allem um die Frage, wie Schlaf und Lernerfolg zusammenhängen. Du hast erklärt, dass das Gehirn im Schlaf neues Wissen verarbeitet und speichert. Am Beispiel deiner eigenen Prüfungsphase, in der du nachts gelernt hast, hast du gezeigt, dass Nachtlernen eher schadet. Dein Fazit war, dass Schlaf zum Lernen dazugehört und Prüfungen nicht zu früh beginnen sollten.",
       "musterfrage": "Du hast vorgeschlagen, Prüfungen später anzusetzen. Glaubst du, dass das an Hochschulen organisatorisch überhaupt umsetzbar wäre?",
       "musterantwort": "Das ist eine gute Frage, die ich in meiner Präsentation nur angerissen habe. Ich denke, es wäre durchaus möglich, zumindest die schriftlichen Prüfungen erst am späten Vormittag zu beginnen. Viele Räume sind morgens ohnehin nicht voll ausgelastet."
      }
     ]
    },
    {
     "id": "tc1m2r2",
     "thema": "Plastik im Meer",
     "karten": [
      {
       "kopf": "Teil 1B · Zusammenfassung und Anschlussfragen",
       "auftrag": [
        "Fasse die Präsentation deines Gegenübers in eigenen Worten zusammen.",
        "Stell eine Anschlussfrage.",
        "Beantworte eine Frage zu deiner eigenen Präsentation."
       ],
       "id": "tc1b2",
       "thema": "Plastik im Meer",
       "gehoert": "Deine Partnerin hat über Plastikmüll in den Ozeanen gesprochen. Sie erläuterte, dass ein großer Teil des Mülls über Flüsse ins Meer gelangt und sich dort in winzige Teilchen zersetzt, die in die Nahrungskette geraten. Als Lösungen nannte sie weniger Einwegverpackungen und bessere Abfallsysteme in Ländern ohne geregelte Müllabfuhr. Abschließend betonte sie, dass Aufräumaktionen an Stränden zwar sichtbar, aber weniger wirksam seien als Vermeidung.",
       "punkte": [
        "Zusammenfassen",
        "Nachfragen",
        "Antworten"
       ],
       "musterrueckmeldung": "Du hast dich in deiner Präsentation mit dem Problem des Plastikmülls im Meer beschäftigt. Zuerst hast du erklärt, wie der Müll vor allem über Flüsse ins Meer kommt und dort in kleinste Teilchen zerfällt, die dann in die Nahrungskette gelangen. Als Lösungsansätze hast du die Vermeidung von Einwegverpackungen und den Aufbau von Abfallsystemen genannt. Dein zentrales Argument war, dass Vermeidung mehr bringt als das Aufräumen von Stränden.",
       "musterfrage": "Du sagst, Aufräumaktionen seien weniger wirksam. Haben sie deiner Meinung nach trotzdem einen Sinn?",
       "musterantwort": "Ja, auf jeden Fall. Sie verändern zwar die Menge des Mülls im Meer kaum, aber sie machen das Problem sichtbar und sensibilisieren die Menschen. Wer einmal einen Strand voller Plastik gesehen hat, kauft danach vielleicht bewusster ein."
      }
     ]
    },
    {
     "id": "tc1m2r3",
     "thema": "Arbeiten im Homeoffice",
     "karten": [
      {
       "kopf": "Teil 1B · Zusammenfassung und Anschlussfragen",
       "auftrag": [
        "Fasse die Präsentation deines Gegenübers in eigenen Worten zusammen.",
        "Stell eine Anschlussfrage.",
        "Beantworte eine Frage zu deiner eigenen Präsentation."
       ],
       "id": "tc1b3",
       "thema": "Arbeiten im Homeoffice",
       "gehoert": "Dein Partner hat über das Arbeiten von zu Hause gesprochen. Er nannte als Vorteile die gesparte Pendelzeit und mehr Flexibilität für Familien. Als Nachteile beschrieb er die Vermischung von Arbeit und Freizeit sowie den fehlenden Austausch mit Kollegen. Aus seiner Zeit als Werkstudent erzählte er, dass er sich zu Hause oft isoliert gefühlt habe. Sein Fazit war ein Modell mit zwei bis drei Bürotagen pro Woche.",
       "punkte": [
        "Zusammenfassen",
        "Nachfragen",
        "Antworten"
       ],
       "musterrueckmeldung": "In deiner Präsentation ging es um die Vor- und Nachteile des Homeoffice. Positiv hast du vor allem die gesparte Fahrtzeit und die bessere Vereinbarkeit mit der Familie hervorgehoben. Kritisch hast du gesehen, dass die Grenze zwischen Arbeit und Freizeit verschwimmt und der Kontakt zu Kollegen fehlt. Mit deiner Erfahrung als Werkstudent hast du das veranschaulicht. Am Ende hast du dich für eine Mischform ausgesprochen.",
       "musterfrage": "Mich würde noch interessieren, wie du in deiner Zeit als Werkstudent mit dem Gefühl der Isolation umgegangen bist.",
       "musterantwort": "Anfangs eigentlich gar nicht, ich habe es einfach hingenommen. Später habe ich mich mit zwei Kollegen zu festen Zeiten virtuell zum Kaffee verabredet. Das klingt banal, hat aber erstaunlich viel geholfen."
      }
     ]
    },
    {
     "id": "tc1m2r4",
     "thema": "Fleischkonsum und Klima",
     "karten": [
      {
       "kopf": "Teil 1B · Zusammenfassung und Anschlussfragen",
       "auftrag": [
        "Fasse die Präsentation deines Gegenübers in eigenen Worten zusammen.",
        "Stell eine Anschlussfrage.",
        "Beantworte eine Frage zu deiner eigenen Präsentation."
       ],
       "id": "tc1b4",
       "thema": "Fleischkonsum und Klima",
       "gehoert": "Deine Partnerin hat über den Zusammenhang zwischen Fleischkonsum und Klimawandel gesprochen. Sie erklärte, dass die Tierhaltung viel Fläche und Wasser verbrauche und große Mengen Treibhausgase verursache. Besonders Rindfleisch schneide dabei schlecht ab. Anschließend stellte sie zwei Ansätze vor: eine höhere Steuer auf Fleisch und bessere Information in Schulen. Ihr Fazit: Verbote lehne sie ab, aber der Preis solle die tatsächlichen Umweltkosten widerspiegeln.",
       "punkte": [
        "Zusammenfassen",
        "Nachfragen",
        "Antworten"
       ],
       "musterrueckmeldung": "Wenn ich dich richtig verstanden habe, war deine Leitfrage, welchen Beitrag unsere Ernährung zum Klimawandel leistet. Du hast erklärt, dass die Tierhaltung besonders viele Ressourcen verbraucht und viele Treibhausgase erzeugt. Rindfleisch hast du dabei besonders hervorgehoben. Dann hast du zwei Lösungen vorgestellt, nämlich eine Fleischsteuer und mehr Aufklärung in Schulen. Verbote lehnst du ab, du möchtest aber, dass der Preis die echten Umweltkosten zeigt.",
       "musterfrage": "Eine Fleischsteuer würde Menschen mit wenig Geld besonders treffen. Wie siehst du das?",
       "musterantwort": "Diesen Einwand höre ich oft, und er ist berechtigt. Deshalb fände ich es wichtig, die Einnahmen zurückzugeben, zum Beispiel indem man gleichzeitig Obst und Gemüse günstiger macht. So würde eine gesunde Ernährung für alle bezahlbarer."
      }
     ]
    }
   ]
  },
  {
   "nr": 3,
   "art": "erzaehlen",
   "name": "Diskussion über ein Zitat",
   "kurz": "Zitat erläutern, Stellung nehmen, reagieren",
   "was": "Ihr bekommt ein Zitat. Du erläuterst es, nimmst Stellung, begründest mit Beispielen und reagierst auf dein Gegenüber.",
   "tipp": "Erst erklären, was gemeint ist — dann Position. Und Einwände nicht abwehren, sondern aufnehmen: „Das ist ein berechtigter Punkt, allerdings …\"",
   "zeichen": "💬",
   "farbe": "rot",
   "punkte": 6,
   "runden": [
    {
     "id": "tc1m3r1",
     "thema": "Wissen und Bildung",
     "karten": [
      {
       "kopf": "Teil 2 · Diskussion",
       "kopfb": "Zitat",
       "auftrag": [
        "Erläutere das Zitat: Was ist gemeint?",
        "Nimm Stellung und begründe mit Gründen oder Beispielen.",
        "Reagiere auf den Einwand deines Gegenübers."
       ],
       "id": "tc1z1",
       "thema": "Wissen und Bildung",
       "quelle": "Zitat von Helmut Grabowski, Gymnasiallehrer",
       "text": "„Bildung ist nicht das, was man gelernt hat, sondern das, was übrig bleibt, wenn man vergessen hat, was man gelernt hat.\"",
       "punkte": [
        "Zitat erläutern",
        "Stellung nehmen",
        "Begründen mit Beispiel",
        "Auf den Partner eingehen"
       ],
       "mustervortrag": "Mit dieser Aussage möchte der Autor zum Ausdruck bringen, dass Bildung mehr ist als die Summe einzelner Fakten. Die meisten Details, die wir in der Schule oder im Studium auswendig lernen, vergessen wir nach einiger Zeit wieder. Was jedoch bleibt, sind Fähigkeiten und Haltungen, zum Beispiel die Fähigkeit, kritisch zu denken, Zusammenhänge zu erkennen oder sich neues Wissen selbstständig anzueignen. Im Grunde teile ich diese Ansicht. Wenn ich an meine Schulzeit denke, kann ich mich an kaum eine Formel aus dem Chemieunterricht erinnern. Was mir aber geblieben ist, ist die Erfahrung, wie man ein Experiment plant und auswertet. Diese Art zu denken hilft mir heute noch im Studium. Ich kann zum Beispiel Studien viel besser beurteilen, weil ich weiß, worauf man bei einem Versuchsaufbau achten muss. Allerdings würde ich das Zitat nicht so verstehen, dass Faktenwissen unwichtig ist. Man kann nicht kritisch über etwas nachdenken, von dem man gar nichts weiß. Ohne eine gewisse Wissensbasis bleibt auch die beste Denkfähigkeit leer. Für mich gehört also beides zusammen. Gute Bildung bedeutet für mich deshalb, sich solides Wissen anzueignen und gleichzeitig zu lernen, wie man dieses Wissen einordnet, hinterfragt und auf neue Situationen überträgt. Wie siehst du das? Hast du ähnliche Erfahrungen gemacht?",
       "frage": "Aber heute kann man doch alles im Internet nachschlagen. Ist Faktenwissen da nicht wirklich überflüssig geworden?",
       "musterantwort": "Diesen Einwand kann ich nachvollziehen. Trotzdem glaube ich, dass man ein Grundwissen braucht, um überhaupt die richtigen Fragen zu stellen und um falsche Informationen im Internet zu erkennen. Wer nichts weiß, kann auch nichts prüfen."
      }
     ]
    },
    {
     "id": "tc1m3r2",
     "thema": "Fortschritt und Technik",
     "karten": [
      {
       "kopf": "Teil 2 · Diskussion",
       "kopfb": "Zitat",
       "auftrag": [
        "Erläutere das Zitat: Was ist gemeint?",
        "Nimm Stellung und begründe mit Gründen oder Beispielen.",
        "Reagiere auf den Einwand deines Gegenübers."
       ],
       "id": "tc1z2",
       "thema": "Fortschritt und Technik",
       "quelle": "Zitat von Dr. Lorenz Achterberg, Technikhistoriker",
       "text": "„Jede neue Technik wird zuerst als Bedrohung gefürchtet und später als Selbstverständlichkeit vergessen.\"",
       "punkte": [
        "Zitat erläutern",
        "Stellung nehmen",
        "Begründen mit Beispiel",
        "Auf den Partner eingehen"
       ],
       "mustervortrag": "Der Technikhistoriker spielt mit dieser Aussage darauf an, dass Menschen auf technische Neuerungen häufig mit Angst reagieren. Mit der Zeit gewöhnen sie sich jedoch daran, und irgendwann kann sich niemand mehr vorstellen, ohne diese Technik zu leben. Die anfänglichen Sorgen werden dann vergessen. Ich halte diese Beobachtung für historisch gut belegt. Als die Eisenbahn aufkam, glaubten manche Ärzte, die hohe Geschwindigkeit sei für den menschlichen Körper gefährlich. Ähnliche Ängste gab es beim Telefon oder später beim Internet. Heute nutzen wir all das völlig selbstverständlich. Insofern zeigt das Zitat sehr gut, dass sich unsere Wahrnehmung von Technik mit der Zeit grundlegend verändert und dass vieles, was uns heute beunruhigt, in einigen Jahrzehnten ganz normal sein wird. Dennoch sehe ich das Zitat etwas differenzierter. Es klingt so, als seien alle Ängste unbegründet gewesen. Das stimmt aber nicht immer. Bei manchen Technologien, zum Beispiel bei sozialen Netzwerken, haben sich bestimmte Befürchtungen durchaus bestätigt, etwa was die Verbreitung von Falschinformationen betrifft. Man darf deshalb nicht außer Acht lassen, dass eine gesunde Skepsis auch dazu beitragen kann, Technik besser zu regeln. Wer jede Sorge als bloße Technikfeindlichkeit abtut, verschenkt die Chance, Fehlentwicklungen frühzeitig zu erkennen. Was meinst du dazu?",
       "frage": "Ich finde aber, dass zu viel Skepsis den Fortschritt bremst. Andere Länder sind da viel mutiger.",
       "musterantwort": "Da ist etwas dran, aber ich sehe das etwas differenzierter. Mut ist wichtig, doch wenn man Risiken von Anfang an mitdenkt, spart man sich später oft teure Korrekturen. Skepsis und Fortschritt müssen sich also nicht ausschließen."
      }
     ]
    },
    {
     "id": "tc1m3r3",
     "thema": "Erfolg und Scheitern",
     "karten": [
      {
       "kopf": "Teil 2 · Diskussion",
       "kopfb": "Zitat",
       "auftrag": [
        "Erläutere das Zitat: Was ist gemeint?",
        "Nimm Stellung und begründe mit Gründen oder Beispielen.",
        "Reagiere auf den Einwand deines Gegenübers."
       ],
       "id": "tc1z3",
       "thema": "Erfolg und Scheitern",
       "quelle": "Zitat von Miriam Ostendorf, Unternehmerin",
       "text": "„Wer nie gescheitert ist, hat nie etwas wirklich Neues versucht.\"",
       "punkte": [
        "Zitat erläutern",
        "Stellung nehmen",
        "Begründen mit Beispiel",
        "Auf den Partner eingehen"
       ],
       "mustervortrag": "Mit diesem Satz will die Unternehmerin sagen, dass Scheitern ein natürlicher Bestandteil von Innovation ist. Wer immer nur auf bekannten Wegen bleibt, geht zwar kein Risiko ein, wird aber auch nichts Bahnbrechendes schaffen. Neues entsteht dagegen fast immer über Versuch und Irrtum. Diese Ansicht teile ich weitgehend. In der Wissenschaft zum Beispiel scheitern die meisten Experimente, und gerade daraus lernt man oft am meisten. Auch in meinem eigenen Leben habe ich erfahren, dass Rückschläge wertvoll sein können. Meine erste Bewerbung für ein Stipendium wurde abgelehnt. Ich habe mir daraufhin Rückmeldung geholt, mein Motivationsschreiben komplett überarbeitet und wurde im Jahr darauf angenommen. Ohne diese Ablehnung hätte ich wohl nie so gründlich darüber nachgedacht, was ich eigentlich erreichen möchte. Allerdings möchte ich zu bedenken geben, dass Scheitern nicht für alle gleich leicht ist. Wer finanziell abgesichert ist, kann sich einen Misserfolg eher leisten als jemand, der dabei seine Existenz riskiert. Insofern ist der Satz zwar richtig, aber er blendet aus, dass nicht jeder die gleichen Voraussetzungen hat, um zu scheitern. Damit mehr Menschen etwas Neues wagen, braucht es deshalb auch Unterstützung, etwa durch Stipendien oder Beratungsangebote für Gründer. Wie siehst du das?",
       "frage": "In Deutschland wird Scheitern aber doch eher bestraft als belohnt, oder?",
       "musterantwort": "Das ist mein Eindruck auch, zumindest im Vergleich zu manchen anderen Ländern. Allerdings habe ich das Gefühl, dass sich das langsam ändert, gerade bei jungen Unternehmern. Hochschulen könnten dazu beitragen, indem sie offener über gescheiterte Projekte sprechen."
      }
     ]
    },
    {
     "id": "tc1m3r4",
     "thema": "Natur und Stadt",
     "karten": [
      {
       "kopf": "Teil 2 · Diskussion",
       "kopfb": "Zitat",
       "auftrag": [
        "Erläutere das Zitat: Was ist gemeint?",
        "Nimm Stellung und begründe mit Gründen oder Beispielen.",
        "Reagiere auf den Einwand deines Gegenübers."
       ],
       "id": "tc1z4",
       "thema": "Natur und Stadt",
       "quelle": "Zitat von Dr. Ronja Feldhaus, Stadtplanerin",
       "text": "„Die Städte der Zukunft müssen nicht größer werden, sondern grüner. Jeder Baum ist eine Klimaanlage, die keinen Strom braucht.\"",
       "punkte": [
        "Zitat erläutern",
        "Stellung nehmen",
        "Begründen mit Beispiel",
        "Auf den Partner eingehen"
       ],
       "mustervortrag": "Die Stadtplanerin bringt mit diesem Zitat zum Ausdruck, dass sich Stadtentwicklung künftig weniger auf Wachstum und mehr auf Lebensqualität konzentrieren sollte. Mit dem Bild der Klimaanlage meint sie, dass Bäume im Sommer Schatten spenden und die Luft durch Verdunstung kühlen, und zwar ganz ohne Energieverbrauch. Ich stimme dieser Aussage grundsätzlich zu. Gerade in den immer heißeren Sommern merkt man, wie unerträglich dicht bebaute Viertel ohne Grün werden können. Das zeigt sich etwa daran, dass es in meiner Stadt zwischen dem Zentrum und einem großen Park an heißen Tagen mehrere Grad Temperaturunterschied gibt. Vor allem für ältere Menschen und kleine Kinder ist das ein echtes Gesundheitsrisiko. Außerdem nehmen Grünflächen bei Starkregen Wasser auf und verringern so die Gefahr von Überschwemmungen. Allerdings halte ich die Gegenüberstellung von größer und grüner für etwas zu einfach. Viele Städte wachsen nun einmal, weil Menschen dort Arbeit finden, und sie brauchen dringend neue Wohnungen. Die eigentliche Herausforderung besteht also darin, beides zu verbinden, zum Beispiel durch begrünte Dächer und Fassaden oder dadurch, dass man Parkplätze in Grünflächen umwandelt. Auch kleine Maßnahmen können dabei viel bewirken. Wie siehst du das? Gibt es in deiner Stadt gute Beispiele?",
       "frage": "Aber wenn man Parkplätze in Grünflächen umwandelt, ärgern sich doch alle Autofahrer.",
       "musterantwort": "Das stimmt, am Anfang gibt es oft Widerstand. Ich würde aber zu bedenken geben, dass sich die Lebensqualität in solchen Straßen meist so deutlich verbessert, dass auch Skeptiker ihre Meinung ändern. Wichtig ist, dass man die Anwohner früh in die Planung einbezieht."
      }
     ]
    }
   ]
  }
 ],
 "laeufe": [
  {
   "id": "tc1ml1",
   "titel": "Prüfungslauf 1",
   "minuten": 16,
   "teile": [
    {
     "nr": 1,
     "art": "erzaehlen",
     "thema": "Mehrsprachig aufwachsen",
     "karten": [
      {
       "kopf": "Teil 1A · Präsentation",
       "kopfb": "Themenkarte",
       "auftrag": [
        "Halte eine Präsentation von etwa drei Minuten — an dein Gegenüber gerichtet.",
        "Beantworte danach die Anschlussfrage."
       ],
       "id": "tc1a5",
       "thema": "Mehrsprachig aufwachsen",
       "punkte": [
        "Thema nennen und eingrenzen",
        "Zwei, drei Aspekte",
        "Beispiel oder Erfahrung",
        "Fazit"
       ],
       "mustervortrag": "In meiner Präsentation geht es um Kinder, die mit mehreren Sprachen aufwachsen. Konkret möchte ich der Frage nachgehen, ob Mehrsprachigkeit für Kinder eher eine Belastung oder eher ein Vorteil ist. Dazu stelle ich zunächst ein verbreitetes Vorurteil vor, gehe dann auf den heutigen Forschungsstand ein und berichte zum Schluss aus meiner eigenen Familie. Beginnen möchte ich mit dem Vorurteil. Lange Zeit wurde Eltern geraten, mit ihren Kindern nur eine Sprache zu sprechen, und zwar die Landessprache. Man befürchtete, dass mehrere Sprachen die Kinder verwirren, dass sie die Sprachen vermischen und am Ende keine richtig beherrschen. Diese Sorge hört man bis heute, zum Beispiel in Kindergärten oder sogar in Arztpraxen. Viele Eltern, die selbst eine andere Muttersprache haben, sind dadurch verunsichert und sprechen mit ihren Kindern dann eine Sprache, die sie selbst nur unvollkommen beherrschen. Das Kind bekommt so ausgerechnet in der Familiensprache ein weniger reiches Vorbild. Die Forschung zeichnet inzwischen allerdings ein deutlich anderes Bild. Zwar stimmt es, dass mehrsprachige Kinder manchmal etwas später sprechen oder in einer Sprache einen kleineren Wortschatz haben als einsprachige Kinder. Rechnet man jedoch alle Sprachen zusammen, kennen sie in der Regel genauso viele Wörter oder sogar mehr. Auch das Vermischen der Sprachen ist kein Zeichen von Verwirrung, sondern ein ganz normaler Teil der Entwicklung. Erwachsene Mehrsprachige tun das übrigens auch, wenn sie wissen, dass ihr Gegenüber beide Sprachen versteht. Darüber hinaus gibt es Hinweise darauf, dass Mehrsprachigkeit bestimmte geistige Fähigkeiten fördert, etwa die Fähigkeit, flexibel zwischen Aufgaben zu wechseln. Allerdings ist dieser Punkt in der Forschung noch umstritten. Klar ist dagegen, dass Kinder eine Sprache nur dann gut lernen, wenn sie ihr oft und in vielen Situationen begegnen. Ich selbst bin mit zwei Sprachen aufgewachsen. Meine Mutter hat mit mir immer Portugiesisch gesprochen, mein Vater Deutsch. In der Grundschule habe ich mich manchmal geschämt, wenn meine Mutter mich vor anderen auf Portugiesisch angesprochen hat, und habe dann demonstrativ auf Deutsch geantwortet. Heute bin ich ihr unglaublich dankbar, dass sie trotzdem konsequent geblieben ist. Ohne diese zweite Sprache hätte ich weder mein Auslandssemester in Brasilien machen können noch hätte ich einen so engen Kontakt zu meinen Großeltern. Zusammenfassend kann ich sagen, dass Mehrsprachigkeit nach heutigem Wissensstand keine Belastung, sondern eine große Chance ist. Wichtig ist allerdings, dass Familien dabei unterstützt werden und nicht das Gefühl bekommen, ihre Herkunftssprache sei weniger wert als die Landessprache. Hier sehe ich vor allem Kindergärten und Schulen in der Verantwortung. Das war mein Beitrag, vielen Dank.",
       "frage": "Was genau könnten Kindergärten tun, um mehrsprachige Familien zu unterstützen?",
       "musterantwort": "Zum Beispiel könnten sie Bücher in verschiedenen Sprachen anbieten oder Eltern einladen, in ihrer Herkunftssprache vorzulesen. Vor allem aber sollten die Erzieher den Eltern vermitteln, dass ihre Sprache etwas Wertvolles ist und kein Hindernis."
      }
     ]
    },
    {
     "nr": 2,
     "art": "rueckmeldung",
     "thema": "Ehrenamt in Sportvereinen",
     "karten": [
      {
       "kopf": "Teil 1B · Zusammenfassung und Anschlussfragen",
       "auftrag": [
        "Fasse die Präsentation deines Gegenübers in eigenen Worten zusammen.",
        "Stell eine Anschlussfrage.",
        "Beantworte eine Frage zu deiner eigenen Präsentation."
       ],
       "id": "tc1b5",
       "thema": "Ehrenamt in Sportvereinen",
       "gehoert": "Dein Partner hat über die Lage von Sportvereinen gesprochen. Er erläuterte, dass viele Vereine kaum noch Menschen finden, die ehrenamtlich Training oder Vorstandsarbeit übernehmen. Als Gründe nannte er Zeitmangel und steigende bürokratische Anforderungen. Auch die Erwartungen der Eltern seien gestiegen. Als Beispiel beschrieb er seinen Fußballverein, der eine Jugendmannschaft abmelden musste. Sein Fazit: Vereine bräuchten weniger Bürokratie und mehr Anerkennung für Ehrenamtliche.",
       "punkte": [
        "Zusammenfassen",
        "Nachfragen",
        "Antworten"
       ],
       "musterrueckmeldung": "Du hast dich in deiner Präsentation mit dem Problem beschäftigt, dass Sportvereinen immer mehr Ehrenamtliche fehlen. Als Ursachen hast du vor allem den Zeitmangel vieler Menschen und die wachsende Bürokratie genannt. Am Beispiel deines eigenen Fußballvereins hast du gezeigt, welche konkreten Folgen das hat, denn dort musste sogar eine Jugendmannschaft abgemeldet werden. Abschließend hast du gefordert, die Vereine zu entlasten und das Ehrenamt stärker zu würdigen.",
       "musterfrage": "Du sprichst von mehr Anerkennung. Was könnte das konkret bedeuten?",
       "musterantwort": "Ich denke da an ganz unterschiedliche Dinge, zum Beispiel an Ermäßigungen für Schwimmbäder oder Museen oder an eine Bescheinigung, die man bei Bewerbungen vorlegen kann. Wichtig ist aber auch einfach, dass die Arbeit öffentlich gesehen und wertgeschätzt wird."
      }
     ]
    },
    {
     "nr": 3,
     "art": "erzaehlen",
     "thema": "Arbeit und Sinn",
     "karten": [
      {
       "kopf": "Teil 2 · Diskussion",
       "kopfb": "Zitat",
       "auftrag": [
        "Erläutere das Zitat: Was ist gemeint?",
        "Nimm Stellung und begründe mit Gründen oder Beispielen.",
        "Reagiere auf den Einwand deines Gegenübers."
       ],
       "id": "tc1z5",
       "thema": "Arbeit und Sinn",
       "quelle": "Zitat von Prof. Benedikt Raschke, Arbeitssoziologe",
       "text": "„Die junge Generation will nicht weniger arbeiten. Sie will nur nicht mehr für etwas arbeiten, das sie nicht für sinnvoll hält.\"",
       "punkte": [
        "Zitat erläutern",
        "Stellung nehmen",
        "Begründen mit Beispiel",
        "Auf den Partner eingehen"
       ],
       "mustervortrag": "Mit dieser Aussage wendet sich der Arbeitssoziologe gegen das verbreitete Vorurteil, junge Menschen seien heute weniger leistungsbereit. Seiner Ansicht nach geht es ihnen nicht um weniger Arbeit, sondern darum, dass ihre Tätigkeit einen erkennbaren Sinn hat. Wer diesen Sinn nicht sieht, ist allerdings weniger bereit, sich voll einzusetzen. Ich halte diese Deutung in vielen Fällen für zutreffend. In meinem Freundeskreis kenne ich mehrere Leute, die ein gut bezahltes Angebot abgelehnt haben, weil sie die Arbeit für sinnlos hielten. Eine Freundin arbeitet stattdessen für weniger Geld bei einer Umweltorganisation und macht dort regelmäßig Überstunden, ohne sich zu beschweren. Ihr ist es einfach wichtig, abends das Gefühl zu haben, etwas Sinnvolles für die Gesellschaft geleistet zu haben. Trotzdem würde ich das Zitat nicht verallgemeinern. Erstens kann sich nicht jeder leisten, seinen Arbeitsplatz nach dem Sinn auszuwählen. Zweitens ist der Wunsch nach sinnvoller Arbeit keineswegs neu. Auch frühere Generationen wollten etwas Sinnvolles tun, sie hatten aber oft weniger Wahlmöglichkeiten. Insofern würde ich eher sagen, dass sich die Bedingungen geändert haben und nicht die Menschen. Unternehmen, die junge Fachkräfte gewinnen wollen, sollten daher deutlich machen, welchen Beitrag ihre Arbeit leistet. Was denkst du darüber?",
       "frage": "Aber Unternehmen klagen doch, dass junge Bewerber vor allem Teilzeit wollen. Passt das zu dem Zitat?",
       "musterantwort": "Auf den ersten Blick nicht, das gebe ich zu. Man darf allerdings nicht außer Acht lassen, dass viele Teilzeit wollen, um sich um Familie zu kümmern oder sich weiterzubilden. Das heißt nicht automatisch, dass sie weniger engagiert sind."
      }
     ]
    }
   ]
  },
  {
   "id": "tc1ml2",
   "titel": "Prüfungslauf 2",
   "minuten": 16,
   "teile": [
    {
     "nr": 1,
     "art": "erzaehlen",
     "thema": "Bürgerwissenschaft: Laien forschen mit",
     "karten": [
      {
       "kopf": "Teil 1A · Präsentation",
       "kopfb": "Themenkarte",
       "auftrag": [
        "Halte eine Präsentation von etwa drei Minuten — an dein Gegenüber gerichtet.",
        "Beantworte danach die Anschlussfrage."
       ],
       "id": "tc1a6",
       "thema": "Bürgerwissenschaft: Laien forschen mit",
       "punkte": [
        "Thema nennen und eingrenzen",
        "Zwei, drei Aspekte",
        "Beispiel oder Erfahrung",
        "Fazit"
       ],
       "mustervortrag": "Wenn wir an Wissenschaft denken, stellen wir uns meist Forscher in weißen Kitteln in einem Labor vor. In meiner Präsentation möchte ich dir ein Phänomen vorstellen, das dieses Bild ein wenig verändert, nämlich die sogenannte Bürgerwissenschaft. Gemeint sind Forschungsprojekte, an denen Laien aktiv mitwirken. Ich erkläre zunächst, wie solche Projekte funktionieren, nenne dann Chancen und Grenzen und erzähle zum Schluss von einem Projekt, an dem ich selbst teilgenommen habe. Zunächst also zur Funktionsweise. Bei Projekten der Bürgerwissenschaft sammeln oder analysieren Freiwillige Daten, die Forscher allein nie in dieser Menge erheben könnten. Das können zum Beispiel Vogelzählungen im eigenen Garten sein, Messungen der Wasserqualität in Bächen oder das Auswerten von Tausenden Fotos aus dem Weltraum am Computer. Die Teilnehmer erhalten dafür eine kurze Einführung und laden ihre Ergebnisse meist über eine Internetseite oder eine App hoch. Manche Projekte gehen sogar noch weiter: Dort entwickeln Bürger gemeinsam mit Forschern die Fragestellung, etwa wenn Anwohner wissen wollen, wie stark die Luft in ihrer Straße belastet ist. Die Chancen liegen auf der Hand. Erstens entstehen riesige Datensätze, die über große Gebiete und lange Zeiträume reichen. Zweitens kommen Bürger auf diese Weise direkt mit Wissenschaft in Kontakt und verstehen besser, wie Forschung eigentlich funktioniert. Gerade in Zeiten, in denen wissenschaftliche Erkenntnisse oft angezweifelt werden, halte ich das für sehr wertvoll. Allerdings gibt es auch Grenzen. Die Qualität der Daten kann schwanken, wenn Laien zum Beispiel Vogelarten verwechseln. Forscher müssen deshalb Methoden entwickeln, um Fehler zu erkennen und herauszufiltern. Außerdem stellt sich die Frage, ob die Freiwilligen nicht manchmal als kostenlose Arbeitskräfte benutzt werden, ohne dass sie an den Ergebnissen beteiligt werden. Hier sind meiner Meinung nach die Forscher in der Pflicht, transparent zu sein. Ich selbst habe vor zwei Jahren an einem Projekt zur Erfassung von Insekten teilgenommen. Wir sollten einmal pro Woche eine Viertelstunde lang alle Insekten notieren, die auf einer bestimmten Blühfläche landeten. Ehrlich gesagt hatte ich vorher kaum Ahnung von Insekten, aber durch die Bestimmungshilfen habe ich unglaublich viel gelernt. Und als später die Ergebnisse veröffentlicht wurden, war es ein tolles Gefühl, einen kleinen Beitrag geleistet zu haben. Mein Fazit lautet daher: Bürgerwissenschaft ersetzt keine professionelle Forschung, kann sie aber sinnvoll ergänzen und gleichzeitig das Vertrauen in die Wissenschaft stärken. Voraussetzung ist, dass die Projekte gut betreut werden und die Teilnehmer erfahren, was mit ihren Daten geschieht. Ich danke dir fürs Zuhören.",
       "frage": "Du hast erwähnt, dass Laien Fehler machen können. Wie gehen Forscher konkret damit um?",
       "musterantwort": "Soweit ich weiß, lässt man zum Beispiel dieselben Daten von mehreren Personen unabhängig voneinander auswerten und vergleicht die Ergebnisse. Außerdem werden auffällige Meldungen von Fachleuten noch einmal überprüft, bevor sie in die Auswertung eingehen."
      }
     ]
    },
    {
     "nr": 2,
     "art": "rueckmeldung",
     "thema": "Lesen auf Papier oder am Bildschirm",
     "karten": [
      {
       "kopf": "Teil 1B · Zusammenfassung und Anschlussfragen",
       "auftrag": [
        "Fasse die Präsentation deines Gegenübers in eigenen Worten zusammen.",
        "Stell eine Anschlussfrage.",
        "Beantworte eine Frage zu deiner eigenen Präsentation."
       ],
       "id": "tc1b6",
       "thema": "Lesen auf Papier oder am Bildschirm",
       "gehoert": "Deine Partnerin hat darüber gesprochen, ob man auf Papier oder am Bildschirm besser lernt. Sie berichtete von Untersuchungen, nach denen Menschen längere Sachtexte auf Papier etwas besser verstehen. Gleichzeitig nannte sie Vorteile digitaler Texte, etwa die Suchfunktion und die geringeren Kosten. Sie selbst drucke für Prüfungen wichtige Texte aus. Ihr Fazit: Beide Formen hätten ihren Platz, je nach Ziel des Lesens.",
       "punkte": [
        "Zusammenfassen",
        "Nachfragen",
        "Antworten"
       ],
       "musterrueckmeldung": "In deiner Präsentation ging es um die Frage, ob wir auf Papier oder am Bildschirm besser lesen und lernen. Du hast Untersuchungen erwähnt, wonach längere Texte auf Papier etwas besser verstanden werden. Andererseits hast du die praktischen Vorteile digitaler Texte betont. Persönlich druckst du wichtige Texte für Prüfungen lieber aus, um sie gründlich durchzuarbeiten. Dein Ergebnis war, dass es auf den Zweck des Lesens ankommt.",
       "musterfrage": "Woran liegt es deiner Meinung nach, dass man Texte auf Papier besser versteht?",
       "musterantwort": "Ganz sicher weiß man das wohl noch nicht. Eine Erklärung ist, dass man am Bildschirm eher überfliegt, weil man das vom schnellen Lesen im Internet gewohnt ist. Außerdem kann man sich auf Papier besser merken, wo etwas steht."
      }
     ]
    },
    {
     "nr": 3,
     "art": "erzaehlen",
     "thema": "Gesundheit und Verantwortung",
     "karten": [
      {
       "kopf": "Teil 2 · Diskussion",
       "kopfb": "Zitat",
       "auftrag": [
        "Erläutere das Zitat: Was ist gemeint?",
        "Nimm Stellung und begründe mit Gründen oder Beispielen.",
        "Reagiere auf den Einwand deines Gegenübers."
       ],
       "id": "tc1z6",
       "thema": "Gesundheit und Verantwortung",
       "quelle": "Zitat von Dr. Paula Wendt, Ärztin",
       "text": "„Gesundheit ist keine reine Privatsache. Wer krank wird, belastet die Gemeinschaft, deshalb trägt jeder Einzelne Verantwortung für seinen Lebensstil.\"",
       "punkte": [
        "Zitat erläutern",
        "Stellung nehmen",
        "Begründen mit Beispiel",
        "Auf den Partner eingehen"
       ],
       "mustervortrag": "Die Ärztin möchte mit dieser Aussage darauf hinweisen, dass die Kosten von Krankheiten in einem solidarischen Gesundheitssystem von allen getragen werden. Daraus leitet sie ab, dass jeder durch einen gesunden Lebensstil dazu beitragen sollte, diese Belastung möglichst gering zu halten. In einem Punkt stimme ich ihr zu. Natürlich hat jeder Mensch einen gewissen Einfluss auf seine Gesundheit, etwa durch Bewegung, Ernährung oder den Verzicht auf das Rauchen. Und es ist sicher sinnvoll, Menschen dazu zu ermutigen. Auch Prävention in Schulen und am Arbeitsplatz halte ich für sehr wichtig. Im Großen und Ganzen sehe ich das Zitat jedoch kritisch. Viele Krankheiten haben gar nichts mit dem Lebensstil zu tun, sondern sind genetisch bedingt oder hängen mit den Arbeits- und Wohnbedingungen zusammen. Wer zum Beispiel im Schichtdienst arbeitet oder an einer stark befahrenen Straße wohnt, kann sich nur begrenzt schützen. Wenn man nun von individueller Verantwortung spricht, besteht die Gefahr, dass Kranke zusätzlich mit Schuldgefühlen belastet werden. Manche gehen dann vielleicht sogar später zum Arzt, weil sie sich schämen. Gerade das widerspricht aber dem Gedanken einer solidarischen Gemeinschaft. Wie siehst du das? Findest du, dass der Lebensstil zum Beispiel bei den Krankenkassenbeiträgen eine Rolle spielen sollte?",
       "frage": "Ich finde schon. Wer raucht, sollte mehr zahlen als jemand, der Sport treibt.",
       "musterantwort": "Ich verstehe den Gedanken, aber ich sehe hier ein praktisches Problem: Wie will man das kontrollieren, ohne sehr tief in die Privatsphäre einzugreifen? Sinnvoller fände ich es, gesunde Angebote wie Sportkurse finanziell zu fördern, statt Menschen zu bestrafen."
      }
     ]
    }
   ]
  }
 ]
};
