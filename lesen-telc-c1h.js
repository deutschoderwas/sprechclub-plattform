/* ============================================================
   deutschoderwas club — LESEN + SPRACHBAUSTEINE telc Deutsch C1 Hochschule

   Aufbau nach dem offiziellen telc-Format (telc „Tipps zur
   Prüfungsvorbereitung Deutsch C1 Hochschule", geprüft 02.11.2026).
   Alle Texte und Aufgaben eigene, nur das Format ist nachgebaut.
   Erzeugt aus scratchpad/telcc1 mit bau.js.
   ============================================================ */

window.LESEN_TELC_C1H = {
 "niveau": "telcC1H",
 "pruefung": "telc Deutsch C1 Hochschule",
 "minuten": 90,
 "punkte": 46,
 "stufen": [
  {
   "nr": 1,
   "titel": "Texte verstehen",
   "zeichen": "🧭",
   "was": "Verweiswörter und die Frage: richtig, falsch oder steht nicht im Text?"
  },
  {
   "nr": 2,
   "titel": "Wissenschaftssprache",
   "zeichen": "🎓",
   "was": "Nominalstil, Passiv, Funktionsverbgefüge — wie in den Sprachbausteinen."
  },
  {
   "nr": 3,
   "titel": "Die Aufgabentypen",
   "zeichen": "🎯",
   "was": "Textrekonstruktion, Abschnitte, Detailverstehen, Sprachbausteine."
  },
  {
   "nr": 4,
   "titel": "Die ganze Prüfung",
   "zeichen": "⏱️",
   "was": "Alles am Stück: 46 Aufgaben, 90 Minuten."
  }
 ],
 "bloecke": [
  {
   "id": "tc1l1",
   "stufe": 1,
   "titel": "Texte zusammenhalten: Verweiswörter und Konnektoren",
   "kurz": "Wer sich auf wen bezieht und wie Sätze logisch verbunden sind",
   "ziel": "Nach diesem Block erkennst du, worauf Verweiswörter zurückgreifen, und wählst den Konnektor, der die Logik zwischen zwei Aussagen genau trifft.",
   "zeichen": "🔗",
   "farbe": "turq",
   "aufgaben": [
    {
     "art": "wahl",
     "frage": "„Die Ergebnisse waren eindeutig, … die Stichprobe vergleichsweise klein war.\" Welcher Konnektor passt? (Einräumung)",
     "opt": [
      "obgleich",
      "zumal",
      "sofern"
     ],
     "loesung": 0,
     "erklaerung": "„obgleich\" = obwohl: Trotz kleiner Stichprobe waren die Ergebnisse eindeutig."
    },
    {
     "art": "wahl",
     "frage": "„Die Methode ist aufwendig, … sie zusätzliches Personal erfordert.\" Welcher Konnektor passt? (ein Grund, der die Aussage noch verstärkt)",
     "opt": [
      "sofern",
      "zumal",
      "obwohl"
     ],
     "loesung": 1,
     "erklaerung": "„zumal\" fügt einen zusätzlichen, verstärkenden Grund an."
    },
    {
     "art": "wahl",
     "frage": "„Die Förderung wird verlängert, … der Zwischenbericht positiv ausfällt.\" Welcher Konnektor passt? (Bedingung)",
     "opt": [
      "sofern",
      "wohingegen",
      "zumal"
     ],
     "loesung": 0,
     "erklaerung": "„sofern\" = unter der Bedingung, dass."
    },
    {
     "art": "wahl",
     "frage": "„Die erste Gruppe verbesserte sich deutlich, … die zweite kaum Fortschritte machte.\" Welcher Konnektor passt? (Gegensatz)",
     "opt": [
      "indem",
      "wohingegen",
      "sodass"
     ],
     "loesung": 1,
     "erklaerung": "„wohingegen\" stellt zwei Gruppen gegenüber."
    },
    {
     "art": "wahl",
     "frage": "„Die Versuchspersonen schliefen im Labor. … wurden ihre Hirnströme gemessen.\" Welches Verweiswort passt? (gleichzeitig)",
     "opt": [
      "Dabei",
      "Davon",
      "Darauf"
     ],
     "loesung": 0,
     "erklaerung": "„dabei\" = während sie schliefen."
    },
    {
     "art": "wahl",
     "frage": "„Albers und Reinhardt kommen zu unterschiedlichen Schlüssen. Während Erstere die Methode lobt, äußert sich … skeptisch.\" Wer ist gemeint?",
     "opt": [
      "beide gemeinsam",
      "Ersterer, also Albers",
      "Letzterer, also Reinhardt"
     ],
     "loesung": 2,
     "erklaerung": "„Letzterer\" verweist auf den zuletzt genannten Mann, hier Reinhardt."
    },
    {
     "art": "wahl",
     "frage": "„Viele Studenten lernen bis tief in die Nacht. … Verhalten halten Schlafforscher für ungünstig.\" Was passt?",
     "opt": [
      "Dieses",
      "Dieser",
      "Diese"
     ],
     "loesung": 0,
     "erklaerung": "„das Verhalten\" ist neutral: „dieses Verhalten\" fasst den Satz davor zusammen."
    },
    {
     "art": "wahl",
     "frage": "„Die Daten sind lückenhaft; … lassen sich keine sicheren Schlüsse ziehen.\" Was passt? (Folge)",
     "opt": [
      "hingegen",
      "zwar",
      "folglich"
     ],
     "loesung": 2,
     "erklaerung": "„folglich\" leitet die Konsequenz aus den lückenhaften Daten ein."
    },
    {
     "art": "wahl",
     "frage": "„Die Studie ist … aussagekräftig, als sie über mehrere Jahre lief.\" Was passt?",
     "opt": [
      "zumal",
      "sofern",
      "insofern"
     ],
     "loesung": 2,
     "erklaerung": "„insofern …, als\" = in dem Maße, wie; schränkt die Aussage auf einen Grund ein."
    },
    {
     "art": "wahl",
     "frage": "„Zwar ist der Effekt klein, … ist er statistisch gut abgesichert.\" Was passt?",
     "opt": [
      "denn",
      "doch",
      "sondern"
     ],
     "loesung": 1,
     "erklaerung": "„zwar … doch/aber\" räumt etwas ein und setzt einen Gegenpunkt."
    }
   ]
  },
  {
   "id": "tc1l2",
   "stufe": 1,
   "titel": "Richtig, falsch oder steht nicht im Text?",
   "kurz": "Widerspruch und Lücke sauber auseinanderhalten",
   "ziel": "Nach diesem Block unterscheidest du sicher, ob der Text einer Aussage widerspricht oder zu ihr einfach nichts sagt.",
   "zeichen": "⚖️",
   "farbe": "gold",
   "aufgaben": [
    {
     "art": "wahl",
     "frage": "Text: „Die Untersuchung wurde ausschließlich aus privaten Spenden finanziert.\" Aussage: „Die Untersuchung wurde mit öffentlichen Geldern bezahlt.\"",
     "opt": [
      "richtig",
      "falsch",
      "steht nicht im Text"
     ],
     "loesung": 1,
     "erklaerung": "„ausschließlich privat\" schließt öffentliche Gelder aus: Widerspruch, also falsch."
    },
    {
     "art": "wahl",
     "frage": "Text: „Die Versuchspersonen lernten am Abend Vokabeln und schliefen anschließend im Labor.\" Aussage: „Die Versuchspersonen verbrachten die Nacht im Labor.\"",
     "opt": [
      "richtig",
      "falsch",
      "steht nicht im Text"
     ],
     "loesung": 0,
     "erklaerung": "„schliefen anschließend im Labor\" ist mit anderen Worten dasselbe."
    },
    {
     "art": "wahl",
     "frage": "Text: „Die Versuchspersonen lernten am Abend Vokabeln und schliefen anschließend im Labor.\" Aussage: „Alle Versuchspersonen waren Studenten.\"",
     "opt": [
      "richtig",
      "falsch",
      "steht nicht im Text"
     ],
     "loesung": 2,
     "erklaerung": "Wer die Personen waren, sagt der Text nicht."
    },
    {
     "art": "wahl",
     "frage": "Text: „Kritiker halten die Stichprobe für zu klein, um allgemeine Aussagen zu treffen.\" Aussage: „Nach Ansicht der Kritiker lassen sich die Ergebnisse ohne Weiteres verallgemeinern.\"",
     "opt": [
      "richtig",
      "falsch",
      "steht nicht im Text"
     ],
     "loesung": 1,
     "erklaerung": "Die Kritiker meinen genau das Gegenteil."
    },
    {
     "art": "wahl",
     "frage": "Text: „Bislang ist kaum untersucht, wie sich der Effekt bei älteren Menschen zeigt.\" Aussage: „Bei älteren Menschen ist der Effekt schwächer.\"",
     "opt": [
      "richtig",
      "falsch",
      "steht nicht im Text"
     ],
     "loesung": 2,
     "erklaerung": "Der Text nennt nur eine Forschungslücke, kein Ergebnis zu Älteren."
    },
    {
     "art": "wahl",
     "frage": "Text: „Nicht die Dauer, sondern die Regelmäßigkeit des Lernens erwies sich als entscheidend.\" Aussage: „Wichtiger als lange Lernzeiten ist es, regelmäßig zu lernen.\"",
     "opt": [
      "richtig",
      "falsch",
      "steht nicht im Text"
     ],
     "loesung": 0,
     "erklaerung": "„nicht die Dauer, sondern die Regelmäßigkeit\" wird nur umformuliert."
    },
    {
     "art": "wahl",
     "frage": "Text: „Die Teilnahme an dem Programm ist freiwillig, wird aber dringend empfohlen.\" Aussage: „Erstsemester sind verpflichtet, an dem Programm teilzunehmen.\"",
     "opt": [
      "richtig",
      "falsch",
      "steht nicht im Text"
     ],
     "loesung": 1,
     "erklaerung": "„freiwillig\" widerspricht „verpflichtet\"; „empfohlen\" ist keine Pflicht."
    },
    {
     "art": "wahl",
     "frage": "Text: „Die Forscherin räumt ein, dass ihre Methode gewisse Schwächen hat.\" Aussage: „Die Forscherin gibt zu, dass ihre Untersuchung nicht ohne Mängel ist.\"",
     "opt": [
      "richtig",
      "falsch",
      "steht nicht im Text"
     ],
     "loesung": 0,
     "erklaerung": "„einräumen\" = zugeben; „Schwächen\" = Mängel."
    },
    {
     "art": "wahl",
     "frage": "Text: „Das Modell wurde im vergangenen Jahr in vierzig Betrieben erprobt.\" Aussage: „Das Modell soll im nächsten Jahr fortgesetzt werden.\"",
     "opt": [
      "richtig",
      "falsch",
      "steht nicht im Text"
     ],
     "loesung": 2,
     "erklaerung": "Über Pläne für die Zukunft steht nichts im Text."
    },
    {
     "art": "wahl",
     "frage": "Text: „Weniger als die Hälfte der Befragten hielt pauschales Lob für glaubwürdig.\" Aussage: „Die Mehrheit der Befragten hielt pauschales Lob für glaubwürdig.\"",
     "opt": [
      "richtig",
      "falsch",
      "steht nicht im Text"
     ],
     "loesung": 1,
     "erklaerung": "„weniger als die Hälfte\" ist keine Mehrheit."
    }
   ]
  },
  {
   "id": "tc1l3",
   "stufe": 2,
   "titel": "Wissenschaftssprache: Nominalstil und Passiv",
   "kurz": "Nebensätze verdichten, Handelnde in den Hintergrund rücken",
   "ziel": "Nach diesem Block formst du Nebensätze in Nominalgruppen um und erkennst Passiv, Passiversatz und Partizipialattribute in Fachtexten.",
   "zeichen": "🔬",
   "farbe": "rot",
   "aufgaben": [
    {
     "art": "wahl",
     "frage": "Nominalstil: „Nachdem die Daten ausgewertet worden waren, …\"",
     "opt": [
      "Nach Auswerten den Daten …",
      "Nach Auswertung der Daten …",
      "Nach der Daten Auswertung …"
     ],
     "loesung": 1,
     "erklaerung": "Verb → Nomen (auswerten → Auswertung), Objekt → Genitivattribut."
    },
    {
     "art": "wahl",
     "frage": "Nominalstil: „Weil die Kosten gestiegen sind, …\"",
     "opt": [
      "Aufgrund dem Anstieg der Kosten …",
      "Aufgrund des Anstiegs der Kosten …",
      "Wegen die Kosten steigen …"
     ],
     "loesung": 1,
     "erklaerung": "„aufgrund\" verlangt den Genitiv: „des Anstiegs\"."
    },
    {
     "art": "wahl",
     "frage": "Nominalstil: „Wenn man die Regeln nicht beachtet, …\"",
     "opt": [
      "Mit Nichtbeachten von Regeln …",
      "Durch die Regeln Nichtbeachtung …",
      "Bei Nichtbeachtung der Regeln …"
     ],
     "loesung": 2,
     "erklaerung": "Bedingung „wenn\" → „bei\" + Nomen."
    },
    {
     "art": "wahl",
     "frage": "Passiv Perfekt: „Man hat die Ergebnisse bereits veröffentlicht.\"",
     "opt": [
      "Die Ergebnisse sind bereits veröffentlicht worden.",
      "Die Ergebnisse haben bereits veröffentlicht worden.",
      "Die Ergebnisse sind bereits veröffentlicht geworden."
     ],
     "loesung": 0,
     "erklaerung": "Passiv Perfekt: „sein\" + Partizip II + „worden\" (nicht „geworden\")."
    },
    {
     "art": "wahl",
     "frage": "Passiv mit Modalverb: „Man muss die Methode überprüfen.\"",
     "opt": [
      "Die Methode muss überprüft werden.",
      "Die Methode muss überprüfen werden.",
      "Die Methode wird überprüft müssen."
     ],
     "loesung": 0,
     "erklaerung": "Modalverb + Partizip II + „werden\"."
    },
    {
     "art": "wahl",
     "frage": "Passiversatz: „Die Hypothese kann nicht bestätigt werden.\" = Die Hypothese …",
     "opt": [
      "hat nicht zu bestätigen.",
      "ist nicht bestätigend.",
      "ist nicht zu bestätigen."
     ],
     "loesung": 2,
     "erklaerung": "„sein + zu + Infinitiv\" = Passiv mit „können\" oder „müssen\"."
    },
    {
     "art": "wahl",
     "frage": "Passiversatz: „Die Folgen können kaum abgeschätzt werden.\" = Die Folgen sind kaum …",
     "opt": [
      "abschätzend.",
      "abschätzbar.",
      "abgeschätzbar."
     ],
     "loesung": 1,
     "erklaerung": "Verbstamm + „-bar\" = kann … werden."
    },
    {
     "art": "wahl",
     "frage": "Partizipialattribut: „die Studie, die im Jahr zuvor durchgeführt worden war\" = …",
     "opt": [
      "die im Jahr zuvor durchgeführten Studie",
      "die im Jahr zuvor durchgeführte Studie",
      "die im Jahr zuvor durchführende Studie"
     ],
     "loesung": 1,
     "erklaerung": "Passiv und abgeschlossen → Partizip II; Nominativ Singular nach „die\": Endung -e."
    },
    {
     "art": "wahl",
     "frage": "Was bedeutet „die zu prüfenden Anträge\"?",
     "opt": [
      "die Anträge, die geprüft werden müssen",
      "die Anträge, die bereits geprüft wurden",
      "die Anträge, die etwas prüfen"
     ],
     "loesung": 0,
     "erklaerung": "„zu + Partizip I\" als Attribut = muss/kann … werden."
    },
    {
     "art": "wahl",
     "frage": "„Die Bibliothek … seit Montag geschlossen.\" Gemeint ist ein Zustand.",
     "opt": [
      "wird",
      "wurde",
      "ist"
     ],
     "loesung": 2,
     "erklaerung": "Zustandspassiv: „sein\" + Partizip II beschreibt das Ergebnis."
    }
   ]
  },
  {
   "id": "tc1l4",
   "stufe": 2,
   "titel": "Funktionsverbgefüge und feste Präpositionen",
   "kurz": "Feste Verbindungen, die man nicht übersetzen, sondern kennen muss",
   "ziel": "Nach diesem Block kennst du typische Nomen-Verb-Verbindungen der Wissenschaftssprache und die Präpositionen, die zu ihnen gehören.",
   "zeichen": "🧩",
   "farbe": "lila",
   "aufgaben": [
    {
     "art": "wahl",
     "frage": "„Die Ergebnisse wurden von mehreren Fachleuten in Frage …\"",
     "opt": [
      "gestellt",
      "gebracht",
      "gesetzt"
     ],
     "loesung": 0,
     "erklaerung": "„etwas in Frage stellen\" = bezweifeln."
    },
    {
     "art": "wahl",
     "frage": "„Die neue Prüfungsordnung tritt im Oktober in …\"",
     "opt": [
      "Kraft",
      "Geltung",
      "Wirkung"
     ],
     "loesung": 0,
     "erklaerung": "„in Kraft treten\" = gültig werden."
    },
    {
     "art": "wahl",
     "frage": "„Die Arbeitsgruppe hat einen Antrag … Förderung gestellt.\"",
     "opt": [
      "auf",
      "nach",
      "für"
     ],
     "loesung": 0,
     "erklaerung": "„einen Antrag auf etwas stellen\"."
    },
    {
     "art": "wahl",
     "frage": "„Die Studie … zu dem Ergebnis, dass Schlaf das Gedächtnis stärkt.\"",
     "opt": [
      "stellt",
      "kommt",
      "bringt"
     ],
     "loesung": 1,
     "erklaerung": "„zu einem Ergebnis kommen\"."
    },
    {
     "art": "wahl",
     "frage": "„Die Rückmeldungen der Studenten … in die Planung des nächsten Semesters ein.\" (= werden berücksichtigt)",
     "opt": [
      "treten",
      "laufen",
      "fließen"
     ],
     "loesung": 2,
     "erklaerung": "„in etwas einfließen\" = berücksichtigt werden."
    },
    {
     "art": "wahl",
     "frage": "„Die Hochschulleitung hat die Kritik zur … genommen.\"",
     "opt": [
      "Kunde",
      "Kenntnis",
      "Wissen"
     ],
     "loesung": 1,
     "erklaerung": "„etwas zur Kenntnis nehmen\"."
    },
    {
     "art": "wahl",
     "frage": "„Das neue Verfahren … auf großen Widerstand.\"",
     "opt": [
      "lief",
      "fiel",
      "stieß"
     ],
     "loesung": 2,
     "erklaerung": "„auf Widerstand stoßen\"."
    },
    {
     "art": "wahl",
     "frage": "„Nach langer Diskussion ist das Gremium … dem Schluss gelangt, dass …\"",
     "opt": [
      "zu",
      "an",
      "auf"
     ],
     "loesung": 0,
     "erklaerung": "„zu einem Schluss gelangen\"."
    },
    {
     "art": "wahl",
     "frage": "„Die neuen Daten stehen im Widerspruch … früheren Befunden.\"",
     "opt": [
      "mit",
      "zu",
      "gegen"
     ],
     "loesung": 1,
     "erklaerung": "„im Widerspruch zu etwas stehen\"."
    },
    {
     "art": "wahl",
     "frage": "„In ihrem Aufsatz setzt sich die Autorin kritisch … dieser These auseinander.\"",
     "opt": [
      "an",
      "mit",
      "über"
     ],
     "loesung": 1,
     "erklaerung": "„sich mit etwas auseinandersetzen\"."
    }
   ]
  }
 ],
 "teile": [
  {
   "nr": 1,
   "art": "textwahl",
   "name": "Lesen: Textrekonstruktion",
   "kurz": "Sechs Lücken, acht Sätze — zwei passen nirgends",
   "was": "Aus einem Fachtext fehlen sechs Sätze. Du setzt aus acht Sätzen die passenden ein. Zwei bleiben übrig.",
   "tipp": "Der Satz muss nach vorne UND nach hinten passen: Worauf verweist „dies\", „diese Ergebnisse\", „dagegen\"?",
   "zeichen": "🧱",
   "farbe": "turq",
   "punkte": 6,
   "runden": [
    {
     "id": "c1c1t1s1",
     "text": {
      "sorte": "zeitung",
      "quelle": "Forum Lernforschung",
      "titel": "Mit der Hand denken",
      "zeilen": [
       "Seit Laptops und Tablets in den Hörsälen zur Grundausstattung gehören, ist die handschriftliche Mitschrift für viele Studenten zu einer Art Relikt geworden. Wer tippt, schreibt schneller, kann seine Notizen später durchsuchen und muss sich nicht mit unleserlichen Zetteln herumschlagen. __(1)__ Eine Arbeitsgruppe um die Bildungspsychologin Irene Valcárcel an der Universität Hohenbruck ist dieser Frage in einer Reihe von Experimenten nachgegangen. Ihre Ergebnisse, die kürzlich in einer Fachzeitschrift für pädagogische Psychologie erschienen sind, dürften die Debatte um digitale Medien im Studium neu beleben.",
       "Die Versuchspersonen, insgesamt knapp zweihundert Studenten verschiedener Fächer, sahen kurze Fachvorträge und sollten dabei mitschreiben – die eine Hälfte per Hand, die andere am Laptop. Anschließend wurden sie zu den Inhalten befragt, und zwar sowohl unmittelbar nach dem Vortrag als auch eine Woche später. __(2)__ Bei Fragen, die ein Verständnis von Zusammenhängen erforderten, schnitt die Handschrift-Gruppe dagegen deutlich besser ab, und dieser Vorsprung wuchs mit dem zeitlichen Abstand sogar noch an.",
       "Wie lässt sich dieser Befund erklären? Valcárcel verweist vor allem auf die Geschwindigkeit. Wer am Laptop mitschreibt, kann einem Vortrag nahezu wörtlich folgen. __(3)__ Wer dagegen mit der Hand schreibt, ist für eine vollständige Abschrift schlicht zu langsam. Er muss deshalb laufend entscheiden, was wichtig ist, und das Gehörte in eigene Worte fassen. „Genau diese Verdichtung ist bereits ein Lernvorgang“, so die Forscherin. Die Auswahl zwingt dazu, Zusammenhänge zu erkennen und das Neue mit bereits vorhandenem Wissen zu verknüpfen.",
       "Naheliegend wäre nun der Schluss, man müsse Laptops aus den Seminarräumen verbannen. __(4)__ In einer zweiten Versuchsreihe forderte das Team die Laptop-Gruppe ausdrücklich auf, nicht wörtlich mitzuschreiben, sondern zusammenzufassen. Das Ergebnis war ernüchternd: Die meisten Versuchspersonen fielen nach wenigen Minuten in das gewohnte Muster zurück. Erst als die Software so eingestellt wurde, dass nach jedem Satz eine kurze Schreibpause erzwungen wurde, glichen sich die Leistungen der beiden Gruppen an. Eine solche Bremse würden allerdings wohl nur wenige Studenten freiwillig nutzen.",
       "Für die Hochschuldidaktik ergeben sich daraus mehrere Konsequenzen. Dozenten sollten Vorträge so gestalten, dass sie zum Verdichten einladen, etwa durch Leitfragen, Zwischenzusammenfassungen oder bewusst gesetzte Pausen. __(5)__ Zudem könnten Einführungskurse zu Lerntechniken deutlich machen, dass das Tempo beim Mitschreiben nicht mit dem Lernerfolg verwechselt werden darf. Auch Prüfungsformate, die Verständnis statt bloßer Wiedergabe abfragen, könnten hier das richtige Signal setzen.",
       "Valcárcel selbst versteht die Ergebnisse nicht als Plädoyer für Papier und Stift. __(6)__ Entscheidend sei nicht das Werkzeug, sondern die geistige Tätigkeit, die es fördert oder eben verhindert. Wer am Laptop konsequent in eigenen Worten notiert, dürfte ähnlich profitieren wie jemand, der mit dem Füller schreibt – nur gelingt das, wie die Studie zeigt, den wenigsten."
      ]
     },
     "aufgaben": [
      {
       "frage": "Welcher Satz gehört in Lücke 1?",
       "luecke": 1,
       "opt": [
        "Davor warnen die Autoren der Studie allerdings ausdrücklich.",
        "Bei reinen Faktenfragen unterschieden sich die beiden Gruppen kaum.",
        "Die Handschrift-Gruppe erinnerte sich deshalb an deutlich mehr Fakten als die Laptop-Gruppe.",
        "Ihr gehe es vielmehr um die Frage, was beim Mitschreiben im Kopf geschieht.",
        "Ob diese Vorteile jedoch auch dem Lernen zugutekommen, ist keineswegs ausgemacht.",
        "Auch Tablets mit Eingabestift erwiesen sich in diesem Versuch als gleichwertige Alternative zum Papier.",
        "Folien mit vollständig ausformulierten Sätzen seien in dieser Hinsicht eher hinderlich, weil sie zum Abschreiben verleiten.",
        "Genau das aber verleitet dazu, Sätze bloß zu übertragen, ohne sie gedanklich zu verarbeiten."
       ],
       "loesung": 4,
       "fest": true,
       "erklaerung": "„diese Vorteile“ greift die Vorteile des Tippens auf, „diese Frage“ im nächsten Satz bezieht sich auf den Satz zurück."
      },
      {
       "frage": "Welcher Satz gehört in Lücke 2?",
       "luecke": 2,
       "opt": [
        "Davor warnen die Autoren der Studie allerdings ausdrücklich.",
        "Bei reinen Faktenfragen unterschieden sich die beiden Gruppen kaum.",
        "Die Handschrift-Gruppe erinnerte sich deshalb an deutlich mehr Fakten als die Laptop-Gruppe.",
        "Ihr gehe es vielmehr um die Frage, was beim Mitschreiben im Kopf geschieht.",
        "Ob diese Vorteile jedoch auch dem Lernen zugutekommen, ist keineswegs ausgemacht.",
        "Auch Tablets mit Eingabestift erwiesen sich in diesem Versuch als gleichwertige Alternative zum Papier.",
        "Folien mit vollständig ausformulierten Sätzen seien in dieser Hinsicht eher hinderlich, weil sie zum Abschreiben verleiten.",
        "Genau das aber verleitet dazu, Sätze bloß zu übertragen, ohne sie gedanklich zu verarbeiten."
       ],
       "loesung": 1,
       "fest": true,
       "erklaerung": "Der Konnektor „dagegen“ im Folgesatz verlangt einen Gegensatz: kaum Unterschied bei Fakten, großer bei Zusammenhängen."
      },
      {
       "frage": "Welcher Satz gehört in Lücke 3?",
       "luecke": 3,
       "opt": [
        "Davor warnen die Autoren der Studie allerdings ausdrücklich.",
        "Bei reinen Faktenfragen unterschieden sich die beiden Gruppen kaum.",
        "Die Handschrift-Gruppe erinnerte sich deshalb an deutlich mehr Fakten als die Laptop-Gruppe.",
        "Ihr gehe es vielmehr um die Frage, was beim Mitschreiben im Kopf geschieht.",
        "Ob diese Vorteile jedoch auch dem Lernen zugutekommen, ist keineswegs ausgemacht.",
        "Auch Tablets mit Eingabestift erwiesen sich in diesem Versuch als gleichwertige Alternative zum Papier.",
        "Folien mit vollständig ausformulierten Sätzen seien in dieser Hinsicht eher hinderlich, weil sie zum Abschreiben verleiten.",
        "Genau das aber verleitet dazu, Sätze bloß zu übertragen, ohne sie gedanklich zu verarbeiten."
       ],
       "loesung": 7,
       "fest": true,
       "erklaerung": "„Genau das“ verweist auf das fast wörtliche Mitschreiben; „Wer dagegen“ setzt danach die Handschrift ab."
      },
      {
       "frage": "Welcher Satz gehört in Lücke 4?",
       "luecke": 4,
       "opt": [
        "Davor warnen die Autoren der Studie allerdings ausdrücklich.",
        "Bei reinen Faktenfragen unterschieden sich die beiden Gruppen kaum.",
        "Die Handschrift-Gruppe erinnerte sich deshalb an deutlich mehr Fakten als die Laptop-Gruppe.",
        "Ihr gehe es vielmehr um die Frage, was beim Mitschreiben im Kopf geschieht.",
        "Ob diese Vorteile jedoch auch dem Lernen zugutekommen, ist keineswegs ausgemacht.",
        "Auch Tablets mit Eingabestift erwiesen sich in diesem Versuch als gleichwertige Alternative zum Papier.",
        "Folien mit vollständig ausformulierten Sätzen seien in dieser Hinsicht eher hinderlich, weil sie zum Abschreiben verleiten.",
        "Genau das aber verleitet dazu, Sätze bloß zu übertragen, ohne sie gedanklich zu verarbeiten."
       ],
       "loesung": 0,
       "fest": true,
       "erklaerung": "„Davor“ bezieht sich auf den Schluss, Laptops zu verbannen; die zweite Versuchsreihe zeigt die Alternative."
      },
      {
       "frage": "Welcher Satz gehört in Lücke 5?",
       "luecke": 5,
       "opt": [
        "Davor warnen die Autoren der Studie allerdings ausdrücklich.",
        "Bei reinen Faktenfragen unterschieden sich die beiden Gruppen kaum.",
        "Die Handschrift-Gruppe erinnerte sich deshalb an deutlich mehr Fakten als die Laptop-Gruppe.",
        "Ihr gehe es vielmehr um die Frage, was beim Mitschreiben im Kopf geschieht.",
        "Ob diese Vorteile jedoch auch dem Lernen zugutekommen, ist keineswegs ausgemacht.",
        "Auch Tablets mit Eingabestift erwiesen sich in diesem Versuch als gleichwertige Alternative zum Papier.",
        "Folien mit vollständig ausformulierten Sätzen seien in dieser Hinsicht eher hinderlich, weil sie zum Abschreiben verleiten.",
        "Genau das aber verleitet dazu, Sätze bloß zu übertragen, ohne sie gedanklich zu verarbeiten."
       ],
       "loesung": 6,
       "fest": true,
       "erklaerung": "„in dieser Hinsicht“ knüpft an das Verdichten an, „Zudem“ setzt die Liste der Konsequenzen fort."
      },
      {
       "frage": "Welcher Satz gehört in Lücke 6?",
       "luecke": 6,
       "opt": [
        "Davor warnen die Autoren der Studie allerdings ausdrücklich.",
        "Bei reinen Faktenfragen unterschieden sich die beiden Gruppen kaum.",
        "Die Handschrift-Gruppe erinnerte sich deshalb an deutlich mehr Fakten als die Laptop-Gruppe.",
        "Ihr gehe es vielmehr um die Frage, was beim Mitschreiben im Kopf geschieht.",
        "Ob diese Vorteile jedoch auch dem Lernen zugutekommen, ist keineswegs ausgemacht.",
        "Auch Tablets mit Eingabestift erwiesen sich in diesem Versuch als gleichwertige Alternative zum Papier.",
        "Folien mit vollständig ausformulierten Sätzen seien in dieser Hinsicht eher hinderlich, weil sie zum Abschreiben verleiten.",
        "Genau das aber verleitet dazu, Sätze bloß zu übertragen, ohne sie gedanklich zu verarbeiten."
       ],
       "loesung": 3,
       "fest": true,
       "erklaerung": "„Ihr“ meint Valcárcel; „vielmehr“ korrigiert die Verneinung „nicht als Plädoyer“ im Satz davor."
      }
     ]
    },
    {
     "id": "c1c1t1s2",
     "text": {
      "sorte": "zeitung",
      "quelle": "Stadtökologie – Zeitschrift für urbane Umweltforschung",
      "titel": "Klimaanlage mit Wurzeln",
      "zeilen": [
       "Wenn im Hochsommer die Temperaturen in den Innenstädten auf über 35 Grad steigen, suchen viele Menschen instinktiv den Schatten großer Bäume. Dass Bäume kühlen, ist seit Langem bekannt. __(1)__ Ein Forschungsprojekt der Technischen Hochschule Ostrau hat nun erstmals über drei Sommer hinweg gemessen, wie stark dieser Effekt in verschiedenen Straßentypen tatsächlich ausfällt. Die Daten sollen den Städten helfen, ihre knappen Mittel für Begrünung gezielter einzusetzen.",
       "Dazu installierte das Team um den Klimatologen Bernd Aschauer rund 150 Sensoren in Straßen mit unterschiedlich dichtem Baumbestand. Die Ergebnisse sind eindeutig: In Straßen mit geschlossenem Kronendach lag die gefühlte Temperatur an heißen Nachmittagen um bis zu zwölf Grad niedriger als in baumlosen Straßen. __(2)__ Entscheidend ist vielmehr die Verdunstung: Ein großer Baum gibt an einem Sommertag mehrere hundert Liter Wasser an die Umgebung ab und entzieht ihr dabei Wärme. Rasenflächen oder kleine Sträucher erreichen diesen Effekt nicht annähernd, weil ihnen die große Blattmasse fehlt.",
       "Gerade darin liegt jedoch auch das Problem. __(3)__ In den trockenen Sommern der vergangenen Jahre war das vielerorts nicht der Fall. Die Messungen zeigen, dass gestresste Bäume ihre Spaltöffnungen schließen, um Wasser zu sparen, und damit ihre Kühlleistung fast vollständig einstellen – ausgerechnet an den heißesten Tagen, an denen sie am dringendsten gebraucht würden. Im zweiten Messjahr stellten einige Bäume schon im Juli ihr Wachstum ein und warfen erste Blätter ab.",
       "Hinzu kommt, dass Stadtbäume ohnehin unter besonders schwierigen Bedingungen wachsen. Verdichtete Böden, enge Pflanzgruben, Leitungen im Untergrund und Streusalz im Winter setzen ihnen zu. __(4)__ Aschauer hält das für eine kostspielige Fehlentwicklung: „Ein junger Baum braucht Jahrzehnte, bis er die Kühlleistung eines alten erreicht. Jeder vorzeitig gefällte Baum ist für das Stadtklima ein Rückschritt.“",
       "Die Forscher schlagen daher vor, bei Neupflanzungen nicht nur auf hitzeverträgliche Arten zu achten, sondern vor allem den Wurzelraum deutlich zu vergrößern. In mehreren Pilotstraßen werden bereits unterirdische Speicher getestet, die Regenwasser von Dächern und Gehwegen sammeln. __(5)__ Erste Auswertungen deuten darauf hin, dass Bäume mit Zugang zu solchen Speichern auch in längeren Trockenphasen weiter verdunsten. Die Kosten für solche Anlagen sind zwar beträchtlich, liegen aber deutlich unter denen für das wiederholte Nachpflanzen.",
       "Für die Stadtplanung bedeutet das ein grundlegendes Umdenken. Bislang galten Bäume vor allem als Gestaltungselement, das man dort pflanzt, wo nach der Planung von Straßen und Gebäuden gerade noch Platz ist. __(6)__ Wer sie so begreift, muss allerdings auch bereit sein, ihnen mehr Raum zu geben – notfalls auf Kosten von Parkplätzen oder Fahrspuren. Erste Städte haben bereits begonnen, entsprechende Flächen in ihren Bebauungsplänen festzuschreiben."
      ]
     },
     "aufgaben": [
      {
       "frage": "Welcher Satz gehört in Lücke 1?",
       "luecke": 1,
       "opt": [
        "Der Schatten allein senkt die Temperatur deshalb um mindestens zwölf Grad.",
        "Ein Baum kann nur dann verdunsten, wenn seine Wurzeln ausreichend Wasser finden.",
        "Künftig müssten sie dagegen als Teil der technischen Infrastruktur verstanden werden, ähnlich wie Leitungen oder Kanäle.",
        "Wie groß ihr Beitrag zum Stadtklima aber genau ist, ließ sich bislang nur schätzen.",
        "Dieses Wasser steht den Bäumen dann in Trockenperioden zur Verfügung, statt in die Kanalisation abzufließen.",
        "Begrünte Fassaden erreichten in den Messungen sogar eine noch stärkere Kühlwirkung.",
        "Dieser Unterschied geht allerdings nur zum Teil auf den Schatten zurück.",
        "Viele von ihnen werden deshalb kaum älter als vierzig Jahre und müssen ersetzt werden, bevor sie ihre volle Größe erreichen."
       ],
       "loesung": 3,
       "fest": true,
       "erklaerung": "„ihr“ bezieht sich auf die Bäume; „aber … bislang nur schätzen“ leitet zum „nun erstmals gemessen“ über."
      },
      {
       "frage": "Welcher Satz gehört in Lücke 2?",
       "luecke": 2,
       "opt": [
        "Der Schatten allein senkt die Temperatur deshalb um mindestens zwölf Grad.",
        "Ein Baum kann nur dann verdunsten, wenn seine Wurzeln ausreichend Wasser finden.",
        "Künftig müssten sie dagegen als Teil der technischen Infrastruktur verstanden werden, ähnlich wie Leitungen oder Kanäle.",
        "Wie groß ihr Beitrag zum Stadtklima aber genau ist, ließ sich bislang nur schätzen.",
        "Dieses Wasser steht den Bäumen dann in Trockenperioden zur Verfügung, statt in die Kanalisation abzufließen.",
        "Begrünte Fassaden erreichten in den Messungen sogar eine noch stärkere Kühlwirkung.",
        "Dieser Unterschied geht allerdings nur zum Teil auf den Schatten zurück.",
        "Viele von ihnen werden deshalb kaum älter als vierzig Jahre und müssen ersetzt werden, bevor sie ihre volle Größe erreichen."
       ],
       "loesung": 6,
       "fest": true,
       "erklaerung": "„Dieser Unterschied“ nimmt die zwölf Grad auf; „vielmehr“ im Folgesatz setzt die Verdunstung dagegen."
      },
      {
       "frage": "Welcher Satz gehört in Lücke 3?",
       "luecke": 3,
       "opt": [
        "Der Schatten allein senkt die Temperatur deshalb um mindestens zwölf Grad.",
        "Ein Baum kann nur dann verdunsten, wenn seine Wurzeln ausreichend Wasser finden.",
        "Künftig müssten sie dagegen als Teil der technischen Infrastruktur verstanden werden, ähnlich wie Leitungen oder Kanäle.",
        "Wie groß ihr Beitrag zum Stadtklima aber genau ist, ließ sich bislang nur schätzen.",
        "Dieses Wasser steht den Bäumen dann in Trockenperioden zur Verfügung, statt in die Kanalisation abzufließen.",
        "Begrünte Fassaden erreichten in den Messungen sogar eine noch stärkere Kühlwirkung.",
        "Dieser Unterschied geht allerdings nur zum Teil auf den Schatten zurück.",
        "Viele von ihnen werden deshalb kaum älter als vierzig Jahre und müssen ersetzt werden, bevor sie ihre volle Größe erreichen."
       ],
       "loesung": 1,
       "fest": true,
       "erklaerung": "Der Satz nennt die Bedingung, auf die sich „das“ in „war das vielerorts nicht der Fall“ bezieht."
      },
      {
       "frage": "Welcher Satz gehört in Lücke 4?",
       "luecke": 4,
       "opt": [
        "Der Schatten allein senkt die Temperatur deshalb um mindestens zwölf Grad.",
        "Ein Baum kann nur dann verdunsten, wenn seine Wurzeln ausreichend Wasser finden.",
        "Künftig müssten sie dagegen als Teil der technischen Infrastruktur verstanden werden, ähnlich wie Leitungen oder Kanäle.",
        "Wie groß ihr Beitrag zum Stadtklima aber genau ist, ließ sich bislang nur schätzen.",
        "Dieses Wasser steht den Bäumen dann in Trockenperioden zur Verfügung, statt in die Kanalisation abzufließen.",
        "Begrünte Fassaden erreichten in den Messungen sogar eine noch stärkere Kühlwirkung.",
        "Dieser Unterschied geht allerdings nur zum Teil auf den Schatten zurück.",
        "Viele von ihnen werden deshalb kaum älter als vierzig Jahre und müssen ersetzt werden, bevor sie ihre volle Größe erreichen."
       ],
       "loesung": 7,
       "fest": true,
       "erklaerung": "„ihnen“ meint die Stadtbäume; „das“ im Folgesatz bezieht sich auf das frühe Ersetzen."
      },
      {
       "frage": "Welcher Satz gehört in Lücke 5?",
       "luecke": 5,
       "opt": [
        "Der Schatten allein senkt die Temperatur deshalb um mindestens zwölf Grad.",
        "Ein Baum kann nur dann verdunsten, wenn seine Wurzeln ausreichend Wasser finden.",
        "Künftig müssten sie dagegen als Teil der technischen Infrastruktur verstanden werden, ähnlich wie Leitungen oder Kanäle.",
        "Wie groß ihr Beitrag zum Stadtklima aber genau ist, ließ sich bislang nur schätzen.",
        "Dieses Wasser steht den Bäumen dann in Trockenperioden zur Verfügung, statt in die Kanalisation abzufließen.",
        "Begrünte Fassaden erreichten in den Messungen sogar eine noch stärkere Kühlwirkung.",
        "Dieser Unterschied geht allerdings nur zum Teil auf den Schatten zurück.",
        "Viele von ihnen werden deshalb kaum älter als vierzig Jahre und müssen ersetzt werden, bevor sie ihre volle Größe erreichen."
       ],
       "loesung": 4,
       "fest": true,
       "erklaerung": "„Dieses Wasser“ greift das gesammelte Regenwasser aus den Speichern auf."
      },
      {
       "frage": "Welcher Satz gehört in Lücke 6?",
       "luecke": 6,
       "opt": [
        "Der Schatten allein senkt die Temperatur deshalb um mindestens zwölf Grad.",
        "Ein Baum kann nur dann verdunsten, wenn seine Wurzeln ausreichend Wasser finden.",
        "Künftig müssten sie dagegen als Teil der technischen Infrastruktur verstanden werden, ähnlich wie Leitungen oder Kanäle.",
        "Wie groß ihr Beitrag zum Stadtklima aber genau ist, ließ sich bislang nur schätzen.",
        "Dieses Wasser steht den Bäumen dann in Trockenperioden zur Verfügung, statt in die Kanalisation abzufließen.",
        "Begrünte Fassaden erreichten in den Messungen sogar eine noch stärkere Kühlwirkung.",
        "Dieser Unterschied geht allerdings nur zum Teil auf den Schatten zurück.",
        "Viele von ihnen werden deshalb kaum älter als vierzig Jahre und müssen ersetzt werden, bevor sie ihre volle Größe erreichen."
       ],
       "loesung": 2,
       "fest": true,
       "erklaerung": "„dagegen“ stellt die neue Sicht dem „Bislang“ gegenüber; „so begreift“ setzt sie voraus."
      }
     ]
    },
    {
     "id": "c1c1t1s3",
     "text": {
      "sorte": "zeitung",
      "quelle": "Medizin im Dialog",
      "titel": "Pillen ohne Wirkstoff – und ohne Täuschung",
      "zeilen": [
       "Placebos haben einen zweifelhaften Ruf. Scheinmedikamente ohne Wirkstoff gelten zwar in klinischen Studien als unverzichtbare Vergleichsgröße, in der Behandlung selbst jedoch als ethisch heikel. Der Grund liegt auf der Hand: __(1)__ Ein Arzt, der seinem Patienten eine Zuckerpille als wirksames Medikament verkauft, verletzt dessen Recht auf Aufklärung und setzt das Vertrauen aufs Spiel, auf dem jede Behandlung beruht. Viele Ärzte verzichten deshalb bewusst auf Placebos, obwohl deren Wirkung in zahlreichen Studien belegt ist.",
       "Umso überraschender sind die Ergebnisse, die eine Forschungsgruppe am Universitätsklinikum Lindenau vorgelegt hat. __(2)__ Die Patienten erhielten Kapseln, auf deren Packung deutlich „Placebo“ stand, und wurden ausführlich darüber informiert, dass diese keinerlei Wirkstoff enthalten. Dennoch berichteten sie nach drei Wochen über deutlich weniger Schmerzen als eine Vergleichsgruppe, die ausschließlich ihre übliche Behandlung fortsetzte. Rund die Hälfte der Placebo-Gruppe gab an, die Schmerzen hätten sich um mindestens ein Drittel verringert; in der Vergleichsgruppe war es nur etwa jeder Fünfte.",
       "Wie kann etwas wirken, von dem man weiß, dass es nichts enthält? Der Studienleiter Konrad Ebeling verweist auf zwei Mechanismen. Zum einen spiele die Erwartung eine Rolle, die sich auch dann einstelle, wenn man rational nicht an die Pille glaube. __(3)__ Wer jahrelang erlebt hat, dass nach dem Schlucken einer Tablette die Beschwerden nachlassen, dessen Körper reagiert womöglich auch dann, wenn die Tablette leer ist. Ebeling vergleicht das mit dem Speichelfluss, der bei manchen Menschen schon beim Anblick einer Zitrone einsetzt.",
       "Hinzu kommt ein Faktor, den Ebeling für unterschätzt hält: das Ritual der Einnahme selbst. __(4)__ Gerade bei chronischen Schmerzen, bei denen Betroffene sich oft hilflos und den Beschwerden ausgeliefert fühlen, könne dieses Gefühl, aktiv etwas zu tun, entlastend wirken. Der Arzt verordne damit nicht nur eine Kapsel, sondern eine Handlung, die dem Patienten ein Stück Kontrolle zurückgebe.",
       "Die Ergebnisse sind allerdings mit Vorsicht zu interpretieren. __(5)__ Zudem handelt es sich um subjektive Angaben: Messbare körperliche Veränderungen, etwa an Entzündungswerten, fanden die Forscher nicht. Ebeling selbst betont, dass offene Placebos keine Therapie ersetzen, sondern allenfalls ergänzen können. Kritiker aus der eigenen Fachgesellschaft halten die Studie zudem für zu klein, um daraus allgemeine Empfehlungen abzuleiten.",
       "Für die Praxis könnten die Befunde dennoch bedeutsam sein. Viele Schmerzpatienten nehmen über Jahre hinweg Medikamente ein, die erhebliche Nebenwirkungen haben und auf Dauer Magen, Leber oder Nieren belasten. __(6)__ Ob sich der Effekt über längere Zeiträume hält, soll nun eine Folgestudie klären, die Patienten über ein ganzes Jahr begleitet. Erste Ergebnisse werden in zwei Jahren erwartet. Bis dahin raten die Autoren davon ab, offene Placebos ohne ärztliche Begleitung einzusetzen."
      ]
     },
     "aufgaben": [
      {
       "frage": "Welcher Satz gehört in Lücke 1?",
       "luecke": 1,
       "opt": [
        "So wussten die Teilnehmer natürlich, ob sie zur Placebo-Gruppe gehörten, was eine Verblindung unmöglich machte.",
        "Die Vergleichsgruppe erhielt dagegen ein Scheinmedikament, ohne darüber aufgeklärt zu werden.",
        "Sie untersuchte 160 Menschen mit chronischen Rückenschmerzen, denen man das Scheinmedikament ganz offen verabreichte.",
        "Ließe sich deren Dosis mithilfe offener Placebos verringern, wäre schon viel gewonnen.",
        "Ihre Wirkung scheint darauf zu beruhen, dass die Patienten getäuscht werden.",
        "Zweimal täglich bewusst eine Kapsel zu nehmen, gebe dem Alltag eine Struktur und vermittle den Eindruck, sich um die eigene Gesundheit zu kümmern.",
        "Auch die Entzündungswerte gingen in der Placebo-Gruppe messbar zurück.",
        "Zum anderen wirke offenbar eine Art Konditionierung, also ein erlerntes Reaktionsmuster."
       ],
       "loesung": 4,
       "fest": true,
       "erklaerung": "„Ihre“ meint die Placebos; der Satz füllt den Doppelpunkt nach „Der Grund liegt auf der Hand“."
      },
      {
       "frage": "Welcher Satz gehört in Lücke 2?",
       "luecke": 2,
       "opt": [
        "So wussten die Teilnehmer natürlich, ob sie zur Placebo-Gruppe gehörten, was eine Verblindung unmöglich machte.",
        "Die Vergleichsgruppe erhielt dagegen ein Scheinmedikament, ohne darüber aufgeklärt zu werden.",
        "Sie untersuchte 160 Menschen mit chronischen Rückenschmerzen, denen man das Scheinmedikament ganz offen verabreichte.",
        "Ließe sich deren Dosis mithilfe offener Placebos verringern, wäre schon viel gewonnen.",
        "Ihre Wirkung scheint darauf zu beruhen, dass die Patienten getäuscht werden.",
        "Zweimal täglich bewusst eine Kapsel zu nehmen, gebe dem Alltag eine Struktur und vermittle den Eindruck, sich um die eigene Gesundheit zu kümmern.",
        "Auch die Entzündungswerte gingen in der Placebo-Gruppe messbar zurück.",
        "Zum anderen wirke offenbar eine Art Konditionierung, also ein erlerntes Reaktionsmuster."
       ],
       "loesung": 2,
       "fest": true,
       "erklaerung": "„Sie“ bezieht sich auf die Forschungsgruppe; danach folgen „Die Patienten“ der Studie."
      },
      {
       "frage": "Welcher Satz gehört in Lücke 3?",
       "luecke": 3,
       "opt": [
        "So wussten die Teilnehmer natürlich, ob sie zur Placebo-Gruppe gehörten, was eine Verblindung unmöglich machte.",
        "Die Vergleichsgruppe erhielt dagegen ein Scheinmedikament, ohne darüber aufgeklärt zu werden.",
        "Sie untersuchte 160 Menschen mit chronischen Rückenschmerzen, denen man das Scheinmedikament ganz offen verabreichte.",
        "Ließe sich deren Dosis mithilfe offener Placebos verringern, wäre schon viel gewonnen.",
        "Ihre Wirkung scheint darauf zu beruhen, dass die Patienten getäuscht werden.",
        "Zweimal täglich bewusst eine Kapsel zu nehmen, gebe dem Alltag eine Struktur und vermittle den Eindruck, sich um die eigene Gesundheit zu kümmern.",
        "Auch die Entzündungswerte gingen in der Placebo-Gruppe messbar zurück.",
        "Zum anderen wirke offenbar eine Art Konditionierung, also ein erlerntes Reaktionsmuster."
       ],
       "loesung": 7,
       "fest": true,
       "erklaerung": "„Zum anderen“ ergänzt „Zum einen“; der Folgesatz beschreibt die erlernte Reaktion."
      },
      {
       "frage": "Welcher Satz gehört in Lücke 4?",
       "luecke": 4,
       "opt": [
        "So wussten die Teilnehmer natürlich, ob sie zur Placebo-Gruppe gehörten, was eine Verblindung unmöglich machte.",
        "Die Vergleichsgruppe erhielt dagegen ein Scheinmedikament, ohne darüber aufgeklärt zu werden.",
        "Sie untersuchte 160 Menschen mit chronischen Rückenschmerzen, denen man das Scheinmedikament ganz offen verabreichte.",
        "Ließe sich deren Dosis mithilfe offener Placebos verringern, wäre schon viel gewonnen.",
        "Ihre Wirkung scheint darauf zu beruhen, dass die Patienten getäuscht werden.",
        "Zweimal täglich bewusst eine Kapsel zu nehmen, gebe dem Alltag eine Struktur und vermittle den Eindruck, sich um die eigene Gesundheit zu kümmern.",
        "Auch die Entzündungswerte gingen in der Placebo-Gruppe messbar zurück.",
        "Zum anderen wirke offenbar eine Art Konditionierung, also ein erlerntes Reaktionsmuster."
       ],
       "loesung": 5,
       "fest": true,
       "erklaerung": "Der Satz beschreibt das Ritual; „dieses Gefühl, aktiv etwas zu tun“ greift ihn auf."
      },
      {
       "frage": "Welcher Satz gehört in Lücke 5?",
       "luecke": 5,
       "opt": [
        "So wussten die Teilnehmer natürlich, ob sie zur Placebo-Gruppe gehörten, was eine Verblindung unmöglich machte.",
        "Die Vergleichsgruppe erhielt dagegen ein Scheinmedikament, ohne darüber aufgeklärt zu werden.",
        "Sie untersuchte 160 Menschen mit chronischen Rückenschmerzen, denen man das Scheinmedikament ganz offen verabreichte.",
        "Ließe sich deren Dosis mithilfe offener Placebos verringern, wäre schon viel gewonnen.",
        "Ihre Wirkung scheint darauf zu beruhen, dass die Patienten getäuscht werden.",
        "Zweimal täglich bewusst eine Kapsel zu nehmen, gebe dem Alltag eine Struktur und vermittle den Eindruck, sich um die eigene Gesundheit zu kümmern.",
        "Auch die Entzündungswerte gingen in der Placebo-Gruppe messbar zurück.",
        "Zum anderen wirke offenbar eine Art Konditionierung, also ein erlerntes Reaktionsmuster."
       ],
       "loesung": 0,
       "fest": true,
       "erklaerung": "„So“ führt ein Beispiel für die Vorsicht an, „Zudem“ schließt den zweiten Einwand an."
      },
      {
       "frage": "Welcher Satz gehört in Lücke 6?",
       "luecke": 6,
       "opt": [
        "So wussten die Teilnehmer natürlich, ob sie zur Placebo-Gruppe gehörten, was eine Verblindung unmöglich machte.",
        "Die Vergleichsgruppe erhielt dagegen ein Scheinmedikament, ohne darüber aufgeklärt zu werden.",
        "Sie untersuchte 160 Menschen mit chronischen Rückenschmerzen, denen man das Scheinmedikament ganz offen verabreichte.",
        "Ließe sich deren Dosis mithilfe offener Placebos verringern, wäre schon viel gewonnen.",
        "Ihre Wirkung scheint darauf zu beruhen, dass die Patienten getäuscht werden.",
        "Zweimal täglich bewusst eine Kapsel zu nehmen, gebe dem Alltag eine Struktur und vermittle den Eindruck, sich um die eigene Gesundheit zu kümmern.",
        "Auch die Entzündungswerte gingen in der Placebo-Gruppe messbar zurück.",
        "Zum anderen wirke offenbar eine Art Konditionierung, also ein erlerntes Reaktionsmuster."
       ],
       "loesung": 3,
       "fest": true,
       "erklaerung": "„deren“ bezieht sich auf die Medikamente mit Nebenwirkungen aus dem Satz davor."
      }
     ]
    }
   ]
  },
  {
   "nr": 2,
   "art": "textwahl",
   "name": "Lesen: Abschnitte zuordnen",
   "kurz": "Sechs Aussagen, fünf Abschnitte",
   "was": "Ein längerer Text in fünf Abschnitten A bis E. Zu sechs Aussagen suchst du den Abschnitt, in dem die Information steht.",
   "tipp": "Die Aussagen umschreiben den Text. Lies zuerst alle Aussagen, dann überflieg die Abschnitte nach dem Inhalt — nicht nach gleichen Wörtern.",
   "zeichen": "🗂️",
   "farbe": "gold",
   "punkte": 6,
   "runden": [
    {
     "id": "c1c1t2s1",
     "text": {
      "sorte": "zeitung",
      "quelle": "Forschung & Gesellschaft",
      "titel": "Wenn das Gehirn nachts aufräumt",
      "zeilen": [
       "A — Lange Zeit galt der Schlaf als eine Art Ruhezustand, in dem das Gehirn weitgehend abgeschaltet ist. Diese Vorstellung ist inzwischen überholt. Messungen der Hirnaktivität zeigen, dass bestimmte Regionen nachts ähnlich aktiv sind wie am Tag – nur eben auf andere Weise. Besonders der Hippocampus, eine Struktur, die für das Speichern neuer Erinnerungen zentral ist, spielt die Ereignisse des Tages im Schlaf offenbar noch einmal ab, und zwar in stark beschleunigter Form. Möglich wurde diese Erkenntnis vor allem durch Aufzeichnungen, bei denen Versuchspersonen mit Elektroden am Kopf im Labor übernachten. Dabei zeigte sich, dass die Muster der Nervenzellen beim nächtlichen Abspielen denen beim ursprünglichen Erleben verblüffend ähneln.",
       "Die Neurowissenschaftlerin Lotte Abramczyk vom Zentrum für Schlafforschung in Kaltenbrück vergleicht diesen Vorgang mit dem Sortieren der Tagespost: „Was wichtig erscheint, wird abgelegt, der Rest landet im Papierkorb.“ Welche Kriterien das Gehirn dabei anlegt, ist noch weitgehend unklar.",
       "B — Für dieses Sortieren sind die verschiedenen Schlafphasen offenbar unterschiedlich wichtig. Im Tiefschlaf, der vor allem in der ersten Nachthälfte auftritt, werden nach heutigem Wissen in erster Linie Fakten und Vokabeln gefestigt. Die REM-Phasen, die sich in der zweiten Nachthälfte häufen, scheinen dagegen eher für Bewegungsabläufe und für die Verarbeitung emotionaler Erlebnisse zuständig zu sein.",
       "Daraus ergibt sich eine praktische Konsequenz: Wer nach einer langen Lernnacht nur vier Stunden schläft, verliert vor allem die späten Phasen. Auf das Auswendiglernen wirkt sich das weniger aus als etwa auf das Einüben eines Musikstücks oder einer sportlichen Technik. Abramczyk betont allerdings, dass diese Aufteilung vereinfacht sei. Die Phasen wechseln sich in Zyklen von etwa neunzig Minuten ab, und vieles spricht dafür, dass gerade ihr Zusammenspiel für ein stabiles Gedächtnis entscheidend ist.",
       "C — Wie stark der Schlaf das Lernen beeinflusst, zeigt ein Versuch, den Abramczyks Team mit sechzig Studenten durchgeführt hat. Alle lernten am Abend eine Liste von Wortpaaren in einer ihnen unbekannten Sprache. Die eine Hälfte schlief danach acht Stunden, die andere wurde durch Filme und Gesellschaftsspiele wach gehalten und durfte erst in der folgenden Nacht schlafen.",
       "Beim Test drei Tage später erinnerte sich die erste Gruppe an rund ein Drittel mehr Wörter. Bemerkenswert war, dass die zweite Gruppe den Rückstand auch durch den Nachholschlaf nicht mehr aufholen konnte. Die Nacht direkt nach dem Lernen scheint demnach ein Zeitfenster zu sein, das sich nicht beliebig verschieben lässt. Kritiker wenden ein, die wach gehaltene Gruppe sei beim Test schlicht übermüdet gewesen. Abramczyk hält dem entgegen, dass zu diesem Zeitpunkt beide Gruppen längst wieder ausgeschlafen waren. Die Ergebnisse wurden inzwischen an zwei weiteren Hochschulen bestätigt.",
       "D — Auch kurze Schlafphasen am Tag können das Gedächtnis unterstützen, allerdings mit Einschränkungen. Ein Mittagsschlaf von zwanzig bis dreißig Minuten verbessert nach mehreren Studien die Aufnahmefähigkeit für den Rest des Tages. Wer länger schläft, gerät dagegen leicht in den Tiefschlaf und fühlt sich nach dem Aufwachen zunächst benommen. Abramczyk rät deshalb, sich vor dem Hinlegen einen Wecker zu stellen.",
       "Einen vollwertigen Ersatz für den Nachtschlaf stellt ein Nickerchen ihrer Ansicht nach jedoch nicht dar, da die für das Gedächtnis entscheidende Abfolge der Schlafphasen in so kurzer Zeit nicht durchlaufen wird. Für ältere Menschen, deren Nachtschlaf oft leichter und unruhiger wird, kann ein kurzes Nickerchen nach Ansicht der Forscherin dennoch eine sinnvolle Ergänzung sein.",
       "E — Für Studenten in der Prüfungsphase sind diese Befunde unbequem. Gerade dann wird der Schlaf häufig als Erstes geopfert, um mehr Zeit für den Stoff zu gewinnen. Nach Ansicht der Forscher ist das ein Rechenfehler: Die zusätzlichen Lernstunden gleichen den Verlust an Erinnerungsleistung in der Regel nicht aus.",
       "Einige Hochschulen haben daraus bereits Konsequenzen gezogen. So legt die Universität Kaltenbrück Prüfungen nicht mehr auf acht Uhr morgens, und in den Einführungsveranstaltungen für Erstsemester gehört ein Vortrag über gesunden Schlaf inzwischen zum festen Programm. Ob solche Maßnahmen das Verhalten der Studenten tatsächlich ändern, soll eine Befragung im kommenden Jahr zeigen. Abramczyk rät Studenten außerdem, die letzte Lerneinheit des Tages nicht zu weit in die Nacht zu verlegen und den Stoff vor dem Schlafengehen noch einmal kurz zu wiederholen. Gerade diese abendliche Wiederholung werde im Schlaf offenbar bevorzugt verarbeitet."
      ]
     },
     "aufgaben": [
      {
       "frage": "In welchem Abschnitt steht das? „Wer zu wenig schläft, beeinträchtigt das Üben praktischer Fertigkeiten stärker als das Einprägen von Wissen.\"",
       "opt": [
        "Abschnitt A",
        "Abschnitt B",
        "Abschnitt C",
        "Abschnitt D",
        "Abschnitt E"
       ],
       "loesung": 1,
       "fest": true,
       "stelle": "Auf das Auswendiglernen wirkt sich das weniger aus als etwa auf das Einüben eines Musikstücks",
       "erklaerung": "Verkürzter Schlaf kostet vor allem die späten REM-Phasen, die für Bewegungsabläufe zuständig sind."
      },
      {
       "frage": "In welchem Abschnitt steht das? „Versäumten Schlaf kann man für das Behalten von neuem Lernstoff nicht vollständig nachholen.\"",
       "opt": [
        "Abschnitt A",
        "Abschnitt B",
        "Abschnitt C",
        "Abschnitt D",
        "Abschnitt E"
       ],
       "loesung": 2,
       "fest": true,
       "stelle": "den Rückstand auch durch den Nachholschlaf nicht mehr aufholen konnte",
       "erklaerung": "Im Versuch blieb die wach gehaltene Gruppe trotz Nachholschlaf zurück."
      },
      {
       "frage": "In welchem Abschnitt steht das? „Eine Hochschule hat ihren Prüfungsplan an Erkenntnisse der Schlafforschung angepasst.\"",
       "opt": [
        "Abschnitt A",
        "Abschnitt B",
        "Abschnitt C",
        "Abschnitt D",
        "Abschnitt E"
       ],
       "loesung": 4,
       "fest": true,
       "stelle": "legt die Universität Kaltenbrück Prüfungen nicht mehr auf acht Uhr morgens",
       "erklaerung": "Keine Prüfungen mehr um acht Uhr: eine organisatorische Konsequenz aus den Befunden."
      },
      {
       "frage": "In welchem Abschnitt steht das? „Die Annahme, das Gehirn sei im Schlaf untätig, gilt heute als widerlegt.\"",
       "opt": [
        "Abschnitt A",
        "Abschnitt B",
        "Abschnitt C",
        "Abschnitt D",
        "Abschnitt E"
       ],
       "loesung": 0,
       "fest": true,
       "stelle": "Diese Vorstellung ist inzwischen überholt",
       "erklaerung": "„Diese Vorstellung“ ist die Idee vom abgeschalteten Gehirn; Messungen zeigen nächtliche Aktivität."
      },
      {
       "frage": "In welchem Abschnitt steht das? „Ein zu langer Mittagsschlaf kann die Wachheit kurzfristig eher verringern.\"",
       "opt": [
        "Abschnitt A",
        "Abschnitt B",
        "Abschnitt C",
        "Abschnitt D",
        "Abschnitt E"
       ],
       "loesung": 3,
       "fest": true,
       "stelle": "fühlt sich nach dem Aufwachen zunächst benommen",
       "erklaerung": "Wer länger als etwa eine halbe Stunde schläft, gerät in den Tiefschlaf und ist danach benommen."
      },
      {
       "frage": "In welchem Abschnitt steht das? „Nicht alles, was man tagsüber erlebt, wird im Schlaf dauerhaft gespeichert.\"",
       "opt": [
        "Abschnitt A",
        "Abschnitt B",
        "Abschnitt C",
        "Abschnitt D",
        "Abschnitt E"
       ],
       "loesung": 0,
       "fest": true,
       "stelle": "der Rest landet im Papierkorb",
       "erklaerung": "Das Bild vom Sortieren der Post: Unwichtiges wird aussortiert. Achtung: D spricht nur vom Tagschlaf."
      }
     ]
    },
    {
     "id": "c1c1t2s2",
     "text": {
      "sorte": "zeitung",
      "quelle": "Wissenschaft im Gespräch",
      "titel": "Wenn Laien forschen",
      "zeilen": [
       "A — Sie zählen Vögel im eigenen Garten, fotografieren Wildbienen auf dem Balkon oder messen mit einfachen Geräten die Luftqualität vor ihrer Haustür: Immer mehr Menschen beteiligen sich in ihrer Freizeit an wissenschaftlichen Projekten. Fachleute sprechen von Bürgerwissenschaft.",
       "Neu ist das Phänomen nicht – schon im neunzehnten Jahrhundert trugen Pfarrer, Lehrer und Apotheker einen Großteil des Wissens über heimische Pflanzen und das Wetter zusammen. Neu ist jedoch der Umfang. Dank Smartphones und Internet können heute Zehntausende gleichzeitig Daten sammeln und über Plattformen an Forschungseinrichtungen übermitteln. Allein im deutschsprachigen Raum gibt es inzwischen mehrere hundert solcher Projekte. Die meisten stammen aus der Biologie und der Umweltforschung, doch auch Historiker und Sprachwissenschaftler greifen zunehmend auf Laien zurück, etwa beim Entziffern alter Handschriften. Der Aufwand unterscheidet sich dabei stark: Manche Projekte verlangen nur, einmal im Jahr eine Stunde lang Vögel zu zählen, andere setzen voraus, dass man sich über Monate in die Bestimmung von Moosen oder Flechten einarbeitet.",
       "B — Für die Wissenschaft liegt der Nutzen auf der Hand. Viele Fragen, etwa zur Verbreitung von Tierarten oder zu lokalen Klimaunterschieden, lassen sich nur mit Daten von sehr vielen Orten beantworten, die ein Forschungsteam allein niemals erheben könnte. „Wir hätten für unser Insektenprojekt hundert Jahre gebraucht“, sagt der Ökologe Rainer Thalbach von der Universität Seefeld. Mit der Hilfe von rund achttausend Freiwilligen gelang die Erhebung in drei Sommern. Die Daten gelten inzwischen als die umfangreichste Sammlung zu Wildinsekten im ganzen Land. Auch finanziell lohnt sich die Zusammenarbeit: Schulungen, Software und Betreuung kosten zwar Geld, aber weit weniger als eine vergleichbare Erhebung durch bezahlte Kräfte.",
       "Hinzu kommt, dass Laien gelegentlich Dinge bemerken, nach denen niemand gesucht hat. So entdeckte eine Rentnerin bei der Auswertung von Nachtaufnahmen eine Fledermausart, die in der Region als ausgestorben galt.",
       "C — Kritiker weisen allerdings auf die Qualität der Daten hin. Wer ohne Ausbildung Insekten bestimmt, verwechselt leicht ähnliche Arten. Zudem sammeln Freiwillige vor allem dort, wo sie wohnen oder gern spazieren gehen, sodass ländliche Gegenden oft unterrepräsentiert sind.",
       "Thalbach hält diese Einwände für berechtigt, aber lösbar. In seinem Projekt wird jedes Foto von mindestens zwei Personen geprüft, und unsichere Bestimmungen werden einem Fachmann vorgelegt. Statistische Verfahren gleichen außerdem die ungleiche räumliche Verteilung teilweise aus. „Perfekte Daten gibt es auch in der klassischen Forschung nicht“, betont er. Manche Projekte setzen inzwischen Programme zur automatischen Bilderkennung ein, die Fotos vorsortieren. Ganz verlassen möchte sich Thalbach darauf aber nicht: Gerade bei seltenen Arten lägen die Programme noch zu oft daneben.",
       "D — Was bewegt Menschen dazu, unbezahlt Daten zu sammeln? Eine Befragung unter Teilnehmern verschiedener Projekte ergab ein vielfältiges Bild. Am häufigsten nannten die Befragten Neugier und den Wunsch, mehr über ihre Umgebung zu lernen. Für viele ist es außerdem wichtig, einen Beitrag zum Umweltschutz zu leisten. Viele schätzen auch den Austausch mit Gleichgesinnten bei gemeinsamen Exkursionen. Für die Forschung stellt sich damit die Frage, wie sie diese Gruppen künftig besser erreichen kann, etwa über Schulen oder Sportvereine. Auffällig ist zudem, wer sich beteiligt: Die meisten Freiwilligen sind älter als fünfzig und haben einen Hochschulabschluss, während Jüngere und Menschen mit geringerem Einkommen deutlich seltener vertreten sind.",
       "Überraschend war ein anderer Befund: Ein erheblicher Teil der Freiwilligen gab an, sich nach einiger Zeit enttäuscht zurückgezogen zu haben, weil sie nie erfahren hätten, was mit ihren Daten geschehen sei. Die Rückmeldung an die Beteiligten wird von vielen Projekten offenbar unterschätzt.",
       "E — Manche Fachleute fordern inzwischen, Laien nicht nur als Datensammler einzusetzen, sondern sie stärker an der Forschung selbst zu beteiligen – etwa bei der Formulierung von Fragestellungen. In einem Projekt zur Lärmbelastung in Wohnvierteln bestimmten die Anwohner mit, welche Straßen und Tageszeiten untersucht werden sollten. Die Ergebnisse flossen anschließend direkt in die Verkehrsplanung der Stadt ein.",
       "Thalbach sieht in solchen Ansätzen eine Chance, das Vertrauen in die Wissenschaft zu stärken. Wer selbst erlebt habe, wie mühsam und sorgfältig Forschung sei, begegne ihren Ergebnissen mit anderen Augen. Ganz ohne Spannungen bleibt eine solche Zusammenarbeit allerdings nicht. Wenn Bürger Fragen mitbestimmen, erwarten sie oft auch Ergebnisse, die ihre Anliegen bestätigen. Forscher müssen dann deutlich machen, dass eine Untersuchung auch zu unbequemen Antworten führen kann."
      ]
     },
     "aufgaben": [
      {
       "frage": "In welchem Abschnitt steht das? „Ohne die Mitwirkung von Freiwilligen hätte eine Untersuchung ein Vielfaches an Zeit gekostet.\"",
       "opt": [
        "Abschnitt A",
        "Abschnitt B",
        "Abschnitt C",
        "Abschnitt D",
        "Abschnitt E"
       ],
       "loesung": 1,
       "fest": true,
       "stelle": "Wir hätten für unser Insektenprojekt hundert Jahre gebraucht",
       "erklaerung": "Hundert Jahre allein gegenüber drei Sommern mit achttausend Freiwilligen."
      },
      {
       "frage": "In welchem Abschnitt steht das? „Weil Daten vor allem in der Nähe der Wohnorte erhoben werden, sind manche Gebiete schwach abgedeckt.\"",
       "opt": [
        "Abschnitt A",
        "Abschnitt B",
        "Abschnitt C",
        "Abschnitt D",
        "Abschnitt E"
       ],
       "loesung": 2,
       "fest": true,
       "stelle": "sodass ländliche Gegenden oft unterrepräsentiert sind",
       "erklaerung": "Freiwillige sammeln, wo sie wohnen; ländliche Gegenden fehlen deshalb oft."
      },
      {
       "frage": "In welchem Abschnitt steht das? „Weil sie nichts über die Verwendung ihrer Daten erfahren, hören manche Helfer wieder auf.\"",
       "opt": [
        "Abschnitt A",
        "Abschnitt B",
        "Abschnitt C",
        "Abschnitt D",
        "Abschnitt E"
       ],
       "loesung": 3,
       "fest": true,
       "stelle": "weil sie nie erfahren hätten, was mit ihren Daten geschehen sei",
       "erklaerung": "Fehlende Rückmeldung führt zum enttäuschten Rückzug der Freiwilligen."
      },
      {
       "frage": "In welchem Abschnitt steht das? „Die Mitarbeit von Laien an der Wissenschaft hat eine lange Tradition.\"",
       "opt": [
        "Abschnitt A",
        "Abschnitt B",
        "Abschnitt C",
        "Abschnitt D",
        "Abschnitt E"
       ],
       "loesung": 0,
       "fest": true,
       "stelle": "schon im neunzehnten Jahrhundert trugen Pfarrer, Lehrer und Apotheker",
       "erklaerung": "Schon im neunzehnten Jahrhundert sammelten Nichtwissenschaftler Wissen."
      },
      {
       "frage": "In welchem Abschnitt steht das? „In einem Fall konnten Bewohner beeinflussen, was genau erforscht wurde.\"",
       "opt": [
        "Abschnitt A",
        "Abschnitt B",
        "Abschnitt C",
        "Abschnitt D",
        "Abschnitt E"
       ],
       "loesung": 4,
       "fest": true,
       "stelle": "bestimmten die Anwohner mit, welche Straßen und Tageszeiten untersucht werden sollten",
       "erklaerung": "Die Anwohner wirkten an der Fragestellung mit, nicht nur an der Datensammlung."
      },
      {
       "frage": "In welchem Abschnitt steht das? „Eine Freiwillige machte einen Fund, mit dem niemand mehr gerechnet hatte.\"",
       "opt": [
        "Abschnitt A",
        "Abschnitt B",
        "Abschnitt C",
        "Abschnitt D",
        "Abschnitt E"
       ],
       "loesung": 1,
       "fest": true,
       "stelle": "eine Fledermausart, die in der Region als ausgestorben galt",
       "erklaerung": "Die Rentnerin entdeckte eine Art, die als ausgestorben galt."
      }
     ]
    },
    {
     "id": "c1c1t2s3",
     "text": {
      "sorte": "zeitung",
      "quelle": "Stadt und Wirtschaft",
      "titel": "Leere Büros, volle Vororte",
      "zeilen": [
       "A — Seit viele Beschäftigte zwei oder drei Tage pro Woche zu Hause arbeiten, hat sich der Rhythmus der Innenstädte spürbar verändert. Montags und freitags sind die Büroviertel vieler Großstädte auffallend leer, während sich das Leben dienstags bis donnerstags weitgehend normal anfühlt.",
       "Eine Untersuchung des Instituts für Raumentwicklung in Brandau hat die Folgen dieser Entwicklung in zwölf Städten analysiert. Grundlage waren anonymisierte Bewegungsdaten von Mobiltelefonen sowie Umsatzzahlen des Einzelhandels und der Gastronomie aus den Jahren vor und nach der Umstellung. Das Bild unterscheidet sich dabei von Stadt zu Stadt. Wo viele Behörden und Banken ansässig sind, ist der Rückgang an den Randtagen deutlich stärker als dort, wo Industrie und Handwerk überwiegen, weil sich viele Tätigkeiten nicht von zu Hause aus erledigen lassen.",
       "B — Am deutlichsten zeigen sich die Auswirkungen bei Betrieben, die von der Mittagspause leben. Kantinen, Imbisse und Bäckereien in Bürolagen meldeten Umsatzeinbußen von bis zu vierzig Prozent. Einige haben ihre Öffnungszeiten auf die mittleren Wochentage beschränkt, andere mussten ganz aufgeben.",
       "„Ein Betrieb, der auf fünf volle Tage kalkuliert hat, kann mit drei nicht überleben“, erklärt die Stadtgeografin Miriam Okonkwo, die die Studie geleitet hat. Auch Reinigungsfirmen und Copyshops in den Bürovierteln spüren den Rückgang deutlich. Besonders hart trifft es Betriebe, die in den vergangenen Jahren hohe Mieten in bester Lage akzeptiert hatten. Sie können ihre Kosten kaum senken, während die Kundschaft an zwei von fünf Tagen fast vollständig ausbleibt. Manche Vermieter haben bereits Nachlässe gewährt, um Leerstand zu vermeiden. Okonkwo rechnet damit, dass sich das Angebot in den Bürovierteln weiter ausdünnen wird.",
       "C — Dem steht allerdings eine Gegenbewegung gegenüber. In Wohnvierteln am Stadtrand und in den Umlandgemeinden stiegen die Umsätze von Cafés, Bäckereien und kleinen Läden spürbar an. Wer zu Hause arbeitet, holt sich sein Mittagessen eben nebenan.",
       "Okonkwo spricht deshalb von einer Verlagerung, nicht von einem Verlust: Insgesamt sei die Kaufkraft nicht verschwunden, sondern verteile sich räumlich anders. Für Ortszentren, die in den vergangenen Jahrzehnten unter dem Wegzug von Geschäften gelitten hatten, könne das sogar eine Chance sein. Allerdings profitieren nicht alle Vororte gleichermaßen. Am stärksten sind die Zuwächse in Gemeinden mit lebendigem Ortskern und kurzen Wegen. Wo Geschäfte fast nur in großen Einkaufszentren am Rand liegen, ist von der Entwicklung kaum etwas zu spüren.",
       "D — Eine zweite Folge betrifft den Immobilienmarkt. Viele Unternehmen haben ihre Büroflächen bereits verkleinert oder planen dies für den Zeitpunkt, an dem ihre Mietverträge auslaufen. Die Studie rechnet damit, dass in den untersuchten Städten in den nächsten zehn Jahren bis zu fünfzehn Prozent der heutigen Büroflächen nicht mehr benötigt werden.",
       "Naheliegend wäre es, sie in Wohnungen umzuwandeln, zumal in den meisten Großstädten Wohnraum fehlt. In der Praxis ist das jedoch schwierig: Bürogebäude haben oft zu tiefe Grundrisse, zu wenige Fenster und keine geeigneten Leitungen für Küchen und Bäder. Ein Umbau kostet daher nicht selten mehr als ein Neubau. Gleichzeitig verändern sich die Ansprüche an die verbleibenden Büros. Gefragt sind weniger feste Einzelarbeitsplätze als Räume für Besprechungen und Teamarbeit, denn wer ins Büro kommt, tut dies vor allem, um Kollegen zu treffen. Für Eigentümer älterer Bürohäuser bedeutet das zusätzliche Investitionen, wenn sie ihre Flächen weiterhin vermieten wollen.",
       "E — Die Forscher empfehlen den Städten, die Entwicklung nicht abzuwarten, sondern aktiv zu gestalten. Innenstädte sollten künftig weniger auf eine einzige Nutzung ausgerichtet sein und stattdessen Arbeiten, Wohnen, Kultur und Bildung mischen.",
       "Als Beispiel nennt Okonkwo die Stadt Altmerhofen, die ein leer stehendes Verwaltungsgebäude zu einem Haus mit Bibliothek, Volkshochschule und Gemeinschaftsbüros umgebaut hat. Solche Gemeinschaftsbüros, in denen Beschäftigte verschiedener Firmen tageweise einen Arbeitsplatz mieten, könnten Menschen aus dem Umland in die Stadt zurückholen – wenn auch nicht mehr an fünf Tagen in der Woche. Auch der Verkehr müsse neu gedacht werden, so Okonkwo. Wenn Pendler nicht mehr täglich in die Stadt fahren, seien Zeitkarten, die auf fünf Arbeitstage ausgelegt sind, für viele unattraktiv. Einige Verkehrsverbünde bieten deshalb bereits Tarife an, bei denen man nur für die tatsächlich genutzten Tage bezahlt. Entscheidend sei am Ende, die Innenstädte auch an Abenden und Wochenenden zu beleben, damit sie nicht nur von den Büros abhängen."
      ]
     },
     "aufgaben": [
      {
       "frage": "In welchem Abschnitt steht das? „Manche Geschäfte haben nur noch an einem Teil der Woche geöffnet.\"",
       "opt": [
        "Abschnitt A",
        "Abschnitt B",
        "Abschnitt C",
        "Abschnitt D",
        "Abschnitt E"
       ],
       "loesung": 1,
       "fest": true,
       "stelle": "Einige haben ihre Öffnungszeiten auf die mittleren Wochentage beschränkt",
       "erklaerung": "Betriebe in Bürolagen öffnen nur noch dienstags bis donnerstags."
      },
      {
       "frage": "In welchem Abschnitt steht das? „Die Ausgaben der Verbraucher sinken insgesamt nicht, sie fließen nur an andere Orte.\"",
       "opt": [
        "Abschnitt A",
        "Abschnitt B",
        "Abschnitt C",
        "Abschnitt D",
        "Abschnitt E"
       ],
       "loesung": 2,
       "fest": true,
       "stelle": "Insgesamt sei die Kaufkraft nicht verschwunden, sondern verteile sich räumlich anders",
       "erklaerung": "Okonkwo spricht von Verlagerung statt Verlust."
      },
      {
       "frage": "In welchem Abschnitt steht das? „Die bauliche Beschaffenheit vieler Bürohäuser erschwert eine Nutzung als Wohnraum.\"",
       "opt": [
        "Abschnitt A",
        "Abschnitt B",
        "Abschnitt C",
        "Abschnitt D",
        "Abschnitt E"
       ],
       "loesung": 3,
       "fest": true,
       "stelle": "Bürogebäude haben oft zu tiefe Grundrisse, zu wenige Fenster",
       "erklaerung": "Grundrisse, Fenster und Leitungen machen den Umbau zu Wohnungen schwierig."
      },
      {
       "frage": "In welchem Abschnitt steht das? „Für die Untersuchung wurden unter anderem Standortdaten von Handys ausgewertet.\"",
       "opt": [
        "Abschnitt A",
        "Abschnitt B",
        "Abschnitt C",
        "Abschnitt D",
        "Abschnitt E"
       ],
       "loesung": 0,
       "fest": true,
       "stelle": "anonymisierte Bewegungsdaten von Mobiltelefonen",
       "erklaerung": "Bewegungsdaten von Mobiltelefonen sind Standortdaten von Handys."
      },
      {
       "frage": "In welchem Abschnitt steht das? „Ein früheres Amtsgebäude wird heute für Bildung und Arbeit genutzt.\"",
       "opt": [
        "Abschnitt A",
        "Abschnitt B",
        "Abschnitt C",
        "Abschnitt D",
        "Abschnitt E"
       ],
       "loesung": 4,
       "fest": true,
       "stelle": "ein leer stehendes Verwaltungsgebäude zu einem Haus mit Bibliothek, Volkshochschule und Gemeinschaftsbüros umgebaut hat",
       "erklaerung": "Verwaltungsgebäude = Amtsgebäude; Bibliothek, Volkshochschule und Gemeinschaftsbüros."
      },
      {
       "frage": "In welchem Abschnitt steht das? „Orte, die lange Zeit Geschäfte verloren haben, könnten von der Entwicklung profitieren.\"",
       "opt": [
        "Abschnitt A",
        "Abschnitt B",
        "Abschnitt C",
        "Abschnitt D",
        "Abschnitt E"
       ],
       "loesung": 2,
       "fest": true,
       "stelle": "könne das sogar eine Chance sein",
       "erklaerung": "Ortszentren, die unter dem Wegzug von Geschäften litten, bekommen neue Kundschaft."
      }
     ]
    }
   ]
  },
  {
   "nr": 3,
   "art": "textwahl",
   "name": "Lesen: Detailverstehen",
   "kurz": "Ein langer Sachtext, elf Aussagen — und die beste Überschrift",
   "was": "Ein wissenschaftlicher Text mit etwa tausend Wörtern. Zu elf Aussagen entscheidest du: richtig, falsch oder steht nicht im Text. Am Ende wählst du die beste Überschrift.",
   "tipp": "„Falsch\" heißt: der Text sagt etwas anderes. „Steht nicht im Text\" heißt: der Text sagt dazu nichts — auch wenn es plausibel klingt. Ein falsches Detail macht die ganze Aussage falsch.",
   "zeichen": "🔬",
   "farbe": "rot",
   "punkte": 12,
   "runden": [
    {
     "id": "c1c1t3s1",
     "text": {
      "sorte": "zeitung",
      "quelle": "Neurolinguistik heute, Heft 4",
      "titel": "Sachtext",
      "zeilen": [
       "Lange Zeit galt Mehrsprachigkeit in der Erziehung als Risiko. Noch in den sechziger Jahren rieten Kinderärzte Eltern, die mit ihren Kindern zwei Sprachen sprachen, sich auf eine Sprache zu beschränken, weil man befürchtete, die Kinder könnten verwirrt werden und in beiden Sprachen zurückbleiben. Heute hat sich das Bild grundlegend gewandelt. In populärwissenschaftlichen Büchern und Elternratgebern wird Zweisprachigkeit inzwischen häufig als eine Art geistiges Training dargestellt, das nicht nur die Konzentration verbessere, sondern auch vor Demenz schütze. Die Forschung selbst ist allerdings deutlich zurückhaltender, als es solche Versprechen vermuten lassen.",
       "Unstrittig ist zunächst, dass bei mehrsprachigen Menschen beide Sprachen ständig aktiv sind, auch wenn sie gerade nur eine davon verwenden. Das zeigen Experimente, in denen Versuchspersonen Bilder benennen sollten, während ihre Augenbewegungen aufgezeichnet wurden. Eine Gruppe um die Neurolinguistin Helene Wartmann am Institut für Sprachverarbeitung in Lindau konnte nachweisen, dass zweisprachige Teilnehmer bei dem deutschen Wort „Kerze\" kurz auch auf das Bild einer Katze blickten, wenn ihre zweite Sprache Englisch war – offenbar, weil das englische Wort „candle\" lautlich an „cat\" erinnert. Wer zwei Sprachen spricht, muss demnach fortwährend die gerade nicht benötigte Sprache unterdrücken.",
       "Aus dieser Beobachtung leiteten Forscher die sogenannte Hypothese des zweisprachigen Vorteils ab. Ihr zufolge trainiert das ständige Auswählen und Unterdrücken jene Steuerungsfunktionen, die auch außerhalb der Sprache gebraucht werden, etwa beim Wechsel zwischen Aufgaben oder beim Ausblenden ablenkender Reize. Erste Studien aus den neunziger Jahren schienen diese Annahme zu bestätigen: Zweisprachige Kinder schnitten in bestimmten Aufmerksamkeitstests besser ab als einsprachige Gleichaltrige. Für die Hypothese sprach zudem, dass sie eine einleuchtende Erklärung bot und gut zu dem verbreiteten Bild des Gehirns als trainierbarem Muskel passte. Die Unterschiede waren allerdings klein, und die Stichproben umfassten oft kaum mehr als zwanzig Kinder pro Gruppe.",
       "Spätere Untersuchungen mit wesentlich größeren Gruppen kamen zu ernüchternden Ergebnissen. So verglich ein Team der Universität Hallbrück über tausend Schulkinder und fand keine messbaren Unterschiede in den Steuerungsfunktionen, sobald Faktoren wie das Einkommen der Familie und der Bildungsstand der Eltern berücksichtigt wurden. Kritiker weisen zudem darauf hin, dass Studien mit positivem Ergebnis eher veröffentlicht werden als solche ohne Effekt. Eine Auswertung von Konferenzbeiträgen ergab, dass von den Arbeiten, die einen Vorteil fanden, rund zwei Drittel später in Fachzeitschriften erschienen, von den Arbeiten ohne Befund dagegen nur knapp ein Drittel.",
       "Hinzu kommt ein grundsätzliches methodisches Problem. Zweisprachigkeit lässt sich nicht im Labor herstellen; Forscher können Kinder nicht zufällig einer ein- oder zweisprachigen Erziehung zuteilen. Sie sind daher auf den Vergleich bestehender Gruppen angewiesen, die sich fast immer auch in anderen Merkmalen unterscheiden: in der Herkunft, im Wohnort, in den Bildungswegen der Eltern oder in der Häufigkeit, mit der sie Bücher lesen. Selbst sorgfältige statistische Verfahren können solche Unterschiede nur teilweise ausgleichen. Außerdem dauern die verwendeten Aufmerksamkeitstests oft nur wenige Minuten und erfassen nicht unbedingt, wie Menschen im Alltag mit Ablenkungen umgehen.",
       "Mehr Einigkeit besteht hinsichtlich der Frage, wie sich Mehrsprachigkeit im Gehirn selbst niederschlägt. Bildgebende Verfahren zeigen, dass bei Menschen, die zwei Sprachen regelmäßig verwenden, bestimmte Bereiche der grauen Substanz – etwa im linken unteren Scheitellappen – dichter ausgeprägt sind. Auch die Verbindungen zwischen den Hirnregionen, die an der Sprachkontrolle beteiligt sind, erscheinen bei ihnen kräftiger. Ob diese Unterschiede jedoch Ursache oder Folge sind, lässt sich aus solchen Momentaufnahmen nicht ablesen. Denkbar wäre auch, dass Menschen mit bestimmten neuronalen Voraussetzungen leichter eine zweite Sprache erwerben und sie deshalb häufiger nutzen.",
       "Besonders aufmerksam verfolgt die Öffentlichkeit die Frage nach einem möglichen Schutz vor Demenz. Mehrere Krankenhausstudien berichteten, dass zweisprachige Patienten die ersten Symptome einer Alzheimer-Erkrankung im Durchschnitt vier bis fünf Jahre später zeigten als einsprachige. Das bedeutet allerdings nicht, dass die Krankheit bei ihnen seltener auftritt. Vielmehr vermuten die Autoren, dass das zweisprachige Gehirn über eine größere sogenannte kognitive Reserve verfügt, mit der es Schäden länger ausgleichen kann. Bemerkenswerterweise zeigten Gehirnscans, dass die zweisprachigen Patienten zum Zeitpunkt der Diagnose sogar stärkere Abbauprozesse aufwiesen als die einsprachigen.",
       "Doch auch hier ist Vorsicht geboten. Die meisten dieser Studien stützen sich auf Patientenakten und auf Angaben der Betroffenen oder ihrer Angehörigen, die rückblickend erfolgen und daher ungenau sein können. Zudem handelt es sich bei den zweisprachigen Patienten in vielen Untersuchungen um Einwanderer, die sich in ihrer Lebensgeschichte auch in anderer Hinsicht von der Vergleichsgruppe unterscheiden. Langzeitstudien, die Menschen über Jahrzehnte begleiten, liefern bislang ein uneinheitliches Bild: Einige bestätigen den Aufschub, andere finden ihn nicht.",
       "Einen Hinweis darauf, dass es weniger auf die Zahl der Sprachen als auf ihre Nutzung ankommen könnte, liefert eine Untersuchung aus der Gegend um Lindau, in der viele ältere Menschen neben dem Hochdeutschen einen Dialekt sprechen. Wer im Alltag regelmäßig zwischen beiden Varietäten wechselte, schnitt in Gedächtnistests etwas besser ab als Gleichaltrige, die nur Hochdeutsch verwendeten. Die Autoren betonen allerdings selbst, dass ihre Studie nur eine kleine Region umfasst und die Ergebnisse vorerst als Anregung für weitere Forschung zu verstehen seien.",
       "Weitgehend unbestritten sind dagegen die Vorteile, die sich nicht im Labor messen lassen. Wer mehrere Sprachen beherrscht, hat Zugang zu mehr Menschen, Texten und Kulturen. Untersuchungen aus der Entwicklungspsychologie deuten außerdem darauf hin, dass mehrsprachig aufwachsende Kinder früher verstehen, dass andere Menschen eine andere Perspektive haben können – vermutlich, weil sie schon früh erleben, dass nicht jeder Gesprächspartner jede Sprache versteht. Auch diese Befunde beruhen allerdings überwiegend auf kleinen Stichproben.",
       "Und die alte Sorge, Mehrsprachigkeit überfordere Kinder? Sie gilt heute als widerlegt. Zwar verfügen zweisprachige Kinder in jeder einzelnen Sprache häufig über einen etwas kleineren Wortschatz als einsprachige; zählt man aber die Wörter beider Sprachen zusammen, ist ihr Gesamtwortschatz mindestens gleich groß. Auch das gelegentliche Mischen der Sprachen innerhalb eines Satzes ist kein Zeichen von Verwirrung, sondern folgt, wie Linguisten gezeigt haben, durchaus festen grammatischen Regeln.",
       "Wartmann selbst plädiert dafür, die Debatte zu versachlichen. „Wir sollten Mehrsprachigkeit nicht mit Versprechungen bewerben, die die Daten nicht hergeben\", sagt sie. Eltern, die ihren Kindern eine zweite Sprache mitgeben wollen, bräuchten dafür keine Rechtfertigung durch die Hirnforschung. Für die Wissenschaft wiederum sei die entscheidende Aufgabe, genauer zu bestimmen, unter welchen Bedingungen sich Effekte zeigen: Es mache vermutlich einen Unterschied, ob jemand zwei Sprachen täglich im Wechsel verwende oder eine Zweitsprache nur gelegentlich im Urlaub spreche. Mehrsprachigkeit sei eben keine einheitliche Erfahrung, sondern so vielfältig wie die Menschen, die mit ihr leben."
      ]
     },
     "aufgaben": [
      {
       "frage": "In den sechziger Jahren empfahlen Ärzte zweisprachigen Familien, sich auf eine Sprache zu beschränken.",
       "opt": [
        "richtig",
        "falsch",
        "steht nicht im Text"
       ],
       "loesung": 0,
       "fest": true,
       "stelle": "sich auf eine Sprache zu beschränken",
       "erklaerung": "Kinderärzte rieten damals genau dazu, aus Sorge vor Verwirrung."
      },
      {
       "frage": "Auch in der Fachwelt gilt heute als gesichert, dass Zweisprachigkeit vor Demenz schützt.",
       "opt": [
        "richtig",
        "falsch",
        "steht nicht im Text"
       ],
       "loesung": 1,
       "fest": true,
       "stelle": "Die Forschung selbst ist allerdings deutlich zurückhaltender",
       "erklaerung": "Das behaupten Ratgeber; die Forschung ist zurückhaltender."
      },
      {
       "frage": "Bei Zweisprachigen ist auch die Sprache aktiv, die sie im Moment nicht sprechen.",
       "opt": [
        "richtig",
        "falsch",
        "steht nicht im Text"
       ],
       "loesung": 0,
       "fest": true,
       "stelle": "beide Sprachen ständig aktiv sind",
       "erklaerung": "Beide Sprachen sind aktiv, auch wenn nur eine verwendet wird."
      },
      {
       "frage": "Die ersten Studien zum zweisprachigen Vorteil stützten sich auf große Stichproben.",
       "opt": [
        "richtig",
        "falsch",
        "steht nicht im Text"
       ],
       "loesung": 1,
       "fest": true,
       "stelle": "kaum mehr als zwanzig Kinder pro Gruppe",
       "erklaerung": "Die frühen Stichproben waren klein, oft nur etwa zwanzig Kinder pro Gruppe."
      },
      {
       "frage": "Die Studie aus Hallbrück wurde von einer Stiftung zur Förderung der Mehrsprachigkeit finanziert.",
       "opt": [
        "richtig",
        "falsch",
        "steht nicht im Text"
       ],
       "loesung": 2,
       "fest": true,
       "stelle": "ein Team der Universität Hallbrück über tausend Schulkinder",
       "erklaerung": "Über die Finanzierung der Studie sagt der Text nichts."
      },
      {
       "frage": "Arbeiten, die keinen Vorteil fanden, wurden seltener in Fachzeitschriften veröffentlicht.",
       "opt": [
        "richtig",
        "falsch",
        "steht nicht im Text"
       ],
       "loesung": 0,
       "fest": true,
       "stelle": "von den Arbeiten ohne Befund dagegen nur knapp ein Drittel",
       "erklaerung": "Zwei Drittel gegenüber knapp einem Drittel: Studien ohne Befund erschienen seltener."
      },
      {
       "frage": "Bildgebende Verfahren belegen, dass der Gebrauch zweier Sprachen die graue Substanz verdichtet.",
       "opt": [
        "richtig",
        "falsch",
        "steht nicht im Text"
       ],
       "loesung": 1,
       "fest": true,
       "stelle": "Ob diese Unterschiede jedoch Ursache oder Folge sind",
       "erklaerung": "Die Unterschiede sind messbar, aber Ursache und Folge sind ungeklärt – also kein Beleg."
      },
      {
       "frage": "Laut Krankenhausstudien erkranken Zweisprachige seltener an Alzheimer.",
       "opt": [
        "richtig",
        "falsch",
        "steht nicht im Text"
       ],
       "loesung": 1,
       "fest": true,
       "stelle": "nicht, dass die Krankheit bei ihnen seltener auftritt",
       "erklaerung": "Die Symptome zeigen sich später, die Krankheit tritt aber nicht seltener auf."
      },
      {
       "frage": "Langzeitstudien zeigen, dass der Aufschub bei Frauen stärker ausfällt als bei Männern.",
       "opt": [
        "richtig",
        "falsch",
        "steht nicht im Text"
       ],
       "loesung": 2,
       "fest": true,
       "stelle": "Langzeitstudien, die Menschen über Jahrzehnte begleiten",
       "erklaerung": "Unterschiede zwischen Frauen und Männern werden nicht erwähnt."
      },
      {
       "frage": "Zweisprachige Kinder kennen insgesamt mindestens so viele Wörter wie einsprachige.",
       "opt": [
        "richtig",
        "falsch",
        "steht nicht im Text"
       ],
       "loesung": 0,
       "fest": true,
       "stelle": "ist ihr Gesamtwortschatz mindestens gleich groß",
       "erklaerung": "Pro Sprache ist der Wortschatz kleiner, zusammengezählt aber mindestens gleich groß."
      },
      {
       "frage": "Wartmann rät Eltern, mit der zweiten Sprache vor dem dritten Lebensjahr zu beginnen.",
       "opt": [
        "richtig",
        "falsch",
        "steht nicht im Text"
       ],
       "loesung": 2,
       "fest": true,
       "stelle": "Eltern, die ihren Kindern eine zweite Sprache mitgeben wollen",
       "erklaerung": "Ein bestimmtes Alter für den Beginn nennt Wartmann nicht."
      },
      {
       "frage": "Welche Überschrift passt am besten zum ganzen Text?",
       "opt": [
        "Mehrsprachigkeit: Gehirntraining mit Garantie",
        "Zwischen Hoffnung und Beleg: Was Mehrsprachigkeit im Gehirn bewirkt",
        "Warum Kinder besser nur eine Sprache lernen sollten"
       ],
       "loesung": 1,
       "fest": true,
       "erklaerung": "Der Text stellt Hoffnungen und tatsächliche Befunde gegenüber und betont, dass vieles noch nicht belegt ist. „Garantie\" widerspricht dem Text, die Einsprachigkeit wird ausdrücklich nicht empfohlen."
      }
     ]
    },
    {
     "id": "c1c1t3s2",
     "text": {
      "sorte": "zeitung",
      "quelle": "Hochschulpsychologie aktuell",
      "titel": "Sachtext",
      "zeilen": [
       "Die Hausarbeit ist seit Wochen angekündigt, die Literatur liegt bereit, und doch wird zuerst die Küche geputzt, dann werden E-Mails beantwortet und schließlich Serien geschaut. Was im Alltag oft scherzhaft als „Aufschieberitis\" bezeichnet wird, nennt die Psychologie Prokrastination: das freiwillige Verschieben einer beabsichtigten Tätigkeit, obwohl man weiß, dass einem daraus Nachteile entstehen werden. Gerade diese letzte Bedingung unterscheidet Prokrastination von einer sinnvollen Prioritätensetzung. Wer eine Aufgabe zurückstellt, weil eine andere dringender ist, prokrastiniert nicht, sondern plant.",
       "Wie verbreitet das Phänomen an Hochschulen ist, hängt stark davon ab, wie man es misst. In Befragungen geben regelmäßig bis zu drei Viertel der Studenten an, wichtige Aufgaben häufig aufzuschieben. Legt man strengere Kriterien an und zählt nur diejenigen, die darunter erheblich leiden, kommt man auf etwa fünfzehn bis zwanzig Prozent. Eine Erhebung des Zentrums für Studienberatung in Felsingen unter knapp viertausend Studenten ergab, dass Prokrastination in den ersten beiden Semestern besonders ausgeprägt ist und danach allmählich abnimmt – allerdings ohne ganz zu verschwinden.",
       "Lange galt Prokrastination als Problem mangelnder Zeitplanung. Entsprechend boten Beratungsstellen vor allem Kurse zum Zeitmanagement an, in denen Wochenpläne erstellt und Aufgaben in Prioritätenlisten sortiert wurden. Die neuere Forschung sieht die Ursache jedoch an anderer Stelle. Nach heutigem Verständnis handelt es sich in erster Linie um ein Problem der Gefühlsregulation: Menschen schieben nicht die Aufgabe als solche auf, sondern die unangenehmen Gefühle, die mit ihr verbunden sind – Langeweile, Unsicherheit, Angst vor dem Scheitern. Das Aufschieben verschafft kurzfristig Erleichterung, und gerade diese Erleichterung verstärkt das Verhalten.",
       "Dass Prokrastination mit einer Neigung zum kurzfristigen Denken zusammenhängt, zeigt auch die Forschung zur sogenannten zeitlichen Abwertung. Belohnungen, die erst in ferner Zukunft eintreten, erscheinen uns weniger wert als solche, die sofort verfügbar sind. Eine gute Note am Semesterende kann deshalb gegen die unmittelbare Annehmlichkeit eines Videos oder eines Gesprächs mit Freunden kaum bestehen. Je näher der Abgabetermin rückt, desto stärker wiegt dagegen die drohende Strafe – was erklärt, warum viele erst in den letzten Tagen vor der Frist zu arbeiten beginnen.",
       "Diese Deutung wird durch Tagebuchstudien gestützt, in denen Studenten mehrmals täglich per Smartphone angaben, woran sie gerade arbeiteten und wie sie sich fühlten. In einer solchen Studie der Psychologin Miriam Osterkamp zeigte sich, dass Aufschieben besonders dann auftrat, wenn eine Aufgabe als unklar oder wenig sinnvoll erlebt wurde. Die Schwierigkeit der Aufgabe spielte dagegen eine geringere Rolle als erwartet. Osterkamp schließt daraus, dass Dozenten Prokrastination auch durch klar formulierte Arbeitsaufträge verringern könnten. Belegt ist dieser Zusammenhang bislang allerdings nur indirekt, da die Studie die Aufgabenstellungen selbst nicht verändert hat.",
       "Auch die Persönlichkeit spielt eine Rolle. Am deutlichsten hängt Prokrastination mit geringer Gewissenhaftigkeit und hoher Impulsivität zusammen. Weniger eindeutig ist der Zusammenhang mit Perfektionismus, der im Alltag oft als Hauptursache genannt wird. Die Studienlage spricht eher dafür, dass nicht der hohe Anspruch an sich zum Aufschieben führt, sondern die Sorge, diesem Anspruch nicht gerecht zu werden, und die Angst vor der Bewertung durch andere.",
       "Die Folgen sind nicht zu unterschätzen. Wer stark prokrastiniert, erzielt im Durchschnitt etwas schlechtere Noten, wobei der Effekt geringer ist, als viele vermuten würden. Deutlicher sind die Auswirkungen auf das Wohlbefinden: Betroffene berichten häufiger von Stress, Schlafproblemen und Schuldgefühlen. Eine Längsschnittstudie aus Felsingen, die Studenten über drei Semester begleitete, fand zudem, dass hohe Prokrastinationswerte zu Studienbeginn mit einem späteren Studienabbruch zusammenhingen. Ob die Prokrastination den Abbruch verursacht oder ob beide auf eine gemeinsame Ursache wie fehlendes Interesse am Fach zurückgehen, konnte die Studie nicht klären.",
       "Auch die Arbeitsumgebung hat sich verändert. Smartphones und soziale Medien bieten jederzeit verfügbare Ablenkungen, die mit minimalem Aufwand sofortige Belohnung versprechen. Ob Studenten heute tatsächlich stärker prokrastinieren als frühere Generationen, ist allerdings umstritten, da vergleichbare Daten aus früheren Jahrzehnten fehlen. Sicher ist nur, dass die Gelegenheiten zum Aufschieben zahlreicher und leichter zugänglich geworden sind. Einige Studenten reagieren darauf, indem sie ihr Telefon während der Arbeitsphasen in einem anderen Raum lassen oder Programme nutzen, die bestimmte Seiten für eine festgelegte Zeit sperren.",
       "Was hilft? Reine Zeitmanagementkurse zeigen in Untersuchungen nur geringe und oft kurzlebige Effekte. Wirksamer sind Programme, die an den Gefühlen ansetzen. Dazu gehört etwa, die eigene Unlust bewusst wahrzunehmen, ohne sich von ihr steuern zu lassen, oder eine Aufgabe in so kleine Schritte zu zerlegen, dass der Einstieg kaum noch Überwindung kostet. Statt „Hausarbeit schreiben\" lautet das Ziel dann beispielsweise „drei Sätze zur Gliederung notieren\". In einer Interventionsstudie mit rund zweihundert Teilnehmern sank die Prokrastination nach einem sechswöchigen Training dieser Art deutlich und blieb auch ein halbes Jahr später auf niedrigerem Niveau.",
       "Ein überraschend wirksamer Faktor ist zudem Selbstmitgefühl. Wer sich nach einem verlorenen Nachmittag heftig selbst kritisiert, schiebt beim nächsten Mal eher wieder auf, weil die Aufgabe nun mit noch mehr negativen Gefühlen belegt ist. In einem Experiment wurden Studenten, die vor einer Prüfung aufgeschoben hatten, angeleitet, sich selbst zu verzeihen. Vor der darauffolgenden Prüfung prokrastinierten sie weniger als eine Vergleichsgruppe ohne diese Anleitung. Selbstmitgefühl bedeutet dabei nicht, die eigenen Versäumnisse schönzureden, sondern sie anzuerkennen, ohne sich dafür abzuwerten.",
       "Auch strukturelle Bedingungen an den Hochschulen geraten in den Blick. Lange Bearbeitungszeiten ohne Zwischenschritte begünstigen das Aufschieben, weil der Abgabetermin lange abstrakt bleibt. Einige Fachbereiche haben deshalb begonnen, Zwischenabgaben einzuführen, etwa eine Gliederung nach drei Wochen oder ein erstes Kapitel nach sechs Wochen. Erste Rückmeldungen von Dozenten sind positiv; systematische Auswertungen stehen jedoch noch aus. Eine wichtige Rolle kann dabei auch das soziale Umfeld spielen. In sogenannten Schreibgruppen treffen sich Studenten zu festen Zeiten, um gemeinsam, aber jeder für sich, an ihren Arbeiten zu schreiben. Der Austausch beschränkt sich oft auf wenige Minuten zu Beginn und am Ende, in denen man sich Ziele setzt und berichtet, was erreicht wurde. Viele Teilnehmer geben an, dass ihnen schon die Verbindlichkeit dieser Verabredung hilft, überhaupt anzufangen.",
       "Fachleute warnen allerdings davor, jedes Aufschieben zu pathologisieren. Gelegentliches Verschieben gehöre zum normalen Arbeitsverhalten, und manche Menschen arbeiteten unter Zeitdruck tatsächlich konzentrierter. Problematisch werde es erst, wenn das Aufschieben zum Dauerzustand werde und das eigene Leben spürbar beeinträchtige. Für diese Gruppe bieten inzwischen viele Hochschulen Beratungen und Gruppenprogramme an, die allerdings, so Osterkamp, noch zu selten genutzt würden – häufig aus Scham, ausgerechnet wegen „Faulheit\" Hilfe zu suchen. Dabei habe Prokrastination, wie die Forschung zeige, mit Faulheit wenig zu tun."
      ]
     },
     "aufgaben": [
      {
       "frage": "Wer eine Aufgabe zugunsten einer dringenderen verschiebt, prokrastiniert im psychologischen Sinn nicht.",
       "opt": [
        "richtig",
        "falsch",
        "steht nicht im Text"
       ],
       "loesung": 0,
       "fest": true,
       "stelle": "prokrastiniert nicht, sondern plant",
       "erklaerung": "Das Zurückstellen wegen einer dringenderen Aufgabe gilt als Planung."
      },
      {
       "frage": "Nach strengen Kriterien leidet die Mehrheit der Studenten unter Prokrastination.",
       "opt": [
        "richtig",
        "falsch",
        "steht nicht im Text"
       ],
       "loesung": 1,
       "fest": true,
       "stelle": "kommt man auf etwa fünfzehn bis zwanzig Prozent",
       "erklaerung": "Drei Viertel gilt nur für die Selbstauskunft; nach strengen Kriterien sind es fünfzehn bis zwanzig Prozent."
      },
      {
       "frage": "Männliche Studenten schieben laut der Felsinger Erhebung häufiger auf als weibliche.",
       "opt": [
        "richtig",
        "falsch",
        "steht nicht im Text"
       ],
       "loesung": 2,
       "fest": true,
       "stelle": "Prokrastination in den ersten beiden Semestern besonders ausgeprägt ist",
       "erklaerung": "Die Erhebung wird nur nach Semestern beschrieben, nicht nach Geschlecht."
      },
      {
       "frage": "Laut der Felsinger Erhebung verschwindet Prokrastination nach den ersten Semestern vollständig.",
       "opt": [
        "richtig",
        "falsch",
        "steht nicht im Text"
       ],
       "loesung": 1,
       "fest": true,
       "stelle": "allerdings ohne ganz zu verschwinden",
       "erklaerung": "Sie nimmt ab, verschwindet aber nicht ganz."
      },
      {
       "frage": "Die neuere Forschung versteht Prokrastination vor allem als Problem im Umgang mit Gefühlen.",
       "opt": [
        "richtig",
        "falsch",
        "steht nicht im Text"
       ],
       "loesung": 0,
       "fest": true,
       "stelle": "in erster Linie um ein Problem der Gefühlsregulation",
       "erklaerung": "Gefühlsregulation wird als Hauptursache genannt."
      },
      {
       "frage": "Osterkamps Studie hat nachgewiesen, dass klarere Arbeitsaufträge das Aufschieben verringern.",
       "opt": [
        "richtig",
        "falsch",
        "steht nicht im Text"
       ],
       "loesung": 1,
       "fest": true,
       "stelle": "Belegt ist dieser Zusammenhang bislang allerdings nur indirekt",
       "erklaerung": "Das ist eine Schlussfolgerung Osterkamps, kein direkter Nachweis."
      },
      {
       "frage": "Perfektionismus ist nach der Studienlage die wichtigste Ursache für Prokrastination.",
       "opt": [
        "richtig",
        "falsch",
        "steht nicht im Text"
       ],
       "loesung": 1,
       "fest": true,
       "stelle": "Weniger eindeutig ist der Zusammenhang mit Perfektionismus",
       "erklaerung": "Im Alltag gilt er als Hauptursache, die Forschung sieht das weniger eindeutig."
      },
      {
       "frage": "Prokrastination wirkt sich deutlicher auf das Wohlbefinden aus als auf die Noten.",
       "opt": [
        "richtig",
        "falsch",
        "steht nicht im Text"
       ],
       "loesung": 0,
       "fest": true,
       "stelle": "Deutlicher sind die Auswirkungen auf das Wohlbefinden",
       "erklaerung": "Der Noteneffekt ist gering, die Folgen für das Wohlbefinden sind deutlicher."
      },
      {
       "frage": "Das sechswöchige Training ist inzwischen an mehreren Hochschulen fest eingeführt.",
       "opt": [
        "richtig",
        "falsch",
        "steht nicht im Text"
       ],
       "loesung": 2,
       "fest": true,
       "stelle": "nach einem sechswöchigen Training dieser Art deutlich",
       "erklaerung": "Über eine Einführung an Hochschulen sagt der Text nichts."
      },
      {
       "frage": "Studenten, die sich selbst verziehen hatten, schoben vor der nächsten Prüfung weniger auf.",
       "opt": [
        "richtig",
        "falsch",
        "steht nicht im Text"
       ],
       "loesung": 0,
       "fest": true,
       "stelle": "prokrastinierten sie weniger als eine Vergleichsgruppe",
       "erklaerung": "Die angeleitete Gruppe prokrastinierte weniger als die Vergleichsgruppe."
      },
      {
       "frage": "Nach Angaben der Dozenten verbessern Zwischenabgaben vor allem die Noten schwächerer Studenten.",
       "opt": [
        "richtig",
        "falsch",
        "steht nicht im Text"
       ],
       "loesung": 2,
       "fest": true,
       "stelle": "Erste Rückmeldungen von Dozenten sind positiv",
       "erklaerung": "Die Rückmeldungen sind nur allgemein positiv; von Noten schwächerer Studenten ist keine Rede."
      },
      {
       "frage": "Welche Überschrift passt am besten zum ganzen Text?",
       "opt": [
        "Prokrastination im Studium: Ursachen, Folgen und Gegenstrategien",
        "Zeitmanagement als Schlüssel zum Studienerfolg",
        "Warum vor allem Perfektionisten aufschieben"
       ],
       "loesung": 0,
       "fest": true,
       "erklaerung": "Der Text behandelt Definition, Ursachen, Folgen und Hilfen. Zeitmanagement gilt im Text als wenig wirksam, und Perfektionismus wird gerade nicht als Hauptursache bestätigt."
      }
     ]
    },
    {
     "id": "c1c1t3s3",
     "text": {
      "sorte": "zeitung",
      "quelle": "Stadt und Umwelt – Zeitschrift für Stadtökologie",
      "titel": "Sachtext",
      "zeilen": [
       "An heißen Sommertagen lässt sich der Effekt unmittelbar spüren: Wer von einem sonnigen Platz in eine von Bäumen gesäumte Straße wechselt, empfindet die Luft dort als deutlich angenehmer. Städte heizen sich stärker auf als ihr Umland, weil Asphalt, Beton und Ziegel tagsüber Wärme speichern und nachts wieder abgeben. Dieser sogenannte Wärmeinseleffekt kann dazu führen, dass es in Innenstädten in Sommernächten um mehrere Grad wärmer bleibt als in den umliegenden Dörfern. Besonders betroffen sind ältere Menschen, Kleinkinder und chronisch Kranke, für die Hitzeperioden ein ernstes Gesundheitsrisiko darstellen. Bäume gelten deshalb als eines der wichtigsten Mittel, um Städte an den Klimawandel anzupassen.",
       "Wie stark Bäume kühlen, haben Forscher in den vergangenen Jahren immer genauer gemessen. Dabei sind zwei Mechanismen zu unterscheiden. Zum einen spenden Baumkronen Schatten und verhindern so, dass sich Straßen, Gehwege und Fassaden überhaupt erst aufheizen. Zum anderen verdunsten Bäume über ihre Blätter große Mengen Wasser, wodurch der Umgebung Wärme entzogen wird. Ein großer, gut mit Wasser versorgter Baum kann an einem Sommertag mehrere hundert Liter Wasser verdunsten. Rechnerisch entspricht seine Kühlleistung dabei der mehrerer Klimaanlagen.",
       "Messungen des Instituts für Stadtklimatologie in Wendelsheim ergaben, dass die gefühlte Temperatur unter dicht belaubten Bäumen an heißen Nachmittagen um bis zu zwölf Grad niedriger lag als auf benachbarten unbeschatteten Flächen. Die Lufttemperatur selbst unterschied sich dagegen nur um ein bis zwei Grad. Der größere Teil der wahrgenommenen Abkühlung geht also auf den Schatten zurück, der die Wärmestrahlung von Sonne und aufgeheizten Oberflächen abschirmt. Für die Gesundheit ist gerade diese gefühlte Temperatur entscheidend, da sie bestimmt, wie stark der Körper belastet wird.",
       "Nicht jeder Baum kühlt gleich gut. Entscheidend sind vor allem die Größe und Dichte der Krone sowie die Wasserversorgung. Ein junger Baum mit schmaler Krone leistet nur einen Bruchteil dessen, was ein ausgewachsener Baum leistet. Das hat eine unbequeme Folge: Wird ein alter Baum gefällt und durch einen jungen ersetzt, dauert es oft Jahrzehnte, bis die frühere Kühlwirkung wieder erreicht ist. Stadtökologen fordern daher, den Erhalt bestehender Bäume stärker zu gewichten als Neupflanzungen – eine Forderung, die bei Bauprojekten bislang selten berücksichtigt wird.",
       "Zugleich leiden Stadtbäume selbst unter den Bedingungen, die sie mildern sollen. Ihr Wurzelraum ist durch Leitungen, Fundamente und versiegelte Flächen stark begrenzt, der Boden ist oft verdichtet, und im Winter belastet Streusalz die Wurzeln. Hinzu kommen die zunehmend trockenen Sommer. In den Dürrejahren des vergangenen Jahrzehnts mussten viele Städte eine ungewöhnlich hohe Zahl geschädigter Bäume fällen. Ein trockengestresster Baum schließt zudem seine Spaltöffnungen, um Wasser zu sparen, und verdunstet dann kaum noch – er kühlt also gerade an den heißesten Tagen am wenigsten.",
       "Hinzu kommen Krankheiten und Schädlinge, die sich in wärmeren Wintern leichter ausbreiten. Die Rußrindenkrankheit etwa, die vor allem Ahornbäume befällt, trat lange Zeit nur vereinzelt auf und wird inzwischen in vielen Regionen nach heißen Sommern gehäuft beobachtet. Ihre Sporen können bei Menschen zudem Atembeschwerden auslösen, weshalb befallene Bäume in Parks und an Straßen meist rasch gefällt werden müssen. Für die Stadtplanung bedeutet das, dass sich nicht mehr verlässlich vorhersagen lässt, welche Bäume in dreißig oder fünfzig Jahren noch an ihrem Platz stehen werden.",
       "Deshalb rückt die Frage in den Mittelpunkt, welche Baumarten künftig gepflanzt werden sollen. Traditionelle Stadtbäume wie Linde, Ahorn und Rosskastanie kommen mit Hitze und Trockenheit teilweise schlecht zurecht. In mehreren Städten laufen daher Versuche mit Arten aus wärmeren Regionen Südosteuropas und Nordamerikas. Das Projekt „Zukunftsbaum\" in Wendelsheim testet seit acht Jahren über dreißig Arten an Straßenstandorten. Erste Ergebnisse zeigen, dass einige Arten deutlich weniger Ausfälle haben als die heimischen Vergleichsbäume. Ob sie langfristig ebenso viel Schatten spenden, lässt sich nach so kurzer Zeit allerdings noch nicht beurteilen.",
       "Kritisch sehen manche Naturschützer, dass gebietsfremde Arten weniger Lebensraum für heimische Insekten und Vögel bieten könnten. Der Ökologe Bernd Faltermeier hält diese Sorge für teilweise berechtigt, warnt aber vor einem Entweder-oder. Sinnvoll sei eine Mischung, die das Risiko verteile: Falle eine Art durch Krankheit oder Schädlinge aus, bleibe der Bestand insgesamt erhalten. Wie verwundbar einseitige Bestände seien, habe das Ulmensterben im vergangenen Jahrhundert gezeigt, dem in vielen Städten fast alle Ulmen zum Opfer fielen.",
       "Ein weiteres Thema ist die Bewässerung. Junge Bäume müssen in den ersten Jahren nach der Pflanzung regelmäßig gegossen werden, was für die Grünflächenämter einen erheblichen Aufwand bedeutet. Einige Städte setzen deshalb auf das sogenannte Schwammstadt-Prinzip: Regenwasser wird nicht mehr vollständig in die Kanalisation geleitet, sondern in unterirdischen Speichern unter Straßenbäumen gesammelt, aus denen sich die Wurzeln bei Trockenheit versorgen können. Gleichzeitig entlastet dieses Prinzip bei Starkregen die Kanalisation. Die Umrüstung bestehender Straßen ist allerdings aufwendig und teuer und lohnt sich daher vor allem dort, wo Straßen ohnehin erneuert werden.",
       "Auch Bürger engagieren sich zunehmend. In vielen Städten gibt es Gießpatenschaften, bei denen sich Anwohner verpflichten, einen Baum vor ihrem Haus in Trockenperioden zu wässern. In Wendelsheim haben sich nach Angaben der Stadt innerhalb von zwei Jahren über zweitausend Paten registriert. Wie viel Wasser tatsächlich ausgebracht wird, erfasst die Stadt allerdings nicht. Stadtökologen begrüßen das Engagement, betonen aber, dass es die professionelle Pflege nicht ersetzen könne.",
       "Wie viel Grün eine Stadt braucht, versuchen einige Kommunen inzwischen in festen Zielwerten zu fassen. Verbreitet ist etwa die Faustregel, dass von jeder Wohnung aus mindestens drei Bäume zu sehen sein sollten, die Baumkronen ein Drittel jedes Stadtviertels beschatten sollten und die nächste Grünanlage in höchstens dreihundert Metern erreichbar sein sollte. In dicht bebauten Altbauvierteln ist schon das zweite Ziel kaum zu erreichen, weil unter vielen Straßen Leitungen verlaufen, die keinen Platz für tiefe Wurzeln lassen. Hier werden Fassaden- und Dachbegrünungen als Ergänzung erprobt, deren Kühlwirkung allerdings deutlich geringer ist.",
       "Bei aller Bedeutung warnen Klimaforscher davor, Stadtbäume als Allheilmittel zu betrachten. Zur Verringerung der Treibhausgasemissionen tragen sie nur in geringem Maß bei; ihre Stärke liegt in der Anpassung an die Folgen des Klimawandels, nicht in seiner Bekämpfung. Zudem können Bäume in sehr engen Straßen nachts sogar dazu führen, dass warme Luft unter den Kronen gefangen bleibt. Faltermeier fasst den Stand der Forschung so zusammen: „Der Baum ist kein Wundermittel, aber kaum eine andere Maßnahme bietet so viele Vorteile auf einmal.\" Die Herausforderung bestehe darin, ihm in der Stadt die Bedingungen zu verschaffen, unter denen er diese Vorteile auch entfalten könne."
      ]
     },
     "aufgaben": [
      {
       "frage": "In Sommernächten ist es in Innenstädten oft wärmer als in den umliegenden Dörfern.",
       "opt": [
        "richtig",
        "falsch",
        "steht nicht im Text"
       ],
       "loesung": 0,
       "fest": true,
       "stelle": "um mehrere Grad wärmer bleibt als in den umliegenden Dörfern",
       "erklaerung": "Der Wärmeinseleffekt hält Innenstädte nachts mehrere Grad wärmer."
      },
      {
       "frage": "Bäume kühlen ihre Umgebung ausschließlich durch die Verdunstung von Wasser.",
       "opt": [
        "richtig",
        "falsch",
        "steht nicht im Text"
       ],
       "loesung": 1,
       "fest": true,
       "stelle": "Dabei sind zwei Mechanismen zu unterscheiden",
       "erklaerung": "Neben der Verdunstung kühlt auch der Schatten – es gibt zwei Mechanismen."
      },
      {
       "frage": "In Wendelsheim war die Lufttemperatur unter Bäumen um bis zu zwölf Grad niedriger.",
       "opt": [
        "richtig",
        "falsch",
        "steht nicht im Text"
       ],
       "loesung": 1,
       "fest": true,
       "stelle": "Die Lufttemperatur selbst unterschied sich dagegen nur um ein bis zwei Grad",
       "erklaerung": "Zwölf Grad betrifft die gefühlte Temperatur, die Lufttemperatur sank nur um ein bis zwei Grad."
      },
      {
       "frage": "Die wahrgenommene Abkühlung unter Bäumen beruht überwiegend auf dem Schatten.",
       "opt": [
        "richtig",
        "falsch",
        "steht nicht im Text"
       ],
       "loesung": 0,
       "fest": true,
       "stelle": "Der größere Teil der wahrgenommenen Abkühlung geht also auf den Schatten zurück",
       "erklaerung": "Der Schatten schirmt die Wärmestrahlung ab und macht den größeren Teil aus."
      },
      {
       "frage": "Bei Bauprojekten wird der Erhalt alter Bäume inzwischen in der Regel vorrangig behandelt.",
       "opt": [
        "richtig",
        "falsch",
        "steht nicht im Text"
       ],
       "loesung": 1,
       "fest": true,
       "stelle": "bei Bauprojekten bislang selten berücksichtigt wird",
       "erklaerung": "Die Forderung wird bislang selten berücksichtigt, nicht in der Regel."
      },
      {
       "frage": "Bäume unter Trockenstress verdunsten an heißen Tagen besonders viel Wasser.",
       "opt": [
        "richtig",
        "falsch",
        "steht nicht im Text"
       ],
       "loesung": 1,
       "fest": true,
       "stelle": "verdunstet dann kaum noch",
       "erklaerung": "Gestresste Bäume schließen ihre Spaltöffnungen und verdunsten kaum noch."
      },
      {
       "frage": "Die Baumarten aus wärmeren Regionen sind in der Anschaffung teurer als heimische Arten.",
       "opt": [
        "richtig",
        "falsch",
        "steht nicht im Text"
       ],
       "loesung": 2,
       "fest": true,
       "stelle": "Versuche mit Arten aus wärmeren Regionen",
       "erklaerung": "Über die Kosten der neuen Arten sagt der Text nichts."
      },
      {
       "frage": "Im Projekt „Zukunftsbaum\" fallen einige der getesteten Arten seltener aus als heimische Bäume.",
       "opt": [
        "richtig",
        "falsch",
        "steht nicht im Text"
       ],
       "loesung": 0,
       "fest": true,
       "stelle": "einige Arten deutlich weniger Ausfälle haben",
       "erklaerung": "Erste Ergebnisse zeigen weniger Ausfälle bei einigen Arten."
      },
      {
       "frage": "Faltermeier hält eine Mischung verschiedener Baumarten für sinnvoll.",
       "opt": [
        "richtig",
        "falsch",
        "steht nicht im Text"
       ],
       "loesung": 0,
       "fest": true,
       "stelle": "Sinnvoll sei eine Mischung, die das Risiko verteile",
       "erklaerung": "Er warnt vor einem Entweder-oder und plädiert für eine Mischung."
      },
      {
       "frage": "In Wendelsheim wird das Schwammstadt-Prinzip bereits in allen Neubaugebieten umgesetzt.",
       "opt": [
        "richtig",
        "falsch",
        "steht nicht im Text"
       ],
       "loesung": 2,
       "fest": true,
       "stelle": "Einige Städte setzen deshalb auf das sogenannte Schwammstadt-Prinzip",
       "erklaerung": "Es heißt nur „einige Städte\"; von Wendelsheim und Neubaugebieten ist nicht die Rede."
      },
      {
       "frage": "Dank der Gießpaten konnte Wendelsheim den Wasserverbrauch der Grünflächenämter halbieren.",
       "opt": [
        "richtig",
        "falsch",
        "steht nicht im Text"
       ],
       "loesung": 2,
       "fest": true,
       "stelle": "Wie viel Wasser tatsächlich ausgebracht wird, erfasst die Stadt allerdings nicht",
       "erklaerung": "Zu Einsparungen des Amts gibt es keine Angabe; die Wassermenge wird nicht einmal erfasst."
      },
      {
       "frage": "Welche Überschrift passt am besten zum ganzen Text?",
       "opt": [
        "Neue Baumarten erobern die Innenstädte",
        "Wie Städte mit Bäumen ihre Emissionen senken",
        "Kühlung mit Grenzen: Was Stadtbäume leisten – und was sie brauchen"
       ],
       "loesung": 2,
       "fest": true,
       "erklaerung": "Der Text zeigt die Kühlwirkung, aber auch die Probleme und Bedingungen der Stadtbäume. Neue Arten sind nur ein Teilaspekt, und zur Emissionssenkung tragen Bäume laut Text kaum bei."
      }
     ]
    }
   ]
  },
  {
   "nr": 4,
   "art": "textwahl",
   "name": "Sprachbausteine",
   "kurz": "Ein Text, 22 Lücken, je vier Möglichkeiten",
   "was": "Ein Fachtext mit 22 Lücken. Für jede Lücke gibt es vier Möglichkeiten — Grammatik und Wortschatz auf C1.",
   "tipp": "Feste Verbindungen erkennen: in Betracht ziehen, zur Folge haben, im Hinblick auf. Und den Kasus nach der Präposition prüfen.",
   "zeichen": "🧩",
   "farbe": "lila",
   "punkte": 22,
   "runden": [
    {
     "id": "c1c1sbs1",
     "text": {
      "sorte": "zeitung",
      "quelle": "Informationsblatt der Studienberatung, Hochschule Ellerbach",
      "titel": "Orientierungsangebote für Erstsemester",
      "zeilen": [
       "Der Übergang von der Schule an die Hochschule stellt viele junge Menschen vor Herausforderungen, __(1)__ sie im Vorfeld oft unterschätzen. __(2)__ der wachsenden Zahl an Studienanfängern hat die Hochschule Ellerbach ihr Beratungsangebot in den vergangenen Jahren deutlich erweitert. Bereits vor Beginn der Vorlesungszeit finden Einführungstage statt, an __(3)__ sich die einzelnen Fachbereiche vorstellen. Die Teilnahme ist zwar freiwillig, wird jedoch dringend __(4)__. Erfahrungsgemäß finden sich Studenten, die diese Tage versäumen, __(5)__ schwerer im Studienalltag zurecht.",
       "Ein zentrales Element ist das Mentorenprogramm. Studenten höherer Semester begleiten die Neuankömmlinge während des ersten Studienjahres und stehen ihnen bei Fragen __(6)__ Seite. Dabei geht es nicht nur um fachliche Inhalte, __(7)__ auch um praktische Dinge wie die Wohnungssuche oder die Organisation des Stundenplans. __(8)__ Befragungen der vergangenen Jahre fühlen sich Teilnehmer des Programms besser integriert und brechen ihr Studium seltener __(9)__.",
       "Darüber hinaus bietet die Studienberatung Workshops an, in denen Techniken des wissenschaftlichen Arbeitens __(10)__ werden. Wer etwa nicht weiß, wie man eine Hausarbeit gliedert oder Quellen korrekt angibt, kann hier gezielt __(11)__ schließen. Besonders gefragt sind Kurse zum Zeitmanagement, __(12)__ viele Erstsemester Schwierigkeiten haben, die neue Freiheit sinnvoll zu nutzen. Anders als in der Schule gibt es kaum feste Vorgaben, __(13)__ die Verantwortung für den Lernerfolg weitgehend bei den Studenten selbst liegt.",
       "Für internationale Studenten hält die Hochschule ergänzende Angebote bereit. Neben Sprachkursen, die __(14)__ Semesterbeginn starten, gibt es Informationsveranstaltungen zu Aufenthaltsfragen und zur Anerkennung ausländischer Abschlüsse. Wer __(15)__ Unterstützung angewiesen ist, sollte sich frühzeitig melden. Die Erfahrung zeigt, dass Anträge, __(16)__ erst kurz vor Fristende gestellt werden, häufig nicht mehr rechtzeitig bearbeitet werden können.",
       "Die Studienberatung weist zudem darauf __(17)__, dass ein Wechsel des Studienfachs kein Scheitern bedeutet. Wer im Laufe des ersten Jahres feststellt, dass das gewählte Fach nicht den eigenen Erwartungen __(18)__, kann sich ergebnisoffen beraten lassen. In vielen Fällen können bereits erbrachte Leistungen __(19)__ werden. Entscheidend ist __(20)__ allem, Probleme nicht zu lange für sich zu behalten. Die Beratung ist kostenlos und unterliegt der Schweigepflicht. Termine können sowohl persönlich __(21)__ auch online vereinbart werden. Weitere Informationen sind auf der Website der Hochschule __(22)__."
      ]
     },
     "aufgaben": [
      {
       "frage": "Was passt in Lücke 1?",
       "luecke": 1,
       "opt": [
        "welcher",
        "denen",
        "die",
        "deren"
       ],
       "loesung": 2,
       "fest": true,
       "erklaerung": "Relativpronomen im Akkusativ Plural: „Herausforderungen unterschätzen\" → „die\"."
      },
      {
       "frage": "Was passt in Lücke 2?",
       "luecke": 2,
       "opt": [
        "Statt",
        "Mithilfe",
        "Trotz",
        "Angesichts"
       ],
       "loesung": 3,
       "fest": true,
       "erklaerung": "„angesichts\" + Genitiv nennt den Anlass; „trotz\" ergibt einen Widerspruch."
      },
      {
       "frage": "Was passt in Lücke 3?",
       "luecke": 3,
       "opt": [
        "denen",
        "deren",
        "die",
        "den"
       ],
       "loesung": 0,
       "fest": true,
       "erklaerung": "„an + Dativ Plural\" (an den Einführungstagen) → Relativpronomen „denen\"."
      },
      {
       "frage": "Was passt in Lücke 4?",
       "luecke": 4,
       "opt": [
        "empfohlen",
        "empfahl",
        "empfehlend",
        "empfehlen"
       ],
       "loesung": 0,
       "fest": true,
       "erklaerung": "Vorgangspassiv: „wird … empfohlen\" mit Partizip II."
      },
      {
       "frage": "Was passt in Lücke 5?",
       "luecke": 5,
       "opt": [
        "deutliche",
        "deutlich",
        "Deutlichkeit",
        "deutlicher"
       ],
       "loesung": 1,
       "fest": true,
       "erklaerung": "Adverb vor dem Komparativ „schwerer\": unflektiert „deutlich\"."
      },
      {
       "frage": "Was passt in Lücke 6?",
       "luecke": 6,
       "opt": [
        "zur",
        "an der",
        "bei der",
        "auf der"
       ],
       "loesung": 0,
       "fest": true,
       "erklaerung": "Feste Wendung: „jemandem zur Seite stehen\"."
      },
      {
       "frage": "Was passt in Lücke 7?",
       "luecke": 7,
       "opt": [
        "sowie",
        "jedoch",
        "sondern",
        "aber"
       ],
       "loesung": 2,
       "fest": true,
       "erklaerung": "„nicht nur …, sondern auch\" ist ein fester zweiteiliger Konnektor."
      },
      {
       "frage": "Was passt in Lücke 8?",
       "luecke": 8,
       "opt": [
        "Laut",
        "Nach dem",
        "Zufolge",
        "Gemäß dem"
       ],
       "loesung": 0,
       "fest": true,
       "erklaerung": "„laut\" + Quelle ohne Artikel; „zufolge\" steht nach dem Nomen."
      },
      {
       "frage": "Was passt in Lücke 9?",
       "luecke": 9,
       "opt": [
        "auf",
        "ab",
        "an",
        "aus"
       ],
       "loesung": 1,
       "fest": true,
       "erklaerung": "„ein Studium abbrechen\": trennbares Präfix „ab\" am Satzende."
      },
      {
       "frage": "Was passt in Lücke 10?",
       "luecke": 10,
       "opt": [
        "vermittelt",
        "vermittelte",
        "vermittelnd",
        "vermitteln"
       ],
       "loesung": 0,
       "fest": true,
       "erklaerung": "Passiv im Relativsatz: „in denen Techniken vermittelt werden\"."
      },
      {
       "frage": "Was passt in Lücke 11?",
       "luecke": 11,
       "opt": [
        "Fenster",
        "Kreise",
        "Lücken",
        "Verträge"
       ],
       "loesung": 2,
       "fest": true,
       "erklaerung": "Feste Verbindung: „Lücken schließen\" = fehlendes Wissen ergänzen."
      },
      {
       "frage": "Was passt in Lücke 12?",
       "luecke": 12,
       "opt": [
        "trotzdem",
        "deshalb",
        "denn",
        "da"
       ],
       "loesung": 3,
       "fest": true,
       "erklaerung": "Verb am Ende („haben\") → Subjunktion „da\"; „denn\" verlangt Verbzweitstellung."
      },
      {
       "frage": "Was passt in Lücke 13?",
       "luecke": 13,
       "opt": [
        "damit",
        "sodass",
        "falls",
        "obwohl"
       ],
       "loesung": 1,
       "fest": true,
       "erklaerung": "Folge: Weil es kaum Vorgaben gibt, liegt die Verantwortung bei den Studenten → „sodass\"."
      },
      {
       "frage": "Was passt in Lücke 14?",
       "luecke": 14,
       "opt": [
        "bis",
        "seit",
        "vor",
        "während"
       ],
       "loesung": 2,
       "fest": true,
       "erklaerung": "Zeitpunkt vor einem Ereignis: „vor Semesterbeginn starten\"."
      },
      {
       "frage": "Was passt in Lücke 15?",
       "luecke": 15,
       "opt": [
        "an",
        "von",
        "für",
        "auf"
       ],
       "loesung": 3,
       "fest": true,
       "erklaerung": "Feste Präposition: „angewiesen sein auf + Akkusativ\"."
      },
      {
       "frage": "Was passt in Lücke 16?",
       "luecke": 16,
       "opt": [
        "deren",
        "denen",
        "welchen",
        "die"
       ],
       "loesung": 3,
       "fest": true,
       "erklaerung": "Subjekt im Relativsatz, Plural Nominativ: „Anträge, die … gestellt werden\"."
      },
      {
       "frage": "Was passt in Lücke 17?",
       "luecke": 17,
       "opt": [
        "an",
        "zu",
        "hin",
        "auf"
       ],
       "loesung": 2,
       "fest": true,
       "erklaerung": "„darauf hinweisen, dass\": „hin\" gehört zum trennbaren Verb."
      },
      {
       "frage": "Was passt in Lücke 18?",
       "luecke": 18,
       "opt": [
        "entsprechen",
        "entsprechend",
        "Entsprechung",
        "entspricht"
       ],
       "loesung": 3,
       "fest": true,
       "erklaerung": "Konjugiertes Verb im Nebensatz, Subjekt „das Fach\" (Singular) → „entspricht\"."
      },
      {
       "frage": "Was passt in Lücke 19?",
       "luecke": 19,
       "opt": [
        "anerkannte",
        "anerkennend",
        "anerkannt",
        "anerkennen"
       ],
       "loesung": 2,
       "fest": true,
       "erklaerung": "Passiv mit Modalverb: „können … anerkannt werden\"."
      },
      {
       "frage": "Was passt in Lücke 20?",
       "luecke": 20,
       "opt": [
        "über",
        "vor",
        "nach",
        "unter"
       ],
       "loesung": 1,
       "fest": true,
       "erklaerung": "Feste Wendung: „vor allem\"."
      },
      {
       "frage": "Was passt in Lücke 21?",
       "luecke": 21,
       "opt": [
        "denn",
        "als",
        "oder",
        "noch"
       ],
       "loesung": 1,
       "fest": true,
       "erklaerung": "Zweiteiliger Konnektor: „sowohl … als auch\"."
      },
      {
       "frage": "Was passt in Lücke 22?",
       "luecke": 22,
       "opt": [
        "abrufen",
        "abgerufen",
        "abrufend",
        "abrufbar"
       ],
       "loesung": 3,
       "fest": true,
       "erklaerung": "„sein + -bar\" ersetzt das Passiv: = können abgerufen werden."
      }
     ]
    },
    {
     "id": "c1c1sbs2",
     "text": {
      "sorte": "zeitung",
      "quelle": "Merkblatt der Universität Rothenau zur guten wissenschaftlichen Praxis",
      "titel": "Plagiate vermeiden",
      "zeilen": [
       "Wissenschaftliches Arbeiten beruht __(1)__ dem Grundsatz, dass fremde Gedanken stets als solche kenntlich gemacht werden. Wer Formulierungen, Daten oder Ideen anderer übernimmt, ohne die Quelle __(2)__, begeht ein Plagiat. Dies gilt __(3)__ davon, ob es sich um ein Buch, einen Zeitschriftenartikel oder eine Internetseite handelt. Auch die Übersetzung eines fremdsprachigen Textes __(4)__ als Plagiat, wenn sie nicht gekennzeichnet ist. Unwissenheit schützt dabei nicht vor Sanktionen; maßgeblich ist allein, ob fremdes Gedankengut ohne Kennzeichnung übernommen wurde.",
       "In den vergangenen Jahren ist die Zahl der aufgedeckten Fälle deutlich __(5)__. Dies ist __(6)__ darauf zurückzuführen, dass Hochschulen inzwischen Software einsetzen, mit __(7)__ Hilfe Übereinstimmungen zwischen Texten automatisch erkannt werden. Fachleute weisen allerdings darauf hin, dass solche Programme längst nicht alle Formen des Plagiats erfassen __(8)__. Insbesondere das sinngemäße Übernehmen fremder Argumente bleibe häufig unentdeckt, __(9)__ ein Sprecher der Universität.",
       "Die Folgen eines nachgewiesenen Plagiats reichen __(10)__ der Bewertung mit „nicht bestanden\" bis zur Exmatrikulation. In besonders schweren Fällen kann sogar ein bereits verliehener akademischer Grad nachträglich __(11)__ werden.",
       "Um Missverständnissen __(12)__, bietet die Universitätsbibliothek regelmäßig Kurse zum korrekten Zitieren an. Die Kurse sind kostenlos und finden in jedem Semester statt. Dort lernen die Teilnehmer, wie direkte und indirekte Zitate __(13)__ Regeln entsprechend belegt werden. Zudem wird erklärt, wann eine Aussage als Allgemeinwissen gelten kann und __(14)__ keines Belegs bedarf. Hilfreich ist es außerdem, schon während der Recherche sorgfältig __(15)__ darüber zu führen, welche Quelle man wofür verwendet hat. Wer erst kurz vor der Abgabe beginnt, die Literaturangaben zusammenzustellen, __(16)__ leicht den Überblick.",
       "Die Universität betont, dass die meisten Plagiate nicht aus Betrugsabsicht entstehen, __(17)__ aus Unsicherheit oder Zeitnot. Gerade Studenten, __(18)__ Schulsystem andere Zitierregeln vorsah, sollten die Beratungsangebote daher frühzeitig nutzen. In den ersten Semestern __(19)__ es sich außerdem, Unklarheiten rechtzeitig mit den Betreuern der Arbeit zu besprechen. __(20)__ Unsicherheiten darüber, ob eine Passage korrekt belegt ist, sollte man lieber einmal zu viel als einmal zu wenig zitieren. Die Prüfungsordnung __(21)__ in diesem Punkt keinen Zweifel: Eine nachträgliche Korrektur ist __(22)__ Abgabe der Arbeit nicht mehr möglich."
      ]
     },
     "aufgaben": [
      {
       "frage": "Was passt in Lücke 1?",
       "luecke": 1,
       "opt": [
        "über",
        "an",
        "auf",
        "von"
       ],
       "loesung": 2,
       "fest": true,
       "erklaerung": "Feste Präposition: „beruhen auf + Dativ\"."
      },
      {
       "frage": "Was passt in Lücke 2?",
       "luecke": 2,
       "opt": [
        "angegeben",
        "anzugeben",
        "anzugebend",
        "angeben"
       ],
       "loesung": 1,
       "fest": true,
       "erklaerung": "„ohne … zu + Infinitiv\": „ohne die Quelle anzugeben\"."
      },
      {
       "frage": "Was passt in Lücke 3?",
       "luecke": 3,
       "opt": [
        "unabhängig",
        "abhängig",
        "ungeachtet",
        "trotz"
       ],
       "loesung": 0,
       "fest": true,
       "erklaerung": "„unabhängig davon, ob\": Es spielt keine Rolle, welche Quelle es ist."
      },
      {
       "frage": "Was passt in Lücke 4?",
       "luecke": 4,
       "opt": [
        "gilt",
        "wirkt",
        "hält",
        "stellt"
       ],
       "loesung": 0,
       "fest": true,
       "erklaerung": "Feste Verbindung: „als etwas gelten\"."
      },
      {
       "frage": "Was passt in Lücke 5?",
       "luecke": 5,
       "opt": [
        "gestiegt",
        "stieg",
        "steigend",
        "gestiegen"
       ],
       "loesung": 3,
       "fest": true,
       "erklaerung": "Perfekt mit „sein\": „ist gestiegen\" (unregelmäßiges Partizip)."
      },
      {
       "frage": "Was passt in Lücke 6?",
       "luecke": 6,
       "opt": [
        "unter anderem",
        "unter allem",
        "vor anderem",
        "mit anderem"
       ],
       "loesung": 0,
       "fest": true,
       "erklaerung": "Feste Wendung: „unter anderem\" = neben weiteren Gründen."
      },
      {
       "frage": "Was passt in Lücke 7?",
       "luecke": 7,
       "opt": [
        "deren",
        "denen",
        "der",
        "dessen"
       ],
       "loesung": 0,
       "fest": true,
       "erklaerung": "Genitiv-Relativpronomen zu „Software\" (feminin): „mit deren Hilfe\"."
      },
      {
       "frage": "Was passt in Lücke 8?",
       "luecke": 8,
       "opt": [
        "zu können",
        "können",
        "könnend",
        "gekonnt"
       ],
       "loesung": 1,
       "fest": true,
       "erklaerung": "Modalverb im Nebensatz am Ende: „erfassen können\"."
      },
      {
       "frage": "Was passt in Lücke 9?",
       "luecke": 9,
       "opt": [
        "da",
        "so",
        "wie",
        "als"
       ],
       "loesung": 1,
       "fest": true,
       "erklaerung": "Redewiedergabe mit Quellenangabe: „…, so ein Sprecher\"."
      },
      {
       "frage": "Was passt in Lücke 10?",
       "luecke": 10,
       "opt": [
        "seit",
        "von",
        "aus",
        "ab"
       ],
       "loesung": 1,
       "fest": true,
       "erklaerung": "Spannweite: „reichen von … bis …\"."
      },
      {
       "frage": "Was passt in Lücke 11?",
       "luecke": 11,
       "opt": [
        "entziehen",
        "entzogene",
        "entzogen",
        "entzieht"
       ],
       "loesung": 2,
       "fest": true,
       "erklaerung": "Passiv mit Modalverb: „kann entzogen werden\"."
      },
      {
       "frage": "Was passt in Lücke 12?",
       "luecke": 12,
       "opt": [
        "vorgebeugt",
        "vorbeugend",
        "vorzubeugen",
        "vorbeugen"
       ],
       "loesung": 2,
       "fest": true,
       "erklaerung": "Finalsatz „um … zu + Infinitiv\"; „zu\" steht bei trennbaren Verben in der Mitte."
      },
      {
       "frage": "Was passt in Lücke 13?",
       "luecke": 13,
       "opt": [
        "der",
        "die",
        "den",
        "dem"
       ],
       "loesung": 2,
       "fest": true,
       "erklaerung": "„entsprechend\" + Dativ, hier vorangestellt: „den Regeln entsprechend\"."
      },
      {
       "frage": "Was passt in Lücke 14?",
       "luecke": 14,
       "opt": [
        "obwohl",
        "daher",
        "dennoch",
        "trotzdem"
       ],
       "loesung": 1,
       "fest": true,
       "erklaerung": "Folge: Allgemeinwissen braucht deshalb keinen Beleg → „daher\"."
      },
      {
       "frage": "Was passt in Lücke 15?",
       "luecke": 15,
       "opt": [
        "Liste",
        "Heft",
        "Rechnung",
        "Buch"
       ],
       "loesung": 3,
       "fest": true,
       "erklaerung": "Feste Verbindung: „über etwas Buch führen\" (ohne Artikel)."
      },
      {
       "frage": "Was passt in Lücke 16?",
       "luecke": 16,
       "opt": [
        "verlässt",
        "verloren",
        "verlieren",
        "verliert"
       ],
       "loesung": 3,
       "fest": true,
       "erklaerung": "Feste Verbindung: „den Überblick verlieren\"; Hauptsatzverb in der 3. Person Singular."
      },
      {
       "frage": "Was passt in Lücke 17?",
       "luecke": 17,
       "opt": [
        "jedoch",
        "sowie",
        "sondern",
        "aber"
       ],
       "loesung": 2,
       "fest": true,
       "erklaerung": "Nach Verneinung („nicht aus Betrugsabsicht\") folgt die Korrektur mit „sondern\"."
      },
      {
       "frage": "Was passt in Lücke 18?",
       "luecke": 18,
       "opt": [
        "denen",
        "die",
        "dessen",
        "deren"
       ],
       "loesung": 3,
       "fest": true,
       "erklaerung": "Genitiv-Relativpronomen zu „Studenten\" (Plural): „deren Schulsystem\"."
      },
      {
       "frage": "Was passt in Lücke 19?",
       "luecke": 19,
       "opt": [
        "schlägt",
        "rät",
        "legt",
        "empfiehlt"
       ],
       "loesung": 3,
       "fest": true,
       "erklaerung": "Feste Wendung: „es empfiehlt sich, … zu tun\"."
      },
      {
       "frage": "Was passt in Lücke 20?",
       "luecke": 20,
       "opt": [
        "Bei",
        "Auf",
        "Mit",
        "Für"
       ],
       "loesung": 0,
       "fest": true,
       "erklaerung": "„bei\" + Nomen drückt eine Bedingung aus: = Wenn man unsicher ist."
      },
      {
       "frage": "Was passt in Lücke 21?",
       "luecke": 21,
       "opt": [
        "macht",
        "lässt",
        "stellt",
        "gibt"
       ],
       "loesung": 1,
       "fest": true,
       "erklaerung": "Feste Wendung: „keinen Zweifel lassen\"."
      },
      {
       "frage": "Was passt in Lücke 22?",
       "luecke": 22,
       "opt": [
        "während",
        "bis",
        "nach",
        "vor"
       ],
       "loesung": 2,
       "fest": true,
       "erklaerung": "Zeit nach einem Ereignis: „nach Abgabe der Arbeit\"."
      }
     ]
    },
    {
     "id": "c1c1sbs3",
     "text": {
      "sorte": "zeitung",
      "quelle": "Pressemitteilung des Instituts für Stadtklima, Ravensfeld",
      "titel": "Hitzeinseln in der Stadt",
      "zeilen": [
       "Im Sommer liegen die Temperaturen in Innenstädten oft mehrere Grad über __(1)__ des Umlands. Fachleute sprechen in diesem Zusammenhang __(2)__ städtischen Wärmeinseln. Ursache ist vor allem die dichte Bebauung: Asphalt und Beton speichern tagsüber Wärme, __(3)__ sie nachts wieder abgeben. __(4)__ ländlichen Regionen kühlt die Luft in den Städten deshalb auch nachts kaum ab.",
       "Eine vom Institut für Stadtklima in Ravensfeld __(5)__ Studie zeigt nun, wie stark die Unterschiede innerhalb einer einzigen Stadt ausfallen können. Die Wissenschaftler __(6)__ an über zweihundert Messpunkten einen gesamten Sommer lang Daten. Gemessen wurden neben der Lufttemperatur auch Luftfeuchtigkeit und Windgeschwindigkeit. Dabei stellte sich heraus, dass dicht bebaute Viertel nachts bis zu sieben Grad wärmer waren __(7)__ Stadtteile mit Parks und Bäumen. Besonders betroffen sind ältere Menschen, __(8)__ Körper Hitze schlechter regulieren kann.",
       "__(9)__ der gesundheitlichen Risiken fordern die Autoren der Studie, Grünflächen gezielt auszubauen. Schon einzelne Bäume könnten die Temperatur in ihrer Umgebung spürbar __(10)__. Ein großer Baum verdunstet an heißen Tagen mehrere Hundert Liter Wasser und spendet zugleich Schatten. Auch begrünte Dächer und Fassaden tragen __(11)__ bei, die Aufheizung von Gebäuden zu verringern. Der Umbau bestehender Viertel ist allerdings mit erheblichen Kosten __(12)__. Kritiker wenden ein, dass Städte ohnehin unter Wohnungsmangel litten und Flächen daher kaum __(13)__ Verfügung stünden.",
       "Die Studienautoren halten __(14)__, dass sich Begrünung und Wohnungsbau keineswegs ausschließen. Gerade Dachflächen könnten dabei eine wichtige Rolle übernehmen. __(15)__ Neubauprojekte von Anfang an mit Grünflächen geplant würden, entstünden kaum Mehrkosten. Entscheidend sei, das Thema frühzeitig in die Stadtplanung __(16)__. Zudem empfehlen sie, Hitzeschutzpläne zu erstellen, __(17)__ etwa öffentliche Gebäude als kühle Rückzugsorte ausgewiesen werden.",
       "Die Reaktionen aus der Politik fallen bislang unterschiedlich aus. Einige Städte haben __(18)__ Empfehlungen bereits aufgegriffen. In Ravensfeld etwa __(19)__ seit dem vergangenen Jahr zusätzliche Trinkbrunnen in der Innenstadt aufgestellt. Die Stadt plant außerdem, versiegelte Schulhöfe schrittweise zu entsiegeln. Auf diese __(20)__ soll Regenwasser versickern und die Umgebung kühlen können. Ob diese Maßnahmen ausreichen, um den steigenden Temperaturen wirksam __(21)__, bleibt abzuwarten. Fest steht __(22)__, dass das Problem in den kommenden Jahrzehnten an Bedeutung gewinnen wird."
      ]
     },
     "aufgaben": [
      {
       "frage": "Was passt in Lücke 1?",
       "luecke": 1,
       "opt": [
        "deren",
        "denen",
        "die",
        "den"
       ],
       "loesung": 1,
       "fest": true,
       "erklaerung": "Demonstrativpronomen im Dativ Plural statt Wiederholung: „über denen (= den Temperaturen) des Umlands\"."
      },
      {
       "frage": "Was passt in Lücke 2?",
       "luecke": 2,
       "opt": [
        "über",
        "von",
        "zu",
        "um"
       ],
       "loesung": 1,
       "fest": true,
       "erklaerung": "„sprechen von\" = etwas so bezeichnen."
      },
      {
       "frage": "Was passt in Lücke 3?",
       "luecke": 3,
       "opt": [
        "die",
        "deren",
        "welcher",
        "was"
       ],
       "loesung": 0,
       "fest": true,
       "erklaerung": "Relativpronomen im Akkusativ feminin: „Wärme, die sie abgeben\"."
      },
      {
       "frage": "Was passt in Lücke 4?",
       "luecke": 4,
       "opt": [
        "Anstelle",
        "Im Gegensatz zu",
        "Trotz",
        "Statt"
       ],
       "loesung": 1,
       "fest": true,
       "erklaerung": "Vergleich mit Gegensatz + Dativ: „im Gegensatz zu ländlichen Regionen\"."
      },
      {
       "frage": "Was passt in Lücke 5?",
       "luecke": 5,
       "opt": [
        "durchgeführt",
        "durchführende",
        "durchgeführte",
        "durchzuführende"
       ],
       "loesung": 2,
       "fest": true,
       "erklaerung": "Partizipialattribut mit Partizip II (passiv, abgeschlossen): „eine durchgeführte Studie\"."
      },
      {
       "frage": "Was passt in Lücke 6?",
       "luecke": 6,
       "opt": [
        "erhoben",
        "behoben",
        "hoben",
        "gehoben"
       ],
       "loesung": 0,
       "fest": true,
       "erklaerung": "„Daten erheben\", Präteritum Plural: „erhoben\"."
      },
      {
       "frage": "Was passt in Lücke 7?",
       "luecke": 7,
       "opt": [
        "als",
        "so",
        "wie",
        "denn"
       ],
       "loesung": 0,
       "fest": true,
       "erklaerung": "Nach Komparativ („wärmer\") steht „als\"."
      },
      {
       "frage": "Was passt in Lücke 8?",
       "luecke": 8,
       "opt": [
        "dessen",
        "denen",
        "ihrer",
        "deren"
       ],
       "loesung": 3,
       "fest": true,
       "erklaerung": "Genitiv-Relativpronomen zu „Menschen\" (Plural): „deren Körper\"."
      },
      {
       "frage": "Was passt in Lücke 9?",
       "luecke": 9,
       "opt": [
        "Mittels",
        "Anhand",
        "Angesichts",
        "Anstatt"
       ],
       "loesung": 2,
       "fest": true,
       "erklaerung": "„angesichts\" + Genitiv = mit Blick auf; nennt den Anlass der Forderung."
      },
      {
       "frage": "Was passt in Lücke 10?",
       "luecke": 10,
       "opt": [
        "sinken",
        "versenken",
        "gesenkt",
        "senken"
       ],
       "loesung": 3,
       "fest": true,
       "erklaerung": "Transitiv „etwas senken\"; „sinken\" hat kein Objekt."
      },
      {
       "frage": "Was passt in Lücke 11?",
       "luecke": 11,
       "opt": [
        "dafür",
        "damit",
        "darum",
        "dazu"
       ],
       "loesung": 3,
       "fest": true,
       "erklaerung": "Feste Präposition: „beitragen zu\" → „dazu beitragen, … zu\"."
      },
      {
       "frage": "Was passt in Lücke 12?",
       "luecke": 12,
       "opt": [
        "verbindet",
        "bindend",
        "gebunden",
        "verbunden"
       ],
       "loesung": 3,
       "fest": true,
       "erklaerung": "Feste Wendung: „mit Kosten verbunden sein\"."
      },
      {
       "frage": "Was passt in Lücke 13?",
       "luecke": 13,
       "opt": [
        "in",
        "zu",
        "unter",
        "zur"
       ],
       "loesung": 3,
       "fest": true,
       "erklaerung": "Funktionsverbgefüge: „zur Verfügung stehen\"."
      },
      {
       "frage": "Was passt in Lücke 14?",
       "luecke": 14,
       "opt": [
        "darauf",
        "dagegen",
        "davon",
        "dabei"
       ],
       "loesung": 1,
       "fest": true,
       "erklaerung": "„dagegenhalten, dass\" = ein Gegenargument vorbringen."
      },
      {
       "frage": "Was passt in Lücke 15?",
       "luecke": 15,
       "opt": [
        "Indem",
        "Sofern",
        "Obwohl",
        "Damit"
       ],
       "loesung": 1,
       "fest": true,
       "erklaerung": "Bedingung: „sofern\" = vorausgesetzt, dass."
      },
      {
       "frage": "Was passt in Lücke 16?",
       "luecke": 16,
       "opt": [
        "einzubeziehen",
        "einbezogen",
        "einbeziehen",
        "einbeziehend"
       ],
       "loesung": 0,
       "fest": true,
       "erklaerung": "„Entscheidend sei, … zu + Infinitiv\"; trennbar: „einzubeziehen\"."
      },
      {
       "frage": "Was passt in Lücke 17?",
       "luecke": 17,
       "opt": [
        "in dem",
        "in deren",
        "in denen",
        "in die"
       ],
       "loesung": 2,
       "fest": true,
       "erklaerung": "Ort im Dativ Plural (Hitzeschutzpläne): „in denen\"."
      },
      {
       "frage": "Was passt in Lücke 18?",
       "luecke": 18,
       "opt": [
        "dieser",
        "dieses",
        "diese",
        "diesen"
       ],
       "loesung": 2,
       "fest": true,
       "erklaerung": "Akkusativ Plural: „diese Empfehlungen aufgreifen\"."
      },
      {
       "frage": "Was passt in Lücke 19?",
       "luecke": 19,
       "opt": [
        "werden",
        "würden",
        "worden",
        "wird"
       ],
       "loesung": 0,
       "fest": true,
       "erklaerung": "Vorgangspassiv Präsens, Plural („Trinkbrunnen\"): „werden aufgestellt\"."
      },
      {
       "frage": "Was passt in Lücke 20?",
       "luecke": 20,
       "opt": [
        "Grund",
        "Fall",
        "Hinsicht",
        "Weise"
       ],
       "loesung": 3,
       "fest": true,
       "erklaerung": "Feste Wendung: „auf diese Weise\" = so."
      },
      {
       "frage": "Was passt in Lücke 21?",
       "luecke": 21,
       "opt": [
        "entgegenwirkend",
        "entgegengewirkt",
        "entgegenzuwirken",
        "entgegenwirken"
       ],
       "loesung": 2,
       "fest": true,
       "erklaerung": "„um … zu + Infinitiv\"; trennbares Verb: „entgegenzuwirken\"."
      },
      {
       "frage": "Was passt in Lücke 22?",
       "luecke": 22,
       "opt": [
        "denn",
        "sondern",
        "jedoch",
        "weder"
       ],
       "loesung": 2,
       "fest": true,
       "erklaerung": "Einschränkender Gegensatz im Hauptsatz an dritter Stelle: „Fest steht jedoch\"."
      }
     ]
    }
   ]
  }
 ],
 "laeufe": [
  {
   "id": "tc1ll1",
   "titel": "Prüfungslauf 1",
   "minuten": 90,
   "teile": [
    {
     "nr": 1,
     "art": "textwahl",
     "text": {
      "sorte": "zeitung",
      "quelle": "Zeitschrift für angewandte Verhaltensforschung",
      "titel": "Morgen fange ich an",
      "zeilen": [
       "Fast jeder kennt das: Die Hausarbeit muss in zwei Wochen abgegeben werden, doch statt mit der Literaturrecherche zu beginnen, räumt man den Schreibtisch auf, beantwortet E-Mails oder putzt sogar das Bad, das man seit Wochen kaum beachtet hat. Dieses Aufschieben wird im Alltag gern als Faulheit oder Willensschwäche abgetan. __(1)__ Vielmehr handelt es sich nach heutigem Kenntnisstand um ein Problem der Gefühlsregulation. Psychologen sprechen von Prokrastination, und Schätzungen zufolge betrifft sie in ausgeprägter Form etwa jeden fünften Studenten.",
       "Das zeigt eine Studie des Instituts für Lernpsychologie in Wehrstedt, an der über tausend Studenten teilnahmen. __(2)__ Nicht die Schwierigkeit der Aufgabe war dabei ausschlaggebend, sondern die Gefühle, die sie auslöste: Langeweile, Unsicherheit oder die Angst, den eigenen Ansprüchen nicht zu genügen. Je stärker diese Gefühle ausgeprägt waren, desto länger wurde der Beginn der Arbeit hinausgezögert. Wer dagegen mit der Aufgabe positive Gefühle wie Neugier verband, begann in der Regel deutlich früher.",
       "Die Leiterin der Studie, Hanna Kessler-Brandt, beschreibt den Mechanismus so: Wer eine unangenehme Aufgabe aufschiebt, fühlt sich kurzfristig besser. __(3)__ Das Gehirn lernt auf diese Weise, dass Ausweichen belohnt wird, und greift beim nächsten Mal umso schneller auf dieselbe Strategie zurück. Langfristig wächst dagegen der Druck, und mit ihm die negativen Gefühle, die man eigentlich vermeiden wollte. Kessler-Brandt spricht von einem Teufelskreis, aus dem viele Betroffene ohne Hilfe kaum herausfinden.",
       "Besonders betroffen sind den Daten zufolge Menschen mit hohen Ansprüchen an sich selbst. __(4)__ Wer jede Arbeit als Prüfstein der eigenen Fähigkeiten betrachtet, erlebt bereits den ersten Satz als Bedrohung, weil er das mögliche Scheitern sichtbar macht. Aufschieben schützt in diesem Fall vorübergehend das Selbstbild: Solange man nicht angefangen hat, kann man auch nicht versagen.",
       "Was hilft also? Kessler-Brandt rät von bloßen Appellen an die Disziplin ab. Erfolgversprechender sei es, die Einstiegshürde so niedrig wie möglich zu legen, etwa indem man sich vornimmt, nur zehn Minuten an der Aufgabe zu arbeiten. __(5)__ Hilfreich sei außerdem ein freundlicherer Umgang mit sich selbst: Studenten, die sich nach einem verlorenen Tag nicht verurteilten, schoben in der Folgewoche weniger auf als jene, die sich heftige Vorwürfe machten. Selbstkritik verstärke dagegen genau die Gefühle, die das Aufschieben überhaupt erst auslösten.",
       "Auch die Hochschulen sieht die Psychologin in der Pflicht. __(6)__ Wer solche Arbeiten dagegen in kleinere Etappen mit eigenen Zwischenterminen gliedere, nehme den Studenten einen Teil der Last ab, ohne ihnen die Verantwortung zu entziehen. An einigen Fakultäten werden entsprechende Modelle bereits erprobt. Erste Auswertungen zeigen, dass dort deutlich weniger Arbeiten verspätet oder gar nicht eingereicht werden."
      ]
     },
     "aufgaben": [
      {
       "frage": "Welcher Satz gehört in Lücke 1?",
       "luecke": 1,
       "opt": [
        "Große Hausarbeiten mit einer einzigen Frist am Semesterende begünstigten das Aufschieben geradezu.",
        "Diese Erleichterung wirkt wie eine kleine Belohnung.",
        "Wer häufig aufschiebt, erzielt der Studie zufolge trotzdem genauso gute Noten wie andere.",
        "Mit mangelnder Arbeitsbereitschaft hat es aus Sicht der Forschung jedoch wenig zu tun.",
        "Ist dieser Anfang erst einmal gemacht, arbeiten die meisten freiwillig weiter.",
        "Sie wurden über ein Semester hinweg mehrmals täglich per App gefragt, woran sie gerade arbeiteten und wie sie sich dabei fühlten.",
        "Die Schwierigkeit der Aufgabe erwies sich dabei als wichtigster Grund für das Aufschieben.",
        "Das mag zunächst paradox klingen, da man gerade ihnen besonderen Fleiß zutrauen würde."
       ],
       "loesung": 3,
       "fest": true,
       "erklaerung": "„es“ meint das Aufschieben; „Vielmehr“ im Folgesatz setzt eine Verneinung voraus („wenig zu tun“)."
      },
      {
       "frage": "Welcher Satz gehört in Lücke 2?",
       "luecke": 2,
       "opt": [
        "Große Hausarbeiten mit einer einzigen Frist am Semesterende begünstigten das Aufschieben geradezu.",
        "Diese Erleichterung wirkt wie eine kleine Belohnung.",
        "Wer häufig aufschiebt, erzielt der Studie zufolge trotzdem genauso gute Noten wie andere.",
        "Mit mangelnder Arbeitsbereitschaft hat es aus Sicht der Forschung jedoch wenig zu tun.",
        "Ist dieser Anfang erst einmal gemacht, arbeiten die meisten freiwillig weiter.",
        "Sie wurden über ein Semester hinweg mehrmals täglich per App gefragt, woran sie gerade arbeiteten und wie sie sich dabei fühlten.",
        "Die Schwierigkeit der Aufgabe erwies sich dabei als wichtigster Grund für das Aufschieben.",
        "Das mag zunächst paradox klingen, da man gerade ihnen besonderen Fleiß zutrauen würde."
       ],
       "loesung": 5,
       "fest": true,
       "erklaerung": "„Sie“ sind die tausend Studenten; der Folgesatz wertet die Angaben zu Gefühlen aus."
      },
      {
       "frage": "Welcher Satz gehört in Lücke 3?",
       "luecke": 3,
       "opt": [
        "Große Hausarbeiten mit einer einzigen Frist am Semesterende begünstigten das Aufschieben geradezu.",
        "Diese Erleichterung wirkt wie eine kleine Belohnung.",
        "Wer häufig aufschiebt, erzielt der Studie zufolge trotzdem genauso gute Noten wie andere.",
        "Mit mangelnder Arbeitsbereitschaft hat es aus Sicht der Forschung jedoch wenig zu tun.",
        "Ist dieser Anfang erst einmal gemacht, arbeiten die meisten freiwillig weiter.",
        "Sie wurden über ein Semester hinweg mehrmals täglich per App gefragt, woran sie gerade arbeiteten und wie sie sich dabei fühlten.",
        "Die Schwierigkeit der Aufgabe erwies sich dabei als wichtigster Grund für das Aufschieben.",
        "Das mag zunächst paradox klingen, da man gerade ihnen besonderen Fleiß zutrauen würde."
       ],
       "loesung": 1,
       "fest": true,
       "erklaerung": "„Diese Erleichterung“ greift „fühlt sich kurzfristig besser“ auf, „auf diese Weise“ knüpft daran an."
      },
      {
       "frage": "Welcher Satz gehört in Lücke 4?",
       "luecke": 4,
       "opt": [
        "Große Hausarbeiten mit einer einzigen Frist am Semesterende begünstigten das Aufschieben geradezu.",
        "Diese Erleichterung wirkt wie eine kleine Belohnung.",
        "Wer häufig aufschiebt, erzielt der Studie zufolge trotzdem genauso gute Noten wie andere.",
        "Mit mangelnder Arbeitsbereitschaft hat es aus Sicht der Forschung jedoch wenig zu tun.",
        "Ist dieser Anfang erst einmal gemacht, arbeiten die meisten freiwillig weiter.",
        "Sie wurden über ein Semester hinweg mehrmals täglich per App gefragt, woran sie gerade arbeiteten und wie sie sich dabei fühlten.",
        "Die Schwierigkeit der Aufgabe erwies sich dabei als wichtigster Grund für das Aufschieben.",
        "Das mag zunächst paradox klingen, da man gerade ihnen besonderen Fleiß zutrauen würde."
       ],
       "loesung": 7,
       "fest": true,
       "erklaerung": "„ihnen“ meint die Menschen mit hohen Ansprüchen; „Das“ verweist auf die überraschende Aussage davor."
      },
      {
       "frage": "Welcher Satz gehört in Lücke 5?",
       "luecke": 5,
       "opt": [
        "Große Hausarbeiten mit einer einzigen Frist am Semesterende begünstigten das Aufschieben geradezu.",
        "Diese Erleichterung wirkt wie eine kleine Belohnung.",
        "Wer häufig aufschiebt, erzielt der Studie zufolge trotzdem genauso gute Noten wie andere.",
        "Mit mangelnder Arbeitsbereitschaft hat es aus Sicht der Forschung jedoch wenig zu tun.",
        "Ist dieser Anfang erst einmal gemacht, arbeiten die meisten freiwillig weiter.",
        "Sie wurden über ein Semester hinweg mehrmals täglich per App gefragt, woran sie gerade arbeiteten und wie sie sich dabei fühlten.",
        "Die Schwierigkeit der Aufgabe erwies sich dabei als wichtigster Grund für das Aufschieben.",
        "Das mag zunächst paradox klingen, da man gerade ihnen besonderen Fleiß zutrauen würde."
       ],
       "loesung": 4,
       "fest": true,
       "erklaerung": "„dieser Anfang“ bezieht sich auf die zehn Minuten; „außerdem“ reiht den nächsten Tipp an."
      },
      {
       "frage": "Welcher Satz gehört in Lücke 6?",
       "luecke": 6,
       "opt": [
        "Große Hausarbeiten mit einer einzigen Frist am Semesterende begünstigten das Aufschieben geradezu.",
        "Diese Erleichterung wirkt wie eine kleine Belohnung.",
        "Wer häufig aufschiebt, erzielt der Studie zufolge trotzdem genauso gute Noten wie andere.",
        "Mit mangelnder Arbeitsbereitschaft hat es aus Sicht der Forschung jedoch wenig zu tun.",
        "Ist dieser Anfang erst einmal gemacht, arbeiten die meisten freiwillig weiter.",
        "Sie wurden über ein Semester hinweg mehrmals täglich per App gefragt, woran sie gerade arbeiteten und wie sie sich dabei fühlten.",
        "Die Schwierigkeit der Aufgabe erwies sich dabei als wichtigster Grund für das Aufschieben.",
        "Das mag zunächst paradox klingen, da man gerade ihnen besonderen Fleiß zutrauen würde."
       ],
       "loesung": 0,
       "fest": true,
       "erklaerung": "„solche Arbeiten“ und „dagegen“ im Folgesatz setzen die großen Hausarbeiten mit einer Frist voraus."
      }
     ]
    },
    {
     "nr": 2,
     "art": "textwahl",
     "text": {
      "sorte": "zeitung",
      "quelle": "Umwelt aktuell – Magazin für Ökologie",
      "titel": "Der vergessene Klimaschützer unter unseren Füßen",
      "zeilen": [
       "A — Wenn vom Klimaschutz die Rede ist, denken die meisten an Wälder, Moore oder die Ozeane. Der Boden unter unseren Füßen kommt in dieser Aufzählung selten vor. Dabei speichern die Böden der Erde nach aktuellen Schätzungen mehr Kohlenstoff als die gesamte Vegetation und die Atmosphäre zusammen.",
       "Der größte Teil davon steckt im Humus, also in abgestorbenen Pflanzenresten, die von Mikroorganismen über lange Zeiträume zu einer dunklen, fruchtbaren Schicht umgebaut wurden. Geht dieser Humus verloren, gelangt der gebundene Kohlenstoff als Kohlendioxid in die Luft. Wie viel Kohlenstoff ein Boden speichern kann, hängt von Klima, Gestein und Nutzung ab. Unter Grünland und Wäldern ist der Humusvorrat in der Regel deutlich höher als unter Äckern, und selbst benachbarte Flächen können sich erheblich unterscheiden. Weltweit enthalten allein die oberen Bodenschichten nach diesen Schätzungen ein Vielfaches dessen, was die Menschheit jährlich an Kohlendioxid ausstößt.",
       "B — Genau das geschieht auf vielen Ackerflächen. Intensive Bodenbearbeitung, enge Fruchtfolgen und der Verzicht auf Pflanzendecken im Winter haben dazu geführt, dass der Humusgehalt landwirtschaftlich genutzter Böden in Mitteleuropa in den vergangenen Jahrzehnten deutlich gesunken ist. Wie groß die Verluste genau sind, ist umstritten, weil langfristige Messreihen selten sind.",
       "Die Agrarwissenschaftlerin Sabine Vollrath von der Hochschule Eldingen schätzt, dass manche Äcker seit der Mitte des zwanzigsten Jahrhunderts ein Viertel ihres Humus eingebüßt haben. Mit dem Humus verlieren die Böden zugleich ihre Fähigkeit, Wasser zu speichern – eine Eigenschaft, die in trockenen Sommern immer wichtiger wird. Besonders stark betroffen sind nach ihren Angaben trockengelegte Moorböden, die bei Kontakt mit Luft große Mengen Kohlendioxid freisetzen. Hinzu kommt der Verlust durch Bebauung: Jeden Tag werden zahlreiche Hektar Boden für Straßen, Gewerbegebiete und Wohnsiedlungen versiegelt. Diese Flächen fallen als Speicher praktisch vollständig aus.",
       "C — Es gibt allerdings Methoden, den Trend umzukehren. Zwischenfrüchte, die nach der Ernte ausgesät werden, halten den Boden bedeckt und liefern zusätzliche organische Masse. Auch der Verzicht auf das Pflügen oder das Einbringen von Kompost kann den Humusgehalt erhöhen. Auf Versuchsflächen in Eldingen stieg dieser innerhalb von acht Jahren um rund zehn Prozent.",
       "Vollrath betont jedoch, dass die Methoden nicht überall gleich gut funktionieren. Auf leichten Sandböden etwa wird organisches Material so schnell abgebaut, dass sich kaum dauerhafte Vorräte bilden. Auf schweren Lehmböden seien die Erfolge dagegen deutlich stabiler. Kostenlos sind die Maßnahmen allerdings nicht: Saatgut für Zwischenfrüchte muss gekauft werden, und wer auf den Pflug verzichtet, hat häufig mit mehr Unkraut zu kämpfen. Gerade kleinere Betriebe scheuen deshalb die Umstellung, solange ihnen niemand die ersten, unsicheren Jahre finanziell absichert.",
       "D — Inzwischen hat auch die Wirtschaft das Thema entdeckt. Mehrere Unternehmen bieten Landwirten Geld dafür, dass sie Humus aufbauen, und verkaufen die so gebundene Menge an Kohlenstoff als Zertifikate an Firmen, die ihre Emissionen ausgleichen wollen.",
       "Fachleute sehen das skeptisch. Zum einen lässt sich der Humusgehalt nur mit großem Aufwand zuverlässig messen. Zum anderen ist der Speicher nicht von Dauer: Wechselt ein Hof später zur alten Bewirtschaftung zurück, kann der aufgebaute Humus innerhalb weniger Jahre wieder verloren gehen. Ein Unternehmen, das sich auf diese Weise klimaneutral rechnet, stehe dann mit leeren Händen da, warnt Vollrath. Hinzu kommt, dass häufig für einen Humusaufbau bezahlt wird, der auch ohne Zahlung stattgefunden hätte, etwa weil ein Betrieb ohnehin auf Zwischenfrüchte umgestellt hatte. Fachleute sprechen in solchen Fällen von Mitnahmeeffekten. Mehrere Verbraucherverbände haben die Anbieter deshalb aufgefordert, ihre Berechnungen offenzulegen.",
       "E — Trotz dieser Einwände plädieren die meisten Fachleute dafür, den Humusaufbau stärker zu fördern – allerdings aus anderen Gründen als dem Handel mit Zertifikaten. Humusreiche Böden sind fruchtbarer, widerstandsfähiger gegen Erosion und kommen besser mit Dürre zurecht.",
       "Selbst wenn ihr Beitrag zum Klimaschutz geringer ausfallen sollte als erhofft, lohne sich der Aufwand also schon für die Landwirtschaft selbst. Vollrath fordert deshalb, entsprechende Maßnahmen in der staatlichen Agrarförderung zu belohnen, statt sie allein dem freien Markt zu überlassen. Zugleich warnt sie davor, den Boden als bequeme Lösung für das Klimaproblem zu betrachten. Der Humusaufbau könne bestenfalls einen kleinen Teil der Emissionen ausgleichen. Den Ausstoß von Treibhausgasen zu senken, bleibe deshalb unverzichtbar. Ein erster Schritt sei es, Landwirte besser zu beraten und Versuchsergebnisse aus der Forschung schneller in die Praxis zu bringen."
      ]
     },
     "aufgaben": [
      {
       "frage": "In welchem Abschnitt steht das? „Wie stark der Humus in den letzten Jahrzehnten abgenommen hat, lässt sich mangels Daten nicht genau sagen.\"",
       "opt": [
        "Abschnitt A",
        "Abschnitt B",
        "Abschnitt C",
        "Abschnitt D",
        "Abschnitt E"
       ],
       "loesung": 1,
       "fest": true,
       "stelle": "Wie groß die Verluste genau sind, ist umstritten, weil langfristige Messreihen selten sind",
       "erklaerung": "Es fehlen langfristige Messreihen, deshalb ist die Höhe der Verluste umstritten."
      },
      {
       "frage": "In welchem Abschnitt steht das? „Die Bodenart beeinflusst, ob Maßnahmen zum Humusaufbau Erfolg haben.\"",
       "opt": [
        "Abschnitt A",
        "Abschnitt B",
        "Abschnitt C",
        "Abschnitt D",
        "Abschnitt E"
       ],
       "loesung": 2,
       "fest": true,
       "stelle": "Auf leichten Sandböden etwa wird organisches Material so schnell abgebaut",
       "erklaerung": "Auf Sandböden bilden sich kaum dauerhafte Vorräte."
      },
      {
       "frage": "In welchem Abschnitt steht das? „Ein einmal erreichter Humusgewinn kann durch veränderte Bewirtschaftung rasch wieder verschwinden.\"",
       "opt": [
        "Abschnitt A",
        "Abschnitt B",
        "Abschnitt C",
        "Abschnitt D",
        "Abschnitt E"
       ],
       "loesung": 3,
       "fest": true,
       "stelle": "kann der aufgebaute Humus innerhalb weniger Jahre wieder verloren gehen",
       "erklaerung": "Kehrt ein Hof zur alten Methode zurück, ist der Speicher schnell wieder weg."
      },
      {
       "frage": "In welchem Abschnitt steht das? „Böden binden mehr Kohlenstoff als Pflanzen und Luft gemeinsam.\"",
       "opt": [
        "Abschnitt A",
        "Abschnitt B",
        "Abschnitt C",
        "Abschnitt D",
        "Abschnitt E"
       ],
       "loesung": 0,
       "fest": true,
       "stelle": "mehr Kohlenstoff als die gesamte Vegetation und die Atmosphäre zusammen",
       "erklaerung": "Vegetation = Pflanzen, Atmosphäre = Luft."
      },
      {
       "frage": "In welchem Abschnitt steht das? „Mehr Humus bringt Landwirten auch unabhängig vom Klimaschutz Vorteile.\"",
       "opt": [
        "Abschnitt A",
        "Abschnitt B",
        "Abschnitt C",
        "Abschnitt D",
        "Abschnitt E"
       ],
       "loesung": 4,
       "fest": true,
       "stelle": "lohne sich der Aufwand also schon für die Landwirtschaft selbst",
       "erklaerung": "Fruchtbarkeit, Erosionsschutz und Dürrefestigkeit nützen den Höfen direkt."
      },
      {
       "frage": "In welchem Abschnitt steht das? „Humusarme Böden halten Feuchtigkeit schlechter.\"",
       "opt": [
        "Abschnitt A",
        "Abschnitt B",
        "Abschnitt C",
        "Abschnitt D",
        "Abschnitt E"
       ],
       "loesung": 1,
       "fest": true,
       "stelle": "verlieren die Böden zugleich ihre Fähigkeit, Wasser zu speichern",
       "erklaerung": "Mit dem Humus geht die Wasserspeicherfähigkeit verloren. E nennt Dürre nur als Vorteil humusreicher Böden."
      }
     ]
    },
    {
     "nr": 3,
     "art": "textwahl",
     "text": {
      "sorte": "zeitung",
      "quelle": "nach einem Beitrag in der Zeitschrift „Forum Wissenschaft\"",
      "titel": "Sachtext",
      "zeilen": [
       "Wer vor einer Prüfung die Nacht durchlernt, glaubt häufig, die gewonnene Zeit in zusätzliches Wissen umzumünzen. Die Schlafforschung der vergangenen zwei Jahrzehnte legt jedoch nahe, dass diese Rechnung nicht aufgeht. Schlaf ist keineswegs ein Zustand, in dem das Gehirn lediglich ruht; vielmehr werden in der Nacht Inhalte, die tagsüber aufgenommen wurden, neu geordnet, gefestigt und mit bereits vorhandenem Wissen verknüpft. Fachleute sprechen in diesem Zusammenhang von Gedächtniskonsolidierung. Ohne sie, so die inzwischen weitgehend geteilte Auffassung, bleiben neu erworbene Kenntnisse instabil und gehen schneller verloren, als den meisten Lernenden bewusst ist.",
       "Den Ausgangspunkt dieser Überlegungen bildet ein Modell, das zwischen zwei Speichersystemen unterscheidet. Der Hippocampus, eine kleine Struktur tief im Schläfenlappen, nimmt neue Informationen rasch auf, verfügt aber nur über eine begrenzte Kapazität. Die Großhirnrinde hingegen kann Wissen dauerhaft speichern, lernt jedoch langsam. Nach diesem Modell werden Erinnerungen zunächst im Hippocampus abgelegt und im Laufe der Zeit schrittweise in die Großhirnrinde übertragen. Entscheidend ist dabei, dass dieser Transfer vor allem dann stattfindet, wenn keine neuen Reize von außen verarbeitet werden müssen, also im Schlaf.",
       "Dass Schlaf und Gedächtnis zusammenhängen, wurde bereits vor rund hundert Jahren vermutet. Damals fiel in einfachen Versuchen auf, dass Menschen, die nach dem Lernen schliefen, sich später an mehr sinnlose Silben erinnerten als solche, die wach geblieben waren. Man erklärte dies zunächst damit, dass im Schlaf schlicht keine neuen Eindrücke hinzukämen, die das Gelernte überlagern könnten. Der Schlaf galt also als eine Art Schutzraum, nicht als aktiver Vorgang. Erst mit modernen Messverfahren wurde deutlich, dass sich das Gehirn in der Nacht sehr wohl intensiv mit dem Gelernten beschäftigt.",
       "Besonders bedeutsam scheint der sogenannte Tiefschlaf zu sein, der vor allem in der ersten Nachthälfte auftritt. In dieser Phase zeigen Messungen der Hirnströme langsame, große Wellen, die mit kurzen, schnellen Aktivitätsmustern, den Schlafspindeln, zusammenfallen. Man geht davon aus, dass genau in diesen Momenten Gedächtnisinhalte aus dem Hippocampus „abgespielt\" und an die Großhirnrinde weitergegeben werden. Tierversuche hatten bereits früh darauf hingewiesen: Bei Ratten, die tagsüber ein Labyrinth erkundet hatten, wiederholten sich im Schlaf dieselben Aktivierungsmuster von Nervenzellen, nur in deutlich höherem Tempo.",
       "Am Institut für Kognitionsforschung in Wernau hat eine Arbeitsgruppe um die Psychologin Henrike Albers untersucht, ob sich diese Befunde auf den Lernalltag von Studenten übertragen lassen. Einhundertzwanzig Versuchspersonen lernten am Abend Wortpaare in einer ihnen unbekannten Sprache. Die eine Hälfte schlief anschließend im Labor, die andere blieb unter Aufsicht wach und durfte lesen oder sich unterhalten. Am nächsten Morgen und noch einmal nach einer Woche wurde abgefragt, wie viele Wortpaare noch erinnert wurden. Die Gruppe, die geschlafen hatte, schnitt bei beiden Tests deutlich besser ab. Bemerkenswert war vor allem, dass der Abstand nach einer Woche nicht kleiner geworden war, obwohl die wach gebliebenen Personen in den folgenden Nächten normal geschlafen hatten.",
       "Aus diesem Ergebnis folgt, so Albers, dass sich verpasster Schlaf nicht ohne Weiteres nachholen lasse. Die Nacht unmittelbar nach dem Lernen habe offenbar eine besondere Funktion, die spätere Nächte nicht vollständig übernehmen könnten. Allerdings räumt die Forscherin ein, dass ihre Studie mit Wortpaaren gearbeitet habe, also mit einer vergleichsweise einfachen Form des Lernens. Ob dieselben Zusammenhänge auch für das Verstehen komplexer Theorien gelten, wie es an der Hochschule gefordert wird, sei noch nicht ausreichend geklärt.",
       "Neben dem Tiefschlaf rückt zunehmend auch der REM-Schlaf in den Blick, jene Phase, in der sich die Augen unter den geschlossenen Lidern rasch bewegen und besonders lebhaft geträumt wird. Er tritt gehäuft in der zweiten Nachthälfte auf. Einige Untersuchungen deuten darauf hin, dass er weniger für das Behalten von Fakten als für das Erlernen von Bewegungsabläufen und für emotionale Erinnerungen von Bedeutung ist. Wer also sehr früh aufsteht und die letzten Stunden der Nacht verkürzt, büßt womöglich gerade diesen Anteil ein. Die Datenlage ist hier allerdings uneinheitlicher als beim Tiefschlaf.",
       "Ein weiterer Befund betrifft die Frage, welche Inhalte im Schlaf bevorzugt gefestigt werden. In einer Studie am Universitätsklinikum Lindenfeld wurde der Hälfte der Versuchspersonen vor dem Schlafengehen mitgeteilt, dass sie am nächsten Tag zu dem Gelernten geprüft würden; die übrigen erfuhren dies nicht. Nur in der ersten Gruppe zeigte sich ein deutlicher Vorteil durch den Schlaf. Das Gehirn, so die Deutung der Autoren, wähle offenbar aus, was für die Zukunft relevant sei. Für Lernende könnte das bedeuten, dass es hilft, sich vor dem Einschlafen bewusst zu machen, wozu man das Gelernte brauchen wird.",
       "Kritische Stimmen warnen indes davor, die Ergebnisse vorschnell in Ratschläge zu übersetzen. Der Schlafmediziner Tobias Reinhardt gibt zu bedenken, dass viele Laborstudien mit kleinen Stichproben junger, gesunder Menschen arbeiten. Wie sich Schlaf und Gedächtnis bei älteren Personen oder bei Menschen mit Schlafstörungen zueinander verhalten, sei weit weniger erforscht. Zudem schlafe man im Labor, verkabelt und in fremder Umgebung, häufig schlechter als zu Hause, was die Messwerte verzerren könne. Reinhardt hält die Grundaussage gleichwohl für gut belegt: Wer regelmäßig zu wenig schläft, lernt schlechter.",
       "Hinzu kommen große Unterschiede zwischen einzelnen Menschen. Manche kommen mit sechs Stunden Schlaf gut zurecht, andere benötigen neun, um am nächsten Tag leistungsfähig zu sein. Auch der bevorzugte Rhythmus variiert: Sogenannte Abendtypen werden erst spät müde und haben es schwer, wenn Lehrveranstaltungen früh am Morgen beginnen. Pauschale Empfehlungen zur idealen Schlafdauer greifen daher zu kurz. Sinnvoller sei es, so Reinhardt, auf die eigenen Signale zu achten und einen möglichst gleichmäßigen Rhythmus beizubehalten.",
       "Auf großes öffentliches Interesse stoßen Versuche, die Konsolidierung im Schlaf gezielt zu verstärken. In mehreren Experimenten wurde während des Lernens ein bestimmter Duft oder ein leiser Ton dargeboten, der dann im Tiefschlaf erneut eingespielt wurde. Tatsächlich erinnerten sich die Versuchspersonen danach etwas besser an die mit dem Reiz verknüpften Inhalte. Von „Lernen im Schlaf\" im eigentlichen Sinne kann jedoch keine Rede sein: Gänzlich neue Informationen, die man Schlafenden vorspielt, werden nach heutigem Kenntnisstand nicht dauerhaft gespeichert. Der Effekt beschränkt sich auf bereits im Wachzustand Gelerntes.",
       "Was folgt aus alldem für die Prüfungsvorbereitung? Zunächst spricht vieles dafür, das Lernpensum über mehrere Tage zu verteilen, statt es in einer einzigen langen Sitzung zu bewältigen, weil so mehrere Nächte zur Festigung zur Verfügung stehen. Auch kurze Schlafphasen am Tag können nützlich sein: Bereits ein Mittagsschlaf von etwa einer Stunde, der Tiefschlafanteile enthält, verbesserte in einigen Studien das Behalten. Die durchwachte Nacht vor der Prüfung dagegen erweist sich aus Sicht der Forschung als doppelt ungünstig: Sie beeinträchtigt nicht nur die Konzentration am Prüfungstag, sondern auch die Festigung dessen, was am Vortag noch gelernt wurde."
      ]
     },
     "aufgaben": [
      {
       "frage": "Nach Ansicht der Schlafforschung ruht das Gehirn während des Schlafs weitgehend.",
       "opt": [
        "richtig",
        "falsch",
        "steht nicht im Text"
       ],
       "loesung": 1,
       "fest": true,
       "stelle": "Schlaf ist keineswegs ein Zustand, in dem das Gehirn lediglich ruht",
       "erklaerung": "„keineswegs … lediglich ruht\": Im Schlaf wird aktiv geordnet und gefestigt."
      },
      {
       "frage": "Der Hippocampus kann im Unterschied zur Großhirnrinde nur begrenzt Informationen speichern.",
       "opt": [
        "richtig",
        "falsch",
        "steht nicht im Text"
       ],
       "loesung": 0,
       "fest": true,
       "stelle": "verfügt aber nur über eine begrenzte Kapazität",
       "erklaerung": "Begrenzte Kapazität beim Hippocampus, dauerhafte Speicherung in der Großhirnrinde."
      },
      {
       "frage": "Tiefschlaf kommt hauptsächlich in den ersten Stunden der Nacht vor.",
       "opt": [
        "richtig",
        "falsch",
        "steht nicht im Text"
       ],
       "loesung": 0,
       "fest": true,
       "stelle": "der vor allem in der ersten Nachthälfte auftritt",
       "erklaerung": "„erste Nachthälfte\" ist hier mit „ersten Stunden der Nacht\" umschrieben."
      },
      {
       "frage": "Bei den Ratten liefen die nächtlichen Aktivierungsmuster langsamer ab als am Tag.",
       "opt": [
        "richtig",
        "falsch",
        "steht nicht im Text"
       ],
       "loesung": 1,
       "fest": true,
       "stelle": "nur in deutlich höherem Tempo",
       "erklaerung": "Im Schlaf wiederholten sich die Muster schneller, nicht langsamer."
      },
      {
       "frage": "Die Versuchspersonen in Wernau erhielten für ihre Teilnahme eine Vergütung.",
       "opt": [
        "richtig",
        "falsch",
        "steht nicht im Text"
       ],
       "loesung": 2,
       "fest": true,
       "stelle": "Einhundertzwanzig Versuchspersonen lernten am Abend Wortpaare",
       "erklaerung": "Über eine Bezahlung der Teilnehmer sagt der Text nichts."
      },
      {
       "frage": "Nach einer Woche hatte sich der Vorsprung der Schlafgruppe verringert.",
       "opt": [
        "richtig",
        "falsch",
        "steht nicht im Text"
       ],
       "loesung": 1,
       "fest": true,
       "stelle": "dass der Abstand nach einer Woche nicht kleiner geworden war",
       "erklaerung": "Der Abstand blieb gleich groß, er wurde gerade nicht kleiner."
      },
      {
       "frage": "Albers hält es für offen, ob ihre Ergebnisse auch für anspruchsvolleres Lernen gelten.",
       "opt": [
        "richtig",
        "falsch",
        "steht nicht im Text"
       ],
       "loesung": 0,
       "fest": true,
       "stelle": "sei noch nicht ausreichend geklärt",
       "erklaerung": "Sie räumt ein, dass komplexe Theorien noch nicht untersucht sind."
      },
      {
       "frage": "Der REM-Schlaf ist nach bisherigen Untersuchungen vor allem für das Merken von Fakten wichtig.",
       "opt": [
        "richtig",
        "falsch",
        "steht nicht im Text"
       ],
       "loesung": 1,
       "fest": true,
       "stelle": "weniger für das Behalten von Fakten als für das Erlernen von Bewegungsabläufen",
       "erklaerung": "„weniger für Fakten als für Bewegungsabläufe\": Die Aussage dreht das um."
      },
      {
       "frage": "In Lindenfeld profitierten nur diejenigen vom Schlaf, die von der bevorstehenden Prüfung wussten.",
       "opt": [
        "richtig",
        "falsch",
        "steht nicht im Text"
       ],
       "loesung": 0,
       "fest": true,
       "stelle": "Nur in der ersten Gruppe zeigte sich ein deutlicher Vorteil",
       "erklaerung": "Die erste Gruppe war die, der man die Prüfung angekündigt hatte."
      },
      {
       "frage": "Reinhardt hat selbst eine Studie mit älteren Menschen durchgeführt.",
       "opt": [
        "richtig",
        "falsch",
        "steht nicht im Text"
       ],
       "loesung": 2,
       "fest": true,
       "stelle": "sei weit weniger erforscht",
       "erklaerung": "Er weist nur auf eine Forschungslücke hin, über eigene Studien steht nichts im Text."
      },
      {
       "frage": "Ein Mittagsschlaf ist nach den Studien wirksamer als der Schlaf in der Nacht.",
       "opt": [
        "richtig",
        "falsch",
        "steht nicht im Text"
       ],
       "loesung": 2,
       "fest": true,
       "stelle": "verbesserte in einigen Studien das Behalten",
       "erklaerung": "Der Mittagsschlaf hilft, ein Vergleich mit dem Nachtschlaf wird aber nicht gezogen."
      },
      {
       "frage": "Welche Überschrift passt am besten zum ganzen Text?",
       "opt": [
        "Warum Schlaf für das Lernen unverzichtbar ist",
        "Neue Methoden: Wie man im Schlaf Fremdsprachen lernt",
        "Schlafstörungen bei Studenten nehmen deutlich zu"
       ],
       "loesung": 0,
       "fest": true,
       "erklaerung": "Der ganze Text erklärt, wie Schlaf Gelerntes festigt. „Lernen im Schlaf\" wird ausdrücklich verneint, und über eine Zunahme von Schlafstörungen steht nichts."
      }
     ]
    },
    {
     "nr": 4,
     "art": "textwahl",
     "text": {
      "sorte": "zeitung",
      "quelle": "Hochschulmagazin „Campus Mittelweg\"",
      "titel": "Vorlesungen als Aufzeichnung",
      "zeilen": [
       "Seit einigen Jahren stellen immer mehr Hochschulen ihre Vorlesungen als Aufzeichnung __(1)__ Verfügung. Was ursprünglich als Notlösung gedacht war, ist inzwischen an vielen Fachbereichen __(2)__ Alltag geworden. Befürworter weisen darauf hin, dass Studenten den Stoff so in ihrem eigenen Tempo __(3)__ können. Wer etwa neben dem Studium arbeiten müsse oder Kinder betreue, __(4)__ besonders von dem Angebot. Zudem lassen sich schwierige Passagen beliebig oft wiederholen, was gerade bei der Prüfungsvorbereitung geschätzt wird.",
       "Kritiker hingegen äußern die __(5)__, dass die Anwesenheit in den Hörsälen deutlich zurückgehe. Tatsächlich zeigt eine Untersuchung der Hochschule Seelingen, dass Lehrveranstaltungen mit Aufzeichnung im Schnitt von rund einem Drittel weniger Studenten __(6)__ werden. Ob dies dem Lernerfolg __(7)__ schadet, ist allerdings umstritten. Die Seelinger Forscher stellten fest, dass sich die Prüfungsergebnisse beider Gruppen kaum __(8)__ unterschieden. Entscheidend sei weniger, __(9)__ jemand den Stoff aufnehme, als vielmehr, wie regelmäßig er sich damit beschäftige. Problematisch werde es erst, wenn Studenten die Aufzeichnungen bis kurz vor der Prüfung ungesehen __(10)__ ließen. In diesem Fall gerieten sie leicht unter __(11)__ und könnten den Stoff nicht mehr ausreichend verarbeiten.",
       "Auch die Dozenten sehen sich vor neue Herausforderungen __(12)__. Manche befürchten, dass spontane Beiträge im Hörsaal seltener werden, __(13)__ jede Äußerung aufgezeichnet wird. Andere nutzen die Aufzeichnungen gezielt, um in der Präsenzzeit mehr Raum __(14)__ Diskussionen zu schaffen. Dieses Modell, das __(15)__ dem Begriff „umgedrehter Hörsaal\" bekannt ist, setzt allerdings voraus, dass die Studenten gut vorbereitet __(16)__ Sitzung erscheinen. Erfahrungen zeigen, dass dies nur gelingt, wenn die Vorbereitung verbindlich __(17)__ wird, etwa durch kurze Tests. Der Aufwand für die Dozenten ist dabei allerdings deutlich höher als bei einer klassischen Vorlesung.",
       "Die Hochschulleitung in Seelingen hat __(18)__ der Ergebnisse beschlossen, Aufzeichnungen weiterhin anzubieten. Gleichzeitig sollen die Dozenten darin geschult werden, Präsenzveranstaltungen stärker __(19)__ zu gestalten. Eine abschließende Bewertung __(20)__ jedoch erst nach weiteren Semestern möglich, so die Hochschule. Bis dahin bleibe es den Fachbereichen __(21)__, ob sie das Angebot ausbauen. Die Debatte über die Zukunft der Vorlesung dürfte damit noch lange nicht __(22)__ Abschluss kommen."
      ]
     },
     "aufgaben": [
      {
       "frage": "Was passt in Lücke 1?",
       "luecke": 1,
       "opt": [
        "zu",
        "zur",
        "in",
        "auf"
       ],
       "loesung": 1,
       "fest": true,
       "erklaerung": "Funktionsverbgefüge: „etwas zur Verfügung stellen\"."
      },
      {
       "frage": "Was passt in Lücke 2?",
       "luecke": 2,
       "opt": [
        "zur",
        "im",
        "in den",
        "zum"
       ],
       "loesung": 3,
       "fest": true,
       "erklaerung": "„zu etwas werden\": „zum Alltag werden\" (der Alltag → zum)."
      },
      {
       "frage": "Was passt in Lücke 3?",
       "luecke": 3,
       "opt": [
        "nachgearbeitet",
        "nacharbeitend",
        "nacharbeiten",
        "nachzuarbeiten"
       ],
       "loesung": 2,
       "fest": true,
       "erklaerung": "Nach Modalverb „können\" steht der Infinitiv ohne „zu\"."
      },
      {
       "frage": "Was passt in Lücke 4?",
       "luecke": 4,
       "opt": [
        "profitiert haben",
        "profitierend",
        "profitieren",
        "profitiere"
       ],
       "loesung": 3,
       "fest": true,
       "erklaerung": "Redewiedergabe mit Konjunktiv I, parallel zu „müsse\" und „betreue\": „profitiere\"."
      },
      {
       "frage": "Was passt in Lücke 5?",
       "luecke": 5,
       "opt": [
        "Fürchten",
        "Befürchten",
        "Befürchtete",
        "Befürchtung"
       ],
       "loesung": 3,
       "fest": true,
       "erklaerung": "Nominalisierung: „die Befürchtung äußern, dass\"."
      },
      {
       "frage": "Was passt in Lücke 6?",
       "luecke": 6,
       "opt": [
        "besuchte",
        "besuchen",
        "besucht",
        "besuchend"
       ],
       "loesung": 2,
       "fest": true,
       "erklaerung": "Vorgangspassiv mit Agens „von … Studenten\": „besucht werden\"."
      },
      {
       "frage": "Was passt in Lücke 7?",
       "luecke": 7,
       "opt": [
        "tatsächlich",
        "tatsächlichen",
        "Tatsache",
        "tatsächliche"
       ],
       "loesung": 0,
       "fest": true,
       "erklaerung": "Adverb zum Verb „schadet\", daher ohne Endung."
      },
      {
       "frage": "Was passt in Lücke 8?",
       "luecke": 8,
       "opt": [
        "füreinander",
        "miteinander",
        "aufeinander",
        "voneinander"
       ],
       "loesung": 3,
       "fest": true,
       "erklaerung": "„sich unterscheiden von\" → reziprok „voneinander\"."
      },
      {
       "frage": "Was passt in Lücke 9?",
       "luecke": 9,
       "opt": [
        "auf welchen Weg",
        "in welchem Weg",
        "auf welchem Weg",
        "mit welchem Weg"
       ],
       "loesung": 2,
       "fest": true,
       "erklaerung": "„auf einem Weg\" = Dativ (wo/wie); indirekte Frage: „auf welchem Weg\"."
      },
      {
       "frage": "Was passt in Lücke 10?",
       "luecke": 10,
       "opt": [
        "gelegen",
        "liegen",
        "lagen",
        "legen"
       ],
       "loesung": 1,
       "fest": true,
       "erklaerung": "Feste Verbindung: „etwas liegen lassen\" (Infinitiv)."
      },
      {
       "frage": "Was passt in Lücke 11?",
       "luecke": 11,
       "opt": [
        "Zeitdruck",
        "Zeitnot",
        "Zeitpunkt",
        "Zeitraum"
       ],
       "loesung": 0,
       "fest": true,
       "erklaerung": "„unter Zeitdruck geraten\"; „Zeitnot\" verbindet sich mit „in\"."
      },
      {
       "frage": "Was passt in Lücke 12?",
       "luecke": 12,
       "opt": [
        "gebracht",
        "gelegt",
        "gesetzt",
        "gestellt"
       ],
       "loesung": 3,
       "fest": true,
       "erklaerung": "Feste Wendung: „sich vor eine Herausforderung gestellt sehen\"."
      },
      {
       "frage": "Was passt in Lücke 13?",
       "luecke": 13,
       "opt": [
        "sodass",
        "damit",
        "weil",
        "obwohl"
       ],
       "loesung": 2,
       "fest": true,
       "erklaerung": "Grund der Befürchtung: Jede Äußerung wird aufgezeichnet → „weil\"."
      },
      {
       "frage": "Was passt in Lücke 14?",
       "luecke": 14,
       "opt": [
        "an",
        "für",
        "zu",
        "über"
       ],
       "loesung": 1,
       "fest": true,
       "erklaerung": "„Raum für etwas schaffen\"."
      },
      {
       "frage": "Was passt in Lücke 15?",
       "luecke": 15,
       "opt": [
        "bei",
        "von",
        "mit",
        "unter"
       ],
       "loesung": 3,
       "fest": true,
       "erklaerung": "Feste Wendung: „unter einem Begriff bekannt sein\"."
      },
      {
       "frage": "Was passt in Lücke 16?",
       "luecke": 16,
       "opt": [
        "zur",
        "von der",
        "an der",
        "über die"
       ],
       "loesung": 0,
       "fest": true,
       "erklaerung": "„zu einem Termin erscheinen\": „zur Sitzung erscheinen\"."
      },
      {
       "frage": "Was passt in Lücke 17?",
       "luecke": 17,
       "opt": [
        "einzufordern",
        "einfordernd",
        "eingefordert",
        "einfordern"
       ],
       "loesung": 2,
       "fest": true,
       "erklaerung": "Vorgangspassiv im Nebensatz: „eingefordert wird\"."
      },
      {
       "frage": "Was passt in Lücke 18?",
       "luecke": 18,
       "opt": [
        "aufgrund",
        "trotz",
        "statt",
        "anstelle"
       ],
       "loesung": 0,
       "fest": true,
       "erklaerung": "Grund + Genitiv: „aufgrund der Ergebnisse\"; „trotz\" passt nicht, weil die Ergebnisse positiv sind."
      },
      {
       "frage": "Was passt in Lücke 19?",
       "luecke": 19,
       "opt": [
        "interagieren",
        "Interaktion",
        "interaktiv",
        "interaktive"
       ],
       "loesung": 2,
       "fest": true,
       "erklaerung": "Adjektiv als Adverb bei „gestalten\": ohne Endung."
      },
      {
       "frage": "Was passt in Lücke 20?",
       "luecke": 20,
       "opt": [
        "sei",
        "ist gewesen",
        "seien",
        "wäre gewesen"
       ],
       "loesung": 0,
       "fest": true,
       "erklaerung": "Redewiedergabe („so die Hochschule\"), Subjekt Singular: Konjunktiv I „sei\"."
      },
      {
       "frage": "Was passt in Lücke 21?",
       "luecke": 21,
       "opt": [
        "überlassen",
        "verlassen",
        "gelassen",
        "erlassen"
       ],
       "loesung": 0,
       "fest": true,
       "erklaerung": "„jemandem etwas überlassen\" = jemanden selbst entscheiden lassen."
      },
      {
       "frage": "Was passt in Lücke 22?",
       "luecke": 22,
       "opt": [
        "im",
        "zum",
        "am",
        "beim"
       ],
       "loesung": 1,
       "fest": true,
       "erklaerung": "Funktionsverbgefüge: „zum Abschluss kommen\" = beendet werden."
      }
     ]
    }
   ]
  },
  {
   "id": "tc1ll2",
   "titel": "Prüfungslauf 2",
   "minuten": 90,
   "teile": [
    {
     "nr": 1,
     "art": "textwahl",
     "text": {
      "sorte": "zeitung",
      "quelle": "Wirtschaft und Nachhaltigkeit",
      "titel": "Die Rückkehr der Reparatur",
      "zeilen": [
       "Ein Smartphone, dessen Akku nach zwei Jahren schwächelt, eine Waschmaschine mit defekter Pumpe, ein Toaster, der nicht mehr heizt: In vielen Haushalten landen solche Geräte im Müll, obwohl sie sich reparieren ließen. __(1)__ Neugeräte sind häufig kaum teurer als eine Reparatur, Ersatzteile sind schwer zu bekommen, und Fachbetriebe sind in vielen Regionen rar geworden. Nach Schätzungen von Verbraucherverbänden werden jedes Jahr mehrere Millionen funktionsfähige oder leicht reparierbare Elektrogeräte entsorgt.",
       "Eine Studie des Instituts für Ressourcenökonomie in Falkenried hat untersucht, wie sich das ändern ließe. __(2)__ In einer Modellregion erhielten Verbraucher ein Jahr lang einen Zuschuss von fünfzig Prozent der Reparaturkosten, höchstens jedoch 150 Euro pro Gerät. Die Zahl der Reparaturen stieg in diesem Zeitraum um mehr als das Doppelte, und zwar quer durch alle Gerätegruppen. Besonders gefragt waren Reparaturen an Waschmaschinen, Kaffeevollautomaten und Smartphones. Zugleich ging die Menge des entsorgten Elektroschrotts in der Region messbar zurück.",
       "Bemerkenswert ist, wer von dem Angebot Gebrauch machte. __(3)__ Offenbar hatten gerade sie bisher auf Reparaturen verzichtet, weil ihnen die Kosten zu hoch erschienen. Der Studienleiter Matthias Oppermann sieht darin ein Argument gegen den Vorwurf, Reparaturförderung sei ein Geschenk an ohnehin umweltbewusste Besserverdiener. Gut verdienende Haushalte hätten sich eine Reparatur dagegen meist auch ohne Zuschuss geleistet, so Oppermann.",
       "Ganz ohne Nebenwirkungen blieb das Programm allerdings nicht. __(4)__ Kunden mussten in der Spitze mehrere Wochen auf einen Termin warten, und manche entschieden sich in dieser Zeit doch für ein neues Gerät. Oppermann folgert daraus, dass finanzielle Anreize allein nicht genügen, solange es an ausgebildeten Fachkräften fehlt. Gerade kleinere Werkstätten finden seit Jahren kaum Nachwuchs. In der Modellregion sollen deshalb nun zusätzliche Ausbildungsplätze für Elektroniker geschaffen werden.",
       "Ein zweiter Ansatzpunkt liegt bei den Herstellern. Viele Geräte sind so konstruiert, dass sich einzelne Bauteile nur mit Spezialwerkzeug oder gar nicht austauschen lassen. __(5)__ Die Studie empfiehlt deshalb verbindliche Vorgaben, nach denen Ersatzteile über einen bestimmten Zeitraum lieferbar und Reparaturanleitungen öffentlich zugänglich sein müssen. Einige Hersteller haben bereits angekündigt, ihre Geräte entsprechend umzugestalten. Kritiker aus der Industrie warnen allerdings, solche Vorgaben könnten Geräte teurer machen und Innovationen bremsen.",
       "Ob sich eine Kultur des Reparierens wiederbeleben lässt, hängt aber nicht nur von Geld und Gesetzen ab. __(6)__ Wer gewohnt ist, alle zwei Jahre ein neues Telefon zu kaufen, wird auch ein preiswertes Reparaturangebot womöglich gar nicht erst in Betracht ziehen. Hier seien, so Oppermann, Schulen und Verbraucherberatung ebenso gefragt wie die Politik. Reparaturcafés, in denen Freiwillige gemeinsam mit Besitzern defekte Geräte instand setzen, könnten dabei eine wichtige Rolle spielen."
      ]
     },
     "aufgaben": [
      {
       "frage": "Welcher Satz gehört in Lücke 1?",
       "luecke": 1,
       "opt": [
        "Weil die Nachfrage schneller wuchs als die Zahl der Werkstätten, kam es zu Engpässen.",
        "Vor allem gut verdienende Haushalte nutzten den Zuschuss, um teure Geräte instand setzen zu lassen.",
        "Die Gründe dafür sind in erster Linie wirtschaftlicher Natur.",
        "Mindestens ebenso wichtig seien Gewohnheiten, die sich über Jahrzehnte verfestigt hätten, meint Oppermann.",
        "Im Mittelpunkt stand dabei ein finanzieller Anreiz, wie es ihn in ähnlicher Form bereits in einigen Nachbarländern gibt.",
        "Akkus etwa sind häufig fest verklebt, sodass schon ihr Austausch das Gehäuse beschädigen kann.",
        "Überdurchschnittlich häufig waren es Haushalte mit geringem Einkommen.",
        "Die Werkstätten konnten die zusätzlichen Aufträge deshalb problemlos bewältigen."
       ],
       "loesung": 2,
       "fest": true,
       "erklaerung": "„dafür“ verweist auf das Wegwerfen reparierbarer Geräte; danach werden die wirtschaftlichen Gründe aufgezählt."
      },
      {
       "frage": "Welcher Satz gehört in Lücke 2?",
       "luecke": 2,
       "opt": [
        "Weil die Nachfrage schneller wuchs als die Zahl der Werkstätten, kam es zu Engpässen.",
        "Vor allem gut verdienende Haushalte nutzten den Zuschuss, um teure Geräte instand setzen zu lassen.",
        "Die Gründe dafür sind in erster Linie wirtschaftlicher Natur.",
        "Mindestens ebenso wichtig seien Gewohnheiten, die sich über Jahrzehnte verfestigt hätten, meint Oppermann.",
        "Im Mittelpunkt stand dabei ein finanzieller Anreiz, wie es ihn in ähnlicher Form bereits in einigen Nachbarländern gibt.",
        "Akkus etwa sind häufig fest verklebt, sodass schon ihr Austausch das Gehäuse beschädigen kann.",
        "Überdurchschnittlich häufig waren es Haushalte mit geringem Einkommen.",
        "Die Werkstätten konnten die zusätzlichen Aufträge deshalb problemlos bewältigen."
       ],
       "loesung": 4,
       "fest": true,
       "erklaerung": "„dabei“ bezieht sich auf die Studie; der Folgesatz konkretisiert den finanziellen Anreiz als Zuschuss."
      },
      {
       "frage": "Welcher Satz gehört in Lücke 3?",
       "luecke": 3,
       "opt": [
        "Weil die Nachfrage schneller wuchs als die Zahl der Werkstätten, kam es zu Engpässen.",
        "Vor allem gut verdienende Haushalte nutzten den Zuschuss, um teure Geräte instand setzen zu lassen.",
        "Die Gründe dafür sind in erster Linie wirtschaftlicher Natur.",
        "Mindestens ebenso wichtig seien Gewohnheiten, die sich über Jahrzehnte verfestigt hätten, meint Oppermann.",
        "Im Mittelpunkt stand dabei ein finanzieller Anreiz, wie es ihn in ähnlicher Form bereits in einigen Nachbarländern gibt.",
        "Akkus etwa sind häufig fest verklebt, sodass schon ihr Austausch das Gehäuse beschädigen kann.",
        "Überdurchschnittlich häufig waren es Haushalte mit geringem Einkommen.",
        "Die Werkstätten konnten die zusätzlichen Aufträge deshalb problemlos bewältigen."
       ],
       "loesung": 6,
       "fest": true,
       "erklaerung": "Der Satz beantwortet „wer … Gebrauch machte“; „gerade sie“ im Folgesatz meint diese Haushalte."
      },
      {
       "frage": "Welcher Satz gehört in Lücke 4?",
       "luecke": 4,
       "opt": [
        "Weil die Nachfrage schneller wuchs als die Zahl der Werkstätten, kam es zu Engpässen.",
        "Vor allem gut verdienende Haushalte nutzten den Zuschuss, um teure Geräte instand setzen zu lassen.",
        "Die Gründe dafür sind in erster Linie wirtschaftlicher Natur.",
        "Mindestens ebenso wichtig seien Gewohnheiten, die sich über Jahrzehnte verfestigt hätten, meint Oppermann.",
        "Im Mittelpunkt stand dabei ein finanzieller Anreiz, wie es ihn in ähnlicher Form bereits in einigen Nachbarländern gibt.",
        "Akkus etwa sind häufig fest verklebt, sodass schon ihr Austausch das Gehäuse beschädigen kann.",
        "Überdurchschnittlich häufig waren es Haushalte mit geringem Einkommen.",
        "Die Werkstätten konnten die zusätzlichen Aufträge deshalb problemlos bewältigen."
       ],
       "loesung": 0,
       "fest": true,
       "erklaerung": "Die Engpässe sind die angekündigten „Nebenwirkungen“; der Folgesatz beschreibt die Wartezeiten."
      },
      {
       "frage": "Welcher Satz gehört in Lücke 5?",
       "luecke": 5,
       "opt": [
        "Weil die Nachfrage schneller wuchs als die Zahl der Werkstätten, kam es zu Engpässen.",
        "Vor allem gut verdienende Haushalte nutzten den Zuschuss, um teure Geräte instand setzen zu lassen.",
        "Die Gründe dafür sind in erster Linie wirtschaftlicher Natur.",
        "Mindestens ebenso wichtig seien Gewohnheiten, die sich über Jahrzehnte verfestigt hätten, meint Oppermann.",
        "Im Mittelpunkt stand dabei ein finanzieller Anreiz, wie es ihn in ähnlicher Form bereits in einigen Nachbarländern gibt.",
        "Akkus etwa sind häufig fest verklebt, sodass schon ihr Austausch das Gehäuse beschädigen kann.",
        "Überdurchschnittlich häufig waren es Haushalte mit geringem Einkommen.",
        "Die Werkstätten konnten die zusätzlichen Aufträge deshalb problemlos bewältigen."
       ],
       "loesung": 5,
       "fest": true,
       "erklaerung": "„etwa“ führt ein Beispiel für schwer austauschbare Bauteile an."
      },
      {
       "frage": "Welcher Satz gehört in Lücke 6?",
       "luecke": 6,
       "opt": [
        "Weil die Nachfrage schneller wuchs als die Zahl der Werkstätten, kam es zu Engpässen.",
        "Vor allem gut verdienende Haushalte nutzten den Zuschuss, um teure Geräte instand setzen zu lassen.",
        "Die Gründe dafür sind in erster Linie wirtschaftlicher Natur.",
        "Mindestens ebenso wichtig seien Gewohnheiten, die sich über Jahrzehnte verfestigt hätten, meint Oppermann.",
        "Im Mittelpunkt stand dabei ein finanzieller Anreiz, wie es ihn in ähnlicher Form bereits in einigen Nachbarländern gibt.",
        "Akkus etwa sind häufig fest verklebt, sodass schon ihr Austausch das Gehäuse beschädigen kann.",
        "Überdurchschnittlich häufig waren es Haushalte mit geringem Einkommen.",
        "Die Werkstätten konnten die zusätzlichen Aufträge deshalb problemlos bewältigen."
       ],
       "loesung": 3,
       "fest": true,
       "erklaerung": "„nicht nur … ab“ verlangt eine Ergänzung: „Mindestens ebenso wichtig“; der Folgesatz illustriert die Gewohnheit."
      }
     ]
    },
    {
     "nr": 2,
     "art": "textwahl",
     "text": {
      "sorte": "zeitung",
      "quelle": "Hochschule & Lehre heute",
      "titel": "Die Hausarbeit im Zeitalter der Textgeneratoren",
      "zeilen": [
       "A — Als Textgeneratoren auf Basis künstlicher Intelligenz vor einigen Jahren allgemein zugänglich wurden, reagierten viele Hochschulen zunächst mit Verboten. Wer eine Hausarbeit mithilfe solcher Programme verfasste, riskierte, wegen eines Täuschungsversuchs durchzufallen.",
       "Inzwischen hat sich die Haltung vielerorts gewandelt. Eine Umfrage unter Dozenten an vierzig Hochschulen ergab, dass nur noch eine Minderheit ein vollständiges Verbot für sinnvoll hält. Die Mehrheit setzt stattdessen auf Regeln, die den Einsatz erlauben, aber eine Offenlegung verlangen. Wie solche Regeln im Einzelnen aussehen, unterscheidet sich von Fach zu Fach. Ausschlaggebend für die Kehrtwende war auch die Einsicht, dass Absolventen im Berufsleben ohnehin mit solchen Programmen arbeiten werden. Eine Hochschule, die den Umgang damit ausklammere, bereite ihre Studenten nicht ausreichend auf die Arbeitswelt vor, heißt es in einem Positionspapier mehrerer Fakultäten.",
       "B — Ein Grund für den Sinneswandel ist ernüchternd: Verbote lassen sich kaum durchsetzen. Programme, die maschinell erzeugte Texte erkennen sollen, arbeiten mehreren Untersuchungen zufolge unzuverlässig. In einem Test an der Universität Brennstein stufte eine solche Software rund jeden zehnten von Studenten selbst geschriebenen Text als maschinell erzeugt ein.",
       "Besonders häufig betroffen waren Arbeiten von Studenten, deren Muttersprache nicht Deutsch ist, da sie oft einfachere und regelmäßigere Satzmuster verwenden. „Ein solches Werkzeug als Beweismittel zu verwenden, wäre unverantwortlich“, sagt der Informatiker Jonas Riedmüller, der den Test durchgeführt hat. Hinzu kommt, dass sich die Erkennungsprogramme leicht austricksen lassen. Wer einen maschinell erzeugten Text geringfügig umformuliert, wird in den meisten Fällen nicht mehr entdeckt. Riedmüller spricht von einem Wettrüsten, das die Prüfer kaum gewinnen können. Mehrere Hochschulen haben den Einsatz solcher Erkennungssoftware in Prüfungsverfahren deshalb inzwischen ausdrücklich untersagt.",
       "C — Viele Dozenten überdenken deshalb ihre Prüfungsformen. Statt einer schriftlichen Hausarbeit, die allein zu Hause entsteht, verlangen sie zunehmend mündliche Verteidigungen, in denen die Studenten ihre Argumentation erläutern müssen. Andere lassen Zwischenstände einreichen, sodass der Entstehungsprozess einer Arbeit nachvollziehbar wird.",
       "An der Hochschule Talheim schreiben Studenten im ersten Semester einen Teil ihrer Texte unter Aufsicht in Seminarräumen. Dieser Aufwand sei erheblich, räumt die dortige Studiendekanin Petra Lindqvist ein, doch er zwinge auch dazu, genauer zu überlegen, was eine Prüfung eigentlich messen solle. Wieder andere Hochschulen setzen auf Vertrauen und verlangen lediglich eine schriftliche Erklärung, ob und wofür solche Programme verwendet wurden. Ob diese Angaben zutreffen, lässt sich allerdings kaum überprüfen. Mündliche Formen gelten dagegen auch als fairer, weil Missverständnisse im Gespräch direkt geklärt werden können.",
       "D — Daneben sehen manche Fachleute in den Programmen auch eine Chance für das Lernen. Wer einen maschinell erzeugten Text kritisch prüft, Fehler findet und Quellen nachrecherchiert, übt genau jene Fähigkeiten, die das wissenschaftliche Arbeiten ausmachen.",
       "Einige Seminare nutzen die Programme deshalb gezielt als Gegenüber: Die Studenten lassen sich eine Argumentation erstellen und müssen anschließend deren Schwächen herausarbeiten. Riedmüller warnt jedoch davor, solche Übungen zu überschätzen. Kritisch prüfen könne nur, wer selbst über ausreichendes Fachwissen verfüge. Zudem könnten die Programme jenen helfen, deren Stärken nicht im Formulieren liegen. Wer gute Ideen hat, aber mit der Wissenschaftssprache ringt, erhalte Rückmeldungen zu Stil und Aufbau, die früher nur in Sprechstunden zu bekommen waren. Einige Fachbereiche bieten dafür bereits eigene Workshops an. Dort lernen Studenten, wie man Anfragen an solche Programme sinnvoll formuliert und deren Antworten anhand von Fachliteratur überprüft.",
       "E — Und die Studenten selbst? In einer Befragung an der Universität Brennstein gaben gut zwei Drittel an, die Programme zumindest gelegentlich zu nutzen, am häufigsten zum Entwerfen von Gliederungen und zum Überarbeiten eigener Texte. Nur eine kleine Minderheit gab an, ganze Abschnitte von den Programmen schreiben zu lassen. Die meisten nutzen sie eher wie ein Wörterbuch – als Hilfsmittel, nicht als Ersatz für die eigene Arbeit. Fast die Hälfte der Befragten gab außerdem an, sich im Umgang mit den Programmen unsicher zu fühlen, vor allem bei der Frage, wie man deren Verwendung korrekt angibt.",
       "Viele wünschen sich klarere Vorgaben. Was in einem Seminar erlaubt sei, gelte im nächsten als Täuschung, beklagte ein Befragter. Diese Unsicherheit führe dazu, dass manche die Programme heimlich verwendeten, während andere aus Angst vor Sanktionen ganz darauf verzichteten – auch dort, wo sie erlaubt wären. Die Hochschulleitung in Brennstein hat inzwischen angekündigt, einheitliche Richtlinien für alle Fakultäten zu erarbeiten."
      ]
     },
     "aufgaben": [
      {
       "frage": "In welchem Abschnitt steht das? „Ein Prüfprogramm hielt von Menschen verfasste Texte fälschlich für computergeneriert.\"",
       "opt": [
        "Abschnitt A",
        "Abschnitt B",
        "Abschnitt C",
        "Abschnitt D",
        "Abschnitt E"
       ],
       "loesung": 1,
       "fest": true,
       "stelle": "rund jeden zehnten von Studenten selbst geschriebenen Text als maschinell erzeugt ein",
       "erklaerung": "Jeder zehnte echte Studententext wurde falsch eingestuft."
      },
      {
       "frage": "In welchem Abschnitt steht das? „Um die Entstehung einer Arbeit sichtbar zu machen, werden Teilergebnisse verlangt.\"",
       "opt": [
        "Abschnitt A",
        "Abschnitt B",
        "Abschnitt C",
        "Abschnitt D",
        "Abschnitt E"
       ],
       "loesung": 2,
       "fest": true,
       "stelle": "Andere lassen Zwischenstände einreichen",
       "erklaerung": "Zwischenstände = Teilergebnisse; so wird der Entstehungsprozess nachvollziehbar."
      },
      {
       "frage": "In welchem Abschnitt steht das? „Wegen uneinheitlicher Regeln verzichten manche auch auf Hilfsmittel, die zulässig wären.\"",
       "opt": [
        "Abschnitt A",
        "Abschnitt B",
        "Abschnitt C",
        "Abschnitt D",
        "Abschnitt E"
       ],
       "loesung": 4,
       "fest": true,
       "stelle": "aus Angst vor Sanktionen ganz darauf verzichteten",
       "erklaerung": "Aus Unsicherheit nutzen manche die Programme nicht einmal dort, wo sie erlaubt sind."
      },
      {
       "frage": "In welchem Abschnitt steht das? „Wer Fehler in einem automatisch erstellten Text erkennen will, braucht eigenes Wissen im Fach.\"",
       "opt": [
        "Abschnitt A",
        "Abschnitt B",
        "Abschnitt C",
        "Abschnitt D",
        "Abschnitt E"
       ],
       "loesung": 3,
       "fest": true,
       "stelle": "Kritisch prüfen könne nur, wer selbst über ausreichendes Fachwissen verfüge",
       "erklaerung": "Riedmüller schränkt den Nutzen der Übungen ein: ohne Fachwissen keine kritische Prüfung."
      },
      {
       "frage": "In welchem Abschnitt steht das? „Nichtmuttersprachler laufen besonders Gefahr, zu Unrecht verdächtigt zu werden.\"",
       "opt": [
        "Abschnitt A",
        "Abschnitt B",
        "Abschnitt C",
        "Abschnitt D",
        "Abschnitt E"
       ],
       "loesung": 1,
       "fest": true,
       "stelle": "Besonders häufig betroffen waren Arbeiten von Studenten, deren Muttersprache nicht Deutsch ist",
       "erklaerung": "Einfachere Satzmuster führen bei ihnen häufiger zu falschem Verdacht."
      },
      {
       "frage": "In welchem Abschnitt steht das? „Neue Prüfungsformen bedeuten zwar mehr Arbeit, regen aber zum Nachdenken über den Zweck von Prüfungen an.\"",
       "opt": [
        "Abschnitt A",
        "Abschnitt B",
        "Abschnitt C",
        "Abschnitt D",
        "Abschnitt E"
       ],
       "loesung": 2,
       "fest": true,
       "stelle": "doch er zwinge auch dazu, genauer zu überlegen, was eine Prüfung eigentlich messen solle",
       "erklaerung": "Lindqvist räumt den Aufwand ein, sieht darin aber einen Anlass, Prüfungsziele zu klären."
      }
     ]
    },
    {
     "nr": 3,
     "art": "textwahl",
     "text": {
      "sorte": "zeitung",
      "quelle": "nach einem Beitrag im Magazin „Psychologie im Alltag\"",
      "titel": "Sachtext",
      "zeilen": [
       "Lob gilt gemeinhin als eines der wirksamsten Mittel, um Menschen zu Leistung anzuspornen. Eltern loben ihre Kinder für gute Noten, Lehrer ihre Schüler für gelungene Aufsätze, Vorgesetzte ihre Mitarbeiter für erfolgreich abgeschlossene Projekte. Dass Anerkennung motiviert, scheint so selbstverständlich, dass es kaum je hinterfragt wird. Die psychologische Forschung zeichnet allerdings ein deutlich vielschichtigeres Bild. Ob Lob die Motivation steigert, unberührt lässt oder sogar schwächt, hängt offenbar weniger davon ab, ob gelobt wird, als davon, wofür, wie und in welcher Situation dies geschieht.",
       "Eine grundlegende Unterscheidung trifft die Motivationspsychologie zwischen innerer und äußerer Motivation. Innerlich motiviert ist, wer eine Tätigkeit um ihrer selbst willen ausübt, etwa weil sie Freude bereitet oder Neugier befriedigt. Äußerlich motiviert ist dagegen, wer handelt, um eine Belohnung zu erhalten oder eine Strafe zu vermeiden. Lob lässt sich zunächst als äußere Belohnung verstehen. Daraus ergibt sich die Frage, ob es die innere Motivation verdrängen kann, ob also jemand, der für eine Tätigkeit regelmäßig gelobt wird, sie irgendwann nur noch des Lobes wegen ausübt.",
       "Dass materielle Belohnungen diesen Effekt haben können, gilt als vergleichsweise gut belegt. In klassischen Experimenten verloren Kinder, denen für das Malen eine Urkunde in Aussicht gestellt wurde, in den folgenden Tagen schneller das Interesse am Malen als Kinder, die ohne Belohnung gemalt hatten. Für verbales Lob fallen die Befunde jedoch anders aus. Eine Auswertung zahlreicher Einzelstudien, die am Zentrum für Bildungspsychologie in Hallstedt durchgeführt wurde, kam zu dem Ergebnis, dass mündliche Anerkennung die innere Motivation im Durchschnitt eher stärkt als schwächt, und zwar bei Erwachsenen deutlicher als bei Kindern.",
       "Wie lassen sich diese scheinbar widersprüchlichen Befunde erklären? Eine verbreitete Deutung geht davon aus, dass es darauf ankommt, wie eine Rückmeldung empfangen wird. Wird sie als Versuch erlebt, das eigene Verhalten zu steuern, kann sie das Gefühl der Selbstbestimmung schwächen und damit auch die Freude an der Sache. Wird sie dagegen als Information darüber verstanden, dass man etwas gut gemacht hat, stärkt sie das Gefühl, kompetent zu sein. Gerade dieses Gefühl gilt in der Motivationsforschung als eine der wichtigsten Quellen innerer Motivation.",
       "Entscheidend scheint jedoch zu sein, worauf sich das Lob bezieht. Die Entwicklungspsychologin Marlene Ostrowski unterscheidet zwischen personenbezogenem und prozessbezogenem Lob. Ersteres richtet sich auf eine vermeintlich feste Eigenschaft: „Du bist aber begabt.\" Letzteres würdigt die Anstrengung, die gewählte Strategie oder die Ausdauer: „Du hast dir wirklich Mühe gegeben und verschiedene Wege ausprobiert.\" Auf den ersten Blick mag der Unterschied gering erscheinen. In der Wirkung ist er nach Ostrowskis Untersuchungen jedoch erheblich.",
       "In einer ihrer Studien lösten zehnjährige Kinder zunächst eine Reihe mittelschwerer Aufgaben. Anschließend wurde ein Teil von ihnen für seine Intelligenz gelobt, ein anderer Teil für seinen Einsatz. In einer zweiten Runde durften die Kinder wählen, ob sie lieber leichte Aufgaben bearbeiten wollten, bei denen sie sicher gut abschneiden würden, oder schwierigere, an denen sie etwas lernen könnten. Die für ihre Intelligenz gelobten Kinder entschieden sich mehrheitlich für die leichteren Aufgaben. Wer dagegen für seine Anstrengung gelobt worden war, wählte überwiegend die Herausforderung.",
       "Ostrowski erklärt dieses Verhalten damit, dass personenbezogenes Lob eine Botschaft enthält, die geschützt werden will. Wer gehört hat, er sei klug, riskiert mit jedem Misserfolg, dieses Bild in Frage zu stellen. Schwierige Aufgaben werden so zur Bedrohung. Prozessbezogenes Lob vermittelt hingegen, dass Leistung das Ergebnis von Bemühungen ist, die man beeinflussen kann. Fehler erscheinen dann weniger als Beweis mangelnder Fähigkeit denn als Teil des Lernens. Besonders deutlich zeigte sich dies, als die Kinder in einer dritten Runde bewusst zu schwere Aufgaben erhielten: Die für ihre Intelligenz gelobten Kinder gaben deutlich früher auf.",
       "Ebenso bedeutsam ist offenbar die Glaubwürdigkeit des Lobes. Überschwängliche Anerkennung für Leistungen, die die Betroffenen selbst als mittelmäßig einschätzen, kann das Gegenteil des Beabsichtigten bewirken. Gerade ältere Kinder und Jugendliche deuten übertriebenes Lob mitunter als Hinweis darauf, dass man ihnen wenig zutraue. Wer für eine leichte Aufgabe gelobt wird, schließt daraus womöglich, dass von ihm nicht mehr erwartet wurde. Lob, das sich auf konkrete Beobachtungen stützt, wird nach den vorliegenden Befunden hingegen als aufrichtiger wahrgenommen und entfaltet eine nachhaltigere Wirkung.",
       "Eine Rolle spielt auch, wer lobt. Anerkennung von Personen, deren Urteil man schätzt, wiegt erfahrungsgemäß schwerer als die von Menschen, denen man wenig Sachkenntnis zutraut. Ein Lob der Betreuerin einer Abschlussarbeit kann deshalb mehr bewirken als der Beifall von Freunden, die mit dem Thema kaum vertraut sind. Zugleich sinkt der Wert eines Lobes, wenn es zu häufig ausgesprochen wird: Was ständig zu hören ist, verliert an Gewicht und wird schließlich kaum noch wahrgenommen.",
       "In der Arbeitswelt stellt sich die Frage unter etwas anderen Vorzeichen. Eine Befragung von rund dreitausend Arbeitnehmern, die das Wirtschaftsinstitut Korbach durchgeführt hat, ergab, dass fehlende Anerkennung zu den häufigsten Gründen für einen Stellenwechsel zählt, noch vor einem als zu niedrig empfundenen Gehalt. Gleichzeitig gaben viele Befragte an, pauschales Lob in Mitarbeitergesprächen kaum ernst zu nehmen. Geschätzt wurde vor allem eine Rückmeldung, die zeitnah erfolgt und erkennen lässt, dass sich die Führungskraft tatsächlich mit der Arbeit befasst hat.",
       "Nicht zuletzt spielt der kulturelle Hintergrund eine Rolle. Vergleichsstudien legen nahe, dass öffentliches Lob vor einer Gruppe in manchen Gesellschaften als angenehm, in anderen dagegen als peinlich empfunden wird, weil es den Einzelnen aus der Gemeinschaft heraushebt. Für die Hochschule mit ihren zunehmend internationalen Seminargruppen ist dieser Befund keineswegs nebensächlich. Was in einem Kontext als Ermutigung gemeint ist, kann in einem anderen Verlegenheit auslösen. Gleichwohl warnen die Autoren der Vergleichsstudien davor, aus solchen Unterschieden feste Zuschreibungen abzuleiten. Innerhalb jeder Gesellschaft gebe es erhebliche individuelle Abweichungen, die oft größer seien als die Unterschiede zwischen den Ländern. Wer andere anerkennen möchte, sollte daher vor allem aufmerksam beobachten, wie das Gegenüber auf Lob reagiert, und im Zweifel ein kurzes Gespräch unter vier Augen der Anerkennung vor der ganzen Gruppe vorziehen.",
       "Zusammenfassend lässt sich festhalten, dass Lob weder ein Allheilmittel noch grundsätzlich schädlich ist. Seine Wirkung hängt von mehreren Bedingungen ab: Es sollte sich auf beeinflussbares Verhalten statt auf angeborene Eigenschaften beziehen, konkret und glaubwürdig sein und die Situation der gelobten Person berücksichtigen. Ostrowski selbst warnt allerdings davor, aus ihren Ergebnissen starre Regeln abzuleiten. Wer jedes Lob nach einer Formel ausrichte, laufe Gefahr, gerade jene Aufrichtigkeit zu verlieren, auf die es am Ende ankomme."
      ]
     },
     "aufgaben": [
      {
       "frage": "Die psychologische Forschung bestätigt die verbreitete Annahme, dass Lob stets motiviert.",
       "opt": [
        "richtig",
        "falsch",
        "steht nicht im Text"
       ],
       "loesung": 1,
       "fest": true,
       "stelle": "zeichnet allerdings ein deutlich vielschichtigeres Bild",
       "erklaerung": "Lob kann auch nichts bewirken oder sogar schwächen, also nicht „stets\"."
      },
      {
       "frage": "Wer aus Neugier liest, ist nach der Definition im Text innerlich motiviert.",
       "opt": [
        "richtig",
        "falsch",
        "steht nicht im Text"
       ],
       "loesung": 0,
       "fest": true,
       "stelle": "etwa weil sie Freude bereitet oder Neugier befriedigt",
       "erklaerung": "Neugier ist ausdrücklich als Beispiel für innere Motivation genannt."
      },
      {
       "frage": "Die Kinder in den klassischen Mal-Experimenten bekamen Süßigkeiten versprochen.",
       "opt": [
        "richtig",
        "falsch",
        "steht nicht im Text"
       ],
       "loesung": 1,
       "fest": true,
       "stelle": "eine Urkunde in Aussicht gestellt wurde",
       "erklaerung": "Die Belohnung war eine Urkunde, keine Süßigkeit."
      },
      {
       "frage": "Laut der Auswertung aus Hallstedt wirkt mündliches Lob bei Erwachsenen stärker motivierend als bei Kindern.",
       "opt": [
        "richtig",
        "falsch",
        "steht nicht im Text"
       ],
       "loesung": 0,
       "fest": true,
       "stelle": "bei Erwachsenen deutlicher als bei Kindern",
       "erklaerung": "Die Stärkung der inneren Motivation ist bei Erwachsenen deutlicher."
      },
      {
       "frage": "Ostrowski hat die Unterscheidung zwischen personen- und prozessbezogenem Lob als Erste eingeführt.",
       "opt": [
        "richtig",
        "falsch",
        "steht nicht im Text"
       ],
       "loesung": 2,
       "fest": true,
       "stelle": "Marlene Ostrowski unterscheidet zwischen personenbezogenem und prozessbezogenem Lob",
       "erklaerung": "Sie verwendet die Unterscheidung, ob sie sie erfunden hat, steht nicht im Text."
      },
      {
       "frage": "Die für ihren Einsatz gelobten Kinder entschieden sich meist für die schwierigeren Aufgaben.",
       "opt": [
        "richtig",
        "falsch",
        "steht nicht im Text"
       ],
       "loesung": 0,
       "fest": true,
       "stelle": "wählte überwiegend die Herausforderung",
       "erklaerung": "„überwiegend\" entspricht „meist\", „Herausforderung\" den schwierigeren Aufgaben."
      },
      {
       "frage": "In der dritten Runde hielten die für ihre Intelligenz gelobten Kinder länger durch.",
       "opt": [
        "richtig",
        "falsch",
        "steht nicht im Text"
       ],
       "loesung": 1,
       "fest": true,
       "stelle": "gaben deutlich früher auf",
       "erklaerung": "Sie gaben früher auf, hielten also kürzer durch."
      },
      {
       "frage": "Konkretes Lob wird als ehrlicher empfunden als übertriebene Anerkennung.",
       "opt": [
        "richtig",
        "falsch",
        "steht nicht im Text"
       ],
       "loesung": 0,
       "fest": true,
       "stelle": "wird nach den vorliegenden Befunden hingegen als aufrichtiger wahrgenommen",
       "erklaerung": "„aufrichtiger wahrgenommen\" bedeutet „als ehrlicher empfunden\"."
      },
      {
       "frage": "Laut der Korbacher Befragung ist ein zu niedriges Gehalt der häufigste Grund für einen Stellenwechsel.",
       "opt": [
        "richtig",
        "falsch",
        "steht nicht im Text"
       ],
       "loesung": 1,
       "fest": true,
       "stelle": "noch vor einem als zu niedrig empfundenen Gehalt",
       "erklaerung": "Fehlende Anerkennung liegt noch vor dem Gehalt."
      },
      {
       "frage": "An deutschen Hochschulen wird öffentliches Lob in Seminaren inzwischen bewusst vermieden.",
       "opt": [
        "richtig",
        "falsch",
        "steht nicht im Text"
       ],
       "loesung": 2,
       "fest": true,
       "stelle": "Für die Hochschule mit ihren zunehmend internationalen Seminargruppen",
       "erklaerung": "Der Befund ist für Hochschulen wichtig, über eine Praxis dort steht nichts."
      },
      {
       "frage": "Ostrowski plant eine weitere Studie mit Erwachsenen.",
       "opt": [
        "richtig",
        "falsch",
        "steht nicht im Text"
       ],
       "loesung": 2,
       "fest": true,
       "stelle": "Ostrowski selbst warnt allerdings davor",
       "erklaerung": "Über künftige Studien von Ostrowski sagt der Text nichts."
      },
      {
       "frage": "Welche Überschrift passt am besten zum ganzen Text?",
       "opt": [
        "Warum Lob nicht automatisch motiviert",
        "Mehr Geld statt Anerkennung: Was Arbeitnehmer wirklich wollen",
        "Kinder lernen besser ohne Belohnung"
       ],
       "loesung": 0,
       "fest": true,
       "erklaerung": "Der Text zeigt, dass die Wirkung von Lob von Bedingungen abhängt. Anerkennung zählt sogar mehr als Gehalt, und Belohnungen sind nur ein Teilaspekt."
      }
     ]
    },
    {
     "nr": 4,
     "art": "textwahl",
     "text": {
      "sorte": "zeitung",
      "quelle": "Fachzeitschrift „Arbeit und Wandel\"",
      "titel": "Die Viertagewoche im Praxistest",
      "zeilen": [
       "Die Forderung __(1)__ einer Verkürzung der Wochenarbeitszeit hat in den vergangenen Jahren erheblich an Fahrt aufgenommen. Befürworter versprechen sich davon sowohl zufriedenere Arbeitnehmer __(2)__ auch eine höhere Produktivität. Um diese Annahme zu __(3)__, hat das Institut für Arbeitsforschung in Hagenbrück ein einjähriges Pilotprojekt wissenschaftlich begleitet. Erste Ergebnisse wurden kürzlich auf einer Fachtagung vorgestellt. __(4)__ dem Projekt beteiligten sich vierzig Betriebe unterschiedlicher Größe. Beobachtet wurden Industriebetriebe, Dienstleister und soziale Einrichtungen. Die Arbeitnehmer arbeiteten vier statt fünf Tage, __(5)__ dass ihr Gehalt gekürzt wurde.",
       "Die Ergebnisse fielen __(6)__ aus, als viele Kritiker erwartet hatten. In der Mehrzahl der Betriebe blieb die Produktivität stabil, in einigen __(7)__ sie sogar. Zugleich ging die Zahl der krankheitsbedingten Fehltage deutlich __(8)__. Die Forscher führen dies __(9)__ zurück, dass sich die Beschäftigten besser erholen konnten. Viele Teilnehmer berichteten zudem, dass sie Familie und Beruf nun besser miteinander vereinbaren könnten. Ein Großteil der Betriebe will das Modell auch nach Ende des Projekts beibehalten.",
       "Allerdings zeigte sich auch, dass sich das Modell nicht in allen Branchen gleichermaßen __(10)__ lässt. In Pflegeeinrichtungen und im Einzelhandel, wo die Anwesenheit eine zentrale Rolle __(11)__, stießen die Betriebe an Grenzen. Hier wäre die Umstellung nur möglich gewesen, wenn zusätzliche Mitarbeiter eingestellt __(12)__ wären. Auch die Verdichtung der Arbeit wurde von manchen Teilnehmern als Belastung __(13)__. Wer die gleiche Menge an Aufgaben in kürzerer Zeit erledigen muss, steht __(14)__ erhöhtem Druck. Einige Betriebe kehrten deshalb vorzeitig zur Fünftagewoche zurück.",
       "Die Autoren der Studie empfehlen daher, die Umstellung erst nach einer genauen __(15)__ der Arbeitsabläufe vorzunehmen. Überflüssige Besprechungen etwa ließen sich häufig ohne Weiteres __(16)__. Auch feste Zeiten ohne Störungen durch E-Mails hätten sich bewährt. Ob die Viertagewoche flächendeckend eingeführt werden sollte, __(17)__ die Studie bewusst offen. Sie liefert jedoch Erkenntnisse, __(18)__ sich Unternehmen bei ihrer Entscheidung orientieren können.",
       "Von politischer Seite wird das Thema __(19)__ kontrovers diskutiert. Während Arbeitgeberverbände vor steigenden Kosten warnen, verweisen Gewerkschaften __(20)__ die positiven Erfahrungen aus dem Ausland. Einigkeit besteht lediglich darüber, dass weitere Untersuchungen __(21)__ sind. Nur so könne eine fundierte Entscheidung __(22)__ werden."
      ]
     },
     "aufgaben": [
      {
       "frage": "Was passt in Lücke 1?",
       "luecke": 1,
       "opt": [
        "nach",
        "um",
        "auf",
        "für"
       ],
       "loesung": 0,
       "fest": true,
       "erklaerung": "Feste Präposition: „die Forderung nach + Dativ\"."
      },
      {
       "frage": "Was passt in Lücke 2?",
       "luecke": 2,
       "opt": [
        "noch",
        "oder",
        "denn",
        "als"
       ],
       "loesung": 3,
       "fest": true,
       "erklaerung": "Zweiteiliger Konnektor: „sowohl … als auch\"."
      },
      {
       "frage": "Was passt in Lücke 3?",
       "luecke": 3,
       "opt": [
        "überfordern",
        "überprüfen",
        "übernehmen",
        "übersehen"
       ],
       "loesung": 1,
       "fest": true,
       "erklaerung": "Eine Annahme testet man: „eine Annahme überprüfen\"."
      },
      {
       "frage": "Was passt in Lücke 4?",
       "luecke": 4,
       "opt": [
        "An",
        "Bei",
        "In",
        "Mit"
       ],
       "loesung": 0,
       "fest": true,
       "erklaerung": "Feste Präposition: „sich beteiligen an + Dativ\"."
      },
      {
       "frage": "Was passt in Lücke 5?",
       "luecke": 5,
       "opt": [
        "anstatt",
        "statt",
        "außer",
        "ohne"
       ],
       "loesung": 3,
       "fest": true,
       "erklaerung": "„ohne dass\" = etwas geschieht nicht: Das Gehalt wurde nicht gekürzt."
      },
      {
       "frage": "Was passt in Lücke 6?",
       "luecke": 6,
       "opt": [
        "positive",
        "am positivsten",
        "positiver",
        "positiv"
       ],
       "loesung": 2,
       "fest": true,
       "erklaerung": "Vergleich mit „als\" verlangt den Komparativ: „positiver … als\"."
      },
      {
       "frage": "Was passt in Lücke 7?",
       "luecke": 7,
       "opt": [
        "stiegt",
        "gestiegen",
        "steigte",
        "stieg"
       ],
       "loesung": 3,
       "fest": true,
       "erklaerung": "„steigen\" ist unregelmäßig, Präteritum: „stieg\"."
      },
      {
       "frage": "Was passt in Lücke 8?",
       "luecke": 8,
       "opt": [
        "aus",
        "weg",
        "zurück",
        "ab"
       ],
       "loesung": 2,
       "fest": true,
       "erklaerung": "„zurückgehen\" = weniger werden."
      },
      {
       "frage": "Was passt in Lücke 9?",
       "luecke": 9,
       "opt": [
        "dazu",
        "davon",
        "darauf",
        "daran"
       ],
       "loesung": 2,
       "fest": true,
       "erklaerung": "Feste Präposition: „etwas auf etwas zurückführen\" → „darauf, dass\"."
      },
      {
       "frage": "Was passt in Lücke 10?",
       "luecke": 10,
       "opt": [
        "umzusetzen",
        "umsetzen",
        "umgesetzt",
        "umsetzend"
       ],
       "loesung": 1,
       "fest": true,
       "erklaerung": "„sich … lassen\" + Infinitiv (Passiversatz): „lässt sich umsetzen\"."
      },
      {
       "frage": "Was passt in Lücke 11?",
       "luecke": 11,
       "opt": [
        "hat",
        "spielt",
        "nimmt",
        "macht"
       ],
       "loesung": 1,
       "fest": true,
       "erklaerung": "Funktionsverbgefüge: „eine Rolle spielen\"."
      },
      {
       "frage": "Was passt in Lücke 12?",
       "luecke": 12,
       "opt": [
        "geworden",
        "wurden",
        "worden",
        "werden"
       ],
       "loesung": 2,
       "fest": true,
       "erklaerung": "Konjunktiv II Plusquamperfekt Passiv: „eingestellt worden wären\"."
      },
      {
       "frage": "Was passt in Lücke 13?",
       "luecke": 13,
       "opt": [
        "empfand",
        "empfunden",
        "empfinden",
        "empfindend"
       ],
       "loesung": 1,
       "fest": true,
       "erklaerung": "Vorgangspassiv Präteritum: „wurde … als Belastung empfunden\"."
      },
      {
       "frage": "Was passt in Lücke 14?",
       "luecke": 14,
       "opt": [
        "bei",
        "mit",
        "unter",
        "in"
       ],
       "loesung": 2,
       "fest": true,
       "erklaerung": "Feste Wendung: „unter Druck stehen\"."
      },
      {
       "frage": "Was passt in Lücke 15?",
       "luecke": 15,
       "opt": [
        "analytisch",
        "analysiert",
        "Analysieren",
        "Analyse"
       ],
       "loesung": 3,
       "fest": true,
       "erklaerung": "Nominalisierung nach Artikel und Adjektiv: „einer genauen Analyse\"."
      },
      {
       "frage": "Was passt in Lücke 16?",
       "luecke": 16,
       "opt": [
        "streichen",
        "strich",
        "streichend",
        "gestrichen"
       ],
       "loesung": 0,
       "fest": true,
       "erklaerung": "„sich … lassen\" + Infinitiv: „ließen sich streichen\"."
      },
      {
       "frage": "Was passt in Lücke 17?",
       "luecke": 17,
       "opt": [
        "macht",
        "stellt",
        "hält",
        "lässt"
       ],
       "loesung": 3,
       "fest": true,
       "erklaerung": "Feste Wendung: „eine Frage offen lassen\"."
      },
      {
       "frage": "Was passt in Lücke 18?",
       "luecke": 18,
       "opt": [
        "denen",
        "an denen",
        "an deren",
        "an die"
       ],
       "loesung": 1,
       "fest": true,
       "erklaerung": "„sich orientieren an + Dativ\", Plural (Erkenntnisse): „an denen\"."
      },
      {
       "frage": "Was passt in Lücke 19?",
       "luecke": 19,
       "opt": [
        "vor wie nach",
        "nach wie vor",
        "nach wie nach",
        "wie vor"
       ],
       "loesung": 1,
       "fest": true,
       "erklaerung": "Feste Wendung: „nach wie vor\" = immer noch."
      },
      {
       "frage": "Was passt in Lücke 20?",
       "luecke": 20,
       "opt": [
        "auf",
        "zu",
        "über",
        "an"
       ],
       "loesung": 0,
       "fest": true,
       "erklaerung": "Feste Präposition: „verweisen auf + Akkusativ\"."
      },
      {
       "frage": "Was passt in Lücke 21?",
       "luecke": 21,
       "opt": [
        "erfordert",
        "Erfordernis",
        "erforderlich",
        "erfordernd"
       ],
       "loesung": 2,
       "fest": true,
       "erklaerung": "Prädikatives Adjektiv mit „sein\": „erforderlich sein\" = nötig sein."
      },
      {
       "frage": "Was passt in Lücke 22?",
       "luecke": 22,
       "opt": [
        "gemacht",
        "gefasst",
        "gestellt",
        "getroffen"
       ],
       "loesung": 3,
       "fest": true,
       "erklaerung": "Funktionsverbgefüge: „eine Entscheidung treffen\", Passiv: „getroffen werden\"."
      }
     ]
    }
   ]
  }
 ]
};
