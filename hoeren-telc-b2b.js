/* ============================================================
   deutschoderwas club — HÖREN telc Deutsch B2+ Beruf

   Aufbau nach dem offiziellen telc-Format (Übungstest 1 B2+ Beruf,
   geprüft 03.11.2026). Alle Texte und Aufgaben eigene, Kontext
   Geschäftskommunikation. Erzeugt aus scratchpad/telcb2b mit bau.js.
   ============================================================ */

window.HOEREN_TELC_B2B = {
 "niveau": "telcB2B",
 "pruefung": "telc Deutsch B2+ Beruf",
 "minuten": 30,
 "punkte": 20,
 "intro": "Der Hören-Teil bei telc B2+ Beruf dauert etwa dreißig Minuten, und jeder Text läuft nur EINMAL: Wirtschaftsnachrichten, ein Firmenporträt aus dem Radio und eine Besprechung mit mehreren Personen. Nach jeder Antwort siehst du den Text mit der entscheidenden Stelle.",
 "stufen": [
  {
   "nr": 1,
   "titel": "Beim ersten Mal verstehen",
   "zeichen": "👂",
   "was": "Nachrichten und Firmenporträts."
  },
  {
   "nr": 2,
   "titel": "Besprechungen",
   "zeichen": "👥",
   "was": "Wer will was — und die typischen Fallen."
  },
  {
   "nr": 3,
   "titel": "Die Aufgabentypen",
   "zeichen": "🎯",
   "was": "Alle drei Teile einzeln."
  },
  {
   "nr": 4,
   "titel": "Die ganze Prüfung",
   "zeichen": "⏱️",
   "was": "20 Aufgaben, etwa dreißig Minuten."
  }
 ],
 "bloecke": [
  {
   "id": "tbb2h1",
   "stufe": 1,
   "titel": "Nachrichten im Wirtschaftsradio",
   "kurz": "Wirtschaftsmeldungen einmal hören und die Kernaussage erkennen — Zahlen sind oft nur Beiwerk.",
   "ziel": "Nach diesem Block erkennst du in einer kurzen Wirtschaftsmeldung sofort, was sich ändert, für wen und warum.",
   "zeichen": "📻",
   "farbe": "turq",
   "mal": 1,
   "aufgaben": [
    {
     "art": "hoerwahl",
     "ort": "Wirtschaftsmeldung — Industrie",
     "wer": "Mann",
     "text": "Der Verpackungshersteller Rohlfs schließt sein Werk in Unterbach nicht, wie im Frühjahr befürchtet. Stattdessen wird dort künftig nur noch Papier statt Kunststoff verarbeitet. Dafür müssen allerdings etwa sechzig Beschäftigte umgeschult werden.",
     "frage": "Was ist die Hauptaussage der Meldung?",
     "opt": [
      "Das Werk in Unterbach wird geschlossen.",
      "Das Werk bleibt, stellt aber seine Produktion um.",
      "Sechzig Beschäftigte verlieren ihre Stelle."
     ],
     "loesung": 1,
     "stelle": "künftig nur noch Papier statt Kunststoff verarbeitet",
     "erklaerung": "Die befürchtete Schließung findet nicht statt. Die Produktion wird auf Papier umgestellt."
    },
    {
     "art": "hoerwahl",
     "ort": "Wirtschaftsmeldung — Handel",
     "wer": "Frau",
     "text": "Supermärkte in Grünstadt dürfen künftig auch sonntags öffnen, allerdings nur ohne Personal. Kunden scannen ihre Waren selbst und bezahlen am Automaten. Frische Ware wie Fleisch oder Käse von der Theke gibt es an diesen Tagen nicht.",
     "frage": "Was ist neu in Grünstadt?",
     "opt": [
      "Supermärkte öffnen sonntags ohne Verkäufer.",
      "Supermärkte stellen für den Sonntag mehr Personal ein.",
      "Am Sonntag gibt es ein besonders großes Frischeangebot."
     ],
     "loesung": 0,
     "stelle": "allerdings nur ohne Personal",
     "erklaerung": "Sonntags ja, aber ohne Personal — Selbstbedienung an Automaten."
    },
    {
     "art": "hoerwahl",
     "ort": "Wirtschaftsmeldung — Arbeitsmarkt",
     "wer": "Mann",
     "text": "Die Arbeitslosigkeit ist im November leicht gestiegen. Experten sehen darin aber keinen Grund zur Sorge. Im Winter ruhen viele Arbeiten auf dem Bau und in der Landwirtschaft, im Frühjahr sinkt die Zahl dann erfahrungsgemäß wieder.",
     "frage": "Wie bewerten die Experten den Anstieg?",
     "opt": [
      "Als Zeichen für eine Wirtschaftskrise.",
      "Als Folge von Entlassungen in der Industrie.",
      "Als normale Entwicklung in der kalten Jahreszeit."
     ],
     "loesung": 2,
     "stelle": "Im Winter ruhen viele Arbeiten auf dem Bau",
     "erklaerung": "Der Anstieg ist saisonbedingt: Im Winter gibt es weniger Arbeit, im Frühjahr wieder mehr."
    },
    {
     "art": "hoerwahl",
     "ort": "Wirtschaftsmeldung — Verkehr und Logistik",
     "wer": "Frau",
     "text": "Die Hafengesellschaft Brennstedt investiert in ein neues Containerterminal. Die Bauarbeiten beginnen im kommenden Herbst. Ob das Terminal wie geplant in drei Jahren in Betrieb geht, hängt aber noch von einer Genehmigung der Umweltbehörde ab.",
     "frage": "Was ist noch unsicher?",
     "opt": [
      "Ob die Hafengesellschaft genug Geld hat.",
      "Wann das Terminal fertig wird.",
      "Wann die Bauarbeiten beginnen."
     ],
     "loesung": 1,
     "stelle": "hängt aber noch von einer Genehmigung der Umweltbehörde ab",
     "erklaerung": "Der Baubeginn steht fest. Offen ist, ob der Termin für den Betrieb gehalten wird."
    },
    {
     "art": "hoerwahl",
     "ort": "Wirtschaftsmeldung — Energie",
     "wer": "Mann",
     "text": "Betriebe, die ihre Hallen mit Wärmepumpen heizen, erhalten ab Januar einen höheren Zuschuss. Bisher übernahm das Land ein Viertel der Kosten, künftig sind es bis zu vierzig Prozent. Anträge, die bereits gestellt wurden, profitieren allerdings nicht davon.",
     "frage": "Wer bekommt den höheren Zuschuss?",
     "opt": [
      "Alle Betriebe, die schon eine Wärmepumpe haben.",
      "Nur Betriebe, die bereits einen Antrag gestellt haben.",
      "Betriebe, die ab Januar neu einen Antrag stellen."
     ],
     "loesung": 2,
     "stelle": "Anträge, die bereits gestellt wurden, profitieren allerdings nicht davon",
     "erklaerung": "Der höhere Satz gilt erst ab Januar. Alte Anträge bleiben beim alten Zuschuss."
    },
    {
     "art": "hoerwahl",
     "ort": "Wirtschaftsmeldung — Finanzen",
     "wer": "Frau",
     "text": "Die Sparkasse Hollenbach schließt bis zum Sommer fünf ihrer Filialen auf dem Land. Geldautomaten bleiben an allen Standorten erhalten. Für ältere Kunden soll außerdem einmal pro Woche ein mobiler Beratungsbus in die Dörfer kommen.",
     "frage": "Was bleibt in den Dörfern erhalten?",
     "opt": [
      "Die Möglichkeit, Bargeld abzuheben.",
      "Die tägliche persönliche Beratung.",
      "Alle fünf Filialen."
     ],
     "loesung": 0,
     "stelle": "Geldautomaten bleiben an allen Standorten erhalten",
     "erklaerung": "Die Filialen schließen, die Geldautomaten bleiben. Beratung gibt es nur einmal pro Woche."
    },
    {
     "art": "hoerwahl",
     "ort": "Wirtschaftsmeldung — Tarif",
     "wer": "Mann",
     "text": "Im öffentlichen Nahverkehr der Region wird ab Montag gestreikt. Die Gewerkschaft hat die Beschäftigten der Verkehrsbetriebe zu einem zweitägigen Warnstreik aufgerufen. Schul- und Nachtbusse sind ausgenommen und fahren nach Plan.",
     "frage": "Welche Busse fahren während des Streiks?",
     "opt": [
      "Keine Busse in der ganzen Region.",
      "Alle Busse, aber nur am Montag.",
      "Die Schulbusse und die Nachtbusse."
     ],
     "loesung": 2,
     "stelle": "Schul- und Nachtbusse sind ausgenommen",
     "erklaerung": "„ausgenommen\" heißt: Diese Busse werden nicht bestreikt."
    },
    {
     "art": "hoerwahl",
     "ort": "Wirtschaftsmeldung — Unternehmen",
     "wer": "Frau",
     "text": "Der Online-Händler Kaufhafen hat im dritten Quartal zwar mehr umgesetzt, aber weniger verdient. Der Grund sind hohe Kosten für den Ausbau der eigenen Lieferflotte. Das Unternehmen rechnet damit, dass sich diese Investition ab dem nächsten Jahr auszahlt.",
     "frage": "Warum ist der Gewinn gesunken?",
     "opt": [
      "Weil weniger Kunden bestellt haben.",
      "Weil das Unternehmen viel in die Lieferung investiert hat.",
      "Weil die Preise gesenkt wurden."
     ],
     "loesung": 1,
     "stelle": "hohe Kosten für den Ausbau der eigenen Lieferflotte",
     "erklaerung": "Umsatz rauf, Gewinn runter — wegen der Investition in die eigene Lieferflotte."
    },
    {
     "art": "hoerwahl",
     "ort": "Wirtschaftsmeldung — Ausbildung",
     "wer": "Mann",
     "text": "Das Land will mehr junge Menschen für eine Ausbildung im Handwerk gewinnen. Wer eine Meisterprüfung besteht, bekommt künftig eine Prämie von dreitausend Euro. Die Kosten für den Meisterkurs selbst müssen aber wie bisher teilweise selbst getragen werden.",
     "frage": "Was ändert sich für angehende Meister?",
     "opt": [
      "Sie erhalten nach der bestandenen Prüfung Geld.",
      "Der Meisterkurs wird komplett kostenlos.",
      "Die Meisterprüfung wird leichter."
     ],
     "loesung": 0,
     "stelle": "bekommt künftig eine Prämie von dreitausend Euro",
     "erklaerung": "Neu ist die Prämie nach der Prüfung. Der Kurs kostet weiterhin Geld."
    },
    {
     "art": "hoerwahl",
     "ort": "Wirtschaftsmeldung — Konjunktur",
     "wer": "Frau",
     "text": "Die Stimmung in den Chefetagen hat sich im Oktober leicht verbessert. Die Unternehmen bewerten ihre aktuelle Lage etwas besser als im Vormonat. Bei den Erwartungen für das kommende halbe Jahr bleiben sie jedoch skeptisch.",
     "frage": "Wie sehen die Unternehmen die Zukunft?",
     "opt": [
      "Sehr optimistisch.",
      "Eher zurückhaltend.",
      "Genauso wie die aktuelle Lage."
     ],
     "loesung": 1,
     "stelle": "bleiben sie jedoch skeptisch",
     "erklaerung": "Die aktuelle Lage ist besser, die Erwartungen bleiben „skeptisch\" — also zurückhaltend."
    }
   ]
  },
  {
   "id": "tbb2h2",
   "stufe": 1,
   "titel": "Firmenporträts verstehen",
   "kurz": "Gründung, Zahlen, Strategie: Im Radioporträt genau hören, welche Zahl zu welcher Information gehört.",
   "ziel": "Nach diesem Block ordnest du in einem Firmenporträt Jahreszahlen, Mitarbeiterzahlen und Pläne sicher zu — auch beim einmaligen Hören.",
   "zeichen": "🏭",
   "farbe": "gold",
   "mal": 1,
   "aufgaben": [
    {
     "art": "hoerwahl",
     "ort": "Radioporträt — Gründung",
     "wer": "Mann",
     "text": "Angefangen hat alles neunzehnhundertachtundneunzig in einer Garage in Lohfelden. Damals reparierte Gründer Paul Heine nur Fahrräder für Nachbarn. Den ersten eigenen Laden eröffnete er erst sieben Jahre später.",
     "frage": "Wann eröffnete der erste Laden?",
     "opt": [
      "Neunzehnhundertachtundneunzig.",
      "Zweitausendfünf.",
      "Zweitausendsieben."
     ],
     "loesung": 1,
     "stelle": "Den ersten eigenen Laden eröffnete er erst sieben Jahre später",
     "erklaerung": "Neunzehnhundertachtundneunzig plus sieben Jahre ergibt zweitausendfünf. Die Zahl sieben ist die Falle."
    },
    {
     "art": "hoerwahl",
     "ort": "Radioporträt — Mitarbeiter",
     "wer": "Frau",
     "text": "Heute beschäftigt die Firma Lindqvist Textil rund dreihundert Menschen. Etwa zwei Drittel davon arbeiten in der Produktion in Mehlbach, der Rest verteilt sich auf Vertrieb und Verwaltung in der Zentrale.",
     "frage": "Wie viele Menschen arbeiten ungefähr in der Produktion?",
     "opt": [
      "Rund hundert.",
      "Rund dreihundert.",
      "Rund zweihundert."
     ],
     "loesung": 2,
     "stelle": "Etwa zwei Drittel davon arbeiten in der Produktion",
     "erklaerung": "Zwei Drittel von dreihundert sind zweihundert. Dreihundert ist die Gesamtzahl."
    },
    {
     "art": "hoerwahl",
     "ort": "Radioporträt — Strategie",
     "wer": "Mann",
     "text": "Lange hat die Bäckerei Ahrens vor allem auf Masse gesetzt und Supermärkte beliefert. Vor fünf Jahren hat die Geschäftsführerin umgesteuert: weniger Kunden, dafür nur noch Bio-Brot und eigene Filialen mit Café.",
     "frage": "Was ist die heutige Strategie der Bäckerei?",
     "opt": [
      "Möglichst viele Supermärkte beliefern.",
      "Hochwertige Produkte in eigenen Filialen verkaufen.",
      "Die Preise senken, um mehr Kunden zu gewinnen."
     ],
     "loesung": 1,
     "stelle": "dafür nur noch Bio-Brot und eigene Filialen mit Café",
     "erklaerung": "„Lange\" beschreibt die alte Strategie. Nach dem Umsteuern zählen Qualität und eigene Filialen."
    },
    {
     "art": "hoerwahl",
     "ort": "Radioporträt — Export",
     "wer": "Frau",
     "text": "Die Pumpen aus Gerlingshausen gehen in über vierzig Länder. Den größten Teil des Umsatzes macht das Unternehmen aber nach wie vor im Inland, der Exportanteil liegt bei knapp einem Drittel.",
     "frage": "Wo macht das Unternehmen den größten Umsatz?",
     "opt": [
      "Im eigenen Land.",
      "In über vierzig Ländern gleichmäßig.",
      "Vor allem im Ausland."
     ],
     "loesung": 0,
     "stelle": "aber nach wie vor im Inland",
     "erklaerung": "Viele Länder klingen nach Export. Das „aber\" zeigt: Der größte Teil bleibt im Inland."
    },
    {
     "art": "hoerwahl",
     "ort": "Radioporträt — Krise",
     "wer": "Mann",
     "text": "Zweitausendneun stand die Druckerei Sommer kurz vor dem Aus. Gerettet hat sie nicht eine Bank, sondern ein großer Auftrag eines Verlags, der seine Kataloge plötzlich nicht mehr im Ausland drucken lassen wollte.",
     "frage": "Was hat die Druckerei gerettet?",
     "opt": [
      "Ein Kredit der Bank.",
      "Ein Umzug ins Ausland.",
      "Ein wichtiger neuer Auftrag."
     ],
     "loesung": 2,
     "stelle": "sondern ein großer Auftrag eines Verlags",
     "erklaerung": "„nicht … sondern\": Die Bank wird ausgeschlossen, der Auftrag war die Rettung."
    },
    {
     "art": "hoerwahl",
     "ort": "Radioporträt — Nachwuchs",
     "wer": "Frau",
     "text": "Fachkräfte findet der Betrieb vor allem über die eigene Ausbildung. Jedes Jahr beginnen hier acht junge Leute eine Lehre, und fast alle bleiben danach im Unternehmen. Stellenanzeigen schaltet die Firma kaum noch.",
     "frage": "Wie gewinnt der Betrieb neue Fachkräfte?",
     "opt": [
      "Durch viele Stellenanzeigen.",
      "Indem er selbst ausbildet.",
      "Durch Fachkräfte aus anderen Firmen."
     ],
     "loesung": 1,
     "stelle": "vor allem über die eigene Ausbildung",
     "erklaerung": "Die Firma bildet selbst aus und behält die Lehrlinge. Anzeigen gibt es kaum noch."
    },
    {
     "art": "hoerwahl",
     "ort": "Radioporträt — Umsatz",
     "wer": "Mann",
     "text": "Im letzten Jahr hat die Firma einen Umsatz von achtzehn Millionen Euro erzielt. Das ist zwar etwas weniger als im Rekordjahr davor, aber immer noch doppelt so viel wie vor zehn Jahren.",
     "frage": "Wie hat sich der Umsatz zuletzt entwickelt?",
     "opt": [
      "Er ist im Vergleich zum Vorjahr leicht gesunken.",
      "Er hat sich im letzten Jahr verdoppelt.",
      "Er war im letzten Jahr so hoch wie nie."
     ],
     "loesung": 0,
     "stelle": "etwas weniger als im Rekordjahr davor",
     "erklaerung": "Das Rekordjahr war das Jahr davor. Die Verdoppelung bezieht sich auf zehn Jahre."
    },
    {
     "art": "hoerwahl",
     "ort": "Radioporträt — Zukunftspläne",
     "wer": "Frau",
     "text": "Für die Zukunft plant die Geschäftsführung keinen neuen Standort. Stattdessen soll das bestehende Werk modernisiert werden, vor allem mit Robotern für schwere und monotone Arbeiten. Entlassungen soll es dadurch nicht geben.",
     "frage": "Was plant die Firma?",
     "opt": [
      "Einen zweiten Standort zu eröffnen.",
      "Weniger Mitarbeiter zu beschäftigen.",
      "Das vorhandene Werk technisch zu erneuern."
     ],
     "loesung": 2,
     "stelle": "soll das bestehende Werk modernisiert werden",
     "erklaerung": "Kein neuer Standort, keine Entlassungen — modernisiert wird das bestehende Werk."
    },
    {
     "art": "hoerwahl",
     "ort": "Radioporträt — Familienunternehmen",
     "wer": "Mann",
     "text": "Seit dem vergangenen Jahr leitet Marta Kowalski das Unternehmen in dritter Generation. Ihr Vater ist noch im Beirat, mischt sich in das Tagesgeschäft aber nach eigener Aussage nicht mehr ein.",
     "frage": "Welche Rolle hat der Vater heute?",
     "opt": [
      "Er führt die Firma zusammen mit seiner Tochter.",
      "Er berät, ist aber nicht mehr im täglichen Geschäft aktiv.",
      "Er hat das Unternehmen ganz verlassen."
     ],
     "loesung": 1,
     "stelle": "mischt sich in das Tagesgeschäft aber nach eigener Aussage nicht mehr ein",
     "erklaerung": "Er ist noch im Beirat, also beratend tätig, aber nicht im Tagesgeschäft."
    },
    {
     "art": "hoerwahl",
     "ort": "Radioporträt — Kunden",
     "wer": "Frau",
     "text": "Früher waren Autohersteller die wichtigsten Kunden. Heute liefert die Firma ihre Sensoren vor allem an Hersteller von Medizingeräten. Die Autoindustrie macht nur noch etwa ein Zehntel des Geschäfts aus.",
     "frage": "Wer sind heute die wichtigsten Kunden?",
     "opt": [
      "Hersteller von Medizingeräten.",
      "Autohersteller.",
      "Zu gleichen Teilen beide Branchen."
     ],
     "loesung": 0,
     "stelle": "vor allem an Hersteller von Medizingeräten",
     "erklaerung": "„Früher\" gegen „heute\": Die Autoindustrie ist nur noch ein Zehntel."
    }
   ]
  },
  {
   "id": "tbb2h3",
   "stufe": 2,
   "titel": "Besprechungen: Wer will was?",
   "kurz": "In der Besprechung zählt, wer welchen Vorschlag macht, wer zustimmt und wer bremst.",
   "ziel": "Nach diesem Block erkennst du in einem Gesprächsausschnitt, welche Position eine Person vertritt — auch wenn sie andere zitiert oder höflich widerspricht.",
   "zeichen": "🗣️",
   "farbe": "rot",
   "mal": 1,
   "aufgaben": [
    {
     "art": "hoerwahl",
     "ort": "Teambesprechung — Messeplanung",
     "wer": "Frau",
     "text": "Herr Brenner möchte den Stand auf der Messe dieses Jahr verkleinern, um Kosten zu sparen. Das verstehe ich, aber ich halte das für falsch. Gerade jetzt müssen wir zeigen, dass wir da sind.",
     "frage": "Was will die Sprecherin?",
     "opt": [
      "Den Messestand verkleinern.",
      "Ganz auf die Messe verzichten.",
      "Den Messestand nicht verkleinern."
     ],
     "loesung": 2,
     "stelle": "aber ich halte das für falsch",
     "erklaerung": "Der Vorschlag kommt von Herrn Brenner. Die Sprecherin widerspricht ihm."
    },
    {
     "art": "hoerwahl",
     "ort": "Abteilungsleiterrunde — Software",
     "wer": "Mann",
     "text": "Ich bin grundsätzlich für die neue Software. Ich würde sie aber erst in einer Abteilung testen, bevor wir sie im ganzen Haus einführen. Sonst haben wir am Ende überall dieselben Probleme.",
     "frage": "Was schlägt der Sprecher vor?",
     "opt": [
      "Die Software gar nicht einzuführen.",
      "Die Software zuerst in einem kleinen Bereich auszuprobieren.",
      "Die Software sofort im ganzen Unternehmen zu nutzen."
     ],
     "loesung": 1,
     "stelle": "erst in einer Abteilung testen",
     "erklaerung": "Er ist dafür, aber mit Einschränkung: zuerst ein Test in einer Abteilung."
    },
    {
     "art": "hoerwahl",
     "ort": "Besprechung — Kundenbeschwerde",
     "wer": "Frau",
     "text": "Frau Okafor aus dem Vertrieb würde dem Kunden am liebsten einen Rabatt anbieten. Ich sehe das anders. Wir sollten zuerst klären, ob der Fehler wirklich bei uns lag.",
     "frage": "Was möchte die Sprecherin zuerst?",
     "opt": [
      "Die Ursache des Fehlers prüfen.",
      "Dem Kunden sofort einen Rabatt geben.",
      "Die Beschwerde an den Vertrieb weitergeben."
     ],
     "loesung": 0,
     "stelle": "Wir sollten zuerst klären, ob der Fehler wirklich bei uns lag",
     "erklaerung": "Der Rabatt ist die Idee von Frau Okafor. Die Sprecherin will zuerst die Ursache klären."
    },
    {
     "art": "hoerwahl",
     "ort": "Teamsitzung — Urlaubsplanung",
     "wer": "Mann",
     "text": "Von mir aus können wir die Urlaubsplanung gern wie letztes Jahr machen. Wichtig ist mir nur, dass diesmal nicht wieder alle Eltern in den Sommerferien frei bekommen und die anderen nie.",
     "frage": "Was ist dem Sprecher wichtig?",
     "opt": [
      "Dass Eltern immer Vorrang haben.",
      "Dass das Verfahren komplett geändert wird.",
      "Dass die Urlaubszeiten gerechter verteilt werden."
     ],
     "loesung": 2,
     "stelle": "nicht wieder alle Eltern in den Sommerferien frei bekommen",
     "erklaerung": "Das Verfahren darf bleiben. Ihm geht es um eine faire Verteilung der Ferienzeit."
    },
    {
     "art": "hoerwahl",
     "ort": "Projektbesprechung — Termin",
     "wer": "Frau",
     "text": "Die Geschäftsführung erwartet, dass wir den Termin Ende März halten. Ehrlich gesagt sehe ich das mit dem jetzigen Personal nicht. Entweder wir bekommen Unterstützung, oder wir verschieben auf Mai.",
     "frage": "Wie schätzt die Sprecherin den Termin Ende März ein?",
     "opt": [
      "Sie hält ihn ohne zusätzliche Hilfe für nicht machbar.",
      "Sie ist sicher, dass das Team ihn schafft.",
      "Sie möchte das Projekt ganz stoppen."
     ],
     "loesung": 0,
     "stelle": "sehe ich das mit dem jetzigen Personal nicht",
     "erklaerung": "Die Erwartung kommt von der Geschäftsführung. Sie selbst hält den Termin nur mit Unterstützung für möglich."
    },
    {
     "art": "hoerwahl",
     "ort": "Besprechung — Dienstreisen",
     "wer": "Mann",
     "text": "Frau Lehmann hat ja vorgeschlagen, alle Kundentermine nur noch per Video zu machen. Für Routinegespräche finde ich das gut. Bei neuen Kunden würde ich aber weiterhin persönlich hinfahren.",
     "frage": "Wie steht der Sprecher zum Vorschlag von Frau Lehmann?",
     "opt": [
      "Er lehnt ihn vollständig ab.",
      "Er stimmt ihm teilweise zu.",
      "Er stimmt ihm ohne Einschränkung zu."
     ],
     "loesung": 1,
     "stelle": "Bei neuen Kunden würde ich aber weiterhin persönlich hinfahren",
     "erklaerung": "Ja für Routinegespräche, nein für neue Kunden — also teilweise Zustimmung."
    },
    {
     "art": "hoerwahl",
     "ort": "Teambesprechung — Büroumbau",
     "wer": "Frau",
     "text": "Ein Großraumbüro wäre sicher günstiger, das hat Herr Yilmaz richtig ausgerechnet. Mein Vorschlag wäre trotzdem ein Kompromiss: offene Flächen für die Teams und ein paar ruhige Räume für konzentriertes Arbeiten.",
     "frage": "Was schlägt die Sprecherin vor?",
     "opt": [
      "Nur Einzelbüros.",
      "Ein reines Großraumbüro.",
      "Eine Mischung aus offenen und ruhigen Bereichen."
     ],
     "loesung": 2,
     "stelle": "offene Flächen für die Teams und ein paar ruhige Räume",
     "erklaerung": "Sie erkennt die Rechnung von Herrn Yilmaz an, schlägt aber einen Kompromiss vor."
    },
    {
     "art": "hoerwahl",
     "ort": "Vertriebsrunde — Preise",
     "wer": "Mann",
     "text": "Ich weiß, dass einige von Ihnen die Preise jetzt erhöhen wollen. Ich würde damit bis zum Herbst warten. Die meisten Verträge laufen ohnehin erst dann aus, und vorher verärgern wir nur unsere Stammkunden.",
     "frage": "Was will der Sprecher?",
     "opt": [
      "Die Preise sofort erhöhen.",
      "Die Preiserhöhung verschieben.",
      "Die Preise senken."
     ],
     "loesung": 1,
     "stelle": "Ich würde damit bis zum Herbst warten",
     "erklaerung": "Die sofortige Erhöhung wollen „einige von Ihnen\". Er selbst will bis zum Herbst warten."
    },
    {
     "art": "hoerwahl",
     "ort": "Besprechung — Weiterbildung",
     "wer": "Frau",
     "text": "Ich habe nichts gegen den Englischkurs, den die Personalabteilung anbietet. Nur finde ich, er sollte in der Arbeitszeit stattfinden und nicht abends. Sonst nimmt doch niemand teil.",
     "frage": "Was kritisiert die Sprecherin?",
     "opt": [
      "Die Uhrzeit des Kurses.",
      "Den Inhalt des Kurses.",
      "Dass überhaupt ein Kurs angeboten wird."
     ],
     "loesung": 0,
     "stelle": "er sollte in der Arbeitszeit stattfinden und nicht abends",
     "erklaerung": "„nichts gegen den Kurs\" — ihre Kritik betrifft nur den Zeitpunkt."
    },
    {
     "art": "hoerwahl",
     "ort": "Besprechung — Lieferantenwechsel",
     "wer": "Mann",
     "text": "Der neue Lieferant ist billiger, da hat Frau Petrov völlig recht. Aber bevor wir wechseln, möchte ich Referenzen von anderen Kunden sehen. Wir können uns keine Lieferausfälle leisten.",
     "frage": "Was verlangt der Sprecher vor einem Wechsel?",
     "opt": [
      "Einen noch niedrigeren Preis.",
      "Die Zustimmung von Frau Petrov.",
      "Informationen über die Zuverlässigkeit des Lieferanten."
     ],
     "loesung": 2,
     "stelle": "möchte ich Referenzen von anderen Kunden sehen",
     "erklaerung": "Referenzen sollen zeigen, ob der Lieferant zuverlässig ist. Den Preis findet er schon gut."
    }
   ]
  },
  {
   "id": "tbb2h4",
   "stufe": 2,
   "titel": "Einmal hören — die typischen Fallen",
   "kurz": "Korrekturen, Zahlen-Verwechslungen, „früher — heute\" und Negationen: Hier passieren die meisten Fehler.",
   "ziel": "Nach diesem Block erkennst du die typischen Fallen im Prüfungsteil Hören und lässt dich von gehörten Wörtern nicht in die Irre führen.",
   "zeichen": "⚠️",
   "farbe": "lila",
   "mal": 1,
   "aufgaben": [
    {
     "art": "hoerwahl",
     "ort": "Falle: Korrektur im Satz",
     "wer": "Frau",
     "text": "Die Sitzung findet am Donnerstag statt, nein, Entschuldigung, am Freitag, weil Herr Adler am Donnerstag auf Dienstreise ist. Beginn ist wie immer um neun Uhr.",
     "frage": "Wann findet die Sitzung statt?",
     "opt": [
      "Am Donnerstag um neun Uhr.",
      "Am Freitag um neun Uhr.",
      "Am Freitag um zehn Uhr."
     ],
     "loesung": 1,
     "stelle": "nein, Entschuldigung, am Freitag",
     "erklaerung": "Die erste Angabe wird korrigiert. Es zählt immer die letzte, korrigierte Information."
    },
    {
     "art": "hoerwahl",
     "ort": "Falle: Zahl gehört zu etwas anderem",
     "wer": "Mann",
     "text": "Unser Standort in Weißbach hat fünfzig Mitarbeiter. Im nächsten Jahr eröffnen wir einen zweiten Standort, dort sollen zunächst zwanzig Leute arbeiten.",
     "frage": "Wie viele Mitarbeiter sollen am neuen Standort arbeiten?",
     "opt": [
      "Zwanzig.",
      "Fünfzig.",
      "Siebzig."
     ],
     "loesung": 0,
     "stelle": "dort sollen zunächst zwanzig Leute arbeiten",
     "erklaerung": "Fünfzig gehört zum alten Standort. Siebzig wäre die Summe — danach ist nicht gefragt."
    },
    {
     "art": "hoerwahl",
     "ort": "Falle: Früher und heute",
     "wer": "Frau",
     "text": "Früher haben wir unsere Rechnungen per Post verschickt. Seit zwei Jahren geht alles per E-Mail, nur ein paar ältere Kunden bekommen auf Wunsch noch Papier.",
     "frage": "Wie verschickt die Firma heute ihre Rechnungen?",
     "opt": [
      "Nur per Post.",
      "Zu gleichen Teilen per Post und per E-Mail.",
      "Hauptsächlich per E-Mail."
     ],
     "loesung": 2,
     "stelle": "Seit zwei Jahren geht alles per E-Mail",
     "erklaerung": "„Früher\" ist die Falle. Heute fast alles per E-Mail, Papier nur auf Wunsch."
    },
    {
     "art": "hoerwahl",
     "ort": "Falle: Doppelte Verneinung",
     "wer": "Mann",
     "text": "Es ist nicht so, dass wir mit dem neuen Lager unzufrieden wären. Die Abläufe sind schneller geworden. Nur die Anfahrt für die Lastwagen müssen wir noch verbessern.",
     "frage": "Wie ist der Sprecher mit dem neuen Lager?",
     "opt": [
      "Unzufrieden.",
      "Insgesamt zufrieden.",
      "Er kann es noch nicht beurteilen."
     ],
     "loesung": 1,
     "stelle": "Es ist nicht so, dass wir mit dem neuen Lager unzufrieden wären",
     "erklaerung": "„nicht … unzufrieden\" heißt zufrieden. Nur ein kleiner Punkt muss verbessert werden."
    },
    {
     "art": "hoerwahl",
     "ort": "Falle: Plan und Wirklichkeit",
     "wer": "Frau",
     "text": "Eigentlich wollten wir das neue System schon im Januar starten. Wegen technischer Probleme hat sich das aber verzögert. Jetzt sieht es nach Anfang April aus.",
     "frage": "Wann startet das neue System voraussichtlich?",
     "opt": [
      "Anfang April.",
      "Im Januar.",
      "Das ist noch völlig offen."
     ],
     "loesung": 0,
     "stelle": "Jetzt sieht es nach Anfang April aus",
     "erklaerung": "„Eigentlich wollten wir\" beschreibt den alten Plan. Der neue Termin ist Anfang April."
    },
    {
     "art": "hoerwahl",
     "ort": "Falle: Gleiches Wort, andere Aussage",
     "wer": "Mann",
     "text": "Viele denken, Teilzeit lohnt sich bei uns nicht. Das stimmt aber nicht. Wer in Teilzeit arbeitet, bekommt bei uns dieselben Zuschläge und Weiterbildungen wie alle anderen.",
     "frage": "Was sagt der Sprecher über Teilzeit in seiner Firma?",
     "opt": [
      "Teilzeitkräfte haben weniger Vorteile.",
      "Teilzeit lohnt sich nicht.",
      "Teilzeitkräfte werden gleich behandelt."
     ],
     "loesung": 2,
     "stelle": "dieselben Zuschläge und Weiterbildungen wie alle anderen",
     "erklaerung": "„lohnt sich nicht\" ist die Meinung von „vielen\". Der Sprecher widerspricht."
    },
    {
     "art": "hoerwahl",
     "ort": "Falle: Einschränkung am Ende",
     "wer": "Frau",
     "text": "Ab sofort dürfen alle Mitarbeiter den Firmenparkplatz nutzen. Das gilt allerdings nur für Fahrzeuge, die vorher bei der Verwaltung angemeldet wurden.",
     "frage": "Wer darf den Parkplatz nutzen?",
     "opt": [
      "Jeder ohne Bedingung.",
      "Nur Mitarbeiter mit angemeldetem Auto.",
      "Nur die Mitarbeiter der Verwaltung."
     ],
     "loesung": 1,
     "stelle": "nur für Fahrzeuge, die vorher bei der Verwaltung angemeldet wurden",
     "erklaerung": "„alle\" wird am Ende eingeschränkt: Das Auto muss angemeldet sein."
    },
    {
     "art": "hoerwahl",
     "ort": "Falle: Prozent und Bruch",
     "wer": "Mann",
     "text": "Die Hälfte unserer Kunden bestellt inzwischen online. Vor drei Jahren war es nur ein Viertel. Wir rechnen damit, dass der Anteil weiter steigt.",
     "frage": "Wie viele Kunden bestellen heute online?",
     "opt": [
      "Etwa fünfzig Prozent.",
      "Etwa fünfundzwanzig Prozent.",
      "Mehr als drei Viertel."
     ],
     "loesung": 0,
     "stelle": "Die Hälfte unserer Kunden bestellt inzwischen online",
     "erklaerung": "Die Hälfte entspricht fünfzig Prozent. Ein Viertel ist der alte Wert."
    },
    {
     "art": "hoerwahl",
     "ort": "Falle: Wer handelt?",
     "wer": "Frau",
     "text": "Die Einladungen für das Kundenseminar verschickt diesmal nicht das Sekretariat, sondern jeder Vertriebsmitarbeiter selbst an seine eigenen Kunden. Das Sekretariat kümmert sich nur um die Räume.",
     "frage": "Wer verschickt die Einladungen?",
     "opt": [
      "Das Sekretariat.",
      "Die Kunden selbst.",
      "Die Mitarbeiter aus dem Vertrieb."
     ],
     "loesung": 2,
     "stelle": "sondern jeder Vertriebsmitarbeiter selbst",
     "erklaerung": "„nicht das Sekretariat, sondern\" — der Vertrieb verschickt, das Sekretariat organisiert die Räume."
    },
    {
     "art": "hoerwahl",
     "ort": "Falle: Bedingung",
     "wer": "Mann",
     "text": "Den Bonus zahlen wir in diesem Jahr nur aus, wenn das Ergebnis im vierten Quartal mindestens so gut ist wie im dritten. Das entscheiden wir also erst im Januar.",
     "frage": "Was ist über den Bonus bekannt?",
     "opt": [
      "Er wird sicher ausgezahlt.",
      "Ob er gezahlt wird, steht noch nicht fest.",
      "Er fällt dieses Jahr sicher aus."
     ],
     "loesung": 1,
     "stelle": "Das entscheiden wir also erst im Januar",
     "erklaerung": "„nur … wenn\" ist eine Bedingung. Die Entscheidung fällt erst im Januar."
    }
   ]
  }
 ],
 "teile": [
  {
   "nr": 1,
   "art": "ansage",
   "name": "Hören: Wirtschaftsnachrichten",
   "kurz": "Sechs Meldungen — nur EINMAL hören",
   "was": "Eine Nachrichtensendung aus der Wirtschaft. Zu jeder Meldung eine Aussage: richtig oder falsch?",
   "tipp": "Kernaussage erfassen: Was ist passiert, wer hat was beschlossen?",
   "zeichen": "📻",
   "farbe": "turq",
   "punkte": 6,
   "mal": 1,
   "runden": [
    {
     "id": "b2bbbh1s1",
     "titel": "Wirtschaftsnachrichten am Mittag",
     "aufgaben": [
      {
       "von": "Meldung 1 — Arbeitsmarkt",
       "wer": "Mann",
       "text": "Die Zahl der offenen Stellen im Land ist im vergangenen Quartal leicht gesunken. Nach Angaben der Arbeitsagentur waren zuletzt rund dreihundertvierzigtausend Stellen unbesetzt, etwa vier Prozent weniger als im Vorjahr. Von einer Entspannung könne man trotzdem nicht sprechen, sagte die Leiterin der Behörde. Vor allem in der Pflege, im Handwerk und in der Kinderbetreuung fänden Betriebe weiterhin kaum Personal. Viele Stellen blieben dort länger als ein halbes Jahr offen.",
       "satz": "Der Fachkräftemangel ist laut Arbeitsagentur weitgehend überwunden.",
       "loesung": false,
       "stelle": "Von einer Entspannung könne man trotzdem nicht sprechen",
       "erklaerung": "Die Zahl sinkt nur leicht. In mehreren Branchen fehlt weiterhin Personal."
      },
      {
       "von": "Meldung 2 — Handel",
       "wer": "Frau",
       "text": "Der Einzelhandel in der Region Nordhagen blickt auf ein gutes Herbstgeschäft zurück. Die Umsätze lagen im Oktober um gut drei Prozent über dem Vorjahresmonat. Besonders gefragt waren Haushaltswaren und Sportartikel. Der Handelsverband führt das vor allem auf die gesunkenen Energiepreise zurück, die den Verbrauchern wieder mehr Geld zum Einkaufen lassen. Für das Weihnachtsgeschäft ist der Verband dennoch vorsichtig und rechnet nur mit einem kleinen Plus.",
       "satz": "Die Händler erwarten zu Weihnachten ein deutlich stärkeres Wachstum als im Herbst.",
       "loesung": false,
       "stelle": "rechnet nur mit einem kleinen Plus",
       "erklaerung": "Der Verband ist für Weihnachten „vorsichtig\" und erwartet nur ein kleines Plus."
      },
      {
       "von": "Meldung 3 — Industrie",
       "wer": "Mann",
       "text": "Der Maschinenbauer Kerlinger aus Bad Ohlau stellt seine Produktion schrittweise auf Ökostrom um. Bis zum Ende des übernächsten Jahres soll das Hauptwerk vollständig mit Strom aus Sonne und Wind versorgt werden. Dazu baut das Unternehmen auf seinen Hallendächern eine große Solaranlage. Den restlichen Bedarf deckt ein langfristiger Liefervertrag mit einem Windpark an der Küste. Die Investition beträgt nach Firmenangaben rund zwölf Millionen Euro.",
       "satz": "Ein Maschinenbauer will sein Hauptwerk künftig nur noch mit erneuerbarer Energie betreiben.",
       "loesung": true,
       "stelle": "vollständig mit Strom aus Sonne und Wind versorgt werden",
       "erklaerung": "Ökostrom aus Sonne und Wind für das ganze Hauptwerk — also nur erneuerbare Energie."
      },
      {
       "von": "Meldung 4 — Logistik",
       "wer": "Frau",
       "text": "Paketdienste in der Region suchen dringend Fahrer für die Wochen vor Weihnachten. Nach Schätzungen der Branche werden allein im Großraum Lindenfels rund achthundert zusätzliche Aushilfen gebraucht. Mehrere Unternehmen haben deshalb ihre Löhne für Saisonkräfte erhöht und zahlen erstmals einen Bonus, wenn die Aushilfen bis Ende Dezember bleiben. Bewerber brauchen einen Führerschein für Kleintransporter, Erfahrung ist dagegen keine Voraussetzung.",
       "satz": "Für die Aushilfsjobs bei den Paketdiensten ist Berufserfahrung nicht nötig.",
       "loesung": true,
       "stelle": "Erfahrung ist dagegen keine Voraussetzung",
       "erklaerung": "Verlangt wird nur der Führerschein, Erfahrung braucht man nicht."
      },
      {
       "von": "Meldung 5 — Energie",
       "wer": "Mann",
       "text": "Die Stadtwerke Talbrück senken zum ersten Januar ihre Strompreise für Gewerbekunden. Kleine Betriebe wie Bäckereien oder Friseure zahlen dann im Schnitt rund acht Prozent weniger. Für Privathaushalte bleiben die Preise dagegen vorerst unverändert. Die Stadtwerke begründen den Unterschied mit älteren Einkaufsverträgen, die bei den Privatkunden erst im Sommer auslaufen. Danach sei auch dort eine Senkung möglich.",
       "satz": "Ab Januar zahlen alle Kunden der Stadtwerke weniger für Strom.",
       "loesung": false,
       "stelle": "Für Privathaushalte bleiben die Preise dagegen vorerst unverändert",
       "erklaerung": "Nur Gewerbekunden zahlen weniger. Privathaushalte müssen mindestens bis zum Sommer warten."
      },
      {
       "von": "Meldung 6 — Tarifverhandlungen",
       "wer": "Frau",
       "text": "Im Tarifstreit der Chemiebranche gibt es eine Einigung. Gewerkschaft und Arbeitgeber haben sich in der Nacht auf eine Lohnerhöhung in zwei Stufen geeinigt. Zum April steigen die Gehälter um drei Prozent, ein Jahr später um weitere zweieinhalb Prozent. Außerdem erhalten Auszubildende künftig einen Zuschuss für die Fahrtkosten. Die angekündigten Warnstreiks in mehreren Werken sind damit abgesagt.",
       "satz": "Nach der Einigung finden die geplanten Warnstreiks nicht statt.",
       "loesung": true,
       "stelle": "Die angekündigten Warnstreiks in mehreren Werken sind damit abgesagt",
       "erklaerung": "„abgesagt\" heißt: Die Warnstreiks finden nicht statt."
      }
     ]
    },
    {
     "id": "b2bbbh1s2",
     "titel": "Nachrichten aus der Arbeitswelt",
     "aufgaben": [
      {
       "von": "Meldung 1 — Homeoffice",
       "wer": "Frau",
       "text": "Immer mehr Unternehmen holen ihre Beschäftigten zurück ins Büro. Das zeigt eine Umfrage des Instituts für Arbeitsforschung in Weidenau. Fast die Hälfte der befragten Firmen will die Zahl der Homeoffice-Tage im kommenden Jahr verringern. Als Hauptgrund nennen die Firmen den fehlenden Austausch im Team. Ganz abschaffen will das Arbeiten von zu Hause aber kaum ein Unternehmen, die meisten planen zwei feste Bürotage pro Woche.",
       "satz": "Die meisten Unternehmen wollen das Homeoffice komplett abschaffen.",
       "loesung": false,
       "stelle": "Ganz abschaffen will das Arbeiten von zu Hause aber kaum ein Unternehmen",
       "erklaerung": "Die Firmen wollen weniger Homeoffice-Tage, aber nicht ganz darauf verzichten."
      },
      {
       "von": "Meldung 2 — Weiterbildung",
       "wer": "Mann",
       "text": "Beschäftigte in kleinen und mittleren Betrieben können ab sofort eine neue Förderung für Weiterbildungen beantragen. Das Land übernimmt bis zur Hälfte der Kursgebühren, höchstens aber zweitausend Euro pro Person und Jahr. Gefördert werden vor allem Kurse zu digitalen Themen und zu Fremdsprachen. Den Antrag muss der Arbeitgeber stellen, und zwar spätestens vier Wochen vor Kursbeginn.",
       "satz": "Die Beschäftigten müssen die Förderung selbst beantragen.",
       "loesung": false,
       "stelle": "Den Antrag muss der Arbeitgeber stellen",
       "erklaerung": "Nicht die Beschäftigten, sondern der Arbeitgeber stellt den Antrag."
      },
      {
       "von": "Meldung 3 — Fachkräfte aus dem Ausland",
       "wer": "Frau",
       "text": "Die Anerkennung ausländischer Berufsabschlüsse soll deutlich schneller werden. Ab dem kommenden Frühjahr können Anträge vollständig online eingereicht werden. Außerdem müssen die zuständigen Kammern künftig innerhalb von acht Wochen entscheiden, bisher dauerte das Verfahren oft mehr als ein halbes Jahr. Wirtschaftsverbände begrüßen die Reform. Sie hoffen, dass dadurch vor allem Pflegekräfte und Ingenieure früher eine Arbeit aufnehmen können.",
       "satz": "Über die Anerkennung von Abschlüssen soll künftig schneller entschieden werden.",
       "loesung": true,
       "stelle": "innerhalb von acht Wochen entscheiden",
       "erklaerung": "Statt oft mehr als einem halben Jahr gilt bald eine Frist von acht Wochen."
      },
      {
       "von": "Meldung 4 — Ausbildung",
       "wer": "Mann",
       "text": "Auf dem Ausbildungsmarkt gibt es auch in diesem Herbst mehr freie Plätze als Bewerber. Rund achtzehntausend Lehrstellen sind noch unbesetzt, besonders im Lebensmittelhandwerk und in der Gastronomie. Gleichzeitig haben etwa sechstausend junge Menschen noch keinen Ausbildungsplatz gefunden. Die Kammern sprechen von einem Problem der Passung: Viele Bewerber wünschen sich Büroberufe, während die freien Stellen vor allem im Handwerk liegen.",
       "satz": "Viele Lehrstellen bleiben frei, weil die Wünsche der Bewerber nicht zu den Angeboten passen.",
       "loesung": true,
       "stelle": "Viele Bewerber wünschen sich Büroberufe",
       "erklaerung": "Bewerber wollen ins Büro, die freien Plätze liegen aber im Handwerk — das ist das „Problem der Passung\"."
      },
      {
       "von": "Meldung 5 — Arbeitsschutz",
       "wer": "Frau",
       "text": "Die Zahl der Arbeitsunfälle ist im vergangenen Jahr auf den niedrigsten Stand seit Beginn der Statistik gefallen. Das teilte die Berufsgenossenschaft in Hellberg mit. Gestiegen sind allerdings die Unfälle auf dem Weg zur Arbeit, vor allem mit Fahrrädern und Elektrorollern. Die Berufsgenossenschaft rät Betrieben deshalb, ihren Beschäftigten Sicherheitstrainings für den Arbeitsweg anzubieten.",
       "satz": "Sowohl die Unfälle im Betrieb als auch die Unfälle auf dem Arbeitsweg sind zurückgegangen.",
       "loesung": false,
       "stelle": "Gestiegen sind allerdings die Unfälle auf dem Weg zur Arbeit",
       "erklaerung": "Nur die Arbeitsunfälle sind gesunken. Die Wegeunfälle haben zugenommen."
      },
      {
       "von": "Meldung 6 — Arbeitszeit",
       "wer": "Mann",
       "text": "Ein Softwarehaus aus Rimbach testet ab Januar die Vier-Tage-Woche. Ein Jahr lang arbeiten alle Beschäftigten nur noch von Montag bis Donnerstag, und zwar bei vollem Lohn. Die tägliche Arbeitszeit steigt dabei nicht. Die Geschäftsführung hofft, so leichter neue Fachkräfte zu gewinnen. Ob das Modell nach der Testphase bleibt, soll eine Befragung der Mitarbeiter und der Kunden entscheiden.",
       "satz": "Bei dem Versuch verdienen die Beschäftigten weniger als bisher.",
       "loesung": false,
       "stelle": "und zwar bei vollem Lohn",
       "erklaerung": "Trotz eines Arbeitstages weniger bleibt der Lohn gleich."
      }
     ]
    },
    {
     "id": "b2bbbh1s3",
     "titel": "Branchennachrichten am Morgen",
     "aufgaben": [
      {
       "von": "Meldung 1 — Pflege",
       "wer": "Mann",
       "text": "Die Klinikgruppe Sonnhalde will dem Personalmangel mit flexibleren Dienstplänen begegnen. Pflegekräfte können ab dem kommenden Monat selbst wählen, ob sie lieber kurze Schichten von sechs Stunden oder längere Schichten von zehn Stunden arbeiten. Außerdem sollen Teilzeitkräfte ihre Dienste künftig per App untereinander tauschen dürfen. Die Klinikleitung hofft, dass so auch ehemalige Mitarbeiter zurückkehren.",
       "satz": "Die Pflegekräfte der Klinikgruppe dürfen zwischen verschiedenen Schichtlängen wählen.",
       "loesung": true,
       "stelle": "können ab dem kommenden Monat selbst wählen",
       "erklaerung": "Sie wählen selbst zwischen Schichten von sechs oder zehn Stunden."
      },
      {
       "von": "Meldung 2 — Bauwirtschaft",
       "wer": "Frau",
       "text": "Die Bauwirtschaft meldet zum dritten Mal in Folge weniger Aufträge. Vor allem im Wohnungsbau fehlen neue Projekte, weil viele Bauherren wegen der hohen Zinsen abwarten. Besser sieht es beim Straßenbau und bei der Sanierung von Schulen aus, hier sind die Bücher der Firmen gut gefüllt. Der Bauverband warnt dennoch vor Entlassungen, falls sich die Lage im Wohnungsbau bis zum Sommer nicht bessert.",
       "satz": "Alle Bereiche der Bauwirtschaft leiden unter fehlenden Aufträgen.",
       "loesung": false,
       "stelle": "Besser sieht es beim Straßenbau und bei der Sanierung von Schulen aus",
       "erklaerung": "Nur der Wohnungsbau hat zu wenige Aufträge, Straßenbau und Schulsanierung laufen gut."
      },
      {
       "von": "Meldung 3 — Gastronomie",
       "wer": "Mann",
       "text": "Viele Restaurants im Land verkürzen ihre Öffnungszeiten. Laut einer Umfrage des Gaststättenverbands hat inzwischen jeder dritte Betrieb mindestens einen zusätzlichen Ruhetag eingeführt. Als Grund nennen die Wirte nicht in erster Linie die Kosten, sondern fehlendes Personal in Küche und Service. Gleichzeitig berichten viele Betriebe, dass die Gäste an den verbleibenden Tagen häufiger kommen als früher.",
       "satz": "Die Restaurants schließen öfter vor allem wegen der hohen Kosten.",
       "loesung": false,
       "stelle": "nicht in erster Linie die Kosten, sondern fehlendes Personal",
       "erklaerung": "„nicht in erster Linie … sondern\": Hauptgrund ist der Personalmangel."
      },
      {
       "von": "Meldung 4 — Automobilzulieferer",
       "wer": "Frau",
       "text": "Der Autozulieferer Brandt und Söhne aus Wiesenthal verlagert einen Teil seiner Fertigung ins Ausland. Betroffen sind rund hundertfünfzig Stellen in der Montage. Kündigungen soll es nach Angaben des Unternehmens aber nicht geben. Die betroffenen Mitarbeiter sollen in die neue Abteilung für Elektroantriebe wechseln, die am Standort Wiesenthal aufgebaut wird. Der Betriebsrat will die Pläne in den nächsten Wochen genau prüfen.",
       "satz": "Durch die Verlagerung verlieren hundertfünfzig Beschäftigte ihre Arbeit.",
       "loesung": false,
       "stelle": "Kündigungen soll es nach Angaben des Unternehmens aber nicht geben",
       "erklaerung": "Die Stellen in der Montage fallen weg, aber die Leute wechseln in eine neue Abteilung."
      },
      {
       "von": "Meldung 5 — Softwarebranche",
       "wer": "Mann",
       "text": "Die Softwarebranche wächst weiter kräftig. Der Branchenverband erwartet für dieses Jahr ein Umsatzplus von rund sieben Prozent. Treiber sind vor allem Programme mit künstlicher Intelligenz, die viele Unternehmen inzwischen in Buchhaltung und Kundenservice einsetzen. Allerdings fehlen den Firmen nach eigenen Angaben rund vierzigtausend Fachkräfte. Ohne sie könne das Wachstum schon im nächsten Jahr deutlich schwächer ausfallen.",
       "satz": "Der Personalmangel könnte das Wachstum der Softwarebranche bremsen.",
       "loesung": true,
       "stelle": "Ohne sie könne das Wachstum schon im nächsten Jahr deutlich schwächer ausfallen",
       "erklaerung": "Ohne die fehlenden Fachkräfte wird das Wachstum laut Verband schwächer — also gebremst."
      },
      {
       "von": "Meldung 6 — Landwirtschaft",
       "wer": "Frau",
       "text": "Obstbauern im Altenland ziehen eine gemischte Bilanz der diesjährigen Apfelernte. Die Menge war wegen des späten Frosts im Frühjahr deutlich kleiner als im Vorjahr. Dafür ist die Qualität der Früchte nach Angaben der Erzeuger sehr gut. Weil die Nachfrage im Handel stabil ist, rechnen die Betriebe mit höheren Preisen. Für die Verbraucher dürften Äpfel aus der Region in diesem Winter also etwas teurer werden.",
       "satz": "Die Apfelernte war in diesem Jahr kleiner, aber von guter Qualität.",
       "loesung": true,
       "stelle": "Dafür ist die Qualität der Früchte nach Angaben der Erzeuger sehr gut",
       "erklaerung": "Weniger Menge wegen des Frosts, „dafür\" sehr gute Qualität."
      }
     ]
    }
   ]
  },
  {
   "nr": 2,
   "art": "interview",
   "name": "Hören: Firmenporträt",
   "kurz": "Ein Radioporträt, sieben Fragen a/b/c — EINMAL hören",
   "was": "Ein Radiobeitrag stellt eine Firma vor. Sieben Fragen mit je drei Antworten.",
   "tipp": "Firmenporträts sind voller Zahlen und Jahreszahlen — achte darauf, worauf sie sich beziehen.",
   "zeichen": "🏭",
   "farbe": "gold",
   "punkte": 7,
   "mal": 1,
   "runden": [
    {
     "id": "b2bbbh2s1",
     "titel": "Firmenporträt: Ein Familienbetrieb für Heiztechnik",
     "aufgaben": [
      {
       "ort": "Firmenporträt — Abschnitt 1",
       "zeilen": [
        {
         "wer": "Mann",
         "text": "Guten Morgen und willkommen zu unserer Reihe „Betriebe aus der Region\". Heute bei mir im Studio ist Katrin Brandauer, die seit zwei Jahren die Brandauer Wärmetechnik in Lindenfeld leitet. Frau Brandauer, Ihr Betrieb ist ja schon ziemlich alt, oder?"
        },
        {
         "wer": "Frau",
         "text": "Ja, mein Großvater hat ihn vor über sechzig Jahren gegründet, damals noch als reine Klempnerei. Heizungen kamen erst dazu, als mein Vater übernommen hat. Ich bin also die dritte Generation, und ehrlich gesagt war das lange gar nicht mein Plan."
        }
       ],
       "frage": "Was erfährt man über die Geschichte des Betriebs?",
       "opt": [
        "Der Großvater hat von Anfang an Heizungen eingebaut.",
        "Der Betrieb hat erst unter dem Vater mit Heizungen begonnen.",
        "Frau Brandauer wollte den Betrieb schon immer übernehmen."
       ],
       "loesung": 1,
       "stelle": "Heizungen kamen erst dazu, als mein Vater übernommen hat",
       "erklaerung": "Gegründet als Klempnerei; Heizungen kamen erst mit dem Vater dazu."
      },
      {
       "ort": "Firmenporträt — Abschnitt 2",
       "zeilen": [
        {
         "wer": "Mann",
         "text": "Was hatten Sie denn ursprünglich vor?"
        },
        {
         "wer": "Frau",
         "text": "Ich habe Betriebswirtschaft studiert und danach fünf Jahre bei einer Versicherung im Controlling gearbeitet. Das hat mir durchaus Spaß gemacht. Aber als mein Vater gesundheitliche Probleme bekam, stand die Frage im Raum, ob wir den Betrieb verkaufen. Und da habe ich gemerkt, dass ich das nicht will. Die Meisterprüfung im Handwerk habe ich dann berufsbegleitend nachgeholt."
        }
       ],
       "frage": "Frau Brandauer hat den Betrieb übernommen, weil …",
       "opt": [
        "sie einen Verkauf des Betriebs verhindern wollte.",
        "ihr die Arbeit im Controlling keinen Spaß gemacht hat.",
        "sie schon während des Studiums eine Meisterprüfung abgelegt hatte."
       ],
       "loesung": 0,
       "stelle": "Und da habe ich gemerkt, dass ich das nicht will",
       "erklaerung": "Der drohende Verkauf war der Auslöser; das Controlling hat ihr durchaus gefallen."
      },
      {
       "ort": "Firmenporträt — Abschnitt 3",
       "zeilen": [
        {
         "wer": "Mann",
         "text": "Wie groß ist der Betrieb heute?"
        },
        {
         "wer": "Frau",
         "text": "Wir sind vierzehn Leute, davon elf Monteure und drei im Büro. Vor fünf Jahren waren wir noch neun. Gewachsen sind wir vor allem durch die Wärmepumpen. Die Nachfrage ist so stark, dass wir im Moment Wartezeiten von bis zu vier Monaten haben. Das ist für die Kunden natürlich ärgerlich, und für uns auch, weil wir Aufträge ablehnen müssen."
        }
       ],
       "frage": "Wodurch ist der Betrieb in den letzten Jahren gewachsen?",
       "opt": [
        "Durch neue Mitarbeiter im Büro.",
        "Durch die Übernahme eines anderen Betriebs.",
        "Durch die hohe Nachfrage nach Wärmepumpen."
       ],
       "loesung": 2,
       "stelle": "Gewachsen sind wir vor allem durch die Wärmepumpen",
       "erklaerung": "Ausdrücklich genannt: Wachstum vor allem durch Wärmepumpen."
      },
      {
       "ort": "Firmenporträt — Abschnitt 4",
       "zeilen": [
        {
         "wer": "Mann",
         "text": "Warum stellen Sie nicht einfach mehr Leute ein?"
        },
        {
         "wer": "Frau",
         "text": "Das würden wir sofort tun, wenn wir sie finden würden. Ausgebildete Anlagenmechaniker sind kaum zu bekommen. Deshalb setzen wir inzwischen stark auf Quereinsteiger, zum Beispiel aus der Elektrotechnik oder aus Autowerkstätten. Die arbeiten ein halbes Jahr immer zusammen mit einem erfahrenen Kollegen, bevor sie allein zu Kunden fahren."
        }
       ],
       "frage": "Wie löst der Betrieb das Personalproblem?",
       "opt": [
        "Er bildet nur noch eigene Anlagenmechaniker aus.",
        "Er stellt Quereinsteiger ein und lässt sie zuerst begleitet arbeiten.",
        "Er schickt neue Mitarbeiter sofort allein zu einfachen Aufträgen."
       ],
       "loesung": 1,
       "stelle": "Deshalb setzen wir inzwischen stark auf Quereinsteiger",
       "erklaerung": "Quereinsteiger arbeiten ein halbes Jahr mit einem erfahrenen Kollegen, nicht sofort allein."
      },
      {
       "ort": "Firmenporträt — Abschnitt 5",
       "zeilen": [
        {
         "wer": "Mann",
         "text": "Haben sich die Kunden in den letzten Jahren verändert?"
        },
        {
         "wer": "Frau",
         "text": "Sehr. Früher hat man angerufen, wenn die Heizung kaputt war. Heute kommen die Leute mit vielen Fragen zu Förderprogrammen und Kosten. Wir haben deshalb eine Kollegin, die nur für die Beratung zuständig ist. Sie macht keine Montage, sondern kümmert sich darum, dass die Anträge vollständig sind. Das kostet uns Geld, aber es spart später viel Ärger."
        }
       ],
       "frage": "Die Kollegin für die Beratung …",
       "opt": [
        "hilft den Kunden bei Fragen zur Förderung und bei Anträgen.",
        "arbeitet halbtags in der Beratung und halbtags in der Montage.",
        "repariert vor allem Heizungen, die plötzlich ausfallen."
       ],
       "loesung": 0,
       "stelle": "sondern kümmert sich darum, dass die Anträge vollständig sind",
       "erklaerung": "Sie macht keine Montage, sondern Beratung zu Förderung und Anträgen."
      },
      {
       "ort": "Firmenporträt — Abschnitt 6",
       "zeilen": [
        {
         "wer": "Mann",
         "text": "Und was hat sich innerhalb des Betriebs geändert, seit Sie die Leitung haben?"
        },
        {
         "wer": "Frau",
         "text": "Vor allem die Organisation. Mein Vater hatte alles im Kopf und auf Zetteln. Wir haben eine digitale Auftragsplanung eingeführt, die Monteure sehen ihre Termine jetzt auf dem Tablet. Am Anfang gab es Widerstand, besonders bei den älteren Kollegen. Manche wollten das Tablet gar nicht erst einschalten. Inzwischen sind gerade die am zufriedensten, weil sie abends keine Berichte mehr schreiben müssen."
        }
       ],
       "frage": "Wie reagieren die älteren Monteure heute auf die digitale Planung?",
       "opt": [
        "Sie lehnen sie weiterhin ab.",
        "Sie nutzen sie nur für die Terminplanung.",
        "Sie gehören zu den zufriedensten Nutzern."
       ],
       "loesung": 2,
       "stelle": "Inzwischen sind gerade die am zufriedensten",
       "erklaerung": "Anfangs gab es Widerstand, heute sind gerade die Älteren am zufriedensten."
      },
      {
       "ort": "Firmenporträt — Abschnitt 7",
       "zeilen": [
        {
         "wer": "Mann",
         "text": "Zum Schluss: Wie sehen Sie die Zukunft des Betriebs?"
        },
        {
         "wer": "Frau",
         "text": "Ich bin optimistisch. Wir wollen aber bewusst nicht immer weiter wachsen. Zwanzig Leute, das wäre für mich die Grenze, damit ich noch jeden Kunden und jeden Mitarbeiter persönlich kenne. Lieber bilden wir mehr aus. Im nächsten Jahr nehmen wir zum ersten Mal drei Auszubildende gleichzeitig."
        },
        {
         "wer": "Mann",
         "text": "Frau Brandauer, vielen Dank für das Gespräch."
        }
       ],
       "frage": "Was plant Frau Brandauer für die Zukunft?",
       "opt": [
        "Der Betrieb soll möglichst schnell weiter wachsen.",
        "Der Betrieb soll mehr ausbilden, aber nicht zu groß werden.",
        "Sie will im nächsten Jahr zwanzig neue Mitarbeiter einstellen."
       ],
       "loesung": 1,
       "stelle": "Lieber bilden wir mehr aus",
       "erklaerung": "Zwanzig Leute ist die Obergrenze, nicht die Zahl der Neueinstellungen; Ziel ist mehr Ausbildung."
      }
     ]
    },
    {
     "id": "b2bbbh2s2",
     "titel": "Firmenporträt: Ein Start-up für Fahrradkuriere",
     "aufgaben": [
      {
       "ort": "Firmenporträt — Abschnitt 1",
       "zeilen": [
        {
         "wer": "Frau",
         "text": "Sie hören „Wirtschaft vor Ort\". Mein Gast ist heute Jonas Ebert, einer der beiden Gründer von Flinkrad, einem Kurierdienst mit Lastenrädern hier in Ostheim. Herr Ebert, wie kam es zu der Idee?"
        },
        {
         "wer": "Mann",
         "text": "Eigentlich aus Frust. Ich habe vorher in der Logistik eines großen Versandhändlers gearbeitet, und dort war die letzte Strecke zum Kunden immer das größte Problem. Die Lieferwagen standen in der Innenstadt ständig im Stau oder in zweiter Reihe. Mein Mitgründer Malik und ich dachten: Für kurze Wege in der Stadt muss es eine bessere Lösung geben."
        }
       ],
       "frage": "Die Idee zu Flinkrad entstand, weil …",
       "opt": [
        "Herr Ebert die Probleme bei der Lieferung in der Stadt kannte.",
        "Herr Ebert als Kurier oft im Stau stand.",
        "ein Versandhändler eine neue Lösung gesucht hat."
       ],
       "loesung": 0,
       "stelle": "die letzte Strecke zum Kunden immer das größte Problem",
       "erklaerung": "Er kannte das Problem aus seiner Arbeit in der Logistik, nicht als Kurier."
      },
      {
       "ort": "Firmenporträt — Abschnitt 2",
       "zeilen": [
        {
         "wer": "Frau",
         "text": "Wer sind heute Ihre Kunden?"
        },
        {
         "wer": "Mann",
         "text": "Am Anfang dachten wir, das werden vor allem Privatleute sein. Das war ein Irrtum. Heute machen Geschäftskunden fast neunzig Prozent unseres Umsatzes aus: Apotheken, Labore, Anwaltskanzleien und einige Läden in der Innenstadt. Die Apotheken sind besonders wichtig, weil sie Medikamente oft noch am selben Tag zu Patienten bringen müssen."
        }
       ],
       "frage": "Was sagt Herr Ebert über die Kunden?",
       "opt": [
        "Die meisten Aufträge kommen von Geschäftskunden.",
        "Privatleute sind die wichtigste Kundengruppe.",
        "Apotheken liefern ihre Medikamente inzwischen selbst."
       ],
       "loesung": 0,
       "stelle": "Heute machen Geschäftskunden fast neunzig Prozent unseres Umsatzes aus",
       "erklaerung": "Die Erwartung, dass Privatleute dominieren, war ein Irrtum."
      },
      {
       "ort": "Firmenporträt — Abschnitt 3",
       "zeilen": [
        {
         "wer": "Frau",
         "text": "Und wie war der Start finanziell?"
        },
        {
         "wer": "Mann",
         "text": "Schwierig. Die Banken waren sehr zurückhaltend, ein Kurierdienst mit Fahrrädern klang für sie nicht nach einem soliden Geschäft. Geholfen hat uns schließlich ein Gründerwettbewerb der Stadt. Das Preisgeld war nicht riesig, aber mit dem Preis in der Hand hat uns dann doch eine Genossenschaftsbank einen Kredit gegeben. Die ersten sechs Räder haben wir damit gekauft."
        }
       ],
       "frage": "Wie haben die Gründer die ersten Räder finanziert?",
       "opt": [
        "Allein mit dem Preisgeld eines Wettbewerbs.",
        "Mit dem Geld privater Investoren aus der Stadt.",
        "Mit einem Kredit, den sie nach einem gewonnenen Wettbewerb bekamen."
       ],
       "loesung": 2,
       "stelle": "mit dem Preis in der Hand hat uns dann doch eine Genossenschaftsbank einen Kredit gegeben",
       "erklaerung": "Der Preis öffnete die Tür zum Kredit; das Preisgeld allein reichte nicht."
      },
      {
       "ort": "Firmenporträt — Abschnitt 4",
       "zeilen": [
        {
         "wer": "Frau",
         "text": "Wie viele Leute fahren heute für Sie?"
        },
        {
         "wer": "Mann",
         "text": "Wir haben zweiundzwanzig Fahrerinnen und Fahrer, alle fest angestellt. Das ist uns wichtig, auch wenn viele uns am Anfang für verrückt erklärt haben. In der Branche arbeiten viele als Selbstständige ohne jede Absicherung. Das wollten wir von Anfang an anders machen. Es ist teurer, klar, aber unsere Leute bleiben dafür auch. Im letzten Jahr hat nur ein einziger Fahrer gekündigt."
        }
       ],
       "frage": "Warum stellt Flinkrad alle Fahrer fest an?",
       "opt": [
        "Weil Selbstständige in der Branche nicht erlaubt sind.",
        "Weil die Gründer faire Bedingungen bieten wollen und die Fahrer so bleiben.",
        "Weil feste Angestellte für die Firma billiger sind."
       ],
       "loesung": 1,
       "stelle": "Das wollten wir von Anfang an anders machen",
       "erklaerung": "Feste Anstellung ist teurer, aber gewollt; Folge ist eine geringe Kündigungsrate."
      },
      {
       "ort": "Firmenporträt — Abschnitt 5",
       "zeilen": [
        {
         "wer": "Frau",
         "text": "Was passiert eigentlich im Winter, wenn es schneit?"
        },
        {
         "wer": "Mann",
         "text": "Das ist die Frage, die wir am häufigsten hören. Die Räder haben spezielle Reifen, und bei normalem Winterwetter fahren wir ganz normal. Nur bei Glatteis stellen wir den Betrieb ein, das war im letzten Winter an drei Tagen der Fall. Die Kunden werden dann frühmorgens informiert und können ihre Sendungen auf den nächsten Tag verschieben."
        }
       ],
       "frage": "Was gilt im Winter?",
       "opt": [
        "Im Winter fährt Flinkrad nur mit Lieferwagen.",
        "Bei Schnee werden alle Sendungen verschoben.",
        "Bei Glatteis wird nicht gefahren."
       ],
       "loesung": 2,
       "stelle": "Nur bei Glatteis stellen wir den Betrieb ein",
       "erklaerung": "Bei normalem Winterwetter wird gefahren, nur Glatteis stoppt den Betrieb."
      },
      {
       "ort": "Firmenporträt — Abschnitt 6",
       "zeilen": [
        {
         "wer": "Frau",
         "text": "Sie haben vor Kurzem ein Lager am Stadtrand eröffnet. Warum?"
        },
        {
         "wer": "Mann",
         "text": "Große Paketdienste bringen ihre Sendungen jetzt mit Lastwagen zu uns an den Stadtrand, und wir übernehmen die Verteilung in die Innenstadt. So müssen die Lastwagen gar nicht mehr in die engen Straßen hineinfahren. Für die Stadt bedeutet das weniger Verkehr, und für uns ist es ein zweites Standbein, das sehr gut angelaufen ist."
        }
       ],
       "frage": "Wozu dient das neue Lager am Stadtrand?",
       "opt": [
        "Dort werden die Lastenräder repariert und abgestellt.",
        "Dort lagern Geschäftskunden ihre eigenen Waren.",
        "Dort übernimmt Flinkrad Sendungen anderer Paketdienste für die Innenstadt."
       ],
       "loesung": 2,
       "stelle": "wir übernehmen die Verteilung in die Innenstadt",
       "erklaerung": "Paketdienste liefern an das Lager, Flinkrad verteilt in die Innenstadt."
      },
      {
       "ort": "Firmenporträt — Abschnitt 7",
       "zeilen": [
        {
         "wer": "Frau",
         "text": "Wollen Sie mit Flinkrad auch in andere Städte?"
        },
        {
         "wer": "Mann",
         "text": "Anfragen gibt es, auch aus deutlich größeren Städten. Aber wir haben entschieden, erst einmal hier in Ostheim stabil zu werden. Wir haben gesehen, wie andere Start-ups zu schnell gewachsen und dann gescheitert sind. Vielleicht in zwei, drei Jahren. Bis dahin geben wir unser Wissen lieber an andere Gründer weiter, die etwas Ähnliches aufbauen wollen."
        },
        {
         "wer": "Frau",
         "text": "Herr Ebert, herzlichen Dank."
        }
       ],
       "frage": "Was sagt Herr Ebert zur Ausweitung auf andere Städte?",
       "opt": [
        "Flinkrad eröffnet bald einen Standort in einer größeren Stadt.",
        "Zunächst will sich Flinkrad in Ostheim festigen.",
        "Es gibt bisher keine Anfragen aus anderen Städten."
       ],
       "loesung": 1,
       "stelle": "erst einmal hier in Ostheim stabil zu werden",
       "erklaerung": "Anfragen gibt es, aber man will nicht zu schnell wachsen."
      }
     ]
    },
    {
     "id": "b2bbbh2s3",
     "titel": "Firmenporträt: Eine Großbäckerei aus der Region",
     "aufgaben": [
      {
       "ort": "Firmenporträt — Abschnitt 1",
       "zeilen": [
        {
         "wer": "Mann",
         "text": "Willkommen zu „Made in der Region\". Wenn Sie heute früh ein Brötchen gegessen haben, dann stammt es vielleicht aus dem Backhaus Mertens in Grünwiesen. Bei mir ist Sandra Holm, die Leiterin der Produktion. Frau Holm, wann beginnt bei Ihnen der Arbeitstag?"
        },
        {
         "wer": "Frau",
         "text": "Die erste Schicht fängt um zweiundzwanzig Uhr an, also am Vorabend. Dann wird der Teig vorbereitet, gebacken wird ab ein Uhr nachts. Um fünf Uhr fahren die ersten Lastwagen zu den Filialen und zu den Supermärkten. Ich selbst bin meistens ab vier Uhr da, um die Qualität zu kontrollieren, bevor die Ware das Haus verlässt."
        }
       ],
       "frage": "Wann ist Frau Holm normalerweise im Betrieb?",
       "opt": [
        "Ab vier Uhr morgens.",
        "Ab zweiundzwanzig Uhr am Vorabend.",
        "Ab ein Uhr nachts, wenn gebacken wird."
       ],
       "loesung": 0,
       "stelle": "Ich selbst bin meistens ab vier Uhr da",
       "erklaerung": "Zweiundzwanzig Uhr und ein Uhr betreffen die Schichten, nicht Frau Holm."
      },
      {
       "ort": "Firmenporträt — Abschnitt 2",
       "zeilen": [
        {
         "wer": "Mann",
         "text": "Wie viel backen Sie pro Nacht?"
        },
        {
         "wer": "Frau",
         "text": "An einem normalen Werktag sind es etwa achtzigtausend Brötchen und rund zwölftausend Brote. Am Samstag deutlich mehr. Beliefert werden zweiunddreißig eigene Filialen, dazu Kantinen, Krankenhäuser und Supermärkte. Die Supermärkte machen inzwischen ungefähr die Hälfte des Umsatzes aus, das hat sich in den letzten zehn Jahren stark verschoben."
        }
       ],
       "frage": "Was hat sich in den letzten zehn Jahren verändert?",
       "opt": [
        "Die Zahl der eigenen Filialen hat sich verdoppelt.",
        "Die Bäckerei beliefert keine Krankenhäuser mehr.",
        "Der Anteil der Supermärkte am Umsatz ist stark gestiegen."
       ],
       "loesung": 2,
       "stelle": "das hat sich in den letzten zehn Jahren stark verschoben",
       "erklaerung": "Die Supermärkte machen inzwischen etwa die Hälfte des Umsatzes aus."
      },
      {
       "ort": "Firmenporträt — Abschnitt 3",
       "zeilen": [
        {
         "wer": "Mann",
         "text": "Viele Leute denken bei einer Großbäckerei an Fabrikware. Was sagen Sie dazu?"
        },
        {
         "wer": "Frau",
         "text": "Natürlich arbeiten wir mit Maschinen, anders geht es bei diesen Mengen nicht. Aber bei den Broten führen wir lange Teigführungen, der Teig ruht teilweise bis zu achtzehn Stunden. Das ist für den Geschmack entscheidend. Und unseren Sauerteig setzen wir seit über vierzig Jahren selbst an, den kaufen wir nicht zu wie viele andere."
        }
       ],
       "frage": "Womit begründet Frau Holm die Qualität der Brote?",
       "opt": [
        "Die Brote werden ganz ohne Maschinen hergestellt.",
        "Der Teig bekommt viel Zeit, und der Sauerteig ist selbst angesetzt.",
        "Der Sauerteig wird von einem bekannten Hersteller gekauft."
       ],
       "loesung": 1,
       "stelle": "der Teig ruht teilweise bis zu achtzehn Stunden",
       "erklaerung": "Lange Teigruhe und eigener Sauerteig; Maschinen werden durchaus eingesetzt."
      },
      {
       "ort": "Firmenporträt — Abschnitt 4",
       "zeilen": [
        {
         "wer": "Mann",
         "text": "Ein großes Thema in Ihrer Branche sind die Energiekosten."
        },
        {
         "wer": "Frau",
         "text": "Ja, die Öfen laufen ja fast rund um die Uhr. Wir haben vor drei Jahren eine Anlage eingebaut, die die Abwärme der Öfen auffängt. Damit heizen wir jetzt das gesamte Verwaltungsgebäude und erwärmen das Wasser für die Reinigung. Die Investition war hoch, aber sie hat sich schneller gelohnt als gedacht, nämlich schon nach knapp zwei Jahren."
        }
       ],
       "frage": "Was macht die Bäckerei mit der Abwärme der Öfen?",
       "opt": [
        "Sie heizt damit Gebäude und erwärmt Wasser.",
        "Sie verkauft sie an benachbarte Betriebe.",
        "Sie nutzt sie, um die Öfen schneller vorzuheizen."
       ],
       "loesung": 0,
       "stelle": "Damit heizen wir jetzt das gesamte Verwaltungsgebäude",
       "erklaerung": "Verwaltungsgebäude und Reinigungswasser werden mit der Abwärme versorgt."
      },
      {
       "ort": "Firmenporträt — Abschnitt 5",
       "zeilen": [
        {
         "wer": "Mann",
         "text": "Was passiert eigentlich mit dem Brot, das abends in den Filialen übrig bleibt?"
        },
        {
         "wer": "Frau",
         "text": "Ein Teil geht an die Tafeln in der Region. Den Rest holen wir zurück, und daraus entsteht Paniermehl, das wir an Restaurants verkaufen. Wichtiger ist aber, dass weniger übrig bleibt. Seit einem Jahr planen die Filialen ihre Bestellungen mit einem Programm, das das Wetter und die Feiertage einrechnet. Seitdem sind die Reste um fast ein Drittel zurückgegangen."
        }
       ],
       "frage": "Wodurch sind die Reste in den Filialen zurückgegangen?",
       "opt": [
        "Durch die Spenden an die Tafeln.",
        "Durch den Verkauf von Paniermehl.",
        "Durch eine genauere Planung der Bestellungen."
       ],
       "loesung": 2,
       "stelle": "Seitdem sind die Reste um fast ein Drittel zurückgegangen",
       "erklaerung": "Spenden und Paniermehl verwerten Reste, weniger Reste entstehen durch die Planung."
      },
      {
       "ort": "Firmenporträt — Abschnitt 6",
       "zeilen": [
        {
         "wer": "Mann",
         "text": "Finden Sie genug Personal für die Nachtarbeit?"
        },
        {
         "wer": "Frau",
         "text": "Das ist schwierig, das gebe ich zu. Wir haben deshalb ein Modell eingeführt, bei dem niemand mehr als drei Nächte hintereinander arbeitet. Danach folgen mindestens zwei freie Tage. Außerdem bezahlen wir einen Zuschlag, der über dem Tarif liegt. Seit diesem Modell haben wir deutlich weniger Krankmeldungen, das war für uns die eigentliche Überraschung."
        }
       ],
       "frage": "Was hat Frau Holm am neuen Schichtmodell überrascht?",
       "opt": [
        "Dass sich mehr Bewerber gemeldet haben.",
        "Dass die Mitarbeiter seltener krank sind.",
        "Dass die Mitarbeiter keinen Zuschlag mehr verlangen."
       ],
       "loesung": 1,
       "stelle": "Seit diesem Modell haben wir deutlich weniger Krankmeldungen",
       "erklaerung": "Die Überraschung war der Rückgang der Krankmeldungen."
      },
      {
       "ort": "Firmenporträt — Abschnitt 7",
       "zeilen": [
        {
         "wer": "Mann",
         "text": "Und was ist als Nächstes geplant?"
        },
        {
         "wer": "Frau",
         "text": "Wir testen gerade eine kleine Linie mit Broten aus alten Getreidesorten, die Landwirte hier aus der Umgebung für uns anbauen. Die Mengen sind noch gering, und die Brote sind etwas teurer. Wenn die Kunden sie annehmen, wollen wir den Anbau mit den Landwirten im nächsten Jahr verdoppeln."
        },
        {
         "wer": "Mann",
         "text": "Da bin ich gespannt. Frau Holm, vielen Dank für den Besuch."
        }
       ],
       "frage": "Was gilt für die neue Brotlinie?",
       "opt": [
        "Sie wird zurzeit in kleinen Mengen getestet.",
        "Sie wird bereits in allen Filialen verkauft.",
        "Das Getreide dafür wird aus dem Ausland eingekauft."
       ],
       "loesung": 0,
       "stelle": "Die Mengen sind noch gering",
       "erklaerung": "Es ist eine Testphase mit Getreide von Landwirten aus der Umgebung."
      }
     ]
    }
   ]
  },
  {
   "nr": 3,
   "art": "diskussion",
   "name": "Hören: Besprechung",
   "kurz": "Eine Besprechung mit mehreren Personen — EINMAL hören",
   "was": "Eine Besprechung im Betrieb mit vier bis sechs Personen. Sieben Fragen mit je drei Antworten.",
   "tipp": "Achte darauf, wer was vorschlägt — und was am Ende beschlossen wird.",
   "zeichen": "👥",
   "farbe": "rot",
   "punkte": 7,
   "mal": 1,
   "runden": [
    {
     "id": "b2bbbh3s1",
     "titel": "Besprechung: Eine Anfrage aus Indien",
     "aufgaben": [
      {
       "ort": "Besprechung — Abschnitt 1",
       "zeilen": [
        {
         "wer": "Frau",
         "text": "Guten Morgen zusammen. Ich habe Sie kurzfristig eingeladen, weil wir gestern eine Anfrage aus Indien bekommen haben. Ein Lebensmittelhersteller in Pune möchte acht Verpackungsmaschinen bei uns kaufen. Das wäre für uns der größte Einzelauftrag der letzten Jahre. Herr Lenz, Sie haben sich die technischen Unterlagen schon angesehen?"
        },
        {
         "wer": "Mann",
         "text": "Ja, Frau Kessler. Grundsätzlich passt unsere Baureihe gut. Aber der Kunde will Beutel aus einer Folie verpacken, mit der wir noch nie gearbeitet haben. Das müssen wir vorher unbedingt testen."
        },
        {
         "wer": "Frau",
         "text": "Was könnte denn im schlimmsten Fall passieren?"
        },
        {
         "wer": "Mann",
         "text": "Wenn die Folie zu dünn ist, reißt sie beim Verschweißen, und die Maschine stoppt alle paar Minuten. Dann wäre die Leistung, die wir versprechen, nicht zu erreichen, und das wäre ein echtes Problem."
        }
       ],
       "frage": "Was ist aus technischer Sicht noch unklar?",
       "opt": [
        "Ob die Baureihe für Lebensmittel zugelassen ist.",
        "Ob die Maschinen mit der Folie des Kunden funktionieren.",
        "Ob acht Maschinen rechtzeitig gebaut werden können."
       ],
       "loesung": 1,
       "stelle": "mit der wir noch nie gearbeitet haben",
       "erklaerung": "Die Baureihe passt, nur die unbekannte Folie muss getestet werden."
      },
      {
       "ort": "Besprechung — Abschnitt 2",
       "zeilen": [
        {
         "wer": "Frau",
         "text": "Wie lange würde so ein Test dauern?"
        },
        {
         "wer": "Mann",
         "text": "Wenn der Kunde uns Folienmuster schickt, etwa drei Wochen. Das Problem ist der Versand. Muster aus Indien brauchen erfahrungsgemäß lange. Ich würde vorschlagen, dass wir die Folie bei einem europäischen Lieferanten bestellen, der dasselbe Material herstellt. Das geht in wenigen Tagen."
        },
        {
         "wer": "Frau",
         "text": "Gut, das klären Sie bitte direkt mit dem Kunden ab, ob das Material wirklich identisch ist."
        }
       ],
       "frage": "Was schlägt Herr Lenz für den Test vor?",
       "opt": [
        "Auf die Muster aus Indien zu warten.",
        "Den Test direkt beim Kunden in Pune durchzuführen.",
        "Das gleiche Material bei einem Lieferanten in Europa zu bestellen."
       ],
       "loesung": 2,
       "stelle": "dass wir die Folie bei einem europäischen Lieferanten bestellen",
       "erklaerung": "Muster aus Indien dauern zu lange, deshalb ein europäischer Lieferant."
      },
      {
       "ort": "Besprechung — Abschnitt 3",
       "zeilen": [
        {
         "wer": "Frau",
         "text": "Frau Yilmaz, wie sieht es mit Zoll und Einfuhr aus?"
        },
        {
         "wer": "Frau",
         "text": "Wir haben noch nie nach Indien geliefert, deshalb habe ich mich gestern erkundigt. Die Einfuhrzölle für Maschinen sind nicht unerheblich, und es gibt zusätzlich bestimmte Zertifikate, die verlangt werden. Ich empfehle, mit einer Spedition zu arbeiten, die Erfahrung mit Indien hat. Die Industrie- und Handelskammer hat mir zwei Namen genannt."
        },
        {
         "wer": "Frau",
         "text": "Und die Zölle, wer trägt die?"
        },
        {
         "wer": "Frau",
         "text": "Das hängt von den Lieferbedingungen ab, Frau Kessler. Ich würde vorschlagen, dass der Kunde die Einfuhr selbst übernimmt. Er kennt die Behörden vor Ort viel besser als wir."
        }
       ],
       "frage": "Was empfiehlt Frau Yilmaz?",
       "opt": [
        "Die Zertifikate selbst bei der Handelskammer zu beantragen.",
        "Auf die Lieferung zu verzichten, weil die Zölle zu hoch sind.",
        "Mit einer Spedition zusammenzuarbeiten, die Indien gut kennt."
       ],
       "loesung": 2,
       "stelle": "mit einer Spedition zu arbeiten, die Erfahrung mit Indien hat",
       "erklaerung": "Die Kammer hat nur Namen genannt; empfohlen wird eine erfahrene Spedition."
      },
      {
       "ort": "Besprechung — Abschnitt 4",
       "zeilen": [
        {
         "wer": "Frau",
         "text": "Herr Brandt, was sagen Sie aus Sicht der Finanzen?"
        },
        {
         "wer": "Mann",
         "text": "Das Volumen ist erfreulich, aber das Risiko auch. Der Kunde ist uns völlig unbekannt. Ich würde auf keinen Fall ohne Sicherheit liefern. Mein Vorschlag: dreißig Prozent Anzahlung bei Auftrag und für den Rest ein Akkreditiv über eine Bank. Dann bekommen wir das Geld, sobald wir die Versanddokumente vorlegen."
        }
       ],
       "frage": "Welche Zahlungsbedingungen schlägt Herr Brandt vor?",
       "opt": [
        "Zahlung des gesamten Betrags nach Lieferung.",
        "Eine Anzahlung und für den Rest eine Absicherung über eine Bank.",
        "Zahlung in drei gleichen Raten über ein Jahr."
       ],
       "loesung": 1,
       "stelle": "dreißig Prozent Anzahlung bei Auftrag und für den Rest ein Akkreditiv",
       "erklaerung": "Anzahlung plus Akkreditiv, weil der Kunde unbekannt ist."
      },
      {
       "ort": "Besprechung — Abschnitt 5",
       "zeilen": [
        {
         "wer": "Frau",
         "text": "Das klingt vernünftig. Der Kunde möchte übrigens bis Ende des Monats ein Angebot haben. Ist das zu schaffen, Herr Lenz?"
        },
        {
         "wer": "Mann",
         "text": "Ein vorläufiges Angebot ja, ein verbindliches nicht. Solange der Folientest nicht abgeschlossen ist, kann ich keine Leistungsdaten garantieren. Wir sollten deshalb ein Angebot unter Vorbehalt schicken und ausdrücklich schreiben, dass die endgültigen Werte nach dem Test folgen."
        }
       ],
       "frage": "Was sagt Herr Lenz zum Angebot?",
       "opt": [
        "Man soll ein Angebot unter Vorbehalt schicken.",
        "Ein verbindliches Angebot ist bis Monatsende möglich.",
        "Ein Angebot ist erst nach dem Besuch beim Kunden möglich."
       ],
       "loesung": 0,
       "stelle": "Wir sollten deshalb ein Angebot unter Vorbehalt schicken",
       "erklaerung": "Ohne abgeschlossenen Test sind keine verbindlichen Leistungsdaten möglich."
      },
      {
       "ort": "Besprechung — Abschnitt 6",
       "zeilen": [
        {
         "wer": "Mann",
         "text": "Darf ich noch etwas ergänzen? Ich bin Herr Petersen vom Kundendienst. Bei einer Lieferung nach Indien müssen wir auch an die Wartung denken. Wir können nicht jedes Mal einen Techniker hinschicken. Ich würde vorschlagen, zwei Mitarbeiter des Kunden hier bei uns zwei Wochen lang zu schulen. Die kleineren Störungen können sie dann selbst beheben."
        }
       ],
       "frage": "Was schlägt Herr Petersen für die Wartung vor?",
       "opt": [
        "Einen Techniker dauerhaft nach Indien zu schicken.",
        "Die Wartung einem Partnerunternehmen in Indien zu überlassen.",
        "Mitarbeiter des Kunden in Deutschland auszubilden."
       ],
       "loesung": 2,
       "stelle": "zwei Mitarbeiter des Kunden hier bei uns zwei Wochen lang zu schulen",
       "erklaerung": "Die Schulung findet hier statt, damit der Kunde kleine Störungen selbst behebt."
      },
      {
       "ort": "Besprechung — Abschnitt 7",
       "zeilen": [
        {
         "wer": "Frau",
         "text": "Sehr gut, das nehmen wir ins Angebot auf. Dann fasse ich zusammen: Herr Lenz bestellt die Folie und klärt das Material mit dem Kunden. Frau Yilmaz nimmt Kontakt zu den Speditionen auf. Herr Brandt prüft mit der Bank das Akkreditiv. Und ich selbst rufe den Kunden noch heute an, um ihm zu sagen, dass das Angebot zunächst vorläufig ist. Wir treffen uns am Donnerstag wieder."
        }
       ],
       "frage": "Was übernimmt Frau Kessler selbst?",
       "opt": [
        "Sie spricht mit der Bank über das Akkreditiv.",
        "Sie informiert den Kunden über das vorläufige Angebot.",
        "Sie bestellt die Folie beim Lieferanten."
       ],
       "loesung": 1,
       "stelle": "ich selbst rufe den Kunden noch heute an",
       "erklaerung": "Bank ist Herr Brandt, Folie ist Herr Lenz; Frau Kessler ruft den Kunden an."
      }
     ]
    },
    {
     "id": "b2bbbh3s2",
     "titel": "Besprechung: Einführung einer neuen Software",
     "aufgaben": [
      {
       "ort": "Besprechung — Abschnitt 1",
       "zeilen": [
        {
         "wer": "Frau",
         "text": "Guten Tag, schön, dass alle da sind. Wie Sie wissen, wollen wir unsere alte Warenwirtschaft ersetzen. Herr Albers aus der IT stellt uns heute den Zeitplan vor. Danach würde ich gern hören, welche Bedenken es in den Abteilungen gibt. Herr Albers, bitte."
        },
        {
         "wer": "Mann",
         "text": "Danke, Frau Reiter. Der Plan sieht vor, dass wir im Februar mit dem Einkauf starten, im April folgt das Lager und im Juni der Vertrieb. Wir stellen also nicht alles auf einmal um, sondern Schritt für Schritt. So bleibt das Risiko überschaubar."
        },
        {
         "wer": "Frau",
         "text": "Und wenn im Einkauf etwas nicht funktioniert?"
        },
        {
         "wer": "Mann",
         "text": "Dann haben wir genug Zeit, die Fehler zu beheben, bevor die nächste Abteilung umstellt. Genau das ist der Vorteil. Bei anderen Firmen, die alles an einem Wochenende umgestellt haben, gab es danach wochenlang Chaos."
        }
       ],
       "frage": "Wie soll die neue Software eingeführt werden?",
       "opt": [
        "In allen Abteilungen gleichzeitig im Februar.",
        "Zuerst im Vertrieb, dann im Lager.",
        "Nacheinander in einzelnen Abteilungen."
       ],
       "loesung": 2,
       "stelle": "Wir stellen also nicht alles auf einmal um",
       "erklaerung": "Einkauf, Lager und Vertrieb werden nacheinander umgestellt."
      },
      {
       "ort": "Besprechung — Abschnitt 2",
       "zeilen": [
        {
         "wer": "Mann",
         "text": "Darf ich direkt etwas zum Lager sagen? April ist für uns ganz schlecht. Da kommt die Saisonware, und wir haben ohnehin Überstunden. Wenn wir dann noch ein neues System lernen sollen, geht das schief."
        },
        {
         "wer": "Frau",
         "text": "Herr Okafor, das ist ein berechtigter Punkt. Herr Albers, wäre es möglich, das Lager nach hinten zu verschieben?"
        },
        {
         "wer": "Mann",
         "text": "Wir könnten Lager und Vertrieb tauschen. Dann wäre das Lager im Juni dran."
        },
        {
         "wer": "Mann",
         "text": "Juni wäre für uns deutlich besser. Da ist es im Lager erfahrungsgemäß ruhig, und die meisten Kollegen sind noch nicht im Urlaub."
        }
       ],
       "frage": "Warum ist April für das Lager ungünstig?",
       "opt": [
        "Weil in dieser Zeit die Saisonware ankommt.",
        "Weil dann viele Lagermitarbeiter im Urlaub sind.",
        "Weil das Lager im April umgebaut wird."
       ],
       "loesung": 0,
       "stelle": "Da kommt die Saisonware",
       "erklaerung": "Saisonware und Überstunden machen den April für das Lager schwierig."
      },
      {
       "ort": "Besprechung — Abschnitt 3",
       "zeilen": [
        {
         "wer": "Frau",
         "text": "Ich bin Frau Novak aus der Personalabteilung. Mich beschäftigt die Schulung. Wie viel Zeit ist dafür vorgesehen?"
        },
        {
         "wer": "Mann",
         "text": "Jeder Mitarbeiter bekommt eine Schulung von einem Tag. Außerdem gibt es in jeder Abteilung einen sogenannten Paten, der vorher eine ausführlichere Schulung bekommt und den Kollegen bei Fragen hilft."
        },
        {
         "wer": "Frau",
         "text": "Ein Tag erscheint mir sehr knapp. Gerade ältere Kollegen brauchen mehr Zeit. Ich würde gern zusätzlich offene Übungsstunden anbieten."
        }
       ],
       "frage": "Was hält Frau Novak von der geplanten Schulung?",
       "opt": [
        "Sie findet einen Tag mehr als genug.",
        "Sie möchte zusätzliche Übungsmöglichkeiten anbieten.",
        "Sie möchte auf die Paten verzichten."
       ],
       "loesung": 1,
       "stelle": "Ich würde gern zusätzlich offene Übungsstunden anbieten",
       "erklaerung": "Ihr erscheint ein Tag zu knapp, deshalb schlägt sie Übungsstunden vor."
      },
      {
       "ort": "Besprechung — Abschnitt 4",
       "zeilen": [
        {
         "wer": "Mann",
         "text": "Ich möchte als Vertreter des Betriebsrats auch etwas sagen. Das neue System erfasst ja sehr genau, wer wann welche Buchung macht. Wir müssen sicherstellen, dass diese Daten nicht zur Leistungskontrolle einzelner Mitarbeiter benutzt werden. Dazu brauchen wir eine Betriebsvereinbarung, bevor das System startet."
        },
        {
         "wer": "Frau",
         "text": "Herr Sommer, das sehe ich genauso. Das sollte im Januar fertig sein."
        },
        {
         "wer": "Mann",
         "text": "Gut. Wir haben dazu schon einen Entwurf vorbereitet, den ich Ihnen gern nächste Woche schicke. Wichtig ist uns vor allem, dass die Auswertungen nur für ganze Abteilungen gemacht werden und nicht für einzelne Personen."
        }
       ],
       "frage": "Was fordert Herr Sommer?",
       "opt": [
        "Dass die Einführung um ein Jahr verschoben wird.",
        "Dass der Betriebsrat das System selbst auswählt.",
        "Dass vor dem Start eine Vereinbarung über die Nutzung der Daten getroffen wird."
       ],
       "loesung": 2,
       "stelle": "Dazu brauchen wir eine Betriebsvereinbarung, bevor das System startet",
       "erklaerung": "Der Betriebsrat will verhindern, dass die Daten zur Leistungskontrolle dienen."
      },
      {
       "ort": "Besprechung — Abschnitt 5",
       "zeilen": [
        {
         "wer": "Mann",
         "text": "Noch eine Frage aus dem Lager: Was passiert mit den alten Daten? Wir haben Artikelnummern, die zwanzig Jahre alt sind, und vieles davon ist gar nicht mehr aktuell."
        },
        {
         "wer": "Mann",
         "text": "Gute Frage, Herr Okafor. Wir werden nur die Artikel übernehmen, die in den letzten drei Jahren bewegt wurden. Alles andere wird archiviert und ist weiterhin lesbar, aber nicht im neuen System."
        }
       ],
       "frage": "Was geschieht mit älteren Artikeldaten?",
       "opt": [
        "Sie werden archiviert und bleiben lesbar.",
        "Sie werden vollständig ins neue System übernommen.",
        "Sie werden nach der Umstellung gelöscht."
       ],
       "loesung": 0,
       "stelle": "Alles andere wird archiviert und ist weiterhin lesbar",
       "erklaerung": "Übernommen wird nur, was in drei Jahren bewegt wurde; der Rest wird archiviert, nicht gelöscht."
      },
      {
       "ort": "Besprechung — Abschnitt 6",
       "zeilen": [
        {
         "wer": "Frau",
         "text": "Und wie lange laufen das alte und das neue System parallel?"
        },
        {
         "wer": "Mann",
         "text": "Ursprünglich wollten wir gar keinen Parallelbetrieb, weil das doppelte Arbeit bedeutet. Nach den Erfahrungen anderer Firmen empfehle ich aber jetzt doch zwei Wochen pro Abteilung. Dann kann man im Notfall noch auf das alte System zurückgreifen."
        },
        {
         "wer": "Frau",
         "text": "Einverstanden, auch wenn es anstrengend wird."
        }
       ],
       "frage": "Was sagt Herr Albers zum Parallelbetrieb?",
       "opt": [
        "Er lehnt ihn ab, weil er doppelte Arbeit bedeutet.",
        "Er empfiehlt inzwischen einen kurzen Parallelbetrieb.",
        "Er schlägt vor, beide Systeme ein ganzes Jahr zu nutzen."
       ],
       "loesung": 1,
       "stelle": "empfehle ich aber jetzt doch zwei Wochen pro Abteilung",
       "erklaerung": "Er hat seine Meinung geändert und empfiehlt nun zwei Wochen."
      },
      {
       "ort": "Besprechung — Abschnitt 7",
       "zeilen": [
        {
         "wer": "Frau",
         "text": "Gut, dann halte ich fest: Lager und Vertrieb werden getauscht, Frau Novak plant zusätzliche Übungsstunden, die Betriebsvereinbarung kommt vor dem Start, und es gibt zwei Wochen Parallelbetrieb. Herr Albers, Sie schicken bitte bis Freitag einen überarbeiteten Zeitplan an alle. Die nächste Runde machen wir in vier Wochen."
        }
       ],
       "frage": "Was soll Herr Albers bis Freitag tun?",
       "opt": [
        "Einen neuen Zeitplan an alle verschicken.",
        "Die Betriebsvereinbarung vorbereiten.",
        "Die Schulungen für das Lager organisieren."
       ],
       "loesung": 0,
       "stelle": "Sie schicken bitte bis Freitag einen überarbeiteten Zeitplan an alle",
       "erklaerung": "Herr Albers ist für den überarbeiteten Zeitplan zuständig."
      }
     ]
    },
    {
     "id": "b2bbbh3s3",
     "titel": "Besprechung: Planung eines Messeauftritts",
     "aufgaben": [
      {
       "ort": "Besprechung — Abschnitt 1",
       "zeilen": [
        {
         "wer": "Frau",
         "text": "So, dann fangen wir an. Thema heute ist die Fachmesse für Gebäudetechnik im März. Wir haben bisher immer einen Stand von hundert Quadratmetern gehabt. Die Geschäftsführung hat das Budget aber um ein Viertel gekürzt. Wir müssen also überlegen, wo wir sparen. Herr Haas, Sie haben mit dem Messeveranstalter gesprochen?"
        },
        {
         "wer": "Mann",
         "text": "Ja, Frau Lindqvist. Ein kleinerer Stand würde etwa ein Drittel der Standmiete sparen. Allerdings bekämen wir dann keinen Eckplatz mehr, sondern einen Platz in der Mitte der Halle."
        }
       ],
       "frage": "Warum muss der Messeauftritt neu geplant werden?",
       "opt": [
        "Weil der Messeveranstalter die Standmiete erhöht hat.",
        "Weil weniger Geld zur Verfügung steht.",
        "Weil der bisherige Eckplatz schon vergeben ist."
       ],
       "loesung": 1,
       "stelle": "Die Geschäftsführung hat das Budget aber um ein Viertel gekürzt",
       "erklaerung": "Auslöser ist die Kürzung des Budgets."
      },
      {
       "ort": "Besprechung — Abschnitt 2",
       "zeilen": [
        {
         "wer": "Frau",
         "text": "Ich bin dagegen, den Eckplatz aufzugeben. Ich heiße übrigens Petrović und bin für das Marketing zuständig. Der Eckplatz ist von zwei Gängen aus sichtbar, das bringt uns jedes Jahr viele Besucher, die eigentlich gar nicht zu uns wollten. Ich würde lieber beim Stand selbst sparen, zum Beispiel beim Aufbau."
        },
        {
         "wer": "Frau",
         "text": "Was meinen Sie genau, Frau Petrović?"
        },
        {
         "wer": "Frau",
         "text": "Wir könnten den Messestand vom letzten Jahr wiederverwenden, statt einen neuen bauen zu lassen."
        }
       ],
       "frage": "Was schlägt Frau Petrović vor?",
       "opt": [
        "Den alten Messestand wieder zu benutzen.",
        "Einen kleineren Stand in der Mitte der Halle zu mieten.",
        "Auf die Besucher aus den Gängen zu verzichten."
       ],
       "loesung": 0,
       "stelle": "Wir könnten den Messestand vom letzten Jahr wiederverwenden",
       "erklaerung": "Sie will den Eckplatz behalten und beim Bau des Stands sparen."
      },
      {
       "ort": "Besprechung — Abschnitt 3",
       "zeilen": [
        {
         "wer": "Mann",
         "text": "Da muss ich widersprechen. Wendt, Vertrieb. Wir stellen dieses Jahr die neue Lüftungsserie vor. Die Geräte sind deutlich größer als die alten, und der alte Stand hat dafür gar keinen Platz. Außerdem steht überall noch das alte Logo drauf."
        },
        {
         "wer": "Frau",
         "text": "Das Logo können wir austauschen, das kostet nicht viel. Aber der Platz ist tatsächlich ein Problem."
        },
        {
         "wer": "Mann",
         "text": "Und ehrlich gesagt: Die neue Serie ist für uns das wichtigste Produkt seit Jahren. Wenn wir sie auf einem alten, zu engen Stand zeigen, wirkt das auf die Kunden nicht gerade überzeugend."
        }
       ],
       "frage": "Welches Problem sieht Herr Wendt beim alten Stand?",
       "opt": [
        "Die Kosten für einen neuen Aufbau sind zu hoch.",
        "Das alte Logo lässt sich nicht austauschen.",
        "Die neuen Geräte passen nicht auf den alten Stand."
       ],
       "loesung": 2,
       "stelle": "der alte Stand hat dafür gar keinen Platz",
       "erklaerung": "Das Logo ist lösbar, das eigentliche Problem ist der fehlende Platz."
      },
      {
       "ort": "Besprechung — Abschnitt 4",
       "zeilen": [
        {
         "wer": "Mann",
         "text": "Und wenn wir nur ein großes Gerät mitnehmen und die anderen auf Bildschirmen zeigen? Dann reicht der Platz, und wir könnten den alten Stand umbauen statt neu bauen."
        },
        {
         "wer": "Mann",
         "text": "Herr Haas, die Kunden wollen die Geräte anfassen. Aber gut, ein Gerät live und die anderen im Video, damit könnte ich leben, wenn ein Techniker am Stand ist, der Fragen beantworten kann."
        }
       ],
       "frage": "Unter welcher Bedingung ist Herr Wendt mit dem Vorschlag einverstanden?",
       "opt": [
        "Wenn alle Geräte auf der Messe ausgestellt werden.",
        "Wenn ein Techniker am Stand Fragen beantwortet.",
        "Wenn die Videos von einer Agentur produziert werden."
       ],
       "loesung": 1,
       "stelle": "wenn ein Techniker am Stand ist, der Fragen beantworten kann",
       "erklaerung": "Er akzeptiert ein Gerät live und Videos, wenn ein Techniker dabei ist."
      },
      {
       "ort": "Besprechung — Abschnitt 5",
       "zeilen": [
        {
         "wer": "Frau",
         "text": "Dann kommen wir zum Personal. Letztes Jahr waren an jedem Tag acht Leute am Stand. Das ist teuer, vor allem wegen der Hotels."
        },
        {
         "wer": "Frau",
         "text": "Ich schlage vor, dass wir mit sechs Personen pro Tag planen und stattdessen vorher feste Termine mit wichtigen Kunden vereinbaren. Dann ist der Stand nicht zufällig voll oder leer, sondern wir wissen, wer wann kommt."
        },
        {
         "wer": "Mann",
         "text": "Das unterstütze ich. Im letzten Jahr standen wir am Vormittag oft zu acht herum, und am Nachmittag konnten wir die Besucher kaum bedienen. Mit festen Terminen lässt sich das besser verteilen."
        }
       ],
       "frage": "Wie will Frau Petrović die Arbeit am Stand verbessern?",
       "opt": [
        "Durch mehr Personal an den Tagen mit vielen Besuchern.",
        "Durch Hotels, die näher an der Messe liegen.",
        "Durch vorher vereinbarte Termine mit wichtigen Kunden."
       ],
       "loesung": 2,
       "stelle": "vorher feste Termine mit wichtigen Kunden vereinbaren",
       "erklaerung": "Weniger Personal, dafür geplante Kundentermine."
      },
      {
       "ort": "Besprechung — Abschnitt 6",
       "zeilen": [
        {
         "wer": "Mann",
         "text": "Noch ein Punkt: das Abendessen mit den Großkunden. Das war immer sehr beliebt, hat aber fast so viel gekostet wie die Standmiete."
        },
        {
         "wer": "Frau",
         "text": "Das Abendessen würde ich ungern streichen, Herr Haas. Es ist die einzige Gelegenheit, mit den Einkäufern in Ruhe zu sprechen. Aber wir könnten es kleiner machen, nur mit den zwanzig wichtigsten Kunden statt mit sechzig."
        },
        {
         "wer": "Mann",
         "text": "Damit wäre ich einverstanden. Bei sechzig Gästen hatte ohnehin niemand Zeit, mit allen zu reden."
        }
       ],
       "frage": "Was sagt Frau Lindqvist zum Abendessen mit den Großkunden?",
       "opt": [
        "Es soll stattfinden, aber mit weniger Gästen.",
        "Es soll gestrichen werden, weil es zu teuer ist.",
        "Es soll durch einen Empfang am Stand ersetzt werden."
       ],
       "loesung": 0,
       "stelle": "Aber wir könnten es kleiner machen",
       "erklaerung": "Sie will es nicht streichen, sondern auf zwanzig Kunden verkleinern."
      },
      {
       "ort": "Besprechung — Abschnitt 7",
       "zeilen": [
        {
         "wer": "Frau",
         "text": "Gut, ich fasse zusammen: Wir behalten den Eckplatz, der alte Stand wird umgebaut, ein Gerät live und die anderen im Video, sechs Personen pro Tag und ein kleineres Abendessen. Herr Haas, rechnen Sie bitte bis nächste Woche aus, ob wir damit im Budget bleiben. Wenn nicht, müssen wir doch noch einmal über die Standgröße sprechen."
        }
       ],
       "frage": "Was passiert, wenn das Budget trotzdem nicht reicht?",
       "opt": [
        "Dann wird ganz auf die Messe verzichtet.",
        "Dann wird die Größe des Stands noch einmal besprochen.",
        "Dann wird das Abendessen doch gestrichen."
       ],
       "loesung": 1,
       "stelle": "müssen wir doch noch einmal über die Standgröße sprechen",
       "erklaerung": "Reicht das Geld nicht, kommt die Standgröße wieder auf den Tisch."
      }
     ]
    }
   ]
  }
 ],
 "laeufe": [
  {
   "id": "tb2bhl1",
   "titel": "Prüfungslauf 1",
   "minuten": 30,
   "teile": [
    {
     "nr": 1,
     "art": "ansage",
     "aufgaben": [
      {
       "von": "Meldung 1 — Mittelstand",
       "wer": "Frau",
       "text": "Für viele Familienbetriebe in der Region wird die Nachfolge zum Problem. Nach einer Erhebung der Industrie- und Handelskammer suchen in den nächsten fünf Jahren rund zweitausend Unternehmer einen Nachfolger. In mehr als der Hälfte der Fälle wollen die eigenen Kinder den Betrieb nicht übernehmen. Die Kammer bietet deshalb ab Februar eine Börse an, auf der Inhaber und mögliche Käufer zusammenfinden können.",
       "satz": "In vielen Familienbetrieben wollen die Kinder das Unternehmen weiterführen.",
       "loesung": false,
       "stelle": "wollen die eigenen Kinder den Betrieb nicht übernehmen",
       "erklaerung": "In mehr als der Hälfte der Fälle wollen die Kinder gerade nicht übernehmen."
      },
      {
       "von": "Meldung 2 — Gründungen",
       "wer": "Mann",
       "text": "In der Stadt Kaltenbrunn sind im ersten Halbjahr so viele neue Firmen gegründet worden wie seit zehn Jahren nicht mehr. Insgesamt meldeten sich rund vierhundert neue Betriebe beim Gewerbeamt an. Viele Gründer kommen aus dem Dienstleistungsbereich, etwa aus der Beratung oder der Pflege. Die Stadt führt den Anstieg auch auf ihr neues Gründerzentrum zurück, das günstige Büros und kostenlose Beratung anbietet.",
       "satz": "Die Stadt sieht einen Zusammenhang zwischen dem Gründerzentrum und den vielen Neugründungen.",
       "loesung": true,
       "stelle": "führt den Anstieg auch auf ihr neues Gründerzentrum zurück",
       "erklaerung": "„führt … zurück auf\" heißt: Die Stadt sieht das Zentrum als einen Grund."
      },
      {
       "von": "Meldung 3 — Insolvenz",
       "wer": "Frau",
       "text": "Die insolvente Möbelkette Wohnwert hat einen Käufer gefunden. Ein Investor aus Süddeutschland übernimmt zwölf der insgesamt achtzehn Filialen. Für die übrigen sechs Häuser gibt es bislang keine Lösung, sie sollen zum Ende des Jahres schließen. Rund zweihundert Beschäftigte sind davon betroffen. Für sie soll eine Transfergesellschaft gegründet werden, die bei der Suche nach einer neuen Stelle hilft.",
       "satz": "Durch die Übernahme bleiben alle Filialen der Möbelkette erhalten.",
       "loesung": false,
       "stelle": "sie sollen zum Ende des Jahres schließen",
       "erklaerung": "Der Investor übernimmt nur zwölf von achtzehn Filialen, sechs schließen."
      },
      {
       "von": "Meldung 4 — Messe",
       "wer": "Mann",
       "text": "Die Fachmesse für Gebäudetechnik in Feldheim hat mit einem Besucherrekord geendet. An vier Tagen kamen mehr als fünfundsechzigtausend Fachbesucher, so viele wie nie zuvor. Großes Interesse fanden vor allem Wärmepumpen und Lösungen für die Sanierung älterer Gebäude. Die Aussteller zeigten sich zufrieden mit der Zahl der Aufträge. Die nächste Messe findet allerdings erst in zwei Jahren statt.",
       "satz": "Die Messe soll im nächsten Jahr wieder in Feldheim stattfinden.",
       "loesung": false,
       "stelle": "Die nächste Messe findet allerdings erst in zwei Jahren statt",
       "erklaerung": "Nicht nächstes Jahr, sondern erst in zwei Jahren."
      },
      {
       "von": "Meldung 5 — Tourismus",
       "wer": "Frau",
       "text": "Die Hotels an der Seenplatte melden für diesen Sommer eine gute Auslastung. Im Durchschnitt waren drei von vier Zimmern belegt, etwas mehr als im Vorjahr. Auffällig ist, dass Gäste immer kurzfristiger buchen, oft nur wenige Tage vor der Anreise. Der Tourismusverband rät den Betrieben deshalb, ihre Preise flexibler zu gestalten und mehr in Online-Werbung zu investieren.",
       "satz": "Gäste entscheiden sich zunehmend spät für ihre Reise.",
       "loesung": true,
       "stelle": "dass Gäste immer kurzfristiger buchen",
       "erklaerung": "„kurzfristiger buchen\", oft wenige Tage vor der Anreise — also späte Entscheidungen."
      },
      {
       "von": "Meldung 6 — Handwerk",
       "wer": "Mann",
       "text": "Wer in der Region einen Handwerker braucht, muss weiterhin Geduld haben. Laut Handwerkskammer warten Kunden im Durchschnitt rund zehn Wochen auf einen Termin, bei Dachdeckern und Heizungsbauern sogar noch länger. Immerhin hat sich die Lage leicht verbessert: Im Frühjahr lag die Wartezeit noch bei zwölf Wochen. Die Kammer empfiehlt, Aufträge möglichst früh zu planen und mehrere Angebote einzuholen.",
       "satz": "Die Wartezeit auf einen Handwerker ist seit dem Frühjahr etwas kürzer geworden.",
       "loesung": true,
       "stelle": "Im Frühjahr lag die Wartezeit noch bei zwölf Wochen",
       "erklaerung": "Von zwölf auf etwa zehn Wochen — eine leichte Verbesserung."
      }
     ]
    },
    {
     "nr": 2,
     "art": "interview",
     "aufgaben": [
      {
       "ort": "Firmenporträt — Abschnitt 1",
       "zeilen": [
        {
         "wer": "Frau",
         "text": "Guten Tag und willkommen zur Sendung „Unternehmen im Gespräch\". Heute geht es um ein Softwarehaus, das sich auf ambulante Pflegedienste spezialisiert hat. Bei mir ist Daniel Roth, Geschäftsführer der Firma Curavis in Hallbrück. Herr Roth, warum gerade Pflegedienste?"
        },
        {
         "wer": "Mann",
         "text": "Das hat einen persönlichen Hintergrund. Meine Mutter hat lange einen Pflegedienst geleitet, und ich habe als Schüler erlebt, wie sie abends am Küchentisch saß und Einsatzpläne und Abrechnungen von Hand gemacht hat. Als ich später Informatik studiert habe, war klar, dass ich genau dafür eine Lösung bauen will."
        }
       ],
       "frage": "Wie kam Herr Roth auf die Idee für seine Firma?",
       "opt": [
        "Er hat als Schüler in einem Pflegedienst gearbeitet.",
        "Er hat die Arbeit seiner Mutter in einem Pflegedienst miterlebt.",
        "Er hat im Studium ein Projekt für einen Pflegedienst gemacht."
       ],
       "loesung": 1,
       "stelle": "Meine Mutter hat lange einen Pflegedienst geleitet",
       "erklaerung": "Er hat die Büroarbeit der Mutter gesehen, nicht selbst dort gearbeitet."
      },
      {
       "ort": "Firmenporträt — Abschnitt 2",
       "zeilen": [
        {
         "wer": "Frau",
         "text": "Was genau kann Ihre Software?"
        },
        {
         "wer": "Mann",
         "text": "Im Kern drei Dinge: die Tourenplanung, also wer wann zu welchem Patienten fährt, dann die Dokumentation der Pflege und schließlich die Abrechnung mit den Pflegekassen. Das Besondere ist, dass die Pflegekräfte alles auf dem Smartphone erfassen, auch ohne Netz. Gerade auf dem Land ist der Empfang oft schlecht, die Daten werden dann später übertragen."
        }
       ],
       "frage": "Was ist laut Herrn Roth das Besondere an der Software?",
       "opt": [
        "Sie funktioniert auch, wenn kein Empfang vorhanden ist.",
        "Sie wurde speziell für Pflegedienste in der Stadt entwickelt.",
        "Sie übernimmt die Abrechnung, ohne dass jemand etwas eingibt."
       ],
       "loesung": 0,
       "stelle": "alles auf dem Smartphone erfassen, auch ohne Netz",
       "erklaerung": "Die Daten werden offline erfasst und später übertragen."
      },
      {
       "ort": "Firmenporträt — Abschnitt 3",
       "zeilen": [
        {
         "wer": "Frau",
         "text": "Wie viele Pflegedienste arbeiten mit Curavis?"
        },
        {
         "wer": "Mann",
         "text": "Inzwischen gut dreihundertvierzig, die meisten sind kleine Dienste mit zehn bis dreißig Mitarbeitern. Große Ketten haben oft eigene Systeme. Wir haben übrigens nie Werbung im klassischen Sinn gemacht. Fast alle Kunden kommen über Empfehlungen, weil sich die Leitungen der Pflegedienste untereinander gut kennen und austauschen."
        }
       ],
       "frage": "Wie gewinnt Curavis neue Kunden?",
       "opt": [
        "Durch Anzeigen in Fachzeitschriften für die Pflege.",
        "Durch Verträge mit großen Pflegeketten.",
        "Vor allem dadurch, dass Kunden die Firma weiterempfehlen."
       ],
       "loesung": 2,
       "stelle": "Fast alle Kunden kommen über Empfehlungen",
       "erklaerung": "Klassische Werbung gab es nie, die Kunden kommen über Empfehlungen."
      },
      {
       "ort": "Firmenporträt — Abschnitt 4",
       "zeilen": [
        {
         "wer": "Frau",
         "text": "Wie entwickeln Sie die Software weiter?"
        },
        {
         "wer": "Mann",
         "text": "Bei uns arbeiten zwei examinierte Pflegefachkräfte fest im Team. Sie sitzen direkt neben den Entwicklern und prüfen jede neue Funktion, bevor sie herauskommt. Außerdem fährt jeder neue Entwickler in den ersten Wochen einen Tag lang bei einer Pflegekraft mit. Danach versteht man sofort, warum ein Knopf groß genug sein muss, wenn man Handschuhe trägt."
        },
        {
         "wer": "Frau",
         "text": "Das klingt nach einer Erfahrung, die man nicht so schnell vergisst."
        },
        {
         "wer": "Mann",
         "text": "Genau. Viele kommen von diesem Tag mit einer ganzen Liste von Ideen zurück, und einige davon haben wir tatsächlich umgesetzt."
        }
       ],
       "frage": "Was müssen neue Entwickler bei Curavis tun?",
       "opt": [
        "Sie müssen eine Ausbildung in der Pflege machen.",
        "Sie begleiten einen Tag lang eine Pflegekraft bei der Arbeit.",
        "Sie prüfen jede neue Funktion zusammen mit den Kunden."
       ],
       "loesung": 1,
       "stelle": "einen Tag lang bei einer Pflegekraft mit",
       "erklaerung": "Die neuen Entwickler fahren einen Tag mit; die Prüfung machen die Pflegefachkräfte im Team."
      },
      {
       "ort": "Firmenporträt — Abschnitt 5",
       "zeilen": [
        {
         "wer": "Frau",
         "text": "Pflegedaten sind sehr sensibel. Wie sieht es mit dem Datenschutz aus?"
        },
        {
         "wer": "Mann",
         "text": "Das ist für uns das wichtigste Thema überhaupt. Alle Daten liegen auf Servern in Deutschland, und wir lassen unsere Sicherheit jedes Jahr von einer unabhängigen Stelle prüfen. Viele Pflegedienste fragen uns danach, bevor sie überhaupt über den Preis sprechen. Ein Datenproblem würde unser Geschäft wahrscheinlich sofort beenden."
        }
       ],
       "frage": "Was sagt Herr Roth zum Datenschutz?",
       "opt": [
        "Die Pflegedienste interessieren sich vor allem für den Preis.",
        "Die Daten werden regelmäßig von einer unabhängigen Stelle geprüft.",
        "Die Daten liegen auf Servern der Pflegekassen."
       ],
       "loesung": 1,
       "stelle": "jedes Jahr von einer unabhängigen Stelle prüfen",
       "erklaerung": "Die Sicherheit wird jährlich unabhängig geprüft; der Preis kommt für Kunden erst danach."
      },
      {
       "ort": "Firmenporträt — Abschnitt 6",
       "zeilen": [
        {
         "wer": "Frau",
         "text": "Spüren Sie den Fachkräftemangel auch selbst?"
        },
        {
         "wer": "Mann",
         "text": "Bei Entwicklern auf jeden Fall. Hallbrück ist nicht gerade eine Großstadt. Wir haben deshalb früh entschieden, dass bei uns niemand ins Büro kommen muss. Etwa die Hälfte des Teams arbeitet komplett von zu Hause aus, verteilt über ganz Deutschland. Einmal im Quartal treffen sich alle für zwei Tage hier in Hallbrück."
        }
       ],
       "frage": "Wie reagiert Curavis auf den Mangel an Entwicklern?",
       "opt": [
        "Die Firma hat ein zweites Büro in einer Großstadt eröffnet.",
        "Alle Mitarbeiter müssen nach Hallbrück ziehen.",
        "Die Mitarbeiter können frei wählen, ob sie im Büro arbeiten."
       ],
       "loesung": 2,
       "stelle": "dass bei uns niemand ins Büro kommen muss",
       "erklaerung": "Niemand muss ins Büro; nur einmal im Quartal gibt es ein Treffen."
      },
      {
       "ort": "Firmenporträt — Abschnitt 7",
       "zeilen": [
        {
         "wer": "Frau",
         "text": "Zum Abschluss: Woran arbeiten Sie gerade?"
        },
        {
         "wer": "Mann",
         "text": "An einer Funktion für die Angehörigen. Familien sollen auf Wunsch sehen können, wann die Pflegekraft da war und was gemacht wurde. Der Patient muss aber ausdrücklich zustimmen. Wir testen das gerade mit fünf Pflegediensten, und die Rückmeldungen sind sehr unterschiedlich. Deshalb lassen wir uns damit bewusst Zeit."
        },
        {
         "wer": "Frau",
         "text": "Herr Roth, vielen Dank für das Gespräch."
        }
       ],
       "frage": "Was gilt für die neue Funktion für Angehörige?",
       "opt": [
        "Sie wird schon von allen Kunden genutzt.",
        "Sie funktioniert nur, wenn der Patient einverstanden ist.",
        "Sie wurde von den Pflegediensten einstimmig gelobt."
       ],
       "loesung": 1,
       "stelle": "Der Patient muss aber ausdrücklich zustimmen",
       "erklaerung": "Ohne Zustimmung des Patienten keine Freigabe; die Rückmeldungen sind gemischt."
      }
     ]
    },
    {
     "nr": 3,
     "art": "diskussion",
     "aufgaben": [
      {
       "ort": "Besprechung — Abschnitt 1",
       "zeilen": [
        {
         "wer": "Frau",
         "text": "Guten Morgen. Ich habe diese Runde einberufen, weil wir ein ernstes Problem in der Produktion haben. Herr Krause, schildern Sie bitte kurz die Lage."
        },
        {
         "wer": "Mann",
         "text": "Ja, Frau Hoffmann. Seit letzter Woche bekommen wir von unserem Zulieferer nur noch die Hälfte der Steuerplatinen, die wir brauchen. Der Lieferant hat einen Brand in seinem Werk gehabt. Mit unserem Lagerbestand kommen wir noch etwa zwei Wochen aus, dann steht die Montage der Kühlgeräte still."
        },
        {
         "wer": "Frau",
         "text": "Weiß man, wann der Lieferant wieder voll liefern kann?"
        },
        {
         "wer": "Mann",
         "text": "Er selbst spricht von etwa drei Monaten. Ich halte das ehrlich gesagt für optimistisch. Eine Fertigungshalle baut man nicht so schnell wieder auf."
        }
       ],
       "frage": "Was ist die Ursache für den Engpass?",
       "opt": [
        "Ein Feuer im Werk des Zulieferers.",
        "Ein Fehler bei der Bestellung der Platinen.",
        "Ein Streik bei der Spedition des Zulieferers."
       ],
       "loesung": 0,
       "stelle": "Der Lieferant hat einen Brand in seinem Werk gehabt",
       "erklaerung": "Der Brand beim Lieferanten halbiert die Liefermenge."
      },
      {
       "ort": "Besprechung — Abschnitt 2",
       "zeilen": [
        {
         "wer": "Frau",
         "text": "Frau Demir, gibt es andere Lieferanten?"
        },
        {
         "wer": "Frau",
         "text": "Ich habe gestern mit drei Firmen telefoniert. Zwei können frühestens in zwei Monaten liefern. Die dritte, ein Hersteller in Tschechien, könnte schon in zehn Tagen liefern, allerdings etwa fünfzehn Prozent teurer. Und die Platinen müssten zuerst von unserer Qualitätssicherung freigegeben werden."
        }
       ],
       "frage": "Was gilt für den Hersteller in Tschechien?",
       "opt": [
        "Er kann frühestens in zwei Monaten liefern.",
        "Er liefert günstiger als der bisherige Zulieferer.",
        "Er kann schnell liefern, ist aber teurer."
       ],
       "loesung": 2,
       "stelle": "könnte schon in zehn Tagen liefern, allerdings etwa fünfzehn Prozent teurer",
       "erklaerung": "Schnelle Lieferung, aber höherer Preis; die zwei Monate betreffen die anderen Firmen."
      },
      {
       "ort": "Besprechung — Abschnitt 3",
       "zeilen": [
        {
         "wer": "Frau",
         "text": "Herr Schulze, wie lange dauert so eine Freigabe?"
        },
        {
         "wer": "Mann",
         "text": "Normalerweise sechs Wochen, weil wir die Platinen unter Dauerlast testen. Das können wir in diesem Fall nicht abwarten. Ich könnte einen verkürzten Test von einer Woche machen. Das Risiko halte ich für vertretbar, wenn der Hersteller uns seine eigenen Prüfberichte schickt."
        },
        {
         "wer": "Frau",
         "text": "Und wenn bei dem kurzen Test Fehler auftauchen?"
        },
        {
         "wer": "Mann",
         "text": "Dann setzen wir die Platinen auf keinen Fall ein. Ein Rückruf von Kühlgeräten wäre viel teurer als jeder Produktionsstopp, Frau Hoffmann."
        }
       ],
       "frage": "Was schlägt Herr Schulze vor?",
       "opt": [
        "Die Platinen ganz ohne Test einzubauen.",
        "Einen kürzeren Test, wenn Prüfberichte des Herstellers vorliegen.",
        "Den normalen Test von sechs Wochen durchzuführen."
       ],
       "loesung": 1,
       "stelle": "Ich könnte einen verkürzten Test von einer Woche machen",
       "erklaerung": "Verkürzter Test ist vertretbar unter der Bedingung, dass Prüfberichte kommen."
      },
      {
       "ort": "Besprechung — Abschnitt 4",
       "zeilen": [
        {
         "wer": "Mann",
         "text": "Darf ich aus dem Vertrieb etwas ergänzen? Vogt mein Name. Nicht alle Kunden sind gleich dringend. Unser größter Kunde, die Supermarktkette, braucht die Geräte wirklich im nächsten Monat. Bei den kleineren Händlern kann ich wahrscheinlich zwei oder drei Wochen Verschiebung aushandeln, wenn wir sie rechtzeitig informieren."
        },
        {
         "wer": "Frau",
         "text": "Und wenn wir sie nicht rechtzeitig informieren?"
        },
        {
         "wer": "Mann",
         "text": "Dann verlieren wir Vertrauen. Die Händler planen ihren Verkauf für den Sommer schon jetzt. Wer erst kurz vorher erfährt, dass die Ware nicht kommt, bestellt beim nächsten Mal bei der Konkurrenz."
        }
       ],
       "frage": "Was sagt Herr Vogt über die Kunden?",
       "opt": [
        "Alle Kunden müssen pünktlich beliefert werden.",
        "Die Supermarktkette ist mit einer Verschiebung einverstanden.",
        "Bei kleineren Händlern ist eine Verschiebung möglich."
       ],
       "loesung": 2,
       "stelle": "Bei den kleineren Händlern kann ich wahrscheinlich zwei oder drei Wochen Verschiebung aushandeln",
       "erklaerung": "Die Supermarktkette braucht die Geräte dringend, die Händler können warten."
      },
      {
       "ort": "Besprechung — Abschnitt 5",
       "zeilen": [
        {
         "wer": "Mann",
         "text": "Und noch etwas aus der Produktion: Wenn wir die vorhandenen Platinen nur noch für die großen Modelle verwenden, schaffen wir die Lieferung an die Supermarktkette auf jeden Fall. Die kleinen Modelle bauen wir dann ohne Platine vor und setzen sie später ein. Das bedeutet zwar zusätzliche Arbeit, aber die Leute müssen nicht nach Hause geschickt werden."
        },
        {
         "wer": "Frau",
         "text": "Wie viel zusätzliche Arbeit wäre das ungefähr?"
        },
        {
         "wer": "Mann",
         "text": "Pro Gerät etwa zwanzig Minuten mehr. Das schaffen wir mit einer zusätzlichen Schicht am Samstag, für die ich schon genug Freiwillige habe."
        }
       ],
       "frage": "Welchen Vorteil hat der Vorschlag von Herrn Krause?",
       "opt": [
        "Die Mitarbeiter können weiterarbeiten.",
        "Die Produktion wird insgesamt billiger.",
        "Die kleinen Modelle sind schneller fertig."
       ],
       "loesung": 0,
       "stelle": "aber die Leute müssen nicht nach Hause geschickt werden",
       "erklaerung": "Es entsteht Mehrarbeit, aber niemand muss pausieren."
      },
      {
       "ort": "Besprechung — Abschnitt 6",
       "zeilen": [
        {
         "wer": "Frau",
         "text": "Das gefällt mir. Frau Demir, sollen wir den tschechischen Hersteller dauerhaft als zweiten Lieferanten aufnehmen?"
        },
        {
         "wer": "Frau",
         "text": "Ich würde das sehr empfehlen. Wir haben uns jahrelang nur auf einen Zulieferer verlassen, weil er am günstigsten war. Diese Woche zeigt, wie gefährlich das ist. Ich würde mit den Tschechen über einen Rahmenvertrag sprechen, mit einem kleinen festen Anteil, auch wenn der alte Lieferant wieder voll liefern kann."
        }
       ],
       "frage": "Warum empfiehlt Frau Demir einen zweiten Lieferanten?",
       "opt": [
        "Weil der alte Lieferant zu teuer geworden ist.",
        "Weil die Abhängigkeit von einem Lieferanten riskant ist.",
        "Weil der tschechische Hersteller bessere Qualität liefert."
       ],
       "loesung": 1,
       "stelle": "Diese Woche zeigt, wie gefährlich das ist",
       "erklaerung": "Die Abhängigkeit von nur einem Zulieferer hat sich als Risiko gezeigt."
      },
      {
       "ort": "Besprechung — Abschnitt 7",
       "zeilen": [
        {
         "wer": "Frau",
         "text": "Gut. Dann entscheide ich Folgendes: Frau Demir bestellt die Platinen in Tschechien und beginnt Gespräche über einen Rahmenvertrag. Herr Schulze macht den verkürzten Test. Herr Krause stellt die Montage um. Und Herr Vogt informiert die kleineren Händler noch heute. Die Mehrkosten trage ich gegenüber der Geschäftsleitung. Wir sehen uns am Freitag."
        }
       ],
       "frage": "Was übernimmt Frau Hoffmann selbst?",
       "opt": [
        "Sie informiert die kleineren Händler.",
        "Sie bestellt die Platinen beim neuen Lieferanten.",
        "Sie vertritt die Mehrkosten gegenüber der Geschäftsleitung."
       ],
       "loesung": 2,
       "stelle": "Die Mehrkosten trage ich gegenüber der Geschäftsleitung",
       "erklaerung": "Händler informiert Herr Vogt, Bestellung macht Frau Demir."
      }
     ]
    }
   ]
  },
  {
   "id": "tb2bhl2",
   "titel": "Prüfungslauf 2",
   "minuten": 30,
   "teile": [
    {
     "nr": 1,
     "art": "ansage",
     "aufgaben": [
      {
       "von": "Meldung 1 — Export",
       "wer": "Mann",
       "text": "Die Exporte der heimischen Wirtschaft sind im September überraschend gestiegen. Die Unternehmen lieferten Waren im Wert von rund hundertzwanzig Milliarden Euro ins Ausland, ein Plus von zwei Prozent gegenüber dem Vormonat. Experten hatten eher mit einem Rückgang gerechnet. Gefragt waren vor allem Medizintechnik und Maschinen. Die Ausfuhren in die Nachbarländer gingen dagegen leicht zurück.",
       "satz": "Die Experten hatten den Anstieg der Exporte vorhergesagt.",
       "loesung": false,
       "stelle": "Experten hatten eher mit einem Rückgang gerechnet",
       "erklaerung": "Der Anstieg war „überraschend\". Die Experten hatten das Gegenteil erwartet."
      },
      {
       "von": "Meldung 2 — Verbraucherpreise",
       "wer": "Frau",
       "text": "Die Inflation ist im Oktober weiter gesunken. Die Verbraucherpreise lagen nur noch um zwei Komma eins Prozent über dem Vorjahresmonat. Günstiger wurden vor allem Heizöl und Kraftstoffe. Lebensmittel dagegen kosteten erneut mehr, besonders Butter und Kaffee. Ökonomen erwarten, dass sich die Preise in den kommenden Monaten auf diesem Niveau einpendeln.",
       "satz": "Lebensmittel sind im Oktober billiger geworden.",
       "loesung": false,
       "stelle": "Lebensmittel dagegen kosteten erneut mehr",
       "erklaerung": "Günstiger wurden nur Energie und Kraftstoffe. Lebensmittel wurden teurer."
      },
      {
       "von": "Meldung 3 — Kredite für Betriebe",
       "wer": "Mann",
       "text": "Kleine Betriebe kommen wieder leichter an Kredite. Nach einer Umfrage der Landesbank lehnen die Banken deutlich weniger Anträge ab als noch vor einem Jahr. Grund seien die gesunkenen Zinsen und eine bessere Auftragslage in vielen Branchen. Schwierig bleibt es allerdings für junge Unternehmen, die noch keine drei Jahresabschlüsse vorlegen können. Für sie fordert der Mittelstandsverband ein eigenes Förderprogramm.",
       "satz": "Für neu gegründete Firmen ist es weiterhin schwer, einen Kredit zu bekommen.",
       "loesung": true,
       "stelle": "Schwierig bleibt es allerdings für junge Unternehmen",
       "erklaerung": "Die Lage bessert sich allgemein, „allerdings\" nicht für junge Unternehmen."
      },
      {
       "von": "Meldung 4 — Digitale Verwaltung",
       "wer": "Frau",
       "text": "Unternehmen können ihr Gewerbe ab Dezember im ganzen Land online anmelden. Der Gang zum Amt ist dann nicht mehr nötig. Auch Änderungen, etwa ein Umzug des Betriebs, lassen sich über das neue Portal erledigen. Wer lieber persönlich vorbeikommt, kann das allerdings weiterhin tun. Die Landesregierung verspricht, dass eine Anmeldung künftig innerhalb von drei Werktagen bearbeitet wird.",
       "satz": "Ab Dezember ist eine Gewerbeanmeldung nur noch über das Internet möglich.",
       "loesung": false,
       "stelle": "Wer lieber persönlich vorbeikommt, kann das allerdings weiterhin tun",
       "erklaerung": "Online ist neu und möglich, aber nicht Pflicht. Der persönliche Weg bleibt."
      },
      {
       "von": "Meldung 5 — Lieferketten",
       "wer": "Mann",
       "text": "Die Lieferprobleme in der Elektroindustrie haben sich spürbar entspannt. Nur noch etwa jedes zehnte Unternehmen klagt über fehlende Bauteile, vor einem Jahr war es noch fast jedes zweite. Viele Firmen haben inzwischen größere Lager angelegt und kaufen bei mehreren Lieferanten ein. Das kostet zwar mehr Geld, macht die Produktion aber weniger anfällig für Störungen.",
       "satz": "Viele Unternehmen haben auf die Lieferprobleme reagiert, indem sie mehr Vorräte halten.",
       "loesung": true,
       "stelle": "Viele Firmen haben inzwischen größere Lager angelegt",
       "erklaerung": "Größere Lager bedeuten mehr Vorräte — eine Reaktion auf die früheren Engpässe."
      },
      {
       "von": "Meldung 6 — Zufriedenheit im Job",
       "wer": "Frau",
       "text": "Die meisten Beschäftigten sind mit ihrer Arbeit zufrieden. In einer Umfrage gaben gut siebzig Prozent an, gern zu ihrem Arbeitgeber zu gehen. Unzufrieden sind viele aber mit ihren Aufstiegschancen und mit der Kommunikation der Vorgesetzten. Das Gehalt spielt nach der Umfrage eine geringere Rolle als erwartet. Wichtiger sind den meisten ein gutes Betriebsklima und sichere Arbeitsplätze.",
       "satz": "Für die meisten Befragten ist das Gehalt das wichtigste Kriterium.",
       "loesung": false,
       "stelle": "Das Gehalt spielt nach der Umfrage eine geringere Rolle als erwartet",
       "erklaerung": "Wichtiger als das Gehalt sind Betriebsklima und Sicherheit."
      }
     ]
    },
    {
     "nr": 2,
     "art": "interview",
     "aufgaben": [
      {
       "ort": "Firmenporträt — Abschnitt 1",
       "zeilen": [
        {
         "wer": "Mann",
         "text": "Guten Morgen und willkommen zu unserer Reihe „Betriebe aus der Region\". Heute bei mir im Studio ist Katrin Brandauer, die seit zwei Jahren die Brandauer Wärmetechnik in Lindenfeld leitet. Frau Brandauer, Ihr Betrieb ist ja schon ziemlich alt, oder?"
        },
        {
         "wer": "Frau",
         "text": "Ja, mein Großvater hat ihn vor über sechzig Jahren gegründet, damals noch als reine Klempnerei. Heizungen kamen erst dazu, als mein Vater übernommen hat. Ich bin also die dritte Generation, und ehrlich gesagt war das lange gar nicht mein Plan."
        }
       ],
       "frage": "Was erfährt man über die Geschichte des Betriebs?",
       "opt": [
        "Der Großvater hat von Anfang an Heizungen eingebaut.",
        "Der Betrieb hat erst unter dem Vater mit Heizungen begonnen.",
        "Frau Brandauer wollte den Betrieb schon immer übernehmen."
       ],
       "loesung": 1,
       "stelle": "Heizungen kamen erst dazu, als mein Vater übernommen hat",
       "erklaerung": "Gegründet als Klempnerei; Heizungen kamen erst mit dem Vater dazu."
      },
      {
       "ort": "Firmenporträt — Abschnitt 2",
       "zeilen": [
        {
         "wer": "Mann",
         "text": "Was hatten Sie denn ursprünglich vor?"
        },
        {
         "wer": "Frau",
         "text": "Ich habe Betriebswirtschaft studiert und danach fünf Jahre bei einer Versicherung im Controlling gearbeitet. Das hat mir durchaus Spaß gemacht. Aber als mein Vater gesundheitliche Probleme bekam, stand die Frage im Raum, ob wir den Betrieb verkaufen. Und da habe ich gemerkt, dass ich das nicht will. Die Meisterprüfung im Handwerk habe ich dann berufsbegleitend nachgeholt."
        }
       ],
       "frage": "Frau Brandauer hat den Betrieb übernommen, weil …",
       "opt": [
        "sie einen Verkauf des Betriebs verhindern wollte.",
        "ihr die Arbeit im Controlling keinen Spaß gemacht hat.",
        "sie schon während des Studiums eine Meisterprüfung abgelegt hatte."
       ],
       "loesung": 0,
       "stelle": "Und da habe ich gemerkt, dass ich das nicht will",
       "erklaerung": "Der drohende Verkauf war der Auslöser; das Controlling hat ihr durchaus gefallen."
      },
      {
       "ort": "Firmenporträt — Abschnitt 3",
       "zeilen": [
        {
         "wer": "Mann",
         "text": "Wie groß ist der Betrieb heute?"
        },
        {
         "wer": "Frau",
         "text": "Wir sind vierzehn Leute, davon elf Monteure und drei im Büro. Vor fünf Jahren waren wir noch neun. Gewachsen sind wir vor allem durch die Wärmepumpen. Die Nachfrage ist so stark, dass wir im Moment Wartezeiten von bis zu vier Monaten haben. Das ist für die Kunden natürlich ärgerlich, und für uns auch, weil wir Aufträge ablehnen müssen."
        }
       ],
       "frage": "Wodurch ist der Betrieb in den letzten Jahren gewachsen?",
       "opt": [
        "Durch neue Mitarbeiter im Büro.",
        "Durch die Übernahme eines anderen Betriebs.",
        "Durch die hohe Nachfrage nach Wärmepumpen."
       ],
       "loesung": 2,
       "stelle": "Gewachsen sind wir vor allem durch die Wärmepumpen",
       "erklaerung": "Ausdrücklich genannt: Wachstum vor allem durch Wärmepumpen."
      },
      {
       "ort": "Firmenporträt — Abschnitt 4",
       "zeilen": [
        {
         "wer": "Mann",
         "text": "Warum stellen Sie nicht einfach mehr Leute ein?"
        },
        {
         "wer": "Frau",
         "text": "Das würden wir sofort tun, wenn wir sie finden würden. Ausgebildete Anlagenmechaniker sind kaum zu bekommen. Deshalb setzen wir inzwischen stark auf Quereinsteiger, zum Beispiel aus der Elektrotechnik oder aus Autowerkstätten. Die arbeiten ein halbes Jahr immer zusammen mit einem erfahrenen Kollegen, bevor sie allein zu Kunden fahren."
        }
       ],
       "frage": "Wie löst der Betrieb das Personalproblem?",
       "opt": [
        "Er bildet nur noch eigene Anlagenmechaniker aus.",
        "Er stellt Quereinsteiger ein und lässt sie zuerst begleitet arbeiten.",
        "Er schickt neue Mitarbeiter sofort allein zu einfachen Aufträgen."
       ],
       "loesung": 1,
       "stelle": "Deshalb setzen wir inzwischen stark auf Quereinsteiger",
       "erklaerung": "Quereinsteiger arbeiten ein halbes Jahr mit einem erfahrenen Kollegen, nicht sofort allein."
      },
      {
       "ort": "Firmenporträt — Abschnitt 5",
       "zeilen": [
        {
         "wer": "Mann",
         "text": "Haben sich die Kunden in den letzten Jahren verändert?"
        },
        {
         "wer": "Frau",
         "text": "Sehr. Früher hat man angerufen, wenn die Heizung kaputt war. Heute kommen die Leute mit vielen Fragen zu Förderprogrammen und Kosten. Wir haben deshalb eine Kollegin, die nur für die Beratung zuständig ist. Sie macht keine Montage, sondern kümmert sich darum, dass die Anträge vollständig sind. Das kostet uns Geld, aber es spart später viel Ärger."
        }
       ],
       "frage": "Die Kollegin für die Beratung …",
       "opt": [
        "hilft den Kunden bei Fragen zur Förderung und bei Anträgen.",
        "arbeitet halbtags in der Beratung und halbtags in der Montage.",
        "repariert vor allem Heizungen, die plötzlich ausfallen."
       ],
       "loesung": 0,
       "stelle": "sondern kümmert sich darum, dass die Anträge vollständig sind",
       "erklaerung": "Sie macht keine Montage, sondern Beratung zu Förderung und Anträgen."
      },
      {
       "ort": "Firmenporträt — Abschnitt 6",
       "zeilen": [
        {
         "wer": "Mann",
         "text": "Und was hat sich innerhalb des Betriebs geändert, seit Sie die Leitung haben?"
        },
        {
         "wer": "Frau",
         "text": "Vor allem die Organisation. Mein Vater hatte alles im Kopf und auf Zetteln. Wir haben eine digitale Auftragsplanung eingeführt, die Monteure sehen ihre Termine jetzt auf dem Tablet. Am Anfang gab es Widerstand, besonders bei den älteren Kollegen. Manche wollten das Tablet gar nicht erst einschalten. Inzwischen sind gerade die am zufriedensten, weil sie abends keine Berichte mehr schreiben müssen."
        }
       ],
       "frage": "Wie reagieren die älteren Monteure heute auf die digitale Planung?",
       "opt": [
        "Sie lehnen sie weiterhin ab.",
        "Sie nutzen sie nur für die Terminplanung.",
        "Sie gehören zu den zufriedensten Nutzern."
       ],
       "loesung": 2,
       "stelle": "Inzwischen sind gerade die am zufriedensten",
       "erklaerung": "Anfangs gab es Widerstand, heute sind gerade die Älteren am zufriedensten."
      },
      {
       "ort": "Firmenporträt — Abschnitt 7",
       "zeilen": [
        {
         "wer": "Mann",
         "text": "Zum Schluss: Wie sehen Sie die Zukunft des Betriebs?"
        },
        {
         "wer": "Frau",
         "text": "Ich bin optimistisch. Wir wollen aber bewusst nicht immer weiter wachsen. Zwanzig Leute, das wäre für mich die Grenze, damit ich noch jeden Kunden und jeden Mitarbeiter persönlich kenne. Lieber bilden wir mehr aus. Im nächsten Jahr nehmen wir zum ersten Mal drei Auszubildende gleichzeitig."
        },
        {
         "wer": "Mann",
         "text": "Frau Brandauer, vielen Dank für das Gespräch."
        }
       ],
       "frage": "Was plant Frau Brandauer für die Zukunft?",
       "opt": [
        "Der Betrieb soll möglichst schnell weiter wachsen.",
        "Der Betrieb soll mehr ausbilden, aber nicht zu groß werden.",
        "Sie will im nächsten Jahr zwanzig neue Mitarbeiter einstellen."
       ],
       "loesung": 1,
       "stelle": "Lieber bilden wir mehr aus",
       "erklaerung": "Zwanzig Leute ist die Obergrenze, nicht die Zahl der Neueinstellungen; Ziel ist mehr Ausbildung."
      }
     ]
    },
    {
     "nr": 3,
     "art": "diskussion",
     "aufgaben": [
      {
       "ort": "Besprechung — Abschnitt 1",
       "zeilen": [
        {
         "wer": "Frau",
         "text": "Guten Morgen zusammen. Ich habe Sie kurzfristig eingeladen, weil wir gestern eine Anfrage aus Indien bekommen haben. Ein Lebensmittelhersteller in Pune möchte acht Verpackungsmaschinen bei uns kaufen. Das wäre für uns der größte Einzelauftrag der letzten Jahre. Herr Lenz, Sie haben sich die technischen Unterlagen schon angesehen?"
        },
        {
         "wer": "Mann",
         "text": "Ja, Frau Kessler. Grundsätzlich passt unsere Baureihe gut. Aber der Kunde will Beutel aus einer Folie verpacken, mit der wir noch nie gearbeitet haben. Das müssen wir vorher unbedingt testen."
        },
        {
         "wer": "Frau",
         "text": "Was könnte denn im schlimmsten Fall passieren?"
        },
        {
         "wer": "Mann",
         "text": "Wenn die Folie zu dünn ist, reißt sie beim Verschweißen, und die Maschine stoppt alle paar Minuten. Dann wäre die Leistung, die wir versprechen, nicht zu erreichen, und das wäre ein echtes Problem."
        }
       ],
       "frage": "Was ist aus technischer Sicht noch unklar?",
       "opt": [
        "Ob die Baureihe für Lebensmittel zugelassen ist.",
        "Ob die Maschinen mit der Folie des Kunden funktionieren.",
        "Ob acht Maschinen rechtzeitig gebaut werden können."
       ],
       "loesung": 1,
       "stelle": "mit der wir noch nie gearbeitet haben",
       "erklaerung": "Die Baureihe passt, nur die unbekannte Folie muss getestet werden."
      },
      {
       "ort": "Besprechung — Abschnitt 2",
       "zeilen": [
        {
         "wer": "Frau",
         "text": "Wie lange würde so ein Test dauern?"
        },
        {
         "wer": "Mann",
         "text": "Wenn der Kunde uns Folienmuster schickt, etwa drei Wochen. Das Problem ist der Versand. Muster aus Indien brauchen erfahrungsgemäß lange. Ich würde vorschlagen, dass wir die Folie bei einem europäischen Lieferanten bestellen, der dasselbe Material herstellt. Das geht in wenigen Tagen."
        },
        {
         "wer": "Frau",
         "text": "Gut, das klären Sie bitte direkt mit dem Kunden ab, ob das Material wirklich identisch ist."
        }
       ],
       "frage": "Was schlägt Herr Lenz für den Test vor?",
       "opt": [
        "Auf die Muster aus Indien zu warten.",
        "Den Test direkt beim Kunden in Pune durchzuführen.",
        "Das gleiche Material bei einem Lieferanten in Europa zu bestellen."
       ],
       "loesung": 2,
       "stelle": "dass wir die Folie bei einem europäischen Lieferanten bestellen",
       "erklaerung": "Muster aus Indien dauern zu lange, deshalb ein europäischer Lieferant."
      },
      {
       "ort": "Besprechung — Abschnitt 3",
       "zeilen": [
        {
         "wer": "Frau",
         "text": "Frau Yilmaz, wie sieht es mit Zoll und Einfuhr aus?"
        },
        {
         "wer": "Frau",
         "text": "Wir haben noch nie nach Indien geliefert, deshalb habe ich mich gestern erkundigt. Die Einfuhrzölle für Maschinen sind nicht unerheblich, und es gibt zusätzlich bestimmte Zertifikate, die verlangt werden. Ich empfehle, mit einer Spedition zu arbeiten, die Erfahrung mit Indien hat. Die Industrie- und Handelskammer hat mir zwei Namen genannt."
        },
        {
         "wer": "Frau",
         "text": "Und die Zölle, wer trägt die?"
        },
        {
         "wer": "Frau",
         "text": "Das hängt von den Lieferbedingungen ab, Frau Kessler. Ich würde vorschlagen, dass der Kunde die Einfuhr selbst übernimmt. Er kennt die Behörden vor Ort viel besser als wir."
        }
       ],
       "frage": "Was empfiehlt Frau Yilmaz?",
       "opt": [
        "Die Zertifikate selbst bei der Handelskammer zu beantragen.",
        "Auf die Lieferung zu verzichten, weil die Zölle zu hoch sind.",
        "Mit einer Spedition zusammenzuarbeiten, die Indien gut kennt."
       ],
       "loesung": 2,
       "stelle": "mit einer Spedition zu arbeiten, die Erfahrung mit Indien hat",
       "erklaerung": "Die Kammer hat nur Namen genannt; empfohlen wird eine erfahrene Spedition."
      },
      {
       "ort": "Besprechung — Abschnitt 4",
       "zeilen": [
        {
         "wer": "Frau",
         "text": "Herr Brandt, was sagen Sie aus Sicht der Finanzen?"
        },
        {
         "wer": "Mann",
         "text": "Das Volumen ist erfreulich, aber das Risiko auch. Der Kunde ist uns völlig unbekannt. Ich würde auf keinen Fall ohne Sicherheit liefern. Mein Vorschlag: dreißig Prozent Anzahlung bei Auftrag und für den Rest ein Akkreditiv über eine Bank. Dann bekommen wir das Geld, sobald wir die Versanddokumente vorlegen."
        }
       ],
       "frage": "Welche Zahlungsbedingungen schlägt Herr Brandt vor?",
       "opt": [
        "Zahlung des gesamten Betrags nach Lieferung.",
        "Eine Anzahlung und für den Rest eine Absicherung über eine Bank.",
        "Zahlung in drei gleichen Raten über ein Jahr."
       ],
       "loesung": 1,
       "stelle": "dreißig Prozent Anzahlung bei Auftrag und für den Rest ein Akkreditiv",
       "erklaerung": "Anzahlung plus Akkreditiv, weil der Kunde unbekannt ist."
      },
      {
       "ort": "Besprechung — Abschnitt 5",
       "zeilen": [
        {
         "wer": "Frau",
         "text": "Das klingt vernünftig. Der Kunde möchte übrigens bis Ende des Monats ein Angebot haben. Ist das zu schaffen, Herr Lenz?"
        },
        {
         "wer": "Mann",
         "text": "Ein vorläufiges Angebot ja, ein verbindliches nicht. Solange der Folientest nicht abgeschlossen ist, kann ich keine Leistungsdaten garantieren. Wir sollten deshalb ein Angebot unter Vorbehalt schicken und ausdrücklich schreiben, dass die endgültigen Werte nach dem Test folgen."
        }
       ],
       "frage": "Was sagt Herr Lenz zum Angebot?",
       "opt": [
        "Man soll ein Angebot unter Vorbehalt schicken.",
        "Ein verbindliches Angebot ist bis Monatsende möglich.",
        "Ein Angebot ist erst nach dem Besuch beim Kunden möglich."
       ],
       "loesung": 0,
       "stelle": "Wir sollten deshalb ein Angebot unter Vorbehalt schicken",
       "erklaerung": "Ohne abgeschlossenen Test sind keine verbindlichen Leistungsdaten möglich."
      },
      {
       "ort": "Besprechung — Abschnitt 6",
       "zeilen": [
        {
         "wer": "Mann",
         "text": "Darf ich noch etwas ergänzen? Ich bin Herr Petersen vom Kundendienst. Bei einer Lieferung nach Indien müssen wir auch an die Wartung denken. Wir können nicht jedes Mal einen Techniker hinschicken. Ich würde vorschlagen, zwei Mitarbeiter des Kunden hier bei uns zwei Wochen lang zu schulen. Die kleineren Störungen können sie dann selbst beheben."
        }
       ],
       "frage": "Was schlägt Herr Petersen für die Wartung vor?",
       "opt": [
        "Einen Techniker dauerhaft nach Indien zu schicken.",
        "Die Wartung einem Partnerunternehmen in Indien zu überlassen.",
        "Mitarbeiter des Kunden in Deutschland auszubilden."
       ],
       "loesung": 2,
       "stelle": "zwei Mitarbeiter des Kunden hier bei uns zwei Wochen lang zu schulen",
       "erklaerung": "Die Schulung findet hier statt, damit der Kunde kleine Störungen selbst behebt."
      },
      {
       "ort": "Besprechung — Abschnitt 7",
       "zeilen": [
        {
         "wer": "Frau",
         "text": "Sehr gut, das nehmen wir ins Angebot auf. Dann fasse ich zusammen: Herr Lenz bestellt die Folie und klärt das Material mit dem Kunden. Frau Yilmaz nimmt Kontakt zu den Speditionen auf. Herr Brandt prüft mit der Bank das Akkreditiv. Und ich selbst rufe den Kunden noch heute an, um ihm zu sagen, dass das Angebot zunächst vorläufig ist. Wir treffen uns am Donnerstag wieder."
        }
       ],
       "frage": "Was übernimmt Frau Kessler selbst?",
       "opt": [
        "Sie spricht mit der Bank über das Akkreditiv.",
        "Sie informiert den Kunden über das vorläufige Angebot.",
        "Sie bestellt die Folie beim Lieferanten."
       ],
       "loesung": 1,
       "stelle": "ich selbst rufe den Kunden noch heute an",
       "erklaerung": "Bank ist Herr Brandt, Folie ist Herr Lenz; Frau Kessler ruft den Kunden an."
      }
     ]
    }
   ]
  }
 ]
};
