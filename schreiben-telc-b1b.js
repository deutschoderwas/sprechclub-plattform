/* ============================================================
   deutschoderwas club — SCHREIBEN telc Deutsch B1+ Beruf

   Aufbau nach dem offiziellen telc-Format (Übungstest 1 B1+ Beruf,
   geprüft 02.11.2026). Alle Texte und Aufgaben eigene, Kontext
   Arbeitswelt. Erzeugt aus scratchpad/telcb1b mit bau.js.
   ============================================================ */

window.SCHREIBEN_TELC_B1B = {
 "niveau": "telcB1B",
 "pruefung": "telc Deutsch B1+ Beruf",
 "minuten": 30,
 "punkte": 45,
 "intro": "Bei telc B1+ Beruf schreibst du einen halbformellen Brief oder eine E-Mail aus dem Berufsleben — zum Beispiel eine Anfrage, eine Reklamation oder eine Bewerbung. Vier Leitpunkte müssen drin sein, eine Wahl gibt es nicht. Bewertet wird nach drei Kriterien (Leitpunkte, Gestaltung, Richtigkeit), je A bis D, mal drei: höchstens 45 Punkte. telc vergibt zusätzlich bis zu zwei Zusatzpunkte für sprachliche Vielfalt und Umfang — die zählen wir hier nicht mit.",
 "stufen": [
  {
   "nr": 1,
   "titel": "Der Geschäftsbrief",
   "zeichen": "🖼️",
   "was": "Betreff, Anrede, Gruß — und höflich anfragen und bitten."
  },
  {
   "nr": 2,
   "titel": "Die vier Punkte",
   "zeichen": "🧩",
   "was": "Leitpunkte ausbauen und verbinden, typische Fehler vermeiden."
  },
  {
   "nr": 3,
   "titel": "Briefe aus dem Beruf",
   "zeichen": "✉️",
   "was": "Acht Aufgaben mit Muster und Bewertung nach telc."
  },
  {
   "nr": 4,
   "titel": "Die Prüfung",
   "zeichen": "⏱️",
   "was": "Ein Brief, dreißig Minuten mit Uhr."
  }
 ],
 "bloecke": [
  {
   "id": "tbb1s1",
   "stufe": 1,
   "titel": "Briefkopf, Betreff, Anrede, Gruß",
   "kurz": "Der Rahmen eines Geschäftsbriefs sitzt in zehn Sekunden",
   "ziel": "Nach diesem Block baust du den Rahmen jeder beruflichen E-Mail sicher: klarer Betreff, passende Anrede, korrekter Gruß.",
   "zeichen": "✉️",
   "farbe": "turq",
   "aufgaben": [
    {
     "art": "wahl",
     "frage": "Du fragst bei einem Schulungsanbieter nach einem Erste-Hilfe-Kurs. Welcher Betreff ist am besten?",
     "opt": [
      "Frage",
      "Anfrage: Erste-Hilfe-Kurs für zwölf Mitarbeiter",
      "Hallo, ich habe eine Frage!"
     ],
     "loesung": 1,
     "erklaerung": "Ein guter Betreff sagt in wenigen Wörtern, worum es geht — der Empfänger sortiert so seine Post."
    },
    {
     "art": "wahl",
     "frage": "Du schreibst an eine Firma und kennst keinen Ansprechpartner. Welche Anrede passt?",
     "opt": [
      "Sehr geehrte Damen und Herren,",
      "Liebe Firma,",
      "Hallo zusammen,"
     ],
     "loesung": 0,
     "erklaerung": "Ohne Namen ist „Sehr geehrte Damen und Herren\" die sichere Standardform im Beruf."
    },
    {
     "art": "wahl",
     "frage": "Die Leiterin der Personalabteilung heißt Frau Brück. Welche Anrede ist richtig?",
     "opt": [
      "Sehr geehrter Frau Brück,",
      "Sehr geehrte Frau Brück,",
      "Sehr geehrte Brück,"
     ],
     "loesung": 1,
     "erklaerung": "„geehrte\" passt zu „Frau\", „geehrter\" zu „Herr\" — und der Titel „Frau\" darf nie fehlen."
    },
    {
     "art": "wahl",
     "frage": "Wie geht es nach der Anrede „Sehr geehrter Herr Tamm,\" weiter?",
     "opt": [
      "Vielen Dank für Ihr Angebot.",
      "vielen Dank für Ihr Angebot.",
      "Vielen dank für ihr Angebot."
     ],
     "loesung": 1,
     "erklaerung": "Nach dem Komma geht es klein weiter. „Ihr\" als Höflichkeitsform schreibst du aber groß."
    },
    {
     "art": "wahl",
     "frage": "Welcher Gruß ist in einer beruflichen E-Mail an einen Lieferanten üblich?",
     "opt": [
      "Mit freundlichen Grüßen",
      "Liebe Grüße und bis bald",
      "Tschüss"
     ],
     "loesung": 0,
     "erklaerung": "„Mit freundlichen Grüßen\" passt immer. Locker darf es im Geschäftsbrief nicht werden."
    },
    {
     "art": "wahl",
     "frage": "Was gehört unter den Gruß in einer E-Mail an einen Kunden?",
     "opt": [
      "Nur dein Vorname.",
      "Dein voller Name und die Firma.",
      "Gar nichts, die Adresse reicht."
     ],
     "loesung": 1,
     "erklaerung": "Im Beruf unterschreibst du mit Vor- und Nachnamen, oft mit Firma oder Abteilung darunter."
    },
    {
     "art": "wahl",
     "frage": "Du antwortest auf die E-Mail „Ihre Bestellung Nummer vierhundertzwölf\". Welcher Betreff passt?",
     "opt": [
      "Bestellung",
      "AW: Ihre Bestellung Nummer vierhundertzwölf",
      "Wichtig!!!"
     ],
     "loesung": 1,
     "erklaerung": "Bei einer Antwort übernimmst du den Betreff mit „AW:\" — dann ist der Zusammenhang sofort klar."
    },
    {
     "art": "wahl",
     "frage": "In welcher Reihenfolge steht ein Geschäftsbrief auf Papier?",
     "opt": [
      "Anrede, Betreff, Datum, Gruß",
      "Absender, Empfänger, Datum, Betreff, Anrede",
      "Gruß, Text, Anrede, Betreff"
     ],
     "loesung": 1,
     "erklaerung": "Erst die Adressen und das Datum, dann der Betreff ohne das Wort „Betreff\", danach die Anrede."
    },
    {
     "art": "wahl",
     "frage": "Wo steht das Komma bei „Mit freundlichen Grüßen\"?",
     "opt": [
      "Nach „Grüßen\" steht ein Komma.",
      "Nach „Grüßen\" steht kein Satzzeichen.",
      "Nach „freundlichen\" steht ein Komma."
     ],
     "loesung": 1,
     "erklaerung": "Nach der Grußformel steht im Deutschen kein Komma, darunter folgt direkt der Name."
    },
    {
     "art": "ordnen",
     "frage": "Bau die Grußformel mit Abteilung.",
     "teile": [
      "Mit",
      "freundlichen",
      "Grüßen",
      "Jana Petrović",
      "Lager und Versand"
     ],
     "loesung": [
      0,
      1,
      2,
      3,
      4
     ],
     "erklaerung": "Gruß, dann Name, dann Abteilung oder Firma — so weiß der Empfänger, wer schreibt."
    }
   ]
  },
  {
   "id": "tbb1s2",
   "stufe": 1,
   "titel": "Höflich anfragen und bitten",
   "kurz": "Konjunktiv, „ob\" und „wäre es möglich\" — so klingt eine Bitte professionell",
   "ziel": "Nach diesem Block formulierst du jede Bitte und jede Frage so, dass sie im Beruf freundlich und klar ankommt.",
   "zeichen": "🙏",
   "farbe": "gold",
   "aufgaben": [
    {
     "art": "wahl",
     "frage": "Du möchtest ein Angebot bekommen. Welcher Satz ist am höflichsten?",
     "opt": [
      "Schicken Sie mir ein Angebot.",
      "Könnten Sie mir bitte ein Angebot schicken?",
      "Ich will ein Angebot."
     ],
     "loesung": 1,
     "erklaerung": "„Könnten Sie … bitte\" ist die Standardform für eine höfliche Bitte im Beruf."
    },
    {
     "art": "wahl",
     "frage": "Welcher Satz fragt richtig nach einer Information?",
     "opt": [
      "Ich möchte wissen, ob der Kurs auch bei uns im Betrieb stattfinden kann.",
      "Ich möchte wissen, kann der Kurs bei uns stattfinden?",
      "Ich möchte wissen, ob der Kurs kann bei uns stattfinden."
     ],
     "loesung": 0,
     "erklaerung": "Nach „ob\" steht das Verb am Ende: … stattfinden kann."
    },
    {
     "art": "wahl",
     "frage": "Welche Bitte an die Teamleitung ist passend?",
     "opt": [
      "Gib mir frei!",
      "Wäre es möglich, dass ich am Freitag zwei Stunden früher gehe?",
      "Ich gehe am Freitag früher, okay?"
     ],
     "loesung": 1,
     "erklaerung": "„Wäre es möglich, dass …\" fragt vorsichtig und lässt der Chefin die Entscheidung."
    },
    {
     "art": "wahl",
     "frage": "Du willst bis zu einem bestimmten Tag eine Antwort. Welcher Satz passt?",
     "opt": [
      "Antworten Sie sofort!",
      "Ich wäre Ihnen dankbar, wenn Sie mir bis Freitag antworten könnten.",
      "Antwort bis Freitag oder nichts."
     ],
     "loesung": 1,
     "erklaerung": "Mit „Ich wäre Ihnen dankbar, wenn …\" setzt du eine Frist, ohne unhöflich zu sein."
    },
    {
     "art": "wahl",
     "frage": "Welches Wort fehlt? „Ich ___ gern wissen, wie viel die Schulung pro Person kostet.\"",
     "opt": [
      "würde",
      "werde",
      "wurde"
     ],
     "loesung": 0,
     "erklaerung": "„Ich würde gern wissen\" ist Konjunktiv — höflicher als „Ich will wissen\"."
    },
    {
     "art": "wahl",
     "frage": "Du bittest um Unterlagen. Welcher Satz ist richtig?",
     "opt": [
      "Bitte senden Sie mir die Unterlagen zu.",
      "Bitte senden Sie zu mir die Unterlagen.",
      "Bitte Sie senden mir die Unterlagen zu."
     ],
     "loesung": 0,
     "erklaerung": "Imperativ mit „Sie\": Verb vorn, dann „Sie\", das Präfix „zu\" am Ende."
    },
    {
     "art": "wahl",
     "frage": "Welcher Satz passt am besten in eine Anfrage an eine Spedition?",
     "opt": [
      "Sie fahren doch sowieso nach Hamburg.",
      "Wir benötigen einen Transport von zehn Paletten nach Hamburg.",
      "Transport, Hamburg, zehn Paletten."
     ],
     "loesung": 1,
     "erklaerung": "Klar und vollständig: wer braucht was wohin — in einem ganzen Satz."
    },
    {
     "art": "ordnen",
     "frage": "Bau die höfliche Bitte.",
     "teile": [
      "Könnten",
      "Sie",
      "mir",
      "bitte",
      "einen",
      "Termin",
      "vorschlagen?"
     ],
     "loesung": [
      0,
      1,
      2,
      3,
      4,
      5,
      6
     ],
     "erklaerung": "Fragesatz mit Modalverb: „Könnten\" vorn, das Infinitiv „vorschlagen\" ganz am Ende."
    },
    {
     "art": "ordnen",
     "frage": "Bau die indirekte Frage.",
     "teile": [
      "Ich",
      "möchte",
      "fragen,",
      "ob",
      "die Lieferung",
      "noch diese Woche",
      "kommt"
     ],
     "loesung": [
      0,
      1,
      2,
      3,
      4,
      5,
      6
     ],
     "erklaerung": "Im ob-Satz wandert das Verb ans Ende: … noch diese Woche kommt."
    },
    {
     "art": "ordnen",
     "frage": "Bau den Satz mit „wäre es möglich\".",
     "teile": [
      "Wäre",
      "es",
      "möglich,",
      "den Raum",
      "schon",
      "um achtzehn Uhr",
      "zu öffnen?"
     ],
     "loesung": [
      0,
      1,
      2,
      3,
      4,
      5,
      6
     ],
     "erklaerung": "Nach „Wäre es möglich\" folgt ein Infinitiv mit „zu\" am Satzende."
    }
   ]
  },
  {
   "id": "tbb1s3",
   "stufe": 2,
   "titel": "Leitpunkte ausbauen und verbinden",
   "kurz": "Aus einem Stichwort werden zwei, drei Sätze mit Grund und Beispiel",
   "ziel": "Nach diesem Block schreibst du zu jedem Leitpunkt mehr als einen Satz und verbindest die Punkte zu einem flüssigen Text.",
   "zeichen": "🔗",
   "farbe": "rot",
   "aufgaben": [
    {
     "art": "wahl",
     "frage": "Leitpunkt „Teilnehmerzahl\". Welche Antwort ist am besten ausgebaut?",
     "opt": [
      "Zwölf.",
      "Es sind zwölf Personen.",
      "An dem Kurs sollen zwölf Mitarbeiter aus Lager und Versand teilnehmen, weil dort die meisten Unfälle passieren."
     ],
     "loesung": 2,
     "erklaerung": "Zahl plus Erklärung — so wird aus einem Stichwort ein vollständiger Leitpunkt."
    },
    {
     "art": "wahl",
     "frage": "Du kommst zum zweiten Punkt deiner Reklamation. Welcher Übergang passt?",
     "opt": [
      "Außerdem ist mir aufgefallen, dass zwei Kartons beschädigt waren.",
      "Trotzdem sind zwei Kartons kaputt.",
      "Zum Schluss, Kartons."
     ],
     "loesung": 0,
     "erklaerung": "„Außerdem\" fügt einen neuen Punkt hinzu und klingt im Geschäftsbrief natürlich."
    },
    {
     "art": "wahl",
     "frage": "„Unser Lager ist im Dezember sehr voll. ___ brauchen wir die Lieferung bis Ende November.\"",
     "opt": [
      "Obwohl",
      "Deshalb",
      "Außerdem"
     ],
     "loesung": 1,
     "erklaerung": "„Deshalb\" zeigt die Folge, danach steht sofort das Verb."
    },
    {
     "art": "wahl",
     "frage": "„___ wir schon zweimal angerufen haben, hat sich niemand gemeldet.\"",
     "opt": [
      "Obwohl",
      "Deshalb",
      "Trotzdem"
     ],
     "loesung": 0,
     "erklaerung": "„obwohl\" leitet einen Nebensatz mit Gegensatz ein, das Verb steht am Ende."
    },
    {
     "art": "wahl",
     "frage": "Welcher Satz leitet den letzten Leitpunkt elegant ein?",
     "opt": [
      "Und noch was.",
      "Zum Schluss habe ich noch eine Frage zur Rechnung.",
      "Letzter Punkt: Rechnung."
     ],
     "loesung": 1,
     "erklaerung": "„Zum Schluss habe ich noch eine Frage zu …\" zeigt klar: Das ist der letzte Punkt."
    },
    {
     "art": "wahl",
     "frage": "Leitpunkt „Grund für die Weiterbildung\". Welche Antwort reicht für die volle Punktzahl?",
     "opt": [
      "Ich will mich weiterbilden.",
      "Weiterbildung ist gut.",
      "Ich möchte den Excel-Kurs besuchen, weil ich seit Kurzem die Lagerlisten führe und dabei viel Zeit verliere."
     ],
     "loesung": 2,
     "erklaerung": "Ein konkreter Grund aus deinem Arbeitsalltag macht den Punkt überzeugend."
    },
    {
     "art": "wahl",
     "frage": "Wie verbindest du zwei Vorschläge? „Wir könnten den Kurs an einem Samstag machen, ___ wir könnten ihn auf zwei Nachmittage verteilen.\"",
     "opt": [
      "weil",
      "oder",
      "damit"
     ],
     "loesung": 1,
     "erklaerung": "„oder\" verbindet zwei Möglichkeiten und ändert die Wortstellung nicht."
    },
    {
     "art": "ordnen",
     "frage": "Bau den Satz mit „damit\".",
     "teile": [
      "Bitte",
      "schicken",
      "Sie",
      "uns",
      "die Rechnung,",
      "damit",
      "wir",
      "sie",
      "pünktlich",
      "bezahlen",
      "können"
     ],
     "loesung": [
      0,
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10
     ],
     "erklaerung": "„damit\" nennt das Ziel, im Nebensatz steht das gebeugte Verb ganz am Ende."
    },
    {
     "art": "ordnen",
     "frage": "Bau den Satz mit „deshalb\".",
     "teile": [
      "Wir",
      "haben",
      "im Moment",
      "viele Aufträge,",
      "deshalb",
      "brauchen",
      "wir",
      "die Kleidung",
      "schnell"
     ],
     "loesung": [
      0,
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8
     ],
     "erklaerung": "Nach „deshalb\" kommt das Verb auf Position zwei, dann das Subjekt."
    },
    {
     "art": "ordnen",
     "frage": "Bau den Satz mit „falls\".",
     "teile": [
      "Falls",
      "Sie",
      "noch",
      "Fragen",
      "haben,",
      "rufen",
      "Sie",
      "mich",
      "gern",
      "an"
     ],
     "loesung": [
      0,
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9
     ],
     "erklaerung": "Nach dem falls-Satz beginnt der Hauptsatz direkt mit dem Verb: rufen Sie …"
    }
   ]
  },
  {
   "id": "tbb1s4",
   "stufe": 2,
   "titel": "Typische Fehler im beruflichen Brief",
   "kurz": "Du-Sie-Wechsel, fehlende Leitpunkte, zu locker, zu kurz",
   "ziel": "Nach diesem Block findest du die häufigsten Fehler in beruflichen E-Mails selbst — bevor sie dich Punkte kosten.",
   "zeichen": "🔍",
   "farbe": "lila",
   "aufgaben": [
    {
     "art": "wahl",
     "frage": "E-Mail an die Spedition, beginnt mit „Sehr geehrte Damen und Herren,\". Später steht: „Kannst du mir den Preis sagen?\" Was ist falsch?",
     "opt": [
      "Nichts, das ist in Ordnung.",
      "Wechsel von „Sie\" zu „du\" — das Register stimmt nicht mehr.",
      "Der Satz ist zu kurz."
     ],
     "loesung": 1,
     "erklaerung": "Wer mit „Sehr geehrte\" beginnt, bleibt bis zum Ende beim „Sie\": Können Sie mir den Preis nennen?"
    },
    {
     "art": "wahl",
     "frage": "Welcher Satz ist für eine Reklamation zu unhöflich?",
     "opt": [
      "Leider müssen wir die Lieferung reklamieren.",
      "Ihre Firma ist total unfähig!",
      "Wir bitten Sie, die Ware zu ersetzen."
     ],
     "loesung": 1,
     "erklaerung": "Auch wenn du dich ärgerst: Sachlich bleiben. Beleidigungen kosten Punkte in der Kommunikation."
    },
    {
     "art": "wahl",
     "frage": "Leitpunkt: „Nenne einen Liefertermin.\" Satz: „Der Liefertermin ist für uns sehr wichtig.\"",
     "opt": [
      "Punkt behandelt.",
      "Nur erwähnt — es fehlt ein konkreter Termin.",
      "Falsches Register."
     ],
     "loesung": 1,
     "erklaerung": "Das Wort steht da, aber kein Datum. Besser: „Wir brauchen die Ware spätestens am Freitag.\""
    },
    {
     "art": "wahl",
     "frage": "Welcher Fehler steckt in „Ich schreibe Ihnen, weil ich habe eine Frage.\"?",
     "opt": [
      "Das Verb steht nach „weil\" nicht am Ende.",
      "„Ihnen\" muss klein sein.",
      "Es fehlt ein Betreff."
     ],
     "loesung": 0,
     "erklaerung": "Richtig ist: „…, weil ich eine Frage habe.\" Im weil-Satz steht das Verb am Ende."
    },
    {
     "art": "wahl",
     "frage": "Welche Grußformel passt NICHT in eine E-Mail an die Personalabteilung?",
     "opt": [
      "Mit freundlichen Grüßen",
      "Freundliche Grüße",
      "Hdl, bis morgen!"
     ],
     "loesung": 2,
     "erklaerung": "Abkürzungen und Chat-Sprache gehören nie in eine berufliche E-Mail."
    },
    {
     "art": "wahl",
     "frage": "Antwort an einen unzufriedenen Kunden. Leitpunkt: „Entschuldige dich.\" Satz: „Das war nicht unsere Schuld.\"",
     "opt": [
      "Punkt behandelt.",
      "Punkt verfehlt — keine Entschuldigung, und der Ton ist abweisend.",
      "Nur zu kurz."
     ],
     "loesung": 1,
     "erklaerung": "Gefragt ist eine Entschuldigung: „Es tut uns sehr leid, dass Sie warten mussten.\""
    },
    {
     "art": "wahl",
     "frage": "Was ist am Text „Hallo, ich will Urlaub im August. Tschüss, Ali\" falsch?",
     "opt": [
      "Nur die Rechtschreibung.",
      "Zu locker, zu kurz und ohne Zeitraum, Grund und Vertretung.",
      "Gar nichts."
     ],
     "loesung": 1,
     "erklaerung": "Ein Urlaubsantrag braucht höfliche Form, konkrete Daten und eine Lösung für die Vertretung."
    },
    {
     "art": "wahl",
     "frage": "Welcher Satz enthält einen Fehler bei der Großschreibung?",
     "opt": [
      "Wir danken Ihnen für Ihre Geduld.",
      "Können sie mir bitte helfen?",
      "Ich freue mich auf Ihre Antwort."
     ],
     "loesung": 1,
     "erklaerung": "Die Höflichkeitsform „Sie\" schreibt man immer groß, auch mitten im Satz."
    },
    {
     "art": "wahl",
     "frage": "Leitpunkt: „Frag nach dem Preis.\" Satz: „Was kostet die Schulung für zwölf Personen, und ist das Material im Preis enthalten?\"",
     "opt": [
      "Punkt behandelt.",
      "Nur erwähnt.",
      "Falsches Register."
     ],
     "loesung": 0,
     "erklaerung": "Eine klare Frage mit Detail — so ist der Leitpunkt voll erfüllt."
    },
    {
     "art": "wahl",
     "frage": "Was ist das Problem, wenn du die vier Leitpunkte nur als Liste aufschreibst?",
     "opt": [
      "Kein Problem, das ist kürzer.",
      "Der Text wirkt wie ein Formular — Verknüpfung und Textsorte fehlen.",
      "Die Liste ist zu lang."
     ],
     "loesung": 1,
     "erklaerung": "Bewertet wird auch, ob dein Text zusammenhängt. Verbinde die Punkte mit „außerdem\", „deshalb\", „zum Schluss\"."
    }
   ]
  }
 ],
 "teile": [
  {
   "nr": 1,
   "art": "mitteilung",
   "name": "Brief oder E-Mail im Beruf",
   "kurz": "Halbformell, vier Leitpunkte",
   "was": "Du schreibst einen halbformellen Brief oder eine E-Mail: an eine Firma, einen Kunden, die Personalabteilung. Alle vier Leitpunkte müssen vorkommen.",
   "tipp": "Im Beruf zählt Klarheit: Worum geht es, was brauchst du bis wann, wie erreicht man dich. Jeder Punkt ein eigener Absatz.",
   "zeichen": "💼",
   "farbe": "turq",
   "punkte": 45,
   "runden": [
    {
     "id": "tb1bsr1",
     "titel": "Runde 1",
     "aufgaben": [
      {
       "id": "bb1sa1",
       "typ": "halbformell",
       "situation": "Du arbeitest in einer Spedition. Dein Chef möchte, dass die Mitarbeiter im Lager einen Erste-Hilfe-Kurs machen. Er hat dir eine Notiz geschrieben. Schreib eine E-Mail an das Bildungszentrum und fordere ein Angebot an.",
       "eingang": {
        "von": "Herr Kessler",
        "betreff": "Notiz: Erste-Hilfe-Kurs",
        "text": "Hallo Frau Adeyemi,\nwir müssen dringend einen Erste-Hilfe-Kurs für das Lager organisieren. Zwölf Kollegen sollten teilnehmen, am besten noch vor Weihnachten.\nIch habe eine Anzeige vom Bildungszentrum Weserland gesehen. Bitte fragen Sie dort nach einem Angebot. Wichtig wäre, dass der Trainer zu uns in den Betrieb kommt, dann verlieren wir weniger Arbeitszeit.\nFragen Sie auch nach dem Preis und ob es eine Bescheinigung gibt.\nDanke!\nK. Kessler"
       },
       "sorte": "email",
       "an": "Bildungszentrum Weserland",
       "betreff": "Anfrage: Erste-Hilfe-Kurs für unseren Betrieb",
       "punkte": [
        {
         "nr": 1,
         "was": "Firma und Anlass",
         "hinweis": "Stell kurz deine Firma vor und sag, warum du schreibst."
        },
        {
         "nr": 2,
         "was": "Teilnehmer und Zeitraum",
         "hinweis": "Nenne die Zahl der Teilnehmer und den gewünschten Zeitraum."
        },
        {
         "nr": 3,
         "was": "Kurs im Betrieb",
         "hinweis": "Frag, ob der Kurs bei euch in der Firma stattfinden kann."
        },
        {
         "nr": 4,
         "was": "Preis und Bescheinigung",
         "hinweis": "Frag nach den Kosten und nach einer Bescheinigung."
        }
       ],
       "muster": "Sehr geehrte Damen und Herren,\nich arbeite in der Verwaltung der Spedition Kessler. Wir haben Ihre Anzeige gesehen und interessieren uns für einen Erste-Hilfe-Kurs für unsere Mitarbeiter.\nAn dem Kurs sollen zwölf Kollegen aus dem Lager teilnehmen. Dort arbeiten wir mit Gabelstaplern und schweren Paletten, deshalb ist Erste Hilfe für uns besonders wichtig. Am liebsten würden wir den Kurs noch vor Weihnachten machen, also im November oder Anfang Dezember.\nAußerdem möchte ich fragen, ob der Trainer zu uns in den Betrieb kommen kann. Wir haben einen großen Besprechungsraum mit Beamer. So müssten unsere Mitarbeiter nicht fahren und könnten direkt danach weiterarbeiten.\nZum Schluss hätte ich noch zwei Fragen: Was kostet der Kurs für zwölf Personen, und bekommen die Teilnehmer am Ende eine Bescheinigung?\nIch würde mich über ein Angebot bis Ende des Monats sehr freuen.\nMit freundlichen Grüßen\nAmara Adeyemi\nSpedition Kessler, Verwaltung",
       "woerter": 150,
       "hilfen": [
        "Wir haben Ihre Anzeige gesehen und interessieren uns für …",
        "An dem Kurs sollen … teilnehmen.",
        "Am liebsten würden wir …",
        "Außerdem möchte ich fragen, ob …",
        "Was kostet …, und bekommen die Teilnehmer …?",
        "Ich würde mich über ein Angebot bis … sehr freuen."
       ],
       "erklaerung": "Eine Anfrage ist erst vollständig, wenn der Anbieter daraus ein Angebot machen kann: wer, wie viele, wann, wo.",
       "telc": true,
       "max": 45,
       "niveauTelc": "B1"
      },
      {
       "id": "bb1sa2",
       "typ": "halbformell",
       "situation": "Du arbeitest im Büro einer Physiotherapiepraxis. Die neuen Bürostühle sind geliefert worden, aber es gibt Probleme. Deine Chefin hat dir eine Notiz hingelegt. Schreib eine E-Mail an den Lieferanten.",
       "eingang": {
        "von": "Frau Dr. Sommer",
        "betreff": "Notiz: Lieferung Bürostühle",
        "text": "Liebe Frau Ivanova,\nheute sind die sechs Bürostühle von der Firma Büroland gekommen. Leider sind zwei Stühle beschädigt: Bei einem ist die Lehne gebrochen, beim anderen fehlt ein Rad. Außerdem haben wir Schwarz bestellt, aber zwei Stühle sind grau.\nBitte schreiben Sie an Büroland und reklamieren Sie das. Wir brauchen die Stühle spätestens in zwei Wochen, dann fängt die neue Kollegin an.\nDanke!\nB. Sommer"
       },
       "sorte": "email",
       "an": "Firma Büroland, Kundenservice",
       "betreff": "Reklamation: Lieferung von sechs Bürostühlen",
       "punkte": [
        {
         "nr": 1,
         "was": "Bestellung",
         "hinweis": "Nenne die Bestellung und wann die Lieferung gekommen ist."
        },
        {
         "nr": 2,
         "was": "Mängel",
         "hinweis": "Beschreib genau, was nicht in Ordnung ist."
        },
        {
         "nr": 3,
         "was": "Forderung",
         "hinweis": "Sag, was die Firma tun soll und bis wann."
        },
        {
         "nr": 4,
         "was": "Rücksendung",
         "hinweis": "Frag, wie die beschädigten Stühle zurückgehen."
        }
       ],
       "muster": "Sehr geehrte Damen und Herren,\nwir haben bei Ihnen sechs schwarze Bürostühle bestellt. Die Lieferung ist heute Vormittag bei uns in der Praxis angekommen. Leider müssen wir sie reklamieren.\nZwei Stühle sind beschädigt. Bei einem ist die Lehne gebrochen, beim anderen fehlt ein Rad, deshalb kann man ihn nicht benutzen. Außerdem haben wir zwei Stühle in Grau bekommen, obwohl wir ausdrücklich Schwarz bestellt hatten.\nWir bitten Sie, uns vier neue schwarze Stühle zu schicken, also zwei als Ersatz für die kaputten und zwei statt der grauen. Wir brauchen die Stühle spätestens in zwei Wochen, weil dann eine neue Kollegin bei uns anfängt.\nZum Schluss möchte ich fragen, wie wir die falschen und beschädigten Stühle zurückschicken sollen. Holt Ihr Fahrer sie bei der neuen Lieferung ab?\nIch freue mich auf Ihre schnelle Antwort.\nMit freundlichen Grüßen\nOlga Ivanova\nPraxis für Physiotherapie Sommer",
       "woerter": 150,
       "hilfen": [
        "Leider müssen wir die Lieferung reklamieren.",
        "Zwei Stühle sind beschädigt: …",
        "Außerdem haben wir … bekommen, obwohl …",
        "Wir bitten Sie, uns … zu schicken.",
        "Wir brauchen … spätestens …, weil …",
        "Holt Ihr Fahrer … ab?"
       ],
       "erklaerung": "Eine gute Reklamation bleibt sachlich, beschreibt die Mängel genau und sagt klar, was du erwartest.",
       "telc": true,
       "max": 45,
       "niveauTelc": "B1"
      }
     ]
    },
    {
     "id": "tb1bsr2",
     "titel": "Runde 2",
     "aufgaben": [
      {
       "id": "bb1sa3",
       "typ": "halbformell",
       "situation": "Du hast eine Anzeige für ein Praktikum gelesen. Schreib eine Bewerbung an das Hotel.",
       "eingang": {
        "von": "Hotel Seeblick",
        "betreff": "Anzeige: Praktikum an der Rezeption",
        "text": "Hotel Seeblick am Kranichsee sucht ab Frühjahr\nPRAKTIKANTEN AN DER REZEPTION (drei Monate)\nSie begrüßen unsere Gäste, helfen beim Check-in und Check-out und beantworten Fragen am Telefon.\nSie bringen mit: freundliches Auftreten, gute Deutschkenntnisse, gern weitere Sprachen, erste Erfahrung mit Kunden.\nWir bieten: ein nettes Team, Praktikumsvergütung, Zimmer im Personalhaus möglich.\nBewerbungen bitte per E-Mail an Herrn Wendt, Empfangsleitung."
       },
       "sorte": "email",
       "an": "Herr Wendt",
       "betreff": "Bewerbung um ein Praktikum an der Rezeption",
       "punkte": [
        {
         "nr": 1,
         "was": "Grund der Bewerbung",
         "hinweis": "Erkläre, warum du dich für das Praktikum interessierst."
        },
        {
         "nr": 2,
         "was": "Erfahrungen und Kenntnisse",
         "hinweis": "Beschreib deine Erfahrung und deine Sprachen."
        },
        {
         "nr": 3,
         "was": "Zeitraum",
         "hinweis": "Sag, ab wann und wie lange du kannst."
        },
        {
         "nr": 4,
         "was": "Unterkunft",
         "hinweis": "Frag nach dem Zimmer im Personalhaus."
        }
       ],
       "muster": "Sehr geehrter Herr Wendt,\nmit großem Interesse habe ich Ihre Anzeige gelesen und bewerbe mich hiermit um ein Praktikum an der Rezeption. Ich möchte später im Hotel arbeiten, deshalb wäre dieses Praktikum ein wichtiger Schritt für mich.\nIn meiner Heimat Georgien habe ich zwei Jahre in einem Reisebüro gearbeitet. Dort habe ich Kunden beraten, Buchungen gemacht und viel telefoniert. Neben Georgisch spreche ich Russisch, Englisch und inzwischen recht gut Deutsch. Im Moment besuche ich einen Berufssprachkurs.\nMein Kurs endet im März, deshalb könnte ich ab Anfang April bei Ihnen anfangen. Die drei Monate passen sehr gut, weil ich im Juli eine Ausbildung beginnen möchte.\nAußerdem habe ich eine Frage: Ist im Personalhaus noch ein Zimmer frei, und was kostet es im Monat? Ich wohne zurzeit weit vom Kranichsee entfernt.\nÜber eine Einladung zu einem Gespräch würde ich mich sehr freuen.\nMit freundlichen Grüßen\nNino Beridze",
       "woerter": 150,
       "hilfen": [
        "Mit großem Interesse habe ich Ihre Anzeige gelesen.",
        "Ich bewerbe mich hiermit um …",
        "In meiner Heimat habe ich … gearbeitet.",
        "Ich könnte ab … bei Ihnen anfangen.",
        "Ist im Personalhaus noch ein Zimmer frei?",
        "Über eine Einladung zu einem Gespräch würde ich mich sehr freuen."
       ],
       "erklaerung": "Eine Bewerbung verbindet die Anforderungen der Anzeige mit deinen eigenen Erfahrungen — Punkt für Punkt.",
       "telc": true,
       "max": 45,
       "niveauTelc": "B1"
      },
      {
       "id": "bb1sa4",
       "typ": "halbformell",
       "situation": "Du arbeitest bei einem Hersteller von Küchenmaschinen. Deine Teamleiterin bittet dich per E-Mail, eine Spedition für einen Transport zu einer Messe anzufragen.",
       "eingang": {
        "von": "Frau Lorenz",
        "betreff": "Transport zur Messe in Leipzig",
        "text": "Hallo Herr Haddad,\nfür die Messe in Leipzig müssen wir unseren Stand und acht Vorführgeräte transportieren, insgesamt etwa sechs Paletten. Die Ware muss am Montag, den 9. März, bis zehn Uhr dort sein.\nKönnten Sie bitte bei der Spedition Nordfracht ein Angebot anfragen? Die Geräte sind teuer und empfindlich, deshalb ist eine Versicherung wichtig. Nach der Messe muss alles wieder zurück zu uns.\nVielen Dank!\nSabine Lorenz"
       },
       "sorte": "email",
       "an": "Spedition Nordfracht",
       "betreff": "Anfrage: Transport von sechs Paletten zur Messe nach Leipzig",
       "punkte": [
        {
         "nr": 1,
         "was": "Ware",
         "hinweis": "Beschreib, was transportiert werden soll."
        },
        {
         "nr": 2,
         "was": "Termin und Ort",
         "hinweis": "Nenne Ziel, Datum und Uhrzeit."
        },
        {
         "nr": 3,
         "was": "Versicherung",
         "hinweis": "Frag nach einer Versicherung für die Geräte."
        },
        {
         "nr": 4,
         "was": "Rücktransport und Preis",
         "hinweis": "Bitte um ein Angebot für Hin- und Rückfahrt."
        }
       ],
       "muster": "Sehr geehrte Damen und Herren,\nwir sind ein Hersteller von Küchenmaschinen und stellen im März auf der Messe in Leipzig aus. Für diesen Termin suchen wir eine zuverlässige Spedition.\nTransportiert werden soll unser Messestand und acht Vorführgeräte, insgesamt ungefähr sechs Paletten. Die Ware muss am Montag der Messewoche bis spätestens zehn Uhr am Messegelände sein, weil wir danach den Stand aufbauen.\nDie Geräte sind sehr wertvoll und empfindlich. Deshalb möchte ich fragen, ob Sie eine Transportversicherung anbieten und was sie zusätzlich kostet.\nNach der Messe muss alles wieder zu uns zurück, voraussichtlich am Freitagabend. Könnten Sie uns bitte ein Angebot für die Hin- und die Rückfahrt schicken? Ich wäre Ihnen dankbar, wenn wir es bis Ende nächster Woche bekommen könnten.\nFür Rückfragen erreichen Sie mich gern telefonisch.\nMit freundlichen Grüßen\nKarim Haddad\nVertrieb",
       "woerter": 150,
       "hilfen": [
        "Für diesen Termin suchen wir …",
        "Transportiert werden soll …",
        "Die Ware muss bis spätestens … sein, weil …",
        "Ich möchte fragen, ob Sie … anbieten.",
        "Könnten Sie uns bitte ein Angebot für … schicken?",
        "Für Rückfragen erreichen Sie mich gern …"
       ],
       "erklaerung": "Bei einer Anfrage an eine Spedition zählen Fakten: was, wie viel, wohin, bis wann — und was zusätzlich gebraucht wird.",
       "telc": true,
       "max": 45,
       "niveauTelc": "B1"
      }
     ]
    },
    {
     "id": "tb1bsr3",
     "titel": "Runde 3",
     "aufgaben": [
      {
       "id": "bb1sa5",
       "typ": "halbformell",
       "situation": "Du arbeitest im Lager eines Online-Händlers. Die Personalabteilung hat eine Rundmail zu Weiterbildungen geschickt. Schreib eine E-Mail an Frau Brück und bitte um eine Weiterbildung.",
       "eingang": {
        "von": "Frau Brück",
        "betreff": "Weiterbildungen im neuen Jahr",
        "text": "Liebe Mitarbeiter,\nauch im nächsten Jahr unterstützen wir Ihre berufliche Weiterbildung. Möglich sind zum Beispiel Kurse zu Excel, Kommunikation, Arbeitssicherheit oder ein Staplerschein.\nWenn Sie Interesse haben, schreiben Sie mir bitte bis zum 15. Dezember. Nennen Sie den Kurs und erklären Sie kurz, warum er für Ihre Arbeit wichtig ist. Bitte sprechen Sie vorher auch mit Ihrer Teamleitung.\nMit freundlichen Grüßen\nHelga Brück\nPersonalabteilung"
       },
       "sorte": "email",
       "an": "Frau Brück",
       "betreff": "AW: Weiterbildungen im neuen Jahr",
       "punkte": [
        {
         "nr": 1,
         "was": "Kurs",
         "hinweis": "Sag, welche Weiterbildung du machen möchtest."
        },
        {
         "nr": 2,
         "was": "Grund",
         "hinweis": "Erkläre, warum der Kurs für deine Arbeit wichtig ist."
        },
        {
         "nr": 3,
         "was": "Teamleitung",
         "hinweis": "Schreib, was deine Teamleitung dazu sagt."
        },
        {
         "nr": 4,
         "was": "Organisation",
         "hinweis": "Frag, ob der Kurs während der Arbeitszeit stattfindet."
        }
       ],
       "muster": "Sehr geehrte Frau Brück,\nvielen Dank für Ihre Information über die Weiterbildungen. Ich interessiere mich sehr für den Staplerschein und möchte mich hiermit dafür anmelden.\nIch arbeite seit einem Jahr im Wareneingang. Dort kommen jeden Tag viele Paletten an, aber im Moment darf ich den Stapler nicht fahren. Deshalb muss ich oft warten, bis ein Kollege Zeit hat. Mit dem Staplerschein könnte ich viel selbstständiger arbeiten, und das Team hätte weniger Stress.\nIch habe schon mit meinem Teamleiter, Herrn Okoro, gesprochen. Er findet die Idee sehr gut und meint, dass wir dringend mehr Staplerfahrer brauchen.\nZum Schluss habe ich noch eine Frage zur Organisation: Findet der Kurs während der Arbeitszeit statt, oder muss ich dafür Urlaub nehmen? Ich arbeite nämlich im Schichtdienst.\nIch freue mich auf Ihre Antwort.\nMit freundlichen Grüßen\nTomasz Wiśniewski\nWareneingang",
       "woerter": 150,
       "hilfen": [
        "Vielen Dank für Ihre Information über …",
        "Ich interessiere mich sehr für …",
        "Mit dem Kurs könnte ich …",
        "Ich habe schon mit … gesprochen. Er findet …",
        "Findet der Kurs während der Arbeitszeit statt, oder …?",
        "Ich freue mich auf Ihre Antwort."
       ],
       "erklaerung": "Die Personalabteilung entscheidet nach dem Nutzen für die Firma — zeig ihn mit einem Beispiel aus deinem Alltag.",
       "telc": true,
       "max": 45,
       "niveauTelc": "B1"
      },
      {
       "id": "bb1sa6",
       "typ": "halbformell",
       "situation": "Du arbeitest im Büro einer Firma für Heizung und Sanitär. Ein Kunde hat sich beschwert. Dein Chef bittet dich, ihm zu antworten.",
       "eingang": {
        "von": "Herr Baumgart",
        "betreff": "Beschwerde über Ihren Monteur",
        "text": "Sehr geehrte Damen und Herren,\ngestern sollte Ihr Monteur um acht Uhr meine Heizung reparieren. Ich habe mir extra frei genommen. Er kam aber erst um elf Uhr, ohne anzurufen. Dann hat er nach einer Stunde gesagt, dass ein Ersatzteil fehlt, und ist gegangen. Im Flur hat er außerdem Schmutz hinterlassen.\nDie Heizung funktioniert immer noch nicht, und es ist kalt. Ich erwarte eine schnelle Lösung.\nMit freundlichen Grüßen\nWerner Baumgart"
       },
       "sorte": "email",
       "an": "Herr Baumgart",
       "betreff": "AW: Beschwerde über Ihren Monteur",
       "punkte": [
        {
         "nr": 1,
         "was": "Entschuldigung",
         "hinweis": "Entschuldige dich im Namen der Firma."
        },
        {
         "nr": 2,
         "was": "Erklärung",
         "hinweis": "Erkläre, warum der Monteur zu spät kam."
        },
        {
         "nr": 3,
         "was": "Neuer Termin",
         "hinweis": "Biete einen schnellen neuen Termin an."
        },
        {
         "nr": 4,
         "was": "Ausgleich",
         "hinweis": "Mach ein Angebot als Entschuldigung."
        }
       ],
       "muster": "Sehr geehrter Herr Baumgart,\nvielen Dank für Ihre E-Mail. Es tut uns sehr leid, dass Sie so lange warten mussten und dass Ihre Heizung immer noch nicht funktioniert. Das hätte nicht passieren dürfen.\nUnser Monteur hatte am Morgen einen Notfall bei einer älteren Kundin, bei der Wasser aus einem Rohr gelaufen ist. Trotzdem hätte er Sie natürlich anrufen müssen. Wir haben mit ihm darüber gesprochen. Auch für den Schmutz im Flur entschuldigen wir uns.\nDas Ersatzteil ist inzwischen bei uns angekommen. Deshalb können wir Ihnen schon morgen früh einen neuen Termin anbieten. Unser Meister kommt dann selbst zu Ihnen und ruft vorher an.\nAls kleine Entschuldigung berechnen wir Ihnen die Anfahrt nicht, und Sie bekommen außerdem die nächste Wartung zum halben Preis.\nBitte sagen Sie uns kurz, ob der Termin passt.\nMit freundlichen Grüßen\nLeyla Arslan\nKundenservice",
       "woerter": 150,
       "hilfen": [
        "Es tut uns sehr leid, dass …",
        "Das hätte nicht passieren dürfen.",
        "Unser Monteur hatte …, trotzdem hätte er …",
        "Deshalb können wir Ihnen … anbieten.",
        "Als kleine Entschuldigung …",
        "Bitte sagen Sie uns kurz, ob …"
       ],
       "erklaerung": "Bei einer Beschwerde zählen drei Dinge: ehrliche Entschuldigung, konkrete Lösung, freundlicher Ausgleich.",
       "telc": true,
       "max": 45,
       "niveauTelc": "B1"
      }
     ]
    },
    {
     "id": "tb1bsr4",
     "titel": "Runde 4",
     "aufgaben": [
      {
       "id": "bb1sa7",
       "typ": "halbformell",
       "situation": "Deine Firma möchte im Dezember eine Betriebsfeier machen. Du hast die Anzeige eines Gasthauses gefunden. Schreib eine Anfrage an das Gasthaus.",
       "eingang": {
        "von": "Gasthaus Zur Linde",
        "betreff": "Anzeige: Feiern bei uns",
        "text": "Gasthaus Zur Linde — Ihr Ort für Feiern aller Art\nUnser Festsaal bietet Platz für bis zu achtzig Personen. Ob Geburtstag, Hochzeit oder Betriebsfeier: Wir kochen regionale Küche, auf Wunsch auch vegetarisch, und kümmern uns um die Dekoration.\nMusikanlage und Beamer vorhanden.\nFür Gruppen ab zwanzig Personen machen wir Ihnen gern ein persönliches Angebot.\nAnfragen bitte per E-Mail an Familie Gruber."
       },
       "sorte": "email",
       "an": "Familie Gruber",
       "betreff": "Anfrage: Festsaal für unsere Weihnachtsfeier",
       "punkte": [
        {
         "nr": 1,
         "was": "Anlass und Gäste",
         "hinweis": "Nenne den Anlass und die Zahl der Gäste."
        },
        {
         "nr": 2,
         "was": "Termin",
         "hinweis": "Schlag ein Datum und eine Uhrzeit vor."
        },
        {
         "nr": 3,
         "was": "Essen",
         "hinweis": "Beschreib eure Wünsche zum Essen."
        },
        {
         "nr": 4,
         "was": "Technik und Preis",
         "hinweis": "Frag nach Musik, Beamer und Kosten."
        }
       ],
       "muster": "Sehr geehrte Familie Gruber,\nwir haben Ihre Anzeige gelesen und möchten gern unsere Weihnachtsfeier bei Ihnen machen. Ich arbeite in einer Firma für Gebäudereinigung, und wir sind ungefähr fünfundvierzig Personen.\nAm liebsten würden wir am Freitag vor dem dritten Advent feiern, ab neunzehn Uhr. Wäre der Festsaal an diesem Abend noch frei? Falls nicht, wäre auch der Samstag möglich.\nBeim Essen wünschen wir uns ein Buffet mit regionalen Gerichten. Einige Kollegen essen kein Fleisch, deshalb brauchen wir auch zwei oder drei vegetarische Gerichte. Außerdem essen manche Kollegen kein Schweinefleisch.\nWir möchten am Abend auch ein paar Fotos aus dem Jahr zeigen und später tanzen. Darf man Ihre Musikanlage und den Beamer kostenlos benutzen? Und könnten Sie uns bitte ein Angebot mit dem Preis pro Person schicken, mit und ohne Getränke?\nVielen Dank im Voraus.\nMit freundlichen Grüßen\nMarta Kowalczyk\nFirma Glanzwerk",
       "woerter": 150,
       "hilfen": [
        "Wir möchten gern unsere … bei Ihnen machen.",
        "Wir sind ungefähr … Personen.",
        "Wäre der Festsaal am … noch frei?",
        "Einige Kollegen …, deshalb brauchen wir …",
        "Darf man … benutzen?",
        "Könnten Sie uns bitte ein Angebot … schicken?"
       ],
       "erklaerung": "Je genauer deine Anfrage ist, desto schneller kann das Gasthaus ein passendes Angebot machen.",
       "telc": true,
       "max": 45,
       "niveauTelc": "B1"
      },
      {
       "id": "bb1sa8",
       "typ": "halbformell",
       "situation": "Du arbeitest in einem Pflegeheim. Deine Stationsleitung hat dir eine Notiz geschrieben. Bestell bei der Firma Textil Hansen neue Arbeitskleidung.",
       "eingang": {
        "von": "Frau Petersen",
        "betreff": "Notiz: neue Arbeitskleidung",
        "text": "Hallo Herr Mensah,\nab Januar haben wir drei neue Kollegen, und viele Kasacks sind schon alt. Bitte bestellen Sie bei Textil Hansen fünfzehn Kasacks und fünfzehn Hosen in Weiß, die Größen stehen auf der Liste im Büro.\nWichtig: Unser Logo soll wieder auf die Brust gestickt werden. Fragen Sie bitte, wie lange die Lieferung dauert. Die Rechnung geht wie immer an die Verwaltung.\nVielen Dank!\nInge Petersen"
       },
       "sorte": "email",
       "an": "Textil Hansen",
       "betreff": "Bestellung: Arbeitskleidung für das Pflegeheim Am Mühlbach",
       "punkte": [
        {
         "nr": 1,
         "was": "Bestellung",
         "hinweis": "Schreib, was und wie viel ihr bestellen wollt."
        },
        {
         "nr": 2,
         "was": "Größen",
         "hinweis": "Nenne die Größen."
        },
        {
         "nr": 3,
         "was": "Logo",
         "hinweis": "Erkläre, was mit dem Logo passieren soll."
        },
        {
         "nr": 4,
         "was": "Lieferung und Rechnung",
         "hinweis": "Frag nach der Lieferzeit und sag, wohin die Rechnung geht."
        }
       ],
       "muster": "Sehr geehrte Damen und Herren,\nwir möchten bei Ihnen neue Arbeitskleidung für unser Pflegeheim bestellen. Wir brauchen fünfzehn weiße Kasacks und fünfzehn weiße Hosen, das gleiche Modell wie bei unserer letzten Bestellung.\nDie Größen sind unterschiedlich: Wir brauchen jeweils fünf Stück in Größe S, sechs in Größe M und vier in Größe L. Bei den Hosen gilt die gleiche Verteilung.\nWie beim letzten Mal soll unser Logo auf die Brust gestickt werden. Die Datei mit dem Logo haben Sie wahrscheinlich noch. Falls nicht, schicke ich sie Ihnen gern noch einmal zu.\nAußerdem möchte ich fragen, wie lange die Lieferung dauert. Ab Januar fangen drei neue Kollegen bei uns an, deshalb wäre es gut, wenn die Kleidung vorher da ist. Die Rechnung schicken Sie bitte wie immer an unsere Verwaltung.\nVielen Dank für eine kurze Bestätigung.\nMit freundlichen Grüßen\nKwame Mensah\nPflegeheim Am Mühlbach",
       "woerter": 150,
       "hilfen": [
        "Wir möchten bei Ihnen … bestellen.",
        "Wir brauchen …, das gleiche Modell wie …",
        "Die Größen sind: …",
        "Wie beim letzten Mal soll …",
        "Außerdem möchte ich fragen, wie lange …",
        "Vielen Dank für eine kurze Bestätigung."
       ],
       "erklaerung": "Eine Bestellung muss eindeutig sein: Artikel, Menge, Größen, Extras, Lieferzeit und Rechnungsadresse.",
       "telc": true,
       "max": 45,
       "niveauTelc": "B1"
      }
     ]
    }
   ]
  }
 ],
 "laeufe": [
  {
   "id": "tb1bsl1",
   "titel": "Prüfungslauf 1",
   "minuten": 30,
   "aufgaben": [
    {
     "id": "bb1sa9",
     "typ": "halbformell",
     "situation": "Du arbeitest im Kundenservice eines Energieversorgers. Deine Teamleiterin hat allen eine E-Mail zur Urlaubsplanung geschrieben. Schreib ihr deinen Urlaubsantrag.",
     "eingang": {
      "von": "Frau Schuster",
      "betreff": "Urlaubsplanung Sommer",
      "text": "Liebes Team,\nbitte schickt mir eure Urlaubswünsche für den Sommer bis Ende Februar. Damit der Kundenservice immer erreichbar ist, dürfen höchstens zwei Personen gleichzeitig weg sein.\nWichtig: Bitte klärt vorher, wer euch vertritt, und schreibt mir den Namen dazu. Wenn ihr gerade an einem größeren Projekt arbeitet, sagt mir bitte auch, wie es während eures Urlaubs weitergeht.\nDanke und viele Grüße\nMonika Schuster"
     },
     "sorte": "email",
     "an": "Frau Schuster",
     "betreff": "AW: Urlaubsplanung Sommer",
     "punkte": [
      {
       "nr": 1,
       "was": "Zeitraum",
       "hinweis": "Nenne den genauen Zeitraum."
      },
      {
       "nr": 2,
       "was": "Grund",
       "hinweis": "Erkläre, warum du gerade dann Urlaub brauchst."
      },
      {
       "nr": 3,
       "was": "Vertretung",
       "hinweis": "Schreib, wer dich vertritt."
      },
      {
       "nr": 4,
       "was": "Offene Aufgaben",
       "hinweis": "Erkläre, wie es mit deinem Projekt weitergeht."
      }
     ],
     "muster": "Liebe Frau Schuster,\nvielen Dank für Ihre E-Mail. Hiermit möchte ich meinen Urlaub für den Sommer beantragen, und zwar vom ersten bis zum neunzehnten August, also drei Wochen.\nIch würde gern genau in dieser Zeit fahren, weil meine Familie in Marokko lebt und meine jüngere Schwester Ende August heiratet. Die ganze Familie kommt dann zusammen, und ich möchte vorher noch bei den Vorbereitungen helfen.\nMeine Vertretung habe ich schon geklärt. Herr Novak übernimmt in diesen Wochen meine Kunden, und ich vertrete ihn dafür im September. Soweit ich weiß, ist im August sonst niemand aus dem Team im Urlaub.\nAußerdem arbeite ich gerade an den neuen Antwortvorlagen für Beschwerden. Bis Ende Juli bin ich damit fertig. Den Rest bespreche ich vor dem Urlaub mit Herrn Novak, damit er bei Fragen Bescheid weiß.\nIch würde mich über eine kurze Bestätigung freuen.\nViele Grüße\nYoussef Amrani",
     "woerter": 150,
     "hilfen": [
      "Hiermit möchte ich meinen Urlaub vom … bis … beantragen.",
      "Ich würde gern genau dann fahren, weil …",
      "Meine Vertretung habe ich schon geklärt: …",
      "Außerdem arbeite ich gerade an …",
      "Den Rest bespreche ich vor dem Urlaub mit …",
      "Ich würde mich über eine kurze Bestätigung freuen."
     ],
     "erklaerung": "Ein Urlaubsantrag überzeugt, wenn du der Chefin die Arbeit abnimmst: Zeitraum, Vertretung und offene Aufgaben sind schon geklärt.",
     "telc": true,
     "max": 45,
     "niveauTelc": "B1"
    }
   ]
  },
  {
   "id": "tb1bsl2",
   "titel": "Prüfungslauf 2",
   "minuten": 30,
   "aufgaben": [
    {
     "id": "bb1sa10",
     "typ": "halbformell",
     "situation": "Du arbeitest in einer Fahrradwerkstatt. Die Öffnungszeiten ändern sich. Dein Chef hat dir eine Notiz geschrieben. Schreib eine E-Mail an die Stammkunden.",
     "eingang": {
      "von": "Herr Lindqvist",
      "betreff": "Notiz: neue Öffnungszeiten",
      "text": "Hallo Frau Costa,\nab März ändern wir die Öffnungszeiten: Montag ist Ruhetag, dafür haben wir Dienstag bis Freitag bis neunzehn Uhr offen und samstags bis vierzehn Uhr. Der Grund: Viele Kunden kommen erst nach der Arbeit.\nNeu ist auch, dass man Reparaturtermine online buchen kann.\nBitte schreiben Sie eine Mail an unsere Stammkunden, damit niemand am Montag vor der Tür steht. Und bedanken Sie sich ruhig für die Treue!\nGruß\nErik Lindqvist"
     },
     "sorte": "email",
     "an": "Stammkunden der Fahrradwerkstatt",
     "betreff": "Neue Öffnungszeiten ab März",
     "punkte": [
      {
       "nr": 1,
       "was": "Änderung",
       "hinweis": "Informiere über die neuen Öffnungszeiten."
      },
      {
       "nr": 2,
       "was": "Grund",
       "hinweis": "Erkläre, warum sich die Zeiten ändern."
      },
      {
       "nr": 3,
       "was": "Online-Termine",
       "hinweis": "Stell den neuen Service vor."
      },
      {
       "nr": 4,
       "was": "Dank",
       "hinweis": "Bedanke dich bei den Kunden."
      }
     ],
     "muster": "Liebe Kunden,\nab März ändern sich die Öffnungszeiten unserer Werkstatt. Montags bleibt die Werkstatt in Zukunft geschlossen. Dafür sind wir von Dienstag bis Freitag länger für Sie da, nämlich bis neunzehn Uhr. Am Samstag haben wir bis vierzehn Uhr geöffnet.\nViele von Ihnen haben uns erzählt, dass sie es nach der Arbeit kaum noch rechtzeitig zu uns schaffen. Deshalb haben wir unsere Zeiten an Ihren Alltag angepasst. Den Montag nutzen wir für Bestellungen und größere Reparaturen.\nAußerdem gibt es etwas Neues: Sie können Ihren Reparaturtermin jetzt auch online buchen. So müssen Sie nicht mehr anrufen und warten, sondern wählen einfach einen freien Termin auf unserer Webseite.\nZum Schluss möchten wir uns ganz herzlich für Ihre Treue bedanken. Ohne unsere Stammkunden gäbe es unsere kleine Werkstatt nicht.\nWir freuen uns auf Ihren nächsten Besuch.\nMit freundlichen Grüßen\nBeatriz Costa\nIhr Team der Fahrradwerkstatt Lindqvist",
     "woerter": 150,
     "hilfen": [
      "Ab … ändern sich unsere Öffnungszeiten.",
      "Dafür sind wir … länger für Sie da.",
      "Viele von Ihnen haben uns erzählt, dass …",
      "Außerdem gibt es etwas Neues: …",
      "Zum Schluss möchten wir uns herzlich für … bedanken.",
      "Wir freuen uns auf Ihren nächsten Besuch."
     ],
     "erklaerung": "Eine Kundeninformation ist klar, freundlich und erklärt die Änderung so, dass sie wie ein Vorteil wirkt.",
     "telc": true,
     "max": 45,
     "niveauTelc": "B1"
    }
   ]
  }
 ]
};
