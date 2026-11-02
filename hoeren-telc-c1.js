/* ============================================================
   deutschoderwas club — HÖREN telc Deutsch C1

   Aufbau nach dem offiziellen telc-Format (telc „Tipps zur
   Prüfungsvorbereitung", Übungstest 1 Deutsch C1, geprüft 02.11.2026).
   Alle Texte und Aufgaben eigene, nur das Format ist nachgebaut.
   Erzeugt aus scratchpad/telcc1g mit bau.js.
   ============================================================ */

window.HOEREN_TELC_C1 = {
 "niveau": "telcC1",
 "pruefung": "telc Deutsch C1",
 "minuten": 40,
 "punkte": 28,
 "intro": "Der Hören-Teil bei telc C1 dauert etwa vierzig Minuten, und jeder Text läuft nur EINMAL: acht kurze Äußerungen aus einer Umfrage, ein Gespräch und ein Vortrag von etwa zehn Minuten, bei dem du einen Handzettel mit Notizen ergänzt. Wir üben erst die Strategien, dann jeden Teil einzeln, zuletzt alles am Stück. Nach jeder Antwort siehst du den Text mit der entscheidenden Stelle.",
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
   "id": "tg1h1",
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
     "ort": "Thema: Großraumbüro",
     "wer": "Frau",
     "text": "Klar, es ist manchmal laut, und wer telefoniert, stört die anderen. Trotzdem möchte ich nicht zurück in ein Einzelbüro, weil ich hier viel schneller mitbekomme, was im Team los ist.",
     "frage": "Welche Haltung hat die Frau zum Großraumbüro?",
     "opt": [
      "Sie lehnt es wegen des Lärms ab.",
      "Sie schätzt es trotz bekannter Nachteile.",
      "Sie findet es nur für Telefonate geeignet."
     ],
     "loesung": 1,
     "stelle": "Trotzdem möchte ich nicht zurück in ein Einzelbüro",
     "erklaerung": "Die Nachteile werden eingeräumt, „Trotzdem\" leitet die eigentliche Position ein."
    },
    {
     "art": "hoerwahl",
     "ort": "Thema: Lieferdienste",
     "wer": "Mann",
     "text": "Am Anfang habe ich mir fast alles nach Hause liefern lassen, das war unglaublich bequem. Mittlerweile stört mich aber, wie viele Kartons sich jede Woche stapeln. Ich gehe deshalb wieder selbst einkaufen.",
     "frage": "Was sagt der Mann über Lieferdienste?",
     "opt": [
      "Er kauft heute lieber wieder im Geschäft ein.",
      "Er findet sie nach wie vor ideal.",
      "Er fordert, dass sie weniger Verpackung verwenden."
     ],
     "loesung": 0,
     "stelle": "Ich gehe deshalb wieder selbst einkaufen",
     "erklaerung": "„Mittlerweile\" markiert einen Meinungswechsel. Gefragt ist die heutige Haltung."
    },
    {
     "art": "hoerwahl",
     "ort": "Thema: Tempolimit in der Stadt",
     "wer": "Frau",
     "text": "Grundsätzlich bin ich gegen ein flächendeckendes Tempo dreißig. Vor Schulen und Kindergärten fände ich es allerdings vernünftig, sofern es auch wirklich kontrolliert wird.",
     "frage": "Wie steht die Frau zu Tempo dreißig?",
     "opt": [
      "Sie fordert es für die ganze Stadt.",
      "Sie lehnt es in jedem Fall ab.",
      "Sie befürwortet es nur an bestimmten Orten unter einer Bedingung."
     ],
     "loesung": 2,
     "stelle": "sofern es auch wirklich kontrolliert wird",
     "erklaerung": "„allerdings\" schränkt ein, „sofern\" nennt die Bedingung. Die Haltung ist differenziert."
    },
    {
     "art": "hoerwahl",
     "ort": "Thema: Soziale Medien",
     "wer": "Mann",
     "text": "Man hört oft, soziale Netzwerke würden die Menschen verbinden. Ich erlebe eher das Gegenteil: Bei uns am Familientisch schaut jeder auf sein eigenes Display, und keiner redet mehr.",
     "frage": "Was denkt der Mann über soziale Netzwerke?",
     "opt": [
      "Sie bringen Familien näher zusammen.",
      "Sie verdrängen echte Gespräche.",
      "Sie sind für ihn persönlich unwichtig."
     ],
     "loesung": 1,
     "stelle": "Ich erlebe eher das Gegenteil",
     "erklaerung": "„Man hört oft\" gibt eine fremde Meinung wieder. Seine eigene beginnt mit „Ich erlebe eher das Gegenteil\"."
    },
    {
     "art": "hoerwahl",
     "ort": "Thema: Wohnen im Mehrgenerationenhaus",
     "wer": "Frau",
     "text": "Die Abstimmungen in der Hausversammlung dauern ewig, und nicht jeder hält sich an den Putzplan. Aber für mich als alleinerziehende Mutter kann ich mir nichts Besseres vorstellen, irgendjemand hat immer Zeit für die Kinder.",
     "frage": "Wie bewertet die Frau das Mehrgenerationenhaus?",
     "opt": [
      "In ihrer Lebenslage hält sie es für ideal.",
      "Sie möchte dort möglichst bald ausziehen.",
      "Sie schätzt vor allem die Hausversammlungen."
     ],
     "loesung": 0,
     "stelle": "kann ich mir nichts Besseres vorstellen",
     "erklaerung": "Die Nachteile stehen vorne, die Gesamtbewertung nach „Aber\"."
    },
    {
     "art": "hoerwahl",
     "ort": "Thema: Selbstbedienungskassen",
     "wer": "Mann",
     "text": "Ich verstehe, dass Supermärkte Personalkosten sparen wollen. Nur frage ich mich, ob es klug ist, wenn man in manchen Filialen überhaupt keinen Menschen mehr ansprechen kann.",
     "frage": "Welche Haltung zeigt der Mann?",
     "opt": [
      "Er begrüßt die Automatisierung uneingeschränkt.",
      "Er hält Sparmaßnahmen für überflüssig.",
      "Er äußert Bedenken trotz Verständnis für die Gründe."
     ],
     "loesung": 2,
     "stelle": "Nur frage ich mich, ob es klug ist",
     "erklaerung": "Verständnis zuerst, dann vorsichtige Kritik. Die Frageform drückt hier Zweifel aus."
    },
    {
     "art": "hoerwahl",
     "ort": "Thema: Minijob am Wochenende",
     "wer": "Frau",
     "text": "Ich arbeite samstags in einer Gärtnerei. Das Geld ist eher Nebensache, wichtiger ist, dass ich nach einer Woche am Computer endlich etwas mit den Händen mache.",
     "frage": "Warum hat die Frau einen Wochenendjob?",
     "opt": [
      "Sie ist auf das zusätzliche Einkommen angewiesen.",
      "Sie sucht einen Ausgleich zu ihrer Büroarbeit.",
      "Sie möchte später beruflich umsteigen."
     ],
     "loesung": 1,
     "stelle": "wichtiger ist, dass ich nach einer Woche am Computer",
     "erklaerung": "„eher Nebensache\" entkräftet das Geld, „wichtiger ist\" zeigt das eigentliche Motiv."
    },
    {
     "art": "hoerwahl",
     "ort": "Thema: Elternabende",
     "wer": "Mann",
     "text": "Ich hätte nie gedacht, dass ich mich im Elternbeirat engagiere, ich fand diese Abende immer endlos und langweilig. Seit ich dabei bin, merke ich aber, wie viel man für die Schule tatsächlich erreichen kann.",
     "frage": "Was sagt der Mann über den Elternbeirat?",
     "opt": [
      "Er hat seine Vorurteile inzwischen abgelegt.",
      "Er findet die Sitzungen nach wie vor langweilig.",
      "Er macht nur mit, weil es von ihm erwartet wird."
     ],
     "loesung": 0,
     "stelle": "merke ich aber, wie viel man für die Schule tatsächlich erreichen kann",
     "erklaerung": "„immer endlos und langweilig\" beschreibt die frühere Sicht, nicht die heutige."
    },
    {
     "art": "hoerwahl",
     "ort": "Thema: Bewertungen im Internet",
     "wer": "Frau",
     "text": "Ich habe die Sterne und Kommentare natürlich gelesen. Entschieden habe ich mich am Ende aber nach einem Gespräch mit meiner Nachbarin, die dort schon gewohnt hatte, das war viel aufschlussreicher.",
     "frage": "Welche Rolle spielten die Bewertungen für die Entscheidung der Frau?",
     "opt": [
      "Sie waren das wichtigste Kriterium.",
      "Sie hat sie bewusst ignoriert.",
      "Sie waren weniger entscheidend als eine persönliche Empfehlung."
     ],
     "loesung": 2,
     "stelle": "das war viel aufschlussreicher",
     "erklaerung": "Gelesen hat sie die Bewertungen, entscheidend war aber das Gespräch mit der Nachbarin."
    },
    {
     "art": "hoerwahl",
     "ort": "Thema: Pfandsystem für Kaffeebecher",
     "wer": "Mann",
     "text": "Die Idee, Einwegbecher durch Mehrwegbecher zu ersetzen, finde ich richtig. So, wie es jetzt läuft, bringt es aber wenig, weil man den Becher nur in der Filiale zurückgeben kann, in der man ihn gekauft hat.",
     "frage": "Wie beurteilt der Mann das Pfandsystem?",
     "opt": [
      "Die Idee ist gut, die Umsetzung mangelhaft.",
      "Er hält schon die Idee für falsch.",
      "Er findet es in der jetzigen Form sehr gelungen."
     ],
     "loesung": 0,
     "stelle": "So, wie es jetzt läuft, bringt es aber wenig",
     "erklaerung": "Er unterscheidet zwischen Idee und Praxis. Kritisiert wird nur die Umsetzung."
    }
   ]
  },
  {
   "id": "tg1h2",
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
     "ort": "Gespräch: Teambesprechung",
     "wer": "Frau",
     "text": "Ich habe den Termin mit dem Kunden verschoben. Die Präsentation war eigentlich fertig, aber der Kunde hat gestern noch neue Zahlen geschickt, und die müssen wir erst einarbeiten.",
     "frage": "Die Frau hat den Termin verschoben, weil …",
     "opt": [
      "… die Präsentation noch nicht begonnen war.",
      "… neue Informationen berücksichtigt werden müssen.",
      "… der Kunde keine Zeit hatte."
     ],
     "loesung": 1,
     "stelle": "die müssen wir erst einarbeiten",
     "erklaerung": "Die Präsentation war fertig. Der Grund sind die neuen Zahlen des Kunden."
    },
    {
     "art": "hoerwahl",
     "ort": "Gespräch: Werkstatt",
     "wer": "Mann",
     "text": "Die Bremsen sind in Ordnung, da müssen Sie sich keine Sorgen machen. Aber der Zahnriemen ist stark abgenutzt, und wenn der reißt, ist der Motor hinüber. Den sollten wir diese Woche noch tauschen.",
     "frage": "Der Mechaniker empfiehlt eine Reparatur, da …",
     "opt": [
      "… ein Bauteil bald ausfallen könnte.",
      "… die Bremsen nicht mehr sicher sind.",
      "… der Motor bereits beschädigt ist."
     ],
     "loesung": 0,
     "stelle": "der Zahnriemen ist stark abgenutzt",
     "erklaerung": "Die Bremsen werden nur erwähnt. Der Motor ist noch nicht kaputt, es droht nur ein Schaden."
    },
    {
     "art": "hoerwahl",
     "ort": "Gespräch: Mieterversammlung",
     "wer": "Frau",
     "text": "Die Hausverwaltung will den Innenhof neu gestalten. Gegen die Bänke hat niemand etwas, umstritten sind nur die Fahrradständer, weil dafür zwei alte Bäume gefällt werden müssten.",
     "frage": "In der Mieterversammlung wird vor allem über … gestritten.",
     "opt": [
      "… die neuen Sitzbänke.",
      "… die Kosten der Umgestaltung.",
      "… die Fahrradständer und die Bäume."
     ],
     "loesung": 2,
     "stelle": "umstritten sind nur die Fahrradständer",
     "erklaerung": "Die Bänke sind unstrittig, Kosten werden nicht erwähnt."
    },
    {
     "art": "hoerwahl",
     "ort": "Gespräch: Personalabteilung",
     "wer": "Mann",
     "text": "Ihr Antrag auf Teilzeit ist grundsätzlich genehmigt. Offen ist nur noch, ob Sie montags oder freitags frei haben, darüber müssen Sie sich mit Ihrem Team abstimmen.",
     "frage": "Noch nicht entschieden ist, …",
     "opt": [
      "… ob der Antrag genehmigt wird.",
      "… an welchem Tag die Frau frei hat.",
      "… wie viele Stunden sie arbeiten wird."
     ],
     "loesung": 1,
     "stelle": "Offen ist nur noch, ob Sie montags oder freitags frei haben",
     "erklaerung": "Der Antrag ist genehmigt. „Offen ist nur noch\" zeigt das ungeklärte Detail."
    },
    {
     "art": "hoerwahl",
     "ort": "Gespräch: Arztpraxis",
     "wer": "Frau",
     "text": "Ihre Blutwerte sind insgesamt gut. Auffällig ist nur der Vitamin-D-Wert, der ist recht niedrig. Bevor wir etwas verschreiben, sollten Sie einfach mehr Zeit im Freien verbringen, und in drei Monaten kontrollieren wir das noch einmal.",
     "frage": "Die Ärztin rät dem Patienten zunächst, …",
     "opt": [
      "… mehr Zeit draußen zu verbringen.",
      "… sofort ein Medikament zu nehmen.",
      "… seine Ernährung umzustellen."
     ],
     "loesung": 0,
     "stelle": "sollten Sie einfach mehr Zeit im Freien verbringen",
     "erklaerung": "Ein Medikament kommt erst später infrage, falls nötig. Ernährung wird nicht erwähnt."
    },
    {
     "art": "hoerwahl",
     "ort": "Gespräch: Vereinsvorstand",
     "wer": "Mann",
     "text": "Das Sommerfest findet dieses Jahr nicht auf dem Sportplatz statt. Der Platz wäre frei gewesen, aber die Gemeinde verlangt seit Neuestem ein Sicherheitskonzept, und das schaffen wir zeitlich nicht mehr.",
     "frage": "Das Fest findet nicht auf dem Sportplatz statt, weil …",
     "opt": [
      "… der Platz schon vergeben ist.",
      "… die Gemeinde das Fest verboten hat.",
      "… eine neue Auflage nicht rechtzeitig erfüllt werden kann."
     ],
     "loesung": 2,
     "stelle": "das schaffen wir zeitlich nicht mehr",
     "erklaerung": "Der Platz wäre frei gewesen. Es fehlt die Zeit für das geforderte Sicherheitskonzept."
    },
    {
     "art": "hoerwahl",
     "ort": "Gespräch: Reisebüro",
     "wer": "Frau",
     "text": "Den Flug kann ich Ihnen kostenlos umbuchen. Für das Hotel gilt das leider nicht, dort wird eine Gebühr fällig, es sei denn, Sie entscheiden sich bis Freitag.",
     "frage": "Für die Hotelumbuchung muss der Kunde nichts zahlen, wenn …",
     "opt": [
      "… er auch den Flug umbucht.",
      "… er sich bis Freitag entscheidet.",
      "… er ein teureres Zimmer nimmt."
     ],
     "loesung": 1,
     "stelle": "es sei denn, Sie entscheiden sich bis Freitag",
     "erklaerung": "„es sei denn\" nennt die Ausnahme von der Gebühr."
    },
    {
     "art": "hoerwahl",
     "ort": "Gespräch: Bewerbungsgespräch",
     "wer": "Mann",
     "text": "Ihre Erfahrung im Vertrieb hat uns überzeugt, und Ihr Englisch ist ausgezeichnet. Was uns noch fehlt, ist ein Eindruck davon, wie Sie mit Konflikten im Team umgehen.",
     "frage": "Der Arbeitgeber möchte noch mehr wissen über …",
     "opt": [
      "… die Erfahrung im Vertrieb.",
      "… die Sprachkenntnisse.",
      "… den Umgang mit Konflikten."
     ],
     "loesung": 2,
     "stelle": "Was uns noch fehlt",
     "erklaerung": "Vertrieb und Englisch werden gelobt. „Was uns noch fehlt\" leitet die offene Frage ein."
    },
    {
     "art": "hoerwahl",
     "ort": "Gespräch: Nachbarschaft",
     "wer": "Frau",
     "text": "Die Party am Samstag war gar nicht das Problem, die hatten sie ja angekündigt. Mich ärgert, dass der Hund jeden Morgen um sechs bellt, wenn die Familie aus dem Haus geht.",
     "frage": "Die Nachbarin ärgert sich vor allem über …",
     "opt": [
      "… den Hund, der früh am Morgen bellt.",
      "… die Party am Wochenende.",
      "… fehlende Ankündigungen."
     ],
     "loesung": 0,
     "stelle": "Mich ärgert, dass der Hund jeden Morgen um sechs bellt",
     "erklaerung": "Die Party war angekündigt und kein Problem. Das Bellen ist der eigentliche Ärger."
    },
    {
     "art": "hoerwahl",
     "ort": "Gespräch: Fortbildung",
     "wer": "Mann",
     "text": "Die Fortbildung zahlt die Firma komplett. Nur die Fahrtkosten müssen Sie vorstrecken, die bekommen Sie aber mit der nächsten Gehaltsabrechnung zurück.",
     "frage": "Die Fahrtkosten …",
     "opt": [
      "… muss der Mitarbeiter selbst tragen.",
      "… werden später erstattet.",
      "… übernimmt der Veranstalter."
     ],
     "loesung": 1,
     "stelle": "die bekommen Sie aber mit der nächsten Gehaltsabrechnung zurück",
     "erklaerung": "„vorstrecken\" heißt: erst selbst zahlen, das Geld kommt aber zurück."
    }
   ]
  },
  {
   "id": "tg1h3",
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
     "ort": "Vortrag an der Volkshochschule: Energiesparen im Haushalt",
     "wer": "Mann",
     "text": "Wo verbraucht ein Haushalt am meisten Energie? Erstens beim Heizen, das ist der mit Abstand größte Posten. Zweitens beim warmen Wasser. Und schließlich, das unterschätzen viele, bei Geräten, die ständig im Bereitschaftsmodus laufen.",
     "frage": "Welche Funktion hat „schließlich\" in diesem Ausschnitt?",
     "opt": [
      "Es leitet den letzten Punkt einer Aufzählung ein.",
      "Es kündigt ein Gegenargument an.",
      "Es fasst den Vortrag zusammen."
     ],
     "loesung": 0,
     "stelle": "Und schließlich, das unterschätzen viele",
     "erklaerung": "Nach „Erstens\" und „Zweitens\" schließt „schließlich\" die Aufzählung ab."
    },
    {
     "art": "hoerwahl",
     "ort": "Vortrag bei einer Firmenveranstaltung: Arbeiten im Team",
     "wer": "Frau",
     "text": "Lange galt die Annahme, dass gemischte Teams langsamer zu Entscheidungen kommen. Im Gegensatz dazu zeigen unsere Erfahrungen der letzten Jahre, dass sie zwar länger diskutieren, ihre Entscheidungen aber seltener korrigieren müssen.",
     "frage": "Was leitet „im Gegensatz dazu\" hier ein?",
     "opt": [
      "Ein Beispiel für die alte Annahme.",
      "Eine Erfahrung, die der alten Annahme widerspricht.",
      "Eine Zusammenfassung der Diskussion."
     ],
     "loesung": 1,
     "stelle": "Im Gegensatz dazu zeigen unsere Erfahrungen",
     "erklaerung": "„Im Gegensatz dazu\" stellt die neue Erfahrung der alten Annahme gegenüber."
    },
    {
     "art": "hoerwahl",
     "ort": "Vortrag an der Volkshochschule: Gesund kochen",
     "wer": "Mann",
     "text": "Viele Fertiggerichte enthalten mehr Salz, als man denkt. Nehmen wir zum Beispiel eine gewöhnliche Tiefkühlpizza: Sie liefert oft schon die Hälfte dessen, was ein Erwachsener am ganzen Tag zu sich nehmen sollte.",
     "frage": "Welche Funktion hat der Satz über die Tiefkühlpizza?",
     "opt": [
      "Er widerlegt die vorherige Behauptung.",
      "Er nennt eine neue Ursache.",
      "Er veranschaulicht die vorherige Aussage."
     ],
     "loesung": 2,
     "stelle": "Nehmen wir zum Beispiel eine gewöhnliche Tiefkühlpizza",
     "erklaerung": "„Nehmen wir zum Beispiel\" kündigt eine Veranschaulichung an."
    },
    {
     "art": "hoerwahl",
     "ort": "Vortrag bei einer Bürgerversammlung: Verkehr in der Innenstadt",
     "wer": "Frau",
     "text": "Zusammenfassend lässt sich also sagen: Die autofreie Zone hat den Einzelhandel nicht geschwächt, wie viele befürchtet hatten, sondern die Zahl der Besucher sogar leicht erhöht.",
     "frage": "An welcher Stelle des Vortrags befinden wir uns vermutlich?",
     "opt": [
      "Am Anfang, bei der Einführung ins Thema.",
      "Am Ende, beim Fazit.",
      "In der Mitte, bei der Darstellung der Methode."
     ],
     "loesung": 1,
     "stelle": "Zusammenfassend lässt sich also sagen",
     "erklaerung": "„Zusammenfassend\" ist ein typisches Signal für das Fazit."
    },
    {
     "art": "hoerwahl",
     "ort": "Vortrag an der Volkshochschule: Gärtnern auf dem Balkon",
     "wer": "Mann",
     "text": "Tomaten brauchen viel Sonne und regelmäßig Wasser. Kräuter wie Thymian oder Rosmarin hingegen kommen mit Trockenheit erstaunlich gut zurecht und sind deshalb ideal für Anfänger.",
     "frage": "Was drückt „hingegen\" hier aus?",
     "opt": [
      "Einen Gegensatz zwischen zwei Pflanzenarten.",
      "Eine Folge aus dem vorher Gesagten.",
      "Eine Ergänzung mit gleicher Aussage."
     ],
     "loesung": 0,
     "stelle": "Kräuter wie Thymian oder Rosmarin hingegen",
     "erklaerung": "„hingegen\" stellt die Kräuter den Tomaten gegenüber."
    },
    {
     "art": "hoerwahl",
     "ort": "Vortrag bei einer Firmenveranstaltung: Digitalisierung",
     "wer": "Frau",
     "text": "Bevor ich auf die Ergebnisse eingehe, möchte ich kurz erklären, was wir unter digitaler Kompetenz verstehen. Gemeint ist nicht das Bedienen eines bestimmten Programms, sondern die Fähigkeit, sich neue Werkzeuge selbstständig anzueignen.",
     "frage": "Was macht die Sprecherin in diesem Ausschnitt?",
     "opt": [
      "Sie stellt die Ergebnisse vor.",
      "Sie kritisiert ein bestimmtes Programm.",
      "Sie klärt einen Begriff, bevor sie weiterspricht."
     ],
     "loesung": 2,
     "stelle": "möchte ich kurz erklären, was wir unter digitaler Kompetenz verstehen",
     "erklaerung": "„Bevor ich auf die Ergebnisse eingehe\" zeigt, dass erst eine Begriffsklärung folgt."
    },
    {
     "art": "hoerwahl",
     "ort": "Vortrag an der Volkshochschule: Sicher im Internet",
     "wer": "Mann",
     "text": "Ein starkes Passwort allein reicht heute nicht mehr. Hinzu kommt, dass viele Menschen dasselbe Passwort für mehrere Konten verwenden, und damit ist bei einem einzigen Datenleck gleich alles offen.",
     "frage": "Was leitet „hinzu kommt\" ein?",
     "opt": [
      "Einen Widerspruch zum ersten Punkt.",
      "Einen weiteren, verstärkenden Punkt.",
      "Ein Fazit des gesamten Vortrags."
     ],
     "loesung": 1,
     "stelle": "Hinzu kommt, dass viele Menschen dasselbe Passwort",
     "erklaerung": "„Hinzu kommt\" ergänzt ein weiteres Problem in dieselbe Richtung."
    },
    {
     "art": "hoerwahl",
     "ort": "Vortrag bei einer Bürgerversammlung: Wohnungsbau",
     "wer": "Frau",
     "text": "Es stimmt zwar, dass in unserer Stadt in den letzten Jahren viele Wohnungen gebaut wurden. Allerdings handelt es sich fast ausschließlich um teure Eigentumswohnungen, die für Familien mit mittlerem Einkommen kaum erschwinglich sind.",
     "frage": "Welche Funktion hat der Satz mit „allerdings\"?",
     "opt": [
      "Er schränkt die vorherige positive Aussage ein.",
      "Er nennt ein weiteres Beispiel für Erfolg.",
      "Er leitet zum nächsten Thema über."
     ],
     "loesung": 0,
     "stelle": "Allerdings handelt es sich fast ausschließlich",
     "erklaerung": "„zwar … allerdings\" räumt etwas ein und schränkt es dann ein."
    },
    {
     "art": "hoerwahl",
     "ort": "Vortrag an der Volkshochschule: Schlaf und Gesundheit",
     "wer": "Mann",
     "text": "Wer abends lange auf helle Bildschirme schaut, schläft nachweislich später ein. Daraus folgt nicht, dass man Handys aus dem Schlafzimmer verbannen muss, wohl aber, dass man die Helligkeit am Abend reduzieren sollte.",
     "frage": "Was leitet „daraus folgt\" ein?",
     "opt": [
      "Eine Ursache für das Problem.",
      "Eine Frage an das Publikum.",
      "Eine Schlussfolgerung aus dem vorher Gesagten."
     ],
     "loesung": 2,
     "stelle": "Daraus folgt nicht, dass man Handys",
     "erklaerung": "„Daraus folgt\" leitet eine Konsequenz ab, hier mit einer Einschränkung."
    },
    {
     "art": "hoerwahl",
     "ort": "Vortrag bei einer Firmenveranstaltung: Kundenservice",
     "wer": "Frau",
     "text": "Damit komme ich zum zweiten Teil meines Vortrags. Nachdem wir gesehen haben, warum Kunden sich beschweren, geht es jetzt um die Frage, wie wir am besten darauf reagieren.",
     "frage": "Was signalisiert die Sprecherin mit diesem Satz?",
     "opt": [
      "Sie beendet den Vortrag.",
      "Sie wechselt zu einem neuen Abschnitt.",
      "Sie wiederholt den ersten Teil ausführlich."
     ],
     "loesung": 1,
     "stelle": "Damit komme ich zum zweiten Teil meines Vortrags",
     "erklaerung": "„Damit komme ich zu\" markiert einen Übergang zum nächsten Gliederungspunkt."
    }
   ]
  },
  {
   "id": "tg1h4",
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
     "ort": "Gliederungspunkt: Ziel des Projekts",
     "wer": "Frau",
     "text": "Unser Projekt, und das ging übrigens auf eine Idee aus der Nachbarschaft zurück, soll ältere Menschen im Viertel mit jungen Familien zusammenbringen, die Unterstützung im Alltag suchen.",
     "frage": "Welche Notiz gehört zum Gliederungspunkt „Ziel des Projekts\"?",
     "opt": [
      "Idee aus der Nachbarschaft",
      "Ältere und junge Familien vernetzen",
      "Viele Familien im Viertel"
     ],
     "loesung": 1,
     "stelle": "soll ältere Menschen im Viertel mit jungen Familien zusammenbringen",
     "erklaerung": "Die Herkunft der Idee ist eine Nebenbemerkung. Das Ziel ist die Vernetzung."
    },
    {
     "art": "hoerwahl",
     "ort": "Gliederungspunkt: Teilnehmer",
     "wer": "Mann",
     "text": "Mitgemacht haben insgesamt etwa dreihundert Haushalte, überwiegend aus den beiden Neubaugebieten im Norden der Stadt, dazu einige Familien aus der Altstadt.",
     "frage": "Was notieren Sie zu „Teilnehmer\"?",
     "opt": [
      "rund dreihundert Haushalte, vor allem Neubaugebiete",
      "nur Familien aus der Altstadt",
      "Norden der Stadt wächst"
     ],
     "loesung": 0,
     "stelle": "überwiegend aus den beiden Neubaugebieten",
     "erklaerung": "Kern ist Zahl und Herkunft. Die Altstadt ist nur eine Ergänzung."
    },
    {
     "art": "hoerwahl",
     "ort": "Gliederungspunkt: Vorgehen",
     "wer": "Frau",
     "text": "Wir haben keine Fragebögen verschickt, die landen erfahrungsgemäß im Papierkorb. Stattdessen sind wir mit einem Lastenrad von Haus zu Haus gefahren und haben die Leute direkt an der Tür befragt.",
     "frage": "Welche Notiz passt zu „Vorgehen\"?",
     "opt": [
      "Fragebögen verschickt",
      "Fragebögen im Papierkorb",
      "persönliche Befragung an der Haustür"
     ],
     "loesung": 2,
     "stelle": "haben die Leute direkt an der Tür befragt",
     "erklaerung": "Die Fragebögen werden gerade ausgeschlossen. „Stattdessen\" leitet die Methode ein."
    },
    {
     "art": "hoerwahl",
     "ort": "Gliederungspunkt: Wichtigstes Ergebnis",
     "wer": "Mann",
     "text": "Man könnte vermuten, dass vor allem Geld der Grund ist, warum Leute kein Ehrenamt übernehmen. Das Wichtigste, was wir herausgefunden haben, ist aber: Die meisten wurden schlicht nie gefragt.",
     "frage": "Was ist das Hauptergebnis?",
     "opt": [
      "Geld hält Menschen vom Ehrenamt ab.",
      "Die meisten wurden nie direkt angesprochen.",
      "Ehrenamt ist unbeliebt."
     ],
     "loesung": 1,
     "stelle": "Die meisten wurden schlicht nie gefragt",
     "erklaerung": "„Man könnte vermuten\" ist eine Annahme, die widerlegt wird. Das Ergebnis folgt nach „aber\"."
    },
    {
     "art": "hoerwahl",
     "ort": "Gliederungspunkt: Begriff",
     "wer": "Frau",
     "text": "Wenn ich von Quartiersarbeit spreche, meine ich, ganz einfach gesagt, alle Angebote, die das Zusammenleben in einem bestimmten Wohnviertel verbessern sollen, vom Nachbarschaftscafé bis zur Hausaufgabenhilfe.",
     "frage": "Welche Notiz passt zum Begriff „Quartiersarbeit\"?",
     "opt": [
      "Nachbarschaftscafé",
      "Hausaufgabenhilfe für Kinder",
      "Angebote für besseres Zusammenleben im Viertel"
     ],
     "loesung": 2,
     "stelle": "alle Angebote, die das Zusammenleben in einem bestimmten Wohnviertel verbessern sollen",
     "erklaerung": "Café und Hausaufgabenhilfe sind nur Beispiele, nicht die Definition."
    },
    {
     "art": "hoerwahl",
     "ort": "Gliederungspunkt: Schwierigkeiten",
     "wer": "Mann",
     "text": "Die Zusammenarbeit mit der Stadtverwaltung lief erstaunlich reibungslos. Das größte Problem war ein anderes: Wir haben kaum Räume gefunden, die abends und am Wochenende kostenlos zur Verfügung standen.",
     "frage": "Was notieren Sie zu „Schwierigkeiten\"?",
     "opt": [
      "Mangel an kostenlosen Räumen",
      "Probleme mit der Stadtverwaltung",
      "zu wenig Freiwillige"
     ],
     "loesung": 0,
     "stelle": "Wir haben kaum Räume gefunden",
     "erklaerung": "Die Verwaltung wird ausdrücklich gelobt. „Das größte Problem\" nennt die Schwierigkeit."
    },
    {
     "art": "hoerwahl",
     "ort": "Gliederungspunkt: Dauer",
     "wer": "Frau",
     "text": "Ursprünglich war das Projekt auf ein Jahr angelegt. Weil die Nachfrage aber so groß war, hat die Stiftung die Förderung verlängert, sodass wir jetzt insgesamt drei Jahre lang arbeiten können.",
     "frage": "Welche Dauer notieren Sie?",
     "opt": [
      "ein Jahr",
      "zwei Jahre",
      "drei Jahre"
     ],
     "loesung": 2,
     "stelle": "insgesamt drei Jahre lang arbeiten können",
     "erklaerung": "Ein Jahr war nur der ursprüngliche Plan. Die tatsächliche Dauer kommt am Ende."
    },
    {
     "art": "hoerwahl",
     "ort": "Gliederungspunkt: Tipp für Interessierte",
     "wer": "Mann",
     "text": "Wer selbst etwas in seiner Straße auf die Beine stellen möchte, sollte nicht gleich einen Verein gründen. Mein Rat: Fangen Sie klein an, mit einem einzigen Treffen, und schauen Sie, wer kommt.",
     "frage": "Welcher Tipp wird gegeben?",
     "opt": [
      "zuerst einen Verein gründen",
      "mit einem kleinen Treffen beginnen",
      "Fördergelder beantragen"
     ],
     "loesung": 1,
     "stelle": "Fangen Sie klein an, mit einem einzigen Treffen",
     "erklaerung": "Die Vereinsgründung wird gerade nicht empfohlen. „Mein Rat\" leitet den Tipp ein."
    },
    {
     "art": "hoerwahl",
     "ort": "Gliederungspunkt: Grund für den Erfolg",
     "wer": "Frau",
     "text": "Natürlich hat auch das gute Wetter im ersten Sommer geholfen. Entscheidend war aber, dass wir von Anfang an Leute aus dem Viertel selbst in die Planung einbezogen haben.",
     "frage": "Was notieren Sie als Grund für den Erfolg?",
     "opt": [
      "Bewohner früh an der Planung beteiligt",
      "gutes Wetter im Sommer",
      "große Werbekampagne"
     ],
     "loesung": 0,
     "stelle": "Entscheidend war aber, dass wir von Anfang an Leute aus dem Viertel",
     "erklaerung": "Das Wetter wird nur als Nebenfaktor genannt. „Entscheidend war aber\" zeigt den Hauptgrund."
    },
    {
     "art": "hoerwahl",
     "ort": "Gliederungspunkt: Ausblick",
     "wer": "Mann",
     "text": "Als Nächstes möchten wir herausfinden, ob sich unser Modell auch auf Dörfer übertragen lässt, denn bisher waren wir ausschließlich in städtischen Wohnvierteln unterwegs.",
     "frage": "Was ist für die Zukunft geplant?",
     "opt": [
      "weitere Stadtviertel einbeziehen",
      "Ergebnisse veröffentlichen",
      "Übertragung auf ländliche Orte prüfen"
     ],
     "loesung": 2,
     "stelle": "auch auf Dörfer übertragen lässt",
     "erklaerung": "Bisher wurden nur Stadtviertel untersucht. Der Ausblick betrifft das Land."
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
   "was": "Acht Personen äußern sich in einer Umfrage zu einer Frage aus Alltag oder Gesellschaft. Zu jeder Person wählst du die passende Aussage. Zwei Aussagen bleiben übrig.",
   "tipp": "Es geht um die Haltung, nicht um einzelne Wörter. Viele Aussagen klingen ähnlich — eine kleine Einschränkung macht den Unterschied.",
   "zeichen": "🗣️",
   "farbe": "turq",
   "punkte": 8,
   "mal": 1,
   "runden": [
    {
     "id": "gg1h1s1",
     "titel": "Radio-Umfrage: Was halten Sie von der Vier-Tage-Woche?",
     "aufgaben": [
      {
       "von": "Person 1 — Pflegekraft, Mitte vierzig",
       "wer": "Frau",
       "text": "Alle reden von der Vier-Tage-Woche, als ginge es um alle Beschäftigten. Mit genug Personal könnte man das sogar bei uns im Krankenhaus organisieren, daran liegt es gar nicht. Was mich stört, ist etwas anderes: Die Leute im Büro bekommen ein langes Wochenende nach dem anderen, und wir schieben weiter Nachtdienste. Da entsteht doch das Gefühl, dass es zwei Klassen von Arbeitnehmern gibt.",
       "loesung": 8,
       "stelle": "dass es zwei Klassen von Arbeitnehmern gibt",
       "erklaerung": "Sie hält die Umsetzung im Krankenhaus für möglich. Ihr Punkt ist die wachsende Kluft zwischen Büro und Schicht.",
       "frage": "Welche Aussage passt zu dieser Person?",
       "opt": [
        "Für mich zählt weniger die Zahl der Arbeitstage als die Freiheit, meine Zeit selbst einzuteilen.",
        "In meinem Beruf ist eine Vier-Tage-Woche schlicht nicht umsetzbar, weil die Arbeit nicht warten kann.",
        "Ich habe sie ausprobiert und bin wegen der langen Arbeitstage wieder zurückgewechselt.",
        "Ich wäre nur dafür, wenn das Gehalt vollständig gleich bleibt.",
        "Als Arbeitgeber sehe ich darin vor allem eine Chance, Personal zu gewinnen.",
        "Ich fürchte, dass am Ende dieselbe Arbeit in weniger Zeit erledigt werden muss.",
        "Den freien Tag nutze ich inzwischen für die Betreuung einer Angehörigen.",
        "Ich würde sogar auf einen Teil meines Gehalts verzichten, um mehr Zeit zu haben.",
        "Ich glaube, dass sie die Kluft zwischen Büroberufen und Schichtberufen vergrößert.",
        "Für meinen kleinen Betrieb wäre die Umstellung finanziell nicht zu stemmen."
       ],
       "fest": true
      },
      {
       "von": "Person 2 — Softwareentwickler, Anfang dreißig",
       "wer": "Mann",
       "text": "Unser Team hat das ein halbes Jahr lang getestet, allerdings mit vier Tagen zu je zehn Stunden. Am Anfang fand ich den freien Freitag großartig. Aber an den anderen Tagen war ich abends so erledigt, dass ich nur noch auf dem Sofa lag. Inzwischen arbeite ich wieder fünf Tage, und ehrlich gesagt fühle ich mich damit wohler.",
       "loesung": 2,
       "stelle": "Inzwischen arbeite ich wieder fünf Tage",
       "erklaerung": "Er hat das Modell erlebt und ist wegen der langen Tage zur Fünf-Tage-Woche zurückgekehrt.",
       "frage": "Welche Aussage passt zu dieser Person?",
       "opt": [
        "Für mich zählt weniger die Zahl der Arbeitstage als die Freiheit, meine Zeit selbst einzuteilen.",
        "In meinem Beruf ist eine Vier-Tage-Woche schlicht nicht umsetzbar, weil die Arbeit nicht warten kann.",
        "Ich habe sie ausprobiert und bin wegen der langen Arbeitstage wieder zurückgewechselt.",
        "Ich wäre nur dafür, wenn das Gehalt vollständig gleich bleibt.",
        "Als Arbeitgeber sehe ich darin vor allem eine Chance, Personal zu gewinnen.",
        "Ich fürchte, dass am Ende dieselbe Arbeit in weniger Zeit erledigt werden muss.",
        "Den freien Tag nutze ich inzwischen für die Betreuung einer Angehörigen.",
        "Ich würde sogar auf einen Teil meines Gehalts verzichten, um mehr Zeit zu haben.",
        "Ich glaube, dass sie die Kluft zwischen Büroberufen und Schichtberufen vergrößert.",
        "Für meinen kleinen Betrieb wäre die Umstellung finanziell nicht zu stemmen."
       ],
       "fest": true
      },
      {
       "von": "Person 3 — Geschäftsführer eines Handwerksbetriebs, Ende fünfzig",
       "wer": "Mann",
       "text": "Ich gebe zu, am Anfang hatte ich vor allem Sorge wegen der Kosten. Aber auf unsere Stellenanzeigen hat sich über ein Jahr lang praktisch niemand gemeldet. Seit wir mit der Vier-Tage-Woche werben, haben wir zum ersten Mal mehr Bewerbungen als offene Stellen. Für mich ist das inzwischen das stärkste Argument, um gute Leute zu finden.",
       "loesung": 4,
       "stelle": "mehr Bewerbungen als offene Stellen",
       "erklaerung": "Die Kostensorge war nur anfangs da. Entscheidend ist für ihn die Gewinnung von Personal.",
       "frage": "Welche Aussage passt zu dieser Person?",
       "opt": [
        "Für mich zählt weniger die Zahl der Arbeitstage als die Freiheit, meine Zeit selbst einzuteilen.",
        "In meinem Beruf ist eine Vier-Tage-Woche schlicht nicht umsetzbar, weil die Arbeit nicht warten kann.",
        "Ich habe sie ausprobiert und bin wegen der langen Arbeitstage wieder zurückgewechselt.",
        "Ich wäre nur dafür, wenn das Gehalt vollständig gleich bleibt.",
        "Als Arbeitgeber sehe ich darin vor allem eine Chance, Personal zu gewinnen.",
        "Ich fürchte, dass am Ende dieselbe Arbeit in weniger Zeit erledigt werden muss.",
        "Den freien Tag nutze ich inzwischen für die Betreuung einer Angehörigen.",
        "Ich würde sogar auf einen Teil meines Gehalts verzichten, um mehr Zeit zu haben.",
        "Ich glaube, dass sie die Kluft zwischen Büroberufen und Schichtberufen vergrößert.",
        "Für meinen kleinen Betrieb wäre die Umstellung finanziell nicht zu stemmen."
       ],
       "fest": true
      },
      {
       "von": "Person 4 — Verwaltungsangestellte, Ende dreißig",
       "wer": "Frau",
       "text": "Ich habe vor einem Jahr auf vier Tage reduziert. Ursprünglich wollte ich mehr Zeit für Sport und für mich. Dann ist meine Mutter gestürzt, und seitdem ist der Freitag ihr Tag: Arzttermine, Einkäufe, Behördengänge. Ohne diesen Tag wüsste ich ehrlich nicht, wie ich das alles schaffen sollte.",
       "loesung": 6,
       "stelle": "seitdem ist der Freitag ihr Tag",
       "erklaerung": "Der ursprüngliche Plan war Sport. Heute nutzt sie den freien Tag, um ihre Mutter zu versorgen.",
       "frage": "Welche Aussage passt zu dieser Person?",
       "opt": [
        "Für mich zählt weniger die Zahl der Arbeitstage als die Freiheit, meine Zeit selbst einzuteilen.",
        "In meinem Beruf ist eine Vier-Tage-Woche schlicht nicht umsetzbar, weil die Arbeit nicht warten kann.",
        "Ich habe sie ausprobiert und bin wegen der langen Arbeitstage wieder zurückgewechselt.",
        "Ich wäre nur dafür, wenn das Gehalt vollständig gleich bleibt.",
        "Als Arbeitgeber sehe ich darin vor allem eine Chance, Personal zu gewinnen.",
        "Ich fürchte, dass am Ende dieselbe Arbeit in weniger Zeit erledigt werden muss.",
        "Den freien Tag nutze ich inzwischen für die Betreuung einer Angehörigen.",
        "Ich würde sogar auf einen Teil meines Gehalts verzichten, um mehr Zeit zu haben.",
        "Ich glaube, dass sie die Kluft zwischen Büroberufen und Schichtberufen vergrößert.",
        "Für meinen kleinen Betrieb wäre die Umstellung finanziell nicht zu stemmen."
       ],
       "fest": true
      },
      {
       "von": "Person 5 — Landwirt, Anfang fünfzig",
       "wer": "Mann",
       "text": "Bei mir stehen hundertzwanzig Kühe im Stall, und die wollen jeden Morgen und jeden Abend gemolken werden, egal ob Montag oder Sonntag. Ich finde es ja schön, wenn andere mehr Freizeit bekommen. Aber für einen Hof wie unseren ist das reine Theorie. Die Tiere richten sich nicht nach einem Arbeitszeitmodell.",
       "loesung": 1,
       "stelle": "für einen Hof wie unseren ist das reine Theorie",
       "erklaerung": "Er gönnt anderen die Freizeit, hält das Modell aber für seinen Beruf für undurchführbar.",
       "frage": "Welche Aussage passt zu dieser Person?",
       "opt": [
        "Für mich zählt weniger die Zahl der Arbeitstage als die Freiheit, meine Zeit selbst einzuteilen.",
        "In meinem Beruf ist eine Vier-Tage-Woche schlicht nicht umsetzbar, weil die Arbeit nicht warten kann.",
        "Ich habe sie ausprobiert und bin wegen der langen Arbeitstage wieder zurückgewechselt.",
        "Ich wäre nur dafür, wenn das Gehalt vollständig gleich bleibt.",
        "Als Arbeitgeber sehe ich darin vor allem eine Chance, Personal zu gewinnen.",
        "Ich fürchte, dass am Ende dieselbe Arbeit in weniger Zeit erledigt werden muss.",
        "Den freien Tag nutze ich inzwischen für die Betreuung einer Angehörigen.",
        "Ich würde sogar auf einen Teil meines Gehalts verzichten, um mehr Zeit zu haben.",
        "Ich glaube, dass sie die Kluft zwischen Büroberufen und Schichtberufen vergrößert.",
        "Für meinen kleinen Betrieb wäre die Umstellung finanziell nicht zu stemmen."
       ],
       "fest": true
      },
      {
       "von": "Person 6 — selbstständige Grafikdesignerin, Mitte vierzig",
       "wer": "Frau",
       "text": "Als Selbstständige könnte ich theoretisch drei oder sechs Tage arbeiten, das entscheide ich selbst. Und genau darum geht es mir. Ob es am Ende vier oder fünf Tage sind, ist mir ziemlich gleichgültig. Wichtig ist, dass ich an einem sonnigen Dienstag spazieren gehen und dafür am Samstag arbeiten kann, wenn ich das möchte.",
       "loesung": 0,
       "stelle": "Ob es am Ende vier oder fünf Tage sind, ist mir ziemlich gleichgültig",
       "erklaerung": "Die Anzahl der Tage ist ihr egal. Es geht ihr um die freie Einteilung der Zeit.",
       "frage": "Welche Aussage passt zu dieser Person?",
       "opt": [
        "Für mich zählt weniger die Zahl der Arbeitstage als die Freiheit, meine Zeit selbst einzuteilen.",
        "In meinem Beruf ist eine Vier-Tage-Woche schlicht nicht umsetzbar, weil die Arbeit nicht warten kann.",
        "Ich habe sie ausprobiert und bin wegen der langen Arbeitstage wieder zurückgewechselt.",
        "Ich wäre nur dafür, wenn das Gehalt vollständig gleich bleibt.",
        "Als Arbeitgeber sehe ich darin vor allem eine Chance, Personal zu gewinnen.",
        "Ich fürchte, dass am Ende dieselbe Arbeit in weniger Zeit erledigt werden muss.",
        "Den freien Tag nutze ich inzwischen für die Betreuung einer Angehörigen.",
        "Ich würde sogar auf einen Teil meines Gehalts verzichten, um mehr Zeit zu haben.",
        "Ich glaube, dass sie die Kluft zwischen Büroberufen und Schichtberufen vergrößert.",
        "Für meinen kleinen Betrieb wäre die Umstellung finanziell nicht zu stemmen."
       ],
       "fest": true
      },
      {
       "von": "Person 7 — Bankkaufmann, Mitte zwanzig",
       "wer": "Mann",
       "text": "Viele meiner Kollegen sagen: nur bei vollem Lohn, sonst nicht. Ich sehe das anders. Ich wohne allein, brauche nicht viel, und ich würde auch mit einem Fünftel weniger Gehalt gut leben. Dafür hätte ich einen ganzen Tag pro Woche für Musik und für meine Freunde. Das ist mir mehr wert als das Geld.",
       "loesung": 7,
       "stelle": "würde auch mit einem Fünftel weniger Gehalt gut leben",
       "erklaerung": "Die Forderung nach vollem Lohn ist die Meinung der Kollegen. Er selbst würde auf Gehalt verzichten.",
       "frage": "Welche Aussage passt zu dieser Person?",
       "opt": [
        "Für mich zählt weniger die Zahl der Arbeitstage als die Freiheit, meine Zeit selbst einzuteilen.",
        "In meinem Beruf ist eine Vier-Tage-Woche schlicht nicht umsetzbar, weil die Arbeit nicht warten kann.",
        "Ich habe sie ausprobiert und bin wegen der langen Arbeitstage wieder zurückgewechselt.",
        "Ich wäre nur dafür, wenn das Gehalt vollständig gleich bleibt.",
        "Als Arbeitgeber sehe ich darin vor allem eine Chance, Personal zu gewinnen.",
        "Ich fürchte, dass am Ende dieselbe Arbeit in weniger Zeit erledigt werden muss.",
        "Den freien Tag nutze ich inzwischen für die Betreuung einer Angehörigen.",
        "Ich würde sogar auf einen Teil meines Gehalts verzichten, um mehr Zeit zu haben.",
        "Ich glaube, dass sie die Kluft zwischen Büroberufen und Schichtberufen vergrößert.",
        "Für meinen kleinen Betrieb wäre die Umstellung finanziell nicht zu stemmen."
       ],
       "fest": true
      },
      {
       "von": "Person 8 — Filialleiterin im Einzelhandel, Anfang fünfzig",
       "wer": "Frau",
       "text": "In der Theorie klingt das wunderbar. Aber ich kenne meinen Laden: Die Ware muss eingeräumt werden, die Kunden wollen beraten werden, die Inventur macht sich nicht von allein. Die Aufgaben werden ja nicht weniger. Ich befürchte, dass wir dann an vier Tagen schaffen sollen, wofür jetzt fünf kaum reichen.",
       "loesung": 5,
       "stelle": "Die Aufgaben werden ja nicht weniger",
       "erklaerung": "Sie befürchtet eine Verdichtung der Arbeit, nicht dass das Modell unmöglich wäre.",
       "frage": "Welche Aussage passt zu dieser Person?",
       "opt": [
        "Für mich zählt weniger die Zahl der Arbeitstage als die Freiheit, meine Zeit selbst einzuteilen.",
        "In meinem Beruf ist eine Vier-Tage-Woche schlicht nicht umsetzbar, weil die Arbeit nicht warten kann.",
        "Ich habe sie ausprobiert und bin wegen der langen Arbeitstage wieder zurückgewechselt.",
        "Ich wäre nur dafür, wenn das Gehalt vollständig gleich bleibt.",
        "Als Arbeitgeber sehe ich darin vor allem eine Chance, Personal zu gewinnen.",
        "Ich fürchte, dass am Ende dieselbe Arbeit in weniger Zeit erledigt werden muss.",
        "Den freien Tag nutze ich inzwischen für die Betreuung einer Angehörigen.",
        "Ich würde sogar auf einen Teil meines Gehalts verzichten, um mehr Zeit zu haben.",
        "Ich glaube, dass sie die Kluft zwischen Büroberufen und Schichtberufen vergrößert.",
        "Für meinen kleinen Betrieb wäre die Umstellung finanziell nicht zu stemmen."
       ],
       "fest": true
      }
     ]
    },
    {
     "id": "gg1h1s2",
     "titel": "Radio-Umfrage: Zahlen Sie lieber bar oder mit Karte?",
     "aufgaben": [
      {
       "von": "Person 1 — Rentner, Mitte siebzig",
       "wer": "Mann",
       "text": "Ich selbst komme mit der Karte gut zurecht, mein Enkel hat mir sogar das Bezahlen mit dem Handy gezeigt. Aber in meinem Haus wohnen einige, die mit so etwas überhaupt nicht klarkommen. Wenn jetzt immer mehr Geschäfte und sogar Parkautomaten kein Bargeld mehr annehmen, dann bleiben diese Leute einfach außen vor. Das finde ich nicht in Ordnung.",
       "loesung": 2,
       "stelle": "dann bleiben diese Leute einfach außen vor",
       "erklaerung": "Er selbst nutzt die Karte. Seine Sorge gilt älteren Nachbarn, die nicht mithalten können.",
       "frage": "Welche Aussage passt zu dieser Person?",
       "opt": [
        "Mit Bargeld behalte ich am besten den Überblick über meine Ausgaben.",
        "Ich zahle digital, weil ich meine Ausgaben in einer App genau auswerten kann.",
        "Ich mache mir Sorgen, dass ältere Menschen ohne Bargeld abgehängt werden.",
        "Für mein Geschäft ist die Kartenzahlung wegen der Gebühren eher ein Ärgernis.",
        "Ich zahle bar, weil ich nicht möchte, dass jeder Einkauf gespeichert wird.",
        "Seit mir einmal das Portemonnaie gestohlen wurde, trage ich kaum noch Bargeld bei mir.",
        "Wie ich bezahle, ist mir gleich, Hauptsache, es geht schnell.",
        "Bei technischen Störungen ist Bargeld für mich die einzige verlässliche Lösung.",
        "Kinder sollten den Umgang mit Geld zuerst mit Münzen und Scheinen lernen.",
        "Ich habe meine Meinung geändert, seit ich im Ausland ständig Gebühren bezahlen musste."
       ],
       "fest": true
      },
      {
       "von": "Person 2 — Inhaberin eines Cafés, Anfang vierzig",
       "wer": "Frau",
       "text": "Natürlich nehme ich Karten an, die Gäste erwarten das heute einfach. Aber bei jedem Cappuccino geht ein Anteil an den Zahlungsdienstleister, und dazu kommt noch die Miete für das Gerät. Bei kleinen Beträgen tut das richtig weh. Ehrlich gesagt freue ich mich über jeden, der mit Münzen bezahlt.",
       "loesung": 3,
       "stelle": "Bei kleinen Beträgen tut das richtig weh",
       "erklaerung": "Sie spricht aus Sicht ihres Geschäfts über die Kosten der Kartenzahlung.",
       "frage": "Welche Aussage passt zu dieser Person?",
       "opt": [
        "Mit Bargeld behalte ich am besten den Überblick über meine Ausgaben.",
        "Ich zahle digital, weil ich meine Ausgaben in einer App genau auswerten kann.",
        "Ich mache mir Sorgen, dass ältere Menschen ohne Bargeld abgehängt werden.",
        "Für mein Geschäft ist die Kartenzahlung wegen der Gebühren eher ein Ärgernis.",
        "Ich zahle bar, weil ich nicht möchte, dass jeder Einkauf gespeichert wird.",
        "Seit mir einmal das Portemonnaie gestohlen wurde, trage ich kaum noch Bargeld bei mir.",
        "Wie ich bezahle, ist mir gleich, Hauptsache, es geht schnell.",
        "Bei technischen Störungen ist Bargeld für mich die einzige verlässliche Lösung.",
        "Kinder sollten den Umgang mit Geld zuerst mit Münzen und Scheinen lernen.",
        "Ich habe meine Meinung geändert, seit ich im Ausland ständig Gebühren bezahlen musste."
       ],
       "fest": true
      },
      {
       "von": "Person 3 — Berater für Informationstechnik, Ende dreißig",
       "wer": "Mann",
       "text": "Viele wundern sich, dass ausgerechnet ich fast alles bar bezahle. Aber gerade weil ich beruflich sehe, wie viele Daten bei jedem Bezahlvorgang anfallen und wer sie alles auswertet, bin ich vorsichtig geworden. Wann ich wo welchen Wein kaufe, geht niemanden etwas an. Bargeld ist für mich ein Stück Privatsphäre.",
       "loesung": 4,
       "stelle": "Bargeld ist für mich ein Stück Privatsphäre",
       "erklaerung": "Sein Grund ist der Schutz seiner Daten, nicht die Kontrolle über die Ausgaben.",
       "frage": "Welche Aussage passt zu dieser Person?",
       "opt": [
        "Mit Bargeld behalte ich am besten den Überblick über meine Ausgaben.",
        "Ich zahle digital, weil ich meine Ausgaben in einer App genau auswerten kann.",
        "Ich mache mir Sorgen, dass ältere Menschen ohne Bargeld abgehängt werden.",
        "Für mein Geschäft ist die Kartenzahlung wegen der Gebühren eher ein Ärgernis.",
        "Ich zahle bar, weil ich nicht möchte, dass jeder Einkauf gespeichert wird.",
        "Seit mir einmal das Portemonnaie gestohlen wurde, trage ich kaum noch Bargeld bei mir.",
        "Wie ich bezahle, ist mir gleich, Hauptsache, es geht schnell.",
        "Bei technischen Störungen ist Bargeld für mich die einzige verlässliche Lösung.",
        "Kinder sollten den Umgang mit Geld zuerst mit Münzen und Scheinen lernen.",
        "Ich habe meine Meinung geändert, seit ich im Ausland ständig Gebühren bezahlen musste."
       ],
       "fest": true
      },
      {
       "von": "Person 4 — Erzieherin und Mutter von zwei Kindern",
       "wer": "Frau",
       "text": "Ich selbst zahle fast alles mit dem Handy, das ist bequem. Aber meine Kinder bekommen ihr Taschengeld in Münzen, ganz bewusst. Ein Kind muss sehen und fühlen, dass das Geld weniger wird, wenn es sich etwas kauft. Mit einer Zahl auf einem Bildschirm lernt man das nicht. Digital können sie später immer noch bezahlen.",
       "loesung": 8,
       "stelle": "Ein Kind muss sehen und fühlen, dass das Geld weniger wird",
       "erklaerung": "Sie selbst zahlt digital. Bargeld ist für sie ein Lernmittel für ihre Kinder.",
       "frage": "Welche Aussage passt zu dieser Person?",
       "opt": [
        "Mit Bargeld behalte ich am besten den Überblick über meine Ausgaben.",
        "Ich zahle digital, weil ich meine Ausgaben in einer App genau auswerten kann.",
        "Ich mache mir Sorgen, dass ältere Menschen ohne Bargeld abgehängt werden.",
        "Für mein Geschäft ist die Kartenzahlung wegen der Gebühren eher ein Ärgernis.",
        "Ich zahle bar, weil ich nicht möchte, dass jeder Einkauf gespeichert wird.",
        "Seit mir einmal das Portemonnaie gestohlen wurde, trage ich kaum noch Bargeld bei mir.",
        "Wie ich bezahle, ist mir gleich, Hauptsache, es geht schnell.",
        "Bei technischen Störungen ist Bargeld für mich die einzige verlässliche Lösung.",
        "Kinder sollten den Umgang mit Geld zuerst mit Münzen und Scheinen lernen.",
        "Ich habe meine Meinung geändert, seit ich im Ausland ständig Gebühren bezahlen musste."
       ],
       "fest": true
      },
      {
       "von": "Person 5 — Taxifahrer, Anfang sechzig",
       "wer": "Mann",
       "text": "Bei mir im Wagen können die Fahrgäste zahlen, wie sie wollen, das gehört dazu. Und privat? Darüber denke ich ehrlich gesagt kaum nach. Ich nehme, was ich gerade in der Hand habe, Schein oder Karte. Ich will nur nicht lange an der Kasse stehen, während hinter mir die Schlange wächst.",
       "loesung": 6,
       "stelle": "Ich will nur nicht lange an der Kasse stehen",
       "erklaerung": "Die Zahlungsart ist ihm egal. Wichtig ist ihm nur, dass es zügig geht.",
       "frage": "Welche Aussage passt zu dieser Person?",
       "opt": [
        "Mit Bargeld behalte ich am besten den Überblick über meine Ausgaben.",
        "Ich zahle digital, weil ich meine Ausgaben in einer App genau auswerten kann.",
        "Ich mache mir Sorgen, dass ältere Menschen ohne Bargeld abgehängt werden.",
        "Für mein Geschäft ist die Kartenzahlung wegen der Gebühren eher ein Ärgernis.",
        "Ich zahle bar, weil ich nicht möchte, dass jeder Einkauf gespeichert wird.",
        "Seit mir einmal das Portemonnaie gestohlen wurde, trage ich kaum noch Bargeld bei mir.",
        "Wie ich bezahle, ist mir gleich, Hauptsache, es geht schnell.",
        "Bei technischen Störungen ist Bargeld für mich die einzige verlässliche Lösung.",
        "Kinder sollten den Umgang mit Geld zuerst mit Münzen und Scheinen lernen.",
        "Ich habe meine Meinung geändert, seit ich im Ausland ständig Gebühren bezahlen musste."
       ],
       "fest": true
      },
      {
       "von": "Person 6 — Buchhalterin, Mitte dreißig",
       "wer": "Frau",
       "text": "Mit der Karte habe ich am Monatsende oft nur gestaunt, wo das ganze Geld geblieben war. Jetzt hebe ich am Monatsanfang einen festen Betrag ab und verteile ihn auf zwei Umschläge, einen für Lebensmittel, einen für Freizeit. Wenn der Umschlag leer ist, ist er leer. So einfach ist das, und es funktioniert.",
       "loesung": 0,
       "stelle": "Wenn der Umschlag leer ist, ist er leer",
       "erklaerung": "Bargeld in Umschlägen hilft ihr, ihre Ausgaben im Blick zu behalten.",
       "frage": "Welche Aussage passt zu dieser Person?",
       "opt": [
        "Mit Bargeld behalte ich am besten den Überblick über meine Ausgaben.",
        "Ich zahle digital, weil ich meine Ausgaben in einer App genau auswerten kann.",
        "Ich mache mir Sorgen, dass ältere Menschen ohne Bargeld abgehängt werden.",
        "Für mein Geschäft ist die Kartenzahlung wegen der Gebühren eher ein Ärgernis.",
        "Ich zahle bar, weil ich nicht möchte, dass jeder Einkauf gespeichert wird.",
        "Seit mir einmal das Portemonnaie gestohlen wurde, trage ich kaum noch Bargeld bei mir.",
        "Wie ich bezahle, ist mir gleich, Hauptsache, es geht schnell.",
        "Bei technischen Störungen ist Bargeld für mich die einzige verlässliche Lösung.",
        "Kinder sollten den Umgang mit Geld zuerst mit Münzen und Scheinen lernen.",
        "Ich habe meine Meinung geändert, seit ich im Ausland ständig Gebühren bezahlen musste."
       ],
       "fest": true
      },
      {
       "von": "Person 7 — Elektriker, Ende vierzig",
       "wer": "Mann",
       "text": "Letzten Winter war in unserem ganzen Viertel einen Abend lang der Strom weg. Kein Kartenterminal hat funktioniert, die Leute standen ratlos im Supermarkt. Wer ein paar Scheine dabeihatte, konnte wenigstens an der Tankstelle mit Notstrom einkaufen. Seitdem habe ich immer etwas Bargeld in der Tasche, man weiß ja nie.",
       "loesung": 7,
       "stelle": "Kein Kartenterminal hat funktioniert",
       "erklaerung": "Ein Stromausfall hat ihn überzeugt, dass Bargeld bei Störungen unverzichtbar ist.",
       "frage": "Welche Aussage passt zu dieser Person?",
       "opt": [
        "Mit Bargeld behalte ich am besten den Überblick über meine Ausgaben.",
        "Ich zahle digital, weil ich meine Ausgaben in einer App genau auswerten kann.",
        "Ich mache mir Sorgen, dass ältere Menschen ohne Bargeld abgehängt werden.",
        "Für mein Geschäft ist die Kartenzahlung wegen der Gebühren eher ein Ärgernis.",
        "Ich zahle bar, weil ich nicht möchte, dass jeder Einkauf gespeichert wird.",
        "Seit mir einmal das Portemonnaie gestohlen wurde, trage ich kaum noch Bargeld bei mir.",
        "Wie ich bezahle, ist mir gleich, Hauptsache, es geht schnell.",
        "Bei technischen Störungen ist Bargeld für mich die einzige verlässliche Lösung.",
        "Kinder sollten den Umgang mit Geld zuerst mit Münzen und Scheinen lernen.",
        "Ich habe meine Meinung geändert, seit ich im Ausland ständig Gebühren bezahlen musste."
       ],
       "fest": true
      },
      {
       "von": "Person 8 — Projektmanagerin, Anfang dreißig",
       "wer": "Frau",
       "text": "Früher habe ich versucht, ein Haushaltsbuch auf Papier zu führen, das habe ich nie länger als drei Wochen durchgehalten. Heute zahle ich alles mit der Karte, und meine Banking-App ordnet jede Ausgabe automatisch einer Kategorie zu. Am Monatsende sehe ich auf einen Blick, wie viel für Restaurants draufgegangen ist. Das hätte ich mit Bargeld nie so genau gewusst.",
       "loesung": 1,
       "stelle": "ordnet jede Ausgabe automatisch einer Kategorie zu",
       "erklaerung": "Sie behält den Überblick gerade durch digitale Zahlung und eine App, nicht durch Bargeld.",
       "frage": "Welche Aussage passt zu dieser Person?",
       "opt": [
        "Mit Bargeld behalte ich am besten den Überblick über meine Ausgaben.",
        "Ich zahle digital, weil ich meine Ausgaben in einer App genau auswerten kann.",
        "Ich mache mir Sorgen, dass ältere Menschen ohne Bargeld abgehängt werden.",
        "Für mein Geschäft ist die Kartenzahlung wegen der Gebühren eher ein Ärgernis.",
        "Ich zahle bar, weil ich nicht möchte, dass jeder Einkauf gespeichert wird.",
        "Seit mir einmal das Portemonnaie gestohlen wurde, trage ich kaum noch Bargeld bei mir.",
        "Wie ich bezahle, ist mir gleich, Hauptsache, es geht schnell.",
        "Bei technischen Störungen ist Bargeld für mich die einzige verlässliche Lösung.",
        "Kinder sollten den Umgang mit Geld zuerst mit Münzen und Scheinen lernen.",
        "Ich habe meine Meinung geändert, seit ich im Ausland ständig Gebühren bezahlen musste."
       ],
       "fest": true
      }
     ]
    },
    {
     "id": "gg1h1s3",
     "titel": "Radio-Umfrage: Leben Sie lieber in der Stadt oder auf dem Land?",
     "aufgaben": [
      {
       "von": "Person 1 — Rentnerin, früher Physiotherapeutin",
       "wer": "Frau",
       "text": "Wir haben dreißig Jahre in einem Haus mitten im Grünen gewohnt, wunderschön. Aber wir haben bei meiner Tante gesehen, wie einsam es wird, wenn man nicht mehr Auto fahren kann. Deshalb ziehen mein Mann und ich jetzt in eine kleine Wohnung in der Kreisstadt. Arzt, Apotheke und Bushaltestelle sind dort zu Fuß erreichbar, und das ist uns jetzt das Wichtigste.",
       "loesung": 3,
       "stelle": "Arzt, Apotheke und Bushaltestelle sind dort zu Fuß erreichbar",
       "erklaerung": "Sie plant für das Alter: Alles Wichtige soll ohne Auto erreichbar sein.",
       "frage": "Welche Aussage passt zu dieser Person?",
       "opt": [
        "Ich bin aufs Land gezogen und vermisse vor allem das kulturelle Angebot.",
        "Erst das Arbeiten von zu Hause hat mir den Umzug aufs Land ermöglicht.",
        "Auf dem Land kennt jeder jeden, und genau diese soziale Kontrolle hat mich gestört.",
        "Für mich zählt vor allem, dass ich im Alter ohne Auto zurechtkomme.",
        "Die Stadt kann ich mir wegen der Mieten auf Dauer nicht mehr leisten.",
        "Ich lebe gern in der Stadt, wünsche mir dort aber deutlich mehr Grün.",
        "Für meine Kinder war das Leben auf dem Land die richtige Entscheidung.",
        "Ich setze mich im Dorf dafür ein, dass es dort wieder einen Laden gibt.",
        "Ich pendle täglich lange und bereue den Umzug inzwischen.",
        "Mich hält in der Stadt vor allem mein Freundeskreis."
       ],
       "fest": true
      },
      {
       "von": "Person 2 — Übersetzer, Anfang vierzig",
       "wer": "Mann",
       "text": "Früher musste ich jeden Tag ins Büro in der Innenstadt, ein Haus auf dem Land kam da gar nicht infrage. Seit meine Firma nur noch an zwei Tagen Anwesenheit verlangt, wohnen wir in einem Dorf eine gute Stunde entfernt. An den übrigen Tagen arbeite ich am Küchentisch mit Blick auf die Felder. Ohne diese Regelung wären wir nie umgezogen.",
       "loesung": 1,
       "stelle": "Ohne diese Regelung wären wir nie umgezogen",
       "erklaerung": "Die Möglichkeit, überwiegend zu Hause zu arbeiten, war die Voraussetzung für den Umzug.",
       "frage": "Welche Aussage passt zu dieser Person?",
       "opt": [
        "Ich bin aufs Land gezogen und vermisse vor allem das kulturelle Angebot.",
        "Erst das Arbeiten von zu Hause hat mir den Umzug aufs Land ermöglicht.",
        "Auf dem Land kennt jeder jeden, und genau diese soziale Kontrolle hat mich gestört.",
        "Für mich zählt vor allem, dass ich im Alter ohne Auto zurechtkomme.",
        "Die Stadt kann ich mir wegen der Mieten auf Dauer nicht mehr leisten.",
        "Ich lebe gern in der Stadt, wünsche mir dort aber deutlich mehr Grün.",
        "Für meine Kinder war das Leben auf dem Land die richtige Entscheidung.",
        "Ich setze mich im Dorf dafür ein, dass es dort wieder einen Laden gibt.",
        "Ich pendle täglich lange und bereue den Umzug inzwischen.",
        "Mich hält in der Stadt vor allem mein Freundeskreis."
       ],
       "fest": true
      },
      {
       "von": "Person 3 — Kellnerin, Mitte zwanzig",
       "wer": "Frau",
       "text": "Ich bin in einem Dorf mit sechshundert Einwohnern aufgewachsen. Da wusste die Bäckerin schon, mit wem ich am Samstag unterwegs war, bevor ich es meinen Eltern erzählt hatte. Die Mieten hier in der Stadt sind ein Wahnsinn, klar, das nehme ich trotzdem in Kauf. Hier fragt niemand, und genau das genieße ich.",
       "loesung": 2,
       "stelle": "Da wusste die Bäckerin schon, mit wem ich am Samstag unterwegs war",
       "erklaerung": "Die hohen Mieten nimmt sie in Kauf. Ihr Thema ist die Kontrolle im Dorf, der sie entkommen ist.",
       "frage": "Welche Aussage passt zu dieser Person?",
       "opt": [
        "Ich bin aufs Land gezogen und vermisse vor allem das kulturelle Angebot.",
        "Erst das Arbeiten von zu Hause hat mir den Umzug aufs Land ermöglicht.",
        "Auf dem Land kennt jeder jeden, und genau diese soziale Kontrolle hat mich gestört.",
        "Für mich zählt vor allem, dass ich im Alter ohne Auto zurechtkomme.",
        "Die Stadt kann ich mir wegen der Mieten auf Dauer nicht mehr leisten.",
        "Ich lebe gern in der Stadt, wünsche mir dort aber deutlich mehr Grün.",
        "Für meine Kinder war das Leben auf dem Land die richtige Entscheidung.",
        "Ich setze mich im Dorf dafür ein, dass es dort wieder einen Laden gibt.",
        "Ich pendle täglich lange und bereue den Umzug inzwischen.",
        "Mich hält in der Stadt vor allem mein Freundeskreis."
       ],
       "fest": true
      },
      {
       "von": "Person 4 — Polizist und Vater von drei Kindern",
       "wer": "Mann",
       "text": "Vor fünf Jahren sind wir aus der Großstadt weggezogen. Ich vermisse manchmal das Kino um die Ecke, das gebe ich zu. Aber wenn ich sehe, wie meine Kinder allein mit dem Fahrrad zur Schule fahren, den ganzen Nachmittag draußen sind und im Bach Staudämme bauen, dann weiß ich: Für die drei war das genau richtig.",
       "loesung": 6,
       "stelle": "Für die drei war das genau richtig",
       "erklaerung": "Das Kino vermisst er nur manchmal. Im Mittelpunkt steht das Wohl seiner Kinder.",
       "frage": "Welche Aussage passt zu dieser Person?",
       "opt": [
        "Ich bin aufs Land gezogen und vermisse vor allem das kulturelle Angebot.",
        "Erst das Arbeiten von zu Hause hat mir den Umzug aufs Land ermöglicht.",
        "Auf dem Land kennt jeder jeden, und genau diese soziale Kontrolle hat mich gestört.",
        "Für mich zählt vor allem, dass ich im Alter ohne Auto zurechtkomme.",
        "Die Stadt kann ich mir wegen der Mieten auf Dauer nicht mehr leisten.",
        "Ich lebe gern in der Stadt, wünsche mir dort aber deutlich mehr Grün.",
        "Für meine Kinder war das Leben auf dem Land die richtige Entscheidung.",
        "Ich setze mich im Dorf dafür ein, dass es dort wieder einen Laden gibt.",
        "Ich pendle täglich lange und bereue den Umzug inzwischen.",
        "Mich hält in der Stadt vor allem mein Freundeskreis."
       ],
       "fest": true
      },
      {
       "von": "Person 5 — ehemaliger Schreiner, Ende sechzig",
       "wer": "Mann",
       "text": "In unserem Dorf hat vor drei Jahren der letzte Lebensmittelladen zugemacht. Seitdem fahren die Älteren mit dem Bus zwanzig Minuten zum Supermarkt. Wir haben deshalb einen Verein gegründet, sammeln Geld und renovieren gerade das alte Schulhaus. Im Frühjahr soll dort ein kleiner Dorfladen öffnen, den wir selbst betreiben.",
       "loesung": 7,
       "stelle": "Im Frühjahr soll dort ein kleiner Dorfladen öffnen",
       "erklaerung": "Er engagiert sich aktiv für einen neuen Laden im Dorf.",
       "frage": "Welche Aussage passt zu dieser Person?",
       "opt": [
        "Ich bin aufs Land gezogen und vermisse vor allem das kulturelle Angebot.",
        "Erst das Arbeiten von zu Hause hat mir den Umzug aufs Land ermöglicht.",
        "Auf dem Land kennt jeder jeden, und genau diese soziale Kontrolle hat mich gestört.",
        "Für mich zählt vor allem, dass ich im Alter ohne Auto zurechtkomme.",
        "Die Stadt kann ich mir wegen der Mieten auf Dauer nicht mehr leisten.",
        "Ich lebe gern in der Stadt, wünsche mir dort aber deutlich mehr Grün.",
        "Für meine Kinder war das Leben auf dem Land die richtige Entscheidung.",
        "Ich setze mich im Dorf dafür ein, dass es dort wieder einen Laden gibt.",
        "Ich pendle täglich lange und bereue den Umzug inzwischen.",
        "Mich hält in der Stadt vor allem mein Freundeskreis."
       ],
       "fest": true
      },
      {
       "von": "Person 6 — Architekt, Mitte fünfzig",
       "wer": "Mann",
       "text": "Aufs Land ziehen? Niemals, ich brauche die Stadt mit ihrem Leben auf den Straßen. Aber unsere Städte sind viel zu sehr aus Beton gebaut. Im Sommer heizt sich unser Viertel so auf, dass man nachts kaum schlafen kann. Ich wünsche mir Bäume statt Parkplätze und Wiesen statt grauer Plätze.",
       "loesung": 5,
       "stelle": "Ich wünsche mir Bäume statt Parkplätze",
       "erklaerung": "Er bleibt überzeugter Städter, fordert aber mehr Grünflächen.",
       "frage": "Welche Aussage passt zu dieser Person?",
       "opt": [
        "Ich bin aufs Land gezogen und vermisse vor allem das kulturelle Angebot.",
        "Erst das Arbeiten von zu Hause hat mir den Umzug aufs Land ermöglicht.",
        "Auf dem Land kennt jeder jeden, und genau diese soziale Kontrolle hat mich gestört.",
        "Für mich zählt vor allem, dass ich im Alter ohne Auto zurechtkomme.",
        "Die Stadt kann ich mir wegen der Mieten auf Dauer nicht mehr leisten.",
        "Ich lebe gern in der Stadt, wünsche mir dort aber deutlich mehr Grün.",
        "Für meine Kinder war das Leben auf dem Land die richtige Entscheidung.",
        "Ich setze mich im Dorf dafür ein, dass es dort wieder einen Laden gibt.",
        "Ich pendle täglich lange und bereue den Umzug inzwischen.",
        "Mich hält in der Stadt vor allem mein Freundeskreis."
       ],
       "fest": true
      },
      {
       "von": "Person 7 — Vertriebsmitarbeiterin, Anfang vierzig",
       "wer": "Frau",
       "text": "Das Haus auf dem Land war unser großer Traum. Was wir unterschätzt haben, ist der Weg zur Arbeit: jeden Tag anderthalb Stunden hin und anderthalb zurück, oft im Stau. Abends bin ich so müde, dass ich den Garten kaum genieße. Wenn ich ehrlich bin, würde ich heute nicht mehr so entscheiden.",
       "loesung": 8,
       "stelle": "würde ich heute nicht mehr so entscheiden",
       "erklaerung": "Der lange tägliche Arbeitsweg lässt sie den Umzug bereuen.",
       "frage": "Welche Aussage passt zu dieser Person?",
       "opt": [
        "Ich bin aufs Land gezogen und vermisse vor allem das kulturelle Angebot.",
        "Erst das Arbeiten von zu Hause hat mir den Umzug aufs Land ermöglicht.",
        "Auf dem Land kennt jeder jeden, und genau diese soziale Kontrolle hat mich gestört.",
        "Für mich zählt vor allem, dass ich im Alter ohne Auto zurechtkomme.",
        "Die Stadt kann ich mir wegen der Mieten auf Dauer nicht mehr leisten.",
        "Ich lebe gern in der Stadt, wünsche mir dort aber deutlich mehr Grün.",
        "Für meine Kinder war das Leben auf dem Land die richtige Entscheidung.",
        "Ich setze mich im Dorf dafür ein, dass es dort wieder einen Laden gibt.",
        "Ich pendle täglich lange und bereue den Umzug inzwischen.",
        "Mich hält in der Stadt vor allem mein Freundeskreis."
       ],
       "fest": true
      },
      {
       "von": "Person 8 — Musiker, Anfang dreißig",
       "wer": "Mann",
       "text": "Klar, auf dem Land könnte ich für die Hälfte der Miete doppelt so groß wohnen, das rechnen mir meine Eltern jedes Jahr vor. Aber meine Band probt hier, meine besten Freunde wohnen hier, und spontan auf ein Bier vorbeizukommen geht eben nur, wenn man nicht eine Stunde fahren muss. Die Leute sind der Grund, warum ich bleibe.",
       "loesung": 9,
       "stelle": "Die Leute sind der Grund, warum ich bleibe",
       "erklaerung": "Die günstigere Miete auf dem Land erwähnt er nur. Ihn halten seine Freunde in der Stadt.",
       "frage": "Welche Aussage passt zu dieser Person?",
       "opt": [
        "Ich bin aufs Land gezogen und vermisse vor allem das kulturelle Angebot.",
        "Erst das Arbeiten von zu Hause hat mir den Umzug aufs Land ermöglicht.",
        "Auf dem Land kennt jeder jeden, und genau diese soziale Kontrolle hat mich gestört.",
        "Für mich zählt vor allem, dass ich im Alter ohne Auto zurechtkomme.",
        "Die Stadt kann ich mir wegen der Mieten auf Dauer nicht mehr leisten.",
        "Ich lebe gern in der Stadt, wünsche mir dort aber deutlich mehr Grün.",
        "Für meine Kinder war das Leben auf dem Land die richtige Entscheidung.",
        "Ich setze mich im Dorf dafür ein, dass es dort wieder einen Laden gibt.",
        "Ich pendle täglich lange und bereue den Umzug inzwischen.",
        "Mich hält in der Stadt vor allem mein Freundeskreis."
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
   "was": "Ein Gespräch, zum Beispiel ein Radiogespräch oder eine Besprechung im Beruf, in Abschnitten. Zu jedem Abschnitt wählst du die richtige Fortsetzung eines Satzes.",
   "tipp": "Die falschen Fortsetzungen benutzen Wörter aus dem Gespräch. Achte darauf, wer was sagt und was am Ende beschlossen wird.",
   "zeichen": "💬",
   "farbe": "gold",
   "punkte": 10,
   "mal": 1,
   "runden": [
    {
     "id": "gg1h2s1",
     "titel": "Radiogespräch: Eine Stadtplanerin über Wohnungsnot",
     "aufgaben": [
      {
       "ort": "Gespräch — Abschnitt 1",
       "zeilen": [
        {
         "wer": "Mann",
         "text": "Guten Abend und willkommen beim Stadtgespräch. Heute geht es um bezahlbaren Wohnraum. Bei mir im Studio ist Frau Kessler, Leiterin des Stadtplanungsamts in Rabenfeld. Frau Kessler, man hört ständig, es werde einfach zu wenig gebaut. Stimmt das?"
        },
        {
         "wer": "Frau",
         "text": "Nur zum Teil. Gebaut wird durchaus, im vergangenen Jahr sogar mehr als im Durchschnitt der letzten zehn Jahre. Das Problem ist eher, was gebaut wird: überwiegend große Eigentumswohnungen, während kleine, günstige Mietwohnungen kaum entstehen."
        }
       ],
       "frage": "Laut Frau Kessler liegt das Hauptproblem darin, dass …",
       "opt": [
        "weniger gebaut wird als im Durchschnitt der letzten zehn Jahre.",
        "vor allem große Eigentumswohnungen statt kleiner Mietwohnungen entstehen.",
        "die Stadt keine Grundstücke für den Wohnungsbau besitzt."
       ],
       "loesung": 1,
       "stelle": "Das Problem ist eher, was gebaut wird",
       "erklaerung": "Gebaut wird sogar überdurchschnittlich viel, nur eben die falschen Wohnungen."
      },
      {
       "ort": "Gespräch — Abschnitt 2",
       "zeilen": [
        {
         "wer": "Mann",
         "text": "Woran liegt das?"
        },
        {
         "wer": "Frau",
         "text": "Vor allem an den Grundstückspreisen. Wer für den Boden schon ein Vermögen bezahlt hat, für den rechnet sich günstiger Mietwohnungsbau nicht mehr. Deshalb verkauft die Stadt ihre eigenen Flächen nicht mehr an den Meistbietenden, sondern vergibt sie im Erbbaurecht an Genossenschaften, die sich zu dauerhaft niedrigen Mieten verpflichten."
        }
       ],
       "frage": "Städtische Grundstücke werden inzwischen …",
       "opt": [
        "im Erbbaurecht an Genossenschaften vergeben, die niedrige Mieten zusagen.",
        "an den Investor mit dem höchsten Angebot verkauft.",
        "nur noch für den Bau von Eigentumswohnungen genutzt."
       ],
       "loesung": 0,
       "stelle": "vergibt sie im Erbbaurecht an Genossenschaften",
       "erklaerung": "Der Verkauf an den Meistbietenden wird ausdrücklich nicht mehr praktiziert."
      },
      {
       "ort": "Gespräch — Abschnitt 3",
       "zeilen": [
        {
         "wer": "Mann",
         "text": "Kritiker sagen, das gehe viel zu langsam."
        },
        {
         "wer": "Frau",
         "text": "Da haben sie leider recht. Von der ersten Idee bis zum Einzug vergehen bei uns im Schnitt sieben Jahre. Das liegt weniger an der Bauzeit selbst als an den Genehmigungsverfahren. Gegen größere Projekte wird fast immer geklagt, häufig von Anwohnern, die grundsätzlich für neue Wohnungen sind, nur eben nicht in ihrer Nachbarschaft."
        }
       ],
       "frage": "Die lange Dauer bis zum Einzug erklärt Frau Kessler vor allem mit …",
       "opt": [
        "der aufwendigen Bauzeit großer Projekte.",
        "fehlenden Handwerkern auf den Baustellen.",
        "Genehmigungsverfahren und Klagen von Anwohnern."
       ],
       "loesung": 2,
       "stelle": "weniger an der Bauzeit selbst als an den Genehmigungsverfahren",
       "erklaerung": "Die Bauzeit wird ausdrücklich als nachrangig bezeichnet."
      },
      {
       "ort": "Gespräch — Abschnitt 4",
       "zeilen": [
        {
         "wer": "Mann",
         "text": "Ein anderes Stichwort ist Leerstand. Es gibt doch auch Wohnungen, die einfach leer stehen."
        },
        {
         "wer": "Frau",
         "text": "Ja, nach unseren Schätzungen etwa neunhundert. Viele davon gehören älteren Menschen, die in ein Pflegeheim gezogen sind, und die Angehörigen können sich nicht entscheiden, was mit der Wohnung passieren soll. Wir haben deshalb eine Beratungsstelle eingerichtet, die solche Eigentümer beim Vermieten unterstützt."
        }
       ],
       "frage": "Viele leer stehende Wohnungen gehören laut Frau Kessler …",
       "opt": [
        "Investoren, die auf steigende Preise warten.",
        "älteren Menschen, die in ein Pflegeheim gezogen sind.",
        "der Stadt, die sie bald abreißen will."
       ],
       "loesung": 1,
       "stelle": "Viele davon gehören älteren Menschen",
       "erklaerung": "Spekulation oder Abriss werden nicht erwähnt."
      },
      {
       "ort": "Gespräch — Abschnitt 5",
       "zeilen": [
        {
         "wer": "Mann",
         "text": "Und funktioniert das?"
        },
        {
         "wer": "Frau",
         "text": "Besser als erwartet. Im ersten Jahr kamen knapp hundert Wohnungen wieder auf den Markt. Entscheidend war dabei gar nicht so sehr die finanzielle Förderung, sondern dass die Stadt eine Mietgarantie übernimmt. Viele Eigentümer hatten schlicht Angst vor Mietausfällen oder Ärger mit Mietern."
        }
       ],
       "frage": "Die Eigentümer ließen sich vor allem überzeugen durch …",
       "opt": [
        "eine Mietgarantie der Stadt.",
        "hohe finanzielle Zuschüsse.",
        "die Aussicht auf höhere Mieten."
       ],
       "loesung": 0,
       "stelle": "dass die Stadt eine Mietgarantie übernimmt",
       "erklaerung": "Die Förderung war laut Frau Kessler gerade nicht entscheidend."
      },
      {
       "ort": "Gespräch — Abschnitt 6",
       "zeilen": [
        {
         "wer": "Mann",
         "text": "Wir haben eine Anruferin in der Leitung. Frau Demir, bitte."
        },
        {
         "wer": "Frau",
         "text": "Guten Abend. Mein Mann und ich wohnen allein in einer Vierzimmerwohnung, die Kinder sind längst ausgezogen. Wir würden gern in etwas Kleineres ziehen, aber jede kleinere Wohnung wäre teurer als unsere jetzige."
        },
        {
         "wer": "Frau",
         "text": "Das hören wir oft. Dafür gibt es seit diesem Jahr eine Tauschbörse der städtischen Wohnungsgesellschaft. Sie können mit einer Familie tauschen und behalten Ihren bisherigen Quadratmeterpreis. Allerdings funktioniert das bisher nur innerhalb der Bestände dieser Gesellschaft."
        }
       ],
       "frage": "Bei der Tauschbörse …",
       "opt": [
        "zahlt man den aktuellen Marktpreis der neuen Wohnung.",
        "wird jede Wohnung in Rabenfeld angeboten.",
        "kann man nur innerhalb der Wohnungen der städtischen Gesellschaft tauschen."
       ],
       "loesung": 2,
       "stelle": "nur innerhalb der Bestände dieser Gesellschaft",
       "erklaerung": "Man behält den bisherigen Quadratmeterpreis; die Börse ist auf eine Gesellschaft beschränkt."
      },
      {
       "ort": "Gespräch — Abschnitt 7",
       "zeilen": [
        {
         "wer": "Mann",
         "text": "Was halten Sie von der Forderung, grundsätzlich höher zu bauen?"
        },
        {
         "wer": "Frau",
         "text": "Viel, aber man muss genau hinschauen. Ein Hochhaus allein schafft noch keine Nachbarschaft. Wo es gelungen ist, wurden die Erdgeschosse für Läden, Cafés und Treffpunkte genutzt. Wo man darauf verzichtet hat, sind oft anonyme Siedlungen entstanden, die später teuer aufgewertet werden mussten."
        }
       ],
       "frage": "Höhere Gebäude funktionieren nach Ansicht von Frau Kessler, wenn …",
       "opt": [
        "die Erdgeschosse für Läden und Treffpunkte genutzt werden.",
        "sie ausschließlich am Stadtrand entstehen.",
        "auf Geschäfte im Erdgeschoss verzichtet wird."
       ],
       "loesung": 0,
       "stelle": "wurden die Erdgeschosse für Läden, Cafés und Treffpunkte genutzt",
       "erklaerung": "Der Verzicht auf belebte Erdgeschosse führte zu anonymen Siedlungen."
      },
      {
       "ort": "Gespräch — Abschnitt 8",
       "zeilen": [
        {
         "wer": "Mann",
         "text": "Viele junge Leute ziehen ins Umland, weil sie sich die Stadt nicht mehr leisten können. Ist das so schlimm?"
        },
        {
         "wer": "Frau",
         "text": "Für die Betroffenen ist es oft vernünftig. Problematisch wird es, wenn die Pendlerströme wachsen, ohne dass Bus und Bahn mitwachsen. Deshalb planen wir neue Wohngebiete im Umland nur noch gemeinsam mit den Nachbargemeinden und nur dort, wo es einen Bahnanschluss gibt."
        }
       ],
       "frage": "Neue Wohngebiete im Umland sollen künftig …",
       "opt": [
        "allein von der Stadt Rabenfeld geplant werden.",
        "vor allem für junge Familien reserviert werden.",
        "nur an Orten mit Bahnanschluss entstehen."
       ],
       "loesung": 2,
       "stelle": "nur dort, wo es einen Bahnanschluss gibt",
       "erklaerung": "Geplant wird gemeinsam mit den Nachbargemeinden, nicht allein."
      },
      {
       "ort": "Gespräch — Abschnitt 9",
       "zeilen": [
        {
         "wer": "Mann",
         "text": "Wenn Sie einen Wunsch an die Landesregierung frei hätten?"
        },
        {
         "wer": "Frau",
         "text": "Schnellere Verfahren. Ich wünsche mir, dass Bauanträge für geförderte Mietwohnungen bevorzugt bearbeitet werden dürfen. Mehr Geld wäre auch schön, aber ehrlich gesagt scheitern viele Projekte nicht an der Finanzierung, sondern an der Zeit bis zur Genehmigung."
        }
       ],
       "frage": "Von der Landesregierung wünscht sich Frau Kessler vor allem, dass …",
       "opt": [
        "Anträge für geförderte Mietwohnungen schneller bearbeitet werden.",
        "die Stadt mehr Geld für den Wohnungsbau bekommt.",
        "Anwohner keine Klagen mehr einreichen dürfen."
       ],
       "loesung": 0,
       "stelle": "bevorzugt bearbeitet werden dürfen",
       "erklaerung": "Geld wäre schön, ist aber laut ihr nicht das Hauptproblem."
      },
      {
       "ort": "Gespräch — Abschnitt 10",
       "zeilen": [
        {
         "wer": "Mann",
         "text": "Zum Schluss: Was können unsere Hörer selbst tun?"
        },
        {
         "wer": "Frau",
         "text": "Sich einmischen, und zwar früh. Bei jedem größeren Bauprojekt gibt es öffentliche Informationsabende, lange bevor die Bagger kommen. Dort kann man noch etwas verändern. Wer erst protestiert, wenn der Bauzaun steht, kommt meistens zu spät."
        }
       ],
       "frage": "Frau Kessler rät den Hörern, …",
       "opt": [
        "gegen Bauprojekte zu protestieren, sobald der Bauzaun steht.",
        "sich schon bei den frühen Informationsabenden zu beteiligen.",
        "ihre Fragen direkt an die Landesregierung zu richten."
       ],
       "loesung": 1,
       "stelle": "Sich einmischen, und zwar früh",
       "erklaerung": "Protest am Bauzaun kommt laut ihr meistens zu spät."
      }
     ]
    },
    {
     "id": "gg1h2s2",
     "titel": "Teambesprechung: Einführung einer neuen Planungssoftware",
     "aufgaben": [
      {
       "ort": "Gespräch — Abschnitt 1",
       "zeilen": [
        {
         "wer": "Frau",
         "text": "So, alle da? Wie ihr wisst, stellen wir ab dem ersten März die Einsatzplanung für die Monteure auf das neue Programm um. Heute geht es nicht mehr um das Ob, das hat die Geschäftsführung entschieden, sondern um das Wie. Am Ende möchte ich einen realistischen Zeitplan haben. Und bitte sagt offen, wo ihr Probleme seht, dafür ist diese Runde da."
        },
        {
         "wer": "Mann",
         "text": "Darf ich trotzdem fragen, warum wir überhaupt wechseln? Das alte System läuft doch."
        }
       ],
       "frage": "In der Besprechung soll es vor allem darum gehen, …",
       "opt": [
        "ob man das neue Programm überhaupt einführt.",
        "wie die Umstellung praktisch ablaufen soll.",
        "welches Programm die Geschäftsführung kaufen soll."
       ],
       "loesung": 1,
       "stelle": "sondern um das Wie",
       "erklaerung": "Die Entscheidung selbst ist bereits gefallen."
      },
      {
       "ort": "Gespräch — Abschnitt 2",
       "zeilen": [
        {
         "wer": "Frau",
         "text": "Es läuft, ja, aber der Hersteller bietet ab nächstem Jahr keine Sicherheitsupdates mehr an. Und ehrlich gesagt: Dass unsere Monteure ihre Aufträge morgens noch auf Papier abholen, ist nicht mehr zeitgemäß. Mit dem neuen Programm sehen sie alles auf dem Tablet, auch Änderungen im Laufe des Tages. Dann muss niemand mehr für einen verschobenen Termin ins Büro zurückfahren oder dreimal telefonieren."
        }
       ],
       "frage": "Ein Grund für den Wechsel ist, dass …",
       "opt": [
        "das alte System häufig ausfällt.",
        "die Monteure keine Tablets mehr bekommen.",
        "es für das alte System bald keine Sicherheitsupdates mehr gibt."
       ],
       "loesung": 2,
       "stelle": "keine Sicherheitsupdates mehr an",
       "erklaerung": "Das alte System läuft zwar, wird aber nicht mehr abgesichert."
      },
      {
       "ort": "Gespräch — Abschnitt 3",
       "zeilen": [
        {
         "wer": "Mann",
         "text": "Mein Problem sind die Schulungen. Die Monteure sind den ganzen Tag unterwegs. Wenn ich alle gleichzeitig ins Büro hole, steht der Betrieb still. Und am Wochenende macht das niemand freiwillig."
        },
        {
         "wer": "Frau",
         "text": "Sehe ich genauso. Der Anbieter hat deshalb kurze Lernvideos angeboten, die man sich zwischen zwei Einsätzen anschauen kann. Zusätzlich werden in jedem Team zwei Kollegen ausführlicher geschult, die dann bei Fragen weiterhelfen."
        }
       ],
       "frage": "Statt einer gemeinsamen Schulung für alle plant man …",
       "opt": [
        "kurze Lernvideos und zwei ausführlich geschulte Kollegen pro Team.",
        "einen ganztägigen Kurs im Büro für alle Monteure.",
        "Abendkurse direkt beim Anbieter."
       ],
       "loesung": 0,
       "stelle": "kurze Lernvideos angeboten",
       "erklaerung": "Alle gleichzeitig ins Büro zu holen, würde den Betrieb lahmlegen."
      },
      {
       "ort": "Gespräch — Abschnitt 4",
       "zeilen": [
        {
         "wer": "Mann",
         "text": "Und wer sucht diese zwei Leute aus? Wenn ich einfach die Jüngsten nehme, fühlen sich die Erfahrenen übergangen."
        },
        {
         "wer": "Frau",
         "text": "Guter Punkt. Ich schlage vor, dass sich die Teams selbst einigen. Wichtig ist mir nur, dass es Leute sind, die gern erklären, und nicht unbedingt die, die am schnellsten tippen. Geduld ist da wichtiger als Technikbegeisterung."
        }
       ],
       "frage": "Die Ansprechpartner in den Teams sollen vor allem …",
       "opt": [
        "zu den jüngsten Mitarbeitern gehören.",
        "vom Abteilungsleiter bestimmt werden.",
        "geduldig erklären können."
       ],
       "loesung": 2,
       "stelle": "Geduld ist da wichtiger als Technikbegeisterung",
       "erklaerung": "Die Teams entscheiden selbst; Alter und Tempo am Tablet zählen nicht."
      },
      {
       "ort": "Gespräch — Abschnitt 5",
       "zeilen": [
        {
         "wer": "Mann",
         "text": "Was passiert mit den alten Auftragsdaten? Wir brauchen die Kundenhistorie, gerade bei Wartungsverträgen."
        },
        {
         "wer": "Frau",
         "text": "Die Daten der letzten fünf Jahre werden übernommen. Alles Ältere bleibt im alten System, das wir noch zwei Jahre lang im Lesemodus behalten. Da kann man nachschauen, aber nichts mehr ändern. Danach entscheiden wir, ob wir die alten Daten archivieren lassen."
        }
       ],
       "frage": "Ältere Auftragsdaten …",
       "opt": [
        "werden vollständig in das neue Programm übernommen.",
        "kann man im alten System weiter einsehen, aber nicht bearbeiten.",
        "werden nach der Umstellung gelöscht."
       ],
       "loesung": 1,
       "stelle": "Da kann man nachschauen, aber nichts mehr ändern",
       "erklaerung": "Übernommen werden nur die letzten fünf Jahre."
      },
      {
       "ort": "Gespräch — Abschnitt 6",
       "zeilen": [
        {
         "wer": "Mann",
         "text": "Der erste März passt eigentlich gut. Die Heizungswartungen laufen dann aus, und die Klimaanlagen fangen noch nicht an."
        },
        {
         "wer": "Frau",
         "text": "Genau deshalb wurde dieser Termin gewählt. Trotzdem möchte ich nicht alle Teams auf einmal umstellen. Wir beginnen mit dem Team Nord, das ist am kleinsten. Wenn dort nach zwei Wochen alles rund läuft, folgen die anderen."
        }
       ],
       "frage": "Die Umstellung beginnt mit dem Team Nord, weil …",
       "opt": [
        "es das kleinste Team ist.",
        "dort die meisten Wartungen anfallen.",
        "sich das Team freiwillig gemeldet hat."
       ],
       "loesung": 0,
       "stelle": "Wir beginnen mit dem Team Nord, das ist am kleinsten",
       "erklaerung": "Die Größe des Teams ist der genannte Grund."
      },
      {
       "ort": "Gespräch — Abschnitt 7",
       "zeilen": [
        {
         "wer": "Mann",
         "text": "Eine Sorge höre ich von den Monteuren: Das Programm zeigt den Standort der Tablets an. Viele fragen sich, ob wir sie überwachen wollen."
        },
        {
         "wer": "Frau",
         "text": "Das nehme ich ernst. Mit dem Betriebsrat ist vereinbart, dass der Standort nur während eines Einsatzes übertragen wird und nicht für Leistungskontrollen ausgewertet werden darf. Die Vereinbarung hängen wir aus, damit jeder sie nachlesen kann."
        }
       ],
       "frage": "Mit dem Betriebsrat wurde vereinbart, dass der Standort …",
       "opt": [
        "überhaupt nicht übertragen wird.",
        "nicht zur Kontrolle der Leistung verwendet werden darf.",
        "nur von der Geschäftsführung eingesehen wird."
       ],
       "loesung": 1,
       "stelle": "nicht für Leistungskontrollen ausgewertet werden darf",
       "erklaerung": "Übertragen wird er während des Einsatzes, aber nicht zur Kontrolle genutzt."
      },
      {
       "ort": "Gespräch — Abschnitt 8",
       "zeilen": [
        {
         "wer": "Mann",
         "text": "Und wenn das Programm am Anfang hakt? Ein Monteur, der beim Kunden steht und seinen Auftrag nicht findet, verliert schnell die Geduld."
        },
        {
         "wer": "Frau",
         "text": "Für die ersten vier Wochen gibt es eine Hotline des Anbieters bis zwanzig Uhr. Außerdem behalten wir in dieser Zeit die Papierlisten als Notlösung bei. Das ist doppelte Arbeit, aber lieber das als verärgerte Kunden."
        }
       ],
       "frage": "In den ersten vier Wochen …",
       "opt": [
        "werden die Aufträge zusätzlich auf Papier ausgegeben.",
        "ist die Hotline rund um die Uhr erreichbar.",
        "arbeiten die Monteure nur mit dem alten System."
       ],
       "loesung": 0,
       "stelle": "behalten wir in dieser Zeit die Papierlisten als Notlösung bei",
       "erklaerung": "Die Hotline ist nur bis zwanzig Uhr erreichbar."
      },
      {
       "ort": "Gespräch — Abschnitt 9",
       "zeilen": [
        {
         "wer": "Mann",
         "text": "Bekommen die Leute die Zeit für die Lernvideos als Arbeitszeit angerechnet?"
        },
        {
         "wer": "Frau",
         "text": "Selbstverständlich. Niemand soll sich das abends auf dem Sofa anschauen müssen. Tragt die Zeit bitte unter einem eigenen Stichwort im Stundenzettel ein, damit wir am Ende sehen, wie viel Aufwand die Umstellung gekostet hat."
        }
       ],
       "frage": "Die Zeit für die Lernvideos sollen die Mitarbeiter …",
       "opt": [
        "gesondert im Stundenzettel eintragen.",
        "in ihrer Freizeit aufbringen.",
        "nach der Umstellung nachholen."
       ],
       "loesung": 0,
       "stelle": "unter einem eigenen Stichwort im Stundenzettel ein",
       "erklaerung": "Das Anschauen in der Freizeit lehnt die Chefin ausdrücklich ab."
      },
      {
       "ort": "Gespräch — Abschnitt 10",
       "zeilen": [
        {
         "wer": "Frau",
         "text": "Ich fasse zusammen: Du sprichst bis Freitag mit den Teams wegen der Ansprechpartner, ich kläre mit dem Anbieter die Termine für die ausführliche Schulung. In drei Wochen treffen wir uns wieder, dann mit den Ansprechpartnern zusammen."
        },
        {
         "wer": "Mann",
         "text": "Einverstanden. Ich schicke den Teams heute noch eine kurze Nachricht. Dann können sie sich schon einmal Gedanken machen, wer infrage kommt."
        }
       ],
       "frage": "Beim nächsten Treffen …",
       "opt": [
        "entscheidet die Geschäftsführung über den Termin.",
        "ist das Team Nord bereits umgestellt.",
        "sind auch die Ansprechpartner aus den Teams dabei."
       ],
       "loesung": 2,
       "stelle": "dann mit den Ansprechpartnern zusammen",
       "erklaerung": "Das Treffen ist in drei Wochen, die Umstellung beginnt erst im März."
      }
     ]
    },
    {
     "id": "gg1h2s3",
     "titel": "Interview: Ein Restaurantbesitzer gegen Lebensmittelverschwendung",
     "aufgaben": [
      {
       "ort": "Gespräch — Abschnitt 1",
       "zeilen": [
        {
         "wer": "Frau",
         "text": "Herr Albers, Ihr Restaurant wirft heute nur noch ein Drittel so viel Essen weg wie vor drei Jahren. Wie kam es dazu?"
        },
        {
         "wer": "Mann",
         "text": "Ehrlich gesagt nicht aus Idealismus, sondern weil mir mein Steuerberater eine Rechnung aufgemacht hat. Er hat ausgerechnet, was uns der Abfall im Jahr kostet, Einkauf, Arbeitszeit und Entsorgung zusammen. Ich dachte zuerst, er hätte sich verrechnet. Hatte er aber nicht, im Gegenteil, er hatte manches sogar noch vorsichtig geschätzt."
        }
       ],
       "frage": "Den Anlass für die Veränderung gab …",
       "opt": [
        "eine Beschwerde von Gästen über zu große Portionen.",
        "eine Berechnung der Kosten durch den Steuerberater.",
        "ein Zeitungsbericht über Lebensmittelverschwendung."
       ],
       "loesung": 1,
       "stelle": "weil mir mein Steuerberater eine Rechnung aufgemacht hat",
       "erklaerung": "Herr Albers betont, es sei nicht aus Idealismus geschehen."
      },
      {
       "ort": "Gespräch — Abschnitt 2",
       "zeilen": [
        {
         "wer": "Frau",
         "text": "Wo haben Sie angesetzt?"
        },
        {
         "wer": "Mann",
         "text": "Wir haben einen Monat lang alles gewogen, was im Müll landete, getrennt nach Küche, Lager und Tellern der Gäste. Ich hätte gewettet, dass das meiste von den Tellern kommt. Tatsächlich war es das Lager: Ware, die abgelaufen war, weil wir zu viel bestellt hatten. Aus lauter Angst, dass uns am Wochenende etwas ausgeht."
        }
       ],
       "frage": "Die Messung zeigte, dass der meiste Abfall …",
       "opt": [
        "von den Tellern der Gäste kam.",
        "in der Küche beim Zubereiten entstand.",
        "aus dem Lager wegen zu großer Bestellungen stammte."
       ],
       "loesung": 2,
       "stelle": "Tatsächlich war es das Lager",
       "erklaerung": "Die Teller waren nur seine falsche Vermutung."
      },
      {
       "ort": "Gespräch — Abschnitt 3",
       "zeilen": [
        {
         "wer": "Frau",
         "text": "Und wie haben Sie das geändert?"
        },
        {
         "wer": "Mann",
         "text": "Wir bestellen jetzt fast täglich in kleinen Mengen statt zweimal pro Woche in großen. Das ist teurer bei der Lieferung, rechnet sich aber trotzdem. Außerdem gilt eine einfache Regel: Was zuerst kommt, wird zuerst verbraucht, und alles bekommt ein Etikett mit Datum. Das klingt banal, aber vorher hat das niemand konsequent gemacht."
        }
       ],
       "frage": "Die häufigeren, kleineren Bestellungen …",
       "opt": [
        "verursachen höhere Lieferkosten, lohnen sich aber insgesamt.",
        "sind günstiger als die früheren Großbestellungen.",
        "wurden vom Lieferanten verlangt."
       ],
       "loesung": 0,
       "stelle": "Das ist teurer bei der Lieferung, rechnet sich aber trotzdem",
       "erklaerung": "Die Lieferung wird teurer, die Gesamtrechnung aber besser."
      },
      {
       "ort": "Gespräch — Abschnitt 4",
       "zeilen": [
        {
         "wer": "Frau",
         "text": "Was ist mit den Tellerresten?"
        },
        {
         "wer": "Mann",
         "text": "Da haben wir die Portionen angepasst. Die Beilagen waren einfach zu groß, vor allem die Pommes. Heute gibt es eine normale Portion, und wer mehr möchte, bekommt kostenlos nachgereicht. Erstaunlicherweise fragen nur wenige nach, und beschwert hat sich bisher niemand."
        }
       ],
       "frage": "Gäste, die mehr Beilagen möchten, …",
       "opt": [
        "müssen einen Aufpreis bezahlen.",
        "bekommen ohne zusätzliche Kosten nachgereicht.",
        "können vorab eine große Portion bestellen."
       ],
       "loesung": 1,
       "stelle": "bekommt kostenlos nachgereicht",
       "erklaerung": "Das Nachreichen ist ausdrücklich kostenlos."
      },
      {
       "ort": "Gespräch — Abschnitt 5",
       "zeilen": [
        {
         "wer": "Frau",
         "text": "Viele Gäste möchten Reste ja auch mitnehmen."
        },
        {
         "wer": "Mann",
         "text": "Das bieten wir aktiv an, in Mehrwegschalen gegen Pfand. Früher haben sich die Leute oft nicht getraut zu fragen, weil sie dachten, es wirke geizig. Seit die Bedienung von sich aus fragt, nehmen deutlich mehr Gäste ihr Essen mit. Eine Kleinigkeit mit großer Wirkung. Und die Schalen kommen fast alle zurück, weil die Leute ihr Pfand wiederhaben wollen."
        }
       ],
       "frage": "Mehr Gäste nehmen ihre Reste mit, seit …",
       "opt": [
        "die Bedienung von sich aus danach fragt.",
        "die Schalen kostenlos angeboten werden.",
        "es auf der Speisekarte einen Hinweis gibt."
       ],
       "loesung": 0,
       "stelle": "Seit die Bedienung von sich aus fragt",
       "erklaerung": "Die Schalen gibt es gegen Pfand, also nicht kostenlos."
      },
      {
       "ort": "Gespräch — Abschnitt 6",
       "zeilen": [
        {
         "wer": "Frau",
         "text": "Sie arbeiten auch mit einer Initiative zusammen, die übrig gebliebenes Essen verteilt. Ist das rechtlich nicht kompliziert?"
        },
        {
         "wer": "Mann",
         "text": "Weniger, als man denkt. Gerichte, die schon beim Gast waren, dürfen wir natürlich nicht weitergeben. Aber was in der Küche übrig bleibt und richtig gekühlt wurde, holen die Helfer abends ab. Wir notieren nur, wann es gekocht und wie es gelagert wurde. Das ist eine Sache von zwei Minuten."
        }
       ],
       "frage": "An die Initiative weitergegeben wird …",
       "opt": [
        "nur korrekt gekühltes Essen aus der Küche.",
        "auch Essen, das bereits beim Gast auf dem Tisch stand.",
        "ausschließlich ungekochte Ware aus dem Lager."
       ],
       "loesung": 0,
       "stelle": "was in der Küche übrig bleibt und richtig gekühlt wurde",
       "erklaerung": "Essen, das schon beim Gast war, ist ausdrücklich ausgeschlossen."
      },
      {
       "ort": "Gespräch — Abschnitt 7",
       "zeilen": [
        {
         "wer": "Frau",
         "text": "Wie haben Ihre Mitarbeiter reagiert?"
        },
        {
         "wer": "Mann",
         "text": "Am Anfang skeptisch. In der Gastronomie gilt es fast als Ehrensache, dass nie etwas ausgeht. Ein Koch, dem abends das Tagesgericht ausgeht, fühlt sich als Versager. Wir haben gesagt: Wenn das Tagesgericht um einundzwanzig Uhr ausverkauft ist, ist das kein Fehler, sondern gut geplant."
        }
       ],
       "frage": "Die Mitarbeiter mussten vor allem lernen, dass …",
       "opt": [
        "das Tagesgericht bis zum Schluss vorrätig sein muss.",
        "die Küche künftig früher schließt.",
        "ein ausverkauftes Tagesgericht kein Versagen ist."
       ],
       "loesung": 2,
       "stelle": "ist das kein Fehler, sondern gut geplant",
       "erklaerung": "Die alte Ehrensache, dass nie etwas ausgeht, sollte gerade überwunden werden."
      },
      {
       "ort": "Gespräch — Abschnitt 8",
       "zeilen": [
        {
         "wer": "Frau",
         "text": "Haben Sie damit Gäste verloren?"
        },
        {
         "wer": "Mann",
         "text": "Einzelne vielleicht. Wir schreiben inzwischen auf die Tafel, wie viele Portionen vom Tagesgericht noch da sind. Das hat einen unerwarteten Effekt: Die Leute bestellen es dadurch eher, weil es knapp wirkt. Manche Stammgäste reservieren ihre Portion schon morgens per Telefon."
        }
       ],
       "frage": "Die Anzeige der übrigen Portionen führt dazu, dass …",
       "opt": [
        "sich Gäste über das knappe Angebot beschweren.",
        "das Tagesgericht häufiger bestellt wird.",
        "weniger Stammgäste kommen."
       ],
       "loesung": 1,
       "stelle": "Die Leute bestellen es dadurch eher, weil es knapp wirkt",
       "erklaerung": "Die Knappheit wirkt als Anreiz, nicht als Ärgernis."
      },
      {
       "ort": "Gespräch — Abschnitt 9",
       "zeilen": [
        {
         "wer": "Frau",
         "text": "Würden Sie anderen Gastronomen raten, es Ihnen nachzumachen?"
        },
        {
         "wer": "Mann",
         "text": "Auf jeden Fall, aber nicht alles auf einmal. Mein Rat: Fangt mit dem Wiegen an. Solange man nicht weiß, wo der Abfall entsteht, verändert man das Falsche. Wir haben anfangs viel Energie in kleinere Teller gesteckt, dabei lag das Problem ganz woanders."
        }
       ],
       "frage": "Anderen Gastronomen empfiehlt Herr Albers, zuerst …",
       "opt": [
        "kleinere Teller anzuschaffen.",
        "mit einer Initiative zusammenzuarbeiten.",
        "zu messen, wo der Abfall entsteht."
       ],
       "loesung": 2,
       "stelle": "Fangt mit dem Wiegen an",
       "erklaerung": "Die kleineren Teller nennt er gerade als Beispiel für einen Fehlgriff."
      },
      {
       "ort": "Gespräch — Abschnitt 10",
       "zeilen": [
        {
         "wer": "Frau",
         "text": "Und was kommt als Nächstes?"
        },
        {
         "wer": "Mann",
         "text": "Wir wollen Gemüse direkt bei zwei Höfen aus der Umgebung kaufen, auch die krummen Karotten, die der Großhandel nicht nimmt. Für Suppen und Soßen spielt die Form keine Rolle. Die Bauern freuen sich, und wir zahlen weniger. Im Frühjahr geht es los. Wenn es klappt, wollen wir das auch auf Obst ausweiten."
        }
       ],
       "frage": "Künftig will das Restaurant …",
       "opt": [
        "Gemüse kaufen, das der Großhandel wegen seiner Form ablehnt.",
        "nur noch Suppen und Soßen anbieten.",
        "einen eigenen Gemüsegarten anlegen."
       ],
       "loesung": 0,
       "stelle": "auch die krummen Karotten, die der Großhandel nicht nimmt",
       "erklaerung": "Suppen und Soßen sind nur die Verwendung, nicht das neue Angebot."
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
     "id": "gg1h3s1",
     "titel": "Volkshochschule: Wie Werbung uns beeinflusst",
     "aufgaben": [
      {
       "ort": "Vortrag — Abschnitt 1",
       "wer": "Frau",
       "text": "Guten Abend, meine Damen und Herren, schön, dass Sie heute so zahlreich in die Volkshochschule gekommen sind. Wenn ich in Kursen frage, wer sich von Werbung beeinflussen lässt, hebt erfahrungsgemäß kaum jemand die Hand. Die meisten Menschen sind überzeugt, dass Werbung zwar bei anderen wirkt, aber nicht bei ihnen selbst. Genau dieses Gefühl, man sei immun, ist allerdings ein ziemlich zuverlässiges Zeichen dafür, dass die Werbung ihre Arbeit gut macht. Ich will Ihnen heute nicht erklären, dass Werbung grundsätzlich böse ist. Sie informiert uns über Angebote und finanziert nebenbei einen großen Teil der Medien, die wir täglich nutzen. Mein Ziel ist ein anderes: Ich möchte Ihnen zeigen, mit welchen Mitteln gearbeitet wird, damit Sie diese Mittel in Zukunft leichter durchschauen können.",
       "notiz": {
        "titel": "Handzettel: Folie 1 — Einleitung und Ziel des Abends",
        "zeilen": [
         "verbreiteter Glaube: Werbung wirkt nur bei anderen",
         "Werbung nicht grundsätzlich schlecht: Information, Finanzierung der Medien"
        ],
        "feld": "Ziel des Vortrags:",
        "frei": true,
        "muster": "Mittel der Werbung zeigen, damit man sie durchschaut",
        "loesungen": [
         "Mittel der Werbung zeigen",
         "Werbemittel durchschauen",
         "Methoden der Werbung erkennen",
         "zeigen, wie Werbung arbeitet",
         "Tricks der Werbung durchschauen"
        ]
       },
       "stelle": "Ich möchte Ihnen zeigen, mit welchen Mitteln gearbeitet wird",
       "erklaerung": "Die Rednerin grenzt sich ab: Sie will Werbung nicht verurteilen, sondern ihre Mittel erkennbar machen.",
       "frage": "Ergänze deine Notiz auf dem Handzettel."
      },
      {
       "ort": "Vortrag — Abschnitt 2",
       "wer": "Frau",
       "text": "Fangen wir mit einer einfachen Frage an: Wie vielen Werbebotschaften begegnen wir eigentlich an einem gewöhnlichen Tag? Die Schätzungen gehen hier weit auseinander, und manche Zahlen, die im Umlauf sind, halte ich für übertrieben. Eine sorgfältige Untersuchung des Instituts für Medienforschung in Rodenkirchen kommt auf einen Wert, den ich für realistisch halte. Die Forscher haben Testpersonen einen ganzen Tag lang mit einer kleinen Kamera begleitet und jede Werbung gezählt, die tatsächlich in ihr Blickfeld geriet. Herausgekommen sind im Durchschnitt etwa dreihundert Kontakte pro Tag, von Plakaten über Radiospots bis hin zu Anzeigen auf dem Handy. Bewusst wahrgenommen haben die Testpersonen davon allerdings nur einen winzigen Bruchteil. An mehr als zehn Anzeigen konnte sich am Abend kaum jemand erinnern.",
       "notiz": {
        "titel": "Handzettel: Folie 2 — Wie oft wir Werbung begegnen",
        "zeilen": [
         "viele kursierende Zahlen übertrieben",
         "Methode: Testpersonen mit Kamera begleitet"
        ],
        "feld": "Werbekontakte pro Tag laut Studie:",
        "frei": true,
        "muster": "etwa dreihundert",
        "loesungen": [
         "etwa dreihundert",
         "dreihundert",
         "300",
         "ca. 300",
         "rund 300",
         "etwa 300 Kontakte"
        ]
       },
       "stelle": "im Durchschnitt etwa dreihundert Kontakte pro Tag",
       "erklaerung": "Gefragt sind die Kontakte insgesamt; die zehn Anzeigen sind nur die, an die man sich erinnert.",
       "frage": "Ergänze deine Notiz auf dem Handzettel."
      },
      {
       "ort": "Vortrag — Abschnitt 3",
       "wer": "Frau",
       "text": "Wenn wir so vielen Botschaften ausgesetzt sind, ist die wichtigste Währung der Werbung unsere Aufmerksamkeit. Wie also gewinnt man sie? Lange glaubte man, Werbung müsse vor allem laut und auffällig sein, also grelle Farben, große Schrift und möglichst viel Bewegung. Das funktioniert jedoch immer schlechter, weil alle anderen genau dasselbe tun. Heute setzt man deshalb eher auf das Unerwartete. Ein Bild, das nicht zu unseren Erwartungen passt, etwa eine Kuh in einer Bankfiliale, lässt uns innehalten, weil unser Gehirn diesen Widerspruch auflösen will. In diesen zwei, drei Sekunden des Stutzens hat die Werbung bereits gewonnen. Sie hat nämlich erreicht, dass wir hinsehen, und das ist der erste und schwierigste Schritt.",
       "notiz": {
        "titel": "Handzettel: Folie 3 — Aufmerksamkeit gewinnen",
        "zeilen": [
         "früher: laut, grell, viel Bewegung",
         "Problem: alle machen dasselbe"
        ],
        "feld": "Heutige Strategie für Aufmerksamkeit:",
        "frei": true,
        "muster": "das Unerwartete / Überraschung",
        "loesungen": [
         "das Unerwartete",
         "Überraschung",
         "unerwartete Bilder",
         "Widerspruch zur Erwartung",
         "etwas Unerwartetes zeigen"
        ]
       },
       "stelle": "Heute setzt man deshalb eher auf das Unerwartete",
       "erklaerung": "Laut und grell war die frühere Strategie; heute wird bewusst mit Überraschung gearbeitet.",
       "frage": "Ergänze deine Notiz auf dem Handzettel."
      },
      {
       "ort": "Vortrag — Abschnitt 4",
       "wer": "Frau",
       "text": "Hat man unsere Aufmerksamkeit, stellt sich die Frage, wie man uns überzeugt. Man könnte meinen, durch gute Argumente, also durch Informationen über Preis, Qualität oder Haltbarkeit. Bei manchen Produkten, etwa bei Waschmaschinen, spielen solche Fakten tatsächlich eine Rolle. Bei den allermeisten Alltagsprodukten aber unterscheiden sich die Angebote kaum voneinander. Ein Duschgel ist ein Duschgel. Deshalb verkauft die Werbung hier nicht das Produkt, sondern ein Gefühl, das sie mit dem Produkt verknüpft, also Freiheit, Geborgenheit oder Zugehörigkeit. Denken Sie an die Werbung für Mineralwasser, in der nie über Mineralien gesprochen wird, sondern über Frische und Bergwiesen. Wir kaufen dann, ohne es zu merken, ein Stück dieses Lebensgefühls mit.",
       "notiz": {
        "titel": "Handzettel: Folie 4 — Gefühle statt Argumente",
        "zeilen": [
         "Fakten wichtig nur bei manchen Produkten, etwa Waschmaschinen",
         "Alltagsprodukte kaum unterscheidbar"
        ],
        "feld": "Was Werbung bei Alltagsprodukten verkauft:",
        "frei": true,
        "muster": "ein Gefühl, das mit dem Produkt verknüpft wird",
        "loesungen": [
         "ein Gefühl",
         "Gefühle",
         "ein Lebensgefühl",
         "Emotionen",
         "Gefühle wie Freiheit oder Geborgenheit"
        ]
       },
       "stelle": "verkauft die Werbung hier nicht das Produkt, sondern ein Gefühl",
       "erklaerung": "Argumente gelten nur für einige teure Geräte; bei Alltagsprodukten steht das verknüpfte Gefühl im Mittelpunkt.",
       "frage": "Ergänze deine Notiz auf dem Handzettel."
      },
      {
       "ort": "Vortrag — Abschnitt 5",
       "wer": "Frau",
       "text": "Ein drittes Mittel ist so simpel, dass man es leicht unterschätzt: die Wiederholung. Sie kennen das vielleicht von einem Lied, das Sie beim ersten Hören eher nervig finden und nach dem zehnten Mal plötzlich mitsingen. In der Psychologie nennt man das den Effekt der bloßen Darbietung. Was uns vertraut ist, halten wir für sicher und sympathisch, und zwar selbst dann, wenn wir uns gar nicht bewusst an die Werbung erinnern. Für Werbetreibende ist das eine gute Nachricht, denn sie brauchen nicht einmal unsere volle Aufmerksamkeit. Es reicht, wenn ein Markenname immer wieder am Rand unseres Blickfelds auftaucht. Stehen wir später im Supermarkt vor dem Regal, greifen wir eher zu dem Namen, der uns irgendwie bekannt vorkommt.",
       "notiz": {
        "titel": "Handzettel: Folie 5 — Wiederholung und Vertrautheit",
        "zeilen": [
         "Beispiel: Lied, das man erst nervig findet",
         "Effekt der bloßen Darbietung"
        ],
        "feld": "Wirkung von Vertrautheit:",
        "frei": true,
        "muster": "Vertrautes wirkt sicher und sympathisch",
        "loesungen": [
         "wirkt sicher und sympathisch",
         "Vertrautes halten wir für sicher",
         "sicher und sympathisch",
         "man vertraut bekannten Marken",
         "wirkt sympathisch"
        ]
       },
       "stelle": "Was uns vertraut ist, halten wir für sicher und sympathisch",
       "erklaerung": "Die Wirkung tritt sogar ohne bewusste Erinnerung ein: Vertrautes erscheint sicher und sympathisch.",
       "frage": "Ergänze deine Notiz auf dem Handzettel."
      },
      {
       "ort": "Vortrag — Abschnitt 6",
       "wer": "Frau",
       "text": "Damit kommen wir zu einem Mechanismus, den Sie alle aus dem Alltag kennen. Stellen Sie sich vor, Sie sind in einer fremden Stadt und suchen ein Restaurant. Das eine ist leer, im anderen ist kaum ein Tisch frei. Wo gehen Sie hin? Die meisten wählen das volle Restaurant, weil sie annehmen, dass so viele Menschen sich nicht irren können. Genau diese Neigung, uns am Verhalten anderer zu orientieren, nutzt die Werbung ganz gezielt aus. Sätze wie meistverkauft oder schon eine Million zufriedene Kunden sollen uns signalisieren, dass wir mit dem Kauf nichts falsch machen. Im Internet übernehmen diese Rolle die Kundenbewertungen. Sie sollten allerdings wissen, dass ein nicht unerheblicher Teil dieser Bewertungen gekauft oder gefälscht ist.",
       "notiz": {
        "titel": "Handzettel: Folie 6 — Was die anderen tun",
        "zeilen": [
         "Beispiel: volles Restaurant wirkt besser",
         "Formulierungen wie meistverkauft"
        ],
        "feld": "Entsprechung im Internet:",
        "frei": true,
        "muster": "Kundenbewertungen, teils gekauft oder gefälscht",
        "loesungen": [
         "Kundenbewertungen",
         "Bewertungen",
         "Online-Bewertungen",
         "Kundenbewertungen im Netz",
         "Sternebewertungen"
        ]
       },
       "stelle": "Im Internet übernehmen diese Rolle die Kundenbewertungen",
       "erklaerung": "Das Restaurant ist nur das Alltagsbeispiel; im Netz erfüllen Kundenbewertungen dieselbe Funktion.",
       "frage": "Ergänze deine Notiz auf dem Handzettel."
      },
      {
       "ort": "Vortrag — Abschnitt 7",
       "wer": "Frau",
       "text": "Ein weiteres, sehr wirksames Mittel ist die künstliche Verknappung. Nur noch drei Zimmer verfügbar, Angebot endet um Mitternacht, nur solange der Vorrat reicht. All diese Botschaften erzeugen Druck. Warum reagieren wir so stark darauf? Die Antwort liegt in einer einfachen psychologischen Tatsache: Ein möglicher Verlust schmerzt uns deutlich mehr, als uns ein gleich großer Gewinn freut. Wer fürchtet, ein Schnäppchen zu verpassen, denkt nicht mehr in Ruhe darüber nach, ob er das Produkt überhaupt braucht. Mein Rat ist daher ganz praktisch. Wenn Sie spüren, dass Sie unter Zeitdruck gesetzt werden, legen Sie eine Pause ein und schlafen Sie eine Nacht darüber. Erstaunlich oft ist das angeblich einmalige Angebot am nächsten Tag immer noch da.",
       "notiz": {
        "titel": "Handzettel: Folie 7 — Knappheit und Zeitdruck",
        "zeilen": [
         "Beispiele: nur noch drei Zimmer, Angebot endet um Mitternacht",
         "Verlust schmerzt mehr, als Gewinn freut"
        ],
        "feld": "Rat der Referentin bei Zeitdruck:",
        "frei": true,
        "muster": "Pause machen, eine Nacht darüber schlafen",
        "loesungen": [
         "eine Nacht darüber schlafen",
         "Pause machen",
         "eine Nacht warten",
         "nicht sofort kaufen, eine Nacht abwarten",
         "abwarten"
        ]
       },
       "stelle": "legen Sie eine Pause ein und schlafen Sie eine Nacht darüber",
       "erklaerung": "Gefragt ist nicht die psychologische Erklärung, sondern der praktische Rat am Ende des Abschnitts.",
       "frage": "Ergänze deine Notiz auf dem Handzettel."
      },
      {
       "ort": "Vortrag — Abschnitt 8",
       "wer": "Frau",
       "text": "Besonders weit entwickelt sind diese Techniken im Internet. Der entscheidende Unterschied zur klassischen Werbung besteht darin, dass sie dort nicht mehr für alle gleich aussieht. Jeder Klick, jede Suche und sogar die Zeit, die Sie auf einem Bild verweilen, wird gespeichert und ausgewertet. Daraus entsteht ein Profil, das erstaunlich genau sein kann. Wenn Sie sich also wundern, warum Ihnen nach einer Suche nach Wanderschuhen wochenlang Wanderschuhe angezeigt werden, ist das kein Zufall. Problematisch wird es, wenn die Profile auf unsere Schwächen zielen, etwa wenn spätabends, wenn wir müde sind, gezielt Angebote eingeblendet werden. Ein wichtiger Schutz besteht darin, regelmäßig die Cookies zu löschen und in den Einstellungen die personalisierte Werbung abzulehnen.",
       "notiz": {
        "titel": "Handzettel: Folie 8 — Werbung im Netz",
        "zeilen": [
         "Klicks, Suchen, Verweildauer werden gespeichert",
         "Problem: Profile zielen auf Schwächen"
        ],
        "feld": "Unterschied zur klassischen Werbung:",
        "frei": true,
        "muster": "nicht mehr für alle gleich, personalisiert",
        "loesungen": [
         "personalisiert",
         "nicht für alle gleich",
         "individuell zugeschnitten",
         "auf Profile zugeschnitten",
         "personalisierte Werbung"
        ]
       },
       "stelle": "dass sie dort nicht mehr für alle gleich aussieht",
       "erklaerung": "Die Datensammlung ist das Mittel; der entscheidende Unterschied ist, dass jeder andere Werbung sieht.",
       "frage": "Ergänze deine Notiz auf dem Handzettel."
      },
      {
       "ort": "Vortrag — Abschnitt 9",
       "wer": "Frau",
       "text": "Ein Wort noch zu einer besonders verletzlichen Gruppe, nämlich zu unseren Kindern. Kinder bis etwa zum Grundschulalter können Werbung und Programm kaum unterscheiden. Sie halten einen Werbespot oft für einen Teil der Sendung und verstehen nicht, dass jemand ihnen etwas verkaufen will. Hinzu kommt, dass Werbung für Kinder heute vor allem in Videos auf Plattformen stattfindet, in denen beliebte junge Leute Spielzeug auspacken und begeistert ausprobieren. Für Kinder wirkt das wie ein Freund, der eine Empfehlung ausspricht. Was hilft dagegen? Verbote allein sind wenig wirksam. Viel wichtiger ist es, gemeinsam mit den Kindern Werbung anzusehen und darüber zu sprechen, wer dafür bezahlt hat und was erreicht werden soll.",
       "notiz": {
        "titel": "Handzettel: Folie 9 — Kinder als Zielgruppe",
        "zeilen": [
         "Kinder unterscheiden Werbung und Programm kaum",
         "Werbung heute vor allem in Videos mit Spielzeug"
        ],
        "feld": "Was Eltern tun sollten:",
        "frei": true,
        "muster": "gemeinsam Werbung ansehen und darüber sprechen",
        "loesungen": [
         "gemeinsam Werbung ansehen und darüber sprechen",
         "mit Kindern über Werbung sprechen",
         "gemeinsam ansehen und besprechen",
         "darüber reden, wer bezahlt hat"
        ]
       },
       "stelle": "gemeinsam mit den Kindern Werbung anzusehen und darüber zu sprechen",
       "erklaerung": "Verbote werden ausdrücklich als wenig wirksam bezeichnet; empfohlen wird das gemeinsame Gespräch.",
       "frage": "Ergänze deine Notiz auf dem Handzettel."
      },
      {
       "ort": "Vortrag — Abschnitt 10",
       "wer": "Frau",
       "text": "Lassen Sie mich zum Schluss zusammenfassen, was Sie aus dem heutigen Abend mitnehmen können. Werbung arbeitet mit Überraschung, mit Gefühlen, mit Wiederholung, mit dem Verhalten anderer und mit künstlichem Zeitdruck. Keines dieser Mittel ist an sich verwerflich, und wir werden ihnen auch nicht entkommen. Wir können aber lernen, sie zu bemerken. Mein wichtigster Tipp ist deshalb eine kleine Frage, die Sie sich vor jedem größeren Kauf stellen sollten: Würde ich das auch kaufen, wenn ich die Werbung dafür nie gesehen hätte? Wenn Sie diese Frage ehrlich mit Ja beantworten können, dann kaufen Sie mit gutem Gewissen. Ich danke Ihnen für Ihre Aufmerksamkeit und freue mich jetzt auf Ihre Fragen.",
       "notiz": {
        "titel": "Handzettel: Folie 10 — Tipps für den Alltag",
        "zeilen": [
         "Mittel: Überraschung, Gefühle, Wiederholung, andere, Zeitdruck",
         "entkommen unmöglich, aber bemerken möglich"
        ],
        "feld": "Kontrollfrage vor jedem Kauf:",
        "frei": true,
        "muster": "Würde ich es auch ohne die Werbung kaufen?",
        "loesungen": [
         "Würde ich es auch ohne Werbung kaufen?",
         "auch ohne Werbung kaufen?",
         "Würde ich das ohne die Werbung kaufen",
         "ohne Werbung auch kaufen"
        ]
       },
       "stelle": "Würde ich das auch kaufen, wenn ich die Werbung dafür nie gesehen hätte?",
       "erklaerung": "Die Rednerin nennt ausdrücklich ihren wichtigsten Tipp in Form einer Frage.",
       "frage": "Ergänze deine Notiz auf dem Handzettel."
      }
     ]
    },
    {
     "id": "gg1h3s2",
     "titel": "Gesundheitstag im Betrieb: Gesund im Schichtdienst",
     "aufgaben": [
      {
       "ort": "Vortrag — Abschnitt 1",
       "wer": "Mann",
       "text": "Liebe Kollegen, ich freue mich, dass so viele von Ihnen heute beim Gesundheitstag dabei sind, und zwar auch diejenigen, die direkt aus der Nachtschicht kommen. Für die Neuen: Ich bin seit sechs Jahren Betriebsarzt hier im Logistikzentrum Hallstedt. Anlass für diesen Vortrag ist unsere Mitarbeiterbefragung vom Frühjahr. Wir wollten wissen, was Ihnen gesundheitlich am meisten zu schaffen macht. Ich hatte ehrlich gesagt erwartet, dass Rückenschmerzen ganz oben stehen, weil bei uns viel gehoben und getragen wird. Rückenschmerzen landeten aber nur auf Platz zwei. Am häufigsten genannt wurden Schlafprobleme, und zwar von fast der Hälfte derjenigen, die regelmäßig nachts arbeiten. Deshalb möchte ich heute ausschließlich über den Schichtdienst sprechen.",
       "notiz": {
        "titel": "Handzettel: Folie 1 — Begrüßung und Anlass",
        "zeilen": [
         "Referent: Betriebsarzt, Logistikzentrum Hallstedt",
         "Rückenschmerzen: Platz zwei"
        ],
        "feld": "Häufigstes Problem laut Befragung:",
        "frei": true,
        "muster": "Schlafprobleme",
        "loesungen": [
         "Schlafprobleme",
         "Schlafstörungen",
         "schlechter Schlaf",
         "Probleme beim Schlafen"
        ]
       },
       "stelle": "Am häufigsten genannt wurden Schlafprobleme",
       "erklaerung": "Der Arzt hatte Rückenschmerzen erwartet, doch diese kamen nur auf Platz zwei.",
       "frage": "Ergänze deine Notiz auf dem Handzettel."
      },
      {
       "ort": "Vortrag — Abschnitt 2",
       "wer": "Mann",
       "text": "Um zu verstehen, warum Schichtarbeit so anstrengend ist, müssen wir kurz über die innere Uhr sprechen. Jede Zelle unseres Körpers folgt einem Rhythmus von ungefähr vierundzwanzig Stunden. Gesteuert wird dieser Rhythmus von einer Art Taktgeber im Gehirn, der sich vor allem am Tageslicht orientiert. Er sorgt dafür, dass zum Beispiel die Körpertemperatur in den frühen Morgenstunden am niedrigsten ist und dass wir nachts weniger Hunger haben. Wer nachts arbeitet, arbeitet also gegen seine eigene Biologie. Das Entscheidende dabei ist: Die innere Uhr lässt sich nur sehr langsam umstellen, etwa um eine Stunde pro Tag. Nach einer Woche Nachtschicht ist man also bestenfalls halb angepasst, und am freien Wochenende stellt man alles wieder zurück. Ein echter Gewöhnungseffekt, auf den viele hoffen, stellt sich deshalb bei den meisten Menschen auch nach Jahren nicht ein.",
       "notiz": {
        "titel": "Handzettel: Folie 2 — Die innere Uhr",
        "zeilen": [
         "Rhythmus von etwa vierundzwanzig Stunden",
         "Taktgeber im Gehirn orientiert sich am Tageslicht"
        ],
        "feld": "Tempo der Umstellung der inneren Uhr:",
        "frei": true,
        "muster": "etwa eine Stunde pro Tag",
        "loesungen": [
         "etwa eine Stunde pro Tag",
         "eine Stunde pro Tag",
         "1 Stunde pro Tag",
         "1 h pro Tag",
         "ca. 1 Std./Tag"
        ]
       },
       "stelle": "nur sehr langsam umstellen, etwa um eine Stunde pro Tag",
       "erklaerung": "Vierundzwanzig Stunden beschreibt den Rhythmus selbst, nicht die Geschwindigkeit der Anpassung.",
       "frage": "Ergänze deine Notiz auf dem Handzettel."
      },
      {
       "ort": "Vortrag — Abschnitt 3",
       "wer": "Mann",
       "text": "Was bedeutet das nun für die Gesundheit? Kurzfristig spüren die meisten von Ihnen die Folgen sofort: Müdigkeit, Konzentrationsprobleme und eine gewisse Gereiztheit. Das ist unangenehm, aber umkehrbar. Ernster sind die langfristigen Folgen. Studien zeigen, dass Menschen, die über viele Jahre im Schichtdienst arbeiten, häufiger an Übergewicht, an Magen- und Darmbeschwerden und an Herz-Kreislauf-Erkrankungen leiden. Ich möchte Ihnen damit keine Angst machen. Die gute Nachricht ist nämlich, dass sich ein großer Teil dieses Risikos nicht durch die Schichtarbeit an sich erklärt, sondern durch das, was drumherum passiert, also durch schlechten Schlaf, unregelmäßiges Essen und zu wenig Bewegung. Und genau daran können Sie selbst etwas ändern.",
       "notiz": {
        "titel": "Handzettel: Folie 3 — Folgen für die Gesundheit",
        "zeilen": [
         "kurzfristig: Müdigkeit, Konzentration, Gereiztheit",
         "langfristig: Übergewicht, Magen und Darm, Herz-Kreislauf"
        ],
        "feld": "Gute Nachricht: Risiko entsteht vor allem durch …",
        "frei": true,
        "muster": "schlechten Schlaf, unregelmäßiges Essen, wenig Bewegung",
        "loesungen": [
         "schlechten Schlaf, unregelmäßiges Essen, wenig Bewegung",
         "Lebensweise drumherum",
         "Schlaf, Essen, Bewegung",
         "das, was drumherum passiert",
         "Lebensgewohnheiten"
        ]
       },
       "stelle": "durch schlechten Schlaf, unregelmäßiges Essen und zu wenig Bewegung",
       "erklaerung": "Nicht die Schichtarbeit selbst, sondern die Begleitumstände erklären einen großen Teil des Risikos.",
       "frage": "Ergänze deine Notiz auf dem Handzettel."
      },
      {
       "ort": "Vortrag — Abschnitt 4",
       "wer": "Mann",
       "text": "Ein Punkt, der nicht in Ihrer Hand liegt, sondern in unserer, ist die Gestaltung der Schichtpläne. Hier hat sich in der Arbeitsmedizin in den letzten Jahren einiges getan. Früher galt es als ideal, möglichst lange in derselben Schicht zu bleiben, also zum Beispiel eine ganze Woche Nachtschicht am Stück, damit sich der Körper gewöhnen kann. Wie wir eben gesehen haben, gelingt diese Gewöhnung aber kaum. Heute empfiehlt man deshalb höchstens drei Nachtschichten hintereinander. Außerdem sollte der Wechsel vorwärts laufen, also von der Frühschicht zur Spätschicht und dann zur Nachtschicht, weil der Körper es leichter verkraftet, später ins Bett zu gehen als früher. Wir werden unsere Pläne ab dem kommenden Jahr entsprechend umstellen.",
       "notiz": {
        "titel": "Handzettel: Folie 4 — Der richtige Schichtplan",
        "zeilen": [
         "früher: ganze Woche Nachtschicht am Stück",
         "Wechsel vorwärts: Früh → Spät → Nacht"
        ],
        "feld": "Empfehlung heute: Nachtschichten am Stück höchstens",
        "frei": true,
        "muster": "drei",
        "loesungen": [
         "drei",
         "höchstens drei",
         "3",
         "max. 3",
         "drei Nächte"
        ]
       },
       "stelle": "höchstens drei Nachtschichten hintereinander",
       "erklaerung": "Die ganze Woche war die frühere Praxis; heute gelten höchstens drei Nachtschichten als sinnvoll.",
       "frage": "Ergänze deine Notiz auf dem Handzettel."
      },
      {
       "ort": "Vortrag — Abschnitt 5",
       "wer": "Mann",
       "text": "Kommen wir zum Schlaf nach der Nachtschicht, denn das ist für die meisten das größte Thema. Viele von Ihnen erzählen mir, dass sie nach der Schicht noch frühstücken, Besorgungen machen und sich erst mittags hinlegen. Das ist ungünstig, denn je weiter der Vormittag voranschreitet, desto stärker signalisiert die innere Uhr, dass jetzt Wachzeit ist. Mein wichtigster Rat lautet daher, möglichst direkt nach der Heimkehr schlafen zu gehen. Das Schlafzimmer sollte dabei vollständig abgedunkelt, kühl und ruhig sein. Ohrstöpsel sind keine Schande, und das Handy gehört aus dem Zimmer. Wer den Schlaf aufteilen möchte, kann auch vormittags vier, fünf Stunden schlafen und vor der nächsten Schicht noch einmal ein kurzes Nickerchen machen.",
       "notiz": {
        "titel": "Handzettel: Folie 5 — Schlafen nach der Nachtschicht",
        "zeilen": [
         "ungünstig: erst Besorgungen, dann mittags schlafen",
         "Schlafzimmer: dunkel, kühl, ruhig, kein Handy"
        ],
        "feld": "Wichtigster Rat zum Schlafen:",
        "frei": true,
        "muster": "direkt nach der Heimkehr schlafen gehen",
        "loesungen": [
         "direkt nach der Heimkehr schlafen",
         "sofort nach der Schicht schlafen",
         "gleich nach Hause und schlafen",
         "direkt schlafen gehen"
        ]
       },
       "stelle": "möglichst direkt nach der Heimkehr schlafen zu gehen",
       "erklaerung": "Abdunkeln und Ohrstöpsel sind Zusatztipps; der ausdrücklich wichtigste Rat ist der sofortige Schlaf.",
       "frage": "Ergänze deine Notiz auf dem Handzettel."
      },
      {
       "ort": "Vortrag — Abschnitt 6",
       "wer": "Mann",
       "text": "Ein zweites großes Thema ist die Ernährung. Nachts arbeitet unser Verdauungssystem, ähnlich wie der Rest des Körpers, eigentlich im Ruhemodus. Eine große, fettige Mahlzeit um zwei Uhr nachts liegt deshalb schwer im Magen und macht zusätzlich müde. Viele greifen in der Nacht außerdem zu Süßigkeiten, weil sie einen schnellen Energieschub versprechen. Dieser Schub hält aber nur kurz an, danach folgt ein umso stärkeres Leistungstief. Ich empfehle Ihnen stattdessen, vor der Schicht zu Hause eine richtige, warme Hauptmahlzeit zu essen. Während der Nacht reichen dann leichte Kleinigkeiten wie Joghurt, Obst, Gemüse oder ein Vollkornbrot. Und ganz wichtig: Trinken Sie ausreichend Wasser, denn auch Durst wird nachts häufig mit Müdigkeit verwechselt.",
       "notiz": {
        "titel": "Handzettel: Folie 6 — Essen in der Nacht",
        "zeilen": [
         "nachts Verdauung im Ruhemodus",
         "Süßigkeiten: kurzer Schub, dann Tief"
        ],
        "feld": "Wann die Hauptmahlzeit essen?",
        "frei": true,
        "muster": "vor der Schicht zu Hause",
        "loesungen": [
         "vor der Schicht",
         "vor der Schicht zu Hause",
         "vor Schichtbeginn",
         "zu Hause vor der Arbeit"
        ]
       },
       "stelle": "vor der Schicht zu Hause eine richtige, warme Hauptmahlzeit zu essen",
       "erklaerung": "Nachts sollen nur leichte Kleinigkeiten gegessen werden; die warme Hauptmahlzeit gehört vor die Schicht.",
       "frage": "Ergänze deine Notiz auf dem Handzettel."
      },
      {
       "ort": "Vortrag — Abschnitt 7",
       "wer": "Mann",
       "text": "Ein Hilfsmittel, das viele unterschätzen, ist das Licht. Wie gesagt, richtet sich unsere innere Uhr vor allem nach der Helligkeit. Das können Sie sich zunutze machen. In der ersten Hälfte der Nachtschicht sollte es am Arbeitsplatz möglichst hell sein, denn das hält wach und verbessert die Konzentration. Wir haben deshalb im letzten Jahr in der Halle die Beleuchtung erneuert. Umgekehrt ist es auf dem Heimweg am Morgen wichtig, möglichst wenig helles Licht abzubekommen, sonst glaubt der Körper, der Tag habe begonnen, und Sie können schlecht einschlafen. Mein konkreter Tipp ist deshalb eine Sonnenbrille für den Heimweg, und zwar auch dann, wenn der Himmel bedeckt ist. Das wirkt unscheinbar, macht aber einen spürbaren Unterschied.",
       "notiz": {
        "titel": "Handzettel: Folie 7 — Licht gezielt nutzen",
        "zeilen": [
         "erste Hälfte der Nacht: hell am Arbeitsplatz",
         "Beleuchtung der Halle erneuert"
        ],
        "feld": "Tipp für den Heimweg am Morgen:",
        "frei": true,
        "muster": "Sonnenbrille tragen, auch bei bedecktem Himmel",
        "loesungen": [
         "Sonnenbrille tragen",
         "Sonnenbrille",
         "Sonnenbrille auf dem Heimweg",
         "wenig Licht, Sonnenbrille"
        ]
       },
       "stelle": "eine Sonnenbrille für den Heimweg",
       "erklaerung": "Helles Licht gilt für den Arbeitsplatz in der Nacht; morgens soll man Licht meiden, daher die Sonnenbrille.",
       "frage": "Ergänze deine Notiz auf dem Handzettel."
      },
      {
       "ort": "Vortrag — Abschnitt 8",
       "wer": "Mann",
       "text": "Ich weiß, dass Sie nach einer anstrengenden Schicht wenig Lust auf Sport haben. Trotzdem ist Bewegung eines der wirksamsten Mittel gegen die gesundheitlichen Folgen der Schichtarbeit. Sie stabilisiert den Blutzucker, stärkt Herz und Kreislauf und verbessert nachweislich die Schlafqualität. Allerdings kommt es auf den Zeitpunkt an. Intensiver Sport unmittelbar vor dem Schlafengehen putscht auf und erschwert das Einschlafen. Ideal ist es daher, sich nach dem Aufstehen zu bewegen, also am Nachmittag vor der nächsten Schicht. Das muss kein Fitnessstudio sein. Schon ein flotter Spaziergang von einer halben Stunde, möglichst draußen bei Tageslicht, bringt viel. Wer mit Kollegen zusammen läuft, bleibt übrigens erfahrungsgemäß deutlich länger dabei.",
       "notiz": {
        "titel": "Handzettel: Folie 8 — Bewegung",
        "zeilen": [
         "Wirkung: Blutzucker, Herz-Kreislauf, Schlaf",
         "kein Sport direkt vor dem Schlafen"
        ],
        "feld": "Idealer Zeitpunkt für Bewegung:",
        "frei": true,
        "muster": "nach dem Aufstehen, nachmittags vor der Schicht",
        "loesungen": [
         "nach dem Aufstehen",
         "am Nachmittag vor der Schicht",
         "nachmittags",
         "nach dem Aufstehen vor der nächsten Schicht"
        ]
       },
       "stelle": "Ideal ist es daher, sich nach dem Aufstehen zu bewegen",
       "erklaerung": "Direkt vor dem Schlafen ist Sport ungünstig; empfohlen wird die Zeit nach dem Aufstehen.",
       "frage": "Ergänze deine Notiz auf dem Handzettel."
      },
      {
       "ort": "Vortrag — Abschnitt 9",
       "wer": "Mann",
       "text": "Ein Aspekt, der in Gesundheitsvorträgen oft zu kurz kommt, ist das soziale Leben. Wer nachts arbeitet und tagsüber schläft, verpasst vieles: das Abendessen mit der Familie, das Fußballtraining der Kinder, den Geburtstag eines Freundes. Auf Dauer führt das bei vielen zu einem Gefühl der Einsamkeit, und Einsamkeit ist ein ernstzunehmender Risikofaktor für die Gesundheit. Was kann man tun? Aus meinen Gesprächen weiß ich, dass ein gemeinsamer Familienkalender sehr hilft, in den alle Schichten eingetragen werden. So können feste gemeinsame Zeiten geplant werden, die dann aber auch wirklich verbindlich sind. Und sprechen Sie offen mit Ihrem Umfeld darüber, warum Sie nach der Nachtschicht nicht ans Telefon gehen. Die meisten Freunde und Nachbarn reagieren erfahrungsgemäß sehr verständnisvoll, wenn man es ihnen einmal in Ruhe erklärt hat.",
       "notiz": {
        "titel": "Handzettel: Folie 9 — Familie und Freizeit",
        "zeilen": [
         "man verpasst Abendessen, Training, Geburtstage",
         "Einsamkeit als Gesundheitsrisiko"
        ],
        "feld": "Praktische Hilfe für die Familie:",
        "frei": true,
        "muster": "gemeinsamer Familienkalender mit allen Schichten",
        "loesungen": [
         "gemeinsamer Familienkalender",
         "Familienkalender",
         "Kalender mit allen Schichten",
         "Schichten in einen Familienkalender eintragen"
        ]
       },
       "stelle": "ein gemeinsamer Familienkalender sehr hilft",
       "erklaerung": "Der Kalender ermöglicht feste gemeinsame Zeiten; offenes Reden ist ein ergänzender Rat.",
       "frage": "Ergänze deine Notiz auf dem Handzettel."
      },
      {
       "ort": "Vortrag — Abschnitt 10",
       "wer": "Mann",
       "text": "Zum Schluss möchte ich Ihnen noch zeigen, was der Betrieb konkret für Sie tun wird. Erstens stellen wir, wie erwähnt, die Schichtpläne um. Zweitens wird die Kantine ab dem nächsten Monat auch nachts geöffnet sein, mit einem kleinen, leichten Angebot. Drittens haben wir einen Ruheraum eingerichtet, in dem Sie während der Pause ein Nickerchen von höchstens zwanzig Minuten machen dürfen. Länger sollte es übrigens nicht sein, sonst fällt man in den Tiefschlaf und ist hinterher benommener als vorher. Und schließlich biete ich jeden Donnerstag eine offene Sprechstunde an, zu der Sie ohne Termin kommen können. Ich danke Ihnen für Ihre Aufmerksamkeit und wünsche allen, die heute Nacht arbeiten, eine ruhige Schicht.",
       "notiz": {
        "titel": "Handzettel: Folie 10 — Angebote des Betriebs",
        "zeilen": [
         "neue Schichtpläne",
         "Kantine nachts geöffnet",
         "offene Sprechstunde donnerstags"
        ],
        "feld": "Ruheraum: Nickerchen höchstens",
        "frei": true,
        "muster": "zwanzig Minuten",
        "loesungen": [
         "zwanzig Minuten",
         "20 Minuten",
         "20 Min.",
         "höchstens 20 Minuten",
         "zwanzig"
        ]
       },
       "stelle": "ein Nickerchen von höchstens zwanzig Minuten",
       "erklaerung": "Länger als zwanzig Minuten führt in den Tiefschlaf; deshalb gilt diese Obergrenze.",
       "frage": "Ergänze deine Notiz auf dem Handzettel."
      }
     ]
    },
    {
     "id": "gg1h3s3",
     "titel": "Museumsvortrag: Die Geschichte des Fahrrads in der Stadt",
     "aufgaben": [
      {
       "ort": "Vortrag — Abschnitt 1",
       "wer": "Frau",
       "text": "Meine Damen und Herren, herzlich willkommen im Stadtmuseum Kellbrück. Bevor Sie gleich die Sonderausstellung im Obergeschoss besichtigen, möchte ich Ihnen in einer guten Viertelstunde einen Überblick über die Geschichte des Fahrrads geben, und zwar vor allem über seine Geschichte in der Stadt. Die Ausstellung zeigt insgesamt rund vierzig Räder aus zwei Jahrhunderten, die meisten davon stammen aus Privatbesitz. Viele Kellbrücker Familien haben uns ihre alten Räder aus Kellern und Scheunen zur Verfügung gestellt, wofür wir sehr dankbar sind. Mich interessiert an diesem Thema besonders eine Frage: Das Fahrrad ist ja nicht nur ein Verkehrsmittel. Es hat immer auch verändert, wie Menschen leben, wohnen und sich in der Stadt bewegen. Dieser Frage möchte ich heute in zehn kurzen Stationen nachgehen.",
       "notiz": {
        "titel": "Handzettel: Folie 1 — Begrüßung und Ausstellung",
        "zeilen": [
         "Sonderausstellung im Obergeschoss",
         "rund vierzig Räder aus zwei Jahrhunderten"
        ],
        "feld": "Herkunft der meisten Ausstellungsstücke:",
        "frei": true,
        "muster": "aus Privatbesitz, von Kellbrücker Familien",
        "loesungen": [
         "aus Privatbesitz",
         "Privatbesitz",
         "von Familien aus Kellbrück",
         "von Kellbrücker Familien",
         "private Leihgaben"
        ]
       },
       "stelle": "die meisten davon stammen aus Privatbesitz",
       "erklaerung": "Vierzig ist die Zahl der Räder; gefragt ist, woher sie stammen.",
       "frage": "Ergänze deine Notiz auf dem Handzettel."
      },
      {
       "ort": "Vortrag — Abschnitt 2",
       "wer": "Frau",
       "text": "Am Anfang steht ein Gerät, das mit einem heutigen Fahrrad noch wenig gemeinsam hatte. Im Jahr achtzehnhundertsiebzehn stellte ein Forstbeamter aus Baden eine sogenannte Laufmaschine vor. Sie bestand fast vollständig aus Holz, hatte zwei Räder hintereinander und eine Lenkung, aber keine Pedale. Man saß darauf und stieß sich mit den Füßen vom Boden ab. Eine verbreitete Theorie besagt, dass die Erfindung eine Reaktion auf eine Hungerkrise war. Nach mehreren Missernten fehlte Futter, viele Pferde starben, und man suchte nach einem Fortbewegungsmittel ohne Tier. Ob das stimmt, ist unter Historikern umstritten. Sicher ist dagegen, dass die Laufmaschine in vielen Städten schnell verboten wurde, weil die Fahrer auf den Gehwegen die Fußgänger gefährdeten.",
       "notiz": {
        "titel": "Handzettel: Folie 2 — Die Laufmaschine",
        "zeilen": [
         "achtzehnhundertsiebzehn, Forstbeamter aus Baden",
         "Holz, zwei Räder, Lenkung, keine Pedale"
        ],
        "feld": "Grund für Verbote in vielen Städten:",
        "frei": true,
        "muster": "Gefährdung der Fußgänger auf Gehwegen",
        "loesungen": [
         "Gefährdung der Fußgänger",
         "Fußgänger gefährdet",
         "Fahren auf Gehwegen",
         "gefährlich für Fußgänger auf den Gehwegen"
        ]
       },
       "stelle": "weil die Fahrer auf den Gehwegen die Fußgänger gefährdeten",
       "erklaerung": "Die Hungerkrise ist eine umstrittene Theorie zur Entstehung, nicht der Grund für die Verbote.",
       "frage": "Ergänze deine Notiz auf dem Handzettel."
      },
      {
       "ort": "Vortrag — Abschnitt 3",
       "wer": "Frau",
       "text": "Einige Jahrzehnte später, ab etwa achtzehnhundertsiebzig, begegnet uns ein ganz anderes Gefährt: das Hochrad. Nun gab es Pedale, allerdings waren sie direkt am Vorderrad befestigt. Eine Umdrehung der Pedale bedeutete also eine Umdrehung des Rades. Wer schneller fahren wollte, brauchte deshalb ein möglichst großes Vorderrad, und manche Räder erreichten einen Durchmesser von anderthalb Metern. Sie können sich vorstellen, wie gefährlich das war. Bei jedem Hindernis drohte ein Sturz kopfüber aus großer Höhe. Das Hochrad war deshalb vor allem ein Sportgerät für wohlhabende junge Männer, die damit ihren Mut zur Schau stellten. Für den Alltag in der Stadt spielte es praktisch keine Rolle, als Verkehrsmittel war es schlicht zu teuer und zu riskant.",
       "notiz": {
        "titel": "Handzettel: Folie 3 — Das Hochrad",
        "zeilen": [
         "Pedale direkt am Vorderrad",
         "Vorderrad bis anderthalb Meter Durchmesser"
        ],
        "feld": "Wer fuhr Hochrad?",
        "frei": true,
        "muster": "wohlhabende junge Männer, als Sportgerät",
        "loesungen": [
         "wohlhabende junge Männer",
         "reiche junge Männer",
         "junge Männer aus wohlhabenden Familien",
         "Sportgerät für reiche junge Männer"
        ]
       },
       "stelle": "vor allem ein Sportgerät für wohlhabende junge Männer",
       "erklaerung": "Als Verkehrsmittel im Alltag spielte das Hochrad keine Rolle; gefahren wurde es von wohlhabenden jungen Männern.",
       "frage": "Ergänze deine Notiz auf dem Handzettel."
      },
      {
       "ort": "Vortrag — Abschnitt 4",
       "wer": "Frau",
       "text": "Der eigentliche Durchbruch kam in den achtzehnhundertachtziger Jahren mit dem sogenannten Sicherheitsniederrad. Es hatte zwei gleich große Räder und, das ist die entscheidende Neuerung, einen Kettenantrieb auf das Hinterrad. Durch die Kette brauchte man kein riesiges Vorderrad mehr, um schnell zu sein, und man saß so tief, dass man die Füße auf den Boden stellen konnte. Kurz darauf kamen die luftgefüllten Reifen hinzu, die das Fahren auf dem holprigen Kopfsteinpflaster der Städte erst wirklich angenehm machten. Wenn Sie sich in der Ausstellung das Rad mit der Nummer zwölf ansehen, werden Sie feststellen, dass es sich im Grundaufbau kaum von Ihrem eigenen Fahrrad unterscheidet. Im Prinzip ist die Konstruktion seit gut hundertdreißig Jahren dieselbe.",
       "notiz": {
        "titel": "Handzettel: Folie 4 — Das Sicherheitsrad",
        "zeilen": [
         "zwei gleich große Räder, tiefer Sitz",
         "danach: luftgefüllte Reifen"
        ],
        "feld": "Entscheidende Neuerung des Sicherheitsrads:",
        "frei": true,
        "muster": "Kettenantrieb auf das Hinterrad",
        "loesungen": [
         "Kettenantrieb",
         "Kettenantrieb auf das Hinterrad",
         "die Kette",
         "Kette zum Hinterrad"
        ]
       },
       "stelle": "einen Kettenantrieb auf das Hinterrad",
       "erklaerung": "Die Luftreifen kamen erst „kurz darauf\" hinzu; die Rednerin nennt die Kette ausdrücklich entscheidend.",
       "frage": "Ergänze deine Notiz auf dem Handzettel."
      },
      {
       "ort": "Vortrag — Abschnitt 5",
       "wer": "Frau",
       "text": "Ein Kapitel, das mir persönlich besonders am Herzen liegt, ist die Bedeutung des Fahrrads für die Frauen. Um achtzehnhundertneunzig war es für eine Frau aus dem Bürgertum kaum möglich, sich allein und ohne Begleitung durch die Stadt zu bewegen. Das Fahrrad änderte das grundlegend. Plötzlich konnten Frauen selbstständig ihre Wege zurücklegen, Freundinnen besuchen oder zur Arbeit fahren. Das Rad veränderte sogar die Mode, denn mit langen, engen Röcken und Korsett ließ es sich kaum fahren. Es entstanden weite Hosenröcke, die damals einen regelrechten Skandal auslösten. Manche Ärzte warnten allen Ernstes, Radfahren schade der weiblichen Gesundheit. Eine bekannte Frauenrechtlerin jener Zeit soll gesagt haben, das Fahrrad habe für die Befreiung der Frauen mehr getan als alles andere.",
       "notiz": {
        "titel": "Handzettel: Folie 5 — Das Fahrrad und die Frauen",
        "zeilen": [
         "Bürgertum: Frauen kaum allein unterwegs",
         "Ärzte warnten vor Radfahren"
        ],
        "feld": "Auswirkung auf die Mode:",
        "frei": true,
        "muster": "weite Hosenröcke statt enger Röcke und Korsett",
        "loesungen": [
         "weite Hosenröcke",
         "Hosenröcke",
         "Hosenröcke statt Korsett",
         "weitere Kleidung, Hosenröcke"
        ]
       },
       "stelle": "Es entstanden weite Hosenröcke",
       "erklaerung": "Lange, enge Röcke und Korsett waren das Problem; die neue Mode waren die Hosenröcke.",
       "frage": "Ergänze deine Notiz auf dem Handzettel."
      },
      {
       "ort": "Vortrag — Abschnitt 6",
       "wer": "Frau",
       "text": "Im zwanzigsten Jahrhundert wurde das Fahrrad dann vom Luxusgut zum Massenverkehrsmittel. Durch die industrielle Fertigung sanken die Preise so stark, dass sich auch Arbeiter ein Rad leisten konnten. Das hatte erhebliche Folgen für die Städte. Bis dahin mussten Arbeiter in der Nähe der Fabriken wohnen, oft in sehr engen und ungesunden Mietshäusern. Mit dem Fahrrad konnten sie nun auch weiter entfernt wohnen, etwa in den neuen Siedlungen am Stadtrand. Hier in Kellbrück sah man in den neunzehnhundertdreißiger Jahren morgens beim Schichtwechsel der Textilfabrik Tausende von Radfahrern auf der Brückenstraße. Wir haben in der Ausstellung ein großformatiges Foto dieser Szene. Man nannte das Fahrrad damals nicht ohne Grund das Pferd des kleinen Mannes.",
       "notiz": {
        "titel": "Handzettel: Folie 6 — Blütezeit als Arbeiterrad",
        "zeilen": [
         "industrielle Fertigung → sinkende Preise",
         "Foto: Schichtwechsel Textilfabrik, Brückenstraße"
        ],
        "feld": "Folge für das Wohnen der Arbeiter:",
        "frei": true,
        "muster": "konnten weiter weg wohnen, in Siedlungen am Stadtrand",
        "loesungen": [
         "weiter entfernt wohnen",
         "Wohnen am Stadtrand",
         "Siedlungen am Stadtrand",
         "nicht mehr nahe der Fabrik wohnen müssen"
        ]
       },
       "stelle": "konnten sie nun auch weiter entfernt wohnen",
       "erklaerung": "Früher mussten Arbeiter nahe den Fabriken wohnen; das Rad ermöglichte das Leben in Randsiedlungen.",
       "frage": "Ergänze deine Notiz auf dem Handzettel."
      },
      {
       "ort": "Vortrag — Abschnitt 7",
       "wer": "Frau",
       "text": "Dann aber kam der Bruch. In den Jahrzehnten nach dem Zweiten Weltkrieg verdrängte das Auto das Fahrrad fast vollständig aus den Städten. Das Fahrrad galt plötzlich als Verkehrsmittel der Armen, als etwas, das man hinter sich lassen wollte, sobald man es sich leisten konnte. Die Stadtplanung folgte diesem Leitbild konsequent. Man sprach von der autogerechten Stadt. Breite Schneisen wurden durch die Altstädte geschlagen, und vorhandene Radwege wurden häufig zu Parkplätzen umgebaut oder einfach abgeschafft. Auch in Kellbrück wurde damals der alte Radweg entlang des Flusses einer vierspurigen Straße geopfert. Der Anteil des Fahrrads an allen Wegen sank in vielen deutschen Städten auf weniger als ein Zehntel.",
       "notiz": {
        "titel": "Handzettel: Folie 7 — Verdrängung durch das Auto",
        "zeilen": [
         "Fahrrad galt als Verkehrsmittel der Armen",
         "Kellbrück: Radweg am Fluss → vierspurige Straße"
        ],
        "feld": "Leitbild der Stadtplanung:",
        "frei": true,
        "muster": "die autogerechte Stadt",
        "loesungen": [
         "autogerechte Stadt",
         "die autogerechte Stadt",
         "Stadt für das Auto",
         "autofreundliche Stadt"
        ]
       },
       "stelle": "Man sprach von der autogerechten Stadt",
       "erklaerung": "Das Leitbild wird ausdrücklich benannt; die Radwege und die Straße sind nur Folgen davon.",
       "frage": "Ergänze deine Notiz auf dem Handzettel."
      },
      {
       "ort": "Vortrag — Abschnitt 8",
       "wer": "Frau",
       "text": "Die Wende kam nicht über Nacht, aber sie hat einen erkennbaren Ausgangspunkt, nämlich die Ölkrise in den siebziger Jahren. Als das Benzin knapp und teuer wurde und an einigen Sonntagen sogar Fahrverbote galten, sahen viele Menschen ihre Städte plötzlich ohne Autos. Man entdeckte die Straßen wieder als Lebensraum. Gleichzeitig wuchs das Umweltbewusstsein. In vielen Städten gründeten sich Bürgerinitiativen, die mit großen gemeinsamen Radtouren für bessere Radwege demonstrierten. In Kellbrück fand die erste dieser Fahrten im Jahr neunzehnhundertneunundsiebzig statt, mit gerade einmal sechzig Teilnehmern. Heute sind es jedes Jahr mehrere Tausend. Es dauerte allerdings noch Jahrzehnte, bis die Politik diese Anliegen wirklich ernst nahm.",
       "notiz": {
        "titel": "Handzettel: Folie 8 — Die Wende",
        "zeilen": [
         "autofreie Sonntage: Straßen als Lebensraum",
         "erste Kellbrücker Fahrt neunzehnhundertneunundsiebzig, sechzig Teilnehmer"
        ],
        "feld": "Ausgangspunkt der Wende:",
        "frei": true,
        "muster": "die Ölkrise in den siebziger Jahren",
        "loesungen": [
         "die Ölkrise",
         "Ölkrise",
         "Ölkrise in den siebziger Jahren",
         "Ölkrise der 70er",
         "Ölkrise 1970er"
        ]
       },
       "stelle": "nämlich die Ölkrise in den siebziger Jahren",
       "erklaerung": "Bürgerinitiativen und Umweltbewusstsein folgten erst; als Ausgangspunkt nennt die Rednerin die Ölkrise.",
       "frage": "Ergänze deine Notiz auf dem Handzettel."
      },
      {
       "ort": "Vortrag — Abschnitt 9",
       "wer": "Frau",
       "text": "Und heute? Das Fahrrad erlebt eine Renaissance, wie sie vor dreißig Jahren kaum jemand für möglich gehalten hätte. Eine wichtige Rolle spielt dabei das Rad mit elektrischer Unterstützung. Es hat das Fahrrad für Gruppen geöffnet, die es zuvor kaum genutzt haben, also für ältere Menschen, für Pendler mit langen Wegen und für Menschen, die in hügeligen Städten wohnen. Auch Lastenräder sieht man immer häufiger, mit denen Familien ihre Kinder transportieren und Handwerker ihr Werkzeug. In Kellbrück liegt der Anteil des Rads an allen Wegen inzwischen wieder bei knapp einem Viertel. Das ist fast so viel wie in den dreißiger Jahren. Der Unterschied ist, dass das Fahrrad heute nicht mehr aus Armut gewählt wird, sondern bewusst.",
       "notiz": {
        "titel": "Handzettel: Folie 9 — Das Fahrrad heute",
        "zeilen": [
         "neue Gruppen: Ältere, Pendler, hügelige Städte",
         "Lastenräder für Kinder und Werkzeug"
        ],
        "feld": "Radanteil in Kellbrück heute:",
        "frei": true,
        "muster": "knapp ein Viertel aller Wege",
        "loesungen": [
         "knapp ein Viertel",
         "ein Viertel",
         "fast 25 Prozent",
         "knapp 25 %",
         "25 %",
         "etwa ein Viertel"
        ]
       },
       "stelle": "inzwischen wieder bei knapp einem Viertel",
       "erklaerung": "Ein Zehntel war der Tiefstand in der Autoära; heute liegt der Anteil bei knapp einem Viertel.",
       "frage": "Ergänze deine Notiz auf dem Handzettel."
      },
      {
       "ort": "Vortrag — Abschnitt 10",
       "wer": "Frau",
       "text": "Lassen Sie mich mit einem kurzen Ausblick schließen. Die Geschichte des Fahrrads zeigt, dass Verkehrsmittel nie nur technische Geräte sind. Sie spiegeln wider, wie eine Gesellschaft leben will. Die große Herausforderung der kommenden Jahre ist der Platz. Unsere Straßen wurden für Autos gebaut, und jeder Meter, der für Radwege umgewidmet wird, führt zu Konflikten. Ich bin aber überzeugt, dass sich diese Konflikte lösen lassen. Die Stadt Kellbrück hat jedenfalls beschlossen, bis zum Ende des Jahrzehnts den alten Radweg am Fluss wiederherzustellen, und damit schließt sich ein historischer Kreis. Und nun lade ich Sie herzlich ein, mit mir ins Obergeschoss zu gehen. Die Laufmaschine wartet schon auf Sie.",
       "notiz": {
        "titel": "Handzettel: Folie 10 — Ausblick",
        "zeilen": [
         "Verkehrsmittel spiegeln die Gesellschaft",
         "Plan: Radweg am Fluss bis Ende des Jahrzehnts"
        ],
        "feld": "Größte Herausforderung der Zukunft:",
        "frei": true,
        "muster": "der Platz auf den Straßen",
        "loesungen": [
         "der Platz",
         "Platz",
         "Platzmangel",
         "Platz auf den Straßen",
         "Verteilung des Straßenraums"
        ]
       },
       "stelle": "Die große Herausforderung der kommenden Jahre ist der Platz",
       "erklaerung": "Die Konflikte entstehen aus dem Platzproblem; der Radweg am Fluss ist nur ein lokales Beispiel.",
       "frage": "Ergänze deine Notiz auf dem Handzettel."
      }
     ]
    }
   ]
  }
 ],
 "laeufe": [
  {
   "id": "tg1hl1",
   "titel": "Prüfungslauf 1",
   "minuten": 40,
   "teile": [
    {
     "nr": 1,
     "art": "diskussion",
     "aufgaben": [
      {
       "von": "Person 1 — Automechaniker, Ende zwanzig",
       "wer": "Mann",
       "text": "Als ich mit sechzehn nach Deutschland kam, konnte ich kaum ein Wort Deutsch. Ein pensionierter Lehrer aus unserer Straße hat sich dann zwei Jahre lang jeden Mittwoch mit mir hingesetzt, ohne einen Cent dafür zu wollen. Heute gebe ich selbst Jugendlichen in einem Stadtteilzentrum Nachhilfe. Ich finde, ich gebe einfach etwas zurück.",
       "loesung": 6,
       "stelle": "ich gebe einfach etwas zurück",
       "erklaerung": "Seine eigene Erfahrung als Hilfeempfänger ist der Grund für sein Engagement.",
       "frage": "Welche Aussage passt zu dieser Person?",
       "opt": [
        "Über mein Ehrenamt habe ich beruflich einen neuen Weg gefunden.",
        "Ich engagiere mich lieber bei einzelnen Aktionen als dauerhaft in einem Verein.",
        "Ehrenamt darf nicht dazu dienen, staatliche Aufgaben billig zu ersetzen.",
        "Neben Beruf und Familie fehlt mir schlicht die Zeit dafür.",
        "Durch mein Engagement habe ich in einer neuen Umgebung Anschluss gefunden.",
        "Ich habe aufgehört, weil mir die Verantwortung zu groß wurde.",
        "Ich engagiere mich, weil mir selbst einmal geholfen wurde.",
        "Mich schreckt der viele Papierkram in Vereinen ab.",
        "Ich fände ein verpflichtendes soziales Jahr für alle sinnvoll.",
        "Ich engagiere mich von zu Hause aus über das Internet."
       ],
       "fest": true
      },
      {
       "von": "Person 2 — Ärztin, Mitte fünfzig",
       "wer": "Frau",
       "text": "Ich helfe seit Jahren bei der Lebensmittelausgabe für Bedürftige, und ich mache das gern. Aber manchmal frage ich mich schon, warum wir Freiwilligen auffangen, was eigentlich der Staat leisten müsste. Engagement ja, unbedingt. Aber es darf keine bequeme Ausrede werden, um an der falschen Stelle zu sparen.",
       "loesung": 2,
       "stelle": "um an der falschen Stelle zu sparen",
       "erklaerung": "Sie engagiert sich, kritisiert aber, dass Ehrenamt staatliche Leistungen ersetzt.",
       "frage": "Welche Aussage passt zu dieser Person?",
       "opt": [
        "Über mein Ehrenamt habe ich beruflich einen neuen Weg gefunden.",
        "Ich engagiere mich lieber bei einzelnen Aktionen als dauerhaft in einem Verein.",
        "Ehrenamt darf nicht dazu dienen, staatliche Aufgaben billig zu ersetzen.",
        "Neben Beruf und Familie fehlt mir schlicht die Zeit dafür.",
        "Durch mein Engagement habe ich in einer neuen Umgebung Anschluss gefunden.",
        "Ich habe aufgehört, weil mir die Verantwortung zu groß wurde.",
        "Ich engagiere mich, weil mir selbst einmal geholfen wurde.",
        "Mich schreckt der viele Papierkram in Vereinen ab.",
        "Ich fände ein verpflichtendes soziales Jahr für alle sinnvoll.",
        "Ich engagiere mich von zu Hause aus über das Internet."
       ],
       "fest": true
      },
      {
       "von": "Person 3 — Marketingleiter, Mitte vierzig",
       "wer": "Mann",
       "text": "Ich bin beruflich ständig unterwegs und weiß oft nicht, wo ich in drei Monaten sein werde. Ein festes Amt im Verein könnte ich deshalb gar nicht zuverlässig ausfüllen. Aber wenn im Frühjahr das Flussufer aufgeräumt wird oder die Nachbarschaft einen Spielplatz baut, bin ich an dem Wochenende dabei, mit voller Energie.",
       "loesung": 1,
       "stelle": "bin ich an dem Wochenende dabei, mit voller Energie",
       "erklaerung": "Wegen seines Berufs engagiert er sich nur bei einzelnen, zeitlich begrenzten Aktionen.",
       "frage": "Welche Aussage passt zu dieser Person?",
       "opt": [
        "Über mein Ehrenamt habe ich beruflich einen neuen Weg gefunden.",
        "Ich engagiere mich lieber bei einzelnen Aktionen als dauerhaft in einem Verein.",
        "Ehrenamt darf nicht dazu dienen, staatliche Aufgaben billig zu ersetzen.",
        "Neben Beruf und Familie fehlt mir schlicht die Zeit dafür.",
        "Durch mein Engagement habe ich in einer neuen Umgebung Anschluss gefunden.",
        "Ich habe aufgehört, weil mir die Verantwortung zu groß wurde.",
        "Ich engagiere mich, weil mir selbst einmal geholfen wurde.",
        "Mich schreckt der viele Papierkram in Vereinen ab.",
        "Ich fände ein verpflichtendes soziales Jahr für alle sinnvoll.",
        "Ich engagiere mich von zu Hause aus über das Internet."
       ],
       "fest": true
      },
      {
       "von": "Person 4 — Zahnarzthelferin, Anfang dreißig",
       "wer": "Frau",
       "text": "Vor zwei Jahren bin ich wegen der Stelle meines Mannes in eine Kleinstadt gezogen, in der ich keinen Menschen kannte. Eine Kollegin hat mich dann zur freiwilligen Feuerwehr mitgenommen. Heute habe ich dort meine besten Freundinnen, und im Ort grüßt mich jeder. Ohne die Feuerwehr wäre ich wahrscheinlich längst wieder weggezogen.",
       "loesung": 4,
       "stelle": "Heute habe ich dort meine besten Freundinnen",
       "erklaerung": "Das Ehrenamt hat ihr geholfen, am neuen Wohnort Kontakte zu knüpfen.",
       "frage": "Welche Aussage passt zu dieser Person?",
       "opt": [
        "Über mein Ehrenamt habe ich beruflich einen neuen Weg gefunden.",
        "Ich engagiere mich lieber bei einzelnen Aktionen als dauerhaft in einem Verein.",
        "Ehrenamt darf nicht dazu dienen, staatliche Aufgaben billig zu ersetzen.",
        "Neben Beruf und Familie fehlt mir schlicht die Zeit dafür.",
        "Durch mein Engagement habe ich in einer neuen Umgebung Anschluss gefunden.",
        "Ich habe aufgehört, weil mir die Verantwortung zu groß wurde.",
        "Ich engagiere mich, weil mir selbst einmal geholfen wurde.",
        "Mich schreckt der viele Papierkram in Vereinen ab.",
        "Ich fände ein verpflichtendes soziales Jahr für alle sinnvoll.",
        "Ich engagiere mich von zu Hause aus über das Internet."
       ],
       "fest": true
      },
      {
       "von": "Person 5 — Lagerarbeiter, Vater von drei Kindern",
       "wer": "Mann",
       "text": "Ich bewundere Leute, die sich im Sportverein oder im Altenheim engagieren, wirklich. Aber ich arbeite im Schichtdienst, und wenn ich nach Hause komme, wollen drei Kinder etwas von mir. Am Wochenende kümmere ich mich um den Haushalt. Da bleibt einfach keine Stunde übrig, so gern ich würde.",
       "loesung": 3,
       "stelle": "Da bleibt einfach keine Stunde übrig",
       "erklaerung": "Er würde gern helfen, aber Schichtarbeit und Familie lassen ihm keine Zeit.",
       "frage": "Welche Aussage passt zu dieser Person?",
       "opt": [
        "Über mein Ehrenamt habe ich beruflich einen neuen Weg gefunden.",
        "Ich engagiere mich lieber bei einzelnen Aktionen als dauerhaft in einem Verein.",
        "Ehrenamt darf nicht dazu dienen, staatliche Aufgaben billig zu ersetzen.",
        "Neben Beruf und Familie fehlt mir schlicht die Zeit dafür.",
        "Durch mein Engagement habe ich in einer neuen Umgebung Anschluss gefunden.",
        "Ich habe aufgehört, weil mir die Verantwortung zu groß wurde.",
        "Ich engagiere mich, weil mir selbst einmal geholfen wurde.",
        "Mich schreckt der viele Papierkram in Vereinen ab.",
        "Ich fände ein verpflichtendes soziales Jahr für alle sinnvoll.",
        "Ich engagiere mich von zu Hause aus über das Internet."
       ],
       "fest": true
      },
      {
       "von": "Person 6 — Rentnerin, ehemalige Buchhalterin",
       "wer": "Frau",
       "text": "Ich war acht Jahre Kassenwartin in unserem Turnverein. Der Papierkram hat mich nie gestört, den war ich aus meinem Beruf gewohnt. Aber als der Verein Hallen anmieten und Trainer anstellen wollte, ging es plötzlich um Verträge und um Haftung. Ich hatte schlaflose Nächte. Da habe ich das Amt abgegeben.",
       "loesung": 5,
       "stelle": "ging es plötzlich um Verträge und um Haftung",
       "erklaerung": "Den Papierkram schließt sie ausdrücklich aus. Die gewachsene Verantwortung war der Grund für den Rückzug.",
       "frage": "Welche Aussage passt zu dieser Person?",
       "opt": [
        "Über mein Ehrenamt habe ich beruflich einen neuen Weg gefunden.",
        "Ich engagiere mich lieber bei einzelnen Aktionen als dauerhaft in einem Verein.",
        "Ehrenamt darf nicht dazu dienen, staatliche Aufgaben billig zu ersetzen.",
        "Neben Beruf und Familie fehlt mir schlicht die Zeit dafür.",
        "Durch mein Engagement habe ich in einer neuen Umgebung Anschluss gefunden.",
        "Ich habe aufgehört, weil mir die Verantwortung zu groß wurde.",
        "Ich engagiere mich, weil mir selbst einmal geholfen wurde.",
        "Mich schreckt der viele Papierkram in Vereinen ab.",
        "Ich fände ein verpflichtendes soziales Jahr für alle sinnvoll.",
        "Ich engagiere mich von zu Hause aus über das Internet."
       ],
       "fest": true
      },
      {
       "von": "Person 7 — Mediengestalterin, Anfang dreißig",
       "wer": "Frau",
       "text": "Angefangen hat alles damit, dass ich für ein Jugendzentrum ehrenamtlich ein paar Plakate gestaltet habe. Dann habe ich dort Workshops gegeben, und die Arbeit mit den Jugendlichen hat mir so gefallen, dass ich eine Weiterbildung gemacht habe. Heute arbeite ich in Teilzeit fest in dem Zentrum.",
       "loesung": 0,
       "stelle": "Heute arbeite ich in Teilzeit fest in dem Zentrum",
       "erklaerung": "Aus dem Ehrenamt ist eine bezahlte Stelle geworden.",
       "frage": "Welche Aussage passt zu dieser Person?",
       "opt": [
        "Über mein Ehrenamt habe ich beruflich einen neuen Weg gefunden.",
        "Ich engagiere mich lieber bei einzelnen Aktionen als dauerhaft in einem Verein.",
        "Ehrenamt darf nicht dazu dienen, staatliche Aufgaben billig zu ersetzen.",
        "Neben Beruf und Familie fehlt mir schlicht die Zeit dafür.",
        "Durch mein Engagement habe ich in einer neuen Umgebung Anschluss gefunden.",
        "Ich habe aufgehört, weil mir die Verantwortung zu groß wurde.",
        "Ich engagiere mich, weil mir selbst einmal geholfen wurde.",
        "Mich schreckt der viele Papierkram in Vereinen ab.",
        "Ich fände ein verpflichtendes soziales Jahr für alle sinnvoll.",
        "Ich engagiere mich von zu Hause aus über das Internet."
       ],
       "fest": true
      },
      {
       "von": "Person 8 — Programmierer, Mitte vierzig",
       "wer": "Mann",
       "text": "Ich sitze seit einem Unfall im Rollstuhl, viele Wege sind für mich mühsam. Aber helfen kann ich trotzdem: Ich betreue abends ein Forum für Eltern von Kindern mit seltenen Krankheiten, beantworte Fragen und vermittle Kontakte. Das mache ich alles vom Schreibtisch aus, und ich habe das Gefühl, dass es wirklich etwas bringt.",
       "loesung": 9,
       "stelle": "Das mache ich alles vom Schreibtisch aus",
       "erklaerung": "Sein Engagement findet vollständig online von zu Hause aus statt.",
       "frage": "Welche Aussage passt zu dieser Person?",
       "opt": [
        "Über mein Ehrenamt habe ich beruflich einen neuen Weg gefunden.",
        "Ich engagiere mich lieber bei einzelnen Aktionen als dauerhaft in einem Verein.",
        "Ehrenamt darf nicht dazu dienen, staatliche Aufgaben billig zu ersetzen.",
        "Neben Beruf und Familie fehlt mir schlicht die Zeit dafür.",
        "Durch mein Engagement habe ich in einer neuen Umgebung Anschluss gefunden.",
        "Ich habe aufgehört, weil mir die Verantwortung zu groß wurde.",
        "Ich engagiere mich, weil mir selbst einmal geholfen wurde.",
        "Mich schreckt der viele Papierkram in Vereinen ab.",
        "Ich fände ein verpflichtendes soziales Jahr für alle sinnvoll.",
        "Ich engagiere mich von zu Hause aus über das Internet."
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
         "text": "Guten Tag, Herr Okafor, nehmen Sie Platz. Am Telefon sagten Sie, es gehe um Ihren Stromvertrag."
        },
        {
         "wer": "Mann",
         "text": "Ja, um zwei Dinge. Vor drei Wochen hat mich jemand angerufen und mir einen günstigeren Tarif angeboten. Ich habe am Telefon zugestimmt, weil der Preis gut klang. Inzwischen habe ich die Unterlagen bekommen, und da steht ein ganz anderer Preis drin. Dabei war der Anrufer sehr freundlich und hat ständig betont, wie viel ich sparen würde."
        }
       ],
       "frage": "Herr Okafor ist verärgert, weil …",
       "opt": [
        "ihm der Anrufer den Vertrag ohne Zustimmung untergeschoben hat.",
        "in den Unterlagen ein anderer Preis steht als am Telefon genannt.",
        "er seit drei Wochen auf die Unterlagen wartet."
       ],
       "loesung": 1,
       "stelle": "da steht ein ganz anderer Preis drin",
       "erklaerung": "Er hat zugestimmt; das Problem ist der abweichende Preis."
      },
      {
       "ort": "Gespräch — Abschnitt 2",
       "zeilen": [
        {
         "wer": "Frau",
         "text": "Das hören wir leider häufig. Wann sind die Unterlagen angekommen?"
        },
        {
         "wer": "Mann",
         "text": "Am Montag vor einer Woche."
        },
        {
         "wer": "Frau",
         "text": "Dann haben Sie Glück. Bei Verträgen am Telefon haben Sie ein Widerrufsrecht von vierzehn Tagen, und die Frist beginnt nicht, bevor Sie ordnungsgemäß informiert wurden, also frühestens mit Eingang der Unterlagen. Sie sind noch mitten in der Frist."
        }
       ],
       "frage": "Die Frist für den Widerruf …",
       "opt": [
        "ist abgelaufen, weil das Telefonat drei Wochen zurückliegt.",
        "gilt nur für schriftlich geschlossene Verträge.",
        "beginnt frühestens mit dem Eingang der Unterlagen."
       ],
       "loesung": 2,
       "stelle": "also frühestens mit Eingang der Unterlagen",
       "erklaerung": "Maßgeblich ist nicht das Telefonat, sondern die Information durch die Unterlagen."
      },
      {
       "ort": "Gespräch — Abschnitt 3",
       "zeilen": [
        {
         "wer": "Mann",
         "text": "Wie widerrufe ich denn? Reicht ein Anruf?"
        },
        {
         "wer": "Frau",
         "text": "Rechtlich würde eine eindeutige Erklärung genügen, auch am Telefon. Ich rate Ihnen aber dringend zur Schriftform, am besten per Einschreiben oder per E-Mail mit Lesebestätigung. Sonst steht im Streitfall Aussage gegen Aussage. Einen Grund müssen Sie übrigens nicht angeben. Ein kurzer Satz genügt, dass Sie den Vertrag widerrufen."
        }
       ],
       "frage": "Die Beraterin empfiehlt, den Widerruf …",
       "opt": [
        "schriftlich und nachweisbar zu erklären.",
        "telefonisch und mit Begründung zu erklären.",
        "erst nach einem Gespräch mit dem Anbieter zu erklären."
       ],
       "loesung": 0,
       "stelle": "Ich rate Ihnen aber dringend zur Schriftform",
       "erklaerung": "Ein Anruf wäre zwar gültig, aber schwer zu beweisen; ein Grund ist nicht nötig."
      },
      {
       "ort": "Gespräch — Abschnitt 4",
       "zeilen": [
        {
         "wer": "Mann",
         "text": "Und mein alter Vertrag? Der neue Anbieter hat doch sicher schon gekündigt."
        },
        {
         "wer": "Frau",
         "text": "Darauf müssen Sie achten. Wenn der alte Vertrag bereits beendet ist, sitzen Sie nach dem Widerruf nicht im Dunkeln, sondern kommen in die sogenannte Ersatzversorgung des örtlichen Grundversorgers. Der Strom fließt also weiter, meist aber teurer. Rufen Sie deshalb gleich bei Ihrem bisherigen Anbieter an."
        }
       ],
       "frage": "Falls der alte Vertrag schon gekündigt ist, …",
       "opt": [
        "wird nach dem Widerruf der Strom abgestellt.",
        "liefert zunächst der örtliche Grundversorger weiter.",
        "gilt automatisch wieder der alte Vertrag."
       ],
       "loesung": 1,
       "stelle": "in die sogenannte Ersatzversorgung des örtlichen Grundversorgers",
       "erklaerung": "Der Strom fließt weiter, allerdings meist zu einem höheren Preis."
      },
      {
       "ort": "Gespräch — Abschnitt 5",
       "zeilen": [
        {
         "wer": "Mann",
         "text": "Jetzt das zweite Problem: Meine Mutter hat einen Brief von ihrem Stromanbieter bekommen, dass der Preis ab Januar steigt. Sie ist über achtzig und hat einfach unterschrieben, was beilag."
        },
        {
         "wer": "Frau",
         "text": "Moment, was genau hat sie unterschrieben?"
        },
        {
         "wer": "Mann",
         "text": "Einen Zettel, auf dem stand, dass sie mit der neuen Preisgestaltung einverstanden ist."
        }
       ],
       "frage": "Die Mutter von Herrn Okafor hat …",
       "opt": [
        "eine Zustimmung zu den neuen Preisen unterschrieben.",
        "ihren Vertrag wegen der Preiserhöhung gekündigt.",
        "den Brief des Anbieters noch nicht geöffnet."
       ],
       "loesung": 0,
       "stelle": "dass sie mit der neuen Preisgestaltung einverstanden ist",
       "erklaerung": "Von einer Kündigung ist keine Rede; sie hat zugestimmt."
      },
      {
       "ort": "Gespräch — Abschnitt 6",
       "zeilen": [
        {
         "wer": "Frau",
         "text": "Das war nicht nötig. Bei einer Preiserhöhung muss man nichts unterschreiben, im Gegenteil, man hat ein Sonderkündigungsrecht. Ob die Unterschrift daran etwas ändert, kann ich ohne den Vertrag nicht sicher sagen. Bringen Sie mir beim nächsten Termin bitte den Brief und die Vertragsunterlagen Ihrer Mutter mit. Bis dahin sollte Ihre Mutter bitte nichts mehr unterschreiben."
        }
       ],
       "frage": "Ob die Unterschrift der Mutter Folgen hat, …",
       "opt": [
        "kann die Beraterin erst nach Prüfung der Unterlagen beurteilen.",
        "hängt vom Alter der Mutter ab.",
        "spielt keine Rolle, da man nichts unterschreiben muss."
       ],
       "loesung": 0,
       "stelle": "kann ich ohne den Vertrag nicht sicher sagen",
       "erklaerung": "Die Unterschrift war unnötig, ihre Wirkung ist aber noch offen."
      },
      {
       "ort": "Gespräch — Abschnitt 7",
       "zeilen": [
        {
         "wer": "Mann",
         "text": "Muss meine Mutter dafür selbst herkommen? Sie ist nicht mehr gut zu Fuß."
        },
        {
         "wer": "Frau",
         "text": "Nicht unbedingt. Wenn sie Ihnen eine schriftliche Vollmacht gibt, kann ich alles mit Ihnen besprechen. Ein formloses Schreiben mit ihrer Unterschrift genügt. Wir bieten aber auch eine Telefonberatung an, dann könnte Ihre Mutter von zu Hause aus dazugeschaltet werden."
        }
       ],
       "frage": "Damit Herr Okafor die Sache seiner Mutter klären kann, …",
       "opt": [
        "muss die Mutter persönlich zur Beratung kommen.",
        "braucht er eine notariell beglaubigte Vollmacht.",
        "genügt ein formloses Schreiben mit ihrer Unterschrift."
       ],
       "loesung": 2,
       "stelle": "Ein formloses Schreiben mit ihrer Unterschrift genügt",
       "erklaerung": "Ein Notar wird nicht verlangt, persönliches Erscheinen auch nicht."
      },
      {
       "ort": "Gespräch — Abschnitt 8",
       "zeilen": [
        {
         "wer": "Mann",
         "text": "Was kostet mich die Beratung eigentlich? Ich habe gehört, dass sie nicht ganz umsonst ist."
        },
        {
         "wer": "Frau",
         "text": "Das heutige Gespräch kostet zwanzig Euro. Wenn wir für Sie einen Brief an den Anbieter aufsetzen, kommen fünfzehn Euro dazu. Für Menschen mit geringem Einkommen gibt es Ermäßigungen, dafür bräuchten wir einen Nachweis, zum Beispiel einen Rentenbescheid."
        }
       ],
       "frage": "Eine Ermäßigung der Beratungskosten …",
       "opt": [
        "erhält jeder, der über achtzig Jahre alt ist.",
        "gibt es bei geringem Einkommen gegen einen Nachweis.",
        "ist nur bei der Telefonberatung möglich."
       ],
       "loesung": 1,
       "stelle": "Für Menschen mit geringem Einkommen gibt es Ermäßigungen",
       "erklaerung": "Der Rentenbescheid ist nur ein Beispiel für einen Einkommensnachweis."
      },
      {
       "ort": "Gespräch — Abschnitt 9",
       "zeilen": [
        {
         "wer": "Mann",
         "text": "Wie verhindere ich, dass so etwas wieder passiert? Diese Anrufer sind hartnäckig. Bei mir rufen sie fast jede Woche an."
        },
        {
         "wer": "Frau",
         "text": "Am wirksamsten ist, gar nicht erst ins Gespräch einzusteigen. Sagen Sie freundlich, dass Sie keine Werbeanrufe wünschen, und legen Sie auf. Notieren Sie sich Datum, Uhrzeit und Firmennamen. Unerlaubte Werbeanrufe kann man bei der zuständigen Bundesbehörde melden, die Bußgelder verhängen kann."
        }
       ],
       "frage": "Gegen Werbeanrufe hilft laut der Beraterin am meisten, …",
       "opt": [
        "das Gespräch gar nicht erst zu beginnen.",
        "dem Anrufer genau zuzuhören.",
        "dem Anrufer mit einem Bußgeld zu drohen."
       ],
       "loesung": 0,
       "stelle": "gar nicht erst ins Gespräch einzusteigen",
       "erklaerung": "Bußgelder verhängt die Behörde, nicht der Verbraucher."
      },
      {
       "ort": "Gespräch — Abschnitt 10",
       "zeilen": [
        {
         "wer": "Mann",
         "text": "Gut, dann schreibe ich heute Abend den Widerruf und komme nächste Woche mit den Unterlagen meiner Mutter wieder."
        },
        {
         "wer": "Frau",
         "text": "Schicken Sie mir den Widerruf ruhig vorher per E-Mail, dann schaue ich kurz drüber, bevor Sie ihn abschicken. Das kostet nichts extra. Den nächsten Termin vereinbaren Sie am besten gleich vorne am Empfang. Die Termine sind im Moment schnell vergeben."
        }
       ],
       "frage": "Die Beraterin bietet an, …",
       "opt": [
        "den Widerruf gegen eine Gebühr zu schreiben.",
        "den nächsten Termin telefonisch zu vereinbaren.",
        "den Widerruf vor dem Absenden kostenlos zu prüfen."
       ],
       "loesung": 2,
       "stelle": "dann schaue ich kurz drüber",
       "erklaerung": "Das Prüfen kostet nichts extra; den Termin macht man am Empfang."
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
       "text": "Guten Abend, meine Damen und Herren, und vielen Dank an das Bürgerforum Lindtal für die Einladung. Ich arbeite seit vielen Jahren als unabhängiger Finanzberater, das heißt, ich verkaufe keine Produkte und erhalte keine Provisionen. Das ist mir wichtig zu betonen, denn beim Thema Altersvorsorge treffen Sie häufig auf Menschen, die Ihnen in erster Linie etwas verkaufen wollen. Wenn ich mit Menschen über ihre Rente spreche, erlebe ich vor allem eines: Das Thema löst Unbehagen aus. Viele schieben es jahrelang vor sich her, weil es kompliziert wirkt und weil man ungern an das Alter denkt. Mein Ziel für heute Abend ist bescheiden. Sie sollen nach Hause gehen und die Grundbegriffe so gut verstehen, dass Sie sich nicht mehr verunsichern lassen.",
       "notiz": {
        "titel": "Handzettel: Folie 1 — Einleitung",
        "zeilen": [
         "Referent: unabhängiger Finanzberater, keine Provisionen",
         "viele schieben das Thema vor sich her"
        ],
        "feld": "Ziel des Abends:",
        "frei": true,
        "muster": "Grundbegriffe verstehen, sich nicht verunsichern lassen",
        "loesungen": [
         "Grundbegriffe verstehen",
         "die Grundbegriffe verstehen",
         "sich nicht mehr verunsichern lassen",
         "Grundwissen vermitteln",
         "Grundbegriffe erklären"
        ]
       },
       "stelle": "die Grundbegriffe so gut verstehen, dass Sie sich nicht mehr verunsichern lassen",
       "erklaerung": "Dass er keine Produkte verkauft, betrifft seine Rolle; das Ziel ist das Verständnis der Grundbegriffe.",
       "frage": "Ergänze deine Notiz auf dem Handzettel."
      },
      {
       "ort": "Vortrag — Abschnitt 2",
       "wer": "Mann",
       "text": "Beginnen wir mit dem Grundgerüst. Fachleute beschreiben die Altersvorsorge in Deutschland gern mit dem Bild von drei Säulen. Die erste Säule ist die gesetzliche Rente, in die die allermeisten Angestellten automatisch einzahlen. Die zweite Säule ist die betriebliche Altersvorsorge, also alles, was Sie über Ihren Arbeitgeber ansparen. Und die dritte Säule ist die private Vorsorge, das heißt alles, was Sie selbst und freiwillig zurücklegen, etwa in Fonds, in einem Sparplan oder in Form einer eigenen Wohnung. Das Bild ist nützlich, aber es führt ein wenig in die Irre. Es suggeriert nämlich, dass alle drei Säulen ungefähr gleich stark seien. In Wirklichkeit trägt bei den meisten Menschen die erste Säule fast das gesamte Gewicht.",
       "notiz": {
        "titel": "Handzettel: Folie 2 — Die drei Säulen",
        "zeilen": [
         "erste Säule: gesetzliche Rente",
         "zweite Säule: betriebliche Vorsorge"
        ],
        "feld": "Dritte Säule:",
        "frei": true,
        "muster": "private Vorsorge, freiwillig, selbst zurückgelegt",
        "loesungen": [
         "private Vorsorge",
         "privat",
         "private Altersvorsorge",
         "eigene freiwillige Vorsorge",
         "Fonds, Sparplan, Wohnung"
        ]
       },
       "stelle": "die dritte Säule ist die private Vorsorge",
       "erklaerung": "Die beiden ersten Säulen stehen bereits auf dem Handzettel; gesucht ist die private Vorsorge.",
       "frage": "Ergänze deine Notiz auf dem Handzettel."
      },
      {
       "ort": "Vortrag — Abschnitt 3",
       "wer": "Mann",
       "text": "Schauen wir uns diese erste Säule genauer an. Viele Menschen glauben, das Geld, das sie in die Rentenversicherung einzahlen, werde für sie persönlich angelegt und später an sie zurückgezahlt. Das ist ein weit verbreiteter Irrtum. Die gesetzliche Rente funktioniert nach dem sogenannten Umlageverfahren. Das bedeutet, die Beiträge, die heute von den Berufstätigen gezahlt werden, gehen direkt an die heutigen Rentner. Ein Sparkonto im eigentlichen Sinne gibt es nicht. Das System beruht also auf einem Versprechen zwischen den Generationen. Und genau hier liegt das Problem: Es kommen immer weniger Beitragszahler auf einen Rentner. Vor einigen Jahrzehnten waren es noch etwa sechs, heute sind es nur noch rund zwei, und die Zahl sinkt weiter.",
       "notiz": {
        "titel": "Handzettel: Folie 3 — Die gesetzliche Rente",
        "zeilen": [
         "Irrtum: Beiträge werden persönlich angelegt",
         "Problem: immer weniger Beitragszahler pro Rentner"
        ],
        "feld": "Prinzip der gesetzlichen Rente:",
        "frei": true,
        "muster": "Umlageverfahren: Beiträge gehen direkt an heutige Rentner",
        "loesungen": [
         "Umlageverfahren",
         "das Umlageverfahren",
         "Beiträge gehen direkt an heutige Rentner",
         "Umlage zwischen den Generationen"
        ]
       },
       "stelle": "Die gesetzliche Rente funktioniert nach dem sogenannten Umlageverfahren",
       "erklaerung": "Die Vorstellung eines persönlichen Sparkontos wird ausdrücklich als Irrtum bezeichnet.",
       "frage": "Ergänze deine Notiz auf dem Handzettel."
      },
      {
       "ort": "Vortrag — Abschnitt 4",
       "wer": "Mann",
       "text": "Was bedeutet das für Sie ganz konkret? Die gesetzliche Rente wird in Zukunft nicht ausreichen, um den gewohnten Lebensstandard zu halten. Fachleute sprechen von der Versorgungslücke. Damit ist der Unterschied zwischen Ihrem letzten Nettogehalt und der Rente gemeint, die Sie tatsächlich bekommen. Ein Beispiel: Wer heute im Durchschnitt verdient und sein ganzes Arbeitsleben lang eingezahlt hat, kann mit einer gesetzlichen Rente von ungefähr der Hälfte seines letzten Bruttogehalts rechnen. Davon gehen noch Kranken- und Pflegeversicherung ab, unter Umständen auch Steuern. Als Faustregel gilt: Um Ihren Lebensstandard im Alter zu halten, brauchen Sie etwa achtzig Prozent Ihres letzten Nettoeinkommens. Was dazwischen fehlt, müssen Sie selbst ausgleichen.",
       "notiz": {
        "titel": "Handzettel: Folie 4 — Die Versorgungslücke",
        "zeilen": [
         "gesetzliche Rente: etwa die Hälfte des letzten Bruttogehalts",
         "Abzüge: Kranken- und Pflegeversicherung, Steuern"
        ],
        "feld": "Bedarf im Alter laut Faustregel:",
        "frei": true,
        "muster": "etwa achtzig Prozent des letzten Nettoeinkommens",
        "loesungen": [
         "etwa achtzig Prozent",
         "achtzig Prozent",
         "80 %",
         "80 Prozent",
         "ca. 80 % vom Netto",
         "80 % des letzten Nettoeinkommens"
        ]
       },
       "stelle": "etwa achtzig Prozent Ihres letzten Nettoeinkommens",
       "erklaerung": "Die Hälfte des Bruttogehalts ist die zu erwartende Rente, nicht der Bedarf laut Faustregel.",
       "frage": "Ergänze deine Notiz auf dem Handzettel."
      },
      {
       "ort": "Vortrag — Abschnitt 5",
       "wer": "Mann",
       "text": "Ein Baustein, der oft vergessen wird, ist die betriebliche Vorsorge. Jeder Angestellte hat in Deutschland einen gesetzlichen Anspruch darauf, einen Teil seines Bruttogehalts in eine Betriebsrente umzuwandeln. Der Vorteil liegt darin, dass dieser Teil nicht versteuert wird und zunächst auch keine Sozialabgaben anfallen. Der Nachteil ist, dass im Alter dann auf die Auszahlung Steuern und Abgaben fällig werden. Ob sich das für Sie lohnt, hängt stark vom Einzelfall ab. Ein klares Ja gibt es aber in einem Fall: Wenn Ihr Arbeitgeber etwas dazugibt, sollten Sie dieses Angebot fast immer annehmen. Das ist geschenktes Geld, das Sie sonst einfach liegen lassen. Fragen Sie also gleich morgen in der Personalabteilung nach, was Ihr Betrieb anbietet.",
       "notiz": {
        "titel": "Handzettel: Folie 5 — Betriebliche Vorsorge",
        "zeilen": [
         "Anspruch auf Umwandlung von Bruttogehalt",
         "Vorteil jetzt, Steuern und Abgaben im Alter"
        ],
        "feld": "Wann klar lohnend?",
        "frei": true,
        "muster": "wenn der Arbeitgeber etwas dazugibt",
        "loesungen": [
         "wenn der Arbeitgeber etwas dazugibt",
         "Zuschuss vom Arbeitgeber",
         "wenn der Arbeitgeber dazuzahlt",
         "Arbeitgeberzuschuss"
        ]
       },
       "stelle": "Wenn Ihr Arbeitgeber etwas dazugibt, sollten Sie dieses Angebot fast immer annehmen",
       "erklaerung": "Im Allgemeinen hängt es vom Einzelfall ab; ein klares Ja gibt es nur beim Zuschuss des Arbeitgebers.",
       "frage": "Ergänze deine Notiz auf dem Handzettel."
      },
      {
       "ort": "Vortrag — Abschnitt 6",
       "wer": "Mann",
       "text": "Kommen wir zur privaten Vorsorge und damit zum vielleicht wichtigsten Gedanken des Abends: der Zeit. Albert, ein Bekannter von mir, hat mit fünfundzwanzig angefangen, jeden Monat hundert Euro zurückzulegen, und nach zehn Jahren aufgehört. Seine Schwester hat erst mit fünfunddreißig begonnen, dafür aber dreißig Jahre lang eingezahlt, also dreimal so viel Geld. Bei einer angenommenen Rendite von sechs Prozent im Jahr hatten beide mit fünfundsechzig ungefähr gleich viel. Wie kann das sein? Der Grund ist der Zinseszinseffekt. Die Erträge werfen selbst wieder Erträge ab, und dieser Effekt wird mit jedem Jahr stärker. Deshalb ist der frühe Beginn wichtiger als die Höhe der Beträge. Und wer jetzt denkt, für ihn sei es zu spät: Der zweitbeste Zeitpunkt ist heute.",
       "notiz": {
        "titel": "Handzettel: Folie 6 — Früh anfangen",
        "zeilen": [
         "Beispiel: Albert ab fünfundzwanzig, nur zehn Jahre",
         "Schwester ab fünfunddreißig, dreißig Jahre, dreimal so viel Geld"
        ],
        "feld": "Erklärung für das Ergebnis:",
        "frei": true,
        "muster": "der Zinseszinseffekt",
        "loesungen": [
         "Zinseszinseffekt",
         "der Zinseszins",
         "Zinseszins",
         "Erträge bringen wieder Erträge",
         "Zinseszinseffekt: früher Beginn wichtiger"
        ]
       },
       "stelle": "Der Grund ist der Zinseszinseffekt",
       "erklaerung": "Die Rendite von sechs Prozent ist nur eine Annahme; die eigentliche Erklärung ist der Zinseszins.",
       "frage": "Ergänze deine Notiz auf dem Handzettel."
      },
      {
       "ort": "Vortrag — Abschnitt 7",
       "wer": "Mann",
       "text": "Nun gibt es aber einen Gegenspieler, den viele unterschätzen, nämlich die Inflation. Gemeint ist der Wertverlust des Geldes durch steigende Preise. Wenn die Preise im Durchschnitt um zwei Prozent im Jahr steigen, dann können Sie sich mit tausend Euro in fünfunddreißig Jahren nur noch etwa halb so viel kaufen wie heute. Das hat eine wichtige Konsequenz. Viele Menschen halten ein Sparbuch oder ein Tagesgeldkonto für eine besonders sichere Form der Vorsorge. Kurzfristig ist es das auch. Langfristig aber liegen die Zinsen dort oft unter der Inflationsrate. Das heißt, Ihr Geld wird zwar nominal mehr, verliert aber real an Wert. Für eine Notreserve von drei Monatsgehältern ist das Tagesgeld ideal, als Altersvorsorge hingegen ungeeignet.",
       "notiz": {
        "titel": "Handzettel: Folie 7 — Die Inflation",
        "zeilen": [
         "Inflation: Wertverlust durch steigende Preise",
         "Tagesgeld ideal für Notreserve"
        ],
        "feld": "Problem von Sparbuch und Tagesgeld langfristig:",
        "frei": true,
        "muster": "Zinsen unter der Inflationsrate, realer Wertverlust",
        "loesungen": [
         "Zinsen unter der Inflationsrate",
         "realer Wertverlust",
         "Geld verliert real an Wert",
         "Zinsen niedriger als Inflation"
        ]
       },
       "stelle": "liegen die Zinsen dort oft unter der Inflationsrate",
       "erklaerung": "Kurzfristig gilt das Konto als sicher; das Problem ist der langfristige reale Wertverlust.",
       "frage": "Ergänze deine Notiz auf dem Handzettel."
      },
      {
       "ort": "Vortrag — Abschnitt 8",
       "wer": "Mann",
       "text": "Ein Punkt, der in Beratungsgesprächen oft kaum erwähnt wird, sind die Kosten. Viele Vorsorgeprodukte enthalten Abschlussgebühren, Verwaltungsgebühren und laufende Kosten, die im Kleingedruckten versteckt sind. Ein Prozent Kosten pro Jahr klingt nach wenig. Über dreißig Jahre gerechnet kann dieses eine Prozent aber leicht ein Viertel Ihres Endvermögens auffressen, und zwar wiederum wegen des Zinseszinseffekts, der hier gegen Sie arbeitet. Besonders teuer sind häufig Produkte, die Versicherung und Geldanlage miteinander kombinieren. Mein dringender Rat lautet daher: Lassen Sie sich vor jedem Vertragsabschluss eine Übersicht aller Kosten aushändigen, und zwar in Euro, nicht in Prozent. Wenn ein Berater sich weigert, Ihnen diese Zahl zu nennen, wissen Sie Bescheid.",
       "notiz": {
        "titel": "Handzettel: Folie 8 — Auf Kosten achten",
        "zeilen": [
         "versteckte Kosten: Abschluss, Verwaltung, laufend",
         "besonders teuer: Kombination Versicherung und Anlage"
        ],
        "feld": "Rat vor Vertragsabschluss:",
        "frei": true,
        "muster": "Kostenübersicht in Euro verlangen",
        "loesungen": [
         "Kostenübersicht in Euro verlangen",
         "Übersicht aller Kosten in Euro",
         "alle Kosten in Euro zeigen lassen",
         "Kosten in Euro geben lassen"
        ]
       },
       "stelle": "Lassen Sie sich vor jedem Vertragsabschluss eine Übersicht aller Kosten aushändigen",
       "erklaerung": "Wichtig ist die Angabe in Euro, nicht in Prozent; das eine Prozent ist nur das Rechenbeispiel.",
       "frage": "Ergänze deine Notiz auf dem Handzettel."
      },
      {
       "ort": "Vortrag — Abschnitt 9",
       "wer": "Mann",
       "text": "Wie sollte man das Geld nun anlegen? Ich kann und will Ihnen hier heute keine individuelle Empfehlung geben, aber ein Grundsatz gilt für fast alle: Streuen Sie Ihr Risiko. Wer sein ganzes Erspartes in die Aktie eines einzigen Unternehmens steckt, setzt alles auf eine Karte. Geht diese Firma pleite, ist das Geld weg. Breit gestreute Fonds, die in Hunderte oder Tausende Unternehmen aus vielen Ländern investieren, verteilen dieses Risiko. Natürlich schwanken auch sie, und es wird Jahre geben, in denen Ihr Depot deutlich im Minus steht. Das ist der Preis für die höhere Rendite. Der häufigste Fehler, den ich erlebe, ist, in einer solchen Phase panisch zu verkaufen. Wer dagegen ruhig bleibt, hat sich historisch gesehen fast immer wieder erholt.",
       "notiz": {
        "titel": "Handzettel: Folie 9 — Risiko streuen",
        "zeilen": [
         "keine individuelle Empfehlung",
         "Schwankungen: Preis für höhere Rendite"
        ],
        "feld": "Häufigster Fehler laut Referent:",
        "frei": true,
        "muster": "in Verlustphasen panisch verkaufen",
        "loesungen": [
         "panisch verkaufen",
         "in der Krise verkaufen",
         "bei Verlusten verkaufen",
         "in Panik verkaufen",
         "im Minus verkaufen"
        ]
       },
       "stelle": "Der häufigste Fehler, den ich erlebe, ist, in einer solchen Phase panisch zu verkaufen",
       "erklaerung": "Alles auf eine Aktie zu setzen ist riskant, wird aber nicht als häufigster Fehler bezeichnet.",
       "frage": "Ergänze deine Notiz auf dem Handzettel."
      },
      {
       "ort": "Vortrag — Abschnitt 10",
       "wer": "Mann",
       "text": "Ich komme zum Schluss. Ich weiß, das waren heute viele Informationen, und vielleicht fühlen Sie sich jetzt eher erschlagen als ermutigt. Deshalb möchte ich Ihnen zum Abschied nur eine einzige Aufgabe mitgeben. Fordern Sie in den nächsten Tagen Ihre aktuelle Renteninformation an, falls Sie sie nicht ohnehin jedes Jahr per Post bekommen. Darin steht schwarz auf weiß, mit welcher gesetzlichen Rente Sie rechnen können. Vergleichen Sie diese Zahl mit Ihrem heutigen Nettogehalt, und Sie sehen Ihre persönliche Lücke. Erst wenn Sie diese Zahl kennen, ergibt es Sinn, über Produkte nachzudenken. Die Verbraucherberatung hier im Rathaus bietet übrigens jeden ersten Mittwoch im Monat kostenlose Termine an. Vielen Dank für Ihre Aufmerksamkeit.",
       "notiz": {
        "titel": "Handzettel: Folie 10 — Der erste Schritt",
        "zeilen": [
         "Renteninformation mit Nettogehalt vergleichen → persönliche Lücke",
         "Verbraucherberatung im Rathaus, erster Mittwoch im Monat"
        ],
        "feld": "Erste Aufgabe für die Zuhörer:",
        "frei": true,
        "muster": "aktuelle Renteninformation anfordern",
        "loesungen": [
         "Renteninformation anfordern",
         "die aktuelle Renteninformation anfordern",
         "Renteninformation besorgen",
         "Renteninformation lesen und vergleichen"
        ]
       },
       "stelle": "Fordern Sie in den nächsten Tagen Ihre aktuelle Renteninformation an",
       "erklaerung": "Erst mit dieser Information kennt man die eigene Lücke; über Produkte nachzudenken kommt danach.",
       "frage": "Ergänze deine Notiz auf dem Handzettel."
      }
     ]
    }
   ]
  },
  {
   "id": "tg1hl2",
   "titel": "Prüfungslauf 2",
   "minuten": 40,
   "teile": [
    {
     "nr": 1,
     "art": "diskussion",
     "aufgaben": [
      {
       "von": "Person 1 — Krankenpfleger, Anfang vierzig",
       "wer": "Mann",
       "text": "Früher sind meine Frau und ich mit dem Rucksack durch Südostasien gereist, das war großartig. Aber seit die Zwillinge da sind, gilt bei uns eine einfache Regel: höchstens zwei Stunden Fahrt. Alles darüber endet im Chaos. Deshalb fahren wir jetzt an die Ostsee, und die Kinder sind glücklich, sobald sie Sand sehen.",
       "loesung": 5,
       "stelle": "höchstens zwei Stunden Fahrt",
       "erklaerung": "Die Fernreisen gehören der Vergangenheit an. Mit den Kindern zählt eine kurze Anreise.",
       "frage": "Welche Aussage passt zu dieser Person?",
       "opt": [
        "Ich verreise aus Rücksicht auf das Klima nur noch mit der Bahn.",
        "Urlaub im eigenen Land ist mir inzwischen schlicht zu teuer geworden.",
        "Ich entdecke gerade meine eigene Region neu und brauche keine weiten Reisen.",
        "Ohne Sonnengarantie ist es für mich kein richtiger Urlaub.",
        "Ich reise ins Ausland, um eine andere Sprache und Kultur wirklich zu erleben.",
        "Mit kleinen Kindern ist mir eine kurze Anreise am wichtigsten.",
        "Im Urlaub besuche ich vor allem meine Verwandten im Ausland.",
        "Ich mache keinen klassischen Urlaub mehr, sondern arbeite unterwegs.",
        "Ich meide überfüllte Orte und reise deshalb außerhalb der Ferienzeit.",
        "Meine Reiseziele suche ich mir nach Empfehlungen aus dem Internet aus."
       ],
       "fest": true
      },
      {
       "von": "Person 2 — Steuerberaterin, Ende fünfzig",
       "wer": "Frau",
       "text": "Ich bin jahrelang an die Nordsee gefahren, ich liebe die Gegend. Aber letzten Sommer habe ich für eine Woche Ferienwohnung mehr bezahlt als meine Schwester für zwei Wochen Portugal, Flug inklusive. Da habe ich mich schon gefragt, was hier eigentlich los ist. Dieses Jahr fliege ich mit ihr, so leid es mir tut.",
       "loesung": 1,
       "stelle": "mehr bezahlt als meine Schwester für zwei Wochen Portugal",
       "erklaerung": "Sie liebt die Nordsee, aber die hohen Preise im Inland bringen sie dazu, ins Ausland zu reisen.",
       "frage": "Welche Aussage passt zu dieser Person?",
       "opt": [
        "Ich verreise aus Rücksicht auf das Klima nur noch mit der Bahn.",
        "Urlaub im eigenen Land ist mir inzwischen schlicht zu teuer geworden.",
        "Ich entdecke gerade meine eigene Region neu und brauche keine weiten Reisen.",
        "Ohne Sonnengarantie ist es für mich kein richtiger Urlaub.",
        "Ich reise ins Ausland, um eine andere Sprache und Kultur wirklich zu erleben.",
        "Mit kleinen Kindern ist mir eine kurze Anreise am wichtigsten.",
        "Im Urlaub besuche ich vor allem meine Verwandten im Ausland.",
        "Ich mache keinen klassischen Urlaub mehr, sondern arbeite unterwegs.",
        "Ich meide überfüllte Orte und reise deshalb außerhalb der Ferienzeit.",
        "Meine Reiseziele suche ich mir nach Empfehlungen aus dem Internet aus."
       ],
       "fest": true
      },
      {
       "von": "Person 3 — Elektroingenieur, Mitte dreißig",
       "wer": "Mann",
       "text": "Ich steige seit drei Jahren in kein Flugzeug mehr, das habe ich mir vorgenommen, nachdem ich einmal meinen eigenen Fußabdruck ausgerechnet hatte. Ins Ausland fahre ich trotzdem: mit dem Nachtzug nach Wien oder mit mehreren Zügen bis nach Südfrankreich. Die Anreise dauert länger, aber sie ist inzwischen ein Teil des Urlaubs.",
       "loesung": 0,
       "stelle": "Ich steige seit drei Jahren in kein Flugzeug mehr",
       "erklaerung": "Er reist weiterhin ins Ausland, aber aus Klimagründen nur mit dem Zug.",
       "frage": "Welche Aussage passt zu dieser Person?",
       "opt": [
        "Ich verreise aus Rücksicht auf das Klima nur noch mit der Bahn.",
        "Urlaub im eigenen Land ist mir inzwischen schlicht zu teuer geworden.",
        "Ich entdecke gerade meine eigene Region neu und brauche keine weiten Reisen.",
        "Ohne Sonnengarantie ist es für mich kein richtiger Urlaub.",
        "Ich reise ins Ausland, um eine andere Sprache und Kultur wirklich zu erleben.",
        "Mit kleinen Kindern ist mir eine kurze Anreise am wichtigsten.",
        "Im Urlaub besuche ich vor allem meine Verwandten im Ausland.",
        "Ich mache keinen klassischen Urlaub mehr, sondern arbeite unterwegs.",
        "Ich meide überfüllte Orte und reise deshalb außerhalb der Ferienzeit.",
        "Meine Reiseziele suche ich mir nach Empfehlungen aus dem Internet aus."
       ],
       "fest": true
      },
      {
       "von": "Person 4 — Friseurin, Mitte zwanzig",
       "wer": "Frau",
       "text": "Für mich ist Urlaub eigentlich immer dasselbe: Meine Großeltern und die halbe Verwandtschaft leben in einem kleinen Ort an der kroatischen Küste. Jeden Sommer fahren wir hin, und dann wird drei Wochen lang gekocht, gefeiert und erzählt. Ein Hotel habe ich dort noch nie von innen gesehen.",
       "loesung": 6,
       "stelle": "Meine Großeltern und die halbe Verwandtschaft leben",
       "erklaerung": "Ihr Urlaub besteht aus Besuchen bei der Familie im Ausland.",
       "frage": "Welche Aussage passt zu dieser Person?",
       "opt": [
        "Ich verreise aus Rücksicht auf das Klima nur noch mit der Bahn.",
        "Urlaub im eigenen Land ist mir inzwischen schlicht zu teuer geworden.",
        "Ich entdecke gerade meine eigene Region neu und brauche keine weiten Reisen.",
        "Ohne Sonnengarantie ist es für mich kein richtiger Urlaub.",
        "Ich reise ins Ausland, um eine andere Sprache und Kultur wirklich zu erleben.",
        "Mit kleinen Kindern ist mir eine kurze Anreise am wichtigsten.",
        "Im Urlaub besuche ich vor allem meine Verwandten im Ausland.",
        "Ich mache keinen klassischen Urlaub mehr, sondern arbeite unterwegs.",
        "Ich meide überfüllte Orte und reise deshalb außerhalb der Ferienzeit.",
        "Meine Reiseziele suche ich mir nach Empfehlungen aus dem Internet aus."
       ],
       "fest": true
      },
      {
       "von": "Person 5 — Rentner, ehemaliger Postbote",
       "wer": "Mann",
       "text": "Mein ganzes Berufsleben bin ich jeden Sommer weit weggeflogen, weil man das eben so machte. Jetzt fahre ich mit dem Fahrrad durch die Gegend im Umkreis von fünfzig Kilometern und staune: Burgruinen, Moore, kleine Brauereien, von denen ich nie gehört hatte. Ich hätte nicht gedacht, dass vor der eigenen Haustür so viel zu entdecken ist.",
       "loesung": 2,
       "stelle": "vor der eigenen Haustür so viel zu entdecken ist",
       "erklaerung": "Er hat die Fernreisen aufgegeben und erkundet begeistert seine eigene Region.",
       "frage": "Welche Aussage passt zu dieser Person?",
       "opt": [
        "Ich verreise aus Rücksicht auf das Klima nur noch mit der Bahn.",
        "Urlaub im eigenen Land ist mir inzwischen schlicht zu teuer geworden.",
        "Ich entdecke gerade meine eigene Region neu und brauche keine weiten Reisen.",
        "Ohne Sonnengarantie ist es für mich kein richtiger Urlaub.",
        "Ich reise ins Ausland, um eine andere Sprache und Kultur wirklich zu erleben.",
        "Mit kleinen Kindern ist mir eine kurze Anreise am wichtigsten.",
        "Im Urlaub besuche ich vor allem meine Verwandten im Ausland.",
        "Ich mache keinen klassischen Urlaub mehr, sondern arbeite unterwegs.",
        "Ich meide überfüllte Orte und reise deshalb außerhalb der Ferienzeit.",
        "Meine Reiseziele suche ich mir nach Empfehlungen aus dem Internet aus."
       ],
       "fest": true
      },
      {
       "von": "Person 6 — Redakteurin bei einer Internetzeitung, Ende zwanzig",
       "wer": "Frau",
       "text": "So etwas wie zwei Wochen am Strand liegen mache ich gar nicht mehr. Ich nehme meinen Laptop mit und miete mir für einen Monat eine Wohnung, zuletzt in Lissabon. Vormittags schreibe ich meine Artikel, nachmittags erkunde ich die Stadt. Mein Arbeitgeber ist einverstanden, solange ich erreichbar bin.",
       "loesung": 7,
       "stelle": "Vormittags schreibe ich meine Artikel",
       "erklaerung": "Statt klassischem Urlaub verbindet sie Arbeit und Reisen.",
       "frage": "Welche Aussage passt zu dieser Person?",
       "opt": [
        "Ich verreise aus Rücksicht auf das Klima nur noch mit der Bahn.",
        "Urlaub im eigenen Land ist mir inzwischen schlicht zu teuer geworden.",
        "Ich entdecke gerade meine eigene Region neu und brauche keine weiten Reisen.",
        "Ohne Sonnengarantie ist es für mich kein richtiger Urlaub.",
        "Ich reise ins Ausland, um eine andere Sprache und Kultur wirklich zu erleben.",
        "Mit kleinen Kindern ist mir eine kurze Anreise am wichtigsten.",
        "Im Urlaub besuche ich vor allem meine Verwandten im Ausland.",
        "Ich mache keinen klassischen Urlaub mehr, sondern arbeite unterwegs.",
        "Ich meide überfüllte Orte und reise deshalb außerhalb der Ferienzeit.",
        "Meine Reiseziele suche ich mir nach Empfehlungen aus dem Internet aus."
       ],
       "fest": true
      },
      {
       "von": "Person 7 — Hausmeister, Anfang sechzig",
       "wer": "Mann",
       "text": "Seit die Kinder aus dem Haus sind, sind wir nicht mehr an die Schulferien gebunden. Und das nutzen wir aus: Wir fahren im späten September oder im Mai, egal ob an den Bodensee oder nach Italien. Dann sind die Strände leer, die Preise niedriger, und man bekommt im Restaurant ohne Reservierung einen Tisch.",
       "loesung": 8,
       "stelle": "nicht mehr an die Schulferien gebunden",
       "erklaerung": "Das Reiseziel ist ihm egal. Entscheidend ist, außerhalb der Hauptsaison zu fahren.",
       "frage": "Welche Aussage passt zu dieser Person?",
       "opt": [
        "Ich verreise aus Rücksicht auf das Klima nur noch mit der Bahn.",
        "Urlaub im eigenen Land ist mir inzwischen schlicht zu teuer geworden.",
        "Ich entdecke gerade meine eigene Region neu und brauche keine weiten Reisen.",
        "Ohne Sonnengarantie ist es für mich kein richtiger Urlaub.",
        "Ich reise ins Ausland, um eine andere Sprache und Kultur wirklich zu erleben.",
        "Mit kleinen Kindern ist mir eine kurze Anreise am wichtigsten.",
        "Im Urlaub besuche ich vor allem meine Verwandten im Ausland.",
        "Ich mache keinen klassischen Urlaub mehr, sondern arbeite unterwegs.",
        "Ich meide überfüllte Orte und reise deshalb außerhalb der Ferienzeit.",
        "Meine Reiseziele suche ich mir nach Empfehlungen aus dem Internet aus."
       ],
       "fest": true
      },
      {
       "von": "Person 8 — Pharmareferent, Ende zwanzig",
       "wer": "Mann",
       "text": "Ich will nicht in ein Hotel, in dem an der Bar nur Deutsch gesprochen wird. Vor jeder Reise lerne ich ein paar Wochen lang die Sprache, letzten Sommer Portugiesisch, und dann wohne ich bei Einheimischen. Das Wetter ist mir dabei übrigens völlig egal, ich war auch schon im November in Schottland.",
       "loesung": 4,
       "stelle": "Vor jeder Reise lerne ich ein paar Wochen lang die Sprache",
       "erklaerung": "Er sucht echte Begegnung mit Sprache und Kultur. Sonne spielt für ihn keine Rolle.",
       "frage": "Welche Aussage passt zu dieser Person?",
       "opt": [
        "Ich verreise aus Rücksicht auf das Klima nur noch mit der Bahn.",
        "Urlaub im eigenen Land ist mir inzwischen schlicht zu teuer geworden.",
        "Ich entdecke gerade meine eigene Region neu und brauche keine weiten Reisen.",
        "Ohne Sonnengarantie ist es für mich kein richtiger Urlaub.",
        "Ich reise ins Ausland, um eine andere Sprache und Kultur wirklich zu erleben.",
        "Mit kleinen Kindern ist mir eine kurze Anreise am wichtigsten.",
        "Im Urlaub besuche ich vor allem meine Verwandten im Ausland.",
        "Ich mache keinen klassischen Urlaub mehr, sondern arbeite unterwegs.",
        "Ich meide überfüllte Orte und reise deshalb außerhalb der Ferienzeit.",
        "Meine Reiseziele suche ich mir nach Empfehlungen aus dem Internet aus."
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
         "text": "Herzlich willkommen in der Volkshochschule Talheim zu unserem Podiumsgespräch über Beruf und Pflege. Herr Marquardt, Sie pflegen seit vier Jahren Ihre Mutter. Wie hat das angefangen?"
        },
        {
         "wer": "Mann",
         "text": "Ganz plötzlich, mit einem Sturz. Vorher hatte meine Mutter allein gelebt und war, wie ich dachte, völlig selbstständig. Erst im Krankenhaus habe ich erfahren, dass sie schon seit Monaten kaum noch eingekauft hatte. Die Nachbarin hatte es bemerkt, wollte sich aber nicht einmischen."
        }
       ],
       "frage": "Herr Marquardt erfuhr erst im Krankenhaus, dass seine Mutter …",
       "opt": [
        "schon länger kaum noch eingekauft hatte.",
        "bei der Nachbarin wohnen wollte.",
        "bereits mehrmals gestürzt war."
       ],
       "loesung": 0,
       "stelle": "dass sie schon seit Monaten kaum noch eingekauft hatte",
       "erklaerung": "Erwähnt wird nur ein einziger Sturz."
      },
      {
       "ort": "Gespräch — Abschnitt 2",
       "zeilen": [
        {
         "wer": "Frau",
         "text": "Frau Sander, Sie leiten einen Pflegestützpunkt. Ist so ein Verlauf typisch?"
        },
        {
         "wer": "Frau",
         "text": "Leider ja. Die meisten Familien kommen erst zu uns, wenn bereits eine Krise eingetreten ist. Dabei könnten wir viel mehr bewirken, wenn man uns früher fragen würde, etwa wenn die Eltern anfangen, Termine zu vergessen. Dann lässt sich vieles in Ruhe planen statt unter Zeitdruck."
        }
       ],
       "frage": "Frau Sander bedauert, dass viele Familien …",
       "opt": [
        "die Beratung nicht in Anspruch nehmen dürfen.",
        "sich erst nach einer Krise beraten lassen.",
        "ihre Eltern zu früh in ein Heim geben."
       ],
       "loesung": 1,
       "stelle": "erst zu uns, wenn bereits eine Krise eingetreten ist",
       "erklaerung": "Früher beraten zu werden, würde Planung ohne Zeitdruck ermöglichen."
      },
      {
       "ort": "Gespräch — Abschnitt 3",
       "zeilen": [
        {
         "wer": "Frau",
         "text": "Herr Marquardt, Sie sind voll berufstätig. Wie bekommen Sie das zusammen?"
        },
        {
         "wer": "Mann",
         "text": "Am Anfang gar nicht. Ich habe drei Monate versucht, alles allein zu stemmen, und war danach selbst krank. Der Wendepunkt war, dass ich Hilfe angenommen habe: Ein Pflegedienst kommt morgens und abends, und zweimal pro Woche geht meine Mutter in eine Tagespflege. Seitdem kann ich wieder ganz normal arbeiten."
        }
       ],
       "frage": "Die Lage besserte sich für Herrn Marquardt, als er …",
       "opt": [
        "seine Arbeitszeit dauerhaft verringerte.",
        "seine Mutter zu sich nach Hause holte.",
        "professionelle Unterstützung annahm."
       ],
       "loesung": 2,
       "stelle": "Der Wendepunkt war, dass ich Hilfe angenommen habe",
       "erklaerung": "Allein alles zu stemmen, hat ihn krank gemacht."
      },
      {
       "ort": "Gespräch — Abschnitt 4",
       "zeilen": [
        {
         "wer": "Frau",
         "text": "Viele hier fragen sich sicher, wer das alles bezahlt."
        },
        {
         "wer": "Frau",
         "text": "Einen großen Teil übernimmt die Pflegeversicherung, sofern ein Pflegegrad festgestellt wurde. Viele wissen nicht, dass man Leistungen kombinieren kann, also Pflegedienst und Tagespflege nebeneinander. Gerade die Tagespflege wird erstaunlich selten genutzt, obwohl dafür ein eigenes Budget vorgesehen ist."
        }
       ],
       "frage": "Laut Frau Sander wird die Tagespflege selten genutzt, obwohl …",
       "opt": [
        "dafür ein eigenes Budget der Pflegeversicherung vorgesehen ist.",
        "sie nur ohne Pflegegrad bezahlt wird.",
        "sie günstiger ist als ein Pflegedienst."
       ],
       "loesung": 0,
       "stelle": "obwohl dafür ein eigenes Budget vorgesehen ist",
       "erklaerung": "Leistungen setzen einen Pflegegrad voraus; ein Preisvergleich fällt nicht."
      },
      {
       "ort": "Gespräch — Abschnitt 5",
       "zeilen": [
        {
         "wer": "Frau",
         "text": "Wie hat Ihr Arbeitgeber reagiert, Herr Marquardt?"
        },
        {
         "wer": "Mann",
         "text": "Besser, als ich befürchtet hatte. Ich habe lange gezögert, darüber zu sprechen, weil ich nicht als unzuverlässig gelten wollte. Als ich es meiner Chefin erzählt habe, hat sie mir sofort angeboten, zwei Tage in der Woche von zu Hause zu arbeiten. Ich hätte viel früher fragen sollen."
        }
       ],
       "frage": "Herr Marquardt sprach lange nicht mit seiner Chefin, weil …",
       "opt": [
        "sie keine Arbeit von zu Hause erlaubte.",
        "er fürchtete, als unzuverlässig zu gelten.",
        "er gerade eine neue Stelle angetreten hatte."
       ],
       "loesung": 1,
       "stelle": "weil ich nicht als unzuverlässig gelten wollte",
       "erklaerung": "Die Chefin bot die Arbeit von zu Hause sofort an."
      },
      {
       "ort": "Gespräch — Abschnitt 6",
       "zeilen": [
        {
         "wer": "Frau",
         "text": "Frau Sander, welche rechtlichen Möglichkeiten haben Berufstätige?"
        },
        {
         "wer": "Frau",
         "text": "Wenn plötzlich eine Pflegesituation eintritt, kann man sich bis zu zehn Arbeitstage freistellen lassen, um die Versorgung zu organisieren. Für diese Zeit lässt sich sogar eine Lohnersatzleistung beantragen. Diese kurze Auszeit kennen viele nicht, dabei ist sie gerade am Anfang Gold wert."
        }
       ],
       "frage": "Die Freistellung von bis zu zehn Arbeitstagen dient dazu, …",
       "opt": [
        "sich selbst von der Pflege zu erholen.",
        "eine Ausbildung in der Pflege zu beginnen.",
        "die Versorgung des Angehörigen zu organisieren."
       ],
       "loesung": 2,
       "stelle": "um die Versorgung zu organisieren",
       "erklaerung": "Es geht um die Organisation am Anfang, nicht um Erholung."
      },
      {
       "ort": "Gespräch — Abschnitt 7",
       "zeilen": [
        {
         "wer": "Frau",
         "text": "Herr Marquardt, was war emotional am schwierigsten?"
        },
        {
         "wer": "Mann",
         "text": "Die Rollenumkehr. Meine Mutter hat mich großgezogen, und plötzlich muss ich ihr sagen, dass sie nicht mehr Auto fahren darf. Diese Gespräche waren schlimmer als jede körperliche Anstrengung. Geholfen hat mir eine Gesprächsgruppe für pflegende Angehörige, dort haben alle die gleichen Schuldgefühle."
        }
       ],
       "frage": "Als besonders belastend empfand Herr Marquardt …",
       "opt": [
        "die körperliche Arbeit bei der Pflege.",
        "die Treffen in der Gesprächsgruppe.",
        "die Umkehr der Rollen zwischen Mutter und Sohn."
       ],
       "loesung": 2,
       "stelle": "Die Rollenumkehr",
       "erklaerung": "Die Gruppe hat ihm geholfen; Körperliches war weniger schlimm."
      },
      {
       "ort": "Gespräch — Abschnitt 8",
       "zeilen": [
        {
         "wer": "Frau",
         "text": "Wir haben eine Frage aus dem Publikum. Bitte."
        },
        {
         "wer": "Mann",
         "text": "Meine Geschwister wohnen weit weg und überlassen die Pflege unseres Vaters ganz mir. Wie bringe ich sie dazu, sich zu beteiligen?"
        },
        {
         "wer": "Frau",
         "text": "Indem Sie ihnen konkrete Aufgaben geben, die man auch aus der Ferne erledigen kann, etwa den Schriftverkehr mit der Pflegekasse. Allgemeine Appelle führen meist nur zu Streit. Wir bieten auch Familiengespräche an, die wir moderieren. Oft hilft schon, wenn ein Außenstehender mit am Tisch sitzt."
        }
       ],
       "frage": "Um Geschwister in der Ferne einzubinden, rät Frau Sander, …",
       "opt": [
        "an ihr Pflichtgefühl zu appellieren.",
        "ihnen konkrete Aufgaben zu übertragen, die aus der Ferne möglich sind.",
        "den Vater abwechselnd bei allen Geschwistern wohnen zu lassen."
       ],
       "loesung": 1,
       "stelle": "Indem Sie ihnen konkrete Aufgaben geben",
       "erklaerung": "Allgemeine Appelle führen laut ihr eher zu Streit."
      },
      {
       "ort": "Gespräch — Abschnitt 9",
       "zeilen": [
        {
         "wer": "Frau",
         "text": "Herr Marquardt, denken Sie manchmal an ein Pflegeheim?"
        },
        {
         "wer": "Mann",
         "text": "Natürlich. Lange war das ein Tabu, weil ich meiner Mutter versprochen hatte, sie nie ins Heim zu geben. Inzwischen sehe ich das anders. Ein Versprechen, das man gegeben hat, ohne zu wissen, was kommt, darf man überdenken. Entscheidend ist, dass sie gut versorgt ist, nicht, wo."
        }
       ],
       "frage": "Über ein Pflegeheim denkt Herr Marquardt heute …",
       "opt": [
        "anders, weil ihm gute Versorgung wichtiger ist als der Ort.",
        "nicht mehr nach, weil er es seiner Mutter versprochen hat.",
        "nur nach, weil seine Mutter es selbst wünscht."
       ],
       "loesung": 0,
       "stelle": "Entscheidend ist, dass sie gut versorgt ist, nicht, wo",
       "erklaerung": "Das Versprechen war früher ein Tabu, heute hält er es für überdenkbar."
      },
      {
       "ort": "Gespräch — Abschnitt 10",
       "zeilen": [
        {
         "wer": "Frau",
         "text": "Zum Abschluss: Was geben Sie den Zuhörern mit auf den Weg?"
        },
        {
         "wer": "Frau",
         "text": "Sprechen Sie mit Ihren Eltern über Pflege, solange alle gesund sind. Wer wünscht sich was, gibt es eine Vorsorgevollmacht, wo liegen die wichtigen Unterlagen? Das ist unangenehm, aber im Ernstfall unendlich wertvoll."
        },
        {
         "wer": "Mann",
         "text": "Und ich ergänze: Nehmen Sie Hilfe an, bevor Sie selbst nicht mehr können. Das ist kein Zeichen von Schwäche."
        }
       ],
       "frage": "Frau Sander rät, über Pflege zu sprechen, …",
       "opt": [
        "wenn die Eltern noch gesund sind.",
        "erst wenn ein Pflegegrad festgestellt wurde.",
        "nur in Begleitung einer Beratungsstelle."
       ],
       "loesung": 0,
       "stelle": "solange alle gesund sind",
       "erklaerung": "Gerade vor dem Ernstfall sei das Gespräch wertvoll."
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
       "text": "Herzlich willkommen zum dritten Abend unserer Reihe Bewusst essen hier in der Volkshochschule Brennhausen. Heute geht es um ein Thema, das auf den ersten Blick wenig spektakulär wirkt, nämlich die richtige Lagerung von Lebensmitteln. Warum lohnt es sich, darüber zu sprechen? Weil in Privathaushalten erstaunlich viel weggeworfen wird. Nach einer Erhebung des Landesinstituts für Ernährung sind es pro Person und Jahr rund achtzig Kilogramm. Das entspricht etwa zwei vollen Einkaufswagen. Viele denken bei Lebensmittelverschwendung zuerst an Supermärkte und Restaurants, tatsächlich entsteht aber mehr als die Hälfte aller Lebensmittelabfälle in den privaten Küchen. Und ein großer Teil davon landet im Müll, weil Lebensmittel falsch gelagert wurden und zu schnell verderben.",
       "notiz": {
        "titel": "Handzettel: Folie 1 — Lebensmittelabfälle im Haushalt",
        "zeilen": [
         "Quelle: Landesinstitut für Ernährung",
         "mehr als die Hälfte der Abfälle in privaten Küchen"
        ],
        "feld": "Abfälle pro Person und Jahr:",
        "frei": true,
        "muster": "rund achtzig Kilogramm",
        "loesungen": [
         "rund achtzig Kilogramm",
         "achtzig Kilogramm",
         "80 kg",
         "ca. 80 kg",
         "80 Kilo",
         "etwa 80 Kilogramm"
        ]
       },
       "stelle": "pro Person und Jahr rund achtzig Kilogramm",
       "erklaerung": "Zwei Einkaufswagen ist nur ein Vergleich; gesucht ist die Menge pro Person und Jahr.",
       "frage": "Ergänze deine Notiz auf dem Handzettel."
      },
      {
       "ort": "Vortrag — Abschnitt 2",
       "wer": "Frau",
       "text": "Bevor wir zur Lagerung kommen, ein Wort zu den Angaben auf der Verpackung, denn hier liegt das häufigste Missverständnis. Das Mindesthaltbarkeitsdatum ist kein Verfallsdatum. Es besagt lediglich, dass der Hersteller bis zu diesem Tag garantiert, dass Geschmack, Farbe und Konsistenz unverändert sind. Joghurt, Nudeln oder Käse sind meist noch Tage oder sogar Wochen danach einwandfrei. Mein Rat lautet: Anschauen, riechen, probieren. Ganz anders verhält es sich mit dem Verbrauchsdatum, das Sie an der Formulierung zu verbrauchen bis erkennen. Es steht auf leicht verderblichen Produkten wie Hackfleisch oder frischem Fisch. Nach diesem Datum sollten Sie das Produkt auf keinen Fall mehr essen, auch wenn es noch gut aussieht und riecht.",
       "notiz": {
        "titel": "Handzettel: Folie 2 — Haltbarkeitsangaben",
        "zeilen": [
         "Mindesthaltbarkeitsdatum: Garantie des Herstellers, kein Verfallsdatum",
         "Rat: anschauen, riechen, probieren"
        ],
        "feld": "Verbrauchsdatum: nach Ablauf …",
        "frei": true,
        "muster": "auf keinen Fall mehr essen",
        "loesungen": [
         "auf keinen Fall mehr essen",
         "nicht mehr essen",
         "wegwerfen",
         "nicht mehr verzehren",
         "nie mehr essen"
        ]
       },
       "stelle": "Nach diesem Datum sollten Sie das Produkt auf keinen Fall mehr essen",
       "erklaerung": "„Anschauen, riechen, probieren\" gilt nur für das Mindesthaltbarkeitsdatum, nicht für das Verbrauchsdatum.",
       "frage": "Ergänze deine Notiz auf dem Handzettel."
      },
      {
       "ort": "Vortrag — Abschnitt 3",
       "wer": "Frau",
       "text": "Kommen wir zum Kühlschrank. Den meisten ist nicht bewusst, dass es im Kühlschrank unterschiedlich kalte Bereiche gibt. Warme Luft steigt nach oben, deshalb ist es im obersten Fach mit etwa acht Grad am wärmsten. Dort gehören Lebensmittel hin, die nur wenig Kühlung brauchen, etwa Käse oder angebrochene Marmelade. In der Mitte lagern Sie Milchprodukte. Der kälteste Bereich mit etwa zwei Grad ist nicht, wie viele glauben, das Gemüsefach, sondern die Glasplatte direkt darüber. Dorthin gehören Fleisch, Wurst und Fisch, die besonders schnell verderben. Die Tür ist übrigens ebenfalls ein eher warmer Ort, weil sie ständig geöffnet wird. Sie eignet sich für Getränke, Butter und Eier, aber keinesfalls für frische Milch, die schnell sauer wird.",
       "notiz": {
        "titel": "Handzettel: Folie 3 — Zonen im Kühlschrank",
        "zeilen": [
         "oben: etwa acht Grad, Käse, Marmelade",
         "Tür: warm, Getränke, Butter, Eier"
        ],
        "feld": "Kältester Bereich, für Fleisch und Fisch:",
        "frei": true,
        "muster": "Glasplatte direkt über dem Gemüsefach",
        "loesungen": [
         "Glasplatte über dem Gemüsefach",
         "über dem Gemüsefach",
         "die Glasplatte",
         "unterste Glasplatte",
         "Glasplatte direkt über dem Gemüsefach"
        ]
       },
       "stelle": "sondern die Glasplatte direkt darüber",
       "erklaerung": "Viele halten das Gemüsefach für den kältesten Bereich; die Rednerin korrigiert das ausdrücklich.",
       "frage": "Ergänze deine Notiz auf dem Handzettel."
      },
      {
       "ort": "Vortrag — Abschnitt 4",
       "wer": "Frau",
       "text": "Beim Obst und Gemüse ist die Sache etwas komplizierter, denn nicht alles gehört in den Kühlschrank. Tomaten, Gurken, Paprika und Bananen sind kälteempfindlich. Sie verlieren im Kühlschrank ihr Aroma und werden schneller matschig. Diese Sorten lagern Sie besser bei Zimmertemperatur. Ein zweites Problem kennen viele nicht: Einige Obstsorten, vor allem Äpfel, geben ein Reifegas namens Ethylen ab. Dieses Gas lässt anderes Obst und Gemüse in der Nähe schneller reifen und damit auch schneller verderben. Wenn Ihre Bananen in der Obstschale also immer nach zwei Tagen braun sind, liegt das vermutlich an den Äpfeln daneben. Lagern Sie Äpfel deshalb immer getrennt. Umgekehrt können Sie den Effekt nutzen, um eine harte Avocado schneller reif zu machen.",
       "notiz": {
        "titel": "Handzettel: Folie 4 — Obst und Gemüse",
        "zeilen": [
         "kälteempfindlich: Tomaten, Gurken, Paprika, Bananen",
         "Nutzen: harte Avocado nachreifen lassen"
        ],
        "feld": "Äpfel getrennt lagern, weil …",
        "frei": true,
        "muster": "sie Ethylen abgeben, anderes Obst reift schneller",
        "loesungen": [
         "sie Ethylen abgeben",
         "Ethylen",
         "Reifegas Ethylen",
         "sie anderes Obst schneller reifen lassen",
         "Reifegas"
        ]
       },
       "stelle": "vor allem Äpfel, geben ein Reifegas namens Ethylen ab",
       "erklaerung": "Die Kälteempfindlichkeit betrifft andere Sorten; bei Äpfeln geht es um das abgegebene Reifegas.",
       "frage": "Ergänze deine Notiz auf dem Handzettel."
      },
      {
       "ort": "Vortrag — Abschnitt 5",
       "wer": "Frau",
       "text": "Zwei Lebensmittel, die in fast jedem Haushalt zu finden sind, verdienen eine eigene Folie, nämlich Kartoffeln und Zwiebeln. Kartoffeln mögen es dunkel, kühl und trocken, ideal sind etwa vier bis acht Grad. Ein kühler Keller ist perfekt. In den Kühlschrank gehören sie dagegen nicht, denn bei zu niedrigen Temperaturen wandelt sich die Stärke in Zucker um. Die Kartoffeln schmecken dann süßlich und werden beim Braten schneller dunkel. Licht wiederum führt dazu, dass sich grüne Stellen bilden, die man großzügig wegschneiden sollte. Ein Fehler, den ich in sehr vielen Küchen sehe, ist, Kartoffeln und Zwiebeln nebeneinander zu lagern. Die beiden beeinflussen sich gegenseitig, und die Kartoffeln fangen deutlich schneller an zu keimen.",
       "notiz": {
        "titel": "Handzettel: Folie 5 — Kartoffeln und Zwiebeln",
        "zeilen": [
         "Kartoffeln: dunkel, kühl, trocken",
         "kein Kühlschrank: Stärke wird zu Zucker"
        ],
        "feld": "Häufiger Fehler:",
        "frei": true,
        "muster": "Kartoffeln und Zwiebeln nebeneinander lagern",
        "loesungen": [
         "Kartoffeln und Zwiebeln nebeneinander lagern",
         "Kartoffeln neben Zwiebeln",
         "zusammen mit Zwiebeln lagern",
         "Kartoffeln und Zwiebeln zusammen"
        ]
       },
       "stelle": "Kartoffeln und Zwiebeln nebeneinander zu lagern",
       "erklaerung": "Der Kühlschrank wird zwar als ungeeignet genannt, als häufiger Fehler aber die gemeinsame Lagerung mit Zwiebeln.",
       "frage": "Ergänze deine Notiz auf dem Handzettel."
      },
      {
       "ort": "Vortrag — Abschnitt 6",
       "wer": "Frau",
       "text": "Ein Lebensmittel, das besonders häufig im Müll landet, ist Brot. Viele Menschen bewahren ihr Brot im Kühlschrank auf, weil sie glauben, dass es dort länger frisch bleibt. Das Gegenteil ist der Fall. Bei Temperaturen knapp über null Grad wird Brot besonders schnell altbacken, weil die Stärke dann am schnellsten Wasser verliert. Im Kühlschrank wird Brot also zwar nicht so schnell schimmelig, aber trocken und fad. Am besten lagern Sie Brot bei Zimmertemperatur in einem Brottopf aus Ton oder in einem Leinenbeutel. Plastiktüten sind dagegen ungünstig, weil sich darin Feuchtigkeit sammelt und Schimmel begünstigt wird. Und wenn Sie absehen, dass Sie ein Brot nicht rechtzeitig aufessen, frieren Sie es am besten in Scheiben ein.",
       "notiz": {
        "titel": "Handzettel: Folie 6 — Brot",
        "zeilen": [
         "im Kühlschrank: schnell altbacken, trocken",
         "Plastiktüte: Feuchtigkeit, Schimmel"
        ],
        "feld": "Beste Aufbewahrung für Brot:",
        "frei": true,
        "muster": "Zimmertemperatur, Brottopf aus Ton oder Leinenbeutel",
        "loesungen": [
         "Brottopf aus Ton",
         "Brottopf oder Leinenbeutel",
         "bei Zimmertemperatur im Brottopf",
         "Leinenbeutel",
         "Brottopf"
        ]
       },
       "stelle": "bei Zimmertemperatur in einem Brottopf aus Ton oder in einem Leinenbeutel",
       "erklaerung": "Kühlschrank und Plastiktüte werden ausdrücklich als ungünstig bezeichnet.",
       "frage": "Ergänze deine Notiz auf dem Handzettel."
      },
      {
       "ort": "Vortrag — Abschnitt 7",
       "wer": "Frau",
       "text": "Nun zu einem Punkt, bei dem es nicht nur um Geschmack, sondern auch um Gesundheit geht, nämlich um gekochte Reste. Viele lassen einen großen Topf Suppe oder Reis über Nacht auf dem Herd stehen, damit er abkühlt, bevor er in den Kühlschrank kommt. Davon rate ich dringend ab. Gerade bei lauwarmen Temperaturen vermehren sich Bakterien besonders schnell. Gekochte Reste sollten deshalb innerhalb von höchstens zwei Stunden in den Kühlschrank. Damit das schneller geht, verteilen Sie große Mengen am besten auf mehrere flache Behälter. Die alte Regel, man dürfe nichts Warmes in den Kühlschrank stellen, stammt übrigens aus einer Zeit, als die Geräte noch deutlich schwächer waren. Bei modernen Kühlschränken ist das kein Problem mehr.",
       "notiz": {
        "titel": "Handzettel: Folie 7 — Reste richtig aufbewahren",
        "zeilen": [
         "nicht über Nacht auf dem Herd stehen lassen",
         "große Mengen auf flache Behälter verteilen"
        ],
        "feld": "Reste in den Kühlschrank innerhalb von:",
        "frei": true,
        "muster": "höchstens zwei Stunden",
        "loesungen": [
         "höchstens zwei Stunden",
         "zwei Stunden",
         "2 Stunden",
         "2 h",
         "max. 2 Stunden",
         "innerhalb von 2 Std."
        ]
       },
       "stelle": "innerhalb von höchstens zwei Stunden in den Kühlschrank",
       "erklaerung": "Über Nacht abkühlen lassen ist gerade der Fehler; die Obergrenze sind zwei Stunden.",
       "frage": "Ergänze deine Notiz auf dem Handzettel."
      },
      {
       "ort": "Vortrag — Abschnitt 8",
       "wer": "Frau",
       "text": "Das Gefrierfach ist eines der besten Werkzeuge gegen Lebensmittelverschwendung, wird aber oft falsch genutzt. Grundsätzlich lässt sich fast alles einfrieren: Brot, Fleisch, Kräuter, gekochte Gerichte und sogar geriebener Käse. Wichtig ist, möglichst wenig Luft an die Lebensmittel zu lassen, sonst entsteht der sogenannte Gefrierbrand, also trockene, graue Stellen. Ausnahmen sind Lebensmittel mit hohem Wassergehalt, wie Salat oder Gurke, die nach dem Auftauen matschig werden. Mein wichtigster Tipp ist aber ein ganz einfacher: Beschriften Sie alles, was Sie einfrieren, mit Inhalt und Datum. Sie glauben gar nicht, wie viele unbekannte Päckchen ich schon in fremden Gefriertruhen gefunden habe, die dann doch weggeworfen wurden, weil niemand mehr wusste, was darin war.",
       "notiz": {
        "titel": "Handzettel: Folie 8 — Einfrieren",
        "zeilen": [
         "fast alles einfrierbar, auch Kräuter und Käse",
         "Ausnahme: Salat, Gurke"
        ],
        "feld": "Wichtigster Tipp beim Einfrieren:",
        "frei": true,
        "muster": "mit Inhalt und Datum beschriften",
        "loesungen": [
         "mit Inhalt und Datum beschriften",
         "beschriften",
         "Inhalt und Datum notieren",
         "alles beschriften",
         "Datum und Inhalt aufschreiben"
        ]
       },
       "stelle": "Beschriften Sie alles, was Sie einfrieren, mit Inhalt und Datum",
       "erklaerung": "Wenig Luft gegen Gefrierbrand ist ein wichtiger Hinweis, ausdrücklich der wichtigste Tipp ist aber das Beschriften.",
       "frage": "Ergänze deine Notiz auf dem Handzettel."
      },
      {
       "ort": "Vortrag — Abschnitt 9",
       "wer": "Frau",
       "text": "Die beste Lagerung nützt allerdings wenig, wenn man von vornherein zu viel kauft. Deshalb ein paar Worte zum Einkaufen. Studien zeigen, dass wir besonders viel Überflüssiges kaufen, wenn wir hungrig einkaufen gehen und wenn wir ohne Plan losziehen. Mein Vorschlag ist deshalb ein Blick in den Kühlschrank vor jedem Einkauf, verbunden mit einem einfachen Wochenplan. Sie müssen dafür nicht jede Mahlzeit festlegen. Es reicht, grob zu überlegen, an welchen Tagen Sie zu Hause essen. Außerdem empfehle ich ein Prinzip, das in der Gastronomie selbstverständlich ist: Neue Ware kommt nach hinten, ältere nach vorne. So greifen Sie automatisch zuerst zu dem, was zuerst verbraucht werden muss. Dieses Prinzip nennt man auf gut Deutsch: zuerst rein, zuerst raus.",
       "notiz": {
        "titel": "Handzettel: Folie 9 — Einkauf planen",
        "zeilen": [
         "Risiken: hungrig und ohne Plan einkaufen",
         "Vorschlag: Blick in den Kühlschrank und grober Wochenplan"
        ],
        "feld": "Prinzip aus der Gastronomie:",
        "frei": true,
        "muster": "neue Ware nach hinten, ältere nach vorne",
        "loesungen": [
         "neue Ware nach hinten, ältere nach vorne",
         "zuerst rein, zuerst raus",
         "Altes nach vorne",
         "ältere Lebensmittel nach vorne",
         "neues nach hinten"
        ]
       },
       "stelle": "Neue Ware kommt nach hinten, ältere nach vorne",
       "erklaerung": "Der Wochenplan ist ein eigener Vorschlag; das Prinzip aus der Gastronomie betrifft die Anordnung im Schrank.",
       "frage": "Ergänze deine Notiz auf dem Handzettel."
      },
      {
       "ort": "Vortrag — Abschnitt 10",
       "wer": "Frau",
       "text": "Damit sind wir schon am Ende des heutigen Abends angelangt. Lassen Sie mich die wichtigsten Punkte noch einmal kurz zusammenfassen. Verlassen Sie sich beim Mindesthaltbarkeitsdatum auf Ihre Sinne, beim Verbrauchsdatum dagegen nicht. Nutzen Sie die unterschiedlichen Zonen im Kühlschrank, lagern Sie Äpfel getrennt und Kartoffeln nicht neben Zwiebeln. Und frieren Sie ein, was Sie nicht rechtzeitig schaffen. Wenn Sie nur einen einzigen Gedanken mitnehmen möchten, dann diesen: Die meisten Lebensmittel werden nicht weggeworfen, weil sie verdorben sind, sondern weil wir sie vergessen haben. Ordnung und Übersicht sind deshalb der beste Schutz. Nächste Woche geht es übrigens um das Thema Kochen mit Resten, und ich würde mich freuen, Sie wiederzusehen.",
       "notiz": {
        "titel": "Handzettel: Folie 10 — Fazit",
        "zeilen": [
         "Mindesthaltbarkeit: Sinne; Verbrauchsdatum: nicht",
         "nächste Woche: Kochen mit Resten"
        ],
        "feld": "Kerngedanke: Lebensmittel werden weggeworfen, weil …",
        "frei": true,
        "muster": "wir sie vergessen haben, nicht weil sie verdorben sind",
        "loesungen": [
         "wir sie vergessen haben",
         "sie vergessen werden",
         "man sie vergisst",
         "vergessen, nicht verdorben"
        ]
       },
       "stelle": "sondern weil wir sie vergessen haben",
       "erklaerung": "Die Rednerin widerspricht der Annahme, Lebensmittel seien meist verdorben: Sie werden vergessen.",
       "frage": "Ergänze deine Notiz auf dem Handzettel."
      }
     ]
    }
   ]
  }
 ]
};
