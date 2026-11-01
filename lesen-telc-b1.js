/* ============================================================
   deutschoderwas club — LESEN + SPRACHBAUSTEINE telc Deutsch B1

   Aufbau nach dem offiziellen telc-Format (Übungstest 1 Zertifikat
   Deutsch, geprüft 01.11.2026): 90 Minuten für

     Leseverstehen 1  fünf Texte, zehn Überschriften        5
     Leseverstehen 2  ein Zeitungstext, Fragen a/b/c         5
     Leseverstehen 3  zehn Situationen, zwölf Anzeigen, x   10
     Sprachbausteine 1  Brief, zehn Lücken a/b/c            10
     Sprachbausteine 2  Text, zehn Lücken, fünfzehn Wörter  10

   Alle Texte und Aufgaben sind eigene — nachgebaut ist nur das
   Format. telc gewichtet die Teile anders (Lesen je 25 Punkte,
   Sprachbausteine je 15); hier zählt jede Aufgabe einen Punkt.

   fest:true  die Antworten werden nicht gemischt (Überschriften
              a–j und Wörter a–o stehen wie in der Prüfung fest).
   ============================================================ */

window.LESEN_TELC_B1 = {
 "niveau": "telcB1",
 "pruefung": "telc Deutsch B1",
 "minuten": 90,
 "punkte": 40,
 "stufen": [
  {
   "nr": 1,
   "titel": "Worum geht es?",
   "zeichen": "🧭",
   "was": "Die Hauptaussage eines Textes finden — und die Anzeige, die wirklich passt."
  },
  {
   "nr": 2,
   "titel": "Sprachbausteine",
   "zeichen": "🧩",
   "was": "Grammatik und feste Wendungen, so wie sie in den Lücken abgefragt werden."
  },
  {
   "nr": 3,
   "titel": "Die Aufgabentypen",
   "zeichen": "🎯",
   "was": "Alle fünf Teile einzeln geübt — drei Leseteile und zwei Teile Sprachbausteine."
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
   "id": "tb1l1",
   "stufe": 1,
   "titel": "Die Hauptaussage finden",
   "kurz": "Nicht das auffälligste Wort, sondern der Kern des Textes",
   "ziel": "Nach diesem Block wählst du die Überschrift, die den ganzen Text trifft, nicht nur ein Detail.",
   "zeichen": "🎯",
   "farbe": "turq",
   "aufgaben": [
    {
     "art": "wahl",
     "frage": "Text: „Ab Januar fahren die Busse der Linie 7 auch am Sonntag. Bisher gab es am Wochenende nur samstags Verbindungen. Die Stadt reagiert damit auf Wünsche vieler Bewohner im Neubaugebiet.\" Welche Überschrift passt?",
     "opt": [
      "Linie 7 jetzt auch sonntags unterwegs",
      "Neubaugebiet wächst weiter",
      "Busfahren am Samstag wird teurer"
     ],
     "loesung": 0,
     "erklaerung": "Es geht um die neuen Sonntagsfahrten. Das Neubaugebiet ist nur der Grund, kein Preis wird genannt."
    },
    {
     "art": "wahl",
     "frage": "Text: „Immer mehr Familien geben gebrauchte Kinderkleidung weiter, statt sie wegzuwerfen. In vielen Stadtteilen gibt es dafür inzwischen Tauschbörsen, oft im Gemeindehaus.\"",
     "opt": [
      "Gemeindehäuser bieten neue Räume an",
      "Kinderkleidung wird immer teurer",
      "Tauschen statt wegwerfen: Kleidung für Kinder bekommt ein zweites Leben"
     ],
     "loesung": 2,
     "erklaerung": "Kern ist das Weitergeben gebrauchter Kleidung. Gemeindehaus ist nur der Ort, über Preise steht nichts."
    },
    {
     "art": "wahl",
     "frage": "Text: „Wer abends am Handy liest, schläft oft schlechter ein. Ärzte raten deshalb, das Gerät eine Stunde vor dem Schlafen wegzulegen. Ein Buch aus Papier sei die bessere Wahl.\"",
     "opt": [
      "Neue Handys mit Lesefunktion",
      "Besser schlafen ohne Bildschirm am Abend",
      "Ärzte lesen gern Bücher"
     ],
     "loesung": 1,
     "erklaerung": "Hauptaussage: Bildschirm am Abend stört den Schlaf. „Handy\", „Buch\" und „Ärzte\" sind nur Stichwörter."
    },
    {
     "art": "wahl",
     "frage": "Text: „Die Bibliothek in Kellberg hat jetzt auch abends bis 21 Uhr geöffnet. Berufstätige können so nach der Arbeit noch Bücher ausleihen. Am Wochenende bleiben die Zeiten gleich.\"",
     "opt": [
      "Bibliothek verlängert Öffnungszeiten für Berufstätige",
      "Am Wochenende ist die Bibliothek geschlossen",
      "Kellberg sucht neue Mitarbeiter"
     ],
     "loesung": 0,
     "erklaerung": "Es geht um die längeren Abendzeiten. Am Wochenende ändert sich nichts, geschlossen ist sie nicht."
    },
    {
     "art": "wahl",
     "frage": "Text: „In der Kantine der Firma Haldenwerk gibt es seit Montag jeden Tag ein vegetarisches Gericht. Die Mitarbeiter hatten sich das in einer Umfrage gewünscht. Fleisch steht weiterhin auf dem Speiseplan.\"",
     "opt": [
      "Kein Fleisch mehr in der Kantine",
      "Umfrage zeigt: Mitarbeiter sind unzufrieden",
      "Täglich ein Gericht ohne Fleisch"
     ],
     "loesung": 2,
     "erklaerung": "Neu ist das tägliche vegetarische Angebot. Fleisch gibt es weiterhin, also ist A falsch."
    },
    {
     "art": "wahl",
     "frage": "Text: „Viele Mieter wissen nicht, dass sie kleine Reparaturen oft selbst bezahlen müssen. Das steht meistens im Mietvertrag. Ein Blick hinein kann also Ärger sparen.\"",
     "opt": [
      "Vermieter müssen alles reparieren",
      "Kleinreparaturen: Ein Blick in den Mietvertrag lohnt sich",
      "Mietverträge werden kürzer"
     ],
     "loesung": 1,
     "erklaerung": "Kern: Im Vertrag steht, wer kleine Reparaturen zahlt. Antwort A sagt das Gegenteil."
    },
    {
     "art": "wahl",
     "frage": "Text: „Der Sportverein Blau-Weiß bietet ab März einen Lauftreff für Anfänger an. Man trifft sich zweimal pro Woche im Stadtpark. Vorkenntnisse braucht man nicht, nur bequeme Schuhe.\"",
     "opt": [
      "Laufen lernen in der Gruppe – auch ohne Erfahrung",
      "Neue Laufschuhe im Test",
      "Stadtpark wird im März renoviert"
     ],
     "loesung": 0,
     "erklaerung": "Hauptaussage ist der neue Lauftreff für Anfänger. Schuhe und Stadtpark sind Details."
    },
    {
     "art": "wahl",
     "frage": "Text: „Pakete, die man nicht zu Hause annehmen kann, landen oft beim Nachbarn. Immer mehr Menschen lassen ihre Sendungen deshalb lieber an eine Abholstation schicken, die rund um die Uhr geöffnet ist.\"",
     "opt": [
      "Nachbarn helfen gern",
      "Paketpreise steigen",
      "Abholstationen werden immer beliebter"
     ],
     "loesung": 2,
     "erklaerung": "Der Text beschreibt den Trend zur Abholstation. Die Nachbarn sind nur der Ausgangspunkt."
    },
    {
     "art": "wahl",
     "frage": "Text: „Wer seinen Personalausweis verlängern will, muss in Lindau jetzt online einen Termin buchen. Ohne Termin wird man im Bürgeramt nicht mehr bedient. Die Wartezeiten sollen so kürzer werden.\"",
     "opt": [
      "Bürgeramt schließt im Sommer",
      "Ohne Online-Termin kein Ausweis mehr im Bürgeramt",
      "Personalausweis jetzt kostenlos"
     ],
     "loesung": 1,
     "erklaerung": "Zentrale Information: Termin nur noch online. Von Schließung oder Kosten ist keine Rede."
    },
    {
     "art": "wahl",
     "frage": "Text: „Eine Studie zeigt: Wer mit Kollegen in der Mittagspause spazieren geht, ist nachmittags konzentrierter. Schon zwanzig Minuten an der frischen Luft reichen aus.\"",
     "opt": [
      "Kurzer Spaziergang am Mittag macht fit für den Nachmittag",
      "Kollegen streiten in der Pause",
      "Mittagspause wird auf zwanzig Minuten gekürzt"
     ],
     "loesung": 0,
     "erklaerung": "Hauptaussage: Bewegung in der Pause verbessert die Konzentration. „Zwanzig Minuten\" ist ein Detail."
    }
   ]
  },
  {
   "id": "tb1l2",
   "stufe": 1,
   "titel": "Die Anzeige mit dem einen Detail",
   "kurz": "Nur eine Anzeige erfüllt alle Bedingungen – manchmal keine",
   "ziel": "Nach diesem Block prüfst du jede Bedingung der Situation und erkennst, wenn keine Anzeige passt.",
   "zeichen": "🔎",
   "farbe": "gold",
   "aufgaben": [
    {
     "art": "wahl",
     "frage": "Situation: Amir sucht einen Englischkurs am Abend, weil er tagsüber arbeitet. Welche Anzeige passt?",
     "opt": [
      "Englisch für Berufstätige: Di + Do, 18:30–20:00 Uhr, Volkshochschule Mitte",
      "Englisch-Intensivkurs: Mo–Fr, 9–13 Uhr, kleine Gruppen",
      "Englisch am Wochenende für Kinder, Sa 10 Uhr"
     ],
     "loesung": 0,
     "erklaerung": "Nur A liegt am Abend und ist für Erwachsene. B ist vormittags, C für Kinder."
    },
    {
     "art": "wahl",
     "frage": "Situation: Familie Kovač sucht eine Drei-Zimmer-Wohnung mit Balkon, höchstens 900 Euro warm.",
     "opt": [
      "3 Zimmer, Balkon, 980 € warm, ruhige Lage",
      "3 Zimmer, Garten, 850 € warm, ab sofort",
      "3 Zimmer, Südbalkon, 870 € warm, nahe Schule"
     ],
     "loesung": 2,
     "erklaerung": "A ist zu teuer, B hat Garten statt Balkon. Nur C erfüllt alle drei Bedingungen."
    },
    {
     "art": "wahl",
     "frage": "Situation: Lena möchte ihr altes Fahrrad reparieren lassen, aber am liebsten am Samstag.",
     "opt": [
      "Fahrradladen Speiche: Verkauf neuer Räder, Sa geöffnet",
      "Radwerkstatt Kette: Reparaturen Mo–Sa, auch ohne Termin",
      "Fahrradverleih am Bahnhof: täglich ab 8 Uhr"
     ],
     "loesung": 1,
     "erklaerung": "A verkauft nur, C verleiht. Nur B repariert und hat samstags auf."
    },
    {
     "art": "wahl",
     "frage": "Situation: Herr Brandt sucht einen Babysitter für Sonntagabend, der Französisch spricht.",
     "opt": [
      "Studentin bietet Kinderbetreuung, Mo–Fr nachmittags, spricht Französisch",
      "Erfahrener Babysitter, Wochenende und abends, Deutsch und Englisch",
      "Keine passt."
     ],
     "loesung": 2,
     "erklaerung": "A spricht Französisch, aber nicht am Sonntag. B ist am Wochenende da, spricht aber kein Französisch."
    },
    {
     "art": "wahl",
     "frage": "Situation: Sofia will einen Kochkurs besuchen, in dem man vegetarisch kocht. Sie hat nur einen Abend Zeit.",
     "opt": [
      "Vegetarisch kochen – Einzeltermin am Freitag, 18 Uhr",
      "Vegetarische Küche – Kurs über 6 Wochen, jeweils mittwochs",
      "Grillabend für Anfänger, Fr 19 Uhr"
     ],
     "loesung": 0,
     "erklaerung": "B dauert sechs Wochen, C ist kein vegetarischer Kurs. Nur A ist ein einzelner Abend."
    },
    {
     "art": "wahl",
     "frage": "Situation: Tom zieht um und braucht für einen Tag einen Transporter. Er hat keinen Führerschein für große Fahrzeuge, nur Klasse B.",
     "opt": [
      "LKW-Vermietung: 7,5 t, Tagespreis 120 €",
      "Umzugsfirma Weiß: Komplettumzug mit Personal",
      "Kleintransporter bis 3,5 t, mit Führerschein Klasse B, ab 59 € pro Tag"
     ],
     "loesung": 2,
     "erklaerung": "A braucht einen größeren Führerschein, B vermietet keinen Wagen. C passt in allen Punkten."
    },
    {
     "art": "wahl",
     "frage": "Situation: Frau Yilmaz möchte mit ihrem Hund einen Urlaub an der Ostsee machen.",
     "opt": [
      "Ferienhaus an der Nordsee, Haustiere willkommen",
      "Ferienwohnung an der Ostsee, Haustiere erlaubt",
      "Hotel an der Ostsee, Tiere leider nicht erlaubt"
     ],
     "loesung": 1,
     "erklaerung": "A liegt an der Nordsee, C erlaubt keine Tiere. Nur B erfüllt beides."
    },
    {
     "art": "wahl",
     "frage": "Situation: Marco sucht einen Minijob am Wochenende im Bereich Gastronomie.",
     "opt": [
      "Bäckerei sucht Verkäufer, Mo–Fr, Teilzeit",
      "Supermarkt sucht Aushilfe an der Kasse, samstags",
      "Keine passt."
     ],
     "loesung": 2,
     "erklaerung": "A ist unter der Woche, B ist am Wochenende, aber im Handel, nicht in der Gastronomie."
    },
    {
     "art": "wahl",
     "frage": "Situation: Greta möchte Schwimmen lernen. Sie ist 45 und hat Angst vor tiefem Wasser.",
     "opt": [
      "Schwimmkurs für Erwachsene, Anfänger, im Lehrschwimmbecken mit niedriger Wassertiefe",
      "Seepferdchen-Kurs für Kinder ab 5 Jahren",
      "Kraulkurs für Fortgeschrittene im 50-Meter-Becken"
     ],
     "loesung": 0,
     "erklaerung": "B ist für Kinder, C für Fortgeschrittene. A ist für erwachsene Anfänger und flach."
    },
    {
     "art": "wahl",
     "frage": "Situation: Herr Osei sucht einen gebrauchten Schreibtisch und kann ihn nur abholen, wenn er nicht weit wohnt. Er wohnt in Kellberg.",
     "opt": [
      "Schreibtisch, Eiche, wie neu, nur Abholung in Hamburg",
      "Schreibtisch, weiß, gebraucht, Abholung in Kellberg-Süd",
      "Neuer Schreibtisch im Möbelhaus, Lieferung möglich"
     ],
     "loesung": 1,
     "erklaerung": "A ist zu weit weg, C ist neu. Nur B ist gebraucht und in seiner Nähe."
    }
   ]
  },
  {
   "id": "tb1l3",
   "stufe": 2,
   "titel": "Sprachbausteine: Grammatik",
   "kurz": "Konnektoren, Präpositionen, Endungen – ein Wort entscheidet",
   "ziel": "Nach diesem Block erkennst du an der Satzstruktur, welche Form in die Lücke gehört.",
   "zeichen": "🧩",
   "farbe": "rot",
   "aufgaben": [
    {
     "art": "wahl",
     "frage": "Ich kann leider nicht kommen, ___ ich an diesem Tag arbeiten muss.",
     "opt": [
      "deshalb",
      "weil",
      "trotzdem"
     ],
     "loesung": 1,
     "erklaerung": "Das Verb steht am Ende, also braucht man eine Konjunktion wie „weil\"."
    },
    {
     "art": "wahl",
     "frage": "Vielen Dank für die Einladung ___ Ihrem Firmenjubiläum.",
     "opt": [
      "zu",
      "für",
      "an"
     ],
     "loesung": 0,
     "erklaerung": "Es heißt „die Einladung zu etwas\"."
    },
    {
     "art": "wahl",
     "frage": "Der Kollege, ___ ich gestern geholfen habe, hat sich heute bedankt.",
     "opt": [
      "den",
      "der",
      "dem"
     ],
     "loesung": 2,
     "erklaerung": "„helfen\" verlangt den Dativ, also maskulin Dativ „dem\"."
    },
    {
     "art": "wahl",
     "frage": "Wir wohnen jetzt in einer ___ Wohnung direkt am Park.",
     "opt": [
      "große",
      "großer",
      "großen"
     ],
     "loesung": 2,
     "erklaerung": "Nach „einer\" im Dativ hat das Adjektiv die Endung „-en\"."
    },
    {
     "art": "wahl",
     "frage": "Ich würde mich freuen, wenn Sie mir bald ___ .",
     "opt": [
      "antworten würden",
      "antworten werden",
      "geantwortet haben"
     ],
     "loesung": 0,
     "erklaerung": "Höfliche Bitte im Konjunktiv II: „würden\" + Infinitiv."
    },
    {
     "art": "wahl",
     "frage": "___ des schlechten Wetters fand das Fest im Garten statt.",
     "opt": [
      "Wegen",
      "Trotz",
      "Statt"
     ],
     "loesung": 1,
     "erklaerung": "Gegensatz: Das Wetter war schlecht, das Fest fand trotzdem statt, also „trotz\"."
    },
    {
     "art": "wahl",
     "frage": "Ich weiß noch nicht, ___ ich im Sommer Urlaub bekomme.",
     "opt": [
      "ob",
      "dass",
      "wenn"
     ],
     "loesung": 0,
     "erklaerung": "Bei einer offenen Ja-Nein-Frage in einem Nebensatz steht „ob\"."
    },
    {
     "art": "wahl",
     "frage": "Seit drei Monaten ___ ich in einem neuen Team.",
     "opt": [
      "arbeitete",
      "habe gearbeitet",
      "arbeite"
     ],
     "loesung": 2,
     "erklaerung": "Mit „seit\" und einer Handlung, die noch andauert, steht das Präsens."
    },
    {
     "art": "wahl",
     "frage": "Bitte schicken Sie die Unterlagen ___ 15. März an unser Büro.",
     "opt": [
      "seit dem",
      "bis zum",
      "am"
     ],
     "loesung": 1,
     "erklaerung": "Eine Frist wird mit „bis zum\" angegeben."
    },
    {
     "art": "wahl",
     "frage": "Ich interessiere mich sehr ___ die Stelle als Bürokauffrau.",
     "opt": [
      "an",
      "auf",
      "für"
     ],
     "loesung": 2,
     "erklaerung": "Das Verb heißt „sich interessieren für\" + Akkusativ."
    }
   ]
  },
  {
   "id": "tb1l4",
   "stufe": 2,
   "titel": "Sprachbausteine: feste Wendungen",
   "kurz": "Wörter, die immer zusammen auftreten",
   "ziel": "Nach diesem Block erkennst du feste Verbindungen und typische Briefwendungen sofort.",
   "zeichen": "🔗",
   "farbe": "lila",
   "aufgaben": [
    {
     "art": "wahl",
     "frage": "Bitte ___ Sie mir bis Freitag Bescheid, ob Sie teilnehmen.",
     "opt": [
      "stellen",
      "geben",
      "machen"
     ],
     "loesung": 1,
     "erklaerung": "Feste Verbindung: „jemandem Bescheid geben\" heißt informieren."
    },
    {
     "art": "wahl",
     "frage": "Ich ___ mich herzlich für Ihre schnelle Hilfe.",
     "opt": [
      "bedanke",
      "danke",
      "freue"
     ],
     "loesung": 0,
     "erklaerung": "„sich bedanken für\" ist reflexiv; „danken\" hat kein „mich\"."
    },
    {
     "art": "wahl",
     "frage": "Mit freundlichen ___",
     "opt": [
      "Grüße",
      "Gruß",
      "Grüßen"
     ],
     "loesung": 2,
     "erklaerung": "Feste Grußformel im Dativ Plural: „Mit freundlichen Grüßen\"."
    },
    {
     "art": "wahl",
     "frage": "Viele Kunden nehmen unseren Beratungsservice gern in ___ .",
     "opt": [
      "Anspruch",
      "Angebot",
      "Auftrag"
     ],
     "loesung": 0,
     "erklaerung": "Feste Wendung: „etwas in Anspruch nehmen\" heißt nutzen."
    },
    {
     "art": "wahl",
     "frage": "Ich nehme ___ auf Ihre Anzeige vom 3. Mai.",
     "opt": [
      "Stellung",
      "Bezug",
      "Rücksicht"
     ],
     "loesung": 1,
     "erklaerung": "Briefwendung: „Bezug nehmen auf\" heißt sich auf etwas beziehen. „Stellung\" geht mit „zu\"."
    },
    {
     "art": "wahl",
     "frage": "Ich möchte mich über den Lärm in unserem Haus ___ .",
     "opt": [
      "beschweren",
      "beschäftigen",
      "bewerben"
     ],
     "loesung": 0,
     "erklaerung": "„sich beschweren über\" ist die typische Wendung für eine Reklamation."
    },
    {
     "art": "wahl",
     "frage": "Wir müssen bis morgen eine Entscheidung ___ .",
     "opt": [
      "machen",
      "treffen",
      "geben"
     ],
     "loesung": 1,
     "erklaerung": "Nomen-Verb-Verbindung: „eine Entscheidung treffen\"."
    },
    {
     "art": "wahl",
     "frage": "Ich warte noch ___ Ihre Antwort.",
     "opt": [
      "für",
      "an",
      "auf"
     ],
     "loesung": 2,
     "erklaerung": "Feste Präposition: „warten auf\" + Akkusativ."
    },
    {
     "art": "wahl",
     "frage": "Bei Fragen ___ ich Ihnen gern zur Verfügung.",
     "opt": [
      "bin",
      "liege",
      "stehe"
     ],
     "loesung": 2,
     "erklaerung": "Feste Wendung: „jemandem zur Verfügung stehen\"."
    },
    {
     "art": "wahl",
     "frage": "Leider muss ich unseren Termin am Montag ___ .",
     "opt": [
      "abholen",
      "abgeben",
      "absagen"
     ],
     "loesung": 2,
     "erklaerung": "Einen Termin „sagt man ab\", wenn man nicht kommen kann."
    }
   ]
  }
 ],
 "teile": [
  {
   "nr": 1,
   "art": "textwahl",
   "name": "Leseverstehen: Überschriften",
   "kurz": "Fünf kurze Texte, zehn Überschriften",
   "was": "Du liest fünf kurze Texte und zehn Überschriften. Zu jedem Text passt genau eine Überschrift — fünf bleiben übrig.",
   "tipp": "Lies den ganzen Text, bevor du wählst. Die falschen Überschriften greifen ein Wort aus dem Text auf — die richtige trifft, worum es eigentlich geht.",
   "zeichen": "🗞️",
   "farbe": "turq",
   "punkte": 5,
   "runden": [
    {
     "id": "t1s1",
     "aufgaben": [
      {
       "frage": "Welche Überschrift passt zu Text 1?",
       "opt": [
        "Fachleute zeigen direkt in der Wohnung, wo man Geld sparen kann",
        "Hausverwaltung verbietet Möbel im Treppenhaus",
        "Günstiger wohnen, wenn man im Alltag mit anpackt",
        "Umzugsfirmen finden kaum noch Mitarbeiter",
        "Studenten suchen monatelang nach einem Zimmer",
        "Warum viele Mieter lieber bleiben, wo sie sind",
        "Wann die Polizei bei Lärm sofort kommen muss",
        "Was man nicht mehr braucht, bekommt im Haus ein zweites Leben",
        "Alte Heizungen müssen bis Jahresende ersetzt werden",
        "Bei Streit mit dem Nachbarn hilft oft schon ein ruhiges Wort"
       ],
       "loesung": 7,
       "fest": true,
       "text": {
        "sorte": "zeitung",
        "quelle": "Aus einer Regionalzeitung",
        "titel": "Text 1",
        "zeilen": [
         "Im Erdgeschoss eines Mietshauses in der Ahlbacher Gartenstraße steht seit dem Frühjahr ein großes Holzregal. Wer Bücher, Geschirr oder Kinderspielzeug übrig hat, stellt es einfach hinein. Wer etwas gebrauchen kann, nimmt es mit.",
         "Die Idee hatte Mieterin Leyla Demir. „Früher landete vieles im Müll, obwohl es noch völlig in Ordnung war\", sagt sie. Die Hausverwaltung war zuerst skeptisch, weil im Treppenhaus nichts den Fluchtweg blockieren darf. Inzwischen hat sie das Regal erlaubt, und fast alle Parteien machen mit."
        ]
       },
       "stelle": "Wer etwas gebrauchen kann, nimmt es mit.",
       "erklaerung": "Es geht ums Weitergeben von Dingen. Die Hausverwaltung hat das Regal nicht verboten, sondern erlaubt."
      },
      {
       "frage": "Welche Überschrift passt zu Text 2?",
       "opt": [
        "Fachleute zeigen direkt in der Wohnung, wo man Geld sparen kann",
        "Hausverwaltung verbietet Möbel im Treppenhaus",
        "Günstiger wohnen, wenn man im Alltag mit anpackt",
        "Umzugsfirmen finden kaum noch Mitarbeiter",
        "Studenten suchen monatelang nach einem Zimmer",
        "Warum viele Mieter lieber bleiben, wo sie sind",
        "Wann die Polizei bei Lärm sofort kommen muss",
        "Was man nicht mehr braucht, bekommt im Haus ein zweites Leben",
        "Alte Heizungen müssen bis Jahresende ersetzt werden",
        "Bei Streit mit dem Nachbarn hilft oft schon ein ruhiges Wort"
       ],
       "loesung": 2,
       "fest": true,
       "text": {
        "sorte": "zeitung",
        "quelle": "Aus einem Stadtmagazin",
        "titel": "Text 2",
        "zeilen": [
         "In Universitätsstädten sind freie Zimmer teuer und selten. Ein Projekt des Studentenwerks bringt deshalb junge Leute und ältere Menschen zusammen: Die Studenten wohnen bei Senioren, die eine große Wohnung oder ein Haus haben.",
         "Statt der vollen Miete zahlen sie nur die Nebenkosten. Dafür kaufen sie ein, mähen den Rasen oder helfen bei Fragen zum Computer – etwa eine Stunde pro Quadratmeter im Monat. Beide Seiten profitieren: Die Älteren sind weniger allein, die Jüngeren sparen Geld."
        ]
       },
       "stelle": "Statt der vollen Miete zahlen sie nur die Nebenkosten.",
       "erklaerung": "Hauptaussage: wenig Miete gegen Hilfe. Die Zimmersuche wird nur am Anfang als Hintergrund erwähnt."
      },
      {
       "frage": "Welche Überschrift passt zu Text 3?",
       "opt": [
        "Fachleute zeigen direkt in der Wohnung, wo man Geld sparen kann",
        "Hausverwaltung verbietet Möbel im Treppenhaus",
        "Günstiger wohnen, wenn man im Alltag mit anpackt",
        "Umzugsfirmen finden kaum noch Mitarbeiter",
        "Studenten suchen monatelang nach einem Zimmer",
        "Warum viele Mieter lieber bleiben, wo sie sind",
        "Wann die Polizei bei Lärm sofort kommen muss",
        "Was man nicht mehr braucht, bekommt im Haus ein zweites Leben",
        "Alte Heizungen müssen bis Jahresende ersetzt werden",
        "Bei Streit mit dem Nachbarn hilft oft schon ein ruhiges Wort"
       ],
       "loesung": 9,
       "fest": true,
       "text": {
        "sorte": "zeitung",
        "quelle": "Aus einem Ratgeber für Mieter",
        "titel": "Text 3",
        "zeilen": [
         "Laute Musik am Abend, Kinder, die in der Wohnung toben, oder ein Hund, der stundenlang bellt: Lärm ist der häufigste Grund für Ärger im Mietshaus.",
         "Viele rufen dann gleich die Polizei oder schreiben an den Vermieter. Fachleute raten aber zu einem anderen ersten Schritt: Klingeln Sie in einem ruhigen Moment und erklären Sie freundlich, was Sie stört. Oft wissen die Nachbarn gar nicht, wie gut man sie hört. Erst wenn das nichts bringt, sollte man eine Schlichtungsstelle oder die Hausverwaltung einschalten."
        ]
       },
       "stelle": "erklären Sie freundlich, was Sie stört",
       "erklaerung": "Der Rat ist: zuerst persönlich reden. Die Polizei wird nur als häufige, aber nicht empfohlene Reaktion genannt."
      },
      {
       "frage": "Welche Überschrift passt zu Text 4?",
       "opt": [
        "Fachleute zeigen direkt in der Wohnung, wo man Geld sparen kann",
        "Hausverwaltung verbietet Möbel im Treppenhaus",
        "Günstiger wohnen, wenn man im Alltag mit anpackt",
        "Umzugsfirmen finden kaum noch Mitarbeiter",
        "Studenten suchen monatelang nach einem Zimmer",
        "Warum viele Mieter lieber bleiben, wo sie sind",
        "Wann die Polizei bei Lärm sofort kommen muss",
        "Was man nicht mehr braucht, bekommt im Haus ein zweites Leben",
        "Alte Heizungen müssen bis Jahresende ersetzt werden",
        "Bei Streit mit dem Nachbarn hilft oft schon ein ruhiges Wort"
       ],
       "loesung": 0,
       "fest": true,
       "text": {
        "sorte": "zeitung",
        "quelle": "Aus einer Kundenzeitschrift der Stadtwerke",
        "titel": "Text 4",
        "zeilen": [
         "Die Heizkosten sind für viele Haushalte im letzten Winter deutlich gestiegen. Die Stadtwerke Lindenau bieten ihren Kunden deshalb einen kostenlosen Besuch an.",
         "Eine Energieberaterin oder ein Energieberater kommt für etwa eine Stunde vorbei, misst die Temperatur in den Räumen und prüft Fenster und Heizkörper. Danach erhalten die Kunden Tipps, die sofort wirken: richtig lüften, Heizkörper nicht mit Möbeln zustellen, Thermostate richtig einstellen. Ein Austausch der Heizung ist dafür meistens gar nicht nötig."
        ]
       },
       "stelle": "Eine Energieberaterin oder ein Energieberater kommt für etwa eine Stunde vorbei",
       "erklaerung": "Es geht um Beratung zu Hause. Ein Austausch der Heizung ist laut Text gerade nicht nötig."
      },
      {
       "frage": "Welche Überschrift passt zu Text 5?",
       "opt": [
        "Fachleute zeigen direkt in der Wohnung, wo man Geld sparen kann",
        "Hausverwaltung verbietet Möbel im Treppenhaus",
        "Günstiger wohnen, wenn man im Alltag mit anpackt",
        "Umzugsfirmen finden kaum noch Mitarbeiter",
        "Studenten suchen monatelang nach einem Zimmer",
        "Warum viele Mieter lieber bleiben, wo sie sind",
        "Wann die Polizei bei Lärm sofort kommen muss",
        "Was man nicht mehr braucht, bekommt im Haus ein zweites Leben",
        "Alte Heizungen müssen bis Jahresende ersetzt werden",
        "Bei Streit mit dem Nachbarn hilft oft schon ein ruhiges Wort"
       ],
       "loesung": 5,
       "fest": true,
       "text": {
        "sorte": "zeitung",
        "quelle": "Aus einer Wochenzeitung",
        "titel": "Text 5",
        "zeilen": [
         "Die Deutschen ziehen seltener um als noch vor zwanzig Jahren. Das zeigt eine neue Umfrage. Der Hauptgrund: Wer einen alten Mietvertrag hat, zahlt oft viel weniger als bei einem neuen.",
         "„Viele Familien bräuchten eigentlich mehr Platz, und viele Rentner hätten gern eine kleinere Wohnung\", erklärt ein Wohnungsexperte. Trotzdem bleiben sie, weil eine neue Wohnung pro Quadratmeter deutlich teurer wäre. Auch Umzugsunternehmen merken das: Sie haben weniger Aufträge als früher."
        ]
       },
       "stelle": "Trotzdem bleiben sie, weil eine neue Wohnung pro Quadratmeter deutlich teurer wäre.",
       "erklaerung": "Hauptaussage: Man bleibt wegen der Kosten. Umzugsfirmen haben weniger Aufträge, nicht zu wenig Personal."
      }
     ]
    },
    {
     "id": "t1s2",
     "aufgaben": [
      {
       "frage": "Welche Überschrift passt zu Text 1?",
       "opt": [
        "Brot und Brötchen werden in der Region teurer",
        "Wer durcharbeitet, ist am Nachmittag weniger leistungsfähig",
        "Immer mehr Firmen stellen ohne persönliches Gespräch ein",
        "Freie Tage zum Lernen – doch kaum jemand weiß davon",
        "Handwerksbetrieb zahlt seinen Leuten mehr Lohn",
        "So überzeugen Sie im Vorstellungsgespräch am Bildschirm",
        "Kantinen bieten gesünderes Mittagessen an",
        "Ein Tag weniger im Betrieb – mit guten Ergebnissen",
        "Arbeitgeber müssen Sprachkurse bezahlen",
        "Späterer Arbeitsbeginn soll junge Leute anlocken"
       ],
       "loesung": 7,
       "fest": true,
       "text": {
        "sorte": "zeitung",
        "quelle": "Aus einer Regionalzeitung",
        "titel": "Text 1",
        "zeilen": [
         "Seit einem Jahr arbeiten die zwölf Angestellten des Malerbetriebs Kessler in Lindenau nur noch von Montag bis Donnerstag. Das Gehalt ist gleich geblieben, die Arbeitstage sind dafür etwas länger.",
         "Chef Tobias Kessler zieht eine positive Bilanz: „Meine Leute sind seltener krank, und die Kunden sind zufrieden.\" Außerdem bekommt der Betrieb plötzlich viele Bewerbungen – in einer Branche, in der überall Fachkräfte fehlen. Ob das Modell auch für größere Firmen funktioniert, ist allerdings noch offen."
        ]
       },
       "stelle": "Chef Tobias Kessler zieht eine positive Bilanz",
       "erklaerung": "Die Vier-Tage-Woche hat Vorteile gebracht. Der Lohn ist gleich geblieben, nicht gestiegen."
      },
      {
       "frage": "Welche Überschrift passt zu Text 2?",
       "opt": [
        "Brot und Brötchen werden in der Region teurer",
        "Wer durcharbeitet, ist am Nachmittag weniger leistungsfähig",
        "Immer mehr Firmen stellen ohne persönliches Gespräch ein",
        "Freie Tage zum Lernen – doch kaum jemand weiß davon",
        "Handwerksbetrieb zahlt seinen Leuten mehr Lohn",
        "So überzeugen Sie im Vorstellungsgespräch am Bildschirm",
        "Kantinen bieten gesünderes Mittagessen an",
        "Ein Tag weniger im Betrieb – mit guten Ergebnissen",
        "Arbeitgeber müssen Sprachkurse bezahlen",
        "Späterer Arbeitsbeginn soll junge Leute anlocken"
       ],
       "loesung": 5,
       "fest": true,
       "text": {
        "sorte": "zeitung",
        "quelle": "Aus einem Karriere-Ratgeber",
        "titel": "Text 2",
        "zeilen": [
         "Das erste Kennenlernen mit einem neuen Arbeitgeber findet heute oft online statt. Damit dabei nichts schiefgeht, sollten Sie die Technik schon am Vortag testen: Funktionieren Kamera, Mikrofon und Internet?",
         "Wählen Sie einen ruhigen Raum mit einem ordentlichen Hintergrund. Schauen Sie beim Sprechen in die Kamera und nicht auf Ihr eigenes Bild – so wirkt es, als würden Sie Ihr Gegenüber ansehen. Und auch wenn Sie zu Hause sitzen: Ziehen Sie sich so an wie für ein Treffen im Büro."
        ]
       },
       "stelle": "Damit dabei nichts schiefgeht, sollten Sie die Technik schon am Vortag testen",
       "erklaerung": "Der Text gibt Tipps für Online-Gespräche. Dass es gar kein Gespräch gibt, steht nirgends."
      },
      {
       "frage": "Welche Überschrift passt zu Text 3?",
       "opt": [
        "Brot und Brötchen werden in der Region teurer",
        "Wer durcharbeitet, ist am Nachmittag weniger leistungsfähig",
        "Immer mehr Firmen stellen ohne persönliches Gespräch ein",
        "Freie Tage zum Lernen – doch kaum jemand weiß davon",
        "Handwerksbetrieb zahlt seinen Leuten mehr Lohn",
        "So überzeugen Sie im Vorstellungsgespräch am Bildschirm",
        "Kantinen bieten gesünderes Mittagessen an",
        "Ein Tag weniger im Betrieb – mit guten Ergebnissen",
        "Arbeitgeber müssen Sprachkurse bezahlen",
        "Späterer Arbeitsbeginn soll junge Leute anlocken"
       ],
       "loesung": 1,
       "fest": true,
       "text": {
        "sorte": "zeitung",
        "quelle": "Aus einem Gesundheitsmagazin",
        "titel": "Text 3",
        "zeilen": [
         "Fast jeder dritte Beschäftigte isst mittags am Schreibtisch oder lässt die Pause ganz ausfallen. Das spart scheinbar Zeit – doch eine Studie zeigt das Gegenteil.",
         "Wer keine Pause macht, wird ab etwa 14 Uhr deutlich unkonzentrierter und macht mehr Fehler. Schon zwanzig Minuten an der frischen Luft helfen, den Kopf wieder frei zu bekommen. Was man in der Pause isst, war für das Ergebnis weniger wichtig als die Tatsache, dass man den Arbeitsplatz überhaupt verlässt."
        ]
       },
       "stelle": "Wer keine Pause macht, wird ab etwa 14 Uhr deutlich unkonzentrierter",
       "erklaerung": "Hauptaussage: Ohne Pause sinkt die Leistung. Das Essen ist laut Text gerade nicht das Wichtigste."
      },
      {
       "frage": "Welche Überschrift passt zu Text 4?",
       "opt": [
        "Brot und Brötchen werden in der Region teurer",
        "Wer durcharbeitet, ist am Nachmittag weniger leistungsfähig",
        "Immer mehr Firmen stellen ohne persönliches Gespräch ein",
        "Freie Tage zum Lernen – doch kaum jemand weiß davon",
        "Handwerksbetrieb zahlt seinen Leuten mehr Lohn",
        "So überzeugen Sie im Vorstellungsgespräch am Bildschirm",
        "Kantinen bieten gesünderes Mittagessen an",
        "Ein Tag weniger im Betrieb – mit guten Ergebnissen",
        "Arbeitgeber müssen Sprachkurse bezahlen",
        "Späterer Arbeitsbeginn soll junge Leute anlocken"
       ],
       "loesung": 9,
       "fest": true,
       "text": {
        "sorte": "zeitung",
        "quelle": "Aus einer Lokalzeitung",
        "titel": "Text 4",
        "zeilen": [
         "Bäckereien im Landkreis finden kaum noch Auszubildende. Viele Jugendliche schreckt vor allem eins ab: Die Arbeit beginnt mitten in der Nacht.",
         "Die Bäckerei Okafor in Wendorf geht deshalb einen neuen Weg. Dank moderner Öfen und Teig, der über Nacht im Kühlraum ruht, fängt die Frühschicht dort erst um sechs Uhr an statt um drei. Seitdem hat der Betrieb zwei neue Lehrlinge. Die Preise mussten für die Umstellung übrigens nicht erhöht werden."
        ]
       },
       "stelle": "fängt die Frühschicht dort erst um sechs Uhr an statt um drei",
       "erklaerung": "Die Bäckerei ändert die Arbeitszeit, um Azubis zu finden. Die Preise bleiben gleich."
      },
      {
       "frage": "Welche Überschrift passt zu Text 5?",
       "opt": [
        "Brot und Brötchen werden in der Region teurer",
        "Wer durcharbeitet, ist am Nachmittag weniger leistungsfähig",
        "Immer mehr Firmen stellen ohne persönliches Gespräch ein",
        "Freie Tage zum Lernen – doch kaum jemand weiß davon",
        "Handwerksbetrieb zahlt seinen Leuten mehr Lohn",
        "So überzeugen Sie im Vorstellungsgespräch am Bildschirm",
        "Kantinen bieten gesünderes Mittagessen an",
        "Ein Tag weniger im Betrieb – mit guten Ergebnissen",
        "Arbeitgeber müssen Sprachkurse bezahlen",
        "Späterer Arbeitsbeginn soll junge Leute anlocken"
       ],
       "loesung": 3,
       "fest": true,
       "text": {
        "sorte": "zeitung",
        "quelle": "Aus einer Gewerkschaftszeitung",
        "titel": "Text 5",
        "zeilen": [
         "In fast allen Bundesländern haben Arbeitnehmer das Recht auf Bildungsurlaub. Das bedeutet: Sie bekommen meist fünf Tage pro Jahr frei, um an einem anerkannten Kurs teilzunehmen – zum Beispiel an einem Sprachkurs oder einem Computerseminar. Das Gehalt läuft weiter, die Kursgebühr zahlt man allerdings oft selbst.",
         "Trotzdem nutzen nur etwa zwei Prozent der Berechtigten dieses Angebot. Laut einer Umfrage haben die meisten noch nie davon gehört."
        ]
       },
       "stelle": "Laut einer Umfrage haben die meisten noch nie davon gehört.",
       "erklaerung": "Das Recht existiert, wird aber kaum genutzt. Die Kursgebühr zahlt man oft selbst, nicht der Arbeitgeber."
      }
     ]
    },
    {
     "id": "t1s3",
     "aufgaben": [
      {
       "frage": "Welche Überschrift passt zu Text 1?",
       "opt": [
        "Hausärzte nehmen keine neuen Patienten mehr auf",
        "Im Sommer gut auf sich und andere achten",
        "Stadtpark wird für einen Marathon gesperrt",
        "Neues Handy misst, wie gut man schläft",
        "Gemeinsam laufen – auch ohne Erfahrung",
        "Freibäder öffnen in diesem Jahr früher",
        "Kein Telefonstress mehr bei der Praxis",
        "Bibliothek hat jetzt auch am Wochenende geöffnet",
        "Hier gibt es mehr als Lesestoff zu leihen",
        "Kleine Gewohnheiten für erholsame Nächte"
       ],
       "loesung": 4,
       "fest": true,
       "text": {
        "sorte": "zeitung",
        "quelle": "Aus einem Stadtmagazin",
        "titel": "Text 1",
        "zeilen": [
         "Jeden Dienstag um 18 Uhr treffen sich am Eingang des Ahlbacher Stadtparks Menschen in Sportkleidung. Der Lauftreff ist für alle offen, die mit dem Joggen anfangen möchten – kostenlos und ohne Anmeldung.",
         "Es gibt drei Gruppen mit unterschiedlichem Tempo, und am Anfang wechselt man zwischen Gehen und Laufen. „Bei uns wird niemand zurückgelassen\", sagt Trainerin Maria Kowalczyk. Einige Teilnehmer haben im Herbst sogar beim Stadtlauf mitgemacht. Für die meisten zählt aber vor allem der Spaß in der Gruppe."
        ]
       },
       "stelle": "Der Lauftreff ist für alle offen, die mit dem Joggen anfangen möchten",
       "erklaerung": "Es geht um Laufen für Anfänger in der Gruppe. Der Stadtlauf ist nur ein Detail, der Park wird nicht gesperrt."
      },
      {
       "frage": "Welche Überschrift passt zu Text 2?",
       "opt": [
        "Hausärzte nehmen keine neuen Patienten mehr auf",
        "Im Sommer gut auf sich und andere achten",
        "Stadtpark wird für einen Marathon gesperrt",
        "Neues Handy misst, wie gut man schläft",
        "Gemeinsam laufen – auch ohne Erfahrung",
        "Freibäder öffnen in diesem Jahr früher",
        "Kein Telefonstress mehr bei der Praxis",
        "Bibliothek hat jetzt auch am Wochenende geöffnet",
        "Hier gibt es mehr als Lesestoff zu leihen",
        "Kleine Gewohnheiten für erholsame Nächte"
       ],
       "loesung": 9,
       "fest": true,
       "text": {
        "sorte": "zeitung",
        "quelle": "Aus einer Apothekenzeitschrift",
        "titel": "Text 2",
        "zeilen": [
         "Jeder Vierte schläft schlecht. Oft helfen schon einfache Veränderungen. Gehen Sie möglichst jeden Tag zur gleichen Zeit ins Bett, auch am Wochenende.",
         "Das Handy gehört nicht ins Schlafzimmer: Das helle Licht des Bildschirms macht wach, und Nachrichten am späten Abend beschäftigen den Kopf. Kaffee sollte man nach dem Mittag nicht mehr trinken. Und wer nach zwanzig Minuten noch wach liegt, steht besser kurz auf und liest etwas, statt sich im Bett zu ärgern."
        ]
       },
       "stelle": "Oft helfen schon einfache Veränderungen.",
       "erklaerung": "Der Text gibt einfache Tipps für besseren Schlaf. Das Handy soll gerade weg – es misst nichts."
      },
      {
       "frage": "Welche Überschrift passt zu Text 3?",
       "opt": [
        "Hausärzte nehmen keine neuen Patienten mehr auf",
        "Im Sommer gut auf sich und andere achten",
        "Stadtpark wird für einen Marathon gesperrt",
        "Neues Handy misst, wie gut man schläft",
        "Gemeinsam laufen – auch ohne Erfahrung",
        "Freibäder öffnen in diesem Jahr früher",
        "Kein Telefonstress mehr bei der Praxis",
        "Bibliothek hat jetzt auch am Wochenende geöffnet",
        "Hier gibt es mehr als Lesestoff zu leihen",
        "Kleine Gewohnheiten für erholsame Nächte"
       ],
       "loesung": 6,
       "fest": true,
       "text": {
        "sorte": "zeitung",
        "quelle": "Aus einer Regionalzeitung",
        "titel": "Text 3",
        "zeilen": [
         "Wer in der Gemeinschaftspraxis am Marktplatz in Lindenau einen Termin wollte, brauchte früher viel Geduld: Morgens war die Leitung oft eine halbe Stunde besetzt.",
         "Seit Oktober können Patienten ihren Termin auch über die Internetseite der Praxis auswählen. Die Telefonleitung ist dadurch spürbar ruhiger, und die Mitarbeiterinnen am Empfang haben mehr Zeit für die Menschen vor Ort. Wer kein Internet nutzt, kann natürlich weiterhin anrufen. Neue Patienten werden allerdings nur in Ausnahmefällen aufgenommen."
        ]
       },
       "stelle": "Die Telefonleitung ist dadurch spürbar ruhiger",
       "erklaerung": "Hauptaussage: Online-Buchung entlastet das Telefon. Die Regel zu neuen Patienten ist nur eine Randinformation."
      },
      {
       "frage": "Welche Überschrift passt zu Text 4?",
       "opt": [
        "Hausärzte nehmen keine neuen Patienten mehr auf",
        "Im Sommer gut auf sich und andere achten",
        "Stadtpark wird für einen Marathon gesperrt",
        "Neues Handy misst, wie gut man schläft",
        "Gemeinsam laufen – auch ohne Erfahrung",
        "Freibäder öffnen in diesem Jahr früher",
        "Kein Telefonstress mehr bei der Praxis",
        "Bibliothek hat jetzt auch am Wochenende geöffnet",
        "Hier gibt es mehr als Lesestoff zu leihen",
        "Kleine Gewohnheiten für erholsame Nächte"
       ],
       "loesung": 8,
       "fest": true,
       "text": {
        "sorte": "zeitung",
        "quelle": "Aus einem Gemeindeblatt",
        "titel": "Text 4",
        "zeilen": [
         "In der Stadtbücherei Wendorf kann man ab sofort nicht nur Romane und Kinderbücher ausleihen. In einem neuen Bereich warten Badmintonschläger, eine Nähmaschine, ein Akkubohrer und sogar ein Teleskop.",
         "„Viele Dinge braucht man nur zwei- oder dreimal im Jahr\", erklärt Leiterin Anja Hoffmann. „Da muss nicht jeder alles selbst kaufen.\" Die Ausleihe ist mit dem normalen Büchereiausweis möglich und dauert zwei Wochen. Die Öffnungszeiten bleiben wie bisher: dienstags bis freitags."
        ]
       },
       "stelle": "In einem neuen Bereich warten Badmintonschläger, eine Nähmaschine, ein Akkubohrer",
       "erklaerung": "Man kann jetzt auch Geräte ausleihen. Die Öffnungszeiten ändern sich ausdrücklich nicht."
      },
      {
       "frage": "Welche Überschrift passt zu Text 5?",
       "opt": [
        "Hausärzte nehmen keine neuen Patienten mehr auf",
        "Im Sommer gut auf sich und andere achten",
        "Stadtpark wird für einen Marathon gesperrt",
        "Neues Handy misst, wie gut man schläft",
        "Gemeinsam laufen – auch ohne Erfahrung",
        "Freibäder öffnen in diesem Jahr früher",
        "Kein Telefonstress mehr bei der Praxis",
        "Bibliothek hat jetzt auch am Wochenende geöffnet",
        "Hier gibt es mehr als Lesestoff zu leihen",
        "Kleine Gewohnheiten für erholsame Nächte"
       ],
       "loesung": 1,
       "fest": true,
       "text": {
        "sorte": "zeitung",
        "quelle": "Aus einer Seniorenzeitschrift",
        "titel": "Text 5",
        "zeilen": [
         "Wenn die Temperaturen über dreißig Grad steigen, ist das besonders für ältere Menschen gefährlich. Sie merken oft zu spät, dass sie Durst haben.",
         "Ärzte raten, über den Tag verteilt mindestens anderthalb Liter Wasser oder Tee zu trinken und die Wohnung morgens zu lüften, danach Fenster und Vorhänge zu schließen. Körperliche Arbeit wie Gartenarbeit oder Einkaufen erledigt man am besten früh am Tag. Und: Fragen Sie bei älteren Nachbarn ruhig einmal nach, ob alles in Ordnung ist."
        ]
       },
       "stelle": "Fragen Sie bei älteren Nachbarn ruhig einmal nach",
       "erklaerung": "Tipps für heiße Tage – für sich selbst und für andere. Freibäder kommen im Text nicht vor."
      }
     ]
    }
   ]
  },
  {
   "nr": 2,
   "art": "textwahl",
   "name": "Leseverstehen: Detailverstehen",
   "kurz": "Ein längerer Text, fünf Fragen a/b/c",
   "was": "Du liest einen Zeitungstext. Dazu gibt es fünf Fragen mit je drei Antworten. Die Fragen folgen der Reihenfolge im Text.",
   "tipp": "Die Antworten benutzen andere Wörter als der Text. Achte auf Einschränkungen: „zuerst\", „eigentlich\", „allerdings\".",
   "zeichen": "📰",
   "farbe": "gold",
   "punkte": 5,
   "runden": [
    {
     "id": "t2s1",
     "text": {
      "sorte": "zeitung",
      "quelle": "Rheintaler Zeitung",
      "titel": "Vom Gabelstapler in die Kita",
      "zeilen": [
       "Wenn Marek Nowak morgens um halb acht die Tür der Kita „Sonnenblume“ in Lindenfeld aufschließt, warten oft schon die ersten Eltern. Vor drei Jahren hätte sich der 41-Jährige das nicht vorstellen können. Damals arbeitete er noch als Lagerist bei einem Getränkegroßhandel und fuhr den ganzen Tag Gabelstapler.",
       "Der Wechsel kam nicht ganz freiwillig. Nach einer Operation am Rücken riet ihm sein Arzt, keine schweren Kisten mehr zu heben. „Zuerst dachte ich an eine Stelle im Büro“, erzählt Nowak. „Aber den ganzen Tag am Computer sitzen, das wollte ich auf keinen Fall.“ Die Idee mit der Kita hatte schließlich seine Frau, die selbst Grundschullehrerin ist.",
       "Bei der Arbeitsagentur erfuhr er, dass eine Umschulung zum Erzieher möglich ist. Normalerweise dauert die Ausbildung drei Jahre. Weil Nowak schon Berufserfahrung hatte, konnte er sie auf zwei Jahre verkürzen. Die Kosten für die Schule übernahm die Rentenversicherung, weil der Grund für den Berufswechsel gesundheitlich war.",
       "Leicht war die Zeit trotzdem nicht. Vormittags saß er im Unterricht, nachmittags machte er Praktika, abends lernte er mit seinen eigenen zwei Kindern am Küchentisch. „Pädagogik und Psychologie waren für mich völlig neu. Am schwierigsten fand ich aber die vielen schriftlichen Berichte“, sagt er.",
       "Auch finanziell musste die Familie sparen. Während der Umschulung bekam Nowak Übergangsgeld, das deutlich unter seinem alten Lohn lag. Den Urlaub an der Ostsee hat die Familie zweimal ausfallen lassen.",
       "Heute arbeitet er dreißig Stunden pro Woche in einer Gruppe mit Kindern zwischen drei und sechs Jahren. Männer sind in Kitas immer noch selten, in seinem Team ist er der einzige. Die Leiterin der Kita, Sabine Kröger, ist froh darüber: „Viele Kinder wachsen fast nur mit Frauen auf. Es tut ihnen gut, auch einen Mann als Bezugsperson zu haben.“",
       "Bereut hat Nowak den Schritt nicht. Nur eines vermisst er manchmal: „Im Lager war es ruhiger. Hier ist von morgens bis mittags richtig was los.“ Im nächsten Jahr möchte er eine Weiterbildung zur Sprachförderung machen."
      ]
     },
     "aufgaben": [
      {
       "frage": "Warum hat Marek Nowak seinen Beruf gewechselt?",
       "opt": [
        "Er wollte lieber in einem Büro arbeiten.",
        "Er durfte wegen seines Rückens nicht mehr schwer heben.",
        "Seine Frau hat für ihn eine Stelle in einer Kita gefunden."
       ],
       "loesung": 1,
       "stelle": "Nach einer Operation am Rücken riet ihm sein Arzt",
       "erklaerung": "Der Rücken war der Grund; ans Büro dachte er nur kurz, und seine Frau hatte nur die Idee."
      },
      {
       "frage": "Wie lange dauerte Nowaks Umschulung?",
       "opt": [
        "Drei Jahre, wie es normal ist.",
        "Zwei Jahre, weil er schon Berufserfahrung hatte.",
        "Zwei Jahre, weil die Rentenversicherung sie bezahlt hat."
       ],
       "loesung": 1,
       "stelle": "konnte er sie auf zwei Jahre verkürzen",
       "erklaerung": "Die Verkürzung kam durch die Berufserfahrung; die Rentenversicherung zahlte nur die Kosten."
      },
      {
       "frage": "Was fand Nowak in der Ausbildung am schwierigsten?",
       "opt": [
        "Die schriftlichen Berichte.",
        "Die Fächer Pädagogik und Psychologie.",
        "Das Lernen am Abend mit seinen Kindern."
       ],
       "loesung": 0,
       "stelle": "Am schwierigsten fand ich aber die vielen schriftlichen Berichte",
       "erklaerung": "Pädagogik und Psychologie waren nur neu; das „aber“ zeigt, was am schwierigsten war."
      },
      {
       "frage": "Was erfährt man über die Zeit der Umschulung?",
       "opt": [
        "Nowak bekam weiter seinen alten Lohn.",
        "Die Familie ist zweimal an die Ostsee gefahren.",
        "Die Familie hatte weniger Geld als früher."
       ],
       "loesung": 2,
       "stelle": "das deutlich unter seinem alten Lohn lag",
       "erklaerung": "Das Übergangsgeld war niedriger als der Lohn; den Ostsee-Urlaub hat die Familie ausfallen lassen."
      },
      {
       "frage": "Was sagt die Leiterin der Kita?",
       "opt": [
        "Nowak war der einzige Mann, der sich beworben hat.",
        "Für die Kinder ist es gut, dass ein Mann im Team ist.",
        "In der Kita ist es viel ruhiger als in einem Lager."
       ],
       "loesung": 1,
       "stelle": "Es tut ihnen gut, auch einen Mann als Bezugsperson zu haben",
       "erklaerung": "Die Leiterin spricht über den Nutzen für die Kinder; die Aussage über die Ruhe stammt von Nowak."
      }
     ]
    },
    {
     "id": "t2s2",
     "text": {
      "sorte": "zeitung",
      "quelle": "Stadtmagazin Neuberg",
      "titel": "Wegwerfen? Erst mal reparieren!",
      "zeilen": [
       "Jeden zweiten Samstag im Monat riecht es im Gemeindehaus von Neuberg-Ost nach Kaffee und ein bisschen nach heißem Metall. Dann öffnet das Reparaturcafé, und vor der Tür stehen Menschen mit Toastern, Lampen, Fahrrädern und kaputten Hosen.",
       "Gegründet hat das Café Helga Brandt. Die 67-jährige frühere Elektrikerin ärgerte sich nach ihrem Eintritt in die Rente darüber, wie schnell Geräte im Müll landen. „Meine Nachbarin wollte einen neuen Staubsauger kaufen, dabei war nur ein Kabel locker“, erzählt sie. Zuerst wollte sie nur in ihrer eigenen Garage Nachbarn helfen. Doch die Nachfrage war so groß, dass sie bei der Kirchengemeinde nach einem Raum fragte.",
       "Inzwischen machen fünfzehn Freiwillige mit. Darunter sind ein pensionierter Uhrmacher, zwei Informatikstudenten und eine Schneiderin. Bezahlt wird niemand. Die Besucher zahlen nichts für die Reparatur, viele werfen aber etwas in eine Spendenbox. Von dem Geld kauft das Team Werkzeug und Ersatzteile.",
       "Wichtig ist Brandt eine Regel: Die Gäste schauen nicht nur zu, sondern arbeiten mit. „Wir reparieren nicht für die Leute, sondern mit ihnen“, sagt sie. So lernen viele, kleine Probleme beim nächsten Mal selbst zu lösen.",
       "Nicht alles lässt sich retten. Etwa ein Drittel der Geräte bleibt kaputt, oft weil es keine Ersatzteile mehr gibt oder weil man die Geräte gar nicht öffnen kann. Bei Handys und Laptops ist das Team außerdem vorsichtig: Wegen der Akkus repariert es diese aus Sicherheitsgründen nur, wenn ein Fachmann dabei ist.",
       "Für viele Besucher ist das Café mehr als eine Werkstatt. „Ich komme auch, wenn bei mir nichts kaputt ist“, sagt der Rentner Yusuf Demir. „Hier trinkt man Kaffee und lernt Leute aus dem Viertel kennen.“",
       "Im Frühjahr will das Team ein zweites Café im Stadtteil Westend eröffnen. Dafür werden noch Freiwillige gesucht, besonders Leute, die nähen können."
      ]
     },
     "aufgaben": [
      {
       "frage": "Was hatte Helga Brandt ursprünglich vor?",
       "opt": [
        "Ein Café im Gemeindehaus zu eröffnen.",
        "Den Nachbarn in ihrer Garage zu helfen.",
        "Ihrer Nachbarin einen neuen Staubsauger zu kaufen."
       ],
       "loesung": 1,
       "stelle": "Zuerst wollte sie nur in ihrer eigenen Garage Nachbarn helfen",
       "erklaerung": "Der Raum im Gemeindehaus kam erst später, weil die Nachfrage so groß war."
      },
      {
       "frage": "Was passiert mit dem Geld im Reparaturcafé?",
       "opt": [
        "Die Freiwilligen bekommen davon einen kleinen Lohn.",
        "Die Besucher bezahlen damit ihre Reparatur.",
        "Das Team kauft davon Werkzeug und Ersatzteile."
       ],
       "loesung": 2,
       "stelle": "Von dem Geld kauft das Team Werkzeug und Ersatzteile",
       "erklaerung": "Niemand wird bezahlt, und die Reparatur ist kostenlos; die Spenden gehen in Material."
      },
      {
       "frage": "Was erwartet Helga Brandt von den Gästen?",
       "opt": [
        "Sie sollen bei der Reparatur mitarbeiten.",
        "Sie sollen kleine Probleme zu Hause allein lösen.",
        "Sie sollen zuschauen und Fragen stellen."
       ],
       "loesung": 0,
       "stelle": "Wir reparieren nicht für die Leute, sondern mit ihnen",
       "erklaerung": "Mitarbeiten ist die Regel; Probleme selbst lösen ist nur eine mögliche Folge davon."
      },
      {
       "frage": "Was gilt für Handys und Laptops?",
       "opt": [
        "Sie werden nur repariert, wenn ein Fachmann anwesend ist.",
        "Das Team repariert sie grundsätzlich nicht.",
        "Für sie gibt es fast nie Ersatzteile."
       ],
       "loesung": 0,
       "stelle": "nur, wenn ein Fachmann dabei ist",
       "erklaerung": "Es gibt kein generelles Verbot, nur eine Bedingung: ein Fachmann muss dabei sein."
      },
      {
       "frage": "Was sagt Yusuf Demir über das Reparaturcafé?",
       "opt": [
        "Er kommt nur, wenn er etwas reparieren lassen muss.",
        "Er möchte im neuen Café im Westend mithelfen.",
        "Für ihn ist es auch ein Ort, um Leute zu treffen."
       ],
       "loesung": 2,
       "stelle": "lernt Leute aus dem Viertel kennen",
       "erklaerung": "Er kommt auch ohne kaputtes Gerät, weil er dort Menschen aus dem Viertel trifft."
      }
     ]
    },
    {
     "id": "t2s3",
     "text": {
      "sorte": "zeitung",
      "quelle": "Wohnen & Leben",
      "titel": "Ein Zimmer gegen Hilfe im Alltag",
      "zeilen": [
       "Als Lucía Fernández im Herbst nach Karlsfeld kam, um Soziale Arbeit zu studieren, suchte sie wochenlang ein Zimmer. Die Mieten in der Universitätsstadt sind hoch, ein WG-Zimmer kostet schnell über 500 Euro. „Das konnte ich mir mit meinem Nebenjob einfach nicht leisten“, sagt die 22-Jährige aus Spanien.",
       "Heute wohnt sie bei Gertrud Albers, 81 Jahre alt, in einem Einfamilienhaus am Stadtrand. Möglich gemacht hat das ein Projekt des Studentenwerks mit dem Namen „Wohnen für Hilfe“. Die Idee ist einfach: Ältere Menschen mit viel Platz vermieten ein Zimmer an Studenten. Statt einer normalen Miete hilft der junge Mensch im Alltag.",
       "Die Regel lautet: pro Quadratmeter eine Stunde Hilfe im Monat. Lucías Zimmer ist 16 Quadratmeter groß, also hilft sie 16 Stunden im Monat. Sie kauft ein, mäht im Sommer den Rasen und begleitet Frau Albers manchmal zum Arzt. Nur die Nebenkosten für Strom und Wasser zahlt sie selbst, das sind 90 Euro im Monat. Pflege gehört ausdrücklich nicht zu ihren Aufgaben.",
       "Am Anfang war Gertrud Albers skeptisch. Die Idee hatte ihr Sohn, weil er sich Sorgen machte, dass seine Mutter allein im großen Haus lebt. „Ich wollte keine Fremde im Haus haben“, erinnert sie sich. Nach einem Kennenlerngespräch beim Studentenwerk und einem gemeinsamen Probewochenende war sie überzeugt.",
       "Natürlich gibt es in solchen Wohnpaaren auch mal Streit, zum Beispiel über die Ordnung in der Küche. Für solche Fälle bietet das Studentenwerk Gespräche an. Bei den beiden war das bisher aber nicht nötig. „Wir reden einfach miteinander“, sagt Frau Albers.",
       "Zurzeit gibt es in Karlsfeld 34 solcher Wohnpaare. Laut Studentenwerk könnten es viel mehr sein, denn es melden sich genug Studenten. Es fehlen aber Senioren, die ein Zimmer anbieten.",
       "Lucía will bis zum Ende ihres Studiums bleiben. Und am Sonntagabend kocht sie inzwischen regelmäßig für beide, oft eine spanische Tortilla, die Frau Albers vorher gar nicht kannte."
      ]
     },
     "aufgaben": [
      {
       "frage": "Warum hatte Lucía Probleme, ein Zimmer zu finden?",
       "opt": [
        "Sie hatte keinen Nebenjob.",
        "Die Zimmer waren für sie zu teuer.",
        "Sie wollte nicht in einer WG wohnen."
       ],
       "loesung": 1,
       "stelle": "Das konnte ich mir mit meinem Nebenjob einfach nicht leisten",
       "erklaerung": "Sie hat einen Nebenjob, aber das Geld reicht nicht für die hohen Mieten."
      },
      {
       "frage": "Was gibt Lucía für ihr Zimmer?",
       "opt": [
        "16 Stunden Hilfe im Monat und das Geld für die Nebenkosten.",
        "90 Euro Miete und die Pflege von Frau Albers.",
        "Jeden Tag eine Stunde Hilfe im Haushalt."
       ],
       "loesung": 0,
       "stelle": "also hilft sie 16 Stunden im Monat",
       "erklaerung": "Sie zahlt nur die Nebenkosten; Pflege gehört ausdrücklich nicht zu ihren Aufgaben."
      },
      {
       "frage": "Wie fand Frau Albers die Idee am Anfang?",
       "opt": [
        "Sie war sofort begeistert.",
        "Sie hatte die Idee selbst.",
        "Sie wollte keine fremde Person im Haus."
       ],
       "loesung": 2,
       "stelle": "Ich wollte keine Fremde im Haus haben",
       "erklaerung": "Die Idee kam von ihrem Sohn; überzeugt war sie erst nach dem Probewochenende."
      },
      {
       "frage": "Was passiert, wenn es Streit gibt?",
       "opt": [
        "Das Studentenwerk bietet Gespräche an.",
        "Der Student muss sofort ausziehen.",
        "Der Sohn von Frau Albers entscheidet."
       ],
       "loesung": 0,
       "stelle": "Für solche Fälle bietet das Studentenwerk Gespräche an",
       "erklaerung": "Das Studentenwerk hilft mit Gesprächen; bei Lucía und Frau Albers war das bisher nicht nötig."
      },
      {
       "frage": "Welches Problem hat das Projekt in Karlsfeld?",
       "opt": [
        "Es melden sich zu wenige Studenten.",
        "Es gibt zu wenige ältere Menschen, die ein Zimmer anbieten.",
        "Es gibt zu viele Streitfälle zwischen den Wohnpaaren."
       ],
       "loesung": 1,
       "stelle": "Es fehlen aber Senioren, die ein Zimmer anbieten",
       "erklaerung": "Studenten gibt es genug; es fehlen die Senioren mit freiem Zimmer."
      }
     ]
    }
   ]
  },
  {
   "nr": 3,
   "art": "anzeigenX",
   "name": "Leseverstehen: Anzeigen",
   "kurz": "Zehn Situationen, zwölf Anzeigen — einmal passt keine",
   "was": "Du liest zehn Situationen und zwölf Anzeigen. Zu jeder Situation suchst du die passende Anzeige. Jede Anzeige passt höchstens einmal. Für eine Situation gibt es keine Anzeige — dann wählst du x.",
   "tipp": "Lies zuerst die Situation und unterstreiche im Kopf die Bedingung: Uhrzeit, Alter, Preis, Ort. Eine einzige Bedingung schließt die ähnliche Anzeige aus.",
   "zeichen": "🔍",
   "farbe": "rot",
   "punkte": 10,
   "runden": [
    {
     "id": "t3s1",
     "anzeigen": [
      {
       "b": "a",
       "quelle": "Volkshochschule Nordstadt",
       "zeilen": [
        "Spanisch für Anfänger",
        "Montags 18.30–20 Uhr, 12 Abende",
        "Keine Vorkenntnisse nötig",
        "89 Euro"
       ]
      },
      {
       "b": "b",
       "quelle": "Sprachschule Lingua Plus",
       "zeilen": [
        "Spanisch-Intensivkurs, zwei Wochen",
        "Mo–Fr 9–13 Uhr",
        "Nur mit Grundkenntnissen (Einstufungstest)",
        "390 Euro"
       ]
      },
      {
       "b": "c",
       "quelle": "Computertreff am Markt",
       "zeilen": [
        "Excel für den Beruf",
        "Samstag 10–16 Uhr",
        "Bitte eigenen Laptop mitbringen",
        "75 Euro"
       ]
      },
      {
       "b": "d",
       "quelle": "Familienzentrum Regenbogen",
       "zeilen": [
        "Erste Hilfe am Kind",
        "Für Eltern, werdende Eltern und Großeltern",
        "Samstag 9–15 Uhr",
        "30 Euro"
       ]
      },
      {
       "b": "e",
       "quelle": "Rettungsdienst Ortsverband Mitte",
       "zeilen": [
        "Erste-Hilfe-Kurs für den Führerschein",
        "Mit Bescheinigung für die Führerscheinstelle",
        "Samstag 8–16 Uhr",
        "45 Euro"
       ]
      },
      {
       "b": "f",
       "quelle": "Kochschule Pfeffermühle",
       "zeilen": [
        "Indisch kochen – ein Abend",
        "Freitags 18 Uhr, max. 8 Personen",
        "Essen und Getränke inklusive",
        "59 Euro"
       ]
      },
      {
       "b": "g",
       "quelle": "Kinderküche Löffelchen",
       "zeilen": [
        "Ferien-Kochwoche für Kinder von 8 bis 12",
        "Mo–Fr 9–12 Uhr in den Sommerferien",
        "Rezepte zum Mitnehmen",
        "120 Euro"
       ]
      },
      {
       "b": "h",
       "quelle": "Bildungswerk Süd",
       "zeilen": [
        "Bewerbungstraining für Arbeitssuchende",
        "Dienstag und Donnerstag vormittags",
        "Kostenlos mit Bildungsgutschein vom Jobcenter"
       ]
      },
      {
       "b": "i",
       "quelle": "Online-Akademie Kompass",
       "zeilen": [
        "Buchhaltung – Grundlagen",
        "100 % online, lernen Sie, wann Sie wollen",
        "Mit Abschlusszertifikat",
        "199 Euro"
       ]
      },
      {
       "b": "j",
       "quelle": "Tanzschule Takt",
       "zeilen": [
        "Standardtanz für Paare",
        "Sonntags 17 Uhr, 8 Abende",
        "Anmeldung nur paarweise",
        "140 Euro pro Paar"
       ]
      },
      {
       "b": "k",
       "quelle": "Tanzschule Takt",
       "zeilen": [
        "Salsa-Abend für Singles",
        "Jeden Mittwoch 20 Uhr",
        "Kein Tanzpartner nötig",
        "10 Euro pro Abend"
       ]
      },
      {
       "b": "l",
       "quelle": "Gemeindezentrum St. Paul",
       "zeilen": [
        "Fotografieren mit dem Smartphone",
        "Donnerstags 19 Uhr, 4 Abende",
        "60 Euro"
       ]
      }
     ],
     "aufgaben": [
      {
       "situation": "Sie arbeiten tagsüber und möchten vor Ihrem Urlaub in Spanien abends Spanisch lernen. Sie können noch kein Wort.",
       "loesung": "a",
       "erklaerung": "Der VHS-Kurs ist abends und für Anfänger. Der Intensivkurs b ist vormittags und verlangt Grundkenntnisse."
      },
      {
       "situation": "Ihr Sohn ist 18 und braucht für die Anmeldung zur Führerscheinprüfung noch einen Erste-Hilfe-Nachweis.",
       "loesung": "e",
       "erklaerung": "Nur Anzeige e bietet die Bescheinigung für die Führerscheinstelle. Kurs d ist speziell für Notfälle mit Kindern."
      },
      {
       "situation": "Sie haben zwei Wochen frei und möchten Ihr Schul-Spanisch möglichst schnell verbessern.",
       "loesung": "b",
       "erklaerung": "Zwei Wochen intensiv, für Leute mit Grundkenntnissen — das passt genau."
      },
      {
       "situation": "Sie möchten tanzen lernen, aber Ihr Mann hat keine Lust mitzukommen.",
       "loesung": "k",
       "erklaerung": "Beim Salsa-Abend braucht man keinen Partner. Kurs j nimmt nur Paare an."
      },
      {
       "situation": "Ihre Freundin ist arbeitslos und möchte lernen, wie man gute Bewerbungen schreibt. Bezahlen kann sie nichts.",
       "loesung": "h",
       "erklaerung": "Das Bewerbungstraining ist für Arbeitssuchende und mit Bildungsgutschein kostenlos."
      },
      {
       "situation": "Sie haben eine neue Spiegelreflexkamera und möchten am Wochenende einen Fotokurs besuchen.",
       "loesung": "x",
       "erklaerung": "Kurs l ist nur für Smartphones und findet donnerstags statt. Eine andere Anzeige bietet Fotografie nicht an."
      },
      {
       "situation": "Sie arbeiten im Schichtdienst, Ihre Arbeitszeiten wechseln jede Woche. Trotzdem möchten Sie Buchhaltung lernen.",
       "loesung": "i",
       "erklaerung": "Der Online-Kurs hat keine festen Zeiten — man lernt, wann man will."
      },
      {
       "situation": "Ihre zehnjährige Tochter langweilt sich in den Sommerferien. Sie hilft zu Hause gern beim Kochen.",
       "loesung": "g",
       "erklaerung": "Die Ferien-Kochwoche ist für Kinder von 8 bis 12. Kurs f ist ein Abendkurs für Erwachsene."
      },
      {
       "situation": "Sie bekommen bald ein Baby und möchten wissen, was man bei einem Unfall mit einem kleinen Kind tun muss.",
       "loesung": "d",
       "erklaerung": "„Erste Hilfe am Kind\" richtet sich ausdrücklich auch an werdende Eltern."
      },
      {
       "situation": "Ihr Chef erwartet, dass Sie bald mit Tabellen am Computer arbeiten. Unter der Woche haben Sie keine Zeit für einen Kurs.",
       "loesung": "c",
       "erklaerung": "Der Excel-Kurs ist für den Beruf und findet am Samstag statt."
      }
     ]
    },
    {
     "id": "t3s2",
     "anzeigen": [
      {
       "b": "a",
       "quelle": "Privat",
       "zeilen": [
        "Schöne 2-Zimmer-Altbauwohnung, 65 m²",
        "3. Stock ohne Aufzug",
        "720 Euro warm",
        "Keine Haustiere"
       ]
      },
      {
       "b": "b",
       "quelle": "Hausverwaltung Kramer & Sohn",
       "zeilen": [
        "3 Zimmer, Erdgeschoss mit Garten",
        "Hund und Katze willkommen",
        "980 Euro warm, frei ab 1. März"
       ]
      },
      {
       "b": "c",
       "quelle": "WG Lindenstraße",
       "zeilen": [
        "Zimmer in netter Studenten-WG, 18 m²",
        "390 Euro warm, ab sofort",
        "Nur Nichtraucher!"
       ]
      },
      {
       "b": "d",
       "quelle": "Apartmentvermietung Zentral",
       "zeilen": [
        "1-Zimmer-Apartment, komplett möbliert",
        "Nähe Hauptbahnhof",
        "Befristet auf 6 Monate",
        "650 Euro inklusive Nebenkosten"
       ]
      },
      {
       "b": "e",
       "quelle": "Wohnstift Am Park",
       "zeilen": [
        "Barrierefreie 2-Zimmer-Wohnung mit Aufzug",
        "Nur für Mieter ab 60 Jahren",
        "690 Euro warm"
       ]
      },
      {
       "b": "f",
       "quelle": "Umzüge Kistenweise",
       "zeilen": [
        "Komplettumzug mit Packservice",
        "Festpreis nach kostenloser Besichtigung",
        "Auch samstags"
       ]
      },
      {
       "b": "g",
       "quelle": "Autovermietung Rollmobil",
       "zeilen": [
        "Transporter für Selbstfahrer",
        "Führerschein Klasse B genügt",
        "Ab 49 Euro pro Tag"
       ]
      },
      {
       "b": "h",
       "quelle": "Möbelbörse der Diakonie",
       "zeilen": [
        "Gut erhaltene gebrauchte Möbel",
        "Gegen kleine Spende",
        "Mittwoch und Samstag, Abholung selbst"
       ]
      },
      {
       "b": "i",
       "quelle": "Räumdienst Becker",
       "zeilen": [
        "Wohnungsauflösung, Keller, Dachboden",
        "Wir räumen alles leer",
        "Kostenloses Angebot"
       ]
      },
      {
       "b": "j",
       "quelle": "Malerbetrieb Farbenfroh",
       "zeilen": [
        "Renovierung beim Auszug",
        "Wände und Decken streichen",
        "Termin innerhalb einer Woche"
       ]
      },
      {
       "b": "k",
       "quelle": "Lagerhaus Platzwunder",
       "zeilen": [
        "Lagerräume ab 2 m²",
        "Mindestmiete 1 Monat",
        "Zugang rund um die Uhr",
        "Ab 39 Euro im Monat"
       ]
      },
      {
       "b": "l",
       "quelle": "Privat",
       "zeilen": [
        "Wohnungstausch: Biete 4 Zimmer am Stadtrand",
        "Suche 2 Zimmer in der Innenstadt",
        "Nur Tausch, kein Verkauf"
       ]
      }
     ],
     "aufgaben": [
      {
       "situation": "Sie ziehen für ein halbes Jahr beruflich in die Stadt und haben keine eigenen Möbel dabei.",
       "loesung": "d",
       "erklaerung": "Das Apartment ist möbliert und auf sechs Monate befristet."
      },
      {
       "situation": "Sie haben zwei Katzen und suchen eine größere Wohnung für Ihre Familie.",
       "loesung": "b",
       "erklaerung": "Drei Zimmer und Haustiere erlaubt. In Wohnung a sind Haustiere verboten."
      },
      {
       "situation": "Ihr Bruder studiert, raucht und sucht ein günstiges Zimmer in einer WG.",
       "loesung": "x",
       "erklaerung": "Das WG-Zimmer c wäre günstig, ist aber nur für Nichtraucher. Sonst gibt es kein Zimmer."
      },
      {
       "situation": "Ihre Großmutter ist 78 und kann keine Treppen mehr steigen. Sie sucht eine kleinere Wohnung.",
       "loesung": "e",
       "erklaerung": "Die Wohnung e ist barrierefrei, hat einen Aufzug und ist für Menschen ab 60. Wohnung a liegt im 3. Stock ohne Aufzug."
      },
      {
       "situation": "Sie arbeiten die nächsten drei Monate im Ausland. Ihre Möbel müssen so lange irgendwo bleiben.",
       "loesung": "k",
       "erklaerung": "Im Lagerraum kann man Möbel schon ab einem Monat unterstellen."
      },
      {
       "situation": "Sie möchten mit Freunden selbst umziehen und brauchen nur ein großes Fahrzeug.",
       "loesung": "g",
       "erklaerung": "Anzeige g vermietet Transporter an Selbstfahrer. Anzeige f macht den ganzen Umzug."
      },
      {
       "situation": "Beim Auszug müssen Sie die Wohnung frisch gestrichen übergeben, haben aber selbst keine Zeit.",
       "loesung": "j",
       "erklaerung": "Der Malerbetrieb streicht beim Auszug und hat schnell einen Termin."
      },
      {
       "situation": "Ihre neue Wohnung ist noch fast leer, und Sie haben nur wenig Geld für Möbel.",
       "loesung": "h",
       "erklaerung": "Die Möbelbörse gibt gebrauchte Möbel gegen eine kleine Spende ab."
      },
      {
       "situation": "Sie ziehen um, arbeiten sehr viel und möchten, dass eine Firma alles einpackt und transportiert – am liebsten am Samstag.",
       "loesung": "f",
       "erklaerung": "Kistenweise bietet Packservice und arbeitet auch samstags."
      },
      {
       "situation": "Ihr Onkel ist ins Pflegeheim gezogen. Sein voller Keller und der Dachboden müssen leer geräumt werden.",
       "loesung": "i",
       "erklaerung": "Der Räumdienst räumt Keller und Dachboden komplett leer."
      }
     ]
    }
   ]
  },
  {
   "nr": 4,
   "art": "textwahl",
   "name": "Sprachbausteine: Grammatik",
   "kurz": "Ein Brief, zehn Lücken, je a/b/c",
   "was": "Du liest einen Brief oder eine E-Mail mit zehn Lücken. Für jede Lücke gibt es drei Möglichkeiten. Nur eine ist grammatisch richtig.",
   "tipp": "Lies den ganzen Satz bis zum Ende — oft entscheidet erst das Verb am Satzende, ob „weil\" oder „deshalb\" passt.",
   "zeichen": "🧩",
   "farbe": "lila",
   "punkte": 10,
   "runden": [
    {
     "id": "sb1s1",
     "text": {
      "sorte": "email",
      "quelle": "E-Mail",
      "titel": "Endlich in der neuen Wohnung",
      "zeilen": [
       "Liebe Marta,",
       "vielen Dank für deine Nachricht! Entschuldige, dass ich erst heute antworte, aber seit dem Umzug hatte ich kaum Zeit. Ich bin sehr froh, __(1)__ alles so gut geklappt hat. Die neue Wohnung liegt in einer ruhigen Straße, __(2)__ es viele kleine Cafés und einen Bäcker gibt. Das Wohnzimmer ist zwar klein, __(3)__ es hat einen schönen Balkon mit Blick auf den Park.",
       "Am Wochenende habe ich mit meinem Bruder die Küche __(4)__. Das hat fast den ganzen Samstag gedauert. Leider hat __(5)__ mein Bruder dabei am Finger verletzt, aber zum Glück war es nicht schlimm.",
       "Ich möchte bald eine kleine Party machen, __(6)__ ihr meine neue Wohnung kennenlernt. Hast du Lust, am Samstag, dem 14. Juni, __(7)__ kommen? Ich freue mich schon sehr __(8)__ euren Besuch. __(9)__ du mir bis Mittwoch Bescheid geben, ob du kommst? Bring gern auch deinen Freund mit, ich habe __(10)__ ja schon lange nicht mehr gesehen.",
       "Viele Grüße",
       "deine Elif"
      ]
     },
     "aufgaben": [
      {
       "frage": "Was passt in Lücke 1?",
       "opt": [
        "ob",
        "dass",
        "wenn"
       ],
       "loesung": 1,
       "fest": true,
       "erklaerung": "Nach „froh sein\" folgt ein Inhaltssatz mit „dass\"; „ob\" steht nur bei offenen Fragen."
      },
      {
       "frage": "Was passt in Lücke 2?",
       "opt": [
        "in der",
        "in die",
        "in dem"
       ],
       "loesung": 0,
       "fest": true,
       "erklaerung": "Relativpronomen bezieht sich auf „die Straße\" (feminin); Ort, also Dativ: „in der\"."
      },
      {
       "frage": "Was passt in Lücke 3?",
       "opt": [
        "trotzdem",
        "deshalb",
        "aber"
       ],
       "loesung": 2,
       "fest": true,
       "erklaerung": "Feste Verbindung „zwar … aber\"; nach „trotzdem\" müsste das Verb direkt folgen."
      },
      {
       "frage": "Was passt in Lücke 4?",
       "opt": [
        "aufgebaut",
        "aufbauen",
        "aufgebaute"
       ],
       "loesung": 0,
       "fest": true,
       "erklaerung": "Perfekt mit „haben\" braucht das Partizip II: „aufgebaut\"."
      },
      {
       "frage": "Was passt in Lücke 5?",
       "opt": [
        "ihn",
        "sich",
        "ihm"
       ],
       "loesung": 1,
       "fest": true,
       "erklaerung": "Reflexives Verb „sich verletzen\": Reflexivpronomen in der 3. Person ist „sich\"."
      },
      {
       "frage": "Was passt in Lücke 6?",
       "opt": [
        "damit",
        "um",
        "weil"
       ],
       "loesung": 0,
       "fest": true,
       "erklaerung": "Ziel mit eigenem Subjekt („ihr\") verlangt „damit\"; „um … zu\" geht nur bei gleichem Subjekt."
      },
      {
       "frage": "Was passt in Lücke 7?",
       "opt": [
        "um",
        "zu",
        "für"
       ],
       "loesung": 1,
       "fest": true,
       "erklaerung": "„Lust haben\" wird mit „zu\" + Infinitiv ergänzt."
      },
      {
       "frage": "Was passt in Lücke 8?",
       "opt": [
        "über",
        "an",
        "auf"
       ],
       "loesung": 2,
       "fest": true,
       "erklaerung": "„sich freuen auf\" für etwas, das noch kommt; „über\" für etwas, das schon passiert ist."
      },
      {
       "frage": "Was passt in Lücke 9?",
       "opt": [
        "Könntest",
        "Konntest",
        "Könntet"
       ],
       "loesung": 0,
       "fest": true,
       "erklaerung": "Höfliche Bitte im Konjunktiv II, 2. Person Singular zu „du\": „Könntest\"."
      },
      {
       "frage": "Was passt in Lücke 10?",
       "opt": [
        "ihm",
        "ihn",
        "sein"
       ],
       "loesung": 1,
       "fest": true,
       "erklaerung": "„jemanden sehen\" verlangt den Akkusativ: „ihn\"."
      }
     ]
    },
    {
     "id": "sb1s2",
     "text": {
      "sorte": "brief",
      "quelle": "Brief",
      "titel": "Defekte Heizung in der Wohnung 3b",
      "zeilen": [
       "Sehr geehrter Herr Kowalski,",
       "ich wohne seit März in Ihrem Haus in der Lindenstraße 12 und wende mich heute __(1)__ einem Problem an Sie. Seit letztem Montag funktioniert die Heizung im Schlafzimmer nicht mehr, __(2)__ ich sie auf die höchste Stufe stelle. Ich habe schon versucht, sie selbst zu entlüften, aber das hat leider nichts __(3)__. Nachts wird es inzwischen sehr kalt, __(4)__ schlafe ich zurzeit im Wohnzimmer. Mein Nachbar hat mir erzählt, __(5)__ er im letzten Winter das gleiche Problem hatte.",
       "Ich wäre Ihnen sehr dankbar, wenn Sie so bald wie möglich einen Handwerker __(6)__ könnten. Ich bin in der Regel ab 16 Uhr zu Hause. Am Vormittag kann der Handwerker aber auch gern zu meiner Nachbarin gehen, __(7)__ einen Schlüssel für meine Wohnung hat. Ich hoffe sehr, dass die Heizung noch vor dem Wochenende repariert __(8)__ kann. Bitte geben Sie mir kurz Bescheid, __(9)__ Tag Ihnen passt.",
       "Ich danke Ihnen schon jetzt __(10)__ Ihre Hilfe.",
       "Mit freundlichen Grüßen",
       "Amira Haddad"
      ]
     },
     "aufgaben": [
      {
       "frage": "Was passt in Lücke 1?",
       "opt": [
        "mit",
        "von",
        "über"
       ],
       "loesung": 0,
       "fest": true,
       "erklaerung": "Feste Wendung: „sich mit einem Problem an jemanden wenden\"."
      },
      {
       "frage": "Was passt in Lücke 2?",
       "opt": [
        "obwohl",
        "weil",
        "deshalb"
       ],
       "loesung": 0,
       "fest": true,
       "erklaerung": "Gegensatz (höchste Stufe, trotzdem kalt) im Nebensatz: „obwohl\"."
      },
      {
       "frage": "Was passt in Lücke 3?",
       "opt": [
        "helfen",
        "geholft",
        "geholfen"
       ],
       "loesung": 2,
       "fest": true,
       "erklaerung": "Perfekt mit „haben\"; „helfen\" ist unregelmäßig: „geholfen\"."
      },
      {
       "frage": "Was passt in Lücke 4?",
       "opt": [
        "weil",
        "deshalb",
        "denn"
       ],
       "loesung": 1,
       "fest": true,
       "erklaerung": "Nach der Lücke steht das Verb direkt („schlafe ich\") – das passt nur zum Adverb „deshalb\"."
      },
      {
       "frage": "Was passt in Lücke 5?",
       "opt": [
        "dass",
        "ob",
        "was"
       ],
       "loesung": 0,
       "fest": true,
       "erklaerung": "„erzählen, dass …\" leitet eine Aussage ein, keine Frage."
      },
      {
       "frage": "Was passt in Lücke 6?",
       "opt": [
        "schickt",
        "schicken",
        "geschickt"
       ],
       "loesung": 1,
       "fest": true,
       "erklaerung": "Nach dem Modalverb „könnten\" steht der Infinitiv."
      },
      {
       "frage": "Was passt in Lücke 7?",
       "opt": [
        "der",
        "denen",
        "die"
       ],
       "loesung": 2,
       "fest": true,
       "erklaerung": "Bezug auf „Nachbarin\" (feminin), Subjekt im Relativsatz: „die\"."
      },
      {
       "frage": "Was passt in Lücke 8?",
       "opt": [
        "werden",
        "wird",
        "worden"
       ],
       "loesung": 0,
       "fest": true,
       "erklaerung": "Passiv mit Modalverb: Partizip II + „werden\" im Infinitiv („repariert werden kann\")."
      },
      {
       "frage": "Was passt in Lücke 9?",
       "opt": [
        "welchen",
        "welcher",
        "welchem"
       ],
       "loesung": 1,
       "fest": true,
       "erklaerung": "„Tag\" ist hier Subjekt („der Tag passt Ihnen\"), also Nominativ: „welcher\"."
      },
      {
       "frage": "Was passt in Lücke 10?",
       "opt": [
        "über",
        "auf",
        "für"
       ],
       "loesung": 2,
       "fest": true,
       "erklaerung": "„sich bedanken / danken für etwas\"."
      }
     ]
    },
    {
     "id": "sb1s3",
     "text": {
      "sorte": "email",
      "quelle": "E-Mail",
      "titel": "Anfrage zum Fotografiekurs",
      "zeilen": [
       "Sehr geehrte Damen und Herren,",
       "auf Ihrer Internetseite habe ich gelesen, dass Sie ab Oktober einen Fotografiekurs für Anfänger __(1)__. Ich interessiere mich schon lange __(2)__ Fotografie, habe aber bisher nur mit dem Handy fotografiert. Bevor ich mich anmelde, hätte ich noch einige Fragen.",
       "Zuerst möchte ich wissen, __(3)__ ich eine eigene Kamera brauche. Ich möchte nämlich kein teures Gerät kaufen, __(4)__ ich noch nicht weiß, ob mir das Hobby lange Spaß macht. Außerdem arbeite ich im Schichtdienst und kann nicht jede Woche kommen. Ist es möglich, verpasste Termine __(5)__?",
       "Ich habe auch gelesen, dass es am Ende des Kurses einen __(6)__ Ausflug in den Stadtpark gibt. Muss man sich dafür extra anmelden? Und noch eine letzte Frage: Bekommen Rentner eine Ermäßigung? Ich frage für meinen Vater, __(7)__ auch gern mitmachen würde. __(8)__ es möglich ist, würden wir den Kurs gern zusammen besuchen.",
       "Ich würde mich sehr __(9)__, wenn Sie mir bald antworten. Falls Sie lieber anrufen möchten, schicke ich __(10)__ gern meine Telefonnummer.",
       "Mit freundlichen Grüßen",
       "Tomasz Nowak"
      ]
     },
     "aufgaben": [
      {
       "frage": "Was passt in Lücke 1?",
       "opt": [
        "angeboten",
        "anbieten",
        "anbietet"
       ],
       "loesung": 1,
       "fest": true,
       "erklaerung": "Im dass-Satz steht das konjugierte Verb am Ende, passend zu „Sie\": „anbieten\"."
      },
      {
       "frage": "Was passt in Lücke 2?",
       "opt": [
        "für",
        "an",
        "über"
       ],
       "loesung": 0,
       "fest": true,
       "erklaerung": "Verb mit fester Präposition: „sich interessieren für\"."
      },
      {
       "frage": "Was passt in Lücke 3?",
       "opt": [
        "dass",
        "wenn",
        "ob"
       ],
       "loesung": 2,
       "fest": true,
       "erklaerung": "Indirekte Ja/Nein-Frage nach „wissen möchten\": „ob\"."
      },
      {
       "frage": "Was passt in Lücke 4?",
       "opt": [
        "denn",
        "weil",
        "deshalb"
       ],
       "loesung": 1,
       "fest": true,
       "erklaerung": "Das Verb steht am Satzende („weiß\"), also Nebensatz mit „weil\"."
      },
      {
       "frage": "Was passt in Lücke 5?",
       "opt": [
        "nachzuholen",
        "nachholen zu",
        "zu nachholen"
       ],
       "loesung": 0,
       "fest": true,
       "erklaerung": "Bei trennbaren Verben steht „zu\" zwischen Präfix und Verb: „nachzuholen\"."
      },
      {
       "frage": "Was passt in Lücke 6?",
       "opt": [
        "gemeinsames",
        "gemeinsamen",
        "gemeinsamer"
       ],
       "loesung": 1,
       "fest": true,
       "erklaerung": "„es gibt\" + Akkusativ; „einen Ausflug\" (maskulin): „einen gemeinsamen\"."
      },
      {
       "frage": "Was passt in Lücke 7?",
       "opt": [
        "dem",
        "der",
        "den"
       ],
       "loesung": 1,
       "fest": true,
       "erklaerung": "Bezug auf „Vater\" (maskulin), Subjekt im Relativsatz: „der\"."
      },
      {
       "frage": "Was passt in Lücke 8?",
       "opt": [
        "Wenn",
        "Als",
        "Ob"
       ],
       "loesung": 0,
       "fest": true,
       "erklaerung": "Bedingung in der Gegenwart: „wenn\"; „als\" nur für ein einmaliges Ereignis in der Vergangenheit."
      },
      {
       "frage": "Was passt in Lücke 9?",
       "opt": [
        "gefreut",
        "freue",
        "freuen"
       ],
       "loesung": 2,
       "fest": true,
       "erklaerung": "Konjunktiv II mit „würde\" + Infinitiv: „würde mich freuen\"."
      },
      {
       "frage": "Was passt in Lücke 10?",
       "opt": [
        "Sie",
        "Ihnen",
        "Ihr"
       ],
       "loesung": 1,
       "fest": true,
       "erklaerung": "„jemandem etwas schicken\": Person im Dativ, höflich „Ihnen\"."
      }
     ]
    }
   ]
  },
  {
   "nr": 5,
   "art": "textwahl",
   "name": "Sprachbausteine: Wortschatz",
   "kurz": "Ein Text, zehn Lücken, fünfzehn Wörter",
   "was": "Du liest einen Text mit zehn Lücken. Dazu gibt es fünfzehn Wörter. Jedes Wort passt höchstens einmal, fünf bleiben übrig.",
   "tipp": "Setz zuerst die Lücken ein, bei denen du sicher bist. Dann bleiben für die schweren weniger Wörter übrig.",
   "zeichen": "🔤",
   "farbe": "turq",
   "punkte": 10,
   "runden": [
    {
     "id": "sb2s1",
     "text": {
      "sorte": "brief",
      "quelle": "Mitteilung",
      "titel": "Hausverwaltung: Renovierung im Treppenhaus",
      "zeilen": [
       "Liebe Bewohner des Hauses Ahornweg 7,",
       "wie wir Ihnen __(1)__ im Frühjahr angekündigt haben, wird das Treppenhaus ab dem 3. November renoviert. Die Arbeiten __(2)__ voraussichtlich drei Wochen und beginnen werktags um 7:30 Uhr. In dieser Zeit kann es leider zu Lärm und Schmutz __(3)__. Wir bitten Sie dafür um Ihr __(4)__.",
       "Bitte stellen Sie ab dem 1. November keine Schuhe, Fahrräder oder Kinderwagen mehr im Flur ab, __(5)__ die Maler ungestört arbeiten können. Der Aufzug bleibt in den ersten beiden Wochen außer __(6)__. Wer __(7)__ seines Alters oder einer Krankheit Hilfe beim Einkaufen braucht, kann sich gern bei uns melden. Unser Hausmeister, Herr Demir, ist __(8)__ jeden Vormittag von 8 bis 12 Uhr vor Ort. Falls Sie Fragen haben, __(9)__ Sie uns einfach an.",
       "Wir freuen uns, dass das Haus nach der Renovierung wieder in einem guten __(10)__ ist.",
       "Mit freundlichen Grüßen",
       "Ihre Hausverwaltung Brenner"
      ]
     },
     "aufgaben": [
      {
       "frage": "Welches Wort passt in Lücke 1?",
       "opt": [
        "bereits",
        "dauern",
        "dauert",
        "kommen",
        "Verständnis",
        "Geduld",
        "damit",
        "obwohl",
        "Betrieb",
        "wegen",
        "trotz",
        "außerdem",
        "rufen",
        "Zustand",
        "Ordnung"
       ],
       "loesung": 0,
       "fest": true,
       "erklaerung": "„Geduld\" und „Ordnung\" sind feminin und passen nicht zu „Ihr\" bzw. „einem guten\"; „dauert\" ist Singular, „Die Arbeiten\" Plural. Feste Wendungen: „es kommt zu\", „außer Betrieb\"."
      },
      {
       "frage": "Welches Wort passt in Lücke 2?",
       "opt": [
        "bereits",
        "dauern",
        "dauert",
        "kommen",
        "Verständnis",
        "Geduld",
        "damit",
        "obwohl",
        "Betrieb",
        "wegen",
        "trotz",
        "außerdem",
        "rufen",
        "Zustand",
        "Ordnung"
       ],
       "loesung": 1,
       "fest": true,
       "erklaerung": "Richtig ist „dauern\". Jedes Wort passt nur einmal."
      },
      {
       "frage": "Welches Wort passt in Lücke 3?",
       "opt": [
        "bereits",
        "dauern",
        "dauert",
        "kommen",
        "Verständnis",
        "Geduld",
        "damit",
        "obwohl",
        "Betrieb",
        "wegen",
        "trotz",
        "außerdem",
        "rufen",
        "Zustand",
        "Ordnung"
       ],
       "loesung": 3,
       "fest": true,
       "erklaerung": "Richtig ist „kommen\". Jedes Wort passt nur einmal."
      },
      {
       "frage": "Welches Wort passt in Lücke 4?",
       "opt": [
        "bereits",
        "dauern",
        "dauert",
        "kommen",
        "Verständnis",
        "Geduld",
        "damit",
        "obwohl",
        "Betrieb",
        "wegen",
        "trotz",
        "außerdem",
        "rufen",
        "Zustand",
        "Ordnung"
       ],
       "loesung": 4,
       "fest": true,
       "erklaerung": "Richtig ist „Verständnis\". Jedes Wort passt nur einmal."
      },
      {
       "frage": "Welches Wort passt in Lücke 5?",
       "opt": [
        "bereits",
        "dauern",
        "dauert",
        "kommen",
        "Verständnis",
        "Geduld",
        "damit",
        "obwohl",
        "Betrieb",
        "wegen",
        "trotz",
        "außerdem",
        "rufen",
        "Zustand",
        "Ordnung"
       ],
       "loesung": 6,
       "fest": true,
       "erklaerung": "Richtig ist „damit\". Jedes Wort passt nur einmal."
      },
      {
       "frage": "Welches Wort passt in Lücke 6?",
       "opt": [
        "bereits",
        "dauern",
        "dauert",
        "kommen",
        "Verständnis",
        "Geduld",
        "damit",
        "obwohl",
        "Betrieb",
        "wegen",
        "trotz",
        "außerdem",
        "rufen",
        "Zustand",
        "Ordnung"
       ],
       "loesung": 8,
       "fest": true,
       "erklaerung": "Richtig ist „Betrieb\". Jedes Wort passt nur einmal."
      },
      {
       "frage": "Welches Wort passt in Lücke 7?",
       "opt": [
        "bereits",
        "dauern",
        "dauert",
        "kommen",
        "Verständnis",
        "Geduld",
        "damit",
        "obwohl",
        "Betrieb",
        "wegen",
        "trotz",
        "außerdem",
        "rufen",
        "Zustand",
        "Ordnung"
       ],
       "loesung": 9,
       "fest": true,
       "erklaerung": "Richtig ist „wegen\". Jedes Wort passt nur einmal."
      },
      {
       "frage": "Welches Wort passt in Lücke 8?",
       "opt": [
        "bereits",
        "dauern",
        "dauert",
        "kommen",
        "Verständnis",
        "Geduld",
        "damit",
        "obwohl",
        "Betrieb",
        "wegen",
        "trotz",
        "außerdem",
        "rufen",
        "Zustand",
        "Ordnung"
       ],
       "loesung": 11,
       "fest": true,
       "erklaerung": "Richtig ist „außerdem\". Jedes Wort passt nur einmal."
      },
      {
       "frage": "Welches Wort passt in Lücke 9?",
       "opt": [
        "bereits",
        "dauern",
        "dauert",
        "kommen",
        "Verständnis",
        "Geduld",
        "damit",
        "obwohl",
        "Betrieb",
        "wegen",
        "trotz",
        "außerdem",
        "rufen",
        "Zustand",
        "Ordnung"
       ],
       "loesung": 12,
       "fest": true,
       "erklaerung": "Richtig ist „rufen\". Jedes Wort passt nur einmal."
      },
      {
       "frage": "Welches Wort passt in Lücke 10?",
       "opt": [
        "bereits",
        "dauern",
        "dauert",
        "kommen",
        "Verständnis",
        "Geduld",
        "damit",
        "obwohl",
        "Betrieb",
        "wegen",
        "trotz",
        "außerdem",
        "rufen",
        "Zustand",
        "Ordnung"
       ],
       "loesung": 13,
       "fest": true,
       "erklaerung": "Richtig ist „Zustand\". Jedes Wort passt nur einmal."
      }
     ]
    },
    {
     "id": "sb2s2",
     "text": {
      "sorte": "brief",
      "quelle": "Mitteilung",
      "titel": "Elternbrief: Sommerfest in der Kita",
      "zeilen": [
       "Liebe Eltern,",
       "am Freitag, dem 27. Juni, __(1)__ unser Sommerfest statt. Dazu sind Sie und Ihre ganze Familie herzlich __(2)__. Das Fest beginnt um 15 Uhr mit einem kleinen Theaterstück, das die Kinder in den letzten Wochen __(3)__ geübt haben. Danach gibt es Spiele im Garten, und für die Kleinsten kommt __(4)__ ein echter Clown.",
       "Wie jedes Jahr möchten wir gemeinsam ein großes Buffet __(5)__ die Beine stellen. Wir würden uns freuen, wenn jede Familie einen Kuchen oder einen Salat mitbringt. Bitte __(6)__ Sie sich bis zum 20. Juni in die Liste an der Eingangstür ein. Getränke werden vom Elternbeirat __(7)__ Verfügung gestellt. __(8)__ es regnet, feiern wir in der Turnhalle.",
       "Für den Aufbau __(9)__ wir noch zwei oder drei Eltern, die uns am Vormittag helfen. Wer Zeit hat, kann sich gern __(10)__ Frau Yilmaz in der Gruppe „Sonnenblumen“ melden.",
       "Wir freuen uns auf einen schönen Nachmittag mit Ihnen!",
       "Herzliche Grüße",
       "Ihr Kita-Team"
      ]
     },
     "aufgaben": [
      {
       "frage": "Welches Wort passt in Lücke 1?",
       "opt": [
        "findet",
        "nimmt",
        "eingeladen",
        "fleißig",
        "sogar",
        "auf",
        "unter",
        "tragen",
        "zur",
        "zum",
        "Falls",
        "Ob",
        "brauchen",
        "bei",
        "mit"
       ],
       "loesung": 0,
       "fest": true,
       "erklaerung": "Feste Verbindungen: „stattfinden\", „zur Verfügung stellen\" (nicht „zum\"), „auf die Beine stellen\", „sich bei jemandem melden\". „Ob\" leitet keine Bedingung ein."
      },
      {
       "frage": "Welches Wort passt in Lücke 2?",
       "opt": [
        "findet",
        "nimmt",
        "eingeladen",
        "fleißig",
        "sogar",
        "auf",
        "unter",
        "tragen",
        "zur",
        "zum",
        "Falls",
        "Ob",
        "brauchen",
        "bei",
        "mit"
       ],
       "loesung": 2,
       "fest": true,
       "erklaerung": "Richtig ist „eingeladen\". Jedes Wort passt nur einmal."
      },
      {
       "frage": "Welches Wort passt in Lücke 3?",
       "opt": [
        "findet",
        "nimmt",
        "eingeladen",
        "fleißig",
        "sogar",
        "auf",
        "unter",
        "tragen",
        "zur",
        "zum",
        "Falls",
        "Ob",
        "brauchen",
        "bei",
        "mit"
       ],
       "loesung": 3,
       "fest": true,
       "erklaerung": "Richtig ist „fleißig\". Jedes Wort passt nur einmal."
      },
      {
       "frage": "Welches Wort passt in Lücke 4?",
       "opt": [
        "findet",
        "nimmt",
        "eingeladen",
        "fleißig",
        "sogar",
        "auf",
        "unter",
        "tragen",
        "zur",
        "zum",
        "Falls",
        "Ob",
        "brauchen",
        "bei",
        "mit"
       ],
       "loesung": 4,
       "fest": true,
       "erklaerung": "Richtig ist „sogar\". Jedes Wort passt nur einmal."
      },
      {
       "frage": "Welches Wort passt in Lücke 5?",
       "opt": [
        "findet",
        "nimmt",
        "eingeladen",
        "fleißig",
        "sogar",
        "auf",
        "unter",
        "tragen",
        "zur",
        "zum",
        "Falls",
        "Ob",
        "brauchen",
        "bei",
        "mit"
       ],
       "loesung": 5,
       "fest": true,
       "erklaerung": "Richtig ist „auf\". Jedes Wort passt nur einmal."
      },
      {
       "frage": "Welches Wort passt in Lücke 6?",
       "opt": [
        "findet",
        "nimmt",
        "eingeladen",
        "fleißig",
        "sogar",
        "auf",
        "unter",
        "tragen",
        "zur",
        "zum",
        "Falls",
        "Ob",
        "brauchen",
        "bei",
        "mit"
       ],
       "loesung": 7,
       "fest": true,
       "erklaerung": "Richtig ist „tragen\". Jedes Wort passt nur einmal."
      },
      {
       "frage": "Welches Wort passt in Lücke 7?",
       "opt": [
        "findet",
        "nimmt",
        "eingeladen",
        "fleißig",
        "sogar",
        "auf",
        "unter",
        "tragen",
        "zur",
        "zum",
        "Falls",
        "Ob",
        "brauchen",
        "bei",
        "mit"
       ],
       "loesung": 8,
       "fest": true,
       "erklaerung": "Richtig ist „zur\". Jedes Wort passt nur einmal."
      },
      {
       "frage": "Welches Wort passt in Lücke 8?",
       "opt": [
        "findet",
        "nimmt",
        "eingeladen",
        "fleißig",
        "sogar",
        "auf",
        "unter",
        "tragen",
        "zur",
        "zum",
        "Falls",
        "Ob",
        "brauchen",
        "bei",
        "mit"
       ],
       "loesung": 10,
       "fest": true,
       "erklaerung": "Richtig ist „Falls\". Jedes Wort passt nur einmal."
      },
      {
       "frage": "Welches Wort passt in Lücke 9?",
       "opt": [
        "findet",
        "nimmt",
        "eingeladen",
        "fleißig",
        "sogar",
        "auf",
        "unter",
        "tragen",
        "zur",
        "zum",
        "Falls",
        "Ob",
        "brauchen",
        "bei",
        "mit"
       ],
       "loesung": 12,
       "fest": true,
       "erklaerung": "Richtig ist „brauchen\". Jedes Wort passt nur einmal."
      },
      {
       "frage": "Welches Wort passt in Lücke 10?",
       "opt": [
        "findet",
        "nimmt",
        "eingeladen",
        "fleißig",
        "sogar",
        "auf",
        "unter",
        "tragen",
        "zur",
        "zum",
        "Falls",
        "Ob",
        "brauchen",
        "bei",
        "mit"
       ],
       "loesung": 13,
       "fest": true,
       "erklaerung": "Richtig ist „bei\". Jedes Wort passt nur einmal."
      }
     ]
    },
    {
     "id": "sb2s3",
     "text": {
      "sorte": "brief",
      "quelle": "Mitteilung",
      "titel": "Mitteilung der Firma: Betriebsausflug",
      "zeilen": [
       "Liebes Team,",
       "wie jedes Jahr __(1)__ auch in diesem Sommer ein Betriebsausflug stattfinden. Diesmal fahren wir am 18. Juli mit dem Schiff von Neustadt nach Bergheim, wo wir gemeinsam zu Mittag __(2)__. Der Ausflug findet während der Arbeitszeit statt, die Kosten __(3)__ die Firma.",
       "Damit wir alles gut planen können, bitten wir Sie, sich bis zum 30. Juni __(4)__ anzumelden. Tragen Sie sich dazu einfach in die Liste __(5)__, die im Pausenraum hängt. Bitte geben Sie __(6)__ an, ob Sie vegetarisch essen oder eine Allergie haben.",
       "Treffpunkt ist um 9 Uhr am Hafen. Von dort __(7)__ das Schiff pünktlich um halb zehn ab. Bitte denken Sie __(8)__ bequeme Schuhe, denn am Nachmittag machen wir eine kleine Wanderung. Bei schlechtem Wetter findet der Ausflug __(9)__ statt, dann besuchen wir statt der Wanderung ein Museum. Wenn Sie Fragen haben, __(10)__ Sie sich gern an Frau Petrović aus der Personalabteilung.",
       "Wir freuen uns auf einen schönen Tag mit Ihnen!",
       "Viele Grüße",
       "Ihre Geschäftsleitung"
      ]
     },
     "aufgaben": [
      {
       "frage": "Welches Wort passt in Lücke 1?",
       "opt": [
        "soll",
        "sollen",
        "essen",
        "übernimmt",
        "übernehmen",
        "verbindlich",
        "ein",
        "auf",
        "außerdem",
        "fährt",
        "an",
        "trotzdem",
        "obwohl",
        "wenden",
        "melden"
       ],
       "loesung": 0,
       "fest": true,
       "erklaerung": "Subjekt ist „ein Betriebsausflug\" bzw. „die Firma\" (Singular), daher „soll\" und „übernimmt\". Man „wendet sich an\" jemanden, aber „meldet sich bei\" jemandem; „obwohl\" passt nicht ins Mittelfeld."
      },
      {
       "frage": "Welches Wort passt in Lücke 2?",
       "opt": [
        "soll",
        "sollen",
        "essen",
        "übernimmt",
        "übernehmen",
        "verbindlich",
        "ein",
        "auf",
        "außerdem",
        "fährt",
        "an",
        "trotzdem",
        "obwohl",
        "wenden",
        "melden"
       ],
       "loesung": 2,
       "fest": true,
       "erklaerung": "Richtig ist „essen\". Jedes Wort passt nur einmal."
      },
      {
       "frage": "Welches Wort passt in Lücke 3?",
       "opt": [
        "soll",
        "sollen",
        "essen",
        "übernimmt",
        "übernehmen",
        "verbindlich",
        "ein",
        "auf",
        "außerdem",
        "fährt",
        "an",
        "trotzdem",
        "obwohl",
        "wenden",
        "melden"
       ],
       "loesung": 3,
       "fest": true,
       "erklaerung": "Richtig ist „übernimmt\". Jedes Wort passt nur einmal."
      },
      {
       "frage": "Welches Wort passt in Lücke 4?",
       "opt": [
        "soll",
        "sollen",
        "essen",
        "übernimmt",
        "übernehmen",
        "verbindlich",
        "ein",
        "auf",
        "außerdem",
        "fährt",
        "an",
        "trotzdem",
        "obwohl",
        "wenden",
        "melden"
       ],
       "loesung": 5,
       "fest": true,
       "erklaerung": "Richtig ist „verbindlich\". Jedes Wort passt nur einmal."
      },
      {
       "frage": "Welches Wort passt in Lücke 5?",
       "opt": [
        "soll",
        "sollen",
        "essen",
        "übernimmt",
        "übernehmen",
        "verbindlich",
        "ein",
        "auf",
        "außerdem",
        "fährt",
        "an",
        "trotzdem",
        "obwohl",
        "wenden",
        "melden"
       ],
       "loesung": 6,
       "fest": true,
       "erklaerung": "Richtig ist „ein\". Jedes Wort passt nur einmal."
      },
      {
       "frage": "Welches Wort passt in Lücke 6?",
       "opt": [
        "soll",
        "sollen",
        "essen",
        "übernimmt",
        "übernehmen",
        "verbindlich",
        "ein",
        "auf",
        "außerdem",
        "fährt",
        "an",
        "trotzdem",
        "obwohl",
        "wenden",
        "melden"
       ],
       "loesung": 8,
       "fest": true,
       "erklaerung": "Richtig ist „außerdem\". Jedes Wort passt nur einmal."
      },
      {
       "frage": "Welches Wort passt in Lücke 7?",
       "opt": [
        "soll",
        "sollen",
        "essen",
        "übernimmt",
        "übernehmen",
        "verbindlich",
        "ein",
        "auf",
        "außerdem",
        "fährt",
        "an",
        "trotzdem",
        "obwohl",
        "wenden",
        "melden"
       ],
       "loesung": 9,
       "fest": true,
       "erklaerung": "Richtig ist „fährt\". Jedes Wort passt nur einmal."
      },
      {
       "frage": "Welches Wort passt in Lücke 8?",
       "opt": [
        "soll",
        "sollen",
        "essen",
        "übernimmt",
        "übernehmen",
        "verbindlich",
        "ein",
        "auf",
        "außerdem",
        "fährt",
        "an",
        "trotzdem",
        "obwohl",
        "wenden",
        "melden"
       ],
       "loesung": 10,
       "fest": true,
       "erklaerung": "Richtig ist „an\". Jedes Wort passt nur einmal."
      },
      {
       "frage": "Welches Wort passt in Lücke 9?",
       "opt": [
        "soll",
        "sollen",
        "essen",
        "übernimmt",
        "übernehmen",
        "verbindlich",
        "ein",
        "auf",
        "außerdem",
        "fährt",
        "an",
        "trotzdem",
        "obwohl",
        "wenden",
        "melden"
       ],
       "loesung": 11,
       "fest": true,
       "erklaerung": "Richtig ist „trotzdem\". Jedes Wort passt nur einmal."
      },
      {
       "frage": "Welches Wort passt in Lücke 10?",
       "opt": [
        "soll",
        "sollen",
        "essen",
        "übernimmt",
        "übernehmen",
        "verbindlich",
        "ein",
        "auf",
        "außerdem",
        "fährt",
        "an",
        "trotzdem",
        "obwohl",
        "wenden",
        "melden"
       ],
       "loesung": 13,
       "fest": true,
       "erklaerung": "Richtig ist „wenden\". Jedes Wort passt nur einmal."
      }
     ]
    }
   ]
  }
 ],
 "laeufe": [
  {
   "id": "tb1ll1",
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
        "Am Wochenende fahren keine Busse mehr",
        "Die Angst der Geschäftsleute war unbegründet",
        "Stadt pflanzt tausend neue Bäume",
        "Schwere Sachen transportieren, ohne ein Auto zu besitzen",
        "Parken in der Innenstadt wird teurer",
        "Kaputte Geräte bekommen eine zweite Chance",
        "Neue, breitere Radwege für die Innenstadt",
        "Anwohner helfen dem Grün in ihrer Straße durch den Sommer",
        "Elektrogeräte werden immer billiger",
        "Zu wenig Fahrer: Nachtverbindungen werden gestrichen"
       ],
       "loesung": 3,
       "fest": true,
       "text": {
        "sorte": "zeitung",
        "quelle": "Aus einem Stadtmagazin",
        "titel": "Text 1",
        "zeilen": [
         "Einen Kasten Wasser, ein neues Regal oder den Wocheneinkauf für die ganze Familie – all das passt in ein Lastenrad. Doch so ein Rad kostet schnell mehrere tausend Euro.",
         "In Ahlbach kann man deshalb jetzt an fünf Stationen ein Lastenrad kostenlos für bis zu drei Tage ausleihen. Die Reservierung läuft über eine App. „Viele Menschen in der Stadt haben gar kein Auto mehr und brauchen trotzdem manchmal Platz\", sagt die Projektleiterin. Ein Ausbau der Radwege ist erst für die nächsten Jahre geplant."
        ]
       },
       "stelle": "haben gar kein Auto mehr und brauchen trotzdem manchmal Platz",
       "erklaerung": "Es geht ums Transportieren ohne Auto. Neue Radwege kommen erst später und sind nicht das Thema."
      },
      {
       "frage": "Welche Überschrift passt zu Text 2?",
       "opt": [
        "Am Wochenende fahren keine Busse mehr",
        "Die Angst der Geschäftsleute war unbegründet",
        "Stadt pflanzt tausend neue Bäume",
        "Schwere Sachen transportieren, ohne ein Auto zu besitzen",
        "Parken in der Innenstadt wird teurer",
        "Kaputte Geräte bekommen eine zweite Chance",
        "Neue, breitere Radwege für die Innenstadt",
        "Anwohner helfen dem Grün in ihrer Straße durch den Sommer",
        "Elektrogeräte werden immer billiger",
        "Zu wenig Fahrer: Nachtverbindungen werden gestrichen"
       ],
       "loesung": 9,
       "fest": true,
       "text": {
        "sorte": "zeitung",
        "quelle": "Aus einer Lokalzeitung",
        "titel": "Text 2",
        "zeilen": [
         "Die Verkehrsbetriebe Lindenau ändern ab dem ersten März ihren Fahrplan. Die Nachtbusse fahren dann nur noch in den Nächten auf Samstag und auf Sonntag. Von Sonntag bis Donnerstag ist um Mitternacht Schluss.",
         "Der Grund ist nicht das Geld, sondern das Personal: Dem Unternehmen fehlen derzeit rund vierzig Busfahrer. „Wir wollen lieber weniger Fahrten anbieten, die dann aber zuverlässig sind\", erklärt ein Sprecher. Man suche intensiv nach neuen Mitarbeitern."
        ]
       },
       "stelle": "Dem Unternehmen fehlen derzeit rund vierzig Busfahrer.",
       "erklaerung": "Unter der Woche fallen Nachtbusse wegen Personalmangel weg. Am Wochenende fahren sie weiterhin."
      },
      {
       "frage": "Welche Überschrift passt zu Text 3?",
       "opt": [
        "Am Wochenende fahren keine Busse mehr",
        "Die Angst der Geschäftsleute war unbegründet",
        "Stadt pflanzt tausend neue Bäume",
        "Schwere Sachen transportieren, ohne ein Auto zu besitzen",
        "Parken in der Innenstadt wird teurer",
        "Kaputte Geräte bekommen eine zweite Chance",
        "Neue, breitere Radwege für die Innenstadt",
        "Anwohner helfen dem Grün in ihrer Straße durch den Sommer",
        "Elektrogeräte werden immer billiger",
        "Zu wenig Fahrer: Nachtverbindungen werden gestrichen"
       ],
       "loesung": 5,
       "fest": true,
       "text": {
        "sorte": "zeitung",
        "quelle": "Aus einem Gemeindeblatt",
        "titel": "Text 3",
        "zeilen": [
         "Der Toaster geht nicht mehr, der Reißverschluss der Jacke klemmt, die Lampe flackert: Bevor Sie solche Dinge wegwerfen, kommen Sie ins Reparatur-Café im Nachbarschaftszentrum Wendorf.",
         "Jeden ersten Samstag im Monat helfen dort ehrenamtliche Elektriker, Schneiderinnen und Bastler dabei, Geräte und Kleidung wieder in Ordnung zu bringen. Die Hilfe ist kostenlos, über eine Spende freut sich das Team. Im letzten Jahr konnten so über dreihundert Gegenstände gerettet werden."
        ]
       },
       "stelle": "Bevor Sie solche Dinge wegwerfen, kommen Sie ins Reparatur-Café",
       "erklaerung": "Hauptaussage: Reparieren statt wegwerfen. Über Preise von Elektrogeräten sagt der Text nichts."
      },
      {
       "frage": "Welche Überschrift passt zu Text 4?",
       "opt": [
        "Am Wochenende fahren keine Busse mehr",
        "Die Angst der Geschäftsleute war unbegründet",
        "Stadt pflanzt tausend neue Bäume",
        "Schwere Sachen transportieren, ohne ein Auto zu besitzen",
        "Parken in der Innenstadt wird teurer",
        "Kaputte Geräte bekommen eine zweite Chance",
        "Neue, breitere Radwege für die Innenstadt",
        "Anwohner helfen dem Grün in ihrer Straße durch den Sommer",
        "Elektrogeräte werden immer billiger",
        "Zu wenig Fahrer: Nachtverbindungen werden gestrichen"
       ],
       "loesung": 7,
       "fest": true,
       "text": {
        "sorte": "zeitung",
        "quelle": "Aus einer Regionalzeitung",
        "titel": "Text 4",
        "zeilen": [
         "Die heißen und trockenen Sommer machen den Bäumen in der Stadt zu schaffen. Die Gärtner der Stadt Ahlbach schaffen es nicht, alle regelmäßig zu gießen.",
         "Deshalb ruft die Stadt die Bürger zur Mithilfe auf: Wer eine Patenschaft für einen Baum vor seinem Haus übernimmt, bekommt kostenlos einen großen Wassersack. Er wird einmal pro Woche gefüllt und gibt das Wasser langsam an die Wurzeln ab. Schon über fünfhundert Anwohner machen mit – auch für die dreihundert jungen Bäume, die im letzten Jahr gepflanzt wurden."
        ]
       },
       "stelle": "Wer eine Patenschaft für einen Baum vor seinem Haus übernimmt",
       "erklaerung": "Bürger gießen Straßenbäume. Gepflanzt wurden dreihundert Bäume, und das ist nur ein Detail."
      },
      {
       "frage": "Welche Überschrift passt zu Text 5?",
       "opt": [
        "Am Wochenende fahren keine Busse mehr",
        "Die Angst der Geschäftsleute war unbegründet",
        "Stadt pflanzt tausend neue Bäume",
        "Schwere Sachen transportieren, ohne ein Auto zu besitzen",
        "Parken in der Innenstadt wird teurer",
        "Kaputte Geräte bekommen eine zweite Chance",
        "Neue, breitere Radwege für die Innenstadt",
        "Anwohner helfen dem Grün in ihrer Straße durch den Sommer",
        "Elektrogeräte werden immer billiger",
        "Zu wenig Fahrer: Nachtverbindungen werden gestrichen"
       ],
       "loesung": 1,
       "fest": true,
       "text": {
        "sorte": "zeitung",
        "quelle": "Aus einer Wochenzeitung",
        "titel": "Text 5",
        "zeilen": [
         "Im Sommer war die Lindenauer Innenstadt an vier Samstagen für Autos gesperrt. Vorher hatten viele Ladenbesitzer protestiert. Sie befürchteten, dass die Kunden wegbleiben würden.",
         "Jetzt liegen die Zahlen vor: Die Geschäfte haben an den autofreien Tagen genauso viel verkauft wie sonst, manche sogar mehr. Die Menschen blieben länger in der Stadt und setzten sich in die Cafés. Auch viele Händler sind inzwischen überzeugt. Im nächsten Jahr soll es deshalb mehr autofreie Samstage geben."
        ]
       },
       "stelle": "Die Geschäfte haben an den autofreien Tagen genauso viel verkauft wie sonst",
       "erklaerung": "Die Händler hatten Angst, aber die Verkaufszahlen blieben gut. Über Parkgebühren steht nichts im Text."
      }
     ]
    },
    {
     "nr": 2,
     "art": "textwahl",
     "text": {
      "sorte": "zeitung",
      "quelle": "Gesund im Alltag",
      "titel": "Laufen lernen mit 52",
      "zeilen": [
       "Vor einem Jahr schaffte Dragan Petrović keine zwei Minuten Joggen am Stück. Heute läuft der 52-jährige Busfahrer aus Hellbach jeden Samstag fünf Kilometer, zusammen mit zwanzig anderen Anfängern aus dem Lauftreff „Langsam ist schnell genug“.",
       "Angefangen hat alles beim Hausarzt. Bei einer Routineuntersuchung waren Dragans Blutdruck und sein Gewicht zu hoch. Eigentlich hätte der Arzt ihm Tabletten verschrieben, aber er wollte ihm eine Chance geben: Wenn Dragan sich in den nächsten drei Monaten mehr bewegt, kann er vielleicht darauf verzichten.",
       "Ein Fitnessstudio kam für Dragan nicht in Frage. „Da sind nur junge, sportliche Leute, da habe ich mich nicht wohlgefühlt“, sagt er. Ein Kollege erzählte ihm dann von dem Lauftreff, den der Sportverein zusammen mit einer Krankenkasse anbietet. Der Kurs dauert zehn Wochen und ist für Mitglieder der Kasse kostenlos, alle anderen zahlen 40 Euro.",
       "Trainerin Anja Wolters setzt auf kleine Schritte. In der ersten Woche wechseln die Teilnehmer immer eine Minute Laufen mit zwei Minuten Gehen ab. Woche für Woche werden die Laufphasen länger. „Die meisten Anfänger machen den Fehler, zu schnell zu laufen“, erklärt sie. „Man sollte sich beim Laufen noch unterhalten können.“",
       "Für Dragan war die größte Herausforderung nicht das Laufen selbst, sondern die Zeit. Wegen seiner Schichtarbeit konnte er oft nicht zu den Treffen am Dienstagabend kommen. Die Trainerin gab ihm deshalb einen Plan, mit dem er an anderen Tagen allein trainieren konnte.",
       "Nach drei Monaten waren die Werte beim Arzt deutlich besser. Tabletten braucht Dragan bis heute nicht. Zehn Kilo hat er außerdem verloren, „ohne Diät, nur mit ein bisschen weniger Süßem“, wie er sagt.",
       "Inzwischen hilft er selbst beim Lauftreff mit und begleitet die langsamste Gruppe. Sein nächstes Ziel ist der Stadtlauf im Mai, über zehn Kilometer."
      ]
     },
     "aufgaben": [
      {
       "frage": "Was schlug der Hausarzt vor?",
       "opt": [
        "Dragan sollte sofort Tabletten nehmen.",
        "Dragan sollte sich mehr bewegen, um vielleicht keine Tabletten zu brauchen.",
        "Dragan sollte sich in einem Fitnessstudio anmelden."
       ],
       "loesung": 1,
       "stelle": "kann er vielleicht darauf verzichten",
       "erklaerung": "Tabletten waren nur der erste Gedanke; der Arzt gab ihm drei Monate Zeit für mehr Bewegung."
      },
      {
       "frage": "Warum ging Dragan nicht ins Fitnessstudio?",
       "opt": [
        "Es war ihm zu teuer.",
        "Sein Kollege hat ihm davon abgeraten.",
        "Er fühlte sich dort nicht wohl."
       ],
       "loesung": 2,
       "stelle": "da habe ich mich nicht wohlgefühlt",
       "erklaerung": "Zwischen jungen, sportlichen Leuten fühlte er sich nicht wohl; der Kollege empfahl nur den Lauftreff."
      },
      {
       "frage": "Was kostet der Kurs?",
       "opt": [
        "Nur wer nicht Mitglied der Krankenkasse ist, muss bezahlen.",
        "Er ist für alle Teilnehmer kostenlos.",
        "Alle Teilnehmer zahlen 40 Euro."
       ],
       "loesung": 0,
       "stelle": "alle anderen zahlen 40 Euro",
       "erklaerung": "Kostenlos ist er nur für Mitglieder der Kasse; die anderen zahlen 40 Euro."
      },
      {
       "frage": "Welchen Tipp gibt die Trainerin?",
       "opt": [
        "Man soll so langsam laufen, dass man noch sprechen kann.",
        "Man soll schon in der ersten Woche zwei Minuten laufen.",
        "Man soll lieber schnell und dafür kurz laufen."
       ],
       "loesung": 0,
       "stelle": "Man sollte sich beim Laufen noch unterhalten können",
       "erklaerung": "Zu schnelles Laufen ist laut Trainerin der typische Fehler von Anfängern."
      },
      {
       "frage": "Was war für Dragan das größte Problem?",
       "opt": [
        "Er musste eine strenge Diät machen.",
        "Er konnte am Anfang nicht lange laufen.",
        "Er konnte wegen seiner Arbeitszeiten oft nicht zu den Treffen."
       ],
       "loesung": 2,
       "stelle": "Wegen seiner Schichtarbeit konnte er oft nicht",
       "erklaerung": "Nicht das Laufen, sondern die Zeit war das Problem – wegen der Schichtarbeit."
      }
     ]
    },
    {
     "nr": 3,
     "art": "anzeigenX",
     "anzeigen": [
      {
       "b": "a",
       "quelle": "Reisebüro Fernweh",
       "zeilen": [
        "Busreise: 3 Tage Berlin",
        "Hotel mit Frühstück",
        "Abfahrt Freitag 6 Uhr",
        "229 Euro pro Person"
       ]
      },
      {
       "b": "b",
       "quelle": "Wanderverein Bergfreunde",
       "zeilen": [
        "Geführtes Wanderwochenende im Mittelgebirge",
        "Übernachtung in einer Hütte",
        "Teilnahme ab 16 Jahren",
        "95 Euro"
       ]
      },
      {
       "b": "c",
       "quelle": "Kletterwald Hochhinaus",
       "zeilen": [
        "Klettern für die ganze Familie",
        "Kinder ab 6 Jahren",
        "Erwachsene 18 Euro, Kinder 12 Euro",
        "Geöffnet April bis Oktober"
       ]
      },
      {
       "b": "d",
       "quelle": "Radverleih am Seeufer",
       "zeilen": [
        "E-Bikes und Tourenräder",
        "Tagesmiete ab 35 Euro",
        "Helm inklusive, Kindersitze auf Anfrage"
       ]
      },
      {
       "b": "e",
       "quelle": "Kanuschule Wildwasser",
       "zeilen": [
        "Kanutour mit Guide auf dem Fluss",
        "Samstags 10 Uhr, ca. 4 Stunden",
        "Nur für gute Schwimmer",
        "40 Euro"
       ]
      },
      {
       "b": "f",
       "quelle": "Ferienhaus Dünenblick",
       "zeilen": [
        "Ferienhaus an der Ostsee für 6 Personen",
        "Hund erlaubt",
        "890 Euro pro Woche, Anreise samstags"
       ]
      },
      {
       "b": "g",
       "quelle": "Ferienwohnung Alpenrose",
       "zeilen": [
        "Ferienwohnung in den Bergen für 2 Personen",
        "Ab 3 Nächten, 75 Euro pro Nacht",
        "Haustiere leider nicht erlaubt"
       ]
      },
      {
       "b": "h",
       "quelle": "Stadtführungen Altstadt e. V.",
       "zeilen": [
        "„Die Altstadt bei Nacht\"",
        "Freitag und Samstag, 21 Uhr",
        "Auf Deutsch und Englisch",
        "12 Euro"
       ]
      },
      {
       "b": "i",
       "quelle": "Theater Kunterbunt",
       "zeilen": [
        "Kindertheater: „Der kleine Drache\"",
        "Sonntag 11 Uhr",
        "Für Kinder ab 4 Jahren",
        "7 Euro"
       ]
      },
      {
       "b": "j",
       "quelle": "Stadtbad Mitte",
       "zeilen": [
        "Frühschwimmen Mo–Fr ab 6.30 Uhr",
        "Sauna abends bis 22 Uhr",
        "Einzelkarte 5 Euro"
       ]
      },
      {
       "b": "k",
       "quelle": "Flussschifffahrt Weißer Kahn",
       "zeilen": [
        "Tagesfahrt mit Weinprobe an Bord",
        "Mittagessen inklusive",
        "Nur ab 18 Jahren",
        "59 Euro"
       ]
      },
      {
       "b": "l",
       "quelle": "Spielecafé Würfelglück",
       "zeilen": [
        "Spieleabend jeden Dienstag ab 18 Uhr",
        "Über 300 Brettspiele",
        "Eintritt 4 Euro"
       ]
      }
     ],
     "aufgaben": [
      {
       "situation": "Sie möchten mit Ihrem Hund eine Woche Urlaub am Meer machen.",
       "loesung": "f",
       "erklaerung": "Das Ferienhaus liegt an der Ostsee und Hunde sind erlaubt. In Wohnung g sind Haustiere verboten."
      },
      {
       "situation": "Freunde aus Kanada sind zu Besuch. Sie sprechen kein Deutsch und möchten abends etwas über Ihre Stadt erfahren.",
       "loesung": "h",
       "erklaerung": "Die Nachtführung durch die Altstadt gibt es auch auf Englisch."
      },
      {
       "situation": "Sie möchten mit Ihren Kindern (4 und 7 Jahre) am Sonntagvormittag etwas unternehmen.",
       "loesung": "i",
       "erklaerung": "Das Kindertheater ist am Sonntagvormittag und ab 4 Jahren. Im Kletterwald darf das jüngere Kind noch nicht mit."
      },
      {
       "situation": "Sie möchten mit Ihrem 14-jährigen Sohn ein Wanderwochenende mit Übernachtung machen.",
       "loesung": "x",
       "erklaerung": "Das Wanderwochenende b ist erst ab 16 Jahren. Keine andere Anzeige bietet Wandern an."
      },
      {
       "situation": "Ihr Vater ist nicht mehr so fit, möchte aber trotzdem eine längere Radtour um den See machen.",
       "loesung": "d",
       "erklaerung": "Mit einem E-Bike schafft man auch ohne viel Kraft eine lange Tour."
      },
      {
       "situation": "Sie möchten vor der Arbeit regelmäßig Sport treiben.",
       "loesung": "j",
       "erklaerung": "Das Stadtbad öffnet werktags schon um 6.30 Uhr zum Frühschwimmen."
      },
      {
       "situation": "Sie schwimmen sehr gut und möchten einmal etwas Abenteuerliches auf dem Wasser erleben.",
       "loesung": "e",
       "erklaerung": "Die Kanutour ist für gute Schwimmer. Die Schifffahrt k ist eher gemütlich als abenteuerlich."
      },
      {
       "situation": "Sie suchen ein Geschenk für Ihre Eltern: einen ruhigen Tag auf dem Wasser mit gutem Wein.",
       "loesung": "k",
       "erklaerung": "Die Schiffsfahrt mit Weinprobe passt genau zu diesem Wunsch."
      },
      {
       "situation": "Sie möchten ein langes Wochenende in der Hauptstadt verbringen, aber nicht selbst Auto fahren.",
       "loesung": "a",
       "erklaerung": "Die Busreise nach Berlin dauert drei Tage und beginnt am Freitag."
      },
      {
       "situation": "Sie und Ihre Kollegen suchen für einen Abend unter der Woche ein günstiges Lokal, in dem man zusammen spielen kann.",
       "loesung": "l",
       "erklaerung": "Der Spieleabend ist dienstags und kostet nur 4 Euro Eintritt."
      }
     ]
    },
    {
     "nr": 4,
     "art": "textwahl",
     "text": {
      "sorte": "email",
      "quelle": "E-Mail",
      "titel": "Entschuldigung wegen Samstag",
      "zeilen": [
       "Lieber Jonas,",
       "es tut mir wirklich leid, dass ich am Samstag nicht zu deiner Geburtstagsfeier __(1)__ bin. Am Freitagabend habe ich __(2)__ plötzlich sehr schlecht gefühlt, und in der Nacht hatte ich hohes Fieber. Am nächsten Morgen bin ich sofort __(3)__ Arzt gegangen. Er hat mir gesagt, __(4)__ ich ein paar Tage zu Hause bleiben soll. __(5)__ ich dir dann am Samstagmittag schreiben wollte, war auch noch mein Handy-Akku leer. Ich hoffe, du bist nicht sauer auf __(6)__.",
       "Anna hat mir erzählt, dass es eine tolle Feier war. Es hat den ganzen Abend geregnet, __(7)__ habt ihr bis drei Uhr im Garten gefeiert. Sie hat mir auch Fotos von der Torte geschickt, __(8)__ deine Schwester gebacken hat. Die sieht wirklich fantastisch aus!",
       "Als kleine Entschuldigung würde ich dich gern zum Essen __(9)__. Hast du nächste Woche Zeit? Dein Geschenk liegt übrigens schon bereit. Ich gebe __(10)__ dir dann beim Essen.",
       "Liebe Grüße",
       "Sofia"
      ]
     },
     "aufgaben": [
      {
       "frage": "Was passt in Lücke 1?",
       "opt": [
        "kommen",
        "gekommen",
        "gekommt"
       ],
       "loesung": 1,
       "fest": true,
       "erklaerung": "Perfekt mit „sein\"; unregelmäßiges Partizip: „gekommen\"."
      },
      {
       "frage": "Was passt in Lücke 2?",
       "opt": [
        "mir",
        "sich",
        "mich"
       ],
       "loesung": 2,
       "fest": true,
       "erklaerung": "„sich fühlen\" mit Akkusativ; 1. Person: „mich\"."
      },
      {
       "frage": "Was passt in Lücke 3?",
       "opt": [
        "zum",
        "beim",
        "zur"
       ],
       "loesung": 0,
       "fest": true,
       "erklaerung": "Richtung zu einer Person: „zu dem Arzt\" = „zum Arzt\"; „beim\" steht für den Ort."
      },
      {
       "frage": "Was passt in Lücke 4?",
       "opt": [
        "dass",
        "was",
        "ob"
       ],
       "loesung": 0,
       "fest": true,
       "erklaerung": "Wiedergabe einer Aussage nach „sagen\": „dass\"."
      },
      {
       "frage": "Was passt in Lücke 5?",
       "opt": [
        "Wenn",
        "Als",
        "Wann"
       ],
       "loesung": 1,
       "fest": true,
       "erklaerung": "Einmaliges Ereignis in der Vergangenheit: „als\"."
      },
      {
       "frage": "Was passt in Lücke 6?",
       "opt": [
        "mir",
        "ich",
        "mich"
       ],
       "loesung": 2,
       "fest": true,
       "erklaerung": "„sauer sein auf\" verlangt den Akkusativ: „auf mich\"."
      },
      {
       "frage": "Was passt in Lücke 7?",
       "opt": [
        "trotzdem",
        "obwohl",
        "weil"
       ],
       "loesung": 0,
       "fest": true,
       "erklaerung": "Gegensatz mit Verb direkt danach („habt ihr\"): Adverb „trotzdem\"."
      },
      {
       "frage": "Was passt in Lücke 8?",
       "opt": [
        "der",
        "die",
        "den"
       ],
       "loesung": 1,
       "fest": true,
       "erklaerung": "Bezug auf „Torte\" (feminin), Akkusativobjekt im Relativsatz: „die\"."
      },
      {
       "frage": "Was passt in Lücke 9?",
       "opt": [
        "eingeladen",
        "einladen",
        "lade ein"
       ],
       "loesung": 1,
       "fest": true,
       "erklaerung": "„würde\" + Infinitiv: „würde dich einladen\"."
      },
      {
       "frage": "Was passt in Lücke 10?",
       "opt": [
        "ihn",
        "es",
        "ihm"
       ],
       "loesung": 1,
       "fest": true,
       "erklaerung": "Pronomen für „das Geschenk\" (neutral, Akkusativ): „es\"."
      }
     ]
    },
    {
     "nr": 5,
     "art": "textwahl",
     "text": {
      "sorte": "brief",
      "quelle": "Mitteilung",
      "titel": "Stadtbibliothek: Neue Öffnungszeiten",
      "zeilen": [
       "Liebe Besucher der Stadtbibliothek,",
       "ab dem 1. März __(1)__ sich unsere Öffnungszeiten. Wir haben dann mittwochs __(2)__ geöffnet, nämlich bis 20 Uhr. So können auch Berufstätige nach Feierabend zu uns kommen. Am Montag bleibt die Bibliothek dafür __(3)__. Am Wochenende bleibt alles wie bisher.",
       "Außerdem können Sie Bücher und DVDs jetzt rund __(4)__ die Uhr zurückgeben. Neben dem Haupteingang __(5)__ seit Kurzem ein grüner Rückgabekasten. Die Rückgabe wird am nächsten Werktag in Ihrem Konto vermerkt.",
       "Für Kinder gibt es eine gute Nachricht: Jeden Samstag um 11 Uhr __(6)__ wir eine Vorlesestunde an. Die Teilnahme ist kostenlos, eine Anmeldung ist nicht __(7)__. Die Geschichten sind für Kinder von vier bis acht Jahren gedacht, und die Eltern können in dieser Zeit in Ruhe in den Regalen stöbern. Wer einen Bibliotheksausweis hat, kann seit Januar auch E-Books __(8)__ dem Handy oder Tablet lesen.",
       "Bei Fragen __(9)__ Ihnen unser Team gern weiter. Wir freuen uns auf Ihren __(10)__!",
       "Ihr Team der Stadtbibliothek Lindenau"
      ]
     },
     "aufgaben": [
      {
       "frage": "Welches Wort passt in Lücke 1?",
       "opt": [
        "ändern",
        "ändert",
        "länger",
        "mehr",
        "geschlossen",
        "um",
        "in",
        "steht",
        "bieten",
        "bietet",
        "erforderlich",
        "auf",
        "hilft",
        "Besuch",
        "Besucher"
       ],
       "loesung": 0,
       "fest": true,
       "erklaerung": "„Öffnungszeiten\" ist Plural, „wir\" verlangt „bieten\" – die Singularformen sind Fallen. Feste Wendungen: „rund um die Uhr\", „auf dem Handy lesen\", „jemandem weiterhelfen\"."
      },
      {
       "frage": "Welches Wort passt in Lücke 2?",
       "opt": [
        "ändern",
        "ändert",
        "länger",
        "mehr",
        "geschlossen",
        "um",
        "in",
        "steht",
        "bieten",
        "bietet",
        "erforderlich",
        "auf",
        "hilft",
        "Besuch",
        "Besucher"
       ],
       "loesung": 2,
       "fest": true,
       "erklaerung": "Richtig ist „länger\". Jedes Wort passt nur einmal."
      },
      {
       "frage": "Welches Wort passt in Lücke 3?",
       "opt": [
        "ändern",
        "ändert",
        "länger",
        "mehr",
        "geschlossen",
        "um",
        "in",
        "steht",
        "bieten",
        "bietet",
        "erforderlich",
        "auf",
        "hilft",
        "Besuch",
        "Besucher"
       ],
       "loesung": 4,
       "fest": true,
       "erklaerung": "Richtig ist „geschlossen\". Jedes Wort passt nur einmal."
      },
      {
       "frage": "Welches Wort passt in Lücke 4?",
       "opt": [
        "ändern",
        "ändert",
        "länger",
        "mehr",
        "geschlossen",
        "um",
        "in",
        "steht",
        "bieten",
        "bietet",
        "erforderlich",
        "auf",
        "hilft",
        "Besuch",
        "Besucher"
       ],
       "loesung": 5,
       "fest": true,
       "erklaerung": "Richtig ist „um\". Jedes Wort passt nur einmal."
      },
      {
       "frage": "Welches Wort passt in Lücke 5?",
       "opt": [
        "ändern",
        "ändert",
        "länger",
        "mehr",
        "geschlossen",
        "um",
        "in",
        "steht",
        "bieten",
        "bietet",
        "erforderlich",
        "auf",
        "hilft",
        "Besuch",
        "Besucher"
       ],
       "loesung": 7,
       "fest": true,
       "erklaerung": "Richtig ist „steht\". Jedes Wort passt nur einmal."
      },
      {
       "frage": "Welches Wort passt in Lücke 6?",
       "opt": [
        "ändern",
        "ändert",
        "länger",
        "mehr",
        "geschlossen",
        "um",
        "in",
        "steht",
        "bieten",
        "bietet",
        "erforderlich",
        "auf",
        "hilft",
        "Besuch",
        "Besucher"
       ],
       "loesung": 8,
       "fest": true,
       "erklaerung": "Richtig ist „bieten\". Jedes Wort passt nur einmal."
      },
      {
       "frage": "Welches Wort passt in Lücke 7?",
       "opt": [
        "ändern",
        "ändert",
        "länger",
        "mehr",
        "geschlossen",
        "um",
        "in",
        "steht",
        "bieten",
        "bietet",
        "erforderlich",
        "auf",
        "hilft",
        "Besuch",
        "Besucher"
       ],
       "loesung": 10,
       "fest": true,
       "erklaerung": "Richtig ist „erforderlich\". Jedes Wort passt nur einmal."
      },
      {
       "frage": "Welches Wort passt in Lücke 8?",
       "opt": [
        "ändern",
        "ändert",
        "länger",
        "mehr",
        "geschlossen",
        "um",
        "in",
        "steht",
        "bieten",
        "bietet",
        "erforderlich",
        "auf",
        "hilft",
        "Besuch",
        "Besucher"
       ],
       "loesung": 11,
       "fest": true,
       "erklaerung": "Richtig ist „auf\". Jedes Wort passt nur einmal."
      },
      {
       "frage": "Welches Wort passt in Lücke 9?",
       "opt": [
        "ändern",
        "ändert",
        "länger",
        "mehr",
        "geschlossen",
        "um",
        "in",
        "steht",
        "bieten",
        "bietet",
        "erforderlich",
        "auf",
        "hilft",
        "Besuch",
        "Besucher"
       ],
       "loesung": 12,
       "fest": true,
       "erklaerung": "Richtig ist „hilft\". Jedes Wort passt nur einmal."
      },
      {
       "frage": "Welches Wort passt in Lücke 10?",
       "opt": [
        "ändern",
        "ändert",
        "länger",
        "mehr",
        "geschlossen",
        "um",
        "in",
        "steht",
        "bieten",
        "bietet",
        "erforderlich",
        "auf",
        "hilft",
        "Besuch",
        "Besucher"
       ],
       "loesung": 13,
       "fest": true,
       "erklaerung": "Richtig ist „Besuch\". Jedes Wort passt nur einmal."
      }
     ]
    }
   ]
  },
  {
   "id": "tb1ll2",
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
        "So erkennen Sie, ob eine Meldung stimmt",
        "Schüler bekommen Tablets für den Unterricht",
        "Väter nehmen sich mehr Zeit für ihre Kinder",
        "Kindergeld wird im nächsten Jahr erhöht",
        "Senioren helfen den Kleinsten beim Sprechenlernen",
        "Zeitungen verlieren immer mehr Leser",
        "Würfeln und Karten statt Bildschirm am Abend",
        "Kitas suchen Fachkräfte aus dem Ausland",
        "Ohne Smartphone wird auf dem Schulhof wieder geredet",
        "Computerspiele machen Kinder aggressiv"
       ],
       "loesung": 4,
       "fest": true,
       "text": {
        "sorte": "zeitung",
        "quelle": "Aus einem Stadtmagazin",
        "titel": "Text 1",
        "zeilen": [
         "Einmal pro Woche kommt Herr Yilmaz in die Kita „Sonnenblume\". Der pensionierte Lehrer setzt sich mit vier oder fünf Kindern in die Leseecke und schaut mit ihnen Bilderbücher an. Er liest vor, stellt Fragen und lässt die Kinder erzählen.",
         "Er ist einer von dreißig ehrenamtlichen Vorlesepaten in der Stadt. Die Erzieherinnen sind begeistert: Besonders Kinder, die zu Hause eine andere Sprache sprechen, lernen so schneller Deutsch und trauen sich mehr zu sagen."
        ]
       },
       "stelle": "lernen so schneller Deutsch und trauen sich mehr zu sagen",
       "erklaerung": "Ältere Ehrenamtliche fördern die Sprache der Kinder. Fachkräfte aus dem Ausland sind kein Thema."
      },
      {
       "frage": "Welche Überschrift passt zu Text 2?",
       "opt": [
        "So erkennen Sie, ob eine Meldung stimmt",
        "Schüler bekommen Tablets für den Unterricht",
        "Väter nehmen sich mehr Zeit für ihre Kinder",
        "Kindergeld wird im nächsten Jahr erhöht",
        "Senioren helfen den Kleinsten beim Sprechenlernen",
        "Zeitungen verlieren immer mehr Leser",
        "Würfeln und Karten statt Bildschirm am Abend",
        "Kitas suchen Fachkräfte aus dem Ausland",
        "Ohne Smartphone wird auf dem Schulhof wieder geredet",
        "Computerspiele machen Kinder aggressiv"
       ],
       "loesung": 8,
       "fest": true,
       "text": {
        "sorte": "zeitung",
        "quelle": "Aus einer Lokalzeitung",
        "titel": "Text 2",
        "zeilen": [
         "Seit Beginn des Schuljahres müssen die Handys an der Gesamtschule Wendorf in den Pausen in der Tasche bleiben. Im Unterricht arbeiten die Klassen weiterhin mit den schuleigenen Tablets.",
         "Viele Schüler waren zuerst dagegen. Inzwischen sieht die Schulleiterin eine deutliche Veränderung: Auf dem Schulhof wird wieder Fußball und Tischtennis gespielt, und die Jugendlichen unterhalten sich mehr miteinander. Auch die Zahl der Streitigkeiten über Fotos und Nachrichten im Internet ist zurückgegangen."
        ]
       },
       "stelle": "die Jugendlichen unterhalten sich mehr miteinander",
       "erklaerung": "Hauptaussage: Ohne Handy in der Pause reden die Schüler wieder. Die Tablets gab es schon vorher."
      },
      {
       "frage": "Welche Überschrift passt zu Text 3?",
       "opt": [
        "So erkennen Sie, ob eine Meldung stimmt",
        "Schüler bekommen Tablets für den Unterricht",
        "Väter nehmen sich mehr Zeit für ihre Kinder",
        "Kindergeld wird im nächsten Jahr erhöht",
        "Senioren helfen den Kleinsten beim Sprechenlernen",
        "Zeitungen verlieren immer mehr Leser",
        "Würfeln und Karten statt Bildschirm am Abend",
        "Kitas suchen Fachkräfte aus dem Ausland",
        "Ohne Smartphone wird auf dem Schulhof wieder geredet",
        "Computerspiele machen Kinder aggressiv"
       ],
       "loesung": 0,
       "fest": true,
       "text": {
        "sorte": "zeitung",
        "quelle": "Aus einem Ratgeber",
        "titel": "Text 3",
        "zeilen": [
         "Ein schockierendes Foto, eine unglaubliche Nachricht – und schon wird sie tausendfach geteilt. Doch nicht alles, was im Netz steht, ist wahr.",
         "Bevor Sie etwas weiterleiten, sollten Sie ein paar Fragen stellen: Wer hat die Information veröffentlicht? Ist sie aktuell oder schon mehrere Jahre alt? Berichten auch andere, bekannte Medien darüber? Wenn eine Meldung vor allem Wut oder Angst auslösen soll, ist besondere Vorsicht angebracht. Im Zweifel gilt: lieber nicht teilen."
        ]
       },
       "stelle": "Bevor Sie etwas weiterleiten, sollten Sie ein paar Fragen stellen",
       "erklaerung": "Der Text erklärt, wie man prüft, ob eine Nachricht wahr ist. Über Leserzahlen von Zeitungen steht nichts."
      },
      {
       "frage": "Welche Überschrift passt zu Text 4?",
       "opt": [
        "So erkennen Sie, ob eine Meldung stimmt",
        "Schüler bekommen Tablets für den Unterricht",
        "Väter nehmen sich mehr Zeit für ihre Kinder",
        "Kindergeld wird im nächsten Jahr erhöht",
        "Senioren helfen den Kleinsten beim Sprechenlernen",
        "Zeitungen verlieren immer mehr Leser",
        "Würfeln und Karten statt Bildschirm am Abend",
        "Kitas suchen Fachkräfte aus dem Ausland",
        "Ohne Smartphone wird auf dem Schulhof wieder geredet",
        "Computerspiele machen Kinder aggressiv"
       ],
       "loesung": 2,
       "fest": true,
       "text": {
        "sorte": "zeitung",
        "quelle": "Aus einem Familienmagazin",
        "titel": "Text 4",
        "zeilen": [
         "Noch vor fünfzehn Jahren war es eine Ausnahme, heute ist es fast normal: Immer mehr Männer gehen nach der Geburt ihres Kindes in Elternzeit. Und sie bleiben länger zu Hause als früher.",
         "Während viele Väter anfangs nur die üblichen zwei Monate nahmen, sind es inzwischen oft vier oder sechs. „Ich wollte nicht nur am Wochenende Papa sein\", sagt Jonas Berger aus Ahlbach. Finanziell ist das nicht für alle Familien einfach, denn das Elterngeld ersetzt nur einen Teil des Gehalts."
        ]
       },
       "stelle": "Immer mehr Männer gehen nach der Geburt ihres Kindes in Elternzeit.",
       "erklaerung": "Väter bleiben häufiger und länger beim Kind. Vom Kindergeld ist nicht die Rede, nur vom Elterngeld."
      },
      {
       "frage": "Welche Überschrift passt zu Text 5?",
       "opt": [
        "So erkennen Sie, ob eine Meldung stimmt",
        "Schüler bekommen Tablets für den Unterricht",
        "Väter nehmen sich mehr Zeit für ihre Kinder",
        "Kindergeld wird im nächsten Jahr erhöht",
        "Senioren helfen den Kleinsten beim Sprechenlernen",
        "Zeitungen verlieren immer mehr Leser",
        "Würfeln und Karten statt Bildschirm am Abend",
        "Kitas suchen Fachkräfte aus dem Ausland",
        "Ohne Smartphone wird auf dem Schulhof wieder geredet",
        "Computerspiele machen Kinder aggressiv"
       ],
       "loesung": 6,
       "fest": true,
       "text": {
        "sorte": "zeitung",
        "quelle": "Aus einer Wochenzeitung",
        "titel": "Text 5",
        "zeilen": [
         "Spielwarenhändler melden seit einigen Jahren steigende Verkaufszahlen – und zwar nicht bei Konsolen, sondern bei Brett- und Kartenspielen.",
         "Viele Familien legen bewusst einen festen Spieleabend in der Woche ein. „Beim Spielen lachen wir zusammen, und keiner schaut aufs Handy\", erzählt eine Mutter aus Lindenau. Auch Erwachsene ohne Kinder treffen sich immer öfter in Spielecafés. Fachleute sehen darin einen Gegentrend zur digitalen Freizeit, ohne Computerspiele grundsätzlich schlecht zu finden."
        ]
       },
       "stelle": "Viele Familien legen bewusst einen festen Spieleabend in der Woche ein.",
       "erklaerung": "Gesellschaftsspiele sind wieder beliebt. Dass Computerspiele schaden, sagen die Fachleute gerade nicht."
      }
     ]
    },
    {
     "nr": 2,
     "art": "textwahl",
     "text": {
      "sorte": "zeitung",
      "quelle": "Oberhagener Stadtanzeiger",
      "titel": "Hilfe auf dem Weg ins digitale Amt",
      "zeilen": [
       "Einen Termin beim Bürgeramt bekommt man in Oberhagen seit dem letzten Jahr fast nur noch online. Auch viele Anträge, zum Beispiel für Wohngeld oder einen Parkausweis für Anwohner, kann man nur noch im Internet stellen. Für viele Menschen ist das praktisch. Für andere ist es ein großes Problem.",
       "Deshalb gibt es in der Stadtbibliothek jetzt die „Digitalsprechstunde“. Jeden Mittwoch von 14 bis 17 Uhr sitzen dort ehrenamtliche Helfer, die sogenannten Digitallotsen. Sie zeigen den Besuchern, wie man Formulare ausfüllt, Dokumente hochlädt oder ein Benutzerkonto bei der Stadt anlegt. Eine Anmeldung ist nicht nötig, man sollte aber Ausweis und Handy mitbringen.",
       "Einer der Lotsen ist Amir Haddad. Der 34-jährige Programmierer kam vor neun Jahren aus Syrien nach Deutschland. „Ich weiß noch, wie kompliziert die Briefe von den Behörden am Anfang für mich waren“, sagt er. „Damals hat mir eine Nachbarin geholfen. Jetzt möchte ich etwas zurückgeben.“",
       "Wer kommt in die Sprechstunde? Laut Haddad sind es nicht nur ältere Menschen, wie man vielleicht denkt. Etwa die Hälfte der Besucher ist unter fünfzig. Viele haben zwar ein Smartphone, verstehen aber die Sprache der Formulare nicht oder haben Angst, einen Fehler zu machen.",
       "Eine Grenze gibt es allerdings: Die Lotsen füllen keine Anträge für die Besucher aus und geben keine Rechtsberatung. „Wir erklären, wo man klickt und was gemeint ist. Die Entscheidungen trifft jeder selbst“, sagt Haddad. Passwörter sollen die Besucher immer selbst eingeben.",
       "Die Stadt ist mit dem Angebot zufrieden. Seit dem Start im März kamen über 600 Menschen. Ab Januar soll es deshalb einen zweiten Termin am Samstagvormittag geben, vor allem für Berufstätige, die mittwochs keine Zeit haben.",
       "Kritik kommt vom Seniorenbeirat. Die Vorsitzende Renate Kluge findet das Projekt zwar gut, fordert aber, dass man auch weiterhin ohne Internet Termine beim Amt bekommen kann. „Nicht jeder hat jemanden, der ihm hilft.“"
      ]
     },
     "aufgaben": [
      {
       "frage": "Was gilt für die Digitalsprechstunde?",
       "opt": [
        "Man muss sich vorher online anmelden.",
        "Man sollte Ausweis und Handy mitnehmen.",
        "Man kann jeden Mittwochvormittag kommen."
       ],
       "loesung": 1,
       "stelle": "man sollte aber Ausweis und Handy mitbringen",
       "erklaerung": "Eine Anmeldung ist nicht nötig, und die Sprechstunde ist am Nachmittag."
      },
      {
       "frage": "Warum arbeitet Amir Haddad als Digitallotse?",
       "opt": [
        "Weil er früher selbst Hilfe bekommen hat.",
        "Weil er als Programmierer für die Stadt arbeitet.",
        "Weil seine Nachbarin ihn darum gebeten hat."
       ],
       "loesung": 0,
       "stelle": "Jetzt möchte ich etwas zurückgeben",
       "erklaerung": "Die Nachbarin hat ihm damals geholfen; jetzt will er anderen helfen."
      },
      {
       "frage": "Wer besucht die Sprechstunde?",
       "opt": [
        "Fast nur ältere Menschen.",
        "Vor allem Menschen ohne Smartphone.",
        "Auch viele jüngere Menschen."
       ],
       "loesung": 2,
       "stelle": "Etwa die Hälfte der Besucher ist unter fünfzig",
       "erklaerung": "„Nicht nur ältere Menschen“: die Hälfte ist jünger als fünfzig, und viele haben ein Smartphone."
      },
      {
       "frage": "Was machen die Lotsen nicht?",
       "opt": [
        "Sie erklären die Formulare nicht.",
        "Sie füllen die Anträge nicht für die Besucher aus.",
        "Sie zeigen nicht, wo man klicken muss."
       ],
       "loesung": 1,
       "stelle": "Die Lotsen füllen keine Anträge für die Besucher aus",
       "erklaerung": "Erklären und zeigen gehört zu ihrer Arbeit, ausfüllen nicht."
      },
      {
       "frage": "Was fordert Renate Kluge?",
       "opt": [
        "Das Projekt soll wieder beendet werden.",
        "Es soll einen zweiten Termin am Samstag geben.",
        "Man soll auch ohne Internet einen Termin beim Amt bekommen."
       ],
       "loesung": 2,
       "stelle": "auch weiterhin ohne Internet Termine beim Amt bekommen kann",
       "erklaerung": "Sie findet das Projekt gut; den Samstagstermin plant die Stadt, nicht der Seniorenbeirat."
      }
     ]
    },
    {
     "nr": 3,
     "art": "anzeigenX",
     "anzeigen": [
      {
       "b": "a",
       "quelle": "Zahnarztpraxis Dr. Haddad",
       "zeilen": [
        "Neue Patienten willkommen",
        "Spezielle Termine für Angstpatienten",
        "Sprechstunde auch samstags 9–13 Uhr"
       ]
      },
      {
       "b": "b",
       "quelle": "Hausarztpraxis Dr. Lehmann",
       "zeilen": [
        "Urlaub vom 1. bis 15. August",
        "Vertretung: Praxis Dr. Yilmaz, Bahnhofstraße 4"
       ]
      },
      {
       "b": "c",
       "quelle": "Notdienstpraxis am Klinikum",
       "zeilen": [
        "Wenn Ihre Arztpraxis geschlossen ist",
        "Mi und Fr ab 14 Uhr, Sa/So ganztägig",
        "Ohne Termin"
       ]
      },
      {
       "b": "d",
       "quelle": "Physiotherapie Bewegt",
       "zeilen": [
        "Rückenkurs: 10 Termine, dienstags 18 Uhr",
        "Krankenkassen zahlen bis zu 80 %",
        "Eigenanteil ab 20 Euro"
       ]
      },
      {
       "b": "e",
       "quelle": "Linden-Apotheke",
       "zeilen": [
        "Lieferservice nach Hause",
        "Bestellung bis 12 Uhr – Lieferung am selben Tag",
        "Nur im Stadtgebiet"
       ]
      },
      {
       "b": "f",
       "quelle": "Optik Klarblick",
       "zeilen": [
        "Kostenloser Sehtest",
        "Ohne Termin, Mo–Sa",
        "Brillen ab 49 Euro"
       ]
      },
      {
       "b": "g",
       "quelle": "Hörstudio Ohrwerk",
       "zeilen": [
        "Kostenloser Hörtest",
        "Nur nach Terminvereinbarung",
        "Hörgeräte zum Ausprobieren"
       ]
      },
      {
       "b": "h",
       "quelle": "Kinderarztpraxis Dr. Okafor",
       "zeilen": [
        "Wir nehmen neue Patienten bis 6 Jahre auf",
        "Impfsprechstunde donnerstags 14–17 Uhr"
       ]
      },
      {
       "b": "i",
       "quelle": "Handydoktor",
       "zeilen": [
        "Display-Tausch in einer Stunde",
        "Ohne Termin",
        "Ab 59 Euro"
       ]
      },
      {
       "b": "j",
       "quelle": "Änderungsschneiderei Nadelöhr",
       "zeilen": [
        "Hosen kürzen, Reißverschlüsse ersetzen",
        "Express in 24 Stunden",
        "Aufpreis 5 Euro"
       ]
      },
      {
       "b": "k",
       "quelle": "Putzfee Haushaltsservice",
       "zeilen": [
        "Haushaltshilfe wöchentlich oder alle 14 Tage",
        "Mindestens 3 Stunden",
        "25 Euro pro Stunde"
       ]
      },
      {
       "b": "l",
       "quelle": "Tierbetreuung Samtpfote",
       "zeilen": [
        "Wir versorgen Katzen und Kleintiere",
        "Während Ihres Urlaubs, 2 Besuche täglich",
        "Keine Hunde"
       ]
      }
     ],
     "aufgaben": [
      {
       "situation": "Ihr Handy ist heruntergefallen und das Display ist kaputt. Sie brauchen es heute noch.",
       "loesung": "i",
       "erklaerung": "Der Handydoktor tauscht das Display in einer Stunde, ohne Termin."
      },
      {
       "situation": "Sie haben große Angst vor dem Zahnarzt und können nur am Wochenende.",
       "loesung": "a",
       "erklaerung": "Die Praxis hat Termine für Angstpatienten und Sprechstunde am Samstag."
      },
      {
       "situation": "Ihr Nachbar hat oft Rückenschmerzen und möchte regelmäßig etwas dagegen tun – möglichst günstig.",
       "loesung": "d",
       "erklaerung": "Der Rückenkurs läuft regelmäßig, und die Krankenkasse zahlt den größten Teil."
      },
      {
       "situation": "Ihr Arzt hat Ihnen ein Medikament verschrieben. Sie haben Fieber und können heute nicht aus dem Haus.",
       "loesung": "e",
       "erklaerung": "Die Apotheke liefert am selben Tag nach Hause, wenn man bis 12 Uhr bestellt."
      },
      {
       "situation": "Sie fahren zwei Wochen in Urlaub und suchen jemanden, der Ihre Katze versorgt.",
       "loesung": "l",
       "erklaerung": "Samtpfote kümmert sich während des Urlaubs um Katzen."
      },
      {
       "situation": "Sie glauben, dass Sie schlechter sehen, und möchten spontan in der Mittagspause einen Test machen.",
       "loesung": "f",
       "erklaerung": "Beim Optiker geht der Sehtest ohne Termin. Beim Hörstudio g braucht man einen Termin – und es geht ums Hören."
      },
      {
       "situation": "Ihre neue Hose für eine Hochzeit am Samstag ist zu lang. Heute ist Donnerstag.",
       "loesung": "j",
       "erklaerung": "Die Schneiderei kürzt Hosen auch als Express in 24 Stunden."
      },
      {
       "situation": "Sie arbeiten viel und möchten, dass jemand einmal pro Woche Ihre Wohnung putzt.",
       "loesung": "k",
       "erklaerung": "Die Haushaltshilfe kommt auf Wunsch jede Woche."
      },
      {
       "situation": "Sie sind eine Woche auf Geschäftsreise und suchen jemanden, der mit Ihrem Hund spazieren geht.",
       "loesung": "x",
       "erklaerung": "Samtpfote versorgt ausdrücklich keine Hunde. Eine andere Tierbetreuung gibt es nicht."
      },
      {
       "situation": "Sie sind neu in der Stadt. Ihre dreijährige Tochter muss bald geimpft werden.",
       "loesung": "h",
       "erklaerung": "Die Kinderarztpraxis nimmt neue Patienten bis 6 Jahre auf und hat eine Impfsprechstunde."
      }
     ]
    },
    {
     "nr": 4,
     "art": "textwahl",
     "text": {
      "sorte": "brief",
      "quelle": "Brief",
      "titel": "Pause meiner Mitgliedschaft",
      "zeilen": [
       "Sehr geehrte Frau Albers,",
       "seit zwei Jahren bin ich Mitglied in Ihrem Sportverein und nehme regelmäßig __(1)__ Schwimmkurs am Dienstag teil. Leider muss ich Ihnen mitteilen, dass ich in den nächsten Monaten nicht trainieren kann. Letzte Woche __(2)__ ich am Knie operiert. Die Operation ist gut verlaufen, __(3)__ darf ich mindestens drei Monate keinen Sport machen. Im Anhang finden Sie eine Kopie __(4)__ ärztlichen Attests.",
       "In der Vereinsordnung habe ich gelesen, dass eine Pause der Mitgliedschaft __(5)__ Krankheit möglich ist. Könnten Sie mir bitte mitteilen, __(6)__ ich in dieser Zeit den monatlichen Beitrag weiter zahlen muss?",
       "Ich möchte auf keinen Fall aus dem Verein austreten, denn ich habe mich mit vielen __(7)__ Mitgliedern angefreundet. Sobald mein Arzt es erlaubt, möchte ich wieder mit dem Training __(8)__. Vielleicht kann ich am Anfang an dem Kurs für Wassergymnastik teilnehmen, __(9)__ besonders für Menschen mit Knieproblemen gedacht ist.",
       "Über eine kurze Antwort __(10)__ ich mich sehr freuen.",
       "Mit freundlichen Grüßen",
       "Daniel Okafor"
      ]
     },
     "aufgaben": [
      {
       "frage": "Was passt in Lücke 1?",
       "opt": [
        "im",
        "am",
        "beim"
       ],
       "loesung": 1,
       "fest": true,
       "erklaerung": "„teilnehmen an\" + Dativ: „an dem\" = „am Schwimmkurs\"."
      },
      {
       "frage": "Was passt in Lücke 2?",
       "opt": [
        "wurde",
        "würde",
        "werde"
       ],
       "loesung": 0,
       "fest": true,
       "erklaerung": "Passiv in der Vergangenheit („letzte Woche\"): Präteritum „wurde\"."
      },
      {
       "frage": "Was passt in Lücke 3?",
       "opt": [
        "aber",
        "obwohl",
        "trotzdem"
       ],
       "loesung": 2,
       "fest": true,
       "erklaerung": "Verb direkt nach der Lücke („darf ich\") – das passt nur zum Adverb „trotzdem\"."
      },
      {
       "frage": "Was passt in Lücke 4?",
       "opt": [
        "dem",
        "des",
        "der"
       ],
       "loesung": 1,
       "fest": true,
       "erklaerung": "„eine Kopie\" + Genitiv; „das Attest\" (neutral): „des ärztlichen Attests\"."
      },
      {
       "frage": "Was passt in Lücke 5?",
       "opt": [
        "bei",
        "mit",
        "für"
       ],
       "loesung": 0,
       "fest": true,
       "erklaerung": "Bedingung „im Fall von\": „bei Krankheit\"."
      },
      {
       "frage": "Was passt in Lücke 6?",
       "opt": [
        "dass",
        "ob",
        "wenn"
       ],
       "loesung": 1,
       "fest": true,
       "erklaerung": "Indirekte Ja/Nein-Frage nach „mitteilen\": „ob\"."
      },
      {
       "frage": "Was passt in Lücke 7?",
       "opt": [
        "nette",
        "nettes",
        "netten"
       ],
       "loesung": 2,
       "fest": true,
       "erklaerung": "Nach „mit\" Dativ Plural: Adjektiv endet auf „-en\"."
      },
      {
       "frage": "Was passt in Lücke 8?",
       "opt": [
        "anfangen",
        "angefangen",
        "fange an"
       ],
       "loesung": 0,
       "fest": true,
       "erklaerung": "Nach dem Modalverb „möchte\" steht der Infinitiv am Ende."
      },
      {
       "frage": "Was passt in Lücke 9?",
       "opt": [
        "den",
        "der",
        "dem"
       ],
       "loesung": 1,
       "fest": true,
       "erklaerung": "Bezug auf „Kurs\" (maskulin), Subjekt im Relativsatz: „der\"."
      },
      {
       "frage": "Was passt in Lücke 10?",
       "opt": [
        "wurde",
        "werden",
        "würde"
       ],
       "loesung": 2,
       "fest": true,
       "erklaerung": "Höflicher Wunsch im Konjunktiv II: „würde mich freuen\"."
      }
     ]
    },
    {
     "nr": 5,
     "art": "textwahl",
     "text": {
      "sorte": "brief",
      "quelle": "Mitteilung",
      "titel": "Arztpraxis: Urlaub und Vertretung",
      "zeilen": [
       "Liebe Patienten,",
       "bitte beachten Sie, dass unsere Praxis vom 4. bis zum 22. August wegen Urlaub geschlossen ist. In __(1)__ Fällen __(2)__ uns Frau Dr. Sander in der Bahnhofstraße 5. Ihre Sprechzeiten finden Sie auf unserer Internetseite. Bitte denken Sie daran, Ihre Versichertenkarte dorthin __(3)__.",
       "Wenn Sie regelmäßig Medikamente nehmen, __(4)__ Sie sich bitte rechtzeitig vor unserem Urlaub ein neues Rezept. Rezepte können Sie __(5)__ telefonisch oder über unsere Internetseite bestellen. Dafür brauchen wir nur Ihren Namen, Ihr Geburtsdatum und den Namen des Medikaments. Bitte rufen Sie __(6)__ zwischen 8 und 11 Uhr an, da am Nachmittag unsere Telefone sehr oft besetzt sind.",
       "Termine für die Zeit nach unserem Urlaub können Sie schon jetzt __(7)__. Am Wochenende wenden Sie sich bitte an den ärztlichen Bereitschaftsdienst. Ab dem 25. August sind wir wieder __(8)__ Sie da. An unseren Sprechzeiten __(9)__ sich nichts.",
       "Wir wünschen Ihnen einen schönen Sommer und __(10)__ Sie gesund!",
       "Ihr Praxisteam Dr. Kaya"
      ]
     },
     "aufgaben": [
      {
       "frage": "Welches Wort passt in Lücke 1?",
       "opt": [
        "dringenden",
        "dringende",
        "vertritt",
        "mitzunehmen",
        "mitnehmen",
        "holen",
        "entweder",
        "sowohl",
        "möglichst",
        "vereinbaren",
        "treffen",
        "für",
        "ändert",
        "ändern",
        "bleiben"
       ],
       "loesung": 0,
       "fest": true,
       "erklaerung": "„sowohl\" braucht „als auch\", zu „oder\" gehört „entweder\". „Termine vereinbaren\" (nicht „treffen\"); nach „daran denken\" steht „zu\" + Infinitiv: „mitzunehmen\"."
      },
      {
       "frage": "Welches Wort passt in Lücke 2?",
       "opt": [
        "dringenden",
        "dringende",
        "vertritt",
        "mitzunehmen",
        "mitnehmen",
        "holen",
        "entweder",
        "sowohl",
        "möglichst",
        "vereinbaren",
        "treffen",
        "für",
        "ändert",
        "ändern",
        "bleiben"
       ],
       "loesung": 2,
       "fest": true,
       "erklaerung": "Richtig ist „vertritt\". Jedes Wort passt nur einmal."
      },
      {
       "frage": "Welches Wort passt in Lücke 3?",
       "opt": [
        "dringenden",
        "dringende",
        "vertritt",
        "mitzunehmen",
        "mitnehmen",
        "holen",
        "entweder",
        "sowohl",
        "möglichst",
        "vereinbaren",
        "treffen",
        "für",
        "ändert",
        "ändern",
        "bleiben"
       ],
       "loesung": 3,
       "fest": true,
       "erklaerung": "Richtig ist „mitzunehmen\". Jedes Wort passt nur einmal."
      },
      {
       "frage": "Welches Wort passt in Lücke 4?",
       "opt": [
        "dringenden",
        "dringende",
        "vertritt",
        "mitzunehmen",
        "mitnehmen",
        "holen",
        "entweder",
        "sowohl",
        "möglichst",
        "vereinbaren",
        "treffen",
        "für",
        "ändert",
        "ändern",
        "bleiben"
       ],
       "loesung": 5,
       "fest": true,
       "erklaerung": "Richtig ist „holen\". Jedes Wort passt nur einmal."
      },
      {
       "frage": "Welches Wort passt in Lücke 5?",
       "opt": [
        "dringenden",
        "dringende",
        "vertritt",
        "mitzunehmen",
        "mitnehmen",
        "holen",
        "entweder",
        "sowohl",
        "möglichst",
        "vereinbaren",
        "treffen",
        "für",
        "ändert",
        "ändern",
        "bleiben"
       ],
       "loesung": 6,
       "fest": true,
       "erklaerung": "Richtig ist „entweder\". Jedes Wort passt nur einmal."
      },
      {
       "frage": "Welches Wort passt in Lücke 6?",
       "opt": [
        "dringenden",
        "dringende",
        "vertritt",
        "mitzunehmen",
        "mitnehmen",
        "holen",
        "entweder",
        "sowohl",
        "möglichst",
        "vereinbaren",
        "treffen",
        "für",
        "ändert",
        "ändern",
        "bleiben"
       ],
       "loesung": 8,
       "fest": true,
       "erklaerung": "Richtig ist „möglichst\". Jedes Wort passt nur einmal."
      },
      {
       "frage": "Welches Wort passt in Lücke 7?",
       "opt": [
        "dringenden",
        "dringende",
        "vertritt",
        "mitzunehmen",
        "mitnehmen",
        "holen",
        "entweder",
        "sowohl",
        "möglichst",
        "vereinbaren",
        "treffen",
        "für",
        "ändert",
        "ändern",
        "bleiben"
       ],
       "loesung": 9,
       "fest": true,
       "erklaerung": "Richtig ist „vereinbaren\". Jedes Wort passt nur einmal."
      },
      {
       "frage": "Welches Wort passt in Lücke 8?",
       "opt": [
        "dringenden",
        "dringende",
        "vertritt",
        "mitzunehmen",
        "mitnehmen",
        "holen",
        "entweder",
        "sowohl",
        "möglichst",
        "vereinbaren",
        "treffen",
        "für",
        "ändert",
        "ändern",
        "bleiben"
       ],
       "loesung": 11,
       "fest": true,
       "erklaerung": "Richtig ist „für\". Jedes Wort passt nur einmal."
      },
      {
       "frage": "Welches Wort passt in Lücke 9?",
       "opt": [
        "dringenden",
        "dringende",
        "vertritt",
        "mitzunehmen",
        "mitnehmen",
        "holen",
        "entweder",
        "sowohl",
        "möglichst",
        "vereinbaren",
        "treffen",
        "für",
        "ändert",
        "ändern",
        "bleiben"
       ],
       "loesung": 12,
       "fest": true,
       "erklaerung": "Richtig ist „ändert\". Jedes Wort passt nur einmal."
      },
      {
       "frage": "Welches Wort passt in Lücke 10?",
       "opt": [
        "dringenden",
        "dringende",
        "vertritt",
        "mitzunehmen",
        "mitnehmen",
        "holen",
        "entweder",
        "sowohl",
        "möglichst",
        "vereinbaren",
        "treffen",
        "für",
        "ändert",
        "ändern",
        "bleiben"
       ],
       "loesung": 14,
       "fest": true,
       "erklaerung": "Richtig ist „bleiben\". Jedes Wort passt nur einmal."
      }
     ]
    }
   ]
  }
 ]
};
