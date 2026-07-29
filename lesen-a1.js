/* ============================================================
   deutschoderwas club — LESEN A1 (Start Deutsch 1)

   Aufbau nach der offiziellen Testbeschreibung des Goethe-
   Instituts (Prüfungsziele Testbeschreibung A1 SD1): drei
   Teile, 15 Aufgaben, je ein Punkt, circa 25 Minuten, ein
   Viertel der Gesamtprüfung.

   Der Weg hat vier Stufen — so, wie ein Lehrbuch es aufbaut:

     1  Wortschatz   die Wörter auf Schildern, Zeit, Orte
     2  Strategie    außer, nur, ab, bis, kein
     3  Aufgabentypen die drei Prüfungsteile einzeln
     4  Prüfungslauf 15 Aufgaben mit Uhr

   Aufgabenarten in den Stufen 1 und 2:
     wahl       drei Möglichkeiten, eine stimmt
     zuordnen   vier Paare verbinden
     luecke     Lückentext mit Wortbank
     wortklick  das entscheidende Wort im Schild antippen

   Das Feld bild sagt der Oberfläche, was sie zeichnen soll:
     schild  ein Hinweisschild        tafel   Öffnungszeiten
     uhr     eine Analoguhr (HH:MM)   symbol  Emoji mit Label

   Das Feld stelle ist die wörtliche Textstelle, die die
   Antwort beweist. Sie wird nach dem Antworten gelb markiert —
   Lesen lernt man daran, WO die Antwort stand.
   ============================================================ */
window.LESEN_A1 = {
 "niveau": "A1",
 "pruefung": "Start Deutsch 1",
 "minuten": 25,
 "punkte": 15,
 "stufen": [
  {
   "nr": 1,
   "titel": "Die Wörter, die immer drankommen",
   "zeichen": "🔤",
   "was": "Bevor du Aufgaben löst, musst du die Schilder lesen können. Hier lernst du den Wortschatz, der in fast jeder A1-Prüfung auftaucht."
  },
  {
   "nr": 2,
   "titel": "Die kleinen Wörter",
   "zeichen": "🔍",
   "was": "außer, nur, ab, bis, kein. Diese Wörter entscheiden bei Richtig/Falsch über die Antwort — und werden am häufigsten überlesen."
  },
  {
   "nr": 3,
   "titel": "Die drei Aufgabentypen",
   "zeichen": "🧩",
   "was": "Jetzt echte Prüfungsaufgaben, aber in Ruhe und einzeln. Jeder Teil hat fünf Runden."
  },
  {
   "nr": 4,
   "titel": "Die ganze Prüfung",
   "zeichen": "⏱️",
   "was": "15 Aufgaben, 25 Minuten, keine Hilfe zwischendurch. So wie am Prüfungstag."
  }
 ],
 "bloecke": [
  {
   "id": "s1b1",
   "stufe": 1,
   "titel": "Offen oder zu?",
   "kurz": "Die Wörter auf Türen und Schildern",
   "ziel": "Nach diesem Block erkennst du auf einen Blick, ob ein Laden auf hat, ob du klingeln musst und wo du nicht hindarfst.",
   "zeichen": "🚪",
   "farbe": "turq",
   "aufgaben": [
    {
     "art": "wahl",
     "bild": {
      "art": "schild",
      "zeilen": [
       "Metzgerei Hoffmann",
       "Ruhetag: Mittwoch"
      ]
     },
     "frage": "An welchem Tag ist die Metzgerei zu?",
     "opt": [
      "Am Mittwoch",
      "Am Samstag",
      "Jeden Tag"
     ],
     "loesung": 0,
     "erklaerung": "Ruhetag ist der eine Tag pro Woche, an dem ein Geschäft immer geschlossen hat. Hier steht Mittwoch hinter dem Doppelpunkt."
    },
    {
     "art": "wortklick",
     "zeilen": [
      "Praxis Dr. Ohm",
      "Bitte klingeln und warten"
     ],
     "frage": "Welches Wort sagt dir, was du an der Tür machen musst?",
     "loesung": "klingeln",
     "erklaerung": "Klingeln heißt läuten. Wenn das auf dem Schild steht, ist die Tür zu und jemand macht dir von innen auf."
    },
    {
     "art": "zuordnen",
     "frage": "Was bedeuten diese vier Schilder an Türen?",
     "paare": [
      {
       "l": "Kein Zutritt",
       "r": "Hier darfst du nicht hineingehen"
      },
      {
       "l": "Notausgang",
       "r": "Diese Tür ist nur für den Notfall"
      },
      {
       "l": "Selbstbedienung",
       "r": "Du nimmst dir die Ware selbst"
      },
      {
       "l": "Außer Betrieb",
       "r": "Das Gerät funktioniert gerade nicht"
      }
     ],
     "erklaerung": "Diese vier Schilder hängen überall in Deutschland. Achte auf das Wort Zutritt: Es hat immer mit Hineingehen zu tun."
    },
    {
     "art": "luecke",
     "bild": {
      "art": "tafel",
      "titel": "Supermarkt Nordstern",
      "zeilen": [
       [
        "Mo – Sa",
        "7 – 20 Uhr"
       ],
       [
        "So",
        "geschlossen"
       ]
      ]
     },
     "frage": "Setz die passenden Wörter in den Text ein.",
     "text": "Von Montag bis Samstag ist der Supermarkt ___ . Am Sonntag ist er ___ .",
     "bank": [
      "geschlossen",
      "frei",
      "geöffnet"
     ],
     "loesung": [
      "geöffnet",
      "geschlossen"
     ],
     "erklaerung": "In der Tafel steht bei So das Wort geschlossen. Steht eine Uhrzeit da, hat der Laden auf."
    },
    {
     "art": "wahl",
     "bild": {
      "art": "symbol",
      "zeichen": "🚪",
      "label": "Notausgang"
     },
     "frage": "Wann darfst du durch diese Tür gehen?",
     "opt": [
      "Nur im Notfall",
      "Jeden Tag beim Einkaufen",
      "Nur am Wochenende"
     ],
     "loesung": 0,
     "erklaerung": "Not heißt Gefahr, zum Beispiel Feuer. Ein Notausgang ist immer frei, aber du benutzt ihn nur, wenn etwas passiert."
    },
    {
     "art": "wahl",
     "bild": {
      "art": "schild",
      "zeilen": [
       "Schwimmbad Wellenberg",
       "Heute wegen Reparatur gesperrt"
      ]
     },
     "frage": "Was kannst du heute im Schwimmbad machen?",
     "opt": [
      "Gar nichts, es ist zu",
      "Schwimmen gehen",
      "Eine Karte kaufen"
     ],
     "loesung": 0,
     "erklaerung": "Gesperrt heißt: Hier kommt gerade niemand rein. Das Wort siehst du auch auf Straßen und in Häusern."
    },
    {
     "art": "luecke",
     "bild": {
      "art": "tafel",
      "titel": "Umkleide Halle 2",
      "zeilen": [
       [
        "Kabine 1",
        "besetzt"
       ],
       [
        "Kabine 2",
        "frei"
       ]
      ]
     },
     "frage": "Welche Kabine kannst du nehmen? Ergänze den Text.",
     "text": "Kabine 1 ist ___ , da ist schon jemand drin. Kabine 2 ist ___ , da kannst du hinein.",
     "bank": [
      "offen",
      "frei",
      "besetzt"
     ],
     "loesung": [
      "besetzt",
      "frei"
     ],
     "erklaerung": "Besetzt heißt: Ein Platz ist schon weg. Frei heißt: Der Platz ist noch leer. Das steht auch an Toiletten und in Zügen."
    },
    {
     "art": "zuordnen",
     "frage": "Wo geht es rein, wo geht es raus?",
     "paare": [
      {
       "l": "Eingang",
       "r": "Hier gehst du in das Gebäude hinein"
      },
      {
       "l": "Ausgang",
       "r": "Hier gehst du wieder hinaus"
      },
      {
       "l": "Einbahnstraße",
       "r": "Autos fahren hier nur in eine Richtung"
      },
      {
       "l": "Betriebsferien",
       "r": "Die Firma macht mehrere Wochen Urlaub"
      }
     ],
     "erklaerung": "Ein- heißt hinein, Aus- heißt hinaus. Bei Einbahnstraße steckt Bahn drin: nur eine Bahn, also eine Richtung."
    },
    {
     "art": "wahl",
     "bild": {
      "art": "schild",
      "zeilen": [
       "Bäckerei Sonne",
       "Betriebsferien",
       "vom 1. bis 14. August"
      ]
     },
     "frage": "Wie lange bleibt die Bäckerei zu?",
     "opt": [
      "Etwa zwei Wochen",
      "Nur zwei Tage",
      "Das ganze Jahr"
     ],
     "loesung": 0,
     "erklaerung": "Vom 1. bis 14. August sind vierzehn Tage, also zwei Wochen. Betriebsferien heißt: Der Betrieb macht Urlaub."
    },
    {
     "art": "wortklick",
     "zeilen": [
      "Frisch gewischt",
      "Vorsicht, der Boden ist nass"
     ],
     "frage": "Welches Wort warnt dich vor einer Gefahr?",
     "loesung": "Vorsicht",
     "erklaerung": "Vorsicht und Achtung sind Warnwörter. Danach steht immer, was gefährlich ist – hier der nasse Boden."
    },
    {
     "art": "luecke",
     "bild": {
      "art": "schild",
      "zeilen": [
       "Getränkemarkt Rieger",
       "Selbstbedienung"
      ]
     },
     "frage": "Was machst du in diesem Laden? Ergänze den Text.",
     "text": "Hier ist ___ . Du nimmst die Kisten ___ und gehst dann zur Kasse.",
     "bank": [
      "allein",
      "selbst",
      "Selbstbedienung"
     ],
     "loesung": [
      "Selbstbedienung",
      "selbst"
     ],
     "erklaerung": "In Selbstbedienung steckt das Wort selbst. Niemand bedient dich, du packst also selbst an."
    },
    {
     "art": "zuordnen",
     "frage": "Hat der Laden auf oder zu? Ordne zu.",
     "paare": [
      {
       "l": "Geöffnet",
       "r": "Du kannst jetzt hineingehen"
      },
      {
       "l": "Geschlossen",
       "r": "Jetzt ist zu, komm später wieder"
      },
      {
       "l": "Gesperrt",
       "r": "Hier darf gerade niemand durch"
      },
      {
       "l": "Ruhetag",
       "r": "An diesem Tag ist immer zu"
      }
     ],
     "erklaerung": "Geöffnet und geschlossen stehen fast an jeder Ladentür. Gesperrt ist stärker: Da ist ein Weg oder ein Raum ganz dicht."
    }
   ]
  },
  {
   "id": "s1b2",
   "stufe": 1,
   "titel": "Zeit lesen",
   "kurz": "Tage, Uhrzeiten und Datum auf Schildern",
   "ziel": "Nach diesem Block weißt du, wann ein Amt, ein Arzt oder ein Bad offen hat – bei Uhrzeiten, Wochentagen und Datumsangaben.",
   "zeichen": "🕘",
   "farbe": "gold",
   "aufgaben": [
    {
     "art": "wahl",
     "bild": {
      "art": "uhr",
      "zeit": "14:30"
     },
     "frage": "Wie spät ist es auf dieser Uhr?",
     "opt": [
      "Halb drei",
      "Halb zwei",
      "Viertel vor drei"
     ],
     "loesung": 0,
     "erklaerung": "14:30 ist halb drei. Halb heißt im Deutschen: Es fehlt noch eine halbe Stunde bis drei – nicht halb nach zwei."
    },
    {
     "art": "luecke",
     "bild": {
      "art": "tafel",
      "titel": "Bürgeramt Mitte",
      "zeilen": [
       [
        "Mo – Fr",
        "8 – 12 Uhr"
       ],
       [
        "Do",
        "auch 14 – 18 Uhr"
       ]
      ]
     },
     "frage": "Wann hat das Bürgeramt offen? Ergänze den Text.",
     "text": "Das Amt öffnet ___ 8 Uhr und schließt ___ 12 Uhr. Am Donnerstag ist es auch ___ offen.",
     "bank": [
      "bis",
      "nachmittags",
      "vormittags",
      "ab"
     ],
     "loesung": [
      "ab",
      "bis",
      "nachmittags"
     ],
     "erklaerung": "Ab sagt, wann etwas anfängt, bis sagt, wann es aufhört. 14 bis 18 Uhr liegt nach 12 Uhr, also nachmittags."
    },
    {
     "art": "zuordnen",
     "frage": "An welchen Tagen gilt das?",
     "paare": [
      {
       "l": "Täglich",
       "r": "Jeden Tag, auch am Sonntag"
      },
      {
       "l": "Werktags",
       "r": "Von Montag bis Samstag"
      },
      {
       "l": "Feiertags",
       "r": "An Tagen wie Ostern oder Weihnachten"
      },
      {
       "l": "Am Wochenende",
       "r": "Am Samstag und am Sonntag"
      }
     ],
     "erklaerung": "In werktags steckt Werk, also Arbeit. Der Sonntag ist nie ein Werktag, der Samstag meistens schon."
    },
    {
     "art": "wahl",
     "bild": {
      "art": "schild",
      "zeilen": [
       "Freibad Kirchsee",
       "Ab 1. Mai täglich geöffnet"
      ]
     },
     "frage": "Wann macht das Freibad auf?",
     "opt": [
      "Am 1. Mai",
      "Am 1. März",
      "Erst im Juli"
     ],
     "loesung": 0,
     "erklaerung": "Ab nennt den ersten Tag. Ab 1. Mai heißt: Am 1. Mai geht es los, vorher ist zu."
    },
    {
     "art": "wortklick",
     "zeilen": [
      "Sperrmüll wird abgeholt",
      "Bitte alles bis 6 Uhr rausstellen"
     ],
     "frage": "Welches Wort sagt dir, wann du spätestens fertig sein musst?",
     "loesung": "bis",
     "erklaerung": "Bis nennt immer den letzten Moment. Nach 6 Uhr ist es zu spät, dann ist das Auto schon weg."
    },
    {
     "art": "wahl",
     "bild": {
      "art": "uhr",
      "zeit": "07:45"
     },
     "frage": "Dein Bus fährt jetzt. Wie spät ist es?",
     "opt": [
      "Viertel vor acht",
      "Viertel nach acht",
      "Halb acht"
     ],
     "loesung": 0,
     "erklaerung": "Der große Zeiger steht auf der 9, das sind 45 Minuten. Bis acht fehlen 15 Minuten, also Viertel vor acht."
    },
    {
     "art": "luecke",
     "bild": {
      "art": "tafel",
      "titel": "Wertstoffhof Süd",
      "zeilen": [
       [
        "Mo – Fr",
        "9 – 17 Uhr"
       ],
       [
        "Sa",
        "9 – 13 Uhr"
       ],
       [
        "So",
        "geschlossen"
       ]
      ]
     },
     "frage": "Wann kannst du deinen Müll bringen? Ergänze den Text.",
     "text": "Am Samstag ist der Hof nur ___ offen. Am Sonntag ist er ___ .",
     "bank": [
      "geschlossen",
      "abends",
      "vormittags"
     ],
     "loesung": [
      "vormittags",
      "geschlossen"
     ],
     "erklaerung": "Samstag endet um 13 Uhr, das ist noch vor dem Nachmittag. Alles vor 12 Uhr nennt man vormittags."
    },
    {
     "art": "zuordnen",
     "frage": "Welche Tageszeit ist gemeint?",
     "paare": [
      {
       "l": "Vormittags",
       "r": "Am Morgen, vor 12 Uhr"
      },
      {
       "l": "Nachmittags",
       "r": "Nach dem Mittag, ab 12 Uhr"
      },
      {
       "l": "Abends",
       "r": "Wenn es draußen dunkel wird"
      },
      {
       "l": "Nachts",
       "r": "In der Nacht, wenn alle schlafen"
      }
     ],
     "erklaerung": "Achte auf vor und nach vor dem Wort Mittag. So merkst du dir sofort, ob die Zeit früher oder später ist."
    },
    {
     "art": "wahl",
     "bild": {
      "art": "schild",
      "zeilen": [
       "Hallenbad",
       "Saison bis 30.06.",
       "Danach geschlossen"
      ]
     },
     "frage": "Bis wann kannst du hier schwimmen?",
     "opt": [
      "Bis zum 30. Juni",
      "Bis zum 6. März",
      "Bis zum 30. Juli"
     ],
     "loesung": 0,
     "erklaerung": "Im deutschen Datum kommt zuerst der Tag, dann der Monat. 30.06. ist also der 30. Juni."
    },
    {
     "art": "wortklick",
     "zeilen": [
      "Sprechstunde nur nach Termin",
      "Anmeldung wochentags von 8 bis 11 Uhr"
     ],
     "frage": "Welches Wort sagt dir, dass du am Sonntag nicht anrufen kannst?",
     "loesung": "wochentags",
     "erklaerung": "Wochentags heißt Montag bis Freitag. Das Wochenende gehört nicht dazu, da geht niemand ans Telefon."
    },
    {
     "art": "luecke",
     "bild": {
      "art": "uhr",
      "zeit": "20:00"
     },
     "frage": "Wie spät ist es, und was heißt das? Ergänze den Text.",
     "text": "Es ist ___ Uhr ___ . Die meisten Läden sind jetzt ___ .",
     "bank": [
      "morgens",
      "geschlossen",
      "acht",
      "abends"
     ],
     "loesung": [
      "acht",
      "abends",
      "geschlossen"
     ],
     "erklaerung": "Die Uhr zeigt nur zwölf Stunden. 20 Uhr ist acht Uhr abends – deshalb sagst du dazu immer abends."
    },
    {
     "art": "zuordnen",
     "frage": "Was sagen dir diese Datumsangaben?",
     "paare": [
      {
       "l": "Ab 1. Mai",
       "r": "Der erste Mai ist der erste Tag"
      },
      {
       "l": "Bis 30.06.",
       "r": "Der 30. Juni ist der letzte Tag"
      },
      {
       "l": "Ab sofort",
       "r": "Es gilt schon ab heute"
      },
      {
       "l": "Bis Ende Juli",
       "r": "Im August ist es vorbei"
      }
     ],
     "erklaerung": "Ab öffnet den Zeitraum, bis schließt ihn. Steht ein Punkt hinter der Zahl, ist es ein Datum: 1. Mai, 30.06."
    }
   ]
  },
  {
   "id": "s1b3",
   "stufe": 1,
   "titel": "Wo bin ich?",
   "kurz": "Stockwerke, Räume und Wege im Gebäude",
   "ziel": "Nach diesem Block findest du im Amt, im Ärztehaus und am Bahnhof den richtigen Raum, das richtige Stockwerk und das richtige Gleis.",
   "zeichen": "🧭",
   "farbe": "gruen",
   "aufgaben": [
    {
     "art": "wahl",
     "bild": {
      "art": "tafel",
      "titel": "Ärztehaus Lindenplatz",
      "zeilen": [
       [
        "Erdgeschoss",
        "Apotheke"
       ],
       [
        "1. Stock",
        "Praxis Dr. Sun"
       ],
       [
        "2. Stock",
        "Physiotherapie"
       ]
      ]
     },
     "frage": "Du brauchst Medikamente. Wohin gehst du?",
     "opt": [
      "Ins Erdgeschoss",
      "In den 1. Stock",
      "In den 2. Stock"
     ],
     "loesung": 0,
     "erklaerung": "Das Erdgeschoss ist die Ebene direkt an der Straße. Medikamente bekommst du in der Apotheke, und die steht dort."
    },
    {
     "art": "wortklick",
     "zeilen": [
      "Anmeldung im dritten Stock",
      "Der Aufzug ist rechts"
     ],
     "frage": "Welches Wort sagt dir, dass du nicht laufen musst?",
     "loesung": "Aufzug",
     "erklaerung": "Ein Aufzug fährt dich nach oben, eine Treppe nicht. Merke dir das Paar Aufzug und Treppe zusammen."
    },
    {
     "art": "zuordnen",
     "frage": "Welcher Raum ist wofür da?",
     "paare": [
      {
       "l": "Empfang",
       "r": "Hier meldest du dich zuerst"
      },
      {
       "l": "Wartezimmer",
       "r": "Hier sitzt du, bis du dran bist"
      },
      {
       "l": "Kasse",
       "r": "Hier bezahlst du"
      },
      {
       "l": "Sekretariat",
       "r": "Hier ist das Büro der Schule"
      }
     ],
     "erklaerung": "In Wartezimmer steckt warten, in Empfang steckt empfangen. Die Wörter sagen dir schon, was du dort tust."
    },
    {
     "art": "luecke",
     "bild": {
      "art": "schild",
      "zeilen": [
       "Hausmeister Krause",
       "Werkstatt im Keller",
       "Schlüssel hier abholen"
      ]
     },
     "frage": "Wo findest du den Hausmeister? Ergänze den Text.",
     "text": "Der Hausmeister arbeitet im ___ . Dort holst du auch deinen ___ ab.",
     "bank": [
      "Schlüssel",
      "Aufzug",
      "Keller"
     ],
     "loesung": [
      "Keller",
      "Schlüssel"
     ],
     "erklaerung": "Der Keller liegt unter dem Erdgeschoss. Der Hausmeister kümmert sich um das Haus, deshalb hat er dort seine Werkstatt."
    },
    {
     "art": "wahl",
     "bild": {
      "art": "schild",
      "zeilen": [
       "Regionalbahn nach Kassel",
       "Heute von Gleis 3"
      ]
     },
     "frage": "Wohin musst du am Bahnhof gehen?",
     "opt": [
      "Zu Gleis 3",
      "Zur Kasse",
      "Ins Wartezimmer"
     ],
     "loesung": 0,
     "erklaerung": "Am Gleis steht der Zug. Die Zahl hinter dem Wort Gleis sagt dir, welches von vielen du nehmen musst."
    },
    {
     "art": "luecke",
     "bild": {
      "art": "symbol",
      "zeichen": "🚏",
      "label": "Haltestelle Marktplatz"
     },
     "frage": "Was passiert an diesem Ort? Ergänze den Text.",
     "text": "Hier hält der ___ . Du wartest an der ___ , bis er kommt.",
     "bank": [
      "Haltestelle",
      "Zug",
      "Bus"
     ],
     "loesung": [
      "Bus",
      "Haltestelle"
     ],
     "erklaerung": "In Haltestelle steckt halten. Busse und Straßenbahnen halten dort, Züge halten am Gleis."
    },
    {
     "art": "wahl",
     "bild": {
      "art": "schild",
      "zeilen": [
       "Fahrkarten nur am Automaten",
       "Kein Verkauf im Bus"
      ]
     },
     "frage": "Wo kaufst du deine Fahrkarte?",
     "opt": [
      "Am Automaten",
      "Beim Busfahrer",
      "Am Empfang"
     ],
     "loesung": 0,
     "erklaerung": "Ein Automat ist eine Maschine. Steht dort nur, ist der Automat die einzige Möglichkeit – der Fahrer verkauft nichts."
    },
    {
     "art": "zuordnen",
     "frage": "Wo genau in einem Haus ist das?",
     "paare": [
      {
       "l": "Erdgeschoss",
       "r": "Ganz unten, gleich neben der Haustür"
      },
      {
       "l": "1. Stock",
       "r": "Eine Treppe weiter oben"
      },
      {
       "l": "Hinterhof",
       "r": "Draußen hinter dem Haus"
      },
      {
       "l": "Anmeldung",
       "r": "Hier bekommst du deine Wartenummer"
      }
     ],
     "erklaerung": "Erde liegt unten, deshalb ist das Erdgeschoss unten. Jeder Stock darüber bekommt eine Zahl: 1. Stock, 2. Stock."
    },
    {
     "art": "wortklick",
     "zeilen": [
      "Fahrräder bitte im Hinterhof abstellen",
      "Im Treppenhaus ist kein Platz"
     ],
     "frage": "Welches Wort sagt dir, wo dein Fahrrad stehen darf?",
     "loesung": "Hinterhof",
     "erklaerung": "Hinter dem Haus liegt der Hof, deshalb Hinterhof. Solche Schilder hängen in fast jedem Mietshaus."
    },
    {
     "art": "wahl",
     "bild": {
      "art": "tafel",
      "titel": "Wegweiser Bürgerhaus",
      "zeilen": [
       [
        "Erdgeschoss",
        "Anmeldung"
       ],
       [
        "1. Stock",
        "Sekretariat"
       ],
       [
        "Keller",
        "Archiv"
       ]
      ]
     },
     "frage": "Du hast einen Termin im Sekretariat. Wo ist das?",
     "opt": [
      "Im 1. Stock",
      "Im Erdgeschoss",
      "Im Keller"
     ],
     "loesung": 0,
     "erklaerung": "Lies in der Tafel die linke Spalte für den Ort und die rechte für den Raum. Sekretariat steht neben 1. Stock."
    },
    {
     "art": "luecke",
     "bild": {
      "art": "tafel",
      "titel": "Praxis am Park",
      "zeilen": [
       [
        "Empfang",
        "Erdgeschoss"
       ],
       [
        "Wartezimmer",
        "1. Stock"
       ]
      ]
     },
     "frage": "In welcher Reihenfolge gehst du? Ergänze den Text.",
     "text": "Zuerst gehst du zum ___ . Danach wartest du oben im ___ .",
     "bank": [
      "Wartezimmer",
      "Keller",
      "Empfang"
     ],
     "loesung": [
      "Empfang",
      "Wartezimmer"
     ],
     "erklaerung": "Beim Empfang sagst du deinen Namen, erst danach darfst du dich setzen. Die Tafel zeigt dir das Stockwerk dazu."
    },
    {
     "art": "zuordnen",
     "frage": "Wie kommst du weiter? Ordne zu.",
     "paare": [
      {
       "l": "Aufzug",
       "r": "Er fährt dich nach oben"
      },
      {
       "l": "Treppe",
       "r": "Hier gehst du Stufe für Stufe"
      },
      {
       "l": "Automat",
       "r": "Eine Maschine gibt dir die Karte"
      },
      {
       "l": "Gleis",
       "r": "Hier fährt der Zug ab"
      }
     ],
     "erklaerung": "Aufzug und Treppe bringen dich nach oben, Automat und Gleis brauchst du unterwegs. Merke sie dir als zwei Paare."
    }
   ]
  },
  {
   "id": "s2b1",
   "stufe": 2,
   "titel": "außer, nur, ab, bis",
   "kurz": "Die Wörter, die etwas einschränken",
   "ziel": "Nach diesem Block fällt dir sofort auf, wenn ein kleines Wort die ganze Aussage umdreht.",
   "zeichen": "🔍",
   "farbe": "gold",
   "aufgaben": [
    {
     "art": "wahl",
     "bild": {
      "art": "schild",
      "zeilen": [
       "Stadtbibliothek Ostend",
       "Geöffnet täglich außer donnerstags"
      ]
     },
     "frage": "Sie wollen am Donnerstag Bücher ausleihen. Geht das?",
     "opt": [
      "Nein, donnerstags ist zu",
      "Ja, donnerstags ist offen",
      "Nur donnerstags ist offen"
     ],
     "loesung": 0,
     "erklaerung": "Das entscheidende Wort ist außer. Es nimmt einen Tag heraus: alle Tage ja, Donnerstag nein. Ohne dieses kleine Wort würdest du lesen, dass immer offen ist."
    },
    {
     "art": "wortklick",
     "zeilen": [
      "Waschküche im Keller",
      "Benutzung ab 7 Uhr erlaubt"
     ],
     "frage": "Welches Wort sagt dir, wann du frühestens waschen darfst?",
     "loesung": "ab",
     "erklaerung": "ab nennt den Anfang. Ab 7 Uhr heißt: um 6 Uhr noch nicht, um 7 Uhr geht es los. Merk dir: ab schaut nach vorn, bis schaut auf das Ende."
    },
    {
     "art": "wahl",
     "bild": {
      "art": "uhr",
      "zeit": "07:30"
     },
     "frage": "Am Eingang steht: Einlass ab 8 Uhr. Die Uhr zeigt die Zeit von jetzt. Kommen Sie schon hinein?",
     "opt": [
      "Nein, es ist noch zu früh",
      "Ja, ab 8 Uhr ist der Einlass vorbei",
      "Ja, um 7.30 Uhr ist schon Einlass"
     ],
     "loesung": 0,
     "erklaerung": "Die Uhr zeigt halb acht, also 7.30 Uhr. Das Wort ab macht 8 Uhr zum frühesten Zeitpunkt. Vorher darf niemand rein."
    },
    {
     "art": "zuordnen",
     "frage": "Was heißt das genau?",
     "paare": [
      {
       "l": "Ab 9 Uhr",
       "r": "Vorher nicht, danach ja"
      },
      {
       "l": "Bis 9 Uhr",
       "r": "Danach nicht mehr"
      },
      {
       "l": "Höchstens 3 Stunden",
       "r": "Mehr als 3 Stunden ist zu viel"
      },
      {
       "l": "Mindestens 3 Personen",
       "r": "Weniger als 3 Personen reicht nicht"
      }
     ],
     "erklaerung": "ab und bis sehen sich ähnlich, meinen aber das Gegenteil: ab ist der Anfang, bis ist das Ende. Genauso höchstens (die Obergrenze) und mindestens (die Untergrenze)."
    },
    {
     "art": "luecke",
     "bild": {
      "art": "tafel",
      "titel": "Hallenbad Rosenau",
      "zeilen": [
       [
        "Mo – Fr",
        "6 – 22 Uhr"
       ],
       [
        "Sa und So",
        "8 – 18 Uhr"
       ]
      ]
     },
     "frage": "Wann kannst du am Sonntag schwimmen? Ergänze den Text.",
     "text": "Am Sonntag kannst du erst ___ 8 Uhr schwimmen. Um 19 Uhr ist es zu spät, denn das Bad hat nur ___ 18 Uhr offen.",
     "bank": [
      "nach",
      "bis",
      "ab",
      "vor"
     ],
     "loesung": [
      "ab",
      "bis"
     ],
     "erklaerung": "In der Tafel steht am Wochenende 8 – 18 Uhr. Die erste Zahl ist der Start (ab), die zweite ist das Ende (bis). Der Strich zwischen den Zahlen heißt genau das."
    },
    {
     "art": "wortklick",
     "zeilen": [
      "Elternabend Kita Pusteblume",
      "Anmeldung bis Freitag"
     ],
     "frage": "Welches Wort sagt dir, dass du dich am Samstag nicht mehr anmelden kannst?",
     "loesung": "bis",
     "erklaerung": "bis nennt die Grenze. Freitag ist der letzte Tag, danach ist Schluss. Wenn du bis überliest, denkst du, du hast noch Zeit."
    },
    {
     "art": "wahl",
     "bild": {
      "art": "schild",
      "zeilen": [
       "Parkplatz Klinikum",
       "Parken nur für Besucher"
      ]
     },
     "frage": "Wer darf hier parken?",
     "opt": [
      "Nur die Besucher der Klinik",
      "Alle Leute",
      "Niemand"
     ],
     "loesung": 0,
     "erklaerung": "nur macht aus einem Angebot eine Bedingung: Besucher ja, alle anderen nein. Bei Richtig/Falsch-Aufgaben hängt an diesem kleinen Wort oft die ganze Antwort."
    },
    {
     "art": "wahl",
     "bild": {
      "art": "symbol",
      "zeichen": "🅿️",
      "label": "Parken höchstens 2 Stunden"
     },
     "frage": "Sie parken hier 3 Stunden. Ist das erlaubt?",
     "opt": [
      "Nein, 2 Stunden sind das Maximum",
      "Ja, 3 Stunden sind erlaubt",
      "Ja, aber nur am Sonntag"
     ],
     "loesung": 0,
     "erklaerung": "höchstens heißt: nicht mehr als. 2 Stunden sind die Obergrenze, 3 Stunden sind eine Stunde zu viel."
    },
    {
     "art": "zuordnen",
     "frage": "Was sagen dir diese Aushänge?",
     "paare": [
      {
       "l": "Nur für Anwohner",
       "r": "Andere Leute dürfen hier nicht"
      },
      {
       "l": "Jeweils montags",
       "r": "Jeden Montag wieder"
      },
      {
       "l": "Ab sofort geschlossen",
       "r": "Von heute an ist zu"
      },
      {
       "l": "Bis auf Weiteres",
       "r": "Vorerst, ein Ende steht nicht fest"
      }
     ],
     "erklaerung": "Solche Wörter stehen im Hausflur und am Amt. Achte auf jeweils (es wiederholt sich) und auf bis auf Weiteres (niemand sagt dir, wie lange)."
    },
    {
     "art": "wortklick",
     "zeilen": [
      "Sprechstunde Frau Dr. Ilic",
      "Termine nach Vereinbarung",
      "Notfälle jederzeit"
     ],
     "frage": "Welches Wort sagt dir, dass du zuerst anrufen musst?",
     "loesung": "nach",
     "erklaerung": "nach Vereinbarung heißt: erst der Termin, dann der Besuch. Das kleine Wort nach nennt die Reihenfolge. Nur im Notfall gilt das nicht."
    },
    {
     "art": "luecke",
     "bild": {
      "art": "schild",
      "zeilen": [
       "Volkshochschule Bergstraße",
       "Kursstart ab 14. September",
       "Anmeldung bis 5. September"
      ]
     },
     "frage": "Bis wann musst du dich anmelden? Ergänze den Text.",
     "text": "Du meldest dich ___ 5. September an. Der Kurs geht erst ___ 14. September los.",
     "bank": [
      "ab",
      "nur",
      "bis",
      "ohne"
     ],
     "loesung": [
      "bis",
      "ab"
     ],
     "erklaerung": "Auf dem Schild stehen zwei Daten mit zwei kleinen Wörtern: bis 5. September ist der letzte Tag für die Anmeldung, ab 14. September ist der erste Kurstag."
    },
    {
     "art": "wahl",
     "bild": {
      "art": "tafel",
      "titel": "Fahrplan Bus 42",
      "zeilen": [
       [
        "Mo – Fr",
        "ab 5 Uhr"
       ],
       [
        "Sa",
        "ab 6 Uhr"
       ],
       [
        "So",
        "ab 8 Uhr"
       ]
      ]
     },
     "frage": "Sie wollen am Sonntag um 7 Uhr fahren. Geht das?",
     "opt": [
      "Nein, sonntags fährt der Bus erst ab 8 Uhr",
      "Ja, sonntags fährt der Bus ab 6 Uhr",
      "Ja, der Bus fährt immer ab 5 Uhr"
     ],
     "loesung": 0,
     "erklaerung": "Such zuerst die richtige Zeile: So. Dort steht ab 8 Uhr. Ab nennt die erste Fahrt, um 7 Uhr wartest du also noch."
    },
    {
     "art": "wortklick",
     "zeilen": [
      "Schwimmkurs für Anfänger",
      "Mindestens 6 Teilnehmer"
     ],
     "frage": "Welches Wort sagt dir, dass 5 Teilnehmer zu wenig sind?",
     "loesung": "Mindestens",
     "erklaerung": "mindestens nennt die kleinste Zahl, die reicht. 6 ist gut, 7 ist auch gut, 5 ist zu wenig. Das Gegenwort ist höchstens."
    },
    {
     "art": "zuordnen",
     "frage": "Wann geht es, wann nicht?",
     "paare": [
      {
       "l": "Einlass nur bis 20 Uhr",
       "r": "Um 21 Uhr kommst du nicht mehr rein"
      },
      {
       "l": "Geöffnet außer feiertags",
       "r": "An Feiertagen ist zu"
      },
      {
       "l": "Nur mit Voranmeldung",
       "r": "Ohne Anmeldung geht es nicht"
      },
      {
       "l": "Höchstens 4 Bücher",
       "r": "5 Bücher sind zu viel"
      }
     ],
     "erklaerung": "In jeder Zeile steckt ein kleines Wort, das einschränkt: bis, außer, nur, höchstens. Tippe beim Lesen im Kopf immer auf dieses eine Wort, dann fällst du nicht darauf herein."
    }
   ]
  },
  {
   "id": "s2b2",
   "stufe": 2,
   "titel": "kein, nicht, ohne",
   "kurz": "Verneinung — auch die versteckte",
   "ziel": "Nach diesem Block hörst du das Nein auch dann, wenn im Text gar kein Nein steht, sondern entfällt, außer Betrieb oder nicht gestattet.",
   "zeichen": "🚫",
   "farbe": "rot",
   "aufgaben": [
    {
     "art": "wahl",
     "bild": {
      "art": "schild",
      "zeilen": [
       "Aufzug Haus B",
       "Außer Betrieb",
       "Bitte die Treppe nehmen"
      ]
     },
     "frage": "Was ist heute mit dem Aufzug?",
     "opt": [
      "Er funktioniert gerade nicht",
      "Er fährt nur nach oben",
      "Er fährt schneller als sonst"
     ],
     "loesung": 0,
     "erklaerung": "Außer Betrieb ist ein verstecktes Nein: Da steht nirgends kaputt, aber genau das ist gemeint. Die zweite Zeile mit der Treppe bestätigt es."
    },
    {
     "art": "wortklick",
     "zeilen": [
      "Deutschkurs A1 am Dienstag",
      "Die Stunde am 3. Mai entfällt"
     ],
     "frage": "Welches Wort sagt dir, dass am 3. Mai kein Unterricht ist?",
     "loesung": "entfällt",
     "erklaerung": "entfällt heißt: findet nicht statt. Das Wort sieht harmlos aus, aber es sagt nein. Merk es dir zusammen mit fällt aus und abgesagt."
    },
    {
     "art": "wahl",
     "bild": {
      "art": "symbol",
      "zeichen": "🚭",
      "label": "Rauchen verboten"
     },
     "frage": "Sie möchten hier eine Zigarette rauchen. Geht das?",
     "opt": [
      "Nein, das ist verboten",
      "Ja, aber nur kurz",
      "Ja, das ist erlaubt"
     ],
     "loesung": 0,
     "erklaerung": "verboten ist die klare Form von nein. Der rote Strich im Bild sagt dasselbe. Wenn verboten dasteht, gibt es keine Ausnahme."
    },
    {
     "art": "zuordnen",
     "frage": "Was heißt das im Klartext?",
     "paare": [
      {
       "l": "Der Kurs entfällt",
       "r": "Der Kurs findet nicht statt"
      },
      {
       "l": "Der Zug fällt aus",
       "r": "Der Zug fährt heute nicht"
      },
      {
       "l": "Das Fest ist abgesagt",
       "r": "Das Fest gibt es nicht"
      },
      {
       "l": "Der Automat ist defekt",
       "r": "Der Automat funktioniert nicht"
      }
     ],
     "erklaerung": "Ämter, Schulen und die Bahn schreiben selten ein einfaches nein. Sie schreiben entfällt, fällt aus, abgesagt oder defekt — die Bedeutung ist immer dieselbe."
    },
    {
     "art": "luecke",
     "bild": {
      "art": "tafel",
      "titel": "Anzeigetafel Gleis 4",
      "zeilen": [
       [
        "14.10 nach Bremen",
        "fällt aus"
       ],
       [
        "14.40 nach Bremen",
        "pünktlich"
       ]
      ]
     },
     "frage": "Welcher Zug fährt? Ergänze den Text.",
     "text": "Der Zug um 14.10 Uhr fährt heute ___ . Der Zug um 14.40 Uhr kommt ___ .",
     "bank": [
      "pünktlich",
      "kein",
      "nicht",
      "später"
     ],
     "loesung": [
      "nicht",
      "pünktlich"
     ],
     "erklaerung": "fällt aus in der ersten Zeile ist das versteckte Nein: Dieser Zug fährt nicht. Erst die zweite Zeile bringt dich weiter."
    },
    {
     "art": "wortklick",
     "zeilen": [
      "Hausflur Nummer 7",
      "Fahrräder abstellen nicht gestattet"
     ],
     "frage": "Welches kleine Wort macht aus dem Satz ein Verbot?",
     "loesung": "nicht",
     "erklaerung": "gestattet heißt erlaubt. Erst das kleine nicht davor dreht alles um: nicht gestattet ist genau dasselbe wie verboten."
    },
    {
     "art": "wahl",
     "bild": {
      "art": "schild",
      "zeilen": [
       "Bürgeramt Nordstadt",
       "Kein Zutritt ohne Termin"
      ]
     },
     "frage": "Sie kommen ohne Termin. Was passiert?",
     "opt": [
      "Sie dürfen nicht hinein",
      "Sie warten kurz und dürfen dann rein",
      "Sie bekommen sofort einen Termin"
     ],
     "loesung": 0,
     "erklaerung": "Hier stehen gleich zwei Signale: kein und ohne. Kein Zutritt ohne Termin heißt: Termin ja, sonst nein."
    },
    {
     "art": "wortklick",
     "zeilen": [
      "Sauna Vitalbad",
      "Eintritt ohne Handtuch nicht möglich"
     ],
     "frage": "Welches Wort sagt dir, dass du ein Handtuch brauchst?",
     "loesung": "ohne",
     "erklaerung": "ohne nennt das, was fehlt. Ohne Handtuch nicht möglich heißt: mit Handtuch geht es, ohne nicht. Denk das Wort ohne immer bis zum Ende."
    },
    {
     "art": "wahl",
     "bild": {
      "art": "tafel",
      "titel": "Volkshochschule Kurse heute",
      "zeilen": [
       [
        "Yoga 18 Uhr",
        "findet statt"
       ],
       [
        "Nähkurs 19 Uhr",
        "abgesagt"
       ]
      ]
     },
     "frage": "Sie wollen zum Nähkurs. Was ist heute?",
     "opt": [
      "Der Nähkurs fällt heute aus",
      "Der Nähkurs beginnt später",
      "Der Nähkurs ist schon voll"
     ],
     "loesung": 0,
     "erklaerung": "Lies die richtige Zeile: Beim Nähkurs steht abgesagt. Das ist das Nein. Bei Yoga steht findet statt — das gehört nicht zu deiner Frage."
    },
    {
     "art": "zuordnen",
     "frage": "Wo steckt ein verstecktes Nein?",
     "paare": [
      {
       "l": "Nicht gestattet",
       "r": "Das darfst du nicht"
      },
      {
       "l": "Bitte unterlassen",
       "r": "Hör bitte damit auf"
      },
      {
       "l": "Untersagt",
       "r": "Streng verboten"
      },
      {
       "l": "Zutritt nur für Personal",
       "r": "Für Gäste ist hier Schluss"
      }
     ],
     "erklaerung": "Diese vier Formen liest du auf Schildern statt eines einfachen nein. Besonders untersagt und unterlassen klingen freundlich und meinen doch: verboten."
    },
    {
     "art": "luecke",
     "bild": {
      "art": "schild",
      "zeilen": [
       "Waschmaschine 3",
       "Außer Betrieb",
       "Bitte Maschine 1 oder 2 nehmen"
      ]
     },
     "frage": "Was ist mit Maschine 3? Ergänze den Text.",
     "text": "Maschine 3 ist ___ Betrieb. Heute darfst du sie ___ benutzen.",
     "bank": [
      "nicht",
      "ohne",
      "außer",
      "kein"
     ],
     "loesung": [
      "außer",
      "nicht"
     ],
     "erklaerung": "außer Betrieb ist eine feste Wendung und heißt: läuft nicht. Das Wort außer siehst du hier in einer anderen Rolle als bei geöffnet außer sonntags — merk dir das Paar außer Betrieb als Ganzes."
    },
    {
     "art": "wortklick",
     "zeilen": [
      "Praxis Dr. Naumann",
      "Wir machen keine Hausbesuche"
     ],
     "frage": "Welches Wort sagt dir, dass der Arzt nicht zu dir kommt?",
     "loesung": "keine",
     "erklaerung": "kein und keine verneinen ein Nomen. Ein einziges keine im Satz macht die ganze Aussage zu einem Nein — genau darum ist bei Richtig/Falsch dieses Wort so wichtig."
    },
    {
     "art": "wahl",
     "bild": {
      "art": "uhr",
      "zeit": "18:15"
     },
     "frage": "Am Schalter steht: Annahme von Paketen nicht mehr nach 18 Uhr. Die Uhr zeigt die Zeit von jetzt. Können Sie Ihr Paket noch abgeben?",
     "opt": [
      "Nein, es ist schon zu spät",
      "Ja, bis 19 Uhr geht das",
      "Ja, die Annahme beginnt jetzt"
     ],
     "loesung": 0,
     "erklaerung": "Die Uhr zeigt Viertel nach sechs am Abend, also 18.15 Uhr. Das Wort nicht vor der Zeitangabe verbietet alles nach 18 Uhr. 15 Minuten zu spät sind zu spät."
    },
    {
     "art": "zuordnen",
     "frage": "Was ist hier zu?",
     "paare": [
      {
       "l": "Schalter heute geschlossen",
       "r": "Heute bekommst du hier nichts"
      },
      {
       "l": "Kein Verkauf am Kiosk",
       "r": "Hier kannst du nichts kaufen"
      },
      {
       "l": "Ohne Anmeldung kein Besuch",
       "r": "Du musst dich vorher melden"
      },
      {
       "l": "Betreten der Baustelle verboten",
       "r": "Da darf niemand hinein"
      }
     ],
     "erklaerung": "Vier Wege, nein zu sagen: geschlossen, kein, ohne und verboten. Suche in jedem Aushang zuerst dieses eine Wort, dann weißt du sofort, woran du bist."
    }
   ]
  }
 ],
 "teile": [
  {
   "nr": 1,
   "art": "rf",
   "name": "Kurznachrichten",
   "kurz": "Zwei kurze Texte, fünf Aussagen",
   "was": "In der Prüfung liest du zwei kurze Texte — einen Zettel, eine E-Mail, eine SMS. Dazu stehen fünf Aussagen. Du entscheidest bei jeder: stimmt das oder nicht?",
   "tipp": "Lies zuerst die Aussage, dann such die Stelle im Text. Meistens hängt alles an einem einzigen Wort: einer Uhrzeit, einem Wochentag, einem Namen.",
   "zeichen": "✉️",
   "farbe": "turq",
   "runden": [
    {
     "id": "t1r1",
     "texte": [
      {
       "sorte": "aushang",
       "von": "Kita Sonnenblume",
       "betreff": null,
       "zeilen": [
        "Liebe Eltern,",
        "am Donnerstag ist Elternabend.",
        "Wir treffen uns um 19 Uhr im großen Raum.",
        "Bitte kommen Sie ohne Kinder.",
        "Ihr Kita-Team"
       ]
      },
      {
       "sorte": "zettel",
       "von": "Ali Kaya",
       "betreff": null,
       "zeilen": [
        "Hallo Frau Lindner,",
        "ein Paket für Sie ist bei mir.",
        "Sie können es heute ab 17 Uhr holen.",
        "Ich wohne in Wohnung 12.",
        "Viele Grüße",
        "Ali Kaya"
       ]
      }
     ],
     "aufgaben": [
      {
       "satz": "Der Elternabend beginnt am Vormittag.",
       "loesung": false,
       "stelle": "Wir treffen uns um 19 Uhr im großen Raum.",
       "erklaerung": "Der Elternabend beginnt um 19 Uhr, also am Abend. Am Vormittag ist es viel früher."
      },
      {
       "satz": "Der Elternabend ist am Donnerstag.",
       "loesung": true,
       "stelle": "am Donnerstag ist Elternabend",
       "erklaerung": "Im Aushang steht: „am Donnerstag ist Elternabend“. Der Tag im Satz und der Tag im Text sind gleich."
      },
      {
       "satz": "Die Eltern sollen ihre Kinder mitbringen.",
       "loesung": false,
       "stelle": "Bitte kommen Sie ohne Kinder.",
       "erklaerung": "Im Text steht „ohne Kinder“. Die Eltern sollen also allein kommen."
      },
      {
       "satz": "Frau Lindner kann das Paket am Morgen abholen.",
       "loesung": false,
       "stelle": "Sie können es heute ab 17 Uhr holen.",
       "erklaerung": "Sie kann das Paket erst ab 17 Uhr holen. Das ist am Nachmittag, nicht am Morgen."
      },
      {
       "satz": "Ein Paket für Frau Lindner liegt beim Nachbarn.",
       "loesung": true,
       "stelle": "ein Paket für Sie ist bei mir",
       "erklaerung": "Herr Kaya schreibt: „ein Paket für Sie ist bei mir“. Er ist der Nachbar aus Wohnung 12."
      }
     ]
    },
    {
     "id": "t1r2",
     "texte": [
      {
       "sorte": "email",
       "von": "Bürgeramt Mitte",
       "betreff": "Ihr Termin",
       "zeilen": [
        "Guten Tag Herr Mensah,",
        "Ihr Termin ist am Montag um 10.30 Uhr.",
        "Bitte bringen Sie Ihren Pass mit.",
        "Kommen Sie bitte 10 Minuten früher.",
        "Freundliche Grüße",
        "Bürgeramt Mitte"
       ]
      },
      {
       "sorte": "sms",
       "von": "Praxis Dr. Weber",
       "betreff": null,
       "zeilen": [
        "Guten Tag Frau Novak,",
        "Ihr Termin am Mittwoch fällt leider aus.",
        "Der Arzt ist krank.",
        "Bitte rufen Sie uns an.",
        "Praxis Dr. Weber"
       ]
      }
     ],
     "aufgaben": [
      {
       "satz": "Herr Mensah hat am Montag einen Termin.",
       "loesung": true,
       "stelle": "Ihr Termin ist am Montag um 10.30 Uhr.",
       "erklaerung": "Im Text steht: „Ihr Termin ist am Montag um 10.30 Uhr.“ Der Tag stimmt genau."
      },
      {
       "satz": "Herr Mensah soll genau um 10.30 Uhr kommen.",
       "loesung": false,
       "stelle": "Kommen Sie bitte 10 Minuten früher.",
       "erklaerung": "Er soll 10 Minuten früher kommen, also schon um 10.20 Uhr."
      },
      {
       "satz": "Herr Mensah braucht seinen Pass.",
       "loesung": true,
       "stelle": "Bitte bringen Sie Ihren Pass mit.",
       "erklaerung": "Er soll den Pass mitbringen. Also braucht er ihn für den Termin."
      },
      {
       "satz": "Frau Novak kann am Mittwoch nicht zum Arzt gehen.",
       "loesung": true,
       "stelle": "Ihr Termin am Mittwoch fällt leider aus.",
       "erklaerung": "Der Termin fällt aus. Das heißt: Am Mittwoch gibt es keinen Termin für sie."
      },
      {
       "satz": "Frau Novak soll eine E-Mail schreiben.",
       "loesung": false,
       "stelle": "Bitte rufen Sie uns an.",
       "erklaerung": "Die Praxis schreibt „Bitte rufen Sie uns an“. Sie soll also telefonieren, nicht schreiben."
      }
     ]
    },
    {
     "id": "t1r3",
     "texte": [
      {
       "sorte": "aushang",
       "von": "Hausmeister Schmidt",
       "betreff": null,
       "zeilen": [
        "Liebe Mieter,",
        "die Waschküche ist am Freitag zu.",
        "Eine Maschine ist kaputt.",
        "Am Samstag können Sie wieder waschen.",
        "Hausmeister Schmidt"
       ]
      },
      {
       "sorte": "sms",
       "von": "Marek",
       "betreff": null,
       "zeilen": [
        "Hallo Sabine,",
        "kannst du am Samstag für mich arbeiten?",
        "Ich habe einen Termin beim Zahnarzt.",
        "Ich arbeite dann am Montag für dich.",
        "Danke und Gruß",
        "Marek"
       ]
      }
     ],
     "aufgaben": [
      {
       "satz": "Die Waschküche ist auch am Samstag geschlossen.",
       "loesung": false,
       "stelle": "Am Samstag können Sie wieder waschen.",
       "erklaerung": "Am Samstag ist die Waschküche wieder offen. Nur der Freitag fällt aus."
      },
      {
       "satz": "Am Freitag kann man nicht waschen.",
       "loesung": true,
       "stelle": "die Waschküche ist am Freitag zu",
       "erklaerung": "Die Waschküche ist am Freitag zu. Dann kann niemand waschen."
      },
      {
       "satz": "Marek muss zum Zahnarzt.",
       "loesung": true,
       "stelle": "Ich habe einen Termin beim Zahnarzt.",
       "erklaerung": "Er hat einen Termin beim Zahnarzt. Deshalb kann er nicht arbeiten."
      },
      {
       "satz": "Marek arbeitet am Dienstag für Sabine.",
       "loesung": false,
       "stelle": "Ich arbeite dann am Montag für dich.",
       "erklaerung": "Marek arbeitet am Montag für Sabine, nicht am Dienstag."
      },
      {
       "satz": "Marek möchte die Schicht tauschen.",
       "loesung": true,
       "stelle": "kannst du am Samstag für mich arbeiten?",
       "erklaerung": "Marek fragt, ob Sabine für ihn arbeitet, und er arbeitet später für sie. Das ist ein Tausch."
      }
     ]
    },
    {
     "id": "t1r4",
     "texte": [
      {
       "sorte": "email",
       "von": "Yusuf",
       "betreff": "Mein Geburtstag",
       "zeilen": [
        "Hallo Anna,",
        "am Sonntag habe ich Geburtstag.",
        "Wir feiern bei mir zu Hause.",
        "Die Party fängt um 15 Uhr an.",
        "Bitte bring einen Kuchen mit.",
        "Liebe Grüße",
        "Yusuf"
       ]
      },
      {
       "sorte": "sms",
       "von": "Ihre VHS",
       "betreff": null,
       "zeilen": [
        "Guten Tag,",
        "der Deutschkurs am Dienstag fällt aus.",
        "Die Lehrerin ist krank.",
        "Am Donnerstag ist der Kurs wieder normal.",
        "Ihre VHS"
       ]
      }
     ],
     "aufgaben": [
      {
       "satz": "Die Party beginnt am Nachmittag.",
       "loesung": true,
       "stelle": "Die Party fängt um 15 Uhr an.",
       "erklaerung": "Die Party fängt um 15 Uhr an. 15 Uhr ist Nachmittag."
      },
      {
       "satz": "Yusuf feiert im Restaurant.",
       "loesung": false,
       "stelle": "Wir feiern bei mir zu Hause.",
       "erklaerung": "Yusuf feiert zu Hause. Ein Restaurant steht nicht im Plan."
      },
      {
       "satz": "Anna soll etwas zum Essen mitbringen.",
       "loesung": true,
       "stelle": "Bitte bring einen Kuchen mit.",
       "erklaerung": "Yusuf bittet um einen Kuchen. Ein Kuchen ist etwas zum Essen."
      },
      {
       "satz": "Der Kurs fällt auch am Donnerstag aus.",
       "loesung": false,
       "stelle": "Am Donnerstag ist der Kurs wieder normal.",
       "erklaerung": "Am Donnerstag ist der Kurs wieder normal. Nur der Dienstag fällt aus."
      },
      {
       "satz": "Am Dienstag gibt es keinen Deutschkurs.",
       "loesung": true,
       "stelle": "der Deutschkurs am Dienstag fällt aus",
       "erklaerung": "Der Kurs fällt am Dienstag aus. Das heißt: Es gibt keinen Unterricht."
      }
     ]
    },
    {
     "id": "t1r5",
     "texte": [
      {
       "sorte": "zettel",
       "von": "Lena",
       "betreff": null,
       "zeilen": [
        "Hallo Paul,",
        "mein Fahrrad ist kaputt.",
        "Ich fahre heute mit dem Bus zur Arbeit.",
        "Kannst du das Rad am Abend reparieren?",
        "Danke und bis später!",
        "Lena"
       ]
      },
      {
       "sorte": "email",
       "von": "Oma Ingrid",
       "betreff": "Besuch am Wochenende",
       "zeilen": [
        "Liebe Mira,",
        "am Samstag komme ich zu Besuch.",
        "Mein Zug kommt um 11 Uhr an.",
        "Bitte hol mich am Bahnhof ab.",
        "Ich bleibe bis Sonntag.",
        "Deine Oma Ingrid"
       ]
      }
     ],
     "aufgaben": [
      {
       "satz": "Paul soll das Fahrrad reparieren.",
       "loesung": true,
       "stelle": "Kannst du das Rad am Abend reparieren?",
       "erklaerung": "Lena fragt Paul: „Kannst du das Rad am Abend reparieren?“ Sie bittet ihn also um Hilfe."
      },
      {
       "satz": "Lena fährt heute mit dem Auto zur Arbeit.",
       "loesung": false,
       "stelle": "Ich fahre heute mit dem Bus zur Arbeit.",
       "erklaerung": "Lena nimmt heute den Bus. Ein Auto steht nicht im Text."
      },
      {
       "satz": "Mira soll zum Bahnhof kommen.",
       "loesung": true,
       "stelle": "Bitte hol mich am Bahnhof ab.",
       "erklaerung": "Oma Ingrid möchte am Bahnhof abgeholt werden. Dafür muss Mira zum Bahnhof gehen."
      },
      {
       "satz": "Oma Ingrid kommt am Sonntag an.",
       "loesung": false,
       "stelle": "am Samstag komme ich zu Besuch",
       "erklaerung": "Oma Ingrid kommt am Samstag. Am Sonntag fährt sie wieder nach Hause."
      },
      {
       "satz": "Der Zug von Oma Ingrid kommt am Abend an.",
       "loesung": false,
       "stelle": "Mein Zug kommt um 11 Uhr an.",
       "erklaerung": "Der Zug kommt um 11 Uhr an. Das ist am Vormittag, nicht am Abend."
      }
     ]
    }
   ]
  },
  {
   "nr": 2,
   "art": "anzeigen",
   "name": "Kleinanzeigen",
   "kurz": "Fünf Situationen, je zwei Anzeigen",
   "was": "Du bekommst eine Situation aus dem Alltag und zwei Anzeigen dazu. Nur eine passt. In der echten Prüfung sind es fünf Situationen und zehn Anzeigen.",
   "tipp": "Frag dich vor dem Lesen: Worauf kommt es hier an — auf die Zeit, den Preis, den Ort? Dann such in beiden Anzeigen genau dieses eine Detail.",
   "zeichen": "📰",
   "farbe": "gold",
   "runden": [
    {
     "id": "t2r1",
     "aufgaben": [
      {
       "situation": "Sie suchen eine Wohnung für zwei Personen.",
       "a": {
        "quelle": "Hausverwaltung Nord",
        "zeilen": [
         "Wohnung in der Gartenstraße",
         "1 Zimmer, 30 qm, für 1 Person",
         "420 Euro warm, ab 1. Mai"
        ]
       },
       "b": {
        "quelle": "Hausverwaltung Süd",
        "zeilen": [
         "Wohnung in der Lindenstraße",
         "2 Zimmer, 55 qm, für 2 Personen",
         "650 Euro warm, ab 1. Mai"
        ]
       },
       "loesung": "b",
       "erklaerung": "Du brauchst eine Wohnung für zwei Personen. In Anzeige b steht „für 2 Personen“, in Anzeige a steht „für 1 Person“."
      },
      {
       "situation": "Sie möchten ein gebrauchtes Fahrrad kaufen. Sie haben 100 Euro.",
       "a": {
        "quelle": "Fahrrad Meier",
        "zeilen": [
         "Damenrad gebraucht, 28 Zoll",
         "fährt gut, mit Licht",
         "90 Euro"
        ]
       },
       "b": {
        "quelle": "Radhaus Wagner",
        "zeilen": [
         "Damenrad gebraucht, 28 Zoll",
         "fährt gut, mit Licht",
         "220 Euro"
        ]
       },
       "loesung": "a",
       "erklaerung": "Du hast nur 100 Euro. Das Fahrrad in Anzeige a kostet 90 Euro, das Fahrrad in Anzeige b kostet 220 Euro."
      },
      {
       "situation": "Sie möchten am Abend Deutsch lernen. Am Tag arbeiten Sie.",
       "a": {
        "quelle": "Sprachschule Mitte",
        "zeilen": [
         "Deutschkurs A1",
         "Montag und Mittwoch, 18 bis 20 Uhr",
         "90 Euro im Monat"
        ]
       },
       "b": {
        "quelle": "Volkshochschule Nord",
        "zeilen": [
         "Deutschkurs A1",
         "Dienstag und Donnerstag, 9 bis 11 Uhr",
         "80 Euro im Monat"
        ]
       },
       "loesung": "a",
       "erklaerung": "Du kannst nur am Abend lernen. Der Kurs in Anzeige a ist von 18 bis 20 Uhr, der Kurs in Anzeige b ist am Morgen von 9 bis 11 Uhr."
      },
      {
       "situation": "Sie brauchen einen Tisch. Sie haben kein Auto, der Tisch muss zu Ihnen kommen.",
       "a": {
        "quelle": "Familie Braun",
        "zeilen": [
         "Holztisch, 120 x 80 cm",
         "gut erhalten, 40 Euro",
         "nur Abholung"
        ]
       },
       "b": {
        "quelle": "Familie Kurz",
        "zeilen": [
         "Holztisch, 140 x 80 cm",
         "gut erhalten, 50 Euro",
         "wir bringen den Tisch"
        ]
       },
       "loesung": "b",
       "erklaerung": "Du hast kein Auto. In Anzeige b heißt es „wir bringen den Tisch“, in Anzeige a heißt es „nur Abholung“ – da musst du den Tisch selbst holen."
      },
      {
       "situation": "Sie suchen eine Betreuung für Ihr Kind am Nachmittag.",
       "a": {
        "quelle": "Tagesmutter Anna",
        "zeilen": [
         "Kinderbetreuung bei mir zu Hause",
         "Montag bis Freitag, 13 bis 17 Uhr",
         "6 Euro pro Stunde"
        ]
       },
       "b": {
        "quelle": "Tagesmutter Petra",
        "zeilen": [
         "Kinderbetreuung bei mir zu Hause",
         "Montag bis Freitag, 7 bis 12 Uhr",
         "6 Euro pro Stunde"
        ]
       },
       "loesung": "a",
       "erklaerung": "Du brauchst Hilfe am Nachmittag. Anzeige a ist von 13 bis 17 Uhr, Anzeige b ist am Vormittag von 7 bis 12 Uhr."
      }
     ]
    },
    {
     "id": "t2r2",
     "aufgaben": [
      {
       "situation": "Sie suchen einen Minijob am Wochenende. Von Montag bis Freitag haben Sie keine Zeit.",
       "a": {
        "quelle": "Bäckerei Sonne",
        "zeilen": [
         "Minijob im Verkauf",
         "Samstag und Sonntag, 8 bis 13 Uhr",
         "13 Euro pro Stunde"
        ]
       },
       "b": {
        "quelle": "Café Krone",
        "zeilen": [
         "Minijob im Verkauf",
         "Montag bis Freitag, 8 bis 13 Uhr",
         "13 Euro pro Stunde"
        ]
       },
       "loesung": "a",
       "erklaerung": "Du kannst nur am Wochenende arbeiten. Anzeige a ist am Samstag und Sonntag, Anzeige b ist von Montag bis Freitag."
      },
      {
       "situation": "Sie ziehen am 3. August um. Sie suchen Hilfe für den Umzug.",
       "a": {
        "quelle": "Max und Team",
        "zeilen": [
         "Wir helfen beim Umzug",
         "Zeit am 10. und 11. August",
         "15 Euro pro Stunde"
        ]
       },
       "b": {
        "quelle": "Ali und Freunde",
        "zeilen": [
         "Wir helfen beim Umzug",
         "Zeit am 2. und 3. August",
         "15 Euro pro Stunde"
        ]
       },
       "loesung": "b",
       "erklaerung": "Dein Umzug ist am 3. August. Anzeige b hat am 3. August Zeit, Anzeige a erst am 10. und 11. August."
      },
      {
       "situation": "Sie brauchen einen Hausarzt. Sie sprechen wenig Deutsch, aber gut Englisch.",
       "a": {
        "quelle": "Praxis Dr. Weber",
        "zeilen": [
         "Hausarzt, Bahnhofstraße 12",
         "Termine Montag bis Freitag",
         "Wir sprechen Deutsch und Französisch"
        ]
       },
       "b": {
        "quelle": "Praxis Dr. Klein",
        "zeilen": [
         "Hausarzt, Bahnhofstraße 30",
         "Termine Montag bis Freitag",
         "Wir sprechen Deutsch und Englisch"
        ]
       },
       "loesung": "b",
       "erklaerung": "Du sprichst gut Englisch. In Anzeige b sprechen sie Deutsch und Englisch, in Anzeige a Deutsch und Französisch."
      },
      {
       "situation": "Ihr Sohn ist 8 Jahre alt. Er möchte Fußball spielen.",
       "a": {
        "quelle": "SV Grün-Weiß",
        "zeilen": [
         "Fußball für Kinder von 6 bis 10 Jahren",
         "Training Dienstag, 16 Uhr",
         "8 Euro im Monat"
        ]
       },
       "b": {
        "quelle": "FC Blau",
        "zeilen": [
         "Fußball für Jugendliche von 14 bis 18 Jahren",
         "Training Dienstag, 16 Uhr",
         "8 Euro im Monat"
        ]
       },
       "loesung": "a",
       "erklaerung": "Dein Sohn ist 8 Jahre alt. Anzeige a ist für Kinder von 6 bis 10 Jahren, Anzeige b erst ab 14 Jahren."
      },
      {
       "situation": "Sie möchten Gitarre lernen. Der Unterricht soll bei Ihnen zu Hause sein.",
       "a": {
        "quelle": "Musikschule Ton",
        "zeilen": [
         "Gitarrenunterricht für Anfänger",
         "Unterricht nur bei uns in der Schule",
         "25 Euro pro Stunde"
        ]
       },
       "b": {
        "quelle": "Gitarrenlehrer Jonas",
        "zeilen": [
         "Gitarrenunterricht für Anfänger",
         "Ich komme zu Ihnen nach Hause",
         "28 Euro pro Stunde"
        ]
       },
       "loesung": "b",
       "erklaerung": "Du möchtest Unterricht zu Hause. Jonas in Anzeige b kommt zu dir, die Musikschule in Anzeige a macht Unterricht nur in der Schule."
      }
     ]
    },
    {
     "id": "t2r3",
     "aufgaben": [
      {
       "situation": "Sie suchen eine Putzhilfe für Ihre Wohnung. Sie sind nur am Vormittag zu Hause.",
       "a": {
        "quelle": "Reinigung Blitz",
        "zeilen": [
         "Putzhilfe für Wohnungen",
         "Termine von 16 bis 20 Uhr",
         "20 Euro pro Stunde"
        ]
       },
       "b": {
        "quelle": "Reinigung Klar",
        "zeilen": [
         "Putzhilfe für Wohnungen",
         "Termine von 8 bis 12 Uhr",
         "20 Euro pro Stunde"
        ]
       },
       "loesung": "b",
       "erklaerung": "Du bist nur am Vormittag da. Anzeige b hat Termine von 8 bis 12 Uhr, Anzeige a erst von 16 bis 20 Uhr."
      },
      {
       "situation": "Ihre Waschmaschine ist kaputt. Sie brauchen heute noch Hilfe.",
       "a": {
        "quelle": "Handwerker Schmidt",
        "zeilen": [
         "Reparatur von Waschmaschinen",
         "nächster Termin in 2 Wochen",
         "60 Euro pro Stunde"
        ]
       },
       "b": {
        "quelle": "Handwerker Özdemir",
        "zeilen": [
         "Reparatur von Waschmaschinen",
         "nächster Termin noch heute",
         "70 Euro pro Stunde"
        ]
       },
       "loesung": "b",
       "erklaerung": "Du brauchst Hilfe heute. Anzeige b hat noch heute einen Termin, bei Anzeige a musst du 2 Wochen warten."
      },
      {
       "situation": "Sie brauchen Nachhilfe in Mathe. Sie möchten die Nachhilfe online machen.",
       "a": {
        "quelle": "Lernstudio Plus",
        "zeilen": [
         "Nachhilfe in Mathe",
         "online über Video",
         "20 Euro pro Stunde"
        ]
       },
       "b": {
        "quelle": "Lernstudio Aktiv",
        "zeilen": [
         "Nachhilfe in Mathe",
         "vor Ort in der Schillerstraße 8",
         "20 Euro pro Stunde"
        ]
       },
       "loesung": "a",
       "erklaerung": "Du möchtest online lernen. Anzeige a ist online über Video, Anzeige b ist nur vor Ort in der Schillerstraße."
      },
      {
       "situation": "Sie fahren im Juli in Urlaub. Sie suchen jemanden für Ihre Katze.",
       "a": {
        "quelle": "Tierfreundin Lena",
        "zeilen": [
         "Ich passe auf Katzen auf",
         "im Juli und August",
         "10 Euro pro Tag"
        ]
       },
       "b": {
        "quelle": "Tierfreund Tom",
        "zeilen": [
         "Ich passe auf Hunde auf",
         "im Juli und August",
         "10 Euro pro Tag"
        ]
       },
       "loesung": "a",
       "erklaerung": "Du hast eine Katze. Lena in Anzeige a passt auf Katzen auf, Tom in Anzeige b nur auf Hunde."
      },
      {
       "situation": "Sie möchten ein gebrauchtes Auto kaufen. Sie haben 3000 Euro.",
       "a": {
        "quelle": "Autohaus Nord",
        "zeilen": [
         "VW Golf, Baujahr 2012",
         "120000 km, TÜV neu",
         "4800 Euro"
        ]
       },
       "b": {
        "quelle": "Autohaus West",
        "zeilen": [
         "Opel Corsa, Baujahr 2011",
         "130000 km, TÜV neu",
         "2900 Euro"
        ]
       },
       "loesung": "b",
       "erklaerung": "Du hast 3000 Euro. Das Auto in Anzeige b kostet 2900 Euro, das Auto in Anzeige a kostet 4800 Euro – das ist zu teuer."
      }
     ]
    },
    {
     "id": "t2r4",
     "aufgaben": [
      {
       "situation": "Sie fahren am Freitag mit dem Zug von Berlin nach München. Sie müssen um 12 Uhr in München sein.",
       "a": {
        "quelle": "Reisebüro Bahnfix",
        "zeilen": [
         "Zug Berlin - München, Freitag",
         "ab 6:30 Uhr, an 10:45 Uhr",
         "39 Euro"
        ]
       },
       "b": {
        "quelle": "Reisebüro Tour",
        "zeilen": [
         "Zug Berlin - München, Freitag",
         "ab 12:30 Uhr, an 16:45 Uhr",
         "39 Euro"
        ]
       },
       "loesung": "a",
       "erklaerung": "Du musst um 12 Uhr in München sein. Der Zug in Anzeige a ist um 10:45 Uhr da, der Zug in Anzeige b erst um 16:45 Uhr."
      },
      {
       "situation": "Sie möchten am Sonntag mit Freunden frühstücken.",
       "a": {
        "quelle": "Café Löwe",
        "zeilen": [
         "Frühstücksbuffet für 15 Euro",
         "Samstag und Sonntag, 9 bis 13 Uhr"
        ]
       },
       "b": {
        "quelle": "Café Rose",
        "zeilen": [
         "Frühstücksbuffet für 15 Euro",
         "Montag bis Samstag, 9 bis 13 Uhr"
        ]
       },
       "loesung": "a",
       "erklaerung": "Du möchtest am Sonntag frühstücken. Café Löwe in Anzeige a hat auch am Sonntag Frühstück, Café Rose in Anzeige b nur von Montag bis Samstag."
      },
      {
       "situation": "Sie möchten zum Friseur. Sie haben 20 Euro.",
       "a": {
        "quelle": "Salon Bella",
        "zeilen": [
         "Haare schneiden für Damen und Herren",
         "35 Euro",
         "ohne Termin"
        ]
       },
       "b": {
        "quelle": "Salon Figaro",
        "zeilen": [
         "Haare schneiden für Damen und Herren",
         "18 Euro",
         "ohne Termin"
        ]
       },
       "loesung": "b",
       "erklaerung": "Du hast 20 Euro. Im Salon in Anzeige b kostet das Haareschneiden 18 Euro, im Salon in Anzeige a 35 Euro."
      },
      {
       "situation": "Sie möchten nach der Arbeit um 21 Uhr Sport machen.",
       "a": {
        "quelle": "Fitness Aktiv",
        "zeilen": [
         "Fitnessstudio in der Poststraße",
         "offen von 6 bis 23 Uhr",
         "25 Euro im Monat"
        ]
       },
       "b": {
        "quelle": "Fitness Vital",
        "zeilen": [
         "Fitnessstudio in der Poststraße",
         "offen von 8 bis 20 Uhr",
         "22 Euro im Monat"
        ]
       },
       "loesung": "a",
       "erklaerung": "Du willst um 21 Uhr trainieren. Anzeige a ist bis 23 Uhr offen, Anzeige b macht schon um 20 Uhr zu."
      },
      {
       "situation": "Sie möchten am Sonntag auf den Flohmarkt gehen.",
       "a": {
        "quelle": "Stadtverwaltung Bremen",
        "zeilen": [
         "Flohmarkt am Rathausplatz",
         "jeden Samstag, 8 bis 14 Uhr",
         "Eintritt frei"
        ]
       },
       "b": {
        "quelle": "Marktamt Bremen",
        "zeilen": [
         "Flohmarkt am Hafen",
         "jeden Sonntag, 8 bis 14 Uhr",
         "Eintritt frei"
        ]
       },
       "loesung": "b",
       "erklaerung": "Du hast nur am Sonntag Zeit. Der Flohmarkt in Anzeige b ist jeden Sonntag, der Flohmarkt in Anzeige a jeden Samstag."
      }
     ]
    },
    {
     "id": "t2r5",
     "aufgaben": [
      {
       "situation": "Sie sind krank und können nicht aus dem Haus. Sie brauchen Hilfe beim Einkaufen.",
       "a": {
        "quelle": "Nachbarschaftshilfe Ost",
        "zeilen": [
         "Wir helfen im Garten",
         "Montag bis Freitag",
         "kostenlos"
        ]
       },
       "b": {
        "quelle": "Nachbarschaftshilfe West",
        "zeilen": [
         "Wir kaufen für Sie ein",
         "Montag bis Freitag",
         "kostenlos"
        ]
       },
       "loesung": "b",
       "erklaerung": "Du brauchst Hilfe beim Einkaufen. In Anzeige b kaufen sie für dich ein, in Anzeige a helfen sie nur im Garten."
      },
      {
       "situation": "Sie möchten am Samstag Bücher ausleihen.",
       "a": {
        "quelle": "Stadtbibliothek Mitte",
        "zeilen": [
         "Bücher ausleihen",
         "Montag bis Samstag, 10 bis 18 Uhr",
         "Ausweis 12 Euro im Jahr"
        ]
       },
       "b": {
        "quelle": "Stadtbibliothek Nord",
        "zeilen": [
         "Bücher ausleihen",
         "Montag bis Freitag, 10 bis 18 Uhr",
         "Ausweis 10 Euro im Jahr"
        ]
       },
       "loesung": "a",
       "erklaerung": "Du kannst nur am Samstag kommen. Die Bibliothek in Anzeige a hat bis Samstag offen, die Bibliothek in Anzeige b nur bis Freitag."
      },
      {
       "situation": "Sie möchten mit Ihrer Tochter schwimmen gehen. Sie ist 4 Jahre alt.",
       "a": {
        "quelle": "Schwimmbad Wellenhaus",
        "zeilen": [
         "Schwimmen nur für Erwachsene ab 18 Jahren",
         "täglich 7 bis 22 Uhr",
         "5 Euro"
        ]
       },
       "b": {
        "quelle": "Schwimmbad Delfin",
        "zeilen": [
         "Schwimmen für Familien mit Kindern",
         "täglich 7 bis 22 Uhr",
         "5 Euro"
        ]
       },
       "loesung": "b",
       "erklaerung": "Deine Tochter ist 4 Jahre alt. Anzeige b ist für Familien mit Kindern, Anzeige a nur für Erwachsene ab 18 Jahren."
      },
      {
       "situation": "Ihr Auto muss in die Werkstatt. Sie haben nur am Samstag Zeit.",
       "a": {
        "quelle": "Autowerkstatt Berg",
        "zeilen": [
         "Reparatur und Service",
         "Montag bis Freitag, 8 bis 17 Uhr",
         "Termin nach Anruf"
        ]
       },
       "b": {
        "quelle": "Autowerkstatt Tal",
        "zeilen": [
         "Reparatur und Service",
         "Montag bis Samstag, 8 bis 17 Uhr",
         "Termin nach Anruf"
        ]
       },
       "loesung": "b",
       "erklaerung": "Du hast nur am Samstag Zeit. Die Werkstatt in Anzeige b arbeitet bis Samstag, die Werkstatt in Anzeige a nur bis Freitag."
      },
      {
       "situation": "Ihre Tochter braucht Hilfe bei den Hausaufgaben. Sie kommt um 15 Uhr aus der Schule.",
       "a": {
        "quelle": "Lernhaus Regenbogen",
        "zeilen": [
         "Hausaufgabenhilfe für Kinder",
         "Montag bis Donnerstag, 15 bis 17 Uhr",
         "5 Euro pro Tag"
        ]
       },
       "b": {
        "quelle": "Lernhaus Sonnenschein",
        "zeilen": [
         "Hausaufgabenhilfe für Kinder",
         "Montag bis Donnerstag, 11 bis 13 Uhr",
         "5 Euro pro Tag"
        ]
       },
       "loesung": "a",
       "erklaerung": "Deine Tochter kommt erst um 15 Uhr aus der Schule. Anzeige a beginnt um 15 Uhr, Anzeige b schon um 11 Uhr."
      }
     ]
    }
   ]
  },
  {
   "nr": 3,
   "art": "schild",
   "name": "Schilder & Aushänge",
   "kurz": "Fünf Schilder, fünf Aussagen",
   "was": "Kurze öffentliche Texte: ein Schild an der Tür, ein Aushang im Treppenhaus, ein Hinweis am Automaten. Dazu je eine Aussage — richtig oder falsch?",
   "tipp": "Achte auf die kleinen Wörter: außer, nur, ab, bis, vor, nach. Genau da versteckt sich fast immer die Falle.",
   "zeichen": "🚧",
   "farbe": "rot",
   "runden": [
    {
     "id": "t3r1",
     "aufgaben": [
      {
       "ort": "An der Tür einer Bäckerei",
       "zeilen": [
        "Öffnungszeiten",
        "Montag bis Freitag 6 bis 18 Uhr",
        "Samstag 6 bis 12 Uhr",
        "Sonntag geschlossen"
       ],
       "satz": "Am Samstag um 14 Uhr kann man hier Brötchen kaufen.",
       "loesung": false,
       "stelle": "Samstag 6 bis 12 Uhr",
       "erklaerung": "Am Samstag schließt die Bäckerei schon um 12 Uhr. Um 14 Uhr bekommst du hier nichts mehr."
      },
      {
       "ort": "Im Hausflur neben dem Aufzug",
       "zeilen": [
        "Aufzug außer Betrieb",
        "Reparatur bis Freitag",
        "Bitte benutzen Sie die Treppe."
       ],
       "satz": "Man muss zu Fuß in den vierten Stock gehen.",
       "loesung": true,
       "stelle": "Bitte benutzen Sie die Treppe.",
       "erklaerung": "Der Aufzug funktioniert nicht. Du musst also die Treppe nehmen und zu Fuß nach oben gehen."
      },
      {
       "ort": "An der Tür einer Arztpraxis",
       "zeilen": [
        "Praxis vom 3. bis 7. Juli geschlossen",
        "Vertretung: Dr. Weber, Bahnhofstraße 5",
        "Notfälle bitte ins Krankenhaus"
       ],
       "satz": "Am 5. Juli kann man zu Dr. Weber in die Bahnhofstraße gehen.",
       "loesung": true,
       "stelle": "Vertretung: Dr. Weber, Bahnhofstraße 5",
       "erklaerung": "Die Praxis hat vom 3. bis 7. Juli zu. In dieser Zeit hilft dir Dr. Weber in der Bahnhofstraße."
      },
      {
       "ort": "Aushang im Treppenhaus",
       "zeilen": [
        "Waschküche",
        "Benutzung von 7 bis 20 Uhr",
        "Sonntags nicht waschen",
        "Schlüssel bei Frau Klein, Wohnung 2"
       ],
       "satz": "Am Sonntagnachmittag darf man hier Wäsche waschen.",
       "loesung": false,
       "stelle": "Sonntags nicht waschen",
       "erklaerung": "Sonntags ist Waschen verboten. Der Sonntagnachmittag gehört auch dazu."
      },
      {
       "ort": "Am Fahrkartenautomaten im Bahnhof",
       "zeilen": [
        "Automat nimmt keine Geldscheine",
        "Bitte mit Münzen oder Karte bezahlen"
       ],
       "satz": "Man kann hier mit einem 10-Euro-Schein eine Fahrkarte kaufen.",
       "loesung": false,
       "stelle": "Automat nimmt keine Geldscheine",
       "erklaerung": "Der Automat nimmt nur Münzen oder Karte. Ein 10-Euro-Schein ist ein Geldschein, damit geht es nicht."
      }
     ]
    },
    {
     "id": "t3r2",
     "aufgaben": [
      {
       "ort": "An einer Straße im Stadtzentrum",
       "zeilen": [
        "Straße gesperrt",
        "Bauarbeiten vom 2. bis 20. Mai",
        "Fußgänger können weitergehen."
       ],
       "satz": "Zu Fuß kommt man auch während der Bauarbeiten durch.",
       "loesung": true,
       "stelle": "Fußgänger können weitergehen.",
       "erklaerung": "Autos dürfen hier nicht fahren. Für Fußgänger gibt es aber eine Ausnahme, du kommst zu Fuß durch."
      },
      {
       "ort": "Am Eingang vom Schwimmbad",
       "zeilen": [
        "Schwimmkurs für Anfänger",
        "Start am 6. September",
        "Anmeldung nur an der Kasse",
        "Keine Anmeldung per Telefon"
       ],
       "satz": "Man kann sich telefonisch für den Kurs anmelden.",
       "loesung": false,
       "stelle": "Keine Anmeldung per Telefon",
       "erklaerung": "Anmelden kannst du dich nur an der Kasse. Am Telefon nimmt niemand deine Anmeldung an."
      },
      {
       "ort": "Zettel am Paketautomaten",
       "zeilen": [
        "Automat ist voll",
        "Heute keine Pakete abgeben",
        "Abholen ist möglich."
       ],
       "satz": "Man kann heute sein Paket hier abholen.",
       "loesung": true,
       "stelle": "Abholen ist möglich.",
       "erklaerung": "Nur das Abgeben geht heute nicht. Dein Paket kannst du trotzdem abholen."
      },
      {
       "ort": "Hinweis in der Stadtbibliothek",
       "zeilen": [
        "Bücher 4 Wochen ausleihen",
        "Verlängern nur im Internet",
        "Bitte leise sprechen"
       ],
       "satz": "Zum Verlängern muss man in die Bibliothek kommen.",
       "loesung": false,
       "stelle": "Verlängern nur im Internet",
       "erklaerung": "Verlängern geht nur im Internet. Dafür musst du also nicht in die Bibliothek gehen."
      },
      {
       "ort": "Schild am Spielplatz",
       "zeilen": [
        "Spielplatz für Kinder bis 12 Jahre",
        "Benutzung bis 20 Uhr",
        "Eltern passen auf ihre Kinder auf."
       ],
       "satz": "Ein Kind von 8 Jahren darf hier um 18 Uhr spielen.",
       "loesung": true,
       "stelle": "Spielplatz für Kinder bis 12 Jahre",
       "erklaerung": "Kinder bis 12 Jahre dürfen hier spielen. Und um 18 Uhr ist der Spielplatz noch offen."
      }
     ]
    },
    {
     "id": "t3r3",
     "aufgaben": [
      {
       "ort": "An der Kasse in einem Café",
       "zeilen": [
        "Wir nehmen kein Bargeld",
        "Bitte nur mit Karte bezahlen",
        "Danke für Ihr Verständnis"
       ],
       "satz": "Man muss hier eine Karte dabeihaben.",
       "loesung": true,
       "stelle": "Bitte nur mit Karte bezahlen",
       "erklaerung": "Bargeld nimmt das Café nicht. Ohne Karte kannst du hier nichts bezahlen."
      },
      {
       "ort": "An der Tür vom Supermarkt",
       "zeilen": [
        "Hunde müssen draußen bleiben",
        "Blindenhunde sind erlaubt."
       ],
       "satz": "Ein blinder Mann darf mit seinem Hund in den Supermarkt gehen.",
       "loesung": true,
       "stelle": "Blindenhunde sind erlaubt.",
       "erklaerung": "Normale Hunde warten draußen. Für Blindenhunde steht auf dem Schild eine Ausnahme."
      },
      {
       "ort": "Schild am Bahnsteig",
       "zeilen": [
        "Rauchen verboten",
        "Nur im gelben Bereich am Ende vom Bahnsteig erlaubt",
        "Strafe 50 Euro"
       ],
       "satz": "Auf dem ganzen Bahnsteig darf man nicht rauchen.",
       "loesung": false,
       "stelle": "Nur im gelben Bereich am Ende vom Bahnsteig erlaubt",
       "erklaerung": "Im gelben Bereich darfst du rauchen. Das Verbot gilt also nicht für den ganzen Bahnsteig."
      },
      {
       "ort": "Schild an einer Tür im Kino",
       "zeilen": [
        "Notausgang",
        "Tür bitte frei halten",
        "Nur im Notfall öffnen"
       ],
       "satz": "Nach dem Film kann man durch diese Tür nach draußen gehen.",
       "loesung": false,
       "stelle": "Nur im Notfall öffnen",
       "erklaerung": "Diese Tür ist nur für Notfälle. Nach dem Film nimmst du den normalen Ausgang."
      },
      {
       "ort": "An der Tür vom Schulsekretariat",
       "zeilen": [
        "Sprechstunde",
        "Montag und Mittwoch 8 bis 11 Uhr",
        "Donnerstag 14 bis 16 Uhr",
        "Freitag geschlossen"
       ],
       "satz": "Am Donnerstag um 9 Uhr ist jemand im Sekretariat.",
       "loesung": false,
       "stelle": "Donnerstag 14 bis 16 Uhr",
       "erklaerung": "Am Donnerstag beginnt die Sprechstunde erst um 14 Uhr. Um 9 Uhr ist niemand da."
      }
     ]
    },
    {
     "id": "t3r4",
     "aufgaben": [
      {
       "ort": "Am Pfandautomaten im Supermarkt",
       "zeilen": [
        "Automat nimmt nur Flaschen mit Pfand",
        "Keine Flaschen aus Glas",
        "Bon an der Kasse abgeben"
       ],
       "satz": "Für das Geld muss man noch zur Kasse gehen.",
       "loesung": true,
       "stelle": "Bon an der Kasse abgeben",
       "erklaerung": "Der Automat gibt dir nur einen Bon. Dein Geld bekommst du damit an der Kasse."
      },
      {
       "ort": "Aushang an den Mülltonnen",
       "zeilen": [
        "Feiertag am Donnerstag",
        "Keine Abholung am Donnerstag",
        "Die Tonnen werden am Samstag geleert."
       ],
       "satz": "Der Müll wird diese Woche einen Tag später abgeholt.",
       "loesung": false,
       "stelle": "Die Tonnen werden am Samstag geleert.",
       "erklaerung": "Statt am Donnerstag kommt die Müllabfuhr erst am Samstag. Das sind zwei Tage später, nicht einer."
      },
      {
       "ort": "An der Bushaltestelle",
       "zeilen": [
        "Neuer Fahrplan ab 1. Oktober",
        "Bus 12 fährt jetzt alle 30 Minuten",
        "Am Wochenende alle 60 Minuten"
       ],
       "satz": "Am Sonntag kommt der Bus 12 einmal pro Stunde.",
       "loesung": true,
       "stelle": "Am Wochenende alle 60 Minuten",
       "erklaerung": "Sonntag ist Wochenende. Alle 60 Minuten bedeutet einmal pro Stunde."
      },
      {
       "ort": "An der Tür einer Autowerkstatt",
       "zeilen": [
        "Betriebsferien",
        "vom 20. Dezember bis 6. Januar",
        "Ab 7. Januar sind wir wieder für Sie da."
       ],
       "satz": "Am 8. Januar kann man wieder einen Termin bekommen.",
       "loesung": true,
       "stelle": "Ab 7. Januar sind wir wieder für Sie da.",
       "erklaerung": "Ab dem 7. Januar arbeitet die Werkstatt wieder. Der 8. Januar kommt danach, da ist offen."
      },
      {
       "ort": "Schild auf dem Gehweg",
       "zeilen": [
        "Gehweg gesperrt",
        "Bitte auf der anderen Straßenseite gehen",
        "Umleitung ist mit Pfeilen markiert."
       ],
       "satz": "Man soll hier über die Straße gehen.",
       "loesung": true,
       "stelle": "Bitte auf der anderen Straßenseite gehen",
       "erklaerung": "Der Gehweg ist zu. Du musst über die Straße auf die andere Seite wechseln."
      }
     ]
    },
    {
     "id": "t3r5",
     "aufgaben": [
      {
       "ort": "An einer Tür im Bürogebäude",
       "zeilen": [
        "Kein Zutritt für Unbefugte",
        "Nur für Mitarbeiter",
        "Besucher bitte im Erdgeschoss melden"
       ],
       "satz": "Besucher dürfen hier einfach hineingehen.",
       "loesung": false,
       "stelle": "Besucher bitte im Erdgeschoss melden",
       "erklaerung": "Als Besucher meldest du dich zuerst unten im Erdgeschoss. Einfach hineingehen darfst du nicht."
      },
      {
       "ort": "An der Tür von einem Yoga-Studio",
       "zeilen": [
        "Bitte Schuhe ausziehen",
        "Schuhe ins Regal stellen",
        "Socken nicht vergessen"
       ],
       "satz": "Man geht mit Straßenschuhen in den Raum.",
       "loesung": false,
       "stelle": "Bitte Schuhe ausziehen",
       "erklaerung": "Vor dem Raum ziehst du die Schuhe aus. Mit Straßenschuhen darfst du nicht hinein."
      },
      {
       "ort": "Hinweis im Rathaus",
       "zeilen": [
        "Fundbüro Zimmer 12",
        "Geöffnet Dienstag und Donnerstag 9 bis 12 Uhr",
        "Bitte Ausweis mitbringen"
       ],
       "satz": "Ohne Ausweis bekommt man seine Sachen nicht zurück.",
       "loesung": true,
       "stelle": "Bitte Ausweis mitbringen",
       "erklaerung": "Du musst deinen Ausweis dabeihaben. Ohne Ausweis geben sie dir deine Sachen nicht."
      },
      {
       "ort": "Zettel an einer Haustür",
       "zeilen": [
        "Klingel kaputt",
        "Bitte anrufen: 0170 1234567",
        "Wir machen dann die Tür auf."
       ],
       "satz": "Man soll an die Tür klopfen.",
       "loesung": false,
       "stelle": "Bitte anrufen: 0170 1234567",
       "erklaerung": "Auf dem Zettel steht, dass du anrufen sollst. Klopfen hilft hier nicht."
      },
      {
       "ort": "Aushang im Hausflur",
       "zeilen": [
        "Baustelle im Haus",
        "Lärm von Montag bis Freitag, 8 bis 16 Uhr",
        "Am Wochenende ist es ruhig."
       ],
       "satz": "Am Samstag wird im Haus nicht gearbeitet.",
       "loesung": true,
       "stelle": "Am Wochenende ist es ruhig.",
       "erklaerung": "Samstag gehört zum Wochenende. Da arbeitet niemand auf der Baustelle."
      }
     ]
    }
   ]
  }
 ],
 "laeufe": [
  {
   "id": "p1",
   "titel": "Prüfungslauf 1",
   "minuten": 25,
   "teile": [
    {
     "nr": 1,
     "art": "rf",
     "texte": [
      {
       "sorte": "email",
       "von": "Zahnarztpraxis Bergmann",
       "betreff": "Ihre Kontrolle",
       "zeilen": [
        "Guten Tag Frau Petrova,",
        "Ihre Kontrolle ist am Freitag um 8.30 Uhr.",
        "Bitte bringen Sie Ihre Versichertenkarte mit.",
        "Die Praxis ist im zweiten Stock.",
        "Zahnarztpraxis Bergmann"
       ]
      },
      {
       "sorte": "zettel",
       "von": "Hausverwaltung Kranz",
       "betreff": null,
       "zeilen": [
        "Liebe Mieter,",
        "am Mittwoch lesen wir den Stromzähler ab.",
        "Wir kommen zwischen 9 und 12 Uhr.",
        "Bitte bleiben Sie zu Hause.",
        "Hausverwaltung Kranz"
       ]
      }
     ],
     "aufgaben": [
      {
       "satz": "Frau Petrova hat den Termin am Morgen.",
       "loesung": true,
       "stelle": "Ihre Kontrolle ist am Freitag um 8.30 Uhr.",
       "erklaerung": "Der Termin ist um 8.30 Uhr. Das ist früh am Morgen."
      },
      {
       "satz": "Frau Petrova soll ihre Versichertenkarte mitbringen.",
       "loesung": true,
       "stelle": "Bitte bringen Sie Ihre Versichertenkarte mit.",
       "erklaerung": "In der Mail steht „Bitte bringen Sie Ihre Versichertenkarte mit“. Ohne die Karte geht es nicht."
      },
      {
       "satz": "Die Praxis ist im Erdgeschoss.",
       "loesung": false,
       "stelle": "Die Praxis ist im zweiten Stock.",
       "erklaerung": "Die Praxis ist im zweiten Stock. Du musst also nach oben gehen."
      },
      {
       "satz": "Am Mittwoch kommt jemand in die Wohnung.",
       "loesung": true,
       "stelle": "am Mittwoch lesen wir den Stromzähler ab.",
       "erklaerung": "Am Mittwoch kommt die Hausverwaltung zum Stromzähler. Jemand kommt also zu dir."
      },
      {
       "satz": "Die Mieter können am Vormittag einkaufen gehen.",
       "loesung": false,
       "stelle": "Bitte bleiben Sie zu Hause.",
       "erklaerung": "Die Mieter sollen zwischen 9 und 12 Uhr zu Hause bleiben. Einkaufen geht dann nicht."
      }
     ]
    },
    {
     "nr": 2,
     "art": "anzeigen",
     "aufgaben": [
      {
       "situation": "Sie machen den Führerschein. Sie können nur am Samstag zum Theorieunterricht kommen.",
       "a": {
        "quelle": "Fahrschule Blitz",
        "zeilen": [
         "Theorie für Anfänger",
         "Samstag 10 bis 13 Uhr",
         "20 Euro pro Stunde"
        ]
       },
       "b": {
        "quelle": "Fahrschule Kurve",
        "zeilen": [
         "Theorie für Anfänger",
         "Mittwoch 10 bis 13 Uhr",
         "20 Euro pro Stunde"
        ]
       },
       "loesung": "a",
       "erklaerung": "Du hast nur am Samstag Zeit. Anzeige a hat den Unterricht am Samstag, Anzeige b am Mittwoch."
      },
      {
       "situation": "Sie haben einen alten Schrank. Jemand soll ihn bei Ihnen abholen.",
       "a": {
        "quelle": "Entsorgung Ruhrmann",
        "zeilen": [
         "Sperrmüll",
         "wir holen den Schrank bei Ihnen ab",
         "30 Euro"
        ]
       },
       "b": {
        "quelle": "Wertstoffhof Ostend",
        "zeilen": [
         "Sperrmüll",
         "Sie bringen den Schrank selbst",
         "30 Euro"
        ]
       },
       "loesung": "a",
       "erklaerung": "Der Schrank soll abgeholt werden. In Anzeige a kommt die Firma zu dir, in Anzeige b musst du selbst fahren."
      },
      {
       "situation": "Ihr Hund ist krank. Sie brauchen einen Termin um 18 Uhr.",
       "a": {
        "quelle": "Tierarztpraxis Falk",
        "zeilen": [
         "Sprechstunde für Hunde und Katzen",
         "täglich 8 bis 16 Uhr",
         "Termin nach Anruf"
        ]
       },
       "b": {
        "quelle": "Tierarztpraxis Sommer",
        "zeilen": [
         "Sprechstunde für Hunde und Katzen",
         "täglich 8 bis 20 Uhr",
         "Termin nach Anruf"
        ]
       },
       "loesung": "b",
       "erklaerung": "Um 18 Uhr hat nur Praxis b noch offen. Praxis a schließt schon um 16 Uhr."
      },
      {
       "situation": "Ihre Tochter wird 6 Jahre alt. Sie suchen einen Raum für die Feier am Sonntag.",
       "a": {
        "quelle": "Spielhaus Regenbogen",
        "zeilen": [
         "Raum für Kindergeburtstag",
         "am Samstag frei",
         "60 Euro für 3 Stunden"
        ]
       },
       "b": {
        "quelle": "Kinderland Wiese",
        "zeilen": [
         "Raum für Kindergeburtstag",
         "am Sonntag frei",
         "60 Euro für 3 Stunden"
        ]
       },
       "loesung": "b",
       "erklaerung": "Du feierst am Sonntag. Nur der Raum in Anzeige b ist am Sonntag frei."
      },
      {
       "situation": "Sie möchten einen Kleingarten mieten. Sie haben höchstens 200 Euro im Jahr.",
       "a": {
        "quelle": "Gartenverein Am Bach",
        "zeilen": [
         "Kleingarten mit kleinem Haus",
         "250 qm",
         "180 Euro im Jahr"
        ]
       },
       "b": {
        "quelle": "Gartenverein Sonnenhang",
        "zeilen": [
         "Kleingarten mit kleinem Haus",
         "250 qm",
         "320 Euro im Jahr"
        ]
       },
       "loesung": "a",
       "erklaerung": "Du hast höchstens 200 Euro. Garten a kostet 180 Euro, Garten b kostet 320 Euro."
      }
     ]
    },
    {
     "nr": 3,
     "art": "schild",
     "aufgaben": [
      {
       "ort": "An der Tür der Postfiliale",
       "zeilen": [
        "Postfiliale Lindenplatz",
        "Mo bis Fr 9 bis 18 Uhr",
        "Sa 9 bis 12 Uhr",
        "Mittagspause 13 bis 14 Uhr"
       ],
       "satz": "Am Dienstag um 13.30 Uhr kann man Briefmarken kaufen.",
       "loesung": false,
       "stelle": "Mittagspause 13 bis 14 Uhr",
       "erklaerung": "Zwischen 13 und 14 Uhr ist Mittagspause. Um 13.30 Uhr ist also zu."
      },
      {
       "ort": "Am Tor vom Freibad",
       "zeilen": [
        "Freibad Waldsee",
        "Saison vom 1. Mai bis 15. September",
        "täglich 7 bis 20 Uhr",
        "bei Gewitter geschlossen"
       ],
       "satz": "Im Oktober kann man hier schwimmen.",
       "loesung": false,
       "stelle": "Saison vom 1. Mai bis 15. September",
       "erklaerung": "Das Freibad hat nur bis zum 15. September offen. Im Oktober ist die Saison vorbei."
      },
      {
       "ort": "Schild am Fahrradkeller",
       "zeilen": [
        "Fahrradkeller nur für Mieter",
        "Bitte immer abschließen",
        "kein Platz für Kinderwagen"
       ],
       "satz": "Ein Kinderwagen darf nicht in den Keller.",
       "loesung": true,
       "stelle": "kein Platz für Kinderwagen",
       "erklaerung": "Auf dem Schild steht, dass für Kinderwagen kein Platz ist. Der Keller ist nur für Fahrräder."
      },
      {
       "ort": "Aushang in der Kantine",
       "zeilen": [
        "Warmes Essen 11.30 bis 14 Uhr",
        "Suppe und Salat den ganzen Tag",
        "Bezahlen nur mit Karte"
       ],
       "satz": "Man kann in der Kantine nicht mit Bargeld bezahlen.",
       "loesung": true,
       "stelle": "Bezahlen nur mit Karte",
       "erklaerung": "Du kannst nur mit Karte bezahlen. Geld in bar nimmt die Kantine nicht."
      },
      {
       "ort": "Plakat im Gemeindehaus",
       "zeilen": [
        "Blutspende am Donnerstag",
        "15 bis 19 Uhr im großen Saal",
        "Bitte Ausweis mitbringen",
        "ohne Anmeldung"
       ],
       "satz": "Man muss vorher einen Termin machen.",
       "loesung": false,
       "stelle": "ohne Anmeldung",
       "erklaerung": "Auf dem Plakat steht „ohne Anmeldung“. Du kannst einfach kommen."
      }
     ]
    }
   ]
  },
  {
   "id": "p2",
   "titel": "Prüfungslauf 2",
   "minuten": 25,
   "teile": [
    {
     "nr": 1,
     "art": "rf",
     "texte": [
      {
       "sorte": "sms",
       "von": "Nadia",
       "betreff": null,
       "zeilen": [
        "Hallo Tarek,",
        "ich bin heute krank und komme nicht ins Büro.",
        "Kannst du bitte dem Chef Bescheid sagen?",
        "Morgen gehe ich zum Arzt.",
        "Danke, Nadia"
       ]
      },
      {
       "sorte": "aushang",
       "von": "Hausgemeinschaft Rosenweg",
       "betreff": null,
       "zeilen": [
        "Liebe Nachbarn,",
        "am Samstag ist Sommerfest im Hof.",
        "Wir fangen um 16 Uhr an.",
        "Bitte bringen Sie einen Salat mit.",
        "Für Getränke sorgen wir.",
        "Hausgemeinschaft Rosenweg"
       ]
      }
     ],
     "aufgaben": [
      {
       "satz": "Nadia geht heute zur Arbeit.",
       "loesung": false,
       "stelle": "ich bin heute krank und komme nicht ins Büro.",
       "erklaerung": "Nadia ist krank und bleibt zu Hause. Sie kommt heute nicht ins Büro."
      },
      {
       "satz": "Tarek soll mit dem Chef sprechen.",
       "loesung": true,
       "stelle": "Kannst du bitte dem Chef Bescheid sagen?",
       "erklaerung": "Nadia bittet Tarek, dem Chef Bescheid zu sagen. Er soll also mit dem Chef reden."
      },
      {
       "satz": "Nadia war schon beim Arzt.",
       "loesung": false,
       "stelle": "Morgen gehe ich zum Arzt.",
       "erklaerung": "Nadia geht erst morgen zum Arzt. Heute war sie noch nicht dort."
      },
      {
       "satz": "Das Sommerfest beginnt am Nachmittag.",
       "loesung": true,
       "stelle": "Wir fangen um 16 Uhr an.",
       "erklaerung": "Das Fest fängt um 16 Uhr an. 16 Uhr ist am Nachmittag."
      },
      {
       "satz": "Jeder Nachbar soll Getränke mitbringen.",
       "loesung": false,
       "stelle": "Für Getränke sorgen wir.",
       "erklaerung": "Die Getränke kommen von der Hausgemeinschaft. Du bringst nur einen Salat mit."
      }
     ]
    },
    {
     "nr": 2,
     "art": "anzeigen",
     "aufgaben": [
      {
       "situation": "Sie suchen einen Handyvertrag. Sie möchten jeden Monat kündigen können.",
       "a": {
        "quelle": "Telefonladen Süd",
        "zeilen": [
         "Handyvertrag mit Internet",
         "12 Monate Laufzeit",
         "15 Euro im Monat"
        ]
       },
       "b": {
        "quelle": "Mobilshop Klara",
        "zeilen": [
         "Handyvertrag mit Internet",
         "monatlich kündbar",
         "15 Euro im Monat"
        ]
       },
       "loesung": "b",
       "erklaerung": "Du willst monatlich kündigen. Vertrag b ist monatlich kündbar, Vertrag a läuft 12 Monate."
      },
      {
       "situation": "Sie möchten gebrauchte Kinderkleidung kaufen. Sie haben nur am Samstag Zeit.",
       "a": {
        "quelle": "Second-Hand-Laden Zwergenkiste",
        "zeilen": [
         "Kinderkleidung gebraucht",
         "Mo bis Fr 10 bis 18 Uhr",
         "günstige Preise"
        ]
       },
       "b": {
        "quelle": "Second-Hand-Laden Wichtel",
        "zeilen": [
         "Kinderkleidung gebraucht",
         "Di bis Sa 10 bis 18 Uhr",
         "günstige Preise"
        ]
       },
       "loesung": "b",
       "erklaerung": "Nur Laden b hat am Samstag offen. Laden a schließt schon am Freitag für die Woche."
      },
      {
       "situation": "Sie möchten eine Zeitung lesen, aber nur am Wochenende.",
       "a": {
        "quelle": "Stadtanzeiger Leipzig",
        "zeilen": [
         "Zeitung im Abo",
         "Samstag und Sonntag",
         "12 Euro im Monat"
        ]
       },
       "b": {
        "quelle": "Morgenpost Leipzig",
        "zeilen": [
         "Zeitung im Abo",
         "Montag bis Freitag",
         "12 Euro im Monat"
        ]
       },
       "loesung": "a",
       "erklaerung": "Du liest nur am Wochenende. Abo a kommt Samstag und Sonntag, Abo b nur an Werktagen."
      },
      {
       "situation": "Sie wandern gern. Die Tour soll kurz sein, weil Ihr Kind mitkommt.",
       "a": {
        "quelle": "Wanderverein Bergfreunde",
        "zeilen": [
         "Wanderung am Sonntag",
         "18 km, Start um 9 Uhr",
         "3 Euro"
        ]
       },
       "b": {
        "quelle": "Wanderverein Talblick",
        "zeilen": [
         "Wanderung am Sonntag",
         "6 km, Start um 9 Uhr",
         "3 Euro"
        ]
       },
       "loesung": "b",
       "erklaerung": "Für dein Kind ist eine kurze Tour besser. Tour b ist 6 km lang, Tour a 18 km."
      },
      {
       "situation": "Ihr Toaster ist kaputt. Die Reparatur soll nichts kosten.",
       "a": {
        "quelle": "Repair-Café Nordstadt",
        "zeilen": [
         "Wir reparieren kleine Geräte",
         "Samstag 14 bis 17 Uhr",
         "Hilfe kostenlos"
        ]
       },
       "b": {
        "quelle": "Elektro Baumann",
        "zeilen": [
         "Wir reparieren kleine Geräte",
         "Samstag 14 bis 17 Uhr",
         "Reparatur ab 45 Euro"
        ]
       },
       "loesung": "a",
       "erklaerung": "Du willst nichts bezahlen. Im Repair-Café a ist die Hilfe kostenlos, bei b kostet sie ab 45 Euro."
      }
     ]
    },
    {
     "nr": 3,
     "art": "schild",
     "aufgaben": [
      {
       "ort": "Im Schaufenster vom Optiker",
       "zeilen": [
        "Brillen Hansen",
        "Sehtest kostenlos",
        "nur mit Termin",
        "Telefon 0341 556677"
       ],
       "satz": "Man kann ohne Termin einen Sehtest machen.",
       "loesung": false,
       "stelle": "nur mit Termin",
       "erklaerung": "Der Sehtest kostet nichts, aber du brauchst einen Termin. Einfach hingehen geht nicht."
      },
      {
       "ort": "Aushang in der Apotheke",
       "zeilen": [
        "Impfung gegen Grippe",
        "jeden Mittwoch 14 bis 17 Uhr",
        "Bitte Impfpass mitbringen",
        "Kosten zahlt die Krankenkasse"
       ],
       "satz": "Die Impfung ist für dich kostenlos.",
       "loesung": true,
       "stelle": "Kosten zahlt die Krankenkasse",
       "erklaerung": "Die Krankenkasse zahlt die Impfung. Du musst also nichts bezahlen."
      },
      {
       "ort": "Schild an der Schultür",
       "zeilen": [
        "Elternsprechtag am 12. März",
        "14 bis 18 Uhr",
        "Bitte in die Liste eintragen",
        "ohne Eintrag kein Gespräch"
       ],
       "satz": "Man kann auch ohne Anmeldung mit den Lehrern sprechen.",
       "loesung": false,
       "stelle": "ohne Eintrag kein Gespräch",
       "erklaerung": "Du musst dich in die Liste eintragen. Ohne Eintrag gibt es kein Gespräch."
      },
      {
       "ort": "Plakat am Marktplatz",
       "zeilen": [
        "Weihnachtsmarkt",
        "28. November bis 23. Dezember",
        "täglich 11 bis 21 Uhr",
        "am 24. Dezember geschlossen"
       ],
       "satz": "Am 24. Dezember ist der Markt zu.",
       "loesung": true,
       "stelle": "am 24. Dezember geschlossen",
       "erklaerung": "Auf dem Plakat steht, dass der Markt am 24. Dezember geschlossen ist."
      },
      {
       "ort": "Schild am Grillplatz im Park",
       "zeilen": [
        "Grillen erlaubt von 10 bis 22 Uhr",
        "Bitte die Kohle nicht ins Gras werfen",
        "Musik nur leise"
       ],
       "satz": "Um 23 Uhr darf man hier noch grillen.",
       "loesung": false,
       "stelle": "Grillen erlaubt von 10 bis 22 Uhr",
       "erklaerung": "Grillen ist nur bis 22 Uhr erlaubt. Um 23 Uhr ist Schluss."
      }
     ]
    }
   ]
  }
 ]
};
