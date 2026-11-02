/* ============================================================
   deutschoderwas club — HÖREN telc Deutsch C1 Hochschule

   Aufbau nach dem offiziellen telc-Format (telc „Tipps zur
   Prüfungsvorbereitung Deutsch C1 Hochschule", geprüft 02.11.2026).
   Alle Texte und Aufgaben eigene, nur das Format ist nachgebaut.
   Erzeugt aus scratchpad/telcc1 mit bau.js.
   ============================================================ */

window.HOEREN_TELC_C1H = {
 "niveau": "telcC1H",
 "pruefung": "telc Deutsch C1 Hochschule",
 "minuten": 40,
 "punkte": 28,
 "intro": "Der Hören-Teil bei telc C1 Hochschule dauert etwa vierzig Minuten, und jeder Text läuft nur EINMAL: acht kurze Äußerungen, ein Gespräch und ein Vortrag von etwa zehn Minuten, bei dem du einen Handzettel mit Notizen ergänzt. Wir üben erst die Strategien, dann jeden Teil einzeln, zuletzt alles am Stück. Nach jeder Antwort siehst du den Text mit der entscheidenden Stelle.",
 "stufen": [
  {
   "nr": 1,
   "titel": "Haltungen und Details",
   "zeichen": "👂",
   "was": "Was meint jemand — und wie geht der Satz richtig weiter?"
  },
  {
   "nr": 2,
   "titel": "Vorträge mitschreiben",
   "zeichen": "📝",
   "was": "Gliederung erkennen, Kerninformation notieren."
  },
  {
   "nr": 3,
   "titel": "Die Aufgabentypen",
   "zeichen": "🎯",
   "was": "Acht Personen, Gespräch, Vortrag — jeder Teil einzeln."
  },
  {
   "nr": 4,
   "titel": "Die ganze Prüfung",
   "zeichen": "⏱️",
   "was": "28 Aufgaben, etwa vierzig Minuten, alles nur einmal."
  }
 ],
 "bloecke": [
  {
   "id": "tc1h1",
   "stufe": 1,
   "titel": "Die Haltung hinter der Äußerung",
   "kurz": "Nicht das Thema zählt, sondern die Position: dafür, dagegen, unter Bedingungen, umgedacht.",
   "ziel": "Nach diesem Block erkennst du nach einmaligem Hören, welche Haltung eine Person einnimmt, auch wenn sie Gegenargumente erwähnt.",
   "zeichen": "🎯",
   "farbe": "turq",
   "mal": 1,
   "aufgaben": [
    {
     "art": "hoerwahl",
     "ort": "Thema: Gruppenarbeit im Studium",
     "wer": "Frau",
     "text": "Natürlich gibt es immer jemanden, der sich zurücklehnt, das kennt jeder. Trotzdem möchte ich auf Gruppenarbeit nicht verzichten, weil ich dabei Perspektiven kennenlerne, auf die ich allein nie gekommen wäre.",
     "frage": "Welche Haltung hat die Frau zur Gruppenarbeit?",
     "opt": [
      "Sie lehnt sie wegen unfairer Arbeitsteilung ab.",
      "Sie schätzt sie trotz bekannter Nachteile.",
      "Sie hält sie nur für sinnvoll, wenn Noten vergeben werden."
     ],
     "loesung": 1,
     "stelle": "Trotzdem möchte ich auf Gruppenarbeit nicht verzichten",
     "erklaerung": "Der Nachteil wird eingeräumt, „Trotzdem\" leitet die eigentliche Position ein."
    },
    {
     "art": "hoerwahl",
     "ort": "Thema: Digitale Vorlesungen",
     "wer": "Mann",
     "text": "Während der Umstellung auf Onlinelehre habe ich die Aufzeichnungen geliebt. Mittlerweile merke ich aber, dass ich sie mir nie ansehe und den Stoff vor mir herschiebe. Ich gehe deshalb lieber wieder in den Hörsaal.",
     "frage": "Was sagt der Mann über aufgezeichnete Vorlesungen?",
     "opt": [
      "Er bevorzugt heute den Präsenzunterricht.",
      "Er hält Aufzeichnungen nach wie vor für ideal.",
      "Er fordert, dass alle Vorlesungen aufgezeichnet werden."
     ],
     "loesung": 0,
     "stelle": "Ich gehe deshalb lieber wieder in den Hörsaal",
     "erklaerung": "„Mittlerweile\" markiert einen Meinungswechsel. Gefragt ist die heutige Haltung."
    },
    {
     "art": "hoerwahl",
     "ort": "Thema: Studiengebühren",
     "wer": "Frau",
     "text": "Grundsätzlich halte ich ein gebührenfreies Studium für richtig. Allerdings fände ich einen kleinen Beitrag für Langzeitstudenten vertretbar, sofern das Geld direkt in die Lehre fließt.",
     "frage": "Wie steht die Frau zu Studiengebühren?",
     "opt": [
      "Sie lehnt jede Form von Gebühren strikt ab.",
      "Sie fordert Gebühren für alle Studenten.",
      "Sie akzeptiert sie nur in einem begrenzten Fall unter einer Bedingung."
     ],
     "loesung": 2,
     "stelle": "sofern das Geld direkt in die Lehre fließt",
     "erklaerung": "„Allerdings\" schränkt ein, „sofern\" nennt die Bedingung. Die Haltung ist differenziert, nicht absolut."
    },
    {
     "art": "hoerwahl",
     "ort": "Thema: Noten in Seminaren",
     "wer": "Mann",
     "text": "Man sagt oft, Noten würden motivieren. Ich beobachte eher das Gegenteil: Viele lernen nur noch, was abgefragt wird, und verlieren die Neugier auf alles andere.",
     "frage": "Was denkt der Mann über Noten?",
     "opt": [
      "Sie steigern die Motivation der meisten Studenten.",
      "Sie verengen das Lernen auf Prüfungsstoff.",
      "Sie sind für ihn persönlich nicht wichtig."
     ],
     "loesung": 1,
     "stelle": "Viele lernen nur noch, was abgefragt wird",
     "erklaerung": "„Man sagt oft\" gibt eine fremde Meinung wieder. Seine eigene beginnt mit „Ich beobachte eher das Gegenteil\"."
    },
    {
     "art": "hoerwahl",
     "ort": "Thema: Wohnen im Studentenwohnheim",
     "wer": "Frau",
     "text": "Das Zimmer ist winzig und die Küche teilen sich zwölf Leute, das ist nicht immer lustig. Aber für das erste Jahr in einer fremden Stadt kann ich mir nichts Besseres vorstellen, man findet sofort Anschluss.",
     "frage": "Wie bewertet die Frau das Wohnheim?",
     "opt": [
      "Für den Einstieg in eine neue Stadt hält sie es für ideal.",
      "Sie würde dort auf keinen Fall noch einmal wohnen.",
      "Sie findet vor allem das Zimmer angenehm."
     ],
     "loesung": 0,
     "stelle": "kann ich mir nichts Besseres vorstellen",
     "erklaerung": "Die Nachteile stehen vorne, die Gesamtbewertung nach „Aber\"."
    },
    {
     "art": "hoerwahl",
     "ort": "Thema: Englischsprachige Studiengänge",
     "wer": "Mann",
     "text": "Ich verstehe, warum Hochschulen international attraktiv sein wollen. Nur frage ich mich, ob es klug ist, wenn deutsche Fachsprache in manchen Disziplinen kaum noch gepflegt wird.",
     "frage": "Welche Haltung zeigt der Mann?",
     "opt": [
      "Er begrüßt den Wechsel zum Englischen uneingeschränkt.",
      "Er hält Internationalität für überflüssig.",
      "Er äußert Bedenken trotz Verständnis für die Gründe."
     ],
     "loesung": 2,
     "stelle": "Nur frage ich mich, ob es klug ist",
     "erklaerung": "Verständnis zuerst, dann eine vorsichtig formulierte Kritik. Die Frageform ist hier eine Form von Zweifel."
    },
    {
     "art": "hoerwahl",
     "ort": "Thema: Nebenjob im Studium",
     "wer": "Frau",
     "text": "Ich arbeite zehn Stunden pro Woche in einem Labor. Das Geld ist eher Nebensache, wichtiger ist, dass ich dort Methoden lerne, die im Studium zu kurz kommen.",
     "frage": "Warum hat die Frau einen Nebenjob?",
     "opt": [
      "Sie ist auf das Einkommen angewiesen.",
      "Sie möchte vor allem praktische Fähigkeiten erwerben.",
      "Sie will ihr Studium möglichst schnell beenden."
     ],
     "loesung": 1,
     "stelle": "wichtiger ist, dass ich dort Methoden lerne",
     "erklaerung": "„eher Nebensache\" entkräftet das Geld, „wichtiger ist\" zeigt das eigentliche Motiv."
    },
    {
     "art": "hoerwahl",
     "ort": "Thema: Fachschaftsarbeit",
     "wer": "Mann",
     "text": "Ich hätte nicht gedacht, dass mir Gremienarbeit liegt, ich fand das immer furchtbar bürokratisch. Seit ich in der Fachschaft bin, sehe ich aber, wie viel man tatsächlich bewegen kann.",
     "frage": "Was sagt der Mann über die Fachschaft?",
     "opt": [
      "Er hat seine Vorurteile inzwischen abgelegt.",
      "Er findet die Arbeit dort zu bürokratisch.",
      "Er engagiert sich nur, weil es verlangt wird."
     ],
     "loesung": 0,
     "stelle": "sehe ich aber, wie viel man tatsächlich bewegen kann",
     "erklaerung": "„immer furchtbar bürokratisch\" beschreibt die frühere Sicht, nicht die heutige."
    },
    {
     "art": "hoerwahl",
     "ort": "Thema: Ranking von Hochschulen",
     "wer": "Frau",
     "text": "Ich habe mir die Ranglisten angesehen, ja. Entschieden habe ich mich am Ende aber nach einem Gespräch mit Studenten vor Ort, das hat mir viel mehr verraten als jede Platzierung.",
     "frage": "Welche Rolle spielten Ranglisten für die Entscheidung der Frau?",
     "opt": [
      "Sie waren das wichtigste Kriterium.",
      "Sie hat sie bewusst nicht beachtet.",
      "Sie waren weniger entscheidend als persönliche Eindrücke."
     ],
     "loesung": 2,
     "stelle": "das hat mir viel mehr verraten als jede Platzierung",
     "erklaerung": "Sie hat die Ranglisten gelesen, also nicht ignoriert, aber das Gespräch war wichtiger."
    },
    {
     "art": "hoerwahl",
     "ort": "Thema: Pflichtpraktikum",
     "wer": "Mann",
     "text": "Ein Pflichtpraktikum klingt sinnvoll. In der Realität sortieren viele Praktikanten aber nur Akten, und niemand fühlt sich für ihre Betreuung zuständig. So, wie es jetzt läuft, bringt es wenig.",
     "frage": "Wie beurteilt der Mann das Pflichtpraktikum?",
     "opt": [
      "Die Idee ist gut, die Umsetzung mangelhaft.",
      "Er hält schon die Idee für falsch.",
      "Er findet es in der jetzigen Form sehr gelungen."
     ],
     "loesung": 0,
     "stelle": "So, wie es jetzt läuft, bringt es wenig",
     "erklaerung": "Er unterscheidet zwischen Idee und Praxis. „So, wie es jetzt läuft\" kritisiert nur die Umsetzung."
    }
   ]
  },
  {
   "id": "tc1h2",
   "stufe": 1,
   "titel": "Satzanfang und Fortsetzung: Details im Gespräch",
   "kurz": "Der Satzanfang lenkt deinen Blick. Die richtige Fortsetzung passt zu genau diesem Detail.",
   "ziel": "Nach diesem Block liest du Satzanfänge vor dem Hören als Suchauftrag und unterscheidest die passende Fortsetzung von bloß erwähnten Details.",
   "zeichen": "🧩",
   "farbe": "gold",
   "mal": 1,
   "aufgaben": [
    {
     "art": "hoerwahl",
     "ort": "Gespräch: Sprechstunde",
     "wer": "Frau",
     "text": "Ich habe das Thema für meine Hausarbeit gewechselt. Das erste fand ich durchaus spannend, aber zu den Quellen hätte ich nur in einem Archiv in Wien Zugang gehabt, und das war zeitlich einfach nicht machbar.",
     "frage": "Die Studentin hat ihr Thema gewechselt, weil …",
     "opt": [
      "… sie das erste Thema langweilig fand.",
      "… die Quellen für sie nicht erreichbar waren.",
      "… ihre Betreuerin es ihr empfohlen hat."
     ],
     "loesung": 1,
     "stelle": "das war zeitlich einfach nicht machbar",
     "erklaerung": "Das Interesse war da. Der Grund ist der fehlende Zugang zu den Quellen."
    },
    {
     "art": "hoerwahl",
     "ort": "Gespräch: Laborpraktikum",
     "wer": "Mann",
     "text": "Die Messreihe vom Dienstag müssen wir leider komplett wiederholen. Die Geräte waren in Ordnung, aber jemand hat die Proben über Nacht nicht gekühlt, und damit sind die Werte unbrauchbar.",
     "frage": "Die Messreihe muss wiederholt werden, da …",
     "opt": [
      "… die Proben falsch gelagert wurden.",
      "… ein Messgerät defekt war.",
      "… die Ergebnisse falsch berechnet wurden."
     ],
     "loesung": 0,
     "stelle": "die Proben über Nacht nicht gekühlt",
     "erklaerung": "Die Geräte werden ausdrücklich ausgeschlossen. Nicht gekühlt heißt falsch gelagert."
    },
    {
     "art": "hoerwahl",
     "ort": "Gespräch: Referatsvorbereitung",
     "wer": "Frau",
     "text": "Ich schlage vor, dass du die Einleitung und den historischen Teil übernimmst. Ich kümmere mich um die Fallstudie, und die Diskussionsfragen am Ende entwickeln wir gemeinsam, sonst passt das nicht zusammen.",
     "frage": "Die Diskussionsfragen sollen …",
     "opt": [
      "… von der Sprecherin allein formuliert werden.",
      "… vom Seminarleiter vorgegeben werden.",
      "… von beiden zusammen erarbeitet werden."
     ],
     "loesung": 2,
     "stelle": "entwickeln wir gemeinsam",
     "erklaerung": "Viele Aufgaben werden verteilt. Der Satzanfang fragt nur nach den Diskussionsfragen."
    },
    {
     "art": "hoerwahl",
     "ort": "Gespräch: Beratung im Studierendenservice",
     "wer": "Mann",
     "text": "Den Antrag können Sie gern online stellen. Die Immatrikulationsbescheinigung reicht als Kopie, das Zeugnis allerdings brauchen wir im Original oder amtlich beglaubigt.",
     "frage": "Das Zeugnis muss …",
     "opt": [
      "… nur als einfache Kopie hochgeladen werden.",
      "… im Original oder beglaubigt vorgelegt werden.",
      "… gar nicht eingereicht werden."
     ],
     "loesung": 1,
     "stelle": "das Zeugnis allerdings brauchen wir im Original",
     "erklaerung": "„Kopie\" gilt für die Bescheinigung. „allerdings\" leitet die abweichende Regel für das Zeugnis ein."
    },
    {
     "art": "hoerwahl",
     "ort": "Gespräch: Seminarplanung",
     "wer": "Frau",
     "text": "Ursprünglich wollten wir die Exkursion im Mai machen. Weil das Museum dann aber umgebaut wird, haben wir sie auf Ende Juni verschoben, kurz vor die Prüfungsphase.",
     "frage": "Die Exkursion findet …",
     "opt": [
      "… wie geplant im Mai statt.",
      "… nach der Prüfungsphase statt.",
      "… später als ursprünglich geplant statt."
     ],
     "loesung": 2,
     "stelle": "haben wir sie auf Ende Juni verschoben",
     "erklaerung": "Mai war der alte Plan. „kurz vor die Prüfungsphase\" schließt „nach\" aus."
    },
    {
     "art": "hoerwahl",
     "ort": "Gespräch: Abschlussarbeit",
     "wer": "Mann",
     "text": "Mein Betreuer war zunächst skeptisch, ob man so wenige Interviews auswerten kann. Nachdem ich ihm aber erklärt hatte, dass ich jedes Gespräch sehr ausführlich analysiere, hat er zugestimmt.",
     "frage": "Der Betreuer hat die Methode akzeptiert, nachdem …",
     "opt": [
      "… der Student sein Vorgehen begründet hatte.",
      "… der Student mehr Interviews geführt hatte.",
      "… ein anderer Professor sie empfohlen hatte."
     ],
     "loesung": 0,
     "stelle": "Nachdem ich ihm aber erklärt hatte",
     "erklaerung": "Die Zahl der Interviews bleibt gleich. Überzeugt hat die Begründung."
    },
    {
     "art": "hoerwahl",
     "ort": "Gespräch: Lerngruppe",
     "wer": "Frau",
     "text": "Montags passt es mir eigentlich gut, nur diese Woche habe ich einen Zahnarzttermin. Können wir uns ausnahmsweise am Mittwoch treffen? Ab nächster Woche gilt dann wieder der Montag.",
     "frage": "Die Lerngruppe trifft sich in Zukunft …",
     "opt": [
      "… immer mittwochs.",
      "… weiterhin montags.",
      "… nur noch nach Absprache."
     ],
     "loesung": 1,
     "stelle": "Ab nächster Woche gilt dann wieder der Montag",
     "erklaerung": "Mittwoch ist eine Ausnahme für diese Woche. Gefragt ist die Zukunft."
    },
    {
     "art": "hoerwahl",
     "ort": "Gespräch: Bibliothek",
     "wer": "Mann",
     "text": "Das Buch ist leider ausgeliehen, und die Vormerkliste ist lang. Aber ein Kapitel, das Sie brauchen, gibt es als digitalen Scan im Semesterapparat, darauf können Sie sofort zugreifen.",
     "frage": "Der Student kann das benötigte Kapitel …",
     "opt": [
      "… erst in einigen Wochen lesen.",
      "… nur über die Fernleihe bekommen.",
      "… sofort online lesen."
     ],
     "loesung": 2,
     "stelle": "darauf können Sie sofort zugreifen",
     "erklaerung": "Das ganze Buch ist weg, das Kapitel aber digital verfügbar."
    },
    {
     "art": "hoerwahl",
     "ort": "Gespräch: Konferenzreise",
     "wer": "Frau",
     "text": "Die Fakultät übernimmt die Teilnahmegebühr und die Bahnfahrt. Für das Hotel müssen wir einen eigenen Antrag beim Förderverein stellen, die Fakultät zahlt das dieses Jahr nicht mehr.",
     "frage": "Die Hotelkosten …",
     "opt": [
      "… müssen anderweitig beantragt werden.",
      "… werden von der Fakultät erstattet.",
      "… tragen die Studenten in jedem Fall selbst."
     ],
     "loesung": 0,
     "stelle": "einen eigenen Antrag beim Förderverein stellen",
     "erklaerung": "Die Fakultät zahlt nur Gebühr und Bahn. Für das Hotel gibt es eine andere Stelle, also nicht zwingend selbst zahlen."
    },
    {
     "art": "hoerwahl",
     "ort": "Gespräch: Feedback zur Hausarbeit",
     "wer": "Mann",
     "text": "Inhaltlich ist Ihre Arbeit sehr solide. Was mir fehlt, ist eine klare Forschungsfrage am Anfang, an der sich alles orientiert. Die Zitierweise dagegen ist vorbildlich.",
     "frage": "Der Dozent kritisiert vor allem …",
     "opt": [
      "… die Art des Zitierens.",
      "… die fehlende Fragestellung.",
      "… den schwachen Inhalt."
     ],
     "loesung": 1,
     "stelle": "Was mir fehlt, ist eine klare Forschungsfrage",
     "erklaerung": "Inhalt und Zitierweise werden gelobt. „Was mir fehlt\" markiert die Kritik."
    }
   ]
  },
  {
   "id": "tc1h3",
   "stufe": 2,
   "titel": "Vorträge gliedern: Signalwörter (erstens, im Gegensatz dazu, zusammenfassend)",
   "kurz": "Signalwörter zeigen, ob ein neuer Punkt, ein Gegensatz, ein Beispiel oder das Fazit kommt.",
   "ziel": "Nach diesem Block erkennst du an Signalwörtern, an welcher Stelle der Gliederung ein Vortrag gerade ist und welche Funktion ein Satz hat.",
   "zeichen": "🧭",
   "farbe": "rot",
   "mal": 1,
   "aufgaben": [
    {
     "art": "hoerwahl",
     "ort": "Vortrag: Stadtentwicklung",
     "wer": "Mann",
     "text": "Für das Wachstum der Vororte gibt es mehrere Ursachen. Erstens sind die Mieten in der Innenstadt stark gestiegen. Zweitens hat sich das Pendeln durch neue Bahnlinien verkürzt. Und schließlich, das wird oft übersehen, wünschen sich viele Familien schlicht mehr Grün.",
     "frage": "Was nennt der Redner als dritten Grund?",
     "opt": [
      "Den Wunsch nach Natur.",
      "Die gestiegenen Mieten.",
      "Neue Bahnverbindungen."
     ],
     "loesung": 0,
     "stelle": "Und schließlich, das wird oft übersehen",
     "erklaerung": "„Erstens\", „zweitens\", „schließlich\": Das dritte Signalwort führt zum Grün."
    },
    {
     "art": "hoerwahl",
     "ort": "Vortrag: Lernpsychologie",
     "wer": "Frau",
     "text": "Lange ging man davon aus, dass Wiederholung allein zum Behalten führt. Im Gegensatz dazu zeigen neuere Studien, dass es vor allem auf das aktive Abrufen ankommt, also darauf, sich selbst zu prüfen.",
     "frage": "Was ist laut neueren Studien entscheidend?",
     "opt": [
      "Häufiges Wiederholen des Stoffs.",
      "Langes Lesen von Zusammenfassungen.",
      "Das eigene Abrufen von Wissen."
     ],
     "loesung": 2,
     "stelle": "Im Gegensatz dazu zeigen neuere Studien",
     "erklaerung": "„Im Gegensatz dazu\" trennt die alte Annahme von der neuen Erkenntnis."
    },
    {
     "art": "hoerwahl",
     "ort": "Vortrag: Ernährungsforschung",
     "wer": "Mann",
     "text": "Diese Ergebnisse klingen eindeutig. Man muss jedoch einschränkend sagen, dass nur Erwachsene über fünfzig untersucht wurden. Ob das auch für Jüngere gilt, ist offen.",
     "frage": "Welche Funktion hat der zweite Satz im Vortrag?",
     "opt": [
      "Er bringt ein weiteres Beispiel.",
      "Er relativiert die Aussagekraft der Ergebnisse.",
      "Er fasst den Vortrag zusammen."
     ],
     "loesung": 1,
     "stelle": "Man muss jedoch einschränkend sagen",
     "erklaerung": "„jedoch einschränkend\" kündigt eine Begrenzung an, kein Beispiel."
    },
    {
     "art": "hoerwahl",
     "ort": "Vortrag: Energiewende",
     "wer": "Frau",
     "text": "Zusammenfassend lässt sich also festhalten: Ohne den Ausbau der Speicher bleibt jede Strategie lückenhaft, egal wie viele Windräder wir bauen.",
     "frage": "An welcher Stelle des Vortrags steht diese Äußerung wahrscheinlich?",
     "opt": [
      "In der Einleitung.",
      "Bei der Vorstellung der Methode.",
      "Am Schluss."
     ],
     "loesung": 2,
     "stelle": "Zusammenfassend lässt sich also festhalten",
     "erklaerung": "„Zusammenfassend\" und „also\" signalisieren ein Fazit."
    },
    {
     "art": "hoerwahl",
     "ort": "Vortrag: Mehrsprachigkeit",
     "wer": "Mann",
     "text": "Mehrsprachige Kinder wechseln oft mitten im Satz die Sprache. Das wird häufig als Defizit gedeutet. Dem ist allerdings entgegenzuhalten, dass dieser Wechsel meist sehr gezielt und regelhaft geschieht.",
     "frage": "Wie bewertet der Redner den Sprachwechsel?",
     "opt": [
      "Er widerspricht der Deutung als Schwäche.",
      "Er sieht darin ein Zeichen fehlender Kompetenz.",
      "Er lässt die Frage bewusst offen."
     ],
     "loesung": 0,
     "stelle": "Dem ist allerdings entgegenzuhalten",
     "erklaerung": "„Dem ist entgegenzuhalten\" leitet einen Widerspruch zur vorher genannten Deutung ein."
    },
    {
     "art": "hoerwahl",
     "ort": "Vortrag: Medizingeschichte",
     "wer": "Frau",
     "text": "Bevor ich auf die eigentliche Entdeckung eingehe, möchte ich kurz skizzieren, wie man sich Krankheiten damals überhaupt erklärt hat.",
     "frage": "Was kündigt die Rednerin an?",
     "opt": [
      "Eine Zusammenfassung der Entdeckung.",
      "Einen Rückblick als Hintergrund.",
      "Eine Kritik an der Entdeckung."
     ],
     "loesung": 1,
     "stelle": "möchte ich kurz skizzieren",
     "erklaerung": "„Bevor ich auf … eingehe\" zeigt: Erst kommt ein Hintergrund, die Hauptsache folgt später."
    },
    {
     "art": "hoerwahl",
     "ort": "Vortrag: Konsumverhalten",
     "wer": "Mann",
     "text": "Nachhaltigkeit ist vielen Kunden wichtig, zumindest in Umfragen. Ein gutes Beispiel ist der Kaffeemarkt: Fast alle sagen, sie würden fair gehandelten Kaffee bevorzugen, gekauft wird er aber nur selten.",
     "frage": "Wozu dient das Beispiel vom Kaffeemarkt?",
     "opt": [
      "Es zeigt, dass fairer Kaffee teurer ist.",
      "Es belegt, dass Kunden ihr Verhalten stark geändert haben.",
      "Es veranschaulicht die Lücke zwischen Aussage und Handeln."
     ],
     "loesung": 2,
     "stelle": "Ein gutes Beispiel ist der Kaffeemarkt",
     "erklaerung": "Das Beispiel illustriert den Gegensatz aus „zumindest in Umfragen\". Vom Preis ist keine Rede."
    },
    {
     "art": "hoerwahl",
     "ort": "Vortrag: Bienenforschung",
     "wer": "Frau",
     "text": "Damit komme ich zum zweiten Teil meines Vortrags, nämlich der Frage, welche Gegenmaßnahmen sich in der Praxis bewährt haben.",
     "frage": "Worum geht es im nächsten Abschnitt?",
     "opt": [
      "Um erprobte Lösungen.",
      "Um die Ursachen des Bienensterbens.",
      "Um offene Forschungsfragen."
     ],
     "loesung": 0,
     "stelle": "Damit komme ich zum zweiten Teil",
     "erklaerung": "Die Überleitung nennt das neue Thema direkt: Gegenmaßnahmen, die sich bewährt haben."
    },
    {
     "art": "hoerwahl",
     "ort": "Vortrag: Arbeitsmarkt",
     "wer": "Mann",
     "text": "Die Arbeitslosigkeit ist zwar gesunken. Das heißt aber nicht, dass die Zahl gut bezahlter Stellen gewachsen ist, denn ein großer Teil der neuen Jobs ist befristet.",
     "frage": "Was will der Redner mit dieser Aussage betonen?",
     "opt": [
      "Die Lage am Arbeitsmarkt ist eindeutig gut.",
      "Die sinkende Arbeitslosigkeit verdeckt Probleme.",
      "Befristete Stellen sind gut bezahlt."
     ],
     "loesung": 1,
     "stelle": "Das heißt aber nicht",
     "erklaerung": "„zwar … aber\" räumt etwas ein und setzt dann den eigentlichen Akzent."
    },
    {
     "art": "hoerwahl",
     "ort": "Vortrag: Schlafforschung",
     "wer": "Frau",
     "text": "Daraus folgt, dass ein späterer Schulbeginn für Jugendliche nicht Bequemlichkeit bedeutet, sondern biologisch begründet ist.",
     "frage": "Welche Funktion hat dieser Satz?",
     "opt": [
      "Er stellt eine offene Frage.",
      "Er nennt ein Gegenargument.",
      "Er zieht eine Schlussfolgerung."
     ],
     "loesung": 2,
     "stelle": "Daraus folgt",
     "erklaerung": "„Daraus folgt\" leitet eine Konsequenz aus dem vorher Gesagten ab."
    }
   ]
  },
  {
   "id": "tc1h4",
   "stufe": 2,
   "titel": "Mitschreiben: Was ist die Kerninformation?",
   "kurz": "Beim Mitschreiben zählt nicht jedes Wort, sondern die eine Information, die in die Lücke gehört.",
   "ziel": "Nach diesem Block filterst du aus einem Vortragsausschnitt die Kerninformation heraus und notierst sie knapp, ohne Nebenbemerkungen.",
   "zeichen": "📝",
   "farbe": "lila",
   "mal": 1,
   "aufgaben": [
    {
     "art": "hoerwahl",
     "ort": "Gliederungspunkt: Ziel der Studie",
     "wer": "Frau",
     "text": "Uns hat interessiert, und das war übrigens eine Anregung von Studenten, ob Lärm in Großraumbüros die Konzentration messbar verschlechtert.",
     "frage": "Welche Notiz gehört zum Gliederungspunkt „Ziel der Studie\"?",
     "opt": [
      "Anregung von Studenten",
      "Einfluss von Lärm auf die Konzentration",
      "Großraumbüros sind beliebt"
     ],
     "loesung": 1,
     "stelle": "ob Lärm in Großraumbüros die Konzentration messbar verschlechtert",
     "erklaerung": "Die Anregung ist eine Nebenbemerkung. Das Ziel steht im ob-Satz."
    },
    {
     "art": "hoerwahl",
     "ort": "Gliederungspunkt: Stichprobe",
     "wer": "Mann",
     "text": "Befragt wurden insgesamt dreihundertvierzig Pflegekräfte aus elf Kliniken. Ursprünglich hatten wir mit doppelt so vielen gerechnet, aber die Rücklaufquote war geringer als erhofft.",
     "frage": "Was notieren Sie zur Stichprobe?",
     "opt": [
      "dreihundertvierzig Pflegekräfte, elf Kliniken",
      "rund siebenhundert Pflegekräfte",
      "elf Pflegekräfte"
     ],
     "loesung": 0,
     "stelle": "dreihundertvierzig Pflegekräfte aus elf Kliniken",
     "erklaerung": "„doppelt so viele\" war nur die Erwartung. Notiert wird die tatsächliche Zahl."
    },
    {
     "art": "hoerwahl",
     "ort": "Gliederungspunkt: Methode",
     "wer": "Frau",
     "text": "Wir haben zunächst über einen Fragebogen nachgedacht, uns dann aber für Tagebücher entschieden, die die Teilnehmer drei Wochen lang jeden Abend ausgefüllt haben.",
     "frage": "Welche Methode wurde verwendet?",
     "opt": [
      "Fragebogen",
      "Interviews",
      "Tagebücher über drei Wochen"
     ],
     "loesung": 2,
     "stelle": "uns dann aber für Tagebücher entschieden",
     "erklaerung": "Der Fragebogen wurde nur erwogen. „dann aber\" führt zur tatsächlichen Methode."
    },
    {
     "art": "hoerwahl",
     "ort": "Gliederungspunkt: Hauptergebnis",
     "wer": "Mann",
     "text": "Das wichtigste Ergebnis, und das hat uns selbst überrascht: Nicht die Dauer der Bildschirmzeit hängt mit schlechtem Schlaf zusammen, sondern der Zeitpunkt, also die Nutzung in der letzten Stunde vor dem Einschlafen.",
     "frage": "Welche Notiz trifft das Hauptergebnis?",
     "opt": [
      "Lange Bildschirmzeit stört den Schlaf",
      "Nutzung kurz vor dem Schlafen entscheidend",
      "Ergebnis war überraschend"
     ],
     "loesung": 1,
     "stelle": "sondern der Zeitpunkt",
     "erklaerung": "„nicht … sondern\": Die Dauer wird verneint, der Zeitpunkt ist die Kerninformation."
    },
    {
     "art": "hoerwahl",
     "ort": "Gliederungspunkt: Definition",
     "wer": "Frau",
     "text": "Unter Resilienz verstehen wir hier, ganz knapp gesagt, die Fähigkeit, nach Belastungen wieder ins Gleichgewicht zu kommen. Es gibt in der Literatur Dutzende Definitionen, aber diese genügt für unsere Zwecke.",
     "frage": "Was notieren Sie als Definition?",
     "opt": [
      "Erholung nach Belastung",
      "Dutzende Definitionen",
      "Vermeidung von Belastungen"
     ],
     "loesung": 0,
     "stelle": "nach Belastungen wieder ins Gleichgewicht zu kommen",
     "erklaerung": "Die Definition steht nach „verstehen wir\". Die vielen Definitionen sind eine Randbemerkung."
    },
    {
     "art": "hoerwahl",
     "ort": "Gliederungspunkt: Kritik am Verfahren",
     "wer": "Mann",
     "text": "Ein Kritikpunkt, den wir ernst nehmen, betrifft die Freiwilligkeit. Wer an so einer Studie teilnimmt, ist vermutlich ohnehin gesundheitsbewusster als der Durchschnitt.",
     "frage": "Welche Notiz passt zur Kritik?",
     "opt": [
      "Studie zu kurz",
      "zu wenige Teilnehmer",
      "Teilnehmer nicht repräsentativ"
     ],
     "loesung": 2,
     "stelle": "ist vermutlich ohnehin gesundheitsbewusster als der Durchschnitt",
     "erklaerung": "Freiwillige sind gesundheitsbewusster: Die Gruppe bildet die Bevölkerung nicht ab."
    },
    {
     "art": "hoerwahl",
     "ort": "Gliederungspunkt: Zeitraum",
     "wer": "Frau",
     "text": "Die Daten stammen aus den Jahren zweitausendzehn bis zweitausendzwanzig. Ältere Daten gibt es zwar, sie wurden aber nach einem anderen Verfahren erhoben und sind deshalb nicht vergleichbar.",
     "frage": "Welchen Zeitraum notieren Sie?",
     "opt": [
      "vor zweitausendzehn",
      "zweitausendzehn bis zweitausendzwanzig",
      "ab zweitausendzwanzig"
     ],
     "loesung": 1,
     "stelle": "aus den Jahren zweitausendzehn bis zweitausendzwanzig",
     "erklaerung": "Die älteren Daten wurden ausdrücklich nicht verwendet."
    },
    {
     "art": "hoerwahl",
     "ort": "Gliederungspunkt: Empfehlung",
     "wer": "Mann",
     "text": "Was folgt daraus für die Praxis? Wir empfehlen den Schulen nicht etwa mehr Unterrichtsstunden, sondern regelmäßige kurze Bewegungspausen von wenigen Minuten.",
     "frage": "Welche Empfehlung notieren Sie?",
     "opt": [
      "kurze Bewegungspausen",
      "mehr Unterrichtsstunden",
      "längere Ferien"
     ],
     "loesung": 0,
     "stelle": "regelmäßige kurze Bewegungspausen",
     "erklaerung": "„nicht etwa … sondern\": Die erste Option wird ausdrücklich ausgeschlossen."
    },
    {
     "art": "hoerwahl",
     "ort": "Gliederungspunkt: Ursache",
     "wer": "Frau",
     "text": "Man könnte vermuten, dass die Preise der Grund für den Rückgang sind. Unsere Analyse zeigt aber, dass vor allem das veränderte Freizeitverhalten junger Menschen verantwortlich ist.",
     "frage": "Welche Ursache notieren Sie?",
     "opt": [
      "gestiegene Preise",
      "veränderte Freizeitgewohnheiten",
      "sinkende Bevölkerungszahl"
     ],
     "loesung": 1,
     "stelle": "vor allem das veränderte Freizeitverhalten junger Menschen",
     "erklaerung": "„Man könnte vermuten\" ist eine Annahme, die widerlegt wird. Das Ergebnis folgt nach „aber\"."
    },
    {
     "art": "hoerwahl",
     "ort": "Gliederungspunkt: Ausblick",
     "wer": "Mann",
     "text": "In einem nächsten Schritt wollen wir prüfen, ob sich die Ergebnisse auch auf ländliche Regionen übertragen lassen, denn bisher haben wir ausschließlich Großstädte untersucht.",
     "frage": "Was ist für die Zukunft geplant?",
     "opt": [
      "weitere Großstädte untersuchen",
      "Ergebnisse veröffentlichen",
      "Übertragbarkeit auf ländliche Regionen prüfen"
     ],
     "loesung": 2,
     "stelle": "auch auf ländliche Regionen übertragen lassen",
     "erklaerung": "Großstädte wurden bisher untersucht. Der Ausblick betrifft das Land."
    }
   ]
  }
 ],
 "teile": [
  {
   "nr": 1,
   "art": "diskussion",
   "name": "Hören: Acht Personen",
   "kurz": "Acht Äußerungen, zehn Aussagen — EINMAL hören",
   "was": "Acht Personen äußern sich zu einer Frage aus dem Studium. Zu jeder Person wählst du die passende Aussage. Zwei Aussagen bleiben übrig.",
   "tipp": "Es geht um die Haltung, nicht um einzelne Wörter. Viele Aussagen klingen ähnlich — eine kleine Einschränkung macht den Unterschied.",
   "zeichen": "🗣️",
   "farbe": "turq",
   "punkte": 8,
   "mal": 1,
   "runden": [
    {
     "id": "c1c1h1s1",
     "titel": "Wie bereiten Sie sich auf Prüfungen vor?",
     "aufgaben": [
      {
       "von": "Person 1 — Studentin der Biologie",
       "wer": "Frau",
       "text": "Ehrlich gesagt habe ich lange alles auf einmal gelernt, und nach der Klausur war das Wissen sofort wieder weg. Seit dem dritten Semester schreibe ich jeden Fachbegriff auf ein Kärtchen. Was ich gut kann, schaue ich erst nach einer Woche wieder an, später nach einem Monat, was ich nicht kann, schon am nächsten Tag. Das wirkt pedantisch, aber die Begriffe bleiben tatsächlich hängen.",
       "loesung": 7,
       "stelle": "schaue ich erst nach einer Woche wieder an",
       "erklaerung": "Kärtchen und immer längere Abstände: Das ist Wiederholung mit Karteikarten, nicht frühes Verteilen des ganzen Stoffs.",
       "frage": "Welche Aussage passt zu dieser Person?",
       "opt": [
        "Ich lerne am liebsten in einer festen Gruppe, weil das Erklären mein eigenes Verständnis vertieft.",
        "Ich setze auf alte Klausuren, um das Prüfungsformat zu durchschauen.",
        "Ich beginne früh und verteile den Stoff gleichmäßig über das ganze Semester.",
        "Ich brauche den Zeitdruck kurz vor der Prüfung, um mich überhaupt konzentrieren zu können.",
        "Inzwischen achte ich vor allem auf Schlaf und Bewegung statt auf die Zahl der Lernstunden.",
        "Ich fasse den Stoff in eigenen Schaubildern zusammen, statt Skripte nur zu lesen.",
        "Ich frage gezielt bei den Dozenten nach, was in der Prüfung wirklich verlangt wird.",
        "Ich arbeite mit Karteikarten und wiederhole sie in festen, wachsenden Abständen.",
        "Ich habe gelernt, meine Prüfungsangst mit Atemübungen in den Griff zu bekommen.",
        "Ich lerne vor allem, indem ich mir den Stoff selbst laut erkläre."
       ],
       "fest": true
      },
      {
       "von": "Person 2 — Student der Rechtswissenschaft",
       "wer": "Mann",
       "text": "Bei uns hängt sehr viel davon ab, wie ein Fall aufgebaut ist. Deshalb besorge ich mir immer die Klausuren der letzten Jahre, die die Fachschaft sammelt. Ich löse sie unter echten Bedingungen, also mit Uhr und ohne Hilfsmittel. Danach erkenne ich ziemlich schnell, welche Art von Fragen typisch ist und worauf die Korrektoren achten. Das gibt mir mehr Sicherheit als jedes Lehrbuch.",
       "loesung": 1,
       "stelle": "besorge ich mir immer die Klausuren der letzten Jahre",
       "erklaerung": "Er nutzt alte Prüfungen, um Aufbau und typische Fragen zu verstehen.",
       "frage": "Welche Aussage passt zu dieser Person?",
       "opt": [
        "Ich lerne am liebsten in einer festen Gruppe, weil das Erklären mein eigenes Verständnis vertieft.",
        "Ich setze auf alte Klausuren, um das Prüfungsformat zu durchschauen.",
        "Ich beginne früh und verteile den Stoff gleichmäßig über das ganze Semester.",
        "Ich brauche den Zeitdruck kurz vor der Prüfung, um mich überhaupt konzentrieren zu können.",
        "Inzwischen achte ich vor allem auf Schlaf und Bewegung statt auf die Zahl der Lernstunden.",
        "Ich fasse den Stoff in eigenen Schaubildern zusammen, statt Skripte nur zu lesen.",
        "Ich frage gezielt bei den Dozenten nach, was in der Prüfung wirklich verlangt wird.",
        "Ich arbeite mit Karteikarten und wiederhole sie in festen, wachsenden Abständen.",
        "Ich habe gelernt, meine Prüfungsangst mit Atemübungen in den Griff zu bekommen.",
        "Ich lerne vor allem, indem ich mir den Stoff selbst laut erkläre."
       ],
       "fest": true
      },
      {
       "von": "Person 3 — Student des Maschinenbaus",
       "wer": "Mann",
       "text": "Ich weiß, was alle Ratgeber sagen: früh anfangen, jeden Tag ein bisschen. Ich habe das auch probiert, ehrlich. Aber solange die Prüfung noch weit weg ist, schweife ich ständig ab. Erst wenn nur noch zehn Tage übrig sind, schalte ich in einen anderen Modus und arbeite plötzlich sehr konzentriert. Das ist nicht ideal, aber ich habe akzeptiert, dass ich so funktioniere.",
       "loesung": 3,
       "stelle": "Erst wenn nur noch zehn Tage übrig sind",
       "erklaerung": "Frühes Lernen erwähnt er nur als gescheiterten Versuch. Er braucht den Druck kurz vor der Prüfung.",
       "frage": "Welche Aussage passt zu dieser Person?",
       "opt": [
        "Ich lerne am liebsten in einer festen Gruppe, weil das Erklären mein eigenes Verständnis vertieft.",
        "Ich setze auf alte Klausuren, um das Prüfungsformat zu durchschauen.",
        "Ich beginne früh und verteile den Stoff gleichmäßig über das ganze Semester.",
        "Ich brauche den Zeitdruck kurz vor der Prüfung, um mich überhaupt konzentrieren zu können.",
        "Inzwischen achte ich vor allem auf Schlaf und Bewegung statt auf die Zahl der Lernstunden.",
        "Ich fasse den Stoff in eigenen Schaubildern zusammen, statt Skripte nur zu lesen.",
        "Ich frage gezielt bei den Dozenten nach, was in der Prüfung wirklich verlangt wird.",
        "Ich arbeite mit Karteikarten und wiederhole sie in festen, wachsenden Abständen.",
        "Ich habe gelernt, meine Prüfungsangst mit Atemübungen in den Griff zu bekommen.",
        "Ich lerne vor allem, indem ich mir den Stoff selbst laut erkläre."
       ],
       "fest": true
      },
      {
       "von": "Person 4 — Studentin der Psychologie",
       "wer": "Frau",
       "text": "Allein am Schreibtisch merke ich oft gar nicht, was ich nicht verstanden habe. Darum treffe ich mich jede Woche mit drei Kommilitonen. Jeder übernimmt ein Kapitel und muss es den anderen erklären. Genau in dem Moment, in dem jemand nachfragt, merke ich, wo meine Lücken sind. Ich würde sogar sagen, dass ich durch das Erklären mehr lerne als durch das Zuhören.",
       "loesung": 0,
       "stelle": "ich durch das Erklären mehr lerne als durch das Zuhören",
       "erklaerung": "Sie erklärt anderen in einer festen Gruppe, nicht sich selbst. Das unterscheidet sie von der Aussage über lautes Selbsterklären.",
       "frage": "Welche Aussage passt zu dieser Person?",
       "opt": [
        "Ich lerne am liebsten in einer festen Gruppe, weil das Erklären mein eigenes Verständnis vertieft.",
        "Ich setze auf alte Klausuren, um das Prüfungsformat zu durchschauen.",
        "Ich beginne früh und verteile den Stoff gleichmäßig über das ganze Semester.",
        "Ich brauche den Zeitdruck kurz vor der Prüfung, um mich überhaupt konzentrieren zu können.",
        "Inzwischen achte ich vor allem auf Schlaf und Bewegung statt auf die Zahl der Lernstunden.",
        "Ich fasse den Stoff in eigenen Schaubildern zusammen, statt Skripte nur zu lesen.",
        "Ich frage gezielt bei den Dozenten nach, was in der Prüfung wirklich verlangt wird.",
        "Ich arbeite mit Karteikarten und wiederhole sie in festen, wachsenden Abständen.",
        "Ich habe gelernt, meine Prüfungsangst mit Atemübungen in den Griff zu bekommen.",
        "Ich lerne vor allem, indem ich mir den Stoff selbst laut erkläre."
       ],
       "fest": true
      },
      {
       "von": "Person 5 — Student der Geschichte",
       "wer": "Mann",
       "text": "Ich kann zweihundert Seiten Skript lesen und weiß hinterher trotzdem nicht, wie die Dinge zusammenhängen. Deshalb zeichne ich mir für jede Epoche eine große Übersicht: Ereignisse, Personen, Ursachen, alles mit Pfeilen verbunden. Das dauert zwar lange, aber beim Zeichnen muss ich entscheiden, was wichtig ist. In der Prüfung sehe ich diese Bilder dann regelrecht vor mir.",
       "loesung": 5,
       "stelle": "zeichne ich mir für jede Epoche eine große Übersicht",
       "erklaerung": "Er verarbeitet den Stoff in eigenen grafischen Übersichten, statt nur zu lesen.",
       "frage": "Welche Aussage passt zu dieser Person?",
       "opt": [
        "Ich lerne am liebsten in einer festen Gruppe, weil das Erklären mein eigenes Verständnis vertieft.",
        "Ich setze auf alte Klausuren, um das Prüfungsformat zu durchschauen.",
        "Ich beginne früh und verteile den Stoff gleichmäßig über das ganze Semester.",
        "Ich brauche den Zeitdruck kurz vor der Prüfung, um mich überhaupt konzentrieren zu können.",
        "Inzwischen achte ich vor allem auf Schlaf und Bewegung statt auf die Zahl der Lernstunden.",
        "Ich fasse den Stoff in eigenen Schaubildern zusammen, statt Skripte nur zu lesen.",
        "Ich frage gezielt bei den Dozenten nach, was in der Prüfung wirklich verlangt wird.",
        "Ich arbeite mit Karteikarten und wiederhole sie in festen, wachsenden Abständen.",
        "Ich habe gelernt, meine Prüfungsangst mit Atemübungen in den Griff zu bekommen.",
        "Ich lerne vor allem, indem ich mir den Stoff selbst laut erkläre."
       ],
       "fest": true
      },
      {
       "von": "Person 6 — Studentin der Medizin",
       "wer": "Frau",
       "text": "Im Physikum habe ich wochenlang zwölf Stunden am Tag gelernt und war am Ende völlig erschöpft. Heute sehe ich das anders. Ich lerne weniger Stunden, aber ich gehe jeden Abend laufen und schlafe mindestens sieben Stunden. Seitdem kann ich mir viel mehr merken. Ich glaube inzwischen, dass ein ausgeruhter Kopf wichtiger ist als jede zusätzliche Stunde am Schreibtisch.",
       "loesung": 4,
       "stelle": "ein ausgeruhter Kopf wichtiger ist als jede zusätzliche Stunde",
       "erklaerung": "„Heute sehe ich das anders\" markiert den Wechsel: Schlaf und Sport statt möglichst vieler Lernstunden.",
       "frage": "Welche Aussage passt zu dieser Person?",
       "opt": [
        "Ich lerne am liebsten in einer festen Gruppe, weil das Erklären mein eigenes Verständnis vertieft.",
        "Ich setze auf alte Klausuren, um das Prüfungsformat zu durchschauen.",
        "Ich beginne früh und verteile den Stoff gleichmäßig über das ganze Semester.",
        "Ich brauche den Zeitdruck kurz vor der Prüfung, um mich überhaupt konzentrieren zu können.",
        "Inzwischen achte ich vor allem auf Schlaf und Bewegung statt auf die Zahl der Lernstunden.",
        "Ich fasse den Stoff in eigenen Schaubildern zusammen, statt Skripte nur zu lesen.",
        "Ich frage gezielt bei den Dozenten nach, was in der Prüfung wirklich verlangt wird.",
        "Ich arbeite mit Karteikarten und wiederhole sie in festen, wachsenden Abständen.",
        "Ich habe gelernt, meine Prüfungsangst mit Atemübungen in den Griff zu bekommen.",
        "Ich lerne vor allem, indem ich mir den Stoff selbst laut erkläre."
       ],
       "fest": true
      },
      {
       "von": "Person 7 — Studentin der Germanistik",
       "wer": "Frau",
       "text": "Früher habe ich einfach alles gelernt, was im Seminar vorkam, und war dann überrascht, was tatsächlich gefragt wurde. Inzwischen gehe ich etwa einen Monat vor der Prüfung in die Sprechstunde und frage ganz konkret, welche Schwerpunkte erwartet werden. Die meisten Dozenten sind da erstaunlich offen. So spare ich mir viel Arbeit, die am Ende sowieso niemand prüft.",
       "loesung": 6,
       "stelle": "frage ganz konkret, welche Schwerpunkte erwartet werden",
       "erklaerung": "Sie holt sich direkt bei den Dozenten Informationen über die Anforderungen.",
       "frage": "Welche Aussage passt zu dieser Person?",
       "opt": [
        "Ich lerne am liebsten in einer festen Gruppe, weil das Erklären mein eigenes Verständnis vertieft.",
        "Ich setze auf alte Klausuren, um das Prüfungsformat zu durchschauen.",
        "Ich beginne früh und verteile den Stoff gleichmäßig über das ganze Semester.",
        "Ich brauche den Zeitdruck kurz vor der Prüfung, um mich überhaupt konzentrieren zu können.",
        "Inzwischen achte ich vor allem auf Schlaf und Bewegung statt auf die Zahl der Lernstunden.",
        "Ich fasse den Stoff in eigenen Schaubildern zusammen, statt Skripte nur zu lesen.",
        "Ich frage gezielt bei den Dozenten nach, was in der Prüfung wirklich verlangt wird.",
        "Ich arbeite mit Karteikarten und wiederhole sie in festen, wachsenden Abständen.",
        "Ich habe gelernt, meine Prüfungsangst mit Atemübungen in den Griff zu bekommen.",
        "Ich lerne vor allem, indem ich mir den Stoff selbst laut erkläre."
       ],
       "fest": true
      },
      {
       "von": "Person 8 — Student der Betriebswirtschaftslehre",
       "wer": "Mann",
       "text": "Ich mache mir gleich in der ersten Vorlesungswoche einen Plan. Jede Woche arbeite ich die aktuellen Folien nach, sodass ich nie einen Berg vor mir herschiebe. Wenn die Prüfungszeit kommt, wiederhole ich nur noch. Meine Freunde finden das langweilig, aber ich bin in der Klausurphase entspannt, während die anderen Nächte durcharbeiten. Für mich gibt es keine bessere Methode.",
       "loesung": 2,
       "stelle": "Jede Woche arbeite ich die aktuellen Folien nach",
       "erklaerung": "Er verteilt den Stoff von Anfang an über das Semester. Karteikarten erwähnt er nicht.",
       "frage": "Welche Aussage passt zu dieser Person?",
       "opt": [
        "Ich lerne am liebsten in einer festen Gruppe, weil das Erklären mein eigenes Verständnis vertieft.",
        "Ich setze auf alte Klausuren, um das Prüfungsformat zu durchschauen.",
        "Ich beginne früh und verteile den Stoff gleichmäßig über das ganze Semester.",
        "Ich brauche den Zeitdruck kurz vor der Prüfung, um mich überhaupt konzentrieren zu können.",
        "Inzwischen achte ich vor allem auf Schlaf und Bewegung statt auf die Zahl der Lernstunden.",
        "Ich fasse den Stoff in eigenen Schaubildern zusammen, statt Skripte nur zu lesen.",
        "Ich frage gezielt bei den Dozenten nach, was in der Prüfung wirklich verlangt wird.",
        "Ich arbeite mit Karteikarten und wiederhole sie in festen, wachsenden Abständen.",
        "Ich habe gelernt, meine Prüfungsangst mit Atemübungen in den Griff zu bekommen.",
        "Ich lerne vor allem, indem ich mir den Stoff selbst laut erkläre."
       ],
       "fest": true
      }
     ]
    },
    {
     "id": "c1c1h1s2",
     "titel": "Welche Rolle spielen Textprogramme mit künstlicher Intelligenz in Ihrem Studium?",
     "aufgaben": [
      {
       "von": "Person 1 — Student der Informatik",
       "wer": "Mann",
       "text": "In meinem Fach ist das gar keine Grundsatzfrage mehr. Wenn ich ein Programm schreibe, gibt es viele Teile, die immer gleich aussehen, zum Beispiel das Einlesen von Daten. Das lasse ich mir vorschlagen und prüfe es dann. Die eigentlich spannende Arbeit, also die Logik, mache ich selbst. Dadurch habe ich einfach mehr Zeit für das, was mich wirklich interessiert.",
       "loesung": 6,
       "stelle": "viele Teile, die immer gleich aussehen",
       "erklaerung": "Er nutzt die Programme für immer gleiche Teile beim Programmieren, also Routinearbeit.",
       "frage": "Welche Aussage passt zu dieser Person?",
       "opt": [
        "Ich nutze solche Programme nur, um meine Gedanken zu ordnen, nie zum Schreiben selbst.",
        "Ich verzichte bewusst darauf, weil ich das eigenständige Formulieren nicht verlernen will.",
        "Ich halte sie für nützlich, misstraue aber grundsätzlich allen Quellenangaben.",
        "Die Hochschulen sollten klare Regeln aufstellen, statt die Programme zu verbieten.",
        "Beim Korrigieren sprachlicher Fehler in einer Fremdsprache sind sie mir eine große Hilfe.",
        "Ich sehe vor allem eine Gefahr für die Chancengleichheit, weil gute Versionen Geld kosten.",
        "Beim Programmieren nehmen sie mir viel lästige Routinearbeit ab.",
        "Anfangs war ich begeistert, inzwischen bin ich deutlich vorsichtiger geworden.",
        "Ich bin überzeugt, dass sie die Prüfungsformen an den Hochschulen grundlegend verändern werden.",
        "Ich lasse mir damit schwierige Fachbegriffe einfacher erklären."
       ],
       "fest": true
      },
      {
       "von": "Person 2 — Studentin der Philosophie",
       "wer": "Frau",
       "text": "Ich habe es einmal ausprobiert, und der Text war erstaunlich glatt. Aber genau das hat mich gestört. Philosophie besteht ja darin, um eine Formulierung zu ringen, bis sie wirklich trifft, was man meint. Wenn ich das abgebe, verliere ich auf Dauer genau die Fähigkeit, die ich hier lernen will. Deshalb benutze ich solche Programme schlicht nicht, auch wenn das manchmal mühsamer ist.",
       "loesung": 1,
       "stelle": "benutze ich solche Programme schlicht nicht",
       "erklaerung": "Sie verzichtet ganz darauf, damit sie das eigene Formulieren nicht verlernt.",
       "frage": "Welche Aussage passt zu dieser Person?",
       "opt": [
        "Ich nutze solche Programme nur, um meine Gedanken zu ordnen, nie zum Schreiben selbst.",
        "Ich verzichte bewusst darauf, weil ich das eigenständige Formulieren nicht verlernen will.",
        "Ich halte sie für nützlich, misstraue aber grundsätzlich allen Quellenangaben.",
        "Die Hochschulen sollten klare Regeln aufstellen, statt die Programme zu verbieten.",
        "Beim Korrigieren sprachlicher Fehler in einer Fremdsprache sind sie mir eine große Hilfe.",
        "Ich sehe vor allem eine Gefahr für die Chancengleichheit, weil gute Versionen Geld kosten.",
        "Beim Programmieren nehmen sie mir viel lästige Routinearbeit ab.",
        "Anfangs war ich begeistert, inzwischen bin ich deutlich vorsichtiger geworden.",
        "Ich bin überzeugt, dass sie die Prüfungsformen an den Hochschulen grundlegend verändern werden.",
        "Ich lasse mir damit schwierige Fachbegriffe einfacher erklären."
       ],
       "fest": true
      },
      {
       "von": "Person 3 — Studentin der Soziologie",
       "wer": "Frau",
       "text": "Mich beschäftigt weniger die Frage, ob man schummelt. Mich beschäftigt, wer sich die leistungsfähigen Versionen leisten kann. Wer monatlich zwanzig Euro übrig hat, bekommt deutlich bessere Ergebnisse als jemand, der nur die kostenlose Variante nutzt. Und das sind oft genau die Studenten, die ohnehin schon nebenher arbeiten müssen. Da entsteht eine neue Ungleichheit, über die kaum jemand spricht.",
       "loesung": 5,
       "stelle": "wer sich die leistungsfähigen Versionen leisten kann",
       "erklaerung": "Ihr Thema ist Geld und Gerechtigkeit, nicht Regeln oder Verbote.",
       "frage": "Welche Aussage passt zu dieser Person?",
       "opt": [
        "Ich nutze solche Programme nur, um meine Gedanken zu ordnen, nie zum Schreiben selbst.",
        "Ich verzichte bewusst darauf, weil ich das eigenständige Formulieren nicht verlernen will.",
        "Ich halte sie für nützlich, misstraue aber grundsätzlich allen Quellenangaben.",
        "Die Hochschulen sollten klare Regeln aufstellen, statt die Programme zu verbieten.",
        "Beim Korrigieren sprachlicher Fehler in einer Fremdsprache sind sie mir eine große Hilfe.",
        "Ich sehe vor allem eine Gefahr für die Chancengleichheit, weil gute Versionen Geld kosten.",
        "Beim Programmieren nehmen sie mir viel lästige Routinearbeit ab.",
        "Anfangs war ich begeistert, inzwischen bin ich deutlich vorsichtiger geworden.",
        "Ich bin überzeugt, dass sie die Prüfungsformen an den Hochschulen grundlegend verändern werden.",
        "Ich lasse mir damit schwierige Fachbegriffe einfacher erklären."
       ],
       "fest": true
      },
      {
       "von": "Person 4 — Student der Chemie",
       "wer": "Mann",
       "text": "Im ersten Semester fand ich das großartig, ich habe mir ganze Zusammenfassungen schreiben lassen. Dann hat mir ein Programm eine Studie genannt, die es gar nicht gibt, und ich habe sie fast in meinem Protokoll zitiert. Seitdem bin ich viel zurückhaltender. Ich nutze es noch gelegentlich, aber ich prüfe jedes Detail selbst und verlasse mich auf nichts mehr blind.",
       "loesung": 7,
       "stelle": "Seitdem bin ich viel zurückhaltender",
       "erklaerung": "Entscheidend ist die Entwicklung von Begeisterung zu Vorsicht. Die erfundene Studie ist nur der Auslöser, kein generelles Misstrauen gegenüber Quellen bei sonst großem Nutzen.",
       "frage": "Welche Aussage passt zu dieser Person?",
       "opt": [
        "Ich nutze solche Programme nur, um meine Gedanken zu ordnen, nie zum Schreiben selbst.",
        "Ich verzichte bewusst darauf, weil ich das eigenständige Formulieren nicht verlernen will.",
        "Ich halte sie für nützlich, misstraue aber grundsätzlich allen Quellenangaben.",
        "Die Hochschulen sollten klare Regeln aufstellen, statt die Programme zu verbieten.",
        "Beim Korrigieren sprachlicher Fehler in einer Fremdsprache sind sie mir eine große Hilfe.",
        "Ich sehe vor allem eine Gefahr für die Chancengleichheit, weil gute Versionen Geld kosten.",
        "Beim Programmieren nehmen sie mir viel lästige Routinearbeit ab.",
        "Anfangs war ich begeistert, inzwischen bin ich deutlich vorsichtiger geworden.",
        "Ich bin überzeugt, dass sie die Prüfungsformen an den Hochschulen grundlegend verändern werden.",
        "Ich lasse mir damit schwierige Fachbegriffe einfacher erklären."
       ],
       "fest": true
      },
      {
       "von": "Person 5 — Studentin auf Lehramt",
       "wer": "Frau",
       "text": "Ich glaube, wir stehen erst am Anfang. Eine Hausarbeit, die man zu Hause schreibt, sagt bald nichts mehr darüber aus, was jemand kann. Meine Vermutung ist, dass es künftig viel mehr mündliche Prüfungen geben wird oder Arbeiten, die man unter Aufsicht schreibt. Ob man das gut findet oder nicht, die Hochschulen werden sich auf jeden Fall umstellen müssen.",
       "loesung": 8,
       "stelle": "viel mehr mündliche Prüfungen geben wird",
       "erklaerung": "Sie macht eine Prognose über neue Prüfungsformen. Sie fordert keine Regeln, sie sagt eine Veränderung voraus.",
       "frage": "Welche Aussage passt zu dieser Person?",
       "opt": [
        "Ich nutze solche Programme nur, um meine Gedanken zu ordnen, nie zum Schreiben selbst.",
        "Ich verzichte bewusst darauf, weil ich das eigenständige Formulieren nicht verlernen will.",
        "Ich halte sie für nützlich, misstraue aber grundsätzlich allen Quellenangaben.",
        "Die Hochschulen sollten klare Regeln aufstellen, statt die Programme zu verbieten.",
        "Beim Korrigieren sprachlicher Fehler in einer Fremdsprache sind sie mir eine große Hilfe.",
        "Ich sehe vor allem eine Gefahr für die Chancengleichheit, weil gute Versionen Geld kosten.",
        "Beim Programmieren nehmen sie mir viel lästige Routinearbeit ab.",
        "Anfangs war ich begeistert, inzwischen bin ich deutlich vorsichtiger geworden.",
        "Ich bin überzeugt, dass sie die Prüfungsformen an den Hochschulen grundlegend verändern werden.",
        "Ich lasse mir damit schwierige Fachbegriffe einfacher erklären."
       ],
       "fest": true
      },
      {
       "von": "Person 6 — Student des Bauingenieurwesens aus Brasilien",
       "wer": "Mann",
       "text": "Deutsch ist ja nicht meine Muttersprache, und in Laborberichten bin ich bei Artikeln und Endungen oft unsicher. Ich schreibe den Bericht komplett selbst und lasse ihn danach sprachlich prüfen. Dann sehe ich zum Beispiel, dass ich den falschen Kasus benutzt habe, und lerne dabei sogar etwas. Früher habe ich Freunde um Korrektur gebeten, das ist jetzt nicht mehr nötig.",
       "loesung": 4,
       "stelle": "lasse ihn danach sprachlich prüfen",
       "erklaerung": "Er schreibt selbst und nutzt das Programm als Sprachkorrektur in der Fremdsprache.",
       "frage": "Welche Aussage passt zu dieser Person?",
       "opt": [
        "Ich nutze solche Programme nur, um meine Gedanken zu ordnen, nie zum Schreiben selbst.",
        "Ich verzichte bewusst darauf, weil ich das eigenständige Formulieren nicht verlernen will.",
        "Ich halte sie für nützlich, misstraue aber grundsätzlich allen Quellenangaben.",
        "Die Hochschulen sollten klare Regeln aufstellen, statt die Programme zu verbieten.",
        "Beim Korrigieren sprachlicher Fehler in einer Fremdsprache sind sie mir eine große Hilfe.",
        "Ich sehe vor allem eine Gefahr für die Chancengleichheit, weil gute Versionen Geld kosten.",
        "Beim Programmieren nehmen sie mir viel lästige Routinearbeit ab.",
        "Anfangs war ich begeistert, inzwischen bin ich deutlich vorsichtiger geworden.",
        "Ich bin überzeugt, dass sie die Prüfungsformen an den Hochschulen grundlegend verändern werden.",
        "Ich lasse mir damit schwierige Fachbegriffe einfacher erklären."
       ],
       "fest": true
      },
      {
       "von": "Person 7 — Student der Politikwissenschaft",
       "wer": "Mann",
       "text": "An meinem Institut ist die Lage völlig chaotisch. Ein Professor verbietet alles, die nächste erlaubt alles, und niemand weiß, was eigentlich gilt. Ein Verbot lässt sich ohnehin nicht kontrollieren. Ich wünsche mir, dass die Hochschule einheitlich festlegt, wofür man die Programme benutzen darf und wie man das kennzeichnet. Dann wüssten alle, woran sie sind.",
       "loesung": 3,
       "stelle": "dass die Hochschule einheitlich festlegt",
       "erklaerung": "Er fordert verbindliche Regeln statt Verbote. Eine Prognose über Prüfungen macht er nicht.",
       "frage": "Welche Aussage passt zu dieser Person?",
       "opt": [
        "Ich nutze solche Programme nur, um meine Gedanken zu ordnen, nie zum Schreiben selbst.",
        "Ich verzichte bewusst darauf, weil ich das eigenständige Formulieren nicht verlernen will.",
        "Ich halte sie für nützlich, misstraue aber grundsätzlich allen Quellenangaben.",
        "Die Hochschulen sollten klare Regeln aufstellen, statt die Programme zu verbieten.",
        "Beim Korrigieren sprachlicher Fehler in einer Fremdsprache sind sie mir eine große Hilfe.",
        "Ich sehe vor allem eine Gefahr für die Chancengleichheit, weil gute Versionen Geld kosten.",
        "Beim Programmieren nehmen sie mir viel lästige Routinearbeit ab.",
        "Anfangs war ich begeistert, inzwischen bin ich deutlich vorsichtiger geworden.",
        "Ich bin überzeugt, dass sie die Prüfungsformen an den Hochschulen grundlegend verändern werden.",
        "Ich lasse mir damit schwierige Fachbegriffe einfacher erklären."
       ],
       "fest": true
      },
      {
       "von": "Person 8 — Studentin der Kunstgeschichte",
       "wer": "Frau",
       "text": "Wenn ich vor einer Hausarbeit sitze, habe ich oft zu viele Ideen gleichzeitig. Dann tippe ich alles ungeordnet ein und frage, welche Struktur sich daraus ergeben könnte. Die Vorschläge sind nicht immer gut, aber sie bringen mich auf Ordnung. Den eigentlichen Text schreibe ich danach Satz für Satz selbst, da lasse ich mir überhaupt nicht helfen.",
       "loesung": 0,
       "stelle": "welche Struktur sich daraus ergeben könnte",
       "erklaerung": "Sie nutzt das Programm nur zum Gliedern ihrer Ideen, den Text schreibt sie allein.",
       "frage": "Welche Aussage passt zu dieser Person?",
       "opt": [
        "Ich nutze solche Programme nur, um meine Gedanken zu ordnen, nie zum Schreiben selbst.",
        "Ich verzichte bewusst darauf, weil ich das eigenständige Formulieren nicht verlernen will.",
        "Ich halte sie für nützlich, misstraue aber grundsätzlich allen Quellenangaben.",
        "Die Hochschulen sollten klare Regeln aufstellen, statt die Programme zu verbieten.",
        "Beim Korrigieren sprachlicher Fehler in einer Fremdsprache sind sie mir eine große Hilfe.",
        "Ich sehe vor allem eine Gefahr für die Chancengleichheit, weil gute Versionen Geld kosten.",
        "Beim Programmieren nehmen sie mir viel lästige Routinearbeit ab.",
        "Anfangs war ich begeistert, inzwischen bin ich deutlich vorsichtiger geworden.",
        "Ich bin überzeugt, dass sie die Prüfungsformen an den Hochschulen grundlegend verändern werden.",
        "Ich lasse mir damit schwierige Fachbegriffe einfacher erklären."
       ],
       "fest": true
      }
     ]
    },
    {
     "id": "c1c1h1s3",
     "titel": "Was hat Ihnen ein Auslandssemester gebracht oder warum verzichten Sie darauf?",
     "aufgaben": [
      {
       "von": "Person 1 — Studentin der Romanistik",
       "wer": "Frau",
       "text": "Ich war ein Semester in Lissabon, und es war wunderschön, keine Frage. Aber wenn ich ehrlich bin, habe ich fast nur mit anderen Austauschstudenten zu tun gehabt. Wir haben zusammen gewohnt, zusammen gefeiert und meistens Englisch gesprochen. Heute denke ich, ich hätte mir eine portugiesische Wohngemeinschaft suchen sollen. Diese Chance kommt so schnell nicht wieder.",
       "loesung": 6,
       "stelle": "ich hätte mir eine portugiesische Wohngemeinschaft suchen sollen",
       "erklaerung": "Sie bedauert, unter Austauschstudenten geblieben zu sein. Das ist mehr als „persönlich viel gelernt\".",
       "frage": "Welche Aussage passt zu dieser Person?",
       "opt": [
        "Fachlich hat mir der Aufenthalt weniger gebracht als persönlich.",
        "Ich verzichte darauf, weil sich ein Aufenthalt im Ausland nicht mit meinem Job vereinbaren lässt.",
        "Die Anerkennung meiner Studienleistungen war das größte Hindernis.",
        "Ein Praktikum im Ausland halte ich für sinnvoller als ein Semester an einer Hochschule.",
        "Erst durch den Aufenthalt habe ich mein Forschungsinteresse entdeckt.",
        "Ich finde, der Nutzen eines Auslandssemesters wird allgemein überschätzt.",
        "Ich bereue, dass ich zu wenig Kontakt zu Einheimischen gesucht habe.",
        "Ich plane den Aufenthalt gerade und kümmere mich vor allem um die Finanzierung.",
        "Ein digitales Austauschprogramm war für mich ein guter Ersatz.",
        "Nach der Rückkehr habe ich meine eigene Hochschule mit anderen Augen gesehen."
       ],
       "fest": true
      },
      {
       "von": "Person 2 — Student der Elektrotechnik",
       "wer": "Mann",
       "text": "Ein ganzes Semester an einer fremden Uni, nur um dort ähnliche Vorlesungen zu hören wie hier? Das hat mich nie überzeugt. Ich habe stattdessen sechs Monate bei einem Hersteller in Finnland gearbeitet. Da habe ich gesehen, wie Entwicklung im Alltag funktioniert, und gleichzeitig die Sprache und die Kultur kennengelernt. Für mein Fach war das viel wertvoller.",
       "loesung": 3,
       "stelle": "sechs Monate bei einem Hersteller in Finnland gearbeitet",
       "erklaerung": "Er hält Auslandserfahrung nicht für überschätzt, er bevorzugt nur die Arbeit in einem Betrieb.",
       "frage": "Welche Aussage passt zu dieser Person?",
       "opt": [
        "Fachlich hat mir der Aufenthalt weniger gebracht als persönlich.",
        "Ich verzichte darauf, weil sich ein Aufenthalt im Ausland nicht mit meinem Job vereinbaren lässt.",
        "Die Anerkennung meiner Studienleistungen war das größte Hindernis.",
        "Ein Praktikum im Ausland halte ich für sinnvoller als ein Semester an einer Hochschule.",
        "Erst durch den Aufenthalt habe ich mein Forschungsinteresse entdeckt.",
        "Ich finde, der Nutzen eines Auslandssemesters wird allgemein überschätzt.",
        "Ich bereue, dass ich zu wenig Kontakt zu Einheimischen gesucht habe.",
        "Ich plane den Aufenthalt gerade und kümmere mich vor allem um die Finanzierung.",
        "Ein digitales Austauschprogramm war für mich ein guter Ersatz.",
        "Nach der Rückkehr habe ich meine eigene Hochschule mit anderen Augen gesehen."
       ],
       "fest": true
      },
      {
       "von": "Person 3 — Studentin der Pflegewissenschaft",
       "wer": "Frau",
       "text": "Ich hätte große Lust, wirklich. Aber ich arbeite zwanzig Stunden pro Woche in einer Klinik, und ohne dieses Gehalt kann ich weder Miete noch Studium bezahlen. Wenn ich ein halbes Jahr weg bin, ist die Stelle weg, und eine neue zu finden ist nicht leicht. Ein Stipendium würde daran wenig ändern. Also bleibe ich, so schade ich das finde.",
       "loesung": 1,
       "stelle": "Wenn ich ein halbes Jahr weg bin, ist die Stelle weg",
       "erklaerung": "Sie plant nichts, sie verzichtet. Der Grund ist ihre Arbeitsstelle, nicht nur das Geld allein.",
       "frage": "Welche Aussage passt zu dieser Person?",
       "opt": [
        "Fachlich hat mir der Aufenthalt weniger gebracht als persönlich.",
        "Ich verzichte darauf, weil sich ein Aufenthalt im Ausland nicht mit meinem Job vereinbaren lässt.",
        "Die Anerkennung meiner Studienleistungen war das größte Hindernis.",
        "Ein Praktikum im Ausland halte ich für sinnvoller als ein Semester an einer Hochschule.",
        "Erst durch den Aufenthalt habe ich mein Forschungsinteresse entdeckt.",
        "Ich finde, der Nutzen eines Auslandssemesters wird allgemein überschätzt.",
        "Ich bereue, dass ich zu wenig Kontakt zu Einheimischen gesucht habe.",
        "Ich plane den Aufenthalt gerade und kümmere mich vor allem um die Finanzierung.",
        "Ein digitales Austauschprogramm war für mich ein guter Ersatz.",
        "Nach der Rückkehr habe ich meine eigene Hochschule mit anderen Augen gesehen."
       ],
       "fest": true
      },
      {
       "von": "Person 4 — Student der Geografie",
       "wer": "Mann",
       "text": "Ich bin nach Island gegangen, eigentlich nur wegen der Landschaft. Dort habe ich ein Seminar über Gletscherschmelze belegt, und wir waren jede Woche draußen und haben selbst gemessen. Vorher wusste ich nicht genau, in welche Richtung ich will. Jetzt schreibe ich meine Abschlussarbeit über genau dieses Thema und möchte danach unbedingt promovieren.",
       "loesung": 4,
       "stelle": "Vorher wusste ich nicht genau, in welche Richtung ich will",
       "erklaerung": "Im Ausland hat er das Thema gefunden, über das er forschen will.",
       "frage": "Welche Aussage passt zu dieser Person?",
       "opt": [
        "Fachlich hat mir der Aufenthalt weniger gebracht als persönlich.",
        "Ich verzichte darauf, weil sich ein Aufenthalt im Ausland nicht mit meinem Job vereinbaren lässt.",
        "Die Anerkennung meiner Studienleistungen war das größte Hindernis.",
        "Ein Praktikum im Ausland halte ich für sinnvoller als ein Semester an einer Hochschule.",
        "Erst durch den Aufenthalt habe ich mein Forschungsinteresse entdeckt.",
        "Ich finde, der Nutzen eines Auslandssemesters wird allgemein überschätzt.",
        "Ich bereue, dass ich zu wenig Kontakt zu Einheimischen gesucht habe.",
        "Ich plane den Aufenthalt gerade und kümmere mich vor allem um die Finanzierung.",
        "Ein digitales Austauschprogramm war für mich ein guter Ersatz.",
        "Nach der Rückkehr habe ich meine eigene Hochschule mit anderen Augen gesehen."
       ],
       "fest": true
      },
      {
       "von": "Person 5 — Studentin der Architektur",
       "wer": "Frau",
       "text": "Die Zeit in Kopenhagen selbst war großartig. Das Problem kam danach. Meine Hochschule hat zwei der vier Kurse nicht anerkannt, weil sie angeblich nicht genau unseren Modulen entsprachen. Ich musste sie hier noch einmal belegen und habe ein ganzes Semester verloren. Wer so etwas plant, sollte sich jede Zusage vorher schriftlich geben lassen.",
       "loesung": 2,
       "stelle": "zwei der vier Kurse nicht anerkannt",
       "erklaerung": "Der Aufenthalt war gut, das Problem war die Anerkennung der Kurse.",
       "frage": "Welche Aussage passt zu dieser Person?",
       "opt": [
        "Fachlich hat mir der Aufenthalt weniger gebracht als persönlich.",
        "Ich verzichte darauf, weil sich ein Aufenthalt im Ausland nicht mit meinem Job vereinbaren lässt.",
        "Die Anerkennung meiner Studienleistungen war das größte Hindernis.",
        "Ein Praktikum im Ausland halte ich für sinnvoller als ein Semester an einer Hochschule.",
        "Erst durch den Aufenthalt habe ich mein Forschungsinteresse entdeckt.",
        "Ich finde, der Nutzen eines Auslandssemesters wird allgemein überschätzt.",
        "Ich bereue, dass ich zu wenig Kontakt zu Einheimischen gesucht habe.",
        "Ich plane den Aufenthalt gerade und kümmere mich vor allem um die Finanzierung.",
        "Ein digitales Austauschprogramm war für mich ein guter Ersatz.",
        "Nach der Rückkehr habe ich meine eigene Hochschule mit anderen Augen gesehen."
       ],
       "fest": true
      },
      {
       "von": "Person 6 — Student der Volkswirtschaftslehre",
       "wer": "Mann",
       "text": "Alle reden davon, als wäre ein Auslandssemester ein Muss für den Lebenslauf. Ich habe mit einigen Personalverantwortlichen gesprochen, und die meisten interessieren sich viel mehr für Praktika und Noten. Natürlich kann man im Ausland schöne Erfahrungen machen, aber das kann man auch im Urlaub. Ich finde, der Effekt für die Karriere wird schlicht übertrieben.",
       "loesung": 5,
       "stelle": "der Effekt für die Karriere wird schlicht übertrieben",
       "erklaerung": "Er hält den Nutzen generell für überschätzt. Ein Praktikum im Ausland empfiehlt er nicht.",
       "frage": "Welche Aussage passt zu dieser Person?",
       "opt": [
        "Fachlich hat mir der Aufenthalt weniger gebracht als persönlich.",
        "Ich verzichte darauf, weil sich ein Aufenthalt im Ausland nicht mit meinem Job vereinbaren lässt.",
        "Die Anerkennung meiner Studienleistungen war das größte Hindernis.",
        "Ein Praktikum im Ausland halte ich für sinnvoller als ein Semester an einer Hochschule.",
        "Erst durch den Aufenthalt habe ich mein Forschungsinteresse entdeckt.",
        "Ich finde, der Nutzen eines Auslandssemesters wird allgemein überschätzt.",
        "Ich bereue, dass ich zu wenig Kontakt zu Einheimischen gesucht habe.",
        "Ich plane den Aufenthalt gerade und kümmere mich vor allem um die Finanzierung.",
        "Ein digitales Austauschprogramm war für mich ein guter Ersatz.",
        "Nach der Rückkehr habe ich meine eigene Hochschule mit anderen Augen gesehen."
       ],
       "fest": true
      },
      {
       "von": "Person 7 — Studentin der Kulturwissenschaft",
       "wer": "Frau",
       "text": "In Montreal hatten wir sehr kleine Seminare, und die Professoren kannten jeden mit Namen. Als ich zurückkam, saß ich plötzlich wieder mit zweihundert Leuten im Hörsaal, und mir fiel auf, wie anonym das hier eigentlich ist. Vorher fand ich das völlig normal. Jetzt engagiere ich mich in der Fachschaft, damit sich an der Betreuung etwas ändert.",
       "loesung": 9,
       "stelle": "Vorher fand ich das völlig normal",
       "erklaerung": "Nach der Rückkehr bewertet sie ihre eigene Hochschule neu.",
       "frage": "Welche Aussage passt zu dieser Person?",
       "opt": [
        "Fachlich hat mir der Aufenthalt weniger gebracht als persönlich.",
        "Ich verzichte darauf, weil sich ein Aufenthalt im Ausland nicht mit meinem Job vereinbaren lässt.",
        "Die Anerkennung meiner Studienleistungen war das größte Hindernis.",
        "Ein Praktikum im Ausland halte ich für sinnvoller als ein Semester an einer Hochschule.",
        "Erst durch den Aufenthalt habe ich mein Forschungsinteresse entdeckt.",
        "Ich finde, der Nutzen eines Auslandssemesters wird allgemein überschätzt.",
        "Ich bereue, dass ich zu wenig Kontakt zu Einheimischen gesucht habe.",
        "Ich plane den Aufenthalt gerade und kümmere mich vor allem um die Finanzierung.",
        "Ein digitales Austauschprogramm war für mich ein guter Ersatz.",
        "Nach der Rückkehr habe ich meine eigene Hochschule mit anderen Augen gesehen."
       ],
       "fest": true
      },
      {
       "von": "Person 8 — Student der Physik",
       "wer": "Mann",
       "text": "Die Kurse in Sevilla waren, offen gesagt, leichter als bei uns, und ich habe fachlich kaum etwas Neues gelernt. Trotzdem möchte ich die Zeit nicht missen. Ich musste mich zum ersten Mal ganz allein organisieren, mit Behörden in einer fremden Sprache kämpfen und neue Freunde finden. Ich bin dadurch viel selbstständiger geworden.",
       "loesung": 0,
       "stelle": "Ich bin dadurch viel selbstständiger geworden",
       "erklaerung": "Fachlich wenig, persönlich viel. Von Reue oder fehlendem Kontakt spricht er nicht.",
       "frage": "Welche Aussage passt zu dieser Person?",
       "opt": [
        "Fachlich hat mir der Aufenthalt weniger gebracht als persönlich.",
        "Ich verzichte darauf, weil sich ein Aufenthalt im Ausland nicht mit meinem Job vereinbaren lässt.",
        "Die Anerkennung meiner Studienleistungen war das größte Hindernis.",
        "Ein Praktikum im Ausland halte ich für sinnvoller als ein Semester an einer Hochschule.",
        "Erst durch den Aufenthalt habe ich mein Forschungsinteresse entdeckt.",
        "Ich finde, der Nutzen eines Auslandssemesters wird allgemein überschätzt.",
        "Ich bereue, dass ich zu wenig Kontakt zu Einheimischen gesucht habe.",
        "Ich plane den Aufenthalt gerade und kümmere mich vor allem um die Finanzierung.",
        "Ein digitales Austauschprogramm war für mich ein guter Ersatz.",
        "Nach der Rückkehr habe ich meine eigene Hochschule mit anderen Augen gesehen."
       ],
       "fest": true
      }
     ]
    }
   ]
  },
  {
   "nr": 2,
   "art": "gespraech",
   "name": "Hören: Gespräch",
   "kurz": "Zehn Satzanfänge, je drei Fortsetzungen — EINMAL hören",
   "was": "Ein Gespräch, zum Beispiel in der Sprechstunde oder Studienberatung, in Abschnitten. Zu jedem Abschnitt wählst du die richtige Fortsetzung eines Satzes.",
   "tipp": "Die falschen Fortsetzungen benutzen Wörter aus dem Gespräch. Achte darauf, wer was sagt und was am Ende beschlossen wird.",
   "zeichen": "💬",
   "farbe": "gold",
   "punkte": 10,
   "mal": 1,
   "runden": [
    {
     "id": "c1c1h2s1",
     "titel": "Studienberatung: Wechsel vom Maschinenbau in die Umweltwissenschaften",
     "aufgaben": [
      {
       "ort": "Gespräch — Abschnitt 1",
       "zeilen": [
        {
         "wer": "Frau",
         "text": "Guten Tag, kommen Sie herein. Sie hatten mir geschrieben, dass Sie über einen Studienwechsel nachdenken. Erzählen Sie doch erst einmal, wo Sie gerade stehen."
        },
        {
         "wer": "Mann",
         "text": "Ich bin im vierten Semester Maschinenbau in Hellerbach. Die Prüfungen habe ich eigentlich alle bestanden, daran liegt es nicht. Aber je weiter ich komme, desto weniger kann ich mir vorstellen, später tatsächlich in diesem Bereich zu arbeiten. Ich habe auch schon mit meinen Eltern darüber gesprochen, die sind allerdings nicht gerade begeistert."
        }
       ],
       "frage": "Der Student denkt über einen Wechsel nach, weil …",
       "opt": [
        "er mehrere Prüfungen im vierten Semester nicht bestanden hat.",
        "ihm die Hochschule in Hellerbach einen anderen Bereich empfohlen hat.",
        "er sich zunehmend nicht vorstellen kann, später im Fach zu arbeiten."
       ],
       "loesung": 2,
       "stelle": "desto weniger kann ich mir vorstellen, später tatsächlich",
       "erklaerung": "Die Prüfungen hat er bestanden; der Grund ist seine fehlende berufliche Perspektive im Fach."
      },
      {
       "ort": "Gespräch — Abschnitt 2",
       "zeilen": [
        {
         "wer": "Frau",
         "text": "Und wohin soll die Reise gehen?"
        },
        {
         "wer": "Mann",
         "text": "Ich interessiere mich für den Bachelor Umweltwissenschaften. Den Anstoß hat ehrlich gesagt ein Praktikum gegeben. Ich war im Sommer bei einem Ingenieurbüro, das Kläranlagen plant, und habe gemerkt, dass mich die ökologischen Fragen viel mehr fesseln als die technischen Details der Pumpen. Vor allem die Frage, wie man Gewässer langfristig schützen kann, lässt mich seitdem nicht mehr los."
        }
       ],
       "frage": "Den Anstoß zum Umdenken gab …",
       "opt": [
        "ein Praktikum bei einem Büro, das Kläranlagen plant.",
        "eine Vorlesung über die technischen Details von Pumpen.",
        "ein Gespräch mit einem Ingenieur über Umweltwissenschaften."
       ],
       "loesung": 0,
       "stelle": "Den Anstoß hat ehrlich gesagt ein Praktikum gegeben",
       "erklaerung": "Ausdrücklich genannt: ein Sommerpraktikum in einem Ingenieurbüro für Kläranlagen."
      },
      {
       "ort": "Gespräch — Abschnitt 3",
       "zeilen": [
        {
         "wer": "Frau",
         "text": "Das klingt nachvollziehbar. Die gute Nachricht ist: Sie müssen nicht bei null anfangen. Mathematik, Physik und Strömungslehre werden in der Regel angerechnet, sofern die Inhalte vergleichbar sind. Darüber entscheidet allerdings nicht die Studienberatung, sondern der Prüfungsausschuss des neuen Fachs. Bei den eher fachspezifischen Modulen, etwa der Konstruktionslehre, sieht es dagegen schlechter aus."
        }
       ],
       "frage": "Über die Anrechnung bisheriger Leistungen entscheidet …",
       "opt": [
        "der Prüfungsausschuss des Fachs, in das er wechseln will.",
        "die Studienberatung nach einem Vergleich der Inhalte.",
        "der Prüfungsausschuss des Maschinenbaus."
       ],
       "loesung": 0,
       "stelle": "sondern der Prüfungsausschuss des neuen Fachs",
       "erklaerung": "Die Beraterin betont, dass nicht sie, sondern der Ausschuss des neuen Fachs entscheidet."
      },
      {
       "ort": "Gespräch — Abschnitt 4",
       "zeilen": [
        {
         "wer": "Mann",
         "text": "Wie lange dauert so eine Prüfung der Anrechnung denn?"
        },
        {
         "wer": "Frau",
         "text": "Rechnen Sie mit sechs bis acht Wochen. Deshalb rate ich Ihnen, den Antrag schon jetzt zu stellen und nicht erst nach der Einschreibung. Sonst sitzen Sie womöglich im ersten Semester in Veranstaltungen, die Sie später gar nicht bräuchten. Den Antrag reichen Sie übrigens mit allen Modulbeschreibungen aus dem Maschinenbau ein."
        }
       ],
       "frage": "Die Beraterin empfiehlt, den Antrag auf Anrechnung …",
       "opt": [
        "erst nach der Einschreibung zu stellen.",
        "sofort und vor der Einschreibung zu stellen.",
        "im ersten Semester zusammen mit den Veranstaltungen zu stellen."
       ],
       "loesung": 1,
       "stelle": "den Antrag schon jetzt zu stellen und nicht erst nach der Einschreibung",
       "erklaerung": "Sie rät ausdrücklich, nicht bis nach der Einschreibung zu warten."
      },
      {
       "ort": "Gespräch — Abschnitt 5",
       "zeilen": [
        {
         "wer": "Mann",
         "text": "Ein Punkt macht mir Sorgen: die Finanzierung. Ich bekomme Ausbildungsförderung, und ich habe gehört, dass ein Wechsel da Probleme machen kann."
        },
        {
         "wer": "Frau",
         "text": "Das hängt vom Zeitpunkt ab. Bis zum Ende des dritten Semesters gilt ein Wechsel meist ohne Weiteres als begründet. Sie sind jetzt im vierten, da brauchen Sie einen sogenannten wichtigen Grund, und den müssen Sie schriftlich darlegen. Das klingt bürokratischer, als es ist, aber nehmen Sie es bitte ernst."
        }
       ],
       "frage": "Für die weitere Förderung muss der Student …",
       "opt": [
        "bis zum Ende des dritten Semesters wechseln.",
        "schriftlich einen wichtigen Grund für den Wechsel darlegen.",
        "nichts weiter tun, da der Wechsel ohne Weiteres anerkannt wird."
       ],
       "loesung": 1,
       "stelle": "einen sogenannten wichtigen Grund, und den müssen Sie schriftlich darlegen",
       "erklaerung": "Da er schon im vierten Semester ist, gilt die einfache Regel nicht mehr."
      },
      {
       "ort": "Gespräch — Abschnitt 6",
       "zeilen": [
        {
         "wer": "Mann",
         "text": "Und reicht es, wenn ich schreibe, dass mir das Fach nicht mehr gefällt?"
        },
        {
         "wer": "Frau",
         "text": "Das allein überzeugt das Amt erfahrungsgemäß nicht. Überzeugender ist, wenn Sie zeigen, dass sich Ihr Interesse erst durch neue Erfahrungen entwickelt hat, die Sie zu Studienbeginn nicht haben konnten. Ihr Praktikum ist dafür ein gutes Beispiel, legen Sie am besten eine Bescheinigung bei."
        }
       ],
       "frage": "Nach Ansicht der Beraterin überzeugt das Amt am ehesten, wenn der Student …",
       "opt": [
        "erklärt, dass ihm das Fach nicht mehr gefällt.",
        "eine Bescheinigung über seine Studienleistungen beilegt.",
        "belegt, dass sein Interesse durch eine neue Erfahrung entstanden ist."
       ],
       "loesung": 2,
       "stelle": "dass sich Ihr Interesse erst durch neue Erfahrungen entwickelt hat",
       "erklaerung": "Bloßes Nichtgefallen reicht nicht; die Bescheinigung betrifft das Praktikum, nicht Studienleistungen."
      },
      {
       "ort": "Gespräch — Abschnitt 7",
       "zeilen": [
        {
         "wer": "Mann",
         "text": "Gibt es im neuen Studiengang eigentlich eine Zulassungsbeschränkung?"
        },
        {
         "wer": "Frau",
         "text": "Für das erste Semester ja, da ist die Nachfrage groß. Wenn Sie aber durch die Anrechnung direkt ins dritte Fachsemester eingestuft werden, bewerben Sie sich auf einen freien Platz in einem höheren Semester. Dort gibt es erfahrungsgemäß deutlich weniger Konkurrenz. Die genauen Fristen finden Sie auf der Seite des Studentensekretariats."
        }
       ],
       "frage": "Die Chancen auf einen Platz sind besser, wenn der Student …",
       "opt": [
        "direkt in ein höheres Fachsemester eingestuft wird.",
        "sich ganz normal für das erste Semester bewirbt.",
        "sich gleichzeitig für mehrere Studiengänge bewirbt."
       ],
       "loesung": 0,
       "stelle": "Dort gibt es erfahrungsgemäß deutlich weniger Konkurrenz",
       "erklaerung": "Im höheren Semester ist die Konkurrenz geringer als im stark nachgefragten ersten."
      },
      {
       "ort": "Gespräch — Abschnitt 8",
       "zeilen": [
        {
         "wer": "Mann",
         "text": "Ich frage mich, ob ich das Maschinenbaustudium nicht doch zu Ende bringen sollte. Dann hätte ich wenigstens einen Abschluss. Andererseits wären das noch mindestens drei Semester."
        },
        {
         "wer": "Frau",
         "text": "Das wäre eine Möglichkeit, aber bedenken Sie Folgendes: Ein Masterstudium in Umweltwissenschaften setzt fast überall einen fachnahen Bachelor voraus. Mit Maschinenbau würden Sie dort vermutlich Auflagen bekommen, also zusätzliche Kurse nachholen müssen."
        }
       ],
       "frage": "Ein abgeschlossener Bachelor in Maschinenbau würde laut der Beraterin …",
       "opt": [
        "überall direkt zum Master in Umweltwissenschaften berechtigen.",
        "die Bewerbung für das erste Semester erleichtern.",
        "beim späteren Master voraussichtlich zu zusätzlichen Auflagen führen."
       ],
       "loesung": 2,
       "stelle": "vermutlich Auflagen bekommen, also zusätzliche Kurse nachholen müssen",
       "erklaerung": "Der Master verlangt einen fachnahen Bachelor; mit Maschinenbau drohen Auflagen."
      },
      {
       "ort": "Gespräch — Abschnitt 9",
       "zeilen": [
        {
         "wer": "Mann",
         "text": "Kann ich mir die Veranstaltungen vorher irgendwie anschauen?"
        },
        {
         "wer": "Frau",
         "text": "Unbedingt. Die meisten Dozenten haben nichts dagegen, wenn Sie als Gast in eine Vorlesung kommen. Noch aufschlussreicher finde ich aber ein Gespräch mit Studenten aus höheren Semestern. Die Fachschaft bietet dafür jeden Donnerstag eine offene Sprechstunde an. Dort erfahren Sie auch, wie hoch der Arbeitsaufwand im Labor wirklich ist."
        }
       ],
       "frage": "Besonders aufschlussreich findet die Beraterin …",
       "opt": [
        "den Besuch einer Vorlesung als Gast.",
        "ein Gespräch mit Studenten aus höheren Semestern.",
        "eine Sprechstunde bei den Dozenten am Donnerstag."
       ],
       "loesung": 1,
       "stelle": "Noch aufschlussreicher finde ich aber ein Gespräch mit Studenten",
       "erklaerung": "Der Gastbesuch ist gut, „noch aufschlussreicher\" ist das Gespräch über die Fachschaft."
      },
      {
       "ort": "Gespräch — Abschnitt 10",
       "zeilen": [
        {
         "wer": "Mann",
         "text": "Gut, dann weiß ich, was ich zu tun habe. Vielen Dank. Das hätte ich sonst wahrscheinlich als Erstes gemacht."
        },
        {
         "wer": "Frau",
         "text": "Gern. Eine Bitte noch: Melden Sie sich nicht im Maschinenbau ab, bevor die Zusage für den neuen Studiengang vorliegt. Sonst stehen Sie im schlimmsten Fall ein Semester ohne Studienplatz und damit auch ohne Förderung da."
        }
       ],
       "frage": "Zum Schluss rät die Beraterin dem Studenten, sich im Maschinenbau …",
       "opt": [
        "erst nach der Zusage für den neuen Studiengang abzumelden.",
        "sofort abzumelden, um die Förderung nicht zu gefährden.",
        "für ein Semester beurlauben zu lassen."
       ],
       "loesung": 0,
       "stelle": "bevor die Zusage für den neuen Studiengang vorliegt",
       "erklaerung": "Eine zu frühe Abmeldung könnte zu einem Semester ohne Platz und Förderung führen."
      }
     ]
    },
    {
     "id": "c1c1h2s2",
     "titel": "Zwei Doktoranden besprechen ihr Forschungsprojekt zu Stadtlärm und Vogelgesang",
     "aufgaben": [
      {
       "ort": "Gespräch — Abschnitt 1",
       "zeilen": [
        {
         "wer": "Frau",
         "text": "Hast du kurz Zeit? Ich habe mir die Aufnahmen vom Wochenende angehört, und ich glaube, wir haben ein Problem mit den Mikrofonen im Stadtpark."
        },
        {
         "wer": "Mann",
         "text": "Schon wieder der Wind? Ich dachte, die neuen Schaumstoffhüllen hätten das gelöst. Das hat uns schließlich den halben Mai gekostet."
        },
        {
         "wer": "Frau",
         "text": "Nein, diesmal ist es nicht der Wind. Zwei der Geräte haben gegen vier Uhr morgens einfach aufgehört aufzunehmen, genau dann, wenn der Morgengesang der Amseln beginnt."
        }
       ],
       "frage": "Das Problem mit den Aufnahmen besteht darin, dass …",
       "opt": [
        "zwei Geräte zu Beginn des Morgengesangs ausgefallen sind.",
        "der Wind die Aufnahmen im Stadtpark erneut gestört hat.",
        "die Schaumstoffhüllen der Mikrofone beschädigt waren."
       ],
       "loesung": 0,
       "stelle": "Zwei der Geräte haben gegen vier Uhr morgens einfach aufgehört",
       "erklaerung": "Sie sagt ausdrücklich, dass es diesmal nicht der Wind ist."
      },
      {
       "ort": "Gespräch — Abschnitt 2",
       "zeilen": [
        {
         "wer": "Mann",
         "text": "Das ist ärgerlich. Liegt es an den Akkus?"
        },
        {
         "wer": "Frau",
         "text": "Das war auch mein erster Gedanke, aber die Akkus waren noch halb voll. Ich vermute eher, dass die Speicherkarten zu langsam sind. Die Geräte schreiben nachts im hochauflösenden Modus, und offenbar kommen die Karten da irgendwann nicht mehr hinterher. Bei den Geräten an der Hauptstraße ist das übrigens nicht passiert, die laufen im einfachen Modus."
        }
       ],
       "frage": "Als Ursache vermutet die Doktorandin, dass …",
       "opt": [
        "die Akkus nachts nur noch halb voll waren.",
        "die Geräte im hochauflösenden Modus überhitzen.",
        "die Speicherkarten für den Modus zu langsam sind."
       ],
       "loesung": 2,
       "stelle": "Ich vermute eher, dass die Speicherkarten zu langsam sind",
       "erklaerung": "Die Akkus waren noch halb voll und scheiden damit aus."
      },
      {
       "ort": "Gespräch — Abschnitt 3",
       "zeilen": [
        {
         "wer": "Mann",
         "text": "Dann sollten wir schnellere Karten bestellen. Aber das dauert, und die Brutzeit ist bald vorbei. Und ohne die Daten aus den Morgenstunden ist das ganze Frühjahr eigentlich verloren."
        },
        {
         "wer": "Frau",
         "text": "Eben. Mein Vorschlag wäre, bis dahin die Auflösung etwas herunterzusetzen. Für die Frage, ob die Vögel bei Verkehrslärm höher singen, brauchen wir ohnehin nicht die maximale Qualität. Die Tonhöhe lässt sich auch so zuverlässig bestimmen. Wir müssten das nur im Methodenteil sauber dokumentieren."
        }
       ],
       "frage": "Als Übergangslösung schlägt die Doktorandin vor, …",
       "opt": [
        "die Messungen bis zum Ende der Brutzeit auszusetzen.",
        "sofort schnellere Karten auf eigene Kosten zu kaufen.",
        "die Aufnahmen vorübergehend mit geringerer Auflösung zu machen."
       ],
       "loesung": 2,
       "stelle": "bis dahin die Auflösung etwas herunterzusetzen",
       "erklaerung": "Für die Tonhöhe reicht eine geringere Qualität; die Brutzeit soll nicht verloren gehen."
      },
      {
       "ort": "Gespräch — Abschnitt 4",
       "zeilen": [
        {
         "wer": "Mann",
         "text": "Einverstanden. Apropos Tonhöhe: Ich habe gestern die ersten Auswertungen von der Hauptstraße gemacht. Die Amseln dort singen tatsächlich höher als im Park, aber der Unterschied ist kleiner, als wir erwartet hatten."
        },
        {
         "wer": "Frau",
         "text": "Wie viel kleiner?"
        },
        {
         "wer": "Mann",
         "text": "Ungefähr halb so groß wie in der Studie aus Marlingen, auf die wir uns im Antrag berufen haben. Ich habe die Rechnung zweimal überprüft, ein Fehler ist es also wohl nicht."
        }
       ],
       "frage": "Die ersten Auswertungen zeigen, dass die Amseln an der Hauptstraße …",
       "opt": [
        "genauso hoch singen wie die Amseln im Park.",
        "höher singen, aber mit geringerem Unterschied als erwartet.",
        "etwa doppelt so hoch singen wie in der Studie aus Marlingen."
       ],
       "loesung": 1,
       "stelle": "der Unterschied ist kleiner, als wir erwartet hatten",
       "erklaerung": "Ein Unterschied besteht, ist aber nur etwa halb so groß wie in der Vergleichsstudie."
      },
      {
       "ort": "Gespräch — Abschnitt 5",
       "zeilen": [
        {
         "wer": "Frau",
         "text": "Das muss aber nicht heißen, dass die Marlinger Ergebnisse falsch sind. Dort wurde in einer Großstadt gemessen, mit Verkehr fast rund um die Uhr. Bei uns ist es nachts relativ ruhig. Möglicherweise müssen die Vögel ihren Gesang einfach weniger stark anpassen. Außerdem standen die Mikrofone dort viel näher an der Fahrbahn als bei uns."
        }
       ],
       "frage": "Die Doktorandin erklärt den Unterschied zur Marlinger Studie damit, dass …",
       "opt": [
        "es in ihrer Stadt nachts vergleichsweise ruhig ist.",
        "in Marlingen falsch gemessen wurde.",
        "die Vögel in der Großstadt nachts nicht singen."
       ],
       "loesung": 0,
       "stelle": "Bei uns ist es nachts relativ ruhig",
       "erklaerung": "Sie hält die Marlinger Ergebnisse nicht für falsch, sondern verweist auf andere Bedingungen."
      },
      {
       "ort": "Gespräch — Abschnitt 6",
       "zeilen": [
        {
         "wer": "Mann",
         "text": "Das wäre eine schöne Erklärung, aber wir sollten aufpassen, dass wir sie nicht einfach in die Daten hineinlesen. Ich fände es sauberer, den Lärmpegel an jedem Standort systematisch mitzumessen. Dann können wir den Zusammenhang tatsächlich prüfen, statt nur zu spekulieren. Sonst wirft uns spätestens ein Gutachter vor, dass wir uns die Ergebnisse passend reden."
        }
       ],
       "frage": "Der Doktorand möchte den Lärmpegel mitmessen, um …",
       "opt": [
        "zu beweisen, dass die Marlinger Studie Fehler enthält.",
        "die Erklärung seiner Kollegin überprüfen zu können.",
        "die Daten schneller auswerten zu können."
       ],
       "loesung": 1,
       "stelle": "Dann können wir den Zusammenhang tatsächlich prüfen",
       "erklaerung": "Er will die Vermutung empirisch prüfen, statt sie nur anzunehmen."
      },
      {
       "ort": "Gespräch — Abschnitt 7",
       "zeilen": [
        {
         "wer": "Frau",
         "text": "Grundsätzlich gern, aber dafür bräuchten wir zusätzliche Schallpegelmesser, und unser Budget für Geräte ist aufgebraucht."
        },
        {
         "wer": "Mann",
         "text": "Nicht unbedingt. Das Institut für Akustik hat mehrere Geräte, die gerade ungenutzt im Keller stehen. Ich habe Doktor Albers schon gefragt, wir könnten sie bis Ende Juli ausleihen, vorausgesetzt, wir erwähnen das Institut in der Veröffentlichung. Er war sogar froh, dass die Geräte endlich einmal benutzt werden."
        }
       ],
       "frage": "Die Schallpegelmesser können die beiden ausleihen, wenn sie …",
       "opt": [
        "das Institut für Akustik in ihrer Veröffentlichung nennen.",
        "die Geräte aus ihrem eigenen Budget bezahlen.",
        "die Geräte vor Ende Juli zurückgeben und reparieren."
       ],
       "loesung": 0,
       "stelle": "vorausgesetzt, wir erwähnen das Institut in der Veröffentlichung",
       "erklaerung": "Die einzige Bedingung ist die Nennung des Instituts."
      },
      {
       "ort": "Gespräch — Abschnitt 8",
       "zeilen": [
        {
         "wer": "Frau",
         "text": "Das ist ja großartig. Dann bleibt nur die Frage, wer die Geräte aufstellt. Ich habe nächste Woche die Lehrveranstaltung und kaum Zeit."
        },
        {
         "wer": "Mann",
         "text": "Das übernehme ich. Dafür wäre es toll, wenn du dich um die Mail an unsere Betreuerin kümmerst. Sie sollte erfahren, dass sich der Versuchsaufbau ändert, bevor sie es im Zwischenbericht liest. Ich kann die Messgeräte gleich am Montag abholen und bis Mittwoch an allen Standorten installieren."
        }
       ],
       "frage": "Die Doktorandin soll …",
       "opt": [
        "nächste Woche die Schallpegelmesser aufstellen.",
        "die Betreuerin über die Änderung im Versuchsaufbau informieren.",
        "den Zwischenbericht für die Betreuerin schreiben."
       ],
       "loesung": 1,
       "stelle": "wenn du dich um die Mail an unsere Betreuerin kümmerst",
       "erklaerung": "Er stellt die Geräte auf, sie schreibt die Mail an die Betreuerin."
      },
      {
       "ort": "Gespräch — Abschnitt 9",
       "zeilen": [
        {
         "wer": "Frau",
         "text": "Mache ich. Ich frage sie bei der Gelegenheit auch gleich wegen der Konferenz in Weidenau. Die Frist für die Kurzfassungen endet zwar erst im September, aber ich würde gern vorher wissen, ob sie es für sinnvoll hält, mit vorläufigen Ergebnissen hinzugehen. Immerhin wäre das unser erster gemeinsamer Vortrag vor internationalem Publikum."
        }
       ],
       "frage": "Die Doktorandin möchte von der Betreuerin wissen, ob …",
       "opt": [
        "die Frist für die Kurzfassungen verlängert werden kann.",
        "die Konferenz in Weidenau schon im September stattfindet.",
        "es sinnvoll ist, vorläufige Ergebnisse auf der Konferenz vorzustellen."
       ],
       "loesung": 2,
       "stelle": "ob sie es für sinnvoll hält, mit vorläufigen Ergebnissen hinzugehen",
       "erklaerung": "Im September endet die Frist, nicht die Konferenz; gefragt wird nach dem Sinn vorläufiger Ergebnisse."
      },
      {
       "ort": "Gespräch — Abschnitt 10",
       "zeilen": [
        {
         "wer": "Mann",
         "text": "Ich wäre da eher vorsichtig. Wenn sich nach den Lärmmessungen herausstellt, dass der Effekt verschwindet, stehen wir auf der Konferenz mit einer Aussage da, die wir zurücknehmen müssen. Lieber ein halbes Jahr später, dafür mit belastbaren Daten. Aber lass uns hören, was sie dazu sagt, sie hat da mehr Erfahrung als wir beide."
        }
       ],
       "frage": "Der Doktorand würde mit der Konferenz lieber warten, weil …",
       "opt": [
        "sich die vorläufigen Ergebnisse noch als falsch erweisen könnten.",
        "er im nächsten halben Jahr keine Zeit für Reisen hat.",
        "die Lärmmessungen den Effekt bereits widerlegt haben."
       ],
       "loesung": 0,
       "stelle": "mit einer Aussage da, die wir zurücknehmen müssen",
       "erklaerung": "Er befürchtet, dass sich der Effekt noch als nicht haltbar herausstellt."
      }
     ]
    },
    {
     "id": "c1c1h2s3",
     "titel": "Sprechstunde bei Professorin Lindqvist: das Thema einer Hausarbeit eingrenzen",
     "aufgaben": [
      {
       "ort": "Gespräch — Abschnitt 1",
       "zeilen": [
        {
         "wer": "Frau",
         "text": "Herr Okafor, bitte setzen Sie sich. Sie wollten über Ihre Hausarbeit für das Seminar zur Bildungssoziologie sprechen?"
        },
        {
         "wer": "Mann",
         "text": "Genau. Ich habe Ihnen ja vorab eine Gliederung geschickt. Mein Thema ist der Einfluss der sozialen Herkunft auf den Bildungserfolg in Deutschland, und ich habe das Gefühl, dass ich mich gerade in der Literatur verliere. Jedes Buch verweist auf zehn weitere, und ich weiß nicht mehr, wo ich aufhören soll."
        }
       ],
       "frage": "Der Student kommt in die Sprechstunde, weil er …",
       "opt": [
        "noch keine Gliederung für seine Hausarbeit hat.",
        "den Eindruck hat, sich in der Literatur zu verlieren.",
        "das Thema seiner Hausarbeit wechseln möchte."
       ],
       "loesung": 1,
       "stelle": "dass ich mich gerade in der Literatur verliere",
       "erklaerung": "Eine Gliederung hat er bereits geschickt; sein Problem ist die Fülle der Literatur."
      },
      {
       "ort": "Gespräch — Abschnitt 2",
       "zeilen": [
        {
         "wer": "Frau",
         "text": "Das wundert mich nicht, offen gesagt. Zu diesem Thema gibt es Bibliotheken voller Studien. Auf fünfzehn Seiten können Sie das unmöglich in seiner ganzen Breite behandeln. Ihre Gliederung liest sich eher wie das Inhaltsverzeichnis eines Lehrbuchs als wie eine Hausarbeit. Allein die großen Vergleichsstudien der letzten Jahre würden eine eigene Arbeit füllen."
        }
       ],
       "frage": "Die Professorin kritisiert an der Gliederung, dass sie …",
       "opt": [
        "zu wenige Studien berücksichtigt.",
        "viel zu breit angelegt ist.",
        "sich zu eng an einem Lehrbuch orientiert."
       ],
       "loesung": 1,
       "stelle": "Auf fünfzehn Seiten können Sie das unmöglich in seiner ganzen Breite",
       "erklaerung": "Der Vergleich mit dem Lehrbuch bezieht sich auf die Breite, nicht auf eine Quelle."
      },
      {
       "ort": "Gespräch — Abschnitt 3",
       "zeilen": [
        {
         "wer": "Mann",
         "text": "Das habe ich befürchtet. Aber wie grenze ich das sinnvoll ein?"
        },
        {
         "wer": "Frau",
         "text": "Am besten über eine konkrete Fragestellung. Nicht: Welchen Einfluss hat die Herkunft? Sondern zum Beispiel: Spielt die Herkunft beim Übergang von der Grundschule aufs Gymnasium eine größere Rolle als die Noten? Eine solche Frage zwingt Sie, eine Entscheidung zu treffen, statt nur zu beschreiben. Die Antwort darauf mag am Ende auch lauten, dass beides zusammenwirkt, aber Sie müssen es begründen."
        }
       ],
       "frage": "Eine konkrete Fragestellung hat laut der Professorin den Vorteil, dass …",
       "opt": [
        "man gezwungen wird, sich festzulegen, statt nur zu beschreiben.",
        "man mehr über den Übergang aufs Gymnasium beschreiben kann.",
        "man die Noten der Grundschule genauer auswerten muss."
       ],
       "loesung": 0,
       "stelle": "zwingt Sie, eine Entscheidung zu treffen, statt nur zu beschreiben",
       "erklaerung": "Gerade das bloße Beschreiben soll vermieden werden."
      },
      {
       "ort": "Gespräch — Abschnitt 4",
       "zeilen": [
        {
         "wer": "Mann",
         "text": "Der Übergang nach der Grundschule interessiert mich tatsächlich. Ich habe selbst erlebt, wie unterschiedlich die Empfehlungen in meiner Klasse ausgefallen sind."
        },
        {
         "wer": "Frau",
         "text": "Persönliche Erfahrungen sind ein guter Ausgangspunkt für das Interesse, gehören aber nicht in die Argumentation. Wenn Sie das in der Einleitung kurz erwähnen, ist das in Ordnung. Im Hauptteil zählen ausschließlich Belege aus der Forschung. Sonst wirkt die Arbeit schnell wie ein Erfahrungsbericht."
        }
       ],
       "frage": "Eigene Erfahrungen darf der Student laut der Professorin …",
       "opt": [
        "im Hauptteil als zusätzliche Belege verwenden.",
        "überhaupt nicht in der Arbeit erwähnen.",
        "in der Einleitung kurz erwähnen."
       ],
       "loesung": 2,
       "stelle": "Wenn Sie das in der Einleitung kurz erwähnen, ist das in Ordnung",
       "erklaerung": "In der Einleitung ist es erlaubt, im Hauptteil nicht."
      },
      {
       "ort": "Gespräch — Abschnitt 5",
       "zeilen": [
        {
         "wer": "Mann",
         "text": "Welche Literatur würden Sie mir für den Einstieg empfehlen?"
        },
        {
         "wer": "Frau",
         "text": "Beginnen Sie mit einem aktuellen Überblicksartikel, nicht mit den Klassikern. Die Klassiker sind wichtig, aber dort finden Sie den Forschungsstand von vor dreißig Jahren. Ein guter Überblick zeigt Ihnen, welche Fragen inzwischen geklärt sind und wo noch gestritten wird. Von dort aus können Sie dann gezielt die Originalstudien lesen, auf die sich der Artikel stützt."
        }
       ],
       "frage": "Für den Einstieg rät die Professorin zu …",
       "opt": [
        "den Klassikern, weil sie den Forschungsstand begründet haben.",
        "Studien, die vor dreißig Jahren erschienen sind.",
        "einem aktuellen Artikel, der einen Überblick über die Forschung gibt."
       ],
       "loesung": 2,
       "stelle": "Beginnen Sie mit einem aktuellen Überblicksartikel",
       "erklaerung": "Die Klassiker sind wichtig, aber ausdrücklich nicht für den Einstieg."
      },
      {
       "ort": "Gespräch — Abschnitt 6",
       "zeilen": [
        {
         "wer": "Mann",
         "text": "Und wie viele Quellen erwarten Sie ungefähr?"
        },
        {
         "wer": "Frau",
         "text": "Ich gebe da bewusst keine Zahl vor. Mir ist wichtiger, dass Sie die Quellen, die Sie nennen, auch wirklich verarbeiten. Ich lese lieber eine Arbeit mit zwölf gründlich diskutierten Studien als eine mit vierzig, die nur in einer Fußnote auftauchen. Und bitte achten Sie darauf, dass Sie Studien nicht nur zusammenfassen, sondern miteinander ins Gespräch bringen."
        }
       ],
       "frage": "Bei den Quellen kommt es der Professorin vor allem darauf an, dass sie …",
       "opt": [
        "gründlich verarbeitet und diskutiert werden.",
        "mindestens zwölf Studien umfassen.",
        "alle in Fußnoten nachgewiesen werden."
       ],
       "loesung": 0,
       "stelle": "dass Sie die Quellen, die Sie nennen, auch wirklich verarbeiten",
       "erklaerung": "Sie gibt bewusst keine Mindestzahl vor; die Zwölf ist nur ein Beispiel."
      },
      {
       "ort": "Gespräch — Abschnitt 7",
       "zeilen": [
        {
         "wer": "Mann",
         "text": "Darf ich auch eigene Daten erheben? Ich könnte zum Beispiel ein paar Lehrkräfte an meiner alten Schule befragen."
        },
        {
         "wer": "Frau",
         "text": "Das ist ein schöner Gedanke, aber für eine Hausarbeit im dritten Semester würde ich davon abraten. Eine Befragung sauber zu planen und auszuwerten kostet mehr Zeit, als Sie haben. Heben Sie sich das für die Bachelorarbeit auf. Dort haben Sie die nötige Zeit und auch eine engere Betreuung."
        }
       ],
       "frage": "Von einer eigenen Befragung rät die Professorin ab, weil …",
       "opt": [
        "der Aufwand für die Hausarbeit zu groß wäre.",
        "Lehrkräfte grundsätzlich nicht befragt werden dürfen.",
        "die Ergebnisse für die Bachelorarbeit verloren gingen."
       ],
       "loesung": 0,
       "stelle": "kostet mehr Zeit, als Sie haben",
       "erklaerung": "Es geht um den Zeitaufwand; die Idee selbst findet sie gut."
      },
      {
       "ort": "Gespräch — Abschnitt 8",
       "zeilen": [
        {
         "wer": "Mann",
         "text": "Verstehe. Dann noch eine Frage zum Abgabetermin. Ich habe im März ein Praktikum und würde gern um eine Verlängerung bitten."
        },
        {
         "wer": "Frau",
         "text": "Grundsätzlich ist eine Verlängerung um zwei Wochen möglich, aber nicht wegen eines Praktikums, das man ja einplanen kann. Dafür bräuchte es Krankheit oder einen vergleichbaren Grund. Ich würde Ihnen eher raten, die Arbeit vor dem Praktikum fertigzustellen. Sie wissen ja, wie viel Zeit am Ende für das Korrekturlesen draufgeht."
        }
       ],
       "frage": "Eine Verlängerung bekommt der Student nicht, weil …",
       "opt": [
        "Verlängerungen in diesem Seminar grundsätzlich ausgeschlossen sind.",
        "er keine ärztliche Bescheinigung vorgelegt hat.",
        "ein Praktikum als planbarer Grund nicht ausreicht."
       ],
       "loesung": 2,
       "stelle": "aber nicht wegen eines Praktikums, das man ja einplanen kann",
       "erklaerung": "Verlängerungen gibt es, aber nur aus Gründen wie Krankheit, nicht wegen eines Praktikums."
      },
      {
       "ort": "Gespräch — Abschnitt 9",
       "zeilen": [
        {
         "wer": "Mann",
         "text": "Das ist nachvollziehbar. Könnte ich Ihnen die überarbeitete Gliederung noch einmal schicken?"
        },
        {
         "wer": "Frau",
         "text": "Gern, aber bitte nicht nur die Gliederung, sondern auch Ihre Fragestellung in einem Satz und eine halbe Seite dazu, wie Sie vorgehen wollen. An einer Gliederung allein sehe ich nicht, ob die Arbeit trägt. Schicken Sie mir alles bis spätestens Ende des Monats, dann kann ich Ihnen vor den Ferien noch antworten."
        }
       ],
       "frage": "Mit der überarbeiteten Gliederung soll der Student auch …",
       "opt": [
        "eine halbe Seite aus dem Hauptteil schicken.",
        "seine Fragestellung und sein geplantes Vorgehen schicken.",
        "eine Liste der geplanten Quellen schicken."
       ],
       "loesung": 1,
       "stelle": "auch Ihre Fragestellung in einem Satz und eine halbe Seite dazu",
       "erklaerung": "Die halbe Seite beschreibt das Vorgehen, nicht einen Teil des Hauptteils."
      },
      {
       "ort": "Gespräch — Abschnitt 10",
       "zeilen": [
        {
         "wer": "Frau",
         "text": "Und noch ein Tipp zum Schluss: Schreiben Sie die Einleitung zuletzt. Viele beginnen damit und versprechen dann Dinge, die der Hauptteil gar nicht einlöst."
        },
        {
         "wer": "Mann",
         "text": "Das ist mir bei meiner letzten Arbeit tatsächlich passiert. Danke, das hilft mir sehr."
        }
       ],
       "frage": "Die Einleitung sollte man nach Ansicht der Professorin …",
       "opt": [
        "als Erstes schreiben, um die Richtung festzulegen.",
        "erst schreiben, wenn der Hauptteil fertig ist.",
        "möglichst kurz halten und keine Versprechen machen."
       ],
       "loesung": 1,
       "stelle": "Schreiben Sie die Einleitung zuletzt",
       "erklaerung": "Wer mit der Einleitung beginnt, verspricht oft, was der Hauptteil nicht einlöst."
      }
     ]
    }
   ]
  },
  {
   "nr": 3,
   "art": "vortrag",
   "name": "Hören: Vortrag mitschreiben",
   "kurz": "Ein Vortrag, ein Handzettel mit zehn Lücken — EINMAL hören",
   "was": "Du hörst einen Vortrag in Abschnitten und ergänzt den Handzettel mit Notizen — so, dass jemand, der nicht da war, sie versteht. Stichworte reichen, Rechtschreibung zählt nicht.",
   "tipp": "Lies vor jedem Abschnitt, was auf dem Handzettel fehlt. Notiere nur die Kerninformation — und schreib Zahlen ruhig als Ziffern.",
   "zeichen": "🎓",
   "farbe": "rot",
   "punkte": 10,
   "mal": 1,
   "runden": [
    {
     "id": "c1c1h3s1",
     "titel": "Ringvorlesung: Lichtverschmutzung – wenn die Nacht verschwindet",
     "aufgaben": [
      {
       "ort": "Vortrag — Abschnitt 1",
       "wer": "Frau",
       "text": "Guten Abend, meine Damen und Herren, und herzlich willkommen zur heutigen Sitzung unserer Ringvorlesung zum Thema Umwelt und Gesellschaft. Ich möchte heute über ein Problem sprechen, das lange unterschätzt wurde, weil es auf den ersten Blick gar nicht wie Umweltverschmutzung aussieht. Gemeint ist die sogenannte Lichtverschmutzung. Bevor wir einsteigen, eine kurze Begriffsklärung, denn der Ausdruck wird oft missverstanden. Unter Lichtverschmutzung verstehen wir künstliches Licht, das dorthin fällt, wo es eigentlich gar nicht gebraucht wird, also etwa in den Himmel, in Schlafzimmer oder in Naturräume. Es geht also nicht darum, Beleuchtung grundsätzlich zu verteufeln. Licht hat eine wichtige Funktion für Sicherheit und Orientierung. Problematisch wird es erst, wenn es ungezielt, zu hell oder zur falschen Zeit eingesetzt wird.",
       "notiz": {
        "titel": "Handzettel: Folie 1 — Einleitung und Begriff",
        "zeilen": [
         "Thema: unterschätztes Umweltproblem",
         "Licht an sich nicht schlecht: Sicherheit, Orientierung"
        ],
        "feld": "Definition Lichtverschmutzung:",
        "frei": true,
        "muster": "künstliches Licht, wo es nicht gebraucht wird",
        "loesungen": [
         "künstliches Licht, wo es nicht gebraucht wird",
         "Licht an Orten, wo es nicht gebraucht wird",
         "unnötiges künstliches Licht",
         "Licht, wo es nicht hingehört"
        ]
       },
       "stelle": "künstliches Licht, das dorthin fällt, wo es eigentlich gar nicht gebraucht wird",
       "erklaerung": "Die Rednerin definiert den Begriff ausdrücklich; die Beispiele Himmel, Schlafzimmer, Naturräume sind nur Ergänzungen.",
       "frage": "Ergänze deine Notiz auf dem Handzettel."
      },
      {
       "ort": "Vortrag — Abschnitt 2",
       "wer": "Frau",
       "text": "Wie groß ist das Problem eigentlich? Lange Zeit stützte man sich vor allem auf Satellitenaufnahmen. Diese Bilder haben jedoch einen entscheidenden Nachteil: Die Sensoren erfassen bestimmte Lichtfarben kaum und unterschätzen daher die tatsächliche Helligkeit. Aufschlussreicher ist ein Projekt, an dem sich über mehrere Jahre hinweg tausende Freiwillige beteiligt haben. Sie haben in klaren Nächten mit bloßem Auge gezählt, wie viele Sterne sie noch erkennen können. Das Ergebnis hat selbst uns Fachleute überrascht. Der Nachthimmel ist demnach jedes Jahr um etwa sieben Prozent heller geworden. Das klingt zunächst wenig, bedeutet aber, dass sich die Helligkeit innerhalb von rund zehn Jahren fast verdoppelt. Ein Kind, das heute geboren wird, sieht an seinem achtzehnten Geburtstag an demselben Ort womöglich nur noch ein Drittel der Sterne.",
       "notiz": {
        "titel": "Handzettel: Folie 2 — Ausmaß des Problems",
        "zeilen": [
         "Satellitendaten unterschätzen Helligkeit",
         "Freiwillige zählen Sterne mit bloßem Auge"
        ],
        "feld": "Zunahme der Himmelshelligkeit pro Jahr:",
        "frei": true,
        "muster": "etwa sieben Prozent",
        "loesungen": [
         "etwa sieben Prozent",
         "sieben Prozent",
         "7 %",
         "7 Prozent",
         "ca. 7 %"
        ]
       },
       "stelle": "jedes Jahr um etwa sieben Prozent heller geworden",
       "erklaerung": "Gefragt ist die jährliche Zunahme; „zehn Jahre\" und „ein Drittel der Sterne\" sind abgeleitete Folgen.",
       "frage": "Ergänze deine Notiz auf dem Handzettel."
      },
      {
       "ort": "Vortrag — Abschnitt 3",
       "wer": "Frau",
       "text": "Nun stellt sich die Frage nach den Ursachen. Man könnte vermuten, dass einfach mehr gebaut wird und deshalb mehr Lampen leuchten. Das spielt zwar eine Rolle, erklärt den Anstieg aber nur zum Teil. Als Hauptursache gilt inzwischen ausgerechnet eine Technik, die eigentlich zum Umweltschutz beitragen sollte, nämlich die Umstellung auf Leuchtdioden. Leuchtdioden verbrauchen deutlich weniger Strom als herkömmliche Lampen. Genau deshalb ist Licht so billig geworden, dass Kommunen und Unternehmen heute Flächen beleuchten, die sie früher im Dunkeln gelassen hätten. Fachleute sprechen hier von einem Rebound-Effekt: Die Einsparung wird durch zusätzlichen Verbrauch wieder aufgezehrt. Hinzu kommt, dass viele der neuen Lampen ein bläulich-weißes Licht abgeben, das in der Atmosphäre besonders stark gestreut wird und den Himmel stärker aufhellt.",
       "notiz": {
        "titel": "Handzettel: Folie 3 — Ursachen",
        "zeilen": [
         "mehr Bebauung: nur Teilerklärung",
         "Rebound-Effekt: Licht billig → mehr Flächen beleuchtet"
        ],
        "feld": "Hauptursache:",
        "frei": true,
        "muster": "Umstellung auf LED / Leuchtdioden",
        "loesungen": [
         "Umstellung auf LED",
         "Umstellung auf Leuchtdioden",
         "LEDs",
         "Leuchtdioden",
         "billige LED-Beleuchtung"
        ]
       },
       "stelle": "die Umstellung auf Leuchtdioden",
       "erklaerung": "Mehr Bebauung erklärt den Anstieg „nur zum Teil\"; als Hauptursache werden ausdrücklich die Leuchtdioden genannt.",
       "frage": "Ergänze deine Notiz auf dem Handzettel."
      },
      {
       "ort": "Vortrag — Abschnitt 4",
       "wer": "Frau",
       "text": "Kommen wir zu den ökologischen Folgen und beginnen mit den Insekten. Viele nachtaktive Insekten orientieren sich am Mond. Eine künstliche Lichtquelle in Bodennähe bringt dieses Navigationssystem durcheinander. Die Tiere umkreisen die Lampe, bis sie vor Erschöpfung sterben oder von Fressfeinden erbeutet werden. Eine Arbeitsgruppe der Universität Wellheim hat das über zwei Sommer hinweg systematisch untersucht. Nach ihren Berechnungen sterben an einer einzigen Straßenlaterne in einer Sommernacht durchschnittlich rund hundertfünfzig Insekten. Hochgerechnet auf alle Laternen eines Landes ergibt das eine Zahl, die man sich kaum vorstellen kann. Natürlich ist künstliches Licht nicht der einzige Grund für das Insektensterben, die intensive Landwirtschaft spielt eine mindestens ebenso große Rolle. Aber anders als die Landwirtschaft ließe sich das Licht vergleichsweise schnell verändern.",
       "notiz": {
        "titel": "Handzettel: Folie 4 — Folgen für Insekten",
        "zeilen": [
         "Insekten umkreisen Lampen bis zur Erschöpfung",
         "Studie Universität Wellheim"
        ],
        "feld": "Tote Insekten pro Laterne und Sommernacht:",
        "frei": true,
        "muster": "rund hundertfünfzig Insekten pro Nacht",
        "loesungen": [
         "rund hundertfünfzig",
         "hundertfünfzig",
         "150",
         "ca. 150",
         "etwa 150 Insekten"
        ]
       },
       "stelle": "durchschnittlich rund hundertfünfzig Insekten",
       "erklaerung": "Die Zahl bezieht sich auf eine einzige Laterne in einer Sommernacht; „zwei Sommer\" ist nur die Studiendauer.",
       "frage": "Ergänze deine Notiz auf dem Handzettel."
      },
      {
       "ort": "Vortrag — Abschnitt 5",
       "wer": "Frau",
       "text": "Ein zweites Beispiel betrifft die Zugvögel. Viele Arten, die wir für Tagvögel halten, ziehen tatsächlich nachts, weil die Luft dann ruhiger ist und weniger Fressfeinde unterwegs sind. Für ihre Orientierung nutzen sie unter anderem das Magnetfeld der Erde, vor allem aber den Sternenhimmel. Hell erleuchtete Städte überstrahlen diese Orientierungspunkte. Die Vögel werden vom Licht angezogen, kreisen über den Gebäuden, verbrauchen dabei wertvolle Energiereserven und prallen nicht selten gegen beleuchtete Glasfassaden. In der Hafenstadt Kellmar hat man deshalb einen interessanten Versuch gemacht: In den Nächten der Hauptzugzeit wurde die Fassadenbeleuchtung zweier Bürotürme abgeschaltet. Die Zahl der tot aufgefundenen Vögel ging daraufhin drastisch zurück.",
       "notiz": {
        "titel": "Handzettel: Folie 5 — Folgen für Zugvögel",
        "zeilen": [
         "viele Arten ziehen nachts",
         "Gefahr: Energieverlust, Kollision mit Glasfassaden"
        ],
        "feld": "Wichtigste Orientierungshilfe der Zugvögel:",
        "frei": true,
        "muster": "vor allem am Sternenhimmel",
        "loesungen": [
         "Sternenhimmel",
         "Sterne",
         "der Sternenhimmel",
         "an den Sternen"
        ]
       },
       "stelle": "vor allem aber den Sternenhimmel",
       "erklaerung": "Das Magnetfeld wird nur „unter anderem\" genannt; „vor allem\" markiert den Sternenhimmel als wichtigste Hilfe.",
       "frage": "Ergänze deine Notiz auf dem Handzettel."
      },
      {
       "ort": "Vortrag — Abschnitt 6",
       "wer": "Frau",
       "text": "Wenden wir uns nun dem Menschen zu. Unser Körper besitzt eine innere Uhr, die sich am Wechsel von Hell und Dunkel ausrichtet. Eine zentrale Rolle spielt dabei das Hormon Melatonin, das häufig auch als Schlafhormon bezeichnet wird. Es wird bei Dunkelheit ausgeschüttet und signalisiert dem Körper, dass es Zeit zum Schlafen ist. Künstliches Licht am Abend, und zwar insbesondere Licht mit hohem Blauanteil, unterdrückt die Ausschüttung dieses Hormons. Die Folge sind Einschlafprobleme und ein weniger erholsamer Schlaf. Ob dauerhafte nächtliche Beleuchtung darüber hinaus das Risiko für bestimmte Erkrankungen erhöht, wird derzeit intensiv erforscht. Die Datenlage ist hier noch nicht eindeutig, weshalb ich mit voreiligen Schlüssen vorsichtig wäre. Unstrittig ist jedoch, dass Straßenlicht, das ins Schlafzimmer fällt, den Schlaf stört.",
       "notiz": {
        "titel": "Handzettel: Folie 6 — Folgen für den Menschen",
        "zeilen": [
         "innere Uhr richtet sich nach Hell und Dunkel",
         "Folge: Einschlafprobleme",
         "Krankheitsrisiko: noch unklar"
        ],
        "feld": "Durch blaues Licht unterdrücktes Hormon:",
        "frei": true,
        "muster": "Melatonin, das sogenannte Schlafhormon",
        "loesungen": [
         "Melatonin",
         "Schlafhormon",
         "Melatonin, Schlafhormon"
        ]
       },
       "stelle": "das Hormon Melatonin",
       "erklaerung": "Melatonin wird bei Dunkelheit ausgeschüttet; abendliches Licht mit Blauanteil unterdrückt es.",
       "frage": "Ergänze deine Notiz auf dem Handzettel."
      },
      {
       "ort": "Vortrag — Abschnitt 7",
       "wer": "Frau",
       "text": "Weniger bekannt ist, dass auch Pflanzen indirekt betroffen sind. Zahlreiche Blütenpflanzen werden nicht nur tagsüber von Bienen, sondern auch nachts von Faltern und anderen Insekten bestäubt. In einem Freilandexperiment haben Forscher Wiesen künstlich beleuchtet und mit unbeleuchteten Vergleichsflächen verglichen. Das Ergebnis war eindeutig: Auf den beleuchteten Flächen gingen die nächtlichen Blütenbesuche um rund ein Drittel zurück. Die betroffenen Pflanzen bildeten in der Folge weniger Früchte und Samen. Bemerkenswert ist, dass auch die Bestäubung am Tag diesen Verlust nicht ausgleichen konnte. Das zeigt, wie eng die Nacht- und die Tagökosysteme miteinander verflochten sind. Wer also nachts Wiesen und Parks beleuchtet, greift unter Umständen in Nahrungsketten ein, deren Bedeutung wir erst allmählich verstehen.",
       "notiz": {
        "titel": "Handzettel: Folie 7 — Folgen für Pflanzen",
        "zeilen": [
         "nächtliche Bestäuber: Falter u. a.",
         "Experiment: beleuchtete vs. dunkle Wiesen",
         "Folge: weniger Früchte und Samen"
        ],
        "feld": "Rückgang der nächtlichen Blütenbesuche:",
        "frei": true,
        "muster": "um rund ein Drittel",
        "loesungen": [
         "um rund ein Drittel",
         "ein Drittel",
         "etwa ein Drittel",
         "1/3",
         "ca. 33 %"
        ]
       },
       "stelle": "gingen die nächtlichen Blütenbesuche um rund ein Drittel zurück",
       "erklaerung": "Die Kernzahl des Experiments ist der Rückgang um ein Drittel; die Tagbestäubung gleicht ihn nicht aus.",
       "frage": "Ergänze deine Notiz auf dem Handzettel."
      },
      {
       "ort": "Vortrag — Abschnitt 8",
       "wer": "Frau",
       "text": "Was lässt sich nun konkret tun? Die gute Nachricht lautet: Wir müssen nicht im Dunkeln sitzen. In der Fachdiskussion haben sich drei einfache Prinzipien durchgesetzt. Erstens sollte Licht nur dorthin gelenkt werden, wo es tatsächlich gebraucht wird, also nach unten auf Gehweg und Straße und nicht seitlich oder nach oben. Zweitens sollte Licht nur dann leuchten, wenn es benötigt wird. Zeitschaltungen und Bewegungsmelder sind dafür längst ausgereift. Drittens schließlich kommt es auf die Lichtfarbe an: Empfohlen wird warmweißes oder bernsteinfarbenes Licht mit möglichst geringem Blauanteil. Dieses Licht wird weniger gestreut, lockt weniger Insekten an und stört den Schlaf weniger. Keines dieser Prinzipien erfordert teure Spezialtechnik, es braucht lediglich den politischen Willen, sie bei Neuanschaffungen konsequent anzuwenden.",
       "notiz": {
        "titel": "Handzettel: Folie 8 — Gegenmaßnahmen",
        "zeilen": [
         "Prinzip 1: Licht nur dorthin, wo nötig – nach unten",
         "Prinzip 2: Licht nur dann, wenn nötig – Zeitschaltung, Bewegungsmelder"
        ],
        "feld": "Prinzip 3:",
        "frei": true,
        "muster": "warmweißes Licht, wenig Blauanteil",
        "loesungen": [
         "warmweißes Licht",
         "warme Lichtfarbe",
         "wenig Blauanteil",
         "warmweißes oder bernsteinfarbenes Licht",
         "richtige Lichtfarbe: warm"
        ]
       },
       "stelle": "Empfohlen wird warmweißes oder bernsteinfarbenes Licht",
       "erklaerung": "Das dritte Prinzip betrifft die Lichtfarbe: warm statt bläulich, weil es weniger streut und weniger stört.",
       "frage": "Ergänze deine Notiz auf dem Handzettel."
      },
      {
       "ort": "Vortrag — Abschnitt 9",
       "wer": "Frau",
       "text": "Dass das funktioniert, zeigt das Beispiel der Gemeinde Altfelden, einer Kleinstadt mit etwa zwölftausend Einwohnern. Dort hat man vor einigen Jahren die gesamte Straßenbeleuchtung erneuert. Die neuen Lampen strahlen ausschließlich nach unten, haben eine warme Lichtfarbe und werden nach Mitternacht auf ein Fünftel ihrer Leistung gedimmt. In Wohnstraßen schalten sie sich erst wieder hoch, wenn ein Bewegungsmelder anschlägt. Viele Bürger befürchteten anfangs, dass Einbrüche zunehmen würden. Diese Sorge hat sich nicht bestätigt, die Polizeistatistik zeigt keinerlei Anstieg. Das wirtschaftliche Ergebnis kann sich dagegen sehen lassen: Die Stromkosten für die Straßenbeleuchtung haben sich fast halbiert. Inzwischen kommen Delegationen aus anderen Gemeinden nach Altfelden, um sich das Konzept erklären zu lassen.",
       "notiz": {
        "titel": "Handzettel: Folie 9 — Fallbeispiel Altfelden",
        "zeilen": [
         "Lampen nach unten, warmes Licht",
         "nach Mitternacht gedimmt, Bewegungsmelder",
         "Einbrüche: kein Anstieg"
        ],
        "feld": "Ergebnis Stromkosten:",
        "frei": true,
        "muster": "Stromkosten fast halbiert",
        "loesungen": [
         "fast halbiert",
         "halbiert",
         "fast um die Hälfte gesunken",
         "minus fünfzig Prozent",
         "-50 %"
        ]
       },
       "stelle": "Die Stromkosten für die Straßenbeleuchtung haben sich fast halbiert",
       "erklaerung": "„Ein Fünftel\" betrifft die gedimmte Leistung, nicht die Kosten; die Kosten haben sich fast halbiert.",
       "frage": "Ergänze deine Notiz auf dem Handzettel."
      },
      {
       "ort": "Vortrag — Abschnitt 10",
       "wer": "Frau",
       "text": "Damit komme ich zum Schluss. Ich habe Ihnen gezeigt, dass künstliches Licht Insekten, Vögel, Pflanzen und auch uns Menschen beeinträchtigt. Das klingt zunächst nach einer weiteren düsteren Umweltbotschaft. Ich möchte Sie aber mit einem eher optimistischen Gedanken entlassen. Bei den meisten Umweltproblemen wirken unsere Fehler noch Jahrzehnte nach, denken Sie an Plastik im Meer oder an Schadstoffe im Boden. Bei der Lichtverschmutzung ist das anders. Sie ist das vermutlich am leichtesten umkehrbare Umweltproblem überhaupt, denn in dem Moment, in dem eine Lampe ausgeschaltet wird, verschwindet die Verschmutzung vollständig. Es bleibt nichts zurück. Insofern liegt die Lösung buchstäblich auf der Hand, oder besser gesagt: am Lichtschalter. Ich danke Ihnen für Ihre Aufmerksamkeit und freue mich auf Ihre Fragen.",
       "notiz": {
        "titel": "Handzettel: Folie 10 — Fazit",
        "zeilen": [
         "betroffen: Insekten, Vögel, Pflanzen, Menschen",
         "Gegensatz: Plastik, Schadstoffe wirken lange nach"
        ],
        "feld": "Schlussfolgerung:",
        "frei": true,
        "muster": "am leichtesten umkehrbares Umweltproblem",
        "loesungen": [
         "am leichtesten umkehrbares Umweltproblem",
         "leicht umkehrbar",
         "Licht aus – Problem weg",
         "sofort umkehrbar"
        ]
       },
       "stelle": "am leichtesten umkehrbare Umweltproblem überhaupt",
       "erklaerung": "Das optimistische Fazit: Anders als Plastik verschwindet Lichtverschmutzung sofort, wenn das Licht aus ist.",
       "frage": "Ergänze deine Notiz auf dem Handzettel."
      }
     ]
    },
    {
     "id": "c1c1h3s2",
     "titel": "Einführung in die Verhaltensökonomie",
     "aufgaben": [
      {
       "ort": "Vortrag — Abschnitt 1",
       "wer": "Mann",
       "text": "Guten Morgen zusammen, und willkommen zur ersten Sitzung unserer Einführungsveranstaltung in die Verhaltensökonomie. Bevor wir uns mit diesem noch relativ jungen Forschungsfeld beschäftigen, müssen wir uns kurz vergegenwärtigen, wogegen es sich eigentlich abgrenzt. Die klassische Wirtschaftswissenschaft arbeitet seit jeher mit einem bestimmten Menschenbild, dem sogenannten Homo oeconomicus. Dahinter steckt die Annahme, dass Menschen vollständig rational entscheiden: Sie kennen alle relevanten Informationen, wägen Kosten und Nutzen sorgfältig ab und wählen stets die Option, die ihren eigenen Nutzen maximiert. Diese Annahme ist natürlich eine Vereinfachung, und das wussten auch die klassischen Ökonomen. Die Verhaltensökonomie geht aber einen Schritt weiter. Sie untersucht, wo und warum Menschen systematisch von diesem Modell abweichen, und zwar nicht zufällig, sondern auf vorhersagbare Weise.",
       "notiz": {
        "titel": "Handzettel: Folie 1 — Einleitung: das klassische Menschenbild",
        "zeilen": [
         "Menschenbild: Homo oeconomicus",
         "Verhaltensökonomie: systematische, vorhersagbare Abweichungen"
        ],
        "feld": "Grundannahme der klassischen Ökonomie:",
        "frei": true,
        "muster": "Menschen entscheiden vollständig rational",
        "loesungen": [
         "Menschen entscheiden vollständig rational",
         "vollständig rationale Entscheidungen",
         "Mensch ist rational",
         "rationales Entscheiden, Nutzenmaximierung"
        ]
       },
       "stelle": "dass Menschen vollständig rational entscheiden",
       "erklaerung": "Hinter dem Homo oeconomicus steht die Annahme vollständig rationaler Entscheidungen.",
       "frage": "Ergänze deine Notiz auf dem Handzettel."
      },
      {
       "ort": "Vortrag — Abschnitt 2",
       "wer": "Mann",
       "text": "Um diese Abweichungen zu verstehen, hat sich ein Modell bewährt, das zwischen zwei Arten des Denkens unterscheidet. Man spricht vereinfachend von System eins und System zwei. System eins arbeitet schnell, automatisch und intuitiv. Es erkennt Gesichter, versteht einfache Sätze und lässt uns im Straßenverkehr reagieren, ohne nachzudenken. System zwei dagegen arbeitet langsam und ist anstrengend. Wir schalten es ein, wenn wir eine komplizierte Rechenaufgabe lösen oder einen Mietvertrag prüfen. Das Problem ist nun, dass System zwei bequem ist, wenn ich das so salopp sagen darf. Es überlässt die meisten Entscheidungen dem schnellen System eins, das zwar effizient ist, aber auf Faustregeln zurückgreift. Und genau diese Faustregeln führen in bestimmten Situationen zu systematischen Fehlern, die wir im Folgenden genauer betrachten werden.",
       "notiz": {
        "titel": "Handzettel: Folie 2 — Zwei Denksysteme",
        "zeilen": [
         "System eins: schnell, automatisch, intuitiv",
         "Problem: System eins nutzt Faustregeln → Fehler"
        ],
        "feld": "System zwei:",
        "frei": true,
        "muster": "langsam, anstrengend, überlegt",
        "loesungen": [
         "langsam, anstrengend",
         "langsam und anstrengend",
         "langsam, überlegt",
         "langsames Denken"
        ]
       },
       "stelle": "System zwei dagegen arbeitet langsam und ist anstrengend",
       "erklaerung": "„dagegen\" stellt System zwei dem schnellen System eins gegenüber: langsam und anstrengend.",
       "frage": "Ergänze deine Notiz auf dem Handzettel."
      },
      {
       "ort": "Vortrag — Abschnitt 3",
       "wer": "Mann",
       "text": "Der vielleicht bekannteste dieser Fehler ist die sogenannte Verlustaversion. Stellen Sie sich vor, ich biete Ihnen eine Wette an. Ich werfe eine Münze. Bei Kopf gewinnen Sie hundert Euro, bei Zahl verlieren Sie hundert Euro. Rein rechnerisch ist diese Wette fair. Trotzdem lehnen die allermeisten Menschen sie ab. Erst wenn der mögliche Gewinn auf etwa zweihundert Euro steigt, sind viele bereit mitzuspielen. Daraus lässt sich ableiten, dass Verluste psychologisch ungefähr doppelt so schwer wiegen wie gleich große Gewinne. Diese Asymmetrie erklärt eine ganze Reihe von Alltagsphänomenen. Anleger halten zum Beispiel an Aktien fest, die stark gefallen sind, weil ein Verkauf den Verlust endgültig machen würde. Und Unternehmen wissen sehr genau, warum sie bei Probeabos erst nach einigen Wochen Geld verlangen: Wer etwas einmal besitzt, gibt es ungern wieder her.",
       "notiz": {
        "titel": "Handzettel: Folie 3 — Verlustaversion",
        "zeilen": [
         "Münzwurf-Wette: fair, aber meist abgelehnt",
         "Beispiel: Anleger behalten gefallene Aktien"
        ],
        "feld": "Gewicht von Verlusten im Vergleich zu Gewinnen:",
        "frei": true,
        "muster": "etwa doppelt so schwer",
        "loesungen": [
         "etwa doppelt so schwer",
         "doppelt so schwer",
         "doppelt so stark",
         "zweimal so stark",
         "x2"
        ]
       },
       "stelle": "Verluste psychologisch ungefähr doppelt so schwer wiegen wie gleich große Gewinne",
       "erklaerung": "Die Schlussfolgerung aus der Wette: Verluste wiegen etwa doppelt so schwer; die Eurobeträge sind nur das Beispiel.",
       "frage": "Ergänze deine Notiz auf dem Handzettel."
      },
      {
       "ort": "Vortrag — Abschnitt 4",
       "wer": "Mann",
       "text": "Ein zweiter wichtiger Effekt ist der Ankereffekt. Er besagt, dass eine zuvor genannte Zahl unsere Schätzungen beeinflusst, selbst wenn sie offensichtlich nichts mit der Frage zu tun hat. In einem Experiment an unserem Lehrstuhl haben wir Studenten zunächst ein Glücksrad drehen lassen, das entweder bei einer niedrigen oder bei einer hohen Zahl stehen blieb. Anschließend sollten sie schätzen, wie viele Brücken es in ihrer Universitätsstadt gibt. Das Glücksrad war für diese Frage selbstverständlich völlig bedeutungslos, und das wussten die Teilnehmer auch. Dennoch lagen die Schätzungen der Gruppe mit der hohen Zahl im Durchschnitt um gut die Hälfte höher als die der anderen Gruppe. Im Alltag begegnet uns dieser Effekt ständig, etwa wenn ein Möbelhaus neben das Angebot einen durchgestrichenen, sehr hohen Ursprungspreis setzt.",
       "notiz": {
        "titel": "Handzettel: Folie 4 — Ankereffekt",
        "zeilen": [
         "Definition: irrelevante Zahl beeinflusst Schätzung",
         "Experiment: Glücksrad, dann Brücken schätzen",
         "Alltag: durchgestrichener Ursprungspreis"
        ],
        "feld": "Ergebnis der Gruppe mit hoher Zahl:",
        "frei": true,
        "muster": "Schätzung gut die Hälfte höher",
        "loesungen": [
         "gut die Hälfte höher",
         "um die Hälfte höher",
         "über fünfzig Prozent höher",
         "+50 %",
         "deutlich höher, gut 50 %"
        ]
       },
       "stelle": "im Durchschnitt um gut die Hälfte höher",
       "erklaerung": "Obwohl das Glücksrad bedeutungslos war, lagen die Schätzungen mit hohem Anker um gut die Hälfte höher.",
       "frage": "Ergänze deine Notiz auf dem Handzettel."
      },
      {
       "ort": "Vortrag — Abschnitt 5",
       "wer": "Mann",
       "text": "Kommen wir zu einem dritten Phänomen, das in der Fachliteratur als Gegenwartspräferenz bezeichnet wird. Menschen bewerten Belohnungen, die sie sofort erhalten, unverhältnismäßig hoch im Vergleich zu Belohnungen in der Zukunft. Das ist an sich nicht irrational, denn die Zukunft ist ungewiss. Problematisch wird es, weil wir dabei inkonsequent sind. Fragt man Menschen, ob sie in einem Jahr lieber hundert Euro oder in einem Jahr und einer Woche hundertzehn Euro hätten, wählen die meisten die spätere, höhere Summe. Geht es aber um heute oder nächste Woche, greifen viele zum sofortigen Betrag. Die gesellschaftlich wohl gravierendste Folge dieses Musters ist, dass viele Menschen zu wenig für das Alter zurücklegen. Man nimmt sich fest vor, ab dem nächsten Monat zu sparen, und schiebt es dann immer wieder auf.",
       "notiz": {
        "titel": "Handzettel: Folie 5 — Gegenwartspräferenz",
        "zeilen": [
         "sofortige Belohnung wird überbewertet",
         "Problem: inkonsequent – heute vs. später"
        ],
        "feld": "Gravierendste gesellschaftliche Folge:",
        "frei": true,
        "muster": "zu wenig Altersvorsorge",
        "loesungen": [
         "zu wenig Altersvorsorge",
         "zu wenig fürs Alter sparen",
         "Sparen wird aufgeschoben",
         "mangelnde Altersvorsorge"
        ]
       },
       "stelle": "dass viele Menschen zu wenig für das Alter zurücklegen",
       "erklaerung": "Ausdrücklich als „gravierendste Folge\" genannt: zu geringes Sparen für das Alter.",
       "frage": "Ergänze deine Notiz auf dem Handzettel."
      },
      {
       "ort": "Vortrag — Abschnitt 6",
       "wer": "Mann",
       "text": "Wie kann man darauf reagieren? Hier kommen die sogenannten Standardoptionen ins Spiel. Eine Standardoption ist das, was passiert, wenn jemand nichts tut. Ein mittelständisches Unternehmen in Norddeutschland hat das bei seiner betrieblichen Altersvorsorge eindrucksvoll vorgeführt. Früher mussten sich neue Mitarbeiter aktiv für das Sparprogramm anmelden. Nur etwa ein Drittel tat das. Dann drehte man das Verfahren um: Alle wurden automatisch angemeldet, konnten aber jederzeit mit einem einfachen Formular wieder austreten. Niemand wurde also zu etwas gezwungen. Trotzdem stieg die Teilnahme auf neun von zehn Beschäftigten. Das Bemerkenswerte daran ist, dass sich weder die Kosten noch die Leistungen des Programms verändert hatten. Allein die Frage, was ohne eigenes Zutun geschieht, hat das Verhalten grundlegend verändert.",
       "notiz": {
        "titel": "Handzettel: Folie 6 — Standardoptionen",
        "zeilen": [
         "Standardoption = was passiert, wenn man nichts tut",
         "vorher: aktive Anmeldung → ein Drittel nimmt teil",
         "nachher: automatische Anmeldung, Austritt möglich"
        ],
        "feld": "Teilnahme nach der Umstellung:",
        "frei": true,
        "muster": "neun von zehn Beschäftigten",
        "loesungen": [
         "neun von zehn",
         "neun von zehn Beschäftigten",
         "neunzig Prozent",
         "90 %",
         "9 von 10"
        ]
       },
       "stelle": "stieg die Teilnahme auf neun von zehn Beschäftigten",
       "erklaerung": "Ein Drittel ist der Wert vorher; nach der automatischen Anmeldung nahmen neun von zehn teil.",
       "frage": "Ergänze deine Notiz auf dem Handzettel."
      },
      {
       "ort": "Vortrag — Abschnitt 7",
       "wer": "Mann",
       "text": "Dieses Beispiel führt uns direkt zum Konzept des sogenannten Nudging, auf Deutsch etwa Anstupsen. Gemeint ist eine gezielte Gestaltung der Entscheidungssituation, die Menschen in eine bestimmte Richtung lenkt, ohne ihnen Optionen zu verbieten und ohne finanzielle Anreize zu verändern. Ein klassisches Anwendungsfeld sind Kantinen und Mensen. In der Mensa einer Partneruniversität hat man Folgendes ausprobiert: Obst und Salat wurden direkt an der Kasse auf Augenhöhe platziert, während Süßigkeiten in ein unteres Regal wanderten. Die Preise blieben gleich, das Angebot ebenso. Innerhalb weniger Wochen stieg der Absatz von Obst deutlich an. Wichtig ist mir an dieser Stelle der Unterschied zu einem Verbot: Wer Schokolade möchte, bekommt sie weiterhin, er muss sich lediglich ein wenig bücken.",
       "notiz": {
        "titel": "Handzettel: Folie 7 — Nudging",
        "zeilen": [
         "Nudging = Entscheidungssituation gestalten",
         "kein Verbot, keine finanziellen Anreize"
        ],
        "feld": "Beispiel Mensa:",
        "frei": true,
        "muster": "Obst und Salat auf Augenhöhe an der Kasse",
        "loesungen": [
         "Obst auf Augenhöhe",
         "Obst und Salat auf Augenhöhe an der Kasse",
         "Obst an der Kasse, Süßigkeiten unten",
         "Süßigkeiten ins untere Regal"
        ]
       },
       "stelle": "Obst und Salat wurden direkt an der Kasse auf Augenhöhe platziert",
       "erklaerung": "Das Beispiel zeigt Nudging: Nur die Anordnung ändert sich, Preise und Angebot bleiben gleich.",
       "frage": "Ergänze deine Notiz auf dem Handzettel."
      },
      {
       "ort": "Vortrag — Abschnitt 8",
       "wer": "Mann",
       "text": "Ein weiteres Instrument nutzt soziale Normen, also unsere Neigung, uns an dem zu orientieren, was andere tun. Ein Energieversorger hat seinen Kunden auf der Stromrechnung mitgeteilt, wie hoch ihr Verbrauch im Vergleich zu ähnlichen Haushalten in der Nachbarschaft ist. Haushalte mit niedrigem Verbrauch erhielten zusätzlich ein kleines lächelndes Symbol. Allein diese Information führte dazu, dass der Stromverbrauch im Durchschnitt um etwa zwei Prozent sank. Nun werden Sie vielleicht sagen, zwei Prozent seien nicht viel. Bedenken Sie aber, dass diese Maßnahme so gut wie nichts kostet, denn die Rechnung wird ohnehin verschickt. Gemessen an den Kosten ist sie damit wirksamer als viele teure Förderprogramme. Interessant war übrigens, dass das Symbol verhinderte, dass sparsame Haushalte ihren Verbrauch nach oben anpassten.",
       "notiz": {
        "titel": "Handzettel: Folie 8 — Soziale Normen",
        "zeilen": [
         "Stromrechnung mit Nachbarschaftsvergleich",
         "Smiley für sparsame Haushalte",
         "Vorteil: fast kostenlos"
        ],
        "feld": "Wirkung auf den Stromverbrauch:",
        "frei": true,
        "muster": "Rückgang um etwa zwei Prozent",
        "loesungen": [
         "etwa zwei Prozent weniger",
         "minus zwei Prozent",
         "zwei Prozent",
         "2 %",
         "-2 %"
        ]
       },
       "stelle": "der Stromverbrauch im Durchschnitt um etwa zwei Prozent sank",
       "erklaerung": "Der Effekt ist klein, zwei Prozent, aber im Verhältnis zu den Kosten sehr wirksam.",
       "frage": "Ergänze deine Notiz auf dem Handzettel."
      },
      {
       "ort": "Vortrag — Abschnitt 9",
       "wer": "Mann",
       "text": "Ich möchte Ihnen die Verhaltensökonomie allerdings nicht als reine Erfolgsgeschichte präsentieren. Es gibt zwei gewichtige Kritikpunkte. Der erste ist ethischer Natur. Kritiker werfen dem Nudging vor, es sei eine Form der Bevormundung, zumal die Betroffenen oft gar nicht merken, dass sie gelenkt werden. Wer entscheidet eigentlich, in welche Richtung gestupst wird? Der zweite Einwand ist methodischer Art und wiegt meines Erachtens schwerer. Als man in den vergangenen Jahren versuchte, bekannte Experimente mit größeren Stichproben zu wiederholen, zeigte sich, dass viele Effekte deutlich kleiner sind als ursprünglich angenommen. Manche ließen sich überhaupt nicht reproduzieren. Das bedeutet nicht, dass das Feld wertlos wäre. Es bedeutet aber, dass wir einzelnen spektakulären Studien mit gesunder Skepsis begegnen sollten.",
       "notiz": {
        "titel": "Handzettel: Folie 9 — Kritik",
        "zeilen": [
         "Kritik eins, ethisch: Bevormundung, Lenkung unbemerkt"
        ],
        "feld": "Kritik zwei, methodisch:",
        "frei": true,
        "muster": "Effekte kleiner als angenommen, teils nicht reproduzierbar",
        "loesungen": [
         "Effekte kleiner als angenommen",
         "Effekte oft nicht reproduzierbar",
         "Wiederholungen zeigen kleinere Effekte",
         "schwer reproduzierbar"
        ]
       },
       "stelle": "dass viele Effekte deutlich kleiner sind als ursprünglich angenommen",
       "erklaerung": "Der methodische Einwand: Bei Wiederholungen mit größeren Stichproben schrumpfen die Effekte.",
       "frage": "Ergänze deine Notiz auf dem Handzettel."
      },
      {
       "ort": "Vortrag — Abschnitt 10",
       "wer": "Mann",
       "text": "Lassen Sie mich zum Abschluss zusammenfassen. Wir haben gesehen, dass Menschen nicht immer rational entscheiden, sondern auf vorhersagbare Weise davon abweichen, etwa durch Verlustaversion, Ankereffekte oder die Bevorzugung der Gegenwart. Daraus haben sich Instrumente wie Standardoptionen und Nudges entwickelt, die zum Teil beachtliche Wirkung zeigen. Bedeutet das nun, dass die klassische Ökonomie ausgedient hat? Ich denke nicht. Mein Fazit lautet vielmehr: Die Verhaltensökonomie ist eine Ergänzung, kein Ersatz der klassischen Wirtschaftswissenschaft. Für viele Fragen, etwa wie Märkte auf Preisänderungen reagieren, liefern die herkömmlichen Modelle weiterhin brauchbare Ergebnisse. Die Verhaltensökonomie hilft uns aber zu verstehen, wo diese Modelle an ihre Grenzen stoßen. In der nächsten Sitzung schauen wir uns dann die Verlustaversion anhand von Daten genauer an.",
       "notiz": {
        "titel": "Handzettel: Folie 10 — Fazit",
        "zeilen": [
         "Abweichungen vorhersagbar",
         "Instrumente: Standardoptionen, Nudges"
        ],
        "feld": "Fazit – Verhältnis zur klassischen Ökonomie:",
        "frei": true,
        "muster": "Ergänzung, kein Ersatz",
        "loesungen": [
         "Ergänzung, kein Ersatz",
         "Ergänzung",
         "ergänzt, ersetzt nicht",
         "kein Ersatz, sondern Ergänzung"
        ]
       },
       "stelle": "eine Ergänzung, kein Ersatz der klassischen Wirtschaftswissenschaft",
       "erklaerung": "Auf die Frage, ob die klassische Ökonomie ausgedient hat, antwortet der Redner: Ergänzung, kein Ersatz.",
       "frage": "Ergänze deine Notiz auf dem Handzettel."
      }
     ]
    },
    {
     "id": "c1c1h3s3",
     "titel": "Geschichte der Stadtplanung: Städte als Antwort auf Krisen",
     "aufgaben": [
      {
       "ort": "Vortrag — Abschnitt 1",
       "wer": "Frau",
       "text": "Meine Damen und Herren, ich freue mich, dass Sie so zahlreich erschienen sind. Unser Thema heute ist die Geschichte der Stadtplanung, und ich möchte Ihnen diese Geschichte nicht als bloße Abfolge von Baustilen erzählen. Stattdessen werde ich eine These vertreten, die sich wie ein roter Faden durch den Vortrag ziehen wird. Sie lautet: Stadtplanung ist im Kern immer eine Antwort auf Krisen gewesen. Neue Leitbilder sind selten aus reiner Freude am Entwerfen entstanden, sondern fast immer dann, wenn die bestehenden Städte ein drängendes Problem nicht mehr lösen konnten, sei es Platzmangel, Krankheit oder Verkehr. Ich werde diese These an mehreren Epochen überprüfen und am Ende einen Ausblick wagen, welche Krise die Planung unserer Städte in den kommenden Jahrzehnten bestimmen dürfte.",
       "notiz": {
        "titel": "Handzettel: Folie 1 — Einleitung und These",
        "zeilen": [
         "nicht: Abfolge von Baustilen",
         "Beispiele: Platzmangel, Krankheit, Verkehr"
        ],
        "feld": "Leitthese:",
        "frei": true,
        "muster": "Stadtplanung = Antwort auf Krisen",
        "loesungen": [
         "Stadtplanung ist Antwort auf Krisen",
         "Antwort auf Krisen",
         "Planung reagiert auf Krisen",
         "Krisen lösen neue Leitbilder aus"
        ]
       },
       "stelle": "Stadtplanung ist im Kern immer eine Antwort auf Krisen gewesen",
       "erklaerung": "Die These wird ausdrücklich angekündigt („Sie lautet\") und zieht sich durch den ganzen Vortrag.",
       "frage": "Ergänze deine Notiz auf dem Handzettel."
      },
      {
       "ort": "Vortrag — Abschnitt 2",
       "wer": "Frau",
       "text": "Beginnen wir im Mittelalter. Wenn Sie heute durch eine gut erhaltene Altstadt spazieren, fallen Ihnen sicherlich die engen, verwinkelten Gassen auf und die Häuser, deren obere Stockwerke manchmal fast über die Straße ragen. Man könnte meinen, die Menschen damals hätten einfach keinen Sinn für Ordnung gehabt. Das trifft aber nicht zu. Der eigentliche Grund für diese Enge war die Stadtmauer. Sie bot Schutz, war aber außerordentlich teuer zu bauen und zu verteidigen. Deshalb wurde die Fläche innerhalb der Mauer so knapp wie möglich bemessen. Jeder Quadratmeter war wertvoll, und wenn die Bevölkerung wuchs, baute man eben in die Höhe oder verdichtete die Hinterhöfe. Geplant im heutigen Sinne war daran wenig, aber die Form der Stadt folgte sehr wohl einer klaren Logik.",
       "notiz": {
        "titel": "Handzettel: Folie 2 — Die mittelalterliche Stadt",
        "zeilen": [
         "enge, verwinkelte Gassen",
         "nicht: fehlender Ordnungssinn",
         "Wachstum: in die Höhe, Hinterhöfe verdichtet"
        ],
        "feld": "Eigentlicher Grund für die Enge:",
        "frei": true,
        "muster": "teure Stadtmauer begrenzte die Fläche",
        "loesungen": [
         "Stadtmauer",
         "die Stadtmauer",
         "Stadtmauer begrenzte Fläche",
         "teure Stadtmauer"
        ]
       },
       "stelle": "Der eigentliche Grund für diese Enge war die Stadtmauer",
       "erklaerung": "Die Rednerin weist die naheliegende Erklärung zurück und nennt die teure Stadtmauer als Grund.",
       "frage": "Ergänze deine Notiz auf dem Handzettel."
      },
      {
       "ort": "Vortrag — Abschnitt 3",
       "wer": "Frau",
       "text": "Einen gewaltigen Umbruch brachte die Industrialisierung im neunzehnten Jahrhundert. Mit den Fabriken kamen die Arbeiter, und zwar in einer Zahl, auf die keine Stadt vorbereitet war. Nehmen wir als Beispiel die Industriestadt Hallberg. Ihre Einwohnerzahl hat sich innerhalb von nur fünfzig Jahren verfünffacht. Um diese Menschen unterzubringen, entstanden die sogenannten Mietskasernen: mehrstöckige Wohnblöcke, oft mit mehreren hintereinander liegenden Hinterhöfen, in die kaum Tageslicht fiel. Nicht selten teilten sich ganze Familien ein einziges Zimmer, und manche vermieteten ihr Bett tagsüber zusätzlich an Schichtarbeiter. Private Bauherren errichteten diese Gebäude, um möglichst hohe Mieten zu erzielen, und die Behörden griffen kaum ein. Das Ergebnis waren Wohnverhältnisse, die wir heute als menschenunwürdig bezeichnen würden.",
       "notiz": {
        "titel": "Handzettel: Folie 3 — Industrialisierung",
        "zeilen": [
         "Beispiel: Industriestadt Hallberg",
         "Mietskasernen mit dunklen Hinterhöfen",
         "Behörden greifen kaum ein"
        ],
        "feld": "Bevölkerungswachstum Hallberg:",
        "frei": true,
        "muster": "in fünfzig Jahren verfünffacht",
        "loesungen": [
         "verfünffacht",
         "in fünfzig Jahren verfünffacht",
         "fünfmal so viele Einwohner",
         "x5 in 50 Jahren"
        ]
       },
       "stelle": "innerhalb von nur fünfzig Jahren verfünffacht",
       "erklaerung": "Die Kernzahl des Beispiels: Verfünffachung der Einwohnerzahl in fünfzig Jahren.",
       "frage": "Ergänze deine Notiz auf dem Handzettel."
      },
      {
       "ort": "Vortrag — Abschnitt 4",
       "wer": "Frau",
       "text": "Was hat schließlich zu einem Umdenken geführt? Moralische Empörung allein reichte nicht aus. Den entscheidenden Anstoß gaben vielmehr die Choleraepidemien, die im neunzehnten Jahrhundert immer wieder durch die Städte zogen. Lange glaubte man, die Krankheit werde durch schlechte Luft übertragen. Erst allmählich setzte sich die Erkenntnis durch, dass verunreinigtes Trinkwasser die Ursache war. Und weil Seuchen keine Rücksicht auf soziale Schichten nehmen, waren plötzlich auch wohlhabende Bürger bedroht. Nun war auf einmal Geld da: Die Städte bauten Kanalisationen, zentrale Wasserversorgungen und erließen Bauordnungen, die Mindestgrößen für Höfe und Fenster vorschrieben. Man kann also mit einer gewissen Zuspitzung sagen, dass die moderne Stadtplanung aus dem Kampf gegen eine Krankheit hervorgegangen ist.",
       "notiz": {
        "titel": "Handzettel: Folie 4 — Hygiene und Reformen",
        "zeilen": [
         "moralische Empörung reichte nicht",
         "Folgen: Kanalisation, Wasserversorgung, Bauordnungen"
        ],
        "feld": "Entscheidender Anstoß für Reformen:",
        "frei": true,
        "muster": "die Choleraepidemien im neunzehnten Jahrhundert",
        "loesungen": [
         "Choleraepidemien",
         "Cholera",
         "Seuchen",
         "Cholera, auch Reiche bedroht",
         "Epidemien"
        ]
       },
       "stelle": "Den entscheidenden Anstoß gaben vielmehr die Choleraepidemien",
       "erklaerung": "„vielmehr\" grenzt ab: nicht die Empörung, sondern die Cholera, die auch Wohlhabende traf.",
       "frage": "Ergänze deine Notiz auf dem Handzettel."
      },
      {
       "ort": "Vortrag — Abschnitt 5",
       "wer": "Frau",
       "text": "Um die Wende zum zwanzigsten Jahrhundert entstand dann eine Bewegung, die bis heute nachwirkt: die Gartenstadtbewegung. Ihre Vertreter hielten die überfüllte Großstadt für grundsätzlich krank. Gleichzeitig wussten sie, dass ein Leben auf dem Land für die meisten Arbeiter keine Alternative war, weil es dort kaum Arbeit und wenig Kultur gab. Ihre Grundidee bestand darin, die Vorteile von Stadt und Land miteinander zu verbinden. Geplant wurden überschaubare Siedlungen mit eigenen Gärten, umgeben von einem Grüngürtel, aber mit Arbeitsplätzen, Schulen und Geschäften in der Nähe. Der Boden sollte dabei der Gemeinschaft gehören, damit niemand mit steigenden Grundstückspreisen spekulieren konnte. Dieses letzte Element ist in der Praxis meistens auf der Strecke geblieben. Die grünen Siedlungen am Stadtrand hingegen prägen viele unserer Städte bis heute.",
       "notiz": {
        "titel": "Handzettel: Folie 5 — Gartenstadtbewegung",
        "zeilen": [
         "Großstadt gilt als krank",
         "Land: keine Alternative – kaum Arbeit",
         "Boden in Gemeinschaftsbesitz: kaum umgesetzt"
        ],
        "feld": "Grundidee:",
        "frei": true,
        "muster": "Vorteile von Stadt und Land verbinden",
        "loesungen": [
         "Vorteile von Stadt und Land verbinden",
         "Stadt und Land verbinden",
         "Stadt plus Land",
         "Verbindung von Stadt und Land"
        ]
       },
       "stelle": "die Vorteile von Stadt und Land miteinander zu verbinden",
       "erklaerung": "Die Grundidee wird direkt benannt; der Gemeinschaftsboden war nur ein zusätzliches, gescheitertes Element.",
       "frage": "Ergänze deine Notiz auf dem Handzettel."
      },
      {
       "ort": "Vortrag — Abschnitt 6",
       "wer": "Frau",
       "text": "Einen radikaleren Weg schlug in den zwanziger und dreißiger Jahren die architektonische Moderne ein. Ihre Vertreter forderten nichts weniger als eine völlig neue Stadt, die nach wissenschaftlichen Prinzipien geordnet sein sollte. Das zentrale Prinzip dieser sogenannten funktionalen Stadt war die Trennung der Funktionen. Wohnen, Arbeiten, Erholung und Verkehr sollten jeweils eigene Zonen erhalten. Die Fabrik mit ihrem Lärm und Rauch sollte nicht mehr neben dem Wohnhaus stehen, Wohnungen sollten Licht, Luft und Sonne bekommen. Vor dem Hintergrund der Mietskasernen, über die wir gerade gesprochen haben, war das durchaus nachvollziehbar und in gewisser Weise sogar fortschrittlich. Die Kehrseite dieses Modells zeigte sich allerdings erst Jahrzehnte später, als man es in großem Maßstab umsetzte und die einzelnen Zonen durch immer längere Wege miteinander verbunden werden mussten.",
       "notiz": {
        "titel": "Handzettel: Folie 6 — Die funktionale Stadt",
        "zeilen": [
         "Moderne: Stadt nach wissenschaftlichen Prinzipien",
         "Ziel: Licht, Luft, Sonne",
         "Kehrseite: lange Wege"
        ],
        "feld": "Zentrales Prinzip:",
        "frei": true,
        "muster": "Trennung von Wohnen, Arbeit, Erholung, Verkehr",
        "loesungen": [
         "Trennung der Funktionen",
         "Funktionstrennung",
         "getrennte Zonen für Wohnen, Arbeiten, Erholung, Verkehr",
         "Trennung von Wohnen und Arbeiten"
        ]
       },
       "stelle": "Das zentrale Prinzip dieser sogenannten funktionalen Stadt war die Trennung der Funktionen",
       "erklaerung": "Kernidee der funktionalen Stadt: jede Funktion in einer eigenen Zone.",
       "frage": "Ergänze deine Notiz auf dem Handzettel."
      },
      {
       "ort": "Vortrag — Abschnitt 7",
       "wer": "Frau",
       "text": "Genau das geschah in der Nachkriegszeit. Viele Städte waren zerstört, und der Wiederaufbau bot die Gelegenheit, sie nach modernen Grundsätzen neu zu ordnen. Hinzu kam ein neues Leitbild, das Auto. Man sprach ganz offen von der autogerechten Stadt. Breite Schneisen wurden durch historische Viertel geschlagen, um Platz für mehrspurige Straßen zu schaffen, und manche Gebäude, die den Krieg überstanden hatten, wurden erst jetzt abgerissen. Die Folgen für die Innenstädte waren gravierend. Da Wohnen, Arbeiten und Einkaufen nun räumlich getrennt waren, verödeten die Zentren nach Feierabend. Wer es sich leisten konnte, zog ins Grüne und pendelte mit dem Auto, was wiederum noch mehr Straßen erforderte. Ein Teufelskreis also, aus dem viele Städte erst Jahrzehnte später wieder herausfanden.",
       "notiz": {
        "titel": "Handzettel: Folie 7 — Die autogerechte Stadt",
        "zeilen": [
         "Wiederaufbau nach modernen Grundsätzen",
         "Schneisen für mehrspurige Straßen",
         "Teufelskreis: Pendeln → mehr Straßen"
        ],
        "feld": "Folge für die Innenstädte:",
        "frei": true,
        "muster": "Zentren verödeten nach Feierabend",
        "loesungen": [
         "Verödung",
         "Zentren verödeten",
         "Innenstädte verödet",
         "nach Feierabend leer"
        ]
       },
       "stelle": "verödeten die Zentren nach Feierabend",
       "erklaerung": "Durch die Trennung von Wohnen und Arbeiten wurden die Innenstädte abends leer.",
       "frage": "Ergänze deine Notiz auf dem Handzettel."
      },
      {
       "ort": "Vortrag — Abschnitt 8",
       "wer": "Frau",
       "text": "Doch auch hier bestätigt sich meine These, denn die Krise der autogerechten Stadt rief eine Gegenbewegung hervor. In den siebziger Jahren gingen Bürger auf die Straße, um ihre alten Viertel vor dem Abriss zu bewahren. Ein besonders anschauliches Beispiel ist das Hafenviertel in Kellmar. Die Stadtverwaltung wollte dort ganze Straßenzüge mit Altbauten abreißen und durch eine Schnellstraße samt Bürotürmen ersetzen. Anwohner und Studenten besetzten daraufhin leer stehende Häuser, organisierten Demonstrationen und sammelten Unterschriften. Nach jahrelangem Streit wurden die Pläne aufgegeben. Und die Ironie der Geschichte: Das Viertel, das man damals für wertlos hielt, ist heute die begehrteste Wohnlage der ganzen Stadt. Seither gilt die behutsame Erneuerung des Bestands als Grundsatz, der Flächenabriss dagegen als Fehler der Vergangenheit.",
       "notiz": {
        "titel": "Handzettel: Folie 8 — Gegenbewegung",
        "zeilen": [
         "Bürgerproteste gegen Abriss",
         "Beispiel: Hafenviertel Kellmar – Pläne aufgegeben",
         "neuer Grundsatz: behutsame Erneuerung"
        ],
        "feld": "Hafenviertel heute:",
        "frei": true,
        "muster": "begehrteste Wohnlage der Stadt",
        "loesungen": [
         "begehrteste Wohnlage",
         "begehrteste Wohnlage der Stadt",
         "beliebtestes Wohnviertel",
         "sehr begehrt"
        ]
       },
       "stelle": "ist heute die begehrteste Wohnlage der ganzen Stadt",
       "erklaerung": "Die „Ironie der Geschichte\": das einst als wertlos geltende Viertel ist heute am begehrtesten.",
       "frage": "Ergänze deine Notiz auf dem Handzettel."
      },
      {
       "ort": "Vortrag — Abschnitt 9",
       "wer": "Frau",
       "text": "Wie sieht das Leitbild heute aus? Viele von Ihnen haben vermutlich schon von der Stadt der kurzen Wege gehört, die in jüngster Zeit auch unter dem Schlagwort Viertelstundenstadt diskutiert wird. Die Idee ist bestechend einfach: Alles, was man für den Alltag braucht, also Einkaufen, Arzt, Schule, Arbeit und Erholung, soll innerhalb von fünfzehn Minuten zu Fuß oder mit dem Fahrrad erreichbar sein. Wenn Sie genau hinhören, merken Sie, dass dies im Grunde eine Rückkehr zur gemischten Stadt ist, also das genaue Gegenteil der Funktionstrennung der Moderne. Manche Kritiker befürchten allerdings, dass gut versorgte Viertel teurer werden und ärmere Bewohner verdrängt werden. Das Leitbild ist also keineswegs unumstritten, es zeigt aber deutlich, wie stark sich die Planung von der Fixierung auf das Auto gelöst hat.",
       "notiz": {
        "titel": "Handzettel: Folie 9 — Leitbild heute",
        "zeilen": [
         "Leitbild: Stadt der kurzen Wege / Viertelstundenstadt",
         "Rückkehr zur gemischten Stadt",
         "Kritik: Verdrängung Ärmerer"
        ],
        "feld": "Kernidee:",
        "frei": true,
        "muster": "alles in fünfzehn Minuten zu Fuß erreichbar",
        "loesungen": [
         "alles in fünfzehn Minuten erreichbar",
         "fünfzehn Minuten zu Fuß oder Rad",
         "15 Minuten zu Fuß/Rad",
         "alles in einer Viertelstunde erreichbar"
        ]
       },
       "stelle": "innerhalb von fünfzehn Minuten zu Fuß oder mit dem Fahrrad erreichbar",
       "erklaerung": "Alle Alltagsziele sollen in fünfzehn Minuten ohne Auto erreichbar sein.",
       "frage": "Ergänze deine Notiz auf dem Handzettel."
      },
      {
       "ort": "Vortrag — Abschnitt 10",
       "wer": "Frau",
       "text": "Damit komme ich zu meinem Ausblick. Wenn meine These stimmt, dass Stadtplanung auf Krisen antwortet, dann stellt sich die Frage, welche Krise die nächsten Jahrzehnte prägen wird. Meine Antwort ist eindeutig: Es ist der Klimawandel, und zwar in Form von extremer Hitze und Starkregen. Dicht bebaute, versiegelte Innenstädte heizen sich im Sommer stark auf, und bei heftigen Regenfällen kann das Wasser nicht versickern. Die Antwort der Planer lautet Schwammstadt: Grünflächen, begrünte Dächer und offene Böden sollen Regenwasser aufnehmen und bei Hitze wieder verdunsten lassen, was die Umgebung kühlt. Wir stehen also, so meine Schlussfolgerung, erneut an einem Wendepunkt, vergleichbar mit der Zeit der Choleraepidemien. Vielen Dank für Ihre Aufmerksamkeit.",
       "notiz": {
        "titel": "Handzettel: Folie 10 — Ausblick",
        "zeilen": [
         "Problem: versiegelte, dichte Innenstädte",
         "Antwort: Schwammstadt – Grün, Dächer, offene Böden"
        ],
        "feld": "Prägende Krise der Zukunft:",
        "frei": true,
        "muster": "Klimawandel: Hitze und Starkregen",
        "loesungen": [
         "Klimawandel",
         "Klimawandel: Hitze und Starkregen",
         "Hitze und Starkregen",
         "Klimakrise"
        ]
       },
       "stelle": "Es ist der Klimawandel, und zwar in Form von extremer Hitze und Starkregen",
       "erklaerung": "Die Rednerin wendet ihre These auf die Zukunft an: Die nächste Krise ist der Klimawandel.",
       "frage": "Ergänze deine Notiz auf dem Handzettel."
      }
     ]
    }
   ]
  }
 ],
 "laeufe": [
  {
   "id": "tc1hl1",
   "titel": "Prüfungslauf 1",
   "minuten": 40,
   "teile": [
    {
     "nr": 1,
     "art": "diskussion",
     "aufgaben": [
      {
       "von": "Person 1 — Studentin der Erziehungswissenschaft",
       "wer": "Frau",
       "text": "Ich habe eine kleine Tochter, und wenn sie krank ist, kann ich nicht einfach in die Uni fahren. Bei einer strengen Anwesenheitspflicht habe ich dann sofort ein Problem, obwohl ich den Stoff zu Hause nacharbeite. Meinen Kommilitonen, die abends kellnern, geht es ähnlich. Eine solche Regel trifft genau die, die es ohnehin schon schwerer haben.",
       "loesung": 3,
       "stelle": "trifft genau die, die es ohnehin schon schwerer haben",
       "erklaerung": "Sie argumentiert mit Eltern und Studenten mit Job. Ein Kompromiss mit Fehlterminen ist nicht ihr Thema.",
       "frage": "Welche Aussage passt zu dieser Person?",
       "opt": [
        "Ich bin dafür, weil Diskussionen nur funktionieren, wenn alle da sind.",
        "Ich lehne sie ab, weil Erwachsene selbst über ihre Zeit entscheiden sollten.",
        "Für Vorlesungen halte ich sie für unsinnig, für Seminare dagegen für vertretbar.",
        "Sie benachteiligt alle, die neben dem Studium arbeiten oder Kinder betreuen.",
        "Gute Lehre macht eine Pflicht überflüssig.",
        "Früher war ich dagegen, inzwischen habe ich meine Meinung geändert.",
        "Wichtiger als die Anwesenheit wäre eine Pflicht, sich vorzubereiten.",
        "Ohne Pflicht bleiben vor allem die schwächeren Studenten weg.",
        "Die Sitzungen sollten stattdessen aufgezeichnet werden.",
        "Eine begrenzte Zahl erlaubter Fehltermine ist ein fairer Kompromiss."
       ],
       "fest": true
      },
      {
       "von": "Person 2 — Student der Mathematik",
       "wer": "Mann",
       "text": "Man muss da unterscheiden. In einer Vorlesung mit dreihundert Leuten spricht ohnehin nur der Professor, da ist es egal, ob ich im Saal sitze oder das Skript lese. In einem Seminar mit fünfzehn Teilnehmern sieht das anders aus. Da lebt die Sitzung vom Austausch, und wer nie kommt, nimmt den anderen etwas weg. Dort finde ich eine Pflicht in Ordnung.",
       "loesung": 2,
       "stelle": "Dort finde ich eine Pflicht in Ordnung",
       "erklaerung": "Er unterscheidet zwischen Vorlesung und Seminar. Er ist nicht generell dafür.",
       "frage": "Welche Aussage passt zu dieser Person?",
       "opt": [
        "Ich bin dafür, weil Diskussionen nur funktionieren, wenn alle da sind.",
        "Ich lehne sie ab, weil Erwachsene selbst über ihre Zeit entscheiden sollten.",
        "Für Vorlesungen halte ich sie für unsinnig, für Seminare dagegen für vertretbar.",
        "Sie benachteiligt alle, die neben dem Studium arbeiten oder Kinder betreuen.",
        "Gute Lehre macht eine Pflicht überflüssig.",
        "Früher war ich dagegen, inzwischen habe ich meine Meinung geändert.",
        "Wichtiger als die Anwesenheit wäre eine Pflicht, sich vorzubereiten.",
        "Ohne Pflicht bleiben vor allem die schwächeren Studenten weg.",
        "Die Sitzungen sollten stattdessen aufgezeichnet werden.",
        "Eine begrenzte Zahl erlaubter Fehltermine ist ein fairer Kompromiss."
       ],
       "fest": true
      },
      {
       "von": "Person 3 — Studentin der Theaterwissenschaft",
       "wer": "Frau",
       "text": "Ich frage mich immer, warum man Menschen zwingen muss, in eine Veranstaltung zu kommen. Bei einer Dozentin, die ich letztes Jahr hatte, war der Raum jede Woche voll, obwohl niemand Unterschriften gesammelt hat. Sie hat spannend erzählt und uns ernst genommen. Wenn eine Veranstaltung leer bleibt, liegt das Problem meistens vorne und nicht bei den Studenten.",
       "loesung": 4,
       "stelle": "liegt das Problem meistens vorne",
       "erklaerung": "Sie meint: Wer gut unterrichtet, braucht keine Pflicht. Es geht ihr um die Qualität der Lehre.",
       "frage": "Welche Aussage passt zu dieser Person?",
       "opt": [
        "Ich bin dafür, weil Diskussionen nur funktionieren, wenn alle da sind.",
        "Ich lehne sie ab, weil Erwachsene selbst über ihre Zeit entscheiden sollten.",
        "Für Vorlesungen halte ich sie für unsinnig, für Seminare dagegen für vertretbar.",
        "Sie benachteiligt alle, die neben dem Studium arbeiten oder Kinder betreuen.",
        "Gute Lehre macht eine Pflicht überflüssig.",
        "Früher war ich dagegen, inzwischen habe ich meine Meinung geändert.",
        "Wichtiger als die Anwesenheit wäre eine Pflicht, sich vorzubereiten.",
        "Ohne Pflicht bleiben vor allem die schwächeren Studenten weg.",
        "Die Sitzungen sollten stattdessen aufgezeichnet werden.",
        "Eine begrenzte Zahl erlaubter Fehltermine ist ein fairer Kompromiss."
       ],
       "fest": true
      },
      {
       "von": "Person 4 — Student der Sozialen Arbeit",
       "wer": "Mann",
       "text": "Im Grundstudium hätte ich jede Petition gegen die Anwesenheitspflicht unterschrieben. Dann habe ich ein Semester an einer Hochschule ohne Pflicht studiert, und ehrlich gesagt bin ich kaum hingegangen. Am Ende habe ich die Prüfung nur knapp bestanden. Seitdem sehe ich das differenzierter. Ich bin wohl einfach jemand, der eine gewisse äußere Struktur braucht.",
       "loesung": 5,
       "stelle": "Seitdem sehe ich das differenzierter",
       "erklaerung": "Erst dagegen, dann durch eigene Erfahrung umgedacht: ein Meinungswechsel.",
       "frage": "Welche Aussage passt zu dieser Person?",
       "opt": [
        "Ich bin dafür, weil Diskussionen nur funktionieren, wenn alle da sind.",
        "Ich lehne sie ab, weil Erwachsene selbst über ihre Zeit entscheiden sollten.",
        "Für Vorlesungen halte ich sie für unsinnig, für Seminare dagegen für vertretbar.",
        "Sie benachteiligt alle, die neben dem Studium arbeiten oder Kinder betreuen.",
        "Gute Lehre macht eine Pflicht überflüssig.",
        "Früher war ich dagegen, inzwischen habe ich meine Meinung geändert.",
        "Wichtiger als die Anwesenheit wäre eine Pflicht, sich vorzubereiten.",
        "Ohne Pflicht bleiben vor allem die schwächeren Studenten weg.",
        "Die Sitzungen sollten stattdessen aufgezeichnet werden.",
        "Eine begrenzte Zahl erlaubter Fehltermine ist ein fairer Kompromiss."
       ],
       "fest": true
      },
      {
       "von": "Person 5 — Studentin der Anglistik",
       "wer": "Frau",
       "text": "Was nützt es, wenn alle im Raum sitzen, aber niemand den Text gelesen hat? Das erlebe ich ständig. Die Dozentin stellt eine Frage, und es herrscht Schweigen. Ich fände es sinnvoller, wenn man vor jeder Sitzung eine kurze Notiz zum Text abgeben müsste. Dann hätten alle etwas zu sagen, ganz egal, ob jemand eine Liste unterschreibt.",
       "loesung": 6,
       "stelle": "vor jeder Sitzung eine kurze Notiz zum Text abgeben müsste",
       "erklaerung": "Diskussionen sind ihr wichtig, aber sie will Vorbereitung statt bloßer Anwesenheit.",
       "frage": "Welche Aussage passt zu dieser Person?",
       "opt": [
        "Ich bin dafür, weil Diskussionen nur funktionieren, wenn alle da sind.",
        "Ich lehne sie ab, weil Erwachsene selbst über ihre Zeit entscheiden sollten.",
        "Für Vorlesungen halte ich sie für unsinnig, für Seminare dagegen für vertretbar.",
        "Sie benachteiligt alle, die neben dem Studium arbeiten oder Kinder betreuen.",
        "Gute Lehre macht eine Pflicht überflüssig.",
        "Früher war ich dagegen, inzwischen habe ich meine Meinung geändert.",
        "Wichtiger als die Anwesenheit wäre eine Pflicht, sich vorzubereiten.",
        "Ohne Pflicht bleiben vor allem die schwächeren Studenten weg.",
        "Die Sitzungen sollten stattdessen aufgezeichnet werden.",
        "Eine begrenzte Zahl erlaubter Fehltermine ist ein fairer Kompromiss."
       ],
       "fest": true
      },
      {
       "von": "Person 6 — Student der Agrarwissenschaft, Tutor",
       "wer": "Mann",
       "text": "Ich leite seit zwei Jahren ein Tutorium, und mir fällt immer dasselbe auf. Die Leute, die den Stoff ohnehin verstehen, kommen freiwillig. Gerade diejenigen, die Schwierigkeiten haben, tauchen ohne Pflicht irgendwann nicht mehr auf und scheitern dann in der Klausur. Aus dieser Erfahrung heraus halte ich eine gewisse Verbindlichkeit für sinnvoll.",
       "loesung": 7,
       "stelle": "Gerade diejenigen, die Schwierigkeiten haben",
       "erklaerung": "Sein Argument betrifft die schwächeren Studenten, nicht die Diskussionsqualität.",
       "frage": "Welche Aussage passt zu dieser Person?",
       "opt": [
        "Ich bin dafür, weil Diskussionen nur funktionieren, wenn alle da sind.",
        "Ich lehne sie ab, weil Erwachsene selbst über ihre Zeit entscheiden sollten.",
        "Für Vorlesungen halte ich sie für unsinnig, für Seminare dagegen für vertretbar.",
        "Sie benachteiligt alle, die neben dem Studium arbeiten oder Kinder betreuen.",
        "Gute Lehre macht eine Pflicht überflüssig.",
        "Früher war ich dagegen, inzwischen habe ich meine Meinung geändert.",
        "Wichtiger als die Anwesenheit wäre eine Pflicht, sich vorzubereiten.",
        "Ohne Pflicht bleiben vor allem die schwächeren Studenten weg.",
        "Die Sitzungen sollten stattdessen aufgezeichnet werden.",
        "Eine begrenzte Zahl erlaubter Fehltermine ist ein fairer Kompromiss."
       ],
       "fest": true
      },
      {
       "von": "Person 7 — Studentin der Rechtswissenschaft",
       "wer": "Frau",
       "text": "Ich finde, beide Seiten haben recht. Eine Pflicht ohne Ausnahmen ist zu starr, das Leben passiert eben. Aber gar keine Verbindlichkeit macht ein Seminar kaputt. Bei uns darf man in jedem Kurs dreimal fehlen, ohne einen Grund angeben zu müssen. Das funktioniert erstaunlich gut, weil niemand wegen eines Arzttermins in Panik gerät.",
       "loesung": 9,
       "stelle": "darf man in jedem Kurs dreimal fehlen",
       "erklaerung": "Sie beschreibt einen Mittelweg mit einer festen Zahl erlaubter Fehltermine.",
       "frage": "Welche Aussage passt zu dieser Person?",
       "opt": [
        "Ich bin dafür, weil Diskussionen nur funktionieren, wenn alle da sind.",
        "Ich lehne sie ab, weil Erwachsene selbst über ihre Zeit entscheiden sollten.",
        "Für Vorlesungen halte ich sie für unsinnig, für Seminare dagegen für vertretbar.",
        "Sie benachteiligt alle, die neben dem Studium arbeiten oder Kinder betreuen.",
        "Gute Lehre macht eine Pflicht überflüssig.",
        "Früher war ich dagegen, inzwischen habe ich meine Meinung geändert.",
        "Wichtiger als die Anwesenheit wäre eine Pflicht, sich vorzubereiten.",
        "Ohne Pflicht bleiben vor allem die schwächeren Studenten weg.",
        "Die Sitzungen sollten stattdessen aufgezeichnet werden.",
        "Eine begrenzte Zahl erlaubter Fehltermine ist ein fairer Kompromiss."
       ],
       "fest": true
      },
      {
       "von": "Person 8 — Student der Informatik",
       "wer": "Mann",
       "text": "Für mich ist das eine Frage des Prinzips. Wir sind erwachsen, wir können wählen, heiraten, Verträge unterschreiben, aber in der Uni soll jemand kontrollieren, ob wir im Raum sitzen? Wenn ich lieber zu Hause mit dem Buch lerne und die Prüfung bestehe, geht das niemanden etwas an. Verantwortung für das eigene Lernen gehört zum Studium dazu.",
       "loesung": 1,
       "stelle": "Wir sind erwachsen",
       "erklaerung": "Er argumentiert grundsätzlich mit Selbstbestimmung, nicht mit der Qualität der Lehre.",
       "frage": "Welche Aussage passt zu dieser Person?",
       "opt": [
        "Ich bin dafür, weil Diskussionen nur funktionieren, wenn alle da sind.",
        "Ich lehne sie ab, weil Erwachsene selbst über ihre Zeit entscheiden sollten.",
        "Für Vorlesungen halte ich sie für unsinnig, für Seminare dagegen für vertretbar.",
        "Sie benachteiligt alle, die neben dem Studium arbeiten oder Kinder betreuen.",
        "Gute Lehre macht eine Pflicht überflüssig.",
        "Früher war ich dagegen, inzwischen habe ich meine Meinung geändert.",
        "Wichtiger als die Anwesenheit wäre eine Pflicht, sich vorzubereiten.",
        "Ohne Pflicht bleiben vor allem die schwächeren Studenten weg.",
        "Die Sitzungen sollten stattdessen aufgezeichnet werden.",
        "Eine begrenzte Zahl erlaubter Fehltermine ist ein fairer Kompromiss."
       ],
       "fest": true
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
         "text": "Willkommen zu „Wissen am Abend\". Mein Gast ist heute Doktor Hanna Wegener vom Institut für Chronobiologie in Talheim. Frau Wegener, Sie untersuchen, wie sich Nachtarbeit auf den Schlaf auswirkt. Ist das nicht längst erforscht?"
        },
        {
         "wer": "Frau",
         "text": "Man könnte es meinen. Tatsächlich stammen aber viele Erkenntnisse aus Laborstudien, in denen die Teilnehmer ein paar Nächte wach bleiben. Wie es Menschen geht, die das über Jahre im echten Berufsleben tun, wissen wir erstaunlich wenig."
        }
       ],
       "frage": "Die Forscherin hält das Thema für wenig erforscht, weil …",
       "opt": [
        "es bisher kaum Laborstudien zur Nachtarbeit gibt.",
        "die meisten Studien schon viele Jahre alt sind.",
        "man über langjährige Nachtarbeit im Berufsalltag wenig weiß."
       ],
       "loesung": 2,
       "stelle": "wissen wir erstaunlich wenig",
       "erklaerung": "Laborstudien gibt es viele; es fehlt Wissen über langjährige Nachtarbeit im echten Beruf."
      },
      {
       "ort": "Gespräch — Abschnitt 2",
       "zeilen": [
        {
         "wer": "Mann",
         "text": "Und genau da setzt Ihre Studie an?"
        },
        {
         "wer": "Frau",
         "text": "Genau. Wir begleiten seit drei Jahren rund vierhundert Pflegekräfte aus vier Kliniken. Sie tragen ein Armband, das Bewegung und Licht misst, und füllen einmal im Monat einen Fragebogen aus. So sehen wir nicht nur, wie lange sie schlafen, sondern auch, wie sie sich dabei fühlen."
        }
       ],
       "frage": "In der Studie wird erfasst, …",
       "opt": [
        "wie viele Stunden die Pflegekräfte im Monat arbeiten.",
        "wie lange die Pflegekräfte schlafen und wie es ihnen dabei geht.",
        "ob die Kliniken genug Licht in den Stationen haben."
       ],
       "loesung": 1,
       "stelle": "sondern auch, wie sie sich dabei fühlen",
       "erklaerung": "Armband und Fragebogen messen Schlaf und Befinden, nicht Arbeitszeit oder Klinikbeleuchtung."
      },
      {
       "ort": "Gespräch — Abschnitt 3",
       "zeilen": [
        {
         "wer": "Mann",
         "text": "Was hat Sie bisher am meisten überrascht?"
        },
        {
         "wer": "Frau",
         "text": "Dass die Gesamtschlafdauer gar nicht das Hauptproblem ist. Über die Woche gerechnet schlafen viele Nachtarbeiter kaum weniger als ihre Kollegen im Tagdienst. Was fehlt, ist die Regelmäßigkeit. Der Körper weiß schlicht nicht mehr, wann Tag und wann Nacht ist. Und das wirkt sich auf Stimmung und Konzentration stärker aus als ein paar Stunden weniger Schlaf."
        }
       ],
       "frage": "Überrascht hat die Forscherin, dass das Hauptproblem …",
       "opt": [
        "die deutlich kürzere Schlafdauer ist.",
        "vor allem die Kollegen im Tagdienst betrifft.",
        "in der fehlenden Regelmäßigkeit des Schlafs liegt."
       ],
       "loesung": 2,
       "stelle": "Was fehlt, ist die Regelmäßigkeit",
       "erklaerung": "Die Schlafdauer ist über die Woche kaum geringer; entscheidend ist der unregelmäßige Rhythmus."
      },
      {
       "ort": "Gespräch — Abschnitt 4",
       "zeilen": [
        {
         "wer": "Mann",
         "text": "Heißt das, man sollte Nachtschichten eher in längeren Blöcken legen, damit sich der Körper umstellen kann?"
        },
        {
         "wer": "Frau",
         "text": "Das wurde lange empfohlen, aber unsere Daten sprechen eher dagegen. Eine vollständige Umstellung gelingt kaum jemandem, weil man am freien Tag ja doch wieder am Familienleben teilnehmen will. Kurze Blöcke von zwei, höchstens drei Nächten scheinen weniger zu belasten."
        }
       ],
       "frage": "Nach den Daten der Studie sind …",
       "opt": [
        "kurze Blöcke von zwei oder drei Nächten weniger belastend.",
        "lange Blöcke von Nachtschichten besser, weil sich der Körper umstellt.",
        "Nachtschichten am Wochenende besonders belastend für Familien."
       ],
       "loesung": 0,
       "stelle": "Kurze Blöcke von zwei, höchstens drei Nächten scheinen weniger zu belasten",
       "erklaerung": "Die ältere Empfehlung langer Blöcke wird durch die Daten eher nicht gestützt."
      },
      {
       "ort": "Gespräch — Abschnitt 5",
       "zeilen": [
        {
         "wer": "Mann",
         "text": "Sie haben das Licht erwähnt. Welche Rolle spielt es?"
        },
        {
         "wer": "Frau",
         "text": "Eine größere, als viele denken. Wer morgens nach der Nachtschicht im hellen Sonnenlicht nach Hause fährt, signalisiert seinem Körper: Jetzt beginnt der Tag. Das Einschlafen fällt danach deutlich schwerer. Einige Teilnehmer tragen inzwischen auf dem Heimweg eine getönte Brille, und sie berichten von spürbar besserem Schlaf. Auch Verdunkelungsvorhänge im Schlafzimmer machen einen erstaunlichen Unterschied."
        }
       ],
       "frage": "Eine getönte Brille auf dem Heimweg soll …",
       "opt": [
        "verhindern, dass das Morgenlicht dem Körper Tagesbeginn signalisiert.",
        "die Augen nach der Nachtschicht vor Überanstrengung schützen.",
        "den Körper morgens schneller wach machen."
       ],
       "loesung": 0,
       "stelle": "signalisiert seinem Körper: Jetzt beginnt der Tag",
       "erklaerung": "Helles Morgenlicht erschwert das Einschlafen; die Brille dämpft dieses Signal."
      },
      {
       "ort": "Gespräch — Abschnitt 6",
       "zeilen": [
        {
         "wer": "Mann",
         "text": "Ist das schon wissenschaftlich belegt oder eher eine Beobachtung?"
        },
        {
         "wer": "Frau",
         "text": "Bisher ist es eine Beobachtung, und ich möchte das ausdrücklich betonen. Die Teilnehmer, die eine Brille tragen, haben sich selbst dafür entschieden. Vielleicht achten sie insgesamt mehr auf ihren Schlaf. Um das zu klären, planen wir für das kommende Jahr eine Studie, in der wir die Brillen per Zufall verteilen."
        }
       ],
       "frage": "Die Wirkung der Brille ist noch nicht belegt, weil …",
       "opt": [
        "die Teilnehmer sie freiwillig tragen und sich auch sonst unterscheiden könnten.",
        "die Brillen bisher per Zufall verteilt wurden.",
        "zu wenige Teilnehmer überhaupt eine Brille getragen haben."
       ],
       "loesung": 0,
       "stelle": "Die Teilnehmer, die eine Brille tragen, haben sich selbst dafür entschieden",
       "erklaerung": "Die Zufallsverteilung ist erst für das kommende Jahr geplant."
      },
      {
       "ort": "Gespräch — Abschnitt 7",
       "zeilen": [
        {
         "wer": "Mann",
         "text": "Viele Nachtarbeiter greifen ja zu Kaffee, um durchzuhalten. Ist das ein Problem?"
        },
        {
         "wer": "Frau",
         "text": "Nicht der Kaffee an sich, sondern der Zeitpunkt. Ein Kaffee zu Beginn der Schicht ist völlig in Ordnung. Wer aber gegen fünf Uhr morgens noch eine große Tasse trinkt, hat beim Schlafen am Vormittag noch einen erheblichen Teil des Koffeins im Blut. Wir empfehlen, in den letzten sechs Stunden vor dem Schlafen darauf zu verzichten."
        }
       ],
       "frage": "Zum Kaffee empfiehlt die Forscherin, …",
       "opt": [
        "während der Nachtschicht ganz auf Kaffee zu verzichten.",
        "in den sechs Stunden vor dem Schlafen keinen Kaffee mehr zu trinken.",
        "gegen fünf Uhr morgens eine große Tasse zu trinken."
       ],
       "loesung": 1,
       "stelle": "in den letzten sechs Stunden vor dem Schlafen darauf zu verzichten",
       "erklaerung": "Ein Kaffee zu Schichtbeginn ist in Ordnung; problematisch ist er kurz vor dem Schlafen."
      },
      {
       "ort": "Gespräch — Abschnitt 8",
       "zeilen": [
        {
         "wer": "Mann",
         "text": "Was können die Arbeitgeber tun?"
        },
        {
         "wer": "Frau",
         "text": "Am wichtigsten ist Planbarkeit. In zwei der beteiligten Kliniken werden die Dienstpläne mittlerweile acht Wochen im Voraus festgelegt statt wie früher zwei. Die Pflegekräfte dort berichten nicht unbedingt von besserem Schlaf, aber von deutlich weniger Stress, weil sie ihr Privatleben verlässlich planen können. Das ist ein Ergebnis, das uns selbst überrascht hat."
        }
       ],
       "frage": "Die früher festgelegten Dienstpläne haben dazu geführt, dass die Pflegekräfte …",
       "opt": [
        "weniger Stress empfinden.",
        "deutlich besser schlafen.",
        "acht Wochen mehr Urlaub planen können."
       ],
       "loesung": 0,
       "stelle": "aber von deutlich weniger Stress",
       "erklaerung": "Ausdrücklich nicht unbedingt besserer Schlaf, sondern weniger Stress."
      },
      {
       "ort": "Gespräch — Abschnitt 9",
       "zeilen": [
        {
         "wer": "Mann",
         "text": "Es gibt ja Menschen, die sagen, sie seien Nachtmenschen und kämen mit Nachtschichten gut zurecht. Stimmt das?"
        },
        {
         "wer": "Frau",
         "text": "Zum Teil. Ausgeprägte Spättypen vertragen Nachtschichten tatsächlich etwas besser, das sehen wir auch in unseren Daten. Aber auch bei ihnen zeigen sich nach einigen Jahren Belastungszeichen. Die eigene Veranlagung schützt also nicht, sie verschiebt das Problem nur."
        }
       ],
       "frage": "Über sogenannte Spättypen sagt die Forscherin, dass sie …",
       "opt": [
        "Nachtschichten auf Dauer ohne Probleme vertragen.",
        "in ihren Daten nicht von anderen Teilnehmern zu unterscheiden sind.",
        "zwar besser zurechtkommen, langfristig aber ebenfalls belastet sind."
       ],
       "loesung": 2,
       "stelle": "Aber auch bei ihnen zeigen sich nach einigen Jahren Belastungszeichen",
       "erklaerung": "Die Veranlagung hilft etwas, schützt aber nicht dauerhaft."
      },
      {
       "ort": "Gespräch — Abschnitt 10",
       "zeilen": [
        {
         "wer": "Mann",
         "text": "Zum Schluss: Wann können wir mit den endgültigen Ergebnissen rechnen?"
        },
        {
         "wer": "Frau",
         "text": "Die Studie läuft noch zwei Jahre. Wir veröffentlichen aber schon im Frühjahr einen Zwischenbericht, und zwar bewusst auch in einer verständlichen Fassung für die Kliniken. Es nützt wenig, wenn Ergebnisse nur in Fachzeitschriften stehen, die in der Praxis niemand liest."
        }
       ],
       "frage": "Der Zwischenbericht soll auch verständlich formuliert werden, damit …",
       "opt": [
        "die Studie zwei Jahre früher beendet werden kann.",
        "die Ergebnisse in den Kliniken tatsächlich ankommen.",
        "er in mehr Fachzeitschriften veröffentlicht wird."
       ],
       "loesung": 1,
       "stelle": "auch in einer verständlichen Fassung für die Kliniken",
       "erklaerung": "Fachzeitschriften liest in der Praxis kaum jemand; deshalb eine Fassung für die Kliniken."
      }
     ]
    },
    {
     "nr": 3,
     "art": "vortrag",
     "aufgaben": [
      {
       "ort": "Vortrag — Abschnitt 1",
       "wer": "Mann",
       "text": "Guten Tag, meine Damen und Herren. Ich möchte heute mit Ihnen über eine Bedrohung sprechen, die manche Fachleute als stille Pandemie bezeichnen. Still deshalb, weil sie keine Schlagzeilen macht wie ein neues Virus, sondern sich langsam und fast unbemerkt ausbreitet. Gemeint ist die Zunahme von Bakterien, gegen die unsere Antibiotika nicht mehr wirken. Um Ihnen die Dimension deutlich zu machen, beginne ich mit einer Zahl. Nach aktuellen Schätzungen sterben weltweit jedes Jahr über eine Million Menschen unmittelbar an Infektionen mit resistenten Erregern. Rechnet man die Fälle hinzu, in denen Resistenzen zum Tod beigetragen haben, liegt die Zahl noch um ein Vielfaches höher. Damit gehören resistente Keime schon heute zu den häufigsten Todesursachen überhaupt, und die Tendenz ist steigend.",
       "notiz": {
        "titel": "Handzettel: Folie 1 — Einleitung: Ausmaß",
        "zeilen": [
         "„stille Pandemie\": breitet sich unbemerkt aus",
         "mit Mitursache: Vielfaches höher",
         "Tendenz: steigend"
        ],
        "feld": "Direkte Todesfälle weltweit pro Jahr:",
        "frei": true,
        "muster": "über eine Million",
        "loesungen": [
         "über eine Million",
         "mehr als eine Million",
         "> 1 Mio.",
         "über 1 Million",
         "eine Million"
        ]
       },
       "stelle": "über eine Million Menschen",
       "erklaerung": "Gefragt sind die direkten Todesfälle; die Fälle mit Mitursache liegen „um ein Vielfaches höher\".",
       "frage": "Ergänze deine Notiz auf dem Handzettel."
      },
      {
       "ort": "Vortrag — Abschnitt 2",
       "wer": "Mann",
       "text": "Bevor wir uns den Ursachen zuwenden, eine kurze Klärung, was Antibiotika überhaupt sind. Antibiotika sind Wirkstoffe, die Bakterien abtöten oder ihr Wachstum hemmen. Sie greifen dabei Strukturen an, die nur Bakterien besitzen, etwa ihre Zellwand. Und daraus ergibt sich ein Punkt, der in der Bevölkerung erstaunlich wenig bekannt ist. Gegen Viren wirken Antibiotika nicht, weil Viren diese Strukturen gar nicht haben. Die allermeisten Erkältungen, die echte Grippe oder auch eine gewöhnliche Halsentzündung werden aber durch Viren verursacht. In Umfragen glaubt dennoch fast die Hälfte der Befragten, ein Antibiotikum helfe gegen eine Erkältung. Diesen Irrtum sollten wir im Hinterkopf behalten, denn er wird uns gleich wieder begegnen, wenn es um die Verordnungspraxis in Arztpraxen geht.",
       "notiz": {
        "titel": "Handzettel: Folie 2 — Was sind Antibiotika?",
        "zeilen": [
         "Wirkung: töten Bakterien / hemmen Wachstum",
         "Angriffspunkt: z. B. Zellwand",
         "Irrtum: fast die Hälfte glaubt an Hilfe bei Erkältung"
        ],
        "feld": "Wirken nicht gegen:",
        "frei": true,
        "muster": "Viren – Erkältung, Grippe",
        "loesungen": [
         "Viren",
         "Viren, z. B. Erkältung",
         "Virusinfektionen",
         "Erkältung und Grippe, weil Viren"
        ]
       },
       "stelle": "Gegen Viren wirken Antibiotika nicht",
       "erklaerung": "Viren haben die angegriffenen Strukturen nicht, deshalb helfen Antibiotika bei Erkältungen nicht.",
       "frage": "Ergänze deine Notiz auf dem Handzettel."
      },
      {
       "ort": "Vortrag — Abschnitt 3",
       "wer": "Mann",
       "text": "Wie entsteht nun eine Resistenz? Hier hilft ein Blick auf die Evolution. In jeder großen Bakterienpopulation gibt es durch zufällige Veränderungen im Erbgut einzelne Bakterien, die gegen ein bestimmtes Antibiotikum etwas weniger empfindlich sind. Solange kein Antibiotikum im Spiel ist, haben sie keinen Vorteil. Wird aber ein Antibiotikum eingesetzt, sterben die empfindlichen Bakterien ab, während die widerstandsfähigen überleben. Diese überlebenden Bakterien vermehren sich nun ungehindert, denn die Konkurrenz ist ja beseitigt. Wir sprechen von Selektion. Das Antibiotikum erzeugt die Resistenz also nicht selbst, es sortiert gewissermaßen die widerstandsfähigen Erreger aus und verschafft ihnen freie Bahn. Daraus folgt eine unbequeme Wahrheit: Jeder Einsatz eines Antibiotikums, auch ein medizinisch völlig gerechtfertigter, fördert die Ausbreitung von Resistenzen.",
       "notiz": {
        "titel": "Handzettel: Folie 3 — Entstehung von Resistenzen",
        "zeilen": [
         "zufällige Veränderungen im Erbgut",
         "Antibiotikum tötet empfindliche Bakterien",
         "Folgerung: jeder Einsatz fördert Resistenz"
        ],
        "feld": "Mechanismus (Selektion):",
        "frei": true,
        "muster": "Überlebende resistente Bakterien vermehren sich ungehindert",
        "loesungen": [
         "resistente Bakterien überleben und vermehren sich",
         "Selektion: Überlebende vermehren sich",
         "widerstandsfähige vermehren sich ohne Konkurrenz",
         "Überlebende vermehren sich"
        ]
       },
       "stelle": "Diese überlebenden Bakterien vermehren sich nun ungehindert",
       "erklaerung": "Das Antibiotikum erzeugt keine Resistenz, sondern beseitigt die Konkurrenz der widerstandsfähigen Bakterien.",
       "frage": "Ergänze deine Notiz auf dem Handzettel."
      },
      {
       "ort": "Vortrag — Abschnitt 4",
       "wer": "Mann",
       "text": "Wäre das alles, ließe sich das Problem vielleicht noch eindämmen. Bakterien haben aber eine Fähigkeit, die sie besonders gefährlich macht. Sie geben ihre Resistenzen nicht nur an ihre Nachkommen weiter, sondern können Resistenzgene auch untereinander austauschen, und zwar sogar zwischen verschiedenen Arten. Man spricht von horizontalem Gentransfer. Stellen Sie sich das so vor, als könnten Sie die Fähigkeiten Ihres Nachbarn einfach kopieren, ohne mit ihm verwandt zu sein. Ein harmloses Darmbakterium kann so eine Resistenz erwerben und sie später an einen gefährlichen Krankheitserreger weitergeben. Das erklärt, warum sich Resistenzen in Krankenhäusern, in Kläranlagen oder in Tierställen so rasant verbreiten. Überall dort treffen viele verschiedene Bakterien auf engem Raum aufeinander, und überall dort sind gleichzeitig Antibiotika im Spiel.",
       "notiz": {
        "titel": "Handzettel: Folie 4 — Weitergabe zwischen Bakterien",
        "zeilen": [
         "Weitergabe an Nachkommen",
         "Fachbegriff: horizontaler Gentransfer",
         "Brennpunkte: Krankenhaus, Kläranlage, Stall"
        ],
        "feld": "Besonders gefährliche Fähigkeit:",
        "frei": true,
        "muster": "Austausch von Resistenzgenen, auch zwischen Arten",
        "loesungen": [
         "Austausch von Resistenzgenen",
         "Resistenzgene untereinander austauschen",
         "Gentausch auch zwischen Arten",
         "Weitergabe an andere Arten"
        ]
       },
       "stelle": "können Resistenzgene auch untereinander austauschen, und zwar sogar zwischen verschiedenen Arten",
       "erklaerung": "Nicht nur Vererbung: Bakterien tauschen Resistenzgene sogar artübergreifend aus.",
       "frage": "Ergänze deine Notiz auf dem Handzettel."
      },
      {
       "ort": "Vortrag — Abschnitt 5",
       "wer": "Mann",
       "text": "Damit kommen wir zu den Ursachen auf menschlicher Seite, und zwar zunächst in der Humanmedizin. Antibiotika werden zu häufig verordnet. Eine Auswertung von Patientendaten aus mehreren Hausarztpraxen hat ergeben, dass etwa ein Drittel aller Antibiotikaverordnungen medizinisch nicht notwendig war. Der weitaus größte Teil davon entfiel auf Atemwegsinfekte, die, wie wir gesehen haben, meist durch Viren ausgelöst werden. Warum verschreiben Ärzte dennoch Antibiotika? Die befragten Mediziner nannten vor allem zwei Gründe: zum einen Zeitdruck, denn eine gründliche Diagnose dauert länger, zum anderen die Erwartungen der Patienten. Viele Patienten fühlen sich nicht ernst genommen, wenn sie ohne Rezept nach Hause gehen. Hier zeigt sich, wie eng medizinisches Handeln und öffentliches Wissen miteinander zusammenhängen.",
       "notiz": {
        "titel": "Handzettel: Folie 5 — Ursache Humanmedizin",
        "zeilen": [
         "Auswertung von Hausarztdaten",
         "meist bei Atemwegsinfekten",
         "Gründe: Zeitdruck, Erwartung der Patienten"
        ],
        "feld": "Anteil unnötiger Verordnungen:",
        "frei": true,
        "muster": "etwa ein Drittel",
        "loesungen": [
         "etwa ein Drittel",
         "ein Drittel",
         "1/3",
         "rund 33 %"
        ]
       },
       "stelle": "etwa ein Drittel aller Antibiotikaverordnungen medizinisch nicht notwendig war",
       "erklaerung": "Die Kernzahl der Auswertung: ein Drittel der Verordnungen war unnötig.",
       "frage": "Ergänze deine Notiz auf dem Handzettel."
      },
      {
       "ort": "Vortrag — Abschnitt 6",
       "wer": "Mann",
       "text": "Der zweite große Bereich ist die Tierhaltung. In vielen Ländern werden in Ställen mehr Antibiotika eingesetzt als in der gesamten Humanmedizin. Lange Zeit wurden sie sogar dem Futter beigemischt, weil man festgestellt hatte, dass die Tiere dadurch schneller wachsen. Dieser Einsatz als Masthilfe ist in der Europäischen Union inzwischen verboten. Das grundlegende Problem besteht aber fort. Wenn in einem großen Bestand einige Tiere erkranken, ist es kaum möglich, jedes Tier einzeln zu behandeln. Deshalb wird das Medikament über das Trinkwasser an den gesamten Bestand verabreicht, also auch an alle gesunden Tiere. Resistente Keime gelangen anschließend über Gülle in Böden und Gewässer oder über Fleisch in die Küche. Die Grenze zwischen Tiermedizin und Humanmedizin ist also, was Resistenzen angeht, keineswegs undurchlässig.",
       "notiz": {
        "titel": "Handzettel: Folie 6 — Ursache Tierhaltung",
        "zeilen": [
         "Ställe: oft mehr Antibiotika als Humanmedizin",
         "Masthilfe in der EU verboten",
         "Verbreitung über Gülle und Fleisch"
        ],
        "feld": "Fortbestehendes Grundproblem:",
        "frei": true,
        "muster": "ganzer Bestand behandelt, auch gesunde Tiere",
        "loesungen": [
         "ganzer Bestand wird behandelt",
         "auch gesunde Tiere bekommen Antibiotika",
         "Gabe über Trinkwasser an alle Tiere",
         "Behandlung des ganzen Bestands"
        ]
       },
       "stelle": "an den gesamten Bestand verabreicht, also auch an alle gesunden Tiere",
       "erklaerung": "Die Masthilfe ist verboten; das Problem bleibt, weil ganze Bestände inklusive gesunder Tiere behandelt werden.",
       "frage": "Ergänze deine Notiz auf dem Handzettel."
      },
      {
       "ort": "Vortrag — Abschnitt 7",
       "wer": "Mann",
       "text": "Wenden wir uns den Krankenhäusern zu, wo resistente Erreger besonders gefährlich sind, weil dort viele geschwächte Menschen behandelt werden. Die wirksamste Gegenmaßnahme ist dabei erstaunlich unspektakulär, nämlich die konsequente Desinfektion der Hände. Das Klinikum Rheinhagen hat dazu ein Programm mit Schulungen, gut sichtbaren Spendern und regelmäßigen Rückmeldungen an die Stationen eingeführt. Vorher wurden die Hände nur bei etwa der Hälfte der vorgeschriebenen Gelegenheiten desinfiziert, danach bei mehr als vier von fünf. Die Wirkung auf die Patienten war deutlich messbar: Die Zahl der im Krankenhaus erworbenen Infektionen mit resistenten Erregern ging um ein Viertel zurück. Ich betone das, weil in der öffentlichen Debatte oft nach teuren technischen Lösungen gerufen wird, während einfache Maßnahmen nicht konsequent genug umgesetzt werden.",
       "notiz": {
        "titel": "Handzettel: Folie 7 — Krankenhaushygiene",
        "zeilen": [
         "wirksamste Maßnahme: Händedesinfektion",
         "Programm Klinikum Rheinhagen",
         "Desinfektionsquote: von der Hälfte auf über vier Fünftel"
        ],
        "feld": "Wirkung auf Krankenhausinfektionen:",
        "frei": true,
        "muster": "Rückgang um ein Viertel",
        "loesungen": [
         "Rückgang um ein Viertel",
         "um ein Viertel weniger",
         "ein Viertel weniger",
         "-25 %",
         "minus fünfundzwanzig Prozent"
        ]
       },
       "stelle": "ging um ein Viertel zurück",
       "erklaerung": "Hälfte und vier Fünftel betreffen die Desinfektionsquote; die Infektionen sanken um ein Viertel.",
       "frage": "Ergänze deine Notiz auf dem Handzettel."
      },
      {
       "ort": "Vortrag — Abschnitt 8",
       "wer": "Mann",
       "text": "Nun könnte man fragen, warum die Pharmaindustrie nicht einfach neue Antibiotika entwickelt. Tatsächlich ist seit Jahrzehnten kaum eine wirklich neue Wirkstoffklasse auf den Markt gekommen. Wissenschaftliche Hürden spielen dabei eine Rolle, entscheidend sind jedoch wirtschaftliche Gründe. Die Entwicklung eines neuen Medikaments kostet viele hundert Millionen Euro. Ein neues Antibiotikum würde aber, um keine Resistenzen zu fördern, als Reservemittel zurückgehalten und nur in Notfällen eingesetzt. Hinzu kommt, dass eine Antibiotikatherapie nur wenige Tage dauert, während Medikamente gegen chronische Krankheiten oft lebenslang eingenommen werden. Für Unternehmen ist die Antibiotikaforschung daher schlicht unattraktiv. Einige Länder erproben deshalb neue Modelle, bei denen der Staat Herstellern einen festen Jahresbetrag zahlt, unabhängig davon, wie viel von dem Mittel tatsächlich verkauft wird.",
       "notiz": {
        "titel": "Handzettel: Folie 8 — Mangel an neuen Wirkstoffen",
        "zeilen": [
         "seit Jahrzehnten kaum neue Wirkstoffklassen",
         "neue Mittel = Reserve, kurze Therapie",
         "Lösungsidee: fester staatlicher Jahresbetrag"
        ],
        "feld": "Entscheidender Grund für den Mangel:",
        "frei": true,
        "muster": "wirtschaftlich unattraktiv für Firmen",
        "loesungen": [
         "wirtschaftlich unattraktiv",
         "wirtschaftliche Gründe",
         "lohnt sich nicht für Pharmafirmen",
         "zu wenig Gewinn"
        ]
       },
       "stelle": "Für Unternehmen ist die Antibiotikaforschung daher schlicht unattraktiv",
       "erklaerung": "Wissenschaftliche Hürden spielen nur „eine Rolle\"; entscheidend sind die wirtschaftlichen Gründe.",
       "frage": "Ergänze deine Notiz auf dem Handzettel."
      },
      {
       "ort": "Vortrag — Abschnitt 9",
       "wer": "Mann",
       "text": "Gibt es Hoffnung jenseits klassischer Antibiotika? Durchaus. Besonders vielversprechend ist die sogenannte Phagentherapie. Phagen sind Viren, die ausschließlich Bakterien befallen und dabei sehr wählerisch sind. Jeder Phage greift nur ganz bestimmte Bakterienstämme an und lässt die übrigen Bakterien, etwa die nützliche Darmflora, in Ruhe. Die Idee ist übrigens nicht neu, sie wurde bereits vor über hundert Jahren erforscht, geriet aber nach der Entdeckung des Penicillins im Westen weitgehend in Vergessenheit. Heute wird sie wiederentdeckt, und es gibt erste ermutigende Einzelfälle, in denen Patienten mit sonst unbehandelbaren Infektionen gerettet werden konnten. Allerdings muss für jeden Patienten der passende Phage erst gefunden werden, was die Therapie aufwendig macht. Für eine breite Anwendung fehlen bislang große klinische Studien.",
       "notiz": {
        "titel": "Handzettel: Folie 9 — Neue Ansätze",
        "zeilen": [
         "Vorteil: greift nur bestimmte Stämme an",
         "Idee über hundert Jahre alt",
         "Nachteil: aufwendig, große Studien fehlen"
        ],
        "feld": "Vielversprechender neuer Ansatz:",
        "frei": true,
        "muster": "Phagentherapie – Viren gegen Bakterien",
        "loesungen": [
         "Phagentherapie",
         "Phagen",
         "Phagen: Viren gegen Bakterien",
         "bakterienfressende Viren"
        ]
       },
       "stelle": "Besonders vielversprechend ist die sogenannte Phagentherapie",
       "erklaerung": "Phagen sind Viren, die gezielt bestimmte Bakterien angreifen und nützliche verschonen.",
       "frage": "Ergänze deine Notiz auf dem Handzettel."
      },
      {
       "ort": "Vortrag — Abschnitt 10",
       "wer": "Mann",
       "text": "Lassen Sie mich zusammenfassen. Resistenzen entstehen durch Selektion, sie verbreiten sich durch Austausch zwischen Bakterien, und sie werden durch unnötigen Antibiotikaeinsatz in Arztpraxen wie in Ställen beschleunigt. Neue Medikamente sind aus wirtschaftlichen Gründen rar. Was folgt daraus? Meine wichtigste Schlussfolgerung lautet, dass wir Mensch, Tier und Umwelt gemeinsam betrachten müssen. Es nützt wenig, in Krankenhäusern sparsam zu sein, wenn resistente Keime gleichzeitig aus Ställen und Kläranlagen in die Umwelt gelangen. Fachleute sprechen daher von einem ganzheitlichen Gesundheitsansatz. Und auch jeder Einzelne kann etwas beitragen: Nehmen Sie Antibiotika nur, wenn ein Arzt sie verordnet hat, und dann genau so lange wie vorgeschrieben. Und bitte fordern Sie bei einer Erkältung kein Rezept ein. Vielen Dank.",
       "notiz": {
        "titel": "Handzettel: Folie 10 — Fazit",
        "zeilen": [
         "Selektion, Austausch, unnötiger Einsatz",
         "Einzelne: nur nach Verordnung, so lange wie vorgeschrieben"
        ],
        "feld": "Wichtigste Schlussfolgerung:",
        "frei": true,
        "muster": "Mensch, Tier und Umwelt gemeinsam betrachten",
        "loesungen": [
         "Mensch, Tier und Umwelt gemeinsam betrachten",
         "ganzheitlicher Ansatz",
         "Mensch, Tier, Umwelt zusammen",
         "ganzheitlicher Gesundheitsansatz"
        ]
       },
       "stelle": "dass wir Mensch, Tier und Umwelt gemeinsam betrachten müssen",
       "erklaerung": "Als „wichtigste Schlussfolgerung\" markiert: Sparsamkeit nur im Krankenhaus reicht nicht.",
       "frage": "Ergänze deine Notiz auf dem Handzettel."
      }
     ]
    }
   ]
  },
  {
   "id": "tc1hl2",
   "titel": "Prüfungslauf 2",
   "minuten": 40,
   "teile": [
    {
     "nr": 1,
     "art": "diskussion",
     "aufgaben": [
      {
       "von": "Person 1 — Studentin der Meteorologie",
       "wer": "Frau",
       "text": "Schon als Kind habe ich jeden Abend aus dem Fenster geschaut und versucht vorherzusagen, ob es am nächsten Tag regnet. Ich hatte sogar eine kleine Wetterstation im Garten und habe alles in ein Heft eingetragen. Dass man das richtig studieren kann, habe ich erst spät erfahren. Aber dann war die Entscheidung sofort klar, ich musste gar nicht lange überlegen.",
       "loesung": 9,
       "stelle": "Schon als Kind habe ich jeden Abend aus dem Fenster geschaut",
       "erklaerung": "Ihr Kindheitsinteresse am Wetter wird zum Studienfach.",
       "frage": "Welche Aussage passt zu dieser Person?",
       "opt": [
        "Ein Schulpraktikum hat mich auf das Fach gebracht.",
        "Ich habe mich gegen den ausdrücklichen Rat meiner Eltern entschieden.",
        "Mir waren vor allem gute Berufsaussichten wichtig.",
        "Das Fach war eigentlich nur meine zweite Wahl, inzwischen bin ich froh darüber.",
        "Ich habe erst nach einem Studienwechsel das Richtige gefunden.",
        "Ein bestimmtes Buch hat mein Interesse geweckt.",
        "Ich möchte mit meinem Fach gesellschaftlich etwas bewirken.",
        "Durch eine Berufsausbildung habe ich gemerkt, dass mir die Theorie fehlte.",
        "Ich habe mich auf das Ergebnis eines Studienwahltests verlassen.",
        "Ich wollte eine Leidenschaft aus meiner Kindheit zum Beruf machen."
       ],
       "fest": true
      },
      {
       "von": "Person 2 — Student der Musikwissenschaft",
       "wer": "Mann",
       "text": "Mein Vater ist Zahnarzt, und für ihn war klar, dass ich die Praxis übernehme. Als ich ihm gesagt habe, dass ich Musikwissenschaft studieren will, hat er wochenlang kaum mit mir gesprochen. Er meinte, damit würde ich nie Geld verdienen. Vielleicht hat er sogar recht. Aber ich hätte es mir nie verziehen, es nicht wenigstens versucht zu haben.",
       "loesung": 1,
       "stelle": "hat er wochenlang kaum mit mir gesprochen",
       "erklaerung": "Er entscheidet sich gegen den Willen des Vaters. Ein Hobby aus der Kindheit erwähnt er nicht.",
       "frage": "Welche Aussage passt zu dieser Person?",
       "opt": [
        "Ein Schulpraktikum hat mich auf das Fach gebracht.",
        "Ich habe mich gegen den ausdrücklichen Rat meiner Eltern entschieden.",
        "Mir waren vor allem gute Berufsaussichten wichtig.",
        "Das Fach war eigentlich nur meine zweite Wahl, inzwischen bin ich froh darüber.",
        "Ich habe erst nach einem Studienwechsel das Richtige gefunden.",
        "Ein bestimmtes Buch hat mein Interesse geweckt.",
        "Ich möchte mit meinem Fach gesellschaftlich etwas bewirken.",
        "Durch eine Berufsausbildung habe ich gemerkt, dass mir die Theorie fehlte.",
        "Ich habe mich auf das Ergebnis eines Studienwahltests verlassen.",
        "Ich wollte eine Leidenschaft aus meiner Kindheit zum Beruf machen."
       ],
       "fest": true
      },
      {
       "von": "Person 3 — Studentin der Ernährungswissenschaft",
       "wer": "Frau",
       "text": "Eigentlich wollte ich Medizin studieren, aber mein Notendurchschnitt hat nicht gereicht. Ernährungswissenschaft war eher eine Notlösung, das gebe ich zu. Inzwischen merke ich aber, dass mich genau die Fragen hier viel mehr interessieren, zum Beispiel wie Ernährung Krankheiten verhindert. Ich würde heute gar nicht mehr wechseln, selbst wenn ich einen Medizinstudienplatz bekäme.",
       "loesung": 3,
       "stelle": "war eher eine Notlösung, das gebe ich zu",
       "erklaerung": "Sie hat das Fach nicht gewechselt, es war von Anfang an nur die zweite Wahl.",
       "frage": "Welche Aussage passt zu dieser Person?",
       "opt": [
        "Ein Schulpraktikum hat mich auf das Fach gebracht.",
        "Ich habe mich gegen den ausdrücklichen Rat meiner Eltern entschieden.",
        "Mir waren vor allem gute Berufsaussichten wichtig.",
        "Das Fach war eigentlich nur meine zweite Wahl, inzwischen bin ich froh darüber.",
        "Ich habe erst nach einem Studienwechsel das Richtige gefunden.",
        "Ein bestimmtes Buch hat mein Interesse geweckt.",
        "Ich möchte mit meinem Fach gesellschaftlich etwas bewirken.",
        "Durch eine Berufsausbildung habe ich gemerkt, dass mir die Theorie fehlte.",
        "Ich habe mich auf das Ergebnis eines Studienwahltests verlassen.",
        "Ich wollte eine Leidenschaft aus meiner Kindheit zum Beruf machen."
       ],
       "fest": true
      },
      {
       "von": "Person 4 — Student des Umweltingenieurwesens",
       "wer": "Mann",
       "text": "In meiner Heimatregion wurde jahrelang Braunkohle abgebaut, und ich habe gesehen, was das mit den Dörfern und den Böden macht. Irgendwann wollte ich nicht mehr nur darüber schimpfen. Ich will genau verstehen, wie man solche zerstörten Flächen wieder nutzbar macht, und später an Lösungen mitarbeiten, die den Menschen dort wirklich helfen.",
       "loesung": 6,
       "stelle": "die den Menschen dort wirklich helfen",
       "erklaerung": "Sein Motiv ist, gesellschaftlich etwas zu verändern, nicht der sichere Job.",
       "frage": "Welche Aussage passt zu dieser Person?",
       "opt": [
        "Ein Schulpraktikum hat mich auf das Fach gebracht.",
        "Ich habe mich gegen den ausdrücklichen Rat meiner Eltern entschieden.",
        "Mir waren vor allem gute Berufsaussichten wichtig.",
        "Das Fach war eigentlich nur meine zweite Wahl, inzwischen bin ich froh darüber.",
        "Ich habe erst nach einem Studienwechsel das Richtige gefunden.",
        "Ein bestimmtes Buch hat mein Interesse geweckt.",
        "Ich möchte mit meinem Fach gesellschaftlich etwas bewirken.",
        "Durch eine Berufsausbildung habe ich gemerkt, dass mir die Theorie fehlte.",
        "Ich habe mich auf das Ergebnis eines Studienwahltests verlassen.",
        "Ich wollte eine Leidenschaft aus meiner Kindheit zum Beruf machen."
       ],
       "fest": true
      },
      {
       "von": "Person 5 — Studentin der Archäologie",
       "wer": "Frau",
       "text": "Mit fünfzehn habe ich im Urlaub einen Roman über eine Ausgrabung in Ägypten gelesen. Ich weiß, das klingt fast kitschig. Aber dieses eine Buch hat mich nicht mehr losgelassen, ich habe danach alles gelesen, was ich zu dem Thema finden konnte. Heute weiß ich natürlich, dass Grabungsalltag viel weniger abenteuerlich ist, aber die Faszination ist geblieben.",
       "loesung": 5,
       "stelle": "dieses eine Buch hat mich nicht mehr losgelassen",
       "erklaerung": "Auslöser war ein Roman, nicht ein Praktikum oder ein Kindheitshobby.",
       "frage": "Welche Aussage passt zu dieser Person?",
       "opt": [
        "Ein Schulpraktikum hat mich auf das Fach gebracht.",
        "Ich habe mich gegen den ausdrücklichen Rat meiner Eltern entschieden.",
        "Mir waren vor allem gute Berufsaussichten wichtig.",
        "Das Fach war eigentlich nur meine zweite Wahl, inzwischen bin ich froh darüber.",
        "Ich habe erst nach einem Studienwechsel das Richtige gefunden.",
        "Ein bestimmtes Buch hat mein Interesse geweckt.",
        "Ich möchte mit meinem Fach gesellschaftlich etwas bewirken.",
        "Durch eine Berufsausbildung habe ich gemerkt, dass mir die Theorie fehlte.",
        "Ich habe mich auf das Ergebnis eines Studienwahltests verlassen.",
        "Ich wollte eine Leidenschaft aus meiner Kindheit zum Beruf machen."
       ],
       "fest": true
      },
      {
       "von": "Person 6 — Student des Wirtschaftsingenieurwesens",
       "wer": "Mann",
       "text": "Angefangen habe ich mit Physik, weil ich in der Schule gut darin war. Nach drei Semestern habe ich gemerkt, dass mir die reine Theorie zu abstrakt ist. Ich wollte sehen, wofür das alles gut ist. Der Wechsel hat mich ein Jahr gekostet, aber seitdem gehe ich wirklich gern in die Vorlesungen. Das hätte ich mir früher nicht vorstellen können.",
       "loesung": 4,
       "stelle": "Der Wechsel hat mich ein Jahr gekostet",
       "erklaerung": "Er hat tatsächlich das Studienfach gewechselt. Eine zweite Wahl wäre ein anderer Fall.",
       "frage": "Welche Aussage passt zu dieser Person?",
       "opt": [
        "Ein Schulpraktikum hat mich auf das Fach gebracht.",
        "Ich habe mich gegen den ausdrücklichen Rat meiner Eltern entschieden.",
        "Mir waren vor allem gute Berufsaussichten wichtig.",
        "Das Fach war eigentlich nur meine zweite Wahl, inzwischen bin ich froh darüber.",
        "Ich habe erst nach einem Studienwechsel das Richtige gefunden.",
        "Ein bestimmtes Buch hat mein Interesse geweckt.",
        "Ich möchte mit meinem Fach gesellschaftlich etwas bewirken.",
        "Durch eine Berufsausbildung habe ich gemerkt, dass mir die Theorie fehlte.",
        "Ich habe mich auf das Ergebnis eines Studienwahltests verlassen.",
        "Ich wollte eine Leidenschaft aus meiner Kindheit zum Beruf machen."
       ],
       "fest": true
      },
      {
       "von": "Person 7 — Studentin der Pharmazie",
       "wer": "Frau",
       "text": "Ich habe nach dem Abitur erst eine Ausbildung zur pharmazeutisch-technischen Assistentin gemacht. Die Arbeit in der Apotheke hat mir gefallen, aber ich habe ständig Medikamente herausgegeben, deren Wirkung ich nur oberflächlich verstand. Ich wollte wissen, was im Körper wirklich passiert. Deshalb habe ich mit fünfundzwanzig noch einmal angefangen zu studieren.",
       "loesung": 7,
       "stelle": "deren Wirkung ich nur oberflächlich verstand",
       "erklaerung": "In der Ausbildung fehlte ihr das tiefere Wissen. Das ist kein Schulpraktikum.",
       "frage": "Welche Aussage passt zu dieser Person?",
       "opt": [
        "Ein Schulpraktikum hat mich auf das Fach gebracht.",
        "Ich habe mich gegen den ausdrücklichen Rat meiner Eltern entschieden.",
        "Mir waren vor allem gute Berufsaussichten wichtig.",
        "Das Fach war eigentlich nur meine zweite Wahl, inzwischen bin ich froh darüber.",
        "Ich habe erst nach einem Studienwechsel das Richtige gefunden.",
        "Ein bestimmtes Buch hat mein Interesse geweckt.",
        "Ich möchte mit meinem Fach gesellschaftlich etwas bewirken.",
        "Durch eine Berufsausbildung habe ich gemerkt, dass mir die Theorie fehlte.",
        "Ich habe mich auf das Ergebnis eines Studienwahltests verlassen.",
        "Ich wollte eine Leidenschaft aus meiner Kindheit zum Beruf machen."
       ],
       "fest": true
      },
      {
       "von": "Person 8 — Student der Statistik",
       "wer": "Mann",
       "text": "Ich will ehrlich sein: Eine große Leidenschaft war es nicht. Ich habe mir angeschaut, in welchen Bereichen Fachkräfte dringend gesucht werden und wo man gut verdient. Statistik stand da ganz oben, und Mathematik lag mir sowieso. Inzwischen macht es mir durchaus Spaß, aber der Ausgangspunkt war eine ziemlich nüchterne Rechnung.",
       "loesung": 2,
       "stelle": "in welchen Bereichen Fachkräfte dringend gesucht werden",
       "erklaerung": "Er wählt nach Arbeitsmarkt und Gehalt. Einen Test oder Rat anderer nennt er nicht.",
       "frage": "Welche Aussage passt zu dieser Person?",
       "opt": [
        "Ein Schulpraktikum hat mich auf das Fach gebracht.",
        "Ich habe mich gegen den ausdrücklichen Rat meiner Eltern entschieden.",
        "Mir waren vor allem gute Berufsaussichten wichtig.",
        "Das Fach war eigentlich nur meine zweite Wahl, inzwischen bin ich froh darüber.",
        "Ich habe erst nach einem Studienwechsel das Richtige gefunden.",
        "Ein bestimmtes Buch hat mein Interesse geweckt.",
        "Ich möchte mit meinem Fach gesellschaftlich etwas bewirken.",
        "Durch eine Berufsausbildung habe ich gemerkt, dass mir die Theorie fehlte.",
        "Ich habe mich auf das Ergebnis eines Studienwahltests verlassen.",
        "Ich wollte eine Leidenschaft aus meiner Kindheit zum Beruf machen."
       ],
       "fest": true
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
         "text": "So, ich glaube, wir sind vollständig. Wir müssen heute die Einführungswoche festzurren, sonst wird es knapp. Fangen wir mit der Rückmeldung vom letzten Jahr an. Was ist dir im Kopf geblieben, Jonas?"
        },
        {
         "wer": "Mann",
         "text": "Vor allem, dass das Programm viel zu voll war. Viele Erstsemester haben geschrieben, sie hätten nach drei Tagen mit Vorträgen kaum noch etwas aufnehmen können. Die Kneipentour fanden fast alle gut, die Bibliotheksführung dagegen kaum jemand. Und einige haben angemerkt, dass sie am Ende der Woche immer noch nicht wussten, wie man sich für Seminare anmeldet."
        }
       ],
       "frage": "Die wichtigste Kritik der Erstsemester im letzten Jahr war, dass …",
       "opt": [
        "das Programm überladen war.",
        "die Kneipentour zu spät am Abend stattfand.",
        "es zu wenige Vorträge gegeben hatte."
       ],
       "loesung": 0,
       "stelle": "dass das Programm viel zu voll war",
       "erklaerung": "Die Kneipentour wurde gelobt; kritisiert wurde die Fülle des Programms."
      },
      {
       "ort": "Gespräch — Abschnitt 2",
       "zeilen": [
        {
         "wer": "Frau",
         "text": "Dann streichen wir die Bibliotheksführung? Das würde ja auch Zeit im Programm freimachen."
        },
        {
         "wer": "Mann",
         "text": "Ich würde sie nicht ganz streichen, sondern umbauen. Die Leute müssen ja trotzdem lernen, wie man Fachliteratur findet. Mein Vorschlag wäre eine kurze Suche in Kleingruppen, bei der jede Gruppe eine bestimmte Studie aufspüren muss. Das ist praktischer als eine Stunde Zuhören."
        }
       ],
       "frage": "Statt der bisherigen Bibliotheksführung schlägt Jonas vor, …",
       "opt": [
        "Kleingruppen eine bestimmte Studie suchen zu lassen.",
        "die Bibliotheksführung ersatzlos zu streichen.",
        "eine einstündige Einführung in die Fachliteratur anzubieten."
       ],
       "loesung": 0,
       "stelle": "bei der jede Gruppe eine bestimmte Studie aufspüren muss",
       "erklaerung": "Er will sie nicht streichen, sondern praktischer gestalten."
      },
      {
       "ort": "Gespräch — Abschnitt 3",
       "zeilen": [
        {
         "wer": "Frau",
         "text": "Gefällt mir. Allerdings müssen wir das mit der Bibliothek absprechen. Frau Ritter von der Fachbibliothek war letztes Jahr ziemlich verstimmt, weil wir die Führung kurzfristig verschoben hatten. Ich würde ihr dieses Mal lieber persönlich vorbeibringen, was wir vorhaben, statt nur eine Mail zu schreiben."
        }
       ],
       "frage": "Mit Frau Ritter von der Bibliothek möchte die Studentin …",
       "opt": [
        "nur kurz per Mail Kontakt aufnehmen.",
        "persönlich über die neuen Pläne sprechen.",
        "die Führung erneut kurzfristig verschieben."
       ],
       "loesung": 1,
       "stelle": "Ich würde ihr dieses Mal lieber persönlich vorbeibringen",
       "erklaerung": "Nach der Verstimmung im Vorjahr soll es kein bloßer Mailkontakt sein."
      },
      {
       "ort": "Gespräch — Abschnitt 4",
       "zeilen": [
        {
         "wer": "Mann",
         "text": "Gut. Nächster Punkt: die Stundenplanberatung. Die war letztes Jahr eigentlich sehr gefragt, aber wir hatten nur zwei Leute dafür eingeteilt, und die Schlange ging bis auf den Flur."
        },
        {
         "wer": "Frau",
         "text": "Dann brauchen wir dieses Mal mindestens vier. Und vielleicht sollten wir vorher ein kurzes Merkblatt verschicken, auf dem die häufigsten Fragen schon beantwortet sind. Dann kommen nur noch die, die wirklich ein spezielles Problem haben."
        }
       ],
       "frage": "Mit einem Merkblatt möchte die Studentin erreichen, dass …",
       "opt": [
        "die Stundenplanberatung ganz entfallen kann.",
        "die Schlange auf dem Flur besser organisiert wird.",
        "nur noch Erstsemester mit speziellen Fragen zur Beratung kommen."
       ],
       "loesung": 2,
       "stelle": "Dann kommen nur noch die, die wirklich ein spezielles Problem haben",
       "erklaerung": "Die Beratung bleibt und wird sogar aufgestockt; das Merkblatt soll sie entlasten."
      },
      {
       "ort": "Gespräch — Abschnitt 5",
       "zeilen": [
        {
         "wer": "Mann",
         "text": "Das Merkblatt kann ich schreiben. Was mir noch fehlt, ist ein Angebot für Leute, die nicht trinken oder nicht gern feiern. Die Kneipentour ist schön, aber das ist der einzige Abend, an dem man die anderen wirklich kennenlernt."
        },
        {
         "wer": "Frau",
         "text": "Stimmt, darauf hat uns auch die Gleichstellungsbeauftragte hingewiesen. Wie wäre ein Spieleabend in der Fachschaft, parallel zur Kneipentour?"
        }
       ],
       "frage": "Jonas vermisst bisher …",
       "opt": [
        "eine zweite Kneipentour am Ende der Woche.",
        "einen Hinweis der Gleichstellungsbeauftragten.",
        "ein geselliges Angebot für Leute, die nicht gern feiern."
       ],
       "loesung": 2,
       "stelle": "ein Angebot für Leute, die nicht trinken oder nicht gern feiern",
       "erklaerung": "Ihm fehlt eine Alternative zur Kneipentour, um andere kennenzulernen."
      },
      {
       "ort": "Gespräch — Abschnitt 6",
       "zeilen": [
        {
         "wer": "Mann",
         "text": "Parallel finde ich schwierig. Dann teilt sich der Jahrgang gleich am ersten Abend in zwei Lager. Ich würde den Spieleabend lieber auf einen anderen Tag legen, dann können alle zu beidem kommen."
        },
        {
         "wer": "Frau",
         "text": "Das ist ein guter Einwand. Dann machen wir den Spieleabend am Mittwoch und die Kneipentour wie gewohnt am Donnerstag. Dann haben wir auch genug Zeit, um die Räume vorzubereiten."
        }
       ],
       "frage": "Jonas ist gegen einen Spieleabend parallel zur Kneipentour, weil …",
       "opt": [
        "am Mittwoch die Fachschaftsräume belegt sind.",
        "sich der Jahrgang sonst von Anfang an aufteilen würde.",
        "er die Kneipentour am Donnerstag absagen möchte."
       ],
       "loesung": 1,
       "stelle": "Dann teilt sich der Jahrgang gleich am ersten Abend in zwei Lager",
       "erklaerung": "An getrennten Tagen können alle an beiden Angeboten teilnehmen."
      },
      {
       "ort": "Gespräch — Abschnitt 7",
       "zeilen": [
        {
         "wer": "Frau",
         "text": "Jetzt zum Geld. Der Studentenrat hat uns dieses Jahr weniger zugesagt als beantragt, nämlich sechshundert statt achthundert Euro."
        },
        {
         "wer": "Mann",
         "text": "Das ist ärgerlich, aber machbar. Letztes Jahr ist der größte Posten für das Frühstück am ersten Tag draufgegangen, und davon ist ehrlich gesagt die Hälfte übrig geblieben. Wenn wir nur noch die Hälfte einkaufen, fehlt uns fast nichts."
        }
       ],
       "frage": "Einsparen lässt sich nach Ansicht von Jonas vor allem …",
       "opt": [
        "beim Zuschuss des Studentenrats.",
        "beim Frühstück am ersten Tag.",
        "bei den Kosten für den Spieleabend."
       ],
       "loesung": 1,
       "stelle": "Wenn wir nur noch die Hälfte einkaufen, fehlt uns fast nichts",
       "erklaerung": "Vom Frühstück blieb im Vorjahr die Hälfte übrig."
      },
      {
       "ort": "Gespräch — Abschnitt 8",
       "zeilen": [
        {
         "wer": "Frau",
         "text": "Einverstanden. Dann bleibt das Thema Mentoren. Wir haben bisher nur elf Freiwillige aus höheren Semestern, bei voraussichtlich hundertzwanzig Erstsemestern."
        },
        {
         "wer": "Mann",
         "text": "Das reicht vorne und hinten nicht. Ich glaube, viele melden sich nicht, weil sie denken, sie müssten das ganze Semester über zur Verfügung stehen. Wenn wir klarmachen, dass es nur um die erste Woche und zwei Treffen danach geht, finden sich bestimmt mehr."
        }
       ],
       "frage": "Jonas glaubt, dass sich wenige Mentoren melden, weil …",
       "opt": [
        "in höheren Semestern zu viele Prüfungen anstehen.",
        "es dieses Jahr hundertzwanzig Erstsemester gibt.",
        "sie den zeitlichen Aufwand für größer halten, als er ist."
       ],
       "loesung": 2,
       "stelle": "weil sie denken, sie müssten das ganze Semester über zur Verfügung stehen",
       "erklaerung": "Tatsächlich geht es nur um die erste Woche und zwei weitere Treffen."
      },
      {
       "ort": "Gespräch — Abschnitt 9",
       "zeilen": [
        {
         "wer": "Frau",
         "text": "Dann sollten wir den Aufruf neu formulieren. Ich frage außerdem Professor Hartmann, ob er ihn in seiner Vorlesung für das fünfte Semester ankündigt. Über den Verteiler lesen das erfahrungsgemäß die wenigsten, aber wenn ein Professor es erwähnt, nehmen es die Leute ernster."
        }
       ],
       "frage": "Die Studentin möchte den Aufruf in einer Vorlesung ankündigen lassen, weil …",
       "opt": [
        "die Studenten ihn dann eher ernst nehmen.",
        "Professor Hartmann die Mentoren selbst auswählen möchte.",
        "der Verteiler im fünften Semester nicht funktioniert."
       ],
       "loesung": 0,
       "stelle": "nehmen es die Leute ernster",
       "erklaerung": "Der Verteiler funktioniert, wird aber kaum gelesen; die Ankündigung wirkt stärker."
      },
      {
       "ort": "Gespräch — Abschnitt 10",
       "zeilen": [
        {
         "wer": "Mann",
         "text": "Gut, dann fasse ich zusammen, wer was macht. Ich schreibe das Merkblatt und den neuen Mentorenaufruf. Du sprichst mit der Bibliothek und mit Professor Hartmann. Und den Spieleabend organisieren wir gemeinsam."
        },
        {
         "wer": "Frau",
         "text": "Richtig. Und das Frühstück übernimmt wie immer Lea, der sage ich heute noch Bescheid, dass sie weniger einkaufen soll. Wir treffen uns in zwei Wochen wieder und schauen, wo wir stehen."
        }
       ],
       "frage": "Laut der Zusammenfassung kümmert sich Jonas um …",
       "opt": [
        "das Merkblatt und den Aufruf für Mentoren.",
        "das Gespräch mit Professor Hartmann.",
        "den Einkauf für das Frühstück."
       ],
       "loesung": 0,
       "stelle": "Ich schreibe das Merkblatt und den neuen Mentorenaufruf",
       "erklaerung": "Bibliothek und Professor übernimmt sie, das Frühstück Lea."
      }
     ]
    },
    {
     "nr": 3,
     "art": "vortrag",
     "aufgaben": [
      {
       "ort": "Vortrag — Abschnitt 1",
       "wer": "Frau",
       "text": "Herzlich willkommen, liebe Studenten, zur heutigen Vorlesung. Wer schon einmal versucht hat, als Erwachsener eine Fremdsprache zu lernen, weiß, wie mühsam das sein kann. Umso erstaunlicher ist es, dass Kleinkinder ihre Muttersprache scheinbar mühelos erwerben, ohne Lehrbuch, ohne Grammatiktabellen und ohne Unterricht. Mit etwa vier Jahren beherrschen sie die Grundzüge ihrer Sprache, einschließlich komplizierter Satzstrukturen. Wie ist das möglich? Diese Frage beschäftigt Sprachwissenschaftler und Psychologen seit Jahrzehnten, und sie hat zu einer heftigen Kontroverse geführt. Die zentrale Frage lautet: Ist die Fähigkeit zur Sprache angeboren, oder wird sie aus der Umgebung erlernt? Diese Leitfrage wird uns durch die gesamte Sitzung begleiten. Ich werde Ihnen die Entwicklungsschritte vom Mutterleib bis zum dritten Lebensjahr vorstellen und am Ende eine Antwort vorschlagen.",
       "notiz": {
        "titel": "Handzettel: Folie 1 — Einleitung und Leitfrage",
        "zeilen": [
         "Kinder lernen ohne Unterricht",
         "mit etwa vier Jahren: Grundzüge der Sprache",
         "Aufbau: Mutterleib bis drittes Lebensjahr"
        ],
        "feld": "Leitfrage:",
        "frei": true,
        "muster": "Sprache angeboren oder erlernt?",
        "loesungen": [
         "angeboren oder erlernt?",
         "Sprache angeboren oder gelernt?",
         "angeboren oder aus der Umgebung gelernt",
         "Anlage oder Umwelt?"
        ]
       },
       "stelle": "Ist die Fähigkeit zur Sprache angeboren, oder wird sie aus der Umgebung erlernt?",
       "erklaerung": "Die Rednerin nennt die Frage ausdrücklich als Leitfrage der gesamten Sitzung.",
       "frage": "Ergänze deine Notiz auf dem Handzettel."
      },
      {
       "ort": "Vortrag — Abschnitt 2",
       "wer": "Frau",
       "text": "Der Spracherwerb beginnt früher, als die meisten Menschen vermuten, nämlich bereits vor der Geburt. Ab etwa dem sechsten Schwangerschaftsmonat kann das Ungeborene hören. Die Bauchdecke dämpft zwar die einzelnen Laute, die Melodie und der Rhythmus der Sprache dringen aber durch. Wie weiß man das? Ein besonders eindrucksvoller Beleg stammt aus der Untersuchung des Weinens von Neugeborenen. Forscher haben die Schreie von Säuglingen aus verschiedenen Ländern aufgenommen und akustisch analysiert. Dabei zeigte sich, dass die Schreimelodie bereits in den ersten Lebenstagen der Melodie der jeweiligen Muttersprache ähnelt. Französische Neugeborene schreien eher mit ansteigender Tonhöhe, deutsche eher mit abfallender, ganz so, wie es der typischen Betonung der beiden Sprachen entspricht. Die Kinder haben also im Mutterleib schon etwas gelernt.",
       "notiz": {
        "titel": "Handzettel: Folie 2 — Vor der Geburt",
        "zeilen": [
         "Hören ab etwa sechstem Schwangerschaftsmonat",
         "Melodie und Rhythmus dringen durch"
        ],
        "feld": "Beleg:",
        "frei": true,
        "muster": "Schreimelodie Neugeborener ähnelt der Muttersprache",
        "loesungen": [
         "Schreimelodie ähnelt der Muttersprache",
         "Babys weinen in der Melodie der Muttersprache",
         "Schreie klingen wie Muttersprache",
         "Weinen folgt Sprachmelodie"
        ]
       },
       "stelle": "die Schreimelodie bereits in den ersten Lebenstagen der Melodie der jeweiligen Muttersprache ähnelt",
       "erklaerung": "Der Beleg für vorgeburtliches Lernen: Neugeborene schreien in der Melodie ihrer Muttersprache.",
       "frage": "Ergänze deine Notiz auf dem Handzettel."
      },
      {
       "ort": "Vortrag — Abschnitt 3",
       "wer": "Frau",
       "text": "Nach der Geburt zeigt sich eine Fähigkeit, um die wir Erwachsene die Babys nur beneiden können. In den ersten Lebensmonaten können Säuglinge nahezu alle Laute unterscheiden, die in irgendeiner Sprache der Welt vorkommen. Ein deutsches Baby hört also problemlos Unterschiede, die etwa für japanische Ohren bedeutsam sind, für deutsche aber nicht. Diese universelle Fähigkeit geht jedoch verloren. Im Laufe der Zeit spezialisieren sich die Kinder auf die Laute ihrer Umgebungssprache, und gegen Ende des ersten Lebensjahres ist dieser Prozess weitgehend abgeschlossen. Das klingt zunächst nach einem Verlust, ist aber in Wahrheit ein Gewinn an Effizienz. Das Gehirn konzentriert sich auf die Unterschiede, die für die eigene Sprache wirklich zählen, und ignoriert die übrigen. Das erklärt übrigens, warum wir als Erwachsene bestimmte fremde Laute kaum noch auseinanderhalten können.",
       "notiz": {
        "titel": "Handzettel: Folie 3 — Lautwahrnehmung",
        "zeilen": [
         "anfangs: fast alle Laute aller Sprachen unterscheidbar",
         "dann: Spezialisierung auf Umgebungssprache",
         "Bewertung: Gewinn an Effizienz"
        ],
        "feld": "Spezialisierung abgeschlossen:",
        "frei": true,
        "muster": "gegen Ende des ersten Lebensjahres",
        "loesungen": [
         "Ende des ersten Lebensjahres",
         "mit etwa einem Jahr",
         "gegen Ende des ersten Jahres",
         "mit zwölf Monaten"
        ]
       },
       "stelle": "gegen Ende des ersten Lebensjahres ist dieser Prozess weitgehend abgeschlossen",
       "erklaerung": "Gefragt ist der Zeitpunkt: gegen Ende des ersten Lebensjahres.",
       "frage": "Ergänze deine Notiz auf dem Handzettel."
      },
      {
       "ort": "Vortrag — Abschnitt 4",
       "wer": "Frau",
       "text": "Parallel dazu beginnen die Kinder selbst zu produzieren. Mit etwa sechs Monaten setzt das sogenannte Lallen ein. Das Kind reiht Silben aneinander, also etwa ba ba ba oder da da da. Eltern deuten das gern als erstes Wort, aber dafür ist es noch zu früh. Welche Funktion hat das Lallen dann? Es dient in erster Linie dazu, den Sprechapparat zu trainieren. Das Kind lernt, Zunge, Lippen und Kehlkopf so zu koordinieren, dass bestimmte Laute entstehen, und es vergleicht das Ergebnis mit dem, was es hört. Ein faszinierender Befund stützt diese Deutung: Gehörlose Kinder, die mit Gebärdensprache aufwachsen, lallen ebenfalls, allerdings mit den Händen. Sie produzieren rhythmische Handbewegungen, die den Silben der Gebärdensprache ähneln. Das Lallen ist also kein bloßes Spiel mit der Stimme, sondern eine Übungsphase für die jeweilige Sprache.",
       "notiz": {
        "titel": "Handzettel: Folie 4 — Lallen",
        "zeilen": [
         "Beginn: mit etwa sechs Monaten",
         "Silbenketten, noch keine Wörter",
         "Befund: gehörlose Kinder lallen mit den Händen"
        ],
        "feld": "Hauptfunktion des Lallens:",
        "frei": true,
        "muster": "Training des Sprechapparats: Zunge, Lippen, Kehlkopf",
        "loesungen": [
         "Sprechapparat trainieren",
         "Training des Sprechapparats",
         "Zunge, Lippen, Kehlkopf koordinieren",
         "Übung für die Sprache"
        ]
       },
       "stelle": "Es dient in erster Linie dazu, den Sprechapparat zu trainieren",
       "erklaerung": "„in erster Linie\" markiert die Hauptfunktion; das Lallen ist eine Übungsphase.",
       "frage": "Ergänze deine Notiz auf dem Handzettel."
      },
      {
       "ort": "Vortrag — Abschnitt 5",
       "wer": "Frau",
       "text": "Um den ersten Geburtstag herum ist es dann so weit: Die ersten echten Wörter erscheinen. Typischerweise sind das Bezeichnungen für Personen, für Dinge, die sich bewegen, oder für soziale Handlungen wie winken. In den folgenden Monaten geht es zunächst recht langsam voran, oft kommen nur wenige Wörter pro Woche hinzu. Dann aber geschieht etwas Bemerkenswertes. Sobald ein Kind etwa fünfzig Wörter aktiv beherrscht, beschleunigt sich das Lernen schlagartig. Man spricht vom Wortschatzspurt oder sogar von einer Wortschatzexplosion. Manche Kinder lernen in dieser Phase täglich mehrere neue Wörter. Erklärt wird dieser Sprung damit, dass die Kinder nun begriffen haben, dass alle Dinge einen Namen haben. Typisch für diese Phase ist deshalb auch die unermüdliche Frage, was ist das?",
       "notiz": {
        "titel": "Handzettel: Folie 5 — Erste Wörter",
        "zeilen": [
         "erste Wörter: um den ersten Geburtstag",
         "danach zunächst langsam",
         "Erklärung: Kind begreift, dass alles einen Namen hat"
        ],
        "feld": "Schwelle zur Wortschatzexplosion:",
        "frei": true,
        "muster": "etwa fünfzig aktive Wörter",
        "loesungen": [
         "etwa fünfzig Wörter",
         "fünfzig Wörter",
         "50 Wörter",
         "ca. 50 aktive Wörter"
        ]
       },
       "stelle": "Sobald ein Kind etwa fünfzig Wörter aktiv beherrscht",
       "erklaerung": "Ab etwa fünfzig aktiven Wörtern beschleunigt sich das Lernen schlagartig.",
       "frage": "Ergänze deine Notiz auf dem Handzettel."
      },
      {
       "ort": "Vortrag — Abschnitt 6",
       "wer": "Frau",
       "text": "Etwa ab dem zweiten Lebensjahr beginnen Kinder, Wörter zu Sätzen zu verbinden, und damit kommt die Grammatik ins Spiel. Besonders aufschlussreich sind hier die Fehler. Ein Kind sagt beispielsweise: Ich gehte in den Garten. Diese Form hat es mit Sicherheit nie von einem Erwachsenen gehört. Und interessanterweise sagen dieselben Kinder einige Monate vorher oft noch korrekt ging, weil sie die Form als Ganzes auswendig gelernt haben. Was ist also passiert? Das Kind hat inzwischen die Regel entdeckt, dass man die Vergangenheit mit der Endung te bildet, und wendet diese Regel nun auch auf unregelmäßige Verben an. Solche Fehler sind also kein Rückschritt, sondern ein Beleg dafür, dass Kinder nicht einfach nachahmen, sondern selbstständig Regeln bilden. Für die Anhänger der These vom angeborenen Sprachvermögen ist das ein zentrales Argument.",
       "notiz": {
        "titel": "Handzettel: Folie 6 — Grammatik",
        "zeilen": [
         "Fehlerbeispiel: „Ich gehte …\"",
         "vorher korrekt „ging\" – auswendig gelernt",
         "Argument für angeborenes Sprachvermögen"
        ],
        "feld": "Was solche Fehler zeigen:",
        "frei": true,
        "muster": "Kinder bilden selbst Regeln, ahmen nicht nur nach",
        "loesungen": [
         "Kinder bilden selbstständig Regeln",
         "eigene Regelbildung statt Nachahmen",
         "Regelbildung",
         "kein Rückschritt, sondern Regelbildung"
        ]
       },
       "stelle": "dass Kinder nicht einfach nachahmen, sondern selbstständig Regeln bilden",
       "erklaerung": "„gehte\" kann nicht nachgeahmt sein; das Kind wendet eine selbst entdeckte Regel an.",
       "frage": "Ergänze deine Notiz auf dem Handzettel."
      },
      {
       "ort": "Vortrag — Abschnitt 7",
       "wer": "Frau",
       "text": "Das heißt aber nicht, dass die Umgebung keine Rolle spielt. Lange ging man davon aus, dass vor allem die Menge an Sprache entscheidend sei, die ein Kind hört. Eine Langzeitstudie des Instituts für Entwicklungsforschung in Bramstedt hat dieses Bild deutlich verfeinert. Die Forscher statteten Familien mit kleinen Aufnahmegeräten aus und werteten viele tausend Stunden Alltagsgespräche aus. Das Ergebnis: Ausschlaggebend für die spätere Sprachentwicklung war nicht die bloße Zahl der Wörter, die das Kind hörte, sondern die Zahl der Wechselgespräche, also wie oft Kind und Erwachsener abwechselnd aufeinander reagierten. Ein Kind, das nebenbei viel Radio hört oder Gesprächen der Erwachsenen lauscht, profitiert also weit weniger als eines, mit dem tatsächlich gesprochen wird, auch wenn es sich nur um kurze, einfache Wortwechsel handelt.",
       "notiz": {
        "titel": "Handzettel: Folie 7 — Rolle der Bezugspersonen",
        "zeilen": [
         "frühere Annahme: Menge der gehörten Sprache",
         "Langzeitstudie Bramstedt: Aufnahmen im Alltag",
         "Radio nebenbei: wenig Nutzen"
        ],
        "feld": "Ausschlaggebender Faktor:",
        "frei": true,
        "muster": "Zahl der Wechselgespräche",
        "loesungen": [
         "Wechselgespräche",
         "Zahl der Wechselgespräche",
         "Hin und Her im Gespräch",
         "abwechselndes Reagieren"
        ]
       },
       "stelle": "sondern die Zahl der Wechselgespräche",
       "erklaerung": "„nicht … sondern\": Nicht die Wortmenge, sondern die Wechselgespräche entscheiden.",
       "frage": "Ergänze deine Notiz auf dem Handzettel."
      },
      {
       "ort": "Vortrag — Abschnitt 8",
       "wer": "Frau",
       "text": "Damit liegt eine Frage nahe, die viele Eltern beschäftigt: Können Kleinkinder auch von Bildschirmen lernen, etwa von speziellen Lernvideos? Auch hierzu gibt es eine aufschlussreiche Untersuchung. Kinder im Alter von etwa einem Jahr wurden in zwei Gruppen aufgeteilt. Die eine Gruppe bekam über mehrere Wochen hinweg Wörter einer fremden Sprache von einer echten Person vorgesprochen, die mit ihnen spielte. Die andere Gruppe sah dieselbe Person mit exakt denselben Inhalten auf einem Bildschirm. Die Kinder der ersten Gruppe konnten die fremden Laute anschließend unterscheiden. Bei den Kindern vor dem Bildschirm war dagegen so gut wie kein Lerneffekt nachweisbar. Offenbar braucht das Gehirn in diesem Alter die soziale Interaktion, also Blickkontakt und unmittelbare Reaktion, um Sprache überhaupt als bedeutsam einzustufen.",
       "notiz": {
        "titel": "Handzettel: Folie 8 — Lernen am Bildschirm",
        "zeilen": [
         "Gruppe A: echte Person, spielt mit Kind → lernt Laute",
         "Gruppe B: gleiche Person auf Bildschirm",
         "Erklärung: soziale Interaktion nötig"
        ],
        "feld": "Ergebnis Gruppe B:",
        "frei": true,
        "muster": "so gut wie kein Lerneffekt",
        "loesungen": [
         "kein Lerneffekt",
         "so gut wie kein Lerneffekt",
         "fast nichts gelernt",
         "kaum Lernerfolg"
        ]
       },
       "stelle": "so gut wie kein Lerneffekt nachweisbar",
       "erklaerung": "Trotz identischer Inhalte lernten die Kinder vor dem Bildschirm praktisch nichts.",
       "frage": "Ergänze deine Notiz auf dem Handzettel."
      },
      {
       "ort": "Vortrag — Abschnitt 9",
       "wer": "Frau",
       "text": "Ein Wort noch zur Mehrsprachigkeit, denn hier halten sich hartnäckige Mythen. Viele Eltern fürchten, dass ein Kind durcheinanderkommt, wenn es mit zwei Sprachen aufwächst. Als Beleg wird oft angeführt, dass mehrsprachige Kinder Wörter aus beiden Sprachen in einem Satz mischen. Die Forschung bewertet dieses Sprachmischen jedoch völlig anders. Es ist ein normaler Bestandteil der mehrsprachigen Entwicklung und kein Zeichen von Verwirrung. Schon sehr früh können diese Kinder ihre Sprachen trennen und wählen gezielt die Sprache, die ihr Gegenüber versteht. Gemischt wird vor allem dann, wenn ein Wort in der einen Sprache gerade fehlt, und das tun mehrsprachige Erwachsene übrigens genauso. Zwar kann der Wortschatz in jeder einzelnen Sprache anfangs etwas kleiner sein, zusammengenommen ist er aber mindestens ebenso groß.",
       "notiz": {
        "titel": "Handzettel: Folie 9 — Mehrsprachigkeit",
        "zeilen": [
         "Mythos: zwei Sprachen verwirren",
         "Kinder trennen Sprachen früh",
         "Wortschatz gesamt: mindestens gleich groß"
        ],
        "feld": "Bewertung des Sprachmischens:",
        "frei": true,
        "muster": "normal, kein Zeichen von Verwirrung",
        "loesungen": [
         "normal, keine Verwirrung",
         "normaler Teil der Entwicklung",
         "kein Zeichen von Verwirrung",
         "ganz normal"
        ]
       },
       "stelle": "Es ist ein normaler Bestandteil der mehrsprachigen Entwicklung und kein Zeichen von Verwirrung",
       "erklaerung": "Die Forschung widerspricht dem Mythos: Mischen ist normal und kein Zeichen von Verwirrung.",
       "frage": "Ergänze deine Notiz auf dem Handzettel."
      },
      {
       "ort": "Vortrag — Abschnitt 10",
       "wer": "Frau",
       "text": "Kommen wir zum Schluss auf unsere Leitfrage zurück: Ist Sprache angeboren oder erlernt? Sie haben vermutlich schon geahnt, dass die Antwort nicht eindeutig zugunsten einer Seite ausfällt. Die Regelbildung, die wir bei Fehlern wie gehte beobachten, spricht für eine angeborene Lernbereitschaft. Die Studien zu Wechselgesprächen und zum Lernen am Bildschirm zeigen dagegen, wie unverzichtbar die soziale Umgebung ist. Meine Antwort lautet daher: Es ist beides. Kinder bringen eine angeborene Veranlagung mit, Sprache zu lernen, aber diese Veranlagung entfaltet sich nur im echten Austausch mit anderen Menschen. Für die Praxis bedeutet das: Das Wichtigste, was Eltern tun können, ist nicht, Lernprogramme zu kaufen, sondern mit ihren Kindern zu sprechen und ihnen zuzuhören. Vielen Dank, und bis zur nächsten Woche.",
       "notiz": {
        "titel": "Handzettel: Folie 10 — Fazit",
        "zeilen": [
         "für Anlage: Regelbildung",
         "für Umwelt: Wechselgespräche, Bildschirmstudie",
         "Tipp für Eltern: sprechen und zuhören"
        ],
        "feld": "Antwort auf die Leitfrage:",
        "frei": true,
        "muster": "beides: Veranlagung plus echter Austausch",
        "loesungen": [
         "beides",
         "beides: angeboren und erlernt",
         "Veranlagung plus Interaktion",
         "angeborene Anlage, entfaltet sich im Austausch"
        ]
       },
       "stelle": "Es ist beides. Kinder bringen eine angeborene Veranlagung mit, Sprache zu lernen",
       "erklaerung": "Die Rednerin entscheidet sich für keine Seite: angeborene Veranlagung, die soziale Interaktion braucht.",
       "frage": "Ergänze deine Notiz auf dem Handzettel."
      }
     ]
    }
   ]
  }
 ]
};
