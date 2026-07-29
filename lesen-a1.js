/* ============================================================
   deutschoderwas club — LESEN A1 (Start Deutsch 1)

   Die Daten für das Lesetraining. Aufbau nach der offiziellen
   Testbeschreibung des Goethe-Instituts (Prüfungsziele
   Testbeschreibung A1 SD1): drei Teile, 15 Aufgaben, je ein
   Punkt, circa 25 Minuten, ein Viertel der Gesamtprüfung.

     Teil 1  zwei Kurztexte, fünf Richtig/Falsch-Aussagen
     Teil 2  fünf Situationen, je zwei Kleinanzeigen (a oder b)
     Teil 3  fünf Schilder und Aushänge, Richtig/Falsch

   Hier liegen pro Teil fünf Runden à fünf Aufgaben, also
   75 Aufgaben — fünfmal so viel wie eine echte Prüfung, damit
   man wirklich üben und nicht nur einmal durchklicken kann.

   Das Feld stelle ist die wörtliche Textstelle, die die Antwort
   beweist. Der Trainer markiert sie nach dem Antworten gelb im
   Text — Lesen lernt man daran, WO die Antwort stand, nicht
   daran, dass sie falsch war.
   ============================================================ */
window.LESEN_A1 = {
 "niveau": "A1",
 "pruefung": "Start Deutsch 1",
 "minuten": 25,
 "punkte": 15,
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
 ]
};
