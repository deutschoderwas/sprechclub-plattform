/* ============================================================
   deutschoderwas club — SPRECHEN telc Deutsch C1 Beruf

   Aufbau nach dem offiziellen telc-Format (Handbuch C1 Beruf und
   Übungstest 1 C1 Beruf, geprüft 03.11.2026). Alle Texte und
   Aufgaben eigene, Kontext Wirtschaft und Arbeitswelt.
   Erzeugt aus scratchpad/telcc1b mit bau.js.
   ============================================================ */

window.SPRECHEN_TELC_C1B = {
 "niveau": "telcC1B",
 "pruefung": "telc Deutsch C1 Beruf",
 "minuten": 16,
 "punkte": 48,
 "intro": "Die mündliche Prüfung bei telc C1 Beruf dauert etwa sechzehn Minuten zu zweit, vorher hast du zwanzig Minuten Vorbereitung. Du hältst eine Präsentation von drei bis vier Minuten für eine bestimmte Zielgruppe, ihr stellt euch Anschlussfragen, und ihr diskutiert über eine Frage aus der Arbeitswelt. Auswendig gelernte Vorträge unterbrechen die Prüfer. Von 48 Punkten gibt es 16 für den Inhalt und 32 für die Sprache.",
 "stufen": [
  {
   "nr": 1,
   "titel": "Präsentieren",
   "zeichen": "🎤",
   "was": "Für eine Zielgruppe präsentieren, nachfragen, antworten."
  },
  {
   "nr": 2,
   "titel": "Diskutieren",
   "zeichen": "⚖️",
   "was": "Position begründen, vergleichen, reagieren."
  },
  {
   "nr": 3,
   "titel": "Die Teile",
   "zeichen": "🎯",
   "was": "Präsentation, Anschlussfragen, Diskussion mit Musterlösung zum Anhören."
  },
  {
   "nr": 4,
   "titel": "Die ganze Prüfung",
   "zeichen": "⏱️",
   "was": "Alles hintereinander, sechzehn Minuten."
  }
 ],
 "bloecke": [
  {
   "id": "tc1bm1",
   "stufe": 1,
   "titel": "Präsentation für eine Zielgruppe aufbauen",
   "kurz": "Wer hört zu, was braucht diese Gruppe, wie gliedere ich drei bis vier Minuten?",
   "ziel": "Nach diesem Block richtest du eine Präsentation über Produkt, Unternehmen oder Arbeitsablauf gezielt an eine Zielgruppe aus und führst sie mit einer klaren Gliederung zu einem Ergebnis.",
   "zeichen": "🎤",
   "farbe": "turq",
   "aufgaben": [
    {
     "art": "wahl",
     "frage": "Sie stellen neuen Auszubildenden Ihr Unternehmen vor. Welcher Einstieg passt?",
     "opt": [
      "Herzlich willkommen bei uns. In den nächsten Minuten möchte ich Ihnen zeigen, was wir herstellen, wie das Haus aufgebaut ist und wen Sie in den ersten Wochen ansprechen können.",
      "Unser Unternehmen hat einen Umsatz von vielen Millionen und eine komplexe Matrixorganisation.",
      "Ich weiß nicht genau, was Sie interessiert, deshalb erzähle ich einfach mal."
     ],
     "loesung": 0,
     "erklaerung": "Der Einstieg begrüßt die Zielgruppe und nennt drei Punkte, die für neue Auszubildende wirklich wichtig sind."
    },
    {
     "art": "wahl",
     "frage": "Sie präsentieren ein Produkt vor möglichen Kunden. Was interessiert diese Zielgruppe am meisten?",
     "opt": [
      "Die Geschichte der Firmengründung im Detail",
      "Welchen Nutzen das Produkt für ihren Betrieb hat und was es kostet",
      "Die Namen aller Kollegen in der Entwicklung"
     ],
     "loesung": 1,
     "erklaerung": "Kunden fragen: Was bringt mir das? Nutzen, Preis und Service stehen deshalb im Mittelpunkt."
    },
    {
     "art": "wahl",
     "frage": "Warum kündigst du die Gliederung am Anfang an?",
     "opt": [
      "Damit die Zuhörer wissen, was kommt, und dir folgen können",
      "Weil es Zeit füllt",
      "Weil man sonst nicht anfangen darf"
     ],
     "loesung": 0,
     "erklaerung": "Eine angekündigte Gliederung gibt den Zuhörern Orientierung, und dir selbst gibt sie Sicherheit."
    },
    {
     "art": "wahl",
     "frage": "Wie viele Hauptpunkte passen in eine Präsentation von drei bis vier Minuten?",
     "opt": [
      "Zwei bis drei",
      "Acht bis zehn",
      "Nur die Einleitung"
     ],
     "loesung": 0,
     "erklaerung": "Mit zwei bis drei Punkten bleibt genug Zeit für ein Beispiel pro Punkt und ein Fazit."
    },
    {
     "art": "wahl",
     "frage": "Welcher Satz leitet elegant zum nächsten Punkt über?",
     "opt": [
      "Und jetzt was anderes.",
      "Nachdem ich Ihnen den Ablauf in der Fertigung gezeigt habe, komme ich nun zur Qualitätskontrolle.",
      "Punkt zwei."
     ],
     "loesung": 1,
     "erklaerung": "Die Überleitung fasst kurz zusammen und kündigt den nächsten Punkt an. So bleibt der rote Faden sichtbar."
    },
    {
     "art": "wahl",
     "frage": "Sie erklären einen Produktionsprozess für Besucher ohne Fachwissen. Was tun Sie?",
     "opt": [
      "Viele Fachbegriffe verwenden, damit es professionell klingt",
      "Den Prozess Schritt für Schritt erklären und Fachbegriffe kurz erläutern",
      "Den Prozess überspringen"
     ],
     "loesung": 1,
     "erklaerung": "Gute Präsentationen passen den Wortschatz an die Zielgruppe an. Ein Fachbegriff plus kurze Erklärung wirkt kompetent und verständlich."
    },
    {
     "art": "wahl",
     "frage": "Womit beenden Sie eine Präsentation über Ihr Aufgabengebiet?",
     "opt": [
      "Mit einem kurzen Fazit und dem Angebot, Fragen zu beantworten",
      "Mit einem neuen Thema",
      "Mit „Das war es.\""
     ],
     "loesung": 0,
     "erklaerung": "Fazit und Überleitung zu Fragen bilden einen sauberen Abschluss und führen direkt zu Teil 1B."
    },
    {
     "art": "wahl",
     "frage": "Welches Beispiel macht eine Präsentation über Kundenzufriedenheit anschaulich?",
     "opt": [
      "Kundenzufriedenheit ist sehr wichtig für alle Firmen.",
      "Im letzten Quartal haben wir die Wartezeit an der Hotline von acht auf drei Minuten gesenkt, und die Zahl der Beschwerden ist um ein Drittel zurückgegangen.",
      "Viele Kunden sind zufrieden, manche nicht."
     ],
     "loesung": 1,
     "erklaerung": "Ein konkretes Beispiel mit Zahlen aus dem eigenen Betrieb bleibt im Kopf. Allgemeine Aussagen nicht."
    },
    {
     "art": "ordnen",
     "frage": "Bau den Satz, mit dem Sie die Gliederung ankündigen.",
     "teile": [
      "Ich",
      "möchte",
      "meine",
      "Präsentation",
      "in",
      "drei",
      "Teile",
      "gliedern."
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
     "erklaerung": "Modalverb auf Position zwei, Infinitiv am Ende. Danach nennen Sie die drei Teile."
    },
    {
     "art": "ordnen",
     "frage": "Bau den Satz, mit dem Sie zum Fazit überleiten.",
     "teile": [
      "Damit",
      "komme",
      "ich",
      "zum",
      "Schluss",
      "meiner",
      "Präsentation."
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
     "erklaerung": "„Damit\" auf Position eins, danach das Verb. Ein klares Signal, dass jetzt das Fazit kommt."
    }
   ]
  },
  {
   "id": "tc1bm2",
   "stufe": 1,
   "titel": "Anschlussfragen stellen und beantworten",
   "kurz": "Gezielt nachfragen, auf Fragen sicher reagieren, auch wenn man die Antwort nicht sofort weiß",
   "ziel": "Nach diesem Block stellst du zur Präsentation deines Gegenübers mindestens zwei sinnvolle Anschlussfragen und beantwortest Fragen zu deiner eigenen Präsentation ruhig und präzise.",
   "zeichen": "❓",
   "farbe": "gold",
   "aufgaben": [
    {
     "art": "wahl",
     "frage": "Welche Anschlussfrage bezieht sich genau auf die Präsentation?",
     "opt": [
      "Wie geht es Ihnen heute?",
      "Sie haben erwähnt, dass Ihre Firma die Lieferzeit halbiert hat. Wie genau ist Ihnen das gelungen?",
      "Haben Sie noch etwas zu sagen?"
     ],
     "loesung": 1,
     "erklaerung": "Eine gute Anschlussfrage greift ein Detail aus der Präsentation auf und fragt gezielt weiter."
    },
    {
     "art": "wahl",
     "frage": "Wie leiten Sie eine Frage höflich ein?",
     "opt": [
      "Mich würde noch interessieren, wie …",
      "Sagen Sie mal, wie …",
      "Erklären Sie sofort, wie …"
     ],
     "loesung": 0,
     "erklaerung": "„Mich würde interessieren\" klingt höflich und sachlich. Das passt zum beruflichen Kontext."
    },
    {
     "art": "wahl",
     "frage": "Welche Frage ist eine offene Frage, die eine ausführliche Antwort ermöglicht?",
     "opt": [
      "Haben Sie Mitarbeiter?",
      "Welche Erfahrungen haben Sie mit der Umstellung auf das neue Lagersystem gemacht?",
      "Ist das teuer?"
     ],
     "loesung": 1,
     "erklaerung": "W-Fragen wie „Welche Erfahrungen …\" laden zu einer längeren Antwort ein. Ja-Nein-Fragen beenden das Gespräch schnell."
    },
    {
     "art": "wahl",
     "frage": "Sie verstehen eine Frage nicht genau. Was sagen Sie?",
     "opt": [
      "Keine Ahnung.",
      "Wenn ich Sie richtig verstehe, möchten Sie wissen, wie hoch die Kosten waren?",
      "Ich sage dazu nichts."
     ],
     "loesung": 1,
     "erklaerung": "Rückfragen ist erlaubt und zeigt Gesprächskompetenz. Gleichzeitig gewinnen Sie Zeit zum Nachdenken."
    },
    {
     "art": "wahl",
     "frage": "Sie kennen die genaue Zahl nicht. Wie antworten Sie?",
     "opt": [
      "Die genaue Zahl habe ich nicht im Kopf, aber es waren ungefähr zweihundert Kunden im Monat.",
      "Das weiß ich nicht.",
      "Das ist ein Geheimnis."
     ],
     "loesung": 0,
     "erklaerung": "Ehrlich sein und trotzdem eine ungefähre Angabe machen: So bleiben Sie im Gespräch."
    },
    {
     "art": "wahl",
     "frage": "Was sollte am Anfang Ihrer Antwort stehen?",
     "opt": [
      "Eine direkte Antwort auf die Frage, danach Begründung oder Beispiel",
      "Eine lange Einleitung über etwas anderes",
      "Eine Gegenfrage"
     ],
     "loesung": 0,
     "erklaerung": "Erst antworten, dann erklären. So merkt Ihr Gegenüber, dass Sie die Frage verstanden haben."
    },
    {
     "art": "wahl",
     "frage": "Welche Frage zeigt, dass Sie kritisch, aber fair nachfragen?",
     "opt": [
      "Das funktioniert doch nie, oder?",
      "Sie haben die Vorteile sehr überzeugend dargestellt. Gab es bei der Einführung auch Schwierigkeiten?",
      "Warum lügen Sie?"
     ],
     "loesung": 1,
     "erklaerung": "Erst anerkennen, dann nach Problemen fragen: Das ist kritisch, ohne unhöflich zu sein."
    },
    {
     "art": "wahl",
     "frage": "Welche Reaktion passt, nachdem Ihr Gegenüber Ihre Frage beantwortet hat?",
     "opt": [
      "Vielen Dank, das ist ein interessanter Ansatz. Darf ich noch eine zweite Frage stellen?",
      "Gut. Weiter.",
      "Das wusste ich schon."
     ],
     "loesung": 0,
     "erklaerung": "Ein kurzer Dank und die Überleitung zur zweiten Frage: In Teil 1B sollen Sie mindestens zwei Fragen stellen."
    },
    {
     "art": "ordnen",
     "frage": "Bau die Anschlussfrage.",
     "teile": [
      "Könnten",
      "Sie",
      "noch",
      "etwas",
      "genauer",
      "erklären,",
      "wie",
      "die",
      "Einarbeitung",
      "abläuft?"
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
     "erklaerung": "„Könnten Sie\" ist höflich. Die indirekte Frage mit „wie\" hat das Verb am Ende."
    },
    {
     "art": "ordnen",
     "frage": "Bau die Antwort mit Zeitgewinn.",
     "teile": [
      "Das",
      "ist",
      "eine",
      "gute",
      "Frage,",
      "über",
      "die",
      "ich",
      "auch",
      "schon",
      "nachgedacht",
      "habe."
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
      10,
      11
     ],
     "erklaerung": "Relativsatz mit Präposition: „über die\" bezieht sich auf „Frage\". Ein natürlicher Satz, der Ihnen Zeit gibt."
    }
   ]
  },
  {
   "id": "tc1bm3",
   "stufe": 2,
   "titel": "Diskutieren und vergleichen",
   "kurz": "Beispiele nennen, Position begründen, mit dem Herkunftsland oder Deutschland vergleichen",
   "ziel": "Nach diesem Block diskutierst du eine Frage aus der Arbeitswelt, ziehst Vergleiche mit deinem Herkunftsland oder Deutschland und gehst auf die Argumente deines Gegenübers ein.",
   "zeichen": "🌍",
   "farbe": "rot",
   "aufgaben": [
    {
     "art": "wahl",
     "frage": "Welcher Satz leitet einen Vergleich mit dem Herkunftsland ein?",
     "opt": [
      "In Brasilien ist das ganz anders geregelt. Dort bekommen die meisten Angestellten …",
      "Brasilien ist ein großes Land.",
      "Ich komme aus Brasilien, aber egal."
     ],
     "loesung": 0,
     "erklaerung": "Der Satz kündigt den Unterschied an und führt direkt zu einem konkreten Beispiel."
    },
    {
     "art": "wahl",
     "frage": "Welche Formulierung drückt eine Gemeinsamkeit aus?",
     "opt": [
      "Ähnlich wie in Deutschland wird auch in Rumänien …",
      "Im Unterschied zu Deutschland …",
      "Ganz im Gegenteil zu …"
     ],
     "loesung": 0,
     "erklaerung": "„Ähnlich wie\" zeigt Gemeinsamkeit, die anderen beiden Formulierungen zeigen Unterschiede."
    },
    {
     "art": "wahl",
     "frage": "Wie gehen Sie auf ein Argument Ihres Gegenübers ein?",
     "opt": [
      "Sie haben gerade gesagt, dass … Da stimme ich Ihnen teilweise zu, allerdings …",
      "Ich habe jetzt aber eine ganz andere Idee.",
      "Das ist falsch."
     ],
     "loesung": 0,
     "erklaerung": "Erst das Argument aufgreifen, dann teilweise zustimmen und einschränken. So zeigen Sie, dass Sie zugehört haben."
    },
    {
     "art": "wahl",
     "frage": "Welche Aussage ist ein gutes Beispiel in einer Diskussion über Gesundheitsangebote im Betrieb?",
     "opt": [
      "Gesundheit ist wichtig.",
      "In meiner letzten Firma gab es zweimal pro Woche eine Rückenschule in der Mittagspause, und nach einem Jahr hatten wir deutlich weniger Fehltage in der Logistik.",
      "Alle Firmen sollten etwas machen."
     ],
     "loesung": 1,
     "erklaerung": "Ein Beispiel aus eigener Erfahrung mit einem konkreten Ergebnis macht eine Position glaubwürdig."
    },
    {
     "art": "wahl",
     "frage": "Was heißt „Das hängt stark vom Betrieb ab\"?",
     "opt": [
      "Sie haben keine Meinung.",
      "Sie differenzieren: Die Antwort ist je nach Firma unterschiedlich.",
      "Sie lehnen die Frage ab."
     ],
     "loesung": 1,
     "erklaerung": "Differenzieren ist auf C1 erwünscht. Wichtig ist, danach zu erklären, wovon es abhängt."
    },
    {
     "art": "wahl",
     "frage": "Ihr Gegenüber widerspricht Ihnen. Welche Reaktion ist auf C1 angemessen?",
     "opt": [
      "Das sehe ich anders, und zwar aus folgendem Grund: …",
      "Nein.",
      "Wie Sie meinen."
     ],
     "loesung": 0,
     "erklaerung": "Widerspruch ist erlaubt, solange er begründet ist. „Und zwar aus folgendem Grund\" leitet die Begründung ein."
    },
    {
     "art": "wahl",
     "frage": "Wie fassen Sie am Ende einer Diskussion die Positionen zusammen?",
     "opt": [
      "Wir sind uns also einig, dass … , sehen aber unterschiedlich, ob …",
      "Dann hören wir jetzt auf.",
      "Ich habe gewonnen."
     ],
     "loesung": 0,
     "erklaerung": "Gemeinsamkeiten und Unterschiede benennen: Das zeigt, dass Sie der Diskussion gefolgt sind."
    },
    {
     "art": "wahl",
     "frage": "Welcher Satz verbindet Vergleich und eigene Position?",
     "opt": [
      "Gerade weil ich in Vietnam erlebt habe, wie selten Gehälter offen besprochen werden, finde ich die Offenheit hier eher hilfreich.",
      "In Vietnam ist es anders.",
      "Vietnam und Deutschland sind Länder."
     ],
     "loesung": 0,
     "erklaerung": "„Gerade weil\" verbindet die Erfahrung im Herkunftsland mit der eigenen Begründung."
    },
    {
     "art": "ordnen",
     "frage": "Bau den Satz für einen Vergleich.",
     "teile": [
      "Im",
      "Unterschied",
      "zu",
      "Deutschland",
      "ist",
      "das",
      "in",
      "meinem",
      "Herkunftsland",
      "gesetzlich",
      "nicht",
      "geregelt."
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
      10,
      11
     ],
     "erklaerung": "„Im Unterschied zu\" steht mit Dativ auf Position eins, danach folgt das Verb."
    },
    {
     "art": "ordnen",
     "frage": "Bau den Satz, mit dem Sie auf Ihr Gegenüber eingehen.",
     "teile": [
      "Ihr",
      "Einwand",
      "ist",
      "berechtigt,",
      "trotzdem",
      "bleibe",
      "ich",
      "bei",
      "meiner",
      "Meinung."
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
     "erklaerung": "Nach „trotzdem\" folgt direkt das Verb. Erst anerkennen, dann bei der eigenen Position bleiben."
    }
   ]
  },
  {
   "id": "tc1bm4",
   "stufe": 2,
   "titel": "Sprachliche Mittel auf C1",
   "kurz": "Präzise, variantenreich und flüssig sprechen statt immer dieselben Wörter",
   "ziel": "Nach diesem Block benutzt du beim Sprechen typische C1-Mittel: Nomen-Verb-Verbindungen, Konnektoren, abgestufte Meinungsäußerung und Formulierungen, die dir Zeit zum Nachdenken geben.",
   "zeichen": "🗝️",
   "farbe": "lila",
   "aufgaben": [
    {
     "art": "wahl",
     "frage": "Welche Formulierung ist präziser als „Ich finde das gut\"?",
     "opt": [
      "Ich halte diesen Ansatz für durchaus sinnvoll.",
      "Ich finde das sehr gut.",
      "Das ist gut, finde ich."
     ],
     "loesung": 0,
     "erklaerung": "„Etwas für sinnvoll halten\" ist präziser, und „durchaus\" stuft die Meinung fein ab."
    },
    {
     "art": "wahl",
     "frage": "Welche Nomen-Verb-Verbindung bedeutet „entscheiden\"?",
     "opt": [
      "eine Entscheidung treffen",
      "eine Entscheidung machen",
      "eine Entscheidung tun"
     ],
     "loesung": 0,
     "erklaerung": "Es heißt „eine Entscheidung treffen\". Solche festen Verbindungen klingen auf C1 natürlich."
    },
    {
     "art": "wahl",
     "frage": "Welcher Satz gibt Ihnen beim Sprechen Zeit zum Nachdenken, ohne unsicher zu wirken?",
     "opt": [
      "Ähm … ähm …",
      "Lassen Sie mich kurz überlegen, wie ich das am besten erkläre.",
      "Ich weiß gerade gar nichts."
     ],
     "loesung": 1,
     "erklaerung": "Solche Sätze klingen souverän und verschaffen ein paar Sekunden."
    },
    {
     "art": "wahl",
     "frage": "Welches Wort ersetzt „aber\" in gehobener Sprache am Satzanfang?",
     "opt": [
      "Allerdings",
      "Und",
      "Weil"
     ],
     "loesung": 0,
     "erklaerung": "„Allerdings\" leitet eine Einschränkung ein und steht gern auf Position eins, danach das Verb."
    },
    {
     "art": "wahl",
     "frage": "Welche Formulierung drückt starke Zustimmung aus?",
     "opt": [
      "Da kann ich Ihnen nur beipflichten.",
      "Das ist vielleicht so.",
      "Da bin ich mir unsicher."
     ],
     "loesung": 0,
     "erklaerung": "„Jemandem beipflichten\" heißt, ihm ausdrücklich zuzustimmen."
    },
    {
     "art": "wahl",
     "frage": "Welche Formulierung relativiert eine Aussage?",
     "opt": [
      "Das trifft zumindest auf größere Unternehmen zu.",
      "Das ist immer so.",
      "Das gilt für alle."
     ],
     "loesung": 0,
     "erklaerung": "„Zumindest\" schränkt den Geltungsbereich ein. Das wirkt differenziert und glaubwürdig."
    },
    {
     "art": "wahl",
     "frage": "Was ist die Nomen-Verb-Verbindung zu „berücksichtigen\"?",
     "opt": [
      "in Kauf nehmen",
      "in Betracht ziehen",
      "in Frage kommen"
     ],
     "loesung": 1,
     "erklaerung": "„In Betracht ziehen\" bedeutet berücksichtigen. „In Kauf nehmen\" heißt einen Nachteil akzeptieren."
    },
    {
     "art": "wahl",
     "frage": "Welcher Satz verwendet einen Konnektor auf C1-Niveau korrekt?",
     "opt": [
      "Die Nachfrage ist gestiegen, infolgedessen haben wir eine zweite Schicht eingeführt.",
      "Die Nachfrage ist gestiegen, infolgedessen wir haben eine zweite Schicht eingeführt.",
      "Infolgedessen die Nachfrage ist gestiegen."
     ],
     "loesung": 0,
     "erklaerung": "„Infolgedessen\" ist ein Adverb und steht auf Position eins des Hauptsatzes. Danach folgt das Verb."
    },
    {
     "art": "ordnen",
     "frage": "Bau den Satz mit abgestufter Meinung.",
     "teile": [
      "Ich",
      "bin",
      "nicht",
      "ganz",
      "davon",
      "überzeugt,",
      "dass",
      "das",
      "in",
      "jedem",
      "Betrieb",
      "funktioniert."
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
      10,
      11
     ],
     "erklaerung": "„Nicht ganz davon überzeugt\" ist eine höfliche, vorsichtige Form des Widerspruchs."
    },
    {
     "art": "ordnen",
     "frage": "Bau den Satz mit Nomen-Verb-Verbindung.",
     "teile": [
      "Die",
      "Geschäftsleitung",
      "hat",
      "die",
      "Kritik",
      "der",
      "Belegschaft",
      "zur",
      "Kenntnis",
      "genommen."
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
     "erklaerung": "„Etwas zur Kenntnis nehmen\" heißt, etwas registrieren. Die Verbindung kommt in Besprechungen häufig vor."
    }
   ]
  }
 ],
 "teile": [
  {
   "nr": 1,
   "art": "erzaehlen",
   "name": "Präsentation",
   "kurz": "Drei bis vier Minuten für eine Zielgruppe",
   "was": "Du präsentierst ein berufliches Thema, zum Beispiel dein Unternehmen, ein Produkt oder einen Ablauf, für eine bestimmte Zielgruppe.",
   "tipp": "Kündige die Gliederung an und denk an die Zielgruppe: Was wissen Auszubildende, Kunden oder Investoren schon, was nicht?",
   "zeichen": "🎤",
   "farbe": "turq",
   "punkte": 6,
   "runden": [
    {
     "id": "tc1bm1r1",
     "thema": "Unternehmensvorstellung: Stellen Sie neuen Auszubildenden Ihr Unternehmen vor.",
     "karten": [
      {
       "kopf": "Teil 1A · Präsentation",
       "kopfb": "Themenkarte",
       "auftrag": [
        "Halte eine Präsentation von drei bis vier Minuten, an die genannte Zielgruppe gerichtet.",
        "Sprich frei, nicht auswendig gelernt.",
        "Beantworte danach die Anschlussfrage."
       ],
       "id": "tc1bm1k1",
       "thema": "Unternehmensvorstellung: Stellen Sie neuen Auszubildenden Ihr Unternehmen vor.",
       "punkte": [
        "Was das Unternehmen anbietet und für wen",
        "Aufbau und wichtige Abteilungen",
        "Die ersten Wochen in der Ausbildung",
        "Was Sie von den Auszubildenden erwarten"
       ],
       "mustervortrag": "Guten Morgen und herzlich willkommen bei der Spedition Wagner. Ich freue mich, dass Sie heute Ihren ersten Tag bei uns haben. In den nächsten Minuten möchte ich Ihnen einen Überblick geben, damit Sie wissen, wo Sie hier gelandet sind. Ich spreche zuerst darüber, was wir eigentlich machen, dann zeige ich Ihnen, wie das Haus aufgebaut ist, und am Ende erkläre ich, wie Ihre ersten Wochen aussehen und was wir von Ihnen erwarten. Also, was machen wir? Wir sind eine Spedition mit Sitz hier in Duisburg, direkt am Hafen. Wir transportieren vor allem Stahlprodukte und Baustoffe, zum Beispiel Bleche, Rohre und Dämmmaterial, und zwar innerhalb Deutschlands, aber auch nach Polen, Tschechien und in die Niederlande. Unsere Kunden sind Stahlhändler, Baustoffhändler und einige große Baufirmen. Wir haben ungefähr hundertvierzig Mitarbeiter und fünfundsechzig eigene Lastwagen. Damit sind wir für die Branche ein mittelgroßes Unternehmen, und das hat für Sie einen Vorteil: Man kennt sich hier, und Sie werden in drei Jahren fast jede Abteilung von innen sehen. Damit komme ich zum Aufbau. Das Herz des Betriebs ist die Disposition im ersten Stock. Dort planen acht Disponenten jeden Tag, welcher Fahrer welche Ladung wohin bringt. Daneben sitzt der Vertrieb, der mit den Kunden die Preise verhandelt. Im Erdgeschoss finden Sie die Buchhaltung und die Personalabteilung, und hinten auf dem Hof haben wir unser Lager und die eigene Werkstatt, in der vier Mechaniker unsere Fahrzeuge warten. Wenn Sie etwas suchen oder nicht weiterwissen, ist Ihre erste Ansprechpartnerin Frau Kowalski. Sie ist für alle Auszubildenden zuständig und sitzt gleich neben dem Empfang. Nun zu Ihren ersten Wochen. Sie beginnen alle für einen Monat im Lager. Manche von Ihnen fragen sich vielleicht, warum Kaufleute für Spedition und Logistik im Lager anfangen. Die Antwort ist einfach: Wer später im Büro eine Tour plant, muss wissen, wie lange es dauert, einen Lastwagen mit zwanzig Tonnen Stahl zu beladen, und warum man Rohre nicht auf Paletten mit Zement stapelt. Danach wechseln Sie in die Disposition, wo Sie zuerst zuhören und mittelfristig kleinere Touren selbst planen. Einmal pro Woche haben wir außerdem eine Azubirunde, in der Sie Fragen stellen und sich mit den älteren Auszubildenden austauschen können. Zum Schluss noch kurz, was wir von Ihnen erwarten. Pünktlichkeit ist in unserer Branche keine Formalität. Wenn ein Fahrer um sechs Uhr losfahren soll und die Papiere nicht fertig sind, steht der Kunde am Mittag ohne Material da. Und wir erwarten, dass Sie fragen. Niemand erwartet, dass Sie in der ersten Woche alles wissen, aber wir erwarten, dass Sie sich melden, wenn Ihnen etwas unklar ist. Ich hoffe, Sie haben jetzt einen ersten Eindruck. Gibt es Fragen?",
       "frage": "Sie sagten, die Auszubildenden beginnen im Lager. Gibt es dafür auch Arbeitskleidung, und muss man dort schwer heben?",
       "musterantwort": "Ja, die Arbeitskleidung bekommen Sie von uns, also Sicherheitsschuhe, Handschuhe und eine Warnweste. Schwer heben müssen Sie eigentlich nicht, denn die Ladungen werden mit dem Stapler oder dem Kran bewegt. Für den Stapler brauchen Sie allerdings einen Schein. Den machen Sie im zweiten Monat bei uns im Haus, und die Kosten übernimmt die Firma."
      }
     ]
    },
    {
     "id": "tc1bm1r2",
     "thema": "Produktpräsentation: Stellen Sie möglichen Geschäftskunden ein Produkt Ihres Unternehmens vor.",
     "karten": [
      {
       "kopf": "Teil 1A · Präsentation",
       "kopfb": "Themenkarte",
       "auftrag": [
        "Halte eine Präsentation von drei bis vier Minuten, an die genannte Zielgruppe gerichtet.",
        "Sprich frei, nicht auswendig gelernt.",
        "Beantworte danach die Anschlussfrage."
       ],
       "id": "tc1bm1k2",
       "thema": "Produktpräsentation: Stellen Sie möglichen Geschäftskunden ein Produkt Ihres Unternehmens vor.",
       "punkte": [
        "Welches Problem das Produkt löst",
        "Funktionen und Nutzung im Alltag",
        "Kosten und Einführung",
        "Erfahrungen bisheriger Kunden"
       ],
       "mustervortrag": "Guten Tag, meine Damen und Herren, vielen Dank, dass Sie sich die Zeit nehmen. Mein Name ist Ana Ribeiro, und ich arbeite bei der Firma Tourenwerk in Dortmund. Wir haben eine Software entwickelt, mit der ambulante Pflegedienste ihre täglichen Touren planen. Ich möchte Ihnen in den nächsten Minuten zeigen, welches Problem die Software löst, wie sie im Alltag funktioniert, was sie kostet und welche Erfahrungen unsere Kunden bisher gemacht haben. Viele von Ihnen leiten selbst einen Pflegedienst, deshalb kennen Sie das Problem genau. Jeden Abend sitzt eine Pflegedienstleitung mit Papierlisten oder einer großen Tabelle da und überlegt, welche Pflegekraft am nächsten Morgen welche Patienten besucht. Dann ruft um halb sieben jemand an und meldet sich krank, und die ganze Planung muss neu gemacht werden. Bei einem Pflegedienst mit dreißig Mitarbeitern kostet das nach unseren Messungen jede Woche zwölf bis fünfzehn Stunden. Genau hier setzt unsere Software an. Sie geben einmal ein, welche Patienten welche Leistungen brauchen, zu welchen Zeiten sie versorgt werden müssen und welche Pflegekraft welche Qualifikation hat. Die Software schlägt dann automatisch Touren vor, bei denen die Fahrtwege möglichst kurz sind. Fällt jemand aus, drücken Sie auf einen Knopf, und innerhalb von wenigen Sekunden werden die Patienten auf die anderen Touren verteilt. Die Pflegekräfte sehen ihre Tour auf dem Diensthandy, einschließlich der Hinweise, etwa wo der Schlüssel liegt oder dass ein Patient schlecht hört. Und sie können direkt beim Patienten dokumentieren, was sie gemacht haben, sodass die Abrechnung mit der Pflegekasse fast von selbst entsteht. Nun zu den Kosten. Wir berechnen eine monatliche Gebühr pro Pflegekraft, die die Software nutzt, und zwar neun Euro. Für einen Dienst mit dreißig Mitarbeitern sind das zweihundertsiebzig Euro im Monat. Die Einführung dauert ungefähr vier Wochen. In dieser Zeit kommt eine Kollegin von uns zweimal zu Ihnen und schult das Team vor Ort. Danach erreichen Sie unseren Kundenservice werktags von sieben bis neunzehn Uhr, also genau dann, wenn in der Pflege geplant wird. Zum Schluss möchte ich Ihnen kurz von einem Kunden erzählen. Der Pflegedienst Sonnenhof in Hamm arbeitet seit gut einem Jahr mit unserer Software. Die Leiterin, Frau Demir, hat uns gesagt, dass sie jetzt abends spätestens um achtzehn Uhr nach Hause geht, früher war es oft zwanzig Uhr. Und die Pflegekräfte fahren im Schnitt pro Tag zwölf Kilometer weniger, weil die Touren besser geplant sind. Wenn Sie möchten, können Sie die Software vier Wochen lang kostenlos testen. Ich danke Ihnen für Ihre Aufmerksamkeit und beantworte jetzt gern Ihre Fragen.",
       "frage": "Das klingt überzeugend. Aber wie sieht es mit dem Datenschutz aus? Es geht ja um sehr persönliche Gesundheitsdaten.",
       "musterantwort": "Das ist eine sehr wichtige Frage, die uns fast jeder Kunde stellt. Alle Daten liegen auf Servern in Frankfurt, also in Deutschland, und sie werden verschlüsselt übertragen. Die Pflegekräfte sehen auf dem Handy nur die Patienten ihrer eigenen Tour, und nur für diesen Tag. Außerdem lassen wir die Software jedes Jahr von einem unabhängigen Prüfer kontrollieren. Den aktuellen Prüfbericht schicke ich Ihnen gern zu."
      }
     ]
    },
    {
     "id": "tc1bm1r3",
     "thema": "Produktionsprozess: Erklären Sie Besuchern einer Partnerfirma, wie in Ihrem Betrieb ein Produkt entsteht.",
     "karten": [
      {
       "kopf": "Teil 1A · Präsentation",
       "kopfb": "Themenkarte",
       "auftrag": [
        "Halte eine Präsentation von drei bis vier Minuten, an die genannte Zielgruppe gerichtet.",
        "Sprich frei, nicht auswendig gelernt.",
        "Beantworte danach die Anschlussfrage."
       ],
       "id": "tc1bm1k3",
       "thema": "Produktionsprozess: Erklären Sie Besuchern einer Partnerfirma, wie in Ihrem Betrieb ein Produkt entsteht.",
       "punkte": [
        "Das Produkt und seine Kunden",
        "Die wichtigsten Schritte der Herstellung",
        "Qualitätskontrolle",
        "Was sich in den letzten Jahren verändert hat"
       ],
       "mustervortrag": "Herzlich willkommen bei Fensterbau Hollmann. Ich freue mich, dass Sie aus Österreich zu uns gekommen sind. Bevor wir gleich in die Halle gehen, möchte ich Ihnen kurz erklären, wie bei uns ein Kunststofffenster entsteht, damit Sie unten besser verstehen, was Sie sehen. Ich gehe in vier Schritten vor: Zuerst sage ich ein paar Worte zum Produkt, dann erkläre ich die Herstellung, danach die Qualitätskontrolle, und am Ende erzähle ich, was sich bei uns in den letzten Jahren geändert hat. Wir stellen Fenster und Balkontüren aus Kunststoff her, und zwar ausschließlich nach Maß. Kein Fenster ist bei uns wie das andere. Unsere Kunden sind vor allem Fensterbaubetriebe und Bauunternehmen hier in Niedersachsen und in den Niederlanden. Am Tag verlassen ungefähr dreihundertfünfzig Fenster unser Werk. Nun zur Herstellung. Am Anfang steht der Auftrag, der direkt aus unserem Bestellsystem an die Maschinen geht. Im ersten Schritt werden die Kunststoffprofile, die wir in Stangen von sechs Metern geliefert bekommen, automatisch auf die richtige Länge zugeschnitten. Dann wird in jedes Profil ein Stahlkern eingeschoben und verschraubt. Das ist wichtig für die Stabilität, besonders bei großen Fenstern. Im nächsten Schritt werden die vier Teile des Rahmens an den Ecken verschweißt. Dabei werden die Enden auf ungefähr zweihundertvierzig Grad erhitzt und zusammengepresst. Anschließend entfernt eine Maschine die Schweißnaht, damit die Ecken glatt sind. Danach bauen unsere Mitarbeiter von Hand die Beschläge ein, also die Teile, mit denen man das Fenster öffnet und kippt. Zuletzt kommt die Glasscheibe hinein, die wir von einem Partner aus der Region bekommen. Damit komme ich zur Qualitätskontrolle. Jedes Fenster wird vor dem Verpacken geprüft. Ein Kollege kontrolliert die Maße, öffnet und schließt das Fenster mehrmals und prüft die Dichtungen. Außerdem nehmen wir jede Woche zufällig ein Fenster aus der Produktion und testen im Labor, ob es Wind und Schlagregen standhält. Fehler, die wir hier finden, kosten uns zehn Euro. Fehler, die erst auf der Baustelle auffallen, kosten uns schnell fünfhundert Euro, weil ein Monteur hinfahren muss. Zum Schluss noch kurz, was sich verändert hat. Vor fünf Jahren haben wir noch fast alles von Hand zugeschnitten und geschweißt. Heute laufen diese Schritte automatisch, und ein Fenster ist in etwa vierzig Minuten fertig statt in zwei Stunden. Dafür haben wir damals rund zwei Millionen Euro investiert, was für einen Betrieb unserer Größe sehr viel Geld ist. Entlassen haben wir deshalb niemanden. Die Kollegen arbeiten jetzt mehr bei den Beschlägen und in der Kontrolle, wo man Erfahrung braucht. So, das war der Überblick. Haben Sie noch Fragen, bevor wir hinuntergehen?",
       "frage": "Sie sagten, die Profile sind aus Kunststoff. Wie gehen Sie mit den Resten um, die beim Zuschneiden entstehen?",
       "musterantwort": "Gute Frage, das werden wir oft gefragt. Die Reste sammeln wir in großen Behältern und geben sie an einen Recyclingbetrieb in Bremen. Dort wird der Kunststoff zerkleinert, und daraus werden neue Profile hergestellt. Die verwenden wir allerdings nur für den inneren Kern, weil die Oberfläche nicht ganz so schön weiß ist."
      }
     ]
    },
    {
     "id": "tc1bm1r4",
     "thema": "Aufgabengebiet: Stellen Sie neuen Kollegen Ihr derzeitiges Aufgabengebiet vor.",
     "karten": [
      {
       "kopf": "Teil 1A · Präsentation",
       "kopfb": "Themenkarte",
       "auftrag": [
        "Halte eine Präsentation von drei bis vier Minuten, an die genannte Zielgruppe gerichtet.",
        "Sprich frei, nicht auswendig gelernt.",
        "Beantworte danach die Anschlussfrage."
       ],
       "id": "tc1bm1k4",
       "thema": "Aufgabengebiet: Stellen Sie neuen Kollegen Ihr derzeitiges Aufgabengebiet vor.",
       "punkte": [
        "Ihre Stelle und Abteilung",
        "Typische Aufgaben im Arbeitsalltag",
        "Zusammenarbeit mit anderen Abteilungen",
        "Wobei die neuen Kollegen Sie unterstützen können"
       ],
       "mustervortrag": "Hallo zusammen, schön, dass ihr da seid. Ich bin Tamara Jović, ich arbeite seit vier Jahren hier im Einkauf, und ich möchte euch kurz erklären, was ich eigentlich den ganzen Tag mache. Ich gehe dabei so vor: Erst sage ich ein paar Worte zu meiner Stelle, dann beschreibe ich einen typischen Arbeitstag, danach erkläre ich, mit wem ich zusammenarbeite, und zum Schluss sage ich, wo ich mir von euch Unterstützung wünsche. Ich bin im strategischen Einkauf für die Elektronikbauteile zuständig. Wir bauen ja Steuerungen für Heizungsanlagen, und in jeder Steuerung stecken ungefähr dreihundert Bauteile, von Widerständen über Chips bis zu kleinen Displays. Meine Aufgabe ist es, dafür zu sorgen, dass diese Teile rechtzeitig, in der richtigen Qualität und zu einem vernünftigen Preis bei uns ankommen. Wie sieht ein normaler Tag aus? Morgens schaue ich als Erstes auf eine Liste, die mir zeigt, bei welchen Teilen der Bestand knapp wird. Dann rufe ich Lieferanten an oder schreibe ihnen, um Liefertermine zu bestätigen. Ein großer Teil meiner Zeit geht aber in Verhandlungen. Einmal im Jahr verhandeln wir mit unseren wichtigsten Lieferanten die Preise neu, und das bereite ich wochenlang vor. Ich vergleiche Angebote, schaue mir an, wie sich die Rohstoffpreise entwickelt haben, und überlege, wo wir Spielraum haben. Seit der Chipkrise vor einigen Jahren ist außerdem eine Aufgabe dazugekommen, die früher kaum eine Rolle gespielt hat: Ich suche ständig nach zweiten Lieferanten für wichtige Teile, damit wir nicht von einem einzigen Hersteller in Asien abhängig sind. Damit komme ich zur Zusammenarbeit. Am engsten arbeite ich mit der Entwicklung zusammen. Wenn die Kollegen dort ein neues Bauteil einplanen, sollten sie mich früh fragen, ob es lieferbar ist. Leider passiert das nicht immer, und dann haben wir ein Gerät entwickelt, für das es kein Teil gibt. Mit der Produktion bin ich täglich in Kontakt, weil sie mir sagt, was sie in den nächsten Wochen braucht. Und mit der Qualitätssicherung kläre ich, wenn eine Lieferung fehlerhaft war und wir sie zurückschicken müssen. Wo könnt ihr mich unterstützen? Ihr werdet in den ersten Wochen vor allem die Bestellungen für Standardteile übernehmen. Das klingt nicht aufregend, aber es entlastet mich sehr, weil ich dann mehr Zeit für Verhandlungen und für die Suche nach neuen Lieferanten habe. Später würde ich mich freuen, wenn einer von euch die Lieferanten in Osteuropa betreut, denn dort wollen wir in den nächsten Jahren mehr einkaufen. So, das war mein Arbeitsbereich in Kürze. Ich hoffe, ihr habt einen Eindruck bekommen. Fragt mich gern, wenn etwas unklar ist.",
       "frage": "Sie haben erwähnt, dass die Entwicklung Sie nicht immer früh genug fragt. Wie könnte man das verbessern?",
       "musterantwort": "Wir haben dazu im letzten Herbst einen ersten Schritt gemacht. Jetzt gibt es alle zwei Wochen eine kurze Runde, in der Entwicklung und Einkauf neue Bauteile gemeinsam besprechen. Das funktioniert schon besser. Mein Wunsch wäre noch, dass im Entwicklungsprogramm direkt angezeigt wird, ob ein Teil bei unseren Lieferanten verfügbar ist. Daran arbeiten unsere Informatiker gerade."
      }
     ]
    }
   ]
  },
  {
   "nr": 2,
   "art": "rueckmeldung",
   "name": "Anschlussfragen",
   "kurz": "Nachfragen und antworten",
   "was": "Du reagierst auf die Präsentation deines Gegenübers, stellst mindestens zwei Anschlussfragen und beantwortest Fragen zu deiner eigenen.",
   "tipp": "Gute Anschlussfragen gehen ins Detail: „Sie haben gesagt, dass … Wie genau …?\"",
   "zeichen": "🔁",
   "farbe": "gold",
   "punkte": 4,
   "runden": [
    {
     "id": "tc1bm2r1",
     "thema": "Dienstleistung: Büroumzüge für Unternehmen",
     "karten": [
      {
       "kopf": "Teil 1B · Anschlussfragen",
       "auftrag": [
        "Reagiere kurz auf die Präsentation deines Gegenübers.",
        "Stell mindestens zwei Anschlussfragen.",
        "Beantworte die Fragen zu deiner eigenen Präsentation."
       ],
       "id": "tc1bm2k1",
       "thema": "Dienstleistung: Büroumzüge für Unternehmen",
       "gehoert": "Dein Gegenüber hat einer Gruppe von Geschäftskunden die Dienstleistung seiner Firma vorgestellt: Die Firma organisiert komplette Büroumzüge, von der Planung über den Transport bis zum Anschluss der Computer am neuen Standort. Er erklärte, dass die meisten Umzüge am Wochenende stattfinden, damit der Betrieb am Montag weiterlaufen kann. Als Beispiel nannte er eine Versicherung mit hundertzwanzig Arbeitsplätzen, die in nur zwei Tagen umgezogen ist. Zum Schluss erwähnte er, dass die Firma einen festen Ansprechpartner für jedes Projekt stellt.",
       "punkte": [
        "Kurz rückmelden",
        "Mindestens zwei Anschlussfragen stellen",
        "Fragen zur eigenen Präsentation beantworten"
       ],
       "musterrueckmeldung": "Vielen Dank für die klare Präsentation. Besonders überzeugend fand ich das Beispiel mit der Versicherung, weil man sich sofort vorstellen kann, wie viel Planung hinter einem Umzug mit hundertzwanzig Arbeitsplätzen steckt. Auch der feste Ansprechpartner ist für Kunden sicher ein wichtiges Argument.",
       "musterfrage": "Ich hätte zwei Fragen. Zum einen: Was passiert, wenn am Montagmorgen doch etwas nicht funktioniert, zum Beispiel das Netzwerk? Sind dann noch Leute von Ihnen vor Ort? Und zum anderen würde mich interessieren, wie Sie mit vertraulichen Akten umgehen, etwa bei einer Anwaltskanzlei.",
       "musterantwort": "Zu Ihrer ersten Frage: Ja, am ersten Arbeitstag sind immer zwei Techniker von uns bis zum Mittag vor Ort, und danach sind sie eine Woche lang telefonisch erreichbar. Was die Akten betrifft, die werden in verschlossenen Behältern transportiert, die erst am neuen Standort wieder geöffnet werden. Unsere Mitarbeiter unterschreiben außerdem eine Verschwiegenheitserklärung."
      }
     ]
    },
    {
     "id": "tc1bm2r2",
     "thema": "Öffentlichkeitsarbeit einer Brauerei",
     "karten": [
      {
       "kopf": "Teil 1B · Anschlussfragen",
       "auftrag": [
        "Reagiere kurz auf die Präsentation deines Gegenübers.",
        "Stell mindestens zwei Anschlussfragen.",
        "Beantworte die Fragen zu deiner eigenen Präsentation."
       ],
       "id": "tc1bm2k2",
       "thema": "Öffentlichkeitsarbeit einer Brauerei",
       "gehoert": "Deine Gesprächspartnerin hat erklärt, wie eine mittelgroße Brauerei aus Franken Öffentlichkeitsarbeit macht. Die Brauerei bietet jeden Samstag Führungen an, unterstützt Sportvereine in der Region und veröffentlicht kurze Videos, in denen die Braumeister ihre Arbeit erklären. Werbung in Zeitungen gibt es fast keine mehr. Sie betonte, dass die Videos besonders junge Leute erreichen und dass die Führungen jedes Jahr über sechstausend Besucher haben. Ihr Fazit war, dass Nähe zur Region wichtiger ist als ein großes Werbebudget.",
       "punkte": [
        "Kurz rückmelden",
        "Mindestens zwei Anschlussfragen stellen",
        "Fragen zur eigenen Präsentation beantworten"
       ],
       "musterrueckmeldung": "Danke, das war sehr anschaulich. Mir hat gefallen, dass Sie gezeigt haben, wie eine Brauerei ohne großes Budget bekannt werden kann. Die Zahl von sechstausend Besuchern pro Jahr hat mich ehrlich gesagt überrascht.",
       "musterfrage": "Darf ich zwei Fragen stellen? Erstens: Wie gehen Sie in den Videos damit um, dass Alkohol ja ein sensibles Thema ist, gerade wenn Sie junge Leute erreichen? Und zweitens: Woran merken Sie eigentlich, ob sich diese Öffentlichkeitsarbeit in höheren Verkaufszahlen niederschlägt?",
       "musterantwort": "Das sind zwei berechtigte Fragen. Bei den Videos achten wir darauf, dass es um das Handwerk geht und nicht ums Trinken, und wir zeigen nie Personen, die jünger als fünfundzwanzig aussehen. Was die Verkaufszahlen angeht, das ist schwerer zu messen. Wir sehen aber, dass in Orten, in denen wir Vereine unterstützen, die Gaststätten häufiger unser Bier bestellen."
      }
     ]
    },
    {
     "id": "tc1bm2r3",
     "thema": "Erfolgsfaktoren eines Familienunternehmens",
     "karten": [
      {
       "kopf": "Teil 1B · Anschlussfragen",
       "auftrag": [
        "Reagiere kurz auf die Präsentation deines Gegenübers.",
        "Stell mindestens zwei Anschlussfragen.",
        "Beantworte die Fragen zu deiner eigenen Präsentation."
       ],
       "id": "tc1bm2k3",
       "thema": "Erfolgsfaktoren eines Familienunternehmens",
       "gehoert": "Dein Gegenüber hat über die Erfolgsfaktoren eines Fahrradherstellers aus dem Münsterland gesprochen, der seit drei Generationen in Familienbesitz ist. Er nannte drei Gründe für den Erfolg: Die Firma hat früh auf Elektrofahrräder gesetzt, sie baut ausschließlich in Deutschland, und sie hat sehr treue Mitarbeiter, die oft zwanzig Jahre und länger bleiben. Als Schwäche nannte er, dass Entscheidungen manchmal lange dauern, weil die Familie sich einig sein muss.",
       "punkte": [
        "Kurz rückmelden",
        "Mindestens zwei Anschlussfragen stellen",
        "Fragen zur eigenen Präsentation beantworten"
       ],
       "musterrueckmeldung": "Vielen Dank, das war gut gegliedert, und ich fand es sehr ehrlich, dass Sie am Ende auch eine Schwäche genannt haben. Das macht die Präsentation glaubwürdiger.",
       "musterfrage": "Mich würde zunächst interessieren, wie die Firma es schafft, in Deutschland zu produzieren und trotzdem mit den Preisen aus Asien mitzuhalten. Und meine zweite Frage betrifft die Nachfolge: Gibt es in der Familie schon jemanden aus der vierten Generation, der das Unternehmen übernehmen möchte?",
       "musterantwort": "Mit den billigsten Preisen kann die Firma gar nicht mithalten, und das versucht sie auch nicht. Die Räder sind eher im oberen Preisbereich, und die Kunden zahlen das für Qualität und schnellen Service. Zur Nachfolge: Die Tochter des jetzigen Chefs arbeitet seit zwei Jahren im Vertrieb mit. Ob sie die Firma übernimmt, ist aber noch nicht offiziell entschieden."
      }
     ]
    },
    {
     "id": "tc1bm2r4",
     "thema": "Ablauf einer Dienstleistung: Wartung von Aufzügen",
     "karten": [
      {
       "kopf": "Teil 1B · Anschlussfragen",
       "auftrag": [
        "Reagiere kurz auf die Präsentation deines Gegenübers.",
        "Stell mindestens zwei Anschlussfragen.",
        "Beantworte die Fragen zu deiner eigenen Präsentation."
       ],
       "id": "tc1bm2k4",
       "thema": "Ablauf einer Dienstleistung: Wartung von Aufzügen",
       "gehoert": "Deine Gesprächspartnerin hat erklärt, wie bei ihrem Arbeitgeber die Wartung von Aufzügen abläuft. Jeder Aufzug wird je nach Nutzung zwei- bis viermal im Jahr gewartet. Ein Techniker prüft dabei Seile, Bremsen und Türen und trägt die Ergebnisse in ein Tablet ein. Seit einem Jahr senden viele Aufzüge außerdem selbst Daten, sodass Störungen oft erkannt werden, bevor der Aufzug stehen bleibt. Sie erwähnte, dass die Zahl der Notfalleinsätze dadurch deutlich gesunken ist.",
       "punkte": [
        "Kurz rückmelden",
        "Mindestens zwei Anschlussfragen stellen",
        "Fragen zur eigenen Präsentation beantworten"
       ],
       "musterrueckmeldung": "Danke schön, ich habe sehr viel Neues gelernt. Ich wusste ehrlich gesagt nicht, dass Aufzüge inzwischen selbst melden, wenn etwas nicht stimmt. Das Beispiel mit den Notfalleinsätzen hat gut gezeigt, was das in der Praxis bringt.",
       "musterfrage": "Ich hätte zwei Anschlussfragen. Was passiert eigentlich, wenn jemand nachts im Aufzug stecken bleibt? Wie schnell ist dann ein Techniker da? Und außerdem würde mich interessieren, ob die Techniker die Arbeit mit den Daten und dem Tablet gut angenommen haben, besonders die älteren Kollegen.",
       "musterantwort": "Bei einem Notruf ist laut Vertrag innerhalb von einer Stunde jemand vor Ort, und wir haben rund um die Uhr Bereitschaft. Zu Ihrer zweiten Frage: Am Anfang gab es tatsächlich Widerstand. Einige erfahrene Techniker hatten das Gefühl, man traue ihrem Urteil nicht mehr. Inzwischen sehen die meisten aber, dass sie weniger nachts rausmüssen, und das hat viele überzeugt."
      }
     ]
    }
   ]
  },
  {
   "nr": 3,
   "art": "erzaehlen",
   "name": "Diskussion",
   "kurz": "Eine Frage aus der Arbeitswelt, etwa sechs Minuten",
   "was": "Ihr diskutiert über eine Frage, zum Beispiel familienfreundliche Arbeitszeiten. Beispiele nennen, Position begründen, mit dem Herkunftsland oder Deutschland vergleichen, auf das Gegenüber eingehen.",
   "tipp": "Einwände aufnehmen statt abwehren: „Das ist ein berechtigter Punkt, allerdings …\"",
   "zeichen": "💬",
   "farbe": "rot",
   "punkte": 6,
   "runden": [
    {
     "id": "tc1bm3r1",
     "thema": "Familienfreundliche Arbeitszeitmodelle",
     "karten": [
      {
       "kopf": "Teil 2 · Diskussion",
       "kopfb": "Frage",
       "auftrag": [
        "Nenne Beispiele und begründe deine Position.",
        "Vergleiche mit deinem Herkunftsland oder mit Deutschland.",
        "Geh auf die Argumente deines Gegenübers ein."
       ],
       "id": "tc1bm3k1",
       "thema": "Familienfreundliche Arbeitszeitmodelle",
       "quelle": "Diskussionsfrage aus einer Fachzeitschrift für Personalarbeit",
       "text": "„Brauchen wir familienfreundliche Arbeitszeitmodelle?\"",
       "punkte": [
        "Beispiele nennen",
        "Eigene Position begründen",
        "Mit dem Herkunftsland oder Deutschland vergleichen",
        "Auf die Argumente des Partners eingehen"
       ],
       "mustervortrag": "Ich würde die Frage klar mit Ja beantworten, und zwar ausdrücklich auch im Interesse der Unternehmen. Viele gut ausgebildete Leute, vor allem Frauen, arbeiten nach der Geburt eines Kindes nur noch wenige Stunden oder gar nicht mehr, weil sich ihre Arbeitszeiten nicht mit Kita und Schule vereinbaren lassen. Damit geht den Betrieben enorm viel Wissen verloren. Ein Beispiel aus meiner jetzigen Firma: Unsere beste Controllerin wollte nach der Elternzeit eigentlich kündigen. Wir haben ihr dann angeboten, dass sie an drei Tagen ins Büro kommt und an zwei Tagen von zu Hause arbeitet, mit einer festen Kernzeit von neun bis vierzehn Uhr. Sie ist geblieben, und ehrlich gesagt hätten wir sie kaum ersetzen können. Eine externe Fachkraft mit ihrer Erfahrung zu finden und einzuarbeiten, hätte uns nach Schätzung der Personalabteilung mindestens ein halbes Jahr und viel Geld gekostet. Gemessen daran war das neue Modell sehr günstig. Wenn ich das mit meinem Herkunftsland Polen vergleiche, sehe ich Gemeinsamkeiten und Unterschiede. In Polen ist es üblich, dass die Großeltern sich stark um die Kinder kümmern, deshalb arbeiten viele Mütter dort wieder Vollzeit. Gleichzeitig sind flexible Modelle in vielen Firmen noch die Ausnahme. In Deutschland gibt es zwar mehr Teilzeit, aber oft rutschen Frauen dann in eine Teilzeitfalle und kommen beruflich nicht mehr voran. Deshalb finde ich: Familienfreundlich heißt vor allem flexiblere Stunden, und zwar auch für Väter. Natürlich geht das nicht in jedem Beruf gleich gut. In einer Bäckerei oder auf einer Intensivstation kann man nicht von zu Hause arbeiten. Aber auch dort kann man Schichtpläne so gestalten, dass Eltern mitbestimmen dürfen. Wie sehen Sie das? Ist so etwas in Ihrer Branche realistisch?",
       "frage": "Ich verstehe Ihren Punkt, aber ist das nicht unfair gegenüber den Kollegen ohne Kinder? Die müssen dann die unbeliebten Schichten übernehmen.",
       "musterantwort": "Da haben Sie einen wichtigen Punkt angesprochen, und diesen Ärger habe ich selbst schon erlebt. Ich glaube, die Lösung liegt darin, dass Flexibilität für alle gilt, also auch für Kollegen ohne Kinder. Wer einen kranken Vater pflegt oder abends eine Weiterbildung macht, braucht genauso Spielraum. Wenn die Regeln für alle gleich sind, entsteht auch weniger Neid im Team."
      }
     ]
    },
    {
     "id": "tc1bm3r2",
     "thema": "Gesundheit im Betrieb",
     "karten": [
      {
       "kopf": "Teil 2 · Diskussion",
       "kopfb": "Frage",
       "auftrag": [
        "Nenne Beispiele und begründe deine Position.",
        "Vergleiche mit deinem Herkunftsland oder mit Deutschland.",
        "Geh auf die Argumente deines Gegenübers ein."
       ],
       "id": "tc1bm3k2",
       "thema": "Gesundheit im Betrieb",
       "quelle": "Frage aus einer Umfrage einer Wirtschaftszeitung",
       "text": "„Soll sich ein Unternehmen um die Gesundheit seiner Mitarbeiter kümmern?\"",
       "punkte": [
        "Beispiele nennen",
        "Eigene Position begründen",
        "Mit dem Herkunftsland oder Deutschland vergleichen",
        "Auf die Argumente des Partners eingehen"
       ],
       "mustervortrag": "Meiner Meinung nach ja, allerdings mit einer klaren Grenze. Ein Unternehmen ist dafür verantwortlich, dass die Arbeit selbst nicht krank macht. Das fängt bei ergonomischen Arbeitsplätzen an und hört bei vernünftigen Arbeitszeiten auf. Wenn das gut gemacht wird, profitieren beide Seiten, denn jeder Krankheitstag kostet die Firma Geld. Ich arbeite in einem Logistikzentrum, und dort wurde vor zwei Jahren eine Rückenschule eingeführt. Zweimal in der Woche kommt eine Physiotherapeutin und zeigt uns in der Pause, wie man richtig hebt und welche Übungen helfen. Außerdem wurden die Packtische höhenverstellbar gemacht. Die Fehltage wegen Rückenschmerzen sind danach deutlich zurückgegangen. Am Anfang haben einige Kollegen über die Übungen gelacht, inzwischen machen fast alle mit, und mehrere haben mir erzählt, dass sie zu Hause weniger Schmerzen haben. Für die Firma war das eine kleine Investition mit großer Wirkung. Wo ich skeptisch werde, ist das Privatleben. Ich möchte nicht, dass mein Arbeitgeber mir sagt, was ich essen soll oder wie viele Schritte ich am Tag gehen muss. Manche Firmen verteilen Fitnessuhren und belohnen Mitarbeiter, die sich viel bewegen. Das finde ich problematisch, weil der Arbeitgeber dadurch Daten bekommt, die ihn nichts angehen. In Brasilien, wo ich herkomme, bieten große Unternehmen oft eine private Krankenversicherung an, weil das öffentliche System überlastet ist. Für die Mitarbeiter ist das ein wichtiger Grund, bei einer Firma zu bleiben. In Deutschland ist man über die gesetzliche Krankenversicherung ohnehin gut abgesichert, deshalb geht es hier eher um Vorbeugung. Ich finde, Firmen sollten Angebote machen, aber niemand sollte gezwungen werden, daran teilzunehmen. Wie ist das bei Ihnen, gibt es in Ihrer Firma solche Angebote?",
       "frage": "Ich finde, Gesundheit ist Privatsache. Wenn jemand raucht oder sich nicht bewegt, ist das doch nicht das Problem des Arbeitgebers.",
       "musterantwort": "In gewisser Weise stimme ich Ihnen zu, das habe ich ja auch gesagt. Ob jemand raucht, geht den Chef nichts an. Aber wenn jemand Rückenschmerzen bekommt, weil er acht Stunden an einem zu niedrigen Tisch steht, dann ist das sehr wohl das Problem des Arbeitgebers. Für mich ist die Grenze also, ob die Ursache in der Arbeit liegt oder im Privatleben."
      }
     ]
    },
    {
     "id": "tc1bm3r3",
     "thema": "Betriebsklima",
     "karten": [
      {
       "kopf": "Teil 2 · Diskussion",
       "kopfb": "Frage",
       "auftrag": [
        "Nenne Beispiele und begründe deine Position.",
        "Vergleiche mit deinem Herkunftsland oder mit Deutschland.",
        "Geh auf die Argumente deines Gegenübers ein."
       ],
       "id": "tc1bm3k3",
       "thema": "Betriebsklima",
       "quelle": "Diskussionsfrage aus dem Intranet eines Unternehmens",
       "text": "„Was ist für ein gutes Betriebsklima wichtig?\"",
       "punkte": [
        "Beispiele nennen",
        "Eigene Position begründen",
        "Mit dem Herkunftsland oder Deutschland vergleichen",
        "Auf die Argumente des Partners eingehen"
       ],
       "mustervortrag": "Für mich hängt ein gutes Betriebsklima vor allem an zwei Dingen: an der Art, wie Vorgesetzte mit Fehlern umgehen, und daran, ob Informationen offen weitergegeben werden. Teamausflüge und Sommerfeste sind schön, aber sie ändern wenig, wenn im Alltag Misstrauen herrscht. Ich habe das in zwei Firmen ganz unterschiedlich erlebt. In meiner ersten Stelle wurde bei jedem Fehler sofort ein Schuldiger gesucht. Die Folge war, dass niemand Probleme gemeldet hat, bis es zu spät war. In meiner jetzigen Firma sagt unsere Teamleiterin bei jedem Fehler als Erstes: Was können wir daraus lernen? Seitdem trauen sich auch die Neuen, Fragen zu stellen, und die Stimmung ist deutlich entspannter. Der zweite Punkt ist Transparenz. Wenn Entscheidungen der Geschäftsleitung einfach verkündet werden, ohne Begründung, entstehen Gerüchte, und die vergiften das Klima. Als bei uns vor einem Jahr eine Abteilung verkleinert wurde, hat der Geschäftsführer alle zu einer Versammlung eingeladen und offen erklärt, warum. Das war unangenehm, aber danach gab es viel weniger Getuschel auf den Fluren als bei früheren Veränderungen. Wenn ich das mit Spanien vergleiche, wo ich aufgewachsen bin, dann fällt mir auf, dass dort das Persönliche eine größere Rolle spielt. Man geht mittags zusammen essen, spricht über die Familie, und der Chef kennt die Namen der Kinder. In Deutschland habe ich anfangs gedacht, die Kollegen seien kühl. Inzwischen sehe ich das anders. Hier ist man vielleicht zurückhaltender, aber dafür sehr verlässlich, und man weiß, woran man ist. Ich glaube, das ideale Betriebsklima verbindet beides, also Verlässlichkeit und ein bisschen persönliches Interesse aneinander. Was ist für Sie am wichtigsten?",
       "frage": "Ich glaube, das Wichtigste ist eigentlich ein gutes Gehalt. Wenn die Bezahlung nicht stimmt, hilft auch die netteste Chefin nichts.",
       "musterantwort": "Da ist sicher etwas dran. Wer sich unterbezahlt fühlt, ist schnell unzufrieden. Allerdings habe ich die Erfahrung gemacht, dass ein gutes Gehalt allein kein gutes Klima schafft. In meiner ersten Firma war die Bezahlung besser als heute, trotzdem haben viele nach kurzer Zeit gekündigt. Ich würde sagen, ein faires Gehalt ist die Voraussetzung, aber das Klima entsteht im Umgang miteinander."
      }
     ]
    },
    {
     "id": "tc1bm3r4",
     "thema": "Offene Gehälter",
     "karten": [
      {
       "kopf": "Teil 2 · Diskussion",
       "kopfb": "Frage",
       "auftrag": [
        "Nenne Beispiele und begründe deine Position.",
        "Vergleiche mit deinem Herkunftsland oder mit Deutschland.",
        "Geh auf die Argumente deines Gegenübers ein."
       ],
       "id": "tc1bm3k4",
       "thema": "Offene Gehälter",
       "quelle": "Frage aus einem Kommentar in einer Wirtschaftszeitung",
       "text": "„Sollten Gehälter im Betrieb offen sein?\"",
       "punkte": [
        "Beispiele nennen",
        "Eigene Position begründen",
        "Mit dem Herkunftsland oder Deutschland vergleichen",
        "Auf die Argumente des Partners eingehen"
       ],
       "mustervortrag": "Ich bin für mehr Offenheit bei Gehältern, aber ich glaube nicht, dass jeder das Gehalt jedes Kollegen kennen muss. Ein guter Weg wären klare Gehaltsbänder: Für jede Stelle wird veröffentlicht, zwischen welchem Mindest- und Höchstbetrag man verdient und wovon das abhängt. Mein wichtigstes Argument ist Fairness. Wenn Gehälter geheim sind, verdient oft derjenige mehr, der besser verhandelt, und nicht derjenige, der bessere Arbeit leistet. Eine Bekannte von mir hat zufällig erfahren, dass ihr Kollege mit derselben Aufgabe und weniger Berufserfahrung fast vierhundert Euro mehr im Monat bekommt. Sie war sehr enttäuscht und hat kurz darauf gekündigt. Mit offenen Gehaltsbändern wäre das vermutlich nicht passiert. Und die Firma hat damit eine erfahrene Kraft verloren, nur um ein paar hundert Euro im Monat zu sparen. Die Suche nach einer Nachfolgerin hat am Ende deutlich mehr gekostet als die Gehaltserhöhung, die sie verdient hätte. In Deutschland gibt es ja inzwischen ein Gesetz, nach dem Beschäftigte in größeren Betrieben erfahren dürfen, was Kollegen in vergleichbaren Positionen im Durchschnitt verdienen. Trotzdem spricht man hier ungern über Geld. In Vietnam, wo ich geboren bin, ist das noch ausgeprägter. Dort fragt man zwar Freunde manchmal ganz direkt, was sie verdienen, aber im Betrieb ist das Gehalt ein Geheimnis zwischen Chef und Mitarbeiter. Ich sehe allerdings auch ein Risiko. Wenn alle Zahlen offen auf dem Tisch liegen, gibt es vielleicht Neid und ständige Diskussionen, warum jemand hundert Euro mehr bekommt. Deshalb halte ich nachvollziehbare Regeln für wichtiger als eine Liste mit allen Namen und Beträgen. Wie würden Sie das sehen?",
       "frage": "Aber wenn es feste Gehaltsbänder gibt, lohnt es sich doch nicht mehr, sich besonders anzustrengen. Jeder bekommt dann ungefähr dasselbe.",
       "musterantwort": "Das sehe ich etwas anders. Ein Gehaltsband hat ja eine Spanne, und innerhalb dieser Spanne kann man durch gute Leistung durchaus aufsteigen. Der Unterschied ist nur, dass dann klar ist, wofür jemand mehr bekommt. Ich glaube sogar, dass das motivierender ist, weil man weiß, was man tun muss, um mehr zu verdienen."
      }
     ]
    }
   ]
  }
 ],
 "laeufe": [
  {
   "id": "tc1bml1",
   "titel": "Prüfungslauf 1",
   "minuten": 16,
   "teile": [
    {
     "nr": 1,
     "art": "erzaehlen",
     "thema": "Ausbildung: Stellen Sie Schülern bei einem Berufsinformationstag Ihre Ausbildung vor.",
     "karten": [
      {
       "kopf": "Teil 1A · Präsentation",
       "kopfb": "Themenkarte",
       "auftrag": [
        "Halte eine Präsentation von drei bis vier Minuten, an die genannte Zielgruppe gerichtet.",
        "Sprich frei, nicht auswendig gelernt.",
        "Beantworte danach die Anschlussfrage."
       ],
       "id": "tc1bm1k5",
       "thema": "Ausbildung: Stellen Sie Schülern bei einem Berufsinformationstag Ihre Ausbildung vor.",
       "punkte": [
        "Welcher Beruf und welcher Betrieb",
        "Ablauf der Ausbildung",
        "Was Ihnen gefällt und was schwierig ist",
        "Tipps für die Bewerbung"
       ],
       "mustervortrag": "Hallo, ich bin Kevin Albers, ich bin zweiundzwanzig, und ich mache gerade im dritten Jahr eine Ausbildung zum Kaufmann im Groß- und Außenhandel bei der Firma Behrens Sanitärgroßhandel in Oldenburg. Ich möchte euch heute erzählen, was man in diesem Beruf eigentlich macht, wie die Ausbildung abläuft, was mir gefällt und was nicht so einfach ist. Und am Ende gebe ich euch noch ein paar Tipps für die Bewerbung. Fangen wir mit dem Beruf an. Viele denken bei Großhandel an ein großes Lager, aber eigentlich sind wir das Bindeglied zwischen den Herstellern und den Handwerkern. Wir kaufen Waschbecken, Rohre, Heizkörper und so weiter bei Herstellern in ganz Europa ein, lagern sie und verkaufen sie an Installateure in der Region. Ein Installateur, der morgens um sieben ein bestimmtes Ventil braucht, ruft bei uns an, und wir sorgen dafür, dass er es um neun auf der Baustelle hat. Die Ausbildung dauert drei Jahre, man kann sie mit guten Noten auch auf zweieinhalb Jahre verkürzen. Man ist abwechselnd im Betrieb und in der Berufsschule, bei uns sind das zwei Tage Schule und drei Tage Betrieb pro Woche. Im Betrieb durchläuft man alle Abteilungen. Ich war zuerst im Lager, dann im Einkauf, im Verkauf am Telefon, in der Buchhaltung und jetzt gerade im Außendienst. Dort fahre ich mit einem Kollegen zu Handwerksbetrieben und stelle neue Produkte vor. Das ist ehrlich gesagt die Abteilung, die mir bisher am meisten Spaß macht, weil man jeden Tag woanders ist. Was mir am meisten gefällt, ist der Kontakt mit Menschen. Die Installateure sind oft direkt, manchmal auch ein bisschen ungeduldig, aber wenn man ihnen helfen kann, sind sie sehr dankbar. Außerdem lernt man unglaublich viel über Technik, obwohl man eigentlich einen kaufmännischen Beruf lernt. Schwierig fand ich am Anfang die vielen Produkte. Wir haben über vierzigtausend Artikel, und es hat Monate gedauert, bis ich wusste, was ein Eckventil ist und wo der Unterschied zwischen zwei Rohrarten liegt. Auch die Buchhaltung war nicht so meins, ehrlich gesagt, aber da muss man durch. Zum Schluss ein paar Tipps für die Bewerbung. Erstens: Macht vorher ein Praktikum, wenn es geht. Ich habe selbst zwei Wochen bei Behrens gearbeitet, und danach wusste ich, dass mir das liegt. Und die Firma kannte mich schon. Zweitens: Ihr müsst kein Mathegenie sein, aber Prozentrechnung solltet ihr können, das kommt im Einstellungstest garantiert dran. Und drittens: Zeigt im Vorstellungsgespräch, dass ihr gern mit Leuten redet, das ist in diesem Beruf das Wichtigste. Vielen Dank fürs Zuhören. Wenn ihr Fragen habt, fragt einfach.",
       "frage": "Wie sind denn die Chancen, nach der Ausbildung übernommen zu werden?",
       "musterantwort": "Bei uns sind die Chancen sehr gut. In den letzten Jahren wurden fast alle Auszubildenden übernommen, wenn die Leistung gestimmt hat. Der Großhandel sucht ja dringend Leute. Ich habe mein Angebot schon bekommen und werde nach der Prüfung im Verkauf anfangen. Später möchte ich noch den Handelsfachwirt machen, das bezahlt die Firma zum Teil."
      }
     ]
    },
    {
     "nr": 2,
     "art": "rueckmeldung",
     "thema": "Produktvermarktung: ein neues Produkt einer Molkerei",
     "karten": [
      {
       "kopf": "Teil 1B · Anschlussfragen",
       "auftrag": [
        "Reagiere kurz auf die Präsentation deines Gegenübers.",
        "Stell mindestens zwei Anschlussfragen.",
        "Beantworte die Fragen zu deiner eigenen Präsentation."
       ],
       "id": "tc1bm2k5",
       "thema": "Produktvermarktung: ein neues Produkt einer Molkerei",
       "gehoert": "Dein Gegenüber hat vorgestellt, wie eine Molkerei aus dem Allgäu ihren neuen Haferjoghurt vermarktet. Die Molkerei verkauft eigentlich Milchprodukte und wollte mit dem neuen Produkt jüngere Kunden gewinnen. Statt Fernsehwerbung arbeitet sie mit Kochvideos im Internet und mit Probierständen in Supermärkten. Im ersten halben Jahr wurde das Produkt in rund achthundert Supermärkten gelistet. Ein Problem war, dass einige Stammkunden das Produkt als Verrat an der Milch empfanden.",
       "punkte": [
        "Kurz rückmelden",
        "Mindestens zwei Anschlussfragen stellen",
        "Fragen zur eigenen Präsentation beantworten"
       ],
       "musterrueckmeldung": "Vielen Dank, das war ein interessantes Beispiel, weil eine traditionelle Molkerei hier etwas ganz Neues versucht. Gut fand ich, dass Sie auch die Kritik der Stammkunden erwähnt haben.",
       "musterfrage": "Zu diesem Punkt hätte ich gleich eine Frage: Wie hat die Molkerei auf die Kritik der Stammkunden reagiert? Und eine zweite Frage: Lohnen sich die Probierstände im Supermarkt wirklich? Das ist doch personell sehr aufwendig.",
       "musterantwort": "Auf die Kritik hat die Molkerei mit einem offenen Brief auf ihrer Internetseite reagiert. Darin hat sie erklärt, dass sie weiter genauso viel Milch von denselben Bauern kauft und der Haferjoghurt nur eine Ergänzung ist. Die Probierstände sind tatsächlich teuer. Sie haben aber gezeigt, dass Kunden, die probiert haben, das Produkt sehr viel häufiger kaufen als nach einer Anzeige."
      }
     ]
    },
    {
     "nr": 3,
     "art": "erzaehlen",
     "thema": "Was gute Führungskräfte brauchen",
     "karten": [
      {
       "kopf": "Teil 2 · Diskussion",
       "kopfb": "Frage",
       "auftrag": [
        "Nenne Beispiele und begründe deine Position.",
        "Vergleiche mit deinem Herkunftsland oder mit Deutschland.",
        "Geh auf die Argumente deines Gegenübers ein."
       ],
       "id": "tc1bm3k5",
       "thema": "Was gute Führungskräfte brauchen",
       "quelle": "Diskussionsfrage aus einem Führungskräfteseminar",
       "text": "„Brauchen Führungskräfte Fachwissen oder vor allem Menschenkenntnis?\"",
       "punkte": [
        "Beispiele nennen",
        "Eigene Position begründen",
        "Mit dem Herkunftsland oder Deutschland vergleichen",
        "Auf die Argumente des Partners eingehen"
       ],
       "mustervortrag": "Ich denke, eine Führungskraft braucht beides, aber das Verhältnis ändert sich, je höher man steigt. Eine Teamleiterin in der Softwareentwicklung muss den Code ihrer Leute verstehen, sonst kann sie weder Aufwände einschätzen noch Qualität beurteilen. Eine Bereichsleiterin mit zweihundert Mitarbeitern dagegen braucht vor allem die Fähigkeit, die richtigen Leute an die richtige Stelle zu setzen und ihnen zu vertrauen. Ich habe beide Extreme erlebt. Mein früherer Chef in einem Ingenieurbüro war fachlich brillant, aber er konnte nicht delegieren. Er hat jede Zeichnung selbst kontrolliert und oft neu gemacht. Die Folge war, dass die jüngeren Ingenieure nichts lernten und frustriert waren. Später hatte ich eine Chefin, die fachlich weniger wusste als einige im Team. Sie hat das offen zugegeben und uns die fachlichen Entscheidungen überlassen, sich aber um alles andere gekümmert: um Konflikte, um Weiterbildung, um Rückendeckung gegenüber der Geschäftsleitung. Unter ihr hat das Team viel besser gearbeitet. Wir haben in dieser Zeit zwei große Projekte vor dem Termin abgeschlossen, und in drei Jahren hat nur ein einziger Kollege gekündigt, und das auch nur, weil er in eine andere Stadt gezogen ist. In Indien, wo ich studiert habe, wird ein Chef oft vor allem als Experte gesehen, der die Antworten kennt. Es gilt als unhöflich, ihm offen zu widersprechen. In Deutschland erwartet man eher, dass Mitarbeiter mitdenken und auch Kritik äußern. Für diese Art von Führung ist Menschenkenntnis viel wichtiger als für eine sehr hierarchische. Deshalb würde ich sagen: Fachwissen öffnet die Tür, aber führen kann nur, wer Menschen versteht. Wie sind Ihre Erfahrungen?",
       "frage": "Ich weiß nicht. Wenn der Chef fachlich keine Ahnung hat, nehmen die Mitarbeiter ihn doch nicht ernst.",
       "musterantwort": "Das kann passieren, da gebe ich Ihnen recht. Ein Chef, der so tut, als wüsste er alles, und dann Fehler macht, verliert schnell an Respekt. Aber meine Chefin hat ja gerade nicht so getan. Sie hat gesagt: Ihr seid die Fachleute, ich sorge dafür, dass ihr gut arbeiten könnt. Genau diese Ehrlichkeit hat ihr Respekt verschafft."
      }
     ]
    }
   ]
  },
  {
   "id": "tc1bml2",
   "titel": "Prüfungslauf 2",
   "minuten": 16,
   "teile": [
    {
     "nr": 1,
     "art": "erzaehlen",
     "thema": "Kundenzufriedenheit: Erklären Sie der neuen Geschäftsführerin, wie Ihre Abteilung die Zufriedenheit der Kunden misst und verbessert.",
     "karten": [
      {
       "kopf": "Teil 1A · Präsentation",
       "kopfb": "Themenkarte",
       "auftrag": [
        "Halte eine Präsentation von drei bis vier Minuten, an die genannte Zielgruppe gerichtet.",
        "Sprich frei, nicht auswendig gelernt.",
        "Beantworte danach die Anschlussfrage."
       ],
       "id": "tc1bm1k6",
       "thema": "Kundenzufriedenheit: Erklären Sie der neuen Geschäftsführerin, wie Ihre Abteilung die Zufriedenheit der Kunden misst und verbessert.",
       "punkte": [
        "Ihre Abteilung und ihre Kunden",
        "Wie Zufriedenheit gemessen wird",
        "Ein Beispiel für eine Verbesserung",
        "Vorschläge für die nächsten Schritte"
       ],
       "mustervortrag": "Frau Dr. Petersen, vielen Dank, dass Sie sich Zeit für unsere Abteilung nehmen. Sie haben mich gebeten, Ihnen zu erklären, wie wir im Kundenservice mit der Zufriedenheit unserer Kunden umgehen. Ich möchte dazu kurz unsere Abteilung vorstellen, dann erläutern, wie wir Zufriedenheit messen, Ihnen ein Beispiel für eine Verbesserung zeigen und am Ende zwei Vorschläge machen. Unser Kundenservice besteht aus vierzehn Mitarbeitern. Wir betreuen die rund achtzigtausend Privatkunden, die bei den Stadtwerken Strom und Gas beziehen. Die meisten melden sich, wenn sie umziehen, ihren Abschlag ändern wollen oder eine Rechnung nicht verstehen. Ungefähr zwei Drittel der Anfragen kommen telefonisch, der Rest per E-Mail oder über das Kundenportal. Wie messen wir Zufriedenheit? Wir haben drei Quellen. Erstens bekommen Kunden nach jedem Telefonat eine kurze Nachricht mit einer einzigen Frage: Wie zufrieden waren Sie mit der Lösung Ihres Anliegens, auf einer Skala von eins bis fünf? Ungefähr zwölf Prozent antworten, das ist für solche Umfragen ein guter Wert. Zweitens werten wir jeden Monat die Beschwerden aus und ordnen sie nach Themen. Und drittens schauen wir auf harte Zahlen, vor allem auf die Wartezeit am Telefon und darauf, wie viele Kunden wegen derselben Sache ein zweites Mal anrufen müssen. Diese letzte Zahl halte ich für die ehrlichste, denn wer zweimal anruft, war beim ersten Mal nicht zufrieden. Nun ein Beispiel. Im vorletzten Jahr haben wir festgestellt, dass fast ein Viertel aller Anrufe im Januar und Februar mit der Jahresabrechnung zu tun hatte. Viele Kunden verstanden nicht, warum ihr neuer Abschlag so stark gestiegen war. Wir haben uns daraufhin mit der Abrechnungsabteilung zusammengesetzt und die erste Seite der Rechnung komplett neu gestaltet. Jetzt steht dort oben in einem Kasten in drei Sätzen, wie viel man verbraucht hat, was das kostet und warum sich der Abschlag ändert. Im letzten Winter sind die Anrufe zur Abrechnung um fast vierzig Prozent zurückgegangen, und die durchschnittliche Bewertung ist von drei Komma eins auf drei Komma acht gestiegen. Was schlage ich für die nächsten Schritte vor? Erstens sollten wir das Kundenportal verbessern. Viele ältere Kunden kommen damit nicht zurecht und rufen dann doch an. Ein Test mit zehn Kunden aus verschiedenen Altersgruppen würde uns schnell zeigen, wo die Probleme liegen. Die Kosten dafür wären gering, und jeder Anruf, den wir dadurch vermeiden, spart uns im Schnitt etwa sechs Minuten Arbeitszeit. Zweitens wünsche ich mir, dass wir die Ergebnisse der Umfragen jeden Monat mit allen Abteilungen teilen. Viele Ursachen für Unzufriedenheit liegen nicht im Kundenservice, sondern in der Technik oder der Abrechnung. Vielen Dank, ich beantworte gern Ihre Fragen.",
       "frage": "Sie sagen, dass nur zwölf Prozent der Kunden antworten. Wie sicher können Sie sein, dass diese Ergebnisse wirklich repräsentativ sind?",
       "musterantwort": "Ganz sicher sein kann ich natürlich nicht. Wir wissen, dass vor allem sehr zufriedene und sehr unzufriedene Kunden antworten. Deshalb verlassen wir uns nie allein auf die Umfrage. Wir vergleichen sie immer mit den Beschwerden und der Zahl der wiederholten Anrufe. Wenn alle drei Werte in dieselbe Richtung zeigen, halte ich das Ergebnis für ziemlich belastbar."
      }
     ]
    },
    {
     "nr": 2,
     "art": "rueckmeldung",
     "thema": "Gewünschtes Aufgabengebiet: Wechsel ins Projektmanagement",
     "karten": [
      {
       "kopf": "Teil 1B · Anschlussfragen",
       "auftrag": [
        "Reagiere kurz auf die Präsentation deines Gegenübers.",
        "Stell mindestens zwei Anschlussfragen.",
        "Beantworte die Fragen zu deiner eigenen Präsentation."
       ],
       "id": "tc1bm2k6",
       "thema": "Gewünschtes Aufgabengebiet: Wechsel ins Projektmanagement",
       "gehoert": "Deine Gesprächspartnerin arbeitet seit acht Jahren als Bauzeichnerin in einem Architekturbüro und hat erklärt, warum sie gern ins Projektmanagement wechseln möchte. Sie möchte mehr Verantwortung übernehmen, mit Bauherren und Handwerkern verhandeln und Projekte von Anfang bis Ende begleiten. Um sich vorzubereiten, macht sie gerade berufsbegleitend eine Weiterbildung. Als Schwierigkeit nannte sie, dass sie bisher kaum Erfahrung mit Budgets hat.",
       "punkte": [
        "Kurz rückmelden",
        "Mindestens zwei Anschlussfragen stellen",
        "Fragen zur eigenen Präsentation beantworten"
       ],
       "musterrueckmeldung": "Danke, man hat bei Ihrer Präsentation sehr deutlich gespürt, dass Sie dieses Ziel wirklich verfolgen. Ich fand es gut, dass Sie offen gesagt haben, wo Sie noch Lücken haben.",
       "musterfrage": "Darf ich zwei Fragen stellen? Wie unterstützt Ihr jetziger Arbeitgeber Sie bei diesem Wechsel, zum Beispiel bei der Weiterbildung? Und wie wollen Sie die fehlende Erfahrung mit Budgets ausgleichen?",
       "musterantwort": "Mein Chef unterstützt mich zum Glück. Das Büro übernimmt die Hälfte der Kosten der Weiterbildung, und ich darf freitags früher gehen, wenn Unterricht ist. Was die Budgets betrifft, habe ich gefragt, ob ich bei einem laufenden Projekt die Kostenkontrolle übernehmen darf, zuerst gemeinsam mit einem erfahrenen Projektleiter. Damit fange ich im nächsten Monat an."
      }
     ]
    },
    {
     "nr": 3,
     "art": "erzaehlen",
     "thema": "Weiterbildung",
     "karten": [
      {
       "kopf": "Teil 2 · Diskussion",
       "kopfb": "Frage",
       "auftrag": [
        "Nenne Beispiele und begründe deine Position.",
        "Vergleiche mit deinem Herkunftsland oder mit Deutschland.",
        "Geh auf die Argumente deines Gegenübers ein."
       ],
       "id": "tc1bm3k6",
       "thema": "Weiterbildung",
       "quelle": "Frage aus einem Interview in einem Wirtschaftsmagazin",
       "text": "„Ist lebenslange Weiterbildung Pflicht des Arbeitgebers oder des Einzelnen?\"",
       "punkte": [
        "Beispiele nennen",
        "Eigene Position begründen",
        "Mit dem Herkunftsland oder Deutschland vergleichen",
        "Auf die Argumente des Partners eingehen"
       ],
       "mustervortrag": "Ich sehe hier eine geteilte Verantwortung, aber mit unterschiedlichen Schwerpunkten. Wenn sich die Arbeit durch neue Technik verändert, dann muss der Arbeitgeber die Weiterbildung bezahlen und in der Arbeitszeit ermöglichen. Wenn ein Mitarbeiter dagegen in eine ganz andere Richtung möchte, liegt die Verantwortung eher bei ihm selbst. Ein Beispiel aus unserem Betrieb: Wir sind eine Druckerei, und vor drei Jahren wurde eine neue Digitaldruckmaschine angeschafft. Die Firma hat alle Drucker für eine Woche zum Hersteller geschickt, das war selbstverständlich. Ein Kollege wollte dagegen zusätzlich Mediengestaltung lernen, weil er langfristig ins Layout wechseln möchte. Das hat er abends an der Volkshochschule gemacht und zur Hälfte selbst bezahlt. Ich finde diese Aufteilung fair. Die Firma profitiert ja trotzdem, denn er gestaltet jetzt schon kleinere Flyer für Kunden, die wir früher an eine Agentur gegeben hätten. Vielleicht übernimmt sie beim nächsten Kurs deshalb einen größeren Teil der Kosten. Wenn ich das mit der Türkei vergleiche, wo ich die ersten Berufsjahre verbracht habe, dann war Weiterbildung dort fast immer Privatsache. Wer weiterkommen wollte, hat am Wochenende Kurse belegt und alles selbst bezahlt. In Deutschland habe ich erlebt, dass Betriebe deutlich mehr investieren, und es gibt sogar staatliche Förderung, zum Beispiel das sogenannte Aufstiegsbafög für Meister und Techniker. Trotzdem glaube ich, dass niemand sich zurücklehnen darf. Die Technik verändert sich so schnell, dass ein Arbeitgeber gar nicht alles vorhersehen kann. Wer selbst neugierig bleibt und sich informiert, ist am Ende sicherer, auch wenn die Firma einmal schließt. Wie sehen Sie das, sollte der Arbeitgeber mehr übernehmen?",
       "frage": "Aber wenn die Firma die Weiterbildung bezahlt und der Mitarbeiter danach kündigt, hat sie doch umsonst investiert.",
       "musterantwort": "Diese Sorge kann ich gut nachvollziehen, und viele Firmen lösen das mit einer Rückzahlungsklausel. Wer innerhalb von zwei Jahren kündigt, muss einen Teil der Kosten zurückzahlen. Ich halte das für einen fairen Kompromiss. Und ehrlich gesagt bleiben Mitarbeiter eher, wenn sie merken, dass die Firma in sie investiert. Wer nie gefördert wird, sucht sich schneller etwas anderes."
      }
     ]
    }
   ]
  }
 ]
};
