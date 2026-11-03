/* ============================================================
   deutschoderwas club — HÖREN telc Deutsch C1 Beruf

   Aufbau nach dem offiziellen telc-Format (Handbuch C1 Beruf und
   Übungstest 1 C1 Beruf, geprüft 03.11.2026). Alle Texte und
   Aufgaben eigene, Kontext Wirtschaft und Arbeitswelt.
   Erzeugt aus scratchpad/telcc1b mit bau.js.
   ============================================================ */

window.HOEREN_TELC_C1B = {
 "niveau": "telcC1B",
 "pruefung": "telc Deutsch C1 Beruf",
 "minuten": 40,
 "punkte": 48,
 "intro": "Der Hören-Teil bei telc C1 Beruf dauert etwa vierzig Minuten, und jeder Text läuft nur einmal: acht kurze Interviews, ein Verkaufs- oder Verhandlungsgespräch und ein Vortrag von etwa zehn Minuten, bei dem du Folien mit Notizen ergänzt. Nach jeder Antwort siehst du den Text mit der entscheidenden Stelle.",
 "stufen": [
  {
   "nr": 1,
   "titel": "Haltungen und Gespräche",
   "zeichen": "👂",
   "was": "Was meint jemand, worauf einigt man sich?"
  },
  {
   "nr": 2,
   "titel": "Vorträge mitschreiben",
   "zeichen": "📝",
   "was": "Folien lesen, Kerninformation notieren."
  },
  {
   "nr": 3,
   "titel": "Die Aufgabentypen",
   "zeichen": "🎯",
   "was": "Interviews, Gespräch, Vortrag, jeder Teil einzeln."
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
   "id": "tc1bh1",
   "stufe": 1,
   "titel": "Haltungen erkennen",
   "kurz": "Nicht das Thema zählt, sondern die Position: dafür, dagegen, unter einer Bedingung, umgedacht.",
   "ziel": "Nach diesem Block erkennst du nach einmaligem Hören, welche Haltung jemand zu einem Thema aus dem Berufsleben einnimmt, auch wenn er Gegenargumente erwähnt.",
   "zeichen": "🎯",
   "farbe": "turq",
   "mal": 1,
   "aufgaben": [
    {
     "art": "hoerwahl",
     "ort": "Thema: Wechselnde Arbeitsplätze im Büro",
     "wer": "Frau",
     "text": "Natürlich ist es lästig, morgens erst einen freien Platz suchen zu müssen. Aber seit wir keine festen Schreibtische mehr haben, sitze ich jede Woche neben jemand anderem und weiß viel besser, was in den anderen Abteilungen passiert.",
     "frage": "Wie steht die Frau zu den wechselnden Arbeitsplätzen?",
     "opt": [
      "Sie lehnt sie wegen der Platzsuche ab.",
      "Sie schätzt sie trotz eines Nachteils.",
      "Sie hält sie nur für Führungskräfte für sinnvoll."
     ],
     "loesung": 1,
     "stelle": "weiß viel besser, was in den anderen Abteilungen passiert",
     "erklaerung": "Der Nachteil steht vorne, nach „Aber“ folgt die eigentliche, positive Bewertung."
    },
    {
     "art": "hoerwahl",
     "ort": "Thema: Betriebliche Altersvorsorge",
     "wer": "Mann",
     "text": "Ich habe den Vertrag damals nur abgeschlossen, weil der Personalchef so gedrängt hat. Inzwischen bin ich froh darüber, denn der Arbeitgeber legt jeden Monat noch fünfzig Euro drauf, und das summiert sich über die Jahre.",
     "frage": "Was sagt der Mann über seine betriebliche Altersvorsorge?",
     "opt": [
      "Er sieht sie heute positiv.",
      "Er bereut den Abschluss.",
      "Er will den Vertrag kündigen."
     ],
     "loesung": 0,
     "stelle": "Inzwischen bin ich froh darüber",
     "erklaerung": "„Damals“ beschreibt den Anfang, „inzwischen“ die heutige Haltung."
    },
    {
     "art": "hoerwahl",
     "ort": "Thema: Dienstwagen",
     "wer": "Frau",
     "text": "Ein Dienstwagen wäre für mich nur interessant, wenn ich ihn auch privat nutzen dürfte, ohne dass mir das am Ende über die Steuer wieder vom Gehalt abgezogen wird.",
     "frage": "Welche Haltung hat die Frau zu einem Dienstwagen?",
     "opt": [
      "Sie lehnt ihn grundsätzlich ab.",
      "Sie möchte unbedingt einen, egal zu welchen Bedingungen.",
      "Sie hätte nur unter bestimmten Bedingungen Interesse."
     ],
     "loesung": 2,
     "stelle": "nur interessant, wenn ich ihn auch privat nutzen dürfte",
     "erklaerung": "„nur … wenn“ nennt eine Bedingung. Die Haltung ist weder klar dafür noch dagegen."
    },
    {
     "art": "hoerwahl",
     "ort": "Thema: Weihnachtsfeier in der Firma",
     "wer": "Mann",
     "text": "Viele Kollegen sagen, so eine Weihnachtsfeier sei Pflichtprogramm und reine Zeitverschwendung. Ich sehe das anders. Nirgends sonst rede ich mit den Leuten aus der Produktion, und genau das hilft mir das ganze Jahr über bei Rückfragen.",
     "frage": "Was denkt der Mann über die Weihnachtsfeier?",
     "opt": [
      "Er hält sie für Zeitverschwendung.",
      "Er schätzt sie wegen der Kontakte.",
      "Er geht nur hin, weil es erwartet wird."
     ],
     "loesung": 1,
     "stelle": "Ich sehe das anders",
     "erklaerung": "Zuerst gibt er die Meinung der Kollegen wieder, dann grenzt er sich davon ab."
    },
    {
     "art": "hoerwahl",
     "ort": "Thema: Rückkehr ins Büro",
     "wer": "Frau",
     "text": "Anfangs war ich strikt dagegen, dass wir wieder drei Tage pro Woche ins Büro müssen. Nach ein paar Monaten muss ich zugeben, dass neue Kollegen bei uns viel schneller lernen, seit sie nicht mehr allein zu Hause sitzen.",
     "frage": "Wie hat sich die Haltung der Frau entwickelt?",
     "opt": [
      "Sie hat ihre Meinung teilweise geändert.",
      "Sie ist weiterhin strikt dagegen.",
      "Sie möchte ganz ins Büro zurück."
     ],
     "loesung": 0,
     "stelle": "muss ich zugeben",
     "erklaerung": "„Anfangs“ und „muss ich zugeben“ zeigen einen Meinungswechsel, aber keinen Wunsch nach mehr Bürotagen."
    },
    {
     "art": "hoerwahl",
     "ort": "Thema: Prämien im Verkauf",
     "wer": "Mann",
     "text": "Prämien für einzelne Verkäufer halte ich im Prinzip für fair. Ich frage mich nur, ob sie nicht dazu führen, dass niemand mehr einem Kollegen einen Kunden überlässt, der bei ihm eigentlich besser aufgehoben wäre.",
     "frage": "Welche Haltung zeigt der Mann?",
     "opt": [
      "Er befürwortet Prämien ohne Einschränkung.",
      "Er lehnt Prämien grundsätzlich ab.",
      "Er ist dafür, sieht aber ein Risiko."
     ],
     "loesung": 2,
     "stelle": "Ich frage mich nur",
     "erklaerung": "„im Prinzip“ kündigt eine Einschränkung an, die Frage drückt einen Zweifel aus."
    },
    {
     "art": "hoerwahl",
     "ort": "Thema: Englisch als Konzernsprache",
     "wer": "Frau",
     "text": "Dass alle Präsentationen jetzt auf Englisch laufen, ist für die Zusammenarbeit mit den Werken in Polen und Mexiko sicher sinnvoll. Für unsere Leute in der Montage ist das allerdings eine Zumutung, und ich verstehe, wenn sie sich ausgeschlossen fühlen.",
     "frage": "Wie bewertet die Frau die neue Konzernsprache?",
     "opt": [
      "Sie sieht einen Nutzen, aber auch einen Nachteil für eine Gruppe.",
      "Sie lehnt Englisch im Unternehmen völlig ab.",
      "Sie fordert Englischkurse für alle."
     ],
     "loesung": 0,
     "stelle": "ist das allerdings eine Zumutung",
     "erklaerung": "„sicher sinnvoll“ und „allerdings“ zeigen eine abwägende Haltung."
    },
    {
     "art": "hoerwahl",
     "ort": "Thema: Duzen im Unternehmen",
     "wer": "Mann",
     "text": "Seit der neue Geschäftsführer allen das Du angeboten hat, tun alle so, als wären wir eine große Familie. Ehrlich gesagt hat sich an den Entscheidungswegen nichts geändert, nur der Ton klingt lockerer.",
     "frage": "Was hält der Mann vom Duzen in der Firma?",
     "opt": [
      "Er begrüßt es, weil die Hierarchien flacher geworden sind.",
      "Er ist skeptisch, weil sich nur die Oberfläche verändert hat.",
      "Er möchte unbedingt zum Sie zurück."
     ],
     "loesung": 1,
     "stelle": "an den Entscheidungswegen nichts geändert",
     "erklaerung": "„tun alle so, als“ verrät seine Skepsis. Eine Rückkehr zum Sie fordert er nicht."
    },
    {
     "art": "hoerwahl",
     "ort": "Thema: Kurzarbeit",
     "wer": "Frau",
     "text": "Natürlich hat mir das Geld gefehlt, gerade im zweiten Monat. Trotzdem war Kurzarbeit für uns die bessere Lösung, denn die Alternative wären Entlassungen gewesen, und dann hätte es vielleicht mich getroffen.",
     "frage": "Wie bewertet die Frau die Kurzarbeit?",
     "opt": [
      "Sie kritisiert sie wegen des geringeren Einkommens.",
      "Sie hält sie für das kleinere Übel.",
      "Sie hätte Entlassungen vorgezogen."
     ],
     "loesung": 1,
     "stelle": "die bessere Lösung",
     "erklaerung": "Der Nachteil wird eingeräumt, „Trotzdem“ leitet die Gesamtbewertung ein."
    },
    {
     "art": "hoerwahl",
     "ort": "Thema: Offene Gehälter",
     "wer": "Mann",
     "text": "Ich wäre dafür, dass Gehälter offengelegt werden, aber nur, wenn gleichzeitig klar geregelt ist, nach welchen Kriterien bezahlt wird. Sonst gibt es nur Neid, und keiner weiß, warum.",
     "frage": "Wie steht der Mann zu offenen Gehältern?",
     "opt": [
      "Er ist ohne Einschränkung dafür.",
      "Er ist wegen des Neids dagegen.",
      "Er ist dafür, wenn die Kriterien geregelt sind."
     ],
     "loesung": 2,
     "stelle": "aber nur, wenn gleichzeitig klar geregelt ist",
     "erklaerung": "Der Neid ist die Folge, wenn die Bedingung fehlt. Grundsätzlich ist er dafür."
    }
   ]
  },
  {
   "id": "tc1bh2",
   "stufe": 1,
   "titel": "Verhandlungs- und Verkaufsgespräche folgen",
   "kurz": "Wer bietet was an, wer gibt nach, was wird am Ende vereinbart? Angebote, Bedingungen und Zugeständnisse verfolgen.",
   "ziel": "Nach diesem Block erkennst du in Verkaufs- und Verhandlungsgesprächen, welches Angebot unter welcher Bedingung gilt und was tatsächlich vereinbart wird.",
   "zeichen": "🤝",
   "farbe": "gold",
   "mal": 1,
   "aufgaben": [
    {
     "art": "hoerwahl",
     "ort": "Gespräch: Preisverhandlung mit einem Lieferanten",
     "wer": "Mann",
     "text": "Wir verstehen, dass neun Prozent für Sie viel sind. Wenn Sie uns eine Abnahme von zwanzigtausend Stück im Jahr garantieren, könnten wir auf sechs Prozent heruntergehen.",
     "frage": "Der Lieferant bietet einen geringeren Preisaufschlag an, wenn …",
     "opt": [
      "… der Kunde eine bestimmte Menge fest zusagt.",
      "… der Kunde schneller bezahlt.",
      "… der Vertrag um ein Jahr verlängert wird."
     ],
     "loesung": 0,
     "stelle": "Wenn Sie uns eine Abnahme von zwanzigtausend Stück im Jahr garantieren",
     "erklaerung": "Das Zugeständnis ist an eine garantierte Abnahmemenge gebunden."
    },
    {
     "art": "hoerwahl",
     "ort": "Gespräch: Kaffeemaschine für ein Hotel",
     "wer": "Frau",
     "text": "Das Modell kostet in der Anschaffung etwas mehr als das, was Sie bisher haben. Dafür brauchen Sie keinen Wartungsvertrag, die Reinigung läuft automatisch, und gerade zu Ihren Frühstückszeiten sparen Sie sich das Personal an der Kaffeestation.",
     "frage": "Die Verkäuferin begründet den höheren Preis vor allem mit …",
     "opt": [
      "… einer besseren Kaffeequalität.",
      "… geringeren laufenden Kosten.",
      "… einer längeren Garantie."
     ],
     "loesung": 1,
     "stelle": "Dafür brauchen Sie keinen Wartungsvertrag",
     "erklaerung": "„Dafür“ leitet die Gegenrechnung ein: keine Wartung, weniger Personal."
    },
    {
     "art": "hoerwahl",
     "ort": "Gespräch: Einwand eines Kunden",
     "wer": "Mann",
     "text": "Ihr Angebot ist gut, keine Frage. Mein Problem ist nicht der Preis, sondern die Lieferzeit. Zwölf Wochen sind für uns zu lang, wir eröffnen die neue Filiale schon im März.",
     "frage": "Der Kunde zögert, weil …",
     "opt": [
      "… das Angebot zu teuer ist.",
      "… die Filiale schon eröffnet ist.",
      "… die Ware zu spät käme."
     ],
     "loesung": 2,
     "stelle": "Mein Problem ist nicht der Preis, sondern die Lieferzeit",
     "erklaerung": "Der Preis wird ausdrücklich ausgeschlossen. Das Problem ist der Termin."
    },
    {
     "art": "hoerwahl",
     "ort": "Gespräch: Zugeständnis im Verkauf",
     "wer": "Frau",
     "text": "Beim Preis kann ich Ihnen nicht weiter entgegenkommen, da sind wir wirklich an der Grenze. Was ich Ihnen anbieten kann, ist ein Zahlungsziel von sechzig statt dreißig Tagen, und die Schulung Ihrer Mitarbeiter übernehmen wir kostenlos.",
     "frage": "Die Vertriebsleiterin kommt dem Kunden entgegen, indem sie …",
     "opt": [
      "… den Preis noch einmal senkt.",
      "… mehr Zeit zum Bezahlen und eine kostenlose Schulung anbietet.",
      "… eine zusätzliche Schulung gegen Aufpreis anbietet."
     ],
     "loesung": 1,
     "stelle": "Was ich Ihnen anbieten kann, ist ein Zahlungsziel",
     "erklaerung": "Der Preis bleibt, das Entgegenkommen liegt bei Zahlungsfrist und Schulung."
    },
    {
     "art": "hoerwahl",
     "ort": "Gespräch: Gehaltsverhandlung",
     "wer": "Mann",
     "text": "Eine Erhöhung um acht Prozent ist in diesem Jahr nicht drin. Ich kann Ihnen vier Prozent ab Januar zusagen, und im Sommer, nach Ihrer Fortbildung, sprechen wir noch einmal darüber.",
     "frage": "Der Personalleiter …",
     "opt": [
      "… lehnt jede Erhöhung ab.",
      "… sagt die volle Erhöhung ab Sommer zu.",
      "… bietet einen Teil an und stellt ein weiteres Gespräch in Aussicht."
     ],
     "loesung": 2,
     "stelle": "im Sommer, nach Ihrer Fortbildung, sprechen wir noch einmal darüber",
     "erklaerung": "Vier Prozent sind zugesagt, über mehr wird im Sommer nur gesprochen."
    },
    {
     "art": "hoerwahl",
     "ort": "Gespräch: Rahmenvertrag",
     "wer": "Frau",
     "text": "Den Rahmenvertrag unterschreiben wir heute noch nicht. Ich nehme Ihr Angebot mit zu unserer Geschäftsführung, und wenn die Musterlieferung in Ordnung ist, melde ich mich bis Ende des Monats.",
     "frage": "Am Ende des Gesprächs wird vereinbart, dass …",
     "opt": [
      "… zuerst eine Musterlieferung geprüft wird.",
      "… der Vertrag sofort unterschrieben wird.",
      "… die Geschäftsführung den Lieferanten besucht."
     ],
     "loesung": 0,
     "stelle": "wenn die Musterlieferung in Ordnung ist",
     "erklaerung": "Die Unterschrift hängt vom Ergebnis der Musterlieferung ab."
    },
    {
     "art": "hoerwahl",
     "ort": "Gespräch: Reklamation eines Großkunden",
     "wer": "Mann",
     "text": "Die beschädigten Kartons ersetzen wir Ihnen selbstverständlich. Eine Gutschrift auf die ganze Lieferung kann ich Ihnen allerdings nicht geben, denn der Rest der Ware ist ja einwandfrei angekommen.",
     "frage": "Der Kundenbetreuer ist bereit, …",
     "opt": [
      "… die gesamte Lieferung gutzuschreiben.",
      "… nur die beschädigte Ware zu ersetzen.",
      "… die Lieferung komplett zurückzunehmen."
     ],
     "loesung": 1,
     "stelle": "Die beschädigten Kartons ersetzen wir Ihnen selbstverständlich",
     "erklaerung": "„allerdings“ grenzt ab: Ersatz ja, Gutschrift auf alles nein."
    },
    {
     "art": "hoerwahl",
     "ort": "Gespräch: Kauf einer Software",
     "wer": "Frau",
     "text": "Was mich an Ihrem System überzeugt, ist ehrlich gesagt nicht die Vielzahl der Funktionen, davon nutzen wir die Hälfte sowieso nicht. Es ist die Tatsache, dass Ihr Kundendienst in Deutschland sitzt und unsere Leute dort anrufen können.",
     "frage": "Die Kundin entscheidet sich für das System, weil …",
     "opt": [
      "… der Kundendienst gut erreichbar ist.",
      "… es besonders viele Funktionen hat.",
      "… ihre Mitarbeiter es schon kennen."
     ],
     "loesung": 0,
     "stelle": "dass Ihr Kundendienst in Deutschland sitzt",
     "erklaerung": "Die Funktionen werden ausdrücklich als nebensächlich bezeichnet."
    },
    {
     "art": "hoerwahl",
     "ort": "Gespräch: Liefertermin",
     "wer": "Mann",
     "text": "Den fünfzehnten können wir nur halten, wenn Sie auf die Sonderlackierung verzichten. Mit Sonderlackierung wird es frühestens der dreißigste.",
     "frage": "Der Lieferant kann zum fünfzehnten liefern, wenn …",
     "opt": [
      "… der Kunde einen Aufpreis zahlt.",
      "… der Kunde Teile selbst lackiert.",
      "… die Ware in der Standardfarbe geliefert wird."
     ],
     "loesung": 2,
     "stelle": "wenn Sie auf die Sonderlackierung verzichten",
     "erklaerung": "Bedingung für den frühen Termin ist der Verzicht auf die Sonderfarbe."
    },
    {
     "art": "hoerwahl",
     "ort": "Gespräch: Abschluss eines Verkaufsgesprächs",
     "wer": "Frau",
     "text": "Dann halten wir fest: Sie nehmen zunächst zwei Geräte für drei Monate zur Probe, die Miete wird bei einem späteren Kauf vollständig angerechnet, und im Februar setzen wir uns wieder zusammen.",
     "frage": "Vereinbart wird, dass …",
     "opt": [
      "… der Kunde die Geräte sofort kauft.",
      "… die Mietkosten bei einem Kauf berücksichtigt werden.",
      "… der Kunde nach drei Monaten kaufen muss."
     ],
     "loesung": 1,
     "stelle": "die Miete wird bei einem späteren Kauf vollständig angerechnet",
     "erklaerung": "„Dann halten wir fest“ leitet das Ergebnis ein. Eine Kaufpflicht gibt es nicht."
    }
   ]
  },
  {
   "id": "tc1bh3",
   "stufe": 2,
   "titel": "Vortrag mitschreiben: Folien lesen, Kerninformation notieren",
   "kurz": "Der Folientitel sagt dir, was gesucht ist. Notiert wird nur die eine Information, die dazu passt, keine Nebenbemerkung.",
   "ziel": "Nach diesem Block liest du vor dem Hören die Folie als Suchauftrag und filterst aus einem Vortragsausschnitt die Kerninformation heraus.",
   "zeichen": "📝",
   "farbe": "lila",
   "mal": 1,
   "aufgaben": [
    {
     "art": "hoerwahl",
     "ort": "Folie: Ausgangslage",
     "wer": "Mann",
     "text": "Als ich vor drei Jahren die Leitung des Kundenservice übernommen habe, und das war damals übrigens eher ein Zufall, lag die durchschnittliche Wartezeit am Telefon bei elf Minuten.",
     "frage": "Was notieren Sie unter „Ausgangslage“?",
     "opt": [
      "Leitung per Zufall übernommen",
      "Wartezeit am Telefon: elf Minuten",
      "Kundenservice vor drei Jahren gegründet"
     ],
     "loesung": 1,
     "stelle": "lag die durchschnittliche Wartezeit am Telefon bei elf Minuten",
     "erklaerung": "Der Zufall ist eine Nebenbemerkung. Die Ausgangslage ist die Wartezeit."
    },
    {
     "art": "hoerwahl",
     "ort": "Folie: Ziel des Projekts",
     "wer": "Frau",
     "text": "Wir wollten nicht einfach mehr Leute einstellen, das hätte das Budget gar nicht hergegeben. Das Ziel war, dass mindestens acht von zehn Anfragen schon beim ersten Kontakt gelöst werden.",
     "frage": "Welche Notiz gehört zu „Ziel des Projekts“?",
     "opt": [
      "mehr Personal einstellen",
      "Budget erhöhen",
      "achtzig Prozent der Anfragen beim ersten Kontakt lösen"
     ],
     "loesung": 2,
     "stelle": "mindestens acht von zehn Anfragen schon beim ersten Kontakt gelöst werden",
     "erklaerung": "Mehr Personal wird ausdrücklich ausgeschlossen. „Das Ziel war“ markiert die Kerninformation."
    },
    {
     "art": "hoerwahl",
     "ort": "Folie: Erste Maßnahme",
     "wer": "Mann",
     "text": "Die erste Maßnahme klingt banal. Wir haben die zwanzig häufigsten Fragen gesammelt und für jede eine feste Antwort geschrieben, die alle im Team benutzen. Die Idee kam übrigens von einer Auszubildenden.",
     "frage": "Was notieren Sie zu „Erste Maßnahme“?",
     "opt": [
      "einheitliche Antworten auf die häufigsten Fragen",
      "Idee einer Auszubildenden",
      "zwanzig neue Mitarbeiter"
     ],
     "loesung": 0,
     "stelle": "für jede eine feste Antwort geschrieben",
     "erklaerung": "Woher die Idee kam, ist eine Zusatzinformation. Gefragt ist die Maßnahme selbst."
    },
    {
     "art": "hoerwahl",
     "ort": "Folie: Kosten",
     "wer": "Frau",
     "text": "Was hat das Ganze gekostet? Die Software lag bei etwa vierzigtausend Euro. Deutlich teurer waren aber die Schulungen, mit rund neunzigtausend Euro, weil wir jeden Mitarbeiter zwei Tage freigestellt haben.",
     "frage": "Was ist auf der Folie „Kosten“ die wichtigste Information?",
     "opt": [
      "Software war der teuerste Posten",
      "vor allem Schulungen, rund neunzigtausend Euro",
      "zwei Tage Urlaub für alle"
     ],
     "loesung": 1,
     "stelle": "Deutlich teurer waren aber die Schulungen",
     "erklaerung": "„Deutlich teurer … aber“ stellt die Gewichtung klar: Die Schulungen kosteten am meisten."
    },
    {
     "art": "hoerwahl",
     "ort": "Folie: Probleme bei der Einführung",
     "wer": "Mann",
     "text": "Natürlich lief nicht alles glatt. Das größte Problem war gar nicht die Technik, die hat nach zwei Wochen funktioniert. Schwieriger war, dass viele erfahrene Kollegen ihre eigenen Formulierungen nicht aufgeben wollten.",
     "frage": "Was notieren Sie zu „Probleme bei der Einführung“?",
     "opt": [
      "technische Störungen",
      "zu wenig Zeit",
      "Widerstand erfahrener Mitarbeiter"
     ],
     "loesung": 2,
     "stelle": "dass viele erfahrene Kollegen ihre eigenen Formulierungen nicht aufgeben wollten",
     "erklaerung": "„gar nicht die Technik“ schließt die naheliegende Antwort aus."
    },
    {
     "art": "hoerwahl",
     "ort": "Folie: Ergebnis",
     "wer": "Frau",
     "text": "Und das Ergebnis nach einem Jahr? Die Wartezeit ist auf unter drei Minuten gesunken. Die Zufriedenheit der Kunden ist ebenfalls gestiegen, wenn auch nicht so stark, wie wir gehofft hatten.",
     "frage": "Was notieren Sie zu „Ergebnis“?",
     "opt": [
      "Wartezeit unter drei Minuten",
      "Kundenzufriedenheit stark gestiegen",
      "Ziel nach drei Jahren erreicht"
     ],
     "loesung": 0,
     "stelle": "Die Wartezeit ist auf unter drei Minuten gesunken",
     "erklaerung": "Die Zufriedenheit stieg „nicht so stark wie gehofft“. Die klare Kennzahl ist die Wartezeit."
    },
    {
     "art": "hoerwahl",
     "ort": "Folie: Rolle der Führung",
     "wer": "Mann",
     "text": "Was ich unterschätzt habe, ist meine eigene Rolle. Ich habe am Anfang Vorgaben gemacht und mich dann zurückgezogen. Erst als ich selbst wieder Telefondienst gemacht habe, einen Vormittag pro Woche, haben die Leute mitgezogen.",
     "frage": "Welche Notiz passt zu „Rolle der Führung“?",
     "opt": [
      "Vorgaben machen, dann zurückziehen",
      "selbst mitarbeiten, einen Vormittag pro Woche",
      "Telefondienst abschaffen"
     ],
     "loesung": 1,
     "stelle": "Erst als ich selbst wieder Telefondienst gemacht habe",
     "erklaerung": "„Erst als“ zeigt, was gewirkt hat. Das Zurückziehen war der Fehler."
    },
    {
     "art": "hoerwahl",
     "ort": "Folie: Übertragbarkeit",
     "wer": "Frau",
     "text": "Kann man das auf andere Abteilungen übertragen? Auf den Einkauf eher nicht, da sind die Anfragen zu unterschiedlich. In der Buchhaltung dagegen testen wir das Modell seit September.",
     "frage": "Was notieren Sie zu „Übertragbarkeit“?",
     "opt": [
      "Einkauf: Modell eingeführt",
      "Test in der Buchhaltung seit September",
      "überall übertragbar"
     ],
     "loesung": 1,
     "stelle": "In der Buchhaltung dagegen testen wir das Modell seit September",
     "erklaerung": "„dagegen“ markiert den Gegensatz: Einkauf nein, Buchhaltung ja."
    },
    {
     "art": "hoerwahl",
     "ort": "Folie: Wichtigste Erkenntnis",
     "wer": "Mann",
     "text": "Wenn Sie aus diesem Vortrag nur eine Sache mitnehmen, dann bitte nicht die Software. Software kann man kaufen. Was man nicht kaufen kann, ist ein Team, das die neuen Abläufe selbst mitentwickelt hat.",
     "frage": "Was gehört auf die Folie „Wichtigste Erkenntnis“?",
     "opt": [
      "Abläufe vom Team mitentwickeln lassen",
      "die richtige Software wählen",
      "Schulungen einkaufen"
     ],
     "loesung": 0,
     "stelle": "ein Team, das die neuen Abläufe selbst mitentwickelt hat",
     "erklaerung": "„nur eine Sache mitnehmen“ kündigt die Kernaussage an, die Software wird ausdrücklich ausgeschlossen."
    },
    {
     "art": "hoerwahl",
     "ort": "Folie: Nächste Schritte",
     "wer": "Frau",
     "text": "Für das kommende Jahr haben wir uns zwei Dinge vorgenommen. Der Chat auf der Webseite, den wir bisher nebenher betreuen, bekommt eine eigene Mitarbeiterin. Und die Antworten werden zweimal im Jahr überarbeitet, nicht mehr nur bei Bedarf.",
     "frage": "Welche Notiz passt zu „Nächste Schritte“?",
     "opt": [
      "Chat abschaffen",
      "Antworten nur bei Bedarf ändern",
      "eigene Stelle für den Chat, Antworten halbjährlich überarbeiten"
     ],
     "loesung": 2,
     "stelle": "bekommt eine eigene Mitarbeiterin",
     "erklaerung": "„nur bei Bedarf“ war die alte Praxis. Neu sind die Stelle und die feste Überarbeitung."
    }
   ]
  },
  {
   "id": "tc1bh4",
   "stufe": 2,
   "titel": "Signalwörter auf C1",
   "kurz": "Zumal, wohingegen, insofern, nichtsdestotrotz: Signalwörter zeigen Grund, Gegensatz, Einschränkung, Beispiel oder Schluss.",
   "ziel": "Nach diesem Block erkennst du an Signalwörtern, welche Funktion ein Satz in einem Vortrag oder Gespräch hat und an welcher Stelle der Gliederung der Sprecher ist.",
   "zeichen": "🧭",
   "farbe": "rot",
   "mal": 1,
   "aufgaben": [
    {
     "art": "hoerwahl",
     "ort": "Signalwort: nichtsdestotrotz",
     "wer": "Mann",
     "text": "Die Umstellung auf das neue Lager hat drei Monate länger gedauert als geplant. Nichtsdestotrotz würde ich es wieder genauso machen, denn die Fehlerquote beim Versand hat sich halbiert.",
     "frage": "Was drückt der Sprecher mit „nichtsdestotrotz“ aus?",
     "opt": [
      "Er bewertet das Projekt trotz der Verzögerung positiv.",
      "Er begründet die Verzögerung.",
      "Er kündigt ein neues Projekt an."
     ],
     "loesung": 0,
     "stelle": "Nichtsdestotrotz würde ich es wieder genauso machen",
     "erklaerung": "„nichtsdestotrotz“ bedeutet „trotzdem“: Der Nachteil ändert nichts an der positiven Bilanz."
    },
    {
     "art": "hoerwahl",
     "ort": "Signalwort: zumal",
     "wer": "Frau",
     "text": "Wir haben uns gegen den Standort in Leipzig entschieden, zumal die Mieten dort in den letzten zwei Jahren stark gestiegen sind.",
     "frage": "Was leitet „zumal“ hier ein?",
     "opt": [
      "einen Gegensatz zur Entscheidung",
      "einen zusätzlichen, verstärkenden Grund",
      "eine Bedingung für die Zukunft"
     ],
     "loesung": 1,
     "stelle": "zumal die Mieten dort",
     "erklaerung": "„zumal“ heißt „besonders weil“ und stützt eine Entscheidung mit einem weiteren Grund."
    },
    {
     "art": "hoerwahl",
     "ort": "Signalwort: insofern … als",
     "wer": "Mann",
     "text": "Insofern war die Kundenbefragung ein Erfolg, als wir zum ersten Mal genaue Zahlen über Reklamationen haben. Die Beteiligung dagegen war enttäuschend.",
     "frage": "Wie bewertet der Sprecher die Befragung?",
     "opt": [
      "rundum gelungen",
      "völlig gescheitert",
      "nur in einer bestimmten Hinsicht erfolgreich"
     ],
     "loesung": 2,
     "stelle": "Insofern war die Kundenbefragung ein Erfolg, als",
     "erklaerung": "„insofern … als“ schränkt den Erfolg auf einen Punkt ein, „dagegen“ nennt die Schwäche."
    },
    {
     "art": "hoerwahl",
     "ort": "Signalwort: wohingegen",
     "wer": "Frau",
     "text": "Die Filialen im Süden haben ihren Umsatz um sechs Prozent gesteigert, wohingegen die im Norden leicht verloren haben.",
     "frage": "Was zeigt „wohingegen“?",
     "opt": [
      "eine Folge",
      "einen Gegensatz zwischen zwei Regionen",
      "ein Beispiel für den Süden"
     ],
     "loesung": 1,
     "stelle": "wohingegen die im Norden leicht verloren haben",
     "erklaerung": "„wohingegen“ stellt zwei Sachverhalte gegenüber."
    },
    {
     "art": "hoerwahl",
     "ort": "Signalwort: Damit komme ich zu …",
     "wer": "Mann",
     "text": "Damit komme ich zum letzten Punkt meines Vortrags, bevor wir gleich in die Diskussion gehen.",
     "frage": "An welcher Stelle des Vortrags ist der Sprecher?",
     "opt": [
      "kurz vor dem Ende",
      "am Anfang",
      "in der Mitte, bei einem Beispiel"
     ],
     "loesung": 0,
     "stelle": "Damit komme ich zum letzten Punkt",
     "erklaerung": "„zum letzten Punkt“ und „bevor wir in die Diskussion gehen“ zeigen das nahe Ende."
    },
    {
     "art": "hoerwahl",
     "ort": "Signalwort: Ein Wort zur Einordnung",
     "wer": "Frau",
     "text": "Ein Wort noch zur Einordnung, bevor ich weitermache: Die Zahlen, die ich Ihnen gerade gezeigt habe, stammen nur aus unseren drei größten Werken.",
     "frage": "Welche Funktion hat diese Bemerkung?",
     "opt": [
      "Sie leitet das Fazit ein.",
      "Sie stellt ein neues Thema vor.",
      "Sie schränkt die Aussagekraft der Zahlen ein."
     ],
     "loesung": 2,
     "stelle": "stammen nur aus unseren drei größten Werken",
     "erklaerung": "„zur Einordnung“ und „nur“ relativieren die vorher gezeigten Zahlen."
    },
    {
     "art": "hoerwahl",
     "ort": "Signalwort: Daraus folgt nicht",
     "wer": "Mann",
     "text": "Die Personalkosten sind gestiegen, das ist richtig. Daraus folgt aber nicht zwangsläufig, dass wir Stellen abbauen müssen.",
     "frage": "Was will der Sprecher sagen?",
     "opt": [
      "Ein Stellenabbau ist unvermeidlich.",
      "Ein Stellenabbau ist keine zwingende Folge.",
      "Die Personalkosten sind gesunken."
     ],
     "loesung": 1,
     "stelle": "Daraus folgt aber nicht zwangsläufig",
     "erklaerung": "„Daraus folgt nicht zwangsläufig“ weist eine voreilige Schlussfolgerung zurück."
    },
    {
     "art": "hoerwahl",
     "ort": "Signalwort: abgesehen von",
     "wer": "Frau",
     "text": "Abgesehen von den Lieferschwierigkeiten im Frühjahr verlief das Geschäftsjahr ausgesprochen ruhig.",
     "frage": "Wie war das Geschäftsjahr?",
     "opt": [
      "ruhig, mit einer Ausnahme im Frühjahr",
      "durchgehend schwierig",
      "im Frühjahr besonders ruhig"
     ],
     "loesung": 0,
     "stelle": "Abgesehen von den Lieferschwierigkeiten im Frühjahr",
     "erklaerung": "„Abgesehen von“ nennt eine Ausnahme von der allgemeinen Aussage."
    },
    {
     "art": "hoerwahl",
     "ort": "Signalwort: mit anderen Worten",
     "wer": "Mann",
     "text": "Die Schichtwünsche müssen bis zum zwanzigsten eines Monats eingereicht sein. Mit anderen Worten: Wer seine Wünsche nicht bis dahin abgibt, bekommt die Schichten von der Personalabteilung zugeteilt.",
     "frage": "Was leitet „mit anderen Worten“ ein?",
     "opt": [
      "eine neue Regel ohne Bezug zum Vorherigen",
      "eine Ausnahme von der Regel",
      "eine Umformulierung des zuvor Gesagten"
     ],
     "loesung": 2,
     "stelle": "Mit anderen Worten",
     "erklaerung": "„mit anderen Worten“ formuliert dieselbe Regel noch einmal deutlicher."
    },
    {
     "art": "hoerwahl",
     "ort": "Signalwort: veranschaulichen",
     "wer": "Frau",
     "text": "Das klingt jetzt sehr theoretisch. Ich möchte das deshalb an einem Fall aus unserem Werk in Rosenheim veranschaulichen.",
     "frage": "Was kommt als Nächstes?",
     "opt": [
      "ein konkretes Beispiel",
      "eine Zusammenfassung",
      "eine Gegenposition"
     ],
     "loesung": 0,
     "stelle": "an einem Fall aus unserem Werk in Rosenheim veranschaulichen",
     "erklaerung": "„an einem Fall veranschaulichen“ kündigt ein Beispiel an."
    }
   ]
  }
 ],
 "teile": [
  {
   "nr": 1,
   "art": "diskussion",
   "name": "Hören: Acht Personen",
   "kurz": "Acht kurze Interviews, zehn Aussagen, nur EINMAL hören",
   "was": "Acht Personen äußern sich zu einem Berufsthema, zum Beispiel Fortbildung. Zu jeder Person wählst du die passende Aussage. Zwei bleiben übrig.",
   "tipp": "Es geht um die Haltung, nicht um einzelne Wörter. Eine kleine Einschränkung macht oft den Unterschied.",
   "zeichen": "🗣️",
   "farbe": "turq",
   "punkte": 8,
   "mal": 1,
   "runden": [
    {
     "id": "c1bh1s1",
     "titel": "Umfrage für einen Wirtschaftspodcast: Wie halten Sie es mit beruflicher Fortbildung?",
     "aufgaben": [
      {
       "von": "Person 1 — Sachbearbeiterin im Einkauf, Anfang dreißig",
       "wer": "Frau",
       "text": "Bei uns heißt es immer, Weiterbildung sei ausdrücklich erwünscht. Und das stimmt auch, jedenfalls wenn es um das Geld geht. Ich mache gerade einen Lehrgang zur Fachkauffrau für Einkauf, und die Kursgebühren von gut dreitausend Euro hat die Firma komplett übernommen. Nur finden die Kurse freitags ab vierzehn Uhr und samstags statt, und dafür muss ich Überstunden abbauen oder Urlaub nehmen. Freistellung gibt es keine, das steht so in der Vereinbarung. Meine Teamleiterin findet das selbst nicht gut, aber sie kann daran nichts ändern. Ich ziehe das jetzt durch, aber nach anderthalb Jahren ohne richtigen Urlaub bin ich ehrlich gesagt ziemlich am Ende.",
       "loesung": 1,
       "stelle": "Freistellung gibt es keine",
       "erklaerung": "Die Kosten trägt die Firma, die Zeit muss sie selbst aufbringen: Überstunden und Urlaub statt Freistellung.",
       "frage": "Welche Aussage passt zu dieser Person?",
       "opt": [
        "Ich lerne am meisten, wenn ich das Gelernte sofort im Arbeitsalltag anwenden kann.",
        "Mein Arbeitgeber zahlt zwar die Kurse, gibt mir dafür aber keine Arbeitszeit frei.",
        "Ich habe eine Weiterbildung auf eigene Kosten gemacht und damit den Arbeitgeber gewechselt.",
        "Über Fortbildungen entscheide ich als Vorgesetzter inzwischen gemeinsam mit dem Team.",
        "Kurze Lernvideos am Bildschirm können ein Seminar mit Trainer für mich nicht ersetzen.",
        "Ich zögere, weil mich die Fortbildung zu lange an die Firma binden würde.",
        "Fortbildungen sind für mich vor allem eine Gelegenheit, Fachleute aus anderen Firmen kennenzulernen.",
        "Ich habe den Eindruck, dass sich eine Weiterbildung in meinem Alter aus Sicht der Firma nicht mehr lohnt.",
        "Fortbildungen sollten nach ihrem Nutzen für die Arbeit beurteilt werden, nicht nach Teilnahmebescheinigungen.",
        "Meine Pflichtschulungen erledige ich vor allem, weil sie vorgeschrieben sind."
       ],
       "fest": true
      },
      {
       "von": "Person 2 — Lagerleiter, Mitte fünfzig",
       "wer": "Mann",
       "text": "Ich bin jetzt sechsundfünfzig und seit dreißig Jahren in der Logistik. Als unser Lager auf das neue Scannersystem umgestellt wurde, haben die jungen Kollegen eine dreitägige Schulung beim Hersteller bekommen. Ich durfte mir das Ganze dann von einem Kollegen am Rechner zeigen lassen, in einer Mittagspause. Offiziell hat das natürlich niemand mit meinem Alter begründet, es hieß, die Plätze seien begrenzt. Aber wenn man so etwas zum dritten Mal erlebt, macht man sich seine Gedanken. Ich habe schon den Eindruck, dass man bei uns ab fünfzig nicht mehr als jemand gilt, in den sich eine Investition lohnt. Dabei habe ich noch gut zehn Jahre vor mir.",
       "loesung": 7,
       "stelle": "ab fünfzig nicht mehr als jemand gilt, in den sich eine Investition lohnt",
       "erklaerung": "Offiziell waren die Plätze begrenzt. Sein Eindruck ist aber, dass Ältere bei Schulungen übergangen werden.",
       "frage": "Welche Aussage passt zu dieser Person?",
       "opt": [
        "Ich lerne am meisten, wenn ich das Gelernte sofort im Arbeitsalltag anwenden kann.",
        "Mein Arbeitgeber zahlt zwar die Kurse, gibt mir dafür aber keine Arbeitszeit frei.",
        "Ich habe eine Weiterbildung auf eigene Kosten gemacht und damit den Arbeitgeber gewechselt.",
        "Über Fortbildungen entscheide ich als Vorgesetzter inzwischen gemeinsam mit dem Team.",
        "Kurze Lernvideos am Bildschirm können ein Seminar mit Trainer für mich nicht ersetzen.",
        "Ich zögere, weil mich die Fortbildung zu lange an die Firma binden würde.",
        "Fortbildungen sind für mich vor allem eine Gelegenheit, Fachleute aus anderen Firmen kennenzulernen.",
        "Ich habe den Eindruck, dass sich eine Weiterbildung in meinem Alter aus Sicht der Firma nicht mehr lohnt.",
        "Fortbildungen sollten nach ihrem Nutzen für die Arbeit beurteilt werden, nicht nach Teilnahmebescheinigungen.",
        "Meine Pflichtschulungen erledige ich vor allem, weil sie vorgeschrieben sind."
       ],
       "fest": true
      },
      {
       "von": "Person 3 — Leiterin der Buchhaltung, Ende dreißig",
       "wer": "Frau",
       "text": "Ich wollte unbedingt den Abschluss als Bilanzbuchhalterin machen. Mein damaliger Chef hat abgewunken, das brauche man in der Abteilung nicht. Also habe ich es eben selbst bezahlt, knapp viertausend Euro, und zwei Jahre lang abends und am Wochenende gelernt. Ein Teil kam über die staatliche Aufstiegsförderung zurück, das muss man fairerweise sagen. Mit dem Zeugnis in der Tasche habe ich mich dann woanders beworben und bin heute Leiterin der Buchhaltung bei einem Maschinenbauer in der Nähe von Heilbronn. Mein alter Chef war ziemlich überrascht, als ich gekündigt habe. Aber er hatte ja seine Chance, und er hat sie nicht genutzt.",
       "loesung": 2,
       "stelle": "Also habe ich es eben selbst bezahlt",
       "erklaerung": "Der Chef lehnte ab, sie zahlte selbst und wechselte mit dem neuen Abschluss die Firma.",
       "frage": "Welche Aussage passt zu dieser Person?",
       "opt": [
        "Ich lerne am meisten, wenn ich das Gelernte sofort im Arbeitsalltag anwenden kann.",
        "Mein Arbeitgeber zahlt zwar die Kurse, gibt mir dafür aber keine Arbeitszeit frei.",
        "Ich habe eine Weiterbildung auf eigene Kosten gemacht und damit den Arbeitgeber gewechselt.",
        "Über Fortbildungen entscheide ich als Vorgesetzter inzwischen gemeinsam mit dem Team.",
        "Kurze Lernvideos am Bildschirm können ein Seminar mit Trainer für mich nicht ersetzen.",
        "Ich zögere, weil mich die Fortbildung zu lange an die Firma binden würde.",
        "Fortbildungen sind für mich vor allem eine Gelegenheit, Fachleute aus anderen Firmen kennenzulernen.",
        "Ich habe den Eindruck, dass sich eine Weiterbildung in meinem Alter aus Sicht der Firma nicht mehr lohnt.",
        "Fortbildungen sollten nach ihrem Nutzen für die Arbeit beurteilt werden, nicht nach Teilnahmebescheinigungen.",
        "Meine Pflichtschulungen erledige ich vor allem, weil sie vorgeschrieben sind."
       ],
       "fest": true
      },
      {
       "von": "Person 4 — Elektroniker in der Instandhaltung, Ende zwanzig",
       "wer": "Mann",
       "text": "Ich war letztes Jahr auf einem Seminar zur Steuerungstechnik, drei Tage in einem Hotel bei Kassel. Die Unterlagen waren gut, der Referent auch. Aber zurück im Betrieb gab es bei uns diese Steuerung gar nicht, und nach zwei Monaten hatte ich das meiste wieder vergessen. Ganz anders lief es, als wir die neue Abfüllanlage bekommen haben. Da stand der Techniker vom Hersteller eine Woche lang mit uns an der Maschine, und wir haben jeden Fehler direkt selbst behoben. Das sitzt bis heute. Für mich ist das der Unterschied: Wenn ich am nächsten Morgen ausprobieren kann, was ich gelernt habe, dann bleibt es hängen.",
       "loesung": 0,
       "stelle": "dann bleibt es hängen",
       "erklaerung": "Das Seminar war gut, nützte aber nichts, weil er es nicht anwenden konnte. Das Lernen an der eigenen Anlage blieb.",
       "frage": "Welche Aussage passt zu dieser Person?",
       "opt": [
        "Ich lerne am meisten, wenn ich das Gelernte sofort im Arbeitsalltag anwenden kann.",
        "Mein Arbeitgeber zahlt zwar die Kurse, gibt mir dafür aber keine Arbeitszeit frei.",
        "Ich habe eine Weiterbildung auf eigene Kosten gemacht und damit den Arbeitgeber gewechselt.",
        "Über Fortbildungen entscheide ich als Vorgesetzter inzwischen gemeinsam mit dem Team.",
        "Kurze Lernvideos am Bildschirm können ein Seminar mit Trainer für mich nicht ersetzen.",
        "Ich zögere, weil mich die Fortbildung zu lange an die Firma binden würde.",
        "Fortbildungen sind für mich vor allem eine Gelegenheit, Fachleute aus anderen Firmen kennenzulernen.",
        "Ich habe den Eindruck, dass sich eine Weiterbildung in meinem Alter aus Sicht der Firma nicht mehr lohnt.",
        "Fortbildungen sollten nach ihrem Nutzen für die Arbeit beurteilt werden, nicht nach Teilnahmebescheinigungen.",
        "Meine Pflichtschulungen erledige ich vor allem, weil sie vorgeschrieben sind."
       ],
       "fest": true
      },
      {
       "von": "Person 5 — Abteilungsleiter im Vertrieb, Mitte vierzig",
       "wer": "Mann",
       "text": "Früher lief das bei mir so: Einmal im Jahr kam der Katalog der Akademie, ich habe für jeden im Team einen Kurs angekreuzt, und das war es. Die Hälfte der Leute saß dann in Seminaren, die sie gar nicht interessiert haben. Seit zwei Jahren machen wir es anders. Im Januar setzen wir uns einen halben Tag zusammen, jeder sagt, wo er hakt, und dann überlegen wir gemeinsam, was wir mit dem Budget anfangen. Manchmal ist das ein Kurs, manchmal bringt einfach ein Kollege den anderen etwas bei. Das Budget hat sich nicht verändert, aber die Leute gehen viel motivierter in ihre Fortbildungen.",
       "loesung": 3,
       "stelle": "überlegen wir gemeinsam, was wir mit dem Budget anfangen",
       "erklaerung": "Früher entschied er allein per Katalog. Heute wird im Team über das Budget beraten.",
       "frage": "Welche Aussage passt zu dieser Person?",
       "opt": [
        "Ich lerne am meisten, wenn ich das Gelernte sofort im Arbeitsalltag anwenden kann.",
        "Mein Arbeitgeber zahlt zwar die Kurse, gibt mir dafür aber keine Arbeitszeit frei.",
        "Ich habe eine Weiterbildung auf eigene Kosten gemacht und damit den Arbeitgeber gewechselt.",
        "Über Fortbildungen entscheide ich als Vorgesetzter inzwischen gemeinsam mit dem Team.",
        "Kurze Lernvideos am Bildschirm können ein Seminar mit Trainer für mich nicht ersetzen.",
        "Ich zögere, weil mich die Fortbildung zu lange an die Firma binden würde.",
        "Fortbildungen sind für mich vor allem eine Gelegenheit, Fachleute aus anderen Firmen kennenzulernen.",
        "Ich habe den Eindruck, dass sich eine Weiterbildung in meinem Alter aus Sicht der Firma nicht mehr lohnt.",
        "Fortbildungen sollten nach ihrem Nutzen für die Arbeit beurteilt werden, nicht nach Teilnahmebescheinigungen.",
        "Meine Pflichtschulungen erledige ich vor allem, weil sie vorgeschrieben sind."
       ],
       "fest": true
      },
      {
       "von": "Person 6 — Pflegefachkraft, Anfang fünfzig",
       "wer": "Frau",
       "text": "Bei uns im Krankenhaus gibt es jedes Jahr einen ganzen Stapel Pflichtschulungen: Hygiene, Brandschutz, Datenschutz, Wiederbelebung. Ehrlich gesagt klicke ich mich am Computer durch die meisten nur deshalb durch, weil am Ende das Zertifikat in der Personalakte landen muss. Beim Brandschutz erzählen sie mir seit zwanzig Jahren dasselbe. Die Wiederbelebung nehme ich davon aus, die übe ich gern an der Puppe, das kann man nicht oft genug machen. Freiwillig würde ich mich eher für Palliativpflege anmelden, das interessiert mich wirklich. Aber dafür bleibt neben dem Pflichtprogramm und den Diensten einfach keine Zeit mehr. Ich habe das schon zweimal bei der Stationsleitung angesprochen, bisher ohne Erfolg.",
       "loesung": 9,
       "stelle": "weil am Ende das Zertifikat in der Personalakte landen muss",
       "erklaerung": "Bis auf eine Ausnahme absolviert sie die Pflichtschulungen nur, weil sie vorgeschrieben sind.",
       "frage": "Welche Aussage passt zu dieser Person?",
       "opt": [
        "Ich lerne am meisten, wenn ich das Gelernte sofort im Arbeitsalltag anwenden kann.",
        "Mein Arbeitgeber zahlt zwar die Kurse, gibt mir dafür aber keine Arbeitszeit frei.",
        "Ich habe eine Weiterbildung auf eigene Kosten gemacht und damit den Arbeitgeber gewechselt.",
        "Über Fortbildungen entscheide ich als Vorgesetzter inzwischen gemeinsam mit dem Team.",
        "Kurze Lernvideos am Bildschirm können ein Seminar mit Trainer für mich nicht ersetzen.",
        "Ich zögere, weil mich die Fortbildung zu lange an die Firma binden würde.",
        "Fortbildungen sind für mich vor allem eine Gelegenheit, Fachleute aus anderen Firmen kennenzulernen.",
        "Ich habe den Eindruck, dass sich eine Weiterbildung in meinem Alter aus Sicht der Firma nicht mehr lohnt.",
        "Fortbildungen sollten nach ihrem Nutzen für die Arbeit beurteilt werden, nicht nach Teilnahmebescheinigungen.",
        "Meine Pflichtschulungen erledige ich vor allem, weil sie vorgeschrieben sind."
       ],
       "fest": true
      },
      {
       "von": "Person 7 — Softwareentwickler, Anfang dreißig",
       "wer": "Mann",
       "text": "Mir wurde eine Zertifizierung als Cloud-Architekt angeboten, Kosten etwa sechstausend Euro. Klingt erst mal großzügig. Dann kam der Vertrag, und da steht drin: Wenn ich innerhalb von drei Jahren kündige, muss ich die Kosten anteilig zurückzahlen. Ich verstehe ja, dass die Firma nicht für die Konkurrenz ausbilden will. Aber drei Jahre sind in unserer Branche eine Ewigkeit. Ich habe ehrlich gesagt Bedenken, mich so lange festzulegen, nur wegen eines Zertifikats. Im Moment überlege ich, ob ich die Prüfung nicht lieber selbst bezahle und dafür frei bleibe. Unterschrieben habe ich jedenfalls noch nichts. Meine Frau meint, ich soll das Angebot einfach annehmen, aber so einfach ist das für mich nicht.",
       "loesung": 5,
       "stelle": "mich so lange festzulegen",
       "erklaerung": "Die Rückzahlungsklausel lässt ihn zögern. Selbst bezahlt und gewechselt hat er noch nicht.",
       "frage": "Welche Aussage passt zu dieser Person?",
       "opt": [
        "Ich lerne am meisten, wenn ich das Gelernte sofort im Arbeitsalltag anwenden kann.",
        "Mein Arbeitgeber zahlt zwar die Kurse, gibt mir dafür aber keine Arbeitszeit frei.",
        "Ich habe eine Weiterbildung auf eigene Kosten gemacht und damit den Arbeitgeber gewechselt.",
        "Über Fortbildungen entscheide ich als Vorgesetzter inzwischen gemeinsam mit dem Team.",
        "Kurze Lernvideos am Bildschirm können ein Seminar mit Trainer für mich nicht ersetzen.",
        "Ich zögere, weil mich die Fortbildung zu lange an die Firma binden würde.",
        "Fortbildungen sind für mich vor allem eine Gelegenheit, Fachleute aus anderen Firmen kennenzulernen.",
        "Ich habe den Eindruck, dass sich eine Weiterbildung in meinem Alter aus Sicht der Firma nicht mehr lohnt.",
        "Fortbildungen sollten nach ihrem Nutzen für die Arbeit beurteilt werden, nicht nach Teilnahmebescheinigungen.",
        "Meine Pflichtschulungen erledige ich vor allem, weil sie vorgeschrieben sind."
       ],
       "fest": true
      },
      {
       "von": "Person 8 — Assistentin der Geschäftsführung, Mitte vierzig",
       "wer": "Frau",
       "text": "Ich gehe zweimal im Jahr auf ein Seminar für Büromanagement, meistens in Frankfurt oder München. Inhaltlich ist das oft nicht so viel Neues, Zeitplanung, Protokolle, das kenne ich alles. Aber ich sitze dort mit zwanzig Leuten aus ganz unterschiedlichen Unternehmen zusammen, die genau denselben Job machen wie ich. In der Kaffeepause erfahre ich mehr als im ganzen Seminar. Mit einigen schreibe ich mir seit Jahren, und wenn ich vor einem Problem stehe, rufe ich eine von ihnen an. In meiner Firma gibt es niemanden mit meiner Funktion, deshalb sind mir diese Kontakte so wichtig. Meinem Chef habe ich das am Anfang ehrlich gesagt nicht so deutlich erzählt.",
       "loesung": 6,
       "stelle": "In der Kaffeepause erfahre ich mehr als im ganzen Seminar",
       "erklaerung": "Der Inhalt ist für sie zweitrangig. Wichtig ist der Austausch mit Leuten aus anderen Firmen.",
       "frage": "Welche Aussage passt zu dieser Person?",
       "opt": [
        "Ich lerne am meisten, wenn ich das Gelernte sofort im Arbeitsalltag anwenden kann.",
        "Mein Arbeitgeber zahlt zwar die Kurse, gibt mir dafür aber keine Arbeitszeit frei.",
        "Ich habe eine Weiterbildung auf eigene Kosten gemacht und damit den Arbeitgeber gewechselt.",
        "Über Fortbildungen entscheide ich als Vorgesetzter inzwischen gemeinsam mit dem Team.",
        "Kurze Lernvideos am Bildschirm können ein Seminar mit Trainer für mich nicht ersetzen.",
        "Ich zögere, weil mich die Fortbildung zu lange an die Firma binden würde.",
        "Fortbildungen sind für mich vor allem eine Gelegenheit, Fachleute aus anderen Firmen kennenzulernen.",
        "Ich habe den Eindruck, dass sich eine Weiterbildung in meinem Alter aus Sicht der Firma nicht mehr lohnt.",
        "Fortbildungen sollten nach ihrem Nutzen für die Arbeit beurteilt werden, nicht nach Teilnahmebescheinigungen.",
        "Meine Pflichtschulungen erledige ich vor allem, weil sie vorgeschrieben sind."
       ],
       "fest": true
      }
     ]
    },
    {
     "id": "c1bh1s2",
     "titel": "Umfrage für das Radio: Wie flexibel ist Ihre Arbeitszeit?",
     "aufgaben": [
      {
       "von": "Person 1 — Projektleiterin in einem Ingenieurbüro, Ende dreißig",
       "wer": "Frau",
       "text": "Bei uns gab es jahrelang keine Zeiterfassung, man hat einfach gearbeitet, bis das Projekt fertig war. Seit Januar müssen wir jeden Tag Beginn, Ende und Pausen in eine App eintragen. Ich fand das am Anfang lästig, ehrlich gesagt sogar ein bisschen kleinlich. Nach dem ersten Monat hatte ich dann zweiundzwanzig Überstunden auf dem Zettel, die ich früher nie aufgeschrieben hätte. Das waren alles Kleinigkeiten, abends noch schnell eine Mail, sonntags kurz einen Plan prüfen. Das hat mich richtig erschreckt. Mir war gar nicht klar, wie viel ich da jahrelang verschenkt habe. Inzwischen spreche ich das in den Projektbesprechungen auch offen an.",
       "loesung": 0,
       "stelle": "wie viel ich da jahrelang verschenkt habe",
       "erklaerung": "Erst durch die neue Zeiterfassung sieht sie, wie viele Stunden sie früher unbezahlt gearbeitet hat.",
       "frage": "Welche Aussage passt zu dieser Person?",
       "opt": [
        "Seit die Arbeitszeit erfasst wird, sehe ich erst, wie viel ich unbezahlt gearbeitet habe.",
        "Vertrauensarbeitszeit hat bei uns dazu geführt, dass eher mehr gearbeitet wird.",
        "Ich habe meine Stunden reduziert und trotzdem fast dieselben Aufgaben behalten.",
        "Im Schichtdienst ist mir ein verlässlicher Plan wichtiger als jede Flexibilität.",
        "Als Mitglied des Betriebsrats achte ich vor allem darauf, dass Ruhezeiten eingehalten werden.",
        "Seit ich später anfange, arbeite ich deutlich konzentrierter.",
        "Feste Kernzeiten halte ich für überholt, weil sie die Zusammenarbeit nicht verbessern.",
        "Für meine Kunden muss ich zu Zeiten erreichbar sein, die ich mir nicht aussuche.",
        "Ein Arbeitszeitkonto erlaubt mir, eine längere Zeit am Stück freizunehmen.",
        "Als Chef eines kleinen Betriebs kann ich flexible Arbeitszeiten nur begrenzt anbieten."
       ],
       "fest": true
      },
      {
       "von": "Person 2 — Maschinenführer im Dreischichtbetrieb, Anfang vierzig",
       "wer": "Mann",
       "text": "In der Verwaltung reden alle über Gleitzeit und Homeoffice. Bei uns läuft die Anlage rund um die Uhr, da gibt es so etwas nicht, und das ist auch in Ordnung. Was mich wirklich ärgert, ist etwas anderes: dass der Schichtplan manchmal erst am Donnerstag für die nächste Woche kommt. Ich habe zwei Kinder, meine Frau arbeitet auch, wir müssen das alles planen. Mir ist es lieber, ich weiß drei Monate im Voraus, wann ich Nachtschicht habe, als dass man mir kurzfristig irgendwelche Wünsche erfüllt. Planbarkeit ist für mich das Wichtigste, alles andere kommt danach. Der Betriebsrat hat das zum Glück aufgegriffen, ab Januar soll der Plan immer vier Wochen vorher feststehen.",
       "loesung": 3,
       "stelle": "Planbarkeit ist für mich das Wichtigste",
       "erklaerung": "Flexibilität vermisst er nicht. Er will den Schichtplan lange im Voraus kennen.",
       "frage": "Welche Aussage passt zu dieser Person?",
       "opt": [
        "Seit die Arbeitszeit erfasst wird, sehe ich erst, wie viel ich unbezahlt gearbeitet habe.",
        "Vertrauensarbeitszeit hat bei uns dazu geführt, dass eher mehr gearbeitet wird.",
        "Ich habe meine Stunden reduziert und trotzdem fast dieselben Aufgaben behalten.",
        "Im Schichtdienst ist mir ein verlässlicher Plan wichtiger als jede Flexibilität.",
        "Als Mitglied des Betriebsrats achte ich vor allem darauf, dass Ruhezeiten eingehalten werden.",
        "Seit ich später anfange, arbeite ich deutlich konzentrierter.",
        "Feste Kernzeiten halte ich für überholt, weil sie die Zusammenarbeit nicht verbessern.",
        "Für meine Kunden muss ich zu Zeiten erreichbar sein, die ich mir nicht aussuche.",
        "Ein Arbeitszeitkonto erlaubt mir, eine längere Zeit am Stück freizunehmen.",
        "Als Chef eines kleinen Betriebs kann ich flexible Arbeitszeiten nur begrenzt anbieten."
       ],
       "fest": true
      },
      {
       "von": "Person 3 — Marketingreferentin in einer Agentur, Ende zwanzig",
       "wer": "Frau",
       "text": "Bei uns gibt es Vertrauensarbeitszeit. Klingt toll, niemand stempelt, niemand kontrolliert. In der Praxis sieht es so aus, dass keiner als Erster gehen will. Wenn mein Chef um halb acht abends noch Nachrichten schreibt, antworte ich halt auch. Und weil nichts aufgeschrieben wird, fällt auch niemandem auf, wie viel da zusammenkommt. Das ist kein böser Wille, das ergibt sich einfach so. Ich habe mal eine Woche lang heimlich mitgezählt und kam auf fast fünfzig Stunden, bezahlt werden achtunddreißig. Freiheit ist das für mich nicht, eher das Gegenteil. Ich habe das neulich im Team angesprochen, und alle haben genickt. Geändert hat sich trotzdem nichts.",
       "loesung": 1,
       "stelle": "In der Praxis sieht es so aus, dass keiner als Erster gehen will",
       "erklaerung": "Ohne Zeiterfassung arbeiten alle länger. Die Erfassung selbst gibt es bei ihr gerade nicht.",
       "frage": "Welche Aussage passt zu dieser Person?",
       "opt": [
        "Seit die Arbeitszeit erfasst wird, sehe ich erst, wie viel ich unbezahlt gearbeitet habe.",
        "Vertrauensarbeitszeit hat bei uns dazu geführt, dass eher mehr gearbeitet wird.",
        "Ich habe meine Stunden reduziert und trotzdem fast dieselben Aufgaben behalten.",
        "Im Schichtdienst ist mir ein verlässlicher Plan wichtiger als jede Flexibilität.",
        "Als Mitglied des Betriebsrats achte ich vor allem darauf, dass Ruhezeiten eingehalten werden.",
        "Seit ich später anfange, arbeite ich deutlich konzentrierter.",
        "Feste Kernzeiten halte ich für überholt, weil sie die Zusammenarbeit nicht verbessern.",
        "Für meine Kunden muss ich zu Zeiten erreichbar sein, die ich mir nicht aussuche.",
        "Ein Arbeitszeitkonto erlaubt mir, eine längere Zeit am Stück freizunehmen.",
        "Als Chef eines kleinen Betriebs kann ich flexible Arbeitszeiten nur begrenzt anbieten."
       ],
       "fest": true
      },
      {
       "von": "Person 4 — Bankkaufmann, Mitte dreißig",
       "wer": "Mann",
       "text": "Ich sammle seit zwei Jahren Stunden auf meinem Langzeitkonto. Das heißt, ich arbeite in normalen Wochen etwas mehr, und die Zeit wird mir gutgeschrieben. Im nächsten Sommer nehme ich davon zusammen mit meinem Jahresurlaub zehn Wochen am Stück frei. Wir wollen mit den Kindern eine Weile bei meinen Schwiegereltern in Portugal verbringen, solange die beiden noch nicht in der Schule sind. Mein Gehalt läuft in der Zeit ganz normal weiter. Ohne dieses Konto hätte ich unbezahlten Urlaub beantragen müssen, und das hätten wir uns nicht leisten können. Mein Chef war am Anfang skeptisch, weil ich so lange fehle, aber wir haben die Vertretung schon ein halbes Jahr vorher geplant.",
       "loesung": 8,
       "stelle": "zehn Wochen am Stück frei",
       "erklaerung": "Die angesparten Stunden ermöglichen ihm eine lange Auszeit bei vollem Gehalt.",
       "frage": "Welche Aussage passt zu dieser Person?",
       "opt": [
        "Seit die Arbeitszeit erfasst wird, sehe ich erst, wie viel ich unbezahlt gearbeitet habe.",
        "Vertrauensarbeitszeit hat bei uns dazu geführt, dass eher mehr gearbeitet wird.",
        "Ich habe meine Stunden reduziert und trotzdem fast dieselben Aufgaben behalten.",
        "Im Schichtdienst ist mir ein verlässlicher Plan wichtiger als jede Flexibilität.",
        "Als Mitglied des Betriebsrats achte ich vor allem darauf, dass Ruhezeiten eingehalten werden.",
        "Seit ich später anfange, arbeite ich deutlich konzentrierter.",
        "Feste Kernzeiten halte ich für überholt, weil sie die Zusammenarbeit nicht verbessern.",
        "Für meine Kunden muss ich zu Zeiten erreichbar sein, die ich mir nicht aussuche.",
        "Ein Arbeitszeitkonto erlaubt mir, eine längere Zeit am Stück freizunehmen.",
        "Als Chef eines kleinen Betriebs kann ich flexible Arbeitszeiten nur begrenzt anbieten."
       ],
       "fest": true
      },
      {
       "von": "Person 5 — Sachbearbeiterin bei einer Versicherung, Anfang vierzig",
       "wer": "Frau",
       "text": "Ich bin einfach kein Morgenmensch. Jahrelang habe ich um sieben angefangen, weil das alle so machen, und bis zehn habe ich eigentlich nur Mails sortiert. Als wir Gleitzeit bekommen haben, habe ich es mal anders probiert und fange jetzt um halb zehn an. Dafür bleibe ich abends bis sechs, das stört mich nicht. Der Unterschied ist enorm: Die schwierigen Schadensfälle bearbeite ich jetzt am Vormittag, wenn ich wirklich wach bin, und mache viel weniger Fehler. Meine Teamleiterin hat das auch gemerkt, sie hat mich neulich darauf angesprochen. Inzwischen machen das in unserem Team noch zwei andere Kolleginnen so, und es funktioniert ohne Probleme.",
       "loesung": 5,
       "stelle": "und mache viel weniger Fehler",
       "erklaerung": "Durch den späteren Arbeitsbeginn arbeitet sie wacher und genauer.",
       "frage": "Welche Aussage passt zu dieser Person?",
       "opt": [
        "Seit die Arbeitszeit erfasst wird, sehe ich erst, wie viel ich unbezahlt gearbeitet habe.",
        "Vertrauensarbeitszeit hat bei uns dazu geführt, dass eher mehr gearbeitet wird.",
        "Ich habe meine Stunden reduziert und trotzdem fast dieselben Aufgaben behalten.",
        "Im Schichtdienst ist mir ein verlässlicher Plan wichtiger als jede Flexibilität.",
        "Als Mitglied des Betriebsrats achte ich vor allem darauf, dass Ruhezeiten eingehalten werden.",
        "Seit ich später anfange, arbeite ich deutlich konzentrierter.",
        "Feste Kernzeiten halte ich für überholt, weil sie die Zusammenarbeit nicht verbessern.",
        "Für meine Kunden muss ich zu Zeiten erreichbar sein, die ich mir nicht aussuche.",
        "Ein Arbeitszeitkonto erlaubt mir, eine längere Zeit am Stück freizunehmen.",
        "Als Chef eines kleinen Betriebs kann ich flexible Arbeitszeiten nur begrenzt anbieten."
       ],
       "fest": true
      },
      {
       "von": "Person 6 — Ingenieur, Ende vierzig",
       "wer": "Mann",
       "text": "Ich bin vor einem Jahr auf dreißig Stunden gegangen, weil mein Vater pflegebedürftig geworden ist. Mein Arbeitgeber hat sofort zugestimmt, das war gar kein Problem. Das Problem kam danach. Meine Projekte sind nämlich geblieben, alle vier. Es wurde nur stillschweigend erwartet, dass ich sie eben in weniger Zeit schaffe. Niemand hat sich hingesetzt und gefragt, was wegfallen oder wer etwas übernehmen könnte. Und abends sitze ich dann eben doch wieder am Laptop. Ich verdiene jetzt ein Fünftel weniger und arbeite in Wahrheit kaum weniger als vorher. So hatte ich mir Teilzeit nicht vorgestellt. Im nächsten Gespräch mit meinem Abteilungsleiter will ich das klar ansprechen.",
       "loesung": 2,
       "stelle": "Meine Projekte sind nämlich geblieben, alle vier",
       "erklaerung": "Die Stunden wurden reduziert, die Aufgaben nicht.",
       "frage": "Welche Aussage passt zu dieser Person?",
       "opt": [
        "Seit die Arbeitszeit erfasst wird, sehe ich erst, wie viel ich unbezahlt gearbeitet habe.",
        "Vertrauensarbeitszeit hat bei uns dazu geführt, dass eher mehr gearbeitet wird.",
        "Ich habe meine Stunden reduziert und trotzdem fast dieselben Aufgaben behalten.",
        "Im Schichtdienst ist mir ein verlässlicher Plan wichtiger als jede Flexibilität.",
        "Als Mitglied des Betriebsrats achte ich vor allem darauf, dass Ruhezeiten eingehalten werden.",
        "Seit ich später anfange, arbeite ich deutlich konzentrierter.",
        "Feste Kernzeiten halte ich für überholt, weil sie die Zusammenarbeit nicht verbessern.",
        "Für meine Kunden muss ich zu Zeiten erreichbar sein, die ich mir nicht aussuche.",
        "Ein Arbeitszeitkonto erlaubt mir, eine längere Zeit am Stück freizunehmen.",
        "Als Chef eines kleinen Betriebs kann ich flexible Arbeitszeiten nur begrenzt anbieten."
       ],
       "fest": true
      },
      {
       "von": "Person 7 — Inhaber einer Bäckerei, Ende fünfzig",
       "wer": "Mann",
       "text": "Meine Leute fragen natürlich auch nach flexiblen Zeiten, vor allem die jungen. Und ich verstehe das. Aber Brötchen müssen um sechs Uhr früh im Laden liegen, und die Kundschaft kommt nicht dann, wenn es meinen Verkäuferinnen passt. Was ich machen kann, mache ich: Wer Kinder hat, muss bei uns nicht am Samstag arbeiten, und Schichten tauschen dürfen alle untereinander. Aber Gleitzeit wie in einem Büro, das geht in einem Handwerksbetrieb mit vierzehn Leuten einfach nicht. Wenn eine Kollegin fehlt, stehe ich selbst hinter der Theke. Da habe ich keinen Spielraum. Ich zahle dafür lieber etwas mehr als die Konkurrenz, damit mir die Leute nicht weglaufen.",
       "loesung": 9,
       "stelle": "Was ich machen kann, mache ich",
       "erklaerung": "Er bietet einzelne Erleichterungen an, echte Gleitzeit ist in seinem kleinen Betrieb aber nicht möglich.",
       "frage": "Welche Aussage passt zu dieser Person?",
       "opt": [
        "Seit die Arbeitszeit erfasst wird, sehe ich erst, wie viel ich unbezahlt gearbeitet habe.",
        "Vertrauensarbeitszeit hat bei uns dazu geführt, dass eher mehr gearbeitet wird.",
        "Ich habe meine Stunden reduziert und trotzdem fast dieselben Aufgaben behalten.",
        "Im Schichtdienst ist mir ein verlässlicher Plan wichtiger als jede Flexibilität.",
        "Als Mitglied des Betriebsrats achte ich vor allem darauf, dass Ruhezeiten eingehalten werden.",
        "Seit ich später anfange, arbeite ich deutlich konzentrierter.",
        "Feste Kernzeiten halte ich für überholt, weil sie die Zusammenarbeit nicht verbessern.",
        "Für meine Kunden muss ich zu Zeiten erreichbar sein, die ich mir nicht aussuche.",
        "Ein Arbeitszeitkonto erlaubt mir, eine längere Zeit am Stück freizunehmen.",
        "Als Chef eines kleinen Betriebs kann ich flexible Arbeitszeiten nur begrenzt anbieten."
       ],
       "fest": true
      },
      {
       "von": "Person 8 — Kundenbetreuerin bei einem Maschinenhersteller, Mitte dreißig",
       "wer": "Frau",
       "text": "Ich betreue unsere Kunden in Japan und Südkorea. Wenn dort der Arbeitstag beginnt, ist es bei uns mitten in der Nacht. Natürlich verlangt niemand, dass ich nachts arbeite, aber zweimal die Woche habe ich um sieben Uhr morgens eine Videokonferenz, weil das für die Kollegen in Seoul der Nachmittag ist. Wenn ein Kunde ein Problem mit einer Anlage hat, rufe ich auch mal abends um elf zurück. Diese Zeiten bestimmt nicht mein Kalender, sondern der Kunde. Dafür kann ich mittags zwei Stunden zum Sport gehen, das ist mein Ausgleich. Meinem Team in Deutschland sage ich ganz offen, dass ich in dieser Zeit nicht ans Telefon gehe, und das wird auch respektiert.",
       "loesung": 7,
       "stelle": "Diese Zeiten bestimmt nicht mein Kalender, sondern der Kunde",
       "erklaerung": "Wann sie arbeitet, richtet sich nach den Zeitzonen ihrer Kunden.",
       "frage": "Welche Aussage passt zu dieser Person?",
       "opt": [
        "Seit die Arbeitszeit erfasst wird, sehe ich erst, wie viel ich unbezahlt gearbeitet habe.",
        "Vertrauensarbeitszeit hat bei uns dazu geführt, dass eher mehr gearbeitet wird.",
        "Ich habe meine Stunden reduziert und trotzdem fast dieselben Aufgaben behalten.",
        "Im Schichtdienst ist mir ein verlässlicher Plan wichtiger als jede Flexibilität.",
        "Als Mitglied des Betriebsrats achte ich vor allem darauf, dass Ruhezeiten eingehalten werden.",
        "Seit ich später anfange, arbeite ich deutlich konzentrierter.",
        "Feste Kernzeiten halte ich für überholt, weil sie die Zusammenarbeit nicht verbessern.",
        "Für meine Kunden muss ich zu Zeiten erreichbar sein, die ich mir nicht aussuche.",
        "Ein Arbeitszeitkonto erlaubt mir, eine längere Zeit am Stück freizunehmen.",
        "Als Chef eines kleinen Betriebs kann ich flexible Arbeitszeiten nur begrenzt anbieten."
       ],
       "fest": true
      }
     ]
    },
    {
     "id": "c1bh1s3",
     "titel": "Umfrage auf einem Personalforum: Was macht für Sie gute Führung aus?",
     "aufgaben": [
      {
       "von": "Person 1 — Teamleiter im Kundenservice, Anfang dreißig",
       "wer": "Mann",
       "text": "Ich war fünf Jahre lang der Beste im Kundenservice, die meisten gelösten Fälle, die besten Bewertungen. Dann ging mein Teamleiter in Rente, und man hat mich gefragt. Ich habe natürlich ja gesagt. Und dann saß ich am ersten Tag vor zwölf Leuten, mit denen ich gestern noch Mittagspause gemacht hatte, und sollte Gespräche über Krankmeldungen führen. Kein Seminar, keine Übergabe, nichts. Es hieß einfach, das werde schon. Die ersten sechs Monate waren die härtesten meines Berufslebens. Heute weiß ich, dass ich vieles falsch gemacht habe, einfach weil mir niemand gesagt hat, wie es geht. Inzwischen kümmere ich mich darum, dass neue Teamleiter bei uns wenigstens einen Kurs bekommen.",
       "loesung": 0,
       "stelle": "Kein Seminar, keine Übergabe, nichts",
       "erklaerung": "Er wurde wegen seiner Leistung befördert, aber in keiner Weise auf die Führungsaufgabe vorbereitet.",
       "frage": "Welche Aussage passt zu dieser Person?",
       "opt": [
        "Ich wurde zur Führungskraft befördert, ohne auf diese Aufgabe vorbereitet zu werden.",
        "Eine gute Vorgesetzte stellt sich in Konflikten mit der Geschäftsführung vor ihr Team.",
        "Ich führe mein Team auf Distanz und habe gelernt, dass dafür feste Termine nötig sind.",
        "Ich habe die Führungsrolle bewusst wieder abgegeben und bereue das nicht.",
        "Mitarbeiter erwarten von mir klare Entscheidungen, auch wenn sie ihnen nicht gefallen.",
        "Ich teile mir eine Führungsposition mit einer Kollegin.",
        "Ich habe mehr von einem schlechten Vorgesetzten gelernt als von einem guten.",
        "Mitarbeiter sollten ihre Vorgesetzten regelmäßig bewerten dürfen.",
        "Wer ein Team leitet, muss fachlich nicht der Beste darin sein.",
        "Ich vermisse bei meiner Vorgesetzten vor allem, dass sie Fehler zugibt."
       ],
       "fest": true
      },
      {
       "von": "Person 2 — Produktionsleiterin, Mitte vierzig",
       "wer": "Frau",
       "text": "Ich habe lange geglaubt, ich müsse jede Entscheidung im Team ausdiskutieren, bis alle zufrieden sind. Das hat manchmal Wochen gedauert. Irgendwann hat mir ein Schichtleiter in einem Gespräch ganz offen gesagt: Frau Lindner, wir wollen gar nicht über alles mitreden, wir wollen wissen, woran wir sind. Das hat gesessen. Heute höre ich mir die Meinungen an, und dann entscheide ich. Auch wenn das heißt, dass einer sauer ist, weil sein Urlaub nicht genehmigt wird. Das halten die Leute aus. Was sie nicht aushalten, ist ein ewiges Hin und Her. Seitdem ist die Stimmung in der Halle übrigens deutlich besser geworden, und die Krankmeldungen sind auch zurückgegangen.",
       "loesung": 4,
       "stelle": "wir wollen wissen, woran wir sind",
       "erklaerung": "Ihr Team wünscht sich keine endlosen Diskussionen, sondern klare Entscheidungen.",
       "frage": "Welche Aussage passt zu dieser Person?",
       "opt": [
        "Ich wurde zur Führungskraft befördert, ohne auf diese Aufgabe vorbereitet zu werden.",
        "Eine gute Vorgesetzte stellt sich in Konflikten mit der Geschäftsführung vor ihr Team.",
        "Ich führe mein Team auf Distanz und habe gelernt, dass dafür feste Termine nötig sind.",
        "Ich habe die Führungsrolle bewusst wieder abgegeben und bereue das nicht.",
        "Mitarbeiter erwarten von mir klare Entscheidungen, auch wenn sie ihnen nicht gefallen.",
        "Ich teile mir eine Führungsposition mit einer Kollegin.",
        "Ich habe mehr von einem schlechten Vorgesetzten gelernt als von einem guten.",
        "Mitarbeiter sollten ihre Vorgesetzten regelmäßig bewerten dürfen.",
        "Wer ein Team leitet, muss fachlich nicht der Beste darin sein.",
        "Ich vermisse bei meiner Vorgesetzten vor allem, dass sie Fehler zugibt."
       ],
       "fest": true
      },
      {
       "von": "Person 3 — Netzwerkspezialist, Ende dreißig",
       "wer": "Mann",
       "text": "Ich war drei Jahre lang Gruppenleiter in der Netzwerktechnik. Das Gehalt war besser, das Büro auch. Aber ich habe gemerkt, dass ich meine Tage nur noch mit Budgetplanung, Urlaubslisten und Abstimmungsrunden verbringe. An einen Server bin ich kaum noch gekommen. Letztes Jahr habe ich dann mit meiner Chefin gesprochen und bin auf eine Expertenstelle gewechselt, ohne Personalverantwortung. Ein paar Kollegen haben das als Abstieg gesehen. Für mich war es die beste Entscheidung seit Langem. Ich gehe wieder gern zur Arbeit, und das ist mir mehr wert als der Titel. Meine Nachfolgerin macht das übrigens viel besser als ich, sie hat einfach mehr Freude an dieser Arbeit.",
       "loesung": 3,
       "stelle": "Für mich war es die beste Entscheidung seit Langem",
       "erklaerung": "Er hat die Führung freiwillig abgegeben und ist damit zufrieden.",
       "frage": "Welche Aussage passt zu dieser Person?",
       "opt": [
        "Ich wurde zur Führungskraft befördert, ohne auf diese Aufgabe vorbereitet zu werden.",
        "Eine gute Vorgesetzte stellt sich in Konflikten mit der Geschäftsführung vor ihr Team.",
        "Ich führe mein Team auf Distanz und habe gelernt, dass dafür feste Termine nötig sind.",
        "Ich habe die Führungsrolle bewusst wieder abgegeben und bereue das nicht.",
        "Mitarbeiter erwarten von mir klare Entscheidungen, auch wenn sie ihnen nicht gefallen.",
        "Ich teile mir eine Führungsposition mit einer Kollegin.",
        "Ich habe mehr von einem schlechten Vorgesetzten gelernt als von einem guten.",
        "Mitarbeiter sollten ihre Vorgesetzten regelmäßig bewerten dürfen.",
        "Wer ein Team leitet, muss fachlich nicht der Beste darin sein.",
        "Ich vermisse bei meiner Vorgesetzten vor allem, dass sie Fehler zugibt."
       ],
       "fest": true
      },
      {
       "von": "Person 4 — Leiterin eines Vertriebsteams, Anfang fünfzig",
       "wer": "Frau",
       "text": "Mein Team sitzt zwischen Kiel und Passau, wir sehen uns vielleicht viermal im Jahr persönlich. Am Anfang dachte ich, das läuft von allein, die Leute sind ja Profis. Nach ein paar Monaten wusste ich aber von manchen gar nicht mehr, wie es ihnen geht. Seitdem gibt es bei uns jeden Montag um neun eine Viertelstunde Videorunde, ohne Zahlen, nur: Was steht an, wo hakt es? Und mit jedem Einzelnen telefoniere ich alle zwei Wochen, auch wenn es nichts Besonderes gibt. Das klingt banal, aber ohne diese festen Termine würde mir das Team auseinanderfallen. Und einmal im Quartal treffen wir uns trotz der Kosten alle in Kassel, für zwei Tage.",
       "loesung": 2,
       "stelle": "ohne diese festen Termine würde mir das Team auseinanderfallen",
       "erklaerung": "Sie führt ein verteiltes Team und hält es durch regelmäßige, feste Termine zusammen.",
       "frage": "Welche Aussage passt zu dieser Person?",
       "opt": [
        "Ich wurde zur Führungskraft befördert, ohne auf diese Aufgabe vorbereitet zu werden.",
        "Eine gute Vorgesetzte stellt sich in Konflikten mit der Geschäftsführung vor ihr Team.",
        "Ich führe mein Team auf Distanz und habe gelernt, dass dafür feste Termine nötig sind.",
        "Ich habe die Führungsrolle bewusst wieder abgegeben und bereue das nicht.",
        "Mitarbeiter erwarten von mir klare Entscheidungen, auch wenn sie ihnen nicht gefallen.",
        "Ich teile mir eine Führungsposition mit einer Kollegin.",
        "Ich habe mehr von einem schlechten Vorgesetzten gelernt als von einem guten.",
        "Mitarbeiter sollten ihre Vorgesetzten regelmäßig bewerten dürfen.",
        "Wer ein Team leitet, muss fachlich nicht der Beste darin sein.",
        "Ich vermisse bei meiner Vorgesetzten vor allem, dass sie Fehler zugibt."
       ],
       "fest": true
      },
      {
       "von": "Person 5 — Bauleiter, Mitte fünfzig",
       "wer": "Mann",
       "text": "Mein erster Polier, das war ein Choleriker, wie er im Buche steht. Hat auf der Baustelle herumgebrüllt, Fehler vor allen anderen breitgetreten, und wenn etwas gut lief, war es sein Verdienst. Ich war damals zwanzig und habe mir jeden Abend gesagt: So willst du nie werden. Heute leite ich selbst Baustellen mit vierzig Leuten, und ich denke immer noch oft an ihn. Wenn ich merke, dass ich laut werden will, fällt er mir ein. Klingt seltsam, aber dieser Mann hat mich mehr über Führung gelehrt als jedes Seminar und jeder gute Chef danach. Ich habe mir damals vorgenommen, Fehler grundsätzlich unter vier Augen anzusprechen, und daran halte ich mich bis heute.",
       "loesung": 6,
       "stelle": "dieser Mann hat mich mehr über Führung gelehrt",
       "erklaerung": "Das schlechte Vorbild seines ersten Poliers prägt ihn bis heute stärker als gute Vorgesetzte.",
       "frage": "Welche Aussage passt zu dieser Person?",
       "opt": [
        "Ich wurde zur Führungskraft befördert, ohne auf diese Aufgabe vorbereitet zu werden.",
        "Eine gute Vorgesetzte stellt sich in Konflikten mit der Geschäftsführung vor ihr Team.",
        "Ich führe mein Team auf Distanz und habe gelernt, dass dafür feste Termine nötig sind.",
        "Ich habe die Führungsrolle bewusst wieder abgegeben und bereue das nicht.",
        "Mitarbeiter erwarten von mir klare Entscheidungen, auch wenn sie ihnen nicht gefallen.",
        "Ich teile mir eine Führungsposition mit einer Kollegin.",
        "Ich habe mehr von einem schlechten Vorgesetzten gelernt als von einem guten.",
        "Mitarbeiter sollten ihre Vorgesetzten regelmäßig bewerten dürfen.",
        "Wer ein Team leitet, muss fachlich nicht der Beste darin sein.",
        "Ich vermisse bei meiner Vorgesetzten vor allem, dass sie Fehler zugibt."
       ],
       "fest": true
      },
      {
       "von": "Person 6 — Abteilungsleiterin in einer Stadtverwaltung, Anfang vierzig",
       "wer": "Frau",
       "text": "Nach der Elternzeit wollte ich nicht voll arbeiten, aber auch meine Leitungsfunktion nicht abgeben. Eine Kollegin aus dem Nachbarreferat war in genau derselben Lage. Wir haben uns dann gemeinsam auf die Abteilungsleitung beworben, jede mit sechzig Prozent. Montags und mittwochs bin ich da, dienstags und donnerstags sie, freitags überschneiden wir uns für die Übergabe. Am Anfang war die Amtsleitung sehr skeptisch. Inzwischen sagen auch die Mitarbeiter, dass es Vorteile hat, zwei Ansprechpartnerinnen zu haben. Wichtig ist nur, dass wir nach außen mit einer Stimme sprechen. Dafür telefonieren wir auch an unseren freien Tagen kurz, wenn etwas Wichtiges ansteht. Ohne dieses Vertrauen zueinander würde das Modell nicht funktionieren.",
       "loesung": 5,
       "stelle": "gemeinsam auf die Abteilungsleitung beworben",
       "erklaerung": "Sie hat die Leitung nicht abgegeben, sondern teilt sie mit einer Kollegin.",
       "frage": "Welche Aussage passt zu dieser Person?",
       "opt": [
        "Ich wurde zur Führungskraft befördert, ohne auf diese Aufgabe vorbereitet zu werden.",
        "Eine gute Vorgesetzte stellt sich in Konflikten mit der Geschäftsführung vor ihr Team.",
        "Ich führe mein Team auf Distanz und habe gelernt, dass dafür feste Termine nötig sind.",
        "Ich habe die Führungsrolle bewusst wieder abgegeben und bereue das nicht.",
        "Mitarbeiter erwarten von mir klare Entscheidungen, auch wenn sie ihnen nicht gefallen.",
        "Ich teile mir eine Führungsposition mit einer Kollegin.",
        "Ich habe mehr von einem schlechten Vorgesetzten gelernt als von einem guten.",
        "Mitarbeiter sollten ihre Vorgesetzten regelmäßig bewerten dürfen.",
        "Wer ein Team leitet, muss fachlich nicht der Beste darin sein.",
        "Ich vermisse bei meiner Vorgesetzten vor allem, dass sie Fehler zugibt."
       ],
       "fest": true
      },
      {
       "von": "Person 7 — Laborleiter in einem Pharmaunternehmen, Ende vierzig",
       "wer": "Mann",
       "text": "In meinem Labor arbeiten Chemiker, die in ihrem Spezialgebiet viel mehr wissen als ich. Als ich die Leitung übernommen habe, dachte ich, ich müsse bei jeder Analyse mitreden können. Das war anstrengend und ehrlich gesagt auch ein bisschen peinlich. Mein Vorgänger konnte das übrigens auch nicht, er hat es nur nie zugegeben. Heute sehe ich meine Aufgabe woanders: Ich sorge dafür, dass die Geräte funktionieren, dass die Leute Zeit für ihre Arbeit haben und dass Konflikte geklärt werden. Wer die Methode am besten beherrscht, muss nicht der sein, der das Team leitet. Das musste ich erst lernen, und ehrlich gesagt hat es fast zwei Jahre gedauert.",
       "loesung": 8,
       "stelle": "muss nicht der sein, der das Team leitet",
       "erklaerung": "Er hat gelernt, dass Führung nicht bedeutet, fachlich überall der Beste zu sein.",
       "frage": "Welche Aussage passt zu dieser Person?",
       "opt": [
        "Ich wurde zur Führungskraft befördert, ohne auf diese Aufgabe vorbereitet zu werden.",
        "Eine gute Vorgesetzte stellt sich in Konflikten mit der Geschäftsführung vor ihr Team.",
        "Ich führe mein Team auf Distanz und habe gelernt, dass dafür feste Termine nötig sind.",
        "Ich habe die Führungsrolle bewusst wieder abgegeben und bereue das nicht.",
        "Mitarbeiter erwarten von mir klare Entscheidungen, auch wenn sie ihnen nicht gefallen.",
        "Ich teile mir eine Führungsposition mit einer Kollegin.",
        "Ich habe mehr von einem schlechten Vorgesetzten gelernt als von einem guten.",
        "Mitarbeiter sollten ihre Vorgesetzten regelmäßig bewerten dürfen.",
        "Wer ein Team leitet, muss fachlich nicht der Beste darin sein.",
        "Ich vermisse bei meiner Vorgesetzten vor allem, dass sie Fehler zugibt."
       ],
       "fest": true
      },
      {
       "von": "Person 8 — Sachbearbeiterin im Einkauf eines Autozulieferers, Ende zwanzig",
       "wer": "Frau",
       "text": "Letzten Herbst sollte unsere Abteilung innerhalb von zwei Wochen alle Lieferantenverträge neu verhandeln, weil die Geschäftsführung das so beschlossen hatte. Völlig unrealistisch. Meine Chefin ist dann in die Sitzung mit der Geschäftsführung gegangen und hat gesagt: Das schaffen wir nicht, und dafür trage ich die Verantwortung, nicht mein Team. Sie hat uns vorher nicht einmal gefragt, sie hat es einfach gemacht. Damit hat sie sich richtig Ärger eingehandelt. Wir haben am Ende acht Wochen bekommen. So etwas vergisst man nicht. Seitdem würde ich für diese Frau ziemlich viel machen. Und den anderen im Team geht es genauso, das hat uns als Gruppe richtig zusammengeschweißt.",
       "loesung": 1,
       "stelle": "dafür trage ich die Verantwortung, nicht mein Team",
       "erklaerung": "Ihre Chefin hat das Team gegenüber der Geschäftsführung geschützt.",
       "frage": "Welche Aussage passt zu dieser Person?",
       "opt": [
        "Ich wurde zur Führungskraft befördert, ohne auf diese Aufgabe vorbereitet zu werden.",
        "Eine gute Vorgesetzte stellt sich in Konflikten mit der Geschäftsführung vor ihr Team.",
        "Ich führe mein Team auf Distanz und habe gelernt, dass dafür feste Termine nötig sind.",
        "Ich habe die Führungsrolle bewusst wieder abgegeben und bereue das nicht.",
        "Mitarbeiter erwarten von mir klare Entscheidungen, auch wenn sie ihnen nicht gefallen.",
        "Ich teile mir eine Führungsposition mit einer Kollegin.",
        "Ich habe mehr von einem schlechten Vorgesetzten gelernt als von einem guten.",
        "Mitarbeiter sollten ihre Vorgesetzten regelmäßig bewerten dürfen.",
        "Wer ein Team leitet, muss fachlich nicht der Beste darin sein.",
        "Ich vermisse bei meiner Vorgesetzten vor allem, dass sie Fehler zugibt."
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
   "kurz": "Ein Verkaufs- oder Verhandlungsgespräch, zehn Aufgaben a/b/c",
   "was": "Ein Gespräch mit zwei oder drei Personen, zum Beispiel ein Verkaufsgespräch. Zu jedem Abschnitt eine Aufgabe mit drei Antworten. In der Prüfung zählt jede zwei Punkte.",
   "tipp": "Die falschen Antworten benutzen Wörter aus dem Gespräch. Achte darauf, wer was anbietet und worauf man sich am Ende einigt.",
   "zeichen": "🤝",
   "farbe": "gold",
   "punkte": 20,
   "mal": 1,
   "runden": [
    {
     "id": "c1bh2s1",
     "titel": "Verkaufsgespräch: Neue Arbeitsplätze für eine Versicherung",
     "aufgaben": [
      {
       "ort": "Gespräch — Abschnitt 1",
       "zeilen": [
        {
         "wer": "Mann",
         "text": "Frau Okafor, schön, dass es heute klappt. Sie hatten am Telefon erzählt, dass Sie im Frühjahr mit der ganzen Schadenabteilung in das neue Gebäude am Hafen umziehen. Was genau suchen Sie denn?"
        },
        {
         "wer": "Frau",
         "text": "Wir ziehen mit hundertzwanzig Arbeitsplätzen um. Die alten Schreibtische nehmen wir nicht mit, die sind über zwanzig Jahre alt. Ehrlich gesagt war der Umzug aber gar nicht der eigentliche Anlass. Wir hatten im letzten Jahr auffällig viele Krankmeldungen wegen Rückenproblemen, und unser Betriebsarzt hat uns dringend zu höhenverstellbaren Tischen geraten. Außerdem wollen wir die Gelegenheit nutzen, die Abteilung insgesamt etwas freundlicher zu gestalten. In einer Umfrage haben die Mitarbeiter vor allem über Rückenschmerzen und über zu wenig Licht geklagt."
        }
       ],
       "frage": "Frau Okafor möchte neue Schreibtische vor allem, weil …",
       "opt": [
        "… die alten Tische nicht in das neue Gebäude passen.",
        "… viele Mitarbeiter Rückenprobleme hatten.",
        "… der Umzug eine neue Einrichtung vorschreibt."
       ],
       "loesung": 1,
       "stelle": "Wir hatten im letzten Jahr auffällig viele Krankmeldungen wegen Rückenproblemen",
       "erklaerung": "Der Umzug ist ausdrücklich „nicht der eigentliche Anlass“. Der Grund sind die Rückenprobleme."
      },
      {
       "ort": "Gespräch — Abschnitt 2",
       "zeilen": [
        {
         "wer": "Mann",
         "text": "Das hören wir oft. Wir haben da im Grunde zwei Linien. Die eine wird mit einer Kurbel verstellt, die andere elektrisch per Knopfdruck. Die Kurbelvariante ist natürlich deutlich günstiger, etwa dreihundertfünfzig Euro pro Tisch weniger."
        },
        {
         "wer": "Frau",
         "text": "Und welche würden Sie uns empfehlen?"
        },
        {
         "wer": "Mann",
         "text": "Wenn ich ehrlich bin, die elektrische. Wir haben das bei anderen Kunden ausgewertet: Kurbeltische werden nach ein paar Wochen kaum noch verstellt, weil den Leuten das Kurbeln zu umständlich ist. Dann haben Sie viel Geld für einen ganz normalen Schreibtisch ausgegeben."
        },
        {
         "wer": "Frau",
         "text": "Das klingt plausibel. Bei uns im Haus gibt es tatsächlich schon ein paar Kurbeltische aus einem früheren Versuch, und ich glaube, die stehen seit Jahren auf derselben Höhe."
        }
       ],
       "frage": "Herr Brandt rät von den Kurbeltischen ab, weil …",
       "opt": [
        "… sie im Alltag kaum verstellt werden.",
        "… sie teurer sind als elektrische Tische.",
        "… sie häufiger kaputtgehen."
       ],
       "loesung": 0,
       "stelle": "Kurbeltische werden nach ein paar Wochen kaum noch verstellt",
       "erklaerung": "Die Kurbeltische sind sogar günstiger. Das Problem ist, dass niemand sie benutzt."
      },
      {
       "ort": "Gespräch — Abschnitt 3",
       "zeilen": [
        {
         "wer": "Frau",
         "text": "Das leuchtet mir ein. Aber da muss ich gleich etwas zum Budget sagen. Unser Vorstand hat für die gesamte Einrichtung einen festen Betrag freigegeben, und darin sind auch Stühle, Schränke und die Besprechungsräume enthalten."
        },
        {
         "wer": "Mann",
         "text": "Darf ich fragen, wie hoch der Betrag ist?"
        },
        {
         "wer": "Frau",
         "text": "Lieber nicht genau. Sagen wir so: Wenn wir hundertzwanzig elektrische Tische zum Listenpreis nehmen, bleibt für den Rest so gut wie nichts übrig. Deshalb habe ich auch noch zwei andere Anbieter angefragt, das sage ich Ihnen ganz offen. Ich muss das Ergebnis am Ende vor dem Vorstand vertreten, und da wird jeder Euro einzeln angeschaut. Unser Finanzvorstand ist in solchen Dingen sehr gründlich."
        }
       ],
       "frage": "Frau Okafor deutet an, dass …",
       "opt": [
        "… der Vorstand das Budget noch erhöhen wird.",
        "… sie sich bereits für einen anderen Anbieter entschieden hat.",
        "… das Budget zum Listenpreis nicht reicht."
       ],
       "loesung": 2,
       "stelle": "bleibt für den Rest so gut wie nichts übrig",
       "erklaerung": "Sie hat andere Anbieter nur angefragt, nicht ausgewählt. Der Kern ist das knappe Budget."
      },
      {
       "ort": "Gespräch — Abschnitt 4",
       "zeilen": [
        {
         "wer": "Mann",
         "text": "Danke für die Offenheit. Dann lassen Sie uns über Möglichkeiten sprechen. Eine Idee wäre, nicht alle Plätze gleich auszustatten. Bei Ihnen arbeiten doch viele Kollegen nur zwei oder drei Tage im Büro, oder?"
        },
        {
         "wer": "Frau",
         "text": "Ja, die meisten haben zwei Tage Homeoffice in der Woche."
        },
        {
         "wer": "Mann",
         "text": "Dann brauchen Sie vielleicht gar keine hundertzwanzig Tische. Bei ähnlichen Kunden reichen meistens achtzig bis neunzig Plätze, die man sich teilt. Das spart Tische und außerdem Fläche, die Sie im neuen Gebäude für andere Dinge nutzen können. Wir haben das gerade bei einer Krankenkasse in Bremen so umgesetzt, und nach einem halben Jahr wollte dort niemand mehr zurück zum alten Modell."
        }
       ],
       "frage": "Herr Brandt schlägt vor, …",
       "opt": [
        "… weniger Arbeitsplätze anzuschaffen, die gemeinsam genutzt werden.",
        "… nur die Hälfte der Tische elektrisch auszustatten.",
        "… mehr Mitarbeiter ins Homeoffice zu schicken."
       ],
       "loesung": 0,
       "stelle": "Dann brauchen Sie vielleicht gar keine hundertzwanzig Tische",
       "erklaerung": "Das Homeoffice gibt es schon. Er nutzt es als Argument für geteilte Plätze."
      },
      {
       "ort": "Gespräch — Abschnitt 5",
       "zeilen": [
        {
         "wer": "Frau",
         "text": "Das haben wir intern schon diskutiert, und ich sage Ihnen gleich, das wird schwierig. Unser Betriebsrat hat sich klar dagegen ausgesprochen, dass Mitarbeiter keinen festen Platz mehr haben. Und ich kann das ein Stück weit verstehen. Gerade in der Schadenbearbeitung haben viele Leute noch Akten auf Papier und brauchen ihre Unterlagen griffbereit."
        },
        {
         "wer": "Mann",
         "text": "Verstehe. Dann ist das vom Tisch, kein Problem. Ich wollte es nur angesprochen haben, weil es bei vielen Kunden die größte Ersparnis bringt."
        },
        {
         "wer": "Frau",
         "text": "Für die Besprechungsräume und den Empfang könnten wir aber durchaus über Lösungen zum Teilen reden. Dort sitzt ohnehin nie jemand länger als ein paar Stunden am Stück."
        }
       ],
       "frage": "Geteilte Arbeitsplätze kommen für die Schadenabteilung nicht in Frage, weil …",
       "opt": [
        "… Frau Okafor selbst grundsätzlich dagegen ist.",
        "… die Räume im neuen Gebäude zu klein sind.",
        "… die Arbeitnehmervertretung das ablehnt."
       ],
       "loesung": 2,
       "stelle": "Unser Betriebsrat hat sich klar dagegen ausgesprochen",
       "erklaerung": "Der Betriebsrat ist die Arbeitnehmervertretung. Frau Okafor selbst zeigt nur Verständnis."
      },
      {
       "ort": "Gespräch — Abschnitt 6",
       "zeilen": [
        {
         "wer": "Mann",
         "text": "Gut, dann ein anderer Weg. Wir haben ein Leasingmodell. Sie zahlen die Tische über fünf Jahre in monatlichen Raten, und nach Ablauf können Sie sie für einen symbolischen Betrag übernehmen oder zurückgeben."
        },
        {
         "wer": "Frau",
         "text": "Leasing hatten wir bei den Firmenwagen, das hat sich bewährt. Aber bei Möbeln? Das müsste ich mit unserer Finanzabteilung klären. Die sehen so etwas meistens kritisch, weil es am Ende teurer ist als ein Kauf. Unser Finanzchef rechnet da sehr genau."
        },
        {
         "wer": "Mann",
         "text": "Das stimmt, insgesamt zahlen Sie etwa acht Prozent mehr. Dafür belastet es das Budget in diesem Jahr kaum. Und Sie haben nach fünf Jahren die Wahl, ob Sie die Tische behalten oder auf neue Modelle umsteigen wollen."
        }
       ],
       "frage": "Beim Leasing gibt Herr Brandt zu, dass …",
       "opt": [
        "… die Tische nach fünf Jahren zurückgegeben werden müssen.",
        "… es insgesamt teurer ist als ein Kauf.",
        "… die Finanzabteilung es bisher immer abgelehnt hat."
       ],
       "loesung": 1,
       "stelle": "insgesamt zahlen Sie etwa acht Prozent mehr",
       "erklaerung": "Die Rückgabe ist nur eine Möglichkeit. Er bestätigt die Mehrkosten."
      },
      {
       "ort": "Gespräch — Abschnitt 7",
       "zeilen": [
        {
         "wer": "Frau",
         "text": "Ich nehme das mal mit. Was mich noch interessiert: Wie lange dauert die Lieferung? Der Umzug ist für die erste Aprilwoche geplant, und das Datum steht fest."
        },
        {
         "wer": "Mann",
         "text": "Die elektrischen Tische haben im Moment etwa zehn Wochen Lieferzeit. Wenn Sie bis Mitte Januar bestellen, ist das zu schaffen. Und den Aufbau übernimmt unser eigenes Montageteam, an einem Wochenende, damit Ihr Betrieb nicht gestört wird. Die alten Tische nehmen wir übrigens auf Wunsch mit und entsorgen sie fachgerecht, das ist im Preis enthalten."
        },
        {
         "wer": "Frau",
         "text": "Das ist ein wichtiger Punkt. Bei unserem letzten Umzug standen die Leute zwei Tage lang zwischen Kartons. Das will ich auf keinen Fall noch einmal erleben, die Beschwerden kamen damals bis zum Vorstand."
        }
       ],
       "frage": "Damit der Termin im April klappt, muss die Versicherung …",
       "opt": [
        "… den Aufbau selbst übernehmen.",
        "… den Umzug auf ein Wochenende legen.",
        "… spätestens Mitte Januar bestellen."
       ],
       "loesung": 2,
       "stelle": "Wenn Sie bis Mitte Januar bestellen, ist das zu schaffen",
       "erklaerung": "Aufbau und Wochenende übernimmt der Hersteller. Die Versicherung muss nur rechtzeitig bestellen."
      },
      {
       "ort": "Gespräch — Abschnitt 8",
       "zeilen": [
        {
         "wer": "Mann",
         "text": "Darf ich noch etwas zu den Stühlen sagen? Sie hatten ja erwähnt, dass die auch zum Budget gehören."
        },
        {
         "wer": "Frau",
         "text": "Gern, aber da haben wir eigentlich schon einen Favoriten, ein Modell, das wir letztes Jahr in der Personalabteilung getestet haben. Die Kollegen dort waren sehr zufrieden, und ich möchte ungern etwas anderes nehmen, nur weil es billiger ist."
        },
        {
         "wer": "Mann",
         "text": "Das ist völlig in Ordnung. Ich wollte nur sagen: Wenn Sie Tische und Stühle bei uns zusammen bestellen, können wir Ihnen auf das Gesamtpaket zwölf Prozent Nachlass geben. Bei den Tischen allein sind es sechs."
        },
        {
         "wer": "Frau",
         "text": "Zwölf Prozent, das ist natürlich ein Argument. Lassen Sie mir dazu bitte die Unterlagen da, dann vergleiche ich das in Ruhe mit unserem Favoriten."
        }
       ],
       "frage": "Einen höheren Nachlass gibt es, wenn …",
       "opt": [
        "… die Versicherung Tische und Stühle zusammen kauft.",
        "… die Personalabteilung die Stühle vorher testet.",
        "… die Versicherung mehr als hundert Tische bestellt."
       ],
       "loesung": 0,
       "stelle": "Wenn Sie Tische und Stühle bei uns zusammen bestellen",
       "erklaerung": "Zwölf statt sechs Prozent gibt es nur für das Paket aus Tischen und Stühlen."
      },
      {
       "ort": "Gespräch — Abschnitt 9",
       "zeilen": [
        {
         "wer": "Frau",
         "text": "Bevor ich das weitergebe, hätte ich aber eine Bitte. Ich möchte nicht hundertzwanzig Tische auf Grundlage eines Katalogs bestellen. Könnten Sie uns ein paar Tische zur Probe hinstellen?"
        },
        {
         "wer": "Mann",
         "text": "Selbstverständlich. Ich würde vorschlagen, wir stellen Ihnen für vier Wochen sechs Tische und sechs Stühle in Ihre jetzige Abteilung, kostenlos. Ihre Mitarbeiter sollen sie im Alltag ausprobieren, nicht nur fünf Minuten im Ausstellungsraum. Unser Fahrer bringt die Tische nächste Woche vorbei und baut sie auch gleich auf."
        },
        {
         "wer": "Frau",
         "text": "Sehr gut. Und ich lasse die Kollegen danach einen kurzen Fragebogen ausfüllen. Dann habe ich am Ende etwas Schriftliches, das ich dem Vorstand zeigen kann, und nicht nur meinen eigenen Eindruck."
        }
       ],
       "frage": "Die Probetische sollen …",
       "opt": [
        "… im Ausstellungsraum des Herstellers getestet werden.",
        "… vier Wochen lang im normalen Arbeitsalltag benutzt werden.",
        "… nur von der Abteilungsleitung ausprobiert werden."
       ],
       "loesung": 1,
       "stelle": "Ihre Mitarbeiter sollen sie im Alltag ausprobieren",
       "erklaerung": "Der Ausstellungsraum wird ausdrücklich als die schlechtere Lösung genannt."
      },
      {
       "ort": "Gespräch — Abschnitt 10",
       "zeilen": [
        {
         "wer": "Mann",
         "text": "Dann fasse ich zusammen, was ich Ihnen bis Freitag schicke: ein Angebot für hundertzwanzig elektrische Tische, einmal als Kauf und einmal als Leasing, beides mit und ohne Stühle. Dazu lege ich Ihnen die Unterlagen zur Probephase und ein Muster für den Fragebogen bei, falls Sie das brauchen können."
        },
        {
         "wer": "Frau",
         "text": "Genau. Und schreiben Sie bitte die Lieferzeit verbindlich hinein. Wenn die Probephase gut läuft, entscheiden wir Anfang Januar. Ach, und noch etwas: Die anderen Anbieter bekommen von mir dieselben Fragen. Am Ende zählt bei uns ehrlich gesagt der Service nach dem Kauf genauso viel wie der Preis."
        },
        {
         "wer": "Mann",
         "text": "Das ist fair. Ich bin sicher, dass wir dabei gut abschneiden. Ich melde mich spätestens am Freitag bei Ihnen."
        }
       ],
       "frage": "Bei der Entscheidung will Frau Okafor …",
       "opt": [
        "… sich allein nach dem günstigsten Preis richten.",
        "… zuerst die Meinung des Vorstands abwarten.",
        "… den Service ebenso stark gewichten wie den Preis."
       ],
       "loesung": 2,
       "stelle": "zählt bei uns ehrlich gesagt der Service nach dem Kauf genauso viel wie der Preis",
       "erklaerung": "„genauso viel wie“ zeigt: Preis und Service sind gleich wichtig."
      }
     ]
    },
    {
     "id": "c1bh2s2",
     "titel": "Verhandlung: Ein Gartenmöbelhersteller und sein Lieferant für Aluminium",
     "aufgaben": [
      {
       "ort": "Gespräch — Abschnitt 1",
       "zeilen": [
        {
         "wer": "Mann",
         "text": "Frau Sander, ich will nicht lange drumherum reden. Ihr Schreiben vom letzten Monat hat bei uns für ziemliche Unruhe gesorgt. Vierzehn Prozent mehr für die Profile ab Januar, das ist für einen Gartenmöbelhersteller wie uns kaum zu verkraften. Unsere Kalkulation für die nächste Saison ist praktisch fertig, und da ist so ein Sprung nicht vorgesehen."
        },
        {
         "wer": "Frau",
         "text": "Das verstehe ich, Herr Demir. Ich möchte aber erklären, wie die Zahl zustande kommt. Der Aluminiumpreis selbst ist sogar leicht gefallen. Was uns zu schaffen macht, sind die Energiekosten für das Strangpressen und die neuen Tarifabschlüsse. Allein der Strom kostet uns fast doppelt so viel wie vor drei Jahren. Wir haben das nicht leichtfertig entschieden, glauben Sie mir. Wir haben drei Monate gerechnet, bevor wir Ihnen geschrieben haben."
        }
       ],
       "frage": "Frau Sander begründet die Preiserhöhung mit …",
       "opt": [
        "… dem gestiegenen Aluminiumpreis.",
        "… höheren Transportkosten.",
        "… Energiekosten und höheren Löhnen."
       ],
       "loesung": 2,
       "stelle": "Was uns zu schaffen macht, sind die Energiekosten",
       "erklaerung": "Der Aluminiumpreis ist gefallen. Tarifabschlüsse bedeuten höhere Löhne."
      },
      {
       "ort": "Gespräch — Abschnitt 2",
       "zeilen": [
        {
         "wer": "Mann",
         "text": "Das mag sein. Aber wir haben auch Angebote von anderen Werken eingeholt, und die liegen deutlich darunter. Ich habe die Zahlen hier, wenn Sie sie sehen wollen."
        },
        {
         "wer": "Frau",
         "text": "Davon gehe ich aus. Darf ich fragen, ob das Werke in Deutschland sind?"
        },
        {
         "wer": "Mann",
         "text": "Eines in Tschechien, eines in der Türkei."
        },
        {
         "wer": "Frau",
         "text": "Dann bitte ich Sie, eines zu bedenken. Wir liefern Ihnen innerhalb von achtundvierzig Stunden, wenn in der Produktion Material fehlt. Aus der Türkei dauert das zwei Wochen, und Sie müssten ein viel größeres Lager vorhalten. Das kostet Sie auch Geld, nur steht es nicht auf der Rechnung. Und ich weiß aus Erfahrung, dass die Werke im Ausland ihre günstigen Preise auch nicht ewig halten, wenn dort die Energiepreise steigen."
        }
       ],
       "frage": "Frau Sander weist darauf hin, dass ausländische Anbieter …",
       "opt": [
        "… schlechtere Qualität liefern.",
        "… indirekt höhere Lagerkosten verursachen.",
        "… keine kleinen Mengen liefern."
       ],
       "loesung": 1,
       "stelle": "Das kostet Sie auch Geld, nur steht es nicht auf der Rechnung",
       "erklaerung": "Über Qualität sagt sie nichts. Ihr Argument sind die versteckten Kosten eines großen Lagers."
      },
      {
       "ort": "Gespräch — Abschnitt 3",
       "zeilen": [
        {
         "wer": "Mann",
         "text": "Da muss ich Frau Sander ehrlich gesagt recht geben, Herr Demir. Im Frühjahr, wenn wir für die Saison produzieren, sind diese kurzen Lieferzeiten für uns Gold wert. Letztes Jahr hätten wir ohne die Expresslieferung im April die Linie zwei für eine Woche abstellen müssen. Und im Sommer, als die Linie umgebaut wurde, haben Sie uns zweimal sehr kurzfristig kleinere Mengen geschickt, ohne Aufschlag."
        },
        {
         "wer": "Mann",
         "text": "Das weiß ich, Herr Pohl. Ich sage ja auch nicht, dass wir wechseln wollen. Ich sage nur, dass vierzehn Prozent nicht gehen. Wir müssen nur eine Zahl finden, mit der wir beide leben können."
        }
       ],
       "frage": "Herr Pohl, der Produktionsleiter, …",
       "opt": [
        "… betont den Wert der schnellen Lieferungen.",
        "… möchte zu einem günstigeren Werk wechseln.",
        "… kritisiert eine verspätete Lieferung im April."
       ],
       "loesung": 0,
       "stelle": "sind diese kurzen Lieferzeiten für uns Gold wert",
       "erklaerung": "Die Lieferung im April hat die Produktion gerettet, sie war nicht verspätet."
      },
      {
       "ort": "Gespräch — Abschnitt 4",
       "zeilen": [
        {
         "wer": "Frau",
         "text": "Gut, dann lassen Sie uns konkret werden. Wo liegt denn Ihre Schmerzgrenze? Ich sage Ihnen ganz offen, dass ich heute nicht mit leeren Händen zurück ins Werk fahren möchte."
        },
        {
         "wer": "Mann",
         "text": "Wir haben mit sechs Prozent kalkuliert. Mehr bekomme ich bei unserer Geschäftsführung nicht durch, zumal unsere Kunden, also die Baumärkte, ihre Preise für die nächste Saison bereits festgelegt haben. Die Verhandlungen dort waren schon im Herbst."
        },
        {
         "wer": "Frau",
         "text": "Sechs Prozent würden bei uns gerade mal die Lohnerhöhung abdecken. Da kann ich Ihnen nichts zusagen, ohne mit meiner Geschäftsleitung zu sprechen. Unser Spielraum ist wirklich kleiner, als Sie vielleicht denken."
        }
       ],
       "frage": "Herr Demir kann nicht mehr als sechs Prozent zahlen, unter anderem weil …",
       "opt": [
        "… die Geschäftsführung den Lieferanten wechseln will.",
        "… die Verkaufspreise für seine Abnehmer schon feststehen.",
        "… sein Unternehmen im letzten Jahr Verluste gemacht hat."
       ],
       "loesung": 1,
       "stelle": "ihre Preise für die nächste Saison bereits festgelegt haben",
       "erklaerung": "„zumal“ leitet den zusätzlichen Grund ein: Die Baumärkte haben ihre Preise schon festgelegt."
      },
      {
       "ort": "Gespräch — Abschnitt 5",
       "zeilen": [
        {
         "wer": "Frau",
         "text": "Ich hätte aber einen Vorschlag, der uns beiden helfen könnte. Im Moment bestellen Sie bei uns sehr unregelmäßig, mal große Mengen im Februar, dann im Sommer fast gar nichts. Für unsere Pressen ist das ungünstig. Wenn Sie Ihre Abrufe gleichmäßiger über das Jahr verteilen, können wir viel effizienter planen, und diese Ersparnis würden wir an Sie weitergeben."
        },
        {
         "wer": "Mann",
         "text": "Das hieße aber, dass wir im Herbst Profile auf Lager nehmen, die wir erst im Frühjahr verarbeiten. Wir haben dafür gar keinen Platz, unsere Halle ist im Herbst schon voll mit fertigen Möbeln für das Frühjahr."
        },
        {
         "wer": "Frau",
         "text": "Genau. Die Lagerung könnten wir in unserer eigenen Halle übernehmen. Sie würden die Profile dann bei Bedarf abrufen, wie bisher, nur die Produktion bei uns wäre gleichmäßiger."
        }
       ],
       "frage": "Frau Sander schlägt vor, dass der Möbelhersteller …",
       "opt": [
        "… seine Bestellungen gleichmäßiger über das Jahr verteilt.",
        "… im Sommer größere Mengen bestellt als im Februar.",
        "… eine eigene Lagerhalle baut."
       ],
       "loesung": 0,
       "stelle": "Wenn Sie Ihre Abrufe gleichmäßiger über das Jahr verteilen",
       "erklaerung": "Die Lagerung würde der Lieferant übernehmen, nicht der Möbelhersteller."
      },
      {
       "ort": "Gespräch — Abschnitt 6",
       "zeilen": [
        {
         "wer": "Mann",
         "text": "Das klingt interessant. Was würde das in Zahlen bedeuten?"
        },
        {
         "wer": "Frau",
         "text": "Ich müsste das genau durchrechnen lassen. Aber nach meiner Erfahrung liegen wir dann eher bei zehn als bei vierzehn Prozent. Wir haben das bei einem Fensterbauer im letzten Jahr ähnlich gemacht."
        },
        {
         "wer": "Mann",
         "text": "Zehn ist immer noch weit weg von sechs. Das sage ich Ihnen gleich, damit keine falschen Erwartungen entstehen."
        },
        {
         "wer": "Frau",
         "text": "Das ist mir klar. Ich will Ihnen auch gar nichts versprechen, was ich hinterher nicht halten kann. Die zehn sind eine grobe Schätzung, die genaue Zahl bekommen Sie schriftlich. Ich möchte nicht, dass Sie das morgen Ihrer Geschäftsführung erzählen und ich muss es dann zurücknehmen."
        }
       ],
       "frage": "Mit gleichmäßigeren Bestellungen würde die Preiserhöhung nach Frau Sanders Schätzung …",
       "opt": [
        "… auf sechs Prozent sinken.",
        "… ganz wegfallen.",
        "… ungefähr zehn Prozent betragen."
       ],
       "loesung": 2,
       "stelle": "liegen wir dann eher bei zehn als bei vierzehn Prozent",
       "erklaerung": "Sechs Prozent ist Herrn Demirs Ziel, zehn die Schätzung der Lieferantin."
      },
      {
       "ort": "Gespräch — Abschnitt 7",
       "zeilen": [
        {
         "wer": "Mann",
         "text": "Darf ich noch einen Punkt ansprechen, der mit dem Preis nur indirekt zu tun hat? Wir hatten im letzten Jahr bei zwei Lieferungen Probleme mit der Oberfläche. Kratzer an den Profilen, die erst beim Pulverbeschichten aufgefallen sind. Das hat uns Ausschuss und Nacharbeit gekostet. Ich will das nicht dramatisieren, aber unsere Kunden in den Baumärkten sind bei der Oberfläche sehr empfindlich."
        },
        {
         "wer": "Frau",
         "text": "Ja, das ist bei uns bekannt, und das war ärgerlich. Wir haben daraufhin die Verpackung umgestellt, die Profile werden jetzt einzeln in Folie geschlagen. Seit Oktober hatten wir keine einzige Reklamation dieser Art mehr. Falls doch noch einmal etwas auffällt, schicken Sie mir bitte direkt Fotos, dann kläre ich das persönlich mit unserer Qualitätssicherung."
        }
       ],
       "frage": "Die Kratzer an den Profilen …",
       "opt": [
        "… treten seit einer neuen Verpackung nicht mehr auf.",
        "… entstehen bei der Pulverbeschichtung im Möbelwerk.",
        "… wurden bisher nicht reklamiert."
       ],
       "loesung": 0,
       "stelle": "Seit Oktober hatten wir keine einzige Reklamation dieser Art mehr",
       "erklaerung": "Beim Beschichten wurden die Kratzer nur entdeckt, nicht verursacht."
      },
      {
       "ort": "Gespräch — Abschnitt 8",
       "zeilen": [
        {
         "wer": "Mann",
         "text": "Gut. Ich mache Ihnen auch ein Angebot. Wenn wir uns beim Preis irgendwo in der Mitte treffen, wären wir bereit, den Rahmenvertrag von einem auf drei Jahre zu verlängern. Das gibt Ihnen Planungssicherheit. Und wir würden Ihnen zusichern, dass wir in dieser Zeit keine Profile woanders kaufen."
        },
        {
         "wer": "Frau",
         "text": "Drei Jahre zu einem festen Preis? Das kann ich bei diesen Energiepreisen nicht machen, das wäre für uns ein zu großes Risiko. Niemand kann heute sagen, wo die Preise in zwei Jahren stehen."
        },
        {
         "wer": "Mann",
         "text": "Nicht fest. Wir könnten eine Klausel einbauen, die den Preis an die Entwicklung der Strompreise koppelt, in beide Richtungen. Steigen die Strompreise, zahlen wir mehr, fallen sie, zahlen wir weniger. Das wäre für beide Seiten fair."
        }
       ],
       "frage": "Herr Demir schlägt für einen längeren Vertrag vor, dass …",
       "opt": [
        "… der Preis drei Jahre lang unverändert bleibt.",
        "… der Preis sich nach den Stromkosten richtet.",
        "… der Lieferant auch die Lagerung übernimmt."
       ],
       "loesung": 1,
       "stelle": "die den Preis an die Entwicklung der Strompreise koppelt",
       "erklaerung": "Einen festen Preis lehnt Frau Sander ab, deshalb korrigiert er: „Nicht fest.“"
      },
      {
       "ort": "Gespräch — Abschnitt 9",
       "zeilen": [
        {
         "wer": "Frau",
         "text": "Das ist ein fairer Ansatz, so etwas haben wir mit zwei anderen Kunden schon vereinbart. Ich kann Ihnen dazu heute aber keine verbindliche Antwort geben. Über Verträge mit mehr als einem Jahr Laufzeit entscheidet bei uns die Geschäftsleitung, und die tagt erst am zwölften Dezember."
        },
        {
         "wer": "Mann",
         "text": "Das ist knapp. Wir müssen unsere Kalkulation bis Mitte Dezember abschließen. Danach geht unsere Preisliste an die Baumärkte, und dann ist nichts mehr zu ändern."
        },
        {
         "wer": "Frau",
         "text": "Dann rufe ich Sie direkt nach der Sitzung an, noch am selben Tag. Und wenn es Rückfragen gibt, komme ich auch gern noch einmal persönlich zu Ihnen ins Werk."
        }
       ],
       "frage": "Frau Sander kann noch nicht zusagen, weil …",
       "opt": [
        "… sie die Kalkulation erst prüfen muss.",
        "… sie mit anderen Kunden Ähnliches vereinbart hat.",
        "… die Geschäftsleitung über längere Verträge entscheidet."
       ],
       "loesung": 2,
       "stelle": "Über Verträge mit mehr als einem Jahr Laufzeit entscheidet bei uns die Geschäftsleitung",
       "erklaerung": "Die Vereinbarungen mit anderen Kunden sprechen eher für den Vorschlag. Zuständig ist die Geschäftsleitung."
      },
      {
       "ort": "Gespräch — Abschnitt 10",
       "zeilen": [
        {
         "wer": "Mann",
         "text": "Gut, dann halten wir fest: Sie schicken uns bis Ende nächster Woche eine Berechnung für gleichmäßige Abrufe. Herr Pohl prüft bis dahin, ob wir das in der Produktion umsetzen können."
        },
        {
         "wer": "Mann",
         "text": "Das kläre ich mit der Schichtplanung, das sollte machbar sein. Wir müssten dann vielleicht eine Schicht im Herbst anders besetzen, aber das ist lösbar."
        },
        {
         "wer": "Frau",
         "text": "Und ich bringe den Vorschlag mit der Strompreisklausel in die Sitzung ein. Bis dahin gilt für Ihre Bestellungen im Dezember noch der alte Preis, das kann ich Ihnen heute schon zusagen."
        },
        {
         "wer": "Mann",
         "text": "Gut. Dann danke ich Ihnen beiden, das war ein konstruktives Gespräch. Ehrlich gesagt hatte ich vorher mit mehr Streit gerechnet."
        }
       ],
       "frage": "Frau Sander sagt heute schon zu, dass …",
       "opt": [
        "… die Strompreisklausel angenommen wird.",
        "… Bestellungen im Dezember zum bisherigen Preis abgerechnet werden.",
        "… die Preiserhöhung höchstens sechs Prozent beträgt."
       ],
       "loesung": 1,
       "stelle": "gilt für Ihre Bestellungen im Dezember noch der alte Preis",
       "erklaerung": "Über die Klausel entscheidet erst die Sitzung. Sicher ist nur der alte Preis im Dezember."
      }
     ]
    },
    {
     "id": "c1bh2s3",
     "titel": "Beratungsgespräch: Eine Familiendruckerei sucht ihren Weg",
     "aufgaben": [
      {
       "ort": "Gespräch — Abschnitt 1",
       "zeilen": [
        {
         "wer": "Mann",
         "text": "Frau Weidinger, ich habe mir in den letzten zwei Wochen Ihre Zahlen angesehen und mit einigen Mitarbeitern gesprochen. Bevor ich Ihnen sage, was mir aufgefallen ist: Was ist für Sie selbst das dringendste Problem? Mich interessiert zuerst Ihre Sicht."
        },
        {
         "wer": "Frau",
         "text": "Das kann ich Ihnen genau sagen. Der Umsatz ist eigentlich stabil, wir haben genug zu tun. Aber am Ende des Jahres bleibt immer weniger übrig. Letztes Jahr hatten wir zum ersten Mal seit der Gründung durch meinen Vater fast keinen Gewinn mehr, obwohl die Maschinen voll ausgelastet waren. Mein Sohn Jonas ist seit zwei Jahren im Betrieb und soll ihn irgendwann übernehmen. Aber so, wie es im Moment aussieht, möchte ich ihm das ehrlich gesagt nicht zumuten."
        }
       ],
       "frage": "Frau Weidinger macht sich Sorgen, weil …",
       "opt": [
        "… trotz voller Auslastung kaum Gewinn bleibt.",
        "… der Umsatz deutlich gesunken ist.",
        "… die Maschinen nicht ausgelastet sind."
       ],
       "loesung": 0,
       "stelle": "Aber am Ende des Jahres bleibt immer weniger übrig",
       "erklaerung": "Umsatz und Auslastung sind in Ordnung. Das Problem ist der Gewinn."
      },
      {
       "ort": "Gespräch — Abschnitt 2",
       "zeilen": [
        {
         "wer": "Mann",
         "text": "Das deckt sich mit dem, was ich gesehen habe. Sie drucken sehr viele kleine Aufträge, Visitenkarten, Flyer für Vereine, Einladungen. Jeder Auftrag wird einzeln am Telefon besprochen, oft zwei oder drei Mal korrigiert, und am Ende verdienen Sie daran vielleicht zwanzig Euro. Ich habe ausgerechnet, dass ein Drittel Ihrer Aufträge Sie mehr kostet, als es einbringt. Bei den großen Aufträgen dagegen verdienen Sie ordentlich, das muss man klar sagen."
        },
        {
         "wer": "Mann",
         "text": "Das habe ich auch schon öfter gesagt. Aber das sind teilweise Kunden, die seit dreißig Jahren zu uns kommen. Meine Mutter kennt viele von ihnen persönlich, und die rufen dann direkt bei ihr an, auch am Wochenende."
        }
       ],
       "frage": "Laut Herrn Lorenz ist ein Teil der kleinen Aufträge …",
       "opt": [
        "… besonders gewinnbringend.",
        "… zu selten geworden.",
        "… ein Verlustgeschäft."
       ],
       "loesung": 2,
       "stelle": "ein Drittel Ihrer Aufträge Sie mehr kostet, als es einbringt",
       "erklaerung": "Mehr Kosten als Einnahmen bedeutet: Verlust."
      },
      {
       "ort": "Gespräch — Abschnitt 3",
       "zeilen": [
        {
         "wer": "Frau",
         "text": "Genau das ist der Punkt. Ich kann doch den Gesangverein nicht wegschicken, der hier seit meiner Kindheit seine Programmhefte drucken lässt. Und den Turnverein, und den Kindergarten um die Ecke. Das gehört zu unserem Ruf in der Stadt."
        },
        {
         "wer": "Mann",
         "text": "Das verlangt auch niemand. Ich schlage nicht vor, dass Sie Kunden wegschicken. Ich schlage vor, dass kleine Aufträge anders abgewickelt werden: über ein einfaches Bestellformular auf Ihrer Webseite, mit festen Preisen und festen Formaten. Wer etwas Besonderes will, bekommt das weiterhin, aber dann mit einem Aufschlag für die Beratung. Die meisten Ihrer Stammkunden werden das gar nicht als Nachteil empfinden, im Gegenteil, viele finden ein Formular bequemer als ein Telefonat."
        }
       ],
       "frage": "Herr Lorenz empfiehlt für kleine Aufträge …",
       "opt": [
        "… sie nur noch für langjährige Kunden anzunehmen.",
        "… ein vereinfachtes Bestellverfahren mit Festpreisen.",
        "… sie an eine andere Druckerei abzugeben."
       ],
       "loesung": 1,
       "stelle": "über ein einfaches Bestellformular auf Ihrer Webseite",
       "erklaerung": "Kunden wegschicken will er ausdrücklich nicht. Er will die Abwicklung vereinfachen."
      },
      {
       "ort": "Gespräch — Abschnitt 4",
       "zeilen": [
        {
         "wer": "Mann",
         "text": "Darf ich da etwas ergänzen? Ich habe mir die großen Druckereien im Internet genau angeschaut. Mit deren Preisen können wir nie mithalten, die drucken in riesigen Mengen. Wenn wir auf der Webseite mit Festpreisen anfangen, vergleichen die Kunden uns doch sofort mit denen. Die werben mit Preisen, bei denen ich nicht einmal das Papier bezahlen kann."
        },
        {
         "wer": "Mann",
         "text": "Der Einwand ist berechtigt, Jonas. Aber Ihre Kunden kommen nicht wegen des Preises zu Ihnen. Die kommen, weil sie morgen früh die Flyer abholen wollen, und weil sie jemanden anrufen können, wenn etwas schiefgeht. Das sollten Sie auf der Seite deutlich machen, statt sich auf einen Preiskampf einzulassen. Ein Satz wie heute bestellt, morgen abgeholt ist mehr wert als ein Preis, der zwei Euro unter dem der Konkurrenz liegt."
        }
       ],
       "frage": "Herr Lorenz meint, die Kunden der Druckerei …",
       "opt": [
        "… würden zu den großen Druckereien im Internet wechseln.",
        "… erwarten vor allem niedrige Preise.",
        "… schätzen Schnelligkeit und persönliche Erreichbarkeit."
       ],
       "loesung": 2,
       "stelle": "Ihre Kunden kommen nicht wegen des Preises zu Ihnen",
       "erklaerung": "Den Preisvergleich befürchtet der Sohn. Der Berater sieht die Stärken woanders."
      },
      {
       "ort": "Gespräch — Abschnitt 5",
       "zeilen": [
        {
         "wer": "Frau",
         "text": "Gut. Der zweite Punkt, den Sie mir im Vorgespräch angekündigt hatten, war die große Maschine. Der Händler drängt schon, weil es im Frühjahr angeblich Rabatte gibt."
        },
        {
         "wer": "Mann",
         "text": "Richtig. Sie überlegen, die alte Offsetmaschine durch eine neue zu ersetzen, für etwa eine Million Euro. Ich rate Ihnen, das noch nicht zu tun. Die alte Maschine läuft zuverlässig, und der Großteil Ihrer Aufträge hat so kleine Auflagen, dass er inzwischen besser auf die Digitaldruckmaschine passt. Bevor Sie investieren, sollten Sie wissen, welche Kunden Sie in fünf Jahren haben wollen. Ein Händler, der Sie unter Zeitdruck setzt, hat dabei vor allem seine eigenen Interessen im Blick. Eine Million ist für einen Betrieb Ihrer Größe sehr viel Geld."
        }
       ],
       "frage": "Zur neuen Offsetmaschine rät Herr Lorenz, …",
       "opt": [
        "… sie sofort zu kaufen, solange die Preise niedrig sind.",
        "… die Entscheidung aufzuschieben, bis die Strategie klar ist.",
        "… sie zu leasen statt zu kaufen."
       ],
       "loesung": 1,
       "stelle": "Ich rate Ihnen, das noch nicht zu tun",
       "erklaerung": "„noch nicht“ heißt: später, wenn klar ist, welche Kunden die Druckerei haben will."
      },
      {
       "ort": "Gespräch — Abschnitt 6",
       "zeilen": [
        {
         "wer": "Mann",
         "text": "Das sehe ich genauso. Ich würde das Geld lieber in etwas anderes stecken. Wir bekommen immer mehr Anfragen nach Verpackungen, kleine Serien für Manufakturen, Kosmetik, Feinkost. Das können wir im Moment gar nicht anbieten. Letzten Monat waren es allein vier Anfragen, und ich musste alle absagen."
        },
        {
         "wer": "Frau",
         "text": "Jonas, das ist ein völlig anderes Geschäft. Wir sind eine Druckerei, keine Verpackungsfirma. Davon verstehen wir nichts."
        },
        {
         "wer": "Mann",
         "text": "Erlauben Sie mir einen Einwand, Frau Weidinger. Die Gewinnspannen bei kleinen Verpackungsserien sind deutlich höher als bei Flyern. Ich würde das zumindest prüfen. Ich habe in den letzten Jahren drei Druckereien begleitet, die diesen Schritt gemacht haben, zwei davon mit Erfolg."
        }
       ],
       "frage": "Jonas Weidinger möchte, dass die Druckerei …",
       "opt": [
        "… in kleine Verpackungsserien einsteigt.",
        "… die Offsetmaschine ersetzt.",
        "… sich auf Flyer spezialisiert."
       ],
       "loesung": 0,
       "stelle": "Wir bekommen immer mehr Anfragen nach Verpackungen",
       "erklaerung": "Er will das Geld gerade nicht in die Maschine stecken, sondern in Verpackungen."
      },
      {
       "ort": "Gespräch — Abschnitt 7",
       "zeilen": [
        {
         "wer": "Frau",
         "text": "Prüfen ja. Aber ich sage Ihnen auch, wovor ich Angst habe. Wir sind vierzehn Leute. Wenn wir uns übernehmen, stehen hier vierzehn Familien ohne Einkommen da. Die meisten arbeiten seit über zwanzig Jahren hier, einige haben schon bei meinem Vater gelernt."
        },
        {
         "wer": "Mann",
         "text": "Das nehme ich ernst. Deshalb schlage ich keinen großen Umbau vor, sondern einen Test. Sie suchen sich drei Kunden, die Verpackungen brauchen, und produzieren für die ein halbes Jahr lang mit einem Partnerbetrieb, der das Stanzen übernimmt. Dann sehen Sie, ob das trägt, ohne eine einzige Maschine zu kaufen. Wenn es nicht funktioniert, haben Sie ein halbes Jahr Arbeit investiert, aber kein Kapital verloren."
        }
       ],
       "frage": "Um das Risiko klein zu halten, schlägt Herr Lorenz vor, …",
       "opt": [
        "… vierzehn neue Mitarbeiter einzustellen.",
        "… zunächst eine Stanzmaschine zu kaufen.",
        "… es zuerst mit wenigen Kunden und einem Partner zu versuchen."
       ],
       "loesung": 2,
       "stelle": "Deshalb schlage ich keinen großen Umbau vor, sondern einen Test",
       "erklaerung": "Das Stanzen übernimmt der Partner, eine Maschine wird gerade nicht gekauft."
      },
      {
       "ort": "Gespräch — Abschnitt 8",
       "zeilen": [
        {
         "wer": "Mann",
         "text": "Und wer kümmert sich darum? Ich bin jetzt schon für die Druckvorstufe und den Vertrieb zuständig. Für ein drittes Thema bleibt da kaum Zeit."
        },
        {
         "wer": "Mann",
         "text": "Das ist eigentlich das Thema, das mir am meisten Sorgen macht. In Ihrem Betrieb läuft fast alles über Sie beide. Jede Entscheidung, jede Reklamation, jedes Angebot. Ihre Mitarbeiter sind gut, aber sie dürfen nichts entscheiden. Wenn einer von Ihnen beiden krank wird, steht hier der halbe Betrieb still. Ich habe mit Ihren Mitarbeitern gesprochen, und mehrere haben mir gesagt, dass sie gern mehr Verantwortung übernehmen würden, wenn man sie ließe."
        }
       ],
       "frage": "Herr Lorenz sieht ein großes Problem darin, dass …",
       "opt": [
        "… alle Entscheidungen bei Mutter und Sohn liegen.",
        "… die Mitarbeiter schlecht ausgebildet sind.",
        "… es zu viele Reklamationen gibt."
       ],
       "loesung": 0,
       "stelle": "In Ihrem Betrieb läuft fast alles über Sie beide",
       "erklaerung": "Die Mitarbeiter sind „gut“. Das Problem ist, dass sie nichts entscheiden dürfen."
      },
      {
       "ort": "Gespräch — Abschnitt 9",
       "zeilen": [
        {
         "wer": "Frau",
         "text": "Das stimmt leider. Mein Vater hat es auch so gemacht, und ich habe es einfach übernommen. Bei vierzehn Leuten ging das ja auch lange gut."
        },
        {
         "wer": "Mann",
         "text": "Dann wäre mein Vorschlag, dass Frau Ostermann aus der Kundenbetreuung künftig Angebote bis fünftausend Euro selbst schreiben und freigeben darf. Sie macht das inhaltlich schon längst, sie muss es Ihnen nur jedes Mal vorlegen. Das allein spart Ihnen nach meiner Schätzung acht bis zehn Stunden in der Woche. Und sie merkt dabei, dass Sie ihr vertrauen. Das ist für die Stimmung im Betrieb nicht zu unterschätzen."
        },
        {
         "wer": "Mann",
         "text": "Das würde ihr gefallen, sie hat das schon einmal angesprochen. Ich glaube, sie wäre sogar enttäuscht, wenn wir es nicht machen."
        }
       ],
       "frage": "Frau Ostermann soll künftig …",
       "opt": [
        "… die Leitung der Druckerei übernehmen.",
        "… Angebote bis zu einer bestimmten Summe selbst freigeben.",
        "… zehn Stunden pro Woche mehr arbeiten."
       ],
       "loesung": 1,
       "stelle": "Angebote bis fünftausend Euro selbst schreiben und freigeben darf",
       "erklaerung": "Die acht bis zehn Stunden sparen die Inhaber, sie muss nicht mehr arbeiten."
      },
      {
       "ort": "Gespräch — Abschnitt 10",
       "zeilen": [
        {
         "wer": "Mann",
         "text": "Dann fasse ich zusammen, was wir heute festhalten. Erstens das Bestellformular für kleine Aufträge, das baut Jonas bis Ende Februar. Zweitens der Test mit Verpackungen, dafür suche ich Ihnen zwei mögliche Partnerbetriebe heraus. Und drittens die Regelung für Frau Ostermann."
        },
        {
         "wer": "Frau",
         "text": "Und die Maschine? Der Händler wartet auf eine Antwort."
        },
        {
         "wer": "Mann",
         "text": "Die schauen wir uns in einem halben Jahr noch einmal an, wenn wir Ergebnisse aus dem Test haben. Vorher würde ich an Ihrer Stelle nichts unterschreiben. Und dem Händler sagen Sie bitte, dass Sie sich im Sommer wieder melden. Wenn er Ihnen dann kein gutes Angebot mehr macht, macht es ein anderer."
        }
       ],
       "frage": "Über die neue Druckmaschine wird …",
       "opt": [
        "… erst nach den Ergebnissen des Tests entschieden.",
        "… bis Ende Februar entschieden.",
        "… gar nicht mehr gesprochen."
       ],
       "loesung": 0,
       "stelle": "Die schauen wir uns in einem halben Jahr noch einmal an",
       "erklaerung": "Ende Februar betrifft das Bestellformular. Die Maschine wird vertagt."
      }
     ]
    }
   ]
  },
  {
   "nr": 3,
   "art": "vortrag",
   "name": "Hören: Vortrag mitschreiben",
   "kurz": "Ein Vortrag, Folien mit zehn Lücken",
   "was": "Du hörst einen Vortrag und ergänzt die Folien auf dem Handzettel mit Notizen. Stichworte reichen, Rechtschreibung zählt nicht. In der Prüfung zählt jede Lücke zwei Punkte.",
   "tipp": "Lies vor jedem Abschnitt, was auf der Folie fehlt. Notiere nur die Kerninformation.",
   "zeichen": "📊",
   "farbe": "rot",
   "punkte": 20,
   "mal": 1,
   "runden": [
    {
     "id": "c1bh3s1",
     "titel": "Fachtagung Kundenservice: Beschwerden als Chance",
     "aufgaben": [
      {
       "ort": "Vortrag — Abschnitt 1",
       "wer": "Frau",
       "text": "Guten Tag, meine Damen und Herren, und vielen Dank für die Einladung. Ich leite seit sechs Jahren den Kundenservice bei Holmberg Möbel. Wir verkaufen Möbel überwiegend über das Internet und haben etwa vierhundert Beschäftigte. Als ich damals angefangen habe, war Beschwerdemanagement bei uns ein Wort, das niemand ernst genommen hat. Beschwerden landeten in einem allgemeinen Postfach, wurden irgendwann von irgendwem beantwortet, und in den Abteilungen hieß es meistens, der Kunde habe sich eben falsch bedient. Heute ist das anders, und ich möchte Ihnen in den nächsten Minuten erzählen, wie wir dahin gekommen sind. Vorweg eine Bemerkung, die manche von Ihnen vielleicht enttäuscht: Wir haben dafür keine teure Software gekauft. Das Wichtigste war eine andere Haltung, nämlich Beschwerden nicht als Störung zu sehen, sondern als kostenlose Auskunft über unsere Schwächen. Alles Weitere, was ich Ihnen heute zeige, folgt aus diesem einen Gedanken.",
       "notiz": {
        "titel": "Handzettel: Folie 1 — Ausgangslage im Unternehmen",
        "zeilen": [
         "Möbelversand, rund vierhundert Beschäftigte",
         "früher: Beschwerden im allgemeinen Postfach, niemand zuständig"
        ],
        "feld": "Wichtigste Veränderung:",
        "frei": true,
        "muster": "neue Haltung: Beschwerden als kostenlose Auskunft über eigene Schwächen",
        "loesungen": [
         "andere Haltung",
         "neue Haltung",
         "Beschwerden als Information",
         "Beschwerden als kostenlose Auskunft",
         "Beschwerden nicht als Störung sehen",
         "Einstellung zu Beschwerden geändert"
        ]
       },
       "stelle": "Das Wichtigste war eine andere Haltung",
       "erklaerung": "Software wird ausdrücklich ausgeschlossen. Gemeint ist die neue Einstellung gegenüber Beschwerden.",
       "frage": "Ergänze deine Notiz auf dem Handzettel."
      },
      {
       "ort": "Vortrag — Abschnitt 2",
       "wer": "Frau",
       "text": "Fangen wir mit einer Zahl an, die mich selbst überrascht hat. Wir haben vor drei Jahren rund tausend Kunden befragt, die eine Bestellung storniert oder ein Möbelstück zurückgeschickt hatten. Mehr als die Hälfte von ihnen war unzufrieden gewesen, aber nur etwa jeder Zehnte hatte sich bei uns beschwert. Die anderen haben einfach nichts gesagt und sind nicht wiedergekommen. Und warum? Den Grund, den wir erwartet hatten, nämlich dass eine Beschwerde zu umständlich sei, nannten erstaunlich wenige. Die meisten sagten sinngemäß: Das bringt doch sowieso nichts. Sie hatten also nicht zu wenig Zeit, sondern kein Vertrauen, dass eine Beschwerde etwas verändert. Das war für uns eine unangenehme Erkenntnis, denn das hatten wir uns selbst zuzuschreiben. Wer einmal eine Standardantwort bekommen hat und danach nie wieder etwas hört, der schreibt beim nächsten Mal eben nicht mehr.",
       "notiz": {
        "titel": "Handzettel: Folie 2 — Warum Kunden sich nicht beschweren",
        "zeilen": [
         "Befragung von rund tausend Kunden nach Rücksendung oder Stornierung",
         "mehr als die Hälfte unzufrieden, nur jeder Zehnte hat sich beschwert"
        ],
        "feld": "Hauptgrund, sich nicht zu beschweren:",
        "frei": true,
        "muster": "kein Vertrauen, dass eine Beschwerde etwas ändert",
        "loesungen": [
         "kein Vertrauen",
         "bringt sowieso nichts",
         "fehlendes Vertrauen",
         "Beschwerde ändert nichts",
         "glauben nicht an Veränderung",
         "kein Vertrauen in Wirkung"
        ]
       },
       "stelle": "Die meisten sagten sinngemäß: Das bringt doch sowieso nichts",
       "erklaerung": "Der erwartete Grund, der Aufwand, wurde nur selten genannt.",
       "frage": "Ergänze deine Notiz auf dem Handzettel."
      },
      {
       "ort": "Vortrag — Abschnitt 3",
       "wer": "Frau",
       "text": "Nun könnte man sagen: Wer sich nicht beschwert, macht uns wenigstens keine Arbeit. Aber schauen wir uns die andere Seite an. Wir haben die Kunden, die sich beschwert hatten, ein Jahr lang beobachtet. Bei denen, deren Problem schnell und zu ihrer Zufriedenheit gelöst wurde, lag die Wiederkaufrate bei über sechzig Prozent. Das ist höher als bei Kunden, die nie ein Problem hatten. Die liegen bei uns bei ungefähr fünfundvierzig Prozent. Ich weiß, das klingt paradox. Aber wer erlebt hat, dass ihm geholfen wird, wenn etwas schiefgeht, der vertraut einem Unternehmen mehr als jemand, der diese Erfahrung nie gemacht hat. Wurde die Beschwerde dagegen schlecht bearbeitet, kaufte kaum noch jemand wieder bei uns. Eine Beschwerde ist also ein Wendepunkt. Danach ist der Kunde entweder treuer als vorher, oder er ist endgültig weg.",
       "notiz": {
        "titel": "Handzettel: Folie 3 — Wert einer gelösten Beschwerde",
        "zeilen": [
         "Kunden mit Beschwerde ein Jahr lang beobachtet",
         "Vergleich: Kunden ohne Problem kaufen zu etwa fünfundvierzig Prozent wieder"
        ],
        "feld": "Wiederkauf nach gut gelöster Beschwerde:",
        "frei": true,
        "muster": "über sechzig Prozent",
        "loesungen": [
         "über sechzig Prozent",
         "über 60 Prozent",
         "über 60 %",
         "mehr als 60 %",
         "sechzig Prozent",
         "60 %",
         "über 60%"
        ]
       },
       "stelle": "lag die Wiederkaufrate bei über sechzig Prozent",
       "erklaerung": "Fünfundvierzig Prozent ist nur der Vergleichswert für Kunden ohne Problem.",
       "frage": "Ergänze deine Notiz auf dem Handzettel."
      },
      {
       "ort": "Vortrag — Abschnitt 4",
       "wer": "Frau",
       "text": "Was haben wir also geändert? Der erste Punkt betrifft die ersten Sekunden eines Gesprächs. Früher haben unsere Mitarbeiter bei einer Beschwerde sofort erklärt, wie es zu dem Problem gekommen ist: Die Spedition war schuld, das Lager hatte einen Engpass, der Hersteller hat zu spät geliefert und so weiter. Das ist gut gemeint, kommt beim Kunden aber als Rechtfertigung an. Der Kunde hört nur: Wir sind nicht schuld. Heute gilt bei uns eine einfache Regel. Zuerst wird zugehört, ohne zu unterbrechen, und dann bedankt man sich dafür, dass der Kunde sich gemeldet hat. Erst danach kommt die Lösung. Erklärungen gibt es nur, wenn der Kunde ausdrücklich danach fragt. Das klingt banal, aber Sie glauben nicht, wie schwer es gerade erfahrenen Leuten fällt, sich nicht zu verteidigen. Wir haben das wochenlang in kurzen Rollenspielen geübt.",
       "notiz": {
        "titel": "Handzettel: Folie 4 — Die ersten Sekunden am Telefon",
        "zeilen": [
         "früher: sofort Ursachen erklärt",
         "Wirkung beim Kunden: wie eine Rechtfertigung"
        ],
        "feld": "Neue Regel für den Gesprächsbeginn:",
        "frei": true,
        "muster": "zuhören ohne zu unterbrechen, dann für die Meldung bedanken",
        "loesungen": [
         "zuhören und bedanken",
         "erst zuhören, dann bedanken",
         "zuhören, nicht unterbrechen",
         "zuhören ohne zu unterbrechen",
         "für die Meldung bedanken",
         "ausreden lassen und danken"
        ]
       },
       "stelle": "Zuerst wird zugehört, ohne zu unterbrechen",
       "erklaerung": "Ursachen zu erklären war die alte Praxis, die wie eine Rechtfertigung wirkte.",
       "frage": "Ergänze deine Notiz auf dem Handzettel."
      },
      {
       "ort": "Vortrag — Abschnitt 5",
       "wer": "Frau",
       "text": "Der zweite Punkt war für unsere Geschäftsführung anfangs eine echte Zumutung. Früher musste jeder Mitarbeiter im Kundenservice für jede Gutschrift, egal wie klein, die Zustimmung der Teamleitung einholen. Das hat oft zwei oder drei Tage gedauert, und der Kunde musste warten. Heute darf jeder Mitarbeiter selbst entscheiden, bis zu einem Betrag von zweihundert Euro, ohne jemanden zu fragen. Die Sorge war natürlich, dass wir Geld verschenken. Was passiert ist, war das Gegenteil. Die durchschnittliche Gutschrift ist sogar gesunken, weil die Kollegen am Telefon sofort und flexibel reagieren können. Oft reicht ein kostenloser Ersatzbeschlag oder ein Gutschein für die nächste Bestellung, wo früher nach drei Tagen Warten nur noch eine hohe Erstattung den Kunden beruhigt hat. Und nebenbei hat sich die Stimmung im Team verbessert, weil die Leute merken, dass man ihnen etwas zutraut.",
       "notiz": {
        "titel": "Handzettel: Folie 5 — Spielraum für die Mitarbeiter",
        "zeilen": [
         "früher: jede Gutschrift von der Teamleitung genehmigt",
         "Befürchtung der Geschäftsführung: Geld wird verschenkt"
        ],
        "feld": "Heute darf jeder Mitarbeiter selbst entscheiden bis:",
        "frei": true,
        "muster": "zweihundert Euro",
        "loesungen": [
         "zweihundert Euro",
         "200 Euro",
         "200 €",
         "200€",
         "zweihundert",
         "bis 200 Euro"
        ]
       },
       "stelle": "bis zu einem Betrag von zweihundert Euro",
       "erklaerung": "Gefragt ist die Grenze für eigene Entscheidungen, nicht die durchschnittliche Gutschrift.",
       "frage": "Ergänze deine Notiz auf dem Handzettel."
      },
      {
       "ort": "Vortrag — Abschnitt 6",
       "wer": "Frau",
       "text": "Kommen wir zur Zeit. Viele Unternehmen versprechen, Beschwerden innerhalb von vierundzwanzig Stunden zu beantworten. Wir haben uns bewusst gegen so ein Versprechen entschieden, weil eine schnelle Antwort ohne Lösung niemandem hilft. Eine automatische Eingangsbestätigung bekommt jeder Kunde sofort, das schon. Aber unser eigentliches Ziel ist ein anderes: Achtzig Prozent aller Beschwerden sollen innerhalb von drei Werktagen abschließend gelöst sein, also erledigt und nicht bloß beantwortet. Das messen wir jede Woche, und das Ergebnis hängt für alle sichtbar im Büro. Im Moment liegen wir bei vierundsiebzig Prozent, also noch etwas unter dem Ziel. Der Rest sind meistens Fälle, bei denen ein Techniker zum Kunden fahren muss, und da sind wir auf Termine von Partnerfirmen angewiesen. Daran arbeiten wir gerade, aber das geht nicht von heute auf morgen.",
       "notiz": {
        "titel": "Handzettel: Folie 6 — Bearbeitungszeit",
        "zeilen": [
         "kein Versprechen einer Antwort in vierundzwanzig Stunden",
         "Eingangsbestätigung sofort und automatisch"
        ],
        "feld": "Ziel:",
        "frei": true,
        "muster": "achtzig Prozent der Beschwerden in drei Werktagen abschließend gelöst",
        "loesungen": [
         "achtzig Prozent in drei Werktagen gelöst",
         "80 % in 3 Werktagen gelöst",
         "80 Prozent in drei Tagen",
         "80 % innerhalb von 3 Werktagen",
         "achtzig Prozent in drei Tagen gelöst",
         "80 % in drei Werktagen"
        ]
       },
       "stelle": "Achtzig Prozent aller Beschwerden sollen innerhalb von drei Werktagen abschließend gelöst sein",
       "erklaerung": "Vierundsiebzig Prozent ist der aktuelle Stand, nicht das Ziel.",
       "frage": "Ergänze deine Notiz auf dem Handzettel."
      },
      {
       "ort": "Vortrag — Abschnitt 7",
       "wer": "Frau",
       "text": "Der dritte Punkt ist vielleicht der wichtigste. Eine Beschwerde zu lösen, ist gut. Aber wenn dieselbe Beschwerde jede Woche zwanzigmal kommt, haben wir nichts gelernt. Deshalb wird bei uns jede Beschwerde mit einem kurzen Stichwort versehen, zum Beispiel Lieferung, Montageanleitung oder Farbabweichung. Einmal im Monat setze ich mich mit den Leitern von Lager, Einkauf und Produktentwicklung zusammen, und wir gehen die fünf häufigsten Stichworte durch. Wichtig ist dabei: Es geht nicht darum, Schuldige zu suchen. Jeder Bereich muss bis zum nächsten Treffen eine Maßnahme vorschlagen, die verhindert, dass das Problem wieder auftritt. Am Anfang waren diese Treffen ziemlich angespannt, weil sich jeder angegriffen gefühlt hat. Heute kommen die Kollegen sogar mit eigenen Ideen, und der Einkauf hat schon zwei Lieferanten gewechselt, weil die Zahlen so eindeutig waren.",
       "notiz": {
        "titel": "Handzettel: Folie 7 — Beschwerden auswerten",
        "zeilen": [
         "jede Beschwerde bekommt ein Stichwort",
         "keine Suche nach Schuldigen"
        ],
        "feld": "Monatliches Treffen mit Lager, Einkauf, Produktentwicklung:",
        "frei": true,
        "muster": "die fünf häufigsten Stichworte besprechen, jeder Bereich schlägt eine Maßnahme vor",
        "loesungen": [
         "fünf häufigste Stichworte besprechen",
         "die fünf häufigsten Beschwerdegründe",
         "5 häufigste Stichworte",
         "häufigste Beschwerden durchgehen",
         "Maßnahmen zu den häufigsten Beschwerden"
        ]
       },
       "stelle": "wir gehen die fünf häufigsten Stichworte durch",
       "erklaerung": "Gefragt ist der Inhalt des Treffens: die häufigsten Gründe und daraus folgende Maßnahmen.",
       "frage": "Ergänze deine Notiz auf dem Handzettel."
      },
      {
       "ort": "Vortrag — Abschnitt 8",
       "wer": "Frau",
       "text": "Ein Beispiel, damit das nicht so abstrakt bleibt. Vor zwei Jahren war das häufigste Stichwort mit Abstand Lieferung. Die meisten bei uns dachten zuerst, unsere Spedition sei zu langsam, und der Einkauf hatte schon Angebote von anderen Speditionen eingeholt. Als wir uns die Fälle genauer angeschaut haben, stellte sich etwas anderes heraus. Die Ware kam in den allermeisten Fällen pünktlich. Die Kunden haben sich beschwert, weil sie nicht wussten, wann sie kommt. Wir hatten nur einen Zeitraum von zwei Wochen genannt, und die Leute haben sich Urlaub genommen und tagelang umsonst gewartet. Seitdem bekommen die Kunden zwei Tage vorher ein Zeitfenster von vier Stunden, per Nachricht aufs Handy. Die Beschwerden zur Lieferung sind danach um mehr als die Hälfte zurückgegangen, ohne dass wir die Spedition gewechselt haben.",
       "notiz": {
        "titel": "Handzettel: Folie 8 — Beispiel: die Lieferung",
        "zeilen": [
         "häufigstes Stichwort vor zwei Jahren: Lieferung",
         "erste Vermutung: Spedition zu langsam"
        ],
        "feld": "Eigentliche Ursache der Beschwerden:",
        "frei": true,
        "muster": "Kunden wussten nicht, wann die Ware kommt, Zeitraum zu ungenau",
        "loesungen": [
         "unklarer Liefertermin",
         "Kunden wussten nicht, wann die Ware kommt",
         "fehlende Information zum Liefertermin",
         "ungenauer Lieferzeitraum",
         "Zeitraum zu ungenau",
         "Lieferzeitpunkt unbekannt"
        ]
       },
       "stelle": "weil sie nicht wussten, wann sie kommt",
       "erklaerung": "Die Ware kam meist pünktlich. Das Problem war die fehlende Planbarkeit für die Kunden.",
       "frage": "Ergänze deine Notiz auf dem Handzettel."
      },
      {
       "ort": "Vortrag — Abschnitt 9",
       "wer": "Frau",
       "text": "Jetzt höre ich schon die Frage, die bei jedem Vortrag kommt: Und was ist mit den Kunden, die einfach nur etwas umsonst haben wollen? Die gibt es natürlich, das will ich gar nicht beschönigen. Nach unserer Auswertung machen sie aber weniger als fünf Prozent aller Fälle aus. Wir haben deshalb entschieden, unsere Abläufe nicht nach diesen wenigen auszurichten. Wenn ein Mitarbeiter den Eindruck hat, dass jemand das System ausnutzt, kann er den Fall an eine erfahrene Kollegin abgeben, die sich das genauer anschaut und gegebenenfalls auch Nein sagt. Alle anderen Kunden behandeln wir mit Vertrauen. Es wäre doch absurd, fünfundneunzig Prozent ehrlicher Kunden mit Misstrauen zu begegnen, nur um die wenigen anderen zu erwischen. Und, ehrlich gesagt, ein paar Gutscheine zu viel kosten uns weniger als ein einziger verärgerter Stammkunde.",
       "notiz": {
        "titel": "Handzettel: Folie 9 — Unberechtigte Beschwerden",
        "zeilen": [
         "Anteil der Kunden, die ausnutzen: unter fünf Prozent",
         "Abläufe nicht an dieser Gruppe ausrichten"
        ],
        "feld": "Verdachtsfälle werden:",
        "frei": true,
        "muster": "an eine erfahrene Kollegin zur genaueren Prüfung abgegeben",
        "loesungen": [
         "an erfahrene Kollegin abgegeben",
         "von einer erfahrenen Kollegin geprüft",
         "an eine erfahrene Mitarbeiterin weitergegeben",
         "weitergeleitet und genauer geprüft",
         "an Spezialistin weitergeben"
        ]
       },
       "stelle": "kann er den Fall an eine erfahrene Kollegin abgeben",
       "erklaerung": "Die fünf Prozent sind der Anteil, gefragt ist das Vorgehen im Verdachtsfall.",
       "frage": "Ergänze deine Notiz auf dem Handzettel."
      },
      {
       "ort": "Vortrag — Abschnitt 10",
       "wer": "Frau",
       "text": "Lassen Sie mich zum Schluss kommen. Was hat das alles nach zwei Jahren gebracht? Die Zahl der Beschwerden ist, und das mag Sie überraschen, sogar leicht gestiegen. Das sehen wir aber positiv, denn es bedeutet, dass sich mehr unzufriedene Kunden melden, statt einfach zu verschwinden. Gleichzeitig ist die Zahl der Rücksendungen um ein Viertel zurückgegangen, und das spart uns jedes Jahr einen hohen sechsstelligen Betrag an Transport und Aufbereitung. Rücksendungen sind im Möbelhandel nämlich sehr teuer, ein zurückgeschicktes Sofa kostet uns mehr, als wir daran verdient haben. Mein Rat an Sie wäre deshalb: Fangen Sie nicht mit einer Software an, sondern mit dem monatlichen Treffen. Das kostet nichts außer einer Stunde Zeit im Monat. Vielen Dank für Ihre Aufmerksamkeit, ich freue mich auf Ihre Fragen.",
       "notiz": {
        "titel": "Handzettel: Folie 10 — Ergebnisse nach zwei Jahren",
        "zeilen": [
         "Zahl der Beschwerden leicht gestiegen, positiv bewertet",
         "Grund: mehr unzufriedene Kunden melden sich"
        ],
        "feld": "Wichtigster wirtschaftlicher Effekt:",
        "frei": true,
        "muster": "ein Viertel weniger Rücksendungen",
        "loesungen": [
         "ein Viertel weniger Rücksendungen",
         "Rücksendungen um ein Viertel gesunken",
         "25 % weniger Rücksendungen",
         "weniger Rücksendungen",
         "Rücksendungen um 25 Prozent gesunken"
        ]
       },
       "stelle": "die Zahl der Rücksendungen um ein Viertel zurückgegangen",
       "erklaerung": "Der Anstieg der Beschwerden ist kein wirtschaftlicher Effekt. Gespart wird bei den Rücksendungen.",
       "frage": "Ergänze deine Notiz auf dem Handzettel."
      }
     ]
    },
    {
     "id": "c1bh3s2",
     "titel": "Betriebsversammlung: Arbeitsschutz im Lager und im Büro",
     "aufgaben": [
      {
       "ort": "Vortrag — Abschnitt 1",
       "wer": "Mann",
       "text": "Guten Morgen zusammen. Für die, die mich noch nicht kennen: Ich bin Thomas Brenner, seit Juli die neue Fachkraft für Arbeitssicherheit hier bei Wessel Getränke. Die Geschäftsleitung hat mich gebeten, heute zwanzig Minuten über Arbeitsschutz zu sprechen. Ich weiß, bei dem Wort schalten viele innerlich ab, weil sie an Unterweisungen denken, bei denen man am Ende nur unterschreibt, dass man dabei war. Genau das will ich heute nicht. Der Anlass ist leider ein ernster. Im September ist ein Kollege im Lager von einer Leiter gestürzt und hat sich das Becken gebrochen. Er ist inzwischen wieder zu Hause, aber noch lange nicht arbeitsfähig, und er hat mir erlaubt, das hier zu erzählen. Ich möchte mit Ihnen besprechen, wie wir so etwas künftig verhindern, und ich möchte vor allem von Ihnen hören, wo es im Alltag hakt.",
       "notiz": {
        "titel": "Handzettel: Folie 1 — Anlass",
        "zeilen": [
         "Redner: neue Fachkraft für Arbeitssicherheit, seit Juli",
         "kein Pflichttermin zum Unterschreiben"
        ],
        "feld": "Anlass:",
        "frei": true,
        "muster": "Sturz eines Kollegen von einer Leiter im September, Beckenbruch",
        "loesungen": [
         "Sturz von der Leiter",
         "Unfall im September",
         "Kollege von Leiter gestürzt",
         "Beckenbruch nach Sturz",
         "Leitersturz im Lager"
        ]
       },
       "stelle": "Im September ist ein Kollege im Lager von einer Leiter gestürzt",
       "erklaerung": "Der Redner ist zwar neu, der Anlass ist aber der Unfall im September.",
       "frage": "Ergänze deine Notiz auf dem Handzettel."
      },
      {
       "ort": "Vortrag — Abschnitt 2",
       "wer": "Mann",
       "text": "Ein paar Zahlen zur Einordnung. Im vergangenen Jahr hatten wir hier am Standort einundzwanzig meldepflichtige Arbeitsunfälle, also Unfälle, nach denen jemand mehr als drei Tage ausgefallen ist. Das klingt erst einmal nicht dramatisch, bei rund dreihundert Beschäftigten. Wenn man das aber mit dem Durchschnitt unserer Branche vergleicht, liegen wir ungefähr ein Drittel darüber. Und das, obwohl wir in den letzten Jahren viel Geld in neue Regale und Fahrzeuge gesteckt haben. Insgesamt sind durch diese Unfälle über vierhundert Arbeitstage verloren gegangen. Das sind Kollegen, die fehlen, und Kollegen, die für sie einspringen müssen, oft mit Überstunden und Wochenendschichten. Arbeitsschutz hat also auch mit der Frage zu tun, wie viele Überstunden wir alle machen. Und damit betrifft er jeden hier im Raum, auch die, die noch nie einen Unfall hatten.",
       "notiz": {
        "titel": "Handzettel: Folie 2 — Unfallzahlen im letzten Jahr",
        "zeilen": [
         "einundzwanzig meldepflichtige Unfälle bei rund dreihundert Beschäftigten",
         "über vierhundert Arbeitstage verloren"
        ],
        "feld": "Vergleich mit der Branche:",
        "frei": true,
        "muster": "etwa ein Drittel über dem Durchschnitt",
        "loesungen": [
         "ein Drittel über dem Durchschnitt",
         "etwa ein Drittel mehr",
         "ein Drittel höher als die Branche",
         "über dem Branchendurchschnitt",
         "33 % über Durchschnitt"
        ]
       },
       "stelle": "liegen wir ungefähr ein Drittel darüber",
       "erklaerung": "„darüber“ bezieht sich auf den Durchschnitt der Branche.",
       "frage": "Ergänze deine Notiz auf dem Handzettel."
      },
      {
       "ort": "Vortrag — Abschnitt 3",
       "wer": "Mann",
       "text": "Jetzt würden die meisten von Ihnen vermutlich tippen, dass die meisten Unfälle mit Gabelstaplern passieren. Das ist verständlich, denn Staplerunfälle sind spektakulär, und man redet lange darüber. Bei uns waren es aber nur drei von einundzwanzig. Die mit Abstand häufigste Ursache war ganz banal: Stolpern, Rutschen und Stürzen. Fast die Hälfte aller Unfälle. Nasse Böden im Leergutbereich, Folienreste auf dem Gang, eine Palette, die irgendwo im Weg steht. Und eben Leitern, die nicht richtig stehen, oder gar keine Leitern, sondern Getränkekisten, auf die man sich mal eben stellt, weil die Leiter gerade am anderen Ende der Halle ist. Ich habe in meinen ersten zwei Wochen hier mehr als zehnmal gesehen, dass jemand auf Kisten steigt. Ich sage das nicht als Vorwurf. Ich sage das, weil es zeigt, dass unsere Abläufe so etwas offenbar nahelegen.",
       "notiz": {
        "titel": "Handzettel: Folie 3 — Häufigste Unfallursache",
        "zeilen": [
         "Staplerunfälle: drei von einundzwanzig",
         "Beispiele: nasse Böden, Folienreste, Kisten statt Leitern"
        ],
        "feld": "Häufigste Ursache:",
        "frei": true,
        "muster": "Stolpern, Rutschen, Stürzen, fast die Hälfte aller Unfälle",
        "loesungen": [
         "Stolpern, Rutschen, Stürzen",
         "Stürze",
         "Stolpern und Stürzen",
         "Rutschen und Stürzen",
         "fast die Hälfte durch Stolpern"
        ]
       },
       "stelle": "Die mit Abstand häufigste Ursache war ganz banal",
       "erklaerung": "Die Stapler sind die naheliegende, aber falsche Vermutung.",
       "frage": "Ergänze deine Notiz auf dem Handzettel."
      },
      {
       "ort": "Vortrag — Abschnitt 4",
       "wer": "Mann",
       "text": "Trotzdem ein Wort zu den Staplern, weil die Folgen dort meistens schwerer sind. Die drei Unfälle im letzten Jahr hatten eines gemeinsam. Es waren keine technischen Defekte, und die Fahrer waren alle erfahren, einer fährt seit über zwanzig Jahren. In allen drei Fällen ist ein Fußgänger in einen Gang gelaufen, in dem gerade ein Stapler rangiert hat. Wir werden deshalb im Hauptlager die Wege neu einteilen. Ab dem Frühjahr gibt es farbig markierte Fußwege, die man nur an bestimmten Stellen überqueren darf, und an den Kreuzungen werden blaue Warnleuchten installiert, die den Stapler schon auf den Boden projizieren, bevor er um die Ecke kommt. Das haben wir uns in einem Partnerbetrieb in Bremen angesehen, und dort sind die Beinahezusammenstöße deutlich zurückgegangen. Die Kosten dafür hat die Geschäftsleitung schon freigegeben.",
       "notiz": {
        "titel": "Handzettel: Folie 4 — Gabelstapler",
        "zeilen": [
         "Folgen bei Staplerunfällen meist schwerer",
         "keine technischen Defekte, erfahrene Fahrer"
        ],
        "feld": "Gemeinsame Ursache der drei Staplerunfälle:",
        "frei": true,
        "muster": "Fußgänger lief in einen Gang, in dem ein Stapler rangierte",
        "loesungen": [
         "Fußgänger im Gang",
         "Fußgänger liefen in Fahrweg",
         "Zusammenstoß mit Fußgängern",
         "Fußgänger und Stapler im selben Gang",
         "Fußgänger nicht getrennt vom Staplerverkehr"
        ]
       },
       "stelle": "ist ein Fußgänger in einen Gang gelaufen",
       "erklaerung": "Technik und fehlende Erfahrung werden ausdrücklich ausgeschlossen.",
       "frage": "Ergänze deine Notiz auf dem Handzettel."
      },
      {
       "ort": "Vortrag — Abschnitt 5",
       "wer": "Mann",
       "text": "Nächster Punkt: Schutzausrüstung. Sicherheitsschuhe sind im Lager Pflicht, das wissen alle. Ich habe in den letzten Wochen aber mit vielen von Ihnen gesprochen, und ich habe immer wieder dieselbe Klage gehört. Die Schuhe, die wir bisher ausgeben, sind schwer, im Sommer heiß, und für Leute mit breiten Füßen gibt es kaum passende Größen. Mit dem Ergebnis, dass manche ihre eigenen, alten Schuhe tragen, die längst keinen Schutz mehr bieten, oder die Schutzkappe ist so abgenutzt, dass sie nichts mehr bringt. Wir haben deshalb mit einem Händler vereinbart, dass jeder Mitarbeiter künftig aus sechs Modellen wählen kann, darunter auch leichtere und atmungsaktive. Außerdem kommt zweimal im Jahr ein Berater ins Haus, der die Füße vermisst und die Schuhe anpasst. Die Kosten übernimmt komplett die Firma, auch für Einlagen, wenn jemand welche braucht.",
       "notiz": {
        "titel": "Handzettel: Folie 5 — Schutzausrüstung",
        "zeilen": [
         "Sicherheitsschuhe im Lager Pflicht",
         "Klagen: schwer, heiß, schlechte Passform"
        ],
        "feld": "Neue Regelung bei Sicherheitsschuhen:",
        "frei": true,
        "muster": "freie Wahl aus sechs Modellen, Berater zweimal im Jahr, Firma zahlt",
        "loesungen": [
         "Auswahl aus sechs Modellen",
         "sechs Modelle zur Wahl",
         "6 Modelle",
         "freie Wahl unter sechs Schuhen",
         "Wahl zwischen 6 Modellen"
        ]
       },
       "stelle": "aus sechs Modellen wählen kann",
       "erklaerung": "Die Klagen sind der Grund. Neu ist die Auswahl, dazu Beratung und volle Kostenübernahme.",
       "frage": "Ergänze deine Notiz auf dem Handzettel."
      },
      {
       "ort": "Vortrag — Abschnitt 6",
       "wer": "Mann",
       "text": "Jetzt komme ich zu einem Punkt, der mir besonders am Herzen liegt. Für jeden Unfall, der passiert, gibt es nach aller Erfahrung viele Situationen, in denen fast etwas passiert wäre. Eine Palette rutscht, aber fällt nicht. Ein Stapler bremst im letzten Moment. Jemand rutscht aus und kann sich gerade noch am Regal festhalten. Diese Beinaheunfälle sind wertvoll, weil wir aus ihnen lernen können, bevor jemand verletzt ist. Bisher wurden sie bei uns praktisch nie gemeldet, weil viele Angst hatten, dass sie dann Ärger bekommen oder als ungeschickt gelten. Ab sofort gibt es deshalb an jedem Ausgang einen Briefkasten und einen Code für das Handy, mit dem man einen Beinaheunfall anonym melden kann. Ich verspreche Ihnen, dass niemand dafür einen Nachteil hat. Jede Meldung wird innerhalb einer Woche beantwortet, am schwarzen Brett, damit alle sehen, was daraus geworden ist.",
       "notiz": {
        "titel": "Handzettel: Folie 6 — Beinaheunfälle melden",
        "zeilen": [
         "Beinaheunfälle: lernen, bevor jemand verletzt ist",
         "bisher kaum gemeldet aus Angst vor Ärger"
        ],
        "feld": "Neue Möglichkeit zur Meldung:",
        "frei": true,
        "muster": "anonym per Briefkasten am Ausgang oder Code für das Handy",
        "loesungen": [
         "anonym melden",
         "anonym per Briefkasten oder Handy",
         "Briefkasten an jedem Ausgang",
         "anonyme Meldung",
         "Briefkasten und Code fürs Handy"
        ]
       },
       "stelle": "mit dem man einen Beinaheunfall anonym melden kann",
       "erklaerung": "Die Angst vor Ärger ist der Grund für das neue, anonyme Verfahren.",
       "frage": "Ergänze deine Notiz auf dem Handzettel."
      },
      {
       "ort": "Vortrag — Abschnitt 7",
       "wer": "Mann",
       "text": "Jetzt denken die Kollegen aus der Verwaltung vielleicht, das alles betrifft sie nicht. Aber auch im Büro gibt es Gefährdungen, nur sind sie weniger sichtbar. Ich habe im Oktober alle Büroarbeitsplätze begangen, insgesamt achtundfünfzig. Das Ergebnis: An mehr als der Hälfte stand der Bildschirm so, dass man den Kopf dauerhaft drehen oder nach oben neigen musste, meistens weil der Monitor neben dem Laptop steht statt direkt davor. Das merkt man nicht an einem Tag, aber nach ein paar Jahren im Nacken und im Rücken. Die gute Nachricht ist, dass sich das meiste ohne Kosten beheben lässt. Ich habe mit jedem, der da war, fünf Minuten lang Stuhl und Bildschirm eingestellt. Wer damals im Urlaub oder krank war, kann sich gern bei mir melden. Das dauert wirklich nicht lange, und Ihr Rücken wird es Ihnen danken.",
       "notiz": {
        "titel": "Handzettel: Folie 7 — Arbeitsplätze im Büro",
        "zeilen": [
         "Begehung aller Büroarbeitsplätze im Oktober",
         "Folgen erst nach Jahren: Nacken, Rücken"
        ],
        "feld": "Häufigstes Problem im Büro:",
        "frei": true,
        "muster": "Bildschirm falsch aufgestellt, Kopf dauerhaft gedreht oder geneigt",
        "loesungen": [
         "Bildschirm falsch aufgestellt",
         "falsche Bildschirmposition",
         "Bildschirm falsch platziert",
         "Kopf gedreht oder geneigt",
         "Monitor falsch eingestellt"
        ]
       },
       "stelle": "stand der Bildschirm so, dass man den Kopf dauerhaft drehen",
       "erklaerung": "Nacken und Rücken sind die Folgen, gefragt ist die Ursache.",
       "frage": "Ergänze deine Notiz auf dem Handzettel."
      },
      {
       "ort": "Vortrag — Abschnitt 8",
       "wer": "Mann",
       "text": "Ein Thema, über das wir bisher kaum gesprochen haben, ist psychische Belastung. Seit einigen Jahren ist jeder Arbeitgeber verpflichtet, auch diese Belastungen zu beurteilen, also Zeitdruck, ständige Unterbrechungen oder Konflikte mit Kunden. Wir haben dazu im Sommer eine anonyme Befragung gemacht, und die Beteiligung war mit gut siebzig Prozent erfreulich hoch. Danke an alle, die mitgemacht haben. Ein Ergebnis hat mich besonders beschäftigt. In der Auslieferung sagen fast zwei Drittel der Fahrer, dass sie ihre Touren regelmäßig nicht in der vorgesehenen Zeit schaffen. Das ist eine Frage der Gesundheit, aber eben auch der Sicherheit. Wer unter Zeitdruck fährt, fährt auch gefährlicher, und wer beim Ausladen hetzt, verletzt sich eher. Wir schauen uns deshalb gemeinsam mit der Disposition die Tourenplanung an, und zwar mit zwei Fahrern, die selbst entscheiden, wo es nicht passt.",
       "notiz": {
        "titel": "Handzettel: Folie 8 — Psychische Belastung",
        "zeilen": [
         "Pflicht: auch psychische Belastung beurteilen",
         "anonyme Befragung im Sommer, Beteiligung gut siebzig Prozent"
        ],
        "feld": "Auffälligstes Ergebnis der Befragung:",
        "frei": true,
        "muster": "fast zwei Drittel der Fahrer schaffen ihre Touren nicht in der vorgesehenen Zeit",
        "loesungen": [
         "Zeitdruck bei Fahrern",
         "Fahrer schaffen Touren nicht",
         "zwei Drittel der Fahrer unter Zeitdruck",
         "Touren zu knapp geplant",
         "fast zwei Drittel der Fahrer zu knapp"
        ]
       },
       "stelle": "fast zwei Drittel der Fahrer",
       "erklaerung": "Die siebzig Prozent beziehen sich auf die Beteiligung, nicht auf das Ergebnis.",
       "frage": "Ergänze deine Notiz auf dem Handzettel."
      },
      {
       "ort": "Vortrag — Abschnitt 9",
       "wer": "Mann",
       "text": "Ein weiterer Punkt betrifft die Kollegen, die neu zu uns kommen. Von den einundzwanzig Unfällen sind sieben in den ersten drei Monaten nach der Einstellung passiert, und vier davon bei Leiharbeitern in der Sommersaison. Das ist kein Zufall. Wer neu ist, kennt die Wege nicht, weiß nicht, wo es rutschig ist, und traut sich oft nicht zu fragen, weil er keinen schlechten Eindruck machen will. Bisher bestand die Einweisung bei uns aus einem Video und einer Unterschrift. Ab sofort bekommt jeder Neue für die ersten zwei Wochen einen festen Paten aus seiner Schicht, der ihm alles zeigt und an den er sich mit jeder Frage wenden kann. Das gilt ausdrücklich auch für Leiharbeiter, selbst wenn sie nur sechs Wochen bleiben. Die Paten bekommen dafür eine kleine Zulage, und sie werden vorher von mir einen halben Tag lang geschult.",
       "notiz": {
        "titel": "Handzettel: Folie 9 — Neue Mitarbeiter und Leiharbeiter",
        "zeilen": [
         "sieben Unfälle in den ersten drei Monaten nach Einstellung",
         "bisher: Video und Unterschrift"
        ],
        "feld": "Neu für alle Neueinsteiger:",
        "frei": true,
        "muster": "fester Pate aus der eigenen Schicht für die ersten zwei Wochen",
        "loesungen": [
         "fester Pate",
         "Pate für zwei Wochen",
         "Paten aus der Schicht",
         "Patenschaft für die ersten 2 Wochen",
         "persönlicher Ansprechpartner aus der Schicht"
        ]
       },
       "stelle": "einen festen Paten aus seiner Schicht",
       "erklaerung": "Video und Unterschrift sind die alte Einweisung.",
       "frage": "Ergänze deine Notiz auf dem Handzettel."
      },
      {
       "ort": "Vortrag — Abschnitt 10",
       "wer": "Mann",
       "text": "Zum Schluss möchte ich zusammenfassen, was sich konkret ändert. Ab Januar wird es keine Unterweisungen mehr geben, bei denen dreißig Leute in der Kantine sitzen und einen Vortrag hören, so wie heute. Ich weiß, dass dabei nach zehn Minuten die Hälfte auf das Handy schaut, und ich kann es niemandem verdenken. Stattdessen gehen die Schichtleiter einmal im Monat für eine Viertelstunde mit ihrer Gruppe durch den eigenen Bereich und besprechen direkt vor Ort, was ihnen aufgefallen ist. Ich begleite diese Rundgänge, wann immer ich kann. Und ich bitte Sie: Wenn Sie etwas sehen, das gefährlich ist, warten Sie nicht auf die nächste Runde. Sprechen Sie mich an, ich bin fast jeden Tag in der Halle, und mein Büro ist neben der Werkstatt. Vielen Dank, dass Sie mir zugehört haben.",
       "notiz": {
        "titel": "Handzettel: Folie 10 — Was sich ab Januar ändert",
        "zeilen": [
         "keine Unterweisungen mehr in der Kantine",
         "Redner begleitet die Rundgänge, wenn möglich"
        ],
        "feld": "Neue Form der Unterweisung:",
        "frei": true,
        "muster": "monatlicher Rundgang der Schichtleiter mit ihrer Gruppe vor Ort",
        "loesungen": [
         "monatlicher Rundgang vor Ort",
         "Rundgang mit dem Schichtleiter",
         "einmal im Monat vor Ort",
         "Viertelstunde Rundgang pro Monat",
         "Besprechung direkt im eigenen Bereich"
        ]
       },
       "stelle": "gehen die Schichtleiter einmal im Monat für eine Viertelstunde mit ihrer Gruppe",
       "erklaerung": "Die Kantine steht für die alte Form, neu ist der Rundgang im eigenen Bereich.",
       "frage": "Ergänze deine Notiz auf dem Handzettel."
      }
     ]
    },
    {
     "id": "c1bh3s3",
     "titel": "Personalforum: Wie ein Mittelständler zur bekannten Arbeitgebermarke wurde",
     "aufgaben": [
      {
       "ort": "Vortrag — Abschnitt 1",
       "wer": "Frau",
       "text": "Guten Tag zusammen. Ich bin Personalleiterin bei Kerber Pumpen in Hollstedt. Wir bauen Industriepumpen, haben knapp neunhundert Mitarbeiter, und bis vor vier Jahren kannte uns außerhalb unserer Branche praktisch niemand. In Hollstedt selbst wusste man, dass es uns gibt, aber schon in der nächsten Kreisstadt nicht mehr. Solange genug Bewerbungen kamen, war das kein Problem, und ehrlich gesagt hat sich auch niemand darüber Gedanken gemacht. Vor vier Jahren hatten wir dann zum ersten Mal die Situation, dass wir für elf Ausbildungsplätze nur sieben Bewerbungen bekommen haben, und davon waren zwei nicht geeignet. Und für eine Stelle als Konstrukteur hat sich über acht Monate lang kein einziger passender Kandidat gemeldet. Da war uns klar, dass wir etwas ändern müssen, und zwar nicht nur in der Personalabteilung.",
       "notiz": {
        "titel": "Handzettel: Folie 1 — Ausgangslage",
        "zeilen": [
         "Industriepumpen, knapp neunhundert Mitarbeiter",
         "außerhalb der Branche kaum bekannt"
        ],
        "feld": "Auslöser vor vier Jahren:",
        "frei": true,
        "muster": "nur sieben Bewerbungen für elf Ausbildungsplätze",
        "loesungen": [
         "zu wenige Bewerbungen",
         "sieben Bewerbungen für elf Ausbildungsplätze",
         "7 Bewerbungen auf 11 Plätze",
         "Ausbildungsplätze nicht besetzt",
         "Bewerbermangel"
        ]
       },
       "stelle": "für elf Ausbildungsplätze nur sieben Bewerbungen",
       "erklaerung": "Die geringe Bekanntheit war lange kein Problem. Ausgelöst hat die Arbeit der Mangel an Bewerbungen.",
       "frage": "Ergänze deine Notiz auf dem Handzettel."
      },
      {
       "ort": "Vortrag — Abschnitt 2",
       "wer": "Frau",
       "text": "Bevor ich erzähle, was wir gemacht haben, kurz zum Begriff. Wenn von Arbeitgebermarke die Rede ist, denken viele an Werbung, an schöne Fotos und einen flotten Spruch. Das ist aber höchstens die Oberfläche. Für mich ist die Arbeitgebermarke das Bild, das Menschen im Kopf haben, wenn sie an uns als Arbeitgeber denken. Und dieses Bild entsteht nicht durch Plakate, sondern vor allem dadurch, was unsere eigenen Leute abends beim Essen oder im Sportverein über uns erzählen. Man kann es also nicht einfach erfinden und einer Agentur in Auftrag geben. Man kann nur herausfinden, was tatsächlich gut ist, und dafür sorgen, dass es sichtbar wird. Wenn das Bild, das man nach außen zeigt, nicht stimmt, merken neue Leute das spätestens nach drei Wochen, und dann sind sie schneller wieder weg, als sie gekommen sind.",
       "notiz": {
        "titel": "Handzettel: Folie 2 — Was ist eine Arbeitgebermarke?",
        "zeilen": [
         "nicht: Werbung, Fotos, Spruch",
         "kann nicht erfunden oder bei einer Agentur bestellt werden"
        ],
        "feld": "Wie das Bild vom Arbeitgeber vor allem entsteht:",
        "frei": true,
        "muster": "durch das, was die eigenen Mitarbeiter privat über die Firma erzählen",
        "loesungen": [
         "durch Erzählungen der Mitarbeiter",
         "Mitarbeiter erzählen privat",
         "Mundpropaganda der Mitarbeiter",
         "was Mitarbeiter über uns erzählen",
         "Gespräche der eigenen Leute"
        ]
       },
       "stelle": "was unsere eigenen Leute abends beim Essen oder im Sportverein über uns erzählen",
       "erklaerung": "Plakate und Agentur werden ausdrücklich ausgeschlossen.",
       "frage": "Ergänze deine Notiz auf dem Handzettel."
      },
      {
       "ort": "Vortrag — Abschnitt 3",
       "wer": "Frau",
       "text": "Unser erster Schritt war deshalb keine Kampagne, sondern eine Befragung. Wir wollten wissen, warum Leute bei uns bleiben, und zwar nicht in einer Umfrage im Internet mit Kästchen zum Ankreuzen. Wir haben stattdessen sechzig Einzelgespräche geführt, quer durch alle Bereiche, vom Auszubildenden in der Montage bis zum Vertriebsleiter. Wichtig war uns, dass die Gespräche nicht von Führungskräften geführt werden, denn dem eigenen Chef erzählt man nicht unbedingt, was man wirklich denkt. Wir haben dafür zwei Studentinnen einer Hochschule in der Region gewonnen, die das im Rahmen ihrer Abschlussarbeit gemacht haben. Den Leuten wurde zugesichert, dass nichts mit ihrem Namen weitergegeben wird. Ich glaube, nur deshalb haben sie so offen geredet. Manche Gespräche haben über eine Stunde gedauert, obwohl wir zwanzig Minuten eingeplant hatten.",
       "notiz": {
        "titel": "Handzettel: Folie 3 — Gespräche mit den eigenen Leuten",
        "zeilen": [
         "erster Schritt: keine Kampagne",
         "sechzig Einzelgespräche quer durch alle Bereiche"
        ],
        "feld": "Wer die Gespräche geführt hat:",
        "frei": true,
        "muster": "zwei Studentinnen einer Hochschule aus der Region, keine Führungskräfte",
        "loesungen": [
         "zwei Studentinnen",
         "Studentinnen der Hochschule",
         "externe Studentinnen",
         "Studentinnen, keine Führungskräfte",
         "zwei Studentinnen aus der Region"
        ]
       },
       "stelle": "Wir haben dafür zwei Studentinnen einer Hochschule in der Region gewonnen",
       "erklaerung": "Führungskräfte wurden bewusst nicht eingesetzt, damit offen geredet wird.",
       "frage": "Ergänze deine Notiz auf dem Handzettel."
      },
      {
       "ort": "Vortrag — Abschnitt 4",
       "wer": "Frau",
       "text": "Und was kam heraus? Wir hatten erwartet, dass die Leute über das Gehalt reden, über die Kantine, vielleicht über unsere Betriebsrente. Das kam auch vor, aber ganz am Rand. Was mit Abstand am häufigsten genannt wurde, war etwas, das wir selbst nie als Stärke gesehen hätten. Die Leute sagten: Hier kann ich etwas bauen, das ich am Ende sehe und anfassen kann, und ich weiß, wofür es gebraucht wird. Unsere Pumpen stecken in Kläranlagen, in Feuerwehrfahrzeugen, in der Trinkwasserversorgung ganzer Städte. Viele unserer Mitarbeiter sind darauf stolz, haben das aber nie jemandem erzählt, weil sie dachten, das sei selbstverständlich. Ein Schweißer sagte in seinem Gespräch, er zeige seinen Kindern jedes Mal das Feuerwehrauto, wenn eines vorbeifährt. Das war für uns der Moment, in dem wir wussten, worüber wir reden müssen.",
       "notiz": {
        "titel": "Handzettel: Folie 4 — Das überraschende Ergebnis",
        "zeilen": [
         "erwartet: Gehalt, Kantine, Betriebsrente",
         "diese Punkte nur am Rand genannt"
        ],
        "feld": "Am häufigsten genannte Stärke:",
        "frei": true,
        "muster": "sinnvolle, sichtbare Arbeit an Produkten, deren Zweck man kennt",
        "loesungen": [
         "sinnvolle Produkte",
         "Stolz auf das Produkt",
         "sichtbares Ergebnis der Arbeit",
         "wissen, wofür die Arbeit gebraucht wird",
         "Sinn der Arbeit"
        ]
       },
       "stelle": "Hier kann ich etwas bauen, das ich am Ende sehe",
       "erklaerung": "Gehalt und Kantine wurden erwartet, aber kaum genannt.",
       "frage": "Ergänze deine Notiz auf dem Handzettel."
      },
      {
       "ort": "Vortrag — Abschnitt 5",
       "wer": "Frau",
       "text": "Daraus haben wir unseren wichtigsten Schritt abgeleitet. Statt dass die Personalabteilung über die Firma spricht, sprechen jetzt unsere Mitarbeiter selbst. Wir haben zwölf Freiwillige gesucht, die bereit waren, in kurzen Videos und auf Messen zu erzählen, was sie machen. Einer davon ist ein Monteur, der erzählt, wie er nach dem Hochwasser vor drei Jahren nachts Pumpen für eine überflutete Stadt in Bayern ausgeliefert und angeschlossen hat. Dieses Video ist mehr als fünfzigtausendmal angesehen worden, viel öfter als alles, was wir je mit einer Agentur produziert haben. Niemand von den zwölf bekommt dafür Geld, aber sie dürfen die Videos selbst mitgestalten und auch Nein sagen, wenn ihnen etwas nicht gefällt. Das war uns wichtig, weil sonst genau die Glaubwürdigkeit verloren geht, um die es eigentlich geht.",
       "notiz": {
        "titel": "Handzettel: Folie 5 — Mitarbeiter erzählen selbst",
        "zeilen": [
         "Firma spricht nicht mehr selbst über sich",
         "Beispiel: Monteur beim Hochwassereinsatz"
        ],
        "feld": "Wer heute für die Firma spricht:",
        "frei": true,
        "muster": "zwölf freiwillige Mitarbeiter in Videos und auf Messen",
        "loesungen": [
         "zwölf Freiwillige",
         "12 freiwillige Mitarbeiter",
         "eigene Mitarbeiter als Freiwillige",
         "zwölf Mitarbeiter erzählen selbst",
         "12 Freiwillige in Videos und auf Messen"
        ]
       },
       "stelle": "Wir haben zwölf Freiwillige gesucht",
       "erklaerung": "Statt der Personalabteilung sprechen freiwillige Mitarbeiter, ohne Bezahlung.",
       "frage": "Ergänze deine Notiz auf dem Handzettel."
      },
      {
       "ort": "Vortrag — Abschnitt 6",
       "wer": "Frau",
       "text": "Der zweite Schritt waren die Stellenanzeigen. Wenn ich mir unsere alten Anzeigen anschaue, muss ich heute lachen. Da stand ein langer Absatz über die Firmengeschichte seit neunzehnhundertachtundzwanzig, dann eine Liste mit Anforderungen, die kaum ein Mensch erfüllen konnte, und ganz am Ende ein Satz über attraktive Sozialleistungen. Wir haben die Reihenfolge umgedreht. Heute steht oben, was man bei uns konkret tut, und zwar so, wie es die Kollegen aus der Abteilung beschreiben. Dann kommt, was wir bieten, mit konkreten Zahlen statt allgemeiner Versprechen. Und die Anforderungen haben wir radikal gekürzt, auf das, was wirklich nötig ist. Allein dadurch haben sich mehr Frauen auf technische Stellen beworben, weil sie sich nicht mehr von zwölf Anforderungen abschrecken ließen, von denen sie nur zehn erfüllten.",
       "notiz": {
        "titel": "Handzettel: Folie 6 — Stellenanzeigen neu geschrieben",
        "zeilen": [
         "früher: Firmengeschichte, lange Anforderungsliste, Sozialleistungen am Ende",
         "heute: Tätigkeit zuerst, Angebot mit konkreten Zahlen"
        ],
        "feld": "Wirkung der gekürzten Anforderungen:",
        "frei": true,
        "muster": "mehr Bewerbungen von Frauen auf technische Stellen",
        "loesungen": [
         "mehr Bewerberinnen",
         "mehr Frauen bewerben sich",
         "mehr Bewerbungen von Frauen",
         "mehr Frauen auf technische Stellen",
         "Frauen weniger abgeschreckt"
        ]
       },
       "stelle": "haben sich mehr Frauen auf technische Stellen beworben",
       "erklaerung": "Gefragt ist die Wirkung der Kürzung, nicht die neue Reihenfolge.",
       "frage": "Ergänze deine Notiz auf dem Handzettel."
      },
      {
       "ort": "Vortrag — Abschnitt 7",
       "wer": "Frau",
       "text": "Dritter Punkt, und der wird oft vergessen: der Bewerbungsablauf selbst. Was nützt die schönste Anzeige, wenn ein Bewerber danach sechs Wochen nichts hört? Genau das war bei uns die Regel, weil Bewerbungen durch drei Abteilungen gewandert sind und jede gedacht hat, die andere meldet sich. Wir haben uns eine feste Regel gegeben: Jeder Bewerber bekommt innerhalb von fünf Werktagen eine Rückmeldung, entweder eine Einladung oder eine begründete Absage. Und man kann sich bei uns ohne Anschreiben bewerben, mit einem Lebenslauf und drei kurzen Fragen. Viele Facharbeiter haben uns gesagt, dass sie früher genau am Anschreiben gescheitert sind, nicht an ihrer Qualifikation. Ein Elektriker hat mir erzählt, er habe drei Abende an einem Anschreiben gesessen und es dann doch nicht abgeschickt.",
       "notiz": {
        "titel": "Handzettel: Folie 7 — Der Bewerbungsablauf",
        "zeilen": [
         "früher: bis zu sechs Wochen ohne Antwort",
         "Bewerbung auch ohne Anschreiben möglich"
        ],
        "feld": "Feste Regel für Rückmeldungen:",
        "frei": true,
        "muster": "innerhalb von fünf Werktagen Einladung oder begründete Absage",
        "loesungen": [
         "innerhalb von fünf Werktagen",
         "5 Werktage",
         "Rückmeldung in fünf Tagen",
         "Antwort binnen 5 Werktagen",
         "fünf Werktage"
        ]
       },
       "stelle": "innerhalb von fünf Werktagen eine Rückmeldung",
       "erklaerung": "Sechs Wochen war der alte Zustand.",
       "frage": "Ergänze deine Notiz auf dem Handzettel."
      },
      {
       "ort": "Vortrag — Abschnitt 8",
       "wer": "Frau",
       "text": "Ich will Ihnen aber nicht nur Erfolge präsentieren. Es gab auch Dinge, die schiefgegangen sind. Wir haben im zweiten Jahr viel Geld für Anzeigen in sozialen Netzwerken ausgegeben, die sich gezielt an junge Leute richten sollten. Die Zahlen sahen zunächst beeindruckend aus, sehr viele Klicks, sehr viele Aufrufe. Aber daraus ist nicht eine einzige Bewerbung für einen Ausbildungsplatz entstanden. Als wir unsere Auszubildenden gefragt haben, wie sie auf uns gekommen sind, war die Antwort fast immer dieselbe: über die Eltern, über Freunde oder über ein Praktikum. Jugendliche entscheiden sich offenbar nicht wegen einer Anzeige, sondern weil jemand, dem sie vertrauen, ihnen den Betrieb empfiehlt. Seitdem stecken wir das Geld lieber in Schulpraktika und in Werksführungen für Eltern, und die sind jedes Mal ausgebucht.",
       "notiz": {
        "titel": "Handzettel: Folie 8 — Was nicht funktioniert hat",
        "zeilen": [
         "Anzeigen in sozialen Netzwerken für junge Leute",
         "viele Klicks, keine einzige Bewerbung"
        ],
        "feld": "Wie Auszubildende tatsächlich zur Firma kamen:",
        "frei": true,
        "muster": "über Eltern, Freunde oder ein Praktikum",
        "loesungen": [
         "über Eltern, Freunde, Praktikum",
         "Eltern und Freunde",
         "über ein Praktikum",
         "persönliche Kontakte und Praktika",
         "Familie, Freunde, Praktikum"
        ]
       },
       "stelle": "über die Eltern, über Freunde oder über ein Praktikum",
       "erklaerung": "Die sozialen Netzwerke brachten Klicks, aber keine Auszubildenden.",
       "frage": "Ergänze deine Notiz auf dem Handzettel."
      },
      {
       "ort": "Vortrag — Abschnitt 9",
       "wer": "Frau",
       "text": "Häufig werde ich gefragt, was das alles gekostet hat. Die ehrliche Antwort: weniger Geld, als Sie vermuten, aber viel mehr Zeit. Die Videos haben wir mit einer kleinen Produktionsfirma aus der Gegend gedreht, das waren für alle zwölf zusammen etwa fünfundzwanzigtausend Euro. Die Anzeigen in den sozialen Netzwerken, die nichts gebracht haben, waren übrigens teurer. Teurer war vor allem die Arbeitszeit. Allein die sechzig Gespräche, die Auswertung und die Überarbeitung aller Anzeigen haben in der Personalabteilung ungefähr eine halbe Stelle für ein ganzes Jahr gebunden. Das muss man der Geschäftsführung von Anfang an ehrlich sagen, sonst wird man nach drei Monaten gefragt, warum die anderen Aufgaben liegen bleiben. Bei uns hat die Geschäftsführung das mitgetragen, weil sie selbst gesehen hat, wie viele Stellen unbesetzt waren.",
       "notiz": {
        "titel": "Handzettel: Folie 9 — Kosten und Aufwand",
        "zeilen": [
         "Videos: etwa fünfundzwanzigtausend Euro",
         "Kosten insgesamt geringer als vermutet"
        ],
        "feld": "Größter Aufwand:",
        "frei": true,
        "muster": "Arbeitszeit, etwa eine halbe Stelle für ein Jahr",
        "loesungen": [
         "Arbeitszeit",
         "eine halbe Stelle für ein Jahr",
         "Zeitaufwand der Personalabteilung",
         "halbe Stelle ein Jahr lang",
         "Personalaufwand"
        ]
       },
       "stelle": "Teurer war vor allem die Arbeitszeit",
       "erklaerung": "Geld war nicht das Hauptproblem, sondern der Zeitaufwand.",
       "frage": "Ergänze deine Notiz auf dem Handzettel."
      },
      {
       "ort": "Vortrag — Abschnitt 10",
       "wer": "Frau",
       "text": "Und was ist nach vier Jahren dabei herausgekommen? Für unsere Ausbildungsplätze bekommen wir heute im Schnitt fünf Bewerbungen pro Platz. Die Konstrukteursstelle, von der ich am Anfang erzählt habe, haben wir übrigens mit einer Frau besetzt, die das Video mit dem Monteur gesehen hatte. Und die Kündigungen im ersten Jahr nach der Einstellung sind um mehr als die Hälfte gesunken, weil die Leute heute wissen, worauf sie sich einlassen. Das ist für mich fast das wichtigste Ergebnis, denn jede frühe Kündigung kostet uns viel Geld und Nerven. Wenn ich Ihnen einen Rat mitgeben darf: Fangen Sie nicht bei der Agentur an, sondern im eigenen Haus. Fragen Sie Ihre Leute, warum sie bleiben. Die Antwort wird Sie vermutlich überraschen, so wie sie uns überrascht hat. Vielen Dank.",
       "notiz": {
        "titel": "Handzettel: Folie 10 — Ergebnisse und Rat",
        "zeilen": [
         "heute: im Schnitt fünf Bewerbungen pro Ausbildungsplatz",
         "Konstrukteursstelle besetzt"
        ],
        "feld": "Kündigungen im ersten Jahr nach der Einstellung:",
        "frei": true,
        "muster": "um mehr als die Hälfte gesunken",
        "loesungen": [
         "um mehr als die Hälfte gesunken",
         "mehr als halbiert",
         "halbiert",
         "über 50 % weniger",
         "um über die Hälfte gesunken"
        ]
       },
       "stelle": "um mehr als die Hälfte gesunken",
       "erklaerung": "Fünf Bewerbungen pro Platz betrifft die Ausbildung, gefragt sind die frühen Kündigungen.",
       "frage": "Ergänze deine Notiz auf dem Handzettel."
      }
     ]
    }
   ]
  }
 ],
 "laeufe": [
  {
   "id": "tc1bhl1",
   "titel": "Prüfungslauf 1",
   "minuten": 40,
   "teile": [
    {
     "nr": 1,
     "art": "diskussion",
     "aufgaben": [
      {
       "von": "Person 1 — Ingenieurin aus Indien, seit drei Jahren in Stuttgart",
       "wer": "Frau",
       "text": "Als ich in Stuttgart angefangen habe, hat mein Teamleiter in der ersten Besprechung zu meinem Entwurf gesagt: Das funktioniert so nicht. Vor allen Leuten, ohne Einleitung. Ich war schockiert und dachte, ich verliere meinen Job. Bei uns in Indien hätte man erst die positiven Punkte erwähnt und die Kritik ganz vorsichtig angedeutet, damit niemand das Gesicht verliert. Ein Kollege hat mir dann beim Mittagessen erklärt, dass das hier ganz normal ist und nichts mit mir als Person zu tun hat. Inzwischen schätze ich diese Direktheit sogar, ich weiß wenigstens immer, woran ich bin. Nur bei meinen Eltern am Telefon muss ich aufpassen, dass ich nicht zu deutsch klinge.",
       "loesung": 3,
       "stelle": "die Kritik ganz vorsichtig angedeutet",
       "erklaerung": "Sie vergleicht die indirekte Kritik ihrer Heimat mit der direkten Art in Deutschland.",
       "frage": "Welche Aussage passt zu dieser Person?",
       "opt": [
        "Das jährliche Mitarbeitergespräch bringt mir wenig, weil es zu selten stattfindet.",
        "Rückmeldungen von den Menschen, mit denen ich arbeite, sind für mich aussagekräftiger als die meines Vorgesetzten.",
        "Kritik nehme ich leichter an, wenn sie unter vier Augen geäußert wird.",
        "Wo ich herkomme, wird Kritik indirekter geäußert, daran musste ich mich hier erst gewöhnen.",
        "Ich habe gelernt, auch meinem Vorgesetzten offen Rückmeldung zu geben.",
        "Anonyme Bewertungen halte ich für gefährlich, weil sie zu unfairen Urteilen verleiten.",
        "In der Ausbildung achte ich darauf, Lob und Kritik getrennt zu halten.",
        "Mir fehlt Lob, weil man bei uns nur etwas hört, wenn etwas schiefgeht.",
        "Eine Rückmeldung aus dem Kollegenkreis hat meine Arbeitsweise grundlegend verändert.",
        "Ein Feedbackprogramm hat bei uns die persönlichen Gespräche verdrängt."
       ],
       "fest": true
      },
      {
       "von": "Person 2 — Lagerist, Ende vierzig",
       "wer": "Mann",
       "text": "Bei uns im Lager ist es so: Wenn alles läuft, sagt keiner was. Wenn eine Palette falsch verladen wird, steht der Schichtleiter nach fünf Minuten neben dir, und dann ist es meistens laut. Ich mache diesen Job seit zwölf Jahren, ich habe in der Zeit vielleicht dreimal gehört, dass etwas gut war. Ich brauche keine Urkunde. Aber wenn wir vor Weihnachten bis zehn Uhr abends Ware rausgeschickt haben, wäre ein Danke schon schön. Die Jungen gehen deshalb auch schnell wieder. Die sind das von zu Hause anders gewohnt. Ich habe das unserem Lagerleiter schon gesagt. Er meinte, dafür sei im Tagesgeschäft keine Zeit.",
       "loesung": 7,
       "stelle": "Wenn alles läuft, sagt keiner was",
       "erklaerung": "Rückmeldung gibt es bei ihm nur bei Fehlern, Anerkennung fehlt.",
       "frage": "Welche Aussage passt zu dieser Person?",
       "opt": [
        "Das jährliche Mitarbeitergespräch bringt mir wenig, weil es zu selten stattfindet.",
        "Rückmeldungen von den Menschen, mit denen ich arbeite, sind für mich aussagekräftiger als die meines Vorgesetzten.",
        "Kritik nehme ich leichter an, wenn sie unter vier Augen geäußert wird.",
        "Wo ich herkomme, wird Kritik indirekter geäußert, daran musste ich mich hier erst gewöhnen.",
        "Ich habe gelernt, auch meinem Vorgesetzten offen Rückmeldung zu geben.",
        "Anonyme Bewertungen halte ich für gefährlich, weil sie zu unfairen Urteilen verleiten.",
        "In der Ausbildung achte ich darauf, Lob und Kritik getrennt zu halten.",
        "Mir fehlt Lob, weil man bei uns nur etwas hört, wenn etwas schiefgeht.",
        "Eine Rückmeldung aus dem Kollegenkreis hat meine Arbeitsweise grundlegend verändert.",
        "Ein Feedbackprogramm hat bei uns die persönlichen Gespräche verdrängt."
       ],
       "fest": true
      },
      {
       "von": "Person 3 — Kundenberaterin in einer Bank, Anfang vierzig",
       "wer": "Frau",
       "text": "Einmal im Jahr, im März, haben wir das große Mitarbeitergespräch. Mit Formular, Zielvereinbarung und einer Bewertung von eins bis fünf. Mein Problem ist: Was soll ich im März mit einer Kritik an einem Kundengespräch vom letzten Juni anfangen? Das weiß ich doch gar nicht mehr. Und umgekehrt, wenn ich im Sommer etwas richtig gut gemacht habe, ist das bis zum Frühjahr längst vergessen. Ich würde mir wünschen, dass mein Chef nach einem schwierigen Termin einfach mal fünf Minuten mit mir redet. Dann bräuchten wir das große Gespräch vielleicht gar nicht mehr. Ich habe das im letzten Gespräch auch so gesagt, aber das Formular sieht dafür leider kein Feld vor.",
       "loesung": 0,
       "stelle": "Was soll ich im März mit einer Kritik",
       "erklaerung": "Einmal im Jahr ist ihr zu selten, die Rückmeldung kommt zu spät, um nützlich zu sein.",
       "frage": "Welche Aussage passt zu dieser Person?",
       "opt": [
        "Das jährliche Mitarbeitergespräch bringt mir wenig, weil es zu selten stattfindet.",
        "Rückmeldungen von den Menschen, mit denen ich arbeite, sind für mich aussagekräftiger als die meines Vorgesetzten.",
        "Kritik nehme ich leichter an, wenn sie unter vier Augen geäußert wird.",
        "Wo ich herkomme, wird Kritik indirekter geäußert, daran musste ich mich hier erst gewöhnen.",
        "Ich habe gelernt, auch meinem Vorgesetzten offen Rückmeldung zu geben.",
        "Anonyme Bewertungen halte ich für gefährlich, weil sie zu unfairen Urteilen verleiten.",
        "In der Ausbildung achte ich darauf, Lob und Kritik getrennt zu halten.",
        "Mir fehlt Lob, weil man bei uns nur etwas hört, wenn etwas schiefgeht.",
        "Eine Rückmeldung aus dem Kollegenkreis hat meine Arbeitsweise grundlegend verändert.",
        "Ein Feedbackprogramm hat bei uns die persönlichen Gespräche verdrängt."
       ],
       "fest": true
      },
      {
       "von": "Person 4 — Ausbilder für Industriemechaniker, Anfang sechzig",
       "wer": "Mann",
       "text": "Ich bilde seit fünfundzwanzig Jahren aus. Früher habe ich das gemacht, was man in jedem Seminar lernt: erst loben, dann kritisieren, dann wieder loben. Die Auszubildenden haben das schnell durchschaut. Sobald ich gelobt habe, haben sie nur noch auf das Aber gewartet, und das Lob ist gar nicht mehr angekommen. Heute trenne ich das. Wenn ein Werkstück gut ist, sage ich das, und zwar nur das. Wenn etwas falsch ist, sage ich das an einem anderen Tag, sachlich und konkret. Seitdem glauben mir die jungen Leute auch das Lob. Und ganz ehrlich, die Prüfungsergebnisse sind in den letzten Jahren auch besser geworden.",
       "loesung": 6,
       "stelle": "Heute trenne ich das",
       "erklaerung": "Er hat die Mischung aus Lob und Kritik aufgegeben und trennt beides bewusst.",
       "frage": "Welche Aussage passt zu dieser Person?",
       "opt": [
        "Das jährliche Mitarbeitergespräch bringt mir wenig, weil es zu selten stattfindet.",
        "Rückmeldungen von den Menschen, mit denen ich arbeite, sind für mich aussagekräftiger als die meines Vorgesetzten.",
        "Kritik nehme ich leichter an, wenn sie unter vier Augen geäußert wird.",
        "Wo ich herkomme, wird Kritik indirekter geäußert, daran musste ich mich hier erst gewöhnen.",
        "Ich habe gelernt, auch meinem Vorgesetzten offen Rückmeldung zu geben.",
        "Anonyme Bewertungen halte ich für gefährlich, weil sie zu unfairen Urteilen verleiten.",
        "In der Ausbildung achte ich darauf, Lob und Kritik getrennt zu halten.",
        "Mir fehlt Lob, weil man bei uns nur etwas hört, wenn etwas schiefgeht.",
        "Eine Rückmeldung aus dem Kollegenkreis hat meine Arbeitsweise grundlegend verändert.",
        "Ein Feedbackprogramm hat bei uns die persönlichen Gespräche verdrängt."
       ],
       "fest": true
      },
      {
       "von": "Person 5 — Projektmanagerin in einem Softwareunternehmen, Mitte dreißig",
       "wer": "Frau",
       "text": "Mein Chef hatte die Angewohnheit, mitten in unseren Besprechungen auf dem Handy Mails zu beantworten. Alle haben sich darüber geärgert, aber keiner hat etwas gesagt. Bei uns gibt es seit einem Jahr eine Regel: Nach jedem Projekt sagt jeder jedem eine Sache, die gut war, und eine, die man ändern sollte, auch nach oben. Ich habe dann all meinen Mut zusammengenommen und es ihm gesagt. Er war kurz still, dann hat er sich bedankt. Seitdem liegt sein Handy in Besprechungen umgedreht auf dem Tisch. Ich hätte nie gedacht, dass das so einfach ist. Ohne die neue Regel hätte ich mich aber wahrscheinlich nie getraut.",
       "loesung": 4,
       "stelle": "all meinen Mut zusammengenommen und es ihm gesagt",
       "erklaerung": "Sie hat Kritik nach oben geäußert, an ihren Vorgesetzten.",
       "frage": "Welche Aussage passt zu dieser Person?",
       "opt": [
        "Das jährliche Mitarbeitergespräch bringt mir wenig, weil es zu selten stattfindet.",
        "Rückmeldungen von den Menschen, mit denen ich arbeite, sind für mich aussagekräftiger als die meines Vorgesetzten.",
        "Kritik nehme ich leichter an, wenn sie unter vier Augen geäußert wird.",
        "Wo ich herkomme, wird Kritik indirekter geäußert, daran musste ich mich hier erst gewöhnen.",
        "Ich habe gelernt, auch meinem Vorgesetzten offen Rückmeldung zu geben.",
        "Anonyme Bewertungen halte ich für gefährlich, weil sie zu unfairen Urteilen verleiten.",
        "In der Ausbildung achte ich darauf, Lob und Kritik getrennt zu halten.",
        "Mir fehlt Lob, weil man bei uns nur etwas hört, wenn etwas schiefgeht.",
        "Eine Rückmeldung aus dem Kollegenkreis hat meine Arbeitsweise grundlegend verändert.",
        "Ein Feedbackprogramm hat bei uns die persönlichen Gespräche verdrängt."
       ],
       "fest": true
      },
      {
       "von": "Person 6 — Außendienstmitarbeiter in der Medizintechnik, Mitte vierzig",
       "wer": "Mann",
       "text": "Mein Vertriebsleiter schaut sich einmal im Quartal meine Zahlen an und sagt dann gut oder nicht gut. Das hilft mir wenig, denn er war ja bei keinem einzigen Termin dabei. Viel mehr bringt es mir, wenn eine Oberärztin nach der Einweisung in ein neues Gerät sagt: Das war zu schnell, meine Pflegekräfte kamen nicht mit. Da weiß ich genau, was ich beim nächsten Mal anders machen muss. Ich frage deshalb nach jeder Schulung im Krankenhaus ganz gezielt nach. Die Leute, mit denen ich arbeite, sehen meine Arbeit. Mein Chef sieht nur Tabellen. Das habe ich ihm übrigens auch schon gesagt, aber er hat keine Zeit, mitzufahren.",
       "loesung": 1,
       "stelle": "Mein Chef sieht nur Tabellen",
       "erklaerung": "Die Rückmeldung aus dem Krankenhaus ist für ihn nützlicher als die Zahlenbewertung des Chefs.",
       "frage": "Welche Aussage passt zu dieser Person?",
       "opt": [
        "Das jährliche Mitarbeitergespräch bringt mir wenig, weil es zu selten stattfindet.",
        "Rückmeldungen von den Menschen, mit denen ich arbeite, sind für mich aussagekräftiger als die meines Vorgesetzten.",
        "Kritik nehme ich leichter an, wenn sie unter vier Augen geäußert wird.",
        "Wo ich herkomme, wird Kritik indirekter geäußert, daran musste ich mich hier erst gewöhnen.",
        "Ich habe gelernt, auch meinem Vorgesetzten offen Rückmeldung zu geben.",
        "Anonyme Bewertungen halte ich für gefährlich, weil sie zu unfairen Urteilen verleiten.",
        "In der Ausbildung achte ich darauf, Lob und Kritik getrennt zu halten.",
        "Mir fehlt Lob, weil man bei uns nur etwas hört, wenn etwas schiefgeht.",
        "Eine Rückmeldung aus dem Kollegenkreis hat meine Arbeitsweise grundlegend verändert.",
        "Ein Feedbackprogramm hat bei uns die persönlichen Gespräche verdrängt."
       ],
       "fest": true
      },
      {
       "von": "Person 7 — Teamleiterin in der Buchhaltung, Ende vierzig",
       "wer": "Frau",
       "text": "Vor zwei Jahren hat unsere Personalabteilung ein Programm eingeführt, mit dem man sich gegenseitig jederzeit Rückmeldung geben kann. Kleine Sterne, kurze Kommentare, alles am Bildschirm. Die Idee war gut gemeint. Aber was ist passiert? Statt dass man mal zur Kollegin rübergeht und sagt, die Auswertung war super, klickt man eben einen Stern an. Und wenn etwas nicht passt, schreibt man einen höflichen Kommentar, den man so nie ins Gesicht sagen würde. Ich führe kaum noch richtige Gespräche mit meinem Team, und das merkt man an der Stimmung. Ich habe jetzt angefangen, einmal pro Woche mit jedem Einzelnen eine Viertelstunde zu reden, ganz ohne Programm.",
       "loesung": 9,
       "stelle": "klickt man eben einen Stern an",
       "erklaerung": "Das Programm hat das direkte Gespräch ersetzt, nicht ergänzt.",
       "frage": "Welche Aussage passt zu dieser Person?",
       "opt": [
        "Das jährliche Mitarbeitergespräch bringt mir wenig, weil es zu selten stattfindet.",
        "Rückmeldungen von den Menschen, mit denen ich arbeite, sind für mich aussagekräftiger als die meines Vorgesetzten.",
        "Kritik nehme ich leichter an, wenn sie unter vier Augen geäußert wird.",
        "Wo ich herkomme, wird Kritik indirekter geäußert, daran musste ich mich hier erst gewöhnen.",
        "Ich habe gelernt, auch meinem Vorgesetzten offen Rückmeldung zu geben.",
        "Anonyme Bewertungen halte ich für gefährlich, weil sie zu unfairen Urteilen verleiten.",
        "In der Ausbildung achte ich darauf, Lob und Kritik getrennt zu halten.",
        "Mir fehlt Lob, weil man bei uns nur etwas hört, wenn etwas schiefgeht.",
        "Eine Rückmeldung aus dem Kollegenkreis hat meine Arbeitsweise grundlegend verändert.",
        "Ein Feedbackprogramm hat bei uns die persönlichen Gespräche verdrängt."
       ],
       "fest": true
      },
      {
       "von": "Person 8 — Verwaltungsangestellter im Bürgeramt, Anfang dreißig",
       "wer": "Mann",
       "text": "Ich war immer stolz darauf, dass ich meine Anträge besonders gründlich bearbeite. Dann hat mir eine Kollegin nach einem Jahr gesagt, ganz freundlich: Du prüfst Dinge, die gar nicht geprüft werden müssen, und deshalb warten deine Leute doppelt so lange. Das hat erst wehgetan, ich habe eine Nacht schlecht geschlafen. Ich habe mir dann aber zusammen mit ihr die Vorschriften noch einmal angeschaut, und sie hatte recht. Seitdem arbeite ich mit einer Checkliste, die nur das Notwendige enthält. Meine Bearbeitungszeit hat sich halbiert, und die Bürger sind deutlich zufriedener. Heute bin ich dieser Kollegin sehr dankbar, und wir trinken jeden Morgen zusammen Kaffee.",
       "loesung": 8,
       "stelle": "Seitdem arbeite ich mit einer Checkliste",
       "erklaerung": "Der Hinweis einer Kollegin hat seine Art zu arbeiten dauerhaft verändert.",
       "frage": "Welche Aussage passt zu dieser Person?",
       "opt": [
        "Das jährliche Mitarbeitergespräch bringt mir wenig, weil es zu selten stattfindet.",
        "Rückmeldungen von den Menschen, mit denen ich arbeite, sind für mich aussagekräftiger als die meines Vorgesetzten.",
        "Kritik nehme ich leichter an, wenn sie unter vier Augen geäußert wird.",
        "Wo ich herkomme, wird Kritik indirekter geäußert, daran musste ich mich hier erst gewöhnen.",
        "Ich habe gelernt, auch meinem Vorgesetzten offen Rückmeldung zu geben.",
        "Anonyme Bewertungen halte ich für gefährlich, weil sie zu unfairen Urteilen verleiten.",
        "In der Ausbildung achte ich darauf, Lob und Kritik getrennt zu halten.",
        "Mir fehlt Lob, weil man bei uns nur etwas hört, wenn etwas schiefgeht.",
        "Eine Rückmeldung aus dem Kollegenkreis hat meine Arbeitsweise grundlegend verändert.",
        "Ein Feedbackprogramm hat bei uns die persönlichen Gespräche verdrängt."
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
         "text": "Herr Yilmaz, danke, dass Sie das Gespräch angefragt haben. Sie hatten in Ihrer Nachricht geschrieben, dass Sie über Ihre berufliche Zukunft sprechen möchten. Ich gebe zu, da habe ich kurz befürchtet, dass Sie mir eine Kündigung auf den Tisch legen. Das wäre für uns ein ziemlicher Verlust gewesen, gerade jetzt, wo wir ohnehin knapp besetzt sind."
        },
        {
         "wer": "Mann",
         "text": "Nein, nein, keine Sorge. Ich bin gern hier, das Team ist gut, und mit Ihnen als Chefin komme ich auch gut zurecht. Aber ich mache jetzt seit sechs Jahren Disposition, und ehrlich gesagt kann ich das inzwischen im Schlaf. Mir fehlt die Herausforderung. Die Touren laufen, die Fahrer kennen mich, die Kunden auch. Aber das ist mir auf Dauer zu wenig."
        }
       ],
       "frage": "Herr Yilmaz möchte über seine Zukunft sprechen, weil …",
       "opt": [
        "… er mit seiner Vorgesetzten unzufrieden ist.",
        "… seine Arbeit ihn nicht mehr fordert.",
        "… er ein Angebot von einer anderen Firma hat."
       ],
       "loesung": 1,
       "stelle": "Mir fehlt die Herausforderung",
       "erklaerung": "Mit Team und Chefin ist er zufrieden. Eine Kündigung schließt er aus."
      },
      {
       "ort": "Gespräch — Abschnitt 2",
       "zeilen": [
        {
         "wer": "Frau",
         "text": "Das kann ich nachvollziehen. Haben Sie denn schon eine Vorstellung, in welche Richtung es gehen soll? Das ist ja eine wichtige Frage, bevor wir über Möglichkeiten reden."
        },
        {
         "wer": "Mann",
         "text": "Ich habe zwei Ideen. Die eine wäre, Richtung Führung zu gehen. Die andere interessiert mich eigentlich mehr: Ich habe im letzten Jahr nebenher einen Kurs in Datenanalyse gemacht, abends, auf eigene Kosten. Und ich sehe jeden Tag, wie viel wir in der Tourenplanung noch nach Bauchgefühl entscheiden. Da könnte man mit den Daten, die wir sowieso haben, viel mehr machen. Allein bei den Leerfahrten verschenken wir jede Woche Geld, das habe ich mal grob ausgerechnet."
        }
       ],
       "frage": "Herr Yilmaz interessiert sich am meisten für …",
       "opt": [
        "… eine Stelle als Teamleiter.",
        "… einen weiteren Kurs am Abend.",
        "… eine Tourenplanung, die auf Daten beruht."
       ],
       "loesung": 2,
       "stelle": "Die andere interessiert mich eigentlich mehr",
       "erklaerung": "Führung ist nur die erste Idee. „eigentlich mehr“ markiert die Datenanalyse in der Tourenplanung."
      },
      {
       "ort": "Gespräch — Abschnitt 3",
       "zeilen": [
        {
         "wer": "Frau",
         "text": "Das ist ja interessant, davon wusste ich gar nichts. Das passt übrigens zu etwas, das gerade in der Geschäftsleitung diskutiert wird. Ich darf noch nicht alles sagen, aber es ist geplant, im nächsten Jahr eine kleine Stelle für Logistikanalyse einzurichten. Bisher hat man dafür an eine externe Besetzung gedacht."
        },
        {
         "wer": "Mann",
         "text": "Das wäre genau das, was ich mir vorstelle. Damit hätte ich ehrlich gesagt nicht gerechnet."
        },
        {
         "wer": "Frau",
         "text": "Ich kann Ihnen nichts versprechen. Aber ich kann Ihren Namen ins Spiel bringen, und zwar bevor die Stelle ausgeschrieben wird. Ich kenne die Diskussion, und ich glaube, ein Bewerber aus dem eigenen Haus hätte gute Karten, weil er unsere Abläufe schon kennt."
        }
       ],
       "frage": "Frau Albrecht bietet an, …",
       "opt": [
        "… Herrn Yilmaz für die geplante Stelle vorzuschlagen.",
        "… die Stelle extern auszuschreiben.",
        "… Herrn Yilmaz die Stelle fest zuzusagen."
       ],
       "loesung": 0,
       "stelle": "ich kann Ihren Namen ins Spiel bringen",
       "erklaerung": "„Ich kann Ihnen nichts versprechen“ schließt eine feste Zusage aus."
      },
      {
       "ort": "Gespräch — Abschnitt 4",
       "zeilen": [
        {
         "wer": "Mann",
         "text": "Das wäre toll. Gibt es denn etwas, womit ich mich in der Zwischenzeit empfehlen könnte? Ich möchte ungern einfach nur abwarten, bis die Stelle ausgeschrieben ist."
        },
        {
         "wer": "Frau",
         "text": "Ja, und das wäre mein Vorschlag. Sie haben doch letzte Woche die Auswertung zu den Leerfahrten gemacht, die ich an die Geschäftsleitung weitergegeben habe. Machen Sie daraus ein kleines Projekt. Schauen Sie sich die Daten der letzten zwölf Monate an und zeigen Sie, wo wir Touren zusammenlegen könnten. Wenn Sie das im Februar präsentieren, ist das die beste Bewerbung, die Sie schreiben können. Die Geschäftsleitung war übrigens schon von Ihrer ersten Auswertung ziemlich beeindruckt, das hat mir der Geschäftsführer selbst gesagt."
        }
       ],
       "frage": "Frau Albrecht schlägt vor, dass Herr Yilmaz …",
       "opt": [
        "… eine Analyse der Touren erstellt und vorstellt.",
        "… eine schriftliche Bewerbung bei der Geschäftsleitung einreicht.",
        "… die Leerfahrten des letzten Monats zählt."
       ],
       "loesung": 0,
       "stelle": "Machen Sie daraus ein kleines Projekt",
       "erklaerung": "Die „beste Bewerbung“ ist bildlich gemeint: das Projekt selbst."
      },
      {
       "ort": "Gespräch — Abschnitt 5",
       "zeilen": [
        {
         "wer": "Mann",
         "text": "Gern. Aber, und das ist mein Problem, wann soll ich das machen? Wir sind im Team gerade zu dritt statt zu viert, seit Frau Brückner in Elternzeit ist. Ich mache jetzt schon regelmäßig Überstunden. Im Moment komme ich manchmal kaum dazu, meine Mails zu lesen."
        },
        {
         "wer": "Frau",
         "text": "Das ist ein berechtigter Punkt, und ich will nicht, dass Sie das abends nach Feierabend machen. Ich schlage vor, Sie bekommen dafür einen festen Tag in der Woche, den Donnerstag. An dem Tag übernimmt Herr Kaminski Ihre Touren. Er hat ohnehin gefragt, ob er mehr Verantwortung übernehmen kann. So lernt er Ihre Touren kennen, und Sie haben den Kopf frei für die Daten. Wir probieren das bis Ende Februar und schauen dann, wie es läuft."
        }
       ],
       "frage": "Für das Projekt soll Herr Yilmaz …",
       "opt": [
        "… abends nach Feierabend arbeiten.",
        "… Überstunden aufbauen.",
        "… jeden Donnerstag von seinen Touren freigestellt werden."
       ],
       "loesung": 2,
       "stelle": "Sie bekommen dafür einen festen Tag in der Woche",
       "erklaerung": "Abendarbeit lehnt Frau Albrecht ausdrücklich ab."
      },
      {
       "ort": "Gespräch — Abschnitt 6",
       "zeilen": [
        {
         "wer": "Mann",
         "text": "Das ist sehr fair, danke. Darf ich noch etwas ansprechen, was mir schon länger auf dem Herzen liegt? Die Fortbildung, von der ich erzählt habe. Ich habe dafür rund zweitausend Euro selbst bezahlt. Gibt es eine Möglichkeit, dass sich die Firma daran beteiligt? Das war für mich eine ganze Menge Geld."
        },
        {
         "wer": "Frau",
         "text": "Rückwirkend wird das schwierig, da kenne ich unsere Regeln. Aber es gibt einen Aufbaukurs bei derselben Akademie, oder?"
        },
        {
         "wer": "Mann",
         "text": "Ja, im Frühjahr."
        },
        {
         "wer": "Frau",
         "text": "Den würde ich über unser Weiterbildungsbudget beantragen. Da stehen meine Chancen deutlich besser, zumal er direkt mit dem Projekt zu tun hat. Ich bespreche das nächste Woche mit der Personalabteilung. Versprechen kann ich es nicht, aber ich setze mich dafür ein."
        }
       ],
       "frage": "Zur Fortbildung sagt Frau Albrecht, dass …",
       "opt": [
        "… die Firma die bisherigen Kosten erstattet.",
        "… sie die Übernahme der Kosten für den Folgekurs beantragen will.",
        "… es kein Budget für Weiterbildung gibt."
       ],
       "loesung": 1,
       "stelle": "Den würde ich über unser Weiterbildungsbudget beantragen",
       "erklaerung": "Eine Erstattung im Nachhinein hält sie für schwierig. Der Aufbaukurs hat bessere Chancen."
      },
      {
       "ort": "Gespräch — Abschnitt 7",
       "zeilen": [
        {
         "wer": "Mann",
         "text": "Das wäre wunderbar. Und wenn das mit der Stelle nicht klappt? Ich will ehrlich sein, ich habe mir schon ein paar Stellenanzeigen angeschaut, aber eigentlich möchte ich hier bleiben."
        },
        {
         "wer": "Frau",
         "text": "Dann sprechen wir wieder. Ich will ganz offen sein: Ich würde Sie ungern verlieren, Sie sind einer meiner besten Disponenten. Aber ich halte niemanden auf einer Stelle fest, auf der er sich langweilt. Das bringt am Ende keinem etwas. Wenn es hier keine passende Möglichkeit gibt, helfe ich Ihnen auch, intern etwas anderes zu finden, zum Beispiel im Einkauf. Das wäre mir lieber, als Sie an eine andere Firma zu verlieren."
        }
       ],
       "frage": "Falls die neue Stelle nicht zustande kommt, …",
       "opt": [
        "… will Frau Albrecht ihn bei einem Wechsel innerhalb der Firma unterstützen.",
        "… soll Herr Yilmaz in der Disposition bleiben.",
        "… rät Frau Albrecht ihm, das Unternehmen zu verlassen."
       ],
       "loesung": 0,
       "stelle": "helfe ich Ihnen auch, intern etwas anderes zu finden",
       "erklaerung": "„intern“ bedeutet innerhalb des Unternehmens, etwa im Einkauf."
      },
      {
       "ort": "Gespräch — Abschnitt 8",
       "zeilen": [
        {
         "wer": "Mann",
         "text": "Das beruhigt mich. Eine Sache noch zum Thema Führung, weil ich das vorhin erwähnt habe. Ich bin mir da selbst nicht sicher."
        },
        {
         "wer": "Frau",
         "text": "Wissen Sie was, ich hätte da eine Idee. Im Januar fangen zwei neue Auszubildende bei uns an. Hätten Sie Lust, einen davon als Pate zu betreuen? Das ist keine Führungsposition, aber Sie merken schnell, ob Ihnen die Verantwortung für einen anderen Menschen liegt. Unser Ausbildungsleiter würde sich auch sehr freuen, er sucht noch jemanden mit Erfahrung in der Disposition."
        },
        {
         "wer": "Mann",
         "text": "Das klingt gut. So muss ich mich nicht gleich festlegen. Und wenn es mir liegt, kann ich mir das mit der Führung ja immer noch überlegen."
        }
       ],
       "frage": "Die Patenschaft für einen Auszubildenden soll Herrn Yilmaz helfen, …",
       "opt": [
        "… schneller befördert zu werden.",
        "… den Auszubildenden für die Analyse einzusetzen.",
        "… herauszufinden, ob Führung zu ihm passt."
       ],
       "loesung": 2,
       "stelle": "ob Ihnen die Verantwortung für einen anderen Menschen liegt",
       "erklaerung": "Die Patenschaft ist ausdrücklich keine Führungsposition, sondern ein Test."
      },
      {
       "ort": "Gespräch — Abschnitt 9",
       "zeilen": [
        {
         "wer": "Frau",
         "text": "Dann lassen Sie uns noch kurz über das sprechen, was in Ihrem Jahresgespräch ohnehin angestanden hätte. Ihre Zahlen sind sehr gut, da gibt es nichts zu besprechen. Mir ist nur aufgefallen, dass es mit den Kollegen aus dem Lager manchmal knirscht. Zwei Schichtleiter haben sich beschwert, dass Sie Änderungen sehr kurzfristig per Nachricht schicken."
        },
        {
         "wer": "Mann",
         "text": "Das stimmt, das ist nicht ideal. Oft weiß ich es selbst erst eine halbe Stunde vorher. Die Kunden rufen an, und dann muss eine Tour sofort umgeplant werden. Aber ich gebe zu, dass ich dann einfach schnell schreibe, weil es am wenigsten Zeit kostet."
        },
        {
         "wer": "Frau",
         "text": "Das verstehe ich. Aber ein kurzer Anruf statt einer Nachricht würde schon viel ändern. Die Schichtleiter wollen nur nicht das Gefühl haben, dass über ihren Kopf hinweg entschieden wird."
        }
       ],
       "frage": "Frau Albrecht kritisiert, dass Herr Yilmaz …",
       "opt": [
        "… schlechte Zahlen hat.",
        "… Änderungen dem Lager nur schriftlich und kurzfristig mitteilt.",
        "… zu oft im Lager anruft."
       ],
       "loesung": 1,
       "stelle": "dass Sie Änderungen sehr kurzfristig per Nachricht schicken",
       "erklaerung": "Die Zahlen sind sehr gut. Sie wünscht sich einen Anruf statt einer Nachricht."
      },
      {
       "ort": "Gespräch — Abschnitt 10",
       "zeilen": [
        {
         "wer": "Mann",
         "text": "Das nehme ich mir zu Herzen. Sollen wir das alles irgendwo festhalten?"
        },
        {
         "wer": "Frau",
         "text": "Ja, ich schreibe ein kurzes Protokoll und schicke es Ihnen bis Freitag. Darin stehen der Donnerstag für das Projekt, die Präsentation im Februar und der Antrag für den Aufbaukurs. Das mit der neuen Stelle schreibe ich bewusst noch nicht hinein, solange es nicht offiziell ist. Das bleibt bitte erst einmal unter uns. Wenn Sie etwas ergänzen möchten, schreiben Sie es mir einfach dazu."
        },
        {
         "wer": "Mann",
         "text": "Selbstverständlich. Und danke, dass Sie sich so viel Zeit genommen haben. Ich gehe hier mit einem viel besseren Gefühl raus, als ich reingekommen bin."
        }
       ],
       "frage": "Im Protokoll wird nicht erwähnt, …",
       "opt": [
        "… wann die Präsentation stattfindet.",
        "… dass Herr Yilmaz einen Aufbaukurs machen soll.",
        "… dass eine neue Stelle geplant ist."
       ],
       "loesung": 2,
       "stelle": "Das mit der neuen Stelle schreibe ich bewusst noch nicht hinein",
       "erklaerung": "Präsentation und Kurs stehen im Protokoll, die Stelle ist noch nicht offiziell."
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
       "text": "Guten Abend, meine Damen und Herren. Ich möchte mit einem Datum anfangen, das bei uns jeder im Haus kennt: dem vierzehnten März vor vier Jahren. An diesem Tag hat uns unser wichtigster Lieferant für Leistungsschalter aus Südostasien mitgeteilt, dass er auf unbestimmte Zeit nicht liefern kann, weil sein Werk nach einem Brand stillsteht. Wir bei Velten Elektrotechnik bauen Schaltschränke für Industrieanlagen, und ohne diese Schalter können wir keinen einzigen Schrank ausliefern. Innerhalb von drei Wochen hatten wir Aufträge für rund vier Millionen Euro, die wir nicht fertigstellen konnten. Zwei Kunden haben in dieser Zeit Vertragsstrafen angekündigt, einer hat einen Auftrag ganz storniert. Ich erzähle das nicht, um Mitleid zu bekommen, sondern weil diese Wochen alles verändert haben, was wir im Einkauf tun.",
       "notiz": {
        "titel": "Handzettel: Folie 1 — Was uns passiert ist",
        "zeilen": [
         "Unternehmen baut Schaltschränke für Industrieanlagen",
         "Folge: Aufträge über rund vier Millionen Euro blockiert"
        ],
        "feld": "Auslöser der Krise:",
        "frei": true,
        "muster": "Brand im Werk des wichtigsten Lieferanten für Leistungsschalter",
        "loesungen": [
         "Brand beim Lieferanten",
         "Werksbrand beim wichtigsten Lieferanten",
         "Lieferant fiel nach Brand aus",
         "Lieferstopp nach Brand",
         "Ausfall des Hauptlieferanten nach Brand"
        ]
       },
       "stelle": "weil sein Werk nach einem Brand stillsteht",
       "erklaerung": "Die vier Millionen sind die Folge, gefragt ist der Auslöser.",
       "frage": "Ergänze deine Notiz auf dem Handzettel."
      },
      {
       "ort": "Vortrag — Abschnitt 2",
       "wer": "Mann",
       "text": "Als wir danach Bilanz gezogen haben, kam etwas Unangenehmes ans Licht. Wir hatten zwar über dreihundert Lieferanten, und wir dachten, wir seien breit aufgestellt. Aber bei genauerem Hinsehen gab es achtzehn Bauteile, die wir nur von einem einzigen Hersteller bezogen, ohne jede Alternative. Teilweise lag das an technischen Gründen, weil ein Teil genau auf unsere Schränke abgestimmt war. Oft lag es aber einfach daran, dass dieser Lieferant vor zehn Jahren der günstigste war und sich seitdem niemand mehr die Frage gestellt hatte. Wir haben diese achtzehn Teile dann auf einer Liste gesammelt, die bei uns intern nur die rote Liste heißt. Diese Liste hängt bis heute im Büro der Einkaufsleitung, und sie war der Ausgangspunkt für alles, was ich Ihnen jetzt erzähle.",
       "notiz": {
        "titel": "Handzettel: Folie 2 — Abhängigkeit von einzelnen Lieferanten",
        "zeilen": [
         "über dreihundert Lieferanten insgesamt",
         "Grund oft: früher günstigster Anbieter"
        ],
        "feld": "Ergebnis der Analyse:",
        "frei": true,
        "muster": "achtzehn Bauteile nur von einem einzigen Hersteller, die rote Liste",
        "loesungen": [
         "achtzehn Bauteile ohne Alternative",
         "18 Teile nur von einem Lieferanten",
         "rote Liste mit 18 Bauteilen",
         "achtzehn Teile von einem Hersteller",
         "18 kritische Bauteile"
        ]
       },
       "stelle": "gab es achtzehn Bauteile, die wir nur von einem einzigen Hersteller bezogen",
       "erklaerung": "Dreihundert Lieferanten wirken breit, die eigentliche Erkenntnis sind die achtzehn Teile.",
       "frage": "Ergänze deine Notiz auf dem Handzettel."
      },
      {
       "ort": "Vortrag — Abschnitt 3",
       "wer": "Mann",
       "text": "Die naheliegende Antwort war: Für jedes Teil auf der roten Liste brauchen wir einen zweiten Lieferanten. Das klingt einfach, ist es aber nicht. Ein neuer Lieferant muss bei uns technisch freigegeben werden, und das heißt Musterteile, Prüfungen, manchmal eine neue Zulassung durch unsere Kunden. Das dauert pro Bauteil zwischen sechs Monaten und zwei Jahren. Außerdem will ein zweiter Lieferant natürlich auch etwas verdienen. Wenn er nur im Notfall angerufen wird, hat er keinen Grund, für uns Kapazitäten bereitzuhalten. Wir haben deshalb mit den neuen Lieferanten vereinbart, dass sie dauerhaft mindestens zwanzig Prozent unseres Bedarfs bekommen, auch wenn der erste Lieferant günstiger ist. Nur so bleiben sie im Ernstfall lieferfähig und kennen unsere Anforderungen. Diese zwanzig Prozent sind für uns so etwas wie eine Versicherungsprämie.",
       "notiz": {
        "titel": "Handzettel: Folie 3 — Ein zweiter Lieferant",
        "zeilen": [
         "Freigabe neuer Lieferanten: sechs Monate bis zwei Jahre",
         "Musterteile, Prüfungen, manchmal Zulassung durch Kunden"
        ],
        "feld": "Vereinbarung mit den zweiten Lieferanten:",
        "frei": true,
        "muster": "dauerhaft mindestens zwanzig Prozent des Bedarfs",
        "loesungen": [
         "mindestens zwanzig Prozent des Bedarfs",
         "mindestens 20 %",
         "20 Prozent der Menge",
         "dauerhaft 20 % Anteil",
         "mind. 20 % des Bedarfs"
        ]
       },
       "stelle": "mindestens zwanzig Prozent unseres Bedarfs",
       "erklaerung": "Die Freigabedauer steht schon auf dem Handzettel. Neu ist der feste Mindestanteil.",
       "frage": "Ergänze deine Notiz auf dem Handzettel."
      },
      {
       "ort": "Vortrag — Abschnitt 4",
       "wer": "Mann",
       "text": "Der zweite Hebel waren die Lagerbestände. Wir haben jahrelang nach dem Prinzip gearbeitet, so wenig wie möglich auf Lager zu haben, weil Lager Geld bindet und Platz kostet. Das hat sich bewährt, solange alles lief. Wir haben das nicht komplett aufgegeben, aber wir unterscheiden heute. Für normale Teile, die wir bei mehreren Lieferanten bekommen, bleibt es bei kleinen Beständen. Für die Teile auf der roten Liste halten wir jetzt einen Sicherheitsbestand für zwölf Wochen Produktion vor. Das bindet etwa eine Million Euro zusätzlich, und ich gebe zu, unser Finanzchef war davon nicht begeistert. Wir haben lange darüber gestritten. Aber verglichen mit den vier Millionen, die damals blockiert waren, ist das eine überschaubare Versicherung. Und zwölf Wochen reichen in aller Regel, um einen Engpass zu überbrücken oder einen Ersatz zu finden.",
       "notiz": {
        "titel": "Handzettel: Folie 4 — Lagerbestände",
        "zeilen": [
         "früher: möglichst geringe Bestände",
         "normale Teile: weiterhin kleine Bestände"
        ],
        "feld": "Teile der roten Liste:",
        "frei": true,
        "muster": "Sicherheitsbestand für zwölf Wochen Produktion",
        "loesungen": [
         "Sicherheitsbestand für zwölf Wochen",
         "12 Wochen Vorrat",
         "Lager für 12 Wochen",
         "zwölf Wochen Sicherheitsbestand",
         "Bestand für zwölf Wochen Produktion"
        ]
       },
       "stelle": "einen Sicherheitsbestand für zwölf Wochen Produktion",
       "erklaerung": "Die eine Million ist der Preis, gefragt ist die Regel für die kritischen Teile.",
       "frage": "Ergänze deine Notiz auf dem Handzettel."
      },
      {
       "ort": "Vortrag — Abschnitt 5",
       "wer": "Mann",
       "text": "Dritter Punkt, und hier wird es schwierig. Wir kennen unsere direkten Lieferanten gut. Aber wer liefert eigentlich an unsere Lieferanten? Bei dem Brand vor vier Jahren lag das eigentliche Problem nämlich tiefer. Mehrere unserer anderen Lieferanten, die wir für unabhängig hielten, haben ein bestimmtes Kunststoffgehäuse aus genau demselben Werk bezogen. Als dieses Werk ausfiel, standen plötzlich auch Lieferanten still, die mit dem Brand scheinbar gar nichts zu tun hatten. Wir hatten also eine Abhängigkeit, die wir gar nicht sehen konnten. Heute verlangen wir von allen Lieferanten der roten Liste, dass sie uns ihre wichtigsten Vorlieferanten nennen. Das war anfangs sehr umstritten, viele sahen darin ein Geschäftsgeheimnis und befürchteten, wir wollten direkt bei ihren Lieferanten kaufen. Inzwischen machen fast alle mit, weil wir die Angaben vertraulich behandeln.",
       "notiz": {
        "titel": "Handzettel: Folie 5 — Die Lieferanten der Lieferanten",
        "zeilen": [
         "direkte Lieferanten gut bekannt",
         "Problem: versteckte Abhängigkeit über ein gemeinsames Werk"
        ],
        "feld": "Heutige Forderung an Lieferanten der roten Liste:",
        "frei": true,
        "muster": "ihre wichtigsten Vorlieferanten offenlegen",
        "loesungen": [
         "Vorlieferanten nennen",
         "Vorlieferanten offenlegen",
         "Angabe der wichtigsten Vorlieferanten",
         "ihre eigenen Lieferanten nennen",
         "Transparenz über Vorlieferanten"
        ]
       },
       "stelle": "dass sie uns ihre wichtigsten Vorlieferanten nennen",
       "erklaerung": "Die versteckte Abhängigkeit war das Problem. Die Forderung ist, die Vorlieferanten zu nennen.",
       "frage": "Ergänze deine Notiz auf dem Handzettel."
      },
      {
       "ort": "Vortrag — Abschnitt 6",
       "wer": "Mann",
       "text": "Viertens haben wir uns die Frage gestellt, ob alles so weit weg produziert werden muss. Ich bin kein Freund von Parolen, nach denen jetzt alles zurück nach Deutschland kommen soll. Das ist bei vielen Teilen weder bezahlbar noch möglich, weil es die Hersteller hier gar nicht mehr gibt. Aber wir haben bei jedem Teil der roten Liste geprüft, ob es einen Lieferanten in Europa gibt. Bei elf von achtzehn Teilen haben wir einen gefunden, vor allem in Polen, Tschechien und Portugal. Die Teile sind dort im Schnitt etwa zwölf Prozent teurer. Dafür sind sie in drei Tagen bei uns statt in sechs Wochen, und wir können im Notfall einfach hinfahren und mit den Leuten reden. Bei den übrigen sieben Teilen suchen wir weiter, aber da gibt es in Europa schlicht keinen Hersteller mit der nötigen Erfahrung.",
       "notiz": {
        "titel": "Handzettel: Folie 6 — Lieferanten in Europa",
        "zeilen": [
         "nicht alles zurück nach Deutschland",
         "geprüft: Lieferanten in Europa"
        ],
        "feld": "Ergebnis der Suche in Europa:",
        "frei": true,
        "muster": "für elf von achtzehn Teilen Lieferanten gefunden, etwa zwölf Prozent teurer",
        "loesungen": [
         "elf von achtzehn Teilen",
         "11 von 18",
         "Lieferanten für elf Teile",
         "11 Teile in Europa",
         "elf Teile, vor allem Polen, Tschechien, Portugal"
        ]
       },
       "stelle": "Bei elf von achtzehn Teilen haben wir einen gefunden",
       "erklaerung": "Zwölf Prozent ist der Mehrpreis, sieben Teile fehlen noch.",
       "frage": "Ergänze deine Notiz auf dem Handzettel."
      },
      {
       "ort": "Vortrag — Abschnitt 7",
       "wer": "Mann",
       "text": "Der fünfte Punkt ist eher eine Frage der Haltung. Früher haben wir unsere Einkäufer daran gemessen, wie viel sie beim Preis herausholen. Jedes Jahr drei Prozent weniger, das war das Ziel, und wer es geschafft hat, bekam eine Prämie. Das Problem ist: Wenn Sie einen Lieferanten jedes Jahr an die Wand drücken, dann sind Sie in der Krise nicht der Kunde, den er zuerst beliefert. Wir haben das damals deutlich zu spüren bekommen, als andere Kunden vor uns bedient wurden. Heute haben wir mit unseren zehn wichtigsten Lieferanten Verträge über drei bis fünf Jahre, mit festen Gesprächsterminen zweimal im Jahr, bei denen es ausdrücklich nicht nur um Preise geht. Und die Prämie der Einkäufer hängt heute auch davon ab, wie zuverlässig die Versorgung läuft, nicht allein vom Preis.",
       "notiz": {
        "titel": "Handzettel: Folie 7 — Partnerschaft statt Preisdruck",
        "zeilen": [
         "früher: Ziel drei Prozent Preissenkung pro Jahr",
         "Folge in der Krise: nicht bevorzugt beliefert"
        ],
        "feld": "Heute: Verträge mit den zehn wichtigsten Lieferanten:",
        "frei": true,
        "muster": "Laufzeit drei bis fünf Jahre, Gespräche zweimal im Jahr",
        "loesungen": [
         "drei bis fünf Jahre",
         "3 bis 5 Jahre Laufzeit",
         "mehrjährige Verträge",
         "langfristig, drei bis fünf Jahre",
         "3 bis 5 Jahre, zweimal jährlich Gespräche"
        ]
       },
       "stelle": "Verträge über drei bis fünf Jahre",
       "erklaerung": "Die drei Prozent waren das alte Ziel. Neu sind die langen Verträge.",
       "frage": "Ergänze deine Notiz auf dem Handzettel."
      },
      {
       "ort": "Vortrag — Abschnitt 8",
       "wer": "Mann",
       "text": "Ein Wort noch zu den gesetzlichen Pflichten, weil ich danach immer gefragt werde. Seit einigen Jahren gibt es das Lieferkettengesetz, das größere Unternehmen verpflichtet, auf Menschenrechte und Umweltstandards bei ihren Lieferanten zu achten. Wir sind mit unseren rund sechshundert Mitarbeitern formal gar nicht direkt betroffen. Trotzdem müssen wir die Anforderungen weitgehend erfüllen, weil unsere großen Kunden aus der Industrie sie an uns weitergeben. Wir bekommen inzwischen jeden Monat mehrere Fragebögen, manche mit über hundert Fragen. Am Anfang hat uns das ziemlich geärgert. Mein Tipp: Nutzen Sie diese Arbeit doppelt. Die Fragen nach Risiken bei Ihren Lieferanten sind fast dieselben, die Sie für Ihre eigene Versorgungssicherheit stellen sollten. Wir haben beides in einer einzigen Datenbank zusammengeführt und sparen uns so eine Menge doppelter Arbeit.",
       "notiz": {
        "titel": "Handzettel: Folie 8 — Gesetzliche Pflichten",
        "zeilen": [
         "Lieferkettengesetz: Pflichten für größere Unternehmen",
         "eigene Firma formal nicht direkt betroffen"
        ],
        "feld": "Warum die Firma trotzdem betroffen ist:",
        "frei": true,
        "muster": "große Kunden geben die Anforderungen an sie weiter",
        "loesungen": [
         "Kunden geben Anforderungen weiter",
         "über die großen Kunden",
         "Fragebögen der Kunden",
         "Großkunden verlangen es",
         "indirekt über Kunden"
        ]
       },
       "stelle": "weil unsere großen Kunden aus der Industrie sie an uns weitergeben",
       "erklaerung": "„Trotzdem“ leitet den Grund ein, warum die Pflichten indirekt doch gelten.",
       "frage": "Ergänze deine Notiz auf dem Handzettel."
      },
      {
       "ort": "Vortrag — Abschnitt 9",
       "wer": "Mann",
       "text": "Der letzte Baustein ist ein Frühwarnsystem. Das klingt aufwendiger, als es ist. Eine Mitarbeiterin im Einkauf verbringt jeden Montagvormittag damit, Nachrichten zu unseren wichtigsten Lieferländern und Lieferanten durchzusehen: Streiks, Unwetter, Hafenschließungen, Insolvenzen. Dazu kommt eine einfache Tabelle, in der jeder Lieferant der roten Liste eine Ampelfarbe hat. Wenn ein Lieferant auf Gelb springt, rufen wir dort an und erhöhen gegebenenfalls unsere Bestellungen, bevor andere es tun. Bei Rot wird der zweite Lieferant aktiviert. Im letzten Jahr hat uns das bei einem Streik in einem belgischen Hafen etwa zehn Tage Vorsprung verschafft. Die Konkurrenz hat davon erst erfahren, als die Container nicht ankamen. Wir hatten zu diesem Zeitpunkt schon einen Teil der Ware über einen anderen Hafen umgeleitet.",
       "notiz": {
        "titel": "Handzettel: Folie 9 — Frühwarnsystem",
        "zeilen": [
         "jeden Montag: Nachrichten zu Lieferländern auswerten",
         "Tabelle mit Ampelfarbe für jeden Lieferanten"
        ],
        "feld": "Vorgehen, wenn ein Lieferant auf Gelb steht:",
        "frei": true,
        "muster": "Lieferanten anrufen, eventuell mehr bestellen",
        "loesungen": [
         "anrufen und mehr bestellen",
         "Lieferant kontaktieren",
         "nachfragen, Bestellung erhöhen",
         "Kontakt aufnehmen und Menge erhöhen",
         "Bestellungen erhöhen"
        ]
       },
       "stelle": "rufen wir dort an und erhöhen gegebenenfalls unsere Bestellungen",
       "erklaerung": "Den zweiten Lieferanten gibt es erst bei Rot.",
       "frage": "Ergänze deine Notiz auf dem Handzettel."
      },
      {
       "ort": "Vortrag — Abschnitt 10",
       "wer": "Mann",
       "text": "Damit komme ich zum Schluss. Hat sich der Aufwand gelohnt? In den letzten zwei Jahren hatten wir mehrere Störungen, die uns früher sicher getroffen hätten. Wir konnten in dieser Zeit trotzdem jeden einzelnen Auftrag pünktlich ausliefern. Mehrere Kunden haben uns ausdrücklich deshalb neue Aufträge gegeben, weil wir lieferfähig waren, als andere es nicht waren. Natürlich ist unser Einkauf dadurch teurer geworden, unterm Strich um etwa zwei Prozent. Das ist Geld, das wir jedes Jahr bewusst ausgeben, und ich würde es jederzeit wieder tun. Mein Rat an Sie: Fangen Sie mit Ihrer eigenen roten Liste an. Das kostet einen Nachmittag und ein paar Tassen Kaffee, und Sie wissen danach, wo Sie wirklich verwundbar sind. Alles andere ergibt sich daraus. Ich danke Ihnen und stehe gern für Fragen zur Verfügung.",
       "notiz": {
        "titel": "Handzettel: Folie 10 — Fazit und Empfehlung",
        "zeilen": [
         "mehrere Störungen in zwei Jahren, alle Aufträge pünktlich",
         "Einkauf um etwa zwei Prozent teurer"
        ],
        "feld": "Empfehlung zum Einstieg:",
        "frei": true,
        "muster": "eigene rote Liste der Bauteile ohne Alternative erstellen",
        "loesungen": [
         "eigene rote Liste erstellen",
         "rote Liste anlegen",
         "mit einer roten Liste anfangen",
         "Liste kritischer Teile erstellen",
         "kritische Bauteile auflisten"
        ]
       },
       "stelle": "Fangen Sie mit Ihrer eigenen roten Liste an",
       "erklaerung": "„Mein Rat an Sie“ kündigt die Empfehlung an.",
       "frage": "Ergänze deine Notiz auf dem Handzettel."
      }
     ]
    }
   ]
  },
  {
   "id": "tc1bhl2",
   "titel": "Prüfungslauf 2",
   "minuten": 40,
   "teile": [
    {
     "nr": 1,
     "art": "diskussion",
     "aufgaben": [
      {
       "von": "Person 1 — Pflegedienstleiterin bei einem ambulanten Pflegedienst, Ende vierzig",
       "wer": "Frau",
       "text": "Letztes Jahr kam die Anweisung von der Geschäftsführung: Ab sofort wird jeder Hausbesuch auf dem Tablet dokumentiert. Das Programm hatte jemand in der Zentrale ausgesucht, der nie bei einer Patientin im Wohnzimmer gestanden hat. Niemand hat uns gefragt, was wir brauchen. Jetzt haben wir Pflichtfelder, die bei uns gar nicht vorkommen, und für eine Wundversorgung muss ich mich durch sieben Bildschirme klicken. Gegen digitale Dokumentation habe ich überhaupt nichts, die Zettelwirtschaft vorher war auch nicht gut. Aber man hätte die Leute, die damit arbeiten, vorher einbeziehen müssen. Inzwischen gibt es eine Arbeitsgruppe, aber die Änderungen dauern Monate, und so lange klicken wir eben weiter.",
       "loesung": 1,
       "stelle": "Niemand hat uns gefragt, was wir brauchen",
       "erklaerung": "Sie ist nicht gegen Digitalisierung, kritisiert aber, dass das Programm über die Köpfe der Pflegekräfte hinweg ausgewählt wurde.",
       "frage": "Welche Aussage passt zu dieser Person?",
       "opt": [
        "Seit der Umstellung auf digitale Akten haben wir mehr Arbeit statt weniger.",
        "Ein neues Programm wurde ohne Beteiligung der Beschäftigten eingeführt.",
        "Ich nutze künstliche Intelligenz, verlasse mich aber nicht blind auf die Ergebnisse.",
        "Durch die Digitalisierung ist mein Arbeitsplatz langfristig gefährdet.",
        "Ältere Beschäftigte haben die Umstellung besser bewältigt als erwartet.",
        "Digitale Werkzeuge haben es uns ermöglicht, Kunden auf ganz neue Weise zu erreichen.",
        "Die Technik an meinem Arbeitsplatz ist so veraltet, dass von Digitalisierung kaum die Rede sein kann.",
        "Ich fühle mich durch digitale Kontrolle bei der Arbeit überwacht.",
        "Ich wünsche mir Zeiten, in denen ich bewusst nicht erreichbar bin.",
        "Sensoren an den Maschinen ersparen uns heute ungeplante Stillstände."
       ],
       "fest": true
      },
      {
       "von": "Person 2 — Inhaber einer Steuerkanzlei, Anfang sechzig",
       "wer": "Mann",
       "text": "Als wir vor drei Jahren auf die papierlose Kanzlei umgestellt haben, hatte ich vor allem bei zwei Mitarbeiterinnen Sorge. Beide sind über sechzig, beide arbeiten seit über dreißig Jahren mit Ordnern. Ich hatte schon überlegt, ob ich ihnen anbiete, früher in Rente zu gehen. Und dann? Die beiden waren die Ersten, die das neue System wirklich beherrscht haben. Sie haben sich hingesetzt und alles durchgearbeitet, während die Jüngeren eher versucht haben, das System auszutricksen. Heute fragen die jungen Kollegen sie um Rat. Ich habe mich da gründlich getäuscht, und ich bin froh darüber. Seitdem stelle ich übrigens auch wieder Bewerber über fünfzig ein, ohne lange zu zögern.",
       "loesung": 4,
       "stelle": "Ich habe mich da gründlich getäuscht",
       "erklaerung": "Er hatte bei den älteren Mitarbeiterinnen Probleme erwartet, sie kamen aber am besten zurecht.",
       "frage": "Welche Aussage passt zu dieser Person?",
       "opt": [
        "Seit der Umstellung auf digitale Akten haben wir mehr Arbeit statt weniger.",
        "Ein neues Programm wurde ohne Beteiligung der Beschäftigten eingeführt.",
        "Ich nutze künstliche Intelligenz, verlasse mich aber nicht blind auf die Ergebnisse.",
        "Durch die Digitalisierung ist mein Arbeitsplatz langfristig gefährdet.",
        "Ältere Beschäftigte haben die Umstellung besser bewältigt als erwartet.",
        "Digitale Werkzeuge haben es uns ermöglicht, Kunden auf ganz neue Weise zu erreichen.",
        "Die Technik an meinem Arbeitsplatz ist so veraltet, dass von Digitalisierung kaum die Rede sein kann.",
        "Ich fühle mich durch digitale Kontrolle bei der Arbeit überwacht.",
        "Ich wünsche mir Zeiten, in denen ich bewusst nicht erreichbar bin.",
        "Sensoren an den Maschinen ersparen uns heute ungeplante Stillstände."
       ],
       "fest": true
      },
      {
       "von": "Person 3 — Schichtleiter in einer Papierfabrik, Mitte fünfzig",
       "wer": "Mann",
       "text": "Unsere große Papiermaschine hat früher zwei oder drei Mal im Jahr plötzlich gestanden, meistens wegen eines Lagerschadens. Jeder Stillstand hat uns locker einen Tag Produktion gekostet, und die Reparatur nachts am Wochenende war auch kein Vergnügen. Seit gut einem Jahr hängen an den wichtigsten Lagern kleine Sensoren, die die Schwingungen messen. Wenn sich da etwas verändert, bekommen wir eine Meldung auf den Bildschirm, oft Wochen bevor etwas kaputtgeht. Dann tauschen wir das Teil beim nächsten geplanten Wartungstermin. Seitdem hatten wir keinen einzigen ungeplanten Ausfall mehr. Am Anfang waren die älteren Kollegen ziemlich skeptisch, weil sie lieber nach Gehör gearbeitet haben. Inzwischen will keiner mehr darauf verzichten.",
       "loesung": 9,
       "stelle": "keinen einzigen ungeplanten Ausfall mehr",
       "erklaerung": "Die Sensoren melden Schäden früh, sodass die Maschine nicht mehr unerwartet stillsteht.",
       "frage": "Welche Aussage passt zu dieser Person?",
       "opt": [
        "Seit der Umstellung auf digitale Akten haben wir mehr Arbeit statt weniger.",
        "Ein neues Programm wurde ohne Beteiligung der Beschäftigten eingeführt.",
        "Ich nutze künstliche Intelligenz, verlasse mich aber nicht blind auf die Ergebnisse.",
        "Durch die Digitalisierung ist mein Arbeitsplatz langfristig gefährdet.",
        "Ältere Beschäftigte haben die Umstellung besser bewältigt als erwartet.",
        "Digitale Werkzeuge haben es uns ermöglicht, Kunden auf ganz neue Weise zu erreichen.",
        "Die Technik an meinem Arbeitsplatz ist so veraltet, dass von Digitalisierung kaum die Rede sein kann.",
        "Ich fühle mich durch digitale Kontrolle bei der Arbeit überwacht.",
        "Ich wünsche mir Zeiten, in denen ich bewusst nicht erreichbar bin.",
        "Sensoren an den Maschinen ersparen uns heute ungeplante Stillstände."
       ],
       "fest": true
      },
      {
       "von": "Person 4 — Juristin in einer Rechtsabteilung, Anfang vierzig",
       "wer": "Frau",
       "text": "Ich benutze inzwischen fast täglich ein Programm mit künstlicher Intelligenz, um lange Verträge zusammenzufassen oder einen ersten Entwurf für ein Schreiben zu bekommen. Das spart mir pro Woche bestimmt einen halben Tag. Aber ich habe auch schon erlebt, dass das Programm eine Vertragsklausel einfach erfunden hat, die es im Original gar nicht gab, und zwar in einem sehr überzeugenden Ton. Seitdem lese ich jede Zusammenfassung gegen das Original. Ich sehe das wie bei einer neuen Praktikantin: Sie ist schnell und fleißig, aber unterschreiben würde ich nichts, was ich nicht selbst geprüft habe. Meine jüngeren Kollegen sind da manchmal etwas zu vertrauensselig, finde ich.",
       "loesung": 2,
       "stelle": "Seitdem lese ich jede Zusammenfassung gegen das Original",
       "erklaerung": "Sie nutzt das Programm täglich, prüft aber jedes Ergebnis selbst nach.",
       "frage": "Welche Aussage passt zu dieser Person?",
       "opt": [
        "Seit der Umstellung auf digitale Akten haben wir mehr Arbeit statt weniger.",
        "Ein neues Programm wurde ohne Beteiligung der Beschäftigten eingeführt.",
        "Ich nutze künstliche Intelligenz, verlasse mich aber nicht blind auf die Ergebnisse.",
        "Durch die Digitalisierung ist mein Arbeitsplatz langfristig gefährdet.",
        "Ältere Beschäftigte haben die Umstellung besser bewältigt als erwartet.",
        "Digitale Werkzeuge haben es uns ermöglicht, Kunden auf ganz neue Weise zu erreichen.",
        "Die Technik an meinem Arbeitsplatz ist so veraltet, dass von Digitalisierung kaum die Rede sein kann.",
        "Ich fühle mich durch digitale Kontrolle bei der Arbeit überwacht.",
        "Ich wünsche mir Zeiten, in denen ich bewusst nicht erreichbar bin.",
        "Sensoren an den Maschinen ersparen uns heute ungeplante Stillstände."
       ],
       "fest": true
      },
      {
       "von": "Person 5 — Lehrer an einer Berufsschule, Ende dreißig",
       "wer": "Mann",
       "text": "Alle reden über Digitalisierung, und bei uns an der Berufsschule laufen in einem Computerraum noch Rechner, die älter sind als meine Schüler. Das Netz bricht zusammen, sobald zwei Klassen gleichzeitig online sind. Wir haben vom Land Geld für Tablets bekommen, die liegen jetzt im Schrank, weil es niemanden gibt, der sie einrichtet und wartet. Ich würde ja gern moderne Steuerungstechnik unterrichten, so wie sie in den Betrieben längst Alltag ist. Aber mit dieser Ausstattung erkläre ich vieles noch an der Tafel. Für die Auszubildenden ist das ehrlich gesagt peinlich. Die Betriebe erwarten von uns, dass wir die jungen Leute auf die Praxis vorbereiten, und das können wir so kaum leisten.",
       "loesung": 6,
       "stelle": "die liegen jetzt im Schrank",
       "erklaerung": "Alte Rechner, schwaches Netz, unbenutzte Tablets: Die Ausstattung verhindert digitalen Unterricht.",
       "frage": "Welche Aussage passt zu dieser Person?",
       "opt": [
        "Seit der Umstellung auf digitale Akten haben wir mehr Arbeit statt weniger.",
        "Ein neues Programm wurde ohne Beteiligung der Beschäftigten eingeführt.",
        "Ich nutze künstliche Intelligenz, verlasse mich aber nicht blind auf die Ergebnisse.",
        "Durch die Digitalisierung ist mein Arbeitsplatz langfristig gefährdet.",
        "Ältere Beschäftigte haben die Umstellung besser bewältigt als erwartet.",
        "Digitale Werkzeuge haben es uns ermöglicht, Kunden auf ganz neue Weise zu erreichen.",
        "Die Technik an meinem Arbeitsplatz ist so veraltet, dass von Digitalisierung kaum die Rede sein kann.",
        "Ich fühle mich durch digitale Kontrolle bei der Arbeit überwacht.",
        "Ich wünsche mir Zeiten, in denen ich bewusst nicht erreichbar bin.",
        "Sensoren an den Maschinen ersparen uns heute ungeplante Stillstände."
       ],
       "fest": true
      },
      {
       "von": "Person 6 — Fahrerin bei einem Paketdienst, Ende zwanzig",
       "wer": "Frau",
       "text": "In meinem Transporter ist ein Gerät, das jede Minute meinen Standort meldet. Auf dem Handscanner sieht die Zentrale, wie lange ich an jeder Haustür stehe. Wenn ich mal fünf Minuten länger an einer Adresse bin, weil eine ältere Dame Hilfe mit einem schweren Paket braucht, ruft der Disponent an und fragt, was los ist. Natürlich hilft das System auch, die Routen sind viel besser geplant als früher. Aber ich habe das Gefühl, dass jemand die ganze Zeit über meine Schulter schaut. Das macht auf Dauer etwas mit einem. Ich habe deshalb schon überlegt, mir eine Stelle bei einer kleineren Firma zu suchen.",
       "loesung": 7,
       "stelle": "dass jemand die ganze Zeit über meine Schulter schaut",
       "erklaerung": "Trotz besserer Routen empfindet sie die ständige Ortung als Überwachung.",
       "frage": "Welche Aussage passt zu dieser Person?",
       "opt": [
        "Seit der Umstellung auf digitale Akten haben wir mehr Arbeit statt weniger.",
        "Ein neues Programm wurde ohne Beteiligung der Beschäftigten eingeführt.",
        "Ich nutze künstliche Intelligenz, verlasse mich aber nicht blind auf die Ergebnisse.",
        "Durch die Digitalisierung ist mein Arbeitsplatz langfristig gefährdet.",
        "Ältere Beschäftigte haben die Umstellung besser bewältigt als erwartet.",
        "Digitale Werkzeuge haben es uns ermöglicht, Kunden auf ganz neue Weise zu erreichen.",
        "Die Technik an meinem Arbeitsplatz ist so veraltet, dass von Digitalisierung kaum die Rede sein kann.",
        "Ich fühle mich durch digitale Kontrolle bei der Arbeit überwacht.",
        "Ich wünsche mir Zeiten, in denen ich bewusst nicht erreichbar bin.",
        "Sensoren an den Maschinen ersparen uns heute ungeplante Stillstände."
       ],
       "fest": true
      },
      {
       "von": "Person 7 — Inhaber eines Fahrradladens, Mitte dreißig",
       "wer": "Mann",
       "text": "Ich habe meinen Laden in einer Kleinstadt im Sauerland. Da kommen im Winter am Tag vielleicht drei Kunden herein. Vor zwei Jahren habe ich angefangen, kurze Videos von Reparaturen zu drehen und ins Netz zu stellen, am Anfang nur zum Spaß. Inzwischen schauen sich das ein paar tausend Leute regelmäßig an, und ich verkaufe Ersatzteile und Umbauten nach ganz Deutschland, sogar nach Österreich. Die Werkstatt ist dieselbe wie vorher, nur dass jetzt eine Kamera an der Wand hängt. Ohne das Internet hätte ich den Laden wahrscheinlich zumachen müssen. Jetzt habe ich zwei Mitarbeiter eingestellt. Und im Sommer kommen sogar Kunden aus Hamburg, nur um mich einmal persönlich kennenzulernen.",
       "loesung": 5,
       "stelle": "ich verkaufe Ersatzteile und Umbauten nach ganz Deutschland",
       "erklaerung": "Durch seine Videos erreicht er Kunden weit über seine Kleinstadt hinaus.",
       "frage": "Welche Aussage passt zu dieser Person?",
       "opt": [
        "Seit der Umstellung auf digitale Akten haben wir mehr Arbeit statt weniger.",
        "Ein neues Programm wurde ohne Beteiligung der Beschäftigten eingeführt.",
        "Ich nutze künstliche Intelligenz, verlasse mich aber nicht blind auf die Ergebnisse.",
        "Durch die Digitalisierung ist mein Arbeitsplatz langfristig gefährdet.",
        "Ältere Beschäftigte haben die Umstellung besser bewältigt als erwartet.",
        "Digitale Werkzeuge haben es uns ermöglicht, Kunden auf ganz neue Weise zu erreichen.",
        "Die Technik an meinem Arbeitsplatz ist so veraltet, dass von Digitalisierung kaum die Rede sein kann.",
        "Ich fühle mich durch digitale Kontrolle bei der Arbeit überwacht.",
        "Ich wünsche mir Zeiten, in denen ich bewusst nicht erreichbar bin.",
        "Sensoren an den Maschinen ersparen uns heute ungeplante Stillstände."
       ],
       "fest": true
      },
      {
       "von": "Person 8 — Sachbearbeiterin im Sozialamt, Mitte fünfzig",
       "wer": "Frau",
       "text": "Seit dem Frühjahr gibt es bei uns die elektronische Akte. Versprochen hat man uns, dass alles schneller geht. Tatsächlich kommen die Anträge aber weiterhin zum großen Teil auf Papier, per Post oder persönlich abgegeben. Jedes Blatt müssen wir jetzt einscannen, benennen und richtig zuordnen, und die Papierakte dürfen wir aus rechtlichen Gründen trotzdem noch nicht wegwerfen. Wir führen also zwei Akten statt einer. Ich sitze jeden Tag eine Stunde länger am Scanner als früher am Aktenschrank. Ich glaube schon, dass das irgendwann besser wird, aber im Moment haben wir doppelte Arbeit. Die jüngeren Kolleginnen kommen damit übrigens auch nicht besser zurecht als wir Älteren.",
       "loesung": 0,
       "stelle": "Wir führen also zwei Akten statt einer",
       "erklaerung": "Statt Entlastung bringt die elektronische Akte zunächst zusätzlichen Aufwand.",
       "frage": "Welche Aussage passt zu dieser Person?",
       "opt": [
        "Seit der Umstellung auf digitale Akten haben wir mehr Arbeit statt weniger.",
        "Ein neues Programm wurde ohne Beteiligung der Beschäftigten eingeführt.",
        "Ich nutze künstliche Intelligenz, verlasse mich aber nicht blind auf die Ergebnisse.",
        "Durch die Digitalisierung ist mein Arbeitsplatz langfristig gefährdet.",
        "Ältere Beschäftigte haben die Umstellung besser bewältigt als erwartet.",
        "Digitale Werkzeuge haben es uns ermöglicht, Kunden auf ganz neue Weise zu erreichen.",
        "Die Technik an meinem Arbeitsplatz ist so veraltet, dass von Digitalisierung kaum die Rede sein kann.",
        "Ich fühle mich durch digitale Kontrolle bei der Arbeit überwacht.",
        "Ich wünsche mir Zeiten, in denen ich bewusst nicht erreichbar bin.",
        "Sensoren an den Maschinen ersparen uns heute ungeplante Stillstände."
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
         "text": "Guten Morgen zusammen. Wir haben heute eine Stunde, und ich würde gern mit dem Stand beim Zeitplan anfangen. Ursprünglich wollten wir das neue Lagerverwaltungssystem am ersten März in Betrieb nehmen. Frau Haas, wie sieht es aus?"
        },
        {
         "wer": "Frau",
         "text": "Ehrlich gesagt, der März wird schwierig. Die Software selbst ist fertig eingerichtet. Das Problem ist die Schnittstelle zu unserem Warenwirtschaftssystem. Der Anbieter hat uns zugesagt, sie bis Ende Januar zu liefern, aber nach meinen Erfahrungen mit dieser Firma glaube ich das erst, wenn ich sie sehe. Beim letzten Projekt hat der Anbieter zwei Termine verschoben, jeweils um mehrere Wochen und jedes Mal kurzfristig. Ohne die Schnittstelle können wir aber nicht starten, denn dann müssten die Kollegen jede Lieferung doppelt erfassen."
        }
       ],
       "frage": "Frau Haas zweifelt am Starttermin im März, weil …",
       "opt": [
        "… die Software noch nicht eingerichtet ist.",
        "… das Lager zu wenig Personal hat.",
        "… eine Schnittstelle vom Anbieter noch fehlt."
       ],
       "loesung": 2,
       "stelle": "Das Problem ist die Schnittstelle",
       "erklaerung": "Die Software ist fertig. Es fehlt die Verbindung zum Warenwirtschaftssystem."
      },
      {
       "ort": "Gespräch — Abschnitt 2",
       "zeilen": [
        {
         "wer": "Mann",
         "text": "Darf ich da gleich einhaken? Für uns im Lager wäre ein späterer Termin ohnehin besser. Im März beginnt die Gartensaison, da verschicken wir fast doppelt so viele Pakete wie im Winter. Wenn wir ausgerechnet dann umstellen und es hakt irgendwo, haben wir ein echtes Problem. Ich hätte lieber Anfang Februar umgestellt oder eben erst im Juni, wenn es wieder ruhiger wird. Letztes Jahr haben wir im April an manchen Tagen bis zehn Uhr abends gepackt. Da noch ein neues System dazu, das halten meine Leute nicht durch."
        },
        {
         "wer": "Frau",
         "text": "Februar ist wegen der Schnittstelle unrealistisch, das haben wir gerade gehört. Bleibt also der Juni."
        }
       ],
       "frage": "Herr Ebert hält den März für ungünstig, weil …",
       "opt": [
        "… dann im Lager besonders viel los ist.",
        "… das Lager im März umgebaut wird.",
        "… er im Juni Urlaub hat."
       ],
       "loesung": 0,
       "stelle": "Im März beginnt die Gartensaison",
       "erklaerung": "In der Gartensaison verdoppelt sich die Zahl der Pakete."
      },
      {
       "ort": "Gespräch — Abschnitt 3",
       "zeilen": [
        {
         "wer": "Frau",
         "text": "Also, wenn ich das zusammenfasse: Juni wäre für das Lager besser und gibt der Informatik mehr Luft. Das Problem ist, dass ich das der Geschäftsführung erklären muss. Der März war dort fest eingeplant, auch wegen der Lizenzkosten für das alte System, die wir dann drei Monate länger zahlen. Die Geschäftsführung hat das Projekt in der letzten Sitzung als eines der wichtigsten des Jahres bezeichnet."
        },
        {
         "wer": "Frau",
         "text": "Das sind etwa viertausend Euro im Monat. Das ist ärgerlich, aber deutlich weniger, als uns ein Durcheinander in der Hauptsaison kosten würde. Ein einziger Tag, an dem nichts verschickt wird, kostet uns in der Saison mehr als diese drei Monate zusammen."
        },
        {
         "wer": "Frau",
         "text": "Das ist ein gutes Argument, das schreibe ich mir auf."
        }
       ],
       "frage": "Eine Verschiebung auf Juni würde …",
       "opt": [
        "… keine zusätzlichen Kosten verursachen.",
        "… zusätzliche Lizenzkosten für das alte System bedeuten.",
        "… von der Geschäftsführung schon genehmigt sein."
       ],
       "loesung": 1,
       "stelle": "die wir dann drei Monate länger zahlen",
       "erklaerung": "Die Geschäftsführung muss erst noch überzeugt werden."
      },
      {
       "ort": "Gespräch — Abschnitt 4",
       "zeilen": [
        {
         "wer": "Frau",
         "text": "Nächster Punkt: die Schulungen. Herr Ebert, wie viele Leute müssen geschult werden?"
        },
        {
         "wer": "Mann",
         "text": "Alle zweiundvierzig im Lager, dazu die Leiharbeiter in der Saison. Und da sehe ich ein Problem. Der Anbieter bietet Schulungen in einem Seminarraum an, mit Bildschirmpräsentation, zwei Tage am Stück. Das funktioniert bei meinen Leuten nicht. Viele sprechen nicht so gut Deutsch, und die wollen nicht zuhören, sondern das Gerät in der Hand haben. Wer zwei Tage lang auf eine Leinwand schaut, hat am dritten Tag die Hälfte wieder vergessen. Und ich kann nicht zweiundvierzig Leute gleichzeitig zwei Tage aus dem Lager nehmen."
        },
        {
         "wer": "Frau",
         "text": "Die Handscanner könnten wir ja direkt mitbringen. Aber ich verstehe, dass das allein nicht reicht."
        }
       ],
       "frage": "Herr Ebert kritisiert an der geplanten Schulung, dass …",
       "opt": [
        "… sie zu teuer ist.",
        "… zu viele Leiharbeiter teilnehmen.",
        "… sie zu theoretisch und zu lang ist."
       ],
       "loesung": 2,
       "stelle": "Das funktioniert bei meinen Leuten nicht",
       "erklaerung": "Zwei Tage Präsentation im Seminarraum passen nicht zu Leuten, die lieber praktisch lernen."
      },
      {
       "ort": "Gespräch — Abschnitt 5",
       "zeilen": [
        {
         "wer": "Mann",
         "text": "Mir schwebt etwas anderes vor. Wir suchen uns aus jeder Schicht zwei erfahrene Leute, die schulen wir zuerst richtig gründlich. Und die bringen es dann ihren Kollegen direkt am Regal bei, in ihrer eigenen Sprache, wenn nötig. Das habe ich bei meinem alten Arbeitgeber so erlebt, und es hat viel besser funktioniert als jeder Seminarraum."
        },
        {
         "wer": "Frau",
         "text": "Das gefällt mir. Frau Haas, geht das mit dem Anbieter? Und es hat den Vorteil, dass die Kollegen später einen Ansprechpartner in der eigenen Schicht haben, wenn etwas nicht klappt."
        },
        {
         "wer": "Frau",
         "text": "Ich frage nach, aber die bieten so etwas eigentlich an. Das nennen sie dort Multiplikatorenschulung. Ich vermute, dass es sogar etwas günstiger wird, weil weniger Trainer anreisen müssen."
        }
       ],
       "frage": "Herr Ebert schlägt vor, dass …",
       "opt": [
        "… alle Mitarbeiter zwei Tage im Seminarraum geschult werden.",
        "… einzelne Mitarbeiter ihre Kollegen am Arbeitsplatz anlernen.",
        "… nur deutschsprachige Mitarbeiter geschult werden."
       ],
       "loesung": 1,
       "stelle": "die bringen es dann ihren Kollegen direkt am Regal bei",
       "erklaerung": "Erfahrene Kollegen werden geschult und geben ihr Wissen am Regal weiter."
      },
      {
       "ort": "Gespräch — Abschnitt 6",
       "zeilen": [
        {
         "wer": "Frau",
         "text": "Gut. Dann zum Budget. Wir liegen bisher im Rahmen, aber es gibt eine Position, die mir Sorgen macht. Frau Haas, die Geräte? Bisher haben wir etwa siebzig Prozent des Budgets ausgegeben, und das liegt genau im Plan."
        },
        {
         "wer": "Frau",
         "text": "Ja. Wir hatten fünfzig neue Handscanner eingeplant, das bleibt auch so. Jetzt hat sich aber herausgestellt, dass das Funknetz im hinteren Teil der Halle, wo die Paletten stehen, viel zu schwach ist. Wir brauchen dort mindestens sechs zusätzliche Funkstationen. Das kostet zusammen mit der Verkabelung noch einmal rund achtzehntausend Euro, die nicht im Plan stehen. Das ist bei der ersten Planung niemandem aufgefallen, weil dort bisher nur mit Papierlisten gearbeitet wurde."
        }
       ],
       "frage": "Zusätzliche Kosten entstehen, weil …",
       "opt": [
        "… im hinteren Hallenbereich der Empfang nicht ausreicht.",
        "… mehr Handscanner gebraucht werden als geplant.",
        "… die Handscanner teurer geworden sind."
       ],
       "loesung": 0,
       "stelle": "viel zu schwach ist",
       "erklaerung": "Die Zahl der Scanner bleibt gleich. Das Funknetz in der Halle reicht nicht."
      },
      {
       "ort": "Gespräch — Abschnitt 7",
       "zeilen": [
        {
         "wer": "Mann",
         "text": "Achtzehntausend? Können wir da nicht einfach mit den Leitungen arbeiten, die wir schon haben? Wir haben doch in der Halle überall Kabel liegen."
        },
        {
         "wer": "Frau",
         "text": "Leider nein. Ich habe das mit einem Elektriker durchgemessen. Ohne die Funkstationen bricht die Verbindung in diesem Bereich alle paar Minuten ab, und dann buchen die Kollegen Ware ins Leere. Das ist genau die Art von Fehler, die wir mit dem neuen System eigentlich abschaffen wollen. Und solche Fehlbuchungen findet man dann erst bei der nächsten Inventur."
        },
        {
         "wer": "Frau",
         "text": "Verstanden. Ich nehme das in die Vorlage für die Geschäftsführung auf, zusammen mit der Verschiebung. Ich glaube, mit dieser Begründung wird die Geschäftsführung das verstehen."
        }
       ],
       "frage": "Frau Nowak will die Mehrkosten …",
       "opt": [
        "… durch Einsparungen bei den Scannern ausgleichen.",
        "… der Geschäftsführung gemeinsam mit dem neuen Termin vorlegen.",
        "… vom Elektriker noch einmal prüfen lassen."
       ],
       "loesung": 1,
       "stelle": "Ich nehme das in die Vorlage für die Geschäftsführung auf",
       "erklaerung": "Der Elektriker hat schon gemessen. Frau Nowak bündelt beide Themen in einer Vorlage."
      },
      {
       "ort": "Gespräch — Abschnitt 8",
       "zeilen": [
        {
         "wer": "Frau",
         "text": "Herr Ebert, Sie hatten mir vor der Sitzung noch geschrieben, dass es im Lager Unruhe wegen des Projekts gibt?"
        },
        {
         "wer": "Mann",
         "text": "Ja. Es geht das Gerücht um, dass mit dem neuen System Stellen wegfallen. Weil das System die Wege berechnet und angeblich jeden Schritt aufzeichnet. Ich habe den Leuten gesagt, dass das nicht stimmt, aber von mir glauben sie es nicht so richtig. Zwei Kollegen haben mich schon gefragt, ob sie sich jetzt nach etwas anderem umsehen sollen."
        },
        {
         "wer": "Frau",
         "text": "Das ist ernst zu nehmen. Ich schlage vor, dass die Geschäftsführung selbst ins Lager kommt und das in einer Betriebsversammlung klarstellt, zusammen mit dem Betriebsrat. Wenn sich solche Gerüchte erst einmal festsetzen, bekommen wir sie kaum wieder aus der Welt."
        }
       ],
       "frage": "Um die Gerüchte zu entkräften, soll …",
       "opt": [
        "… Herr Ebert die Mitarbeiter einzeln informieren.",
        "… die Aufzeichnung von Wegen abgeschaltet werden.",
        "… die Geschäftsführung persönlich mit den Mitarbeitern sprechen."
       ],
       "loesung": 2,
       "stelle": "dass die Geschäftsführung selbst ins Lager kommt",
       "erklaerung": "Herrn Ebert glauben die Leute nicht. Deshalb soll die Geschäftsführung selbst kommen."
      },
      {
       "ort": "Gespräch — Abschnitt 9",
       "zeilen": [
        {
         "wer": "Frau",
         "text": "Darf ich dazu etwas Sachliches ergänzen? Das System zeichnet tatsächlich auf, wer welchen Auftrag wann gebucht hat. Das braucht man, um Fehler nachzuvollziehen. Eine Auswertung nach einzelnen Personen ist aber technisch gesperrt, das haben wir mit dem Betriebsrat schon im Herbst so vereinbart. Vielleicht sollte man das den Leuten genau so sagen, statt nur zu behaupten, es werde nichts aufgezeichnet. Wenn die Leute merken, dass wir etwas verschweigen, glauben sie uns gar nichts mehr."
        },
        {
         "wer": "Mann",
         "text": "Da haben Sie recht. Ehrlichkeit kommt da besser an. Ich kann das in der Versammlung gern auch selbst noch einmal erklären, mit Beispielen aus dem Alltag."
        }
       ],
       "frage": "Frau Haas betont, dass das System …",
       "opt": [
        "… Buchungen speichert, aber keine Auswertung einzelner Mitarbeiter erlaubt.",
        "… überhaupt keine Daten aufzeichnet.",
        "… die Leistung jedes Mitarbeiters misst."
       ],
       "loesung": 0,
       "stelle": "Eine Auswertung nach einzelnen Personen ist aber technisch gesperrt",
       "erklaerung": "Es wird aufgezeichnet, aber nicht nach Personen ausgewertet."
      },
      {
       "ort": "Gespräch — Abschnitt 10",
       "zeilen": [
        {
         "wer": "Frau",
         "text": "Gut, dann zu den Aufgaben bis zum nächsten Treffen. Frau Haas fragt beim Anbieter nach der Multiplikatorenschulung und klärt verbindlich den Termin für die Schnittstelle. Herr Ebert schlägt mir aus jeder Schicht zwei Kollegen vor. Und ich bereite die Vorlage für die Geschäftsführung vor, mit Juni als neuem Starttermin. Wir sehen uns in zwei Wochen, gleiche Zeit. Wer bis dahin Fragen hat, meldet sich bitte direkt bei mir."
        },
        {
         "wer": "Mann",
         "text": "Bis dahin weiß ich auch, wer im Juni Urlaub eingereicht hat. Das ist wichtig für den Juni. Wenn die Hälfte meiner Leute im Urlaub ist, wird es mit dem Start auch schwierig."
        },
        {
         "wer": "Frau",
         "text": "Gut, dass Sie das sagen. Das nehmen wir beim nächsten Mal mit auf die Liste."
        }
       ],
       "frage": "Herr Ebert soll bis zum nächsten Treffen …",
       "opt": [
        "… die Vorlage für die Geschäftsführung schreiben.",
        "… geeignete Mitarbeiter für die Schulung vorschlagen.",
        "… den Termin für die Schnittstelle klären."
       ],
       "loesung": 1,
       "stelle": "Herr Ebert schlägt mir aus jeder Schicht zwei Kollegen vor",
       "erklaerung": "Vorlage und Schnittstelle übernehmen Frau Nowak und Frau Haas."
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
       "text": "Guten Morgen und danke, dass Sie sich heute den Vormittag freigehalten haben. Ich bin in der Personalentwicklung für das Thema Einarbeitung zuständig, und ich möchte mit einer Zahl beginnen, die bei uns im Haus für einige Aufregung gesorgt hat. Im vergangenen Jahr haben wir neunundsiebzig neue Mitarbeiter eingestellt. Vierzehn davon haben das Unternehmen innerhalb der ersten sechs Monate wieder verlassen. Das sind fast achtzehn Prozent. Jeder dieser Abgänge kostet uns, wenn man Anzeigen, Vorstellungsgespräche und die verlorene Einarbeitungszeit zusammenrechnet, ungefähr ein halbes Jahresgehalt. Dazu kommt, was man nicht in Euro ausdrücken kann: Teams, die sich wieder auf jemand Neues einstellen müssen, und Kollegen, die Mehrarbeit leisten. Die gute Nachricht ist, dass die meisten dieser Kündigungen vermeidbar gewesen wären. Darum geht es heute.",
       "notiz": {
        "titel": "Handzettel: Folie 1 — Warum das Thema wichtig ist",
        "zeilen": [
         "neunundsiebzig Einstellungen im letzten Jahr",
         "Kosten je Abgang: etwa ein halbes Jahresgehalt"
        ],
        "feld": "Abgänge in den ersten sechs Monaten:",
        "frei": true,
        "muster": "vierzehn Personen, fast achtzehn Prozent",
        "loesungen": [
         "vierzehn",
         "14",
         "fast achtzehn Prozent",
         "18 %",
         "14 Personen, fast 18 Prozent",
         "vierzehn von neunundsiebzig"
        ]
       },
       "stelle": "Vierzehn davon haben das Unternehmen innerhalb der ersten sechs Monate wieder verlassen",
       "erklaerung": "Neunundsiebzig ist die Zahl aller Einstellungen, nicht der Abgänge.",
       "frage": "Ergänze deine Notiz auf dem Handzettel."
      },
      {
       "ort": "Vortrag — Abschnitt 2",
       "wer": "Frau",
       "text": "Einarbeitung beginnt nicht am ersten Arbeitstag. Zwischen Vertragsunterschrift und Arbeitsbeginn liegen bei uns oft drei Monate, manchmal mehr, weil viele Bewerber eine lange Kündigungsfrist haben. In dieser Zeit hörten die neuen Leute früher gar nichts von uns. Und das ist genau die Phase, in der viele noch andere Angebote bekommen und zweifeln, ob sie sich richtig entschieden haben. Wir haben bei unseren Nachgesprächen erfahren, dass drei der vierzehn Abgänge schon vor dem ersten Tag innerlich gekündigt hatten. Heute meldet sich die künftige Führungskraft in dieser Zeit mindestens zweimal persönlich, am Telefon oder mit einer kurzen Nachricht, und die neuen Kollegen werden zu einer Teamveranstaltung eingeladen, wenn eine stattfindet. Das kostet fast nichts und wirkt enorm. Einige haben uns gesagt, dass sie deshalb ein anderes Angebot abgelehnt haben.",
       "notiz": {
        "titel": "Handzettel: Folie 2 — Die Zeit vor dem ersten Tag",
        "zeilen": [
         "zwischen Unterschrift und Start oft drei Monate",
         "früher: kein Kontakt in dieser Zeit"
        ],
        "feld": "Neue Regel vor dem ersten Tag:",
        "frei": true,
        "muster": "Führungskraft meldet sich mindestens zweimal persönlich, Einladung zu Teamveranstaltungen",
        "loesungen": [
         "Führungskraft meldet sich zweimal",
         "mindestens zweimal persönlicher Kontakt",
         "Kontakt durch die Führungskraft",
         "zweimal Kontakt aufnehmen",
         "Einladung zur Teamveranstaltung"
        ]
       },
       "stelle": "meldet sich die künftige Führungskraft in dieser Zeit mindestens zweimal persönlich",
       "erklaerung": "Die drei Monate sind die Ausgangslage, gefragt ist die neue Regel.",
       "frage": "Ergänze deine Notiz auf dem Handzettel."
      },
      {
       "ort": "Vortrag — Abschnitt 3",
       "wer": "Frau",
       "text": "Dann der erste Arbeitstag. Ich habe vor zwei Jahren eine neue Kollegin gebeten, ihren ersten Arbeitstag genau aufzuschreiben, Stunde für Stunde. Was dabei herauskam, war ernüchternd. Der Laptop war nicht eingerichtet, der Zugang zum System funktionierte erst am dritten Tag, und die Führungskraft war auf einer auswärtigen Besprechung. Die Kollegin saß den ganzen Vormittag in der Kaffeeküche und hat sich gefragt, ob man sie überhaupt erwartet hat. Ich glaube, das kennen viele von Ihnen, vielleicht sogar aus eigener Erfahrung. Seitdem haben wir eine einfache Regel: Wenn am ersten Tag die Technik nicht vollständig funktioniert, wird der Arbeitsbeginn verschoben, nicht die Einrichtung. Das klingt hart, und es hat am Anfang auch Ärger gegeben. Aber seitdem klappt es in fast allen Fällen, weil plötzlich jeder weiß, dass es ernst gemeint ist.",
       "notiz": {
        "titel": "Handzettel: Folie 3 — Der erste Arbeitstag",
        "zeilen": [
         "Protokoll eines ersten Arbeitstages vor zwei Jahren",
         "Laptop nicht eingerichtet, Zugang erst am dritten Tag"
        ],
        "feld": "Neue Regel für den ersten Tag:",
        "frei": true,
        "muster": "funktioniert die Technik nicht, wird der Arbeitsbeginn verschoben",
        "loesungen": [
         "Arbeitsbeginn verschieben, wenn Technik fehlt",
         "Start verschieben, nicht die Einrichtung",
         "ohne funktionierende Technik kein Start",
         "Technik muss vollständig laufen",
         "Arbeitsbeginn wird verschoben"
        ]
       },
       "stelle": "wird der Arbeitsbeginn verschoben, nicht die Einrichtung",
       "erklaerung": "Laptop und Zugang beschreiben das alte Problem. Die Regel lautet: lieber später anfangen.",
       "frage": "Ergänze deine Notiz auf dem Handzettel."
      },
      {
       "ort": "Vortrag — Abschnitt 4",
       "wer": "Frau",
       "text": "Ein Instrument, das viele von Ihnen schon kennen, sind Paten. Also erfahrene Kollegen, die den Neuen in den ersten Monaten zur Seite stehen. Das hatten wir eigentlich schon lange, aber es hat nicht gut funktioniert. Der Grund war, dass die Paten das zusätzlich zu ihrer normalen Arbeit machen mussten, ohne dass irgendjemand davon wusste oder es berücksichtigt hat. Die Folge: Wenn es stressig wurde, war der Pate als Erster weg. Heute bekommen Paten für die ersten acht Wochen fest zwei Stunden pro Woche dafür eingeplant, und ihre Führungskraft muss das bei der Arbeitsverteilung berücksichtigen. Und ganz wichtig: Der Pate ist bewusst nicht die Führungskraft, damit sich die Neuen auch dumme Fragen trauen. Wer fragt, wo die Toilette ist oder wie man den Drucker bedient, fragt das nicht unbedingt den eigenen Chef.",
       "notiz": {
        "titel": "Handzettel: Folie 4 — Paten",
        "zeilen": [
         "Paten gab es schon lange",
         "Problem: Patenschaft zusätzlich zur normalen Arbeit"
        ],
        "feld": "Heute für Paten eingeplant:",
        "frei": true,
        "muster": "zwei Stunden pro Woche in den ersten acht Wochen",
        "loesungen": [
         "zwei Stunden pro Woche",
         "2 Stunden pro Woche",
         "2 Std. wöchentlich, 8 Wochen",
         "zwei Stunden wöchentlich",
         "feste Zeit: zwei Stunden pro Woche"
        ]
       },
       "stelle": "fest zwei Stunden pro Woche dafür eingeplant",
       "erklaerung": "Acht Wochen ist die Dauer, gefragt ist die eingeplante Zeit.",
       "frage": "Ergänze deine Notiz auf dem Handzettel."
      },
      {
       "ort": "Vortrag — Abschnitt 5",
       "wer": "Frau",
       "text": "Der nächste Punkt ist der Einarbeitungsplan. Viele Führungskräfte sagen mir: Den brauche ich nicht, ich zeige den Leuten einfach, was gerade anfällt. Das Problem dabei ist, dass die Neuen dann vor allem lernen, was gerade dringend ist, und nicht das, was wichtig ist. Wir arbeiten deshalb mit einem einfachen Plan auf einer einzigen Seite. Darauf steht für die ersten zwölf Wochen, was der neue Mitarbeiter am Ende jeder Woche können oder kennen soll. Und das ist der eigentliche Trick: Jede Woche ist mindestens ein Gespräch mit einer anderen Abteilung eingeplant. So lernt man die Leute kennen, mit denen man später zusammenarbeiten muss, bevor es das erste Mal Ärger gibt. Wer die Kollegin in der Buchhaltung schon einmal persönlich getroffen hat, ruft sie bei einem Problem an, statt eine verärgerte Mail zu schreiben.",
       "notiz": {
        "titel": "Handzettel: Folie 5 — Einarbeitungsplan",
        "zeilen": [
         "Problem ohne Plan: nur das Dringende wird gelernt",
         "Plan auf einer Seite für zwölf Wochen"
        ],
        "feld": "Zusätzlich jede Woche eingeplant:",
        "frei": true,
        "muster": "mindestens ein Gespräch mit einer anderen Abteilung",
        "loesungen": [
         "Gespräch mit einer anderen Abteilung",
         "Treffen mit anderen Abteilungen",
         "andere Abteilung kennenlernen",
         "Austausch mit anderer Abteilung",
         "mindestens ein Gespräch mit anderer Abteilung"
        ]
       },
       "stelle": "Jede Woche ist mindestens ein Gespräch mit einer anderen Abteilung eingeplant",
       "erklaerung": "„der eigentliche Trick“ kündigt die Kerninformation an.",
       "frage": "Ergänze deine Notiz auf dem Handzettel."
      },
      {
       "ort": "Vortrag — Abschnitt 6",
       "wer": "Frau",
       "text": "Jetzt zu einem Thema, das viele von Ihnen beschäftigt: Wie arbeitet man jemanden ein, der später viel von zu Hause arbeitet? Unsere Erfahrung ist eindeutig. In den ersten vier Wochen sollten die Neuen möglichst jeden Tag im Büro sein, auch wenn das Team später überwiegend mobil arbeitet. Wer gleich von Anfang an zu Hause sitzt, bekommt die vielen kleinen Dinge nicht mit, die man nebenbei lernt, das Gespräch an der Kaffeemaschine, die Frage über den Tisch, den Ärger über einen Kunden, den man zufällig mithört. Wir haben gesehen, dass Kollegen, die direkt im Homeoffice gestartet sind, sich auch nach einem halben Jahr noch deutlich weniger zugehörig fühlten. Das heißt aber auch: Sie selbst und die Paten müssen in diesen Wochen ebenfalls vor Ort sein. Danach kann man schrittweise auf das normale Modell umstellen.",
       "notiz": {
        "titel": "Handzettel: Folie 6 — Einarbeitung und Homeoffice",
        "zeilen": [
         "Problem beim Start von zu Hause: Lernen nebenbei fehlt",
         "Ergebnis: weniger Zugehörigkeit nach einem halben Jahr"
        ],
        "feld": "Empfehlung für die ersten vier Wochen:",
        "frei": true,
        "muster": "möglichst jeden Tag im Büro",
        "loesungen": [
         "jeden Tag im Büro",
         "möglichst täglich vor Ort",
         "täglich im Büro",
         "Anwesenheit im Büro",
         "im Büro arbeiten, nicht zu Hause"
        ]
       },
       "stelle": "sollten die Neuen möglichst jeden Tag im Büro sein",
       "erklaerung": "Erst nach den vier Wochen wird auf mobiles Arbeiten umgestellt.",
       "frage": "Ergänze deine Notiz auf dem Handzettel."
      },
      {
       "ort": "Vortrag — Abschnitt 7",
       "wer": "Frau",
       "text": "Ein weiteres Werkzeug sind feste Gespräche nach dreißig, sechzig und neunzig Tagen. Die sind bei uns inzwischen Pflicht, und sie werden im Personalsystem eingetragen. Wichtig ist, worum es in diesen Gesprächen geht. Natürlich spricht man darüber, wie die Arbeit läuft und was schon gut klappt. Aber genauso wichtig ist die Frage in die andere Richtung: Was ist anders, als Sie es sich vorgestellt haben? Diese Frage hat uns mehr gezeigt als jede Befragung. Mehrere der Kollegen, die früher gegangen sind, hatten uns erst im Austrittsgespräch gesagt, dass ihnen im Vorstellungsgespräch etwas ganz anderes beschrieben worden war. Einem wurde zum Beispiel viel Kundenkontakt versprochen, und dann saß er nur am Schreibtisch. Wenn man das nach dreißig Tagen erfährt, kann man noch reagieren, nach sechs Monaten nicht mehr.",
       "notiz": {
        "titel": "Handzettel: Folie 7 — Gespräche nach dreißig, sechzig, neunzig Tagen",
        "zeilen": [
         "Gespräche nach dreißig, sechzig, neunzig Tagen sind Pflicht",
         "Thema: wie die Arbeit läuft"
        ],
        "feld": "Besonders wichtige Frage:",
        "frei": true,
        "muster": "Was ist anders, als Sie es sich vorgestellt haben?",
        "loesungen": [
         "Was ist anders als erwartet?",
         "Unterschied zwischen Erwartung und Realität",
         "was anders ist als vorgestellt",
         "Erwartung und Wirklichkeit vergleichen",
         "Was ist anders als gedacht?"
        ]
       },
       "stelle": "Was ist anders, als Sie es sich vorgestellt haben",
       "erklaerung": "Wie die Arbeit läuft, steht schon auf dem Handzettel.",
       "frage": "Ergänze deine Notiz auf dem Handzettel."
      },
      {
       "ort": "Vortrag — Abschnitt 8",
       "wer": "Frau",
       "text": "Und damit zu Ihnen, den Führungskräften. Wir haben alle vierzehn Austrittsgespräche ausgewertet. Die Bezahlung wurde nur zweimal als Grund genannt, und auch die Arbeitsinhalte waren selten das Problem. Der häufigste Grund war, dass die neuen Mitarbeiter ihre Führungskraft in den ersten Wochen kaum zu sehen bekamen. Sie fühlten sich allein gelassen, und zwar nicht aus bösem Willen, sondern weil die Führungskraft selbst überlastet war. Das sage ich ausdrücklich ohne Vorwurf, denn ich weiß, wie voll Ihre Kalender sind. Trotzdem meine Bitte: Planen Sie in den ersten vier Wochen jeden Tag eine Viertelstunde für Ihren neuen Mitarbeiter ein. Nicht mehr, aber auch nicht weniger. Diese Viertelstunde ist, wenn Sie so wollen, die günstigste Investition, die Sie in diesem Jahr machen werden.",
       "notiz": {
        "titel": "Handzettel: Folie 8 — Gründe für frühe Kündigungen",
        "zeilen": [
         "Auswertung der vierzehn Austrittsgespräche",
         "Gehalt nur zweimal genannt"
        ],
        "feld": "Häufigster Grund für frühe Kündigungen:",
        "frei": true,
        "muster": "Führungskraft in den ersten Wochen kaum präsent, Neue fühlten sich allein gelassen",
        "loesungen": [
         "Führungskraft kaum präsent",
         "allein gelassen",
         "zu wenig Kontakt zur Führungskraft",
         "Chef nicht da",
         "fehlende Zeit der Führungskraft"
        ]
       },
       "stelle": "ihre Führungskraft in den ersten Wochen kaum zu sehen bekamen",
       "erklaerung": "Gehalt und Inhalte spielten kaum eine Rolle.",
       "frage": "Ergänze deine Notiz auf dem Handzettel."
      },
      {
       "ort": "Vortrag — Abschnitt 9",
       "wer": "Frau",
       "text": "Lassen Sie mich noch kurz drei Fehler nennen, die wir immer wieder sehen. Der erste: Man gibt neuen Leuten zuerst die Aufgaben, die sonst keiner machen will, zum Beispiel alte Akten aufräumen oder Listen abtippen. Damit sagt man ihnen indirekt, wie wenig man von ihnen hält. Der zweite: Man überschüttet sie in der ersten Woche mit Informationen, Organigrammen und Richtlinien, von denen sie neun Zehntel wieder vergessen. Und der dritte, vielleicht der häufigste: Man wartet mit Rückmeldungen bis zum Ende der Probezeit. Wer erst nach sechs Monaten hört, dass etwas nicht passt, hat keine Chance mehr, es zu ändern. Ehrliche Rückmeldung früh ist fairer als eine Überraschung am Ende. Und umgekehrt gilt dasselbe: Wenn etwas gut läuft, sagen Sie es bitte auch früh, nicht erst im Abschlussgespräch.",
       "notiz": {
        "titel": "Handzettel: Folie 9 — Häufige Fehler",
        "zeilen": [
         "Fehler eins: unbeliebte Aufgaben zuerst",
         "Fehler zwei: zu viele Informationen in der ersten Woche"
        ],
        "feld": "Fehler drei, der häufigste:",
        "frei": true,
        "muster": "Rückmeldung erst am Ende der Probezeit",
        "loesungen": [
         "Rückmeldung zu spät",
         "Feedback erst am Ende der Probezeit",
         "zu spät Rückmeldung geben",
         "erst nach sechs Monaten Feedback",
         "spätes Feedback"
        ]
       },
       "stelle": "Man wartet mit Rückmeldungen bis zum Ende der Probezeit",
       "erklaerung": "„der dritte, vielleicht der häufigste“ markiert die gesuchte Stelle.",
       "frage": "Ergänze deine Notiz auf dem Handzettel."
      },
      {
       "ort": "Vortrag — Abschnitt 10",
       "wer": "Frau",
       "text": "Ich fasse zusammen. Seit wir diese Bausteine eingeführt haben, also Kontakt vor dem ersten Tag, Paten mit fester Zeit, den Einarbeitungsplan und die Gespräche nach dreißig, sechzig und neunzig Tagen, ist die Zahl der frühen Kündigungen deutlich gesunken. In diesem Jahr waren es bisher drei von zweiundsechzig Neueinstellungen. Das ist noch nicht perfekt, aber es ist ein großer Unterschied zu den vierzehn vom letzten Jahr. Sie finden alle Unterlagen, auch die Vorlage für den Einarbeitungsplan, ab heute im Intranet unter dem Stichwort Einarbeitung. Und meine Bitte zum Schluss: Wenn Sie in den nächsten Wochen jemanden einstellen, rufen Sie mich vorher an. Ich gehe den Plan gern mit Ihnen gemeinsam durch, das dauert nicht länger als eine halbe Stunde. Vielen Dank, und jetzt freue ich mich auf Ihre Fragen.",
       "notiz": {
        "titel": "Handzettel: Folie 10 — Zusammenfassung",
        "zeilen": [
         "Bausteine: Kontakt vorab, Paten, Plan, Gespräche",
         "Unterlagen im Intranet unter Einarbeitung"
        ],
        "feld": "Frühe Kündigungen in diesem Jahr:",
        "frei": true,
        "muster": "drei von zweiundsechzig Neueinstellungen",
        "loesungen": [
         "drei von zweiundsechzig",
         "3 von 62",
         "drei",
         "3",
         "drei Kündigungen",
         "drei Abgänge"
        ]
       },
       "stelle": "drei von zweiundsechzig Neueinstellungen",
       "erklaerung": "Vierzehn ist der Vergleichswert aus dem Vorjahr.",
       "frage": "Ergänze deine Notiz auf dem Handzettel."
      }
     ]
    }
   ]
  }
 ]
};
