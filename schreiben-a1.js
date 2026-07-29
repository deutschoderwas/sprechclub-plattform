/* ============================================================
   deutschoderwas club — SCHREIBEN A1 (Start Deutsch 1)

   Aufbau nach der offiziellen Testbeschreibung des Goethe-
   Instituts: zwei Teile, circa 20 Minuten, 15 Punkte.

     Teil 1  Formular, fünf Lücken, je ein Punkt      =  5 Punkte
     Teil 2  Mitteilung, drei Leitpunkte à 3 Punkte
             plus ein Punkt für Anrede und Gruß       = 10 Punkte

   Schreiben ist anders als Lesen und Hören: Es gibt keine eine
   richtige Antwort. Deshalb wird auch anders geprüft.

   Teil 1 ist objektiv prüfbar. Jedes Lückenfeld hat ein Array
   loesung mit ALLEN vernünftigen Schreibweisen — bei Daten also
   03.05.1994 genauso wie 3.5.1994 oder 3. März 1994. Der Lernende
   soll an der Sache scheitern, nicht an einem Punkt.

   Teil 2 wird nach denselben Kriterien geprüft wie in der echten
   Prüfung: Sind die drei Leitpunkte da? Gibt es Anrede und Gruß?
   Ist der Text verständlich? Anrede, Gruß und Wortzahl kann der
   Browser selbst nachsehen. Für die drei Inhaltspunkte und die
   Sprache gibt es die KI-Korrektur (api/ai-schreiben) — fehlt sie,
   greift die Musterlösung mit Selbstcheck.

   In den Formulartexten sind Zahlen AUSGESCHRIEBEN. Das ist kein
   Versehen: Das Übertragen von neunzehnhundertvierundneunzig nach
   1994 ist genau die Leistung, die die Prüfung verlangt.
   ============================================================ */
window.SCHREIBEN_A1 = {
 "niveau": "A1",
 "pruefung": "Start Deutsch 1",
 "minuten": 20,
 "punkte": 15,
 "stufen": [
  {
   "nr": 1,
   "titel": "Die Wörter im Formular",
   "zeichen": "📋",
   "was": "Teil 1 der Prüfung ist reines Abschreiben — aber nur, wenn du weißt, was Familienstand, Staatsangehörigkeit und Geburtsname bedeuten. Hier lernst du die Feldnamen."
  },
  {
   "nr": 2,
   "titel": "Die Bausteine einer Mitteilung",
   "zeichen": "🧱",
   "was": "Anrede, Grund, Bitte, Gruß. Eine A1-Mitteilung hat immer dieselben Teile — wer sie kennt, schreibt sie in fünf Minuten."
  },
  {
   "nr": 3,
   "titel": "Die zwei Aufgabentypen",
   "zeichen": "✍️",
   "was": "Jetzt echte Prüfungsaufgaben: fünf Formulare zum Ausfüllen und zehn Mitteilungen zum Schreiben."
  },
  {
   "nr": 4,
   "titel": "Die ganze Prüfung",
   "zeichen": "⏱️",
   "was": "Formular und Mitteilung zusammen, 20 Minuten, die Uhr läuft. So wie am Prüfungstag."
  }
 ],
 "bloecke": [
  {
   "id": "s1b1",
   "titel": "Name, Geburt, Herkunft",
   "hinweis": "Bevor du ein ganzes Formular ausfüllst: Verstehst du die Wörter? Drei Möglichkeiten, eine ist richtig.",
   "aufgaben": [
    {
     "art": "wahl",
     "frage": "Im Formular steht: Familienname. Die Frau heißt Sofia Rossi. Was schreibt sie dort hinein?",
     "opt": [
      "Rossi",
      "Sofia",
      "Sofia Rossi"
     ],
     "loesung": 0,
     "erklaerung": "Familienname ist der Name der Familie, hier also Rossi. Wenn du irgendwo „Nachname“ liest, ist genau dasselbe gemeint."
    },
    {
     "art": "wahl",
     "frage": "Im Formular steht: Vorname. Der Mann heißt Ahmed Bakir. Was schreibt er dort hinein?",
     "opt": [
      "Herr",
      "Bakir",
      "Ahmed"
     ],
     "loesung": 2,
     "erklaerung": "Der Vorname steht in Deutschland vor dem Familiennamen, also Ahmed. Herr ist nur die Anrede, das schreibst du hier nicht hin."
    },
    {
     "art": "wahl",
     "frage": "Im Formular steht: Geburtsname. Frau Klein heißt seit der Hochzeit Klein. Vorher hieß sie Öztürk. Was schreibt sie dort hinein?",
     "opt": [
      "Klein",
      "Öztürk",
      "Frau"
     ],
     "loesung": 1,
     "erklaerung": "Der Geburtsname ist dein Name vor der Hochzeit, hier Öztürk. Klein schreibst du ins Feld „Familienname“."
    },
    {
     "art": "wahl",
     "frage": "Im Formular steht: Geburtsdatum. Jonas ist am zweiten April neunzehnhundertneunzig geboren. Was schreibt er dort hinein?",
     "opt": [
      "Berlin",
      "zweiunddreißig Jahre",
      "02.04.1990"
     ],
     "loesung": 2,
     "erklaerung": "Beim Geburtsdatum schreibst du Tag, Monat und Jahr mit Ziffern: 02.04.1990. Die Stadt gehört ins Feld „Geburtsort“."
    },
    {
     "art": "wahl",
     "frage": "Im Formular steht: Geburtsort. Lucia ist in Lima geboren und wohnt jetzt in Essen. Was schreibt sie dort hinein?",
     "opt": [
      "Lima",
      "Essen",
      "Peru"
     ],
     "loesung": 0,
     "erklaerung": "Der Geburtsort ist die Stadt, in der du geboren bist – hier Lima. Essen ist der Wohnort, Peru wäre das Land."
    },
    {
     "art": "wahl",
     "frage": "Im Formular steht: Staatsangehörigkeit. Rafael hat einen Pass aus Brasilien. Was schreibt er dort hinein?",
     "opt": [
      "Rafael",
      "brasilianisch",
      "Sao Paulo"
     ],
     "loesung": 1,
     "erklaerung": "Die Staatsangehörigkeit sagt, welchen Pass du hast. Du schreibst das Adjektiv, hier also brasilianisch."
    },
    {
     "art": "wahl",
     "frage": "Im Formular steht: Familienstand. Frau Ivanova war verheiratet, aber die Ehe ist zu Ende. Was schreibt sie dort hinein?",
     "opt": [
      "ledig",
      "verheiratet",
      "geschieden"
     ],
     "loesung": 2,
     "erklaerung": "Beim Familienstand hast du drei Möglichkeiten: ledig, wenn du nie verheiratet warst, verheiratet und geschieden. Bei Frau Ivanova ist die Ehe zu Ende, also geschieden."
    },
    {
     "art": "wahl",
     "frage": "Im Formular steht: Beruf. Herr Okafor repariert Autos in einer Werkstatt. Was schreibt er dort hinein?",
     "opt": [
      "Werkstatt Süd",
      "Automechaniker",
      "Auto"
     ],
     "loesung": 1,
     "erklaerung": "Beim Beruf schreibst du, was du bist, nicht wo du arbeitest: Automechaniker. Der Name der Firma gehört ins Feld „Arbeitgeber“."
    }
   ],
   "stufe": 1,
   "kurz": "Familienname, Geburtsname, Staatsangehörigkeit",
   "ziel": "Nach diesem Block weißt du bei den ersten acht Feldern sofort, was dort hingehört.",
   "zeichen": "👤",
   "farbe": "turq"
  },
  {
   "id": "s1b2",
   "titel": "Adresse und Kontakt",
   "hinweis": "Die zweite Hälfte des Formulars: Wo wohnst du, wie erreicht man dich, und was gehört ganz unten hin?",
   "aufgaben": [
    {
     "art": "wahl",
     "frage": "Im Formular stehen zwei Felder: Straße und Hausnummer. Nadia wohnt Blumenweg zwölf. Was schreibt sie bei Hausnummer hinein?",
     "opt": [
      "Blumenweg",
      "12",
      "Nadia"
     ],
     "loesung": 1,
     "erklaerung": "Die Hausnummer ist nur die Zahl nach dem Straßennamen, also 12. Blumenweg schreibst du ins Feld „Straße“."
    },
    {
     "art": "wahl",
     "frage": "Im Formular steht: Postleitzahl. Herr Sow wohnt in 10115 Berlin. Was schreibt er dort hinein?",
     "opt": [
      "Berlin",
      "10115",
      "Deutschland"
     ],
     "loesung": 1,
     "erklaerung": "Die Postleitzahl, kurz PLZ, hat in Deutschland immer fünf Ziffern und steht vor dem Ort. Berlin schreibst du ins Feld „Wohnort“."
    },
    {
     "art": "wahl",
     "frage": "Im Formular steht: Wohnort. Ayse arbeitet in Frankfurt und wohnt in Offenbach. Was schreibt sie dort hinein?",
     "opt": [
      "Offenbach",
      "Frankfurt",
      "Hessen"
     ],
     "loesung": 0,
     "erklaerung": "Der Wohnort ist die Stadt, in der du wohnst – hier Offenbach. Wo du arbeitest, fragt das Formular nicht."
    },
    {
     "art": "wahl",
     "frage": "Im Formular steht: Handynummer. Welche Nummer gehört dort hinein?",
     "opt": [
      "die Nummer vom Festnetz zu Hause",
      "die Nummer von deinem Arzt",
      "die Nummer von deinem Mobiltelefon"
     ],
     "loesung": 2,
     "erklaerung": "Handy heißt in Deutschland Mobiltelefon, hier gehört also deine mobile Nummer hinein. Die Nummer bei dir zu Hause schreibst du ins Feld „Telefonnummer“."
    },
    {
     "art": "wahl",
     "frage": "Im Formular steht: E-Mail-Adresse. Welche Angabe passt?",
     "opt": [
      "maria.silva@web.de",
      "Maria Silva",
      "Hauptstraße 4"
     ],
     "loesung": 0,
     "erklaerung": "Eine E-Mail-Adresse erkennst du am @ in der Mitte. Deine Adresse mit Straße gehört in ein anderes Feld."
    },
    {
     "art": "wahl",
     "frage": "Im Formular steht: Arbeitgeber. Frau Petrova ist Verkäuferin bei der Firma Meyer und Sohn. Was schreibt sie dort hinein?",
     "opt": [
      "Verkäuferin",
      "Petrova",
      "Meyer und Sohn"
     ],
     "loesung": 2,
     "erklaerung": "Der Arbeitgeber ist die Firma, die dich bezahlt: Meyer und Sohn. Verkäuferin ist der Beruf."
    },
    {
     "art": "wahl",
     "frage": "Im Formular steht: Geschlecht. Herr Diallo macht ein Kreuz. Wo macht er das Kreuz?",
     "opt": [
      "männlich",
      "weiblich",
      "divers"
     ],
     "loesung": 0,
     "erklaerung": "Als Mann kreuzt du männlich an, als Frau weiblich. Divers gibt es in Deutschland für Menschen, die weder männlich noch weiblich sind."
    },
    {
     "art": "wahl",
     "frage": "Im Formular steht ganz unten: Unterschrift. Was machst du dort?",
     "opt": [
      "Du schreibst dort das Datum von heute",
      "Du schreibst dort deinen Namen mit der Hand",
      "Du schreibst dort deine Adresse"
     ],
     "loesung": 1,
     "erklaerung": "Die Unterschrift ist dein Name, mit der Hand geschrieben. Das Datum von heute kommt in das Feld daneben, es heißt einfach „Datum“."
    }
   ],
   "stufe": 1,
   "kurz": "Straße, Postleitzahl, Wohnort, Unterschrift",
   "ziel": "Nach diesem Block füllst du auch die untere Hälfte ohne Zögern aus.",
   "zeichen": "🏠",
   "farbe": "turq"
  },
  {
   "id": "s2b1",
   "titel": "Anrede, Bitte, Gruß",
   "hinweis": "Diese Wendungen kommen in fast jeder Mitteilung vor. Wer sie im Kopf hat, muss sie nicht mehr suchen.",
   "aufgaben": [
    {
     "art": "wahl",
     "frage": "Du schreibst deiner Lehrerin Frau Berger. Wie fängst du an?",
     "opt": [
      "Liebe Frau Berger,",
      "Hallo Berger,",
      "Sehr geehrte Frau Berger!"
     ],
     "loesung": 0,
     "erklaerung": "Zu einer Lehrerin, die du kennst, passt Liebe Frau Berger. Nach der Anrede steht ein Komma, danach geht es klein weiter."
    },
    {
     "art": "wahl",
     "frage": "Du schreibst eine E-Mail an eine Sprachschule. Du kennst dort niemanden. Wie fängst du an?",
     "opt": [
      "Hallo Sprachschule,",
      "Sehr geehrte Damen und Herren,",
      "Liebe Sprachschule,"
     ],
     "loesung": 1,
     "erklaerung": "Wenn du keinen Namen weißt, schreibst du Sehr geehrte Damen und Herren. Das passt immer, wenn du an eine Firma, eine Schule oder ein Amt schreibst."
    },
    {
     "art": "wahl",
     "frage": "Du schreibst deinem Freund Tobias. Wie fängst du an?",
     "opt": [
      "Lieber Tobias,",
      "Sehr geehrter Tobias,",
      "Guten Tag Herr Tobias,"
     ],
     "loesung": 0,
     "erklaerung": "Bei einem Mann heißt es Lieber, bei einer Frau Liebe. Sehr geehrter passt nur zu fremden Menschen, nicht zu deinem Freund."
    },
    {
     "art": "wahl",
     "frage": "Welcher Anfang ist richtig geschrieben?",
     "opt": [
      "Liebe Frau Berger, Leider kann ich heute nicht kommen.",
      "Liebe Frau Berger. leider kann ich heute nicht kommen.",
      "Liebe Frau Berger,\nleider kann ich heute nicht kommen."
     ],
     "loesung": 2,
     "erklaerung": "Nach der Anrede steht ein Komma, kein Punkt. Das nächste Wort schreibst du klein weiter – hier also leider."
    },
    {
     "art": "wahl",
     "frage": "Du schreibst an deinen Vermieter Herrn Schulz. Wie beendest du die E-Mail?",
     "opt": [
      "Mit freundlichen Grüßen",
      "Tschüss und bis dann",
      "Dein Mieter"
     ],
     "loesung": 0,
     "erklaerung": "Mit freundlichen Grüßen ist der formelle Gruß für Vermieter, Ämter und Firmen. Danach kommt in der nächsten Zeile dein Name, ohne Komma."
    },
    {
     "art": "wahl",
     "frage": "Du schreibst deiner Freundin Carla eine SMS. Wie beendest du sie?",
     "opt": [
      "Mit freundlichen Grüßen",
      "Liebe Grüße",
      "Hochachtungsvoll"
     ],
     "loesung": 1,
     "erklaerung": "Zu Freunden passen Liebe Grüße oder Bis bald. Mit freundlichen Grüßen klingt hier viel zu kalt."
    },
    {
     "art": "wahl",
     "frage": "Du kannst heute nicht zum Kurs kommen. Wie entschuldigst du dich freundlich?",
     "opt": [
      "Ich komme heute nicht.",
      "Leider kann ich heute nicht kommen.",
      "Heute kein Kurs für mich."
     ],
     "loesung": 1,
     "erklaerung": "Mit leider zeigst du, dass es dir leidtut – das gehört zu einer höflichen Absage. Ich komme heute nicht ist zwar richtig, klingt aber sehr hart."
    },
    {
     "art": "wahl",
     "frage": "Du nennst deinen Grund mit weil. Welcher Satz ist richtig?",
     "opt": [
      "Ich komme nicht, weil ich bin krank.",
      "Ich komme nicht, weil krank ich bin.",
      "Ich komme nicht, weil ich krank bin."
     ],
     "loesung": 2,
     "erklaerung": "Nach weil steht das Verb ganz am Ende: weil ich krank bin. Wenn dir das zu schwer ist, schreib einfach zwei kurze Sätze: Ich komme nicht. Ich bin krank."
    },
    {
     "art": "wahl",
     "frage": "Du bittest deine Lehrerin höflich um die Hausaufgaben. Was schreibst du?",
     "opt": [
      "Können Sie mir bitte die Hausaufgaben schicken?",
      "Schicken Sie die Hausaufgaben!",
      "Ich will die Hausaufgaben."
     ],
     "loesung": 0,
     "erklaerung": "Eine Bitte an eine fremde oder ältere Person beginnt mit Können Sie bitte … und endet mit einem Fragezeichen. Ich will klingt in Deutschland unhöflich."
    },
    {
     "art": "wahl",
     "frage": "Du bittest deine Freundin Elena um Hilfe. Was passt?",
     "opt": [
      "Kannst du mir bitte helfen?",
      "Können du mir bitte helfen?",
      "Kannst Sie mir bitte helfen?"
     ],
     "loesung": 0,
     "erklaerung": "Zu einer Freundin sagst du du: Kannst du mir bitte helfen? Mische nie du und Sie in einer Mitteilung."
    },
    {
     "art": "wahl",
     "frage": "Du machst deiner Freundin einen Vorschlag für das Treffen. Was passt?",
     "opt": [
      "Wie wäre es mit Samstag um 18 Uhr?",
      "Samstag 18 Uhr, fertig.",
      "Ich möchte Samstag, du auch."
     ],
     "loesung": 0,
     "erklaerung": "Wie wäre es mit … ist ein freundlicher Vorschlag. Du kannst auch fragen: Hast du am Samstag Zeit?"
    },
    {
     "art": "wahl",
     "frage": "Dein Nachbar hat dir geholfen. Wie bedankst du dich?",
     "opt": [
      "Danke, kein Problem.",
      "Vielen Dank für Ihre Hilfe!",
      "Sie haben geholfen, gut."
     ],
     "loesung": 1,
     "erklaerung": "Vielen Dank für Ihre Hilfe ist kurz, höflich und passt immer. Zu einem Freund sagst du Vielen Dank für deine Hilfe."
    }
   ],
   "stufe": 2,
   "kurz": "Die festen Wendungen einer Nachricht",
   "ziel": "Nach diesem Block weißt du bei jeder Person, wie du anfängst und wie du aufhörst.",
   "zeichen": "✉️",
   "farbe": "gold"
  },
  {
   "id": "s2b2",
   "titel": "Die richtige Reihenfolge",
   "hinweis": "Eine Mitteilung hat immer denselben Aufbau. Tippe die Teile in der richtigen Reihenfolge an.",
   "aufgaben": [
    {
     "art": "ordnen",
     "frage": "Bring die Mitteilung in die richtige Reihenfolge.",
     "teile": [
      "Liebe Frau Berger,",
      "ich bin krank und kann morgen nicht kommen.",
      "Können Sie mir die Hausaufgaben schicken?",
      "Viele Grüße",
      "Amina"
     ],
     "erklaerung": "Eine Mitteilung hat immer dieselbe Reihenfolge: Anrede, Grund, Bitte, Gruß, Name."
    },
    {
     "art": "ordnen",
     "frage": "Bring den Zettel für die Nachbarin in die richtige Reihenfolge.",
     "teile": [
      "Hallo Frau Novak,",
      "ich fahre am Freitag für eine Woche in Urlaub.",
      "Können Sie bitte meine Blumen gießen?",
      "Der Schlüssel liegt bei meiner Schwester.",
      "Liebe Grüße",
      "Sanjay"
     ],
     "erklaerung": "Zuerst sagst du, was los ist, dann kommt die Bitte. Die kleine Zusatzinfo mit dem Schlüssel steht danach, nicht vor der Bitte."
    },
    {
     "art": "ordnen",
     "frage": "Bring die E-Mail an die Arztpraxis in die richtige Reihenfolge.",
     "teile": [
      "Sehr geehrte Damen und Herren,",
      "ich habe am Dienstag um 10 Uhr einen Termin.",
      "Leider muss ich arbeiten und kann nicht kommen.",
      "Bitte geben Sie mir einen neuen Termin.",
      "Mit freundlichen Grüßen",
      "Hiroshi Tanaka"
     ],
     "erklaerung": "Sag zuerst, um welchen Termin es geht – sonst weiß die Praxis nicht, wer du bist. Erst danach kommen Absage und Bitte."
    },
    {
     "art": "ordnen",
     "frage": "Bring die Einladung in die richtige Reihenfolge.",
     "teile": [
      "Liebe Elena,",
      "am Samstag habe ich Geburtstag.",
      "Ich koche für alle Freunde.",
      "Hast du um 19 Uhr Zeit?",
      "Bis bald",
      "Carla"
     ],
     "erklaerung": "Erst der Anlass, dann die Einladung, dann die Frage nach der Zeit. Bis bald ist ein lockerer Gruß für Freunde."
    },
    {
     "art": "ordnen",
     "frage": "Bring den kurzen Dank in die richtige Reihenfolge.",
     "teile": [
      "Lieber Herr Baumann,",
      "vielen Dank für Ihre Hilfe beim Umzug!",
      "Viele Grüße",
      "Marek"
     ],
     "erklaerung": "Auch eine ganz kurze Mitteilung braucht Anrede, Gruß und Namen. Ohne diese drei Teile verlierst du in der Prüfung Punkte."
    },
    {
     "art": "ordnen",
     "frage": "Bring die E-Mail an den Vermieter in die richtige Reihenfolge.",
     "teile": [
      "Sehr geehrter Herr Schulz,",
      "in meiner Küche kommt Wasser aus der Wand.",
      "Können Sie bitte einen Handwerker schicken?",
      "Mit freundlichen Grüßen",
      "Linda Fischer"
     ],
     "erklaerung": "Beschreibe zuerst das Problem, dann bitte um Hilfe. Bei einem Vermieter schreibst du Sehr geehrter Herr … und Mit freundlichen Grüßen."
    }
   ],
   "stufe": 2,
   "kurz": "Anrede · Grund · Bitte · Gruß · Name",
   "ziel": "Nach diesem Block schreibst du den Aufbau ohne Nachdenken — er sitzt.",
   "zeichen": "🔢",
   "farbe": "gold"
  }
 ],
 "teile": [
  {
   "nr": 1,
   "art": "formular",
   "name": "Formular ausfüllen",
   "kurz": "Fünf Felder aus dem Text",
   "was": "Ein kurzer Text beschreibt eine Person. Daneben steht ein Formular, in dem fünf Felder fehlen. Alle Angaben stehen im Text — du musst sie nur finden und richtig hinschreiben.",
   "tipp": "Lies erst das Formularfeld, dann such im Text. Geburtsdatum schreibst du kurz: 03.05.1994. Und pass auf bei Geburtsort und Wohnort — das sind zwei verschiedene Städte.",
   "zeichen": "📋",
   "farbe": "turq",
   "punkte": 5,
   "runden": [
    {
     "id": "w1r1",
     "situation": "Ihre Nachbarin Farida Haddad möchte einen Deutschkurs an der Volkshochschule machen. Sie helfen ihr beim Anmeldeformular.",
     "text": "Farida Haddad ist am siebten März neunzehnhundertneunundachtzig in Tunis geboren. Sie hat einen tunesischen Pass. Farida wohnt in der Ahornstraße neun in fünfzig sechshundertsiebenundsechzig Köln. Sie ist ledig. Sie arbeitet als Friseurin und möchte einen Deutschkurs am Vormittag machen.",
     "formular": {
      "titel": "Volkshochschule Köln — Anmeldung Deutschkurs",
      "zeilen": [
       {
        "feld": "Familienname",
        "wert": "Haddad"
       },
       {
        "feld": "Vorname",
        "loesung": [
         "Farida"
        ]
       },
       {
        "feld": "Geburtsdatum",
        "loesung": [
         "07.03.1989",
         "7.3.1989",
         "7. März 1989",
         "07.03.89",
         "7.03.1989"
        ]
       },
       {
        "feld": "Geburtsort",
        "loesung": [
         "Tunis"
        ]
       },
       {
        "feld": "Staatsangehörigkeit",
        "wert": "tunesisch"
       },
       {
        "feld": "Straße, Hausnummer",
        "wert": "Ahornstraße 9"
       },
       {
        "feld": "PLZ, Wohnort",
        "loesung": [
         "50667 Köln",
         "50667, Köln",
         "50667  Köln",
         "50667 Koeln"
        ]
       },
       {
        "feld": "Familienstand",
        "loesung": [
         "ledig",
         "Ledig"
        ]
       },
       {
        "feld": "Beruf",
        "wert": "Friseurin"
       },
       {
        "feld": "Kurs",
        "wert": "Deutsch A1, vormittags"
       }
      ]
     },
     "erklaerung": "Das Geburtsdatum steht im Text ausgeschrieben – im Formular schreibst du es kurz mit Ziffern: 07.03.1989. Bei „PLZ, Wohnort“ gehören beide Angaben in eine Zeile: 50667 Köln."
    },
    {
     "id": "w1r2",
     "situation": "Ihr Freund Danylo Kovalenko möchte einen Bibliotheksausweis. Sie helfen ihm beim Anmeldeformular.",
     "text": "Danylo Kovalenko kommt aus der Ukraine. Er ist am zwölften Januar zweitausendeins in Lwiw geboren. Jetzt wohnt er in der Gartenstraße vierundzwanzig in null vier eins null neun Leipzig. Danylo ist Student. Seine E-Mail-Adresse ist danylo punkt kovalenko at mail punkt de. Er möchte Bücher und Filme ausleihen.",
     "formular": {
      "titel": "Stadtbibliothek Leipzig — Antrag Bibliotheksausweis",
      "zeilen": [
       {
        "feld": "Familienname",
        "wert": "Kovalenko"
       },
       {
        "feld": "Vorname",
        "loesung": [
         "Danylo"
        ]
       },
       {
        "feld": "Geburtsdatum",
        "loesung": [
         "12.01.2001",
         "12.1.2001",
         "12. Januar 2001",
         "12.01.01"
        ]
       },
       {
        "feld": "Straße, Hausnummer",
        "loesung": [
         "Gartenstraße 24",
         "Gartenstr. 24",
         "Gartenstrasse 24"
        ]
       },
       {
        "feld": "PLZ, Wohnort",
        "wert": "04109 Leipzig"
       },
       {
        "feld": "E-Mail-Adresse",
        "loesung": [
         "danylo.kovalenko@mail.de",
         "Danylo.Kovalenko@mail.de"
        ]
       },
       {
        "feld": "Beruf",
        "loesung": [
         "Student",
         "student"
        ]
       },
       {
        "feld": "Staatsangehörigkeit",
        "wert": "ukrainisch"
       },
       {
        "feld": "Ausweis",
        "wert": "Jahreskarte Erwachsene"
       }
      ]
     },
     "erklaerung": "Im Text hörst du „punkt“ und „at“ – im Formular schreibst du dafür . und @: danylo.kovalenko@mail.de. Die Hausnummer steht im Text als Wort (vierundzwanzig), im Formular als Zahl: 24."
    },
    {
     "id": "w1r3",
     "situation": "Ihre Kollegin Rosa Delgado geht zum ersten Mal in eine Arztpraxis in Hamburg. Sie helfen ihr beim Aufnahmebogen.",
     "text": "Rosa Delgado ist neu in Hamburg. Sie ist am einundzwanzigsten November neunzehnhundertsechsundsiebzig in Sevilla geboren. Sie kommt aus Spanien. Rosa wohnt in der Elbstraße acht in zwei null drei fünf sieben Hamburg. Ihre Telefonnummer ist null vier null, sechs sechs vier vier acht neun. Sie ist bei der AOK versichert und hat seit einer Woche Rückenschmerzen.",
     "formular": {
      "titel": "Hausarztpraxis Dr. Weber, Hamburg — Aufnahmebogen für neue Patienten",
      "zeilen": [
       {
        "feld": "Familienname",
        "loesung": [
         "Delgado"
        ]
       },
       {
        "feld": "Vorname",
        "wert": "Rosa"
       },
       {
        "feld": "Geburtsdatum",
        "loesung": [
         "21.11.1976",
         "21.11.76",
         "21. November 1976",
         "21. 11. 1976"
        ]
       },
       {
        "feld": "Geburtsort",
        "wert": "Sevilla"
       },
       {
        "feld": "Staatsangehörigkeit",
        "loesung": [
         "spanisch",
         "Spanisch",
         "Spanien"
        ]
       },
       {
        "feld": "Straße, Hausnummer",
        "wert": "Elbstraße 8"
       },
       {
        "feld": "PLZ, Wohnort",
        "loesung": [
         "20357 Hamburg",
         "20357, Hamburg",
         "20357  Hamburg"
        ]
       },
       {
        "feld": "Telefonnummer",
        "loesung": [
         "040 664489",
         "040664489",
         "040-664489",
         "040 66 44 89",
         "0406 64489"
        ]
       },
       {
        "feld": "Krankenkasse",
        "wert": "AOK"
       },
       {
        "feld": "Grund des Besuchs",
        "wert": "Rückenschmerzen"
       }
      ]
     },
     "erklaerung": "Achte auf den Unterschied: Sevilla ist der Geburtsort, Hamburg der Wohnort. Bei der Staatsangehörigkeit schreibst du das Adjektiv spanisch, auch wenn im Text nur Spanien steht."
    },
    {
     "id": "w1r4",
     "situation": "Ihr Nachbarsjunge Kwame Mensah möchte in einen Sportverein eintreten. Sie helfen ihm beim Aufnahmeantrag.",
     "text": "Kwame Mensah möchte in einem Sportverein Fußball spielen. Er ist am neunten Juni zweitausendfünf in Accra geboren. Kwame wohnt in der Rosenstraße dreiunddreißig in zwei acht null neun sieben Bremen. Er ist noch Schüler. Seine Mutter heißt Abena Mensah. Sein Handy hat die Nummer null eins fünf sieben, acht acht drei zwei eins.",
     "formular": {
      "titel": "SV Blau-Weiß Bremen — Aufnahmeantrag Mitgliedschaft",
      "zeilen": [
       {
        "feld": "Familienname",
        "wert": "Mensah"
       },
       {
        "feld": "Vorname",
        "loesung": [
         "Kwame"
        ]
       },
       {
        "feld": "Geburtsdatum",
        "loesung": [
         "09.06.2005",
         "9.6.2005",
         "9. Juni 2005",
         "09.06.05"
        ]
       },
       {
        "feld": "Geburtsort",
        "wert": "Accra"
       },
       {
        "feld": "Straße, Hausnummer",
        "loesung": [
         "Rosenstraße 33",
         "Rosenstr. 33",
         "Rosenstrasse 33"
        ]
       },
       {
        "feld": "PLZ, Wohnort",
        "wert": "28097 Bremen"
       },
       {
        "feld": "Beruf",
        "loesung": [
         "Schüler",
         "Schueler",
         "Schuler"
        ]
       },
       {
        "feld": "Handynummer",
        "loesung": [
         "0157 88321",
         "015788321",
         "0157-88321",
         "0157 8 83 21"
        ]
       },
       {
        "feld": "Sportart",
        "wert": "Fußball"
       },
       {
        "feld": "Name der Mutter",
        "wert": "Abena Mensah"
       }
      ]
     },
     "erklaerung": "Beim Beruf schreibst du bei jungen Leuten Schüler oder Studentin – das steht so im Text. Die Handynummer beginnt in Deutschland fast immer mit null eins, also 0157."
    },
    {
     "id": "w1r5",
     "situation": "Ihre Freundin Mai Nguyen hat ein Paket verschickt, aber es ist nicht angekommen. Sie helfen ihr beim Nachforschungsauftrag der Post.",
     "text": "Mai Nguyen sucht ein Paket. Sie wohnt in der Bahnhofstraße sechs in null neun eins eins eins Chemnitz. Am vierzehnten Februar zweitausendsechsundzwanzig hat sie das Paket bei der Post abgegeben. Das Paket ist für ihre Freundin Lena Brandt in Dresden. In dem Paket sind Bücher für sechzig Euro. Ihre Telefonnummer ist null drei sieben eins, vier vier zwei zwei sechs.",
     "formular": {
      "titel": "Deutsche Post — Nachforschungsauftrag Paket",
      "zeilen": [
       {
        "feld": "Familienname Absenderin",
        "wert": "Nguyen"
       },
       {
        "feld": "Vorname Absenderin",
        "loesung": [
         "Mai"
        ]
       },
       {
        "feld": "Straße, Hausnummer",
        "wert": "Bahnhofstraße 6"
       },
       {
        "feld": "PLZ, Wohnort",
        "loesung": [
         "09111 Chemnitz",
         "09111, Chemnitz",
         "09111  Chemnitz"
        ]
       },
       {
        "feld": "Telefonnummer",
        "wert": "0371 44226"
       },
       {
        "feld": "Name der Empfängerin",
        "loesung": [
         "Lena Brandt",
         "Brandt, Lena",
         "Lena  Brandt"
        ]
       },
       {
        "feld": "Wohnort der Empfängerin",
        "wert": "Dresden"
       },
       {
        "feld": "Datum der Einlieferung",
        "loesung": [
         "14.02.2026",
         "14.2.2026",
         "14. Februar 2026",
         "14.02.26"
        ]
       },
       {
        "feld": "Inhalt",
        "loesung": [
         "Bücher",
         "Buecher",
         "Bucher"
        ]
       },
       {
        "feld": "Wert in Euro",
        "wert": "60,00"
       }
      ]
     },
     "erklaerung": "Pass auf, wer wer ist: Mai ist die Absenderin, Lena Brandt die Empfängerin. Beim Datum der Einlieferung schreibst du den Tag, an dem sie das Paket bei der Post abgegeben hat: 14.02.2026."
    }
   ]
  },
  {
   "nr": 2,
   "art": "mitteilung",
   "name": "Mitteilung schreiben",
   "kurz": "Drei Punkte, etwa 30 Wörter",
   "was": "Eine Situation aus dem Alltag, drei vorgegebene Punkte und etwa 30 Wörter. Bewertet werden die drei Punkte und ob dein Text wie eine echte Nachricht aussieht — mit Anrede und Gruß.",
   "tipp": "Schreib zuerst die Anrede und den Gruß hin, dann die drei Punkte dazwischen. So vergisst du die Form nie — und die ist einen ganzen Punkt wert.",
   "zeichen": "✉️",
   "farbe": "rot",
   "punkte": 10,
   "runden": [
    {
     "id": "w2r1",
     "titel": "Runde 1",
     "aufgaben": [
      {
       "situation": "Sie sind krank und können heute nicht zum Deutschkurs kommen. Schreiben Sie eine E-Mail an Ihre Lehrerin Frau Berger.",
       "sorte": "email",
       "an": "Frau Berger",
       "betreff": "Deutschkurs heute",
       "punkte": [
        {
         "nr": 1,
         "was": "Entschuldigung",
         "hinweis": "Sag, dass du heute nicht kommen kannst."
        },
        {
         "nr": 2,
         "was": "Grund",
         "hinweis": "Sag, warum nicht."
        },
        {
         "nr": 3,
         "was": "Bitte",
         "hinweis": "Bitte um die Hausaufgaben."
        }
       ],
       "muster": "Liebe Frau Berger,\nleider kann ich heute nicht zum Kurs kommen. Ich bin krank und habe Fieber. Können Sie mir bitte die Hausaufgaben schicken?\nViele Grüße\nAmina",
       "woerter": 30,
       "hilfen": [
        "Leider kann ich …",
        "Ich bin krank.",
        "Können Sie mir bitte …?"
       ],
       "erklaerung": "Alle drei Punkte müssen vorkommen – und Anrede und Gruß. Ohne die fehlt dir der Punkt für die Form, auch wenn der Inhalt stimmt."
      },
      {
       "situation": "Sie haben am Dienstag einen Termin in der Zahnarztpraxis Dr. Weber. An diesem Tag müssen Sie arbeiten. Schreiben Sie eine E-Mail an die Praxis.",
       "sorte": "email",
       "an": "Praxis Dr. Weber",
       "betreff": "Termin am Dienstag",
       "punkte": [
        {
         "nr": 1,
         "was": "Absage",
         "hinweis": "Sag, dass du am Dienstag nicht kommen kannst."
        },
        {
         "nr": 2,
         "was": "Grund",
         "hinweis": "Sag, warum es nicht geht."
        },
        {
         "nr": 3,
         "was": "Neuer Termin",
         "hinweis": "Frag nach einem neuen Termin."
        }
       ],
       "muster": "Sehr geehrte Damen und Herren,\nleider kann ich am Dienstag um 10 Uhr nicht kommen. Ich muss an diesem Tag arbeiten. Können Sie mir bitte einen neuen Termin am Nachmittag geben?\nMit freundlichen Grüßen\nHiroshi Tanaka",
       "woerter": 30,
       "hilfen": [
        "Leider kann ich am Dienstag nicht …",
        "Ich muss arbeiten.",
        "Können Sie mir bitte einen neuen Termin …?"
       ],
       "erklaerung": "Bei einer Praxis kennst du meistens keinen Namen – dann passt „Sehr geehrte Damen und Herren“. Nenne den alten Termin genau, sonst weiß die Praxis nicht, wen sie streichen soll."
      }
     ]
    },
    {
     "id": "w2r2",
     "titel": "Runde 2",
     "aufgaben": [
      {
       "situation": "Sie fahren eine Woche in Urlaub. Ihre Blumen brauchen Wasser. Schreiben Sie einen Zettel für Ihre Nachbarin Frau Novak.",
       "sorte": "zettel",
       "an": "Frau Novak",
       "punkte": [
        {
         "nr": 1,
         "was": "Urlaub",
         "hinweis": "Sag, dass du wegfährst und wie lange."
        },
        {
         "nr": 2,
         "was": "Bitte",
         "hinweis": "Bitte sie um Hilfe mit den Blumen."
        },
        {
         "nr": 3,
         "was": "Schlüssel",
         "hinweis": "Sag, wo der Schlüssel ist."
        }
       ],
       "muster": "Hallo Frau Novak,\nich fahre am Freitag für eine Woche nach Indien. Können Sie bitte meine Blumen gießen? Der Schlüssel liegt bei meiner Schwester in der Wohnung nebenan. Vielen Dank!\nLiebe Grüße\nSanjay",
       "woerter": 30,
       "hilfen": [
        "Ich fahre am Freitag …",
        "Können Sie bitte …?",
        "Der Schlüssel liegt …"
       ],
       "erklaerung": "Ein Zettel braucht keinen Betreff, aber Anrede und Gruß braucht er trotzdem. Schreib die Bitte als Frage, das klingt viel freundlicher."
      },
      {
       "situation": "In Ihrer Wohnung ist die Heizung kaputt. Schreiben Sie eine E-Mail an Ihren Vermieter Herrn Schulz.",
       "sorte": "email",
       "an": "Herr Schulz",
       "betreff": "Heizung in meiner Wohnung",
       "punkte": [
        {
         "nr": 1,
         "was": "Problem",
         "hinweis": "Sag, was kaputt ist."
        },
        {
         "nr": 2,
         "was": "Seit wann",
         "hinweis": "Sag, seit wann das Problem da ist."
        },
        {
         "nr": 3,
         "was": "Bitte",
         "hinweis": "Bitte um einen Handwerker."
        }
       ],
       "muster": "Sehr geehrter Herr Schulz,\nmeine Heizung im Wohnzimmer ist kaputt. Sie ist seit Montag ganz kalt. Können Sie bitte einen Handwerker schicken? Am Nachmittag bin ich immer zu Hause.\nMit freundlichen Grüßen\nLinda Fischer",
       "woerter": 30,
       "hilfen": [
        "Meine Heizung ist kaputt.",
        "Seit Montag …",
        "Können Sie bitte …?"
       ],
       "erklaerung": "Bei einem Vermieter schreibst du formell: Sehr geehrter Herr … und Mit freundlichen Grüßen. Die Zeitangabe seit Montag ist hier ein eigener Leitpunkt – vergiss sie nicht."
      }
     ]
    },
    {
     "id": "w2r3",
     "titel": "Runde 3",
     "aufgaben": [
      {
       "situation": "Sie möchten am Samstag frei haben. Vielleicht arbeitet Ihre Kollegin Elena für Sie. Schreiben Sie eine SMS an Elena.",
       "sorte": "sms",
       "an": "Elena",
       "punkte": [
        {
         "nr": 1,
         "was": "Bitte",
         "hinweis": "Frag, ob sie am Samstag für dich arbeitet."
        },
        {
         "nr": 2,
         "was": "Grund",
         "hinweis": "Sag, warum du frei brauchst."
        },
        {
         "nr": 3,
         "was": "Angebot",
         "hinweis": "Sag, wann du für sie arbeitest."
        }
       ],
       "muster": "Hallo Elena,\nkannst du am Samstag für mich arbeiten? Meine Schwester heiratet und ich möchte gern hinfahren. Ich arbeite dafür am Sonntag für dich. Sag mir bitte kurz Bescheid.\nLiebe Grüße\nBettina",
       "woerter": 30,
       "hilfen": [
        "Kannst du am Samstag …?",
        "Meine Schwester heiratet.",
        "Ich arbeite dafür am Sonntag …"
       ],
       "erklaerung": "Zu einer Kollegin sagst du du – also kannst du und nicht können Sie. Auch eine SMS beginnt mit einer Anrede und endet mit einem Gruß."
      },
      {
       "situation": "Sie haben am Samstag Geburtstag und kochen für Ihre Freunde. Schreiben Sie eine SMS an Ihre Freundin Carla.",
       "sorte": "sms",
       "an": "Carla",
       "punkte": [
        {
         "nr": 1,
         "was": "Einladung",
         "hinweis": "Lade sie zum Essen ein."
        },
        {
         "nr": 2,
         "was": "Zeit und Ort",
         "hinweis": "Sag, wann und wo ihr esst."
        },
        {
         "nr": 3,
         "was": "Antwort",
         "hinweis": "Bitte sie um eine Antwort."
        }
       ],
       "muster": "Liebe Carla,\nam Samstag habe ich Geburtstag und koche für alle Freunde. Wir essen um 19 Uhr bei mir zu Hause. Hast du Zeit? Schreib mir bitte bis Donnerstag.\nBis bald\nYusuf",
       "woerter": 30,
       "hilfen": [
        "Am Samstag habe ich …",
        "Wir essen um 19 Uhr …",
        "Hast du Zeit?"
       ],
       "erklaerung": "Zeit und Ort sind ein eigener Leitpunkt – schreib beides, also die Uhrzeit und wo ihr euch trefft. Bis bald ist ein lockerer Gruß unter Freunden."
      }
     ]
    },
    {
     "id": "w2r4",
     "titel": "Runde 4",
     "aufgaben": [
      {
       "situation": "Ihr Sohn Nuri ist krank und kann heute nicht in die Kita gehen. Schreiben Sie eine E-Mail an die Erzieherin Frau Kaya.",
       "sorte": "email",
       "an": "Frau Kaya",
       "betreff": "Nuri kommt heute nicht",
       "punkte": [
        {
         "nr": 1,
         "was": "Abmeldung",
         "hinweis": "Sag, dass dein Sohn heute nicht kommt."
        },
        {
         "nr": 2,
         "was": "Grund",
         "hinweis": "Sag, warum er zu Hause bleibt."
        },
        {
         "nr": 3,
         "was": "Wann wieder",
         "hinweis": "Sag, wann er wiederkommt."
        }
       ],
       "muster": "Liebe Frau Kaya,\nmein Sohn Nuri kommt heute nicht in die Kita. Er hat Husten und Fieber. Am Montag ist er hoffentlich wieder gesund und kommt zu Ihnen.\nViele Grüße\nAyla Demir",
       "woerter": 30,
       "hilfen": [
        "Mein Sohn kommt heute nicht …",
        "Er hat Fieber.",
        "Am Montag ist er wieder …"
       ],
       "erklaerung": "Schreib den Namen von deinem Kind in die Mitteilung, sonst weiß die Kita nicht, wer fehlt. Zu einer Erzieherin, die du gut kennst, passt Liebe Frau …"
      },
      {
       "situation": "Ihr Nachbar Herr Baumann hat ein Paket für Sie angenommen. Sie waren nicht zu Hause. Schreiben Sie einen Zettel für Herrn Baumann.",
       "sorte": "zettel",
       "an": "Herr Baumann",
       "punkte": [
        {
         "nr": 1,
         "was": "Dank",
         "hinweis": "Bedanke dich für das Paket."
        },
        {
         "nr": 2,
         "was": "Zeit",
         "hinweis": "Sag, wann du das Paket holst."
        },
        {
         "nr": 3,
         "was": "Frage",
         "hinweis": "Frag, ob die Zeit ihm passt."
        }
       ],
       "muster": "Lieber Herr Baumann,\nvielen Dank für mein Paket! Ich komme am Mittwoch um 18 Uhr und hole es ab. Passt Ihnen das? Bitte werfen Sie mir kurz einen Zettel in den Briefkasten.\nViele Grüße\nMarek",
       "woerter": 30,
       "hilfen": [
        "Vielen Dank für …",
        "Ich komme am Mittwoch um … Uhr.",
        "Passt Ihnen das?"
       ],
       "erklaerung": "Mit der kurzen Frage „Passt Ihnen das“ klingt dein Termin höflich statt bestimmend. Zu einem Nachbarn, den du kennst, passt Lieber Herr … sehr gut."
      }
     ]
    },
    {
     "id": "w2r5",
     "titel": "Runde 5",
     "aufgaben": [
      {
       "situation": "Sie besuchen einen Deutschkurs am Montagabend. Sie möchten in den Kurs am Mittwoch wechseln. Schreiben Sie eine E-Mail an die Sprachschule.",
       "sorte": "email",
       "an": "Sprachschule Horizont",
       "betreff": "Kurs am Mittwoch",
       "punkte": [
        {
         "nr": 1,
         "was": "Wunsch",
         "hinweis": "Sag, dass du den Kurs wechseln möchtest."
        },
        {
         "nr": 2,
         "was": "Grund",
         "hinweis": "Sag, warum der Montag nicht mehr geht."
        },
        {
         "nr": 3,
         "was": "Frage",
         "hinweis": "Frag, ob im Kurs am Mittwoch ein Platz frei ist."
        }
       ],
       "muster": "Sehr geehrte Damen und Herren,\nich besuche den Deutschkurs am Montagabend. Ab September arbeite ich montags bis 20 Uhr. Kann ich in den Kurs am Mittwoch wechseln? Ist dort noch ein Platz frei?\nMit freundlichen Grüßen\nIvana Horvat",
       "woerter": 30,
       "hilfen": [
        "Ich besuche den Kurs am Montagabend.",
        "Ab September arbeite ich …",
        "Kann ich in den Kurs am Mittwoch wechseln?"
       ],
       "erklaerung": "Sag zuerst, welchen Kurs du besuchst – die Schule hat viele Kurse. Zwei Fragen am Ende sind kein Problem, sie gehören zu einem Leitpunkt."
      },
      {
       "situation": "Ihre Kollegin Fatima hat Ihnen beim Umzug geholfen. Schreiben Sie eine SMS an Fatima.",
       "sorte": "sms",
       "an": "Fatima",
       "punkte": [
        {
         "nr": 1,
         "was": "Dank",
         "hinweis": "Bedanke dich für die Hilfe."
        },
        {
         "nr": 2,
         "was": "Wofür",
         "hinweis": "Sag, was sie für dich gemacht hat."
        },
        {
         "nr": 3,
         "was": "Einladung",
         "hinweis": "Lade sie zum Essen ein."
        }
       ],
       "muster": "Hallo Fatima,\nvielen Dank für deine Hilfe beim Umzug! Du hast so viele Kisten getragen. Ich lade dich am Freitag zum Essen ein. Hast du um 19 Uhr Zeit?\nLiebe Grüße\nTobias",
       "woerter": 30,
       "hilfen": [
        "Vielen Dank für deine Hilfe …",
        "Du hast mir sehr geholfen.",
        "Ich lade dich zum Essen ein."
       ],
       "erklaerung": "Sag konkret, wofür du dankst – das ist hier ein eigener Leitpunkt. Zu einer Kollegin schreibst du deine Hilfe, nicht Ihre Hilfe."
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
   "minuten": 20,
   "aufgabe": {
    "situation": "Sie kommen am Sonntag mit dem Zug in Dresden an. Ihr Zug hat Verspätung. Schreiben Sie eine SMS an Ihren Freund Pawel.",
    "sorte": "sms",
    "an": "Pawel",
    "punkte": [
     {
      "nr": 1,
      "was": "Verspätung",
      "hinweis": "Sag, dass dein Zug später kommt."
     },
     {
      "nr": 2,
      "was": "Ankunft",
      "hinweis": "Sag, wann du in Dresden bist."
     },
     {
      "nr": 3,
      "was": "Bitte",
      "hinweis": "Bitte ihn, dich abzuholen."
     }
    ],
    "muster": "Hallo Pawel,\nmein Zug hat leider eine Stunde Verspätung. Ich bin erst um 20 Uhr in Dresden. Kannst du mich trotzdem am Bahnhof abholen? Ich warte am Ausgang.\nBis bald\nAmara",
    "woerter": 30,
    "hilfen": [
     "Mein Zug hat Verspätung.",
     "Ich bin erst um 20 Uhr da.",
     "Kannst du mich abholen?"
    ],
    "erklaerung": "Nimm dir 20 Minuten und geh danach die drei Punkte einzeln durch. Prüfe zum Schluss: Steht oben eine Anrede und unten ein Gruß mit deinem Namen?"
   }
  },
  {
   "id": "p2",
   "titel": "Prüfungslauf 2",
   "minuten": 20,
   "aufgabe": {
    "situation": "Sie spielen Fußball in einem Sportverein. Am Samstag können Sie nicht zum Training kommen. Schreiben Sie eine E-Mail an Ihren Trainer Herrn Richter.",
    "sorte": "email",
    "an": "Herr Richter",
    "betreff": "Training am Samstag",
    "punkte": [
     {
      "nr": 1,
      "was": "Absage",
      "hinweis": "Sag, dass du am Samstag nicht kommst."
     },
     {
      "nr": 2,
      "was": "Grund",
      "hinweis": "Sag, warum du nicht kommen kannst."
     },
     {
      "nr": 3,
      "was": "Frage",
      "hinweis": "Frag, wann das nächste Training ist."
     }
    ],
    "muster": "Sehr geehrter Herr Richter,\nleider kann ich am Samstag nicht zum Training kommen. Meine Eltern besuchen mich an diesem Wochenende. Wann ist das nächste Training? Ich komme dann bestimmt.\nViele Grüße\nOmar Yilmaz",
    "woerter": 30,
    "hilfen": [
     "Leider kann ich am Samstag nicht …",
     "Meine Eltern besuchen mich.",
     "Wann ist das nächste Training?"
    ],
    "erklaerung": "Auch bei einer Absage bleibst du freundlich und zeigst, dass du wiederkommst. Zu einem Trainer passt Sehr geehrter Herr … oder Lieber Herr …"
   }
  }
 ]
};
