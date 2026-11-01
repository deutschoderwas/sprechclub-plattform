/* ============================================================
   deutschoderwas club — HÖREN telc Deutsch B1

   Aufbau nach dem offiziellen telc-Format (Übungstest 1 Zertifikat
   Deutsch, geprüft 01.11.2026), ca. 30 Minuten, 20 Aufgaben:

     Teil 1  fünf Meinungen zu einem Thema, richtig/falsch  EINMAL hören
     Teil 2  ein Radiointerview, zehn Aussagen r/f          zweimal
     Teil 3  fünf kurze Ansagen, richtig/falsch             zweimal

   Alle Texte eigene, gesprochen über api/tts.js (ElevenLabs).
   Zahlen sind ausgeschrieben, damit die Stimme sie richtig liest.
   Das Interview ist in zehn Abschnitte geteilt, je eine Aussage —
   so wie beim Goethe-Vortrag in hoeren-b1.js.
   ============================================================ */

window.HOEREN_TELC_B1 = {
 "niveau": "telcB1",
 "pruefung": "telc Deutsch B1",
 "minuten": 30,
 "punkte": 20,
 "stufen": [
  {
   "nr": 1,
   "titel": "Die Hauptsache hören",
   "zeichen": "👂",
   "was": "Was meint jemand wirklich — und welche Zahl stimmt am Ende?"
  },
  {
   "nr": 2,
   "titel": "Die Fallen kennen",
   "zeichen": "🪤",
   "was": "Signalwörter im Interview und die typischen Richtig/Falsch-Fallen."
  },
  {
   "nr": 3,
   "titel": "Die Aufgabentypen",
   "zeichen": "🎯",
   "was": "Alle drei Teile einzeln: Meinungen, Interview, Ansagen."
  },
  {
   "nr": 4,
   "titel": "Die ganze Prüfung",
   "zeichen": "⏱️",
   "was": "20 Aufgaben am Stück, ca. 30 Minuten — Teil 1 nur einmal hören."
  }
 ],
 "bloecke": [
  {
   "id": "tb1h1",
   "stufe": 1,
   "titel": "Was meint die Person wirklich?",
   "kurz": "Einmal hören, die Haltung erkennen — nicht an einzelnen Wörtern hängen.",
   "ziel": "Nach diesem Block erkennst du nach einmaligem Hören, was eine Person wirklich denkt — auch wenn sie es nicht direkt sagt.",
   "zeichen": "🎯",
   "farbe": "turq",
   "mal": 1,
   "aufgaben": [
    {
     "art": "hoerwahl",
     "ort": "Thema: Hausarbeit",
     "wer": "Frau",
     "text": "Also, bei uns macht jeder seine eigene Wäsche, das klappt super. Nur beim Putzen gibt es immer Streit, weil keiner das Bad machen will.",
     "frage": "Wie findet die Frau die Aufteilung der Hausarbeit?",
     "opt": [
      "Alles funktioniert ohne Probleme.",
      "Sie macht die ganze Hausarbeit allein.",
      "Teilweise gut, beim Putzen gibt es Ärger."
     ],
     "loesung": 2,
     "stelle": "beim Putzen gibt es immer Streit",
     "erklaerung": "„super\" gilt nur für die Wäsche. Das „Nur\" danach schränkt die positive Aussage ein."
    },
    {
     "art": "hoerwahl",
     "ort": "Thema: Arbeiten von zu Hause",
     "wer": "Mann",
     "text": "Am Anfang fand ich Homeoffice toll, keine Fahrerei, kein Stau. Inzwischen fehlen mir aber die Kollegen, und ich gehe wieder gern ins Büro.",
     "frage": "Was denkt der Mann heute über Homeoffice?",
     "opt": [
      "Er findet Homeoffice immer noch toll.",
      "Er hat Angst vor dem Stau.",
      "Er arbeitet lieber im Büro."
     ],
     "loesung": 2,
     "stelle": "ich gehe wieder gern ins Büro",
     "erklaerung": "„Am Anfang\" und „inzwischen\" zeigen eine Veränderung. Gefragt ist die Meinung von heute."
    },
    {
     "art": "hoerwahl",
     "ort": "Thema: Einkaufen im Internet",
     "wer": "Frau",
     "text": "Kleidung bestelle ich nie im Internet, die muss ich anprobieren. Aber Bücher oder Druckerpatronen, das geht online einfach schneller.",
     "frage": "Was sagt die Frau über das Einkaufen im Internet?",
     "opt": [
      "Sie kauft gar nichts online.",
      "Für manche Dinge findet sie es praktisch.",
      "Sie kauft vor allem Kleidung online."
     ],
     "loesung": 1,
     "stelle": "das geht online einfach schneller",
     "erklaerung": "Sie lehnt Online-Shopping nicht ganz ab — nur für Kleidung. Für andere Dinge ist es für sie praktisch."
    },
    {
     "art": "hoerwahl",
     "ort": "Thema: Sport im Verein",
     "wer": "Mann",
     "text": "Ich spiele seit Jahren im Fußballverein. Ehrlich gesagt geht es mir gar nicht so sehr ums Gewinnen, sondern um die Leute und das Bier danach.",
     "frage": "Warum ist der Mann im Verein?",
     "opt": [
      "Er möchte Profi werden.",
      "Die Gemeinschaft ist ihm wichtig.",
      "Er will unbedingt gewinnen."
     ],
     "loesung": 1,
     "stelle": "sondern um die Leute",
     "erklaerung": "„nicht so sehr … sondern\" — nach „sondern\" kommt das, was wirklich zählt."
    },
    {
     "art": "hoerwahl",
     "ort": "Thema: Wohnen in der Stadt",
     "wer": "Frau",
     "text": "Die Wohnung ist teuer und ziemlich klein, das stimmt. Trotzdem würde ich nie aufs Land ziehen, hier habe ich alles direkt vor der Tür.",
     "frage": "Wie ist die Einstellung der Frau zum Stadtleben?",
     "opt": [
      "Sie findet ihre Wohnung günstig.",
      "Sie lebt trotz Nachteilen gern in der Stadt.",
      "Sie möchte bald aufs Land ziehen."
     ],
     "loesung": 1,
     "stelle": "Trotzdem würde ich nie aufs Land ziehen",
     "erklaerung": "Erst die Nachteile, dann „Trotzdem\". Das Signalwort zeigt die eigentliche Meinung."
    },
    {
     "art": "hoerwahl",
     "ort": "Thema: Handy beim Essen",
     "wer": "Mann",
     "text": "Meine Kinder sitzen beim Abendessen ständig am Handy. Ich habe jetzt eine Regel eingeführt: Alle Handys bleiben im Flur, auch meins.",
     "frage": "Was hält der Mann von Handys beim Essen?",
     "opt": [
      "Er findet, beim Essen sollte niemand am Handy sein.",
      "Nur die Kinder dürfen kein Handy benutzen.",
      "Es ist ihm egal."
     ],
     "loesung": 0,
     "stelle": "Alle Handys bleiben im Flur, auch meins",
     "erklaerung": "„auch meins\" zeigt: Die Regel gilt für alle, nicht nur für die Kinder."
    },
    {
     "art": "hoerwahl",
     "ort": "Thema: Urlaub",
     "wer": "Frau",
     "text": "Viele fliegen jedes Jahr weit weg. Ich bleibe lieber in der Nähe, fahre mit dem Zug an die Ostsee und bin nach drei Stunden am Strand.",
     "frage": "Was ist der Frau im Urlaub wichtig?",
     "opt": [
      "Jedes Jahr ein neues Land.",
      "Möglichst weit zu reisen.",
      "Ein Ziel, das nicht weit weg ist."
     ],
     "loesung": 2,
     "stelle": "Ich bleibe lieber in der Nähe",
     "erklaerung": "Was „viele\" machen, ist nicht ihre Meinung. Ihre eigene Haltung kommt mit „Ich … lieber\"."
    },
    {
     "art": "hoerwahl",
     "ort": "Thema: Kochen",
     "wer": "Mann",
     "text": "Ich koche eigentlich nicht gern, das ist mir zu viel Arbeit. Aber am Wochenende, wenn Freunde kommen, stehe ich gern ein paar Stunden in der Küche.",
     "frage": "Wann kocht der Mann gern?",
     "opt": [
      "Nie, er findet Kochen anstrengend.",
      "Wenn er Gäste hat.",
      "Jeden Tag nach der Arbeit."
     ],
     "loesung": 1,
     "stelle": "wenn Freunde kommen, stehe ich gern",
     "erklaerung": "„eigentlich nicht gern\" ist die Regel, nach „Aber\" kommt die Ausnahme: mit Gästen."
    },
    {
     "art": "hoerwahl",
     "ort": "Thema: Ehrenamt",
     "wer": "Frau",
     "text": "Zweimal pro Woche helfe ich in der Tafel. Ich bekomme kein Geld dafür, aber ich bekomme so viel Dankbarkeit zurück, das ist mir mehr wert.",
     "frage": "Wie findet die Frau ihre ehrenamtliche Arbeit?",
     "opt": [
      "Sie macht es nur, weil sie muss.",
      "Sie ärgert sich, dass sie kein Geld bekommt.",
      "Sie empfindet sie als sehr wertvoll."
     ],
     "loesung": 2,
     "stelle": "das ist mir mehr wert",
     "erklaerung": "Das fehlende Geld wird erwähnt, ist aber nicht wichtig. Die Hauptaussage steht am Ende."
    },
    {
     "art": "hoerwahl",
     "ort": "Thema: Fahrrad oder Auto",
     "wer": "Mann",
     "text": "Ich fahre im Sommer immer mit dem Rad zur Arbeit. Im Winter, wenn es dunkel und glatt ist, nehme ich dann doch lieber das Auto.",
     "frage": "Wie kommt der Mann zur Arbeit?",
     "opt": [
      "Immer mit dem Auto.",
      "Immer mit dem Fahrrad.",
      "Das hängt von der Jahreszeit ab."
     ],
     "loesung": 2,
     "stelle": "nehme ich dann doch lieber das Auto",
     "erklaerung": "„immer\" gilt nur für den Sommer. Achte auf die Bedingung: im Winter anders."
    }
   ]
  },
  {
   "id": "tb1h2",
   "stufe": 1,
   "titel": "Zahlen, Zeiten, Gleise",
   "kurz": "Ansagen mit Uhrzeiten, Preisen und Gleisen — und die Korrektur kommt oft danach.",
   "ziel": "Nach diesem Block hörst du bei Ansagen bis zum Ende zu und erkennst, welche Zahl am Schluss wirklich gilt.",
   "zeichen": "🚉",
   "farbe": "gold",
   "mal": 2,
   "aufgaben": [
    {
     "art": "hoerwahl",
     "ort": "Bahnhofsdurchsage",
     "wer": "Frau",
     "text": "Achtung an Gleis vier: Der Regionalexpress nach Kassel fährt heute nicht um zehn Uhr, sondern um halb elf. Wir bitten um Entschuldigung.",
     "frage": "Wann fährt der Zug nach Kassel ab?",
     "opt": [
      "Um zehn Uhr dreißig.",
      "Um elf Uhr.",
      "Um zehn Uhr."
     ],
     "loesung": 0,
     "stelle": "sondern um halb elf",
     "erklaerung": "Die erste Uhrzeit wird korrigiert. Nach „nicht … sondern\" kommt die richtige Information."
    },
    {
     "art": "hoerwahl",
     "ort": "Bahnhofsdurchsage",
     "wer": "Mann",
     "text": "Information zum Intercity nach Bremen, planmäßige Abfahrt vierzehn Uhr zwölf: Der Zug fährt heute ausnahmsweise von Gleis neun statt von Gleis sechs.",
     "frage": "Von welchem Gleis fährt der Zug nach Bremen heute?",
     "opt": [
      "Von Gleis sechs.",
      "Von Gleis zwölf.",
      "Von Gleis neun."
     ],
     "loesung": 2,
     "stelle": "von Gleis neun statt von Gleis sechs",
     "erklaerung": "„statt\" zeigt: Gleis sechs ist das alte Gleis. Die Zwölf gehört zur Uhrzeit, nicht zum Gleis."
    },
    {
     "art": "hoerwahl",
     "ort": "Anrufbeantworter, Arztpraxis",
     "wer": "Frau",
     "text": "Sie sind verbunden mit der Praxis Doktor Brandt. Unsere Sprechzeiten sind Montag bis Freitag von acht bis zwölf Uhr, am Mittwochnachmittag zusätzlich von fünfzehn bis achtzehn Uhr.",
     "frage": "Kann man am Mittwoch um sechzehn Uhr in die Praxis kommen?",
     "opt": [
      "Nein, nachmittags ist immer geschlossen.",
      "Nur mit einem Notfall.",
      "Ja, dann ist die Praxis geöffnet."
     ],
     "loesung": 2,
     "stelle": "zusätzlich von fünfzehn bis achtzehn Uhr",
     "erklaerung": "Sechzehn Uhr liegt zwischen fünfzehn und achtzehn Uhr. Nur mittwochs gibt es diese Zusatzzeit."
    },
    {
     "art": "hoerwahl",
     "ort": "Werbung im Radio",
     "wer": "Mann",
     "text": "Nur diese Woche im Möbelhaus Lindner: Das Sofa Mila kostet statt sechshundertneunundvierzig Euro nur vierhundertneunundneunzig Euro. Die Lieferung ist kostenlos.",
     "frage": "Wie viel kostet das Sofa diese Woche?",
     "opt": [
      "Vierhundertneunundneunzig Euro.",
      "Sechshundertneunundvierzig Euro.",
      "Vierhundertneunundvierzig Euro."
     ],
     "loesung": 0,
     "stelle": "kostet statt sechshundertneunundvierzig Euro nur vierhundertneunundneunzig Euro",
     "erklaerung": "Der alte Preis kommt zuerst. Der Angebotspreis folgt nach „statt … nur\"."
    },
    {
     "art": "hoerwahl",
     "ort": "Kinoprogramm am Telefon",
     "wer": "Frau",
     "text": "Heute zeigen wir den Film „Sommer am See\" um siebzehn Uhr fünfzehn und um zwanzig Uhr dreißig. Die Vorstellung um siebzehn Uhr fünfzehn ist leider schon ausverkauft.",
     "frage": "Wann kann man den Film heute noch sehen?",
     "opt": [
      "Um siebzehn Uhr fünfzehn.",
      "Um zwanzig Uhr dreißig.",
      "Um zwanzig Uhr fünfzehn."
     ],
     "loesung": 1,
     "stelle": "ist leider schon ausverkauft",
     "erklaerung": "Zwei Zeiten werden genannt, aber eine ist ausverkauft. Es bleibt nur die spätere Vorstellung."
    },
    {
     "art": "hoerwahl",
     "ort": "Durchsage im Supermarkt",
     "wer": "Mann",
     "text": "Liebe Kunden, unser Markt schließt heute wegen einer Betriebsversammlung schon um achtzehn Uhr. Ab morgen sind wir wieder wie gewohnt bis zweiundzwanzig Uhr für Sie da.",
     "frage": "Bis wann ist der Markt heute geöffnet?",
     "opt": [
      "Bis zweiundzwanzig Uhr.",
      "Bis achtzehn Uhr.",
      "Bis zwanzig Uhr."
     ],
     "loesung": 1,
     "stelle": "schließt heute wegen einer Betriebsversammlung schon um achtzehn Uhr",
     "erklaerung": "„heute\" und „ab morgen\" trennen die Zeiten. Zweiundzwanzig Uhr gilt erst wieder morgen."
    },
    {
     "art": "hoerwahl",
     "ort": "Anrufbeantworter, Werkstatt",
     "wer": "Frau",
     "text": "Hallo Herr Kaya, hier ist die Autowerkstatt Berger. Ihr Wagen ist fertig. Die Reparatur kostet zweihundertdreißig Euro, also etwas weniger als im Kostenvoranschlag. Sie können ihn ab Donnerstag abholen.",
     "frage": "Was stimmt?",
     "opt": [
      "Die Reparatur ist günstiger als erwartet.",
      "Herr Kaya kann das Auto schon heute holen.",
      "Die Reparatur ist teurer als geplant."
     ],
     "loesung": 0,
     "stelle": "etwas weniger als im Kostenvoranschlag",
     "erklaerung": "„weniger als im Kostenvoranschlag\" heißt: billiger als geplant. Abholen geht erst ab Donnerstag."
    },
    {
     "art": "hoerwahl",
     "ort": "Durchsage am Flughafen",
     "wer": "Mann",
     "text": "Passagiere des Fluges nach Lissabon werden gebeten, sich zum Ausgang B zweiundzwanzig zu begeben. Das Boarding beginnt nicht wie angekündigt um elf Uhr vierzig, sondern bereits um elf Uhr zwanzig.",
     "frage": "Wann beginnt das Boarding?",
     "opt": [
      "Um zwölf Uhr zwanzig.",
      "Um elf Uhr vierzig.",
      "Um elf Uhr zwanzig."
     ],
     "loesung": 2,
     "stelle": "sondern bereits um elf Uhr zwanzig",
     "erklaerung": "„bereits\" zeigt: früher als geplant. Elf Uhr vierzig war die alte Zeit."
    },
    {
     "art": "hoerwahl",
     "ort": "Ansage im Schwimmbad",
     "wer": "Frau",
     "text": "Der Eintritt kostet für Erwachsene sechs Euro fünfzig, für Kinder unter zwölf Jahren drei Euro. Am Dienstag ist Familientag, da zahlen Kinder gar nichts.",
     "frage": "Wie viel zahlt ein Kind von acht Jahren am Dienstag?",
     "opt": [
      "Sechs Euro fünfzig.",
      "Nichts.",
      "Drei Euro."
     ],
     "loesung": 1,
     "stelle": "da zahlen Kinder gar nichts",
     "erklaerung": "Der normale Kinderpreis gilt nicht am Familientag. Die Ausnahme steht am Schluss."
    },
    {
     "art": "hoerwahl",
     "ort": "Verkehrsfunk im Radio",
     "wer": "Mann",
     "text": "Wegen Bauarbeiten ist die Brücke in der Hafenstraße vom dritten bis zum siebzehnten März gesperrt. Ursprünglich war die Sperrung nur bis zum zehnten März geplant.",
     "frage": "Bis wann ist die Brücke gesperrt?",
     "opt": [
      "Bis zum siebzehnten März.",
      "Bis zum zehnten März.",
      "Bis zum dritten März."
     ],
     "loesung": 0,
     "stelle": "bis zum siebzehnten März gesperrt",
     "erklaerung": "„Ursprünglich\" zeigt den alten Plan. Jetzt gilt der siebzehnte März."
    }
   ]
  },
  {
   "id": "tb1h3",
   "stufe": 2,
   "titel": "Signalwörter im Interview",
   "kurz": "eigentlich, allerdings, früher, nicht mehr — kleine Wörter, große Wirkung.",
   "ziel": "Nach diesem Block achtest du im Interview auf kleine Signalwörter, die eine Aussage einschränken oder umdrehen.",
   "zeichen": "🎙️",
   "farbe": "rot",
   "mal": 2,
   "aufgaben": [
    {
     "art": "hoerwahl",
     "ort": "Radiointerview mit einer Bäckerin",
     "wer": "Frau",
     "text": "Früher habe ich jeden Morgen um drei Uhr angefangen. Heute habe ich zwei Mitarbeiter, die die frühe Schicht übernehmen, und ich komme erst um sechs.",
     "frage": "Wann beginnt die Bäckerin heute mit der Arbeit?",
     "opt": [
      "Sie arbeitet gar nicht mehr.",
      "Um drei Uhr.",
      "Um sechs Uhr."
     ],
     "loesung": 2,
     "stelle": "ich komme erst um sechs",
     "erklaerung": "„Früher\" und „Heute\" trennen zwei Zeiten. Gefragt ist die Gegenwart."
    },
    {
     "art": "hoerwahl",
     "ort": "Radiointerview mit einem Musiker",
     "wer": "Mann",
     "text": "Eigentlich wollte ich Lehrer werden, ich habe sogar zwei Semester studiert. Dann kam das Angebot von der Band, und ich habe das Studium abgebrochen.",
     "frage": "Was stimmt über den Musiker?",
     "opt": [
      "Er hat sein Studium nicht abgeschlossen.",
      "Er arbeitet heute als Lehrer.",
      "Er hat sein Lehramtsstudium beendet."
     ],
     "loesung": 0,
     "stelle": "ich habe das Studium abgebrochen",
     "erklaerung": "„Eigentlich wollte ich\" zeigt einen Plan, der nicht passiert ist."
    },
    {
     "art": "hoerwahl",
     "ort": "Radiointerview mit einer Gärtnerin",
     "wer": "Frau",
     "text": "Mein Garten ist wirklich groß, fast tausend Quadratmeter. Allerdings habe ich nur einen kleinen Teil davon mit Gemüse bepflanzt, der Rest ist Wiese.",
     "frage": "Was sagt die Gärtnerin über ihr Gemüse?",
     "opt": [
      "Sie pflanzt kein Gemüse mehr.",
      "Der ganze Garten ist voller Gemüse.",
      "Es wächst nur auf einer kleinen Fläche."
     ],
     "loesung": 2,
     "stelle": "Allerdings habe ich nur einen kleinen Teil davon mit Gemüse bepflanzt",
     "erklaerung": "„Allerdings\" schränkt ein: Der Garten ist groß, aber das Gemüse braucht wenig Platz."
    },
    {
     "art": "hoerwahl",
     "ort": "Radiointerview mit einem Koch",
     "wer": "Mann",
     "text": "Fleisch koche ich in meinem Restaurant nicht mehr. Vor fünf Jahren stand noch Schnitzel auf der Karte, aber heute ist alles vegetarisch.",
     "frage": "Was gibt es heute im Restaurant?",
     "opt": [
      "Vor allem Fleischgerichte.",
      "Schnitzel und vegetarische Gerichte.",
      "Nur vegetarische Gerichte."
     ],
     "loesung": 2,
     "stelle": "heute ist alles vegetarisch",
     "erklaerung": "„nicht mehr\" heißt: früher ja, jetzt nein. Das Schnitzel gehört zur Vergangenheit."
    },
    {
     "art": "hoerwahl",
     "ort": "Radiointerview mit einer Hebamme",
     "wer": "Frau",
     "text": "Zuerst habe ich zehn Jahre im Krankenhaus gearbeitet. Dann habe ich mich selbstständig gemacht, und seitdem besuche ich die Familien zu Hause.",
     "frage": "Wo arbeitet die Hebamme heute?",
     "opt": [
      "Bei den Familien zu Hause.",
      "Im Krankenhaus.",
      "In einer Arztpraxis."
     ],
     "loesung": 0,
     "stelle": "seitdem besuche ich die Familien zu Hause",
     "erklaerung": "„Zuerst … Dann … seitdem\" zeigt die Reihenfolge. Das Krankenhaus war der erste Schritt."
    },
    {
     "art": "hoerwahl",
     "ort": "Radiointerview mit einem Busfahrer",
     "wer": "Mann",
     "text": "Die Arbeit macht mir eigentlich Spaß. Nur die Schichten am Wochenende, die sind schon hart, gerade wenn die Kinder zu Hause sind.",
     "frage": "Was gefällt dem Busfahrer nicht?",
     "opt": [
      "Die Arbeit am Wochenende.",
      "Die Arbeit insgesamt.",
      "Die Fahrgäste."
     ],
     "loesung": 0,
     "stelle": "Nur die Schichten am Wochenende, die sind schon hart",
     "erklaerung": "„eigentlich Spaß\" ist die allgemeine Haltung. Mit „Nur\" kommt die Einschränkung."
    },
    {
     "art": "hoerwahl",
     "ort": "Radiointerview mit einer Studentin",
     "wer": "Frau",
     "text": "Ich wohne zwar in einer WG, aber nicht weil ich muss. Die Miete könnte ich mir allein schon leisten, ich mag einfach nicht allein wohnen.",
     "frage": "Warum wohnt die Studentin in einer WG?",
     "opt": [
      "Weil sie nicht gern allein lebt.",
      "Weil die Uni es verlangt.",
      "Weil sie wenig Geld hat."
     ],
     "loesung": 0,
     "stelle": "ich mag einfach nicht allein wohnen",
     "erklaerung": "Das Geld wird erwähnt, aber verneint. Der wahre Grund kommt am Ende."
    },
    {
     "art": "hoerwahl",
     "ort": "Radiointerview mit einem Feuerwehrmann",
     "wer": "Mann",
     "text": "Viele denken, wir löschen den ganzen Tag Brände. Tatsächlich sind Brände nur ein kleiner Teil, meistens helfen wir bei Unfällen oder Unwettern.",
     "frage": "Was macht die Feuerwehr laut dem Mann meistens?",
     "opt": [
      "Schulungen für Kinder geben.",
      "Brände löschen.",
      "Bei Unfällen und Unwettern helfen."
     ],
     "loesung": 2,
     "stelle": "meistens helfen wir bei Unfällen oder Unwettern",
     "erklaerung": "„Viele denken\" ist eine falsche Meinung. „Tatsächlich\" leitet die richtige Information ein."
    },
    {
     "art": "hoerwahl",
     "ort": "Radiointerview mit einer Lehrerin",
     "wer": "Frau",
     "text": "Am Anfang hatte ich große Probleme mit den digitalen Tafeln. Inzwischen benutze ich sie jeden Tag und möchte nicht mehr ohne arbeiten.",
     "frage": "Wie findet die Lehrerin die digitalen Tafeln heute?",
     "opt": [
      "Sie benutzt sie nur selten.",
      "Sie möchte nicht mehr darauf verzichten.",
      "Sie hat immer noch große Probleme damit."
     ],
     "loesung": 1,
     "stelle": "möchte nicht mehr ohne arbeiten",
     "erklaerung": "„Am Anfang\" beschreibt die Vergangenheit, „Inzwischen\" die Gegenwart."
    },
    {
     "art": "hoerwahl",
     "ort": "Radiointerview mit einem Tierarzt",
     "wer": "Mann",
     "text": "Ich behandle hauptsächlich Hunde und Katzen. Pferde habe ich früher auch behandelt, das mache ich aber seit meinem Umzug in die Stadt nicht mehr.",
     "frage": "Welche Tiere behandelt der Tierarzt heute nicht?",
     "opt": [
      "Pferde.",
      "Katzen.",
      "Hunde."
     ],
     "loesung": 0,
     "stelle": "das mache ich aber seit meinem Umzug in die Stadt nicht mehr",
     "erklaerung": "„früher auch … nicht mehr\" — die Pferde gehören zur Vergangenheit."
    }
   ]
  },
  {
   "id": "tb1h4",
   "stufe": 2,
   "titel": "Richtig oder falsch? Die typischen Fallen",
   "kurz": "Umschreibung, Verneinung, falsche Person, falsche Zeit — die vier Klassiker.",
   "ziel": "Nach diesem Block erkennst du die vier typischen Fallen bei Richtig-oder-falsch-Aufgaben sofort.",
   "zeichen": "⚖️",
   "farbe": "lila",
   "mal": 2,
   "aufgaben": [
    {
     "art": "hoerwahl",
     "ort": "Anrufbeantworter",
     "wer": "Frau",
     "text": "Hallo Tobias, hier ist Sabine. Ich schaffe es heute Abend leider nicht ins Kino, mein Chef hat noch eine Besprechung angesetzt. Vielleicht klappt es am Samstag?",
     "frage": "Sabine kann heute Abend nicht ins Kino gehen.",
     "opt": [
      "Richtig",
      "Falsch"
     ],
     "loesung": 0,
     "stelle": "Ich schaffe es heute Abend leider nicht ins Kino",
     "erklaerung": "Umschreibung: „schaffe es nicht\" bedeutet „kann nicht\". Andere Wörter, gleiche Aussage."
    },
    {
     "art": "hoerwahl",
     "ort": "Gespräch über Hausarbeit",
     "wer": "Mann",
     "text": "Bei uns kocht meistens meine Frau, weil sie früher nach Hause kommt. Ich kümmere mich dafür um den Einkauf und die Wäsche.",
     "frage": "Der Mann kocht meistens.",
     "opt": [
      "Richtig",
      "Falsch"
     ],
     "loesung": 1,
     "stelle": "Bei uns kocht meistens meine Frau",
     "erklaerung": "Falsche Person: Gekocht wird meistens von seiner Frau, nicht von ihm."
    },
    {
     "art": "hoerwahl",
     "ort": "Wetterbericht",
     "wer": "Frau",
     "text": "Am Vormittag bleibt es noch trocken und sonnig. Ab dem frühen Nachmittag ziehen von Westen Wolken auf, und am Abend muss mit Gewittern gerechnet werden.",
     "frage": "Am Vormittag gibt es Gewitter.",
     "opt": [
      "Richtig",
      "Falsch"
     ],
     "loesung": 1,
     "stelle": "am Abend muss mit Gewittern gerechnet werden",
     "erklaerung": "Falsche Zeit: Die Gewitter kommen erst am Abend, der Vormittag ist sonnig."
    },
    {
     "art": "hoerwahl",
     "ort": "Interview mit einem Rentner",
     "wer": "Mann",
     "text": "Seit ich in Rente bin, habe ich überhaupt keine Langeweile. Ich bin im Chor, helfe meiner Tochter mit den Enkeln und lerne sogar Spanisch.",
     "frage": "Der Mann langweilt sich in der Rente.",
     "opt": [
      "Richtig",
      "Falsch"
     ],
     "loesung": 1,
     "stelle": "habe ich überhaupt keine Langeweile",
     "erklaerung": "Verneinung: „überhaupt keine Langeweile\" ist das Gegenteil der Aussage."
    },
    {
     "art": "hoerwahl",
     "ort": "Durchsage im Kaufhaus",
     "wer": "Frau",
     "text": "Unser Restaurant im vierten Stock bleibt wegen Renovierung bis Ende des Monats geschlossen. Das Café im Erdgeschoss ist wie gewohnt für Sie geöffnet.",
     "frage": "Man kann im Kaufhaus zurzeit nichts essen oder trinken.",
     "opt": [
      "Richtig",
      "Falsch"
     ],
     "loesung": 1,
     "stelle": "Das Café im Erdgeschoss ist wie gewohnt für Sie geöffnet",
     "erklaerung": "Nur das Restaurant ist zu. Das Café im Erdgeschoss hat geöffnet — die Aussage ist zu allgemein."
    },
    {
     "art": "hoerwahl",
     "ort": "Gespräch über die Arbeit",
     "wer": "Frau",
     "text": "Mein neuer Job ist wirklich anstrengend, ich bin abends total müde. Aber das Team ist toll, und ich lerne jeden Tag etwas Neues.",
     "frage": "Die Frau ist mit ihren Kollegen zufrieden.",
     "opt": [
      "Richtig",
      "Falsch"
     ],
     "loesung": 0,
     "stelle": "Aber das Team ist toll",
     "erklaerung": "Umschreibung: „das Team ist toll\" heißt, sie ist mit den Kollegen zufrieden."
    },
    {
     "art": "hoerwahl",
     "ort": "Anrufbeantworter, Hausverwaltung",
     "wer": "Mann",
     "text": "Guten Tag, hier ist die Hausverwaltung. Der Handwerker kommt nicht wie geplant am Montag, sondern erst am Mittwoch zwischen acht und zehn Uhr.",
     "frage": "Der Handwerker kommt am Montag.",
     "opt": [
      "Richtig",
      "Falsch"
     ],
     "loesung": 1,
     "stelle": "sondern erst am Mittwoch zwischen acht und zehn Uhr",
     "erklaerung": "Falsche Zeit: Montag war der alte Termin. Nach „sondern\" kommt der neue: Mittwoch."
    },
    {
     "art": "hoerwahl",
     "ort": "Gespräch unter Nachbarn",
     "wer": "Frau",
     "text": "Mein Mann ist ganz begeistert vom neuen Fitnessstudio und geht dreimal pro Woche hin. Ich war einmal da, aber das ist nichts für mich.",
     "frage": "Die Frau trainiert regelmäßig im Fitnessstudio.",
     "opt": [
      "Richtig",
      "Falsch"
     ],
     "loesung": 1,
     "stelle": "Ich war einmal da, aber das ist nichts für mich",
     "erklaerung": "Falsche Person: Ihr Mann geht regelmäßig, sie selbst war nur einmal dort."
    },
    {
     "art": "hoerwahl",
     "ort": "Radiowerbung",
     "wer": "Mann",
     "text": "Sie wollen Ihre Wohnung renovieren, haben aber keine Zeit? Unser Malerteam erledigt das für Sie, schnell und sauber, auch am Samstag.",
     "frage": "Die Firma arbeitet auch am Wochenende.",
     "opt": [
      "Richtig",
      "Falsch"
     ],
     "loesung": 0,
     "stelle": "schnell und sauber, auch am Samstag",
     "erklaerung": "Umschreibung: Samstag gehört zum Wochenende. Das Wort „Wochenende\" fällt nicht, die Aussage stimmt trotzdem."
    },
    {
     "art": "hoerwahl",
     "ort": "Interview mit einer Studentin",
     "wer": "Frau",
     "text": "Ich dachte immer, ich brauche ein Auto. Seit ich in der Stadt wohne, habe ich es kein einziges Mal vermisst, ich mache alles mit dem Fahrrad.",
     "frage": "Die Studentin braucht in der Stadt kein Auto.",
     "opt": [
      "Richtig",
      "Falsch"
     ],
     "loesung": 0,
     "stelle": "habe ich es kein einziges Mal vermisst",
     "erklaerung": "„kein einziges Mal vermisst\" heißt: Sie braucht es nicht. „Ich dachte immer\" war ihre alte Meinung."
    }
   ]
  }
 ],
 "teile": [
  {
   "nr": 1,
   "art": "diskussion",
   "name": "Hörverstehen: Meinungen",
   "kurz": "Fünf Personen, ein Thema — nur EINMAL hören",
   "was": "Fünf Personen sagen ihre Meinung zu einem Thema. Zu jeder Person gibt es eine Aussage: richtig oder falsch? Du hörst jeden Text nur einmal.",
   "tipp": "Hier geht es um die Hauptaussage: Was denkt die Person, was hat sie erlebt? Einzelne Zahlen sind fast nie entscheidend.",
   "zeichen": "🗣️",
   "farbe": "turq",
   "punkte": 5,
   "mal": 1,
   "runden": [
    {
     "id": "th1s1",
     "titel": "Wer macht bei Ihnen die Hausarbeit?",
     "aufgaben": [
      {
       "von": "Person 1 — Lena, 34",
       "wer": "Frau",
       "text": "Also, bei uns ist das ehrlich gesagt ein Dauerthema. Mein Mann sagt immer, er hilft ja mit. Aber helfen ist eben nicht dasselbe wie mitmachen. Ich muss ihm jedes Mal sagen, was zu tun ist, und das nervt mich. Seit ein paar Wochen hängt jetzt ein Plan am Kühlschrank. Na ja, ob das wirklich etwas ändert, weiß ich noch nicht.",
       "satz": "Lena ist mit der Arbeitsteilung zu Hause zufrieden.",
       "loesung": false,
       "stelle": "und das nervt mich",
       "erklaerung": "Sie muss ihrem Mann alles sagen, und das nervt sie. Zufrieden ist sie also nicht."
      },
      {
       "von": "Person 2 — Markus, 41",
       "wer": "Mann",
       "text": "Bei uns hat sich das ganz von selbst geregelt. Ich koche gern und bügle sogar gern, komisch, oder? Meine Frau kümmert sich dafür um die Wäsche, das Bad und die Rechnungen. Wir haben nie einen Plan gebraucht. Jeder macht einfach das, was er besser kann oder lieber mag, und am Ende passt es. Streit gibt es deswegen eigentlich nie.",
       "satz": "Markus und seine Frau haben die Aufgaben ohne festen Plan verteilt.",
       "loesung": true,
       "stelle": "Wir haben nie einen Plan gebraucht.",
       "erklaerung": "Jeder macht, was er besser kann. Einen Plan brauchen sie nicht."
      },
      {
       "von": "Person 3 — Sabine, 58",
       "wer": "Frau",
       "text": "Also, als die Kinder klein waren, habe ich wirklich alles allein gemacht. Mein Mann hat viel gearbeitet, das war damals so. Heute sind wir beide in Rente, und da hat sich einiges geändert. Er geht jetzt jeden Tag einkaufen und saugt sogar Staub. Ich hätte nie gedacht, dass ich das noch erlebe. Na ja, besser spät als nie, sage ich immer.",
       "satz": "Sabines Mann macht heute mehr im Haushalt als früher.",
       "loesung": true,
       "stelle": "da hat sich einiges geändert",
       "erklaerung": "Früher hat sie alles allein gemacht, heute kauft er ein und saugt Staub."
      },
      {
       "von": "Person 4 — Tobias, 27",
       "wer": "Mann",
       "text": "Ich wohne in einer WG mit drei anderen Leuten. Am Anfang hatten wir einen Putzplan, aber ehrlich gesagt hat sich keiner daran gehalten. Jetzt bezahlen wir zusammen eine Putzhilfe, die alle zwei Wochen kommt. Das kostet zwar etwas, aber seitdem ist die Stimmung in der Wohnung viel besser. Das Geld ist es mir auf jeden Fall wert.",
       "satz": "Tobias findet eine Putzhilfe zu teuer.",
       "loesung": false,
       "stelle": "Das Geld ist es mir auf jeden Fall wert.",
       "erklaerung": "„Das kostet zwar etwas\" ist die Falle. Am Ende sagt er klar: Es lohnt sich."
      },
      {
       "von": "Person 5 — Aylin, 36",
       "wer": "Frau",
       "text": "Bei uns machen beide gleich viel, das war uns von Anfang an wichtig. Aber, na ja, seit unser Sohn da ist, ist das schwieriger geworden. Mein Partner arbeitet Vollzeit, ich nur halbtags, und deshalb bleibt im Moment doch mehr an mir hängen. Ich finde das nicht ideal, aber für diese Phase ist es okay. Wir sprechen offen darüber, und das ist das Wichtigste.",
       "satz": "Aylin macht zurzeit mehr im Haushalt als ihr Partner.",
       "loesung": true,
       "stelle": "bleibt im Moment doch mehr an mir hängen",
       "erklaerung": "Der erste Satz klingt nach „gleich viel\", aber seit dem Kind macht sie mehr."
      }
     ]
    },
    {
     "id": "th1s2",
     "titel": "Arbeiten Sie gern im Homeoffice?",
     "aufgaben": [
      {
       "von": "Person 1 — Daniel, 45",
       "wer": "Mann",
       "text": "Also, für mich ist das Homeoffice ein großes Geschenk. Ich spare jeden Tag fast zwei Stunden im Zug. Diese Zeit habe ich jetzt für meine Familie oder für einen Spaziergang am Morgen. Natürlich fehlt mir manchmal der Kaffee mit den Kollegen, aber das ist ein kleiner Preis. Zurück ins Büro, jeden Tag? Nein, das kann ich mir nicht mehr vorstellen.",
       "satz": "Daniel möchte wieder jeden Tag ins Büro gehen.",
       "loesung": false,
       "stelle": "das kann ich mir nicht mehr vorstellen",
       "erklaerung": "Er vermisst nur den Kaffee mit den Kollegen, will aber nicht zurück ins Büro."
      },
      {
       "von": "Person 2 — Katrin, 31",
       "wer": "Frau",
       "text": "Am Anfang fand ich es super, im Schlafanzug zu arbeiten. Aber nach ein paar Monaten habe ich gemerkt, dass ich nie richtig Feierabend mache. Der Laptop steht ja immer auf dem Küchentisch. Jetzt habe ich eine Regel: Um sechs Uhr klappe ich ihn zu und stelle ihn in den Schrank. Das klingt komisch, aber es hilft mir wirklich.",
       "satz": "Katrin hat eine Lösung gefunden, um Arbeit und Freizeit zu trennen.",
       "loesung": true,
       "stelle": "aber es hilft mir wirklich",
       "erklaerung": "Ihre Regel mit dem Schrank hilft ihr, Feierabend zu machen."
      },
      {
       "von": "Person 3 — Mehmet, 38",
       "wer": "Mann",
       "text": "Na ja, ich arbeite im Kundenservice und bin zwei Tage pro Woche zu Hause. Ehrlich gesagt bin ich im Büro produktiver. Zu Hause klingelt der Paketbote, die Nachbarn bohren, und mein Kater läuft über die Tastatur. Ich mache die Homeoffice-Tage trotzdem, weil ich mir dann den Weg spare, aber die wichtigen Aufgaben lege ich lieber auf die Bürotage.",
       "satz": "Mehmet kann sich zu Hause besser konzentrieren als im Büro.",
       "loesung": false,
       "stelle": "bin ich im Büro produktiver",
       "erklaerung": "Zu Hause stören ihn Paketbote, Nachbarn und Kater. Im Büro arbeitet er besser."
      },
      {
       "von": "Person 4 — Johanna, 52",
       "wer": "Frau",
       "text": "Ich war am Anfang sehr skeptisch. Ich dachte, ohne das Team geht gar nichts. Aber unsere Abteilung hat das wirklich gut organisiert, mit einer kurzen Videokonferenz jeden Morgen. Inzwischen bin ich ein richtiger Fan geworden. Ich habe sogar mehr Kontakt zu manchen Kollegen als früher, weil wir uns regelmäßig sehen, wenn auch nur am Bildschirm.",
       "satz": "Johanna hat ihre Meinung zum Homeoffice geändert.",
       "loesung": true,
       "stelle": "Inzwischen bin ich ein richtiger Fan geworden.",
       "erklaerung": "Erst skeptisch, jetzt Fan: Ihre Meinung hat sich geändert."
      },
      {
       "von": "Person 5 — Luca, 24",
       "wer": "Mann",
       "text": "Ich habe meine Stelle in der Zeit angefangen, als alle zu Hause waren. Das Problem war: Ich kannte niemanden. Ich wusste nicht, wen ich fragen kann, und habe mich oft allein gefühlt. Deshalb gehe ich jetzt freiwillig jeden Tag ins Büro, obwohl ich auch zu Hause arbeiten dürfte. Für Berufsanfänger ist das Büro einfach besser, finde ich.",
       "satz": "Luca arbeitet am liebsten zu Hause.",
       "loesung": false,
       "stelle": "gehe ich jetzt freiwillig jeden Tag ins Büro",
       "erklaerung": "Er dürfte zu Hause arbeiten, geht aber freiwillig jeden Tag ins Büro."
      }
     ]
    },
    {
     "id": "th1s3",
     "titel": "Das Handy beim Essen — ja oder nein?",
     "aufgaben": [
      {
       "von": "Person 1 — Petra, 47",
       "wer": "Frau",
       "text": "Bei uns gibt es eine klare Regel: Beim Abendessen liegen alle Handys im Flur, auch meins. Am Anfang haben die Kinder protestiert, natürlich. Aber jetzt reden wir beim Essen wirklich miteinander, über die Schule, über Freunde, über alles Mögliche. Manchmal sitzen wir sogar länger am Tisch als früher. Ich würde diese Regel nie wieder abschaffen.",
       "satz": "Petra findet die Handy-Regel in ihrer Familie gut.",
       "loesung": true,
       "stelle": "Ich würde diese Regel nie wieder abschaffen.",
       "erklaerung": "Die Kinder haben protestiert, aber Petra will die Regel auf jeden Fall behalten."
      },
      {
       "von": "Person 2 — Stefan, 33",
       "wer": "Mann",
       "text": "Also, ich sehe das nicht so streng. Wenn ich allein esse, schaue ich natürlich aufs Handy, lese Nachrichten oder schaue ein Video. Was soll ich sonst machen? Aber wenn ich mit meiner Freundin oder mit Freunden im Restaurant bin, bleibt es in der Tasche. Das ist für mich einfach eine Frage der Höflichkeit.",
       "satz": "Stefan benutzt sein Handy beim Essen nie.",
       "loesung": false,
       "stelle": "schaue ich natürlich aufs Handy",
       "erklaerung": "Nur mit anderen bleibt es in der Tasche. Allein benutzt er es."
      },
      {
       "von": "Person 3 — Ana, 29",
       "wer": "Frau",
       "text": "Ich muss ehrlich sein: Ich bin da selbst nicht besonders gut. Neulich war ich mit meiner Mutter essen, und sie hat irgendwann gesagt: Du hast mich heute kaum angesehen. Das hat mich echt getroffen. Seitdem schalte ich das Handy auf lautlos und lege es umgedreht hin, wenn ich mit jemandem esse. Es klappt noch nicht immer, aber ich gebe mir Mühe.",
       "satz": "Ana hat nach einem Erlebnis ihr Verhalten geändert.",
       "loesung": true,
       "stelle": "Seitdem schalte ich das Handy auf lautlos",
       "erklaerung": "Der Satz ihrer Mutter war der Auslöser. „Seitdem\" zeigt die Veränderung."
      },
      {
       "von": "Person 4 — Rolf, 63",
       "wer": "Mann",
       "text": "Na ja, ich verstehe die ganze Aufregung nicht. Früher hat mein Vater beim Frühstück immer hinter der Zeitung gesessen, und keiner hat sich beschwert. Heute ist es eben das Handy. Ich finde, man sollte das nicht so dramatisch sehen. Wichtig ist doch, dass man sich überhaupt noch gemeinsam zum Essen zusammensetzt.",
       "satz": "Rolf findet Handys beim Essen ein großes Problem.",
       "loesung": false,
       "stelle": "man sollte das nicht so dramatisch sehen",
       "erklaerung": "Er vergleicht das Handy mit der Zeitung von früher und sieht kein großes Problem."
      },
      {
       "von": "Person 5 — Miriam, 40",
       "wer": "Frau",
       "text": "Ich arbeite als Ärztin und habe oft Bereitschaftsdienst. Dann muss mein Handy auch beim Essen auf dem Tisch liegen, das geht nicht anders. Meine Familie weiß das und hat Verständnis. Aber an freien Tagen mache ich es ganz bewusst aus. Ich finde, man muss einfach klar zwischen Arbeit und Privatleben unterscheiden.",
       "satz": "Miriam hat ihr Handy beim Essen nur aus beruflichen Gründen dabei.",
       "loesung": true,
       "stelle": "an freien Tagen mache ich es ganz bewusst aus",
       "erklaerung": "Nur beim Bereitschaftsdienst liegt es auf dem Tisch, an freien Tagen ist es aus."
      }
     ]
    }
   ]
  },
  {
   "nr": 2,
   "art": "interview",
   "name": "Hörverstehen: Interview",
   "kurz": "Ein Radiointerview, zehn Aussagen — zweimal hören",
   "was": "Du hörst ein Interview aus dem Radio in Abschnitten. Zu jedem Abschnitt gibt es eine Aussage: richtig oder falsch? Du darfst zweimal hören.",
   "tipp": "Die Aussagen kommen in der Reihenfolge des Interviews. Achte auf „früher — heute\", „eigentlich\" und „nicht mehr\": dort liegen die Fallen.",
   "zeichen": "🎤",
   "farbe": "gold",
   "punkte": 10,
   "mal": 2,
   "runden": [
    {
     "id": "th2s1",
     "titel": "Im Gespräch: Ein Sportverein im Wandel (Sendung „Menschen aus der Region\" auf Radio Talwelle)",
     "aufgaben": [
      {
       "ort": "Radiointerview — Abschnitt 1",
       "zeilen": [
        {
         "wer": "Frau",
         "text": "Guten Abend und herzlich willkommen bei „Menschen aus der Region\". Heute ist Holger Brandt bei mir im Studio. Er leitet seit elf Jahren den Sportverein Blau-Weiß Grünau. Herr Brandt, schön, dass Sie da sind."
        },
        {
         "wer": "Mann",
         "text": "Danke für die Einladung. Ich muss aber gleich etwas korrigieren: Vorsitzender bin ich erst seit drei Jahren. Vorher war ich lange Jugendtrainer im Verein, fast zehn Jahre bei den Fußballmädchen."
        }
       ],
       "satz": "Herr Brandt leitet den Verein seit elf Jahren.",
       "loesung": false,
       "stelle": "Vorsitzender bin ich erst seit drei Jahren",
       "erklaerung": "Die Moderatorin sagt elf Jahre, aber er korrigiert sie: Vorsitzender ist er erst seit drei Jahren."
      },
      {
       "ort": "Radiointerview — Abschnitt 2",
       "zeilen": [
        {
         "wer": "Frau",
         "text": "Wie viele Mitglieder hat Ihr Verein denn?"
        },
        {
         "wer": "Mann",
         "text": "Im Moment knapp neunhundert. Vor fünf Jahren waren es noch über tausend."
        },
        {
         "wer": "Frau",
         "text": "Warum sind es weniger geworden?"
        },
        {
         "wer": "Mann",
         "text": "Viele Jugendliche ziehen nach der Schule zum Studium weg. Und unsere Schwimmhalle war fast zwei Jahre geschlossen. In der Zeit sind leider viele Schwimmer zu anderen Vereinen gegangen."
        }
       ],
       "satz": "Der Verein hat heute weniger Mitglieder als früher.",
       "loesung": true,
       "stelle": "Vor fünf Jahren waren es noch über tausend",
       "erklaerung": "Knapp neunhundert heute, früher über tausend — die Zahl ist also gesunken."
      },
      {
       "ort": "Radiointerview — Abschnitt 3",
       "zeilen": [
        {
         "wer": "Frau",
         "text": "Welche Sportarten kann man bei Ihnen machen?"
        },
        {
         "wer": "Mann",
         "text": "Fußball natürlich, Handball, Turnen und Tischtennis. Und seit letztem Herbst haben wir eine Gruppe für Nordic Walking. Die ist vor allem bei älteren Mitgliedern sehr beliebt. Da treffen sich jeden Mittwoch über dreißig Leute am Waldparkplatz."
        }
       ],
       "satz": "Die Nordic-Walking-Gruppe gibt es schon seit vielen Jahren.",
       "loesung": false,
       "stelle": "seit letztem Herbst haben wir eine Gruppe für Nordic Walking",
       "erklaerung": "„Seit letztem Herbst\" heißt: Die Gruppe ist ganz neu."
      },
      {
       "ort": "Radiointerview — Abschnitt 4",
       "zeilen": [
        {
         "wer": "Frau",
         "text": "Wer arbeitet denn im Verein mit? Gibt es Angestellte?"
        },
        {
         "wer": "Mann",
         "text": "Nur eine Kollegin im Büro, halbtags. Alle anderen machen das ehrenamtlich, also in ihrer Freizeit und ohne Geld. Die Trainer bekommen höchstens eine kleine Aufwandsentschädigung. Ohne diese Menschen gäbe es den Verein gar nicht."
        }
       ],
       "satz": "Die meisten Leute im Verein arbeiten ohne Bezahlung.",
       "loesung": true,
       "stelle": "Alle anderen machen das ehrenamtlich",
       "erklaerung": "Ehrenamtlich bedeutet ohne Geld — nur eine Person im Büro ist angestellt."
      },
      {
       "ort": "Radiointerview — Abschnitt 5",
       "zeilen": [
        {
         "wer": "Frau",
         "text": "Ist es schwer, solche Leute zu finden?"
        },
        {
         "wer": "Mann",
         "text": "Leider ja. Früher haben sich die Eltern sofort gemeldet, wenn eine Mannschaft einen Trainer gebraucht hat. Heute haben viele Familien einfach weniger Zeit."
        },
        {
         "wer": "Frau",
         "text": "Und was machen Sie dann?"
        },
        {
         "wer": "Mann",
         "text": "Wir sprechen die Leute direkt an. Ein Aushang am Schwarzen Brett bringt fast nichts."
        }
       ],
       "satz": "Neue Helfer findet der Verein vor allem über Aushänge.",
       "loesung": false,
       "stelle": "Ein Aushang am Schwarzen Brett bringt fast nichts",
       "erklaerung": "Das Wort Aushang kommt vor, aber er sagt: Das bringt fast nichts. Sie sprechen die Leute direkt an."
      },
      {
       "ort": "Radiointerview — Abschnitt 6",
       "zeilen": [
        {
         "wer": "Frau",
         "text": "Sie haben auch ein Angebot für Kinder aus Familien mit wenig Geld, richtig?"
        },
        {
         "wer": "Mann",
         "text": "Genau. Wer Unterstützung vom Amt bekommt, zahlt für die Kinder keinen Mitgliedsbeitrag. Das übernimmt die Stadt für uns. Die Eltern müssen nur einmal im Jahr einen Nachweis im Büro abgeben."
        }
       ],
       "satz": "Alle Kinder im Verein zahlen keinen Beitrag.",
       "loesung": false,
       "stelle": "Wer Unterstützung vom Amt bekommt",
       "erklaerung": "Kostenlos ist es nur für Familien mit Unterstützung vom Amt, nicht für alle Kinder."
      },
      {
       "ort": "Radiointerview — Abschnitt 7",
       "zeilen": [
        {
         "wer": "Frau",
         "text": "Was war für Sie der schönste Moment als Vorsitzender?"
        },
        {
         "wer": "Mann",
         "text": "Ehrlich gesagt kein Pokal. Letzten Sommer haben wir ein Sportfest für das ganze Viertel organisiert, mit über zweitausend Besuchern. Da haben Leute zusammen gefeiert, die sich sonst nie begegnen. Die Großeltern haben Kuchen gebacken, und die Jugendlichen haben Musik gemacht."
        }
       ],
       "satz": "Beim Sportfest haben sich Menschen getroffen, die sich sonst nicht sehen.",
       "loesung": true,
       "stelle": "die sich sonst nie begegnen",
       "erklaerung": "„Sich begegnen\" ist eine Umschreibung für sich treffen oder sehen."
      },
      {
       "ort": "Radiointerview — Abschnitt 8",
       "zeilen": [
        {
         "wer": "Frau",
         "text": "Gibt es auch Probleme mit der Stadt, zum Beispiel bei den Sportplätzen?"
        },
        {
         "wer": "Mann",
         "text": "Die Zusammenarbeit ist eigentlich gut. Aber unsere Turnhalle ist über fünfzig Jahre alt, und das Dach ist undicht. Die Stadt hat versprochen, es nächstes Jahr zu reparieren."
        }
       ],
       "satz": "Die Turnhalle soll repariert werden.",
       "loesung": true,
       "stelle": "Die Stadt hat versprochen, es nächstes Jahr zu reparieren",
       "erklaerung": "Das undichte Dach der Turnhalle wird nächstes Jahr repariert — das hat die Stadt versprochen."
      },
      {
       "ort": "Radiointerview — Abschnitt 9",
       "zeilen": [
        {
         "wer": "Frau",
         "text": "Was wünschen Sie sich für die Zukunft des Vereins?"
        },
        {
         "wer": "Mann",
         "text": "Mehr junge Leute im Vorstand. Im Moment sind wir fast alle über fünfzig. Wer jetzt mitmacht, kann viel verändern, zum Beispiel mit einer Anmeldung über das Internet. Bei uns läuft noch fast alles auf Papier."
        }
       ],
       "satz": "Im Vorstand sind schon viele junge Leute.",
       "loesung": false,
       "stelle": "Im Moment sind wir fast alle über fünfzig",
       "erklaerung": "Junge Leute im Vorstand sind ein Wunsch, keine Realität."
      },
      {
       "ort": "Radiointerview — Abschnitt 10",
       "zeilen": [
        {
         "wer": "Frau",
         "text": "Und wenn jemand bei Ihnen einfach mal mitmachen möchte?"
        },
        {
         "wer": "Mann",
         "text": "Dann kommt man einfach zu einem Training. Die ersten vier Wochen sind kostenlos, man muss sich nicht vorher anmelden."
        },
        {
         "wer": "Frau",
         "text": "Herr Brandt, vielen Dank für das Gespräch und alles Gute für Ihren Verein."
        },
        {
         "wer": "Mann",
         "text": "Ich danke Ihnen. Einen schönen Abend noch!"
        }
       ],
       "satz": "Man kann einige Wochen kostenlos am Training teilnehmen.",
       "loesung": true,
       "stelle": "Die ersten vier Wochen sind kostenlos",
       "erklaerung": "Vier Wochen ohne Kosten und ohne Anmeldung — die Aussage stimmt."
      }
     ]
    },
    {
     "id": "th2s2",
     "titel": "Im Gespräch: Einkaufen ohne Verpackung (Sendung „Neues aus der Stadt\" auf Radio Lindenfeld)",
     "aufgaben": [
      {
       "ort": "Radiointerview — Abschnitt 1",
       "zeilen": [
        {
         "wer": "Mann",
         "text": "Hallo und guten Morgen! Bei uns im Studio sitzt heute Selin Arslan. Sie hat vor zwei Jahren in der Altstadt einen Unverpackt-Laden eröffnet. Herzlich willkommen!"
        },
        {
         "wer": "Frau",
         "text": "Guten Morgen, danke. Ganz kurz: Der Laden war am Anfang gar nicht in der Altstadt, sondern in einem kleinen Raum am Bahnhof. In die Altstadt sind wir erst letzten Frühling umgezogen, weil der alte Raum einfach zu klein war."
        }
       ],
       "satz": "Der Laden war von Anfang an in der Altstadt.",
       "loesung": false,
       "stelle": "Der Laden war am Anfang gar nicht in der Altstadt",
       "erklaerung": "Zuerst war der Laden am Bahnhof, erst letzten Frühling ist er umgezogen."
      },
      {
       "ort": "Radiointerview — Abschnitt 2",
       "zeilen": [
        {
         "wer": "Mann",
         "text": "Für alle, die das nicht kennen: Was ist ein Unverpackt-Laden?"
        },
        {
         "wer": "Frau",
         "text": "Bei uns gibt es Lebensmittel ohne Plastikverpackung. Ganz ohne Plastik ist es nicht, aber fast. Die Kunden bringen eigene Gläser oder Dosen mit, füllen Nudeln, Reis oder Müsli ab und zahlen nach Gewicht."
        }
       ],
       "satz": "Die Kunden bezahlen nach dem Gewicht der Ware.",
       "loesung": true,
       "stelle": "füllen Nudeln, Reis oder Müsli ab und zahlen nach Gewicht",
       "erklaerung": "Man füllt selbst ab und bezahlt so viel, wie die Ware wiegt."
      },
      {
       "ort": "Radiointerview — Abschnitt 3",
       "zeilen": [
        {
         "wer": "Mann",
         "text": "Und wenn ich meine Dose zu Hause vergessen habe?"
        },
        {
         "wer": "Frau",
         "text": "Kein Problem. Wir haben gebrauchte Gläser, die uns Kunden geschenkt haben. Die kann man kostenlos mitnehmen. Papiertüten gibt es auch, aber die kosten zehn Cent. Die meisten Stammkunden haben ihre Behälter aber immer dabei."
        }
       ],
       "satz": "Wer kein Gefäß dabeihat, muss für ein Glas bezahlen.",
       "loesung": false,
       "stelle": "Die kann man kostenlos mitnehmen",
       "erklaerung": "Nur die Papiertüten kosten etwas, die Gläser sind kostenlos."
      },
      {
       "ort": "Radiointerview — Abschnitt 4",
       "zeilen": [
        {
         "wer": "Mann",
         "text": "Wie sind Sie eigentlich auf die Idee gekommen?"
        },
        {
         "wer": "Frau",
         "text": "Ich habe zehn Jahre als Bürokauffrau gearbeitet. Nach der Geburt meiner Tochter habe ich gemerkt, wie viel Müll wir jede Woche wegwerfen. Da wollte ich etwas ändern. Erst habe ich nur zu Hause angefangen, und irgendwann war die Idee für den Laden da."
        }
       ],
       "satz": "Die Idee kam ihr, nachdem sie Mutter geworden war.",
       "loesung": true,
       "stelle": "Nach der Geburt meiner Tochter habe ich gemerkt",
       "erklaerung": "Nach der Geburt ihrer Tochter hat sie den vielen Müll bemerkt."
      },
      {
       "ort": "Radiointerview — Abschnitt 5",
       "zeilen": [
        {
         "wer": "Mann",
         "text": "Sind Ihre Produkte nicht teurer als im Supermarkt?"
        },
        {
         "wer": "Frau",
         "text": "Manche ja, zum Beispiel Kaffee oder Olivenöl. Aber Grundnahrungsmittel wie Haferflocken oder Linsen sind oft sogar günstiger, weil man genau die Menge kauft, die man braucht. Und man wirft am Ende weniger weg."
        }
       ],
       "satz": "Alle Produkte sind teurer als im Supermarkt.",
       "loesung": false,
       "stelle": "sind oft sogar günstiger",
       "erklaerung": "Nur manche Produkte sind teurer — Achtung bei „alle\"."
      },
      {
       "ort": "Radiointerview — Abschnitt 6",
       "zeilen": [
        {
         "wer": "Mann",
         "text": "Woher bekommen Sie die Waren?"
        },
        {
         "wer": "Frau",
         "text": "Möglichst aus der Region. Mehl und Eier kommen von einem Hof, der nur fünfzehn Kilometer entfernt ist. Der Bauer bringt sie jeden Dienstag selbst vorbei. Nur Kaffee, Reis und Gewürze kommen natürlich von weiter weg."
        }
       ],
       "satz": "Ein Bauer liefert einmal pro Woche Mehl und Eier.",
       "loesung": true,
       "stelle": "Der Bauer bringt sie jeden Dienstag selbst vorbei",
       "erklaerung": "Jeden Dienstag bedeutet einmal pro Woche."
      },
      {
       "ort": "Radiointerview — Abschnitt 7",
       "zeilen": [
        {
         "wer": "Mann",
         "text": "Wer sind Ihre Kunden? Vor allem junge Leute?"
        },
        {
         "wer": "Frau",
         "text": "Das dachte ich am Anfang auch. Aber ehrlich gesagt kommen sehr viele ältere Menschen. Die sagen oft: So haben wir früher auch eingekauft, beim Kaufmann um die Ecke. Und sie haben Zeit für ein kleines Gespräch an der Kasse."
        }
       ],
       "satz": "Viele Kunden kennen diese Art einzukaufen von früher.",
       "loesung": true,
       "stelle": "So haben wir früher auch eingekauft",
       "erklaerung": "Die älteren Kunden erinnert der Laden an den Kaufmann von früher."
      },
      {
       "ort": "Radiointerview — Abschnitt 8",
       "zeilen": [
        {
         "wer": "Mann",
         "text": "Arbeiten Sie allein im Laden?"
        },
        {
         "wer": "Frau",
         "text": "Nein, zum Glück nicht. Ich habe zwei Teilzeitkräfte, und samstags hilft mein Bruder mit. Allein würde ich das nicht schaffen, der Laden ist sechs Tage pro Woche offen. Nur am Montag bleibt die Tür zu, dann mache ich die Bestellungen und die Buchhaltung."
        }
       ],
       "satz": "Frau Arslan führt den Laden ohne Hilfe.",
       "loesung": false,
       "stelle": "Ich habe zwei Teilzeitkräfte",
       "erklaerung": "Zwei Teilzeitkräfte und samstags ihr Bruder helfen ihr."
      },
      {
       "ort": "Radiointerview — Abschnitt 9",
       "zeilen": [
        {
         "wer": "Mann",
         "text": "Was planen Sie als Nächstes?"
        },
        {
         "wer": "Frau",
         "text": "Ab Januar wollen wir auch liefern, mit einem Lastenrad. Das ist besonders für Leute gedacht, die nicht mehr gut laufen können. Man soll ganz einfach per Telefon bestellen können."
        }
       ],
       "satz": "Der Laden möchte bald Waren nach Hause bringen.",
       "loesung": true,
       "stelle": "Ab Januar wollen wir auch liefern",
       "erklaerung": "Liefern heißt: Die Waren werden zu den Kunden gebracht."
      },
      {
       "ort": "Radiointerview — Abschnitt 10",
       "zeilen": [
        {
         "wer": "Mann",
         "text": "Haben Sie zum Schluss noch einen Tipp für unsere Hörer, die weniger Müll machen wollen?"
        },
        {
         "wer": "Frau",
         "text": "Nicht alles auf einmal ändern. Fangen Sie mit einer Sache an, zum Beispiel mit einer Brotdose für die Arbeit."
        },
        {
         "wer": "Mann",
         "text": "Ein guter Rat. Frau Arslan, vielen Dank und weiterhin viel Erfolg!"
        },
        {
         "wer": "Frau",
         "text": "Danke, tschüss!"
        }
       ],
       "satz": "Frau Arslan rät, sofort alle Gewohnheiten zu ändern.",
       "loesung": false,
       "stelle": "Nicht alles auf einmal ändern",
       "erklaerung": "Sie rät genau das Gegenteil: mit einer einzigen Sache anfangen."
      }
     ]
    },
    {
     "id": "th2s3",
     "titel": "Im Gespräch: Wach, wenn andere schlafen (Sendung „Spät am Abend\" auf Radio Rheinau)",
     "aufgaben": [
      {
       "ort": "Radiointerview — Abschnitt 1",
       "zeilen": [
        {
         "wer": "Frau",
         "text": "Einen schönen guten Abend! Mein Gast heute arbeitet, wenn die meisten von uns schlafen: Daniel Kowalski ist Krankenpfleger und macht seit sieben Jahren nur Nachtdienst."
        },
        {
         "wer": "Mann",
         "text": "Hallo, guten Abend. Nur Nachtdienst stimmt fast. Ungefähr einmal im Monat mache ich auch einen Tagdienst, damit ich den Kontakt zu den Kollegen nicht verliere. Sonst kenne ich irgendwann niemanden mehr auf der Station."
        }
       ],
       "satz": "Herr Kowalski arbeitet ausschließlich nachts.",
       "loesung": false,
       "stelle": "Ungefähr einmal im Monat mache ich auch einen Tagdienst",
       "erklaerung": "„Stimmt fast\" ist das Signal: Einmal im Monat arbeitet er auch am Tag."
      },
      {
       "ort": "Radiointerview — Abschnitt 2",
       "zeilen": [
        {
         "wer": "Frau",
         "text": "Wie sieht so eine Nacht bei Ihnen aus?"
        },
        {
         "wer": "Mann",
         "text": "Ich fange um einundzwanzig Uhr an und höre um sechs Uhr dreißig auf. Am Anfang bekomme ich von der Spätschicht alle Informationen über die Patienten. Danach mache ich meine erste Runde durch die Zimmer."
        }
       ],
       "satz": "Zu Beginn der Schicht bekommt er Informationen von Kollegen.",
       "loesung": true,
       "stelle": "bekomme ich von der Spätschicht alle Informationen",
       "erklaerung": "Die Spätschicht sind die Kollegen vor ihm — von ihnen bekommt er die Informationen."
      },
      {
       "ort": "Radiointerview — Abschnitt 3",
       "zeilen": [
        {
         "wer": "Frau",
         "text": "Wie viele Patienten betreuen Sie in einer Nacht?"
        },
        {
         "wer": "Mann",
         "text": "Auf unserer Station sind es meistens achtundzwanzig. Wir sind nachts zu zweit, eine Kollegin und ich. Am Tag sind es fünf oder sechs Pflegekräfte. Wenn nachts ein Notfall kommt, rufen wir den Arzt aus dem Bereitschaftsdienst."
        }
       ],
       "satz": "Nachts arbeiten genauso viele Pflegekräfte wie am Tag.",
       "loesung": false,
       "stelle": "Wir sind nachts zu zweit",
       "erklaerung": "Nachts zwei, am Tag fünf oder sechs — es sind also viel weniger."
      },
      {
       "ort": "Radiointerview — Abschnitt 4",
       "zeilen": [
        {
         "wer": "Frau",
         "text": "Ist es nachts im Krankenhaus nicht eigentlich ruhig?"
        },
        {
         "wer": "Mann",
         "text": "Das glauben viele. Aber gerade ältere Patienten sind nachts oft unruhig, manche wissen nicht mehr, wo sie sind. Dann setze ich mich zu ihnen und rede ein bisschen. Das hilft oft mehr als jedes Medikament."
        }
       ],
       "satz": "Gespräche helfen unruhigen Patienten oft sehr.",
       "loesung": true,
       "stelle": "Das hilft oft mehr als jedes Medikament",
       "erklaerung": "Reden hilft laut ihm oft mehr als ein Medikament."
      },
      {
       "ort": "Radiointerview — Abschnitt 5",
       "zeilen": [
        {
         "wer": "Frau",
         "text": "Wie schaffen Sie es, tagsüber zu schlafen?"
        },
        {
         "wer": "Mann",
         "text": "Ich habe gute Vorhänge, die das Zimmer ganz dunkel machen, und ich schalte das Handy aus. Am schwierigsten ist es im Sommer, wenn die Nachbarn im Garten grillen."
        }
       ],
       "satz": "Im Winter kann er am schlechtesten schlafen.",
       "loesung": false,
       "stelle": "Am schwierigsten ist es im Sommer",
       "erklaerung": "Nicht im Winter, sondern im Sommer stören ihn die grillenden Nachbarn."
      },
      {
       "ort": "Radiointerview — Abschnitt 6",
       "zeilen": [
        {
         "wer": "Frau",
         "text": "Und Ihre Familie? Ihr Rhythmus ist ja ganz anders."
        },
        {
         "wer": "Mann",
         "text": "Meine Frau arbeitet als Lehrerin, also tagsüber. Wir sehen uns vor allem am Nachmittag und am Wochenende. Das Frühstück am Sonntag ist uns heilig, das lassen wir nie ausfallen. Da gibt es frische Brötchen, und das Telefon bleibt aus."
        }
       ],
       "satz": "Seine Frau arbeitet auch im Krankenhaus.",
       "loesung": false,
       "stelle": "Meine Frau arbeitet als Lehrerin",
       "erklaerung": "Seine Frau ist Lehrerin und arbeitet am Tag, nicht im Krankenhaus."
      },
      {
       "ort": "Radiointerview — Abschnitt 7",
       "zeilen": [
        {
         "wer": "Frau",
         "text": "Warum machen Sie eigentlich freiwillig fast nur Nachtdienst?"
        },
        {
         "wer": "Mann",
         "text": "Zum einen gibt es Zuschläge, also mehr Geld pro Stunde. Aber das ist nicht der Hauptgrund. Nachts habe ich mehr Zeit für die einzelnen Patienten, es gibt keine Visiten und weniger Telefonate. So kann ich mich wirklich um die Menschen kümmern."
        }
       ],
       "satz": "Er macht Nachtdienst vor allem wegen des Geldes.",
       "loesung": false,
       "stelle": "Aber das ist nicht der Hauptgrund",
       "erklaerung": "Das Geld nennt er, aber der wichtigste Grund ist die Zeit für die Patienten."
      },
      {
       "ort": "Radiointerview — Abschnitt 8",
       "zeilen": [
        {
         "wer": "Frau",
         "text": "Gab es eine Nacht, die Sie nie vergessen werden?"
        },
        {
         "wer": "Mann",
         "text": "Ja. Einmal hat mir eine alte Dame nachts erzählt, dass sie ihren Sohn seit zwanzig Jahren nicht gesehen hat. Ich habe am nächsten Tag mit dem Sozialdienst gesprochen, und zwei Wochen später stand der Sohn an ihrem Bett."
        }
       ],
       "satz": "Die Patientin hat ihren Sohn im Krankenhaus wiedergesehen.",
       "loesung": true,
       "stelle": "zwei Wochen später stand der Sohn an ihrem Bett",
       "erklaerung": "Der Sohn kam ins Krankenhaus an ihr Bett — die Aussage stimmt."
      },
      {
       "ort": "Radiointerview — Abschnitt 9",
       "zeilen": [
        {
         "wer": "Frau",
         "text": "Viele sagen, die Pflege ist zu anstrengend. Würden Sie jungen Leuten den Beruf trotzdem empfehlen?"
        },
        {
         "wer": "Mann",
         "text": "Auf jeden Fall, aber man muss ehrlich sein. Es ist körperlich hart, und man muss mit dem Tod umgehen können. Wer das kann, bekommt aber sehr viel zurück. Ein Dankeschön von einem Patienten am Morgen ist für mich mehr wert als jeder Zuschlag."
        }
       ],
       "satz": "Er findet, man sollte auch über die schweren Seiten des Berufs sprechen.",
       "loesung": true,
       "stelle": "Auf jeden Fall, aber man muss ehrlich sein",
       "erklaerung": "Er empfiehlt den Beruf, nennt aber offen die harten Seiten."
      },
      {
       "ort": "Radiointerview — Abschnitt 10",
       "zeilen": [
        {
         "wer": "Frau",
         "text": "Herr Kowalski, Sie müssen gleich los, Ihr Dienst beginnt bald, oder?"
        },
        {
         "wer": "Mann",
         "text": "Genau, heute fange ich ausnahmsweise schon um zwanzig Uhr an, eine Kollegin ist krank."
        },
        {
         "wer": "Frau",
         "text": "Dann wünsche ich Ihnen eine ruhige Nacht. Vielen Dank, dass Sie da waren!"
        },
        {
         "wer": "Mann",
         "text": "Sehr gern. Gute Nacht!"
        }
       ],
       "satz": "Heute beginnt sein Dienst früher als sonst.",
       "loesung": true,
       "stelle": "heute fange ich ausnahmsweise schon um zwanzig Uhr an",
       "erklaerung": "Normal beginnt er um einundzwanzig Uhr, heute schon um zwanzig Uhr."
      }
     ]
    }
   ]
  },
  {
   "nr": 3,
   "art": "durchsage",
   "name": "Hörverstehen: Ansagen",
   "kurz": "Fünf kurze Ansagen — zweimal hören",
   "was": "Du hörst fünf kurze Texte: Durchsagen, Wetter, Verkehr, Anrufbeantworter, Werbung. Zu jedem Text eine Aussage: richtig oder falsch?",
   "tipp": "Lies die Aussage vor dem Hören und achte genau auf das eine Detail: Uhrzeit, Gleis, Preis, Tag. Oft wird es im Text noch korrigiert.",
   "zeichen": "📢",
   "farbe": "rot",
   "punkte": 5,
   "mal": 2,
   "runden": [
    {
     "id": "th3s1",
     "titel": "Fünf kurze Ansagen",
     "aufgaben": [
      {
       "von": "Durchsage im Hauptbahnhof",
       "wer": "Mann",
       "text": "Achtung am Gleis zwölf. Der Regionalexpress nach Bad Lindenau, planmäßige Abfahrt vierzehn Uhr zwanzig, fährt heute nicht von Gleis zwölf, sondern von Gleis fünfzehn. Bitte beachten Sie den Gleiswechsel. Der Zug hat außerdem etwa zehn Minuten Verspätung. Wir bitten um Ihr Verständnis.",
       "satz": "Der Zug nach Bad Lindenau fährt heute von Gleis zwölf ab.",
       "loesung": false,
       "stelle": "sondern von Gleis fünfzehn",
       "erklaerung": "„nicht von Gleis zwölf, sondern von Gleis fünfzehn\": Das neue Gleis kommt nach „sondern\"."
      },
      {
       "von": "Wetterbericht im Radio",
       "wer": "Frau",
       "text": "Und nun das Wetter für morgen. Am Vormittag ist es noch bewölkt, aber trocken. Ab dem Nachmittag zieht von Westen Regen auf, am Abend sind auch Gewitter möglich. Die Temperaturen liegen bei höchstens einundzwanzig Grad. Am Wochenende wird es dann wieder sonnig und deutlich wärmer.",
       "satz": "Morgen regnet es schon am Vormittag.",
       "loesung": false,
       "stelle": "ist es noch bewölkt, aber trocken",
       "erklaerung": "Der Regen kommt erst ab dem Nachmittag. Am Vormittag bleibt es trocken."
      },
      {
       "von": "Anrufbeantworter einer Arztpraxis",
       "wer": "Frau",
       "text": "Guten Tag, Sie sind verbunden mit der Praxis Doktor Brenner. Unsere Praxis ist vom zweiten bis zum neunten August wegen Urlaub geschlossen. In dringenden Fällen wenden Sie sich bitte an unsere Vertretung, die Praxis Doktor Kaya in der Lindenstraße. Ab dem zehnten August sind wir wieder zu den gewohnten Zeiten für Sie da.",
       "satz": "Bei dringenden Problemen soll man zur Praxis Doktor Kaya gehen.",
       "loesung": true,
       "stelle": "an unsere Vertretung, die Praxis Doktor Kaya",
       "erklaerung": "Die Vertretung während des Urlaubs ist die Praxis Doktor Kaya."
      },
      {
       "von": "Werbung im Supermarkt",
       "wer": "Mann",
       "text": "Liebe Kunden, nur heute in unserer Obstabteilung: frische Erdbeeren aus der Region, die Schale für nur zwei Euro neunundvierzig statt drei Euro neunundneunzig. Und an unserer Käsetheke erhalten Sie bis achtzehn Uhr auf alle Bergkäsesorten zwanzig Prozent Rabatt. Wir wünschen Ihnen einen angenehmen Einkauf.",
       "satz": "Die Erdbeeren kosten heute zwei Euro neunundvierzig.",
       "loesung": true,
       "stelle": "die Schale für nur zwei Euro neunundvierzig",
       "erklaerung": "Der Preis nach „statt\" ist der alte Preis. Heute zahlt man zwei Euro neunundvierzig."
      },
      {
       "von": "Verkehrsfunk im Radio",
       "wer": "Frau",
       "text": "Und jetzt der Verkehr. Auf der Autobahn sieben zwischen Nordheim und Waldau ist nach einem Unfall die rechte Spur gesperrt. Es staut sich auf etwa sechs Kilometern. Wer in Richtung Süden unterwegs ist, sollte schon in Nordheim abfahren und die Umleitung über die Bundesstraße nehmen.",
       "satz": "Autofahrer sollen erst nach Waldau von der Autobahn abfahren.",
       "loesung": false,
       "stelle": "sollte schon in Nordheim abfahren",
       "erklaerung": "„schon in Nordheim\", also vor dem Stau. Nicht „erst nach Waldau\"."
      }
     ]
    },
    {
     "id": "th3s2",
     "titel": "Fünf kurze Ansagen",
     "aufgaben": [
      {
       "von": "Durchsage am Flughafen",
       "wer": "Frau",
       "text": "Information für die Passagiere des Fluges nach Lissabon. Ihr Flug wird heute nicht von Ausgang B sieben, sondern von Ausgang C zwölf abgefertigt. Das Boarding beginnt um sechzehn Uhr fünfzehn. Bitte halten Sie Ihre Bordkarte und Ihren Ausweis bereit. Wir wünschen Ihnen einen angenehmen Flug.",
       "satz": "Die Passagiere nach Lissabon müssen zu Ausgang C zwölf gehen.",
       "loesung": true,
       "stelle": "sondern von Ausgang C zwölf",
       "erklaerung": "Ausgang B sieben ist der alte Ausgang. Nach „sondern\" kommt der neue."
      },
      {
       "von": "Kinoprogramm vom Band",
       "wer": "Mann",
       "text": "Willkommen beim Kino am Markt. Heute Abend zeigen wir um achtzehn Uhr die Komödie „Ein Sommer in Rom\" und um zwanzig Uhr dreißig den Thriller „Die letzte Spur\". Bitte beachten Sie: Am Montag ist Kinotag, dann kosten alle Karten nur sechs Euro fünfzig. Karten können Sie auch online reservieren.",
       "satz": "Der Thriller beginnt um achtzehn Uhr.",
       "loesung": false,
       "stelle": "um zwanzig Uhr dreißig den Thriller",
       "erklaerung": "Um achtzehn Uhr läuft die Komödie. Der Thriller beginnt um zwanzig Uhr dreißig."
      },
      {
       "von": "Anrufbeantworter einer Firma",
       "wer": "Frau",
       "text": "Herzlich willkommen bei Heizungsbau Kröger. Leider rufen Sie außerhalb unserer Geschäftszeiten an. Sie erreichen uns montags bis freitags von sieben bis sechzehn Uhr. Bei einem Heizungsausfall am Wochenende wählen Sie bitte unseren Notdienst unter null eins sieben null, zwei drei vier, fünf sechs sieben.",
       "satz": "Am Wochenende ist die Firma nicht erreichbar.",
       "loesung": false,
       "stelle": "wählen Sie bitte unseren Notdienst",
       "erklaerung": "Das Büro ist geschlossen, aber am Wochenende gibt es einen Notdienst."
      },
      {
       "von": "Wegbeschreibung auf der Mailbox",
       "wer": "Mann",
       "text": "Hallo Frau Okafor, hier ist Herr Lindner vom Sportverein. Sie wollten wissen, wie Sie zur neuen Turnhalle kommen. Nehmen Sie den Bus Linie vierzehn bis zur Haltestelle Schillerplatz. Dann gehen Sie nicht geradeaus, sondern links in die Gartenstraße. Die Halle ist das große graue Gebäude hinter der Schule.",
       "satz": "Von der Haltestelle soll Frau Okafor geradeaus gehen.",
       "loesung": false,
       "stelle": "sondern links in die Gartenstraße",
       "erklaerung": "„nicht geradeaus, sondern links\": Die Richtung nach „sondern\" zählt."
      },
      {
       "von": "Werbung im Radio",
       "wer": "Frau",
       "text": "Ihr Fahrrad braucht eine Pause? Dann kommen Sie zu Radhaus Petersen! Im März machen wir Ihr Rad fit für den Frühling: die Inspektion für nur neununddreißig Euro statt sonst neunundfünfzig. Und wer bis Ende März einen Termin bucht, bekommt eine neue Fahrradklingel geschenkt.",
       "satz": "Die Inspektion kostet im März neununddreißig Euro.",
       "loesung": true,
       "stelle": "die Inspektion für nur neununddreißig Euro",
       "erklaerung": "Neunundfünfzig Euro ist der normale Preis, im März kostet sie neununddreißig."
      }
     ]
    },
    {
     "id": "th3s3",
     "titel": "Fünf kurze Ansagen",
     "aufgaben": [
      {
       "von": "Durchsage im Zug",
       "wer": "Mann",
       "text": "Sehr geehrte Fahrgäste, wegen einer Signalstörung endet dieser Zug heute bereits in Kirchberg. Für die Weiterfahrt nach Talheim steht ein Ersatzbus bereit. Sie finden ihn vor dem Bahnhofsgebäude, auf der rechten Seite. Die Fahrzeit verlängert sich um etwa zwanzig Minuten. Wir bitten um Entschuldigung.",
       "satz": "Der Zug fährt heute bis Talheim.",
       "loesung": false,
       "stelle": "endet dieser Zug heute bereits in Kirchberg",
       "erklaerung": "Der Zug endet in Kirchberg. Nach Talheim fährt man mit dem Ersatzbus."
      },
      {
       "von": "Veranstaltungstipp im Radio",
       "wer": "Frau",
       "text": "Am Samstag lädt die Stadtbibliothek zur langen Lesenacht ein. Von neunzehn Uhr bis Mitternacht lesen Autoren aus der Region aus ihren neuen Büchern. Der Eintritt ist frei, aber die Plätze sind begrenzt. Deshalb bittet die Bibliothek um eine Anmeldung bis Donnerstag, telefonisch oder direkt an der Information.",
       "satz": "Man muss sich für die Lesenacht vorher anmelden.",
       "loesung": true,
       "stelle": "bittet die Bibliothek um eine Anmeldung bis Donnerstag",
       "erklaerung": "Der Eintritt ist frei, aber wegen der wenigen Plätze braucht man eine Anmeldung."
      },
      {
       "von": "Wetterbericht im Radio",
       "wer": "Mann",
       "text": "Das Wetter für das Wochenende: Am Samstag bleibt es überwiegend sonnig bei bis zu sechsundzwanzig Grad, ideales Badewetter. Am Sonntag ändert sich das allerdings. Schon in der Nacht zieht ein Tief heran, der Sonntag wird kühl und regnerisch, mit Höchstwerten um siebzehn Grad.",
       "satz": "Am Sonntag ist das Wetter gut zum Baden.",
       "loesung": false,
       "stelle": "der Sonntag wird kühl und regnerisch",
       "erklaerung": "Badewetter gibt es nur am Samstag. Der Sonntag wird kühl und nass."
      },
      {
       "von": "Anrufbeantworter einer Behörde",
       "wer": "Frau",
       "text": "Hallo, hier ist das Bürgeramt Neustadt. Wegen einer Betriebsversammlung ist das Bürgeramt am kommenden Mittwoch erst ab zwölf Uhr geöffnet. Termine am Vormittag werden verschoben, Sie bekommen dazu eine E-Mail. Bitte kommen Sie nicht ohne Termin, wir können Sie sonst leider nicht bedienen.",
       "satz": "Am Mittwoch kann man am Vormittag ins Bürgeramt gehen.",
       "loesung": false,
       "stelle": "erst ab zwölf Uhr geöffnet",
       "erklaerung": "„erst ab zwölf Uhr\" heißt: am Vormittag ist geschlossen."
      },
      {
       "von": "Durchsage im Kaufhaus",
       "wer": "Mann",
       "text": "Liebe Kunden, wir schließen heute wegen einer Inventur bereits um achtzehn Uhr. Bitte gehen Sie mit Ihren Einkäufen rechtzeitig zu den Kassen im Erdgeschoss. Die Kassen im ersten Stock sind ab sofort geschlossen. Wir danken für Ihr Verständnis und wünschen Ihnen noch einen schönen Abend.",
       "satz": "Die Kunden sollen im Erdgeschoss bezahlen.",
       "loesung": true,
       "stelle": "zu den Kassen im Erdgeschoss",
       "erklaerung": "Die Kassen im ersten Stock sind zu. Bezahlen kann man nur im Erdgeschoss."
      }
     ]
    }
   ]
  }
 ],
 "laeufe": [
  {
   "id": "tb1hl1",
   "titel": "Prüfungslauf 1",
   "minuten": 30,
   "teile": [
    {
     "nr": 1,
     "art": "diskussion",
     "aufgaben": [
      {
       "von": "Person 1 — Thomas, 50",
       "wer": "Mann",
       "text": "Ich sitze den ganzen Tag im Büro, und mein Arzt hat gesagt, ich muss mich mehr bewegen. Ins Fitnessstudio gehe ich nicht, das ist nichts für mich. Aber ich fahre jetzt mit dem Fahrrad zur Arbeit, bei fast jedem Wetter. Am Anfang war das hart, aber inzwischen fühle ich mich viel fitter, und ich habe sogar ein paar Kilo abgenommen.",
       "satz": "Thomas hat Sport in seinen Arbeitsweg eingebaut.",
       "loesung": true,
       "stelle": "fahre jetzt mit dem Fahrrad zur Arbeit",
       "erklaerung": "Kein Fitnessstudio, aber das Fahrrad auf dem Weg zur Arbeit."
      },
      {
       "von": "Person 2 — Nadia, 35",
       "wer": "Frau",
       "text": "Also, ich habe es wirklich versucht. Ich habe mich im Fitnessstudio angemeldet, Laufschuhe gekauft, eine Sport-App installiert. Aber mit zwei Kindern und einem Job bleibt einfach keine Zeit. Na ja, ehrlich gesagt bezahle ich das Studio immer noch, obwohl ich seit Monaten nicht mehr dort war. Ich sollte endlich kündigen.",
       "satz": "Nadia geht regelmäßig ins Fitnessstudio.",
       "loesung": false,
       "stelle": "seit Monaten nicht mehr dort war",
       "erklaerung": "Sie ist angemeldet und bezahlt, geht aber seit Monaten nicht hin."
      },
      {
       "von": "Person 3 — Georg, 71",
       "wer": "Mann",
       "text": "Seit ich in Rente bin, gehe ich jeden Morgen eine Stunde spazieren, mit zwei Freunden aus der Nachbarschaft. Das ist für mich nicht nur Sport, das ist auch Gesellschaft. Wir reden über Gott und die Welt. Wenn einer mal krank ist, fehlt richtig etwas. Ich glaube, diese Spaziergänge halten mich gesund, körperlich und im Kopf.",
       "satz": "Für Georg ist beim Spazierengehen auch der Kontakt zu anderen wichtig.",
       "loesung": true,
       "stelle": "das ist auch Gesellschaft",
       "erklaerung": "„Nicht nur Sport, auch Gesellschaft\": Die Freunde sind ihm wichtig."
      },
      {
       "von": "Person 4 — Merve, 26",
       "wer": "Frau",
       "text": "Ich mache keinen richtigen Sport, aber ich versuche, mich im Alltag mehr zu bewegen. Ich nehme zum Beispiel immer die Treppe statt den Aufzug, und beim Telefonieren laufe ich in der Wohnung herum. Klingt vielleicht wenig, aber am Abend zeigt meine Uhr oft über zehntausend Schritte. Für mich ist das genug, ich muss keinen Marathon laufen.",
       "satz": "Merve möchte bald intensiver trainieren.",
       "loesung": false,
       "stelle": "Für mich ist das genug",
       "erklaerung": "Sie ist mit ihrer Bewegung im Alltag zufrieden und will nicht mehr machen."
      },
      {
       "von": "Person 5 — Jan, 39",
       "wer": "Mann",
       "text": "Bei mir war es ein Zufall. Mein Sohn spielt Fußball im Verein, und eines Tages hat der Trainer gefragt, ob die Väter nicht auch mal mitspielen wollen. Seitdem treffen wir uns jeden Sonntag auf dem Platz. Ich bin der Schlechteste von allen, aber das ist egal. Es macht einfach riesigen Spaß, und ich freue mich die ganze Woche darauf.",
       "satz": "Jan spielt Fußball, weil er besonders gut darin ist.",
       "loesung": false,
       "stelle": "Ich bin der Schlechteste von allen",
       "erklaerung": "Er spielt aus Spaß, nicht weil er gut ist. Er ist sogar der Schlechteste."
      }
     ]
    },
    {
     "nr": 2,
     "art": "interview",
     "aufgaben": [
      {
       "ort": "Radiointerview — Abschnitt 1",
       "zeilen": [
        {
         "wer": "Mann",
         "text": "Guten Tag und willkommen zu „Beruf und Leben\". Mein Gast ist Katrin Vogt. Sie ist Bäckermeisterin und bildet in ihrem Betrieb junge Leute aus. Frau Vogt, wann sind Sie heute aufgestanden?"
        },
        {
         "wer": "Frau",
         "text": "Um halb drei, wie jeden Tag. Aber keine Sorge, heute Nachmittag habe ich frei und kann mich danach hinlegen. Mein Mann übernimmt dann den Laden."
        }
       ],
       "satz": "Frau Vogt ist heute später als sonst aufgestanden.",
       "loesung": false,
       "stelle": "Um halb drei, wie jeden Tag",
       "erklaerung": "„Wie jeden Tag\" heißt: genauso früh wie immer."
      },
      {
       "ort": "Radiointerview — Abschnitt 2",
       "zeilen": [
        {
         "wer": "Mann",
         "text": "Wie viele Auszubildende haben Sie im Moment?"
        },
        {
         "wer": "Frau",
         "text": "Drei. Zwei lernen Bäcker, eine junge Frau lernt Verkäuferin im Laden. Früher hatten wir jedes Jahr zehn Bewerbungen, heute sind wir froh, wenn überhaupt jemand kommt."
        }
       ],
       "satz": "Heute bewerben sich weniger junge Leute als früher.",
       "loesung": true,
       "stelle": "heute sind wir froh, wenn überhaupt jemand kommt",
       "erklaerung": "Früher zehn Bewerbungen, heute kaum eine — es sind weniger geworden."
      },
      {
       "ort": "Radiointerview — Abschnitt 3",
       "zeilen": [
        {
         "wer": "Mann",
         "text": "Woran liegt das?"
        },
        {
         "wer": "Frau",
         "text": "Viele schreckt das frühe Aufstehen ab, und am Samstag arbeiten wir natürlich auch. Dabei fangen Auszubildende unter achtzehn bei uns gar nicht so früh an, das erlaubt das Gesetz nicht. Die kommen frühestens um fünf. Und um Viertel nach zwölf ist für sie Feierabend."
        }
       ],
       "satz": "Junge Auszubildende fangen auch um halb drei an.",
       "loesung": false,
       "stelle": "Die kommen frühestens um fünf",
       "erklaerung": "Auszubildende unter achtzehn dürfen erst ab fünf Uhr arbeiten."
      },
      {
       "ort": "Radiointerview — Abschnitt 4",
       "zeilen": [
        {
         "wer": "Mann",
         "text": "Was lernen die Azubis im ersten Jahr?"
        },
        {
         "wer": "Frau",
         "text": "Erst mal die Grundlagen: Teig richtig kneten, Brötchen formen, den Ofen bedienen. Und vor allem Sauberkeit. Ohne Hygiene geht in einer Backstube gar nichts. Die Lebensmittelkontrolle kann jederzeit kommen, auch ohne Anmeldung."
        }
       ],
       "satz": "Sauberkeit ist im ersten Jahr ein wichtiges Thema.",
       "loesung": true,
       "stelle": "Ohne Hygiene geht in einer Backstube gar nichts",
       "erklaerung": "„Vor allem Sauberkeit\" — Hygiene ist ihr besonders wichtig."
      },
      {
       "ort": "Radiointerview — Abschnitt 5",
       "zeilen": [
        {
         "wer": "Mann",
         "text": "Sie haben auch einen Auszubildenden aus Syrien, habe ich gehört."
        },
        {
         "wer": "Frau",
         "text": "Ja, Karim. Er ist jetzt im zweiten Lehrjahr. Am Anfang war die Berufsschule schwer für ihn, wegen der Fachsprache. Aber er hat jeden Abend gelernt, und jetzt gehört er zu den Besten in seiner Klasse."
        }
       ],
       "satz": "Karim hat in der Berufsschule immer noch große Probleme.",
       "loesung": false,
       "stelle": "jetzt gehört er zu den Besten in seiner Klasse",
       "erklaerung": "Probleme hatte er nur am Anfang, heute ist er einer der Besten."
      },
      {
       "ort": "Radiointerview — Abschnitt 6",
       "zeilen": [
        {
         "wer": "Mann",
         "text": "Was ist Ihnen bei einer Bewerbung wichtig? Gute Noten?"
        },
        {
         "wer": "Frau",
         "text": "Noten sind mir nicht so wichtig. Ich lade alle zu einem Probetag ein. Da sehe ich sofort, ob jemand pünktlich ist, mit anpackt und Fragen stellt. Wer neugierig ist, lernt das Backen schnell."
        }
       ],
       "satz": "Für Frau Vogt sind gute Schulnoten das Wichtigste.",
       "loesung": false,
       "stelle": "Noten sind mir nicht so wichtig",
       "erklaerung": "Wichtiger ist ihr der Probetag: Pünktlichkeit, Mitarbeit, Fragen."
      },
      {
       "ort": "Radiointerview — Abschnitt 7",
       "zeilen": [
        {
         "wer": "Mann",
         "text": "Und was macht Ihnen selbst am Ausbilden am meisten Spaß?"
        },
        {
         "wer": "Frau",
         "text": "Wenn jemand zum ersten Mal ein Brot ganz allein gebacken hat und es im Laden verkauft wird. Die sind dann so stolz! Manche machen ein Foto und schicken es an die ganze Familie. Das vergessen sie nie, und ich auch nicht."
        }
       ],
       "satz": "Die Azubis freuen sich, wenn ihr erstes eigenes Brot verkauft wird.",
       "loesung": true,
       "stelle": "Die sind dann so stolz",
       "erklaerung": "Stolz sein ist hier eine Form von Freude über das eigene Brot."
      },
      {
       "ort": "Radiointerview — Abschnitt 8",
       "zeilen": [
        {
         "wer": "Mann",
         "text": "Gibt es auch Dinge, die Sie ärgern?"
        },
        {
         "wer": "Frau",
         "text": "Eigentlich nur eins: wenn jemand nicht Bescheid sagt, dass er krank ist. Dann fehlt morgens eine Person, und die Kunden warten auf ihre Brötchen. Ein kurzer Anruf reicht doch. Das sage ich allen schon am ersten Tag."
        }
       ],
       "satz": "Sie ärgert sich, wenn Auszubildende sich nicht krankmelden.",
       "loesung": true,
       "stelle": "wenn jemand nicht Bescheid sagt, dass er krank ist",
       "erklaerung": "Nicht Bescheid sagen bedeutet: sich nicht krankmelden."
      },
      {
       "ort": "Radiointerview — Abschnitt 9",
       "zeilen": [
        {
         "wer": "Mann",
         "text": "Wie geht es nach der Ausbildung weiter? Bleiben die jungen Leute bei Ihnen?"
        },
        {
         "wer": "Frau",
         "text": "Nicht alle. Zwei von meinen ehemaligen Azubis haben inzwischen die Meisterschule gemacht, und eine hat sogar eine eigene Bäckerei in der Nachbarstadt eröffnet. Darauf bin ich wirklich stolz. Wir telefonieren immer noch regelmäßig und tauschen Rezepte aus."
        }
       ],
       "satz": "Alle ehemaligen Auszubildenden arbeiten noch bei Frau Vogt.",
       "loesung": false,
       "stelle": "eine hat sogar eine eigene Bäckerei in der Nachbarstadt eröffnet",
       "erklaerung": "„Nicht alle\" — eine frühere Auszubildende hat jetzt sogar eine eigene Bäckerei."
      },
      {
       "ort": "Radiointerview — Abschnitt 10",
       "zeilen": [
        {
         "wer": "Mann",
         "text": "Wer sich jetzt für eine Ausbildung bei Ihnen interessiert, was soll er tun?"
        },
        {
         "wer": "Frau",
         "text": "Einfach im Laden vorbeikommen oder anrufen. Eine schriftliche Bewerbung brauche ich am Anfang nicht."
        },
        {
         "wer": "Mann",
         "text": "Das ist doch ein Angebot! Frau Vogt, vielen Dank für das Gespräch."
        },
        {
         "wer": "Frau",
         "text": "Sehr gern. Auf Wiederhören!"
        }
       ],
       "satz": "Interessierte können sich auch ohne schriftliche Bewerbung melden.",
       "loesung": true,
       "stelle": "Eine schriftliche Bewerbung brauche ich am Anfang nicht",
       "erklaerung": "Vorbeikommen oder anrufen reicht zuerst — die Aussage stimmt."
      }
     ]
    },
    {
     "nr": 3,
     "art": "durchsage",
     "aufgaben": [
      {
       "von": "Durchsage am Flughafen",
       "wer": "Mann",
       "text": "Letzter Aufruf für Herrn Daniel Weber, gebucht auf den Flug nach Wien. Bitte kommen Sie sofort zu Ausgang A neun, die Türen werden in fünf Minuten geschlossen. Ihr Gepäck ist bereits an Bord. Wenn Sie nicht rechtzeitig erscheinen, wird es wieder ausgeladen. Herr Weber, bitte zu Ausgang A neun.",
       "satz": "Herr Weber soll zum Informationsschalter kommen.",
       "loesung": false,
       "stelle": "Bitte kommen Sie sofort zu Ausgang A neun",
       "erklaerung": "Er soll direkt zum Ausgang kommen, nicht zu einem Schalter."
      },
      {
       "von": "Verkehrsfunk im Radio",
       "wer": "Frau",
       "text": "Achtung, Autofahrer in der Innenstadt: Wegen des Stadtmarathons ist die Ringstraße am Sonntag von acht bis fünfzehn Uhr komplett gesperrt. Die Parkhäuser am Rathaus sind in dieser Zeit nicht erreichbar. Die Stadt empfiehlt, mit Bus und Bahn zu fahren. Die Straßenbahnen fahren am Sonntag alle zehn Minuten.",
       "satz": "Am Sonntag soll man lieber öffentliche Verkehrsmittel benutzen.",
       "loesung": true,
       "stelle": "mit Bus und Bahn zu fahren",
       "erklaerung": "„Bus und Bahn\" sind öffentliche Verkehrsmittel. Das empfiehlt die Stadt."
      },
      {
       "von": "Anrufbeantworter einer Tierarztpraxis",
       "wer": "Mann",
       "text": "Guten Tag, Sie haben die Tierarztpraxis am Stadtpark erreicht. Unsere Sprechzeiten haben sich geändert. Ab nächster Woche haben wir dienstags nicht mehr bis achtzehn Uhr, sondern bis zwanzig Uhr geöffnet. Dafür bleibt die Praxis samstags geschlossen. Termine vereinbaren Sie am besten über unsere Internetseite.",
       "satz": "Die Praxis hat dienstags länger geöffnet als früher.",
       "loesung": true,
       "stelle": "sondern bis zwanzig Uhr geöffnet",
       "erklaerung": "Früher bis achtzehn Uhr, jetzt bis zwanzig Uhr: also länger."
      },
      {
       "von": "Durchsage im Supermarkt",
       "wer": "Frau",
       "text": "Liebe Kunden, besuchen Sie unsere neue Backstation am Eingang! Ab sofort gibt es dort den ganzen Tag frische Brötchen. Und jetzt neu: Wer fünf Brötchen kauft, bekommt das sechste gratis. Dieses Angebot gilt allerdings nur bis zehn Uhr morgens. Wir wünschen Ihnen einen guten Appetit!",
       "satz": "Das Brötchen-Angebot gilt den ganzen Tag.",
       "loesung": false,
       "stelle": "gilt allerdings nur bis zehn Uhr morgens",
       "erklaerung": "Frische Brötchen gibt es den ganzen Tag, das Angebot aber nur bis zehn Uhr."
      },
      {
       "von": "Wegbeschreibung auf der Mailbox",
       "wer": "Frau",
       "text": "Hallo Jonas, hier ist Mira. Du findest unsere neue Wohnung ganz leicht. Steig an der Haltestelle Rosenweg aus und geh an der Apotheke vorbei bis zur Ampel. Dort biegst du rechts ab. Wir wohnen im Haus Nummer acht, im dritten Stock. Die Klingel ist leider kaputt, ruf mich einfach an, wenn du unten bist.",
       "satz": "Jonas soll bei Mira klingeln.",
       "loesung": false,
       "stelle": "ruf mich einfach an, wenn du unten bist",
       "erklaerung": "Die Klingel ist kaputt. Jonas soll anrufen statt klingeln."
      }
     ]
    }
   ]
  },
  {
   "id": "tb1hl2",
   "titel": "Prüfungslauf 2",
   "minuten": 30,
   "teile": [
    {
     "nr": 1,
     "art": "diskussion",
     "aufgaben": [
      {
       "von": "Person 1 — Claudia, 44",
       "wer": "Frau",
       "text": "Letzten Sommer haben wir zum ersten Mal Urlaub zu Hause gemacht, weil das Geld knapp war. Ich hatte ehrlich gesagt keine großen Erwartungen. Aber wir haben unsere eigene Stadt ganz neu entdeckt, Museen, einen See in der Nähe, ein tolles Restaurant. Das war viel entspannter als jede Flugreise. Das machen wir bestimmt wieder.",
       "satz": "Claudia war vom Urlaub zu Hause positiv überrascht.",
       "loesung": true,
       "stelle": "Das war viel entspannter als jede Flugreise.",
       "erklaerung": "Keine Erwartungen, dann begeistert: Sie war positiv überrascht."
      },
      {
       "von": "Person 2 — Ralf, 55",
       "wer": "Mann",
       "text": "Für mich funktioniert das überhaupt nicht. Wenn ich zu Hause bin, sehe ich überall Arbeit. Der Rasen muss gemäht werden, der Keller muss aufgeräumt werden. Am Ende habe ich zwei Wochen lang renoviert und war danach müder als vorher. Ich brauche einfach Abstand, ich muss weg, sonst kann ich nicht abschalten.",
       "satz": "Ralf kann sich zu Hause gut erholen.",
       "loesung": false,
       "stelle": "war danach müder als vorher",
       "erklaerung": "Zu Hause sieht er nur Arbeit und kann nicht abschalten."
      },
      {
       "von": "Person 3 — Leonie, 22",
       "wer": "Frau",
       "text": "Also, ich bin Studentin, und eine große Reise kann ich mir sowieso nicht leisten. Aber ich mache das Beste daraus. Ich treffe Freunde, gehe ins Freibad, mache Tagesausflüge mit dem Regionalzug. Klar träume ich manchmal von Spanien oder Italien. Aber ehrlich, ich vermisse nicht wirklich etwas. Ein schöner Sommer hängt nicht vom Reiseziel ab.",
       "satz": "Leonie ist unzufrieden, weil sie nicht verreisen kann.",
       "loesung": false,
       "stelle": "ich vermisse nicht wirklich etwas",
       "erklaerung": "Sie träumt manchmal vom Süden, ist aber zufrieden mit ihrem Sommer."
      },
      {
       "von": "Person 4 — Sven, 37",
       "wer": "Mann",
       "text": "Wir haben zwei kleine Kinder, und Reisen mit Kindern ist, na ja, anstrengend. Packen, Stau, fremdes Bett, die Kleinen schlafen schlecht. Deshalb bleiben wir im Moment lieber zu Hause und machen nur kurze Ausflüge. Die Kinder sind glücklich mit dem Spielplatz und dem Planschbecken im Garten. Wenn sie größer sind, fahren wir wieder weg.",
       "satz": "Sven bleibt mit seiner Familie zu Hause, weil es für die Kinder einfacher ist.",
       "loesung": true,
       "stelle": "Deshalb bleiben wir im Moment lieber zu Hause",
       "erklaerung": "Reisen mit kleinen Kindern ist anstrengend, deshalb bleiben sie zu Hause."
      },
      {
       "von": "Person 5 — Ingrid, 66",
       "wer": "Frau",
       "text": "Ich habe in meinem Leben viele Reisen gemacht, nach Asien, nach Amerika. Heute reise ich nicht mehr so gern weit weg, der Flughafen ist mir zu stressig. Aber Urlaub zu Hause ist für mich kein Ersatz. Ich miete mir lieber eine kleine Ferienwohnung an der Ostsee, nur zwei Stunden mit dem Zug. Ein bisschen Tapetenwechsel brauche ich schon.",
       "satz": "Ingrid verbringt ihren Urlaub am liebsten in der eigenen Wohnung.",
       "loesung": false,
       "stelle": "Urlaub zu Hause ist für mich kein Ersatz",
       "erklaerung": "Keine Fernreisen mehr, aber auch nicht zu Hause: Sie fährt an die Ostsee."
      }
     ]
    },
    {
     "nr": 2,
     "art": "interview",
     "aufgaben": [
      {
       "ort": "Radiointerview — Abschnitt 1",
       "zeilen": [
        {
         "wer": "Frau",
         "text": "Herzlich willkommen zu „Zweiter Anfang\", der Sendung über Menschen, die im Leben noch einmal etwas Neues wagen. Heute bei mir: Werner Haupt. Er war über dreißig Jahre Ingenieur und unterrichtet jetzt Deutsch. Guten Tag, Herr Haupt!"
        },
        {
         "wer": "Mann",
         "text": "Guten Tag! Ja, mit sechzig habe ich noch einmal ganz von vorn angefangen. Meine Familie hat damals gedacht, ich bin verrückt geworden. Inzwischen sind alle stolz auf mich, sogar mein Enkel."
        }
       ],
       "satz": "Seine Familie fand die Idee sofort gut.",
       "loesung": false,
       "stelle": "Meine Familie hat damals gedacht, ich bin verrückt geworden",
       "erklaerung": "Wer denkt, dass jemand verrückt geworden ist, findet die Idee nicht gut."
      },
      {
       "ort": "Radiointerview — Abschnitt 2",
       "zeilen": [
        {
         "wer": "Frau",
         "text": "Wie kam es dazu?"
        },
        {
         "wer": "Mann",
         "text": "Unsere Firma hat einen Teil der Abteilung geschlossen, und man hat mir angeboten, früher in Rente zu gehen. Ein paar Wochen später hat in unserer Turnhalle eine Unterkunft für Geflüchtete aufgemacht. Da bin ich einfach mal hingegangen."
        }
       ],
       "satz": "Herr Haupt ist früher als geplant in Rente gegangen.",
       "loesung": true,
       "stelle": "man hat mir angeboten, früher in Rente zu gehen",
       "erklaerung": "Die Firma hat ihm angeboten, früher aufzuhören — und er hat es angenommen."
      },
      {
       "ort": "Radiointerview — Abschnitt 3",
       "zeilen": [
        {
         "wer": "Frau",
         "text": "Und dort haben Sie gleich angefangen zu unterrichten?"
        },
        {
         "wer": "Mann",
         "text": "Nein, zuerst habe ich Kisten getragen und Betten aufgebaut. Erst später hat mich eine Sozialarbeiterin gefragt, ob ich mit ein paar Männern Deutsch üben kann. Wir haben uns an einen Tisch in der Ecke gesetzt, ganz ohne Buch."
        }
       ],
       "satz": "In der Unterkunft hat er zuerst praktische Arbeiten gemacht.",
       "loesung": true,
       "stelle": "zuerst habe ich Kisten getragen und Betten aufgebaut",
       "erklaerung": "Kisten tragen und Betten aufbauen sind praktische Arbeiten, das Unterrichten kam erst später."
      },
      {
       "ort": "Radiointerview — Abschnitt 4",
       "zeilen": [
        {
         "wer": "Frau",
         "text": "Hatten Sie denn Erfahrung als Lehrer?"
        },
        {
         "wer": "Mann",
         "text": "Überhaupt keine. Ich habe am Anfang viele Fehler gemacht und zum Beispiel viel zu schnell gesprochen. Deshalb habe ich an der Volkshochschule eine Fortbildung für Ehrenamtliche gemacht, ein ganzes Jahr lang, jeden Samstag."
        }
       ],
       "satz": "Seine Fortbildung hat nur eine Woche gedauert.",
       "loesung": false,
       "stelle": "ein ganzes Jahr lang, jeden Samstag",
       "erklaerung": "Die Fortbildung lief ein ganzes Jahr, jeden Samstag."
      },
      {
       "ort": "Radiointerview — Abschnitt 5",
       "zeilen": [
        {
         "wer": "Frau",
         "text": "Wer sind heute Ihre Schüler?"
        },
        {
         "wer": "Mann",
         "text": "Eine gemischte Gruppe, ungefähr zwölf Leute aus Afghanistan, Eritrea, der Ukraine und Syrien. Der Jüngste ist neunzehn, die Älteste ist fast siebzig. Sie war früher Ärztin und möchte hier wieder in ihrem Beruf arbeiten. Wir treffen uns zweimal pro Woche im Gemeindehaus."
        }
       ],
       "satz": "In seiner Gruppe sind nur junge Leute.",
       "loesung": false,
       "stelle": "die Älteste ist fast siebzig",
       "erklaerung": "Die Gruppe ist gemischt: von neunzehn bis fast siebzig Jahre."
      },
      {
       "ort": "Radiointerview — Abschnitt 6",
       "zeilen": [
        {
         "wer": "Frau",
         "text": "Was ist für Ihre Schüler am schwierigsten?"
        },
        {
         "wer": "Mann",
         "text": "Die Artikel natürlich, der, die, das. Aber noch schwieriger ist die Sprache auf den Ämtern. Wir lesen deshalb oft echte Briefe zusammen, vom Jobcenter oder von der Krankenkasse."
        }
       ],
       "satz": "Im Unterricht arbeiten sie auch mit echten Briefen von Behörden.",
       "loesung": true,
       "stelle": "Wir lesen deshalb oft echte Briefe zusammen",
       "erklaerung": "Jobcenter und Krankenkasse — sie lesen echte Briefe von Ämtern."
      },
      {
       "ort": "Radiointerview — Abschnitt 7",
       "zeilen": [
        {
         "wer": "Frau",
         "text": "Bekommen Sie Geld für Ihre Arbeit?"
        },
        {
         "wer": "Mann",
         "text": "Nein, ich mache das ehrenamtlich. Die Stadt bezahlt nur den Raum und die Bücher. Aber ich bekomme etwas anderes: Ich werde ständig zum Essen eingeladen. So gut habe ich noch nie gegessen!"
        }
       ],
       "satz": "Herr Haupt bekommt von der Stadt ein kleines Gehalt.",
       "loesung": false,
       "stelle": "Die Stadt bezahlt nur den Raum und die Bücher",
       "erklaerung": "Die Stadt zahlt etwas, aber nur Raum und Bücher, kein Gehalt für ihn."
      },
      {
       "ort": "Radiointerview — Abschnitt 8",
       "zeilen": [
        {
         "wer": "Frau",
         "text": "Was hat sich für Sie persönlich verändert?"
        },
        {
         "wer": "Mann",
         "text": "Ich sehe mein eigenes Land mit anderen Augen. Meine Schüler fragen mich Dinge, über die ich nie nachgedacht habe, zum Beispiel, warum die Geschäfte am Sonntag geschlossen sind. Da muss ich selbst oft erst nachlesen. Ich lerne also auch jede Woche etwas Neues."
        }
       ],
       "satz": "Durch die Fragen der Schüler denkt er mehr über Deutschland nach.",
       "loesung": true,
       "stelle": "Ich sehe mein eigenes Land mit anderen Augen",
       "erklaerung": "Die Fragen bringen ihn dazu, über sein eigenes Land neu nachzudenken."
      },
      {
       "ort": "Radiointerview — Abschnitt 9",
       "zeilen": [
        {
         "wer": "Frau",
         "text": "Gibt es eine Erfolgsgeschichte, die Sie erzählen möchten?"
        },
        {
         "wer": "Mann",
         "text": "Viele. Aber besonders freue ich mich über Ahmad. Er konnte am Anfang kein Wort Deutsch. Letzten Monat hat er die Prüfung für den Führerschein bestanden, auf Deutsch, beim ersten Versuch. Er hat mich sofort angerufen, und wir haben beide fast geweint."
        }
       ],
       "satz": "Ahmad hat die Führerscheinprüfung erst beim zweiten Mal bestanden.",
       "loesung": false,
       "stelle": "auf Deutsch, beim ersten Versuch",
       "erklaerung": "Er hat sie gleich beim ersten Versuch bestanden."
      },
      {
       "ort": "Radiointerview — Abschnitt 10",
       "zeilen": [
        {
         "wer": "Frau",
         "text": "Herr Haupt, würden Sie anderen Rentnern empfehlen, so etwas zu machen?"
        },
        {
         "wer": "Mann",
         "text": "Unbedingt. Man muss nicht Lehrer sein, man braucht nur Geduld und ein bisschen Zeit, vielleicht zwei Stunden pro Woche."
        },
        {
         "wer": "Frau",
         "text": "Das klingt machbar. Vielen Dank für das schöne Gespräch!"
        },
        {
         "wer": "Mann",
         "text": "Ich danke Ihnen. Auf Wiederhören!"
        }
       ],
       "satz": "Laut Herrn Haupt braucht man für diese Arbeit nicht sehr viel Zeit.",
       "loesung": true,
       "stelle": "vielleicht zwei Stunden pro Woche",
       "erklaerung": "Zwei Stunden pro Woche reichen — also nicht viel Zeit."
      }
     ]
    },
    {
     "nr": 3,
     "art": "durchsage",
     "aufgaben": [
      {
       "von": "Durchsage im Hauptbahnhof",
       "wer": "Frau",
       "text": "Information zum Intercity nach Hamburg, Abfahrt fünfzehn Uhr zehn: Der Zug fährt heute in umgekehrter Wagenreihung. Die Wagen der ersten Klasse halten im Abschnitt E, nicht wie angezeigt im Abschnitt A. Das Bordrestaurant befindet sich in der Mitte des Zuges. Wir wünschen Ihnen eine gute Reise.",
       "satz": "Die erste Klasse hält heute im Abschnitt A.",
       "loesung": false,
       "stelle": "halten im Abschnitt E",
       "erklaerung": "Angezeigt ist Abschnitt A, aber heute hält die erste Klasse im Abschnitt E."
      },
      {
       "von": "Ansage des Stadttheaters vom Band",
       "wer": "Mann",
       "text": "Hier ist das Ansageband des Stadttheaters. Die Vorstellung „Der Geizige\" am Freitag muss leider ausfallen, weil ein Schauspieler erkrankt ist. Ihre Karten können Sie an der Theaterkasse zurückgeben oder gegen eine Karte für den zwölften Juni tauschen. Die Kasse ist werktags von zehn bis achtzehn Uhr geöffnet.",
       "satz": "Man kann die Karten für einen anderen Termin umtauschen.",
       "loesung": true,
       "stelle": "gegen eine Karte für den zwölften Juni tauschen",
       "erklaerung": "Man kann das Geld zurückbekommen oder die Karte für den zwölften Juni tauschen."
      },
      {
       "von": "Unwetterwarnung im Radio",
       "wer": "Frau",
       "text": "Und hier die Warnung des Wetterdienstes: Heute Nacht wird es glatt. Bei Temperaturen bis minus fünf Grad kann Regen auf den Straßen sofort gefrieren. Autofahrer sollten morgen früh besonders vorsichtig fahren und wenn möglich mehr Zeit einplanen. Ab Mittag steigen die Temperaturen dann wieder über null Grad.",
       "satz": "Morgen früh kann es auf den Straßen gefährlich sein.",
       "loesung": true,
       "stelle": "besonders vorsichtig fahren",
       "erklaerung": "Wegen Glatteis sollen Autofahrer morgen früh vorsichtig sein."
      },
      {
       "von": "Anrufbeantworter einer Firma",
       "wer": "Mann",
       "text": "Sie sind verbunden mit dem Kundenservice von Möbelhaus Brandt. Alle Mitarbeiter sind im Moment im Gespräch. Wenn Sie eine Lieferung verschieben möchten, drücken Sie bitte die Eins. Bei Fragen zu einer Rechnung drücken Sie die Zwei. Oder bleiben Sie einfach in der Leitung, wir sind gleich für Sie da.",
       "satz": "Wer einen Liefertermin ändern will, soll die Zwei drücken.",
       "loesung": false,
       "stelle": "drücken Sie bitte die Eins",
       "erklaerung": "Die Zwei ist für Rechnungen. Für die Lieferung drückt man die Eins."
      },
      {
       "von": "Werbung im Radio",
       "wer": "Frau",
       "text": "Sie wollten schon immer Spanisch lernen? Die Volkshochschule Neustadt startet im Oktober neue Abendkurse für Anfänger. Der Kurs findet einmal pro Woche statt, immer donnerstags, und kostet für zehn Abende neunzig Euro. Anmelden können Sie sich ab sofort, aber nicht telefonisch, sondern nur online.",
       "satz": "Man kann sich telefonisch für den Kurs anmelden.",
       "loesung": false,
       "stelle": "sondern nur online",
       "erklaerung": "„nicht telefonisch, sondern nur online\": Ein Anruf reicht nicht."
      }
     ]
    }
   ]
  }
 ]
};
