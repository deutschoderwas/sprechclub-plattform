/* ============================================================
   deutschoderwas club — HÖREN telc Deutsch B1+ Beruf

   Aufbau nach dem offiziellen telc-Format (Übungstest 1 B1+ Beruf,
   geprüft 02.11.2026). Alle Texte und Aufgaben eigene, Kontext
   Arbeitswelt. Erzeugt aus scratchpad/telcb1b mit bau.js.
   ============================================================ */

window.HOEREN_TELC_B1B = {
 "niveau": "telcB1B",
 "pruefung": "telc Deutsch B1+ Beruf",
 "minuten": 30,
 "punkte": 20,
 "intro": "Der Hören-Teil bei telc B1+ Beruf dauert etwa dreißig Minuten: Kollegen äußern sich zu einem Thema (nur einmal hören), ein Gespräch im Betrieb und kurze Texte wie Anrufbeantworter oder Durchsagen (je zweimal hören). Nach jeder Antwort siehst du den Text mit der entscheidenden Stelle.",
 "stufen": [
  {
   "nr": 1,
   "titel": "Die Hauptsache hören",
   "zeichen": "👂",
   "was": "Meinungen von Kollegen und Zahlen, Termine, Durchwahlen."
  },
  {
   "nr": 2,
   "titel": "Die Fallen kennen",
   "zeichen": "🪤",
   "was": "Signalwörter im Gespräch und Richtig/Falsch-Fallen."
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
   "was": "20 Aufgaben, etwa dreißig Minuten."
  }
 ],
 "bloecke": [
  {
   "id": "tbb1h1",
   "stufe": 1,
   "titel": "Was meint der Kollege wirklich?",
   "kurz": "Einmal hören, die Meinung erkennen — auch wenn sie erst am Ende kommt.",
   "ziel": "Nach diesem Block erkennst du nach einmaligem Hören, was Kollegen über ein Arbeitsthema wirklich denken.",
   "zeichen": "🎯",
   "farbe": "turq",
   "mal": 1,
   "aufgaben": [
    {
     "art": "hoerwahl",
     "ort": "Thema: Neue Software",
     "wer": "Frau",
     "text": "Das neue Programm ist schon praktisch, das gebe ich zu. Nur hätte man uns vorher mal fragen können, bevor man es einfach einführt.",
     "frage": "Was kritisiert die Frau?",
     "opt": [
      "Das Programm ist unpraktisch.",
      "Die Schulung war zu kurz.",
      "Man hat die Mitarbeiter nicht gefragt."
     ],
     "loesung": 2,
     "stelle": "hätte man uns vorher mal fragen können",
     "erklaerung": "Das Programm findet sie gut. Das „Nur\" leitet die eigentliche Kritik ein."
    },
    {
     "art": "hoerwahl",
     "ort": "Thema: Überstunden",
     "wer": "Mann",
     "text": "Klar mache ich mal eine Überstunde, wenn es brennt. Aber jede Woche bis acht Uhr abends, das mache ich nicht länger mit.",
     "frage": "Was meint der Mann zu Überstunden?",
     "opt": [
      "Ab und zu ist er dazu bereit.",
      "Er arbeitet gern bis spät abends.",
      "Er lehnt jede Überstunde ab."
     ],
     "loesung": 0,
     "stelle": "Klar mache ich mal eine Überstunde",
     "erklaerung": "Gegen einzelne Überstunden hat er nichts, nur gegen Überstunden jede Woche."
    },
    {
     "art": "hoerwahl",
     "ort": "Thema: Teambesprechung",
     "wer": "Frau",
     "text": "Unsere Montagsbesprechung dauert oft eine Stunde, und am Ende ist nichts entschieden. Eine Viertelstunde mit klaren Ergebnissen wäre mir viel lieber.",
     "frage": "Was wünscht sich die Frau?",
     "opt": [
      "Kürzere Besprechungen mit Ergebnissen.",
      "Mehr Besprechungen.",
      "Gar keine Besprechungen."
     ],
     "loesung": 0,
     "stelle": "Eine Viertelstunde mit klaren Ergebnissen",
     "erklaerung": "„wäre mir viel lieber\" zeigt den Wunsch: kurz und mit Entscheidungen."
    },
    {
     "art": "hoerwahl",
     "ort": "Thema: Neuer Kollege",
     "wer": "Mann",
     "text": "Der Neue ist noch etwas langsam, aber er fragt nach, wenn er etwas nicht weiß. Das ist mir viel lieber als jemand, der so tut, als könnte er schon alles.",
     "frage": "Wie findet der Mann den neuen Kollegen?",
     "opt": [
      "Positiv, weil er Fragen stellt.",
      "Er tut so, als wüsste er alles.",
      "Er ist zu langsam für die Arbeit."
     ],
     "loesung": 0,
     "stelle": "Das ist mir viel lieber",
     "erklaerung": "„langsam\" ist nur eine kleine Einschränkung. Nach „aber\" kommt das Positive."
    },
    {
     "art": "hoerwahl",
     "ort": "Thema: Dienstplan",
     "wer": "Frau",
     "text": "Eigentlich ist es mir egal, ob ich früh oder spät arbeite. Hauptsache, ich weiß es zwei Wochen vorher und nicht erst am Freitag davor.",
     "frage": "Was ist der Frau wichtig?",
     "opt": [
      "Sie möchte nur Spätschicht.",
      "Sie möchte nur Frühschicht.",
      "Sie möchte den Dienstplan rechtzeitig kennen."
     ],
     "loesung": 2,
     "stelle": "Hauptsache, ich weiß es zwei Wochen vorher",
     "erklaerung": "„Hauptsache\" zeigt, was wirklich zählt: früh genug Bescheid wissen."
    },
    {
     "art": "hoerwahl",
     "ort": "Thema: Kantine",
     "wer": "Mann",
     "text": "Das Essen in der Kantine ist nicht besonders, das stimmt. Aber für drei Euro fünfzig bekomme ich nirgendwo sonst ein warmes Mittagessen.",
     "frage": "Wie findet der Mann die Kantine?",
     "opt": [
      "Das Essen ist ausgezeichnet.",
      "Er isst dort nie.",
      "Für den Preis ist sie in Ordnung."
     ],
     "loesung": 2,
     "stelle": "bekomme ich nirgendwo sonst ein warmes Mittagessen",
     "erklaerung": "Erst die Kritik, dann „Aber\": Wegen des Preises ist er zufrieden."
    },
    {
     "art": "hoerwahl",
     "ort": "Thema: Arbeiten von zu Hause",
     "wer": "Frau",
     "text": "Viele Kollegen wollen mehr Tage zu Hause arbeiten. Ich nicht. Zu Hause sind die Kinder, da kann ich mich überhaupt nicht konzentrieren.",
     "frage": "Was sagt die Frau über die Arbeit zu Hause?",
     "opt": [
      "Sie möchte mehr Tage zu Hause arbeiten.",
      "Sie arbeitet lieber im Büro.",
      "Sie arbeitet zu Hause besonders gut."
     ],
     "loesung": 1,
     "stelle": "da kann ich mich überhaupt nicht konzentrieren",
     "erklaerung": "Die erste Aussage ist die Meinung der Kollegen. „Ich nicht\" zeigt ihre eigene."
    },
    {
     "art": "hoerwahl",
     "ort": "Thema: Betriebsausflug",
     "wer": "Mann",
     "text": "Ich hatte erst gar keine Lust auf den Betriebsausflug. Am Ende war es aber der lustigste Tag des Jahres, das muss ich zugeben.",
     "frage": "Wie fand der Mann den Ausflug?",
     "opt": [
      "Er ist nicht mitgefahren.",
      "Besser als gedacht.",
      "Langweilig, wie erwartet."
     ],
     "loesung": 1,
     "stelle": "der lustigste Tag des Jahres",
     "erklaerung": "„erst\" und „Am Ende\" zeigen eine Veränderung. Gefragt ist das Ergebnis."
    },
    {
     "art": "hoerwahl",
     "ort": "Thema: Arbeitskleidung",
     "wer": "Frau",
     "text": "Die neuen Uniformen sehen gut aus, keine Frage. Aber im Sommer schwitzt man darin furchtbar, der Stoff ist viel zu dick.",
     "frage": "Was stört die Frau an der Arbeitskleidung?",
     "opt": [
      "Sie sieht nicht gut aus.",
      "Sie ist zu warm.",
      "Sie ist zu teuer."
     ],
     "loesung": 1,
     "stelle": "der Stoff ist viel zu dick",
     "erklaerung": "Das Aussehen lobt sie. Kritik: Im Sommer ist der Stoff zu warm."
    },
    {
     "art": "hoerwahl",
     "ort": "Thema: Lob vom Chef",
     "wer": "Mann",
     "text": "Mein Chef sagt selten etwas Nettes. Wenn er aber einmal „gut gemacht\" sagt, dann weiß ich, dass er es wirklich so meint.",
     "frage": "Was denkt der Mann über das Lob seines Chefs?",
     "opt": [
      "Lob ist ihm egal.",
      "Das seltene Lob ist ehrlich gemeint.",
      "Er bekommt jeden Tag Lob."
     ],
     "loesung": 1,
     "stelle": "dass er es wirklich so meint",
     "erklaerung": "„selten\" passt nicht zu „jeden Tag\". Gerade weil es selten ist, glaubt er es."
    }
   ]
  },
  {
   "id": "tbb1h2",
   "stufe": 1,
   "titel": "Zahlen, Termine, Durchwahlen",
   "kurz": "Uhrzeiten, Telefonnummern, Mengen — und die Korrektur kommt oft danach.",
   "ziel": "Nach diesem Block hörst du bei Ansagen im Betrieb bis zum Ende zu und erkennst, welche Zahl wirklich gilt.",
   "zeichen": "☎️",
   "farbe": "gold",
   "mal": 2,
   "aufgaben": [
    {
     "art": "hoerwahl",
     "ort": "Anrufbeantworter der Personalabteilung",
     "wer": "Frau",
     "text": "Hier ist die Personalabteilung. Für Fragen zur Lohnabrechnung wählen Sie bitte die Durchwahl zwei eins sieben, für Urlaubsanträge die Durchwahl zwei eins neun.",
     "frage": "Welche Durchwahl wählt man für einen Urlaubsantrag?",
     "opt": [
      "Zwei eins neun.",
      "Zwei neun eins.",
      "Zwei eins sieben."
     ],
     "loesung": 0,
     "stelle": "für Urlaubsanträge die Durchwahl zwei eins neun",
     "erklaerung": "Zwei Durchwahlen werden genannt. Achte darauf, welche zu welchem Thema gehört."
    },
    {
     "art": "hoerwahl",
     "ort": "Lautsprecherdurchsage im Betrieb",
     "wer": "Mann",
     "text": "Die Betriebsversammlung findet nicht wie angekündigt am Dienstag, sondern am Donnerstag um vierzehn Uhr in der Kantine statt.",
     "frage": "Wann ist die Betriebsversammlung?",
     "opt": [
      "Am Donnerstag um vierzehn Uhr.",
      "Am Dienstag um vierzehn Uhr.",
      "Am Donnerstag um vier Uhr."
     ],
     "loesung": 0,
     "stelle": "sondern am Donnerstag um vierzehn Uhr",
     "erklaerung": "Der Dienstag wird korrigiert. Nach „nicht … sondern\" kommt der neue Tag."
    },
    {
     "art": "hoerwahl",
     "ort": "Nachricht einer Kundin",
     "wer": "Frau",
     "text": "Hallo, hier ist Frau Novak. Ich brauche doch nicht zwölf, sondern nur zehn Kartons Kopierpapier. Und bitte liefern Sie bis Mittwoch.",
     "frage": "Wie viele Kartons möchte Frau Novak?",
     "opt": [
      "Zwölf.",
      "Zwei.",
      "Zehn."
     ],
     "loesung": 2,
     "stelle": "sondern nur zehn Kartons Kopierpapier",
     "erklaerung": "Zwölf war die alte Menge. „doch nicht … sondern nur\" zeigt die Korrektur."
    },
    {
     "art": "hoerwahl",
     "ort": "Ansage im Lager",
     "wer": "Mann",
     "text": "Die Lieferung für Tor drei wird um eine Stunde verschoben. Der Lastwagen kommt also nicht um neun, sondern um zehn Uhr.",
     "frage": "Wann kommt der Lastwagen?",
     "opt": [
      "Um neun Uhr.",
      "Um zehn Uhr.",
      "Um drei Uhr."
     ],
     "loesung": 1,
     "stelle": "sondern um zehn Uhr",
     "erklaerung": "Die Drei gehört zum Tor, nicht zur Uhrzeit. Neun Uhr ist die alte Zeit."
    },
    {
     "art": "hoerwahl",
     "ort": "Mitteilung der Geschäftsführung",
     "wer": "Frau",
     "text": "Die Weihnachtsfeier kostet für Mitarbeiter nichts. Nur wer seinen Partner mitbringt, zahlt für ihn fünfzehn Euro.",
     "frage": "Was kostet die Feier für einen Mitarbeiter, der allein kommt?",
     "opt": [
      "Nichts.",
      "Fünfzehn Euro.",
      "Fünfzig Euro."
     ],
     "loesung": 0,
     "stelle": "kostet für Mitarbeiter nichts",
     "erklaerung": "Die fünfzehn Euro gelten nur für den Partner, nicht für den Mitarbeiter selbst."
    },
    {
     "art": "hoerwahl",
     "ort": "Anrufbeantworter einer Firma",
     "wer": "Mann",
     "text": "Unser Kundenservice ist von Montag bis Freitag von sieben Uhr dreißig bis sechzehn Uhr erreichbar. Am Samstag sind wir nur per E-Mail für Sie da.",
     "frage": "Wann beginnt der Kundenservice morgens?",
     "opt": [
      "Um halb acht.",
      "Um sechzehn Uhr.",
      "Um sieben Uhr."
     ],
     "loesung": 0,
     "stelle": "von sieben Uhr dreißig bis sechzehn Uhr",
     "erklaerung": "Sieben Uhr dreißig ist dasselbe wie halb acht. Achte auf andere Formulierungen der Uhrzeit."
    },
    {
     "art": "hoerwahl",
     "ort": "Telefonnachricht eines Kollegen",
     "wer": "Mann",
     "text": "Hallo Anna, hier ist Ralf. Meine neue Handynummer ist null eins fünf eins, vier vier sieben, zwei acht null. Die alte Nummer funktioniert ab morgen nicht mehr.",
     "frage": "Wie lautet Ralfs neue Nummer?",
     "opt": [
      "Null eins fünf eins, vier sieben vier, zwei acht null.",
      "Null eins fünf eins, vier vier sieben, zwei acht null.",
      "Null eins fünf eins, vier vier sieben, acht zwei null."
     ],
     "loesung": 1,
     "stelle": "null eins fünf eins, vier vier sieben, zwei acht null",
     "erklaerung": "Bei Telefonnummern zählt jede Ziffer. Die falschen Antworten vertauschen nur zwei Zahlen."
    },
    {
     "art": "hoerwahl",
     "ort": "Lautsprecherdurchsage im Betrieb",
     "wer": "Frau",
     "text": "Die Kantine öffnet heute ausnahmsweise erst um zwölf Uhr dreißig statt um elf Uhr dreißig. Wir bitten um Verständnis.",
     "frage": "Wann öffnet die Kantine heute?",
     "opt": [
      "Um elf Uhr dreißig.",
      "Um zwölf Uhr.",
      "Um zwölf Uhr dreißig."
     ],
     "loesung": 2,
     "stelle": "erst um zwölf Uhr dreißig statt um elf Uhr dreißig",
     "erklaerung": "„statt\" zeigt die alte Zeit. Heute gilt zwölf Uhr dreißig."
    },
    {
     "art": "hoerwahl",
     "ort": "Anrufbeantworter des Betriebsarztes",
     "wer": "Frau",
     "text": "Hier ist der betriebsärztliche Dienst. Die Grippeimpfung findet am dritten und am fünften November statt. Bitte melden Sie sich bis zum ersten November an.",
     "frage": "Bis wann muss man sich anmelden?",
     "opt": [
      "Bis zum ersten November.",
      "Bis zum dritten November.",
      "Bis zum fünften November."
     ],
     "loesung": 0,
     "stelle": "bis zum ersten November an",
     "erklaerung": "Drei Daten: zwei Impftermine und ein Anmeldeschluss. Gefragt ist die Anmeldung."
    },
    {
     "art": "hoerwahl",
     "ort": "Ansage im Lager",
     "wer": "Mann",
     "text": "Für die Inventur brauchen wir am Samstag acht Leute. Fünf haben sich schon eingetragen, es fehlen also noch drei.",
     "frage": "Wie viele Helfer fehlen noch?",
     "opt": [
      "Drei.",
      "Acht.",
      "Fünf."
     ],
     "loesung": 0,
     "stelle": "es fehlen also noch drei",
     "erklaerung": "Acht ist die Gesamtzahl, fünf haben sich schon gemeldet. Es fehlen drei."
    }
   ]
  },
  {
   "id": "tbb1h3",
   "stufe": 2,
   "titel": "Gespräche im Betrieb: Signalwörter",
   "kurz": "eigentlich, allerdings, früher, nur wenn, trotzdem — kleine Wörter, große Wirkung.",
   "ziel": "Nach diesem Block achtest du in Gesprächen am Arbeitsplatz auf Signalwörter, die eine Aussage einschränken oder umdrehen.",
   "zeichen": "💬",
   "farbe": "rot",
   "mal": 2,
   "aufgaben": [
    {
     "art": "hoerwahl",
     "ort": "Gespräch in der Pause",
     "wer": "Frau",
     "text": "Eigentlich wollte ich heute früher gehen. Aber dann ist meine Kollegin krank geworden, und jetzt bleibe ich bis zum Ende der Schicht.",
     "frage": "Was macht die Frau heute?",
     "opt": [
      "Sie geht früher nach Hause.",
      "Sie ist krank.",
      "Sie arbeitet bis zum Schichtende."
     ],
     "loesung": 2,
     "stelle": "jetzt bleibe ich bis zum Ende der Schicht",
     "erklaerung": "„Eigentlich wollte ich\" zeigt einen Plan, der nicht passiert."
    },
    {
     "art": "hoerwahl",
     "ort": "Gespräch mit dem Meister",
     "wer": "Mann",
     "text": "Die Maschine läuft wieder, allerdings nur mit halber Geschwindigkeit. Das Ersatzteil kommt erst morgen.",
     "frage": "Wie ist der Zustand der Maschine?",
     "opt": [
      "Sie ist komplett kaputt.",
      "Sie läuft wieder ganz normal.",
      "Sie läuft, aber langsamer."
     ],
     "loesung": 2,
     "stelle": "allerdings nur mit halber Geschwindigkeit",
     "erklaerung": "„allerdings\" schränkt die gute Nachricht ein."
    },
    {
     "art": "hoerwahl",
     "ort": "Gespräch im Büro",
     "wer": "Frau",
     "text": "Früher habe ich alle Rechnungen auf Papier abgelegt. Seit dem Frühjahr scannen wir alles ein und speichern es digital.",
     "frage": "Wie werden die Rechnungen heute abgelegt?",
     "opt": [
      "Digital am Computer.",
      "Gar nicht mehr.",
      "Auf Papier im Ordner."
     ],
     "loesung": 0,
     "stelle": "speichern es digital",
     "erklaerung": "„Früher\" und „Seit dem Frühjahr\" trennen zwei Zeiten. Gefragt ist heute."
    },
    {
     "art": "hoerwahl",
     "ort": "Gespräch mit der Teamleiterin",
     "wer": "Frau",
     "text": "Ich kann Ihnen den Urlaub im August geben, vorausgesetzt, Herr Kraus übernimmt in der Zeit Ihre Kunden.",
     "frage": "Unter welcher Bedingung bekommt der Mitarbeiter Urlaub?",
     "opt": [
      "Nur wenn er im Juli fährt.",
      "Ohne Bedingung.",
      "Wenn ein Kollege ihn vertritt."
     ],
     "loesung": 2,
     "stelle": "vorausgesetzt, Herr Kraus übernimmt",
     "erklaerung": "„vorausgesetzt\" nennt eine Bedingung: Ein Kollege muss die Kunden übernehmen."
    },
    {
     "art": "hoerwahl",
     "ort": "Telefongespräch mit einem Kunden",
     "wer": "Mann",
     "text": "Ihre Bestellung ist leider noch nicht unterwegs. Sie verlässt unser Lager nämlich erst am Montag.",
     "frage": "Was sagt der Mann über die Bestellung?",
     "opt": [
      "Sie ist schon unterwegs.",
      "Sie wird erst am Montag verschickt.",
      "Sie wurde storniert."
     ],
     "loesung": 1,
     "stelle": "Sie verlässt unser Lager nämlich erst am Montag",
     "erklaerung": "„noch nicht\" und „erst\" zeigen: Die Ware kommt später."
    },
    {
     "art": "hoerwahl",
     "ort": "Gespräch in der Werkstatt",
     "wer": "Mann",
     "text": "Den Auftrag schaffen wir bis Freitag, aber nur, wenn wir am Donnerstag alle eine Stunde länger bleiben.",
     "frage": "Was ist nötig, damit der Auftrag fertig wird?",
     "opt": [
      "Mehr Zeit bis nächste Woche.",
      "Überstunden am Donnerstag.",
      "Ein neuer Mitarbeiter."
     ],
     "loesung": 1,
     "stelle": "aber nur, wenn wir am Donnerstag alle eine Stunde länger bleiben",
     "erklaerung": "„aber nur, wenn\" macht aus der Zusage eine Bedingung."
    },
    {
     "art": "hoerwahl",
     "ort": "Gespräch mit einer Kollegin",
     "wer": "Frau",
     "text": "Ich arbeite nicht mehr in der Buchhaltung. Seit einem Monat bin ich im Einkauf, und das macht mir viel mehr Spaß.",
     "frage": "Wo arbeitet die Frau jetzt?",
     "opt": [
      "Im Verkauf.",
      "Im Einkauf.",
      "In der Buchhaltung."
     ],
     "loesung": 1,
     "stelle": "Seit einem Monat bin ich im Einkauf",
     "erklaerung": "„nicht mehr\" zeigt: Die Buchhaltung ist Vergangenheit."
    },
    {
     "art": "hoerwahl",
     "ort": "Gespräch mit dem Chef",
     "wer": "Mann",
     "text": "Sie haben zwar noch keine Erfahrung mit Kunden, trotzdem möchte ich Sie gern im Verkauf einsetzen. Sie lernen schnell.",
     "frage": "Was entscheidet der Chef?",
     "opt": [
      "Die Person bekommt keinen Kundenkontakt.",
      "Die Person soll im Verkauf arbeiten.",
      "Die Person braucht erst eine Schulung."
     ],
     "loesung": 1,
     "stelle": "trotzdem möchte ich Sie gern im Verkauf einsetzen",
     "erklaerung": "„zwar … trotzdem\": Nach „trotzdem\" kommt die Entscheidung."
    },
    {
     "art": "hoerwahl",
     "ort": "Gespräch im Lager",
     "wer": "Mann",
     "text": "Die Kartons kommen nicht ins Regal, sondern bleiben auf der Palette, bis der Kunde sie abholt.",
     "frage": "Wo bleiben die Kartons?",
     "opt": [
      "Auf der Palette.",
      "Beim Kunden.",
      "Im Regal."
     ],
     "loesung": 0,
     "stelle": "sondern bleiben auf der Palette",
     "erklaerung": "„nicht … sondern\": Nach „sondern\" steht der richtige Ort."
    },
    {
     "art": "hoerwahl",
     "ort": "Gespräch auf der Pflegestation",
     "wer": "Frau",
     "text": "Normalerweise mache ich die Medikamentenrunde. Heute übernimmt das ausnahmsweise mein Kollege, weil ich die neue Auszubildende einarbeite.",
     "frage": "Wer macht heute die Medikamentenrunde?",
     "opt": [
      "Die Auszubildende.",
      "Ein Kollege.",
      "Die Frau selbst."
     ],
     "loesung": 1,
     "stelle": "Heute übernimmt das ausnahmsweise mein Kollege",
     "erklaerung": "„Normalerweise\" beschreibt den Alltag, „ausnahmsweise\" den heutigen Tag."
    }
   ]
  },
  {
   "id": "tbb1h4",
   "stufe": 2,
   "titel": "Richtig oder falsch? Die Fallen im Arbeitsalltag",
   "kurz": "Umschreibung, Verneinung, falsche Person, falsche Zeit — die vier Klassiker.",
   "ziel": "Nach diesem Block erkennst du die typischen Fallen bei Richtig-oder-falsch-Aufgaben mit Texten aus dem Beruf.",
   "zeichen": "⚖️",
   "farbe": "lila",
   "mal": 2,
   "aufgaben": [
    {
     "art": "hoerwahl",
     "ort": "Nachricht einer Kollegin",
     "wer": "Frau",
     "text": "Hallo Herr Weber, hier ist Frau Schulz. Ich schaffe es morgen leider nicht zur Besprechung, ich habe einen Arzttermin. Können Sie mir das Protokoll schicken?",
     "frage": "Frau Schulz kann morgen nicht an der Besprechung teilnehmen.",
     "opt": [
      "Richtig",
      "Falsch"
     ],
     "loesung": 0,
     "stelle": "Ich schaffe es morgen leider nicht zur Besprechung",
     "erklaerung": "Umschreibung: „schaffe es nicht\" bedeutet „kann nicht\". Andere Wörter, gleiche Aussage."
    },
    {
     "art": "hoerwahl",
     "ort": "Gespräch über Schichtarbeit",
     "wer": "Mann",
     "text": "Mein Kollege arbeitet nur nachts, das würde ich nie aushalten. Ich mache Frühschicht und Spätschicht im Wechsel.",
     "frage": "Der Mann arbeitet nachts.",
     "opt": [
      "Richtig",
      "Falsch"
     ],
     "loesung": 1,
     "stelle": "Ich mache Frühschicht und Spätschicht im Wechsel.",
     "erklaerung": "Falsche Person: Nachts arbeitet sein Kollege, nicht er selbst."
    },
    {
     "art": "hoerwahl",
     "ort": "Lautsprecherdurchsage im Betrieb",
     "wer": "Frau",
     "text": "Die Schulung zum Arbeitsschutz ist nicht freiwillig. Alle Mitarbeiter im Lager müssen bis Ende des Monats daran teilnehmen.",
     "frage": "Die Teilnahme an der Schulung ist freiwillig.",
     "opt": [
      "Richtig",
      "Falsch"
     ],
     "loesung": 1,
     "stelle": "ist nicht freiwillig",
     "erklaerung": "Verneinung: Das kleine Wort „nicht\" dreht die Aussage um."
    },
    {
     "art": "hoerwahl",
     "ort": "Mitteilung der Geschäftsführung",
     "wer": "Mann",
     "text": "Unser Betrieb bleibt zwischen Weihnachten und Neujahr geschlossen. Diese Tage werden nicht vom Urlaub abgezogen.",
     "frage": "Die Mitarbeiter haben zwischen den Feiertagen frei, ohne Urlaub zu nehmen.",
     "opt": [
      "Richtig",
      "Falsch"
     ],
     "loesung": 0,
     "stelle": "Diese Tage werden nicht vom Urlaub abgezogen.",
     "erklaerung": "Umschreibung: „nicht vom Urlaub abgezogen\" heißt „ohne Urlaub zu nehmen\"."
    },
    {
     "art": "hoerwahl",
     "ort": "Nachricht eines Kunden",
     "wer": "Mann",
     "text": "Guten Tag, hier ist Herr Rossi. Ich hatte die Reparatur für nächste Woche bestellt, aber da bin ich im Urlaub. Bitte kommen Sie erst in drei Wochen.",
     "frage": "Herr Rossi möchte, dass die Reparatur nächste Woche stattfindet.",
     "opt": [
      "Richtig",
      "Falsch"
     ],
     "loesung": 1,
     "stelle": "Bitte kommen Sie erst in drei Wochen.",
     "erklaerung": "Falsche Zeit: Nächste Woche war der alte Termin, jetzt soll es später sein."
    },
    {
     "art": "hoerwahl",
     "ort": "Gespräch an der Hotelrezeption",
     "wer": "Frau",
     "text": "Den Gästen gefällt unser neues Frühstücksbuffet sehr gut. Seit der Änderung haben wir kaum noch Beschwerden.",
     "frage": "Die Gäste beschweren sich seltener als früher.",
     "opt": [
      "Richtig",
      "Falsch"
     ],
     "loesung": 0,
     "stelle": "haben wir kaum noch Beschwerden",
     "erklaerung": "Umschreibung: „kaum noch\" bedeutet „viel seltener als früher\"."
    },
    {
     "art": "hoerwahl",
     "ort": "Ansage im Lager",
     "wer": "Mann",
     "text": "Wer heute den Stapler fährt, muss vorher die Bremsen prüfen. Ohne Kontrolle darf niemand losfahren.",
     "frage": "Vor der Fahrt mit dem Stapler muss man die Bremsen kontrollieren.",
     "opt": [
      "Richtig",
      "Falsch"
     ],
     "loesung": 0,
     "stelle": "muss vorher die Bremsen prüfen",
     "erklaerung": "„prüfen\" und „kontrollieren\" bedeuten hier dasselbe."
    },
    {
     "art": "hoerwahl",
     "ort": "Gespräch mit dem Betriebsrat",
     "wer": "Frau",
     "text": "Viele denken, der Betriebsrat entscheidet über die Gehälter. Das stimmt nicht, die werden mit der Gewerkschaft verhandelt.",
     "frage": "Der Betriebsrat entscheidet über die Gehälter.",
     "opt": [
      "Richtig",
      "Falsch"
     ],
     "loesung": 1,
     "stelle": "Das stimmt nicht",
     "erklaerung": "„Viele denken\" ist eine fremde Meinung. Die Sprecherin sagt danach das Gegenteil."
    },
    {
     "art": "hoerwahl",
     "ort": "Mitteilung der Personalabteilung",
     "wer": "Frau",
     "text": "Bitte geben Sie Ihre Krankmeldung spätestens am dritten Tag ab. Am besten schicken Sie uns gleich ein Foto per E-Mail.",
     "frage": "Man darf die Krankmeldung auch per E-Mail schicken.",
     "opt": [
      "Richtig",
      "Falsch"
     ],
     "loesung": 0,
     "stelle": "schicken Sie uns gleich ein Foto per E-Mail",
     "erklaerung": "Ein Foto per E-Mail ist sogar erwünscht. Die Aussage stimmt."
    },
    {
     "art": "hoerwahl",
     "ort": "Gespräch über Weiterbildung",
     "wer": "Mann",
     "text": "Den Englischkurs wollte ich eigentlich machen, aber er war leider schon voll. Jetzt versuche ich es im Herbst noch einmal.",
     "frage": "Der Mann besucht gerade einen Englischkurs.",
     "opt": [
      "Richtig",
      "Falsch"
     ],
     "loesung": 1,
     "stelle": "aber er war leider schon voll",
     "erklaerung": "„wollte eigentlich\" zeigt einen Plan, der nicht geklappt hat."
    }
   ]
  }
 ],
 "teile": [
  {
   "nr": 1,
   "art": "diskussion",
   "name": "Hörverstehen: Kollegen äußern sich",
   "kurz": "Fünf Personen — nur EINMAL hören",
   "was": "Fünf Beschäftigte äußern sich zu einem Arbeitsthema. Zu jeder Person eine Aussage: richtig oder falsch? Du hörst jeden Text nur einmal.",
   "tipp": "Es geht um die Hauptaussage: Wie findet die Person es, was hat sie erlebt?",
   "zeichen": "🗣️",
   "farbe": "turq",
   "punkte": 5,
   "mal": 1,
   "runden": [
    {
     "id": "b1bbh1s1",
     "titel": "Wie kommen Sie mit Schichtarbeit zurecht?",
     "aufgaben": [
      {
       "von": "Person 1 — Jana, 29",
       "wer": "Frau",
       "text": "Viele Leute fragen mich, wie ich das aushalte. Ich bin Pflegekraft im Krankenhaus, und ehrlich gesagt mag ich die Nachtschicht sogar am liebsten. Auf der Station ist es ruhig, ich habe mehr Zeit für die Patienten, und das Team ist klein und gut eingespielt. Schwierig ist nur der Schlaf am Tag, wenn draußen die Müllabfuhr kommt. Aber mit Ohrstöpseln geht das inzwischen ganz gut.",
       "satz": "Jana arbeitet nicht gern in der Nacht.",
       "loesung": false,
       "stelle": "mag ich die Nachtschicht sogar am liebsten",
       "erklaerung": "Sie nennt nur ein kleines Problem mit dem Schlaf. Die Nachtschicht mag sie am liebsten."
      },
      {
       "von": "Person 2 — Viktor, 47",
       "wer": "Mann",
       "text": "Ich arbeite seit zwanzig Jahren in der Produktion, immer im Wechsel: Frühschicht, Spätschicht, Nachtschicht. Früher war mir das egal, aber jetzt merke ich es körperlich. Nach jeder Nachtwoche brauche ich fast drei Tage, bis ich wieder normal bin. Ich habe deshalb mit meinem Meister gesprochen, und ab nächstem Monat mache ich nur noch Früh und Spät.",
       "satz": "Viktor fällt der Schichtwechsel heute schwerer als früher.",
       "loesung": true,
       "stelle": "jetzt merke ich es körperlich",
       "erklaerung": "„Früher war mir das egal, aber jetzt\": Heute ist es für ihn anstrengender."
      },
      {
       "von": "Person 3 — Serpil, 38",
       "wer": "Frau",
       "text": "Bei uns im Kundenservice gibt es einen Frühdienst und einen Spätdienst. Für mich als Mutter ist das eigentlich ideal. Wenn ich Spätdienst habe, bringe ich morgens die Kinder in die Schule, und mein Mann holt sie mittags ab. In der Frühwoche ist es genau umgekehrt. So brauchen wir keine Betreuung am Nachmittag.",
       "satz": "Serpil findet, dass sich ihre Schichtarbeit gut mit der Familie verbinden lässt.",
       "loesung": true,
       "stelle": "Für mich als Mutter ist das eigentlich ideal.",
       "erklaerung": "Durch die zwei Dienste können sie und ihr Mann die Kinder abwechselnd betreuen."
      },
      {
       "von": "Person 4 — Robert, 55",
       "wer": "Mann",
       "text": "Viele denken, die Zuschläge machen alles wieder gut. Klar, das Geld ist nicht schlecht, gerade für Nachtschichten und Sonntage. Aber wenn ich als Busfahrer an Weihnachten unterwegs bin und meine Familie ohne mich feiert, dann hilft mir das Geld auch nicht. Wenn ich ehrlich bin: Für dasselbe Gehalt würde ich sofort in einen normalen Tagdienst wechseln.",
       "satz": "Für Robert ist die bessere Bezahlung der wichtigste Vorteil der Schichtarbeit.",
       "loesung": false,
       "stelle": "dann hilft mir das Geld auch nicht",
       "erklaerung": "„Klar, das Geld ist nicht schlecht\" ist die Falle. Die Zeit mit der Familie ist ihm wichtiger."
      },
      {
       "von": "Person 5 — Lukas, 24",
       "wer": "Mann",
       "text": "Ich bin Koch, also kenne ich nichts anderes als Arbeit am Abend und am Wochenende. Meine alten Freunde treffen sich freitags, und ich stehe in der Küche. Das hat mich am Anfang total gestört. Inzwischen habe ich aber neue Freunde aus der Gastronomie, und wir gehen montags oder dienstags zusammen weg. Das passt eigentlich ganz gut.",
       "satz": "Lukas stören seine Arbeitszeiten heute immer noch sehr.",
       "loesung": false,
       "stelle": "Das passt eigentlich ganz gut.",
       "erklaerung": "Gestört hat es ihn nur am Anfang. Heute hat er eine Lösung gefunden."
      }
     ]
    },
    {
     "id": "b1bbh1s2",
     "titel": "Wie arbeiten Sie im Großraumbüro?",
     "aufgaben": [
      {
       "von": "Person 1 — Nadine, 33",
       "wer": "Frau",
       "text": "Seit dem Umzug sitzen wir mit vierzig Leuten in einem großen Raum. Am Anfang dachte ich, das wird schrecklich laut. Aber ehrlich gesagt ist es ruhiger, als ich befürchtet habe. Die Firma hat Teppiche und Trennwände eingebaut, und für Telefonate gibt es kleine Kabinen. Ich komme also gut zurecht.",
       "satz": "Nadine findet das Großraumbüro zu laut zum Arbeiten.",
       "loesung": false,
       "stelle": "ist es ruhiger, als ich befürchtet habe",
       "erklaerung": "Die Angst vor dem Lärm hatte sie nur am Anfang. Jetzt kommt sie gut zurecht."
      },
      {
       "von": "Person 2 — Frank, 52",
       "wer": "Mann",
       "text": "Also, ich brauche für meine Arbeit Ruhe. Ich prüfe in der Buchhaltung den ganzen Tag Rechnungen, da darf kein Fehler passieren. Im Großraum klingelt ständig irgendwo ein Telefon, jemand lacht, jemand isst. Ich habe deshalb gefragt, ob ich zwei Tage pro Woche von zu Hause arbeiten darf. Zum Glück hat mein Chef ja gesagt.",
       "satz": "Frank arbeitet jetzt teilweise zu Hause, weil er im Büro gestört wird.",
       "loesung": true,
       "stelle": "Zum Glück hat mein Chef ja gesagt.",
       "erklaerung": "Wegen des Lärms arbeitet er zwei Tage pro Woche zu Hause, der Chef hat zugestimmt."
      },
      {
       "von": "Person 3 — Elif, 26",
       "wer": "Frau",
       "text": "Für mich als Neue im Marketing war das Großraumbüro ein Vorteil. Ich höre einfach mit, wie die Kollegen mit Kunden sprechen, und lerne dabei sehr viel. Und wenn ich eine Frage habe, muss ich nicht erst an eine Tür klopfen. Ich weiß, dass viele Ältere das anders sehen, aber ich möchte kein eigenes Büro.",
       "satz": "Elif hätte lieber ein Einzelbüro.",
       "loesung": false,
       "stelle": "ich möchte kein eigenes Büro",
       "erklaerung": "Andere sehen das kritisch, sie selbst nicht. Für sie ist der große Raum ein Vorteil."
      },
      {
       "von": "Person 4 — Stefan, 44",
       "wer": "Mann",
       "text": "Bei uns gibt es keine festen Plätze mehr. Wer morgens zuerst kommt, sucht sich einen Schreibtisch aus. Das klingt modern, aber in der Praxis sitzt mein Team oft weit verteilt, und ich muss meine Leute erst suchen. Ich finde, ein Team sollte zusammensitzen. Darüber spreche ich nächste Woche mit der Geschäftsleitung.",
       "satz": "Stefan ist mit den freien Arbeitsplätzen nicht ganz zufrieden.",
       "loesung": true,
       "stelle": "ein Team sollte zusammensitzen",
       "erklaerung": "„Das klingt modern, aber\": Er sieht ein Problem und will mit der Geschäftsleitung sprechen."
      },
      {
       "von": "Person 5 — Monika, 59",
       "wer": "Frau",
       "text": "Ich habe dreißig Jahre allein in einem Büro gesessen. Als wir in den Großraum umgezogen sind, war ich zuerst richtig sauer. Inzwischen muss ich zugeben: Ich rede viel mehr mit den Kollegen, und manches Problem ist in fünf Minuten gelöst, statt dass ich drei E-Mails schreibe. Ganz zurück möchte ich eigentlich nicht mehr.",
       "satz": "Monika sieht heute auch Vorteile im Großraumbüro.",
       "loesung": true,
       "stelle": "manches Problem ist in fünf Minuten gelöst",
       "erklaerung": "Zuerst war sie sauer, „inzwischen\" sieht sie Vorteile und möchte nicht zurück."
      }
     ]
    },
    {
     "id": "b1bbh1s3",
     "titel": "Machen Sie eine Weiterbildung?",
     "aufgaben": [
      {
       "von": "Person 1 — Ahmad, 31",
       "wer": "Mann",
       "text": "Ich arbeite seit vier Jahren im Lager. Jetzt mache ich abends und am Samstag eine Weiterbildung zur Fachkraft für Lagerlogistik. Das ist anstrengend, ganz klar. Aber mein Arbeitgeber bezahlt den Kurs komplett, und wenn ich die Prüfung bestehe, bekomme ich mehr Geld. Diese Chance wollte ich auf keinen Fall verpassen.",
       "satz": "Ahmad muss die Weiterbildung selbst bezahlen.",
       "loesung": false,
       "stelle": "mein Arbeitgeber bezahlt den Kurs komplett",
       "erklaerung": "Die Kosten trägt der Arbeitgeber. Anstrengend ist nur die Zeit am Abend und am Samstag."
      },
      {
       "von": "Person 2 — Claudia, 48",
       "wer": "Frau",
       "text": "Fortbildungen gibt es bei uns im Krankenhaus genug, das Problem ist die Zeit. Offiziell ist die Fortbildung Arbeitszeit. Aber wenn auf der Station Personal fehlt, wird man trotzdem gerufen. Letztes Jahr musste ich zweimal einen Kurs absagen. Das ärgert mich, denn ich möchte mich ja weiterentwickeln.",
       "satz": "Claudia konnte nicht alle geplanten Kurse besuchen.",
       "loesung": true,
       "stelle": "musste ich zweimal einen Kurs absagen",
       "erklaerung": "Wegen Personalmangel auf der Station musste sie Kurse absagen."
      },
      {
       "von": "Person 3 — Jens, 36",
       "wer": "Mann",
       "text": "Ich bin Elektriker und habe meinen Meister gemacht, das hat zwei Jahre gedauert. Viele haben gesagt, das lohnt sich nicht. Heute leite ich ein kleines Team und verdiene deutlich mehr. Würde ich es noch einmal machen? Sofort. Die zwei Jahre waren hart, aber sie haben sich gelohnt.",
       "satz": "Jens bereut seine Weiterbildung zum Meister.",
       "loesung": false,
       "stelle": "aber sie haben sich gelohnt",
       "erklaerung": "„Viele haben gesagt\" ist die Meinung anderer. Er selbst würde es sofort wieder machen."
      },
      {
       "von": "Person 4 — Olga, 42",
       "wer": "Frau",
       "text": "In meiner Firma gibt es jetzt viele Onlinekurse, die man am Computer machen kann, wann man will. Theoretisch ist das super flexibel. Praktisch sitze ich nach der Arbeit aber nicht noch eine Stunde vor dem Bildschirm. Mir fehlt auch der Austausch. In einem richtigen Kurs mit anderen Leuten lerne ich einfach mehr.",
       "satz": "Olga lernt lieber gemeinsam mit anderen als allein am Computer.",
       "loesung": true,
       "stelle": "In einem richtigen Kurs mit anderen Leuten lerne ich einfach mehr.",
       "erklaerung": "„Theoretisch … praktisch\": Die Onlinekurse klingen gut, aber sie lernt lieber in der Gruppe."
      },
      {
       "von": "Person 5 — Rainer, 61",
       "wer": "Mann",
       "text": "Ehrlich gesagt habe ich mich lange gegen Weiterbildungen gewehrt. In vier Jahren gehe ich in Rente, wozu noch etwas Neues lernen? Aber dann kam das neue Programm für die Lagerverwaltung, und ohne Schulung ging gar nichts mehr. Also habe ich sie gemacht, und jetzt bin ich sogar der, den die Jüngeren fragen. Das hätte ich nie gedacht.",
       "satz": "Rainer findet Weiterbildung in seinem Alter heute immer noch sinnlos.",
       "loesung": false,
       "stelle": "jetzt bin ich sogar der, den die Jüngeren fragen",
       "erklaerung": "Früher war er dagegen. Heute hilft ihm die Schulung, und die Jüngeren fragen ihn."
      }
     ]
    }
   ]
  },
  {
   "nr": 2,
   "art": "gespraech",
   "name": "Hörverstehen: Gespräch im Betrieb",
   "kurz": "Ein Gespräch, zehn Aussagen — zweimal hören",
   "was": "Du hörst ein Gespräch bei der Arbeit in Abschnitten. Zu jedem Abschnitt eine Aussage: richtig oder falsch? Du darfst zweimal hören.",
   "tipp": "Pläne und Zuständigkeiten ändern sich im Gespräch — achte auf „doch nicht\", „stattdessen\", „erst ab\".",
   "zeichen": "🏢",
   "farbe": "gold",
   "punkte": 10,
   "mal": 2,
   "runden": [
    {
     "id": "b1bbh2s1",
     "titel": "Erster Arbeitstag: Einarbeitung einer neuen Kollegin im Lager",
     "aufgaben": [
      {
       "ort": "Gespräch — Abschnitt 1",
       "zeilen": [
        {
         "wer": "Mann",
         "text": "Guten Morgen, Frau Petrović! Herzlich willkommen bei uns im Lager. Ich bin Jens Albers, Schichtleiter in der Frühschicht. Ich zeige Ihnen heute alles. Haben Sie gut hergefunden?"
        },
        {
         "wer": "Frau",
         "text": "Guten Morgen! Ja, eigentlich schon. Ich bin mit dem Bus gekommen, aber die Haltestelle ist ziemlich weit weg. Ich musste fast zwanzig Minuten laufen. Gibt es keinen kürzeren Weg?"
        },
        {
         "wer": "Mann",
         "text": "Doch, hinter der Kantine gibt es ein kleines Tor für Fußgänger. Da sind Sie in fünf Minuten an der Haltestelle."
        }
       ],
       "satz": "Von der Haltestelle bis zum Lager braucht man auch auf dem kürzesten Weg zwanzig Minuten.",
       "loesung": false,
       "stelle": "Da sind Sie in fünf Minuten an der Haltestelle",
       "erklaerung": "Zwanzig Minuten war ihr Umweg — durch das Tor hinter der Kantine sind es nur fünf Minuten."
      },
      {
       "ort": "Gespräch — Abschnitt 2",
       "zeilen": [
        {
         "wer": "Frau",
         "text": "Wann fängt die Frühschicht genau an?"
        },
        {
         "wer": "Mann",
         "text": "Offiziell um sechs Uhr. Aber bitte seien Sie zehn Minuten früher da, weil Sie sich noch umziehen müssen. Die Arbeitskleidung bekommen Sie heute von mir, die Sicherheitsschuhe auch. Die Schuhe nehmen Sie übrigens nicht mit nach Hause, die bleiben im Spind."
        },
        {
         "wer": "Frau",
         "text": "Alles klar, dann bin ich morgen um Viertel vor sechs hier."
        }
       ],
       "satz": "Die Sicherheitsschuhe muss Frau Petrović selbst kaufen.",
       "loesung": false,
       "stelle": "Die Arbeitskleidung bekommen Sie heute von mir, die Sicherheitsschuhe auch",
       "erklaerung": "Kleidung und Schuhe bekommt sie vom Schichtleiter, sie muss nichts kaufen."
      },
      {
       "ort": "Gespräch — Abschnitt 3",
       "zeilen": [
        {
         "wer": "Mann",
         "text": "Hier vorne ist der Wareneingang. Die Lastwagen kommen meistens zwischen sechs und zehn Uhr. In der ersten Woche arbeiten Sie aber noch nicht hier, sondern in der Kommissionierung. Da stellen Sie die Bestellungen für unsere Kunden zusammen."
        },
        {
         "wer": "Frau",
         "text": "Das habe ich in meinem letzten Job auch gemacht, bei einem Getränkehändler."
        },
        {
         "wer": "Mann",
         "text": "Sehr gut, dann kennen Sie das Prinzip ja schon."
        }
       ],
       "satz": "In der ersten Woche stellt Frau Petrović Bestellungen zusammen.",
       "loesung": true,
       "stelle": "Da stellen Sie die Bestellungen für unsere Kunden zusammen",
       "erklaerung": "Sie arbeitet zuerst in der Kommissionierung, nicht im Wareneingang."
      },
      {
       "ort": "Gespräch — Abschnitt 4",
       "zeilen": [
        {
         "wer": "Frau",
         "text": "Wie funktioniert das hier genau? Bekomme ich eine Liste?"
        },
        {
         "wer": "Mann",
         "text": "Nein, Papierlisten haben wir seit zwei Jahren nicht mehr. Sie bekommen einen Handscanner. Auf dem Bildschirm sehen Sie, zu welchem Regal Sie gehen müssen und wie viele Teile Sie nehmen sollen. Dann scannen Sie den Code am Regal und den Code am Produkt. Wenn etwas nicht stimmt, piept das Gerät."
        }
       ],
       "satz": "Die Aufträge bekommt Frau Petrović auf einer Liste aus Papier.",
       "loesung": false,
       "stelle": "Papierlisten haben wir seit zwei Jahren nicht mehr",
       "erklaerung": "Es gibt keine Papierlisten mehr, die Aufträge stehen auf dem Handscanner."
      },
      {
       "ort": "Gespräch — Abschnitt 5",
       "zeilen": [
        {
         "wer": "Frau",
         "text": "Und wie viele Aufträge muss man pro Stunde schaffen?"
        },
        {
         "wer": "Mann",
         "text": "Normalerweise rechnen wir mit etwa vierzig Positionen pro Stunde. Aber machen Sie sich keinen Stress. Am Anfang zählt nur, dass Sie keine Fehler machen. Ein falsches Teil beim Kunden kostet uns viel mehr Zeit als ein langsamer Mitarbeiter. Die Geschwindigkeit kommt nach ein paar Wochen von allein."
        }
       ],
       "satz": "Am Anfang ist es wichtiger, genau zu arbeiten als schnell.",
       "loesung": true,
       "stelle": "Am Anfang zählt nur, dass Sie keine Fehler machen",
       "erklaerung": "Fehler kosten mehr Zeit als langsames Arbeiten — Genauigkeit ist zuerst wichtiger."
      },
      {
       "ort": "Gespräch — Abschnitt 6",
       "zeilen": [
        {
         "wer": "Mann",
         "text": "Jetzt kommen wir zu den Staplern. Sehen Sie die gelben Linien auf dem Boden? Das sind die Fußwege. Bitte gehen Sie immer nur dort, auch wenn es manchmal ein Umweg ist."
        },
        {
         "wer": "Frau",
         "text": "Darf ich auch Stapler fahren? Ich habe einen Staplerschein."
        },
        {
         "wer": "Mann",
         "text": "Den Schein müssen wir erst prüfen, und dann gibt es noch eine Einweisung bei uns im Haus. Vorher dürfen Sie leider nicht fahren."
        }
       ],
       "satz": "Frau Petrović darf ab sofort Stapler fahren.",
       "loesung": false,
       "stelle": "Vorher dürfen Sie leider nicht fahren",
       "erklaerung": "Erst muss der Schein geprüft werden und sie braucht eine Einweisung."
      },
      {
       "ort": "Gespräch — Abschnitt 7",
       "zeilen": [
        {
         "wer": "Frau",
         "text": "Wie sind die Pausen geregelt?"
        },
        {
         "wer": "Mann",
         "text": "Sie haben insgesamt eine halbe Stunde Pause. Die meisten machen um neun Uhr eine kurze Frühstückspause und gegen halb zwölf die längere. Das sprechen wir aber im Team ab, damit nicht alle gleichzeitig weg sind. In der Kantine gibt es auch warmes Essen, für Mitarbeiter ist es deutlich günstiger."
        }
       ],
       "satz": "Die Mitarbeiter sprechen die Pausenzeiten untereinander ab.",
       "loesung": true,
       "stelle": "Das sprechen wir aber im Team ab",
       "erklaerung": "Die Pausen werden im Team abgesprochen, damit immer jemand da ist."
      },
      {
       "ort": "Gespräch — Abschnitt 8",
       "zeilen": [
        {
         "wer": "Mann",
         "text": "Noch etwas Wichtiges: Wenn Sie krank sind, rufen Sie bitte vor Schichtbeginn bei mir an, nicht erst am Vormittag. Die Nummer steht auf dem Zettel in Ihrer Mappe."
        },
        {
         "wer": "Frau",
         "text": "Und die Krankmeldung vom Arzt?"
        },
        {
         "wer": "Mann",
         "text": "Die brauchen wir ab dem dritten Tag. Die schicken Sie direkt an die Personalabteilung, nicht an mich."
        }
       ],
       "satz": "Die Krankmeldung vom Arzt soll Frau Petrović beim Schichtleiter abgeben.",
       "loesung": false,
       "stelle": "Die schicken Sie direkt an die Personalabteilung, nicht an mich",
       "erklaerung": "Anrufen soll sie beim Schichtleiter, die Krankmeldung geht aber an die Personalabteilung."
      },
      {
       "ort": "Gespräch — Abschnitt 9",
       "zeilen": [
        {
         "wer": "Frau",
         "text": "Wer ist denn mein Ansprechpartner, wenn Sie nicht da sind?"
        },
        {
         "wer": "Mann",
         "text": "In den ersten zwei Wochen arbeiten Sie immer mit Dragan zusammen. Er ist seit acht Jahren bei uns und kennt jedes Regal. Er zeigt Ihnen auch die kleinen Tricks, die in keiner Anleitung stehen. Fragen Sie ihn ruhig alles, er erklärt gern."
        }
       ],
       "satz": "Frau Petrović hat in der Anfangszeit einen erfahrenen Kollegen an ihrer Seite.",
       "loesung": true,
       "stelle": "In den ersten zwei Wochen arbeiten Sie immer mit Dragan zusammen",
       "erklaerung": "Dragan arbeitet seit acht Jahren dort und begleitet sie zwei Wochen lang."
      },
      {
       "ort": "Gespräch — Abschnitt 10",
       "zeilen": [
        {
         "wer": "Frau",
         "text": "Das ist wirklich viel auf einmal. Bekomme ich das auch irgendwo schriftlich?"
        },
        {
         "wer": "Mann",
         "text": "Ja, in Ihrer Mappe ist ein Heft mit den wichtigsten Regeln. Und am Freitag setzen wir uns noch einmal zusammen und besprechen, wie die erste Woche war. Dann können Sie auch sagen, was Ihnen noch unklar ist."
        },
        {
         "wer": "Frau",
         "text": "Prima, das beruhigt mich."
        }
       ],
       "satz": "Nach der ersten Woche gibt es ein Gespräch mit dem Schichtleiter.",
       "loesung": true,
       "stelle": "am Freitag setzen wir uns noch einmal zusammen",
       "erklaerung": "Am Freitag sprechen die beiden über die erste Woche."
      }
     ]
    },
    {
     "id": "b1bbh2s2",
     "titel": "Mitarbeitergespräch: Weiterbildung zur Pflegefachkraft",
     "aufgaben": [
      {
       "ort": "Gespräch — Abschnitt 1",
       "zeilen": [
        {
         "wer": "Frau",
         "text": "Herr Okafor, schön, dass Sie Zeit haben. Wie Sie wissen, führen wir einmal im Jahr mit allen ein Mitarbeitergespräch. Wie geht es Ihnen denn im Moment auf der Station?"
        },
        {
         "wer": "Mann",
         "text": "Ganz gut, danke. Die Arbeit macht mir immer noch Spaß, auch nach vier Jahren. Nur die vielen Wochenenddienste im Sommer waren anstrengend, weil so viele Kollegen krank waren."
        }
       ],
       "satz": "Herr Okafor ist mit seiner Arbeit unzufrieden.",
       "loesung": false,
       "stelle": "Die Arbeit macht mir immer noch Spaß",
       "erklaerung": "Nur die Wochenenddienste waren anstrengend, die Arbeit selbst macht ihm Spaß."
      },
      {
       "ort": "Gespräch — Abschnitt 2",
       "zeilen": [
        {
         "wer": "Frau",
         "text": "Das weiß ich, und dafür möchte ich mich auch bedanken. Sie haben oft spontan Dienste übernommen. Jetzt aber zur Zukunft: Sie haben mir vor ein paar Wochen geschrieben, dass Sie sich weiterbilden möchten."
        },
        {
         "wer": "Mann",
         "text": "Genau. Ich arbeite ja als Pflegehelfer. Ich würde gern die Ausbildung zur Pflegefachkraft machen. Dann hätte ich mehr Verantwortung und natürlich auch ein besseres Gehalt."
        }
       ],
       "satz": "Herr Okafor möchte eine Ausbildung zur Pflegefachkraft machen.",
       "loesung": true,
       "stelle": "Ich würde gern die Ausbildung zur Pflegefachkraft machen",
       "erklaerung": "Er ist Pflegehelfer und möchte sich zur Pflegefachkraft weiterbilden."
      },
      {
       "ort": "Gespräch — Abschnitt 3",
       "zeilen": [
        {
         "wer": "Frau",
         "text": "Das finde ich eine sehr gute Idee. Wissen Sie, wie lange die Ausbildung dauert?"
        },
        {
         "wer": "Mann",
         "text": "Normalerweise drei Jahre. Aber ich habe gelesen, dass man sie mit meiner Erfahrung vielleicht verkürzen kann."
        },
        {
         "wer": "Frau",
         "text": "Das ist möglich, aber darüber entscheidet die Pflegeschule, nicht wir. Sie müssten dort Ihre Zeugnisse und eine Bestätigung von uns einreichen."
        }
       ],
       "satz": "Ob die Ausbildung kürzer wird, entscheidet die Pflegedienstleitung.",
       "loesung": false,
       "stelle": "darüber entscheidet die Pflegeschule, nicht wir",
       "erklaerung": "Die Entscheidung trifft die Pflegeschule, nicht der Arbeitgeber."
      },
      {
       "ort": "Gespräch — Abschnitt 4",
       "zeilen": [
        {
         "wer": "Mann",
         "text": "Meine größte Sorge ist das Geld. Ich habe zwei Kinder, und als Auszubildender verdient man doch viel weniger."
        },
        {
         "wer": "Frau",
         "text": "Da kann ich Sie beruhigen. Unser Haus zahlt Mitarbeitern, die schon bei uns arbeiten, während der Ausbildung weiter ihr bisheriges Gehalt. Das ist eine Vereinbarung mit unserem Träger. Sie müssen sich nur verpflichten, danach mindestens zwei Jahre bei uns zu bleiben."
        }
       ],
       "satz": "Während der Ausbildung bekommt Herr Okafor weniger Geld als jetzt.",
       "loesung": false,
       "stelle": "während der Ausbildung weiter ihr bisheriges Gehalt",
       "erklaerung": "Er fürchtet weniger Geld, aber das Haus zahlt das bisherige Gehalt weiter."
      },
      {
       "ort": "Gespräch — Abschnitt 5",
       "zeilen": [
        {
         "wer": "Mann",
         "text": "Zwei Jahre, das ist kein Problem. Ich will sowieso nicht weg."
        },
        {
         "wer": "Frau",
         "text": "Das freut mich zu hören. Sie werden aber merken, dass die Schule anstrengend ist. Es gibt Blöcke, in denen Sie mehrere Wochen nur Unterricht haben. In dieser Zeit fehlen Sie hier auf der Station, und wir müssen das rechtzeitig im Dienstplan einplanen."
        }
       ],
       "satz": "In manchen Wochen arbeitet Herr Okafor gar nicht auf der Station.",
       "loesung": true,
       "stelle": "In dieser Zeit fehlen Sie hier auf der Station",
       "erklaerung": "In den Unterrichtsblöcken hat er mehrere Wochen nur Schule."
      },
      {
       "ort": "Gespräch — Abschnitt 6",
       "zeilen": [
        {
         "wer": "Mann",
         "text": "Ein bisschen Angst habe ich auch vor dem Lernen. Mein Deutsch ist im Alltag gut, aber die Fachsprache in den Büchern ist schwer."
        },
        {
         "wer": "Frau",
         "text": "Das geht vielen so. Die Pflegeschule bietet deshalb einen Kurs für berufsbezogenes Deutsch an, einmal pro Woche am Nachmittag. Ich würde Ihnen raten, schon vor dem Start dort mitzumachen."
        }
       ],
       "satz": "Frau Lindner empfiehlt den Deutschkurs erst nach Beginn der Ausbildung.",
       "loesung": false,
       "stelle": "schon vor dem Start dort mitzumachen",
       "erklaerung": "Sie rät ihm, schon vor der Ausbildung mit dem Kurs anzufangen."
      },
      {
       "ort": "Gespräch — Abschnitt 7",
       "zeilen": [
        {
         "wer": "Mann",
         "text": "Wann könnte ich denn anfangen?"
        },
        {
         "wer": "Frau",
         "text": "Die nächsten Kurse beginnen im April und im Oktober. Für April ist es zu spät, die Bewerbungsfrist ist schon vorbei. Aber für Oktober können Sie sich bis Ende Mai bewerben. Das ist ein realistischer Zeitplan, dann haben wir auch genug Zeit für die Planung."
        }
       ],
       "satz": "Herr Okafor kann sich noch für den Kurs im Oktober bewerben.",
       "loesung": true,
       "stelle": "für Oktober können Sie sich bis Ende Mai bewerben",
       "erklaerung": "Für April ist die Frist vorbei, für Oktober geht es noch."
      },
      {
       "ort": "Gespräch — Abschnitt 8",
       "zeilen": [
        {
         "wer": "Mann",
         "text": "Brauche ich für die Bewerbung etwas von Ihnen?"
        },
        {
         "wer": "Frau",
         "text": "Ja, ein Arbeitszeugnis und eine Bescheinigung, dass wir den praktischen Teil bei uns übernehmen. Das bereitet Frau Yilmaz aus der Personalabteilung vor. Ich sage ihr heute noch Bescheid. Sie können die Unterlagen dann in etwa zwei Wochen bei ihr abholen."
        }
       ],
       "satz": "Frau Lindner schreibt die Unterlagen für die Bewerbung selbst.",
       "loesung": false,
       "stelle": "Das bereitet Frau Yilmaz aus der Personalabteilung vor",
       "erklaerung": "Frau Lindner sagt nur Bescheid, die Unterlagen macht die Personalabteilung."
      },
      {
       "ort": "Gespräch — Abschnitt 9",
       "zeilen": [
        {
         "wer": "Frau",
         "text": "Gibt es sonst noch etwas, das Sie sich für das nächste Jahr wünschen?"
        },
        {
         "wer": "Mann",
         "text": "Ehrlich gesagt ja. Ich würde gern weniger Nachtdienste machen, wenn das möglich ist. Wegen der Kinder ist das für meine Frau schwierig."
        },
        {
         "wer": "Frau",
         "text": "Ganz darauf verzichten geht nicht, aber ich versuche, Ihnen höchstens zwei Nachtdienste im Monat zu geben."
        }
       ],
       "satz": "Frau Lindner will Herrn Okafor weniger Nachtdienste geben.",
       "loesung": true,
       "stelle": "ich versuche, Ihnen höchstens zwei Nachtdienste im Monat zu geben",
       "erklaerung": "Ganz ohne Nachtdienste geht es nicht, aber es sollen weniger werden."
      },
      {
       "ort": "Gespräch — Abschnitt 10",
       "zeilen": [
        {
         "wer": "Frau",
         "text": "Gut, dann fasse ich zusammen: Sie bewerben sich für Oktober, Frau Yilmaz bereitet die Unterlagen vor, und Sie fangen bald mit dem Deutschkurs an. In drei Monaten sprechen wir noch einmal kurz, wie weit Sie sind."
        },
        {
         "wer": "Mann",
         "text": "Vielen Dank, Frau Lindner. Ich bin richtig froh, dass das klappt."
        }
       ],
       "satz": "Die beiden wollen sich in einigen Monaten wieder treffen.",
       "loesung": true,
       "stelle": "In drei Monaten sprechen wir noch einmal kurz",
       "erklaerung": "In drei Monaten gibt es ein kurzes Gespräch über den Stand."
      }
     ]
    },
    {
     "id": "b1bbh2s3",
     "titel": "Telefonat mit einem Kunden: Reklamation einer Geschirrlieferung",
     "aufgaben": [
      {
       "ort": "Gespräch — Abschnitt 1",
       "zeilen": [
        {
         "wer": "Frau",
         "text": "Kessler Gastrobedarf, Kundenservice, Sie sprechen mit Nina Sommer. Was kann ich für Sie tun?"
        },
        {
         "wer": "Mann",
         "text": "Guten Tag, Brückner hier vom Restaurant „Zur Alten Mühle\". Ich rufe wegen einer Lieferung an, die heute Morgen gekommen ist. Ehrlich gesagt bin ich ziemlich verärgert. Das ist schon das zweite Mal in diesem Jahr, dass bei Ihnen etwas nicht stimmt."
        }
       ],
       "satz": "Herr Brückner hat zum ersten Mal ein Problem mit einer Lieferung.",
       "loesung": false,
       "stelle": "Das ist schon das zweite Mal in diesem Jahr",
       "erklaerung": "Es ist schon das zweite Problem in diesem Jahr."
      },
      {
       "ort": "Gespräch — Abschnitt 2",
       "zeilen": [
        {
         "wer": "Frau",
         "text": "Das tut mir leid. Haben Sie die Kundennummer oder die Rechnungsnummer zur Hand?"
        },
        {
         "wer": "Mann",
         "text": "Einen Moment, ja, die Kundennummer ist vier sieben null zwei acht."
        },
        {
         "wer": "Frau",
         "text": "Danke, ich habe Ihre Bestellung gefunden. Sie haben letzte Woche hundertzwanzig Teller, sechzig Suppenschalen und vierzig Weingläser bestellt. Ist das richtig?"
        },
        {
         "wer": "Mann",
         "text": "Ja, genau."
        }
       ],
       "satz": "Herr Brückner hat auch Gläser bestellt.",
       "loesung": true,
       "stelle": "und vierzig Weingläser bestellt",
       "erklaerung": "Zur Bestellung gehören vierzig Weingläser."
      },
      {
       "ort": "Gespräch — Abschnitt 3",
       "zeilen": [
        {
         "wer": "Mann",
         "text": "Das Problem ist: Von den Tellern sind mindestens fünfzehn kaputt. Der Karton war außen schon ganz nass und eingedrückt. Ich habe den Fahrer noch darauf hingewiesen, aber er hatte es sehr eilig."
        },
        {
         "wer": "Frau",
         "text": "Haben Sie den Schaden auf dem Lieferschein notiert?"
        },
        {
         "wer": "Mann",
         "text": "Ja, das habe ich gemacht, und der Fahrer hat unterschrieben."
        }
       ],
       "satz": "Der Fahrer hat den Schaden mit seiner Unterschrift bestätigt.",
       "loesung": true,
       "stelle": "und der Fahrer hat unterschrieben",
       "erklaerung": "Der Schaden steht auf dem Lieferschein, und der Fahrer hat unterschrieben."
      },
      {
       "ort": "Gespräch — Abschnitt 4",
       "zeilen": [
        {
         "wer": "Frau",
         "text": "Sehr gut, das hilft uns sehr. Könnten Sie bitte noch Fotos von den kaputten Tellern und vom Karton machen und sie mir per E-Mail schicken? Dann kann ich die Reklamation gleich an die Spedition weitergeben."
        },
        {
         "wer": "Mann",
         "text": "Fotos habe ich schon gemacht. Die schicke ich Ihnen sofort nach unserem Gespräch."
        }
       ],
       "satz": "Herr Brückner muss die Fotos erst noch machen.",
       "loesung": false,
       "stelle": "Fotos habe ich schon gemacht",
       "erklaerung": "Die Fotos hat er schon, er muss sie nur noch schicken."
      },
      {
       "ort": "Gespräch — Abschnitt 5",
       "zeilen": [
        {
         "wer": "Mann",
         "text": "Und dann gibt es noch ein zweites Problem. Bei den Suppenschalen haben Sie mir die falsche Farbe geschickt. Ich hatte Weiß bestellt, gekommen ist Grau. Das passt überhaupt nicht zu unserem anderen Geschirr."
        },
        {
         "wer": "Frau",
         "text": "Oh, das sehe ich hier auch. Im System steht tatsächlich Weiß. Da ist bei uns im Lager ein Fehler passiert."
        }
       ],
       "satz": "Der Fehler bei der Farbe ist im Lager der Firma passiert.",
       "loesung": true,
       "stelle": "Da ist bei uns im Lager ein Fehler passiert",
       "erklaerung": "Bestellt war Weiß, das Lager hat Grau geschickt."
      },
      {
       "ort": "Gespräch — Abschnitt 6",
       "zeilen": [
        {
         "wer": "Mann",
         "text": "Was passiert jetzt? Ich habe am Samstag eine Hochzeit mit neunzig Gästen. Bis dahin brauche ich das Geschirr unbedingt."
        },
        {
         "wer": "Frau",
         "text": "Ich verstehe. Die Teller haben wir auf Lager. Die weißen Schalen leider nicht, die kommen erst nächste Woche vom Hersteller. Die Teller kann ich Ihnen aber schon morgen mit unserem eigenen Fahrer schicken."
        }
       ],
       "satz": "Die weißen Suppenschalen können morgen geliefert werden.",
       "loesung": false,
       "stelle": "Die weißen Schalen leider nicht",
       "erklaerung": "Morgen kommen nur die Teller, die Schalen erst nächste Woche."
      },
      {
       "ort": "Gespräch — Abschnitt 7",
       "zeilen": [
        {
         "wer": "Mann",
         "text": "Und was mache ich am Samstag mit den Schalen?"
        },
        {
         "wer": "Frau",
         "text": "Ich schlage vor: Sie behalten die grauen Schalen erst einmal und benutzen sie für die Hochzeit. Wenn die weißen da sind, tauschen wir sie aus. Die grauen holt unser Fahrer dann wieder ab. Für Sie entstehen dabei keine Kosten."
        }
       ],
       "satz": "Herr Brückner soll die grauen Schalen sofort zurückschicken.",
       "loesung": false,
       "stelle": "Sie behalten die grauen Schalen erst einmal",
       "erklaerung": "Er darf die grauen Schalen für die Hochzeit benutzen, später werden sie getauscht."
      },
      {
       "ort": "Gespräch — Abschnitt 8",
       "zeilen": [
        {
         "wer": "Mann",
         "text": "Das ist eine faire Lösung. Und die kaputten Teller? Muss ich die zurückgeben?"
        },
        {
         "wer": "Frau",
         "text": "Nein, die können Sie entsorgen, die Fotos reichen uns. Bitte heben Sie aber den Karton noch auf, bis die Spedition sich gemeldet hat. Manchmal möchten die den Karton selbst sehen."
        }
       ],
       "satz": "Den kaputten Karton soll Herr Brückner vorerst behalten.",
       "loesung": true,
       "stelle": "Bitte heben Sie aber den Karton noch auf",
       "erklaerung": "Die Teller darf er wegwerfen, den Karton soll er noch aufheben."
      },
      {
       "ort": "Gespräch — Abschnitt 9",
       "zeilen": [
        {
         "wer": "Mann",
         "text": "In Ordnung. Ehrlich gesagt überlege ich aber, ob ich in Zukunft woanders bestelle."
        },
        {
         "wer": "Frau",
         "text": "Das kann ich verstehen. Als Entschuldigung bekommen Sie bei Ihrer nächsten Bestellung zehn Prozent Rabatt. Das habe ich gerade mit meiner Chefin abgesprochen. Es gilt für alle Artikel aus unserem Katalog, bis Ende des Jahres."
        }
       ],
       "satz": "Den Rabatt bekommt Herr Brückner nur auf Geschirr.",
       "loesung": false,
       "stelle": "Es gilt für alle Artikel aus unserem Katalog",
       "erklaerung": "Der Rabatt gilt für alle Artikel, nicht nur für Geschirr."
      },
      {
       "ort": "Gespräch — Abschnitt 10",
       "zeilen": [
        {
         "wer": "Frau",
         "text": "Sie bekommen gleich noch eine E-Mail mit allen Absprachen. Darin steht auch eine Nummer, unter der Sie mich direkt erreichen."
        },
        {
         "wer": "Mann",
         "text": "Gut. Und wann kommt der Fahrer morgen?"
        },
        {
         "wer": "Frau",
         "text": "Zwischen acht und zehn Uhr. Er ruft Sie eine halbe Stunde vorher an."
        },
        {
         "wer": "Mann",
         "text": "Danke, Frau Sommer, Sie haben mir sehr geholfen."
        }
       ],
       "satz": "Der Fahrer meldet sich vor der Lieferung telefonisch.",
       "loesung": true,
       "stelle": "Er ruft Sie eine halbe Stunde vorher an",
       "erklaerung": "Der Fahrer ruft eine halbe Stunde vor der Lieferung an."
      }
     ]
    }
   ]
  },
  {
   "nr": 3,
   "art": "durchsage",
   "name": "Hörverstehen: Ansagen und Anrufbeantworter",
   "kurz": "Fünf kurze Texte — zweimal hören",
   "was": "Fünf kurze Texte aus dem Arbeitsalltag: Anrufbeantworter, Durchsagen im Betrieb, Mitteilungen. Zu jedem eine Aussage: richtig oder falsch?",
   "tipp": "Ein Detail entscheidet: Termin, Durchwahl, Raum, Uhrzeit.",
   "zeichen": "📞",
   "farbe": "rot",
   "punkte": 5,
   "mal": 2,
   "runden": [
    {
     "id": "b1bbh3s1",
     "titel": "Fünf kurze Texte",
     "aufgaben": [
      {
       "von": "Anrufbeantworter einer Druckerei",
       "wer": "Frau",
       "text": "Guten Tag, Sie sind verbunden mit der Druckerei Wendland. Leider rufen Sie außerhalb unserer Geschäftszeiten an. Sie erreichen uns montags bis donnerstags von acht bis siebzehn Uhr, freitags allerdings nur bis vierzehn Uhr. Druckaufträge können Sie jederzeit per E-Mail schicken. Wir melden uns dann am nächsten Werktag bei Ihnen.",
       "satz": "Am Freitag ist die Druckerei bis siebzehn Uhr erreichbar.",
       "loesung": false,
       "stelle": "freitags allerdings nur bis vierzehn Uhr",
       "erklaerung": "„allerdings\" schränkt ein: Freitags endet der Telefondienst schon um vierzehn Uhr."
      },
      {
       "von": "Nachricht eines Kunden",
       "wer": "Mann",
       "text": "Ja, guten Tag, hier spricht Herr Albers von der Firma Kranich Bau. Es geht um unsere Bestellung von letzter Woche, die Arbeitshandschuhe und die Helme. Die Helme sind heute angekommen, die Handschuhe aber leider nicht. Könnten Sie bitte nachsehen, wo die Lieferung bleibt? Sie erreichen mich unter null sieben eins eins, drei vier fünf sechs acht. Vielen Dank.",
       "satz": "Herr Albers hat die Handschuhe noch nicht bekommen.",
       "loesung": true,
       "stelle": "die Handschuhe aber leider nicht",
       "erklaerung": "Angekommen sind nur die Helme. Die Handschuhe fehlen noch."
      },
      {
       "von": "Lautsprecherdurchsage im Betrieb",
       "wer": "Frau",
       "text": "Achtung, eine Durchsage für alle Mitarbeiter in Halle drei. Wegen einer Wartung an der Lüftung wird die Halle heute ab dreizehn Uhr für etwa zwei Stunden gesperrt. Bitte beenden Sie Ihre Arbeiten bis dahin und gehen Sie in den Pausenraum im Erdgeschoss. Ihr Schichtleiter informiert Sie, wann es weitergeht.",
       "satz": "Die Mitarbeiter aus Halle drei sollen während der Wartung nach Hause gehen.",
       "loesung": false,
       "stelle": "gehen Sie in den Pausenraum im Erdgeschoss",
       "erklaerung": "Sie sollen im Pausenraum warten, bis der Schichtleiter Bescheid gibt."
      },
      {
       "von": "Mitteilung der Geschäftsführung",
       "wer": "Mann",
       "text": "Liebe Kollegen, ich möchte Sie über eine wichtige Änderung informieren. Ab dem ersten März gibt es bei uns eine neue Gleitzeitregelung. Sie können dann zwischen sieben und neun Uhr mit der Arbeit beginnen. Die Kernzeit von neun bis fünfzehn Uhr bleibt aber bestehen. Genauere Informationen bekommen Sie in den nächsten Tagen von der Personalabteilung.",
       "satz": "Mit der neuen Regelung muss man nicht mehr bis fünfzehn Uhr im Betrieb sein.",
       "loesung": false,
       "stelle": "Die Kernzeit von neun bis fünfzehn Uhr bleibt aber bestehen.",
       "erklaerung": "Flexibel ist nur der Beginn. Die Kernzeit bis fünfzehn Uhr gilt weiter."
      },
      {
       "von": "Ansage im Lager",
       "wer": "Mann",
       "text": "Achtung im Lager, eine Information für die Kommissionierer. Die Tour nach Rosenfeld muss heute schon um elf Uhr dreißig verladen werden, nicht wie sonst um vierzehn Uhr. Bitte bearbeiten Sie die Aufträge für Rosenfeld deshalb zuerst. Die Paletten stellen Sie an Tor vier bereit.",
       "satz": "Die Waren für Rosenfeld werden heute früher verladen als sonst.",
       "loesung": true,
       "stelle": "schon um elf Uhr dreißig verladen werden",
       "erklaerung": "Elf Uhr dreißig statt vierzehn Uhr: Das ist früher als normal."
      }
     ]
    },
    {
     "id": "b1bbh3s2",
     "titel": "Fünf kurze Texte",
     "aufgaben": [
      {
       "von": "Anrufbeantworter einer Autowerkstatt",
       "wer": "Mann",
       "text": "Herzlich willkommen bei der Autowerkstatt Brinkmann. Vom vierundzwanzigsten Dezember bis zum ersten Januar haben wir Betriebsferien. Bei Pannen und in Notfällen erreichen Sie unseren Abschleppdienst rund um die Uhr unter null eins sieben null, zwei zwei acht acht null. Termine für den Reifenwechsel können Sie gern auf unserer Internetseite buchen.",
       "satz": "Die Werkstatt hat zwischen Weihnachten und Neujahr geschlossen.",
       "loesung": true,
       "stelle": "haben wir Betriebsferien",
       "erklaerung": "Betriebsferien heißt: Die Werkstatt ist zu. Nur der Abschleppdienst arbeitet."
      },
      {
       "von": "Nachricht einer Kundin",
       "wer": "Frau",
       "text": "Guten Morgen, hier ist Martina Vogt vom Restaurant Seeblick. Wir haben für Donnerstag dreißig Kilo Kartoffeln und zehn Kilo Zwiebeln bei Ihnen bestellt. Bitte liefern Sie die Kartoffeln wie geplant, aber die Zwiebeln brauchen wir erst am Samstag. Rufen Sie mich bitte kurz zurück, ob das klappt.",
       "satz": "Frau Vogt möchte die ganze Bestellung erst am Samstag bekommen.",
       "loesung": false,
       "stelle": "die Zwiebeln brauchen wir erst am Samstag",
       "erklaerung": "Nur die Zwiebeln sollen später kommen, die Kartoffeln wie geplant am Donnerstag."
      },
      {
       "von": "Lautsprecherdurchsage im Betrieb",
       "wer": "Frau",
       "text": "Eine Information für alle Mitarbeiter: Die Kantine bleibt heute wegen eines Wasserschadens geschlossen. Als Ersatz steht ab zwölf Uhr ein Imbisswagen auf dem Parkplatz vor dem Haupteingang. Das Essen bezahlen Sie dort wie gewohnt mit Ihrem Mitarbeiterausweis.",
       "satz": "Die Mitarbeiter können heute auf dem Parkplatz Essen bekommen.",
       "loesung": true,
       "stelle": "ein Imbisswagen auf dem Parkplatz vor dem Haupteingang",
       "erklaerung": "Die Kantine ist zu, aber der Imbisswagen auf dem Parkplatz ersetzt sie."
      },
      {
       "von": "Mitteilung der Geschäftsführung",
       "wer": "Frau",
       "text": "Liebe Kollegen, wie Sie wissen, war das letzte Jahr für unser Unternehmen sehr erfolgreich. Als Dank erhalten alle Mitarbeiter mit dem Novembergehalt eine Prämie von fünfhundert Euro. Auszubildende bekommen die Hälfte. Außerdem laden wir Sie alle am zwölften Dezember herzlich zur Weihnachtsfeier ein.",
       "satz": "Auszubildende bekommen eine Prämie von zweihundertfünfzig Euro.",
       "loesung": true,
       "stelle": "Auszubildende bekommen die Hälfte.",
       "erklaerung": "Die Hälfte von fünfhundert Euro sind zweihundertfünfzig Euro. Die Zahl selbst fällt nicht."
      },
      {
       "von": "Ansage im Lager",
       "wer": "Mann",
       "text": "Achtung, an alle Staplerfahrer. Im Gang sieben ist Öl ausgelaufen, der Boden ist sehr rutschig. Der Gang ist ab sofort gesperrt, bis die Reinigung fertig ist. Bitte fahren Sie über Gang acht. Fußgänger dürfen den Bereich ebenfalls nicht betreten.",
       "satz": "Fußgänger dürfen weiterhin durch Gang sieben gehen.",
       "loesung": false,
       "stelle": "Fußgänger dürfen den Bereich ebenfalls nicht betreten.",
       "erklaerung": "„ebenfalls nicht\": Die Sperre gilt für Stapler und Fußgänger."
      }
     ]
    },
    {
     "id": "b1bbh3s3",
     "titel": "Fünf kurze Texte",
     "aufgaben": [
      {
       "von": "Anrufbeantworter einer Personalabteilung",
       "wer": "Frau",
       "text": "Sie sind verbunden mit der Personalabteilung der Firma Kessler Logistik. Im Moment sind leider alle Kollegen im Gespräch. Wenn Sie Fragen zu Ihrer Lohnabrechnung haben, drücken Sie bitte die Eins. Bei Fragen zu Urlaub oder Krankmeldungen drücken Sie die Zwei. Für alle anderen Anliegen bleiben Sie bitte in der Leitung.",
       "satz": "Bei Fragen zur Krankmeldung muss man die Eins drücken.",
       "loesung": false,
       "stelle": "Bei Fragen zu Urlaub oder Krankmeldungen drücken Sie die Zwei.",
       "erklaerung": "Die Eins ist für die Lohnabrechnung. Für Krankmeldungen gilt die Zwei."
      },
      {
       "von": "Nachricht eines Kunden",
       "wer": "Mann",
       "text": "Hallo Frau Petersen, hier ist Herr Okafor von der Praxis Sonnenhof. Unser Drucker am Empfang funktioniert schon wieder nicht. Ihr Techniker war ja erst am Montag hier. Diesmal brauchen wir aber keinen Besuch, ich glaube, man kann das Problem auch am Telefon lösen. Bitte rufen Sie mich heute vor fünfzehn Uhr zurück.",
       "satz": "Herr Okafor möchte, dass der Techniker noch einmal vorbeikommt.",
       "loesung": false,
       "stelle": "Diesmal brauchen wir aber keinen Besuch",
       "erklaerung": "Er möchte einen Rückruf, keinen Besuch. Der Techniker war am Montag schon da."
      },
      {
       "von": "Lautsprecherdurchsage im Betrieb",
       "wer": "Frau",
       "text": "Achtung, eine Information für alle Mitarbeiter. Heute um zehn Uhr fünfzehn findet eine Übung für den Brandschutz statt. Wenn der Alarm ertönt, verlassen Sie bitte sofort das Gebäude über die Treppen, nicht mit dem Aufzug. Unser Sammelplatz ist wie immer der Parkplatz hinter der Kantine.",
       "satz": "Bei der Übung soll man das Gebäude über die Treppe verlassen.",
       "loesung": true,
       "stelle": "über die Treppen, nicht mit dem Aufzug",
       "erklaerung": "Bei Alarm benutzt man die Treppen, den Aufzug nicht."
      },
      {
       "von": "Mitteilung der Geschäftsführung",
       "wer": "Mann",
       "text": "Liebe Kollegen, ab nächstem Monat stellen wir unsere Zeiterfassung um. Statt der alten Stempelkarten nutzen Sie dann eine App auf dem Handy oder das Gerät am Eingang. Wer kein Diensthandy hat, muss die App nicht privat installieren. Eine Schulung dazu findet am kommenden Mittwoch in der Kantine statt.",
       "satz": "Alle Mitarbeiter müssen die App auf ihrem privaten Handy installieren.",
       "loesung": false,
       "stelle": "muss die App nicht privat installieren",
       "erklaerung": "Ohne Diensthandy nutzt man das Gerät am Eingang. Privat installieren muss niemand."
      },
      {
       "von": "Ansage im Lager",
       "wer": "Frau",
       "text": "Eine Information an das Team im Wareneingang. Der Lastwagen mit der Lieferung aus Polen kommt heute nicht am Vormittag, sondern voraussichtlich erst gegen sechzehn Uhr. Zwei Kollegen aus der Frühschicht werden deshalb gebeten, eine Stunde länger zu bleiben. Bitte melden Sie sich bei Herrn Demir.",
       "satz": "Die Lieferung aus Polen kommt später als geplant.",
       "loesung": true,
       "stelle": "voraussichtlich erst gegen sechzehn Uhr",
       "erklaerung": "„nicht am Vormittag, sondern erst gegen sechzehn Uhr\": Sie kommt später."
      }
     ]
    }
   ]
  }
 ],
 "laeufe": [
  {
   "id": "tb1bhl1",
   "titel": "Prüfungslauf 1",
   "minuten": 30,
   "teile": [
    {
     "nr": 1,
     "art": "diskussion",
     "aufgaben": [
      {
       "von": "Person 1 — Marco, 39",
       "wer": "Mann",
       "text": "Ich fahre jeden Tag eine Stunde mit dem Zug zur Arbeit, hin und zurück also zwei Stunden. Viele finden das verrückt. Aber im Zug lese ich, beantworte schon die ersten E-Mails oder schlafe einfach. Mit dem Auto wäre das verlorene Zeit, im Zug ist es für mich fast Freizeit.",
       "satz": "Marco empfindet die Fahrt im Zug als verlorene Zeit.",
       "loesung": false,
       "stelle": "im Zug ist es für mich fast Freizeit",
       "erklaerung": "„Verlorene Zeit\" sagt er über das Auto. Den Zug nutzt er sinnvoll."
      },
      {
       "von": "Person 2 — Sandra, 45",
       "wer": "Frau",
       "text": "Wir sind vor zwei Jahren aufs Land gezogen, weil die Mieten in der Stadt zu hoch waren. Jetzt fahre ich jeden Tag fünfzig Kilometer mit dem Auto. Was wir an Miete sparen, gebe ich fast komplett für Benzin aus. Und im Winter stehe ich oft im Stau. Wenn ich das vorher gewusst hätte, wären wir wohl in der Stadt geblieben.",
       "satz": "Durch den Umzug spart Sandra kaum Geld.",
       "loesung": true,
       "stelle": "gebe ich fast komplett für Benzin aus",
       "erklaerung": "Die gesparte Miete geht fast ganz für Benzin weg."
      },
      {
       "von": "Person 3 — Kemal, 28",
       "wer": "Mann",
       "text": "Ich fahre mit dem Fahrrad zur Arbeit, zwölf Kilometer pro Strecke. Bei Regen ist das natürlich kein Spaß, das gebe ich zu. Aber meine Firma hat Duschen und einen Fahrradkeller, und ich spare mir das Fitnessstudio. Nur wenn es glatt ist, nehme ich den Bus.",
       "satz": "Kemal fährt bei jedem Wetter mit dem Fahrrad.",
       "loesung": false,
       "stelle": "Nur wenn es glatt ist, nehme ich den Bus.",
       "erklaerung": "Bei Regen fährt er noch, aber bei Glätte nimmt er den Bus."
      },
      {
       "von": "Person 4 — Birgit, 51",
       "wer": "Frau",
       "text": "Seit es das günstige Monatsticket gibt, fahre ich mit Bus und Bahn. Leider sind die Verbindungen bei uns auf dem Land schlecht. Ich muss zweimal umsteigen, und wenn ein Bus zu spät ist, verpasse ich den Anschluss. Dann komme ich eine halbe Stunde zu spät ins Büro. Zum Glück hat meine Chefin dafür Verständnis.",
       "satz": "Birgit hat wegen ihrer Verspätungen Ärger mit ihrer Chefin.",
       "loesung": false,
       "stelle": "Zum Glück hat meine Chefin dafür Verständnis.",
       "erklaerung": "Sie kommt manchmal zu spät, aber die Chefin versteht das."
      },
      {
       "von": "Person 5 — Thomas, 34",
       "wer": "Mann",
       "text": "Ich arbeite drei Tage im Büro und zwei Tage zu Hause. Für mich ist das die perfekte Mischung. Die lange Fahrt mache ich nur noch dreimal pro Woche, und an den anderen Tagen habe ich morgens Zeit, meine Tochter in den Kindergarten zu bringen. Ohne diese Regel hätte ich mir wahrscheinlich schon eine neue Stelle in der Nähe gesucht.",
       "satz": "Thomas ist mit seiner Arbeitsregelung zufrieden.",
       "loesung": true,
       "stelle": "Für mich ist das die perfekte Mischung.",
       "erklaerung": "Die Mischung aus Büro und zu Hause findet er perfekt."
      }
     ]
    },
    {
     "nr": 2,
     "art": "gespraech",
     "aufgaben": [
      {
       "ort": "Gespräch — Abschnitt 1",
       "zeilen": [
        {
         "wer": "Mann",
         "text": "So, Frau Demir, Sie haben ja die Urlaubswünsche vom ganzen Team gesammelt. Danke dafür. Wir müssen den Plan bis Ende Januar fertig haben, sonst gibt es wieder Streit wie letztes Jahr."
        },
        {
         "wer": "Frau",
         "text": "Ja, ich habe alle Zettel hier. Fast alle haben ihre Wünsche abgegeben, nur Herr Krause fehlt noch. Er ist diese Woche auf einer Fortbildung."
        }
       ],
       "satz": "Alle Mitarbeiter haben ihre Urlaubswünsche schon abgegeben.",
       "loesung": false,
       "stelle": "nur Herr Krause fehlt noch",
       "erklaerung": "Fast alle haben abgegeben, aber Herr Krause fehlt noch."
      },
      {
       "ort": "Gespräch — Abschnitt 2",
       "zeilen": [
        {
         "wer": "Mann",
         "text": "Gut, den rufe ich morgen an. Wie sieht es mit den Sommerferien aus?"
        },
        {
         "wer": "Frau",
         "text": "Da wird es schwierig. Vier Kollegen mit Schulkindern wollen alle in den ersten drei Ferienwochen weg. Wir sind aber nur sieben Leute im Team. Wenn vier gleichzeitig fehlen, schaffen wir die Arbeit nicht."
        }
       ],
       "satz": "Mehr als die Hälfte des Teams möchte zur gleichen Zeit Urlaub machen.",
       "loesung": true,
       "stelle": "Vier Kollegen mit Schulkindern wollen alle in den ersten drei Ferienwochen weg",
       "erklaerung": "Vier von sieben Leuten wollen gleichzeitig weg — das ist mehr als die Hälfte."
      },
      {
       "ort": "Gespräch — Abschnitt 3",
       "zeilen": [
        {
         "wer": "Mann",
         "text": "Wie viele Leute müssen mindestens da sein?"
        },
        {
         "wer": "Frau",
         "text": "Wir hatten doch vereinbart: immer mindestens vier. Einer am Telefon, einer für die Notfälle bei den Mietern und zwei für die Abrechnungen."
        },
        {
         "wer": "Mann",
         "text": "Richtig. Und im Sommer kommen ja auch noch die Nebenkostenabrechnungen dazu. Da können wir auf keinen Fall weniger sein."
        }
       ],
       "satz": "Im Büro sollen immer mindestens vier Personen arbeiten.",
       "loesung": true,
       "stelle": "Wir hatten doch vereinbart: immer mindestens vier",
       "erklaerung": "Das Team hat vereinbart, dass immer mindestens vier Leute da sind."
      },
      {
       "ort": "Gespräch — Abschnitt 4",
       "zeilen": [
        {
         "wer": "Frau",
         "text": "Ich habe schon mit zwei Kolleginnen gesprochen. Frau Berger würde ihren Urlaub um zwei Wochen nach hinten schieben, weil ihre Tochter sowieso später Ferien hat. Die Tochter geht nämlich in einem anderen Bundesland zur Schule."
        },
        {
         "wer": "Mann",
         "text": "Ach so, das wusste ich gar nicht. Das ist natürlich praktisch für uns."
        }
       ],
       "satz": "Frau Berger möchte ihren Urlaub früher nehmen.",
       "loesung": false,
       "stelle": "würde ihren Urlaub um zwei Wochen nach hinten schieben",
       "erklaerung": "Nach hinten schieben heißt: Sie nimmt den Urlaub später, nicht früher."
      },
      {
       "ort": "Gespräch — Abschnitt 5",
       "zeilen": [
        {
         "wer": "Mann",
         "text": "Und die anderen drei?"
        },
        {
         "wer": "Frau",
         "text": "Herr Novak hat gesagt, dass er dieses Jahr auf die Ferien verzichtet, weil er letztes Jahr dran war. Er fährt stattdessen im September. Dann bleiben noch zwei, und das geht genau auf."
        },
        {
         "wer": "Mann",
         "text": "Wunderbar. Ich finde es gut, wenn die Leute das untereinander klären und ich nicht entscheiden muss."
        }
       ],
       "satz": "Herr Novak nimmt seinen Urlaub in diesem Jahr nach den Sommerferien.",
       "loesung": true,
       "stelle": "Er fährt stattdessen im September",
       "erklaerung": "Er verzichtet auf die Ferienzeit und fährt erst im September."
      },
      {
       "ort": "Gespräch — Abschnitt 6",
       "zeilen": [
        {
         "wer": "Frau",
         "text": "Dann gibt es noch die Zeit zwischen Weihnachten und Neujahr. Da möchten natürlich fast alle frei haben."
        },
        {
         "wer": "Mann",
         "text": "Darüber habe ich schon mit der Geschäftsführung gesprochen. Das Büro bleibt in diesen Tagen geschlossen. Nur der Notdienst für die Mieter muss erreichbar sein, und das machen wir abwechselnd von zu Hause aus."
        }
       ],
       "satz": "Zwischen Weihnachten und Neujahr ist das Büro normal geöffnet.",
       "loesung": false,
       "stelle": "Das Büro bleibt in diesen Tagen geschlossen",
       "erklaerung": "Das Büro ist geschlossen, nur ein Notdienst ist von zu Hause erreichbar."
      },
      {
       "ort": "Gespräch — Abschnitt 7",
       "zeilen": [
        {
         "wer": "Frau",
         "text": "Müssen die Kollegen für diese Tage Urlaub nehmen?"
        },
        {
         "wer": "Mann",
         "text": "Ja, leider. Drei Tage gehen vom normalen Urlaub ab. Aber die Firma schenkt allen den Silvestertag dazu. Das steht so in der neuen Betriebsvereinbarung."
        },
        {
         "wer": "Frau",
         "text": "Das wird nicht allen gefallen, aber ich glaube, die meisten sind trotzdem zufrieden."
        }
       ],
       "satz": "Für die geschlossenen Tage müssen die Mitarbeiter keinen Urlaub nehmen.",
       "loesung": false,
       "stelle": "Drei Tage gehen vom normalen Urlaub ab",
       "erklaerung": "Nur der Silvestertag ist geschenkt, drei Tage kosten normalen Urlaub."
      },
      {
       "ort": "Gespräch — Abschnitt 8",
       "zeilen": [
        {
         "wer": "Mann",
         "text": "Was ist mit den Brückentagen, zum Beispiel nach Himmelfahrt?"
        },
        {
         "wer": "Frau",
         "text": "Da gab es letztes Jahr Ärger, weil immer dieselben Leute frei hatten. Mein Vorschlag wäre: Wer letztes Jahr einen Brückentag hatte, steht dieses Jahr hinten an."
        },
        {
         "wer": "Mann",
         "text": "Das klingt gerecht. Schreiben Sie das bitte so in die Liste, dann hänge ich sie in der Küche auf."
        }
       ],
       "satz": "Der Teamleiter ist mit dem Vorschlag zu den Brückentagen einverstanden.",
       "loesung": true,
       "stelle": "Das klingt gerecht. Schreiben Sie das bitte so in die Liste",
       "erklaerung": "Er findet den Vorschlag gerecht und will ihn aufhängen."
      },
      {
       "ort": "Gespräch — Abschnitt 9",
       "zeilen": [
        {
         "wer": "Frau",
         "text": "Noch eine Frage: Einige Kollegen haben noch Resturlaub vom letzten Jahr. Verfällt der?"
        },
        {
         "wer": "Mann",
         "text": "Nach dem Gesetz muss er bis Ende März genommen werden. Ich möchte aber nicht, dass das alle gleichzeitig im März machen. Bitte sagen Sie den Betroffenen, dass sie ihre Tage auf Januar, Februar und März verteilen sollen."
        }
       ],
       "satz": "Den Resturlaub sollen alle Betroffenen im März nehmen.",
       "loesung": false,
       "stelle": "Ich möchte aber nicht, dass das alle gleichzeitig im März machen",
       "erklaerung": "März ist nur die Frist — die Tage sollen auf drei Monate verteilt werden."
      },
      {
       "ort": "Gespräch — Abschnitt 10",
       "zeilen": [
        {
         "wer": "Mann",
         "text": "Gut, dann machen wir es so: Sie schicken mir den Entwurf bis Freitag, ich prüfe ihn am Wochenende, und am Montag stellen wir ihn im Team vor."
        },
        {
         "wer": "Frau",
         "text": "Einverstanden. Und wenn dann noch jemand etwas ändern will?"
        },
        {
         "wer": "Mann",
         "text": "Dann hat er dafür noch eine Woche Zeit. Danach ist der Plan verbindlich."
        }
       ],
       "satz": "Nach der Vorstellung im Team kann man den Plan noch kurz ändern.",
       "loesung": true,
       "stelle": "Dann hat er dafür noch eine Woche Zeit",
       "erklaerung": "Eine Woche lang sind Änderungen noch möglich, dann gilt der Plan."
      }
     ]
    },
    {
     "nr": 3,
     "art": "durchsage",
     "aufgaben": [
      {
       "von": "Anrufbeantworter einer Reinigungsfirma",
       "wer": "Frau",
       "text": "Guten Tag, hier ist der Kundenservice von Glanzwerk Gebäudereinigung. Wir sind umgezogen! Unsere neue Adresse lautet Industriestraße vierzehn. Die Telefonnummer bleibt gleich. Sie erreichen uns von Montag bis Donnerstag von sieben bis sechzehn Uhr. Bitte hinterlassen Sie nach dem Signalton Ihren Namen und Ihre Nummer.",
       "satz": "Die Firma hat eine neue Telefonnummer.",
       "loesung": false,
       "stelle": "Die Telefonnummer bleibt gleich.",
       "erklaerung": "Neu ist nur die Adresse. Die Telefonnummer ändert sich nicht."
      },
      {
       "von": "Nachricht einer Kundin",
       "wer": "Frau",
       "text": "Guten Tag, hier spricht Frau Heinemann vom Seniorenheim Am Park. Wir haben bei Ihnen für Freitag das Essen für unser Sommerfest bestellt, für achtzig Personen. Leider, oder besser gesagt zum Glück, haben sich noch zwanzig Gäste mehr angemeldet. Ist es möglich, die Bestellung auf hundert Personen zu erhöhen? Ich bin bis siebzehn Uhr im Büro.",
       "satz": "Frau Heinemann möchte Essen für mehr Personen bestellen.",
       "loesung": true,
       "stelle": "die Bestellung auf hundert Personen zu erhöhen",
       "erklaerung": "Statt achtzig sollen es jetzt hundert Personen sein."
      },
      {
       "von": "Lautsprecherdurchsage im Kaufhaus",
       "wer": "Mann",
       "text": "Eine Durchsage für das Verkaufspersonal: Wegen einer Störung funktionieren die Kartenzahlungen an den Kassen eins bis vier im Moment nicht. Bitte schicken Sie Kunden, die mit Karte zahlen möchten, an die Kassen fünf und sechs im Erdgeschoss. Barzahlung ist an allen Kassen möglich.",
       "satz": "An Kasse zwei kann man im Moment nur bar bezahlen.",
       "loesung": true,
       "stelle": "an den Kassen eins bis vier im Moment nicht",
       "erklaerung": "Kasse zwei gehört zu den Kassen eins bis vier. Dort geht nur Barzahlung."
      },
      {
       "von": "Mitteilung der Geschäftsführung",
       "wer": "Frau",
       "text": "Liebe Kollegen, wir haben eine erfreuliche Nachricht. Unsere Firma eröffnet im Frühjahr einen zweiten Standort in Neustadt. Dafür suchen wir zuerst im eigenen Haus nach Mitarbeitern. Wer Interesse hat, dort zu arbeiten, meldet sich bitte bis Ende Januar bei seiner Abteilungsleitung. Niemand wird gegen seinen Willen versetzt.",
       "satz": "Einige Mitarbeiter müssen an den neuen Standort wechseln.",
       "loesung": false,
       "stelle": "Niemand wird gegen seinen Willen versetzt.",
       "erklaerung": "Der Wechsel ist freiwillig. Nur wer Interesse hat, meldet sich."
      },
      {
       "von": "Ansage im Lager",
       "wer": "Mann",
       "text": "Achtung, Kollegen aus der Spätschicht. Die Inventur beginnt am Samstag nicht um sechs Uhr, sondern schon um fünf Uhr. Frühstück gibt es um neun Uhr im Pausenraum, das bezahlt die Firma. Bitte tragen Sie sich bis Donnerstag in die Liste am Schwarzen Brett ein.",
       "satz": "Die Inventur beginnt früher als ursprünglich geplant.",
       "loesung": true,
       "stelle": "sondern schon um fünf Uhr",
       "erklaerung": "Fünf statt sechs Uhr: Der Beginn ist eine Stunde früher."
      }
     ]
    }
   ]
  },
  {
   "id": "tb1bhl2",
   "titel": "Prüfungslauf 2",
   "minuten": 30,
   "teile": [
    {
     "nr": 1,
     "art": "diskussion",
     "aufgaben": [
      {
       "von": "Person 1 — Irina, 37",
       "wer": "Frau",
       "text": "Bei uns im Hotel ist die Arbeit stressig, besonders in der Hauptsaison. Aber das Team hält zusammen. Wenn an der Rezeption viel los ist, kommt jemand aus dem Service und hilft. Und einmal im Monat kocht der Chef für alle. Deshalb bleibe ich hier, obwohl ich woanders mehr verdienen könnte.",
       "satz": "Irina will die Stelle wechseln, weil sie zu wenig verdient.",
       "loesung": false,
       "stelle": "Deshalb bleibe ich hier",
       "erklaerung": "Woanders könnte sie mehr verdienen, aber wegen des Teams bleibt sie."
      },
      {
       "von": "Person 2 — Dennis, 30",
       "wer": "Mann",
       "text": "Mit den Kollegen in der Montage verstehe ich mich super, wir gehen sogar zusammen zum Fußball. Das Problem ist der neue Abteilungsleiter. Er spricht nur mit uns, wenn etwas schiefgeht, ein Lob hört man nie. Seitdem ist die Stimmung in der Halle deutlich schlechter geworden.",
       "satz": "Dennis ist mit seinem Vorgesetzten unzufrieden.",
       "loesung": true,
       "stelle": "ein Lob hört man nie",
       "erklaerung": "Mit den Kollegen ist alles gut, das Problem ist der neue Abteilungsleiter."
      },
      {
       "von": "Person 3 — Heike, 56",
       "wer": "Frau",
       "text": "Früher gab es bei uns in der Verwaltung viel Klatsch und Tratsch, jeder hat über jeden geredet. Dann hat der Betriebsrat ein Teamtraining organisiert, in dem wir offen über die Probleme gesprochen haben. Ich war skeptisch, aber danach ist wirklich etwas besser geworden. Heute sagen die Leute eher direkt, was sie stört.",
       "satz": "Nach dem Teamtraining hat sich die Stimmung verbessert.",
       "loesung": true,
       "stelle": "danach ist wirklich etwas besser geworden",
       "erklaerung": "„Ich war skeptisch, aber\": Das Training hat trotzdem geholfen."
      },
      {
       "von": "Person 4 — Pawel, 41",
       "wer": "Mann",
       "text": "In unserer Spedition arbeiten Leute aus zwölf Ländern. Da gibt es natürlich manchmal Missverständnisse. Aber wir haben eine Regel: Bei der Arbeit sprechen alle Deutsch, auch in der Pause. So fühlt sich niemand ausgeschlossen, und mein Deutsch ist dadurch viel besser geworden.",
       "satz": "In Pawels Firma darf in der Pause jeder seine eigene Sprache sprechen.",
       "loesung": false,
       "stelle": "Bei der Arbeit sprechen alle Deutsch, auch in der Pause.",
       "erklaerung": "„auch in der Pause\": Die Regel gilt den ganzen Tag."
      },
      {
       "von": "Person 5 — Sophie, 25",
       "wer": "Frau",
       "text": "Ich habe vor drei Monaten in einem Friseursalon angefangen. Am ersten Tag hatte ich richtig Angst, weil ich niemanden kannte. Aber meine Chefin hat mir eine erfahrene Kollegin zur Seite gestellt, die mir alles gezeigt hat. Ich habe mich sofort willkommen gefühlt.",
       "satz": "Sophie wurde an ihrem neuen Arbeitsplatz gut aufgenommen.",
       "loesung": true,
       "stelle": "Ich habe mich sofort willkommen gefühlt.",
       "erklaerung": "Die Angst hatte sie nur vorher. Durch die Kollegin hat sie sich sofort wohlgefühlt."
      }
     ]
    },
    {
     "nr": 2,
     "art": "gespraech",
     "aufgaben": [
      {
       "ort": "Gespräch — Abschnitt 1",
       "zeilen": [
        {
         "wer": "Frau",
         "text": "Hallo, Herr Lange, kommen Sie rein. Sie wollten mit dem Betriebsrat sprechen?"
        },
        {
         "wer": "Mann",
         "text": "Ja, danke, dass Sie so schnell Zeit haben, Frau Kaya. Es geht um die neuen Schichtzeiten. Ich spreche nicht nur für mich, sondern auch für einige Kollegen aus der Verpackung. Wir haben letzte Woche den Aushang gesehen und waren alle ziemlich überrascht."
        }
       ],
       "satz": "Herr Lange kommt nur wegen seiner eigenen Situation.",
       "loesung": false,
       "stelle": "Ich spreche nicht nur für mich",
       "erklaerung": "Er spricht auch für Kollegen aus der Verpackung."
      },
      {
       "ort": "Gespräch — Abschnitt 2",
       "zeilen": [
        {
         "wer": "Frau",
         "text": "Was genau ist das Problem?"
        },
        {
         "wer": "Mann",
         "text": "Bisher beginnt die Frühschicht um sechs Uhr. Ab März soll sie schon um fünf Uhr dreißig anfangen. Für viele von uns ist das eine Katastrophe, weil um diese Zeit noch kein Bus fährt. Der erste Bus kommt erst um fünf Uhr vierzig an."
        }
       ],
       "satz": "Mit dem Bus kann man die neue Frühschicht nicht pünktlich erreichen.",
       "loesung": true,
       "stelle": "weil um diese Zeit noch kein Bus fährt",
       "erklaerung": "Der erste Bus kommt erst zehn Minuten nach dem neuen Schichtbeginn."
      },
      {
       "ort": "Gespräch — Abschnitt 3",
       "zeilen": [
        {
         "wer": "Frau",
         "text": "Das ist ein wichtiger Punkt. Ich muss Ihnen aber etwas sagen: Die Geschäftsführung darf die Schichtzeiten nicht einfach allein ändern. Dafür braucht sie die Zustimmung des Betriebsrats. Und die haben wir noch nicht gegeben."
        },
        {
         "wer": "Mann",
         "text": "Wirklich? Auf dem Aushang klang das, als wäre schon alles entschieden."
        }
       ],
       "satz": "Der Betriebsrat hat den neuen Schichtzeiten schon zugestimmt.",
       "loesung": false,
       "stelle": "Und die haben wir noch nicht gegeben",
       "erklaerung": "Ohne Zustimmung des Betriebsrats geht es nicht, und die fehlt noch."
      },
      {
       "ort": "Gespräch — Abschnitt 4",
       "zeilen": [
        {
         "wer": "Frau",
         "text": "Der Aushang war ein Fehler, das habe ich der Personalleitung auch schon gesagt. Es ist bisher nur ein Vorschlag. Die Firma möchte früher anfangen, weil ein großer Kunde seine Waren jetzt schon morgens um acht Uhr abholen will."
        },
        {
         "wer": "Mann",
         "text": "Das verstehe ich ja. Aber man hätte doch vorher mit uns reden können."
        }
       ],
       "satz": "Der Grund für die Änderung ist der Wunsch eines Kunden.",
       "loesung": true,
       "stelle": "ein großer Kunde seine Waren jetzt schon morgens",
       "erklaerung": "Ein großer Kunde will seine Waren früher abholen."
      },
      {
       "ort": "Gespräch — Abschnitt 5",
       "zeilen": [
        {
         "wer": "Frau",
         "text": "Wie viele Kollegen sind denn betroffen?"
        },
        {
         "wer": "Mann",
         "text": "In der Verpackung sind wir in der Frühschicht achtzehn Leute. Ich habe eine kleine Umfrage gemacht. Elf kommen mit dem Bus oder mit dem Fahrrad, nur sieben haben ein Auto. Und von den sieben wohnen zwei auch noch ziemlich weit weg."
        }
       ],
       "satz": "Die meisten Kollegen in der Frühschicht fahren mit dem Auto zur Arbeit.",
       "loesung": false,
       "stelle": "nur sieben haben ein Auto",
       "erklaerung": "Nur sieben von achtzehn haben ein Auto, die meisten fahren Bus oder Rad."
      },
      {
       "ort": "Gespräch — Abschnitt 6",
       "zeilen": [
        {
         "wer": "Frau",
         "text": "Diese Zahlen sind sehr hilfreich. Könnten Sie mir die Umfrage schriftlich geben? Dann kann ich sie in der nächsten Sitzung mit der Geschäftsführung vorlegen."
        },
        {
         "wer": "Mann",
         "text": "Natürlich, ich bringe sie Ihnen morgen vorbei."
        },
        {
         "wer": "Frau",
         "text": "Aber bitte ohne Namen, nur die Zahlen. Die Kollegen sollen keine Nachteile haben."
        }
       ],
       "satz": "Auf der Liste für die Sitzung sollen keine Namen stehen.",
       "loesung": true,
       "stelle": "Aber bitte ohne Namen, nur die Zahlen",
       "erklaerung": "Zum Schutz der Kollegen soll die Umfrage ohne Namen sein."
      },
      {
       "ort": "Gespräch — Abschnitt 7",
       "zeilen": [
        {
         "wer": "Mann",
         "text": "Haben Sie schon eine Idee, wie man das lösen könnte?"
        },
        {
         "wer": "Frau",
         "text": "Es gibt verschiedene Möglichkeiten. Eine wäre ein Werksbus, den die Firma bezahlt. Das gibt es in anderen Betrieben hier im Gewerbegebiet schon. Eine andere Möglichkeit wäre, dass nur ein kleines Team früher anfängt, und zwar freiwillig."
        }
       ],
       "satz": "Frau Kaya schlägt vor, dass alle Mitarbeiter früher anfangen.",
       "loesung": false,
       "stelle": "dass nur ein kleines Team früher anfängt, und zwar freiwillig",
       "erklaerung": "Nur ein kleines Team soll freiwillig früher anfangen, nicht alle."
      },
      {
       "ort": "Gespräch — Abschnitt 8",
       "zeilen": [
        {
         "wer": "Mann",
         "text": "Freiwillig fände ich gut. Es gibt bestimmt Leute, die gern früher anfangen und dafür früher nach Hause gehen. Ich zum Beispiel nicht, aber Jana aus meiner Gruppe hat das schon oft gesagt."
        },
        {
         "wer": "Frau",
         "text": "Sehen Sie, deshalb ist es so wichtig, mit den Leuten zu sprechen."
        }
       ],
       "satz": "Herr Lange selbst möchte gern früher anfangen.",
       "loesung": false,
       "stelle": "Ich zum Beispiel nicht",
       "erklaerung": "Er selbst möchte nicht früher anfangen, aber seine Kollegin Jana schon."
      },
      {
       "ort": "Gespräch — Abschnitt 9",
       "zeilen": [
        {
         "wer": "Mann",
         "text": "Und wie geht es jetzt weiter?"
        },
        {
         "wer": "Frau",
         "text": "Die nächste Sitzung mit der Geschäftsführung ist am Donnerstag in zwei Wochen. Vorher treffen wir uns im Betriebsrat und besprechen unsere Position. Wenn Sie möchten, können Sie gern als Gast dazukommen und die Sicht der Verpackung erklären."
        }
       ],
       "satz": "Herr Lange darf an einem Treffen des Betriebsrats teilnehmen.",
       "loesung": true,
       "stelle": "können Sie gern als Gast dazukommen",
       "erklaerung": "Er ist als Gast zum Treffen des Betriebsrats eingeladen."
      },
      {
       "ort": "Gespräch — Abschnitt 10",
       "zeilen": [
        {
         "wer": "Mann",
         "text": "Das mache ich gern. Und was sage ich den Kollegen bis dahin?"
        },
        {
         "wer": "Frau",
         "text": "Sagen Sie ihnen, dass im Moment nichts entschieden ist und dass sie ganz normal um sechs Uhr kommen. Sobald es etwas Neues gibt, informieren wir alle in einer Betriebsversammlung."
        },
        {
         "wer": "Mann",
         "text": "Danke, Frau Kaya, das beruhigt mich sehr."
        }
       ],
       "satz": "Bis zur Entscheidung bleibt der Beginn der Frühschicht gleich.",
       "loesung": true,
       "stelle": "dass sie ganz normal um sechs Uhr kommen",
       "erklaerung": "Bis etwas entschieden ist, beginnt die Schicht weiter um sechs Uhr."
      }
     ]
    },
    {
     "nr": 3,
     "art": "durchsage",
     "aufgaben": [
      {
       "von": "Anrufbeantworter einer Zeitarbeitsfirma",
       "wer": "Frau",
       "text": "Herzlich willkommen bei Werkpartner Personaldienste. Unser Büro ist heute wegen einer Betriebsversammlung erst ab zwölf Uhr besetzt. Wenn Sie sich krankmelden möchten, sprechen Sie bitte nach dem Ton Ihren Namen und Ihren Einsatzort auf. Bewerber können ihre Unterlagen jederzeit per E-Mail schicken.",
       "satz": "Man kann sich heute Vormittag auch telefonisch krankmelden.",
       "loesung": true,
       "stelle": "sprechen Sie bitte nach dem Ton Ihren Namen",
       "erklaerung": "Das Büro ist erst ab zwölf Uhr besetzt, aber die Krankmeldung geht auf den Anrufbeantworter."
      },
      {
       "von": "Nachricht eines Kunden",
       "wer": "Mann",
       "text": "Hallo, hier ist Jan Becker von der Tischlerei Holzwerk. Sie haben uns gestern ein Angebot für die neuen Fenster geschickt. Der Preis ist in Ordnung, aber der Liefertermin im März ist uns zu spät. Wenn Sie schon im Februar liefern können, nehmen wir das Angebot an. Bitte melden Sie sich bis Freitag.",
       "satz": "Herr Becker findet das Angebot zu teuer.",
       "loesung": false,
       "stelle": "Der Preis ist in Ordnung",
       "erklaerung": "Problem ist nicht der Preis, sondern der späte Liefertermin."
      },
      {
       "von": "Lautsprecherdurchsage im Betrieb",
       "wer": "Mann",
       "text": "Achtung, eine Durchsage für alle Mitarbeiter im Verwaltungsgebäude. Der Aufzug ist ab heute für eine Woche außer Betrieb. Wer schwere Akten oder Pakete transportieren muss, kann sich beim Hausmeister melden. Er hilft Ihnen gern beim Tragen.",
       "satz": "Der Aufzug funktioniert nur heute nicht.",
       "loesung": false,
       "stelle": "ab heute für eine Woche außer Betrieb",
       "erklaerung": "Nicht nur heute: Der Aufzug fällt eine ganze Woche aus."
      },
      {
       "von": "Mitteilung der Geschäftsführung",
       "wer": "Frau",
       "text": "Liebe Kollegen, ab dem ersten April gilt auf unserem gesamten Firmengelände ein Rauchverbot. Raucher können dann nur noch die neue Raucherecke neben dem Fahrradständer benutzen. Wer mit dem Rauchen aufhören möchte, kann einen Kurs bei der Krankenkasse machen, die Kosten übernimmt die Firma.",
       "satz": "Die Firma bezahlt einen Kurs für Mitarbeiter, die nicht mehr rauchen wollen.",
       "loesung": true,
       "stelle": "die Kosten übernimmt die Firma",
       "erklaerung": "„die Kosten übernimmt\" bedeutet „bezahlt\". Andere Wörter, gleiche Aussage."
      },
      {
       "von": "Ansage im Lager",
       "wer": "Frau",
       "text": "Eine Information für alle im Versand. Ab sofort werden die Pakete für Expresskunden nicht mehr an Tor zwei, sondern an Tor fünf abgeholt. Die Abholung ist wie bisher um fünfzehn Uhr. Bitte kleben Sie auf jedes Expresspaket den roten Aufkleber.",
       "satz": "Die Expresspakete werden jetzt an Tor zwei abgeholt.",
       "loesung": false,
       "stelle": "sondern an Tor fünf abgeholt",
       "erklaerung": "Tor zwei ist das alte Tor. Nach „sondern\" kommt das neue: Tor fünf."
      }
     ]
    }
   ]
  }
 ]
};
