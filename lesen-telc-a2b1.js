/* ============================================================
   deutschoderwas club — LESEN + SPRACHBAUSTEINE telc Deutsch A2·B1

   Aufbau nach dem offiziellen telc-Format (Übungstest 1 Deutsch
   A2·B1, geprüft 02.11.2026). Ergebnis der Prüfung ist A2 oder B1.
   Alle Texte und Aufgaben eigene, nur das Format ist nachgebaut.
   Erzeugt aus scratchpad/telca2b1 mit bau.js.
   ============================================================ */

window.LESEN_TELC_A2B1 = {
 "niveau": "telcA2B1",
 "pruefung": "telc Deutsch A2·B1",
 "minuten": 60,
 "punkte": 30,
 "stufen": [
  {
   "nr": 1,
   "titel": "Das Richtige finden",
   "zeichen": "🧭",
   "was": "Die passende Anzeige, den passenden Betreff — und erkennen, wenn nichts passt."
  },
  {
   "nr": 2,
   "titel": "Genau lesen",
   "zeichen": "🔎",
   "was": "Wörter, die Sätze verbinden, und Umschreibungen im Text."
  },
  {
   "nr": 3,
   "titel": "Die Aufgabentypen",
   "zeichen": "🎯",
   "was": "Vier Leseteile, die Sprachbausteine und das Lesen der Mail — jeder Teil einzeln."
  },
  {
   "nr": 4,
   "titel": "Die ganze Prüfung",
   "zeichen": "⏱️",
   "was": "Alle Leseaufgaben am Stück mit Uhr: 30 Aufgaben, 60 Minuten."
  }
 ],
 "bloecke": [
  {
   "id": "ab1l1",
   "stufe": 1,
   "titel": "Die passende Anzeige — oder keine",
   "kurz": "Jedes Detail der Situation prüfen: Zeit, Ort, Preis, Bedingung",
   "ziel": "Nach diesem Block erkennst du schnell, ob eine Anzeige wirklich passt — und wann keine passt.",
   "zeichen": "📌",
   "farbe": "turq",
   "aufgaben": [
    {
     "art": "wahl",
     "frage": "Sie möchten am Samstagvormittag Deutsch lernen. Welche Anzeige passt?",
     "opt": [
      "„Deutsch am Abend: montags und mittwochs, 18 bis 20 Uhr“",
      "„Intensivkurs Deutsch B1: samstags von 9 bis 12 Uhr“",
      "Keine Anzeige passt."
     ],
     "loesung": 1,
     "erklaerung": "Samstag und Vormittag stimmen nur beim Intensivkurs."
    },
    {
     "art": "wahl",
     "frage": "Ihr Sohn ist acht Jahre alt und möchte schwimmen lernen.",
     "opt": [
      "„Schwimmkurs für Erwachsene: ohne Angst ins Wasser“",
      "„Babyschwimmen für Kinder von 6 bis 18 Monaten“",
      "Keine Anzeige passt."
     ],
     "loesung": 2,
     "erklaerung": "Ein Kurs ist für Erwachsene, einer für Babys. Für ein Kind mit acht Jahren passt keiner."
    },
    {
     "art": "wahl",
     "frage": "Sie suchen eine günstige gebrauchte Waschmaschine.",
     "opt": [
      "„Reparatur von Waschmaschinen, schnell und günstig“",
      "„Verkaufe Waschmaschine, drei Jahre alt, 80 Euro, nur Abholung“",
      "Keine Anzeige passt."
     ],
     "loesung": 1,
     "erklaerung": "Reparatur ist kein Kauf. Die gebrauchte Maschine für 80 Euro passt."
    },
    {
     "art": "wahl",
     "frage": "Ihre Mutter kann nicht mehr gut laufen und braucht Hilfe beim Einkaufen.",
     "opt": [
      "„Lieferservice: Wir bringen Ihre Einkäufe bis an die Wohnungstür“",
      "„Neueröffnung: 20 Prozent auf alles im Supermarkt“",
      "Keine Anzeige passt."
     ],
     "loesung": 0,
     "erklaerung": "Die Mutter muss nicht laufen, wenn die Einkäufe gebracht werden. Rabatt hilft ihr nicht."
    },
    {
     "art": "wahl",
     "frage": "Sie möchten am Sonntag mit Ihren Kindern frühstücken gehen.",
     "opt": [
      "„Café Lindenblatt: Frühstück Montag bis Samstag ab 8 Uhr“",
      "„Familienbrunch jeden Sonntag, mit Spielecke für Kinder“",
      "Keine Anzeige passt."
     ],
     "loesung": 1,
     "erklaerung": "Das Café hat sonntags kein Frühstück. Der Familienbrunch ist am Sonntag und für Kinder."
    },
    {
     "art": "wahl",
     "frage": "Sie suchen einen Nebenjob am Wochenende, haben aber keinen Führerschein.",
     "opt": [
      "„Fahrer für Samstag und Sonntag gesucht, Führerschein nötig“",
      "„Bäckerei sucht Aushilfe, Montag bis Freitag, 6 bis 10 Uhr“",
      "Keine Anzeige passt."
     ],
     "loesung": 2,
     "erklaerung": "Ohne Führerschein geht der Fahrerjob nicht, die Bäckerei sucht nur unter der Woche."
    },
    {
     "art": "wahl",
     "frage": "Sie möchten Ihr altes Sofa kostenlos abgeben.",
     "opt": [
      "„Verkaufe Sofa, fast neu, 150 Euro“",
      "„Suche Sofa, gern gebraucht, hole selbst ab“",
      "Keine Anzeige passt."
     ],
     "loesung": 1,
     "erklaerung": "Wer ein Sofa sucht, nimmt Ihr altes. Die andere Person verkauft selbst eins."
    },
    {
     "art": "wahl",
     "frage": "Ihr Fahrrad ist kaputt. Sie brauchen es heute Abend wieder.",
     "opt": [
      "„Fahrradwerkstatt Speiche: Reparatur am selben Tag, auch samstags“",
      "„Fahrradmarkt: neue und gebrauchte Räder zu fairen Preisen“",
      "Keine Anzeige passt."
     ],
     "loesung": 0,
     "erklaerung": "„Am selben Tag\" passt zu „heute Abend\". Der Fahrradmarkt verkauft nur."
    },
    {
     "art": "wahl",
     "frage": "Sie wollen abends mit anderen Leuten Deutsch sprechen — ohne Kurs und ohne Kosten.",
     "opt": [
      "„Privatlehrerin gibt Deutschunterricht, 25 Euro pro Stunde“",
      "„Sprachcafé jeden Donnerstag ab 19 Uhr, Eintritt frei“",
      "Keine Anzeige passt."
     ],
     "loesung": 1,
     "erklaerung": "Abends, gratis, kein Unterricht: Das Sprachcafé passt. Die Privatlehrerin kostet Geld."
    },
    {
     "art": "wahl",
     "frage": "Sie haben einen Hund und können nicht gut Treppen steigen. Sie suchen eine Wohnung.",
     "opt": [
      "„2-Zimmer-Wohnung im Erdgeschoss, Haustiere leider nicht erlaubt“",
      "„3-Zimmer-Wohnung im vierten Stock ohne Aufzug, Hund willkommen“",
      "Keine Anzeige passt."
     ],
     "loesung": 2,
     "erklaerung": "Eine Wohnung verbietet Tiere, die andere hat viele Treppen. Beide Bedingungen erfüllt keine."
    }
   ]
  },
  {
   "id": "ab1l2",
   "stufe": 1,
   "titel": "Betreffzeilen: worum geht die Mail?",
   "kurz": "Der Betreff fasst das Ziel der Mail zusammen, nicht ein einzelnes Wort",
   "ziel": "Nach diesem Block findest du den Betreff, der zum Hauptanliegen der Mail passt.",
   "zeichen": "✉️",
   "farbe": "gold",
   "aufgaben": [
    {
     "art": "wahl",
     "frage": "Mail: „Leider kann ich morgen nicht zum Kurs kommen. Mein Sohn ist krank, und ich muss bei ihm bleiben.“ Welcher Betreff passt?",
     "opt": [
      "Neuer Kurs ab Montag",
      "Abmeldung für morgen",
      "Mein Sohn hat Geburtstag"
     ],
     "loesung": 1,
     "erklaerung": "Die Person sagt für morgen ab. Der kranke Sohn ist nur der Grund."
    },
    {
     "art": "wahl",
     "frage": "Mail: „Die Heizung im Bad ist seit Sonntag kalt. Können Sie bitte einen Handwerker schicken?“",
     "opt": [
      "Bitte um Reparatur",
      "Frage zur Nebenkostenabrechnung",
      "Neue Badezimmermöbel"
     ],
     "loesung": 0,
     "erklaerung": "Ziel der Mail: Jemand soll die Heizung reparieren."
    },
    {
     "art": "wahl",
     "frage": "Mail: „Wir haben am Samstag noch einen Platz im Auto frei. Willst du mit zum Konzert fahren?“",
     "opt": [
      "Konzert leider abgesagt",
      "Auto zu verkaufen",
      "Mitfahren zum Konzert?"
     ],
     "loesung": 2,
     "erklaerung": "Es ist ein Angebot zum Mitfahren. Das Konzert findet statt."
    },
    {
     "art": "wahl",
     "frage": "Mail: „Ich habe gestern meine Brille im Kursraum vergessen. Haben Sie sie vielleicht gefunden?“",
     "opt": [
      "Brille liegen gelassen",
      "Neue Brille gekauft",
      "Kursraum gewechselt"
     ],
     "loesung": 0,
     "erklaerung": "„Vergessen\" und „liegen gelassen\" bedeuten hier dasselbe."
    },
    {
     "art": "wahl",
     "frage": "Mail: „Vielen Dank für das schöne Fest gestern! Das Essen war super und die Musik auch.“",
     "opt": [
      "Einladung zum Fest",
      "Danke für gestern",
      "Musik für die Feier gesucht"
     ],
     "loesung": 1,
     "erklaerung": "Das Fest war schon. Die Mail ist ein Dank, keine Einladung."
    },
    {
     "art": "wahl",
     "frage": "Mail: „Unser Treffen am Dienstag muss leider ausfallen. Wollen wir es auf Donnerstag verschieben?“",
     "opt": [
      "Treffen am Dienstag wie immer",
      "Neuer Termin?",
      "Unsere Treffen enden"
     ],
     "loesung": 1,
     "erklaerung": "Das Treffen wird nur verschoben, nicht beendet. Gesucht ist ein neuer Termin."
    },
    {
     "art": "wahl",
     "frage": "Mail: „Ab nächster Woche ist die Praxis wegen Urlaub geschlossen. Die Vertretung übernimmt Dr. Weber in der Bahnhofstraße.“",
     "opt": [
      "Praxis zieht um",
      "Urlaubsvertretung",
      "Neue Sprechzeiten ab Montag"
     ],
     "loesung": 1,
     "erklaerung": "Die Praxis bleibt, wo sie ist. Während des Urlaubs hilft ein anderer Arzt."
    },
    {
     "art": "wahl",
     "frage": "Mail: „Können wir morgen statt um zehn erst um elf Uhr anfangen? Mein Zug kommt später an.“",
     "opt": [
      "Später anfangen?",
      "Zugfahrt abgesagt",
      "Morgen fällt aus"
     ],
     "loesung": 0,
     "erklaerung": "Der Termin bleibt, er soll nur eine Stunde später beginnen."
    },
    {
     "art": "wahl",
     "frage": "Mail: „Hast du Lust, nächsten Sonntag mit uns im Wald wandern zu gehen? Wir nehmen auch die Kinder mit.“",
     "opt": [
      "Die Kinder sind krank",
      "Einladung zur Wanderung",
      "Der Wald ist gesperrt"
     ],
     "loesung": 1,
     "erklaerung": "„Hast du Lust …?\" ist eine Einladung."
    },
    {
     "art": "wahl",
     "frage": "Mail: „Im Anhang schicke ich Ihnen meinen Lebenslauf und meine Zeugnisse. Ich interessiere mich für die Stelle als Verkäuferin.“",
     "opt": [
      "Kündigung",
      "Frage zum Gehalt",
      "Bewerbung als Verkäuferin"
     ],
     "loesung": 2,
     "erklaerung": "Lebenslauf und Zeugnisse schickt man mit einer Bewerbung."
    }
   ]
  },
  {
   "id": "ab1l3",
   "stufe": 2,
   "titel": "Textstrukturen: Wörter, die Sätze verbinden",
   "kurz": "Verbposition, Kasus und Bedeutung zeigen das richtige Wort",
   "ziel": "Nach diesem Block weißt du, wann „denn\", „weil\", „deshalb\", „dass\" oder „wenn\" passt.",
   "zeichen": "🔗",
   "farbe": "rot",
   "aufgaben": [
    {
     "art": "wahl",
     "frage": "Ich komme heute später, ___ mein Bus hat Verspätung.",
     "opt": [
      "weil",
      "denn",
      "deshalb"
     ],
     "loesung": 1,
     "erklaerung": "Das Verb „hat\" steht an Position zwei. Das passt nur zu „denn\"."
    },
    {
     "art": "wahl",
     "frage": "Ich komme heute später, ___ mein Bus Verspätung hat.",
     "opt": [
      "weil",
      "denn",
      "aber"
     ],
     "loesung": 0,
     "erklaerung": "Das Verb steht am Ende. Für einen Grund mit dieser Wortstellung braucht man „weil\"."
    },
    {
     "art": "wahl",
     "frage": "Es regnet stark. ___ nehme ich den Regenschirm mit.",
     "opt": [
      "Weil",
      "Deshalb",
      "Denn"
     ],
     "loesung": 1,
     "erklaerung": "Folge: Es regnet, also der Schirm. Nach „Deshalb\" kommt direkt das Verb."
    },
    {
     "art": "wahl",
     "frage": "Ich hoffe, ___ du bald wieder gesund bist.",
     "opt": [
      "ob",
      "wenn",
      "dass"
     ],
     "loesung": 2,
     "erklaerung": "Nach „hoffen\" folgt der Inhalt mit „dass\"."
    },
    {
     "art": "wahl",
     "frage": "___ du Zeit hast, ruf mich bitte an.",
     "opt": [
      "Dass",
      "Wenn",
      "Denn"
     ],
     "loesung": 1,
     "erklaerung": "Bedingung: nur falls du Zeit hast. Das ist „wenn\"."
    },
    {
     "art": "wahl",
     "frage": "Ich möchte gern kommen, ___ ich habe am Samstag leider keine Zeit.",
     "opt": [
      "oder",
      "denn",
      "aber"
     ],
     "loesung": 2,
     "erklaerung": "Gegensatz zwischen Wunsch und Wirklichkeit: „aber\"."
    },
    {
     "art": "wahl",
     "frage": "Ich habe meinen Schlüssel verloren. Hast du ___ vielleicht gesehen?",
     "opt": [
      "ihn",
      "ihm",
      "er"
     ],
     "loesung": 0,
     "erklaerung": "„der Schlüssel\" ist maskulin, „sehen\" braucht den Akkusativ: ihn."
    },
    {
     "art": "wahl",
     "frage": "Wir treffen uns am Montag ___ zehn Uhr vor dem Kino.",
     "opt": [
      "am",
      "um",
      "im"
     ],
     "loesung": 1,
     "erklaerung": "Bei der Uhrzeit steht „um\". „am\" steht beim Wochentag."
    },
    {
     "art": "wahl",
     "frage": "Gestern ___ ich zwei Stunden beim Arzt gewartet.",
     "opt": [
      "bin",
      "war",
      "habe"
     ],
     "loesung": 2,
     "erklaerung": "„warten\" bildet das Perfekt mit „haben\": ich habe gewartet."
    },
    {
     "art": "wahl",
     "frage": "Kannst du mir bitte sagen, ___ der Kurs anfängt?",
     "opt": [
      "wann",
      "wenn",
      "als"
     ],
     "loesung": 0,
     "erklaerung": "Gefragt ist ein Zeitpunkt: Wann fängt der Kurs an? Im Nebensatz bleibt „wann\"."
    }
   ]
  },
  {
   "id": "ab1l4",
   "stufe": 2,
   "titel": "Was steht wirklich im Text?",
   "kurz": "Im Test steht es fast nie mit denselben Wörtern",
   "ziel": "Nach diesem Block erkennst du eine Aussage auch dann, wenn sie mit anderen Wörtern gesagt wird.",
   "zeichen": "🔎",
   "farbe": "lila",
   "aufgaben": [
    {
     "art": "wahl",
     "frage": "Im Text steht: „Die Praxis bleibt bis einschließlich Freitag geschlossen.“ Was stimmt?",
     "opt": [
      "Am Freitag ist die Praxis wieder offen.",
      "Auch am Freitag ist die Praxis zu.",
      "Die Praxis schließt erst am Freitag."
     ],
     "loesung": 1,
     "erklaerung": "„Einschließlich\" heißt: Der Freitag gehört dazu."
    },
    {
     "art": "wahl",
     "frage": "Im Text steht: „Anmeldung nicht erforderlich.“",
     "opt": [
      "Man muss sich nicht anmelden.",
      "Man kann sich nicht anmelden.",
      "Die Anmeldung ist schon vorbei."
     ],
     "loesung": 0,
     "erklaerung": "„Nicht erforderlich\" heißt: nicht nötig. Man darf, muss aber nicht."
    },
    {
     "art": "wahl",
     "frage": "Im Text steht: „Der Kurs findet nur bei mindestens acht Teilnehmern statt.“",
     "opt": [
      "Im Kurs sind höchstens acht Personen.",
      "Acht Personen haben sich schon angemeldet.",
      "Wenn weniger als acht Leute kommen, gibt es keinen Kurs."
     ],
     "loesung": 2,
     "erklaerung": "„Mindestens\" ist die untere Grenze, nicht die obere."
    },
    {
     "art": "wahl",
     "frage": "Im Text steht: „Haustiere nach Absprache möglich.“",
     "opt": [
      "Haustiere sind verboten.",
      "Man muss vorher fragen, ob man ein Tier haben darf.",
      "Jedes Haustier ist willkommen."
     ],
     "loesung": 1,
     "erklaerung": "„Nach Absprache\" heißt: erst sprechen, dann entscheiden."
    },
    {
     "art": "wahl",
     "frage": "Im Text steht: „Die Wohnung ist ab sofort frei.“",
     "opt": [
      "Die Wohnung ist bald frei.",
      "Die Wohnung kostet nichts.",
      "Man kann gleich einziehen."
     ],
     "loesung": 2,
     "erklaerung": "„Ab sofort\" heißt: jetzt. „Frei\" heißt hier leer, nicht kostenlos."
    },
    {
     "art": "wahl",
     "frage": "In einer Mail steht: „Am Samstag bin ich leider verhindert.“",
     "opt": [
      "Ich komme gern.",
      "Ich komme etwas später.",
      "Ich kann nicht kommen."
     ],
     "loesung": 2,
     "erklaerung": "„Verhindert sein\" heißt: keine Zeit haben, nicht kommen können."
    },
    {
     "art": "wahl",
     "frage": "Im Text steht: „Bitte geben Sie uns bis Mittwoch Bescheid.“",
     "opt": [
      "Sie sollen am Mittwoch vorbeikommen.",
      "Sie sollen spätestens am Mittwoch antworten.",
      "Sie sollen nach Mittwoch anrufen."
     ],
     "loesung": 1,
     "erklaerung": "„Bescheid geben\" heißt antworten oder informieren. „Bis Mittwoch\" ist der letzte Tag."
    },
    {
     "art": "wahl",
     "frage": "Im Text steht: „Für Kinder unter sechs Jahren ist der Eintritt frei.“",
     "opt": [
      "Kleine Kinder müssen nichts bezahlen.",
      "Kinder unter sechs dürfen nicht hinein.",
      "Alle Kinder zahlen weniger."
     ],
     "loesung": 0,
     "erklaerung": "„Eintritt frei\" heißt kostenlos, und das nur für Kinder unter sechs."
    },
    {
     "art": "wahl",
     "frage": "Im Text steht: „Das Angebot gilt nur, solange der Vorrat reicht.“",
     "opt": [
      "Man kann die Ware jederzeit kaufen.",
      "Wenn die Ware weg ist, ist das Angebot vorbei.",
      "Die Ware ist schon ausverkauft."
     ],
     "loesung": 1,
     "erklaerung": "Das Angebot hat eine Grenze: Es endet, wenn nichts mehr da ist."
    },
    {
     "art": "wahl",
     "frage": "In einer Mail steht: „Ich habe die Prüfung knapp bestanden.“",
     "opt": [
      "Ich habe die Prüfung nicht geschafft.",
      "Ich habe die Prüfung sehr gut geschafft.",
      "Ich habe die Prüfung gerade so geschafft."
     ],
     "loesung": 2,
     "erklaerung": "„Knapp bestanden\" heißt: bestanden, aber nur mit wenigen Punkten mehr als nötig."
    }
   ]
  }
 ],
 "teile": [
  {
   "nr": 1,
   "art": "anzeigenX",
   "name": "Lesen: Kleinanzeigen",
   "kurz": "Fünf Situationen, acht Anzeigen — einmal passt keine",
   "was": "Du liest fünf Situationen und acht Kleinanzeigen. Zu jeder Situation suchst du die passende Anzeige. Für eine Situation gibt es keine — dann wählst du x.",
   "tipp": "Lies zuerst die Situation genau: Wer sucht was, wann, für wie viel? Ein Detail entscheidet.",
   "zeichen": "📌",
   "farbe": "turq",
   "punkte": 5,
   "runden": [
    {
     "id": "a2b1a1s1",
     "anzeigen": [
      {
       "b": "a",
       "quelle": "Umzugshilfe Starke Hände",
       "zeilen": [
        "Zwei Helfer mit Transporter",
        "Auch samstags und sonntags",
        "45 Euro pro Stunde",
        "Anruf genügt: 0170 334 21 90"
       ]
      },
      {
       "b": "b",
       "quelle": "Privat",
       "zeilen": [
        "Zu verschenken: Kinderbett und Kleiderschrank",
        "Guter Zustand",
        "Nur Abholung, Samstag ab 10 Uhr"
       ]
      },
      {
       "b": "c",
       "quelle": "Nachmieter gesucht",
       "zeilen": [
        "2-Zimmer-Wohnung, 52 m², Balkon",
        "3. Stock ohne Aufzug",
        "620 Euro warm, frei ab 1. März"
       ]
      },
      {
       "b": "d",
       "quelle": "Wohngemeinschaft Uferweg",
       "zeilen": [
        "Zimmer frei in netter WG",
        "14 m², möbliert",
        "Nur für Nichtraucher",
        "380 Euro inklusive Nebenkosten"
       ]
      },
      {
       "b": "e",
       "quelle": "Malerbetrieb Farbenfroh",
       "zeilen": [
        "Wir streichen und tapezieren",
        "Schnell, sauber, zuverlässig",
        "Kostenvoranschlag gratis"
       ]
      },
      {
       "b": "f",
       "quelle": "Schlüsseldienst Rund um die Uhr",
       "zeilen": [
        "Tür zugefallen? Schlüssel vergessen?",
        "Wir sind in 30 Minuten bei Ihnen",
        "Auch nachts und am Wochenende"
       ]
      },
      {
       "b": "g",
       "quelle": "Wohnungsgenossenschaft Talblick",
       "zeilen": [
        "3 Zimmer im Erdgeschoss",
        "Barrierefrei, kleiner Garten",
        "Haustiere erlaubt",
        "890 Euro kalt"
       ]
      },
      {
       "b": "h",
       "quelle": "Lagerraum Sicher & Trocken",
       "zeilen": [
        "Lagerräume ab 6 m²",
        "Monatlich kündbar",
        "Ab 49 Euro im Monat"
       ]
      }
     ],
     "aufgaben": [
      {
       "situation": "Sie ziehen am Samstag um und brauchen Hilfe beim Transport Ihrer Möbel.",
       "loesung": "a",
       "erklaerung": "Die Umzugshilfe hat einen Transporter und arbeitet auch am Wochenende."
      },
      {
       "situation": "Sie stehen vor Ihrer Wohnungstür. Ihr Schlüssel liegt drinnen auf dem Tisch.",
       "loesung": "f",
       "erklaerung": "Der Schlüsseldienst hilft, wenn die Tür zugefallen ist."
      },
      {
       "situation": "Ihre Mutter kann nicht mehr gut Treppen steigen und sucht eine neue Wohnung.",
       "loesung": "g",
       "erklaerung": "Die Wohnung g ist im Erdgeschoss und barrierefrei. Wohnung c ist im 3. Stock ohne Aufzug."
      },
      {
       "situation": "Sie möchten ein gebrauchtes Sofa kaufen.",
       "loesung": "x",
       "erklaerung": "In Anzeige b gibt es nur ein Kinderbett und einen Schrank, kein Sofa."
      },
      {
       "situation": "Sie arbeiten ein halbes Jahr im Ausland und möchten Ihre Möbel so lange irgendwo unterstellen.",
       "loesung": "h",
       "erklaerung": "Einen Lagerraum kann man mieten und jeden Monat kündigen."
      }
     ]
    },
    {
     "id": "a2b1a1s2",
     "anzeigen": [
      {
       "b": "a",
       "quelle": "Bäckerei Sonnenkorn",
       "zeilen": [
        "Verkäufer in Teilzeit gesucht",
        "Arbeitsbeginn morgens um 6 Uhr",
        "Auch ohne Erfahrung"
       ]
      },
      {
       "b": "b",
       "quelle": "Pizzeria Da Lino",
       "zeilen": [
        "Fahrer gesucht",
        "Abends und am Wochenende, Minijob",
        "Führerschein Klasse B nötig"
       ]
      },
      {
       "b": "c",
       "quelle": "Reinigungsfirma Blitzblank",
       "zeilen": [
        "Büroreinigung in der Innenstadt",
        "Drei Abende pro Woche, 18 bis 21 Uhr",
        "Gut mit Bus und Bahn erreichbar"
       ]
      },
      {
       "b": "d",
       "quelle": "Pflegedienst Lindenhof",
       "zeilen": [
        "Pflegehelfer gesucht, Vollzeit",
        "Keine Ausbildung nötig",
        "Den Pflegebasiskurs bezahlen wir"
       ]
      },
      {
       "b": "e",
       "quelle": "Volkshochschule Mitte",
       "zeilen": [
        "Deutsch für den Beruf",
        "Telefonieren, E-Mails, Gespräche mit Kollegen",
        "Dienstags und donnerstags, 18 Uhr"
       ]
      },
      {
       "b": "f",
       "quelle": "Lernstudio Pluspunkt",
       "zeilen": [
        "Wir suchen Nachhilfelehrer",
        "Mathe und Englisch",
        "Nachmittags, 15 Euro pro Stunde"
       ]
      },
      {
       "b": "g",
       "quelle": "Gärtnerei Grünfink",
       "zeilen": [
        "Saisonhilfe von März bis Oktober",
        "Arbeit im Freien",
        "Auch für Quereinsteiger"
       ]
      },
      {
       "b": "h",
       "quelle": "Fotostudio Klick",
       "zeilen": [
        "Bewerbungsfotos ohne Termin",
        "4 Fotos digital und gedruckt",
        "Nur 19 Euro"
       ]
      }
     ],
     "aufgaben": [
      {
       "situation": "Sie haben keinen Führerschein und möchten neben Ihrem Hauptjob abends etwas dazuverdienen.",
       "loesung": "c",
       "erklaerung": "Die Büroreinigung ist abends und gut mit Bus und Bahn erreichbar. Für b braucht man einen Führerschein."
      },
      {
       "situation": "Sie möchten gern draußen arbeiten, aber nur im Frühling und Sommer.",
       "loesung": "g",
       "erklaerung": "Die Gärtnerei sucht eine Saisonhilfe für die Arbeit im Freien."
      },
      {
       "situation": "Sie schreiben gerade Bewerbungen und brauchen schnell ein gutes Foto.",
       "loesung": "h",
       "erklaerung": "Das Fotostudio macht Bewerbungsfotos ohne Termin."
      },
      {
       "situation": "Sie möchten mit alten Menschen arbeiten, haben aber keine Ausbildung.",
       "loesung": "d",
       "erklaerung": "Der Pflegedienst sucht Helfer ohne Ausbildung und bezahlt den Kurs."
      },
      {
       "situation": "Sie sind Koch und suchen eine Stelle in einem Restaurant.",
       "loesung": "x",
       "erklaerung": "Die Pizzeria sucht nur Fahrer, keinen Koch."
      }
     ]
    },
    {
     "id": "a2b1a1s3",
     "anzeigen": [
      {
       "b": "a",
       "quelle": "Zahnarztpraxis Dr. Wendt",
       "zeilen": [
        "Notdienst am Wochenende",
        "Samstag und Sonntag 10 bis 12 Uhr",
        "Ohne Termin"
       ]
      },
      {
       "b": "b",
       "quelle": "Kinderarztpraxis Am Park",
       "zeilen": [
        "Wir nehmen wieder neue Patienten auf",
        "Kinder von 0 bis 14 Jahren",
        "Termine bitte online"
       ]
      },
      {
       "b": "c",
       "quelle": "Physiotherapie Bewegt",
       "zeilen": [
        "Krankengymnastik und Massagen",
        "Hausbesuche möglich",
        "Alle Krankenkassen"
       ]
      },
      {
       "b": "d",
       "quelle": "Apotheke am Rathaus",
       "zeilen": [
        "Unser Lieferservice bringt Ihre Medikamente",
        "Bestellen Sie bis 14 Uhr per Telefon",
        "Lieferung noch am selben Tag"
       ]
      },
      {
       "b": "e",
       "quelle": "Gesundheitszentrum Vital",
       "zeilen": [
        "Yoga für einen gesunden Rücken",
        "Dienstags 18.30 Uhr, 8 Termine",
        "Ihre Krankenkasse zahlt bis zu 80 Prozent"
       ]
      },
      {
       "b": "f",
       "quelle": "Augenoptik Klarsicht",
       "zeilen": [
        "Sehtest kostenlos",
        "Brillen schon ab 49 Euro",
        "Montag bis Samstag"
       ]
      },
      {
       "b": "g",
       "quelle": "Hautarztpraxis Dr. Özdemir",
       "zeilen": [
        "Die Praxis ist vom 1. bis 21. August geschlossen",
        "Vertretung: Dr. Brandt, Marktplatz 3"
       ]
      },
      {
       "b": "h",
       "quelle": "Endlich rauchfrei",
       "zeilen": [
        "Nichtraucherkurs an 6 Abenden",
        "In kleinen Gruppen",
        "Die Krankenkasse beteiligt sich an den Kosten"
       ]
      }
     ],
     "aufgaben": [
      {
       "situation": "Ihr Vater wurde am Knie operiert. Er braucht Übungen, kann aber die Wohnung noch nicht verlassen.",
       "loesung": "c",
       "erklaerung": "Die Physiotherapie macht auch Hausbesuche."
      },
      {
       "situation": "Sie liegen krank im Bett und brauchen Ihre Medikamente. Niemand kann für Sie in die Apotheke gehen.",
       "loesung": "d",
       "erklaerung": "Die Apotheke bringt die Medikamente nach Hause."
      },
      {
       "situation": "Am Sonntagmorgen haben Sie plötzlich starke Zahnschmerzen.",
       "loesung": "a",
       "erklaerung": "Der Zahnarzt hat am Wochenende Notdienst, auch ohne Termin."
      },
      {
       "situation": "Sie sind mit Ihrer Familie neu in der Stadt und suchen einen Arzt für Ihre vierjährige Tochter.",
       "loesung": "b",
       "erklaerung": "Die Kinderarztpraxis nimmt wieder neue Patienten auf."
      },
      {
       "situation": "Sie haben oft Rückenschmerzen und möchten am Vormittag einen Kurs dagegen machen.",
       "loesung": "x",
       "erklaerung": "Der Yogakurs e ist für den Rücken, aber am Abend, nicht am Vormittag."
      }
     ]
    }
   ]
  },
  {
   "nr": 2,
   "art": "textwahl",
   "name": "Lesen: Mitteilung",
   "kurz": "Ein kurzer Text, eine Aussage richtig/falsch und drei Fragen",
   "was": "Du liest einen kurzen Text, zum Beispiel einen Aushang oder eine Mitteilung an die Mitarbeiter. Dazu eine Aussage richtig oder falsch und drei Fragen a/b/c.",
   "tipp": "Die Fragen folgen dem Text. Achte auf Wörter wie „nur\", „ab\", „nicht mehr\".",
   "zeichen": "📋",
   "farbe": "gold",
   "punkte": 4,
   "runden": [
    {
     "id": "a2b1a2s1",
     "text": {
      "sorte": "brief",
      "quelle": "Mitteilung an alle Mitarbeiter",
      "titel": "Umbau der Kantine",
      "zeilen": [
       "Liebes Team, ab Montag, dem 3. Juni, wird unsere Kantine im Erdgeschoss renoviert. Die Arbeiten dauern voraussichtlich sechs Wochen. In dieser Zeit können wir leider kein warmes Mittagessen anbieten.",
       "Als Ersatz stehen im Besprechungsraum im zweiten Stock ein Kühlschrank und eine Mikrowelle für alle bereit. Außerdem bringt ein Lieferservice jeden Tag um 11.30 Uhr belegte Brötchen und Salate. Wer etwas bestellen möchte, trägt sich bis 9 Uhr in die Liste am Empfang ein.",
       "Die Firma zahlt in dieser Zeit pro Arbeitstag einen Zuschuss von drei Euro. Das Geld bekommen Sie nicht bar, sondern mit dem Gehalt im Juli.",
       "Bitte nehmen Sie bis Freitag alle privaten Tassen und Dosen aus den Schränken der Kantine mit. Was danach noch dort steht, wird entsorgt. Bei Fragen wenden Sie sich bitte an Frau Albers, Telefon 214. Ihre Geschäftsleitung"
      ]
     },
     "aufgaben": [
      {
       "frage": "Während des Umbaus gibt es mittags kein warmes Essen.",
       "opt": [
        "Richtig",
        "Falsch"
       ],
       "loesung": 0,
       "fest": true,
       "stelle": "können wir leider kein warmes Mittagessen anbieten",
       "erklaerung": "Sechs Wochen lang gibt es kein warmes Mittagessen, nur Brötchen und Salate."
      },
      {
       "frage": "Wie bekommen die Mitarbeiter in dieser Zeit ihr Essen?",
       "opt": [
        "Sie essen in einem Restaurant im zweiten Stock.",
        "Sie können morgens Brötchen und Salate bestellen.",
        "Sie müssen ihr Essen immer selbst mitbringen."
       ],
       "loesung": 1,
       "stelle": "trägt sich bis 9 Uhr in die Liste am Empfang ein",
       "erklaerung": "Bis 9 Uhr trägt man sich ein, um 11.30 Uhr kommt der Lieferservice. Im zweiten Stock gibt es nur Kühlschrank und Mikrowelle."
      },
      {
       "frage": "Was gilt für den Zuschuss?",
       "opt": [
        "Man bekommt ihn jeden Tag bar am Empfang.",
        "Er wird später mit dem Lohn ausgezahlt.",
        "Er gilt nur für Bestellungen beim Lieferservice."
       ],
       "loesung": 1,
       "stelle": "sondern mit dem Gehalt im Juli",
       "erklaerung": "Das Geld kommt nicht bar, sondern mit dem Gehalt im Juli."
      },
      {
       "frage": "Was sollen die Mitarbeiter bis Freitag tun?",
       "opt": [
        "Ihr eigenes Geschirr aus der Kantine holen.",
        "Frau Albers anrufen.",
        "Sich für das Mittagessen anmelden."
       ],
       "loesung": 0,
       "stelle": "alle privaten Tassen und Dosen aus den Schränken der Kantine mit",
       "erklaerung": "Private Tassen und Dosen müssen bis Freitag weg, sonst werden sie entsorgt."
      }
     ]
    },
    {
     "id": "a2b1a2s2",
     "text": {
      "sorte": "brief",
      "quelle": "Aushang im Treppenhaus",
      "titel": "Wartung der Heizung",
      "zeilen": [
       "Sehr geehrte Mieter, am Dienstag, dem 14. Oktober, wird die Heizungsanlage in unserem Haus Lindenstraße 8 gewartet. Dafür muss zwischen 8 und 13 Uhr im ganzen Haus das Wasser abgestellt werden.",
       "Bitte füllen Sie am Abend vorher ein paar Flaschen Wasser zum Trinken und Kochen ab. Benutzen Sie während der Arbeiten bitte weder die Waschmaschine noch die Spülmaschine.",
       "Der Techniker muss außerdem in jeder Wohnung die Heizkörper entlüften. Er klingelt im Laufe des Vormittags bei Ihnen. Wenn Sie an diesem Tag nicht zu Hause sind, können Sie Ihren Schlüssel bis Montag beim Hausmeister, Herrn Yilmaz, im Erdgeschoss abgeben.",
       "Nach der Wartung kann das Wasser am Anfang etwas braun aussehen. Das ist nicht gefährlich. Lassen Sie es dann einfach eine Minute laufen. Vielen Dank für Ihr Verständnis! Ihre Hausverwaltung Berger"
      ]
     },
     "aufgaben": [
      {
       "frage": "Am Dienstag gibt es den ganzen Tag kein Wasser im Haus.",
       "opt": [
        "Richtig",
        "Falsch"
       ],
       "loesung": 1,
       "fest": true,
       "stelle": "zwischen 8 und 13 Uhr im ganzen Haus das Wasser abgestellt",
       "erklaerung": "Das Wasser ist nur von 8 bis 13 Uhr abgestellt, nicht den ganzen Tag."
      },
      {
       "frage": "Was sollen die Mieter vor der Wartung tun?",
       "opt": [
        "Wasser in Flaschen bereitstellen.",
        "Die Waschmaschine abbauen.",
        "Die Heizkörper selbst entlüften."
       ],
       "loesung": 0,
       "stelle": "ein paar Flaschen Wasser zum Trinken und Kochen ab",
       "erklaerung": "Am Abend vorher soll man Wasser in Flaschen füllen. Die Heizkörper entlüftet der Techniker."
      },
      {
       "frage": "Was können Mieter machen, die am Dienstag nicht zu Hause sind?",
       "opt": [
        "Einen anderen Termin mit dem Techniker vereinbaren.",
        "Den Schlüssel vorher beim Hausmeister abgeben.",
        "Den Schlüssel beim Nachbarn lassen."
       ],
       "loesung": 1,
       "stelle": "Ihren Schlüssel bis Montag beim Hausmeister",
       "erklaerung": "Der Schlüssel soll bis Montag zum Hausmeister Herrn Yilmaz."
      },
      {
       "frage": "Was sollen die Mieter tun, wenn das Wasser nach der Wartung braun ist?",
       "opt": [
        "Die Hausverwaltung anrufen.",
        "Das Wasser kurz laufen lassen.",
        "Bis zum nächsten Tag kein Wasser benutzen."
       ],
       "loesung": 1,
       "stelle": "Lassen Sie es dann einfach eine Minute laufen",
       "erklaerung": "Braunes Wasser ist nicht gefährlich, man lässt es eine Minute laufen."
      }
     ]
    },
    {
     "id": "a2b1a2s3",
     "text": {
      "sorte": "brief",
      "quelle": "Elternbrief der Kita Pusteblume",
      "titel": "Unser Sommerfest",
      "zeilen": [
       "Liebe Eltern, am Freitag, dem 27. Juni, feiern wir von 15 bis 18 Uhr unser Sommerfest im Garten der Kita. Dazu sind alle Familien herzlich eingeladen, auch Geschwister und Großeltern.",
       "Die Kinder führen um 15.30 Uhr einen kleinen Tanz vor, den sie seit Wochen üben. Danach gibt es Spiele, Kinderschminken und eine Hüpfburg.",
       "Für das Buffet brauchen wir Ihre Hilfe: Bitte bringen Sie einen Kuchen, einen Salat oder etwas Obst mit. In der Garderobe hängt eine Liste, in die Sie eintragen, was Sie mitbringen. So gibt es am Ende nicht zehn Nudelsalate. Die Getränke kauft der Elternbeirat.",
       "An diesem Tag schließt die Kita schon um 14 Uhr, damit wir alles vorbereiten können. Bei Regen feiern wir in der Turnhalle. Wir freuen uns auf Sie! Ihr Kita-Team"
      ]
     },
     "aufgaben": [
      {
       "frage": "Auch Oma und Opa dürfen zum Fest kommen.",
       "opt": [
        "Richtig",
        "Falsch"
       ],
       "loesung": 0,
       "fest": true,
       "stelle": "auch Geschwister und Großeltern",
       "erklaerung": "Alle Familien sind eingeladen, auch die Großeltern."
      },
      {
       "frage": "Was passiert um halb vier?",
       "opt": [
        "Das Fest beginnt.",
        "Die Kinder zeigen einen Tanz.",
        "Die Kinder werden geschminkt."
       ],
       "loesung": 1,
       "stelle": "Die Kinder führen um 15.30 Uhr einen kleinen Tanz vor",
       "erklaerung": "Das Fest beginnt um 15 Uhr, der Tanz ist um 15.30 Uhr. Geschminkt wird erst danach."
      },
      {
       "frage": "Was sollen die Eltern für das Buffet tun?",
       "opt": [
        "Getränke kaufen und mitbringen.",
        "Auf einer Liste notieren, was sie mitbringen.",
        "Einen Nudelsalat machen."
       ],
       "loesung": 1,
       "stelle": "eine Liste, in die Sie eintragen, was Sie mitbringen",
       "erklaerung": "Die Eltern tragen sich in die Liste ein. Getränke kauft der Elternbeirat."
      },
      {
       "frage": "Was gilt am Tag des Festes?",
       "opt": [
        "Die Kita ist den ganzen Tag geschlossen.",
        "Die Kinder müssen früher abgeholt werden.",
        "Das Fest findet auf jeden Fall in der Turnhalle statt."
       ],
       "loesung": 1,
       "stelle": "schließt die Kita schon um 14 Uhr",
       "erklaerung": "Die Kita schließt früher, um 14 Uhr. In die Turnhalle geht man nur bei Regen."
      }
     ]
    }
   ]
  },
  {
   "nr": 3,
   "art": "textwahl",
   "name": "Lesen: E-Mails und Betreff",
   "kurz": "Vier E-Mails, acht Betreffzeilen",
   "was": "Du liest vier kurze E-Mails. Zu jeder suchst du die passende Betreffzeile — vier bleiben übrig.",
   "tipp": "Der Betreff fasst zusammen, WARUM jemand schreibt. Ein Wort aus der Mail im Betreff heißt noch nicht, dass er passt.",
   "zeichen": "✉️",
   "farbe": "rot",
   "punkte": 4,
   "runden": [
    {
     "id": "a2b1a3s1",
     "aufgaben": [
      {
       "frage": "Welcher Betreff passt zu E-Mail 1?",
       "opt": [
        "Lärm in der Nacht",
        "Ihr Paket ist bei uns",
        "Einladung zum Hoffest",
        "Wasser im Badezimmer",
        "Fahrräder im Hausflur",
        "Suche Nachmieter für meine Wohnung",
        "Schlüssel verloren",
        "Danke für die Blumen"
       ],
       "loesung": 1,
       "fest": true,
       "text": {
        "sorte": "email",
        "quelle": "E-Mail von Anna Kowalski",
        "titel": "E-Mail 1",
        "zeilen": [
         "Hallo Herr Brandt, gestern war der Paketbote da, als Sie nicht zu Hause waren.",
         "Wir haben deshalb einen großen Karton für Sie angenommen.",
         "Er ist ziemlich schwer, vielleicht bringen Sie lieber jemanden zum Tragen mit.",
         "Sie können ihn heute ab 18 Uhr bei uns im zweiten Stock abholen, klingeln Sie einfach. Viele Grüße, Anna Kowalski"
        ]
       },
       "stelle": "Wir haben deshalb einen großen Karton für Sie angenommen",
       "erklaerung": "Die Nachbarin hat ein Paket für Herrn Brandt angenommen."
      },
      {
       "frage": "Welcher Betreff passt zu E-Mail 2?",
       "opt": [
        "Lärm in der Nacht",
        "Ihr Paket ist bei uns",
        "Einladung zum Hoffest",
        "Wasser im Badezimmer",
        "Fahrräder im Hausflur",
        "Suche Nachmieter für meine Wohnung",
        "Schlüssel verloren",
        "Danke für die Blumen"
       ],
       "loesung": 4,
       "fest": true,
       "text": {
        "sorte": "email",
        "quelle": "E-Mail von Hausverwaltung Kramer",
        "titel": "E-Mail 2",
        "zeilen": [
         "Sehr geehrte Mieter, leider stehen im Eingangsbereich wieder sehr viele Räder.",
         "Bei der letzten Kontrolle hat die Feuerwehr gesagt, dass der Flur immer frei bleiben muss.",
         "Bitte stellen Sie Ihre Räder ab sofort in den Keller oder in den Hof.",
         "Was nach dem 15. Mai noch im Flur steht, lassen wir abholen. Mit freundlichen Grüßen, Ihre Hausverwaltung"
        ]
       },
       "stelle": "Bitte stellen Sie Ihre Räder ab sofort in den Keller",
       "erklaerung": "Es geht um Fahrräder, die im Flur stehen und dort nicht bleiben dürfen."
      },
      {
       "frage": "Welcher Betreff passt zu E-Mail 3?",
       "opt": [
        "Lärm in der Nacht",
        "Ihr Paket ist bei uns",
        "Einladung zum Hoffest",
        "Wasser im Badezimmer",
        "Fahrräder im Hausflur",
        "Suche Nachmieter für meine Wohnung",
        "Schlüssel verloren",
        "Danke für die Blumen"
       ],
       "loesung": 2,
       "fest": true,
       "text": {
        "sorte": "email",
        "quelle": "E-Mail von Mehmet Aydın",
        "titel": "E-Mail 3",
        "zeilen": [
         "Liebe Nachbarn, das Wetter wird endlich schön, deshalb wollen wir am Samstag ab 16 Uhr zusammen im Hof feiern.",
         "Grill und Getränke sind da, jeder bringt bitte nur etwas zu essen mit.",
         "Kinder sind natürlich auch herzlich willkommen.",
         "Wenn es regnet, machen wir es einfach am Sonntag. Bis bald, Mehmet aus dem Erdgeschoss"
        ]
       },
       "stelle": "am Samstag ab 16 Uhr zusammen im Hof feiern",
       "erklaerung": "Mehmet lädt alle Nachbarn zu einem Fest im Hof ein."
      },
      {
       "frage": "Welcher Betreff passt zu E-Mail 4?",
       "opt": [
        "Lärm in der Nacht",
        "Ihr Paket ist bei uns",
        "Einladung zum Hoffest",
        "Wasser im Badezimmer",
        "Fahrräder im Hausflur",
        "Suche Nachmieter für meine Wohnung",
        "Schlüssel verloren",
        "Danke für die Blumen"
       ],
       "loesung": 3,
       "fest": true,
       "text": {
        "sorte": "email",
        "quelle": "E-Mail von Sofia Ricci",
        "titel": "E-Mail 4",
        "zeilen": [
         "Hallo Frau Lenz, seit heute Morgen tropft bei uns Wasser von der Decke im Bad.",
         "Ich glaube, es kommt aus Ihrer Wohnung, vielleicht ist bei Ihnen ein Rohr kaputt.",
         "Könnten Sie bitte so schnell wie möglich nachsehen?",
         "Den Hausmeister habe ich auch schon informiert, er kommt heute Nachmittag. Viele Grüße, Sofia Ricci"
        ]
       },
       "stelle": "tropft bei uns Wasser von der Decke im Bad",
       "erklaerung": "Im Bad tropft Wasser von der Decke, also gibt es einen Wasserschaden."
      }
     ]
    },
    {
     "id": "a2b1a3s2",
     "aufgaben": [
      {
       "frage": "Welcher Betreff passt zu E-Mail 1?",
       "opt": [
        "Krankmeldung",
        "Tausch der Schicht am Freitag",
        "Neue Kollegin im Team",
        "Betriebsausflug im September",
        "Ihr Urlaub ist genehmigt",
        "Ihre Bewerbung als Lagerhelfer",
        "Neue Arbeitszeiten im Lager",
        "Abschied von Herrn Wolf"
       ],
       "loesung": 1,
       "fest": true,
       "text": {
        "sorte": "email",
        "quelle": "E-Mail von Tomasz Nowicki",
        "titel": "E-Mail 1",
        "zeilen": [
         "Hallo Elif, ich habe am Freitag um 9 Uhr einen wichtigen Termin bei der Ausländerbehörde.",
         "Könntest du an diesem Tag meine Frühschicht übernehmen?",
         "Dafür arbeite ich nächsten Dienstag sehr gern deine Spätschicht.",
         "Sag mir bitte bis morgen Bescheid, dann spreche ich gleich mit dem Chef. Danke und viele Grüße, Tomasz"
        ]
       },
       "stelle": "Könntest du an diesem Tag meine Frühschicht übernehmen?",
       "erklaerung": "Tomasz möchte seine Schicht am Freitag mit Elif tauschen."
      },
      {
       "frage": "Welcher Betreff passt zu E-Mail 2?",
       "opt": [
        "Krankmeldung",
        "Tausch der Schicht am Freitag",
        "Neue Kollegin im Team",
        "Betriebsausflug im September",
        "Ihr Urlaub ist genehmigt",
        "Ihre Bewerbung als Lagerhelfer",
        "Neue Arbeitszeiten im Lager",
        "Abschied von Herrn Wolf"
       ],
       "loesung": 5,
       "fest": true,
       "text": {
        "sorte": "email",
        "quelle": "E-Mail von Personalabteilung Möbelhaus Kern",
        "titel": "E-Mail 2",
        "zeilen": [
         "Sehr geehrter Herr Nguyen, vielen Dank für Ihre Unterlagen und Ihr Interesse an der Stelle in unserem Lager.",
         "Wir möchten Sie gern kennenlernen und laden Sie am Mittwoch, dem 12. März, um 10 Uhr zu einem Gespräch ein.",
         "Bitte bringen Sie Ihren Ausweis und Ihre Zeugnisse mit und sagen Sie uns kurz, ob der Termin passt."
        ]
       },
       "stelle": "laden Sie am Mittwoch, dem 12. März, um 10 Uhr zu einem Gespräch ein",
       "erklaerung": "Herr Nguyen hat sich beworben und wird zum Vorstellungsgespräch eingeladen."
      },
      {
       "frage": "Welcher Betreff passt zu E-Mail 3?",
       "opt": [
        "Krankmeldung",
        "Tausch der Schicht am Freitag",
        "Neue Kollegin im Team",
        "Betriebsausflug im September",
        "Ihr Urlaub ist genehmigt",
        "Ihre Bewerbung als Lagerhelfer",
        "Neue Arbeitszeiten im Lager",
        "Abschied von Herrn Wolf"
       ],
       "loesung": 3,
       "fest": true,
       "text": {
        "sorte": "email",
        "quelle": "E-Mail von Lena Hartmann, Betriebsrat",
        "titel": "E-Mail 3",
        "zeilen": [
         "Liebes Team, dieses Jahr fahren wir am Freitag, dem 19. September, gemeinsam an den Bodensee.",
         "Der Bus fährt um 8 Uhr vom Firmenparkplatz ab, zurück sind wir gegen 20 Uhr.",
         "Fahrt, Schifffahrt und Mittagessen bezahlt die Firma.",
         "Bitte tragt euch bis Ende Juli in die Liste in der Küche ein. Viele Grüße, Lena"
        ]
       },
       "stelle": "fahren wir am Freitag, dem 19. September, gemeinsam an den Bodensee",
       "erklaerung": "Das ganze Team macht im September einen Ausflug mit der Firma."
      },
      {
       "frage": "Welcher Betreff passt zu E-Mail 4?",
       "opt": [
        "Krankmeldung",
        "Tausch der Schicht am Freitag",
        "Neue Kollegin im Team",
        "Betriebsausflug im September",
        "Ihr Urlaub ist genehmigt",
        "Ihre Bewerbung als Lagerhelfer",
        "Neue Arbeitszeiten im Lager",
        "Abschied von Herrn Wolf"
       ],
       "loesung": 7,
       "fest": true,
       "text": {
        "sorte": "email",
        "quelle": "E-Mail von Frank Schäfer, Abteilungsleiter",
        "titel": "E-Mail 4",
        "zeilen": [
         "Liebe Kollegen, nach 32 Jahren in unserer Firma geht Peter Wolf Ende des Monats in Rente.",
         "An seinem letzten Arbeitstag, am Donnerstag, gibt es um 14 Uhr Kaffee und Kuchen im Pausenraum.",
         "Wer möchte, kann sich an einem Geschenk für ihn beteiligen.",
         "Ich sammle das Geld bis Dienstag in meinem Büro. Viele Grüße, Frank Schäfer"
        ]
       },
       "stelle": "geht Peter Wolf Ende des Monats in Rente",
       "erklaerung": "Herr Wolf geht in Rente, deshalb gibt es eine kleine Abschiedsfeier."
      }
     ]
    },
    {
     "id": "a2b1a3s3",
     "aufgaben": [
      {
       "frage": "Welcher Betreff passt zu E-Mail 1?",
       "opt": [
        "Termin verschieben",
        "Ihre Blutwerte sind da",
        "Erinnerung: Impfung Ihres Kindes",
        "Elternabend in der Klasse 3b",
        "Fieber – Tim bleibt heute zu Hause",
        "Ausflug in den Tierpark",
        "Fundsachen in der Turnhalle",
        "Ihre neue Versichertenkarte"
       ],
       "loesung": 2,
       "fest": true,
       "text": {
        "sorte": "email",
        "quelle": "E-Mail von Kinderarztpraxis Dr. Ahmadi",
        "titel": "E-Mail 1",
        "zeilen": [
         "Sehr geehrte Frau Lindner, Ihr Sohn Jonas ist jetzt sechs Jahre alt.",
         "Laut Impfpass braucht er in diesem Jahr eine neue Impfung gegen Tetanus und Keuchhusten.",
         "Bitte vereinbaren Sie bald einen Termin in unserer Praxis, telefonisch oder online.",
         "Vergessen Sie bitte nicht, den Impfpass mitzubringen. Mit freundlichen Grüßen, Ihr Praxisteam"
        ]
       },
       "stelle": "braucht er in diesem Jahr eine neue Impfung",
       "erklaerung": "Die Praxis erinnert daran, dass Jonas geimpft werden muss."
      },
      {
       "frage": "Welcher Betreff passt zu E-Mail 2?",
       "opt": [
        "Termin verschieben",
        "Ihre Blutwerte sind da",
        "Erinnerung: Impfung Ihres Kindes",
        "Elternabend in der Klasse 3b",
        "Fieber – Tim bleibt heute zu Hause",
        "Ausflug in den Tierpark",
        "Fundsachen in der Turnhalle",
        "Ihre neue Versichertenkarte"
       ],
       "loesung": 4,
       "fest": true,
       "text": {
        "sorte": "email",
        "quelle": "E-Mail von Sandra Becker",
        "titel": "E-Mail 2",
        "zeilen": [
         "Liebe Frau Kaya, mein Sohn Tim hat seit heute Nacht hohes Fieber und Halsschmerzen.",
         "Er kann deshalb heute leider nicht in die Schule kommen.",
         "Wir gehen am Vormittag zum Kinderarzt, die Bescheinigung bringe ich Ihnen später vorbei.",
         "Könnte Tims Banknachbar ihm vielleicht heute die Hausaufgaben mitbringen? Viele Grüße, Sandra Becker"
        ]
       },
       "stelle": "Er kann deshalb heute leider nicht in die Schule kommen",
       "erklaerung": "Die Mutter schreibt der Lehrerin, dass Tim krank ist und zu Hause bleibt."
      },
      {
       "frage": "Welcher Betreff passt zu E-Mail 3?",
       "opt": [
        "Termin verschieben",
        "Ihre Blutwerte sind da",
        "Erinnerung: Impfung Ihres Kindes",
        "Elternabend in der Klasse 3b",
        "Fieber – Tim bleibt heute zu Hause",
        "Ausflug in den Tierpark",
        "Fundsachen in der Turnhalle",
        "Ihre neue Versichertenkarte"
       ],
       "loesung": 5,
       "fest": true,
       "text": {
        "sorte": "email",
        "quelle": "E-Mail von Herr Peters, Klassenlehrer 3b",
        "titel": "E-Mail 3",
        "zeilen": [
         "Liebe Eltern, am Donnerstag, dem 6. Juni, fahren wir mit der Klasse in den Tierpark.",
         "Wir treffen uns um 8 Uhr am Bahnhof und sind gegen 15 Uhr zurück.",
         "Bitte geben Sie Ihrem Kind ein Pausenbrot, eine Trinkflasche und 5 Euro für den Eintritt mit.",
         "Bei Fragen erreichen Sie mich über das Sekretariat. Viele Grüße, Ihr Klaus Peters"
        ]
       },
       "stelle": "fahren wir mit der Klasse in den Tierpark",
       "erklaerung": "Es geht um einen Klassenausflug, nicht um einen Elternabend."
      },
      {
       "frage": "Welcher Betreff passt zu E-Mail 4?",
       "opt": [
        "Termin verschieben",
        "Ihre Blutwerte sind da",
        "Erinnerung: Impfung Ihres Kindes",
        "Elternabend in der Klasse 3b",
        "Fieber – Tim bleibt heute zu Hause",
        "Ausflug in den Tierpark",
        "Fundsachen in der Turnhalle",
        "Ihre neue Versichertenkarte"
       ],
       "loesung": 0,
       "fest": true,
       "text": {
        "sorte": "email",
        "quelle": "E-Mail von Michael Krause",
        "titel": "E-Mail 4",
        "zeilen": [
         "Guten Tag, ich habe am Montag um 9.30 Uhr einen Termin bei Dr. Ahmadi zur Kontrolle.",
         "Leider muss ich an diesem Tag ganz unerwartet arbeiten.",
         "Ist es möglich, den Termin auf Mittwoch oder Donnerstag zu legen, am liebsten am Nachmittag?",
         "Ich bin unter dieser Adresse und auch telefonisch gut erreichbar. Vielen Dank und freundliche Grüße, Michael Krause"
        ]
       },
       "stelle": "den Termin auf Mittwoch oder Donnerstag zu legen",
       "erklaerung": "Herr Krause möchte seinen Termin an einem anderen Tag haben."
      }
     ]
    }
   ]
  },
  {
   "nr": 4,
   "art": "textwahl",
   "name": "Lesen: Sachtext",
   "kurz": "Ein längerer Text, fünf Fragen a/b/c",
   "was": "Du liest einen längeren Text aus einer Zeitung oder Zeitschrift. Fünf Fragen mit je drei Antworten, in der Reihenfolge des Textes.",
   "tipp": "Die Antworten benutzen andere Wörter als der Text. Such die Stelle — und lies den Satz danach mit.",
   "zeichen": "📰",
   "farbe": "lila",
   "punkte": 5,
   "runden": [
    {
     "id": "a2b1a4s1",
     "text": {
      "sorte": "zeitung",
      "quelle": "Wochenblatt Hellenbach",
      "titel": "Kaputt? Nicht gleich wegwerfen!",
      "zeilen": [
       "Jeden ersten Samstag im Monat ist im Gemeindezentrum von Hellenbach viel los. Zwischen zehn und vierzehn Uhr kommen Menschen mit Toastern, Lampen, Fahrrädern und Hosen. Sie alle haben ein Ziel: Ihre Sachen sollen wieder funktionieren. Das Reparatur-Café gibt es seit vier Jahren.",
       "Die Idee hatte Gerhard Lindner. Der frühere Elektriker ist seit sechs Jahren in Rente. „Ich habe gesehen, wie viele Geräte im Müll landen, nur weil ein kleines Teil kaputt ist“, sagt er. Heute hilft ein Team von zwölf Leuten mit. Darunter sind eine Schneiderin, zwei Studenten und ein Fahrradmechaniker.",
       "Wichtig ist: Die Helfer reparieren nicht allein. Die Besucher sollen mitmachen und zuschauen. „Wer einmal gesehen hat, wie man ein Kabel wechselt, kann es beim nächsten Mal vielleicht selbst“, erklärt Lindner. Bezahlen muss man für die Hilfe nichts. Viele Besucher werfen aber eine kleine Spende in die Kasse. Mit dem Geld kauft das Team Werkzeug und Ersatzteile.",
       "Nicht alles kann man retten. Etwa jedes dritte Gerät geht auch nach der Reparatur nicht mehr. Bei manchen modernen Geräten kann man das Gehäuse nicht öffnen, ohne es zu zerstören. „Das ärgert mich jedes Mal“, sagt Lindner.",
       "Für viele Besucher ist das Café auch ein Treffpunkt. Während sie warten, trinken sie Kaffee und essen Kuchen, den Nachbarn mitbringen. Die siebzigjährige Helga Brenner kommt fast jeden Monat, auch wenn nichts kaputt ist. „Ich lebe allein. Hier kann ich mich unterhalten, das ist mir wichtiger als mein alter Föhn“, sagt sie und lacht.",
       "Das Team sucht noch Helfer, vor allem Leute, die Computer und Handys reparieren können. Wer mitmachen möchte, kann einfach an einem Samstag vorbeikommen."
      ]
     },
     "aufgaben": [
      {
       "frage": "Wer hatte die Idee für das Reparatur-Café?",
       "opt": [
        "Ein Elektriker, der nicht mehr arbeitet.",
        "Ein Student, der alte Geräte sammelt.",
        "Eine Schneiderin aus dem Team."
       ],
       "loesung": 0,
       "stelle": "Der frühere Elektriker ist seit sechs Jahren in Rente.",
       "erklaerung": "„Früher\" und „in Rente\" heißt: Er arbeitet nicht mehr. Schneiderin und Studenten helfen nur mit."
      },
      {
       "frage": "Was ist im Reparatur-Café wichtig?",
       "opt": [
        "Fachleute reparieren alles schnell und allein.",
        "Die Besucher helfen bei der Reparatur mit.",
        "Man kann dort gebrauchte Geräte kaufen."
       ],
       "loesung": 1,
       "stelle": "Die Besucher sollen mitmachen und zuschauen.",
       "erklaerung": "Die Helfer reparieren ausdrücklich nicht allein. Vom Verkaufen steht nichts im Text."
      },
      {
       "frage": "Was macht das Team mit den Spenden?",
       "opt": [
        "Es bezahlt damit die Helfer.",
        "Es kauft Kaffee und Kuchen.",
        "Es kauft Werkzeug und Ersatzteile."
       ],
       "loesung": 2,
       "stelle": "Mit dem Geld kauft das Team Werkzeug und Ersatzteile.",
       "erklaerung": "Den Kuchen bringen Nachbarn mit. Die Helfer bekommen kein Geld."
      },
      {
       "frage": "Was sagt der Text über die Reparaturen?",
       "opt": [
        "Fast alle Geräte funktionieren danach wieder.",
        "Ungefähr ein Drittel der Geräte bleibt kaputt.",
        "Moderne Geräte kann man am leichtesten reparieren."
       ],
       "loesung": 1,
       "stelle": "Etwa jedes dritte Gerät geht auch nach der Reparatur nicht mehr.",
       "erklaerung": "„Jedes dritte\" ist ein Drittel. Moderne Geräte sind sogar oft schwierig."
      },
      {
       "frage": "Warum kommt Helga Brenner ins Reparatur-Café?",
       "opt": [
        "Ihr Föhn geht oft kaputt.",
        "Sie backt den Kuchen für das Café.",
        "Sie möchte mit anderen Menschen sprechen."
       ],
       "loesung": 2,
       "stelle": "Hier kann ich mich unterhalten",
       "erklaerung": "Sie kommt auch, wenn nichts kaputt ist. Der Föhn ist ihr weniger wichtig."
      }
     ]
    },
    {
     "id": "a2b1a4s2",
     "text": {
      "sorte": "zeitung",
      "quelle": "Nordstädter Anzeiger",
      "titel": "Schwimmen lernen mit vierzig",
      "zeilen": [
       "Im Hallenbad von Nordstadt ist es am Dienstagabend um halb acht ruhig. Nur im kleinen Becken stehen acht Erwachsene im Wasser, manche halten sich am Rand fest. Sie alle haben etwas gemeinsam: Sie können nicht schwimmen. Und sie wollen das ändern.",
       "Eine von ihnen ist Amira Haddad. Die 42-Jährige ist in einer Stadt ohne Schwimmbad aufgewachsen. „Als Kind hatte ich nie die Möglichkeit, es zu lernen“, sagt sie. Lange war ihr das egal. Doch dann wollten ihre Kinder im Sommer an den See fahren. „Ich saß am Ufer und hatte Angst, wenn sie zu weit hinausgeschwommen sind. Da habe ich gedacht: So geht es nicht weiter.“",
       "Der Kurs dauert zehn Wochen und kostet neunzig Euro. Trainer Jens Albrecht unterrichtet seit fünfzehn Jahren Erwachsene. Er weiß, dass sich viele schämen. „Die meisten haben am Anfang mehr Angst vor den Blicken der anderen als vor dem Wasser“, sagt er. Deshalb findet der Kurs abends statt, wenn kaum andere Gäste im Bad sind.",
       "In den ersten Stunden geht es noch gar nicht ums Schwimmen. Die Teilnehmer lernen, ruhig zu atmen und das Gesicht ins Wasser zu legen. Erst danach kommen die Bewegungen mit Armen und Beinen. „Erwachsene denken zu viel nach. Kinder probieren einfach“, erklärt Albrecht.",
       "Amira Haddad ist jetzt in der achten Woche. Fünfzehn Meter schafft sie schon ohne Hilfe. Am Ende des Kurses möchte sie das Seepferdchen-Abzeichen machen, so wie ihre Tochter vor drei Jahren. „Meine Kinder finden das total lustig. Aber sie sind auch stolz auf mich.“",
       "Die Nachfrage ist groß. Für den nächsten Kurs im Frühjahr gibt es schon eine Warteliste. Das Bad plant deshalb, ab März einen zweiten Termin am Samstagmorgen anzubieten."
      ]
     },
     "aufgaben": [
      {
       "frage": "Warum hat Amira Haddad als Kind nicht schwimmen gelernt?",
       "opt": [
        "Sie hatte große Angst vor dem Wasser.",
        "In ihrer Stadt gab es kein Schwimmbad.",
        "Ihre Eltern wollten es nicht."
       ],
       "loesung": 1,
       "stelle": "ist in einer Stadt ohne Schwimmbad aufgewachsen",
       "erklaerung": "Es fehlte die Möglichkeit, nicht der Mut. Von den Eltern steht nichts im Text."
      },
      {
       "frage": "Warum wollte sie es später doch lernen?",
       "opt": [
        "Ihre Kinder wollten, dass sie mitschwimmt.",
        "Sie hatte am See Angst um ihre Kinder.",
        "Ihr Arzt hat ihr mehr Sport empfohlen."
       ],
       "loesung": 1,
       "stelle": "hatte Angst, wenn sie zu weit hinausgeschwommen sind",
       "erklaerung": "Sie saß am Ufer und machte sich Sorgen. Dass die Kinder es wollten, steht nicht im Text."
      },
      {
       "frage": "Warum findet der Kurs abends statt?",
       "opt": [
        "Weil die Teilnehmer tagsüber arbeiten.",
        "Weil das Bad abends billiger ist.",
        "Weil dann fast keine anderen Gäste da sind."
       ],
       "loesung": 2,
       "stelle": "wenn kaum andere Gäste im Bad sind",
       "erklaerung": "Viele schämen sich vor den Blicken der anderen. Arbeit und Preis sind nicht der Grund."
      },
      {
       "frage": "Was lernen die Teilnehmer zuerst?",
       "opt": [
        "Ruhig atmen und das Gesicht ins Wasser legen.",
        "Die Bewegungen mit Armen und Beinen.",
        "Kurze Strecken ohne Hilfe schwimmen."
       ],
       "loesung": 0,
       "stelle": "lernen, ruhig zu atmen und das Gesicht ins Wasser zu legen",
       "erklaerung": "Arme und Beine kommen „erst danach\". Das Schwimmen allein kommt viel später."
      },
      {
       "frage": "Was plant das Bad?",
       "opt": [
        "Einen Kurs für Kinder am Samstag.",
        "Einen zusätzlichen Termin für den Kurs.",
        "Einen günstigeren Kurs im Frühjahr."
       ],
       "loesung": 1,
       "stelle": "ab März einen zweiten Termin am Samstagmorgen anzubieten",
       "erklaerung": "„Einen zweiten Termin\" heißt zusätzlich. Von Kindern oder Preisen steht dort nichts."
      }
     ]
    },
    {
     "id": "a2b1a4s3",
     "text": {
      "sorte": "zeitung",
      "quelle": "Landbote Ostheim",
      "titel": "Der Bus, den Nachbarn fahren",
      "zeilen": [
       "In Wiesbrunn, einem Dorf mit 900 Einwohnern, fuhr bis vor zwei Jahren nur morgens und mittags ein Bus in die Kreisstadt. Wer kein Auto hatte, hatte ein Problem. Vor allem ältere Menschen kamen kaum noch zum Arzt oder zum Einkaufen.",
       "Heute gibt es den Bürgerbus. Er fährt von Montag bis Freitag fünfmal am Tag eine feste Strecke durch vier Dörfer bis zum Bahnhof der Kreisstadt. Der Bus hat acht Sitzplätze und einen Platz für einen Rollstuhl. Gekauft hat ihn die Gemeinde, die Kosten für Benzin und Versicherung bezahlt der Landkreis.",
       "Das Besondere: Die Fahrer bekommen kein Geld. Sie machen die Arbeit ehrenamtlich. Zurzeit sind es achtzehn Frauen und Männer, die meisten sind schon in Rente. Jeder fährt ungefähr zwei Schichten im Monat. Einen Busführerschein braucht man nicht, weil der Bus klein ist. Aber alle Fahrer müssen regelmäßig einen Gesundheitstest beim Arzt machen.",
       "Einer von ihnen ist Bernd Kowalczyk. Der 67-Jährige war früher Lastwagenfahrer. „Ich fahre einfach gern. Und ich kenne jetzt fast jeden im Dorf“, erzählt er. Viele Fahrgäste warten nicht an der Haltestelle, sondern rufen vorher an. Dann hält er auch direkt vor ihrer Haustür, wenn sie schlecht laufen können.",
       "Eine Fahrt kostet zwei Euro, egal wie weit. Kinder unter sechs Jahren fahren kostenlos. Mit dem Geld bezahlt der Verein kleine Reparaturen und einmal im Jahr ein Fest für die Fahrer.",
       "Nicht alles ist perfekt. Am Wochenende fährt der Bus nicht, weil es dafür nicht genug Fahrer gibt. Der Verein sucht deshalb dringend neue Leute, gern auch jüngere."
      ]
     },
     "aufgaben": [
      {
       "frage": "Was war früher in Wiesbrunn das Problem?",
       "opt": [
        "Der Bus war zu teuer.",
        "Es fuhren nur wenige Busse.",
        "Der Bus hielt nicht im Dorf."
       ],
       "loesung": 1,
       "stelle": "fuhr bis vor zwei Jahren nur morgens und mittags ein Bus",
       "erklaerung": "„Nur morgens und mittags\" heißt: zu wenige Fahrten. Über den Preis steht dort nichts."
      },
      {
       "frage": "Wer bezahlt das Benzin für den Bürgerbus?",
       "opt": [
        "Die Gemeinde.",
        "Der Landkreis.",
        "Die Fahrgäste."
       ],
       "loesung": 1,
       "stelle": "die Kosten für Benzin und Versicherung bezahlt der Landkreis",
       "erklaerung": "Die Gemeinde hat nur den Bus gekauft. Das Benzin zahlt der Landkreis."
      },
      {
       "frage": "Was stimmt für die Fahrer?",
       "opt": [
        "Sie bekommen einen kleinen Lohn.",
        "Sie brauchen einen Busführerschein.",
        "Sie arbeiten ohne Bezahlung."
       ],
       "loesung": 2,
       "stelle": "Die Fahrer bekommen kein Geld.",
       "erklaerung": "„Ehrenamtlich\" heißt ohne Geld. Einen Busführerschein brauchen sie gerade nicht."
      },
      {
       "frage": "Was macht Bernd Kowalczyk für manche Fahrgäste?",
       "opt": [
        "Er holt sie direkt zu Hause ab.",
        "Er hilft ihnen beim Einkaufen.",
        "Er fährt sie auch am Wochenende."
       ],
       "loesung": 0,
       "stelle": "hält er auch direkt vor ihrer Haustür",
       "erklaerung": "Wer schlecht laufen kann, wird vor der Haustür abgeholt. Am Wochenende fährt der Bus nicht."
      },
      {
       "frage": "Warum fährt der Bus am Wochenende nicht?",
       "opt": [
        "Weil dann zu wenige Fahrgäste mitfahren.",
        "Weil es zu wenige Fahrer gibt.",
        "Weil der Bus dann repariert wird."
       ],
       "loesung": 1,
       "stelle": "weil es dafür nicht genug Fahrer gibt",
       "erklaerung": "Es fehlen Fahrer, nicht Fahrgäste. Deshalb sucht der Verein neue Leute."
      }
     ]
    }
   ]
  },
  {
   "nr": 5,
   "art": "textwahl",
   "name": "Sprachbausteine",
   "kurz": "Ein Text, zehn Lücken a/b/c",
   "was": "Ein Brief oder eine E-Mail mit zehn Lücken. Für jede Lücke gibt es drei Möglichkeiten. Es geht um Wörter, die den Text zusammenhalten.",
   "tipp": "Lies den ganzen Satz: „weil\" schickt das Verb ans Ende, „denn\" nicht.",
   "zeichen": "🧩",
   "farbe": "turq",
   "punkte": 10,
   "runden": [
    {
     "id": "a2b1asbs1",
     "text": {
      "sorte": "email",
      "quelle": "E-Mail",
      "titel": "Danke für die Einladung",
      "zeilen": [
       "Liebe Svetlana,",
       "vielen Dank für deine Einladung zum Sommerfest! Ich komme sehr gern, __(1)__ ich kann leider erst um sechs Uhr da sein. Am Samstag muss ich bis fünf Uhr arbeiten, __(2)__ ich bin im Moment allein im Laden. Meine Kollegin ist nämlich krank.",
       "Soll ich etwas zu essen mitbringen? Ich kann gern einen Salat machen. Oder brauchst du noch Getränke? Sag mir einfach, __(3)__ dir lieber ist. __(4)__ es regnet, bringe ich auch noch zwei Stühle und einen großen Schirm mit.",
       "Ich freue mich besonders, __(5)__ ich endlich deinen Bruder kennenlerne. Du hast mir schon so viel von __(6)__ erzählt! Wohnt er eigentlich noch __(7)__ Hamburg?",
       "Übrigens: Ich habe letzte Woche einen neuen Job __(8)__. Ab September arbeite ich in einer Bäckerei. __(9)__ erzähle ich dir am Samstag.",
       "Bis bald und liebe Grüße",
       "__(10)__ Ana"
      ]
     },
     "aufgaben": [
      {
       "frage": "Was passt in Lücke 1?",
       "luecke": 1,
       "opt": [
        "denn",
        "aber",
        "oder"
       ],
       "loesung": 1,
       "fest": true,
       "erklaerung": "Gegensatz: Sie kommt gern, aber erst später. „aber\" verbindet zwei Hauptsätze."
      },
      {
       "frage": "Was passt in Lücke 2?",
       "luecke": 2,
       "opt": [
        "weil",
        "deshalb",
        "denn"
       ],
       "loesung": 2,
       "fest": true,
       "erklaerung": "Nach der Lücke steht das Verb an Position zwei („ich bin\"). Das geht mit „denn\", nicht mit „weil\"."
      },
      {
       "frage": "Was passt in Lücke 3?",
       "luecke": 3,
       "opt": [
        "was",
        "wer",
        "wie"
       ],
       "loesung": 0,
       "fest": true,
       "erklaerung": "Gefragt ist eine Sache: Salat oder Getränke. Für Sachen steht „was\"."
      },
      {
       "frage": "Was passt in Lücke 4?",
       "luecke": 4,
       "opt": [
        "Dass",
        "Denn",
        "Wenn"
       ],
       "loesung": 2,
       "fest": true,
       "erklaerung": "Eine Bedingung: Nur falls es regnet, bringt sie Stühle und Schirm. Das Verb steht am Ende."
      },
      {
       "frage": "Was passt in Lücke 5?",
       "luecke": 5,
       "opt": [
        "ob",
        "dass",
        "damit"
       ],
       "loesung": 1,
       "fest": true,
       "erklaerung": "Nach „sich freuen\" folgt ein Nebensatz mit „dass\". „ob\" passt nur bei einer offenen Frage."
      },
      {
       "frage": "Was passt in Lücke 6?",
       "luecke": 6,
       "opt": [
        "ihn",
        "er",
        "ihm"
       ],
       "loesung": 2,
       "fest": true,
       "erklaerung": "„von\" verlangt immer den Dativ: von ihm."
      },
      {
       "frage": "Was passt in Lücke 7?",
       "luecke": 7,
       "opt": [
        "in",
        "nach",
        "zu"
       ],
       "loesung": 0,
       "fest": true,
       "erklaerung": "Wo wohnt er? In einer Stadt: „in Hamburg\". „nach Hamburg\" heißt: dorthin fahren."
      },
      {
       "frage": "Was passt in Lücke 8?",
       "luecke": 8,
       "opt": [
        "finden",
        "gefunden",
        "gefindet"
       ],
       "loesung": 1,
       "fest": true,
       "erklaerung": "Perfekt mit „habe\": Das Partizip von „finden\" ist „gefunden\"."
      },
      {
       "frage": "Was passt in Lücke 9?",
       "luecke": 9,
       "opt": [
        "Der Rest",
        "Dem Rest",
        "Den Rest"
       ],
       "loesung": 2,
       "fest": true,
       "erklaerung": "„Den Rest\" ist das Akkusativobjekt: Ich erzähle dir den Rest."
      },
      {
       "frage": "Was passt in Lücke 10?",
       "luecke": 10,
       "opt": [
        "Deine",
        "Dein",
        "Deinen"
       ],
       "loesung": 0,
       "fest": true,
       "erklaerung": "Ana ist eine Frau, deshalb unterschreibt sie mit „Deine\"."
      }
     ]
    },
    {
     "id": "a2b1asbs2",
     "text": {
      "sorte": "brief",
      "quelle": "Brief",
      "titel": "Abmeldung vom Deutschkurs",
      "zeilen": [
       "Sehr geehrte Frau Albers,",
       "ich bin Teilnehmer in Ihrem Deutschkurs am Dienstag und Donnerstag. Leider kann ich ab nächster Woche nicht mehr __(1)__ Unterricht kommen. Meine Firma hat mir eine neue Stelle in Bremen angeboten, und ich habe sie __(2)__.",
       "Ich soll schon am 1. Oktober anfangen. Deshalb __(3)__ ich nächste Woche umziehen. Das ist natürlich sehr schnell, __(4)__ ich freue mich auf die neue Aufgabe.",
       "Ich habe noch zwei Fragen. Bekomme ich das Geld für die letzten vier Wochen zurück? Und können Sie mir sagen, __(5)__ es in Bremen einen ähnlichen Kurs gibt? Ich möchte unbedingt weiterlernen, __(6)__ ich im Frühling die Prüfung machen möchte.",
       "Ich danke Ihnen sehr für den guten Unterricht. Ich habe in Ihrem Kurs viel gelernt, __(7)__ beim Sprechen. Bitte grüßen Sie auch die anderen Teilnehmer von __(8)__.",
       "Ich __(9)__ mich über eine kurze Antwort freuen.",
       "Mit freundlichen __(10)__",
       "Rashid Karimi"
      ]
     },
     "aufgaben": [
      {
       "frage": "Was passt in Lücke 1?",
       "luecke": 1,
       "opt": [
        "im",
        "zum",
        "beim"
       ],
       "loesung": 1,
       "fest": true,
       "erklaerung": "Wohin kommt er? „zum Unterricht kommen\" ist die feste Verbindung."
      },
      {
       "frage": "Was passt in Lücke 2?",
       "luecke": 2,
       "opt": [
        "annehmen",
        "angenommen",
        "annahm"
       ],
       "loesung": 1,
       "fest": true,
       "erklaerung": "Perfekt mit „habe … angenommen\": Am Ende steht das Partizip."
      },
      {
       "frage": "Was passt in Lücke 3?",
       "luecke": 3,
       "opt": [
        "muss",
        "müssen",
        "musst"
       ],
       "loesung": 0,
       "fest": true,
       "erklaerung": "Subjekt ist „ich\", also „ich muss\". Nach „Deshalb\" steht das Verb direkt auf Position zwei."
      },
      {
       "frage": "Was passt in Lücke 4?",
       "luecke": 4,
       "opt": [
        "aber",
        "oder",
        "weil"
       ],
       "loesung": 0,
       "fest": true,
       "erklaerung": "Gegensatz: schnell, aber trotzdem Freude. Nach „weil\" müsste das Verb am Ende stehen."
      },
      {
       "frage": "Was passt in Lücke 5?",
       "luecke": 5,
       "opt": [
        "dass",
        "ob",
        "wenn"
       ],
       "loesung": 1,
       "fest": true,
       "erklaerung": "Eine indirekte Ja-Nein-Frage: Gibt es einen Kurs? Dann steht „ob\"."
      },
      {
       "frage": "Was passt in Lücke 6?",
       "luecke": 6,
       "opt": [
        "denn",
        "deshalb",
        "weil"
       ],
       "loesung": 2,
       "fest": true,
       "erklaerung": "Das Verb „möchte\" steht am Ende. Das ist ein Nebensatz mit „weil\"."
      },
      {
       "frage": "Was passt in Lücke 7?",
       "luecke": 7,
       "opt": [
        "besonders",
        "besondere",
        "besonderen"
       ],
       "loesung": 0,
       "fest": true,
       "erklaerung": "Hier ist das Wort ein Adverb ohne Nomen. Es bekommt keine Endung."
      },
      {
       "frage": "Was passt in Lücke 8?",
       "luecke": 8,
       "opt": [
        "ich",
        "mir",
        "mich"
       ],
       "loesung": 1,
       "fest": true,
       "erklaerung": "„von\" verlangt den Dativ: von mir."
      },
      {
       "frage": "Was passt in Lücke 9?",
       "luecke": 9,
       "opt": [
        "wäre",
        "würde",
        "hätte"
       ],
       "loesung": 1,
       "fest": true,
       "erklaerung": "Höflicher Wunsch: „Ich würde mich freuen\". Mit „wäre\" oder „hätte\" geht der Satz nicht."
      },
      {
       "frage": "Was passt in Lücke 10?",
       "luecke": 10,
       "opt": [
        "Gruß",
        "Grüße",
        "Grüßen"
       ],
       "loesung": 2,
       "fest": true,
       "erklaerung": "Die feste Formel heißt „Mit freundlichen Grüßen\". Nach „mit\" steht der Dativ Plural."
      }
     ]
    },
    {
     "id": "a2b1asbs3",
     "text": {
      "sorte": "email",
      "quelle": "E-Mail",
      "titel": "Ihr Paket ist bei mir",
      "zeilen": [
       "Hallo Herr Petersen,",
       "heute Vormittag war der Paketbote da. Sie waren nicht zu Hause, __(1)__ habe ich Ihr Paket angenommen. Es ist ziemlich groß und schwer. Ich habe es erst mal in __(2)__ Flur gestellt.",
       "Ab heute Abend bin ich leider für drei Tage bei meiner Schwester. __(3)__ Sie das Paket heute noch holen möchten, klingeln Sie bitte vor sieben Uhr. __(4)__ kann auch meine Tochter Lea es Ihnen geben. Sie ist morgen den ganzen Tag zu Hause, __(5)__ sie hat gerade Ferien.",
       "Ich habe auch noch eine Bitte an __(6)__: Könnten Sie in dieser Zeit meine Blumen auf dem Balkon __(7)__? Lea vergisst das bestimmt. Den Schlüssel gebe ich Ihnen, __(8)__ Sie das Paket abholen. Das ist wirklich sehr nett __(9)__ Ihnen! Ich melde mich, __(10)__ ich wieder zu Hause bin.",
       "Viele Grüße",
       "Monika Sander"
      ]
     },
     "aufgaben": [
      {
       "frage": "Was passt in Lücke 1?",
       "luecke": 1,
       "opt": [
        "denn",
        "deshalb",
        "weil"
       ],
       "loesung": 1,
       "fest": true,
       "erklaerung": "Folge: Er war nicht da, also hat sie das Paket genommen. Nach „deshalb\" kommt sofort das Verb."
      },
      {
       "frage": "Was passt in Lücke 2?",
       "luecke": 2,
       "opt": [
        "meinem",
        "meinen",
        "meiner"
       ],
       "loesung": 1,
       "fest": true,
       "erklaerung": "„stellen\" fragt: wohin? Dann steht Akkusativ: in meinen Flur."
      },
      {
       "frage": "Was passt in Lücke 3?",
       "luecke": 3,
       "opt": [
        "Wann",
        "Ob",
        "Wenn"
       ],
       "loesung": 2,
       "fest": true,
       "erklaerung": "Eine Bedingung: falls er heute kommen will. Das ist „wenn\"."
      },
      {
       "frage": "Was passt in Lücke 4?",
       "luecke": 4,
       "opt": [
        "Sonst",
        "Trotzdem",
        "Denn"
       ],
       "loesung": 0,
       "fest": true,
       "erklaerung": "„Sonst\" heißt: Wenn das nicht klappt. Nach „Denn\" kann das Verb nicht direkt folgen."
      },
      {
       "frage": "Was passt in Lücke 5?",
       "luecke": 5,
       "opt": [
        "deshalb",
        "denn",
        "weil"
       ],
       "loesung": 1,
       "fest": true,
       "erklaerung": "Das Verb steht an Position zwei („sie hat\"). Für einen Grund mit dieser Wortstellung braucht man „denn\"."
      },
      {
       "frage": "Was passt in Lücke 6?",
       "luecke": 6,
       "opt": [
        "Ihnen",
        "Sie",
        "Ihr"
       ],
       "loesung": 1,
       "fest": true,
       "erklaerung": "„eine Bitte an jemanden\" verlangt den Akkusativ: an Sie."
      },
      {
       "frage": "Was passt in Lücke 7?",
       "luecke": 7,
       "opt": [
        "gegossen",
        "gießt",
        "gießen"
       ],
       "loesung": 2,
       "fest": true,
       "erklaerung": "Nach „Könnten Sie\" steht das Verb im Infinitiv am Ende."
      },
      {
       "frage": "Was passt in Lücke 8?",
       "luecke": 8,
       "opt": [
        "als",
        "wenn",
        "wann"
       ],
       "loesung": 1,
       "fest": true,
       "erklaerung": "Ein Ereignis in der Zukunft: „wenn\". „als\" steht nur für ein Ereignis in der Vergangenheit."
      },
      {
       "frage": "Was passt in Lücke 9?",
       "luecke": 9,
       "opt": [
        "von",
        "mit",
        "für"
       ],
       "loesung": 0,
       "fest": true,
       "erklaerung": "Feste Wendung: „Das ist nett von Ihnen.\""
      },
      {
       "frage": "Was passt in Lücke 10?",
       "luecke": 10,
       "opt": [
        "ob",
        "damit",
        "sobald"
       ],
       "loesung": 2,
       "fest": true,
       "erklaerung": "„sobald\" heißt: direkt dann, wenn sie zurück ist."
      }
     ]
    }
   ]
  },
  {
   "nr": 6,
   "art": "textwahl",
   "name": "Lesen und Schreiben: Mail verstehen",
   "kurz": "Eine Mail, eine Aussage richtig/falsch, eine Frage a/b/c",
   "was": "Du liest eine Mail, auf die du danach antworten wirst. Zuerst zwei Fragen zum Verstehen. Die Antwort schreibst du im Schreiben-Training.",
   "tipp": "Unterstreich im Kopf alle Fragen und Bitten in der Mail — genau auf die musst du später antworten.",
   "zeichen": "📨",
   "farbe": "gold",
   "punkte": 2,
   "runden": [
    {
     "id": "a2b1amail1",
     "text": {
      "sorte": "email",
      "quelle": "E-Mail von Jana",
      "titel": "Picknick am Sonntag",
      "zeilen": [
       "Hallo!",
       "Am Sonntag, dem 12. Juni, werde ich dreißig. Ich möchte nicht groß feiern, sondern lieber ein Picknick im Stadtpark machen. Wir treffen uns um zwei Uhr am Spielplatz neben dem See. Kommst du? Jeder bringt etwas zum Essen mit, die Getränke kaufe ich selbst. Was möchtest du mitbringen? Und noch etwas: Ich habe kein Auto, und die Decken und der Grill sind schwer. Kannst du mich vielleicht am Mittag mit deinem Auto abholen?",
       "Ich freue mich auf dich!",
       "Liebe Grüße",
       "Jana"
      ]
     },
     "aufgaben": [
      {
       "frage": "Jana feiert ihren Geburtstag in einem Restaurant.",
       "opt": [
        "Richtig",
        "Falsch"
       ],
       "loesung": 1,
       "fest": true,
       "stelle": "lieber ein Picknick im Stadtpark machen",
       "erklaerung": "Sie will nicht groß feiern, sondern im Park picknicken."
      },
      {
       "frage": "Was kauft Jana selbst?",
       "opt": [
        "Das Essen.",
        "Die Getränke.",
        "Einen Grill."
       ],
       "loesung": 1,
       "stelle": "die Getränke kaufe ich selbst",
       "erklaerung": "Das Essen bringen die Gäste mit. Den Grill hat sie schon."
      }
     ]
    },
    {
     "id": "a2b1amail2",
     "text": {
      "sorte": "email",
      "quelle": "E-Mail von Petra Lehmann",
      "titel": "Neue Wasserzähler",
      "zeilen": [
       "Liebe Frau Ahmadi,",
       "nächste Woche werden im ganzen Haus die Wasserzähler ausgetauscht. Der Handwerker kommt am Dienstag zwischen acht und zwölf Uhr. Sind Sie an diesem Vormittag zu Hause? Wenn nicht, kann ich auch mit meinem Schlüssel in die Wohnung gehen, aber nur mit Ihrer Erlaubnis. Außerdem möchte ich Sie bitten, den Weg ins Badezimmer frei zu machen, weil der Zähler unter dem Waschbecken ist. Gibt es sonst noch Probleme in der Wohnung? Dann sagen Sie mir bitte Bescheid.",
       "Viele Grüße",
       "Petra Lehmann"
      ]
     },
     "aufgaben": [
      {
       "frage": "Der Handwerker kommt am Dienstagnachmittag.",
       "opt": [
        "Richtig",
        "Falsch"
       ],
       "loesung": 1,
       "fest": true,
       "stelle": "zwischen acht und zwölf Uhr",
       "erklaerung": "Acht bis zwölf Uhr ist Vormittag, nicht Nachmittag."
      },
      {
       "frage": "Warum soll Frau Ahmadi den Weg ins Bad frei machen?",
       "opt": [
        "Weil das Bad renoviert wird.",
        "Weil der Handwerker die Dusche reparieren muss.",
        "Weil der Zähler unter dem Waschbecken ist."
       ],
       "loesung": 2,
       "stelle": "weil der Zähler unter dem Waschbecken ist",
       "erklaerung": "Nur der Zähler wird getauscht. Renovierung und Dusche sind erfunden."
      }
     ]
    },
    {
     "id": "a2b1amail3",
     "text": {
      "sorte": "email",
      "quelle": "E-Mail von Dimitri",
      "titel": "Deutschkurs – kannst du mir helfen?",
      "zeilen": [
       "Hallo!",
       "Du hast doch letztes Jahr den Deutschkurs an der Volkshochschule gemacht, oder? Ich möchte jetzt auch einen Kurs anfangen, aber ich weiß nicht, welcher der richtige für mich ist. Wie war dein Kurs? Hat er dir geholfen? Ich arbeite von Montag bis Freitag bis siebzehn Uhr, deshalb kann ich nur abends oder am Wochenende. Weißt du, ob es auch Kurse am Samstag gibt? Und noch eine Bitte: Kannst du mir dein altes Kursbuch leihen? Dann kann ich schon ein bisschen üben.",
       "Viele Grüße",
       "Dimitri"
      ]
     },
     "aufgaben": [
      {
       "frage": "Dimitri hat nur abends oder am Wochenende Zeit für einen Kurs.",
       "opt": [
        "Richtig",
        "Falsch"
       ],
       "loesung": 0,
       "fest": true,
       "stelle": "deshalb kann ich nur abends oder am Wochenende",
       "erklaerung": "Er arbeitet tagsüber bis siebzehn Uhr, also bleiben Abend und Wochenende."
      },
      {
       "frage": "Was möchte Dimitri leihen?",
       "opt": [
        "Ein Kursbuch.",
        "Ein Wörterbuch.",
        "Einen Laptop."
       ],
       "loesung": 0,
       "stelle": "Kannst du mir dein altes Kursbuch leihen?",
       "erklaerung": "Er bittet um das alte Kursbuch, um schon zu üben."
      }
     ]
    },
    {
     "id": "a2b1amail4",
     "text": {
      "sorte": "email",
      "quelle": "E-Mail von Sabine Brandt, Kita Pusteblume",
      "titel": "Sommerfest – wir brauchen Hilfe",
      "zeilen": [
       "Liebe Familie Okafor,",
       "am Freitag, dem 4. Juli, feiern wir unser Sommerfest im Garten der Kita. Es beginnt um fünfzehn Uhr. Dafür brauchen wir noch Hilfe. Könnten Sie einen Kuchen oder einen Salat mitbringen? Außerdem suchen wir Eltern, die eine Stunde am Getränkestand helfen. Hätten Sie dafür Zeit? Viele Kinder sprechen zu Hause eine andere Sprache, und wir möchten beim Fest Lieder aus verschiedenen Ländern singen. Kennen Sie ein Kinderlied aus Ihrer Heimat, das wir zusammen lernen können?",
       "Freundliche Grüße",
       "Sabine Brandt"
      ]
     },
     "aufgaben": [
      {
       "frage": "Das Sommerfest findet im Garten der Kita statt.",
       "opt": [
        "Richtig",
        "Falsch"
       ],
       "loesung": 0,
       "fest": true,
       "stelle": "feiern wir unser Sommerfest im Garten der Kita",
       "erklaerung": "Der Ort steht gleich im ersten Satz: der Garten der Kita."
      },
      {
       "frage": "Wobei sollen Eltern beim Fest helfen?",
       "opt": [
        "Beim Aufräumen nach dem Fest.",
        "Am Getränkestand.",
        "Beim Schmücken des Gartens."
       ],
       "loesung": 1,
       "stelle": "die eine Stunde am Getränkestand helfen",
       "erklaerung": "Gesucht wird Hilfe am Getränkestand, von Aufräumen oder Schmücken steht nichts."
      }
     ]
    }
   ]
  }
 ],
 "laeufe": [
  {
   "id": "ta2b1ll1",
   "titel": "Prüfungslauf 1",
   "minuten": 60,
   "teile": [
    {
     "nr": 1,
     "art": "anzeigenX",
     "anzeigen": [
      {
       "b": "a",
       "quelle": "Musikschule Klangwerk",
       "zeilen": [
        "Gitarrenunterricht für Kinder ab 8 Jahren",
        "Einzelunterricht",
        "Erste Stunde kostenlos"
       ]
      },
      {
       "b": "b",
       "quelle": "Schwimmschule Delfin",
       "zeilen": [
        "Schwimmkurs für Kinder von 5 bis 7 Jahren",
        "Samstags vormittags",
        "Mit Abzeichen am Ende"
       ]
      },
      {
       "b": "c",
       "quelle": "Jugendtreff Nordstadt",
       "zeilen": [
        "Hausaufgabenhilfe für die Klassen 1 bis 6",
        "Montag bis Donnerstag, 14 bis 16 Uhr",
        "Kostenlos"
       ]
      },
      {
       "b": "d",
       "quelle": "Tagesmutter Petra",
       "zeilen": [
        "Betreue Kinder von 1 bis 3 Jahren",
        "Freier Platz ab Mai",
        "Montag bis Freitag, 7 bis 15 Uhr"
       ]
      },
      {
       "b": "e",
       "quelle": "Grundschule Am Bach",
       "zeilen": [
        "Kinderflohmarkt in der Turnhalle",
        "Kleidung, Spielzeug, Kinderwagen",
        "Sonntag, 10 bis 14 Uhr"
       ]
      },
      {
       "b": "f",
       "quelle": "Familienzentrum Regenbogen",
       "zeilen": [
        "Ferienbetreuung im Sommer",
        "Für Kinder von 6 bis 12 Jahren",
        "8 bis 16 Uhr, mit Ausflügen",
        "95 Euro pro Woche"
       ]
      },
      {
       "b": "g",
       "quelle": "Hallenbad Süd",
       "zeilen": [
        "Schwimmen lernen für Erwachsene",
        "Für Anfänger ohne Vorkenntnisse",
        "Dienstags 19 Uhr"
       ]
      },
      {
       "b": "h",
       "quelle": "Privat",
       "zeilen": [
        "Lehrer gibt Nachhilfe in Englisch",
        "Nur Klassen 10 bis 13",
        "20 Euro pro Stunde"
       ]
      }
     ],
     "aufgaben": [
      {
       "situation": "Ihr Sohn geht in die zweite Klasse und braucht nachmittags Hilfe bei den Hausaufgaben. Sie haben wenig Geld.",
       "loesung": "c",
       "erklaerung": "Die Hausaufgabenhilfe ist für die Klassen 1 bis 6 und kostenlos."
      },
      {
       "situation": "Sie und Ihr Mann arbeiten in den Sommerferien. Sie suchen eine Betreuung für Ihre neunjährige Tochter.",
       "loesung": "f",
       "erklaerung": "Die Ferienbetreuung ist für Kinder von 6 bis 12 Jahren."
      },
      {
       "situation": "Sie haben als Kind nie schwimmen gelernt und möchten es jetzt nachholen.",
       "loesung": "g",
       "erklaerung": "Kurs g ist für Erwachsene. Kurs b ist nur für Kinder."
      },
      {
       "situation": "Ihre Tochter ist eineinhalb Jahre alt. Ab Juni arbeiten Sie wieder vormittags.",
       "loesung": "d",
       "erklaerung": "Die Tagesmutter betreut Kinder ab einem Jahr und hat ab Mai einen Platz frei."
      },
      {
       "situation": "Ihr Sohn ist zwölf und möchte Klavier spielen lernen.",
       "loesung": "x",
       "erklaerung": "Die Musikschule bietet nur Gitarrenunterricht an, kein Klavier."
      }
     ]
    },
    {
     "nr": 2,
     "art": "textwahl",
     "text": {
      "sorte": "brief",
      "quelle": "Aushang in der Arztpraxis",
      "titel": "Neue Sprechzeiten ab 1. April",
      "zeilen": [
       "Liebe Patienten, ab dem 1. April ändern sich die Sprechzeiten unserer Praxis. Montags, dienstags und donnerstags sind wir von 8 bis 12 und von 15 bis 18 Uhr für Sie da. Mittwochs und freitags ist die Praxis nur vormittags geöffnet.",
       "Neu ist unsere offene Sprechstunde: Jeden Morgen von 8 bis 9 Uhr können Sie ohne Termin kommen, wenn Sie akut krank sind. Bitte rechnen Sie dann mit Wartezeit.",
       "Für alle anderen Besuche, zum Beispiel Kontrollen oder Impfungen, brauchen Sie weiterhin einen Termin. Termine können Sie jetzt auch online auf unserer Internetseite buchen. Rezepte für Medikamente, die Sie regelmäßig nehmen, bestellen Sie bitte nicht mehr am Telefon, sondern per E-Mail.",
       "Vom 18. bis 29. April ist die Praxis wegen Urlaub geschlossen. Die Vertretung übernimmt Dr. Hahn in der Bahnhofstraße 12. Ihr Praxisteam Dr. Lehmann"
      ]
     },
     "aufgaben": [
      {
       "frage": "Am Mittwochnachmittag ist die Praxis geschlossen.",
       "opt": [
        "Richtig",
        "Falsch"
       ],
       "loesung": 0,
       "fest": true,
       "stelle": "Mittwochs und freitags ist die Praxis nur vormittags geöffnet",
       "erklaerung": "Mittwochs ist nur vormittags geöffnet, also ist die Praxis nachmittags zu."
      },
      {
       "frage": "Wer kann ohne Termin kommen?",
       "opt": [
        "Alle Patienten, jeden Tag bis 12 Uhr.",
        "Patienten, die plötzlich krank sind, morgens von 8 bis 9 Uhr.",
        "Patienten, die eine Impfung brauchen."
       ],
       "loesung": 1,
       "stelle": "Jeden Morgen von 8 bis 9 Uhr können Sie ohne Termin kommen",
       "erklaerung": "Ohne Termin geht es nur in der offenen Sprechstunde für akut Kranke. Für Impfungen braucht man einen Termin."
      },
      {
       "frage": "Wie bestellt man ein Rezept für ein Medikament, das man regelmäßig nimmt?",
       "opt": [
        "Per Telefon.",
        "Online auf der Internetseite.",
        "Per E-Mail."
       ],
       "loesung": 2,
       "stelle": "nicht mehr am Telefon, sondern per E-Mail",
       "erklaerung": "Rezepte bestellt man per E-Mail. Online bucht man nur Termine."
      },
      {
       "frage": "Was sollen Patienten Ende April tun, wenn sie krank sind?",
       "opt": [
        "Zu Dr. Hahn gehen.",
        "In die offene Sprechstunde kommen.",
        "Online einen Termin bei Dr. Lehmann buchen."
       ],
       "loesung": 0,
       "stelle": "Die Vertretung übernimmt Dr. Hahn",
       "erklaerung": "Vom 18. bis 29. April ist Urlaub, dann ist Dr. Hahn die Vertretung."
      }
     ]
    },
    {
     "nr": 3,
     "art": "textwahl",
     "aufgaben": [
      {
       "frage": "Welcher Betreff passt zu E-Mail 1?",
       "opt": [
        "Ihre Bestellung ist unterwegs",
        "Reklamation: Wasserkocher defekt",
        "Unterlagen für Ihren Antrag fehlen",
        "Ihr neuer Personalausweis ist da",
        "Rückgabe leider nicht möglich",
        "Ihr Termin zur Anmeldung",
        "Gutschein zum Geburtstag",
        "Änderung Ihrer Bankverbindung"
       ],
       "loesung": 2,
       "fest": true,
       "text": {
        "sorte": "email",
        "quelle": "E-Mail von Familienkasse",
        "titel": "E-Mail 1",
        "zeilen": [
         "Sehr geehrte Frau Petrović, wir haben Ihren Antrag auf Kindergeld für Ihre Tochter Mila erhalten.",
         "Leider fehlt noch eine Kopie der Geburtsurkunde.",
         "Bitte schicken Sie uns diese innerhalb von vier Wochen, per Post oder über unser Online-Portal.",
         "Ohne dieses Dokument können wir Ihren Antrag nicht bearbeiten. Mit freundlichen Grüßen, Ihre Familienkasse"
        ]
       },
       "stelle": "Leider fehlt noch eine Kopie der Geburtsurkunde",
       "erklaerung": "Für den Antrag auf Kindergeld fehlt noch ein Dokument."
      },
      {
       "frage": "Welcher Betreff passt zu E-Mail 2?",
       "opt": [
        "Ihre Bestellung ist unterwegs",
        "Reklamation: Wasserkocher defekt",
        "Unterlagen für Ihren Antrag fehlen",
        "Ihr neuer Personalausweis ist da",
        "Rückgabe leider nicht möglich",
        "Ihr Termin zur Anmeldung",
        "Gutschein zum Geburtstag",
        "Änderung Ihrer Bankverbindung"
       ],
       "loesung": 1,
       "fest": true,
       "text": {
        "sorte": "email",
        "quelle": "E-Mail von Ali Hassan",
        "titel": "E-Mail 2",
        "zeilen": [
         "Sehr geehrte Damen und Herren, vor zwei Wochen habe ich in Ihrem Geschäft einen Wasserkocher gekauft.",
         "Seit gestern funktioniert er nicht mehr: Die Lampe geht an, aber das Wasser wird nicht warm.",
         "Ich möchte das Gerät umtauschen oder mein Geld zurückbekommen.",
         "Die Rechnung habe ich noch. Mit freundlichen Grüßen, Ali Hassan"
        ]
       },
       "stelle": "Seit gestern funktioniert er nicht mehr",
       "erklaerung": "Herr Hassan beschwert sich, weil sein neuer Wasserkocher kaputt ist."
      },
      {
       "frage": "Welcher Betreff passt zu E-Mail 3?",
       "opt": [
        "Ihre Bestellung ist unterwegs",
        "Reklamation: Wasserkocher defekt",
        "Unterlagen für Ihren Antrag fehlen",
        "Ihr neuer Personalausweis ist da",
        "Rückgabe leider nicht möglich",
        "Ihr Termin zur Anmeldung",
        "Gutschein zum Geburtstag",
        "Änderung Ihrer Bankverbindung"
       ],
       "loesung": 5,
       "fest": true,
       "text": {
        "sorte": "email",
        "quelle": "E-Mail von Bürgerbüro Neustadt",
        "titel": "E-Mail 3",
        "zeilen": [
         "Sehr geehrter Herr Okafor, Sie haben online einen Termin gebucht, um Ihre neue Wohnung anzumelden.",
         "Der Termin ist am Dienstag, dem 4. Februar, um 11.15 Uhr in Zimmer 12.",
         "Bitte bringen Sie Ihren Pass und die Bestätigung von Ihrem Vermieter mit.",
         "Wenn Sie nicht kommen können, sagen Sie den Termin bitte online ab. Ihr Bürgerbüro"
        ]
       },
       "stelle": "um Ihre neue Wohnung anzumelden",
       "erklaerung": "Das Bürgerbüro bestätigt den Termin für die Anmeldung der Wohnung."
      },
      {
       "frage": "Welcher Betreff passt zu E-Mail 4?",
       "opt": [
        "Ihre Bestellung ist unterwegs",
        "Reklamation: Wasserkocher defekt",
        "Unterlagen für Ihren Antrag fehlen",
        "Ihr neuer Personalausweis ist da",
        "Rückgabe leider nicht möglich",
        "Ihr Termin zur Anmeldung",
        "Gutschein zum Geburtstag",
        "Änderung Ihrer Bankverbindung"
       ],
       "loesung": 0,
       "fest": true,
       "text": {
        "sorte": "email",
        "quelle": "E-Mail von Online-Shop Wohnglück",
        "titel": "E-Mail 4",
        "zeilen": [
         "Hallo Frau Weber, gute Nachrichten: Ihr Paket mit dem Teppich und den zwei Kissen hat heute unser Lager verlassen.",
         "Es kommt voraussichtlich am Donnerstag bei Ihnen an.",
         "Mit Ihrer Sendungsnummer können Sie jederzeit sehen, wo Ihr Paket gerade ist.",
         "Wir wünschen Ihnen viel Freude mit Ihren neuen Sachen! Ihr Team von Wohnglück"
        ]
       },
       "stelle": "Es kommt voraussichtlich am Donnerstag bei Ihnen an",
       "erklaerung": "Der Shop schreibt, dass das Paket schon unterwegs ist."
      }
     ]
    },
    {
     "nr": 4,
     "art": "textwahl",
     "text": {
      "sorte": "zeitung",
      "quelle": "Stadtmagazin Altenau",
      "titel": "Lesen mit Oma Gisela",
      "zeilen": [
       "Jeden Donnerstag um acht Uhr steht Gisela Marquardt vor der Grundschule am Lindenplatz. In ihrer Tasche hat sie immer drei oder vier Kinderbücher. Die 71-Jährige ist Lesepatin. Einmal pro Woche liest sie mit Kindern aus der zweiten Klasse, die beim Lesen noch Probleme haben.",
       "Das Programm gibt es an der Schule seit fünf Jahren. Die Idee kam von einer Lehrerin. Sie hatte bemerkt, dass in ihrer Klasse immer mehr Kinder kaum flüssig lesen konnten. „In einer Klasse mit 26 Kindern habe ich einfach nicht genug Zeit für jedes einzelne Kind“, erklärt sie.",
       "Die Lesepaten arbeiten immer nur mit einem oder zwei Kindern. Sie setzen sich in einen ruhigen Raum neben der Bibliothek. Zuerst liest das Kind laut vor, dann sprechen sie über die Geschichte. Noten gibt es nicht. „Die Kinder sollen merken, dass Lesen Spaß macht. Druck haben sie in der Schule schon genug“, sagt Gisela Marquardt.",
       "Bevor die Paten anfangen, besuchen sie einen kurzen Kurs bei der Volkshochschule. Dort lernen sie zum Beispiel, wie man Kinder lobt und welche Bücher für welches Alter passen. Außerdem brauchen alle ein polizeiliches Führungszeugnis.",
       "Der Erfolg ist deutlich. Nach einem Jahr lesen die meisten Kinder schneller und verstehen mehr. Besonders profitieren Kinder, die zu Hause wenig Deutsch sprechen. Ein Junge aus Gisela Marquardts Gruppe hat sich letzte Woche zum ersten Mal selbst ein Buch in der Bibliothek ausgeliehen. „Da hätte ich fast geweint“, erzählt sie.",
       "Zurzeit hat die Schule vierzehn Lesepaten. Gebraucht werden aber mindestens zwanzig. Wer Interesse hat, kann sich im Sekretariat melden."
      ]
     },
     "aufgaben": [
      {
       "frage": "Mit welchen Kindern liest Gisela Marquardt?",
       "opt": [
        "Mit Kindern, die schon sehr gut lesen.",
        "Mit Kindern, die noch Schwierigkeiten beim Lesen haben.",
        "Mit der ganzen zweiten Klasse zusammen."
       ],
       "loesung": 1,
       "stelle": "die beim Lesen noch Probleme haben",
       "erklaerung": "„Probleme\" heißt Schwierigkeiten. Sie arbeitet nur mit einem oder zwei Kindern, nicht mit der Klasse."
      },
      {
       "frage": "Warum hatte die Lehrerin die Idee?",
       "opt": [
        "Sie hatte zu wenig Zeit für einzelne Kinder.",
        "Die Bibliothek wollte mehr Besucher.",
        "Die Eltern hatten sich beschwert."
       ],
       "loesung": 0,
       "stelle": "nicht genug Zeit für jedes einzelne Kind",
       "erklaerung": "Die Klasse ist groß, deshalb fehlt Zeit. Bibliothek und Eltern sind nicht der Grund."
      },
      {
       "frage": "Wie läuft eine Lesestunde ab?",
       "opt": [
        "Die Paten geben den Kindern Noten.",
        "Die Paten lesen den Kindern vor allem selbst vor.",
        "Das Kind liest vor, danach spricht man über den Text."
       ],
       "loesung": 2,
       "stelle": "Zuerst liest das Kind laut vor, dann sprechen sie über die Geschichte.",
       "erklaerung": "Das Kind liest, nicht die Patin. Noten gibt es ausdrücklich nicht."
      },
      {
       "frage": "Was müssen die Paten vor dem Start machen?",
       "opt": [
        "Eine Prüfung an der Schule ablegen.",
        "Einen Kurs an der Volkshochschule besuchen.",
        "Eine Zeit lang in der Bibliothek arbeiten."
       ],
       "loesung": 1,
       "stelle": "besuchen sie einen kurzen Kurs bei der Volkshochschule",
       "erklaerung": "Vorher gibt es einen kurzen Kurs, keine Prüfung. Die Bibliothek ist nur der Ort."
      },
      {
       "frage": "Was braucht die Schule im Moment?",
       "opt": [
        "Mehr Lesepaten.",
        "Neue Kinderbücher.",
        "Einen größeren Raum."
       ],
       "loesung": 0,
       "stelle": "Gebraucht werden aber mindestens zwanzig.",
       "erklaerung": "Es gibt vierzehn Paten, gebraucht werden zwanzig. Es fehlen also Leute."
      }
     ]
    },
    {
     "nr": 5,
     "art": "textwahl",
     "text": {
      "sorte": "email",
      "quelle": "E-Mail",
      "titel": "Zurück aus den Bergen",
      "zeilen": [
       "Hi Tobias,",
       "wie geht es dir? Ich bin gerade aus dem Urlaub zurück. Wir waren eine Woche in den Bergen, und es war wunderschön. Wir sind jeden Tag __(1)__ gewandert. Nur am Mittwoch hat es den ganzen Tag geregnet. __(2)__ sind wir in ein kleines Museum gegangen.",
       "Das Hotel war einfach, aber sehr sauber. Die Besitzerin hat jeden Morgen frisches Brot gebacken, __(3)__ super geschmeckt hat. Ich habe ihr versprochen, __(4)__ wir nächstes Jahr wiederkommen.",
       "Jetzt habe ich eine Frage an dich. Du hast doch eine gute Kamera, __(5)__? Meine Handyfotos sind leider nicht so schön geworden. Im Oktober fahre ich mit meiner Familie an die Nordsee. Könntest du mir die Kamera für eine Woche __(6)__? Ich passe natürlich gut __(7)__ auf.",
       "Wenn du willst, können wir __(8)__ Freitag zusammen essen gehen. Dann zeige ich dir die Fotos. Ich lade __(9)__ ein! Schreib mir einfach, __(10)__ du Zeit hast.",
       "Viele Grüße",
       "Paula"
      ]
     },
     "aufgaben": [
      {
       "frage": "Was passt in Lücke 1?",
       "luecke": 1,
       "opt": [
        "viele",
        "viel",
        "vieles"
       ],
       "loesung": 1,
       "fest": true,
       "erklaerung": "„viel\" beschreibt hier das Verb „wandern\" und hat keine Endung."
      },
      {
       "frage": "Was passt in Lücke 2?",
       "luecke": 2,
       "opt": [
        "Obwohl",
        "Denn",
        "Deshalb"
       ],
       "loesung": 2,
       "fest": true,
       "erklaerung": "Folge: Es regnete, also gingen sie ins Museum. Nach „Deshalb\" kommt sofort das Verb."
      },
      {
       "frage": "Was passt in Lücke 3?",
       "luecke": 3,
       "opt": [
        "das",
        "die",
        "der"
       ],
       "loesung": 0,
       "fest": true,
       "erklaerung": "Das Relativpronomen bezieht sich auf „das Brot\", also „das\"."
      },
      {
       "frage": "Was passt in Lücke 4?",
       "luecke": 4,
       "opt": [
        "ob",
        "dass",
        "wenn"
       ],
       "loesung": 1,
       "fest": true,
       "erklaerung": "Nach „versprechen\" folgt ein Inhalt mit „dass\". Es ist keine offene Frage."
      },
      {
       "frage": "Was passt in Lücke 5?",
       "luecke": 5,
       "opt": [
        "aber",
        "oder",
        "und"
       ],
       "loesung": 1,
       "fest": true,
       "erklaerung": "„…, oder?\" am Satzende fragt nach Bestätigung: Stimmt das?"
      },
      {
       "frage": "Was passt in Lücke 6?",
       "luecke": 6,
       "opt": [
        "leiht",
        "geliehen",
        "leihen"
       ],
       "loesung": 2,
       "fest": true,
       "erklaerung": "Nach dem Modalverb „Könntest\" steht der Infinitiv am Ende."
      },
      {
       "frage": "Was passt in Lücke 7?",
       "luecke": 7,
       "opt": [
        "dafür",
        "darauf",
        "daran"
       ],
       "loesung": 1,
       "fest": true,
       "erklaerung": "„aufpassen auf\" etwas, also „darauf\"."
      },
      {
       "frage": "Was passt in Lücke 8?",
       "luecke": 8,
       "opt": [
        "am",
        "im",
        "um"
       ],
       "loesung": 0,
       "fest": true,
       "erklaerung": "Bei Wochentagen steht immer „am\": am Freitag."
      },
      {
       "frage": "Was passt in Lücke 9?",
       "luecke": 9,
       "opt": [
        "du",
        "dir",
        "dich"
       ],
       "loesung": 2,
       "fest": true,
       "erklaerung": "„jemanden einladen\" verlangt den Akkusativ: Ich lade dich ein."
      },
      {
       "frage": "Was passt in Lücke 10?",
       "luecke": 10,
       "opt": [
        "ob",
        "wenn",
        "dass"
       ],
       "loesung": 0,
       "fest": true,
       "erklaerung": "Offene Ja-Nein-Frage: Hast du Zeit oder nicht? Dann steht „ob\"."
      }
     ]
    },
    {
     "nr": 6,
     "art": "textwahl",
     "text": {
      "sorte": "email",
      "quelle": "E-Mail von Olga",
      "titel": "Kleine Bitte für August",
      "zeilen": [
       "Hallo!",
       "Ich fahre vom 3. bis zum 10. August mit meinem Mann nach Polen zu meinen Eltern. Leider kann unsere Katze Mimi nicht mitkommen. Könntest du sie in dieser Zeit einmal am Tag füttern? Das Futter steht in der Küche im Schrank neben dem Kühlschrank. Den Schlüssel bringe ich dir gern vorbei. Wann bist du am Freitag zu Hause? Unsere Tomaten auf dem Balkon sind übrigens gerade reif, du kannst so viele essen, wie du möchtest! Brauchst du aus Polen vielleicht etwas?",
       "Liebe Grüße",
       "Olga"
      ]
     },
     "aufgaben": [
      {
       "frage": "Olga nimmt ihre Katze mit nach Polen.",
       "opt": [
        "Richtig",
        "Falsch"
       ],
       "loesung": 1,
       "fest": true,
       "stelle": "Leider kann unsere Katze Mimi nicht mitkommen.",
       "erklaerung": "Die Katze bleibt zu Hause, deshalb braucht Olga Hilfe."
      },
      {
       "frage": "Wo steht das Katzenfutter?",
       "opt": [
        "Auf dem Balkon.",
        "Im Kühlschrank.",
        "In einem Küchenschrank."
       ],
       "loesung": 2,
       "stelle": "im Schrank neben dem Kühlschrank",
       "erklaerung": "Der Kühlschrank ist nur der Orientierungspunkt. Auf dem Balkon sind die Tomaten."
      }
     ]
    }
   ]
  },
  {
   "id": "ta2b1ll2",
   "titel": "Prüfungslauf 2",
   "minuten": 60,
   "teile": [
    {
     "nr": 1,
     "art": "anzeigenX",
     "anzeigen": [
      {
       "b": "a",
       "quelle": "Fahrradwerkstatt Speiche",
       "zeilen": [
        "Reparatur in 24 Stunden",
        "Gebrauchte Fahrräder ab 120 Euro",
        "Mit drei Monaten Garantie"
       ]
      },
      {
       "b": "b",
       "quelle": "Autowerkstatt Kraus",
       "zeilen": [
        "Winterreifen wechseln: 30 Euro",
        "Hauptuntersuchung im Haus",
        "Ersatzwagen möglich"
       ]
      },
      {
       "b": "c",
       "quelle": "Mitfahrgelegenheit",
       "zeilen": [
        "Fahre jeden Freitag nach Hamburg",
        "Zurück am Sonntagabend",
        "2 Plätze frei, 20 Euro pro Strecke"
       ]
      },
      {
       "b": "d",
       "quelle": "Fahrschule Grünlicht",
       "zeilen": [
        "Führerschein in den Ferien",
        "Theorie auch auf Englisch und Türkisch",
        "Anmeldung jederzeit"
       ]
      },
      {
       "b": "e",
       "quelle": "Wochenmarkt am Kirchplatz",
       "zeilen": [
        "Obst und Gemüse aus der Region",
        "Dienstag und Freitag",
        "7 bis 13 Uhr"
       ]
      },
      {
       "b": "f",
       "quelle": "Gemüsekiste Frischhof",
       "zeilen": [
        "Frisches Gemüse jede Woche bis an Ihre Haustür",
        "Jederzeit kündbar",
        "Erste Kiste zum halben Preis"
       ]
      },
      {
       "b": "g",
       "quelle": "Second-Hand-Laden Kleiderkiste",
       "zeilen": [
        "Kleidung für Kinder und Erwachsene",
        "Wir kaufen gut erhaltene Kleidung an",
        "Ankauf jeden Montag"
       ]
      },
      {
       "b": "h",
       "quelle": "Elektro Hofmann",
       "zeilen": [
        "Waschmaschinen und Kühlschränke",
        "Lieferung und Anschluss kostenlos",
        "Wir nehmen Ihr altes Gerät mit"
       ]
      }
     ],
     "aufgaben": [
      {
       "situation": "Ihre Waschmaschine ist kaputt. Sie brauchen eine neue, haben aber kein Auto für den Transport.",
       "loesung": "h",
       "erklaerung": "Elektro Hofmann liefert die Maschine kostenlos nach Hause."
      },
      {
       "situation": "Sie möchten am Wochenende Freunde in Hamburg besuchen und möglichst günstig hinfahren.",
       "loesung": "c",
       "erklaerung": "Die Mitfahrgelegenheit fährt freitags nach Hamburg und am Sonntag zurück."
      },
      {
       "situation": "Sie möchten jede Woche frisches Gemüse essen, haben aber kaum Zeit zum Einkaufen.",
       "loesung": "f",
       "erklaerung": "Die Gemüsekiste wird nach Hause gebracht. Zum Wochenmarkt muss man selbst gehen."
      },
      {
       "situation": "Ihre Kinder sind aus vielen Sachen herausgewachsen. Sie möchten die Kleidung verkaufen.",
       "loesung": "g",
       "erklaerung": "Der Second-Hand-Laden kauft gut erhaltene Kleidung an."
      },
      {
       "situation": "Sie möchten sich ein neues E-Bike kaufen.",
       "loesung": "x",
       "erklaerung": "Die Fahrradwerkstatt verkauft nur gebrauchte Fahrräder."
      }
     ]
    },
    {
     "nr": 2,
     "art": "textwahl",
     "text": {
      "sorte": "brief",
      "quelle": "Mitteilung der Stadt Rosenau",
      "titel": "Das Bürgerbüro zieht um",
      "zeilen": [
       "Das Bürgerbüro der Stadt Rosenau zieht um. Ab Montag, dem 10. März, finden Sie uns nicht mehr im Rathaus, sondern im neuen Servicezentrum in der Gartenstraße 5, direkt neben dem Busbahnhof.",
       "Wegen des Umzugs bleibt das Bürgerbüro vom 5. bis 7. März geschlossen. In dieser Zeit können keine Ausweise, Pässe oder Anmeldungen bearbeitet werden. Dokumente, die Sie schon beantragt haben, können Sie ab dem 10. März im neuen Gebäude abholen.",
       "Im Servicezentrum arbeiten wir nur noch mit Termin. So müssen Sie nicht mehr lange warten. Termine vereinbaren Sie online oder telefonisch unter 0761 55 20. Wer kein Internet hat, kann sich auch an der Information im Rathaus helfen lassen.",
       "Am neuen Gebäude gibt es nur wenige Parkplätze. Wir empfehlen deshalb, mit dem Bus zu kommen. Die Linien 2 und 7 halten direkt vor der Tür."
      ]
     },
     "aufgaben": [
      {
       "frage": "Ab dem 10. März ist das Bürgerbüro im Rathaus.",
       "opt": [
        "Richtig",
        "Falsch"
       ],
       "loesung": 1,
       "fest": true,
       "stelle": "nicht mehr im Rathaus, sondern im neuen Servicezentrum",
       "erklaerung": "Ab dem 10. März ist das Bürgerbüro in der Gartenstraße, nicht mehr im Rathaus."
      },
      {
       "frage": "Was passiert mit Pässen, die man schon beantragt hat?",
       "opt": [
        "Man kann sie ab dem 5. März im Rathaus abholen.",
        "Man bekommt sie ab dem 10. März im Servicezentrum.",
        "Man muss sie neu beantragen."
       ],
       "loesung": 1,
       "stelle": "können Sie ab dem 10. März im neuen Gebäude abholen",
       "erklaerung": "Ab dem 10. März holt man die Dokumente im neuen Gebäude ab. Vom 5. bis 7. März ist geschlossen."
      },
      {
       "frage": "Wie bekommt man im Servicezentrum einen Termin?",
       "opt": [
        "Nur über das Internet.",
        "Man kommt einfach vorbei und wartet.",
        "Online, telefonisch oder mit Hilfe im Rathaus."
       ],
       "loesung": 2,
       "stelle": "kann sich auch an der Information im Rathaus helfen lassen",
       "erklaerung": "Es gibt drei Wege: online, Telefon und Hilfe an der Information im Rathaus."
      },
      {
       "frage": "Was empfiehlt die Stadt?",
       "opt": [
        "Mit dem Auto zu kommen.",
        "Mit dem Bus zu fahren.",
        "Vom Rathaus zu Fuß zu gehen."
       ],
       "loesung": 1,
       "stelle": "Wir empfehlen deshalb, mit dem Bus zu kommen",
       "erklaerung": "Es gibt nur wenige Parkplätze, deshalb soll man den Bus nehmen."
      }
     ]
    },
    {
     "nr": 3,
     "art": "textwahl",
     "aufgaben": [
      {
       "frage": "Welcher Betreff passt zu E-Mail 1?",
       "opt": [
        "Ihr Zug fällt aus",
        "Mitfahrgelegenheit nach Leipzig",
        "Kein Training diese Woche",
        "Fahrrad zu verkaufen",
        "Anmeldung zum Kochkurs",
        "Wanderung am Sonntag",
        "Strafzettel bezahlen",
        "Neue Busfahrpläne ab Dezember"
       ],
       "loesung": 2,
       "fest": true,
       "text": {
        "sorte": "email",
        "quelle": "E-Mail von Jens, Trainer FC Wiesental",
        "titel": "E-Mail 1",
        "zeilen": [
         "Hallo zusammen, am Donnerstag ist die Sporthalle wegen einer Veranstaltung der Schule geschlossen.",
         "Deshalb können wir diese Woche leider nicht trainieren.",
         "Das nächste Training ist wie immer am Dienstag um 18 Uhr.",
         "Und denkt bitte daran: Am Samstag spielen wir um 15 Uhr gegen Rotbach, Treffpunkt ist eine halbe Stunde vorher. Sportliche Grüße, Jens"
        ]
       },
       "stelle": "Deshalb können wir diese Woche leider nicht trainieren",
       "erklaerung": "Das Training am Donnerstag fällt aus, weil die Halle geschlossen ist."
      },
      {
       "frage": "Welcher Betreff passt zu E-Mail 2?",
       "opt": [
        "Ihr Zug fällt aus",
        "Mitfahrgelegenheit nach Leipzig",
        "Kein Training diese Woche",
        "Fahrrad zu verkaufen",
        "Anmeldung zum Kochkurs",
        "Wanderung am Sonntag",
        "Strafzettel bezahlen",
        "Neue Busfahrpläne ab Dezember"
       ],
       "loesung": 5,
       "fest": true,
       "text": {
        "sorte": "email",
        "quelle": "E-Mail von Karin Vogel",
        "titel": "E-Mail 2",
        "zeilen": [
         "Hallo ihr Lieben, wer kommt am Sonntag mit in die Berge?",
         "Wir treffen uns um 9 Uhr am Parkplatz am Waldrand und laufen ungefähr vier Stunden bis zur Hütte, dort können wir gemütlich essen.",
         "Nehmt bitte gute Schuhe und eine Regenjacke mit.",
         "Sagt mir bis Freitag Bescheid, ob ihr dabei seid! Liebe Grüße, Karin"
        ]
       },
       "stelle": "laufen ungefähr vier Stunden bis zur Hütte",
       "erklaerung": "Karin lädt zu einer Wanderung am Sonntag ein."
      },
      {
       "frage": "Welcher Betreff passt zu E-Mail 3?",
       "opt": [
        "Ihr Zug fällt aus",
        "Mitfahrgelegenheit nach Leipzig",
        "Kein Training diese Woche",
        "Fahrrad zu verkaufen",
        "Anmeldung zum Kochkurs",
        "Wanderung am Sonntag",
        "Strafzettel bezahlen",
        "Neue Busfahrpläne ab Dezember"
       ],
       "loesung": 7,
       "fest": true,
       "text": {
        "sorte": "email",
        "quelle": "E-Mail von Verkehrsbetriebe Talstadt",
        "titel": "E-Mail 3",
        "zeilen": [
         "Sehr geehrte Fahrgäste, ab dem 14. Dezember fahren die Busse der Linien 3 und 5 alle 15 Minuten statt wie bisher alle 20 Minuten.",
         "Auch abends fahren die Busse länger, bis kurz nach Mitternacht.",
         "Die neuen Fahrpläne hängen ab Anfang Dezember an allen Haltestellen, Sie finden sie auch auf unserer Internetseite.",
         "Ihre Verkehrsbetriebe Talstadt"
        ]
       },
       "stelle": "Die neuen Fahrpläne hängen ab Anfang Dezember an allen Haltestellen",
       "erklaerung": "Ab Dezember gibt es neue Zeiten für die Busse."
      },
      {
       "frage": "Welcher Betreff passt zu E-Mail 4?",
       "opt": [
        "Ihr Zug fällt aus",
        "Mitfahrgelegenheit nach Leipzig",
        "Kein Training diese Woche",
        "Fahrrad zu verkaufen",
        "Anmeldung zum Kochkurs",
        "Wanderung am Sonntag",
        "Strafzettel bezahlen",
        "Neue Busfahrpläne ab Dezember"
       ],
       "loesung": 1,
       "fest": true,
       "text": {
        "sorte": "email",
        "quelle": "E-Mail von Paul",
        "titel": "E-Mail 4",
        "zeilen": [
         "Hi Marta, du hattest doch gefragt, ob jemand am Freitag nach Leipzig fährt.",
         "Ich fahre um 17 Uhr mit dem Auto los und habe noch einen Platz frei.",
         "Du musst nur etwas für das Benzin bezahlen, ungefähr 15 Euro.",
         "Wir können uns am Hauptbahnhof treffen, das ist für dich bestimmt am einfachsten. Sag mir einfach Bescheid! Paul"
        ]
       },
       "stelle": "habe noch einen Platz frei",
       "erklaerung": "Paul bietet Marta einen Platz in seinem Auto nach Leipzig an."
      }
     ]
    },
    {
     "nr": 4,
     "art": "textwahl",
     "text": {
      "sorte": "zeitung",
      "quelle": "Westtaler Rundschau",
      "titel": "Freitags bleibt die Werkstatt zu",
      "zeilen": [
       "Bei der Tischlerei Brunner in Westtal ist freitags niemand in der Werkstatt. Seit einem Jahr arbeiten die neun Mitarbeiter nur noch von Montag bis Donnerstag. Statt acht Stunden arbeiten sie an diesen Tagen neuneinhalb Stunden. Der Lohn ist gleich geblieben.",
       "Chef Thomas Brunner hatte vor allem ein Problem: Er fand keine Leute. „Zwei Jahre lang habe ich einen Tischler gesucht. Auf meine Anzeigen hat sich niemand gemeldet“, erzählt er. Junge Handwerker gehen lieber in große Firmen, wo sie mehr verdienen. Mehr Geld konnte er nicht bezahlen. Also wollte er etwas anderes anbieten: mehr Freizeit.",
       "Am Anfang waren nicht alle begeistert. Vor allem die älteren Mitarbeiter hatten Sorge, dass die langen Tage zu anstrengend sind. Brunner machte deshalb zuerst einen Test für drei Monate. Danach durften alle abstimmen. Nur einer war dagegen.",
       "Heute sind die meisten sehr zufrieden. Der 29-jährige Can Demir nutzt den freien Freitag für seine kleine Tochter. „Früher habe ich sie nur am Wochenende richtig gesehen. Jetzt haben wir einen ganzen Papa-Tag“, sagt er. Andere erledigen am Freitag Arztbesuche oder Termine bei Behörden, damit das Wochenende frei bleibt.",
       "Und die Kunden? Die meisten haben kein Problem damit. Für Notfälle gibt es am Freitag eine Telefonnummer, und einer der Mitarbeiter hat Bereitschaft. Das passiert aber nur selten.",
       "Inzwischen hat Brunner sogar zwei neue Mitarbeiter gefunden. Beide haben gesagt, dass die Vier-Tage-Woche der wichtigste Grund für ihre Bewerbung war. Zurück zur Fünf-Tage-Woche möchte in der Werkstatt niemand mehr."
      ]
     },
     "aufgaben": [
      {
       "frage": "Was hat sich in der Tischlerei geändert?",
       "opt": [
        "Die Mitarbeiter verdienen weniger.",
        "Die Mitarbeiter arbeiten an vier langen Tagen.",
        "Die Werkstatt ist montags geschlossen."
       ],
       "loesung": 1,
       "stelle": "arbeiten die neun Mitarbeiter nur noch von Montag bis Donnerstag",
       "erklaerung": "Vier Tage mit je neuneinhalb Stunden. Der Lohn ist gleich, zu ist am Freitag."
      },
      {
       "frage": "Warum hat Thomas Brunner die Vier-Tage-Woche eingeführt?",
       "opt": [
        "Er hat keine neuen Mitarbeiter gefunden.",
        "Er wollte Geld sparen.",
        "Die Mitarbeiter hatten es verlangt."
       ],
       "loesung": 0,
       "stelle": "Er fand keine Leute.",
       "erklaerung": "Mehr Lohn konnte er nicht zahlen, deshalb bot er mehr Freizeit an."
      },
      {
       "frage": "Was hat Brunner vor der Entscheidung gemacht?",
       "opt": [
        "Er hat die Kunden gefragt.",
        "Er hat das Modell drei Monate lang getestet.",
        "Er hat ältere Mitarbeiter entlassen."
       ],
       "loesung": 1,
       "stelle": "machte deshalb zuerst einen Test für drei Monate",
       "erklaerung": "Erst der Test, dann die Abstimmung im Team. Die Kunden wurden nicht gefragt."
      },
      {
       "frage": "Was macht Can Demir am Freitag?",
       "opt": [
        "Er geht zu Behörden.",
        "Er arbeitet in einer anderen Firma.",
        "Er verbringt den Tag mit seiner Tochter."
       ],
       "loesung": 2,
       "stelle": "nutzt den freien Freitag für seine kleine Tochter",
       "erklaerung": "Behördentermine machen „andere\" Mitarbeiter. Can Demir hat einen Papa-Tag."
      },
      {
       "frage": "Was passiert, wenn ein Kunde am Freitag einen Notfall hat?",
       "opt": [
        "Er muss bis Montag warten.",
        "Er kann eine Nummer anrufen.",
        "Der Chef kommt selbst vorbei."
       ],
       "loesung": 1,
       "stelle": "Für Notfälle gibt es am Freitag eine Telefonnummer",
       "erklaerung": "Es gibt eine Notfallnummer, und ein Mitarbeiter hat Bereitschaft, nicht unbedingt der Chef."
      }
     ]
    },
    {
     "nr": 5,
     "art": "textwahl",
     "text": {
      "sorte": "brief",
      "quelle": "Brief",
      "titel": "Kein Platz im Fahrradkeller",
      "zeilen": [
       "Sehr geehrte Damen und Herren,",
       "mein Name ist Daniela Rossi, und ich wohne seit Juli in der Gartenstraße 8. Ich schreibe Ihnen, __(1)__ ich ein Problem mit meinem Fahrrad habe.",
       "Im Moment steht das Fahrrad im Treppenhaus, weil im Fahrradkeller kein Platz mehr ist. Ein Nachbar hat sich schon __(2)__ beschwert. Das verstehe ich, aber in meine Wohnung kann ich das Fahrrad nicht mitnehmen. Sie liegt im vierten Stock, und es gibt keinen __(3)__.",
       "Im Keller stehen viele alte Fahrräder, __(4)__ seit Jahren niemand mehr benutzt. Wäre es möglich, diese Räder zu entfernen? Dann __(5)__ es genug Platz für alle.",
       "Ich habe auch eine Idee: Man könnte einen Zettel im Treppenhaus aufhängen. Wer sein Fahrrad behalten möchte, __(6)__ seinen Namen daran festmachen. Die anderen Räder könnte man nach vier Wochen __(7)__ Hof stellen.",
       "Ich helfe gern __(8)__, wenn Sie Unterstützung brauchen. Bitte teilen Sie mir mit, __(9)__ Sie darüber denken. Vielen Dank __(10)__ Voraus!",
       "Mit freundlichen Grüßen",
       "Daniela Rossi"
      ]
     },
     "aufgaben": [
      {
       "frage": "Was passt in Lücke 1?",
       "luecke": 1,
       "opt": [
        "denn",
        "weil",
        "deshalb"
       ],
       "loesung": 1,
       "fest": true,
       "erklaerung": "Das Verb „habe\" steht am Ende, also ein Nebensatz mit „weil\"."
      },
      {
       "frage": "Was passt in Lücke 2?",
       "luecke": 2,
       "opt": [
        "darüber",
        "davon",
        "dafür"
       ],
       "loesung": 0,
       "fest": true,
       "erklaerung": "„sich beschweren über\" etwas, also „darüber\"."
      },
      {
       "frage": "Was passt in Lücke 3?",
       "luecke": 3,
       "opt": [
        "Aufzüge",
        "Aufzug",
        "Aufzuges"
       ],
       "loesung": 1,
       "fest": true,
       "erklaerung": "„keinen\" ist Akkusativ Singular maskulin: keinen Aufzug."
      },
      {
       "frage": "Was passt in Lücke 4?",
       "luecke": 4,
       "opt": [
        "denen",
        "der",
        "die"
       ],
       "loesung": 2,
       "fest": true,
       "erklaerung": "Relativpronomen für „Fahrräder\" (Plural) als Akkusativobjekt: die."
      },
      {
       "frage": "Was passt in Lücke 5?",
       "luecke": 5,
       "opt": [
        "geben",
        "gibt",
        "gibst"
       ],
       "loesung": 1,
       "fest": true,
       "erklaerung": "Feste Form „es gibt\". Das Subjekt ist „es\", also „gibt\"."
      },
      {
       "frage": "Was passt in Lücke 6?",
       "luecke": 6,
       "opt": [
        "sollten",
        "solltest",
        "sollte"
       ],
       "loesung": 2,
       "fest": true,
       "erklaerung": "„Wer …\" ist dritte Person Singular: Wer …, der sollte. Also „sollte\"."
      },
      {
       "frage": "Was passt in Lücke 7?",
       "luecke": 7,
       "opt": [
        "im",
        "in den",
        "in dem"
       ],
       "loesung": 1,
       "fest": true,
       "erklaerung": "„stellen\" fragt: wohin? Akkusativ: in den Hof."
      },
      {
       "frage": "Was passt in Lücke 8?",
       "luecke": 8,
       "opt": [
        "dabei",
        "damit",
        "dafür"
       ],
       "loesung": 0,
       "fest": true,
       "erklaerung": "„dabei helfen\" heißt: bei dieser Arbeit helfen."
      },
      {
       "frage": "Was passt in Lücke 9?",
       "luecke": 9,
       "opt": [
        "wie",
        "dass",
        "was"
       ],
       "loesung": 2,
       "fest": true,
       "erklaerung": "Man fragt: Was denken Sie darüber? Im Nebensatz bleibt „was\"."
      },
      {
       "frage": "Was passt in Lücke 10?",
       "luecke": 10,
       "opt": [
        "in",
        "im",
        "am"
       ],
       "loesung": 1,
       "fest": true,
       "erklaerung": "Feste Formel: „Vielen Dank im Voraus\"."
      }
     ]
    },
    {
     "nr": 6,
     "art": "textwahl",
     "text": {
      "sorte": "email",
      "quelle": "E-Mail von Karin Seidel",
      "titel": "Abschied von Herrn Wendt",
      "zeilen": [
       "Lieber Herr Novak,",
       "wie Sie wissen, verlässt uns unser Kollege Herr Wendt Ende Mai, weil er in Rente geht. Wir möchten ihm ein Geschenk von der ganzen Abteilung machen. Jeder gibt zehn Euro. Machen Sie mit? Außerdem planen wir eine kleine Feier am letzten Freitag im Mai nach der Arbeit in der Kantine. Haben Sie eine Idee, was wir ihm schenken könnten? Sie arbeiten ja schon lange mit ihm zusammen. Und könnten Sie bei der Feier eine kurze Rede halten?",
       "Viele Grüße",
       "Karin Seidel"
      ]
     },
     "aufgaben": [
      {
       "frage": "Herr Wendt hört Ende Mai auf zu arbeiten.",
       "opt": [
        "Richtig",
        "Falsch"
       ],
       "loesung": 0,
       "fest": true,
       "stelle": "weil er in Rente geht",
       "erklaerung": "„In Rente gehen\" heißt: nicht mehr arbeiten."
      },
      {
       "frage": "Wo soll die Feier stattfinden?",
       "opt": [
        "In einem Restaurant.",
        "Im Büro von Herrn Wendt.",
        "In der Kantine."
       ],
       "loesung": 2,
       "stelle": "nach der Arbeit in der Kantine",
       "erklaerung": "Die Feier ist nach der Arbeit in der Kantine, nicht in einem Restaurant."
      }
     ]
    }
   ]
  }
 ]
};
