/* ============================================================
   deutschoderwas club — SCHREIBEN telc Deutsch C1

   Aufbau nach dem offiziellen telc-Format (telc „Tipps zur
   Prüfungsvorbereitung", Übungstest 1 Deutsch C1, geprüft 02.11.2026).
   Alle Texte und Aufgaben eigene, nur das Format ist nachgebaut.
   Erzeugt aus scratchpad/telcc1g mit bau.js.
   ============================================================ */

window.SCHREIBEN_TELC_C1 = {
 "niveau": "telcC1",
 "pruefung": "telc Deutsch C1",
 "minuten": 70,
 "punkte": 48,
 "intro": "Bei telc C1 wählst du eines von zwei Themen und schreibst in siebzig Minuten einen Text von etwa 350 Wörtern — zum Beispiel eine Stellungnahme zu einem Leserbrief oder einer Umfrage: Positionen darlegen, abwägen, eigene Erfahrung, begründetes Fazit. Bewertet wird nach vier Kriterien: Aufgabengerechtheit, Korrektheit, Repertoire, kommunikative Gestaltung. telc nennt keine Punkte je Kriterium — hier gewichten wir alle vier gleich, als Übungsschätzung.",
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
   "id": "tg1s1",
   "stufe": 1,
   "titel": "Aufbau einer Erörterung und Stellungnahme",
   "kurz": "Hinführen, abwägen, Stellung beziehen — mit sichtbarem Bauplan",
   "ziel": "Nach diesem Block baust du eine Stellungnahme so auf, dass der Leser jederzeit weiß, an welcher Stelle deiner Argumentation du gerade bist.",
   "zeichen": "🏛️",
   "farbe": "turq",
   "aufgaben": [
    {
     "art": "wahl",
     "frage": "Welcher Einstieg passt am besten zu einer Stellungnahme über verkaufsoffene Sonntage?",
     "opt": [
      "Sonntage sind ein Thema, über das man schreiben kann.",
      "Kaum eine Frage spaltet die Bürger unserer Stadt derzeit so sehr wie die, ob Geschäfte künftig auch sonntags öffnen dürfen.",
      "Ich bin gegen Sonntagsöffnung und sage jetzt warum."
     ],
     "loesung": 1,
     "erklaerung": "Ein guter Einstieg führt zum Thema hin und zeigt, warum es gerade relevant ist, bevor du Stellung beziehst."
    },
    {
     "art": "wahl",
     "frage": "Was gehört NICHT in die Einleitung einer Stellungnahme?",
     "opt": [
      "Der Anlass, etwa der Leserbrief oder die Umfrage",
      "Ein kurzer Hinweis auf das weitere Vorgehen",
      "Die ausführliche Begründung deiner eigenen Meinung"
     ],
     "loesung": 2,
     "erklaerung": "Die ausführliche Begründung gehört in den Hauptteil; die Einleitung nennt nur Anlass und Fragestellung."
    },
    {
     "art": "wahl",
     "frage": "Welcher Satz nennt den Anlass des Textes am elegantesten?",
     "opt": [
      "Ich habe einen Brief gelesen.",
      "In der letzten Ausgabe der Stadtzeitung plädiert ein Leser dafür, die Innenstadt für Autos zu sperren.",
      "Da war so ein Brief in der Zeitung über Autos."
     ],
     "loesung": 1,
     "erklaerung": "Quelle, Verfasser und Kernforderung stehen in einem einzigen, sachlichen Satz — genau so beginnt eine C1-Stellungnahme."
    },
    {
     "art": "wahl",
     "frage": "In welcher Reihenfolge baust du den Hauptteil am sinnvollsten auf?",
     "opt": [
      "Erst die eigene Meinung, dann die Wiedergabe der fremden Position",
      "Erst die fremde Position wiedergeben, dann Argumente abwägen, dann eigene Erfahrung",
      "Nur Argumente aufzählen, ohne Reihenfolge"
     ],
     "loesung": 1,
     "erklaerung": "Wer zuerst sauber wiedergibt und dann abwägt, wirkt fair und überzeugend — die eigene Erfahrung stützt die Abwägung."
    },
    {
     "art": "wahl",
     "frage": "Womit beginnt ein neuer Absatz im Hauptteil am besten?",
     "opt": [
      "Mit einem Leitsatz, der den Gedanken des Absatzes ankündigt",
      "Mit einem Beispiel ohne Zusammenhang",
      "Mit „Und außerdem\""
     ],
     "loesung": 0,
     "erklaerung": "Ein Leitsatz am Absatzanfang zeigt, worum es jetzt geht; der Rest des Absatzes führt ihn aus."
    },
    {
     "art": "wahl",
     "frage": "Welche Überleitung verbindet die Argumente dafür mit den Argumenten dagegen am besten?",
     "opt": [
      "Jetzt kommen die Nachteile.",
      "Diesen Vorzügen stehen allerdings gewichtige Bedenken gegenüber.",
      "Aber es gibt auch was dagegen."
     ],
     "loesung": 1,
     "erklaerung": "„Diesen Vorzügen stehen … gegenüber\" blickt zurück und kündigt zugleich die Gegenseite an."
    },
    {
     "art": "wahl",
     "frage": "Welcher Satz leitet den Schluss ein?",
     "opt": [
      "Ein weiteres Argument ist …",
      "Wägt man die genannten Gesichtspunkte gegeneinander ab, so komme ich zu dem Ergebnis, dass …",
      "Außerdem muss man bedenken, dass …"
     ],
     "loesung": 1,
     "erklaerung": "Der Konditionalsatz ohne „wenn\" bündelt die Abwägung und führt direkt zur eigenen Stellungnahme."
    },
    {
     "art": "wahl",
     "frage": "Was ist ein guter Abschluss einer Stellungnahme zu einem Vorschlag der Stadt?",
     "opt": [
      "Ein ganz neues Argument, das bisher nicht vorkam",
      "Ein begründetes Urteil mit einem konkreten Vorschlag oder Ausblick",
      "Eine Entschuldigung dafür, dass der Text so lang geworden ist"
     ],
     "loesung": 1,
     "erklaerung": "Im Schluss bündelst du: Urteil, kurze Begründung und ein konstruktiver Vorschlag. Neue Argumente gehören in den Hauptteil."
    },
    {
     "art": "ordnen",
     "frage": "Bau den Satz, der die Einleitung abschließt.",
     "teile": [
      "Im",
      "Folgenden",
      "sollen",
      "die",
      "wichtigsten",
      "Argumente",
      "dafür",
      "und",
      "dagegen",
      "abgewogen",
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
     "erklaerung": "Modalverb plus Passiv-Infinitiv am Satzende: typisch für eine sachliche Ankündigung des Aufbaus."
    },
    {
     "art": "ordnen",
     "frage": "Bau den Satz für den Übergang zum Schluss.",
     "teile": [
      "Abschließend",
      "möchte",
      "ich",
      "meine",
      "eigene",
      "Position",
      "noch",
      "einmal",
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
      7,
      8
     ],
     "erklaerung": "„Abschließend\" steht auf Position eins, deshalb folgt sofort das Verb „möchte\"."
    }
   ]
  },
  {
   "id": "tg1s2",
   "stufe": 1,
   "titel": "Positionen anderer wiedergeben",
   "kurz": "Leserbrief, Forumsbeitrag, Umfrage — fremde Meinungen sauber referieren",
   "ziel": "Nach diesem Block gibst du die Meinung anderer korrekt und distanziert wieder, mit Redeeinleitung und Konjunktiv I, und versprachlichst Umfrageergebnisse.",
   "zeichen": "💬",
   "farbe": "gold",
   "aufgaben": [
    {
     "art": "wahl",
     "frage": "Welcher Satz gibt die Position eines Leserbriefs neutral wieder?",
     "opt": [
      "Der Verfasser des Leserbriefs ist der Ansicht, die Mieten in unserer Stadt seien längst nicht mehr bezahlbar.",
      "Der Verfasser hat völlig recht, die Mieten sind zu hoch.",
      "Der Typ schreibt, dass die Mieten zu hoch sind."
     ],
     "loesung": 0,
     "erklaerung": "Redeeinleitung plus Konjunktiv I „seien\" zeigt: Das ist seine Meinung, nicht deine."
    },
    {
     "art": "wahl",
     "frage": "Welche Form ist der korrekte Konjunktiv I von „Sie fordert, dass die Stadt handelt\"?",
     "opt": [
      "Sie fordert, die Stadt handele.",
      "Sie fordert, die Stadt handelte.",
      "Sie fordert, die Stadt würde handeln."
     ],
     "loesung": 0,
     "erklaerung": "„handele\" ist Konjunktiv I und deutlich vom Indikativ unterscheidbar — also die richtige Wahl."
    },
    {
     "art": "wahl",
     "frage": "Wann weichst du in der Redewiedergabe auf den Konjunktiv II aus?",
     "opt": [
      "Immer, denn er klingt höflicher",
      "Wenn der Konjunktiv I genauso aussieht wie der Indikativ",
      "Nie, Konjunktiv II ist in der Redewiedergabe verboten"
     ],
     "loesung": 1,
     "erklaerung": "„Viele Bürger meinen, sie haben …\" ist nicht eindeutig, deshalb: „sie hätten …\"."
    },
    {
     "art": "wahl",
     "frage": "Welches Verb drückt aus, dass jemand etwas sehr entschieden fordert?",
     "opt": [
      "erwähnen",
      "andeuten",
      "plädieren für"
     ],
     "loesung": 2,
     "erklaerung": "„Für etwas plädieren\" heißt: sich mit Nachdruck für etwas aussprechen. „Erwähnen\" und „andeuten\" sind viel schwächer."
    },
    {
     "art": "wahl",
     "frage": "Wie gibst du ein Umfrageergebnis sachlich wieder?",
     "opt": [
      "Laut einer Umfrage der Stadt spricht sich knapp die Hälfte der Befragten für ein Tempolimit aus.",
      "Fast alle wollen ein Tempolimit, sagt die Stadt irgendwie.",
      "Die Umfrage ist eindeutig und beweist, dass ich recht habe."
     ],
     "loesung": 0,
     "erklaerung": "„Laut …\" nennt die Quelle, „sich aussprechen für\" ist sachlich, „knapp die Hälfte\" ist genau, aber gut lesbar."
    },
    {
     "art": "wahl",
     "frage": "Welche Formulierung passt zu einem Ergebnis, bei dem eine Minderheit dagegen ist?",
     "opt": [
      "Lediglich ein knappes Viertel lehnt den Vorschlag ab.",
      "Ein knappes Viertel lehnt den Vorschlag überwiegend ab.",
      "Die Mehrheit lehnt ihn ab, nämlich ein Viertel."
     ],
     "loesung": 0,
     "erklaerung": "„Lediglich\" betont, dass es nur wenige sind. „Überwiegend\" und „Mehrheit\" passen nicht zu einem Viertel."
    },
    {
     "art": "wahl",
     "frage": "Wie stellst du zwei gegensätzliche Forumsbeiträge in einem Satz einander gegenüber?",
     "opt": [
      "Während eine Nutzerin das Homeoffice als Gewinn an Lebensqualität bezeichnet, befürchtet ein anderer Nutzer eine schleichende Vereinsamung.",
      "Eine Nutzerin sagt das, ein Nutzer sagt das andere.",
      "Beide haben irgendwie recht."
     ],
     "loesung": 0,
     "erklaerung": "„Während\" stellt zwei Positionen in einem Satzgefüge gegenüber — elegant und knapp."
    },
    {
     "art": "wahl",
     "frage": "Welcher Satz signalisiert Distanz zu einer Behauptung im Leserbrief?",
     "opt": [
      "Bekanntlich ist es so, dass Touristen die Altstadt zerstören.",
      "Dem Verfasser zufolge leide die Altstadt unter dem Massentourismus.",
      "Die Altstadt leidet unter dem Massentourismus, das ist Fakt."
     ],
     "loesung": 1,
     "erklaerung": "„Dem Verfasser zufolge\" plus Konjunktiv I schreibt die Aussage klar dem Verfasser zu."
    },
    {
     "art": "ordnen",
     "frage": "Bau den Satz zur Wiedergabe eines Leserbriefs.",
     "teile": [
      "Die",
      "Verfasserin",
      "vertritt",
      "die",
      "Auffassung,",
      "ein",
      "Handyverbot",
      "schütze",
      "die",
      "Kinder",
      "vor",
      "Ablenkung."
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
     "erklaerung": "Nach „die Auffassung,\" folgt ein uneingeleiteter Nebensatz mit Konjunktiv I und Verb an Position zwei."
    },
    {
     "art": "ordnen",
     "frage": "Bau den Satz zur Wiedergabe einer Umfrage.",
     "teile": [
      "Einer",
      "aktuellen",
      "Umfrage",
      "zufolge",
      "befürwortet",
      "die",
      "Mehrheit",
      "der",
      "Befragten",
      "eine",
      "autofreie",
      "Innenstadt."
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
     "erklaerung": "„Zufolge\" steht hinter dem Nomen im Dativ: „einer Umfrage zufolge\"."
    }
   ]
  },
  {
   "id": "tg1s3",
   "stufe": 2,
   "titel": "Argumentieren und abwägen",
   "kurz": "Zwar … jedoch, einerseits … andererseits — Gewicht verteilen statt aufzählen",
   "ziel": "Nach diesem Block gewichtest du Argumente, räumst Gegenargumente ein und kommst zu einem begründeten Urteil.",
   "zeichen": "⚖️",
   "farbe": "rot",
   "aufgaben": [
    {
     "art": "wahl",
     "frage": "Welcher Satz räumt ein Gegenargument ein und entkräftet es zugleich?",
     "opt": [
      "Zwar mag ein Tempolimit die Fahrzeit etwas verlängern, doch dieser Nachteil wiegt gering im Vergleich zum Gewinn an Sicherheit.",
      "Ein Tempolimit verlängert die Fahrzeit und ist sicher.",
      "Tempolimits sind gut, Punkt."
     ],
     "loesung": 0,
     "erklaerung": "„Zwar … doch\" ist das Grundmuster der Abwägung: Gegenargument anerkennen und dann gewichten."
    },
    {
     "art": "wahl",
     "frage": "Welcher Konnektor drückt aus, dass ein zusätzlicher Grund das Argument noch verstärkt?",
     "opt": [
      "zumal",
      "obwohl",
      "sofern"
     ],
     "loesung": 0,
     "erklaerung": "„Zumal\" fügt einen weiteren, verstärkenden Grund hinzu: „… zumal die Mieten ohnehin stark gestiegen sind\"."
    },
    {
     "art": "wahl",
     "frage": "Welcher Satz drückt eine Bedingung aus, unter der du einem Vorschlag zustimmst?",
     "opt": [
      "Ich halte das Pflichtjahr für sinnvoll, sofern es angemessen vergütet wird.",
      "Ich halte das Pflichtjahr für sinnvoll, zumal es vergütet wird.",
      "Ich halte das Pflichtjahr für sinnvoll, wohingegen es vergütet wird."
     ],
     "loesung": 0,
     "erklaerung": "„Sofern\" heißt „unter der Bedingung, dass\" — so formulierst du eine eingeschränkte Zustimmung."
    },
    {
     "art": "wahl",
     "frage": "Welcher Satz gewichtet ein Argument ausdrücklich?",
     "opt": [
      "Ein weiteres Argument ist der Lärm.",
      "Schwerer wiegt meines Erachtens jedoch die Frage der Gerechtigkeit.",
      "Der Lärm ist auch ein Punkt."
     ],
     "loesung": 1,
     "erklaerung": "„Schwerer wiegt\" macht klar, welches Argument für dich entscheidend ist."
    },
    {
     "art": "wahl",
     "frage": "Welche Formulierung leitet ein Gegenargument fair ein?",
     "opt": [
      "Kritiker wenden ein, eine Mietpreisbremse halte Investoren vom Wohnungsbau ab.",
      "Manche Leute haben keine Ahnung und meinen …",
      "Nur Egoisten sind dagegen."
     ],
     "loesung": 0,
     "erklaerung": "„Kritiker wenden ein\" ist sachlich und respektvoll; abwertende Formulierungen schwächen deine Argumentation."
    },
    {
     "art": "wahl",
     "frage": "Welcher Satz verbindet eine Behauptung mit einem passenden Beleg?",
     "opt": [
      "Dass Werbung das Essverhalten von Kindern beeinflusst, zeigt sich etwa daran, dass beworbene Produkte im Supermarkt häufiger im Einkaufswagen landen.",
      "Werbung beeinflusst Kinder, das weiß jeder.",
      "Werbung ist schlimm, weil sie schlimm ist."
     ],
     "loesung": 0,
     "erklaerung": "„Zeigt sich etwa daran, dass\" führt einen konkreten Beleg ein und vermeidet Scheinbegründungen."
    },
    {
     "art": "wahl",
     "frage": "Welcher Konnektor stellt zwei Sachverhalte als Gegensatz gegenüber?",
     "opt": [
      "wohingegen",
      "damit",
      "indem"
     ],
     "loesung": 0,
     "erklaerung": "„Wohingegen\" markiert den Kontrast: „Ältere schätzen die Ruhe, wohingegen Jüngere mehr Angebote wünschen.\""
    },
    {
     "art": "wahl",
     "frage": "Welches Urteil ist am besten abgewogen?",
     "opt": [
      "Die Rente mit siebzig ist absoluter Unsinn.",
      "Eine pauschale Rente mit siebzig halte ich für problematisch, ein flexibler Übergang erscheint mir hingegen durchaus sinnvoll.",
      "Vielleicht ja, vielleicht nein, ich weiß es nicht."
     ],
     "loesung": 1,
     "erklaerung": "Ein gutes C1-Urteil ist klar, aber differenziert: Es unterscheidet und schlägt eine Lösung vor."
    },
    {
     "art": "ordnen",
     "frage": "Bau einen abwägenden Satz.",
     "teile": [
      "Einerseits",
      "entlastet",
      "das",
      "Homeoffice",
      "die",
      "Pendler,",
      "andererseits",
      "fehlt",
      "der",
      "persönliche",
      "Austausch."
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
     "erklaerung": "Nach „einerseits\" und „andererseits\" auf Position eins folgt jeweils direkt das Verb."
    },
    {
     "art": "ordnen",
     "frage": "Bau den Satz, der zum Urteil führt.",
     "teile": [
      "Wägt",
      "man",
      "alle",
      "Argumente",
      "gegeneinander",
      "ab,",
      "überwiegen",
      "meiner",
      "Ansicht",
      "nach",
      "die",
      "Vorteile."
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
     "erklaerung": "Der Bedingungssatz ohne „wenn\" beginnt mit dem Verb; im Hauptsatz steht das Verb dann sofort danach."
    }
   ]
  },
  {
   "id": "tg1s4",
   "stufe": 2,
   "titel": "Gehobener, sachlicher Stil",
   "kurz": "Nominalstil, unpersönliche Formulierungen, präzise Wörter statt Alltagssprache",
   "ziel": "Nach diesem Block formulierst du sachlich und gehoben, ohne steif zu klingen, und ersetzt umgangssprachliche Wendungen durch passende Alternativen.",
   "zeichen": "🎩",
   "farbe": "lila",
   "aufgaben": [
    {
     "art": "wahl",
     "frage": "Welche Formulierung ist sachlicher als „Das ist echt ein Riesenproblem\"?",
     "opt": [
      "Das stellt ein erhebliches Problem dar.",
      "Das ist voll das Problem.",
      "Das ist ein mega Problem."
     ],
     "loesung": 0,
     "erklaerung": "„Ein erhebliches Problem darstellen\" ist präzise und passt zum schriftlichen Register."
    },
    {
     "art": "wahl",
     "frage": "Welche Nominalisierung passt zu „Wenn man die Innenstadt für Autos sperrt, …\"?",
     "opt": [
      "Durch die Sperrung der Innenstadt für Autos …",
      "Durch das Sperren machen der Innenstadt …",
      "Wegen Sperren Innenstadt …"
     ],
     "loesung": 0,
     "erklaerung": "„Die Sperrung\" ist die korrekte Nominalisierung; mit „durch\" wird daraus ein knapper Ausdruck des Mittels."
    },
    {
     "art": "wahl",
     "frage": "Welcher Satz ist unpersönlich formuliert?",
     "opt": [
      "Es ist zu befürchten, dass kleine Läden schließen müssen.",
      "Ich habe Angst, dass kleine Läden zumachen.",
      "Die kleinen Läden gehen dann halt pleite."
     ],
     "loesung": 0,
     "erklaerung": "„Es ist zu befürchten\" ist eine unpersönliche Konstruktion mit „sein\" plus „zu\" plus Infinitiv."
    },
    {
     "art": "wahl",
     "frage": "Welches Verb ersetzt „sagen\" in einer sachlichen Stellungnahme am besten, wenn jemand etwas kritisch anmerkt?",
     "opt": [
      "bemängeln",
      "quatschen",
      "meckern"
     ],
     "loesung": 0,
     "erklaerung": "„Bemängeln\" ist neutral und gehoben; „meckern\" und „quatschen\" sind umgangssprachlich."
    },
    {
     "art": "wahl",
     "frage": "Welche Wendung drückt sachlich aus, dass etwas zu einem Ergebnis führt?",
     "opt": [
      "Das führt zu einer spürbaren Entlastung der Familien.",
      "Dadurch haben die Familien es dann besser.",
      "Den Familien geht es halt dann gut."
     ],
     "loesung": 0,
     "erklaerung": "„Zu einer spürbaren Entlastung führen\" ist eine typische Nomen-Verb-Verbindung im gehobenen Stil."
    },
    {
     "art": "wahl",
     "frage": "Welcher Satz verwendet ein Partizipialattribut korrekt?",
     "opt": [
      "Die von der Stadt geplante Begrenzung der Touristenzahlen stößt auf Widerstand.",
      "Die Begrenzung, geplant von der Stadt die, stößt auf Widerstand.",
      "Die Stadt geplante Begrenzung stößt Widerstand."
     ],
     "loesung": 0,
     "erklaerung": "Das erweiterte Partizip „von der Stadt geplante\" steht zwischen Artikel und Nomen und ersetzt einen Relativsatz."
    },
    {
     "art": "wahl",
     "frage": "Welche Formulierung ist zu umgangssprachlich für eine Stellungnahme?",
     "opt": [
      "Meines Erachtens greift dieser Vorschlag zu kurz.",
      "Der Vorschlag ist doch total daneben.",
      "Dieser Vorschlag lässt einige Fragen offen."
     ],
     "loesung": 1,
     "erklaerung": "„Total daneben\" gehört ins Gespräch unter Freunden, nicht in einen sachlichen Text."
    },
    {
     "art": "wahl",
     "frage": "Welche Formulierung schwächt eine Behauptung angemessen ab?",
     "opt": [
      "Es spricht einiges dafür, dass ein Werbeverbot das Kaufverhalten verändert.",
      "Ein Werbeverbot ändert garantiert alles.",
      "Ein Werbeverbot ändert gar nichts, das ist sicher."
     ],
     "loesung": 0,
     "erklaerung": "„Es spricht einiges dafür\" ist vorsichtig, aber überzeugend — so vermeidest du unbelegte Pauschalurteile."
    },
    {
     "art": "ordnen",
     "frage": "Bau einen Satz im Nominalstil.",
     "teile": [
      "Die",
      "Einführung",
      "eines",
      "Pflichtjahres",
      "würde",
      "zu",
      "einer",
      "Stärkung",
      "des",
      "gesellschaftlichen",
      "Zusammenhalts",
      "beitragen."
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
     "erklaerung": "„Zu etwas beitragen\" mit zwei Nominalisierungen: kompakt und typisch für den gehobenen Stil."
    },
    {
     "art": "ordnen",
     "frage": "Bau einen unpersönlichen Satz.",
     "teile": [
      "Es",
      "bleibt",
      "abzuwarten,",
      "ob",
      "sich",
      "diese",
      "Maßnahme",
      "in",
      "der",
      "Praxis",
      "bewährt."
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
     "erklaerung": "„Es bleibt abzuwarten, ob …\" drückt sachlich Zweifel aus, ohne das Wort „ich\" zu verwenden."
    }
   ]
  }
 ],
 "teile": [
  {
   "nr": 1,
   "art": "mitteilung",
   "name": "Erörterung und Stellungnahme",
   "kurz": "Zwei Themen zur Wahl, etwa 350 Wörter",
   "was": "In jeder Runde stehen zwei Themen — wie in der Prüfung. Schreib eines oder beide. Zu jedem gibt es einen Mustertext.",
   "tipp": "Plane fünf Minuten: Wer vertritt was? Welche Erfahrung passt? Was ist dein Fazit? Dann erst schreiben.",
   "zeichen": "🖋️",
   "farbe": "turq",
   "punkte": 48,
   "runden": [
    {
     "id": "tg1sr1",
     "titel": "Runde 1",
     "aufgaben": [
      {
       "id": "g1sa1",
       "situation": "In der Stadtzeitung ist ein Leserbrief zur geplanten Öffnung der Geschäfte an Sonntagen erschienen. Die Redaktion bittet die Leser um Stellungnahmen. Schreiben Sie einen Beitrag.",
       "eingang": {
        "von": "Leserbrief in der Stadtzeitung",
        "betreff": "Sonntagsöffnung: Wem nützt sie wirklich?",
        "text": "Der Stadtrat will den Geschäften in der Innenstadt erlauben, künftig an jedem zweiten Sonntag zu öffnen. Angeblich soll das die Innenstadt beleben und den Händlern gegen den Onlinehandel helfen. Ich halte das für einen Irrweg. Der Sonntag ist der einzige Tag, an dem Familien, Freunde und Vereine verlässlich gemeinsam Zeit haben. Wer im Einzelhandel arbeitet, verliert genau diesen Tag. Außerdem glaube ich nicht, dass die Menschen sonntags mehr Geld ausgeben, sie verteilen ihre Einkäufe nur anders. Am Ende profitieren die großen Ketten, während kleine Läden sich das zusätzliche Personal gar nicht leisten können. Ich bitte den Stadtrat dringend, diesen Plan noch einmal zu überdenken. Edith Brammertz"
       },
       "sorte": "aufsatz",
       "an": null,
       "punkte": [
        {
         "nr": 1,
         "was": "Position wiedergeben",
         "hinweis": "Geben Sie die Meinung der Leserbriefschreiberin in eigenen Worten wieder."
        },
        {
         "nr": 2,
         "was": "Argumente dafür und dagegen",
         "hinweis": "Wägen Sie Vor- und Nachteile der Sonntagsöffnung gegeneinander ab."
        },
        {
         "nr": 3,
         "was": "Eigene Erfahrung",
         "hinweis": "Berichten Sie von eigenen Erfahrungen, zum Beispiel aus Ihrem Heimatland."
        },
        {
         "nr": 4,
         "was": "Begründete Stellungnahme",
         "hinweis": "Nehmen Sie begründet Stellung und machen Sie einen Vorschlag."
        }
       ],
       "muster": "Ob Geschäfte auch am Sonntag öffnen sollten, wird in unserer Stadt seit Wochen leidenschaftlich diskutiert. Anlass ist der Plan des Stadtrats, den Läden in der Innenstadt an jedem zweiten Sonntag die Öffnung zu erlauben. Im Folgenden möchte ich auf den Leserbrief von Frau Brammertz eingehen und die wichtigsten Argumente abwägen.\nDie Verfasserin vertritt die Auffassung, der Sonntag sei der einzige Tag, an dem Familien und Freunde verlässlich gemeinsam Zeit hätten. Beschäftigte im Einzelhandel würden genau diesen Tag verlieren. Zudem bezweifelt sie, dass die Kunden sonntags tatsächlich mehr ausgäben; vielmehr profitierten am Ende vor allem die großen Ketten.\nZwar ist nicht von der Hand zu weisen, dass eine Sonntagsöffnung gewisse Vorteile mit sich bringt. Berufstätige, die unter der Woche kaum Zeit haben, könnten in Ruhe einkaufen, und die Innenstadt würde an einem sonst eher stillen Tag belebt. Auch Cafés und Restaurants dürften davon profitieren, und für Touristen wäre die Stadt am Wochenende attraktiver. Schwerer wiegen meines Erachtens jedoch die Nachteile. Die Argumentation von Frau Brammertz überzeugt mich vor allem in einem Punkt: Ein freier Tag, den alle gemeinsam haben, ist für das soziale Leben von unschätzbarem Wert. Hinzu kommt, dass kleine Fachgeschäfte, die ohnehin unter erheblichem wirtschaftlichem Druck stehen, kaum zusätzliches Personal bezahlen können und dadurch weiter ins Hintertreffen geraten.\nDiese Einschätzung beruht auch auf eigener Erfahrung. In meinem Heimatland sind die meisten Geschäfte an sieben Tagen in der Woche geöffnet. Als ich nach Deutschland kam, empfand ich die geschlossenen Läden am Sonntag zunächst als lästig. Inzwischen schätze ich diesen Tag sehr, weil er zur Ruhe zwingt und Raum für Ausflüge, Besuche und Vereinsaktivitäten lässt. Eine Freundin, die als Verkäuferin arbeitet, hat mir zudem erzählt, wie schwer es für sie früher war, Familie und Arbeit am Wochenende zu vereinbaren.\nWägt man die genannten Gesichtspunkte gegeneinander ab, so komme ich zu dem Ergebnis, dass eine regelmäßige Sonntagsöffnung nicht wünschenswert ist. Sinnvoller erschiene es mir, die Innenstadt durch einige wenige verkaufsoffene Sonntage mit besonderem Programm zu beleben, etwa bei Stadtfesten. Auf diese Weise ließe sich die Attraktivität der Innenstadt steigern, ohne den gemeinsamen Ruhetag grundsätzlich infrage zu stellen.",
       "woerter": 350,
       "hilfen": [
        "Anlass ist der Plan des Stadtrats, …",
        "Die Verfasserin vertritt die Auffassung, … sei …",
        "Zwar ist nicht von der Hand zu weisen, dass …",
        "Schwerer wiegen meines Erachtens jedoch …",
        "Diese Einschätzung beruht auch auf eigener Erfahrung.",
        "Wägt man die genannten Gesichtspunkte gegeneinander ab, so …"
       ],
       "erklaerung": "Der Text nennt den Anlass, gibt den Leserbrief im Konjunktiv I wieder, wägt mit „zwar … jedoch\" ab, stützt das Urteil mit eigener Erfahrung und endet mit einem konkreten Kompromissvorschlag.",
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
       "c1allg": true,
       "level": "C1",
       "platzhalter": "Schreib hier deinen Text …"
      },
      {
       "id": "g1sa2",
       "situation": "Die Stadt plant, auf fast allen Straßen innerhalb der Stadt Tempo dreißig einzuführen, und hat dazu eine Umfrage durchgeführt. Im Bürgerforum der Stadt sollen Einwohner ihre Meinung äußern. Schreiben Sie einen Beitrag.",
       "eingang": {
        "von": "Umfrage der Stadt",
        "betreff": "Tempo dreißig in der ganzen Stadt?",
        "text": "Die Stadtverwaltung möchte auf allen Straßen mit Ausnahme der großen Hauptverkehrsachsen Tempo dreißig einführen. Ziel sei es, Unfälle zu verringern, den Lärm zu senken und Fußgänger sowie Radfahrer besser zu schützen. In einer Umfrage unter rund zweitausend Einwohnern sprach sich knapp die Hälfte für den Plan aus. Etwa ein Drittel lehnt ihn ab und befürchtet längere Fahrzeiten, mehr Staus und Nachteile für Handwerker und Lieferdienste. Der Rest ist unentschieden. Besonders deutlich fiel die Zustimmung bei Eltern und älteren Menschen aus, während Berufspendler mehrheitlich dagegen sind. Die Stadt bittet nun alle Bürger, sich im Forum zu äußern."
       },
       "sorte": "aufsatz",
       "an": null,
       "punkte": [
        {
         "nr": 1,
         "was": "Ergebnis wiedergeben",
         "hinweis": "Fassen Sie den Plan und das Umfrageergebnis kurz zusammen."
        },
        {
         "nr": 2,
         "was": "Argumente dafür und dagegen",
         "hinweis": "Stellen Sie Vor- und Nachteile von Tempo dreißig dar."
        },
        {
         "nr": 3,
         "was": "Eigene Erfahrung",
         "hinweis": "Beschreiben Sie Ihre eigenen Erfahrungen im Straßenverkehr."
        },
        {
         "nr": 4,
         "was": "Begründete Stellungnahme",
         "hinweis": "Nehmen Sie Stellung und begründen Sie Ihre Meinung."
        }
       ],
       "muster": "Kaum ein Vorhaben der Stadtverwaltung hat in letzter Zeit so viele Reaktionen ausgelöst wie der Plan, fast überall in der Stadt Tempo dreißig einzuführen. Ich möchte im Folgenden das Umfrageergebnis kurz einordnen und anschließend darlegen, warum ich den Vorschlag im Grundsatz unterstütze.\nLaut der Umfrage der Stadt befürwortet knapp die Hälfte der Befragten das Vorhaben, während etwa ein Drittel es ablehnt. Auffällig ist, dass vor allem Eltern und ältere Menschen zustimmen, wohingegen Berufspendler mehrheitlich dagegen sind. Die Gegner befürchten, der Verkehr werde langsamer und es entstünden zusätzliche Staus.\nFür ein niedrigeres Tempo spricht in erster Linie die Sicherheit. Bei geringerer Geschwindigkeit verkürzt sich der Bremsweg erheblich, und Unfälle verlaufen deutlich glimpflicher. Hinzu kommt der Lärmschutz, der gerade für Anwohner an dicht bebauten Straßen eine spürbare Entlastung bedeuten würde. Nicht zuletzt würden sich mehr Menschen trauen, kurze Wege mit dem Fahrrad oder zu Fuß zurückzulegen, was wiederum den Autoverkehr verringern könnte. Die Bedenken der Kritiker sind allerdings nicht völlig unbegründet. Wer täglich mit dem Auto zur Arbeit fährt oder als Handwerker zahlreiche Termine wahrnehmen muss, wird die Veränderung zunächst als Einschränkung empfinden. Erfahrungen aus anderen Städten deuten jedoch darauf hin, dass sich die Fahrzeiten innerhalb der Stadt kaum verlängern, da ohnehin vor allem Ampeln und Kreuzungen das Tempo bestimmen. Der Zeitverlust dürfte sich daher in engen Grenzen halten.\nAuch meine persönliche Erfahrung bestärkt mich in meiner Haltung. Ich wohne an einer engen Durchgangsstraße, auf der bislang fünfzig gefahren werden darf. Meine Kinder gehen jeden Morgen zu Fuß zur Schule, und ich bin jedes Mal erleichtert, wenn sie heil angekommen sind. Seit in der Nachbarstraße testweise Tempo dreißig gilt, ist es dort merklich ruhiger geworden, und ich habe nicht den Eindruck, dass ich mit dem Auto spürbar länger unterwegs bin.\nAlles in allem überwiegen meiner Ansicht nach eindeutig die Vorteile. Ich spreche mich daher für den Plan der Stadt aus, möchte aber anregen, die großen Verbindungsstraßen weiterhin von der Regelung auszunehmen und die Ampelschaltungen anzupassen. Auf diese Weise ließen sich die berechtigten Interessen der Pendler und Lieferdienste berücksichtigen, ohne auf mehr Sicherheit und Ruhe in den Wohnvierteln zu verzichten.",
       "woerter": 350,
       "hilfen": [
        "Laut der Umfrage der Stadt befürwortet knapp die Hälfte …",
        "Auffällig ist, dass …, wohingegen …",
        "Für … spricht in erster Linie …",
        "Die Bedenken der Kritiker sind allerdings nicht völlig unbegründet.",
        "Auch meine persönliche Erfahrung bestärkt mich in meiner Haltung.",
        "Alles in allem überwiegen meiner Ansicht nach …"
       ],
       "erklaerung": "Der Beitrag versprachlicht die Umfragewerte ohne Zahlenkolonnen, nimmt die Bedenken der Gegner ernst, belegt die eigene Position mit einer konkreten Erfahrung und schließt mit einem Kompromissvorschlag.",
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
       "c1allg": true,
       "level": "C1",
       "platzhalter": "Schreib hier deinen Text …"
      }
     ]
    },
    {
     "id": "tg1sr2",
     "titel": "Runde 2",
     "aufgaben": [
      {
       "id": "g1sa3",
       "situation": "In einem Onlineforum für Eltern wird darüber diskutiert, ob Smartphones an Schulen ganz verboten werden sollten. Sie haben die beiden folgenden Beiträge gelesen und möchten selbst einen ausführlichen Beitrag schreiben.",
       "eingang": {
        "von": "Forum „Familie und Schule\"",
        "betreff": "Handyverbot an Schulen — ja oder nein?",
        "text": "Beitrag von Sabine K.: „An der Schule meiner Tochter gilt seit einem Jahr ein striktes Handyverbot, auch in den Pausen. Seitdem spielen die Kinder wieder miteinander, statt stumm auf ihre Bildschirme zu starren. Die Lehrer berichten von besserer Konzentration und weniger Streit in den Klassenchats. Ich kann jeder Schule nur empfehlen, diesen Schritt zu gehen.\"\nBeitrag von Malte R.: „Ein Verbot ist bequem, aber kurzsichtig. Unsere Kinder wachsen nun einmal mit dem Smartphone auf und müssen lernen, vernünftig damit umzugehen. Das gelingt nicht, indem man das Gerät einfach wegsperrt. Schule sollte Medienkompetenz vermitteln, statt das Problem auf die Zeit nach Schulschluss zu verschieben.\""
       },
       "sorte": "aufsatz",
       "an": null,
       "punkte": [
        {
         "nr": 1,
         "was": "Positionen wiedergeben",
         "hinweis": "Geben Sie die beiden Meinungen in eigenen Worten wieder."
        },
        {
         "nr": 2,
         "was": "Argumente dafür und dagegen",
         "hinweis": "Wägen Sie die Argumente für und gegen ein Verbot ab."
        },
        {
         "nr": 3,
         "was": "Eigene Erfahrung",
         "hinweis": "Berichten Sie von eigenen Erfahrungen oder Beobachtungen."
        },
        {
         "nr": 4,
         "was": "Begründete Stellungnahme",
         "hinweis": "Formulieren Sie Ihre eigene Position und begründen Sie sie."
        }
       ],
       "muster": "Die Frage, ob Smartphones an Schulen verboten werden sollten, beschäftigt derzeit viele Eltern, Lehrer und Schulleitungen. In diesem Forum stehen sich zwei Positionen gegenüber, die ich zunächst kurz zusammenfassen und anschließend gegeneinander abwägen möchte.\nSabine K. berichtet, an der Schule ihrer Tochter gelte seit einem Jahr ein striktes Handyverbot. Seitdem spielten die Kinder in den Pausen wieder miteinander, die Konzentration im Unterricht habe sich verbessert und es gebe weniger Streit. Malte R. hält ein Verbot hingegen für kurzsichtig. Seiner Ansicht nach müssten Kinder lernen, verantwortungsvoll mit dem Smartphone umzugehen, und genau diese Aufgabe dürfe sich die Schule nicht ersparen.\nBeide Beiträge enthalten einen wahren Kern. Für ein Verbot spricht vor allem, dass die ständige Erreichbarkeit nachweislich ablenkt und den direkten Kontakt zwischen den Kindern verdrängt. Gerade jüngere Schüler sind kaum in der Lage, der Versuchung allein zu widerstehen. Zudem entlastet eine klare Regel die Lehrer, die sonst ständig über Ausnahmen verhandeln müssten. Andererseits lässt sich nicht bestreiten, dass digitale Geräte aus dem Alltag nicht mehr wegzudenken sind. Ein vollständiges Verbot ändert nichts daran, dass Kinder nach Schulschluss stundenlang online sind, ohne je gelernt zu haben, Informationen kritisch zu prüfen oder sich vor Mobbing zu schützen.\nIch selbst habe beide Seiten erlebt. Mein Sohn besuchte zunächst eine Grundschule, an der Handys ausnahmslos in der Tasche bleiben mussten, was dort gut funktionierte. An seiner jetzigen Schule sind Smartphones in den Pausen erlaubt, werden aber regelmäßig im Unterricht eingesetzt, etwa für Recherchen oder Umfragen. Dabei sprechen die Lehrer auch offen über Datenschutz und Falschmeldungen. Mein Eindruck ist, dass er dadurch deutlich bewusster mit seinem Gerät umgeht und mir inzwischen sogar erklärt, woran man unseriöse Nachrichten erkennt.\nAbschließend möchte ich festhalten, dass ich ein starres Verbot für alle Altersstufen nicht für die beste Lösung halte. Sinnvoller erschiene mir eine abgestufte Regelung: In der Grundschule sollten Smartphones tabu sein, während ältere Schüler sie in klar festgelegten Situationen nutzen dürfen. Entscheidend ist meines Erachtens, dass Medienkompetenz verbindlich auf dem Stundenplan steht. Nur so werden Kinder auf eine Welt vorbereitet, in der das Smartphone ein selbstverständlicher Begleiter ist.",
       "woerter": 350,
       "hilfen": [
        "In diesem Forum stehen sich zwei Positionen gegenüber.",
        "X berichtet, an der Schule … gelte …",
        "Y hält … hingegen für …",
        "Beide Beiträge enthalten einen wahren Kern.",
        "Andererseits lässt sich nicht bestreiten, dass …",
        "Sinnvoller erschiene mir eine abgestufte Regelung."
       ],
       "erklaerung": "Der Beitrag referiert beide Forumsbeiträge im Konjunktiv I, erkennt den wahren Kern beider Seiten an, nutzt eine eigene Erfahrung mit beiden Modellen und schlägt eine differenzierte Lösung vor.",
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
       "c1allg": true,
       "level": "C1",
       "platzhalter": "Schreib hier deinen Text …"
      },
      {
       "id": "g1sa4",
       "situation": "Eine Wirtschaftszeitung hat eine Leserumfrage zum geplanten gesetzlichen Recht auf Homeoffice veröffentlicht und dazu zwei Meinungen abgedruckt. Die Redaktion bittet um Zuschriften. Schreiben Sie einen Beitrag.",
       "eingang": {
        "von": "Umfrage der Wirtschaftszeitung „Arbeit heute\"",
        "betreff": "Brauchen wir ein Recht auf Homeoffice?",
        "text": "Die Regierung prüft, ob Beschäftigte künftig einen gesetzlichen Anspruch auf mindestens zwei Tage Homeoffice pro Woche erhalten sollen, sofern ihre Tätigkeit es zulässt. Wir haben dazu zwei Stimmen eingeholt.\nEine Projektleiterin aus einem Versicherungsunternehmen sagt: „Ohne das tägliche Pendeln habe ich jede Woche fast einen ganzen Tag gewonnen. Ich arbeite konzentrierter und bin zufriedener.\"\nEin mittelständischer Unternehmer warnt dagegen: „Ein Gesetz nimmt uns jede Flexibilität. Gerade neue Mitarbeiter lernen am meisten, wenn sie ihren Kollegen über die Schulter schauen können. Das lässt sich nicht per Video ersetzen.\""
       },
       "sorte": "aufsatz",
       "an": null,
       "punkte": [
        {
         "nr": 1,
         "was": "Positionen wiedergeben",
         "hinweis": "Geben Sie die beiden Meinungen in eigenen Worten wieder."
        },
        {
         "nr": 2,
         "was": "Argumente dafür und dagegen",
         "hinweis": "Erörtern Sie Vor- und Nachteile eines gesetzlichen Anspruchs."
        },
        {
         "nr": 3,
         "was": "Eigene Erfahrung",
         "hinweis": "Schildern Sie eigene Erfahrungen mit Homeoffice oder Präsenzarbeit."
        },
        {
         "nr": 4,
         "was": "Begründete Stellungnahme",
         "hinweis": "Nehmen Sie begründet Stellung zur Frage eines gesetzlichen Rechts."
        }
       ],
       "muster": "Seit einigen Jahren gehört das Arbeiten von zu Hause für viele Beschäftigte zum Alltag. Nun wird darüber diskutiert, ob daraus ein gesetzlich verankertes Recht werden soll. Im Folgenden möchte ich die beiden in der Zeitung abgedruckten Meinungen darstellen und anschließend meine eigene Position begründen.\nEine Projektleiterin berichtet, sie gewinne durch den Wegfall des Pendelns jede Woche beinahe einen ganzen Tag. Im Homeoffice arbeite sie konzentrierter und sei insgesamt zufriedener. Ein Unternehmer warnt hingegen, ein Gesetz nehme den Betrieben jede Flexibilität. Vor allem neue Mitarbeiter seien darauf angewiesen, von erfahrenen Kollegen direkt zu lernen, was sich per Video nicht ersetzen lasse.\nFür einen gesetzlichen Anspruch spricht zunächst, dass Beschäftigte nicht länger vom Wohlwollen einzelner Vorgesetzter abhängig wären. Zudem entlastet das Homeoffice die Straßen und öffentlichen Verkehrsmittel und erleichtert es Eltern, Beruf und Familie zu vereinbaren. Gleichwohl sind die Einwände des Unternehmers ernst zu nehmen. Gerade kleinere Betriebe sind auf kurze Wege und spontane Absprachen angewiesen. Hinzu kommt, dass ein starres Gesetz kaum zwischen den sehr unterschiedlichen Branchen und Tätigkeiten unterscheiden kann. Darüber hinaus besteht die Gefahr, dass der persönliche Zusammenhalt im Team leidet, wenn Kollegen sich nur noch auf dem Bildschirm begegnen.\nMeine eigene Erfahrung bestätigt beide Sichtweisen. In meiner Firma dürfen wir seit einiger Zeit an zwei Tagen pro Woche von zu Hause arbeiten. An diesen Tagen erledige ich konzentrierte Schreibarbeiten deutlich schneller als im lauten Großraumbüro. Als im vergangenen Jahr eine neue Kollegin begann, merkte ich jedoch, wie schwer es ihr fiel, sich nur über Videokonferenzen einzuarbeiten. Viele Fragen, die man im Büro nebenbei klärt, blieben bei ihr tagelang offen. Erst als wir vereinbarten, in ihren ersten Wochen gemeinsam ins Büro zu kommen, fand sie sich zurecht.\nWägt man die Argumente gegeneinander ab, halte ich einen gesetzlichen Anspruch grundsätzlich für sinnvoll, zumal er die Arbeitswelt fairer machen würde. Allerdings sollte das Gesetz Ausnahmen zulassen, etwa für die Einarbeitungszeit oder für kleine Betriebe mit besonderen Abläufen. Entscheidend ist meines Erachtens, dass Arbeitgeber und Beschäftigte gemeinsam Regeln vereinbaren, die zu ihrem Betrieb passen. So ließen sich die Vorteile der Heimarbeit nutzen, ohne den Zusammenhalt im Team aufs Spiel zu setzen.",
       "woerter": 350,
       "hilfen": [
        "Im Folgenden möchte ich die beiden Meinungen darstellen.",
        "X berichtet, sie gewinne …",
        "Y warnt hingegen, ein Gesetz nehme …",
        "Gleichwohl sind die Einwände … ernst zu nehmen.",
        "Meine eigene Erfahrung bestätigt beide Sichtweisen.",
        "…, zumal er die Arbeitswelt fairer machen würde."
       ],
       "erklaerung": "Die Stellungnahme gibt beide Stimmen im Konjunktiv I wieder, verbindet Argumente mit „gleichwohl\" und „darüber hinaus\", zeigt mit einer eigenen Erfahrung beide Seiten und kommt zu einem eingeschränkten Ja mit konkreten Bedingungen.",
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
       "c1allg": true,
       "level": "C1",
       "platzhalter": "Schreib hier deinen Text …"
      }
     ]
    },
    {
     "id": "tg1sr3",
     "titel": "Runde 3",
     "aufgaben": [
      {
       "id": "g1sa5",
       "situation": "Die Altstadt Ihrer Stadt wird jedes Jahr von immer mehr Touristen besucht. Die Stadtverwaltung schlägt vor, die Zahl der Besucher zu begrenzen. In der Stadtzeitung ist dazu ein Leserbrief erschienen. Schreiben Sie eine Stellungnahme.",
       "eingang": {
        "von": "Leserbrief in der Stadtzeitung",
        "betreff": "Unsere Altstadt gehört auch uns",
        "text": "Als Bewohner der Altstadt erlebe ich jeden Sommer, wie sich unser Viertel in einen Freizeitpark verwandelt. Reisegruppen schieben sich durch die engen Gassen, Wohnungen werden in Ferienapartments umgewandelt, und die Bäckerei an der Ecke musste einem Souvenirladen weichen. Ich begrüße deshalb den Vorschlag der Stadt, die Zahl der Reisebusse zu begrenzen und für Tagesgäste eine Eintrittsgebühr zu erheben. Natürlich leben viele Betriebe vom Tourismus. Aber wenn hier niemand mehr wohnen will, verliert die Altstadt genau das, was die Besucher an ihr schätzen. Konrad Elsner"
       },
       "sorte": "aufsatz",
       "an": null,
       "punkte": [
        {
         "nr": 1,
         "was": "Position wiedergeben",
         "hinweis": "Fassen Sie die Meinung des Leserbriefschreibers zusammen."
        },
        {
         "nr": 2,
         "was": "Argumente dafür und dagegen",
         "hinweis": "Wägen Sie Vor- und Nachteile einer Begrenzung des Tourismus ab."
        },
        {
         "nr": 3,
         "was": "Eigene Erfahrung",
         "hinweis": "Berichten Sie von eigenen Erfahrungen als Tourist oder Anwohner."
        },
        {
         "nr": 4,
         "was": "Begründete Stellungnahme",
         "hinweis": "Nehmen Sie Stellung zum Vorschlag der Stadt und begründen Sie Ihre Meinung."
        }
       ],
       "muster": "Die malerische Altstadt ist das Aushängeschild unserer Stadt. Gerade deshalb wird derzeit kontrovers diskutiert, ob die Zahl der Besucher begrenzt werden sollte. Ausgehend vom Leserbrief von Herrn Elsner möchte ich im Folgenden die wichtigsten Argumente beleuchten und zu einem eigenen Urteil kommen.\nDer Verfasser, selbst Bewohner der Altstadt, beklagt, sein Viertel verwandle sich jeden Sommer in einen Freizeitpark. Wohnungen würden zu Ferienapartments, alteingesessene Geschäfte müssten Souvenirläden weichen. Er begrüßt daher den Vorschlag, Reisebusse zu begrenzen und von Tagesgästen eine Gebühr zu verlangen, da die Altstadt sonst ausgerechnet das verliere, was Besucher an ihr schätzten.\nDie Argumentation ist in vielerlei Hinsicht nachvollziehbar. Wenn ein Viertel nur noch als Kulisse dient, verliert es seinen Charakter, und die Lebensqualität der Anwohner sinkt erheblich. Eine maßvolle Steuerung der Besucherströme könnte hier Abhilfe schaffen und gleichzeitig dafür sorgen, dass sich die Gäste selbst wohler fühlen. Denn auch für Touristen ist es wenig reizvoll, sich durch überfüllte Gassen zu drängen. Allerdings darf nicht übersehen werden, dass zahlreiche Arbeitsplätze in Gastronomie, Hotellerie und Handel vom Tourismus abhängen. Eine Eintrittsgebühr könnte zudem den Eindruck erwecken, die Stadt wolle Gäste abschrecken, was ihrem Ruf schaden würde. Fraglich ist außerdem, wie eine solche Gebühr in der Praxis kontrolliert werden soll, ohne dass lange Warteschlangen entstehen.\nIch selbst habe vor einigen Jahren eine berühmte Inselstadt im Süden besucht, in der sich Tagesgäste vorher anmelden und eine kleine Gebühr zahlen müssen. Anfangs war ich skeptisch, doch vor Ort war ich positiv überrascht. Die Gassen waren zwar belebt, aber nicht überfüllt, und man konnte die Atmosphäre tatsächlich genießen. Gleichzeitig erzählte mir eine Kellnerin, dass das Geld aus der Gebühr in die Pflege der historischen Gebäude fließe, was die Akzeptanz bei den Einheimischen erhöht habe.\nNach Abwägung aller Gesichtspunkte unterstütze ich den Vorschlag der Stadt, allerdings mit Einschränkungen. Eine moderate Gebühr für Tagesgäste halte ich für vertretbar, sofern die Einnahmen nachvollziehbar der Altstadt zugutekommen. Ebenso wichtig erscheint mir jedoch, die Umwandlung von Wohnungen in Ferienapartments strenger zu regeln. Nur wenn in der Altstadt weiterhin Menschen leben, bleibt sie ein lebendiger Ort und nicht bloß eine schöne Fassade.",
       "woerter": 350,
       "hilfen": [
        "Ausgehend vom Leserbrief von … möchte ich …",
        "Der Verfasser beklagt, sein Viertel verwandle sich …",
        "Die Argumentation ist in vielerlei Hinsicht nachvollziehbar.",
        "Allerdings darf nicht übersehen werden, dass …",
        "Nach Abwägung aller Gesichtspunkte …",
        "…, sofern die Einnahmen … zugutekommen."
       ],
       "erklaerung": "Der Text gibt den Leserbrief distanziert wieder, stellt wirtschaftliche Interessen und Lebensqualität gegeneinander, stützt die Bewertung mit einer Reiseerfahrung und formuliert eine Zustimmung unter klaren Bedingungen.",
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
       "c1allg": true,
       "level": "C1",
       "platzhalter": "Schreib hier deinen Text …"
      },
      {
       "id": "g1sa6",
       "situation": "In einem Onlineforum einer überregionalen Zeitung wird über ein verpflichtendes soziales Jahr für junge Leute diskutiert. Sie haben die beiden folgenden Beiträge gelesen und möchten einen eigenen Beitrag schreiben.",
       "eingang": {
        "von": "Forum „Gesellschaft im Gespräch\"",
        "betreff": "Ein Pflichtjahr für alle jungen Leute?",
        "text": "Beitrag von Gregor W.: „Ein Jahr im Pflegeheim, bei der Feuerwehr oder im Naturschutz würde jedem jungen Menschen guttun. Man lernt Menschen kennen, denen man sonst nie begegnet wäre, und erfährt, wie wichtig Zusammenhalt ist. Außerdem fehlen in der Pflege überall Hände.\"\nBeitrag von Leonie F.: „Junge Leute haben schon genug Druck. Warum sollen ausgerechnet sie die Lücken stopfen, die die Politik seit Jahren nicht schließt? Wer sich engagieren will, kann das schon heute freiwillig tun. Ein Zwang macht aus Hilfsbereitschaft nur Widerwillen, und die Pflege braucht Fachkräfte, keine unwilligen Aushilfen.\""
       },
       "sorte": "aufsatz",
       "an": null,
       "punkte": [
        {
         "nr": 1,
         "was": "Positionen wiedergeben",
         "hinweis": "Geben Sie die beiden Meinungen in eigenen Worten wieder."
        },
        {
         "nr": 2,
         "was": "Argumente dafür und dagegen",
         "hinweis": "Wägen Sie die Argumente für und gegen ein Pflichtjahr ab."
        },
        {
         "nr": 3,
         "was": "Eigene Erfahrung",
         "hinweis": "Berichten Sie von eigenen Erfahrungen mit Ehrenamt oder sozialem Engagement."
        },
        {
         "nr": 4,
         "was": "Begründete Stellungnahme",
         "hinweis": "Nehmen Sie begründet Stellung und machen Sie einen Vorschlag."
        }
       ],
       "muster": "Immer wieder wird gefordert, junge Menschen nach der Schule zu einem verpflichtenden Jahr im sozialen Bereich heranzuziehen. In diesem Forum vertreten zwei Teilnehmer gegensätzliche Standpunkte, die ich im Folgenden darstellen und gegeneinander abwägen möchte.\nGregor W. ist der Meinung, ein Jahr in einer sozialen Einrichtung würde jedem jungen Menschen guttun. Man begegne dort Menschen, die man sonst nie kennengelernt hätte, und erfahre, wie wichtig gesellschaftlicher Zusammenhalt sei. Zudem verweist er auf den Personalmangel in der Pflege. Leonie F. lehnt einen solchen Zwang dagegen entschieden ab. Sie gibt zu bedenken, junge Leute stünden ohnehin unter großem Druck und sollten nicht die Versäumnisse der Politik ausgleichen. Ein Zwang verwandle Hilfsbereitschaft in Widerwillen.\nFür ein Pflichtjahr spricht zweifellos, dass es Menschen aus ganz unterschiedlichen Milieus zusammenbringen könnte. In einer Gesellschaft, in der viele nur noch in ihrer eigenen Blase leben, ist das ein nicht zu unterschätzender Wert. Darüber hinaus könnten junge Leute in dieser Zeit herausfinden, welcher Beruf wirklich zu ihnen passt. Andererseits teile ich die Sorge, dass ein Zwangsdienst wenig motivierte Helfer hervorbringt. Gerade in der Pflege, wo man mit kranken und hilfsbedürftigen Menschen arbeitet, ist innere Bereitschaft unverzichtbar. Außerdem wäre es fatal, wenn das Pflichtjahr als billiger Ersatz für gut bezahlte Fachkräfte missbraucht würde.\nIch selbst habe nach meinem Schulabschluss freiwillig ein Jahr in einer Einrichtung für Menschen mit Behinderung gearbeitet. Diese Zeit hat mich nachhaltig geprägt, und ich habe gelernt, Geduld zu haben und Verantwortung zu übernehmen. Allerdings habe ich dort auch zwei junge Männer erlebt, die nur dabei waren, weil ihre Eltern darauf bestanden hatten. Ihre Unlust war für alle Beteiligten spürbar, nicht zuletzt für die Bewohner, die sehr feinfühlig darauf reagierten. Hilfe, die nur aus Pflicht geleistet wird, kommt bei den Betroffenen selten als echte Zuwendung an.\nZusammenfassend lässt sich festhalten, dass die Grundidee durchaus etwas für sich hat, ein Pflichtjahr in seiner reinen Form aber zu kurz greift. Ich plädiere vielmehr dafür, die bestehenden Freiwilligendienste deutlich attraktiver zu machen, etwa durch eine angemessene Vergütung, kostenlose Fahrkarten und eine Anrechnung auf Ausbildung oder Studium. Auf diese Weise ließen sich mehr junge Menschen für ein soziales Jahr gewinnen, ohne ihnen die Entscheidung abzunehmen.",
       "woerter": 350,
       "hilfen": [
        "In diesem Forum vertreten zwei Teilnehmer gegensätzliche Standpunkte.",
        "X ist der Meinung, … würde …",
        "Y gibt zu bedenken, …",
        "Für … spricht zweifellos, dass …",
        "Andererseits teile ich die Sorge, dass …",
        "Ich plädiere vielmehr dafür, …"
       ],
       "erklaerung": "Der Beitrag gibt beide Positionen mit verschiedenen Redeeinleitungen wieder, gewichtet Chancen und Risiken, zeigt mit eigener Erfahrung beide Seiten des Themas und schlägt eine Alternative zum Zwang vor.",
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
       "c1allg": true,
       "level": "C1",
       "platzhalter": "Schreib hier deinen Text …"
      }
     ]
    },
    {
     "id": "tg1sr4",
     "titel": "Runde 4",
     "aufgaben": [
      {
       "id": "g1sa7",
       "situation": "In der Stadtzeitung ist ein Leserbrief zu einem möglichen Werbeverbot für Süßigkeiten und andere ungesunde Lebensmittel erschienen. Die Redaktion bittet um Meinungen. Schreiben Sie einen Beitrag.",
       "eingang": {
        "von": "Leserbrief in der Stadtzeitung",
        "betreff": "Werbeverbot für Süßigkeiten — Bevormundung oder Kinderschutz?",
        "text": "Mit Erstaunen lese ich, dass Werbung für Süßigkeiten, Limonaden und Knabbereien bald verboten werden soll, wenn sie sich an Kinder richtet. Ich bin selbst Vater von drei Kindern und halte das für eine typische Bevormundung. Es ist die Aufgabe der Eltern, ihren Kindern eine gesunde Ernährung beizubringen, nicht die des Staates. Meine Kinder sehen auch Werbung und bekommen trotzdem nicht jeden Tag Schokolade. Statt immer neue Verbote zu erlassen, sollte man lieber in den Kindergärten und Schulen mehr über Ernährung unterrichten und das Schulessen verbessern. Werbung macht niemanden dick, falsche Gewohnheiten schon. Harald Quentin"
       },
       "sorte": "aufsatz",
       "an": null,
       "punkte": [
        {
         "nr": 1,
         "was": "Position wiedergeben",
         "hinweis": "Fassen Sie die Meinung des Leserbriefschreibers zusammen."
        },
        {
         "nr": 2,
         "was": "Argumente dafür und dagegen",
         "hinweis": "Erörtern Sie Vor- und Nachteile eines Werbeverbots."
        },
        {
         "nr": 3,
         "was": "Eigene Erfahrung",
         "hinweis": "Berichten Sie von eigenen Erfahrungen oder Beobachtungen."
        },
        {
         "nr": 4,
         "was": "Begründete Stellungnahme",
         "hinweis": "Nehmen Sie begründet Stellung zu dem geplanten Verbot."
        }
       ],
       "muster": "Ob der Staat Werbung für ungesunde Lebensmittel einschränken sollte, ist eine Frage, die viele Eltern bewegt. Anlass meines Beitrags ist der Leserbrief von Herrn Quentin, der ein solches Verbot entschieden ablehnt. Im Folgenden möchte ich seine Argumente prüfen und meine eigene Sicht darlegen.\nDer Verfasser, selbst Vater von drei Kindern, bezeichnet das geplante Werbeverbot als Bevormundung. Seiner Meinung nach sei es Aufgabe der Eltern und nicht des Staates, Kindern eine gesunde Ernährung zu vermitteln. Werbung mache niemanden dick, entscheidend seien vielmehr die Gewohnheiten. Statt neuer Verbote fordert er mehr Ernährungsbildung und besseres Schulessen.\nHerrn Quentin ist insofern zuzustimmen, als Eltern zweifellos die Hauptverantwortung für die Ernährung ihrer Kinder tragen. Auch seine Forderung nach mehr Aufklärung in Kindergärten und Schulen halte ich für berechtigt. Dennoch greift seine Argumentation meines Erachtens zu kurz. Werbung, die sich gezielt an Kinder richtet, arbeitet mit bunten Figuren, Spielzeugbeigaben und eingängigen Melodien. Kinder können diese Strategien noch nicht durchschauen und sind ihnen deshalb weitgehend schutzlos ausgeliefert. Hinzu kommt, dass nicht alle Familien die Zeit und das Wissen haben, gegenzusteuern, etwa weil beide Eltern lange arbeiten oder selbst wenig über gesunde Ernährung wissen. Gerade Kinder aus benachteiligten Familien sind besonders häufig von Übergewicht betroffen.\nAus eigener Erfahrung weiß ich, wie stark Werbung wirken kann. Meine Nichte, die ich oft betreue, kannte schon mit vier Jahren sämtliche Figuren auf den Verpackungen der Frühstücksflocken. Jeder Einkauf mit ihr wurde zur Verhandlung, weil sie genau die Produkte haben wollte, die sie im Fernsehen gesehen hatte. Obwohl ihre Eltern sehr auf gesunde Ernährung achten und zu Hause kaum Süßigkeiten anbieten, kostete es sie viel Kraft, diesem Druck standzuhalten.\nAlles in allem befürworte ich ein Werbeverbot, sofern es sich auf Werbung beschränkt, die sich eindeutig an Kinder richtet. Erwachsene sollen selbstverständlich weiterhin frei entscheiden können, was sie kaufen. Ein solches Verbot kann allerdings nur ein Baustein sein. Ebenso wichtig sind die von Herrn Quentin geforderte Ernährungsbildung und ein gesundes, bezahlbares Mittagessen in allen Schulen. Erst das Zusammenspiel dieser Maßnahmen kann dazu beitragen, dass Kinder gesünder aufwachsen, ohne dass Eltern ständig gegen eine übermächtige Werbeindustrie ankämpfen müssen.",
       "woerter": 350,
       "hilfen": [
        "Anlass meines Beitrags ist der Leserbrief von …",
        "Seiner Meinung nach sei es Aufgabe …",
        "X ist insofern zuzustimmen, als …",
        "Dennoch greift seine Argumentation meines Erachtens zu kurz.",
        "Aus eigener Erfahrung weiß ich, wie …",
        "Alles in allem befürworte ich …, sofern …"
       ],
       "erklaerung": "Der Text gibt dem Leserbrief teilweise recht („insofern … als\"), widerspricht dann begründet, bringt ein konkretes Beispiel aus dem Familienalltag und greift im Schluss die berechtigte Forderung des Verfassers wieder auf.",
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
       "c1allg": true,
       "level": "C1",
       "platzhalter": "Schreib hier deinen Text …"
      },
      {
       "id": "g1sa8",
       "situation": "Die Stadt plant, die Innenstadt innerhalb der nächsten Jahre weitgehend autofrei zu machen. In einer Umfrage wurden die Bürger nach ihrer Meinung gefragt. Schreiben Sie einen Beitrag für das Bürgerforum der Stadt.",
       "eingang": {
        "von": "Umfrage der Stadt",
        "betreff": "Autofreie Innenstadt — Ihre Meinung zählt",
        "text": "Nach den Plänen der Stadt sollen private Autos künftig nur noch bis zu Parkhäusern am Rand der Innenstadt fahren dürfen. Ausnahmen gelten für Anwohner, Lieferverkehr, Handwerker und Menschen mit Behinderung. Dafür sollen mehr Grünflächen, Sitzplätze und Radwege entstehen. In einer Umfrage befürworteten rund sechzig Prozent der Befragten das Vorhaben. Vor allem jüngere Menschen und Anwohner zeigten sich begeistert. Skeptisch äußerten sich dagegen viele Einzelhändler, die einen Rückgang ihrer Kundschaft befürchten, sowie Menschen aus dem Umland, die auf das Auto angewiesen sind. Die Stadt lädt nun zu Stellungnahmen im Bürgerforum ein."
       },
       "sorte": "aufsatz",
       "an": null,
       "punkte": [
        {
         "nr": 1,
         "was": "Ergebnis wiedergeben",
         "hinweis": "Fassen Sie den Plan und die Meinungen aus der Umfrage zusammen."
        },
        {
         "nr": 2,
         "was": "Argumente dafür und dagegen",
         "hinweis": "Stellen Sie Vor- und Nachteile einer autofreien Innenstadt dar."
        },
        {
         "nr": 3,
         "was": "Eigene Erfahrung",
         "hinweis": "Berichten Sie von eigenen Erfahrungen, zum Beispiel aus anderen Städten."
        },
        {
         "nr": 4,
         "was": "Begründete Stellungnahme",
         "hinweis": "Nehmen Sie Stellung zu dem Plan und begründen Sie Ihre Meinung."
        }
       ],
       "muster": "Mit dem Plan, die Innenstadt weitgehend vom Autoverkehr zu befreien, hat die Stadt eine lebhafte Debatte ausgelöst. Im Folgenden möchte ich die Ergebnisse der Umfrage kurz einordnen, die wichtigsten Argumente abwägen und anschließend begründen, warum ich das Vorhaben unterstütze.\nDer Umfrage zufolge befürwortet eine deutliche Mehrheit der Befragten die Pläne. Besonders groß ist die Zustimmung bei jüngeren Menschen und bei den Anwohnern selbst. Skeptisch zeigen sich hingegen viele Einzelhändler, die befürchten, ihre Kunden würden künftig lieber in Einkaufszentren am Stadtrand fahren. Auch Bewohner des Umlands geben zu bedenken, sie seien auf das Auto angewiesen.\nFür eine autofreie Innenstadt sprechen gewichtige Gründe. Weniger Verkehr bedeutet weniger Lärm und sauberere Luft, und auf ehemaligen Parkplätzen können Grünflächen, Spielplätze oder Außenbereiche für Cafés entstehen. Dadurch gewinnt die Innenstadt an Aufenthaltsqualität, was Besucher anlocken und länger verweilen lassen dürfte. Gleichwohl sind die Sorgen der Händler ernst zu nehmen. Wer einen schweren Einkauf erledigen will, wird nicht gern lange Wege bis zum Parkhaus in Kauf nehmen. Ebenso berechtigt ist der Einwand der Menschen aus dem Umland, deren Busverbindungen oft unzureichend sind. Ohne ein besseres Angebot im öffentlichen Nahverkehr droht eine Spaltung zwischen Stadt und Land. Ältere Menschen, die nicht mehr gut zu Fuß sind, könnten sich zudem ausgeschlossen fühlen, wenn sie ihr Ziel nicht mehr direkt erreichen.\nIch selbst habe vor einiger Zeit eine mittelgroße Stadt im Norden besucht, deren Zentrum bereits seit Jahren weitgehend autofrei ist. Zunächst fiel mir auf, wie ruhig und angenehm es dort war. Die Straßen waren voller Menschen, Kinder spielten auf den Plätzen, und die Geschäfte schienen keineswegs unter Kundenmangel zu leiden. Ein Ladenbesitzer erzählte mir, er habe anfangs ebenfalls Umsatzeinbußen befürchtet, inzwischen kämen aber mehr Kunden als früher, weil die Leute gern in der Innenstadt bummelten.\nWägt man die genannten Argumente gegeneinander ab, überwiegen meiner Ansicht nach eindeutig die Vorteile. Voraussetzung für den Erfolg ist allerdings, dass die Stadt rechtzeitig für gute Alternativen sorgt. Dazu gehören günstige Parkhäuser am Rand, häufigere Busse aus dem Umland und ein Lieferservice, der Einkäufe zum Parkhaus oder nach Hause bringt. Wenn diese Bedingungen erfüllt sind, kann die autofreie Innenstadt zu einem Gewinn für alle werden.",
       "woerter": 350,
       "hilfen": [
        "Der Umfrage zufolge befürwortet eine deutliche Mehrheit …",
        "Skeptisch zeigen sich hingegen …",
        "Für … sprechen gewichtige Gründe.",
        "Gleichwohl sind die Sorgen … ernst zu nehmen.",
        "Ebenso berechtigt ist der Einwand …",
        "Voraussetzung für den Erfolg ist allerdings, dass …"
       ],
       "erklaerung": "Der Beitrag fasst die Umfrage ohne Zahlen zusammen, nimmt die Einwände von Händlern und Pendlern ernst, belegt die Position mit einer Beobachtung aus einer anderen Stadt und knüpft die Zustimmung an klare Bedingungen.",
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
       "c1allg": true,
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
   "id": "tg1sl1",
   "titel": "Prüfungslauf 1",
   "minuten": 70,
   "aufgaben": [
    {
     "id": "g1sa9",
     "situation": "In der Stadtzeitung ist ein Leserbrief zur Forderung erschienen, die Mieten in Ihrer Stadt zu deckeln. Die Redaktion bittet um Stellungnahmen. Schreiben Sie einen Beitrag.",
     "eingang": {
      "von": "Leserbrief in der Stadtzeitung",
      "betreff": "Mietendeckel jetzt — bevor alle wegziehen müssen",
      "text": "Ich arbeite als Krankenpfleger und lebe seit über zwanzig Jahren in dieser Stadt. Als mein Vermieter die Miete im letzten Jahr erneut deutlich erhöht hat, blieb mir fast die Hälfte meines Gehalts für die Wohnung. Vielen meiner Kollegen geht es genauso, einige sind bereits ins Umland gezogen und pendeln jeden Tag eine Stunde. Ich fordere deshalb, dass die Stadt die Mieten für einige Jahre einfriert. Wohnen ist ein Grundbedürfnis und keine Ware, mit der man möglichst viel Gewinn machen darf. Wenn sich Pfleger, Erzieher und Verkäufer die Stadt nicht mehr leisten können, wer soll dann hier noch arbeiten? Yusuf Demirel"
     },
     "sorte": "aufsatz",
     "an": null,
     "punkte": [
      {
       "nr": 1,
       "was": "Position wiedergeben",
       "hinweis": "Geben Sie die Meinung des Leserbriefschreibers in eigenen Worten wieder."
      },
      {
       "nr": 2,
       "was": "Argumente dafür und dagegen",
       "hinweis": "Wägen Sie Vor- und Nachteile eines Mietendeckels ab."
      },
      {
       "nr": 3,
       "was": "Eigene Erfahrung",
       "hinweis": "Berichten Sie von Ihren eigenen Erfahrungen auf dem Wohnungsmarkt."
      },
      {
       "nr": 4,
       "was": "Begründete Stellungnahme",
       "hinweis": "Nehmen Sie begründet Stellung und nennen Sie mögliche Alternativen."
      }
     ],
     "muster": "Bezahlbarer Wohnraum ist in unserer Stadt längst zu einem knappen Gut geworden. Der Leserbrief von Herrn Demirel, der einen Mietendeckel fordert, bringt diese Sorge vieler Bürger eindringlich auf den Punkt. Im Folgenden möchte ich seine Forderung darstellen und kritisch prüfen.\nDer Verfasser, der als Krankenpfleger arbeitet, berichtet, nach der letzten Mieterhöhung gehe fast die Hälfte seines Gehalts für die Wohnung drauf. Vielen Kollegen gehe es ähnlich, manche seien bereits ins Umland gezogen. Er fordert daher, die Mieten für einige Jahre einzufrieren, da Wohnen ein Grundbedürfnis und keine Ware sei. Andernfalls könnten sich gerade jene Menschen die Stadt nicht mehr leisten, ohne die sie nicht funktioniere.\nDie Forderung ist aus Sicht der Mieter ohne Zweifel nachvollziehbar. Ein Mietendeckel würde vielen Haushalten sofortige Entlastung verschaffen und verhindern, dass Menschen mit mittlerem Einkommen aus ihren Vierteln verdrängt werden. Zudem würde er ein deutliches politisches Signal senden. Allerdings warnen Kritiker nicht ohne Grund vor den Nebenwirkungen. Wenn Vermieter keine höheren Mieten verlangen dürfen, investieren sie möglicherweise weniger in Neubauten und Sanierungen. Hinzu kommt, dass ein Deckel nicht zwischen großen Wohnungskonzernen und privaten Kleinvermietern unterscheidet, die mit den Mieteinnahmen etwa ihre Altersvorsorge bestreiten. Im ungünstigsten Fall wird das Angebot an Wohnungen dadurch noch knapper, sodass am Ende vor allem diejenigen profitieren, die bereits eine Wohnung haben.\nAuch ich habe den angespannten Wohnungsmarkt am eigenen Leib erfahren. Als ich vor zwei Jahren mit meiner Familie eine größere Wohnung suchte, standen bei jeder Besichtigung Dutzende Interessenten vor der Tür. Nach monatelanger Suche fanden wir schließlich eine Wohnung, deren Miete unser Budget eigentlich übersteigt. Eine Bekannte von mir, die in einer Genossenschaftswohnung lebt, zahlt dagegen deutlich weniger und musste nie eine drastische Erhöhung hinnehmen.\nZusammenfassend halte ich einen befristeten Mietendeckel für ein vertretbares Mittel, um akute Not zu lindern. Er kann das Grundproblem, nämlich den Mangel an Wohnungen, jedoch nicht lösen. Deshalb sollte die Stadt gleichzeitig deutlich mehr bezahlbaren Wohnraum schaffen, etwa durch die Förderung von Genossenschaften und durch städtische Wohnungsbaugesellschaften. Nur wenn beides zusammenkommt, bleibt unsere Stadt auch für Pfleger, Erzieher und Verkäufer ein Ort, an dem sie leben und arbeiten können.",
     "woerter": 350,
     "hilfen": [
      "Der Leserbrief von … bringt diese Sorge eindringlich auf den Punkt.",
      "Der Verfasser berichtet, nach der letzten Mieterhöhung gehe …",
      "Die Forderung ist aus Sicht der Mieter ohne Zweifel nachvollziehbar.",
      "Allerdings warnen Kritiker nicht ohne Grund vor …",
      "Im ungünstigsten Fall …",
      "Zusammenfassend halte ich … für ein vertretbares Mittel."
     ],
     "erklaerung": "Der Text gibt die Forderung samt Begründung im Konjunktiv I wieder, wägt kurzfristige Entlastung gegen langfristige Folgen ab, bringt eigene Erfahrung auf dem Wohnungsmarkt ein und ergänzt den Deckel um eine weitergehende Lösung.",
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
     "c1allg": true,
     "level": "C1",
     "platzhalter": "Schreib hier deinen Text …"
    }
   ]
  },
  {
   "id": "tg1sl2",
   "titel": "Prüfungslauf 2",
   "minuten": 70,
   "aufgaben": [
    {
     "id": "g1sa10",
     "situation": "Eine Nachrichtenzeitschrift hat in ihrem Onlineforum die Frage gestellt, ob das Rentenalter auf siebzig Jahre angehoben werden sollte. Sie haben zwei Beiträge gelesen und möchten selbst Stellung nehmen.",
     "eingang": {
      "von": "Forum „Zukunft der Arbeit\"",
      "betreff": "Rente mit siebzig — notwendig oder ungerecht?",
      "text": "Beitrag von Dieter H.: „Wir leben heute viel länger als unsere Großeltern und sind im Alter meist noch fit. Gleichzeitig gibt es immer weniger junge Beitragszahler. Wenn wir das Rentensystem nicht gegen die Wand fahren wollen, führt an einem späteren Rentenbeginn kein Weg vorbei.\"\nBeitrag von Anja M.: „Mein Vater war Dachdecker. Mit sechzig konnte er kaum noch die Leiter hinaufsteigen. Für einen Büroangestellten mag die Rente mit siebzig zumutbar sein, für Pflegekräfte, Bauarbeiter oder Busfahrer ist sie schlicht eine versteckte Rentenkürzung. Wer so etwas fordert, sitzt meistens am Schreibtisch.\""
     },
     "sorte": "aufsatz",
     "an": null,
     "punkte": [
      {
       "nr": 1,
       "was": "Positionen wiedergeben",
       "hinweis": "Geben Sie die beiden Meinungen in eigenen Worten wieder."
      },
      {
       "nr": 2,
       "was": "Argumente dafür und dagegen",
       "hinweis": "Erörtern Sie Vor- und Nachteile eines späteren Rentenbeginns."
      },
      {
       "nr": 3,
       "was": "Eigene Erfahrung",
       "hinweis": "Berichten Sie von Erfahrungen in Ihrer Familie oder in Ihrem Beruf."
      },
      {
       "nr": 4,
       "was": "Begründete Stellungnahme",
       "hinweis": "Nehmen Sie begründet Stellung und machen Sie einen Vorschlag."
      }
     ],
     "muster": "Die Frage, bis zu welchem Alter Menschen arbeiten sollen, gehört zu den umstrittensten Themen unserer Zeit. Im Forum dieser Zeitschrift prallen dazu zwei sehr unterschiedliche Sichtweisen aufeinander. Ich möchte sie zunächst wiedergeben und anschließend zu einer eigenen Einschätzung gelangen.\nDieter H. argumentiert, die Menschen lebten heute deutlich länger und seien im Alter meist noch leistungsfähig. Da es zugleich immer weniger junge Beitragszahler gebe, führe an einem späteren Rentenbeginn kein Weg vorbei. Anja M. hält dem entgegen, dass viele Berufe körperlich so anstrengend seien, dass man sie bis siebzig unmöglich ausüben könne. Für Pflegekräfte oder Bauarbeiter komme die Rente mit siebzig daher einer versteckten Rentenkürzung gleich.\nDie demografischen Argumente lassen sich kaum von der Hand weisen. Wenn immer weniger Erwerbstätige für immer mehr Rentner aufkommen müssen, gerät das System zwangsläufig unter Druck. Eine längere Lebensarbeitszeit wäre insofern ein naheliegender Ausweg, zumal viele Menschen heute tatsächlich gesünder alt werden als frühere Generationen und durchaus gern länger aktiv bleiben möchten. Dennoch halte ich den Einwand von Anja M. für berechtigt. Eine einheitliche Altersgrenze behandelt Menschen gleich, deren Arbeitsbedingungen sich grundlegend unterscheiden. Wer jahrzehntelang schwere Lasten getragen oder im Schichtdienst gearbeitet hat, ist mit Mitte sechzig häufig gesundheitlich so angeschlagen, dass er nicht mehr arbeiten kann, und müsste dann empfindliche Abschläge hinnehmen.\nIn meiner eigenen Familie lassen sich beide Seiten beobachten. Mein Onkel, ein Steuerberater, arbeitet mit siebzig noch immer einige Stunden pro Woche, weil ihm seine Tätigkeit Freude bereitet und ihn geistig fit hält. Meine Mutter hingegen war Krankenschwester und musste wegen ihrer Rückenprobleme schon mit dreiundsechzig aufhören. Für sie wäre eine weitere Anhebung des Rentenalters eine echte Härte gewesen, denn sie hätte entweder unter Schmerzen weiterarbeiten oder dauerhaft auf einen Teil ihrer Rente verzichten müssen.\nNach Abwägung aller Argumente lehne ich eine pauschale Rente mit siebzig ab. Sinnvoller erscheint mir ein flexibles Modell, bei dem Menschen freiwillig länger arbeiten können und dafür eine höhere Rente erhalten. Gleichzeitig sollten Beschäftigte in körperlich belastenden Berufen weiterhin früher in den Ruhestand gehen dürfen, ohne dafür bestraft zu werden. Ein solches Modell würde die Rentenkasse entlasten und zugleich der sehr unterschiedlichen Lebenswirklichkeit der Menschen gerecht werden.",
     "woerter": 350,
     "hilfen": [
      "Im Forum prallen dazu zwei sehr unterschiedliche Sichtweisen aufeinander.",
      "X argumentiert, die Menschen lebten heute …",
      "Y hält dem entgegen, dass …",
      "Die demografischen Argumente lassen sich kaum von der Hand weisen.",
      "Dennoch halte ich den Einwand von … für berechtigt.",
      "Sinnvoller erscheint mir ein flexibles Modell, bei dem …"
     ],
     "erklaerung": "Der Beitrag gibt beide Forumsbeiträge sauber wieder, erkennt das demografische Problem an, zeigt mit zwei Beispielen aus der Familie die Ungleichheit der Berufe und schlägt eine flexible Lösung vor.",
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
     "c1allg": true,
     "level": "C1",
     "platzhalter": "Schreib hier deinen Text …"
    }
   ]
  }
 ]
};
