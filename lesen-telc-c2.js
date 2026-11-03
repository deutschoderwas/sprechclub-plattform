/* ============================================================
   deutschoderwas club — LESEN telc Deutsch C2

   Aufbau nach dem offiziellen telc-Format (Tipps zur Prüfungs-
   vorbereitung und Handbuch Deutsch C2, geprüft 03.11.2026). Jede
   Runde hat wie die Prüfung ein Oberthema. Alle Texte eigene.
   Erzeugt aus scratchpad/telcc2 mit bau.js.
   ============================================================ */

window.LESEN_TELC_C2 = {
 "niveau": "telcC2",
 "pruefung": "telc Deutsch C2",
 "minuten": 80,
 "punkte": 40,
 "intro": "Das Leseverstehen bei telc C2 dauert achtzig Minuten, drei Texte mit zusammen rund dreieinhalbtausend Wörtern: Absätze ordnen, ein langer Text mit Detailfragen und ein Text, bei dem es um das Gemeinte zwischen den Zeilen geht. Alle Texte einer Runde gehören wie in der Prüfung zu einem Oberthema.",
 "stufen": [
  {
   "nr": 1,
   "titel": "Struktur und Details",
   "zeichen": "🧭",
   "was": "Textlogik, lange Texte genau abgleichen."
  },
  {
   "nr": 2,
   "titel": "Zwischen den Zeilen",
   "zeichen": "🎭",
   "was": "Ironie, Haltung, Schlussfolgerung, Zeitplanung."
  },
  {
   "nr": 3,
   "titel": "Die Aufgabentypen",
   "zeichen": "🎯",
   "was": "Alle drei Teile einzeln."
  },
  {
   "nr": 4,
   "titel": "Die ganze Prüfung",
   "zeichen": "⏱️",
   "was": "25 Aufgaben, achtzig Minuten mit Uhr."
  }
 ],
 "bloecke": [
  {
   "id": "tc2l1",
   "stufe": 1,
   "titel": "Textlogik: Absätze über Verweise ordnen",
   "kurz": "Worauf „dieser Beschluss“, „erst die zweite“ und „Letzterer“ zurückgreifen",
   "ziel": "Nach diesem Block erkennst du am Anfang eines Absatzes, was unmittelbar davor stehen muss, und ordnest so die fünf vertauschten Absätze in Teil 1.",
   "zeichen": "🔗",
   "farbe": "turq",
   "aufgaben": [
    {
     "art": "wahl",
     "frage": "Absatz A endet mit: „… und so beschloss der Gemeinderat 1987, den alten Bahndamm zum Radweg umzubauen.“ Welcher Absatzanfang schließt am wahrscheinlichsten an?",
     "opt": [
      "Dieser Beschluss stieß zunächst auf wenig Gegenliebe.",
      "Der Bahndamm wurde im 19. Jahrhundert aufgeschüttet.",
      "Radfahren ist in der Gegend seit jeher beliebt."
     ],
     "loesung": 0,
     "erklaerung": "„Dieser Beschluss“ fasst den letzten Satz von A in einem Nomen zusammen; die anderen Anfänge greifen nichts Bestimmtes auf."
    },
    {
     "art": "wahl",
     "frage": "Ein Absatz beginnt mit „Erst die zweite Untersuchung …“. Was muss vorher im Text stehen?",
     "opt": [
      "eine erste Untersuchung, deren Ergebnis unvollständig oder umstritten war",
      "eine Definition des Wortes Untersuchung",
      "ein Zitat des Leiters der zweiten Untersuchung"
     ],
     "loesung": 0,
     "erklaerung": "„Erst die zweite“ setzt eine erste voraus, die etwas offen gelassen hat."
    },
    {
     "art": "wahl",
     "frage": "Ein Absatz beginnt mit „Gegen diese Deutung spricht allerdings …“. Was gilt?",
     "opt": [
      "Er kann überall stehen, weil „allerdings“ sehr häufig ist.",
      "Direkt davor muss eine Deutung vorgestellt werden, die er nun bestreitet.",
      "Er muss der letzte Absatz sein, weil er ein Fazit zieht."
     ],
     "loesung": 1,
     "erklaerung": "„Diese Deutung“ verweist zurück; der vorherige Absatz muss sie enthalten."
    },
    {
     "art": "wahl",
     "frage": "In einem Absatz heißt es: „Die ältere der beiden Schwestern erinnert sich anders.“ Was verrät der bestimmte Artikel?",
     "opt": [
      "Die Schwestern wurden bereits in einem früheren Absatz eingeführt.",
      "Die Schwestern erscheinen hier zum ersten Mal.",
      "Es handelt sich um eine allgemeine Aussage über Geschwister."
     ],
     "loesung": 0,
     "erklaerung": "„Die beiden Schwestern“ ist bekannte Information; eingeführt werden Personen meist mit unbestimmtem Artikel oder Namen."
    },
    {
     "art": "wahl",
     "frage": "Zwei Absätze beginnen mit „Damals …“ und „Heute …“. Welche Reihenfolge ist in einem Porträt am wahrscheinlichsten?",
     "opt": [
      "„Heute“ vor „Damals“, weil ein Text immer mit der Gegenwart einsteigt",
      "„Damals“ vor „Heute“, sofern kein anderer Verweis dagegen spricht",
      "Zeitwörter helfen beim Ordnen grundsätzlich nicht."
     ],
     "loesung": 1,
     "erklaerung": "Zeitwörter sind gute Hinweise, aber prüfe immer, ob Pronomen oder Nomen am Absatzanfang die Reihenfolge bestätigen."
    },
    {
     "art": "wahl",
     "frage": "Ein Absatz beginnt mit „Das Gegenteil war der Fall.“ Welcher Satz muss den vorigen Absatz abschließen?",
     "opt": [
      "Man hatte erwartet, dass die Besucherzahlen sinken würden.",
      "Die Besucherzahlen wurden jeden Monat erhoben.",
      "Im Museum arbeiten zwölf Angestellte."
     ],
     "loesung": 0,
     "erklaerung": "Ein „Gegenteil“ braucht eine Erwartung oder Behauptung direkt davor."
    },
    {
     "art": "wahl",
     "frage": "Ein Absatz enthält das Wort „Letztere“. Worauf achtest du im Absatz davor?",
     "opt": [
      "auf zwei genannte Personen oder Dinge, von denen die zweite gemeint ist",
      "auf die letzte Zeile des ganzen Textes",
      "auf das letzte Verb des Absatzes"
     ],
     "loesung": 0,
     "erklaerung": "„Erstere/Letztere“ setzt zwei Größen im Satz davor voraus."
    },
    {
     "art": "wahl",
     "frage": "Vier Absätze sind sicher geordnet, einer bleibt übrig, eine Lücke ist frei. Was tust du?",
     "opt": [
      "Ich lasse die Lücke frei, weil ich unsicher bin.",
      "Ich setze ihn ein und lese den Übergang davor und danach zur Kontrolle.",
      "Ich ordne noch einmal alle Absätze neu."
     ],
     "loesung": 1,
     "erklaerung": "Eine leere Lücke bringt sicher null Punkte; der Übergang zeigt dir, ob alles stimmt."
    }
   ]
  },
  {
   "id": "tc2l2",
   "stufe": 1,
   "titel": "Lange Texte: Aussagen genau abgleichen",
   "kurz": "Sinngemäß oder nur wörtlich ähnlich? Übertreibung und Verallgemeinerung erkennen",
   "ziel": "Nach diesem Block erkennst du in Teil 2, welche der drei Aussagen den Text wirklich trifft und welche ihn übertreiben, verallgemeinern oder nur Wörter aufgreifen.",
   "zeichen": "🔎",
   "farbe": "gold",
   "aufgaben": [
    {
     "art": "wahl",
     "frage": "Im Text: „Viele der Befragten gaben an, sich an Feiertagen häufiger zu langweilen.“ Welche Aussage gibt das richtig wieder?",
     "opt": [
      "Ein großer Teil der Befragten empfindet Feiertage öfter als langweilig.",
      "Die meisten Menschen langweilen sich an Feiertagen.",
      "Alle Befragten langweilen sich an Feiertagen."
     ],
     "loesung": 0,
     "erklaerung": "„Viele“ ist nicht „die meisten“ und schon gar nicht „alle“; die richtige Aussage bleibt bei den Befragten."
    },
    {
     "art": "wahl",
     "frage": "Im Text: „Die Verfasserin hält die Methode für brauchbar, wenn auch nicht für ausgereift.“ Welche Aussage passt?",
     "opt": [
      "Die Verfasserin lehnt die Methode ab.",
      "Die Verfasserin sieht die Methode mit Einschränkungen positiv.",
      "Die Verfasserin hält die Methode für fertig entwickelt."
     ],
     "loesung": 1,
     "erklaerung": "„Brauchbar“ ist positiv, „nicht ausgereift“ die Einschränkung."
    },
    {
     "art": "wahl",
     "frage": "Eine der drei Aussagen enthält dieselben Wörter wie der Text. Was gilt?",
     "opt": [
      "Sie ist deshalb richtig.",
      "Gleiche Wörter beweisen nichts; prüfe, ob der Sinn im Zusammenhang stimmt.",
      "Umschreibungen sind in Teil 2 immer falsch."
     ],
     "loesung": 1,
     "erklaerung": "Ablenker greifen gern Wörter aus dem Text auf und verändern den Sinn."
    },
    {
     "art": "wahl",
     "frage": "Im Text: „Seit Einführung der Regel ist die Zahl der Beschwerden zurückgegangen.“ Welche Aussage geht zu weit?",
     "opt": [
      "Nach Einführung der Regel gab es weniger Beschwerden.",
      "Die Zahl der Beschwerden sank nach dem Start der Regel.",
      "Die Regel hat das Problem der Beschwerden gelöst."
     ],
     "loesung": 2,
     "erklaerung": "Ein Rückgang ist keine Lösung, und der Text behauptet auch keinen ursächlichen Zusammenhang."
    },
    {
     "art": "wahl",
     "frage": "Im Text: „Zwar mag es Ausnahmen geben, doch in der Regel ziehen junge Familien aus der Innenstadt weg.“ Welche Aussage passt?",
     "opt": [
      "Meist verlassen junge Familien die Innenstadt.",
      "Junge Familien ziehen ausnahmslos aus der Innenstadt weg.",
      "Junge Familien bleiben meist in der Innenstadt."
     ],
     "loesung": 0,
     "erklaerung": "„In der Regel“ entspricht „meist“; „ausnahmslos“ verallgemeinert."
    },
    {
     "art": "wahl",
     "frage": "Im Text: „Die Ministerin wollte die Zahlen nicht kommentieren.“ Welche Aussage passt?",
     "opt": [
      "Die Ministerin bestritt die Zahlen.",
      "Die Ministerin kannte die Zahlen nicht.",
      "Die Ministerin äußerte sich nicht zu den Zahlen."
     ],
     "loesung": 2,
     "erklaerung": "Nicht kommentieren heißt weder bestreiten noch nicht kennen."
    },
    {
     "art": "wahl",
     "frage": "Im Text: „Kaum jemand, so der Autor, habe mit diesem Ergebnis gerechnet.“ Welche Aussage passt?",
     "opt": [
      "Der Autor selbst war vom Ergebnis überrascht.",
      "Niemand hatte das Ergebnis erwartet.",
      "Nach Ansicht des Autors kam das Ergebnis für fast alle unerwartet."
     ],
     "loesung": 2,
     "erklaerung": "„Kaum jemand“ ist nicht „niemand“, und es geht um die Einschätzung des Autors, nicht um sein eigenes Gefühl."
    },
    {
     "art": "wahl",
     "frage": "Du findest zu einer Aufgabe in Teil 2 die Stelle nicht sofort. Wie gehst du vor?",
     "opt": [
      "Ich suche weiter, bis ich sie finde, egal wie lange es dauert.",
      "Ich markiere die Aufgabe, gehe weiter und suche später zwischen den Fundstellen der Nachbaraufgaben.",
      "Ich kreuze die längste Aussage an."
     ],
     "loesung": 1,
     "erklaerung": "Die Aufgaben folgen dem Textverlauf; die Stelle liegt meist zwischen den Stellen der Aufgabe davor und danach."
    }
   ]
  },
  {
   "id": "tc2l3",
   "stufe": 2,
   "titel": "Implizites verstehen: Ironie, Haltung, Schlussfolgerung",
   "kurz": "Was der Text meint, ohne es zu sagen",
   "ziel": "Nach diesem Block erkennst du in Teil 3, wann ein Abschnitt eine Haltung oder Ironie nur andeutet, und unterscheidest echte Treffer von Aussagen, die nur zum Thema passen (x).",
   "zeichen": "🎭",
   "farbe": "rot",
   "aufgaben": [
    {
     "art": "wahl",
     "frage": "„Die Gemeinde hat wieder einmal bewiesen, wie schnell sie handeln kann: Nach nur elf Jahren steht die neue Ampel.“ Was meint der Verfasser?",
     "opt": [
      "Er lobt die Gemeinde für ihr Tempo.",
      "Er kritisiert ironisch, wie langsam die Gemeinde ist.",
      "Er hält die Ampel für überflüssig."
     ],
     "loesung": 1,
     "erklaerung": "„Schnell“ und „nur elf Jahre“ widersprechen sich; der Widerspruch ist das Signal für Ironie."
    },
    {
     "art": "wahl",
     "frage": "„Sie erzählt das lachend. Aber nur kurz.“ Was legt der zweite Satz nahe?",
     "opt": [
      "Hinter dem Lachen steckt etwas Ernstes.",
      "Die Frau hat keinen Humor.",
      "Die Frau will das Gespräch beenden, weil sie müde ist."
     ],
     "loesung": 0,
     "erklaerung": "Das abgebrochene Lachen zeigt, dass das Thema sie eigentlich beschäftigt."
    },
    {
     "art": "wahl",
     "frage": "„Er habe keine Angst vor dem Ruhestand, sagt er. Dann fragt er zum dritten Mal, ob man ihn bei Fragen weiter anrufen dürfe.“ Welche Schlussfolgerung ist berechtigt?",
     "opt": [
      "Er freut sich vorbehaltlos auf den Ruhestand.",
      "Sein Verhalten widerspricht dem, was er sagt.",
      "Er telefoniert ungern."
     ],
     "loesung": 1,
     "erklaerung": "Wenn Handlung und Worte auseinandergehen, zeigt der Text die Haltung über die Handlung."
    },
    {
     "art": "wahl",
     "frage": "Aussage: „Die Autorin hält die Reform für gescheitert.“ Im Abschnitt steht: „Die Reform hat vieles verändert, nur nicht das, was sie verändern sollte.“ Passt das?",
     "opt": [
      "Ja, der Satz drückt Scheitern aus, ohne das Wort zu benutzen.",
      "Nein, denn im Text steht, dass sich vieles verändert hat.",
      "Nein, denn das Wort „gescheitert“ fehlt."
     ],
     "loesung": 0,
     "erklaerung": "In Teil 3 steht die Lösung fast nie wörtlich da; das Ziel der Reform wurde verfehlt."
    },
    {
     "art": "wahl",
     "frage": "Woran erkennst du in einem Porträt oft die Haltung des Verfassers, obwohl er sie nicht ausspricht?",
     "opt": [
      "an der Länge der Absätze",
      "an der Auswahl der Details und an dem, was er unkommentiert neben eine Aussage stellt",
      "an der Zahl der Zitate"
     ],
     "loesung": 1,
     "erklaerung": "Ein Detail, das einer Behauptung widerspricht, ist ein typisches Mittel leiser Kritik."
    },
    {
     "art": "wahl",
     "frage": "Eine Aussage scheint zu zwei Abschnitten zu passen. Was tust du?",
     "opt": [
      "Ich nehme den Abschnitt, den ich zuerst gefunden habe.",
      "Ich prüfe, wo die Haltung oder Folgerung wirklich gemeint ist und wo nur das Thema vorkommt.",
      "Ich wähle x, weil die Aussage nicht eindeutig ist."
     ],
     "loesung": 1,
     "erklaerung": "Das Thema taucht oft mehrfach auf; die gemeinte Haltung steht nur an einer Stelle."
    },
    {
     "art": "wahl",
     "frage": "Wann ist x die richtige Lösung?",
     "opt": [
      "wenn die Aussage zum Thema passt, aber in keinem Abschnitt gemeint oder nahegelegt wird",
      "wenn die Aussage andere Wörter benutzt als der Text",
      "wenn du die Stelle nicht innerhalb einer Minute findest"
     ],
     "loesung": 0,
     "erklaerung": "x-Aussagen klingen plausibel und greifen Personen oder Begriffe aus dem Text auf, behaupten aber etwas, das nirgends steht."
    },
    {
     "art": "wahl",
     "frage": "„Wir haben nichts gegen Besuch. Wir haben nur selten welchen.“ Was schwingt mit?",
     "opt": [
      "Die Sprecher wollen keinen Besuch.",
      "Ein leiser Vorwurf, dass sich zu wenige Menschen melden.",
      "Die Sprecher wohnen zu weit weg."
     ],
     "loesung": 1,
     "erklaerung": "Der zweite Satz klingt sachlich, enthält aber eine Enttäuschung."
    }
   ]
  },
  {
   "id": "tc2l4",
   "stufe": 2,
   "titel": "Zeitmanagement: 80 Minuten Leseverstehen",
   "kurz": "Zeit einteilen, Punkte sichern, Antwortbogen nicht vergessen",
   "ziel": "Nach diesem Block weißt du, wie du die 80 Minuten auf drei Teile verteilst, wo die meisten Punkte liegen und was du tust, wenn die Zeit knapp wird.",
   "zeichen": "⏱️",
   "farbe": "lila",
   "aufgaben": [
    {
     "art": "wahl",
     "frage": "Leseverstehen hat drei Teile und dauert 80 Minuten. Welche grobe Einteilung ist sinnvoll?",
     "opt": [
      "Teil 1 etwa 15, Teil 2 etwa 30, Teil 3 etwa 30 Minuten, dazu fünf Minuten Reserve",
      "Teil 2 etwa 50 Minuten, weil der Text am längsten ist",
      "Teil 1 etwa 40 Minuten, weil er am Anfang steht"
     ],
     "loesung": 0,
     "erklaerung": "Teil 3 bringt die meisten Punkte und verdient so viel Zeit wie der lange Text in Teil 2."
    },
    {
     "art": "wahl",
     "frage": "Wie viele der 40 Lesepunkte bringt Teil 3?",
     "opt": [
      "10",
      "20",
      "30"
     ],
     "loesung": 1,
     "erklaerung": "Zehn Aufgaben zu je zwei Punkten: die Hälfte der Punkte im Leseverstehen."
    },
    {
     "art": "wahl",
     "frage": "Wie gehst du den langen Text in Teil 2 (1800 bis 2000 Wörter) am besten an?",
     "opt": [
      "Erst den ganzen Text gründlich lesen, dann alle Aufgaben.",
      "Aufgabe für Aufgabe vorgehen und den Text abschnittsweise mitlesen.",
      "Nur die Aufgaben lesen und die Antworten nach Gefühl wählen."
     ],
     "loesung": 1,
     "erklaerung": "Die Aufgaben folgen dem Text; so liest du jede Stelle nur einmal gründlich."
    },
    {
     "art": "wahl",
     "frage": "Teil 3 hat 13 Abschnitte und 10 Aussagen. Was ist ein effizienter Start?",
     "opt": [
      "Erst alle Aussagen lesen und das Wesentliche markieren, dann den Text Abschnitt für Abschnitt lesen und zuordnen.",
      "Jeden Abschnitt dreimal lesen, bevor man die Aussagen ansieht.",
      "Zuerst die zwei x-Aussagen suchen."
     ],
     "loesung": 0,
     "erklaerung": "Wer die Aussagen kennt, erkennt beim Lesen sofort, welcher Abschnitt eine davon trifft."
    },
    {
     "art": "wahl",
     "frage": "Nach 70 Minuten sind in Teil 3 noch drei Aussagen offen. Was tust du?",
     "opt": [
      "Ich lasse sie leer, falsche Antworten kosten Punkte.",
      "Ich fange Teil 1 noch einmal von vorn an.",
      "Ich ordne sie nach bestem Eindruck den freien Abschnitten zu, denn falsche Antworten führen nicht zu Abzug."
     ],
     "loesung": 2,
     "erklaerung": "Eine leere Antwort bringt sicher nichts; eine begründete Vermutung hat eine Chance."
    },
    {
     "art": "wahl",
     "frage": "Wann überträgst du deine Lösungen auf den Antwortbogen?",
     "opt": [
      "In der letzten Minute, alles auf einmal.",
      "Nach jedem Teil, damit am Ende keine Zeit fehlt.",
      "Gar nicht, gewertet wird das Aufgabenheft."
     ],
     "loesung": 1,
     "erklaerung": "Gewertet wird nur der Antwortbogen; wer bis zum Schluss wartet, verliert im Zweifel alles."
    },
    {
     "art": "wahl",
     "frage": "In Teil 1 hängst du seit acht Minuten an einem Absatz. Was ist sinnvoll?",
     "opt": [
      "Weitermachen, bis er sitzt.",
      "Die sicheren Absätze eintragen, den Rest vorläufig einsetzen und später mit frischem Blick zurückkommen.",
      "Teil 1 ganz auslassen."
     ],
     "loesung": 1,
     "erklaerung": "Oft löst sich die Reihenfolge, wenn die sicheren Absätze stehen und du später noch einmal liest."
    },
    {
     "art": "wahl",
     "frage": "Wofür nutzt du die Reserve am Ende am besten?",
     "opt": [
      "Die x-Lösungen in Teil 3 noch einmal prüfen: Passt eine Aussage doch zu einem noch freien Abschnitt?",
      "Notizen zum Oberthema für den Aufsatz schreiben.",
      "Den Text aus Teil 2 noch einmal ganz lesen."
     ],
     "loesung": 0,
     "erklaerung": "Pro Satz gibt es meist nur wenige x-Lösungen; zu viele x sind ein Hinweis, noch einmal zu prüfen."
    }
   ]
  }
 ],
 "teile": [
  {
   "nr": 1,
   "art": "textwahl",
   "name": "Lesen: Textlogik",
   "kurz": "Fünf vertauschte Absätze in die richtige Reihenfolge",
   "was": "Ein kurzer Text in sechs Absätzen. Der Anfang ist vorgegeben, die anderen fünf Absätze A bis E sind vertauscht. Du findest die richtige Reihenfolge. In der Prüfung zählt jede Stelle zwei Punkte.",
   "tipp": "Achte auf Rückverweise: „dieser\", „solche\", „zweitens\", „dagegen\". Jeder Absatz muss an das Ende des vorigen anschließen.",
   "zeichen": "🧩",
   "farbe": "turq",
   "punkte": 10,
   "runden": [
    {
     "id": "c2l1s1",
     "titel": "Vertrauen",
     "text": {
      "sorte": "zeitung",
      "quelle": "Landpost am Wochenende, Kommentar von Henrike Ostendorf",
      "titel": "Die Dose am Feldrand",
      "zeilen": [
       "Anfang: Am Ortsausgang von Wehrenbrook steht seit elf Jahren ein Holzhäuschen mit Kartoffeln, Eiern und einer Blechdose. Daneben hängt ein Schild in Kreideschrift: „Bitte passend zahlen. Danke, Familie Lüttjohann.\" Wer vorbeifährt, hält kurz an, nimmt sich ein Netz Zwiebeln und wirft drei Euro in den Schlitz. Niemand schaut zu.",
       "Absatz A: Die Lüttjohanns haben trotzdem nachgerechnet. Im ersten Jahr fehlten ihnen nach eigener Schätzung rund vier Prozent der Einnahmen, im zehnten noch knapp zwei. Eine Verkäuferin, sagt der Bauer, würde ihn ein Vielfaches kosten, und Zwiebeln seien nun einmal kein Gold.",
       "Absatz B: Ganz ohne Enttäuschung geht es freilich nicht. Zweimal wurde die Dose gestohlen, einmal samt Häuschen. Die Lüttjohanns haben beide Male ein neues gezimmert. Man könne, sagt die Bäuerin, doch nicht wegen zweier Leute zweitausend andere bestrafen. Die neue Dose ist übrigens aus Holz und hat kein Schloss.",
       "Absatz C: Diese Fremden zahlen also offenbar nicht aus Angst, erwischt zu werden. Sie zahlen, weil ihnen jemand etwas zutraut. Vertrauen ist eine Vorleistung, die den anderen in die Pflicht nimmt, und die meisten Menschen möchten dieser Pflicht gerecht werden, gerade wenn es keiner merkt.",
       "Absatz D: Genau dieses Niemand irritiert Ökonomen seit Jahrzehnten. Nach ihren Modellen müsste die Dose regelmäßig leer sein, denn wer sich unbeobachtet weiß, nimmt mit, was er kriegen kann. So jedenfalls lautet die Annahme, auf der ganze Lehrbücher ruhen. Der Mensch dieser Lehrbücher ist ein kühler Rechner, der keine Gelegenheit auslässt.",
       "Absatz E: Aufschlussreicher als diese Zahlen ist allerdings, wer da eigentlich zahlt. Es sind keineswegs bloß die Leute aus dem Dorf, die einander ohnehin kennen und beim Bäcker wiedertreffen. Auch Radfahrer aus Hamburg, die nie wiederkommen werden, legen ihr Geld in die Dose, manchmal mit einem Zettel, auf dem sie sich für fehlendes Kleingeld entschuldigen."
      ]
     },
     "aufgaben": [
      {
       "frage": "Welcher Absatz folgt auf den Anfang?",
       "opt": [
        "Absatz A",
        "Absatz B",
        "Absatz C",
        "Absatz D",
        "Absatz E"
       ],
       "loesung": 3,
       "fest": true,
       "erklaerung": "Absatz 2 greift mit „dieses Niemand\" den letzten Satz von Absatz 1 auf („Niemand schaut zu\")."
      },
      {
       "frage": "Welcher Absatz kommt als nächster? (Stelle 3)",
       "opt": [
        "Absatz A",
        "Absatz B",
        "Absatz C",
        "Absatz D",
        "Absatz E"
       ],
       "loesung": 0,
       "fest": true,
       "erklaerung": "Absatz 3 setzt mit „trotzdem nachgerechnet\" der Annahme der Ökonomen aus Absatz 2 die Erfahrung der Familie entgegen."
      },
      {
       "frage": "Welcher Absatz kommt als nächster? (Stelle 4)",
       "opt": [
        "Absatz A",
        "Absatz B",
        "Absatz C",
        "Absatz D",
        "Absatz E"
       ],
       "loesung": 4,
       "fest": true,
       "erklaerung": "„Diese Zahlen\" in Absatz 4 meint die Prozentangaben und Kosten aus Absatz 3."
      },
      {
       "frage": "Welcher Absatz kommt als nächster? (Stelle 5)",
       "opt": [
        "Absatz A",
        "Absatz B",
        "Absatz C",
        "Absatz D",
        "Absatz E"
       ],
       "loesung": 2,
       "fest": true,
       "erklaerung": "„Diese Fremden\" in Absatz 5 bezieht sich auf die Radfahrer aus Hamburg in Absatz 4."
      },
      {
       "frage": "Welcher Absatz kommt als nächster? (Stelle 6)",
       "opt": [
        "Absatz A",
        "Absatz B",
        "Absatz C",
        "Absatz D",
        "Absatz E"
       ],
       "loesung": 1,
       "fest": true,
       "erklaerung": "Absatz 6 schränkt mit „freilich\" die positive Deutung aus Absatz 5 ein und schließt den Text mit einer Pointe."
      }
     ]
    },
    {
     "id": "c2l1s2",
     "titel": "Langeweile",
     "text": {
      "sorte": "zeitung",
      "quelle": "Das Wochenblatt, Glosse von Matthias Brenneke",
      "titel": "Platz sieben",
      "zeilen": [
       "Anfang: Neulich, im Wartezimmer meines Hausarztes, ist mir der Akku ausgegangen. Ich hatte weder ein Buch dabei noch einen Stift. Elf Prozent beim Betreten, dann ein kurzes Flackern, dann nichts mehr. Vor mir, so die Sprechstundenhilfe, seien „noch so vier, fünf Leute\".",
       "Absatz A: Als er meinen Blick bemerkte, schob er mir wortlos die untere Hälfte des Blattes herüber. So lösten wir zu zweit „Nebenfluss der Donau\" mit vier Buchstaben und „Zustand ohne Beschäftigung\" mit zehn. Das zweite schrieb er ohne Zögern hin.",
       "Absatz B: Einer von ihnen bildete dann doch eine Ausnahme. Der ältere Herr auf Platz sieben hielt kein Gerät in der Hand, sondern einen Bleistift, und füllte mit großer Ruhe ein Kreuzworträtsel aus, das er sich offenbar aus der Zeitung herausgerissen hatte. Ab und zu leckte er an der Bleistiftspitze, eine Geste, die ich seit meiner Kindheit nicht mehr gesehen hatte.",
       "Absatz C: Zuerst tat ich, was man in solchen Lagen tut, und griff nach den Zeitschriften. Sie stammten aus dem Frühjahr 2019 und behandelten ausschließlich Königshäuser und Diäten, zwei Gebiete, auf denen ich mir keine Meinung zutraue. Eine fragte auf dem Titel, ob eine Prinzessin heimlich geheiratet habe. Ich werde es nie erfahren.",
       "Absatz D: Als ich endlich aufgerufen wurde, war ich beinahe enttäuscht. Seither frage ich mich, ob Langeweile wirklich das Gegenteil von Unterhaltung ist oder nicht eher ihr Vorzimmer. Mein Telefon lade ich jedenfalls nicht mehr ganz so gewissenhaft auf.",
       "Absatz E: Danach blieb mir nur noch der Raum selbst. Ich zählte die Stühle, vierzehn, und die Topfpflanzen, drei, davon eine aus Plastik. Zuletzt zählte ich die Menschen, die ausnahmslos auf ihre Telefone starrten, als hinge ihr Leben am nächsten Wisch."
      ]
     },
     "aufgaben": [
      {
       "frage": "Welcher Absatz folgt auf den Anfang?",
       "opt": [
        "Absatz A",
        "Absatz B",
        "Absatz C",
        "Absatz D",
        "Absatz E"
       ],
       "loesung": 2,
       "fest": true,
       "erklaerung": "Absatz 2 beginnt mit „Zuerst\" und schildert die erste Reaktion auf den leeren Akku aus Absatz 1."
      },
      {
       "frage": "Welcher Absatz kommt als nächster? (Stelle 3)",
       "opt": [
        "Absatz A",
        "Absatz B",
        "Absatz C",
        "Absatz D",
        "Absatz E"
       ],
       "loesung": 4,
       "fest": true,
       "erklaerung": "„Danach blieb mir nur noch der Raum\" setzt voraus, dass die Zeitschriften aus Absatz 2 schon ausgeschieden sind."
      },
      {
       "frage": "Welcher Absatz kommt als nächster? (Stelle 4)",
       "opt": [
        "Absatz A",
        "Absatz B",
        "Absatz C",
        "Absatz D",
        "Absatz E"
       ],
       "loesung": 1,
       "fest": true,
       "erklaerung": "„Einer von ihnen\" in Absatz 4 meint die Menschen mit Telefonen, die am Ende von Absatz 3 genannt werden."
      },
      {
       "frage": "Welcher Absatz kommt als nächster? (Stelle 5)",
       "opt": [
        "Absatz A",
        "Absatz B",
        "Absatz C",
        "Absatz D",
        "Absatz E"
       ],
       "loesung": 0,
       "fest": true,
       "erklaerung": "„Als er meinen Blick bemerkte\" knüpft an den älteren Herrn auf Platz sieben aus Absatz 4 an."
      },
      {
       "frage": "Welcher Absatz kommt als nächster? (Stelle 6)",
       "opt": [
        "Absatz A",
        "Absatz B",
        "Absatz C",
        "Absatz D",
        "Absatz E"
       ],
       "loesung": 3,
       "fest": true,
       "erklaerung": "Absatz 6 beendet mit „endlich aufgerufen\" die Wartesituation und zieht das Fazit."
      }
     ]
    },
    {
     "id": "c2l1s3",
     "titel": "Erinnern und Vergessen",
     "text": {
      "sorte": "zeitung",
      "quelle": "Hefte für Gegenwart, Essay von Annegret Sommerfeld",
      "titel": "Salz wie bei Tante Gerda",
      "zeilen": [
       "Anfang: Meine Großmutter hat nie ein Rezept aufgeschrieben, und trotzdem besitzt unsere Familie ein Kochbuch von ihr. Es ist ein Schulheft mit kariertem Papier, das meine Mutter Anfang der Achtzigerjahre angelegt hat, während die Großmutter am Herd stand und ihr über die Schulter hinweg diktierte. Sie selbst hat nie hineingeschaut.",
       "Absatz A: Alle drei erinnerten sich an ein anderes Gericht. Meine Mutter schwor auf Senf und Gewürzgurke, die Tante auf durchwachsenen Speck, und der Cousin behauptete, es habe sonntags nie Rouladen gegeben, sondern Gulasch. Er klang dabei, als hätte er auf diese Frage seit Jahren gewartet.",
       "Absatz B: Gekocht wird bei uns trotzdem weiter, jedes Jahr an ihrem Geburtstag, abwechselnd nach einer der drei Fassungen. Das Heft liegt dabei aufgeschlagen auf der Anrichte. Hineinschauen tut keiner mehr, aber weglegen möchte es auch keiner.",
       "Absatz C: Diese Lücke ist nicht die einzige. Als ich vor drei Jahren die Rinderrouladen nachkochen wollte, schmeckten sie nach nichts, woran ich mich erinnern konnte. Ich rief meine Mutter an, dann meine Tante, schließlich einen Cousin in Kassel.",
       "Absatz D: Zuerst hielt ich diesen Streit für ein Ärgernis. Inzwischen glaube ich, dass er die eigentliche Überlieferung ist. Jeder verteidigt seine Fassung, als ginge es um ein Erbe, und vielleicht geht es genau darum. Was wir „Großmutters Küche\" nennen, existiert nur noch als Verhandlung zwischen Menschen, die damals mit am Tisch saßen und jeweils etwas anderes geschmeckt haben.",
       "Absatz E: Dieses Heft ist allerdings ein merkwürdiges Dokument. Mengenangaben fehlen fast völlig. Stattdessen stehen dort Sätze wie „Mehl, bis es sich richtig anfühlt\" oder „Salz wie bei Tante Gerda\". Auch die Backzeiten sind eher Stimmungen als Angaben: „bis es duftet\", „bis der Opa fragt\". Wer Tante Gerda war, weiß heute niemand mehr."
      ]
     },
     "aufgaben": [
      {
       "frage": "Welcher Absatz folgt auf den Anfang?",
       "opt": [
        "Absatz A",
        "Absatz B",
        "Absatz C",
        "Absatz D",
        "Absatz E"
       ],
       "loesung": 4,
       "fest": true,
       "erklaerung": "„Dieses Heft\" in Absatz 2 verweist auf das Schulheft, das in Absatz 1 eingeführt wird."
      },
      {
       "frage": "Welcher Absatz kommt als nächster? (Stelle 3)",
       "opt": [
        "Absatz A",
        "Absatz B",
        "Absatz C",
        "Absatz D",
        "Absatz E"
       ],
       "loesung": 2,
       "fest": true,
       "erklaerung": "„Diese Lücke ist nicht die einzige\" knüpft an die vergessene Tante Gerda am Ende von Absatz 2 an."
      },
      {
       "frage": "Welcher Absatz kommt als nächster? (Stelle 4)",
       "opt": [
        "Absatz A",
        "Absatz B",
        "Absatz C",
        "Absatz D",
        "Absatz E"
       ],
       "loesung": 0,
       "fest": true,
       "erklaerung": "„Alle drei\" in Absatz 4 sind Mutter, Tante und Cousin, die in Absatz 3 angerufen werden."
      },
      {
       "frage": "Welcher Absatz kommt als nächster? (Stelle 5)",
       "opt": [
        "Absatz A",
        "Absatz B",
        "Absatz C",
        "Absatz D",
        "Absatz E"
       ],
       "loesung": 3,
       "fest": true,
       "erklaerung": "„Diesen Streit\" in Absatz 5 meint die widersprüchlichen Erinnerungen aus Absatz 4."
      },
      {
       "frage": "Welcher Absatz kommt als nächster? (Stelle 6)",
       "opt": [
        "Absatz A",
        "Absatz B",
        "Absatz C",
        "Absatz D",
        "Absatz E"
       ],
       "loesung": 1,
       "fest": true,
       "erklaerung": "Absatz 6 nimmt mit „drei Fassungen\" die drei Versionen auf und schließt mit „trotzdem\" an die Deutung in Absatz 5 an."
      }
     ]
    }
   ]
  },
  {
   "nr": 2,
   "art": "textwahl",
   "name": "Lesen: Detailverstehen",
   "kurz": "Ein langer Text, zehn Aufgaben mit drei Aussagen",
   "was": "Ein langer Text von fast zweitausend Wörtern. Zu jeder Aufgabe drei Aussagen, nur eine steht sinngemäß im Text.",
   "tipp": "Die falschen Aussagen übertreiben, verallgemeinern oder vertauschen ein Detail. Prüf jedes Wort gegen den Text.",
   "zeichen": "📖",
   "farbe": "gold",
   "punkte": 10,
   "runden": [
    {
     "id": "c2l2s1",
     "titel": "Vertrauen",
     "text": {
      "sorte": "zeitung",
      "quelle": "Denkraum. Magazin für Gesellschaft, Interview: Paula Rehbein",
      "titel": "„Wir öffnen die Tür lieber einem Fremden mit Sternen\"",
      "zeilen": [
       "Konrad Assmann, 58, lehrt Wirtschaftssoziologie in Leipzig und leitet dort seit 2014 eine Langzeitstudie, für die jedes Jahr rund 3400 Menschen befragt werden, wem sie wann und warum vertrauen. Ein Gespräch über Sterne, Siegel und die Frage, warum wir einem Unbekannten aus dem Internet unsere Wohnung überlassen, dem Nachbarn aber nicht den Haustürschlüssel.",
       "Denkraum: Herr Assmann, Sie haben kürzlich gesagt, die Deutschen seien ein Volk von Misstrauischen, die ständig Fremden vertrauen. Wie passt das zusammen?",
       "Assmann: Besser, als man denkt. Wenn wir ganz allgemein fragen, ob man den meisten Menschen vertrauen kann, sagt gut ein Drittel ja. Dieser Wert ist seit Jahren erstaunlich stabil, er bewegt sich kaum um zwei Prozentpunkte. Gleichzeitig übernachten dieselben Leute in Wohnungen von Fremden, steigen zu Fremden ins Auto und überweisen Geld an Verkäufer, deren echten Namen sie nie erfahren. Das allgemeine Misstrauen ist eine Haltung, das konkrete Vertrauen ist eine Praxis. Und eine Praxis folgt anderen Regeln als eine Meinung, die man am Telefon einem Interviewer mitteilt.",
       "Denkraum: Welchen Regeln?",
       "Assmann: Vor allem der Regel der Absicherung. Niemand vertraut im Netz einem Fremden einfach so. Man vertraut einem System, das diesen Fremden bewertet, das die Zahlung zurückhält, bis die Ware angekommen ist, und das im Streitfall schlichtet. Genau genommen vertrauen wir da gar nicht dem Menschen, sondern der Plattform. Der Mensch ist nur das Gesicht, das sie uns zeigt, mit Profilfoto und einem freundlichen Satz über seine Hobbys.",
       "Denkraum: Dann ist das gar kein echtes Vertrauen?",
       "Assmann: Doch, aber eine bestimmte Sorte. In der Soziologie unterscheidet man grob zwischen persönlichem Vertrauen und Systemvertrauen. Persönliches Vertrauen entsteht über Zeit, über gemeinsame Erfahrungen, über Gesichter, die man wiedererkennt. Systemvertrauen setzt auf Regeln und Institutionen. Wenn Sie Ihr Geld zur Bank bringen, kennen Sie den Filialleiter in der Regel auch nicht. Sie verlassen sich darauf, dass es eine Aufsicht gibt, eine Einlagensicherung, Gerichte. Neu ist eigentlich nur, dass wir dieses Systemvertrauen heute auf Situationen übertragen, die früher rein persönlich geregelt waren: ein Zimmer untervermieten, eine Bohrmaschine verleihen, jemanden auf das eigene Kind aufpassen lassen.",
       "Denkraum: Hat es so etwas früher wirklich nicht gegeben?",
       "Assmann: Es hat Vorläufer gegeben, und die sind lehrreich. Die Kaufleute der Hanse haben mit Partnern in Brügge oder Nowgorod gehandelt, die sie oft nie zu Gesicht bekamen. Das ging nur, weil es Netzwerke gab, in denen sich herumsprach, wer betrog. Wer einmal als unzuverlässig galt, bekam in keinem Kontor mehr Ware. Das war im Grunde ein Bewertungssystem, nur sehr viel langsamer, und es beruhte auf Briefen statt auf Sternen. Der Unterschied liegt woanders: Damals hat eine überschaubare Gruppe von Kaufleuten einander über Jahrzehnte beobachtet. Heute beobachten Millionen einander, und zwar flüchtig.",
       "Denkraum: Was heißt flüchtig?",
       "Assmann: Eine Bewertung im Netz kostet zwanzig Sekunden. Sie wird meist unmittelbar nach dem Erlebnis abgegeben, oft aus reiner Höflichkeit. Wir sehen in unseren Daten, dass ein großer Teil der Leute, die einer Unterkunft fünf Sterne geben, im anschließenden Fragebogen durchaus Mängel nennt: ein schmutziges Bad, eine laute Straße, ein Gastgeber, der nicht ans Telefon ging. Gefragt, warum sie dennoch die Bestnote vergeben haben, sagen viele, sie hätten dem Vermieter nicht schaden wollen. Er sei ja nett gewesen.",
       "Denkraum: Das klingt fast rührend.",
       "Assmann: Es ist auch rührend, aber es hat Folgen. Wenn fast alle fünf Sterne vergeben, sagen fünf Sterne nichts mehr. Wir haben das bei einem Fahrdienst untersucht, dessen Namen ich hier nicht nennen möchte. Dort lag der Durchschnitt der Fahrer bei 4,8. Ein Fahrer mit 4,6 galt intern bereits als Problemfall und bekam weniger Aufträge. Eine Skala, die eigentlich von eins bis fünf reicht, wird so in der Praxis zu einer Skala zwischen 4,5 und 5. Die Kunden wissen das übrigens nicht. Die meisten halten 4,6 für eine ausgezeichnete Note.",
       "Denkraum: Wer verliert bei diesem Spiel?",
       "Assmann: Zuerst die Ehrlichen. Wer als Kunde tatsächlich drei Sterne vergibt, weil er die Fahrt mittelmäßig fand, gefährdet damit unter Umständen ein Einkommen. Viele ahnen das und lassen es deshalb bleiben. Das System erzeugt also eine Art Zwangsfreundlichkeit. Und dann verlieren die Neuen. Ein Anbieter ohne Bewertungen hat es schwer, weil die Kunden der leeren Seite misstrauen. Dabei sagt diese leere Seite über die Qualität gar nichts aus, nur über das Alter des Kontos.",
       "Denkraum: Früher gab es Gütesiegel, Meisterbriefe, Prüfplaketten. Sind die Sterne einfach deren Nachfolger?",
       "Assmann: Nur zum Teil. Ein Siegel wird von einer Stelle vergeben, die selbst einen Ruf zu verlieren hat. Der Meisterbrief sagt Ihnen, dass jemand eine Prüfung vor Leuten abgelegt hat, die etwas vom Fach verstehen. Die Sterne dagegen sind die gesammelten Eindrücke von Laien, die meist nur einen einzigen Fall beurteilen können, nämlich ihren eigenen. Das ist nicht wertlos. Wer wissen will, ob ein Elektriker pünktlich kommt und seinen Dreck wegräumt, erfährt aus Bewertungen mehr als aus jeder Urkunde. Ob die Leitungen fachgerecht verlegt sind, erfährt er daraus nicht. Ich rate meinen Studenten immer, sich zu fragen, worüber der Bewertende eigentlich urteilen konnte.",
       "Denkraum: Wie verbreitet sind gekaufte Bewertungen?",
       "Assmann: Belastbare Zahlen gibt es kaum, und wer Ihnen eine genaue Prozentzahl nennt, sollte Ihnen verdächtig sein. Wir haben vor drei Jahren gemeinsam mit einer Verbraucherzentrale knapp 600 Bewertungen für Handwerksbetriebe in Sachsen stichprobenartig überprüft. Bei etwa jeder zehnten ließ sich kein Auftrag finden, der ihr zugrunde liegen konnte. Das heißt nicht, dass all diese Bewertungen gekauft waren. Manche stammten von Verwandten, manche von Leuten, die den Betrieb nur vom Hörensagen kannten. Aber es zeigt, dass man den Sternen mit einer gewissen Gelassenheit begegnen sollte.",
       "Denkraum: Sie haben in Ihrer Studie auch nach Nachbarn gefragt. Was kam heraus?",
       "Assmann: Das war für mich das überraschendste Ergebnis. Wir wollten wissen, wem man im Notfall den Haustürschlüssel geben würde. In Städten mit mehr als 100 000 Einwohnern nannten nur 41 Prozent einen Nachbarn. Dieselben Befragten hatten in über der Hälfte der Fälle schon einmal über eine Plattform bei Fremden übernachtet oder Fremde bei sich übernachten lassen. Man könnte zugespitzt sagen: Die Wohnung wird einem Unbekannten mit guter Bewertung geöffnet, aber nicht dem Mann von gegenüber, den man seit zehn Jahren grüßt.",
       "Denkraum: Woran liegt das?",
       "Assmann: Ich glaube, an der Frage, was im Fall einer Enttäuschung passiert. Wenn mich ein Fremder enttäuscht, bewerte ich ihn schlecht, und die Sache ist erledigt. Wenn mich der Nachbar enttäuscht, muss ich ihm weiter im Treppenhaus begegnen, womöglich zwanzig Jahre lang. Das Risiko beim Nachbarn ist also gar nicht materiell, es ist sozial. Man scheut eine Beziehung, aus der man nicht mehr herauskommt. Die Plattformen verkaufen uns, wenn Sie so wollen, Vertrauen ohne Verpflichtung.",
       "Denkraum: Ist das schlimm?",
       "Assmann: Nicht zwingend. Ich bin kein Kulturpessimist, der der guten alten Dorfgemeinschaft nachtrauert. Die Dorfgemeinschaft war auch ein Ort der Kontrolle, oft einer erdrückenden. Aber man sollte sich klarmachen, was man gegen was tauscht. Persönliches Vertrauen ist teuer, es kostet Zeit und macht verletzlich. Dafür trägt es auch in Situationen, für die es keine Regeln gibt. Wenn nachts um drei das Wasserrohr platzt, hilft Ihnen keine Plattform. Dann hilft der Nachbar, oder es hilft keiner.",
       "Denkraum: Wie steht es um das Vertrauen in Institutionen, in Behörden, Gerichte, die Wissenschaft?",
       "Assmann: Da sehen wir seit zehn Jahren ein eigentümliches Muster. Das Vertrauen in die Polizei und in Gerichte ist hoch und erstaunlich robust. Das Vertrauen in Parteien und in die Presse ist niedrig und schwankt stark, je nachdem, was gerade in den Nachrichten ist. Die Wissenschaft lag lange stabil im oberen Bereich, hat in Krisenzeiten aber zeitweise deutlich verloren, vor allem bei Menschen, die ohnehin wenig Kontakt zu Hochschulen haben. Interessant ist, dass viele Befragte zwischen der Wissenschaft und einzelnen Wissenschaftlern unterscheiden. Sie trauen dem Fach, aber nicht den Gesichtern, die sie im Fernsehen sehen. Beim Nachbarn ist es genau umgekehrt.",
       "Denkraum: Gibt es Unterschiede zwischen Stadt und Land?",
       "Assmann: Weniger, als das Klischee erwarten lässt. Auf dem Land kennt man sich besser, das stimmt, und dort geben deutlich mehr Leute den Schlüssel beim Nachbarn ab. Aber das allgemeine Vertrauen, also die Antwort auf die Frage nach den meisten Menschen, ist dort nicht höher. Man vertraut den Leuten, die man kennt, und ist allen anderen gegenüber eher vorsichtiger als in der Stadt. Dörfer sind, wenn man so will, kleine Inseln mit ziemlich hohen Ufern.",
       "Denkraum: Kann man Vertrauen überhaupt messen? Oder fragen Sie letztlich nur Meinungen ab?",
       "Assmann: Da treffen Sie den wunden Punkt unseres Fachs. Befragungen messen, was Menschen über ihr Vertrauen sagen, nicht, wie sie handeln. Deshalb machen wir seit einigen Jahren zusätzlich Experimente. Ein klassisches ist das sogenannte Vertrauensspiel. Eine Person bekommt zehn Euro und kann einen beliebigen Teil davon an eine unbekannte zweite Person schicken. Der Betrag wird verdreifacht, und die zweite Person entscheidet, wie viel sie zurückgibt. Wer viel schickt, vertraut. Wer viel zurückgibt, erweist sich als vertrauenswürdig.",
       "Denkraum: Und was zeigen diese Experimente?",
       "Assmann: Dass Menschen im Durchschnitt mehr vertrauen, als sie in Befragungen angeben, und dass sie zugleich vertrauenswürdiger sind, als ihre Mitspieler erwarten. In unseren Leipziger Runden schickten die Teilnehmer im Schnitt etwas mehr als vier Euro und bekamen etwas mehr zurück, als sie geschickt hatten. Das ist kein Paradies der Großzügigkeit, aber es ist deutlich mehr, als ein streng rechnender Mensch tun würde. Der würde gar nichts schicken, weil er davon ausgehen müsste, nichts zurückzubekommen.",
       "Denkraum: Gab es Unterschiede zwischen einzelnen Gruppen?",
       "Assmann: Einige, und manche haben uns überrascht. Ältere Teilnehmer vertrauten etwas mehr als jüngere, obwohl die Jüngeren viel häufiger auf Plattformen unterwegs sind. Wer selbst schon einmal betrogen worden war, schickte im ersten Durchgang weniger, glich das aber in späteren Runden aus, sobald er gute Erfahrungen gemacht hatte. Vertrauen ist offenbar weniger ein Charakterzug als eine Erfahrung, die sich immer wieder neu bestätigen muss.",
       "Denkraum: Wie würden Sie Vertrauen selbst bestimmen, ganz ohne Fachbegriffe?",
       "Assmann: In den Lehrbüchern heißt es gern, Vertrauen verringere Komplexität. Das stimmt, aber es klingt, als ginge es um ein Computerprogramm. Ich sage meinen Studenten lieber: Vertrauen ist der Moment, in dem man aufhört nachzufragen. Man könnte noch prüfen, noch eine Bewertung lesen, noch einen Beleg verlangen, und man lässt es. Das ist kein Mangel an Vorsicht, sondern eine Entscheidung. Ohne sie käme man morgens nicht einmal aus dem Haus.",
       "Denkraum: Lässt sich verlorenes Vertrauen zurückgewinnen, etwa wenn ein Unternehmen seine Kunden getäuscht hat?",
       "Assmann: Ja, aber langsamer, als es verloren ging, und selten vollständig. Unternehmen machen dabei fast immer denselben Fehler: Sie entschuldigen sich mit großem Aufwand und ändern dann wenig. Menschen verzeihen eher einen Fehler, den jemand eingesteht und sichtbar behebt, als eine glänzende Kampagne. Das gilt übrigens auch im Privaten. Eine Entschuldigung ist kein Abschluss, sondern ein Versprechen, und Vertrauen entsteht erst, wenn dieses Versprechen ein paar Mal gehalten wurde.",
       "Denkraum: Was folgt daraus für Sie persönlich? Würden Sie Ihrem Nachbarn den Schlüssel geben?",
       "Assmann: Ich habe es getan, ehrlich gesagt erst nach dieser Studie. Meine Nachbarin ist eine pensionierte Lehrerin, die ich jahrelang nur vom Grüßen kannte. Als ich den Schlüssel bei ihr abgab, war das für uns beide ein bisschen peinlich, so als hätte ich ihr einen Antrag gemacht. Inzwischen gießt sie meine Tomaten, wenn ich verreist bin, und ich trage ihr die Getränkekisten in den dritten Stock. Das hätte keine App vermittelt.",
       "Denkraum: Ein versöhnliches Schlusswort.",
       "Assmann: Ein vorläufiges. Wer weiß, wie viele Sterne sie mir am Ende gibt."
      ]
     },
     "aufgaben": [
      {
       "frage": "Welche Aussage steht im Text?",
       "opt": [
        "Nur ein Drittel der Befragten nutzt Plattformen, um bei Fremden zu übernachten.",
        "Der Anteil derer, die den meisten Menschen vertrauen, schwankt von Jahr zu Jahr stark.",
        "Wer allgemein misstrauisch ist, kann sich im Alltag trotzdem auf Fremde einlassen."
       ],
       "loesung": 2,
       "stelle": "Das allgemeine Misstrauen ist eine Haltung",
       "erklaerung": "Assmann trennt die allgemeine Haltung vom konkreten Handeln. Der Wert ist stabil, nicht schwankend."
      },
      {
       "frage": "Welche Aussage steht im Text?",
       "opt": [
        "Im Netz richtet sich das Vertrauen vor allem auf den Charakter des einzelnen Anbieters.",
        "Im Netz richtet sich das Vertrauen eigentlich auf die Regeln und Sicherungen der Plattform.",
        "Plattformen verzichten bewusst darauf, Zahlungen zurückzuhalten."
       ],
       "loesung": 1,
       "stelle": "Genau genommen vertrauen wir da gar nicht dem Menschen",
       "erklaerung": "Der Mensch ist laut Assmann nur das Gesicht, vertraut wird dem System."
      },
      {
       "frage": "Welche Aussage steht im Text?",
       "opt": [
        "Die Hansekaufleute kannten ihre Handelspartner in der Regel persönlich.",
        "Die Hanse besaß bereits ein schnelles, schriftliches Bewertungssystem.",
        "Auch im Handel der Hanse kam es auf den Ruf an, der sich in Netzwerken verbreitete."
       ],
       "loesung": 2,
       "stelle": "weil es Netzwerke gab, in denen sich herumsprach, wer betrog",
       "erklaerung": "Das System war „sehr viel langsamer\", die Partner sah man oft nie."
      },
      {
       "frage": "Welche Aussage steht im Text?",
       "opt": [
        "Viele Gäste vergeben die Bestnote, obwohl ihnen Mängel aufgefallen sind.",
        "Gäste nennen Mängel nur dann, wenn der Gastgeber unfreundlich war.",
        "Die meisten Bewertungen werden erst Wochen nach dem Aufenthalt geschrieben."
       ],
       "loesung": 0,
       "stelle": "im anschließenden Fragebogen durchaus Mängel nennt",
       "erklaerung": "Die Gäste wollten dem netten Vermieter nicht schaden. Bewertet wird meist sofort."
      },
      {
       "frage": "Welche Aussage steht im Text?",
       "opt": [
        "Die Kunden des Fahrdienstes wissen, dass 4,6 ein schwacher Wert ist.",
        "Von der Bewertungsskala wird in der Praxis nur ein schmaler Bereich genutzt.",
        "Fahrer mit weniger als 4,8 Sternen werden vom Fahrdienst entlassen."
       ],
       "loesung": 1,
       "stelle": "wird so in der Praxis zu einer Skala zwischen 4,5 und 5",
       "erklaerung": "Die Kunden halten 4,6 für gut. Von Entlassung ist keine Rede, nur von weniger Aufträgen."
      },
      {
       "frage": "Welche Aussage steht im Text?",
       "opt": [
        "Neue Anbieter haben es schwer, obwohl fehlende Bewertungen nichts über ihre Qualität aussagen.",
        "Ehrliche Kunden werden von den Plattformen für schlechte Bewertungen bestraft.",
        "Neue Anbieter bekommen von Kunden oft besonders wohlwollende Bewertungen."
       ],
       "loesung": 0,
       "stelle": "nur über das Alter des Kontos",
       "erklaerung": "Die leere Seite schreckt Kunden ab, sagt aber nichts über die Qualität."
      },
      {
       "frage": "Welche Aussage steht im Text?",
       "opt": [
        "Bei jeder zehnten überprüften Bewertung war nachweislich Geld geflossen.",
        "Assmann warnt vor allzu genauen Zahlen über gekaufte Bewertungen.",
        "Die überprüften Handwerksbetriebe hatten ihre Bewertungen fast alle von Verwandten."
       ],
       "loesung": 1,
       "stelle": "wer Ihnen eine genaue Prozentzahl nennt, sollte Ihnen verdächtig sein",
       "erklaerung": "Bei jeder zehnten fehlte nur ein Auftrag, gekauft waren sie nicht unbedingt."
      },
      {
       "frage": "Welche Aussage steht im Text?",
       "opt": [
        "Beim Nachbarn fürchtet man vor allem einen finanziellen Schaden.",
        "Assmann hält die alte Dorfgemeinschaft für das bessere Modell.",
        "Beim Nachbarn scheut man eher eine dauerhafte soziale Bindung."
       ],
       "loesung": 2,
       "stelle": "Das Risiko beim Nachbarn ist also gar nicht materiell",
       "erklaerung": "Das Risiko ist sozial. Der Dorfgemeinschaft trauert Assmann ausdrücklich nicht nach."
      },
      {
       "frage": "Welche Aussage steht im Text?",
       "opt": [
        "Im Vertrauensspiel bekamen die Teilnehmer im Schnitt etwas mehr zurück, als sie geschickt hatten.",
        "Im Experiment vertrauten die Menschen weniger, als sie in Befragungen angegeben hatten.",
        "Die meisten Teilnehmer schickten ihren gesamten Betrag an die zweite Person."
       ],
       "loesung": 0,
       "stelle": "bekamen etwas mehr zurück, als sie geschickt hatten",
       "erklaerung": "Geschickt wurden im Schnitt gut vier von zehn Euro, also nicht alles."
      },
      {
       "frage": "Welche Aussage steht im Text?",
       "opt": [
        "Wer schon einmal betrogen worden war, blieb in allen Runden misstrauisch.",
        "Jüngere vertrauten mehr, weil sie an Plattformen gewöhnt sind.",
        "Frühere Betrugsopfer passten ihr Verhalten nach guten Erfahrungen an."
       ],
       "loesung": 2,
       "stelle": "glich das aber in späteren Runden aus",
       "erklaerung": "Nur im ersten Durchgang schickten sie weniger. Ältere vertrauten mehr als Jüngere."
      }
     ]
    },
    {
     "id": "c2l2s2",
     "titel": "Langeweile",
     "text": {
      "sorte": "zeitung",
      "quelle": "Forschung und Gesellschaft, Reportage von Tobias Leverkus",
      "titel": "Zwanzig Minuten mit sich allein",
      "zeilen": [
       "Der Raum 0.14 im Keller des psychologischen Instituts der Universität Lindenfeld ist so unscheinbar, dass man ihn für eine Abstellkammer halten könnte. Ein Tisch, ein Stuhl, eine Wanduhr ohne Sekundenzeiger, die lautlos läuft, eine weiße Wand. Auf dem Tisch liegt eine Schachtel mit dreihundert Büroklammern in vier Farben. Wer hier Platz nimmt, hat vorher sein Telefon, seine Uhr und seinen Rucksack am Eingang abgegeben. Dann schließt sich die Tür, und eine Stimme aus dem Lautsprecher erklärt die einzige Regel: Man möge zwanzig Minuten lang in diesem Raum bleiben und sich mit seinen Gedanken beschäftigen. Die Büroklammern dürfe man sortieren, müsse es aber nicht.",
       "Miriam Talheim, die das Experiment leitet, hat in den vergangenen zwei Jahren knapp 240 Menschen in diesen Raum geschickt. Studierende, Rentner, Krankenpflegerinnen, ein pensionierter Lokführer. Fast zwei Drittel von ihnen haben irgendwann angefangen, Büroklammern zu sortieren, nach Farbe, nach Größe, manche zu Ketten, eine Teilnehmerin zu einer erstaunlich detaillierten Giraffe. „Niemand hat sie dazu aufgefordert\", sagt Talheim, „und niemand hat dafür etwas bekommen. Sie haben es getan, weil eine sinnlose Beschäftigung offenbar immer noch angenehmer ist als gar keine.\"",
       "Talheim ist 44 Jahre alt, spricht schnell und lacht oft über ihr eigenes Fach. Als sie vor fünfzehn Jahren anfing, sich mit Langeweile zu befassen, hätten Kollegen das für einen Witz gehalten. „Man hat mich gefragt, ob ich als Nächstes das Gähnen erforsche.\" Inzwischen ist die Langeweileforschung ein kleines, aber ernsthaftes Feld mit eigenen Fragebögen, Fachtagungen und einer Handvoll Streitfragen, über die man sich gründlich zerstreiten kann.",
       "Gemessen wird Langeweile in der Regel mit Fragebögen, und schon dabei zeigt sich, wie unterschiedlich Menschen gebaut sind. Manche stimmen Sätzen wie „Ich finde es schwer, mich zu beschäftigen\" oder „Die Zeit vergeht bei mir oft quälend langsam\" fast immer zu, andere fast nie. Die Forschung spricht von Langeweileneigung, einer Art persönlicher Empfindlichkeit, die über Jahre recht stabil bleibt. Menschen mit hoher Neigung essen häufiger aus Verlegenheit, fahren riskanter Auto und greifen schneller zum Telefon. Ob die Langeweile dabei Ursache oder bloß Begleiterscheinung ist, lässt sich aus solchen Zusammenhängen allerdings nicht ablesen, und Talheim legt Wert darauf, das jedem Journalisten zweimal zu sagen.",
       "Die erste dieser Streitfragen ist ganz grundsätzlich: Was ist Langeweile überhaupt? Lange galt sie als Folge äußerer Armut an Reizen. Wer am Fließband steht oder im Wartezimmer sitzt, langweilt sich, weil um ihn herum zu wenig passiert. Diese Erklärung ist nicht falsch, aber sie greift zu kurz. Denn Menschen langweilen sich auch in Situationen, in denen mehr als genug passiert, etwa in einer Vorlesung voller Formeln, die sie nicht verstehen, oder auf einer Party, auf der alle gleichzeitig reden.",
       "Talheim vertritt deshalb eine Auffassung, die sich in der Forschung zunehmend durchsetzt: Langeweile entsteht, wenn die Aufmerksamkeit keinen Halt findet. Das kann an zu wenig Anregung liegen, aber ebenso an zu viel, oder an einer Anregung, die uns nichts bedeutet. „Langeweile ist kein Zustand, sondern ein Signal\", sagt sie. „Sie meldet uns, dass das, was wir gerade tun, nicht zu dem passt, was wir eigentlich wollen. Wer nur auf das Signal schimpft, statt zu fragen, was es anzeigt, macht es sich zu einfach.\"",
       "Dass dieses Signal unangenehm ist, hat einen guten Grund. Ein Gefühl, das nicht stört, würde niemand beachten. Talheim vergleicht die Langeweile gern mit dem Schmerz: Auch er ist lästig, aber wer ihn nicht spürt, verletzt sich ständig, ohne es zu merken. Von der Langeweile, so ihre These, lässt sich etwas Ähnliches sagen. Wer sie nie empfindet, bleibt womöglich zu lange in Tätigkeiten hängen, die ihn längst nicht mehr weiterbringen.",
       "Die Geschichte des Begriffs gibt ihr in gewisser Weise recht. Bevor es das Wort Langeweile gab, sprach man in Klöstern von der Acedia, einer Art Trägheit des Herzens, die Mönche in den Mittagsstunden befiel. Der Mönch, der zum Fenster hinausstarrte und sich fragte, wann endlich die Sonne sinke, galt nicht als gelangweilt, sondern als gefährdet. Die Acedia war eine Sünde, weil sie den Menschen von seiner eigentlichen Aufgabe abzog. Das deutsche Wort Langeweile dagegen ist jünger und harmloser. Es beschreibt zunächst nur eine Zeit, die sich in die Länge zieht, eine „lange Weile\". Erst im achtzehnten Jahrhundert wurde daraus ein Gefühl, über das man klagte, und zwar bezeichnenderweise vor allem in den gebildeten Schichten, die Zeit dafür hatten.",
       "Heute klagen alle. In einer repräsentativen Umfrage, die Talheims Arbeitsgruppe im vergangenen Jahr gemeinsam mit einem Meinungsforschungsinstitut durchgeführt hat, gaben 58 Prozent der Befragten an, sich mindestens einmal pro Woche zu langweilen. Am häufigsten nannten sie den Arbeitsplatz, gefolgt von Wartesituationen und, an dritter Stelle, Familienfesten. Die Antwort „beim Fernsehen\" landete auf Platz fünf, knapp hinter „in Besprechungen\".",
       "Besonders ergiebig ist für die Forschung die Arbeitswelt. Hier hat sich in den vergangenen Jahren der Begriff Boreout eingebürgert, gebildet nach dem Vorbild des Burnout. Gemeint ist ein Zustand chronischer Unterforderung, der Menschen auf ähnliche Weise erschöpft wie Überlastung. Talheim ist mit dem Begriff nicht ganz glücklich, weil er nach Mode klingt. An der Sache zweifelt sie aber nicht. „Wir unterschätzen, wie anstrengend es ist, acht Stunden lang so zu tun, als hätte man etwas zu tun.\"",
       "Einer, der das aus eigener Erfahrung kennt, ist Bernd Grothe. Der 51-Jährige hat zwölf Jahre lang in der Schadensabteilung einer Versicherung gearbeitet, zuletzt in einer Stelle, deren Aufgaben nach und nach von einer Software übernommen wurden. „Am Ende hatte ich vielleicht zwei Stunden echte Arbeit am Tag\", erzählt er. „Den Rest habe ich damit verbracht, Arbeit zu verteilen, die es gar nicht gab.\" Er habe E-Mails langsamer beantwortet, als er gekonnt hätte, Akten zweimal gelesen, Besprechungen vorbereitet, die niemand brauchte. Abends sei er erschöpfter gewesen als in den Jahren, in denen er Überstunden gemacht hatte. Inzwischen arbeitet Grothe als Fahrlehrer. „Langweilig ist das auch manchmal\", sagt er. „Aber wenigstens merkt man es keinem an, wenn er sich langweilt. Da ist ja immer noch einer, der gleich in den Gegenverkehr fahren könnte.\"",
       "Dass die Arbeitswelt so ergiebig ist, hat auch mit ihrer Sprache zu tun. Wer sich in der Freizeit langweilt, darf das sagen. Wer sich im Büro langweilt, sagt es besser nicht, denn es klingt nach Faulheit oder nach mangelndem Ehrgeiz. In Mitarbeiterbefragungen taucht das Wort deshalb kaum auf. Stattdessen ist von fehlender Wertschätzung die Rede, von unklaren Zuständigkeiten, von Sinnfragen. Talheim vermutet, dass sich hinter vielen dieser Klagen schlicht Unterforderung verbirgt, die niemand so nennen möchte. „Zugeben, dass man überlastet ist, gilt als ehrenwert. Zugeben, dass man nichts zu tun hat, gilt als verdächtig.\"",
       "Eine zweite Streitfrage betrifft das, was man den guten Ruf der Langeweile nennen könnte. Seit einigen Jahren kursiert in Ratgebern und Zeitungsartikeln die Behauptung, Langeweile mache kreativ. Gestützt wird sie meist auf eine Reihe von Experimenten, bei denen Versuchspersonen zunächst eine stumpfsinnige Aufgabe erledigen mussten, etwa Telefonnummern abschreiben, und anschließend möglichst viele Verwendungen für einen gewöhnlichen Gegenstand finden sollten. Wer sich vorher gelangweilt hatte, fand im Durchschnitt mehr Ideen.",
       "Talheim hat diese Versuche mit ihrer Gruppe wiederholt, mit deutlich mehr Teilnehmern als in den ursprünglichen Studien. Das Ergebnis war ernüchternd. Ein Effekt war zwar vorhanden, aber er war so klein, dass er im Alltag kaum eine Rolle spielen dürfte. „Langeweile macht nicht kreativ\", sagt sie. „Sie macht unruhig. Und manche Menschen nutzen diese Unruhe für etwas Neues, andere für den Kühlschrank.\" Das sei weniger romantisch als die Geschichte vom Geistesblitz unter der Dusche, aber dafür näher an der Wirklichkeit.",
       "Trotzdem hält Talheim es für falsch, Langeweile um jeden Preis zu vermeiden, gerade bei Kindern. Sie selbst hat zwei Söhne, neun und zwölf Jahre alt, und gibt zu, dass sie an verregneten Sonntagen gelegentlich schwach wird und ein Tablet herausrückt. Grundsätzlich aber halte sie es für eine Fähigkeit, die man üben müsse, eine Weile nichts mit sich anzufangen zu wissen, ohne sofort nach Abhilfe zu rufen. „Kinder, denen jede Lücke im Tag gefüllt wird, lernen nicht, diese Lücke selbst zu füllen. Das rächt sich spätestens mit vierzehn, wenn die Eltern keine Lust mehr haben, das Unterhaltungsprogramm zu sein.\"",
       "Die dritte Streitfrage ist die jüngste und vielleicht die heikelste: Hat das Smartphone die Langeweile abgeschafft? Auf den ersten Blick spricht vieles dafür. Wer heute an der Bushaltestelle wartet, starrt nicht mehr auf den Fahrplan, sondern auf einen Bildschirm, der niemals leer ist. Eine Leerlaufzeit von mehr als ein paar Sekunden kommt im Alltag vieler Menschen kaum noch vor. Selbst in der Schlange an der Supermarktkasse, früher ein klassischer Ort des Wartens, sieht man kaum noch jemanden, der einfach nur wartet. Die Hersteller der Geräte werben sogar damit, dass ihre Kunden nie wieder eine Minute verschwenden müssten.",
       "Talheims Daten zeichnen allerdings ein anderes Bild. In einer Tagebuchstudie haben 120 Teilnehmer zwei Wochen lang mehrmals täglich auf ihrem Telefon notiert, wie gelangweilt sie sich gerade fühlten und was sie taten. Wer gerade durch Kurzvideos oder Nachrichten scrollte, gab dabei im Durchschnitt keine geringere Langeweile an als jemand, der nichts tat. Teilweise lag der Wert sogar höher. „Das Telefon vertreibt die Langeweile nicht\", folgert Talheim, „es zerstückelt sie. Wir langweilen uns jetzt in Portionen von acht Sekunden.\"",
       "Das klingt nach Kulturkritik, und Talheim weiß das. Sie betont, dass sie das Smartphone nicht verteufeln will. Es gebe genug Situationen, in denen es eine wirkliche Erleichterung sei, etwa für Menschen, die im Krankenhaus liegen oder lange Pendelstrecken zurücklegen müssen. Problematisch werde es erst, wenn man das Signal der Langeweile nie mehr zu Ende höre. „Wer sich langweilt und sofort wischt, bekommt nie die Antwort auf die Frage, die die Langeweile eigentlich stellt: Willst du das hier wirklich?\"",
       "Sie selbst, erzählt Talheim, habe sich angewöhnt, Leerlauf nicht mehr als Störung zu betrachten. Auf der Zugfahrt zu ihren Eltern, knapp drei Stunden, lasse sie die Kopfhörer seit einem Jahr in der Tasche. Am Anfang sei ihr das wie eine Strafe vorgekommen. Inzwischen freue sie sich auf das Stück zwischen zwei Bahnhöfen, auf dem es nichts zu sehen gibt außer Rapsfeldern und Windrädern. „Ich langweile mich dort immer noch. Ich halte es nur besser aus. Und manchmal fällt mir dabei ein, was ich in einem Aufsatz falsch gemacht habe.\"",
       "Zurück im Raum 0.14. Die Tür öffnet sich nach genau zwanzig Minuten, und heraus kommt ein Maschinenbaustudent im dritten Semester, der darum gebeten hat, nur mit Vornamen genannt zu werden. Jannik hat die Büroklammern nicht angerührt. „Ich wollte beweisen, dass ich das aushalte\", sagt er. Ob es ihm gelungen sei? Er zögert. Die ersten fünf Minuten seien schlimm gewesen, er habe die Risse in der Decke gezählt, siebzehn Stück, dann sei es seltsam ruhig geworden. Irgendwann habe er angefangen, über seine Großmutter nachzudenken, die er seit Monaten nicht angerufen habe. „Ich glaube, das mache ich heute Abend.\"",
       "Talheim notiert das, ohne es zu kommentieren. Später, im Büro, sagt sie, so etwas höre sie öfter. Nicht jeder habe nach zwanzig Minuten eine Erkenntnis, viele seien einfach nur froh, wieder draußen zu sein. Aber erstaunlich viele erzählten von einem Gedanken, der ihnen gekommen sei, als nichts anderes mehr da war. Ob man das Kreativität nennen solle, wisse sie nicht. Vielleicht sei es auch nur das, was übrig bleibt, wenn der Lärm im Kopf für einen Moment nachlässt. Dann lacht sie wieder. „Schreiben Sie bitte nicht, dass ich Langeweile empfehle. Ich empfehle nur, sie nicht sofort wegzuklicken.\""
      ]
     },
     "aufgaben": [
      {
       "frage": "Welche Aussage steht im Text?",
       "opt": [
        "Die Teilnehmer sollten im Raum 0.14 möglichst viele Büroklammern sortieren.",
        "Die meisten Teilnehmer beschäftigten sich freiwillig mit den Büroklammern.",
        "Für das Sortieren der Büroklammern gab es eine kleine Belohnung."
       ],
       "loesung": 1,
       "stelle": "Fast zwei Drittel von ihnen haben irgendwann angefangen",
       "erklaerung": "Das Sortieren war erlaubt, aber weder gefordert noch belohnt."
      },
      {
       "frage": "Welche Aussage steht im Text?",
       "opt": [
        "Langeweile entsteht ausschließlich, wenn zu wenig um uns herum passiert.",
        "Langeweile ist nach Talheim vor allem ein dauerhafter Charakterzug.",
        "Langeweile kann auch bei einem Übermaß an Reizen auftreten."
       ],
       "loesung": 2,
       "stelle": "aber ebenso an zu viel",
       "erklaerung": "Die Erklärung durch Reizarmut „greift zu kurz\", Langeweile ist ein Signal, kein Zustand."
      },
      {
       "frage": "Welche Aussage steht im Text?",
       "opt": [
        "Talheim vergleicht die Langeweile mit dem Schmerz, weil beide eine Warnfunktion haben.",
        "Talheim hält Langeweile für ebenso gefährlich wie körperlichen Schmerz.",
        "Talheim zufolge verletzen sich gelangweilte Menschen häufiger."
       ],
       "loesung": 0,
       "stelle": "Talheim vergleicht die Langeweile gern mit dem Schmerz",
       "erklaerung": "Beide sind lästig, aber nützlich, weil sie auf ein Problem hinweisen."
      },
      {
       "frage": "Welche Aussage steht im Text?",
       "opt": [
        "Die Acedia galt im Kloster als harmlose Müdigkeit nach dem Essen.",
        "Das Wort Langeweile bezeichnete ursprünglich nur eine lange Zeitspanne.",
        "Im achtzehnten Jahrhundert klagten vor allem einfache Leute über Langeweile."
       ],
       "loesung": 1,
       "stelle": "Es beschreibt zunächst nur eine Zeit, die sich in die Länge zieht",
       "erklaerung": "Die Acedia war eine Sünde, geklagt haben die gebildeten Schichten."
      },
      {
       "frage": "Welche Aussage steht im Text?",
       "opt": [
        "Beim Fernsehen langweilen sich die Befragten am häufigsten.",
        "Familienfeste wurden häufiger genannt als der Arbeitsplatz.",
        "Mehr als die Hälfte der Befragten langweilt sich mindestens wöchentlich."
       ],
       "loesung": 2,
       "stelle": "gaben 58 Prozent der Befragten an",
       "erklaerung": "Der Arbeitsplatz steht vorn, Fernsehen erst auf Platz fünf."
      },
      {
       "frage": "Welche Aussage steht im Text?",
       "opt": [
        "Talheim bezweifelt, dass es chronische Unterforderung am Arbeitsplatz gibt.",
        "Talheim hält Boreout für gefährlicher als Burnout.",
        "Talheim findet den Begriff Boreout unglücklich, nimmt das Phänomen aber ernst."
       ],
       "loesung": 2,
       "stelle": "An der Sache zweifelt sie aber nicht",
       "erklaerung": "Der Begriff klingt ihr nach Mode, die Sache bestreitet sie nicht."
      },
      {
       "frage": "Welche Aussage steht im Text?",
       "opt": [
        "Bernd Grothe wurde von seiner Versicherung durch eine Software ersetzt und entlassen.",
        "Bernd Grothe hatte in seiner letzten Stelle mehr Arbeit, als er schaffen konnte.",
        "Bernd Grothe fühlte sich bei wenig Arbeit erschöpfter als in Zeiten mit Überstunden."
       ],
       "loesung": 2,
       "stelle": "Abends sei er erschöpfter gewesen als in den Jahren",
       "erklaerung": "Von Entlassung ist nicht die Rede, er hatte nur noch etwa zwei Stunden echte Arbeit."
      },
      {
       "frage": "Welche Aussage steht im Text?",
       "opt": [
        "Talheims Wiederholung bestätigte einen nur sehr kleinen Effekt auf die Kreativität.",
        "Talheims Gruppe konnte überhaupt keinen Zusammenhang feststellen.",
        "Die ursprünglichen Studien hatten mehr Teilnehmer als Talheims Versuch."
       ],
       "loesung": 0,
       "stelle": "aber er war so klein, dass er im Alltag kaum eine Rolle",
       "erklaerung": "Ein Effekt war vorhanden, aber winzig. Talheim arbeitete mit mehr Teilnehmern."
      },
      {
       "frage": "Welche Aussage steht im Text?",
       "opt": [
        "Talheim verbietet ihren Söhnen grundsätzlich das Tablet.",
        "Talheim meint, Kinder sollten lernen, Leerlauf selbst zu füllen.",
        "Talheim glaubt, dass Jugendliche mit vierzehn keine Langeweile mehr empfinden."
       ],
       "loesung": 1,
       "stelle": "lernen nicht, diese Lücke selbst zu füllen",
       "erklaerung": "An Regensonntagen gibt sie selbst das Tablet heraus, ein Verbot gibt es also nicht."
      },
      {
       "frage": "Welche Aussage steht im Text?",
       "opt": [
        "Wer auf dem Telefon scrollte, langweilte sich laut Tagebuchstudie nicht weniger.",
        "Das Smartphone hat nach Talheims Daten die Langeweile weitgehend abgeschafft.",
        "Talheim lehnt die Nutzung von Smartphones in allen Lebenslagen ab."
       ],
       "loesung": 0,
       "stelle": "keine geringere Langeweile an als jemand, der nichts tat",
       "erklaerung": "Das Telefon „zerstückelt\" die Langeweile, und Talheim will es nicht verteufeln."
      }
     ]
    },
    {
     "id": "c2l2s3",
     "titel": "Erinnern und Vergessen",
     "text": {
      "sorte": "zeitung",
      "quelle": "Die Lesezeit. Zweimonatsschrift für Literatur und Debatte, Essay von Ruth Ebersbach",
      "titel": "Was wir nicht behalten",
      "zeilen": [
       "In meinem Keller stehen, in zwei Umzugskartons, einunddreißig Tagebücher. Das erste habe ich mit vierzehn begonnen, ein rotes Heft mit Schloss, dessen Schlüssel schon im zweiten Monat verloren ging. Das letzte habe ich mit fünfundvierzig beendet, ohne es zu wissen. Ich hatte nie beschlossen aufzuhören, ich habe es eines Tages einfach nicht mehr aufgeschlagen. Die Kartons hatten zwei Umzüge und einen Wasserschaden überstanden. Im vergangenen Winter, an einer Reihe verregneter Wochenenden, habe ich die Kartons nach oben getragen und alles gelesen, von vorn bis hinten. Ich hatte mir davon eine Art Wiedersehen versprochen. Es wurde eher eine Begegnung mit einer Fremden, die zufällig meine Handschrift hatte.",
       "Am deutlichsten wurde mir das an einem einzigen Tag. Ich war fünfzehn, als mein Vater die Familie verließ, und ich erinnere mich daran so genau wie an kaum etwas anderes. Es regnete. Er stand in der Küche mit einem roten Koffer, meine Mutter saß am Tisch und sagte nichts, und ich stand in der Tür und hielt mich am Rahmen fest. Diese Szene habe ich in den vergangenen dreißig Jahren vermutlich hundertmal erzählt, Freunden, zwei Therapeutinnen, meinem Mann. Im Tagebuch steht etwas anderes. Es war ein sonniger Tag im Juni. Ich war mit meiner Freundin Sabine im Freibad, und als ich nach Hause kam, war mein Vater bereits fort. Über seinen Auszug schrieb ich drei Zeilen. Danach folgen zwei Seiten über einen Jungen namens Falk, der mir am Sprungturm einen Blick zugeworfen hatte.",
       "Man könnte nun sagen, das Tagebuch habe recht und meine Erinnerung sei eben falsch. So einfach ist es nicht. Auch das Tagebuch ist ja keine neutrale Aufzeichnung, sondern das Werk einer Fünfzehnjährigen, die vielleicht nicht über den Vater schreiben wollte und sich deshalb an Falk hielt. Die Küche, der Koffer, der Regen sind womöglich das, was ich später gebraucht habe, um einem Ereignis, das ich verpasst hatte, eine Form zu geben. Ich habe mir meine wichtigste Erinnerung, so muss ich annehmen, selbst gebaut. Und ich habe sie, das ist das Beunruhigende, mit jedem Erzählen ein wenig fester gebaut.",
       "Die Hirnforschung bestätigt diesen Verdacht auf eine Weise, die zugleich tröstlich und unheimlich ist. Der Magdeburger Neurologe Daniel Wendt, mit dem ich während der Arbeit an diesem Text mehrmals telefoniert habe, erklärte mir, dass eine Erinnerung im Gedächtnis nicht wie ein Foto in einer Schublade liegt. Jedes Mal, wenn wir sie hervorholen, wird sie für eine kurze Zeit wieder formbar und muss danach neu abgespeichert werden. In dieser Phase können sich Einzelheiten verschieben, Gefühle der Gegenwart können sich daranhängen, Bruchstücke anderer Erlebnisse können hineingeraten. „Erinnern heißt, ein Original abzuschreiben und dann das Original wegzuwerfen\", sagte Wendt. „Beim nächsten Mal schreiben Sie von der Abschrift ab.\"",
       "Das bedeutet umgekehrt, dass die Erinnerungen, die wir am häufigsten erzählen, am wenigsten verlässlich sein dürften. Sie sind die am stärksten bearbeiteten. Die Szene in der Küche ist durch hundert Erzählungen hindurchgegangen und hat dabei vermutlich jedes Mal eine Kleinigkeit gewonnen, einen Farbton, eine Geste, einen Satz, den niemand gesagt hat. Dass sie mir so lebendig vorkommt, ist kein Beweis für ihre Wahrheit, eher ein Hinweis auf ihren Gebrauch.",
       "Ich habe in jenem Winter auch meinen Bruder angerufen, der damals elf war. Er erinnert sich an eine dritte Fassung. Bei ihm ist es Winter, der Vater fährt mit dem Auto davon, und ich stehe weinend am Gartentor. Ich habe nie an einem Gartentor geweint, da bin ich mir sicher, ungefähr so sicher, wie ich mir früher des Regens war. Wir haben eine Stunde lang gestritten, freundlich, aber hartnäckig, und uns am Ende darauf geeinigt, uns nicht zu einigen. Seitdem frage ich mich, ob es überhaupt sinnvoll ist, von einer Familiengeschichte im Singular zu sprechen.",
       "Noch überraschender war für mich, was Wendt über das Vergessen erzählte. Ich hatte es mir immer als eine Art Verfall vorgestellt, als Staub, der sich auf unbenutzte Erinnerungen legt. Tatsächlich, so Wendt, sei das Vergessen zu einem erheblichen Teil ein aktiver Vorgang. Das Gehirn baue Verbindungen gezielt ab, besonders im Schlaf, und es tue das nicht aus Schwäche, sondern aus Notwendigkeit. Ein Gedächtnis, das alles behielte, wäre kein besseres Gedächtnis, sondern ein unbrauchbares.",
       "Wendt erklärte das an einem Beispiel, das mir seitdem nicht aus dem Kopf geht. Wer einen Hund von vorn sieht, dann von der Seite und dann im Halbdunkel, muss eine Menge Unterschiede vergessen, um zu begreifen, dass es sich um denselben Hund handelt. Wer jede Einzelheit behielte, hätte drei Hunde gesehen. Ohne Vergessen gäbe es keine Begriffe, keine Regeln, kein Denken über den Einzelfall hinaus. In der Fachliteratur sind einige wenige Menschen beschrieben, die sich an nahezu jeden Tag ihres Lebens bis in kleinste Einzelheiten erinnern. Die meisten von ihnen beschreiben das nicht als Gabe. Sie berichten von Nächten, in denen alte Kränkungen in voller Schärfe zurückkehren, so frisch wie am ersten Tag.",
       "Wendt erinnerte mich auch an eine Erfahrung, die jeder aus der Schule kennt. Was wir für eine Prüfung in eine Nacht gepresst haben, ist eine Woche später weitgehend verschwunden. Das sei, sagte er, kein Versagen des Gedächtnisses, sondern seine Arbeitsweise. Das Gehirn behält bevorzugt, was es wiederholt braucht, und es entscheidet darüber nicht nach unseren Wünschen, sondern nach unserem Verhalten. Wer eine Sprache lernt und sie nie spricht, verliert sie. Wer einen Schmerz immer wieder durchgeht, behält ihn. Man könnte daraus eine ziemlich unbequeme Lehre ziehen: Wir haben mehr Einfluss darauf, was wir vergessen, als uns lieb ist.",
       "Mein Telefon dagegen vergisst nichts. Es enthält, ich habe nachgesehen, 41 312 Fotos, die ältesten von 2009. Jeden Morgen schlägt es mir eines davon vor, versehen mit einer freundlichen Überschrift: „Heute vor sieben Jahren\". Manchmal ist es ein Sonnenuntergang, an den ich mich gern erinnere. Manchmal ist es die Katze, die ein paar Wochen nach der Aufnahme starb. Einmal war es ein Mann, mit dem ich vier Jahre zusammen war und über den ich seit langem nicht mehr nachdenken wollte. Das Gerät hat nicht die geringste Ahnung, was es mir da zeigt. Es weiß, wann ein Bild entstanden ist, aber nicht, was seither geschehen ist.",
       "An einem Abend im Februar habe ich angefangen, Fotos zu löschen. Nach zwei Stunden waren es knapp sechstausend, Doppelbilder, verwackelte Aufnahmen, Bildschirmfotos von Zugverbindungen, die längst abgefahren sind. Es war eine merkwürdig befriedigende Tätigkeit, ein bisschen wie Unkraut jäten. Bei den Bildern mit Menschen habe ich dann aufgehört. Ich konnte mich nicht entscheiden, und ich hatte das unangenehme Gefühl, über etwas zu richten, das mir gar nicht allein gehört.",
       "Hinzu kommt etwas, das ich erst beim Durchsehen dieser Fotos bemerkt habe. Viele von ihnen zeigen Augenblicke, an die ich keinerlei Erinnerung mehr habe. Ein Teller mit Fisch in einem Restaurant, dessen Namen ich nicht kenne. Ein Hafen, vermutlich in Dänemark. Ich habe diese Dinge fotografiert, und es scheint, als hätte ich sie gerade dadurch aus dem Gedächtnis entlassen. Psychologen haben das in Versuchen gezeigt, bei denen Besucher durch ein Museum geführt wurden. Wer ein Ausstellungsstück fotografierte, erinnerte sich später schlechter daran als jemand, der es nur betrachtet hatte. Die Kamera übernimmt das Behalten, und der Kopf nimmt die Entlastung dankbar an.",
       "Was im Kleinen eine Kuriosität ist, wird im Großen zur Frage der Gerechtigkeit. In der Kleinstadt, in der ich lebe, gibt es einen Mann, dessen Name bis vor einigen Jahren bei jeder Suche im Netz zuerst mit einem Zeitungsbericht über die Insolvenz seiner Druckerei verbunden war. Die Pleite lag damals achtzehn Jahre zurück, die Schulden waren beglichen, der Mann führte längst ein anderes Geschäft. Er hat schließlich beantragt, dass der Artikel bei Suchanfragen nach seinem Namen nicht mehr angezeigt wird, und er hatte damit Erfolg. Gelöscht ist der Bericht nicht. Er steht noch im Archiv der Zeitung, wer ihn sucht, findet ihn. Er springt nur niemandem mehr ungefragt ins Gesicht.",
       "Ich halte diese Lösung für klug, gerade weil sie unvollkommen ist. Sie erkennt an, dass es ein Recht auf Vergessenwerden geben muss, ohne zu behaupten, man könne Vergangenes ungeschehen machen. Eine Gesellschaft, in der jeder Fehler für immer an erster Stelle steht, wäre eine Gesellschaft, in der niemand sich ändern kann. Zugleich verstehe ich die Journalisten, die darin einen Eingriff in die Pressefreiheit sehen. Der Mann, um den es ging, hat mir erzählt, er habe kurz nach der Entscheidung zum ersten Mal seit Jahren wieder eine Bewerbung für ein Ehrenamt geschrieben, als Schöffe am Amtsgericht. Man habe ihn genommen. Der Streit darüber wird nicht enden, und vielleicht ist es gut, dass er nicht endet.",
       "Denn natürlich gibt es auch das Gegenteil, Dinge, die nicht vergessen werden dürfen. Es gehört zu den wenigen Gewissheiten der deutschen Nachkriegsgeschichte, dass eine Gesellschaft ihre Verbrechen erinnern muss, auch und gerade dann, wenn die Täter und die Opfer nicht mehr leben. Wer über das Lob des Vergessens schreibt, muss sich hier eine Grenze setzen. Ich glaube, sie verläuft zwischen dem, was man einem Einzelnen schuldet, und dem, was eine Gemeinschaft sich selbst schuldet. Ein Mensch darf eine Kränkung vergessen, um weiterleben zu können. Eine Gesellschaft darf ihre Schuld nicht vergessen, wenn sie nicht wieder schuldig werden will.",
       "Im Alltag verwechseln wir diese Ebenen gern, etwa in der Redewendung „vergeben und vergessen\". Sie tut so, als gehörten beide Vorgänge zusammen. In Wahrheit haben sie wenig miteinander zu tun. Man kann vergeben, ohne zu vergessen, und das ist vielleicht die anspruchsvollste Form der Vergebung, weil sie im Wissen um das Geschehene geschieht. Man kann aber auch vergessen, ohne je vergeben zu haben. Das ist die häufigere Variante, und sie ist bequemer, als es den Anschein hat. Wer vergisst, ohne zu vergeben, trägt den Groll oft weiter mit sich herum, nur weiß er nicht mehr, wogegen er sich eigentlich richtet.",
       "Meine Mutter hat in ihren letzten Lebensjahren vieles vergessen, zuerst Namen und Termine, später die Wohnung, in der sie seit vierzig Jahren lebte. Vergessen hat sie auch einen Streit, der uns beide über zehn Jahre lang beschäftigt hatte und von dem ich hier nichts erzählen werde. Als ich ihn einmal vorsichtig ansprach, sah sie mich freundlich an und fragte, ob ich einen Tee wolle. Ich habe damals nicht gewusst, ob ich erleichtert oder beraubt sein sollte. Ich weiß es bis heute nicht. Der Streit lebt nun nur noch in einem einzigen Kopf weiter, in meinem, und ich kann ihn mit niemandem mehr zu Ende führen.",
       "Was also tun mit den einunddreißig Heften? Ich habe eine Weile mit dem Gedanken gespielt, sie zu verbrennen, ganz feierlich, im Garten, an einem windstillen Abend. Es wäre eine schöne Geste gewesen und, wie ich zugeben muss, eine ziemlich eitle. Am Ende habe ich die Kartons wieder in den Keller getragen. Wer sie nach meinem Tod findet, mag damit anfangen, was er will. Für die Fünfzehnjährige und ihren Falk bin ich nicht mehr zuständig.",
       "Ein neues Tagebuch habe ich nicht begonnen. Stattdessen schreibe ich seit dem Winter jeden Sonntag einen einzigen Satz in ein kleines Notizbuch, nicht mehr. Es ist erstaunlich, wie schwer es ist, eine ganze Woche auf einen Satz zu bringen, und wie viel man dabei weglassen muss. Aber vielleicht ist genau das die Übung, die ich gebraucht habe. Was ich vergesse, darf gehen. Was trotzdem wiederkommt, war vermutlich wichtig. Und was ich falsch erinnere, gehört immerhin mir."
      ]
     },
     "aufgaben": [
      {
       "frage": "Welche Aussage steht im Text?",
       "opt": [
        "Die Autorin hörte mit fünfundvierzig bewusst auf, Tagebuch zu schreiben.",
        "Beim Wiederlesen der Tagebücher erkannte die Autorin sich selbst kaum wieder.",
        "Die Autorin hatte ihre Tagebücher regelmäßig gelesen und kannte sie gut."
       ],
       "loesung": 1,
       "stelle": "eine Begegnung mit einer Fremden, die zufällig meine Handschrift hatte",
       "erklaerung": "Sie hat nie beschlossen aufzuhören, und gelesen hat sie die Hefte erst im vergangenen Winter."
      },
      {
       "frage": "Welche Aussage steht im Text?",
       "opt": [
        "Laut Tagebuch war die Autorin nicht zu Hause, als der Vater auszog.",
        "Das Tagebuch bestätigt die Erinnerung an den Regen und den roten Koffer.",
        "Die Autorin schrieb im Tagebuch ausführlich über den Auszug des Vaters."
       ],
       "loesung": 0,
       "stelle": "als ich nach Hause kam, war mein Vater bereits fort",
       "erklaerung": "Laut Tagebuch war sie im Freibad. Über den Auszug schrieb sie nur drei Zeilen."
      },
      {
       "frage": "Welche Aussage steht im Text?",
       "opt": [
        "Die Autorin hält das Tagebuch für die objektiv richtige Darstellung.",
        "Die Autorin glaubt, ihre Mutter habe ihr die Küchenszene eingeredet.",
        "Die Autorin vermutet, dass sie ihre wichtigste Erinnerung selbst gestaltet hat."
       ],
       "loesung": 2,
       "stelle": "Ich habe mir meine wichtigste Erinnerung, so muss ich annehmen, selbst gebaut",
       "erklaerung": "Auch das Tagebuch ist für sie „keine neutrale Aufzeichnung\"."
      },
      {
       "frage": "Welche Aussage steht im Text?",
       "opt": [
        "Erinnerungen werden beim Abrufen erneut gespeichert und können sich dabei verändern.",
        "Erinnerungen bleiben im Gedächtnis unverändert wie Fotos in einer Schublade.",
        "Gefühle der Gegenwart können eine Erinnerung nach Wendt nicht beeinflussen."
       ],
       "loesung": 0,
       "stelle": "muss danach neu abgespeichert werden",
       "erklaerung": "Beim Abrufen wird die Erinnerung formbar, Einzelheiten und Gefühle können sich verschieben."
      },
      {
       "frage": "Welche Aussage steht im Text?",
       "opt": [
        "Je häufiger man eine Erinnerung erzählt, desto genauer wird sie.",
        "Häufig erzählte Erinnerungen sind vermutlich besonders stark verändert.",
        "Lebendige Erinnerungen sind nach Ansicht der Autorin meist wahr."
       ],
       "loesung": 1,
       "stelle": "Sie sind die am stärksten bearbeiteten",
       "erklaerung": "Lebendigkeit ist laut Autorin kein Beweis für Wahrheit, eher für häufigen Gebrauch."
      },
      {
       "frage": "Welche Aussage steht im Text?",
       "opt": [
        "Vergessen ist nach Wendt vor allem ein Zeichen geistiger Schwäche.",
        "Menschen, die fast alles behalten, empfinden das überwiegend als Glück.",
        "Ohne Vergessen könnte der Mensch kaum allgemeine Begriffe bilden."
       ],
       "loesung": 2,
       "stelle": "Ohne Vergessen gäbe es keine Begriffe",
       "erklaerung": "Vergessen geschieht „aus Notwendigkeit\", und die Betroffenen sehen ihr Gedächtnis nicht als Gabe."
      },
      {
       "frage": "Welche Aussage steht im Text?",
       "opt": [
        "Das Telefon zeigt der Autorin nur Fotos von angenehmen Ereignissen.",
        "Das Telefon kann nicht einschätzen, welche Bedeutung ein Foto heute hat.",
        "Die Autorin hat die Funktion mit den alten Fotos inzwischen abgeschaltet."
       ],
       "loesung": 1,
       "stelle": "aber nicht, was seither geschehen ist",
       "erklaerung": "Es zeigt auch die tote Katze und den früheren Partner. Vom Abschalten ist keine Rede."
      },
      {
       "frage": "Welche Aussage steht im Text?",
       "opt": [
        "Wer im Museum fotografierte, erinnerte sich später schlechter an das Objekt.",
        "Wer im Museum fotografierte, betrachtete die Objekte länger als andere.",
        "Die Autorin erinnert sich an fast alle Orte, die sie fotografiert hat."
       ],
       "loesung": 0,
       "stelle": "erinnerte sich später schlechter daran als jemand",
       "erklaerung": "Die Kamera übernimmt das Behalten. Viele Fotos zeigen Augenblicke ohne Erinnerung."
      },
      {
       "frage": "Welche Aussage steht im Text?",
       "opt": [
        "Der Bericht über die Insolvenz wurde auf Antrag vollständig gelöscht.",
        "Der Mann hatte seine Schulden zum Zeitpunkt des Antrags noch nicht beglichen.",
        "Der Bericht ist weiter zugänglich, erscheint aber nicht mehr bei der Namenssuche."
       ],
       "loesung": 2,
       "stelle": "Er steht noch im Archiv der Zeitung",
       "erklaerung": "Gelöscht ist er nicht, die Schulden waren längst beglichen."
      },
      {
       "frage": "Welche Aussage steht im Text?",
       "opt": [
        "Nach Ansicht der Autorin darf eine Gesellschaft ihre Verbrechen nicht vergessen.",
        "Die Autorin hält „vergeben und vergessen\" für zwei Seiten derselben Sache.",
        "Die Autorin hat ihre Tagebücher schließlich im Garten verbrannt."
       ],
       "loesung": 0,
       "stelle": "Eine Gesellschaft darf ihre Schuld nicht vergessen",
       "erklaerung": "Vergeben und vergessen haben für sie wenig miteinander zu tun, die Hefte liegen wieder im Keller."
      }
     ]
    }
   ]
  },
  {
   "nr": 3,
   "art": "textwahl",
   "name": "Lesen: Implizites verstehen",
   "kurz": "Dreizehn Abschnitte, zehn Aussagen, manche passen nirgends",
   "was": "Ein Text in dreizehn Abschnitten. Zehn Aussagen umschreiben, was gemeint ist, nicht was wörtlich dasteht. Du ordnest sie den Abschnitten zu; passt keiner, wählst du x. In der Prüfung zählt jede Lösung zwei Punkte.",
   "tipp": "Frag bei jeder Aussage: Wo zeigt sich diese Haltung oder Schlussfolgerung? Ironie und Andeutungen zählen.",
   "zeichen": "🔎",
   "farbe": "rot",
   "punkte": 20,
   "runden": [
    {
     "id": "c2l3s1",
     "titel": "Vertrauen",
     "text": {
      "sorte": "zeitung",
      "quelle": "Reportage von Henrike Albrecht, „Märkische Wochenschau“, Rubrik Land und Leute",
      "titel": "Die Kasse steht im Schuppen",
      "zeilen": [
       "Abschnitt 1: Wer auf der Landstraße zwischen Prenzlau und Pasewalk bei Kleinow abbiegt, sieht zuerst das Schild, dann den Schuppen. Das Schild ist mit der Hand gemalt und verspricht Eier, Kartoffeln, Honig und „was gerade da ist“. Im Schuppen stehen ein alter Kühlschrank, ein Regal aus Obstkisten und auf einem Hocker eine Blechkassette mit Schlitz im Deckel. Einen Verkäufer gibt es nicht. Wer etwas nimmt, legt das Geld hinein, wer Wechselgeld braucht, nimmt es sich aus einer Untertasse daneben. So steht es auf einem Zettel, der mit Reißzwecken an der Bretterwand hängt. Er ist vergilbt und an den Rändern eingerissen, aber bisher ist niemand auf die Idee gekommen, ihn zu ersetzen.",
       "Abschnitt 2: Der Schuppen gehört Gisela und Bernd Hartung, beide Anfang siebzig, seit fünfzig Jahren auf diesem Hof. Bernd hat die Kassette vor elf Jahren aufgestellt, nachdem er sich zum dritten Mal über Kunden geärgert hatte, die beim Mittagessen klingelten, um sechs Eier zu kaufen. „Ich wollte meine Ruhe“, sagt er. „Von Vertrauen war da nicht die Rede.“ Gisela schüttelt den Kopf, als er das sagt. Sie erinnert sich anders. Sie erinnert sich an einen Mann, der wochenlang abends nachgezählt hat, ob das Geld zu den fehlenden Eiern passte, und der sehr stolz war, wenn es stimmte.",
       "Abschnitt 3: Es stimmte übrigens meistens. Bernd führt bis heute ein Heft, in das er jeden Abend zwei Zahlen schreibt: was fehlt und was drin ist. Er zeigt es nicht gern her, aber nach einer Weile schiebt er es doch über den Küchentisch. Die Abweichungen sind klein. Mal fehlen drei Euro, mal sind zwei zu viel in der Kasse, weil jemand großzügig aufgerundet hat. Über das Jahr gerechnet verliere er vielleicht vierzig Euro, sagt Bernd. „Dafür bezahle ich keinen Menschen, der hier sitzt“, sagt er, und es klingt, als hätte er diesen Satz schon oft gesagt.",
       "Abschnitt 4: Einmal allerdings war die Kassette weg. Das war im zweiten Sommer, an einem Sonntag, und darin lagen nach Bernds Rechnung knapp hundertzwanzig Euro. Er hat damals ernsthaft überlegt, den Schuppen zuzumachen. Gisela hat ihn davon abgehalten, indem sie ihm vorrechnete, wie viel sie früher auf dem Wochenmarkt für den Standplatz bezahlt hatten. Danach hat Bernd die neue Kassette mit einer Kette an einem Ring in der Wand befestigt. Die Kette ist dünn, mit einer Gartenschere wäre sie in Sekunden durch. „Die ist nicht für die Diebe“, sagt Gisela. „Die ist für ihn.“",
       "Abschnitt 5: Was in Kleinow geschieht, ist kein Einzelfall. Im Landkreis zählt der Bauernverband inzwischen über sechzig solcher Verkaufsstellen, an Straßenrändern, in Garagen, in umgebauten Telefonzellen. Der Verband führt darüber eine Liste, ohne genau zu wissen, wie viele es wirklich sind. Manche haben Kameras, manche ein Terminal, an dem man mit der Karte zahlen kann. Die Hartungs haben beides abgelehnt. Eine Kamera, sagt Bernd, sei eine Unterstellung, die man den ehrlichen Leuten jeden Tag ins Gesicht halte, während die unehrlichen sich einfach eine Kapuze aufsetzten. Und das Terminal hätte Strom gebraucht und ein Netz, das es hier draußen an manchen Tagen nicht gibt.",
       "Abschnitt 6: Wer kauft hier ein? An einem gewöhnlichen Donnerstag kommen innerhalb von zwei Stunden neun Leute. Eine Pflegerin zwischen zwei Hausbesuchen, die Eier und ein Glas Honig nimmt und das Geld genau abgezählt dabeihat. Eine Frau aus dem Dorf, die vor allem reden will und am Ende aus Höflichkeit Honig kauft. Ein Ehepaar aus Berlin mit Fahrradhelmen, das lange vor dem Zettel steht und ihn fotografiert. Ein junger Mann, der zwei Netze Kartoffeln in den Kofferraum lädt und einen Schein in die Kassette steckt, ohne nachzurechnen. Und ein Junge von vielleicht zehn Jahren, der mit dem Rad kommt, sich lange umsieht und dann eine Münze in den Schlitz wirft, ohne etwas mitzunehmen.",
       "Abschnitt 7: Den Jungen kennen die Hartungs. Er heißt Mattis, wohnt zwei Höfe weiter und hat im vergangenen Herbst, wie er irgendwann zugab, mehrmals Äpfel aus dem Schuppen gegessen, ohne zu bezahlen. Seitdem kommt er jede Woche und wirft fünfzig Cent ein. Niemand hat ihm das aufgetragen. Bernd hat ausgerechnet, dass die Äpfel längst bezahlt sind, wahrscheinlich doppelt. Er hat es dem Jungen nicht gesagt. „Der soll ruhig noch ein bisschen weitermachen“, sagt er und grinst. Gisela findet das gemein. Bernd findet, der Junge lerne gerade etwas, das in keinem Schulbuch stehe, und zwar umsonst.",
       "Abschnitt 8: Die Forschung hat für solche Arrangements einen nüchternen Begriff. Die Soziologin Annegret Wiesner, die an einer Hochschule in Vorpommern über informelle Märkte arbeitet, spricht von „Vertrauen mit niedriger Fallhöhe“. Wer an einem Hofschuppen betrogen wird, verliert ein paar Euro, nicht seine Existenz. Gerade deshalb, sagt Wiesner, eigneten sich solche Orte als Übungsfeld. Man könne dort Vertrauen schenken, ohne viel zu riskieren, und es werde in der Regel belohnt. Eine Gesellschaft ohne solche Orte verlerne etwas, das sie in größeren Fragen dringend brauche, bei Wahlen, vor Gericht, im Krankenhaus. Wiesner meint das nicht als Sonntagsrede. Sie hat in drei Landkreisen Kunden von Hofläden befragt und dabei etwas gefunden, das sie selbst überrascht hat: Wer regelmäßig an einer offenen Kasse einkauft, gibt auch häufiger an, Fremden im Alltag eher zu glauben.",
       "Abschnitt 9: Von der romantischen Lesart hält Wiesner allerdings wenig. Dass die Kassen meistens stimmen, liege eben auch daran, dass auf dem Land fast jeder jeden kennt oder zumindest damit rechnen muss, erkannt zu werden. Das Vertrauen der Hartungs sei also zum Teil gut versteckte soziale Kontrolle. In der Großstadt funktionierten solche Modelle schlechter, sagt sie, und sie fügt einen Satz hinzu, der in Kleinow vermutlich nicht gut ankäme: Es sei keineswegs ausgemacht, dass die Menschen hier besser seien. Vielleicht seien sie nur sichtbarer. Sie selbst kauft übrigens an einem Hofladen bei Anklam ein und zahlt dort, wie sie sagt, immer passend.",
       "Abschnitt 10: Bernd hat von der Forscherin nie gehört, aber er hat eine ähnliche Theorie, nur drastischer formuliert. „Hier klaut keiner, weil die Oma vom Nachbarn am Fenster sitzt“, sagt er. Dann erzählt er von dem Sommer, in dem an der Bundesstraße gebaut wurde und plötzlich viel fremder Verkehr durch Kleinow lief. In diesen Wochen fehlte regelmäßig Geld, einmal fast dreißig Euro an einem Tag. Mit der Umleitung verschwanden auch die Fehlbeträge. Was er daraus schließt, sagt er nicht. Er zuckt mit den Schultern und schiebt das Heft wieder auf seine Seite des Tisches.",
       "Abschnitt 11: Gisela erzählt lieber von den Zetteln. In der Kassette liegen nämlich auch Nachrichten, die meisten freundlich, einige sind Entschuldigungen: „Hatte nur einen Zwanziger, Rest kommt Freitag“, „Die Eier letzte Woche waren klein, trotzdem danke“, einmal ein Kinderbild mit einem Huhn, das größer war als das Haus. Gisela hebt die Zettel in einer Keksdose auf, es sind inzwischen ein paar hundert. Sie zeigt auf einen, der mit Bleistift geschrieben ist: „Schulde Ihnen vier Euro. Bin umgezogen.“ Darunter klebt ein Briefumschlag. „Der war schon in Bayern“, sagt sie, „und hat es mit der Post geschickt.“",
       "Abschnitt 12: Die Hartungs werden den Schuppen nicht ewig betreiben. Bernds Knie machen nicht mehr mit, und von den drei Kindern will keines den Hof übernehmen. Die Tochter in Rostock hat vorgeschlagen, wenigstens einen Kartenleser anzuschaffen, falls jemand anderes den Verkauf weiterführt, das sei heute einfach so. Bernd hat darauf nicht geantwortet, jedenfalls nicht am Telefon. Später, beim Kaffee, sagt er, ein Kartenleser vertraue niemandem, er buche nur ab. Das sei etwas grundsätzlich anderes. Wer Geld in eine Blechkassette lege, mache etwas, und wer seine Karte an ein Gerät halte, lasse etwas machen.",
       "Abschnitt 13: Am frühen Abend geht er wie jeden Tag hinüber zum Schuppen, schließt die Kassette auf und zählt. Der Donnerstag war gut, sagt er, sogar ein Euro mehr als nötig. Dann nimmt er die Fünfzig-Cent-Münze, die oben auf den anderen liegt, und legt sie zurück in die Untertasse für das Wechselgeld. Ob das die Münze von Mattis war, lässt sich nicht beweisen. Er schreibt die zwei Zahlen in sein Heft, schließt ab und prüft, ob die dünne Kette noch hält. Sie hält. Sie hat noch nie etwas aushalten müssen."
      ]
     },
     "aufgaben": [
      {
       "frage": "Eine Sicherungsmaßnahme dient eher der Beruhigung des Besitzers als dem Schutz vor Dieben.",
       "opt": [
        "Abschnitt 1",
        "Abschnitt 2",
        "Abschnitt 3",
        "Abschnitt 4",
        "Abschnitt 5",
        "Abschnitt 6",
        "Abschnitt 7",
        "Abschnitt 8",
        "Abschnitt 9",
        "Abschnitt 10",
        "Abschnitt 11",
        "Abschnitt 12",
        "Abschnitt 13",
        "x · in keinem Abschnitt"
       ],
       "loesung": 3,
       "fest": true,
       "stelle": "„Die ist nicht für die Diebe“, sagt Gisela.",
       "erklaerung": "Die Kette ist mit einer Gartenschere sofort durch; Gisela sagt, sie sei „für ihn“, also für Bernds Gefühl."
      },
      {
       "frage": "Die Ehrlichkeit auf dem Land beruht nach Ansicht einer Fachfrau womöglich weniger auf Tugend als darauf, dass man beobachtet wird.",
       "opt": [
        "Abschnitt 1",
        "Abschnitt 2",
        "Abschnitt 3",
        "Abschnitt 4",
        "Abschnitt 5",
        "Abschnitt 6",
        "Abschnitt 7",
        "Abschnitt 8",
        "Abschnitt 9",
        "Abschnitt 10",
        "Abschnitt 11",
        "Abschnitt 12",
        "Abschnitt 13",
        "x · in keinem Abschnitt"
       ],
       "loesung": 8,
       "fest": true,
       "stelle": "Vielleicht seien sie nur sichtbarer.",
       "erklaerung": "Wiesner spricht von versteckter sozialer Kontrolle: nicht besser, nur sichtbarer."
      },
      {
       "frage": "Die Hartungs wollen mit dem Schuppen vor allem Kundschaft aus der Stadt gewinnen.",
       "opt": [
        "Abschnitt 1",
        "Abschnitt 2",
        "Abschnitt 3",
        "Abschnitt 4",
        "Abschnitt 5",
        "Abschnitt 6",
        "Abschnitt 7",
        "Abschnitt 8",
        "Abschnitt 9",
        "Abschnitt 10",
        "Abschnitt 11",
        "Abschnitt 12",
        "Abschnitt 13",
        "x · in keinem Abschnitt"
       ],
       "loesung": 13,
       "fest": true,
       "erklaerung": "Städter kommen vor (Abschnitt 6), aber als Ziel nennt Bernd nur seine Ruhe."
      },
      {
       "frage": "Der Landwirt stellt seine damaligen Beweggründe nüchterner dar, als seine Frau sie in Erinnerung hat.",
       "opt": [
        "Abschnitt 1",
        "Abschnitt 2",
        "Abschnitt 3",
        "Abschnitt 4",
        "Abschnitt 5",
        "Abschnitt 6",
        "Abschnitt 7",
        "Abschnitt 8",
        "Abschnitt 9",
        "Abschnitt 10",
        "Abschnitt 11",
        "Abschnitt 12",
        "Abschnitt 13",
        "x · in keinem Abschnitt"
       ],
       "loesung": 1,
       "fest": true,
       "stelle": "Sie erinnert sich anders.",
       "erklaerung": "Er spricht nur von Ruhe; Gisela erinnert sich an seinen Stolz, wenn die Kasse stimmte."
      },
      {
       "frage": "Überwachung trifft nach Meinung des Landwirts vor allem diejenigen, die man gar nicht verdächtigen muss.",
       "opt": [
        "Abschnitt 1",
        "Abschnitt 2",
        "Abschnitt 3",
        "Abschnitt 4",
        "Abschnitt 5",
        "Abschnitt 6",
        "Abschnitt 7",
        "Abschnitt 8",
        "Abschnitt 9",
        "Abschnitt 10",
        "Abschnitt 11",
        "Abschnitt 12",
        "Abschnitt 13",
        "x · in keinem Abschnitt"
       ],
       "loesung": 4,
       "fest": true,
       "stelle": "während die unehrlichen sich einfach eine Kapuze aufsetzten",
       "erklaerung": "Die Ehrlichen fühlen sich verdächtigt, die Unehrlichen verstecken sich einfach."
      },
      {
       "frage": "Ein Kind wird bewusst im Unklaren gelassen, weil der Landwirt der Wiedergutmachung einen erzieherischen Wert beimisst.",
       "opt": [
        "Abschnitt 1",
        "Abschnitt 2",
        "Abschnitt 3",
        "Abschnitt 4",
        "Abschnitt 5",
        "Abschnitt 6",
        "Abschnitt 7",
        "Abschnitt 8",
        "Abschnitt 9",
        "Abschnitt 10",
        "Abschnitt 11",
        "Abschnitt 12",
        "Abschnitt 13",
        "x · in keinem Abschnitt"
       ],
       "loesung": 6,
       "fest": true,
       "stelle": "Er hat es dem Jungen nicht gesagt.",
       "erklaerung": "Bernd verschweigt, dass die Äpfel längst bezahlt sind, weil der Junge dabei etwas lerne."
      },
      {
       "frage": "Eigene Erfahrungen des Landwirts stützen die Einschätzung der Soziologin, auch wenn er das nicht ausspricht.",
       "opt": [
        "Abschnitt 1",
        "Abschnitt 2",
        "Abschnitt 3",
        "Abschnitt 4",
        "Abschnitt 5",
        "Abschnitt 6",
        "Abschnitt 7",
        "Abschnitt 8",
        "Abschnitt 9",
        "Abschnitt 10",
        "Abschnitt 11",
        "Abschnitt 12",
        "Abschnitt 13",
        "x · in keinem Abschnitt"
       ],
       "loesung": 9,
       "fest": true,
       "stelle": "Mit der Umleitung verschwanden auch die Fehlbeträge.",
       "erklaerung": "Fremder Verkehr brachte Verluste, also fehlende soziale Kontrolle; die Folgerung lässt er offen."
      },
      {
       "frage": "Die Soziologin fordert, Verkaufsstellen auf dem Land mit öffentlichem Geld zu fördern.",
       "opt": [
        "Abschnitt 1",
        "Abschnitt 2",
        "Abschnitt 3",
        "Abschnitt 4",
        "Abschnitt 5",
        "Abschnitt 6",
        "Abschnitt 7",
        "Abschnitt 8",
        "Abschnitt 9",
        "Abschnitt 10",
        "Abschnitt 11",
        "Abschnitt 12",
        "Abschnitt 13",
        "x · in keinem Abschnitt"
       ],
       "loesung": 13,
       "fest": true,
       "erklaerung": "Wiesner beschreibt den Nutzen solcher Orte, fordert aber keine Förderung."
      },
      {
       "frage": "Für den Landwirt fehlt dem bargeldlosen Bezahlen ein Moment eigener Verantwortung.",
       "opt": [
        "Abschnitt 1",
        "Abschnitt 2",
        "Abschnitt 3",
        "Abschnitt 4",
        "Abschnitt 5",
        "Abschnitt 6",
        "Abschnitt 7",
        "Abschnitt 8",
        "Abschnitt 9",
        "Abschnitt 10",
        "Abschnitt 11",
        "Abschnitt 12",
        "Abschnitt 13",
        "x · in keinem Abschnitt"
       ],
       "loesung": 11,
       "fest": true,
       "stelle": "lasse etwas machen",
       "erklaerung": "Wer bar zahlt, „macht etwas“; beim Kartenleser handelt nur das Gerät."
      },
      {
       "frage": "Kleine Verluste nimmt der Landwirt gelassen hin, weil die Alternative teurer wäre.",
       "opt": [
        "Abschnitt 1",
        "Abschnitt 2",
        "Abschnitt 3",
        "Abschnitt 4",
        "Abschnitt 5",
        "Abschnitt 6",
        "Abschnitt 7",
        "Abschnitt 8",
        "Abschnitt 9",
        "Abschnitt 10",
        "Abschnitt 11",
        "Abschnitt 12",
        "Abschnitt 13",
        "x · in keinem Abschnitt"
       ],
       "loesung": 2,
       "fest": true,
       "stelle": "Dafür bezahle ich keinen Menschen, der hier sitzt",
       "erklaerung": "Vierzig Euro im Jahr sind billiger als ein Verkäufer."
      }
     ]
    },
    {
     "id": "c2l3s2",
     "titel": "Langeweile",
     "text": {
      "sorte": "zeitung",
      "quelle": "Glosse von Jens Ruhland, Kolumne „Nebensachen“, Wochenendbeilage des „Abendkurier“",
      "titel": "Zwanzig Minuten mit dem Gummibaum",
      "zeilen": [
       "Abschnitt 1: Es begann mit einem Vorsatz, und Vorsätze haben bei mir eine Halbwertszeit von etwa drei Tagen. Ich hatte gelesen, dass Erwachsene sich im Durchschnitt nicht länger als vier Minuten langweilen, bevor sie zum Telefon greifen. Vier Minuten! Ich war empört, vor allem über die anderen. Ich halte mich für einen geduldigen Menschen, ich lese lange Romane und koche Marmelade. Dann sah ich auf meinen Bildschirm, der mir freundlich mitteilte, dass ich ihn am Vortag einhundertsiebenundachtzigmal entsperrt hatte. Ich beschloss, die Sache wissenschaftlich anzugehen, also ohne Wissenschaft. Eine Woche lang wollte ich jede Wartezeit ohne Telefon verbringen. Einfach dasitzen. Wie früher, als es früher noch gab.",
       "Abschnitt 2: Die erste Gelegenheit bot das Bürgeramt, Abteilung Meldewesen, Wartenummer 417. Auf der Anzeigetafel stand 389. Ich setzte mich auf einen dieser Stühle, auf denen man weder sitzen noch liegen, sondern nur warten kann, und schob das Telefon tief in die Jackentasche. Um mich herum leuchteten zwanzig Gesichter von unten blau. Niemand sah auf. Der Heizkörper unter dem Fenster knackte in unregelmäßigen Abständen. Ich kam mir vor wie jemand, der im vollen Zug als Einziger nicht liest, und zwar im Jahr 1975, also verdächtig. Eine Frau neben mir sah mich an, als hätte ich etwas zu verbergen.",
       "Abschnitt 3: Was tut man, wenn man nichts tut? Ich las zunächst alles, was es zu lesen gab. Die Hinweise zum Datenschutz, das Plakat zur Organspende, den Feuerlöscher. Ich erfuhr, dass er im März zuletzt geprüft worden war, von einem Herrn mit unleserlicher Unterschrift. Danach zählte ich die Deckenplatten, es waren achtundvierzig, drei davon mit Wasserflecken. Einer der Flecken sah aus wie Italien, wenn man großzügig war. Nach elf Minuten war ich mit dem Raum fertig, die Anzeige stand auf 396. Mir war, als hätte ich einen Halbmarathon hinter mir, dabei war ich nur einmal mit den Augen um ein Zimmer gegangen.",
       "Abschnitt 4: Und dann geschah etwas, wovon in keiner Zeitschrift die Rede gewesen war. Mir fiel ein Gummibaum auf, der in einer Ecke stand und den ich bis dahin für künstlich gehalten hatte. Er war echt. Jemand goss ihn, denn die Erde war feucht, und jemand hatte ein welkes Blatt abgeschnitten, sauber, mit einer Schere. Ich begann mir diesen Jemand vorzustellen. Eine Sachbearbeiterin vermutlich, die morgens vor dem ersten Kunden mit einer Gießkanne durch den Wartebereich geht. Ich dachte darüber nach, ob sie dem Baum einen Namen gegeben hatte. Ich dachte darüber nach, ob ich sie danach fragen sollte. Ich fragte nicht.",
       "Abschnitt 5: Die Langeweileforschung, und es gibt sie wirklich, unterscheidet nach meinem laienhaften Verständnis zwei Sorten. Die eine lähmt und macht schlechte Laune. Die andere ist unruhig und sucht einen Ausweg. Einer von ihnen hat Versuchspersonen eine Stunde lang Telefonnummern abschreiben und danach Ideen sammeln lassen. Aus der zweiten Sorte, sagen die Forscher, entstehen Ideen, Pläne, gelegentlich Kunst. Ich kann nach meinem ersten Versuch bestätigen, dass aus ihr zumindest Gedanken über Gummibäume entstehen. Ob das schon Kunst ist, mögen andere beurteilen. Mein Freund Holger, dem ich am Abend davon erzählte, meinte, so fange Wahnsinn an. Holger hat allerdings vier Bildschirme auf dem Schreibtisch und sollte zu dem Thema schweigen.",
       "Abschnitt 6: Der zweite Tag war schwieriger. Supermarktkasse, sechs Leute vor mir, vorne eine Kundin mit Rabattheft. An der Nachbarkasse piepte ein Scanner wie ein kleiner Wecker. Hier gibt es keine Gummibäume, hier gibt es nur Kaugummis, und die hängen auf Kinderhöhe. Ich spürte, wie meine rechte Hand in Richtung Hosentasche wanderte, ganz von allein, wie die Hand eines Rauchers, der vor einem Jahr aufgehört hat. Ich hielt sie fest, mit der linken. Der Mann hinter mir sah das und rückte einen halben Schritt zurück. Ich verstehe ihn. Wer an der Kasse seine eigene Hand festhält, ist jemand, dem man besser nicht zu nahe kommt.",
       "Abschnitt 7: Am dritten Tag, bei der Zahnärztin, machte ich eine Beobachtung, die mich bis heute beschäftigt. Im Wartezimmer saß ein alter Herr, der weder ein Telefon noch eine Zeitschrift in der Hand hatte. Er saß einfach da, die Hände auf den Knien, und sah aus dem Fenster, auf eine Wand. Ich habe ihn eine Viertelstunde lang beobachtet, so unauffällig, wie man in einem Wartezimmer jemanden beobachten kann, also gar nicht. Er wirkte nicht gelangweilt. Er wirkte, als hätte er etwas zu tun. Als man ihn aufrief, stand er auf, und ich hatte den Eindruck, man habe ihn bei etwas gestört.",
       "Abschnitt 8: Ich habe ihn nicht gefragt, was er da gemacht hat. Man fragt im Wartezimmer nicht, schon gar nicht beim Zahnarzt, wo jeder mit seinen eigenen Sorgen beschäftigt ist. Aber ich habe mir eine Antwort zurechtgelegt, und sie gefällt mir. Ich glaube, er hat sich erinnert. An ein Haus vielleicht, an einen Sommer, an einen Streit, den er gewonnen oder verloren hat. Er hatte, anders als ich, offenbar einen Vorrat. Wer achtzig Jahre gelebt hat, muss sich im Wartezimmer nicht langweilen, er kann einfach umblättern. Ich dagegen hatte bisher nur Italien an der Decke.",
       "Abschnitt 9: Der vierte Tag fiel aus, weil ich nirgends warten musste. Das klingt nach Glück, war aber eine Enttäuschung. Ich ertappte mich am Nachmittag bei der Überlegung, ob ich nicht wenigstens bei der Post vorbeigehen sollte, wo um diese Zeit verlässlich eine Schlange steht. Ich tat es nicht. Ich wollte das Experiment nicht durch Vorsatz verfälschen, außerdem hatte ich nichts zu verschicken. Aber dass ich es überhaupt erwogen habe, sagt vermutlich mehr über diese Woche als alles andere, was ich hier aufschreibe. Meine Frau fragte am Abend, ob mir etwas fehle. Ich sagte, mir fehle eine Schlange.",
       "Abschnitt 10: Am fünften Tag, ich gebe es zu, habe ich verloren. Bahnsteig, Zugausfall, vierzig Minuten. Ich habe mich zwölf Minuten lang tapfer mit den Fahrplänen beschäftigt und dann nachgesehen, ob es eine andere Verbindung gibt. Das ist erlaubt, dachte ich, das ist kein Vergnügen, das ist Organisation. Danach habe ich, weil das Telefon schon einmal in der Hand war, die Nachrichten gelesen, dann das Wetter für eine Stadt, in die ich nicht fahre, dann das Ergebnis eines Fußballspiels, das mich nicht interessiert. Als der Zug kam, hatte ich nichts davon behalten. Vom Gummibaum kenne ich jedes Blatt.",
       "Abschnitt 11: Ich will nicht so tun, als hätte mich diese Woche geläutert. Das wäre die Art von Kolumne, die ich selbst nicht lesen mag: Mann legt Telefon weg, entdeckt die Welt, Ende. Langeweile ist unangenehm, und ich habe in diesen Tagen nicht jede Minute genossen. Im Bürgeramt hätte ich gern gewusst, wie das Spiel am Vorabend ausgegangen war, und beim Zahnarzt hätte ich lieber gelesen als an den Bohrer gedacht. Es gibt Wartezeiten, die nichts hergeben, außer dass sie vorbeigehen. Wer etwas anderes behauptet, hat entweder ein Buch darüber geschrieben oder geht sehr selten zum Zahnarzt.",
       "Abschnitt 12: Und doch ist etwas hängengeblieben, nur nicht das, was ich erwartet hatte. Ich hatte gedacht, ich würde mich ohne Telefon besser konzentrieren können, auf die Arbeit, auf Gespräche. Das ist nicht passiert, jedenfalls nicht messbar. Was passiert ist: Ich erinnere mich an diese Woche. An die Deckenplatten, an den alten Herrn, an meine Hand an der Kasse. Meine Frau behauptet, ich hätte in dieser Woche auch mehr erzählt. Von der Woche davor weiß ich so gut wie nichts mehr, obwohl ich sie, wie mir der Bildschirm versichert, sehr gründlich mit Informationen verbracht habe. Langeweile ist offenbar ein schlechter Zeitvertreib, aber ein gutes Gedächtnis.",
       "Abschnitt 13: Gestern war ich noch einmal im Bürgeramt, wegen eines Formulars, das man mir beim ersten Mal nicht gegeben hatte. Der Gummibaum steht noch da, und es fehlt wieder ein Blatt, sauber abgeschnitten. Meine Nummer war 233, die Anzeige stand auf 230, ich kam nach vier Minuten dran. Ich war, das schreibe ich nicht ohne Verlegenheit, ein wenig enttäuscht. Die Sachbearbeiterin war übrigens ein Mann, etwa fünfzig, mit Halbbrille. Neben seinem Bildschirm stand eine kleine grüne Gießkanne. Ich habe ihn nicht gefragt. Manche Geschichten werden nicht besser, wenn man ihr Ende kennt."
      ]
     },
     "aufgaben": [
      {
       "frage": "Der Verfasser spricht einem Kritiker das Recht auf ein Urteil ab, weil dieser selbst betroffen ist.",
       "opt": [
        "Abschnitt 1",
        "Abschnitt 2",
        "Abschnitt 3",
        "Abschnitt 4",
        "Abschnitt 5",
        "Abschnitt 6",
        "Abschnitt 7",
        "Abschnitt 8",
        "Abschnitt 9",
        "Abschnitt 10",
        "Abschnitt 11",
        "Abschnitt 12",
        "Abschnitt 13",
        "x · in keinem Abschnitt"
       ],
       "loesung": 4,
       "fest": true,
       "stelle": "sollte zu dem Thema schweigen",
       "erklaerung": "Holger hält das Experiment für Wahnsinn, sitzt aber selbst vor vier Bildschirmen."
      },
      {
       "frage": "Wer heute beim Warten nichts tut, macht sich verdächtig.",
       "opt": [
        "Abschnitt 1",
        "Abschnitt 2",
        "Abschnitt 3",
        "Abschnitt 4",
        "Abschnitt 5",
        "Abschnitt 6",
        "Abschnitt 7",
        "Abschnitt 8",
        "Abschnitt 9",
        "Abschnitt 10",
        "Abschnitt 11",
        "Abschnitt 12",
        "Abschnitt 13",
        "x · in keinem Abschnitt"
       ],
       "loesung": 1,
       "fest": true,
       "stelle": "als hätte ich etwas zu verbergen",
       "erklaerung": "Alle schauen aufs Telefon; wer es nicht tut, wird misstrauisch angesehen."
      },
      {
       "frage": "Der Verfasser empfiehlt seinen Lesern, das Telefon dauerhaft aus dem Alltag zu verbannen.",
       "opt": [
        "Abschnitt 1",
        "Abschnitt 2",
        "Abschnitt 3",
        "Abschnitt 4",
        "Abschnitt 5",
        "Abschnitt 6",
        "Abschnitt 7",
        "Abschnitt 8",
        "Abschnitt 9",
        "Abschnitt 10",
        "Abschnitt 11",
        "Abschnitt 12",
        "Abschnitt 13",
        "x · in keinem Abschnitt"
       ],
       "loesung": 13,
       "fest": true,
       "erklaerung": "Er lehnt gerade diese Art von Bekehrungskolumne ab und gibt keine Empfehlung."
      },
      {
       "frage": "Erst die Leere des Wartens lässt den Verfasser etwas bemerken, das ihm sonst entgangen wäre.",
       "opt": [
        "Abschnitt 1",
        "Abschnitt 2",
        "Abschnitt 3",
        "Abschnitt 4",
        "Abschnitt 5",
        "Abschnitt 6",
        "Abschnitt 7",
        "Abschnitt 8",
        "Abschnitt 9",
        "Abschnitt 10",
        "Abschnitt 11",
        "Abschnitt 12",
        "Abschnitt 13",
        "x · in keinem Abschnitt"
       ],
       "loesung": 3,
       "fest": true,
       "stelle": "den ich bis dahin für künstlich gehalten hatte",
       "erklaerung": "Ohne Ablenkung entdeckt er, dass der Gummibaum echt ist und gepflegt wird."
      },
      {
       "frage": "Der Verfasser vermutet, dass manche Menschen Untätigkeit gar nicht als Leere erleben.",
       "opt": [
        "Abschnitt 1",
        "Abschnitt 2",
        "Abschnitt 3",
        "Abschnitt 4",
        "Abschnitt 5",
        "Abschnitt 6",
        "Abschnitt 7",
        "Abschnitt 8",
        "Abschnitt 9",
        "Abschnitt 10",
        "Abschnitt 11",
        "Abschnitt 12",
        "Abschnitt 13",
        "x · in keinem Abschnitt"
       ],
       "loesung": 6,
       "fest": true,
       "stelle": "Er wirkte, als hätte er etwas zu tun.",
       "erklaerung": "Der alte Herr tut äußerlich nichts, wirkt aber beschäftigt und nicht gelangweilt."
      },
      {
       "frage": "Der Verfasser stellt mit einiger Selbstironie fest, dass er Wartezeiten inzwischen fast sucht.",
       "opt": [
        "Abschnitt 1",
        "Abschnitt 2",
        "Abschnitt 3",
        "Abschnitt 4",
        "Abschnitt 5",
        "Abschnitt 6",
        "Abschnitt 7",
        "Abschnitt 8",
        "Abschnitt 9",
        "Abschnitt 10",
        "Abschnitt 11",
        "Abschnitt 12",
        "Abschnitt 13",
        "x · in keinem Abschnitt"
       ],
       "loesung": 8,
       "fest": true,
       "stelle": "ob ich nicht wenigstens bei der Post vorbeigehen sollte",
       "erklaerung": "Er erwägt, sich freiwillig in eine Schlange zu stellen."
      },
      {
       "frage": "Mit einer Ausrede umgeht der Verfasser die selbst gesetzte Regel.",
       "opt": [
        "Abschnitt 1",
        "Abschnitt 2",
        "Abschnitt 3",
        "Abschnitt 4",
        "Abschnitt 5",
        "Abschnitt 6",
        "Abschnitt 7",
        "Abschnitt 8",
        "Abschnitt 9",
        "Abschnitt 10",
        "Abschnitt 11",
        "Abschnitt 12",
        "Abschnitt 13",
        "x · in keinem Abschnitt"
       ],
       "loesung": 9,
       "fest": true,
       "stelle": "das ist kein Vergnügen, das ist Organisation",
       "erklaerung": "Er erklärt den Griff zum Telefon zur Pflicht und liest danach Beliebiges."
      },
      {
       "frage": "Die Mitarbeiter des Bürgeramts beschweren sich, weil der Verfasser sich in die Pflege des Wartebereichs einmischt.",
       "opt": [
        "Abschnitt 1",
        "Abschnitt 2",
        "Abschnitt 3",
        "Abschnitt 4",
        "Abschnitt 5",
        "Abschnitt 6",
        "Abschnitt 7",
        "Abschnitt 8",
        "Abschnitt 9",
        "Abschnitt 10",
        "Abschnitt 11",
        "Abschnitt 12",
        "Abschnitt 13",
        "x · in keinem Abschnitt"
       ],
       "loesung": 13,
       "fest": true,
       "erklaerung": "Er spricht mit niemandem über den Gummibaum, eine Beschwerde gibt es nicht."
      },
      {
       "frage": "Der Verfasser grenzt sich spöttisch von verklärenden Darstellungen der Langeweile ab.",
       "opt": [
        "Abschnitt 1",
        "Abschnitt 2",
        "Abschnitt 3",
        "Abschnitt 4",
        "Abschnitt 5",
        "Abschnitt 6",
        "Abschnitt 7",
        "Abschnitt 8",
        "Abschnitt 9",
        "Abschnitt 10",
        "Abschnitt 11",
        "Abschnitt 12",
        "Abschnitt 13",
        "x · in keinem Abschnitt"
       ],
       "loesung": 10,
       "fest": true,
       "stelle": "hat entweder ein Buch darüber geschrieben",
       "erklaerung": "Wer Langeweile nur schön findet, verdient daran oder kennt sie nicht."
      },
      {
       "frage": "Der Verfasser lässt eine Frage lieber offen, als sich die Vorstellung durch die Wirklichkeit nehmen zu lassen.",
       "opt": [
        "Abschnitt 1",
        "Abschnitt 2",
        "Abschnitt 3",
        "Abschnitt 4",
        "Abschnitt 5",
        "Abschnitt 6",
        "Abschnitt 7",
        "Abschnitt 8",
        "Abschnitt 9",
        "Abschnitt 10",
        "Abschnitt 11",
        "Abschnitt 12",
        "Abschnitt 13",
        "x · in keinem Abschnitt"
       ],
       "loesung": 12,
       "fest": true,
       "stelle": "Manche Geschichten werden nicht besser, wenn man ihr Ende kennt.",
       "erklaerung": "Er fragt den Mann mit der Gießkanne bewusst nicht."
      }
     ]
    },
    {
     "id": "c2l3s3",
     "titel": "Erinnern und Vergessen",
     "text": {
      "sorte": "zeitung",
      "quelle": "Porträt von Lea Brandstätter, Magazin „Stadtland“, Herbstausgabe",
      "titel": "Der Mann mit den fremden Alben",
      "zeilen": [
       "Abschnitt 1: In Ralf Kowalczyks Lagerhalle in Duisburg riecht es nach Möbelpolitur und kaltem Zigarettenrauch, obwohl hier seit Jahren niemand mehr raucht. Der Geruch kommt aus den Schränken. Kowalczyk, achtundfünfzig, gelernter Tischler, löst seit fast dreißig Jahren Haushalte auf, meist nach einem Todesfall, manchmal nach einem Umzug ins Heim. Er arbeitet mit zwei Helfern und einem Transporter, dessen Kilometerstand er nicht mehr nennen mag. Er verkauft, was sich verkaufen lässt, spendet, was jemand brauchen kann, und fährt den Rest zum Wertstoffhof. So weit ist das ein Gewerbe wie andere auch. Ungewöhnlich ist das Regal ganz hinten in der Halle, für das er keine Rechnung schreibt.",
       "Abschnitt 2: Es ist ein Schwerlastregal aus Stahl, vier Meter breit, bis unter die Decke gefüllt. Darin stehen Fotoalben, mehr als tausend, schätzt Kowalczyk, gezählt hat er sie nie. Alben mit Kunstledereinband und goldener Prägung, Alben mit Pergamentpapier zwischen den Seiten, Alben aus den Achtzigern mit Klebefolien, unter denen die Bilder langsam gelb werden. Jedes trägt einen Aufkleber mit einem Straßennamen und einer Jahreszahl, keinen Familiennamen. „Den Namen schreib ich nicht dran“, sagt er. „Das sind ja nicht meine Leute.“ Ein Satz, der schwer zu dem Regal passt, vor dem er gerade steht.",
       "Abschnitt 3: Angefangen hat es in Meiderich, Mitte der Neunziger. Eine alte Frau war gestorben, die Nichte aus Süddeutschland hatte am Telefon gesagt, er solle alles mitnehmen, sie komme nicht. Er erinnert sich an die Spitzendeckchen auf dem Fernseher und an einen leeren Vogelkäfig, den Wellensittich hatten die Nachbarn schon geholt. Alles hieß in diesem Fall auch zwölf Alben, sorgfältig beschriftet, von der Hochzeit 1951 bis zum letzten Geburtstag. Kowalczyk hat sie in seinen Transporter gelegt, auf den Beifahrersitz, nicht hinten zu den Säcken. Warum, kann er bis heute nicht sagen. Er hat sie in seiner Garage abgestellt und gedacht, die Nichte werde sich schon noch melden. Sie hat sich nie gemeldet.",
       "Abschnitt 4: Seither sind es immer mehr geworden. In fast jeder Wohnung, sagt Kowalczyk, gebe es irgendwo Fotos, und in etwa der Hälfte der Fälle wolle sie niemand haben. Die Erben nehmen den Schmuck, die Papiere, manchmal ein Bild von der Wand. Die Alben bleiben liegen. Manchmal stecken sie schon im Müllsack, wenn er kommt, ganz oben, damit er sie nicht übersieht. Er erzählt das ohne Vorwurf. Er hat Verständnis für Leute, die eine Wohnung in Duisburg an einem einzigen Wochenende auflösen müssen und am Montag wieder in München arbeiten. „Die haben das alles ja im Kopf“, sagt er. Dann schweigt er eine Weile und fügt hinzu: „Hoffe ich.“",
       "Abschnitt 5: Was er mit den Alben macht? Zunächst einmal nichts. Er bewahrt sie auf, das ist alles. Er sortiert sie nicht, er digitalisiert sie nicht, und er schaut sie, wie er sagt, auch nicht an. Das stimmt nicht ganz. Seine Frau Birgit, die die Buchhaltung des Betriebs macht, erzählt, dass er an manchen Abenden noch einmal in die Halle fährt, angeblich um nach der Alarmanlage zu sehen. Wenn sie ihn dann anruft, höre sie im Hintergrund, wie Seiten umgeblättert werden. „Pergamentpapier“, sagt sie, „das raschelt so typisch.“ Kowalczyk hört bei dieser Geschichte demonstrativ weg.",
       "Abschnitt 6: Manche halten Kowalczyk für einen sentimentalen Sammler, andere für einen Fall für den Datenschutz. Ein Anwalt hat ihm einmal geschrieben, er dürfe Fotos fremder Leute nicht einfach aufbewahren, und ihn aufgefordert, ein bestimmtes Album herauszugeben. Kowalczyk hat es herausgegeben, sofort und kostenlos. Er war, sagt er, eher erleichtert. Es war das erste Mal, dass überhaupt jemand nach einem der Alben gefragt hatte. Dass die Aufforderung von einem Anwalt kam und nicht von der Familie selbst, erwähnt er beiläufig, als sei das ein unwichtiges Detail. Man merkt, dass er es nicht für unwichtig hält.",
       "Abschnitt 7: Inzwischen kommt das häufiger vor, nicht mit Anwalt, sondern mit einer Bitte. Seit eine Lokalzeitung vor drei Jahren über das Regal berichtet hat, melden sich Leute. Eine Frau aus Oberhausen, die nach Fotos ihrer Großeltern suchte, deren Wohnung ein Onkel hatte räumen lassen. Ein Mann, der wissen wollte, ob es von seiner Grundschulklasse ein Foto gebe, das die Lehrerin aufbewahrt haben könnte. Etwa zwanzig Alben hat Kowalczyk auf diese Weise zurückgegeben. Er redet ungern darüber. Wenn er es doch tut, wird seine Stimme leiser, und er fängt an, an seinem Ehering zu drehen.",
       "Abschnitt 8: Die Kulturwissenschaftlerin Dörte Lindqvist, die über private Fotografie forscht und das Regal besucht hat, nennt es ein „Archiv des Übrigbleibens“. Sie hat zwei Tage in der Halle verbracht und sich seitenweise Notizen gemacht. Familienalben, sagt sie, seien nie für Fremde gemacht worden. Sie funktionierten nur zusammen mit einer Stimme, die erzählt, wer da neben wem steht und warum der Onkel auf allen Bildern fehlt. Wenn diese Stimme verstummt, bleibe ein Album zurück, das niemand mehr lesen kann, auch die Erben nicht. „Das Vergessen beginnt nicht mit dem Wegwerfen“, sagt Lindqvist. „Es beginnt viel früher, an dem Tag, an dem niemand mehr fragt.“",
       "Abschnitt 9: Kowalczyk hält von solchen Formulierungen wenig, er findet sie zu schön. In der Sache aber gibt er ihr recht, auf seine Weise. Er zeigt auf ein Album mit braunem Einband, Aufkleber „Gneisenaustraße, 2009“. Darin sind nur Bilder von Kindern, Hunderte, über Jahrzehnte, immer dieselben drei Geschwister, erst klein, dann größer, dann mit eigenen Kindern auf dem Schoß. Die Wohnung gehörte einer Frau, die zuletzt allein lebte. Von den Kindern auf den Fotos ist keines zur Räumung gekommen. „Die wissen wahrscheinlich nicht mal, dass es das gibt“, sagt er. Man hört, dass er das nicht glaubt.",
       "Abschnitt 10: Ist das, was er tut, Erinnern? Kowalczyk weicht der Frage aus. Er erinnere sich ja an nichts, sagt er, er habe diese Menschen nie gekannt, er kenne nur ihre Wohnungen, und die meistens leer. Dann erzählt er doch von einer Küche in Neumühl, in der noch ein Kalender von 1998 hing, und von einem Wohnzimmer mit einem Sofakissen, auf dem stand: „Hier ruht der Hausherr“. Er hat das Kissen damals weggeworfen und es danach, wie er sagt, ein bisschen bereut. Es sind sehr genaue Erinnerungen für einen Mann, der sich an nichts erinnert.",
       "Abschnitt 11: Für die Zukunft des Regals hat er keinen Plan. Ein Stadtarchiv hat angeboten, einen Teil der Alben zu übernehmen, allerdings nur solche mit „lokalhistorischem Wert“, also Bilder von Straßen, Zechen und Festumzügen. Hochzeiten und Kindergeburtstage seien leider nicht von Interesse. Kowalczyk hat abgelehnt. Er wolle die Alben nicht auseinandernehmen, sagt er, ein Album sei kein Steinbruch. Birgit sagt, er habe abgelehnt, weil ihm die Leute auf den Hochzeitsbildern wichtiger seien als die Zechen. Die Archivarin, sagt er, sei sehr freundlich gewesen und habe sich für die Absage sogar bedankt. Er widerspricht Birgit nicht. Er sagt nur, die Zechen hätten schon genug Denkmäler.",
       "Abschnitt 12: Seine eigenen Fotos, erzählt Birgit, als er kurz in der Halle verschwindet, liegen ungeordnet in zwei Schuhkartons im Keller. Ein Album hat er nie angelegt. Sie selbst lässt seit einigen Jahren wieder Bilder drucken, ein paar im Jahr, nur die besten. Die Kinder haben ihre Bilder auf dem Telefon, Tausende, von denen er die meisten nie gesehen hat. Sie lacht, als sie das sagt, aber nur kurz. Dann fragt sie, wer wohl in vierzig Jahren diese Telefone ausräumen werde. Kowalczyk kommt zurück, hat den letzten Satz gehört und sagt, dafür gebe es dann sicher eine App. Es klingt nicht so, als würde ihn das beruhigen.",
       "Abschnitt 13: Zum Abschied zieht er ein Album aus dem Regal, das er offenbar vorher herausgesucht hat. Es ist dünn, nur ein paar Seiten, Schwarzweißbilder mit gezacktem Rand. Ein Mann auf einem Motorrad, eine Frau vor einem Zelt, ein Strand, der nach Ostsee aussieht. Auf der letzten Seite steht in Bleistift: „Unser erster gemeinsamer Urlaub. Damit wir es nicht vergessen.“ Kowalczyk klappt es zu und stellt es zurück an seinen Platz, zwischen „Kaiserstraße, 2014“ und „Wanheimer Straße, 2002“. „Haben sie ja auch nicht“, sagt er. „Jetzt erinnere ich mich halt für sie.“"
      ]
     },
     "aufgaben": [
      {
       "frage": "Kowalczyk betont eine Distanz, die sein Handeln offensichtlich widerlegt.",
       "opt": [
        "Abschnitt 1",
        "Abschnitt 2",
        "Abschnitt 3",
        "Abschnitt 4",
        "Abschnitt 5",
        "Abschnitt 6",
        "Abschnitt 7",
        "Abschnitt 8",
        "Abschnitt 9",
        "Abschnitt 10",
        "Abschnitt 11",
        "Abschnitt 12",
        "Abschnitt 13",
        "x · in keinem Abschnitt"
       ],
       "loesung": 1,
       "fest": true,
       "stelle": "Ein Satz, der schwer zu dem Regal passt",
       "erklaerung": "„Nicht meine Leute“ sagt einer, der tausend fremde Alben aufhebt."
      },
      {
       "frage": "Die Verfasserin zeigt mit leiser Ironie, dass Kowalczyks Selbstbild nicht stimmt.",
       "opt": [
        "Abschnitt 1",
        "Abschnitt 2",
        "Abschnitt 3",
        "Abschnitt 4",
        "Abschnitt 5",
        "Abschnitt 6",
        "Abschnitt 7",
        "Abschnitt 8",
        "Abschnitt 9",
        "Abschnitt 10",
        "Abschnitt 11",
        "Abschnitt 12",
        "Abschnitt 13",
        "x · in keinem Abschnitt"
       ],
       "loesung": 9,
       "fest": true,
       "stelle": "Es sind sehr genaue Erinnerungen für einen Mann, der sich an nichts erinnert.",
       "erklaerung": "Er behauptet, sich an nichts zu erinnern, und erzählt dann genaue Einzelheiten."
      },
      {
       "frage": "Kowalczyk fürchtet, dass ihm die Aufbewahrung der Alben eines Tages ganz verboten wird.",
       "opt": [
        "Abschnitt 1",
        "Abschnitt 2",
        "Abschnitt 3",
        "Abschnitt 4",
        "Abschnitt 5",
        "Abschnitt 6",
        "Abschnitt 7",
        "Abschnitt 8",
        "Abschnitt 9",
        "Abschnitt 10",
        "Abschnitt 11",
        "Abschnitt 12",
        "Abschnitt 13",
        "x · in keinem Abschnitt"
       ],
       "loesung": 13,
       "fest": true,
       "erklaerung": "Ein Anwalt verlangt ein Album zurück (Abschnitt 6), von einer Sorge vor einem Verbot ist keine Rede."
      },
      {
       "frage": "Er behandelte die Alben von Anfang an anders als den übrigen Hausrat, ohne es begründen zu können.",
       "opt": [
        "Abschnitt 1",
        "Abschnitt 2",
        "Abschnitt 3",
        "Abschnitt 4",
        "Abschnitt 5",
        "Abschnitt 6",
        "Abschnitt 7",
        "Abschnitt 8",
        "Abschnitt 9",
        "Abschnitt 10",
        "Abschnitt 11",
        "Abschnitt 12",
        "Abschnitt 13",
        "x · in keinem Abschnitt"
       ],
       "loesung": 2,
       "fest": true,
       "stelle": "auf den Beifahrersitz, nicht hinten zu den Säcken",
       "erklaerung": "Der Platz im Wagen zeigt die Wertschätzung; warum, weiß er selbst nicht."
      },
      {
       "frage": "Ihn kränkt, dass eine Familie den Kontakt nicht persönlich gesucht hat.",
       "opt": [
        "Abschnitt 1",
        "Abschnitt 2",
        "Abschnitt 3",
        "Abschnitt 4",
        "Abschnitt 5",
        "Abschnitt 6",
        "Abschnitt 7",
        "Abschnitt 8",
        "Abschnitt 9",
        "Abschnitt 10",
        "Abschnitt 11",
        "Abschnitt 12",
        "Abschnitt 13",
        "x · in keinem Abschnitt"
       ],
       "loesung": 5,
       "fest": true,
       "stelle": "Man merkt, dass er es nicht für unwichtig hält.",
       "erklaerung": "Er spielt den Anwalt herunter, doch gerade das verrät, dass es ihn beschäftigt."
      },
      {
       "frage": "Eine Erinnerung geht nach Ansicht einer Forscherin schon verloren, bevor ihr Träger verschwindet.",
       "opt": [
        "Abschnitt 1",
        "Abschnitt 2",
        "Abschnitt 3",
        "Abschnitt 4",
        "Abschnitt 5",
        "Abschnitt 6",
        "Abschnitt 7",
        "Abschnitt 8",
        "Abschnitt 9",
        "Abschnitt 10",
        "Abschnitt 11",
        "Abschnitt 12",
        "Abschnitt 13",
        "x · in keinem Abschnitt"
       ],
       "loesung": 7,
       "fest": true,
       "stelle": "an dem Tag, an dem niemand mehr fragt",
       "erklaerung": "Nicht das Wegwerfen, sondern das Ende des Erzählens und Nachfragens ist der Beginn des Vergessens."
      },
      {
       "frage": "Seine Frau überführt ihn liebevoll einer kleinen Unwahrheit.",
       "opt": [
        "Abschnitt 1",
        "Abschnitt 2",
        "Abschnitt 3",
        "Abschnitt 4",
        "Abschnitt 5",
        "Abschnitt 6",
        "Abschnitt 7",
        "Abschnitt 8",
        "Abschnitt 9",
        "Abschnitt 10",
        "Abschnitt 11",
        "Abschnitt 12",
        "Abschnitt 13",
        "x · in keinem Abschnitt"
       ],
       "loesung": 4,
       "fest": true,
       "stelle": "das raschelt so typisch",
       "erklaerung": "Er sagt, er schaue die Alben nie an; sie hört am Telefon die Seiten."
      },
      {
       "frage": "Die Wissenschaftlerin hält das Regal für ein Vorbild, dem die öffentlichen Archive folgen sollten.",
       "opt": [
        "Abschnitt 1",
        "Abschnitt 2",
        "Abschnitt 3",
        "Abschnitt 4",
        "Abschnitt 5",
        "Abschnitt 6",
        "Abschnitt 7",
        "Abschnitt 8",
        "Abschnitt 9",
        "Abschnitt 10",
        "Abschnitt 11",
        "Abschnitt 12",
        "Abschnitt 13",
        "x · in keinem Abschnitt"
       ],
       "loesung": 13,
       "fest": true,
       "erklaerung": "Lindqvist gibt dem Regal einen Namen, empfiehlt den Archiven aber nichts."
      },
      {
       "frage": "Er findet es ungerecht, dass öffentliche Erinnerung nur dem gilt, was als bedeutend gilt.",
       "opt": [
        "Abschnitt 1",
        "Abschnitt 2",
        "Abschnitt 3",
        "Abschnitt 4",
        "Abschnitt 5",
        "Abschnitt 6",
        "Abschnitt 7",
        "Abschnitt 8",
        "Abschnitt 9",
        "Abschnitt 10",
        "Abschnitt 11",
        "Abschnitt 12",
        "Abschnitt 13",
        "x · in keinem Abschnitt"
       ],
       "loesung": 10,
       "fest": true,
       "stelle": "die Zechen hätten schon genug Denkmäler",
       "erklaerung": "Das Archiv will nur Zechen und Umzüge; er verteidigt die gewöhnlichen Hochzeitsbilder."
      },
      {
       "frage": "Kowalczyk sieht sich als Stellvertreter, der eine Aufgabe anderer übernommen hat.",
       "opt": [
        "Abschnitt 1",
        "Abschnitt 2",
        "Abschnitt 3",
        "Abschnitt 4",
        "Abschnitt 5",
        "Abschnitt 6",
        "Abschnitt 7",
        "Abschnitt 8",
        "Abschnitt 9",
        "Abschnitt 10",
        "Abschnitt 11",
        "Abschnitt 12",
        "Abschnitt 13",
        "x · in keinem Abschnitt"
       ],
       "loesung": 12,
       "fest": true,
       "stelle": "Jetzt erinnere ich mich halt für sie.",
       "erklaerung": "Das Paar wollte nicht vergessen; nun erinnert er an ihrer Stelle."
      }
     ]
    }
   ]
  }
 ],
 "laeufe": [
  {
   "id": "tc2ll1",
   "titel": "Prüfungslauf 1 · Grenzen",
   "minuten": 80,
   "teile": [
    {
     "nr": 1,
     "art": "textwahl",
     "text": {
      "sorte": "zeitung",
      "quelle": "Stadtzeitung Mittelrhein, Kolumne von Jörg Wettstein",
      "titel": "Johannisbeeren",
      "zeilen": [
       "Anfang: Zwischen unserem Garten und dem der Familie Kaminski stand jahrelang nichts als eine Reihe Johannisbeersträucher. Wem sie gehörten, hat nie jemand gefragt. Geerntet hat, wer gerade Zeit hatte, und meistens waren das die Kinder beider Häuser. Im Juli standen dort oft vier Kinder mit roten Fingern und einer gemeinsamen Schüssel.",
       "Absatz A: Im nächsten Frühjahr stand an ihrer Stelle ein Zaun, einen Meter achtzig hoch, aus grünem Gitter. Er kam an einem Dienstag mit zwei Monteuren, die nach drei Stunden wieder weg waren. Wir hatten ihn nicht bestellt, aber auch nicht widersprochen. Bezahlt hat ihn der Nachbar allein, wie er bei jeder Gelegenheit betont.",
       "Absatz B: Das änderte sich, als die Kaminskis ihr Haus verkauften. Der neue Eigentümer, ein freundlicher Herr aus Wiesbaden, ließ als Erstes einen Vermesser kommen. Der schlug zwei rot-weiße Pflöcke in den Boden, ziemlich genau durch die Mitte der Sträucher.",
       "Absatz C: Seitdem grüßen wir uns über dieses Gitter hinweg so höflich wie nie zuvor. Eine Grenze, habe ich gelernt, beendet keinen Streit, sie macht ihn bloß überflüssig. Ob das ein Gewinn ist, weiß ich bis heute nicht. Die Kinder jedenfalls essen jetzt gekaufte Beeren.",
       "Absatz D: Ein paar Wochen später lag ein Brief in unserem Kasten, höflich formuliert und mit einem Lageplan, auf dem die Grenze rot eingezeichnet war. Darin bot uns der Nachbar zwei Möglichkeiten an: Entweder entferne man die Sträucher gemeinsam, oder jeder schneide sie auf seiner Seite bis zur Linie zurück.",
       "Absatz E: Wir entschieden uns für die zweite Möglichkeit, was sich bald als Fehler herausstellte. Halbierte Johannisbeersträucher sehen aus wie schlecht frisierte Köpfe, und sie tragen kaum noch. Im Herbst waren sie zur Hälfte vertrocknet."
      ]
     },
     "aufgaben": [
      {
       "frage": "Welcher Absatz folgt auf den Anfang?",
       "opt": [
        "Absatz A",
        "Absatz B",
        "Absatz C",
        "Absatz D",
        "Absatz E"
       ],
       "loesung": 1,
       "fest": true,
       "erklaerung": "„Das änderte sich\" in Absatz 2 bezieht sich auf den sorglosen Zustand, den Absatz 1 beschreibt."
      },
      {
       "frage": "Welcher Absatz kommt als nächster? (Stelle 3)",
       "opt": [
        "Absatz A",
        "Absatz B",
        "Absatz C",
        "Absatz D",
        "Absatz E"
       ],
       "loesung": 3,
       "fest": true,
       "erklaerung": "Der Brief in Absatz 3 ist die Folge der Vermessung aus Absatz 2 und stellt die Pflöcke vor eine Entscheidung."
      },
      {
       "frage": "Welcher Absatz kommt als nächster? (Stelle 4)",
       "opt": [
        "Absatz A",
        "Absatz B",
        "Absatz C",
        "Absatz D",
        "Absatz E"
       ],
       "loesung": 4,
       "fest": true,
       "erklaerung": "„Die zweite Möglichkeit\" in Absatz 4 setzt die zwei Möglichkeiten aus Absatz 3 voraus."
      },
      {
       "frage": "Welcher Absatz kommt als nächster? (Stelle 5)",
       "opt": [
        "Absatz A",
        "Absatz B",
        "Absatz C",
        "Absatz D",
        "Absatz E"
       ],
       "loesung": 0,
       "fest": true,
       "erklaerung": "„An ihrer Stelle\" in Absatz 5 meint die vertrockneten Sträucher, „im nächsten Frühjahr\" folgt auf den Herbst in Absatz 4."
      },
      {
       "frage": "Welcher Absatz kommt als nächster? (Stelle 6)",
       "opt": [
        "Absatz A",
        "Absatz B",
        "Absatz C",
        "Absatz D",
        "Absatz E"
       ],
       "loesung": 2,
       "fest": true,
       "erklaerung": "„Dieses Gitter\" in Absatz 6 greift den Zaun aus Absatz 5 auf, danach folgt das Fazit."
      }
     ]
    },
    {
     "nr": 2,
     "art": "textwahl",
     "text": {
      "sorte": "zeitung",
      "quelle": "Ostwärts. Magazin für Mitteleuropa, Reportage von Lena Hofbauer",
      "titel": "Die Stadt mit dem Fluss in der Mitte",
      "zeilen": [
       "Um sechs Uhr früh riecht die Brücke nach frischem Brot. Der Geruch kommt von drüben, aus der Bäckerei Dudek, die seit 1991 an der Ecke steht, wo die Straße vom Fluss in die Altstadt von Kierzów hinaufführt. Halina Dudek, 63, hat die Ärmel hochgekrempelt und schiebt das erste Blech Mohnschnecken aus dem Ofen. Ungefähr vier von zehn Kunden, schätzt sie, kommen von der anderen Seite der Neiße, aus Kerzdorf. „Die Deutschen kaufen Mohn und Käsekuchen\", sagt sie, „die Polen kaufen Brot. Das war schon immer so, ich weiß auch nicht, warum.\"",
       "Kerzdorf und Kierzów waren bis 1945 eine Stadt. Der Fluss, der heute die Grenze bildet, floss damals mitten durch sie hindurch, ungefähr so, wie andere Städte von einer Bahnlinie geteilt werden: lästig, aber nicht weiter bedeutsam. Dann wurde die Neiße zur Grenze erklärt. Die deutschen Bewohner des Ostufers mussten ihre Häuser verlassen, in die leeren Wohnungen zogen Menschen, die ihrerseits aus Gebieten weiter im Osten vertrieben worden waren. Die Brücke wurde in den letzten Kriegstagen gesprengt. Für fast zwanzig Jahre gab es zwischen den beiden Stadthälften keine Verbindung außer dem Wasser und dem Blick.",
       "Gerhard Pilz hat diesen Blick sein Leben lang geübt. Er ist 85 Jahre alt, wohnt in einer Erdgeschosswohnung am westlichen Ufer und kann aus seinem Küchenfenster den Kirchturm sehen, unter dem er getauft wurde. Als er fünf war, verließ seine Familie das Haus in der Mühlgasse, die heute ulica Młyńska heißt. Er erinnert sich an einen Handwagen und an seine Mutter, die den Schlüssel einsteckte, als würde man in ein paar Tagen zurückkehren. Der Schlüssel liegt bis heute in einer Blechdose in seinem Wohnzimmerschrank. Er zeigt ihn ohne Pathos, eher wie ein Kuriosum.",
       "In den Siebzigerjahren durfte man für einige Jahre ohne Visum hinüber, und Pilz ging, wie viele andere, zum ersten Mal zu seinem Elternhaus. Er klingelte nicht. Er stand eine halbe Stunde lang auf der anderen Straßenseite und ging dann wieder. Erst 1991, beim zweiten Versuch, öffnete ihm eine Frau namens Krystyna Kowalczyk, deren Familie seit 1946 in dem Haus lebte. Sie bat ihn herein, zeigte ihm die Küche, in der noch derselbe Kachelofen stand, und kochte Kaffee. „Wir haben beide ein bisschen geweint\", sagt Pilz, „und dann haben wir über die Heizkosten geredet.\" Krystyna Kowalczyk ist vor sechs Jahren gestorben. Mit ihrem Sohn telefoniert Pilz bis heute jeden Monat.",
       "Die Brücke, über die Halina Dudeks deutsche Kunden heute kommen, ist eine schlichte Konstruktion aus Stahl und Beton, gebaut 2004, als Polen der Europäischen Union beitrat. Kontrolliert wurde damals noch, wenn auch freundlicher als früher. Im Dezember 2007, als Polen dem Schengener Abkommen beitrat, wurden die Kontrollhäuschen abgebaut. Die Kerzdorfer erinnern sich an eine Nacht mit Feuerwerk auf der Brücke und an einen Bürgermeister, der eine viel zu lange Rede hielt. Die Kierzówer erinnern sich vor allem an die Kälte. Danach wurde es für einige Jahre, wie viele hier sagen, angenehm langweilig.",
       "In diesen Jahren ist zwischen den beiden Stadthälften vieles zusammengewachsen, was vorher getrennt organisiert war. Es gibt eine gemeinsame Buslinie, die im Halbstundentakt über die Brücke fährt, eine gemeinsame Kläranlage auf polnischer Seite und eine Vereinbarung, nach der bei Bränden die Feuerwehr ausrückt, die schneller vor Ort ist, gleich von welcher Seite. Im Kreiskrankenhaus von Kerzdorf arbeiten heute 46 Pflegekräfte, die in Polen wohnen. Ohne sie, sagt der Pflegedirektor, könne man die chirurgische Station schließen.",
       "Eine von ihnen ist Agnieszka Wróbel, 38, die seit neun Jahren auf der Intensivstation arbeitet. Ihr Arbeitsweg ist knapp zwei Kilometer lang, zu Fuß eine Viertelstunde. Im März 2020, als wegen der Pandemie die Grenze für einige Wochen geschlossen wurde, lagen diese zwei Kilometer plötzlich in einem anderen Land. Wer pendelte, hätte bei jeder Rückkehr nach Polen in Quarantäne gemusst. Wróbel entschied sich, auf der deutschen Seite zu bleiben, und wohnte sechs Wochen lang in einem Zimmer, das das Krankenhaus in einem leerstehenden Schwesternwohnheim eingerichtet hatte. Ihre beiden Kinder sah sie in dieser Zeit nur vom Ufer aus.",
       "„Wir haben uns jeden Abend um sieben an den Fluss gestellt\", erzählt sie, „ich auf dieser Seite, mein Mann mit den Kindern auf der anderen. Wir haben gewinkt und telefoniert, gleichzeitig.\" Nach ein paar Tagen standen andere Familien dazu, auf beiden Ufern. Die Lokalzeitung druckte ein Foto davon, das seither in vielen Kerzdorfer Küchen am Kühlschrank hängt. Wróbel spricht darüber ohne Bitterkeit, aber auch ohne die Rührung, die das Foto nahelegt. „Es war nötig, sagten alle. Vielleicht. Aber niemand hat uns gefragt, wie man das organisiert, wenn man auf beiden Seiten lebt.\"",
       "Diese Frage stellt sich seit dem Herbst 2023 erneut, wenn auch in milderer Form. Seitdem kontrolliert die deutsche Bundespolizei wieder an der Brücke, nicht jeden und nicht immer, aber oft genug, dass sich zur Feierabendzeit eine Schlange bildet. Begründet werden die Kontrollen mit der Bekämpfung von Schleusern und unerlaubter Einreise. Die Beamten sind höflich, sie winken Bekannte meist durch, und die Busfahrer haben sich angewöhnt, ein paar Minuten Verspätung in ihren Fahrplan einzurechnen. Trotzdem hat sich etwas verschoben.",
       "Der Beamte, der an diesem Nachmittag die Kontrollstelle leitet, möchte seinen Namen nicht in der Zeitung lesen, gibt aber bereitwillig Auskunft. Man habe an diesem Übergang im ersten Jahr der Kontrollen eine niedrige dreistellige Zahl unerlaubter Einreisen festgestellt und mehrere mutmaßliche Schleuser festgenommen. Ob das viel oder wenig sei, könne er nicht beurteilen, das sei eine politische Frage. Er wisse, dass die Leute genervt seien, und er sei selbst nicht begeistert, wenn er im Nieselregen auf einer Brücke stehe. „Ich kenne inzwischen die Hälfte der Pendler beim Vornamen\", sagt er. „Das war sicher nicht der Sinn der Sache, aber es macht die Arbeit angenehmer.\"",
       "Erstaunlich ist, wie unterschiedlich die Reaktionen ausfallen, und zwar quer durch beide Städte. Auf der deutschen Seite begrüßt ein Teil der Bewohner die Kontrollen ausdrücklich. Ein Rentner im Café am Markt sagt, er fühle sich sicherer, seit die Polizei wieder da sei, auch wenn er nicht genau sagen könne, wovor. Auf der polnischen Seite gibt es ebenfalls Zustimmung, mit fast denselben Worten. Am lautesten ist der Ärger bei denen, die täglich pendeln, und bei den Geschäftsleuten. Halina Dudek hat seit dem Herbst 2023 nach eigener Rechnung rund ein Fünftel ihrer deutschen Kundschaft verloren. „Für ein Brot stellt sich keiner zwanzig Minuten an\", sagt sie.",
       "Dass es überhaupt Grund gibt, über die Brücke zu gehen, hat neben der Nachbarschaft auch handfeste Ursachen. Benzin ist in Kierzów billiger, Zigaretten ebenfalls, ein Haarschnitt kostet etwa die Hälfte. Umgekehrt kaufen viele Polen in Kerzdorf Drogerieartikel und Kinderkleidung, weil die Auswahl größer ist. Ein Kerzdorfer Friseur, der ungenannt bleiben möchte, gibt zu, dass er die Grenzkontrollen insgeheim gar nicht schlecht findet. Seit sie da sind, kämen einige Stammkunden zurück, die jahrelang drüben gewesen seien.",
       "Die meisten Unterschiede zwischen den beiden Stadthälften sind allerdings nicht in Euro und Złoty zu beziffern. Sie zeigen sich in der Sprache. Fast jeder Kierzówer unter fünfzig spricht genug Deutsch, um einzukaufen, zum Arzt zu gehen oder sich über das Wetter zu beschweren. Umgekehrt ist das selten. Im Kerzdorfer Gymnasium gibt es seit Jahren einen Polnischkurs, im laufenden Schuljahr haben sich elf Schüler angemeldet, von über sechshundert. Der Lehrer, selbst aus Kierzów, sagt, man müsse sich darüber nicht empören. „Es ist einfach so, dass die Grenze in eine Richtung durchlässiger ist als in die andere.\"",
       "Am anderen Ende der Altersskala versucht Susanne Rehfeld, das zu ändern. Sie leitet in Kerzdorf eine zweisprachige Kindertagesstätte mit 54 Plätzen, die Hälfte der Kinder kommt aus deutschen, die andere aus polnischen oder gemischten Familien. Jede Gruppe wird von einer deutschen und einer polnischen Erzieherin betreut, die jeweils nur in ihrer eigenen Sprache sprechen. Die Kinder, sagt Rehfeld, wechselten mit drei Jahren zwischen den Sprachen hin und her, ohne darüber nachzudenken. Mit sechs fingen sie an zu merken, welche Sprache auf dem Schulhof mehr gilt. „Wir können die Grenze nicht abschaffen\", sagt sie. „Wir können nur dafür sorgen, dass sie den Kindern nicht als Erstes einfällt.\"",
       "Die Warteliste der Kita ist lang. Das liegt allerdings, wie Rehfeld offen zugibt, auch daran, dass sie bis 18 Uhr geöffnet hat, länger als alle anderen Einrichtungen im Kreis. Grenzüberschreitende Zusammenarbeit, sagt sie, sei im Alltag selten eine Frage der Gesinnung. Meistens sei es eine Frage der Öffnungszeiten, der Busverbindungen und der Formulare. Für die Anmeldung eines polnischen Kindes braucht ihre Kita drei Dokumente mehr als für ein deutsches, eines davon muss beglaubigt übersetzt werden. Dass die Europäische Union das längst vereinfacht habe, sei eine Behauptung, die sie gern einmal mit einem Beamten aus Brüssel besprechen würde.",
       "Auch die beiden Bürgermeister, die einander inzwischen duzen, beschreiben ihre Zusammenarbeit eher als Handwerk denn als Versöhnungswerk. Einmal im Monat treffen sie sich, abwechselnd diesseits und jenseits der Brücke, und gehen eine Liste durch: Schneeräumung, Fördergelder, die Beleuchtung am Uferweg, das Stadtfest im August, das seit einigen Jahren gemeinsam gefeiert wird. Bei einem dieser Treffen, erzählt der Kerzdorfer Bürgermeister, habe man eine ganze Stunde darüber diskutiert, wer die Mülleimer auf der Brücke leeren müsse. Am Ende habe man sich auf die Brückenmitte geeinigt. Bis zur Mitte leert Kerzdorf, ab der Mitte Kierzów. Seitdem stehen dort zwei Mülleimer im Abstand von einem halben Meter.",
       "Wer wissen will, wie die Grenze in zwanzig Jahren aussehen könnte, sollte an einem Sommerabend an den kleinen Kiesstrand unterhalb der Brücke gehen. Dort treffen sich Jugendliche aus beiden Städten, sie grillen, hören Musik aus kleinen Lautsprechern und springen, obwohl es verboten ist, von den Brückenpfeilern ins Wasser. Ein siebzehnjähriger Kerzdorfer erzählt, seine Freundin komme aus Kierzów. Miteinander sprechen die beiden Englisch, weil er kein Polnisch kann und sie in der Schule lieber Englisch als Deutsch gelernt hat. Er findet daran nichts Besonderes. Die Kontrollen findet er „nervig, aber egal\", nachts sei sowieso niemand auf der Brücke.",
       "Gerhard Pilz geht fast jeden Abend über diese Brücke, wenn das Wetter es erlaubt, bis zu den beiden Mülleimern und wieder zurück. Ganz hinüber geht er nur noch selten, die Altstadt von Kierzów ist steil, und seine Knie machen nicht mehr mit. Ob ihn die neuen Kontrollen ärgern? Er überlegt lange. Er habe Zeiten erlebt, sagt er dann, in denen man auf der Brücke erschossen werden konnte, und Zeiten, in denen es gar keine Brücke gab. Gemessen daran sei eine Schlange an der Polizeikontrolle eine Lappalie. „Aber man gewöhnt sich so schnell daran, dass alles offen ist. Und man merkt erst, was man hatte, wenn einer wieder einen Tisch hinstellt und fragt, wo man hin will.\"",
       "Halina Dudek hat inzwischen zwei Schilder in ihrem Schaufenster, eines auf Polnisch, eines auf Deutsch. Auf dem deutschen steht, dass man auch mit Karte zahlen könne, und darunter, etwas kleiner, dass die Mohnschnecken freitags um zehn Prozent billiger seien. Das zweite hat sie im Herbst 2023 hinzugefügt. Es sei ein Versuch, sagt sie, die Leute über die Brücke zu locken, trotz der Schlange. Ob es funktioniere? Sie zuckt mit den Schultern. Freitags sei der Laden jedenfalls voller als früher. „Eine Grenze\", sagt sie zum Abschied, „ist, wenn man erst ausrechnen muss, ob es sich lohnt, hinüberzugehen. Früher hat hier keiner gerechnet.\""
      ]
     },
     "aufgaben": [
      {
       "frage": "Welche Aussage steht im Text?",
       "opt": [
        "Die meisten Kunden der Bäckerei Dudek kommen aus Deutschland.",
        "Deutsche und polnische Kunden kaufen in der Bäckerei bevorzugt Unterschiedliches.",
        "Halina Dudek erklärt die Kaufgewohnheiten mit unterschiedlichen Preisen."
       ],
       "loesung": 1,
       "stelle": "Die Deutschen kaufen Mohn und Käsekuchen",
       "erklaerung": "Nur etwa vier von zehn Kunden sind Deutsche, einen Grund kennt sie nicht."
      },
      {
       "frage": "Welche Aussage steht im Text?",
       "opt": [
        "Nach 1945 gab es lange keine Verbindung über den Fluss zwischen den Stadthälften.",
        "Die Brücke wurde 1945 von den neuen polnischen Bewohnern abgerissen.",
        "Vor 1945 war der Fluss bereits eine wichtige Grenze innerhalb der Stadt."
       ],
       "loesung": 0,
       "stelle": "keine Verbindung außer dem Wasser und dem Blick",
       "erklaerung": "Die Brücke wurde in den letzten Kriegstagen gesprengt, vorher war der Fluss „nicht weiter bedeutsam\"."
      },
      {
       "frage": "Welche Aussage steht im Text?",
       "opt": [
        "Gerhard Pilz bewahrt den alten Hausschlüssel als wertvolles Andenken in Ehren.",
        "Gerhard Pilz ging bei seinem ersten Besuch in sein Elternhaus hinein.",
        "Gerhard Pilz hält bis heute Kontakt zur Familie, die in seinem Elternhaus lebte."
       ],
       "loesung": 2,
       "stelle": "Mit ihrem Sohn telefoniert Pilz bis heute jeden Monat",
       "erklaerung": "Den Schlüssel zeigt er „ohne Pathos\", beim ersten Besuch klingelte er nicht."
      },
      {
       "frage": "Welche Aussage steht im Text?",
       "opt": [
        "Mit dem EU-Beitritt Polens 2004 entfielen die Grenzkontrollen.",
        "Nach dem Wegfall der Kontrollen 2007 begann eine ruhige, unspektakuläre Zeit.",
        "Die Kierzówer erinnern sich vor allem an das Feuerwerk auf der Brücke."
       ],
       "loesung": 1,
       "stelle": "wurde es für einige Jahre, wie viele hier sagen, angenehm langweilig",
       "erklaerung": "Kontrolliert wurde bis Dezember 2007, die Kierzówer erinnern sich an die Kälte."
      },
      {
       "frage": "Welche Aussage steht im Text?",
       "opt": [
        "Die Feuerwehr der jeweiligen Stadthälfte darf nur auf ihrer Seite löschen.",
        "Das Kreiskrankenhaus hat seine chirurgische Station bereits geschlossen.",
        "Das Krankenhaus in Kerzdorf ist auf Pflegekräfte aus Polen angewiesen."
       ],
       "loesung": 2,
       "stelle": "Ohne sie, sagt der Pflegedirektor",
       "erklaerung": "Ohne die 46 Pflegekräfte könnte man die Station schließen, geschlossen ist sie nicht."
      },
      {
       "frage": "Welche Aussage steht im Text?",
       "opt": [
        "Agnieszka Wróbel blieb während der Grenzschließung mehrere Wochen in Deutschland.",
        "Agnieszka Wróbel pendelte während der Grenzschließung täglich und ging in Quarantäne.",
        "Agnieszka Wróbel hält die Grenzschließung von 2020 für eindeutig falsch."
       ],
       "loesung": 0,
       "stelle": "wohnte sechs Wochen lang in einem Zimmer",
       "erklaerung": "Sie urteilt vorsichtig („Vielleicht\"), kritisiert vor allem die fehlende Mitsprache."
      },
      {
       "frage": "Welche Aussage steht im Text?",
       "opt": [
        "Seit 2023 wird an der Brücke jeder Reisende kontrolliert.",
        "Die Grenzkontrollen werden auf beiden Seiten teils begrüßt, teils abgelehnt.",
        "Halina Dudek hat seit 2023 die Hälfte ihrer deutschen Kunden verloren."
       ],
       "loesung": 1,
       "stelle": "Auf der polnischen Seite gibt es ebenfalls Zustimmung",
       "erklaerung": "Kontrolliert wird „nicht jeden und nicht immer\", Dudek verlor etwa ein Fünftel."
      },
      {
       "frage": "Welche Aussage steht im Text?",
       "opt": [
        "Ein Kerzdorfer Friseur profitiert nach eigener Aussage von den Kontrollen.",
        "Polen kaufen in Kerzdorf vor allem Benzin und Zigaretten.",
        "Ein Haarschnitt ist in Kerzdorf ungefähr halb so teuer wie in Kierzów."
       ],
       "loesung": 0,
       "stelle": "kämen einige Stammkunden zurück",
       "erklaerung": "Benzin, Zigaretten und Haarschnitte sind in Kierzów billiger."
      },
      {
       "frage": "Welche Aussage steht im Text?",
       "opt": [
        "Am Kerzdorfer Gymnasium lernt etwa die Hälfte der Schüler Polnisch.",
        "Der Polnischlehrer ist empört über das geringe Interesse.",
        "In Kierzów sprechen mehr Menschen Deutsch als in Kerzdorf Polnisch."
       ],
       "loesung": 2,
       "stelle": "Umgekehrt ist das selten",
       "erklaerung": "Nur elf von über sechshundert lernen Polnisch, und der Lehrer will sich gerade nicht empören."
      },
      {
       "frage": "Welche Aussage steht im Text?",
       "opt": [
        "Die Kita ist allein wegen ihres zweisprachigen Angebots so gefragt.",
        "Laut Rehfeld scheitert Zusammenarbeit im Alltag oft an praktischen Dingen.",
        "Die Anmeldung polnischer Kinder ist dank der EU genauso einfach wie die deutscher."
       ],
       "loesung": 1,
       "stelle": "Meistens sei es eine Frage der Öffnungszeiten",
       "erklaerung": "Auch die langen Öffnungszeiten zählen, und für polnische Kinder braucht man drei Dokumente mehr."
      }
     ]
    },
    {
     "nr": 3,
     "art": "textwahl",
     "text": {
      "sorte": "zeitung",
      "quelle": "Erfahrungsbericht von Katrin Seidel, Monatsheft „Nachbarschaften“, Reihe „Wie ich lebe“",
      "titel": "Fünfhundert Schritte über die Neiße",
      "zeilen": [
       "Abschnitt 1: Seit neun Jahren gehe ich jeden Morgen um zwanzig nach sieben über die Altstadtbrücke von Zgorzelec nach Görlitz. Es sind etwa zweihundert Schritte von meiner Haustür bis zur Mitte der Neiße und noch einmal dreihundert bis zur Praxis, in der ich als Physiotherapeutin arbeite. Ich habe das einmal gezählt, in der ersten Woche, als mir alles noch neu vorkam. Damals dachte ich, ich würde jedes Mal etwas spüren, wenn ich über die Linie gehe, die auf der Brücke ins Pflaster eingelassen ist. Nach einem Monat habe ich sie nicht mehr bemerkt. Nach einem Jahr hätte ich nicht mehr sagen können, wo genau sie liegt.",
       "Abschnitt 2: Dass ich auf der polnischen Seite wohne, hat zunächst ganz unromantische Gründe. Die Wohnung kostet etwa die Hälfte dessen, was ich in Görlitz für dieselbe Größe zahlen würde, sie hat einen Balkon zum Fluss, und der Vermieter, Herr Nowak, repariert Dinge, bevor man ihn darum bittet. Er spricht kein Wort Deutsch und versteht trotzdem alles, was kaputt ist. Meine Mutter in Dresden hat am Telefon gefragt, ob ich jetzt ausgewandert sei. Ich habe gesagt, ich sei umgezogen, eine Straße weiter, nur dass zwischen den beiden Straßen ein Fluss liegt. Sie hat das für einen Witz gehalten. Ich glaube, sie hält es bis heute dafür, auch wenn sie mich inzwischen gern besucht.",
       "Abschnitt 3: Polnisch habe ich anfangs kaum gesprochen. Ich konnte grüßen, bestellen und mich entschuldigen, was, wie ich später lernte, ungefähr die Reihenfolge ist, in der man es braucht. Im Laden an der Ecke haben die Kassiererinnen mit mir Deutsch gesprochen, sobald sie meinen Akzent hörten, freundlich, aber bestimmt. Das war bequem und hat mich zugleich geärgert. Ich wollte ja lernen. Es hat zwei Jahre gedauert, bis eine von ihnen, Frau Ewa, beim Polnischen blieb, obwohl ich stockte. Ich habe das als Auszeichnung verstanden. Vielleicht war sie auch nur müde an diesem Tag.",
       "Abschnitt 4: Im März 2020 wurde die Brücke geschlossen. Ich erinnere mich an den Abend, als die Nachricht kam, und an die Polizisten, die am nächsten Morgen dort standen, wo vorher nur ein Pflasterstreifen war. Ich hatte Glück, weil ich als Pendlerin im Gesundheitswesen eine Bescheinigung bekam. Viele andere hatten das nicht. Eine Nachbarin, die in einer Görlitzer Bäckerei arbeitete, hat in dieser Zeit ihre Stelle verloren. Eine andere hat ihren Freund, der auf der deutschen Seite wohnt, wochenlang nur vom Ufer aus gesehen. Sie haben sich über den Fluss zugewunken, und abends hörte ich sie durch das offene Fenster telefonieren.",
       "Abschnitt 5: Am meisten erschreckt hat mich in diesen Wochen nicht die Grenze selbst. Es war, wie schnell sie wieder normal wurde. Nach zehn Tagen grüßten die Polizisten mich mit Namen. Nach drei Wochen hörte ich im Wartezimmer der Praxis einen Patienten sagen, es sei doch eigentlich ganz angenehm, dass „die da drüben“ jetzt mal drüben blieben. Er meinte nicht mich, er wusste nicht, wo ich wohne. Ich habe ihn an diesem Tag trotzdem etwas weniger behutsam behandelt, als es mein Beruf verlangt. Ich bin nicht stolz darauf, aber ich erzähle es, weil es stimmt.",
       "Abschnitt 6: Als die Brücke im Sommer wieder öffnete, gab es ein kleines Fest. Ein Blasorchester, Würstchen von beiden Seiten, die gleich schmeckten, ein Bürgermeister, der von Freundschaft sprach, und ein anderer, der es übersetzte. Ich habe mich gefreut, natürlich. Aber ich bin danach noch wochenlang langsamer über die Brücke gegangen als vorher, und nicht aus Feierlichkeit. Ich glaube, mein Körper hatte sich gemerkt, dass an dieser Stelle jemand stehen kann. Den Pflasterstreifen sehe ich seitdem wieder, jeden Morgen. Er ist das Einzige, was von dieser Zeit sichtbar geblieben ist, und er war schon vorher da.",
       "Abschnitt 7: Man stellt sich eine Doppelstadt gern als einen Ort vor, an dem zwei Kulturen ineinanderfließen. Ich muss das korrigieren. Görlitz und Zgorzelec fließen nicht ineinander, sie liegen nebeneinander, und das ist etwas anderes. Die meisten Görlitzer, die ich kenne, waren seit Jahren nicht drüben, außer zum Tanken. Wer nach Zgorzelec zieht, wird gefragt, ob er sich das gut überlegt habe. Die meisten meiner polnischen Nachbarn kaufen in Görlitz ein, gehen dort aber nicht ins Theater. Es gibt einen deutsch-polnischen Kindergarten, einen gemeinsamen Bus, Sprachkurse, Feste. Und es gibt die Tatsache, dass mich in neun Jahren genau zweimal deutsche Kollegen zu Hause besucht haben.",
       "Abschnitt 8: Beide Besuche waren übrigens nett. Beim ersten brachte mir meine Kollegin Sabine einen Blumentopf mit und fragte an der Tür, ob man hier die Schuhe ausziehen müsse. Ich wusste nicht, ob das eine Frage nach polnischen Sitten war oder nach meinem frisch geölten Parkett, und habe nicht nachgefragt. Beim zweiten Besuch, einem Grillabend, haben wir gegrillt, bis es dunkel war, alle haben sich bestens unterhalten, und beim Abschied sagte jemand, so weit sei es ja eigentlich gar nicht. Er wohnt in Görlitz-Weinhübel, fünf Kilometer südlich der Altstadt. Ich wohne zwölf Gehminuten von der Praxis entfernt.",
       "Abschnitt 9: Ich will nicht ungerecht sein. Auch ich habe Grenzen, die ich erst spät bemerkt habe. Zum Beispiel die, dass ich jahrelang in Zgorzelec gewohnt, aber in Görlitz gelebt habe. Mein Arzt, meine Freunde, mein Chor, alles lag auf der anderen Seite. Zu Hause habe ich geschlafen, gekocht und auf den Fluss geschaut. Erst als die Brücke zu war und ich abends nicht mehr hinüber konnte, habe ich mich in meinem eigenen Viertel umgesehen. In diesen drei Monaten habe ich mehr Polnisch gelernt als in den drei Jahren davor. Das ist kein Argument für geschlossene Grenzen. Aber es ist auch nicht nichts.",
       "Abschnitt 10: Seit dem vergangenen Herbst wird auf der Brücke wieder kontrolliert, diesmal von deutscher Seite und mit anderer Begründung. Die Kontrollen seien stichprobenartig, heißt es. Ich bin bisher dreimal kontrolliert worden, mein Kollege Piotr, der in Zgorzelec geboren ist und fehlerfrei Deutsch spricht, in derselben Zeit elfmal. Wir haben das nicht systematisch erhoben, wir haben nur an der Kaffeemaschine nebeneinandergestanden und gezählt. Piotr hat gelacht und gesagt, er sehe eben verdächtig gut aus. Ich habe mitgelacht. Auf dem Heimweg fiel mir ein, dass er über so etwas sonst nie lacht, wenn es ihn wirklich nicht stört.",
       "Abschnitt 11: Wenn mich Leute aus Dresden fragen, wie es ist, an der Grenze zu leben, sage ich inzwischen, ich lebe nicht an der Grenze, ich lebe auf ihr. Das klingt nach einem schönen Satz, aber ich meine ihn praktisch. Ich habe zwei Handyverträge, weil das Netz an der Neiße nicht weiß, in welchem Land es ist. Ich habe Złoty im Portemonnaie und Euro in der Jackentasche. Ich weiß, an welchen Feiertagen welche Seite geschlossen hat, und plane meine Einkäufe danach. Ich bin, was Behörden angeht, ein Mensch mit doppeltem Formular. Das ist anstrengend, und ich würde es gegen nichts eintauschen.",
       "Abschnitt 12: Mein Neffe, der zwölf ist, hat mich im Sommer besucht und wollte unbedingt mit einem Fuß in Polen und mit dem anderen in Deutschland stehen. Wir sind also zur Mitte der Brücke gegangen, er hat sich breitbeinig über den Pflasterstreifen gestellt und sich fotografieren lassen. Das Foto hängt bei mir am Kühlschrank. Er fand es großartig. Dann wollte er wissen, wo denn jetzt die Grenze sei, wenn er in die Luft springe. Ich wusste keine Antwort. Ein älterer Herr, der vorbeikam und uns zugehört hatte, sagte auf Polnisch, das hätten sich Politiker auch schon gefragt, und ging weiter.",
       "Abschnitt 13: Manchmal frage ich mich, ob ich irgendwann wieder auf die deutsche Seite ziehe. Herr Nowak wird älter, die Mieten in Zgorzelec steigen, und meine Mutter würde sich freuen. Es gäbe gute Gründe. Aber jedes Mal, wenn ich darüber nachdenke, merke ich, dass mir der Morgen fehlen würde, die zweihundert Schritte bis zur Mitte des Flusses, der Moment, in dem man auf einer Linie steht, die einem nichts mehr sagt und trotzdem nicht verschwindet. Vielleicht ist das alles, was ich über Grenzen gelernt habe. Man kann sich an sie gewöhnen. Man sollte es nur nicht ganz."
      ]
     },
     "aufgaben": [
      {
       "frage": "Die Verfasserin erkennt hinter dem Scherz eines Kollegen eine Kränkung.",
       "opt": [
        "Abschnitt 1",
        "Abschnitt 2",
        "Abschnitt 3",
        "Abschnitt 4",
        "Abschnitt 5",
        "Abschnitt 6",
        "Abschnitt 7",
        "Abschnitt 8",
        "Abschnitt 9",
        "Abschnitt 10",
        "Abschnitt 11",
        "Abschnitt 12",
        "Abschnitt 13",
        "x · in keinem Abschnitt"
       ],
       "loesung": 9,
       "fest": true,
       "stelle": "wenn es ihn wirklich nicht stört",
       "erklaerung": "Piotr lacht sonst nie über so etwas; sein Lachen verrät, dass ihn die Kontrollen treffen."
      },
      {
       "frage": "Die Verfasserin hat ihren Wohnort gewählt, um ein politisches Zeichen für Europa zu setzen.",
       "opt": [
        "Abschnitt 1",
        "Abschnitt 2",
        "Abschnitt 3",
        "Abschnitt 4",
        "Abschnitt 5",
        "Abschnitt 6",
        "Abschnitt 7",
        "Abschnitt 8",
        "Abschnitt 9",
        "Abschnitt 10",
        "Abschnitt 11",
        "Abschnitt 12",
        "Abschnitt 13",
        "x · in keinem Abschnitt"
       ],
       "loesung": 13,
       "fest": true,
       "erklaerung": "Sie nennt ausdrücklich unromantische Gründe: Miete, Balkon, Vermieter."
      },
      {
       "frage": "Die Verfasserin nimmt einem Erlebnis, das ihr viel bedeutet, selbstironisch die Bedeutung.",
       "opt": [
        "Abschnitt 1",
        "Abschnitt 2",
        "Abschnitt 3",
        "Abschnitt 4",
        "Abschnitt 5",
        "Abschnitt 6",
        "Abschnitt 7",
        "Abschnitt 8",
        "Abschnitt 9",
        "Abschnitt 10",
        "Abschnitt 11",
        "Abschnitt 12",
        "Abschnitt 13",
        "x · in keinem Abschnitt"
       ],
       "loesung": 2,
       "fest": true,
       "stelle": "Vielleicht war sie auch nur müde an diesem Tag.",
       "erklaerung": "Sie freut sich über die „Auszeichnung“ und relativiert sie im nächsten Satz."
      },
      {
       "frage": "Die Verfasserin gesteht eine kleine Vergeltung, die mit ihrem Berufsethos nicht vereinbar ist.",
       "opt": [
        "Abschnitt 1",
        "Abschnitt 2",
        "Abschnitt 3",
        "Abschnitt 4",
        "Abschnitt 5",
        "Abschnitt 6",
        "Abschnitt 7",
        "Abschnitt 8",
        "Abschnitt 9",
        "Abschnitt 10",
        "Abschnitt 11",
        "Abschnitt 12",
        "Abschnitt 13",
        "x · in keinem Abschnitt"
       ],
       "loesung": 4,
       "fest": true,
       "stelle": "etwas weniger behutsam behandelt",
       "erklaerung": "Der Patient hatte über „die da drüben“ gesprochen; sie behandelt ihn grober als nötig."
      },
      {
       "frage": "Die Mutter nimmt die Lebensentscheidung der Tochter innerlich nicht ganz ernst.",
       "opt": [
        "Abschnitt 1",
        "Abschnitt 2",
        "Abschnitt 3",
        "Abschnitt 4",
        "Abschnitt 5",
        "Abschnitt 6",
        "Abschnitt 7",
        "Abschnitt 8",
        "Abschnitt 9",
        "Abschnitt 10",
        "Abschnitt 11",
        "Abschnitt 12",
        "Abschnitt 13",
        "x · in keinem Abschnitt"
       ],
       "loesung": 1,
       "fest": true,
       "stelle": "Ich glaube, sie hält es bis heute dafür",
       "erklaerung": "Die Mutter sieht den Umzug weiter als Witz, auch wenn sie gern zu Besuch kommt."
      },
      {
       "frage": "Eine überwundene Grenze verändert die Wahrnehmung, obwohl sich äußerlich nichts verändert hat.",
       "opt": [
        "Abschnitt 1",
        "Abschnitt 2",
        "Abschnitt 3",
        "Abschnitt 4",
        "Abschnitt 5",
        "Abschnitt 6",
        "Abschnitt 7",
        "Abschnitt 8",
        "Abschnitt 9",
        "Abschnitt 10",
        "Abschnitt 11",
        "Abschnitt 12",
        "Abschnitt 13",
        "x · in keinem Abschnitt"
       ],
       "loesung": 5,
       "fest": true,
       "stelle": "Den Pflasterstreifen sehe ich seitdem wieder",
       "erklaerung": "Der Streifen war immer da; erst nach der Schließung nimmt sie ihn wieder wahr."
      },
      {
       "frage": "Die Kollegen in der Praxis werfen der Verfasserin vor, dass sie in Polen wohnt.",
       "opt": [
        "Abschnitt 1",
        "Abschnitt 2",
        "Abschnitt 3",
        "Abschnitt 4",
        "Abschnitt 5",
        "Abschnitt 6",
        "Abschnitt 7",
        "Abschnitt 8",
        "Abschnitt 9",
        "Abschnitt 10",
        "Abschnitt 11",
        "Abschnitt 12",
        "Abschnitt 13",
        "x · in keinem Abschnitt"
       ],
       "loesung": 13,
       "fest": true,
       "erklaerung": "Die Kollegen besuchen sie selten, Vorwürfe machen sie ihr aber nicht."
      },
      {
       "frage": "Mit einer nüchternen Angabe zeigt die Verfasserin, dass gefühlte und tatsächliche Entfernung auseinanderfallen.",
       "opt": [
        "Abschnitt 1",
        "Abschnitt 2",
        "Abschnitt 3",
        "Abschnitt 4",
        "Abschnitt 5",
        "Abschnitt 6",
        "Abschnitt 7",
        "Abschnitt 8",
        "Abschnitt 9",
        "Abschnitt 10",
        "Abschnitt 11",
        "Abschnitt 12",
        "Abschnitt 13",
        "x · in keinem Abschnitt"
       ],
       "loesung": 7,
       "fest": true,
       "stelle": "Ich wohne zwölf Gehminuten von der Praxis entfernt.",
       "erklaerung": "Der Gast findet ihre Wohnung „gar nicht so weit“, wohnt aber selbst viel weiter weg."
      },
      {
       "frage": "Eine schlimme Zeit hatte für die Verfasserin auch einen unerwarteten Nutzen.",
       "opt": [
        "Abschnitt 1",
        "Abschnitt 2",
        "Abschnitt 3",
        "Abschnitt 4",
        "Abschnitt 5",
        "Abschnitt 6",
        "Abschnitt 7",
        "Abschnitt 8",
        "Abschnitt 9",
        "Abschnitt 10",
        "Abschnitt 11",
        "Abschnitt 12",
        "Abschnitt 13",
        "x · in keinem Abschnitt"
       ],
       "loesung": 8,
       "fest": true,
       "stelle": "Aber es ist auch nicht nichts.",
       "erklaerung": "Während der Schließung lernt sie ihr Viertel und die Sprache besser kennen."
      },
      {
       "frage": "Die Verfasserin hält eine gewisse Wachsamkeit gegenüber Grenzen für richtig, auch wenn sie Alltag geworden sind.",
       "opt": [
        "Abschnitt 1",
        "Abschnitt 2",
        "Abschnitt 3",
        "Abschnitt 4",
        "Abschnitt 5",
        "Abschnitt 6",
        "Abschnitt 7",
        "Abschnitt 8",
        "Abschnitt 9",
        "Abschnitt 10",
        "Abschnitt 11",
        "Abschnitt 12",
        "Abschnitt 13",
        "x · in keinem Abschnitt"
       ],
       "loesung": 12,
       "fest": true,
       "stelle": "Man sollte es nur nicht ganz.",
       "erklaerung": "Gewöhnung ja, aber nicht so weit, dass man die Linie vergisst."
      }
     ]
    }
   ]
  },
  {
   "id": "tc2ll2",
   "titel": "Prüfungslauf 2 · Stille und Lärm",
   "minuten": 80,
   "teile": [
    {
     "nr": 1,
     "art": "textwahl",
     "text": {
      "sorte": "zeitung",
      "quelle": "Rundschau Nord, Feuilleton, Text von Clara Imhof",
      "titel": "Herbst mit Nebengeräusch",
      "zeilen": [
       "Anfang: Jedes Jahr im Oktober beginnt in unserer Straße eine Saison, die in keinem Kalender steht. Sie fängt meist an einem Samstag um acht Uhr an, mit einem hohen, gleichmäßigen Heulen aus dem Vorgarten von Nummer zwölf.",
       "Absatz A: Diese Rechnung geht allerdings nur auf, wenn man allein in der Straße wohnt. Bei sieben Geräten und ebenso vielen Vorstellungen davon, wann ein Vormittag beginnt, ergibt sich ein Lärm, der von acht bis kurz vor eins kaum eine Pause kennt. Kaum ist einer fertig, beginnt der Nächste, als hätten sie sich abgesprochen.",
       "Absatz B: Die Besitzer der Benzingeräte verteidigen sich mit einem Argument, das schwer zu widerlegen ist. Ihre Maschinen, sagen sie, seien in einer Viertelstunde fertig, wo ein Rechen eine Stunde brauche. Schneller sei folglich auch leiser, auf den ganzen Samstag gerechnet.",
       "Absatz C: Seitdem ist unsere Straße an den meisten Samstagen zwei Stunden lang unerträglich laut und den Rest des Tages vollkommen still. Man hört dann sogar wieder die Rechen der vier Haushalte, die nie etwas anderes besessen haben. Ihr Kratzen auf dem Pflaster klingt beinahe nach Musik.",
       "Absatz D: Das Gerät, das diesen Ton erzeugt, ist ein Laubbläser, und er ist in unserer Straße längst nicht mehr allein. Inzwischen besitzen sieben von elf Haushalten einen, die meisten mit Akku, zwei noch mit Benzinmotor. Das Laub, das sie bewegen, landet übrigens meist auf der Straße und von dort im nächsten Vorgarten.",
       "Absatz E: Im vergangenen Herbst hat eine Nachbarin deshalb einen Zettel an alle Briefkästen gehängt. Wer blasen wolle, möge das bitte zwischen zehn und zwölf tun, alle gemeinsam, gewissermaßen im Chor. Der Zettel war handgeschrieben und endete mit einem Smiley. Unterschrieben haben fünf von sieben."
      ]
     },
     "aufgaben": [
      {
       "frage": "Welcher Absatz folgt auf den Anfang?",
       "opt": [
        "Absatz A",
        "Absatz B",
        "Absatz C",
        "Absatz D",
        "Absatz E"
       ],
       "loesung": 3,
       "fest": true,
       "erklaerung": "„Diesen Ton\" in Absatz 2 greift das „Heulen\" aus Absatz 1 auf und benennt seine Quelle."
      },
      {
       "frage": "Welcher Absatz kommt als nächster? (Stelle 3)",
       "opt": [
        "Absatz A",
        "Absatz B",
        "Absatz C",
        "Absatz D",
        "Absatz E"
       ],
       "loesung": 1,
       "fest": true,
       "erklaerung": "„Die Besitzer der Benzingeräte\" setzt voraus, dass Absatz 2 die zwei Benzingeräte schon erwähnt hat."
      },
      {
       "frage": "Welcher Absatz kommt als nächster? (Stelle 4)",
       "opt": [
        "Absatz A",
        "Absatz B",
        "Absatz C",
        "Absatz D",
        "Absatz E"
       ],
       "loesung": 0,
       "fest": true,
       "erklaerung": "„Diese Rechnung\" in Absatz 4 meint das Argument „schneller sei auch leiser\" aus Absatz 3."
      },
      {
       "frage": "Welcher Absatz kommt als nächster? (Stelle 5)",
       "opt": [
        "Absatz A",
        "Absatz B",
        "Absatz C",
        "Absatz D",
        "Absatz E"
       ],
       "loesung": 4,
       "fest": true,
       "erklaerung": "„Deshalb\" in Absatz 5 begründet den Zettel mit dem Dauerlärm aus Absatz 4."
      },
      {
       "frage": "Welcher Absatz kommt als nächster? (Stelle 6)",
       "opt": [
        "Absatz A",
        "Absatz B",
        "Absatz C",
        "Absatz D",
        "Absatz E"
       ],
       "loesung": 2,
       "fest": true,
       "erklaerung": "„Seitdem\" in Absatz 6 beschreibt die Folge der Absprache, „zwei Stunden\" entspricht „zwischen zehn und zwölf\"."
      }
     ]
    },
    {
     "nr": 2,
     "art": "textwahl",
     "text": {
      "sorte": "zeitung",
      "quelle": "Wochenendbeilage Der Sonntagsbote, Porträt von Felix Arnsberger",
      "titel": "Der Mann, der die Viertelstunde sucht",
      "zeilen": [
       "Es ist zwanzig nach vier, als Wendelin Aust den Motor abstellt, und er tut das mit einer Sorgfalt, als würde er einen Säugling ablegen. Er bleibt noch einen Moment sitzen, dann öffnet er die Tür so langsam, dass sie nicht quietscht, und steigt aus. Der Parkplatz liegt am Rand eines Hochmoors in der Rhön, auf gut achthundert Metern Höhe. Es ist Mitte Mai, die Luft ist kalt, im Osten wird der Himmel gerade erst grau. Aust schultert einen Rucksack, in dem ein Aufnahmegerät, zwei Mikrofone, ein Stativ und eine Thermoskanne mit Pfefferminztee stecken. Dann geht er los, ohne ein Wort zu sagen. Reden, hat er am Abend vorher erklärt, könne man später.",
       "Wendelin Aust ist 61 Jahre alt und sucht seit sechs Jahren nach etwas, das es in Deutschland kaum noch gibt: einer Viertelstunde, in der kein einziges von Menschen verursachtes Geräusch zu hören ist. Kein Motor, kein Flugzeug, keine Säge, keine Straße in der Ferne, kein Zug. Vogelstimmen, Wind, Wasser, Insekten sind erlaubt. Er nennt diese Zeitspanne die stille Viertelstunde, und er führt Buch darüber. In sechs Jahren und an über zweihundert Orten hat er sie neunmal gefunden. Dreimal davon an diesem Moor.",
       "Bevor er zum Sucher wurde, hat Aust dreißig Jahre lang das Gegenteil gemacht. Er war Tonmeister bei einem öffentlich-rechtlichen Sender, zuständig für Hörspiele und Konzertaufnahmen, und seine Aufgabe bestand darin, Geräusche einzufangen und so zu ordnen, dass die Hörer zu Hause im Wohnzimmer etwas Bestimmtes empfanden. Er hat Gewitter gebaut aus zerknülltem Butterbrotpapier und Pferdegetrappel aus halben Kokosnüssen. Er hat erlebt, wie ein Dirigent eine ganze Aufnahme abbrach, weil jemand in der dritten Reihe eine Bonbontüte öffnete. „Ich habe mein Berufsleben damit verbracht, Lärm zu bändigen\", sagt er. „Irgendwann wollte ich wissen, was übrig bleibt, wenn man ihn ganz weglässt.\"",
       "Die Antwort, die er damals erwartete, hat er nicht gefunden. Absolute Stille, das wusste er als Tonmeister eigentlich schon vorher, gibt es nicht. Im Funkhaus gab es einen sogenannten schalltoten Raum, dessen Wände, Decke und Boden mit keilförmigen Schaumstoffblöcken ausgekleidet sind, die jeden Schall schlucken. Wer sich dort hineinsetzt, hört nach wenigen Minuten Dinge, die er nie zuvor gehört hat: das Rauschen des eigenen Blutes, den Herzschlag, ein feines Pfeifen, das aus dem Inneren des Ohrs zu kommen scheint. Viele Besucher, erzählt Aust, hielten es keine zehn Minuten aus. Einer habe gebeten, die Tür einen Spalt offen zu lassen, als sei er in einem Fahrstuhl steckengeblieben.",
       "„Stille gibt es nicht\", sagt Aust. „Es gibt nur leiser. Und es gibt Geräusche, die wir nicht als Störung empfinden.\" Darum geht es ihm, und deshalb ist seine stille Viertelstunde keine Messung im technischen Sinn. Ein Moor im Morgengrauen ist nicht leise. Es ist voller Rufe, Rascheln und Gluckern, manchmal so voll, dass man sich bei einem Gespräch anstrengen müsste. Was fehlt, ist allein der Mensch, oder genauer, seine Maschinen.",
       "Aust hat sich am Rand einer Lichtung niedergelassen, das Stativ steht, die Mikrofone zeigen in zwei Richtungen. Er schaltet das Gerät ein, drückt auf eine Stoppuhr und schließt die Augen. Die erste Amsel singt. Irgendwo weit links meldet sich ein Kuckuck, zögernd, als wäre er sich seiner Sache nicht sicher. Nach vier Minuten hebt Aust einen Finger und deutet nach Westen. Ganz leise, so leise, dass man es ohne ihn nicht bemerkt hätte, ist ein Brummen zu hören, das langsam lauter wird und wieder verschwindet. Ein Lastwagen auf der Bundesstraße, schätzt Aust später, gut neun Kilometer entfernt. Er drückt die Stoppuhr zurück auf null.",
       "Dass die Suche so schwierig ist, liegt nicht an der Dichte der Besiedlung allein. Deutschland ist ein vergleichsweise dicht besiedeltes Land, aber es gibt dünn besiedelte Gegenden, Wälder, Moore und Mittelgebirge, in denen man stundenlang keinem Menschen begegnet. Begegnen ist allerdings nicht dasselbe wie Hören. Schall trägt weit, besonders nachts und bei bestimmten Wetterlagen. Eine Autobahn kann man unter günstigen Bedingungen noch in zwanzig Kilometern Entfernung wahrnehmen. Und dann ist da der Himmel. Aust führt Statistik auch darüber, woran seine Versuche scheitern. An erster Stelle stehen Flugzeuge, mit großem Abstand, gefolgt von Straßenverkehr und Landmaschinen. An vierter Stelle, wie er mit einem schiefen Lächeln anmerkt, stehen Kirchenglocken.",
       "Ob Glocken überhaupt als menschliches Geräusch zählen sollten, darüber hat er lange mit sich gerungen. Sie sind von Menschen gemacht, gewiss, und sie werden von Menschen geläutet. Aber sie gehören seit Jahrhunderten zu dieser Gegend, ähnlich wie Hecken oder Feldwege. Am Ende hat er beschlossen, streng zu bleiben. Glocken zählen. „Sonst müsste ich auch den Kuhglocken einen Rabatt geben\", sagt er, „und dann den Traktoren, die schon ganz alt sind. Wo soll man da aufhören?\"",
       "Man könnte Aust für einen Sonderling halten, einen Mann, der vor der Welt flieht und sich dafür ein wissenschaftliches Mäntelchen umhängt. Wer ihn länger begleitet, merkt aber, dass er gar nicht vor dem Lärm flieht. Er sammelt ihn ebenso. In seinem Archiv liegen gut 2300 Stunden Aufnahmen, und nur ein kleiner Teil davon stammt aus Mooren und Wäldern. Die meisten sind Stadtaufnahmen: ein Wochenmarkt in Kassel, der Pausenhof einer Grundschule in Offenbach, eine Bahnhofshalle um Mitternacht. Einige davon hält er für ausgesprochen schön. Besonders der Schulhof, sagt er, sei ein Meisterwerk. „Da schreien zweihundert Kinder gleichzeitig, und nach zwanzig Minuten klingelt es, und alles ist weg. So etwas kann kein Komponist.\"",
       "Lärm, das betont Aust immer wieder, sei kein physikalischer Begriff, sondern ein sozialer. Ein Geräusch werde zu Lärm, wenn man es nicht will und ihm nicht ausweichen kann. Das Konzert, das man besucht, ist kein Lärm, dasselbe Konzert aus der Nachbarwohnung um zwei Uhr nachts sehr wohl. Der Rasenmäher des Nachbarn ist lauter als der eigene, auch wenn das Messgerät dasselbe anzeigt. In der Akustik spricht man deshalb neben der Lautstärke auch von der Lästigkeit eines Geräuschs, und die hängt erheblich davon ab, wer es verursacht und ob man ihm etwas entgegensetzen kann.",
       "Sein Verhältnis zu Geräuschen, erzählt Aust, sei schon in der Kindheit kompliziert gewesen. Er ist in einem Dorf im Westerwald aufgewachsen, neben der Werkstatt seines Vaters, eines Schreiners. Das Kreischen der Bandsäge, das Klopfen der Hämmer, das Zischen des Leimtopfs, all das habe er geliebt, weil es bedeutete, dass der Vater da war. Als er zehn war, wurde zwei Kilometer entfernt eine Autobahn gebaut. Deren Rauschen habe er gehasst, vom ersten Tag an, obwohl es leiser war als die Säge. „Es hat mir niemand gehört\", sagt er. „Es war einfach da, Tag und Nacht, und es hat nie Feierabend gemacht.\"",
       "Dass Lärm krank machen kann, ist inzwischen gut belegt, und hier wird Aust, der sonst gern ironisch spricht, ernst. Die Weltgesundheitsorganisation empfiehlt für Straßenverkehr einen Durchschnittspegel, der deutlich unter dem liegt, dem in Deutschland viele Millionen Menschen an ihrer Wohnung dauerhaft ausgesetzt sind. Dauerhafter Lärm erhöht, so zeigen große Untersuchungen, das Risiko für Bluthochdruck und Herzkrankheiten, er stört den Schlaf, auch wenn man nicht aufwacht, und er beeinträchtigt bei Kindern das Lesenlernen. Besonders betroffen sind Menschen an Hauptstraßen, und das sind selten die Wohlhabenden. „Ruhe ist ein Luxusgut geworden\", sagt Aust. „Wer Geld hat, wohnt im Grünen und schläft nach hinten raus. Die anderen schlafen mit Ohrstöpseln oder gar nicht.\"",
       "Von der Politik erwartet Aust wenig, auch wenn es Vorschriften gibt, die eigentlich in seinem Sinn wären. Größere Städte müssen nach europäischen Regeln Lärmkarten erstellen und sogenannte ruhige Gebiete festlegen, die vor zusätzlichem Lärm geschützt werden sollen. In der Praxis, sagt Aust, seien das oft Friedhöfe, Kleingartenanlagen und Stadtparks, die ohnehin niemand bebauen wolle. Seine eigene Heimatstadt habe als einziges ruhiges Gebiet den Waldfriedhof gemeldet. „Da liegen die Leute, die es endlich ruhig haben\", sagt er. „Für die Lebenden hat es nicht gereicht.\"",
       "Er selbst hat übrigens ein Problem, das er mit einer gewissen Heiterkeit erzählt. Seit seinem fünfzigsten Geburtstag hat er einen Tinnitus, ein hohes, gleichbleibendes Sirren im linken Ohr, vermutlich eine Spätfolge von dreißig Jahren Kopfhörern und Konzertsälen. Die Stille, die er sucht, kann er selbst also gar nicht mehr hören. Er bemerkt sie nur noch indirekt, als Abwesenheit von allem anderen. Gerade deshalb, sagt er, habe er mit der Suche angefangen. Wer ein Geräusch im Kopf hat, das nie aufhört, werde empfindlicher für alles, was draußen aufhören könnte.",
       "Ganz ohne Technik kommt freilich auch die Suche nach der Stille nicht aus. Bevor Aust zu einem neuen Ort aufbricht, studiert er Karten der Flugrouten, Windvorhersagen und die Fahrpläne der Regionalbahnen. Er weiß, an welchen Wochentagen in welchen Gegenden Holz geschlagen wird und wann die Landwirte Gülle fahren. Die besten Chancen, sagt er, habe man an einem Sonntag im Frühjahr zwischen vier und sechs Uhr morgens, bei leichtem Ostwind und hoher Bewölkung. Der Haken sei nur, dass um sechs die ersten Glocken läuten. Man habe also, wenn alles gut geht, genau zwei Stunden Zeit für eine Viertelstunde.",
       "Seine Frau Marianne, die er seit 34 Jahren kennt, hat mit all dem wenig zu tun. Sie arbeitet als Hebamme, hört beim Kochen Radio, beim Bügeln Hörbücher und beim Autofahren beides gleichzeitig, wie Aust behauptet. Zu den Ausflügen ins Moor ist sie ein einziges Mal mitgekommen. Sie habe nach zehn Minuten angefangen zu frieren, nach zwölf zu flüstern und nach dreizehn gefragt, ob sie wenigstens Kaffee aus der Thermoskanne trinken dürfe. „Sie hält mich für verrückt\", sagt Aust, „aber für die harmlose Sorte.\" Im Übrigen sei sie die Einzige, die verstehe, warum er nach einer stillen Viertelstunde manchmal den ganzen Tag gut gelaunt sei.",
       "Was er mit seinen Aufnahmen anfangen will, weiß er noch nicht genau. Ein Hörfunksender hat Interesse an einer Reihe angemeldet, eine Naturschutzorganisation möchte seine Liste der stillen Orte verwenden, um für mehr Schutzgebiete zu werben. Aust zögert. Er fürchtet, dass Orte, die man als still bekannt macht, bald nicht mehr still sind. Einen kleinen Wanderparkplatz im Spessart, über den er vor drei Jahren in einem Interview gesprochen hatte, fand er im Jahr darauf vollgeparkt vor, mit Ausflüglern, die sich laut darüber unterhielten, wie herrlich ruhig es hier sei.",
       "Inzwischen ist es halb sechs, die Sonne steht knapp über den Bäumen, und Aust hat drei weitere Versuche hinter sich. Einmal hat ein Hund in einem fernen Dorf gebellt, das lässt er gelten, Hunde zählen nicht. Einmal war es ein Motorrad. Einmal ein Flugzeug in großer Höhe, von dem man nur ein dünnes Rauschen hörte. Beim fünften Versuch scheint es zu klappen. Die Vögel sind jetzt so zahlreich, dass man einzelne Stimmen kaum noch unterscheiden kann. Ein leichter Wind geht durch das Wollgras. Aust sitzt da, die Augen geschlossen, die Stoppuhr in der Hand. Sieben Minuten. Zehn. Zwölf.",
       "In der dreizehnten Minute kommt es von Süden, tief und breit, ein Hubschrauber, vermutlich ein Rettungsflug zum Krankenhaus in Fulda. Aust öffnet die Augen, sieht dem Geräusch nach, das man noch lange hört, nachdem der Hubschrauber verschwunden ist, und schaltet die Stoppuhr aus. Dann lacht er, zum ersten Mal an diesem Morgen laut. „Gegen den habe ich nichts\", sagt er. „Wenn ich mal auf dem Weg ins Krankenhaus bin, will ich auch nicht, dass einer wegen seiner Viertelstunde Einspruch erhebt.\" Er schraubt die Thermoskanne auf, gießt sich Tee ein und packt die Mikrofone weg. Für heute reicht es. Das Moor, sagt er, laufe ja nicht weg. Es werde höchstens lauter."
      ]
     },
     "aufgaben": [
      {
       "frage": "Welche Aussage steht im Text?",
       "opt": [
        "Aust hat die stille Viertelstunde an verschiedenen Orten nur selten gefunden.",
        "Aust hat die stille Viertelstunde an dem Moor in der Rhön nur ein einziges Mal erlebt.",
        "Für Aust zählen auch Vogelstimmen als störendes Geräusch."
       ],
       "loesung": 0,
       "stelle": "hat er sie neunmal gefunden",
       "erklaerung": "Neunmal an über zweihundert Orten, davon dreimal am Moor. Vögel sind erlaubt."
      },
      {
       "frage": "Welche Aussage steht im Text?",
       "opt": [
        "Als Tonmeister war Aust vor allem für Nachrichtensendungen zuständig.",
        "Als Tonmeister hat Aust Naturgeräusche auch mit einfachen Hilfsmitteln nachgeahmt.",
        "Aust hat einmal eine Konzertaufnahme wegen einer Bonbontüte abgebrochen."
       ],
       "loesung": 1,
       "stelle": "Er hat Gewitter gebaut aus zerknülltem Butterbrotpapier",
       "erklaerung": "Abgebrochen hat ein Dirigent, Aust war für Hörspiele und Konzerte zuständig."
      },
      {
       "frage": "Welche Aussage steht im Text?",
       "opt": [
        "Im schalltoten Raum herrscht absolute Stille, wie Aust erst dort erfuhr.",
        "Die meisten Besucher fühlten sich im schalltoten Raum besonders entspannt.",
        "Im schalltoten Raum nehmen Menschen Geräusche ihres eigenen Körpers wahr."
       ],
       "loesung": 2,
       "stelle": "das Rauschen des eigenen Blutes, den Herzschlag",
       "erklaerung": "Absolute Stille gibt es nicht, das wusste er schon vorher. Viele hielten es kaum aus."
      },
      {
       "frage": "Welche Aussage steht im Text?",
       "opt": [
        "Für Aust ist ein Ort still, wenn kein menschengemachtes Geräusch zu hören ist.",
        "Ein Moor im Morgengrauen ist nach Aust ein besonders leiser Ort.",
        "Aust misst die Stille mit einem genauen technischen Grenzwert."
       ],
       "loesung": 0,
       "stelle": "Was fehlt, ist allein der Mensch",
       "erklaerung": "Das Moor ist voller Geräusche, und die Viertelstunde ist „keine Messung im technischen Sinn\"."
      },
      {
       "frage": "Welche Aussage steht im Text?",
       "opt": [
        "Die meisten Versuche scheitern an Kirchenglocken.",
        "Am häufigsten werden Austs Versuche durch Flugzeuge unterbrochen.",
        "Wer stundenlang keinem Menschen begegnet, hört auch keine menschlichen Geräusche."
       ],
       "loesung": 1,
       "stelle": "An erster Stelle stehen Flugzeuge, mit großem Abstand",
       "erklaerung": "Glocken stehen an vierter Stelle, und „Begegnen ist nicht dasselbe wie Hören\"."
      },
      {
       "frage": "Welche Aussage steht im Text?",
       "opt": [
        "Aust zählt Kirchenglocken nicht mit, weil sie seit Jahrhunderten zur Gegend gehören.",
        "Aust hat entschieden, bei Glocken keine Ausnahme zu machen.",
        "Aust lässt Kuhglocken und alte Traktoren gelten."
       ],
       "loesung": 1,
       "stelle": "Am Ende hat er beschlossen, streng zu bleiben",
       "erklaerung": "Glocken zählen, gerade um keine Rabatte für Kuhglocken und Traktoren geben zu müssen."
      },
      {
       "frage": "Welche Aussage steht im Text?",
       "opt": [
        "Austs Archiv besteht größtenteils aus Aufnahmen in Mooren und Wäldern.",
        "Aust lehnt Stadtgeräusche grundsätzlich als Lärm ab.",
        "Aust bewundert die Geräuschkulisse eines Schulhofs in der Pause."
       ],
       "loesung": 2,
       "stelle": "Besonders der Schulhof, sagt er, sei ein Meisterwerk",
       "erklaerung": "Die meisten Aufnahmen stammen aus der Stadt, manche findet er schön."
      },
      {
       "frage": "Welche Aussage steht im Text?",
       "opt": [
        "Ob ein Geräusch als Lärm gilt, hängt auch davon ab, wer es verursacht.",
        "Lärm lässt sich nach Aust allein mit einem Messgerät eindeutig bestimmen.",
        "Der eigene Rasenmäher ist nach Messung immer leiser als der des Nachbarn."
       ],
       "loesung": 0,
       "stelle": "wer es verursacht und ob man ihm etwas entgegensetzen kann",
       "erklaerung": "Lärm ist „ein sozialer\" Begriff, das Messgerät zeigt bei den Rasenmähern dasselbe."
      },
      {
       "frage": "Welche Aussage steht im Text?",
       "opt": [
        "Lärm schadet nach Aust nur, wenn man davon aufwacht.",
        "Von Verkehrslärm sind wohlhabende Menschen besonders häufig betroffen.",
        "Dauerhafter Lärm kann bei Kindern das Lesenlernen beeinträchtigen."
       ],
       "loesung": 2,
       "stelle": "bei Kindern das Lesenlernen",
       "erklaerung": "Lärm stört den Schlaf auch ohne Aufwachen, betroffen sind selten die Wohlhabenden."
      },
      {
       "frage": "Welche Aussage steht im Text?",
       "opt": [
        "Aust hat seine Liste der stillen Orte bereits einer Naturschutzorganisation übergeben.",
        "Aust befürchtet, dass bekannt gemachte stille Orte ihre Ruhe verlieren.",
        "Der Parkplatz im Spessart ist durch Austs Interview stiller geworden."
       ],
       "loesung": 1,
       "stelle": "die man als still bekannt macht, bald nicht mehr still sind",
       "erklaerung": "Er zögert noch, und im Spessart kamen danach mehr Ausflügler."
      }
     ]
    },
    {
     "nr": 3,
     "art": "textwahl",
     "text": {
      "sorte": "zeitung",
      "quelle": "Rede von Hannelore Brück zum Abschied aus der Stadtbücherei Lindenau, gekürzt im Gemeindeblatt",
      "titel": "Und jetzt dürfen Sie laut sein",
      "zeilen": [
       "Abschnitt 1: Liebes Team, lieber Herr Bürgermeister, liebe Stammgäste, ich bin gebeten worden, heute etwas zu sagen, und ich gestehe, dass mir das schwerer fällt als gedacht. Nicht weil ich nichts zu sagen hätte, im Gegenteil. Ich habe einunddreißig Jahre in diesem Haus gearbeitet, und in den ersten zwanzig bestand ein guter Teil meiner Arbeit darin, andere Leute am Reden zu hindern. Sie werden verstehen, dass es mir eigenartig vorkommt, ausgerechnet in diesem Saal laut und lange zu sprechen. Ich tue es trotzdem. Sie dürfen mich mit dem Finger auf den Lippen unterbrechen, ich weiß, wie das geht.",
       "Abschnitt 2: Als ich 1994 anfing, hing über der Ausleihe ein Schild, auf dem in Frakturschrift „Ruhe!“ stand, mit Ausrufezeichen. Meine damalige Chefin, Frau Dr. Hollmann, hielt das Schild für eine historische Kostbarkeit. Ich hielt es für eine Drohung. Es war ein Haus, in dem man auf Zehenspitzen ging und flüsterte, auch wenn man allein war, und in dem ein Hustenanfall wirkte wie ein Feueralarm. Ich habe diese Stille geliebt, das will ich nicht verschweigen. Aber ich habe auch gesehen, wer an der Tür stehen blieb und wieder ging, weil er sich nicht traute, in diese Stille hineinzutreten.",
       "Abschnitt 3: Es waren meistens dieselben. Kinder, deren Eltern nicht mit ihnen in Bibliotheken gingen. Jugendliche, die zu zweit kamen und lachen wollten. Menschen, die gerade Deutsch lernten und nicht wussten, ob man hier überhaupt fragen darf. Stille, das habe ich in diesen Jahren gelernt, ist nicht neutral. Sie ist eine Sprache, die manche fließend sprechen und andere gar nicht, und wer sie nicht spricht, fühlt sich in ihr fremd. Frau Dr. Hollmann hat mir einmal gesagt, wer leise sein könne, sei bei uns willkommen. Sie hat nie gefragt, wo man das lernt. Manche kamen nie wieder.",
       "Abschnitt 4: Dann kam der Umbau. Die meisten von Ihnen waren dabei, manche haben dagegen unterschrieben. 2008 haben wir die Kinderbücherei aus dem Keller ins Erdgeschoss geholt, ein Café eingerichtet, eine Sofaecke, in der man telefonieren darf, und einen Raum für Hausaufgabenhilfe, in dem es, wie wir alle wissen, nicht leise zugeht. Die Sofaecke war übrigens vom ersten Tag an besetzt. Ich habe damals Briefe bekommen, die ich bis heute aufbewahre. Einer endete mit dem Satz: „Sie haben aus einem Tempel einen Bahnhof gemacht.“ Ich habe lange überlegt, was daran eigentlich so schlimm ist. Auf Bahnhöfen kommen immerhin Menschen an.",
       "Abschnitt 5: Ich will nicht so tun, als wäre alles gut gegangen. In den ersten zwei Jahren nach dem Umbau haben wir Leser verloren, vor allem ältere, und einige sind nie zurückgekommen. Herr Kampmann zum Beispiel, der dreißig Jahre lang jeden Dienstag die Wochenzeitungen gelesen hat, immer am selben Platz am Fenster. Er hat mir zum Abschied die Hand gegeben und gesagt, er nehme es mir nicht übel, aber hier könne er nicht mehr denken. Ich habe ihm geglaubt. Ich glaube ihm bis heute. Ich habe nur keinen Weg gefunden, ihm und den Kindern im Erdgeschoss zugleich gerecht zu werden.",
       "Abschnitt 6: Man hat uns damals vorgeworfen, wir liefen dem Zeitgeist hinterher. Das stimmt nur halb. Die Wahrheit ist, dass die Stille, die Herr Kampmann vermisst hat, nie ganz echt war. Sie war hergestellt, mit Schildern, mit Blicken, mit meinem Finger auf meinen Lippen. Sie wurde bewacht, und Bewachung ist Arbeit. Ich habe einmal ausgerechnet, wie oft ich in den Neunzigern am Tag „Psst“ gesagt habe. Die Zahl ist peinlich, ich nenne sie hier nicht. Nur so viel: Wenn eine Stille so viel Aufsicht braucht, dann ist sie vielleicht weniger ein Zustand als eine Vorschrift.",
       "Abschnitt 7: In den letzten Jahren ist etwas Merkwürdiges passiert, und davon möchte ich Ihnen erzählen, weil es mich überrascht hat. Seit wir den Lesesaal im zweiten Stock wieder als Stillraum ausgewiesen haben, ohne Schild, nur mit einem kleinen Hinweis an der Tür, ist er voll. Jeden Tag. Wir hatten mit zehn, vielleicht zwölf Lesern gerechnet, heute sind es oft vierzig. Und zwar mit genau den Leuten, für die wir unten den Lärm erlaubt haben. Studentinnen, die zu Hause zu viert in einer Küche sitzen. Männer aus der Unterkunft an der Bahnstraße, die zum ersten Mal seit Monaten einen Raum haben, in dem niemand etwas von ihnen will. Schüler vor Prüfungen, freiwillig.",
       "Abschnitt 8: Dort oben muss niemand ermahnt werden. Ich habe in diesem Raum in drei Jahren kein einziges Mal „Psst“ gesagt. Die Stille hält sich selbst, weil sie gewollt ist, weil alle, die dort sitzen, wissen, wie selten sie geworden ist. Ich glaube, das ist der Unterschied, um den es mir heute geht. Es gibt eine Stille, die man Menschen auferlegt, und eine, die Menschen sich nehmen, wenn man ihnen den Raum dafür lässt. Die erste habe ich zwanzig Jahre lang verwaltet. Die zweite habe ich nur noch aufgeschlossen, morgens um neun, und abends wieder abgeschlossen.",
       "Abschnitt 9: Draußen in der Stadt ist es in diesen einunddreißig Jahren nicht leiser geworden. Die Umgehungsstraße, die uns versprochen wurde, gibt es bis heute nicht, die Lastwagen fahren weiter über den Marktplatz, und seit dem Frühjahr wird gegenüber ein Parkhaus abgerissen. Sie haben es vielleicht gehört, als Sie heute über den Platz kamen. Ich sage das nicht, um mich zu beklagen. Ich sage es, weil dieses Haus einer der letzten Orte in Lindenau ist, an denen man nichts kaufen muss, um bleiben zu dürfen. Im Café unten kostet der Kaffee einen Euro zwanzig, und wer keinen will, muss keinen trinken. Für Stille, meine Damen und Herren, muss man sonst inzwischen bezahlen.",
       "Abschnitt 10: Ich weiß, dass im Stadtrat über die Öffnungszeiten gesprochen wird. Ich weiß auch, dass man überlegt, den Lesesaal im zweiten Stock als Veranstaltungsraum zu vermieten, weil er an den meisten Tagen „ungenutzt“ sei. So steht es in der Vorlage, ich habe sie gelesen, man bekommt als Bibliothekarin ja einiges in die Hand. Erlauben Sie mir ein Wort zu diesem Wort. Ein Raum, in dem vierzig Menschen still sitzen und lesen, ist nicht ungenutzt. Er sieht nur so aus, wenn man von außen durch die Glastür schaut und auf ein Geräusch wartet, an dem man den Nutzen messen kann.",
       "Abschnitt 11: Herr Bürgermeister, Sie lächeln, und ich nehme das als gutes Zeichen. Ich nehme es jedenfalls zu Protokoll. Meine Nachfolgerin, Frau Okafor, sitzt in der ersten Reihe, und sie wird es nicht vergessen, sie hat ein sehr gutes Gedächtnis und einen Kalender, den sie wirklich benutzt. Ich übergebe ihr ein Haus, das lauter ist als das, in das ich gekommen bin, und, wie ich finde, auch stiller. Das klingt nach einem Widerspruch. Es ist keiner, wenn man bereit ist, zwischen der Stille einer Kirche und der Stille eines Menschen, der endlich nachdenken kann, zu unterscheiden.",
       "Abschnitt 12: Was ich vermissen werde? Man fragt mich das in diesen Wochen oft, und meistens antworte ich etwas Höfliches. Ihnen sage ich die Wahrheit: Ich werde den Lärm vermissen. Das Klappern aus dem Café, die Kinder, die beim Vorlesen dazwischenrufen, die Jungen aus der Hausaufgabenhilfe, die sich über Bruchrechnung streiten, als ginge es um die Meisterschaft. Zu Hause habe ich sehr viel Stille vor mir, mein Mann ist ein leiser Mensch, und unsere Straße ist eine Sackgasse. Ich freue mich darauf. Aber ich ahne, dass ich mich nach ein paar Wochen in die Kinderbücherei setzen werde, nur um etwas zu hören.",
       "Abschnitt 13: Ich komme zum Schluss, und ich mache es kurz, weil unten das Buffet wartet und ich die Geräusche aus dem Café schon höre. Das Schild mit dem Wort „Ruhe!“ liegt übrigens noch im Magazin, in Packpapier gewickelt. Frau Dr. Hollmann hätte gewollt, dass es aufbewahrt wird, und ich habe es aufbewahrt. Ich schlage vor, Frau Okafor, dass wir es eines Tages oben im Lesesaal aufhängen, wo es niemand mehr braucht. Dort wäre es keine Drohung mehr, sondern eine Erinnerung. Das Buffet hat übrigens Herr Kampmann gestiftet, der heute auch gekommen ist. Ich habe ihm einen Platz am Fenster freigehalten. Ich danke Ihnen. Und jetzt dürfen Sie laut sein."
      ]
     },
     "aufgaben": [
      {
       "frage": "Die Rednerin wendet eine Kritik ironisch ins Positive.",
       "opt": [
        "Abschnitt 1",
        "Abschnitt 2",
        "Abschnitt 3",
        "Abschnitt 4",
        "Abschnitt 5",
        "Abschnitt 6",
        "Abschnitt 7",
        "Abschnitt 8",
        "Abschnitt 9",
        "Abschnitt 10",
        "Abschnitt 11",
        "Abschnitt 12",
        "Abschnitt 13",
        "x · in keinem Abschnitt"
       ],
       "loesung": 3,
       "fest": true,
       "stelle": "Auf Bahnhöfen kommen immerhin Menschen an.",
       "erklaerung": "Aus dem Vorwurf „Bahnhof“ macht sie ein Lob: Hier kommen Menschen an."
      },
      {
       "frage": "Die Rednerin wirft ihrer früheren Chefin indirekt vor, ungleiche Voraussetzungen übersehen zu haben.",
       "opt": [
        "Abschnitt 1",
        "Abschnitt 2",
        "Abschnitt 3",
        "Abschnitt 4",
        "Abschnitt 5",
        "Abschnitt 6",
        "Abschnitt 7",
        "Abschnitt 8",
        "Abschnitt 9",
        "Abschnitt 10",
        "Abschnitt 11",
        "Abschnitt 12",
        "Abschnitt 13",
        "x · in keinem Abschnitt"
       ],
       "loesung": 2,
       "fest": true,
       "stelle": "Sie hat nie gefragt, wo man das lernt.",
       "erklaerung": "Leise sein muss man lernen; nicht jeder hatte dazu Gelegenheit."
      },
      {
       "frage": "Die Rednerin fordert, das Café im Erdgeschoss wieder zu schließen.",
       "opt": [
        "Abschnitt 1",
        "Abschnitt 2",
        "Abschnitt 3",
        "Abschnitt 4",
        "Abschnitt 5",
        "Abschnitt 6",
        "Abschnitt 7",
        "Abschnitt 8",
        "Abschnitt 9",
        "Abschnitt 10",
        "Abschnitt 11",
        "Abschnitt 12",
        "Abschnitt 13",
        "x · in keinem Abschnitt"
       ],
       "loesung": 13,
       "fest": true,
       "erklaerung": "Das Café erwähnt sie mehrmals, aber nur wohlwollend; eine solche Forderung gibt es nicht."
      },
      {
       "frage": "Die Rednerin räumt ein, dass ihre Reform auch Verlierer hatte, deren Klage berechtigt war.",
       "opt": [
        "Abschnitt 1",
        "Abschnitt 2",
        "Abschnitt 3",
        "Abschnitt 4",
        "Abschnitt 5",
        "Abschnitt 6",
        "Abschnitt 7",
        "Abschnitt 8",
        "Abschnitt 9",
        "Abschnitt 10",
        "Abschnitt 11",
        "Abschnitt 12",
        "Abschnitt 13",
        "x · in keinem Abschnitt"
       ],
       "loesung": 4,
       "fest": true,
       "stelle": "Ich habe ihm geglaubt.",
       "erklaerung": "Herrn Kampmanns Satz, er könne nicht mehr denken, nimmt sie ernst."
      },
      {
       "frage": "Die frühere Ruhe war nach Ansicht der Rednerin eher erzwungen als gewachsen.",
       "opt": [
        "Abschnitt 1",
        "Abschnitt 2",
        "Abschnitt 3",
        "Abschnitt 4",
        "Abschnitt 5",
        "Abschnitt 6",
        "Abschnitt 7",
        "Abschnitt 8",
        "Abschnitt 9",
        "Abschnitt 10",
        "Abschnitt 11",
        "Abschnitt 12",
        "Abschnitt 13",
        "x · in keinem Abschnitt"
       ],
       "loesung": 5,
       "fest": true,
       "stelle": "Sie war hergestellt, mit Schildern",
       "erklaerung": "Schilder, Blicke, „Psst“: Die Stille war eine Vorschrift."
      },
      {
       "frage": "Ausgerechnet die Menschen, für die man Lärm zugelassen hatte, suchen heute die Ruhe.",
       "opt": [
        "Abschnitt 1",
        "Abschnitt 2",
        "Abschnitt 3",
        "Abschnitt 4",
        "Abschnitt 5",
        "Abschnitt 6",
        "Abschnitt 7",
        "Abschnitt 8",
        "Abschnitt 9",
        "Abschnitt 10",
        "Abschnitt 11",
        "Abschnitt 12",
        "Abschnitt 13",
        "x · in keinem Abschnitt"
       ],
       "loesung": 6,
       "fest": true,
       "stelle": "mit genau den Leuten, für die wir unten den Lärm erlaubt haben",
       "erklaerung": "Der Stillraum füllt sich mit denen, die früher an der Tür umkehrten."
      },
      {
       "frage": "Die Rednerin wirft den Verantwortlichen vor, Wert nur an dem zu erkennen, was sich hören und messen lässt.",
       "opt": [
        "Abschnitt 1",
        "Abschnitt 2",
        "Abschnitt 3",
        "Abschnitt 4",
        "Abschnitt 5",
        "Abschnitt 6",
        "Abschnitt 7",
        "Abschnitt 8",
        "Abschnitt 9",
        "Abschnitt 10",
        "Abschnitt 11",
        "Abschnitt 12",
        "Abschnitt 13",
        "x · in keinem Abschnitt"
       ],
       "loesung": 9,
       "fest": true,
       "stelle": "auf ein Geräusch wartet, an dem man den Nutzen messen kann",
       "erklaerung": "Der Saal heißt „ungenutzt“, weil man den stillen Gebrauch nicht sieht und nicht hört."
      },
      {
       "frage": "Die Rednerin macht aus einer freundlichen Geste des Bürgermeisters eine Art Zusage.",
       "opt": [
        "Abschnitt 1",
        "Abschnitt 2",
        "Abschnitt 3",
        "Abschnitt 4",
        "Abschnitt 5",
        "Abschnitt 6",
        "Abschnitt 7",
        "Abschnitt 8",
        "Abschnitt 9",
        "Abschnitt 10",
        "Abschnitt 11",
        "Abschnitt 12",
        "Abschnitt 13",
        "x · in keinem Abschnitt"
       ],
       "loesung": 10,
       "fest": true,
       "stelle": "Ich nehme es jedenfalls zu Protokoll.",
       "erklaerung": "Sein Lächeln wird schriftlich festgehalten, und die Nachfolgerin wird ihn daran erinnern."
      },
      {
       "frage": "Die Rednerin wirft ihrer Nachfolgerin vor, die Bedeutung der Stille zu unterschätzen.",
       "opt": [
        "Abschnitt 1",
        "Abschnitt 2",
        "Abschnitt 3",
        "Abschnitt 4",
        "Abschnitt 5",
        "Abschnitt 6",
        "Abschnitt 7",
        "Abschnitt 8",
        "Abschnitt 9",
        "Abschnitt 10",
        "Abschnitt 11",
        "Abschnitt 12",
        "Abschnitt 13",
        "x · in keinem Abschnitt"
       ],
       "loesung": 13,
       "fest": true,
       "erklaerung": "Frau Okafor wird nur gelobt (Gedächtnis, Kalender); Kritik an ihr gibt es nicht."
      },
      {
       "frage": "Die Rednerin ahnt, dass ihr die ersehnte Ruhe des Ruhestands nicht genügen wird.",
       "opt": [
        "Abschnitt 1",
        "Abschnitt 2",
        "Abschnitt 3",
        "Abschnitt 4",
        "Abschnitt 5",
        "Abschnitt 6",
        "Abschnitt 7",
        "Abschnitt 8",
        "Abschnitt 9",
        "Abschnitt 10",
        "Abschnitt 11",
        "Abschnitt 12",
        "Abschnitt 13",
        "x · in keinem Abschnitt"
       ],
       "loesung": 11,
       "fest": true,
       "stelle": "nur um etwas zu hören",
       "erklaerung": "Sie freut sich auf die Stille, rechnet aber damit, den Lärm bald zu suchen."
      }
     ]
    }
   ]
  }
 ]
};
