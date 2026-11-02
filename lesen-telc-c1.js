/* ============================================================
   deutschoderwas club — LESEN + SPRACHBAUSTEINE telc Deutsch C1

   Aufbau nach dem offiziellen telc-Format (telc „Tipps zur
   Prüfungsvorbereitung", Übungstest 1 Deutsch C1, geprüft 02.11.2026).
   Alle Texte und Aufgaben eigene, nur das Format ist nachgebaut.
   Erzeugt aus scratchpad/telcc1g mit bau.js.
   ============================================================ */

window.LESEN_TELC_C1 = {
 "niveau": "telcC1",
 "pruefung": "telc Deutsch C1",
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
   "id": "tg1l1",
   "stufe": 1,
   "titel": "Texte zusammenhalten: Verweiswörter und Konnektoren",
   "kurz": "Wer sich auf wen bezieht und wie Sätze logisch verbunden sind",
   "ziel": "Nach diesem Block erkennst du, worauf Verweiswörter zurückgreifen, und wählst den Konnektor, der die Logik zwischen zwei Aussagen genau trifft.",
   "zeichen": "🔗",
   "farbe": "turq",
   "aufgaben": [
    {
     "art": "wahl",
     "frage": "„Die Familie zog in die Wohnung ein, … die Heizung noch nicht repariert war.\" Welcher Konnektor passt? (Einräumung)",
     "opt": [
      "obgleich",
      "zumal",
      "sofern"
     ],
     "loesung": 0,
     "erklaerung": "„obgleich\" = obwohl: Trotz kaputter Heizung zog die Familie ein."
    },
    {
     "art": "wahl",
     "frage": "„Der Umzug wird teuer, … wir auch noch neue Möbel brauchen.\" Welcher Konnektor passt? (ein Grund, der die Aussage noch verstärkt)",
     "opt": [
      "zumal",
      "obwohl",
      "sofern"
     ],
     "loesung": 0,
     "erklaerung": "„zumal\" fügt einen zusätzlichen, verstärkenden Grund an."
    },
    {
     "art": "wahl",
     "frage": "„Der Vertrag wird verlängert, … die Probezeit erfolgreich verläuft.\" Welcher Konnektor passt? (Bedingung)",
     "opt": [
      "zumal",
      "sofern",
      "wohingegen"
     ],
     "loesung": 1,
     "erklaerung": "„sofern\" = unter der Bedingung, dass."
    },
    {
     "art": "wahl",
     "frage": "„Im Vertrieb stiegen die Umsätze deutlich, … die Produktion kaum zulegte.\" Welcher Konnektor passt? (Gegensatz)",
     "opt": [
      "sodass",
      "indem",
      "wohingegen"
     ],
     "loesung": 2,
     "erklaerung": "„wohingegen\" stellt zwei Abteilungen gegenüber."
    },
    {
     "art": "wahl",
     "frage": "„Die Kollegen räumten nach der Feier die Küche auf. … hörten sie laut Musik.\" Welches Verweiswort passt? (gleichzeitig)",
     "opt": [
      "Darauf",
      "Davon",
      "Dabei"
     ],
     "loesung": 2,
     "erklaerung": "„dabei\" = während sie aufräumten."
    },
    {
     "art": "wahl",
     "frage": "„Herr Kowalski und Frau Brenner sehen das neue Schichtsystem unterschiedlich. Während Ersterer es lobt, äußert sich … skeptisch.\" Wer ist gemeint?",
     "opt": [
      "beide gemeinsam",
      "Letztere, also Frau Brenner",
      "Ersterer, also Herr Kowalski"
     ],
     "loesung": 1,
     "erklaerung": "„Letztere\" verweist auf die zuletzt genannte Person, hier Frau Brenner."
    },
    {
     "art": "wahl",
     "frage": "„Viele Pendler sind jeden Tag über eine Stunde unterwegs. … Belastung wird oft unterschätzt.\" Was passt?",
     "opt": [
      "Dieses",
      "Dieser",
      "Diese"
     ],
     "loesung": 2,
     "erklaerung": "„die Belastung\" ist feminin: „diese Belastung\" fasst den Satz davor zusammen."
    },
    {
     "art": "wahl",
     "frage": "„Der Zug fiel aus; … kam ich zu spät zum Vorstellungsgespräch.\" Was passt? (Folge)",
     "opt": [
      "hingegen",
      "zwar",
      "folglich"
     ],
     "loesung": 2,
     "erklaerung": "„folglich\" leitet die Konsequenz aus dem Zugausfall ein."
    },
    {
     "art": "wahl",
     "frage": "„Das Angebot ist … günstig, als die Lieferung bereits im Preis enthalten ist.\" Was passt?",
     "opt": [
      "sofern",
      "insofern",
      "zumal"
     ],
     "loesung": 1,
     "erklaerung": "„insofern …, als\" = in dem Maße, wie; schränkt die Aussage auf einen Grund ein."
    },
    {
     "art": "wahl",
     "frage": "„Zwar ist die Wohnung klein, … liegt sie sehr zentral.\" Was passt?",
     "opt": [
      "doch",
      "sondern",
      "denn"
     ],
     "loesung": 0,
     "erklaerung": "„zwar … doch/aber\" räumt etwas ein und setzt einen Gegenpunkt."
    }
   ]
  },
  {
   "id": "tg1l2",
   "stufe": 1,
   "titel": "Richtig, falsch oder steht nicht im Text?",
   "kurz": "Widerspruch und Lücke sauber auseinanderhalten",
   "ziel": "Nach diesem Block unterscheidest du sicher, ob der Text einer Aussage widerspricht oder zu ihr einfach nichts sagt.",
   "zeichen": "⚖️",
   "farbe": "gold",
   "aufgaben": [
    {
     "art": "wahl",
     "frage": "Text: „Das Stadtfest wird ausschließlich von örtlichen Firmen finanziert.\" Aussage: „Die Stadt bezahlt einen Teil des Festes.\"",
     "opt": [
      "richtig",
      "falsch",
      "steht nicht im Text"
     ],
     "loesung": 1,
     "erklaerung": "„ausschließlich von Firmen\" schließt Geld der Stadt aus: Widerspruch, also falsch."
    },
    {
     "art": "wahl",
     "frage": "Text: „Die Kursteilnehmer trafen sich am Morgen am Bahnhof und fuhren anschließend gemeinsam zur Baustelle.\" Aussage: „Die Kursteilnehmer fuhren zusammen zur Baustelle.\"",
     "opt": [
      "richtig",
      "falsch",
      "steht nicht im Text"
     ],
     "loesung": 0,
     "erklaerung": "„gemeinsam\" = zusammen: Das ist mit anderen Worten dasselbe."
    },
    {
     "art": "wahl",
     "frage": "Text: „Die Kursteilnehmer trafen sich am Morgen am Bahnhof und fuhren anschließend gemeinsam zur Baustelle.\" Aussage: „Alle Kursteilnehmer waren Auszubildende.\"",
     "opt": [
      "richtig",
      "falsch",
      "steht nicht im Text"
     ],
     "loesung": 2,
     "erklaerung": "Wer die Teilnehmer waren, sagt der Text nicht."
    },
    {
     "art": "wahl",
     "frage": "Text: „Kritiker halten den neuen Busfahrplan für zu kompliziert, um ihn im Alltag zu nutzen.\" Aussage: „Nach Meinung der Kritiker ist der Fahrplan leicht zu verstehen.\"",
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
     "frage": "Text: „Bislang ist kaum untersucht, wie sich die Viertagewoche auf kleine Betriebe auswirkt.\" Aussage: „In kleinen Betrieben ist die Viertagewoche weniger erfolgreich.\"",
     "opt": [
      "richtig",
      "falsch",
      "steht nicht im Text"
     ],
     "loesung": 2,
     "erklaerung": "Der Text nennt nur eine Wissenslücke, kein Ergebnis zu kleinen Betrieben."
    },
    {
     "art": "wahl",
     "frage": "Text: „Nicht der Preis, sondern die Lage war für die meisten Käufer entscheidend.\" Aussage: „Wichtiger als der Preis war den meisten Käufern die Lage.\"",
     "opt": [
      "richtig",
      "falsch",
      "steht nicht im Text"
     ],
     "loesung": 0,
     "erklaerung": "„nicht der Preis, sondern die Lage\" wird nur umformuliert."
    },
    {
     "art": "wahl",
     "frage": "Text: „Die Teilnahme an der Schulung ist freiwillig, wird aber dringend empfohlen.\" Aussage: „Alle Mitarbeiter müssen an der Schulung teilnehmen.\"",
     "opt": [
      "richtig",
      "falsch",
      "steht nicht im Text"
     ],
     "loesung": 1,
     "erklaerung": "„freiwillig\" widerspricht „müssen\"; „empfohlen\" ist keine Pflicht."
    },
    {
     "art": "wahl",
     "frage": "Text: „Der Geschäftsführer räumt ein, dass die Umstellung nicht reibungslos verlaufen ist.\" Aussage: „Der Geschäftsführer gibt zu, dass es bei der Umstellung Probleme gab.\"",
     "opt": [
      "richtig",
      "falsch",
      "steht nicht im Text"
     ],
     "loesung": 0,
     "erklaerung": "„einräumen\" = zugeben; „nicht reibungslos\" = mit Problemen."
    },
    {
     "art": "wahl",
     "frage": "Text: „Das Carsharing-Angebot wurde im vergangenen Jahr in zwölf Stadtteilen getestet.\" Aussage: „Das Angebot soll künftig in der ganzen Stadt eingeführt werden.\"",
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
     "frage": "Text: „Weniger als die Hälfte der Befragten kauft regelmäßig auf Wochenmärkten ein.\" Aussage: „Die Mehrheit der Befragten kauft regelmäßig auf Wochenmärkten ein.\"",
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
   "id": "tg1l3",
   "stufe": 2,
   "titel": "Gehobene Schriftsprache: Nominalstil und Passiv",
   "kurz": "Nebensätze verdichten, Handelnde in den Hintergrund rücken",
   "ziel": "Nach diesem Block formst du Nebensätze in Nominalgruppen um und erkennst Passiv, Passiversatz und Partizipialattribute in Berichten, Ratgebern und Behördentexten.",
   "zeichen": "🔬",
   "farbe": "rot",
   "aufgaben": [
    {
     "art": "wahl",
     "frage": "Nominalstil: „Nachdem die Unterlagen geprüft worden waren, …\"",
     "opt": [
      "Nach der Unterlagen Prüfung …",
      "Nach Prüfung der Unterlagen …",
      "Nach Prüfen den Unterlagen …"
     ],
     "loesung": 1,
     "erklaerung": "Verb → Nomen (prüfen → Prüfung), Objekt → Genitivattribut."
    },
    {
     "art": "wahl",
     "frage": "Nominalstil: „Weil die Mieten gestiegen sind, …\"",
     "opt": [
      "Aufgrund dem Anstieg der Mieten …",
      "Aufgrund des Anstiegs der Mieten …",
      "Wegen die Mieten steigen …"
     ],
     "loesung": 1,
     "erklaerung": "„aufgrund\" verlangt den Genitiv: „des Anstiegs\"."
    },
    {
     "art": "wahl",
     "frage": "Nominalstil: „Wenn man die Hausordnung nicht beachtet, …\"",
     "opt": [
      "Bei Nichtbeachtung der Hausordnung …",
      "Mit Nichtbeachten von Hausordnung …",
      "Durch die Hausordnung Nichtbeachtung …"
     ],
     "loesung": 0,
     "erklaerung": "Bedingung „wenn\" → „bei\" + Nomen."
    },
    {
     "art": "wahl",
     "frage": "Passiv Perfekt: „Man hat die neuen Tarife bereits veröffentlicht.\"",
     "opt": [
      "Die neuen Tarife haben bereits veröffentlicht worden.",
      "Die neuen Tarife sind bereits veröffentlicht geworden.",
      "Die neuen Tarife sind bereits veröffentlicht worden."
     ],
     "loesung": 2,
     "erklaerung": "Passiv Perfekt: „sein\" + Partizip II + „worden\" (nicht „geworden\")."
    },
    {
     "art": "wahl",
     "frage": "Passiv mit Modalverb: „Man muss den Antrag bis Freitag einreichen.\"",
     "opt": [
      "Der Antrag wird bis Freitag eingereicht müssen.",
      "Der Antrag muss bis Freitag einreichen werden.",
      "Der Antrag muss bis Freitag eingereicht werden."
     ],
     "loesung": 2,
     "erklaerung": "Modalverb + Partizip II + „werden\"."
    },
    {
     "art": "wahl",
     "frage": "Passiversatz: „Der Schaden kann nicht repariert werden.\" = Der Schaden …",
     "opt": [
      "ist nicht zu reparieren.",
      "hat nicht zu reparieren.",
      "ist nicht reparierend."
     ],
     "loesung": 0,
     "erklaerung": "„sein + zu + Infinitiv\" = Passiv mit „können\" oder „müssen\"."
    },
    {
     "art": "wahl",
     "frage": "Passiversatz: „Die Kosten können kaum vorhergesagt werden.\" = Die Kosten sind kaum …",
     "opt": [
      "vorhergesagbar.",
      "vorhersagend.",
      "vorhersagbar."
     ],
     "loesung": 2,
     "erklaerung": "Verbstamm + „-bar\" = kann … werden."
    },
    {
     "art": "wahl",
     "frage": "Partizipialattribut: „der Vertrag, der im Jahr zuvor abgeschlossen worden war\" = …",
     "opt": [
      "der im Jahr zuvor abgeschlossene Vertrag",
      "der im Jahr zuvor abschließende Vertrag",
      "der im Jahr zuvor abgeschlossenen Vertrag"
     ],
     "loesung": 0,
     "erklaerung": "Passiv und abgeschlossen → Partizip II; Nominativ Singular nach „der\": Endung -e."
    },
    {
     "art": "wahl",
     "frage": "Was bedeutet „die zu zahlenden Gebühren\"?",
     "opt": [
      "die Gebühren, die bereits gezahlt wurden",
      "die Gebühren, die etwas zahlen",
      "die Gebühren, die gezahlt werden müssen"
     ],
     "loesung": 2,
     "erklaerung": "„zu + Partizip I\" als Attribut = muss/kann … werden."
    },
    {
     "art": "wahl",
     "frage": "„Das Bürgeramt … seit Montag geschlossen.\" Gemeint ist ein Zustand.",
     "opt": [
      "wird",
      "ist",
      "wurde"
     ],
     "loesung": 1,
     "erklaerung": "Zustandspassiv: „sein\" + Partizip II beschreibt das Ergebnis."
    }
   ]
  },
  {
   "id": "tg1l4",
   "stufe": 2,
   "titel": "Funktionsverbgefüge und feste Präpositionen",
   "kurz": "Feste Verbindungen, die man nicht übersetzen, sondern kennen muss",
   "ziel": "Nach diesem Block kennst du typische Nomen-Verb-Verbindungen aus Berichten, Behördenbriefen und dem Berufsalltag und die Präpositionen, die zu ihnen gehören.",
   "zeichen": "🧩",
   "farbe": "lila",
   "aufgaben": [
    {
     "art": "wahl",
     "frage": "„Mehrere Kollegen haben den neuen Zeitplan in Frage …\"",
     "opt": [
      "gestellt",
      "gesetzt",
      "gebracht"
     ],
     "loesung": 0,
     "erklaerung": "„etwas in Frage stellen\" = bezweifeln."
    },
    {
     "art": "wahl",
     "frage": "„Die neue Hausordnung tritt am ersten Januar in …\"",
     "opt": [
      "Kraft",
      "Wirkung",
      "Geltung"
     ],
     "loesung": 0,
     "erklaerung": "„in Kraft treten\" = gültig werden."
    },
    {
     "art": "wahl",
     "frage": "„Familie Yilmaz hat einen Antrag … Wohngeld gestellt.\"",
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
     "frage": "„Die Umfrage … zu dem Ergebnis, dass Pendeln viele Menschen belastet.\"",
     "opt": [
      "bringt",
      "kommt",
      "stellt"
     ],
     "loesung": 1,
     "erklaerung": "„zu einem Ergebnis kommen\"."
    },
    {
     "art": "wahl",
     "frage": "„Die Wünsche der Kunden … in die Entwicklung des neuen Produkts ein.\" (= werden berücksichtigt)",
     "opt": [
      "laufen",
      "fließen",
      "treten"
     ],
     "loesung": 1,
     "erklaerung": "„in etwas einfließen\" = berücksichtigt werden."
    },
    {
     "art": "wahl",
     "frage": "„Die Geschäftsleitung hat die Beschwerde zur … genommen.\"",
     "opt": [
      "Kunde",
      "Wissen",
      "Kenntnis"
     ],
     "loesung": 2,
     "erklaerung": "„etwas zur Kenntnis nehmen\"."
    },
    {
     "art": "wahl",
     "frage": "„Der Vorschlag der Stadt … bei den Anwohnern auf großen Widerstand.\"",
     "opt": [
      "stieß",
      "fiel",
      "lief"
     ],
     "loesung": 0,
     "erklaerung": "„auf Widerstand stoßen\"."
    },
    {
     "art": "wahl",
     "frage": "„Nach langer Diskussion ist der Betriebsrat … dem Schluss gelangt, dass …\"",
     "opt": [
      "auf",
      "an",
      "zu"
     ],
     "loesung": 2,
     "erklaerung": "„zu einem Schluss gelangen\"."
    },
    {
     "art": "wahl",
     "frage": "„Die neuen Zahlen stehen im Widerspruch … den Angaben des Vermieters.\"",
     "opt": [
      "mit",
      "gegen",
      "zu"
     ],
     "loesung": 2,
     "erklaerung": "„im Widerspruch zu etwas stehen\"."
    },
    {
     "art": "wahl",
     "frage": "„In ihrem Kommentar setzt sich die Journalistin kritisch … dem Vorschlag auseinander.\"",
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
     "id": "gg1t1s1",
     "text": {
      "sorte": "zeitung",
      "quelle": "Wirtschaftsmagazin Werkbank",
      "titel": "Freitags bleibt die Halle leer",
      "zeilen": [
       "Als die Geschäftsführung des Metallbaubetriebs Hennig & Sohn im Städtchen Lindhagen vor zwei Jahren verkündete, künftig nur noch an vier Tagen in der Woche zu arbeiten, hielten viele in der Branche das für einen Werbegag. Der Betrieb, der rund achtzig Mitarbeiter beschäftigt, hatte damals ein handfestes Problem: Offene Stellen blieben monatelang unbesetzt, und erfahrene Schweißer wanderten zu größeren Konkurrenten ab. __(1)__ Inzwischen ist aus dem Experiment ein Dauerzustand geworden, und Firmen aus der ganzen Region schicken ihre Personalchefs nach Lindhagen, um sich das Modell erklären zu lassen.",
       "Das Modell ist allerdings weniger einfach, als es klingt. Die Arbeitszeit wurde nicht im gleichen Maß gekürzt wie die Zahl der Arbeitstage: Statt vierzig arbeiten die Beschäftigten nun sechsunddreißig Stunden, verteilt auf vier etwas längere Tage, bei unverändertem Lohn. __(2)__ Damit das gelingt, wurden sämtliche Abläufe gründlich durchforstet. Besprechungen wurden gekürzt oder ganz gestrichen, Materiallieferungen besser geplant, und jede Abteilung musste selbst Vorschläge machen, wo sich Zeit sparen lässt.",
       "Die Ergebnisse nach zwei Jahren fallen überwiegend positiv aus. Der Krankenstand sank um fast ein Drittel, die Zahl der Bewerbungen hat sich mehr als verdoppelt. __(3)__ Geschäftsführerin Marlene Hennig führt das vor allem darauf zurück, dass ausgeruhte Mitarbeiter weniger Fehler machen: „Ein Ausschussteil weniger pro Tag bringt uns mehr als eine zusätzliche Arbeitsstunde.“",
       "Ganz ohne Reibungsverluste ging die Umstellung jedoch nicht vonstatten. Vor allem im Kundendienst gab es anfangs Beschwerden, weil dringende Reparaturaufträge am Freitag liegen blieben. __(4)__ Seitdem arbeiten die Servicetechniker in zwei Gruppen, von denen die eine montags, die andere freitags frei hat. Auch einige ältere Mitarbeiter taten sich schwer mit den längeren Arbeitstagen und hätten lieber an fünf kürzeren Tagen gearbeitet. Für sie wurde eine Sonderregelung gefunden.",
       "Arbeitsmarktforscher sehen in Beispielen wie diesem durchaus ein Vorbild für andere Betriebe, warnen aber vor zu einfachen Übertragungen. __(5)__ In einem Krankenhaus oder im Einzelhandel, wo die Anwesenheit selbst die Leistung ist, lässt sich durch bessere Abläufe kaum Zeit gewinnen. Dort führe eine Viertagewoche bei gleichem Lohn zwangsläufig zu höheren Personalkosten, so die Wirtschaftswissenschaftlerin Dorothea Vukić vom Institut für Arbeit und Region in Brackstedt.",
       "In Lindhagen denkt indes niemand an eine Rückkehr zur alten Regelung. __(6)__ Die Geschäftsführerin sieht das gelassen. Sollte die Viertagewoche eines Tages überall zum Standard werden, habe ihr Betrieb immerhin einen Vorsprung von einigen Jahren an Erfahrung, und den könne ihm niemand mehr nehmen."
      ]
     },
     "aufgaben": [
      {
       "frage": "Welcher Satz gehört in Lücke 1?",
       "luecke": 1,
       "opt": [
        "Das Unternehmen reagierte darauf mit einem rollierenden Dienstplan.",
        "Die Gewerkschaften hatten das Modell deshalb von Anfang an abgelehnt.",
        "Und auch die Produktivität ist, gemessen am Umsatz pro Arbeitsstunde, gestiegen statt gesunken.",
        "Entscheidend sei, ob in einem Betrieb tatsächlich Zeit verschwendet werde, die man einsparen könne.",
        "Mit der Viertagewoche wollte man diesen Trend umkehren, zunächst als Versuch für ein halbes Jahr.",
        "Allerdings schwindet der Vorteil bei der Suche nach Personal, seit auch zwei Nachbarfirmen ähnliche Modelle eingeführt haben.",
        "Im Gegenzug wurden die Löhne um zehn Prozent gesenkt.",
        "Die fehlenden vier Stunden sollten durch effizienteres Arbeiten ausgeglichen werden."
       ],
       "loesung": 4,
       "fest": true,
       "erklaerung": "„diesen Trend“ greift die Abwanderung der Fachkräfte auf; „Versuch“ bereitet „aus dem Experiment“ im nächsten Satz vor."
      },
      {
       "frage": "Welcher Satz gehört in Lücke 2?",
       "luecke": 2,
       "opt": [
        "Das Unternehmen reagierte darauf mit einem rollierenden Dienstplan.",
        "Die Gewerkschaften hatten das Modell deshalb von Anfang an abgelehnt.",
        "Und auch die Produktivität ist, gemessen am Umsatz pro Arbeitsstunde, gestiegen statt gesunken.",
        "Entscheidend sei, ob in einem Betrieb tatsächlich Zeit verschwendet werde, die man einsparen könne.",
        "Mit der Viertagewoche wollte man diesen Trend umkehren, zunächst als Versuch für ein halbes Jahr.",
        "Allerdings schwindet der Vorteil bei der Suche nach Personal, seit auch zwei Nachbarfirmen ähnliche Modelle eingeführt haben.",
        "Im Gegenzug wurden die Löhne um zehn Prozent gesenkt.",
        "Die fehlenden vier Stunden sollten durch effizienteres Arbeiten ausgeglichen werden."
       ],
       "loesung": 7,
       "fest": true,
       "erklaerung": "„Die fehlenden vier Stunden“ rechnet vierzig minus sechsunddreißig; „Damit das gelingt“ knüpft an das Ausgleichen an."
      },
      {
       "frage": "Welcher Satz gehört in Lücke 3?",
       "luecke": 3,
       "opt": [
        "Das Unternehmen reagierte darauf mit einem rollierenden Dienstplan.",
        "Die Gewerkschaften hatten das Modell deshalb von Anfang an abgelehnt.",
        "Und auch die Produktivität ist, gemessen am Umsatz pro Arbeitsstunde, gestiegen statt gesunken.",
        "Entscheidend sei, ob in einem Betrieb tatsächlich Zeit verschwendet werde, die man einsparen könne.",
        "Mit der Viertagewoche wollte man diesen Trend umkehren, zunächst als Versuch für ein halbes Jahr.",
        "Allerdings schwindet der Vorteil bei der Suche nach Personal, seit auch zwei Nachbarfirmen ähnliche Modelle eingeführt haben.",
        "Im Gegenzug wurden die Löhne um zehn Prozent gesenkt.",
        "Die fehlenden vier Stunden sollten durch effizienteres Arbeiten ausgeglichen werden."
       ],
       "loesung": 2,
       "fest": true,
       "erklaerung": "„Und auch“ setzt die Liste der Erfolge fort; „führt das darauf zurück“ erklärt die gestiegene Produktivität."
      },
      {
       "frage": "Welcher Satz gehört in Lücke 4?",
       "luecke": 4,
       "opt": [
        "Das Unternehmen reagierte darauf mit einem rollierenden Dienstplan.",
        "Die Gewerkschaften hatten das Modell deshalb von Anfang an abgelehnt.",
        "Und auch die Produktivität ist, gemessen am Umsatz pro Arbeitsstunde, gestiegen statt gesunken.",
        "Entscheidend sei, ob in einem Betrieb tatsächlich Zeit verschwendet werde, die man einsparen könne.",
        "Mit der Viertagewoche wollte man diesen Trend umkehren, zunächst als Versuch für ein halbes Jahr.",
        "Allerdings schwindet der Vorteil bei der Suche nach Personal, seit auch zwei Nachbarfirmen ähnliche Modelle eingeführt haben.",
        "Im Gegenzug wurden die Löhne um zehn Prozent gesenkt.",
        "Die fehlenden vier Stunden sollten durch effizienteres Arbeiten ausgeglichen werden."
       ],
       "loesung": 0,
       "fest": true,
       "erklaerung": "„darauf“ bezieht sich auf die Beschwerden; der rollierende Plan wird mit „Seitdem … in zwei Gruppen“ erläutert."
      },
      {
       "frage": "Welcher Satz gehört in Lücke 5?",
       "luecke": 5,
       "opt": [
        "Das Unternehmen reagierte darauf mit einem rollierenden Dienstplan.",
        "Die Gewerkschaften hatten das Modell deshalb von Anfang an abgelehnt.",
        "Und auch die Produktivität ist, gemessen am Umsatz pro Arbeitsstunde, gestiegen statt gesunken.",
        "Entscheidend sei, ob in einem Betrieb tatsächlich Zeit verschwendet werde, die man einsparen könne.",
        "Mit der Viertagewoche wollte man diesen Trend umkehren, zunächst als Versuch für ein halbes Jahr.",
        "Allerdings schwindet der Vorteil bei der Suche nach Personal, seit auch zwei Nachbarfirmen ähnliche Modelle eingeführt haben.",
        "Im Gegenzug wurden die Löhne um zehn Prozent gesenkt.",
        "Die fehlenden vier Stunden sollten durch effizienteres Arbeiten ausgeglichen werden."
       ],
       "loesung": 3,
       "fest": true,
       "erklaerung": "Der Satz nennt die Bedingung; das Krankenhaus im nächsten Satz ist das Gegenbeispiel, wo keine Zeit verschwendet wird."
      },
      {
       "frage": "Welcher Satz gehört in Lücke 6?",
       "luecke": 6,
       "opt": [
        "Das Unternehmen reagierte darauf mit einem rollierenden Dienstplan.",
        "Die Gewerkschaften hatten das Modell deshalb von Anfang an abgelehnt.",
        "Und auch die Produktivität ist, gemessen am Umsatz pro Arbeitsstunde, gestiegen statt gesunken.",
        "Entscheidend sei, ob in einem Betrieb tatsächlich Zeit verschwendet werde, die man einsparen könne.",
        "Mit der Viertagewoche wollte man diesen Trend umkehren, zunächst als Versuch für ein halbes Jahr.",
        "Allerdings schwindet der Vorteil bei der Suche nach Personal, seit auch zwei Nachbarfirmen ähnliche Modelle eingeführt haben.",
        "Im Gegenzug wurden die Löhne um zehn Prozent gesenkt.",
        "Die fehlenden vier Stunden sollten durch effizienteres Arbeiten ausgeglichen werden."
       ],
       "loesung": 5,
       "fest": true,
       "erklaerung": "„Allerdings“ schränkt die Zufriedenheit ein; „sieht das gelassen“ reagiert auf die Konkurrenz durch die Nachbarfirmen."
      }
     ]
    },
    {
     "id": "gg1t1s2",
     "text": {
      "sorte": "zeitung",
      "quelle": "Stadtmagazin Quartier",
      "titel": "Groß gegen klein",
      "zeilen": [
       "In vielen deutschen Städten zeigt sich ein merkwürdiges Bild: Junge Familien drängen sich zu viert in Zweizimmerwohnungen, während ältere Menschen allein in Wohnungen leben, die einst für eine ganze Familie gedacht waren. __(1)__ Die Stadt Wellersheim versucht seit drei Jahren, dieses Missverhältnis mit einer kommunalen Tauschbörse zu verringern. Die Bilanz ist gemischt, aber durchaus lehrreich, auch für andere Kommunen mit angespanntem Wohnungsmarkt.",
       "Das Prinzip ist einfach: Wer eine große Wohnung einer städtischen Wohnungsgesellschaft bewohnt, kann sie gegen eine kleinere tauschen und zahlt dafür pro Quadratmeter nicht mehr als zuvor. __(2)__ Hinzu kommen eine Umzugsprämie von bis zu zweitausend Euro sowie Hilfe beim Packen und bei Behördengängen. Die frei gewordenen Wohnungen gehen bevorzugt an Familien mit Kindern, die bereits auf der Warteliste der Gesellschaft stehen.",
       "Trotz dieser Anreize blieb die Nachfrage zunächst weit hinter den Erwartungen zurück. Im ersten Jahr kamen gerade einmal vierzehn Tauschgeschäfte zustande. __(3)__ Viele der angeschriebenen Senioren lebten seit Jahrzehnten in ihren Wohnungen, kannten die Nachbarn, den Bäcker und die Hausärztin um die Ecke. Eine neue Wohnung in einem anderen Viertel kam für sie trotz aller Vorteile nicht infrage.",
       "Die Stadt änderte daraufhin ihre Strategie. __(4)__ Außerdem wurde eine Beraterin eingestellt, die interessierte Mieter mehrfach besucht und ihnen hilft, den Umzug Schritt für Schritt zu planen. „Viele brauchen einfach Zeit und jemanden, der zuhört“, sagt Sabine Ortlepp, die diese Aufgabe seit zwei Jahren übernimmt. Seit der Umstellung hat sich die Zahl der Tauschgeschäfte jedes Jahr ungefähr verdreifacht.",
       "Dennoch bleibt die Wirkung begrenzt. __(5)__ Gemessen an den mehreren tausend Familien, die in Wellersheim auf eine größere Wohnung warten, ist das kaum mehr als ein Tropfen auf den heißen Stein. Fachleute für Stadtentwicklung betonen deshalb, dass Tauschbörsen den Bau neuer Wohnungen nicht ersetzen, sondern allenfalls ergänzen können.",
       "Ein Nebeneffekt hat die Verantwortlichen allerdings überrascht. __(6)__ Manche tauschen inzwischen nicht nur Wohnungen, sondern helfen sich gegenseitig im Alltag: Die ältere Dame passt gelegentlich auf die Kinder auf, der junge Vater trägt dafür die Getränkekisten in den dritten Stock."
      ]
     },
     "aufgaben": [
      {
       "frage": "Welcher Satz gehört in Lücke 1?",
       "luecke": 1,
       "opt": [
        "Die Wohnungsgesellschaft verlangt deshalb seit Kurzem eine Gebühr für jeden Tausch.",
        "Die Gründe dafür lagen weniger im Geld als in der Bindung an die vertraute Umgebung.",
        "Im vergangenen Jahr wechselten insgesamt rund hundertzwanzig Haushalte die Wohnung.",
        "Umziehen wollen die wenigsten von ihnen, obwohl ihnen Treppen und Gartenarbeit längst zu schaffen machen.",
        "Für die Familien bedeutet der Tausch allerdings meist eine deutlich höhere Miete.",
        "Gerade dieser Punkt ist entscheidend, denn bei einem gewöhnlichen Umzug würde eine kleinere Wohnung wegen der heutigen Mieten oft mehr kosten als die alte große.",
        "Weil die Tauschpartner oft im selben Viertel wohnen bleiben, entstehen zwischen den Generationen neue Kontakte.",
        "Seitdem werden Tauschwohnungen vor allem im selben Stadtteil angeboten, oft sogar im selben Häuserblock."
       ],
       "loesung": 3,
       "fest": true,
       "erklaerung": "„von ihnen“ meint die älteren Menschen; „dieses Missverhältnis“ fasst danach das ganze Bild zusammen."
      },
      {
       "frage": "Welcher Satz gehört in Lücke 2?",
       "luecke": 2,
       "opt": [
        "Die Wohnungsgesellschaft verlangt deshalb seit Kurzem eine Gebühr für jeden Tausch.",
        "Die Gründe dafür lagen weniger im Geld als in der Bindung an die vertraute Umgebung.",
        "Im vergangenen Jahr wechselten insgesamt rund hundertzwanzig Haushalte die Wohnung.",
        "Umziehen wollen die wenigsten von ihnen, obwohl ihnen Treppen und Gartenarbeit längst zu schaffen machen.",
        "Für die Familien bedeutet der Tausch allerdings meist eine deutlich höhere Miete.",
        "Gerade dieser Punkt ist entscheidend, denn bei einem gewöhnlichen Umzug würde eine kleinere Wohnung wegen der heutigen Mieten oft mehr kosten als die alte große.",
        "Weil die Tauschpartner oft im selben Viertel wohnen bleiben, entstehen zwischen den Generationen neue Kontakte.",
        "Seitdem werden Tauschwohnungen vor allem im selben Stadtteil angeboten, oft sogar im selben Häuserblock."
       ],
       "loesung": 5,
       "fest": true,
       "erklaerung": "„dieser Punkt“ ist die gleiche Quadratmetermiete; „Hinzu kommen“ fügt weitere Vorteile an – ein Nachteil passt hier nicht."
      },
      {
       "frage": "Welcher Satz gehört in Lücke 3?",
       "luecke": 3,
       "opt": [
        "Die Wohnungsgesellschaft verlangt deshalb seit Kurzem eine Gebühr für jeden Tausch.",
        "Die Gründe dafür lagen weniger im Geld als in der Bindung an die vertraute Umgebung.",
        "Im vergangenen Jahr wechselten insgesamt rund hundertzwanzig Haushalte die Wohnung.",
        "Umziehen wollen die wenigsten von ihnen, obwohl ihnen Treppen und Gartenarbeit längst zu schaffen machen.",
        "Für die Familien bedeutet der Tausch allerdings meist eine deutlich höhere Miete.",
        "Gerade dieser Punkt ist entscheidend, denn bei einem gewöhnlichen Umzug würde eine kleinere Wohnung wegen der heutigen Mieten oft mehr kosten als die alte große.",
        "Weil die Tauschpartner oft im selben Viertel wohnen bleiben, entstehen zwischen den Generationen neue Kontakte.",
        "Seitdem werden Tauschwohnungen vor allem im selben Stadtteil angeboten, oft sogar im selben Häuserblock."
       ],
       "loesung": 1,
       "fest": true,
       "erklaerung": "„dafür“ verweist auf die geringe Nachfrage; der folgende Satz beschreibt die Bindung an die Umgebung genauer."
      },
      {
       "frage": "Welcher Satz gehört in Lücke 4?",
       "luecke": 4,
       "opt": [
        "Die Wohnungsgesellschaft verlangt deshalb seit Kurzem eine Gebühr für jeden Tausch.",
        "Die Gründe dafür lagen weniger im Geld als in der Bindung an die vertraute Umgebung.",
        "Im vergangenen Jahr wechselten insgesamt rund hundertzwanzig Haushalte die Wohnung.",
        "Umziehen wollen die wenigsten von ihnen, obwohl ihnen Treppen und Gartenarbeit längst zu schaffen machen.",
        "Für die Familien bedeutet der Tausch allerdings meist eine deutlich höhere Miete.",
        "Gerade dieser Punkt ist entscheidend, denn bei einem gewöhnlichen Umzug würde eine kleinere Wohnung wegen der heutigen Mieten oft mehr kosten als die alte große.",
        "Weil die Tauschpartner oft im selben Viertel wohnen bleiben, entstehen zwischen den Generationen neue Kontakte.",
        "Seitdem werden Tauschwohnungen vor allem im selben Stadtteil angeboten, oft sogar im selben Häuserblock."
       ],
       "loesung": 7,
       "fest": true,
       "erklaerung": "Die neue Strategie antwortet auf das Problem der vertrauten Umgebung; „Außerdem“ ergänzt eine zweite Maßnahme."
      },
      {
       "frage": "Welcher Satz gehört in Lücke 5?",
       "luecke": 5,
       "opt": [
        "Die Wohnungsgesellschaft verlangt deshalb seit Kurzem eine Gebühr für jeden Tausch.",
        "Die Gründe dafür lagen weniger im Geld als in der Bindung an die vertraute Umgebung.",
        "Im vergangenen Jahr wechselten insgesamt rund hundertzwanzig Haushalte die Wohnung.",
        "Umziehen wollen die wenigsten von ihnen, obwohl ihnen Treppen und Gartenarbeit längst zu schaffen machen.",
        "Für die Familien bedeutet der Tausch allerdings meist eine deutlich höhere Miete.",
        "Gerade dieser Punkt ist entscheidend, denn bei einem gewöhnlichen Umzug würde eine kleinere Wohnung wegen der heutigen Mieten oft mehr kosten als die alte große.",
        "Weil die Tauschpartner oft im selben Viertel wohnen bleiben, entstehen zwischen den Generationen neue Kontakte.",
        "Seitdem werden Tauschwohnungen vor allem im selben Stadtteil angeboten, oft sogar im selben Häuserblock."
       ],
       "loesung": 2,
       "fest": true,
       "erklaerung": "Die Zahl wird mit „Gemessen an … ist das“ bewertet; vierzehn, verdreifacht und noch einmal verdreifacht ergibt etwa hundertzwanzig."
      },
      {
       "frage": "Welcher Satz gehört in Lücke 6?",
       "luecke": 6,
       "opt": [
        "Die Wohnungsgesellschaft verlangt deshalb seit Kurzem eine Gebühr für jeden Tausch.",
        "Die Gründe dafür lagen weniger im Geld als in der Bindung an die vertraute Umgebung.",
        "Im vergangenen Jahr wechselten insgesamt rund hundertzwanzig Haushalte die Wohnung.",
        "Umziehen wollen die wenigsten von ihnen, obwohl ihnen Treppen und Gartenarbeit längst zu schaffen machen.",
        "Für die Familien bedeutet der Tausch allerdings meist eine deutlich höhere Miete.",
        "Gerade dieser Punkt ist entscheidend, denn bei einem gewöhnlichen Umzug würde eine kleinere Wohnung wegen der heutigen Mieten oft mehr kosten als die alte große.",
        "Weil die Tauschpartner oft im selben Viertel wohnen bleiben, entstehen zwischen den Generationen neue Kontakte.",
        "Seitdem werden Tauschwohnungen vor allem im selben Stadtteil angeboten, oft sogar im selben Häuserblock."
       ],
       "loesung": 6,
       "fest": true,
       "erklaerung": "Der Satz benennt den „Nebeneffekt“; „Manche“ meint danach die Tauschpartner aus beiden Generationen."
      }
     ]
    },
    {
     "id": "gg1t1s3",
     "text": {
      "sorte": "zeitung",
      "quelle": "Gemeinsinn – Magazin für Engagement",
      "titel": "Helfen auf Zeit",
      "zeilen": [
       "Freiwillige Feuerwehren suchen Nachwuchs, Sportvereine finden keine Kassenwarte mehr, und in manchen Kirchengemeinden übernehmen dieselben fünf Personen seit zwanzig Jahren jedes Amt. Schnell ist daher von einer Krise des Ehrenamts die Rede. __(1)__ Nach einer aktuellen Erhebung der Stiftung Bürgersinn engagiert sich nach wie vor knapp ein Drittel der Erwachsenen in irgendeiner Form freiwillig – kaum weniger als vor zwanzig Jahren. Menschen zwischen dreißig und fünfzig sind sogar häufiger aktiv als früher.",
       "Verändert hat sich vor allem die Art, wie Menschen sich engagieren. __(2)__ Statt sich auf Jahre an einen Verein zu binden, helfen viele lieber bei einzelnen Projekten mit: beim Aufbau eines Stadtteilfestes, bei der Sanierung eines Spielplatzes oder als Lesepatin für ein Schulhalbjahr. Ist das Projekt abgeschlossen, ziehen sie weiter, oft zum nächsten Vorhaben in einem ganz anderen Bereich.",
       "Für die klassischen Vereine ist diese Entwicklung eine erhebliche Herausforderung. Ihre Strukturen beruhen darauf, dass Vorstandsposten über viele Jahre zuverlässig besetzt sind. __(3)__ Wer heute gefragt wird, ob er Schriftführer werden möchte, denkt nicht an die Ehre, sondern an Protokolle, Satzungsfragen und Haftungsrisiken – und sagt ab. Manche Vereine finden deshalb seit Jahren keinen vollständigen Vorstand mehr.",
       "Einige Vereine haben darauf reagiert und ihre Aufgaben neu zugeschnitten. Der Turnverein Eschenried etwa hat die Arbeit seines früheren Kassenwarts auf drei Personen verteilt, die sich jeweils für zwei Jahre verpflichten. __(4)__ Andere bieten Neulingen an, ein Amt zunächst probeweise für ein halbes Jahr zu übernehmen, begleitet von einem erfahrenen Mitglied, das bei Fragen zur Seite steht. Beide Modelle stoßen auf erstaunlich großes Interesse.",
       "Auch digitale Plattformen spielen eine wachsende Rolle. __(5)__ Wer etwa am Wochenende zwei Stunden Zeit hat, findet dort Angebote vom Einkaufsdienst für ältere Nachbarn bis zur Hilfe beim Deutschunterricht für Zugewanderte. Kritiker bemängeln allerdings, dass so ein Engagement nach Art eines Lieferdienstes entstehe, bei dem keine verlässlichen Beziehungen wachsen könnten.",
       "Dieser Einwand ist berechtigt, greift aber zu kurz. __(6)__ Wer einmal erlebt hat, dass sein Einsatz gebraucht und geschätzt wird, kommt häufig wieder – und übernimmt irgendwann vielleicht doch eine feste Aufgabe. Die Vereine täten gut daran, diesen Einstieg nicht zu verachten, sondern ihn bewusst zu erleichtern."
      ]
     },
     "aufgaben": [
      {
       "frage": "Welcher Satz gehört in Lücke 1?",
       "luecke": 1,
       "opt": [
        "Sie bringen Organisationen, die Unterstützung suchen, mit Menschen zusammen, die spontan helfen möchten.",
        "Die Zahl der Freiwilligen hat sich in diesem Zeitraum sogar halbiert.",
        "Ein Blick auf die Zahlen zeichnet jedoch ein anderes Bild.",
        "Denn oft ist das kurze Engagement der erste Schritt zu einem längeren.",
        "Gerade diese Ämter aber gelten vielen als bürokratische Last ohne absehbares Ende.",
        "Viele Feuerwehren zahlen ihren Mitgliedern deshalb inzwischen ein festes Gehalt.",
        "Der Trend geht weg vom dauerhaften Amt und hin zum zeitlich begrenzten Einsatz.",
        "Seitdem gibt es für diese Aufgaben wieder mehr Freiwillige als Posten."
       ],
       "loesung": 2,
       "fest": true,
       "erklaerung": "„jedoch ein anderes Bild“ widerspricht der Rede von der Krise; die Erhebung liefert danach die Zahlen."
      },
      {
       "frage": "Welcher Satz gehört in Lücke 2?",
       "luecke": 2,
       "opt": [
        "Sie bringen Organisationen, die Unterstützung suchen, mit Menschen zusammen, die spontan helfen möchten.",
        "Die Zahl der Freiwilligen hat sich in diesem Zeitraum sogar halbiert.",
        "Ein Blick auf die Zahlen zeichnet jedoch ein anderes Bild.",
        "Denn oft ist das kurze Engagement der erste Schritt zu einem längeren.",
        "Gerade diese Ämter aber gelten vielen als bürokratische Last ohne absehbares Ende.",
        "Viele Feuerwehren zahlen ihren Mitgliedern deshalb inzwischen ein festes Gehalt.",
        "Der Trend geht weg vom dauerhaften Amt und hin zum zeitlich begrenzten Einsatz.",
        "Seitdem gibt es für diese Aufgaben wieder mehr Freiwillige als Posten."
       ],
       "loesung": 6,
       "fest": true,
       "erklaerung": "Der Satz nennt die Veränderung allgemein, „Statt sich auf Jahre … zu binden“ führt sie aus."
      },
      {
       "frage": "Welcher Satz gehört in Lücke 3?",
       "luecke": 3,
       "opt": [
        "Sie bringen Organisationen, die Unterstützung suchen, mit Menschen zusammen, die spontan helfen möchten.",
        "Die Zahl der Freiwilligen hat sich in diesem Zeitraum sogar halbiert.",
        "Ein Blick auf die Zahlen zeichnet jedoch ein anderes Bild.",
        "Denn oft ist das kurze Engagement der erste Schritt zu einem längeren.",
        "Gerade diese Ämter aber gelten vielen als bürokratische Last ohne absehbares Ende.",
        "Viele Feuerwehren zahlen ihren Mitgliedern deshalb inzwischen ein festes Gehalt.",
        "Der Trend geht weg vom dauerhaften Amt und hin zum zeitlich begrenzten Einsatz.",
        "Seitdem gibt es für diese Aufgaben wieder mehr Freiwillige als Posten."
       ],
       "loesung": 4,
       "fest": true,
       "erklaerung": "„diese Ämter“ sind die Vorstandsposten; das Beispiel Schriftführer zeigt die bürokratische Last."
      },
      {
       "frage": "Welcher Satz gehört in Lücke 4?",
       "luecke": 4,
       "opt": [
        "Sie bringen Organisationen, die Unterstützung suchen, mit Menschen zusammen, die spontan helfen möchten.",
        "Die Zahl der Freiwilligen hat sich in diesem Zeitraum sogar halbiert.",
        "Ein Blick auf die Zahlen zeichnet jedoch ein anderes Bild.",
        "Denn oft ist das kurze Engagement der erste Schritt zu einem längeren.",
        "Gerade diese Ämter aber gelten vielen als bürokratische Last ohne absehbares Ende.",
        "Viele Feuerwehren zahlen ihren Mitgliedern deshalb inzwischen ein festes Gehalt.",
        "Der Trend geht weg vom dauerhaften Amt und hin zum zeitlich begrenzten Einsatz.",
        "Seitdem gibt es für diese Aufgaben wieder mehr Freiwillige als Posten."
       ],
       "loesung": 7,
       "fest": true,
       "erklaerung": "„diese Aufgaben“ sind die aufgeteilten Kassenwart-Aufgaben; „Andere“ leitet das nächste Vereinsbeispiel ein."
      },
      {
       "frage": "Welcher Satz gehört in Lücke 5?",
       "luecke": 5,
       "opt": [
        "Sie bringen Organisationen, die Unterstützung suchen, mit Menschen zusammen, die spontan helfen möchten.",
        "Die Zahl der Freiwilligen hat sich in diesem Zeitraum sogar halbiert.",
        "Ein Blick auf die Zahlen zeichnet jedoch ein anderes Bild.",
        "Denn oft ist das kurze Engagement der erste Schritt zu einem längeren.",
        "Gerade diese Ämter aber gelten vielen als bürokratische Last ohne absehbares Ende.",
        "Viele Feuerwehren zahlen ihren Mitgliedern deshalb inzwischen ein festes Gehalt.",
        "Der Trend geht weg vom dauerhaften Amt und hin zum zeitlich begrenzten Einsatz.",
        "Seitdem gibt es für diese Aufgaben wieder mehr Freiwillige als Posten."
       ],
       "loesung": 0,
       "fest": true,
       "erklaerung": "„Sie“ meint die Plattformen; „dort“ im nächsten Satz setzt den Bezug fort."
      },
      {
       "frage": "Welcher Satz gehört in Lücke 6?",
       "luecke": 6,
       "opt": [
        "Sie bringen Organisationen, die Unterstützung suchen, mit Menschen zusammen, die spontan helfen möchten.",
        "Die Zahl der Freiwilligen hat sich in diesem Zeitraum sogar halbiert.",
        "Ein Blick auf die Zahlen zeichnet jedoch ein anderes Bild.",
        "Denn oft ist das kurze Engagement der erste Schritt zu einem längeren.",
        "Gerade diese Ämter aber gelten vielen als bürokratische Last ohne absehbares Ende.",
        "Viele Feuerwehren zahlen ihren Mitgliedern deshalb inzwischen ein festes Gehalt.",
        "Der Trend geht weg vom dauerhaften Amt und hin zum zeitlich begrenzten Einsatz.",
        "Seitdem gibt es für diese Aufgaben wieder mehr Freiwillige als Posten."
       ],
       "loesung": 3,
       "fest": true,
       "erklaerung": "„Denn“ begründet, warum der Einwand zu kurz greift; „Wer einmal erlebt hat“ führt den Gedanken aus."
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
     "id": "gg1t2s1",
     "text": {
      "sorte": "zeitung",
      "quelle": "Magazin Arbeit & Leben",
      "titel": "Mit fünfzig noch einmal neu anfangen",
      "zeilen": [
       "A — Heike Brandauer hat fast dreißig Jahre lang in einer Bankfiliale gearbeitet, zuletzt als Leiterin der Kreditabteilung. Heute steht sie in einer Werkstatt am Stadtrand von Kellingen, trägt Gehörschutz und schleift die Kante einer Tischplatte aus Eichenholz. Mit einundfünfzig Jahren hat sie eine Ausbildung zur Tischlerin begonnen, als älteste Auszubildende, die ihr Meister je hatte. Die Entscheidung sei nicht über Nacht gefallen, erzählt sie. Jahrelang habe sie das Gefühl gehabt, nur noch Zahlen hin und her zu schieben, ohne am Abend etwas in der Hand zu haben.",
       "Den Ausschlag gab schließlich eine Umstrukturierung in ihrer Bank, bei der mehrere Filialen geschlossen wurden. Statt sich auf eine neue Stelle in der Zentrale zu bewerben, nahm sie die angebotene Abfindung an. „Ich wusste: Wenn ich es jetzt nicht mache, mache ich es nie“, sagt sie. Ihr Mann habe anfangs skeptisch reagiert, ihre erwachsenen Kinder dagegen hätten sie sofort unterstützt. Die ersten Wochen in der Berufsschule, zwischen lauter Achtzehnjährigen, seien dennoch gewöhnungsbedürftig gewesen.",
       "B — Fälle wie dieser sind keine Seltenheit mehr. Nach einer Umfrage des Instituts für Berufsforschung in Malchow denkt etwa jeder fünfte Beschäftigte über fünfundvierzig ernsthaft über einen beruflichen Neuanfang nach. Tatsächlich umgesetzt wird dieser Wunsch allerdings nur von einem Bruchteil. Viele scheuen das Risiko oder fürchten, in ihrem Alter keine Stelle mehr zu finden. Als häufigsten Grund für den Wunsch nach Veränderung nannten die Befragten nicht etwa ein höheres Gehalt, sondern das Bedürfnis nach einer sinnvollen Tätigkeit.",
       "An zweiter Stelle folgt die körperliche oder seelische Belastung im bisherigen Beruf. Pflegekräfte, Lehrer und Beschäftigte im Schichtdienst äußerten den Wunsch nach einem Wechsel besonders häufig. Auffällig ist zudem, dass Frauen deutlich öfter an einen Neuanfang denken als Männer – nach Ansicht der Forscher auch deshalb, weil viele von ihnen nach der Familienphase ihre berufliche Situation grundsätzlich überdenken. Männer nennen dagegen häufiger Ärger mit Vorgesetzten als Grund.",
       "C — Wer sich im mittleren Alter beruflich neu orientieren will, stößt allerdings auf eine Reihe von Hindernissen. Das größte ist oft finanzieller Natur. Eine Ausbildungsvergütung reicht kaum, um eine Familie zu ernähren oder einen Kredit abzuzahlen, und auch eine Umschulung bedeutet für viele erhebliche Einbußen. Zwar übernimmt die Arbeitsagentur unter bestimmten Bedingungen die Kosten einer Weiterbildung, doch die Voraussetzungen dafür sind streng, und das Antragsverfahren gilt als mühsam.",
       "Hinzu kommen Vorbehalte bei manchen Arbeitgebern. Ältere Bewerber gelten mitunter als weniger lernfähig oder als zu teuer, obwohl Untersuchungen beides nicht belegen. Brandauer hatte Glück: Ihr Ausbildungsbetrieb suchte seit Jahren vergeblich nach Nachwuchs und war froh über jede Bewerbung. In anderen Branchen, so berichten Betroffene, bleibe es dagegen oft bei höflichen Absagen. Manche verschweigen ihr Alter deshalb in der Bewerbung, was nach Einschätzung von Fachleuten allerdings selten hilft.",
       "D — Die Laufbahnberaterin Miriam Okafor rät deshalb, einen Wechsel nicht überstürzt anzugehen. Bevor man kündige, solle man den neuen Beruf möglichst gründlich kennenlernen, etwa durch ein Praktikum im Urlaub oder ein paar Probetage. Viele stellten erst dann fest, dass ihre Vorstellungen mit dem Alltag im Wunschberuf wenig zu tun hätten. Auch ein schrittweiser Übergang, bei dem man die bisherige Stelle zunächst nur reduziert, könne das Risiko verringern.",
       "Außerdem empfiehlt Okafor, die eigenen Fähigkeiten nicht zu unterschätzen. Wer jahrzehntelang mit Kunden verhandelt, Projekte geleitet oder Konflikte im Team gelöst habe, bringe Kompetenzen mit, die in fast jedem Beruf gefragt seien. Diese gelte es in Bewerbungen deutlich herauszustellen, statt sich für den Bruch im Lebenslauf zu entschuldigen.",
       "E — Allmählich erkennen auch Unternehmen, dass sie von Quereinsteigern profitieren können. Gerade in Branchen mit großem Fachkräftemangel werden ältere Bewerber zunehmend gezielt angesprochen. Einige größere Betriebe gehen noch einen Schritt weiter und ermöglichen ihren eigenen Mitarbeitern einen Wechsel innerhalb des Unternehmens, etwa vom Büro in die Produktion oder umgekehrt. So halten sie erfahrene Kräfte, die sonst womöglich gekündigt hätten.",
       "Heike Brandauer hat ihren Schritt bisher nicht bereut, auch wenn sie heute deutlich weniger verdient als früher. Ihre Gesellenprüfung will sie im kommenden Sommer ablegen. Und danach? Vielleicht, sagt sie lachend, mache sie sich irgendwann selbstständig – mit einer kleinen Werkstatt, in der sie auch Kurse für Menschen anbietet, die sich einen Neuanfang noch nicht zutrauen."
      ]
     },
     "aufgaben": [
      {
       "frage": "In welchem Abschnitt steht das? „Die meisten, die über einen Berufswechsel nachdenken, verwirklichen ihn am Ende nicht.\"",
       "opt": [
        "Abschnitt A",
        "Abschnitt B",
        "Abschnitt C",
        "Abschnitt D",
        "Abschnitt E"
       ],
       "loesung": 1,
       "fest": true,
       "stelle": "Tatsächlich umgesetzt wird dieser Wunsch allerdings nur von einem Bruchteil",
       "erklaerung": "Jeder Fünfte denkt daran, aber nur ein Bruchteil setzt den Wunsch um."
      },
      {
       "frage": "In welchem Abschnitt steht das? „Es kann sinnvoll sein, die alte Stelle nicht sofort ganz aufzugeben.\"",
       "opt": [
        "Abschnitt A",
        "Abschnitt B",
        "Abschnitt C",
        "Abschnitt D",
        "Abschnitt E"
       ],
       "loesung": 3,
       "fest": true,
       "stelle": "die bisherige Stelle zunächst nur reduziert",
       "erklaerung": "Okafor empfiehlt einen schrittweisen Übergang mit reduzierter Stelle."
      },
      {
       "frage": "In welchem Abschnitt steht das? „Ein äußerer Anlass erleichterte einer Frau die Entscheidung für den Neuanfang.\"",
       "opt": [
        "Abschnitt A",
        "Abschnitt B",
        "Abschnitt C",
        "Abschnitt D",
        "Abschnitt E"
       ],
       "loesung": 0,
       "fest": true,
       "stelle": "Den Ausschlag gab schließlich eine Umstrukturierung in ihrer Bank",
       "erklaerung": "Die Schließung von Filialen war der Auslöser – nicht ihr eigener Plan allein."
      },
      {
       "frage": "In welchem Abschnitt steht das? „Die staatliche Förderung einer Umschulung ist an hohe Hürden geknüpft.\"",
       "opt": [
        "Abschnitt A",
        "Abschnitt B",
        "Abschnitt C",
        "Abschnitt D",
        "Abschnitt E"
       ],
       "loesung": 2,
       "fest": true,
       "stelle": "doch die Voraussetzungen dafür sind streng",
       "erklaerung": "Die Arbeitsagentur zahlt nur unter strengen Voraussetzungen und nach mühsamem Antrag."
      },
      {
       "frage": "In welchem Abschnitt steht das? „Bewerber sollten ihre bisherige Berufserfahrung selbstbewusst darstellen.\"",
       "opt": [
        "Abschnitt A",
        "Abschnitt B",
        "Abschnitt C",
        "Abschnitt D",
        "Abschnitt E"
       ],
       "loesung": 3,
       "fest": true,
       "stelle": "statt sich für den Bruch im Lebenslauf zu entschuldigen",
       "erklaerung": "Vorhandene Kompetenzen herausstellen statt sich zu entschuldigen = selbstbewusst auftreten."
      },
      {
       "frage": "In welchem Abschnitt steht das? „Manche Firmen bieten Beschäftigten neue Aufgaben an, um sie nicht zu verlieren.\"",
       "opt": [
        "Abschnitt A",
        "Abschnitt B",
        "Abschnitt C",
        "Abschnitt D",
        "Abschnitt E"
       ],
       "loesung": 4,
       "fest": true,
       "stelle": "So halten sie erfahrene Kräfte, die sonst womöglich gekündigt hätten",
       "erklaerung": "Interne Wechsel sollen verhindern, dass erfahrene Mitarbeiter kündigen."
      }
     ]
    },
    {
     "id": "gg1t2s2",
     "text": {
      "sorte": "zeitung",
      "quelle": "Medien und Öffentlichkeit – Wochenmagazin",
      "titel": "Wenn die Lokalzeitung verschwindet",
      "zeilen": [
       "A — Als die „Grauwitzer Nachrichten“ im vergangenen Frühjahr nach hundertvierzig Jahren ihre letzte Ausgabe druckten, ging in der Kleinstadt mehr verloren als eine Zeitung. Seitdem sitzt bei den Sitzungen des Stadtrats kein Journalist mehr auf der Pressebank. Über Beschlüsse zu neuen Gewerbegebieten, zu Kita-Gebühren oder zur Sanierung des Hallenbads erfahren die Bürger allenfalls aus den knappen Mitteilungen der Verwaltung – oder gar nicht. Auch Vereine, Schulen und Kirchengemeinden haben ihr wichtigstes Sprachrohr verloren: Wer früher ein Konzert oder einen Flohmarkt ankündigen wollte, schickte eine kurze Notiz an die Redaktion.",
       "„Früher wurde vor jeder Entscheidung öffentlich gestritten“, sagt Ingrid Sowa, die über dreißig Jahre lang für das Blatt aus dem Rathaus berichtet hat. „Heute merkt man oft erst, dass etwas beschlossen wurde, wenn die Bagger anrücken.“ Ein Stadtrat, der nicht namentlich genannt werden möchte, räumt ein, dass manche Diskussion ohne Presse deutlich kürzer ausfalle.",
       "B — Grauwitz ist kein Einzelfall. Nach Berechnungen einer Forschungsstelle für Medienwandel in Brakenfeld gibt es inzwischen in fast jedem zehnten Landkreis keine eigenständige Lokalredaktion mehr. Fachleute sprechen von sogenannten Nachrichtenwüsten. Welche Folgen diese haben, lässt sich mittlerweile recht genau beschreiben: In Regionen ohne Lokalzeitung sinkt die Beteiligung an Kommunalwahlen, und es kandidieren weniger Menschen für politische Ämter. In manchen Gegenden ist das Mitteilungsblatt der Verwaltung die einzige regelmäßige Informationsquelle geblieben.",
       "Hinzu kommt ein Befund, der auch Steuerzahler aufhorchen lassen dürfte. Wo keine Journalisten mehr nachfragen, steigen der Untersuchung zufolge die Kosten öffentlicher Bauprojekte im Durchschnitt spürbar an. Die Forscher vermuten, dass Verwaltungen ohne kritische Beobachtung weniger sorgfältig planen und Aufträge großzügiger vergeben. Beweisen lasse sich dieser Zusammenhang im Einzelfall zwar nicht, das Muster sei aber in allen untersuchten Regionen erkennbar.",
       "C — Die Ursachen für das Zeitungssterben sind bekannt. Kleinanzeigen, Stellenangebote und Immobilienannoncen, die den Verlagen jahrzehntelang sichere Einnahmen brachten, sind fast vollständig ins Internet abgewandert. Gleichzeitig geht die Zahl der Abonnenten seit Jahren zurück, weil viele, vor allem jüngere Leser nicht mehr bereit sind, für Nachrichten zu bezahlen, die sie scheinbar kostenlos im Netz finden. Bezahlschranken im Internet haben die Verluste bisher nur teilweise ausgeglichen.",
       "Besonders teuer ist für die Verlage die Zustellung auf dem Land. Wenn ein Bote für wenige Abonnenten weite Strecken zurücklegen muss, verschlingt die Lieferung einer einzelnen Zeitung manchmal mehr, als das Abonnement einbringt. Viele Verlage haben deshalb Lokalausgaben zusammengelegt oder ganze Regionen aufgegeben, in denen sie früher selbstverständlich vertreten waren. In manchen Dörfern kommt die Zeitung inzwischen nur noch mit der Post, oft erst am Nachmittag.",
       "D — Inzwischen gibt es jedoch erste Versuche, die Lücke zu füllen. In Grauwitz haben zwei ehemalige Redakteurinnen ein gemeinnütziges Nachrichtenportal gegründet, das sich über Spenden und die Beiträge von inzwischen rund achthundert Mitgliedern finanziert. Werbung gibt es dort bewusst nicht, um nicht von Anzeigenkunden aus der Region abhängig zu sein. Die Artikel sind für alle frei zugänglich, auch für Leser, die nichts bezahlen. Jeden Morgen erscheinen dort drei bis vier neue Beiträge, am Wochenende ein ausführlicher Rückblick.",
       "Ob das Modell auf Dauer trägt, ist allerdings offen. Die Einnahmen reichen bisher für zwei Teilzeitstellen, mehr nicht. Größere Recherchen, etwa zu den Finanzen der Stadtwerke, sind mit diesem Personal kaum möglich. Rechtlich bewegen sich solche Projekte zudem in einer Grauzone, weil Journalismus bislang nicht ausdrücklich als gemeinnütziger Zweck anerkannt ist. Die beiden Gründerinnen arbeiten deshalb oft weit mehr Stunden, als sie bezahlt bekommen.",
       "E — Dass soziale Netzwerke die Lokalzeitung ersetzen könnten, glauben nur wenige Fachleute. Zwar tauschen sich in Grauwitz inzwischen Tausende in einer Online-Gruppe über das Geschehen in der Stadt aus. Doch dort verbreiten sich Gerüchte oft schneller als überprüfte Informationen, und wer am lautesten schreibt, bestimmt häufig, worüber gesprochen wird. Wer dort einen Beitrag liest, kann kaum erkennen, ob der Verfasser selbst dabei war oder nur etwas weitererzählt.",
       "Als im Herbst das Gerücht kursierte, die Stadt wolle die Grundschule im Ortsteil Lenzhof schließen, kamen zu einer Bürgerversammlung über dreihundert aufgebrachte Eltern. Wie sich herausstellte, war die Schließung nie geplant gewesen. Für Ingrid Sowa ist das ein typisches Beispiel. „Eine Zeitung hätte einfach im Rathaus angerufen und nachgefragt“, sagt sie."
      ]
     },
     "aufgaben": [
      {
       "frage": "In welchem Abschnitt steht das? „Ohne lokale Berichterstattung interessieren sich weniger Bürger für Wahlen in ihrer Gemeinde.\"",
       "opt": [
        "Abschnitt A",
        "Abschnitt B",
        "Abschnitt C",
        "Abschnitt D",
        "Abschnitt E"
       ],
       "loesung": 1,
       "fest": true,
       "stelle": "sinkt die Beteiligung an Kommunalwahlen",
       "erklaerung": "Weniger Beteiligung an Kommunalwahlen ist eine Folge der Nachrichtenwüsten."
      },
      {
       "frage": "In welchem Abschnitt steht das? „Ein neues Angebot verzichtet absichtlich auf Einnahmen aus Anzeigen.\"",
       "opt": [
        "Abschnitt A",
        "Abschnitt B",
        "Abschnitt C",
        "Abschnitt D",
        "Abschnitt E"
       ],
       "loesung": 3,
       "fest": true,
       "stelle": "Werbung gibt es dort bewusst nicht",
       "erklaerung": "Das Portal will unabhängig von Anzeigenkunden bleiben."
      },
      {
       "frage": "In welchem Abschnitt steht das? „Eine falsche Nachricht sorgte für große Aufregung unter Eltern.\"",
       "opt": [
        "Abschnitt A",
        "Abschnitt B",
        "Abschnitt C",
        "Abschnitt D",
        "Abschnitt E"
       ],
       "loesung": 4,
       "fest": true,
       "stelle": "kamen zu einer Bürgerversammlung über dreihundert aufgebrachte Eltern",
       "erklaerung": "Das Gerücht über die Schulschließung war falsch, die Eltern waren trotzdem aufgebracht."
      },
      {
       "frage": "In welchem Abschnitt steht das? „Die Auslieferung gedruckter Zeitungen lohnt sich in dünn besiedelten Gebieten kaum noch.\"",
       "opt": [
        "Abschnitt A",
        "Abschnitt B",
        "Abschnitt C",
        "Abschnitt D",
        "Abschnitt E"
       ],
       "loesung": 2,
       "fest": true,
       "stelle": "verschlingt die Lieferung einer einzelnen Zeitung manchmal mehr, als das Abonnement einbringt",
       "erklaerung": "Auf dem Land kostet die Zustellung manchmal mehr, als das Abo bringt."
      },
      {
       "frage": "In welchem Abschnitt steht das? „Ein Politiker gibt zu, dass ohne Journalisten weniger debattiert wird.\"",
       "opt": [
        "Abschnitt A",
        "Abschnitt B",
        "Abschnitt C",
        "Abschnitt D",
        "Abschnitt E"
       ],
       "loesung": 0,
       "fest": true,
       "stelle": "räumt ein, dass manche Diskussion ohne Presse deutlich kürzer ausfalle",
       "erklaerung": "„einräumen“ = zugeben; ein Stadtrat bestätigt die kürzeren Diskussionen."
      },
      {
       "frage": "In welchem Abschnitt steht das? „Für aufwendige Nachforschungen fehlen dem neuen Projekt die Mitarbeiter.\"",
       "opt": [
        "Abschnitt A",
        "Abschnitt B",
        "Abschnitt C",
        "Abschnitt D",
        "Abschnitt E"
       ],
       "loesung": 3,
       "fest": true,
       "stelle": "sind mit diesem Personal kaum möglich",
       "erklaerung": "Mit zwei Teilzeitstellen sind größere Recherchen kaum zu leisten."
      }
     ]
    },
    {
     "id": "gg1t2s3",
     "text": {
      "sorte": "zeitung",
      "quelle": "Gesundheitsmagazin Vital",
      "titel": "Das Telefon in der Keksdose",
      "zeilen": [
       "A — Jeden Sonntag um neun Uhr morgens wandert in der Wohnung der Familie Kerimoglu in Haselbrück jedes Smartphone in eine alte Keksdose auf dem Küchenschrank. Dort bleibt es bis zum Abend. Die Regel gilt für alle: für die beiden Kinder im Alter von dreizehn und sechzehn Jahren ebenso wie für die Eltern. Eingeführt hat sie Vater Deniz vor gut einem Jahr, nachdem ihm aufgefallen war, dass beim Frühstück niemand mehr miteinander sprach. Jeder habe nur noch auf seinen eigenen Bildschirm geschaut, selbst bei Familienfesten, sagt er und schüttelt den Kopf.",
       "Die ersten Wochen seien zäh gewesen, erzählt seine Frau Anja. Die Kinder hätten sich gelangweilt, und auch sie selbst habe immer wieder nach dem Telefon gegriffen, das gar nicht da war. Inzwischen aber sei der Sonntag zum Lieblingstag der Familie geworden. Man spiele wieder Brettspiele, gehe wandern oder koche gemeinsam – und die Tochter habe sogar angefangen, Gitarre zu lernen. Ganz streng sei man allerdings nicht: Wenn die Großeltern anrufen, dürfe das Telefon kurz aus der Dose.",
       "B — Die Familie ist mit ihrem Unbehagen nicht allein. Einer Befragung im Auftrag einer großen Krankenkasse zufolge verbringen Erwachsene in Deutschland im Durchschnitt mehr als drei Stunden täglich am Smartphone, Jugendliche sogar deutlich mehr. Rund die Hälfte der Befragten gab an, sich durch die ständige Erreichbarkeit zumindest gelegentlich gestresst zu fühlen. Besonders häufig äußerten sich so Menschen, die auch nach Feierabend dienstliche Nachrichten erhalten.",
       "Bemerkenswert ist allerdings ein Widerspruch: Fast ebenso viele erklärten, sie würden ihre Nutzung gern einschränken, hätten es aber bisher nicht geschafft. Besonders häufig berichteten die Befragten davon, abends im Bett noch lange auf den Bildschirm zu schauen und danach schlechter einzuschlafen. Fast jeder Dritte gab zudem an, schon einmal wegen des Telefons einen Termin verpasst oder eine Verabredung vergessen zu haben.",
       "C — Die Psychologin Verena Haldorf, die in Rosenau eine Beratungsstelle für Mediennutzung leitet, warnt allerdings davor, das Smartphone pauschal zu verteufeln. Die bloße Zahl der Stunden sage wenig darüber aus, ob jemand ein Problem habe. Wer abends eine Stunde lang mit der Enkelin in einem anderen Land telefoniere oder ein Hörbuch höre, tue sich damit eher etwas Gutes. Entscheidend sei, ob man das Gerät bewusst nutze oder eher aus Gewohnheit danach greife.",
       "Belastend seien vielmehr die vielen kleinen Unterbrechungen. Jede Benachrichtigung reiße uns aus dem, was wir gerade tun, und es dauere oft mehrere Minuten, bis wir uns wieder konzentrieren könnten. Wer sein Telefon hundertmal am Tag in die Hand nehme, lebe in einem Zustand dauernder Zerstreuung, auch wenn jede einzelne Nutzung nur Sekunden dauere.",
       "D — Um das zu ändern, braucht es nach Ansicht Haldorfs keine radikalen Maßnahmen. Schon das Abschalten aller Benachrichtigungen, die nicht von Menschen stammen, verringere die Zahl der Unterbrechungen erheblich. Hilfreich sei es außerdem, das Telefon nachts nicht im Schlafzimmer aufzubewahren und sich für das Wecken einen herkömmlichen Wecker anzuschaffen. Auch die Startseite des Telefons lasse sich so gestalten, dass nicht gleich die verlockendsten Anwendungen ins Auge fallen.",
       "Wer weiter gehen wolle, könne sich feste handyfreie Zeiten oder Orte vornehmen, etwa beim Essen oder auf dem Weg zur Arbeit. Wichtig sei, solche Regeln nicht allein, sondern gemeinsam mit Partner oder Familie zu vereinbaren. Wer als Einziger verzichte, während alle anderen auf ihre Bildschirme schauen, halte meist nicht lange durch.",
       "E — Auch manche Arbeitgeber haben das Thema inzwischen für sich entdeckt. Ein Versicherungsunternehmen in Altweiler leitet nach achtzehn Uhr keine dienstlichen E-Mails mehr auf die Telefone seiner Mitarbeiter weiter. Nachrichten, die später eintreffen, werden erst am nächsten Morgen zugestellt. Die Zahl der Krankmeldungen wegen seelischer Erschöpfung sei seither spürbar zurückgegangen, heißt es aus der Personalabteilung. Ähnliche Regeln gibt es inzwischen auch in einigen Behörden der Region.",
       "Nicht alle Beschäftigten sind von solchen Regeln begeistert. Gerade Eltern, die nachmittags früher gehen und abends noch einmal arbeiten möchten, empfinden die Sperre als Bevormundung. Das Unternehmen hat deshalb Ausnahmen zugelassen: Wer möchte, kann sich von der Regelung befreien lassen, muss dies aber mit seiner Führungskraft absprechen. Bisher hat davon nach Angaben der Firma etwa jeder zehnte Mitarbeiter Gebrauch gemacht."
      ]
     },
     "aufgaben": [
      {
       "frage": "In welchem Abschnitt steht das? „Viele Menschen haben bereits erfolglos versucht, weniger Zeit am Telefon zu verbringen.\"",
       "opt": [
        "Abschnitt A",
        "Abschnitt B",
        "Abschnitt C",
        "Abschnitt D",
        "Abschnitt E"
       ],
       "loesung": 1,
       "fest": true,
       "stelle": "hätten es aber bisher nicht geschafft",
       "erklaerung": "Fast die Hälfte will die Nutzung einschränken, hat es aber nicht geschafft."
      },
      {
       "frage": "In welchem Abschnitt steht das? „Wie lange jemand sein Smartphone benutzt, ist für sich genommen wenig aussagekräftig.\"",
       "opt": [
        "Abschnitt A",
        "Abschnitt B",
        "Abschnitt C",
        "Abschnitt D",
        "Abschnitt E"
       ],
       "loesung": 2,
       "fest": true,
       "stelle": "Die bloße Zahl der Stunden sage wenig darüber aus",
       "erklaerung": "Haldorf: Die Dauer allein zeigt nicht, ob jemand ein Problem hat."
      },
      {
       "frage": "In welchem Abschnitt steht das? „Eine Maßnahme zum Schutz vor Überlastung wird nicht von allen Betroffenen begrüßt.\"",
       "opt": [
        "Abschnitt A",
        "Abschnitt B",
        "Abschnitt C",
        "Abschnitt D",
        "Abschnitt E"
       ],
       "loesung": 4,
       "fest": true,
       "stelle": "empfinden die Sperre als Bevormundung",
       "erklaerung": "Manche Eltern lehnen die Mailsperre am Abend ab."
      },
      {
       "frage": "In welchem Abschnitt steht das? „Der Anstoß für eine Regel war die fehlende Unterhaltung bei einer gemeinsamen Mahlzeit.\"",
       "opt": [
        "Abschnitt A",
        "Abschnitt B",
        "Abschnitt C",
        "Abschnitt D",
        "Abschnitt E"
       ],
       "loesung": 0,
       "fest": true,
       "stelle": "dass beim Frühstück niemand mehr miteinander sprach",
       "erklaerung": "Das Schweigen am Frühstückstisch führte zur Keksdosen-Regel."
      },
      {
       "frage": "In welchem Abschnitt steht das? „Vorsätze lassen sich leichter umsetzen, wenn das Umfeld mitmacht.\"",
       "opt": [
        "Abschnitt A",
        "Abschnitt B",
        "Abschnitt C",
        "Abschnitt D",
        "Abschnitt E"
       ],
       "loesung": 3,
       "fest": true,
       "stelle": "nicht allein, sondern gemeinsam mit Partner oder Familie zu vereinbaren",
       "erklaerung": "Wer allein verzichtet, hält laut Haldorf meist nicht lange durch."
      },
      {
       "frage": "In welchem Abschnitt steht das? „Häufige kurze Blicke auf das Telefon stören die Konzentration stärker, als man denkt.\"",
       "opt": [
        "Abschnitt A",
        "Abschnitt B",
        "Abschnitt C",
        "Abschnitt D",
        "Abschnitt E"
       ],
       "loesung": 2,
       "fest": true,
       "stelle": "auch wenn jede einzelne Nutzung nur Sekunden dauere",
       "erklaerung": "Die vielen kurzen Unterbrechungen führen zu dauernder Zerstreuung."
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
     "id": "gg1t3s1",
     "text": {
      "sorte": "zeitung",
      "quelle": "Arbeit & Leben – Das Wochenmagazin, Reportage",
      "titel": "Sachtext",
      "zeilen": [
       "Es ist kurz nach sechs Uhr morgens, als Matthias Brendel den Transporter vor einem Mehrfamilienhaus am Stadtrand von Kaltenbrunn parkt. Der Dachdeckermeister hat heute vier Mitarbeiter dabei, eigentlich bräuchte er sieben. „Die Aufträge reichen bis weit ins nächste Jahr\", sagt er, während er die Leiter vom Dach des Wagens löst. „Ich könnte sofort zwei Gesellen einstellen, aber es bewirbt sich niemand.\" Seit drei Jahren schaltet Brendel eine Stellenanzeige, auf die sich bislang nur ein einziger Bewerber gemeldet hat – und der sei nach zwei Wochen wieder gegangen, weil ihm die Arbeit in der Höhe nicht geheuer war.",
       "Brendels Lage ist kein Einzelfall. Nach Angaben der Handwerkskammer Oberwald blieb im vergangenen Jahr in ihrem Bezirk fast ein Drittel der angebotenen Ausbildungsplätze unbesetzt, in einzelnen Gewerken wie dem Fleischerhandwerk oder dem Gerüstbau sogar mehr als die Hälfte. Gleichzeitig scheiden in den kommenden zehn Jahren viele Meister aus geburtenstarken Jahrgängen aus dem Berufsleben aus. Rund jeder vierte Betriebsinhaber im Kammerbezirk ist älter als sechzig Jahre, und längst nicht jeder hat einen Nachfolger gefunden. Für Kunden bedeutet das schon heute lange Wartezeiten: Wer einen Heizungsbauer oder einen Elektriker braucht, muss sich nicht selten auf mehrere Monate einstellen.",
       "Die Ursachen sind vielfältig. Ein wesentlicher Grund liegt in der Bevölkerungsentwicklung: Es verlassen schlicht weniger junge Menschen die Schulen als noch vor zwanzig Jahren. Hinzu kommt, dass ein immer größerer Teil eines Jahrgangs das Abitur macht und anschließend ein Studium aufnimmt. „Viele Eltern sehen im Handwerk nach wie vor eine Notlösung für diejenigen, die es nicht an die Hochschule schaffen\", sagt Sabine Kerkhoff, die bei der Kammer für die Nachwuchswerbung zuständig ist. Dieses Bild halte sich hartnäckig, obwohl es mit der Wirklichkeit wenig zu tun habe.",
       "Tatsächlich sind die Verdienstmöglichkeiten besser als ihr Ruf. Zwar liegen die Ausbildungsvergütungen in manchen Gewerken noch immer unter dem Durchschnitt, und auch Gesellen verdienen zu Beginn ihrer Laufbahn oft weniger als Akademiker. Wer jedoch den Meistertitel erwirbt und sich womöglich selbstständig macht, kann nach Berechnungen der Kammer über das gesamte Berufsleben hinweg ein Einkommen erzielen, das mit dem vieler Hochschulabsolventen durchaus mithalten kann. Hinzu kommt, dass ein Meister im Gegensatz zu manchem Akademiker kaum je um seinen Arbeitsplatz fürchten muss.",
       "Doch Geld allein entscheidet nicht über die Berufswahl. In Gesprächen mit Schülern hört Kerkhoff immer wieder dieselben Vorbehalte: Die Arbeit sei körperlich anstrengend, man müsse früh aufstehen, und bei Wind und Wetter draußen zu sein, erscheine vielen wenig verlockend. Manche dieser Einwände lassen sich nicht wegdiskutieren. Andere beruhen auf veralteten Vorstellungen. In vielen Betrieben gehören digitale Aufmaße, Drohnenaufnahmen von Dächern oder die Programmierung von Haustechnik längst zum Alltag – Tätigkeiten, die in der öffentlichen Wahrnehmung des Handwerks kaum vorkommen. Gerade junge Leute, die sich für Technik begeistern, wüssten davon oft nichts, bedauert Kerkhoff. In den Berufsorientierungsangeboten der Schulen komme das Handwerk im Vergleich zu Studiengängen nur am Rande vor.",
       "Um dieses Bild zu korrigieren, setzt die Kammer seit zwei Jahren auf sogenannte Werkstatttage. Schüler der achten und neunten Klassen verbringen dabei einen Tag in einem Betrieb und dürfen selbst Hand anlegen, statt nur zuzuschauen. Die Rückmeldungen seien überwiegend positiv, berichtet Kerkhoff, und aus etwa jedem zehnten Werkstatttag sei bislang ein Praktikum oder sogar ein Ausbildungsvertrag hervorgegangen. Ob das Programm langfristig mehr junge Menschen ins Handwerk bringt, lasse sich allerdings erst in einigen Jahren beurteilen.",
       "Auch Brendel hat sich an dem Programm beteiligt – und dabei Leonie Hartwig kennengelernt. Die Neunzehnjährige hatte nach dem Abitur zunächst ein Studium der Betriebswirtschaft begonnen, es aber nach zwei Semestern abgebrochen. „Ich habe den ganzen Tag vor dem Bildschirm gesessen und am Ende nie gewusst, was ich eigentlich geschafft habe\", erzählt sie. Heute steht sie im zweiten Lehrjahr auf Brendels Baustellen. Abends, so sagt sie, sehe sie, was sie geleistet habe. Ihre Freunde von früher hätten anfangs mit Unverständnis reagiert, inzwischen fragten einige sogar nach freien Plätzen.",
       "Studienabbrecher wie Hartwig gelten in der Branche als wichtige Zielgruppe. Viele von ihnen bringen Kenntnisse mit, die im Betrieb gefragt sind, etwa in Mathematik oder in der Buchhaltung, und sie dürfen ihre Ausbildung unter bestimmten Voraussetzungen verkürzen. Mehrere Kammern bieten deshalb eigene Beratungsstellen an, die eng mit den Hochschulen zusammenarbeiten. Allerdings wenden sich die meisten Studienabbrecher erst dann an eine solche Stelle, wenn sie das Studium bereits aufgegeben haben – oft nach einer längeren Phase der Unsicherheit.",
       "Eine weitere Hoffnung ruht auf Fachkräften aus dem Ausland. Seit die Regeln für die Zuwanderung vereinfacht wurden, können Betriebe leichter Gesellen aus Staaten außerhalb der Europäischen Union einstellen. In der Praxis stoßen viele Handwerksmeister jedoch auf Hürden. Die Anerkennung ausländischer Abschlüsse zieht sich häufig über Monate hin, und gerade kleine Betriebe haben weder die Zeit noch das Personal, um sich durch die Formulare zu arbeiten. Brendel hat es einmal versucht und nach einem halben Jahr aufgegeben. „Ich bin Dachdecker, kein Verwaltungsfachmann\", sagt er.",
       "Hinzu kommt die Sprache. Auf einer Baustelle müssen Sicherheitsanweisungen sofort verstanden werden, und auch im Gespräch mit Kunden reicht ein Grundwortschatz kaum aus. Einige Betriebe haben sich deshalb zusammengeschlossen und bieten ihren ausländischen Mitarbeitern gemeinsam Sprachkurse an, die sich am Vokabular des jeweiligen Gewerks orientieren. Statt allgemeiner Lehrbuchdialoge lernen die Teilnehmer dort, wie man Werkzeuge benennt, Material bestellt oder einem Kunden einen Kostenvoranschlag erklärt. In Kaltenbrunn organisiert die Kreishandwerkerschaft solche Kurse inzwischen zweimal pro Woche am frühen Abend, damit die Teilnehmer nicht auf Arbeitszeit verzichten müssen.",
       "Manche Betriebe reagieren auf den Mangel auch, indem sie ihr Angebot verkleinern. Sie nehmen nur noch Aufträge in der näheren Umgebung an, verzichten auf kleinere Reparaturen oder konzentrieren sich auf besonders lukrative Arbeiten. Für den einzelnen Betrieb mag das wirtschaftlich vernünftig sein. Für die Gesellschaft insgesamt ist es problematisch, denn ausgerechnet bei Aufgaben wie der energetischen Sanierung von Gebäuden oder dem Einbau von Wärmepumpen wird das Handwerk in den kommenden Jahren dringender gebraucht denn je.",
       "Brendel sieht die Zukunft dennoch nicht nur düster. Seit Leonie Hartwig bei ihm angefangen hat, hätten sich zwei weitere junge Leute für ein Praktikum gemeldet, beide über Hartwigs Freundeskreis. „Am Ende überzeugen nicht Broschüren, sondern Menschen, die von ihrer Arbeit erzählen\", sagt er. Mehr Anerkennung für das Handwerk wünscht er sich trotzdem, und zwar nicht erst dann, wenn ein Rohr bricht oder es durchs Dach regnet. Dann klettert er die Leiter hinauf, denn die Wettervorhersage hat für den Nachmittag Regen angekündigt."
      ]
     },
     "aufgaben": [
      {
       "frage": "Auf Brendels Stellenanzeige hat sich in drei Jahren kein einziger Bewerber gemeldet.",
       "opt": [
        "richtig",
        "falsch",
        "steht nicht im Text"
       ],
       "loesung": 1,
       "fest": true,
       "stelle": "nur ein einziger Bewerber gemeldet hat",
       "erklaerung": "Ein Bewerber hat sich gemeldet, ist aber nach zwei Wochen wieder gegangen."
      },
      {
       "frage": "In manchen Gewerken blieb mehr als die Hälfte der Ausbildungsplätze unbesetzt.",
       "opt": [
        "richtig",
        "falsch",
        "steht nicht im Text"
       ],
       "loesung": 0,
       "fest": true,
       "stelle": "sogar mehr als die Hälfte",
       "erklaerung": "Im Fleischerhandwerk oder Gerüstbau waren es sogar mehr als die Hälfte."
      },
      {
       "frage": "Die Kammer hilft älteren Meistern gezielt bei der Suche nach einem Nachfolger.",
       "opt": [
        "richtig",
        "falsch",
        "steht nicht im Text"
       ],
       "loesung": 2,
       "fest": true,
       "stelle": "längst nicht jeder hat einen Nachfolger gefunden",
       "erklaerung": "Der Text nennt nur das Problem; von einer Hilfe der Kammer ist keine Rede."
      },
      {
       "frage": "Kerkhoff zufolge entspricht das Bild vom Handwerk als Notlösung kaum der Realität.",
       "opt": [
        "richtig",
        "falsch",
        "steht nicht im Text"
       ],
       "loesung": 0,
       "fest": true,
       "stelle": "obwohl es mit der Wirklichkeit wenig zu tun habe",
       "erklaerung": "Sie sagt, das Bild habe mit der Wirklichkeit wenig zu tun."
      },
      {
       "frage": "Gesellen verdienen schon am Anfang ihrer Laufbahn in der Regel mehr als Akademiker.",
       "opt": [
        "richtig",
        "falsch",
        "steht nicht im Text"
       ],
       "loesung": 1,
       "fest": true,
       "stelle": "zu Beginn ihrer Laufbahn oft weniger als Akademiker",
       "erklaerung": "Zu Beginn verdienen Gesellen oft weniger; erst mit dem Meistertitel holen sie auf."
      },
      {
       "frage": "Die Werkstatttage haben nachweislich mehr Jugendliche ins Handwerk gebracht.",
       "opt": [
        "richtig",
        "falsch",
        "steht nicht im Text"
       ],
       "loesung": 1,
       "fest": true,
       "stelle": "lasse sich allerdings erst in einigen Jahren beurteilen",
       "erklaerung": "Ob das Programm langfristig wirkt, kann man noch nicht beurteilen."
      },
      {
       "frage": "Einige von Hartwigs früheren Freunden interessieren sich inzwischen für eine Ausbildung.",
       "opt": [
        "richtig",
        "falsch",
        "steht nicht im Text"
       ],
       "loesung": 0,
       "fest": true,
       "stelle": "inzwischen fragten einige sogar nach freien Plätzen",
       "erklaerung": "Anfangs reagierten sie mit Unverständnis, jetzt fragen einige nach Plätzen."
      },
      {
       "frage": "Die Beratungsstellen für Studienabbrecher werden von den Hochschulen finanziert.",
       "opt": [
        "richtig",
        "falsch",
        "steht nicht im Text"
       ],
       "loesung": 2,
       "fest": true,
       "stelle": "die eng mit den Hochschulen zusammenarbeiten",
       "erklaerung": "Es heißt nur, dass sie zusammenarbeiten; zur Finanzierung sagt der Text nichts."
      },
      {
       "frage": "Brendel beschäftigt inzwischen einen Gesellen aus einem Land außerhalb der EU.",
       "opt": [
        "richtig",
        "falsch",
        "steht nicht im Text"
       ],
       "loesung": 1,
       "fest": true,
       "stelle": "nach einem halben Jahr aufgegeben",
       "erklaerung": "Er hat es versucht, aber wegen der Bürokratie aufgegeben."
      },
      {
       "frage": "Die Sprachkurse in Kaltenbrunn werden von der Arbeitsagentur bezahlt.",
       "opt": [
        "richtig",
        "falsch",
        "steht nicht im Text"
       ],
       "loesung": 2,
       "fest": true,
       "stelle": "organisiert die Kreishandwerkerschaft solche Kurse",
       "erklaerung": "Genannt wird nur, wer die Kurse organisiert, nicht wer sie bezahlt."
      },
      {
       "frage": "Bei der energetischen Sanierung wird das Handwerk künftig besonders gebraucht.",
       "opt": [
        "richtig",
        "falsch",
        "steht nicht im Text"
       ],
       "loesung": 0,
       "fest": true,
       "stelle": "dringender gebraucht denn je",
       "erklaerung": "Gerade bei Sanierung und Wärmepumpen wird das Handwerk dringender gebraucht denn je."
      },
      {
       "frage": "Welche Überschrift passt am besten zum ganzen Text?",
       "opt": [
        "Wie Werkstatttage das Handwerk gerettet haben",
        "Warum sich ein Studium mehr lohnt als eine Lehre",
        "Volle Auftragsbücher, leere Werkbänke: Das Handwerk sucht Nachwuchs"
       ],
       "loesung": 2,
       "fest": true,
       "erklaerung": "Der Text beschreibt den Nachwuchsmangel bei guter Auftragslage, seine Ursachen und mögliche Lösungen. Die Werkstatttage sind nur ein Beispiel mit offenem Ausgang, und ein Studium wird nicht als lohnender dargestellt."
      }
     ]
    },
    {
     "id": "gg1t3s2",
     "text": {
      "sorte": "zeitung",
      "quelle": "Stadtleben – Magazin für Gesellschaft und Alltag",
      "titel": "Sachtext",
      "zeilen": [
       "Wer in einer Großstadt lebt, ist selten allein – zumindest, wenn man die Zahl der Menschen betrachtet, denen man täglich begegnet. In der Straßenbahn, im Supermarkt, im Treppenhaus: Überall sind andere. Und doch berichten gerade Stadtbewohner auffallend häufig, dass sie sich einsam fühlen. In einer Umfrage, die das Institut für Stadtsoziologie in Marbeck im vergangenen Frühjahr unter knapp viertausend Erwachsenen durchgeführt hat, gab fast jeder fünfte Befragte in Großstädten an, sich oft oder sehr oft einsam zu fühlen. In kleineren Gemeinden lag der Anteil etwas niedriger.",
       "Die Soziologin Katrin Oswald, die die Studie geleitet hat, warnt allerdings davor, aus diesen Zahlen vorschnelle Schlüsse zu ziehen. „Die Stadt macht nicht automatisch einsam\", sagt sie. Vielmehr zögen Großstädte überdurchschnittlich viele Menschen an, die sich in einer Umbruchphase befänden: junge Leute, die für eine Ausbildung oder eine erste Stelle umziehen, Menschen nach einer Trennung, Zugezogene aus dem Ausland. Wer neu in einer Stadt sei, habe dort naturgemäß noch kein gewachsenes Netz aus Freunden und Bekannten. Der Unterschied zwischen Stadt und Land schrumpfe deutlich, wenn man solche Faktoren herausrechne.",
       "Wichtig ist Oswald auch eine begriffliche Unterscheidung. Alleinsein und Einsamkeit seien nicht dasselbe. Viele Menschen leben allein und genießen ihre Unabhängigkeit, ohne sich je einsam zu fühlen. Umgekehrt kann man in einer Familie oder einer Partnerschaft leben und dennoch unter Einsamkeit leiden. Entscheidend sei das Gefühl, dass die eigenen Beziehungen nicht den eigenen Bedürfnissen entsprechen – dass niemand da ist, mit dem man über Sorgen sprechen kann, oder dass man sich in seinem Umfeld nicht verstanden fühlt. Einsamkeit sei daher immer ein subjektives Empfinden, das sich nicht einfach an der Zahl der Kontakte ablesen lasse.",
       "Überraschend für viele ist, wen das Problem besonders betrifft. Lange galt Einsamkeit vor allem als Thema älterer Menschen, die ihren Partner verloren haben oder kaum noch das Haus verlassen können. Die Marbecker Daten zeichnen ein anderes Bild: Den höchsten Anteil an Menschen, die sich häufig einsam fühlen, fand das Institut in der Gruppe der Achtzehn- bis Neunundzwanzigjährigen. Ältere Menschen waren zwar seltener betroffen, litten aber, wenn sie betroffen waren, häufiger unter einer lang anhaltenden Einsamkeit, die sich über Jahre hinzog.",
       "Für die jüngeren Befragten spielt nach Ansicht vieler Fachleute die veränderte Kommunikation eine Rolle. Zwar sind junge Erwachsene über ihr Mobiltelefon mit Dutzenden, manchmal Hunderten Menschen verbunden. Doch digitale Kontakte ersetzen persönliche Begegnungen offenbar nur begrenzt. Oswald ist in diesem Punkt dennoch vorsichtig. Ihre Studie zeige lediglich einen Zusammenhang zwischen sehr intensiver Nutzung sozialer Netzwerke und dem Gefühl der Einsamkeit. Ob die Nutzung einsam mache oder ob einsame Menschen mehr Zeit im Netz verbrächten, lasse sich daraus nicht ablesen.",
       "Dass Einsamkeit mehr ist als ein privates Unglück, darüber besteht inzwischen weitgehend Einigkeit. Medizinische Untersuchungen bringen anhaltende Einsamkeit mit einem erhöhten Risiko für Herz-Kreislauf-Erkrankungen, Depressionen und Schlafstörungen in Verbindung. Einige Gesundheitsexperten vergleichen die Folgen sogar mit denen des Rauchens – ein Vergleich, den Oswald für überzogen hält, weil er die Vielschichtigkeit des Themas verdecke. Unstrittig sei jedoch, dass einsame Menschen häufiger zum Arzt gehen und dass dadurch auch Kosten für das Gesundheitssystem entstehen.",
       "Auch die Gestaltung der Städte selbst steht in der Kritik. Stadtplaner haben in den vergangenen Jahrzehnten vielerorts Wohnviertel gebaut, in denen es kaum Orte gibt, an denen sich Nachbarn zufällig begegnen. Wo früher ein kleiner Laden an der Ecke, eine Kneipe oder eine Bank auf dem Platz zum Verweilen einlud, finden sich heute oft nur Parkplätze und Durchgangsstraßen. Fachleute sprechen von sogenannten dritten Orten – Räumen jenseits von Wohnung und Arbeitsplatz, an denen man sich ohne Verabredung und ohne Konsumzwang aufhalten kann. Solche Orte, so die Annahme, erleichtern es, aus flüchtigen Begegnungen nach und nach Bekanntschaften werden zu lassen. Bibliotheken, Parks oder Gemeinschaftsgärten können diese Rolle übernehmen, sofern sie einladend gestaltet sind.",
       "Einige Städte versuchen gegenzusteuern. Wenzlau etwa hat in einem ehemaligen Ladenlokal im Stadtteil Nordhafen einen Nachbarschaftstreff eingerichtet, der an sechs Tagen in der Woche geöffnet ist. Es gibt dort Kaffee, Zeitungen, eine kleine Werkstatt und einen großen Küchentisch, an dem jeden Donnerstag gemeinsam gekocht wird. Die Stadt bezahlt die Miete und eine halbe Stelle für die Koordination; alles andere organisieren Freiwillige aus dem Viertel. Ursprünglich war der Treff als Angebot für Senioren gedacht, inzwischen kommen Menschen aller Altersgruppen.",
       "Einer der Freiwilligen ist Herbert Malinowski. Der ehemalige Busfahrer, der vor vier Jahren seine Frau verloren hat, kam zunächst nur zum Zeitunglesen. „Ich wollte eigentlich nur nicht den ganzen Tag allein in der Wohnung sitzen\", erzählt er. Heute repariert er in der Werkstatt Fahrräder für Kinder aus der Nachbarschaft und hat sich mit einem jungen Mann aus Syrien angefreundet, der ihm im Gegenzug bei Formularen und beim Umgang mit dem Smartphone hilft. Malinowski sagt, er habe in den letzten zwei Jahren mehr Menschen kennengelernt als in den zwanzig Jahren davor.",
       "Ob solche Angebote die Einsamkeit tatsächlich verringern, ist allerdings schwer zu messen. Eine Begleitstudie zu Treffpunkten in mehreren Städten kam zu dem Ergebnis, dass sie vor allem jene Menschen erreichen, die ohnehin noch über eine gewisse Eigeninitiative verfügen. Wer sich bereits stark zurückgezogen hat, schafft den Schritt über die Schwelle oft nicht allein. Einige Projekte setzen deshalb auf aufsuchende Arbeit: Ehrenamtliche besuchen ältere Menschen zu Hause oder rufen sie regelmäßig an, um Vertrauen aufzubauen, bevor sie sie zu gemeinsamen Aktivitäten einladen.",
       "In einigen europäischen Ländern hat das Thema längst die nationale Politik erreicht. Dort gibt es eigene Strategien gegen Einsamkeit, teilweise sogar ein dafür zuständiges Regierungsmitglied. Hierzulande werden entsprechende Pläne ebenfalls diskutiert. Kritiker wenden ein, der Staat könne keine Freundschaften verordnen. Befürworter halten dagegen, dass es nicht um Verordnungen gehe, sondern darum, Gelegenheiten zu schaffen und das Thema aus der Tabuzone zu holen. Denn viele Betroffene, so Oswald, schämten sich für ihre Einsamkeit und sprächen deshalb mit niemandem darüber.",
       "Was also kann der Einzelne tun? Oswald rät, nicht auf die große Freundschaft zu warten, sondern kleine Kontakte ernst zu nehmen: das Gespräch mit der Nachbarin, den Gruß an den Verkäufer in der Bäckerei, die regelmäßige Teilnahme an einem Verein oder Kurs. Solche flüchtigen Begegnungen würden oft unterschätzt, dabei vermittelten sie das Gefühl, Teil einer Gemeinschaft zu sein. Malinowski formuliert es einfacher: „Man muss einmal durch die Tür gehen. Danach wird es leichter.\""
      ]
     },
     "aufgaben": [
      {
       "frage": "In der Marbecker Umfrage fühlten sich Menschen in kleineren Gemeinden häufiger einsam als in Großstädten.",
       "opt": [
        "richtig",
        "falsch",
        "steht nicht im Text"
       ],
       "loesung": 1,
       "fest": true,
       "stelle": "In kleineren Gemeinden lag der Anteil etwas niedriger",
       "erklaerung": "In kleineren Gemeinden war der Anteil niedriger, nicht höher."
      },
      {
       "frage": "Oswald zufolge wird der Unterschied zwischen Stadt und Land kleiner, wenn man Lebensumbrüche berücksichtigt.",
       "opt": [
        "richtig",
        "falsch",
        "steht nicht im Text"
       ],
       "loesung": 0,
       "fest": true,
       "stelle": "Der Unterschied zwischen Stadt und Land schrumpfe deutlich",
       "erklaerung": "Rechnet man Umbruchphasen wie Umzug oder Trennung heraus, schrumpft der Unterschied."
      },
      {
       "frage": "Junge Erwachsene fühlten sich in der Studie am häufigsten einsam.",
       "opt": [
        "richtig",
        "falsch",
        "steht nicht im Text"
       ],
       "loesung": 0,
       "fest": true,
       "stelle": "in der Gruppe der Achtzehn- bis Neunundzwanzigjährigen",
       "erklaerung": "Den höchsten Anteil fand das Institut bei den Achtzehn- bis Neunundzwanzigjährigen."
      },
      {
       "frage": "Die Studie belegt, dass die intensive Nutzung sozialer Netzwerke einsam macht.",
       "opt": [
        "richtig",
        "falsch",
        "steht nicht im Text"
       ],
       "loesung": 1,
       "fest": true,
       "stelle": "lasse sich daraus nicht ablesen",
       "erklaerung": "Die Studie zeigt nur einen Zusammenhang, keine Ursache."
      },
      {
       "frage": "Oswald hält den Vergleich der Folgen von Einsamkeit mit denen des Rauchens für treffend.",
       "opt": [
        "richtig",
        "falsch",
        "steht nicht im Text"
       ],
       "loesung": 1,
       "fest": true,
       "stelle": "ein Vergleich, den Oswald für überzogen hält",
       "erklaerung": "Sie hält den Vergleich für überzogen."
      },
      {
       "frage": "Die Krankenkassen haben bereits eigene Programme gegen Einsamkeit eingeführt.",
       "opt": [
        "richtig",
        "falsch",
        "steht nicht im Text"
       ],
       "loesung": 2,
       "fest": true,
       "stelle": "dass dadurch auch Kosten für das Gesundheitssystem entstehen",
       "erklaerung": "Es geht nur um Kosten; von Programmen der Krankenkassen ist keine Rede."
      },
      {
       "frage": "In neuen Wohnvierteln werden inzwischen wieder häufiger dritte Orte eingeplant.",
       "opt": [
        "richtig",
        "falsch",
        "steht nicht im Text"
       ],
       "loesung": 2,
       "fest": true,
       "stelle": "Fachleute sprechen von sogenannten dritten Orten",
       "erklaerung": "Der Text erklärt nur den Begriff; ob solche Orte heute eingeplant werden, steht nicht da."
      },
      {
       "frage": "Der gemeinsame Kochabend ist das beliebteste Angebot des Treffs in Nordhafen.",
       "opt": [
        "richtig",
        "falsch",
        "steht nicht im Text"
       ],
       "loesung": 2,
       "fest": true,
       "stelle": "an dem jeden Donnerstag gemeinsam gekocht wird",
       "erklaerung": "Der Kochabend wird erwähnt, aber nicht mit anderen Angeboten verglichen."
      },
      {
       "frage": "Malinowski hilft im Treff Kindern aus dem Viertel.",
       "opt": [
        "richtig",
        "falsch",
        "steht nicht im Text"
       ],
       "loesung": 0,
       "fest": true,
       "stelle": "repariert er in der Werkstatt Fahrräder für Kinder",
       "erklaerung": "Er repariert Fahrräder für Kinder aus der Nachbarschaft."
      },
      {
       "frage": "Treffpunkte erreichen besonders gut Menschen, die sich stark zurückgezogen haben.",
       "opt": [
        "richtig",
        "falsch",
        "steht nicht im Text"
       ],
       "loesung": 1,
       "fest": true,
       "stelle": "schafft den Schritt über die Schwelle oft nicht allein",
       "erklaerung": "Sie erreichen vor allem Menschen mit Eigeninitiative, Zurückgezogene eher nicht."
      },
      {
       "frage": "Viele Betroffene sprechen aus Scham mit niemandem über ihre Einsamkeit.",
       "opt": [
        "richtig",
        "falsch",
        "steht nicht im Text"
       ],
       "loesung": 0,
       "fest": true,
       "stelle": "schämten sich für ihre Einsamkeit",
       "erklaerung": "Laut Oswald schämen sich viele und sprechen deshalb mit niemandem darüber."
      },
      {
       "frage": "Welche Überschrift passt am besten zum ganzen Text?",
       "opt": [
        "Allein unter vielen: Warum Einsamkeit in der Stadt kein Randthema ist",
        "Senioren in der Großstadt: Ein Leben ohne Kontakte",
        "Wie soziale Netzwerke junge Menschen einsam machen"
       ],
       "loesung": 0,
       "fest": true,
       "erklaerung": "Der Text behandelt Ursachen, Folgen und Gegenmittel der Einsamkeit in Städten für alle Altersgruppen. Senioren sind nur ein Teilaspekt, und eine Ursache durch soziale Netzwerke ist laut Oswald gerade nicht belegt."
      }
     ]
    },
    {
     "id": "gg1t3s3",
     "text": {
      "sorte": "zeitung",
      "quelle": "Konsum kompakt – Wochenendausgabe",
      "titel": "Sachtext",
      "zeilen": [
       "Am Samstagvormittag bildet sich vor dem Laden in der Rheinfelder Altstadt eine Schlange. Drinnen hängen Jacken, Kleider und Hemden dicht an dicht, sortiert nicht nach Größe, sondern nach Farbe. „Neu ist hier nichts\", sagt Selin Arslan und lacht. Vor sechs Jahren hat die gelernte Schneiderin ihren Second-Hand-Laden eröffnet, damals noch in einem Hinterhof und mit der Sorge, ob sich überhaupt genug Kundschaft finden würde. Heute beschäftigt sie drei Angestellte und überlegt, eine zweite Filiale zu eröffnen. Gebrauchte Kleidung, so scheint es, ist in der Mitte der Gesellschaft angekommen.",
       "Die Zahlen bestätigen diesen Eindruck. Nach Schätzungen eines Branchenverbands ist der Umsatz mit gebrauchter Mode in den vergangenen fünf Jahren deutlich schneller gewachsen als der Markt für neue Kleidung. Den größten Anteil daran haben allerdings nicht Läden wie der von Arslan, sondern Internetplattformen, auf denen Privatleute ihre Kleidung direkt an andere verkaufen. Mit wenigen Fotos und ein paar Klicks lässt sich dort ein Pullover anbieten, der seit Jahren ungetragen im Schrank lag. Für viele Nutzer ist das Verkaufen fast so reizvoll geworden wie das Kaufen. Manche verdienen sich auf diese Weise regelmäßig etwas dazu, andere betrachten den Weiterverkauf eher als eine Art Hobby, bei dem es weniger um Geld als um das Aufräumen geht.",
       "Die Motive der Käufer sind unterschiedlich. In einer Befragung der Forschungsstelle Kreislaufwirtschaft in Talheim nannten die meisten Teilnehmer an erster Stelle den Preis. Erst danach folgten der Umweltschutz und der Wunsch, Kleidung zu finden, die nicht jeder trägt. Bemerkenswert ist, dass sich die Gewichtung je nach Alter unterscheidet: Während für Menschen über fünfzig vor allem das Sparen zählte, spielten bei den Unter-Dreißigjährigen ökologische Gründe eine größere Rolle. Auch das Stigma, das gebrauchter Kleidung lange anhaftete, ist bei Jüngeren offenbar weitgehend verschwunden.",
       "Dass Second-Hand-Mode der Umwelt nützen kann, ist unbestritten. Die Herstellung von Textilien verbraucht große Mengen an Wasser und Energie, und für viele Kleidungsstücke werden Chemikalien eingesetzt, die Böden und Flüsse belasten. Jedes Kleidungsstück, das länger getragen wird, verringert diese Belastung – zumindest theoretisch. „Entscheidend ist, ob ein gebrauchtes Teil tatsächlich ein neues ersetzt\", sagt Jonas Weidinger, der an der Forschungsstelle zum Konsumverhalten forscht. Wer zusätzlich zu seinen üblichen Einkäufen gebrauchte Kleidung erwerbe, entlaste die Umwelt kaum.",
       "Genau hier sieht Weidinger ein Problem. Die Daten seiner Forschungsstelle deuten darauf hin, dass manche Käufer durch die günstigen Preise auf den Plattformen mehr Kleidung kaufen als zuvor. Einige nutzen den Weiterverkauf zudem, um ihren Kleiderschrank ständig zu erneuern: Sie kaufen ein Teil, tragen es wenige Male und bieten es dann wieder an. „Das ist im Grunde dasselbe Muster wie bei billiger neuer Mode, nur mit einem besseren Gewissen\", sagt Weidinger. Wie verbreitet dieses Verhalten ist, könne man allerdings noch nicht genau sagen.",
       "Hinzu kommt der Versand. Wer auf einer Plattform kauft, bekommt die Ware in der Regel per Paket geliefert, und nicht selten wird ein Teil zurückgeschickt, weil es nicht passt oder anders aussieht als auf dem Foto. Jede dieser Sendungen verursacht Emissionen und Verpackungsmüll. Im Vergleich zur Herstellung eines neuen Kleidungsstücks fallen diese Belastungen zwar meist geringer aus. Weidinger warnt dennoch davor, sie zu vernachlässigen, zumal viele Pakete einzeln und über weite Strecken verschickt werden.",
       "Auch für den klassischen Second-Hand-Handel hat der Boom zwei Seiten. Einerseits profitieren Läden wie der von Arslan vom neuen Image gebrauchter Mode. Andererseits wird es schwieriger, gute Ware zu bekommen. Früher hätten die Leute ihre gut erhaltenen Sachen einfach vorbeigebracht, erzählt Arslan. Heute verkauften viele die wertvollen Stücke lieber selbst im Internet und brächten ihr nur noch, was sich dort nicht loswerden lasse. Sie kauft deshalb inzwischen gezielt Restbestände bei Haushaltsauflösungen und arbeitet mit einer Kleiderkammer in der Nachbarstadt zusammen.",
       "Die Kleiderkammern und Sammelstellen gemeinnütziger Organisationen stehen ohnehin unter Druck. In die Altkleidercontainer gelangt immer mehr Kleidung von schlechter Qualität, die sich weder für den Verkauf noch für die Weitergabe an Bedürftige eignet. Viele dieser Stücke bestehen aus Mischgeweben, die sich mit heutigen Verfahren kaum in ihre Bestandteile zerlegen lassen. Ein erheblicher Teil wird deshalb exportiert oder verbrannt. Einige Sammelorganisationen haben bereits angekündigt, ihre Container in bestimmten Gebieten abzuziehen, weil sich die Sammlung wirtschaftlich nicht mehr trägt.",
       "Inzwischen haben auch große Modeketten den Second-Hand-Markt für sich entdeckt. Manche nehmen in ihren Filialen getragene Kleidung zurück und gewähren dafür einen Einkaufsgutschein, andere verkaufen auf ihren Internetseiten eigene gebrauchte Ware. Kritiker sehen darin vor allem eine Marketingstrategie. Der Gutschein verleite schließlich dazu, sofort wieder etwas Neues zu kaufen. Die Unternehmen selbst betonen dagegen, sie wollten ihre Kunden langfristig an einen bewussteren Umgang mit Kleidung heranführen.",
       "Weidinger hält beide Sichtweisen für teilweise berechtigt. Es sei grundsätzlich zu begrüßen, wenn Hersteller Verantwortung für ihre Produkte über den Verkauf hinaus übernähmen. Entscheidend sei aber, ob sich dadurch die Menge der neu produzierten Kleidung verringere. Bislang gebe es dafür keine belastbaren Belege. Er plädiert deshalb dafür, Unternehmen zu verpflichten, offenzulegen, wie viele Kleidungsstücke sie jährlich herstellen und wie viele davon wieder in den Kreislauf zurückfinden. Nur so lasse sich überprüfen, ob die Versprechen der Branche eingehalten würden.",
       "Ein wirksamer Hebel liegt nach Ansicht vieler Fachleute in der Qualität. Nur Kleidung, die lange hält, kann auch mehrere Besitzer haben. Billig produzierte Teile, die schon nach wenigen Wäschen ihre Form verlieren, sind für den Gebrauchtmarkt wertlos. Einige Fachleute fordern daher Mindeststandards für die Haltbarkeit von Textilien, ähnlich wie es sie für Elektrogeräte bereits in Ansätzen gibt. Andere setzen eher auf Aufklärung und hoffen, dass Verbraucher beim Kauf künftig stärker auf Material und Verarbeitung achten. Dafür bräuchten sie allerdings verlässliche Angaben, etwa auf dem Etikett. Bislang lässt sich einem Kleidungsstück im Geschäft kaum ansehen, ob es nach einem Jahr noch tragbar sein wird, und der Preis ist dafür nur ein unsicherer Hinweis.",
       "Selin Arslan hat ihre eigene Antwort gefunden. Einmal im Monat bietet sie in ihrem Laden einen Nähabend an, bei dem Kunden lernen, Knöpfe anzunähen, Säume zu kürzen oder kleine Löcher zu stopfen. Die Abende sind regelmäßig ausgebucht, meist mit jungen Leuten, die zu Hause nie gelernt haben, mit Nadel und Faden umzugehen. „Das nachhaltigste Kleidungsstück ist das, das man schon hat\", sagt Arslan. Dass dieser Satz aus dem Mund einer Ladenbesitzerin, die vom Verkauf lebt, ein wenig widersprüchlich klingt, ist ihr durchaus bewusst."
      ]
     },
     "aufgaben": [
      {
       "frage": "Arslan war bei der Eröffnung ihres Ladens sicher, dass er erfolgreich sein würde.",
       "opt": [
        "richtig",
        "falsch",
        "steht nicht im Text"
       ],
       "loesung": 1,
       "fest": true,
       "stelle": "mit der Sorge, ob sich überhaupt genug Kundschaft finden würde",
       "erklaerung": "Sie hatte damals Sorge, ob genug Kunden kommen würden."
      },
      {
       "frage": "Den größten Teil des Wachstums macht der Handel zwischen Privatleuten im Internet aus.",
       "opt": [
        "richtig",
        "falsch",
        "steht nicht im Text"
       ],
       "loesung": 0,
       "fest": true,
       "stelle": "auf denen Privatleute ihre Kleidung direkt an andere verkaufen",
       "erklaerung": "Nicht Läden, sondern Internetplattformen für Privatleute haben den größten Anteil."
      },
      {
       "frage": "Jüngeren Käufern sind ökologische Gründe wichtiger als älteren.",
       "opt": [
        "richtig",
        "falsch",
        "steht nicht im Text"
       ],
       "loesung": 0,
       "fest": true,
       "stelle": "spielten bei den Unter-Dreißigjährigen ökologische Gründe eine größere Rolle",
       "erklaerung": "Bei den Unter-Dreißigjährigen spielen ökologische Gründe eine größere Rolle als bei Älteren."
      },
      {
       "frage": "Laut Weidinger entlastet jeder Kauf gebrauchter Kleidung die Umwelt.",
       "opt": [
        "richtig",
        "falsch",
        "steht nicht im Text"
       ],
       "loesung": 1,
       "fest": true,
       "stelle": "entlaste die Umwelt kaum",
       "erklaerung": "Nur wenn ein gebrauchtes Teil ein neues ersetzt; zusätzliche Käufe nützen kaum."
      },
      {
       "frage": "Wie häufig Kleidung nur kurz getragen und dann weiterverkauft wird, ist laut Weidinger noch unklar.",
       "opt": [
        "richtig",
        "falsch",
        "steht nicht im Text"
       ],
       "loesung": 0,
       "fest": true,
       "stelle": "könne man allerdings noch nicht genau sagen",
       "erklaerung": "Wie verbreitet dieses Verhalten ist, kann man noch nicht genau sagen."
      },
      {
       "frage": "Die meisten Rücksendungen erfolgen, weil die Kleidung nicht passt.",
       "opt": [
        "richtig",
        "falsch",
        "steht nicht im Text"
       ],
       "loesung": 2,
       "fest": true,
       "stelle": "weil es nicht passt oder anders aussieht als auf dem Foto",
       "erklaerung": "Gründe werden genannt, aber nicht, welcher am häufigsten vorkommt."
      },
      {
       "frage": "Arslan bekommt heute seltener gut erhaltene Kleidung gebracht als früher.",
       "opt": [
        "richtig",
        "falsch",
        "steht nicht im Text"
       ],
       "loesung": 0,
       "fest": true,
       "stelle": "brächten ihr nur noch, was sich dort nicht loswerden lasse",
       "erklaerung": "Wertvolle Stücke werden heute eher selbst im Internet verkauft."
      },
      {
       "frage": "Arslan bezahlt die Kleiderkammer in der Nachbarstadt für die Ware, die sie bekommt.",
       "opt": [
        "richtig",
        "falsch",
        "steht nicht im Text"
       ],
       "loesung": 2,
       "fest": true,
       "stelle": "arbeitet mit einer Kleiderkammer in der Nachbarstadt zusammen",
       "erklaerung": "Es heißt nur, dass sie zusammenarbeiten; über Bezahlung steht nichts im Text."
      },
      {
       "frage": "Der größte Teil der Altkleider wird inzwischen zu neuen Fasern verarbeitet.",
       "opt": [
        "richtig",
        "falsch",
        "steht nicht im Text"
       ],
       "loesung": 1,
       "fest": true,
       "stelle": "Ein erheblicher Teil wird deshalb exportiert oder verbrannt",
       "erklaerung": "Mischgewebe lassen sich kaum zerlegen; viel wird exportiert oder verbrannt."
      },
      {
       "frage": "Die Rücknahmeprogramme der Modeketten haben nachweislich zu weniger Neuproduktion geführt.",
       "opt": [
        "richtig",
        "falsch",
        "steht nicht im Text"
       ],
       "loesung": 1,
       "fest": true,
       "stelle": "Bislang gebe es dafür keine belastbaren Belege",
       "erklaerung": "Laut Weidinger gibt es dafür bisher keine belastbaren Belege."
      },
      {
       "frage": "Arslans Nähabende werden von der Stadt finanziell unterstützt.",
       "opt": [
        "richtig",
        "falsch",
        "steht nicht im Text"
       ],
       "loesung": 2,
       "fest": true,
       "stelle": "Einmal im Monat bietet sie in ihrem Laden einen Nähabend an",
       "erklaerung": "Über eine Förderung durch die Stadt sagt der Text nichts."
      },
      {
       "frage": "Welche Überschrift passt am besten zum ganzen Text?",
       "opt": [
        "Second-Hand-Mode: Die einfache Lösung für alle Umweltprobleme",
        "Gebraucht ist das neue Neu – aber nicht automatisch nachhaltig",
        "Wie Internetplattformen die kleinen Läden verdrängen"
       ],
       "loesung": 1,
       "fest": true,
       "erklaerung": "Der Text beschreibt den Boom gebrauchter Kleidung und zeigt zugleich, dass der Nutzen für die Umwelt vom Verhalten abhängt. Eine „einfache Lösung\" wird ausdrücklich nicht behauptet, und Arslans Laden wächst sogar."
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
     "id": "gg1sbs1",
     "text": {
      "sorte": "zeitung",
      "quelle": "Ratgeberseite des Wirtschaftsmagazins „Beruf und Praxis\"",
      "titel": "Gehaltsverhandlung gut vorbereiten",
      "zeilen": [
       "Viele Beschäftigte scheuen sich davor, mit ihrem Vorgesetzten über das Gehalt zu sprechen. Sie befürchten, als unbescheiden zu gelten, oder warten darauf, __(1)__ ihre Leistung von selbst bemerkt wird. Fachleute raten jedoch dazu, das Thema aktiv anzusprechen, __(2)__ eine Gehaltserhöhung kommt nur selten unaufgefordert. Entscheidend für den Erfolg ist __(3)__ allem eine gründliche Vorbereitung.",
       "Zunächst sollte man sich einen Überblick darüber verschaffen, __(4)__ in der eigenen Branche und Region üblicherweise gezahlt wird. Gehaltsvergleiche von Gewerkschaften und Berufsverbänden bieten hierfür eine gute Grundlage. Wer seinen Marktwert kennt, kann seine Forderung sachlich begründen und __(5)__ sich nicht so leicht verunsichern.",
       "Ebenso wichtig ist es, die eigenen Erfolge zu dokumentieren. Welche Projekte hat man im vergangenen Jahr __(6)__ Abschluss gebracht? Welche zusätzlichen Aufgaben hat man übernommen? Je konkreter die Beispiele sind, __(7)__ überzeugender wirkt die Argumentation. Allgemeine Hinweise auf Fleiß oder lange Betriebszugehörigkeit reichen __(8)__ nicht aus.",
       "Auch der Zeitpunkt des Gesprächs will gut __(9)__ sein. Günstig ist etwa die Zeit nach einem erfolgreich abgeschlossenen Projekt __(10)__ das jährliche Mitarbeitergespräch. Ungünstig sind hingegen Phasen, in __(11)__ das Unternehmen Stellen abbaut oder rote Zahlen schreibt. Man sollte den Termin außerdem rechtzeitig __(12)__ und das Thema nicht zwischen Tür und Angel ansprechen.",
       "Im Gespräch selbst empfiehlt es sich, mit einer konkreten Zahl __(13)__ beginnen, die etwas über dem eigentlichen Ziel liegt. So bleibt Spielraum für Verhandlungen. Wer dagegen nur vage von „etwas mehr Geld\" spricht, gibt die Entscheidung aus der __(14)__. Kommt der Vorgesetzte mit Gegenargumenten, sollte man ruhig bleiben und __(15)__ den eigenen Leistungen festhalten. Ein Gespräch, __(16)__ Verlauf zunächst enttäuschend ist, muss nicht erfolglos enden.",
       "Ist eine Gehaltserhöhung im Moment __(17)__ möglich, lohnt es sich, über Alternativen nachzudenken. Dazu __(18)__ etwa zusätzliche Urlaubstage, ein Zuschuss zur Fahrkarte oder die Übernahme von Weiterbildungskosten. Auch eine Vereinbarung, das Thema in einem halben Jahr erneut __(19)__ Sprache zu bringen, kann ein Erfolg sein. Wichtig ist, solche Zusagen schriftlich festzuhalten, __(20)__ sie später nicht in Vergessenheit geraten. Wer sich gut vorbereitet, kann dem Gespräch deutlich gelassener __(21)__. Und selbst wenn das Ergebnis hinter den Erwartungen zurückbleibt, hat man zumindest gezeigt, __(22)__ man seinen Wert kennt."
      ]
     },
     "aufgaben": [
      {
       "frage": "Was passt in Lücke 1?",
       "luecke": 1,
       "opt": [
        "damit",
        "dass",
        "wenn",
        "ob"
       ],
       "loesung": 1,
       "fest": true,
       "erklaerung": "„darauf warten, dass …\": Inhalt der Erwartung; „ob\" passt nicht zu einer sicheren Hoffnung."
      },
      {
       "frage": "Was passt in Lücke 2?",
       "luecke": 2,
       "opt": [
        "weil",
        "da",
        "denn",
        "deshalb"
       ],
       "loesung": 2,
       "fest": true,
       "erklaerung": "Hauptsatzstellung (Verb an zweiter Stelle) nach der Lücke: Nur „denn\" passt."
      },
      {
       "frage": "Was passt in Lücke 3?",
       "luecke": 3,
       "opt": [
        "für",
        "nach",
        "vor",
        "mit"
       ],
       "loesung": 2,
       "fest": true,
       "erklaerung": "Feste Wendung: „vor allem\" = besonders."
      },
      {
       "frage": "Was passt in Lücke 4?",
       "luecke": 4,
       "opt": [
        "was",
        "das",
        "wie",
        "welches"
       ],
       "loesung": 0,
       "fest": true,
       "erklaerung": "Indirekte Frage ohne Bezugswort: „was gezahlt wird\"."
      },
      {
       "frage": "Was passt in Lücke 5?",
       "luecke": 5,
       "opt": [
        "lässt",
        "hält",
        "gibt",
        "macht"
       ],
       "loesung": 0,
       "fest": true,
       "erklaerung": "„sich nicht verunsichern lassen\" = nicht zulassen, dass man unsicher wird."
      },
      {
       "frage": "Was passt in Lücke 6?",
       "luecke": 6,
       "opt": [
        "zur",
        "zum",
        "am",
        "im"
       ],
       "loesung": 1,
       "fest": true,
       "erklaerung": "Funktionsverbgefüge: „etwas zum Abschluss bringen\" (der Abschluss → zum)."
      },
      {
       "frage": "Was passt in Lücke 7?",
       "luecke": 7,
       "opt": [
        "desto",
        "als",
        "wie",
        "denn"
       ],
       "loesung": 0,
       "fest": true,
       "erklaerung": "Doppelkonnektor „je …, desto …\"."
      },
      {
       "frage": "Was passt in Lücke 8?",
       "luecke": 8,
       "opt": [
        "erfahrungsgemäß",
        "ausnahmsweise",
        "vergeblich",
        "beiläufig"
       ],
       "loesung": 0,
       "fest": true,
       "erklaerung": "„erfahrungsgemäß\" = nach aller Erfahrung; die anderen ergeben keinen Sinn."
      },
      {
       "frage": "Was passt in Lücke 9?",
       "luecke": 9,
       "opt": [
        "gewählte",
        "wählen",
        "gewählt",
        "gewählten"
       ],
       "loesung": 2,
       "fest": true,
       "erklaerung": "„will gut gewählt sein\" = muss gut gewählt werden; Partizip ohne Endung."
      },
      {
       "frage": "Was passt in Lücke 10?",
       "luecke": 10,
       "opt": [
        "weder",
        "oder",
        "sondern",
        "noch"
       ],
       "loesung": 1,
       "fest": true,
       "erklaerung": "Zwei Möglichkeiten werden zur Wahl gestellt: „oder\"."
      },
      {
       "frage": "Was passt in Lücke 11?",
       "luecke": 11,
       "opt": [
        "deren",
        "dem",
        "denen",
        "der"
       ],
       "loesung": 2,
       "fest": true,
       "erklaerung": "„in den Phasen\" → Relativpronomen im Dativ Plural: „in denen\"."
      },
      {
       "frage": "Was passt in Lücke 12?",
       "luecke": 12,
       "opt": [
        "vereinbaren",
        "vertreten",
        "versprechen",
        "verabschieden"
       ],
       "loesung": 0,
       "fest": true,
       "erklaerung": "„einen Termin vereinbaren\" ist die feste Verbindung."
      },
      {
       "frage": "Was passt in Lücke 13?",
       "luecke": 13,
       "opt": [
        "am",
        "zu",
        "für",
        "um"
       ],
       "loesung": 1,
       "fest": true,
       "erklaerung": "„es empfiehlt sich, … zu beginnen\": Infinitiv mit „zu\"."
      },
      {
       "frage": "Was passt in Lücke 14?",
       "luecke": 14,
       "opt": [
        "Hand",
        "Rolle",
        "Tasche",
        "Reihe"
       ],
       "loesung": 0,
       "fest": true,
       "erklaerung": "„etwas aus der Hand geben\" = die Kontrolle abgeben."
      },
      {
       "frage": "Was passt in Lücke 15?",
       "luecke": 15,
       "opt": [
        "bei",
        "an",
        "auf",
        "mit"
       ],
       "loesung": 1,
       "fest": true,
       "erklaerung": "„an etwas festhalten\" = dabei bleiben."
      },
      {
       "frage": "Was passt in Lücke 16?",
       "luecke": 16,
       "opt": [
        "das",
        "deren",
        "dem",
        "dessen"
       ],
       "loesung": 3,
       "fest": true,
       "erklaerung": "Besitz: „der Verlauf des Gesprächs\" → „dessen Verlauf\" (das Gespräch, neutral)."
      },
      {
       "frage": "Was passt in Lücke 17?",
       "luecke": 17,
       "opt": [
        "keine",
        "nichts",
        "kein",
        "nicht"
       ],
       "loesung": 3,
       "fest": true,
       "erklaerung": "Verneinung eines Adjektivs (möglich): „nicht\"."
      },
      {
       "frage": "Was passt in Lücke 18?",
       "luecke": 18,
       "opt": [
        "handeln",
        "betreffen",
        "bestehen",
        "gehören"
       ],
       "loesung": 3,
       "fest": true,
       "erklaerung": "„dazu gehören …\" = zählen zu dieser Gruppe."
      },
      {
       "frage": "Was passt in Lücke 19?",
       "luecke": 19,
       "opt": [
        "zum",
        "in",
        "auf",
        "zur"
       ],
       "loesung": 3,
       "fest": true,
       "erklaerung": "Feste Wendung: „etwas zur Sprache bringen\" = ansprechen."
      },
      {
       "frage": "Was passt in Lücke 20?",
       "luecke": 20,
       "opt": [
        "falls",
        "obwohl",
        "weil",
        "damit"
       ],
       "loesung": 3,
       "fest": true,
       "erklaerung": "Zweck: „damit\" sie nicht vergessen werden."
      },
      {
       "frage": "Was passt in Lücke 21?",
       "luecke": 21,
       "opt": [
        "nachsehen",
        "ansehen",
        "entgegenkommen",
        "entgegensehen"
       ],
       "loesung": 3,
       "fest": true,
       "erklaerung": "„einer Sache gelassen entgegensehen\" = ohne Angst erwarten."
      },
      {
       "frage": "Was passt in Lücke 22?",
       "luecke": 22,
       "opt": [
        "wie",
        "was",
        "dass",
        "ob"
       ],
       "loesung": 2,
       "fest": true,
       "erklaerung": "„zeigen, dass …\" leitet den Inhalt ein; „wie\" würde die Art und Weise meinen."
      }
     ]
    },
    {
     "id": "gg1sbs2",
     "text": {
      "sorte": "zeitung",
      "quelle": "Kommentar in der Tageszeitung „Rheinbacher Anzeiger\"",
      "titel": "Mehr Platz für Menschen statt für Autos",
      "zeilen": [
       "Seit Monaten wird in Rheinbach darüber gestritten, __(1)__ die Innenstadt für den Autoverkehr gesperrt werden soll. Der Stadtrat will im Frühjahr entscheiden, und die Fronten sind verhärtet. Geschäftsleute fürchten um ihre Kundschaft, Anwohner hoffen auf weniger Lärm. Es ist Zeit, die Debatte __(2)__ zu versachlichen.",
       "Zunächst einmal: Die Sorge der Händler ist verständlich, __(3)__ sie sich bisher kaum auf Zahlen stützen kann. Erfahrungen aus anderen Städten zeigen, dass Fußgängerzonen den Umsatz der Geschäfte in den meisten Fällen nicht verringern, __(4)__ sogar steigern. Wer zu Fuß oder mit dem Rad unterwegs ist, kauft zwar pro Besuch weniger ein, kommt aber __(5)__ wieder. Zudem bleiben die Menschen länger in einer Straße, __(6)__ sie sich wohlfühlen.",
       "Ebenso wenig überzeugt das Argument, eine autofreie Innenstadt grenze ältere Menschen und Familien __(7)__. Gerade sie profitieren von breiteren Gehwegen, sicheren Übergängen und Bänken, __(8)__ man sich ausruhen kann. Voraussetzung ist allerdings, dass Busse und Bahnen häufig fahren und Parkplätze am Rand der Innenstadt in ausreichender Zahl zur __(9)__ stehen. Daran __(10)__ es in Rheinbach bislang.",
       "Die Stadt wäre daher gut beraten, nicht alles auf einmal zu ändern, __(11)__ schrittweise vorzugehen. Ein Probejahr, in __(12)__ einzelne Straßen gesperrt werden, würde allen Beteiligten die Möglichkeit geben, Erfahrungen zu sammeln. Am Ende eines solchen Versuchs __(13)__ sich sachlich bewerten, was funktioniert und was nicht. Wichtig ist, dass die Ergebnisse unabhängig __(14)__ und offen veröffentlicht werden.",
       "Auch die Anwohner müssen __(15)__ Planung beteiligt werden. Sie kennen ihre Straßen am besten und wissen, wo es eng wird. Bürgerversammlungen, die erst stattfinden, __(16)__ die Entscheidung längst gefallen ist, schaffen dagegen Misstrauen. Schon jetzt haben viele Menschen den Eindruck, dass über ihre Köpfe __(17)__ entschieden wird.",
       "Eine lebenswerte Innenstadt ist kein Luxus, __(18)__ eine Investition in die Zukunft. Sie macht die Stadt attraktiver für junge Familien und Fachkräfte, auf __(19)__ die Region dringend angewiesen ist. Der Stadtrat sollte die Chance nutzen, __(20)__ er das Projekt mutig, aber mit Augenmaß angeht. Ein bloßes Weiter-so jedenfalls __(21)__ niemandem. Wer heute nichts ändert, wird morgen mit den Folgen leben __(22)__."
      ]
     },
     "aufgaben": [
      {
       "frage": "Was passt in Lücke 1?",
       "luecke": 1,
       "opt": [
        "wie",
        "ob",
        "dass",
        "wenn"
       ],
       "loesung": 1,
       "fest": true,
       "erklaerung": "Indirekte Ja-/Nein-Frage: „darüber streiten, ob …\"."
      },
      {
       "frage": "Was passt in Lücke 2?",
       "luecke": 2,
       "opt": [
        "endlich",
        "längst",
        "kaum",
        "bisher"
       ],
       "loesung": 0,
       "fest": true,
       "erklaerung": "„endlich\" drückt aus, dass es höchste Zeit ist."
      },
      {
       "frage": "Was passt in Lücke 3?",
       "luecke": 3,
       "opt": [
        "sodass",
        "damit",
        "weil",
        "auch wenn"
       ],
       "loesung": 3,
       "fest": true,
       "erklaerung": "Einräumung: verständlich, obwohl die Zahlen fehlen."
      },
      {
       "frage": "Was passt in Lücke 4?",
       "luecke": 4,
       "opt": [
        "sonst",
        "doch",
        "aber",
        "sondern"
       ],
       "loesung": 3,
       "fest": true,
       "erklaerung": "Nach Verneinung mit Korrektur: „nicht …, sondern …\"."
      },
      {
       "frage": "Was passt in Lücke 5?",
       "luecke": 5,
       "opt": [
        "kaum",
        "niemals",
        "häufiger",
        "seltener"
       ],
       "loesung": 2,
       "fest": true,
       "erklaerung": "Gegengewicht zu „kauft zwar weniger ein\": Man kommt dafür öfter."
      },
      {
       "frage": "Was passt in Lücke 6?",
       "luecke": 6,
       "opt": [
        "in der",
        "an die",
        "der",
        "in die"
       ],
       "loesung": 0,
       "fest": true,
       "erklaerung": "„sich in einer Straße wohlfühlen\" → Dativ: „in der\"."
      },
      {
       "frage": "Was passt in Lücke 7?",
       "luecke": 7,
       "opt": [
        "ab",
        "um",
        "aus",
        "an"
       ],
       "loesung": 2,
       "fest": true,
       "erklaerung": "„jemanden ausgrenzen\" = ausschließen; trennbares Verb."
      },
      {
       "frage": "Was passt in Lücke 8?",
       "luecke": 8,
       "opt": [
        "in denen",
        "auf die",
        "auf denen",
        "mit denen"
       ],
       "loesung": 2,
       "fest": true,
       "erklaerung": "„sich auf den Bänken ausruhen\" (wo?) → Dativ: „auf denen\"."
      },
      {
       "frage": "Was passt in Lücke 9?",
       "luecke": 9,
       "opt": [
        "Wahl",
        "Verfügung",
        "Seite",
        "Hand"
       ],
       "loesung": 1,
       "fest": true,
       "erklaerung": "Feste Wendung: „zur Verfügung stehen\"."
      },
      {
       "frage": "Was passt in Lücke 10?",
       "luecke": 10,
       "opt": [
        "bedarf",
        "mangelt",
        "beruht",
        "verzichtet"
       ],
       "loesung": 1,
       "fest": true,
       "erklaerung": "„Es mangelt an etwas\" = es fehlt."
      },
      {
       "frage": "Was passt in Lücke 11?",
       "luecke": 11,
       "opt": [
        "aber",
        "sowie",
        "statt",
        "sondern"
       ],
       "loesung": 3,
       "fest": true,
       "erklaerung": "„nicht …, sondern …\" stellt die Alternative gegenüber."
      },
      {
       "frage": "Was passt in Lücke 12?",
       "luecke": 12,
       "opt": [
        "dem",
        "das",
        "der",
        "den"
       ],
       "loesung": 0,
       "fest": true,
       "erklaerung": "„in dem Probejahr\" (wann?) → Dativ Neutrum: „in dem\"."
      },
      {
       "frage": "Was passt in Lücke 13?",
       "luecke": 13,
       "opt": [
        "gelassen",
        "lassen",
        "ließe",
        "lasse"
       ],
       "loesung": 2,
       "fest": true,
       "erklaerung": "Konjunktiv II passend zu „würde\": „ließe sich bewerten\"."
      },
      {
       "frage": "Was passt in Lücke 14?",
       "luecke": 14,
       "opt": [
        "überprüfen",
        "überprüfend",
        "überprüfte",
        "überprüft"
       ],
       "loesung": 3,
       "fest": true,
       "erklaerung": "Passiv: „überprüft und veröffentlicht werden\"."
      },
      {
       "frage": "Was passt in Lücke 15?",
       "luecke": 15,
       "opt": [
        "an der",
        "in der",
        "zur",
        "für die"
       ],
       "loesung": 0,
       "fest": true,
       "erklaerung": "„an etwas beteiligt werden\"."
      },
      {
       "frage": "Was passt in Lücke 16?",
       "luecke": 16,
       "opt": [
        "indem",
        "bevor",
        "ehe",
        "nachdem"
       ],
       "loesung": 3,
       "fest": true,
       "erklaerung": "Erst nach der Entscheidung, also zu spät: „nachdem\"."
      },
      {
       "frage": "Was passt in Lücke 17?",
       "luecke": 17,
       "opt": [
        "herum",
        "hinweg",
        "entlang",
        "hinaus"
       ],
       "loesung": 1,
       "fest": true,
       "erklaerung": "„über jemandes Kopf hinweg entscheiden\" = ohne ihn zu fragen."
      },
      {
       "frage": "Was passt in Lücke 18?",
       "luecke": 18,
       "opt": [
        "jedoch",
        "doch",
        "sondern",
        "aber"
       ],
       "loesung": 2,
       "fest": true,
       "erklaerung": "„kein …, sondern …\" korrigiert nach Verneinung."
      },
      {
       "frage": "Was passt in Lücke 19?",
       "luecke": 19,
       "opt": [
        "die",
        "deren",
        "denen",
        "der"
       ],
       "loesung": 0,
       "fest": true,
       "erklaerung": "„auf die Fachkräfte angewiesen sein\" → Akkusativ Plural: „auf die\"."
      },
      {
       "frage": "Was passt in Lücke 20?",
       "luecke": 20,
       "opt": [
        "damit",
        "falls",
        "obwohl",
        "indem"
       ],
       "loesung": 3,
       "fest": true,
       "erklaerung": "Art und Weise: Die Chance wird genutzt, „indem\" man mutig handelt."
      },
      {
       "frage": "Was passt in Lücke 21?",
       "luecke": 21,
       "opt": [
        "gebraucht",
        "benötigt",
        "nützt",
        "bedarf"
       ],
       "loesung": 2,
       "fest": true,
       "erklaerung": "„jemandem nützen\" mit Dativ: „nützt niemandem\"."
      },
      {
       "frage": "Was passt in Lücke 22?",
       "luecke": 22,
       "opt": [
        "muss",
        "müssen",
        "gemusst",
        "zu müssen"
       ],
       "loesung": 1,
       "fest": true,
       "erklaerung": "Futur mit Modalverb: „wird leben müssen\" (Infinitiv am Ende)."
      }
     ]
    },
    {
     "id": "gg1sbs3",
     "text": {
      "sorte": "zeitung",
      "quelle": "Bericht im Magazin „Wohnen heute\"",
      "titel": "Wohnen unter einem Dach",
      "zeilen": [
       "Als Gerda Lindqvist vor fünf Jahren ihre große Wohnung aufgab, __(1)__ ihre Freunde mit Skepsis. Mit zweiundsiebzig Jahren zog sie in ein Mehrgenerationenhaus am Stadtrand von Feldheim, in __(2)__ heute achtzehn Erwachsene und elf Kinder leben. Bereut hat sie den Schritt __(3)__ keinen Tag.",
       "Die Idee hinter solchen Wohnprojekten ist so einfach __(4)__ überzeugend: Menschen unterschiedlichen Alters leben in getrennten Wohnungen, teilen sich aber Gemeinschaftsräume, einen Garten und oft auch Aufgaben. Die Älteren passen gelegentlich auf die Kinder auf, die Jüngeren helfen beim Einkaufen oder bei kleinen Reparaturen. Niemand ist __(5)__ verpflichtet, doch die meisten Bewohner beteiligen sich gern.",
       "In Feldheim haben die Bewohner das Haus gemeinsam geplant und als Genossenschaft __(6)__. Das hatte zur __(7)__, dass die Planung fast vier Jahre dauerte. Jede Entscheidung, von der Größe der Küche __(8)__ zur Farbe der Fassade, wurde in Versammlungen diskutiert. „Das war manchmal anstrengend\", erinnert sich Mitbewohner Karim Haddad, „__(9)__ wir haben dabei gelernt, Kompromisse zu schließen.\"",
       "Gerade dieser lange Prozess sei der Grund dafür, __(10)__ das Zusammenleben heute so gut funktioniere, meint Haddad. Wer sich schon vor dem Einzug kennenlerne, könne Konflikte besser lösen. Streit gibt es __(11)__ trotzdem, etwa über Lärm im Treppenhaus oder die Nutzung des Gästezimmers. Für solche Fälle hat die Gemeinschaft feste Regeln vereinbart, __(12)__ sich alle halten müssen.",
       "Wohnprojekte dieser Art sind in den letzten Jahren __(13)__ beliebter geworden. Fachleute sehen darin eine Antwort __(14)__ mehrere gesellschaftliche Entwicklungen: Familien leben oft weit voneinander entfernt, viele ältere Menschen sind allein, und bezahlbarer Wohnraum ist knapp. Allerdings sind die Hürden __(15)__ Gründung hoch. Geeignete Grundstücke sind schwer zu finden, und Banken __(16)__ sich bei Krediten für Gruppen oft zurückhaltend.",
       "Einige Kommunen unterstützen solche Gruppen inzwischen, __(17)__ sie städtische Grundstücke bevorzugt an gemeinschaftliche Wohnprojekte vergeben. Dahinter steht die Hoffnung, dass lebendige Nachbarschaften __(18)__ ganzen Stadtteil zugutekommen. Ob sich diese Hoffnung erfüllt, ist noch nicht ausreichend __(19)__. Gerda Lindqvist jedenfalls __(20)__ keinen Zweifel daran, dass sie die richtige Entscheidung getroffen hat. „Ich bin hier nie allein, __(21)__ ich es will\", sagt sie. „Und wenn ich meine Ruhe brauche, schließe ich einfach die Tür __(22)__.\""
      ]
     },
     "aufgaben": [
      {
       "frage": "Was passt in Lücke 1?",
       "luecke": 1,
       "opt": [
        "reagieren",
        "reagiert",
        "reagierten",
        "reagierend"
       ],
       "loesung": 2,
       "fest": true,
       "erklaerung": "Präteritum Plural nach „Als …\": „reagierten ihre Freunde\"."
      },
      {
       "frage": "Was passt in Lücke 2?",
       "luecke": 2,
       "opt": [
        "dem",
        "den",
        "der",
        "das"
       ],
       "loesung": 0,
       "fest": true,
       "erklaerung": "„in dem Haus leben\" (wo?) → Dativ Neutrum: „in dem\"."
      },
      {
       "frage": "Was passt in Lücke 3?",
       "luecke": 3,
       "opt": [
        "bis gestern",
        "ab heute",
        "seit gestern",
        "bis heute"
       ],
       "loesung": 3,
       "fest": true,
       "erklaerung": "Vom Umzug bis jetzt: „bis heute keinen Tag\"."
      },
      {
       "frage": "Was passt in Lücke 4?",
       "luecke": 4,
       "opt": [
        "so",
        "wie",
        "als",
        "desto"
       ],
       "loesung": 1,
       "fest": true,
       "erklaerung": "Vergleich der Gleichheit: „so … wie\"."
      },
      {
       "frage": "Was passt in Lücke 5?",
       "luecke": 5,
       "opt": [
        "dafür",
        "damit",
        "dazu",
        "davon"
       ],
       "loesung": 2,
       "fest": true,
       "erklaerung": "„zu etwas verpflichtet sein\" → „dazu\"."
      },
      {
       "frage": "Was passt in Lücke 6?",
       "luecke": 6,
       "opt": [
        "finanzieren",
        "finanziert",
        "finanzierend",
        "finanzierte"
       ],
       "loesung": 1,
       "fest": true,
       "erklaerung": "Perfekt mit „haben\": „haben geplant und finanziert\"."
      },
      {
       "frage": "Was passt in Lücke 7?",
       "luecke": 7,
       "opt": [
        "Ende",
        "Seite",
        "Ursache",
        "Folge"
       ],
       "loesung": 3,
       "fest": true,
       "erklaerung": "„etwas zur Folge haben\" = etwas bewirken."
      },
      {
       "frage": "Was passt in Lücke 8?",
       "luecke": 8,
       "opt": [
        "bis",
        "ab",
        "über",
        "nach"
       ],
       "loesung": 0,
       "fest": true,
       "erklaerung": "Spannweite: „von … bis zu …\"."
      },
      {
       "frage": "Was passt in Lücke 9?",
       "luecke": 9,
       "opt": [
        "trotzdem",
        "aber",
        "sondern",
        "denn"
       ],
       "loesung": 1,
       "fest": true,
       "erklaerung": "Gegensatz mit Hauptsatzstellung: „aber wir haben …\"; „trotzdem\" verlangt Verb direkt danach."
      },
      {
       "frage": "Was passt in Lücke 10?",
       "luecke": 10,
       "opt": [
        "dass",
        "womit",
        "damit",
        "ob"
       ],
       "loesung": 0,
       "fest": true,
       "erklaerung": "„der Grund dafür, dass …\"."
      },
      {
       "frage": "Was passt in Lücke 11?",
       "luecke": 11,
       "opt": [
        "natürlich",
        "niemals",
        "nirgends",
        "kaum noch"
       ],
       "loesung": 0,
       "fest": true,
       "erklaerung": "„trotzdem\" und die Beispiele zeigen: Es gibt durchaus Streit."
      },
      {
       "frage": "Was passt in Lücke 12?",
       "luecke": 12,
       "opt": [
        "auf die",
        "worauf",
        "denen",
        "an die"
       ],
       "loesung": 3,
       "fest": true,
       "erklaerung": "„sich an Regeln halten\" → „an die\"."
      },
      {
       "frage": "Was passt in Lücke 13?",
       "luecke": 13,
       "opt": [
        "sehr",
        "mehr",
        "ganz",
        "immer"
       ],
       "loesung": 3,
       "fest": true,
       "erklaerung": "Zunehmende Entwicklung: „immer beliebter\"."
      },
      {
       "frage": "Was passt in Lücke 14?",
       "luecke": 14,
       "opt": [
        "auf",
        "zu",
        "an",
        "für"
       ],
       "loesung": 0,
       "fest": true,
       "erklaerung": "„eine Antwort auf etwas\"."
      },
      {
       "frage": "Was passt in Lücke 15?",
       "luecke": 15,
       "opt": [
        "von der",
        "mit der",
        "bei der",
        "an der"
       ],
       "loesung": 2,
       "fest": true,
       "erklaerung": "„Hürden bei der Gründung\" = beim Gründen."
      },
      {
       "frage": "Was passt in Lücke 16?",
       "luecke": 16,
       "opt": [
        "stellen",
        "machen",
        "bringen",
        "zeigen"
       ],
       "loesung": 3,
       "fest": true,
       "erklaerung": "„sich zurückhaltend zeigen\" = vorsichtig sein."
      },
      {
       "frage": "Was passt in Lücke 17?",
       "luecke": 17,
       "opt": [
        "damit",
        "sodass",
        "indem",
        "obwohl"
       ],
       "loesung": 2,
       "fest": true,
       "erklaerung": "Art und Weise der Unterstützung: „indem\"."
      },
      {
       "frage": "Was passt in Lücke 18?",
       "luecke": 18,
       "opt": [
        "der",
        "den",
        "dem",
        "des"
       ],
       "loesung": 2,
       "fest": true,
       "erklaerung": "„etwas kommt jemandem zugute\" → Dativ: „dem ganzen Stadtteil\"."
      },
      {
       "frage": "Was passt in Lücke 19?",
       "luecke": 19,
       "opt": [
        "untersuchend",
        "untersuchen",
        "untersuchte",
        "untersucht"
       ],
       "loesung": 3,
       "fest": true,
       "erklaerung": "Zustandspassiv: „ist untersucht\"."
      },
      {
       "frage": "Was passt in Lücke 20?",
       "luecke": 20,
       "opt": [
        "gibt",
        "lässt",
        "stellt",
        "macht"
       ],
       "loesung": 1,
       "fest": true,
       "erklaerung": "Feste Wendung: „keinen Zweifel daran lassen\"."
      },
      {
       "frage": "Was passt in Lücke 21?",
       "luecke": 21,
       "opt": [
        "damit",
        "weil",
        "außer wenn",
        "obwohl"
       ],
       "loesung": 2,
       "fest": true,
       "erklaerung": "Ausnahme: nie allein, „außer wenn\" sie es will."
      },
      {
       "frage": "Was passt in Lücke 22?",
       "luecke": 22,
       "opt": [
        "an",
        "zu",
        "auf",
        "ab"
       ],
       "loesung": 1,
       "fest": true,
       "erklaerung": "„die Tür zumachen / schließen … zu\" = trennbares „zuschließen\"."
      }
     ]
    }
   ]
  }
 ],
 "laeufe": [
  {
   "id": "tg1ll1",
   "titel": "Prüfungslauf 1",
   "minuten": 90,
   "teile": [
    {
     "nr": 1,
     "art": "textwahl",
     "text": {
      "sorte": "zeitung",
      "quelle": "Ratgeber Verbraucher heute",
      "titel": "Schauen, riechen, schmecken",
      "zeilen": [
       "Jedes Jahr landen in deutschen Privathaushalten mehrere Millionen Tonnen Lebensmittel im Müll. Ein erheblicher Teil davon wäre noch völlig in Ordnung gewesen. __(1)__ Viele Verbraucher halten das Mindesthaltbarkeitsdatum nämlich für ein Verfallsdatum und werfen Joghurt, Nudeln oder Käse weg, sobald der aufgedruckte Tag überschritten ist, ohne das Produkt überhaupt zu prüfen.",
       "Dabei bedeutet dieses Datum lediglich, dass der Hersteller bis zu diesem Zeitpunkt bestimmte Eigenschaften wie Geschmack, Farbe und Konsistenz garantiert. __(2)__ Ungeöffnete Nudeln oder Reis sind oft noch Monate, manchmal sogar Jahre nach dem Datum genießbar. Anders verhält es sich mit dem Verbrauchsdatum, das etwa auf Hackfleisch oder rohem Fisch steht. Diese Produkte sollten nach Ablauf tatsächlich nicht mehr gegessen werden. Man erkennt es an dem Hinweis „zu verbrauchen bis“ auf der Verpackung.",
       "Wie aber erkennt man, ob ein Lebensmittel noch genießbar ist? Die Ernährungsberaterin Katrin Solberg aus Dornfeld empfiehlt, den eigenen Sinnen wieder mehr zu vertrauen. __(3)__ Riecht ein Joghurt normal, sieht er normal aus und schmeckt er nicht säuerlicher als sonst, spricht nichts dagegen, ihn zu essen. Bei Schimmel dagegen ist Vorsicht geboten, vor allem bei weichen Lebensmitteln wie Brot oder Marmelade, in denen sich die Pilze unsichtbar ausbreiten.",
       "Mindestens ebenso wichtig wie der richtige Umgang mit dem Datum ist allerdings die Planung. __(4)__ Wer dagegen vor dem Einkauf einen Blick in den Kühlschrank wirft und eine Liste schreibt, kauft gezielter und meist auch günstiger. Solberg rät außerdem, neu gekaufte Produkte im Kühlschrank nach hinten zu stellen, damit die älteren zuerst verbraucht werden. Auch Reste vom Vortag lassen sich oft zu einer neuen Mahlzeit verarbeiten.",
       "Auch der Handel hat das Problem inzwischen erkannt. Manche Supermärkte bieten Waren kurz vor Ablauf des Datums deutlich reduziert an, oft in eigenen Regalen am Ausgang. __(5)__ Daneben haben sich in vielen Städten Initiativen gebildet, die übrig gebliebene Lebensmittel bei Bäckereien und Restaurants abholen und kostenlos weitergeben. Über eigene Apps lässt sich zudem nachsehen, wo gerade etwas abzuholen ist.",
       "Ganz ohne Abfälle wird kein Haushalt auskommen, und das muss auch nicht das Ziel sein. __(6)__ Wer seine Gewohnheiten nur ein wenig ändert, schont nicht nur die Umwelt, sondern spart nach Berechnungen von Verbraucherschützern auch mehrere hundert Euro im Jahr."
      ]
     },
     "aufgaben": [
      {
       "frage": "Welcher Satz gehört in Lücke 1?",
       "luecke": 1,
       "opt": [
        "Ein Großteil der Abfälle entsteht nämlich, weil spontan zu viel eingekauft wird.",
        "Das Mindesthaltbarkeitsdatum soll deshalb im kommenden Jahr ganz abgeschafft werden.",
        "Schuld daran ist nicht zuletzt ein weitverbreitetes Missverständnis.",
        "Entscheidend ist vielmehr, den Wert von Lebensmitteln wieder bewusster wahrzunehmen.",
        "Was trotzdem nicht verkauft wird, geht häufig an die örtliche Tafel.",
        "Danach ist ein Produkt keineswegs automatisch verdorben.",
        "Bei Hackfleisch kann man sich dagegen ganz auf Geruch und Aussehen verlassen.",
        "Ihr Rat lässt sich auf eine einfache Formel bringen: erst schauen, dann riechen, dann vorsichtig probieren."
       ],
       "loesung": 2,
       "fest": true,
       "erklaerung": "„Schuld daran“ bezieht sich auf das unnötige Wegwerfen; „nämlich“ im nächsten Satz erklärt das Missverständnis."
      },
      {
       "frage": "Welcher Satz gehört in Lücke 2?",
       "luecke": 2,
       "opt": [
        "Ein Großteil der Abfälle entsteht nämlich, weil spontan zu viel eingekauft wird.",
        "Das Mindesthaltbarkeitsdatum soll deshalb im kommenden Jahr ganz abgeschafft werden.",
        "Schuld daran ist nicht zuletzt ein weitverbreitetes Missverständnis.",
        "Entscheidend ist vielmehr, den Wert von Lebensmitteln wieder bewusster wahrzunehmen.",
        "Was trotzdem nicht verkauft wird, geht häufig an die örtliche Tafel.",
        "Danach ist ein Produkt keineswegs automatisch verdorben.",
        "Bei Hackfleisch kann man sich dagegen ganz auf Geruch und Aussehen verlassen.",
        "Ihr Rat lässt sich auf eine einfache Formel bringen: erst schauen, dann riechen, dann vorsichtig probieren."
       ],
       "loesung": 5,
       "fest": true,
       "erklaerung": "„Danach“ meint nach dem Datum; die Nudeln und der Reis sind Beispiele dafür."
      },
      {
       "frage": "Welcher Satz gehört in Lücke 3?",
       "luecke": 3,
       "opt": [
        "Ein Großteil der Abfälle entsteht nämlich, weil spontan zu viel eingekauft wird.",
        "Das Mindesthaltbarkeitsdatum soll deshalb im kommenden Jahr ganz abgeschafft werden.",
        "Schuld daran ist nicht zuletzt ein weitverbreitetes Missverständnis.",
        "Entscheidend ist vielmehr, den Wert von Lebensmitteln wieder bewusster wahrzunehmen.",
        "Was trotzdem nicht verkauft wird, geht häufig an die örtliche Tafel.",
        "Danach ist ein Produkt keineswegs automatisch verdorben.",
        "Bei Hackfleisch kann man sich dagegen ganz auf Geruch und Aussehen verlassen.",
        "Ihr Rat lässt sich auf eine einfache Formel bringen: erst schauen, dann riechen, dann vorsichtig probieren."
       ],
       "loesung": 7,
       "fest": true,
       "erklaerung": "„Ihr Rat“ meint Solberg; die Formel wird im nächsten Satz am Joghurt vorgeführt."
      },
      {
       "frage": "Welcher Satz gehört in Lücke 4?",
       "luecke": 4,
       "opt": [
        "Ein Großteil der Abfälle entsteht nämlich, weil spontan zu viel eingekauft wird.",
        "Das Mindesthaltbarkeitsdatum soll deshalb im kommenden Jahr ganz abgeschafft werden.",
        "Schuld daran ist nicht zuletzt ein weitverbreitetes Missverständnis.",
        "Entscheidend ist vielmehr, den Wert von Lebensmitteln wieder bewusster wahrzunehmen.",
        "Was trotzdem nicht verkauft wird, geht häufig an die örtliche Tafel.",
        "Danach ist ein Produkt keineswegs automatisch verdorben.",
        "Bei Hackfleisch kann man sich dagegen ganz auf Geruch und Aussehen verlassen.",
        "Ihr Rat lässt sich auf eine einfache Formel bringen: erst schauen, dann riechen, dann vorsichtig probieren."
       ],
       "loesung": 0,
       "fest": true,
       "erklaerung": "„nämlich“ begründet, warum Planung wichtig ist; „Wer dagegen“ setzt das geplante Einkaufen ab."
      },
      {
       "frage": "Welcher Satz gehört in Lücke 5?",
       "luecke": 5,
       "opt": [
        "Ein Großteil der Abfälle entsteht nämlich, weil spontan zu viel eingekauft wird.",
        "Das Mindesthaltbarkeitsdatum soll deshalb im kommenden Jahr ganz abgeschafft werden.",
        "Schuld daran ist nicht zuletzt ein weitverbreitetes Missverständnis.",
        "Entscheidend ist vielmehr, den Wert von Lebensmitteln wieder bewusster wahrzunehmen.",
        "Was trotzdem nicht verkauft wird, geht häufig an die örtliche Tafel.",
        "Danach ist ein Produkt keineswegs automatisch verdorben.",
        "Bei Hackfleisch kann man sich dagegen ganz auf Geruch und Aussehen verlassen.",
        "Ihr Rat lässt sich auf eine einfache Formel bringen: erst schauen, dann riechen, dann vorsichtig probieren."
       ],
       "loesung": 4,
       "fest": true,
       "erklaerung": "„trotzdem“ knüpft an die reduzierten Waren an; „Daneben“ fügt die Initiativen hinzu."
      },
      {
       "frage": "Welcher Satz gehört in Lücke 6?",
       "luecke": 6,
       "opt": [
        "Ein Großteil der Abfälle entsteht nämlich, weil spontan zu viel eingekauft wird.",
        "Das Mindesthaltbarkeitsdatum soll deshalb im kommenden Jahr ganz abgeschafft werden.",
        "Schuld daran ist nicht zuletzt ein weitverbreitetes Missverständnis.",
        "Entscheidend ist vielmehr, den Wert von Lebensmitteln wieder bewusster wahrzunehmen.",
        "Was trotzdem nicht verkauft wird, geht häufig an die örtliche Tafel.",
        "Danach ist ein Produkt keineswegs automatisch verdorben.",
        "Bei Hackfleisch kann man sich dagegen ganz auf Geruch und Aussehen verlassen.",
        "Ihr Rat lässt sich auf eine einfache Formel bringen: erst schauen, dann riechen, dann vorsichtig probieren."
       ],
       "loesung": 3,
       "fest": true,
       "erklaerung": "„vielmehr“ korrigiert das Ziel „ganz ohne Abfälle“; der letzte Satz zeigt, was bewussteres Handeln bringt."
      }
     ]
    },
    {
     "nr": 2,
     "art": "textwahl",
     "text": {
      "sorte": "zeitung",
      "quelle": "Kommunal – Magazin für Stadt und Region",
      "titel": "Neues Leben hinter leeren Schaufenstern",
      "zeilen": [
       "A — Wer an einem Dienstagvormittag durch die Fußgängerzone von Rohrbach schlendert, muss nicht lange nach leeren Schaufenstern suchen. Wo früher ein Schuhgeschäft war, kleben vergilbte Plakate an der Scheibe, nebenan wirbt ein Schild seit Monaten um einen Nachmieter. Am deutlichsten wird der Wandel am Marktplatz: Das große Kaufhaus, jahrzehntelang der Mittelpunkt der Innenstadt, steht seit drei Jahren leer. Seine Schaufenster sind mit großen Fotos aus besseren Zeiten beklebt, damit der Platz nicht ganz so trostlos wirkt.",
       "Nach Zählungen der Stadtverwaltung ist inzwischen etwa jedes fünfte Ladenlokal in der Innenstadt unvermietet. Die Folgen spüren auch die verbliebenen Geschäfte. Wo weniger Läden sind, kommen weniger Kunden, und wo weniger Kunden kommen, lohnt sich das Geschäft für die übrigen Händler immer seltener. Der Inhaber eines Haushaltswarenladens spricht von einer Abwärtsspirale, gegen die er allein nichts ausrichten könne. Er selbst hat seine Öffnungszeiten bereits verkürzt, weil sich der Samstagnachmittag kaum noch lohnt.",
       "B — Die Gründe für den Leerstand sind vielfältig. Der wachsende Onlinehandel spielt eine wichtige Rolle, ist aber nicht der einzige Faktor. Schon lange vor dem Internet hatten Einkaufszentren am Stadtrand mit ihren kostenlosen Parkplätzen den Innenstädten Kunden abgezogen. In Rohrbach entstand ein solches Zentrum bereits vor über zwanzig Jahren, gegen den Willen vieler Einzelhändler. Hinzu kamen in den letzten Jahren steigende Parkgebühren in der Innenstadt, über die sich viele Kunden beschweren.",
       "Erschwerend kommt hinzu, dass viele Gebäude in der Innenstadt nicht mehr Menschen aus der Stadt gehören, sondern Immobilienfonds mit Sitz in anderen Städten. Diese halten oft lieber an hohen Mietforderungen fest, als ein Ladenlokal günstiger zu vermieten, weil ein niedriger Mietpreis den Wert der gesamten Immobilie mindern würde. So stehen Geschäfte mitunter jahrelang leer, obwohl es durchaus Interessenten gäbe. Die Stadt hat auf solche Entscheidungen kaum Einfluss.",
       "C — Um diesen Kreislauf zu durchbrechen, geht die Stadt Rohrbach seit zwei Jahren einen ungewöhnlichen Weg. Sie mietet leer stehende Läden selbst an und gibt sie für einen Bruchteil der Miete an Gründer weiter, die ein neues Geschäftsmodell ausprobieren wollen. Die Verträge laufen zunächst ein Jahr. Danach müssen die Mieter entscheiden, ob sie zu regulären Bedingungen bleiben oder ausziehen. Unterstützt werden die Gründer außerdem durch kostenlose Beratung zu Buchhaltung, Werbung und Ladengestaltung.",
       "Bisher haben sich auf diese Weise vierzehn Projekte angesiedelt, darunter eine Fahrradwerkstatt, ein Laden für unverpackte Lebensmittel und ein Atelier, in dem eine Keramikerin Kurse gibt. Neun davon sind nach dem ersten Jahr geblieben. Für die Stadt ist das Programm nicht billig, doch die Wirtschaftsförderung verweist darauf, dass jeder belebte Laden auch den Nachbargeschäften neue Kundschaft bringe. Zwei der Gründer haben inzwischen sogar Mitarbeiter eingestellt.",
       "D — Für das leere Kaufhaus am Marktplatz gibt es inzwischen ebenfalls Pläne. Die Stadt hat das Gebäude im vergangenen Jahr gekauft und will es in den kommenden Jahren grundlegend umbauen. Ins Erdgeschoss soll eine Markthalle mit regionalen Erzeugern einziehen, in die oberen Stockwerke die Stadtbibliothek und die Volkshochschule. Unter dem Dach sind etwa dreißig Wohnungen vorgesehen. Mit der Fertigstellung rechnet die Verwaltung frühestens in vier Jahren.",
       "Nicht alle sind von dem Vorhaben überzeugt. Die Opposition im Stadtrat kritisiert die hohen Kosten von über zwanzig Millionen Euro, und einige Händler befürchten, die Markthalle könne ihnen Kunden wegnehmen. Bürgermeister Tobias Mehlhorn hält dagegen, ohne das Projekt würde der Marktplatz endgültig veröden. Die Ausgaben würden sich zudem über die Jahre durch Mieteinnahmen teilweise wieder ausgleichen.",
       "E — Die Stadtplanerin Johanna Brettschneider, die ähnliche Vorhaben in mehreren Städten begleitet hat, hält den Rohrbacher Ansatz für zukunftsweisend. Die Innenstadt der Zukunft werde weniger vom Einkaufen leben als von Begegnung, Bildung, Kultur und Wohnen. Wer heute in die Stadtmitte komme, wolle dort Zeit verbringen und nicht nur möglichst schnell etwas besorgen. Geschäfte würden dabei nicht verschwinden, aber nur noch einen Teil des Angebots ausmachen.",
       "Damit dieser Wandel gelinge, müssten die Städte allerdings die Bürger frühzeitig einbeziehen. Allzu oft würden Konzepte am Schreibtisch entworfen, die an den Bedürfnissen der Menschen vorbeigingen. Brettschneider empfiehlt deshalb, leere Läden zunächst für Versuche zu nutzen: als Treffpunkt für Vereine, als Ausstellungsraum oder als Werkstatt, in der Bewohner ihre eigenen Ideen erproben können."
      ]
     },
     "aufgaben": [
      {
       "frage": "In welchem Abschnitt steht das? „Eigentümer verzichten lieber auf Einnahmen, als den Preis zu senken.\"",
       "opt": [
        "Abschnitt A",
        "Abschnitt B",
        "Abschnitt C",
        "Abschnitt D",
        "Abschnitt E"
       ],
       "loesung": 1,
       "fest": true,
       "stelle": "halten oft lieber an hohen Mietforderungen fest",
       "erklaerung": "Die Fonds lassen Läden leer stehen, statt sie günstiger zu vermieten."
      },
      {
       "frage": "In welchem Abschnitt steht das? „Die Mehrheit der geförderten Neugründungen hat sich behauptet.\"",
       "opt": [
        "Abschnitt A",
        "Abschnitt B",
        "Abschnitt C",
        "Abschnitt D",
        "Abschnitt E"
       ],
       "loesung": 2,
       "fest": true,
       "stelle": "Neun davon sind nach dem ersten Jahr geblieben",
       "erklaerung": "Neun von vierzehn Projekten sind geblieben – also die Mehrheit."
      },
      {
       "frage": "In welchem Abschnitt steht das? „Leere Geschäfte schaden auch den Läden, die noch geöffnet haben.\"",
       "opt": [
        "Abschnitt A",
        "Abschnitt B",
        "Abschnitt C",
        "Abschnitt D",
        "Abschnitt E"
       ],
       "loesung": 0,
       "fest": true,
       "stelle": "Die Folgen spüren auch die verbliebenen Geschäfte",
       "erklaerung": "Weniger Läden bedeuten weniger Kunden für die übrigen Händler."
      },
      {
       "frage": "In welchem Abschnitt steht das? „Neue Konzepte für die Innenstadt sollten nicht ohne die Bewohner entwickelt werden.\"",
       "opt": [
        "Abschnitt A",
        "Abschnitt B",
        "Abschnitt C",
        "Abschnitt D",
        "Abschnitt E"
       ],
       "loesung": 4,
       "fest": true,
       "stelle": "müssten die Städte allerdings die Bürger frühzeitig einbeziehen",
       "erklaerung": "Brettschneider warnt vor Konzepten vom Schreibtisch."
      },
      {
       "frage": "In welchem Abschnitt steht das? „Bereits vor dem Onlinehandel verloren die Stadtzentren Kundschaft an andere Orte.\"",
       "opt": [
        "Abschnitt A",
        "Abschnitt B",
        "Abschnitt C",
        "Abschnitt D",
        "Abschnitt E"
       ],
       "loesung": 1,
       "fest": true,
       "stelle": "Schon lange vor dem Internet hatten Einkaufszentren am Stadtrand",
       "erklaerung": "Die Einkaufszentren am Stadtrand zogen schon früher Kunden ab."
      },
      {
       "frage": "In welchem Abschnitt steht das? „Ein Umbauprojekt stößt wegen seiner Kosten auf Widerstand.\"",
       "opt": [
        "Abschnitt A",
        "Abschnitt B",
        "Abschnitt C",
        "Abschnitt D",
        "Abschnitt E"
       ],
       "loesung": 3,
       "fest": true,
       "stelle": "kritisiert die hohen Kosten von über zwanzig Millionen Euro",
       "erklaerung": "Die Opposition kritisiert die Kosten für den Umbau des Kaufhauses."
      }
     ]
    },
    {
     "nr": 3,
     "art": "textwahl",
     "text": {
      "sorte": "zeitung",
      "quelle": "nach einem Beitrag im Magazin „Zeitfragen\"",
      "titel": "Sachtext",
      "zeilen": [
       "Wer an ehrenamtliches Engagement denkt, hat oft ein bestimmtes Bild vor Augen: den Vorsitzenden des Sportvereins, der seit dreißig Jahren jeden Samstag am Spielfeldrand steht, oder die Frau, die jahrzehntelang den Seniorennachmittag der Gemeinde organisiert. Dieses Bild ist nicht falsch, aber es erfasst nur noch einen Teil der Wirklichkeit. Die Zahl der Menschen, die sich freiwillig engagieren, ist in den vergangenen Jahren keineswegs gesunken, wie häufig behauptet wird. Verändert hat sich vielmehr die Art und Weise, in der sie es tun. Statt sich auf Jahrzehnte an einen Verein zu binden, suchen viele nach Möglichkeiten, die zu ihrem Alltag passen.",
       "Das zeigt eine Erhebung des Instituts für Zivilgesellschaft in Marlingen, für die rund achttausend Erwachsene befragt wurden. Demnach engagiert sich nach wie vor etwa jeder Dritte in irgendeiner Form unentgeltlich für andere. Deutlich zurückgegangen ist jedoch der Anteil derer, die ein festes Amt übernehmen, etwa als Kassenwart, Schriftführer oder Vorstandsmitglied. Stattdessen bevorzugen viele Freiwillige Aufgaben, die zeitlich begrenzt sind und sich mit Beruf und Familie vereinbaren lassen. Die Forscher sprechen von einem Übergang vom „Amt\" zum „Projekt\".",
       "Die Leiterin der Studie, die Soziologin Miriam Okafor, sieht dafür mehrere Ursachen. Zum einen seien die Anforderungen im Arbeitsleben gestiegen; viele Beschäftigte wüssten heute nicht, wo sie in zwei Jahren arbeiten und wohnen würden. Wer so planen müsse, scheue langfristige Verpflichtungen. Das gelte besonders für Menschen zwischen dreißig und fünfzig, die oft zugleich Kinder großziehen und ihre Eltern unterstützen. Zum anderen hätten sich die Erwartungen an das Engagement selbst gewandelt. Früher habe man sich häufig aus Pflichtgefühl gegenüber der Gemeinschaft eingebracht, heute wollten die Menschen auch selbst etwas davon haben: neue Kontakte, Erfahrungen, die Möglichkeit, etwas zu bewegen.",
       "Für traditionelle Vereine ist diese Entwicklung eine Herausforderung. Viele von ihnen finden keine Nachfolger mehr für ihre Vorstandsposten. Im Landkreis Hessenbrück, so berichtet der dortige Kreissportbund, mussten allein im vergangenen Jahr vierzehn Vereine aufgelöst oder mit Nachbarvereinen zusammengelegt werden. In den meisten Fällen habe es nicht an Mitgliedern gefehlt, sondern an Menschen, die bereit gewesen wären, Verantwortung zu übernehmen. Besonders schwer wiegt dabei der bürokratische Aufwand: Wer einen Verein führt, muss sich mit Steuerfragen, Datenschutz und Versicherungen auskennen. Viele, die sich eigentlich gern einbringen würden, schreckt das ab.",
       "Einige Vereine haben darauf reagiert, indem sie ihre Strukturen grundlegend verändert haben. Der Turnverein Altenstedt etwa hat den klassischen Vorstand durch ein Team aus sechs Personen ersetzt, die sich die Aufgaben teilen und jeweils nur für ein Jahr gewählt werden. „Seitdem melden sich viel mehr Leute\", sagt der Sprecher des Teams, Jonas Werlich. „Ein Jahr kann man überblicken. Bei einer Amtszeit von vier Jahren haben die meisten sofort abgewinkt.\" Außerdem hat der Verein die Buchhaltung an ein externes Büro abgegeben, was zwar Geld kostet, aber die Ehrenamtlichen spürbar entlastet.",
       "Gleichzeitig entstehen neue Formen des Engagements, die ganz ohne Verein auskommen. In vielen Städten organisieren sich Nachbarn über Online-Plattformen, um älteren Menschen beim Einkaufen zu helfen, Gemeinschaftsgärten anzulegen oder Werkzeuge zu verleihen. Solche Initiativen sind flexibel und unkompliziert, haben aber auch Nachteile. Sie hängen oft an wenigen engagierten Personen, und wenn diese wegziehen oder die Lust verlieren, schläft das Projekt ein. Zudem fehlt ihnen häufig die rechtliche Absicherung, etwa wenn bei einer Aktion jemand zu Schaden kommt. Manche Initiativen schließen sich deshalb nach einiger Zeit doch zu einem Verein zusammen.",
       "Eine Rolle spielen inzwischen auch Arbeitgeber. Immer mehr Unternehmen stellen ihre Beschäftigten für einige Tage im Jahr frei, damit diese sich in sozialen Einrichtungen engagieren können. Ein mittelständischer Maschinenbauer aus Grevenau beispielsweise schickt seine Auszubildenden für eine Woche in Pflegeheime und Tafeln. Die Firma verspricht sich davon nicht nur ein besseres Ansehen, sondern auch eine Stärkung der sozialen Fähigkeiten ihrer Nachwuchskräfte. Kritiker bemängeln allerdings, dass solche Programme mitunter eher der Werbung dienten als den Einrichtungen, die oft viel Zeit in die Betreuung der Gäste investieren müssten. Die Einrichtungen selbst sehen die Programme überwiegend positiv, wünschen sich aber längere Einsätze.",
       "Auffällig ist, wie ungleich das Engagement in der Bevölkerung verteilt ist. Menschen mit höherem Bildungsabschluss und sicherem Einkommen engagieren sich laut der Marlinger Studie deutlich häufiger als andere. Okafor erklärt dies unter anderem damit, dass Engagement Ressourcen voraussetze: Zeit, Selbstvertrauen und das Gefühl, gebraucht zu werden. Wer mehrere Jobs habe oder Angehörige pflege, könne sich ein Ehrenamt oft schlicht nicht leisten. Ausgerechnet diejenigen, die von Unterstützung besonders profitieren würden, seien daher in vielen Initiativen kaum vertreten.",
       "Ein anderes Bild ergibt sich beim Blick auf die Altersgruppen. Lange Zeit galten Ruheständler als tragende Säule des Ehrenamts. Doch die Studie zeigt, dass gerade junge Erwachsene zwischen zwanzig und dreißig Jahren in den letzten Jahren aufgeholt haben. Sie engagieren sich besonders häufig im Umwelt- und Klimaschutz sowie in der Arbeit mit Geflüchteten. Allerdings wechseln sie auch häufiger zwischen verschiedenen Projekten. Für die Organisationen bedeutet das, dass sie immer wieder neue Freiwillige einarbeiten müssen. Zugleich bringen die Jüngeren häufig neue Ideen und digitale Kenntnisse mit, von denen die Vereine profitieren können.",
       "Hier setzen sogenannte Freiwilligenagenturen an, die es inzwischen in vielen Städten gibt. Sie vermitteln Interessierte an passende Einrichtungen und beraten Vereine dabei, wie sie Aufgaben attraktiver gestalten können. In Marlingen etwa betreibt die Agentur eine Online-Börse, auf der kurzfristige Einsätze angeboten werden: ein Nachmittag Vorlesen in der Kita, ein Wochenende beim Stadtfest. Die Leiterin der Agentur, Sabine Holtkamp, beobachtet, dass viele Menschen nach einem ersten kurzen Einsatz Gefallen an der Sache finden und sich später auch längerfristig binden. Wichtig sei vor allem, dass der Einstieg so einfach wie möglich gestaltet werde.",
       "Auch die Politik hat das Thema entdeckt. Seit einigen Jahren werden Ehrenamtliche steuerlich entlastet, und in mehreren Bundesländern gibt es Karten, mit denen Engagierte Vergünstigungen in Museen oder Schwimmbädern erhalten. Auch Fortbildungen für Freiwillige werden vielerorts staatlich gefördert. Okafor hält solche Maßnahmen für sinnvoll, warnt jedoch davor, ihre Wirkung zu überschätzen. Kaum jemand engagiere sich wegen eines ermäßigten Eintritts. Viel wichtiger sei, dass Freiwillige ernst genommen würden, dass man ihnen Gestaltungsspielraum lasse und ihre Arbeit sichtbar anerkenne.",
       "Das Ehrenamt, so lässt sich zusammenfassen, ist nicht in der Krise, wohl aber im Umbruch. Die Bereitschaft, sich für andere einzusetzen, ist ungebrochen; sie sucht sich nur neue Wege. Wer Freiwillige gewinnen will, muss sich auf deren veränderte Lebensumstände einstellen. Vereine, die an starren Strukturen festhalten, werden es schwer haben. Für jene, die sich öffnen und flexible Angebote machen, bietet der Wandel dagegen auch Chancen: Sie erreichen Menschen, die sich früher nie in einem Verein engagiert hätten."
      ]
     },
     "aufgaben": [
      {
       "frage": "Die Zahl der freiwillig engagierten Menschen ist in den letzten Jahren zurückgegangen.",
       "opt": [
        "richtig",
        "falsch",
        "steht nicht im Text"
       ],
       "loesung": 1,
       "fest": true,
       "stelle": "ist in den vergangenen Jahren keineswegs gesunken",
       "erklaerung": "„keineswegs gesunken\": Verändert hat sich nur die Art des Engagements, nicht die Zahl."
      },
      {
       "frage": "Für die Marlinger Studie wurden ausschließlich Mitglieder von Vereinen befragt.",
       "opt": [
        "richtig",
        "falsch",
        "steht nicht im Text"
       ],
       "loesung": 2,
       "fest": true,
       "stelle": "für die rund achttausend Erwachsene befragt wurden",
       "erklaerung": "Es heißt nur „Erwachsene\"; ob sie Vereinsmitglieder waren, sagt der Text nicht."
      },
      {
       "frage": "Weniger Menschen als früher sind bereit, ein festes Amt in einem Verein zu übernehmen.",
       "opt": [
        "richtig",
        "falsch",
        "steht nicht im Text"
       ],
       "loesung": 0,
       "fest": true,
       "stelle": "Deutlich zurückgegangen ist jedoch der Anteil derer, die ein festes Amt übernehmen",
       "erklaerung": "Der Anteil derer, die ein festes Amt übernehmen, ist „deutlich zurückgegangen\"."
      },
      {
       "frage": "Nach Okafor engagieren sich die Menschen heute vor allem aus Pflichtgefühl.",
       "opt": [
        "richtig",
        "falsch",
        "steht nicht im Text"
       ],
       "loesung": 1,
       "fest": true,
       "stelle": "heute wollten die Menschen auch selbst etwas davon haben",
       "erklaerung": "Pflichtgefühl war „früher\" wichtig; heute wollen die Menschen auch selbst profitieren."
      },
      {
       "frage": "Die Vereine in Hessenbrück wurden vor allem wegen sinkender Mitgliederzahlen aufgelöst.",
       "opt": [
        "richtig",
        "falsch",
        "steht nicht im Text"
       ],
       "loesung": 1,
       "fest": true,
       "stelle": "In den meisten Fällen habe es nicht an Mitgliedern gefehlt",
       "erklaerung": "Es fehlten nicht Mitglieder, sondern Menschen, die Verantwortung übernehmen."
      },
      {
       "frage": "Seit der Umstellung finden sich beim Turnverein Altenstedt mehr Freiwillige für Leitungsaufgaben.",
       "opt": [
        "richtig",
        "falsch",
        "steht nicht im Text"
       ],
       "loesung": 0,
       "fest": true,
       "stelle": "Seitdem melden sich viel mehr Leute",
       "erklaerung": "Nach der Einführung des Teams mit einjähriger Amtszeit melden sich „viel mehr Leute\"."
      },
      {
       "frage": "Nachbarschaftsinitiativen ohne Verein sind oft davon abhängig, dass einige wenige Personen dabeibleiben.",
       "opt": [
        "richtig",
        "falsch",
        "steht nicht im Text"
       ],
       "loesung": 0,
       "fest": true,
       "stelle": "Sie hängen oft an wenigen engagierten Personen",
       "erklaerung": "Ziehen diese wenigen Personen weg, „schläft das Projekt ein\"."
      },
      {
       "frage": "Die Pflegeheime in Grevenau haben den Maschinenbauer um Unterstützung gebeten.",
       "opt": [
        "richtig",
        "falsch",
        "steht nicht im Text"
       ],
       "loesung": 2,
       "fest": true,
       "stelle": "schickt seine Auszubildenden für eine Woche in Pflegeheime und Tafeln",
       "erklaerung": "Von wem die Initiative ausging, erwähnt der Text nicht."
      },
      {
       "frage": "Menschen mit unsicherem Einkommen engagieren sich seltener als Menschen mit sicherem Einkommen.",
       "opt": [
        "richtig",
        "falsch",
        "steht nicht im Text"
       ],
       "loesung": 0,
       "fest": true,
       "stelle": "engagieren sich laut der Marlinger Studie deutlich häufiger als andere",
       "erklaerung": "Wer ein sicheres Einkommen hat, engagiert sich „deutlich häufiger als andere\"."
      },
      {
       "frage": "Junge Freiwillige bleiben in der Regel lange bei demselben Projekt.",
       "opt": [
        "richtig",
        "falsch",
        "steht nicht im Text"
       ],
       "loesung": 1,
       "fest": true,
       "stelle": "Allerdings wechseln sie auch häufiger zwischen verschiedenen Projekten",
       "erklaerung": "Junge Erwachsene wechseln häufiger, deshalb müssen Organisationen ständig neu einarbeiten."
      },
      {
       "frage": "Die Freiwilligenagentur in Marlingen wird von der Stadt finanziert.",
       "opt": [
        "richtig",
        "falsch",
        "steht nicht im Text"
       ],
       "loesung": 2,
       "fest": true,
       "stelle": "betreibt die Agentur eine Online-Börse",
       "erklaerung": "Über die Finanzierung der Agentur steht nichts im Text."
      },
      {
       "frage": "Welche Überschrift passt am besten zum ganzen Text?",
       "opt": [
        "Immer weniger Menschen wollen sich freiwillig engagieren",
        "Ehrenamt im Umbruch: Engagement sucht neue Formen",
        "Wie Unternehmen das Ehrenamt ersetzen"
       ],
       "loesung": 1,
       "fest": true,
       "erklaerung": "Der Text beschreibt, wie sich die Formen des Engagements verändern. Dass weniger Menschen sich engagieren, wird ausdrücklich verneint, und Unternehmen sind nur ein Nebenaspekt."
      }
     ]
    },
    {
     "nr": 4,
     "art": "textwahl",
     "text": {
      "sorte": "zeitung",
      "quelle": "Ratgeber des Mietervereins Oberhain",
      "titel": "Die Nebenkostenabrechnung prüfen",
      "zeilen": [
       "Einmal im Jahr flattert sie ins Haus: die Nebenkostenabrechnung. Viele Mieter zahlen eine Nachforderung, ohne die Abrechnung genauer __(1)__ prüfen. Dabei lohnt sich ein zweiter Blick, __(2)__ nach Erfahrung der Mietervereine jede zweite Abrechnung Fehler enthält.",
       "Zunächst sollte man prüfen, ob die Abrechnung rechtzeitig __(3)__. Der Vermieter muss sie spätestens zwölf Monate nach Ende des Abrechnungszeitraums zustellen. Kommt sie später, kann er in der Regel keine Nachzahlung mehr __(4)__. Ein Guthaben muss er dem Mieter dagegen __(5)__ auszahlen.",
       "Anschließend lohnt ein Blick __(6)__ die einzelnen Posten. Nur Kosten, die im Mietvertrag ausdrücklich vereinbart __(7)__, dürfen auf die Mieter umgelegt werden. Dazu gehören etwa Wasser, Müllabfuhr, Hausreinigung und Gartenpflege. Verwaltungskosten oder Reparaturen hingegen muss der Vermieter selbst __(8)__. Tauchen sie in der Abrechnung auf, ist das ein klarer Fehler.",
       "Auch der Verteilerschlüssel __(9)__ Beachtung. In größeren Häusern werden die Kosten meist nach Wohnfläche auf die einzelnen Parteien verteilt. Wer eine kleine Wohnung hat, zahlt __(10)__ weniger als die Familie im Dachgeschoss. Die Heizkosten dagegen müssen zum größten Teil nach dem tatsächlichen Verbrauch abgerechnet werden, __(11)__ in der Wohnung entsprechende Messgeräte installiert sind.",
       "Mieter haben das Recht, die Belege einzusehen, __(12)__ die Abrechnung beruht. Dazu können sie einen Termin beim Vermieter oder bei der Hausverwaltung __(13)__. Es empfiehlt sich, die Rechnungen sorgfältig mit den Beträgen in der Abrechnung zu __(14)__. Fallen dabei Ungereimtheiten auf, sollte man den Vermieter schriftlich __(15)__ hinweisen.",
       "Für einen Widerspruch hat der Mieter zwölf Monate Zeit, __(16)__ er die Abrechnung erhalten hat. Bis zur Klärung seiner Einwände darf er den strittigen Betrag in vielen Fällen zurückhalten. Wer unsicher ist, __(17)__ sich an einen Mieterverein wenden. Dort werden Abrechnungen für Mitglieder kostenlos geprüft, und __(18)__ nötig, unterstützt der Verein auch bei der Auseinandersetzung mit dem Vermieter.",
       "Grundsätzlich gilt: Eine Nachforderung ist kein Grund zur Panik, __(19)__ sie sollte auch nicht ungeprüft bezahlt werden. Wer seine Unterlagen ordentlich __(20)__, behält den Überblick. Und wer im Zweifel nachfragt, __(21)__ nicht selten bares Geld. Viele Mieter wissen gar nicht, __(22)__ viel sie auf diese Weise sparen könnten."
      ]
     },
     "aufgaben": [
      {
       "frage": "Was passt in Lücke 1?",
       "luecke": 1,
       "opt": [
        "an",
        "bei",
        "zu",
        "um"
       ],
       "loesung": 2,
       "fest": true,
       "erklaerung": "„ohne … zu + Infinitiv\": „ohne zu prüfen\"."
      },
      {
       "frage": "Was passt in Lücke 2?",
       "luecke": 2,
       "opt": [
        "da",
        "trotzdem",
        "denn",
        "deshalb"
       ],
       "loesung": 0,
       "fest": true,
       "erklaerung": "Grund mit Verb am Ende (enthält): Nebensatz mit „da\"."
      },
      {
       "frage": "Was passt in Lücke 3?",
       "luecke": 3,
       "opt": [
        "eingehen ist",
        "eingegangen hat",
        "eingegangen ist",
        "eingegangen wird"
       ],
       "loesung": 2,
       "fest": true,
       "erklaerung": "Perfekt von „eingehen\" mit „sein\": „eingegangen ist\"."
      },
      {
       "frage": "Was passt in Lücke 4?",
       "luecke": 4,
       "opt": [
        "verlangend",
        "verlangen",
        "zu verlangen",
        "verlangt"
       ],
       "loesung": 1,
       "fest": true,
       "erklaerung": "Modalverb „kann\" + Infinitiv ohne „zu\"."
      },
      {
       "frage": "Was passt in Lücke 5?",
       "luecke": 5,
       "opt": [
        "deswegen",
        "folglich",
        "vergebens",
        "trotzdem"
       ],
       "loesung": 3,
       "fest": true,
       "erklaerung": "Gegensatz zur Nachzahlung: Das Guthaben bekommt der Mieter „trotzdem\"."
      },
      {
       "frage": "Was passt in Lücke 6?",
       "luecke": 6,
       "opt": [
        "über",
        "an",
        "auf",
        "nach"
       ],
       "loesung": 2,
       "fest": true,
       "erklaerung": "„einen Blick auf etwas werfen\"."
      },
      {
       "frage": "Was passt in Lücke 7?",
       "luecke": 7,
       "opt": [
        "haben",
        "würden",
        "hatten",
        "wurden"
       ],
       "loesung": 3,
       "fest": true,
       "erklaerung": "Vorgangspassiv Präteritum: „vereinbart wurden\"."
      },
      {
       "frage": "Was passt in Lücke 8?",
       "luecke": 8,
       "opt": [
        "bringen",
        "halten",
        "nehmen",
        "tragen"
       ],
       "loesung": 3,
       "fest": true,
       "erklaerung": "„die Kosten tragen\" = bezahlen."
      },
      {
       "frage": "Was passt in Lücke 9?",
       "luecke": 9,
       "opt": [
        "schenkt",
        "leistet",
        "gebührt",
        "verdient"
       ],
       "loesung": 3,
       "fest": true,
       "erklaerung": "„etwas verdient Beachtung\"; „gebührt\" verlangte einen Dativ."
      },
      {
       "frage": "Was passt in Lücke 10?",
       "luecke": 10,
       "opt": [
        "dagegen",
        "entsprechend",
        "trotzdem",
        "umgekehrt"
       ],
       "loesung": 1,
       "fest": true,
       "erklaerung": "Folge aus der Verteilung nach Fläche: „entsprechend weniger\"."
      },
      {
       "frage": "Was passt in Lücke 11?",
       "luecke": 11,
       "opt": [
        "damit",
        "indem",
        "sofern",
        "obwohl"
       ],
       "loesung": 2,
       "fest": true,
       "erklaerung": "Bedingung: „sofern\" = wenn, vorausgesetzt dass."
      },
      {
       "frage": "Was passt in Lücke 12?",
       "luecke": 12,
       "opt": [
        "in denen",
        "auf denen",
        "denen",
        "auf die"
       ],
       "loesung": 1,
       "fest": true,
       "erklaerung": "„auf etwas beruhen\" mit Dativ → „auf denen\"."
      },
      {
       "frage": "Was passt in Lücke 13?",
       "luecke": 13,
       "opt": [
        "vertragen",
        "vermitteln",
        "verhandeln",
        "vereinbaren"
       ],
       "loesung": 3,
       "fest": true,
       "erklaerung": "„einen Termin vereinbaren\"."
      },
      {
       "frage": "Was passt in Lücke 14?",
       "luecke": 14,
       "opt": [
        "vergleichen",
        "vergleicht",
        "verglichen",
        "vergleichend"
       ],
       "loesung": 0,
       "fest": true,
       "erklaerung": "„es empfiehlt sich, … zu vergleichen\": Infinitiv."
      },
      {
       "frage": "Was passt in Lücke 15?",
       "luecke": 15,
       "opt": [
        "daran",
        "darauf",
        "davon",
        "dafür"
       ],
       "loesung": 1,
       "fest": true,
       "erklaerung": "„jemanden auf etwas hinweisen\" → „darauf\"."
      },
      {
       "frage": "Was passt in Lücke 16?",
       "luecke": 16,
       "opt": [
        "bis",
        "während",
        "nachdem",
        "bevor"
       ],
       "loesung": 2,
       "fest": true,
       "erklaerung": "Die Frist beginnt nach dem Erhalt: „nachdem\"."
      },
      {
       "frage": "Was passt in Lücke 17?",
       "luecke": 17,
       "opt": [
        "wäre",
        "sollte",
        "würde",
        "hätte"
       ],
       "loesung": 1,
       "fest": true,
       "erklaerung": "Empfehlung: „sollte sich wenden\"."
      },
      {
       "frage": "Was passt in Lücke 18?",
       "luecke": 18,
       "opt": [
        "weil",
        "obwohl",
        "damit",
        "falls"
       ],
       "loesung": 3,
       "fest": true,
       "erklaerung": "Verkürzte Bedingung: „falls nötig\"."
      },
      {
       "frage": "Was passt in Lücke 19?",
       "luecke": 19,
       "opt": [
        "aber",
        "denn",
        "sondern",
        "oder"
       ],
       "loesung": 0,
       "fest": true,
       "erklaerung": "Einschränkung nach „kein Grund zur Panik\": „aber … auch nicht\"."
      },
      {
       "frage": "Was passt in Lücke 20?",
       "luecke": 20,
       "opt": [
        "aufbewahrend",
        "aufbewahrt",
        "aufbewahren",
        "aufzubewahren"
       ],
       "loesung": 1,
       "fest": true,
       "erklaerung": "Nebensatz, 3. Person Singular: „Wer … aufbewahrt\"."
      },
      {
       "frage": "Was passt in Lücke 21?",
       "luecke": 21,
       "opt": [
        "spart",
        "verliert",
        "verschwendet",
        "kostet"
       ],
       "loesung": 0,
       "fest": true,
       "erklaerung": "Nachfragen lohnt sich: Man „spart\" Geld."
      },
      {
       "frage": "Was passt in Lücke 22?",
       "luecke": 22,
       "opt": [
        "wie",
        "wo",
        "ob",
        "was"
       ],
       "loesung": 0,
       "fest": true,
       "erklaerung": "Frage nach dem Umfang: „wie viel\"."
      }
     ]
    }
   ]
  },
  {
   "id": "tg1ll2",
   "titel": "Prüfungslauf 2",
   "minuten": 90,
   "teile": [
    {
     "nr": 1,
     "art": "textwahl",
     "text": {
      "sorte": "zeitung",
      "quelle": "Landleben heute – Reportage",
      "titel": "Der Bus, den das Dorf selbst fährt",
      "zeilen": [
       "Wer in Oberwiesach ohne Auto lebt, hatte bis vor Kurzem ein ernstes Problem. Der letzte Linienbus fuhr werktags um halb sechs, am Wochenende gar nicht, und bis zum nächsten Supermarkt sind es elf Kilometer. __(1)__ Seit gut einem Jahr gibt es nun eine Alternative: einen Kleinbus mit acht Sitzen, der viermal täglich die umliegenden Dörfer mit der Kreisstadt verbindet – gesteuert von Freiwilligen aus dem Ort.",
       "Die Idee stammt von Gerhard Wenzlik, einem pensionierten Lastwagenfahrer, der seit vielen Jahren im Gemeinderat sitzt. __(2)__ Inzwischen gehören dem Verein, der den Bus betreibt, gut zwanzig Fahrer an, die meisten im Ruhestand. Jeder übernimmt ein bis zwei Schichten pro Woche. Einen besonderen Führerschein brauchen sie nicht, da der Bus nicht mehr als acht Fahrgäste befördert. Geschult wurden sie von einem Fahrlehrer aus der Kreisstadt.",
       "Finanziert wird das Angebot auf mehreren Wegen. Das Fahrzeug hat der Landkreis zur Verfügung gestellt, die Gemeinde übernimmt Versicherung und Wartung. __(3)__ Eine einfache Fahrt kostet zwei Euro, wer regelmäßig fährt, kauft eine Monatskarte. Gewinn soll dabei nicht entstehen; die Einnahmen decken gerade einmal die Kosten für den Treibstoff. Spenden örtlicher Firmen helfen, Rücklagen für unerwartete Reparaturen zu bilden.",
       "Am meisten genutzt wird der Bus am Vormittag, wenn Arztbesuche und Einkäufe anstehen. __(4)__ Viele Fahrgäste kennen sich inzwischen, und die Fahrt in die Stadt ist für manche das gesellige Ereignis der Woche. „Früher saß ich oft tagelang allein zu Hause“, erzählt eine Achtzigjährige, die jeden Dienstag und Freitag mitfährt. Manche Fahrer tragen ihr sogar die Einkaufstaschen bis an die Haustür.",
       "Ganz ohne Schwierigkeiten läuft das Projekt freilich nicht. __(5)__ Fällt ein Fahrer wegen Krankheit aus, muss oft kurzfristig ein anderer einspringen, und in der Urlaubszeit kam es bereits mehrfach zu Ausfällen. Der Verein sucht deshalb dringend jüngere Mitglieder, die zumindest gelegentlich am Wochenende fahren könnten.",
       "Verkehrsplaner beobachten das Modell mit Interesse, sehen aber auch Grenzen. __(6)__ Für Pendler, die jeden Morgen pünktlich zur Arbeit müssen, sei ein Angebot, das auf Freiwilligkeit beruht, keine verlässliche Lösung. Hier bleibe der Landkreis in der Pflicht, so die Fachleute, auch wenn ein gut ausgebauter Linienverkehr auf dem Land teuer sei."
      ]
     },
     "aufgaben": [
      {
       "frage": "Welcher Satz gehört in Lücke 1?",
       "luecke": 1,
       "opt": [
        "Die Fahrer erhalten dafür ein festes Monatsgehalt vom Landkreis.",
        "Das größte Problem ist die dünne Personaldecke.",
        "Ein Bürgerbus könne den öffentlichen Nahverkehr ergänzen, ihn aber nicht ersetzen.",
        "Besonders ältere Menschen, die sich das Autofahren nicht mehr zutrauen, waren deshalb auf Nachbarn oder Angehörige angewiesen.",
        "Doch der Bus ist für die Menschen im Ort längst mehr als ein Verkehrsmittel.",
        "Er hatte von einem ähnlichen Projekt in einer Nachbarregion gelesen und fand bei einer Bürgerversammlung schnell Mitstreiter.",
        "Den Rest tragen die Fahrgäste selbst.",
        "Am Abend ist der Bus dagegen meist bis auf den letzten Platz besetzt."
       ],
       "loesung": 3,
       "fest": true,
       "erklaerung": "„deshalb“ verweist auf die schlechte Verbindung; danach folgt mit „nun eine Alternative“ die Lösung."
      },
      {
       "frage": "Welcher Satz gehört in Lücke 2?",
       "luecke": 2,
       "opt": [
        "Die Fahrer erhalten dafür ein festes Monatsgehalt vom Landkreis.",
        "Das größte Problem ist die dünne Personaldecke.",
        "Ein Bürgerbus könne den öffentlichen Nahverkehr ergänzen, ihn aber nicht ersetzen.",
        "Besonders ältere Menschen, die sich das Autofahren nicht mehr zutrauen, waren deshalb auf Nachbarn oder Angehörige angewiesen.",
        "Doch der Bus ist für die Menschen im Ort längst mehr als ein Verkehrsmittel.",
        "Er hatte von einem ähnlichen Projekt in einer Nachbarregion gelesen und fand bei einer Bürgerversammlung schnell Mitstreiter.",
        "Den Rest tragen die Fahrgäste selbst.",
        "Am Abend ist der Bus dagegen meist bis auf den letzten Platz besetzt."
       ],
       "loesung": 5,
       "fest": true,
       "erklaerung": "„Er“ meint Wenzlik; die „Mitstreiter“ werden im nächsten Satz zum Verein mit zwanzig Fahrern."
      },
      {
       "frage": "Welcher Satz gehört in Lücke 3?",
       "luecke": 3,
       "opt": [
        "Die Fahrer erhalten dafür ein festes Monatsgehalt vom Landkreis.",
        "Das größte Problem ist die dünne Personaldecke.",
        "Ein Bürgerbus könne den öffentlichen Nahverkehr ergänzen, ihn aber nicht ersetzen.",
        "Besonders ältere Menschen, die sich das Autofahren nicht mehr zutrauen, waren deshalb auf Nachbarn oder Angehörige angewiesen.",
        "Doch der Bus ist für die Menschen im Ort längst mehr als ein Verkehrsmittel.",
        "Er hatte von einem ähnlichen Projekt in einer Nachbarregion gelesen und fand bei einer Bürgerversammlung schnell Mitstreiter.",
        "Den Rest tragen die Fahrgäste selbst.",
        "Am Abend ist der Bus dagegen meist bis auf den letzten Platz besetzt."
       ],
       "loesung": 6,
       "fest": true,
       "erklaerung": "„Den Rest“ ergänzt Landkreis und Gemeinde; danach wird erklärt, was die Fahrgäste zahlen."
      },
      {
       "frage": "Welcher Satz gehört in Lücke 4?",
       "luecke": 4,
       "opt": [
        "Die Fahrer erhalten dafür ein festes Monatsgehalt vom Landkreis.",
        "Das größte Problem ist die dünne Personaldecke.",
        "Ein Bürgerbus könne den öffentlichen Nahverkehr ergänzen, ihn aber nicht ersetzen.",
        "Besonders ältere Menschen, die sich das Autofahren nicht mehr zutrauen, waren deshalb auf Nachbarn oder Angehörige angewiesen.",
        "Doch der Bus ist für die Menschen im Ort längst mehr als ein Verkehrsmittel.",
        "Er hatte von einem ähnlichen Projekt in einer Nachbarregion gelesen und fand bei einer Bürgerversammlung schnell Mitstreiter.",
        "Den Rest tragen die Fahrgäste selbst.",
        "Am Abend ist der Bus dagegen meist bis auf den letzten Platz besetzt."
       ],
       "loesung": 4,
       "fest": true,
       "erklaerung": "„Doch … mehr als ein Verkehrsmittel“ leitet vom Zweck der Fahrten zum geselligen Aspekt über."
      },
      {
       "frage": "Welcher Satz gehört in Lücke 5?",
       "luecke": 5,
       "opt": [
        "Die Fahrer erhalten dafür ein festes Monatsgehalt vom Landkreis.",
        "Das größte Problem ist die dünne Personaldecke.",
        "Ein Bürgerbus könne den öffentlichen Nahverkehr ergänzen, ihn aber nicht ersetzen.",
        "Besonders ältere Menschen, die sich das Autofahren nicht mehr zutrauen, waren deshalb auf Nachbarn oder Angehörige angewiesen.",
        "Doch der Bus ist für die Menschen im Ort längst mehr als ein Verkehrsmittel.",
        "Er hatte von einem ähnlichen Projekt in einer Nachbarregion gelesen und fand bei einer Bürgerversammlung schnell Mitstreiter.",
        "Den Rest tragen die Fahrgäste selbst.",
        "Am Abend ist der Bus dagegen meist bis auf den letzten Platz besetzt."
       ],
       "loesung": 1,
       "fest": true,
       "erklaerung": "Die dünne Personaldecke wird mit dem Ausfall eines Fahrers konkret erklärt."
      },
      {
       "frage": "Welcher Satz gehört in Lücke 6?",
       "luecke": 6,
       "opt": [
        "Die Fahrer erhalten dafür ein festes Monatsgehalt vom Landkreis.",
        "Das größte Problem ist die dünne Personaldecke.",
        "Ein Bürgerbus könne den öffentlichen Nahverkehr ergänzen, ihn aber nicht ersetzen.",
        "Besonders ältere Menschen, die sich das Autofahren nicht mehr zutrauen, waren deshalb auf Nachbarn oder Angehörige angewiesen.",
        "Doch der Bus ist für die Menschen im Ort längst mehr als ein Verkehrsmittel.",
        "Er hatte von einem ähnlichen Projekt in einer Nachbarregion gelesen und fand bei einer Bürgerversammlung schnell Mitstreiter.",
        "Den Rest tragen die Fahrgäste selbst.",
        "Am Abend ist der Bus dagegen meist bis auf den letzten Platz besetzt."
       ],
       "loesung": 2,
       "fest": true,
       "erklaerung": "Der Satz benennt die „Grenzen“; die Pendler sind das Beispiel, für das der Bürgerbus nicht reicht."
      }
     ]
    },
    {
     "nr": 2,
     "art": "textwahl",
     "text": {
      "sorte": "zeitung",
      "quelle": "Familie & Beruf – Magazin",
      "titel": "Zwischen Büro und Pflegebett",
      "zeilen": [
       "A — Wenn um halb elf das Telefon klingelt, weiß Thomas Weidinger meist schon, wer dran ist. Seine Mutter, siebenundachtzig Jahre alt und seit zwei Jahren an Demenz erkrankt, ruft ihn mehrmals am Tag im Büro an. Mal findet sie ihre Brille nicht, mal ist sie überzeugt, dass jemand in ihrer Wohnung war. Weidinger, Ingenieur bei einem Maschinenbauunternehmen in Falkenroda, unterbricht dann seine Arbeit, beruhigt sie und versucht, sich danach wieder auf seine Konstruktionspläne zu konzentrieren.",
       "Nach Feierabend fährt er zu ihr, kauft ein, sortiert die Medikamente für die nächsten Tage und bleibt, bis sie schläft. Am Wochenende übernimmt seine Schwester, die zweihundert Kilometer entfernt wohnt, so oft sie kann. „Lange habe ich gedacht, das schaffe ich schon irgendwie“, sagt der Dreiundfünfzigjährige. Erst als er selbst wegen Schlafstörungen zum Arzt musste, habe er gemerkt, dass es so nicht weitergehe. Auch seine Arbeit habe gelitten, mehrere Fristen habe er nur knapp eingehalten.",
       "B — Weidinger ist einer von Millionen Menschen in Deutschland, die einen Angehörigen pflegen und gleichzeitig berufstätig sind. Die große Mehrheit der Pflegebedürftigen wird nicht in Heimen, sondern zu Hause versorgt, überwiegend von Familienmitgliedern. Ohne diese meist unsichtbare Arbeit, so heißt es in einem Bericht des Sozialverbands Gemeinwohl, wäre das Pflegesystem längst zusammengebrochen. Fachleute gehen davon aus, dass die Zahl der Pflegenden weiter steigen wird, weil die Bevölkerung altert.",
       "Den größten Teil dieser Last tragen nach wie vor Frauen. Viele von ihnen reduzieren ihre Arbeitszeit oder geben den Beruf ganz auf, was sich später deutlich auf ihre Rente auswirkt. Der Bericht spricht von einem doppelten Nachteil: Wer heute pflegt, verzichtet auf Einkommen und riskiert damit, im Alter selbst auf Unterstützung angewiesen zu sein.",
       "C — Der Gesetzgeber hat in den vergangenen Jahren mehrere Möglichkeiten geschaffen, Beruf und Pflege besser zu vereinbaren. Beschäftigte können sich etwa in einer akuten Notlage für einige Arbeitstage freistellen lassen, um die Versorgung eines Angehörigen zu organisieren. Darüber hinaus gibt es Regelungen, nach denen man die Arbeitszeit für einen längeren Zeitraum verringern kann, ohne den Arbeitsplatz zu verlieren. Während dieser Zeit besteht ein besonderer Kündigungsschutz.",
       "In der Praxis werden diese Angebote jedoch erstaunlich selten genutzt. Ein Grund ist das Geld: Während einer längeren Freistellung fehlt ein Teil des Gehalts, und das zinslose Darlehen, das der Staat dafür anbietet, schreckt viele ab, weil es später zurückgezahlt werden muss. Viele Betroffene kennen ihre Rechte zudem gar nicht oder fürchten, dass ein Antrag ihrer Karriere schaden könnte.",
       "D — Einige Unternehmen haben erkannt, dass sie hier selbst tätig werden müssen, wenn sie erfahrene Mitarbeiter nicht verlieren wollen. Weidingers Arbeitgeber hat vor zwei Jahren sogenannte Pflegelotsen ausgebildet: Kollegen aus verschiedenen Abteilungen, die Betroffenen vertraulich zuhören, sie über Hilfsangebote informieren und bei Bedarf Kontakt zu Beratungsstellen herstellen. Außerdem können Beschäftigte mit pflegebedürftigen Angehörigen ihre Arbeitszeit flexibler einteilen. Die Kosten dafür sind gering, verglichen mit dem Aufwand, eine erfahrene Fachkraft zu ersetzen.",
       "Dass solche Angebote nötig sind, zeigt eine Erfahrung der Personalabteilung. Anders als bei der Kinderbetreuung sprechen viele Mitarbeiter am Arbeitsplatz nicht über die Pflege ihrer Eltern. Sie empfinden es als Privatsache oder schämen sich, um Hilfe zu bitten. Erst seit es die Lotsen gibt, wisse man überhaupt, wie viele Beschäftigte betroffen seien, berichtet die Personalleiterin. Inzwischen haben sich bereits über sechzig Kollegen an die Lotsen gewandt.",
       "E — Fachleute raten pflegenden Angehörigen, sich frühzeitig beraten zu lassen und nicht zu warten, bis die eigenen Kräfte erschöpft sind. In vielen Städten gibt es kostenlose Beratungsstellen, die über Leistungen der Pflegeversicherung informieren und bei Anträgen helfen. Entlastung können etwa Tagespflegeeinrichtungen bringen, in denen Pflegebedürftige werktags betreut werden, oder ambulante Dienste, die einzelne Aufgaben übernehmen. Wichtig sei außerdem, sich selbst regelmäßig Pausen zu gönnen, etwa durch eine Kurzzeitpflege während des eigenen Urlaubs.",
       "Thomas Weidinger hat sich nach seinem Arztbesuch an einen der Pflegelotsen in seiner Firma gewandt. Inzwischen verbringt seine Mutter drei Tage in der Woche in einer Tagespflege, wo sie mit anderen Senioren singt, bastelt und zu Mittag isst. Die Anrufe im Büro sind seltener geworden. Und zum ersten Mal seit Langem, sagt er, habe er wieder ein Wochenende ganz für sich gehabt."
      ]
     },
     "aufgaben": [
      {
       "frage": "In welchem Abschnitt steht das? „Viele wissen nicht, welche Ansprüche sie als pflegende Beschäftigte haben.\"",
       "opt": [
        "Abschnitt A",
        "Abschnitt B",
        "Abschnitt C",
        "Abschnitt D",
        "Abschnitt E"
       ],
       "loesung": 2,
       "fest": true,
       "stelle": "Viele Betroffene kennen ihre Rechte zudem gar nicht",
       "erklaerung": "Unkenntnis der eigenen Rechte ist ein Grund, warum die Angebote selten genutzt werden."
      },
      {
       "frage": "In welchem Abschnitt steht das? „Erst gesundheitliche Probleme machten einem Mann seine Überforderung bewusst.\"",
       "opt": [
        "Abschnitt A",
        "Abschnitt B",
        "Abschnitt C",
        "Abschnitt D",
        "Abschnitt E"
       ],
       "loesung": 0,
       "fest": true,
       "stelle": "wegen Schlafstörungen zum Arzt musste",
       "erklaerung": "Durch die Schlafstörungen merkte Weidinger, dass es so nicht weitergeht."
      },
      {
       "frage": "In welchem Abschnitt steht das? „Pflege durch Angehörige kann später zu eigener Bedürftigkeit führen.\"",
       "opt": [
        "Abschnitt A",
        "Abschnitt B",
        "Abschnitt C",
        "Abschnitt D",
        "Abschnitt E"
       ],
       "loesung": 1,
       "fest": true,
       "stelle": "im Alter selbst auf Unterstützung angewiesen zu sein",
       "erklaerung": "Weniger Einkommen heute bedeutet weniger Rente und später eigene Hilfsbedürftigkeit."
      },
      {
       "frage": "In welchem Abschnitt steht das? „Mit der Pflege von Eltern gehen viele Beschäftigte im Betrieb nicht offen um.\"",
       "opt": [
        "Abschnitt A",
        "Abschnitt B",
        "Abschnitt C",
        "Abschnitt D",
        "Abschnitt E"
       ],
       "loesung": 3,
       "fest": true,
       "stelle": "sprechen viele Mitarbeiter am Arbeitsplatz nicht über die Pflege ihrer Eltern",
       "erklaerung": "Sie halten es für Privatsache oder schämen sich."
      },
      {
       "frage": "In welchem Abschnitt steht das? „Eine staatliche Geldhilfe wird kaum genutzt, weil man sie zurückzahlen muss.\"",
       "opt": [
        "Abschnitt A",
        "Abschnitt B",
        "Abschnitt C",
        "Abschnitt D",
        "Abschnitt E"
       ],
       "loesung": 2,
       "fest": true,
       "stelle": "weil es später zurückgezahlt werden muss",
       "erklaerung": "Das Darlehen schreckt ab, weil es kein Zuschuss ist."
      },
      {
       "frage": "In welchem Abschnitt steht das? „Man sollte Unterstützung suchen, bevor man selbst nicht mehr kann.\"",
       "opt": [
        "Abschnitt A",
        "Abschnitt B",
        "Abschnitt C",
        "Abschnitt D",
        "Abschnitt E"
       ],
       "loesung": 4,
       "fest": true,
       "stelle": "nicht zu warten, bis die eigenen Kräfte erschöpft sind",
       "erklaerung": "Fachleute raten zu früher Beratung, nicht erst bei Erschöpfung."
      }
     ]
    },
    {
     "nr": 3,
     "art": "textwahl",
     "text": {
      "sorte": "zeitung",
      "quelle": "nach einer Reportage im Magazin „Alltag und Umwelt\"",
      "titel": "Sachtext",
      "zeilen": [
       "Samstagnachmittag im Gemeindehaus von Kellersdorf: An langen Tischen sitzen Menschen über Toaster, Nähmaschinen und Kaffeemaschinen gebeugt. Ein pensionierter Elektriker erklärt einer jungen Mutter, warum ihr Wasserkocher nicht mehr heiß wird, nebenan versucht ein Schüler, den Reißverschluss einer Winterjacke zu ersetzen. Einmal im Monat öffnet hier das Reparaturcafé, und an diesem Tag ist der Andrang so groß, dass einige Besucher fast zwei Stunden warten müssen. Von schlechter Laune ist dennoch wenig zu spüren; man trinkt Kaffee, kommt ins Gespräch und schaut den anderen über die Schulter.",
       "Reparaturcafés gibt es inzwischen in fast jeder größeren Stadt und in vielen Dörfern. Die Idee ist einfach: Ehrenamtliche mit handwerklichem Geschick helfen Besuchern dabei, defekte Gegenstände selbst wieder instand zu setzen. Bezahlt wird nichts, allenfalls eine freiwillige Spende für Ersatzteile und Kuchen. Wichtig ist den Organisatoren, dass die Besucher nicht nur ihr Gerät abgeben, sondern selbst mit Hand anlegen. „Wir sind keine kostenlose Werkstatt\", sagt Helga Brandner, die das Café in Kellersdorf vor sechs Jahren gegründet hat. „Wer hier etwas repariert, lernt dabei auch, wie die Dinge funktionieren.\"",
       "Die Erfolgsquote kann sich sehen lassen. Nach den Aufzeichnungen des Kellersdorfer Teams lässt sich gut die Hälfte der mitgebrachten Gegenstände wieder in Gang bringen. Bei Kleidung und Fahrrädern liegt der Anteil sogar deutlich höher, bei modernen Elektrogeräten dagegen niedriger. Häufig scheitert eine Reparatur nicht am fehlenden Können, sondern daran, dass sich ein Gerät gar nicht erst öffnen lässt: Gehäuse sind verklebt statt verschraubt, und für manche Schrauben braucht man Spezialwerkzeug, das nur der Hersteller besitzt. Manchmal hilft dann nur noch der Gang zum Wertstoffhof, so ärgerlich das für die Besitzer auch ist.",
       "Genau hier setzt eine Debatte an, die seit einigen Jahren auch die Politik beschäftigt. Unter dem Schlagwort „Recht auf Reparatur\" fordern Verbraucherverbände, dass Hersteller ihre Produkte so konstruieren, dass sie sich mit vertretbarem Aufwand instand setzen lassen. Außerdem sollen Ersatzteile und Reparaturanleitungen über viele Jahre verfügbar sein, und zwar nicht nur für Vertragswerkstätten, sondern auch für unabhängige Betriebe und Privatleute. Erste gesetzliche Regelungen gelten bereits für einige große Haushaltsgeräte wie Waschmaschinen und Kühlschränke. Für Smartphones und Laptops sollen ähnliche Vorschriften folgen.",
       "Die Hersteller sehen diese Forderungen mit gemischten Gefühlen. Ein Sprecher eines Branchenverbands betont, dass man grundsätzlich nichts gegen langlebige Produkte habe. Verklebte Gehäuse seien aber kein Zeichen böser Absicht, sondern oft notwendig, um Geräte wasserdicht, leicht und flach zu machen, was die Kunden ausdrücklich wünschten. Zudem warnt der Verband davor, dass Laien sich bei Reparaturen an Geräten mit Akkus oder Netzanschluss verletzen könnten. Ein Recht auf Reparatur dürfe nicht zulasten der Sicherheit gehen. Außerdem verweist er darauf, dass viele Hersteller bereits eigene Reparaturdienste anbieten.",
       "In Reparaturcafés wird dieses Argument durchaus ernst genommen. In Kellersdorf dürfen Arbeiten an Elektrogeräten nur unter Aufsicht eines ausgebildeten Elektrikers vorgenommen werden, und jedes reparierte Gerät wird vor der Rückgabe mit einem Prüfgerät getestet. Brandner hält die Sicherheitsbedenken der Industrie dennoch für vorgeschoben. „Wenn es nur um die Sicherheit ginge, könnte man ja wenigstens die Ersatzteile frei verkaufen\", sagt sie. Ihrer Erfahrung nach scheitern viele Reparaturen schlicht daran, dass ein Ersatzteil teurer ist als ein neues Gerät.",
       "Dieser Befund deckt sich mit einer Untersuchung der Verbraucherzentrale in Hallbach. Dort wurde ermittelt, wie viel es kostet, zwanzig gängige Haushaltsgeräte in einer Fachwerkstatt reparieren zu lassen. Bei mehr als der Hälfte der Geräte lagen die Kosten für Ersatzteil und Arbeitszeit über sechzig Prozent des Neupreises. Besonders ungünstig schnitten kleine Küchengeräte wie Toaster und Wasserkocher ab. Unter solchen Umständen entscheiden sich die meisten Verbraucher verständlicherweise für einen Neukauf. Einige Kommunen haben deshalb einen Reparaturbonus eingeführt, der einen Teil der Werkstattkosten erstattet.",
       "In der Stadt Hallbach selbst läuft ein solches Programm seit zwei Jahren. Wer ein Gerät in einem örtlichen Betrieb reparieren lässt, bekommt die Hälfte der Rechnung erstattet, höchstens jedoch hundert Euro. Die Nachfrage war von Anfang an groß; schon nach wenigen Monaten war das Budget für das erste Jahr aufgebraucht. Die Handwerksbetriebe der Region begrüßen das Programm, weil es ihnen neue Kunden bringt. Ob es tatsächlich dazu führt, dass weniger Geräte im Müll landen, lässt sich nach Angaben der Stadt jedoch noch nicht sagen. Für das laufende Jahr hat der Stadtrat die Mittel dennoch aufgestockt.",
       "Für die Umwelt ist die Reparatur in den meisten Fällen die bessere Wahl. Der größte Teil der Energie und der Rohstoffe, die ein Elektrogerät während seines Lebens verbraucht, entfällt bei vielen Produkten auf die Herstellung, nicht auf die Nutzung. Jedes Jahr, das ein Smartphone oder ein Laptop länger in Gebrauch bleibt, spart also beträchtliche Ressourcen. Eine Ausnahme bilden allenfalls sehr alte Kühlschränke oder Waschmaschinen, die so viel Strom verbrauchen, dass sich ein Austausch gegen ein sparsames Neugerät auf Dauer lohnen kann. Wer dagegen ein funktionierendes Gerät vorzeitig ersetzt, verschenkt diesen Vorteil.",
       "Neben dem ökologischen Nutzen betonen viele Besucher der Reparaturcafés einen anderen Aspekt: das Gefühl, etwas selbst geschafft zu haben. Der Kulturwissenschaftler Daniel Ferreira, der mehrere solcher Initiativen begleitet hat, spricht von einer „Wiederentdeckung der eigenen Hände\". In einer Zeit, in der viele Menschen beruflich vor allem am Bildschirm arbeiteten, erlebten sie es als befriedigend, ein greifbares Problem zu lösen. Zudem entstünden in den Cafés Begegnungen zwischen Menschen, die sich sonst kaum über den Weg liefen: Rentner, Schüler, Zugezogene, Alteingesessene. Mancher Besucher komme inzwischen auch ohne defektes Gerät, einfach um Gesellschaft zu haben.",
       "Allerdings stoßen die Initiativen auch an Grenzen. Viele Reparaturcafés klagen darüber, dass ihre erfahrenen Helfer älter werden und Nachwuchs schwer zu finden ist. Gerade für komplexe Elektronik fehlen oft die Fachleute. Einige Cafés versuchen deshalb, gezielt jüngere Helfer anzusprechen, etwa über Berufsschulen. Hinzu kommt, dass die Cafés nur in begrenztem Umfang arbeiten können: Ein Nachmittag im Monat reicht kaum aus, um die Nachfrage zu decken. Ferreira warnt deshalb davor, die Initiativen zu überfordern. Sie könnten ein Umdenken anstoßen, aber nicht die fehlende Reparaturfreundlichkeit der Produkte ausgleichen.",
       "In Kellersdorf hat man sich mit diesen Grenzen arrangiert. Brandner und ihr Team haben begonnen, an Schulen Workshops anzubieten, in denen Jugendliche lernen, einen Fahrradschlauch zu flicken oder einen Knopf anzunähen. Die Nachfrage der Schulen ist so groß, dass das Team kaum hinterherkommt. Das sei vielleicht der wichtigste Beitrag, sagt sie. Denn wer als Kind erfahren habe, dass man Dinge reparieren könne, werfe sie als Erwachsener nicht so schnell weg. Als das Café am frühen Abend schließt, verlässt die junge Mutter das Gemeindehaus mit ihrem Wasserkocher unter dem Arm. Er funktioniert wieder."
      ]
     },
     "aufgaben": [
      {
       "frage": "Im Reparaturcafé in Kellersdorf musste an diesem Samstag niemand lange warten.",
       "opt": [
        "richtig",
        "falsch",
        "steht nicht im Text"
       ],
       "loesung": 1,
       "fest": true,
       "stelle": "dass einige Besucher fast zwei Stunden warten müssen",
       "erklaerung": "Einige warten „fast zwei Stunden\": Das ist das Gegenteil der Aussage."
      },
      {
       "frage": "Die Helfer in Kellersdorf haben alle eine handwerkliche Ausbildung.",
       "opt": [
        "richtig",
        "falsch",
        "steht nicht im Text"
       ],
       "loesung": 2,
       "fest": true,
       "stelle": "Ehrenamtliche mit handwerklichem Geschick helfen Besuchern",
       "erklaerung": "„Geschick\" ist keine Ausbildung; ob alle eine haben, sagt der Text nicht."
      },
      {
       "frage": "Die Besucher sollen bei der Reparatur ihrer Gegenstände selbst mitarbeiten.",
       "opt": [
        "richtig",
        "falsch",
        "steht nicht im Text"
       ],
       "loesung": 0,
       "fest": true,
       "stelle": "sondern selbst mit Hand anlegen",
       "erklaerung": "„selbst mit Hand anlegen\" = selbst mitarbeiten."
      },
      {
       "frage": "Bei modernen Elektrogeräten gelingt eine Reparatur seltener als bei Fahrrädern.",
       "opt": [
        "richtig",
        "falsch",
        "steht nicht im Text"
       ],
       "loesung": 0,
       "fest": true,
       "stelle": "bei modernen Elektrogeräten dagegen niedriger",
       "erklaerung": "Bei Fahrrädern liegt die Quote höher, bei modernen Elektrogeräten niedriger."
      },
      {
       "frage": "Die gesetzlichen Regelungen zum Recht auf Reparatur gelten bereits für alle Elektrogeräte.",
       "opt": [
        "richtig",
        "falsch",
        "steht nicht im Text"
       ],
       "loesung": 1,
       "fest": true,
       "stelle": "Erste gesetzliche Regelungen gelten bereits für einige große Haushaltsgeräte",
       "erklaerung": "„für einige große Haushaltsgeräte\", also nicht für alle Elektrogeräte."
      },
      {
       "frage": "Nach Angaben des Branchenverbands wünschen sich die Kunden flache und leichte Geräte.",
       "opt": [
        "richtig",
        "falsch",
        "steht nicht im Text"
       ],
       "loesung": 0,
       "fest": true,
       "stelle": "was die Kunden ausdrücklich wünschten",
       "erklaerung": "Wasserdicht, leicht und flach: Das wünschten die Kunden laut Verband ausdrücklich."
      },
      {
       "frage": "Brandner glaubt, dass es der Industrie tatsächlich vor allem um die Sicherheit geht.",
       "opt": [
        "richtig",
        "falsch",
        "steht nicht im Text"
       ],
       "loesung": 1,
       "fest": true,
       "stelle": "die Sicherheitsbedenken der Industrie dennoch für vorgeschoben",
       "erklaerung": "„vorgeschoben\" heißt: nur ein Vorwand, nicht der wahre Grund."
      },
      {
       "frage": "Die Untersuchung in Hallbach wurde von einem Hersteller in Auftrag gegeben.",
       "opt": [
        "richtig",
        "falsch",
        "steht nicht im Text"
       ],
       "loesung": 2,
       "fest": true,
       "stelle": "einer Untersuchung der Verbraucherzentrale in Hallbach",
       "erklaerung": "Die Verbraucherzentrale hat untersucht; einen Auftraggeber nennt der Text nicht."
      },
      {
       "frage": "Das Hallbacher Programm hat nachweislich dazu geführt, dass weniger Müll entsteht.",
       "opt": [
        "richtig",
        "falsch",
        "steht nicht im Text"
       ],
       "loesung": 1,
       "fest": true,
       "stelle": "lässt sich nach Angaben der Stadt jedoch noch nicht sagen",
       "erklaerung": "Die Wirkung auf den Müll ist noch nicht belegt, also nicht „nachweislich\"."
      },
      {
       "frage": "Ferreira hat für seine Arbeit Besucher aus mehreren Städten befragt.",
       "opt": [
        "richtig",
        "falsch",
        "steht nicht im Text"
       ],
       "loesung": 2,
       "fest": true,
       "stelle": "der mehrere solcher Initiativen begleitet hat",
       "erklaerung": "Er hat Initiativen begleitet; von Befragungen in mehreren Städten steht nichts im Text."
      },
      {
       "frage": "Ferreira meint, dass Reparaturcafés das Problem schlecht reparierbarer Produkte allein nicht lösen können.",
       "opt": [
        "richtig",
        "falsch",
        "steht nicht im Text"
       ],
       "loesung": 0,
       "fest": true,
       "stelle": "aber nicht die fehlende Reparaturfreundlichkeit der Produkte ausgleichen",
       "erklaerung": "Die Cafés können ein Umdenken anstoßen, die Mängel der Produkte aber nicht ausgleichen."
      },
      {
       "frage": "Welche Überschrift passt am besten zum ganzen Text?",
       "opt": [
        "Neues Gesetz: Hersteller müssen alle Geräte reparieren",
        "Reparaturbonus in Hallbach: Das Geld reicht nicht",
        "Reparieren statt wegwerfen: eine Bewegung mit Grenzen"
       ],
       "loesung": 2,
       "fest": true,
       "erklaerung": "Der Text zeigt Erfolge und Grenzen der Reparaturcafés und der Reparatur-Debatte. Das Gesetz gilt nur für einige Geräte, und der Bonus ist nur ein Teilaspekt."
      }
     ]
    },
    {
     "nr": 4,
     "art": "textwahl",
     "text": {
      "sorte": "zeitung",
      "quelle": "Kommentar im Verbrauchermagazin „Markt und Meinung\"",
      "titel": "Fünf Sterne sind nicht alles",
      "zeilen": [
       "Kaum jemand bucht heute ein Hotel oder sucht einen Handwerker aus, __(1)__ vorher die Bewertungen im Internet zu lesen. Die Sterne und Kommentare anderer Kunden sind zu einer wichtigen Orientierungshilfe __(2)__. Doch das Vertrauen in sie ist nur zum Teil berechtigt.",
       "Das größte Problem sind gefälschte Bewertungen. Manche Anbieter lassen sich lobende Einträge gegen Bezahlung schreiben, andere __(3)__ ihre Konkurrenz mit erfundenen Beschwerden. Die Plattformen beteuern zwar, __(4)__ Fälschungen konsequent vorzugehen, doch Fachleute bezweifeln, dass ihnen das gelingt. Schätzungen __(5)__ ist bis zu jeder fünfte Eintrag nicht echt.",
       "Doch selbst echte Bewertungen __(6)__ mit Vorsicht zu genießen. Wer zufrieden ist, schreibt nur selten etwas; wer sich ärgert, greift dagegen schnell zur Tastatur. Dadurch entsteht ein verzerrtes Bild, __(7)__ einzelne Ausreißer überbewertet werden. Hinzu kommt, dass viele Bewertungen nur wenig __(8)__ der eigentlichen Leistung zu tun haben. So erhält ein einfaches Hotel schlechte Noten, weil es keinen Wellnessbereich hat.",
       "Für Verbraucher bedeutet das nicht, Bewertungen ganz __(9)__ ignorieren. Man sollte sie jedoch mit Bedacht lesen. Aussagekräftiger __(10)__ die Gesamtnote sind oft die ausführlichen Kommentare, in denen konkrete Erfahrungen geschildert werden. Auch lohnt es sich, darauf __(11)__ achten, wie ein Anbieter auf Kritik reagiert. Wer sachlich antwortet und Probleme einräumt, verdient __(12)__ mehr Vertrauen als jemand, der ausschließlich Lob erhält.",
       "In die Pflicht __(13)__ werden müssen aber vor allem die Plattformen. Sie müssten offenlegen, nach welchen Kriterien sie Bewertungen prüfen und __(14)__ sie Einträge löschen. Seit Kurzem müssen sie zudem angeben, ob sie sicherstellen, dass nur Kunden bewerten, die das Produkt tatsächlich gekauft __(15)__. Das ist ein Fortschritt, reicht aber __(16)__ nicht aus.",
       "Letztlich hängt der Wert von Bewertungen davon ab, __(17)__ ehrlich sie sind. Jeder Kunde kann dazu __(18)__ beitragen, indem er auch dann eine kurze Rückmeldung gibt, wenn alles in Ordnung war. Nur so __(19)__ ein realistisches Bild. Und wer selbst bewertet, sollte sich fragen, ob seine Kritik fair ist __(20)__ nur seinem Ärger Luft macht. Ein schlechter Tag des Kellners rechtfertigt __(21)__ keinen vernichtenden Kommentar, der das Restaurant monatelang begleitet. Bewertungen sind ein nützliches Werkzeug, aber nur, wenn alle __(22)__ verantwortungsvoll umgehen."
      ]
     },
     "aufgaben": [
      {
       "frage": "Was passt in Lücke 1?",
       "luecke": 1,
       "opt": [
        "außer",
        "statt",
        "ohne",
        "um"
       ],
       "loesung": 2,
       "fest": true,
       "erklaerung": "„ohne … zu\" = ohne dass man vorher liest."
      },
      {
       "frage": "Was passt in Lücke 2?",
       "luecke": 2,
       "opt": [
        "geworden",
        "worden",
        "wurden",
        "werden"
       ],
       "loesung": 0,
       "fest": true,
       "erklaerung": "Perfekt von „werden\" als Vollverb: „sind … geworden\"."
      },
      {
       "frage": "Was passt in Lücke 3?",
       "luecke": 3,
       "opt": [
        "beschädigen",
        "entschädigen",
        "schaden",
        "schädigen"
       ],
       "loesung": 3,
       "fest": true,
       "erklaerung": "„jemanden schädigen\" mit Akkusativ; „schaden\" verlangt den Dativ, „beschädigen\" passt zu Gegenständen."
      },
      {
       "frage": "Was passt in Lücke 4?",
       "luecke": 4,
       "opt": [
        "gegen",
        "auf",
        "mit",
        "über"
       ],
       "loesung": 0,
       "fest": true,
       "erklaerung": "„gegen etwas vorgehen\" = etwas bekämpfen."
      },
      {
       "frage": "Was passt in Lücke 5?",
       "luecke": 5,
       "opt": [
        "wegen",
        "zufolge",
        "gegenüber",
        "entlang"
       ],
       "loesung": 1,
       "fest": true,
       "erklaerung": "Nachgestellte Präposition: „Schätzungen zufolge\" = nach Schätzungen."
      },
      {
       "frage": "Was passt in Lücke 6?",
       "luecke": 6,
       "opt": [
        "müssen",
        "sind",
        "werden",
        "haben"
       ],
       "loesung": 1,
       "fest": true,
       "erklaerung": "„mit Vorsicht zu genießen sein\" = man muss vorsichtig sein."
      },
      {
       "frage": "Was passt in Lücke 7?",
       "luecke": 7,
       "opt": [
        "das",
        "in dem",
        "dem",
        "den"
       ],
       "loesung": 1,
       "fest": true,
       "erklaerung": "„in dem Bild werden Ausreißer überbewertet\" → „in dem\"."
      },
      {
       "frage": "Was passt in Lücke 8?",
       "luecke": 8,
       "opt": [
        "mit",
        "zu",
        "an",
        "von"
       ],
       "loesung": 0,
       "fest": true,
       "erklaerung": "„etwas mit etwas zu tun haben\"."
      },
      {
       "frage": "Was passt in Lücke 9?",
       "luecke": 9,
       "opt": [
        "für",
        "um",
        "zu",
        "so"
       ],
       "loesung": 2,
       "fest": true,
       "erklaerung": "„bedeuten, … zu ignorieren\": Infinitiv mit „zu\"."
      },
      {
       "frage": "Was passt in Lücke 10?",
       "luecke": 10,
       "opt": [
        "als",
        "so",
        "denn",
        "wie"
       ],
       "loesung": 0,
       "fest": true,
       "erklaerung": "Komparativ + „als\": „aussagekräftiger als\"."
      },
      {
       "frage": "Was passt in Lücke 11?",
       "luecke": 11,
       "opt": [
        "um",
        "zu",
        "an",
        "für"
       ],
       "loesung": 1,
       "fest": true,
       "erklaerung": "„es lohnt sich, darauf zu achten\"."
      },
      {
       "frage": "Was passt in Lücke 12?",
       "luecke": 12,
       "opt": [
        "in Umständen",
        "unter Umstand",
        "unter Umständen",
        "nach Umständen"
       ],
       "loesung": 2,
       "fest": true,
       "erklaerung": "Feste Wendung: „unter Umständen\" = möglicherweise."
      },
      {
       "frage": "Was passt in Lücke 13?",
       "luecke": 13,
       "opt": [
        "gesetzt",
        "gegeben",
        "genommen",
        "gebracht"
       ],
       "loesung": 2,
       "fest": true,
       "erklaerung": "„jemanden in die Pflicht nehmen\" = verantwortlich machen."
      },
      {
       "frage": "Was passt in Lücke 14?",
       "luecke": 14,
       "opt": [
        "dass",
        "indem",
        "damit",
        "wann"
       ],
       "loesung": 3,
       "fest": true,
       "erklaerung": "Zweite indirekte Frage: nach welchen Kriterien und „wann\"."
      },
      {
       "frage": "Was passt in Lücke 15?",
       "luecke": 15,
       "opt": [
        "sind",
        "hat",
        "haben",
        "wurden"
       ],
       "loesung": 2,
       "fest": true,
       "erklaerung": "Perfekt, Plural (die Kunden): „gekauft haben\"."
      },
      {
       "frage": "Was passt in Lücke 16?",
       "luecke": 16,
       "opt": [
        "bei Weitem",
        "im Weiten",
        "bei Weiten",
        "von Weitem"
       ],
       "loesung": 0,
       "fest": true,
       "erklaerung": "Verstärkung: „bei Weitem nicht\" = längst nicht."
      },
      {
       "frage": "Was passt in Lücke 17?",
       "luecke": 17,
       "opt": [
        "was",
        "wie",
        "ob",
        "dass"
       ],
       "loesung": 1,
       "fest": true,
       "erklaerung": "Frage nach dem Grad: „wie ehrlich\"."
      },
      {
       "frage": "Was passt in Lücke 18?",
       "luecke": 18,
       "opt": [
        "nichts",
        "keiner",
        "niemand",
        "etwas"
       ],
       "loesung": 3,
       "fest": true,
       "erklaerung": "„etwas beitragen\"; „nichts\" widerspricht dem „indem\"-Satz."
      },
      {
       "frage": "Was passt in Lücke 19?",
       "luecke": 19,
       "opt": [
        "entstehend",
        "entstehen",
        "entstanden",
        "entsteht"
       ],
       "loesung": 3,
       "fest": true,
       "erklaerung": "Präsens, Singular (ein Bild): „entsteht\"."
      },
      {
       "frage": "Was passt in Lücke 20?",
       "luecke": 20,
       "opt": [
        "sondern",
        "weder",
        "noch",
        "oder"
       ],
       "loesung": 3,
       "fest": true,
       "erklaerung": "Alternative in der indirekten Frage: „ob … oder …\"."
      },
      {
       "frage": "Was passt in Lücke 21?",
       "luecke": 21,
       "opt": [
        "schon lange",
        "längst",
        "noch kurz",
        "noch lange"
       ],
       "loesung": 3,
       "fest": true,
       "erklaerung": "„noch lange kein\" = ganz und gar kein."
      },
      {
       "frage": "Was passt in Lücke 22?",
       "luecke": 22,
       "opt": [
        "darauf",
        "davon",
        "damit",
        "dafür"
       ],
       "loesung": 2,
       "fest": true,
       "erklaerung": "„mit etwas umgehen\" → „damit\"."
      }
     ]
    }
   ]
  }
 ]
};
