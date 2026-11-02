/* ============================================================
   deutschoderwas club — LESEN + SPRACHBAUSTEINE telc Deutsch B2

   Aufbau nach dem offiziellen telc-Format (telc „Tipps zur
   Prüfungsvorbereitung Deutsch B2", Übungstest 1 und 3, geprüft
   01.11.2026). Alle Texte und Aufgaben eigene, nur das Format
   ist nachgebaut. Erzeugt aus scratchpad/telcb2 mit bau-b2.js.
   ============================================================ */

window.LESEN_TELC_B2 = {
 "niveau": "telcB2",
 "pruefung": "telc Deutsch B2",
 "minuten": 90,
 "punkte": 40,
 "stufen": [
  {
   "nr": 1,
   "titel": "Worum geht es?",
   "zeichen": "🧭",
   "was": "Die Hauptaussage längerer Texte und die feinen Bedingungen in Situationen."
  },
  {
   "nr": 2,
   "titel": "Sprachbausteine",
   "zeichen": "🧩",
   "was": "B2-Grammatik und feste Verbindungen, wie sie in den Lücken abgefragt werden."
  },
  {
   "nr": 3,
   "titel": "Die Aufgabentypen",
   "zeichen": "🎯",
   "was": "Alle fünf Teile einzeln — drei Leseteile, zwei Teile Sprachbausteine."
  },
  {
   "nr": 4,
   "titel": "Die ganze Prüfung",
   "zeichen": "⏱️",
   "was": "Lesen und Sprachbausteine am Stück: 40 Aufgaben, 90 Minuten mit Uhr."
  }
 ],
 "bloecke": [
  {
   "id": "tb2l1",
   "stufe": 1,
   "titel": "Die Hauptaussage längerer Texte",
   "kurz": "Den roten Faden erkennen, nicht an Beispielen hängen bleiben",
   "ziel": "Nach diesem Block erkennst du, worauf ein längerer Text hinauswill, auch wenn Beispiele, Zahlen und Gegenstimmen ablenken.",
   "zeichen": "🎯",
   "farbe": "turq",
   "aufgaben": [
    {
     "art": "wahl",
     "frage": "Text: „Viele Unternehmen haben während der Pandemie Homeoffice eingeführt. Inzwischen holen einige ihre Beschäftigten zurück ins Büro, weil sie den spontanen Austausch vermissen. Die meisten setzen jedoch auf Mischmodelle: zwei bis drei Tage im Büro, den Rest zu Hause. Fachleute gehen davon aus, dass sich diese Lösung langfristig durchsetzt.\" Was ist die Hauptaussage?",
     "opt": [
      "Homeoffice wird bald wieder abgeschafft.",
      "Mischmodelle aus Büro und Homeoffice werden zum Normalfall.",
      "Im Büro arbeiten Menschen spontaner."
     ],
     "loesung": 1,
     "erklaerung": "Die Rückholaktionen sind nur ein Gegenbeispiel. Der Text endet bei den Mischmodellen, die sich durchsetzen."
    },
    {
     "art": "wahl",
     "frage": "Text: „Lange galt: Wer abnehmen will, muss vor allem Sport treiben. Neue Studien zeigen jedoch, dass Bewegung allein selten zu deutlichem Gewichtsverlust führt. Entscheidend sei die Ernährung. Sport bleibe trotzdem wichtig, etwa für Herz und Kreislauf.\" Welche Überschrift passt am besten?",
     "opt": [
      "Abnehmen gelingt vor allem über die Ernährung",
      "Sport schadet dem Herzen",
      "Neue Sportarten zum Abnehmen"
     ],
     "loesung": 0,
     "erklaerung": "Kern ist die neue Erkenntnis: Ernährung entscheidet. Sport wird nicht abgewertet, sondern nur relativiert."
    },
    {
     "art": "wahl",
     "frage": "Text: „In mehreren Städten werden Parkplätze in Wohnstraßen in kleine Grünflächen mit Bänken umgewandelt. Anwohner, die auf ihr Auto angewiesen sind, kritisieren das. Die Stadtverwaltungen verweisen dagegen auf mehr Lebensqualität und kühlere Straßen im Sommer. Erste Umfragen zeigen eine wachsende Zustimmung.\" Worum geht es hauptsächlich?",
     "opt": [
      "Autofahrer protestieren erfolgreich gegen die Stadt",
      "Städte bauen neue Parkhäuser",
      "Parkplätze werden zu Grünflächen, und die Akzeptanz steigt"
     ],
     "loesung": 2,
     "erklaerung": "Die Kritik ist ein Nebenaspekt. Der Text beschreibt die Umwandlung und die wachsende Zustimmung."
    },
    {
     "art": "wahl",
     "frage": "Text: „Wer eine Fremdsprache lernt, verbringt oft viel Zeit mit Vokabellisten. Sprachforscher raten dazu, Wörter lieber in ganzen Sätzen und typischen Situationen zu lernen. So bleibe nicht nur die Bedeutung, sondern auch der Gebrauch im Gedächtnis. Listen seien höchstens zur Wiederholung sinnvoll.\" Was empfehlen die Forscher?",
     "opt": [
      "Vokabeln im Zusammenhang statt isoliert lernen",
      "Ganz auf Wiederholung verzichten",
      "Mehr Zeit für Listen einplanen"
     ],
     "loesung": 0,
     "erklaerung": "Hauptaussage: Wörter im Kontext lernen. Listen sind nur noch zum Wiederholen da, nicht ganz verboten."
    },
    {
     "art": "wahl",
     "frage": "Text: „Second-Hand-Mode boomt. Plattformen für gebrauchte Kleidung melden Rekordumsätze, auch Kaufhäuser richten eigene Abteilungen ein. Kritiker geben allerdings zu bedenken, dass viele Kunden dadurch nicht weniger, sondern einfach mehr kaufen. Ob der Trend der Umwelt wirklich nützt, ist daher umstritten.\" Welche Aussage fasst den Text zusammen?",
     "opt": [
      "Second-Hand-Kleidung schützt eindeutig die Umwelt.",
      "Kaufhäuser verkaufen keine neue Kleidung mehr.",
      "Gebrauchte Mode ist beliebt, ihr Nutzen für die Umwelt aber fraglich."
     ],
     "loesung": 2,
     "erklaerung": "Der Text hat zwei Teile: Boom und Zweifel. Nur C enthält beides; A widerspricht dem Schluss."
    },
    {
     "art": "wahl",
     "frage": "Text: „Immer mehr Senioren nutzen Smartphones. Trotzdem fühlen sich viele von digitalen Behördendiensten ausgeschlossen, weil Formulare kompliziert und Hilfsangebote rar sind. Verbände fordern deshalb, dass Ämter weiterhin persönliche Termine anbieten.\" Was ist die zentrale Forderung?",
     "opt": [
      "Senioren sollen auf Smartphones verzichten",
      "Ämter sollen persönliche Beratung beibehalten",
      "Formulare sollen ganz abgeschafft werden"
     ],
     "loesung": 1,
     "erklaerung": "Die Smartphone-Nutzung ist nur der Einstieg. Gefordert werden weiterhin persönliche Termine."
    },
    {
     "art": "wahl",
     "frage": "Text: „Viele Arbeitnehmer erledigen auch im Urlaub noch berufliche E-Mails. Psychologen warnen: Wer nie richtig abschaltet, erholt sich kaum und ist langfristig weniger leistungsfähig. Einige Firmen leiten Mails im Urlaub deshalb automatisch um.\" Welche Überschrift passt?",
     "opt": [
      "Firmen verbieten den Urlaub",
      "Psychologen arbeiten im Urlaub mehr",
      "Ständige Erreichbarkeit verhindert echte Erholung"
     ],
     "loesung": 2,
     "erklaerung": "Kern ist die Warnung vor fehlender Erholung. Die Mail-Umleitung ist eine Reaktion darauf."
    },
    {
     "art": "wahl",
     "frage": "Text: „Die Zahl der Studienanfänger in technischen Fächern ist gesunken. Gleichzeitig suchen Unternehmen händeringend Ingenieure. Hochschulen versuchen nun, schon Schüler mit Projekttagen und Praktika für Technik zu begeistern.\" Was ist das Thema?",
     "opt": [
      "Wie Hochschulen dem Nachwuchsmangel in der Technik begegnen",
      "Warum Praktika schlecht bezahlt sind",
      "Ingenieure verdienen weniger als früher"
     ],
     "loesung": 0,
     "erklaerung": "Problem (weniger Studienanfänger) plus Reaktion (Projekttage) ergeben das Thema. Über Gehälter steht nichts."
    },
    {
     "art": "wahl",
     "frage": "Text: „Zwar sind Lastenräder teuer, doch immer mehr Familien schaffen sich eines an. Viele Städte fördern den Kauf mit Zuschüssen. Wer täglich Kinder zur Kita bringt und einkauft, kann so oft auf das Zweitauto verzichten.\" Was will der Text vor allem zeigen?",
     "opt": [
      "Lastenräder sind zu teuer für Familien",
      "Lastenräder können für Familien das Zweitauto ersetzen",
      "Kitas bieten jetzt Fahrräder an"
     ],
     "loesung": 1,
     "erklaerung": "„Zwar teuer, doch …\" – das Gewicht liegt nach „doch\": Lastenräder lohnen sich und ersetzen das Zweitauto."
    },
    {
     "art": "wahl",
     "frage": "Text: „Früher galt ein Lebenslauf mit Lücken als Makel. Heute sehen viele Personalabteilungen das gelassener: Eine Weltreise, eine Familienphase oder eine Neuorientierung könne sogar wertvolle Erfahrungen bringen. Wichtig sei nur, offen damit umzugehen.\" Welche Aussage trifft den Kern?",
     "opt": [
      "Weltreisen sind bei Arbeitgebern besonders beliebt",
      "Lücken im Lebenslauf sollte man verschweigen",
      "Lücken im Lebenslauf werden heute toleranter bewertet"
     ],
     "loesung": 2,
     "erklaerung": "Kern ist der Wandel: früher Makel, heute gelassener. Die Weltreise ist nur ein Beispiel, B sagt das Gegenteil."
    }
   ]
  },
  {
   "id": "tb2l2",
   "stufe": 1,
   "titel": "Feine Unterschiede in Situationen",
   "kurz": "Bedingungen, Ausnahmen – und manchmal passt gar nichts",
   "ziel": "Nach diesem Block prüfst du jede Bedingung einer Situation, erkennst versteckte Ausnahmen und traust dich, „x\" zu wählen.",
   "zeichen": "🔎",
   "farbe": "gold",
   "aufgaben": [
    {
     "art": "wahl",
     "frage": "Situation: Sie möchten einen Abendkurs in Buchhaltung besuchen, Ihr Arbeitgeber soll die Kosten übernehmen. Anzeige: „Buchhaltung kompakt – dienstags 18–21 Uhr. Rechnung nur auf Privatpersonen ausstellbar.\" Passt die Anzeige?",
     "opt": [
      "Ja, Zeit und Thema stimmen",
      "Nein, der Arbeitgeber kann keine Rechnung bekommen",
      "Nein, der Kurs ist am Vormittag"
     ],
     "loesung": 1,
     "erklaerung": "Zeit und Thema passen, aber die Bedingung „Arbeitgeber zahlt\" scheitert an der Einschränkung."
    },
    {
     "art": "wahl",
     "frage": "Situation: Sie suchen eine Wohnung mit Balkon, Ihre Katze soll mitkommen. Anzeige: „3 Zimmer mit großem Balkon, ruhige Lage. Kleintiere wie Fische oder Hamster erlaubt.\" Passt die Anzeige?",
     "opt": [
      "Ja, Balkon und Haustiere sind erlaubt",
      "Ja, weil die Lage ruhig ist",
      "Nein, eine Katze gilt nicht als Kleintier"
     ],
     "loesung": 2,
     "erklaerung": "Die Erlaubnis gilt nur für Kleintiere. Eine Katze fällt nicht darunter – Falle durch das Wort „Tiere\"."
    },
    {
     "art": "wahl",
     "frage": "Situation: Sie möchten am Sonntag mit Ihrem Vater, der im Rollstuhl sitzt, ins Museum. Anzeige: „Stadtmuseum – Sonderausstellung im 2. Stock. Geöffnet Di–So. Wegen Umbau ist der Aufzug bis Ende Mai außer Betrieb.\" Es ist April. Passt die Anzeige?",
     "opt": [
      "Nein, das Ausstellungsgeschoss ist nicht erreichbar",
      "Ja, das Museum ist sonntags geöffnet",
      "Ja, die Ausstellung ist neu"
     ],
     "loesung": 0,
     "erklaerung": "Öffnungszeit passt, aber ohne Aufzug kommt Ihr Vater nicht in den 2. Stock."
    },
    {
     "art": "wahl",
     "frage": "Situation: Sie möchten Ihr Fahrrad reparieren lassen und es heute noch zurückhaben. Anzeige A: „Radwerkstatt Speiche – Reparatur innerhalb einer Woche.\" Anzeige B: „Fahrradservice Kette – Expressreparatur am selben Tag, nur bei Abgabe bis 10 Uhr.\" Es ist 9 Uhr. Welche passt?",
     "opt": [
      "A",
      "B",
      "keine"
     ],
     "loesung": 1,
     "erklaerung": "Die Bedingung „bis 10 Uhr\" ist erfüllt, denn es ist erst 9 Uhr."
    },
    {
     "art": "wahl",
     "frage": "Situation: Ihr Fahrrad muss heute noch repariert werden. Anzeige A: „Radwerkstatt Speiche – Reparatur innerhalb einer Woche.\" Anzeige B: „Fahrradservice Kette – Expressreparatur am selben Tag, nur bei Abgabe bis 10 Uhr.\" Es ist 14 Uhr. Welche passt?",
     "opt": [
      "A",
      "B",
      "keine"
     ],
     "loesung": 2,
     "erklaerung": "Nach 10 Uhr gilt der Express nicht mehr, und A dauert eine Woche. Also x."
    },
    {
     "art": "wahl",
     "frage": "Situation: Sie möchten Ihre Eltern zu einem Theaterabend einladen. Beide sind über 65 und möchten nicht viel bezahlen. Anzeige: „Komödie am Markt – Ermäßigung für Schüler, Studenten und Inhaber des Sozialpasses.\" Passt die Anzeige wegen des Preises?",
     "opt": [
      "Ja, Senioren zahlen weniger",
      "Ja, weil es eine Komödie ist",
      "Nein, eine Seniorenermäßigung wird nicht genannt"
     ],
     "loesung": 2,
     "erklaerung": "Ermäßigung gibt es nur für die genannten Gruppen. Senioren gehören nicht dazu."
    },
    {
     "art": "wahl",
     "frage": "Situation: Sie arbeiten im Schichtdienst und möchten einen Sprachkurs machen. Anzeige: „Italienisch A2 – flexibel: Sie wählen jede Woche zwischen Vormittags- und Abendgruppe.\" Passt die Anzeige?",
     "opt": [
      "Nein, man muss sich für eine feste Gruppe entscheiden",
      "Ja, man kann jede Woche neu wählen",
      "Nein, es gibt nur Abendkurse"
     ],
     "loesung": 1,
     "erklaerung": "Gerade die wöchentliche Wahl macht den Kurs schichtdiensttauglich."
    },
    {
     "art": "wahl",
     "frage": "Situation: Sie brauchen dringend einen Babysitter für Ihre zweijährige Tochter am Freitagabend. Anzeige: „Studentin betreut Kinder ab drei Jahren, auch abends und am Wochenende.\" Passt die Anzeige?",
     "opt": [
      "Ja, sie arbeitet abends",
      "Ja, Freitag ist fast Wochenende",
      "Nein, die Tochter ist zu jung"
     ],
     "loesung": 2,
     "erklaerung": "Die Altersgrenze „ab drei Jahren\" schließt eine Zweijährige aus."
    },
    {
     "art": "wahl",
     "frage": "Situation: Sie wollen ein gebrauchtes Auto kaufen und es vorher von einem Fachmann prüfen lassen. Anzeige: „Autohaus Berger – Gebrauchtwagen mit 12 Monaten Garantie, Probefahrt jederzeit möglich.\" Passt die Anzeige?",
     "opt": [
      "Ja, es gibt Garantie",
      "Nein, eine unabhängige Prüfung wird nicht angeboten",
      "Ja, man kann Probe fahren"
     ],
     "loesung": 1,
     "erklaerung": "Garantie und Probefahrt sind nicht dasselbe wie eine Prüfung durch einen Fachmann."
    },
    {
     "art": "wahl",
     "frage": "Strategie: In telc B2 Leseverstehen Teil 3 haben Sie zu einer Situation einen Text gefunden, der fast alles erfüllt – nur ein Detail fehlt. Was tun Sie?",
     "opt": [
      "Den Text trotzdem nehmen, weil er am besten passt",
      "Die Situation überspringen und raten",
      "„x\" in Betracht ziehen, weil jede Bedingung erfüllt sein muss"
     ],
     "loesung": 2,
     "erklaerung": "„Fast passend\" ist die typische Falle. Fehlt eine Bedingung, ist oft „x\" richtig."
    }
   ]
  },
  {
   "id": "tb2l3",
   "stufe": 2,
   "titel": "Sprachbausteine: B2-Grammatik",
   "kurz": "Zweiteilige Konnektoren, Genitiv, Passiv, Konjunktiv II, Relativsätze",
   "ziel": "Nach diesem Block erkennst du die typischen B2-Strukturen und wählst sicher die Form, die Satzbau und Bedeutung verlangen.",
   "zeichen": "🧩",
   "farbe": "rot",
   "aufgaben": [
    {
     "art": "wahl",
     "frage": "Der Kurs ist nicht nur günstig, ___ auch sehr gut organisiert.",
     "opt": [
      "aber",
      "sondern",
      "sowie"
     ],
     "loesung": 1,
     "erklaerung": "Zweiteiliger Konnektor: „nicht nur … sondern auch\"."
    },
    {
     "art": "wahl",
     "frage": "Je früher Sie sich anmelden, ___ größer ist die Auswahl an Terminen.",
     "opt": [
      "desto",
      "als",
      "so dass"
     ],
     "loesung": 0,
     "erklaerung": "„je … desto\" plus Komparativ: je früher, desto größer."
    },
    {
     "art": "wahl",
     "frage": "Ich habe ___ Ihre E-Mail noch Ihren Anruf erhalten.",
     "opt": [
      "entweder",
      "sowohl",
      "weder"
     ],
     "loesung": 2,
     "erklaerung": "„noch\" verlangt „weder\": weder … noch = beides nicht."
    },
    {
     "art": "wahl",
     "frage": "___ des schlechten Wetters fand das Konzert im Freien statt.",
     "opt": [
      "Wegen",
      "Trotz",
      "Statt"
     ],
     "loesung": 1,
     "erklaerung": "Das Konzert fand trotzdem draußen statt – Gegensatz, also „trotz\" + Genitiv."
    },
    {
     "art": "wahl",
     "frage": "Bitte reichen Sie die Unterlagen ___ von zwei Wochen ein.",
     "opt": [
      "innerhalb",
      "während",
      "außer"
     ],
     "loesung": 0,
     "erklaerung": "Frist: „innerhalb von / innerhalb + Genitiv\" = in diesem Zeitraum."
    },
    {
     "art": "wahl",
     "frage": "Der Antrag muss bis Freitag vollständig ausgefüllt ___ .",
     "opt": [
      "werden",
      "sein worden",
      "geworden"
     ],
     "loesung": 0,
     "erklaerung": "Passiv mit Modalverb: muss + Partizip II + „werden\" (Infinitiv)."
    },
    {
     "art": "wahl",
     "frage": "Die Heizung hätte schon im Herbst repariert werden ___ .",
     "opt": [
      "gemusst",
      "müssen",
      "muss"
     ],
     "loesung": 1,
     "erklaerung": "Konjunktiv II Vergangenheit mit Modalverb im Passiv: hätte … werden müssen (Ersatzinfinitiv)."
    },
    {
     "art": "wahl",
     "frage": "Ich ___ Ihnen sehr dankbar, wenn Sie mir die Unterlagen bis Montag schicken könnten.",
     "opt": [
      "werde",
      "bin gewesen",
      "wäre"
     ],
     "loesung": 2,
     "erklaerung": "Höfliche Bitte im Konjunktiv II: „Ich wäre Ihnen dankbar, wenn …\"."
    },
    {
     "art": "wahl",
     "frage": "Das ist die Firma, ___ ich mich letzte Woche beworben habe.",
     "opt": [
      "bei der",
      "bei die",
      "der"
     ],
     "loesung": 0,
     "erklaerung": "„sich bewerben bei\" + Dativ, die Firma = feminin → „bei der\"."
    },
    {
     "art": "wahl",
     "frage": "Die Kollegin, ___ Unterstützung wir das Projekt abschließen konnten, verlässt leider die Firma.",
     "opt": [
      "deren",
      "mit deren",
      "dessen"
     ],
     "loesung": 1,
     "erklaerung": "„mit (ihrer) Unterstützung\" – Präposition + Genitiv-Relativpronomen feminin: „mit deren\"."
    }
   ]
  },
  {
   "id": "tb2l4",
   "stufe": 2,
   "titel": "Nomen-Verb-Verbindungen und feste Wendungen",
   "kurz": "Welches Verb gehört zu welchem Nomen?",
   "ziel": "Nach diesem Block erkennst du typische B2-Verbindungen wie „zur Verfügung stellen\" oder „in Frage kommen\" und wählst das richtige Verb.",
   "zeichen": "🔗",
   "farbe": "lila",
   "aufgaben": [
    {
     "art": "wahl",
     "frage": "Die Firma ___ allen Mitarbeitern einen Laptop zur Verfügung.",
     "opt": [
      "stellt",
      "steht",
      "gibt"
     ],
     "loesung": 0,
     "erklaerung": "„jemandem etwas zur Verfügung stellen\" = bereitstellen. „zur Verfügung stehen\" hat kein Akkusativobjekt."
    },
    {
     "art": "wahl",
     "frage": "Für die Stelle ___ nur Bewerber mit Berufserfahrung in Frage.",
     "opt": [
      "stehen",
      "kommen",
      "gehen"
     ],
     "loesung": 1,
     "erklaerung": "Feste Wendung: „in Frage kommen\" = möglich sein, geeignet sein."
    },
    {
     "art": "wahl",
     "frage": "Bitte ___ Sie Rücksicht auf die Nachbarn und vermeiden Sie Lärm nach 22 Uhr.",
     "opt": [
      "machen",
      "geben",
      "nehmen"
     ],
     "loesung": 2,
     "erklaerung": "„Rücksicht nehmen auf\" + Akkusativ."
    },
    {
     "art": "wahl",
     "frage": "Der Vorschlag hat bei den Kollegen große Zustimmung ___ .",
     "opt": [
      "gefunden",
      "genommen",
      "gestellt"
     ],
     "loesung": 0,
     "erklaerung": "„Zustimmung finden\" = akzeptiert werden."
    },
    {
     "art": "wahl",
     "frage": "Wir müssen die neuen Regeln endlich in die Tat ___ .",
     "opt": [
      "bringen",
      "umsetzen",
      "stellen"
     ],
     "loesung": 1,
     "erklaerung": "Feste Wendung: „etwas in die Tat umsetzen\" = verwirklichen."
    },
    {
     "art": "wahl",
     "frage": "Bitte ___ Sie zu den Vorwürfen bis Ende der Woche Stellung.",
     "opt": [
      "nehmen",
      "geben",
      "führen"
     ],
     "loesung": 0,
     "erklaerung": "„Stellung nehmen zu\" = seine Meinung äußern."
    },
    {
     "art": "wahl",
     "frage": "Der Umzug hat mehr Zeit in Anspruch ___ als gedacht.",
     "opt": [
      "gemacht",
      "gestellt",
      "genommen"
     ],
     "loesung": 2,
     "erklaerung": "„Zeit in Anspruch nehmen\" = Zeit kosten."
    },
    {
     "art": "wahl",
     "frage": "Der Vertrag ___ erst am 1. Januar in Kraft.",
     "opt": [
      "kommt",
      "tritt",
      "geht"
     ],
     "loesung": 1,
     "erklaerung": "„in Kraft treten\" = gültig werden."
    },
    {
     "art": "wahl",
     "frage": "Die Stadt hat noch keine Entscheidung über den Neubau ___ .",
     "opt": [
      "getroffen",
      "gemacht",
      "gegeben"
     ],
     "loesung": 0,
     "erklaerung": "„eine Entscheidung treffen\". „machen\" ist umgangssprachlich und in Prüfungen falsch."
    },
    {
     "art": "wahl",
     "frage": "Bei der Planung müssen wir auch die Kosten in Betracht ___ .",
     "opt": [
      "nehmen",
      "ziehen",
      "bringen"
     ],
     "loesung": 1,
     "erklaerung": "„etwas in Betracht ziehen\" = berücksichtigen."
    }
   ]
  }
 ],
 "teile": [
  {
   "nr": 1,
   "art": "textwahl",
   "name": "Leseverstehen: Überschriften",
   "kurz": "Fünf Texte, zehn Überschriften",
   "was": "Du liest fünf Zeitungstexte und zehn Überschriften. Zu jedem Text passt genau eine — fünf bleiben übrig.",
   "tipp": "Auf B2 greifen gleich mehrere falsche Überschriften Wörter aus dem Text auf. Frag dich: Worum geht es im ganzen Text — nicht nur im ersten Satz?",
   "zeichen": "🗞️",
   "farbe": "turq",
   "punkte": 5,
   "runden": [
    {
     "id": "b2t1s1",
     "aufgaben": [
      {
       "frage": "Welche Überschrift passt zu Text 1?",
       "opt": [
        "Erfahrung geht nicht in Rente",
        "Regierung plant späteren Renteneintritt",
        "Handwerk setzt auf frühen Kontakt mit Schülern",
        "Ohne Foto und Namen haben mehr Bewerber eine Chance",
        "Software entscheidet künftig über Einstellungen",
        "Unternehmen kehren zum Einzelbüro zurück",
        "Nach Feierabend bleibt das Postfach geschlossen",
        "Mehr Geld für Überstunden am Wochenende",
        "Offene Räume, weniger Gespräche",
        "Immer mehr Abiturienten entscheiden sich für eine Lehre"
       ],
       "loesung": 3,
       "fest": true,
       "text": {
        "sorte": "zeitung",
        "quelle": "Aus einer Wirtschaftszeitung",
        "titel": "Text 1",
        "zeilen": [
         "Ein mittelgroßer Versicherer aus Hallstedt hat ein Jahr lang getestet, was passiert, wenn Bewerbungen anonym eingehen. Name, Alter, Geschlecht und Foto wurden vor der ersten Auswahl automatisch entfernt; die Personalabteilung sah zunächst nur Ausbildung, Berufserfahrung und Kenntnisse.",
         "Das Ergebnis überraschte selbst die Verantwortlichen: Deutlich mehr Frauen über fünfzig und Bewerber mit ausländisch klingenden Namen wurden zu Vorstellungsgesprächen eingeladen. „Wir hätten nie gedacht, dass wir so stark nach dem ersten Eindruck entscheiden“, sagt Personalchefin Katrin Albers. Die eingesetzte Software soll allerdings nur die persönlichen Daten verdecken – die eigentliche Auswahl treffen weiterhin Menschen. Ab Januar wird das Verfahren im ganzen Unternehmen eingeführt."
        ]
       },
       "stelle": "Deutlich mehr Frauen über fünfzig und Bewerber mit ausländisch klingenden Namen",
       "erklaerung": "Anonyme Bewerbungen verbessern die Chancen. Die Software verdeckt nur Daten, die Auswahl treffen Menschen."
      },
      {
       "frage": "Welche Überschrift passt zu Text 2?",
       "opt": [
        "Erfahrung geht nicht in Rente",
        "Regierung plant späteren Renteneintritt",
        "Handwerk setzt auf frühen Kontakt mit Schülern",
        "Ohne Foto und Namen haben mehr Bewerber eine Chance",
        "Software entscheidet künftig über Einstellungen",
        "Unternehmen kehren zum Einzelbüro zurück",
        "Nach Feierabend bleibt das Postfach geschlossen",
        "Mehr Geld für Überstunden am Wochenende",
        "Offene Räume, weniger Gespräche",
        "Immer mehr Abiturienten entscheiden sich für eine Lehre"
       ],
       "loesung": 8,
       "fest": true,
       "text": {
        "sorte": "zeitung",
        "quelle": "Aus einem Wissenschaftsmagazin",
        "titel": "Text 2",
        "zeilen": [
         "Großraumbüros gelten als modern: Ohne Wände, so die Idee, sprechen Kollegen häufiger miteinander und tauschen schneller Ideen aus. Eine Untersuchung der Hochschule Wendlingen kommt nun zu einem ganz anderen Schluss.",
         "Die Forscher statteten Beschäftigte zweier Firmen vor und nach dem Umzug in offene Räume mit kleinen Sensoren aus. Nach dem Umzug führten die Mitarbeiter rund ein Drittel weniger persönliche Gespräche, schrieben dafür aber mehr Nachrichten im Firmenchat. Offenbar ziehen sich viele zurück, weil sie sich beobachtet fühlen oder andere nicht stören wollen. Die Studienleiterin empfiehlt deshalb nicht, die Großraumbüros wieder abzuschaffen, sondern zusätzliche ruhige Besprechungsecken einzurichten. Auch feste Zeiten ohne Störungen könnten helfen."
        ]
       },
       "stelle": "rund ein Drittel weniger persönliche Gespräche",
       "erklaerung": "Hauptaussage: In offenen Büros wird weniger gesprochen. Zurück zum Einzelbüro wird ausdrücklich nicht empfohlen."
      },
      {
       "frage": "Welche Überschrift passt zu Text 3?",
       "opt": [
        "Erfahrung geht nicht in Rente",
        "Regierung plant späteren Renteneintritt",
        "Handwerk setzt auf frühen Kontakt mit Schülern",
        "Ohne Foto und Namen haben mehr Bewerber eine Chance",
        "Software entscheidet künftig über Einstellungen",
        "Unternehmen kehren zum Einzelbüro zurück",
        "Nach Feierabend bleibt das Postfach geschlossen",
        "Mehr Geld für Überstunden am Wochenende",
        "Offene Räume, weniger Gespräche",
        "Immer mehr Abiturienten entscheiden sich für eine Lehre"
       ],
       "loesung": 0,
       "fest": true,
       "text": {
        "sorte": "zeitung",
        "quelle": "Aus einer Regionalzeitung",
        "titel": "Text 3",
        "zeilen": [
         "Mit 66 könnte Werner Haas eigentlich seine Ruhe genießen. Stattdessen fährt der ehemalige Werkzeugmacher zweimal pro Woche in seinen alten Betrieb, einen Maschinenbauer in Kellbach. Dort begleitet er junge Facharbeiter bei schwierigen Aufträgen und zeigt ihnen Handgriffe, die in keinem Lehrbuch stehen.",
         "Das Unternehmen hat das Programm vor zwei Jahren gestartet, weil in den kommenden Jahren fast ein Viertel der Belegschaft in den Ruhestand geht. Mit den Rentnern soll das Wissen nicht einfach verschwinden. Die erfahrenen Kräfte arbeiten auf Minijob-Basis und bestimmen ihre Zeiten selbst. Inzwischen machen elf ehemalige Mitarbeiter mit, und auch andere Betriebe in der Region haben bereits Interesse an dem Modell angemeldet."
        ]
       },
       "stelle": "Mit den Rentnern soll das Wissen nicht einfach verschwinden.",
       "erklaerung": "Rentner geben ihr Wissen an Jüngere weiter. Ein späteres Rentenalter ist kein Thema des Textes."
      },
      {
       "frage": "Welche Überschrift passt zu Text 4?",
       "opt": [
        "Erfahrung geht nicht in Rente",
        "Regierung plant späteren Renteneintritt",
        "Handwerk setzt auf frühen Kontakt mit Schülern",
        "Ohne Foto und Namen haben mehr Bewerber eine Chance",
        "Software entscheidet künftig über Einstellungen",
        "Unternehmen kehren zum Einzelbüro zurück",
        "Nach Feierabend bleibt das Postfach geschlossen",
        "Mehr Geld für Überstunden am Wochenende",
        "Offene Räume, weniger Gespräche",
        "Immer mehr Abiturienten entscheiden sich für eine Lehre"
       ],
       "loesung": 6,
       "fest": true,
       "text": {
        "sorte": "zeitung",
        "quelle": "Aus einer Gewerkschaftszeitung",
        "titel": "Text 4",
        "zeilen": [
         "Wer abends noch schnell die dienstlichen E-Mails liest, kommt schwerer zur Ruhe. Ein Energieversorger in Nordbrück hat daraus Konsequenzen gezogen: Zwischen 19 Uhr und 7 Uhr sowie am Wochenende leitet der Server keine Nachrichten mehr auf die Diensthandys der Beschäftigten weiter.",
         "Die Mails gehen nicht verloren, sie kommen erst am nächsten Arbeitstag an. Ausgenommen sind lediglich Bereitschaftsdienste, etwa bei Störungen im Stromnetz. Die Regel wurde gemeinsam mit dem Betriebsrat vereinbart. Nach einem halben Jahr geben die Mitarbeiter in einer internen Befragung an, dass sie sich in ihrer Freizeit besser erholen. Die Zahl der Überstunden ist dadurch übrigens nicht gesunken. Andere Firmen in der Region wollen das Modell nun ebenfalls prüfen."
        ]
       },
       "stelle": "leitet der Server keine Nachrichten mehr auf die Diensthandys",
       "erklaerung": "Abends und am Wochenende kommen keine Mails an. Über Überstunden steht nur, dass sie nicht weniger wurden."
      },
      {
       "frage": "Welche Überschrift passt zu Text 5?",
       "opt": [
        "Erfahrung geht nicht in Rente",
        "Regierung plant späteren Renteneintritt",
        "Handwerk setzt auf frühen Kontakt mit Schülern",
        "Ohne Foto und Namen haben mehr Bewerber eine Chance",
        "Software entscheidet künftig über Einstellungen",
        "Unternehmen kehren zum Einzelbüro zurück",
        "Nach Feierabend bleibt das Postfach geschlossen",
        "Mehr Geld für Überstunden am Wochenende",
        "Offene Räume, weniger Gespräche",
        "Immer mehr Abiturienten entscheiden sich für eine Lehre"
       ],
       "loesung": 2,
       "fest": true,
       "text": {
        "sorte": "zeitung",
        "quelle": "Aus einem Stadtmagazin",
        "titel": "Text 5",
        "zeilen": [
         "Viele Handwerksbetriebe in der Region finden keine Auszubildenden mehr. Die Kreishandwerkerschaft geht deshalb einen neuen Weg: Ab der achten Klasse können Schüler einmal im Monat einen Nachmittag in einer Werkstatt verbringen – als Tischler, Elektriker oder Bäcker.",
         "„Die meisten Jugendlichen wissen gar nicht, was in diesen Berufen eigentlich passiert“, sagt Projektleiterin Aylin Kaya. Wer selbst einmal eine Leitung verlegt oder ein Regal gebaut hat, denkt eher über eine Lehre nach. Bisher machen zwölf Schulen und rund vierzig Betriebe mit. Gerade die Gymnasien sind allerdings noch zurückhaltend – dort gilt das Studium weiterhin als der normale Weg. Die Projektleiterin hofft, im nächsten Jahr weitere Schulen zu gewinnen."
        ]
       },
       "stelle": "Ab der achten Klasse können Schüler einmal im Monat",
       "erklaerung": "Es geht um frühe Praxis für Schüler. Gymnasien sind eher zurückhaltend; von mehr Abiturienten in der Lehre ist keine Rede."
      }
     ]
    },
    {
     "id": "b2t1s2",
     "aufgaben": [
      {
       "frage": "Welche Überschrift passt zu Text 1?",
       "opt": [
        "Einwegbecher sind ab Sommer verboten",
        "Transportrad zum Nulltarif kommt gut an",
        "Für ein Neubaugebiet müssen alte Bäume weichen",
        "Weniger Licht in der Nacht – zum Schutz der Tiere",
        "Parken in der Innenstadt wird teurer",
        "Hitzefeste Arten sollen das Stadtgrün sichern",
        "Starkregen setzt ganze Straßenzüge unter Wasser",
        "Mehrweg wird angeboten, aber selten genutzt",
        "Dunkle Straßen locken Einbrecher an",
        "Ein Wohnviertel, das Regen speichert"
       ],
       "loesung": 5,
       "fest": true,
       "text": {
        "sorte": "zeitung",
        "quelle": "Aus einer Lokalzeitung",
        "titel": "Text 1",
        "zeilen": [
         "Trockene Sommer setzen den Straßenbäumen in Marbach-Süd stark zu. Vor allem Ahorn und Buche, die früher die Alleen der Stadt prägten, werfen schon im August ihre Blätter ab oder sterben ganz. Das Grünflächenamt pflanzt deshalb seit diesem Herbst andere Arten, die mit Hitze und wenig Wasser besser zurechtkommen, etwa die Silberlinde oder die Zerr-Eiche aus Südosteuropa.",
         "„Wir wollen den Baumbestand nicht ersetzen, sondern ergänzen“, betont Amtsleiter Jonas Petersen. Gesunde alte Bäume bleiben stehen. Nur wo ein Baum ohnehin gefällt werden muss, kommt eine neue Art in den Boden. Ob sich die Neulinge bewähren, wird an rund zweihundert Standorten über zehn Jahre hinweg beobachtet."
        ]
       },
       "stelle": "die mit Hitze und wenig Wasser besser zurechtkommen",
       "erklaerung": "Neue, hitzefeste Baumarten werden gepflanzt. Gefällt wird nur, wenn es ohnehin nötig ist, nicht für Neubauten."
      },
      {
       "frage": "Welche Überschrift passt zu Text 2?",
       "opt": [
        "Einwegbecher sind ab Sommer verboten",
        "Transportrad zum Nulltarif kommt gut an",
        "Für ein Neubaugebiet müssen alte Bäume weichen",
        "Weniger Licht in der Nacht – zum Schutz der Tiere",
        "Parken in der Innenstadt wird teurer",
        "Hitzefeste Arten sollen das Stadtgrün sichern",
        "Starkregen setzt ganze Straßenzüge unter Wasser",
        "Mehrweg wird angeboten, aber selten genutzt",
        "Dunkle Straßen locken Einbrecher an",
        "Ein Wohnviertel, das Regen speichert"
       ],
       "loesung": 1,
       "fest": true,
       "text": {
        "sorte": "zeitung",
        "quelle": "Aus einem Stadtmagazin",
        "titel": "Text 2",
        "zeilen": [
         "Einen alten Kühlschrank zum Wertstoffhof bringen oder den Wocheneinkauf für eine ganze Familie transportieren – dafür braucht man in Felsberg kein Auto mehr. Seit April stellt die Stadt an acht Stationen elektrische Lastenräder zur Verfügung, die man per App bis zu drei Stunden lang kostenlos ausleihen kann.",
         "Geplant hatte man mit etwa zweihundert Fahrten im Monat, tatsächlich waren es schon im Juni fast tausend. Bezahlt wird das Angebot aus den Einnahmen der städtischen Parkhäuser; die Gebühren selbst wurden dafür nicht erhöht. Wegen der großen Nachfrage sollen im nächsten Jahr vier weitere Stationen dazukommen, vor allem in den Außenbezirken, wo die Busse seltener fahren."
        ]
       },
       "stelle": "tatsächlich waren es schon im Juni fast tausend",
       "erklaerung": "Das kostenlose Lastenrad wird viel mehr genutzt als geplant. Die Parkgebühren wurden ausdrücklich nicht erhöht."
      },
      {
       "frage": "Welche Überschrift passt zu Text 3?",
       "opt": [
        "Einwegbecher sind ab Sommer verboten",
        "Transportrad zum Nulltarif kommt gut an",
        "Für ein Neubaugebiet müssen alte Bäume weichen",
        "Weniger Licht in der Nacht – zum Schutz der Tiere",
        "Parken in der Innenstadt wird teurer",
        "Hitzefeste Arten sollen das Stadtgrün sichern",
        "Starkregen setzt ganze Straßenzüge unter Wasser",
        "Mehrweg wird angeboten, aber selten genutzt",
        "Dunkle Straßen locken Einbrecher an",
        "Ein Wohnviertel, das Regen speichert"
       ],
       "loesung": 9,
       "fest": true,
       "text": {
        "sorte": "zeitung",
        "quelle": "Aus einem Magazin für Bauen und Wohnen",
        "titel": "Text 3",
        "zeilen": [
         "Wenn im Sommer ein heftiges Gewitter niedergeht, laufen in vielen Städten die Kanäle über. Im neuen Quartier „Am Mühlbach“ in Rotenstein soll das nicht passieren. Fast alle Dächer sind begrünt, Wege und Parkplätze sind mit einem Pflaster belegt, durch das Wasser versickern kann. Was dennoch übrig bleibt, fließt in flache Mulden und einen kleinen Teich in der Mitte der Siedlung.",
         "Das gesammelte Wasser verdunstet an heißen Tagen langsam und kühlt so die Umgebung. Außerdem wird es zum Gießen der Gemeinschaftsgärten genutzt. Stadtplaner sprechen von einer „Schwammstadt“. Die Baukosten lagen nach Angaben des Bauträgers nur etwa drei Prozent über denen eines gewöhnlichen Neubaugebiets."
        ]
       },
       "stelle": "fließt in flache Mulden und einen kleinen Teich",
       "erklaerung": "Das Viertel hält Regenwasser zurück und nutzt es. Überflutungen werden nur als allgemeines Problem anderer Städte erwähnt."
      },
      {
       "frage": "Welche Überschrift passt zu Text 4?",
       "opt": [
        "Einwegbecher sind ab Sommer verboten",
        "Transportrad zum Nulltarif kommt gut an",
        "Für ein Neubaugebiet müssen alte Bäume weichen",
        "Weniger Licht in der Nacht – zum Schutz der Tiere",
        "Parken in der Innenstadt wird teurer",
        "Hitzefeste Arten sollen das Stadtgrün sichern",
        "Starkregen setzt ganze Straßenzüge unter Wasser",
        "Mehrweg wird angeboten, aber selten genutzt",
        "Dunkle Straßen locken Einbrecher an",
        "Ein Wohnviertel, das Regen speichert"
       ],
       "loesung": 3,
       "fest": true,
       "text": {
        "sorte": "zeitung",
        "quelle": "Aus einer Regionalzeitung",
        "titel": "Text 4",
        "zeilen": [
         "In der Gemeinde Ellerbach gehen seit Anfang Mai um Mitternacht die meisten Straßenlaternen aus, erst um fünf Uhr morgens werden sie wieder eingeschaltet. Hauptgrund ist nicht das Sparen von Strom, sondern der Naturschutz: Künstliches Licht lockt nachts unzählige Insekten an, die erschöpft an den Lampen sterben, und stört auch Fledermäuse bei der Jagd.",
         "Anfangs gab es Kritik. Einige Anwohner befürchteten, dass in dunklen Straßen häufiger eingebrochen wird. Die Polizei kann das bisher nicht bestätigen, die Zahl der Einbrüche ist sogar leicht zurückgegangen. An Kreuzungen, Bushaltestellen und Fußgängerüberwegen bleibt es außerdem die ganze Nacht hell. Nebenbei spart die Gemeinde so mehrere tausend Euro Stromkosten im Jahr."
        ]
       },
       "stelle": "Hauptgrund ist nicht das Sparen von Strom, sondern der Naturschutz",
       "erklaerung": "Die Laternen gehen zum Schutz von Insekten und Fledermäusen aus. Mehr Einbrüche gibt es laut Polizei nicht."
      },
      {
       "frage": "Welche Überschrift passt zu Text 5?",
       "opt": [
        "Einwegbecher sind ab Sommer verboten",
        "Transportrad zum Nulltarif kommt gut an",
        "Für ein Neubaugebiet müssen alte Bäume weichen",
        "Weniger Licht in der Nacht – zum Schutz der Tiere",
        "Parken in der Innenstadt wird teurer",
        "Hitzefeste Arten sollen das Stadtgrün sichern",
        "Starkregen setzt ganze Straßenzüge unter Wasser",
        "Mehrweg wird angeboten, aber selten genutzt",
        "Dunkle Straßen locken Einbrecher an",
        "Ein Wohnviertel, das Regen speichert"
       ],
       "loesung": 7,
       "fest": true,
       "text": {
        "sorte": "zeitung",
        "quelle": "Aus einer Verbraucherzeitschrift",
        "titel": "Text 5",
        "zeilen": [
         "Seit Jahresbeginn müssen größere Cafés und Bäckereien ihren Kunden für Getränke zum Mitnehmen auch Mehrwegbecher anbieten. Eine Stichprobe der Verbraucherzentrale in vierzig Filialen zeigt nun: Das Angebot gibt es fast überall, doch nur etwa jeder zwanzigste Kaffee wird tatsächlich im Pfandbecher verkauft.",
         "Die Gründe sind vielfältig. Häufig wird der Mehrwegbecher gar nicht aktiv angeboten, und viele Kunden scheuen das Pfand von einem bis zwei Euro. Außerdem gibt es verschiedene Systeme, sodass man den Becher nicht in jedem Laden zurückgeben kann. Ein Verbot von Einwegbechern, wie es manche Umweltverbände fordern, ist derzeit nicht geplant. Die Verbraucherzentrale fordert stattdessen, dass Mehrweg für die Kunden günstiger wird als Einweg."
        ]
       },
       "stelle": "nur etwa jeder zwanzigste Kaffee wird tatsächlich im Pfandbecher verkauft",
       "erklaerung": "Mehrwegbecher gibt es, aber kaum jemand nutzt sie. Ein Verbot wird nur gefordert, nicht beschlossen."
      }
     ]
    },
    {
     "id": "b2t1s3",
     "aufgaben": [
      {
       "frage": "Welche Überschrift passt zu Text 1?",
       "opt": [
        "Sicherheit im Netz: Die Bequemlichkeit gewinnt",
        "Hackerangriff legt Rathaus tagelang lahm",
        "Ausleihen statt kaufen: Technik aus der Bücherei",
        "Händler müssen gefälschte Bewertungen löschen",
        "Fünf Sterne sind nicht immer echt",
        "Jugendliche verbringen täglich Stunden am Handy",
        "Ungenutzte Schätze in deutschen Schubladen",
        "Stadtbücherei öffnet künftig auch sonntags",
        "Neue Smartphones werden immer teurer",
        "Eine Woche offline tut der Stimmung gut"
       ],
       "loesung": 4,
       "fest": true,
       "text": {
        "sorte": "zeitung",
        "quelle": "Aus einem Verbrauchermagazin",
        "titel": "Text 1",
        "zeilen": [
         "Bevor sie online ein Hotel buchen oder einen Staubsauger bestellen, lesen die meisten Menschen zuerst die Bewertungen anderer Kunden. Doch wie verlässlich sind diese? Ein Forschungsteam der Universität Brennau hat über 100 000 Bewertungen auf mehreren Plattformen ausgewertet und schätzt, dass etwa jede siebte gekauft oder von den Anbietern selbst geschrieben wurde.",
         "Typische Warnsignale sind viele sehr kurze Fünf-Sterne-Texte, die innerhalb weniger Tage erscheinen, und auffällig ähnliche Formulierungen. Die Plattformen löschen zwar regelmäßig verdächtige Einträge, kommen aber kaum hinterher. Die Forscher raten, vor allem die ausführlichen mittleren Bewertungen zu lesen – sie seien meist am ehrlichsten. Wer unsicher ist, sollte außerdem mehrere Plattformen vergleichen."
        ]
       },
       "stelle": "etwa jede siebte gekauft oder von den Anbietern selbst geschrieben",
       "erklaerung": "Viele Bewertungen sind gefälscht. Gelöscht wird von den Plattformen freiwillig, von einer Pflicht für Händler steht nichts im Text."
      },
      {
       "frage": "Welche Überschrift passt zu Text 2?",
       "opt": [
        "Sicherheit im Netz: Die Bequemlichkeit gewinnt",
        "Hackerangriff legt Rathaus tagelang lahm",
        "Ausleihen statt kaufen: Technik aus der Bücherei",
        "Händler müssen gefälschte Bewertungen löschen",
        "Fünf Sterne sind nicht immer echt",
        "Jugendliche verbringen täglich Stunden am Handy",
        "Ungenutzte Schätze in deutschen Schubladen",
        "Stadtbücherei öffnet künftig auch sonntags",
        "Neue Smartphones werden immer teurer",
        "Eine Woche offline tut der Stimmung gut"
       ],
       "loesung": 9,
       "fest": true,
       "text": {
        "sorte": "zeitung",
        "quelle": "Aus einer Wochenzeitung",
        "titel": "Text 2",
        "zeilen": [
         "Sieben Tage lang keine sozialen Netzwerke: Darauf ließen sich 300 Studenten für eine Untersuchung der Hochschule Lindau-Ost ein. Telefonieren und Nachrichten schreiben war erlaubt, das endlose Scrollen durch Videos und Fotos dagegen nicht. Vorher und nachher füllten alle Teilnehmer einen Fragebogen zu ihrer Stimmung und ihrem Schlaf aus.",
         "Das Ergebnis: Wer durchgehalten hatte, fühlte sich am Ende der Woche spürbar ausgeglichener und schlief besser. Besonders profitierten diejenigen, die vorher mehr als drei Stunden täglich in den Netzwerken verbracht hatten. Allerdings hielt etwa ein Viertel die Pause nicht bis zum Ende durch. Viele gaben an, sie hätten Angst gehabt, etwas Wichtiges zu verpassen."
        ]
       },
       "stelle": "fühlte sich am Ende der Woche spürbar ausgeglichener",
       "erklaerung": "Die Pause verbessert Stimmung und Schlaf. Die drei Stunden täglich sind nur ein Detail über einen Teil der Studenten."
      },
      {
       "frage": "Welche Überschrift passt zu Text 3?",
       "opt": [
        "Sicherheit im Netz: Die Bequemlichkeit gewinnt",
        "Hackerangriff legt Rathaus tagelang lahm",
        "Ausleihen statt kaufen: Technik aus der Bücherei",
        "Händler müssen gefälschte Bewertungen löschen",
        "Fünf Sterne sind nicht immer echt",
        "Jugendliche verbringen täglich Stunden am Handy",
        "Ungenutzte Schätze in deutschen Schubladen",
        "Stadtbücherei öffnet künftig auch sonntags",
        "Neue Smartphones werden immer teurer",
        "Eine Woche offline tut der Stimmung gut"
       ],
       "loesung": 6,
       "fest": true,
       "text": {
        "sorte": "zeitung",
        "quelle": "Aus einer Umweltzeitschrift",
        "titel": "Text 3",
        "zeilen": [
         "In deutschen Haushalten liegen nach Schätzungen eines Branchenverbands über 200 Millionen alte Handys und Smartphones herum, die niemand mehr benutzt. Dabei stecken in ihnen wertvolle Rohstoffe wie Gold, Kupfer und seltene Metalle, deren Abbau Umwelt und Menschen in vielen Ländern stark belastet.",
         "Warum werden die Geräte nicht abgegeben? Viele Besitzer möchten sie als Ersatz behalten, andere haben Sorge um ihre privaten Daten. Fachleute empfehlen, das Gerät auf die Werkseinstellungen zurückzusetzen und dann im Handel oder beim Wertstoffhof abzugeben. Händler mit größerer Verkaufsfläche sind verpflichtet, Altgeräte kostenlos zurückzunehmen – auch dann, wenn man dort kein neues Gerät kauft. Viele Verbraucher wissen davon allerdings nichts."
        ]
       },
       "stelle": "alte Handys und Smartphones herum, die niemand mehr benutzt",
       "erklaerung": "Millionen alte Geräte mit wertvollen Rohstoffen werden nicht genutzt. Über Preise neuer Geräte sagt der Text nichts."
      },
      {
       "frage": "Welche Überschrift passt zu Text 4?",
       "opt": [
        "Sicherheit im Netz: Die Bequemlichkeit gewinnt",
        "Hackerangriff legt Rathaus tagelang lahm",
        "Ausleihen statt kaufen: Technik aus der Bücherei",
        "Händler müssen gefälschte Bewertungen löschen",
        "Fünf Sterne sind nicht immer echt",
        "Jugendliche verbringen täglich Stunden am Handy",
        "Ungenutzte Schätze in deutschen Schubladen",
        "Stadtbücherei öffnet künftig auch sonntags",
        "Neue Smartphones werden immer teurer",
        "Eine Woche offline tut der Stimmung gut"
       ],
       "loesung": 0,
       "fest": true,
       "text": {
        "sorte": "zeitung",
        "quelle": "Aus einer Computerzeitschrift",
        "titel": "Text 4",
        "zeilen": [
         "Obwohl fast täglich über Datenlecks und Hackerangriffe berichtet wird, schützen viele Menschen ihre Konten nur schlecht. Das zeigt eine Umfrage im Auftrag eines Verbands für Internetsicherheit. Fast die Hälfte der Befragten verwendet für mehrere Dienste dasselbe Passwort, und nur ein Drittel nutzt die sogenannte Zwei-Faktor-Anmeldung, bei der man zusätzlich einen Code auf dem Handy bestätigen muss.",
         "Als Grund nennen die meisten nicht fehlendes Wissen, sondern den Aufwand: Komplizierte Passwörter seien schwer zu merken, und der zusätzliche Code koste Zeit. Experten empfehlen einen Passwort-Manager, der sichere Passwörter erstellt und speichert. Dann muss man sich nur noch ein einziges Hauptpasswort merken. Dieses sollte dann allerdings besonders lang sein."
        ]
       },
       "stelle": "Als Grund nennen die meisten nicht fehlendes Wissen, sondern den Aufwand",
       "erklaerung": "Man schützt sich schlecht, weil es bequemer ist. Hackerangriffe werden nur allgemein als Hintergrund erwähnt."
      },
      {
       "frage": "Welche Überschrift passt zu Text 5?",
       "opt": [
        "Sicherheit im Netz: Die Bequemlichkeit gewinnt",
        "Hackerangriff legt Rathaus tagelang lahm",
        "Ausleihen statt kaufen: Technik aus der Bücherei",
        "Händler müssen gefälschte Bewertungen löschen",
        "Fünf Sterne sind nicht immer echt",
        "Jugendliche verbringen täglich Stunden am Handy",
        "Ungenutzte Schätze in deutschen Schubladen",
        "Stadtbücherei öffnet künftig auch sonntags",
        "Neue Smartphones werden immer teurer",
        "Eine Woche offline tut der Stimmung gut"
       ],
       "loesung": 2,
       "fest": true,
       "text": {
        "sorte": "zeitung",
        "quelle": "Aus einem Stadtmagazin",
        "titel": "Text 5",
        "zeilen": [
         "Wer ein Video schneiden, eine Wanderung mit einem GPS-Gerät planen oder einfach einmal eine Virtual-Reality-Brille ausprobieren möchte, muss dafür nicht gleich Geld ausgeben. Die Stadtbücherei Heidenau verleiht seit dem Sommer neben Büchern und Filmen auch Technik: Laptops, Kameras, Messgeräte für den Stromverbrauch und sogar einen kleinen 3D-Drucker.",
         "Ausleihen kann jeder, der einen Bibliotheksausweis besitzt, in der Regel für zwei Wochen. Für teurere Geräte wird eine Kaution verlangt. Das Angebot ist so beliebt, dass es für manche Geräte Wartelisten gibt. Die Bücherei bietet außerdem einmal im Monat einen Einführungskurs an. Die Öffnungszeiten bleiben trotz des neuen Angebots unverändert, und mehr Personal gibt es bisher auch nicht."
        ]
       },
       "stelle": "verleiht seit dem Sommer neben Büchern und Filmen auch Technik",
       "erklaerung": "Die Bücherei verleiht jetzt Geräte. Die Öffnungszeiten ändern sich ausdrücklich nicht."
      }
     ]
    }
   ]
  },
  {
   "nr": 2,
   "art": "textwahl",
   "name": "Leseverstehen: Sachtext",
   "kurz": "Ein populärwissenschaftlicher Text, fünf Fragen a/b/c",
   "was": "Du liest einen längeren Sachtext, zum Beispiel über Forschung oder Gesellschaft. Fünf Fragen mit je drei Antworten, in der Reihenfolge des Textes.",
   "tipp": "Achte darauf, wer etwas sagt: die Autorin, eine Studie oder Kritiker. Und ob etwas bewiesen ist oder nur vermutet wird.",
   "zeichen": "🔬",
   "farbe": "gold",
   "punkte": 5,
   "runden": [
    {
     "id": "b2t2s1",
     "text": {
      "sorte": "zeitung",
      "quelle": "Wissen kompakt",
      "titel": "Eulen, Lerchen und der falsche Wecker",
      "zeilen": [
       "Wenn um halb sieben der Wecker klingelt, springen manche Menschen gut gelaunt aus dem Bett, während andere sich wie gerädert fühlen. Lange galt das als Frage der Disziplin: Wer morgens nicht in Schwung kommt, gehe eben zu spät schlafen. Die Schlafforschung zeichnet inzwischen ein anderes Bild. Ob jemand eher ein Frühaufsteher oder ein Nachtmensch ist, hängt zu einem großen Teil von der inneren Uhr ab – und die lässt sich nur begrenzt umstellen.",
       "„Wir sprechen von Chronotypen“, erklärt Lukas Behrendt, der das Schlaflabor der Universität Tannberg leitet. Die sogenannten Lerchen werden früh müde und früh wach, die Eulen erreichen ihre beste Form erst am späten Nachmittag oder Abend. Die meisten Menschen liegen irgendwo dazwischen. Etwa die Hälfte der Unterschiede sei erblich bedingt, schätzt Behrendt, der Rest hänge vom Alter und vom Licht ab, dem man tagsüber ausgesetzt ist.",
       "Besonders deutlich zeigt sich der Einfluss des Alters bei Jugendlichen. In der Pubertät verschiebt sich die innere Uhr um bis zu zwei Stunden nach hinten. Ein Fünfzehnjähriger, der um 23 Uhr noch hellwach ist, ist also nicht unbedingt faul oder undiszipliniert. Erst ab etwa zwanzig Jahren wird der Rhythmus allmählich wieder früher – bei Frauen übrigens ein bis zwei Jahre eher als bei Männern.",
       "Für die Schule hat das Folgen. Behrendts Team begleitete zwei Jahre lang ein Gymnasium in Kirchheide, das den Unterrichtsbeginn für die Oberstufe probeweise von 7.45 Uhr auf 8.45 Uhr verlegt hatte. Die Schüler schliefen danach im Durchschnitt 40 Minuten länger, und zwar nicht, weil sie später ins Bett gingen, sondern weil sie morgens länger liegen bleiben konnten. In Mathematik und Deutsch verbesserten sich die Noten leicht. Deutlicher war ein anderer Effekt: Die Jugendlichen gaben an, sich im Unterricht besser konzentrieren zu können, und fehlten seltener.",
       "Ganz unumstritten ist das Modell nicht. Eltern berufstätiger Familien klagten, dass sich der Tagesablauf verschiebe, und Sportvereine fürchteten, dass das Training am Nachmittag später beginnen müsse. Die Schule hat deshalb einen Kompromiss gefunden: Wer möchte, kann um 7.45 Uhr an einer freiwilligen Lernzeit teilnehmen. Genutzt wird das Angebot nach Angaben der Schulleitung allerdings vor allem von jüngeren Schülern, deren Eltern früh zur Arbeit müssen.",
       "Auch Erwachsene leiden unter einem Rhythmus, der nicht zu ihnen passt. Forscher sprechen von „sozialem Jetlag“, wenn jemand unter der Woche deutlich früher aufstehen muss, als es seiner inneren Uhr entspricht, und am Wochenende den Schlaf nachholt. Studien bringen dieses ständige Hin und Her mit Übergewicht und schlechter Stimmung in Verbindung. Ob es diese Probleme tatsächlich verursacht, ist allerdings noch nicht eindeutig geklärt.",
       "Was kann man selbst tun? Behrendt rät vor allem zu Tageslicht am Morgen, etwa durch einen kurzen Spaziergang vor der Arbeit. Abends dagegen sollte man helles Licht von Bildschirmen möglichst vermeiden. Aus einer Eule werde so zwar keine Lerche, sagt der Forscher, aber die innere Uhr lasse sich um eine halbe bis eine Stunde verschieben. Wichtiger als jeder Trick sei ohnehin, dass Arbeitgeber und Schulen flexiblere Zeiten ermöglichen."
      ]
     },
     "aufgaben": [
      {
       "frage": "Wovon hängt es laut Behrendt ab, ob jemand Frühaufsteher oder Nachtmensch ist?",
       "opt": [
        "Vor allem von Disziplin und Schlafgewohnheiten.",
        "Etwa zur Hälfte von den Genen, außerdem von Alter und Licht.",
        "Fast ausschließlich davon, wie viel Tageslicht man bekommt."
       ],
       "loesung": 1,
       "stelle": "Etwa die Hälfte der Unterschiede sei erblich bedingt",
       "erklaerung": "Die Disziplin-Erklärung gilt als überholt; Licht ist nur ein Faktor neben Erbe und Alter."
      },
      {
       "frage": "Was erfährt man über Jugendliche?",
       "opt": [
        "Ihre innere Uhr verschiebt sich in der Pubertät nach hinten.",
        "Sie bleiben abends wach, weil sie zu wenig Disziplin haben.",
        "Bei Männern wird der Rhythmus früher wieder normal als bei Frauen."
       ],
       "loesung": 0,
       "stelle": "verschiebt sich die innere Uhr um bis zu zwei Stunden nach hinten",
       "erklaerung": "Spätes Wachsein ist biologisch; bei Frauen, nicht bei Männern, wird der Rhythmus eher wieder früher."
      },
      {
       "frage": "Was war das deutlichste Ergebnis am Gymnasium in Kirchheide?",
       "opt": [
        "Die Schüler gingen abends später ins Bett.",
        "Die Noten in Mathematik und Deutsch wurden viel besser.",
        "Die Schüler konnten sich besser konzentrieren und fehlten weniger."
       ],
       "loesung": 2,
       "stelle": "Deutlicher war ein anderer Effekt",
       "erklaerung": "Die Noten verbesserten sich nur leicht; ins Bett gingen die Schüler ausdrücklich nicht später."
      },
      {
       "frage": "Wer nutzt die freiwillige Lernzeit am frühen Morgen vor allem?",
       "opt": [
        "Oberstufenschüler, die nachmittags im Verein trainieren.",
        "Schüler, deren Eltern das neue Modell kritisiert haben.",
        "Jüngere Schüler, deren Eltern früh zur Arbeit gehen."
       ],
       "loesung": 2,
       "stelle": "vor allem von jüngeren Schülern, deren Eltern früh zur Arbeit müssen",
       "erklaerung": "Die Lernzeit wird vor allem von Jüngeren genutzt; Kritik von Eltern und Vereinen war nur der Anlass."
      },
      {
       "frage": "Was sagt Behrendt über Tageslicht und Bildschirmlicht?",
       "opt": [
        "Damit kann man aus einem Nachtmenschen einen Frühaufsteher machen.",
        "Damit lässt sich die innere Uhr ein wenig verschieben.",
        "Das ist wichtiger als flexible Arbeits- und Schulzeiten."
       ],
       "loesung": 1,
       "stelle": "die innere Uhr lasse sich um eine halbe bis eine Stunde verschieben",
       "erklaerung": "Aus einer Eule wird keine Lerche; flexible Zeiten hält Behrendt sogar für wichtiger als jeden Trick."
      }
     ]
    },
    {
     "id": "b2t2s2",
     "text": {
      "sorte": "zeitung",
      "quelle": "Natur & Forschung",
      "titel": "Warum die Stadt nachts nicht abkühlt",
      "zeilen": [
       "An einem heißen Julitag ist es in der Innenstadt von Wellstadt um 22 Uhr noch 28 Grad warm. Nur zwölf Kilometer entfernt, auf den Feldern am Stadtrand, zeigt das Thermometer zur selben Zeit bereits 19 Grad. Dieser Unterschied ist kein Zufall, sondern typisch für das, was Fachleute als städtische Wärmeinsel bezeichnen. Wer in der Innenstadt wohnt, schläft in solchen Nächten entsprechend schlecht.",
       "Die Ursachen sind seit Langem bekannt. Asphalt, Beton und Ziegel speichern tagsüber die Sonnenwärme und geben sie nachts nur langsam wieder ab. Hinzu kommen die Abwärme von Autos, Klimaanlagen und Industrie sowie dicht stehende Gebäude, zwischen denen kaum Wind weht. Überraschend für viele ist allerdings, dass der Effekt nachts deutlich stärker ausfällt als am Tag.",
       "„Gefährlich ist weniger die Hitze am Nachmittag als die fehlende Abkühlung in der Nacht“, sagt die Klimaforscherin Amara Okafor vom Institut für Stadtökologie in Wellstadt. Wenn die Temperatur auch nachts über 20 Grad bleibt, kann sich der Körper nicht erholen. Besonders betroffen sind ältere Menschen, Kleinkinder und Menschen mit Herz-Kreislauf-Erkrankungen. In Hitzesommern steigt die Zahl der Todesfälle in Großstädten messbar an.",
       "Um herauszufinden, wo genau es in der Stadt am heißesten ist, hat Okafors Team einen ungewöhnlichen Weg gewählt. Statt nur auf die wenigen festen Wetterstationen zu setzen, statteten die Forscher im vergangenen Sommer rund 120 Freiwillige mit kleinen Messgeräten am Fahrradlenker aus. Die Radfahrer fuhren ihre gewohnten Wege, während die Geräte jede Minute Temperatur und Luftfeuchtigkeit aufzeichneten.",
       "Das Ergebnis ist eine detaillierte Hitzekarte, die zum Teil überraschende Unterschiede zeigt. So war es in einem Neubaugebiet mit hellen Fassaden, aber ohne Bäume, nachts kaum kühler als in der Altstadt. Ein älteres Wohnviertel mit großen Innenhöfen und altem Baumbestand lag dagegen um bis zu vier Grad unter dem Durchschnitt. „Helle Farben helfen zwar ein wenig, aber gegen Schatten und verdunstendes Wasser kommen sie nicht an“, erklärt Okafor.",
       "Auch innerhalb einzelner Straßen gab es Unterschiede. Auf der Sonnenseite einer breiten Einkaufsstraße war es am frühen Abend bis zu zwei Grad wärmer als auf der schattigen Seite gegenüber. Wasserflächen wie der Stadtsee oder der kleine Fluss am Rand der Altstadt wirkten dagegen nur auf wenige hundert Meter kühlend – weniger, als die Forscher erwartet hatten.",
       "Die Stadtverwaltung will die Karte nun nutzen, um gezielt gegenzusteuern. Geplant sind zusätzliche Bäume in den heißesten Straßen, begrünte Dächer auf öffentlichen Gebäuden und mehr Trinkbrunnen. Schwieriger ist es, sogenannte Frischluftschneisen freizuhalten – unbebaute Flächen, über die nachts kühle Luft vom Umland in die Stadt strömt. Denn gerade dort möchten viele Investoren neue Wohnungen bauen, die in Wellstadt dringend gebraucht werden.",
       "Okafor sieht in diesem Konflikt eine der großen Aufgaben der kommenden Jahre. Bauen und Kühlen schlössen sich nicht grundsätzlich aus, meint sie. Man müsse aber früher planen und Grünflächen nicht als Luxus, sondern als Teil der Gesundheitsvorsorge betrachten. Die Messfahrten sollen im nächsten Sommer wiederholt werden, dann auch in zwei Nachbarstädten."
      ]
     },
     "aufgaben": [
      {
       "frage": "Was ist laut Text überraschend am Wärmeinsel-Effekt?",
       "opt": [
        "Er ist in der Nacht stärker als am Tag.",
        "Er wird vor allem durch Autos und Industrie verursacht.",
        "Seine Ursachen sind noch weitgehend unbekannt."
       ],
       "loesung": 0,
       "stelle": "dass der Effekt nachts deutlich stärker ausfällt als am Tag",
       "erklaerung": "Die Ursachen sind seit Langem bekannt; Autos und Industrie sind nur ein Faktor unter mehreren."
      },
      {
       "frage": "Warum ist die Hitze in der Stadt laut Okafor besonders gefährlich?",
       "opt": [
        "Weil die Temperatur am Nachmittag sehr hoch steigt.",
        "Weil sich vor allem junge Menschen zu wenig schützen.",
        "Weil sich der Körper in der Nacht nicht erholen kann."
       ],
       "loesung": 2,
       "stelle": "kann sich der Körper nicht erholen",
       "erklaerung": "„Weniger die Hitze am Nachmittag als …“: Entscheidend ist die fehlende Abkühlung nachts."
      },
      {
       "frage": "Wie wurden die Daten für die Hitzekarte gesammelt?",
       "opt": [
        "Mit zusätzlichen festen Wetterstationen in der ganzen Stadt.",
        "Mit Messgeräten an den Fahrrädern von Freiwilligen.",
        "Mit Radfahrern, die festgelegte Strecken abfahren mussten."
       ],
       "loesung": 1,
       "stelle": "rund 120 Freiwillige mit kleinen Messgeräten am Fahrradlenker",
       "erklaerung": "Die Freiwilligen fuhren ihre gewohnten Wege, keine festgelegten Strecken."
      },
      {
       "frage": "Was zeigt die Hitzekarte?",
       "opt": [
        "Bäume und Innenhöfe kühlen stärker als helle Fassaden.",
        "Neubaugebiete sind nachts deutlich kühler als die Altstadt.",
        "Helle Farben haben keinerlei Wirkung auf die Temperatur."
       ],
       "loesung": 0,
       "stelle": "gegen Schatten und verdunstendes Wasser kommen sie nicht an",
       "erklaerung": "Helle Farben helfen „ein wenig“, aber weniger als Bäume; das Neubaugebiet war kaum kühler."
      },
      {
       "frage": "Warum ist es schwierig, Frischluftschneisen freizuhalten?",
       "opt": [
        "Weil die Stadt dort neue Bäume pflanzen möchte.",
        "Weil kühle Luft nur selten vom Umland in die Stadt strömt.",
        "Weil man auf diesen Flächen Wohnungen bauen möchte."
       ],
       "loesung": 2,
       "stelle": "gerade dort möchten viele Investoren neue Wohnungen bauen",
       "erklaerung": "Der Konflikt besteht zwischen Kühlung und dringend gebrauchten Wohnungen."
      }
     ]
    },
    {
     "id": "b2t2s3",
     "text": {
      "sorte": "zeitung",
      "quelle": "Psychologie heute und morgen",
      "titel": "Lernen mit System – warum Vergessen dazugehört",
      "zeilen": [
       "Wer für eine Prüfung lernt, liest seine Notizen meist mehrmals durch, markiert Wichtiges mit Leuchtstift und fühlt sich am Ende gut vorbereitet. Doch dieses Gefühl täuscht häufig. Zahlreiche Untersuchungen zeigen, dass gerade die beliebtesten Lernmethoden zu den am wenigsten wirksamen gehören. Trotzdem verlassen sich viele Schüler und Studenten Jahr für Jahr auf dieselben Gewohnheiten.",
       "„Beim wiederholten Lesen wird der Text vertraut, und das verwechseln wir mit Wissen“, erklärt die Lernpsychologin Nadia Ferreira von der Universität Hohenbrück. Etwas wiederzuerkennen sei aber etwas anderes, als sich daran zu erinnern. In einer Prüfung müsse man Informationen aktiv aus dem Gedächtnis holen, und genau das werde beim bloßen Lesen kaum trainiert.",
       "Ferreira und ihr Team ließen 240 Studenten einen Sachtext über Vulkane lernen. Die eine Hälfte las den Text viermal, die andere las ihn nur einmal und schrieb danach dreimal aus dem Gedächtnis auf, woran sie sich erinnerte. Direkt nach der Lernphase schnitt die Lesegruppe etwas besser ab. Eine Woche später hatte sich das Bild jedoch umgekehrt: Die Gruppe, die sich selbst abgefragt hatte, wusste fast doppelt so viel.",
       "Die Forscherin erklärt das so: Jedes Mal, wenn wir uns mühsam an etwas erinnern, wird die Spur im Gedächtnis gefestigt. Gerade die Anstrengung sei also kein Zeichen dafür, dass man schlecht lerne, sondern eher das Gegenteil. Viele Lernende brechen das Abfragen jedoch ab, weil es sich unangenehm anfühlt und sie den Eindruck haben, zu wenig zu wissen.",
       "Ein zweiter wichtiger Faktor ist die Verteilung der Lernzeit. Wer drei Stunden am Stück lernt, behält weniger als jemand, der dieselbe Zeit auf mehrere Tage verteilt. Zwischen den Wiederholungen darf ruhig etwas vergessen werden – das Auffrischen wirkt dann umso stärker. Ferreira empfiehlt, einen neuen Stoff zuerst nach einem Tag, dann nach drei Tagen und schließlich nach einer Woche zu wiederholen.",
       "Besonders wirksam ist es nach Ferreiras Erfahrung außerdem, verschiedene Themen abwechselnd zu üben, statt einen Aufgabentyp nach dem anderen abzuarbeiten. Wer im Mathematikunterricht Aufgaben zu Brüchen, Prozenten und Gleichungen mischt, macht anfangs mehr Fehler. Langfristig lernt er aber besser zu erkennen, welcher Lösungsweg zu welcher Aufgabe passt – eine Fähigkeit, die in Prüfungen entscheidend ist.",
       "Und wie steht es mit dem Lernen im Schlaf? Hier muss Ferreira enttäuschen. Neue Vokabeln über Kopfhörer im Schlaf aufzunehmen, funktioniere nach heutigem Wissen nicht. Der Schlaf selbst sei aber durchaus wichtig: In der Nacht ordnet das Gehirn die Eindrücke des Tages und speichert sie dauerhaft. Wer vor einer Prüfung die Nacht durcharbeitet, schadet sich deshalb eher, als dass er profitiert.",
       "An einigen Schulen in der Region werden die Erkenntnisse bereits umgesetzt. Statt nur am Ende einer Einheit einen großen Test zu schreiben, beginnen Lehrer jede Stunde mit drei kurzen Fragen zum Stoff der Vorwoche. Noten gibt es dafür nicht. Die Schüler fanden das zunächst lästig, inzwischen schätzen viele aber, dass sie vor Klassenarbeiten weniger nachholen müssen."
      ]
     },
     "aufgaben": [
      {
       "frage": "Warum führt wiederholtes Lesen laut Ferreira oft zu falscher Sicherheit?",
       "opt": [
        "Weil man beim Lesen zu viel markiert.",
        "Weil man den Text schon beim Lesen wieder vergisst.",
        "Weil man Vertrautheit mit Wissen verwechselt."
       ],
       "loesung": 2,
       "stelle": "das verwechseln wir mit Wissen",
       "erklaerung": "Ein bekannter Text wirkt wie gelerntes Wissen; Markieren wird nur als typische Methode genannt."
      },
      {
       "frage": "Was zeigte die Studie mit dem Text über Vulkane?",
       "opt": [
        "Die Lesegruppe war direkt danach und nach einer Woche besser.",
        "Nach einer Woche wusste die Gruppe, die sich selbst abgefragt hatte, mehr.",
        "Direkt nach dem Lernen gab es keine Unterschiede zwischen den Gruppen."
       ],
       "loesung": 1,
       "stelle": "Die Gruppe, die sich selbst abgefragt hatte, wusste fast doppelt so viel.",
       "erklaerung": "Zuerst lag die Lesegruppe leicht vorn, nach einer Woche hatte sich das Bild umgekehrt."
      },
      {
       "frage": "Wie bewertet Ferreira die Anstrengung beim Erinnern?",
       "opt": [
        "Sie ist eher ein Zeichen für wirksames Lernen.",
        "Sie zeigt, dass man noch zu wenig weiß.",
        "Man sollte sie vermeiden, weil sie unangenehm ist."
       ],
       "loesung": 0,
       "stelle": "Gerade die Anstrengung sei also kein Zeichen dafür",
       "erklaerung": "Anstrengung festigt die Gedächtnisspur; das Gefühl, zu wenig zu wissen, ist nur der Eindruck vieler Lernender."
      },
      {
       "frage": "Was rät Ferreira zur Verteilung der Lernzeit?",
       "opt": [
        "Man sollte lange am Stück lernen, damit nichts vergessen wird.",
        "Man sollte den Stoff in immer größeren Abständen wiederholen.",
        "Man sollte jeden Tag drei Stunden wiederholen."
       ],
       "loesung": 1,
       "stelle": "zuerst nach einem Tag, dann nach drei Tagen",
       "erklaerung": "Ein Tag, drei Tage, eine Woche: Die Abstände werden größer; Lernen am Stück ist weniger wirksam."
      },
      {
       "frage": "Was sagt der Text über Schlaf und Lernen?",
       "opt": [
        "Im Schlaf werden die Eindrücke des Tages dauerhaft gespeichert.",
        "Mit Kopfhörern kann man im Schlaf neue Vokabeln lernen.",
        "Vor einer Prüfung sollte man lieber durcharbeiten als schlafen."
       ],
       "loesung": 0,
       "stelle": "In der Nacht ordnet das Gehirn die Eindrücke des Tages",
       "erklaerung": "Lernen über Kopfhörer funktioniert nicht, Durcharbeiten schadet eher."
      }
     ]
    }
   ]
  },
  {
   "nr": 3,
   "art": "anzeigenX",
   "name": "Leseverstehen: Situationen",
   "kurz": "Zehn Situationen, zwölf Texte — manchmal passt keiner",
   "was": "Du liest zehn Situationen und zwölf kurze Texte. Jeder Text passt höchstens einmal. Nicht für jede Situation gibt es einen Text — dann wählst du x.",
   "tipp": "Prüf jede Bedingung der Situation einzeln. Wenn nur eine nicht erfüllt ist, passt der Text nicht.",
   "zeichen": "🔍",
   "farbe": "rot",
   "punkte": 10,
   "runden": [
    {
     "id": "b2t3s1",
     "anzeigen": [
      {
       "b": "a",
       "quelle": "Akademie Weitblick",
       "zeilen": [
        "Berufsbegleitender Lehrgang Projektmanagement",
        "Freitagabend und Samstag, Dauer sechs Monate",
        "Abschluss mit anerkanntem Zertifikat",
        "Teilfinanzierung über Bildungsprämie möglich"
       ]
      },
      {
       "b": "b",
       "quelle": "Coaching-Praxis Lindner",
       "zeilen": [
        "Karrierecoaching für neue Führungskräfte",
        "Schwerpunkt: Konflikte im Team konstruktiv lösen",
        "Einzelsitzungen in der Praxis oder per Video",
        "Erstgespräch unverbindlich und kostenlos"
       ]
      },
      {
       "b": "c",
       "quelle": "Volkshochschule Westend",
       "zeilen": [
        "Präsentieren ohne Lampenfieber",
        "Wochenendseminar, Sa und So 10–17 Uhr",
        "Mit Videoanalyse Ihrer Probevorträge",
        "145 Euro"
       ]
      },
      {
       "b": "d",
       "quelle": "Bildungszentrum Rheinau",
       "zeilen": [
        "Umschulung zur Pflegefachkraft",
        "Vollzeit, Dauer drei Jahre",
        "Förderung durch die Agentur für Arbeit möglich",
        "Voraussetzung: mittlerer Schulabschluss"
       ]
      },
      {
       "b": "e",
       "quelle": "Hochschule Talbach",
       "zeilen": [
        "Bachelor Betriebswirtschaft im Fernstudium",
        "Präsenztage nur viermal im Jahr",
        "Zulassung auch ohne Abitur bei mehrjähriger Berufserfahrung",
        "Bewerbung bis 15. Juli"
       ]
      },
      {
       "b": "f",
       "quelle": "Sprachinstitut Brücke",
       "zeilen": [
        "Deutsch für den Beruf, Niveau C1",
        "Schwerpunkte: Telefonate, E-Mails, Besprechungen",
        "Abends, zweimal pro Woche",
        "Einstufungstest vorab verpflichtend"
       ]
      },
      {
       "b": "g",
       "quelle": "Gründerbüro der Stadt Feldhausen",
       "zeilen": [
        "Sie planen, sich selbstständig zu machen?",
        "Wir prüfen Ihren Businessplan und informieren über Fördermittel und Zuschüsse",
        "Beratung kostenlos, Termine nur nach Vereinbarung"
       ]
      },
      {
       "b": "h",
       "quelle": "Infostelle Migration und Arbeit",
       "zeilen": [
        "Anerkennung ausländischer Berufsabschlüsse",
        "Wir klären, ob Ihr Abschluss gleichwertig ist und welche Stelle zuständig ist",
        "Beratung auf Deutsch, Englisch und Arabisch"
       ]
      },
      {
       "b": "i",
       "quelle": "Messegesellschaft Nordtal",
       "zeilen": [
        "Jobmesse „Zukunft Technik\"",
        "Samstag, 14. März, Stadthalle",
        "Über 60 Unternehmen aus Industrie und IT stellen sich vor",
        "Persönliche Gespräche mit Personalverantwortlichen, Eintritt frei"
       ]
      },
      {
       "b": "j",
       "quelle": "Datenwerk Seminare",
       "zeilen": [
        "Excel für Fortgeschrittene: Pivot-Tabellen und Makros",
        "Online-Live-Kurs an drei Vormittagen",
        "Nur für Teilnehmer mit soliden Grundkenntnissen"
       ]
      },
      {
       "b": "k",
       "quelle": "Karriereforum Ost",
       "zeilen": [
        "Gehaltsverhandlung: So überzeugen Sie Ihren Chef",
        "Abendworkshop, Dienstag 18–21 Uhr",
        "Mit Rollenspielen und individuellem Feedback",
        "65 Euro"
       ]
      },
      {
       "b": "l",
       "quelle": "Textbüro Feder",
       "zeilen": [
        "Lebenslauf-Check per E-Mail",
        "Wir überarbeiten Ihre Bewerbungsunterlagen innerhalb von 48 Stunden",
        "Nur deutschsprachige Unterlagen",
        "49 Euro"
       ]
      }
     ],
     "aufgaben": [
      {
       "situation": "Sie arbeiten Vollzeit als Bürokaufmann und möchten neben dem Beruf einen Bachelor machen. Abitur haben Sie nicht, aber zehn Jahre Berufserfahrung.",
       "loesung": "e",
       "erklaerung": "Das Fernstudium lässt Bewerber ohne Abitur bei Berufserfahrung zu. Lehrgang a ist kein Studium."
      },
      {
       "situation": "Sie haben in Ihrem Heimatland als Ingenieurin gearbeitet und wissen nicht, ob Ihr Diplom in Deutschland anerkannt wird.",
       "loesung": "h",
       "erklaerung": "Die Infostelle prüft, ob ausländische Abschlüsse gleichwertig sind."
      },
      {
       "situation": "In Ihrer neuen Stelle müssen Sie oft vor Kunden sprechen und werden dabei sehr nervös. Zeit für einen Kurs haben Sie nur am Wochenende.",
       "loesung": "c",
       "erklaerung": "Das Seminar gegen Lampenfieber findet am Wochenende statt."
      },
      {
       "situation": "Sie verhandeln häufig mit internationalen Kunden und möchten Ihr Englisch für solche Gespräche verbessern.",
       "loesung": "x",
       "erklaerung": "Kurs f trainiert Besprechungen, aber auf Deutsch. Einen Englischkurs bietet keine Anzeige an."
      },
      {
       "situation": "Sie wurden gerade zur Teamleiterin befördert, im Team gibt es Spannungen. Sie wünschen sich persönliche Begleitung, wohnen aber weit entfernt von jeder größeren Stadt.",
       "loesung": "b",
       "erklaerung": "Das Coaching richtet sich an neue Führungskräfte und ist auch per Video möglich."
      },
      {
       "situation": "Sie wollen Ihren Vorgesetzten demnächst um mehr Geld bitten und das Gespräch vorher üben. Unter der Woche haben Sie abends Zeit.",
       "loesung": "k",
       "erklaerung": "Der Abendworkshop zur Gehaltsverhandlung arbeitet mit Rollenspielen."
      },
      {
       "situation": "Sie haben gerade Ihr Informatikstudium abgeschlossen und möchten mit möglichst vielen Arbeitgebern direkt ins Gespräch kommen.",
       "loesung": "i",
       "erklaerung": "Auf der Jobmesse stellen sich über 60 Firmen aus IT und Industrie vor."
      },
      {
       "situation": "Sie sollen im Büro künftig mit Tabellen arbeiten, haben Excel aber noch nie benutzt. Sie suchen einen Einsteigerkurs.",
       "loesung": "x",
       "erklaerung": "Kurs j ist ausdrücklich nur für Fortgeschrittene. Ein Anfängerkurs wird nicht angeboten."
      },
      {
       "situation": "Sie möchten ein eigenes Café eröffnen und wissen nicht, ob es dafür finanzielle Unterstützung gibt.",
       "loesung": "g",
       "erklaerung": "Das Gründerbüro informiert über Fördermittel für die Selbstständigkeit."
      },
      {
       "situation": "Ihre deutschen Bewerbungsunterlagen sind fertig, aber Sie zweifeln, ob sie überzeugen. Die Bewerbungsfrist endet in drei Tagen.",
       "loesung": "l",
       "erklaerung": "Das Textbüro überarbeitet deutschsprachige Unterlagen innerhalb von 48 Stunden."
      }
     ]
    },
    {
     "id": "b2t3s2",
     "anzeigen": [
      {
       "b": "a",
       "quelle": "Umzüge Kranich",
       "zeilen": [
        "Komplettumzüge im Stadtgebiet und bundesweit",
        "Inklusive Ab- und Aufbau Ihrer Möbel",
        "Kostenlose Besichtigung vor Ort",
        "Verpackungsmaterial auf Wunsch"
       ]
      },
      {
       "b": "b",
       "quelle": "Möbeltaxi Schmidt",
       "zeilen": [
        "Transport einzelner Möbelstücke innerhalb der Stadt",
        "Kein Abbau, keine Montage",
        "Ab 39 Euro pro Fahrt"
       ]
      },
      {
       "b": "c",
       "quelle": "Mieterverein Altstadt",
       "zeilen": [
        "Rechtsberatung bei Nebenkostenabrechnung, Mieterhöhung und Kündigung",
        "Nur für Mitglieder, Beitritt jederzeit möglich",
        "Jahresbeitrag 72 Euro"
       ]
      },
      {
       "b": "d",
       "quelle": "Schlüsseldienst Tag und Nacht",
       "zeilen": [
        "Ausgesperrt? Türöffnung innerhalb von 30 Minuten",
        "Festpreis 89 Euro",
        "Nachts und am Wochenende 129 Euro"
       ]
      },
      {
       "b": "e",
       "quelle": "Handwerkerservice Allzeit",
       "zeilen": [
        "Kleinreparaturen in Haus und Wohnung",
        "Tropfende Wasserhähne, klemmende Türen, Lampen montieren",
        "Termine werktags innerhalb von drei Tagen",
        "Keine Arbeiten an Gas- und Heizungsanlagen"
       ]
      },
      {
       "b": "f",
       "quelle": "Klimabüro Nordkreis",
       "zeilen": [
        "Energieberatung im Haushalt",
        "Wir messen Ihren Stromverbrauch und zeigen Sparmöglichkeiten",
        "Hausbesuch für Mieter und Eigentümer",
        "Eigenanteil 30 Euro"
       ]
      },
      {
       "b": "g",
       "quelle": "Wohnbau Talstadt",
       "zeilen": [
        "Wohnung zu groß, zu klein, zu teuer?",
        "Tauschen Sie Ihre Wohnung innerhalb unseres Bestands",
        "Ohne Maklergebühr",
        "Nur für Mieter der Wohnbau Talstadt"
       ]
      },
      {
       "b": "h",
       "quelle": "Reinigungsservice Glanzpunkt",
       "zeilen": [
        "Endreinigung beim Auszug mit Abnahmegarantie",
        "Auch Fenster, Keller und Balkon",
        "Angebot nach Besichtigung"
       ]
      },
      {
       "b": "i",
       "quelle": "Hausmeisterdienst Becker",
       "zeilen": [
        "Winterdienst und Gartenpflege für Wohnanlagen",
        "Verträge ausschließlich mit Hausverwaltungen und Eigentümergemeinschaften"
       ]
      },
      {
       "b": "j",
       "quelle": "Lagerhaus am Hafen",
       "zeilen": [
        "Lagerboxen von 2 bis 20 m²",
        "Sicher, trocken, videoüberwacht",
        "Mindestmietdauer ein Monat",
        "Zugang täglich 6–22 Uhr"
       ]
      },
      {
       "b": "k",
       "quelle": "Malerbetrieb Farbton",
       "zeilen": [
        "Schönheitsreparaturen vor dem Auszug",
        "Wände und Decken streichen zum Festpreis",
        "Ausführung innerhalb von zwei Wochen"
       ]
      },
      {
       "b": "l",
       "quelle": "Nachbarschaftshilfe Weststadt",
       "zeilen": [
        "Ehrenamtliche begleiten ältere Menschen zu Behörden",
        "Hilfe beim Ausfüllen von Anträgen und Formularen",
        "Kostenlos, Spenden willkommen"
       ]
      }
     ],
     "aufgaben": [
      {
       "situation": "Sie ziehen von Hamburg nach München und möchten, dass sich jemand um alles kümmert, auch um den Abbau Ihres großen Kleiderschranks.",
       "loesung": "a",
       "erklaerung": "Die Umzugsfirma macht Komplettumzüge bundesweit, inklusive Ab- und Aufbau."
      },
      {
       "situation": "Sie haben auf dem Flohmarkt ein Sofa gekauft und brauchen jemanden, der es Ihnen in die Wohnung bringt.",
       "loesung": "b",
       "erklaerung": "Das Möbeltaxi transportiert einzelne Möbelstücke. Montage ist bei einem Sofa nicht nötig."
      },
      {
       "situation": "Ihr Vermieter verlangt eine hohe Nachzahlung für die Heizkosten, die Ihnen falsch vorkommt. Sie möchten sich rechtlich beraten lassen.",
       "loesung": "c",
       "erklaerung": "Der Mieterverein berät bei Nebenkostenabrechnungen. Man kann jederzeit Mitglied werden."
      },
      {
       "situation": "Ihre Gasheizung funktioniert seit gestern nicht mehr, und Sie brauchen dringend einen Fachmann.",
       "loesung": "x",
       "erklaerung": "Der Handwerkerservice schließt Gas- und Heizungsanlagen ausdrücklich aus. Sonst bietet niemand das an."
      },
      {
       "situation": "Ihre Stromrechnung ist stark gestiegen. Sie möchten wissen, wo in Ihrer Mietwohnung Energie verschwendet wird.",
       "loesung": "f",
       "erklaerung": "Die Energieberatung kommt auch zu Mietern nach Hause und zeigt Sparmöglichkeiten."
      },
      {
       "situation": "Sie ziehen aus. Laut Mietvertrag müssen die Wände frisch gestrichen werden, aber Sie haben selbst keine Zeit dafür.",
       "loesung": "k",
       "erklaerung": "Der Malerbetrieb übernimmt Schönheitsreparaturen vor dem Auszug. Glanzpunkt reinigt nur."
      },
      {
       "situation": "Sie wohnen bei der Genossenschaft Heimbau. Seit die Kinder ausgezogen sind, ist Ihre Wohnung viel zu groß, und Sie möchten tauschen.",
       "loesung": "x",
       "erklaerung": "Die Tauschbörse g gilt nur für Mieter der Wohnbau Talstadt, nicht für Heimbau."
      },
      {
       "situation": "Sie gehen für ein halbes Jahr ins Ausland, geben Ihre Wohnung auf und wissen nicht, wohin mit Ihren Möbeln.",
       "loesung": "j",
       "erklaerung": "Im Lagerhaus kann man Boxen ab einem Monat mieten, also auch für sechs Monate."
      },
      {
       "situation": "In Ihrer Küche tropft seit Tagen der Wasserhahn. Der Hausmeister reagiert nicht, und Sie möchten das selbst beauftragen.",
       "loesung": "e",
       "erklaerung": "Der Handwerkerservice repariert genau solche Kleinigkeiten wie tropfende Wasserhähne."
      },
      {
       "situation": "Ihre 80-jährige Nachbarin muss einen Antrag beim Sozialamt stellen und ist mit dem Formular überfordert.",
       "loesung": "l",
       "erklaerung": "Die Nachbarschaftshilfe unterstützt ältere Menschen kostenlos bei Anträgen."
      }
     ]
    }
   ]
  },
  {
   "nr": 4,
   "art": "textwahl",
   "name": "Sprachbausteine: Grammatik",
   "kurz": "Eine E-Mail, zehn Lücken a/b/c",
   "was": "Eine E-Mail mit zehn Lücken. Für jede Lücke gibt es drei Möglichkeiten, nur eine ist grammatisch richtig.",
   "tipp": "Lies den Satz bis zum Ende: Zweiteilige Konnektoren und Präpositionen mit Genitiv verraten sich oft erst durch das Wort danach.",
   "zeichen": "🧩",
   "farbe": "lila",
   "punkte": 10,
   "runden": [
    {
     "id": "b2sb1s1",
     "text": {
      "sorte": "email",
      "quelle": "E-Mail",
      "titel": "Nachfrage zu meiner Bewerbung",
      "zeilen": [
       "Sehr geehrte Frau Lindqvist,",
       "vor drei Wochen habe ich mich bei Ihnen um die im Februar __(1)__ Stelle als Projektkoordinatorin beworben. Da ich bisher keine Rückmeldung erhalten habe, möchte ich mich höflich erkundigen, __(2)__ meine Unterlagen vollständig bei Ihnen angekommen sind. __(3)__ der großen Zahl an Bewerbungen kann ich mir gut vorstellen, dass die Auswahl einige Zeit in Anspruch nimmt.",
       "Die Stelle interessiert mich nach wie vor sehr, denn sie verbindet __(4)__ organisatorische Aufgaben als auch den Kontakt zu internationalen Partnern. In meiner jetzigen Firma betreue ich seit zwei Jahren ein Team, __(5)__ Mitglieder in vier verschiedenen Ländern arbeiten. Außerdem habe ich drei Jahre in Warschau gelebt und spreche fließend Polnisch, __(6)__ ich in meinem Anschreiben leider nur kurz hingewiesen habe. Rückblickend __(7)__ ich diesen Punkt ausführlicher beschreiben sollen, weil er für Ihre Kunden in Osteuropa sicher eine Rolle spielt.",
       "Ich wäre Ihnen sehr dankbar, wenn Sie mir mitteilen könnten, bis wann über die Besetzung der Stelle entschieden __(8)__ soll. Für ein persönliches Gespräch stehe ich Ihnen __(9)__ der nächsten zwei Wochen jederzeit zur Verfügung, gern auch per Video. Sollten noch Dokumente fehlen, schicke ich sie Ihnen selbstverständlich umgehend zu.",
       "Ich freue mich __(10)__, von Ihnen zu hören.",
       "Mit freundlichen Grüßen",
       "Mira Sobczak"
      ]
     },
     "aufgaben": [
      {
       "frage": "Was passt in Lücke 1?",
       "luecke": 1,
       "opt": [
        "ausgeschriebene",
        "ausgeschriebenen",
        "ausschreibende"
       ],
       "loesung": 0,
       "fest": true,
       "erklaerung": "Partizip II als Adjektiv („die Stelle wurde ausgeschrieben\"); nach „die\" im Akkusativ Singular feminin: Endung -e."
      },
      {
       "frage": "Was passt in Lücke 2?",
       "luecke": 2,
       "opt": [
        "ob",
        "dass",
        "wenn"
       ],
       "loesung": 0,
       "fest": true,
       "erklaerung": "„sich erkundigen\" leitet eine indirekte Ja/Nein-Frage ein, also „ob\"."
      },
      {
       "frage": "Was passt in Lücke 3?",
       "luecke": 3,
       "opt": [
        "Aufgrund",
        "Obwohl",
        "Trotz"
       ],
       "loesung": 0,
       "fest": true,
       "erklaerung": "Grund mit Genitiv („der großen Zahl\"): „aufgrund\"; „obwohl\" ist eine Konjunktion, „trotz\" ergibt keinen Sinn."
      },
      {
       "frage": "Was passt in Lücke 4?",
       "luecke": 4,
       "opt": [
        "sowohl",
        "weder",
        "entweder"
       ],
       "loesung": 0,
       "fest": true,
       "erklaerung": "Zweiteiliger Konnektor: „sowohl … als auch\"; „weder\" braucht „noch\", „entweder\" braucht „oder\"."
      },
      {
       "frage": "Was passt in Lücke 5?",
       "luecke": 5,
       "opt": [
        "deren",
        "dessen",
        "denen"
       ],
       "loesung": 1,
       "fest": true,
       "erklaerung": "„das Team\" ist neutral; der Genitiv des Relativpronomens heißt dann „dessen\"."
      },
      {
       "frage": "Was passt in Lücke 6?",
       "luecke": 6,
       "opt": [
        "worauf",
        "darauf",
        "wofür"
       ],
       "loesung": 0,
       "fest": true,
       "erklaerung": "„auf etwas hinweisen\": Im Relativsatz steht das Fragewort-Pronominaladverb „worauf\"."
      },
      {
       "frage": "Was passt in Lücke 7?",
       "luecke": 7,
       "opt": [
        "hätte",
        "wäre",
        "sollte"
       ],
       "loesung": 0,
       "fest": true,
       "erklaerung": "Konjunktiv II der Vergangenheit mit Modalverb: „hätte … beschreiben sollen\"."
      },
      {
       "frage": "Was passt in Lücke 8?",
       "luecke": 8,
       "opt": [
        "werden",
        "wird",
        "worden"
       ],
       "loesung": 0,
       "fest": true,
       "erklaerung": "Passiv mit Modalverb: Partizip II + „werden\" im Infinitiv + „soll\"."
      },
      {
       "frage": "Was passt in Lücke 9?",
       "luecke": 9,
       "opt": [
        "innerhalb",
        "seit",
        "bis"
       ],
       "loesung": 0,
       "fest": true,
       "erklaerung": "Zeitraum mit Genitiv („der nächsten zwei Wochen\"): „innerhalb\"."
      },
      {
       "frage": "Was passt in Lücke 10?",
       "luecke": 10,
       "opt": [
        "darauf",
        "worauf",
        "davon"
       ],
       "loesung": 0,
       "fest": true,
       "erklaerung": "„sich freuen auf\" + Infinitivsatz: Das Pronominaladverb „darauf\" weist auf den Satz voraus."
      }
     ]
    },
    {
     "id": "b2sb1s2",
     "text": {
      "sorte": "email",
      "quelle": "E-Mail",
      "titel": "Reklamation: Kaffeevollautomat verliert Wasser",
      "zeilen": [
       "Sehr geehrte Damen und Herren,",
       "am 3. Oktober habe ich in Ihrem Onlineshop einen Kaffeevollautomaten bestellt, __(1)__ ich mich nach langem Vergleichen entschieden hatte. Meine Bestellnummer lautet 48-22917. Das Gerät wurde zwar pünktlich geliefert, __(2)__ schon beim ersten Einschalten zeigte sich ein Problem. Die Maschine verliert Wasser, und auf dem Display erscheint ständig eine Fehlermeldung, __(3)__ in der Bedienungsanleitung nicht erklärt wird.",
       "__(4)__ mehrerer Versuche ist es mir nicht gelungen, den Fehler selbst zu beheben. Ein Mitarbeiter Ihres Kundenservice sagte mir am Telefon, das Problem __(5)__ bei diesem Modell bereits bekannt. Ehrlich gesagt hätte ich von einem Gerät dieser Preisklasse deutlich mehr __(6)__.",
       "Ich bitte Sie daher, mir __(7)__ ein neues, einwandfreies Gerät zu schicken oder mir den vollen Kaufpreis zu erstatten. Das defekte Gerät kann ab sofort bei mir abgeholt __(8)__. Die Originalverpackung, __(9)__ ich es zurückschicken könnte, habe ich selbstverständlich aufbewahrt. Eine Kopie der Rechnung finden Sie im Anhang.",
       "Da ich täglich Kaffee trinke und zurzeit auf ein Leihgerät meiner Nachbarin angewiesen bin, gehe ich davon aus, dass Sie sich innerhalb einer Woche __(10)__ kümmern.",
       "Mit freundlichen Grüßen",
       "Tobias Wernicke"
      ]
     },
     "aufgaben": [
      {
       "frage": "Was passt in Lücke 1?",
       "luecke": 1,
       "opt": [
        "für den",
        "den",
        "für dessen"
       ],
       "loesung": 0,
       "fest": true,
       "erklaerung": "„sich für etwas entscheiden\": Die Präposition steht vor dem Relativpronomen, Akkusativ maskulin „für den\"."
      },
      {
       "frage": "Was passt in Lücke 2?",
       "luecke": 2,
       "opt": [
        "aber",
        "sondern",
        "denn"
       ],
       "loesung": 0,
       "fest": true,
       "erklaerung": "Feste Verbindung „zwar … aber\"; „sondern\" steht nur nach einer Verneinung."
      },
      {
       "frage": "Was passt in Lücke 3?",
       "luecke": 3,
       "opt": [
        "die",
        "der",
        "deren"
       ],
       "loesung": 0,
       "fest": true,
       "erklaerung": "Bezug auf „die Fehlermeldung\" (feminin), Subjekt im Passivsatz: Nominativ „die\"."
      },
      {
       "frage": "Was passt in Lücke 4?",
       "luecke": 4,
       "opt": [
        "Trotz",
        "Wegen",
        "Statt"
       ],
       "loesung": 0,
       "fest": true,
       "erklaerung": "Gegensatz mit Genitiv: Obwohl er es mehrmals versucht hat, klappt es nicht – also „trotz\"."
      },
      {
       "frage": "Was passt in Lücke 5?",
       "luecke": 5,
       "opt": [
        "sei",
        "seien",
        "sein"
       ],
       "loesung": 0,
       "fest": true,
       "erklaerung": "Indirekte Rede, 3. Person Singular („das Problem\"): Konjunktiv I „sei\"."
      },
      {
       "frage": "Was passt in Lücke 6?",
       "luecke": 6,
       "opt": [
        "erwartet",
        "erwarten",
        "erwartete"
       ],
       "loesung": 0,
       "fest": true,
       "erklaerung": "Konjunktiv II der Vergangenheit: „hätte\" + Partizip II „erwartet\"."
      },
      {
       "frage": "Was passt in Lücke 7?",
       "luecke": 7,
       "opt": [
        "entweder",
        "weder",
        "sowohl"
       ],
       "loesung": 0,
       "fest": true,
       "erklaerung": "Zwei Alternativen mit „oder\": „entweder … oder\"."
      },
      {
       "frage": "Was passt in Lücke 8?",
       "luecke": 8,
       "opt": [
        "werden",
        "worden",
        "wird"
       ],
       "loesung": 0,
       "fest": true,
       "erklaerung": "Passiv mit Modalverb: „kann … abgeholt werden\"."
      },
      {
       "frage": "Was passt in Lücke 9?",
       "luecke": 9,
       "opt": [
        "in der",
        "in die",
        "in dem"
       ],
       "loesung": 0,
       "fest": true,
       "erklaerung": "Bezug auf „die Originalverpackung\" (feminin); „in etwas zurückschicken\" verlangt hier den Dativ: „in der\"."
      },
      {
       "frage": "Was passt in Lücke 10?",
       "luecke": 10,
       "opt": [
        "darum",
        "worum",
        "dafür"
       ],
       "loesung": 0,
       "fest": true,
       "erklaerung": "„sich um etwas kümmern\" – im Hauptsatz steht das Pronominaladverb „darum\"."
      }
     ]
    },
    {
     "id": "b2sb1s3",
     "text": {
      "sorte": "email",
      "quelle": "E-Mail",
      "titel": "Fragen zum Masterstudiengang Stadtplanung",
      "zeilen": [
       "Sehr geehrte Damen und Herren,",
       "ich interessiere mich für den Masterstudiengang Stadtplanung an Ihrer Hochschule und hätte vor meiner Bewerbung noch einige Fragen. Mein Bachelorstudium habe ich an der Universität Porto abgeschlossen, __(1)__ ich anschließend noch zwei Jahre als Tutorin gearbeitet habe. Seitdem bin ich als Architektin in einem Planungsbüro tätig.",
       "Laut Ihrer Internetseite müssen alle Bewerber Deutschkenntnisse auf dem Niveau C1 nachweisen. Zurzeit besitze ich ein B2-Zertifikat und besuche einen Vorbereitungskurs. Meine erste Frage ist daher, __(2)__ es möglich ist, den Nachweis erst nach Studienbeginn einzureichen.",
       "__(3)__ meiner Berufstätigkeit könnte ich außerdem nur in Teilzeit studieren. Deshalb würde ich gern wissen, ob die Lehrveranstaltungen auch abends besucht werden __(4)__. Eine Bekannte, __(5)__ Ihren Studiengang vor zwei Jahren abgeschlossen hat, erzählte mir, dass viele Seminare nicht nur auf Deutsch, __(6)__ auch auf Englisch stattfinden. Hätte ich mich früher informiert, __(7)__ ich mich schon zum Wintersemester beworben.",
       "Nun interessiert mich vor allem, __(8)__ ich beim Ausfüllen des Bewerbungsportals besonders achten muss. Gibt es für neu __(9)__ Studenten auch Plätze im Wohnheim, oder muss ich mich selbst um eine Wohnung kümmern?",
       "Über eine kurze Antwort würde ich mich sehr __(10)__.",
       "Mit freundlichen Grüßen",
       "Inês Carvalho"
      ]
     },
     "aufgaben": [
      {
       "frage": "Was passt in Lücke 1?",
       "luecke": 1,
       "opt": [
        "an der",
        "an die",
        "an dem"
       ],
       "loesung": 0,
       "fest": true,
       "erklaerung": "Bezug auf „die Universität\" (feminin); „an der Universität arbeiten\" verlangt den Dativ: „an der\"."
      },
      {
       "frage": "Was passt in Lücke 2?",
       "luecke": 2,
       "opt": [
        "ob",
        "dass",
        "falls"
       ],
       "loesung": 0,
       "fest": true,
       "erklaerung": "Die Frage ist offen (ja oder nein), deshalb indirekte Frage mit „ob\"."
      },
      {
       "frage": "Was passt in Lücke 3?",
       "luecke": 3,
       "opt": [
        "Aufgrund",
        "Trotz",
        "Statt"
       ],
       "loesung": 0,
       "fest": true,
       "erklaerung": "Die Berufstätigkeit ist der Grund für das Teilzeitstudium: „aufgrund\" + Genitiv."
      },
      {
       "frage": "Was passt in Lücke 4?",
       "luecke": 4,
       "opt": [
        "können",
        "kann",
        "gekonnt"
       ],
       "loesung": 0,
       "fest": true,
       "erklaerung": "Passiv mit Modalverb im Nebensatz; Subjekt „die Lehrveranstaltungen\" ist Plural: „besucht werden können\"."
      },
      {
       "frage": "Was passt in Lücke 5?",
       "luecke": 5,
       "opt": [
        "die",
        "deren",
        "der"
       ],
       "loesung": 0,
       "fest": true,
       "erklaerung": "Bezug auf „eine Bekannte\", Subjekt im Relativsatz: Nominativ feminin „die\"."
      },
      {
       "frage": "Was passt in Lücke 6?",
       "luecke": 6,
       "opt": [
        "sondern",
        "aber",
        "oder"
       ],
       "loesung": 0,
       "fest": true,
       "erklaerung": "Zweiteiliger Konnektor „nicht nur … sondern auch\"."
      },
      {
       "frage": "Was passt in Lücke 7?",
       "luecke": 7,
       "opt": [
        "hätte",
        "wäre",
        "würde"
       ],
       "loesung": 0,
       "fest": true,
       "erklaerung": "Irrealer Bedingungssatz der Vergangenheit: „hätte … beworben\" („sich bewerben\" bildet das Perfekt mit „haben\")."
      },
      {
       "frage": "Was passt in Lücke 8?",
       "luecke": 8,
       "opt": [
        "worauf",
        "darauf",
        "wofür"
       ],
       "loesung": 0,
       "fest": true,
       "erklaerung": "„auf etwas achten\" in einer indirekten Frage: „worauf\"."
      },
      {
       "frage": "Was passt in Lücke 9?",
       "luecke": 9,
       "opt": [
        "eingeschriebene",
        "eingeschrieben",
        "einschreibende"
       ],
       "loesung": 0,
       "fest": true,
       "erklaerung": "Partizip II als Adjektiv vor einem Nomen ohne Artikel im Akkusativ Plural: „eingeschriebene Studenten\"."
      },
      {
       "frage": "Was passt in Lücke 10?",
       "luecke": 10,
       "opt": [
        "freuen",
        "gefreut",
        "freue"
       ],
       "loesung": 0,
       "fest": true,
       "erklaerung": "Nach „würde\" steht der Infinitiv: „würde mich freuen\"."
      }
     ]
    }
   ]
  },
  {
   "nr": 5,
   "art": "textwahl",
   "name": "Sprachbausteine: Wortschatz",
   "kurz": "Ein Zeitschriftentext, zehn Lücken, fünfzehn Wörter",
   "was": "Ein Zeitschriftentext mit zehn Lücken und fünfzehn Wörtern. Jedes Wort passt höchstens einmal, fünf bleiben übrig.",
   "tipp": "Nomen-Verb-Verbindungen gehören fest zusammen: Rücksicht nehmen, zur Verfügung stellen. Achte auch auf Artikel und Plural.",
   "zeichen": "🔤",
   "farbe": "turq",
   "punkte": 10,
   "runden": [
    {
     "id": "b2sb2s1",
     "text": {
      "sorte": "zeitung",
      "quelle": "Zeitschrift",
      "titel": "Gesellschaft: Ehrenamt im Wandel",
      "zeilen": [
       "Ob in der Hausaufgabenhilfe, im Sportverein oder bei der Essensausgabe für Bedürftige: Millionen Menschen in Deutschland engagieren sich __(1)__ und ohne Bezahlung für andere. Die Motive sind dabei sehr unterschiedlich. Viele möchten etwas Sinnvolles tun, andere suchen Kontakt zu Menschen, die sie sonst nie __(2)__ hätten.",
       "In den letzten Jahren hat sich das Engagement jedoch __(3)__ verändert. Früher blieben viele Freiwillige jahrzehntelang in einem Verein. Heute wollen sich die meisten nicht mehr langfristig __(4)__. Sie helfen lieber bei einzelnen Projekten mit, etwa bei einem Stadtfest oder einer Spendenaktion. Für die Organisationen ist das eine große __(5)__, denn sie müssen ihre Arbeit völlig neu planen.",
       "Einige Städte haben darauf bereits __(6)__. Sie haben Freiwilligenagenturen gegründet, die Interessierte beraten und an passende Projekte __(7)__. Wer nur zwei Stunden im Monat Zeit hat, findet dort ebenso ein Angebot wie jemand, der sich jede Woche einsetzen möchte.",
       "Fachleute betonen allerdings, dass das Ehrenamt den Staat nicht __(8)__ darf. Freiwillige sollen Fachkräfte ergänzen, aber nicht deren Aufgaben übernehmen. __(9)__ ist klar: Ohne die vielen Helfer würden zahlreiche Angebote in Sport, Kultur und Sozialarbeit gar nicht existieren. Deshalb fordern Verbände, das Engagement stärker __(10)__, zum Beispiel durch Vergünstigungen im Nahverkehr oder kostenlosen Eintritt in Museen."
      ]
     },
     "aufgaben": [
      {
       "frage": "Welches Wort passt in Lücke 1?",
       "luecke": 1,
       "opt": [
        "ehrenamtlich",
        "kennengelernt",
        "grundlegend",
        "binden",
        "Herausforderung",
        "reagiert",
        "vermitteln",
        "ersetzen",
        "Dennoch",
        "anzuerkennen",
        "Einsatz",
        "wegen",
        "reagieren",
        "Herausforderungen",
        "obwohl"
       ],
       "loesung": 0,
       "fest": true,
       "erklaerung": "„eine große …\" verlangt ein feminines Nomen im Singular – „Einsatz\" ist maskulin, „Herausforderungen\" Plural. Nach „haben … bereits\" steht das Partizip „reagiert\", nicht der Infinitiv. „obwohl\" und „wegen\" passen nicht an den Satzanfang vor „ist\"."
      },
      {
       "frage": "Welches Wort passt in Lücke 2?",
       "luecke": 2,
       "opt": [
        "ehrenamtlich",
        "kennengelernt",
        "grundlegend",
        "binden",
        "Herausforderung",
        "reagiert",
        "vermitteln",
        "ersetzen",
        "Dennoch",
        "anzuerkennen",
        "Einsatz",
        "wegen",
        "reagieren",
        "Herausforderungen",
        "obwohl"
       ],
       "loesung": 1,
       "fest": true,
       "erklaerung": "Richtig ist „kennengelernt\". Jedes Wort passt nur einmal."
      },
      {
       "frage": "Welches Wort passt in Lücke 3?",
       "luecke": 3,
       "opt": [
        "ehrenamtlich",
        "kennengelernt",
        "grundlegend",
        "binden",
        "Herausforderung",
        "reagiert",
        "vermitteln",
        "ersetzen",
        "Dennoch",
        "anzuerkennen",
        "Einsatz",
        "wegen",
        "reagieren",
        "Herausforderungen",
        "obwohl"
       ],
       "loesung": 2,
       "fest": true,
       "erklaerung": "Richtig ist „grundlegend\". Jedes Wort passt nur einmal."
      },
      {
       "frage": "Welches Wort passt in Lücke 4?",
       "luecke": 4,
       "opt": [
        "ehrenamtlich",
        "kennengelernt",
        "grundlegend",
        "binden",
        "Herausforderung",
        "reagiert",
        "vermitteln",
        "ersetzen",
        "Dennoch",
        "anzuerkennen",
        "Einsatz",
        "wegen",
        "reagieren",
        "Herausforderungen",
        "obwohl"
       ],
       "loesung": 3,
       "fest": true,
       "erklaerung": "Richtig ist „binden\". Jedes Wort passt nur einmal."
      },
      {
       "frage": "Welches Wort passt in Lücke 5?",
       "luecke": 5,
       "opt": [
        "ehrenamtlich",
        "kennengelernt",
        "grundlegend",
        "binden",
        "Herausforderung",
        "reagiert",
        "vermitteln",
        "ersetzen",
        "Dennoch",
        "anzuerkennen",
        "Einsatz",
        "wegen",
        "reagieren",
        "Herausforderungen",
        "obwohl"
       ],
       "loesung": 4,
       "fest": true,
       "erklaerung": "Richtig ist „Herausforderung\". Jedes Wort passt nur einmal."
      },
      {
       "frage": "Welches Wort passt in Lücke 6?",
       "luecke": 6,
       "opt": [
        "ehrenamtlich",
        "kennengelernt",
        "grundlegend",
        "binden",
        "Herausforderung",
        "reagiert",
        "vermitteln",
        "ersetzen",
        "Dennoch",
        "anzuerkennen",
        "Einsatz",
        "wegen",
        "reagieren",
        "Herausforderungen",
        "obwohl"
       ],
       "loesung": 5,
       "fest": true,
       "erklaerung": "Richtig ist „reagiert\". Jedes Wort passt nur einmal."
      },
      {
       "frage": "Welches Wort passt in Lücke 7?",
       "luecke": 7,
       "opt": [
        "ehrenamtlich",
        "kennengelernt",
        "grundlegend",
        "binden",
        "Herausforderung",
        "reagiert",
        "vermitteln",
        "ersetzen",
        "Dennoch",
        "anzuerkennen",
        "Einsatz",
        "wegen",
        "reagieren",
        "Herausforderungen",
        "obwohl"
       ],
       "loesung": 6,
       "fest": true,
       "erklaerung": "Richtig ist „vermitteln\". Jedes Wort passt nur einmal."
      },
      {
       "frage": "Welches Wort passt in Lücke 8?",
       "luecke": 8,
       "opt": [
        "ehrenamtlich",
        "kennengelernt",
        "grundlegend",
        "binden",
        "Herausforderung",
        "reagiert",
        "vermitteln",
        "ersetzen",
        "Dennoch",
        "anzuerkennen",
        "Einsatz",
        "wegen",
        "reagieren",
        "Herausforderungen",
        "obwohl"
       ],
       "loesung": 7,
       "fest": true,
       "erklaerung": "Richtig ist „ersetzen\". Jedes Wort passt nur einmal."
      },
      {
       "frage": "Welches Wort passt in Lücke 9?",
       "luecke": 9,
       "opt": [
        "ehrenamtlich",
        "kennengelernt",
        "grundlegend",
        "binden",
        "Herausforderung",
        "reagiert",
        "vermitteln",
        "ersetzen",
        "Dennoch",
        "anzuerkennen",
        "Einsatz",
        "wegen",
        "reagieren",
        "Herausforderungen",
        "obwohl"
       ],
       "loesung": 8,
       "fest": true,
       "erklaerung": "Richtig ist „Dennoch\". Jedes Wort passt nur einmal."
      },
      {
       "frage": "Welches Wort passt in Lücke 10?",
       "luecke": 10,
       "opt": [
        "ehrenamtlich",
        "kennengelernt",
        "grundlegend",
        "binden",
        "Herausforderung",
        "reagiert",
        "vermitteln",
        "ersetzen",
        "Dennoch",
        "anzuerkennen",
        "Einsatz",
        "wegen",
        "reagieren",
        "Herausforderungen",
        "obwohl"
       ],
       "loesung": 9,
       "fest": true,
       "erklaerung": "Richtig ist „anzuerkennen\". Jedes Wort passt nur einmal."
      }
     ]
    },
    {
     "id": "b2sb2s2",
     "text": {
      "sorte": "zeitung",
      "quelle": "Zeitschrift",
      "titel": "Arbeit: Vier Tage arbeiten, drei Tage frei?",
      "zeilen": [
       "Die Idee klingt verlockend: bei vollem Lohn nur noch vier Tage pro Woche arbeiten. In mehreren europäischen Ländern wurde dieses Modell __(1)__ getestet, und auch in Deutschland __(2)__ sich im vergangenen Jahr rund vierzig Unternehmen an einer Studie. Die Ergebnisse __(3)__ seitdem für lebhafte Diskussionen.",
       "Viele Beschäftigte gaben an, sich deutlich weniger gestresst zu fühlen. Sie schliefen besser und hatten mehr Zeit für Familie und Hobbys. __(4)__ sank in einigen Betrieben die Zahl der Krankheitstage. Die Produktivität blieb meist stabil, __(5)__ die Arbeitszeit um einen ganzen Tag verkürzt wurde.",
       "Kritiker geben __(6)__ zu bedenken, dass sich das Modell nicht für jede Branche eignet. In Krankenhäusern oder in der Pflege lässt sich die Arbeit kaum __(7)__, ohne dass die Qualität leidet. Auch kleine Handwerksbetriebe können es sich oft nicht leisten, auf einen ganzen Arbeitstag zu __(8)__.",
       "Fachleute raten deshalb, das Modell nicht __(9)__ von oben einzuführen. Es komme vielmehr darauf an, gemeinsam mit den Mitarbeitern Lösungen zu finden, die für den jeweiligen Betrieb in __(10)__ kommen. Manche Firmen setzen zum Beispiel auf flexible Arbeitszeiten statt auf einen festen freien Tag. Entscheidend sei am Ende, dass Kunden und Beschäftigte gleichermaßen profitieren."
      ]
     },
     "aufgaben": [
      {
       "frage": "Welches Wort passt in Lücke 1?",
       "luecke": 1,
       "opt": [
        "bereits",
        "beteiligten",
        "sorgen",
        "Zudem",
        "obwohl",
        "allerdings",
        "verdichten",
        "verzichten",
        "einfach",
        "Frage",
        "trotz",
        "Rede",
        "verzichtet",
        "führen",
        "teilnahmen"
       ],
       "loesung": 0,
       "fest": true,
       "erklaerung": "Feste Verbindungen: „für Diskussionen sorgen\" (nicht „führen\" – das geht nur mit „zu\"), „in Frage kommen\", „sich beteiligen an\" („teilnehmen\" ist nicht reflexiv). „trotz\" ist eine Präposition und kann keinen Nebensatz einleiten."
      },
      {
       "frage": "Welches Wort passt in Lücke 2?",
       "luecke": 2,
       "opt": [
        "bereits",
        "beteiligten",
        "sorgen",
        "Zudem",
        "obwohl",
        "allerdings",
        "verdichten",
        "verzichten",
        "einfach",
        "Frage",
        "trotz",
        "Rede",
        "verzichtet",
        "führen",
        "teilnahmen"
       ],
       "loesung": 1,
       "fest": true,
       "erklaerung": "Richtig ist „beteiligten\". Jedes Wort passt nur einmal."
      },
      {
       "frage": "Welches Wort passt in Lücke 3?",
       "luecke": 3,
       "opt": [
        "bereits",
        "beteiligten",
        "sorgen",
        "Zudem",
        "obwohl",
        "allerdings",
        "verdichten",
        "verzichten",
        "einfach",
        "Frage",
        "trotz",
        "Rede",
        "verzichtet",
        "führen",
        "teilnahmen"
       ],
       "loesung": 2,
       "fest": true,
       "erklaerung": "Richtig ist „sorgen\". Jedes Wort passt nur einmal."
      },
      {
       "frage": "Welches Wort passt in Lücke 4?",
       "luecke": 4,
       "opt": [
        "bereits",
        "beteiligten",
        "sorgen",
        "Zudem",
        "obwohl",
        "allerdings",
        "verdichten",
        "verzichten",
        "einfach",
        "Frage",
        "trotz",
        "Rede",
        "verzichtet",
        "führen",
        "teilnahmen"
       ],
       "loesung": 3,
       "fest": true,
       "erklaerung": "Richtig ist „Zudem\". Jedes Wort passt nur einmal."
      },
      {
       "frage": "Welches Wort passt in Lücke 5?",
       "luecke": 5,
       "opt": [
        "bereits",
        "beteiligten",
        "sorgen",
        "Zudem",
        "obwohl",
        "allerdings",
        "verdichten",
        "verzichten",
        "einfach",
        "Frage",
        "trotz",
        "Rede",
        "verzichtet",
        "führen",
        "teilnahmen"
       ],
       "loesung": 4,
       "fest": true,
       "erklaerung": "Richtig ist „obwohl\". Jedes Wort passt nur einmal."
      },
      {
       "frage": "Welches Wort passt in Lücke 6?",
       "luecke": 6,
       "opt": [
        "bereits",
        "beteiligten",
        "sorgen",
        "Zudem",
        "obwohl",
        "allerdings",
        "verdichten",
        "verzichten",
        "einfach",
        "Frage",
        "trotz",
        "Rede",
        "verzichtet",
        "führen",
        "teilnahmen"
       ],
       "loesung": 5,
       "fest": true,
       "erklaerung": "Richtig ist „allerdings\". Jedes Wort passt nur einmal."
      },
      {
       "frage": "Welches Wort passt in Lücke 7?",
       "luecke": 7,
       "opt": [
        "bereits",
        "beteiligten",
        "sorgen",
        "Zudem",
        "obwohl",
        "allerdings",
        "verdichten",
        "verzichten",
        "einfach",
        "Frage",
        "trotz",
        "Rede",
        "verzichtet",
        "führen",
        "teilnahmen"
       ],
       "loesung": 6,
       "fest": true,
       "erklaerung": "Richtig ist „verdichten\". Jedes Wort passt nur einmal."
      },
      {
       "frage": "Welches Wort passt in Lücke 8?",
       "luecke": 8,
       "opt": [
        "bereits",
        "beteiligten",
        "sorgen",
        "Zudem",
        "obwohl",
        "allerdings",
        "verdichten",
        "verzichten",
        "einfach",
        "Frage",
        "trotz",
        "Rede",
        "verzichtet",
        "führen",
        "teilnahmen"
       ],
       "loesung": 7,
       "fest": true,
       "erklaerung": "Richtig ist „verzichten\". Jedes Wort passt nur einmal."
      },
      {
       "frage": "Welches Wort passt in Lücke 9?",
       "luecke": 9,
       "opt": [
        "bereits",
        "beteiligten",
        "sorgen",
        "Zudem",
        "obwohl",
        "allerdings",
        "verdichten",
        "verzichten",
        "einfach",
        "Frage",
        "trotz",
        "Rede",
        "verzichtet",
        "führen",
        "teilnahmen"
       ],
       "loesung": 8,
       "fest": true,
       "erklaerung": "Richtig ist „einfach\". Jedes Wort passt nur einmal."
      },
      {
       "frage": "Welches Wort passt in Lücke 10?",
       "luecke": 10,
       "opt": [
        "bereits",
        "beteiligten",
        "sorgen",
        "Zudem",
        "obwohl",
        "allerdings",
        "verdichten",
        "verzichten",
        "einfach",
        "Frage",
        "trotz",
        "Rede",
        "verzichtet",
        "führen",
        "teilnahmen"
       ],
       "loesung": 9,
       "fest": true,
       "erklaerung": "Richtig ist „Frage\". Jedes Wort passt nur einmal."
      }
     ]
    },
    {
     "id": "b2sb2s3",
     "text": {
      "sorte": "zeitung",
      "quelle": "Zeitschrift",
      "titel": "Umwelt: Grüne Inseln gegen die Hitze",
      "zeilen": [
       "Hitzesommer stellen viele Städte vor große Probleme, und Fachleute rechnen damit, dass solche Sommer in Zukunft häufiger werden. Asphalt und Beton __(1)__ tagsüber die Wärme und geben sie nachts wieder ab. In dicht bebauten Vierteln kann es deshalb bis zu zehn Grad wärmer sein als im __(2)__. Besonders für ältere Menschen und kleine Kinder ist das eine ernste __(3)__.",
       "Viele Kommunen __(4)__ inzwischen auf mehr Grün. Bäume spenden Schatten und kühlen durch die Verdunstung von Wasser ihre Umgebung. Auch begrünte Dächer und Fassaden können __(5)__ beitragen, die Temperaturen zu senken. __(6)__ bieten sie Lebensraum für Vögel, Bienen und andere Insekten.",
       "Doch das Pflanzen allein reicht nicht. Junge Bäume brauchen in trockenen Sommern viel Wasser und müssen regelmäßig __(7)__ werden. Weil dafür oft das Personal fehlt, rufen manche Städte die Bürger auf, Patenschaften für Bäume in ihrer Straße zu __(8)__. Wer mitmacht, gießt seinen Baum bei Trockenheit und meldet Schäden an das Grünflächenamt.",
       "Fachleute weisen __(9)__ darauf hin, dass solche Aktionen nur eine Ergänzung sein können. Langfristig müsse schon bei der Planung neuer Wohngebiete Rücksicht auf das Klima __(10)__ werden, etwa durch breite Grünstreifen, helle Fassaden und offene Wasserflächen."
      ]
     },
     "aufgaben": [
      {
       "frage": "Welches Wort passt in Lücke 1?",
       "luecke": 1,
       "opt": [
        "speichern",
        "Umland",
        "Gefahr",
        "setzen",
        "dazu",
        "Darüber hinaus",
        "gepflegt",
        "übernehmen",
        "jedoch",
        "genommen",
        "Gefahren",
        "gelegt",
        "stellen",
        "dafür",
        "Umgebung"
       ],
       "loesung": 0,
       "fest": true,
       "erklaerung": "Feste Verbindungen: „auf etwas setzen\", „dazu beitragen\", „Rücksicht nehmen\" (nicht „legen\"). „im Umgebung\" ist falsch, weil „Umgebung\" feminin ist; „eine ernste Gefahren\" passt nicht, weil „Gefahren\" Plural ist."
      },
      {
       "frage": "Welches Wort passt in Lücke 2?",
       "luecke": 2,
       "opt": [
        "speichern",
        "Umland",
        "Gefahr",
        "setzen",
        "dazu",
        "Darüber hinaus",
        "gepflegt",
        "übernehmen",
        "jedoch",
        "genommen",
        "Gefahren",
        "gelegt",
        "stellen",
        "dafür",
        "Umgebung"
       ],
       "loesung": 1,
       "fest": true,
       "erklaerung": "Richtig ist „Umland\". Jedes Wort passt nur einmal."
      },
      {
       "frage": "Welches Wort passt in Lücke 3?",
       "luecke": 3,
       "opt": [
        "speichern",
        "Umland",
        "Gefahr",
        "setzen",
        "dazu",
        "Darüber hinaus",
        "gepflegt",
        "übernehmen",
        "jedoch",
        "genommen",
        "Gefahren",
        "gelegt",
        "stellen",
        "dafür",
        "Umgebung"
       ],
       "loesung": 2,
       "fest": true,
       "erklaerung": "Richtig ist „Gefahr\". Jedes Wort passt nur einmal."
      },
      {
       "frage": "Welches Wort passt in Lücke 4?",
       "luecke": 4,
       "opt": [
        "speichern",
        "Umland",
        "Gefahr",
        "setzen",
        "dazu",
        "Darüber hinaus",
        "gepflegt",
        "übernehmen",
        "jedoch",
        "genommen",
        "Gefahren",
        "gelegt",
        "stellen",
        "dafür",
        "Umgebung"
       ],
       "loesung": 3,
       "fest": true,
       "erklaerung": "Richtig ist „setzen\". Jedes Wort passt nur einmal."
      },
      {
       "frage": "Welches Wort passt in Lücke 5?",
       "luecke": 5,
       "opt": [
        "speichern",
        "Umland",
        "Gefahr",
        "setzen",
        "dazu",
        "Darüber hinaus",
        "gepflegt",
        "übernehmen",
        "jedoch",
        "genommen",
        "Gefahren",
        "gelegt",
        "stellen",
        "dafür",
        "Umgebung"
       ],
       "loesung": 4,
       "fest": true,
       "erklaerung": "Richtig ist „dazu\". Jedes Wort passt nur einmal."
      },
      {
       "frage": "Welches Wort passt in Lücke 6?",
       "luecke": 6,
       "opt": [
        "speichern",
        "Umland",
        "Gefahr",
        "setzen",
        "dazu",
        "Darüber hinaus",
        "gepflegt",
        "übernehmen",
        "jedoch",
        "genommen",
        "Gefahren",
        "gelegt",
        "stellen",
        "dafür",
        "Umgebung"
       ],
       "loesung": 5,
       "fest": true,
       "erklaerung": "Richtig ist „Darüber hinaus\". Jedes Wort passt nur einmal."
      },
      {
       "frage": "Welches Wort passt in Lücke 7?",
       "luecke": 7,
       "opt": [
        "speichern",
        "Umland",
        "Gefahr",
        "setzen",
        "dazu",
        "Darüber hinaus",
        "gepflegt",
        "übernehmen",
        "jedoch",
        "genommen",
        "Gefahren",
        "gelegt",
        "stellen",
        "dafür",
        "Umgebung"
       ],
       "loesung": 6,
       "fest": true,
       "erklaerung": "Richtig ist „gepflegt\". Jedes Wort passt nur einmal."
      },
      {
       "frage": "Welches Wort passt in Lücke 8?",
       "luecke": 8,
       "opt": [
        "speichern",
        "Umland",
        "Gefahr",
        "setzen",
        "dazu",
        "Darüber hinaus",
        "gepflegt",
        "übernehmen",
        "jedoch",
        "genommen",
        "Gefahren",
        "gelegt",
        "stellen",
        "dafür",
        "Umgebung"
       ],
       "loesung": 7,
       "fest": true,
       "erklaerung": "Richtig ist „übernehmen\". Jedes Wort passt nur einmal."
      },
      {
       "frage": "Welches Wort passt in Lücke 9?",
       "luecke": 9,
       "opt": [
        "speichern",
        "Umland",
        "Gefahr",
        "setzen",
        "dazu",
        "Darüber hinaus",
        "gepflegt",
        "übernehmen",
        "jedoch",
        "genommen",
        "Gefahren",
        "gelegt",
        "stellen",
        "dafür",
        "Umgebung"
       ],
       "loesung": 8,
       "fest": true,
       "erklaerung": "Richtig ist „jedoch\". Jedes Wort passt nur einmal."
      },
      {
       "frage": "Welches Wort passt in Lücke 10?",
       "luecke": 10,
       "opt": [
        "speichern",
        "Umland",
        "Gefahr",
        "setzen",
        "dazu",
        "Darüber hinaus",
        "gepflegt",
        "übernehmen",
        "jedoch",
        "genommen",
        "Gefahren",
        "gelegt",
        "stellen",
        "dafür",
        "Umgebung"
       ],
       "loesung": 9,
       "fest": true,
       "erklaerung": "Richtig ist „genommen\". Jedes Wort passt nur einmal."
      }
     ]
    }
   ]
  }
 ],
 "laeufe": [
  {
   "id": "tb2ll1",
   "titel": "Prüfungslauf 1",
   "minuten": 90,
   "teile": [
    {
     "nr": 1,
     "art": "textwahl",
     "aufgaben": [
      {
       "frage": "Welche Überschrift passt zu Text 1?",
       "opt": [
        "Bewegung in kleinen Portionen wirkt auch",
        "Ein Anruf gegen die Gefahr der Hitze",
        "Kantinenessen wird deutlich teurer",
        "Wenn die Pflegekraft statt des Arztes kommt",
        "Fitnessstudios klagen über weniger Mitglieder",
        "Abgelaufen heißt nicht automatisch verdorben",
        "Land zahlt Medizinstudenten ein Stipendium",
        "Neue Trinkbrunnen in der ganzen Innenstadt",
        "Was vorne steht, landet auf dem Teller",
        "Supermärkte dürfen Reste nicht mehr wegwerfen"
       ],
       "loesung": 8,
       "fest": true,
       "text": {
        "sorte": "zeitung",
        "quelle": "Aus einem Ernährungsmagazin",
        "titel": "Text 1",
        "zeilen": [
         "In der Kantine eines Logistikunternehmens in Ostheim hat sich das Essverhalten der Mitarbeiter innerhalb weniger Wochen verändert – ohne Verbote und ohne höhere Preise. Die Küche hat lediglich die Theke umgebaut: Salate und Gemüsegerichte stehen jetzt ganz vorne und in Augenhöhe, Pommes und Würstchen dagegen am Ende der Ausgabe.",
         "Ernährungswissenschaftler, die das Projekt begleiten, zählten danach fast vierzig Prozent mehr verkaufte Gemüseportionen. „Die meisten Menschen entscheiden in der Kantine sehr schnell und nehmen das, was sie zuerst sehen“, erklärt Projektleiterin Mira Lenz. Wichtig sei, dass niemandem etwas weggenommen werde. Wer seine Currywurst möchte, bekommt sie auch weiterhin. Die Kantine will das Konzept nun auch beim Frühstück ausprobieren."
        ]
       },
       "stelle": "Salate und Gemüsegerichte stehen jetzt ganz vorne und in Augenhöhe",
       "erklaerung": "Die neue Anordnung führt zu mehr Gemüse. Die Preise sind gerade nicht gestiegen."
      },
      {
       "frage": "Welche Überschrift passt zu Text 2?",
       "opt": [
        "Bewegung in kleinen Portionen wirkt auch",
        "Ein Anruf gegen die Gefahr der Hitze",
        "Kantinenessen wird deutlich teurer",
        "Wenn die Pflegekraft statt des Arztes kommt",
        "Fitnessstudios klagen über weniger Mitglieder",
        "Abgelaufen heißt nicht automatisch verdorben",
        "Land zahlt Medizinstudenten ein Stipendium",
        "Neue Trinkbrunnen in der ganzen Innenstadt",
        "Was vorne steht, landet auf dem Teller",
        "Supermärkte dürfen Reste nicht mehr wegwerfen"
       ],
       "loesung": 3,
       "fest": true,
       "text": {
        "sorte": "zeitung",
        "quelle": "Aus einer Regionalzeitung",
        "titel": "Text 2",
        "zeilen": [
         "Im Landkreis Waldhofen gehen in den nächsten Jahren viele Hausärzte in Rente, und Nachfolger sind kaum zu finden. Mehrere Gemeinden setzen deshalb auf speziell weitergebildete Pflegekräfte. Sie besuchen chronisch kranke und ältere Patienten zu Hause, messen Blutdruck und Blutzucker, kontrollieren Wunden und besprechen die Medikamente.",
         "Die Ergebnisse schicken sie direkt an die Hausarztpraxis, die über die weitere Behandlung entscheidet. So spart der Arzt viele Fahrten und hat mehr Zeit für die Sprechstunde. Die Krankenkassen bezahlen das Modell zunächst für drei Jahre. Gleichzeitig wirbt das Land weiter um junge Mediziner, unter anderem mit Zuschüssen für die Eröffnung einer eigenen Praxis. Ob das reicht, bezweifeln allerdings viele Bürgermeister."
        ]
       },
       "stelle": "Sie besuchen chronisch kranke und ältere Patienten zu Hause",
       "erklaerung": "Pflegekräfte übernehmen Hausbesuche. Das Land fördert Praxiseröffnungen, von Stipendien für Studenten ist nicht die Rede."
      },
      {
       "frage": "Welche Überschrift passt zu Text 3?",
       "opt": [
        "Bewegung in kleinen Portionen wirkt auch",
        "Ein Anruf gegen die Gefahr der Hitze",
        "Kantinenessen wird deutlich teurer",
        "Wenn die Pflegekraft statt des Arztes kommt",
        "Fitnessstudios klagen über weniger Mitglieder",
        "Abgelaufen heißt nicht automatisch verdorben",
        "Land zahlt Medizinstudenten ein Stipendium",
        "Neue Trinkbrunnen in der ganzen Innenstadt",
        "Was vorne steht, landet auf dem Teller",
        "Supermärkte dürfen Reste nicht mehr wegwerfen"
       ],
       "loesung": 0,
       "fest": true,
       "text": {
        "sorte": "zeitung",
        "quelle": "Aus einem Gesundheitsmagazin",
        "titel": "Text 3",
        "zeilen": [
         "Keine Zeit für Sport? Eine neue Auswertung macht Bewegungsmuffeln Mut. Forscher analysierten die Daten von rund 25 000 Erwachsenen, die eine Woche lang einen Bewegungssensor am Handgelenk trugen. Keiner von ihnen trieb regelmäßig Sport oder ging ins Fitnessstudio.",
         "Trotzdem hatten diejenigen, die sich im Alltag mehrmals täglich kurz anstrengten – etwa zügig Treppen stiegen, schwere Einkäufe trugen oder dem Bus hinterherliefen –, ein deutlich geringeres Risiko für Herz-Kreislauf-Erkrankungen. Schon drei bis vier solcher Einheiten von jeweils einer Minute machten einen messbaren Unterschied. Ein Ersatz für regelmäßiges Training seien die kurzen Anstrengungen zwar nicht, betonen die Autoren. Für Menschen, die sich bisher kaum bewegen, seien sie aber ein guter Anfang."
        ]
       },
       "stelle": "Schon drei bis vier solcher Einheiten von jeweils einer Minute",
       "erklaerung": "Auch kurze Anstrengungen im Alltag nützen. Fitnessstudios werden nur im Zusammenhang mit den Teilnehmern erwähnt."
      },
      {
       "frage": "Welche Überschrift passt zu Text 4?",
       "opt": [
        "Bewegung in kleinen Portionen wirkt auch",
        "Ein Anruf gegen die Gefahr der Hitze",
        "Kantinenessen wird deutlich teurer",
        "Wenn die Pflegekraft statt des Arztes kommt",
        "Fitnessstudios klagen über weniger Mitglieder",
        "Abgelaufen heißt nicht automatisch verdorben",
        "Land zahlt Medizinstudenten ein Stipendium",
        "Neue Trinkbrunnen in der ganzen Innenstadt",
        "Was vorne steht, landet auf dem Teller",
        "Supermärkte dürfen Reste nicht mehr wegwerfen"
       ],
       "loesung": 5,
       "fest": true,
       "text": {
        "sorte": "zeitung",
        "quelle": "Aus einer Verbraucherzeitschrift",
        "titel": "Text 4",
        "zeilen": [
         "Jedes Jahr werfen private Haushalte Millionen Tonnen Lebensmittel weg, oft nur, weil das Mindesthaltbarkeitsdatum überschritten ist. Dabei ist dieses Datum kein Verfallsdatum. Es gibt lediglich an, bis wann der Hersteller garantiert, dass Geschmack, Farbe und Konsistenz unverändert bleiben.",
         "Joghurt, Käse oder Nudeln sind häufig noch Tage oder sogar Wochen später einwandfrei. Verbraucherschützer raten deshalb: anschauen, riechen, probieren. Anders ist es beim Verbrauchsdatum, das etwa auf frischem Hackfleisch steht – hier sollte man das Produkt nach Ablauf nicht mehr essen. Einige Supermärkte verkaufen Waren kurz vor Ablauf des Datums inzwischen deutlich günstiger, um weniger wegwerfen zu müssen. Kunden nehmen dieses Angebot nach Angaben der Händler gern an."
        ]
       },
       "stelle": "Dabei ist dieses Datum kein Verfallsdatum.",
       "erklaerung": "Lebensmittel sind nach dem Mindesthaltbarkeitsdatum oft noch gut. Ein Verbot für Supermärkte erwähnt der Text nicht."
      },
      {
       "frage": "Welche Überschrift passt zu Text 5?",
       "opt": [
        "Bewegung in kleinen Portionen wirkt auch",
        "Ein Anruf gegen die Gefahr der Hitze",
        "Kantinenessen wird deutlich teurer",
        "Wenn die Pflegekraft statt des Arztes kommt",
        "Fitnessstudios klagen über weniger Mitglieder",
        "Abgelaufen heißt nicht automatisch verdorben",
        "Land zahlt Medizinstudenten ein Stipendium",
        "Neue Trinkbrunnen in der ganzen Innenstadt",
        "Was vorne steht, landet auf dem Teller",
        "Supermärkte dürfen Reste nicht mehr wegwerfen"
       ],
       "loesung": 1,
       "fest": true,
       "text": {
        "sorte": "zeitung",
        "quelle": "Aus einem Stadtmagazin",
        "titel": "Text 5",
        "zeilen": [
         "Bei Temperaturen über dreißig Grad sind vor allem ältere Menschen gefährdet, die allein leben. Sie trinken oft zu wenig und merken nicht, wann ihr Körper überhitzt. Die Stadt Bergstetten hat deshalb ein Hitzetelefon eingerichtet: Wer sich anmeldet, wird an heißen Tagen jeden Vormittag von Ehrenamtlichen angerufen.",
         "Die Helfer erinnern ans Trinken, geben Tipps zum Kühlhalten der Wohnung und fragen, ob alles in Ordnung ist. Meldet sich jemand nicht, informieren sie Angehörige oder einen Pflegedienst. Im vergangenen Sommer waren bereits rund 300 Senioren angemeldet. Ergänzend plant die Stadt mehrere Trinkbrunnen, bisher gibt es allerdings erst zwei. Anmelden kann man sich telefonisch beim Seniorenbüro."
        ]
       },
       "stelle": "wird an heißen Tagen jeden Vormittag von Ehrenamtlichen angerufen",
       "erklaerung": "Ehrenamtliche rufen ältere Menschen bei Hitze an. Trinkbrunnen sind erst geplant, bisher gibt es nur zwei."
      }
     ]
    },
    {
     "nr": 2,
     "art": "textwahl",
     "text": {
      "sorte": "zeitung",
      "quelle": "Umwelt aktuell",
      "titel": "Der unsichtbare Abrieb",
      "zeilen": [
       "Wenn von Mikroplastik die Rede ist, denken viele zuerst an Plastiktüten im Meer oder an winzige Kügelchen in Duschgel und Zahnpasta. Tatsächlich spielen Kosmetikprodukte aber nur eine kleine Rolle. Die größte Quelle für Mikroplastik in Deutschland ist nach aktuellen Schätzungen etwas, woran kaum jemand denkt: der Abrieb von Autoreifen. Das zeigt eine Auswertung mehrerer Forschungsinstitute, die im vergangenen Jahr veröffentlicht wurde.",
       "Bei jeder Fahrt, bei jedem Bremsen und in jeder Kurve lösen sich winzige Partikel von den Reifen. Pro Person und Jahr kommt so rechnerisch über ein Kilogramm zusammen. Der Regen spült den Abrieb von den Straßen in die Kanalisation, in Bäche und Flüsse oder lässt ihn am Straßenrand im Boden versickern. Auch Elektroautos tragen dazu bei; weil sie meist schwerer sind, nutzen sich ihre Reifen sogar etwas schneller ab.",
       "„Das Problem ist, dass die Partikel so klein sind, dass Kläranlagen sie nur teilweise zurückhalten können“, erklärt der Gewässerforscher Henrik Vogt vom Institut für Gewässerökologie in Leinfurt. Sein Team untersucht seit drei Jahren Wasser- und Bodenproben entlang einer viel befahrenen Bundesstraße. In unmittelbarer Nähe der Fahrbahn fanden die Forscher bis zu hundertmal mehr Partikel als in einem Waldgebiet ohne Verkehr.",
       "Die Partikel bestehen dabei nicht nur aus Kunststoff, sondern auch aus Gummi, Ruß und verschiedenen Zusatzstoffen, die den Reifen haltbar machen sollen. Einige dieser Stoffe stehen im Verdacht, für Fische giftig zu sein. In Laborversuchen starben bestimmte Lachsarten schon an geringen Mengen eines Abbauprodukts, das aus Reifen ins Wasser gelangt.",
       "Wie gefährlich Mikroplastik für Menschen ist, kann bislang niemand genau sagen. Fest steht, dass die Teilchen inzwischen fast überall nachgewiesen werden – im Trinkwasser, in der Luft und in Lebensmitteln. Bei Tieren haben Laborversuche Entzündungen im Darm gezeigt. Allerdings wurden dafür oft deutlich höhere Mengen verwendet, als sie in der Umwelt vorkommen. Vogt warnt deshalb vor Panik, hält aber mehr Forschung für dringend nötig.",
       "Was lässt sich tun? Eine Möglichkeit sind spezielle Filter in den Gullys großer Straßen, die einen Teil des Abriebs auffangen. In Leinfurt werden solche Filter derzeit an zwanzig Stellen getestet. Erste Ergebnisse sind vielversprechend, doch die Filter müssen regelmäßig gereinigt werden, was Personal und Geld kostet. Ob sie flächendeckend eingesetzt werden können, ist deshalb offen.",
       "Auch die Reifenhersteller sind gefragt. Einige arbeiten an Mischungen, die weniger Abrieb erzeugen, ohne dass die Sicherheit leidet. Das ist schwieriger, als es klingt, denn ein Reifen, der besser auf der Straße haftet, nutzt sich in der Regel auch schneller ab. Fachleute fordern deshalb, den Abrieb künftig auf dem Reifenetikett anzugeben, damit Käufer die Produkte vergleichen können.",
       "Am meisten bewirken könnten nach Ansicht von Vogt aber die Autofahrer selbst. Wer vorausschauend fährt, sanft bremst und auf den richtigen Reifendruck achtet, verringert den Abrieb spürbar. „Am besten ist natürlich das Auto, das gar nicht fährt“, sagt der Forscher und lacht. Er selbst fährt übrigens jeden Tag mit dem Fahrrad ins Institut – auch, wie er zugibt, weil es dort kaum Parkplätze gibt."
      ]
     },
     "aufgaben": [
      {
       "frage": "Was ist laut Text die wichtigste Quelle für Mikroplastik in Deutschland?",
       "opt": [
        "Kosmetikprodukte wie Duschgel und Zahnpasta.",
        "Der Abrieb von Autoreifen.",
        "Plastiktüten, die ins Meer gelangen."
       ],
       "loesung": 1,
       "stelle": "Die größte Quelle für Mikroplastik in Deutschland",
       "erklaerung": "Kosmetik und Plastiktüten sind das, woran viele denken; Kosmetik spielt nur eine kleine Rolle."
      },
      {
       "frage": "Was erfährt man über Elektroautos?",
       "opt": [
        "Sie erzeugen keinen Reifenabrieb.",
        "Ihre Reifen nutzen sich langsamer ab als bei anderen Autos.",
        "Wegen ihres Gewichts verursachen sie etwas mehr Abrieb."
       ],
       "loesung": 2,
       "stelle": "nutzen sich ihre Reifen sogar etwas schneller ab",
       "erklaerung": "Elektroautos sind meist schwerer, deshalb nutzen sich ihre Reifen schneller ab."
      },
      {
       "frage": "Was hat Vogts Team herausgefunden?",
       "opt": [
        "Neben der Straße gibt es viel mehr Partikel als im Wald.",
        "Kläranlagen können die Partikel vollständig zurückhalten.",
        "Im Wald fand man ähnlich viele Partikel wie an der Straße."
       ],
       "loesung": 0,
       "stelle": "bis zu hundertmal mehr Partikel als in einem Waldgebiet",
       "erklaerung": "Kläranlagen halten die Partikel nur teilweise zurück; im Wald waren es viel weniger."
      },
      {
       "frage": "Wie beurteilt Vogt die Gefahr für Menschen?",
       "opt": [
        "Er hält Mikroplastik für nachweislich harmlos.",
        "Er ist sicher, dass Mikroplastik beim Menschen Darmentzündungen auslöst.",
        "Er sieht keinen Grund zur Panik, wünscht sich aber mehr Forschung."
       ],
       "loesung": 2,
       "stelle": "Vogt warnt deshalb vor Panik",
       "erklaerung": "Die Gefahr ist unklar; Entzündungen zeigten sich nur bei Tieren und mit hohen Mengen."
      },
      {
       "frage": "Warum ist offen, ob die Gully-Filter überall eingesetzt werden?",
       "opt": [
        "Weil sie bisher kaum Abrieb auffangen.",
        "Weil ihre Wartung aufwendig und teuer ist.",
        "Weil sie nur an zwanzig Stellen erlaubt sind."
       ],
       "loesung": 1,
       "stelle": "die Filter müssen regelmäßig gereinigt werden",
       "erklaerung": "Die Ergebnisse sind vielversprechend; das Problem sind Personal und Kosten für die Reinigung."
      }
     ]
    },
    {
     "nr": 3,
     "art": "anzeigenX",
     "anzeigen": [
      {
       "b": "a",
       "quelle": "Stadttheater",
       "zeilen": [
        "Premiere: „Die Erbschaft\" – Komödie in drei Akten",
        "Freitag, 20 Uhr, Großes Haus",
        "Schüler und Studenten zahlen die Hälfte"
       ]
      },
      {
       "b": "b",
       "quelle": "Kunsthalle am Fluss",
       "zeilen": [
        "Ausstellung „Licht und Schatten\": Fotografie des 20. Jahrhunderts",
        "Di–So 10–18 Uhr, donnerstags bis 21 Uhr",
        "Führungen für Gruppen ab zehn Personen nach Anmeldung"
       ]
      },
      {
       "b": "c",
       "quelle": "Kletterhalle Gipfelstürmer",
       "zeilen": [
        "Schnupperklettern für Einsteiger",
        "Ausrüstung kann geliehen werden",
        "Jugendliche ab 14 Jahren",
        "Jüngere Kinder nur in Begleitung eines Elternteils"
       ]
      },
      {
       "b": "d",
       "quelle": "Chor „Neue Töne\"",
       "zeilen": [
        "Wir suchen Verstärkung in allen Stimmen",
        "Proben jeden Mittwoch um 19.30 Uhr",
        "Notenkenntnisse sind keine Voraussetzung",
        "Einfach zur Probe vorbeikommen"
       ]
      },
      {
       "b": "e",
       "quelle": "Literaturhaus",
       "zeilen": [
        "Lesung: Jonas Wendler liest aus seinem Krimi „Nebelhafen\"",
        "Anschließend Gespräch mit dem Publikum und Signierstunde",
        "Eintritt 8 Euro"
       ]
      },
      {
       "b": "f",
       "quelle": "Kinosommer im Schlosspark",
       "zeilen": [
        "Juli und August, jeden Samstag bei Einbruch der Dunkelheit",
        "Filme in Originalsprache mit deutschen Untertiteln",
        "Bei Regen fällt die Vorstellung aus"
       ]
      },
      {
       "b": "g",
       "quelle": "Wanderverein Höhenweg",
       "zeilen": [
        "Geführte Tageswanderungen, ca. 20 Kilometer",
        "Jeden ersten Sonntag im Monat",
        "Gute Kondition erforderlich",
        "Gäste sind willkommen"
       ]
      },
      {
       "b": "h",
       "quelle": "Töpferwerkstatt Erdton",
       "zeilen": [
        "Töpferkurs am Wochenende",
        "Drehen, Glasieren und Brennen inklusive",
        "Ihre fertigen Stücke können Sie nach zwei Wochen abholen",
        "Spülmaschinenfest"
       ]
      },
      {
       "b": "i",
       "quelle": "Spielecafé Würfelglück",
       "zeilen": [
        "Über 500 Brettspiele zum Ausprobieren vor Ort",
        "Spieleerklärer helfen bei Regelfragen",
        "Für Gruppen ab sechs Personen Reservierung empfohlen"
       ]
      },
      {
       "b": "j",
       "quelle": "Musikschule Klangraum",
       "zeilen": [
        "Gitarrenunterricht für Erwachsene",
        "Einzel- oder Gruppenunterricht",
        "Unterrichtszeiten bis 22.30 Uhr möglich"
       ]
      },
      {
       "b": "k",
       "quelle": "Tanzhaus Mitte",
       "zeilen": [
        "Swing-Abend mit Live-Band",
        "Für Neulinge vorher 45 Minuten Schnupperkurs",
        "Samstag ab 19 Uhr",
        "Kein Partner nötig"
       ]
      },
      {
       "b": "l",
       "quelle": "Altstadtführungen",
       "zeilen": [
        "Nachtwächter-Führung mit Geschichten aus dem Mittelalter",
        "Täglich 21 Uhr, Dauer 90 Minuten",
        "Auch auf Englisch buchbar"
       ]
      }
     ],
     "aufgaben": [
      {
       "situation": "Sie möchten mit zwölf Kollegen eine Fotoausstellung besuchen und sich dabei alles erklären lassen.",
       "loesung": "b",
       "erklaerung": "Die Kunsthalle bietet Führungen für Gruppen ab zehn Personen an."
      },
      {
       "situation": "Ein Freund aus Kanada besucht Sie. Er spricht kaum Deutsch, interessiert sich aber sehr für die Geschichte Ihrer Stadt.",
       "loesung": "l",
       "erklaerung": "Die Nachtwächter-Führung erzählt Stadtgeschichte und ist auch auf Englisch buchbar."
      },
      {
       "situation": "Sie singen gern, können aber keine Noten lesen. Sie suchen eine Gruppe, die regelmäßig probt.",
       "loesung": "d",
       "erklaerung": "Der Chor probt wöchentlich und setzt keine Notenkenntnisse voraus."
      },
      {
       "situation": "Sie haben noch nie getanzt, möchten aber am Samstagabend etwas mit Musik unternehmen, ohne sich zu blamieren.",
       "loesung": "k",
       "erklaerung": "Vor dem Swing-Abend gibt es einen Schnupperkurs für Neulinge."
      },
      {
       "situation": "Ihre zehnjährige Tochter möchte klettern lernen. Sie selbst haben weder Zeit noch Lust, sie dabei zu begleiten.",
       "loesung": "x",
       "erklaerung": "In der Kletterhalle dürfen Kinder unter 14 nur mit einem Elternteil klettern."
      },
      {
       "situation": "Sie möchten einen Film lieber in der Originalfassung sehen, und zwar unter freiem Himmel.",
       "loesung": "f",
       "erklaerung": "Das Kino im Schlosspark zeigt Filme im Original, draußen."
      },
      {
       "situation": "Sie wollen mit Ihrer Familie einen verregneten Sonntag gemeinsam verbringen und etwas Neues ausprobieren, ohne lange Anleitungen zu lesen.",
       "loesung": "i",
       "erklaerung": "Im Spielecafé erklären Mitarbeiter die Regeln. Das Kino fällt bei Regen aus."
      },
      {
       "situation": "Sie möchten ein Instrument lernen. Wegen Ihres Schichtdienstes sind Sie oft erst ab 21 Uhr frei.",
       "loesung": "j",
       "erklaerung": "Die Musikschule unterrichtet bis 22.30 Uhr."
      },
      {
       "situation": "Sie lesen leidenschaftlich gern Krimis und möchten in einem Kurs lernen, selbst einen zu schreiben.",
       "loesung": "x",
       "erklaerung": "Im Literaturhaus gibt es nur eine Lesung, keinen Schreibkurs."
      },
      {
       "situation": "Sie möchten eigenes Geschirr herstellen, das man im Alltag benutzen und in die Spülmaschine stellen kann.",
       "loesung": "h",
       "erklaerung": "Im Töpferkurs werden die Stücke gebrannt und sind spülmaschinenfest."
      }
     ]
    },
    {
     "nr": 4,
     "art": "textwahl",
     "text": {
      "sorte": "brief",
      "quelle": "Brief",
      "titel": "Haustür und Beleuchtung in der Kastanienallee 14",
      "zeilen": [
       "Sehr geehrter Herr Brandt,",
       "ich wende mich an Sie, weil es in unserem Haus in der Kastanienallee 14 seit einigen Wochen Probleme gibt, __(1)__ ich Sie gern informieren möchte. Die Haustür schließt nicht mehr richtig, __(2)__ immer wieder fremde Personen ins Treppenhaus gelangen. Letzte Woche wurde sogar ein Fahrrad aus dem Keller gestohlen, __(3)__ Besitzer den Diebstahl inzwischen bei der Polizei angezeigt hat.",
       "Außerdem ist die Beleuchtung im Treppenhaus __(4)__ der Bauarbeiten im Erdgeschoss seit Tagen ausgefallen. Gerade ältere Bewohner haben Angst, im Dunkeln zu stürzen. Frau Ott aus dem dritten Stock sagte mir, sie __(5)__ deshalb abends nicht mehr allein aus dem Haus. Wäre die Tür rechtzeitig repariert worden, __(6)__ der Diebstahl vielleicht verhindert werden können.",
       "Ich bitte Sie daher, das Schloss so schnell wie möglich austauschen zu __(7)__. Gleichzeitig wäre es sinnvoll, im Eingangsbereich eine Lampe mit Bewegungsmelder anzubringen, __(8)__ man auch nachts sicher den Briefkasten erreicht. Je länger wir warten, __(9)__ größer wird das Risiko eines weiteren Einbruchs. Viele Nachbarn haben mich gebeten, Ihnen diese Punkte in ihrem Namen mitzuteilen.",
       "Bitte teilen Sie mir mit, bis wann ich __(10)__ rechnen kann.",
       "Mit freundlichen Grüßen",
       "Jonas Okafor"
      ]
     },
     "aufgaben": [
      {
       "frage": "Was passt in Lücke 1?",
       "luecke": 1,
       "opt": [
        "über die",
        "über das",
        "von denen"
       ],
       "loesung": 0,
       "fest": true,
       "erklaerung": "„jemanden über etwas informieren\"; Bezug auf „Probleme\" (Plural), Akkusativ: „über die\"."
      },
      {
       "frage": "Was passt in Lücke 2?",
       "luecke": 2,
       "opt": [
        "sodass",
        "damit",
        "obwohl"
       ],
       "loesung": 0,
       "fest": true,
       "erklaerung": "Folge, keine Absicht: Weil die Tür nicht schließt, kommen Fremde herein – „sodass\"."
      },
      {
       "frage": "Was passt in Lücke 3?",
       "luecke": 3,
       "opt": [
        "dessen",
        "deren",
        "dem"
       ],
       "loesung": 0,
       "fest": true,
       "erklaerung": "„das Fahrrad\" ist neutral: Genitiv-Relativpronomen „dessen\" (der Besitzer des Fahrrads)."
      },
      {
       "frage": "Was passt in Lücke 4?",
       "luecke": 4,
       "opt": [
        "infolge",
        "trotz",
        "anstatt"
       ],
       "loesung": 0,
       "fest": true,
       "erklaerung": "Die Bauarbeiten sind die Ursache: „infolge\" + Genitiv."
      },
      {
       "frage": "Was passt in Lücke 5?",
       "luecke": 5,
       "opt": [
        "gehe",
        "gehen",
        "gegangen"
       ],
       "loesung": 0,
       "fest": true,
       "erklaerung": "Indirekte Rede, 3. Person Singular („sie\"): Konjunktiv I „gehe\"."
      },
      {
       "frage": "Was passt in Lücke 6?",
       "luecke": 6,
       "opt": [
        "hätte",
        "wäre",
        "würde"
       ],
       "loesung": 0,
       "fest": true,
       "erklaerung": "Konjunktiv II der Vergangenheit im Passiv mit Modalverb: „hätte … verhindert werden können\"."
      },
      {
       "frage": "Was passt in Lücke 7?",
       "luecke": 7,
       "opt": [
        "lassen",
        "gelassen",
        "lässt"
       ],
       "loesung": 0,
       "fest": true,
       "erklaerung": "Nach „zu\" steht der Infinitiv: „austauschen zu lassen\"."
      },
      {
       "frage": "Was passt in Lücke 8?",
       "luecke": 8,
       "opt": [
        "damit",
        "um",
        "weil"
       ],
       "loesung": 0,
       "fest": true,
       "erklaerung": "Ziel mit eigenem Subjekt („man\") verlangt „damit\"; „um\" bräuchte „zu\" + Infinitiv."
      },
      {
       "frage": "Was passt in Lücke 9?",
       "luecke": 9,
       "opt": [
        "desto",
        "als",
        "wie"
       ],
       "loesung": 0,
       "fest": true,
       "erklaerung": "Zweiteiliger Konnektor „je … desto\" + Komparativ."
      },
      {
       "frage": "Was passt in Lücke 10?",
       "luecke": 10,
       "opt": [
        "damit",
        "womit",
        "dafür"
       ],
       "loesung": 0,
       "fest": true,
       "erklaerung": "„mit etwas rechnen\" im Hauptsatz: Pronominaladverb „damit\"."
      }
     ]
    },
    {
     "nr": 5,
     "art": "textwahl",
     "text": {
      "sorte": "zeitung",
      "quelle": "Zeitschrift",
      "titel": "Technik: Wenn der Lautsprecher mithört",
      "zeilen": [
       "Sie spielen Musik, schalten das Licht ein und __(1)__ Fragen zum Wetter: Digitale Sprachassistenten gehören in vielen Haushalten __(2)__ zum Alltag. Besonders ältere Menschen schätzen es, Geräte per Stimme __(3)__ zu können, statt winzige Tasten zu bedienen.",
       "Datenschützer sehen die Entwicklung __(4)__ kritisch. Damit die Geräte auf ihr Signalwort reagieren, müssen sie ständig in Bereitschaft sein. Was nach dem Signalwort gesagt wird, __(5)__ in der Regel auf den Servern der Hersteller. Dort werden die Aufnahmen ausgewertet, um die Spracherkennung zu verbessern. Viele Nutzer sind sich __(6)__ gar nicht bewusst. In Einzelfällen hören sogar Mitarbeiter der Firmen kurze Ausschnitte an, um Fehler der Software zu finden.",
       "Wer die Vorteile nutzen möchte, ohne zu viele persönliche Daten preiszugeben, kann einiges tun. In den Einstellungen lässt sich meist festlegen, __(7)__ Aufnahmen überhaupt gespeichert werden. __(8)__ haben viele Geräte eine Taste, mit der man das Mikrofon ausschalten kann. Gespräche über private Themen sollte man __(9)__ nicht in der Nähe des Lautsprechers führen.",
       "Verbraucherschützer fordern außerdem klare Regeln. Hersteller sollten verpflichtet werden, deutlich __(10)__ hinzuweisen, welche Daten sie sammeln, wie lange sie diese speichern und an wen sie weitergegeben werden."
      ]
     },
     "aufgaben": [
      {
       "frage": "Welches Wort passt in Lücke 1?",
       "luecke": 1,
       "opt": [
        "beantworten",
        "längst",
        "steuern",
        "allerdings",
        "landet",
        "dessen",
        "ob",
        "Zudem",
        "besser",
        "darauf",
        "davon",
        "weil",
        "steuert",
        "beantwortet",
        "trotz"
       ],
       "loesung": 0,
       "fest": true,
       "erklaerung": "„sich einer Sache bewusst sein\" verlangt den Genitiv: „dessen\"; „auf etwas hinweisen\": „darauf\". Nach „zu können\" steht der Infinitiv „steuern\", zu „Sie spielen … schalten\" passt nur „beantworten\". „weil\" passt nicht nach „festlegen\"."
      },
      {
       "frage": "Welches Wort passt in Lücke 2?",
       "luecke": 2,
       "opt": [
        "beantworten",
        "längst",
        "steuern",
        "allerdings",
        "landet",
        "dessen",
        "ob",
        "Zudem",
        "besser",
        "darauf",
        "davon",
        "weil",
        "steuert",
        "beantwortet",
        "trotz"
       ],
       "loesung": 1,
       "fest": true,
       "erklaerung": "Richtig ist „längst\". Jedes Wort passt nur einmal."
      },
      {
       "frage": "Welches Wort passt in Lücke 3?",
       "luecke": 3,
       "opt": [
        "beantworten",
        "längst",
        "steuern",
        "allerdings",
        "landet",
        "dessen",
        "ob",
        "Zudem",
        "besser",
        "darauf",
        "davon",
        "weil",
        "steuert",
        "beantwortet",
        "trotz"
       ],
       "loesung": 2,
       "fest": true,
       "erklaerung": "Richtig ist „steuern\". Jedes Wort passt nur einmal."
      },
      {
       "frage": "Welches Wort passt in Lücke 4?",
       "luecke": 4,
       "opt": [
        "beantworten",
        "längst",
        "steuern",
        "allerdings",
        "landet",
        "dessen",
        "ob",
        "Zudem",
        "besser",
        "darauf",
        "davon",
        "weil",
        "steuert",
        "beantwortet",
        "trotz"
       ],
       "loesung": 3,
       "fest": true,
       "erklaerung": "Richtig ist „allerdings\". Jedes Wort passt nur einmal."
      },
      {
       "frage": "Welches Wort passt in Lücke 5?",
       "luecke": 5,
       "opt": [
        "beantworten",
        "längst",
        "steuern",
        "allerdings",
        "landet",
        "dessen",
        "ob",
        "Zudem",
        "besser",
        "darauf",
        "davon",
        "weil",
        "steuert",
        "beantwortet",
        "trotz"
       ],
       "loesung": 4,
       "fest": true,
       "erklaerung": "Richtig ist „landet\". Jedes Wort passt nur einmal."
      },
      {
       "frage": "Welches Wort passt in Lücke 6?",
       "luecke": 6,
       "opt": [
        "beantworten",
        "längst",
        "steuern",
        "allerdings",
        "landet",
        "dessen",
        "ob",
        "Zudem",
        "besser",
        "darauf",
        "davon",
        "weil",
        "steuert",
        "beantwortet",
        "trotz"
       ],
       "loesung": 5,
       "fest": true,
       "erklaerung": "Richtig ist „dessen\". Jedes Wort passt nur einmal."
      },
      {
       "frage": "Welches Wort passt in Lücke 7?",
       "luecke": 7,
       "opt": [
        "beantworten",
        "längst",
        "steuern",
        "allerdings",
        "landet",
        "dessen",
        "ob",
        "Zudem",
        "besser",
        "darauf",
        "davon",
        "weil",
        "steuert",
        "beantwortet",
        "trotz"
       ],
       "loesung": 6,
       "fest": true,
       "erklaerung": "Richtig ist „ob\". Jedes Wort passt nur einmal."
      },
      {
       "frage": "Welches Wort passt in Lücke 8?",
       "luecke": 8,
       "opt": [
        "beantworten",
        "längst",
        "steuern",
        "allerdings",
        "landet",
        "dessen",
        "ob",
        "Zudem",
        "besser",
        "darauf",
        "davon",
        "weil",
        "steuert",
        "beantwortet",
        "trotz"
       ],
       "loesung": 7,
       "fest": true,
       "erklaerung": "Richtig ist „Zudem\". Jedes Wort passt nur einmal."
      },
      {
       "frage": "Welches Wort passt in Lücke 9?",
       "luecke": 9,
       "opt": [
        "beantworten",
        "längst",
        "steuern",
        "allerdings",
        "landet",
        "dessen",
        "ob",
        "Zudem",
        "besser",
        "darauf",
        "davon",
        "weil",
        "steuert",
        "beantwortet",
        "trotz"
       ],
       "loesung": 8,
       "fest": true,
       "erklaerung": "Richtig ist „besser\". Jedes Wort passt nur einmal."
      },
      {
       "frage": "Welches Wort passt in Lücke 10?",
       "luecke": 10,
       "opt": [
        "beantworten",
        "längst",
        "steuern",
        "allerdings",
        "landet",
        "dessen",
        "ob",
        "Zudem",
        "besser",
        "darauf",
        "davon",
        "weil",
        "steuert",
        "beantwortet",
        "trotz"
       ],
       "loesung": 9,
       "fest": true,
       "erklaerung": "Richtig ist „darauf\". Jedes Wort passt nur einmal."
      }
     ]
    }
   ]
  },
  {
   "id": "tb2ll2",
   "titel": "Prüfungslauf 2",
   "minuten": 90,
   "teile": [
    {
     "nr": 1,
     "art": "textwahl",
     "aufgaben": [
      {
       "frage": "Welche Überschrift passt zu Text 1?",
       "opt": [
        "Für junge Leute ist das Smartphone die wichtigste Nachrichtenquelle",
        "Sportvereine erhöhen ihre Mitgliedsbeiträge",
        "Ehrenamtliche Lesepaten machen Kinder zu besseren Lesern",
        "Grundschulen bekommen zusätzliche Lehrer",
        "Ein Sitzplatz für alle, die reden möchten",
        "Regionalzeitung erscheint nur noch digital",
        "Engagement ja – aber lieber ohne feste Verpflichtung",
        "Hochschulen führen strengere Aufnahmetests ein",
        "Stadt lässt ihre Parks sanieren",
        "Nach dem Studienabbruch in die Werkstatt"
       ],
       "loesung": 6,
       "fest": true,
       "text": {
        "sorte": "zeitung",
        "quelle": "Aus einer Wochenzeitung",
        "titel": "Text 1",
        "zeilen": [
         "Kassenwart, Schriftführer, Vorsitzender: Für solche Ämter finden viele Vereine kaum noch Freiwillige. Ein aktueller Bericht zum Ehrenamt zeigt jedoch, dass sich die Menschen keineswegs weniger engagieren als früher. Vor allem Jüngere sind durchaus bereit zu helfen – aber am liebsten zeitlich begrenzt, etwa beim Aufbau eines Stadtfests oder bei einer Spendenaktion.",
         "„Ein Amt für vier Jahre mit monatlichen Sitzungen schreckt viele ab“, sagt die Soziologin Hanna Weiß. Vereine, die Aufgaben auf mehrere Schultern verteilen und kurze Projekte anbieten, haben deutlich weniger Nachwuchssorgen. Manche Sportvereine bezahlen ihre Trainer inzwischen auch, was allerdings höhere Beiträge zur Folge haben kann. Für kleinere Vereine ist das meist keine Lösung."
        ]
       },
       "stelle": "aber am liebsten zeitlich begrenzt",
       "erklaerung": "Man engagiert sich, aber lieber kurzfristig. Höhere Beiträge sind nur eine mögliche Folge in einzelnen Vereinen."
      },
      {
       "frage": "Welche Überschrift passt zu Text 2?",
       "opt": [
        "Für junge Leute ist das Smartphone die wichtigste Nachrichtenquelle",
        "Sportvereine erhöhen ihre Mitgliedsbeiträge",
        "Ehrenamtliche Lesepaten machen Kinder zu besseren Lesern",
        "Grundschulen bekommen zusätzliche Lehrer",
        "Ein Sitzplatz für alle, die reden möchten",
        "Regionalzeitung erscheint nur noch digital",
        "Engagement ja – aber lieber ohne feste Verpflichtung",
        "Hochschulen führen strengere Aufnahmetests ein",
        "Stadt lässt ihre Parks sanieren",
        "Nach dem Studienabbruch in die Werkstatt"
       ],
       "loesung": 2,
       "fest": true,
       "text": {
        "sorte": "zeitung",
        "quelle": "Aus einer Lokalzeitung",
        "titel": "Text 2",
        "zeilen": [
         "Jeden Dienstag kommt Gisela Brandt in die Grundschule am Lindenplatz. Die 71-jährige frühere Buchhändlerin setzt sich dann mit zwei oder drei Kindern in die Schulbibliothek und liest mit ihnen – mal eine Geschichte über Piraten, mal ein Sachbuch über Dinosaurier. Sie ist eine von 35 Lesepaten, die ein Bürgerverein an Schulen in der Stadt vermittelt.",
         "Die Lehrer wählen vor allem Kinder aus, die zu Hause wenig vorgelesen bekommen oder Deutsch als Zweitsprache lernen. Nach einem Schuljahr lasen diese Schüler nach Angaben der Schulleitung deutlich flüssiger und hatten mehr Freude an Büchern. Fehlenden Unterricht können die Paten zwar nicht ersetzen, die Schule ist aber dankbar für jede Unterstützung."
        ]
       },
       "stelle": "lasen diese Schüler nach Angaben der Schulleitung deutlich flüssiger",
       "erklaerung": "Die Lesepaten verbessern das Lesen. Zusätzliche Lehrer bekommt die Schule nicht, die Paten ersetzen auch keinen Unterricht."
      },
      {
       "frage": "Welche Überschrift passt zu Text 3?",
       "opt": [
        "Für junge Leute ist das Smartphone die wichtigste Nachrichtenquelle",
        "Sportvereine erhöhen ihre Mitgliedsbeiträge",
        "Ehrenamtliche Lesepaten machen Kinder zu besseren Lesern",
        "Grundschulen bekommen zusätzliche Lehrer",
        "Ein Sitzplatz für alle, die reden möchten",
        "Regionalzeitung erscheint nur noch digital",
        "Engagement ja – aber lieber ohne feste Verpflichtung",
        "Hochschulen führen strengere Aufnahmetests ein",
        "Stadt lässt ihre Parks sanieren",
        "Nach dem Studienabbruch in die Werkstatt"
       ],
       "loesung": 9,
       "fest": true,
       "text": {
        "sorte": "zeitung",
        "quelle": "Aus einem Bildungsmagazin",
        "titel": "Text 3",
        "zeilen": [
         "Fast jeder vierte Student bricht sein Bachelorstudium ab. Für viele ist das mit einem Gefühl des Scheiterns verbunden. Die Handwerkskammer Südwest und mehrere Hochschulen wollen das ändern: Ein gemeinsames Beratungsbüro hilft Studienaussteigern, einen passenden Ausbildungsplatz zu finden.",
         "Bereits erbrachte Studienleistungen werden dabei häufig anerkannt, sodass sich die Ausbildung um bis zu ein Jahr verkürzen kann. Besonders gefragt sind die Aussteiger in technischen Berufen, etwa in der Elektro- oder Kältetechnik. „Viele Betriebe schätzen, dass die jungen Leute schon etwas älter sind und genau wissen, was sie nicht wollen“, sagt Berater Felix Hoang. Im ersten Jahr wurden über 150 junge Menschen erfolgreich vermittelt."
        ]
       },
       "stelle": "hilft Studienaussteigern, einen passenden Ausbildungsplatz zu finden",
       "erklaerung": "Studienabbrecher wechseln in eine Ausbildung. Über Aufnahmetests der Hochschulen steht nichts im Text."
      },
      {
       "frage": "Welche Überschrift passt zu Text 4?",
       "opt": [
        "Für junge Leute ist das Smartphone die wichtigste Nachrichtenquelle",
        "Sportvereine erhöhen ihre Mitgliedsbeiträge",
        "Ehrenamtliche Lesepaten machen Kinder zu besseren Lesern",
        "Grundschulen bekommen zusätzliche Lehrer",
        "Ein Sitzplatz für alle, die reden möchten",
        "Regionalzeitung erscheint nur noch digital",
        "Engagement ja – aber lieber ohne feste Verpflichtung",
        "Hochschulen führen strengere Aufnahmetests ein",
        "Stadt lässt ihre Parks sanieren",
        "Nach dem Studienabbruch in die Werkstatt"
       ],
       "loesung": 4,
       "fest": true,
       "text": {
        "sorte": "zeitung",
        "quelle": "Aus einem Stadtmagazin",
        "titel": "Text 4",
        "zeilen": [
         "Auf den ersten Blick sieht sie aus wie jede andere Parkbank. Doch ein kleines Schild verrät, wozu die gelb gestrichene Bank im Stadtpark von Rosenau gedacht ist: „Wer sich hierher setzt, freut sich über ein Gespräch.“ Die Idee stammt von einer Gruppe Studenten, die etwas gegen die wachsende Einsamkeit in der Stadt tun wollten.",
         "Inzwischen gibt es sieben solcher Bänke, unter anderem vor dem Rathaus und am Marktplatz. Nicht nur ältere Menschen nutzen sie, sondern auch Zugezogene und junge Eltern mit Kinderwagen. Viele erzählen, dass sie dort Bekanntschaften geschlossen haben. Die Stadt hat die Bänke bezahlt; für eine schon lange geplante Sanierung des Parks fehlt dagegen noch das Geld. Weitere Bänke sollen im Frühjahr in zwei Stadtteilen folgen."
        ]
       },
       "stelle": "Wer sich hierher setzt, freut sich über ein Gespräch.",
       "erklaerung": "Die Bänke sollen Gespräche gegen Einsamkeit ermöglichen. Für die Sanierung des Parks fehlt Geld."
      },
      {
       "frage": "Welche Überschrift passt zu Text 5?",
       "opt": [
        "Für junge Leute ist das Smartphone die wichtigste Nachrichtenquelle",
        "Sportvereine erhöhen ihre Mitgliedsbeiträge",
        "Ehrenamtliche Lesepaten machen Kinder zu besseren Lesern",
        "Grundschulen bekommen zusätzliche Lehrer",
        "Ein Sitzplatz für alle, die reden möchten",
        "Regionalzeitung erscheint nur noch digital",
        "Engagement ja – aber lieber ohne feste Verpflichtung",
        "Hochschulen führen strengere Aufnahmetests ein",
        "Stadt lässt ihre Parks sanieren",
        "Nach dem Studienabbruch in die Werkstatt"
       ],
       "loesung": 0,
       "fest": true,
       "text": {
        "sorte": "zeitung",
        "quelle": "Aus einer Fachzeitschrift für Medien",
        "titel": "Text 5",
        "zeilen": [
         "Fernsehen und Zeitung spielen für junge Menschen kaum noch eine Rolle, wenn es um aktuelle Nachrichten geht. Laut einer neuen Studie informieren sich drei Viertel der 16- bis 24-Jährigen hauptsächlich über soziale Netzwerke und Videoplattformen auf dem Smartphone. Dort stoßen sie oft eher zufällig auf Meldungen, zwischen Musikvideos und Werbung.",
         "Die Autoren der Studie sehen darin nicht nur Nachteile: Junge Leute seien durchaus an Politik interessiert. Schwierig sei aber, verlässliche Quellen von Falschmeldungen zu unterscheiden. Mehrere Bundesländer wollen deshalb Medienkompetenz stärker im Unterricht verankern. Einige Regionalzeitungen versuchen unterdessen, mit kurzen Videos ein jüngeres Publikum zu erreichen. Ob das gelingt, ist bisher allerdings noch offen."
        ]
       },
       "stelle": "hauptsächlich über soziale Netzwerke und Videoplattformen auf dem Smartphone",
       "erklaerung": "Junge Menschen informieren sich vor allem online. Regionalzeitungen probieren Videos aus, stellen aber nicht ganz um."
      }
     ]
    },
    {
     "nr": 2,
     "art": "textwahl",
     "text": {
      "sorte": "zeitung",
      "quelle": "Arbeit & Gesellschaft",
      "titel": "Homeoffice: Was die Forschung wirklich sagt",
      "zeilen": [
       "Kaum ein Thema wird in Unternehmen so leidenschaftlich diskutiert wie die Frage, ob Beschäftigte zu Hause genauso gut arbeiten wie im Büro. Manche Firmenchefs holen ihre Mitarbeiter inzwischen wieder an den Schreibtisch zurück, andere haben ihre Büroflächen bereits verkleinert. Die Forschung liefert dazu ein Bild, das differenzierter ist, als es die öffentliche Debatte vermuten lässt. Häufig stützen sich beide Seiten dabei eher auf Gefühle als auf Daten.",
       "Eine der bisher umfangreichsten Untersuchungen hat das Institut für Arbeitsforschung in Marlingen vorgelegt. Über zwei Jahre begleiteten die Wissenschaftler rund 1600 Angestellte eines Versicherungsunternehmens. Per Losverfahren wurde festgelegt, wer an zwei Tagen pro Woche zu Hause arbeiten durfte und wer weiterhin jeden Tag ins Büro kam. Ein solches Vorgehen ist selten, weil sich Beschäftigte in der Praxis meist selbst für oder gegen das Homeoffice entscheiden.",
       "„Bei der Leistung haben wir keinen messbaren Unterschied gefunden“, fasst Studienleiter Tobias Engel zusammen. Die Mitarbeiter mit Homeoffice-Tagen bearbeiteten genauso viele Fälle, die Fehlerquote war ähnlich, und auch die Beurteilungen durch die Vorgesetzten fielen nicht schlechter aus. Deutlich unterschied sich dagegen die Zahl der Kündigungen: In der Gruppe mit Homeoffice verließ ein Drittel weniger Menschen das Unternehmen.",
       "Vor allem Eltern und Beschäftigte mit langen Arbeitswegen schätzten die Regelung. Viele gaben an, die gewonnene Zeit für Familie, Sport oder Erholung zu nutzen. Gleichzeitig arbeiteten sie an Homeoffice-Tagen im Durchschnitt etwas länger, weil sie abends noch einmal den Laptop aufklappten. Engel sieht darin eine Gefahr: Wenn Arbeit und Freizeit verschwimmen, könne das auf Dauer zu Erschöpfung führen.",
       "Ganz ohne Nachteile ist die Arbeit von zu Hause also nicht. Besonders Berufseinsteiger profitieren nach Engels Ergebnissen vom Büro. Sie lernen viel, indem sie erfahrenen Kollegen zuhören und schnell eine Frage stellen können. Junge Mitarbeiter, die überwiegend zu Hause arbeiteten, erhielten in der Studie seltener Rückmeldungen zu ihrer Arbeit und fühlten sich häufiger allein gelassen.",
       "Auch die Vorgesetzten mussten sich umstellen. Wer seine Mitarbeiter nicht täglich sieht, kann ihre Arbeit nicht mehr nach der Anwesenheit beurteilen, sondern nur nach den Ergebnissen. Einigen Führungskräften fiel das anfangs schwer. Das Unternehmen bot deshalb Schulungen an, in denen es unter anderem darum ging, regelmäßige kurze Gespräche mit jedem Teammitglied einzuplanen.",
       "Andere Untersuchungen kommen teilweise zu anderen Ergebnissen. Wer ausschließlich zu Hause arbeitet, ist nach einigen Studien weniger produktiv als Kollegen im Büro, vor allem bei Aufgaben, die viel Abstimmung erfordern. Engel betont deshalb, dass seine Ergebnisse nur für das hybride Modell gelten, also für eine Mischung aus Büro- und Homeoffice-Tagen.",
       "Für Unternehmen empfiehlt der Forscher klare Absprachen statt starrer Regeln. Teams sollten gemeinsam festlegen, an welchen Tagen alle vor Ort sind, damit Besprechungen und die Einarbeitung neuer Kollegen nicht zu kurz kommen. Wer dagegen einfach anordne, dass alle wieder täglich ins Büro kommen müssen, riskiere, gerade gute Fachkräfte zu verlieren. Engel selbst arbeitet übrigens an drei Tagen pro Woche im Institut."
      ]
     },
     "aufgaben": [
      {
       "frage": "Was war das Besondere an der Studie aus Marlingen?",
       "opt": [
        "Wer zu Hause arbeiten durfte, wurde ausgelost.",
        "Die Beschäftigten konnten selbst wählen, ob sie zu Hause arbeiten.",
        "Alle Teilnehmer arbeiteten zwei Jahre lang nur zu Hause."
       ],
       "loesung": 0,
       "stelle": "Per Losverfahren wurde festgelegt",
       "erklaerung": "Selbst wählen ist der Normalfall in der Praxis – genau das war hier nicht so."
      },
      {
       "frage": "Worin unterschieden sich die beiden Gruppen deutlich?",
       "opt": [
        "In der Zahl der bearbeiteten Fälle.",
        "In der Zahl der Kündigungen.",
        "In der Beurteilung durch die Vorgesetzten."
       ],
       "loesung": 1,
       "stelle": "Deutlich unterschied sich dagegen die Zahl der Kündigungen",
       "erklaerung": "Bei Fällen und Beurteilungen gab es keinen Unterschied, nur bei den Kündigungen."
      },
      {
       "frage": "Welche Gefahr sieht Engel beim Homeoffice?",
       "opt": [
        "Die Beschäftigten arbeiten insgesamt weniger.",
        "Die Beschäftigten haben weniger Zeit für Familie und Sport.",
        "Die Grenze zwischen Arbeit und Freizeit verschwimmt."
       ],
       "loesung": 2,
       "stelle": "Wenn Arbeit und Freizeit verschwimmen",
       "erklaerung": "Sie arbeiteten sogar etwas länger und gewannen Zeit für Familie und Sport."
      },
      {
       "frage": "Was gilt laut Studie für Berufseinsteiger?",
       "opt": [
        "Sie lernen im Büro viel von erfahrenen Kollegen.",
        "Sie bekommen zu Hause mehr Rückmeldungen zu ihrer Arbeit.",
        "Sie möchten am liebsten nur zu Hause arbeiten."
       ],
       "loesung": 0,
       "stelle": "Besonders Berufseinsteiger profitieren nach Engels Ergebnissen vom Büro",
       "erklaerung": "Zu Hause erhielten junge Mitarbeiter seltener Rückmeldungen, nicht häufiger."
      },
      {
       "frage": "Was empfiehlt Engel den Unternehmen?",
       "opt": [
        "Alle Mitarbeiter sollten wieder täglich ins Büro kommen.",
        "Jeder sollte allein entscheiden, wann er im Büro ist.",
        "Teams sollten gemeinsame Bürotage vereinbaren."
       ],
       "loesung": 2,
       "stelle": "Teams sollten gemeinsam festlegen, an welchen Tagen alle vor Ort sind",
       "erklaerung": "Er rät zu Absprachen im Team; eine Pflicht zum täglichen Büro hält er für riskant."
      }
     ]
    },
    {
     "nr": 3,
     "art": "anzeigenX",
     "anzeigen": [
      {
       "b": "a",
       "quelle": "Physiotherapie Bewegungsraum",
       "zeilen": [
        "Rückenschule in Kleingruppen",
        "Von vielen Krankenkassen bezuschusst",
        "Abendtermine ab 18 Uhr"
       ]
      },
      {
       "b": "b",
       "quelle": "Ernährungsberatung Dr. Anke Moll",
       "zeilen": [
        "Individuelle Beratung bei Diabetes, Bluthochdruck und Übergewicht",
        "Mit ärztlicher Verordnung übernimmt die Krankenkasse einen Teil der Kosten"
       ]
      },
      {
       "b": "c",
       "quelle": "Sozialdienst Neustadt",
       "zeilen": [
        "Schuldnerberatung: vertraulich und kostenlos",
        "Hilfe im Umgang mit Gläubigern und beim Haushaltsplan",
        "Wartezeit derzeit etwa vier Wochen"
       ]
      },
      {
       "b": "d",
       "quelle": "Selbsthilfegruppe Tinnitus",
       "zeilen": [
        "Austausch unter Betroffenen",
        "Jeden zweiten Montag im Monat, 19 Uhr",
        "Neue Mitglieder herzlich willkommen"
       ]
      },
      {
       "b": "e",
       "quelle": "Zahnärztlicher Notdienst",
       "zeilen": [
        "An Wochenenden und Feiertagen",
        "Unter der zentralen Rufnummer erfahren Sie, welche Zahnarztpraxis Dienst hat"
       ]
      },
      {
       "b": "f",
       "quelle": "Familienberatung Lichtblick",
       "zeilen": [
        "Unterstützung bei Erziehungsfragen, Streit in der Familie und Trennung",
        "Termine auch kurzfristig",
        "Kostenlos und auf Wunsch anonym"
       ]
      },
      {
       "b": "g",
       "quelle": "Gesundheitsamt Oststadt",
       "zeilen": [
        "Nichtraucherkurs „Endlich frei\"",
        "Sechs Abende in der Gruppe",
        "Bei regelmäßiger Teilnahme erstattet die Krankenkasse bis zu 80 Prozent"
       ]
      },
      {
       "b": "h",
       "quelle": "Online-Beratung Zuhören",
       "zeilen": [
        "Sie haben Sorgen und niemanden zum Reden?",
        "Anonym per Chat, täglich 18–23 Uhr",
        "Kein Ersatz für eine Therapie"
       ]
      },
      {
       "b": "i",
       "quelle": "Hebammenpraxis Mondschein",
       "zeilen": [
        "Yoga für Schwangere",
        "Sanfte Übungen zur Geburtsvorbereitung",
        "Ab der 12. Schwangerschaftswoche"
       ]
      },
      {
       "b": "j",
       "quelle": "Pflegestützpunkt Kreis Talau",
       "zeilen": [
        "Wir beraten Angehörige zu Pflegegrad, Leistungen der Pflegekasse und Entlastungsangeboten",
        "Auf Wunsch Hausbesuch"
       ]
      },
      {
       "b": "k",
       "quelle": "Sportstudio Aktivpunkt",
       "zeilen": [
        "Gerätetraining mit persönlichem Trainingsplan",
        "Probetraining kostenlos",
        "Vertragslaufzeit mindestens zwölf Monate"
       ]
      },
      {
       "b": "l",
       "quelle": "Augenoptik Klarblick",
       "zeilen": [
        "Sehtest für den Führerschein",
        "Mit Bescheinigung für die Fahrerlaubnisbehörde",
        "Ohne Termin während der Öffnungszeiten"
       ]
      }
     ],
     "aufgaben": [
      {
       "situation": "Ihr Vater braucht seit einem Schlaganfall Hilfe im Alltag. Sie wissen nicht, welche Unterstützung ihm zusteht.",
       "loesung": "j",
       "erklaerung": "Der Pflegestützpunkt berät Angehörige zu Pflegegrad und Leistungen."
      },
      {
       "situation": "Sie rauchen seit zwanzig Jahren und wollen endlich aufhören, am liebsten gemeinsam mit anderen und möglichst günstig.",
       "loesung": "g",
       "erklaerung": "Der Nichtraucherkurs läuft in der Gruppe, die Kasse erstattet einen Großteil."
      },
      {
       "situation": "Durch das viele Sitzen im Büro haben Sie ständig Rückenschmerzen und möchten nach Feierabend in einer kleinen Gruppe gezielt etwas dagegen tun.",
       "loesung": "a",
       "erklaerung": "Die Rückenschule hat Abendtermine. Das Sportstudio bindet für ein Jahr und ist nicht auf den Rücken spezialisiert."
      },
      {
       "situation": "Am Sonntagabend bekommen Sie plötzlich starke Ohrenschmerzen und suchen einen Arzt, der Dienst hat.",
       "loesung": "x",
       "erklaerung": "Der Notdienst e ist nur für Zähne, die Tinnitus-Gruppe ist keine ärztliche Hilfe."
      },
      {
       "situation": "Ihr Arzt hat bei Ihnen Diabetes festgestellt und Ihnen geraten, Ihre Ernährung umzustellen.",
       "loesung": "b",
       "erklaerung": "Die Ernährungsberatung ist auf Diabetes spezialisiert."
      },
      {
       "situation": "Sie haben Ihre Arbeit verloren und können die Raten für Ihren Kredit nicht mehr bezahlen.",
       "loesung": "c",
       "erklaerung": "Die Schuldnerberatung hilft im Umgang mit Gläubigern, kostenlos."
      },
      {
       "situation": "Sie hören seit Monaten ein Pfeifen im Ohr und möchten sich mit Menschen austauschen, denen es ähnlich geht.",
       "loesung": "d",
       "erklaerung": "Die Selbsthilfegruppe Tinnitus ist für genau diesen Austausch da."
      },
      {
       "situation": "Ihr Sohn ist in der Pubertät, es gibt ständig Streit. Sie möchten möglichst bald mit einer Fachperson sprechen, ohne Ihren Namen zu nennen.",
       "loesung": "f",
       "erklaerung": "Die Familienberatung hilft bei Streit, kurzfristig und anonym."
      },
      {
       "situation": "Sie ziehen in zwei Monaten ins Ausland und möchten bis dahin unter Anleitung an Geräten trainieren.",
       "loesung": "x",
       "erklaerung": "Das Sportstudio verlangt mindestens zwölf Monate Vertragslaufzeit."
      },
      {
       "situation": "Sie sind im vierten Monat schwanger und möchten sich mit leichten Übungen auf die Geburt vorbereiten.",
       "loesung": "i",
       "erklaerung": "Schwangeren-Yoga ist ab der 12. Woche möglich, also passt der vierte Monat."
      }
     ]
    },
    {
     "nr": 4,
     "art": "textwahl",
     "text": {
      "sorte": "email",
      "quelle": "E-Mail",
      "titel": "Absage für Donnerstag – zwei neue Terminvorschläge",
      "zeilen": [
       "Sehr geehrte Frau Dr. Petersen,",
       "vielen Dank für Ihre Einladung zum Abstimmungsgespräch am Donnerstag, dem 14. November. Leider muss ich den Termin absagen, __(1)__ ich an diesem Tag kurzfristig zu einem Kunden nach Hamburg reisen muss. Ich hätte Ihnen gern früher Bescheid __(2)__, aber die Reise wurde erst heute Morgen bestätigt.",
       "Selbstverständlich möchte ich Ihnen gleich einen neuen Termin vorschlagen. Ich hätte entweder am Montag, dem 18. November, ab 10 Uhr Zeit __(3)__ am Dienstag, dem 19. November, im Anschluss an unsere Teamsitzung, __(4)__ Ende ich leider nicht genau vorhersagen kann. Sollte keiner der beiden Termine passen, __(5)__ ich Sie, mir einen anderen Vorschlag zu machen.",
       "__(6)__ meiner Abwesenheit können Sie sich bei Fragen jederzeit an meinen Kollegen Herrn Aydın wenden. Er kennt alle Unterlagen, __(7)__ wir beim letzten Treffen gesprochen haben. Die von Ihnen __(8)__ Änderungen am Zeitplan habe ich bereits eingearbeitet. Der überarbeitete Entwurf soll Ihnen noch vor unserem Gespräch __(9)__ werden, damit Sie genug Zeit haben, ihn in Ruhe zu prüfen.",
       "Ich entschuldige mich noch einmal für die Umstände und bedanke mich im Voraus __(10)__, dass Sie Verständnis für die kurzfristige Absage haben.",
       "Mit freundlichen Grüßen",
       "Lena Hartwig"
      ]
     },
     "aufgaben": [
      {
       "frage": "Was passt in Lücke 1?",
       "luecke": 1,
       "opt": [
        "da",
        "denn",
        "deshalb"
       ],
       "loesung": 0,
       "fest": true,
       "erklaerung": "Das Verb steht am Satzende („reisen muss\"), also braucht man die Konjunktion „da\"; nach „denn\" stünde das Verb an Position 2."
      },
      {
       "frage": "Was passt in Lücke 2?",
       "luecke": 2,
       "opt": [
        "gegeben",
        "geben",
        "gab"
       ],
       "loesung": 0,
       "fest": true,
       "erklaerung": "Konjunktiv II der Vergangenheit: „hätte … Bescheid gegeben\"."
      },
      {
       "frage": "Was passt in Lücke 3?",
       "luecke": 3,
       "opt": [
        "oder",
        "noch",
        "als auch"
       ],
       "loesung": 0,
       "fest": true,
       "erklaerung": "Zweiteiliger Konnektor „entweder … oder\"."
      },
      {
       "frage": "Was passt in Lücke 4?",
       "luecke": 4,
       "opt": [
        "deren",
        "dessen",
        "derer"
       ],
       "loesung": 0,
       "fest": true,
       "erklaerung": "„die Teamsitzung\" ist feminin: Genitiv-Relativpronomen „deren\" (das Ende der Sitzung)."
      },
      {
       "frage": "Was passt in Lücke 5?",
       "luecke": 5,
       "opt": [
        "bitte",
        "würde",
        "hätte"
       ],
       "loesung": 0,
       "fest": true,
       "erklaerung": "Nach dem Bedingungssatz folgt das Verb des Hauptsatzes: „bitte ich Sie\"; „würde\" und „hätte\" brauchen ein zweites Verb."
      },
      {
       "frage": "Was passt in Lücke 6?",
       "luecke": 6,
       "opt": [
        "Während",
        "Seit",
        "Statt"
       ],
       "loesung": 0,
       "fest": true,
       "erklaerung": "Zeitraum mit Genitiv („meiner Abwesenheit\"): „während\"."
      },
      {
       "frage": "Was passt in Lücke 7?",
       "luecke": 7,
       "opt": [
        "über die",
        "worüber",
        "darüber"
       ],
       "loesung": 0,
       "fest": true,
       "erklaerung": "„über etwas sprechen\"; Bezug auf das Nomen „Unterlagen\" (Plural): Präposition + Relativpronomen „über die\"."
      },
      {
       "frage": "Was passt in Lücke 8?",
       "luecke": 8,
       "opt": [
        "gewünschten",
        "gewünschte",
        "wünschenden"
       ],
       "loesung": 0,
       "fest": true,
       "erklaerung": "Partizip II als Adjektiv („Sie haben die Änderungen gewünscht\"); nach „die\" im Plural: Endung -en."
      },
      {
       "frage": "Was passt in Lücke 9?",
       "luecke": 9,
       "opt": [
        "zugeschickt",
        "zuschicken",
        "zugeschickten"
       ],
       "loesung": 0,
       "fest": true,
       "erklaerung": "Passiv mit Modalverb: „soll … zugeschickt werden\"."
      },
      {
       "frage": "Was passt in Lücke 10?",
       "luecke": 10,
       "opt": [
        "dafür",
        "wofür",
        "darauf"
       ],
       "loesung": 0,
       "fest": true,
       "erklaerung": "„sich für etwas bedanken\" + dass-Satz: Pronominaladverb „dafür\"."
      }
     ]
    },
    {
     "nr": 5,
     "art": "textwahl",
     "text": {
      "sorte": "zeitung",
      "quelle": "Zeitschrift",
      "titel": "Gesundheit: Warum langes Sitzen schadet",
      "zeilen": [
       "Acht Stunden am Schreibtisch, danach eine Stunde im Auto und abends auf dem Sofa: Viele Menschen __(1)__ den größten Teil des Tages im Sitzen. Mediziner __(2)__ seit Jahren vor den Folgen. Wer sich zu wenig bewegt, __(3)__ häufiger an Rückenschmerzen, Übergewicht und Herz-Kreislauf-Erkrankungen.",
       "Ein Ausgleich am Abend reicht offenbar nicht aus. Selbst wer zweimal pro Woche joggt, kann die Nachteile langer Sitzphasen __(4)__ ausgleichen. Entscheidend ist vielmehr, das Sitzen regelmäßig zu unterbrechen. Fachleute __(5)__, mindestens einmal pro Stunde aufzustehen und sich ein paar Minuten zu bewegen.",
       "Im Büro lässt sich das leichter __(6)__, als viele denken. Telefonate kann man im Stehen führen, und statt einer Kollegin eine kurze E-Mail zu schreiben, geht man __(7)__ zu ihr ins Nachbarbüro. __(8)__ stellen manche Unternehmen ihren Mitarbeitern höhenverstellbare Schreibtische zur __(9)__. Wichtig ist dabei, die Haltung immer wieder zu __(10)__, denn auch stundenlanges Stehen belastet den Körper.",
       "Wer diese Tipps beherzigt, tut nicht nur seinem Rücken etwas Gutes, sondern auch seinem Kreislauf und seinen Gelenken. Viele berichten auch, dass sie sich nach kurzen Bewegungspausen besser konzentrieren können und am Abend deutlich weniger erschöpft nach Hause kommen."
      ]
     },
     "aufgaben": [
      {
       "frage": "Welches Wort passt in Lücke 1?",
       "luecke": 1,
       "opt": [
        "verbringen",
        "warnen",
        "leidet",
        "kaum",
        "empfehlen",
        "umsetzen",
        "einfach",
        "Zudem",
        "Verfügung",
        "wechseln",
        "Bezug",
        "leiden",
        "warnt",
        "obwohl",
        "aufgrund"
       ],
       "loesung": 0,
       "fest": true,
       "erklaerung": "„Mediziner\" ist Plural („warnen\"), „wer\" verlangt die 3. Person Singular („leidet\"). Feste Verbindung „zur Verfügung stellen\" – „Bezug\" ist maskulin und gehört zu „Bezug nehmen\". „aufgrund\" und „obwohl\" passen in keine Lücke."
      },
      {
       "frage": "Welches Wort passt in Lücke 2?",
       "luecke": 2,
       "opt": [
        "verbringen",
        "warnen",
        "leidet",
        "kaum",
        "empfehlen",
        "umsetzen",
        "einfach",
        "Zudem",
        "Verfügung",
        "wechseln",
        "Bezug",
        "leiden",
        "warnt",
        "obwohl",
        "aufgrund"
       ],
       "loesung": 1,
       "fest": true,
       "erklaerung": "Richtig ist „warnen\". Jedes Wort passt nur einmal."
      },
      {
       "frage": "Welches Wort passt in Lücke 3?",
       "luecke": 3,
       "opt": [
        "verbringen",
        "warnen",
        "leidet",
        "kaum",
        "empfehlen",
        "umsetzen",
        "einfach",
        "Zudem",
        "Verfügung",
        "wechseln",
        "Bezug",
        "leiden",
        "warnt",
        "obwohl",
        "aufgrund"
       ],
       "loesung": 2,
       "fest": true,
       "erklaerung": "Richtig ist „leidet\". Jedes Wort passt nur einmal."
      },
      {
       "frage": "Welches Wort passt in Lücke 4?",
       "luecke": 4,
       "opt": [
        "verbringen",
        "warnen",
        "leidet",
        "kaum",
        "empfehlen",
        "umsetzen",
        "einfach",
        "Zudem",
        "Verfügung",
        "wechseln",
        "Bezug",
        "leiden",
        "warnt",
        "obwohl",
        "aufgrund"
       ],
       "loesung": 3,
       "fest": true,
       "erklaerung": "Richtig ist „kaum\". Jedes Wort passt nur einmal."
      },
      {
       "frage": "Welches Wort passt in Lücke 5?",
       "luecke": 5,
       "opt": [
        "verbringen",
        "warnen",
        "leidet",
        "kaum",
        "empfehlen",
        "umsetzen",
        "einfach",
        "Zudem",
        "Verfügung",
        "wechseln",
        "Bezug",
        "leiden",
        "warnt",
        "obwohl",
        "aufgrund"
       ],
       "loesung": 4,
       "fest": true,
       "erklaerung": "Richtig ist „empfehlen\". Jedes Wort passt nur einmal."
      },
      {
       "frage": "Welches Wort passt in Lücke 6?",
       "luecke": 6,
       "opt": [
        "verbringen",
        "warnen",
        "leidet",
        "kaum",
        "empfehlen",
        "umsetzen",
        "einfach",
        "Zudem",
        "Verfügung",
        "wechseln",
        "Bezug",
        "leiden",
        "warnt",
        "obwohl",
        "aufgrund"
       ],
       "loesung": 5,
       "fest": true,
       "erklaerung": "Richtig ist „umsetzen\". Jedes Wort passt nur einmal."
      },
      {
       "frage": "Welches Wort passt in Lücke 7?",
       "luecke": 7,
       "opt": [
        "verbringen",
        "warnen",
        "leidet",
        "kaum",
        "empfehlen",
        "umsetzen",
        "einfach",
        "Zudem",
        "Verfügung",
        "wechseln",
        "Bezug",
        "leiden",
        "warnt",
        "obwohl",
        "aufgrund"
       ],
       "loesung": 6,
       "fest": true,
       "erklaerung": "Richtig ist „einfach\". Jedes Wort passt nur einmal."
      },
      {
       "frage": "Welches Wort passt in Lücke 8?",
       "luecke": 8,
       "opt": [
        "verbringen",
        "warnen",
        "leidet",
        "kaum",
        "empfehlen",
        "umsetzen",
        "einfach",
        "Zudem",
        "Verfügung",
        "wechseln",
        "Bezug",
        "leiden",
        "warnt",
        "obwohl",
        "aufgrund"
       ],
       "loesung": 7,
       "fest": true,
       "erklaerung": "Richtig ist „Zudem\". Jedes Wort passt nur einmal."
      },
      {
       "frage": "Welches Wort passt in Lücke 9?",
       "luecke": 9,
       "opt": [
        "verbringen",
        "warnen",
        "leidet",
        "kaum",
        "empfehlen",
        "umsetzen",
        "einfach",
        "Zudem",
        "Verfügung",
        "wechseln",
        "Bezug",
        "leiden",
        "warnt",
        "obwohl",
        "aufgrund"
       ],
       "loesung": 8,
       "fest": true,
       "erklaerung": "Richtig ist „Verfügung\". Jedes Wort passt nur einmal."
      },
      {
       "frage": "Welches Wort passt in Lücke 10?",
       "luecke": 10,
       "opt": [
        "verbringen",
        "warnen",
        "leidet",
        "kaum",
        "empfehlen",
        "umsetzen",
        "einfach",
        "Zudem",
        "Verfügung",
        "wechseln",
        "Bezug",
        "leiden",
        "warnt",
        "obwohl",
        "aufgrund"
       ],
       "loesung": 9,
       "fest": true,
       "erklaerung": "Richtig ist „wechseln\". Jedes Wort passt nur einmal."
      }
     ]
    }
   ]
  }
 ]
};
