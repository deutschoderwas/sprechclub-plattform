/* ============================================================
   deutschoderwas club — HÖREN Deutsch-Test für Zuwanderer (DTZ)

   Aufbau nach den offiziellen DTZ-Übungssätzen (g.a.s.t.) und dem
   Modellsatz („Sie hören jeden Text einmal"), geprüft 03.11.2026.
   Alle Texte und Aufgaben eigene. Erzeugt aus scratchpad/dtz.
   ============================================================ */

window.HOEREN_TELC_DTZ = {
 "niveau": "telcDTZ",
 "pruefung": "Deutsch-Test für Zuwanderer",
 "minuten": 25,
 "punkte": 20,
 "intro": "Der Hör-Teil im DTZ dauert etwa fünfundzwanzig Minuten, und du hörst jeden Text nur einmal: Ansagen am Telefon, Radioansagen, Alltagsgespräche und Meinungen. Nach jeder Antwort siehst du den Text mit der wichtigen Stelle.",
 "stufen": [
  {
   "nr": 1,
   "titel": "Das Wichtige hören",
   "zeichen": "👂",
   "was": "Zahlen, Zeiten, Orte, die wichtigste Information."
  },
  {
   "nr": 2,
   "titel": "Gespräche und Meinungen",
   "zeichen": "💬",
   "was": "Thema und Detail, Meinungen erkennen."
  },
  {
   "nr": 3,
   "titel": "Die Aufgabentypen",
   "zeichen": "🎯",
   "was": "Alle vier Teile einzeln, alles nur einmal."
  },
  {
   "nr": 4,
   "titel": "Die ganze Prüfung",
   "zeichen": "⏱️",
   "was": "20 Aufgaben, etwa fünfundzwanzig Minuten."
  }
 ],
 "bloecke": [
  {
   "id": "tdh1",
   "stufe": 1,
   "titel": "Zahlen, Zeiten und Orte in Ansagen",
   "kurz": "Oft hörst du zwei Uhrzeiten, zwei Gleise oder zwei Stockwerke. Nur eins ist richtig. Achte auf „nicht\", „sondern\", „erst\" und „ab heute\".",
   "ziel": "Nach diesem Block findest du in einer Ansage die richtige Zahl, Zeit oder den richtigen Ort, auch wenn eine zweite Angabe dabei ist.",
   "zeichen": "☎️",
   "farbe": "gold",
   "mal": 1,
   "aufgaben": [
    {
     "art": "hoerwahl",
     "ort": "Anrufbeantworter einer Arztpraxis",
     "wer": "Frau",
     "text": "Praxis Doktor Roth. Wir sind heute erst ab zehn Uhr für Sie da, nicht wie sonst ab acht. Bitte rufen Sie später noch einmal an.",
     "frage": "Ab wann ist die Praxis heute geöffnet?",
     "opt": [
      "Ab zehn Uhr.",
      "Ab zwölf Uhr.",
      "Ab acht Uhr."
     ],
     "loesung": 0,
     "stelle": "Wir sind heute erst ab zehn Uhr für Sie da",
     "erklaerung": "„nicht wie sonst ab acht\" nennt die normale Zeit, nicht die von heute."
    },
    {
     "art": "hoerwahl",
     "ort": "Durchsage am Bahnhof",
     "wer": "Mann",
     "text": "Der Zug nach München fährt heute ausnahmsweise von Gleis neun ab. Gleis vier ist wegen Bauarbeiten gesperrt.",
     "frage": "Von welchem Gleis fährt der Zug?",
     "opt": [
      "Von Gleis neun.",
      "Von Gleis eins.",
      "Von Gleis vier."
     ],
     "loesung": 0,
     "stelle": "fährt heute ausnahmsweise von Gleis neun ab",
     "erklaerung": "„ausnahmsweise\" zeigt die Änderung. Gleis vier ist gesperrt."
    },
    {
     "art": "hoerwahl",
     "ort": "Durchsage im Kaufhaus",
     "wer": "Frau",
     "text": "Heute im zweiten Stock: alle Winterjacken zum halben Preis. Die Kinderabteilung finden Sie ab heute im dritten Stock.",
     "frage": "Wo gibt es die Winterjacken billiger?",
     "opt": [
      "Im dritten Stock.",
      "Im zweiten Stock.",
      "Im Erdgeschoss."
     ],
     "loesung": 1,
     "stelle": "Heute im zweiten Stock: alle Winterjacken zum halben Preis",
     "erklaerung": "Der dritte Stock gehört zur Kinderabteilung. Frage und Ort zusammen hören."
    },
    {
     "art": "hoerwahl",
     "ort": "Nachricht vom Elektriker",
     "wer": "Mann",
     "text": "Hallo, hier ist Kranz, der Elektriker. Ich schaffe es heute nicht um drei. Ich komme morgen um halb neun, passt das?",
     "frage": "Wann möchte der Elektriker kommen?",
     "opt": [
      "Morgen um neun.",
      "Morgen um halb neun.",
      "Heute um drei."
     ],
     "loesung": 1,
     "stelle": "Ich komme morgen um halb neun",
     "erklaerung": "Halb neun ist acht Uhr dreißig, nicht neun Uhr."
    },
    {
     "art": "hoerwahl",
     "ort": "Ansage in der Ausländerbehörde",
     "wer": "Frau",
     "text": "Die Wartenummer dreiundvierzig, bitte. Gehen Sie zu Schalter sieben im ersten Stock.",
     "frage": "Wohin soll die Person mit der Nummer dreiundvierzig gehen?",
     "opt": [
      "In den siebten Stock.",
      "Zu Schalter sieben.",
      "Zu Schalter dreiundvierzig."
     ],
     "loesung": 1,
     "stelle": "Gehen Sie zu Schalter sieben",
     "erklaerung": "Dreiundvierzig ist die Wartenummer, sieben der Schalter, eins das Stockwerk."
    },
    {
     "art": "hoerwahl",
     "ort": "Anrufbeantworter der Kita",
     "wer": "Mann",
     "text": "Am Montag öffnet die Kita erst um neun Uhr, weil wir eine Teamsitzung haben. Ab Dienstag gelten wieder die normalen Zeiten ab sieben Uhr.",
     "frage": "Wann öffnet die Kita am Montag?",
     "opt": [
      "Um neun Uhr.",
      "Erst am Dienstag.",
      "Um sieben Uhr."
     ],
     "loesung": 0,
     "stelle": "Am Montag öffnet die Kita erst um neun Uhr",
     "erklaerung": "Sieben Uhr ist die normale Zeit ab Dienstag."
    },
    {
     "art": "hoerwahl",
     "ort": "Nachricht der Zahnarztpraxis",
     "wer": "Frau",
     "text": "Ihr Termin am Donnerstag muss leider ausfallen. Wir haben einen neuen Termin für Sie: Dienstag, der vierzehnte, um sechzehn Uhr fünfzehn.",
     "frage": "Wann ist der neue Termin?",
     "opt": [
      "Am Dienstag um sechzehn Uhr fünfzehn.",
      "Am Donnerstag.",
      "Am vierzehnten um sechzehn Uhr fünfzig."
     ],
     "loesung": 0,
     "stelle": "Dienstag, der vierzehnte, um sechzehn Uhr fünfzehn",
     "erklaerung": "Achte auf fünfzehn und fünfzig. Die Endung „zehn\" oder „zig\" macht den Unterschied."
    },
    {
     "art": "hoerwahl",
     "ort": "Durchsage im Supermarkt",
     "wer": "Mann",
     "text": "Liebe Kunden, Kasse drei schließt in fünf Minuten. Bitte gehen Sie dann zu Kasse eins oder zwei.",
     "frage": "Was passiert in fünf Minuten?",
     "opt": [
      "Der Supermarkt schließt.",
      "Kasse drei schließt.",
      "Kasse eins öffnet."
     ],
     "loesung": 1,
     "stelle": "Kasse drei schließt in fünf Minuten",
     "erklaerung": "Nur eine Kasse schließt. Kasse eins und zwei sind schon offen."
    },
    {
     "art": "hoerwahl",
     "ort": "Ansage am Busbahnhof",
     "wer": "Frau",
     "text": "Der Bus der Linie zwölf zum Krankenhaus fährt heute nicht von Haltestelle A, sondern von Haltestelle C, gegenüber vom Kiosk.",
     "frage": "Wo fährt der Bus zum Krankenhaus heute ab?",
     "opt": [
      "An Haltestelle C.",
      "An Haltestelle A.",
      "Direkt am Krankenhaus."
     ],
     "loesung": 0,
     "stelle": "sondern von Haltestelle C, gegenüber vom Kiosk",
     "erklaerung": "Nach „nicht\" kommt die alte Angabe, nach „sondern\" die richtige."
    }
   ]
  },
  {
   "id": "tdh2",
   "stufe": 1,
   "titel": "Radio: Was ist die wichtigste Information?",
   "kurz": "Radioansagen sind kurz und schnell. Frag dich: Was soll ich als Hörer jetzt wissen oder tun?",
   "ziel": "Nach diesem Block erkennst du in einer kurzen Radioansage die eine Information, auf die es ankommt.",
   "zeichen": "📻",
   "farbe": "rot",
   "mal": 1,
   "aufgaben": [
    {
     "art": "hoerwahl",
     "ort": "Radio: Verkehr",
     "wer": "Mann",
     "text": "Achtung Autofahrer: Auf der Ringstraße liegt nach einem Unfall Öl auf der Fahrbahn. Die Straße ist bis mindestens Mittag gesperrt.",
     "frage": "Was ist die wichtigste Information?",
     "opt": [
      "Man kann bis Mittag nicht über die Ringstraße fahren.",
      "Es gab einen Unfall mit vielen Verletzten.",
      "Auf der Ringstraße wird am Mittag gebaut."
     ],
     "loesung": 0,
     "stelle": "Die Straße ist bis mindestens Mittag gesperrt",
     "erklaerung": "Der Unfall ist der Grund. Für dich als Fahrer zählt: Die Straße ist zu."
    },
    {
     "art": "hoerwahl",
     "ort": "Radio: Wetter",
     "wer": "Frau",
     "text": "Heute wird es sonnig und warm. Aber am Abend kommen starke Gewitter. Bitte holen Sie Gartenmöbel und Blumentöpfe vom Balkon rein.",
     "frage": "Was soll man tun?",
     "opt": [
      "Am Abend in den Garten gehen.",
      "Die Blumen gießen.",
      "Sachen vom Balkon hereinholen."
     ],
     "loesung": 2,
     "stelle": "Bitte holen Sie Gartenmöbel und Blumentöpfe vom Balkon rein",
     "erklaerung": "„Bitte\" leitet oft den Rat ein, und der ist die wichtigste Information."
    },
    {
     "art": "hoerwahl",
     "ort": "Radio: Veranstaltung",
     "wer": "Mann",
     "text": "Das Stadtfest am Wochenende findet statt, auch wenn es regnet. Nur das Feuerwerk am Samstagabend fällt leider aus.",
     "frage": "Was fällt aus?",
     "opt": [
      "Das ganze Stadtfest.",
      "Das Feuerwerk.",
      "Das Programm am Sonntag."
     ],
     "loesung": 1,
     "stelle": "Nur das Feuerwerk am Samstagabend fällt leider aus",
     "erklaerung": "„Nur\" zeigt: Der Rest findet statt."
    },
    {
     "art": "hoerwahl",
     "ort": "Radio: Hinweis der Stadt",
     "wer": "Frau",
     "text": "Die Stadt bittet alle Bürger: Wegen der Trockenheit dürfen Sie Ihren Garten bis Ende August nur noch abends gießen, nicht mehr am Tag.",
     "frage": "Was ist die neue Regel?",
     "opt": [
      "Gießen ist ganz verboten.",
      "Gießen nur bis Ende Juli.",
      "Gießen nur noch am Abend."
     ],
     "loesung": 2,
     "stelle": "nur noch abends gießen, nicht mehr am Tag",
     "erklaerung": "Gießen ist erlaubt, aber nur abends. Die Regel gilt bis Ende August."
    },
    {
     "art": "hoerwahl",
     "ort": "Radio: Gewinnspiel",
     "wer": "Mann",
     "text": "Rufen Sie jetzt an und gewinnen Sie einen Einkaufsgutschein. Aber Achtung: Mitmachen dürfen nur Hörer, die in unserer Stadt wohnen.",
     "frage": "Wer darf mitmachen?",
     "opt": [
      "Nur Hörer, die schon einmal gewonnen haben.",
      "Alle Hörer.",
      "Nur Hörer aus der Stadt."
     ],
     "loesung": 2,
     "stelle": "Mitmachen dürfen nur Hörer, die in unserer Stadt wohnen",
     "erklaerung": "„Aber Achtung\" kündigt die wichtige Einschränkung an."
    },
    {
     "art": "hoerwahl",
     "ort": "Radio: Verkehr",
     "wer": "Frau",
     "text": "Die Buslinie fünf fährt ab Montag alle zehn Minuten statt alle zwanzig Minuten. Grund ist die neue Schule im Westend.",
     "frage": "Was ändert sich?",
     "opt": [
      "Die Linie fünf fährt nicht mehr ins Westend.",
      "Der Bus fährt nur noch zur Schule.",
      "Der Bus fährt öfter."
     ],
     "loesung": 2,
     "stelle": "fährt ab Montag alle zehn Minuten statt alle zwanzig Minuten",
     "erklaerung": "Alle zehn statt alle zwanzig Minuten heißt: doppelt so oft."
    },
    {
     "art": "hoerwahl",
     "ort": "Radio: Wetter",
     "wer": "Mann",
     "text": "In der Nacht gibt es Frost. Wer morgen früh mit dem Auto fahren muss, sollte ein paar Minuten mehr zum Freikratzen der Scheiben einplanen.",
     "frage": "Was soll man morgen früh einplanen?",
     "opt": [
      "Mehr Zeit.",
      "Eine andere Strecke.",
      "Den Bus statt das Auto."
     ],
     "loesung": 0,
     "stelle": "ein paar Minuten mehr zum Freikratzen der Scheiben einplanen",
     "erklaerung": "Die Scheiben sind gefroren, deshalb braucht man ein paar Minuten mehr."
    },
    {
     "art": "hoerwahl",
     "ort": "Radio: Veranstaltung",
     "wer": "Frau",
     "text": "Der Kinderflohmarkt im Gemeindehaus ist am Sonntag, nicht wie angekündigt am Samstag. Beginn ist wie geplant um zehn Uhr.",
     "frage": "Was ist neu?",
     "opt": [
      "Der Tag.",
      "Der Ort.",
      "Die Uhrzeit."
     ],
     "loesung": 0,
     "stelle": "ist am Sonntag, nicht wie angekündigt am Samstag",
     "erklaerung": "„wie geplant\" heißt: Die Uhrzeit bleibt. Nur der Tag ist anders."
    },
    {
     "art": "hoerwahl",
     "ort": "Radio: Hinweis der Stadt",
     "wer": "Mann",
     "text": "Das Hallenbad bleibt wegen Reparaturen bis zum zwanzigsten März geschlossen. Das Freibad öffnet wie jedes Jahr erst im Mai.",
     "frage": "Was ist die wichtigste Information?",
     "opt": [
      "Das Hallenbad wird erst im Mai repariert.",
      "Das Hallenbad ist bis zum zwanzigsten März zu.",
      "Das Freibad öffnet schon im März."
     ],
     "loesung": 1,
     "stelle": "bleibt wegen Reparaturen bis zum zwanzigsten März geschlossen",
     "erklaerung": "Das Freibad öffnet „wie jedes Jahr\", das ist nichts Neues."
    }
   ]
  },
  {
   "id": "tdh3",
   "stufe": 2,
   "titel": "Gespräche: Thema und Detail",
   "kurz": "Zuerst fragst du dich: Worum geht es? Dann: Welches Detail stimmt? So ist es auch im DTZ, Teil drei.",
   "ziel": "Nach diesem Block erkennst du in kurzen Alltagsgesprächen zuerst das Thema und danach das wichtige Detail.",
   "zeichen": "💬",
   "farbe": "turq",
   "mal": 1,
   "aufgaben": [
    {
     "art": "hoerwahl",
     "ort": "Im Treppenhaus, Teil eins",
     "wer": "Frau",
     "text": "Entschuldigung, gehört Ihnen das Fahrrad im Flur? Der Hausmeister hat gesagt, im Flur dürfen keine Fahrräder stehen, wegen der Feuerwehr.",
     "frage": "Es geht um ein Fahrrad am falschen Platz.",
     "opt": [
      "Richtig",
      "Falsch"
     ],
     "loesung": 0,
     "stelle": "im Flur dürfen keine Fahrräder stehen",
     "erklaerung": "Thema: Das Fahrrad darf nicht im Flur stehen."
    },
    {
     "art": "hoerwahl",
     "ort": "Im Treppenhaus, Teil zwei",
     "wer": "Mann",
     "text": "Ach so, das wusste ich nicht. Ich stelle es heute Abend in den Keller. Im Hof ist ja leider kein Platz mehr.",
     "frage": "Wohin bringt der Mann das Fahrrad?",
     "opt": [
      "In den Keller.",
      "In den Hof.",
      "In seine Wohnung."
     ],
     "loesung": 0,
     "stelle": "Ich stelle es heute Abend in den Keller",
     "erklaerung": "Im Hof ist „kein Platz mehr\"."
    },
    {
     "art": "hoerwahl",
     "ort": "In der Arztpraxis, Teil eins",
     "wer": "Mann",
     "text": "Guten Tag, ich hatte um zehn einen Termin, aber mein Bus hatte Verspätung. Kann der Doktor mich trotzdem noch drannehmen?",
     "frage": "Der Mann ist zu früh gekommen.",
     "opt": [
      "Richtig",
      "Falsch"
     ],
     "loesung": 1,
     "stelle": "mein Bus hatte Verspätung",
     "erklaerung": "Der Bus hatte Verspätung, also kommt er zu spät."
    },
    {
     "art": "hoerwahl",
     "ort": "In der Arztpraxis, Teil zwei",
     "wer": "Frau",
     "text": "Das geht, aber Sie müssen ungefähr eine Stunde warten. Sie können auch einkaufen gehen und um halb zwölf wiederkommen.",
     "frage": "Was kann der Mann machen?",
     "opt": [
      "Am Telefon einen neuen Termin machen.",
      "Morgen um zehn wiederkommen.",
      "Um halb zwölf wiederkommen."
     ],
     "loesung": 2,
     "stelle": "um halb zwölf wiederkommen",
     "erklaerung": "Zehn Uhr war der alte Termin. Er kann heute noch drankommen."
    },
    {
     "art": "hoerwahl",
     "ort": "Bei der Arbeit, Teil eins",
     "wer": "Frau",
     "text": "Du, kannst du am Samstag meine Schicht übernehmen? Meine Schwester heiratet, und ich habe das total vergessen.",
     "frage": "Die Frau möchte am Samstag nicht arbeiten.",
     "opt": [
      "Richtig",
      "Falsch"
     ],
     "loesung": 0,
     "stelle": "kannst du am Samstag meine Schicht übernehmen",
     "erklaerung": "Sie sucht jemanden, der für sie arbeitet."
    },
    {
     "art": "hoerwahl",
     "ort": "Bei der Arbeit, Teil zwei",
     "wer": "Mann",
     "text": "Samstag geht, aber nur bis vierzehn Uhr. Danach habe ich Fußballtraining mit meinem Sohn. Frag doch Lena für den Nachmittag.",
     "frage": "Wie lange kann der Mann am Samstag arbeiten?",
     "opt": [
      "Nur am Nachmittag.",
      "Den ganzen Tag.",
      "Bis vierzehn Uhr."
     ],
     "loesung": 2,
     "stelle": "Samstag geht, aber nur bis vierzehn Uhr",
     "erklaerung": "Den Nachmittag soll Lena übernehmen."
    },
    {
     "art": "hoerwahl",
     "ort": "Im Schuhgeschäft, Teil eins",
     "wer": "Mann",
     "text": "Ich möchte diese Schuhe zurückgeben. Die sind mir zu klein, aber ich habe sie nur einmal zu Hause anprobiert.",
     "frage": "Die Schuhe sind kaputt.",
     "opt": [
      "Richtig",
      "Falsch"
     ],
     "loesung": 1,
     "stelle": "Die sind mir zu klein",
     "erklaerung": "Die Schuhe passen nicht. Kaputt sind sie nicht."
    },
    {
     "art": "hoerwahl",
     "ort": "Im Schuhgeschäft, Teil zwei",
     "wer": "Frau",
     "text": "Kein Problem. Möchten Sie die gleichen Schuhe eine Nummer größer? Oder lieber das Geld zurück? Mit Kassenbon geht beides.",
     "frage": "Was braucht der Mann für den Umtausch?",
     "opt": [
      "Den Kassenbon.",
      "Eine Bestellnummer.",
      "Ein Paar neue Schuhe."
     ],
     "loesung": 0,
     "stelle": "Mit Kassenbon geht beides",
     "erklaerung": "„eine Nummer größer\" meint die Schuhgröße, keine Bestellnummer."
    },
    {
     "art": "hoerwahl",
     "ort": "Gespräch mit der Lehrerin, Teil eins",
     "wer": "Frau",
     "text": "Herr Celik, Ihr Sohn Can ist in Mathe wirklich gut. Aber beim Lesen hat er noch Probleme. Er liest sehr langsam.",
     "frage": "Die Lehrerin spricht über Probleme beim Lesen.",
     "opt": [
      "Richtig",
      "Falsch"
     ],
     "loesung": 0,
     "stelle": "beim Lesen hat er noch Probleme",
     "erklaerung": "Mathe ist das Lob am Anfang. Nach „Aber\" kommt das Thema."
    },
    {
     "art": "hoerwahl",
     "ort": "Gespräch mit der Lehrerin, Teil zwei",
     "wer": "Frau",
     "text": "Lesen Sie zu Hause jeden Tag zehn Minuten zusammen. Die Bücher dafür kann Can bei uns in der Schulbibliothek ausleihen, das kostet nichts.",
     "frage": "Woher bekommt Can die Bücher?",
     "opt": [
      "Von der Lehrerin.",
      "Aus einer Buchhandlung.",
      "Aus der Schulbibliothek."
     ],
     "loesung": 2,
     "stelle": "kann Can bei uns in der Schulbibliothek ausleihen",
     "erklaerung": "Die Bücher kosten nichts, weil er sie in der Schule ausleiht."
    }
   ]
  },
  {
   "id": "tdh4",
   "stufe": 2,
   "titel": "Meinungen erkennen",
   "kurz": "Dafür, dagegen oder „ja, aber\"? Die Meinung steht oft nach „aber\" oder am Ende.",
   "ziel": "Nach diesem Block erkennst du, welche Meinung jemand zu einem Alltagsthema hat, auch wenn er zuerst die andere Seite nennt.",
   "zeichen": "⚖️",
   "farbe": "lila",
   "mal": 1,
   "aufgaben": [
    {
     "art": "hoerwahl",
     "ort": "Umfrage im Radio: Handy in der Schule",
     "wer": "Frau",
     "text": "Ich verstehe, dass die Kinder das Handy für den Notfall dabeihaben wollen. Aber im Unterricht hat es nichts zu suchen. Da muss es in der Tasche bleiben.",
     "frage": "Was meint die Frau?",
     "opt": [
      "Kinder sollen das Handy im Unterricht benutzen.",
      "Kinder brauchen kein Handy.",
      "Das Handy ist okay, aber nicht im Unterricht."
     ],
     "loesung": 2,
     "stelle": "Aber im Unterricht hat es nichts zu suchen",
     "erklaerung": "„Ich verstehe … Aber\": Sie akzeptiert das Handy, nur nicht im Unterricht."
    },
    {
     "art": "hoerwahl",
     "ort": "Umfrage im Radio: Einkaufen am Sonntag",
     "wer": "Mann",
     "text": "Sonntags einkaufen? Brauche ich nicht. Ich habe sechs Tage Zeit dafür, das reicht mir völlig.",
     "frage": "Was meint der Mann?",
     "opt": [
      "Sechs Tage zum Einkaufen sind genug.",
      "Er möchte am Sonntag einkaufen.",
      "Er arbeitet am Sonntag."
     ],
     "loesung": 0,
     "stelle": "Ich habe sechs Tage Zeit dafür, das reicht mir völlig",
     "erklaerung": "„Brauche ich nicht\" zeigt: Er ist nicht für Einkaufen am Sonntag."
    },
    {
     "art": "hoerwahl",
     "ort": "Umfrage im Radio: Fahrrad",
     "wer": "Frau",
     "text": "Früher bin ich nur Auto gefahren. Seit einem Jahr fahre ich Rad, und ich will nie wieder zurück.",
     "frage": "Was denkt die Frau heute?",
     "opt": [
      "Sie fährt lieber Rad.",
      "Sie fährt lieber Auto.",
      "Sie fährt beides gleich gern."
     ],
     "loesung": 0,
     "stelle": "ich will nie wieder zurück",
     "erklaerung": "„Früher\" ist die alte Haltung. Heute will sie nicht mehr Auto fahren."
    },
    {
     "art": "hoerwahl",
     "ort": "Umfrage im Radio: Haustiere",
     "wer": "Mann",
     "text": "Mein Vermieter hat den Hund erlaubt, und ich bin ihm sehr dankbar. Ich finde, das sollte überall so sein, solange das Tier niemanden stört.",
     "frage": "Was meint der Mann?",
     "opt": [
      "Hunde stören immer die Nachbarn.",
      "Vermieter sollten selbst entscheiden.",
      "Vermieter sollten Haustiere erlauben, wenn sie niemanden stören."
     ],
     "loesung": 2,
     "stelle": "das sollte überall so sein, solange das Tier niemanden stört",
     "erklaerung": "„Ich finde\" leitet die Meinung ein, „solange\" ist die Bedingung."
    },
    {
     "art": "hoerwahl",
     "ort": "Umfrage im Radio: Abendkurs",
     "wer": "Frau",
     "text": "Klar ist man nach acht Stunden Arbeit müde. Aber im Abendkurs sind alle in der gleichen Situation, und das motiviert mich.",
     "frage": "Wie findet die Frau den Abendkurs?",
     "opt": [
      "Langweilig.",
      "Zu anstrengend.",
      "Gut, weil alle anderen auch arbeiten."
     ],
     "loesung": 2,
     "stelle": "im Abendkurs sind alle in der gleichen Situation",
     "erklaerung": "„Klar … Aber\": Die Müdigkeit gibt sie zu, ihre Meinung kommt danach."
    },
    {
     "art": "hoerwahl",
     "ort": "Umfrage im Radio: Kinder und Handy",
     "wer": "Mann",
     "text": "Viele sagen, Handys machen Kinder dumm. So einfach ist das nicht. Meine Tochter lernt mit einer App Englisch, und sie ist richtig gut geworden.",
     "frage": "Was meint der Mann?",
     "opt": [
      "Er weiß es nicht genau.",
      "Handys haben auch gute Seiten.",
      "Handys sind schlecht für Kinder."
     ],
     "loesung": 1,
     "stelle": "So einfach ist das nicht",
     "erklaerung": "„Viele sagen\" ist die Meinung der anderen. Er widerspricht mit einem Beispiel."
    },
    {
     "art": "hoerwahl",
     "ort": "Umfrage im Radio: Fahrrad in der Stadt",
     "wer": "Frau",
     "text": "Ich würde gern Rad fahren. Aber ehrlich gesagt habe ich Angst. Die Autos fahren so dicht an einem vorbei.",
     "frage": "Warum fährt die Frau nicht Rad?",
     "opt": [
      "Sie hat kein Fahrrad.",
      "Sie fährt lieber Bus.",
      "Sie hat Angst vor dem Verkehr."
     ],
     "loesung": 2,
     "stelle": "Aber ehrlich gesagt habe ich Angst",
     "erklaerung": "„Ich würde gern\" heißt: Sie macht es nicht. Der Grund kommt nach „Aber\"."
    },
    {
     "art": "hoerwahl",
     "ort": "Umfrage im Radio: Einkaufen am Sonntag",
     "wer": "Frau",
     "text": "Ich bin Krankenschwester und arbeite selbst oft am Sonntag. Deshalb fände ich es gut, wenn wenigstens ein paar Läden offen hätten.",
     "frage": "Was wünscht sich die Frau?",
     "opt": [
      "Alle Läden sollten am Sonntag zu sein.",
      "Einige Läden sollten am Sonntag öffnen.",
      "Sie möchte am Sonntag nicht mehr arbeiten."
     ],
     "loesung": 1,
     "stelle": "wenn wenigstens ein paar Läden offen hätten",
     "erklaerung": "„Deshalb fände ich es gut\" zeigt ihren Wunsch. Ihre Arbeit am Sonntag ist nur der Grund."
    },
    {
     "art": "hoerwahl",
     "ort": "Umfrage im Radio: Haustiere",
     "wer": "Mann",
     "text": "Eine Katze? Gern. Aber nicht in einer Einzimmerwohnung. Das ist für das Tier keine Lösung.",
     "frage": "Was meint der Mann?",
     "opt": [
      "Eine Katze ist besser als ein Hund.",
      "Er mag keine Katzen.",
      "Eine Katze braucht mehr Platz."
     ],
     "loesung": 2,
     "stelle": "Aber nicht in einer Einzimmerwohnung",
     "erklaerung": "„Gern. Aber\": Er mag Katzen, findet eine kleine Wohnung aber nicht gut für sie."
    }
   ]
  }
 ],
 "teile": [
  {
   "nr": 1,
   "art": "ansage",
   "name": "Hören: Ansagen am Telefon",
   "kurz": "Vier Ansagen, nur EINMAL hören",
   "was": "Vier Ansagen am Telefon oder per Lautsprecher, zum Beispiel aus der Arztpraxis oder am Bahnhof. Zu jeder eine Aufgabe mit drei Antworten.",
   "tipp": "Lies die Aufgabe vorher. Dann weißt du, worauf es ankommt: Uhrzeit, Tag, Ort, was du tun sollst.",
   "zeichen": "☎️",
   "farbe": "turq",
   "punkte": 4,
   "mal": 1,
   "runden": [
    {
     "id": "dzh1s1",
     "titel": "Vier Ansagen am Telefon und per Lautsprecher",
     "aufgaben": [
      {
       "von": "Anrufbeantworter: Praxis Doktor Lindemann",
       "wer": "Frau",
       "text": "Praxis Doktor Lindemann, Allgemeinmedizin. Unsere Praxis ist heute Nachmittag wegen einer Fortbildung geschlossen. Morgen sind wir ab acht Uhr wieder für Sie da. Rezepte und Überweisungen können Sie morgen früh ab halb acht am Empfang abholen. In dringenden Fällen rufen Sie bitte den ärztlichen Bereitschaftsdienst an, die Nummer ist eins eins sechs, eins eins sieben. Bei Lebensgefahr wählen Sie bitte eins eins zwei.",
       "frage": "Was kann man morgen ab halb acht machen?",
       "opt": [
        "Mit dem Arzt sprechen.",
        "Den Bereitschaftsdienst anrufen.",
        "Rezepte abholen."
       ],
       "loesung": 2,
       "stelle": "können Sie morgen früh ab halb acht am Empfang abholen",
       "erklaerung": "Der Arzt ist erst ab acht Uhr da. Ab halb acht gibt es nur Rezepte und Überweisungen am Empfang."
      },
      {
       "von": "Nachricht von der Kita Sonnenblume",
       "wer": "Frau",
       "text": "Hallo Frau Haddad, hier ist Birgit aus der Kita Sonnenblume. Ich wollte Ihnen nur kurz sagen, dass Amira heute ein bisschen Fieber hat. Es ist nicht schlimm, sie spielt noch, aber sie ist sehr müde. Bitte holen Sie sie heute schon um zwölf ab und nicht erst um drei. Und denken Sie bitte daran, morgen ist der Ausflug in den Zoo. Wenn Amira wieder gesund ist, braucht sie eine Brotdose und feste Schuhe. Danke, tschüss.",
       "frage": "Was soll Frau Haddad heute tun?",
       "opt": [
        "Feste Schuhe in die Kita bringen.",
        "Ihre Tochter früher abholen.",
        "Ihre Tochter zum Arzt bringen."
       ],
       "loesung": 1,
       "stelle": "Bitte holen Sie sie heute schon um zwölf ab",
       "erklaerung": "Die Schuhe braucht Amira erst morgen für den Ausflug. Heute soll die Mutter sie um zwölf statt um drei abholen."
      },
      {
       "von": "Durchsage im Kaufhaus",
       "wer": "Mann",
       "text": "Liebe Kunden, heute ist bei uns langer Einkaufsabend. Bis zweiundzwanzig Uhr bekommen Sie in der Abteilung für Haushaltswaren im dritten Stock zwanzig Prozent auf alle Töpfe und Pfannen. Im Erdgeschoss bei den Schuhen gibt es heute zehn Prozent auf Kinderschuhe. Und für die kleine Pause zwischendurch: Unser Café im vierten Stock hat heute ebenfalls bis zweiundzwanzig Uhr geöffnet. Wir wünschen Ihnen einen schönen Einkauf.",
       "frage": "Wo bekommt man zwanzig Prozent Rabatt?",
       "opt": [
        "Im dritten Stock.",
        "Im vierten Stock.",
        "Im Erdgeschoss."
       ],
       "loesung": 0,
       "stelle": "in der Abteilung für Haushaltswaren im dritten Stock",
       "erklaerung": "Im Erdgeschoss gibt es nur zehn Prozent. Im vierten Stock ist das Café."
      },
      {
       "von": "Durchsage am Bahnhof",
       "wer": "Mann",
       "text": "Achtung am Gleis fünf. Der Regionalexpress nach Hannover, planmäßige Abfahrt neun Uhr zwölf, hat heute etwa fünfzehn Minuten Verspätung. Grund dafür ist eine Störung an einem Signal. Fahrgäste nach Hannover können auch den Intercity um neun Uhr zwanzig von Gleis acht nehmen. Ihre Fahrkarte gilt in diesem Zug ausnahmsweise ohne Aufpreis. Wir bitten um Entschuldigung.",
       "frage": "Was können die Fahrgäste nach Hannover machen?",
       "opt": [
        "Pünktlich um neun Uhr zwölf mit dem Regionalexpress fahren.",
        "Am Gleis fünf eine neue Fahrkarte kaufen.",
        "Mit dem Intercity von Gleis acht fahren."
       ],
       "loesung": 2,
       "stelle": "den Intercity um neun Uhr zwanzig von Gleis acht nehmen",
       "erklaerung": "Der Regionalexpress kommt zu spät. Eine neue Fahrkarte ist nicht nötig, die alte gilt im Intercity."
      }
     ]
    },
    {
     "id": "dzh1s2",
     "titel": "Vier Ansagen am Telefon und per Lautsprecher",
     "aufgaben": [
      {
       "von": "Warteschleife: Ausländerbehörde Neustadt",
       "wer": "Frau",
       "text": "Willkommen bei der Ausländerbehörde der Stadt Neustadt. Im Moment sind alle Mitarbeiter im Gespräch. Bitte beachten Sie: Ohne Termin können wir Sie leider nicht bedienen. Einen Termin buchen Sie am schnellsten über unsere Internetseite. Wenn Sie Ihren Aufenthaltstitel verlängern möchten, kommen Sie bitte spätestens sechs Wochen vor dem Ablauf. Bringen Sie dazu Ihren Pass, ein aktuelles Foto und Ihren Mietvertrag mit. Vielen Dank für Ihre Geduld.",
       "frage": "Wann soll man zur Verlängerung kommen?",
       "opt": [
        "Spätestens sechs Wochen vor dem Ablauf.",
        "Sechs Monate vor dem Ablauf.",
        "Ohne Termin am Vormittag."
       ],
       "loesung": 0,
       "stelle": "kommen Sie bitte spätestens sechs Wochen vor dem Ablauf",
       "erklaerung": "Es heißt Wochen, nicht Monate. Ohne Termin geht gar nichts."
      },
      {
       "von": "Nachricht vom Handwerker: Firma Brandt, Sanitär und Heizung",
       "wer": "Mann",
       "text": "Guten Tag, Herr Kowalski, hier ist Firma Brandt, Sanitär und Heizung. Es geht um Ihre Heizung im Bad. Unser Monteur kann leider nicht wie geplant am Donnerstag kommen, er ist krank. Wir können Ihnen Montag früh anbieten, so zwischen acht und zehn. Wenn das passt, müssen Sie nicht zurückrufen, dann kommen wir einfach. Wenn nicht, melden Sie sich bitte bis Freitagmittag bei uns. Auf Wiederhören.",
       "frage": "Wann kommt der Monteur, wenn Herr Kowalski nicht zurückruft?",
       "opt": [
        "Am Montag zwischen acht und zehn.",
        "Am Donnerstag.",
        "Am Freitagmittag."
       ],
       "loesung": 0,
       "stelle": "Montag früh anbieten, so zwischen acht und zehn",
       "erklaerung": "Donnerstag war der alte Termin. Bis Freitagmittag soll man sich nur melden, wenn Montag nicht passt."
      },
      {
       "von": "Nachricht von der Zahnarztpraxis Doktor Schäfer",
       "wer": "Frau",
       "text": "Guten Tag Herr Mensah, hier ist die Zahnarztpraxis Doktor Schäfer. Wir möchten Sie an Ihren Termin morgen um vierzehn Uhr dreißig erinnern. Bitte kommen Sie zehn Minuten früher, wir brauchen noch Ihre neue Versichertenkarte. Ihre alte Karte ist nämlich seit Januar nicht mehr gültig. Wenn Sie den Termin nicht schaffen, sagen Sie bitte bis heute Abend ab, sonst müssen wir Ihnen den Termin berechnen. Danke und bis morgen.",
       "frage": "Warum soll Herr Mensah früher kommen?",
       "opt": [
        "Weil er einen Termin absagen muss.",
        "Weil die Praxis seine neue Versichertenkarte braucht.",
        "Weil der Termin auf vierzehn Uhr verschoben ist."
       ],
       "loesung": 1,
       "stelle": "wir brauchen noch Ihre neue Versichertenkarte",
       "erklaerung": "Der Termin bleibt um vierzehn Uhr dreißig. Absagen soll er nur, wenn er nicht kommen kann."
      },
      {
       "von": "Durchsage am Busbahnhof",
       "wer": "Mann",
       "text": "Eine Information für die Fahrgäste der Buslinie zweiundvierzig. Wegen einer Baustelle in der Goethestraße fährt der Bus ab heute bis zum Ende des Monats eine Umleitung. Die Haltestellen Goethestraße und Marktplatz fallen aus. Bitte steigen Sie stattdessen an der Haltestelle Rathaus ein und aus, das sind nur etwa fünf Minuten zu Fuß. Die Abfahrtszeiten bleiben gleich.",
       "frage": "Wo sollen die Fahrgäste jetzt einsteigen?",
       "opt": [
        "An der Haltestelle Rathaus.",
        "An der Haltestelle Marktplatz.",
        "In der Goethestraße."
       ],
       "loesung": 0,
       "stelle": "steigen Sie stattdessen an der Haltestelle Rathaus ein",
       "erklaerung": "Goethestraße und Marktplatz fallen aus. „stattdessen\" zeigt die neue Haltestelle."
      }
     ]
    },
    {
     "id": "dzh1s3",
     "titel": "Vier Ansagen am Telefon und per Lautsprecher",
     "aufgaben": [
      {
       "von": "Anrufbeantworter: Kita Regenbogen",
       "wer": "Frau",
       "text": "Kindertagesstätte Regenbogen, guten Tag. Leider ist gerade niemand im Büro. Eine wichtige Information für alle Eltern: Am Freitag, dem dreizehnten, bleibt die Kita wegen eines Teamtages geschlossen. Für Eltern, die an diesem Tag arbeiten müssen, gibt es eine Notbetreuung in der Kita am Park. Bitte melden Sie Ihr Kind dafür bis Montag bei Frau Weber an. Sie können auch gern eine Nachricht nach dem Signalton hinterlassen.",
       "frage": "Was müssen Eltern bis Montag tun, wenn sie am Freitag eine Betreuung brauchen?",
       "opt": [
        "Mit dem Team einen Termin machen.",
        "Ihr Kind bei Frau Weber anmelden.",
        "Ihr Kind am Freitag in die Kita Regenbogen bringen."
       ],
       "loesung": 1,
       "stelle": "melden Sie Ihr Kind dafür bis Montag bei Frau Weber an",
       "erklaerung": "Die Kita Regenbogen ist am Freitag zu. Die Notbetreuung ist in der Kita am Park, mit Anmeldung."
      },
      {
       "von": "Durchsage im Kaufhaus",
       "wer": "Frau",
       "text": "Liebe Kunden, der kleine Jonas sucht seine Mama. Jonas ist vier Jahre alt und trägt eine rote Jacke. Eine Kundin hat ihn in der Spielzeugabteilung im zweiten Stock gefunden. Jetzt wartet er bei uns an der Information im Erdgeschoss, direkt neben dem Haupteingang. Die Mutter von Jonas wird gebeten, bitte zur Information zu kommen. Vielen Dank.",
       "frage": "Wo wartet Jonas?",
       "opt": [
        "Am Ausgang zum Parkhaus.",
        "An der Information im Erdgeschoss.",
        "In der Spielzeugabteilung."
       ],
       "loesung": 1,
       "stelle": "Jetzt wartet er bei uns an der Information im Erdgeschoss",
       "erklaerung": "In der Spielzeugabteilung wurde er gefunden. „Jetzt\" sagt, wo er gerade ist."
      },
      {
       "von": "Nachricht vom Hausmeisterservice",
       "wer": "Mann",
       "text": "Guten Tag, Frau Petrenko, hier spricht Herr Albers vom Hausmeisterservice. Morgen kommt ja der Elektriker wegen der Lampe im Treppenhaus. Dafür müssen wir den Strom im ganzen Haus von neun bis ungefähr elf Uhr abstellen. Bitte schalten Sie vorher Ihren Computer aus. Den Kühlschrank lassen Sie einfach zu, dann passiert nichts. Ihre Wohnung muss der Elektriker nicht betreten, Sie müssen also nicht zu Hause sein. Schönen Tag noch.",
       "frage": "Was soll Frau Petrenko tun?",
       "opt": [
        "Den Kühlschrank leer machen.",
        "Den Computer vorher ausschalten.",
        "Morgen zu Hause bleiben."
       ],
       "loesung": 1,
       "stelle": "Bitte schalten Sie vorher Ihren Computer aus",
       "erklaerung": "Den Kühlschrank soll sie nur zu lassen. Zu Hause sein muss sie nicht."
      },
      {
       "von": "Nachricht von der Ausländerbehörde",
       "wer": "Frau",
       "text": "Guten Tag, Herr Ferreira, hier ist Frau Lorenz von der Ausländerbehörde. Ihr neuer Aufenthaltstitel ist fertig. Sie können ihn ab nächster Woche abholen, aber nur mit Termin. Den Termin bekommen Sie online oder hier bei uns am Telefon. Bitte bringen Sie Ihren Pass mit und die alte Karte, die müssen Sie bei uns abgeben. Die Gebühr haben Sie schon bezahlt. Auf Wiederhören.",
       "frage": "Was muss Herr Ferreira mitbringen?",
       "opt": [
        "Das Geld für die Gebühr.",
        "Seinen Pass und die alte Karte.",
        "Ein neues Foto."
       ],
       "loesung": 1,
       "stelle": "bringen Sie Ihren Pass mit und die alte Karte",
       "erklaerung": "Die Gebühr ist schon bezahlt. Von einem Foto spricht Frau Lorenz nicht."
      }
     ]
    }
   ]
  },
  {
   "nr": 2,
   "art": "ansage",
   "name": "Hören: Radio",
   "kurz": "Fünf Ansagen aus dem Radio",
   "was": "Fünf kurze Ansagen aus dem Radio: Verkehr, Wetter, Veranstaltungen, Hinweise der Stadt.",
   "tipp": "Im Radio kommt viel auf einmal. Hör nur auf das, was die Aufgabe fragt.",
   "zeichen": "📻",
   "farbe": "gold",
   "punkte": 5,
   "mal": 1,
   "runden": [
    {
     "id": "dzh2s1",
     "titel": "Fünf Ansagen im Radio",
     "aufgaben": [
      {
       "von": "Radio: Verkehr",
       "wer": "Mann",
       "text": "Hier ist der Verkehr. Auf der A sieben zwischen Kassel Nord und Kassel Mitte gibt es nach einem Unfall zehn Kilometer Stau. Die rechte Spur ist gesperrt. Bitte fahren Sie schon in Kassel Nord ab und folgen Sie der Umleitung. In der Innenstadt ist die Friedrichstraße wegen eines Festes heute den ganzen Tag gesperrt.",
       "frage": "Was sollen die Autofahrer auf der A sieben tun?",
       "opt": [
        "Auf der rechten Spur fahren.",
        "In Kassel Mitte abfahren.",
        "In Kassel Nord abfahren."
       ],
       "loesung": 2,
       "stelle": "Bitte fahren Sie schon in Kassel Nord ab",
       "erklaerung": "Die rechte Spur ist gesperrt. Kassel Mitte liegt hinter dem Stau."
      },
      {
       "von": "Radio: Wetter",
       "wer": "Frau",
       "text": "Das Wetter für heute: Am Vormittag ist es noch trocken und teilweise sonnig, bei Temperaturen um zwölf Grad. Ab dem Nachmittag kommen von Westen Wolken und dann auch Regen, am Abend kann es sogar Gewitter geben. Morgen wird es kühler, nur noch acht Grad, aber wieder trocken. Wer heute noch Wäsche draußen aufhängen will, sollte das am Vormittag tun.",
       "frage": "Wie wird das Wetter heute Nachmittag?",
       "opt": [
        "Trocken und kühler.",
        "Es regnet.",
        "Sonnig und warm."
       ],
       "loesung": 1,
       "stelle": "Ab dem Nachmittag kommen von Westen Wolken und dann auch Regen",
       "erklaerung": "Sonne gibt es nur am Vormittag. Trocken und kühler wird es erst morgen."
      },
      {
       "von": "Radio: Veranstaltung",
       "wer": "Mann",
       "text": "Am Samstag ist wieder Flohmarkt auf dem Schulhof der Lindenschule. Von neun bis fünfzehn Uhr können Sie dort Kleidung, Spielzeug und Bücher kaufen und verkaufen. Wer selbst einen Stand haben möchte, muss sich bis Donnerstag beim Elternverein anmelden. Ein Stand kostet fünf Euro. Das Geld bekommt die Schule für neue Sportgeräte. Kaffee und Kuchen gibt es auch.",
       "frage": "Was muss man tun, wenn man etwas verkaufen möchte?",
       "opt": [
        "Einen Kuchen mitbringen.",
        "Am Samstag um neun Uhr kommen.",
        "Sich bis Donnerstag anmelden."
       ],
       "loesung": 2,
       "stelle": "muss sich bis Donnerstag beim Elternverein anmelden",
       "erklaerung": "Um neun beginnt der Flohmarkt für alle. Für einen eigenen Stand braucht man eine Anmeldung."
      },
      {
       "von": "Radio: Hinweis der Stadt",
       "wer": "Frau",
       "text": "Eine Information der Stadt Bergheim: Ab Montag holt die Müllabfuhr den Biomüll nicht mehr am Dienstag, sondern am Mittwoch ab. Die Termine für den Restmüll und das Altpapier bleiben gleich. Den neuen Abfallkalender finden Sie auf der Internetseite der Stadt, oder Sie bekommen ihn im Bürgerbüro im Rathaus.",
       "frage": "Was ändert sich ab Montag?",
       "opt": [
        "Der Tag für den Biomüll.",
        "Die Öffnungszeiten im Bürgerbüro.",
        "Der Tag für das Altpapier."
       ],
       "loesung": 0,
       "stelle": "den Biomüll nicht mehr am Dienstag, sondern am Mittwoch ab",
       "erklaerung": "Altpapier und Restmüll „bleiben gleich\". Das Bürgerbüro ist nur der Ort für den Kalender."
      },
      {
       "von": "Radio: Gewinnspiel",
       "wer": "Mann",
       "text": "Und jetzt unser Gewinnspiel. Heute verlosen wir zwei Karten für das Konzert im Stadtpark am Sonntag. Unsere Frage: Wie heißt der Fluss, der durch unsere Stadt fließt? Rufen Sie uns an, aber erst nach dem nächsten Lied, nicht jetzt! Die Nummer ist null acht null null, zwei zwei drei drei vier vier. Der Anruf ist kostenlos. Viel Glück!",
       "frage": "Wann soll man anrufen?",
       "opt": [
        "Nach dem nächsten Lied.",
        "Am Sonntag.",
        "Sofort."
       ],
       "loesung": 0,
       "stelle": "aber erst nach dem nächsten Lied, nicht jetzt",
       "erklaerung": "„nicht jetzt\" schließt „sofort\" aus. Am Sonntag ist das Konzert."
      }
     ]
    },
    {
     "id": "dzh2s2",
     "titel": "Fünf Ansagen im Radio",
     "aufgaben": [
      {
       "von": "Radio: Wetter",
       "wer": "Frau",
       "text": "Und hier das Wetter für das Wochenende. Am Samstag scheint überall die Sonne, die Temperaturen steigen auf bis zu achtundzwanzig Grad. Ein guter Tag für das Schwimmbad. Am Sonntag wird es dann schwül, und ab Mittag gibt es im ganzen Land Gewitter mit starkem Wind. Wer am Sonntag einen Ausflug machen will, fährt am besten schon am Vormittag los.",
       "frage": "Wie wird das Wetter am Sonntagnachmittag?",
       "opt": [
        "Trocken und ohne Wind.",
        "Sonnig bei achtundzwanzig Grad.",
        "Es gibt Gewitter."
       ],
       "loesung": 2,
       "stelle": "ab Mittag gibt es im ganzen Land Gewitter",
       "erklaerung": "Achtundzwanzig Grad und Sonne gibt es am Samstag."
      },
      {
       "von": "Radio: Verkehr",
       "wer": "Mann",
       "text": "Eine Meldung für alle, die mit Bus und Bahn fahren: Wegen eines Streiks fahren morgen in der ganzen Stadt keine Straßenbahnen. Die Busse fahren aber normal. Auch die S-Bahn ist nicht betroffen. Bitte planen Sie für Ihren Weg zur Arbeit mehr Zeit ein. Der Streik beginnt um vier Uhr morgens und soll um Mitternacht enden.",
       "frage": "Was fährt morgen nicht?",
       "opt": [
        "Die S-Bahn.",
        "Der Bus.",
        "Die Straßenbahn."
       ],
       "loesung": 2,
       "stelle": "fahren morgen in der ganzen Stadt keine Straßenbahnen",
       "erklaerung": "Busse fahren „normal\", die S-Bahn ist „nicht betroffen\"."
      },
      {
       "von": "Radio: Veranstaltung",
       "wer": "Frau",
       "text": "Die Stadtbibliothek lädt am Mittwoch um sechzehn Uhr zum Vorlesenachmittag für Kinder ein. Gelesen wird auf Deutsch, Türkisch und Arabisch. Die Veranstaltung ist für Kinder von vier bis acht Jahren und kostenlos. Eine Anmeldung ist nicht nötig, aber bitte kommen Sie pünktlich, weil es nur wenige Plätze gibt.",
       "frage": "Was muss man für die Veranstaltung tun?",
       "opt": [
        "Eintritt bezahlen.",
        "Sich vorher anmelden.",
        "Pünktlich kommen."
       ],
       "loesung": 2,
       "stelle": "bitte kommen Sie pünktlich",
       "erklaerung": "Die Anmeldung ist „nicht nötig\", und die Veranstaltung ist kostenlos."
      },
      {
       "von": "Radio: Hinweis der Stadt",
       "wer": "Mann",
       "text": "Die Stadt informiert: Das Bürgeramt in der Hauptstraße ist ab nächster Woche auch am Samstagvormittag geöffnet, von neun bis zwölf Uhr. Dafür ist das Amt am Montagnachmittag geschlossen. Einen neuen Personalausweis oder Pass können Sie weiterhin nur mit Termin beantragen. Termine gibt es online oder unter der Telefonnummer eins eins fünf.",
       "frage": "Was ist neu beim Bürgeramt?",
       "opt": [
        "Man kann auch am Samstag hingehen.",
        "Es ist montags den ganzen Tag geschlossen.",
        "Man braucht jetzt für alles einen Termin."
       ],
       "loesung": 0,
       "stelle": "ab nächster Woche auch am Samstagvormittag geöffnet",
       "erklaerung": "Geschlossen ist nur der Montagnachmittag. Termine braucht man „weiterhin\", das ist nicht neu."
      },
      {
       "von": "Radio: Gewinnspiel",
       "wer": "Frau",
       "text": "Hallo und willkommen zu unserem Gewinnspiel am Nachmittag. Schicken Sie uns eine Nachricht mit Ihrem Lieblingslied und Ihrer Telefonnummer. Wir rufen jeden Tag um siebzehn Uhr eine Person zurück. Wenn Sie dann direkt sagen können, welches Lied gerade läuft, gewinnen Sie hundert Euro. Mitmachen kann jeder ab achtzehn Jahren.",
       "frage": "Was muss man tun, um zu gewinnen?",
       "opt": [
        "Um siebzehn Uhr im Studio anrufen.",
        "Hundert Euro an den Sender schicken.",
        "Am Telefon sagen, welches Lied läuft."
       ],
       "loesung": 2,
       "stelle": "Wenn Sie dann direkt sagen können, welches Lied gerade läuft",
       "erklaerung": "Um siebzehn Uhr ruft der Sender an, nicht der Hörer. Die hundert Euro sind der Gewinn."
      }
     ]
    },
    {
     "id": "dzh2s3",
     "titel": "Fünf Ansagen im Radio",
     "aufgaben": [
      {
       "von": "Radio: Hinweis der Stadtwerke",
       "wer": "Frau",
       "text": "Achtung, eine Warnung der Stadtwerke: In den Stadtteilen Nord und Ost ist das Leitungswasser heute verschmutzt. Bitte trinken Sie das Wasser nicht direkt aus der Leitung, sondern kochen Sie es vorher ab. Zum Duschen und Waschen können Sie es ganz normal benutzen. Wir informieren Sie, sobald das Wasser wieder in Ordnung ist.",
       "frage": "Was sollen die Menschen in Nord und Ost tun?",
       "opt": [
        "Heute nicht duschen.",
        "Das Wasser vor dem Trinken kochen.",
        "Kein Leitungswasser mehr benutzen."
       ],
       "loesung": 1,
       "stelle": "kochen Sie es vorher ab",
       "erklaerung": "Duschen und Waschen geht „ganz normal\". Nur zum Trinken muss man das Wasser kochen."
      },
      {
       "von": "Radio: Verkehr",
       "wer": "Mann",
       "text": "Eine wichtige Meldung für Autofahrer in der Innenstadt: Am Wochenende ist die Brücke am Hafen wegen Bauarbeiten gesperrt. Von Freitag zwanzig Uhr bis Montag fünf Uhr können keine Autos über die Brücke fahren. Fußgänger und Radfahrer dürfen die Brücke aber benutzen. Eine Umleitung über die Nordbrücke ist ausgeschildert.",
       "frage": "Wer darf am Wochenende über die Brücke am Hafen?",
       "opt": [
        "Autos, aber nur am Montag.",
        "Fußgänger und Radfahrer.",
        "Niemand."
       ],
       "loesung": 1,
       "stelle": "Fußgänger und Radfahrer dürfen die Brücke aber benutzen",
       "erklaerung": "Gesperrt ist sie nur für Autos. Am Montag um fünf Uhr ist die Sperrung vorbei, das ist nach dem Wochenende."
      },
      {
       "von": "Radio: Veranstaltung",
       "wer": "Frau",
       "text": "Der Sportverein Grün-Weiß feiert am Sonntag seinen hundertsten Geburtstag mit einem großen Fest auf dem Sportplatz. Es gibt Spiele für Kinder, ein Fußballturnier und am Abend Musik. Der Eintritt ist frei. Weil es am Sportplatz nur wenige Parkplätze gibt, bittet der Verein alle Gäste, mit dem Fahrrad oder dem Bus zu kommen.",
       "frage": "Worum bittet der Verein?",
       "opt": [
        "Eintritt zu bezahlen.",
        "Sich für das Turnier anzumelden.",
        "Nicht mit dem Auto zu kommen."
       ],
       "loesung": 2,
       "stelle": "mit dem Fahrrad oder dem Bus zu kommen",
       "erklaerung": "Es gibt kaum Parkplätze, deshalb lieber Fahrrad oder Bus. Der Eintritt ist frei."
      },
      {
       "von": "Radio: Wetter",
       "wer": "Mann",
       "text": "Das Wetter: In der Nacht wird es sehr kalt, bis minus sechs Grad. Auf den Straßen kann es morgen früh glatt sein. Fahren Sie bitte vorsichtig und rechnen Sie mit längeren Fahrzeiten. Am Tag bleibt es trocken und sonnig, aber kalt, mit höchstens null Grad.",
       "frage": "Wovor warnt der Wetterbericht?",
       "opt": [
        "Vor Schnee am Nachmittag.",
        "Vor starkem Regen in der Nacht.",
        "Vor glatten Straßen am Morgen."
       ],
       "loesung": 2,
       "stelle": "Auf den Straßen kann es morgen früh glatt sein",
       "erklaerung": "Es bleibt trocken, also kein Regen und kein Schnee. Das Problem ist die Kälte am Morgen."
      },
      {
       "von": "Radio: Gewinnspiel",
       "wer": "Frau",
       "text": "Liebe Hörer, heute können Sie bei uns einen Einkaufsgutschein über zweihundert Euro gewinnen. Hören Sie gut zu: Wir spielen drei kurze Geräusche aus dem Alltag. Wenn Sie alle drei erkennen, schreiben Sie uns eine E-Mail. Telefonisch können Sie heute leider nicht mitmachen. Einsendeschluss ist heute um zwanzig Uhr.",
       "frage": "Wie kann man heute mitmachen?",
       "opt": [
        "Per Telefon.",
        "Mit einem Brief.",
        "Per E-Mail."
       ],
       "loesung": 2,
       "stelle": "schreiben Sie uns eine E-Mail",
       "erklaerung": "„Telefonisch können Sie heute leider nicht mitmachen.\""
      }
     ]
    }
   ]
  },
  {
   "nr": 3,
   "art": "gespraech",
   "name": "Hören: Gespräche",
   "kurz": "Vier Gespräche, je zwei Aufgaben",
   "was": "Vier Gespräche aus dem Alltag, in zwei Abschnitten. Zuerst richtig oder falsch, dann eine Aufgabe mit drei Antworten.",
   "tipp": "Pläne ändern sich oft im Gespräch: „Ach nein, doch lieber …\". Das Ende zählt.",
   "zeichen": "💬",
   "farbe": "rot",
   "punkte": 8,
   "mal": 1,
   "runden": [
    {
     "id": "dzh3s1",
     "titel": "Vier Gespräche im Alltag",
     "aufgaben": [
      {
       "ort": "Gespräch 1 · Abschnitt 1",
       "zeilen": [
        {
         "wer": "Frau",
         "text": "Hallo, Herr Demir! Gut, dass ich Sie treffe. Haben Sie vielleicht ein Paket für mich angenommen?"
        },
        {
         "wer": "Mann",
         "text": "Ein Paket? Nein, heute nicht. Aber gestern war der Paketbote bei mir und hat gefragt, ob ich was für die Familie Klein nehmen kann."
        },
        {
         "wer": "Frau",
         "text": "Ach so. Kleins wohnen im dritten Stock. Ich warte seit Montag auf eine Lieferung, so ein großer Karton mit einem Kinderbett."
        }
       ],
       "satz": "Die Frau wartet auf ein Paket.",
       "loesung": true,
       "stelle": "Ich warte seit Montag auf eine Lieferung",
       "erklaerung": "Sie fragt nach einem Paket und wartet seit Montag auf ein Kinderbett."
      },
      {
       "ort": "Gespräch 1 · Abschnitt 2",
       "zeilen": [
        {
         "wer": "Mann",
         "text": "Haben Sie schon mal online geschaut, wo das Paket ist?"
        },
        {
         "wer": "Frau",
         "text": "Ja, da steht, es ist zugestellt. Aber bei mir ist nichts angekommen."
        },
        {
         "wer": "Mann",
         "text": "Hm. Manchmal legen die das unten in den Keller, neben die Fahrräder. Schauen Sie doch da mal nach."
        },
        {
         "wer": "Frau",
         "text": "Gute Idee, das mache ich gleich. Danke!"
        }
       ],
       "frage": "Was schlägt der Mann vor?",
       "opt": [
        "Den Paketboten anzurufen.",
        "Im Keller nachzusehen.",
        "Bei Familie Klein zu klingeln."
       ],
       "loesung": 1,
       "stelle": "legen die das unten in den Keller",
       "erklaerung": "„Schauen Sie doch da mal nach\" ist der Vorschlag. Familie Klein kam nur im ersten Abschnitt vor."
      },
      {
       "ort": "Gespräch 2 · Abschnitt 1",
       "zeilen": [
        {
         "wer": "Mann",
         "text": "Na, Olga, wie war dein erster Tag in der neuen Abteilung?"
        },
        {
         "wer": "Frau",
         "text": "Ganz gut, danke. Die Kollegen sind nett. Nur die Arbeitszeiten sind ein bisschen schwierig für mich."
        },
        {
         "wer": "Mann",
         "text": "Wieso? Fängst du so früh an?"
        },
        {
         "wer": "Frau",
         "text": "Ja, um sechs. Vorher in der Küche hab ich erst um acht angefangen. Jetzt muss ich um fünf aufstehen."
        }
       ],
       "satz": "Die Frau arbeitet schon lange in dieser Abteilung.",
       "loesung": false,
       "stelle": "wie war dein erster Tag in der neuen Abteilung",
       "erklaerung": "Es war ihr erster Tag. Vorher hat sie in der Küche gearbeitet."
      },
      {
       "ort": "Gespräch 2 · Abschnitt 2",
       "zeilen": [
        {
         "wer": "Mann",
         "text": "Und deine Tochter? Wer bringt sie dann in die Schule?"
        },
        {
         "wer": "Frau",
         "text": "Das ist eben das Problem. Mein Mann fährt um sieben los. Aber unsere Nachbarin hat gesagt, sie nimmt Mila mit, ihr Sohn geht in dieselbe Klasse."
        },
        {
         "wer": "Mann",
         "text": "Na, das ist doch super."
        },
        {
         "wer": "Frau",
         "text": "Ja, zum Glück. Und nachmittags hol ich sie selbst ab, da hab ich ja schon um zwei Feierabend."
        }
       ],
       "frage": "Wer bringt die Tochter morgens in die Schule?",
       "opt": [
        "Die Nachbarin.",
        "Die Frau selbst.",
        "Der Mann der Frau."
       ],
       "loesung": 0,
       "stelle": "unsere Nachbarin hat gesagt, sie nimmt Mila mit",
       "erklaerung": "Der Mann fährt zu früh los. Die Frau holt Mila nur am Nachmittag ab."
      },
      {
       "ort": "Gespräch 3 · Abschnitt 1",
       "zeilen": [
        {
         "wer": "Mann",
         "text": "So, Frau Haddad, was kann ich für Sie tun?"
        },
        {
         "wer": "Frau",
         "text": "Ich habe seit drei Tagen starke Rückenschmerzen. Ich glaube, ich habe beim Umzug zu schwer getragen."
        },
        {
         "wer": "Mann",
         "text": "Das kann gut sein. Haben Sie Fieber oder andere Beschwerden?"
        },
        {
         "wer": "Frau",
         "text": "Nein, Fieber habe ich nicht. Nur der Rücken tut weh, vor allem morgens."
        }
       ],
       "satz": "Die Frau hat Fieber.",
       "loesung": false,
       "stelle": "Nein, Fieber habe ich nicht",
       "erklaerung": "Sie hat nur Rückenschmerzen."
      },
      {
       "ort": "Gespräch 3 · Abschnitt 2",
       "zeilen": [
        {
         "wer": "Mann",
         "text": "Gut. Ich schreibe Ihnen ein Schmerzmittel auf. Und Sie bekommen sechsmal Krankengymnastik."
        },
        {
         "wer": "Frau",
         "text": "Muss ich dann zu Hause bleiben? Ich arbeite in einer Bäckerei."
        },
        {
         "wer": "Mann",
         "text": "Ja, ich schreibe Sie bis Freitag krank. Schwer heben dürfen Sie jetzt auf keinen Fall."
        },
        {
         "wer": "Frau",
         "text": "Okay. Dann ruf ich gleich meinen Chef an."
        }
       ],
       "frage": "Was sagt der Arzt?",
       "opt": [
        "Die Frau soll bis Freitag nicht arbeiten.",
        "Die Frau braucht keine Tabletten.",
        "Die Frau soll in der Bäckerei nur leichte Arbeit machen."
       ],
       "loesung": 0,
       "stelle": "ich schreibe Sie bis Freitag krank",
       "erklaerung": "Krankgeschrieben heißt: gar nicht arbeiten. Ein Schmerzmittel bekommt sie auch."
      },
      {
       "ort": "Gespräch 4 · Abschnitt 1",
       "zeilen": [
        {
         "wer": "Frau",
         "text": "Herr Okoye, haben Sie kurz Zeit? Ich möchte mit Ihnen über Daniel sprechen."
        },
        {
         "wer": "Mann",
         "text": "Ja, natürlich. Gibt es ein Problem?"
        },
        {
         "wer": "Frau",
         "text": "Nein, kein großes. Daniel ist ein guter Schüler. Aber in den letzten zwei Wochen hat er oft seine Hausaufgaben nicht gemacht."
        },
        {
         "wer": "Mann",
         "text": "Oh, das wusste ich nicht. Er sagt immer, er hat keine Hausaufgaben."
        }
       ],
       "satz": "Der Vater weiß nicht, dass sein Sohn die Hausaufgaben oft nicht macht.",
       "loesung": true,
       "stelle": "Oh, das wusste ich nicht",
       "erklaerung": "Daniel sagt zu Hause, er hat keine Hausaufgaben. Der Vater hört es zum ersten Mal."
      },
      {
       "ort": "Gespräch 4 · Abschnitt 2",
       "zeilen": [
        {
         "wer": "Frau",
         "text": "Das sagen viele Kinder. Am besten schauen Sie jeden Abend in sein Heft. Da schreibt er die Aufgaben rein."
        },
        {
         "wer": "Mann",
         "text": "Gut, das mache ich. Soll ich mich in zwei Wochen noch einmal bei Ihnen melden?"
        },
        {
         "wer": "Frau",
         "text": "Ja, gern. Oder schreiben Sie mir einfach eine Nachricht über die Schul-App, das ist am einfachsten."
        }
       ],
       "frage": "Was soll der Vater jeden Abend tun?",
       "opt": [
        "In das Heft von Daniel schauen.",
        "Mit Daniel die Hausaufgaben machen.",
        "Der Lehrerin eine Nachricht schreiben."
       ],
       "loesung": 0,
       "stelle": "Am besten schauen Sie jeden Abend in sein Heft",
       "erklaerung": "Die Nachricht soll er erst in zwei Wochen schreiben, nicht jeden Abend."
      }
     ]
    },
    {
     "id": "dzh3s2",
     "titel": "Vier Gespräche im Alltag",
     "aufgaben": [
      {
       "ort": "Gespräch 1 · Abschnitt 1",
       "zeilen": [
        {
         "wer": "Mann",
         "text": "Guten Tag, kann ich Ihnen helfen?"
        },
        {
         "wer": "Frau",
         "text": "Ja, ich habe diese Jacke letzte Woche hier gekauft. Und jetzt ist schon der Reißverschluss kaputt."
        },
        {
         "wer": "Mann",
         "text": "Oh, das tut mir leid. Haben Sie den Kassenbon dabei?"
        },
        {
         "wer": "Frau",
         "text": "Ja, hier. Ich möchte die Jacke aber nicht umtauschen. Ich hätte gern mein Geld zurück."
        }
       ],
       "satz": "Die Frau möchte eine andere Jacke.",
       "loesung": false,
       "stelle": "Ich möchte die Jacke aber nicht umtauschen",
       "erklaerung": "Sie will keine andere Jacke, sondern ihr Geld zurück."
      },
      {
       "ort": "Gespräch 1 · Abschnitt 2",
       "zeilen": [
        {
         "wer": "Mann",
         "text": "Hm, das ist eine Reklamation. Das Geld kann ich Ihnen nicht selbst zurückgeben, das macht meine Chefin."
        },
        {
         "wer": "Frau",
         "text": "Und wo finde ich Ihre Chefin?"
        },
        {
         "wer": "Mann",
         "text": "Sie ist heute leider nicht da, aber morgen ab zehn Uhr wieder im Laden. Lassen Sie die Jacke einfach hier, ich schreibe Ihnen eine Quittung."
        },
        {
         "wer": "Frau",
         "text": "Gut, dann komme ich morgen wieder."
        }
       ],
       "frage": "Was passiert mit der Jacke?",
       "opt": [
        "Die Frau nimmt sie wieder mit nach Hause.",
        "Die Frau lässt sie im Laden.",
        "Der Verkäufer repariert sie."
       ],
       "loesung": 1,
       "stelle": "Lassen Sie die Jacke einfach hier",
       "erklaerung": "Die Frau bekommt eine Quittung für die Jacke und kommt morgen wegen des Geldes wieder."
      },
      {
       "ort": "Gespräch 2 · Abschnitt 1",
       "zeilen": [
        {
         "wer": "Frau",
         "text": "Guten Abend, Herr Ferreira. Entschuldigen Sie, dass ich so spät klingle."
        },
        {
         "wer": "Mann",
         "text": "Kein Problem, Frau Schulz. Was ist los?"
        },
        {
         "wer": "Frau",
         "text": "Bei mir in der Küche kommt Wasser von der Decke. Ich glaube, das kommt aus Ihrer Wohnung."
        },
        {
         "wer": "Mann",
         "text": "Was? Oh nein. Ich habe gerade die Waschmaschine angemacht. Moment, ich schau sofort nach."
        }
       ],
       "satz": "In der Küche der Frau tropft Wasser.",
       "loesung": true,
       "stelle": "Bei mir in der Küche kommt Wasser von der Decke",
       "erklaerung": "Das Wasser kommt von oben aus der Wohnung des Mannes."
      },
      {
       "ort": "Gespräch 2 · Abschnitt 2",
       "zeilen": [
        {
         "wer": "Mann",
         "text": "Tatsächlich, der Schlauch von der Waschmaschine ist kaputt. Ich hab die Maschine ausgemacht."
        },
        {
         "wer": "Frau",
         "text": "Gut. Und was machen wir jetzt mit meiner Decke?"
        },
        {
         "wer": "Mann",
         "text": "Ich rufe morgen früh gleich die Hausverwaltung an. Und ich habe eine Haftpflichtversicherung, die bezahlt den Schaden."
        },
        {
         "wer": "Frau",
         "text": "Na, dann bin ich beruhigt."
        }
       ],
       "frage": "Was macht der Mann morgen?",
       "opt": [
        "Er kauft eine neue Waschmaschine.",
        "Er ruft die Hausverwaltung an.",
        "Er repariert die Decke selbst."
       ],
       "loesung": 1,
       "stelle": "Ich rufe morgen früh gleich die Hausverwaltung an",
       "erklaerung": "Kaputt ist nur der Schlauch. Den Schaden an der Decke bezahlt die Versicherung."
      },
      {
       "ort": "Gespräch 3 · Abschnitt 1",
       "zeilen": [
        {
         "wer": "Mann",
         "text": "Sag mal, Aylin, kommst du am Freitag mit zur Feier von Herrn Bauer?"
        },
        {
         "wer": "Frau",
         "text": "Ach stimmt, der geht ja in Rente. Wo ist das denn?"
        },
        {
         "wer": "Mann",
         "text": "In der Kantine, um drei. Wir sammeln auch Geld für ein Geschenk. Jeder gibt fünf Euro."
        },
        {
         "wer": "Frau",
         "text": "Klar, ich bin dabei. Was wollt ihr ihm denn schenken?"
        }
       ],
       "satz": "Die Kollegen sammeln Geld für ein Geschenk.",
       "loesung": true,
       "stelle": "Wir sammeln auch Geld für ein Geschenk",
       "erklaerung": "Jeder gibt fünf Euro für das Geschenk von Herrn Bauer."
      },
      {
       "ort": "Gespräch 3 · Abschnitt 2",
       "zeilen": [
        {
         "wer": "Mann",
         "text": "Wir dachten an einen Gutschein für ein Restaurant. Er geht doch so gern essen."
        },
        {
         "wer": "Frau",
         "text": "Hm, oder ein Fahrrad? Er hat doch gesagt, er will in der Rente viel Rad fahren."
        },
        {
         "wer": "Mann",
         "text": "Ein Fahrrad ist zu teuer. Aber vielleicht einen Gutschein für ein Fahrradgeschäft?"
        },
        {
         "wer": "Frau",
         "text": "Ja, das ist gut. Dann kann er sich selbst was aussuchen."
        }
       ],
       "frage": "Was wollen die Kollegen jetzt schenken?",
       "opt": [
        "Ein Fahrrad.",
        "Einen Gutschein für ein Restaurant.",
        "Einen Gutschein für ein Fahrradgeschäft."
       ],
       "loesung": 2,
       "stelle": "vielleicht einen Gutschein für ein Fahrradgeschäft",
       "erklaerung": "Das Restaurant war die erste Idee, das Fahrrad ist zu teuer. Am Ende einigen sie sich."
      },
      {
       "ort": "Gespräch 4 · Abschnitt 1",
       "zeilen": [
        {
         "wer": "Frau",
         "text": "Guten Morgen. Was kann ich für Sie tun?"
        },
        {
         "wer": "Mann",
         "text": "Guten Morgen. Mein Name ist Petrov. Ich brauche einen Termin für eine Impfung, für die Grippe."
        },
        {
         "wer": "Frau",
         "text": "Für die Grippeimpfung brauchen Sie keinen Termin. Kommen Sie einfach dienstags oder donnerstags zwischen acht und zehn Uhr."
        },
        {
         "wer": "Mann",
         "text": "Ach, das ist praktisch."
        }
       ],
       "satz": "Der Mann muss für die Impfung einen Termin machen.",
       "loesung": false,
       "stelle": "Für die Grippeimpfung brauchen Sie keinen Termin",
       "erklaerung": "Er kann einfach dienstags oder donnerstags kommen."
      },
      {
       "ort": "Gespräch 4 · Abschnitt 2",
       "zeilen": [
        {
         "wer": "Mann",
         "text": "Muss ich etwas mitbringen?"
        },
        {
         "wer": "Frau",
         "text": "Ja, Ihre Versichertenkarte und Ihren Impfpass, wenn Sie einen haben."
        },
        {
         "wer": "Mann",
         "text": "Den Impfpass habe ich leider verloren."
        },
        {
         "wer": "Frau",
         "text": "Das macht nichts. Dann bekommen Sie bei uns einen neuen, der kostet nichts."
        }
       ],
       "frage": "Was passiert, weil der Mann keinen Impfpass mehr hat?",
       "opt": [
        "Er muss für den neuen Pass bezahlen.",
        "Er kann nicht geimpft werden.",
        "Er bekommt in der Praxis einen neuen."
       ],
       "loesung": 2,
       "stelle": "Dann bekommen Sie bei uns einen neuen",
       "erklaerung": "„Das macht nichts\": Er wird geimpft und bekommt kostenlos einen neuen Impfpass."
      }
     ]
    },
    {
     "id": "dzh3s3",
     "titel": "Vier Gespräche im Alltag",
     "aufgaben": [
      {
       "ort": "Gespräch 1 · Abschnitt 1",
       "zeilen": [
        {
         "wer": "Frau",
         "text": "Guten Tag, Herr Nowak. Schön, dass Sie kommen konnten. Es geht um die Klassenfahrt im Juni."
        },
        {
         "wer": "Mann",
         "text": "Ja, Ben hat davon erzählt. Fünf Tage an die Ostsee, oder?"
        },
        {
         "wer": "Frau",
         "text": "Genau. Die Fahrt kostet zweihundertzwanzig Euro. Ich weiß, das ist viel Geld."
        },
        {
         "wer": "Mann",
         "text": "Ja, ehrlich gesagt, das ist für uns gerade schwierig. Ich bin seit zwei Monaten arbeitslos."
        }
       ],
       "satz": "Die Klassenfahrt dauert fünf Tage.",
       "loesung": true,
       "stelle": "Fünf Tage an die Ostsee",
       "erklaerung": "Der Vater sagt es, und die Lehrerin antwortet „Genau\"."
      },
      {
       "ort": "Gespräch 1 · Abschnitt 2",
       "zeilen": [
        {
         "wer": "Frau",
         "text": "Das verstehe ich. Sie können beim Jobcenter einen Antrag stellen, dann bezahlt das Amt die Fahrt."
        },
        {
         "wer": "Mann",
         "text": "Wirklich? Das wusste ich nicht. Was muss ich da machen?"
        },
        {
         "wer": "Frau",
         "text": "Ich gebe Ihnen das Formular gleich mit. Füllen Sie es aus und bringen Sie es mit dem Brief von der Schule zum Jobcenter."
        },
        {
         "wer": "Mann",
         "text": "Danke, das mache ich diese Woche noch."
        }
       ],
       "frage": "Wer kann die Klassenfahrt bezahlen?",
       "opt": [
        "Die Lehrerin.",
        "Die Schule.",
        "Das Jobcenter."
       ],
       "loesung": 2,
       "stelle": "dann bezahlt das Amt die Fahrt",
       "erklaerung": "Die Schule gibt nur den Brief, die Lehrerin das Formular. Bezahlen kann das Jobcenter."
      },
      {
       "ort": "Gespräch 2 · Abschnitt 1",
       "zeilen": [
        {
         "wer": "Frau",
         "text": "Hallo Tarek, hast du schon den neuen Schichtplan gesehen?"
        },
        {
         "wer": "Mann",
         "text": "Nein, noch nicht. Hängt der schon?"
        },
        {
         "wer": "Frau",
         "text": "Ja, seit heute Morgen, neben der Kaffeemaschine. Du hast nächste Woche Nachtschicht."
        },
        {
         "wer": "Mann",
         "text": "Was? Schon wieder? Ich hatte doch erst diesen Monat Nachtschicht."
        }
       ],
       "satz": "Der Mann kennt den neuen Schichtplan schon.",
       "loesung": false,
       "stelle": "Nein, noch nicht. Hängt der schon?",
       "erklaerung": "Er hört erst von der Kollegin, dass er Nachtschicht hat."
      },
      {
       "ort": "Gespräch 2 · Abschnitt 2",
       "zeilen": [
        {
         "wer": "Frau",
         "text": "Frag doch mal Sven. Der will, glaube ich, gern tauschen, weil er nächste Woche tagsüber einen Kurs hat."
        },
        {
         "wer": "Mann",
         "text": "Echt? Das wäre super. Muss ich das dann beim Chef melden?"
        },
        {
         "wer": "Frau",
         "text": "Ja, ihr müsst beide unterschreiben und den Zettel bei Frau Reimann abgeben. Die ist für die Pläne zuständig."
        }
       ],
       "frage": "Was müssen die zwei Kollegen machen, wenn sie tauschen?",
       "opt": [
        "Einen Zettel unterschreiben und abgeben.",
        "Den Chef anrufen.",
        "Einen Kurs besuchen."
       ],
       "loesung": 0,
       "stelle": "ihr müsst beide unterschreiben und den Zettel bei Frau Reimann abgeben",
       "erklaerung": "Der Kurs ist der Grund von Sven. Gemeldet wird nicht beim Chef, sondern bei Frau Reimann."
      },
      {
       "ort": "Gespräch 3 · Abschnitt 1",
       "zeilen": [
        {
         "wer": "Mann",
         "text": "Entschuldigung, ich suche eine Waschmaschine. Nicht zu teuer, wir sind nur zu zweit."
        },
        {
         "wer": "Frau",
         "text": "Da haben wir einige. Diese hier kostet dreihundertneunundvierzig Euro. Die ist leise und braucht wenig Strom."
        },
        {
         "wer": "Mann",
         "text": "Dreihundertneunundvierzig, okay. Und liefern Sie auch?"
        },
        {
         "wer": "Frau",
         "text": "Ja, die Lieferung kostet neunundzwanzig Euro. Dafür bringen wir die Maschine in die Wohnung und schließen sie auch an."
        }
       ],
       "satz": "Das Geschäft bringt die Waschmaschine in die Wohnung und schließt sie an.",
       "loesung": true,
       "stelle": "Dafür bringen wir die Maschine in die Wohnung",
       "erklaerung": "Das gehört zur Lieferung für neunundzwanzig Euro."
      },
      {
       "ort": "Gespräch 3 · Abschnitt 2",
       "zeilen": [
        {
         "wer": "Mann",
         "text": "Und die alte Maschine? Nehmen Sie die mit?"
        },
        {
         "wer": "Frau",
         "text": "Das machen wir auch, aber das kostet noch einmal zehn Euro extra."
        },
        {
         "wer": "Mann",
         "text": "Hm. Mein Schwager hat ein Auto, der kann die alte zum Wertstoffhof bringen. Dann brauche ich das nicht."
        },
        {
         "wer": "Frau",
         "text": "Gut, dann schreibe ich nur die Lieferung auf."
        }
       ],
       "frage": "Was bezahlt der Mann?",
       "opt": [
        "Nur die Maschine.",
        "Die Maschine, die Lieferung und die Mitnahme der alten Maschine.",
        "Die Maschine und die Lieferung."
       ],
       "loesung": 2,
       "stelle": "dann schreibe ich nur die Lieferung auf",
       "erklaerung": "Die alte Maschine bringt der Schwager weg. Die zehn Euro fallen also weg."
      },
      {
       "ort": "Gespräch 4 · Abschnitt 1",
       "zeilen": [
        {
         "wer": "Frau",
         "text": "Hallo, Sie sind neu hier im Haus, oder? Ich bin Anna Weber aus dem Erdgeschoss."
        },
        {
         "wer": "Mann",
         "text": "Ja, genau, ich heiße Karim Haddad. Wir sind letzte Woche eingezogen, im zweiten Stock."
        },
        {
         "wer": "Frau",
         "text": "Willkommen! Ich wollte Ihnen nur sagen, am Samstag machen wir hier im Hof ein kleines Hoffest."
        },
        {
         "wer": "Mann",
         "text": "Oh, schön. Wann denn?"
        }
       ],
       "satz": "Der Mann wohnt im Erdgeschoss.",
       "loesung": false,
       "stelle": "Wir sind letzte Woche eingezogen, im zweiten Stock",
       "erklaerung": "Im Erdgeschoss wohnt Frau Weber."
      },
      {
       "ort": "Gespräch 4 · Abschnitt 2",
       "zeilen": [
        {
         "wer": "Frau",
         "text": "Ab drei Uhr. Jeder bringt etwas zu essen mit, und die Getränke kaufen wir zusammen."
        },
        {
         "wer": "Mann",
         "text": "Gern. Wir bringen einen Salat mit, meine Frau macht einen sehr guten. Soll ich auch Stühle mitbringen?"
        },
        {
         "wer": "Frau",
         "text": "Nein, Stühle haben wir genug. Aber wir brauchen noch einen Grill. Haben Sie vielleicht einen?"
        },
        {
         "wer": "Mann",
         "text": "Ja, einen kleinen. Den bringe ich mit."
        }
       ],
       "frage": "Was bringt der Mann zum Fest mit?",
       "opt": [
        "Stühle und Getränke.",
        "Einen Salat und einen Grill.",
        "Nur einen Salat."
       ],
       "loesung": 1,
       "stelle": "Ja, einen kleinen. Den bringe ich mit",
       "erklaerung": "Stühle gibt es genug. Zum Salat kommt am Ende noch der Grill dazu."
      }
     ]
    }
   ]
  },
  {
   "nr": 4,
   "art": "diskussion",
   "name": "Hören: Meinungen",
   "kurz": "Drei Personen, sechs Sätze",
   "was": "Drei Personen sagen ihre Meinung zu einem Thema. Zu jeder Person passt ein Satz, drei bleiben übrig.",
   "tipp": "Hör auf die Meinung: Findet die Person es gut, schlecht oder „ja, aber\"?",
   "zeichen": "🗣️",
   "farbe": "lila",
   "punkte": 3,
   "mal": 1,
   "runden": [
    {
     "id": "dzh4s1",
     "titel": "Kinder und Handy",
     "aufgaben": [
      {
       "von": "Person 1: Frau Kaya, Krankenpflegerin",
       "wer": "Frau",
       "text": "Mein Sohn ist neun und hat seit diesem Jahr ein Handy. Viele haben gesagt, das ist zu früh. Aber ich arbeite im Schichtdienst im Krankenhaus, manchmal bis zweiundzwanzig Uhr. Mein Sohn geht nach der Schule allein nach Hause. Da will ich einfach wissen, dass er gut angekommen ist. Er schreibt mir kurz, und ich kann ihn anrufen, wenn ich Pause habe. Spiele hat er auf dem Handy übrigens keine, das war meine Bedingung.",
       "loesung": 1,
       "stelle": "ich kann ihn anrufen, wenn ich Pause habe",
       "erklaerung": "Für sie ist das Handy vor allem zum Kontakt da. „zu früh\" sagen nur die anderen.",
       "frage": "Welcher Satz passt zu Frau Kaya?",
       "opt": [
        "Kinder sollten erst ab zwölf Jahren ein eigenes Handy bekommen.",
        "Mit dem Handy können Eltern ihre Kinder leichter erreichen.",
        "Eltern sollten selbst weniger am Handy sein.",
        "Handys sollten in der Schule verboten sein.",
        "Handyspiele helfen Kindern beim Lernen.",
        "Kinder brauchen feste Regeln für die Zeit am Handy."
       ],
       "fest": true
      },
      {
       "von": "Person 2: Herr Schmidt, Erzieher in einer Kita",
       "wer": "Mann",
       "text": "Ich arbeite in einer Kita, und ich sehe es jeden Tag beim Abholen. Die Kinder kommen gelaufen und wollen etwas erzählen, und die Mutter oder der Vater schaut aufs Handy. Das tut mir manchmal richtig weh. Wir reden immer darüber, wie viel Zeit Kinder am Handy verbringen. Aber die Kinder machen doch nur nach, was sie bei den Großen sehen. Wenn ich zu Hause esse, liegt mein Handy in einer anderen Ecke. Damit fängt es an, finde ich.",
       "loesung": 2,
       "stelle": "die Kinder machen doch nur nach, was sie bei den Großen sehen",
       "erklaerung": "Er kritisiert die Eltern. Die Kinder lernen von den Erwachsenen.",
       "frage": "Welcher Satz passt zu Herr Schmidt?",
       "opt": [
        "Kinder sollten erst ab zwölf Jahren ein eigenes Handy bekommen.",
        "Mit dem Handy können Eltern ihre Kinder leichter erreichen.",
        "Eltern sollten selbst weniger am Handy sein.",
        "Handys sollten in der Schule verboten sein.",
        "Handyspiele helfen Kindern beim Lernen.",
        "Kinder brauchen feste Regeln für die Zeit am Handy."
       ],
       "fest": true
      },
      {
       "von": "Person 3: Frau Ahmadi, Mutter von drei Kindern",
       "wer": "Frau",
       "text": "Bei uns zu Hause gab es lange Streit wegen dem Handy. Meine Tochter wollte abends immer noch Videos schauen, und dann war sie morgens müde in der Schule. Jetzt haben wir einen Plan an der Küchentür: Nach den Hausaufgaben darf sie eine Stunde ans Handy. Um zwanzig Uhr kommt es in die Küche, auch am Wochenende. Am Anfang war sie sauer, aber jetzt klappt es gut. Ohne klare Zeiten geht es einfach nicht.",
       "loesung": 5,
       "stelle": "Ohne klare Zeiten geht es einfach nicht",
       "erklaerung": "Der Plan an der Küchentür ist eine feste Regel. Die Schule ist nur der Ort, wo die Tochter müde war.",
       "frage": "Welcher Satz passt zu Frau Ahmadi?",
       "opt": [
        "Kinder sollten erst ab zwölf Jahren ein eigenes Handy bekommen.",
        "Mit dem Handy können Eltern ihre Kinder leichter erreichen.",
        "Eltern sollten selbst weniger am Handy sein.",
        "Handys sollten in der Schule verboten sein.",
        "Handyspiele helfen Kindern beim Lernen.",
        "Kinder brauchen feste Regeln für die Zeit am Handy."
       ],
       "fest": true
      }
     ]
    },
    {
     "id": "dzh4s2",
     "titel": "Einkaufen am Sonntag",
     "aufgaben": [
      {
       "von": "Person 1: Frau Becker, Verkäuferin im Supermarkt",
       "wer": "Frau",
       "text": "Ich arbeite seit fünfzehn Jahren im Supermarkt, von Montag bis Samstag, oft bis einundzwanzig Uhr. Der Sonntag ist der einzige Tag, an dem ich sicher frei habe. Wenn die Geschäfte am Sonntag öffnen, dann müssen ja Leute wie ich arbeiten. Und glauben Sie mir, freiwillig macht das keiner. Etwas mehr Geld hilft mir nicht, wenn ich keinen Tag mehr zum Ausruhen habe.",
       "loesung": 3,
       "stelle": "dann müssen ja Leute wie ich arbeiten",
       "erklaerung": "Sie spricht für die Verkäufer, die sonst keinen freien Tag mehr haben.",
       "frage": "Welcher Satz passt zu Frau Becker?",
       "opt": [
        "Die Geschäfte sollten auch am Sonntag öffnen.",
        "Der Sonntag ist ein wichtiger Tag für die Familie.",
        "Am Sonntag sollten nur Bäckereien öffnen.",
        "Die Verkäufer brauchen den Sonntag als freien Tag.",
        "Im Internet kann man sowieso jeden Tag einkaufen.",
        "Kleine Läden haben am Sonntag eine Chance gegen große Geschäfte."
       ],
       "fest": true
      },
      {
       "von": "Person 2: Herr Petrović, Schichtarbeiter in einer Fabrik",
       "wer": "Mann",
       "text": "Ich arbeite in einer Fabrik, im Schichtdienst. Wenn ich Frühschicht habe, komme ich um vierzehn Uhr nach Hause und bin total müde. Bei Spätschicht schlafe ich bis zehn, und dann muss ich bald wieder los. Unter der Woche schaffe ich das Einkaufen kaum. Am Samstag sind die Läden so voll, dass ich eine halbe Stunde an der Kasse stehe. Ich verstehe nicht, warum ich nicht einfach am Sonntag in Ruhe einkaufen darf. In anderen Ländern geht das doch auch.",
       "loesung": 0,
       "stelle": "warum ich nicht einfach am Sonntag in Ruhe einkaufen darf",
       "erklaerung": "Er will am Sonntag einkaufen, weil er sonst keine Zeit hat.",
       "frage": "Welcher Satz passt zu Herr Petrović?",
       "opt": [
        "Die Geschäfte sollten auch am Sonntag öffnen.",
        "Der Sonntag ist ein wichtiger Tag für die Familie.",
        "Am Sonntag sollten nur Bäckereien öffnen.",
        "Die Verkäufer brauchen den Sonntag als freien Tag.",
        "Im Internet kann man sowieso jeden Tag einkaufen.",
        "Kleine Läden haben am Sonntag eine Chance gegen große Geschäfte."
       ],
       "fest": true
      },
      {
       "von": "Person 3: Frau Nguyen, Studentin",
       "wer": "Frau",
       "text": "Ehrlich gesagt verstehe ich die ganze Diskussion nicht. Ich gehe sowieso kaum noch in den Supermarkt. Die Lebensmittel bestelle ich mit einer App, und die kommen am Montag früh vor die Tür. Kleidung, Bücher, alles kaufe ich online, und das kann ich auch am Sonntagabend auf dem Sofa machen. Die Läden können am Sonntag gern geschlossen bleiben, das stört mich überhaupt nicht.",
       "loesung": 4,
       "stelle": "das kann ich auch am Sonntagabend auf dem Sofa machen",
       "erklaerung": "Für sie ist die Frage egal, weil sie online jederzeit einkaufen kann.",
       "frage": "Welcher Satz passt zu Frau Nguyen?",
       "opt": [
        "Die Geschäfte sollten auch am Sonntag öffnen.",
        "Der Sonntag ist ein wichtiger Tag für die Familie.",
        "Am Sonntag sollten nur Bäckereien öffnen.",
        "Die Verkäufer brauchen den Sonntag als freien Tag.",
        "Im Internet kann man sowieso jeden Tag einkaufen.",
        "Kleine Läden haben am Sonntag eine Chance gegen große Geschäfte."
       ],
       "fest": true
      }
     ]
    },
    {
     "id": "dzh4s3",
     "titel": "Fahrrad in der Stadt",
     "aufgaben": [
      {
       "von": "Person 1: Herr Wagner, Rentner",
       "wer": "Mann",
       "text": "Ich gehe jeden Tag mit meinem Hund im Park spazieren. Und fast jeden Tag passiert mir das Gleiche: Ein Radfahrer kommt von hinten, ganz schnell, ohne zu klingeln. Dabei ist der Weg im Park nur für Fußgänger, das steht da auf einem großen Schild. Und an der Ampel vor meinem Haus fahren auch viele einfach bei Rot weiter. Ich habe nichts gegen Fahrräder, aber die Leute müssen sich doch genauso an die Regeln halten wie Autofahrer.",
       "loesung": 2,
       "stelle": "die Leute müssen sich doch genauso an die Regeln halten",
       "erklaerung": "„Ich habe nichts gegen Fahrräder\" zeigt: Er will kein Verbot, nur dass die Regeln gelten.",
       "frage": "Welcher Satz passt zu Herr Wagner?",
       "opt": [
        "In der Stadt ist man mit dem Fahrrad schneller als mit dem Auto.",
        "Elektrofahrräder sind eine gute Lösung für ältere Menschen.",
        "Radfahrer halten sich oft nicht an die Regeln.",
        "Die Stadt braucht mehr und bessere Radwege.",
        "Mit dem Fahrrad spart man viel Geld.",
        "Fahrräder sollten in der Innenstadt verboten sein."
       ],
       "fest": true
      },
      {
       "von": "Person 2: Frau Novak, Krankenschwester",
       "wer": "Frau",
       "text": "Ich fahre jeden Tag mit dem Rad zur Arbeit ins Krankenhaus, das sind ungefähr fünf Kilometer. Mit dem Auto habe ich früher morgens immer im Stau gestanden und dann noch einen Parkplatz gesucht. Das hat oft eine halbe Stunde gedauert. Mit dem Rad brauche ich zwanzig Minuten, jeden Tag gleich, egal wie viel Verkehr ist. Und ich bin wach, wenn ich ankomme. Nur bei sehr starkem Regen nehme ich mal den Bus.",
       "loesung": 0,
       "stelle": "Mit dem Rad brauche ich zwanzig Minuten",
       "erklaerung": "Zwanzig Minuten mit dem Rad, eine halbe Stunde mit dem Auto. Vom Geld spricht sie nicht.",
       "frage": "Welcher Satz passt zu Frau Novak?",
       "opt": [
        "In der Stadt ist man mit dem Fahrrad schneller als mit dem Auto.",
        "Elektrofahrräder sind eine gute Lösung für ältere Menschen.",
        "Radfahrer halten sich oft nicht an die Regeln.",
        "Die Stadt braucht mehr und bessere Radwege.",
        "Mit dem Fahrrad spart man viel Geld.",
        "Fahrräder sollten in der Innenstadt verboten sein."
       ],
       "fest": true
      },
      {
       "von": "Person 3: Herr Diallo, Vater von zwei Kindern",
       "wer": "Mann",
       "text": "Ich würde gern mehr mit dem Fahrrad fahren, auch mit meinen Kindern. Aber in unserem Stadtteil gibt es fast keine Radwege. Man muss auf der Straße fahren, direkt neben den Lastwagen und Bussen. Und wo es einen Radweg gibt, ist er so schmal, dass man nicht überholen kann, oder er hört plötzlich einfach auf. Andere Städte sind da viel weiter. Hier muss die Stadt endlich Geld ausgeben, sonst steigt niemand um.",
       "loesung": 3,
       "stelle": "in unserem Stadtteil gibt es fast keine Radwege",
       "erklaerung": "Er fordert von der Stadt mehr und breitere Radwege.",
       "frage": "Welcher Satz passt zu Herr Diallo?",
       "opt": [
        "In der Stadt ist man mit dem Fahrrad schneller als mit dem Auto.",
        "Elektrofahrräder sind eine gute Lösung für ältere Menschen.",
        "Radfahrer halten sich oft nicht an die Regeln.",
        "Die Stadt braucht mehr und bessere Radwege.",
        "Mit dem Fahrrad spart man viel Geld.",
        "Fahrräder sollten in der Innenstadt verboten sein."
       ],
       "fest": true
      }
     ]
    }
   ]
  }
 ],
 "laeufe": [
  {
   "id": "tdzhl1",
   "titel": "Prüfungslauf 1",
   "minuten": 25,
   "teile": [
    {
     "nr": 1,
     "art": "ansage",
     "aufgaben": [
      {
       "von": "Anrufbeantworter: Kinderarztpraxis Doktor Aydin",
       "wer": "Mann",
       "text": "Sie sind verbunden mit der Kinderarztpraxis Doktor Aydin. Unsere Sprechzeiten sind montags bis freitags von acht bis zwölf Uhr und dienstags und donnerstags auch am Nachmittag von fünfzehn bis achtzehn Uhr. Für die Impfsprechstunde am Mittwoch brauchen Sie immer einen Termin. Wenn Ihr Kind Fieber hat, kommen Sie bitte nicht einfach in die Praxis, sondern rufen Sie zuerst während der Sprechzeiten an. Danke.",
       "frage": "An welchen Tagen ist die Praxis auch am Nachmittag geöffnet?",
       "opt": [
        "Montags und mittwochs.",
        "Nur freitags.",
        "Dienstags und donnerstags."
       ],
       "loesung": 2,
       "stelle": "dienstags und donnerstags auch am Nachmittag",
       "erklaerung": "Am Mittwoch ist nur die Impfsprechstunde. Nachmittags offen ist die Praxis am Dienstag und Donnerstag."
      },
      {
       "von": "Durchsage am Bahnhof",
       "wer": "Frau",
       "text": "Eine Information zu Gleis drei. Der Zug nach Köln fährt heute nicht von Gleis drei, sondern von Gleis sieben. Bitte beachten Sie außerdem: Die Wagen der ersten Klasse halten heute am Ende des Bahnsteigs. Der Zug hat heute kein Bordrestaurant. Getränke und kleine Snacks bekommen Sie aber am Platz. Wir wünschen Ihnen eine gute Fahrt.",
       "frage": "Was ist heute anders?",
       "opt": [
        "Der Zug fährt von einem anderen Gleis.",
        "Im Zug kann man nichts zu trinken bekommen.",
        "Der Zug hat keine erste Klasse."
       ],
       "loesung": 0,
       "stelle": "fährt heute nicht von Gleis drei, sondern von Gleis sieben",
       "erklaerung": "Getränke gibt es am Platz. Die erste Klasse hält nur an einer anderen Stelle."
      },
      {
       "von": "Durchsage im Kaufhaus",
       "wer": "Mann",
       "text": "Liebe Kunden, wir schließen heute wegen der Inventur schon um achtzehn Uhr. Bitte gehen Sie jetzt langsam zu den Kassen. Die Kassen im ersten Stock sind bereits geschlossen. Bitte bezahlen Sie im Erdgeschoss. Ab morgen sind wir wieder wie gewohnt von neun bis zwanzig Uhr für Sie da. Wir danken für Ihren Besuch.",
       "frage": "Wo kann man heute noch bezahlen?",
       "opt": [
        "Im ersten Stock.",
        "Im Erdgeschoss.",
        "An allen Kassen."
       ],
       "loesung": 1,
       "stelle": "Bitte bezahlen Sie im Erdgeschoss",
       "erklaerung": "Die Kassen im ersten Stock sind schon zu."
      },
      {
       "von": "Nachricht von Maler Kühn",
       "wer": "Frau",
       "text": "Hallo, hier ist Sandra Kühn von Maler Kühn. Sie hatten uns wegen der Küche und dem Flur angefragt. Ich habe Ihnen das Angebot gestern per E-Mail geschickt, aber vielleicht ist es im Spam gelandet. Schauen Sie bitte mal nach. Der Preis ist für beide Räume zusammen, also Küche und Flur, mit Farbe. Wir könnten ab dem zwanzigsten anfangen. Rufen Sie mich einfach zurück, wenn Sie Fragen haben.",
       "frage": "Warum ruft Frau Kühn an?",
       "opt": [
        "Sie kann erst nach dem Monatsende anfangen.",
        "Sie braucht noch die Farbe für die Küche.",
        "Sie hat ein Angebot geschickt, das vielleicht nicht angekommen ist."
       ],
       "loesung": 2,
       "stelle": "vielleicht ist es im Spam gelandet",
       "erklaerung": "Die Farbe ist im Preis dabei. Anfangen kann sie schon ab dem zwanzigsten."
      }
     ]
    },
    {
     "nr": 2,
     "art": "ansage",
     "aufgaben": [
      {
       "von": "Radio: Veranstaltung",
       "wer": "Mann",
       "text": "Die Volkshochschule lädt zum Tag der offenen Tür ein. Am Samstag von zehn bis vierzehn Uhr können Sie alle Kursräume besuchen und mit den Kursleitern sprechen. Es gibt kostenlose Probestunden in Yoga, Kochen und Computer. Wer sich an diesem Tag für einen Kurs anmeldet, bekommt zehn Prozent Rabatt.",
       "frage": "Was bekommt man, wenn man sich am Samstag anmeldet?",
       "opt": [
        "Eine kostenlose Kursstunde pro Woche.",
        "Einen Computer.",
        "Einen günstigeren Preis."
       ],
       "loesung": 2,
       "stelle": "bekommt zehn Prozent Rabatt",
       "erklaerung": "Die Probestunden sind nur am Samstag kostenlos. Zehn Prozent Rabatt heißt: Der Kurs wird billiger."
      },
      {
       "von": "Radio: Wetter",
       "wer": "Frau",
       "text": "Und das Wetter für morgen: Im Norden bleibt es den ganzen Tag bewölkt, aber trocken. Im Süden regnet es am Vormittag, am Nachmittag kommt dort aber die Sonne raus. Die Temperaturen liegen überall zwischen fünfzehn und achtzehn Grad. Am Wochenende wird es dann deutlich wärmer.",
       "frage": "Wie ist das Wetter morgen im Süden?",
       "opt": [
        "Den ganzen Tag Regen.",
        "Erst Regen, dann Sonne.",
        "Den ganzen Tag bewölkt und trocken."
       ],
       "loesung": 1,
       "stelle": "am Nachmittag kommt dort aber die Sonne raus",
       "erklaerung": "Bewölkt und trocken ist es im Norden. Im Süden regnet es nur am Vormittag."
      },
      {
       "von": "Radio: Hinweis der Stadt",
       "wer": "Mann",
       "text": "Die Stadt Waldheim erinnert: Ab dem ersten Oktober gilt im Stadtpark eine neue Regel. Hunde müssen dort immer an der Leine bleiben. Hinter dem Spielplatz gibt es aber eine Hundewiese, dort dürfen die Hunde frei laufen. Wer sich nicht an die Regel hält, muss mit einer Strafe von bis zu fünfzig Euro rechnen.",
       "frage": "Wo dürfen Hunde ohne Leine laufen?",
       "opt": [
        "Auf dem Spielplatz.",
        "Auf der Hundewiese hinter dem Spielplatz.",
        "Im ganzen Stadtpark."
       ],
       "loesung": 1,
       "stelle": "gibt es aber eine Hundewiese, dort dürfen die Hunde frei laufen",
       "erklaerung": "Im Stadtpark gilt die Leine. Der Spielplatz ist nur die Ortsangabe für die Hundewiese."
      },
      {
       "von": "Radio: Verkehr",
       "wer": "Frau",
       "text": "Hier die Verkehrslage: Auf der Bundesstraße zehn zwischen Ulm und Neu-Ulm ist ein Lastwagen liegen geblieben. Dort gibt es im Moment drei Kilometer Stau. Die Polizei rechnet damit, dass der Lastwagen in etwa einer Stunde weg ist. Bis dahin fahren Sie besser über die Autobahn.",
       "frage": "Was empfiehlt die Meldung?",
       "opt": [
        "Einen anderen Weg nehmen.",
        "Eine Stunde warten und dann fahren.",
        "Die Polizei anrufen."
       ],
       "loesung": 0,
       "stelle": "Bis dahin fahren Sie besser über die Autobahn",
       "erklaerung": "Die Stunde ist nur die Zeit, bis der Lastwagen weg ist. Der Rat ist: über die Autobahn fahren."
      },
      {
       "von": "Radio: Gewinnspiel",
       "wer": "Mann",
       "text": "Heute bei unserem Kino-Gewinnspiel: Der zehnte Anrufer gewinnt zwei Kinokarten und dazu Popcorn und Getränke. Aber Achtung, die Karten gelten nur für Vorstellungen von Montag bis Donnerstag, nicht am Wochenende. Die Leitungen sind ab jetzt offen, die Nummer kennen Sie ja. Viel Glück!",
       "frage": "Wann kann man die Kinokarten benutzen?",
       "opt": [
        "Nur von Montag bis Donnerstag.",
        "An jedem Tag der Woche.",
        "Nur am Wochenende."
       ],
       "loesung": 0,
       "stelle": "die Karten gelten nur für Vorstellungen von Montag bis Donnerstag",
       "erklaerung": "„nicht am Wochenende\" schließt die anderen zwei Antworten aus."
      }
     ]
    },
    {
     "nr": 3,
     "art": "gespraech",
     "aufgaben": [
      {
       "ort": "Gespräch 1 · Abschnitt 1",
       "zeilen": [
        {
         "wer": "Frau",
         "text": "Herr Mensah, Ihre Blutwerte sind leider nicht so gut. Ihr Zucker ist zu hoch."
        },
        {
         "wer": "Mann",
         "text": "Oh. Heißt das, ich habe Diabetes?"
        },
        {
         "wer": "Frau",
         "text": "Nein, noch nicht. Aber wenn Sie nichts ändern, kann das in ein paar Jahren passieren."
        },
        {
         "wer": "Mann",
         "text": "Was soll ich denn ändern?"
        }
       ],
       "satz": "Der Mann hat Diabetes.",
       "loesung": false,
       "stelle": "Nein, noch nicht. Aber wenn Sie nichts ändern",
       "erklaerung": "„noch nicht\" heißt: Er hat es jetzt nicht, aber es kann kommen."
      },
      {
       "ort": "Gespräch 1 · Abschnitt 2",
       "zeilen": [
        {
         "wer": "Frau",
         "text": "Vor allem weniger Süßes und weniger Weißbrot. Und Sie sollten sich mehr bewegen, jeden Tag mindestens dreißig Minuten."
        },
        {
         "wer": "Mann",
         "text": "Ich fahre jeden Tag mit dem Auto zur Arbeit. Das sind nur drei Kilometer."
        },
        {
         "wer": "Frau",
         "text": "Dann nehmen Sie doch das Fahrrad. Das ist schon ein guter Anfang. Und in drei Monaten machen wir noch einmal einen Bluttest."
        }
       ],
       "frage": "Was rät die Ärztin?",
       "opt": [
        "In drei Wochen wiederzukommen.",
        "Mit dem Fahrrad zur Arbeit zu fahren.",
        "Sofort Tabletten zu nehmen."
       ],
       "loesung": 1,
       "stelle": "Dann nehmen Sie doch das Fahrrad",
       "erklaerung": "Von Tabletten spricht sie nicht. Der neue Bluttest ist in drei Monaten, nicht in drei Wochen."
      },
      {
       "ort": "Gespräch 2 · Abschnitt 1",
       "zeilen": [
        {
         "wer": "Mann",
         "text": "Hallo, was kann ich für Sie tun?"
        },
        {
         "wer": "Frau",
         "text": "Ich möchte meinen Handyvertrag kündigen. Ich habe ein günstigeres Angebot gefunden."
        },
        {
         "wer": "Mann",
         "text": "Das tut mir leid. Darf ich fragen, wie viel Sie da bezahlen?"
        },
        {
         "wer": "Frau",
         "text": "Neun Euro neunundneunzig im Monat. Hier bei Ihnen zahle ich fast zwanzig."
        }
       ],
       "satz": "Die Frau möchte einen billigeren Vertrag.",
       "loesung": true,
       "stelle": "Ich habe ein günstigeres Angebot gefunden",
       "erklaerung": "Neun Euro neunundneunzig statt fast zwanzig Euro."
      },
      {
       "ort": "Gespräch 2 · Abschnitt 2",
       "zeilen": [
        {
         "wer": "Mann",
         "text": "Ich kann Ihnen auch einen neuen Tarif für zwölf Euro anbieten, mit mehr Datenvolumen."
        },
        {
         "wer": "Frau",
         "text": "Nein danke, ich habe mich schon entschieden. Wie lange läuft mein Vertrag noch?"
        },
        {
         "wer": "Mann",
         "text": "Moment, ich schau mal. Ihr Vertrag endet am dreißigsten April. Sie müssen bis Ende März kündigen, das geht hier im Laden oder online."
        },
        {
         "wer": "Frau",
         "text": "Dann mache ich das gleich hier."
        }
       ],
       "frage": "Was macht die Frau?",
       "opt": [
        "Sie kündigt den Vertrag später online.",
        "Sie kündigt den Vertrag im Laden.",
        "Sie nimmt den Tarif für zwölf Euro."
       ],
       "loesung": 1,
       "stelle": "Dann mache ich das gleich hier",
       "erklaerung": "Das Angebot lehnt sie ab. „gleich hier\" heißt: jetzt im Laden."
      },
      {
       "ort": "Gespräch 3 · Abschnitt 1",
       "zeilen": [
        {
         "wer": "Frau",
         "text": "Herr Ivanov, Sie waren letzte Woche dreimal nicht im Kurs. Ist alles in Ordnung?"
        },
        {
         "wer": "Mann",
         "text": "Ja, entschuldigen Sie. Ich habe eine neue Arbeit gefunden, in einer Werkstatt. Die Arbeitszeiten sind leider von acht bis siebzehn Uhr."
        },
        {
         "wer": "Frau",
         "text": "Glückwunsch zur Arbeit! Aber der Kurs ist am Vormittag, das passt dann ja gar nicht mehr."
        }
       ],
       "satz": "Der Mann war krank.",
       "loesung": false,
       "stelle": "Ich habe eine neue Arbeit gefunden",
       "erklaerung": "Er fehlt, weil er jetzt tagsüber arbeitet."
      },
      {
       "ort": "Gespräch 3 · Abschnitt 2",
       "zeilen": [
        {
         "wer": "Mann",
         "text": "Genau. Aber ich möchte den Kurs nicht abbrechen. Ich will doch die Prüfung machen."
        },
        {
         "wer": "Frau",
         "text": "Wir haben auch einen Abendkurs, montags bis donnerstags von achtzehn bis einundzwanzig Uhr. Da sind noch zwei Plätze frei."
        },
        {
         "wer": "Mann",
         "text": "Das wäre perfekt. Was muss ich tun?"
        },
        {
         "wer": "Frau",
         "text": "Gehen Sie bitte heute noch ins Büro im ersten Stock und sagen Sie Frau Kaya Bescheid, dann kann sie Sie umbuchen."
        }
       ],
       "frage": "Was soll der Mann heute noch tun?",
       "opt": [
        "Ins Büro gehen.",
        "Den Kurs abbrechen.",
        "Sich für die Prüfung anmelden."
       ],
       "loesung": 0,
       "stelle": "Gehen Sie bitte heute noch ins Büro im ersten Stock",
       "erklaerung": "Abbrechen will er nicht. Die Prüfung ist sein Ziel, aber heute geht es um den Wechsel in den Abendkurs."
      },
      {
       "ort": "Gespräch 4 · Abschnitt 1",
       "zeilen": [
        {
         "wer": "Mann",
         "text": "Guten Morgen, Frau Lindner. Sie sehen müde aus."
        },
        {
         "wer": "Frau",
         "text": "Ach, Herr Okafor, ich habe kaum geschlafen. Die Leute über mir hatten bis drei Uhr nachts eine Party."
        },
        {
         "wer": "Mann",
         "text": "Ja, das habe ich auch gehört. Die Musik war wirklich sehr laut."
        },
        {
         "wer": "Frau",
         "text": "Das ist schon das dritte Mal in diesem Monat."
        }
       ],
       "satz": "Auch der Mann hat die laute Musik gehört.",
       "loesung": true,
       "stelle": "Ja, das habe ich auch gehört",
       "erklaerung": "Er sagt sogar: „Die Musik war wirklich sehr laut.\""
      },
      {
       "ort": "Gespräch 4 · Abschnitt 2",
       "zeilen": [
        {
         "wer": "Mann",
         "text": "Haben Sie schon mal mit ihnen gesprochen?"
        },
        {
         "wer": "Frau",
         "text": "Nein, ich kenne sie kaum. Ich wollte eigentlich gleich einen Brief an die Hausverwaltung schreiben."
        },
        {
         "wer": "Mann",
         "text": "Hm. Ich würde erst mal klingeln und freundlich mit ihnen reden. Vielleicht wissen die gar nicht, wie laut das ist."
        },
        {
         "wer": "Frau",
         "text": "Sie haben recht. Ich versuche es heute Abend."
        }
       ],
       "frage": "Was macht die Frau heute Abend?",
       "opt": [
        "Sie spricht mit den Nachbarn.",
        "Sie schreibt der Hausverwaltung.",
        "Sie ruft die Polizei."
       ],
       "loesung": 0,
       "stelle": "Ich versuche es heute Abend",
       "erklaerung": "Der Brief war ihr erster Plan. „Sie haben recht\" zeigt: Sie macht, was der Mann vorschlägt."
      }
     ]
    },
    {
     "nr": 4,
     "art": "diskussion",
     "aufgaben": [
      {
       "von": "Person 1: Herr Kowalski, Hausmeister",
       "wer": "Mann",
       "text": "Ich bin Hausmeister in einem großen Wohnhaus mit sechzig Wohnungen. Gegen eine Katze oder ein paar Fische habe ich gar nichts. Aber im vierten Stock wohnt eine Familie mit einem großen Hund in einer Zweizimmerwohnung. Der Hund ist den ganzen Tag allein und bellt. Die Nachbarn beschweren sich bei mir, und der Hund tut mir eigentlich leid. So ein Tier braucht Platz und einen Garten, nicht vierzig Quadratmeter im vierten Stock.",
       "loesung": 4,
       "stelle": "So ein Tier braucht Platz und einen Garten",
       "erklaerung": "Katzen und Fische findet er in Ordnung. Sein Problem ist der große Hund in der kleinen Wohnung.",
       "frage": "Welcher Satz passt zu Herr Kowalski?",
       "opt": [
        "Ein Haustier macht viel mehr Arbeit, als viele denken.",
        "Vermieter sollten Haustiere immer erlauben.",
        "Für Kinder ist ein Haustier sehr gut.",
        "Für ältere Menschen ist ein Tier eine gute Hilfe gegen das Alleinsein.",
        "Große Hunde gehören nicht in eine kleine Stadtwohnung.",
        "Katzen machen weniger Arbeit als Hunde."
       ],
       "fest": true
      },
      {
       "von": "Person 2: Frau Hoffmann, Tochter einer älteren Mutter",
       "wer": "Frau",
       "text": "Meine Mutter ist achtzig und lebt seit ein paar Jahren allein. Letztes Jahr haben wir ihr eine kleine Katze aus dem Tierheim geholt. Am Anfang war ich unsicher, ich dachte, das ist zu viel für sie. Aber jetzt erzählt sie mir am Telefon jeden Tag, was die Katze wieder gemacht hat. Sie hat wieder eine Aufgabe und ist nicht mehr so allein. Ich finde, besonders für alte Menschen ist ein Tier ein echtes Glück.",
       "loesung": 3,
       "stelle": "besonders für alte Menschen ist ein Tier ein echtes Glück",
       "erklaerung": "„zu viel für sie\" war nur ihre Angst am Anfang. Heute sieht sie es positiv.",
       "frage": "Welcher Satz passt zu Frau Hoffmann?",
       "opt": [
        "Ein Haustier macht viel mehr Arbeit, als viele denken.",
        "Vermieter sollten Haustiere immer erlauben.",
        "Für Kinder ist ein Haustier sehr gut.",
        "Für ältere Menschen ist ein Tier eine gute Hilfe gegen das Alleinsein.",
        "Große Hunde gehören nicht in eine kleine Stadtwohnung.",
        "Katzen machen weniger Arbeit als Hunde."
       ],
       "fest": true
      },
      {
       "von": "Person 3: Frau Marino, Mutter und Hundebesitzerin",
       "wer": "Frau",
       "text": "Als wir den Hund geholt haben, haben die Kinder versprochen: Wir kümmern uns um alles. Na ja. Jetzt gehe ich morgens um sechs mit ihm raus, bevor ich zur Arbeit fahre, und abends noch einmal. Dann kommen die Kosten für den Tierarzt, das Futter, die Hundesteuer. Und im Urlaub brauchen wir jemanden, der auf ihn aufpasst. Ich liebe unseren Hund, wirklich. Aber vorher hätte ich nie gedacht, wie viel Zeit und Geld das kostet.",
       "loesung": 0,
       "stelle": "vorher hätte ich nie gedacht, wie viel Zeit und Geld das kostet",
       "erklaerung": "Die Kinder kommen vor, aber ihr Punkt ist die viele Arbeit, die sie selbst macht.",
       "frage": "Welcher Satz passt zu Frau Marino?",
       "opt": [
        "Ein Haustier macht viel mehr Arbeit, als viele denken.",
        "Vermieter sollten Haustiere immer erlauben.",
        "Für Kinder ist ein Haustier sehr gut.",
        "Für ältere Menschen ist ein Tier eine gute Hilfe gegen das Alleinsein.",
        "Große Hunde gehören nicht in eine kleine Stadtwohnung.",
        "Katzen machen weniger Arbeit als Hunde."
       ],
       "fest": true
      }
     ]
    }
   ]
  },
  {
   "id": "tdzhl2",
   "titel": "Prüfungslauf 2",
   "minuten": 25,
   "teile": [
    {
     "nr": 1,
     "art": "ansage",
     "aufgaben": [
      {
       "von": "Ansage: Ausländerbehörde, Abteilung Einbürgerung",
       "wer": "Mann",
       "text": "Ausländerbehörde, Abteilung Einbürgerung. Bitte beachten Sie: Wegen eines Umzugs innerhalb des Hauses ist unsere Abteilung vom ersten bis zum fünften März geschlossen. Ab dem achten März finden Sie uns nicht mehr im zweiten Stock, sondern im Erdgeschoss, Zimmer null zwölf. Termine, die schon vereinbart sind, bleiben gültig. Fragen zu Ihrem Antrag schicken Sie in dieser Zeit bitte per E-Mail.",
       "frage": "Wo ist die Abteilung ab dem achten März?",
       "opt": [
        "Im zweiten Stock.",
        "Im Erdgeschoss.",
        "In einem anderen Haus."
       ],
       "loesung": 1,
       "stelle": "sondern im Erdgeschoss, Zimmer null zwölf",
       "erklaerung": "Der Umzug ist „innerhalb des Hauses\". Der zweite Stock ist der alte Platz."
      },
      {
       "von": "Nachricht von der Praxis Doktor Berger",
       "wer": "Frau",
       "text": "Hallo, Herr Nguyen, hier ist die Praxis Doktor Berger. Ihre Blutwerte sind da. Es ist alles in Ordnung, Sie müssen sich keine Sorgen machen. Der Doktor möchte aber trotzdem noch einmal mit Ihnen über die Tabletten sprechen. Dafür brauchen Sie nicht in die Praxis zu kommen, er ruft Sie am Freitag zwischen zwölf und eins an. Wenn das nicht geht, sagen Sie uns bitte Bescheid. Tschüss.",
       "frage": "Was passiert am Freitag?",
       "opt": [
        "Der Arzt ruft Herrn Nguyen an.",
        "Herr Nguyen holt die Blutwerte ab.",
        "Herr Nguyen bekommt neue Tabletten."
       ],
       "loesung": 0,
       "stelle": "er ruft Sie am Freitag zwischen zwölf und eins an",
       "erklaerung": "Über die Tabletten wird nur gesprochen. In die Praxis muss Herr Nguyen nicht kommen."
      },
      {
       "von": "Nachricht von der Kita Löwenzahn",
       "wer": "Mann",
       "text": "Guten Tag Frau Nowak, hier ist Markus Hofmann, der Leiter der Kita Löwenzahn. Ich habe gute Nachrichten: Wir haben ab September einen Platz für Ihren Sohn Leon. Bitte kommen Sie nächste Woche zu einem Gespräch vorbei, damit wir den Vertrag machen können. Bringen Sie bitte das Impfbuch von Leon mit. Am besten rufen Sie mich zurück und wir machen einen Termin aus. Ich bin bis sechzehn Uhr im Büro.",
       "frage": "Was sagt Herr Hofmann?",
       "opt": [
        "Leon kann ab September in die Kita kommen.",
        "Frau Nowak muss den Vertrag schicken.",
        "Leon muss noch geimpft werden."
       ],
       "loesung": 0,
       "stelle": "Wir haben ab September einen Platz für Ihren Sohn Leon",
       "erklaerung": "Das Impfbuch soll sie nur mitbringen. Den Vertrag machen sie zusammen im Gespräch."
      },
      {
       "von": "Durchsage im Kaufhaus",
       "wer": "Frau",
       "text": "Liebe Kunden, eine Durchsage für den Fahrer eines weißen Lieferwagens. Ihr Wagen steht in der Feuerwehrzufahrt vor dem Haupteingang. Bitte fahren Sie ihn sofort weg, sonst wird er abgeschleppt. Freie Parkplätze gibt es noch genug im Parkhaus auf der dritten Ebene. Die ersten zwei Stunden sind dort für unsere Kunden kostenlos. Vielen Dank.",
       "frage": "Was soll der Fahrer tun?",
       "opt": [
        "Zum Haupteingang kommen und bezahlen.",
        "Zwei Stunden im Parkhaus warten.",
        "Seinen Wagen sofort wegfahren."
       ],
       "loesung": 2,
       "stelle": "Bitte fahren Sie ihn sofort weg",
       "erklaerung": "Die zwei Stunden sind die kostenlose Parkzeit, keine Wartezeit."
      }
     ]
    },
    {
     "nr": 2,
     "art": "ansage",
     "aufgaben": [
      {
       "von": "Radio: Verkehr",
       "wer": "Frau",
       "text": "Eine Meldung für alle Bahnfahrer: Wegen Bauarbeiten fahren zwischen Neustadt und Altdorf am Wochenende keine Züge. Stattdessen gibt es Busse. Die Busse fahren direkt vor dem Bahnhof ab und brauchen etwa zwanzig Minuten länger als der Zug. Fahrräder können in den Bussen leider nicht mitgenommen werden.",
       "frage": "Was gilt am Wochenende zwischen Neustadt und Altdorf?",
       "opt": [
        "Die Züge fahren zwanzig Minuten später.",
        "Man kann das Fahrrad im Bus mitnehmen.",
        "Man fährt mit dem Bus statt mit dem Zug."
       ],
       "loesung": 2,
       "stelle": "keine Züge. Stattdessen gibt es Busse",
       "erklaerung": "Die zwanzig Minuten braucht der Bus länger. Fahrräder darf man nicht mitnehmen."
      },
      {
       "von": "Radio: Hinweis der Stadt",
       "wer": "Mann",
       "text": "Die Stadt sucht Helfer für den Frühjahrsputz. Am Samstag, dem zwölften April, sammeln wir gemeinsam Müll in Parks und auf Spielplätzen. Treffpunkt ist um zehn Uhr vor dem Rathaus. Handschuhe und Müllsäcke bekommen Sie dort. Nach der Arbeit lädt der Bürgermeister alle Helfer zu einem kleinen Mittagessen ins Café am Markt ein.",
       "frage": "Was bekommen die Helfer am Treffpunkt vor dem Rathaus?",
       "opt": [
        "Ein Mittagessen.",
        "Einen Plan vom Park.",
        "Handschuhe und Müllsäcke."
       ],
       "loesung": 2,
       "stelle": "Handschuhe und Müllsäcke bekommen Sie dort",
       "erklaerung": "Das Mittagessen gibt es erst nach der Arbeit im Café am Markt."
      },
      {
       "von": "Radio: Wetter",
       "wer": "Frau",
       "text": "Das Wetter: Heute bleibt es warm und sonnig mit bis zu dreißig Grad. Bitte trinken Sie viel und bleiben Sie in der Mittagszeit möglichst im Schatten. Erst am Abend gibt es im Westen ein paar Wolken. Morgen geht es so weiter. Abkühlung gibt es erst am Donnerstag mit Regen.",
       "frage": "Wann wird es kühler?",
       "opt": [
        "Am Donnerstag.",
        "Heute Abend.",
        "Morgen."
       ],
       "loesung": 0,
       "stelle": "Abkühlung gibt es erst am Donnerstag",
       "erklaerung": "Heute Abend kommen nur ein paar Wolken. Morgen „geht es so weiter\", also bleibt es heiß."
      },
      {
       "von": "Radio: Veranstaltung",
       "wer": "Mann",
       "text": "Am Freitagabend gibt es im Stadtteilzentrum Süd ein internationales Kochfest. Jeder bringt ein Gericht aus seinem Land mit, und dann wird zusammen gegessen. Bitte sagen Sie bis Mittwoch Bescheid, was Sie mitbringen, damit es nicht zehnmal Kartoffelsalat gibt. Getränke gibt es vor Ort. Beginn ist um achtzehn Uhr.",
       "frage": "Was sollen die Gäste bis Mittwoch tun?",
       "opt": [
        "Sagen, welches Essen sie mitbringen.",
        "Getränke kaufen.",
        "Kartoffelsalat machen."
       ],
       "loesung": 0,
       "stelle": "Bitte sagen Sie bis Mittwoch Bescheid, was Sie mitbringen",
       "erklaerung": "Getränke gibt es vor Ort. Kartoffelsalat ist nur ein Beispiel, das man nicht zehnmal haben will."
      },
      {
       "von": "Radio: Gewinnspiel",
       "wer": "Frau",
       "text": "Mitmachen und gewinnen! Wir suchen das schönste Foto von Ihrem Balkon. Schicken Sie uns Ihr Bild bis Ende Mai über unsere Internetseite. Unsere Hörer stimmen dann im Juni ab. Zu gewinnen gibt es einen Gutschein für eine Gärtnerei im Wert von hundertfünfzig Euro.",
       "frage": "Wer wählt das schönste Foto?",
       "opt": [
        "Die Hörer.",
        "Die Gärtnerei.",
        "Die Moderatorin."
       ],
       "loesung": 0,
       "stelle": "Unsere Hörer stimmen dann im Juni ab",
       "erklaerung": "Die Gärtnerei gibt nur den Gutschein. Abstimmen tun die Hörer."
      }
     ]
    },
    {
     "nr": 3,
     "art": "gespraech",
     "aufgaben": [
      {
       "ort": "Gespräch 1 · Abschnitt 1",
       "zeilen": [
        {
         "wer": "Frau",
         "text": "Hallo Mehmet, du bist ja schon da! Ich dachte, du hast heute frei."
        },
        {
         "wer": "Mann",
         "text": "Eigentlich schon. Aber Jonas ist krank, und der Chef hat mich heute Morgen angerufen, ob ich einspringen kann."
        },
        {
         "wer": "Frau",
         "text": "Oh, das ist nett von dir. Und morgen?"
        },
        {
         "wer": "Mann",
         "text": "Morgen habe ich dafür frei. Das haben wir so ausgemacht."
        }
       ],
       "satz": "Der Mann arbeitet heute für einen kranken Kollegen.",
       "loesung": true,
       "stelle": "Aber Jonas ist krank",
       "erklaerung": "„einspringen\" heißt: für jemanden arbeiten, der fehlt."
      },
      {
       "ort": "Gespräch 1 · Abschnitt 2",
       "zeilen": [
        {
         "wer": "Frau",
         "text": "Du, hast du heute Mittag Zeit? Ich brauche Hilfe mit dem neuen Computerprogramm für die Bestellungen."
        },
        {
         "wer": "Mann",
         "text": "Heute Mittag geht leider nicht, da muss ich kurz zur Bank. Aber um vier Uhr, nach meiner Schicht, kann ich dir das zeigen."
        },
        {
         "wer": "Frau",
         "text": "Super, das passt. Danke!"
        }
       ],
       "frage": "Wann hilft der Mann der Frau?",
       "opt": [
        "Heute Mittag.",
        "Morgen.",
        "Um vier Uhr."
       ],
       "loesung": 2,
       "stelle": "Aber um vier Uhr, nach meiner Schicht",
       "erklaerung": "Mittags muss er zur Bank. Morgen hat er frei."
      },
      {
       "ort": "Gespräch 2 · Abschnitt 1",
       "zeilen": [
        {
         "wer": "Frau",
         "text": "Zahnarztpraxis Doktor Fischer, guten Tag."
        },
        {
         "wer": "Mann",
         "text": "Guten Tag, hier ist Lukas Bergmann. Ich habe seit gestern Abend starke Zahnschmerzen. Kann ich heute noch kommen?"
        },
        {
         "wer": "Frau",
         "text": "Heute ist es leider sehr voll. Aber bei Schmerzen nehmen wir Sie natürlich dran. Können Sie um elf Uhr dreißig hier sein?"
        },
        {
         "wer": "Mann",
         "text": "Ja, das schaffe ich."
        }
       ],
       "satz": "Der Mann bekommt erst nächste Woche einen Termin.",
       "loesung": false,
       "stelle": "Können Sie um elf Uhr dreißig hier sein?",
       "erklaerung": "Es ist voll, aber bei Schmerzen bekommt er noch heute einen Termin."
      },
      {
       "ort": "Gespräch 2 · Abschnitt 2",
       "zeilen": [
        {
         "wer": "Frau",
         "text": "Waren Sie schon einmal bei uns?"
        },
        {
         "wer": "Mann",
         "text": "Nein, ich bin neu in der Stadt."
        },
        {
         "wer": "Frau",
         "text": "Dann kommen Sie bitte zehn Minuten früher und füllen Sie einen Fragebogen aus. Und vergessen Sie Ihre Versichertenkarte nicht."
        },
        {
         "wer": "Mann",
         "text": "Gut, mache ich. Danke."
        }
       ],
       "frage": "Warum soll der Mann früher kommen?",
       "opt": [
        "Weil er seine Karte vergessen hat.",
        "Weil die Praxis sehr voll ist.",
        "Weil er einen Fragebogen ausfüllen muss."
       ],
       "loesung": 2,
       "stelle": "füllen Sie einen Fragebogen aus",
       "erklaerung": "Er ist neu in der Praxis. Die Karte soll er nicht vergessen, er hat sie aber noch nicht vergessen."
      },
      {
       "ort": "Gespräch 3 · Abschnitt 1",
       "zeilen": [
        {
         "wer": "Frau",
         "text": "Herr Rossi, haben Sie einen Moment? Ich muss Ihnen etwas zu Sofia sagen."
        },
        {
         "wer": "Mann",
         "text": "Ja, klar. Ist was passiert?"
        },
        {
         "wer": "Frau",
         "text": "Nichts Schlimmes. Sie ist heute beim Spielen im Garten hingefallen und hat sich das Knie aufgeschlagen. Wir haben ein Pflaster draufgemacht."
        },
        {
         "wer": "Mann",
         "text": "Ach so. Weint sie noch?"
        }
       ],
       "satz": "Sofia musste ins Krankenhaus.",
       "loesung": false,
       "stelle": "Wir haben ein Pflaster draufgemacht",
       "erklaerung": "„Nichts Schlimmes\": Ein Pflaster in der Kita war genug."
      },
      {
       "ort": "Gespräch 3 · Abschnitt 2",
       "zeilen": [
        {
         "wer": "Frau",
         "text": "Nein, nein, sie hat schon wieder gelacht. Aber noch etwas anderes: Sofia braucht dringend neue Wechselsachen. Wir haben keine Hose mehr für sie hier."
        },
        {
         "wer": "Mann",
         "text": "Ach ja, stimmt. Ich bringe morgen früh eine Hose und Socken mit."
        },
        {
         "wer": "Frau",
         "text": "Super. Und denken Sie bitte auch an Gummistiefel, wir gehen am Freitag in den Wald."
        }
       ],
       "frage": "Was soll der Vater mitbringen?",
       "opt": [
        "Ein neues Pflaster.",
        "Nur Socken.",
        "Eine Hose, Socken und Gummistiefel."
       ],
       "loesung": 2,
       "stelle": "Ich bringe morgen früh eine Hose und Socken mit",
       "erklaerung": "Am Ende kommen noch die Gummistiefel für den Wald dazu."
      },
      {
       "ort": "Gespräch 4 · Abschnitt 1",
       "zeilen": [
        {
         "wer": "Frau",
         "text": "Entschuldigung, ich suche Hefe. Haben Sie die?"
        },
        {
         "wer": "Mann",
         "text": "Ja, frische Hefe ist im Kühlregal bei der Butter. Trockenhefe finden Sie bei Mehl und Zucker, im Gang drei."
        },
        {
         "wer": "Frau",
         "text": "Ah, danke. Und haben Sie auch Mehl ohne Gluten?"
        },
        {
         "wer": "Mann",
         "text": "Ja, aber nur ein bisschen. Das steht im Regal mit den Bioprodukten, ganz hinten links."
        }
       ],
       "satz": "Im Geschäft gibt es auch Mehl ohne Gluten.",
       "loesung": true,
       "stelle": "Ja, aber nur ein bisschen",
       "erklaerung": "Es gibt nicht viel davon, aber es gibt es, hinten links."
      },
      {
       "ort": "Gespräch 4 · Abschnitt 2",
       "zeilen": [
        {
         "wer": "Frau",
         "text": "Danke. Und noch eine Frage: Kann ich hier auch mit Karte bezahlen? Ich habe kein Bargeld dabei."
        },
        {
         "wer": "Mann",
         "text": "Ja, natürlich. Aber erst ab fünf Euro."
        },
        {
         "wer": "Frau",
         "text": "Das ist kein Problem, ich kaufe mehr als fünf Euro ein."
        }
       ],
       "frage": "Wie bezahlt die Frau?",
       "opt": [
        "Bar.",
        "Sie bezahlt später.",
        "Mit Karte."
       ],
       "loesung": 2,
       "stelle": "Kann ich hier auch mit Karte bezahlen?",
       "erklaerung": "Bargeld hat sie nicht dabei. Sie kauft für mehr als fünf Euro ein, also geht die Karte."
      }
     ]
    },
    {
     "nr": 4,
     "art": "diskussion",
     "aufgaben": [
      {
       "von": "Person 1: Herr Okoye, Elektriker",
       "wer": "Mann",
       "text": "Ich arbeite als Elektriker, von sieben bis sechzehn Uhr. Einen Kurs am Vormittag kann ich gar nicht machen, dann verliere ich meine Arbeit. Deshalb bin ich froh, dass es den Abendkurs gibt, dreimal pro Woche von achtzehn bis einundzwanzig Uhr. Natürlich ist es anstrengend, das gebe ich zu. Aber so kann ich Geld verdienen und trotzdem Deutsch lernen. Ohne den Abendkurs hätte ich keine Chance.",
       "loesung": 1,
       "stelle": "so kann ich Geld verdienen und trotzdem Deutsch lernen",
       "erklaerung": "„anstrengend\" gibt er zu, aber seine Meinung kommt nach „Aber\": Der Abendkurs passt zu seiner Arbeit.",
       "frage": "Welcher Satz passt zu Herr Okoye?",
       "opt": [
        "Nach der Arbeit ist man zu müde zum Lernen.",
        "Abendkurse sind gut, weil man tagsüber arbeiten kann.",
        "Mit kleinen Kindern ist ein Kurs am Abend schwer.",
        "Kurse im Internet sind besser als Kurse im Klassenzimmer.",
        "Im Abendkurs lernt man nette Leute kennen.",
        "Der Arbeitgeber sollte den Deutschkurs bezahlen."
       ],
       "fest": true
      },
      {
       "von": "Person 2: Frau Silva, Mutter von zwei Kindern",
       "wer": "Frau",
       "text": "Ich habe zwei Kinder, drei und sechs Jahre alt. Mein Mann arbeitet bis neunzehn Uhr. Den Kurs am Abend habe ich zwei Wochen lang versucht. Aber wer bringt die Kinder ins Bett? Ich habe jeden Abend eine Babysitterin gebraucht, und das war zu teuer. Und wenn ich um einundzwanzig Uhr nach Hause gekommen bin, waren die Kleinen noch wach und haben geweint. Für Mütter wie mich passt das einfach nicht.",
       "loesung": 2,
       "stelle": "Für Mütter wie mich passt das einfach nicht",
       "erklaerung": "Ihr Problem sind die kleinen Kinder am Abend, nicht die Müdigkeit.",
       "frage": "Welcher Satz passt zu Frau Silva?",
       "opt": [
        "Nach der Arbeit ist man zu müde zum Lernen.",
        "Abendkurse sind gut, weil man tagsüber arbeiten kann.",
        "Mit kleinen Kindern ist ein Kurs am Abend schwer.",
        "Kurse im Internet sind besser als Kurse im Klassenzimmer.",
        "Im Abendkurs lernt man nette Leute kennen.",
        "Der Arbeitgeber sollte den Deutschkurs bezahlen."
       ],
       "fest": true
      },
      {
       "von": "Person 3: Herr Haddad, Lagerarbeiter",
       "wer": "Mann",
       "text": "Am Anfang dachte ich, ich gehe in den Kurs, lerne Grammatik und fahre wieder nach Hause. Aber unsere Gruppe ist toll. Wir sind zwölf Leute aus neun Ländern, alle arbeiten tagsüber, alle sind abends müde. Das verbindet. Nach dem Kurs gehen wir manchmal noch zusammen etwas trinken und üben dabei Deutsch. Zwei aus dem Kurs sind inzwischen richtige Freunde geworden.",
       "loesung": 4,
       "stelle": "Zwei aus dem Kurs sind inzwischen richtige Freunde geworden",
       "erklaerung": "„alle sind abends müde\" ist eine Falle. Für ihn zählt die Gruppe.",
       "frage": "Welcher Satz passt zu Herr Haddad?",
       "opt": [
        "Nach der Arbeit ist man zu müde zum Lernen.",
        "Abendkurse sind gut, weil man tagsüber arbeiten kann.",
        "Mit kleinen Kindern ist ein Kurs am Abend schwer.",
        "Kurse im Internet sind besser als Kurse im Klassenzimmer.",
        "Im Abendkurs lernt man nette Leute kennen.",
        "Der Arbeitgeber sollte den Deutschkurs bezahlen."
       ],
       "fest": true
      }
     ]
    }
   ]
  }
 ]
};
