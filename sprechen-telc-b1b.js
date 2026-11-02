/* ============================================================
   deutschoderwas club — SPRECHEN telc Deutsch B1+ Beruf

   Aufbau nach dem offiziellen telc-Format (Übungstest 1 B1+ Beruf,
   geprüft 02.11.2026). Alle Texte und Aufgaben eigene, Kontext
   Arbeitswelt. Erzeugt aus scratchpad/telcb1b mit bau.js.
   ============================================================ */

window.SPRECHEN_TELC_B1B = {
 "niveau": "telcB1B",
 "pruefung": "telc Deutsch B1+ Beruf",
 "minuten": 15,
 "punkte": 75,
 "intro": "Die mündliche Prüfung bei telc B1+ Beruf ist eine Paarprüfung, etwa fünfzehn Minuten, vorher zwanzig Minuten Vorbereitung. Drei Teile: Kontaktaufnahme, ein Gespräch über ein Arbeitsthema (jeder hat andere Informationen) und gemeinsam eine Aufgabe lösen, zum Beispiel einen Kundenbesuch planen. Sprich laut, nimm dich auf und vergleiche mit dem Muster.",
 "stufen": [
  {
   "nr": 1,
   "titel": "Die Bausteine",
   "zeichen": "🧱",
   "was": "Sich beruflich vorstellen und Informationen austauschen."
  },
  {
   "nr": 2,
   "titel": "Im Gespräch",
   "zeichen": "💬",
   "was": "Meinung zu Arbeitsthemen, planen und organisieren."
  },
  {
   "nr": 3,
   "titel": "Die drei Teile",
   "zeichen": "🎯",
   "was": "Kontaktaufnahme, Thema, Aufgabe lösen — mit Musterlösung zum Anhören."
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
   "id": "tbb1m1",
   "stufe": 1,
   "titel": "Sich beruflich vorstellen",
   "kurz": "Beruf, Firma, Aufgaben und Weg nach Deutschland in ganzen Sätzen",
   "ziel": "Nach diesem Block stellst du dich und deine Arbeit klar vor und machst aus jedem Stichwort eine passende Frage an deine Partnerin oder deinen Partner.",
   "zeichen": "👋",
   "farbe": "turq",
   "aufgaben": [
    {
     "art": "wahl",
     "frage": "Auf deinem Blatt steht „Beruf\". Was fragst du deinen Partner?",
     "optionen": [
      "Beruf?",
      "Was machst du beruflich?",
      "Was ist dein Beruf gewesen werden?"
     ],
     "loesung": 1,
     "erklaerung": "„Was machst du beruflich?\" ist die natürlichste Frage nach dem Beruf."
    },
    {
     "art": "wahl",
     "frage": "Wie sagst du, wo du arbeitest?",
     "optionen": [
      "Ich arbeite bei einer Spedition in Bremen.",
      "Ich arbeite an einer Spedition in Bremen.",
      "Ich arbeite zu einer Spedition in Bremen."
     ],
     "loesung": 0,
     "erklaerung": "Bei einer Firma arbeitet man „bei\": bei einer Spedition, bei einem Pflegedienst."
    },
    {
     "art": "wahl",
     "frage": "Wie beschreibst du deine Aufgaben?",
     "optionen": [
      "Ich bin zuständig für den Wareneingang.",
      "Ich bin zuständig von dem Wareneingang.",
      "Ich zuständig bin für Wareneingang."
     ],
     "loesung": 0,
     "erklaerung": "„zuständig für\" plus Akkusativ — ein Ausdruck, den du im Beruf ständig brauchst."
    },
    {
     "art": "wahl",
     "frage": "Dein Partner sagt: „Ich arbeite als Altenpfleger.\" Wie reagierst du am besten?",
     "optionen": [
      "Okay. Nächste Frage.",
      "Das ist bestimmt anstrengend. Arbeitest du auch nachts?",
      "Altenpfleger ist ein Beruf."
     ],
     "loesung": 1,
     "erklaerung": "Reagieren und nachfragen macht aus der Vorstellung ein echtes Gespräch."
    },
    {
     "art": "wahl",
     "frage": "Stichwort „Deutsch gelernt — wo?\". Welche Antwort ist richtig?",
     "optionen": [
      "Ich habe Deutsch in einem Berufssprachkurs gelernt.",
      "Ich habe Deutsch in einem Berufssprachkurs gelernen.",
      "Ich lerne Deutsch gestern im Kurs."
     ],
     "loesung": 0,
     "erklaerung": "Perfekt mit „habe … gelernt\", weil du über die Vergangenheit sprichst."
    },
    {
     "art": "wahl",
     "frage": "Wie sagst du, wie lange du schon in der Firma bist?",
     "optionen": [
      "Ich arbeite dort für zwei Jahre.",
      "Ich arbeite dort seit zwei Jahren.",
      "Ich arbeite dort vor zwei Jahren."
     ],
     "loesung": 1,
     "erklaerung": "Etwas hat in der Vergangenheit angefangen und dauert noch an: „seit\" plus Dativ."
    },
    {
     "art": "wahl",
     "frage": "Du möchtest sagen, dass deine Ausbildung anerkannt wurde. Welcher Satz passt?",
     "optionen": [
      "Meine Ausbildung hat man anerkannt worden.",
      "Meine Ausbildung wurde in Deutschland anerkannt.",
      "Meine Ausbildung ist anerkennen."
     ],
     "loesung": 1,
     "erklaerung": "Passiv Präteritum: „wurde … anerkannt\" — typisch, wenn es um Behörden geht."
    },
    {
     "art": "wahl",
     "frage": "Wie fragst du höflich nach den Arbeitszeiten deiner Partnerin?",
     "optionen": [
      "Wie sind denn deine Arbeitszeiten?",
      "Arbeitszeiten, wie?",
      "Wann du arbeitest?"
     ],
     "loesung": 0,
     "erklaerung": "Ein ganzer Fragesatz mit „denn\" klingt interessiert und freundlich."
    },
    {
     "art": "ordnen",
     "frage": "Bau den Satz über deinen Beruf.",
     "teile": [
      "Ich",
      "arbeite",
      "als",
      "Lagerist",
      "in",
      "einem",
      "Logistikzentrum"
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
     "erklaerung": "„arbeiten als\" plus Beruf ohne Artikel: als Lagerist, als Krankenpflegerin."
    },
    {
     "art": "ordnen",
     "frage": "Bau den Satz über deine Pläne.",
     "teile": [
      "Später",
      "möchte",
      "ich",
      "eine",
      "Weiterbildung",
      "zum",
      "Meister",
      "machen"
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
     "erklaerung": "Zeitangabe vorn, dann das Modalverb, das Infinitiv „machen\" ans Ende."
    }
   ]
  },
  {
   "id": "tbb1m2",
   "stufe": 1,
   "titel": "Informationen austauschen",
   "kurz": "Deine Informationen weitergeben und die deines Partners erfragen",
   "ziel": "Nach diesem Block gibst du Informationen aus deinem Blatt in eigenen Worten weiter und fragst gezielt nach, was dein Partner weiß.",
   "zeichen": "📋",
   "farbe": "gold",
   "aufgaben": [
    {
     "art": "wahl",
     "frage": "Wie beginnst du am besten, wenn du deine Informationen weitergibst?",
     "optionen": [
      "In meinen Informationen steht, dass …",
      "Ich lese jetzt vor: …",
      "Mein Blatt, Punkt eins."
     ],
     "loesung": 0,
     "erklaerung": "„In meinen Informationen steht, dass …\" leitet frei und natürlich ein — nicht vorlesen!"
    },
    {
     "art": "wahl",
     "frage": "Wie gibst du eine Zahl aus deinen Informationen weiter?",
     "optionen": [
      "Etwa jeder vierte Beschäftigte arbeitet ab und zu im Homeoffice.",
      "Jeder vierte, Homeoffice.",
      "Homeoffice ist vier."
     ],
     "loesung": 0,
     "erklaerung": "Zahl plus ganzer Satz — so versteht dein Partner die Information sofort."
    },
    {
     "art": "wahl",
     "frage": "Wie gibst du die Meinung einer Person aus deinem Text wieder?",
     "optionen": [
      "Ein Mann sagt, dass er die Nachtschicht gar nicht mag.",
      "Ein Mann sagt, er mag nicht die Nachtschicht gar.",
      "Ein Mann: Nachtschicht schlecht."
     ],
     "loesung": 0,
     "erklaerung": "Indirekte Rede mit „dass\": Das Verb steht am Ende."
    },
    {
     "art": "wahl",
     "frage": "Du willst wissen, was in den Informationen deiner Partnerin steht. Was sagst du?",
     "optionen": [
      "Gib mir dein Blatt.",
      "Was steht denn in deinen Informationen dazu?",
      "Deine Informationen sind sicher falsch."
     ],
     "loesung": 1,
     "erklaerung": "Eine offene Frage bringt deine Partnerin zum Sprechen — genau darum geht es im Austausch."
    },
    {
     "art": "wahl",
     "frage": "Du hast eine Information nicht verstanden. Wie fragst du nach?",
     "optionen": [
      "Hä?",
      "Entschuldigung, kannst du das bitte noch einmal erklären?",
      "Das ist falsch."
     ],
     "loesung": 1,
     "erklaerung": "Nachfragen ist in der Prüfung erwünscht — höflich formuliert zeigt es gute Kommunikation."
    },
    {
     "art": "wahl",
     "frage": "Deine Information sagt etwas anderes als die deines Partners. Wie reagierst du?",
     "optionen": [
      "Interessant, bei mir steht etwas anderes, nämlich …",
      "Nein, du hast unrecht.",
      "Egal."
     ],
     "loesung": 0,
     "erklaerung": "Unterschiede benennen und erklären — so entsteht ein echtes Gespräch."
    },
    {
     "art": "wahl",
     "frage": "Welcher Ausdruck verbindet deine Information mit einer eigenen Erfahrung?",
     "optionen": [
      "Das kenne ich auch aus meiner Firma.",
      "Das kenne ich nicht, Schluss.",
      "Erfahrung habe ich keine Information."
     ],
     "loesung": 0,
     "erklaerung": "„Das kenne ich auch aus …\" ist eine gute Brücke von der Information zur Erfahrung."
    },
    {
     "art": "ordnen",
     "frage": "Bau den Satz zur Weitergabe einer Information.",
     "teile": [
      "In",
      "meinen",
      "Informationen",
      "steht,",
      "dass",
      "viele",
      "Firmen",
      "Fachkräfte",
      "suchen"
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
     "erklaerung": "Nach „dass\" steht das Verb am Ende: … Fachkräfte suchen."
    },
    {
     "art": "ordnen",
     "frage": "Bau die Nachfrage.",
     "teile": [
      "Weißt",
      "du,",
      "wie",
      "viele",
      "Leute",
      "in Teilzeit",
      "arbeiten?"
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
     "erklaerung": "Indirekte Frage mit „wie viele\" — das Verb wandert ans Ende."
    },
    {
     "art": "ordnen",
     "frage": "Bau den Satz über eine eigene Erfahrung.",
     "teile": [
      "Bei",
      "uns",
      "im",
      "Betrieb",
      "ist",
      "das",
      "ganz",
      "ähnlich"
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
     "erklaerung": "„Bei uns im Betrieb\" vorn, dann das Verb auf Position zwei."
    }
   ]
  },
  {
   "id": "tbb1m3",
   "stufe": 2,
   "titel": "Meinung zu Arbeitsthemen",
   "kurz": "Meinung sagen, begründen, zustimmen und widersprechen",
   "ziel": "Nach diesem Block sagst du deine Meinung zu Arbeitsthemen mit Grund und Beispiel und reagierst höflich auf andere Meinungen.",
   "zeichen": "💬",
   "farbe": "rot",
   "aufgaben": [
    {
     "art": "wahl",
     "frage": "Welcher Satz ist eine gute Meinungsäußerung?",
     "optionen": [
      "Meiner Meinung nach ist Schichtarbeit auf Dauer ungesund, weil man zu wenig schläft.",
      "Meiner Meinung nach Schichtarbeit ist ungesund.",
      "Ich meine nach Schichtarbeit ungesund."
     ],
     "loesung": 0,
     "erklaerung": "Nach „Meiner Meinung nach\" kommt das Verb sofort — und ein Grund macht die Meinung stark."
    },
    {
     "art": "wahl",
     "frage": "Du stimmst deiner Partnerin teilweise zu. Was sagst du?",
     "optionen": [
      "Da hast du recht, aber man muss auch sehen, dass …",
      "Stimmt nicht.",
      "Ja, ja."
     ],
     "loesung": 0,
     "erklaerung": "Erst zustimmen, dann ergänzen — so widersprichst du freundlich."
    },
    {
     "art": "wahl",
     "frage": "Welcher Satz ist ein höflicher Widerspruch?",
     "optionen": [
      "Das ist doch Quatsch!",
      "Das sehe ich ein bisschen anders.",
      "Du weißt gar nichts."
     ],
     "loesung": 1,
     "erklaerung": "„Das sehe ich anders\" widerspricht klar, aber ohne den Partner anzugreifen."
    },
    {
     "art": "wahl",
     "frage": "Welches Wort fehlt? „Ich ___ , dass Homeoffice für Familien sehr praktisch ist.\"",
     "optionen": [
      "finde",
      "meine nach",
      "glaube an"
     ],
     "loesung": 0,
     "erklaerung": "„Ich finde, dass …\" — der Klassiker für die eigene Meinung."
    },
    {
     "art": "wahl",
     "frage": "Wie stützt du deine Meinung mit einem Beispiel?",
     "optionen": [
      "Zum Beispiel hat meine Kollegin nach ihrer Weiterbildung eine bessere Stelle bekommen.",
      "Beispiel: gut.",
      "Es gibt Beispiele."
     ],
     "loesung": 0,
     "erklaerung": "Ein konkretes Beispiel aus dem Arbeitsalltag überzeugt mehr als jede allgemeine Aussage."
    },
    {
     "art": "wahl",
     "frage": "Du willst Vor- und Nachteile abwägen. Welcher Satz passt?",
     "optionen": [
      "Einerseits verdient man im Ausland mehr, andererseits vermisst man die Familie.",
      "Einerseits Ausland, andererseits nicht.",
      "Einerseits ist gut und andererseits."
     ],
     "loesung": 0,
     "erklaerung": "„einerseits … andererseits\" zeigt, dass du beide Seiten siehst."
    },
    {
     "art": "wahl",
     "frage": "Wie fragst du deine Partnerin nach ihrer Meinung?",
     "optionen": [
      "Und wie siehst du das?",
      "Deine Meinung ist?",
      "Sag mal Meinung."
     ],
     "loesung": 0,
     "erklaerung": "Die Frage nach der Meinung des Partners hält das Gespräch lebendig."
    },
    {
     "art": "ordnen",
     "frage": "Bau den Satz mit „obwohl\".",
     "teile": [
      "Ich",
      "arbeite",
      "gern",
      "in Teilzeit,",
      "obwohl",
      "ich",
      "weniger",
      "verdiene"
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
     "erklaerung": "Im obwohl-Satz steht das Verb am Ende: … weniger verdiene."
    },
    {
     "art": "ordnen",
     "frage": "Bau den Satz mit „Meiner Meinung nach\".",
     "teile": [
      "Meiner",
      "Meinung",
      "nach",
      "sollten",
      "Firmen",
      "mehr",
      "Weiterbildungen",
      "bezahlen"
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
     "erklaerung": "„Meiner Meinung nach\" zählt als Position eins, danach folgt sofort das Verb."
    },
    {
     "art": "ordnen",
     "frage": "Bau den Satz zum Abschluss der Diskussion.",
     "teile": [
      "Wir",
      "sind",
      "uns",
      "also",
      "einig,",
      "dass",
      "beides",
      "Vorteile",
      "hat"
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
     "erklaerung": "„sich einig sein, dass …\" fasst das Gespräch am Ende zusammen."
    }
   ]
  },
  {
   "id": "tbb1m4",
   "stufe": 2,
   "titel": "Planen und organisieren im Betrieb",
   "kurz": "Vorschläge machen, Aufgaben verteilen, ein klares Ergebnis finden",
   "ziel": "Nach diesem Block planst du mit deinem Partner eine Aufgabe im Betrieb, verteilst die Arbeit und fasst das Ergebnis zusammen.",
   "zeichen": "🤝",
   "farbe": "lila",
   "aufgaben": [
    {
     "art": "wahl",
     "frage": "Welcher Satz ist ein guter Vorschlag?",
     "optionen": [
      "Wir könnten die Kundengruppe zuerst durch die Produktion führen.",
      "Kundengruppe Produktion.",
      "Du musst die Kunden führen!"
     ],
     "loesung": 0,
     "erklaerung": "„Wir könnten …\" macht einen Vorschlag, ohne zu befehlen."
    },
    {
     "art": "wahl",
     "frage": "Dein Partner schlägt einen Termin vor, der dir nicht passt. Was sagst du?",
     "optionen": [
      "Nein.",
      "Das passt mir leider nicht so gut, weil ich da Frühschicht habe. Wie wäre es mit Donnerstag?",
      "Mach du doch."
     ],
     "loesung": 1,
     "erklaerung": "Ablehnen, begründen, Gegenvorschlag — die perfekte Reaktion in Teil drei."
    },
    {
     "art": "wahl",
     "frage": "Wie verteilst du eine Aufgabe?",
     "optionen": [
      "Könntest du dich um die Getränke kümmern?",
      "Getränke du.",
      "Du machst Getränke, Ende."
     ],
     "loesung": 0,
     "erklaerung": "„sich um etwas kümmern\" ist der typische Ausdruck für Aufgaben verteilen."
    },
    {
     "art": "wahl",
     "frage": "Du findest den Vorschlag deiner Partnerin gut. Wie reagierst du?",
     "optionen": [
      "Gute Idee, so machen wir es!",
      "Ja.",
      "Hm."
     ],
     "loesung": 0,
     "erklaerung": "Zustimmung deutlich zeigen — dann geht es zum nächsten Punkt."
    },
    {
     "art": "wahl",
     "frage": "Welcher Satz leitet zum nächsten Punkt über?",
     "optionen": [
      "Und was machen wir mit dem Essen?",
      "Das Essen ist egal.",
      "Fertig."
     ],
     "loesung": 0,
     "erklaerung": "Eine Frage zum nächsten Stichpunkt bringt die Planung voran."
    },
    {
     "art": "wahl",
     "frage": "Wie sprichst du über Kosten?",
     "optionen": [
      "Wir sollten vorher mit der Chefin klären, wie viel Geld wir ausgeben dürfen.",
      "Geld ist kein Problem.",
      "Kosten später."
     ],
     "loesung": 0,
     "erklaerung": "Im Betrieb gehört die Frage nach dem Budget immer zur Planung."
    },
    {
     "art": "wahl",
     "frage": "Wie fasst du am Ende das Ergebnis zusammen?",
     "optionen": [
      "Also, wir machen es so: …",
      "Tschüss.",
      "Das war es von mir."
     ],
     "loesung": 0,
     "erklaerung": "Eine kurze Zusammenfassung zeigt der Prüfung, dass ihr euch geeinigt habt."
    },
    {
     "art": "ordnen",
     "frage": "Bau den Vorschlag.",
     "teile": [
      "Wie",
      "wäre",
      "es,",
      "wenn",
      "wir",
      "einen",
      "Bus",
      "mieten?"
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
     "erklaerung": "„Wie wäre es, wenn …\" — im wenn-Satz steht das Verb am Ende."
    },
    {
     "art": "ordnen",
     "frage": "Bau den Satz zur Aufgabenverteilung.",
     "teile": [
      "Ich",
      "kümmere",
      "mich",
      "um",
      "die",
      "Einladungen"
     ],
     "loesung": [
      0,
      1,
      2,
      3,
      4,
      5
     ],
     "erklaerung": "„sich kümmern um\" plus Akkusativ — reflexiv mit „mich\"."
    },
    {
     "art": "ordnen",
     "frage": "Bau die Einigung.",
     "teile": [
      "Dann",
      "machen",
      "wir",
      "es",
      "so,",
      "wie",
      "du",
      "gesagt",
      "hast"
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
     "erklaerung": "Nach „wie\" steht das gebeugte Verb ganz am Ende: … gesagt hast."
    }
   ]
  }
 ],
 "teile": [
  {
   "nr": 1,
   "art": "erzaehlen",
   "name": "Kontaktaufnahme",
   "kurz": "Sich kennenlernen, etwa drei Minuten",
   "was": "Ihr lernt euch kennen: Herkunft, Wohnort, Familie, Deutschlernen, Beruf, Sprachen. Ihr erzählt und fragt euch gegenseitig.",
   "tipp": "Frag zurück — es ist ein Gespräch, kein Vortrag.",
   "zeichen": "👋",
   "farbe": "turq",
   "punkte": 15,
   "runden": [
    {
     "id": "tb1bm1r1",
     "thema": "Kontaktaufnahme",
     "karten": [
      {
       "kopf": "Teil 1 · Kontaktaufnahme",
       "kopfb": "Stichwortkarte",
       "auftrag": [
        "Stell dich vor — zu jedem Stichwort ein, zwei Sätze.",
        "Frag auch dein Gegenüber und antworte auf die Nachfrage."
       ],
       "id": "tbb1t1k1",
       "thema": "Kontaktaufnahme",
       "punkte": [
        "Name",
        "Herkunft",
        "Wohnort",
        "Familie",
        "Deutsch gelernt — wo?",
        "Beruf",
        "Sprachen"
       ],
       "mustervortrag": "Hallo, ich heiße Andrés Molina und komme aus Kolumbien, aus Medellín. Seit vier Jahren wohne ich in Dortmund, zusammen mit meiner Frau. Wir haben zwei Söhne, sie gehen beide schon in die Schule. Deutsch habe ich zuerst ein halbes Jahr in Kolumbien gelernt, danach habe ich hier einen Integrationskurs und einen Berufssprachkurs gemacht. Von Beruf bin ich Elektroniker. Im Moment arbeite ich bei einem Betrieb, der Solaranlagen auf Dächer baut. Ich bin oft auf Baustellen unterwegs, und das gefällt mir, weil ich nicht den ganzen Tag im Büro sitzen muss. Meine Muttersprache ist Spanisch, außerdem spreche ich Englisch und Deutsch. Und du, was machst du beruflich?",
       "frage": "Wurde deine Ausbildung in Deutschland anerkannt?",
       "musterantwort": "Ja, aber nur teilweise. Ich musste noch eine Anpassungsqualifizierung machen, das hat ungefähr acht Monate gedauert. Jetzt habe ich die volle Anerkennung, und darüber bin ich sehr froh."
      }
     ]
    },
    {
     "id": "tb1bm1r2",
     "thema": "Kontaktaufnahme",
     "karten": [
      {
       "kopf": "Teil 1 · Kontaktaufnahme",
       "kopfb": "Stichwortkarte",
       "auftrag": [
        "Stell dich vor — zu jedem Stichwort ein, zwei Sätze.",
        "Frag auch dein Gegenüber und antworte auf die Nachfrage."
       ],
       "id": "tbb1t1k2",
       "thema": "Kontaktaufnahme",
       "punkte": [
        "Name",
        "Herkunft",
        "Wohnort",
        "Familie",
        "Deutsch gelernt — wo?",
        "Beruf",
        "Sprachen"
       ],
       "mustervortrag": "Guten Tag, mein Name ist Mei Lin Chen. Ich komme aus Taiwan, aus der Stadt Tainan. Jetzt wohne ich in einem kleinen Ort bei Freiburg. Ich bin verheiratet, mein Mann ist Deutscher, und wir haben eine kleine Tochter. Deutsch habe ich zuerst an der Universität in Taiwan gelernt, weil ich Germanistik studiert habe. Aber richtig sprechen habe ich erst hier gelernt, vor allem bei der Arbeit. Ich arbeite als Sachbearbeiterin im Einkauf einer Firma, die Fahrradteile herstellt. Ich bestelle Material, vergleiche Angebote und telefoniere viel mit Lieferanten aus Asien. Deshalb kann ich meine Sprachen gut gebrauchen: Ich spreche Chinesisch, Englisch, Deutsch und ein bisschen Japanisch. Und wie ist es bei dir, woher kommst du?",
       "frage": "Ist es nicht schwierig, mit einem kleinen Kind Vollzeit zu arbeiten?",
       "musterantwort": "Ich arbeite im Moment nur dreißig Stunden pro Woche, und zwei Tage davon im Homeoffice. Außerdem holt mein Mann unsere Tochter meistens von der Kita ab. So klappt es ganz gut."
      }
     ]
    },
    {
     "id": "tb1bm1r3",
     "thema": "Kontaktaufnahme",
     "karten": [
      {
       "kopf": "Teil 1 · Kontaktaufnahme",
       "kopfb": "Stichwortkarte",
       "auftrag": [
        "Stell dich vor — zu jedem Stichwort ein, zwei Sätze.",
        "Frag auch dein Gegenüber und antworte auf die Nachfrage."
       ],
       "id": "tbb1t1k3",
       "thema": "Kontaktaufnahme",
       "punkte": [
        "Name",
        "Herkunft",
        "Wohnort",
        "Familie",
        "Deutsch gelernt — wo?",
        "Beruf",
        "Sprachen"
       ],
       "mustervortrag": "Hallo, ich bin Grace Owusu. Ich komme aus Ghana, aus der Hauptstadt Accra. Seit zwei Jahren lebe ich in Hannover. Meine Familie ist noch in Ghana, meine Eltern und meine drei Geschwister. Wir telefonieren aber fast jeden Tag. Deutsch habe ich am Goethe-Institut in Accra gelernt, weil ich schon wusste, dass ich in Deutschland in der Pflege arbeiten möchte. Ich bin Pflegefachfrau und arbeite in einem Krankenhaus auf einer Station für Herzkrankheiten. Die Arbeit ist anstrengend, besonders im Schichtdienst, aber die Kollegen sind sehr nett. Ich spreche Englisch, Twi, das ist eine Sprache in Ghana, und Deutsch. Im Krankenhaus hilft mir mein Englisch manchmal bei Patienten aus dem Ausland. Und du, wo arbeitest du?",
       "frage": "Wie war der Anfang im deutschen Krankenhaus für dich?",
       "musterantwort": "Am Anfang war es schwer, vor allem am Telefon und mit dem Dialekt mancher Patienten. Aber meine Praxisanleiterin hat mir viel geholfen, und nach ein paar Monaten habe ich mich sicher gefühlt."
      }
     ]
    }
   ]
  },
  {
   "nr": 2,
   "art": "erzaehlen",
   "name": "Gespräch über ein Thema",
   "kurz": "Informationen austauschen, Erfahrung und Meinung",
   "was": "Jede Person hat andere Informationen zu einem Arbeitsthema. Ihr gebt sie weiter, erzählt von eigenen Erfahrungen und sagt eure Meinung.",
   "tipp": "„Auf meinem Blatt steht, dass …\" — dann eigene Erfahrung, dann Meinung. Nicht vorlesen, erzählen.",
   "zeichen": "📋",
   "farbe": "gold",
   "punkte": 30,
   "runden": [
    {
     "id": "tb1bm2r1",
     "thema": "Arbeiten weit weg von zu Hause",
     "karten": [
      {
       "kopf": "Teil 2 · Gespräch über ein Thema",
       "kopfb": "Deine Informationen",
       "auftrag": [
        "Gib die Informationen auf deinem Blatt mit eigenen Worten weiter.",
        "Erzähl von eigenen Erfahrungen und sag deine Meinung.",
        "Reagiere auf die Nachfrage deines Gegenübers."
       ],
       "id": "tbb1t2k1",
       "thema": "Arbeiten weit weg von zu Hause",
       "quelle": "Informationen für dich",
       "text": "Immer mehr Menschen pendeln jeden Tag mehr als eine Stunde zur Arbeit. Andere haben unter der Woche eine kleine Wohnung am Arbeitsort und fahren nur am Wochenende nach Hause. Für viele lohnt sich das, weil sie in der Stadt besser verdienen. Aber die Kosten für Fahrten und eine zweite Wohnung sind hoch. Ein Monteur, achtunddreißig, erzählt: „Unter der Woche sehe ich meine Kinder nur am Telefon. Das Geld ist gut, aber auf Dauer möchte ich so nicht leben.\"",
       "punkte": [
        "Informationen weitergeben",
        "Eigene Erfahrungen",
        "Deine Meinung",
        "Nachfragen"
       ],
       "mustervortrag": "In meinen Informationen geht es darum, dass viele Menschen weit weg von zu Hause arbeiten. Manche fahren jeden Tag mehr als eine Stunde, andere haben unter der Woche eine zweite Wohnung am Arbeitsort. Der Grund ist oft, dass man in der Stadt mehr verdient. Aber das kostet auch viel Geld, zum Beispiel für die Fahrten und die zweite Miete. Ein Monteur sagt, dass er seine Kinder unter der Woche nur am Telefon sieht und so nicht für immer leben möchte.\nIch kenne das aus eigener Erfahrung. Mein Mann hat zwei Jahre lang in München gearbeitet, und wir haben in Augsburg gewohnt. Er war jeden Tag fast drei Stunden unterwegs. Am Abend war er sehr müde, und wir hatten kaum Zeit füreinander.\nMeiner Meinung nach kann man so etwas eine Zeit lang machen, aber nicht für immer. Die Familie und die Gesundheit sind wichtiger als ein höheres Gehalt. Was steht denn in deinen Informationen? Gibt es da vielleicht Lösungen, zum Beispiel Homeoffice?",
       "frage": "Aber manche Menschen finden in ihrer Region einfach keine Arbeit. Was sollen die machen?",
       "musterantwort": "Das stimmt, für sie ist das Pendeln oft die einzige Möglichkeit. Dann sollte der Arbeitgeber aber helfen, zum Beispiel mit einem Jobticket oder mit flexiblen Arbeitszeiten, damit sie nicht immer im Stau stehen."
      }
     ]
    },
    {
     "id": "tb1bm2r2",
     "thema": "Homeoffice",
     "karten": [
      {
       "kopf": "Teil 2 · Gespräch über ein Thema",
       "kopfb": "Deine Informationen",
       "auftrag": [
        "Gib die Informationen auf deinem Blatt mit eigenen Worten weiter.",
        "Erzähl von eigenen Erfahrungen und sag deine Meinung.",
        "Reagiere auf die Nachfrage deines Gegenübers."
       ],
       "id": "tbb1t2k2",
       "thema": "Homeoffice",
       "quelle": "Informationen für dich",
       "text": "Seit einigen Jahren arbeiten viele Büroangestellte in Deutschland regelmäßig zu Hause, meistens zwei oder drei Tage pro Woche. Sie sparen Fahrtzeit und können Familie und Beruf besser verbinden. Viele Firmen sparen außerdem Bürofläche. Studien zeigen aber auch, dass sich manche Mitarbeiter zu Hause einsam fühlen und schwer abschalten können. Eine Teamleiterin sagt: „Für Routinearbeit ist Homeoffice ideal. Aber neue Kollegen lernen viel mehr, wenn sie neben erfahrenen Leuten im Büro sitzen.\"",
       "punkte": [
        "Informationen weitergeben",
        "Eigene Erfahrungen",
        "Deine Meinung",
        "Nachfragen"
       ],
       "mustervortrag": "Mein Thema ist Homeoffice. In meinen Informationen steht, dass viele Büroangestellte inzwischen regelmäßig zu Hause arbeiten, meistens zwei oder drei Tage pro Woche. Die Vorteile sind, dass man keine Fahrtzeit hat und Familie und Beruf besser zusammenpassen. Auch die Firmen sparen, weil sie weniger Büros brauchen. Es gibt aber auch Nachteile: Manche Leute fühlen sich allein und hören zu Hause nicht richtig auf zu arbeiten. Eine Teamleiterin meint, dass Homeoffice für Routinearbeit sehr gut ist, aber neue Kollegen im Büro mehr lernen.\nBei mir in der Firma ist das ganz ähnlich. Ich arbeite in der Buchhaltung und habe zwei Tage Homeoffice. An diesen Tagen kann ich mich besser konzentrieren. Als ich neu war, war ich aber jeden Tag im Büro, und das war auch richtig so.\nIch finde, dass eine Mischung am besten ist. Ganz ohne Büro fehlt der Kontakt, aber jeden Tag ins Büro zu fahren ist auch nicht nötig. Wie ist das in deinen Informationen, wird da auch über Kosten gesprochen?",
       "frage": "Und was ist mit Berufen, in denen man gar nicht zu Hause arbeiten kann, zum Beispiel in der Pflege?",
       "musterantwort": "Das ist ein wichtiger Punkt. Für diese Menschen wirkt Homeoffice manchmal ungerecht. Deshalb sollten Firmen ihnen andere Vorteile geben, zum Beispiel flexible Schichtpläne oder mehr Urlaubstage."
      }
     ]
    },
    {
     "id": "tb1bm2r3",
     "thema": "Teilzeit",
     "karten": [
      {
       "kopf": "Teil 2 · Gespräch über ein Thema",
       "kopfb": "Deine Informationen",
       "auftrag": [
        "Gib die Informationen auf deinem Blatt mit eigenen Worten weiter.",
        "Erzähl von eigenen Erfahrungen und sag deine Meinung.",
        "Reagiere auf die Nachfrage deines Gegenübers."
       ],
       "id": "tbb1t2k3",
       "thema": "Teilzeit",
       "quelle": "Informationen für dich",
       "text": "Fast jeder dritte Beschäftigte in Deutschland arbeitet in Teilzeit, die meisten wegen Kindern oder Angehörigen, die sie pflegen. Teilzeit bedeutet mehr freie Zeit, aber auch weniger Gehalt und später weniger Rente. Außerdem bekommen Teilzeitkräfte seltener eine Beförderung. Viele Firmen bieten deshalb inzwischen Modelle an, bei denen man nach einigen Jahren leichter wieder in Vollzeit zurückkehren kann. Eine Verkäuferin erzählt: „Ich habe zwölf Jahre halbtags gearbeitet. Jetzt merke ich, wie wenig ich für das Alter gespart habe.\"",
       "punkte": [
        "Informationen weitergeben",
        "Eigene Erfahrungen",
        "Deine Meinung",
        "Nachfragen"
       ],
       "mustervortrag": "In meinen Informationen geht es um Teilzeit. Dort steht, dass fast jeder dritte Beschäftigte in Deutschland in Teilzeit arbeitet. Die meisten machen das, weil sie Kinder haben oder Familienmitglieder pflegen. Der Vorteil ist natürlich mehr freie Zeit. Aber man verdient weniger, bekommt später weniger Rente und wird seltener befördert. Deshalb gibt es inzwischen Firmen, bei denen man nach einiger Zeit leichter wieder in Vollzeit arbeiten kann. Eine Verkäuferin sagt, dass sie zwölf Jahre halbtags gearbeitet hat und jetzt merkt, dass sie zu wenig für das Alter gespart hat.\nIch selbst arbeite seit der Geburt meines Sohnes nur zwanzig Stunden pro Woche in einer Bäckerei. Für meine Familie ist das im Moment perfekt. Aber das Geld ist oft knapp, und manchmal mache ich mir auch Sorgen wegen der Rente.\nIch glaube, Teilzeit ist für eine bestimmte Zeit eine gute Lösung. Wichtig ist, dass man später wieder mehr arbeiten kann. Was steht denn bei dir? Arbeiten auch viele Männer in Teilzeit?",
       "frage": "Warum arbeiten deiner Meinung nach so wenige Männer in Teilzeit?",
       "musterantwort": "Ich glaube, viele Männer haben Angst, dass sie dann im Beruf nicht weiterkommen. Und oft verdienen sie mehr als ihre Frauen, deshalb entscheidet sich die Familie aus Geldgründen so."
      }
     ]
    },
    {
     "id": "tb1bm2r4",
     "thema": "Schichtarbeit",
     "karten": [
      {
       "kopf": "Teil 2 · Gespräch über ein Thema",
       "kopfb": "Deine Informationen",
       "auftrag": [
        "Gib die Informationen auf deinem Blatt mit eigenen Worten weiter.",
        "Erzähl von eigenen Erfahrungen und sag deine Meinung.",
        "Reagiere auf die Nachfrage deines Gegenübers."
       ],
       "id": "tbb1t2k4",
       "thema": "Schichtarbeit",
       "quelle": "Informationen für dich",
       "text": "In Krankenhäusern, Fabriken, bei der Polizei und in der Logistik wird rund um die Uhr gearbeitet. Schichtarbeiter bekommen für Nacht- und Wochenendarbeit Zuschläge und haben oft unter der Woche frei. Ärzte warnen aber: Wer lange nachts arbeitet, schläft schlechter, isst unregelmäßig und hat ein höheres Risiko für Herzkrankheiten. Ein Lagerarbeiter berichtet: „Die Zuschläge brauche ich für meine Familie. Aber nach der Nachtschicht bin ich oft so müde, dass ich mit meinen Kindern nichts mehr unternehme.\"",
       "punkte": [
        "Informationen weitergeben",
        "Eigene Erfahrungen",
        "Deine Meinung",
        "Nachfragen"
       ],
       "mustervortrag": "Mein Thema ist Schichtarbeit. In meinen Informationen steht, dass in vielen Bereichen Tag und Nacht gearbeitet wird, zum Beispiel im Krankenhaus, in Fabriken oder in der Logistik. Ein Vorteil ist, dass man für Nachtarbeit und Wochenendarbeit mehr Geld bekommt und manchmal unter der Woche frei hat. Aber Ärzte sagen, dass Nachtarbeit nicht gesund ist. Man schläft schlechter, isst unregelmäßig und bekommt leichter Probleme mit dem Herz. Ein Lagerarbeiter erzählt, dass er das Geld für seine Familie braucht, aber nach der Nachtschicht zu müde für seine Kinder ist.\nDas kann ich sehr gut verstehen. Ich arbeite selbst im Paketzentrum im Dreischichtsystem. Die Frühschicht mag ich, aber nach einer Woche Nachtschicht fühle ich mich wie krank.\nMeiner Meinung nach sollten Firmen darauf achten, dass niemand zu lange nur nachts arbeitet. Und die Pausen müssen wirklich eingehalten werden. Wie ist das in deinen Informationen? Steht da auch etwas darüber, wie man gesund bleiben kann?",
       "frage": "Würdest du auf die Zuschläge verzichten, wenn du nur noch tagsüber arbeiten könntest?",
       "musterantwort": "Im Moment leider nicht, weil wir das Geld für die Wohnung brauchen. Aber in ein paar Jahren auf jeden Fall, denn die Gesundheit ist mir wichtiger."
      }
     ]
    }
   ]
  },
  {
   "nr": 3,
   "art": "planen",
   "name": "Gemeinsam eine Aufgabe lösen",
   "kurz": "Planen und organisieren im Betrieb",
   "was": "Ihr plant gemeinsam etwas im Betrieb, zum Beispiel den Besuch einer Kundengruppe. Vorschläge machen, reagieren, einigen.",
   "tipp": "Zu jedem Punkt ein Vorschlag mit Begründung — und am Ende den Plan in einem Satz zusammenfassen.",
   "zeichen": "🤝",
   "farbe": "gruen",
   "punkte": 30,
   "runden": [
    {
     "id": "tb1bm3r1",
     "thema": "Besuch einer Kundengruppe",
     "karten": [
      {
       "kopf": "Teil 3 · Gemeinsam eine Aufgabe lösen",
       "auftrag": [
        "Mach Vorschläge zu allen Punkten und begründe sie.",
        "Reagiere auf dein Gegenüber.",
        "Einigt euch auf einen Plan."
       ],
       "id": "tbb1t3k1",
       "thema": "Besuch einer Kundengruppe",
       "aufgabe": "Nächste Woche besucht eine Gruppe von zehn Kunden aus Frankreich eure Firma. Ihr sollt den Besuchstag zusammen planen.",
       "punkte": [
        "Abholung und Ankunft?",
        "Programm in der Firma?",
        "Mittagessen?",
        "Wer begleitet die Gruppe?",
        "Geschenk zum Abschied?"
       ],
       "mustervorschlag": "Ich würde vorschlagen, dass wir die Gruppe morgens am Bahnhof mit unserem Firmenbus abholen. Dann müssen die Gäste kein Taxi suchen. In der Firma könnten wir zuerst eine kurze Präsentation machen und danach durch die Produktion gehen, das interessiert Kunden meistens am meisten. Zum Mittagessen würde ich nicht in die Kantine gehen, sondern in das italienische Restaurant gegenüber, dort ist es ruhiger. Begleiten sollte die Gruppe jemand, der Französisch spricht. Frau Dubois aus dem Vertrieb wäre doch ideal. Und zum Abschied könnten wir jedem ein kleines Paket mit Produkten aus der Region schenken. Was meinst du, sollen wir am Nachmittag noch etwas in der Stadt zeigen?",
       "mustereinigung": "Gut, dann holen wir die Gruppe um neun Uhr mit dem Firmenbus ab, machen eine Präsentation und eine Führung durch die Produktion, essen im italienischen Restaurant, Frau Dubois begleitet die Gruppe, und du kümmerst dich um die Geschenkpakete."
      }
     ]
    },
    {
     "id": "tb1bm3r2",
     "thema": "Betriebsausflug",
     "karten": [
      {
       "kopf": "Teil 3 · Gemeinsam eine Aufgabe lösen",
       "auftrag": [
        "Mach Vorschläge zu allen Punkten und begründe sie.",
        "Reagiere auf dein Gegenüber.",
        "Einigt euch auf einen Plan."
       ],
       "id": "tbb1t3k2",
       "thema": "Betriebsausflug",
       "aufgabe": "Eure Abteilung möchte im Sommer einen Betriebsausflug machen. Ihr sollt den Ausflug organisieren.",
       "punkte": [
        "Wann?",
        "Wohin?",
        "Wie fahren wir?",
        "Essen?",
        "Was ist mit Kollegen, die nicht wandern können?"
       ],
       "mustervorschlag": "Ich fände einen Freitag im Juni gut, weil dann noch nicht so viele Kollegen im Urlaub sind. Wir könnten an den See fahren, der ist nur eine Stunde entfernt. Dort kann man Boot fahren, spazieren gehen oder einfach am Ufer sitzen. Am besten mieten wir einen Bus, dann muss niemand selbst fahren, und alle können zusammen ankommen. Mittags könnten wir in einem Biergarten am See essen, da gibt es auch vegetarische Gerichte. Für Kollegen, die nicht gut laufen können, ist eine Schifffahrt ideal, da können wirklich alle mitmachen. Was hältst du davon? Oder hast du eine andere Idee?",
       "mustereinigung": "Also, wir fahren an einem Freitag im Juni mit einem gemieteten Bus an den See, machen eine Schifffahrt, damit alle mitkommen können, essen im Biergarten, und ich frage morgen bei der Busfirma nach einem Preis."
      }
     ]
    },
    {
     "id": "tb1bm3r3",
     "thema": "Einarbeitung eines neuen Kollegen",
     "karten": [
      {
       "kopf": "Teil 3 · Gemeinsam eine Aufgabe lösen",
       "auftrag": [
        "Mach Vorschläge zu allen Punkten und begründe sie.",
        "Reagiere auf dein Gegenüber.",
        "Einigt euch auf einen Plan."
       ],
       "id": "tbb1t3k3",
       "thema": "Einarbeitung eines neuen Kollegen",
       "aufgabe": "Nächsten Montag fängt ein neuer Kollege in eurem Team an. Ihr sollt seine erste Woche planen.",
       "punkte": [
        "Erster Tag?",
        "Wer ist Ansprechpartner?",
        "Welche Aufgaben in der ersten Woche?",
        "Arbeitsplatz und Technik?"
       ],
       "mustervorschlag": "Am ersten Tag sollten wir ihn morgens zusammen begrüßen und ihm das ganze Gebäude zeigen, auch die Kantine und den Pausenraum. Dann fühlt er sich gleich willkommen. Ich würde vorschlagen, dass er einen festen Ansprechpartner bekommt, zum Beispiel Herrn Yıldız, weil er schon lange im Team ist und gut erklären kann. In der ersten Woche sollte er noch keine schwierigen Aufgaben allein machen. Er könnte erst einmal bei Kollegen zuschauen und dann einfache Bestellungen bearbeiten. Ganz wichtig ist, dass sein Computer und sein Zugang am Montag schon funktionieren. Kannst du das mit der IT klären?",
       "mustereinigung": "Gut, wir begrüßen ihn am Montag gemeinsam und machen einen Rundgang, Herr Yıldız ist sein Ansprechpartner, in der ersten Woche schaut er zu und bearbeitet einfache Bestellungen, und du klärst heute noch mit der IT den Computer und den Zugang."
      }
     ]
    },
    {
     "id": "tb1bm3r4",
     "thema": "Messestand",
     "karten": [
      {
       "kopf": "Teil 3 · Gemeinsam eine Aufgabe lösen",
       "auftrag": [
        "Mach Vorschläge zu allen Punkten und begründe sie.",
        "Reagiere auf dein Gegenüber.",
        "Einigt euch auf einen Plan."
       ],
       "id": "tbb1t3k4",
       "thema": "Messestand",
       "aufgabe": "Eure Firma stellt zum ersten Mal auf einer Fachmesse aus. Ihr sollt den Messestand zusammen planen.",
       "punkte": [
        "Was zeigen wir?",
        "Wer arbeitet am Stand?",
        "Werbematerial?",
        "Getränke und Kleinigkeiten für Besucher?",
        "Aufbau und Abbau?"
       ],
       "mustervorschlag": "Ich würde vorschlagen, dass wir vor allem unser neues Produkt zeigen, weil es noch kaum jemand kennt. Am besten wäre ein Gerät, das die Besucher selbst ausprobieren können. Am Stand sollten immer zwei Personen sein, einer aus dem Vertrieb und einer aus der Technik, damit wir alle Fragen beantworten können. Wir könnten in Schichten arbeiten, dann ist niemand zu müde. Als Werbematerial brauchen wir neue Prospekte und vielleicht Kugelschreiber mit unserem Logo. Kaffee und Wasser sollten wir auf jeden Fall anbieten, das lockt Besucher an. Wie sollen wir das mit dem Aufbau machen?",
       "mustereinigung": "Also: Wir zeigen das neue Gerät zum Ausprobieren, am Stand arbeiten immer zwei Kollegen aus Vertrieb und Technik in Schichten, wir bestellen Prospekte und Kugelschreiber, bieten Kaffee und Wasser an, und der Hausmeister hilft uns beim Aufbau am Tag vorher."
      }
     ]
    }
   ]
  }
 ],
 "laeufe": [
  {
   "id": "tb1bml1",
   "titel": "Prüfungslauf 1",
   "minuten": 15,
   "teile": [
    {
     "nr": 1,
     "art": "erzaehlen",
     "thema": "Kontaktaufnahme",
     "karten": [
      {
       "kopf": "Teil 1 · Kontaktaufnahme",
       "kopfb": "Stichwortkarte",
       "auftrag": [
        "Stell dich vor — zu jedem Stichwort ein, zwei Sätze.",
        "Frag auch dein Gegenüber und antworte auf die Nachfrage."
       ],
       "id": "tbb1t1k4",
       "thema": "Kontaktaufnahme",
       "punkte": [
        "Name",
        "Herkunft",
        "Wohnort",
        "Familie",
        "Deutsch gelernt — wo?",
        "Beruf",
        "Sprachen"
       ],
       "mustervortrag": "Hallo, ich heiße Dragan Petrović und komme aus Serbien, aus Novi Sad. Ich wohne seit sechs Jahren in Stuttgart. Ich bin geschieden und habe eine Tochter, sie ist schon erwachsen und studiert in Belgrad. Deutsch habe ich am Anfang ganz allein gelernt, mit Büchern und Videos. Später habe ich abends an der Volkshochschule einen Kurs besucht. Ich bin gelernter Koch und arbeite jetzt als stellvertretender Küchenchef in einem großen Hotel. Ich plane die Menüs mit, bestelle Lebensmittel und bilde zwei Azubis aus. Das macht mir besonders viel Spaß. Neben Serbisch und Deutsch spreche ich Englisch und ein bisschen Italienisch, weil ich früher einige Jahre in Italien gearbeitet habe. Und was ist mit dir, wie lange lebst du schon hier?",
       "frage": "Möchtest du später einmal ein eigenes Restaurant haben?",
       "musterantwort": "Das ist mein großer Traum, ja. Aber zuerst möchte ich die Meisterprüfung machen. In ein paar Jahren vielleicht, wenn ich genug Geld gespart habe."
      }
     ]
    },
    {
     "nr": 2,
     "art": "erzaehlen",
     "thema": "Weiterbildung",
     "karten": [
      {
       "kopf": "Teil 2 · Gespräch über ein Thema",
       "kopfb": "Deine Informationen",
       "auftrag": [
        "Gib die Informationen auf deinem Blatt mit eigenen Worten weiter.",
        "Erzähl von eigenen Erfahrungen und sag deine Meinung.",
        "Reagiere auf die Nachfrage deines Gegenübers."
       ],
       "id": "tbb1t2k5",
       "thema": "Weiterbildung",
       "quelle": "Informationen für dich",
       "text": "Die Arbeitswelt verändert sich schnell, vor allem durch Computer und neue Maschinen. Experten sagen deshalb, dass man im Beruf nie aufhören sollte zu lernen. Viele Arbeitgeber bezahlen Kurse, manchmal auch in der Arbeitszeit. Für Arbeitslose gibt es Unterstützung von der Agentur für Arbeit. Trotzdem machen viele Beschäftigte keine Weiterbildung, weil ihnen die Zeit fehlt. Ein Elektriker meint: „Nach zehn Stunden auf der Baustelle will ich abends nicht mehr im Kurs sitzen, auch wenn er nützlich wäre.\"",
       "punkte": [
        "Informationen weitergeben",
        "Eigene Erfahrungen",
        "Deine Meinung",
        "Nachfragen"
       ],
       "mustervortrag": "In meinen Informationen geht es um Weiterbildung. Dort steht, dass sich die Arbeit durch Computer und neue Maschinen sehr schnell verändert. Deshalb sagen Experten, dass man immer weiterlernen muss. Viele Firmen bezahlen Kurse, und wer keine Arbeit hat, bekommt Hilfe von der Agentur für Arbeit. Trotzdem machen viele Leute keine Weiterbildung, weil sie keine Zeit haben. Ein Elektriker sagt zum Beispiel, dass er nach einem langen Tag auf der Baustelle abends keine Energie mehr für einen Kurs hat.\nIch habe letztes Jahr einen Kurs für Lagerlogistik gemacht. Meine Firma hat ihn bezahlt, und er war zum Glück während der Arbeitszeit. Danach habe ich eine neue Stelle als Vorarbeiter bekommen, und ich verdiene jetzt mehr.\nIch finde Weiterbildung sehr wichtig, aber ich verstehe den Elektriker. Wenn man den Kurs nach Feierabend machen muss, ist das wirklich hart. Deshalb sollten Firmen ihren Mitarbeitern dafür Zeit geben. Was steht denn in deinen Informationen? Gibt es dort auch Beispiele für Onlinekurse?",
       "frage": "Glaubst du, dass Onlinekurse genauso gut sind wie Kurse vor Ort?",
       "musterantwort": "Für Theorie, zum Beispiel für Excel oder Vorschriften, sind sie praktisch, weil man flexibel ist. Aber wenn man etwas mit den Händen lernen muss, wie Staplerfahren, geht das nur vor Ort."
      }
     ]
    },
    {
     "nr": 3,
     "art": "planen",
     "thema": "Umzug der Abteilung",
     "karten": [
      {
       "kopf": "Teil 3 · Gemeinsam eine Aufgabe lösen",
       "auftrag": [
        "Mach Vorschläge zu allen Punkten und begründe sie.",
        "Reagiere auf dein Gegenüber.",
        "Einigt euch auf einen Plan."
       ],
       "id": "tbb1t3k5",
       "thema": "Umzug der Abteilung",
       "aufgabe": "Eure Abteilung zieht in einen anderen Stock des Gebäudes um. Ihr sollt den Umzug zusammen organisieren.",
       "punkte": [
        "Wann umziehen?",
        "Wer packt was?",
        "Kunden informieren?",
        "Telefon und Computer?",
        "Neue Sitzordnung?"
       ],
       "mustervorschlag": "Ich finde, wir sollten an einem Freitagnachmittag umziehen. Dann haben wir das Wochenende Zeit, falls etwas nicht klappt, und am Montag kann alles normal laufen. Jeder sollte seinen eigenen Schreibtisch selbst packen, und für die Schränke mit den Akten könnten wir die Hausmeister fragen. Die Kunden müssen wir rechtzeitig informieren, am besten mit einer kurzen E-Mail, dass wir am Freitag nur bis Mittag erreichbar sind. Um Telefon und Computer muss sich die IT kümmern, das schaffen wir nicht allein. Wie siehst du das mit den Plätzen? Sollen die Kollegen, die viel zusammenarbeiten, nebeneinander sitzen?",
       "mustereinigung": "Okay, wir ziehen am Freitag ab Mittag um, jeder packt seinen Schreibtisch selbst, die Hausmeister tragen die Aktenschränke, ich schreibe den Kunden eine E-Mail, die IT schließt Telefon und Computer an, und die Teams sitzen im neuen Büro zusammen."
      }
     ]
    }
   ]
  },
  {
   "id": "tb1bml2",
   "titel": "Prüfungslauf 2",
   "minuten": 15,
   "teile": [
    {
     "nr": 1,
     "art": "erzaehlen",
     "thema": "Kontaktaufnahme",
     "karten": [
      {
       "kopf": "Teil 1 · Kontaktaufnahme",
       "kopfb": "Stichwortkarte",
       "auftrag": [
        "Stell dich vor — zu jedem Stichwort ein, zwei Sätze.",
        "Frag auch dein Gegenüber und antworte auf die Nachfrage."
       ],
       "id": "tbb1t1k1",
       "thema": "Kontaktaufnahme",
       "punkte": [
        "Name",
        "Herkunft",
        "Wohnort",
        "Familie",
        "Deutsch gelernt — wo?",
        "Beruf",
        "Sprachen"
       ],
       "mustervortrag": "Hallo, ich heiße Andrés Molina und komme aus Kolumbien, aus Medellín. Seit vier Jahren wohne ich in Dortmund, zusammen mit meiner Frau. Wir haben zwei Söhne, sie gehen beide schon in die Schule. Deutsch habe ich zuerst ein halbes Jahr in Kolumbien gelernt, danach habe ich hier einen Integrationskurs und einen Berufssprachkurs gemacht. Von Beruf bin ich Elektroniker. Im Moment arbeite ich bei einem Betrieb, der Solaranlagen auf Dächer baut. Ich bin oft auf Baustellen unterwegs, und das gefällt mir, weil ich nicht den ganzen Tag im Büro sitzen muss. Meine Muttersprache ist Spanisch, außerdem spreche ich Englisch und Deutsch. Und du, was machst du beruflich?",
       "frage": "Wurde deine Ausbildung in Deutschland anerkannt?",
       "musterantwort": "Ja, aber nur teilweise. Ich musste noch eine Anpassungsqualifizierung machen, das hat ungefähr acht Monate gedauert. Jetzt habe ich die volle Anerkennung, und darüber bin ich sehr froh."
      }
     ]
    },
    {
     "nr": 2,
     "art": "erzaehlen",
     "thema": "Arbeit im Ausland",
     "karten": [
      {
       "kopf": "Teil 2 · Gespräch über ein Thema",
       "kopfb": "Deine Informationen",
       "auftrag": [
        "Gib die Informationen auf deinem Blatt mit eigenen Worten weiter.",
        "Erzähl von eigenen Erfahrungen und sag deine Meinung.",
        "Reagiere auf die Nachfrage deines Gegenübers."
       ],
       "id": "tbb1t2k6",
       "thema": "Arbeit im Ausland",
       "quelle": "Informationen für dich",
       "text": "Jedes Jahr gehen viele junge Fachkräfte für einige Zeit ins Ausland, zum Beispiel als Köche, Ingenieure oder Pflegekräfte. Sie lernen eine neue Sprache, sammeln Berufserfahrung und lernen andere Arbeitsweisen kennen. Arbeitgeber schätzen das oft sehr. Schwierig sind aber Behörden, die Anerkennung von Abschlüssen und das Heimweh. Eine Physiotherapeutin aus Leipzig berichtet: „Mein Jahr in Norwegen war toll. Aber zurück in Deutschland musste ich fast wieder bei null anfangen, weil niemand meine Erfahrung richtig zählen wollte.\"",
       "punkte": [
        "Informationen weitergeben",
        "Eigene Erfahrungen",
        "Deine Meinung",
        "Nachfragen"
       ],
       "mustervortrag": "Mein Thema ist Arbeit im Ausland. In meinen Informationen steht, dass jedes Jahr viele junge Fachkräfte für eine Zeit in einem anderen Land arbeiten, zum Beispiel in der Gastronomie, in der Technik oder in der Pflege. Sie lernen eine Sprache, sammeln Erfahrung und lernen andere Arbeitsweisen kennen. Viele Arbeitgeber finden das sehr gut. Probleme gibt es aber mit Behörden, mit der Anerkennung von Abschlüssen und mit dem Heimweh. Eine Physiotherapeutin erzählt, dass ihr Jahr in Norwegen toll war, sie aber in Deutschland fast neu anfangen musste.\nFür mich ist Deutschland ja selbst das Ausland. Ich bin vor drei Jahren aus Indien gekommen und arbeite als Softwareentwickler. Am Anfang war die Bürokratie wirklich schlimm, und ich habe meine Familie sehr vermisst. Aber beruflich habe ich hier unglaublich viel gelernt.\nIch finde, jeder sollte einmal im Ausland arbeiten, wenn er die Möglichkeit hat. Man wird selbstständiger und offener. Wie ist das in deinen Informationen, steht da etwas darüber, wie man sich gut vorbereiten kann?",
       "frage": "Würdest du später in dein Heimatland zurückgehen?",
       "musterantwort": "Vielleicht, wenn meine Eltern älter sind und Hilfe brauchen. Aber im Moment fühle ich mich hier wohl, und mit meiner Erfahrung aus Deutschland hätte ich in Indien auch gute Chancen."
      }
     ]
    },
    {
     "nr": 3,
     "art": "planen",
     "thema": "Weihnachtsfeier im Betrieb",
     "karten": [
      {
       "kopf": "Teil 3 · Gemeinsam eine Aufgabe lösen",
       "auftrag": [
        "Mach Vorschläge zu allen Punkten und begründe sie.",
        "Reagiere auf dein Gegenüber.",
        "Einigt euch auf einen Plan."
       ],
       "id": "tbb1t3k6",
       "thema": "Weihnachtsfeier im Betrieb",
       "aufgabe": "Ihr seid im Team für die Weihnachtsfeier eurer Firma zuständig. Ihr sollt die Feier zusammen planen.",
       "punkte": [
        "Termin und Ort?",
        "Essen und Getränke?",
        "Programm?",
        "Wer bezahlt?",
        "Was ist mit den Kollegen in der Spätschicht?"
       ],
       "mustervorschlag": "Ich würde vorschlagen, dass wir die Feier nicht direkt vor Weihnachten machen, sondern Anfang Dezember. Dann haben mehr Kollegen Zeit. Wir könnten in der Kantine feiern, das ist günstig und alle kennen den Weg. Beim Essen fände ich ein Buffet am besten, damit für jeden etwas dabei ist, auch vegetarisch und ohne Schweinefleisch. Als Programm könnten wir ein Wichteln machen und vielleicht ein kleines Quiz über die Firma. Die Firma bezahlt hoffentlich das Essen, die Getränke vielleicht auch. Für die Kollegen in der Spätschicht könnten wir das Buffet bis zweiundzwanzig Uhr stehen lassen. Was meinst du dazu?",
       "mustereinigung": "Gut, dann feiern wir am ersten Freitag im Dezember in der Kantine mit einem Buffet, machen ein Wichteln und ein Quiz, ich frage die Geschäftsführung wegen der Kosten, und das Buffet bleibt bis zweiundzwanzig Uhr für die Spätschicht stehen."
      }
     ]
    }
   ]
  }
 ]
};
