/* ============================================================
   deutschoderwas club — LESEN + SPRACHBAUSTEINE telc Deutsch B2·C1 Beruf

   Aufbau nach dem offiziellen telc-Format (Übungstest 1 B2·C1 Beruf,
   geprüft 03.11.2026). Alle Texte und Aufgaben eigene, Kontext
   Arbeitswelt. Erzeugt aus scratchpad/telcb2c1 mit bau.js.
   ============================================================ */

window.LESEN_TELC_B2C1 = {
 "niveau": "telcB2C1",
 "pruefung": "telc Deutsch B2·C1 Beruf",
 "minuten": 70,
 "punkte": 45,
 "intro": "Leseverstehen (50 Minuten) und Sprachbausteine (20 Minuten): ein Forum, ein langer betrieblicher Bericht, ein Sachtext, dazu ein Gespräch und ein Geschäftsbrief mit Lücken. Zusammen mit dem Hören zählen sie als ein Block: B2 ab 32, C1 ab 50 von 70 Punkten.",
 "stufen": [
  {
   "nr": 1,
   "titel": "Lesestrategien",
   "zeichen": "🧭",
   "was": "Forum zuordnen, lange Berichte gezielt lesen."
  },
  {
   "nr": 2,
   "titel": "Genau lesen und Sprache",
   "zeichen": "🔍",
   "was": "Richtig/falsch sauber prüfen, Sprachbausteine auf B2/C1."
  },
  {
   "nr": 3,
   "titel": "Die Aufgabentypen",
   "zeichen": "🎯",
   "was": "Alle fünf Teile einzeln: drei Leseteile, zwei Teile Sprachbausteine."
  },
  {
   "nr": 4,
   "titel": "Die ganze Prüfung",
   "zeichen": "⏱️",
   "was": "45 Aufgaben, siebzig Minuten mit Uhr."
  }
 ],
 "bloecke": [
  {
   "id": "tbc1l1",
   "stufe": 1,
   "titel": "Forum: Einträge und Antworten zuordnen",
   "kurz": "Eine Antwort passt nur, wenn sie genau auf die eigentliche Frage eingeht",
   "ziel": "Nach diesem Block findest du in einem Forumseintrag die eigentliche Frage, erkennst Antworten, die nur das Thema streifen, und weißt, wann du x wählst.",
   "zeichen": "💬",
   "farbe": "turq",
   "aufgaben": [
    {
     "art": "wahl",
     "frage": "Eintrag: „Ich arbeite in einem Büro mit zwölf Leuten und möchte auf 25 Stunden reduzieren. Kann ich das verlangen?“ Antwort: „Einen Anspruch auf Teilzeit haben Sie erst, wenn Ihr Arbeitgeber mehr als 15 Mitarbeiter beschäftigt.“ Passt die Antwort?",
     "opt": [
      "Nein, die Antwort sagt ja, dass es nicht geht.",
      "Ja, sie beantwortet die Frage, auch wenn die Antwort „Nein“ lautet.",
      "Nein, die Antwort hat mit dem Eintrag nichts zu tun."
     ],
     "loesung": 1,
     "erklaerung": "Eine passende Antwort muss nicht positiv sein. Wichtig ist, dass sie die konkrete Frage löst."
    },
    {
     "art": "wahl",
     "frage": "Was bedeutet „x“ in Teil 1 des Leseverstehens?",
     "opt": [
      "Für diesen Eintrag passt keine der acht Antworten.",
      "Der Eintrag ist unklar formuliert.",
      "Mehrere Antworten passen gleich gut."
     ],
     "loesung": 0,
     "erklaerung": "Genau ein Eintrag bleibt ohne passende Antwort. Dort trägst du x ein."
    },
    {
     "art": "wahl",
     "frage": "Eintrag: „Ich habe eine Abmahnung bekommen. Darf ich nachsehen, ob sie schon in meiner Personalakte liegt?“ Welche Antwort passt?",
     "opt": [
      "„Gegen eine Abmahnung können Sie eine Gegendarstellung schreiben.“",
      "„Ihre Personalakte dürfen Sie jederzeit einsehen.“",
      "„Eine Abmahnung müssen Sie nicht unterschreiben.“"
     ],
     "loesung": 1,
     "erklaerung": "Gefragt ist nach der Einsicht in die Akte. Das Wort „Abmahnung“ in a und c ist die Falle."
    },
    {
     "art": "wahl",
     "frage": "Wie gehst du in Teil 1 am besten vor?",
     "opt": [
      "Ich suche in den Antworten dieselben Wörter wie im Eintrag.",
      "Ich lese zuerst alle Antworten genau und dann die Einträge.",
      "Ich unterstreiche in jedem Eintrag die eigentliche Frage und suche dann eine Antwort, die genau darauf eingeht."
     ],
     "loesung": 2,
     "erklaerung": "Gleiche Wörter führen oft in die Falle. Erst die Frage verstehen, dann vergleichen."
    },
    {
     "art": "wahl",
     "frage": "Eintrag: „Nächste Woche habe ich bis 23 Uhr Spätschicht und am nächsten Morgen um 6 Uhr wieder Frühschicht. Wie viel Ruhe steht mir zu?“ Welche Art Antwort suchst du?",
     "opt": [
      "Eine Antwort über Pausen während der Schicht.",
      "Eine Antwort über die Zeit zwischen zwei Schichten.",
      "Eine Antwort über Zuschläge für Nachtarbeit."
     ],
     "loesung": 1,
     "erklaerung": "Pause und Ruhezeit sind zwei verschiedene Dinge. Gefragt ist die Ruhezeit."
    },
    {
     "art": "wahl",
     "frage": "Eintrag: „Ich mache privat eine Weiterbildung, mein Chef soll davon nichts wissen. Kann ich die Kosten irgendwie absetzen?“ Welche Antwort passt?",
     "opt": [
      "„Selbst bezahlte Weiterbildung können Sie als Werbungskosten in der Steuererklärung angeben.“",
      "„Bildungsurlaub beantragen Sie rechtzeitig beim Arbeitgeber.“",
      "„Ihr Arbeitgeber muss sich an den Kosten beteiligen.“"
     ],
     "loesung": 0,
     "erklaerung": "„Absetzen“ heißt Steuern sparen. Die anderen Antworten brauchen den Arbeitgeber, das will die Person nicht."
    },
    {
     "art": "wahl",
     "frage": "Eintrag: „Ich wurde gekündigt und überlege zu klagen. Was kostet ein Verfahren vor dem Arbeitsgericht?“ Die einzige Antwort zum Thema lautet: „Gegen eine Kündigung können Sie nur innerhalb von drei Wochen klagen.“ Was tust du?",
     "opt": [
      "Ich nehme diese Antwort, weil es um eine Klage geht.",
      "Ich nehme diese Antwort, weil die Frist wichtiger ist als die Kosten.",
      "Ich wähle x, denn gefragt sind die Kosten, die Antwort nennt nur die Frist."
     ],
     "loesung": 2,
     "erklaerung": "Das Thema stimmt, die Frage wird aber nicht beantwortet. Genau so sieht der x-Eintrag oft aus."
    }
   ]
  },
  {
   "id": "tbc1l2",
   "stufe": 2,
   "titel": "Lange Berichte: Aufbau, Zahlen, Ursache und Folge",
   "kurz": "Wer den Aufbau eines Berichts kennt, findet die Stelle schneller und rechnet nicht falsch",
   "ziel": "Nach diesem Block weißt du, wo in einem Bericht Ziele, Ergebnisse und Pläne stehen, liest Zahlen genau und trennst Ursache und Folge.",
   "zeichen": "📊",
   "farbe": "gold",
   "aufgaben": [
    {
     "art": "wahl",
     "frage": "In welchem Teil eines Projektberichts steht meistens, was als Nächstes geplant ist?",
     "opt": [
      "In der Ausgangslage.",
      "Bei den Ergebnissen.",
      "Im Ausblick oder in der Empfehlung."
     ],
     "loesung": 2,
     "erklaerung": "Berichte gehen meist so vor: Anlass, Ziel, Vorgehen, Ergebnis, Probleme, Ausblick."
    },
    {
     "art": "wahl",
     "frage": "Text: „Die Zahl der Reklamationen ging von 240 auf 180 zurück.“ Welche Aussage stimmt?",
     "opt": [
      "Die Reklamationen haben sich halbiert.",
      "Die Reklamationen sind um ein Viertel gesunken.",
      "Die Reklamationen sind um 180 gesunken."
     ],
     "loesung": 1,
     "erklaerung": "60 weniger von 240 sind ein Viertel. 180 ist der neue Wert, nicht der Rückgang."
    },
    {
     "art": "wahl",
     "frage": "Text: „Die Kosten lagen mit 84.000 Euro knapp unter dem Budget.“ Welche Aussage stimmt?",
     "opt": [
      "Das Budget wurde überschritten.",
      "Das Projekt war etwas billiger als geplant.",
      "Das Budget betrug genau 84.000 Euro."
     ],
     "loesung": 1,
     "erklaerung": "„Knapp unter dem Budget“ heißt: etwas weniger ausgegeben als geplant."
    },
    {
     "art": "wahl",
     "frage": "Text: „Weil viele Ersatzteile im Katalog falsch benannt waren, griffen die Kollegen wieder zum Telefon.“ Was ist die Ursache?",
     "opt": [
      "Die Kollegen telefonierten lieber.",
      "Falsche Bezeichnungen im Katalog.",
      "Der Katalog war zu teuer."
     ],
     "loesung": 1,
     "erklaerung": "Nach „weil“ steht die Ursache, im Hauptsatz die Folge."
    },
    {
     "art": "wahl",
     "frage": "Text: „Den Ausschlag gab nicht der Preis, sondern die einfache Bedienung.“ Warum wurde das System gewählt?",
     "opt": [
      "Wegen der einfachen Bedienung.",
      "Weil es das billigste Angebot war.",
      "Wegen Preis und Bedienung gleichermaßen."
     ],
     "loesung": 0,
     "erklaerung": "„Nicht …, sondern …“ schließt das Erste aus. Es zählt, was nach „sondern“ steht."
    },
    {
     "art": "wahl",
     "frage": "Text: „Die Fehltage sanken. Ob das an der neuen Regelung liegt, lässt sich nicht sicher sagen.“ Aufgabe: Der Bericht führt den Rückgang …",
     "opt": [
      "eindeutig auf die neue Regelung zurück.",
      "nicht sicher auf die neue Regelung zurück.",
      "auf eine Grippewelle zurück."
     ],
     "loesung": 1,
     "erklaerung": "Vorsichtige Formulierungen wie „lässt sich nicht sicher sagen“ sind wichtig. Der Zusammenhang bleibt offen."
    },
    {
     "art": "wahl",
     "frage": "Text: „Die Durchlaufzeit liegt mit 1,6 Tagen unter dem Zielwert von zwei Tagen.“ Was heißt das?",
     "opt": [
      "Das Ziel wurde nicht erreicht.",
      "Das Ziel wurde genau erreicht.",
      "Das Ziel wurde übertroffen."
     ],
     "loesung": 2,
     "erklaerung": "Bei einer Zeit ist weniger besser. „Unter dem Zielwert“ heißt hier: besser als geplant."
    },
    {
     "art": "wahl",
     "frage": "In Teil 2 folgen die Aufgaben der Reihenfolge des Textes. Was hilft dir das?",
     "opt": [
      "Die Lösung zu Aufgabe 5 steht meist hinter der Lösung zu Aufgabe 4.",
      "Jede Aufgabe gehört zu genau einem Absatz.",
      "Die letzte Aufgabe fragt immer nach dem Titel."
     ],
     "loesung": 0,
     "erklaerung": "Du kannst den Text Schritt für Schritt abarbeiten und musst nicht hin und her springen."
    }
   ]
  },
  {
   "id": "tbc1l3",
   "stufe": 2,
   "titel": "Sachtexte: richtig oder falsch sauber prüfen",
   "kurz": "Kleine Wörter wie „mehr als“, „nur“, „in der Regel“ entscheiden",
   "ziel": "Nach diesem Block vergleichst du Aussagen Wort für Wort mit dem Text und fällst nicht auf Grenzen, Ausnahmen und Einschränkungen herein.",
   "zeichen": "⚖️",
   "farbe": "lila",
   "aufgaben": [
    {
     "art": "wahl",
     "frage": "Text: „Arbeitgeber mit mehr als 20 Beschäftigten müssen einen Ausschuss bilden.“ Aussage: „Ab 20 Beschäftigten ist ein Ausschuss Pflicht.“",
     "opt": [
      "richtig",
      "falsch"
     ],
     "loesung": 1,
     "erklaerung": "„Mehr als 20“ beginnt bei 21. „Ab 20“ schließt die 20 mit ein."
    },
    {
     "art": "wahl",
     "frage": "Text: „Das Angebot ist freiwillig. Wer ablehnt, darf nicht benachteiligt werden.“ Aussage: „Beschäftigte müssen am Gespräch teilnehmen.“",
     "opt": [
      "richtig",
      "falsch"
     ],
     "loesung": 1,
     "erklaerung": "Freiwillig heißt: Man kann ablehnen."
    },
    {
     "art": "wahl",
     "frage": "Text: „Eine Pflicht, anonyme Meldungen zu ermöglichen, besteht nicht. Gehen anonyme Hinweise ein, sollen sie aber bearbeitet werden.“ Aussage: „Auch anonyme Hinweise sollen bearbeitet werden.“",
     "opt": [
      "richtig",
      "falsch"
     ],
     "loesung": 0,
     "erklaerung": "Lies beide Sätze: Wichtig ist der zweite Satz mit „aber“."
    },
    {
     "art": "wahl",
     "frage": "Text: „In der Regel nimmt auch der Betriebsarzt teil.“ Aussage: „Der Betriebsarzt ist immer dabei.“",
     "opt": [
      "richtig",
      "falsch"
     ],
     "loesung": 1,
     "erklaerung": "„In der Regel“ erlaubt Ausnahmen, „immer“ nicht."
    },
    {
     "art": "wahl",
     "frage": "Text: „Gewählt werden kann jeder, der dem Betrieb seit mindestens sechs Monaten angehört.“ Aussage: „Wer seit einem Jahr im Betrieb ist, kann gewählt werden.“",
     "opt": [
      "richtig",
      "falsch"
     ],
     "loesung": 0,
     "erklaerung": "Ein Jahr ist mehr als sechs Monate, die Bedingung ist erfüllt."
    },
    {
     "art": "wahl",
     "frage": "Text: „Die Protokolle können am Schwarzen Brett veröffentlicht werden, eine Pflicht dazu besteht nicht.“ Aussage: „Die Protokolle dürfen nicht veröffentlicht werden.“",
     "opt": [
      "richtig",
      "falsch"
     ],
     "loesung": 1,
     "erklaerung": "„Keine Pflicht“ heißt nicht „verboten“. Es ist erlaubt, aber nicht vorgeschrieben."
    },
    {
     "art": "wahl",
     "frage": "Eine Aussage benutzt fast dieselben Wörter wie der Text, sagt aber „nur“ statt „auch“. Was tust du?",
     "opt": [
      "Ich wähle „richtig“, weil die Wörter übereinstimmen.",
      "Ich prüfe genau, ob der Text wirklich eine Einschränkung macht.",
      "Ich lasse die Aufgabe aus."
     ],
     "loesung": 1,
     "erklaerung": "Ein einziges Wort wie „nur“ kann die Aussage falsch machen."
    }
   ]
  },
  {
   "id": "tbc1l4",
   "stufe": 1,
   "titel": "Sprachbausteine: Konnektoren und feste Verbindungen",
   "kurz": "Erst auf Satzbau und feste Präpositionen achten, dann auf die Bedeutung",
   "ziel": "Nach diesem Block erkennst du an der Stellung des Verbs den richtigen Konnektor und kennst wichtige Nomen-Verb-Verbindungen aus Geschäftsbriefen.",
   "zeichen": "🧩",
   "farbe": "rot",
   "aufgaben": [
    {
     "art": "wahl",
     "frage": "„Die Lieferung kam zu spät, ___ wir den Termin beim Kunden verschieben mussten.“",
     "opt": [
      "sodass",
      "damit",
      "obwohl"
     ],
     "loesung": 0,
     "erklaerung": "Eine Folge mit Verb am Ende: „sodass“. „damit“ nennt ein Ziel."
    },
    {
     "art": "wahl",
     "frage": "„Wir bitten Sie, uns die Unterlagen bis Freitag ___ Verfügung zu stellen.“",
     "opt": [
      "in",
      "zur",
      "zu"
     ],
     "loesung": 1,
     "erklaerung": "Feste Verbindung: zur Verfügung stellen."
    },
    {
     "art": "wahl",
     "frage": "„Ich nehme ___ auf unser Telefonat vom 4. Mai.“",
     "opt": [
      "Stellung",
      "Abstand",
      "Bezug"
     ],
     "loesung": 2,
     "erklaerung": "Bezug nehmen auf etwas. Stellung nimmt man „zu“ etwas."
    },
    {
     "art": "wahl",
     "frage": "„___ der hohen Nachfrage können wir die Ware erst im März liefern.“",
     "opt": [
      "Trotz",
      "Aufgrund",
      "Statt"
     ],
     "loesung": 1,
     "erklaerung": "Die Nachfrage ist der Grund für die späte Lieferung."
    },
    {
     "art": "wahl",
     "frage": "„Wir sind uns ___ bewusst, dass die Verzögerung ärgerlich ist.“",
     "opt": [
      "darüber",
      "dessen",
      "davon"
     ],
     "loesung": 1,
     "erklaerung": "sich einer Sache bewusst sein verlangt im formellen Brief den Genitiv: „dessen“."
    },
    {
     "art": "wahl",
     "frage": "„Der Kunde hat ___ hingewiesen, dass die Rechnung fehlerhaft ist.“",
     "opt": [
      "darauf",
      "daran",
      "darüber"
     ],
     "loesung": 0,
     "erklaerung": "hinweisen auf etwas wird zu „darauf“."
    },
    {
     "art": "wahl",
     "frage": "„Die neue Regelung soll ab Januar ___ Anwendung kommen.“",
     "opt": [
      "in",
      "unter",
      "zur"
     ],
     "loesung": 2,
     "erklaerung": "Nomen-Verb-Verbindung: zur Anwendung kommen."
    },
    {
     "art": "wahl",
     "frage": "Bei einer Lücke mit drei Präpositionen achtest du zuerst auf …",
     "opt": [
      "das Nomen oder Verb, das eine feste Präposition verlangt.",
      "die Länge der Wörter.",
      "die Präposition, die im Text am häufigsten vorkommt."
     ],
     "loesung": 0,
     "erklaerung": "Viele Lücken prüfen feste Verbindungen. Das Signalwort steht meist direkt daneben."
    }
   ]
  }
 ],
 "teile": [
  {
   "nr": 1,
   "art": "anzeigenX",
   "name": "Lesen: Internetforum",
   "kurz": "Sechs Einträge, acht Antworten, einmal passt keine",
   "was": "Sechs Einträge in einem Forum für Berufstätige und acht Antworten. Zu jedem Eintrag suchst du die passende Antwort. Für einen passt keine: dann x.",
   "tipp": "Prüf die genaue Lage im Eintrag: Wer schreibt, was ist schon passiert, was will die Person wissen? Eine Antwort zum richtigen Thema kann trotzdem nicht passen.",
   "zeichen": "💬",
   "farbe": "turq",
   "punkte": 6,
   "runden": [
    {
     "id": "bc1l1s1",
     "titel": "Forum Arbeit & Familie: Elternzeit und Teilzeit",
     "anzeigen": [
      {
       "b": "a",
       "quelle": "Petra H., Sachbearbeiterin Personal",
       "zeilen": [
        "Die Elternzeit müssen Sie schriftlich verlangen, und zwar mit Ihrer eigenhändigen Unterschrift auf Papier.",
        "Eine E-Mail oder ein Fax erfüllt diese Form nicht, auch wenn die Personalabteilung den Eingang bestätigt hat.",
        "Holen Sie das also möglichst schnell nach, für die Zeit bis zum dritten Geburtstag mindestens sieben Wochen vor Beginn."
       ],
       "motiv": "buero"
      },
      {
       "b": "b",
       "quelle": "Thomas W., Fachanwalt für Arbeitsrecht",
       "zeilen": [
        "Während der Elternzeit dürfen Sie bis zu 32 Stunden in der Woche arbeiten.",
        "Einen Rechtsanspruch auf diese Teilzeit haben Sie aber nur, wenn Ihr Arbeitgeber in der Regel mehr als 15 Mitarbeiter beschäftigt.",
        "In kleineren Betrieben bleibt Ihnen nur das Gespräch, durchsetzen können Sie die Teilzeit dort nicht."
       ],
       "motiv": "buero"
      },
      {
       "b": "c",
       "quelle": "Monika S., Lohnbuchhalterin",
       "zeilen": [
        "Für jeden vollen Kalendermonat in Elternzeit darf der Arbeitgeber Ihren Jahresurlaub um ein Zwölftel kürzen.",
        "Das passiert nicht automatisch, er muss es Ihnen mitteilen.",
        "Arbeiten Sie in der Elternzeit in Teilzeit beim selben Arbeitgeber weiter, ist eine Kürzung nicht erlaubt."
       ],
       "motiv": "buero"
      },
      {
       "b": "d",
       "quelle": "Jörg K., Betriebsrat in einem Chemiepark",
       "zeilen": [
        "Für eine befristete Verringerung gibt es die sogenannte Brückenteilzeit: ein bis fünf Jahre weniger Stunden, danach kehren Sie automatisch zu Ihrer alten Stundenzahl zurück.",
        "Voraussetzung ist, dass der Betrieb mehr als 45 Mitarbeiter hat und Sie dort länger als sechs Monate beschäftigt sind.",
        "Den Antrag stellen Sie spätestens drei Monate vor dem gewünschten Beginn."
       ],
       "motiv": "buero"
      },
      {
       "b": "e",
       "quelle": "Sandra M., Teamleiterin und Mutter von zwei Kindern",
       "zeilen": [
        "Nach der Elternzeit haben Sie keinen Anspruch auf genau denselben Schreibtisch, wohl aber auf eine gleichwertige Stelle.",
        "Eine Führungsaufgabe kann Ihnen nicht einfach weggenommen und durch eine Sachbearbeiterstelle mit weniger Gehalt ersetzt werden.",
        "Ich würde mir das nicht gefallen lassen und den Betriebsrat oder einen Anwalt einschalten."
       ],
       "motiv": "buero"
      },
      {
       "b": "f",
       "quelle": "Ralf T., Berater bei einer Familienberatungsstelle",
       "zeilen": [
        "Das Elterngeld beantragen Sie bei der Elterngeldstelle Ihres Landkreises oder Ihrer Stadt, nicht beim Arbeitgeber.",
        "Rückwirkend wird es nur für die letzten drei Lebensmonate vor dem Antrag gezahlt.",
        "Wer lange wartet, verschenkt also Geld, auch wenn noch nicht alle Unterlagen da sind."
       ],
       "motiv": "buero"
      },
      {
       "b": "g",
       "quelle": "Nadine B., Gewerkschaftssekretärin",
       "zeilen": [
        "Ab der Anmeldung der Elternzeit sind Sie besonders vor einer Kündigung geschützt, frühestens jedoch acht Wochen vor ihrem Beginn.",
        "Dieser Schutz gilt bis zum letzten Tag der Elternzeit.",
        "Eine Kündigung ist in dieser Zeit nur in seltenen Ausnahmefällen und mit Zustimmung einer Behörde möglich."
       ],
       "motiv": "buero"
      },
      {
       "b": "h",
       "quelle": "Markus F., Vater und Schichtleiter",
       "zeilen": [
        "Jeder Elternteil kann seine Elternzeit auf drei Abschnitte verteilen, ohne dass der Arbeitgeber zustimmen muss.",
        "Ich habe zum Beispiel zwei Monate nach der Geburt genommen und später noch einmal zwei zur Eingewöhnung in der Kita.",
        "Für einen vierten Abschnitt hätte ich das Einverständnis meines Chefs gebraucht."
       ],
       "motiv": "buero"
      }
     ],
     "aufgaben": [
      {
       "situation": "Ich arbeite in einem Logistikunternehmen mit rund 120 Mitarbeitern. Nach meiner Elternzeit möchte ich zwei Jahre lang nur 30 Stunden arbeiten und danach wieder Vollzeit. Ich habe Angst, dass ich später auf der Teilzeitstelle sitzen bleibe.",
       "loesung": "d",
       "erklaerung": "Die Brückenteilzeit ist befristet, danach gilt automatisch wieder die alte Stundenzahl. Der Betrieb ist groß genug.",
       "sitKopf": "Der Eintrag",
       "xText": "Keine Antwort passt"
      },
      {
       "situation": "Ich habe meiner Personalabteilung per E-Mail mitgeteilt, dass ich ab Mai ein Jahr Elternzeit nehme, und eine Bestätigung bekommen. Eine Kollegin meint jetzt, das sei gar nicht gültig. Hat sie recht?",
       "loesung": "a",
       "erklaerung": "Die Elternzeit braucht die Schriftform mit Unterschrift. Die Bestätigung per E-Mail ändert daran nichts.",
       "sitKopf": "Der Eintrag",
       "xText": "Keine Antwort passt"
      },
      {
       "situation": "Unser Sohn ist jetzt fünf Monate alt. Ich bin seit der Geburt zu Hause, habe aber noch keinen Antrag auf Elterngeld gestellt, weil die Geburtsurkunde so lange gedauert hat.",
       "loesung": "f",
       "erklaerung": "Rückwirkend gibt es Elterngeld nur für drei Monate. Sie sollte den Antrag sofort stellen.",
       "sitKopf": "Der Eintrag",
       "xText": "Keine Antwort passt"
      },
      {
       "situation": "Vor meiner Elternzeit habe ich ein Team von acht Leuten geleitet. Jetzt ist meine Stelle besetzt, und man bietet mir eine Stelle als Sachbearbeiterin an, mit 600 Euro weniger im Monat.",
       "loesung": "e",
       "erklaerung": "Sie hat Anspruch auf eine gleichwertige Stelle, eine schlechter bezahlte Sachbearbeiterstelle ist das nicht.",
       "sitKopf": "Der Eintrag",
       "xText": "Keine Antwort passt"
      },
      {
       "situation": "Ich bin Zahnmedizinische Fachangestellte in einer Praxis mit neun Angestellten. In der Elternzeit würde ich gern 20 Stunden arbeiten, aber meine Chefin lehnt das ab. Kann ich darauf bestehen?",
       "loesung": "b",
       "erklaerung": "Der Anspruch auf Teilzeit in der Elternzeit gilt erst ab mehr als 15 Mitarbeitern. Die Praxis ist zu klein.",
       "sitKopf": "Der Eintrag",
       "xText": "Keine Antwort passt"
      },
      {
       "situation": "Mein Arbeitgeber möchte mich in der Elternzeit nicht in Teilzeit beschäftigen. Ein Bekannter hätte für mich einen Minijob in seinem Café. Darf ich den einfach annehmen?",
       "loesung": "x",
       "erklaerung": "Keine Antwort spricht über eine Arbeit bei einem anderen Arbeitgeber. Antwort b nennt nur die Stundengrenze.",
       "sitKopf": "Der Eintrag",
       "xText": "Keine Antwort passt"
      }
     ]
    },
    {
     "id": "bc1l1s2",
     "titel": "Forum Beruf & Karriere: Weiterbildung",
     "anzeigen": [
      {
       "b": "a",
       "quelle": "Claudia R., Referentin bei einer Volkshochschule",
       "zeilen": [
        "In fast allen Bundesländern haben Beschäftigte Anspruch auf Bildungsurlaub, meistens fünf Arbeitstage im Jahr, in Bayern und Sachsen allerdings nicht.",
        "Der Kurs muss in Ihrem Bundesland anerkannt sein, das steht in der Regel in der Kursbeschreibung.",
        "Den Antrag stellen Sie rechtzeitig, oft sechs Wochen vorher, und es ist zusätzlicher bezahlter Urlaub, nicht Ihr Jahresurlaub."
       ],
       "motiv": "buero"
      },
      {
       "b": "b",
       "quelle": "Stefan L., Fachanwalt für Arbeitsrecht",
       "zeilen": [
        "Eine Rückzahlung der Kursgebühren kann der Arbeitgeber nur verlangen, wenn Sie das vor Beginn der Maßnahme schriftlich vereinbart haben.",
        "Die Bindungsdauer muss zur Länge der Weiterbildung passen, und der Betrag muss Monat für Monat kleiner werden.",
        "Steht in Ihrem Vertrag nichts davon, müssen Sie bei einem Wechsel auch nichts zurückzahlen."
       ],
       "motiv": "buero"
      },
      {
       "b": "c",
       "quelle": "Heike D., Beraterin bei der Handwerkskammer",
       "zeilen": [
        "Für Meister, Techniker oder Fachwirte gibt es das Aufstiegs-BAföG, unabhängig von Alter und Einkommen.",
        "Ein Teil der Lehrgangskosten ist ein Zuschuss, den Rest gibt es als günstiges Darlehen.",
        "Wenn Sie die Prüfung bestehen, wird Ihnen die Hälfte des restlichen Darlehens erlassen."
       ],
       "motiv": "buero"
      },
      {
       "b": "d",
       "quelle": "Bernd O., Betriebsrat in einem Autohaus",
       "zeilen": [
        "Wenn Ihr Vorgesetzter Sie zu einer Schulung schickt, ist das Arbeitszeit, auch an einem Samstag.",
        "Die Stunden müssen Sie entweder bezahlt bekommen oder mit Freizeit ausgleichen können.",
        "Schreiben Sie sich die Zeiten auf, auch die Fahrt, wenn sie außerhalb Ihrer normalen Arbeitszeit liegt."
       ],
       "motiv": "buero"
      },
      {
       "b": "e",
       "quelle": "Sabine G., Steuerberaterin",
       "zeilen": [
        "Wenn Sie eine berufliche Weiterbildung selbst bezahlen, können Sie die Kosten in der Steuererklärung als Werbungskosten angeben.",
        "Dazu gehören auch Fahrtkosten, Prüfungsgebühren und Fachbücher.",
        "Bewahren Sie alle Rechnungen auf, auch wenn das Finanzamt sie nicht sofort sehen will."
       ],
       "motiv": "buero"
      },
      {
       "b": "f",
       "quelle": "Ahmet Y., Arbeitsvermittler",
       "zeilen": [
        "Die Agentur für Arbeit fördert auch Beschäftigte, nicht nur Arbeitslose.",
        "Das gilt vor allem, wenn Ihre Tätigkeit sich durch neue Technik stark verändert oder ganz wegfallen könnte.",
        "Ihr Arbeitgeber muss sich an den Kosten beteiligen, wie viel, hängt von der Betriebsgröße ab."
       ],
       "motiv": "buero"
      },
      {
       "b": "g",
       "quelle": "Kerstin P., Abteilungsleiterin Vertrieb",
       "zeilen": [
        "Wer bei mir eine Weiterbildung möchte, sollte mir sagen, was die Abteilung davon hat.",
        "Am besten kommen Sie gleich mit einem Vorschlag, wer Sie in der Zeit vertritt.",
        "Dann sage ich fast nie Nein."
       ],
       "motiv": "buero"
      },
      {
       "b": "h",
       "quelle": "Uwe N., Betriebsratsvorsitzender",
       "zeilen": [
        "Bei betrieblichen Schulungen hat der Betriebsrat ein Mitbestimmungsrecht, auch bei der Frage, wer teilnehmen darf.",
        "Wenn Sie den Eindruck haben, dass immer dieselben Kollegen ausgewählt werden, sprechen Sie uns an.",
        "Wir können eigene Vorschläge machen und verlangen, dass die Auswahl nachvollziehbar ist."
       ],
       "motiv": "buero"
      }
     ],
     "aufgaben": [
      {
       "situation": "Meine Firma bezahlt mir einen Staplerschein und einen SAP-Kurs, zusammen etwa 2.400 Euro. Ich überlege aber, nächstes Jahr zu wechseln. In meinem Vertrag steht nichts zu Kursen. Muss ich das Geld dann zurückzahlen?",
       "loesung": "b",
       "erklaerung": "Ohne vorherige schriftliche Vereinbarung gibt es keine Rückzahlungspflicht.",
       "sitKopf": "Der Eintrag",
       "xText": "Keine Antwort passt"
      },
      {
       "situation": "Ich wohne und arbeite in Hessen und möchte eine Woche lang einen Kurs „Englisch für den Beruf“ besuchen. Mein Chef sagt, dafür müsse ich meinen Urlaub nehmen.",
       "loesung": "a",
       "erklaerung": "Hessen hat Bildungsurlaub. Er kommt zum Jahresurlaub hinzu, der Kurs muss anerkannt sein.",
       "sitKopf": "Der Eintrag",
       "xText": "Keine Antwort passt"
      },
      {
       "situation": "Ich möchte abends die Ausbildung zum Industriemeister machen. Der Lehrgang kostet rund 9.000 Euro, das kann ich als Alleinverdiener mit zwei Kindern nicht allein bezahlen.",
       "loesung": "c",
       "erklaerung": "Das Aufstiegs-BAföG fördert Meisterlehrgänge mit Zuschuss und Darlehen, unabhängig vom Einkommen.",
       "sitKopf": "Der Eintrag",
       "xText": "Keine Antwort passt"
      },
      {
       "situation": "Mein Chef schickt mich an zwei Samstagen zu einer Produktschulung beim Hersteller. Als ich nach Freizeitausgleich gefragt habe, meinte er, ich würde ja auch etwas lernen.",
       "loesung": "d",
       "erklaerung": "Eine angeordnete Schulung ist Arbeitszeit und muss bezahlt oder ausgeglichen werden.",
       "sitKopf": "Der Eintrag",
       "xText": "Keine Antwort passt"
      },
      {
       "situation": "In unserer Abteilung gibt es jedes Jahr zwei Plätze für die Fortbildung „Projektleitung“. Seit drei Jahren fahren immer dieselben zwei Kollegen hin. Ich habe mich jedes Mal gemeldet.",
       "loesung": "h",
       "erklaerung": "Der Betriebsrat bestimmt bei der Auswahl der Teilnehmer mit und kann eingeschaltet werden.",
       "sitKopf": "Der Eintrag",
       "xText": "Keine Antwort passt"
      },
      {
       "situation": "Ich habe in Polen eine zweijährige Weiterbildung zur Buchhalterin gemacht. Wer prüft eigentlich, ob dieser Abschluss in Deutschland anerkannt wird?",
       "loesung": "x",
       "erklaerung": "Zur Anerkennung ausländischer Abschlüsse sagt keine Antwort etwas.",
       "sitKopf": "Der Eintrag",
       "xText": "Keine Antwort passt"
      }
     ]
    },
    {
     "id": "bc1l1s3",
     "titel": "Forum Arbeitswelt: Überstunden und Arbeitszeit",
     "anzeigen": [
      {
       "b": "a",
       "quelle": "Frank E., Arbeitsschutzfachkraft",
       "zeilen": [
        "Zwischen dem Ende einer Schicht und dem Beginn der nächsten müssen mindestens elf Stunden Ruhezeit liegen.",
        "Ausnahmen gibt es nur in wenigen Branchen, etwa in Krankenhäusern oder in der Gastronomie, und auch dort nur mit Ausgleich.",
        "Ein Schichtplan, der das nicht einhält, verstößt gegen das Arbeitszeitgesetz."
       ],
       "motiv": "buero"
      },
      {
       "b": "b",
       "quelle": "Katrin J., Fachanwältin für Arbeitsrecht",
       "zeilen": [
        "Der Satz „Überstunden sind mit dem Gehalt abgegolten“ ist in vielen Verträgen unwirksam, weil er nicht sagt, wie viele Stunden gemeint sind.",
        "Anders sieht es bei sehr hohen Gehältern aus, etwa oberhalb der Beitragsbemessungsgrenze der Rentenversicherung.",
        "Bei einem normalen Gehalt können Sie die Stunden also trotzdem verlangen."
       ],
       "motiv": "buero"
      },
      {
       "b": "c",
       "quelle": "Detlef A., Gewerkschaftssekretär",
       "zeilen": [
        "Schauen Sie in Ihren Arbeitsvertrag oder Tarifvertrag, ob dort eine Ausschlussfrist steht.",
        "Häufig müssen Ansprüche innerhalb von drei Monaten schriftlich beim Arbeitgeber geltend gemacht werden, sonst verfallen sie.",
        "Wer sich erst nach einem halben Jahr meldet, hat dann leider schlechte Karten."
       ],
       "motiv": "buero"
      },
      {
       "b": "d",
       "quelle": "Gabi U., Bürokauffrau",
       "zeilen": [
        "Ich schreibe seit Jahren jeden Abend auf, wann ich gekommen und gegangen bin und wer die Mehrarbeit angeordnet hat.",
        "Als es einmal Streit gab, war meine Liste viel genauer als die Unterlagen der Firma.",
        "Das kann ich jedem nur empfehlen."
       ],
       "motiv": "buero"
      },
      {
       "b": "e",
       "quelle": "Lars V., Betriebsarzt",
       "zeilen": [
        "Wer mehr als sechs Stunden arbeitet, braucht mindestens 30 Minuten Pause, ab neun Stunden 45 Minuten.",
        "Die Pause darf man nicht ans Ende des Arbeitstags legen, um früher zu gehen.",
        "Aus medizinischer Sicht ist eine richtige Mittagspause ohnehin sinnvoller als mehrere kurze."
       ],
       "motiv": "buero"
      },
      {
       "b": "f",
       "quelle": "Ingrid C., Personalleiterin",
       "zeilen": [
        "Ohne eine Regelung im Arbeitsvertrag oder Tarifvertrag sind Sie grundsätzlich nicht verpflichtet, Überstunden zu leisten.",
        "Eine Ausnahme sind echte Notfälle, zum Beispiel wenn eine Maschine ausfällt und sonst Ware verdirbt.",
        "In der Praxis lohnt es sich aber, mit dem Vorgesetzten eine Lösung zu suchen."
       ],
       "motiv": "buero"
      },
      {
       "b": "g",
       "quelle": "Michael Z., Betriebsrat in einem Pflegeheim",
       "zeilen": [
        "Bereitschaftsdienst, bei dem Sie sich im Betrieb aufhalten müssen, ist nach europäischem Recht vollständig Arbeitszeit, auch wenn Sie schlafen dürfen.",
        "Bei der Rufbereitschaft zu Hause zählen dagegen nur die tatsächlichen Einsätze.",
        "Wie der Bereitschaftsdienst bezahlt wird, regelt oft der Tarifvertrag."
       ],
       "motiv": "buero"
      },
      {
       "b": "h",
       "quelle": "Christa I., Betriebsratsmitglied in einer Druckerei",
       "zeilen": [
        "Ordnet der Arbeitgeber für eine ganze Abteilung über Wochen Überstunden an, muss der Betriebsrat vorher zustimmen.",
        "Das gilt, wenn die Arbeitszeit vorübergehend für mehrere Kollegen verlängert wird.",
        "Ohne diese Zustimmung ist die Anordnung im Betrieb nicht wirksam."
       ],
       "motiv": "buero"
      }
     ],
     "aufgaben": [
      {
       "situation": "Ich arbeite in einer Großbäckerei. Diese Woche habe ich am Dienstag Spätschicht bis 23 Uhr und am Mittwoch schon wieder Frühschicht ab 6 Uhr. Ist das überhaupt erlaubt?",
       "loesung": "a",
       "erklaerung": "Zwischen 23 Uhr und 6 Uhr liegen nur sieben Stunden, vorgeschrieben sind elf.",
       "sitKopf": "Der Eintrag",
       "xText": "Keine Antwort passt"
      },
      {
       "situation": "In meinem Vertrag als Sachbearbeiterin steht, dass Überstunden mit dem Gehalt abgegolten sind. Ich verdiene 3.200 Euro brutto und mache jeden Monat etwa 15 Überstunden.",
       "loesung": "b",
       "erklaerung": "Bei einem normalen Gehalt ist so eine pauschale Klausel meist unwirksam.",
       "sitKopf": "Der Eintrag",
       "xText": "Keine Antwort passt"
      },
      {
       "situation": "Im Januar habe ich wegen einer Inventur fast 30 Überstunden gemacht. Als ich sie im Juli abrechnen wollte, hieß es, die seien verfallen. Kann das sein?",
       "loesung": "c",
       "erklaerung": "Ausschlussfristen von oft drei Monaten können dazu führen, dass Ansprüche verfallen.",
       "sitKopf": "Der Eintrag",
       "xText": "Keine Antwort passt"
      },
      {
       "situation": "Unser Abteilungsleiter will, dass alle zwölf Kollegen im Versand ab nächster Woche drei Monate lang täglich eine Stunde länger bleiben. Wir haben einen Betriebsrat, aber der weiß davon nichts.",
       "loesung": "h",
       "erklaerung": "Bei vorübergehender Verlängerung der Arbeitszeit für mehrere Kollegen muss der Betriebsrat zustimmen.",
       "sitKopf": "Der Eintrag",
       "xText": "Keine Antwort passt"
      },
      {
       "situation": "Ich bin Pflegehelfer in einem Wohnheim. Im Nachtdienst muss ich im Haus bleiben und darf im Dienstzimmer schlafen. Der Arbeitgeber rechnet diese Zeit nur zur Hälfte als Arbeitszeit an.",
       "loesung": "g",
       "erklaerung": "Bereitschaftsdienst im Betrieb ist vollständig Arbeitszeit. Die Bezahlung kann aber anders geregelt sein.",
       "sitKopf": "Der Eintrag",
       "xText": "Keine Antwort passt"
      },
      {
       "situation": "Ich fahre oft mit dem Zug zu Kunden nach Hamburg und bin dann abends erst um 21 Uhr zu Hause. Zählt die Fahrt eigentlich als Arbeitszeit?",
       "loesung": "x",
       "erklaerung": "Zu Fahrzeiten bei Kundenterminen sagt keine Antwort etwas. Antwort d rät nur, Arbeitszeiten aufzuschreiben.",
       "sitKopf": "Der Eintrag",
       "xText": "Keine Antwort passt"
      }
     ]
    }
   ]
  },
  {
   "nr": 2,
   "art": "textwahl",
   "name": "Lesen: Betrieblicher Bericht",
   "kurz": "Ein langer Bericht, elf Aufgaben a/b/c",
   "was": "Ein Bericht aus einem Unternehmen, zum Beispiel über ein Projekt oder eine Umstellung. Elf Aufgaben mit je drei Antworten, in der Reihenfolge des Textes.",
   "tipp": "Lies erst die Fragen, dann den Text Absatz für Absatz. Zahlen, Ursachen und Folgen genau vergleichen.",
   "zeichen": "📊",
   "farbe": "gold",
   "punkte": 11,
   "runden": [
    {
     "id": "bc1l2s1",
     "text": {
      "sorte": "bericht",
      "quelle": "Projektbericht der Abteilung Einkauf, Brenner Pumpentechnik GmbH, Werk Sindelfingen",
      "titel": "Projekt „Bestellung digital“: Abschlussbericht",
      "zeilen": [
       "Im März 2025 hat die Geschäftsleitung die Abteilung Einkauf beauftragt, die Bestellung von Verbrauchsmaterial und Ersatzteilen auf ein elektronisches System umzustellen. Bis dahin liefen jährlich rund 14.000 Bestellungen über Papierformulare, E-Mails und Telefon. Der vorliegende Bericht fasst den Verlauf des Projekts zusammen, das am 30. September 2025 abgeschlossen wurde, und gibt eine Empfehlung für die nächsten Schritte.",
       "Vor der Umstellung war die Beschaffung in vielen Bereichen kaum nachvollziehbar. Meister in der Montage bestellten Schrauben oder Dichtungen häufig direkt beim Händler, ohne den Einkauf zu informieren. Die Rechnungen kamen dann in der Buchhaltung an, ohne dass eine Bestellung dazu vorlag. Allein 2024 mussten die Kollegen der Kreditorenbuchhaltung nach eigener Schätzung rund 900 Stunden darauf verwenden, solche Rechnungen den richtigen Kostenstellen zuzuordnen.",
       "Ziel des Projekts war es, alle Bestellungen bis 5.000 Euro über einen elektronischen Katalog abzuwickeln. Größere Beschaffungen, etwa für Maschinen, sollten weiterhin vom Einkauf direkt verhandelt werden. Außerdem sollte die Durchlaufzeit von der Anforderung bis zur Bestellung von durchschnittlich sechs auf höchstens zwei Arbeitstage sinken.",
       "Das Projektteam bestand aus zwei Mitarbeiterinnen des Einkaufs, einem Kollegen aus der IT, einer Vertreterin der Buchhaltung und, auf Wunsch des Betriebsrats, einem Meister aus der Fertigung. Gerade diese Beteiligung hat sich als sehr hilfreich erwiesen, weil Herr Kuhn die Abläufe in der Werkstatt genau kennt und manche Schwachstelle früh erkannt hat. Statt das System auf einen Schlag im ganzen Werk einzuführen, entschied sich das Team für einen Probebetrieb in der Instandhaltung.",
       "Die Instandhaltung arbeitete von Mai bis Juli ausschließlich mit dem neuen Katalog. In den ersten Wochen gab es erhebliche Anlaufschwierigkeiten. Viele Ersatzteile waren im Katalog nicht oder unter anderen Bezeichnungen hinterlegt, sodass die Kollegen sie nicht fanden und doch wieder zum Telefon griffen. Das Team hat daraufhin zusammen mit drei Hauptlieferanten rund 2.300 Artikel neu beschrieben und mit den Teilenummern aus unseren Zeichnungen verknüpft.",
       "Für die Einführung im übrigen Werk wurden im August insgesamt 31 Schulungen angeboten, jeweils 90 Minuten in Gruppen von höchstens acht Personen. Die Termine lagen bewusst am Ende der Frühschicht und am Anfang der Spätschicht, damit auch die Schichtführer teilnehmen konnten. Erreicht wurden 212 von 240 Berechtigten. Wer nicht teilnehmen konnte, erhielt eine bebilderte Kurzanleitung und kann sich bei Fragen an die Ansprechpartner im Einkauf wenden.",
       "Seit dem 1. September werden 87 Prozent aller Bestellungen bis 5.000 Euro über den Katalog abgewickelt. Die durchschnittliche Durchlaufzeit liegt inzwischen bei 1,6 Arbeitstagen und damit unter dem Zielwert. Die Zahl der Rechnungen ohne Bestellung ist im dritten Quartal gegenüber dem Vorjahresquartal um rund zwei Drittel zurückgegangen. Durch die Bündelung der Bestellungen konnten mit zwei Lieferanten außerdem bessere Konditionen vereinbart werden, was im Jahr Einsparungen von etwa 48.000 Euro bringen dürfte.",
       "Nicht alle Ziele wurden erreicht. In der Lackiererei werden nach wie vor viele Bestellungen telefonisch aufgegeben, weil Farben und Lösungsmittel oft kurzfristig und in wechselnden Mengen gebraucht werden. Hier reicht der Katalog in seiner jetzigen Form nicht aus. Kritik gab es auch an der Freigabe: Bestellungen über 1.000 Euro müssen von der Abteilungsleitung bestätigt werden, und wenn diese im Urlaub ist, bleibt die Bestellung liegen. Eine Vertretungsregel wurde im System erst Ende September eingerichtet.",
       "Die Kosten des Projekts lagen bei 126.000 Euro und damit etwa 11.000 Euro über dem Budget. Die Überschreitung geht vor allem auf die zusätzliche Arbeit an den Artikeldaten zurück, die bei der Planung unterschätzt worden war. Die Lizenzgebühren für das System betragen künftig 19.000 Euro im Jahr.",
       "Der Einkauf empfiehlt, im Jahr 2026 für die Lackiererei eine eigene Lösung zu entwickeln, zum Beispiel feste Rahmenverträge mit automatischer Nachlieferung, sobald ein Mindestbestand erreicht ist. Außerdem soll geprüft werden, ob auch die Bestellung von Büromaterial für die Verwaltung über den Katalog laufen kann. Hierzu wird die Abteilung Einkauf der Geschäftsleitung bis Ende Januar einen Vorschlag vorlegen."
      ]
     },
     "aufgaben": [
      {
       "frage": "Vor dem Projekt …",
       "opt": [
        "bestellte die Buchhaltung Material für die Montage.",
        "liefen viele Bestellungen am Einkauf vorbei.",
        "gingen viele Rechnungen in der Buchhaltung verloren."
       ],
       "loesung": 1,
       "stelle": "ohne den Einkauf zu informieren",
       "erklaerung": "Die Meister bestellten direkt beim Händler, der Einkauf wusste nichts davon."
      },
      {
       "frage": "Über den neuen Katalog sollten …",
       "opt": [
        "alle Beschaffungen einschließlich Maschinen laufen.",
        "Bestellungen bis zu einem bestimmten Betrag laufen.",
        "nur Ersatzteile für die Instandhaltung bestellt werden."
       ],
       "loesung": 1,
       "stelle": "alle Bestellungen bis 5.000 Euro über einen elektronischen Katalog abzuwickeln",
       "erklaerung": "Die Grenze liegt bei 5.000 Euro, Maschinen verhandelt der Einkauf weiter direkt."
      },
      {
       "frage": "Der Meister aus der Fertigung …",
       "opt": [
        "kam auf Wunsch des Betriebsrats ins Projektteam.",
        "leitete die Schulungen in der Werkstatt.",
        "hatte große Bedenken gegen die Umstellung."
       ],
       "loesung": 0,
       "stelle": "auf Wunsch des Betriebsrats, einem Meister aus der Fertigung",
       "erklaerung": "Der Betriebsrat wollte ihn im Team. Von Schulungen oder Bedenken ist keine Rede."
      },
      {
       "frage": "Das neue System wurde zuerst …",
       "opt": [
        "im ganzen Werk gleichzeitig eingeführt.",
        "in einer einzigen Abteilung erprobt.",
        "bei drei Lieferanten getestet."
       ],
       "loesung": 1,
       "stelle": "für einen Probebetrieb in der Instandhaltung",
       "erklaerung": "Statt der Einführung „auf einen Schlag“ gab es einen Probebetrieb in der Instandhaltung."
      },
      {
       "frage": "Zu Beginn des Probebetriebs …",
       "opt": [
        "lieferten drei Lieferanten falsche Ersatzteile.",
        "wurde das Telefon in der Instandhaltung abgeschafft.",
        "fanden die Kollegen viele Teile im Katalog nicht."
       ],
       "loesung": 2,
       "stelle": "sodass die Kollegen sie nicht fanden",
       "erklaerung": "Die Teile fehlten oder hatten andere Namen. Mit den Lieferanten wurden die Daten danach verbessert."
      },
      {
       "frage": "Die Schulungstermine …",
       "opt": [
        "waren so gelegt, dass auch Schichtführer kommen konnten.",
        "waren für alle 240 Berechtigten Pflicht.",
        "dauerten jeweils einen halben Tag."
       ],
       "loesung": 0,
       "stelle": "damit auch die Schichtführer teilnehmen konnten",
       "erklaerung": "Die Zeiten am Schichtwechsel wurden bewusst für die Schichtführer gewählt."
      },
      {
       "frage": "Wer an keiner Schulung teilnehmen konnte, …",
       "opt": [
        "muss die Schulung im Herbst nachholen.",
        "darf den Katalog noch nicht benutzen.",
        "bekam eine schriftliche Anleitung."
       ],
       "loesung": 2,
       "stelle": "erhielt eine bebilderte Kurzanleitung",
       "erklaerung": "Eine Nachschulung wird nicht erwähnt, nur die Kurzanleitung und Ansprechpartner."
      },
      {
       "frage": "Die durchschnittliche Durchlaufzeit …",
       "opt": [
        "ist heute kürzer als geplant.",
        "liegt noch über dem Ziel von zwei Tagen.",
        "wird erst ab 2026 gemessen."
       ],
       "loesung": 0,
       "stelle": "und damit unter dem Zielwert",
       "erklaerung": "1,6 Arbeitstage sind weniger als die geplanten höchstens zwei Tage."
      },
      {
       "frage": "In der Lackiererei …",
       "opt": [
        "wird der Katalog am häufigsten genutzt.",
        "ist der Bedarf für den Katalog zu unregelmäßig.",
        "fehlen noch die Schulungen."
       ],
       "loesung": 1,
       "stelle": "kurzfristig und in wechselnden Mengen gebraucht werden",
       "erklaerung": "Farben werden kurzfristig und in wechselnden Mengen gebraucht, dafür passt der Katalog nicht."
      },
      {
       "frage": "Bestellungen über 1.000 Euro …",
       "opt": [
        "werden direkt vom Einkauf verhandelt.",
        "sind seit September nicht mehr erlaubt.",
        "blieben liegen, wenn die Abteilungsleitung im Urlaub war."
       ],
       "loesung": 2,
       "stelle": "wenn diese im Urlaub ist, bleibt die Bestellung liegen",
       "erklaerung": "Die Freigabe fehlte bei Abwesenheit, eine Vertretung gibt es erst seit Ende September."
      },
      {
       "frage": "Das Projekt wurde teurer als geplant, weil …",
       "opt": [
        "die Lizenzgebühren gestiegen sind.",
        "mehr Schulungen nötig waren als geplant.",
        "die Arbeit an den Artikeldaten aufwendiger war als gedacht."
       ],
       "loesung": 2,
       "stelle": "die bei der Planung unterschätzt worden war",
       "erklaerung": "Die Überschreitung kommt von den Artikeldaten. Die Lizenzgebühren sind laufende Kosten."
      }
     ]
    },
    {
     "id": "bc1l2s2",
     "text": {
      "sorte": "bericht",
      "quelle": "Jahresbericht 2025 der Personalabteilung, Kreisklinik Waldbrunn",
      "titel": "Personalgewinnung im Pflegedienst: Rückblick auf das Jahr 2025",
      "zeilen": [
       "Das Jahr 2025 stand für die Personalabteilung der Kreisklinik Waldbrunn vor allem im Zeichen der Personalgewinnung in der Pflege. Zu Jahresbeginn waren von 412 Vollzeitstellen im Pflegedienst 38 unbesetzt. Zwei Stationen, die Innere B und die Geriatrie, mussten im Februar zeitweise Betten sperren, weil der Dienstplan nicht mehr zu füllen war.",
       "Um die Lücken zu schließen, hat die Klinik ihre Anstrengungen auf drei Wegen verstärkt: durch die Ausbildung im eigenen Haus, durch die Rückgewinnung ehemaliger Mitarbeiter und durch die Anwerbung von Pflegefachkräften aus dem Ausland.",
       "Die Zahl der Ausbildungsplätze an unserer Pflegeschule wurde von 60 auf 75 erhöht. Besetzt werden konnten 71 Plätze. Die Abbruchquote im ersten Ausbildungsjahr lag mit 19 Prozent zwar unter dem Landesdurchschnitt, bleibt aber hoch. Seit September begleitet deshalb eine erfahrene Praxisanleiterin die Auszubildenden in den ersten Wochen auf den Stationen. Außerdem bekommt jeder neue Auszubildende einen festen Ansprechpartner aus dem zweiten Ausbildungsjahr.",
       "Im Frühjahr wurden 140 frühere Mitarbeiter angeschrieben, die die Klinik in den vergangenen fünf Jahren verlassen hatten. Die Rückmeldungen waren deutlicher als erwartet: Fast alle nannten nicht das Gehalt, sondern die Dienstplanung als Hauptgrund für ihren Weggang, vor allem das häufige Einspringen an freien Tagen. Elf Pflegekräfte sind inzwischen zurückgekehrt, sieben davon in Teilzeit.",
       "Für sie wurde ein sogenannter Springerpool eingerichtet. Die Mitglieder kennen ihre Dienste zwei Monate im Voraus und werden dafür flexibel auf verschiedenen Stationen eingesetzt. Diese Lösung hat auch dazu beigetragen, dass Kollegen auf den Stationen seltener aus dem Frei geholt werden mussten.",
       "Über eine Vermittlungsagentur sind im Laufe des Jahres 23 Pflegefachkräfte aus den Philippinen, aus Indien und aus Tunesien zu uns gekommen. Bis zur Anerkennung ihres Abschlusses arbeiten sie als Pflegeassistenten und bereiten sich auf die Kenntnisprüfung vor. Neun von ihnen haben die Prüfung bereits bestanden. Als größte Hürde hat sich nicht die Fachsprache erwiesen, sondern die Dauer der Verfahren: Bei der zuständigen Behörde vergehen zwischen Antrag und Bescheid derzeit im Schnitt sieben Monate.",
       "Ohne Wohnraum hätte die Anwerbung nicht funktioniert. Die Klinik hat zwei Häuser in der Nähe des Krankenhauses angemietet und dort 18 möblierte Apartments eingerichtet, die die neuen Kollegen im ersten Jahr zu einer reduzierten Miete nutzen können. Zusätzlich bietet die Klinik zweimal wöchentlich einen Deutschkurs während der Arbeitszeit an. Ehrenamtliche aus dem Ort helfen bei Behördengängen und bei der Kontoeröffnung.",
       "Die Integration lief nicht in allen Teams reibungslos. Auf zwei Stationen beklagten sich langjährige Mitarbeiter, sie müssten die neuen Kollegen neben der eigentlichen Arbeit einarbeiten, ohne dass dafür Zeit eingeplant sei. Die Pflegedirektion hat darauf reagiert: Seit Oktober wird für jede neue Kraft in den ersten acht Wochen eine halbe Stelle zusätzlich im Dienstplan berücksichtigt.",
       "Bei den Gesprächen mit Rückkehrern und Bewerbern wurde immer wieder nach festen Arbeitszeiten am Vormittag gefragt, etwa von Eltern mit Kindern im Grundschulalter. Die Klinik hat deshalb auf drei Stationen einen Vormittagsdienst von 7 bis 12.30 Uhr eingeführt, der allen Beschäftigten offensteht. Derzeit nutzen ihn 16 Kolleginnen und ein Kollege. Die Stationsleitungen berichten, dass der Vormittag damit spürbar entlastet wird, die Nachmittage aber weiterhin knapp besetzt sind.",
       "Zum 31. Dezember waren noch 14 Vollzeitstellen in der Pflege unbesetzt. Die Fluktuation sank von 13,1 auf 9,4 Prozent. Die Ausgaben für Leiharbeit, die 2024 noch bei 2,9 Millionen Euro lagen, gingen um gut 40 Prozent zurück. Dagegen stiegen die Kosten für Anwerbung, Wohnraum und Sprachkurse auf rund 610.000 Euro. Unter dem Strich hat sich der Aufwand damit bereits im ersten Jahr auch finanziell gelohnt.",
       "Für 2026 plant die Personalabteilung, das Modell des Springerpools auch für den Funktionsdienst, also OP und Anästhesie, zu prüfen. Die Anwerbung im Ausland soll fortgesetzt werden, allerdings mit kleineren Gruppen von höchstens acht Personen pro Halbjahr, damit die Stationen die Einarbeitung besser bewältigen. Außerdem will die Klinik mit der Behörde vereinbaren, dass Anträge gesammelt eingereicht und schneller bearbeitet werden."
      ]
     },
     "aufgaben": [
      {
       "frage": "Im Februar 2025 …",
       "opt": [
        "wurden zwei Stationen ganz geschlossen.",
        "konnten auf zwei Stationen nicht alle Betten belegt werden.",
        "wurden 38 neue Pflegekräfte eingestellt."
       ],
       "loesung": 1,
       "stelle": "mussten im Februar zeitweise Betten sperren",
       "erklaerung": "Betten wurden zeitweise gesperrt, die Stationen blieben aber offen."
      },
      {
       "frage": "An der Pflegeschule …",
       "opt": [
        "wurden alle 75 Plätze besetzt.",
        "gibt es mehr Ausbildungsplätze als vorher.",
        "brechen weniger Auszubildende ab als irgendwo sonst im Land."
       ],
       "loesung": 1,
       "stelle": "wurde von 60 auf 75 erhöht",
       "erklaerung": "Die Zahl stieg auf 75, besetzt wurden aber nur 71."
      },
      {
       "frage": "Neue Auszubildende …",
       "opt": [
        "werden in den ersten Wochen besonders begleitet.",
        "beginnen ihre Ausbildung jetzt erst im September.",
        "müssen im zweiten Jahr ein Praktikum machen."
       ],
       "loesung": 0,
       "stelle": "begleitet deshalb eine erfahrene Praxisanleiterin die Auszubildenden",
       "erklaerung": "Eine Praxisanleiterin begleitet sie, dazu kommt ein Ansprechpartner aus dem zweiten Jahr."
      },
      {
       "frage": "Ehemalige Mitarbeiter hatten die Klinik vor allem verlassen, weil …",
       "opt": [
        "sie zu wenig verdient hatten.",
        "sie oft an freien Tagen arbeiten mussten.",
        "sie in Teilzeit arbeiten wollten."
       ],
       "loesung": 1,
       "stelle": "vor allem das häufige Einspringen an freien Tagen",
       "erklaerung": "Ausdrücklich nicht das Gehalt, sondern die Dienstplanung war der Grund."
      },
      {
       "frage": "Die Pflegekräfte im Springerpool …",
       "opt": [
        "arbeiten immer auf derselben Station.",
        "dürfen nur in Teilzeit arbeiten.",
        "kennen ihre Dienste früh, wechseln aber die Station."
       ],
       "loesung": 2,
       "stelle": "kennen ihre Dienste zwei Monate im Voraus",
       "erklaerung": "Planbarkeit gegen Flexibilität: frühe Dienstpläne, dafür wechselnde Stationen."
      },
      {
       "frage": "Die Pflegefachkräfte aus dem Ausland …",
       "opt": [
        "arbeiten bis zur Anerkennung als Assistenten.",
        "haben alle die Kenntnisprüfung bestanden.",
        "arbeiten in der Verwaltung, bis sie gut Deutsch sprechen."
       ],
       "loesung": 0,
       "stelle": "arbeiten sie als Pflegeassistenten",
       "erklaerung": "Bis zur Anerkennung sind sie Pflegeassistenten. Bestanden haben bisher nur neun."
      },
      {
       "frage": "Das größte Problem bei der Anerkennung ist …",
       "opt": [
        "die medizinische Fachsprache.",
        "die lange Bearbeitungszeit.",
        "die schwierige Kenntnisprüfung."
       ],
       "loesung": 1,
       "stelle": "Bei der zuständigen Behörde vergehen zwischen Antrag und Bescheid",
       "erklaerung": "Sieben Monate Wartezeit sind die größte Hürde, ausdrücklich nicht die Fachsprache."
      },
      {
       "frage": "Die Apartments …",
       "opt": [
        "gehören der Klinik schon seit Jahren.",
        "werden den neuen Kollegen kostenlos überlassen.",
        "sind im ersten Jahr günstiger als üblich."
       ],
       "loesung": 2,
       "stelle": "im ersten Jahr zu einer reduzierten Miete nutzen können",
       "erklaerung": "Die Häuser sind angemietet, die Miete ist reduziert, aber nicht null."
      },
      {
       "frage": "Auf zwei Stationen beschwerten sich Mitarbeiter, weil …",
       "opt": [
        "die Einarbeitung zusätzlich zur normalen Arbeit lief.",
        "die neuen Kollegen schlecht Deutsch sprachen.",
        "sie selbst keine Zeit für Fortbildungen hatten."
       ],
       "loesung": 0,
       "stelle": "neben der eigentlichen Arbeit einarbeiten",
       "erklaerung": "Für die Einarbeitung war keine Zeit eingeplant. Seit Oktober gibt es dafür eine halbe Stelle."
      },
      {
       "frage": "Die Ausgaben für Leiharbeit …",
       "opt": [
        "sind 2025 weiter gestiegen.",
        "haben sich mehr als halbiert.",
        "sind deutlich gesunken."
       ],
       "loesung": 2,
       "stelle": "gingen um gut 40 Prozent zurück",
       "erklaerung": "Gut 40 Prozent weniger ist deutlich, aber noch keine Halbierung."
      },
      {
       "frage": "Bei der Anwerbung im Ausland will die Klinik 2026 …",
       "opt": [
        "kleinere Gruppen holen.",
        "ganz aufhören.",
        "weitere Länder einbeziehen."
       ],
       "loesung": 0,
       "stelle": "mit kleineren Gruppen von höchstens acht Personen pro Halbjahr",
       "erklaerung": "Die Anwerbung geht weiter, aber in kleineren Gruppen. Neue Länder werden nicht genannt."
      }
     ]
    },
    {
     "id": "bc1l2s3",
     "text": {
      "sorte": "bericht",
      "quelle": "Bericht der Geschäftsführung an den Aufsichtsrat, Stadtwerke Hellbach GmbH",
      "titel": "Neuorganisation des Kundenservice: Stand Februar 2026",
      "zeilen": [
       "Mit diesem Bericht informiert die Geschäftsführung über den Stand der Neuorganisation des Kundenservice, die der Aufsichtsrat im Juni 2024 beschlossen hat. Anlass waren die stark gestiegenen Beschwerden über die telefonische Erreichbarkeit. Im Winter 2023/24 kam in Spitzenzeiten nur jeder zweite Anruf durch, und die Wartezeit lag teilweise bei über 20 Minuten.",
       "Bis Ende 2024 betrieben die Stadtwerke drei Kundencenter in Hellbach, Altenmoor und Kirchdorf. Jedes Center beantwortete alle Anliegen, von der Zählerablesung über Abschlagsänderungen bis zu Fragen zur Wasserrechnung. Diese Aufteilung hatte historische Gründe: Die Center stammen aus der Zeit vor der Fusion der drei Gemeindewerke im Jahr 2009.",
       "Kernpunkt der Neuorganisation ist die Zusammenführung der telefonischen und schriftlichen Bearbeitung an einem Standort in Hellbach, der am 1. April 2025 den Betrieb aufgenommen hat. Statt drei kleiner Teams, in denen jeder alles machen musste, gibt es nun vier Fachteams: Abrechnung, Vertragswechsel und Umzug, Zahlungsfragen sowie Hausanschlüsse. Die Mitarbeiter haben sich ihrem Team selbst zugeordnet, wobei auf Erfahrung und Wünsche Rücksicht genommen wurde.",
       "Die Center in Altenmoor und Kirchdorf wurden nicht geschlossen, sondern zu Servicepunkten umgebaut. Sie sind an zwei Vormittagen in der Woche geöffnet, vor allem für ältere Kunden, die ihre Anliegen lieber persönlich klären. Termine können vorher telefonisch vereinbart werden, ohne Termin muss man mit Wartezeiten rechnen.",
       "Für die 46 Beschäftigten bedeutete die Umstellung erhebliche Veränderungen. Mit dem Betriebsrat wurde vereinbart, dass niemand betriebsbedingt gekündigt wird. Mitarbeiter aus Altenmoor und Kirchdorf, die nun längere Wege haben, können bis zu drei Tage pro Woche im Homeoffice arbeiten und erhalten für zwei Jahre einen Fahrtkostenzuschuss. Vier Beschäftigte haben sich dennoch für einen Wechsel in andere Bereiche der Stadtwerke entschieden, zwei sind in den Ruhestand gegangen.",
       "Technisch wurde eine neue Telefonanlage mit Rückrufsystem eingeführt. Ist kein Mitarbeiter frei, kann der Anrufer per Tastendruck einen Rückruf anfordern und muss nicht in der Leitung bleiben. Rückrufe erfolgen innerhalb von zwei Stunden, sofern der Anruf vor 16 Uhr eingeht. Diese Funktion wird inzwischen von etwa einem Viertel der Anrufer genutzt.",
       "Nicht reibungslos verlief der Start der neuen Anlage selbst. Am ersten Betriebstag waren die Leitungen rund drei Stunden lang gestört, weil der Anbieter eine Rufnummernumstellung zu spät ausgeführt hatte. Anrufer hörten in dieser Zeit nur ein Besetztzeichen. Die Lokalzeitung berichtete am nächsten Tag darüber, was dem Start der Neuorganisation nicht gerade geholfen hat. Mit dem Anbieter wurde inzwischen eine Gutschrift über 8.500 Euro vereinbart.",
       "Die Ergebnisse nach den ersten zehn Monaten sind überwiegend positiv. Im Januar 2026, dem Monat mit den meisten Jahresabrechnungen, wurden 91 Prozent der Anrufe angenommen, im Vorjahresmonat waren es 63 Prozent. Die durchschnittliche Wartezeit beträgt drei Minuten und vierzig Sekunden. Die Zahl der schriftlichen Beschwerden über die Erreichbarkeit hat sich mehr als halbiert.",
       "Weniger zufrieden sind wir mit der Bearbeitung schriftlicher Anfragen. Die Zahl der E-Mails ist seit der Umstellung um fast 30 Prozent gestiegen, weil das neue Kontaktformular im Kundenportal auch von vielen Kunden genutzt wird, die früher angerufen hätten. Die Antwortzeit liegt derzeit bei durchschnittlich sechs Arbeitstagen, angestrebt waren drei.",
       "Auch die Fachteams haben einen Nachteil. Ruft ein Kunde mit mehreren Anliegen an, etwa wegen eines Umzugs und einer Frage zur letzten Abrechnung, muss er unter Umständen weiterverbunden werden. In einer Befragung von 1.200 Kunden im Dezember hat ein Drittel der Befragten dies kritisch angemerkt. Einzelne Kunden mussten nach eigener Aussage dreimal verbunden werden, bevor sie die richtige Ansprechpartnerin erreichten.",
       "Für 2026 schlägt die Geschäftsführung vor, zwei zusätzliche Stellen für die schriftliche Bearbeitung zu schaffen. Die Kosten von rund 120.000 Euro pro Jahr sind im Wirtschaftsplan noch nicht enthalten. Außerdem sollen alle Mitarbeiter bis zum Sommer in einem zweiten Fachgebiet geschult werden, damit einfache Fragen aus einem anderen Bereich ohne Weiterleitung beantwortet werden können. Die Öffnungszeiten der Servicepunkte bleiben unverändert. Über die zusätzlichen Stellen soll der Aufsichtsrat in seiner Sitzung im April entscheiden."
      ]
     },
     "aufgaben": [
      {
       "frage": "Die Neuorganisation wurde beschlossen, weil …",
       "opt": [
        "die Stadtwerke vor allem Kosten sparen wollten.",
        "viele Kunden telefonisch schlecht durchkamen.",
        "die drei Gemeindewerke fusioniert wurden."
       ],
       "loesung": 1,
       "stelle": "nur jeder zweite Anruf durch",
       "erklaerung": "Anlass waren Beschwerden über die Erreichbarkeit. Die Fusion war schon 2009."
      },
      {
       "frage": "Die drei Kundencenter …",
       "opt": [
        "gab es schon vor der Fusion der Gemeindewerke.",
        "waren jeweils für ein bestimmtes Thema zuständig.",
        "wurden im Jahr 2009 neu gebaut."
       ],
       "loesung": 0,
       "stelle": "stammen aus der Zeit vor der Fusion",
       "erklaerung": "Jedes Center machte alles, und alle stammen aus der Zeit vor 2009."
      },
      {
       "frage": "Die Mitarbeiter kamen in die Fachteams …",
       "opt": [
        "nach einem internen Test.",
        "nach einer Entscheidung des Betriebsrats.",
        "nach eigener Wahl."
       ],
       "loesung": 2,
       "stelle": "haben sich ihrem Team selbst zugeordnet",
       "erklaerung": "Die Mitarbeiter haben selbst gewählt, Erfahrung und Wünsche wurden berücksichtigt."
      },
      {
       "frage": "Die Servicepunkte …",
       "opt": [
        "sind nur nach Terminvereinbarung geöffnet.",
        "sind für Kunden gedacht, die lieber persönlich kommen.",
        "werden Ende des Jahres geschlossen."
       ],
       "loesung": 1,
       "stelle": "die ihre Anliegen lieber persönlich klären",
       "erklaerung": "Man kann auch ohne Termin kommen, muss dann aber warten."
      },
      {
       "frage": "Mit dem Betriebsrat wurde vereinbart, dass …",
       "opt": [
        "es keine betriebsbedingten Kündigungen gibt.",
        "alle Mitarbeiter im Homeoffice arbeiten dürfen.",
        "niemand den Standort wechseln muss."
       ],
       "loesung": 0,
       "stelle": "dass niemand betriebsbedingt gekündigt wird",
       "erklaerung": "Homeoffice gilt nur für Mitarbeiter mit längerem Weg und nur bis zu drei Tage."
      },
      {
       "frage": "Mitarbeiter aus Altenmoor und Kirchdorf …",
       "opt": [
        "bekommen dauerhaft mehr Gehalt.",
        "erhalten eine Zeit lang Geld für die Fahrt.",
        "arbeiten nur noch von zu Hause."
       ],
       "loesung": 1,
       "stelle": "für zwei Jahre einen Fahrtkostenzuschuss",
       "erklaerung": "Der Zuschuss ist auf zwei Jahre befristet, Homeoffice nur an bis zu drei Tagen."
      },
      {
       "frage": "Einen Rückruf innerhalb von zwei Stunden bekommt man, …",
       "opt": [
        "wenn man vor 16 Uhr anruft.",
        "wenn man länger als 20 Minuten gewartet hat.",
        "wenn man sein Anliegen vorher per E-Mail schickt."
       ],
       "loesung": 0,
       "stelle": "sofern der Anruf vor 16 Uhr eingeht",
       "erklaerung": "„Sofern“ nennt die Bedingung: Anruf vor 16 Uhr."
      },
      {
       "frage": "Im Januar 2026 …",
       "opt": [
        "wurden weniger Anrufe angenommen als ein Jahr zuvor.",
        "wurde der weitaus größte Teil der Anrufe angenommen.",
        "lag die Wartezeit wieder bei über 20 Minuten."
       ],
       "loesung": 1,
       "stelle": "wurden 91 Prozent der Anrufe angenommen",
       "erklaerung": "91 Prozent gegenüber 63 Prozent im Vorjahresmonat."
      },
      {
       "frage": "Schriftliche Anfragen …",
       "opt": [
        "werden schneller beantwortet als geplant.",
        "werden wie geplant in drei Tagen beantwortet.",
        "dauern doppelt so lange wie angestrebt."
       ],
       "loesung": 2,
       "stelle": "Die Antwortzeit liegt derzeit bei durchschnittlich sechs Arbeitstagen",
       "erklaerung": "Sechs statt drei Arbeitstage, also doppelt so lange."
      },
      {
       "frage": "Kunden kritisierten, dass …",
       "opt": [
        "man bei mehreren Anliegen weiterverbunden werden muss.",
        "die Servicepunkte zu selten geöffnet sind.",
        "das Kundenportal schwer zu bedienen ist."
       ],
       "loesung": 0,
       "stelle": "muss er unter Umständen weiterverbunden werden",
       "erklaerung": "Ein Drittel der Befragten nannte das Weiterverbinden als Nachteil der Fachteams."
      },
      {
       "frage": "Die Geschäftsführung schlägt für 2026 vor, …",
       "opt": [
        "die Öffnungszeiten der Servicepunkte zu verlängern.",
        "die Fachteams wieder aufzulösen.",
        "die Mitarbeiter für ein weiteres Gebiet zu schulen."
       ],
       "loesung": 2,
       "stelle": "in einem zweiten Fachgebiet geschult werden",
       "erklaerung": "Die Teams bleiben, aber jeder lernt ein zweites Gebiet. Die Öffnungszeiten bleiben gleich."
      }
     ]
    }
   ]
  },
  {
   "nr": 3,
   "art": "textwahl",
   "name": "Lesen: Sachtext",
   "kurz": "Ein Fachtext, vier richtig/falsch und vier a/b/c",
   "was": "Ein Sachtext über eine Regelung oder Einrichtung im Betrieb, zum Beispiel den Arbeitsschutzausschuss. Erst vier Aussagen richtig oder falsch, dann vier Aufgaben a/b/c.",
   "tipp": "Bei richtig/falsch zählt jedes Wort: „immer\", „nur\", „mindestens\", „kann\" oder „muss\".",
   "zeichen": "📰",
   "farbe": "rot",
   "punkte": 8,
   "runden": [
    {
     "id": "bc1l3s1",
     "text": {
      "sorte": "zeitung",
      "quelle": "Fachmagazin Arbeit & Gesundheit",
      "titel": "Der Arbeitsschutzausschuss: Wer sitzt am Tisch, und was wird dort entschieden?",
      "zeilen": [
       "In vielen Betrieben ist der Arbeitsschutzausschuss, kurz ASA, eine Einrichtung, von der die meisten Beschäftigten zwar schon gehört haben, deren Aufgaben sie aber kaum kennen. Dabei werden dort Fragen besprochen, die den Arbeitsalltag unmittelbar betreffen: vom Lärm in der Werkhalle über die Beleuchtung im Büro bis zu den Abläufen nach einem Arbeitsunfall.",
       "Rechtsgrundlage ist das Arbeitssicherheitsgesetz. Danach muss jeder Arbeitgeber, der mehr als 20 Beschäftigte hat, einen solchen Ausschuss bilden. Teilzeitkräfte werden dabei anteilig gezählt: Wer bis zu 20 Stunden pro Woche arbeitet, zählt halb, wer bis zu 30 Stunden arbeitet, zu drei Vierteln. Ein Betrieb mit 18 Vollzeit- und sechs Teilzeitkräften kann die Grenze also überschreiten oder auch nicht, je nach Stundenzahl.",
       "Die Zusammensetzung ist gesetzlich festgelegt. Am Tisch sitzen der Arbeitgeber oder eine von ihm beauftragte Person, zwei vom Betriebsrat bestimmte Mitglieder, der Betriebsarzt, die Fachkraft für Arbeitssicherheit und die Sicherheitsbeauftragten. Gibt es keinen Betriebsrat, bleiben dessen Plätze leer. Die Pflicht zur Bildung des Ausschusses entfällt dadurch aber nicht.",
       "Der Ausschuss tritt mindestens einmal im Vierteljahr zusammen. In der Praxis werden die Sitzungen allerdings nicht selten verschoben oder fallen ganz aus, wenn gerade viel zu tun ist. Bei Kontrollen fragen die Aufsichtsbehörden und die Berufsgenossenschaften deshalb gezielt nach den Protokollen. Fehlen sie, kann ein Bußgeld verhängt werden. Wer die Sitzungen leitet, regelt das Gesetz nicht. In den meisten Betrieben übernimmt das die Geschäftsleitung oder die Fachkraft für Arbeitssicherheit, die dann auch die Einladungen verschickt.",
       "Wichtig ist, was der ASA nicht ist: Er ist kein Entscheidungsgremium. Seine Aufgabe besteht darin, Anliegen des Arbeitsschutzes und der Unfallverhütung zu beraten. Die Verantwortung für den Arbeitsschutz bleibt beim Arbeitgeber. Hält der Ausschuss zum Beispiel bessere Atemschutzmasken in der Lackiererei für nötig, muss die Geschäftsleitung darüber entscheiden und das Geld bereitstellen. Die Mitbestimmungsrechte des Betriebsrats bleiben davon unberührt.",
       "Typische Themen einer Sitzung sind die Auswertung von Unfällen und Beinaheunfällen, die Ergebnisse von Betriebsbegehungen und die Gefährdungsbeurteilungen, zu denen seit einigen Jahren ausdrücklich auch psychische Belastungen gehören. Auch die Einführung neuer Maschinen oder Arbeitsstoffe sollte im Ausschuss besprochen werden, bevor sie angeschafft werden, und nicht erst danach.",
       "Erfahrene Fachkräfte für Arbeitssicherheit raten, die Sitzungen gut vorzubereiten. Eine Tagesordnung sollte spätestens eine Woche vorher verschickt werden, damit alle Beteiligten Fragen aus ihren Bereichen sammeln können. Hilfreich ist außerdem eine Liste der offenen Maßnahmen aus früheren Sitzungen, auf der steht, wer bis wann zuständig ist. Sonst werden dieselben Punkte jedes Quartal neu besprochen, ohne dass sich etwas ändert.",
       "Beschäftigte, die nicht im Ausschuss sitzen, können trotzdem Themen einbringen. Der einfachste Weg führt über die Sicherheitsbeauftragten der eigenen Abteilung oder über den Betriebsrat. In manchen Betrieben werden die Protokolle auch im Intranet oder am Schwarzen Brett veröffentlicht, sodass jeder nachlesen kann, was besprochen wurde. Eine Pflicht dazu besteht allerdings nicht. Wer ein Problem lieber nicht unter eigenem Namen ansprechen möchte, kann den Betriebsrat bitten, es als eigenes Anliegen in die Sitzung zu bringen."
      ]
     },
     "aufgaben": [
      {
       "art": "rf",
       "satz": "Ein Betrieb mit genau 20 Beschäftigten muss einen Arbeitsschutzausschuss bilden.",
       "loesung": false,
       "stelle": "der mehr als 20 Beschäftigte hat",
       "erklaerung": "„Mehr als 20“ heißt: ab 21. Genau 20 reichen nicht."
      },
      {
       "art": "rf",
       "satz": "Teilzeitkräfte werden bei der Zahl der Beschäftigten nur zum Teil gerechnet.",
       "loesung": true,
       "stelle": "Teilzeitkräfte werden dabei anteilig gezählt",
       "erklaerung": "Je nach Stunden zählen sie halb oder zu drei Vierteln."
      },
      {
       "art": "rf",
       "satz": "Betriebe ohne Betriebsrat müssen keinen Ausschuss bilden.",
       "loesung": false,
       "stelle": "Die Pflicht zur Bildung des Ausschusses entfällt dadurch aber nicht",
       "erklaerung": "Nur die Plätze des Betriebsrats bleiben leer, die Pflicht bleibt."
      },
      {
       "art": "rf",
       "satz": "Fehlen die Sitzungsprotokolle, kann der Betrieb eine Geldstrafe bekommen.",
       "loesung": true,
       "stelle": "Fehlen sie, kann ein Bußgeld verhängt werden",
       "erklaerung": "Ein Bußgeld ist eine Geldstrafe der Behörde."
      },
      {
       "frage": "Der Arbeitsschutzausschuss …",
       "opt": [
        "entscheidet über Ausgaben für den Arbeitsschutz.",
        "berät, entscheidet aber nicht selbst.",
        "ersetzt die Mitbestimmung des Betriebsrats."
       ],
       "loesung": 1,
       "stelle": "Er ist kein Entscheidungsgremium",
       "erklaerung": "Entscheiden und bezahlen muss die Geschäftsleitung, die Rechte des Betriebsrats bleiben."
      },
      {
       "frage": "Neue Maschinen sollten im Ausschuss …",
       "opt": [
        "erst nach der Anschaffung geprüft werden.",
        "nur nach einem Unfall besprochen werden.",
        "vor dem Kauf besprochen werden."
       ],
       "loesung": 2,
       "stelle": "bevor sie angeschafft werden, und nicht erst danach",
       "erklaerung": "Der Text betont ausdrücklich: vorher, nicht erst danach."
      },
      {
       "frage": "Eine Liste der offenen Maßnahmen soll verhindern, dass …",
       "opt": [
        "die Tagesordnung zu spät verschickt wird.",
        "Themen immer wieder ohne Ergebnis besprochen werden.",
        "zu viele Personen an den Sitzungen teilnehmen."
       ],
       "loesung": 1,
       "stelle": "ohne dass sich etwas ändert",
       "erklaerung": "Ohne Liste mit Zuständigkeiten kommen dieselben Punkte jedes Quartal wieder."
      },
      {
       "frage": "Die Protokolle des Ausschusses …",
       "opt": [
        "müssen im Intranet veröffentlicht werden.",
        "dürfen nur von den Mitgliedern gelesen werden.",
        "werden in manchen Betrieben allen zugänglich gemacht."
       ],
       "loesung": 2,
       "stelle": "In manchen Betrieben werden die Protokolle auch im Intranet",
       "erklaerung": "Manche Betriebe machen das freiwillig, eine Pflicht gibt es nicht."
      }
     ]
    },
    {
     "id": "bc1l3s2",
     "text": {
      "sorte": "zeitung",
      "quelle": "Personalmagazin Betrieb & Praxis",
      "titel": "Zurück nach langer Krankheit: So funktioniert das Betriebliche Eingliederungsmanagement",
      "zeilen": [
       "Wer innerhalb eines Jahres länger als sechs Wochen arbeitsunfähig war, bekommt von seinem Arbeitgeber in der Regel einen Brief mit dem Angebot eines Betrieblichen Eingliederungsmanagements, kurz BEM. Viele Beschäftigte reagieren darauf misstrauisch. Sie fürchten, dass es eigentlich um die Vorbereitung einer Kündigung geht. Diese Sorge ist verständlich, trifft aber meist nicht zu.",
       "Das BEM ist im Sozialgesetzbuch geregelt und für Arbeitgeber Pflicht, unabhängig von der Größe des Betriebs. Dabei spielt es keine Rolle, ob die sechs Wochen am Stück oder in mehreren kürzeren Krankheitsphasen zusammengekommen sind. Gezählt werden die letzten zwölf Monate, nicht das Kalenderjahr.",
       "Für die Beschäftigten ist das BEM dagegen freiwillig. Wer das Angebot ablehnt, darf deswegen nicht benachteiligt werden. Man kann auch zunächst zustimmen und das Verfahren später jederzeit abbrechen. Arbeitsrechtler weisen allerdings darauf hin, dass eine Ablehnung bei einer späteren krankheitsbedingten Kündigung durchaus eine Rolle spielen kann: Der Arbeitgeber kann sich dann darauf berufen, er habe alles versucht.",
       "Ziel des Verfahrens ist es, gemeinsam herauszufinden, wie die Arbeitsunfähigkeit überwunden und einer erneuten Erkrankung vorgebeugt werden kann. Wie das Gespräch abläuft, ist nicht im Detail vorgeschrieben. In vielen Betrieben gibt es ein festes BEM-Team, zu dem eine Vertretung des Arbeitgebers, ein Mitglied des Betriebsrats und bei schwerbehinderten Beschäftigten die Schwerbehindertenvertretung gehören. Der Betriebsarzt wird nur hinzugezogen, wenn der Beschäftigte einverstanden ist.",
       "Eine Diagnose muss niemand nennen. Hilfreich ist es aber, zu beschreiben, welche Tätigkeiten derzeit schwerfallen, zum Beispiel schweres Heben, langes Stehen oder Arbeit unter Zeitdruck. Nur so lassen sich passende Lösungen finden. Alle Angaben, die im BEM gemacht werden, unterliegen dem Datenschutz. Sie werden getrennt von der Personalakte aufbewahrt. In die Personalakte gelangt lediglich die Information, dass ein BEM angeboten wurde und ob es stattgefunden hat.",
       "Die möglichen Maßnahmen sind vielfältig. Häufig wird eine stufenweise Wiedereingliederung vereinbart, bei der die Arbeitszeit über einige Wochen langsam gesteigert wird. In dieser Zeit erhält der Beschäftigte weiter Krankengeld oder Übergangsgeld, keinen Lohn. Andere Lösungen sind ein höhenverstellbarer Schreibtisch, eine Hebehilfe im Lager, der Wechsel von der Nacht- in die Tagschicht oder in eine andere Abteilung. Für technische Hilfen können Zuschüsse etwa bei der Rentenversicherung oder beim Integrationsamt beantragt werden.",
       "Wie gut ein BEM funktioniert, hängt stark vom Vertrauen ab. Der Betriebsratsvorsitzende eines Möbelwerks in Ostwestfalen berichtet, dass die Zahl der angenommenen Angebote in seinem Betrieb deutlich gestiegen sei, seit das Einladungsschreiben neu formuliert wurde. Statt mit einem Hinweis auf die Fehlzeiten beginnt es nun mit der Frage, was der Betrieb tun kann. Außerdem können die Beschäftigten selbst wählen, wer vom Betriebsrat am Gespräch teilnimmt.",
       "Ein BEM ist keine einmalige Angelegenheit. Werden Maßnahmen vereinbart, sollte nach einigen Wochen geprüft werden, ob sie wirken. Und wer im folgenden Jahr erneut länger als sechs Wochen krank ist, bekommt ein neues Angebot. Manche Betriebe laden die Beschäftigten nach drei Monaten zu einem kurzen Nachgespräch ein, um zu klären, ob der neue Arbeitsplatz oder die geänderten Arbeitszeiten tatsächlich entlasten. Bewährt hat sich auch, die vereinbarten Schritte schriftlich festzuhalten, damit später niemand darüber streiten muss, was eigentlich zugesagt wurde."
      ]
     },
     "aufgaben": [
      {
       "art": "rf",
       "satz": "Nur größere Betriebe sind verpflichtet, ein BEM anzubieten.",
       "loesung": false,
       "stelle": "unabhängig von der Größe des Betriebs",
       "erklaerung": "Die Pflicht gilt für alle Arbeitgeber, egal wie groß."
      },
      {
       "art": "rf",
       "satz": "Auch mehrere kurze Krankheitsphasen können zusammen ein BEM auslösen.",
       "loesung": true,
       "stelle": "oder in mehreren kürzeren Krankheitsphasen zusammengekommen sind",
       "erklaerung": "Es zählt die Summe in zwölf Monaten, nicht eine durchgehende Krankheit."
      },
      {
       "art": "rf",
       "satz": "Wer einmal zugestimmt hat, muss das BEM bis zum Ende mitmachen.",
       "loesung": false,
       "stelle": "das Verfahren später jederzeit abbrechen",
       "erklaerung": "Das BEM bleibt freiwillig, auch nach der Zustimmung."
      },
      {
       "art": "rf",
       "satz": "Was im BEM besprochen wird, kommt nicht in die Personalakte.",
       "loesung": true,
       "stelle": "Sie werden getrennt von der Personalakte aufbewahrt",
       "erklaerung": "In die Personalakte kommt nur, dass ein BEM angeboten wurde und ob es stattfand."
      },
      {
       "frage": "Wer das BEM ablehnt, …",
       "opt": [
        "wird automatisch gekündigt.",
        "kann bei einer späteren Kündigung im Nachteil sein.",
        "muss die Ablehnung schriftlich begründen."
       ],
       "loesung": 1,
       "stelle": "durchaus eine Rolle spielen kann",
       "erklaerung": "Eine Ablehnung ist erlaubt, kann aber vor Gericht später eine Rolle spielen."
      },
      {
       "frage": "Der Betriebsarzt nimmt am BEM teil, …",
       "opt": [
        "wenn der Beschäftigte zustimmt.",
        "bei jedem Gespräch.",
        "nur bei schwerbehinderten Beschäftigten."
       ],
       "loesung": 0,
       "stelle": "wenn der Beschäftigte einverstanden ist",
       "erklaerung": "Der Betriebsarzt gehört nicht automatisch zum Team."
      },
      {
       "frage": "Während der stufenweisen Wiedereingliederung …",
       "opt": [
        "zahlt der Arbeitgeber den vollen Lohn.",
        "bekommt man Krankengeld oder Übergangsgeld.",
        "arbeitet man sofort wieder Vollzeit."
       ],
       "loesung": 1,
       "stelle": "erhält der Beschäftigte weiter Krankengeld oder Übergangsgeld",
       "erklaerung": "Man gilt weiter als arbeitsunfähig, deshalb gibt es keinen Lohn."
      },
      {
       "frage": "In dem Möbelwerk werden mehr BEM-Angebote angenommen, seit …",
       "opt": [
        "der Betriebsarzt immer dabei ist.",
        "im Brief die Fehlzeiten genannt werden.",
        "das Einladungsschreiben anders formuliert ist."
       ],
       "loesung": 2,
       "stelle": "seit das Einladungsschreiben neu formuliert wurde",
       "erklaerung": "Der neue Brief beginnt gerade nicht mehr mit den Fehlzeiten."
      }
     ]
    },
    {
     "id": "bc1l3s3",
     "text": {
      "sorte": "zeitung",
      "quelle": "Mitarbeiterzeitung „Werkblick“, Herbstausgabe",
      "titel": "Die Schwerbehindertenvertretung: Ansprechpartner nicht nur für Betroffene",
      "zeilen": [
       "Im Oktober und November wird in vielen Betrieben wieder gewählt, allerdings nicht der Betriebsrat, sondern die Schwerbehindertenvertretung. Die regelmäßigen Wahlen finden alle vier Jahre statt, bundesweit im selben Zeitraum. Grund genug, die Aufgaben dieser Vertretung einmal genauer vorzustellen.",
       "Eine Schwerbehindertenvertretung wird in Betrieben gewählt, in denen wenigstens fünf schwerbehinderte Menschen nicht nur vorübergehend beschäftigt sind. Als schwerbehindert gilt, wer einen Grad der Behinderung von mindestens 50 hat. Wählen dürfen nur die schwerbehinderten und die ihnen gleichgestellten Beschäftigten. Gewählt werden kann dagegen jeder, der dem Betrieb seit mindestens sechs Monaten angehört, eine eigene Behinderung ist dafür nicht erforderlich. Neben der Vertrauensperson wird mindestens ein Stellvertreter gewählt.",
       "Die Vertrauensperson hat zwei Hauptaufgaben. Sie achtet darauf, dass der Arbeitgeber seine Pflichten gegenüber schwerbehinderten Beschäftigten erfüllt, zum Beispiel bei der Gestaltung von Arbeitsplätzen oder beim Zusatzurlaub von fünf Arbeitstagen im Jahr. Und sie berät und unterstützt die Kollegen in allen Fragen rund um ihre Behinderung. Dazu gehört auch die Frage, ob ein Arbeitsplatz mit technischen Hilfen ausgestattet werden kann, etwa mit einem Vorlesegerät oder einem besonderen Stuhl.",
       "Ein großer Teil dieser Beratung betrifft Beschäftigte, die noch gar nicht als schwerbehindert anerkannt sind. Wer etwa nach einer Krebserkrankung, mit Diabetes oder mit einer chronischen Rückenerkrankung arbeitet, weiß oft nicht, ob sich ein Antrag beim Versorgungsamt lohnt. Die Vertrauensperson hilft beim Ausfüllen. Sie weiß auch, dass Menschen mit einem Grad der Behinderung von 30 oder 40 bei der Agentur für Arbeit eine Gleichstellung beantragen können. Sie genießen dann zum Beispiel denselben besonderen Kündigungsschutz, allerdings keinen Zusatzurlaub.",
       "Gegenüber dem Arbeitgeber hat die Schwerbehindertenvertretung starke Rechte. Er muss sie in allen Angelegenheiten, die einen einzelnen schwerbehinderten Beschäftigten oder die Gruppe insgesamt betreffen, unverzüglich und umfassend unterrichten und vor einer Entscheidung anhören. Besonders wichtig ist das bei Kündigungen: Wird ein schwerbehinderter Mitarbeiter gekündigt, ohne dass die Schwerbehindertenvertretung vorher beteiligt wurde, ist die Kündigung unwirksam. Zusätzlich muss das Integrationsamt zustimmen.",
       "Auch bei Bewerbungen spielt die Vertretung eine Rolle. Bewerben sich schwerbehinderte Menschen auf eine Stelle, darf sie die Bewerbungsunterlagen einsehen und an den Vorstellungsgesprächen teilnehmen, es sei denn, der Bewerber lehnt das ausdrücklich ab. Eine Pflicht, die Behinderung im Bewerbungsschreiben anzugeben, gibt es übrigens nicht. Viele Bewerber tun es trotzdem, weil öffentliche Arbeitgeber schwerbehinderte Bewerber mit passender Qualifikation zum Vorstellungsgespräch einladen müssen.",
       "Die Vertrauensperson wird für ihre Tätigkeit ohne Minderung des Lohns von der Arbeit befreit, soweit es erforderlich ist. In Betrieben mit mindestens 100 schwerbehinderten Beschäftigten wird sie auf Wunsch ganz freigestellt. Sie hat außerdem das Recht, an allen Sitzungen des Betriebsrats beratend teilzunehmen, und kann mindestens einmal im Jahr eine eigene Versammlung der schwerbehinderten Beschäftigten einberufen.",
       "In der Praxis ist die Zusammenarbeit mit dem Betriebsrat meist eng. „Wir teilen uns die Fälle nicht auf, wir besprechen sie zusammen“, sagt Gül Arslan, die seit acht Jahren Vertrauensperson in einem Logistikzentrum mit 900 Beschäftigten ist. Ihr wichtigster Rat an Kollegen mit gesundheitlichen Problemen: früh kommen und nicht erst, wenn der Brief von der Personalabteilung schon auf dem Tisch liegt."
      ]
     },
     "aufgaben": [
      {
       "art": "rf",
       "satz": "Die regelmäßigen Wahlen der Schwerbehindertenvertretung finden überall in Deutschland zur gleichen Zeit statt.",
       "loesung": true,
       "stelle": "bundesweit im selben Zeitraum",
       "erklaerung": "Alle vier Jahre, bundesweit im Oktober und November."
      },
      {
       "art": "rf",
       "satz": "Vertrauensperson kann nur werden, wer selbst schwerbehindert ist.",
       "loesung": false,
       "stelle": "eine eigene Behinderung ist dafür nicht erforderlich",
       "erklaerung": "Wählen dürfen nur Betroffene, gewählt werden kann jeder nach sechs Monaten im Betrieb."
      },
      {
       "art": "rf",
       "satz": "Gleichgestellte Beschäftigte haben ebenfalls Anspruch auf fünf Tage Zusatzurlaub.",
       "loesung": false,
       "stelle": "Sie genießen dann zum Beispiel denselben besonderen Kündigungsschutz, allerdings keinen Zusatzurlaub",
       "erklaerung": "Kündigungsschutz ja, Zusatzurlaub nein."
      },
      {
       "art": "rf",
       "satz": "Eine Kündigung ohne vorherige Beteiligung der Schwerbehindertenvertretung ist nicht wirksam.",
       "loesung": true,
       "stelle": "ohne dass die Schwerbehindertenvertretung vorher beteiligt wurde",
       "erklaerung": "Ohne Beteiligung ist die Kündigung unwirksam, außerdem braucht es das Integrationsamt."
      },
      {
       "frage": "Eine Schwerbehindertenvertretung gibt es in Betrieben, …",
       "opt": [
        "mit mindestens 50 Beschäftigten.",
        "in denen mindestens fünf schwerbehinderte Menschen dauerhaft arbeiten.",
        "in denen bereits ein Betriebsrat besteht."
       ],
       "loesung": 1,
       "stelle": "wenigstens fünf schwerbehinderte Menschen nicht nur vorübergehend beschäftigt sind",
       "erklaerung": "Die Zahl 50 betrifft den Grad der Behinderung, nicht die Betriebsgröße."
      },
      {
       "frage": "Viele Beratungen betreffen Kollegen, die …",
       "opt": [
        "noch nicht als schwerbehindert anerkannt sind.",
        "schon lange als schwerbehindert anerkannt sind.",
        "eine neue Stelle im Betrieb suchen."
       ],
       "loesung": 0,
       "stelle": "die noch gar nicht als schwerbehindert anerkannt sind",
       "erklaerung": "Oft geht es um die Frage, ob sich ein Antrag lohnt."
      },
      {
       "frage": "Bei Vorstellungsgesprächen mit schwerbehinderten Bewerbern …",
       "opt": [
        "muss die Vertrauensperson immer dabei sein.",
        "darf die Vertrauensperson teilnehmen, wenn der Bewerber nicht widerspricht.",
        "entscheidet die Vertrauensperson über die Einstellung."
       ],
       "loesung": 1,
       "stelle": "es sei denn, der Bewerber lehnt das ausdrücklich ab",
       "erklaerung": "„Darf“ ist ein Recht, keine Pflicht. Der Bewerber kann es ablehnen."
      },
      {
       "frage": "Frau Arslan rät Kollegen mit gesundheitlichen Problemen, …",
       "opt": [
        "sich rechtzeitig an die Vertretung zu wenden.",
        "zuerst mit der Personalabteilung zu sprechen.",
        "sich lieber an den Betriebsrat zu wenden."
       ],
       "loesung": 0,
       "stelle": "früh kommen und nicht erst, wenn der Brief",
       "erklaerung": "Man soll kommen, bevor die Personalabteilung schreibt."
      }
     ]
    }
   ]
  },
  {
   "nr": 4,
   "art": "textwahl",
   "name": "Sprachbausteine: Gespräch",
   "kurz": "Ein Gespräch, zehn Lücken, fünfzehn Wörter",
   "was": "Ein Gespräch im Betrieb mit zehn Lücken und fünfzehn Wörtern. Jedes Wort passt höchstens einmal, fünf bleiben übrig.",
   "tipp": "Im Gespräch stecken Partikeln und Verweise: „ja\", „doch\", „darauf\", „womit\". Lies den Satz davor und danach.",
   "zeichen": "🧩",
   "farbe": "lila",
   "punkte": 10,
   "runden": [
    {
     "id": "bc1sb1s1",
     "text": {
      "sorte": "gespraech",
      "quelle": "Gespräch",
      "titel": "Übergabe vor dem Urlaub",
      "zeilen": [
       "Frau Berger: Herr Demir, haben Sie kurz Zeit? Ich bin ab Montag zwei Wochen weg und wollte Ihnen noch die offenen Sachen übergeben.",
       "Herr Demir: Ja, klar. Geht es um das Angebot für die Firma Wendt?",
       "Frau Berger: Genau. Die warten __(1)__ seit letzter Woche auf unsere Preise. Ich habe alles vorbereitet, __(2)__ die Frachtkosten fehlen noch.",
       "Herr Demir: Und wer kümmert sich __(3)__? Der Versand oder wir?",
       "Frau Berger: Eigentlich der Versand. Aber Frau Kühne ist krank, __(4)__ habe ich die Spedition selbst angeschrieben. Wenn die Antwort da ist, tragen Sie den Betrag bitte in Zeile zwölf ein.",
       "Herr Demir: Gut. Und wenn sich die Spedition nicht meldet?",
       "Frau Berger: Dann rufen Sie __(5)__ an. Herr Sauer, __(6)__ Durchwahl Sie im Verteiler finden, kennt den Vorgang.",
       "Herr Demir: Alles klar. Muss das Angebot __(7)__ Freitag raus?",
       "Frau Berger: Ja, __(8)__ springt Wendt womöglich ab. Die haben auch bei der Konkurrenz angefragt.",
       "Herr Demir: Verstehe. Gibt es noch etwas, __(9)__ ich achten muss?",
       "Frau Berger: Ja, beim Rabatt. Mehr als fünf Prozent sind nicht drin. Und __(10)__ Herr Wendt mehr verlangt, sagen Sie ihm bitte, dass ich mich nach dem Urlaub melde.",
       "Herr Demir: Mache ich. Schönen Urlaub!"
      ]
     },
     "aufgaben": [
      {
       "frage": "Welches Wort passt in Lücke 1?",
       "luecke": 1,
       "opt": [
        "schon",
        "nur",
        "darum",
        "deshalb",
        "dort",
        "dessen",
        "bis",
        "sonst",
        "worauf",
        "falls",
        "trotzdem",
        "deren",
        "darüber",
        "wofür",
        "damit"
       ],
       "loesung": 0,
       "fest": true,
       "erklaerung": "„schon seit“ betont, dass sie bereits lange warten."
      },
      {
       "frage": "Welches Wort passt in Lücke 2?",
       "luecke": 2,
       "opt": [
        "schon",
        "nur",
        "darum",
        "deshalb",
        "dort",
        "dessen",
        "bis",
        "sonst",
        "worauf",
        "falls",
        "trotzdem",
        "deren",
        "darüber",
        "wofür",
        "damit"
       ],
       "loesung": 1,
       "fest": true,
       "erklaerung": "„nur“ schränkt ein: alles ist fertig, außer den Frachtkosten."
      },
      {
       "frage": "Welches Wort passt in Lücke 3?",
       "luecke": 3,
       "opt": [
        "schon",
        "nur",
        "darum",
        "deshalb",
        "dort",
        "dessen",
        "bis",
        "sonst",
        "worauf",
        "falls",
        "trotzdem",
        "deren",
        "darüber",
        "wofür",
        "damit"
       ],
       "loesung": 2,
       "fest": true,
       "erklaerung": "sich kümmern um etwas wird zu „darum“, nicht „darüber“."
      },
      {
       "frage": "Welches Wort passt in Lücke 4?",
       "luecke": 4,
       "opt": [
        "schon",
        "nur",
        "darum",
        "deshalb",
        "dort",
        "dessen",
        "bis",
        "sonst",
        "worauf",
        "falls",
        "trotzdem",
        "deren",
        "darüber",
        "wofür",
        "damit"
       ],
       "loesung": 3,
       "fest": true,
       "erklaerung": "Die Krankheit ist der Grund, die Folge steht danach: „deshalb“ mit Verb an Position zwei."
      },
      {
       "frage": "Welches Wort passt in Lücke 5?",
       "luecke": 5,
       "opt": [
        "schon",
        "nur",
        "darum",
        "deshalb",
        "dort",
        "dessen",
        "bis",
        "sonst",
        "worauf",
        "falls",
        "trotzdem",
        "deren",
        "darüber",
        "wofür",
        "damit"
       ],
       "loesung": 4,
       "fest": true,
       "erklaerung": "„dort“ meint die Spedition, die gerade genannt wurde."
      },
      {
       "frage": "Welches Wort passt in Lücke 6?",
       "luecke": 6,
       "opt": [
        "schon",
        "nur",
        "darum",
        "deshalb",
        "dort",
        "dessen",
        "bis",
        "sonst",
        "worauf",
        "falls",
        "trotzdem",
        "deren",
        "darüber",
        "wofür",
        "damit"
       ],
       "loesung": 5,
       "fest": true,
       "erklaerung": "Herr Sauer ist maskulin, also Relativpronomen im Genitiv „dessen“, nicht „deren“."
      },
      {
       "frage": "Welches Wort passt in Lücke 7?",
       "luecke": 7,
       "opt": [
        "schon",
        "nur",
        "darum",
        "deshalb",
        "dort",
        "dessen",
        "bis",
        "sonst",
        "worauf",
        "falls",
        "trotzdem",
        "deren",
        "darüber",
        "wofür",
        "damit"
       ],
       "loesung": 6,
       "fest": true,
       "erklaerung": "Eine Frist: „bis Freitag“."
      },
      {
       "frage": "Welches Wort passt in Lücke 8?",
       "luecke": 8,
       "opt": [
        "schon",
        "nur",
        "darum",
        "deshalb",
        "dort",
        "dessen",
        "bis",
        "sonst",
        "worauf",
        "falls",
        "trotzdem",
        "deren",
        "darüber",
        "wofür",
        "damit"
       ],
       "loesung": 7,
       "fest": true,
       "erklaerung": "„sonst“ heißt: wenn nicht, dann passiert etwas Negatives."
      },
      {
       "frage": "Welches Wort passt in Lücke 9?",
       "luecke": 9,
       "opt": [
        "schon",
        "nur",
        "darum",
        "deshalb",
        "dort",
        "dessen",
        "bis",
        "sonst",
        "worauf",
        "falls",
        "trotzdem",
        "deren",
        "darüber",
        "wofür",
        "damit"
       ],
       "loesung": 8,
       "fest": true,
       "erklaerung": "achten auf etwas wird im Relativsatz zu „worauf“."
      },
      {
       "frage": "Welches Wort passt in Lücke 10?",
       "luecke": 10,
       "opt": [
        "schon",
        "nur",
        "darum",
        "deshalb",
        "dort",
        "dessen",
        "bis",
        "sonst",
        "worauf",
        "falls",
        "trotzdem",
        "deren",
        "darüber",
        "wofür",
        "damit"
       ],
       "loesung": 9,
       "fest": true,
       "erklaerung": "„falls“ leitet eine Bedingung ein, das Verb steht am Ende."
      }
     ]
    },
    {
     "id": "bc1sb1s2",
     "text": {
      "sorte": "gespraech",
      "quelle": "Gespräch",
      "titel": "Störung an der Verpackungsanlage",
      "zeilen": [
       "Herr Kowalski: Frau Neumann, gut, dass ich Sie erwische. Die Verpackungsanlage an Linie drei bleibt schon wieder stehen.",
       "Frau Neumann: Schon wieder? Wir haben doch am Dienstag erst die Lichtschranke getauscht.",
       "Herr Kowalski: Ja, sie läuft seitdem __(1)__ ruhiger, aber zweimal pro Schicht ist trotzdem Schluss.",
       "Frau Neumann: Hm. Liegt es vielleicht __(2)__, dass die neuen Kartons etwas dicker sind?",
       "Herr Kowalski: Das habe ich mich auch gefragt. Die Kartons kommen von einer anderen Firma, __(3)__ Ware wir seit Juni nehmen.",
       "Frau Neumann: Dann schaue ich mir das heute noch an. Können Sie die Anlage auf halbe Geschwindigkeit stellen, __(4)__ ich da bin?",
       "Herr Kowalski: Kann ich machen, dann schaffen wir __(5)__ die Tagesmenge nicht.",
       "Frau Neumann: Ich weiß. Lieber langsamer als noch ein Stau wie letzten Monat.",
       "Herr Kowalski: Stimmt. Die Frühschicht wird trotzdem meckern, __(6)__ sie das mit der halben Geschwindigkeit selbst vorgeschlagen hat. Und soll ich die Störungen __(7)__ im System eintragen oder auf dem Zettel?",
       "Frau Neumann: Im System, bitte. Nur so sehen wir, __(8)__ genau die Anlage stoppt.",
       "Herr Kowalski: Gut. Und den Lieferanten informiere ich gleich?",
       "Frau Neumann: Nein, warten Sie __(9)__ lieber, bis ich weiß, ob es wirklich an den Kartons liegt.",
       "Herr Kowalski: Okay, dann sage ich dem Einkauf erst mal nichts. Rufen Sie mich an, __(10)__ Sie mehr wissen?",
       "Frau Neumann: Mache ich."
      ]
     },
     "aufgaben": [
      {
       "frage": "Welches Wort passt in Lücke 1?",
       "luecke": 1,
       "opt": [
        "zwar",
        "daran",
        "deren",
        "bis",
        "allerdings",
        "obwohl",
        "eigentlich",
        "wann",
        "damit",
        "sobald",
        "dessen",
        "darauf",
        "trotzdem",
        "ob",
        "womit"
       ],
       "loesung": 0,
       "fest": true,
       "erklaerung": "„zwar … aber“ verbindet eine Einschränkung mit einem Gegensatz."
      },
      {
       "frage": "Welches Wort passt in Lücke 2?",
       "luecke": 2,
       "opt": [
        "zwar",
        "daran",
        "deren",
        "bis",
        "allerdings",
        "obwohl",
        "eigentlich",
        "wann",
        "damit",
        "sobald",
        "dessen",
        "darauf",
        "trotzdem",
        "ob",
        "womit"
       ],
       "loesung": 1,
       "fest": true,
       "erklaerung": "liegen an etwas wird zu „daran“, nicht „darauf“."
      },
      {
       "frage": "Welches Wort passt in Lücke 3?",
       "luecke": 3,
       "opt": [
        "zwar",
        "daran",
        "deren",
        "bis",
        "allerdings",
        "obwohl",
        "eigentlich",
        "wann",
        "damit",
        "sobald",
        "dessen",
        "darauf",
        "trotzdem",
        "ob",
        "womit"
       ],
       "loesung": 2,
       "fest": true,
       "erklaerung": "Firma ist feminin, also „deren Ware“."
      },
      {
       "frage": "Welches Wort passt in Lücke 4?",
       "luecke": 4,
       "opt": [
        "zwar",
        "daran",
        "deren",
        "bis",
        "allerdings",
        "obwohl",
        "eigentlich",
        "wann",
        "damit",
        "sobald",
        "dessen",
        "darauf",
        "trotzdem",
        "ob",
        "womit"
       ],
       "loesung": 3,
       "fest": true,
       "erklaerung": "„bis“ nennt den Endpunkt: bis zu dem Moment, in dem sie kommt."
      },
      {
       "frage": "Welches Wort passt in Lücke 5?",
       "luecke": 5,
       "opt": [
        "zwar",
        "daran",
        "deren",
        "bis",
        "allerdings",
        "obwohl",
        "eigentlich",
        "wann",
        "damit",
        "sobald",
        "dessen",
        "darauf",
        "trotzdem",
        "ob",
        "womit"
       ],
       "loesung": 4,
       "fest": true,
       "erklaerung": "„allerdings“ schränkt ein: halbe Geschwindigkeit hat einen Nachteil."
      },
      {
       "frage": "Welches Wort passt in Lücke 6?",
       "luecke": 6,
       "opt": [
        "zwar",
        "daran",
        "deren",
        "bis",
        "allerdings",
        "obwohl",
        "eigentlich",
        "wann",
        "damit",
        "sobald",
        "dessen",
        "darauf",
        "trotzdem",
        "ob",
        "womit"
       ],
       "loesung": 5,
       "fest": true,
       "erklaerung": "Gegensatz mit Verb am Ende: „obwohl“. „trotzdem“ verlangt das Verb an Position zwei."
      },
      {
       "frage": "Welches Wort passt in Lücke 7?",
       "luecke": 7,
       "opt": [
        "zwar",
        "daran",
        "deren",
        "bis",
        "allerdings",
        "obwohl",
        "eigentlich",
        "wann",
        "damit",
        "sobald",
        "dessen",
        "darauf",
        "trotzdem",
        "ob",
        "womit"
       ],
       "loesung": 6,
       "fest": true,
       "erklaerung": "„eigentlich“ macht die Frage weicher und typisch gesprochen."
      },
      {
       "frage": "Welches Wort passt in Lücke 8?",
       "luecke": 8,
       "opt": [
        "zwar",
        "daran",
        "deren",
        "bis",
        "allerdings",
        "obwohl",
        "eigentlich",
        "wann",
        "damit",
        "sobald",
        "dessen",
        "darauf",
        "trotzdem",
        "ob",
        "womit"
       ],
       "loesung": 7,
       "fest": true,
       "erklaerung": "Es geht um den Zeitpunkt der Störung: „wann genau“."
      },
      {
       "frage": "Welches Wort passt in Lücke 9?",
       "luecke": 9,
       "opt": [
        "zwar",
        "daran",
        "deren",
        "bis",
        "allerdings",
        "obwohl",
        "eigentlich",
        "wann",
        "damit",
        "sobald",
        "dessen",
        "darauf",
        "trotzdem",
        "ob",
        "womit"
       ],
       "loesung": 8,
       "fest": true,
       "erklaerung": "warten mit etwas wird zu „damit“."
      },
      {
       "frage": "Welches Wort passt in Lücke 10?",
       "luecke": 10,
       "opt": [
        "zwar",
        "daran",
        "deren",
        "bis",
        "allerdings",
        "obwohl",
        "eigentlich",
        "wann",
        "damit",
        "sobald",
        "dessen",
        "darauf",
        "trotzdem",
        "ob",
        "womit"
       ],
       "loesung": 9,
       "fest": true,
       "erklaerung": "„sobald“ heißt: in dem Moment, in dem sie etwas weiß."
      }
     ]
    },
    {
     "id": "bc1sb1s3",
     "text": {
      "sorte": "gespraech",
      "quelle": "Gespräch",
      "titel": "Gehaltswunsch eines Bewerbers",
      "zeilen": [
       "Frau Lindner: Herr Okafor, Sie wollten mit mir über die Stelle in der Systembetreuung sprechen?",
       "Herr Okafor: Ja. Wir hatten gestern das zweite Gespräch mit Herrn Petrović. Fachlich hat er uns __(1)__ überzeugt.",
       "Frau Lindner: Das klingt nach einem Aber.",
       "Herr Okafor: Na ja. Er möchte 20 Prozent mehr, als wir angeboten haben. Er hat __(2)__ auf seine Zertifikate verwiesen.",
       "Frau Lindner: Das liegt über unserem Rahmen. Mehr als zehn Prozent kann ich nur mit Zustimmung der Geschäftsführung anbieten, __(3)__ wir gerade zwei ähnliche Stellen niedriger eingestuft haben.",
       "Herr Okafor: Verstehe ich. Könnten wir ihm stattdessen etwas anderes anbieten? Er hat erwähnt, __(4)__ ihm Weiterbildung wichtig ist.",
       "Frau Lindner: Das wäre eine Möglichkeit. Wir haben ein Budget für Zertifizierungen, __(5)__ bisher kaum jemand nutzt.",
       "Herr Okafor: Sehr gut. Und das Homeoffice? Er wohnt in Wuppertal, __(6)__ gut eine Stunde entfernt.",
       "Frau Lindner: Zwei Tage pro Woche sind bei uns Standard. Mehr geht nur, __(7)__ die Teamleitung zustimmt.",
       "Herr Okafor: Das wäre in diesem Fall ich. Ich hätte nichts __(8)__.",
       "Frau Lindner: Gut, dann rufe ich ihn morgen an. Wissen Sie, __(9)__ er sonst noch Wert legt?",
       "Herr Okafor: Ich glaube, ein fester Ansprechpartner in der Einarbeitung. Das kann ich ihm zusagen, ich arbeite ihn __(10)__ selbst ein."
      ]
     },
     "aufgaben": [
      {
       "frage": "Welches Wort passt in Lücke 1?",
       "luecke": 1,
       "opt": [
        "durchaus",
        "dabei",
        "zumal",
        "dass",
        "das",
        "also",
        "wenn",
        "dagegen",
        "worauf",
        "ohnehin",
        "dessen",
        "worüber",
        "obwohl",
        "ob",
        "worin"
       ],
       "loesung": 0,
       "fest": true,
       "erklaerung": "„durchaus“ verstärkt: er hat wirklich überzeugt, auch wenn noch ein Aber kommt."
      },
      {
       "frage": "Welches Wort passt in Lücke 2?",
       "luecke": 2,
       "opt": [
        "durchaus",
        "dabei",
        "zumal",
        "dass",
        "das",
        "also",
        "wenn",
        "dagegen",
        "worauf",
        "ohnehin",
        "dessen",
        "worüber",
        "obwohl",
        "ob",
        "worin"
       ],
       "loesung": 1,
       "fest": true,
       "erklaerung": "„dabei“ bezieht sich auf die Situation, in der er seine Forderung gestellt hat."
      },
      {
       "frage": "Welches Wort passt in Lücke 3?",
       "luecke": 3,
       "opt": [
        "durchaus",
        "dabei",
        "zumal",
        "dass",
        "das",
        "also",
        "wenn",
        "dagegen",
        "worauf",
        "ohnehin",
        "dessen",
        "worüber",
        "obwohl",
        "ob",
        "worin"
       ],
       "loesung": 2,
       "fest": true,
       "erklaerung": "„zumal“ nennt einen zusätzlichen, verstärkenden Grund, das Verb steht am Ende."
      },
      {
       "frage": "Welches Wort passt in Lücke 4?",
       "luecke": 4,
       "opt": [
        "durchaus",
        "dabei",
        "zumal",
        "dass",
        "das",
        "also",
        "wenn",
        "dagegen",
        "worauf",
        "ohnehin",
        "dessen",
        "worüber",
        "obwohl",
        "ob",
        "worin"
       ],
       "loesung": 3,
       "fest": true,
       "erklaerung": "Nach „erwähnen“ folgt ein Inhaltssatz mit „dass“, nicht „ob“."
      },
      {
       "frage": "Welches Wort passt in Lücke 5?",
       "luecke": 5,
       "opt": [
        "durchaus",
        "dabei",
        "zumal",
        "dass",
        "das",
        "also",
        "wenn",
        "dagegen",
        "worauf",
        "ohnehin",
        "dessen",
        "worüber",
        "obwohl",
        "ob",
        "worin"
       ],
       "loesung": 4,
       "fest": true,
       "erklaerung": "Budget ist neutral, also Relativpronomen „das“ im Akkusativ."
      },
      {
       "frage": "Welches Wort passt in Lücke 6?",
       "luecke": 6,
       "opt": [
        "durchaus",
        "dabei",
        "zumal",
        "dass",
        "das",
        "also",
        "wenn",
        "dagegen",
        "worauf",
        "ohnehin",
        "dessen",
        "worüber",
        "obwohl",
        "ob",
        "worin"
       ],
       "loesung": 5,
       "fest": true,
       "erklaerung": "„also“ erklärt, was „Wuppertal“ für die Entfernung bedeutet."
      },
      {
       "frage": "Welches Wort passt in Lücke 7?",
       "luecke": 7,
       "opt": [
        "durchaus",
        "dabei",
        "zumal",
        "dass",
        "das",
        "also",
        "wenn",
        "dagegen",
        "worauf",
        "ohnehin",
        "dessen",
        "worüber",
        "obwohl",
        "ob",
        "worin"
       ],
       "loesung": 6,
       "fest": true,
       "erklaerung": "Bedingung mit Verb am Ende: „wenn“."
      },
      {
       "frage": "Welches Wort passt in Lücke 8?",
       "luecke": 8,
       "opt": [
        "durchaus",
        "dabei",
        "zumal",
        "dass",
        "das",
        "also",
        "wenn",
        "dagegen",
        "worauf",
        "ohnehin",
        "dessen",
        "worüber",
        "obwohl",
        "ob",
        "worin"
       ],
       "loesung": 7,
       "fest": true,
       "erklaerung": "Feste Wendung: nichts dagegen haben."
      },
      {
       "frage": "Welches Wort passt in Lücke 9?",
       "luecke": 9,
       "opt": [
        "durchaus",
        "dabei",
        "zumal",
        "dass",
        "das",
        "also",
        "wenn",
        "dagegen",
        "worauf",
        "ohnehin",
        "dessen",
        "worüber",
        "obwohl",
        "ob",
        "worin"
       ],
       "loesung": 8,
       "fest": true,
       "erklaerung": "Wert legen auf etwas wird im Fragesatz zu „worauf“."
      },
      {
       "frage": "Welches Wort passt in Lücke 10?",
       "luecke": 10,
       "opt": [
        "durchaus",
        "dabei",
        "zumal",
        "dass",
        "das",
        "also",
        "wenn",
        "dagegen",
        "worauf",
        "ohnehin",
        "dessen",
        "worüber",
        "obwohl",
        "ob",
        "worin"
       ],
       "loesung": 9,
       "fest": true,
       "erklaerung": "„ohnehin“ heißt: das passiert sowieso."
      }
     ]
    }
   ]
  },
  {
   "nr": 5,
   "art": "textwahl",
   "name": "Sprachbausteine: Geschäftsbrief",
   "kurz": "Ein Geschäftsbrief, zehn Lücken a/b/c",
   "was": "Ein Geschäftsbrief mit zehn Lücken und je drei Möglichkeiten.",
   "tipp": "Feste Verbindungen erkennen: „in Kraft treten\", „Rücksicht nehmen auf\", „unter Vorbehalt\".",
   "zeichen": "🔤",
   "farbe": "turq",
   "punkte": 10,
   "runden": [
    {
     "id": "bc1sb2s1",
     "text": {
      "sorte": "brief",
      "quelle": "Brief",
      "titel": "Beanstandung einer Lieferung",
      "zeilen": [
       "Sehr geehrter Herr Kranz,",
       "am 12. März haben wir die Lieferung zu unserer Bestellung Nr. 4471 erhalten. Bei der Eingangskontrolle mussten wir __(1)__ feststellen, dass 14 der 60 Hydraulikschläuche nicht der vereinbarten Druckstufe entsprechen. Wir haben die betroffenen Schläuche gesondert gelagert und __(2)__ sie Ihnen zur Abholung zur Verfügung.",
       "Da wir die Teile für einen Kundenauftrag benötigen, der Ende des Monats __(3)__ Abschluss gebracht werden soll, bitten wir Sie, uns bis spätestens 20. März Ersatz zu liefern. __(4)__ dies nicht möglich sein, bitten wir um eine kurze Nachricht, damit wir uns rechtzeitig __(5)__ andere Lösung bemühen können. Die Kosten für Abholung und Ersatzlieferung gehen __(6)__ Ihren Lasten.",
       "Wir weisen __(7)__ hin, dass dies bereits die zweite Beanstandung in diesem Quartal ist. Wir bitten Sie daher, die Ursache zu prüfen und uns über das Ergebnis in Kenntnis zu __(8)__. Wenn sich die Qualität nicht verbessert, sähen wir uns __(9)__, die Zusammenarbeit zu überdenken.",
       "Für Ihre Bemühungen danken wir Ihnen __(10)__ Voraus.",
       "Mit freundlichen Grüßen",
       "Sandra Wolff, Einkauf, Becker Landtechnik GmbH"
      ]
     },
     "aufgaben": [
      {
       "frage": "Was passt in Lücke 1?",
       "luecke": 1,
       "opt": [
        "bereits",
        "leider",
        "gerne"
       ],
       "loesung": 1,
       "fest": true,
       "erklaerung": "Eine unangenehme Feststellung: „leider feststellen müssen“."
      },
      {
       "frage": "Was passt in Lücke 2?",
       "luecke": 2,
       "opt": [
        "legen",
        "geben",
        "stellen"
       ],
       "loesung": 2,
       "fest": true,
       "erklaerung": "Feste Verbindung: etwas zur Verfügung stellen."
      },
      {
       "frage": "Was passt in Lücke 3?",
       "luecke": 3,
       "opt": [
        "zum",
        "im",
        "am"
       ],
       "loesung": 0,
       "fest": true,
       "erklaerung": "Nomen-Verb-Verbindung: etwas zum Abschluss bringen."
      },
      {
       "frage": "Was passt in Lücke 4?",
       "luecke": 4,
       "opt": [
        "Falls",
        "Wenn",
        "Sollte"
       ],
       "loesung": 2,
       "fest": true,
       "erklaerung": "Mit dem Infinitiv „sein“ am Ende geht nur „Sollte“ am Satzanfang."
      },
      {
       "frage": "Was passt in Lücke 5?",
       "luecke": 5,
       "opt": [
        "für eine",
        "um eine",
        "an eine"
       ],
       "loesung": 1,
       "fest": true,
       "erklaerung": "sich um etwas bemühen."
      },
      {
       "frage": "Was passt in Lücke 6?",
       "luecke": 6,
       "opt": [
        "auf",
        "für",
        "zu"
       ],
       "loesung": 2,
       "fest": true,
       "erklaerung": "Feste Wendung: etwas geht zu Ihren Lasten."
      },
      {
       "frage": "Was passt in Lücke 7?",
       "luecke": 7,
       "opt": [
        "darauf",
        "darüber",
        "daran"
       ],
       "loesung": 0,
       "fest": true,
       "erklaerung": "hinweisen auf etwas wird zu „darauf“."
      },
      {
       "frage": "Was passt in Lücke 8?",
       "luecke": 8,
       "opt": [
        "stellen",
        "setzen",
        "bringen"
       ],
       "loesung": 1,
       "fest": true,
       "erklaerung": "Formelle Wendung: jemanden in Kenntnis setzen."
      },
      {
       "frage": "Was passt in Lücke 9?",
       "luecke": 9,
       "opt": [
        "gezwungen",
        "bemüht",
        "bereit"
       ],
       "loesung": 0,
       "fest": true,
       "erklaerung": "sich gezwungen sehen, etwas zu tun: Es bleibt keine andere Wahl."
      },
      {
       "frage": "Was passt in Lücke 10?",
       "luecke": 10,
       "opt": [
        "zum",
        "im",
        "vom"
       ],
       "loesung": 1,
       "fest": true,
       "erklaerung": "Feste Wendung: im Voraus danken."
      }
     ]
    },
    {
     "id": "bc1sb2s2",
     "text": {
      "sorte": "brief",
      "quelle": "Brief",
      "titel": "Einladung zum Vorstellungsgespräch",
      "zeilen": [
       "Sehr geehrte Frau Nowak,",
       "vielen Dank für Ihre Bewerbung als Teamleiterin in unserer Debitorenbuchhaltung und für das Interesse, __(1)__ Sie unserem Unternehmen entgegenbringen. Ihre Unterlagen haben uns überzeugt, __(2)__ möchten wir Sie gern zu einem persönlichen Gespräch einladen.",
       "Das Gespräch findet am Dienstag, dem 14. Oktober, um 10 Uhr in unserer Zentrale in der Industriestraße 8 statt. Falls Ihnen der Termin nicht __(3)__, geben Sie uns bitte bis Freitag Bescheid. Am Gespräch nehmen neben mir der Leiter des Rechnungswesens, Herr Gruber, __(4)__ ein Mitglied des Betriebsrats teil.",
       "Bitte planen Sie etwa zwei Stunden ein. Im Anschluss __(5)__ das Gespräch möchten wir Ihnen gern Ihren möglichen Arbeitsplatz zeigen. Ihre Reisekosten erstatten wir Ihnen __(6)__ Höhe einer Bahnfahrt in der zweiten Klasse. Bringen Sie bitte Ihre Zeugnisse im Original mit, __(7)__ wir sie mit den eingereichten Kopien vergleichen können.",
       "Wir freuen uns __(8)__, Sie persönlich kennenzulernen. Ihre Bewerbung wird selbstverständlich vertraulich __(9)__.",
       "Für Rückfragen stehe ich Ihnen unter der Durchwahl 0221 4478-213 gern zur __(10)__.",
       "Mit freundlichen Grüßen",
       "Martina Schulte, Personalabteilung, Rheinwerk Versicherungsdienst GmbH"
      ]
     },
     "aufgaben": [
      {
       "frage": "Was passt in Lücke 1?",
       "luecke": 1,
       "opt": [
        "dem",
        "das",
        "den"
       ],
       "loesung": 1,
       "fest": true,
       "erklaerung": "Interesse ist neutral und hier Akkusativobjekt: „das Sie entgegenbringen“."
      },
      {
       "frage": "Was passt in Lücke 2?",
       "luecke": 2,
       "opt": [
        "obwohl",
        "weshalb",
        "daher"
       ],
       "loesung": 2,
       "fest": true,
       "erklaerung": "Nach der Lücke steht das Verb an Position zwei, das passt nur zu „daher“."
      },
      {
       "frage": "Was passt in Lücke 3?",
       "luecke": 3,
       "opt": [
        "passt",
        "gefällt",
        "steht"
       ],
       "loesung": 0,
       "fest": true,
       "erklaerung": "Ein Termin „passt“ jemandem oder nicht."
      },
      {
       "frage": "Was passt in Lücke 4?",
       "luecke": 4,
       "opt": [
        "sowohl",
        "sowie",
        "weder"
       ],
       "loesung": 1,
       "fest": true,
       "erklaerung": "„sowie“ verbindet wie „und“. „sowohl“ braucht „als auch“, „weder“ braucht „noch“."
      },
      {
       "frage": "Was passt in Lücke 5?",
       "luecke": 5,
       "opt": [
        "nach",
        "auf",
        "an"
       ],
       "loesung": 2,
       "fest": true,
       "erklaerung": "Feste Wendung: im Anschluss an etwas."
      },
      {
       "frage": "Was passt in Lücke 6?",
       "luecke": 6,
       "opt": [
        "in",
        "auf",
        "mit"
       ],
       "loesung": 0,
       "fest": true,
       "erklaerung": "Formell: in Höhe von, hier mit Genitiv „in Höhe einer Bahnfahrt“."
      },
      {
       "frage": "Was passt in Lücke 7?",
       "luecke": 7,
       "opt": [
        "um",
        "damit",
        "deshalb"
       ],
       "loesung": 1,
       "fest": true,
       "erklaerung": "Zweck mit eigenem Subjekt „wir“: „damit“. „um“ braucht „zu“ und Infinitiv."
      },
      {
       "frage": "Was passt in Lücke 8?",
       "luecke": 8,
       "opt": [
        "darüber",
        "dafür",
        "darauf"
       ],
       "loesung": 2,
       "fest": true,
       "erklaerung": "Sich auf etwas Zukünftiges freuen: „darauf“. „darüber“ gilt für etwas, das schon passiert ist."
      },
      {
       "frage": "Was passt in Lücke 9?",
       "luecke": 9,
       "opt": [
        "behandelt",
        "gehandelt",
        "verhandelt"
       ],
       "loesung": 0,
       "fest": true,
       "erklaerung": "etwas vertraulich behandeln."
      },
      {
       "frage": "Was passt in Lücke 10?",
       "luecke": 10,
       "opt": [
        "Auskunft",
        "Verfügung",
        "Hilfe"
       ],
       "loesung": 1,
       "fest": true,
       "erklaerung": "Feste Wendung: jemandem zur Verfügung stehen."
      }
     ]
    },
    {
     "id": "bc1sb2s3",
     "text": {
      "sorte": "brief",
      "quelle": "Brief",
      "titel": "Anpassung unserer Preise zum 1. Januar",
      "zeilen": [
       "Sehr geehrte Damen und Herren,",
       "wie Sie wissen, sind die Kosten für Rohstoffe und Energie in den vergangenen Monaten deutlich gestiegen. Wir haben diese Entwicklung lange aufgefangen, ohne sie an unsere Kunden __(1)__. __(2)__ der anhaltend hohen Preise für Aluminium sehen wir uns nun jedoch gezwungen, unsere Preise zum 1. Januar anzupassen.",
       "Die neuen Preise __(3)__ Sie bitte der beiliegenden Liste. Im Durchschnitt beträgt die Erhöhung 6,5 Prozent, __(4)__ einzelne Artikel stärker und andere gar nicht betroffen sind. Für alle Bestellungen, die bis zum 15. Dezember bei uns __(5)__, gelten noch die bisherigen Preise.",
       "Wir sind uns __(6)__ bewusst, dass diese Nachricht für Sie nicht erfreulich ist. Gern __(7)__ wir Ihnen ein Angebot für eine Rahmenvereinbarung, die Ihnen für zwölf Monate feste Preise sichert. Ihr Ansprechpartner im Vertrieb wird sich in den nächsten Tagen __(8)__ Ihnen in Verbindung setzen.",
       "Wir hoffen, Sie auch im kommenden Jahr __(9)__ unseren Kunden zählen zu dürfen, und danken Ihnen für Ihr __(10)__.",
       "Mit freundlichen Grüßen",
       "Dr. Peter Albers, Geschäftsführung, Albers Profiltechnik GmbH"
      ]
     },
     "aufgaben": [
      {
       "frage": "Was passt in Lücke 1?",
       "luecke": 1,
       "opt": [
        "abzugeben",
        "weiterzugeben",
        "aufzugeben"
       ],
       "loesung": 1,
       "fest": true,
       "erklaerung": "Kosten an die Kunden weitergeben."
      },
      {
       "frage": "Was passt in Lücke 2?",
       "luecke": 2,
       "opt": [
        "Trotz",
        "Statt",
        "Aufgrund"
       ],
       "loesung": 2,
       "fest": true,
       "erklaerung": "Die hohen Preise sind der Grund, also „Aufgrund“ mit Genitiv."
      },
      {
       "frage": "Was passt in Lücke 3?",
       "luecke": 3,
       "opt": [
        "entnehmen",
        "nehmen",
        "vernehmen"
       ],
       "loesung": 0,
       "fest": true,
       "erklaerung": "etwas einem Dokument entnehmen: dort nachlesen."
      },
      {
       "frage": "Was passt in Lücke 4?",
       "luecke": 4,
       "opt": [
        "wodurch",
        "wobei",
        "womit"
       ],
       "loesung": 1,
       "fest": true,
       "erklaerung": "„wobei“ ergänzt eine Einschränkung zum Durchschnittswert."
      },
      {
       "frage": "Was passt in Lücke 5?",
       "luecke": 5,
       "opt": [
        "eintreten",
        "einlaufen",
        "eingehen"
       ],
       "loesung": 2,
       "fest": true,
       "erklaerung": "Bestellungen, Briefe und Zahlungen „gehen ein“."
      },
      {
       "frage": "Was passt in Lücke 6?",
       "luecke": 6,
       "opt": [
        "dessen",
        "darüber",
        "davon"
       ],
       "loesung": 0,
       "fest": true,
       "erklaerung": "sich einer Sache bewusst sein verlangt den Genitiv: „dessen“."
      },
      {
       "frage": "Was passt in Lücke 7?",
       "luecke": 7,
       "opt": [
        "unterlegen",
        "unterbreiten",
        "unterstellen"
       ],
       "loesung": 1,
       "fest": true,
       "erklaerung": "Formell: jemandem ein Angebot unterbreiten."
      },
      {
       "frage": "Was passt in Lücke 8?",
       "luecke": 8,
       "opt": [
        "bei",
        "zu",
        "mit"
       ],
       "loesung": 2,
       "fest": true,
       "erklaerung": "sich mit jemandem in Verbindung setzen."
      },
      {
       "frage": "Was passt in Lücke 9?",
       "luecke": 9,
       "opt": [
        "zu",
        "an",
        "bei"
       ],
       "loesung": 0,
       "fest": true,
       "erklaerung": "jemanden zu seinen Kunden zählen."
      },
      {
       "frage": "Was passt in Lücke 10?",
       "luecke": 10,
       "opt": [
        "Einverständnis",
        "Verständnis",
        "Verstehen"
       ],
       "loesung": 1,
       "fest": true,
       "erklaerung": "Feste Formel: Wir danken für Ihr Verständnis."
      }
     ]
    }
   ]
  }
 ],
 "laeufe": [
  {
   "id": "tbc1ll1",
   "titel": "Prüfungslauf 1",
   "minuten": 70,
   "teile": [
    {
     "nr": 1,
     "art": "anzeigenX",
     "anzeigen": [
      {
       "b": "a",
       "quelle": "Dirk S., Fachanwalt für Arbeitsrecht",
       "zeilen": [
        "Gegen eine Abmahnung, die Sie für ungerecht halten, können Sie eine schriftliche Gegendarstellung verfassen.",
        "Der Arbeitgeber muss sie zu Ihrer Personalakte nehmen.",
        "Unterschreiben müssen Sie die Abmahnung nicht, höchstens den Empfang, und legen Sie Belege bei, zum Beispiel eine Bescheinigung über den Zugausfall."
       ],
       "motiv": "buero"
      },
      {
       "b": "b",
       "quelle": "Susanne T., Personalreferentin",
       "zeilen": [
        "Sie haben jederzeit das Recht, Ihre Personalakte einzusehen.",
        "Melden Sie sich einfach bei der Personalabteilung und machen Sie einen Termin aus.",
        "Wenn Sie möchten, kann ein Mitglied des Betriebsrats dabei sein."
       ],
       "motiv": "buero"
      },
      {
       "b": "c",
       "quelle": "Werner H., Betriebsrat in einem Maschinenbaubetrieb",
       "zeilen": [
        "Bei Gesprächen über Ihre Leistung, Ihre Beurteilung oder Ihre berufliche Entwicklung dürfen Sie ein Betriebsratsmitglied mitnehmen.",
        "Das steht so im Betriebsverfassungsgesetz.",
        "Sagen Sie Ihrem Vorgesetzten vorher Bescheid, damit es keine Überraschung gibt, verbieten kann er es nicht."
       ],
       "motiv": "buero"
      },
      {
       "b": "d",
       "quelle": "Elke M., Beraterin bei einer Mobbing-Beratungsstelle",
       "zeilen": [
        "Führen Sie ein Tagebuch: Datum, Uhrzeit, was genau gesagt wurde, wer dabei war.",
        "Ohne solche Aufzeichnungen ist es fast unmöglich, später etwas nachzuweisen.",
        "Sie können sich außerdem beim Betriebsrat oder bei der Beschwerdestelle im Betrieb offiziell beschweren."
       ],
       "motiv": "buero"
      },
      {
       "b": "e",
       "quelle": "Oliver K., Gewerkschaftssekretär IT und Dienstleistungen",
       "zeilen": [
        "Einen Betriebsrat können Sie schon in Betrieben mit fünf ständigen Mitarbeitern wählen.",
        "Die Gewerkschaft hilft beim Einladen zur Wahlversammlung und erklärt die Fristen.",
        "Die Kollegen, die zur Wahl einladen, haben einen besonderen Kündigungsschutz, und der Arbeitgeber darf die Wahl nicht behindern."
       ],
       "motiv": "buero"
      },
      {
       "b": "f",
       "quelle": "Jana W., freigestellte Betriebsrätin",
       "zeilen": [
        "Für Betriebsratssitzungen werden Sie von der Arbeit freigestellt, Ihr Lohn läuft weiter.",
        "Auch notwendige Schulungen bezahlt der Arbeitgeber.",
        "Ihr Vorgesetzter muss das einplanen, auch wenn es ihm gerade nicht passt."
       ],
       "motiv": "buero"
      },
      {
       "b": "g",
       "quelle": "Ludger B., Personalleiter",
       "zeilen": [
        "Wenn Ihr Vorgesetzter wechselt, haben Sie Anspruch auf ein Zwischenzeugnis.",
        "Das ist der beste Weg, Ihre bisherigen Leistungen festzuhalten, bevor die neue Chefin sich ein eigenes Bild macht.",
        "Bitten Sie am besten Ihre alte Führungskraft, es noch vor ihrem Wechsel zu unterschreiben."
       ],
       "motiv": "buero"
      },
      {
       "b": "h",
       "quelle": "Anja F., Betriebsrätin in einem Handelsunternehmen",
       "zeilen": [
        "Ob Sie an einen anderen Ort versetzt werden dürfen, hängt zuerst von Ihrem Arbeitsvertrag ab.",
        "Ist dort ein fester Arbeitsort genannt, geht das nicht ohne Ihr Einverständnis.",
        "In Betrieben mit mehr als 20 Mitarbeitern muss außerdem der Betriebsrat einer Versetzung zustimmen."
       ],
       "motiv": "buero"
      }
     ],
     "aufgaben": [
      {
       "situation": "Mein Abteilungsleiter geht Ende des Monats in eine andere Niederlassung. Die neue Chefin kennt meine Arbeit nicht. Ich möchte sicher sein, dass meine guten Ergebnisse der letzten Jahre nicht vergessen werden.",
       "loesung": "g",
       "erklaerung": "Beim Wechsel des Vorgesetzten gibt es Anspruch auf ein Zwischenzeugnis.",
       "sitKopf": "Der Eintrag",
       "xText": "Keine Antwort passt"
      },
      {
       "situation": "Ich habe eine Abmahnung bekommen, weil ich zweimal zu spät war. Beide Male ist mein Zug ausgefallen, ich habe sofort angerufen. Mein Chef will davon nichts hören.",
       "loesung": "a",
       "erklaerung": "Gegen die Abmahnung hilft eine Gegendarstellung mit Belegen für die Personalakte.",
       "sitKopf": "Der Eintrag",
       "xText": "Keine Antwort passt"
      },
      {
       "situation": "Nächste Woche habe ich mein Jahresgespräch. Letztes Jahr wurde ich dort sehr unfair beurteilt, und ich habe Angst, wieder allein mit meinem Vorgesetzten im Raum zu sitzen.",
       "loesung": "c",
       "erklaerung": "Bei einem Beurteilungsgespräch darf sie ein Betriebsratsmitglied mitnehmen.",
       "sitKopf": "Der Eintrag",
       "xText": "Keine Antwort passt"
      },
      {
       "situation": "Wir sind zwölf Leute in einer kleinen Softwarefirma und haben keine Mitarbeitervertretung. Als wir das Thema Betriebsrat angesprochen haben, hat unser Geschäftsführer ziemlich genervt reagiert.",
       "loesung": "e",
       "erklaerung": "Ab fünf Mitarbeitern ist ein Betriebsrat möglich, die Gewerkschaft hilft und die Einladenden sind geschützt.",
       "sitKopf": "Der Eintrag",
       "xText": "Keine Antwort passt"
      },
      {
       "situation": "Ich arbeite seit sechs Jahren in einem Großhandel mit 300 Mitarbeitern. Mein Chef will mich in eine Filiale schicken, die 40 Kilometer entfernt ist. In meinem Vertrag steht als Arbeitsort Köln.",
       "loesung": "h",
       "erklaerung": "Bei festem Arbeitsort im Vertrag ist ihr Einverständnis nötig, außerdem muss der Betriebsrat zustimmen.",
       "sitKopf": "Der Eintrag",
       "xText": "Keine Antwort passt"
      },
      {
       "situation": "Meine Teamleiterin schickt mir abends und am Wochenende Nachrichten auf mein privates Handy und erwartet schnelle Antworten. Muss ich überhaupt reagieren?",
       "loesung": "x",
       "erklaerung": "Zur Erreichbarkeit nach Feierabend gibt keine Antwort einen Rat.",
       "sitKopf": "Der Eintrag",
       "xText": "Keine Antwort passt"
      }
     ]
    },
    {
     "nr": 2,
     "art": "textwahl",
     "text": {
      "sorte": "bericht",
      "quelle": "Projektbericht der IT-Abteilung, Lindner Logistik GmbH",
      "titel": "Abschlussbericht: Einführung des IT-Ticketsystems",
      "zeilen": [
       "Die IT-Abteilung der Lindner Logistik GmbH betreut mit sieben Mitarbeitern rund 650 Arbeitsplätze an vier Standorten, dazu die Handscanner im Lager und die Bordcomputer von 180 Lkw. Bis Anfang 2025 gingen Störungsmeldungen auf allen denkbaren Wegen ein: per Telefon, per E-Mail an einzelne Kollegen, über Zettel am Schreibtisch oder einfach auf dem Flur. Einen Überblick darüber, welche Fälle offen waren und wer sie bearbeitete, gab es nicht.",
       "Besonders deutlich wurde das Problem im Herbst 2024. Nach einem Update fielen an einem Montag im Lager Bremen mehrere Handscanner aus. Drei IT-Kollegen arbeiteten unabhängig voneinander an derselben Störung, während eine Meldung aus der Disposition zu einem defekten Drucker zwei Wochen lang liegen blieb. Die Geschäftsführung beauftragte die IT daraufhin, ein Ticketsystem einzuführen.",
       "Bei der Auswahl wurden drei Anbieter verglichen. Den Ausschlag gab am Ende nicht der Preis, sondern die Frage, ob Fahrer und Lagermitarbeiter Störungen auch ohne eigenes Firmen-E-Mail-Konto melden können. Das gewählte System erlaubt Meldungen über ein einfaches Webformular, das auf jedem Smartphone funktioniert, sowie über eine zentrale Telefonnummer.",
       "Vor dem Start wurde mit dem Betriebsrat eine Vereinbarung zur Nutzung der Daten abgeschlossen. Darin ist festgelegt, dass die Auswertungen des Systems nicht zur Leistungskontrolle einzelner IT-Mitarbeiter verwendet werden dürfen. Auch die Namen der meldenden Kollegen erscheinen nur in den Tickets selbst, nicht in den Monatsberichten an die Geschäftsführung. Ohne diese Vereinbarung wäre die Einführung nicht möglich gewesen, denn bei technischen Einrichtungen, mit denen sich Leistung überwachen lässt, bestimmt der Betriebsrat mit.",
       "Jede Meldung erhält eine Nummer und eine Priorität. Für Störungen, die den Versand behindern, etwa ausgefallene Scanner oder Probleme mit der Tourenplanung, gilt Priorität 1: Hier muss innerhalb von 30 Minuten jemand reagieren. Andere Störungen werden innerhalb eines Arbeitstags angenommen, Wünsche wie neue Software oder ein zusätzlicher Bildschirm innerhalb einer Woche.",
       "Die Einführung erfolgte im März 2025 an allen Standorten gleichzeitig. Im Nachhinein war das ein Fehler. In den ersten zwei Wochen gingen über 900 Meldungen ein, fast dreimal so viele wie sonst in einem ganzen Monat, weil viele Mitarbeiter nun auch alte, längst bekannte Probleme meldeten. Das Team kam mit der Bearbeitung kaum nach, und einige Kollegen in der Verwaltung fühlten sich mit ihren Anliegen nicht ernst genommen.",
       "Um den Rückstau abzubauen, hat die IT im April zwei Wochen lang alle nicht dringenden Projekte zurückgestellt und eine externe Aushilfe eingesetzt. Gleichzeitig wurden 140 Meldungen, die sich auf dasselbe Problem bezogen, zusammengefasst. Seit Mai liegt der Bestand offener Tickets stabil zwischen 40 und 60.",
       "Ein unerwarteter Nutzen des Systems ist die Auswertung. Erstmals lässt sich zuverlässig sagen, wo die meisten Störungen entstehen. So zeigte sich, dass fast ein Fünftel aller Meldungen die Etikettendrucker im Lager betraf, und zwar ganz überwiegend Geräte eines älteren Modells. Diese 26 Drucker werden bis Ende des Jahres ersetzt. Die Investition von rund 34.000 Euro dürfte sich nach Einschätzung der IT innerhalb von zwei Jahren durch weniger Ausfallzeiten bezahlt machen.",
       "Weniger erfolgreich war bisher die Wissensdatenbank. Gedacht war, dass Mitarbeiter einfache Probleme, etwa ein vergessenes Passwort, mit Hilfe kurzer Anleitungen selbst lösen. Tatsächlich werden die Anleitungen kaum aufgerufen. Eine Umfrage ergab, dass viele Kollegen gar nicht wussten, dass es sie gibt. Seit Oktober erscheint beim Ausfüllen des Formulars automatisch ein Hinweis auf passende Artikel.",
       "Die Zufriedenheit mit der IT wird nach jedem abgeschlossenen Ticket mit einer kurzen Frage erhoben. Im Durchschnitt vergeben die Nutzer 4,2 von 5 Punkten. Am schlechtesten schneidet die Kommunikation ab: Mehrere Kollegen bemängeln, dass sie nicht erfahren, wann ihr Problem voraussichtlich gelöst wird.",
       "Für 2026 plant die IT, bei jedem Ticket eine voraussichtliche Bearbeitungszeit anzuzeigen. Außerdem soll das System an die Bordcomputer der Lkw angebunden werden, damit Fahrer Störungen direkt aus dem Fahrzeug melden können. Ein Antrag auf das dafür nötige Budget wird der Geschäftsführung im ersten Quartal vorgelegt. Sollte das Budget nicht bewilligt werden, bleibt es für die Fahrer bei der Meldung über das Smartphone."
      ]
     },
     "aufgaben": [
      {
       "frage": "Vor der Einführung des Systems …",
       "opt": [
        "wusste niemand genau, welche Störungen noch offen waren.",
        "gingen Störungen nur telefonisch ein.",
        "war jeder IT-Mitarbeiter für einen Standort zuständig."
       ],
       "loesung": 0,
       "stelle": "welche Fälle offen waren und wer sie bearbeitete",
       "erklaerung": "Es gab keinen Überblick. Meldungen kamen auf vielen Wegen, nicht nur per Telefon."
      },
      {
       "frage": "Im Herbst 2024 …",
       "opt": [
        "fielen nach einem Update alle Drucker aus.",
        "kümmerten sich mehrere Kollegen gleichzeitig um dasselbe Problem.",
        "war die Disposition zwei Wochen nicht erreichbar."
       ],
       "loesung": 1,
       "stelle": "arbeiteten unabhängig voneinander an derselben Störung",
       "erklaerung": "Drei Kollegen arbeiteten am selben Fall. Die Druckermeldung blieb liegen, die Disposition war erreichbar."
      },
      {
       "frage": "Für das gewählte System sprach vor allem, dass …",
       "opt": [
        "es das günstigste Angebot war.",
        "auch Mitarbeiter ohne Firmen-E-Mail Störungen melden können.",
        "Fahrer eine eigene Telefonnummer bekommen."
       ],
       "loesung": 1,
       "stelle": "auch ohne eigenes Firmen-E-Mail-Konto melden können",
       "erklaerung": "Ausdrücklich „nicht der Preis“ gab den Ausschlag."
      },
      {
       "frage": "Innerhalb von 30 Minuten muss reagiert werden, wenn …",
       "opt": [
        "ein Mitarbeiter neue Software braucht.",
        "ein Bildschirm defekt ist.",
        "eine Störung den Versand behindert."
       ],
       "loesung": 2,
       "stelle": "Für Störungen, die den Versand behindern",
       "erklaerung": "Nur Priorität 1, also Störungen im Versand, verlangt eine Reaktion in 30 Minuten."
      },
      {
       "frage": "Die gleichzeitige Einführung an allen Standorten …",
       "opt": [
        "hält die IT heute für falsch.",
        "war ein großer Erfolg.",
        "wurde vom Betriebsrat kritisiert."
       ],
       "loesung": 0,
       "stelle": "Im Nachhinein war das ein Fehler",
       "erklaerung": "Die IT bewertet die Entscheidung rückblickend selbst als Fehler."
      },
      {
       "frage": "In den ersten zwei Wochen gab es so viele Meldungen, weil …",
       "opt": [
        "viele Systeme gleichzeitig ausgefallen waren.",
        "auch alte Probleme gemeldet wurden.",
        "das Webformular nicht funktionierte."
       ],
       "loesung": 1,
       "stelle": "auch alte, längst bekannte Probleme meldeten",
       "erklaerung": "Viele nutzten das neue System, um alte Probleme zu melden."
      },
      {
       "frage": "Im April …",
       "opt": [
        "wurden neue IT-Mitarbeiter fest eingestellt.",
        "wurden alle Projekte endgültig gestoppt.",
        "holte sich die IT vorübergehend Hilfe von außen."
       ],
       "loesung": 2,
       "stelle": "eine externe Aushilfe eingesetzt",
       "erklaerung": "Die Aushilfe war vorübergehend, die Projekte wurden nur zwei Wochen zurückgestellt."
      },
      {
       "frage": "Die Auswertung der Tickets hat gezeigt, dass …",
       "opt": [
        "viele Störungen von älteren Druckern stammen.",
        "die meisten Probleme in der Verwaltung entstehen.",
        "die Handscanner ersetzt werden müssen."
       ],
       "loesung": 0,
       "stelle": "ganz überwiegend Geräte eines älteren Modells",
       "erklaerung": "Fast ein Fünftel der Meldungen betraf alte Etikettendrucker."
      },
      {
       "frage": "Die Anleitungen in der Wissensdatenbank …",
       "opt": [
        "enthielten viele Fehler.",
        "waren vielen Mitarbeitern unbekannt.",
        "sind nur in der Verwaltung zugänglich."
       ],
       "loesung": 1,
       "stelle": "viele Kollegen gar nicht wussten, dass es sie gibt",
       "erklaerung": "Die Anleitungen wurden kaum genutzt, weil man sie nicht kannte."
      },
      {
       "frage": "Unzufrieden sind die Nutzer vor allem damit, dass …",
       "opt": [
        "sie zu lange auf die IT warten müssen.",
        "die Umfrage nach jedem Ticket zu lang ist.",
        "sie nicht wissen, wann ihr Problem gelöst wird."
       ],
       "loesung": 2,
       "stelle": "nicht erfahren, wann ihr Problem voraussichtlich gelöst wird",
       "erklaerung": "Kritisiert wird die Kommunikation, nicht die Wartezeit selbst."
      },
      {
       "frage": "Die Anbindung an die Bordcomputer …",
       "opt": [
        "ist bereits abgeschlossen.",
        "wurde von der Geschäftsführung abgelehnt.",
        "soll Meldungen direkt aus dem Lkw ermöglichen."
       ],
       "loesung": 2,
       "stelle": "Störungen direkt aus dem Fahrzeug melden können",
       "erklaerung": "Das ist ein Plan für 2026, das Budget wird erst noch beantragt."
      }
     ]
    },
    {
     "nr": 3,
     "art": "textwahl",
     "text": {
      "sorte": "zeitung",
      "quelle": "Fachzeitschrift Recht & Personal",
      "titel": "Missstände melden ohne Angst: Die interne Meldestelle",
      "zeilen": [
       "Seit Juli 2023 gilt in Deutschland das Hinweisgeberschutzgesetz. Es soll Beschäftigte schützen, die auf Rechtsverstöße in ihrem Unternehmen hinweisen, zum Beispiel auf Betrug bei Abrechnungen, auf Verstöße gegen den Umweltschutz oder auf gefährliche Mängel an Produkten. Seit Dezember 2023 müssen alle Unternehmen mit mindestens 50 Beschäftigten eine interne Meldestelle eingerichtet haben.",
       "Wie diese Stelle aussieht, können die Unternehmen weitgehend selbst entscheiden. Manche beauftragen eine Mitarbeiterin aus der Rechtsabteilung, andere eine externe Anwaltskanzlei. Kleinere Firmen im selben Konzern dürfen sich eine Stelle teilen. Wichtig ist nur, dass die zuständigen Personen unabhängig arbeiten können und die nötige Fachkunde haben. Sie dürfen auch andere Aufgaben erledigen, solange es dadurch nicht zu Interessenkonflikten kommt.",
       "Meldungen müssen schriftlich und mündlich möglich sein, also etwa über ein Formular und per Telefon. Auf Wunsch muss außerdem ein persönliches Treffen angeboten werden. Eine Pflicht, auch anonyme Meldungen technisch zu ermöglichen, besteht nicht. Gehen anonyme Hinweise ein, sollen sie aber trotzdem bearbeitet werden. Jede Meldung muss dokumentiert werden. Die Unterlagen werden in der Regel drei Jahre nach Abschluss des Verfahrens gelöscht.",
       "Für die Bearbeitung gelten klare Fristen. Spätestens nach sieben Tagen muss die Meldestelle den Eingang bestätigen. Innerhalb von drei Monaten muss die Person, die den Hinweis gegeben hat, erfahren, welche Maßnahmen geplant oder bereits ergriffen worden sind, etwa eine interne Untersuchung oder die Weitergabe an eine Behörde. Die Rückmeldung darf allerdings laufende Ermittlungen nicht gefährden.",
       "Im Mittelpunkt des Gesetzes steht die Vertraulichkeit. Die Identität der hinweisgebenden Person darf grundsätzlich nur denjenigen bekannt werden, die für die Bearbeitung zuständig sind. Weder der Vorgesetzte noch die Geschäftsführung erfahren den Namen, es sei denn, die betreffende Person ist einverstanden.",
       "Außerdem verbietet das Gesetz jede Form von Repressalien, also etwa eine Abmahnung, eine schlechtere Beurteilung, die Versetzung auf einen unbeliebten Posten oder die Kündigung als Reaktion auf eine Meldung. Erleidet ein Hinweisgeber nach einer Meldung einen beruflichen Nachteil, wird vermutet, dass es sich um eine Repressalie handelt. Dann muss der Arbeitgeber beweisen, dass er andere Gründe hatte.",
       "Der Schutz gilt aber nicht grenzenlos. Wer wissentlich falsche Informationen meldet, um etwa einem unbeliebten Kollegen zu schaden, ist nicht geschützt und muss unter Umständen Schadensersatz leisten. Wer sich dagegen in gutem Glauben geirrt hat, bleibt geschützt.",
       "Beschäftigte können sich auch direkt an eine externe Meldestelle wenden, etwa an die Stelle beim Bundesamt für Justiz. Das Gesetz empfiehlt zwar, zuerst die interne Meldestelle zu nutzen, wenn intern wirksam gegen den Verstoß vorgegangen werden kann. Eine Pflicht dazu besteht jedoch nicht.",
       "Erfahrungen aus den ersten Jahren zeigen, dass viele Meldestellen weniger Hinweise erhalten als erwartet. Nach Einschätzung von Beratern liegt das vor allem daran, dass viele Beschäftigte die Stelle gar nicht kennen. Ein Aushang in der Kantine und ein Hinweis bei der Einarbeitung neuer Mitarbeiter helfen oft mehr als eine aufwendige Software. Wichtig sei außerdem, dass die Geschäftsleitung offen sagt, dass sie Hinweise ausdrücklich wünscht."
      ]
     },
     "aufgaben": [
      {
       "art": "rf",
       "satz": "Ein Unternehmen mit 30 Beschäftigten muss eine interne Meldestelle haben.",
       "loesung": false,
       "stelle": "alle Unternehmen mit mindestens 50 Beschäftigten eine interne Meldestelle",
       "erklaerung": "Die Pflicht beginnt erst bei 50 Beschäftigten."
      },
      {
       "art": "rf",
       "satz": "Die Meldestelle darf auch von einer Kanzlei außerhalb des Unternehmens betrieben werden.",
       "loesung": true,
       "stelle": "andere eine externe Anwaltskanzlei",
       "erklaerung": "Die Unternehmen können eine externe Kanzlei beauftragen."
      },
      {
       "art": "rf",
       "satz": "Unternehmen müssen einen technischen Weg für anonyme Meldungen anbieten.",
       "loesung": false,
       "stelle": "Eine Pflicht, auch anonyme Meldungen technisch zu ermöglichen, besteht nicht",
       "erklaerung": "Anonyme Hinweise sollen bearbeitet werden, ein eigener Kanal ist aber keine Pflicht."
      },
      {
       "art": "rf",
       "satz": "Wer sich bei einer Meldung ohne böse Absicht geirrt hat, verliert den Schutz nicht.",
       "loesung": true,
       "stelle": "Wer sich dagegen in gutem Glauben geirrt hat, bleibt geschützt",
       "erklaerung": "Nur wer wissentlich Falsches meldet, ist nicht geschützt."
      },
      {
       "frage": "Innerhalb von sieben Tagen muss die Meldestelle …",
       "opt": [
        "den Fall abschließen.",
        "den Eingang der Meldung bestätigen.",
        "die Geschäftsführung informieren."
       ],
       "loesung": 1,
       "stelle": "Spätestens nach sieben Tagen muss die Meldestelle den Eingang bestätigen",
       "erklaerung": "Nach sieben Tagen kommt die Bestätigung, die Rückmeldung zu Maßnahmen nach drei Monaten."
      },
      {
       "frage": "Den Namen des Hinweisgebers erfährt die Geschäftsführung …",
       "opt": [
        "nur mit dessen Zustimmung.",
        "nach Abschluss der Untersuchung.",
        "wenn eine Behörde eingeschaltet wird."
       ],
       "loesung": 0,
       "stelle": "es sei denn, die betreffende Person ist einverstanden",
       "erklaerung": "Der Name bleibt vertraulich, außer die Person stimmt zu."
      },
      {
       "frage": "Bekommt ein Hinweisgeber nach seiner Meldung eine schlechtere Beurteilung, …",
       "opt": [
        "muss er selbst beweisen, dass das eine Strafe ist.",
        "muss der Arbeitgeber andere Gründe nachweisen.",
        "wird seine Meldung nicht weiter bearbeitet."
       ],
       "loesung": 1,
       "stelle": "Dann muss der Arbeitgeber beweisen, dass er andere Gründe hatte",
       "erklaerung": "Die Beweislast liegt beim Arbeitgeber, nicht beim Hinweisgeber."
      },
      {
       "frage": "Viele Meldestellen bekommen nur wenige Hinweise, weil …",
       "opt": [
        "die Software zu kompliziert ist.",
        "die Beschäftigten Angst vor Nachteilen haben.",
        "viele Beschäftigte nichts von der Stelle wissen."
       ],
       "loesung": 2,
       "stelle": "dass viele Beschäftigte die Stelle gar nicht kennen",
       "erklaerung": "Berater nennen fehlende Bekanntheit als Hauptgrund. Angst wird hier nicht genannt."
      }
     ]
    },
    {
     "nr": 4,
     "art": "textwahl",
     "text": {
      "sorte": "gespraech",
      "quelle": "Gespräch",
      "titel": "Telefonat wegen einer Teillieferung",
      "zeilen": [
       "Herr Brandt: Kundenservice Möller Gastrotechnik, Brandt am Apparat.",
       "Frau Yilmaz: Guten Tag, Yilmaz vom Hotel Seeblick. Es geht um unsere Bestellung von letzter Woche, die Spülmaschinenkörbe.",
       "Herr Brandt: Ja, Frau Yilmaz. Sagen Sie mir kurz, __(1)__ es genau geht?",
       "Frau Yilmaz: Wir haben 40 Körbe bestellt, geliefert wurden __(2)__ nur 30.",
       "Herr Brandt: Das tut mir leid. Ich sehe hier, dass der Rest __(3)__ bei uns im Lager eingetroffen ist.",
       "Frau Yilmaz: Und wann bekommen wir ihn? Wir haben __(4)__ am Samstag eine Hochzeit mit 200 Gästen.",
       "Herr Brandt: Ich kann die Körbe morgen mit einem Kurier schicken, __(5)__ sie spätestens am Donnerstag bei Ihnen sind.",
       "Frau Yilmaz: Das wäre gut. Und wer trägt die Kosten __(6)__?",
       "Herr Brandt: Die übernehmen __(7)__ wir, der Fehler lag ja bei uns.",
       "Frau Yilmaz: Noch etwas: Bei drei der gelieferten Körbe sind die Griffe gebrochen.",
       "Herr Brandt: Oh. Können Sie mir Fotos schicken? Ich lege einen Ersatz dazu, __(8)__ ich die Fotos habe.",
       "Frau Yilmaz: Mache ich. Soll ich die kaputten Körbe zurückschicken?",
       "Herr Brandt: Nein, die können Sie entsorgen. Ein Rücktransport wäre teurer als die Körbe, __(9)__ Wert bei etwa zwölf Euro liegt.",
       "Frau Yilmaz: Gut. Dann warte ich auf Ihre Nachricht.",
       "Herr Brandt: Ich schicke Ihnen heute noch eine Bestätigung, __(10)__ für die Nachlieferung als auch für den Ersatz."
      ]
     },
     "aufgaben": [
      {
       "frage": "Welches Wort passt in Lücke 1?",
       "luecke": 1,
       "opt": [
        "worum",
        "aber",
        "inzwischen",
        "nämlich",
        "damit",
        "dafür",
        "selbstverständlich",
        "sobald",
        "deren",
        "sowohl",
        "dessen",
        "worüber",
        "weder",
        "obwohl",
        "darauf"
       ],
       "loesung": 0,
       "fest": true,
       "erklaerung": "es geht um etwas wird im Fragesatz zu „worum“, nicht „worüber“."
      },
      {
       "frage": "Welches Wort passt in Lücke 2?",
       "luecke": 2,
       "opt": [
        "worum",
        "aber",
        "inzwischen",
        "nämlich",
        "damit",
        "dafür",
        "selbstverständlich",
        "sobald",
        "deren",
        "sowohl",
        "dessen",
        "worüber",
        "weder",
        "obwohl",
        "darauf"
       ],
       "loesung": 1,
       "fest": true,
       "erklaerung": "„aber“ zeigt den Gegensatz zwischen Bestellung und Lieferung."
      },
      {
       "frage": "Welches Wort passt in Lücke 3?",
       "luecke": 3,
       "opt": [
        "worum",
        "aber",
        "inzwischen",
        "nämlich",
        "damit",
        "dafür",
        "selbstverständlich",
        "sobald",
        "deren",
        "sowohl",
        "dessen",
        "worüber",
        "weder",
        "obwohl",
        "darauf"
       ],
       "loesung": 2,
       "fest": true,
       "erklaerung": "„inzwischen“ heißt: in der Zeit seit der Lieferung."
      },
      {
       "frage": "Welches Wort passt in Lücke 4?",
       "luecke": 4,
       "opt": [
        "worum",
        "aber",
        "inzwischen",
        "nämlich",
        "damit",
        "dafür",
        "selbstverständlich",
        "sobald",
        "deren",
        "sowohl",
        "dessen",
        "worüber",
        "weder",
        "obwohl",
        "darauf"
       ],
       "loesung": 3,
       "fest": true,
       "erklaerung": "„nämlich“ begründet nachträglich, warum es eilt."
      },
      {
       "frage": "Welches Wort passt in Lücke 5?",
       "luecke": 5,
       "opt": [
        "worum",
        "aber",
        "inzwischen",
        "nämlich",
        "damit",
        "dafür",
        "selbstverständlich",
        "sobald",
        "deren",
        "sowohl",
        "dessen",
        "worüber",
        "weder",
        "obwohl",
        "darauf"
       ],
       "loesung": 4,
       "fest": true,
       "erklaerung": "Ziel der Kurierlieferung: „damit“ mit Verb am Ende."
      },
      {
       "frage": "Welches Wort passt in Lücke 6?",
       "luecke": 6,
       "opt": [
        "worum",
        "aber",
        "inzwischen",
        "nämlich",
        "damit",
        "dafür",
        "selbstverständlich",
        "sobald",
        "deren",
        "sowohl",
        "dessen",
        "worüber",
        "weder",
        "obwohl",
        "darauf"
       ],
       "loesung": 5,
       "fest": true,
       "erklaerung": "Die Kosten für etwas: „dafür“ bezieht sich auf den Kurier."
      },
      {
       "frage": "Welches Wort passt in Lücke 7?",
       "luecke": 7,
       "opt": [
        "worum",
        "aber",
        "inzwischen",
        "nämlich",
        "damit",
        "dafür",
        "selbstverständlich",
        "sobald",
        "deren",
        "sowohl",
        "dessen",
        "worüber",
        "weder",
        "obwohl",
        "darauf"
       ],
       "loesung": 6,
       "fest": true,
       "erklaerung": "„selbstverständlich“ betont, dass das keine Frage ist."
      },
      {
       "frage": "Welches Wort passt in Lücke 8?",
       "luecke": 8,
       "opt": [
        "worum",
        "aber",
        "inzwischen",
        "nämlich",
        "damit",
        "dafür",
        "selbstverständlich",
        "sobald",
        "deren",
        "sowohl",
        "dessen",
        "worüber",
        "weder",
        "obwohl",
        "darauf"
       ],
       "loesung": 7,
       "fest": true,
       "erklaerung": "„sobald“ heißt: in dem Moment, in dem die Fotos da sind."
      },
      {
       "frage": "Welches Wort passt in Lücke 9?",
       "luecke": 9,
       "opt": [
        "worum",
        "aber",
        "inzwischen",
        "nämlich",
        "damit",
        "dafür",
        "selbstverständlich",
        "sobald",
        "deren",
        "sowohl",
        "dessen",
        "worüber",
        "weder",
        "obwohl",
        "darauf"
       ],
       "loesung": 8,
       "fest": true,
       "erklaerung": "Die Körbe stehen im Plural, deshalb „deren Wert“."
      },
      {
       "frage": "Welches Wort passt in Lücke 10?",
       "luecke": 10,
       "opt": [
        "worum",
        "aber",
        "inzwischen",
        "nämlich",
        "damit",
        "dafür",
        "selbstverständlich",
        "sobald",
        "deren",
        "sowohl",
        "dessen",
        "worüber",
        "weder",
        "obwohl",
        "darauf"
       ],
       "loesung": 9,
       "fest": true,
       "erklaerung": "Feste Verbindung: „sowohl … als auch“."
      }
     ]
    },
    {
     "nr": 5,
     "art": "textwahl",
     "text": {
      "sorte": "brief",
      "quelle": "Brief",
      "titel": "Ihre Beschwerde vom 3. Juni",
      "zeilen": [
       "Sehr geehrter Herr Lorenz,",
       "vielen Dank für Ihr Schreiben vom 3. Juni, in __(1)__ Sie sich über die verspätete Zustellung Ihrer Sendung beschweren. Wir bedauern sehr, dass die Ware nicht wie __(2)__ am 28. Mai, sondern erst am 2. Juni bei Ihnen eingetroffen ist.",
       "Wir haben Ihre Beschwerde umgehend __(3)__ Anlass genommen, die Abläufe in unserem Umschlaglager zu überprüfen. Dabei hat sich herausgestellt, dass Ihre Sendung __(4)__ eines Fehlers beim Scannen einem falschen Lkw zugeordnet wurde. Wir haben inzwischen __(5)__ getroffen, damit sich ein solcher Fehler nicht wiederholt.",
       "Ihr Hinweis, dass wir Sie früher über die Verspätung hätten informieren müssen, ist völlig __(6)__. Als Entschädigung schreiben wir Ihnen die Frachtkosten in __(7)__ von 186 Euro gut. Der Betrag wird __(8)__ Ihrer nächsten Rechnung verrechnet.",
       "Wir hoffen, dass Sie uns trotz dieses Vorfalls weiterhin Ihr Vertrauen __(9)__. Für Fragen __(10)__ Ihnen Frau Albers aus unserem Kundenservice gern zur Verfügung.",
       "Mit freundlichen Grüßen",
       "Thomas Krieger, Niederlassungsleiter, Weser Cargo GmbH"
      ]
     },
     "aufgaben": [
      {
       "frage": "Was passt in Lücke 1?",
       "luecke": 1,
       "opt": [
        "das",
        "dem",
        "der"
       ],
       "loesung": 1,
       "fest": true,
       "erklaerung": "Schreiben ist neutral, nach „in“ steht hier der Dativ: „in dem“."
      },
      {
       "frage": "Was passt in Lücke 2?",
       "luecke": 2,
       "opt": [
        "vertraut",
        "verordnet",
        "vereinbart"
       ],
       "loesung": 2,
       "fest": true,
       "erklaerung": "Ein Liefertermin wird „vereinbart“."
      },
      {
       "frage": "Was passt in Lücke 3?",
       "luecke": 3,
       "opt": [
        "zum",
        "als",
        "für"
       ],
       "loesung": 0,
       "fest": true,
       "erklaerung": "Nomen-Verb-Verbindung: etwas zum Anlass nehmen."
      },
      {
       "frage": "Was passt in Lücke 4?",
       "luecke": 4,
       "opt": [
        "anstatt",
        "infolge",
        "trotz"
       ],
       "loesung": 1,
       "fest": true,
       "erklaerung": "Der Fehler ist die Ursache: „infolge“ mit Genitiv."
      },
      {
       "frage": "Was passt in Lücke 5?",
       "luecke": 5,
       "opt": [
        "Vorschriften",
        "Vorbehalte",
        "Vorkehrungen"
       ],
       "loesung": 2,
       "fest": true,
       "erklaerung": "Vorkehrungen treffen: Maßnahmen ergreifen, damit etwas nicht passiert."
      },
      {
       "frage": "Was passt in Lücke 6?",
       "luecke": 6,
       "opt": [
        "berechtigt",
        "berichtigt",
        "beauftragt"
       ],
       "loesung": 0,
       "fest": true,
       "erklaerung": "Ein Hinweis oder eine Kritik ist „berechtigt“, also begründet."
      },
      {
       "frage": "Was passt in Lücke 7?",
       "luecke": 7,
       "opt": [
        "Summe",
        "Höhe",
        "Betrag"
       ],
       "loesung": 1,
       "fest": true,
       "erklaerung": "Feste Wendung: in Höhe von."
      },
      {
       "frage": "Was passt in Lücke 8?",
       "luecke": 8,
       "opt": [
        "von",
        "an",
        "mit"
       ],
       "loesung": 2,
       "fest": true,
       "erklaerung": "etwas mit etwas verrechnen."
      },
      {
       "frage": "Was passt in Lücke 9?",
       "luecke": 9,
       "opt": [
        "schenken",
        "geben",
        "leihen"
       ],
       "loesung": 0,
       "fest": true,
       "erklaerung": "Feste Verbindung: jemandem Vertrauen schenken."
      },
      {
       "frage": "Was passt in Lücke 10?",
       "luecke": 10,
       "opt": [
        "stellt",
        "steht",
        "liegt"
       ],
       "loesung": 1,
       "fest": true,
       "erklaerung": "jemandem zur Verfügung stehen, nicht „stellen“."
      }
     ]
    }
   ]
  },
  {
   "id": "tbc1ll2",
   "titel": "Prüfungslauf 2",
   "minuten": 70,
   "teile": [
    {
     "nr": 1,
     "art": "anzeigenX",
     "anzeigen": [
      {
       "b": "a",
       "quelle": "Rainer P., Lohnsteuerhilfeverein",
       "zeilen": [
        "Wenn Sie den Dienstwagen privat nutzen dürfen, wird Ihnen jeden Monat ein Prozent des Listenpreises als geldwerter Vorteil zum Gehalt gerechnet.",
        "Dazu kommen für den Weg zur Arbeit 0,03 Prozent pro Kilometer.",
        "Bei reinen Elektroautos ist der Betrag deutlich niedriger."
       ],
       "motiv": "buero"
      },
      {
       "b": "b",
       "quelle": "Silke N., Fachanwältin für Arbeitsrecht",
       "zeilen": [
        "Den Dienstwagen dürfen Sie privat nutzen, solange Sie Gehalt bekommen.",
        "Endet nach sechs Wochen Krankheit die Lohnfortzahlung, darf der Arbeitgeber das Auto in der Regel zurückverlangen.",
        "Einen Ersatz in Geld müssen Sie dafür nicht bekommen."
       ],
       "motiv": "buero"
      },
      {
       "b": "c",
       "quelle": "Hans-Peter G., Fuhrparkleiter",
       "zeilen": [
        "Melden Sie jeden Unfall mit dem Dienstwagen sofort, auch kleine Kratzer.",
        "Bei leichter Unachtsamkeit haften Sie in der Regel gar nicht, bei grober Fahrlässigkeit kann es teuer werden.",
        "Wer den Schaden verschweigt, hat später das größere Problem."
       ],
       "motiv": "buero"
      },
      {
       "b": "d",
       "quelle": "Tanja E., Personalsachbearbeiterin",
       "zeilen": [
        "In der Probezeit gilt meist eine Kündigungsfrist von zwei Wochen, für beide Seiten.",
        "Eine Kündigung ist aber nur wirksam, wenn Sie das Original mit eigenhändiger Unterschrift bekommen.",
        "Eine E-Mail, ein Fax oder ein eingescanntes Schreiben reichen dafür nicht."
       ],
       "motiv": "buero"
      },
      {
       "b": "e",
       "quelle": "Volker R., Gewerkschaftsjurist",
       "zeilen": [
        "Gegen eine Kündigung können Sie nur innerhalb von drei Wochen nach Erhalt beim Arbeitsgericht klagen.",
        "Danach gilt die Kündigung als wirksam, auch wenn sie eigentlich fehlerhaft war.",
        "Gehen Sie also lieber gleich in den ersten Tagen zu einer Beratung."
       ],
       "motiv": "buero"
      },
      {
       "b": "f",
       "quelle": "Birgit L., Beraterin bei der Agentur für Arbeit",
       "zeilen": [
        "Wer einen Aufhebungsvertrag unterschreibt, bekommt beim Arbeitslosengeld oft eine Sperrzeit von bis zu zwölf Wochen.",
        "Lassen Sie sich nicht unter Zeitdruck setzen und nehmen Sie den Vertrag zur Beratung mit.",
        "Eine Abfindung allein schützt nicht vor der Sperrzeit."
       ],
       "motiv": "buero"
      },
      {
       "b": "g",
       "quelle": "Mario D., Außendienstmitarbeiter",
       "zeilen": [
        "Statt der Pauschale kann man ein Fahrtenbuch führen, dann zahlt man nur für die wirklich privat gefahrenen Kilometer.",
        "Bei mir hat sich das gelohnt, weil ich am Wochenende fast nie mit dem Firmenwagen fahre.",
        "Aber Vorsicht: Das Buch muss lückenlos sein, sonst erkennt es das Finanzamt nicht an."
       ],
       "motiv": "buero"
      },
      {
       "b": "h",
       "quelle": "Ursula K., Rechtsanwältin",
       "zeilen": [
        "Je länger Sie im Betrieb sind, desto länger ist die Kündigungsfrist für den Arbeitgeber.",
        "Nach fünf Jahren sind es zum Beispiel zwei Monate zum Ende eines Kalendermonats.",
        "Für Sie selbst bleibt es meist bei vier Wochen, wenn im Vertrag nichts anderes steht."
       ],
       "motiv": "buero"
      }
     ],
     "aufgaben": [
      {
       "situation": "Ich bin im Vertrieb und habe einen Dienstwagen, den ich auch privat fahren darf. Privat nutze ich ihn aber kaum, und die Pauschale auf meiner Lohnabrechnung finde ich ziemlich hoch.",
       "loesung": "g",
       "erklaerung": "Mit einem Fahrtenbuch zahlt man nur für die privaten Kilometer, das lohnt sich bei wenig Privatnutzung.",
       "sitKopf": "Der Eintrag",
       "xText": "Keine Antwort passt"
      },
      {
       "situation": "Ich habe gestern eine Kündigung bekommen, die ich für ungerecht halte. Ein Freund meint, ich solle erst einmal in Ruhe Urlaub machen und mich dann kümmern.",
       "loesung": "e",
       "erklaerung": "Die Klagefrist beträgt drei Wochen, langes Warten ist gefährlich.",
       "sitKopf": "Der Eintrag",
       "xText": "Keine Antwort passt"
      },
      {
       "situation": "Ich bin seit zwei Monaten wegen eines Bandscheibenvorfalls krankgeschrieben. Jetzt will meine Firma den Dienstwagen zurückhaben, obwohl meine Familie ihn dringend braucht.",
       "loesung": "b",
       "erklaerung": "Nach sechs Wochen endet die Lohnfortzahlung, dann darf der Arbeitgeber das Auto meist zurückverlangen.",
       "sitKopf": "Der Eintrag",
       "xText": "Keine Antwort passt"
      },
      {
       "situation": "Mein Chef hat mir heute einen Aufhebungsvertrag mit einer Abfindung von zwei Monatsgehältern vorgelegt. Ich soll bis morgen früh unterschreiben, sonst sei das Angebot weg.",
       "loesung": "f",
       "erklaerung": "Ein Aufhebungsvertrag kann eine Sperrzeit auslösen. Man sollte sich nicht drängen lassen.",
       "sitKopf": "Der Eintrag",
       "xText": "Keine Antwort passt"
      },
      {
       "situation": "Ich bin noch in der Probezeit und habe die Kündigung als PDF per E-Mail bekommen, mit eingescannter Unterschrift. Ist die Kündigung damit gültig?",
       "loesung": "d",
       "erklaerung": "Eine Kündigung braucht das Original mit Unterschrift, eine E-Mail reicht nicht.",
       "sitKopf": "Der Eintrag",
       "xText": "Keine Antwort passt"
      },
      {
       "situation": "Ich möchte im Sommer mit dem Dienstwagen zwei Wochen nach Kroatien fahren. Darf ich das, und wer bezahlt dann das Benzin?",
       "loesung": "x",
       "erklaerung": "Antwort a erklärt nur die Steuer. Zu Urlaubsfahrten und Benzinkosten sagt niemand etwas.",
       "sitKopf": "Der Eintrag",
       "xText": "Keine Antwort passt"
      }
     ]
    },
    {
     "nr": 2,
     "art": "textwahl",
     "text": {
      "sorte": "bericht",
      "quelle": "Bericht der Personalleitung an Geschäftsführung und Betriebsrat, Bauer Metalltechnik GmbH",
      "titel": "Pilotprojekt Vier-Tage-Woche: Auswertung nach zwölf Monaten",
      "zeilen": [
       "Von Oktober 2024 bis September 2025 hat die Bauer Metalltechnik GmbH in zwei Bereichen eine Vier-Tage-Woche erprobt: in der Arbeitsvorbereitung mit 14 Beschäftigten und in der Fertigungslinie Gehäusebau mit 31 Beschäftigten in zwei Schichten. Der vorliegende Bericht wertet den Versuch aus und soll Geschäftsführung und Betriebsrat als Grundlage für die Entscheidung dienen, ob das Modell fortgeführt und auf weitere Bereiche übertragen wird.",
       "Anlass für den Versuch waren nicht in erster Linie Wünsche der Belegschaft, sondern Schwierigkeiten bei der Besetzung offener Stellen. Im Gehäusebau waren Anfang 2024 vier Stellen für Konstruktionsmechaniker seit mehr als einem halben Jahr unbesetzt. Gleichzeitig verloren wir mehrere erfahrene Kollegen an einen Wettbewerber, der mit kürzeren Arbeitszeiten wirbt.",
       "Das gewählte Modell sieht eine Wochenarbeitszeit von 36 statt 38 Stunden vor, verteilt auf vier Tage zu je neun Stunden. Der Lohn blieb unverändert. Die Verkürzung um zwei Stunden sollte durch eine bessere Organisation ausgeglichen werden, etwa durch kürzere Rüstzeiten und weniger Besprechungen. In der Arbeitsvorbereitung konnten die Beschäftigten ihren freien Tag selbst wählen, sofern von Montag bis Freitag jeweils mindestens die Hälfte des Teams anwesend war. Im Gehäusebau wurde für jede Schicht ein fester freier Tag vereinbart.",
       "Die Produktivität im Gehäusebau, gemessen an gefertigten Gehäusen pro Arbeitsstunde, stieg im Versuchszeitraum um sieben Prozent. Die Gesamtmenge blieb damit nahezu gleich, obwohl weniger Stunden gearbeitet wurden. Ausschuss und Nacharbeit lagen auf dem Niveau des Vorjahres. Ein wichtiger Grund war die Umstellung auf feste Rüstzeiten am Beginn jeder Schicht, die nach Einschätzung der Schichtführer auch ohne die Vier-Tage-Woche sinnvoll gewesen wäre.",
       "In der Arbeitsvorbereitung ist das Bild weniger eindeutig. Die Zahl der fristgerecht erstellten Arbeitspläne blieb stabil, allerdings stiegen die Überstunden in den Monaten März und April deutlich an, als mehrere Großaufträge gleichzeitig eingingen. Mehrere Kollegen gaben an, die Arbeit an den langen Tagen sei anstrengender geworden, vor allem in der letzten Stunde.",
       "Die krankheitsbedingten Fehltage gingen in beiden Bereichen zurück, im Gehäusebau von durchschnittlich 17 auf 12 Tage pro Person und Jahr. Da im selben Zeitraum keine größere Grippewelle auftrat, lässt sich allerdings nicht sicher sagen, wie viel davon auf die Vier-Tage-Woche zurückzuführen ist.",
       "Deutliche Wirkung zeigte das Modell bei der Personalgewinnung. Auf die im Februar 2025 ausgeschriebenen Stellen im Gehäusebau gingen 23 Bewerbungen ein, im Vorjahr waren es auf vergleichbare Anzeigen vier. Drei Stellen konnten besetzt werden. Zwei der neuen Kollegen nannten im Einstellungsgespräch die Vier-Tage-Woche ausdrücklich als Grund für ihre Bewerbung.",
       "Nicht vorhergesehen hatten wir die Auswirkungen auf andere Abteilungen. Der Vertrieb beklagte, dass Ansprechpartner in der Arbeitsvorbereitung freitags häufig nicht erreichbar seien. Die Instandhaltung, die weiterhin fünf Tage arbeitet, musste ihre Wartungsfenster an die neuen Schichtzeiten anpassen. Zudem sorgte der Versuch in Bereichen, die nicht teilnahmen, für Unmut. Im Lager wurde der Vorwurf laut, es gebe nun Beschäftigte erster und zweiter Klasse.",
       "Eine Befragung am Ende des Versuchs ergab, dass 41 der 45 Beteiligten das Modell beibehalten möchten. Vier Beschäftigte, alle aus der Arbeitsvorbereitung, wünschen sich eine Rückkehr zur Fünf-Tage-Woche, zwei davon wegen der Betreuung ihrer Kinder am Nachmittag.",
       "Für die Dauer des Versuchs wurde mit dem Betriebsrat eine befristete Betriebsvereinbarung abgeschlossen. Sie sah vor, dass alle Beteiligten mit einer Frist von einem Monat in die Fünf-Tage-Woche zurückkehren konnten. Von dieser Möglichkeit hat im gesamten Zeitraum nur eine Mitarbeiterin Gebrauch gemacht, nachdem sich ihre Betreuungssituation zu Hause geändert hatte. Die Vereinbarung endet am 31. März 2026, bis dahin gilt das Modell in beiden Bereichen weiter.",
       "Die Personalleitung empfiehlt, die Vier-Tage-Woche im Gehäusebau dauerhaft einzuführen. Für die Arbeitsvorbereitung wird eine Wahlmöglichkeit zwischen beiden Modellen vorgeschlagen, verbunden mit einer festen Erreichbarkeit für den Vertrieb an allen fünf Werktagen. Eine Ausweitung auf das Lager sollte erst nach einer Prüfung der Schichtplanung erfolgen, die bis zum Frühjahr 2026 abgeschlossen sein soll."
      ]
     },
     "aufgaben": [
      {
       "frage": "Der Bericht soll …",
       "opt": [
        "die Ergebnisse eines Versuchs für eine Entscheidung zusammenfassen.",
        "die Belegschaft über neue Arbeitszeiten informieren.",
        "einen Antrag des Betriebsrats beantworten."
       ],
       "loesung": 0,
       "stelle": "als Grundlage für die Entscheidung dienen",
       "erklaerung": "Empfänger sind Geschäftsführung und Betriebsrat, die über die Fortführung entscheiden."
      },
      {
       "frage": "Der wichtigste Anlass für den Versuch war, dass …",
       "opt": [
        "die Belegschaft kürzere Arbeitszeiten gefordert hatte.",
        "offene Stellen schwer zu besetzen waren.",
        "die Produktion im Gehäusebau zu langsam war."
       ],
       "loesung": 1,
       "stelle": "sondern Schwierigkeiten bei der Besetzung offener Stellen",
       "erklaerung": "„Nicht in erster Linie Wünsche der Belegschaft, sondern“ zeigt den eigentlichen Grund."
      },
      {
       "frage": "Im Versuch …",
       "opt": [
        "wurde der Lohn um zwei Stunden gekürzt.",
        "arbeiteten die Beschäftigten an vier Tagen je neun Stunden.",
        "blieb die Wochenarbeitszeit bei 38 Stunden."
       ],
       "loesung": 1,
       "stelle": "verteilt auf vier Tage zu je neun Stunden",
       "erklaerung": "36 Stunden auf vier Tage, der Lohn blieb gleich."
      },
      {
       "frage": "In der Arbeitsvorbereitung …",
       "opt": [
        "hatte jeder einen festen freien Tag.",
        "arbeitete das Team im Schichtbetrieb.",
        "durfte an keinem Werktag mehr als die Hälfte des Teams fehlen."
       ],
       "loesung": 2,
       "stelle": "mindestens die Hälfte des Teams anwesend war",
       "erklaerung": "Den freien Tag wählte man selbst, aber die Hälfte musste immer da sein. Feste Tage gab es im Gehäusebau."
      },
      {
       "frage": "Die festen Rüstzeiten …",
       "opt": [
        "hätten sich nach Meinung der Schichtführer auch sonst gelohnt.",
        "wurden nach dem Versuch wieder abgeschafft.",
        "haben die Produktivität gesenkt."
       ],
       "loesung": 0,
       "stelle": "auch ohne die Vier-Tage-Woche sinnvoll gewesen wäre",
       "erklaerung": "Ein Teil des Erfolgs kommt also von der besseren Organisation, nicht vom Modell selbst."
      },
      {
       "frage": "In der Arbeitsvorbereitung …",
       "opt": [
        "wurden weniger Arbeitspläne pünktlich fertig.",
        "sanken die Überstunden deutlich.",
        "gab es im Frühjahr viele Überstunden."
       ],
       "loesung": 2,
       "stelle": "stiegen die Überstunden in den Monaten März und April deutlich an",
       "erklaerung": "Die Arbeitspläne kamen weiter pünktlich, aber im März und April stiegen die Überstunden."
      },
      {
       "frage": "Den Rückgang der Fehltage …",
       "opt": [
        "kann man nicht eindeutig erklären.",
        "führt der Bericht klar auf die Vier-Tage-Woche zurück.",
        "gab es nur in der Arbeitsvorbereitung."
       ],
       "loesung": 0,
       "stelle": "lässt sich allerdings nicht sicher sagen",
       "erklaerung": "Ohne Grippewelle ist der Vergleich unsicher. Einen Rückgang gab es in beiden Bereichen."
      },
      {
       "frage": "Auf die Stellenanzeigen im Februar 2025 …",
       "opt": [
        "meldeten sich viel mehr Bewerber als im Vorjahr.",
        "konnten alle offenen Stellen besetzt werden.",
        "bewarben sich nur vier Personen."
       ],
       "loesung": 0,
       "stelle": "gingen 23 Bewerbungen ein",
       "erklaerung": "23 statt vier Bewerbungen. Vier war die Zahl aus dem Vorjahr."
      },
      {
       "frage": "Der Vertrieb …",
       "opt": [
        "arbeitet inzwischen auch nur vier Tage.",
        "erreichte freitags oft niemanden in der Arbeitsvorbereitung.",
        "musste seine Wartungsfenster anpassen."
       ],
       "loesung": 1,
       "stelle": "freitags häufig nicht erreichbar seien",
       "erklaerung": "Die Wartungsfenster betrafen die Instandhaltung, nicht den Vertrieb."
      },
      {
       "frage": "Im Lager …",
       "opt": [
        "wurde die Vier-Tage-Woche ebenfalls getestet.",
        "gab es weniger Fehltage als vorher.",
        "fühlten sich manche Beschäftigte benachteiligt."
       ],
       "loesung": 2,
       "stelle": "es gebe nun Beschäftigte erster und zweiter Klasse",
       "erklaerung": "Das Lager nahm nicht teil, daher der Vorwurf der Ungleichbehandlung."
      },
      {
       "frage": "Für die Arbeitsvorbereitung empfiehlt die Personalleitung …",
       "opt": [
        "die Rückkehr zur Fünf-Tage-Woche.",
        "eine Wahl zwischen beiden Modellen.",
        "dieselbe Regelung wie im Gehäusebau."
       ],
       "loesung": 1,
       "stelle": "eine Wahlmöglichkeit zwischen beiden Modellen vorgeschlagen",
       "erklaerung": "Dauerhaft eingeführt wird das Modell nur im Gehäusebau."
      }
     ]
    },
    {
     "nr": 3,
     "art": "textwahl",
     "text": {
      "sorte": "zeitung",
      "quelle": "Fachmagazin Ausbildung & Beruf",
      "titel": "Die Jugend- und Auszubildendenvertretung: Mitreden schon in der Ausbildung",
      "zeilen": [
       "Ob Ärger mit dem Ausbilder, fehlende Zeit zum Lernen für die Berufsschule oder Überstunden kurz vor der Prüfung: Auszubildende haben oft eigene Anliegen, die im Betriebsrat leicht untergehen. Dafür gibt es die Jugend- und Auszubildendenvertretung, kurz JAV.",
       "Eine JAV kann gewählt werden, wenn im Betrieb mindestens fünf Beschäftigte arbeiten, die jünger als 18 Jahre sind oder sich in einer Ausbildung befinden und jünger als 25 sind. Voraussetzung ist außerdem, dass es einen Betriebsrat gibt. Ohne Betriebsrat kann keine JAV gewählt werden, weil sie ihre Rechte nicht direkt gegenüber dem Arbeitgeber, sondern über den Betriebsrat ausübt.",
       "Die Wahl findet alle zwei Jahre statt, regelmäßig im Herbst. Die kurze Amtszeit hat einen einfachen Grund: Viele Auszubildende schließen ihre Ausbildung nach drei Jahren ab, und wer älter als 25 ist, kann nicht mehr kandidieren. Wer während der Amtszeit 25 wird, bleibt aber bis zum Ende im Amt. Die Größe der JAV richtet sich nach der Zahl der Jugendlichen und Auszubildenden im Betrieb. Sie reicht von einer Person bis zu 15 Mitgliedern.",
       "Zu den Aufgaben der JAV gehört es, darauf zu achten, dass Gesetze und Vereinbarungen zugunsten der Auszubildenden eingehalten werden, etwa das Jugendarbeitsschutzgesetz oder der Ausbildungsplan. Sie nimmt Beschwerden entgegen und gibt sie an den Betriebsrat weiter. Außerdem kann sie eigene Vorschläge machen, zum Beispiel für eine bessere Prüfungsvorbereitung oder für die Übernahme nach der Ausbildung.",
       "Die JAV darf zu allen Sitzungen des Betriebsrats einen Vertreter schicken. Geht es um Themen, die besonders die Jugendlichen und Auszubildenden betreffen, können alle JAV-Mitglieder teilnehmen und haben dann sogar ein Stimmrecht. Hält die Mehrheit der JAV einen Beschluss des Betriebsrats für eine erhebliche Beeinträchtigung der Interessen der Auszubildenden, kann sie verlangen, dass er für eine Woche ausgesetzt wird.",
       "Ein besonderes Recht betrifft die Zeit nach der Ausbildung. Wer Mitglied der JAV ist, kann verlangen, nach der Abschlussprüfung in ein unbefristetes Arbeitsverhältnis übernommen zu werden. Dazu muss er innerhalb der letzten drei Monate vor dem Ende der Ausbildung schriftlich seine Weiterbeschäftigung verlangen. Der Arbeitgeber kann sich davon nur durch einen Antrag beim Arbeitsgericht befreien, etwa wenn es im Betrieb keinen passenden Arbeitsplatz gibt.",
       "Die Arbeit in der JAV findet während der Arbeitszeit statt. Mitglieder dürfen dafür ihren Arbeitsplatz verlassen und auch an Schulungen teilnehmen, ohne dass ihnen der Lohn gekürzt wird. Ihre Ausbildung darf dadurch allerdings nicht gefährdet werden. Ausbilder sind deshalb gut beraten, die Termine gemeinsam mit den Mitgliedern zu planen. Wie viel Zeit nötig ist, hängt von der Größe des Betriebs ab, in kleineren Betrieben sind es oft nur wenige Stunden im Monat.",
       "Leonie Brandt, Mechatronikerin im dritten Ausbildungsjahr und JAV-Vorsitzende in einem Werk für Landmaschinen, sieht vor allem einen Vorteil: „Die Neuen kommen eher zu uns als zum Betriebsrat. Wir sind im gleichen Alter, da ist die Hemmschwelle einfach niedriger.“ Im vergangenen Jahr hat die JAV in ihrem Betrieb erreicht, dass Auszubildende vor schriftlichen Prüfungen einen Tag frei bekommen."
      ]
     },
     "aufgaben": [
      {
       "art": "rf",
       "satz": "In einem Betrieb ohne Betriebsrat kann eine JAV gewählt werden, wenn genug Auszubildende dort arbeiten.",
       "loesung": false,
       "stelle": "Ohne Betriebsrat kann keine JAV gewählt werden",
       "erklaerung": "Die JAV arbeitet über den Betriebsrat, deshalb braucht es ihn."
      },
      {
       "art": "rf",
       "satz": "Wer während der Amtszeit 25 Jahre alt wird, muss die JAV sofort verlassen.",
       "loesung": false,
       "stelle": "bleibt aber bis zum Ende im Amt",
       "erklaerung": "Die Altersgrenze gilt nur für die Kandidatur."
      },
      {
       "art": "rf",
       "satz": "Bei Themen, die vor allem Auszubildende betreffen, dürfen alle JAV-Mitglieder im Betriebsrat mitstimmen.",
       "loesung": true,
       "stelle": "können alle JAV-Mitglieder teilnehmen und haben dann sogar ein Stimmrecht",
       "erklaerung": "Sonst schickt die JAV nur einen Vertreter."
      },
      {
       "art": "rf",
       "satz": "JAV-Mitglieder dürfen während der Arbeitszeit an Schulungen teilnehmen, ohne Lohn zu verlieren.",
       "loesung": true,
       "stelle": "auch an Schulungen teilnehmen, ohne dass ihnen der Lohn gekürzt wird",
       "erklaerung": "Die Arbeit in der JAV gilt als Arbeitszeit."
      },
      {
       "frage": "Eine JAV kann gewählt werden, wenn …",
       "opt": [
        "im Betrieb mindestens fünf Jugendliche oder junge Auszubildende arbeiten.",
        "im Betrieb mindestens 25 Auszubildende arbeiten.",
        "der Arbeitgeber der Wahl zustimmt."
       ],
       "loesung": 0,
       "stelle": "mindestens fünf Beschäftigte arbeiten, die jünger als 18 Jahre sind",
       "erklaerung": "Fünf unter 18 oder Auszubildende unter 25. Die Zahl 25 ist ein Alter."
      },
      {
       "frage": "Die Amtszeit der JAV ist kurz, weil …",
       "opt": [
        "die Wahlen viel Geld kosten.",
        "die Mitglieder schnell aus der Ausbildung oder der Altersgrenze herauswachsen.",
        "der Betriebsrat das so beschlossen hat."
       ],
       "loesung": 1,
       "stelle": "Viele Auszubildende schließen ihre Ausbildung nach drei Jahren ab",
       "erklaerung": "Ausbildungsende und Altersgrenze sind der „einfache Grund“."
      },
      {
       "frage": "Ein JAV-Mitglied, das nach der Ausbildung bleiben möchte, …",
       "opt": [
        "muss sich ganz normal auf eine Stelle bewerben.",
        "wird automatisch befristet übernommen.",
        "muss die Weiterbeschäftigung rechtzeitig schriftlich verlangen."
       ],
       "loesung": 2,
       "stelle": "innerhalb der letzten drei Monate vor dem Ende der Ausbildung",
       "erklaerung": "Ohne schriftliches Verlangen in den letzten drei Monaten gibt es keinen Anspruch. Übernommen wird unbefristet."
      },
      {
       "frage": "Nach Leonie Brandt gehen neue Auszubildende lieber zur JAV, weil …",
       "opt": [
        "die JAV mehr Rechte hat als der Betriebsrat.",
        "sie dort Gleichaltrige ansprechen können.",
        "der Betriebsrat für sie keine Zeit hat."
       ],
       "loesung": 1,
       "stelle": "Wir sind im gleichen Alter",
       "erklaerung": "Gleiches Alter senkt die Hemmschwelle."
      }
     ]
    },
    {
     "nr": 4,
     "art": "textwahl",
     "text": {
      "sorte": "gespraech",
      "quelle": "Gespräch",
      "titel": "Planung des Messestands",
      "zeilen": [
       "Herr Albrecht: So, kurz zur Messe in Nürnberg. Der Stand ist gebucht, __(1)__ nur mit 24 statt 36 Quadratmetern.",
       "Frau Sommer: Nur 24? Wieso das denn?",
       "Herr Albrecht: Wir haben uns zu spät angemeldet, __(2)__ die großen Flächen schon weg waren.",
       "Frau Sommer: Na gut. Dann nehmen wir eben nur die zwei neuen Pumpen mit __(3)__ aller fünf Modelle.",
       "Herr Albrecht: Sehe ich auch so. Je weniger auf dem Stand steht, __(4)__ besser kann man mit den Besuchern reden.",
       "Frau Sommer: Und wer betreut den Stand?",
       "Herr Albrecht: Sie, Herr Kaya und ich. Herr Kaya kommt __(5)__ am Donnerstag, am Mittwoch hat er noch eine Schulung.",
       "Frau Sommer: Sollen wir mit den Kunden vorher Termine vereinbaren?",
       "Herr Albrecht: Ja, unbedingt. Letztes Jahr standen wir oft herum, __(6)__ die Konkurrenz nebenan voll war.",
       "Frau Sommer: Ich schreibe unsere zwanzig wichtigsten Kunden an. Soll ich ihnen Freikarten anbieten?",
       "Herr Albrecht: Ja, __(7)__ wir nur 50 Stück haben. Also bitte nicht an jeden.",
       "Frau Sommer: Verstanden. Und __(8)__ soll ich in der Einladung besonders hinweisen?",
       "Herr Albrecht: Auf die neue Steuerung per App. Das ist genau das, __(9)__ die Kunden am häufigsten fragen.",
       "Frau Sommer: Gut. Ich schicke Ihnen den Entwurf bis Freitag, __(10)__ Sie noch drüberschauen können."
      ]
     },
     "aufgaben": [
      {
       "frage": "Welches Wort passt in Lücke 1?",
       "luecke": 1,
       "opt": [
        "allerdings",
        "weshalb",
        "statt",
        "desto",
        "erst",
        "während",
        "wobei",
        "worauf",
        "wonach",
        "damit",
        "deshalb",
        "worüber",
        "trotz",
        "je",
        "sofern"
       ],
       "loesung": 0,
       "fest": true,
       "erklaerung": "„allerdings“ schränkt die gute Nachricht ein."
      },
      {
       "frage": "Welches Wort passt in Lücke 2?",
       "luecke": 2,
       "opt": [
        "allerdings",
        "weshalb",
        "statt",
        "desto",
        "erst",
        "während",
        "wobei",
        "worauf",
        "wonach",
        "damit",
        "deshalb",
        "worüber",
        "trotz",
        "je",
        "sofern"
       ],
       "loesung": 1,
       "fest": true,
       "erklaerung": "„weshalb“ leitet eine Folge mit Verb am Ende ein. „deshalb“ verlangt das Verb an Position zwei."
      },
      {
       "frage": "Welches Wort passt in Lücke 3?",
       "luecke": 3,
       "opt": [
        "allerdings",
        "weshalb",
        "statt",
        "desto",
        "erst",
        "während",
        "wobei",
        "worauf",
        "wonach",
        "damit",
        "deshalb",
        "worüber",
        "trotz",
        "je",
        "sofern"
       ],
       "loesung": 2,
       "fest": true,
       "erklaerung": "„statt“ mit Genitiv: statt aller fünf Modelle."
      },
      {
       "frage": "Welches Wort passt in Lücke 4?",
       "luecke": 4,
       "opt": [
        "allerdings",
        "weshalb",
        "statt",
        "desto",
        "erst",
        "während",
        "wobei",
        "worauf",
        "wonach",
        "damit",
        "deshalb",
        "worüber",
        "trotz",
        "je",
        "sofern"
       ],
       "loesung": 3,
       "fest": true,
       "erklaerung": "Feste Verbindung: „je … desto“."
      },
      {
       "frage": "Welches Wort passt in Lücke 5?",
       "luecke": 5,
       "opt": [
        "allerdings",
        "weshalb",
        "statt",
        "desto",
        "erst",
        "während",
        "wobei",
        "worauf",
        "wonach",
        "damit",
        "deshalb",
        "worüber",
        "trotz",
        "je",
        "sofern"
       ],
       "loesung": 4,
       "fest": true,
       "erklaerung": "„erst am Donnerstag“ heißt: später als erwartet."
      },
      {
       "frage": "Welches Wort passt in Lücke 6?",
       "luecke": 6,
       "opt": [
        "allerdings",
        "weshalb",
        "statt",
        "desto",
        "erst",
        "während",
        "wobei",
        "worauf",
        "wonach",
        "damit",
        "deshalb",
        "worüber",
        "trotz",
        "je",
        "sofern"
       ],
       "loesung": 5,
       "fest": true,
       "erklaerung": "„während“ zeigt hier einen Gegensatz zwischen zwei Situationen."
      },
      {
       "frage": "Welches Wort passt in Lücke 7?",
       "luecke": 7,
       "opt": [
        "allerdings",
        "weshalb",
        "statt",
        "desto",
        "erst",
        "während",
        "wobei",
        "worauf",
        "wonach",
        "damit",
        "deshalb",
        "worüber",
        "trotz",
        "je",
        "sofern"
       ],
       "loesung": 6,
       "fest": true,
       "erklaerung": "„wobei“ schränkt das Ja ein: nur 50 Karten."
      },
      {
       "frage": "Welches Wort passt in Lücke 8?",
       "luecke": 8,
       "opt": [
        "allerdings",
        "weshalb",
        "statt",
        "desto",
        "erst",
        "während",
        "wobei",
        "worauf",
        "wonach",
        "damit",
        "deshalb",
        "worüber",
        "trotz",
        "je",
        "sofern"
       ],
       "loesung": 7,
       "fest": true,
       "erklaerung": "hinweisen auf etwas wird im Fragesatz zu „worauf“."
      },
      {
       "frage": "Welches Wort passt in Lücke 9?",
       "luecke": 9,
       "opt": [
        "allerdings",
        "weshalb",
        "statt",
        "desto",
        "erst",
        "während",
        "wobei",
        "worauf",
        "wonach",
        "damit",
        "deshalb",
        "worüber",
        "trotz",
        "je",
        "sofern"
       ],
       "loesung": 8,
       "fest": true,
       "erklaerung": "fragen nach etwas wird nach „das“ zu „wonach“."
      },
      {
       "frage": "Welches Wort passt in Lücke 10?",
       "luecke": 10,
       "opt": [
        "allerdings",
        "weshalb",
        "statt",
        "desto",
        "erst",
        "während",
        "wobei",
        "worauf",
        "wonach",
        "damit",
        "deshalb",
        "worüber",
        "trotz",
        "je",
        "sofern"
       ],
       "loesung": 9,
       "fest": true,
       "erklaerung": "Ziel der Mail: „damit“ mit Verb am Ende."
      }
     ]
    },
    {
     "nr": 5,
     "art": "textwahl",
     "text": {
      "sorte": "brief",
      "quelle": "Brief",
      "titel": "Anfrage: Vertriebstagung im April",
      "zeilen": [
       "Sehr geehrte Frau Hartmann,",
       "für unsere jährliche Vertriebstagung suchen wir ein Tagungshotel im Raum Kassel und sind dabei __(1)__ Ihr Haus aufmerksam geworden. Die Tagung soll vom 23. bis 25. April stattfinden. Wir rechnen __(2)__ etwa 45 Teilnehmern.",
       "Benötigt wird ein Tagungsraum für alle Teilnehmer mit Beamer, Leinwand und stabiler Internetverbindung. __(3)__ brauchen wir zwei kleinere Räume für die Arbeitsgruppen. Für die Übernachtung benötigen wir 45 Einzelzimmer, __(4)__ zwölf bereits ab dem 22. April.",
       "Die Verpflegung sollte zwei Kaffeepausen am Tag, ein Mittagessen sowie am ersten Abend ein gemeinsames Abendessen __(5)__. Bitte berücksichtigen Sie, dass mehrere Teilnehmer sich vegetarisch ernähren und zwei Kollegen __(6)__ einer Glutenunverträglichkeit auf entsprechende Speisen angewiesen sind.",
       "Wir wären Ihnen dankbar, wenn Sie uns bis zum 15. Januar ein Angebot __(7)__ lassen könnten. Geben Sie darin bitte auch an, __(8)__ eine kostenfreie Stornierung möglich ist. Sofern Ihr Angebot unseren Vorstellungen __(9)__, würden wir das Haus vorab gern besichtigen.",
       "Ich bedanke mich im Voraus für Ihre Mühe und __(10)__ Ihrer Antwort entgegen.",
       "Mit freundlichen Grüßen",
       "Jan Petersen, Vertriebsassistenz, Nordhessen Antriebe GmbH"
      ]
     },
     "aufgaben": [
      {
       "frage": "Was passt in Lücke 1?",
       "luecke": 1,
       "opt": [
        "an",
        "über",
        "auf"
       ],
       "loesung": 2,
       "fest": true,
       "erklaerung": "auf etwas aufmerksam werden."
      },
      {
       "frage": "Was passt in Lücke 2?",
       "luecke": 2,
       "opt": [
        "mit",
        "auf",
        "von"
       ],
       "loesung": 0,
       "fest": true,
       "erklaerung": "mit etwas rechnen, hier mit einer Zahl."
      },
      {
       "frage": "Was passt in Lücke 3?",
       "luecke": 3,
       "opt": [
        "Hingegen",
        "Darüber hinaus",
        "Folglich"
       ],
       "loesung": 1,
       "fest": true,
       "erklaerung": "Es kommt etwas hinzu: „Darüber hinaus“ heißt zusätzlich."
      },
      {
       "frage": "Was passt in Lücke 4?",
       "luecke": 4,
       "opt": [
        "dafür",
        "davon",
        "dagegen"
       ],
       "loesung": 1,
       "fest": true,
       "erklaerung": "„davon zwölf“ heißt: zwölf der 45 Zimmer."
      },
      {
       "frage": "Was passt in Lücke 5?",
       "luecke": 5,
       "opt": [
        "erfassen",
        "verfassen",
        "umfassen"
       ],
       "loesung": 2,
       "fest": true,
       "erklaerung": "Ein Angebot oder eine Leistung „umfasst“ mehrere Teile."
      },
      {
       "frage": "Was passt in Lücke 6?",
       "luecke": 6,
       "opt": [
        "anhand",
        "aufgrund",
        "anstelle"
       ],
       "loesung": 1,
       "fest": true,
       "erklaerung": "Die Unverträglichkeit ist der Grund: „aufgrund“ mit Genitiv."
      },
      {
       "frage": "Was passt in Lücke 7?",
       "luecke": 7,
       "opt": [
        "zukommen",
        "zustellen",
        "zuteilen"
       ],
       "loesung": 0,
       "fest": true,
       "erklaerung": "Formell: jemandem etwas zukommen lassen."
      },
      {
       "frage": "Was passt in Lücke 8?",
       "luecke": 8,
       "opt": [
        "ab wann",
        "seit wann",
        "bis wann"
       ],
       "loesung": 2,
       "fest": true,
       "erklaerung": "Gefragt ist die Frist für die Stornierung: „bis wann“."
      },
      {
       "frage": "Was passt in Lücke 9?",
       "luecke": 9,
       "opt": [
        "entspricht",
        "entsteht",
        "entfällt"
       ],
       "loesung": 0,
       "fest": true,
       "erklaerung": "etwas entspricht den Vorstellungen: passt zu dem, was man erwartet."
      },
      {
       "frage": "Was passt in Lücke 10?",
       "luecke": 10,
       "opt": [
        "gehe",
        "sehe",
        "komme"
       ],
       "loesung": 1,
       "fest": true,
       "erklaerung": "Formelle Schlussformel: einer Antwort entgegensehen."
      }
     ]
    }
   ]
  }
 ]
};
