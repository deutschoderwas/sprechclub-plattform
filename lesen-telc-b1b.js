/* ============================================================
   deutschoderwas club — LESEN + SPRACHBAUSTEINE telc Deutsch B1+ Beruf

   Aufbau nach dem offiziellen telc-Format (Übungstest 1 B1+ Beruf,
   geprüft 02.11.2026). Alle Texte und Aufgaben eigene, Kontext
   Arbeitswelt. Erzeugt aus scratchpad/telcb1b mit bau.js.
   ============================================================ */

window.LESEN_TELC_B1B = {
 "niveau": "telcB1B",
 "pruefung": "telc Deutsch B1+ Beruf",
 "minuten": 90,
 "punkte": 40,
 "stufen": [
  {
   "nr": 1,
   "titel": "Worum geht es?",
   "zeichen": "🧭",
   "was": "Betreffzeilen, Hauptaussage und die Anzeige mit dem einen Detail."
  },
  {
   "nr": 2,
   "titel": "Sprachbausteine",
   "zeichen": "🧩",
   "was": "Grammatik und feste Wendungen aus Büro und Bewerbung."
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
   "was": "40 Aufgaben, 90 Minuten mit Uhr."
  }
 ],
 "bloecke": [
  {
   "id": "tbb1l1",
   "stufe": 1,
   "titel": "Betreffzeilen und Hauptaussage",
   "kurz": "Der Betreff fasst die ganze Nachricht zusammen, nicht ein Detail",
   "ziel": "Nach diesem Block wählst du zu einer beruflichen Nachricht den Betreff, der ihr eigentliches Anliegen trifft.",
   "zeichen": "🎯",
   "farbe": "turq",
   "aufgaben": [
    {
     "art": "wahl",
     "frage": "Nachricht: „Liebe Kollegen, am Freitag wird ab 14 Uhr das Netzwerk gewartet. In dieser Zeit funktionieren E-Mail und Drucker nicht. Bitte speichern Sie Ihre Dateien vorher.\" Welcher Betreff passt?",
     "opt": [
      "Wartung am Freitag: kein Netzwerk ab 14 Uhr",
      "Neue Drucker für alle Abteilungen",
      "Dateien bitte löschen"
     ],
     "loesung": 0,
     "erklaerung": "Kern ist die Wartung mit Ausfall. Drucker sind nur betroffen, nicht neu; speichern heißt nicht löschen."
    },
    {
     "art": "wahl",
     "frage": "Nachricht: „Hallo Frau Petrović, leider ist die Lieferung mit den Ersatzteilen noch nicht angekommen. Laut Spedition kommt sie erst am Mittwoch. Können wir den Reparaturtermin verschieben?\"",
     "opt": [
      "Spedition sucht neue Fahrer",
      "Ersatzteile sind beschädigt",
      "Ersatzteile verspätet – Reparatur verschieben?"
     ],
     "loesung": 2,
     "erklaerung": "Anliegen: Lieferung kommt später, deshalb neuer Termin. Von Schäden steht nichts im Text."
    },
    {
     "art": "wahl",
     "frage": "Nachricht: „Liebes Team, ab Montag gibt es in der Kantine kein Bargeld mehr. Bezahlt wird nur noch mit dem Mitarbeiterausweis. Die Karte können Sie am Automaten im Foyer aufladen.\"",
     "opt": [
      "Neue Gerichte in der Kantine",
      "Kantine: Bezahlen nur noch mit dem Ausweis",
      "Foyer wird umgebaut"
     ],
     "loesung": 1,
     "erklaerung": "Neu ist die Bezahlart. Speisen und Foyer sind nicht das Thema."
    },
    {
     "art": "wahl",
     "frage": "Nachricht: „Sehr geehrte Damen und Herren, ich habe gestern zehn Arbeitshosen bei Ihnen bestellt. Leider habe ich Größe 52 statt 54 angegeben. Bitte ändern Sie die Bestellung, bevor Sie sie verschicken.\"",
     "opt": [
      "Korrektur einer Bestellung",
      "Reklamation: Hosen sind kaputt",
      "Frage nach neuen Größen"
     ],
     "loesung": 0,
     "erklaerung": "Die Ware ist noch nicht verschickt, es geht um eine Änderung, nicht um eine Reklamation."
    },
    {
     "art": "wahl",
     "frage": "Nachricht: „Hallo zusammen, Herr Yilmaz feiert nächste Woche sein 25-jähriges Firmenjubiläum. Wir sammeln für ein Geschenk. Wer mitmachen möchte, kann bis Donnerstag Geld bei Frau Lange abgeben.\"",
     "opt": [
      "Herr Yilmaz verlässt die Firma",
      "Sammlung für ein Jubiläumsgeschenk",
      "Frau Lange hat Geburtstag"
     ],
     "loesung": 1,
     "erklaerung": "Es wird für ein Geschenk gesammelt. Herr Yilmaz feiert, er geht nicht; Frau Lange sammelt nur."
    },
    {
     "art": "wahl",
     "frage": "Nachricht: „Liebe Mitarbeiter, die Schulung zum Arbeitsschutz am 12. Mai ist Pflicht für alle im Lager. Wer an diesem Tag Urlaub hat, meldet sich bitte bei der Personalabteilung für einen Ersatztermin.\"",
     "opt": [
      "Urlaubssperre im Mai",
      "Personalabteilung zieht um",
      "Pflichtschulung Arbeitsschutz – Ersatztermin möglich"
     ],
     "loesung": 2,
     "erklaerung": "Es geht um die Pflichtschulung. Urlaub ist erlaubt, man braucht nur einen anderen Termin."
    },
    {
     "art": "wahl",
     "frage": "Nachricht: „Sehr geehrter Herr Novak, vielen Dank für Ihr Angebot. Der Preis ist für uns in Ordnung, aber wir brauchen die Ware spätestens Ende des Monats. Ist das möglich?\"",
     "opt": [
      "Angebot abgelehnt: Preis zu hoch",
      "Bitte um ein neues Angebot",
      "Rückfrage zum Liefertermin"
     ],
     "loesung": 2,
     "erklaerung": "Der Preis passt, offen ist nur der Termin. Ein neues Angebot wird nicht verlangt."
    },
    {
     "art": "wahl",
     "frage": "Nachricht: „Hallo Jana, ich bin heute krank und kann nicht ins Büro kommen. Die Krankmeldung schicke ich morgen. Kannst du bitte um 10 Uhr das Gespräch mit dem Kunden übernehmen?\"",
     "opt": [
      "Krank – Bitte um Vertretung beim Kundentermin",
      "Kunde sagt Gespräch ab",
      "Neue Regeln für Krankmeldungen"
     ],
     "loesung": 0,
     "erklaerung": "Die Absenderin ist krank und bittet um Vertretung. Der Kunde sagt nichts ab."
    },
    {
     "art": "wahl",
     "frage": "Nachricht: „Liebe Kollegen, die Parkplätze hinter dem Gebäude werden ab Juli neu markiert. Zwei Wochen lang können Sie dort nicht parken. Bitte nutzen Sie das Parkhaus am Bahnhof, die Firma übernimmt die Kosten.\"",
     "opt": [
      "Firma kauft das Parkhaus",
      "Parkplätze gesperrt – Firma zahlt Parkhaus",
      "Mehr Parkplätze ab Juli"
     ],
     "loesung": 1,
     "erklaerung": "Kern: vorübergehende Sperrung und Ersatz auf Firmenkosten. Mehr Plätze gibt es nicht."
    },
    {
     "art": "wahl",
     "frage": "Nachricht: „Sehr geehrte Damen und Herren, ich interessiere mich für Ihren Kurs „Buchhaltung für Einsteiger\". Gibt es den Kurs auch am Abend? Und übernimmt die Agentur für Arbeit die Kosten?\"",
     "opt": [
      "Anmeldung zum Abendkurs",
      "Absage eines Kurses",
      "Fragen zu Kurszeiten und Förderung"
     ],
     "loesung": 2,
     "erklaerung": "Die Person fragt nur nach, sie meldet sich noch nicht an."
    }
   ]
  },
  {
   "id": "tbb1l2",
   "stufe": 1,
   "titel": "Die Anzeige mit dem einen Detail",
   "kurz": "Jede Bedingung prüfen – manchmal passt keine Anzeige",
   "ziel": "Nach diesem Block prüfst du bei Stellen- und Firmenanzeigen jede Bedingung und erkennst, wenn keine Anzeige passt.",
   "zeichen": "🔎",
   "farbe": "gold",
   "aufgaben": [
    {
     "art": "wahl",
     "frage": "Situation: Olga sucht eine Stelle als Verkäuferin in Teilzeit, nur vormittags, weil sie nachmittags ihr Kind abholt. Welche Anzeige passt?",
     "opt": [
      "Verkäufer in Vollzeit, Frühschicht 6–14.30 Uhr",
      "Verkäufer in Teilzeit, Spätschicht 14–20 Uhr",
      "Verkäufer in Teilzeit, Montag bis Freitag 8–12 Uhr"
     ],
     "loesung": 2,
     "erklaerung": "A ist Vollzeit bis nachmittags, B nachmittags. Nur C ist Teilzeit am Vormittag."
    },
    {
     "art": "wahl",
     "frage": "Situation: Ein Lagerhelfer ohne Staplerschein sucht Arbeit, möglichst ohne Nachtschicht.",
     "opt": [
      "Lagerhelfer, Staplerschein Pflicht, nur Tagschicht",
      "Lagerhelfer, keine Vorkenntnisse, Tagschicht 7–15 Uhr",
      "Lagerhelfer, keine Vorkenntnisse, Nachtschicht mit Zuschlag"
     ],
     "loesung": 1,
     "erklaerung": "A verlangt den Staplerschein, C ist nachts. B erfüllt beide Bedingungen."
    },
    {
     "art": "wahl",
     "frage": "Situation: Ihre Firma (12 Mitarbeiter) sucht ein Catering, das täglich warmes Mittagessen liefert.",
     "opt": [
      "Mittagessen-Lieferung für Firmen ab 20 Personen",
      "Keine der Anzeigen passt (x)",
      "Buffet für Feiern ab 12 Personen"
     ],
     "loesung": 1,
     "erklaerung": "Das tägliche Mittagessen gibt es erst ab 20 Personen, das Buffet ist nur für Feiern. Also x."
    },
    {
     "art": "wahl",
     "frage": "Situation: Ein Elektriker sucht eine Weiterbildung, die er neben der Arbeit am Wochenende machen kann.",
     "opt": [
      "Meistervorbereitung, berufsbegleitend, samstags",
      "Meistervorbereitung in Vollzeit, neun Monate",
      "Online-Kurs Buchhaltung, jederzeit"
     ],
     "loesung": 0,
     "erklaerung": "B ist Vollzeit, C passt nicht zum Beruf. Nur A ist am Wochenende neben der Arbeit möglich."
    },
    {
     "art": "wahl",
     "frage": "Situation: Herr Demir braucht Sicherheitsschuhe Größe 48 noch heute, am Samstag.",
     "opt": [
      "Arbeitsschuhe online bestellen, Lieferung in 3 Tagen",
      "Sicherheitsschuhe, alle Größen bis 50, Sa 9–16 Uhr",
      "Sicherheitsschuhe, Größen 36–46, Sa 9–14 Uhr"
     ],
     "loesung": 1,
     "erklaerung": "A dauert zu lange, C hat Größe 48 nicht. B hat samstags offen und große Größen."
    },
    {
     "art": "wahl",
     "frage": "Situation: Eine Krankenpflegerin mit Abschluss aus Brasilien sucht eine Stelle und Hilfe bei der Anerkennung.",
     "opt": [
      "Pflegefachkraft gesucht, nur mit deutschem Examen",
      "Pflegehelfer gesucht, Führerschein nötig",
      "Pflegefachkraft gesucht, wir helfen bei der Anerkennung"
     ],
     "loesung": 2,
     "erklaerung": "A schließt ausländische Abschlüsse aus, B ist eine Helferstelle. C bietet genau die Unterstützung."
    },
    {
     "art": "wahl",
     "frage": "Situation: Ein Team von vier Personen sucht ein Gemeinschaftsbüro, aber nur für zwei Monate.",
     "opt": [
      "Teambüro für 3–6 Personen, mindestens 6 Monate",
      "Keine der Anzeigen passt (x)",
      "Einzelschreibtisch, tageweise buchbar"
     ],
     "loesung": 1,
     "erklaerung": "A verlangt sechs Monate, B ist nur ein Platz für eine Person. Also x."
    },
    {
     "art": "wahl",
     "frage": "Situation: Eine Mutter braucht Betreuung für ihr krankes Kind, kurzfristig noch heute.",
     "opt": [
      "Notfallbetreuung bei kranken Kindern, Anruf bis 7 Uhr genügt",
      "Kita-Platz ab nächstem Monat frei",
      "Babysitter für Abende, Buchung eine Woche vorher"
     ],
     "loesung": 0,
     "erklaerung": "Nur A betreut kranke Kinder am selben Tag. B und C sind nicht kurzfristig."
    },
    {
     "art": "wahl",
     "frage": "Situation: Ihre Firma sucht ein Jobticket, das auch für den Regionalzug ins Umland gilt.",
     "opt": [
      "Jobticket nur für Bus und Straßenbahn im Stadtgebiet",
      "Dauerparkplatz am Bahnhof für Pendler",
      "Keine der Anzeigen passt (x)"
     ],
     "loesung": 2,
     "erklaerung": "Das Jobticket gilt nicht im Regionalzug, der Parkplatz ist kein Ticket. Also x."
    },
    {
     "art": "wahl",
     "frage": "Situation: Ein Restaurant braucht dringend eine Hygieneschulung für zwei neue Mitarbeiter, am besten noch diese Woche.",
     "opt": [
      "Hygieneschulung, nächster Termin in sechs Wochen",
      "Hygieneschulung online, Bescheinigung sofort",
      "Erste-Hilfe-Kurs für Betriebe, jeden Freitag"
     ],
     "loesung": 1,
     "erklaerung": "A ist zu spät, C ist ein anderes Thema. Nur B ist sofort möglich."
    }
   ]
  },
  {
   "id": "tbb1l3",
   "stufe": 2,
   "titel": "Sprachbausteine: Grammatik im Büro-Deutsch",
   "kurz": "Konnektoren, Präpositionen, Passiv, Endungen – typisch für Firmentexte",
   "ziel": "Nach diesem Block erkennst du in Mitteilungen und Geschäftsbriefen an der Satzstruktur, welche Form in die Lücke gehört.",
   "zeichen": "🧩",
   "farbe": "rot",
   "aufgaben": [
    {
     "art": "wahl",
     "frage": "Bitte informieren Sie uns, ___ Sie am Termin nicht teilnehmen können.",
     "opt": [
      "falls",
      "obwohl",
      "damit"
     ],
     "loesung": 0,
     "erklaerung": "„falls\" leitet eine Bedingung ein: für den Fall, dass Sie nicht kommen."
    },
    {
     "art": "wahl",
     "frage": "Der Bericht für die Geschäftsleitung muss bis Freitag ___ werden.",
     "opt": [
      "geschrieben",
      "schreiben",
      "geschreibt"
     ],
     "loesung": 0,
     "erklaerung": "Passiv mit Modalverb: „muss … geschrieben werden\" – Partizip II von „schreiben\"."
    },
    {
     "art": "wahl",
     "frage": "Die Rechnung ___ bereits gestern an Sie verschickt.",
     "opt": [
      "hat",
      "wird",
      "wurde"
     ],
     "loesung": 2,
     "erklaerung": "Passiv Präteritum: „wurde … verschickt\". „gestern\" zeigt die Vergangenheit."
    },
    {
     "art": "wahl",
     "frage": "___ der Bauarbeiten bleibt der Haupteingang bis Freitag geschlossen.",
     "opt": [
      "Trotz",
      "Wegen",
      "Während"
     ],
     "loesung": 1,
     "erklaerung": "„wegen\" + Genitiv nennt den Grund für die Schließung."
    },
    {
     "art": "wahl",
     "frage": "Neue Mitarbeiter erhalten am ersten Tag einen Ausweis, ___ sie das Gebäude betreten können.",
     "opt": [
      "mit dem",
      "mit der",
      "mit das"
     ],
     "loesung": 0,
     "erklaerung": "„der Ausweis\" → „mit\" + Dativ maskulin = „mit dem\"."
    },
    {
     "art": "wahl",
     "frage": "Wir bitten Sie, das Formular bis Ende der Woche ausgefüllt ___ .",
     "opt": [
      "zurückschicken",
      "zurückzuschicken",
      "zurückgeschickt"
     ],
     "loesung": 1,
     "erklaerung": "Nach „bitten\" folgt „zu\" + Infinitiv; bei trennbaren Verben steht „zu\" in der Mitte."
    },
    {
     "art": "wahl",
     "frage": "Ich interessiere mich sehr ___ die ausgeschriebene Stelle als Lagerist.",
     "opt": [
      "an",
      "über",
      "für"
     ],
     "loesung": 2,
     "erklaerung": "Feste Präposition: „sich interessieren für\" + Akkusativ."
    },
    {
     "art": "wahl",
     "frage": "Die Kantine bleibt geschlossen, ___ die Küche renoviert wird.",
     "opt": [
      "solange",
      "obwohl",
      "sodass"
     ],
     "loesung": 0,
     "erklaerung": "„solange\" = in der ganzen Zeit, in der renoviert wird."
    },
    {
     "art": "wahl",
     "frage": "Bei Fragen wenden Sie sich bitte an ___ Vorgesetzten.",
     "opt": [
      "Ihrem",
      "Ihre",
      "Ihren"
     ],
     "loesung": 2,
     "erklaerung": "„sich wenden an\" + Akkusativ, maskulin: „an Ihren Vorgesetzten\"."
    },
    {
     "art": "wahl",
     "frage": "Ich würde mich freuen, ___ Sie mich zu einem Vorstellungsgespräch einladen.",
     "opt": [
      "dass",
      "wenn",
      "ob"
     ],
     "loesung": 1,
     "erklaerung": "Feste Briefformel mit Konjunktiv: „Ich würde mich freuen, wenn …\"."
    }
   ]
  },
  {
   "id": "tbb1l4",
   "stufe": 2,
   "titel": "Feste Wendungen in Bewerbung und Geschäftsbrief",
   "kurz": "Briefformeln und Nomen-Verb-Verbindungen, die immer gleich sind",
   "ziel": "Nach diesem Block erkennst du typische Wendungen aus Bewerbungen und Geschäftsbriefen sofort.",
   "zeichen": "🔗",
   "farbe": "lila",
   "aufgaben": [
    {
     "art": "wahl",
     "frage": "Hiermit ___ ich mich um die Stelle als Bürokauffrau.",
     "opt": [
      "bewerbe",
      "melde",
      "frage"
     ],
     "loesung": 0,
     "erklaerung": "Feste Formel: „sich bewerben um eine Stelle\"."
    },
    {
     "art": "wahl",
     "frage": "Ihre Anzeige habe ich mit großem Interesse ___ .",
     "opt": [
      "gesehen",
      "gelesen",
      "geschaut"
     ],
     "loesung": 1,
     "erklaerung": "Typische Einleitung: „mit großem Interesse gelesen\"."
    },
    {
     "art": "wahl",
     "frage": "Über eine Einladung zu einem persönlichen Gespräch ___ ich mich sehr.",
     "opt": [
      "hätte",
      "möchte",
      "würde"
     ],
     "loesung": 2,
     "erklaerung": "Schlussformel: „Über … würde ich mich sehr freuen.\""
    },
    {
     "art": "wahl",
     "frage": "Bitte ___ Sie mir ein Angebot für 200 Arbeitshosen.",
     "opt": [
      "machen",
      "senden",
      "geben"
     ],
     "loesung": 1,
     "erklaerung": "Im Geschäftsbrief: „ein Angebot senden/zuschicken\". „machen\" klingt umgangssprachlich."
    },
    {
     "art": "wahl",
     "frage": "Wir ___ Bezug auf Ihr Schreiben vom 3. März.",
     "opt": [
      "haben",
      "geben",
      "nehmen"
     ],
     "loesung": 2,
     "erklaerung": "Feste Wendung: „Bezug nehmen auf\"."
    },
    {
     "art": "wahl",
     "frage": "Leider müssen wir Ihre Bestellung ___ .",
     "opt": [
      "stornieren",
      "abmachen",
      "ausmachen"
     ],
     "loesung": 0,
     "erklaerung": "Eine Bestellung wird „storniert\", also rückgängig gemacht."
    },
    {
     "art": "wahl",
     "frage": "Die gewünschten Unterlagen finden Sie ___ .",
     "opt": [
      "im Anhang",
      "am Anhang",
      "beim Anhang"
     ],
     "loesung": 0,
     "erklaerung": "Feste Formel in E-Mails: „im Anhang\"."
    },
    {
     "art": "wahl",
     "frage": "Ich bin ab sofort ___ und könnte schon nächsten Monat anfangen.",
     "opt": [
      "vorhanden",
      "verfügbar",
      "erreichbar"
     ],
     "loesung": 1,
     "erklaerung": "In Bewerbungen: „ab sofort verfügbar\" = kann sofort anfangen."
    },
    {
     "art": "wahl",
     "frage": "Für Rückfragen ___ ich Ihnen jederzeit gern zur Verfügung.",
     "opt": [
      "bin",
      "halte",
      "stehe"
     ],
     "loesung": 2,
     "erklaerung": "Feste Wendung: „jemandem zur Verfügung stehen\"."
    },
    {
     "art": "wahl",
     "frage": "Wir haben die Reparatur in ___ gegeben und informieren Sie, sobald sie fertig ist.",
     "opt": [
      "Arbeit",
      "Auftrag",
      "Betrieb"
     ],
     "loesung": 1,
     "erklaerung": "Nomen-Verb-Verbindung: „etwas in Auftrag geben\" = einen Auftrag erteilen."
    }
   ]
  }
 ],
 "teile": [
  {
   "nr": 1,
   "art": "textwahl",
   "name": "Leseverstehen: Betreffzeilen",
   "kurz": "Fünf E-Mails ohne Betreff, zehn Betreffzeilen",
   "was": "Du liest fünf kurze E-Mails und Mitteilungen aus dem Betrieb. Zu jeder passt genau eine Betreffzeile — fünf bleiben übrig.",
   "tipp": "Der Betreff sagt, worum es geht und was zu tun ist. Ein Wort aus der Mail im Betreff heißt noch nicht, dass er passt.",
   "zeichen": "✉️",
   "farbe": "turq",
   "punkte": 5,
   "runden": [
    {
     "id": "b1bbt1s1",
     "aufgaben": [
      {
       "frage": "Welcher Betreff passt zu Text 1?",
       "opt": [
        "Während der Bauarbeiten kostenlos im Parkhaus parken",
        "IT-Abteilung zieht in den dritten Stock um",
        "Arbeitszeit wird ab Juli elektronisch erfasst",
        "Neue Kaffeemaschine für die Abteilung bestellt",
        "Probleme mit dem Computer bitte nur noch online melden",
        "Betriebsrat wird im Herbst neu gewählt",
        "Jeden Freitag wird der Kühlschrank leer geräumt",
        "Alle Mitarbeiter bekommen einen neuen Firmenausweis",
        "Einladung zur Versammlung aller Beschäftigten",
        "Firma zahlt Zuschuss zum Jobticket"
       ],
       "loesung": 4,
       "fest": true,
       "text": {
        "sorte": "email",
        "quelle": "E-Mail der IT-Abteilung",
        "titel": "Text 1",
        "zeilen": [
         "Liebe Kollegen, ab Montag, dem 3. März, nutzen wir ein neues Ticketsystem. Wenn Ihr Drucker streikt oder Ihr Programm nicht startet, füllen Sie bitte das kurze Formular im Intranet aus. Sie bekommen dann sofort eine Nummer und können sehen, wann wir uns um Ihr Problem kümmern.",
         "Die Telefonnummer der Hotline gilt nur noch für Notfälle, zum Beispiel wenn das ganze Netzwerk ausfällt. Unser Büro bleibt wie bisher im dritten Stock. Viele Grüße, Ihr IT-Team"
        ]
       },
       "stelle": "füllen Sie bitte das kurze Formular im Intranet aus",
       "erklaerung": "Störungen meldet man jetzt über ein Formular. Das Büro bleibt im dritten Stock, es gibt keinen Umzug."
      },
      {
       "frage": "Welcher Betreff passt zu Text 2?",
       "opt": [
        "Während der Bauarbeiten kostenlos im Parkhaus parken",
        "IT-Abteilung zieht in den dritten Stock um",
        "Arbeitszeit wird ab Juli elektronisch erfasst",
        "Neue Kaffeemaschine für die Abteilung bestellt",
        "Probleme mit dem Computer bitte nur noch online melden",
        "Betriebsrat wird im Herbst neu gewählt",
        "Jeden Freitag wird der Kühlschrank leer geräumt",
        "Alle Mitarbeiter bekommen einen neuen Firmenausweis",
        "Einladung zur Versammlung aller Beschäftigten",
        "Firma zahlt Zuschuss zum Jobticket"
       ],
       "loesung": 2,
       "fest": true,
       "text": {
        "sorte": "email",
        "quelle": "Mitteilung der Personalabteilung",
        "titel": "Text 2",
        "zeilen": [
         "Bisher haben viele von Ihnen ihre Arbeitszeit auf Papier notiert und am Monatsende abgegeben. Das ändert sich zum 1. Juli: Neben jedem Eingang hängt dann ein Terminal, an dem Sie sich mit Ihrem Firmenausweis an- und abmelden.",
         "Sie brauchen dafür keinen neuen Ausweis, der Chip in Ihrer jetzigen Karte reicht aus. Ihre Stunden und Überstunden können Sie danach jederzeit im Mitarbeiterportal ansehen. Bei Fragen hilft Ihnen Frau Ilić aus der Personalabteilung gern weiter."
        ]
       },
       "stelle": "an dem Sie sich mit Ihrem Firmenausweis an- und abmelden",
       "erklaerung": "Die Zeit wird am Terminal erfasst. Einen neuen Ausweis braucht man ausdrücklich nicht."
      },
      {
       "frage": "Welcher Betreff passt zu Text 3?",
       "opt": [
        "Während der Bauarbeiten kostenlos im Parkhaus parken",
        "IT-Abteilung zieht in den dritten Stock um",
        "Arbeitszeit wird ab Juli elektronisch erfasst",
        "Neue Kaffeemaschine für die Abteilung bestellt",
        "Probleme mit dem Computer bitte nur noch online melden",
        "Betriebsrat wird im Herbst neu gewählt",
        "Jeden Freitag wird der Kühlschrank leer geräumt",
        "Alle Mitarbeiter bekommen einen neuen Firmenausweis",
        "Einladung zur Versammlung aller Beschäftigten",
        "Firma zahlt Zuschuss zum Jobticket"
       ],
       "loesung": 6,
       "fest": true,
       "text": {
        "sorte": "email",
        "quelle": "E-Mail an das Team",
        "titel": "Text 3",
        "zeilen": [
         "Hallo zusammen, leider sieht unsere Teeküche im Moment nicht gut aus. Im Kühlschrank stehen Joghurts, die schon vor Wochen abgelaufen sind, und manche Dosen riechen inzwischen ziemlich unangenehm.",
         "Ab sofort gilt deshalb: Jeden Freitag um 15 Uhr nimmt unser Reinigungsdienst alles heraus, was nicht mit Namen beschriftet ist, und wirft es weg. Bitte stellt auch euer Geschirr direkt in die Spülmaschine. Die neue Kaffeemaschine soll ja lange schön bleiben! Danke und Gruß, Sandra"
        ]
       },
       "stelle": "Jeden Freitag um 15 Uhr nimmt unser Reinigungsdienst alles heraus",
       "erklaerung": "Es geht um Ordnung im Kühlschrank. Die Kaffeemaschine ist schon da und wird nur nebenbei erwähnt."
      },
      {
       "frage": "Welcher Betreff passt zu Text 4?",
       "opt": [
        "Während der Bauarbeiten kostenlos im Parkhaus parken",
        "IT-Abteilung zieht in den dritten Stock um",
        "Arbeitszeit wird ab Juli elektronisch erfasst",
        "Neue Kaffeemaschine für die Abteilung bestellt",
        "Probleme mit dem Computer bitte nur noch online melden",
        "Betriebsrat wird im Herbst neu gewählt",
        "Jeden Freitag wird der Kühlschrank leer geräumt",
        "Alle Mitarbeiter bekommen einen neuen Firmenausweis",
        "Einladung zur Versammlung aller Beschäftigten",
        "Firma zahlt Zuschuss zum Jobticket"
       ],
       "loesung": 8,
       "fest": true,
       "text": {
        "sorte": "email",
        "quelle": "Aushang des Betriebsrats",
        "titel": "Text 4",
        "zeilen": [
         "Der Betriebsrat lädt alle Beschäftigten herzlich zur Betriebsversammlung ein. Sie findet am Donnerstag, dem 14. November, von 10 bis 12 Uhr in der Kantine statt. Die Zeit gilt als Arbeitszeit.",
         "Auf der Tagesordnung stehen der Bericht über das vergangene Jahr, die geplante Erweiterung des Lagers und Ihre Fragen an die Geschäftsführung. Die nächste Wahl des Betriebsrats ist erst im übernächsten Jahr. Wer an diesem Tag Schicht hat, spricht bitte rechtzeitig mit seinem Vorgesetzten."
        ]
       },
       "stelle": "lädt alle Beschäftigten herzlich zur Betriebsversammlung ein",
       "erklaerung": "Es ist eine Einladung zur Versammlung. Die Wahl findet laut Text gerade nicht bald statt."
      },
      {
       "frage": "Welcher Betreff passt zu Text 5?",
       "opt": [
        "Während der Bauarbeiten kostenlos im Parkhaus parken",
        "IT-Abteilung zieht in den dritten Stock um",
        "Arbeitszeit wird ab Juli elektronisch erfasst",
        "Neue Kaffeemaschine für die Abteilung bestellt",
        "Probleme mit dem Computer bitte nur noch online melden",
        "Betriebsrat wird im Herbst neu gewählt",
        "Jeden Freitag wird der Kühlschrank leer geräumt",
        "Alle Mitarbeiter bekommen einen neuen Firmenausweis",
        "Einladung zur Versammlung aller Beschäftigten",
        "Firma zahlt Zuschuss zum Jobticket"
       ],
       "loesung": 0,
       "fest": true,
       "text": {
        "sorte": "email",
        "quelle": "Mitteilung der Geschäftsleitung",
        "titel": "Text 5",
        "zeilen": [
         "Wie Sie wissen, wird unser Firmenparkplatz ab dem 2. Juni neu gepflastert. Die Arbeiten dauern voraussichtlich sechs Wochen. In dieser Zeit können Sie Ihr Auto im Parkhaus am Marktplatz abstellen.",
         "Am Empfang erhalten Sie dafür eine Karte, mit der Sie nichts bezahlen müssen. Die Kosten übernimmt die Firma. Wer lieber mit Bus und Bahn kommt, kann sich weiterhin bei der Personalabteilung über unser Jobticket informieren."
        ]
       },
       "stelle": "Am Empfang erhalten Sie dafür eine Karte, mit der Sie nichts bezahlen müssen.",
       "erklaerung": "Hauptsache: kostenlos im Parkhaus parken. Das Jobticket gibt es schon, ein neuer Zuschuss wird nicht genannt."
      }
     ]
    },
    {
     "id": "b1bbt1s2",
     "aufgaben": [
      {
       "frage": "Welcher Betreff passt zu Text 1?",
       "opt": [
        "Neue Gabelstapler werden im Frühjahr geliefert",
        "Schulung für Staplerfahrer: Termine jetzt eintragen",
        "Spätschicht endet künftig eine Stunde früher",
        "Wer am Wochenende einspringt, bekommt mehr Geld",
        "Sicherheitsschuhe werden ab sofort kontrolliert",
        "Neuer Kunde liefert ab Montag nur noch per Bahn",
        "Tor drei bleibt wegen Reparatur geschlossen",
        "Kollegen spenden für Betriebsfeier",
        "Unfall im Lager: Mitarbeiter verletzt",
        "Wo Fundsachen im Betrieb abgegeben werden"
       ],
       "loesung": 1,
       "fest": true,
       "text": {
        "sorte": "email",
        "quelle": "E-Mail der Lagerleitung",
        "titel": "Text 1",
        "zeilen": [
         "Liebe Kollegen, die Berufsgenossenschaft verlangt, dass alle Staplerfahrer einmal im Jahr an einer Sicherheitsunterweisung teilnehmen. Die nächsten Termine sind am 4., 11. und 18. März, jeweils von 7 bis 9 Uhr im Schulungsraum.",
         "Bitte tragt euch bis Ende Februar in die Liste am Schwarzen Brett ein. Ohne die Unterweisung dürft ihr ab April keinen Stapler mehr fahren. Die neuen Elektrostapler, die im Frühjahr kommen, werden in der Schulung auch kurz vorgestellt. Gruß, Murat Aydın"
        ]
       },
       "stelle": "Bitte tragt euch bis Ende Februar in die Liste am Schwarzen Brett ein.",
       "erklaerung": "Hauptthema ist die Anmeldung zur Schulung. Die neuen Stapler werden nur am Rand erwähnt."
      },
      {
       "frage": "Welcher Betreff passt zu Text 2?",
       "opt": [
        "Neue Gabelstapler werden im Frühjahr geliefert",
        "Schulung für Staplerfahrer: Termine jetzt eintragen",
        "Spätschicht endet künftig eine Stunde früher",
        "Wer am Wochenende einspringt, bekommt mehr Geld",
        "Sicherheitsschuhe werden ab sofort kontrolliert",
        "Neuer Kunde liefert ab Montag nur noch per Bahn",
        "Tor drei bleibt wegen Reparatur geschlossen",
        "Kollegen spenden für Betriebsfeier",
        "Unfall im Lager: Mitarbeiter verletzt",
        "Wo Fundsachen im Betrieb abgegeben werden"
       ],
       "loesung": 3,
       "fest": true,
       "text": {
        "sorte": "email",
        "quelle": "Mitteilung der Personalabteilung",
        "titel": "Text 2",
        "zeilen": [
         "Im Weihnachtsgeschäft haben wir deutlich mehr Bestellungen als sonst. Deshalb suchen wir für die Samstage im Dezember Freiwillige, die eine zusätzliche Schicht übernehmen.",
         "Für jede Stunde am Samstag zahlen wir einen Zuschlag von 25 Prozent, für den Sonntag sogar 50 Prozent. Die Spätschicht unter der Woche bleibt wie gewohnt bis 22 Uhr. Wer Interesse hat, meldet sich bitte bis zum 20. November bei seiner Schichtleitung."
        ]
       },
       "stelle": "Für jede Stunde am Samstag zahlen wir einen Zuschlag von 25 Prozent",
       "erklaerung": "Es geht um Zuschläge für Wochenendarbeit. An der Spätschicht ändert sich nichts."
      },
      {
       "frage": "Welcher Betreff passt zu Text 3?",
       "opt": [
        "Neue Gabelstapler werden im Frühjahr geliefert",
        "Schulung für Staplerfahrer: Termine jetzt eintragen",
        "Spätschicht endet künftig eine Stunde früher",
        "Wer am Wochenende einspringt, bekommt mehr Geld",
        "Sicherheitsschuhe werden ab sofort kontrolliert",
        "Neuer Kunde liefert ab Montag nur noch per Bahn",
        "Tor drei bleibt wegen Reparatur geschlossen",
        "Kollegen spenden für Betriebsfeier",
        "Unfall im Lager: Mitarbeiter verletzt",
        "Wo Fundsachen im Betrieb abgegeben werden"
       ],
       "loesung": 6,
       "fest": true,
       "text": {
        "sorte": "email",
        "quelle": "Kurzmitteilung an alle Fahrer",
        "titel": "Text 3",
        "zeilen": [
         "Achtung: An Tor drei ist am Dienstagabend das elektrische Rolltor kaputtgegangen. Die Fachfirma kann erst am kommenden Montag ein Ersatzteil einbauen.",
         "Bis dahin werden alle Lkw an Tor fünf entladen. Bitte sagt das auch den Fahrern der Speditionen, wenn sie sich an der Pforte anmelden. Die Lieferungen unseres neuen Kunden aus Polen kommen wie geplant am Montag früh. Danke für eure Geduld!"
        ]
       },
       "stelle": "Die Fachfirma kann erst am kommenden Montag ein Ersatzteil einbauen.",
       "erklaerung": "Das Tor ist bis zur Reparatur gesperrt. Der neue Kunde liefert normal per Lkw, von der Bahn ist keine Rede."
      },
      {
       "frage": "Welcher Betreff passt zu Text 4?",
       "opt": [
        "Neue Gabelstapler werden im Frühjahr geliefert",
        "Schulung für Staplerfahrer: Termine jetzt eintragen",
        "Spätschicht endet künftig eine Stunde früher",
        "Wer am Wochenende einspringt, bekommt mehr Geld",
        "Sicherheitsschuhe werden ab sofort kontrolliert",
        "Neuer Kunde liefert ab Montag nur noch per Bahn",
        "Tor drei bleibt wegen Reparatur geschlossen",
        "Kollegen spenden für Betriebsfeier",
        "Unfall im Lager: Mitarbeiter verletzt",
        "Wo Fundsachen im Betrieb abgegeben werden"
       ],
       "loesung": 4,
       "fest": true,
       "text": {
        "sorte": "email",
        "quelle": "E-Mail der Fachkraft für Arbeitssicherheit",
        "titel": "Text 4",
        "zeilen": [
         "Liebe Kollegen, in den letzten Wochen haben wir mehrmals Mitarbeiter in Turnschuhen in der Halle gesehen. Zum Glück ist noch niemand verletzt worden, aber ein herunterfallendes Paket kann schnell den Fuß brechen.",
         "Ab Montag prüfen die Schichtleiter deshalb zu Beginn jeder Schicht, ob alle Sicherheitsschuhe tragen. Wer keine dabeihat, darf die Halle nicht betreten. Neue Schuhe bekommen Sie kostenlos im Magazin. Mit freundlichen Grüßen, Petra Lindner"
        ]
       },
       "stelle": "ob alle Sicherheitsschuhe tragen",
       "erklaerung": "Hauptsache: Schuhe werden kontrolliert. Ein Unfall ist ausdrücklich noch nicht passiert."
      },
      {
       "frage": "Welcher Betreff passt zu Text 5?",
       "opt": [
        "Neue Gabelstapler werden im Frühjahr geliefert",
        "Schulung für Staplerfahrer: Termine jetzt eintragen",
        "Spätschicht endet künftig eine Stunde früher",
        "Wer am Wochenende einspringt, bekommt mehr Geld",
        "Sicherheitsschuhe werden ab sofort kontrolliert",
        "Neuer Kunde liefert ab Montag nur noch per Bahn",
        "Tor drei bleibt wegen Reparatur geschlossen",
        "Kollegen spenden für Betriebsfeier",
        "Unfall im Lager: Mitarbeiter verletzt",
        "Wo Fundsachen im Betrieb abgegeben werden"
       ],
       "loesung": 9,
       "fest": true,
       "text": {
        "sorte": "email",
        "quelle": "Aushang im Pausenraum",
        "titel": "Text 5",
        "zeilen": [
         "In den letzten Monaten wurden im Pausenraum und in den Umkleiden immer wieder Dinge liegen gelassen: Jacken, Schlüssel, sogar ein Handy. Bitte legt solche Sachen nicht einfach auf den Tisch, sondern bringt sie zur Pforte.",
         "Dort werden sie in eine Liste eingetragen und vier Wochen aufbewahrt. Was danach niemand abgeholt hat, geht an die Kleiderkammer der Stadt. Wer etwas vermisst, fragt bitte direkt beim Pförtner nach."
        ]
       },
       "stelle": "sondern bringt sie zur Pforte",
       "erklaerung": "Es geht darum, wo man gefundene Dinge abgibt. Eine Spende für eine Feier wird nicht erwähnt."
      }
     ]
    },
    {
     "id": "b1bbt1s3",
     "aufgaben": [
      {
       "frage": "Welcher Betreff passt zu Text 1?",
       "opt": [
        "Bewohner bekommen ab Mai neue Zimmer",
        "Dienstplan für den Sommer: Wünsche bis Ende März abgeben",
        "Grippeimpfung für das Personal direkt im Haus",
        "Neue Pflegedienstleitung stellt sich vor",
        "Pflegekräfte bekommen ab Januar mehr Gehalt",
        "Besuchszeiten werden wegen Krankheitswelle eingeschränkt",
        "Hausarzt bietet keine Sprechstunde mehr an",
        "Pflegedokumentation nur noch auf dem Tablet",
        "Ehemalige Leiterin geht in Rente",
        "Station sucht dringend Aushilfen für die Küche"
       ],
       "loesung": 2,
       "fest": true,
       "text": {
        "sorte": "email",
        "quelle": "E-Mail der Heimleitung",
        "titel": "Text 1",
        "zeilen": [
         "Liebe Mitarbeiter, auch in diesem Jahr kommt Dr. Hoffmann, der Hausarzt vieler Bewohner, zu uns ins Haus. Am 15. und 22. Oktober können Sie sich während der Arbeitszeit im Besprechungsraum gegen Grippe impfen lassen.",
         "Bringen Sie bitte Ihren Impfpass mit. Die Kosten übernimmt die Einrichtung. Für die Bewohner organisieren wir die Impfung wie immer separat über die Angehörigen. Bitte melden Sie sich bis zum 10. Oktober bei der Verwaltung an."
        ]
       },
       "stelle": "können Sie sich während der Arbeitszeit im Besprechungsraum gegen Grippe impfen lassen",
       "erklaerung": "Das Personal kann sich im Haus impfen lassen. Der Hausarzt kommt ja gerade, er hört nicht auf."
      },
      {
       "frage": "Welcher Betreff passt zu Text 2?",
       "opt": [
        "Bewohner bekommen ab Mai neue Zimmer",
        "Dienstplan für den Sommer: Wünsche bis Ende März abgeben",
        "Grippeimpfung für das Personal direkt im Haus",
        "Neue Pflegedienstleitung stellt sich vor",
        "Pflegekräfte bekommen ab Januar mehr Gehalt",
        "Besuchszeiten werden wegen Krankheitswelle eingeschränkt",
        "Hausarzt bietet keine Sprechstunde mehr an",
        "Pflegedokumentation nur noch auf dem Tablet",
        "Ehemalige Leiterin geht in Rente",
        "Station sucht dringend Aushilfen für die Küche"
       ],
       "loesung": 1,
       "fest": true,
       "text": {
        "sorte": "email",
        "quelle": "Mitteilung der Wohnbereichsleitung",
        "titel": "Text 2",
        "zeilen": [
         "Liebe Kollegen, ich plane gerade die Dienste für Juni, Juli und August. Damit möglichst viele von euch im Sommer Urlaub machen können, tragt bitte eure Wünsche bis zum 31. März in den Kalender im Dienstzimmer ein.",
         "Wer schulpflichtige Kinder hat, bekommt in den Ferien Vorrang. Ich kann aber nicht garantieren, dass alle Wünsche erfüllt werden. Wer zu spät kommt, muss nehmen, was übrig ist. Liebe Grüße, Anja"
        ]
       },
       "stelle": "tragt bitte eure Wünsche bis zum 31. März in den Kalender im Dienstzimmer ein",
       "erklaerung": "Urlaubswünsche für den Sommer sollen eingetragen werden. Über Gehalt steht nichts im Text."
      },
      {
       "frage": "Welcher Betreff passt zu Text 3?",
       "opt": [
        "Bewohner bekommen ab Mai neue Zimmer",
        "Dienstplan für den Sommer: Wünsche bis Ende März abgeben",
        "Grippeimpfung für das Personal direkt im Haus",
        "Neue Pflegedienstleitung stellt sich vor",
        "Pflegekräfte bekommen ab Januar mehr Gehalt",
        "Besuchszeiten werden wegen Krankheitswelle eingeschränkt",
        "Hausarzt bietet keine Sprechstunde mehr an",
        "Pflegedokumentation nur noch auf dem Tablet",
        "Ehemalige Leiterin geht in Rente",
        "Station sucht dringend Aushilfen für die Küche"
       ],
       "loesung": 3,
       "fest": true,
       "text": {
        "sorte": "email",
        "quelle": "E-Mail an das Team",
        "titel": "Text 3",
        "zeilen": [
         "Liebes Team, seit dem 1. Februar bin ich die neue Pflegedienstleitung im Haus am Lindenpark. Mein Name ist Gabriele Novak. Ich bin Krankenschwester und habe zuletzt zehn Jahre lang eine Station in einem Krankenhaus in Kassel geleitet.",
         "Meine Vorgängerin, Frau Brandt, hat mir das Haus in gutem Zustand übergeben. In den nächsten Wochen möchte ich jeden von Ihnen persönlich kennenlernen. Meine Tür steht immer offen, und Sie finden mich im Büro im Erdgeschoss."
        ]
       },
       "stelle": "seit dem 1. Februar bin ich die neue Pflegedienstleitung",
       "erklaerung": "Die Neue stellt sich vor. Über die Vorgängerin erfährt man nicht, dass sie in Rente geht."
      },
      {
       "frage": "Welcher Betreff passt zu Text 4?",
       "opt": [
        "Bewohner bekommen ab Mai neue Zimmer",
        "Dienstplan für den Sommer: Wünsche bis Ende März abgeben",
        "Grippeimpfung für das Personal direkt im Haus",
        "Neue Pflegedienstleitung stellt sich vor",
        "Pflegekräfte bekommen ab Januar mehr Gehalt",
        "Besuchszeiten werden wegen Krankheitswelle eingeschränkt",
        "Hausarzt bietet keine Sprechstunde mehr an",
        "Pflegedokumentation nur noch auf dem Tablet",
        "Ehemalige Leiterin geht in Rente",
        "Station sucht dringend Aushilfen für die Küche"
       ],
       "loesung": 5,
       "fest": true,
       "text": {
        "sorte": "email",
        "quelle": "Mitteilung der Hygienebeauftragten",
        "titel": "Text 4",
        "zeilen": [
         "In unserem Haus sind zurzeit mehrere Bewohner an einem Magen-Darm-Virus erkrankt. Um eine weitere Ausbreitung zu verhindern, dürfen bis auf Weiteres nur noch zwei Angehörige pro Tag einen Bewohner besuchen, und zwar zwischen 14 und 17 Uhr.",
         "Bitte informieren Sie die Angehörigen freundlich darüber und achten Sie selbst besonders auf die Händedesinfektion. Die Küche bereitet die Mahlzeiten für die betroffenen Bewohner getrennt zu."
        ]
       },
       "stelle": "dürfen bis auf Weiteres nur noch zwei Angehörige pro Tag einen Bewohner besuchen",
       "erklaerung": "Die Besuche werden begrenzt. Die Küche wird nur erwähnt, Aushilfen sucht niemand."
      },
      {
       "frage": "Welcher Betreff passt zu Text 5?",
       "opt": [
        "Bewohner bekommen ab Mai neue Zimmer",
        "Dienstplan für den Sommer: Wünsche bis Ende März abgeben",
        "Grippeimpfung für das Personal direkt im Haus",
        "Neue Pflegedienstleitung stellt sich vor",
        "Pflegekräfte bekommen ab Januar mehr Gehalt",
        "Besuchszeiten werden wegen Krankheitswelle eingeschränkt",
        "Hausarzt bietet keine Sprechstunde mehr an",
        "Pflegedokumentation nur noch auf dem Tablet",
        "Ehemalige Leiterin geht in Rente",
        "Station sucht dringend Aushilfen für die Küche"
       ],
       "loesung": 7,
       "fest": true,
       "text": {
        "sorte": "email",
        "quelle": "E-Mail der Verwaltung",
        "titel": "Text 5",
        "zeilen": [
         "Ab dem 1. April dokumentieren wir die Pflege nicht mehr in Papierordnern. Jeder Wohnbereich bekommt drei Tablets, auf denen Sie Vitalwerte, Medikamente und Beobachtungen direkt am Bett eintragen.",
         "Die alten Ordner werden im März eingescannt und danach im Archiv gelagert. In den nächsten Wochen zeigt Ihnen Herr Kaya in kurzen Schulungen, wie das Programm funktioniert. Die Termine hängen im Dienstzimmer aus."
        ]
       },
       "stelle": "Jeder Wohnbereich bekommt drei Tablets",
       "erklaerung": "Die Dokumentation wird digital. Neue Zimmer für Bewohner gibt es nicht."
      }
     ]
    }
   ]
  },
  {
   "nr": 2,
   "art": "textwahl",
   "name": "Leseverstehen: E-Mail-Wechsel",
   "kurz": "Mehrere Mails hintereinander, fünf Fragen a/b/c",
   "was": "Du liest einen E-Mail-Wechsel, zum Beispiel über eine Reparatur oder eine Lieferung. Fünf Fragen mit je drei Antworten.",
   "tipp": "Achte darauf, wer was schreibt — und was in der letzten Mail gilt. Pläne ändern sich im Lauf des Wechsels.",
   "zeichen": "📨",
   "farbe": "gold",
   "punkte": 5,
   "runden": [
    {
     "id": "b1bbt2s1",
     "text": {
      "sorte": "email",
      "quelle": "E-Mail-Wechsel",
      "titel": "Reparatur der Spülmaschine",
      "zeilen": [
       "Von: Ines Kowalczyk, Restaurant „Zum Hafenkran“ – An: Kundendienst Hellwig Großküchentechnik",
       "Sehr geehrte Damen und Herren, seit gestern Abend pumpt unsere Spülmaschine das Wasser nicht mehr ab. Das Gerät ist erst zwei Jahre alt und wurde bei Ihnen gekauft. Wir haben am Wochenende zwei Hochzeitsfeiern und brauchen die Maschine dringend. Können Sie bitte noch heute einen Techniker schicken? Die Seriennummer und eine Kopie der Rechnung finden Sie im Anhang. Sie erreichen mich in der Küche täglich ab 9 Uhr unter der bekannten Nummer. Mit freundlichen Grüßen, Ines Kowalczyk, Küchenleitung",
       "Von: Kundendienst Hellwig Großküchentechnik – An: Ines Kowalczyk",
       "Sehr geehrte Frau Kowalczyk, vielen Dank für Ihre Nachricht. Leider sind heute alle Techniker schon unterwegs. Herr Baumann kann morgen, also am Freitag, zwischen 7 und 9 Uhr bei Ihnen sein. Da die Garantie nach 24 Monaten endet, prüfen wir noch, ob Ihr Gerät noch darunter fällt. Die Anfahrt kostet in jedem Fall 45 Euro. Bitte sorgen Sie dafür, dass jemand die Tür zur Küche öffnen kann. Freundliche Grüße, Melanie Roth",
       "Von: Ines Kowalczyk – An: Kundendienst Hellwig Großküchentechnik",
       "Sehr geehrte Frau Roth, der Termin am Freitag passt. Unser Spüler Herr Osei ist ab halb sieben in der Küche und lässt den Techniker herein. Ich habe noch einmal in die Rechnung geschaut: Wir haben die Maschine am 14. März vor zwei Jahren gekauft, die Garantie gilt also noch drei Wochen. Ich gehe deshalb davon aus, dass wir auch die Anfahrt nicht bezahlen müssen. Falls ein Ersatzteil bestellt werden muss, sagen Sie mir bitte sofort Bescheid, damit wir für Samstag Einweggeschirr besorgen können. Mit freundlichen Grüßen, Ines Kowalczyk"
      ]
     },
     "aufgaben": [
      {
       "frage": "Warum schreibt Frau Kowalczyk an den Kundendienst?",
       "opt": [
        "Sie möchte eine neue Spülmaschine kaufen.",
        "Die Spülmaschine pumpt das Wasser nicht mehr ab.",
        "Sie braucht Geschirr für zwei Hochzeitsfeiern."
       ],
       "loesung": 1,
       "stelle": "seit gestern Abend pumpt unsere Spülmaschine das Wasser nicht mehr ab",
       "erklaerung": "Die Maschine ist kaputt; die Feiern sind nur der Grund für die Eile."
      },
      {
       "frage": "Wann kommt der Techniker?",
       "opt": [
        "Noch am selben Tag.",
        "Am Freitagmorgen.",
        "Am Samstag vor der Feier."
       ],
       "loesung": 1,
       "stelle": "kann morgen, also am Freitag, zwischen 7 und 9 Uhr bei Ihnen sein",
       "erklaerung": "Heute ist kein Techniker frei; er kommt am Freitag zwischen sieben und neun Uhr."
      },
      {
       "frage": "Was schreibt Frau Roth über die Kosten?",
       "opt": [
        "Die Anfahrt muss auf jeden Fall bezahlt werden.",
        "Die Reparatur ist sicher kostenlos.",
        "Die Anfahrt ist nur ohne Garantie kostenlos."
       ],
       "loesung": 0,
       "stelle": "Die Anfahrt kostet in jedem Fall 45 Euro.",
       "erklaerung": "„In jedem Fall“ heißt: mit oder ohne Garantie; ob die Reparatur gratis ist, wird erst geprüft."
      },
      {
       "frage": "Wer öffnet dem Techniker die Tür?",
       "opt": [
        "Frau Kowalczyk selbst.",
        "Frau Roth vom Kundendienst.",
        "Ein Mitarbeiter aus der Küche."
       ],
       "loesung": 2,
       "stelle": "Unser Spüler Herr Osei ist ab halb sieben in der Küche",
       "erklaerung": "Herr Osei, der Spüler, lässt den Techniker herein."
      },
      {
       "frage": "Was möchte Frau Kowalczyk wissen, wenn ein Ersatzteil nötig ist?",
       "opt": [
        "Sie möchte sofort informiert werden.",
        "Sie möchte das Ersatzteil selbst bestellen.",
        "Sie möchte die Feier am Samstag absagen."
       ],
       "loesung": 0,
       "stelle": "sagen Sie mir bitte sofort Bescheid",
       "erklaerung": "Sie will schnell Bescheid bekommen, um Einweggeschirr zu besorgen; absagen will sie nichts."
      }
     ]
    },
    {
     "id": "b1bbt2s2",
     "text": {
      "sorte": "email",
      "quelle": "E-Mail-Wechsel",
      "titel": "Verspätete Lieferung der Büromöbel",
      "zeilen": [
       "Von: Daniel Fuchs, Einkauf, Steuerbüro Reinhardt & Partner – An: Vertrieb Möbelwerk Ostrau",
       "Sehr geehrter Herr Lenz, laut Auftragsbestätigung sollten die zwölf Schreibtische und Bürostühle für unsere neuen Räume am 3. September geliefert werden. Heute ist der 5. September, und wir haben weder die Möbel noch eine Nachricht von Ihnen erhalten. Unsere Mitarbeiter sollen am 16. September in die neuen Räume umziehen. Bitte teilen Sie mir umgehend mit, wann wir mit der Lieferung rechnen können. Mit freundlichen Grüßen, Daniel Fuchs",
       "Von: Kevin Lenz, Vertrieb Möbelwerk Ostrau – An: Daniel Fuchs",
       "Sehr geehrter Herr Fuchs, bitte entschuldigen Sie, dass wir Sie nicht informiert haben. Unser Lieferant für die Tischplatten hatte einen Maschinenschaden, deshalb verzögert sich die Produktion der Schreibtische um etwa zwei Wochen. Die Bürostühle sind dagegen fertig und können schon am Dienstag kommen. Als Ausgleich für die Verspätung bieten wir Ihnen fünf Prozent Rabatt auf die gesamte Bestellung an. Falls Sie bis zum Umzug Tische benötigen, könnten wir Ihnen außerdem kostenlos Leihmöbel zur Verfügung stellen. Freundliche Grüße, Kevin Lenz",
       "Von: Daniel Fuchs – An: Kevin Lenz",
       "Sehr geehrter Herr Lenz, vielen Dank für Ihre schnelle Antwort. Die Stühle nehmen wir gern am Dienstag an, bitte liefern Sie aber nicht vor 10 Uhr, weil unser Hausmeister erst dann im Haus ist. Den Rabatt nehmen wir an. Auf die Leihmöbel möchten wir verzichten, denn wir verschieben den Umzug lieber um eine Woche. Dann müssen wir nicht zweimal Möbel aufbauen. Ich bitte Sie aber, mir den genauen Liefertermin für die Schreibtische schriftlich zu bestätigen, sobald er feststeht. Mit freundlichen Grüßen, Daniel Fuchs"
      ]
     },
     "aufgaben": [
      {
       "frage": "Worüber beschwert sich Herr Fuchs in seiner ersten E-Mail?",
       "opt": [
        "Die Möbel sind beschädigt angekommen.",
        "Die Möbel sind nicht pünktlich gekommen.",
        "Es wurden zu wenige Schreibtische geliefert."
       ],
       "loesung": 1,
       "stelle": "wir haben weder die Möbel noch eine Nachricht von Ihnen erhalten",
       "erklaerung": "Die Lieferung ist zwei Tage zu spät und gar nicht da."
      },
      {
       "frage": "Warum werden die Schreibtische später fertig?",
       "opt": [
        "Bei einem Lieferanten ist eine Maschine kaputtgegangen.",
        "Das Möbelwerk hat zu wenige Mitarbeiter.",
        "Herr Fuchs hat die Bestellung zu spät geschickt."
       ],
       "loesung": 0,
       "stelle": "Unser Lieferant für die Tischplatten hatte einen Maschinenschaden",
       "erklaerung": "Der Grund ist ein Maschinenschaden beim Lieferanten der Tischplatten."
      },
      {
       "frage": "Was bietet Herr Lenz an?",
       "opt": [
        "Er bietet nur Leihmöbel an.",
        "Er schenkt der Firma die Bürostühle.",
        "Er bietet einen Preisnachlass und Leihmöbel an."
       ],
       "loesung": 2,
       "stelle": "bieten wir Ihnen fünf Prozent Rabatt auf die gesamte Bestellung an",
       "erklaerung": "Er bietet beides an: fünf Prozent Rabatt und kostenlose Leihmöbel."
      },
      {
       "frage": "Was soll bei der Lieferung am Dienstag beachtet werden?",
       "opt": [
        "Die Stühle sollen nicht vor zehn Uhr kommen.",
        "Der Hausmeister soll die Stühle aufbauen.",
        "Die Stühle sollen zusammen mit den Tischen kommen."
       ],
       "loesung": 0,
       "stelle": "bitte liefern Sie aber nicht vor 10 Uhr",
       "erklaerung": "Erst ab zehn Uhr ist der Hausmeister da; vom Aufbauen ist keine Rede."
      },
      {
       "frage": "Wie entscheidet sich Herr Fuchs?",
       "opt": [
        "Er nimmt die Leihmöbel bis zum Umzug.",
        "Die Firma zieht eine Woche später um.",
        "Er storniert die Bestellung der Schreibtische."
       ],
       "loesung": 1,
       "stelle": "wir verschieben den Umzug lieber um eine Woche",
       "erklaerung": "Er verzichtet auf Leihmöbel und verschiebt stattdessen den Umzug."
      }
     ]
    },
    {
     "id": "b1bbt2s3",
     "text": {
      "sorte": "email",
      "quelle": "E-Mail-Wechsel",
      "titel": "Schulung zum neuen Lagerprogramm",
      "zeilen": [
       "Von: Sabine Wendt, Personalentwicklung – An: alle Schichtleiter Lager Nord",
       "Liebe Schichtleiter, im Oktober stellen wir im Lager Nord auf das neue Warenwirtschaftsprogramm um. Damit alle sicher damit arbeiten, bietet die Softwarefirma eine eintägige Schulung an. Sie findet am 24. September von 8 bis 15 Uhr im Schulungszentrum in der Hafenstraße statt. Pro Schicht sollen zwei Personen teilnehmen, die ihr Wissen danach an das eigene Team weitergeben. Bitte schicken Sie mir die Namen bis zum 10. September. Viele Grüße, Sabine Wendt",
       "Von: Goran Petrović, Schichtleiter Frühschicht – An: Sabine Wendt",
       "Hallo Frau Wendt, für die Frühschicht melde ich Aylin Demir und mich selbst an. Allerdings haben wir ein Problem: Am 24. September kommt eine große Lieferung für einen Kunden, und ohne mich und Frau Demir fehlen in der Frühschicht zu viele Leute. Gibt es vielleicht einen zweiten Termin? Ich habe außerdem gehört, dass die Schulung auch online angeboten wird. Ginge das für uns? Dann könnten wir nachmittags nach der Schicht teilnehmen. Viele Grüße, Goran Petrović",
       "Von: Sabine Wendt – An: Goran Petrović",
       "Hallo Herr Petrović, danke für die schnelle Anmeldung. Die Online-Schulung ist leider nur für Mitarbeiter im Büro gedacht, weil man im Lager die Handscanner direkt ausprobieren muss. Ich habe aber mit der Softwarefirma gesprochen: Am 1. Oktober gibt es einen zweiten Termin, zur gleichen Uhrzeit und am gleichen Ort. Ich habe Sie beide dafür eingetragen. Die Teilnahme gilt als Arbeitszeit, und die Fahrtkosten mit dem Firmenwagen übernimmt die Firma. Bitte bringen Sie Ihre Sicherheitsschuhe mit. Viele Grüße, Sabine Wendt"
      ]
     },
     "aufgaben": [
      {
       "frage": "Was sollen die Schichtleiter bis zum 10. September tun?",
       "opt": [
        "Sich für einen Online-Kurs anmelden.",
        "Das neue Programm selbst installieren.",
        "Zwei Namen pro Schicht schicken."
       ],
       "loesung": 2,
       "stelle": "Pro Schicht sollen zwei Personen teilnehmen",
       "erklaerung": "Gefragt sind zwei Teilnehmer pro Schicht, deren Namen bis zum zehnten September."
      },
      {
       "frage": "Was sollen die Teilnehmer nach der Schulung machen?",
       "opt": [
        "Ihre Kollegen im Team schulen.",
        "Einen Test bei der Softwarefirma ablegen.",
        "In einem anderen Lager arbeiten."
       ],
       "loesung": 0,
       "stelle": "die ihr Wissen danach an das eigene Team weitergeben",
       "erklaerung": "Sie geben ihr Wissen an ihr Team weiter."
      },
      {
       "frage": "Warum hat Herr Petrović am 24. September ein Problem?",
       "opt": [
        "Er hat an diesem Tag Urlaub.",
        "An diesem Tag fehlen ohnehin viele Kollegen wegen Krankheit.",
        "An diesem Tag gibt es viel Arbeit in der Frühschicht."
       ],
       "loesung": 2,
       "stelle": "Am 24. September kommt eine große Lieferung für einen Kunden",
       "erklaerung": "Wegen einer großen Lieferung werden alle Leute in der Frühschicht gebraucht."
      },
      {
       "frage": "Warum können die beiden nicht online teilnehmen?",
       "opt": [
        "Weil man im Lager mit den Scannern üben muss.",
        "Weil die Online-Schulung schon ausgebucht ist.",
        "Weil sie nachmittags keine Zeit haben."
       ],
       "loesung": 0,
       "stelle": "weil man im Lager die Handscanner direkt ausprobieren muss",
       "erklaerung": "Online ist nur für das Büro; im Lager muss man die Handscanner ausprobieren."
      },
      {
       "frage": "Was erfährt man über den Termin am 1. Oktober?",
       "opt": [
        "Er findet nachmittags nach der Schicht statt.",
        "Er findet zur gleichen Zeit am gleichen Ort statt.",
        "Die Teilnehmer müssen die Fahrt selbst bezahlen."
       ],
       "loesung": 1,
       "stelle": "zur gleichen Uhrzeit und am gleichen Ort",
       "erklaerung": "Gleiche Zeit, gleicher Ort; die Fahrtkosten zahlt die Firma."
      }
     ]
    }
   ]
  },
  {
   "nr": 3,
   "art": "anzeigenX",
   "name": "Leseverstehen: Anzeigen",
   "kurz": "Zehn Situationen, zwölf Anzeigen — manchmal passt keine",
   "was": "Zehn Situationen aus dem Berufsalltag, zwölf Anzeigen. Jede Anzeige passt höchstens einmal; wenn keine passt, wählst du x.",
   "tipp": "Prüf jede Bedingung: Arbeitszeit, Ort, Voraussetzung, Preis. Eine einzige passt nicht — dann nicht nehmen.",
   "zeichen": "🔍",
   "farbe": "rot",
   "punkte": 10,
   "runden": [
    {
     "id": "b1bbt3s1",
     "anzeigen": [
      {
       "b": "a",
       "quelle": "Bäckerei Sonnenkorn",
       "zeilen": [
        "Verkäufer für unsere Filiale am Bahnhof gesucht",
        "Frühschicht ab 5.30 Uhr, Teilzeit 25 Stunden pro Woche",
        "Erfahrung im Verkauf erwünscht"
       ]
      },
      {
       "b": "b",
       "quelle": "Bäckerei Sonnenkorn",
       "zeilen": [
        "Aushilfe für Samstag und Sonntag",
        "Jeweils 8–14 Uhr, als Minijob",
        "Auch für Studenten geeignet"
       ]
      },
      {
       "b": "c",
       "quelle": "Lagerlogistik Brandt",
       "zeilen": [
        "Lagerhelfer in Vollzeit",
        "Staplerschein erforderlich",
        "Drei-Schicht-System mit Zuschlägen für Nachtarbeit"
       ]
      },
      {
       "b": "d",
       "quelle": "Lagerlogistik Brandt",
       "zeilen": [
        "Lagerhelfer ohne Vorkenntnisse",
        "Nur Tagschicht von 7 bis 15.30 Uhr",
        "Einarbeitung und Staplerschein bezahlen wir"
       ]
      },
      {
       "b": "e",
       "quelle": "Pflegedienst Lindenhof",
       "zeilen": [
        "Pflegehelfer für die ambulante Pflege",
        "Führerschein Klasse B notwendig, Dienstwagen wird gestellt",
        "Teilzeit oder Vollzeit"
       ]
      },
      {
       "b": "f",
       "quelle": "Seniorenresidenz Am Weiher",
       "zeilen": [
        "Pflegefachkraft für die Nachtwache",
        "Abgeschlossene Pflegeausbildung erforderlich",
        "Wir unterstützen Sie bei der Anerkennung ausländischer Abschlüsse"
       ]
      },
      {
       "b": "g",
       "quelle": "IT-Service Kronberg",
       "zeilen": [
        "Mitarbeiter im IT-Support",
        "Telefonische Hilfe für Kunden auf Deutsch und Englisch",
        "Arbeit komplett im Homeoffice möglich"
       ]
      },
      {
       "b": "h",
       "quelle": "Hotel Seeblick",
       "zeilen": [
        "Mitarbeiter für den Zimmerservice",
        "Saisonstelle von April bis Oktober",
        "Unterkunft im Personalhaus möglich"
       ]
      },
      {
       "b": "i",
       "quelle": "Restaurant Olivo",
       "zeilen": [
        "Koch mit Erfahrung in der italienischen Küche",
        "Arbeitszeiten abends und am Wochenende",
        "Bezahlung über Tarif"
       ]
      },
      {
       "b": "j",
       "quelle": "Malerbetrieb Hofmann",
       "zeilen": [
        "Ausbildungsplatz zum Maler und Lackierer",
        "Beginn am 1. August",
        "Hauptschulabschluss genügt – das Alter ist uns egal"
       ]
      },
      {
       "b": "k",
       "quelle": "Spedition Nordring",
       "zeilen": [
        "Berufskraftfahrer mit Führerschein CE",
        "Nur Nahverkehr – jeden Abend zu Hause",
        "Feste Tour, moderner Fuhrpark"
       ]
      },
      {
       "b": "l",
       "quelle": "Stadtverwaltung Kellberg",
       "zeilen": [
        "Sachbearbeiter im Bürgerbüro",
        "Sehr gute Deutschkenntnisse (mindestens B2) und Computerkenntnisse",
        "Teilzeit möglich, Gleitzeit"
       ]
      }
     ],
     "aufgaben": [
      {
       "situation": "Sie möchten im Lager arbeiten, haben aber keinen Staplerschein. Nachts können Sie nicht arbeiten, weil Ihre Kinder dann allein wären.",
       "loesung": "d",
       "erklaerung": "Anzeige d: nur Tagschicht, keine Vorkenntnisse, Staplerschein zahlt die Firma. Bei c braucht man den Schein und arbeitet auch nachts."
      },
      {
       "situation": "Ihr Nachbar studiert und sucht einen Job, den er nur am Wochenende machen kann.",
       "loesung": "b",
       "erklaerung": "Die Aushilfe in der Bäckerei arbeitet nur samstags und sonntags, ausdrücklich auch für Studenten."
      },
      {
       "situation": "Sie haben in Ihrem Heimatland als Krankenschwester gearbeitet. Ihr Abschluss ist in Deutschland noch nicht anerkannt, und Sie brauchen dabei Hilfe.",
       "loesung": "f",
       "erklaerung": "Die Seniorenresidenz sucht Pflegefachkräfte und hilft bei der Anerkennung ausländischer Abschlüsse."
      },
      {
       "situation": "Sie kennen sich gut mit Computern aus, sprechen fließend Englisch und möchten von zu Hause aus arbeiten.",
       "loesung": "g",
       "erklaerung": "Der IT-Support verlangt Deutsch und Englisch und ist komplett im Homeoffice möglich."
      },
      {
       "situation": "Sie sind 34 Jahre alt, haben einen Hauptschulabschluss und möchten noch eine Ausbildung im Handwerk anfangen.",
       "loesung": "j",
       "erklaerung": "Der Malerbetrieb bietet einen Ausbildungsplatz, das Alter spielt keine Rolle."
      },
      {
       "situation": "Sie sind Lkw-Fahrer und möchten nicht mehr tagelang unterwegs sein, sondern abends bei Ihrer Familie.",
       "loesung": "k",
       "erklaerung": "Die Spedition fährt nur im Nahverkehr – jeden Abend ist man zu Hause."
      },
      {
       "situation": "Sie möchten im Sommer in einem Hotel arbeiten. Dort brauchen Sie auch eine Unterkunft.",
       "loesung": "h",
       "erklaerung": "Das Hotel bietet eine Saisonstelle und ein Zimmer im Personalhaus."
      },
      {
       "situation": "Sie sind Koch und suchen eine neue Stelle. Abends und am Wochenende betreuen Sie Ihre Kinder, deshalb können Sie nur tagsüber arbeiten.",
       "loesung": "x",
       "erklaerung": "Das Restaurant Olivo sucht einen Koch nur für abends und am Wochenende. Eine andere Kochstelle gibt es nicht."
      },
      {
       "situation": "Sie möchten als Pflegehelfer in der ambulanten Pflege arbeiten. Einen Führerschein haben Sie nicht.",
       "loesung": "x",
       "erklaerung": "Der Pflegedienst e verlangt einen Führerschein, Anzeige f sucht eine ausgebildete Fachkraft."
      },
      {
       "situation": "Sie haben schon im Supermarkt an der Kasse gearbeitet und suchen eine Teilzeitstelle. Früh aufstehen ist für Sie kein Problem.",
       "loesung": "a",
       "erklaerung": "Die Bäckerei sucht Verkäufer in Teilzeit für die Frühschicht, Erfahrung im Verkauf ist erwünscht."
      }
     ]
    },
    {
     "id": "b1bbt3s2",
     "anzeigen": [
      {
       "b": "a",
       "quelle": "Bildungszentrum Westpark",
       "zeilen": [
        "Staplerschein in drei Tagen",
        "Theorie und Praxis, mit Prüfung",
        "Förderung durch die Agentur für Arbeit möglich"
       ]
      },
      {
       "b": "b",
       "quelle": "Volkshochschule Kellberg",
       "zeilen": [
        "Deutsch im Beruf – Abendkurs",
        "Dienstag und Donnerstag 18–20.15 Uhr",
        "Mit Abschlussprüfung"
       ]
      },
      {
       "b": "c",
       "quelle": "Sprachinstitut Wortwerk",
       "zeilen": [
        "Berufsbezogener Deutschkurs am Vormittag",
        "Montag bis Freitag 8.30–12.45 Uhr, sechs Monate",
        "Kostenlos für Arbeitslose mit Berechtigung"
       ]
      },
      {
       "b": "d",
       "quelle": "Akademie Pflegeplus",
       "zeilen": [
        "Weiterbildung zur Praxisanleitung in der Pflege",
        "Berufsbegleitend, ein Wochenende pro Monat",
        "Voraussetzung: abgeschlossene Pflegeausbildung und ein Jahr Berufserfahrung"
       ]
      },
      {
       "b": "e",
       "quelle": "Online-Schule Bürofit",
       "zeilen": [
        "Moderne Büroorganisation",
        "Video-Lektionen, jederzeit abrufbar",
        "Zertifikat nach einem Online-Test"
       ]
      },
      {
       "b": "f",
       "quelle": "Bildungsstätte Meisterhaus",
       "zeilen": [
        "Vorbereitung auf die Meisterprüfung im Elektrohandwerk",
        "Vollzeit, neun Monate",
        "Finanzielle Förderung möglich"
       ]
      },
      {
       "b": "g",
       "quelle": "Sicherheitsschule Achtsam",
       "zeilen": [
        "Ersthelfer-Ausbildung für Betriebe",
        "Ein Tag, 9–16.30 Uhr",
        "Die Kosten übernimmt die Berufsgenossenschaft"
       ]
      },
      {
       "b": "h",
       "quelle": "Trainerbüro Klartext",
       "zeilen": [
        "Souverän am Telefon – Kundengespräche führen",
        "Halbtagesseminar, auch als Schulung in Ihrer Firma",
        "Für Teams ab sechs Personen"
       ]
      },
      {
       "b": "i",
       "quelle": "Computerschule Pixel",
       "zeilen": [
        "Excel für Fortgeschrittene",
        "Samstag 9–16 Uhr",
        "Gute Vorkenntnisse erforderlich"
       ]
      },
      {
       "b": "j",
       "quelle": "Computerschule Pixel",
       "zeilen": [
        "Erste Schritte am PC",
        "Für Menschen ohne Computererfahrung",
        "Kleine Gruppen, viel Zeit für Fragen"
       ]
      },
      {
       "b": "k",
       "quelle": "Gastro-Akademie Löffel",
       "zeilen": [
        "Hygieneschulung für Lebensmittelbetriebe",
        "Online in zwei Stunden",
        "Bescheinigung sofort zum Ausdrucken"
       ]
      },
      {
       "b": "l",
       "quelle": "Führungskolleg Weitblick",
       "zeilen": [
        "Neu als Teamleiter – was nun?",
        "Zwei Tage im Seehotel, mit Übernachtung",
        "Für Mitarbeiter mit erster Führungsverantwortung"
       ]
      }
     ],
     "aufgaben": [
      {
       "situation": "Sie arbeiten tagsüber in einer Reinigungsfirma und möchten Ihr Deutsch für den Beruf verbessern.",
       "loesung": "b",
       "erklaerung": "Der VHS-Kurs findet abends statt. Kurs c ist am Vormittag, also während Ihrer Arbeitszeit."
      },
      {
       "situation": "Sie sind seit Kurzem Schichtleiter im Lager und wissen nicht genau, wie man ein Team gut führt.",
       "loesung": "l",
       "erklaerung": "Das Seminar ist für Mitarbeiter, die zum ersten Mal Führungsverantwortung haben."
      },
      {
       "situation": "Ihre Chefin möchte, dass das ganze Kundenservice-Team mit acht Personen in der Firma ein Telefontraining bekommt.",
       "loesung": "h",
       "erklaerung": "Das Telefonseminar gibt es auch als Schulung im Betrieb, für Teams ab sechs Personen."
      },
      {
       "situation": "Sie eröffnen nächste Woche ein kleines Café und brauchen schnell einen Nachweis über eine Hygieneschulung.",
       "loesung": "k",
       "erklaerung": "Die Hygieneschulung dauert online nur zwei Stunden, die Bescheinigung gibt es sofort."
      },
      {
       "situation": "Sie sind Elektriker mit Gesellenbrief und möchten später einen eigenen Betrieb führen.",
       "loesung": "f",
       "erklaerung": "Dafür braucht man die Meisterprüfung – die Bildungsstätte bereitet darauf vor."
      },
      {
       "situation": "Ihr Betrieb braucht noch zwei Ersthelfer. Der Chef möchte dafür nichts bezahlen.",
       "loesung": "g",
       "erklaerung": "Die Ersthelfer-Ausbildung ist für Betriebe, die Kosten trägt die Berufsgenossenschaft."
      },
      {
       "situation": "Sie sind arbeitslos und möchten im Lager arbeiten. Dafür brauchen Sie einen Staplerschein, den Sie nicht selbst bezahlen können.",
       "loesung": "a",
       "erklaerung": "Der Staplerschein kann von der Agentur für Arbeit gefördert werden."
      },
      {
       "situation": "Sie arbeiten als Pflegehelfer ohne Ausbildung und möchten neue Kollegen bei der Arbeit anleiten.",
       "loesung": "x",
       "erklaerung": "Für die Praxisanleitung (d) braucht man eine abgeschlossene Pflegeausbildung. Ein anderes Angebot gibt es nicht."
      },
      {
       "situation": "Sie haben noch nie mit einem Computer gearbeitet. In Ihrer neuen Stelle sollen Sie Lieferscheine am PC schreiben.",
       "loesung": "j",
       "erklaerung": "Der Kurs „Erste Schritte am PC\" ist für Menschen ohne Computererfahrung. Kurs i verlangt Vorkenntnisse."
      },
      {
       "situation": "Sie möchten Ihr Deutsch für die Arbeit verbessern. Wegen Ihres Schichtdienstes können Sie aber nie zu festen Zeiten lernen.",
       "loesung": "x",
       "erklaerung": "Beide Deutschkurs-Anzeigen haben feste Zeiten. Das Online-Angebot e ist kein Deutschkurs."
      }
     ]
    }
   ]
  },
  {
   "nr": 4,
   "art": "textwahl",
   "name": "Sprachbausteine: Grammatik",
   "kurz": "Ein Informationstext, zehn Lücken a/b/c",
   "was": "Ein Informationstext, zum Beispiel für neue Mitarbeiter, mit zehn Lücken. Für jede Lücke drei Möglichkeiten.",
   "tipp": "Lies den Satz bis zum Ende — Verbposition und Kasus entscheiden.",
   "zeichen": "🧩",
   "farbe": "lila",
   "punkte": 10,
   "runden": [
    {
     "id": "b1bbsb1s1",
     "text": {
      "sorte": "email",
      "quelle": "E-Mail",
      "titel": "Willkommen im Lager: Ihre erste Woche",
      "zeilen": [
       "Liebe neue Mitarbeiter,",
       "herzlich willkommen bei Logistik Brandt! Wir freuen uns, __(1)__ Sie ab Montag unser Team verstärken. In dieser E-Mail finden Sie die wichtigsten Informationen, __(2)__ Sie für Ihre erste Woche brauchen.",
       "Am ersten Tag melden Sie sich bitte um 7 Uhr am Empfang. Dort holt Sie Herr Lehmann ab, __(3)__ für die Einarbeitung zuständig ist. Er zeigt Ihnen zuerst das Gelände und erklärt Ihnen, wo Sie Ihre Arbeitskleidung __(4)__. Bitte bringen Sie Ihre Steuer-ID und Ihre Bankverbindung mit, __(5)__ wir Ihr Gehalt pünktlich überweisen können.",
       "Sicherheitsschuhe sind im Lager Pflicht. Sie bekommen sie kostenlos von uns, Sie brauchen sie also nicht selbst __(6)__ kaufen. Ihre Pause machen Sie bitte nur im Pausenraum oder draußen im Hof, __(7)__ im Lager selbst sind Essen und Trinken verboten.",
       "In der ersten Woche arbeiten Sie noch nicht allein, __(8)__ immer zusammen mit einem erfahrenen Kollegen. Am Freitag findet ein kurzes Gespräch statt, in __(9)__ Sie Fragen stellen und von Ihren ersten Eindrücken erzählen können.",
       "Wir wünschen Ihnen einen guten Start und sind schon gespannt __(10)__ die Zusammenarbeit.",
       "Viele Grüße",
       "Sandra Kühn, Personalabteilung"
      ]
     },
     "aufgaben": [
      {
       "frage": "Was passt in Lücke 1?",
       "luecke": 1,
       "opt": [
        "dass",
        "damit",
        "ob"
       ],
       "loesung": 0,
       "fest": true,
       "erklaerung": "Nach „sich freuen\" folgt ein Inhaltssatz mit „dass\"; „damit\" drückt ein Ziel aus, „ob\" eine offene Frage."
      },
      {
       "frage": "Was passt in Lücke 2?",
       "luecke": 2,
       "opt": [
        "die",
        "denen",
        "deren"
       ],
       "loesung": 0,
       "fest": true,
       "erklaerung": "„Informationen brauchen\": Relativpronomen im Akkusativ Plural ist „die\"."
      },
      {
       "frage": "Was passt in Lücke 3?",
       "luecke": 3,
       "opt": [
        "der",
        "den",
        "dem"
       ],
       "loesung": 0,
       "fest": true,
       "erklaerung": "Herr Lehmann ist Subjekt im Relativsatz („… ist zuständig\"), also Nominativ: „der\"."
      },
      {
       "frage": "Was passt in Lücke 4?",
       "luecke": 4,
       "opt": [
        "bekommen",
        "bekommt",
        "bekam"
       ],
       "loesung": 0,
       "fest": true,
       "erklaerung": "Subjekt ist „Sie\", Präsens: „Sie bekommen\"."
      },
      {
       "frage": "Was passt in Lücke 5?",
       "luecke": 5,
       "opt": [
        "damit",
        "um",
        "deshalb"
       ],
       "loesung": 0,
       "fest": true,
       "erklaerung": "Ziel mit anderem Subjekt („wir\") und Verb am Ende: „damit\". „um … zu\" braucht dasselbe Subjekt."
      },
      {
       "frage": "Was passt in Lücke 6?",
       "luecke": 6,
       "opt": [
        "zu",
        "um",
        "für"
       ],
       "loesung": 0,
       "fest": true,
       "erklaerung": "„nicht brauchen\" + „zu\" + Infinitiv bedeutet „nicht müssen\"."
      },
      {
       "frage": "Was passt in Lücke 7?",
       "luecke": 7,
       "opt": [
        "denn",
        "weil",
        "deshalb"
       ],
       "loesung": 0,
       "fest": true,
       "erklaerung": "Nach der Lücke folgt ein Hauptsatz mit Verb an Position 2 („im Lager selbst sind\") – das passt nur zu „denn\"."
      },
      {
       "frage": "Was passt in Lücke 8?",
       "luecke": 8,
       "opt": [
        "sondern",
        "aber",
        "oder"
       ],
       "loesung": 0,
       "fest": true,
       "erklaerung": "Nach einer Verneinung („nicht allein\") folgt die Korrektur mit „sondern\"."
      },
      {
       "frage": "Was passt in Lücke 9?",
       "luecke": 9,
       "opt": [
        "dem",
        "den",
        "das"
       ],
       "loesung": 0,
       "fest": true,
       "erklaerung": "„das Gespräch\" ist neutral; „in\" auf die Frage „wo?\" verlangt den Dativ: „in dem\"."
      },
      {
       "frage": "Was passt in Lücke 10?",
       "luecke": 10,
       "opt": [
        "auf",
        "über",
        "für"
       ],
       "loesung": 0,
       "fest": true,
       "erklaerung": "Feste Verbindung: „gespannt sein auf etwas\"."
      }
     ]
    },
    {
     "id": "b1bbsb1s2",
     "text": {
      "sorte": "brief",
      "quelle": "Brief",
      "titel": "Hausmitteilung: Neues in der Kantine",
      "zeilen": [
       "Liebe Mitarbeiter,",
       "ab dem 1. Februar __(1)__ unsere Kantine von einem neuen Anbieter betrieben. Das Essen wird jeden Tag frisch gekocht, und es gibt immer mindestens ein Gericht ohne Fleisch. Die Preise bleiben gleich, __(2)__ die Portionen etwas größer werden.",
       "Neu ist auch das Bezahlsystem: Bezahlt wird nur noch mit dem Mitarbeiterausweis, __(3)__ Sie vorher am Automaten im Erdgeschoss aufladen müssen. Bargeld wird an der Kasse nicht mehr __(4)__. Wer seinen Ausweis vergessen hat, kann sich an der Kasse eine Tageskarte geben __(5)__.",
       "Damit es in der Mittagszeit nicht so voll wird, bitten wir alle Abteilungen, __(6)__ an die neuen Essenszeiten zu halten: Die Abteilungen im ersten Stock essen von 11:30 bis 12:15 Uhr, alle anderen ab 12:15 Uhr. Wenn Sie wegen eines Termins nicht zu Ihrer Zeit essen können, ist das natürlich kein Problem. __(7)__ Sie bitte nur kurz an der Kasse Bescheid.",
       "Wir würden uns freuen, __(8)__ Sie uns nach den ersten Wochen Ihre Meinung sagen. Dafür steht ab Februar neben dem Ausgang ein Kasten, in den Sie Ihre Vorschläge __(9)__ können. Wir hoffen, __(10)__ Ihnen das neue Angebot schmeckt.",
       "Mit freundlichen Grüßen",
       "Ihre Geschäftsleitung"
      ]
     },
     "aufgaben": [
      {
       "frage": "Was passt in Lücke 1?",
       "luecke": 1,
       "opt": [
        "wird",
        "werden",
        "wurde"
       ],
       "loesung": 0,
       "fest": true,
       "erklaerung": "Passiv mit Singular-Subjekt „unsere Kantine\"; die Änderung liegt in der Zukunft, also Präsens: „wird\"."
      },
      {
       "frage": "Was passt in Lücke 2?",
       "luecke": 2,
       "opt": [
        "obwohl",
        "trotzdem",
        "weil"
       ],
       "loesung": 0,
       "fest": true,
       "erklaerung": "Gegensatz im Nebensatz mit Verb am Ende: „obwohl\". Ein Grund („weil\") ergibt hier keinen Sinn."
      },
      {
       "frage": "Was passt in Lücke 3?",
       "luecke": 3,
       "opt": [
        "den",
        "dem",
        "der"
       ],
       "loesung": 0,
       "fest": true,
       "erklaerung": "Bezug auf „der Mitarbeiterausweis\", Objekt von „aufladen\": Akkusativ „den\"."
      },
      {
       "frage": "Was passt in Lücke 4?",
       "luecke": 4,
       "opt": [
        "angenommen",
        "annehmen",
        "angenehmen"
       ],
       "loesung": 0,
       "fest": true,
       "erklaerung": "Passiv („wird\") braucht das Partizip II: „angenommen\". „angenehm\" ist ein Adjektiv."
      },
      {
       "frage": "Was passt in Lücke 5?",
       "luecke": 5,
       "opt": [
        "lassen",
        "zu lassen",
        "gelassen"
       ],
       "loesung": 0,
       "fest": true,
       "erklaerung": "Nach dem Modalverb „kann\" steht der Infinitiv ohne „zu\": „geben lassen\"."
      },
      {
       "frage": "Was passt in Lücke 6?",
       "luecke": 6,
       "opt": [
        "sich",
        "ihnen",
        "uns"
       ],
       "loesung": 0,
       "fest": true,
       "erklaerung": "Reflexives Verb „sich halten an\"; bezogen auf „alle Abteilungen\" steht „sich\"."
      },
      {
       "frage": "Was passt in Lücke 7?",
       "luecke": 7,
       "opt": [
        "Geben",
        "Sagen",
        "Machen"
       ],
       "loesung": 0,
       "fest": true,
       "erklaerung": "Feste Wendung: „Bescheid geben\"."
      },
      {
       "frage": "Was passt in Lücke 8?",
       "luecke": 8,
       "opt": [
        "wenn",
        "ob",
        "als"
       ],
       "loesung": 0,
       "fest": true,
       "erklaerung": "„Wir würden uns freuen, wenn …\" ist eine höfliche Bitte; „ob\" leitet nur indirekte Fragen ein."
      },
      {
       "frage": "Was passt in Lücke 9?",
       "luecke": 9,
       "opt": [
        "werfen",
        "geworfen",
        "wirft"
       ],
       "loesung": 0,
       "fest": true,
       "erklaerung": "Nach dem Modalverb „können\" am Satzende steht der Infinitiv: „werfen\"."
      },
      {
       "frage": "Was passt in Lücke 10?",
       "luecke": 10,
       "opt": [
        "dass",
        "damit",
        "was"
       ],
       "loesung": 0,
       "fest": true,
       "erklaerung": "„hoffen, dass …\" leitet einen Inhaltssatz ein."
      }
     ]
    },
    {
     "id": "b1bbsb1s3",
     "text": {
      "sorte": "email",
      "quelle": "E-Mail",
      "titel": "Arbeitsschutz: Unterweisung in der Werkstatt",
      "zeilen": [
       "Liebe Kollegen,",
       "wie jedes Jahr findet im März die Sicherheitsunterweisung für alle Mitarbeiter der Werkstatt statt. Die Teilnahme ist Pflicht, __(1)__ Sie schon lange bei uns arbeiten. Die Unterweisung dauert etwa zwei Stunden und wird während der Arbeitszeit __(2)__. Bitte tragen Sie sich bis Ende Februar in eine der Listen ein, __(3)__ am Schwarzen Brett hängen.",
       "In der Unterweisung erfahren Sie unter anderem, wie Sie mit gefährlichen Stoffen richtig __(4)__ und was im Notfall zu tun ist. Außerdem zeigen wir Ihnen, wo sich die Feuerlöscher und der Erste-Hilfe-Kasten __(5)__.",
       "Wir möchten Sie schon heute noch einmal __(6)__ erinnern, dass an allen Maschinen eine Schutzbrille getragen werden muss. Leider haben wir in den letzten Wochen mehrmals beobachtet, __(7)__ an der Schleifmaschine ohne Brille gearbeitet wurde. Das ist sehr gefährlich, __(8)__ schon kleine Metallteile können das Auge schwer verletzen. Wenn Ihre Brille kaputt ist, bekommen Sie bei Herrn Schulte sofort eine neue. Jeden Unfall müssen Sie sofort Ihrem Vorgesetzten __(9)__, selbst bei kleinen Verletzungen.",
       "Denken Sie daran: Je besser wir alle aufpassen, __(10)__ weniger Unfälle passieren.",
       "Viele Grüße",
       "Dennis Albrecht, Fachkraft für Arbeitssicherheit"
      ]
     },
     "aufgaben": [
      {
       "frage": "Was passt in Lücke 1?",
       "luecke": 1,
       "opt": [
        "auch wenn",
        "weil",
        "damit"
       ],
       "loesung": 0,
       "fest": true,
       "erklaerung": "Einschränkung: Die Pflicht gilt trotzdem – „auch wenn\" Sie schon lange hier arbeiten."
      },
      {
       "frage": "Was passt in Lücke 2?",
       "luecke": 2,
       "opt": [
        "durchgeführt",
        "durchführen",
        "durchzuführen"
       ],
       "loesung": 0,
       "fest": true,
       "erklaerung": "Passiv mit „wird\" braucht das Partizip II: „durchgeführt\"."
      },
      {
       "frage": "Was passt in Lücke 3?",
       "luecke": 3,
       "opt": [
        "die",
        "der",
        "denen"
       ],
       "loesung": 0,
       "fest": true,
       "erklaerung": "Bezug auf „Listen\" (Plural), Subjekt im Relativsatz: Nominativ „die\"."
      },
      {
       "frage": "Was passt in Lücke 4?",
       "luecke": 4,
       "opt": [
        "umgehen",
        "umgeht",
        "umzugehen"
       ],
       "loesung": 0,
       "fest": true,
       "erklaerung": "Subjekt ist „Sie\": „wie Sie … umgehen\". „zu\" + Infinitiv passt nicht in einen Nebensatz mit Subjekt."
      },
      {
       "frage": "Was passt in Lücke 5?",
       "luecke": 5,
       "opt": [
        "befinden",
        "befindet",
        "befanden"
       ],
       "loesung": 0,
       "fest": true,
       "erklaerung": "Zwei Subjekte („die Feuerlöscher und der Kasten\") verlangen den Plural im Präsens: „befinden\"."
      },
      {
       "frage": "Was passt in Lücke 6?",
       "luecke": 6,
       "opt": [
        "daran",
        "darauf",
        "damit"
       ],
       "loesung": 0,
       "fest": true,
       "erklaerung": "„jemanden an etwas erinnern\" – deshalb „daran erinnern, dass …\"."
      },
      {
       "frage": "Was passt in Lücke 7?",
       "luecke": 7,
       "opt": [
        "dass",
        "ob",
        "wenn"
       ],
       "loesung": 0,
       "fest": true,
       "erklaerung": "„beobachten, dass …\" gibt eine Tatsache wieder; „ob\" wäre eine offene Frage."
      },
      {
       "frage": "Was passt in Lücke 8?",
       "luecke": 8,
       "opt": [
        "denn",
        "obwohl",
        "sondern"
       ],
       "loesung": 0,
       "fest": true,
       "erklaerung": "Begründung im Hauptsatz (Verb an Position 2): „denn\". „sondern\" braucht eine Verneinung davor."
      },
      {
       "frage": "Was passt in Lücke 9?",
       "luecke": 9,
       "opt": [
        "melden",
        "gemeldet",
        "meldet"
       ],
       "loesung": 0,
       "fest": true,
       "erklaerung": "Nach dem Modalverb „müssen\" steht der Infinitiv: „melden\"."
      },
      {
       "frage": "Was passt in Lücke 10?",
       "luecke": 10,
       "opt": [
        "desto",
        "als",
        "so"
       ],
       "loesung": 0,
       "fest": true,
       "erklaerung": "Feste Verbindung: „je … desto\" + Komparativ."
      }
     ]
    }
   ]
  },
  {
   "nr": 5,
   "art": "textwahl",
   "name": "Sprachbausteine: Wortschatz",
   "kurz": "Ein Geschäftsbrief, zehn Lücken, fünfzehn Wörter",
   "was": "Ein Bewerbungsschreiben oder Geschäftsbrief mit zehn Lücken und fünfzehn Wörtern. Jedes Wort passt höchstens einmal.",
   "tipp": "Briefwendungen gehören fest zusammen: „Bezug nehmen auf\", „zur Verfügung stehen\", „in Anspruch nehmen\".",
   "zeichen": "🔤",
   "farbe": "turq",
   "punkte": 10,
   "runden": [
    {
     "id": "b1bbsb2s1",
     "text": {
      "sorte": "brief",
      "quelle": "Brief",
      "titel": "Bewerbung als Fachkraft für Lagerlogistik",
      "zeilen": [
       "Sehr geehrte Frau Krüger,",
       "mit großem Interesse habe ich Ihre __(1)__ auf der Internetseite der Arbeitsagentur gelesen. Hiermit __(2)__ ich mich um die Stelle als Fachkraft für Lagerlogistik.",
       "Ich bin 32 Jahre alt und habe in Polen eine Ausbildung als Kaufmann __(3)__. Seit vier Jahren lebe ich in Deutschland und arbeite zurzeit bei einer Spedition in Hannover. Dort bin ich __(4)__ die Annahme und Kontrolle von Waren zuständig. Außerdem habe ich viel __(5)__ mit modernen Lagerprogrammen. Einen gültigen Staplerschein __(6)__ ich ebenfalls.",
       "Ich arbeite gern im Team und bin auch __(7)__, im Schichtdienst zu arbeiten. Meine Deutschkenntnisse habe ich in den letzten zwei Jahren in einem Berufssprachkurs deutlich __(8)__.",
       "Über eine Einladung zu einem persönlichen __(9)__ würde ich mich sehr freuen. Ich könnte __(10)__ dem 1. März bei Ihnen anfangen.",
       "Mit freundlichen Grüßen",
       "Piotr Nowak"
      ]
     },
     "aufgaben": [
      {
       "frage": "Welches Wort passt in Lücke 1?",
       "luecke": 1,
       "opt": [
        "Anzeige",
        "bewerbe",
        "beworben",
        "abgeschlossen",
        "für",
        "seit",
        "Erfahrung",
        "erfahren",
        "besitze",
        "besitzt",
        "bereit",
        "verbessert",
        "Gespräch",
        "Unterhaltung",
        "ab"
       ],
       "loesung": 0,
       "fest": true,
       "erklaerung": "Feste Wendungen: „sich um eine Stelle bewerben\", „zuständig sein für\", „bereit sein, etwas zu tun\". „Unterhaltung\" ist feminin und passt nicht zu „einem persönlichen\"; „seit\" passt nicht zu einem Beginn in der Zukunft."
      },
      {
       "frage": "Welches Wort passt in Lücke 2?",
       "luecke": 2,
       "opt": [
        "Anzeige",
        "bewerbe",
        "beworben",
        "abgeschlossen",
        "für",
        "seit",
        "Erfahrung",
        "erfahren",
        "besitze",
        "besitzt",
        "bereit",
        "verbessert",
        "Gespräch",
        "Unterhaltung",
        "ab"
       ],
       "loesung": 1,
       "fest": true,
       "erklaerung": "Richtig ist „bewerbe\". Jedes Wort passt nur einmal."
      },
      {
       "frage": "Welches Wort passt in Lücke 3?",
       "luecke": 3,
       "opt": [
        "Anzeige",
        "bewerbe",
        "beworben",
        "abgeschlossen",
        "für",
        "seit",
        "Erfahrung",
        "erfahren",
        "besitze",
        "besitzt",
        "bereit",
        "verbessert",
        "Gespräch",
        "Unterhaltung",
        "ab"
       ],
       "loesung": 3,
       "fest": true,
       "erklaerung": "Richtig ist „abgeschlossen\". Jedes Wort passt nur einmal."
      },
      {
       "frage": "Welches Wort passt in Lücke 4?",
       "luecke": 4,
       "opt": [
        "Anzeige",
        "bewerbe",
        "beworben",
        "abgeschlossen",
        "für",
        "seit",
        "Erfahrung",
        "erfahren",
        "besitze",
        "besitzt",
        "bereit",
        "verbessert",
        "Gespräch",
        "Unterhaltung",
        "ab"
       ],
       "loesung": 4,
       "fest": true,
       "erklaerung": "Richtig ist „für\". Jedes Wort passt nur einmal."
      },
      {
       "frage": "Welches Wort passt in Lücke 5?",
       "luecke": 5,
       "opt": [
        "Anzeige",
        "bewerbe",
        "beworben",
        "abgeschlossen",
        "für",
        "seit",
        "Erfahrung",
        "erfahren",
        "besitze",
        "besitzt",
        "bereit",
        "verbessert",
        "Gespräch",
        "Unterhaltung",
        "ab"
       ],
       "loesung": 6,
       "fest": true,
       "erklaerung": "Richtig ist „Erfahrung\". Jedes Wort passt nur einmal."
      },
      {
       "frage": "Welches Wort passt in Lücke 6?",
       "luecke": 6,
       "opt": [
        "Anzeige",
        "bewerbe",
        "beworben",
        "abgeschlossen",
        "für",
        "seit",
        "Erfahrung",
        "erfahren",
        "besitze",
        "besitzt",
        "bereit",
        "verbessert",
        "Gespräch",
        "Unterhaltung",
        "ab"
       ],
       "loesung": 8,
       "fest": true,
       "erklaerung": "Richtig ist „besitze\". Jedes Wort passt nur einmal."
      },
      {
       "frage": "Welches Wort passt in Lücke 7?",
       "luecke": 7,
       "opt": [
        "Anzeige",
        "bewerbe",
        "beworben",
        "abgeschlossen",
        "für",
        "seit",
        "Erfahrung",
        "erfahren",
        "besitze",
        "besitzt",
        "bereit",
        "verbessert",
        "Gespräch",
        "Unterhaltung",
        "ab"
       ],
       "loesung": 10,
       "fest": true,
       "erklaerung": "Richtig ist „bereit\". Jedes Wort passt nur einmal."
      },
      {
       "frage": "Welches Wort passt in Lücke 8?",
       "luecke": 8,
       "opt": [
        "Anzeige",
        "bewerbe",
        "beworben",
        "abgeschlossen",
        "für",
        "seit",
        "Erfahrung",
        "erfahren",
        "besitze",
        "besitzt",
        "bereit",
        "verbessert",
        "Gespräch",
        "Unterhaltung",
        "ab"
       ],
       "loesung": 11,
       "fest": true,
       "erklaerung": "Richtig ist „verbessert\". Jedes Wort passt nur einmal."
      },
      {
       "frage": "Welches Wort passt in Lücke 9?",
       "luecke": 9,
       "opt": [
        "Anzeige",
        "bewerbe",
        "beworben",
        "abgeschlossen",
        "für",
        "seit",
        "Erfahrung",
        "erfahren",
        "besitze",
        "besitzt",
        "bereit",
        "verbessert",
        "Gespräch",
        "Unterhaltung",
        "ab"
       ],
       "loesung": 12,
       "fest": true,
       "erklaerung": "Richtig ist „Gespräch\". Jedes Wort passt nur einmal."
      },
      {
       "frage": "Welches Wort passt in Lücke 10?",
       "luecke": 10,
       "opt": [
        "Anzeige",
        "bewerbe",
        "beworben",
        "abgeschlossen",
        "für",
        "seit",
        "Erfahrung",
        "erfahren",
        "besitze",
        "besitzt",
        "bereit",
        "verbessert",
        "Gespräch",
        "Unterhaltung",
        "ab"
       ],
       "loesung": 14,
       "fest": true,
       "erklaerung": "Richtig ist „ab\". Jedes Wort passt nur einmal."
      }
     ]
    },
    {
     "id": "b1bbsb2s2",
     "text": {
      "sorte": "brief",
      "quelle": "Brief",
      "titel": "Anfrage: Arbeitskleidung für die Küche",
      "zeilen": [
       "Sehr geehrte Damen und Herren,",
       "wir sind ein Restaurant mit 25 Mitarbeitern in Freiburg und __(1)__ zurzeit einen neuen Lieferanten für Arbeitskleidung. Auf einer Fachmesse sind wir __(2)__ Ihre Firma aufmerksam geworden.",
       "Wir interessieren uns besonders __(3)__ Kochjacken und Schürzen. Könnten Sie uns bitte ein __(4)__ für 30 Kochjacken und 40 Schürzen schicken? Die Kleidung sollte bei 60 Grad __(5)__ sein. Außerdem möchten wir wissen, __(6)__ Sie unser Logo auf die Jacken drucken können. Bitte teilen Sie uns auch mit, wie lange die __(7)__ dauert und welche Kosten für den Versand entstehen.",
       "Wenn wir mit der Qualität __(8)__ sind, möchten wir Sie gern als festen Partner gewinnen. Die Bestellung würden wir gern noch bis Ende des Monats __(9)__.",
       "Für Ihre Bemühungen danken wir Ihnen im __(10)__.",
       "Mit freundlichen Grüßen",
       "Katharina Vogel",
       "Restaurant Zum Lindenhof"
      ]
     },
     "aufgaben": [
      {
       "frage": "Welches Wort passt in Lücke 1?",
       "luecke": 1,
       "opt": [
        "suchen",
        "sucht",
        "auf",
        "an",
        "für",
        "Angebot",
        "Rechnung",
        "waschbar",
        "ob",
        "dass",
        "Lieferung",
        "zufrieden",
        "zufällig",
        "aufgeben",
        "Voraus"
       ],
       "loesung": 0,
       "fest": true,
       "erklaerung": "Feste Verbindungen: „auf etwas aufmerksam werden\", „sich interessieren für\", „eine Bestellung aufgeben\", „im Voraus danken\". „Rechnung\" ist feminin und passt nicht zu „ein\"; nach „wissen\" steht bei einer offenen Frage „ob\"."
      },
      {
       "frage": "Welches Wort passt in Lücke 2?",
       "luecke": 2,
       "opt": [
        "suchen",
        "sucht",
        "auf",
        "an",
        "für",
        "Angebot",
        "Rechnung",
        "waschbar",
        "ob",
        "dass",
        "Lieferung",
        "zufrieden",
        "zufällig",
        "aufgeben",
        "Voraus"
       ],
       "loesung": 2,
       "fest": true,
       "erklaerung": "Richtig ist „auf\". Jedes Wort passt nur einmal."
      },
      {
       "frage": "Welches Wort passt in Lücke 3?",
       "luecke": 3,
       "opt": [
        "suchen",
        "sucht",
        "auf",
        "an",
        "für",
        "Angebot",
        "Rechnung",
        "waschbar",
        "ob",
        "dass",
        "Lieferung",
        "zufrieden",
        "zufällig",
        "aufgeben",
        "Voraus"
       ],
       "loesung": 4,
       "fest": true,
       "erklaerung": "Richtig ist „für\". Jedes Wort passt nur einmal."
      },
      {
       "frage": "Welches Wort passt in Lücke 4?",
       "luecke": 4,
       "opt": [
        "suchen",
        "sucht",
        "auf",
        "an",
        "für",
        "Angebot",
        "Rechnung",
        "waschbar",
        "ob",
        "dass",
        "Lieferung",
        "zufrieden",
        "zufällig",
        "aufgeben",
        "Voraus"
       ],
       "loesung": 5,
       "fest": true,
       "erklaerung": "Richtig ist „Angebot\". Jedes Wort passt nur einmal."
      },
      {
       "frage": "Welches Wort passt in Lücke 5?",
       "luecke": 5,
       "opt": [
        "suchen",
        "sucht",
        "auf",
        "an",
        "für",
        "Angebot",
        "Rechnung",
        "waschbar",
        "ob",
        "dass",
        "Lieferung",
        "zufrieden",
        "zufällig",
        "aufgeben",
        "Voraus"
       ],
       "loesung": 7,
       "fest": true,
       "erklaerung": "Richtig ist „waschbar\". Jedes Wort passt nur einmal."
      },
      {
       "frage": "Welches Wort passt in Lücke 6?",
       "luecke": 6,
       "opt": [
        "suchen",
        "sucht",
        "auf",
        "an",
        "für",
        "Angebot",
        "Rechnung",
        "waschbar",
        "ob",
        "dass",
        "Lieferung",
        "zufrieden",
        "zufällig",
        "aufgeben",
        "Voraus"
       ],
       "loesung": 8,
       "fest": true,
       "erklaerung": "Richtig ist „ob\". Jedes Wort passt nur einmal."
      },
      {
       "frage": "Welches Wort passt in Lücke 7?",
       "luecke": 7,
       "opt": [
        "suchen",
        "sucht",
        "auf",
        "an",
        "für",
        "Angebot",
        "Rechnung",
        "waschbar",
        "ob",
        "dass",
        "Lieferung",
        "zufrieden",
        "zufällig",
        "aufgeben",
        "Voraus"
       ],
       "loesung": 10,
       "fest": true,
       "erklaerung": "Richtig ist „Lieferung\". Jedes Wort passt nur einmal."
      },
      {
       "frage": "Welches Wort passt in Lücke 8?",
       "luecke": 8,
       "opt": [
        "suchen",
        "sucht",
        "auf",
        "an",
        "für",
        "Angebot",
        "Rechnung",
        "waschbar",
        "ob",
        "dass",
        "Lieferung",
        "zufrieden",
        "zufällig",
        "aufgeben",
        "Voraus"
       ],
       "loesung": 11,
       "fest": true,
       "erklaerung": "Richtig ist „zufrieden\". Jedes Wort passt nur einmal."
      },
      {
       "frage": "Welches Wort passt in Lücke 9?",
       "luecke": 9,
       "opt": [
        "suchen",
        "sucht",
        "auf",
        "an",
        "für",
        "Angebot",
        "Rechnung",
        "waschbar",
        "ob",
        "dass",
        "Lieferung",
        "zufrieden",
        "zufällig",
        "aufgeben",
        "Voraus"
       ],
       "loesung": 13,
       "fest": true,
       "erklaerung": "Richtig ist „aufgeben\". Jedes Wort passt nur einmal."
      },
      {
       "frage": "Welches Wort passt in Lücke 10?",
       "luecke": 10,
       "opt": [
        "suchen",
        "sucht",
        "auf",
        "an",
        "für",
        "Angebot",
        "Rechnung",
        "waschbar",
        "ob",
        "dass",
        "Lieferung",
        "zufrieden",
        "zufällig",
        "aufgeben",
        "Voraus"
       ],
       "loesung": 14,
       "fest": true,
       "erklaerung": "Richtig ist „Voraus\". Jedes Wort passt nur einmal."
      }
     ]
    },
    {
     "id": "b1bbsb2s3",
     "text": {
      "sorte": "brief",
      "quelle": "Brief",
      "titel": "Reklamation: Fehler bei der Lieferung",
      "zeilen": [
       "Sehr geehrter Herr Brandt,",
       "am 14. Oktober haben wir bei Ihnen 200 Packungen Kopierpapier und 50 Druckerpatronen __(1)__. Die Lieferung ist gestern __(2)__ uns angekommen. Leider mussten wir __(3)__, dass zwei Kartons beschädigt waren. Das Papier darin ist nass geworden und kann nicht mehr __(4)__ werden. Außerdem __(5)__ zehn Druckerpatronen. Auf dem Lieferschein sind zwar 50 Stück aufgeführt, __(6)__ im Paket waren nur 40.",
       "Wir bitten Sie, die fehlenden Patronen und das beschädigte Papier so schnell wie __(7)__ zu ersetzen. Die nassen Kartons kann Ihr Fahrer bei der nächsten Lieferung wieder __(8)__. Bitte geben Sie uns kurz __(9)__, wann wir mit der Ersatzlieferung rechnen können.",
       "Wir hoffen, dass wir uns auch in __(10)__ auf Ihre zuverlässigen Lieferungen verlassen können.",
       "Mit freundlichen Grüßen",
       "Oliver Brückner",
       "Einkauf, Hausverwaltung Sonnenhof"
      ]
     },
     "aufgaben": [
      {
       "frage": "Welches Wort passt in Lücke 1?",
       "luecke": 1,
       "opt": [
        "bestellt",
        "gestellt",
        "bei",
        "nach",
        "feststellen",
        "benutzt",
        "fehlen",
        "fehlt",
        "aber",
        "sondern",
        "möglich",
        "mitnehmen",
        "Bescheid",
        "Zukunft",
        "zukünftig"
       ],
       "loesung": 0,
       "fest": true,
       "erklaerung": "„zehn Druckerpatronen\" ist Plural, deshalb „fehlen\". Feste Verbindungen: „zwar … aber\", „so schnell wie möglich\", „Bescheid geben\", „in Zukunft\". „sondern\" braucht eine Verneinung davor."
      },
      {
       "frage": "Welches Wort passt in Lücke 2?",
       "luecke": 2,
       "opt": [
        "bestellt",
        "gestellt",
        "bei",
        "nach",
        "feststellen",
        "benutzt",
        "fehlen",
        "fehlt",
        "aber",
        "sondern",
        "möglich",
        "mitnehmen",
        "Bescheid",
        "Zukunft",
        "zukünftig"
       ],
       "loesung": 2,
       "fest": true,
       "erklaerung": "Richtig ist „bei\". Jedes Wort passt nur einmal."
      },
      {
       "frage": "Welches Wort passt in Lücke 3?",
       "luecke": 3,
       "opt": [
        "bestellt",
        "gestellt",
        "bei",
        "nach",
        "feststellen",
        "benutzt",
        "fehlen",
        "fehlt",
        "aber",
        "sondern",
        "möglich",
        "mitnehmen",
        "Bescheid",
        "Zukunft",
        "zukünftig"
       ],
       "loesung": 4,
       "fest": true,
       "erklaerung": "Richtig ist „feststellen\". Jedes Wort passt nur einmal."
      },
      {
       "frage": "Welches Wort passt in Lücke 4?",
       "luecke": 4,
       "opt": [
        "bestellt",
        "gestellt",
        "bei",
        "nach",
        "feststellen",
        "benutzt",
        "fehlen",
        "fehlt",
        "aber",
        "sondern",
        "möglich",
        "mitnehmen",
        "Bescheid",
        "Zukunft",
        "zukünftig"
       ],
       "loesung": 5,
       "fest": true,
       "erklaerung": "Richtig ist „benutzt\". Jedes Wort passt nur einmal."
      },
      {
       "frage": "Welches Wort passt in Lücke 5?",
       "luecke": 5,
       "opt": [
        "bestellt",
        "gestellt",
        "bei",
        "nach",
        "feststellen",
        "benutzt",
        "fehlen",
        "fehlt",
        "aber",
        "sondern",
        "möglich",
        "mitnehmen",
        "Bescheid",
        "Zukunft",
        "zukünftig"
       ],
       "loesung": 6,
       "fest": true,
       "erklaerung": "Richtig ist „fehlen\". Jedes Wort passt nur einmal."
      },
      {
       "frage": "Welches Wort passt in Lücke 6?",
       "luecke": 6,
       "opt": [
        "bestellt",
        "gestellt",
        "bei",
        "nach",
        "feststellen",
        "benutzt",
        "fehlen",
        "fehlt",
        "aber",
        "sondern",
        "möglich",
        "mitnehmen",
        "Bescheid",
        "Zukunft",
        "zukünftig"
       ],
       "loesung": 8,
       "fest": true,
       "erklaerung": "Richtig ist „aber\". Jedes Wort passt nur einmal."
      },
      {
       "frage": "Welches Wort passt in Lücke 7?",
       "luecke": 7,
       "opt": [
        "bestellt",
        "gestellt",
        "bei",
        "nach",
        "feststellen",
        "benutzt",
        "fehlen",
        "fehlt",
        "aber",
        "sondern",
        "möglich",
        "mitnehmen",
        "Bescheid",
        "Zukunft",
        "zukünftig"
       ],
       "loesung": 10,
       "fest": true,
       "erklaerung": "Richtig ist „möglich\". Jedes Wort passt nur einmal."
      },
      {
       "frage": "Welches Wort passt in Lücke 8?",
       "luecke": 8,
       "opt": [
        "bestellt",
        "gestellt",
        "bei",
        "nach",
        "feststellen",
        "benutzt",
        "fehlen",
        "fehlt",
        "aber",
        "sondern",
        "möglich",
        "mitnehmen",
        "Bescheid",
        "Zukunft",
        "zukünftig"
       ],
       "loesung": 11,
       "fest": true,
       "erklaerung": "Richtig ist „mitnehmen\". Jedes Wort passt nur einmal."
      },
      {
       "frage": "Welches Wort passt in Lücke 9?",
       "luecke": 9,
       "opt": [
        "bestellt",
        "gestellt",
        "bei",
        "nach",
        "feststellen",
        "benutzt",
        "fehlen",
        "fehlt",
        "aber",
        "sondern",
        "möglich",
        "mitnehmen",
        "Bescheid",
        "Zukunft",
        "zukünftig"
       ],
       "loesung": 12,
       "fest": true,
       "erklaerung": "Richtig ist „Bescheid\". Jedes Wort passt nur einmal."
      },
      {
       "frage": "Welches Wort passt in Lücke 10?",
       "luecke": 10,
       "opt": [
        "bestellt",
        "gestellt",
        "bei",
        "nach",
        "feststellen",
        "benutzt",
        "fehlen",
        "fehlt",
        "aber",
        "sondern",
        "möglich",
        "mitnehmen",
        "Bescheid",
        "Zukunft",
        "zukünftig"
       ],
       "loesung": 13,
       "fest": true,
       "erklaerung": "Richtig ist „Zukunft\". Jedes Wort passt nur einmal."
      }
     ]
    }
   ]
  }
 ],
 "laeufe": [
  {
   "id": "tb1bll1",
   "titel": "Prüfungslauf 1",
   "minuten": 90,
   "teile": [
    {
     "nr": 1,
     "art": "textwahl",
     "aufgaben": [
      {
       "frage": "Welcher Betreff passt zu Text 1?",
       "opt": [
        "Restaurant bleibt im Januar drei Wochen geschlossen",
        "Großer Gästeansturm erwartet: Hilfe beim Frühstück gesucht",
        "Was bei Allergien auf der Speisekarte stehen muss",
        "Hotel bekommt einen neuen Wellnessbereich",
        "Trinkgeld wird künftig gerecht verteilt",
        "Gäste können ab sofort online bezahlen",
        "Neue Arbeitskleidung muss anprobiert werden",
        "Koch gewinnt regionalen Wettbewerb",
        "Abschiedsfeier für langjährige Kollegin",
        "Messe in der Stadt: Zimmerpreise steigen"
       ],
       "loesung": 1,
       "fest": true,
       "text": {
        "sorte": "email",
        "quelle": "E-Mail der Hotelleitung",
        "titel": "Text 1",
        "zeilen": [
         "Liebes Team, vom 12. bis 15. März findet in der Stadt die große Baumesse statt, und unser Hotel ist komplett ausgebucht. Morgens erwarten wir bis zu 180 Gäste gleichzeitig beim Frühstück.",
         "Wir suchen deshalb Kollegen aus Rezeption und Housekeeping, die an diesen Tagen von 6 bis 10 Uhr im Frühstücksraum aushelfen. Die Stunden werden als Überstunden gutgeschrieben. Bitte meldet euch bis Freitag bei Frau Petrović."
        ]
       },
       "stelle": "die an diesen Tagen von 6 bis 10 Uhr im Frühstücksraum aushelfen",
       "erklaerung": "Gesucht wird Hilfe beim Frühstück. Über Zimmerpreise steht nichts im Text."
      },
      {
       "frage": "Welcher Betreff passt zu Text 2?",
       "opt": [
        "Restaurant bleibt im Januar drei Wochen geschlossen",
        "Großer Gästeansturm erwartet: Hilfe beim Frühstück gesucht",
        "Was bei Allergien auf der Speisekarte stehen muss",
        "Hotel bekommt einen neuen Wellnessbereich",
        "Trinkgeld wird künftig gerecht verteilt",
        "Gäste können ab sofort online bezahlen",
        "Neue Arbeitskleidung muss anprobiert werden",
        "Koch gewinnt regionalen Wettbewerb",
        "Abschiedsfeier für langjährige Kollegin",
        "Messe in der Stadt: Zimmerpreise steigen"
       ],
       "loesung": 6,
       "fest": true,
       "text": {
        "sorte": "email",
        "quelle": "Mitteilung der Personalabteilung",
        "titel": "Text 2",
        "zeilen": [
         "Im Mai bekommen alle Mitarbeiter im Service und an der Rezeption neue Uniformen. Damit alles gut passt, kommt am 8. April eine Mitarbeiterin der Herstellerfirma zu uns.",
         "Bitte gehen Sie an diesem Tag zwischen 9 und 16 Uhr in den Seminarraum und probieren Sie Hosen, Blusen, Hemden und Westen in Ihrer Größe an. Wer an diesem Tag frei hat, meldet sich bitte vorher bei uns. Der neue Wellnessbereich bleibt währenddessen wie gewohnt geöffnet."
        ]
       },
       "stelle": "probieren Sie Hosen, Blusen, Hemden und Westen in Ihrer Größe an",
       "erklaerung": "Die neue Kleidung soll anprobiert werden. Der Wellnessbereich ist nicht neu, sondern schon offen."
      },
      {
       "frage": "Welcher Betreff passt zu Text 3?",
       "opt": [
        "Restaurant bleibt im Januar drei Wochen geschlossen",
        "Großer Gästeansturm erwartet: Hilfe beim Frühstück gesucht",
        "Was bei Allergien auf der Speisekarte stehen muss",
        "Hotel bekommt einen neuen Wellnessbereich",
        "Trinkgeld wird künftig gerecht verteilt",
        "Gäste können ab sofort online bezahlen",
        "Neue Arbeitskleidung muss anprobiert werden",
        "Koch gewinnt regionalen Wettbewerb",
        "Abschiedsfeier für langjährige Kollegin",
        "Messe in der Stadt: Zimmerpreise steigen"
       ],
       "loesung": 2,
       "fest": true,
       "text": {
        "sorte": "email",
        "quelle": "E-Mail des Küchenchefs",
        "titel": "Text 3",
        "zeilen": [
         "Hallo zusammen, gestern hat sich ein Gast beschwert, weil im Dessert Nüsse waren und niemand ihn darauf hingewiesen hat. Zum Glück ist nichts passiert. Trotzdem erinnere ich euch daran: Zu jedem Gericht muss auf der Karte stehen, welche Allergene es enthält.",
         "Wenn wir ein Rezept ändern, gebt mir bitte sofort Bescheid, damit ich die Liste anpasse. Im Service fragt bitte jeden Gast, ob er etwas nicht verträgt. Gruß, Stefan"
        ]
       },
       "stelle": "Zu jedem Gericht muss auf der Karte stehen, welche Allergene es enthält.",
       "erklaerung": "Es geht um die Pflicht, Allergene anzugeben. Einen Wettbewerb erwähnt der Koch nicht."
      },
      {
       "frage": "Welcher Betreff passt zu Text 4?",
       "opt": [
        "Restaurant bleibt im Januar drei Wochen geschlossen",
        "Großer Gästeansturm erwartet: Hilfe beim Frühstück gesucht",
        "Was bei Allergien auf der Speisekarte stehen muss",
        "Hotel bekommt einen neuen Wellnessbereich",
        "Trinkgeld wird künftig gerecht verteilt",
        "Gäste können ab sofort online bezahlen",
        "Neue Arbeitskleidung muss anprobiert werden",
        "Koch gewinnt regionalen Wettbewerb",
        "Abschiedsfeier für langjährige Kollegin",
        "Messe in der Stadt: Zimmerpreise steigen"
       ],
       "loesung": 4,
       "fest": true,
       "text": {
        "sorte": "email",
        "quelle": "Mitteilung der Geschäftsführung",
        "titel": "Text 4",
        "zeilen": [
         "In letzter Zeit gab es Diskussionen darüber, wer wie viel Trinkgeld bekommt. Bisher behielt jede Servicekraft ihr Trinkgeld selbst, obwohl Küche und Spüle genauso zum Erfolg beitragen.",
         "Ab dem 1. Juni sammeln wir deshalb alles Trinkgeld in einer gemeinsamen Kasse. Am Monatsende wird es nach den gearbeiteten Stunden an alle Mitarbeiter verteilt. Bei Gästen, die mit Karte bezahlen, wird das Trinkgeld genauso behandelt."
        ]
       },
       "stelle": "Am Monatsende wird es nach den gearbeiteten Stunden an alle Mitarbeiter verteilt.",
       "erklaerung": "Trinkgeld wird neu und fair verteilt. Kartenzahlung gibt es schon, Onlinezahlung wird nicht genannt."
      },
      {
       "frage": "Welcher Betreff passt zu Text 5?",
       "opt": [
        "Restaurant bleibt im Januar drei Wochen geschlossen",
        "Großer Gästeansturm erwartet: Hilfe beim Frühstück gesucht",
        "Was bei Allergien auf der Speisekarte stehen muss",
        "Hotel bekommt einen neuen Wellnessbereich",
        "Trinkgeld wird künftig gerecht verteilt",
        "Gäste können ab sofort online bezahlen",
        "Neue Arbeitskleidung muss anprobiert werden",
        "Koch gewinnt regionalen Wettbewerb",
        "Abschiedsfeier für langjährige Kollegin",
        "Messe in der Stadt: Zimmerpreise steigen"
       ],
       "loesung": 8,
       "fest": true,
       "text": {
        "sorte": "email",
        "quelle": "E-Mail an das Team",
        "titel": "Text 5",
        "zeilen": [
         "Liebe Kollegen, nach 26 Jahren in unserem Restaurant geht Rosa Marquardt Ende des Monats in den Ruhestand. Viele von euch hat sie eingearbeitet, und ohne ihre Erfahrung wäre die Küche oft im Chaos versunken.",
         "Wir möchten uns am Montag, dem 28. Oktober, nach Schließung des Restaurants mit einem kleinen Fest bei ihr bedanken. Für ein Geschenk sammeln wir in der Küche. Bitte sagt bis Mittwoch Bescheid, ob ihr kommt. Viele Grüße, Lukas"
        ]
       },
       "stelle": "mit einem kleinen Fest bei ihr bedanken",
       "erklaerung": "Es ist eine Einladung zum Abschied. Das Restaurant schließt nur an diesem Abend, nicht für Wochen."
      }
     ]
    },
    {
     "nr": 2,
     "art": "textwahl",
     "text": {
      "sorte": "email",
      "quelle": "E-Mail-Wechsel",
      "titel": "Reklamation: falsche Fliesen",
      "zeilen": [
       "Von: Thomas Albrecht – An: Fliesen Scholz GmbH, Kundenservice",
       "Sehr geehrte Damen und Herren, am Montag hat Ihr Fahrer die Fliesen für mein neues Badezimmer geliefert. Leider sind es nicht die Fliesen, die ich ausgesucht habe: Bestellt hatte ich hellgrau und matt, geliefert wurden dunkelgraue, glänzende Fliesen. Außerdem waren in zwei Kartons mehrere Fliesen zerbrochen. Mein Fliesenleger wollte nächste Woche anfangen und hat sich extra dafür Zeit genommen. Wenn er warten muss, verschiebt sich der ganze Umbau. Ich bitte Sie, die falsche Ware abzuholen und mir möglichst schnell die richtigen Fliesen zu schicken. Mit freundlichen Grüßen, Thomas Albrecht",
       "Von: Nadine Scholz, Kundenservice – An: Thomas Albrecht",
       "Sehr geehrter Herr Albrecht, es tut uns sehr leid. Beim Verladen wurden offenbar zwei Aufträge verwechselt. Die richtigen Fliesen haben wir auf Lager. Wir können sie am Donnerstag liefern und die falschen Kartons gleichzeitig mitnehmen. Damit wir den Schaden mit der Spedition klären können, schicken Sie uns bitte Fotos der zerbrochenen Fliesen. Als kleine Entschädigung bekommen Sie von uns die Fugenmasse und den Kleber kostenlos dazu. Mit freundlichen Grüßen, Nadine Scholz",
       "Von: Thomas Albrecht – An: Nadine Scholz",
       "Sehr geehrte Frau Scholz, vielen Dank für die freundliche Antwort. Die Fotos finden Sie im Anhang. Donnerstag passt mir gut, ich bin allerdings erst ab 14 Uhr zu Hause. Wenn der Fahrer früher kommt, kann er die Kartons bei meinem Nachbarn im Erdgeschoss abgeben, Herrn Yılmaz. Kleber und Fugenmasse hatte ich bereits bei einem anderen Händler gekauft. Wäre es möglich, mir stattdessen einen kleinen Rabatt auf die Fliesen zu geben? Mit freundlichen Grüßen, Thomas Albrecht"
      ]
     },
     "aufgaben": [
      {
       "frage": "Was war bei der ersten Lieferung falsch?",
       "opt": [
        "Es kamen Fliesen in der falschen Farbe.",
        "Es kamen zu wenige Kartons.",
        "Die Lieferung kam eine Woche zu spät."
       ],
       "loesung": 0,
       "stelle": "geliefert wurden dunkelgraue, glänzende Fliesen",
       "erklaerung": "Er wollte hellgraue, matte Fliesen und bekam dunkelgraue, glänzende."
      },
      {
       "frage": "Wie erklärt Frau Scholz den Fehler?",
       "opt": [
        "Die gewünschten Fliesen waren nicht mehr da.",
        "Zwei Bestellungen wurden vertauscht.",
        "Der Fahrer hat die falsche Adresse bekommen."
       ],
       "loesung": 1,
       "stelle": "Beim Verladen wurden offenbar zwei Aufträge verwechselt.",
       "erklaerung": "Zwei Aufträge wurden verwechselt; die richtigen Fliesen sind auf Lager."
      },
      {
       "frage": "Wozu braucht die Firma Fotos?",
       "opt": [
        "Um die neuen Fliesen richtig auszusuchen.",
        "Um den Schaden mit der Spedition zu klären.",
        "Um dem Fliesenleger das Bad zu zeigen."
       ],
       "loesung": 1,
       "stelle": "Damit wir den Schaden mit der Spedition klären können",
       "erklaerung": "Die Fotos zeigen die zerbrochenen Fliesen für die Spedition."
      },
      {
       "frage": "Was soll passieren, wenn der Fahrer vor 14 Uhr kommt?",
       "opt": [
        "Er soll am Nachmittag wiederkommen.",
        "Er soll Herrn Albrecht vorher anrufen.",
        "Er soll die Fliesen beim Nachbarn abgeben."
       ],
       "loesung": 2,
       "stelle": "kann er die Kartons bei meinem Nachbarn im Erdgeschoss abgeben",
       "erklaerung": "Herr Yılmaz, der Nachbar, nimmt die Kartons an."
      },
      {
       "frage": "Was wünscht sich Herr Albrecht am Ende?",
       "opt": [
        "Er möchte Kleber und Fugenmasse zurückgeben.",
        "Er möchte statt Kleber und Fugenmasse einen Preisnachlass.",
        "Er möchte die Fliesen bei einem anderen Händler kaufen."
       ],
       "loesung": 1,
       "stelle": "Wäre es möglich, mir stattdessen einen kleinen Rabatt auf die Fliesen zu geben?",
       "erklaerung": "Kleber und Fugenmasse hat er schon; deshalb bittet er um Rabatt."
      }
     ]
    },
    {
     "nr": 3,
     "art": "anzeigenX",
     "anzeigen": [
      {
       "b": "a",
       "quelle": "Catering Tafelrunde",
       "zeilen": [
        "Mittagessen für Firmen ab 15 Personen",
        "Täglich warm geliefert, in Mehrwegboxen",
        "Jeden Tag auch ein vegetarisches Gericht"
       ]
      },
      {
       "b": "b",
       "quelle": "Partyservice Goldlöffel",
       "zeilen": [
        "Buffets für Firmenfeiern und Jubiläen",
        "Ab 30 Personen, mit Geschirr und Servicepersonal",
        "Bitte drei Wochen vorher bestellen"
       ]
      },
      {
       "b": "c",
       "quelle": "Frühstücksbote Morgenstund",
       "zeilen": [
        "Belegte Brötchen und Obst direkt ins Büro",
        "Bestellung bis 18 Uhr am Vortag",
        "Schon ab fünf Personen"
       ]
      },
      {
       "b": "d",
       "quelle": "Berufskleidung Robusta",
       "zeilen": [
        "Sicherheitsschuhe und Arbeitshosen",
        "Großes Lager, Anprobe im Geschäft",
        "Montag bis Samstag 8–18 Uhr"
       ]
      },
      {
       "b": "e",
       "quelle": "Textilservice Blitzblank",
       "zeilen": [
        "Arbeitskleidung mieten statt kaufen",
        "Wir holen jede Woche ab, waschen und bringen zurück",
        "Auf Wunsch mit Ihrem Firmenlogo"
       ]
      },
      {
       "b": "f",
       "quelle": "Stickerei Nadelöhr",
       "zeilen": [
        "Ihr Logo auf T-Shirts, Polohemden und Jacken",
        "Ab zehn Stück",
        "Lieferzeit zwei Wochen"
       ]
      },
      {
       "b": "g",
       "quelle": "Gebäudereinigung Glanzpunkt",
       "zeilen": [
        "Büroreinigung abends oder am Wochenende",
        "Feste Teams, die Ihr Haus kennen",
        "Kostenloses Angebot nach Besichtigung"
       ]
      },
      {
       "b": "h",
       "quelle": "Aktenvernichtung Sicher-Weg",
       "zeilen": [
        "Vernichtung von Akten nach Datenschutzregeln",
        "Wir stellen abschließbare Behälter auf",
        "Mit Vernichtungsprotokoll"
       ]
      },
      {
       "b": "i",
       "quelle": "Umzugsfirma Kraftpaket",
       "zeilen": [
        "Büroumzüge auch am Wochenende",
        "Wir bauen Möbel ab und auf und schließen die Computer an",
        "Festpreis nach Besichtigung"
       ]
      },
      {
       "b": "j",
       "quelle": "Kaffeeprofi Bohne",
       "zeilen": [
        "Kaffeevollautomaten für Büros mieten",
        "Wartung und Kaffeebohnen inklusive",
        "Ab 49 Euro im Monat"
       ]
      },
      {
       "b": "k",
       "quelle": "Übersetzungsbüro Brücke",
       "zeilen": [
        "Beglaubigte Übersetzungen von Zeugnissen",
        "Englisch, Türkisch, Arabisch, Russisch",
        "Fertig in fünf Arbeitstagen"
       ]
      },
      {
       "b": "l",
       "quelle": "Druckerei Punkt",
       "zeilen": [
        "Visitenkarten, Briefpapier, Flyer",
        "Expressdruck in 24 Stunden"
       ]
      }
     ],
     "aufgaben": [
      {
       "situation": "Ihre Firma hat keine Kantine. Die 25 Mitarbeiter möchten mittags trotzdem etwas Warmes essen.",
       "loesung": "a",
       "erklaerung": "Das Catering liefert täglich warmes Mittagessen für Firmen ab 15 Personen."
      },
      {
       "situation": "Ihre Firma feiert in zwei Monaten ihr 50-jähriges Jubiläum mit etwa 80 Gästen. Sie sollen sich um das Essen kümmern.",
       "loesung": "b",
       "erklaerung": "Der Partyservice macht Buffets für Jubiläen ab 30 Personen. Zwei Monate sind früh genug."
      },
      {
       "situation": "Morgen um 8 Uhr haben Sie eine Teambesprechung mit acht Kollegen und möchten ein Frühstück bestellen.",
       "loesung": "c",
       "erklaerung": "Der Frühstücksbote liefert ab fünf Personen, wenn man bis 18 Uhr am Vortag bestellt."
      },
      {
       "situation": "Sie beginnen am Montag einen Job im Lager und brauchen noch Sicherheitsschuhe. Heute ist Samstag.",
       "loesung": "d",
       "erklaerung": "Robusta hat auch samstags geöffnet, man kann die Schuhe direkt anprobieren."
      },
      {
       "situation": "In Ihrer Werkstatt sollen die Mitarbeiter ihre schmutzige Arbeitskleidung nicht mehr selbst zu Hause waschen.",
       "loesung": "e",
       "erklaerung": "Der Textilservice holt die Kleidung jede Woche ab, wäscht sie und bringt sie zurück."
      },
      {
       "situation": "Die Kaffeemaschine im Büro ist kaputt. Ihr Chef möchte keine neue kaufen.",
       "loesung": "j",
       "erklaerung": "Kaffeeprofi Bohne vermietet Kaffeeautomaten – man muss also nichts kaufen."
      },
      {
       "situation": "In der Personalabteilung müssen alte Bewerbungsunterlagen sicher und nach den Datenschutzregeln entsorgt werden.",
       "loesung": "h",
       "erklaerung": "Sicher-Weg vernichtet Akten nach Datenschutzregeln und gibt ein Protokoll."
      },
      {
       "situation": "Sie bewerben sich und brauchen eine beglaubigte Übersetzung Ihres polnischen Berufszeugnisses.",
       "loesung": "x",
       "erklaerung": "Das Übersetzungsbüro bietet kein Polnisch an. Eine andere Übersetzung gibt es nicht."
      },
      {
       "situation": "Ihre Firma zieht nächsten Monat in ein neues Bürogebäude. Am Montag danach soll alles wieder funktionieren.",
       "loesung": "i",
       "erklaerung": "Kraftpaket macht Büroumzüge am Wochenende und schließt auch die Computer an."
      },
      {
       "situation": "Übermorgen beginnt eine Messe. Ihr Team braucht dafür noch 20 T-Shirts mit dem Firmenlogo.",
       "loesung": "x",
       "erklaerung": "Die Stickerei braucht zwei Wochen. Die Druckerei l druckt nur Papier, keine T-Shirts."
      }
     ]
    },
    {
     "nr": 4,
     "art": "textwahl",
     "text": {
      "sorte": "brief",
      "quelle": "Brief",
      "titel": "Informationen für neue Pflegekräfte",
      "zeilen": [
       "Liebe neue Mitarbeiter,",
       "wir freuen uns sehr, dass Sie sich für unser Seniorenheim „Haus am Weiher\" entschieden haben. Damit Sie sich schnell bei uns __(1)__, haben wir hier einige wichtige Informationen für Sie zusammengestellt.",
       "Die Dienstpläne werden immer für vier Wochen im Voraus __(2)__. Wenn Sie an einem bestimmten Tag frei haben möchten, tragen Sie Ihren Wunsch bitte spätestens zwei Monate vorher in das Wunschbuch ein. Wir können nicht jeden Wunsch erfüllen, __(3)__ wir versuchen es immer.",
       "Wer krank ist, __(4)__ bitte vor Dienstbeginn auf der Station anrufen. Ab dem dritten Krankheitstag brauchen wir eine Bescheinigung vom Arzt, __(5)__ Sie spätestens am vierten Tag abgeben müssen.",
       "Ihre Dienstkleidung wird bei uns im Haus gewaschen. Legen Sie die getragene Kleidung einfach __(6)__ den blauen Wäschesack im Umkleideraum. In den ersten drei Monaten haben Sie eine feste Ansprechpartnerin, __(7)__ Sie alle Fragen stellen können. Bitte zögern Sie nicht, __(8)__ etwas unklar ist.",
       "Wichtig ist uns auch, dass Sie sich genug Zeit für die Bewohner __(9)__. Wir sind sicher, dass Sie gut __(10)__ unser Team passen.",
       "Herzliche Grüße",
       "Beate Hoffmann, Pflegedienstleitung"
      ]
     },
     "aufgaben": [
      {
       "frage": "Was passt in Lücke 1?",
       "luecke": 1,
       "opt": [
        "einleben",
        "einlebt",
        "eingelebt"
       ],
       "loesung": 0,
       "fest": true,
       "erklaerung": "Subjekt ist „Sie\", Präsens im Nebensatz: „damit Sie sich einleben\"."
      },
      {
       "frage": "Was passt in Lücke 2?",
       "luecke": 2,
       "opt": [
        "erstellt",
        "erstellen",
        "erstellte"
       ],
       "loesung": 0,
       "fest": true,
       "erklaerung": "Passiv mit „werden\" braucht das Partizip II: „erstellt\"."
      },
      {
       "frage": "Was passt in Lücke 3?",
       "luecke": 3,
       "opt": [
        "aber",
        "trotzdem",
        "sondern"
       ],
       "loesung": 0,
       "fest": true,
       "erklaerung": "Gegensatz zwischen zwei Hauptsätzen mit normaler Wortstellung („wir versuchen\"): „aber\". Nach „trotzdem\" müsste das Verb folgen."
      },
      {
       "frage": "Was passt in Lücke 4?",
       "luecke": 4,
       "opt": [
        "sollte",
        "sollten",
        "solltet"
       ],
       "loesung": 0,
       "fest": true,
       "erklaerung": "„Wer\" verlangt das Verb in der 3. Person Singular: „sollte\"."
      },
      {
       "frage": "Was passt in Lücke 5?",
       "luecke": 5,
       "opt": [
        "die",
        "das",
        "der"
       ],
       "loesung": 0,
       "fest": true,
       "erklaerung": "Bezug auf „die Bescheinigung\" (feminin), Akkusativobjekt: „die\"."
      },
      {
       "frage": "Was passt in Lücke 6?",
       "luecke": 6,
       "opt": [
        "in",
        "im",
        "ins"
       ],
       "loesung": 0,
       "fest": true,
       "erklaerung": "Richtung („wohin?\") mit Akkusativ: „in den Wäschesack\". „im\" und „ins\" passen nicht zu „den\"."
      },
      {
       "frage": "Was passt in Lücke 7?",
       "luecke": 7,
       "opt": [
        "der",
        "die",
        "denen"
       ],
       "loesung": 0,
       "fest": true,
       "erklaerung": "„jemandem Fragen stellen\" verlangt den Dativ; „Ansprechpartnerin\" ist feminin: „der\"."
      },
      {
       "frage": "Was passt in Lücke 8?",
       "luecke": 8,
       "opt": [
        "wenn",
        "als",
        "ob"
       ],
       "loesung": 0,
       "fest": true,
       "erklaerung": "Bedingung für jeden Fall in der Zukunft: „wenn\". „als\" steht nur bei einmaligen Ereignissen in der Vergangenheit."
      },
      {
       "frage": "Was passt in Lücke 9?",
       "luecke": 9,
       "opt": [
        "nehmen",
        "nimmt",
        "genommen"
       ],
       "loesung": 0,
       "fest": true,
       "erklaerung": "Subjekt „Sie\", Präsens: „dass Sie sich Zeit nehmen\"."
      },
      {
       "frage": "Was passt in Lücke 10?",
       "luecke": 10,
       "opt": [
        "in",
        "zu",
        "für"
       ],
       "loesung": 0,
       "fest": true,
       "erklaerung": "„in etwas passen\" mit Akkusativ: „in unser Team\". „zu\" würde den Dativ „unserem\" verlangen."
      }
     ]
    },
    {
     "nr": 5,
     "art": "textwahl",
     "text": {
      "sorte": "brief",
      "quelle": "Brief",
      "titel": "Bewerbung als Verkäuferin",
      "zeilen": [
       "Sehr geehrter Herr Meißner,",
       "vielen Dank für das nette Telefonat am Dienstag. Wie __(1)__, schicke ich Ihnen heute meine Unterlagen für die Stelle als Verkäuferin in Ihrer Filiale.",
       "Ich habe drei Jahre in einer Bäckerei gearbeitet und dort täglich __(2)__ vielen Kunden zu tun gehabt. Die Beratung macht mir großen __(3)__. Außerdem habe ich an der Kasse gearbeitet und kenne mich mit der Abrechnung gut __(4)__. Wegen eines Umzugs musste ich die Stelle leider __(5)__. Seit April wohne ich in Bremen und suche nun eine neue __(6)__ im Verkauf.",
       "Ich bin zeitlich __(7)__ und kann auch samstags arbeiten. Da ich Deutsch, Russisch und Englisch spreche, kann ich auch ausländische Kunden gut __(8)__.",
       "Ich würde mich freuen, __(9)__ Sie mich zu einem Probetag einladen. Für Fragen stehe ich Ihnen jederzeit gern zur __(10)__.",
       "Mit freundlichen Grüßen",
       "Olga Petrenko"
      ]
     },
     "aufgaben": [
      {
       "frage": "Welches Wort passt in Lücke 1?",
       "luecke": 1,
       "opt": [
        "besprochen",
        "gesprochen",
        "mit",
        "an",
        "Spaß",
        "Freude",
        "aus",
        "aufgeben",
        "Tätigkeit",
        "flexibel",
        "beraten",
        "arbeitet",
        "wenn",
        "ob",
        "Verfügung"
       ],
       "loesung": 0,
       "fest": true,
       "erklaerung": "Feste Wendungen: „wie besprochen\", „mit jemandem zu tun haben\", „sich mit etwas auskennen\", „zur Verfügung stehen\". „Freude\" ist feminin und passt nicht zu „großen\"."
      },
      {
       "frage": "Welches Wort passt in Lücke 2?",
       "luecke": 2,
       "opt": [
        "besprochen",
        "gesprochen",
        "mit",
        "an",
        "Spaß",
        "Freude",
        "aus",
        "aufgeben",
        "Tätigkeit",
        "flexibel",
        "beraten",
        "arbeitet",
        "wenn",
        "ob",
        "Verfügung"
       ],
       "loesung": 2,
       "fest": true,
       "erklaerung": "Richtig ist „mit\". Jedes Wort passt nur einmal."
      },
      {
       "frage": "Welches Wort passt in Lücke 3?",
       "luecke": 3,
       "opt": [
        "besprochen",
        "gesprochen",
        "mit",
        "an",
        "Spaß",
        "Freude",
        "aus",
        "aufgeben",
        "Tätigkeit",
        "flexibel",
        "beraten",
        "arbeitet",
        "wenn",
        "ob",
        "Verfügung"
       ],
       "loesung": 4,
       "fest": true,
       "erklaerung": "Richtig ist „Spaß\". Jedes Wort passt nur einmal."
      },
      {
       "frage": "Welches Wort passt in Lücke 4?",
       "luecke": 4,
       "opt": [
        "besprochen",
        "gesprochen",
        "mit",
        "an",
        "Spaß",
        "Freude",
        "aus",
        "aufgeben",
        "Tätigkeit",
        "flexibel",
        "beraten",
        "arbeitet",
        "wenn",
        "ob",
        "Verfügung"
       ],
       "loesung": 6,
       "fest": true,
       "erklaerung": "Richtig ist „aus\". Jedes Wort passt nur einmal."
      },
      {
       "frage": "Welches Wort passt in Lücke 5?",
       "luecke": 5,
       "opt": [
        "besprochen",
        "gesprochen",
        "mit",
        "an",
        "Spaß",
        "Freude",
        "aus",
        "aufgeben",
        "Tätigkeit",
        "flexibel",
        "beraten",
        "arbeitet",
        "wenn",
        "ob",
        "Verfügung"
       ],
       "loesung": 7,
       "fest": true,
       "erklaerung": "Richtig ist „aufgeben\". Jedes Wort passt nur einmal."
      },
      {
       "frage": "Welches Wort passt in Lücke 6?",
       "luecke": 6,
       "opt": [
        "besprochen",
        "gesprochen",
        "mit",
        "an",
        "Spaß",
        "Freude",
        "aus",
        "aufgeben",
        "Tätigkeit",
        "flexibel",
        "beraten",
        "arbeitet",
        "wenn",
        "ob",
        "Verfügung"
       ],
       "loesung": 8,
       "fest": true,
       "erklaerung": "Richtig ist „Tätigkeit\". Jedes Wort passt nur einmal."
      },
      {
       "frage": "Welches Wort passt in Lücke 7?",
       "luecke": 7,
       "opt": [
        "besprochen",
        "gesprochen",
        "mit",
        "an",
        "Spaß",
        "Freude",
        "aus",
        "aufgeben",
        "Tätigkeit",
        "flexibel",
        "beraten",
        "arbeitet",
        "wenn",
        "ob",
        "Verfügung"
       ],
       "loesung": 9,
       "fest": true,
       "erklaerung": "Richtig ist „flexibel\". Jedes Wort passt nur einmal."
      },
      {
       "frage": "Welches Wort passt in Lücke 8?",
       "luecke": 8,
       "opt": [
        "besprochen",
        "gesprochen",
        "mit",
        "an",
        "Spaß",
        "Freude",
        "aus",
        "aufgeben",
        "Tätigkeit",
        "flexibel",
        "beraten",
        "arbeitet",
        "wenn",
        "ob",
        "Verfügung"
       ],
       "loesung": 10,
       "fest": true,
       "erklaerung": "Richtig ist „beraten\". Jedes Wort passt nur einmal."
      },
      {
       "frage": "Welches Wort passt in Lücke 9?",
       "luecke": 9,
       "opt": [
        "besprochen",
        "gesprochen",
        "mit",
        "an",
        "Spaß",
        "Freude",
        "aus",
        "aufgeben",
        "Tätigkeit",
        "flexibel",
        "beraten",
        "arbeitet",
        "wenn",
        "ob",
        "Verfügung"
       ],
       "loesung": 12,
       "fest": true,
       "erklaerung": "Richtig ist „wenn\". Jedes Wort passt nur einmal."
      },
      {
       "frage": "Welches Wort passt in Lücke 10?",
       "luecke": 10,
       "opt": [
        "besprochen",
        "gesprochen",
        "mit",
        "an",
        "Spaß",
        "Freude",
        "aus",
        "aufgeben",
        "Tätigkeit",
        "flexibel",
        "beraten",
        "arbeitet",
        "wenn",
        "ob",
        "Verfügung"
       ],
       "loesung": 14,
       "fest": true,
       "erklaerung": "Richtig ist „Verfügung\". Jedes Wort passt nur einmal."
      }
     ]
    }
   ]
  },
  {
   "id": "tb1bll2",
   "titel": "Prüfungslauf 2",
   "minuten": 90,
   "teile": [
    {
     "nr": 1,
     "art": "textwahl",
     "aufgaben": [
      {
       "frage": "Welcher Betreff passt zu Text 1?",
       "opt": [
        "Kunden können Ware jetzt auch abends abholen",
        "Inventur: Laden bleibt am Samstag geschlossen",
        "Firmenwagen dürfen nicht privat genutzt werden",
        "Auszubildende suchen Unterstützung für die Prüfung",
        "Neue Kasse wird an einem Abend erklärt",
        "Ladendiebstahl nimmt stark zu",
        "Wer junge Leute ausbildet, bekommt eine Zulage",
        "Firma kauft drei neue Transporter",
        "Geschenkgutscheine verlieren bald ihre Gültigkeit",
        "Kunden bekommen künftig Rabatt mit Kundenkarte"
       ],
       "loesung": 1,
       "fest": true,
       "text": {
        "sorte": "email",
        "quelle": "Mitteilung der Filialleitung",
        "titel": "Text 1",
        "zeilen": [
         "Liebe Mitarbeiter, am Samstag, dem 30. Dezember, zählen wir wie jedes Jahr den gesamten Warenbestand. Unsere Filiale bleibt an diesem Tag für Kunden geschlossen.",
         "Alle Kollegen arbeiten von 8 bis etwa 17 Uhr, Mittagessen und Getränke stellt die Firma. Bitte hängt in der Woche davor die Plakate an die Eingangstür. Falls euch beim Zählen etwas Verdächtiges auffällt, zum Beispiel leere Verpackungen, meldet es bitte sofort."
        ]
       },
       "stelle": "Unsere Filiale bleibt an diesem Tag für Kunden geschlossen.",
       "erklaerung": "Wegen der Inventur ist der Laden zu. Leere Verpackungen sind nur ein Detail, nicht das Thema."
      },
      {
       "frage": "Welcher Betreff passt zu Text 2?",
       "opt": [
        "Kunden können Ware jetzt auch abends abholen",
        "Inventur: Laden bleibt am Samstag geschlossen",
        "Firmenwagen dürfen nicht privat genutzt werden",
        "Auszubildende suchen Unterstützung für die Prüfung",
        "Neue Kasse wird an einem Abend erklärt",
        "Ladendiebstahl nimmt stark zu",
        "Wer junge Leute ausbildet, bekommt eine Zulage",
        "Firma kauft drei neue Transporter",
        "Geschenkgutscheine verlieren bald ihre Gültigkeit",
        "Kunden bekommen künftig Rabatt mit Kundenkarte"
       ],
       "loesung": 4,
       "fest": true,
       "text": {
        "sorte": "email",
        "quelle": "E-Mail an das Verkaufsteam",
        "titel": "Text 2",
        "zeilen": [
         "Hallo zusammen, nächste Woche wird unser neues Kassensystem installiert. Damit am ersten Tag alles klappt, zeigt uns ein Techniker am Dienstag nach Ladenschluss, also ab 20 Uhr, wie die Geräte funktionieren.",
         "Es dauert ungefähr zwei Stunden, die Zeit wird natürlich bezahlt. Die Teilnahme ist für alle Pflicht, die an der Kasse stehen. Mit dem neuen System können Kunden übrigens auch Bestellungen aufgeben, die sie später im Laden abholen. Bis Dienstag, Jana"
        ]
       },
       "stelle": "zeigt uns ein Techniker am Dienstag nach Ladenschluss",
       "erklaerung": "Die Kasse wird abends erklärt. Abholen ist eine Funktion des Systems, nicht die Hauptaussage."
      },
      {
       "frage": "Welcher Betreff passt zu Text 3?",
       "opt": [
        "Kunden können Ware jetzt auch abends abholen",
        "Inventur: Laden bleibt am Samstag geschlossen",
        "Firmenwagen dürfen nicht privat genutzt werden",
        "Auszubildende suchen Unterstützung für die Prüfung",
        "Neue Kasse wird an einem Abend erklärt",
        "Ladendiebstahl nimmt stark zu",
        "Wer junge Leute ausbildet, bekommt eine Zulage",
        "Firma kauft drei neue Transporter",
        "Geschenkgutscheine verlieren bald ihre Gültigkeit",
        "Kunden bekommen künftig Rabatt mit Kundenkarte"
       ],
       "loesung": 2,
       "fest": true,
       "text": {
        "sorte": "email",
        "quelle": "Mitteilung der Geschäftsleitung",
        "titel": "Text 3",
        "zeilen": [
         "Leider haben wir festgestellt, dass einige unserer Firmenwagen am Wochenende für Umzüge und Ausflüge benutzt wurden. Das ist nicht erlaubt, denn die Versicherung gilt nur für Fahrten zu Kunden und Baustellen.",
         "Bitte stellen Sie die Fahrzeuge nach Feierabend auf den Hof und geben Sie den Schlüssel im Büro ab. Wer ein Auto privat braucht, kann einen unserer drei Transporter gegen eine kleine Gebühr mieten, muss das aber vorher schriftlich beantragen."
        ]
       },
       "stelle": "die Versicherung gilt nur für Fahrten zu Kunden und Baustellen",
       "erklaerung": "Hauptaussage: keine privaten Fahrten. Die drei Transporter gibt es schon, sie werden nicht neu gekauft."
      },
      {
       "frage": "Welcher Betreff passt zu Text 4?",
       "opt": [
        "Kunden können Ware jetzt auch abends abholen",
        "Inventur: Laden bleibt am Samstag geschlossen",
        "Firmenwagen dürfen nicht privat genutzt werden",
        "Auszubildende suchen Unterstützung für die Prüfung",
        "Neue Kasse wird an einem Abend erklärt",
        "Ladendiebstahl nimmt stark zu",
        "Wer junge Leute ausbildet, bekommt eine Zulage",
        "Firma kauft drei neue Transporter",
        "Geschenkgutscheine verlieren bald ihre Gültigkeit",
        "Kunden bekommen künftig Rabatt mit Kundenkarte"
       ],
       "loesung": 6,
       "fest": true,
       "text": {
        "sorte": "email",
        "quelle": "Mitteilung der Handwerkskammer an Ausbildungsbetriebe",
        "titel": "Text 4",
        "zeilen": [
         "Viele Betriebe finden kaum noch Nachwuchs. Damit sich die Ausbildung auch für die Gesellen lohnt, die die jungen Leute im Alltag begleiten, zahlt die Kammer ab dem neuen Ausbildungsjahr einen monatlichen Zuschuss von 100 Euro an jeden Ausbilder.",
         "Voraussetzung ist ein kurzer Kurs zur Ausbildereignung. Den Antrag stellt der Betrieb. Auch bei der Vorbereitung der Auszubildenden auf die Gesellenprüfung unterstützt Sie die Kammer gern mit Kursen."
        ]
       },
       "stelle": "einen monatlichen Zuschuss von 100 Euro an jeden Ausbilder",
       "erklaerung": "Ausbilder bekommen Geld. Dass Auszubildende selbst Hilfe suchen, steht nicht im Text."
      },
      {
       "frage": "Welcher Betreff passt zu Text 5?",
       "opt": [
        "Kunden können Ware jetzt auch abends abholen",
        "Inventur: Laden bleibt am Samstag geschlossen",
        "Firmenwagen dürfen nicht privat genutzt werden",
        "Auszubildende suchen Unterstützung für die Prüfung",
        "Neue Kasse wird an einem Abend erklärt",
        "Ladendiebstahl nimmt stark zu",
        "Wer junge Leute ausbildet, bekommt eine Zulage",
        "Firma kauft drei neue Transporter",
        "Geschenkgutscheine verlieren bald ihre Gültigkeit",
        "Kunden bekommen künftig Rabatt mit Kundenkarte"
       ],
       "loesung": 9,
       "fest": true,
       "text": {
        "sorte": "email",
        "quelle": "E-Mail des Marketing-Teams an alle Filialen",
        "titel": "Text 5",
        "zeilen": [
         "Liebe Kollegen, ab dem 1. März führen wir eine Kundenkarte ein. Wer sie an der Kasse vorzeigt, bekommt auf jeden Einkauf drei Prozent Rabatt und zum Geburtstag einen Gutschein über zehn Euro.",
         "Die Karte ist kostenlos. Bitte sprechen Sie unsere Stammkunden aktiv darauf an und geben Sie ihnen das Anmeldeformular. Unsere bisherigen Geschenkgutscheine bleiben wie gewohnt drei Jahre lang gültig."
        ]
       },
       "stelle": "bekommt auf jeden Einkauf drei Prozent Rabatt",
       "erklaerung": "Die Kundenkarte bringt Rabatt. Die Gutscheine bleiben gültig, sie verfallen nicht bald."
      }
     ]
    },
    {
     "nr": 2,
     "art": "textwahl",
     "text": {
      "sorte": "email",
      "quelle": "E-Mail-Wechsel",
      "titel": "Urlaubsplanung im Pflegeteam",
      "zeilen": [
       "Von: Marta Nowicka, Pflegefachkraft – An: Jürgen Kessler, Wohnbereichsleitung",
       "Hallo Herr Kessler, ich möchte gern meinen Sommerurlaub beantragen, und zwar vom 28. Juli bis zum 15. August. Meine Schwester heiratet am 2. August in Krakau, deshalb ist mir vor allem die erste Woche sehr wichtig. Ich weiß, dass in dieser Zeit auch viele Kollegen mit Kindern frei haben möchten, weil Schulferien sind. Im letzten Jahr habe ich deshalb schon im Herbst Urlaub gemacht. Wenn es nicht anders geht, könnte ich die dritte Woche auch in den September verschieben. Viele Grüße, Marta Nowicka",
       "Von: Jürgen Kessler – An: Marta Nowicka",
       "Hallo Frau Nowicka, danke für Ihre frühe Anfrage. Die ersten beiden Wochen kann ich Ihnen genehmigen. Für die Woche ab dem 11. August haben schon drei Kollegen Urlaub eingetragen, und mehr als drei Pflegefachkräfte dürfen gleichzeitig nicht fehlen. Sie könnten die dritte Woche aber ab dem 1. September nehmen. Außerdem eine Bitte: Könnten Sie am Wochenende vor Ihrem Urlaub den Frühdienst übernehmen? Herr Brenner ist dann auf einer Fortbildung. Viele Grüße, Jürgen Kessler",
       "Von: Marta Nowicka – An: Jürgen Kessler",
       "Hallo Herr Kessler, vielen Dank, so machen wir es. Den Frühdienst am Wochenende übernehme ich gern, mein Flug geht erst am Montagabend. Eine Frage noch: Ich habe noch sechs Überstunden aus dem Frühjahr. Kann ich die am Freitag vor dem Urlaub abbauen und schon mittags gehen? Dann hätte ich noch Zeit, das Geschenk für meine Schwester abzuholen. Natürlich übergebe ich vorher alle Informationen zu meinen Bewohnern an den Spätdienst. Viele Grüße, Marta Nowicka"
      ]
     },
     "aufgaben": [
      {
       "frage": "Warum ist Frau Nowicka die erste Urlaubswoche besonders wichtig?",
       "opt": [
        "Weil ihre Kinder dann Ferien haben.",
        "Weil in dieser Woche eine Familienfeier ist.",
        "Weil sie dann eine Fortbildung besucht."
       ],
       "loesung": 1,
       "stelle": "Meine Schwester heiratet am 2. August in Krakau",
       "erklaerung": "Die Hochzeit der Schwester ist in der ersten Woche; Kinder haben die Kollegen."
      },
      {
       "frage": "Was bietet Frau Nowicka schon in ihrer ersten E-Mail an?",
       "opt": [
        "Sie würde auf den ganzen Urlaub verzichten.",
        "Sie würde im September Überstunden machen.",
        "Sie würde einen Teil des Urlaubs verschieben."
       ],
       "loesung": 2,
       "stelle": "könnte ich die dritte Woche auch in den September verschieben",
       "erklaerung": "Sie ist bereit, die dritte Woche später zu nehmen."
      },
      {
       "frage": "Warum genehmigt Herr Kessler die dritte Woche nicht?",
       "opt": [
        "Frau Nowicka hat zu spät gefragt.",
        "Herr Kessler hat in dieser Woche selbst Urlaub.",
        "In dieser Woche fehlen schon genug Fachkräfte."
       ],
       "loesung": 2,
       "stelle": "mehr als drei Pflegefachkräfte dürfen gleichzeitig nicht fehlen",
       "erklaerung": "Drei Kollegen sind schon im Urlaub, mehr geht nicht."
      },
      {
       "frage": "Was bittet Herr Kessler Frau Nowicka?",
       "opt": [
        "Einen Dienst für einen Kollegen zu übernehmen.",
        "An einer Fortbildung teilzunehmen.",
        "Ihren Flug zu verschieben."
       ],
       "loesung": 0,
       "stelle": "Könnten Sie am Wochenende vor Ihrem Urlaub den Frühdienst übernehmen?",
       "erklaerung": "Sie soll den Frühdienst übernehmen, weil Herr Brenner auf Fortbildung ist."
      },
      {
       "frage": "Was möchte Frau Nowicka am Freitag vor dem Urlaub?",
       "opt": [
        "Früher gehen und dafür Überstunden nutzen.",
        "Länger arbeiten, um Überstunden zu sammeln.",
        "Frei nehmen, weil ihr Flug am Freitag geht."
       ],
       "loesung": 0,
       "stelle": "Kann ich die am Freitag vor dem Urlaub abbauen und schon mittags gehen?",
       "erklaerung": "Sie will Überstunden abbauen; ihr Flug geht erst am Montagabend."
      }
     ]
    },
    {
     "nr": 3,
     "art": "anzeigenX",
     "anzeigen": [
      {
       "b": "a",
       "quelle": "Verkehrsverbund Kellberg",
       "zeilen": [
        "Jobticket für Beschäftigte",
        "Für Firmen ab fünf Mitarbeitern, der Arbeitgeber zahlt mindestens 25 Prozent",
        "Gilt in Bus und Straßenbahn im ganzen Stadtgebiet"
       ]
      },
      {
       "b": "b",
       "quelle": "Radwerk Leasing",
       "zeilen": [
        "Dienstrad über den Arbeitgeber",
        "Auch E-Bikes",
        "Kleine monatliche Rate statt hoher Kaufpreis"
       ]
      },
      {
       "b": "c",
       "quelle": "Mitfahrbörse Pendlerherz",
       "zeilen": [
        "Fahrgemeinschaften ins Industriegebiet Süd",
        "Kostenlos registrieren",
        "Fahrer und Mitfahrer finden sich per App"
       ]
      },
      {
       "b": "d",
       "quelle": "Betriebskita Sternschnuppe",
       "zeilen": [
        "Kita im Gewerbepark Ost",
        "Für Kinder von 1 bis 6 Jahren, deren Eltern im Gewerbepark arbeiten",
        "Geöffnet 6–19 Uhr"
       ]
      },
      {
       "b": "e",
       "quelle": "Notfall-Nanny",
       "zeilen": [
        "Betreuung, wenn Ihr Kind krank ist",
        "Anruf bis 7 Uhr – wir kommen noch am selben Tag",
        "Viele Arbeitgeber übernehmen die Kosten"
       ]
      },
      {
       "b": "f",
       "quelle": "Hort am Schulhof",
       "zeilen": [
        "Nachmittagsbetreuung für Grundschulkinder",
        "An Schultagen bis 17 Uhr, in den Ferien geschlossen",
        "Mit Mittagessen und Hausaufgabenhilfe"
       ]
      },
      {
       "b": "g",
       "quelle": "Ferienprogramm Abenteuerland",
       "zeilen": [
        "Ferienbetreuung für Kinder von 6 bis 12",
        "In allen Sommer- und Herbstferien, 8–16 Uhr",
        "Firmen können Plätze für ihre Mitarbeiter buchen"
       ]
      },
      {
       "b": "h",
       "quelle": "Coworking Werkbank",
       "zeilen": [
        "Schreibtisch im Gemeinschaftsbüro",
        "Tageweise buchbar, WLAN, Drucker und Kaffee inklusive",
        "15 Euro pro Tag"
       ]
      },
      {
       "b": "i",
       "quelle": "Coworking Werkbank",
       "zeilen": [
        "Eigenes Büro für Teams von drei bis sechs Personen",
        "Mindestmietdauer sechs Monate"
       ]
      },
      {
       "b": "j",
       "quelle": "Tagungszentrum Rathausplatz",
       "zeilen": [
        "Besprechungsräume stundenweise mieten",
        "Für 4 bis 40 Personen, mit Beamer",
        "Getränke und Imbiss auf Wunsch"
       ]
      },
      {
       "b": "k",
       "quelle": "Krabbelbüro",
       "zeilen": [
        "Arbeiten, während Ihr Kind nebenan betreut wird",
        "Für Eltern mit Kindern unter drei Jahren",
        "Nur vormittags 8–13 Uhr"
       ]
      },
      {
       "b": "l",
       "quelle": "Parkhaus Zentrum",
       "zeilen": [
        "Dauerparkplatz für Pendler",
        "89 Euro im Monat",
        "Rund um die Uhr zugänglich"
       ]
      }
     ],
     "aufgaben": [
      {
       "situation": "Sie fahren jeden Tag mit Bus und Straßenbahn zur Arbeit. Ihre Firma hat 40 Mitarbeiter und möchte sich an den Fahrtkosten beteiligen.",
       "loesung": "a",
       "erklaerung": "Beim Jobticket zahlt der Arbeitgeber mit, es gilt in Bus und Straßenbahn."
      },
      {
       "situation": "Sie möchten mit einem E-Bike zur Arbeit fahren. Den ganzen Preis auf einmal können Sie aber nicht bezahlen.",
       "loesung": "b",
       "erklaerung": "Beim Dienstrad-Leasing zahlt man eine kleine Rate im Monat, auch für E-Bikes."
      },
      {
       "situation": "Ihr Sohn ist sieben und kommt um 12 Uhr aus der Schule. Sie arbeiten bis 16.30 Uhr.",
       "loesung": "f",
       "erklaerung": "Der Hort betreut Grundschulkinder am Nachmittag bis 17 Uhr."
      },
      {
       "situation": "Sie arbeiten bei einer Firma im Gewerbepark Ost und fangen um 6.30 Uhr an. Ihre Tochter ist zwei Jahre alt.",
       "loesung": "d",
       "erklaerung": "Die Betriebskita ist für Kinder von Beschäftigten im Gewerbepark und öffnet schon um 6 Uhr."
      },
      {
       "situation": "Ihr Kind hat heute Morgen Fieber. Sie haben aber einen wichtigen Termin mit einem Kunden.",
       "loesung": "e",
       "erklaerung": "Die Notfall-Nanny betreut kranke Kinder noch am selben Tag, wenn man bis 7 Uhr anruft."
      },
      {
       "situation": "Sie arbeiten selbstständig als Übersetzerin. Zu Hause ist es zu laut, und Sie brauchen nur zwei Tage pro Woche einen ruhigen Arbeitsplatz.",
       "loesung": "h",
       "erklaerung": "Den Schreibtisch im Gemeinschaftsbüro kann man tageweise buchen. Büro i muss man mindestens sechs Monate mieten."
      },
      {
       "situation": "Sie haben ein Baby mit zehn Monaten und möchten nachmittags ein paar Stunden in Ruhe arbeiten, während jemand auf Ihr Kind aufpasst.",
       "loesung": "x",
       "erklaerung": "Das Krabbelbüro ist nur vormittags geöffnet. Die anderen Angebote sind nicht für Babys."
      },
      {
       "situation": "Ihre Firma lädt 25 Kunden zu einem Workshop ein und braucht dafür einen Raum für einen Nachmittag.",
       "loesung": "j",
       "erklaerung": "Das Tagungszentrum vermietet Räume stundenweise für bis zu 40 Personen."
      },
      {
       "situation": "Sie haben kein Auto. Ihr neuer Arbeitsplatz im Industriegebiet Nord ist mit dem Bus schlecht zu erreichen. Sie suchen jemanden, der Sie mitnimmt.",
       "loesung": "x",
       "erklaerung": "Die Mitfahrbörse c gilt nur für das Industriegebiet Süd."
      },
      {
       "situation": "In den Herbstferien ist die Schule geschlossen. Sie müssen arbeiten und suchen eine Betreuung für Ihre neunjährige Tochter.",
       "loesung": "g",
       "erklaerung": "Das Ferienprogramm betreut Kinder von 6 bis 12 auch in den Herbstferien. Der Hort f ist nur für Schultage."
      }
     ]
    },
    {
     "nr": 4,
     "art": "textwahl",
     "text": {
      "sorte": "email",
      "quelle": "E-Mail",
      "titel": "Hausmitteilung: Umstellung auf neue Computer",
      "zeilen": [
       "Liebe Kollegen,",
       "in den nächsten zwei Wochen bekommen alle Arbeitsplätze im Verwaltungsgebäude neue Computer. Die Umstellung erfolgt abteilungsweise, __(1)__ der normale Betrieb weiterlaufen kann. Ihre Abteilung ist am Dienstag, dem 12. Mai, __(2)__ der Reihe.",
       "Bitte speichern Sie bis Montagabend alle wichtigen Dateien auf dem Server, __(3)__ sie sonst verloren gehen können. Dateien, die nur auf Ihrem Desktop liegen, werden nicht automatisch __(4)__. Am Tag der Umstellung können Sie etwa zwei Stunden nicht an Ihrem Platz arbeiten. Wir empfehlen Ihnen, in dieser Zeit Aufgaben zu erledigen, __(5)__ Sie keinen Computer brauchen.",
       "Nach der Umstellung müssen Sie sich mit einem neuen Passwort __(6)__. Das vorläufige Passwort bekommen Sie per SMS auf Ihr Diensthandy. Bitte ändern Sie es sofort, __(7)__ Sie sich zum ersten Mal angemeldet haben.",
       "Falls Probleme __(8)__, hilft Ihnen das IT-Team gern weiter. Sie erreichen die Kollegen unter der Durchwahl 300 oder per E-Mail. Wir bitten __(9)__ Ihr Verständnis, wenn es in den ersten Tagen noch zu kleinen Störungen kommt. Wir sind sicher, dass die Arbeit mit den neuen Geräten danach __(10)__ und schneller wird.",
       "Viele Grüße",
       "Tobias Wendt, IT-Abteilung"
      ]
     },
     "aufgaben": [
      {
       "frage": "Was passt in Lücke 1?",
       "luecke": 1,
       "opt": [
        "damit",
        "um",
        "dass"
       ],
       "loesung": 0,
       "fest": true,
       "erklaerung": "Ziel mit eigenem Subjekt („der normale Betrieb\") und Verb am Ende: „damit\"."
      },
      {
       "frage": "Was passt in Lücke 2?",
       "luecke": 2,
       "opt": [
        "an",
        "in",
        "auf"
       ],
       "loesung": 0,
       "fest": true,
       "erklaerung": "Feste Wendung: „an der Reihe sein\"."
      },
      {
       "frage": "Was passt in Lücke 3?",
       "luecke": 3,
       "opt": [
        "weil",
        "denn",
        "deshalb"
       ],
       "loesung": 0,
       "fest": true,
       "erklaerung": "Das Verb steht am Ende („gehen können\"), also Nebensatz mit „weil\"."
      },
      {
       "frage": "Was passt in Lücke 4?",
       "luecke": 4,
       "opt": [
        "übertragen",
        "übertragt",
        "übertrug"
       ],
       "loesung": 0,
       "fest": true,
       "erklaerung": "Passiv mit „werden\" braucht das Partizip II: „übertragen\" (Infinitiv und Partizip sind gleich)."
      },
      {
       "frage": "Was passt in Lücke 5?",
       "luecke": 5,
       "opt": [
        "für die",
        "die",
        "für das"
       ],
       "loesung": 0,
       "fest": true,
       "erklaerung": "„etwas für die Aufgaben brauchen\": Präposition „für\" + Relativpronomen im Plural."
      },
      {
       "frage": "Was passt in Lücke 6?",
       "luecke": 6,
       "opt": [
        "anmelden",
        "angemeldet",
        "anzumelden"
       ],
       "loesung": 0,
       "fest": true,
       "erklaerung": "Nach dem Modalverb „müssen\" steht der Infinitiv ohne „zu\"."
      },
      {
       "frage": "Was passt in Lücke 7?",
       "luecke": 7,
       "opt": [
        "nachdem",
        "bevor",
        "während"
       ],
       "loesung": 0,
       "fest": true,
       "erklaerung": "Erst anmelden, dann ändern: Die Vorzeitigkeit („angemeldet haben\") passt zu „nachdem\"."
      },
      {
       "frage": "Was passt in Lücke 8?",
       "luecke": 8,
       "opt": [
        "auftreten",
        "auftritt",
        "aufgetreten"
       ],
       "loesung": 0,
       "fest": true,
       "erklaerung": "„Probleme\" ist Plural; im Nebensatz steht das trennbare Verb zusammen am Ende: „auftreten\"."
      },
      {
       "frage": "Was passt in Lücke 9?",
       "luecke": 9,
       "opt": [
        "um",
        "für",
        "über"
       ],
       "loesung": 0,
       "fest": true,
       "erklaerung": "Feste Verbindung: „um Verständnis bitten\"."
      },
      {
       "frage": "Was passt in Lücke 10?",
       "luecke": 10,
       "opt": [
        "einfacher",
        "einfach",
        "am einfachsten"
       ],
       "loesung": 0,
       "fest": true,
       "erklaerung": "Parallel zu „schneller\" wird ein Komparativ gebraucht: „einfacher\"."
      }
     ]
    },
    {
     "nr": 5,
     "art": "textwahl",
     "text": {
      "sorte": "brief",
      "quelle": "Brief",
      "titel": "Anfrage: Obstlieferung für das Büro",
      "zeilen": [
       "Sehr geehrte Frau Schäfer,",
       "unsere Firma möchte ihren Mitarbeitern in Zukunft jeden Tag frisches Obst __(1)__ Verfügung stellen. Ein Kollege hat uns Ihren Lieferservice __(2)__.",
       "Wir haben 60 Mitarbeiter an zwei __(3)__ in Kassel. Wir stellen uns vor, dass Sie uns zweimal pro Woche, __(4)__ montags und donnerstags, jeweils drei Kisten Obst liefern. Könnten Sie uns __(5)__ mitteilen, welche Obstsorten Sie im Winter anbieten? Wichtig ist uns, dass das Obst aus der __(6)__ kommt.",
       "Bitte schicken Sie uns ein __(7)__ Angebot mit Preisen für drei Monate. Gibt es einen Rabatt, wenn wir einen Vertrag für ein ganzes Jahr __(8)__? Gern würden wir __(9)__ einer Probelieferung beginnen.",
       "Über eine schnelle Antwort würden wir uns sehr __(10)__.",
       "Mit freundlichen Grüßen",
       "Markus Heinrich",
       "Personalabteilung"
      ]
     },
     "aufgaben": [
      {
       "frage": "Welches Wort passt in Lücke 1?",
       "luecke": 1,
       "opt": [
        "zur",
        "zum",
        "empfohlen",
        "empfiehlt",
        "Standorten",
        "Standort",
        "möglichst",
        "außerdem",
        "Region",
        "unverbindliches",
        "unverbindlicher",
        "abschließen",
        "mit",
        "freuen",
        "freut"
       ],
       "loesung": 0,
       "fest": true,
       "erklaerung": "„die Verfügung\" ist feminin: „zur Verfügung stellen\". Nach „an zwei\" steht der Dativ Plural „Standorten\"; „ein Angebot\" ist neutral, also „unverbindliches\". Feste Verbindungen: „einen Vertrag abschließen\", „mit etwas beginnen\"."
      },
      {
       "frage": "Welches Wort passt in Lücke 2?",
       "luecke": 2,
       "opt": [
        "zur",
        "zum",
        "empfohlen",
        "empfiehlt",
        "Standorten",
        "Standort",
        "möglichst",
        "außerdem",
        "Region",
        "unverbindliches",
        "unverbindlicher",
        "abschließen",
        "mit",
        "freuen",
        "freut"
       ],
       "loesung": 2,
       "fest": true,
       "erklaerung": "Richtig ist „empfohlen\". Jedes Wort passt nur einmal."
      },
      {
       "frage": "Welches Wort passt in Lücke 3?",
       "luecke": 3,
       "opt": [
        "zur",
        "zum",
        "empfohlen",
        "empfiehlt",
        "Standorten",
        "Standort",
        "möglichst",
        "außerdem",
        "Region",
        "unverbindliches",
        "unverbindlicher",
        "abschließen",
        "mit",
        "freuen",
        "freut"
       ],
       "loesung": 4,
       "fest": true,
       "erklaerung": "Richtig ist „Standorten\". Jedes Wort passt nur einmal."
      },
      {
       "frage": "Welches Wort passt in Lücke 4?",
       "luecke": 4,
       "opt": [
        "zur",
        "zum",
        "empfohlen",
        "empfiehlt",
        "Standorten",
        "Standort",
        "möglichst",
        "außerdem",
        "Region",
        "unverbindliches",
        "unverbindlicher",
        "abschließen",
        "mit",
        "freuen",
        "freut"
       ],
       "loesung": 6,
       "fest": true,
       "erklaerung": "Richtig ist „möglichst\". Jedes Wort passt nur einmal."
      },
      {
       "frage": "Welches Wort passt in Lücke 5?",
       "luecke": 5,
       "opt": [
        "zur",
        "zum",
        "empfohlen",
        "empfiehlt",
        "Standorten",
        "Standort",
        "möglichst",
        "außerdem",
        "Region",
        "unverbindliches",
        "unverbindlicher",
        "abschließen",
        "mit",
        "freuen",
        "freut"
       ],
       "loesung": 7,
       "fest": true,
       "erklaerung": "Richtig ist „außerdem\". Jedes Wort passt nur einmal."
      },
      {
       "frage": "Welches Wort passt in Lücke 6?",
       "luecke": 6,
       "opt": [
        "zur",
        "zum",
        "empfohlen",
        "empfiehlt",
        "Standorten",
        "Standort",
        "möglichst",
        "außerdem",
        "Region",
        "unverbindliches",
        "unverbindlicher",
        "abschließen",
        "mit",
        "freuen",
        "freut"
       ],
       "loesung": 8,
       "fest": true,
       "erklaerung": "Richtig ist „Region\". Jedes Wort passt nur einmal."
      },
      {
       "frage": "Welches Wort passt in Lücke 7?",
       "luecke": 7,
       "opt": [
        "zur",
        "zum",
        "empfohlen",
        "empfiehlt",
        "Standorten",
        "Standort",
        "möglichst",
        "außerdem",
        "Region",
        "unverbindliches",
        "unverbindlicher",
        "abschließen",
        "mit",
        "freuen",
        "freut"
       ],
       "loesung": 9,
       "fest": true,
       "erklaerung": "Richtig ist „unverbindliches\". Jedes Wort passt nur einmal."
      },
      {
       "frage": "Welches Wort passt in Lücke 8?",
       "luecke": 8,
       "opt": [
        "zur",
        "zum",
        "empfohlen",
        "empfiehlt",
        "Standorten",
        "Standort",
        "möglichst",
        "außerdem",
        "Region",
        "unverbindliches",
        "unverbindlicher",
        "abschließen",
        "mit",
        "freuen",
        "freut"
       ],
       "loesung": 11,
       "fest": true,
       "erklaerung": "Richtig ist „abschließen\". Jedes Wort passt nur einmal."
      },
      {
       "frage": "Welches Wort passt in Lücke 9?",
       "luecke": 9,
       "opt": [
        "zur",
        "zum",
        "empfohlen",
        "empfiehlt",
        "Standorten",
        "Standort",
        "möglichst",
        "außerdem",
        "Region",
        "unverbindliches",
        "unverbindlicher",
        "abschließen",
        "mit",
        "freuen",
        "freut"
       ],
       "loesung": 12,
       "fest": true,
       "erklaerung": "Richtig ist „mit\". Jedes Wort passt nur einmal."
      },
      {
       "frage": "Welches Wort passt in Lücke 10?",
       "luecke": 10,
       "opt": [
        "zur",
        "zum",
        "empfohlen",
        "empfiehlt",
        "Standorten",
        "Standort",
        "möglichst",
        "außerdem",
        "Region",
        "unverbindliches",
        "unverbindlicher",
        "abschließen",
        "mit",
        "freuen",
        "freut"
       ],
       "loesung": 13,
       "fest": true,
       "erklaerung": "Richtig ist „freuen\". Jedes Wort passt nur einmal."
      }
     ]
    }
   ]
  }
 ]
};
