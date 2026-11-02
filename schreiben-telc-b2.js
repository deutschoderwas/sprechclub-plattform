/* ============================================================
   deutschoderwas club — SCHREIBEN telc Deutsch B2

   Aufbau nach dem offiziellen telc-Format (telc „Tipps zur
   Prüfungsvorbereitung Deutsch B2", Übungstest 1 und 3, geprüft
   01.11.2026). Alle Texte und Aufgaben eigene, nur das Format
   ist nachgebaut. Erzeugt aus scratchpad/telcb2 mit bau-b2.js.
   ============================================================ */

window.SCHREIBEN_TELC_B2 = {
 "niveau": "telcB2",
 "pruefung": "telc Deutsch B2",
 "minuten": 30,
 "punkte": 45,
 "intro": "Bei telc B2 wählst du zwischen zwei Aufgaben: A, eine Bitte um Informationen, oder B, eine Beschwerde — beide als halbformelle E-Mail mit mindestens 150 Wörtern. Von vier Leitpunkten bearbeitest du drei, oder zwei und einen eigenen Aspekt. Bewertet wird nach drei Kriterien (Aufgabenbewältigung, Gestaltung, Richtigkeit), je A bis D, zusammen höchstens 45 Punkte.",
 "stufen": [
  {
   "nr": 1,
   "titel": "Der Rahmen",
   "zeichen": "🖼️",
   "was": "Formelle E-Mail: Betreff, Anrede, Bezug, Gruß — und der richtige Ton für Anfrage oder Beschwerde."
  },
  {
   "nr": 2,
   "titel": "Drei Punkte ausbauen",
   "zeichen": "🧩",
   "was": "Leitpunkte wählen, zu Absätzen ausbauen und auf B2 verbinden."
  },
  {
   "nr": 3,
   "titel": "Aufgabe A und B",
   "zeichen": "✉️",
   "was": "Bitte um Informationen und Beschwerde — mit Muster und Bewertung nach telc."
  },
  {
   "nr": 4,
   "titel": "Die Prüfung",
   "zeichen": "⏱️",
   "was": "Eine E-Mail, 30 Minuten mit Uhr, Bewertung bis 45 Punkte."
  }
 ],
 "bloecke": [
  {
   "id": "tb2s1",
   "stufe": 1,
   "titel": "Formelle E-Mail: Betreff, Anrede, Bezug, Gruß",
   "kurz": "Der Rahmen sitzt, bevor der erste Leitpunkt kommt",
   "ziel": "Nach diesem Block baust du Betreff, Anrede, Einleitung und Schluss einer B2-E-Mail ohne Nachdenken.",
   "zeichen": "✉️",
   "farbe": "turq",
   "aufgaben": [
    {
     "art": "wahl",
     "frage": "Du möchtest Informationen zu einem Fotokurs aus einer Anzeige. Welcher Betreff ist am besten?",
     "opt": [
      "Frage",
      "Anfrage zum Wochenendkurs „Porträtfotografie\"",
      "Hallo, ich habe Interesse!"
     ],
     "loesung": 1,
     "erklaerung": "Ein guter Betreff nennt Anlass und Gegenstand — der Empfänger weiß sofort, worum es geht."
    },
    {
     "art": "wahl",
     "frage": "Du beschwerst dich über eine Reise. Welcher Betreff passt?",
     "opt": [
      "Beschwerde zur Reise „Ostseewoche\", Buchungsnummer 48213",
      "Ich bin total sauer!!!",
      "Reise"
     ],
     "loesung": 0,
     "erklaerung": "Sachlich, mit Buchungsnummer: So kann die Firma deinen Fall sofort zuordnen."
    },
    {
     "art": "wahl",
     "frage": "Du kennst den Namen der Ansprechperson nicht. Welche Anrede ist richtig?",
     "opt": [
      "Sehr geehrte Damen und Herren,",
      "Hallo zusammen,",
      "Liebe Firma,"
     ],
     "loesung": 0,
     "erklaerung": "Ohne Namen ist „Sehr geehrte Damen und Herren,\" die einzige sichere Form."
    },
    {
     "art": "wahl",
     "frage": "In der Anzeige steht „Ansprechpartnerin: Frau Dr. Wieland\". Welche Anrede wählst du?",
     "opt": [
      "Liebe Frau Wieland,",
      "Sehr geehrte Frau Dr. Wieland,",
      "Sehr geehrte Frau Doktor,"
     ],
     "loesung": 1,
     "erklaerung": "Den Doktortitel behältst du in der Anrede, zusammen mit dem Nachnamen."
    },
    {
     "art": "wahl",
     "frage": "Wie geht es nach „Sehr geehrte Damen und Herren,\" weiter?",
     "opt": [
      "Mit großem Interesse habe ich …",
      "mit großem Interesse habe ich …",
      "Mit großem Interesse, habe ich …"
     ],
     "loesung": 1,
     "erklaerung": "Nach dem Komma in der Anrede schreibst du klein weiter — außer das erste Wort ist ein Nomen."
    },
    {
     "art": "wahl",
     "frage": "Welcher Satz stellt den Bezug zur Anzeige am besten her?",
     "opt": [
      "mit großem Interesse habe ich Ihre Anzeige in der Zeitschrift „Stadtleben\" gelesen.",
      "ich habe was gelesen.",
      "Ihre Anzeige ist gut."
     ],
     "loesung": 0,
     "erklaerung": "Wo hast du was gelesen? Der Bezug nennt Quelle und Gegenstand in einem Satz."
    },
    {
     "art": "wahl",
     "frage": "Welcher Einstieg passt zu einer Beschwerde?",
     "opt": [
      "leider muss ich mich heute über meinen Aufenthalt in Ihrem Hotel beschweren.",
      "ich bin wütend, weil alles schlecht war.",
      "ich hoffe, es geht Ihnen gut."
     ],
     "loesung": 0,
     "erklaerung": "Sachlich und direkt: Anlass nennen, ohne Gefühlsausbruch und ohne Small Talk."
    },
    {
     "art": "wahl",
     "frage": "Welcher Schlusssatz passt zu einer Anfrage?",
     "opt": [
      "Antworten Sie schnell!",
      "Für eine baldige Antwort wäre ich Ihnen sehr dankbar.",
      "Tschüss und bis bald!"
     ],
     "loesung": 1,
     "erklaerung": "Konjunktiv II und Dank — höflich, aber mit einer klaren Bitte um Antwort."
    },
    {
     "art": "wahl",
     "frage": "Welche Grußformel ist im halbformellen Register Standard?",
     "opt": [
      "Mit freundlichen Grüßen",
      "Hochachtungsvoll",
      "Liebe Grüße"
     ],
     "loesung": 0,
     "erklaerung": "„Mit freundlichen Grüßen\" passt immer; „Hochachtungsvoll\" wirkt heute altmodisch und steif."
    },
    {
     "art": "ordnen",
     "frage": "Bau den Schlusssatz einer Beschwerde.",
     "teile": [
      "Ich",
      "erwarte",
      "Ihre",
      "Stellungnahme",
      "innerhalb",
      "von",
      "zwei",
      "Wochen."
     ],
     "loesung": [
      0,
      1,
      2,
      3,
      4,
      5,
      6,
      7
     ],
     "erklaerung": "Eine Frist macht die Beschwerde verbindlich — „innerhalb von\" plus Zeitangabe."
    }
   ]
  },
  {
   "id": "tb2s2",
   "stufe": 1,
   "titel": "Höflich anfragen, sachlich beschweren",
   "kurz": "Konjunktiv II für Bitten, klare Sätze für Forderungen",
   "ziel": "Nach diesem Block klingst du in der Anfrage höflich und in der Beschwerde bestimmt — beides ohne unhöflich zu werden.",
   "zeichen": "⚖️",
   "farbe": "gold",
   "aufgaben": [
    {
     "art": "wahl",
     "frage": "Welche Frage ist in einer Anfrage am höflichsten?",
     "opt": [
      "Wie viel kostet das?",
      "Könnten Sie mir bitte mitteilen, wie hoch die Kursgebühr ist?",
      "Sagen Sie mir den Preis."
     ],
     "loesung": 1,
     "erklaerung": "„Könnten Sie mir bitte mitteilen, …\" — Konjunktiv II plus indirekte Frage ist typisch B2."
    },
    {
     "art": "wahl",
     "frage": "Welche indirekte Frage ist grammatisch richtig?",
     "opt": [
      "Ich würde gern wissen, ob es noch freie Plätze gibt.",
      "Ich würde gern wissen, gibt es noch freie Plätze.",
      "Ich würde gern wissen, ob gibt es noch freie Plätze."
     ],
     "loesung": 0,
     "erklaerung": "Nach „ob\" steht das Verb am Ende: … ob es noch freie Plätze gibt."
    },
    {
     "art": "wahl",
     "frage": "Welcher Satz drückt eine Beschwerde sachlich aus?",
     "opt": [
      "Ihr Service ist eine Katastrophe!",
      "Leider entsprach das Zimmer nicht der Beschreibung im Katalog.",
      "Sie haben mich betrogen."
     ],
     "loesung": 1,
     "erklaerung": "Fakt statt Vorwurf: Du beschreibst den Unterschied zwischen Versprechen und Wirklichkeit."
    },
    {
     "art": "wahl",
     "frage": "Welcher Satz formuliert eine Forderung klar, aber höflich?",
     "opt": [
      "Ich will mein Geld zurück, sofort!",
      "Vielleicht könnten Sie eventuell etwas machen?",
      "Ich bitte Sie daher, mir einen Teil des Reisepreises zu erstatten."
     ],
     "loesung": 2,
     "erklaerung": "„Ich bitte Sie daher, … zu …\" ist bestimmt und trotzdem korrekt — ohne Drohung und ohne Herumdrucksen."
    },
    {
     "art": "wahl",
     "frage": "Was passt NICHT in eine sachliche Beschwerde?",
     "opt": [
      "In der Anzeige wurde ein Meerblick versprochen.",
      "Ich gehe davon aus, dass Sie eine Lösung finden.",
      "Ihre Mitarbeiter sind offenbar alle unfähig."
     ],
     "loesung": 2,
     "erklaerung": "Pauschale Beleidigungen schwächen deine Position — bleib bei überprüfbaren Tatsachen."
    },
    {
     "art": "wahl",
     "frage": "Welche Form ist Konjunktiv II von „können\" mit „Sie\"?",
     "opt": [
      "Können Sie",
      "Könnten Sie",
      "Konnten Sie"
     ],
     "loesung": 1,
     "erklaerung": "„Könnten\" mit Umlaut ist Konjunktiv II; „konnten\" ohne Umlaut ist Präteritum."
    },
    {
     "art": "wahl",
     "frage": "Welcher Satz passt in eine Anfrage, um Interesse zu zeigen?",
     "opt": [
      "Ihr Angebot interessiert mich sehr, da ich mich beruflich weiterbilden möchte.",
      "Ich habe Langeweile.",
      "Ich weiß nicht genau, was ich will."
     ],
     "loesung": 0,
     "erklaerung": "Ein kurzer Grund mit „da\" macht die Anfrage persönlich und glaubwürdig."
    },
    {
     "art": "wahl",
     "frage": "Du willst Nachdruck zeigen, ohne zu drohen. Welcher Satz passt?",
     "opt": [
      "Sonst zeige ich Sie an!",
      "Sollte ich bis Ende des Monats keine Antwort erhalten, werde ich mich an die Verbraucherzentrale wenden.",
      "Machen Sie, was Sie wollen."
     ],
     "loesung": 1,
     "erklaerung": "„Sollte … , werde ich …\" kündigt einen nächsten Schritt sachlich an — typische B2-Struktur."
    },
    {
     "art": "ordnen",
     "frage": "Bau die höfliche Frage.",
     "teile": [
      "Wäre",
      "es",
      "möglich,",
      "den Kurs",
      "auch",
      "in Raten",
      "zu",
      "bezahlen?"
     ],
     "loesung": [
      0,
      1,
      2,
      3,
      4,
      5,
      6,
      7
     ],
     "erklaerung": "„Wäre es möglich, … zu …?\" ist eine elegante Bitte im Konjunktiv II mit Infinitiv mit zu."
    },
    {
     "art": "ordnen",
     "frage": "Bau die Forderung.",
     "teile": [
      "Ich",
      "erwarte,",
      "dass",
      "Sie",
      "mir",
      "die Kosten",
      "vollständig",
      "erstatten."
     ],
     "loesung": [
      0,
      1,
      2,
      3,
      4,
      5,
      6,
      7
     ],
     "erklaerung": "Im dass-Satz steht das Verb am Ende: … vollständig erstatten."
    }
   ]
  },
  {
   "id": "tb2s3",
   "stufe": 2,
   "titel": "Drei Leitpunkte auswählen und ausbauen",
   "kurz": "Die richtigen drei nehmen — und aus jedem Stichpunkt einen Absatz machen",
   "ziel": "Nach diesem Block wählst du schnell die drei Leitpunkte, zu denen du am meisten sagen kannst, und schreibst zu jedem einen vollen Absatz.",
   "zeichen": "🎯",
   "farbe": "rot",
   "aufgaben": [
    {
     "art": "wahl",
     "frage": "Wie viele Leitpunkte musst du bei telc B2 bearbeiten, um die volle Punktzahl in der Aufgabenbewältigung zu bekommen?",
     "opt": [
      "alle vier",
      "drei — oder zwei plus einen eigenen Aspekt",
      "zwei reichen"
     ],
     "loesung": 1,
     "erklaerung": "Drei Leitpunkte (oder zwei plus ein eigener) geben A; mit nur zwei bekommst du B."
    },
    {
     "art": "wahl",
     "frage": "Nach welchem Kriterium wählst du die drei Leitpunkte am besten aus?",
     "opt": [
      "Immer die ersten drei",
      "Die, zu denen mir konkrete Inhalte und passender Wortschatz einfallen",
      "Die kürzesten"
     ],
     "loesung": 1,
     "erklaerung": "Du hast die Wahl — nutze sie für die Punkte, zu denen du sicher und ausführlich schreiben kannst."
    },
    {
     "art": "wahl",
     "frage": "Leitpunkt „Grund für Ihr Interesse\". Welche Antwort baut ihn wirklich aus?",
     "opt": [
      "Ich habe Interesse.",
      "Ich interessiere mich für den Kurs, weil ich seit einem Jahr im Vertrieb arbeite und oft Präsentationen halten muss. Bisher fühle ich mich dabei unsicher.",
      "Interesse: ja."
     ],
     "loesung": 1,
     "erklaerung": "Ein ausgebauter Leitpunkt hat einen Grund und ein konkretes Detail — zwei bis drei Sätze."
    },
    {
     "art": "wahl",
     "frage": "Leitpunkt „Was Sie jetzt erwarten\" in einer Beschwerde. Welche Antwort ist B2?",
     "opt": [
      "Ich erwarte etwas.",
      "Machen Sie was!",
      "Aus diesen Gründen erwarte ich eine Erstattung von mindestens dreißig Prozent des Preises, da ein Drittel der Leistungen nicht erbracht wurde."
     ],
     "loesung": 2,
     "erklaerung": "Eine konkrete Forderung mit Begründung zeigt Aufgabenbewältigung und Register zugleich."
    },
    {
     "art": "wahl",
     "frage": "Wie zeigst du dem Leser, dass ein neuer Leitpunkt beginnt?",
     "opt": [
      "Mit einem neuen Absatz und einem Überleitungssatz wie „Darüber hinaus würde mich interessieren, …\"",
      "Mit einer Nummer: „Punkt 2:\"",
      "Gar nicht, alles in einem Block"
     ],
     "loesung": 0,
     "erklaerung": "Absatz plus Überleitung — so erkennt der Prüfer die Struktur, ohne dass es nach Liste aussieht."
    },
    {
     "art": "wahl",
     "frage": "Darfst du die Reihenfolge der Leitpunkte ändern?",
     "opt": [
      "Nein, nie",
      "Ja, wenn der Text dadurch logischer wird",
      "Nur bei der Beschwerde"
     ],
     "loesung": 1,
     "erklaerung": "Die Reihenfolge ist frei — wichtig ist ein logischer Aufbau."
    },
    {
     "art": "wahl",
     "frage": "Welcher Satz ist ein guter „eigener Aspekt\" in einer Anfrage zu einem Sprachkurs?",
     "opt": [
      "Außerdem würde ich gern wissen, ob es auf dem Gelände einen Parkplatz gibt.",
      "Das Wetter ist heute schön.",
      "Mein Bruder heißt Tom."
     ],
     "loesung": 0,
     "erklaerung": "Ein eigener Aspekt muss zur Situation passen und eine echte Frage oder Information enthalten."
    },
    {
     "art": "ordnen",
     "frage": "Bau den Überleitungssatz zum nächsten Leitpunkt.",
     "teile": [
      "Ein",
      "weiterer",
      "Punkt,",
      "der",
      "mich",
      "interessiert,",
      "sind",
      "die Unterrichtszeiten."
     ],
     "loesung": [
      0,
      1,
      2,
      3,
      4,
      5,
      6,
      7
     ],
     "erklaerung": "Der Relativsatz „der mich interessiert\" steht direkt hinter „Punkt\" und endet mit dem Verb."
    },
    {
     "art": "ordnen",
     "frage": "Bau den Satz, der einen Stichpunkt zu einer Begründung macht.",
     "teile": [
      "Das",
      "ist",
      "für",
      "mich",
      "besonders",
      "wichtig,",
      "da",
      "ich",
      "Schicht",
      "arbeite."
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
     "erklaerung": "„da\" leitet einen Nebensatz ein — das Verb „arbeite\" steht am Ende."
    },
    {
     "art": "ordnen",
     "frage": "Bau den Satz, der eine Beschwerde konkret macht.",
     "teile": [
      "Statt",
      "der",
      "versprochenen",
      "vier",
      "Ausflüge",
      "fanden",
      "nur",
      "zwei",
      "statt."
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
     "erklaerung": "„statt\" mit Genitiv am Anfang, „stattfinden\" getrennt am Ende — Versprechen und Wirklichkeit in einem Satz."
    }
   ]
  },
  {
   "id": "tb2s4",
   "stufe": 2,
   "titel": "B2-Verknüpfungen",
   "kurz": "zudem, darüber hinaus, folglich, dennoch, zum einen … zum anderen",
   "ziel": "Nach diesem Block verbindest du deine Sätze so, dass der Text fließt — ein klares Plus in der kommunikativen Gestaltung.",
   "zeichen": "🔗",
   "farbe": "lila",
   "aufgaben": [
    {
     "art": "wahl",
     "frage": "Das Zimmer war laut. ___ funktionierte die Klimaanlage nicht.",
     "opt": [
      "Dennoch",
      "Zudem",
      "Folglich"
     ],
     "loesung": 1,
     "erklaerung": "„Zudem\" fügt ein weiteres Problem hinzu; danach folgt sofort das Verb (Position 2)."
    },
    {
     "art": "wahl",
     "frage": "Der Kurs fiel dreimal aus. ___ konnte ich die Prüfung nicht ablegen.",
     "opt": [
      "Folglich",
      "Dennoch",
      "Zum einen"
     ],
     "loesung": 0,
     "erklaerung": "„Folglich\" nennt die Konsequenz — wie „deshalb\", nur gehobener."
    },
    {
     "art": "wahl",
     "frage": "Das Hotel war teuer. ___ war der Service enttäuschend.",
     "opt": [
      "Folglich",
      "Dennoch",
      "Darüber hinaus"
     ],
     "loesung": 1,
     "erklaerung": "„Dennoch\" zeigt einen Gegensatz zur Erwartung: teuer, aber trotzdem schlechter Service."
    },
    {
     "art": "wahl",
     "frage": "Welcher Satz ist richtig?",
     "opt": [
      "Darüber hinaus ich möchte wissen, ob …",
      "Darüber hinaus möchte ich wissen, ob …",
      "Darüber hinaus, ich möchte wissen, ob …"
     ],
     "loesung": 1,
     "erklaerung": "„Darüber hinaus\" besetzt Position 1, das Verb folgt direkt: … möchte ich …"
    },
    {
     "art": "wahl",
     "frage": "Ergänze: Zum einen ist der Kurs günstig, ___ liegt er direkt an meinem Arbeitsweg.",
     "opt": [
      "zum zweiten",
      "zum anderen",
      "andererseits"
     ],
     "loesung": 1,
     "erklaerung": "„Zum einen … zum anderen\" ist ein festes Paar für zwei Gründe."
    },
    {
     "art": "wahl",
     "frage": "Welches Wort passt? Ich habe mich sofort an die Rezeption gewandt. ___ hat sich niemand um das Problem gekümmert.",
     "opt": [
      "Trotzdem",
      "Deshalb",
      "Außerdem"
     ],
     "loesung": 0,
     "erklaerung": "Erwartet wäre Hilfe gewesen — „trotzdem\" (wie „dennoch\") markiert den Gegensatz."
    },
    {
     "art": "wahl",
     "frage": "Welcher Satz verbindet zwei Informationen auf B2-Niveau?",
     "opt": [
      "Ich arbeite Vollzeit. Ich habe nur abends Zeit.",
      "Da ich Vollzeit arbeite, kommen für mich nur Abendkurse in Frage.",
      "Ich arbeite Vollzeit und abends und Zeit."
     ],
     "loesung": 1,
     "erklaerung": "Nebensatz mit „da\" plus Nomen-Verb-Verbindung „in Frage kommen\" — genau das zeigt B2."
    },
    {
     "art": "wahl",
     "frage": "Welches Wort passt? Die Anzeige versprach kleine Gruppen. ___ saßen wir mit fünfundzwanzig Personen im Raum.",
     "opt": [
      "Stattdessen",
      "Folglich",
      "Zudem"
     ],
     "loesung": 0,
     "erklaerung": "„Stattdessen\" stellt das Versprechen der tatsächlichen Situation gegenüber."
    },
    {
     "art": "ordnen",
     "frage": "Bau den Satz mit „nicht nur … sondern auch\".",
     "teile": [
      "Das",
      "Essen",
      "war",
      "nicht nur",
      "kalt,",
      "sondern auch",
      "viel zu",
      "salzig."
     ],
     "loesung": [
      0,
      1,
      2,
      3,
      4,
      5,
      6,
      7
     ],
     "erklaerung": "„nicht nur … sondern auch\" verstärkt den zweiten Punkt — ideal für eine Beschwerde."
    },
    {
     "art": "ordnen",
     "frage": "Bau den Satz mit „folglich\".",
     "teile": [
      "Der",
      "Bus",
      "kam",
      "nicht;",
      "folglich",
      "verpassten",
      "wir",
      "die Führung."
     ],
     "loesung": [
      0,
      1,
      2,
      3,
      4,
      5,
      6,
      7
     ],
     "erklaerung": "Nach „folglich\" steht das Verb direkt dahinter: folglich verpassten wir …"
    }
   ]
  }
 ],
 "teile": [
  {
   "nr": 1,
   "art": "mitteilung",
   "name": "Aufgabe A: Bitte um Informationen",
   "kurz": "Auf eine Anzeige reagieren, drei von vier Punkten",
   "was": "Du hast eine Anzeige gelesen und möchtest mehr wissen. Du schreibst eine halbformelle E-Mail und bearbeitest drei der vier Leitpunkte — oder zwei und einen eigenen Aspekt.",
   "tipp": "Frag konkret und höflich: „Könnten Sie mir mitteilen, ob …\", „Mich würde außerdem interessieren, …\". Jeder bearbeitete Punkt bekommt einen eigenen Absatz.",
   "zeichen": "❓",
   "farbe": "turq",
   "punkte": 45,
   "runden": [
    {
     "id": "tb2s1r1",
     "titel": "Runde 1",
     "aufgaben": [
      {
       "id": "tb2sa1",
       "typ": "information",
       "situation": "Sie haben eine Anzeige für einen Wochenendkurs gelesen und möchten mehr darüber erfahren. Schreiben Sie eine E-Mail an die Kursleitung.",
       "eingang": {
        "von": "Anzeige in der Zeitschrift „Stadtleben Rheinhafen\"",
        "betreff": "Sicher präsentieren — souverän auftreten",
        "text": "Sie halten im Beruf Vorträge und fühlen sich dabei unsicher? In unserem Intensivkurs an zwei Wochenenden lernen Sie, wie Sie Inhalte klar strukturieren, frei sprechen und auch schwierige Fragen gelassen beantworten. Arbeit in Kleingruppen, Videoanalyse Ihrer eigenen Präsentation und persönliches Feedback durch erfahrene Trainer. Der Kurs findet in unseren Räumen in der Altstadt statt. Nächster Termin: März. Weitere Informationen bei Frau Dr. Wieland, Seminarhaus Lindengarten."
       },
       "sorte": "email",
       "an": "Frau Dr. Wieland, Seminarhaus Lindengarten",
       "betreff": "Anfrage zum Kurs „Sicher präsentieren\"",
       "punkte": [
        {
         "nr": 1,
         "was": "Grund für Ihr Interesse",
         "hinweis": "Erklären Sie, warum Sie der Kurs interessiert."
        },
        {
         "nr": 2,
         "was": "Kosten und Zahlungsweise",
         "hinweis": "Fragen Sie nach Preis und Möglichkeiten der Bezahlung."
        },
        {
         "nr": 3,
         "was": "Gruppengröße und Vorkenntnisse",
         "hinweis": "Erkundigen Sie sich nach der Teilnehmerzahl und den Voraussetzungen."
        },
        {
         "nr": 4,
         "was": "Kostenübernahme durch den Arbeitgeber",
         "hinweis": "Fragen Sie nach einer Bescheinigung für Ihren Arbeitgeber."
        }
       ],
       "muster": "Sehr geehrte Frau Dr. Wieland,\nmit großem Interesse habe ich Ihre Anzeige in der Zeitschrift „Stadtleben Rheinhafen\" gelesen und möchte gern mehr über Ihren Kurs „Sicher präsentieren\" erfahren.\nZunächst kurz zu meiner Situation: Ich arbeite seit einem Jahr als Projektassistentin in einem mittelständischen Unternehmen und muss regelmäßig Ergebnisse vor Kunden vorstellen. Zwar bereite ich mich immer gründlich vor, dennoch werde ich vor Publikum schnell nervös und verliere den roten Faden. Genau deshalb spricht mich Ihr Angebot an.\nDarüber hinaus würde mich interessieren, wie groß die Gruppen sind. In der Anzeige ist von Kleingruppen die Rede, aber ich weiß nicht, wie viele Personen das genau bedeutet. Außerdem wüsste ich gern, ob man Vorkenntnisse braucht oder ob der Kurs auch für Anfänger geeignet ist.\nSchließlich habe ich eine Frage zur Finanzierung. Mein Arbeitgeber unterstützt Weiterbildungen grundsätzlich, verlangt aber einen schriftlichen Nachweis. Könnten Sie mir bitte mitteilen, ob Sie eine Teilnahmebescheinigung ausstellen und ob die Rechnung direkt an die Firma geschickt werden kann?\nFür eine baldige Antwort wäre ich Ihnen sehr dankbar.\nMit freundlichen Grüßen\nSofia Brandner",
       "woerter": 150,
       "hilfen": [
        "Mit großem Interesse habe ich Ihre Anzeige … gelesen.",
        "Zunächst kurz zu meiner Situation: …",
        "Darüber hinaus würde mich interessieren, …",
        "Außerdem wüsste ich gern, ob …",
        "Könnten Sie mir bitte mitteilen, …",
        "Für eine baldige Antwort wäre ich Ihnen sehr dankbar."
       ],
       "erklaerung": "Das Muster bearbeitet die Leitpunkte 1 (Interesse), 3 (Gruppengröße/Vorkenntnisse) und 4 (Arbeitgeber); Punkt 2 bleibt weg. Du kannst auch zwei Leitpunkte plus einen eigenen Aspekt wählen, zum Beispiel eine Frage zum Ersatztermin bei Krankheit.",
       "telc": true,
       "max": 45,
       "noetig": 3,
       "niveauTelc": "B2"
      },
      {
       "id": "tb2sa2",
       "typ": "information",
       "situation": "Sie suchen eine Wohnung und haben eine Anzeige für ein gemeinschaftliches Wohnprojekt gesehen. Schreiben Sie an die Genossenschaft.",
       "eingang": {
        "von": "Anzeige im Online-Portal „Wohnen im Quartier\"",
        "betreff": "Neues Wohnprojekt „Grüner Hof\" — gemeinsam statt einsam",
        "text": "Im Herbst werden im Stadtteil Kesselbrunn vierzig Wohnungen fertig, die von Familien, Paaren und Alleinstehenden gemeinsam bewohnt werden. Zum Projekt gehören ein Gemeinschaftsraum, ein Garten mit Hochbeeten und eine Werkstatt. Wer einzieht, wird Mitglied der Genossenschaft und beteiligt sich an der Pflege der gemeinsamen Flächen. Es gibt noch freie Wohnungen mit zwei bis vier Zimmern. Interessenten melden sich bei der Wohnungsgenossenschaft Lindenau, Herr Okafor."
       },
       "sorte": "email",
       "an": "Herr Okafor, Wohnungsgenossenschaft Lindenau",
       "betreff": "Anfrage zum Wohnprojekt „Grüner Hof\"",
       "punkte": [
        {
         "nr": 1,
         "was": "Ihre Wohnsituation",
         "hinweis": "Beschreiben Sie, wie Sie im Moment wohnen und was Sie suchen."
        },
        {
         "nr": 2,
         "was": "Kosten",
         "hinweis": "Fragen Sie nach Miete und Genossenschaftsanteil."
        },
        {
         "nr": 3,
         "was": "Gemeinschaftliche Pflichten",
         "hinweis": "Erkundigen Sie sich, wie viel Zeit man für die Gemeinschaft einplanen muss."
        },
        {
         "nr": 4,
         "was": "Haustiere",
         "hinweis": "Fragen Sie, ob Tiere erlaubt sind."
        }
       ],
       "muster": "Sehr geehrter Herr Okafor,\nin dem Portal „Wohnen im Quartier\" bin ich auf Ihre Anzeige zum Wohnprojekt „Grüner Hof\" gestoßen. Das Konzept gefällt mir sehr, und ich hätte einige Fragen dazu.\nZurzeit wohne ich mit meinem Partner in einer Zweizimmerwohnung im Zentrum. Da wir im nächsten Jahr ein Kind erwarten, suchen wir eine größere Wohnung mit drei Zimmern. Zudem wünschen wir uns eine Umgebung, in der man die Nachbarn kennt und sich gegenseitig hilft.\nBesonders wichtig ist für uns die Frage der Kosten. Könnten Sie mir bitte mitteilen, wie hoch die monatliche Miete für eine Dreizimmerwohnung ist? Außerdem würde ich gern wissen, welchen Genossenschaftsanteil man beim Einzug zahlen muss und ob dieser in Raten beglichen werden kann.\nDarüber hinaus interessiert mich, wie viel Zeit man für die gemeinsamen Aufgaben einplanen sollte. Wir arbeiten beide Vollzeit; folglich könnten wir uns vor allem am Wochenende engagieren. Gibt es feste Dienste, oder organisieren die Bewohner das selbst?\nÜber eine Antwort und gegebenenfalls einen Besichtigungstermin würde ich mich sehr freuen.\nMit freundlichen Grüßen\nDaniel Herzberg",
       "woerter": 150,
       "hilfen": [
        "In … bin ich auf Ihre Anzeige … gestoßen.",
        "Zurzeit wohne ich …",
        "Besonders wichtig ist für uns …",
        "Außerdem würde ich gern wissen, welchen …",
        "Darüber hinaus interessiert mich, …",
        "Über eine Antwort würde ich mich sehr freuen."
       ],
       "erklaerung": "Das Muster bearbeitet die Leitpunkte 1 (Wohnsituation), 2 (Kosten) und 3 (Pflichten); die Frage nach Haustieren fehlt. Möglich wäre auch: zwei Leitpunkte plus ein eigener Aspekt wie ein Besichtigungstermin.",
       "telc": true,
       "max": 45,
       "noetig": 3,
       "niveauTelc": "B2"
      }
     ]
    },
    {
     "id": "tb2s1r2",
     "titel": "Runde 2",
     "aufgaben": [
      {
       "id": "tb2sa3",
       "typ": "information",
       "situation": "Sie möchten eine Zeit lang ehrenamtlich arbeiten und haben eine Anzeige gefunden. Schreiben Sie an die Organisation.",
       "eingang": {
        "von": "Aushang in der Stadtbibliothek",
        "betreff": "Lesepaten gesucht!",
        "text": "Viele Kinder in unseren Grundschulen lesen kaum außerhalb des Unterrichts. Als Lesepate begleiten Sie ein Kind einmal pro Woche für eine Stunde: Sie lesen gemeinsam, sprechen über Geschichten und wecken die Freude an Büchern. Pädagogische Erfahrung ist nicht nötig, wir bereiten Sie in einem Einführungsabend vor. Sie brauchen nur Zeit, Geduld und Zuverlässigkeit. Melden Sie sich beim Verein „Buchstabenbrücke\", Ansprechpartnerin Frau Lindqvist."
       },
       "sorte": "email",
       "an": "Frau Lindqvist, Verein „Buchstabenbrücke\"",
       "betreff": "Interesse an einer Lesepatenschaft",
       "punkte": [
        {
         "nr": 1,
         "was": "Warum Sie mitmachen möchten",
         "hinweis": "Erklären Sie Ihre Motivation."
        },
        {
         "nr": 2,
         "was": "Ihre Erfahrungen",
         "hinweis": "Beschreiben Sie, was Sie mitbringen."
        },
        {
         "nr": 3,
         "was": "Zeitlicher Rahmen",
         "hinweis": "Fragen Sie nach Tagen, Uhrzeiten und Dauer der Verpflichtung."
        },
        {
         "nr": 4,
         "was": "Versicherung",
         "hinweis": "Erkundigen Sie sich, ob Sie während der Tätigkeit versichert sind."
        }
       ],
       "muster": "Sehr geehrte Frau Lindqvist,\nvor einigen Tagen habe ich in der Stadtbibliothek Ihren Aushang „Lesepaten gesucht!\" gesehen. Ich würde mich gern als Lesepate engagieren und möchte Ihnen deshalb kurz schreiben.\nBücher haben in meinem Leben schon immer eine große Rolle gespielt. Als ich vor sechs Jahren nach Deutschland kam, habe ich die Sprache zum großen Teil durch Kinderbücher gelernt. Folglich weiß ich aus eigener Erfahrung, wie viel Lesen verändern kann, und genau das möchte ich weitergeben.\nZum einen habe ich als älterer Bruder von drei Geschwistern viel Erfahrung mit Kindern. Zum anderen arbeite ich als Bibliothekar in einer Fachhochschule und kenne mich daher gut mit Literatur aus. Pädagogisch bin ich zwar nicht ausgebildet, dennoch bin ich geduldig und zuverlässig.\nAbschließend hätte ich noch eine Frage zum zeitlichen Rahmen: An welchen Tagen und zu welchen Uhrzeiten finden die Treffen statt? Ich bin berufstätig und könnte nur ab fünfzehn Uhr. Außerdem würde mich interessieren, für wie lange man sich mindestens verpflichten sollte.\nÜber eine Rückmeldung würde ich mich sehr freuen.\nMit freundlichen Grüßen\nMarek Nowicki",
       "woerter": 150,
       "hilfen": [
        "Vor einigen Tagen habe ich … gesehen.",
        "Ich würde mich gern … engagieren.",
        "Zum einen … Zum anderen …",
        "Zwar …, dennoch …",
        "Abschließend hätte ich noch eine Frage zu …",
        "Über eine Rückmeldung würde ich mich sehr freuen."
       ],
       "erklaerung": "Das Muster nimmt die Leitpunkte 1 (Motivation), 2 (Erfahrungen) und 3 (Zeit); die Versicherung lässt es weg. Ebenso gut wären zwei Leitpunkte plus ein eigener Aspekt, etwa die Frage nach dem Einführungsabend.",
       "telc": true,
       "max": 45,
       "noetig": 3,
       "niveauTelc": "B2"
      },
      {
       "id": "tb2sa4",
       "typ": "information",
       "situation": "Ihre Firma plant einen Betriebsausflug, und Sie sind für die Organisation zuständig. Schreiben Sie an den Anbieter aus der Anzeige.",
       "eingang": {
        "von": "Anzeige im Wirtschaftsmagazin „Region aktiv\"",
        "betreff": "Teamtage am See — mehr als nur ein Ausflug",
        "text": "Stärken Sie den Zusammenhalt in Ihrem Team! Wir organisieren für Gruppen von zehn bis sechzig Personen Teamtage am Felsensee: Floßbau, Kletterwald, geführte Wanderungen oder ein Kochwettbewerb unter freiem Himmel. Auf Wunsch übernehmen wir auch Anreise und Verpflegung. Unsere Programme lassen sich an jedes Fitnessniveau anpassen. Buchbar von April bis Oktober. Anfragen an Teamtage Felsensee, Frau Brückner."
       },
       "sorte": "email",
       "an": "Frau Brückner, Teamtage Felsensee",
       "betreff": "Anfrage für einen Teamtag im Juni",
       "punkte": [
        {
         "nr": 1,
         "was": "Ihre Gruppe",
         "hinweis": "Beschreiben Sie Größe und Zusammensetzung Ihres Teams."
        },
        {
         "nr": 2,
         "was": "Programm",
         "hinweis": "Fragen Sie, welche Aktivitäten für Ihre Gruppe geeignet sind."
        },
        {
         "nr": 3,
         "was": "Schlechtes Wetter",
         "hinweis": "Erkundigen Sie sich nach einem Plan bei Regen."
        },
        {
         "nr": 4,
         "was": "Verpflegung",
         "hinweis": "Fragen Sie nach besonderen Essenswünschen."
        }
       ],
       "muster": "Sehr geehrte Frau Brückner,\nin der aktuellen Ausgabe von „Region aktiv\" habe ich Ihre Anzeige für Teamtage am Felsensee gelesen. Ich organisiere in diesem Jahr den Betriebsausflug unserer Abteilung und möchte Sie um einige Informationen bitten.\nUnser Team besteht aus fünfundzwanzig Personen zwischen zweiundzwanzig und dreiundsechzig Jahren. Die meisten arbeiten im Büro und sind sportlich nicht besonders aktiv; zudem hat ein Kollege eine Knieverletzung. Wir suchen daher ein Programm, bei dem wirklich alle mitmachen können.\nVor diesem Hintergrund würde ich gern wissen, welche Aktivitäten Sie für eine solche Gruppe empfehlen würden. Der Kochwettbewerb klingt zum Beispiel sehr interessant. Wäre es möglich, ihn mit einer kurzen, leichten Wanderung zu kombinieren? So hätten auch die weniger sportlichen Kollegen ein gemeinsames Erlebnis.\nDarüber hinaus mache ich mir ein wenig Sorgen wegen des Wetters. Was passiert, wenn es am geplanten Tag stark regnet? Gibt es einen überdachten Raum oder ein alternatives Programm, oder kann der Termin kostenlos verschoben werden?\nIch würde mich freuen, wenn Sie mir ein unverbindliches Angebot für einen Freitag im Juni schicken könnten.\nMit freundlichen Grüßen\nAylin Kaya",
       "woerter": 150,
       "hilfen": [
        "Ich organisiere … und möchte Sie um einige Informationen bitten.",
        "Unser Team besteht aus …",
        "Vor diesem Hintergrund würde ich gern wissen, …",
        "Wäre es möglich, … zu …?",
        "Darüber hinaus mache ich mir Sorgen wegen …",
        "Ich würde mich freuen, wenn Sie mir … schicken könnten."
       ],
       "erklaerung": "Das Muster bearbeitet die Leitpunkte 1 (Gruppe), 2 (Programm) und 3 (Wetter); Verpflegung kommt nicht vor. Du kannst auch zwei Leitpunkte plus einen eigenen Aspekt nehmen, zum Beispiel die Anreise mit dem Bus.",
       "telc": true,
       "max": 45,
       "noetig": 3,
       "niveauTelc": "B2"
      }
     ]
    }
   ]
  },
  {
   "nr": 2,
   "art": "mitteilung",
   "name": "Aufgabe B: Beschwerde",
   "kurz": "Sachlich reklamieren, drei von vier Punkten",
   "was": "Etwas war nicht so wie versprochen. Du beschwerst dich in einer halbformellen E-Mail und bearbeitest drei der vier Leitpunkte.",
   "tipp": "Sachlich bleiben: Was war vereinbart, was ist passiert, was erwartest du jetzt? Eine klare Forderung am Ende gehört dazu.",
   "zeichen": "⚠️",
   "farbe": "rot",
   "punkte": 45,
   "runden": [
    {
     "id": "tb2s2r1",
     "titel": "Runde 1",
     "aufgaben": [
      {
       "id": "tb2sa6",
       "typ": "beschwerde",
       "situation": "Sie haben eine Städtereise gebucht, die nicht so verlief wie versprochen. Schreiben Sie eine Beschwerde an den Reiseveranstalter.",
       "eingang": {
        "von": "Ihre Buchungsbestätigung",
        "betreff": "Kulturwochenende in der Hansestadt — Buchungsnummer 48213",
        "text": "Wir freuen uns, Ihre Buchung zu bestätigen: zwei Übernachtungen im Viersternehotel „Am Hafenbecken\" in ruhiger Lage, Doppelzimmer mit Blick auf den Hafen, reichhaltiges Frühstücksbuffet. Im Preis enthalten: eine Stadtführung mit einem deutschsprachigen Guide, eine Hafenrundfahrt sowie Eintrittskarten für ein Konzert in der Musikhalle am Samstagabend. Reisepreis: dreihundertvierzig Euro pro Person. Reisebüro Nordlicht Reisen."
       },
       "sorte": "email",
       "an": "Nordlicht Reisen, Kundenservice",
       "betreff": "Beschwerde zur Reise „Kulturwochenende\", Buchungsnummer 48213",
       "punkte": [
        {
         "nr": 1,
         "was": "Grund für die Buchung",
         "hinweis": "Erklären Sie, warum Sie diese Reise gewählt haben."
        },
        {
         "nr": 2,
         "was": "Unterkunft",
         "hinweis": "Beschreiben Sie, was am Hotel nicht stimmte."
        },
        {
         "nr": 3,
         "was": "Programm",
         "hinweis": "Erklären Sie, welche Leistungen fehlten."
        },
        {
         "nr": 4,
         "was": "Ihre Erwartung",
         "hinweis": "Sagen Sie, was Sie jetzt vom Veranstalter erwarten."
        }
       ],
       "muster": "Sehr geehrte Damen und Herren,\nvom 14. bis 16. Juni war ich mit meiner Frau auf Ihrem „Kulturwochenende in der Hansestadt\". Leider muss ich mich über mehrere Punkte beschweren.\nZunächst zur Unterkunft: In Ihrer Bestätigung war von einem ruhigen Doppelzimmer mit Hafenblick die Rede. Tatsächlich bekamen wir ein Zimmer zum Hinterhof, direkt über der Hotelküche. Bis spät in die Nacht war es laut, und ab fünf Uhr morgens wurden Lieferungen angenommen. Unser Wunsch nach einem Zimmerwechsel wurde mit dem Hinweis abgelehnt, das Hotel sei ausgebucht. An erholsamen Schlaf war also nicht zu denken.\nDarüber hinaus wurde das Programm nur zum Teil erbracht. Die Stadtführung fand zwar statt, jedoch auf Englisch, obwohl ausdrücklich ein deutschsprachiger Guide versprochen war. Die Hafenrundfahrt fiel ganz aus, ohne dass uns jemand einen Ersatz angeboten hätte.\nAus diesen Gründen erwarte ich eine Erstattung von mindestens dreißig Prozent des Reisepreises. Ich bitte Sie, mir innerhalb von zwei Wochen mitzuteilen, wie Sie die Angelegenheit regeln möchten. Andernfalls sehe ich mich gezwungen, mich an die Verbraucherzentrale zu wenden.\nMit freundlichen Grüßen\nThomas Reuter",
       "woerter": 150,
       "hilfen": [
        "Leider muss ich mich über … beschweren.",
        "In Ihrer Bestätigung war von … die Rede. Tatsächlich …",
        "Darüber hinaus wurde …",
        "… obwohl ausdrücklich … versprochen war.",
        "Aus diesen Gründen erwarte ich …",
        "Ich bitte Sie, mir innerhalb von … mitzuteilen, …"
       ],
       "erklaerung": "Das Muster bearbeitet die Leitpunkte 2 (Unterkunft), 3 (Programm) und 4 (Erwartung); der Grund für die Buchung fehlt. Möglich sind auch zwei Leitpunkte plus ein eigener Aspekt, etwa das unfreundliche Personal.",
       "telc": true,
       "max": 45,
       "noetig": 3,
       "niveauTelc": "B2"
      },
      {
       "id": "tb2sa7",
       "typ": "beschwerde",
       "situation": "Sie haben einen Sprachkurs gebucht, der nicht hielt, was die Werbung versprach. Schreiben Sie eine Beschwerde an die Sprachschule.",
       "eingang": {
        "von": "Werbeprospekt der Sprachschule „Lingua Viva\"",
        "betreff": "Spanisch intensiv — in zehn Wochen sicher im Alltag",
        "text": "Lernen Sie Spanisch in kleinen Gruppen mit höchstens acht Teilnehmern! Alle unsere Lehrer sind Muttersprachler mit langjähriger Erfahrung. Zweimal pro Woche Unterricht in modernen Räumen, dazu Zugang zu unserer Lernplattform mit Übungen und Videos. Nach Abschluss erhalten Sie ein Zertifikat. Kursgebühr: vierhundertneunzig Euro inklusive aller Materialien. Sprachschule Lingua Viva, Marktstraße."
       },
       "sorte": "email",
       "an": "Sprachschule Lingua Viva, Kursverwaltung",
       "betreff": "Beschwerde zum Kurs „Spanisch intensiv\"",
       "punkte": [
        {
         "nr": 1,
         "was": "Gruppengröße",
         "hinweis": "Beschreiben Sie die tatsächliche Situation im Kurs."
        },
        {
         "nr": 2,
         "was": "Unterricht",
         "hinweis": "Erklären Sie, was mit Lehrkraft und Terminen nicht stimmte."
        },
        {
         "nr": 3,
         "was": "Materialien und Lernplattform",
         "hinweis": "Beschreiben Sie Probleme mit dem Zusatzangebot."
        },
        {
         "nr": 4,
         "was": "Ihre Forderung",
         "hinweis": "Sagen Sie, welche Lösung Sie erwarten."
        }
       ],
       "muster": "Sehr geehrte Damen und Herren,\nseit Anfang September besuche ich bei Ihnen den Kurs „Spanisch intensiv\". Leider entspricht der Kurs in wichtigen Punkten nicht den Angaben in Ihrem Prospekt, weshalb ich mich heute an Sie wende.\nIn Ihrer Werbung versprechen Sie Gruppen mit höchstens acht Teilnehmern. Stattdessen sitzen wir zu vierzehnt in einem Raum, der eigentlich für zehn Personen gedacht ist. Folglich kommt jeder Einzelne kaum zu Wort, und gerade das freie Sprechen wollte ich hier üben.\nZudem gab es große Probleme mit dem Unterricht selbst. Innerhalb von sechs Wochen ist der Kurs dreimal ausgefallen, und zwar jedes Mal ohne vorherige Information. Zwei weitere Stunden übernahm eine Vertretung, die nach eigener Aussage selbst erst seit kurzem Spanisch lernt.\nIch habe den vollen Preis von vierhundertneunzig Euro bezahlt und erwarte daher, dass Sie mir zum einen die ausgefallenen Stunden ersetzen und mir zum anderen einen angemessenen Teil der Gebühr zurückerstatten. Alternativ wäre ich bereit, kostenlos in eine kleinere Gruppe zu wechseln.\nIch freue mich auf Ihre Stellungnahme.\nMit freundlichen Grüßen\nLucía Fernández Weber",
       "woerter": 150,
       "hilfen": [
        "Leider entspricht … nicht den Angaben in Ihrem Prospekt.",
        "In Ihrer Werbung versprechen Sie … Stattdessen …",
        "Zudem gab es Probleme mit …",
        "… und zwar …",
        "Ich erwarte daher, dass Sie …",
        "Alternativ wäre ich bereit, …"
       ],
       "erklaerung": "Das Muster nimmt die Leitpunkte 1 (Gruppengröße), 2 (Unterricht) und 4 (Forderung); die Lernplattform bleibt weg. Du kannst stattdessen auch zwei Leitpunkte plus einen eigenen Aspekt wählen, zum Beispiel den zu kleinen Raum ausführlicher.",
       "telc": true,
       "max": 45,
       "noetig": 3,
       "niveauTelc": "B2"
      }
     ]
    },
    {
     "id": "tb2s2r2",
     "titel": "Runde 2",
     "aufgaben": [
      {
       "id": "tb2sa8",
       "typ": "beschwerde",
       "situation": "Sie haben online ein Möbelstück bestellt, und die Lieferung lief schlecht. Schreiben Sie eine Beschwerde an den Händler.",
       "eingang": {
        "von": "Ihre Bestellbestätigung",
        "betreff": "Bestellung 77-3051: Esstisch „Nordholz\", Eiche massiv",
        "text": "Vielen Dank für Ihre Bestellung! Ihr Esstisch aus massiver Eiche, zweihundert mal neunzig Zentimeter, wird innerhalb von zehn Werktagen geliefert. Unser Lieferservice trägt den Tisch in die Wohnung Ihrer Wahl, baut ihn auf und nimmt die Verpackung wieder mit. Den genauen Liefertermin vereinbaren wir telefonisch mit Ihnen. Kaufpreis: eintausendzweihundert Euro, bereits bezahlt. Ihr Team von Wohnwerk Möbelversand."
       },
       "sorte": "email",
       "an": "Wohnwerk Möbelversand, Kundenservice",
       "betreff": "Beschwerde zur Bestellung 77-3051",
       "punkte": [
        {
         "nr": 1,
         "was": "Liefertermin",
         "hinweis": "Beschreiben Sie die Probleme mit Termin und Kommunikation."
        },
        {
         "nr": 2,
         "was": "Zustand der Ware",
         "hinweis": "Beschreiben Sie, was mit dem Tisch nicht stimmt."
        },
        {
         "nr": 3,
         "was": "Service bei der Lieferung",
         "hinweis": "Erklären Sie, welche versprochenen Leistungen fehlten."
        },
        {
         "nr": 4,
         "was": "Ihre Forderung",
         "hinweis": "Sagen Sie, was Sie jetzt erwarten."
        }
       ],
       "muster": "Sehr geehrte Damen und Herren,\nam 2. Oktober habe ich bei Ihnen den Esstisch „Nordholz\" bestellt und bereits vollständig bezahlt. Leider bin ich mit der Abwicklung der Bestellung in keiner Weise zufrieden.\nObwohl Sie eine Lieferung innerhalb von zehn Werktagen zugesagt hatten, kam der Tisch erst nach knapp vier Wochen. Zudem hat sich niemand telefonisch bei mir gemeldet, um einen Termin zu vereinbaren. Ich habe mehrmals bei Ihrer Hotline angerufen, bin aber jedes Mal in der Warteschleife hängen geblieben.\nAls der Tisch schließlich geliefert wurde, gab es das nächste Problem. Entgegen Ihrer Zusage wurde der Tisch nicht in die Wohnung getragen und schon gar nicht aufgebaut. Die Lieferanten stellten das Paket vor die Haustür und fuhren sofort weiter. Folglich musste ich den schweren Karton mit Hilfe von Nachbarn in den dritten Stock tragen.\nIch fordere Sie daher auf, innerhalb von vierzehn Tagen einen Monteur zu schicken, der den Tisch fachgerecht aufbaut und die Verpackung mitnimmt. Für die entstandenen Unannehmlichkeiten erwarte ich außerdem einen angemessenen Preisnachlass.\nMit freundlichen Grüßen\nJonas Albrecht",
       "woerter": 150,
       "hilfen": [
        "Leider bin ich mit … in keiner Weise zufrieden.",
        "Obwohl Sie … zugesagt hatten, …",
        "Als …, gab es das nächste Problem.",
        "Entgegen Ihrer Zusage wurde …",
        "Ich fordere Sie daher auf, … zu …",
        "Für die entstandenen Unannehmlichkeiten erwarte ich …"
       ],
       "erklaerung": "Das Muster bearbeitet die Leitpunkte 1 (Liefertermin), 3 (Service) und 4 (Forderung); der Zustand der Ware bleibt weg. Ebenso möglich: zwei Leitpunkte plus ein eigener Aspekt, etwa die schlechte Erreichbarkeit der Hotline.",
       "telc": true,
       "max": 45,
       "noetig": 3,
       "niveauTelc": "B2"
      },
      {
       "id": "tb2sa9",
       "typ": "beschwerde",
       "situation": "Sie haben einen Vertrag in einem Fitnessstudio abgeschlossen, das seine Versprechen nicht einhält. Schreiben Sie eine Beschwerde an die Studioleitung.",
       "eingang": {
        "von": "Werbeprospekt des Fitnessstudios „Kraftwerk Mitte\"",
        "betreff": "Neueröffnung — trainieren, wann Sie wollen!",
        "text": "Unser Studio ist täglich von sechs bis dreiundzwanzig Uhr für Sie geöffnet. Moderne Geräte, über dreißig Kurse pro Woche, ein großer Saunabereich und eine persönliche Trainingsberatung beim Start. Im ersten Jahr zahlen Sie nur neunundzwanzig Euro im Monat, ohne Anmeldegebühr. Die Mitgliedschaft läuft zwölf Monate und kann danach monatlich gekündigt werden. Kraftwerk Mitte, Ihr Studio im Zentrum."
       },
       "sorte": "email",
       "an": "Kraftwerk Mitte, Studioleitung",
       "betreff": "Beschwerde zu meiner Mitgliedschaft, Mitgliedsnummer 2264",
       "punkte": [
        {
         "nr": 1,
         "was": "Öffnungszeiten und Kurse",
         "hinweis": "Beschreiben Sie, was vom Angebot nicht stimmt."
        },
        {
         "nr": 2,
         "was": "Kosten",
         "hinweis": "Erklären Sie das Problem mit der Abrechnung."
        },
        {
         "nr": 3,
         "was": "Trainingsberatung",
         "hinweis": "Beschreiben Sie Ihre Erfahrung mit der Beratung."
        },
        {
         "nr": 4,
         "was": "Ihre Erwartung",
         "hinweis": "Sagen Sie, welche Lösung Sie verlangen."
        }
       ],
       "muster": "Sehr geehrte Damen und Herren,\nseit dem 1. August bin ich Mitglied in Ihrem Studio. Leider haben sich mehrere Versprechen aus Ihrem Werbeprospekt als falsch erwiesen, und ich möchte mich deshalb bei Ihnen beschweren.\nIm Prospekt werben Sie mit Öffnungszeiten von sechs bis dreiundzwanzig Uhr an allen Tagen. Tatsächlich schließt das Studio am Wochenende bereits um achtzehn Uhr. Da ich unter der Woche bis spät arbeite, kann ich folglich kaum trainieren. Zudem finden statt der angekündigten dreißig Kurse höchstens zwölf pro Woche statt, und die Sauna ist seit Wochen geschlossen.\nNoch ärgerlicher ist die Abrechnung. Obwohl ausdrücklich keine Anmeldegebühr anfallen sollte, wurden mir im August zusätzlich neunundvierzig Euro abgebucht. Darüber hinaus beträgt der Monatsbeitrag nicht neunundzwanzig, sondern vierunddreißig Euro, angeblich wegen einer „Servicepauschale\", von der im Prospekt nirgends die Rede war.\nIch erwarte, dass Sie mir die Anmeldegebühr und die zu viel gezahlten Beiträge innerhalb von zwei Wochen zurücküberweisen. Außerdem bitte ich Sie, mir ein Sonderkündigungsrecht einzuräumen, da die vereinbarten Leistungen nicht erbracht werden. Ich hoffe auf eine schnelle und faire Lösung.\nMit freundlichen Grüßen\nNadine Osterhoff",
       "woerter": 150,
       "hilfen": [
        "Leider haben sich … als falsch erwiesen.",
        "Im Prospekt werben Sie mit … Tatsächlich …",
        "Noch ärgerlicher ist …",
        "Obwohl ausdrücklich …, wurden mir …",
        "… von der im Prospekt nirgends die Rede war.",
        "Außerdem bitte ich Sie, mir … einzuräumen."
       ],
       "erklaerung": "Das Muster bearbeitet die Leitpunkte 1 (Öffnungszeiten/Kurse), 2 (Kosten) und 4 (Erwartung); die Trainingsberatung fehlt. Auch zwei Leitpunkte plus ein eigener Aspekt sind möglich, zum Beispiel defekte Geräte.",
       "telc": true,
       "max": 45,
       "noetig": 3,
       "niveauTelc": "B2"
      }
     ]
    }
   ]
  }
 ],
 "laeufe": [
  {
   "id": "tb2sl1",
   "titel": "Prüfungslauf 1 — Aufgabe A",
   "minuten": 30,
   "aufgaben": [
    {
     "id": "tb2sa5",
     "typ": "information",
     "situation": "Sie interessieren sich für ein Weiterbildungsangebot im Bereich Digitales. Schreiben Sie an die Akademie.",
     "eingang": {
      "von": "Anzeige auf der Webseite der Volkshochschule Talbach",
      "betreff": "Berufsbegleitend zum Online-Marketing-Profi",
      "text": "In sechs Monaten lernen Sie die Grundlagen von Suchmaschinenoptimierung, sozialen Medien und Datenanalyse. Der Kurs verbindet Online-Lerneinheiten, die Sie flexibel bearbeiten, mit einem Präsenzsamstag pro Monat. Am Ende erstellen Sie ein eigenes Projekt für ein echtes Unternehmen aus der Region und erhalten ein Zertifikat. Geeignet für Berufstätige mit und ohne Vorkenntnisse. Beratung: Herr Lemaire, Akademie für digitale Berufe."
     },
     "sorte": "email",
     "an": "Herr Lemaire, Akademie für digitale Berufe",
     "betreff": "Fragen zum Kurs „Online-Marketing\"",
     "punkte": [
      {
       "nr": 1,
       "was": "Ihr beruflicher Hintergrund",
       "hinweis": "Beschreiben Sie Ihre aktuelle Tätigkeit."
      },
      {
       "nr": 2,
       "was": "Zeitaufwand",
       "hinweis": "Fragen Sie, wie viele Stunden pro Woche man einplanen muss."
      },
      {
       "nr": 3,
       "was": "Technische Voraussetzungen",
       "hinweis": "Erkundigen Sie sich, welche Geräte und Programme nötig sind."
      },
      {
       "nr": 4,
       "was": "Anerkennung des Zertifikats",
       "hinweis": "Fragen Sie, wie bekannt das Zertifikat bei Arbeitgebern ist."
      }
     ],
     "muster": "Sehr geehrter Herr Lemaire,\nauf der Webseite der Volkshochschule Talbach habe ich Ihr Angebot „Berufsbegleitend zum Online-Marketing-Profi\" entdeckt. Da ich mich beruflich neu orientieren möchte, interessiert mich der Kurs sehr.\nIch bin gelernte Hotelfachfrau und arbeite seit acht Jahren an der Rezeption eines Tagungshotels. Seit einiger Zeit betreue ich zusätzlich die Social-Media-Kanäle des Hauses, allerdings ohne jede Ausbildung in diesem Bereich. Folglich möchte ich mein Wissen gern auf eine solide Grundlage stellen und langfristig ganz ins Marketing wechseln.\nDa ich im Schichtdienst arbeite, ist für mich vor allem der Zeitaufwand entscheidend. Könnten Sie mir bitte sagen, wie viele Stunden pro Woche man für die Online-Einheiten realistisch einplanen sollte? Außerdem wüsste ich gern, ob die Präsenzsamstage verpflichtend sind oder ob man einen Termin auch online nachholen kann.\nSchließlich habe ich eine Frage zum Zertifikat. Wird es von Arbeitgebern in der Branche anerkannt, und haben frühere Teilnehmer damit eine Stelle im Marketing gefunden?\nVielen Dank im Voraus für Ihre Mühe. Ich freue mich sehr auf Ihre Antwort und gegebenenfalls auf ein persönliches Beratungsgespräch.\nMit freundlichen Grüßen\nKatharina Vogt",
     "woerter": 150,
     "hilfen": [
      "Da ich mich beruflich neu orientieren möchte, …",
      "Ich bin gelernte/gelernter … und arbeite seit …",
      "Für mich ist vor allem … entscheidend.",
      "Könnten Sie mir bitte sagen, wie viele …?",
      "Schließlich habe ich eine Frage zu …",
      "Vielen Dank im Voraus für Ihre Mühe."
     ],
     "erklaerung": "Das Muster behandelt die Leitpunkte 1 (Hintergrund), 2 (Zeitaufwand) und 4 (Zertifikat); die Technik bleibt weg. Erlaubt ist auch: zwei Leitpunkte plus ein eigener Aspekt, zum Beispiel die Kosten oder eine Förderung.",
     "telc": true,
     "max": 45,
     "noetig": 3,
     "niveauTelc": "B2"
    }
   ]
  },
  {
   "id": "tb2sl2",
   "titel": "Prüfungslauf 2 — Aufgabe B",
   "minuten": 30,
   "aufgaben": [
    {
     "id": "tb2sa10",
     "typ": "beschwerde",
     "situation": "Sie haben eine Fortbildung mit Übernachtung in einem Tagungshotel besucht. Vieles lief schief. Schreiben Sie eine Beschwerde an das Hotel.",
     "eingang": {
      "von": "Ihre Buchungsbestätigung",
      "betreff": "Seminarpaket „Arbeiten und Erholen\", Tagungshotel Birkenhöhe",
      "text": "Hiermit bestätigen wir Ihre Buchung für drei Tage: Einzelzimmer mit Schreibtisch und schnellem Internet, Seminarraum mit Beamer und Flipchart, Vollpension mit vegetarischer Auswahl sowie freie Nutzung des Wellnessbereichs am Abend. Ein Shuttlebus holt Sie am Anreisetag um vierzehn Uhr am Bahnhof ab. Gesamtpreis: fünfhundertachtzig Euro. Wir freuen uns auf Sie! Tagungshotel Birkenhöhe, Rezeption."
     },
     "sorte": "email",
     "an": "Tagungshotel Birkenhöhe, Hotelleitung",
     "betreff": "Beschwerde zu meinem Aufenthalt vom 4. bis 6. November",
     "punkte": [
      {
       "nr": 1,
       "was": "Anreise",
       "hinweis": "Beschreiben Sie, was bei der Ankunft passiert ist."
      },
      {
       "nr": 2,
       "was": "Zimmer und Technik",
       "hinweis": "Erklären Sie, was im Zimmer oder im Seminarraum fehlte."
      },
      {
       "nr": 3,
       "was": "Verpflegung",
       "hinweis": "Beschreiben Sie Probleme beim Essen."
      },
      {
       "nr": 4,
       "was": "Entschädigung",
       "hinweis": "Sagen Sie, was Sie vom Hotel erwarten."
      }
     ],
     "muster": "Sehr geehrte Damen und Herren,\nvom 4. bis 6. November habe ich bei Ihnen das Seminarpaket „Arbeiten und Erholen\" gebucht. Da ich mit meinem Aufenthalt sehr unzufrieden war, möchte ich Ihnen meine Erfahrungen schildern.\nSchon die Anreise begann schlecht. Der Shuttlebus, der mich um vierzehn Uhr am Bahnhof abholen sollte, kam nicht. Nach einer halben Stunde rief ich an der Rezeption an und erfuhr, dass der Fahrer krank sei. Folglich musste ich ein Taxi nehmen und kam zu spät zum Seminarbeginn.\nZudem fehlte in meinem Zimmer genau das, was ich für die Arbeit gebraucht hätte. Das Internet war so langsam, dass ich weder E-Mails abrufen noch an einer Videokonferenz teilnehmen konnte. Der Beamer im Seminarraum funktionierte am zweiten Tag überhaupt nicht, und es gab keinen Ersatz.\nVor diesem Hintergrund halte ich eine Entschädigung für angemessen. Ich erwarte, dass Sie mir die Taxikosten von achtunddreißig Euro erstatten und mir zusätzlich einen Teil des Gesamtpreises zurückzahlen. Über eine Antwort innerhalb von zwei Wochen würde ich mich freuen.\nMit freundlichen Grüßen\nSebastian Kühn",
     "woerter": 150,
     "hilfen": [
      "Da ich mit … sehr unzufrieden war, möchte ich …",
      "Schon die Anreise begann …",
      "Zudem fehlte …, was ich … gebraucht hätte.",
      "… so langsam, dass ich weder … noch …",
      "Vor diesem Hintergrund halte ich … für angemessen.",
      "Ich erwarte, dass Sie mir … erstatten."
     ],
     "erklaerung": "Das Muster nimmt die Leitpunkte 1 (Anreise), 2 (Zimmer/Technik) und 4 (Entschädigung); die Verpflegung fehlt. Ebenso möglich: zwei Leitpunkte plus ein eigener Aspekt, etwa der geschlossene Wellnessbereich.",
     "telc": true,
     "max": 45,
     "noetig": 3,
     "niveauTelc": "B2"
    }
   ]
  }
 ]
};
