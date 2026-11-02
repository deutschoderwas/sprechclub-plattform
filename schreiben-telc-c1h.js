/* ============================================================
   deutschoderwas club — SCHREIBEN telc Deutsch C1 Hochschule

   Aufbau nach dem offiziellen telc-Format (telc „Tipps zur
   Prüfungsvorbereitung Deutsch C1 Hochschule", geprüft 02.11.2026).
   Alle Texte und Aufgaben eigene, nur das Format ist nachgebaut.
   Erzeugt aus scratchpad/telcc1 mit bau.js.
   ============================================================ */

window.SCHREIBEN_TELC_C1H = {
 "niveau": "telcC1H",
 "pruefung": "telc Deutsch C1 Hochschule",
 "minuten": 70,
 "punkte": 48,
 "intro": "Bei telc C1 Hochschule wählst du eines von zwei Themen und schreibst in siebzig Minuten einen Text von etwa 350 Wörtern — zum Beispiel einen Seminarbeitrag zu zwei Zitaten: Positionen darlegen, abwägen, eigene Erfahrung, Fazit. Bewertet wird nach vier Kriterien: Aufgabengerechtheit, Korrektheit, Repertoire, kommunikative Gestaltung. telc nennt keine Punkte je Kriterium — hier gewichten wir alle vier gleich, als Übungsschätzung.",
 "stufen": [
  {
   "nr": 1,
   "titel": "Der Aufbau",
   "zeichen": "🏛️",
   "was": "Einleitung, Hauptteil, Schluss — und Positionen sauber wiedergeben."
  },
  {
   "nr": 2,
   "titel": "Argumentieren",
   "zeichen": "⚖️",
   "was": "Abwägen und akademisch formulieren."
  },
  {
   "nr": 3,
   "titel": "Die Themen",
   "zeichen": "✍️",
   "was": "Je Runde zwei Themen zur Wahl — wie in der Prüfung."
  },
  {
   "nr": 4,
   "titel": "Die Prüfung",
   "zeichen": "⏱️",
   "was": "Ein Text, siebzig Minuten mit Uhr."
  }
 ],
 "bloecke": [
  {
   "id": "tc1s1",
   "stufe": 1,
   "titel": "Einleitung, Hauptteil, Schluss",
   "kurz": "Ein Seminartext braucht einen sichtbaren Bauplan",
   "ziel": "Nach diesem Block gliederst du einen C1-Text so, dass der Leser sofort erkennt, wo du gerade stehst.",
   "zeichen": "🏛️",
   "farbe": "turq",
   "aufgaben": [
    {
     "art": "wahl",
     "frage": "Welcher Einstieg passt am besten zu einem Seminartext über Studiengebühren?",
     "opt": [
      "Studiengebühren sind ein Thema.",
      "Kaum eine hochschulpolitische Frage wird so leidenschaftlich diskutiert wie die, ob Studenten für ihre Ausbildung zahlen sollen.",
      "Ich finde Studiengebühren schlecht und erkläre jetzt warum."
     ],
     "loesung": 1,
     "erklaerung": "Ein guter Einstieg führt zum Thema hin und zeigt seine Relevanz, bevor du Stellung beziehst."
    },
    {
     "art": "wahl",
     "frage": "Was gehört NICHT in die Einleitung eines Seminartextes?",
     "opt": [
      "Die Hinführung zum Thema",
      "Ein kurzer Überblick über den Aufbau",
      "Die ausführliche Begründung deiner eigenen Meinung"
     ],
     "loesung": 2,
     "erklaerung": "Die ausführliche Begründung gehört in den Hauptteil; die Einleitung bereitet nur vor."
    },
    {
     "art": "wahl",
     "frage": "Welcher Satz kündigt den Aufbau des Textes an?",
     "opt": [
      "Im Folgenden werden zunächst die beiden Positionen dargestellt, bevor ich sie gegeneinander abwäge.",
      "Jetzt kommt der Text.",
      "Am Ende sage ich, was ich denke."
     ],
     "loesung": 0,
     "erklaerung": "„Im Folgenden … zunächst … bevor\" gibt dem Text eine klare, akademische Gliederung."
    },
    {
     "art": "wahl",
     "frage": "Wie viele Absätze hat ein gut gegliederter Text von rund dreihundertfünfzig Wörtern meistens?",
     "opt": [
      "Einen einzigen langen Absatz",
      "Etwa vier bis sechs Absätze",
      "Für jeden Satz einen eigenen Absatz"
     ],
     "loesung": 1,
     "erklaerung": "Einleitung, zwei bis vier Absätze im Hauptteil und ein Schluss — so bleibt der Text übersichtlich."
    },
    {
     "art": "wahl",
     "frage": "Womit beginnt ein neuer Absatz im Hauptteil am besten?",
     "opt": [
      "Mit einem Leitsatz, der den Gedanken des Absatzes ankündigt",
      "Mit einem Beispiel ohne Zusammenhang",
      "Mit „Und\""
     ],
     "loesung": 0,
     "erklaerung": "Ein Leitsatz am Absatzanfang zeigt, worum es jetzt geht — der Rest des Absatzes führt ihn aus."
    },
    {
     "art": "wahl",
     "frage": "Welcher Satz leitet den Schluss ein?",
     "opt": [
      "Außerdem ist noch wichtig, dass …",
      "Zusammenfassend lässt sich festhalten, dass …",
      "Ein weiteres Beispiel ist …"
     ],
     "loesung": 1,
     "erklaerung": "„Zusammenfassend lässt sich festhalten\" signalisiert eindeutig: Jetzt kommt das Ergebnis."
    },
    {
     "art": "wahl",
     "frage": "Was gehört NICHT in den Schluss?",
     "opt": [
      "Ein Fazit aus der Abwägung",
      "Ein ganz neues Argument, das bisher nicht vorkam",
      "Ein Ausblick oder eine Empfehlung"
     ],
     "loesung": 1,
     "erklaerung": "Neue Argumente gehören in den Hauptteil. Im Schluss bündelst du nur noch."
    },
    {
     "art": "wahl",
     "frage": "Welche Überleitung verbindet zwei Absätze im Hauptteil am elegantesten?",
     "opt": [
      "Nachdem nun die Vorteile beleuchtet wurden, sollen im Folgenden die Schattenseiten betrachtet werden.",
      "Jetzt die Nachteile.",
      "Und dann gibt es auch noch Nachteile."
     ],
     "loesung": 0,
     "erklaerung": "Die Überleitung blickt kurz zurück und kündigt dann den nächsten Schritt an."
    },
    {
     "art": "ordnen",
     "frage": "Bau den Satz für den Übergang zum Schluss.",
     "teile": [
      "Abschließend",
      "möchte",
      "ich",
      "die",
      "wichtigsten",
      "Gedanken",
      "kurz",
      "zusammenfassen."
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
     "erklaerung": "„Abschließend\" steht auf Position eins, deshalb folgt sofort das Verb „möchte\"."
    },
    {
     "art": "ordnen",
     "frage": "Bau den Satz, der die Einleitung abschließt.",
     "teile": [
      "Im",
      "Folgenden",
      "werden",
      "beide",
      "Positionen",
      "zunächst",
      "dargestellt",
      "und",
      "anschließend",
      "bewertet."
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
     "erklaerung": "Unpersönliches Passiv mit „werden\" plus Partizip: typisch für die Gliederungsankündigung."
    }
   ]
  },
  {
   "id": "tc1s2",
   "stufe": 1,
   "titel": "Positionen wiedergeben: Zitate einbinden",
   "kurz": "Laut, Konjunktiv I und „X vertritt die Auffassung …\"",
   "ziel": "Nach diesem Block gibst du fremde Meinungen korrekt und distanziert wieder, ohne sie einfach abzuschreiben.",
   "zeichen": "💬",
   "farbe": "gold",
   "aufgaben": [
    {
     "art": "wahl",
     "frage": "Welche Form gibt das Zitat „Gruppenarbeit fördert die Teamfähigkeit.\" korrekt in indirekter Rede wieder?",
     "opt": [
      "Sie sagt, Gruppenarbeit fördert die Teamfähigkeit.",
      "Sie betont, Gruppenarbeit fördere die Teamfähigkeit.",
      "Sie betont, Gruppenarbeit würde die Teamfähigkeit fördern haben."
     ],
     "loesung": 1,
     "erklaerung": "In der indirekten Rede steht Konjunktiv I: „fördere\"."
    },
    {
     "art": "wahl",
     "frage": "Wie lautet der Konjunktiv I von „sie haben\" in der indirekten Rede?",
     "opt": [
      "sie haben",
      "sie hätten",
      "sie habe"
     ],
     "loesung": 1,
     "erklaerung": "„Sie haben\" ist im Konjunktiv I identisch mit dem Indikativ — deshalb weichst du auf Konjunktiv II „hätten\" aus."
    },
    {
     "art": "wahl",
     "frage": "Welche Präposition steht richtig?",
     "opt": [
      "Laut dem Professor Brenner ist Anwesenheit entscheidend.",
      "Laut Professor Brenner ist Anwesenheit entscheidend.",
      "Laut von Professor Brenner ist Anwesenheit entscheidend."
     ],
     "loesung": 1,
     "erklaerung": "„Laut\" steht vor Namen ohne Artikel: „laut Professor Brenner\"."
    },
    {
     "art": "wahl",
     "frage": "Welche Formulierung gibt eine Position am neutralsten wieder?",
     "opt": [
      "Herr Kaltenbach vertritt die Auffassung, dass Studiengebühren die Qualität der Lehre verbessern.",
      "Herr Kaltenbach glaubt komischerweise, dass Studiengebühren gut sind.",
      "Herr Kaltenbach hat leider unrecht."
     ],
     "loesung": 0,
     "erklaerung": "„Die Auffassung vertreten\" gibt die Position wieder, ohne sie schon zu bewerten."
    },
    {
     "art": "wahl",
     "frage": "Welches Verb drückt aus, dass jemand eine Behauptung ablehnt?",
     "opt": [
      "einräumen",
      "bestreiten",
      "hervorheben"
     ],
     "loesung": 1,
     "erklaerung": "„Bestreiten\" heißt: etwas für falsch erklären. „Einräumen\" heißt zugeben, „hervorheben\" betonen."
    },
    {
     "art": "wahl",
     "frage": "Welches Verb passt, wenn jemand einen Gegenpunkt zugibt?",
     "opt": [
      "Sie räumt ein, dass Praktika das Studium verlängern können.",
      "Sie fordert, dass Praktika das Studium verlängern können.",
      "Sie leugnet, dass Praktika das Studium verlängern können."
     ],
     "loesung": 0,
     "erklaerung": "„Einräumen\" zeigt: Die Person gibt zu, dass die Gegenseite in einem Punkt recht hat."
    },
    {
     "art": "wahl",
     "frage": "Welcher Satz verbindet beide Zitate am besten?",
     "opt": [
      "Zitat eins sagt das, Zitat zwei sagt was anderes.",
      "Während Frau Okafor vor allem die Chancen betont, warnt Herr Lindqvist vor den Risiken.",
      "Frau Okafor und Herr Lindqvist reden über das Thema."
     ],
     "loesung": 1,
     "erklaerung": "„Während … warnt\" stellt die Positionen in einem Satz gegenüber — knapp und präzise."
    },
    {
     "art": "wahl",
     "frage": "Welche Wendung zeigt, dass du dich auf eine Quelle stützt?",
     "opt": [
      "Ich denke, dass …",
      "Wie Dozentin Marek zutreffend bemerkt, …",
      "Jeder weiß, dass …"
     ],
     "loesung": 1,
     "erklaerung": "„Wie X bemerkt\" bindet die Quelle ein und zeigt gleichzeitig deine Einschätzung („zutreffend\")."
    },
    {
     "art": "ordnen",
     "frage": "Bau den Satz zur Wiedergabe einer Position.",
     "teile": [
      "Der",
      "Bildungsforscher",
      "vertritt",
      "die",
      "Auffassung,",
      "dass",
      "Noten",
      "wenig",
      "über",
      "den",
      "Lernerfolg",
      "aussagten."
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
     "erklaerung": "„Aussagten\" ist Konjunktiv II als Ersatz, weil „aussagen\" im Konjunktiv I Plural mit dem Indikativ zusammenfällt."
    },
    {
     "art": "ordnen",
     "frage": "Bau den Satz mit „laut\".",
     "teile": [
      "Laut",
      "Frau",
      "Dr.",
      "Haberland",
      "sei",
      "das",
      "Auslandssemester",
      "eine",
      "einmalige",
      "Chance."
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
     "erklaerung": "„Sei\" ist Konjunktiv I von „sein\" und macht deutlich, dass es sich um eine fremde Aussage handelt."
    }
   ]
  },
  {
   "id": "tc1s3",
   "stufe": 2,
   "titel": "Argumentieren und abwägen",
   "kurz": "Zwar … jedoch, wohingegen, insofern — Argumente gewichten",
   "ziel": "Nach diesem Block stellst du Argumente nicht nur nebeneinander, sondern gewichtest sie und verknüpfst sie logisch.",
   "zeichen": "⚖️",
   "farbe": "rot",
   "aufgaben": [
    {
     "art": "wahl",
     "frage": "Welcher Satz verwendet „zwar … jedoch\" korrekt?",
     "opt": [
      "Zwar sind Online-Seminare flexibel, jedoch fehlt oft der direkte Austausch.",
      "Zwar Online-Seminare sind flexibel, jedoch der direkte Austausch fehlt oft.",
      "Online-Seminare zwar sind flexibel, jedoch fehlt oft der direkte Austausch."
     ],
     "loesung": 0,
     "erklaerung": "„Zwar\" steht auf Position eins oder im Mittelfeld; nach „zwar\" auf Position eins folgt direkt das Verb."
    },
    {
     "art": "wahl",
     "frage": "Welcher Konnektor drückt einen Gegensatz zwischen zwei Gruppen aus?",
     "opt": [
      "Studenten aus Akademikerfamilien kennen die Abläufe, wohingegen Erstakademiker sich oft allein orientieren müssen.",
      "Studenten aus Akademikerfamilien kennen die Abläufe, sodass Erstakademiker sich oft allein orientieren müssen.",
      "Studenten aus Akademikerfamilien kennen die Abläufe, damit Erstakademiker sich oft allein orientieren müssen."
     ],
     "loesung": 0,
     "erklaerung": "„Wohingegen\" stellt zwei Seiten gegenüber; „sodass\" drückt Folge, „damit\" Zweck aus."
    },
    {
     "art": "wahl",
     "frage": "Was bedeutet „insofern\" in diesem Satz? — „Das Argument überzeugt insofern, als es sich auf konkrete Daten stützt.\"",
     "opt": [
      "in dem Maße, wie / weil",
      "trotzdem",
      "im Gegensatz dazu"
     ],
     "loesung": 0,
     "erklaerung": "„Insofern … als\" schränkt ein und begründet zugleich: Das Argument überzeugt genau in diesem Punkt."
    },
    {
     "art": "wahl",
     "frage": "Welche Formulierung gewichtet ein Argument am deutlichsten?",
     "opt": [
      "Ein Argument ist auch, dass …",
      "Schwerer wiegt meines Erachtens jedoch, dass …",
      "Dann gibt es noch, dass …"
     ],
     "loesung": 1,
     "erklaerung": "„Schwerer wiegt\" macht klar, dass du Argumente nicht nur aufzählst, sondern gegeneinander abwägst."
    },
    {
     "art": "wahl",
     "frage": "Welcher Satz räumt ein Gegenargument ein und entkräftet es?",
     "opt": [
      "Dass Praktika Zeit kosten, ist nicht von der Hand zu weisen; dennoch zahlt sich diese Investition später meist aus.",
      "Praktika kosten Zeit. Das ist schlecht.",
      "Praktika kosten keine Zeit."
     ],
     "loesung": 0,
     "erklaerung": "Erst einräumen („nicht von der Hand zu weisen\"), dann entkräften („dennoch\") — das ist echte Abwägung."
    },
    {
     "art": "wahl",
     "frage": "Welcher Konnektor passt? — „Die Note allein ist wenig aussagekräftig, ___ sie nicht erklärt, wie man sich verbessern kann.\"",
     "opt": [
      "zumal",
      "obwohl",
      "sofern"
     ],
     "loesung": 0,
     "erklaerung": "„Zumal\" fügt einen zusätzlichen, verstärkenden Grund hinzu."
    },
    {
     "art": "wahl",
     "frage": "Welcher Satz drückt eine Bedingung aus?",
     "opt": [
      "Elitehochschulen sind sinnvoll, sofern der Zugang nicht vom Einkommen der Eltern abhängt.",
      "Elitehochschulen sind sinnvoll, weshalb der Zugang nicht vom Einkommen der Eltern abhängt.",
      "Elitehochschulen sind sinnvoll, wohingegen der Zugang nicht vom Einkommen der Eltern abhängt."
     ],
     "loesung": 0,
     "erklaerung": "„Sofern\" bedeutet „unter der Bedingung, dass\"."
    },
    {
     "art": "wahl",
     "frage": "Welche Wendung leitet ein Gegenargument ein?",
     "opt": [
      "Dem lässt sich entgegenhalten, dass …",
      "Das bestätigt, dass …",
      "Folglich …"
     ],
     "loesung": 0,
     "erklaerung": "„Dem lässt sich entgegenhalten\" kündigt die Gegenposition an — sachlich und akademisch."
    },
    {
     "art": "ordnen",
     "frage": "Bau den abwägenden Satz.",
     "teile": [
      "Zwar",
      "spart",
      "die",
      "Online-Lehre",
      "Fahrtzeit,",
      "jedoch",
      "leidet",
      "darunter",
      "häufig",
      "die",
      "Motivation."
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
     "erklaerung": "Nach „jedoch\" auf Position eins folgt direkt das Verb „leidet\"."
    },
    {
     "art": "ordnen",
     "frage": "Bau den Satz mit „insofern\".",
     "teile": [
      "Die",
      "Kritik",
      "ist",
      "insofern",
      "berechtigt,",
      "als",
      "viele",
      "Gruppen",
      "ungleich",
      "belastet",
      "werden."
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
     "erklaerung": "„Insofern … als\" ist ein zweiteiliger Konnektor; der „als\"-Satz ist ein Nebensatz mit Verb am Ende."
    }
   ]
  },
  {
   "id": "tc1s4",
   "stufe": 2,
   "titel": "Akademischer Stil: Nominalstil, unpersönliche Formulierungen",
   "kurz": "Weniger „ich finde\", mehr „es lässt sich feststellen\"",
   "ziel": "Nach diesem Block formulierst du sachlich, verdichtet und unpersönlich, ohne dass dein Text steif oder unverständlich wird.",
   "zeichen": "🎓",
   "farbe": "lila",
   "aufgaben": [
    {
     "art": "wahl",
     "frage": "Welche Nominalisierung entspricht „weil die Studiengebühren erhöht wurden\"?",
     "opt": [
      "wegen der Erhöhung der Studiengebühren",
      "wegen erhöhen von Studiengebühren",
      "weil Erhöhung Studiengebühren"
     ],
     "loesung": 0,
     "erklaerung": "Aus dem Verb „erhöhen\" wird „die Erhöhung\"; das Objekt folgt im Genitiv."
    },
    {
     "art": "wahl",
     "frage": "Welcher Satz ist unpersönlich formuliert?",
     "opt": [
      "Ich habe herausgefunden, dass viele Studenten arbeiten.",
      "Es zeigt sich, dass viele Studenten neben dem Studium arbeiten.",
      "Man sieht ja, dass viele arbeiten müssen, oder?"
     ],
     "loesung": 1,
     "erklaerung": "„Es zeigt sich\" ist eine typisch unpersönliche Wendung in Seminartexten."
    },
    {
     "art": "wahl",
     "frage": "Welche Form mit „lassen\" ersetzt „Das kann man nicht bestreiten.\"?",
     "opt": [
      "Das lässt sich nicht bestreiten.",
      "Das lässt man nicht bestreiten.",
      "Das ist nicht bestreiten lassen."
     ],
     "loesung": 0,
     "erklaerung": "„Sich lassen\" plus Infinitiv ist eine elegante Passiv-Alternative mit Modalbedeutung."
    },
    {
     "art": "wahl",
     "frage": "Was bedeutet „Die Frage ist kaum zu beantworten.\"?",
     "opt": [
      "Die Frage muss beantwortet werden.",
      "Die Frage kann kaum beantwortet werden.",
      "Die Frage darf nicht beantwortet werden."
     ],
     "loesung": 1,
     "erklaerung": "„Sein\" plus „zu\" plus Infinitiv entspricht hier „können\" im Passiv."
    },
    {
     "art": "wahl",
     "frage": "Welches Partizipialattribut ist richtig gebildet?",
     "opt": [
      "die von vielen Studentenn kritisierte Anwesenheitspflicht",
      "die von vielen Studentenn kritisierende Anwesenheitspflicht",
      "die kritisiert von vielen Studentenn Anwesenheitspflicht"
     ],
     "loesung": 0,
     "erklaerung": "Partizip zwei („kritisiert\") hat passive Bedeutung: Die Pflicht wird kritisiert."
    },
    {
     "art": "wahl",
     "frage": "Welche Formulierung ist für einen Seminartext zu umgangssprachlich?",
     "opt": [
      "Dies hat zur Folge, dass …",
      "Das bringt total viel.",
      "Daraus ergibt sich, dass …"
     ],
     "loesung": 1,
     "erklaerung": "„Total viel\" ist gesprochene Alltagssprache; im Seminartext wirkt das unpassend."
    },
    {
     "art": "wahl",
     "frage": "Welche Nominalisierung passt zu „Studenten engagieren sich ehrenamtlich\"?",
     "opt": [
      "das ehrenamtliche Engagement von Studenten",
      "das Engagieren ehrenamtlich von Studentenn",
      "die Ehrenamtlichkeit engagierend"
     ],
     "loesung": 0,
     "erklaerung": "Aus „sich engagieren\" wird „das Engagement\"; „von Studenten\" ersetzt den Genitiv, weil kein Artikel davorsteht."
    },
    {
     "art": "wahl",
     "frage": "Wo ist die eigene Meinung angemessen akademisch formuliert?",
     "opt": [
      "Meines Erachtens überwiegen die Vorteile.",
      "Ich finde das voll gut.",
      "Meiner Meinung nach ist das halt so."
     ],
     "loesung": 0,
     "erklaerung": "„Meines Erachtens\" ist sachlich und zeigt trotzdem klar die eigene Position."
    },
    {
     "art": "ordnen",
     "frage": "Bau den Satz im Nominalstil.",
     "teile": [
      "Die",
      "Einführung",
      "verbindlicher",
      "Praktika",
      "führt",
      "zu",
      "einer",
      "Verlängerung",
      "der",
      "Studienzeit."
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
     "erklaerung": "Zwei Nominalisierungen („Einführung\", „Verlängerung\") verdichten den Gedanken in einem Hauptsatz."
    },
    {
     "art": "ordnen",
     "frage": "Bau den unpersönlichen Satz.",
     "teile": [
      "Es",
      "ist",
      "davon",
      "auszugehen,",
      "dass",
      "sich",
      "diese",
      "Entwicklung",
      "fortsetzt."
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
     "erklaerung": "„Es ist davon auszugehen\" ersetzt „ich glaube\" und klingt sachlich."
    }
   ]
  }
 ],
 "teile": [
  {
   "nr": 1,
   "art": "mitteilung",
   "name": "Seminarbeitrag",
   "kurz": "Zwei Themen zur Wahl, etwa 350 Wörter",
   "was": "In jeder Runde stehen zwei Themen — wie in der Prüfung. Schreib eines oder beide. Zu jedem gibt es einen Mustertext.",
   "tipp": "Plane fünf Minuten: Wer vertritt was? Welche Erfahrung passt? Was ist dein Fazit? Dann erst schreiben.",
   "zeichen": "🎓",
   "farbe": "turq",
   "punkte": 48,
   "runden": [
    {
     "id": "tc1sr1",
     "titel": "Runde 1",
     "aufgaben": [
      {
       "id": "c1sa1",
       "situation": "Im Seminar „Lernen und Lehren an der Hochschule\" sollen Sie einen Diskussionsbeitrag schreiben. Ausgangspunkt sind zwei gegensätzliche Aussagen zur Gruppenarbeit im Studium.",
       "eingang": {
        "von": "Seminar „Lernen und Lehren an der Hochschule\"",
        "betreff": "Gruppenarbeit im Studium",
        "text": "In vielen Studiengängen werden Referate, Hausarbeiten und Projekte inzwischen überwiegend in Gruppen erarbeitet. Befürworter sehen darin eine ideale Vorbereitung auf das Berufsleben, Kritiker bemängeln eine ungerechte Verteilung der Arbeit. Lesen Sie die beiden Aussagen und verfassen Sie einen Text, in dem Sie die Positionen darlegen, Vor- und Nachteile abwägen und eigene Erfahrungen einbringen.\n„Wer im Studium nicht lernt, im Team zu arbeiten, wird später im Beruf scheitern. Gruppenarbeit ist deshalb unverzichtbar.\" (Prof. Henrike Waldmann, Arbeitspsychologin)\n„In fast jeder Gruppe tragen zwei die Last und drei profitieren. Benotet werden am Ende trotzdem alle gleich.\" (Jonas Vierling, Student der Betriebswirtschaft)"
       },
       "sorte": "aufsatz",
       "an": null,
       "punkte": [
        {
         "nr": 1,
         "was": "Positionen darlegen",
         "hinweis": "Geben Sie die beiden Aussagen in eigenen Worten wieder."
        },
        {
         "nr": 2,
         "was": "Vor- und Nachteile",
         "hinweis": "Wägen Sie Chancen und Probleme der Gruppenarbeit gegeneinander ab."
        },
        {
         "nr": 3,
         "was": "Eigene Erfahrung",
         "hinweis": "Berichten Sie von einer eigenen Erfahrung mit Gruppenarbeit."
        },
        {
         "nr": 4,
         "was": "Fazit",
         "hinweis": "Fassen Sie Ihr Ergebnis zusammen und machen Sie einen Vorschlag."
        }
       ],
       "muster": "Kaum eine Arbeitsform hat sich an Hochschulen in den letzten Jahren so stark verbreitet wie die Gruppenarbeit. Ob sie Studenten tatsächlich weiterbringt oder vor allem Frust erzeugt, wird jedoch kontrovers diskutiert. Im Folgenden sollen zwei gegensätzliche Positionen dargestellt und gegeneinander abgewogen werden.\nDie Arbeitspsychologin Henrike Waldmann vertritt die Auffassung, Teamfähigkeit sei eine Schlüsselkompetenz, ohne die man im Beruf scheitere. Gruppenarbeit im Studium hält sie daher für unverzichtbar. Der Student Jonas Vierling hingegen kritisiert, dass die Arbeit in den meisten Gruppen ungleich verteilt sei, die Bewertung aber für alle gleich ausfalle.\nZwar lässt sich kaum bestreiten, dass in nahezu jedem Beruf Zusammenarbeit gefragt ist. Wer schon im Studium lernt, Aufgaben zu verteilen, Konflikte zu lösen und Kompromisse zu schließen, verschafft sich zweifellos einen Vorteil. Hinzu kommt, dass in der Diskussion mit anderen oft Ideen entstehen, auf die man allein nicht gekommen wäre. Schwerer wiegt meines Erachtens jedoch das Problem der Gerechtigkeit. Wenn die Leistung Einzelner in einer gemeinsamen Note verschwindet, sinkt die Motivation gerade bei den Engagierten. Wer weiß, dass er am Ende ohnehin die Hauptlast trägt, verliert schnell die Freude an der gemeinsamen Arbeit. Umgekehrt lernen diejenigen, die sich zurückhalten, gerade das nicht, was Gruppenarbeit eigentlich vermitteln soll, nämlich Verantwortung für ein gemeinsames Ergebnis zu übernehmen.\nDiese Erfahrung habe ich selbst gemacht. In meinem zweiten Semester sollte ich mit vier Kommilitonen ein Marktforschungsprojekt erarbeiten. Zwei Mitglieder erschienen kaum zu den Treffen, sodass die Auswertung letztlich an mir und einer Kommilitonin hängen blieb. Die gute Note erhielten trotzdem alle. Insofern kann ich die Kritik von Herrn Vierling gut nachvollziehen. Allerdings habe ich in einem späteren Seminar auch erlebt, wie produktiv Gruppenarbeit sein kann, wenn die Rollen von Anfang an klar verteilt sind und jeder seinen Beitrag dokumentiert.\nZusammenfassend lässt sich festhalten, dass Gruppenarbeit weder grundsätzlich abzulehnen noch unkritisch zu feiern ist. Entscheidend ist ihre Gestaltung. Sinnvoll wäre es, neben der Gruppennote auch individuelle Leistungen zu bewerten, etwa durch kurze Einzelreflexionen oder eine mündliche Prüfung. Zudem sollten Dozenten die Gruppen in der Anfangsphase begleiten und auf eine faire Rollenverteilung achten. Auf diese Weise ließen sich die Vorteile der Zusammenarbeit nutzen, ohne dass die Gerechtigkeit auf der Strecke bleibt.",
       "woerter": 350,
       "hilfen": [
        "Im Folgenden sollen zwei gegensätzliche Positionen dargestellt werden.",
        "X vertritt die Auffassung, … sei …",
        "Y hingegen kritisiert, dass …",
        "Zwar lässt sich kaum bestreiten, dass …",
        "Schwerer wiegt meines Erachtens jedoch …",
        "Zusammenfassend lässt sich festhalten, dass …"
       ],
       "erklaerung": "Der Text hat eine klare Gliederung: Einleitung, Wiedergabe beider Zitate im Konjunktiv I, Abwägung mit „zwar … jedoch\", eigene Erfahrung und ein Fazit mit konkretem Vorschlag.",
       "rubrik": [
        {
         "t": "Aufgabengerechtheit",
         "h": "Passt der Text zum Auftrag? Sind alle Punkte behandelt, Einleitung, Hauptteil und Schluss erkennbar?"
        },
        {
         "t": "Korrektheit",
         "h": "Grammatik und Rechtschreibung — stören Fehler das Verstehen? Vergleich mit dem Muster."
        },
        {
         "t": "Repertoire",
         "h": "Wie vielfältig und präzise sind Wortschatz und Satzbau? Nominalstil, Konnektoren, Fachwörter."
        },
        {
         "t": "Kommunikative Gestaltung",
         "h": "Ist der Text gut verknüpft, logisch aufgebaut und dem Anlass angemessen?"
        }
       ],
       "max": 48,
       "c1h": true,
       "level": "C1",
       "platzhalter": "Schreib hier deinen Text …"
      },
      {
       "id": "c1sa2",
       "situation": "Für das Seminar „Hochschulpolitik heute\" sollen Sie einen Text zur Anwesenheitspflicht in Lehrveranstaltungen verfassen. Grundlage sind zwei Stellungnahmen aus einer Diskussionsrunde.",
       "eingang": {
        "von": "Seminar „Hochschulpolitik heute\"",
        "betreff": "Anwesenheitspflicht in Lehrveranstaltungen",
        "text": "An vielen Hochschulen wird darüber gestritten, ob Studenten verpflichtet werden sollten, an Seminaren und Vorlesungen regelmäßig teilzunehmen. Einige Hochschulen haben die Pflicht abgeschafft, andere führen sie gerade wieder ein. Stellen Sie die beiden folgenden Positionen dar, diskutieren Sie Vor- und Nachteile und beziehen Sie Ihre eigenen Erfahrungen mit ein.\n„Ein Seminar lebt vom Gespräch. Wer nicht da ist, nimmt den anderen etwas weg.\" (Dr. Matthias Grünberg, Dozent für Soziologie)\n„Erwachsene Menschen sollten selbst entscheiden dürfen, wie sie lernen. Viele müssen nebenbei arbeiten oder Angehörige pflegen.\" (Lea Hoffstetter, Mitglied im Studentenparlament)"
       },
       "sorte": "aufsatz",
       "an": null,
       "punkte": [
        {
         "nr": 1,
         "was": "Positionen darlegen",
         "hinweis": "Geben Sie die Standpunkte von Dr. Grünberg und Frau Hoffstetter wieder."
        },
        {
         "nr": 2,
         "was": "Vor- und Nachteile",
         "hinweis": "Diskutieren Sie, was für und was gegen eine Anwesenheitspflicht spricht."
        },
        {
         "nr": 3,
         "was": "Eigene Erfahrung",
         "hinweis": "Beschreiben Sie, wie Anwesenheit in Ihrem Studium oder Ihrer Ausbildung geregelt war."
        },
        {
         "nr": 4,
         "was": "Fazit",
         "hinweis": "Formulieren Sie ein begründetes Ergebnis."
        }
       ],
       "muster": "Ob Studenten regelmäßig in Lehrveranstaltungen erscheinen müssen, ist eine Frage, an der sich grundsätzliche Vorstellungen vom Studium scheiden. Geht es um die gemeinsame Arbeit im Seminar oder um die Freiheit des Einzelnen? Diese Frage soll im Folgenden anhand zweier Stellungnahmen erörtert werden.\nDer Soziologe Matthias Grünberg betont, ein Seminar lebe vom Gespräch; wer fehle, nehme den anderen etwas weg. Lea Hoffstetter vom Studentenparlament vertritt dagegen die Auffassung, erwachsene Menschen müssten selbst über ihr Lernen entscheiden dürfen, zumal viele neben dem Studium arbeiteten oder Angehörige pflegten.\nFür eine Anwesenheitspflicht spricht zunächst, dass Diskussionen nur dann gelingen, wenn genügend Teilnehmer vorbereitet und anwesend sind. Ein Seminar, in dem jede Woche andere Gesichter sitzen, kann kaum aufeinander aufbauen. Zudem zeigen Untersuchungen immer wieder, dass regelmäßige Teilnahme mit besseren Prüfungsergebnissen einhergeht. Dem lässt sich allerdings entgegenhalten, dass Zwang selten zu echter Beteiligung führt. Wer nur körperlich anwesend ist, trägt zum Gespräch wenig bei. Gravierender ist meines Erachtens, dass eine starre Pflicht gerade diejenigen benachteiligt, die finanziell oder familiär stark belastet sind. Für sie bedeutet jede verpasste Sitzung ein Risiko, den Kurs nicht anerkannt zu bekommen, obwohl sie den Stoff möglicherweise selbstständig erarbeitet haben. Eine Regel, die eigentlich die Qualität der Lehre sichern soll, wird so ungewollt zu einem Instrument der sozialen Auslese.\nIn meinem Bachelorstudium galt in allen Seminaren eine strenge Anwesenheitsliste; mehr als zweimal fehlen durfte man nicht. Da ich damals in einem Café arbeitete, musste ich meine Schichten mehrfach tauschen und stand ständig unter Druck. In meinem jetzigen Studiengang gibt es keine Pflicht, und dennoch sind die Seminare gut besucht, weil die Diskussionen spannend sind und sich die Dozenten auf die Beiträge beziehen. Das zeigt meines Erachtens, dass gute Lehre eine stärkere Anziehungskraft hat als jede Kontrolle.\nZusammenfassend bin ich der Ansicht, dass eine allgemeine Anwesenheitspflicht nicht der richtige Weg ist. Sinnvoller erscheint es, Seminare so zu gestalten, dass die Teilnahme sich lohnt, und für Veranstaltungen, die ohne Anwesenheit nicht funktionieren, wie Laborpraktika, klare Ausnahmen zu formulieren. Auf diese Weise würde man sowohl dem Anspruch an gute Lehre als auch der Lebenswirklichkeit vieler Studenten gerecht.",
       "woerter": 350,
       "hilfen": [
        "An dieser Frage scheiden sich die Geister.",
        "X betont, ein Seminar lebe von …",
        "Y vertritt dagegen die Auffassung, …",
        "Für … spricht zunächst, dass …",
        "Dem lässt sich allerdings entgegenhalten, dass …",
        "Zusammenfassend bin ich der Ansicht, dass …"
       ],
       "erklaerung": "Das Muster gibt beide Zitate im Konjunktiv I wieder („lebe\", „fehle\", „müssten\"), gewichtet die Argumente mit „Gravierender ist meines Erachtens\" und schließt mit einer differenzierten Lösung.",
       "rubrik": [
        {
         "t": "Aufgabengerechtheit",
         "h": "Passt der Text zum Auftrag? Sind alle Punkte behandelt, Einleitung, Hauptteil und Schluss erkennbar?"
        },
        {
         "t": "Korrektheit",
         "h": "Grammatik und Rechtschreibung — stören Fehler das Verstehen? Vergleich mit dem Muster."
        },
        {
         "t": "Repertoire",
         "h": "Wie vielfältig und präzise sind Wortschatz und Satzbau? Nominalstil, Konnektoren, Fachwörter."
        },
        {
         "t": "Kommunikative Gestaltung",
         "h": "Ist der Text gut verknüpft, logisch aufgebaut und dem Anlass angemessen?"
        }
       ],
       "max": 48,
       "c1h": true,
       "level": "C1",
       "platzhalter": "Schreib hier deinen Text …"
      }
     ]
    },
    {
     "id": "tc1sr2",
     "titel": "Runde 2",
     "aufgaben": [
      {
       "id": "c1sa3",
       "situation": "Im Seminar „Bildungsökonomie\" sollen Sie zu der Frage Stellung nehmen, ob Hochschulen Studiengebühren erheben sollten. Ihnen liegen zwei Aussagen vor.",
       "eingang": {
        "von": "Seminar „Bildungsökonomie\"",
        "betreff": "Studiengebühren",
        "text": "In Deutschland ist das Erststudium an staatlichen Hochschulen weitgehend gebührenfrei. Immer wieder wird jedoch vorgeschlagen, Gebühren einzuführen, um die Lehre zu verbessern. Schreiben Sie einen Text, in dem Sie die beiden Positionen wiedergeben, Vor- und Nachteile von Studiengebühren abwägen und Ihre eigenen Erfahrungen einbeziehen.\n„Was nichts kostet, ist nichts wert. Moderate Gebühren würden die Hochschulen finanziell stärken und die Studenten motivieren, zügiger zu studieren.\" (Dr. Konrad Seefeld, Wirtschaftswissenschaftler)\n„Bildung ist ein Grundrecht. Gebühren schrecken genau diejenigen ab, deren Eltern nie studiert haben.\" (Amira Benali, Sozialarbeiterin)"
       },
       "sorte": "aufsatz",
       "an": null,
       "punkte": [
        {
         "nr": 1,
         "was": "Positionen darlegen",
         "hinweis": "Fassen Sie die Aussagen von Dr. Seefeld und Frau Benali zusammen."
        },
        {
         "nr": 2,
         "was": "Vor- und Nachteile",
         "hinweis": "Wägen Sie die Argumente für und gegen Studiengebühren ab."
        },
        {
         "nr": 3,
         "was": "Eigene Erfahrung",
         "hinweis": "Beziehen Sie sich auf die Situation in Ihrem Herkunftsland oder Ihrem Umfeld."
        },
        {
         "nr": 4,
         "was": "Fazit",
         "hinweis": "Ziehen Sie ein Fazit und nehmen Sie klar Stellung."
        }
       ],
       "muster": "Ob ein Studium etwas kosten darf, ist nicht nur eine finanzielle, sondern vor allem eine gesellschaftliche Frage. Denn davon hängt ab, wer überhaupt Zugang zu höherer Bildung erhält. Im Folgenden werden zwei Positionen zu diesem Thema vorgestellt und bewertet.\nDer Wirtschaftswissenschaftler Konrad Seefeld ist der Meinung, was nichts koste, sei nichts wert. Moderate Gebühren würden seiner Ansicht nach die Hochschulen stärken und die Studenten zu einem schnelleren Studium anspornen. Die Sozialarbeiterin Amira Benali hingegen bezeichnet Bildung als Grundrecht und warnt, Gebühren schreckten vor allem junge Menschen aus nichtakademischen Familien ab.\nZugegebenermaßen sind viele Hochschulen chronisch unterfinanziert. Überfüllte Hörsäle und veraltete Bibliotheken sind keine Seltenheit, und zusätzliche Einnahmen könnten hier Abhilfe schaffen. Auch das Argument, dass Menschen eine Leistung höher schätzen, für die sie bezahlen, ist nicht völlig von der Hand zu weisen. Gleichwohl überwiegen meines Erachtens die Nachteile. Selbst geringe Beträge stellen für Familien mit kleinem Einkommen eine Hürde dar, und die Angst vor Schulden kann dazu führen, dass begabte junge Menschen gar nicht erst ein Studium aufnehmen. Damit würde sich die ohnehin bestehende soziale Ungleichheit weiter verschärfen. Hinzu kommt, dass Gebühren den Druck erhöhen, möglichst schnell und zielstrebig zu studieren. Für Umwege, einen Fachwechsel oder ein Engagement außerhalb des Hörsaals bliebe dann kaum noch Raum, obwohl gerade solche Erfahrungen oft besonders prägend sind.\nIn meinem Herkunftsland sind Studiengebühren an fast allen Universitäten üblich. Einige meiner Schulfreunde haben deshalb direkt nach dem Abschluss eine Arbeit angenommen, obwohl sie gern studiert hätten. Andere haben hohe Kredite aufgenommen und zahlen diese noch Jahre nach dem Studium zurück. Als ich nach Deutschland kam, war ich überrascht, wie selbstverständlich hier ein gebührenfreies Studium ist, und habe das als großes Privileg empfunden. Gleichzeitig ist mir aufgefallen, dass die Ausstattung mancher Hochschulen hier deutlich bescheidener ist als in meiner Heimat.\nAbschließend lässt sich festhalten, dass die finanziellen Probleme der Hochschulen zwar real sind, aber nicht auf Kosten der Chancengleichheit gelöst werden sollten. Statt Gebühren von allen zu verlangen, sollte der Staat die Hochschulen ausreichend finanzieren. Allenfalls wären nachgelagerte Beiträge denkbar, die erst ab einem bestimmten Einkommen nach dem Studium fällig werden.",
       "woerter": 350,
       "hilfen": [
        "Davon hängt ab, wer überhaupt Zugang zu … erhält.",
        "X ist der Meinung, … sei …",
        "Y warnt, … schreckten … ab.",
        "Zugegebenermaßen …",
        "Gleichwohl überwiegen meines Erachtens die Nachteile.",
        "Abschließend lässt sich festhalten, dass …"
       ],
       "erklaerung": "Der Text räumt die Argumente der Gegenseite ausdrücklich ein („Zugegebenermaßen\", „nicht von der Hand zu weisen\"), bevor er sie mit „Gleichwohl\" gewichtet. Das Fazit enthält einen eigenen Lösungsvorschlag.",
       "rubrik": [
        {
         "t": "Aufgabengerechtheit",
         "h": "Passt der Text zum Auftrag? Sind alle Punkte behandelt, Einleitung, Hauptteil und Schluss erkennbar?"
        },
        {
         "t": "Korrektheit",
         "h": "Grammatik und Rechtschreibung — stören Fehler das Verstehen? Vergleich mit dem Muster."
        },
        {
         "t": "Repertoire",
         "h": "Wie vielfältig und präzise sind Wortschatz und Satzbau? Nominalstil, Konnektoren, Fachwörter."
        },
        {
         "t": "Kommunikative Gestaltung",
         "h": "Ist der Text gut verknüpft, logisch aufgebaut und dem Anlass angemessen?"
        }
       ],
       "max": 48,
       "c1h": true,
       "level": "C1",
       "platzhalter": "Schreib hier deinen Text …"
      },
      {
       "id": "c1sa4",
       "situation": "Im Seminar „Studium und Beruf\" geht es um die Frage, ob Pflichtpraktika fester Bestandteil jedes Studiengangs sein sollten. Sie sollen einen Diskussionsbeitrag verfassen.",
       "eingang": {
        "von": "Seminar „Studium und Beruf\"",
        "betreff": "Praktika im Studium",
        "text": "Einige Hochschulen schreiben in allen Studiengängen ein mehrmonatiges Praktikum vor, andere überlassen die Entscheidung den Studenten. Befürworter versprechen sich davon einen leichteren Berufseinstieg. Lesen Sie die beiden Aussagen. Stellen Sie die Positionen dar, diskutieren Sie Vor- und Nachteile von Pflichtpraktika und gehen Sie auf eigene Erfahrungen ein.\n„Ein Praktikum zeigt in drei Monaten mehr über die Berufswelt als drei Semester Theorie.\" (Sabine Kortmann, Personalleiterin)\n„Pflichtpraktika sind oft unbezahlt und verlängern das Studium. Davon profitieren vor allem die Unternehmen.\" (Dr. Elias Brandt, Hochschuldozent)"
       },
       "sorte": "aufsatz",
       "an": null,
       "punkte": [
        {
         "nr": 1,
         "was": "Positionen darlegen",
         "hinweis": "Geben Sie wieder, was Frau Kortmann und Dr. Brandt sagen."
        },
        {
         "nr": 2,
         "was": "Vor- und Nachteile",
         "hinweis": "Wägen Sie den Nutzen und die Probleme von Pflichtpraktika ab."
        },
        {
         "nr": 3,
         "was": "Eigene Erfahrung",
         "hinweis": "Berichten Sie von einem Praktikum, das Sie oder jemand aus Ihrem Umfeld gemacht hat."
        },
        {
         "nr": 4,
         "was": "Fazit",
         "hinweis": "Fassen Sie Ihre Position zusammen."
        }
       ],
       "muster": "Die Kluft zwischen Hörsaal und Arbeitswelt wird häufig beklagt. Pflichtpraktika gelten vielen als geeignetes Mittel, um sie zu überbrücken. Inwiefern diese Einschätzung zutrifft, soll im Folgenden anhand zweier Stimmen untersucht werden.\nDie Personalleiterin Sabine Kortmann ist überzeugt, ein Praktikum vermittle in wenigen Monaten mehr über die Berufswelt als mehrere Semester Theorie. Der Hochschuldozent Elias Brandt gibt dagegen zu bedenken, Pflichtpraktika seien häufig unbezahlt, verlängerten das Studium und nützten in erster Linie den Unternehmen.\nUnbestritten ist, dass ein Praktikum Einblicke ermöglicht, die kein Lehrbuch bieten kann. Man lernt Arbeitsabläufe kennen, knüpft Kontakte und überprüft, ob der angestrebte Beruf tatsächlich den eigenen Vorstellungen entspricht. Nicht selten führt ein gutes Praktikum sogar direkt zu einem Arbeitsvertrag. Andererseits ist die Kritik von Herrn Brandt insofern berechtigt, als viele Praktikanten als billige Arbeitskräfte eingesetzt werden und kaum etwas lernen. Hinzu kommt die finanzielle Belastung: Wer drei Monate ohne Gehalt in einer teuren Großstadt arbeitet, braucht entweder Ersparnisse oder wohlhabende Eltern. Damit droht ausgerechnet ein Instrument, das den Berufseinstieg erleichtern soll, die soziale Ungleichheit zu verstärken. Zudem lassen sich Pflichtpraktika nicht in jedem Studiengang sinnvoll unterbringen, ohne dass sich die Studienzeit verlängert.\nIch selbst habe während meines Studiums der Umweltwissenschaften ein Pflichtpraktikum bei einer städtischen Behörde absolviert. Die ersten Wochen bestanden vor allem aus Kopieren und Ablage, was mich ziemlich frustrierte. Erst als ich meine Betreuerin direkt ansprach, durfte ich an einem Projekt zur Luftqualität mitarbeiten. Diese Erfahrung hat mich so begeistert, dass ich meine Abschlussarbeit über genau dieses Thema geschrieben habe. Rückblickend war das Praktikum für mich also ein Gewinn, allerdings vor allem deshalb, weil ich selbst die Initiative ergriffen habe. Kommilitonen, die weniger Glück mit ihrer Betreuung hatten, haben dagegen kaum etwas gelernt.\nAlles in allem halte ich Praktika für eine wertvolle Ergänzung des Studiums. Ob sie verpflichtend sein sollten, hängt jedoch von ihren Bedingungen ab. Hochschulen sollten Mindeststandards festlegen, etwa eine angemessene Vergütung und eine verbindliche Betreuung. Außerdem sollten Studenten die Möglichkeit haben, ungeeignete Praktikumsstellen zu melden. Nur dann wird aus der Pflicht tatsächlich eine Chance und nicht bloß ein zusätzlicher Posten im Lebenslauf.",
       "woerter": 350,
       "hilfen": [
        "Inwiefern diese Einschätzung zutrifft, soll im Folgenden untersucht werden.",
        "X ist überzeugt, … vermittle …",
        "Y gibt dagegen zu bedenken, …",
        "Unbestritten ist, dass …",
        "Die Kritik ist insofern berechtigt, als …",
        "Alles in allem halte ich … für …"
       ],
       "erklaerung": "Das Muster nutzt „insofern … als\" für eine eingeschränkte Zustimmung und verknüpft die eigene Erfahrung direkt mit der Abwägung. Das Fazit macht die Zustimmung von Bedingungen abhängig.",
       "rubrik": [
        {
         "t": "Aufgabengerechtheit",
         "h": "Passt der Text zum Auftrag? Sind alle Punkte behandelt, Einleitung, Hauptteil und Schluss erkennbar?"
        },
        {
         "t": "Korrektheit",
         "h": "Grammatik und Rechtschreibung — stören Fehler das Verstehen? Vergleich mit dem Muster."
        },
        {
         "t": "Repertoire",
         "h": "Wie vielfältig und präzise sind Wortschatz und Satzbau? Nominalstil, Konnektoren, Fachwörter."
        },
        {
         "t": "Kommunikative Gestaltung",
         "h": "Ist der Text gut verknüpft, logisch aufgebaut und dem Anlass angemessen?"
        }
       ],
       "max": 48,
       "c1h": true,
       "level": "C1",
       "platzhalter": "Schreib hier deinen Text …"
      }
     ]
    },
    {
     "id": "tc1sr3",
     "titel": "Runde 3",
     "aufgaben": [
      {
       "id": "c1sa5",
       "situation": "Im Seminar „Wissenschaftliches Arbeiten\" wird diskutiert, ob und wie Studenten Programme mit künstlicher Intelligenz beim Schreiben von Hausarbeiten nutzen dürfen. Verfassen Sie einen Diskussionsbeitrag.",
       "eingang": {
        "von": "Seminar „Wissenschaftliches Arbeiten\"",
        "betreff": "Künstliche Intelligenz beim Schreiben",
        "text": "Textgeneratoren auf der Basis künstlicher Intelligenz können inzwischen in Sekunden Zusammenfassungen, Gliederungen und ganze Absätze erstellen. Hochschulen reagieren sehr unterschiedlich: von vollständigen Verboten bis zur ausdrücklichen Erlaubnis. Stellen Sie die beiden Positionen dar, wägen Sie ab und bringen Sie eigene Erfahrungen ein.\n„Wer seine Hausarbeit von einer Maschine schreiben lässt, lernt nicht zu denken. Solche Programme gehören aus dem Studium verbannt.\" (Prof. Dorothea Lenz, Germanistin)\n„Künstliche Intelligenz ist ein Werkzeug wie früher der Taschenrechner. Wir sollten lernen, sie verantwortungsvoll zu nutzen, statt sie zu verbieten.\" (Malik Osei, Informatikstudent)"
       },
       "sorte": "aufsatz",
       "an": null,
       "punkte": [
        {
         "nr": 1,
         "was": "Positionen darlegen",
         "hinweis": "Geben Sie die Meinungen von Prof. Lenz und Herrn Osei wieder."
        },
        {
         "nr": 2,
         "was": "Vor- und Nachteile",
         "hinweis": "Diskutieren Sie Chancen und Risiken von KI beim wissenschaftlichen Schreiben."
        },
        {
         "nr": 3,
         "was": "Eigene Erfahrung",
         "hinweis": "Beschreiben Sie, ob und wie Sie solche Programme schon genutzt haben."
        },
        {
         "nr": 4,
         "was": "Fazit",
         "hinweis": "Schlagen Sie eine sinnvolle Regelung vor."
        }
       ],
       "muster": "Kaum eine technische Entwicklung hat den Hochschulalltag in so kurzer Zeit so stark verändert wie Textgeneratoren auf der Grundlage künstlicher Intelligenz. Ob sie eine Bedrohung für das selbstständige Denken oder eine nützliche Hilfe darstellen, soll im Folgenden erörtert werden.\nDie Germanistin Dorothea Lenz vertritt die Ansicht, wer seine Hausarbeit von einer Maschine schreiben lasse, lerne nicht zu denken; solche Programme gehörten daher verboten. Der Informatikstudent Malik Osei vergleicht künstliche Intelligenz dagegen mit dem Taschenrechner und plädiert dafür, ihren verantwortungsvollen Gebrauch zu lernen, anstatt sie zu verbieten.\nFür ein Verbot spricht, dass das Schreiben selbst ein Denkprozess ist. Wer eine Argumentation mühsam entwickelt, versteht ein Thema tiefer als jemand, der fertige Absätze übernimmt. Darüber hinaus erfinden solche Programme mitunter Quellen oder Fakten, was gerade in der Wissenschaft fatal ist. Andererseits erscheint ein vollständiges Verbot kaum durchsetzbar, da sich die Nutzung oft nicht nachweisen lässt. Hinzu kommt, dass Absolventen im späteren Berufsleben ohnehin mit diesen Werkzeugen arbeiten werden. Es wäre insofern widersinnig, sie im Studium davon fernzuhalten. Vielmehr gehört es zu den Aufgaben einer Hochschule, einen kritischen und reflektierten Umgang mit neuen Werkzeugen zu vermitteln. Dazu gehört auch das Wissen darüber, wo die Grenzen dieser Programme liegen und in welchen Situationen ihre Nutzung unredlich wäre.\nIch selbst nutze solche Programme gelegentlich, allerdings nicht, um Texte schreiben zu lassen. Bei meiner letzten Hausarbeit habe ich mir zum Beispiel Rückmeldung zur Gliederung geben lassen und um Hinweise auf unklare Formulierungen gebeten. Dabei habe ich gemerkt, dass die Vorschläge zwar hilfreich, aber keineswegs immer zutreffend waren. Ohne eigenes Fachwissen hätte ich die Fehler nicht erkannt. Diese Erfahrung hat mir gezeigt, dass solche Programme eher ein Gesprächspartner als ein Autor sein können, und auch das nur für jemanden, der das Thema bereits beherrscht.\nZusammenfassend bin ich der Überzeugung, dass weder ein pauschales Verbot noch eine uneingeschränkte Erlaubnis sinnvoll ist. Hochschulen sollten klare Regeln aufstellen: Die Nutzung sollte offengelegt werden müssen, und Prüfungsformate wie mündliche Verteidigungen könnten sicherstellen, dass Studenten ihre Arbeit tatsächlich verstehen. So würde die Technik zum Werkzeug, ohne das eigene Denken zu ersetzen.",
       "woerter": 350,
       "hilfen": [
        "Kaum eine Entwicklung hat … so stark verändert wie …",
        "X vertritt die Ansicht, wer …, lerne …",
        "Y plädiert dafür, …",
        "Für ein Verbot spricht, dass …",
        "Es wäre insofern widersinnig, …",
        "Zusammenfassend bin ich der Überzeugung, dass …"
       ],
       "erklaerung": "Das Muster stellt beide Seiten fair dar, nennt konkrete Risiken (erfundene Quellen) und eine realistische eigene Nutzung. Das Fazit schlägt eine Regelung mit Offenlegungspflicht vor.",
       "rubrik": [
        {
         "t": "Aufgabengerechtheit",
         "h": "Passt der Text zum Auftrag? Sind alle Punkte behandelt, Einleitung, Hauptteil und Schluss erkennbar?"
        },
        {
         "t": "Korrektheit",
         "h": "Grammatik und Rechtschreibung — stören Fehler das Verstehen? Vergleich mit dem Muster."
        },
        {
         "t": "Repertoire",
         "h": "Wie vielfältig und präzise sind Wortschatz und Satzbau? Nominalstil, Konnektoren, Fachwörter."
        },
        {
         "t": "Kommunikative Gestaltung",
         "h": "Ist der Text gut verknüpft, logisch aufgebaut und dem Anlass angemessen?"
        }
       ],
       "max": 48,
       "c1h": true,
       "level": "C1",
       "platzhalter": "Schreib hier deinen Text …"
      },
      {
       "id": "c1sa6",
       "situation": "Im Seminar „Internationalisierung der Hochschule\" sollen Sie einen Text über den Nutzen eines Auslandssemesters schreiben. Ihnen liegen zwei Stellungnahmen vor.",
       "eingang": {
        "von": "Seminar „Internationalisierung der Hochschule\"",
        "betreff": "Das Auslandssemester",
        "text": "Hochschulen werben intensiv für Aufenthalte im Ausland, und viele Studenten verbringen mindestens ein Semester an einer Partneruniversität. Doch nicht alle halten diese Entwicklung für uneingeschränkt positiv. Geben Sie die beiden Positionen wieder, erörtern Sie Vor- und Nachteile und beziehen Sie eigene Erfahrungen mit ein.\n„Ein Semester im Ausland verändert den Blick auf die Welt und auf sich selbst. Das kann kein Seminar zu Hause leisten.\" (Dr. Ingrid Solheim, Leiterin eines Akademischen Auslandsamts)\n„Für viele ist das Auslandssemester vor allem ein teurer Urlaub mit Partys. Fachlich bringt es oft wenig.\" (Ruben Castellano, Masterstudent der Physik)"
       },
       "sorte": "aufsatz",
       "an": null,
       "punkte": [
        {
         "nr": 1,
         "was": "Positionen darlegen",
         "hinweis": "Fassen Sie die Aussagen von Dr. Solheim und Herrn Castellano zusammen."
        },
        {
         "nr": 2,
         "was": "Vor- und Nachteile",
         "hinweis": "Diskutieren Sie persönlichen und fachlichen Nutzen sowie Kosten."
        },
        {
         "nr": 3,
         "was": "Eigene Erfahrung",
         "hinweis": "Berichten Sie von einem eigenen Auslandsaufenthalt oder einer Entscheidung dagegen."
        },
        {
         "nr": 4,
         "was": "Fazit",
         "hinweis": "Ziehen Sie ein abschließendes Urteil."
        }
       ],
       "muster": "Ein Semester im Ausland gilt heute fast als fester Bestandteil eines erfolgreichen Studiums. Gleichwohl stellt sich die Frage, ob der Aufenthalt tatsächlich den Gewinn bringt, den Hochschulen ihm zuschreiben. Im Folgenden werden zwei gegensätzliche Einschätzungen erörtert.\nNach Ansicht von Ingrid Solheim, Leiterin eines Akademischen Auslandsamts, verändere ein Auslandssemester den Blick auf die Welt und auf sich selbst in einer Weise, die kein Seminar zu Hause leisten könne. Der Physikstudent Ruben Castellano äußert sich deutlich skeptischer: Für viele sei der Aufenthalt in erster Linie ein kostspieliger Urlaub, der fachlich wenig bringe.\nUnbestreitbar ist der persönliche Gewinn. Wer sich in einem fremden Hochschulsystem, einer anderen Sprache und einem neuen Alltag zurechtfinden muss, wird selbstständiger und lernt, mit Unsicherheit umzugehen. Diese Fähigkeiten werden auch von Arbeitgebern geschätzt. Dennoch ist der Einwand von Herrn Castellano nicht unbegründet. Häufig werden im Ausland erbrachte Leistungen nicht anerkannt, sodass sich das Studium verlängert. Zudem sind die Kosten erheblich, wohingegen Stipendien nur einen Teil davon abdecken. Ob ein Auslandssemester fachlich etwas bringt, hängt daher maßgeblich von der Wahl der Gasthochschule und der Vorbereitung ab. Wer sich vorab genau informiert, welche Kurse angeboten werden und ob sie angerechnet werden, kann das Semester fachlich durchaus gewinnbringend nutzen.\nIch habe im vierten Semester ein halbes Jahr an einer Universität in Nordeuropa verbracht. Anfangs fühlte ich mich ziemlich verloren, weil die Lehrformen ganz anders waren: weniger Vorlesungen, dafür viel Projektarbeit und eigenständige Recherche. Gerade diese Umstellung hat mir jedoch gezeigt, wie unterschiedlich man lernen kann. Fachlich habe ich vor allem im Bereich Statistik viel dazugewonnen, auch wenn mir nicht alle Kurse angerechnet wurden. Ob ich diese Erfahrung auch zu Hause hätte machen können, bezweifle ich. Insofern kann ich die Einschätzung von Frau Solheim aus eigener Erfahrung bestätigen.\nAbschließend lässt sich sagen, dass ein Auslandssemester eine große Bereicherung sein kann, sofern es gut geplant ist. Hochschulen sollten deshalb nicht nur dafür werben, sondern auch die Anerkennung von Studienleistungen vereinfachen und finanziell schwächere Studenten gezielt unterstützen. Dann wäre der Aufenthalt weder Urlaub noch Luxus, sondern eine echte Investition in die Zukunft.",
       "woerter": 350,
       "hilfen": [
        "Gleichwohl stellt sich die Frage, ob …",
        "Nach Ansicht von X verändere …",
        "Y äußert sich deutlich skeptischer: …",
        "Unbestreitbar ist …",
        "Dennoch ist der Einwand nicht unbegründet.",
        "…, sofern es gut geplant ist."
       ],
       "erklaerung": "Der Text führt die Zitate mit wechselnden Redeeinleitungen ein, nutzt „wohingegen\" und „sofern\" für präzise Abwägung und verknüpft das Fazit mit konkreten Forderungen an die Hochschulen.",
       "rubrik": [
        {
         "t": "Aufgabengerechtheit",
         "h": "Passt der Text zum Auftrag? Sind alle Punkte behandelt, Einleitung, Hauptteil und Schluss erkennbar?"
        },
        {
         "t": "Korrektheit",
         "h": "Grammatik und Rechtschreibung — stören Fehler das Verstehen? Vergleich mit dem Muster."
        },
        {
         "t": "Repertoire",
         "h": "Wie vielfältig und präzise sind Wortschatz und Satzbau? Nominalstil, Konnektoren, Fachwörter."
        },
        {
         "t": "Kommunikative Gestaltung",
         "h": "Ist der Text gut verknüpft, logisch aufgebaut und dem Anlass angemessen?"
        }
       ],
       "max": 48,
       "c1h": true,
       "level": "C1",
       "platzhalter": "Schreib hier deinen Text …"
      }
     ]
    },
    {
     "id": "tc1sr4",
     "titel": "Runde 4",
     "aufgaben": [
      {
       "id": "c1sa7",
       "situation": "Im Seminar „Leistung messen\" sollen Sie sich mit der Frage auseinandersetzen, ob Noten durch ausführliches schriftliches Feedback ersetzt werden sollten. Schreiben Sie einen Diskussionsbeitrag.",
       "eingang": {
        "von": "Seminar „Leistung messen\"",
        "betreff": "Noten oder Feedback?",
        "text": "An einigen Hochschulen werden Modellversuche durchgeführt, in denen Prüfungsleistungen nicht mehr benotet, sondern nur noch ausführlich kommentiert werden. Befürworter erhoffen sich mehr Lernfreude, Kritiker fürchten Beliebigkeit. Stellen Sie die beiden Positionen dar, wägen Sie Vor- und Nachteile ab und berichten Sie von eigenen Erfahrungen.\n„Eine Note sagt mir, wo ich stehe, aber nicht, wie ich weiterkomme. Gutes Feedback dagegen schon.\" (Clara Neumeister, Lehramtsstudentin)\n„Ohne Noten können Arbeitgeber und Hochschulen Bewerber nicht fair vergleichen. Das schadet am Ende den Studenten selbst.\" (Prof. Gregor Albers, Prüfungsausschuss)"
       },
       "sorte": "aufsatz",
       "an": null,
       "punkte": [
        {
         "nr": 1,
         "was": "Positionen darlegen",
         "hinweis": "Geben Sie die Aussagen von Frau Neumeister und Prof. Albers wieder."
        },
        {
         "nr": 2,
         "was": "Vor- und Nachteile",
         "hinweis": "Vergleichen Sie Noten und schriftliches Feedback."
        },
        {
         "nr": 3,
         "was": "Eigene Erfahrung",
         "hinweis": "Beschreiben Sie, welche Form der Rückmeldung Ihnen beim Lernen geholfen hat."
        },
        {
         "nr": 4,
         "was": "Fazit",
         "hinweis": "Kommen Sie zu einem begründeten Ergebnis."
        }
       ],
       "muster": "Noten gehören seit jeher selbstverständlich zum Bildungssystem. Ob sie jedoch tatsächlich das Lernen fördern oder vielmehr behindern, wird in jüngster Zeit zunehmend in Frage gestellt. Diese Diskussion soll im Folgenden anhand zweier Stellungnahmen nachgezeichnet werden.\nDie Lehramtsstudentin Clara Neumeister kritisiert, eine Note zeige zwar, wo man stehe, aber nicht, wie man sich verbessern könne; ausführliches Feedback leiste genau das. Professor Gregor Albers vom Prüfungsausschuss gibt hingegen zu bedenken, ohne Noten sei ein fairer Vergleich von Bewerbern kaum möglich, was letztlich den Studenten selbst schade.\nZweifellos liegt der Vorteil von Noten in ihrer Vergleichbarkeit. Eine Zahl lässt sich schnell erfassen und in Bewerbungsverfahren unkompliziert berücksichtigen. Allerdings ist diese Vergleichbarkeit nur scheinbar gegeben, da Bewertungsmaßstäbe von Hochschule zu Hochschule und sogar von Dozent zu Dozent stark schwanken. Schwerer wiegt meines Erachtens, dass Noten den Blick auf das Ergebnis lenken und nicht auf den Lernprozess. Wer nur auf die Note schaut, liest die Kommentare am Rand oft gar nicht mehr. Ausführliches Feedback hingegen erfordert zwar mehr Zeit von den Dozenten, zeigt aber konkret, wo Stärken und Schwächen liegen. Es stellt allerdings hohe Anforderungen an die Dozenten, denn ein oberflächlicher Kommentar wie „gut gemacht\" hilft ebenso wenig weiter wie eine nackte Zahl. Bei großen Vorlesungen mit Hunderten von Teilnehmern dürfte ausführliches Feedback zudem kaum zu leisten sein.\nIn meinem ersten Studienjahr erhielt ich für eine Hausarbeit lediglich eine mittelmäßige Note ohne jede Begründung. Ich wusste nicht, was ich falsch gemacht hatte, und wiederholte bei der nächsten Arbeit vermutlich dieselben Fehler. Erst eine Dozentin, die mir in einem kurzen Gespräch erklärte, dass meine Argumentation zu wenig auf die Forschungsliteratur eingehe, brachte mich wirklich weiter. Seitdem lese ich Rückmeldungen viel aufmerksamer als die Note selbst.\nAlles in allem halte ich eine vollständige Abschaffung der Noten nicht für realistisch, wohl aber eine Verbindung beider Formen. Jede benotete Arbeit sollte von einer kurzen, aussagekräftigen Rückmeldung begleitet werden. Dafür bräuchten die Dozenten allerdings auch die nötige Zeit. Auf diese Weise bliebe die Vergleichbarkeit erhalten, während zugleich das eigentliche Ziel des Studiums, nämlich das Lernen, wieder in den Mittelpunkt rückte.",
       "woerter": 350,
       "hilfen": [
        "… wird in jüngster Zeit zunehmend in Frage gestellt.",
        "X kritisiert, eine Note zeige zwar …, aber …",
        "Y gibt hingegen zu bedenken, …",
        "Zweifellos liegt der Vorteil von … in …",
        "Schwerer wiegt meines Erachtens, dass …",
        "Alles in allem halte ich … nicht für realistisch, wohl aber …"
       ],
       "erklaerung": "Das Muster relativiert das Hauptargument der Gegenseite („nur scheinbar gegeben\") und schlägt im Fazit einen Kompromiss vor. Achte auf Konjunktiv I in der Redewiedergabe und Konjunktiv II im Ausblick.",
       "rubrik": [
        {
         "t": "Aufgabengerechtheit",
         "h": "Passt der Text zum Auftrag? Sind alle Punkte behandelt, Einleitung, Hauptteil und Schluss erkennbar?"
        },
        {
         "t": "Korrektheit",
         "h": "Grammatik und Rechtschreibung — stören Fehler das Verstehen? Vergleich mit dem Muster."
        },
        {
         "t": "Repertoire",
         "h": "Wie vielfältig und präzise sind Wortschatz und Satzbau? Nominalstil, Konnektoren, Fachwörter."
        },
        {
         "t": "Kommunikative Gestaltung",
         "h": "Ist der Text gut verknüpft, logisch aufgebaut und dem Anlass angemessen?"
        }
       ],
       "max": 48,
       "c1h": true,
       "level": "C1",
       "platzhalter": "Schreib hier deinen Text …"
      },
      {
       "id": "c1sa8",
       "situation": "Im Seminar „Digitale Lehre\" sollen Sie diskutieren, ob Lehrveranstaltungen künftig eher in Präsenz oder online stattfinden sollten. Sie erhalten dazu zwei Aussagen.",
       "eingang": {
        "von": "Seminar „Digitale Lehre\"",
        "betreff": "Präsenz- oder Online-Lehre?",
        "text": "Seit einigen Jahren bieten Hochschulen viele Veranstaltungen online oder in gemischter Form an. Nun stellt sich die Frage, welches Modell sich langfristig durchsetzen soll. Lesen Sie die beiden Aussagen. Stellen Sie die Positionen dar, wägen Sie Vor- und Nachteile ab und schildern Sie eigene Erfahrungen.\n„Eine Hochschule ist ein Ort der Begegnung. Vor dem Bildschirm entsteht keine wissenschaftliche Gemeinschaft.\" (Prof. Anselm Ruhland, Philosoph)\n„Aufgezeichnete Vorlesungen kann ich anhalten und wiederholen. Für mich als Pendlerin mit Kind ist Online-Lehre ein Segen.\" (Nadia Petrović, Studentin der Pflegewissenschaft)"
       },
       "sorte": "aufsatz",
       "an": null,
       "punkte": [
        {
         "nr": 1,
         "was": "Positionen darlegen",
         "hinweis": "Geben Sie die Aussagen von Prof. Ruhland und Frau Petrović wieder."
        },
        {
         "nr": 2,
         "was": "Vor- und Nachteile",
         "hinweis": "Vergleichen Sie Präsenz- und Online-Lehre."
        },
        {
         "nr": 3,
         "was": "Eigene Erfahrung",
         "hinweis": "Berichten Sie, wie Sie selbst online oder in Präsenz gelernt haben."
        },
        {
         "nr": 4,
         "was": "Fazit",
         "hinweis": "Formulieren Sie eine Empfehlung für die Zukunft."
        }
       ],
       "muster": "Die Frage, wie Hochschullehre künftig aussehen soll, beschäftigt Dozenten wie Studenten gleichermaßen. Während manche eine Rückkehr zur reinen Präsenzlehre fordern, wollen andere auf die Vorteile digitaler Formate nicht mehr verzichten. Beide Sichtweisen sollen im Folgenden dargestellt und abgewogen werden.\nDer Philosoph Anselm Ruhland vertritt die Auffassung, eine Hochschule sei ein Ort der Begegnung; vor dem Bildschirm könne keine wissenschaftliche Gemeinschaft entstehen. Nadia Petrović, die Pflegewissenschaft studiert, betont dagegen, dass sie aufgezeichnete Vorlesungen anhalten und wiederholen könne. Als Pendlerin mit Kind empfinde sie Online-Lehre als großen Gewinn.\nFür die Präsenzlehre spricht vor allem der persönliche Austausch. Spontane Fragen, Gespräche in der Pause und gemeinsames Lernen in der Bibliothek lassen sich digital nur schwer ersetzen. Gerade Studienanfänger brauchen diesen Kontakt, um sich zu orientieren und Netzwerke aufzubauen. Andererseits ermöglicht die Online-Lehre eine Flexibilität, die für viele erst die Voraussetzung für ein Studium ist. Wer arbeitet, Kinder betreut oder weit entfernt wohnt, profitiert erheblich davon, Inhalte zeitunabhängig abrufen zu können. Problematisch ist allerdings, dass die Motivation vor dem Bildschirm leichter nachlässt und die Gefahr der Vereinsamung steigt. Zudem setzt Online-Lehre voraus, dass alle Teilnehmer über eine stabile Internetverbindung, ein geeignetes Gerät und einen ruhigen Arbeitsplatz verfügen. Das ist keineswegs selbstverständlich, gerade für Studenten, die in kleinen Wohngemeinschaften leben.\nWährend der Zeit, in der fast alle Veranstaltungen online stattfanden, habe ich diese Ambivalenz deutlich gespürt. Einerseits konnte ich mir die Zeit frei einteilen und sparte täglich über eine Stunde Fahrtzeit. Andererseits kannte ich nach einem Jahr kaum jemanden aus meinem Jahrgang, und meine Konzentration ließ bei langen Videositzungen spürbar nach. Als die ersten Seminare wieder vor Ort stattfanden, habe ich erst gemerkt, wie sehr mir die Gespräche vor und nach den Sitzungen gefehlt hatten.\nZusammenfassend lässt sich festhalten, dass keines der beiden Modelle allein überzeugt. Am sinnvollsten erscheint mir eine Verbindung: Vorlesungen, in denen vor allem Wissen vermittelt wird, könnten aufgezeichnet werden, während Seminare und Übungen, die vom Austausch leben, in Präsenz stattfinden sollten. Entscheidend wäre dabei, dass die Hochschulen ihre technische Ausstattung entsprechend verbessern. So ließen sich Begegnung und Flexibilität miteinander verbinden.",
       "woerter": 350,
       "hilfen": [
        "Während manche … fordern, wollen andere …",
        "X vertritt die Auffassung, … sei …",
        "Y betont dagegen, dass …",
        "Für … spricht vor allem …",
        "Problematisch ist allerdings, dass …",
        "Am sinnvollsten erscheint mir eine Verbindung: …"
       ],
       "erklaerung": "Das Muster arbeitet mit klaren Gegenüberstellungen („Einerseits … Andererseits\", „Während …\") und schlägt ein gemischtes Modell vor, das beide Zitate aufgreift.",
       "rubrik": [
        {
         "t": "Aufgabengerechtheit",
         "h": "Passt der Text zum Auftrag? Sind alle Punkte behandelt, Einleitung, Hauptteil und Schluss erkennbar?"
        },
        {
         "t": "Korrektheit",
         "h": "Grammatik und Rechtschreibung — stören Fehler das Verstehen? Vergleich mit dem Muster."
        },
        {
         "t": "Repertoire",
         "h": "Wie vielfältig und präzise sind Wortschatz und Satzbau? Nominalstil, Konnektoren, Fachwörter."
        },
        {
         "t": "Kommunikative Gestaltung",
         "h": "Ist der Text gut verknüpft, logisch aufgebaut und dem Anlass angemessen?"
        }
       ],
       "max": 48,
       "c1h": true,
       "level": "C1",
       "platzhalter": "Schreib hier deinen Text …"
      }
     ]
    }
   ]
  }
 ],
 "laeufe": [
  {
   "id": "tc1sl1",
   "titel": "Prüfungslauf 1",
   "minuten": 70,
   "aufgaben": [
    {
     "id": "c1sa9",
     "situation": "Im Seminar „Bildungsgerechtigkeit\" sollen Sie zu der Frage Stellung nehmen, ob ein Land gezielt einzelne Elitehochschulen fördern sollte. Verfassen Sie einen Diskussionsbeitrag.",
     "eingang": {
      "von": "Seminar „Bildungsgerechtigkeit\"",
      "betreff": "Elitehochschulen",
      "text": "In mehreren Ländern konzentrieren sich Fördergelder und Ansehen auf wenige Spitzenuniversitäten. Auch hierzulande wird darüber diskutiert, ob einzelne Hochschulen besonders gefördert werden sollten. Befürworter verweisen auf den internationalen Wettbewerb, Kritiker auf die Chancengleichheit. Geben Sie die beiden Positionen wieder, wägen Sie Vor- und Nachteile ab und beziehen Sie eigene Erfahrungen ein.\n„Nur wer Spitzenforschung bündelt, kann international mithalten. Exzellenz braucht Konzentration.\" (Dr. Viktor Hallmann, Wissenschaftsmanager)\n„Elitehochschulen fördern vor allem die Kinder der Elite. Gute Bildung muss überall im Land erreichbar sein.\" (Teresa Quandt, Bildungsforscherin)"
     },
     "sorte": "aufsatz",
     "an": null,
     "punkte": [
      {
       "nr": 1,
       "was": "Positionen darlegen",
       "hinweis": "Fassen Sie die Aussagen von Dr. Hallmann und Frau Quandt zusammen."
      },
      {
       "nr": 2,
       "was": "Vor- und Nachteile",
       "hinweis": "Diskutieren Sie, was für und was gegen Elitehochschulen spricht."
      },
      {
       "nr": 3,
       "was": "Eigene Erfahrung",
       "hinweis": "Beziehen Sie sich auf das Hochschulsystem in Ihrem Herkunftsland oder Ihre Hochschulwahl."
      },
      {
       "nr": 4,
       "was": "Fazit",
       "hinweis": "Nehmen Sie abschließend begründet Stellung."
      }
     ],
     "muster": "Sollte ein Land seine Mittel auf wenige herausragende Hochschulen konzentrieren oder möglichst gleichmäßig verteilen? Hinter dieser Frage steht ein grundlegender Zielkonflikt zwischen internationaler Spitzenleistung und sozialer Gerechtigkeit. Im Folgenden werden beide Seiten beleuchtet.\nDer Wissenschaftsmanager Viktor Hallmann ist der Ansicht, nur durch die Bündelung von Spitzenforschung könne man international mithalten; Exzellenz brauche Konzentration. Die Bildungsforscherin Teresa Quandt wendet dagegen ein, Elitehochschulen förderten vor allem Kinder aus privilegierten Familien. Gute Bildung müsse überall im Land erreichbar sein.\nFür eine gezielte Förderung spricht, dass Spitzenforschung teure Geräte, große Labore und hochqualifiziertes Personal erfordert. Verteilt man die Mittel gleichmäßig, reicht es womöglich nirgends für wirklich bahnbrechende Projekte. Zudem ziehen renommierte Hochschulen internationale Wissenschaftler an, wovon letztlich das ganze Land profitiert. Gleichwohl ist die Kritik von Frau Quandt ernst zu nehmen. Erfahrungen aus Ländern mit ausgeprägten Elitesystemen zeigen, dass der Zugang zu den besten Hochschulen stark vom Elternhaus abhängt, sei es durch teure Vorbereitungskurse oder durch Netzwerke. Wenn sich Förderung und Prestige auf wenige Orte konzentrieren, droht außerdem der Rest des Hochschulsystems an Qualität zu verlieren. Gerade kleinere Hochschulen in ländlichen Regionen, die vielen jungen Menschen erst den Zugang zu einem Studium ermöglichen, würden dann noch weiter abgehängt.\nIn meinem Herkunftsland gibt es eine kleine Gruppe von Universitäten, deren Abschlüsse deutlich mehr gelten als alle anderen. Ich selbst habe die Aufnahmeprüfung für eine dieser Hochschulen knapp verfehlt, obwohl ich sehr gute Schulnoten hatte. Die meisten erfolgreichen Bewerber in meinem Jahrgang hatten jahrelang private Nachhilfe bekommen, die sich meine Familie nicht leisten konnte. Dieses Erlebnis hat mir deutlich gemacht, dass sogenannte Begabung oft nichts anderes ist als das Ergebnis frühzeitiger Förderung. Heute studiere ich an einer ganz normalen Universität und bin damit sehr zufrieden.\nAbschließend bin ich der Auffassung, dass die Förderung herausragender Forschung durchaus legitim ist, sofern sie nicht zu einer sozialen Auslese führt. Statt ganze Hochschulen zu Eliteeinrichtungen zu erklären, sollte man einzelne Forschungsprojekte im Wettbewerb fördern und gleichzeitig dafür sorgen, dass Talent und nicht Herkunft über den Zugang entscheidet. Exzellenz und Chancengleichheit wären dann keine Gegensätze mehr.",
     "woerter": 350,
     "hilfen": [
      "Hinter dieser Frage steht ein grundlegender Zielkonflikt zwischen … und …",
      "X ist der Ansicht, nur durch … könne man …",
      "Y wendet dagegen ein, …",
      "Gleichwohl ist die Kritik ernst zu nehmen.",
      "…, sei es durch … oder durch …",
      "…, sofern sie nicht zu … führt."
     ],
     "erklaerung": "Das Muster benennt den Zielkonflikt schon in der Einleitung, wägt mit „Gleichwohl\" ab und knüpft die Zustimmung im Fazit an eine Bedingung mit „sofern\".",
     "rubrik": [
      {
       "t": "Aufgabengerechtheit",
       "h": "Passt der Text zum Auftrag? Sind alle Punkte behandelt, Einleitung, Hauptteil und Schluss erkennbar?"
      },
      {
       "t": "Korrektheit",
       "h": "Grammatik und Rechtschreibung — stören Fehler das Verstehen? Vergleich mit dem Muster."
      },
      {
       "t": "Repertoire",
       "h": "Wie vielfältig und präzise sind Wortschatz und Satzbau? Nominalstil, Konnektoren, Fachwörter."
      },
      {
       "t": "Kommunikative Gestaltung",
       "h": "Ist der Text gut verknüpft, logisch aufgebaut und dem Anlass angemessen?"
      }
     ],
     "max": 48,
     "c1h": true,
     "level": "C1",
     "platzhalter": "Schreib hier deinen Text …"
    }
   ]
  },
  {
   "id": "tc1sl2",
   "titel": "Prüfungslauf 2",
   "minuten": 70,
   "aufgaben": [
    {
     "id": "c1sa10",
     "situation": "Im Seminar „Studium und Gesellschaft\" geht es um ehrenamtliches Engagement neben dem Studium. Sie sollen einen Diskussionsbeitrag zu zwei Aussagen schreiben.",
     "eingang": {
      "von": "Seminar „Studium und Gesellschaft\"",
      "betreff": "Ehrenamt neben dem Studium",
      "text": "Viele Studenten engagieren sich ehrenamtlich, etwa in der Hausaufgabenhilfe, im Sportverein oder in der Fachschaft. Gleichzeitig steigt der Leistungsdruck im Studium. Einige Hochschulen überlegen, Ehrenamt mit Leistungspunkten anzuerkennen. Stellen Sie die beiden Positionen dar, wägen Sie ab und bringen Sie eigene Erfahrungen ein.\n„Im Ehrenamt lernen junge Menschen Verantwortung. Hochschulen sollten das ausdrücklich belohnen.\" (Ursula Fendrich, Vorsitzende einer Bürgerstiftung)\n„Ein Ehrenamt ist freiwillig. Sobald es Punkte dafür gibt, engagiert man sich nur noch für den Lebenslauf.\" (Dr. Tobias Marquardt, Studienberater)"
     },
     "sorte": "aufsatz",
     "an": null,
     "punkte": [
      {
       "nr": 1,
       "was": "Positionen darlegen",
       "hinweis": "Geben Sie die Aussagen von Frau Fendrich und Dr. Marquardt wieder."
      },
      {
       "nr": 2,
       "was": "Vor- und Nachteile",
       "hinweis": "Diskutieren Sie Nutzen und Belastung eines Ehrenamts sowie eine mögliche Anerkennung."
      },
      {
       "nr": 3,
       "was": "Eigene Erfahrung",
       "hinweis": "Berichten Sie von einem eigenen Engagement oder dem einer Person, die Sie kennen."
      },
      {
       "nr": 4,
       "was": "Fazit",
       "hinweis": "Ziehen Sie ein begründetes Fazit."
      }
     ],
     "muster": "Ehrenamtliches Engagement gilt als tragende Säule unserer Gesellschaft, und gerade Studenten bringen sich in vielen Bereichen ein. Ob Hochschulen dieses Engagement offiziell anerkennen sollten, ist jedoch umstritten. Die folgenden Ausführungen stellen zwei Positionen dazu gegenüber.\nUrsula Fendrich, Vorsitzende einer Bürgerstiftung, ist überzeugt, junge Menschen lernten im Ehrenamt Verantwortung, weshalb Hochschulen dies ausdrücklich belohnen sollten. Der Studienberater Tobias Marquardt hält dem entgegen, ein Ehrenamt sei per Definition freiwillig. Gebe es dafür Punkte, engagiere man sich nur noch für den Lebenslauf.\nDass ehrenamtliche Tätigkeiten wertvolle Kompetenzen vermitteln, steht außer Frage. Wer eine Hausaufgabenhilfe organisiert oder in der Fachschaft Verhandlungen führt, lernt Organisation, Kommunikation und Durchhaltevermögen. Eine Anerkennung durch Leistungspunkte würde zudem gerade denjenigen helfen, die wegen ihres Engagements weniger Zeit für Prüfungen haben. Allerdings ist die Befürchtung von Herrn Marquardt nicht völlig unbegründet. Wird ein Ehrenamt zur Pflichtleistung mit Gegenwert, verändert sich womöglich die Motivation, und die Gefahr wächst, dass Einsätze nur noch pro forma absolviert werden. Hinzu kommt die Frage, wie man so unterschiedliche Tätigkeiten überhaupt gerecht bewerten soll. Eine Stunde Vorlesen mit Kindern lässt sich schließlich kaum mit der Organisation eines großen Festivals oder der Mitarbeit in einem Rettungsdienst vergleichen.\nIch engagiere mich seit zwei Jahren in einem Lesepatenprojekt an einer Grundschule. Einmal pro Woche lese ich mit Kindern, die zu Hause wenig Unterstützung erhalten. Diese Arbeit macht mir große Freude und hat mich sogar darin bestärkt, später im Bildungsbereich zu arbeiten. In Prüfungsphasen gerate ich allerdings regelmäßig in Zeitnot, und ich hätte mir schon oft gewünscht, dass meine Hochschule zumindest bei Abgabefristen etwas Rücksicht nimmt. Ob mir Leistungspunkte dabei geholfen hätten, bezweifle ich allerdings. Ich engagiere mich, weil mir die Kinder am Herzen liegen, und nicht, um meinen Lebenslauf aufzuwerten.\nZusammenfassend halte ich eine Anerkennung des Ehrenamts für sinnvoll, jedoch nicht in Form von Pflichtpunkten. Besser wären flexible Regelungen, etwa verlängerte Abgabefristen, sowie eine Bescheinigung, die das Engagement sichtbar macht. Auch eine Ehrung besonders engagierter Studenten bei der Abschlussfeier wäre ein schönes Zeichen. Auf diese Weise würde das Ehrenamt gewürdigt, ohne seinen freiwilligen Charakter zu verlieren.",
     "woerter": 350,
     "hilfen": [
      "Die folgenden Ausführungen stellen … gegenüber.",
      "X ist überzeugt, junge Menschen lernten …",
      "Y hält dem entgegen, …",
      "Dass …, steht außer Frage.",
      "Allerdings ist die Befürchtung nicht völlig unbegründet.",
      "Zusammenfassend halte ich … für sinnvoll, jedoch nicht …"
     ],
     "erklaerung": "Das Muster nutzt „lernten\" als Konjunktiv-II-Ersatz, weil „lernen\" im Konjunktiv I Plural nicht vom Indikativ zu unterscheiden ist. Das Fazit verbindet Zustimmung mit einer klaren Einschränkung.",
     "rubrik": [
      {
       "t": "Aufgabengerechtheit",
       "h": "Passt der Text zum Auftrag? Sind alle Punkte behandelt, Einleitung, Hauptteil und Schluss erkennbar?"
      },
      {
       "t": "Korrektheit",
       "h": "Grammatik und Rechtschreibung — stören Fehler das Verstehen? Vergleich mit dem Muster."
      },
      {
       "t": "Repertoire",
       "h": "Wie vielfältig und präzise sind Wortschatz und Satzbau? Nominalstil, Konnektoren, Fachwörter."
      },
      {
       "t": "Kommunikative Gestaltung",
       "h": "Ist der Text gut verknüpft, logisch aufgebaut und dem Anlass angemessen?"
      }
     ],
     "max": 48,
     "c1h": true,
     "level": "C1",
     "platzhalter": "Schreib hier deinen Text …"
    }
   ]
  }
 ]
};
