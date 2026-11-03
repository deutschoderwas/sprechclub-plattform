/* ============================================================
   deutschoderwas club — SCHREIBEN telc Deutsch C1 Beruf

   Aufbau nach dem offiziellen telc-Format (Handbuch C1 Beruf und
   Übungstest 1 C1 Beruf, geprüft 03.11.2026). Alle Texte und
   Aufgaben eigene, Kontext Wirtschaft und Arbeitswelt.
   Erzeugt aus scratchpad/telcc1b mit bau.js.
   ============================================================ */

window.SCHREIBEN_TELC_C1B = {
 "niveau": "telcC1B",
 "pruefung": "telc Deutsch C1 Beruf",
 "minuten": 70,
 "punkte": 48,
 "intro": "Bei telc C1 Beruf wählst du eines von zwei Themen und schreibst in siebzig Minuten einen argumentativen Text von etwa 350 Wörtern: Vor- und Nachteile einer betrieblichen Entscheidung darlegen und deinen Standpunkt begründen. Bewertet wird nach vier Kriterien mit je bis zu 12 Punkten: Aufgabengerechtheit, Korrektheit, Repertoire und kommunikative Gestaltung.",
 "stufen": [
  {
   "nr": 1,
   "titel": "Der Aufbau",
   "zeichen": "🏛️",
   "was": "Einleitung, Pro, Contra, Standpunkt."
  },
  {
   "nr": 2,
   "titel": "Abwägen auf C1",
   "zeichen": "⚖️",
   "was": "Wirtschaftssprache, Nominalstil, roter Faden."
  },
  {
   "nr": 3,
   "titel": "Die Themen",
   "zeichen": "✍️",
   "was": "Je Runde zwei Themen zur Wahl, wie in der Prüfung."
  },
  {
   "nr": 4,
   "titel": "Die Prüfung",
   "zeichen": "⏱️",
   "was": "Ein Text, siebzig Minuten mit Uhr."
  }
 ],
 "bloecke": [
  {
   "id": "tc1bs1",
   "stufe": 1,
   "titel": "Argumentativer Aufbau",
   "kurz": "Einleitung, Vorteile, Nachteile, Standpunkt: ein klarer Bauplan für betriebliche Themen",
   "ziel": "Nach diesem Block baust du einen argumentativen Text zu einer betrieblichen Frage so auf, dass die Leser aus Geschäftsleitung oder Belegschaft jederzeit wissen, wo du gerade stehst.",
   "zeichen": "🏛️",
   "farbe": "turq",
   "aufgaben": [
    {
     "art": "wahl",
     "frage": "Die Geschäftsleitung überlegt, zum ersten Mal auf einer Fachmesse auszustellen. Welcher Einstieg passt am besten?",
     "opt": [
      "Messen gibt es schon sehr lange und viele Firmen gehen hin.",
      "Seit einigen Wochen wird bei uns die Frage diskutiert, ob wir im kommenden Frühjahr erstmals mit einem eigenen Stand auf der Fachmesse in Nürnberg vertreten sein sollen.",
      "Ich finde Messen gut und schreibe jetzt, warum."
     ],
     "loesung": 1,
     "erklaerung": "Der Einstieg nennt den konkreten Anlass im eigenen Betrieb und macht klar, worum es im Text geht."
    },
    {
     "art": "wahl",
     "frage": "Was gehört NICHT in die Einleitung?",
     "opt": [
      "Der Anlass, also die geplante Veränderung im Unternehmen",
      "Ein Hinweis darauf, dass du Vor- und Nachteile abwägen wirst",
      "Eine genaue Kostenrechnung mit allen Zahlen"
     ],
     "loesung": 2,
     "erklaerung": "Zahlen und Details sind Argumente und gehören in den Hauptteil. Die Einleitung bleibt kurz."
    },
    {
     "art": "wahl",
     "frage": "Wie lang sollte die Einleitung bei einem Text von etwa 350 Wörtern ungefähr sein?",
     "opt": [
      "Zwei bis drei Sätze, also etwa 40 bis 60 Wörter",
      "Die Hälfte des Textes",
      "Ein einziges Wort als Überschrift reicht"
     ],
     "loesung": 0,
     "erklaerung": "Die meisten Wörter brauchst du für die Argumente im Hauptteil. Eine kurze Einleitung lässt dafür Platz."
    },
    {
     "art": "wahl",
     "frage": "Welche Gliederung des Hauptteils ist am klarsten?",
     "opt": [
      "Vorteile und Nachteile bunt gemischt, wie sie einem einfallen",
      "Ein Absatz mit den Vorteilen, ein Absatz mit den Nachteilen, jeweils mit Beispiel",
      "Nur die Seite darstellen, die man selbst vertritt"
     ],
     "loesung": 1,
     "erklaerung": "Getrennte Absätze machen die Abwägung sichtbar. Wer nur eine Seite zeigt, erfüllt den Auftrag nicht."
    },
    {
     "art": "wahl",
     "frage": "In welcher Reihenfolge stellst du die Argumente am besten dar, wenn du am Ende GEGEN den Vorschlag bist?",
     "opt": [
      "Erst die Nachteile, dann die Vorteile",
      "Erst die Vorteile, dann die Nachteile, dann dein Standpunkt",
      "Die Reihenfolge spielt keine Rolle"
     ],
     "loesung": 1,
     "erklaerung": "Die Seite, die du am Ende vertrittst, steht direkt vor dem Schluss. So führt dein Text logisch zu deinem Urteil."
    },
    {
     "art": "wahl",
     "frage": "Welcher Satz eignet sich als Leitsatz für einen Absatz mit Vorteilen?",
     "opt": [
      "Für einen Messeauftritt spricht vor allem, dass wir neue Kunden persönlich kennenlernen könnten.",
      "Außerdem ist da noch was.",
      "Es gibt viele Gründe."
     ],
     "loesung": 0,
     "erklaerung": "Ein Leitsatz kündigt den Gedanken des Absatzes konkret an. Danach folgen Begründung und Beispiel."
    },
    {
     "art": "wahl",
     "frage": "Was macht ein Argument auf C1 überzeugend?",
     "opt": [
      "Eine Behauptung, die man mehrmals wiederholt",
      "Behauptung, Begründung und ein konkretes Beispiel aus dem Arbeitsalltag",
      "Möglichst viele Ausrufezeichen"
     ],
     "loesung": 1,
     "erklaerung": "Erst die Begründung und ein greifbares Beispiel, etwa aus dem eigenen Team, machen eine Behauptung zum Argument."
    },
    {
     "art": "wahl",
     "frage": "Welcher Schluss passt zu einem Text über Vertrauensarbeitszeit?",
     "opt": [
      "Ein ganz neues Argument zum Thema Urlaub",
      "Ein begründeter Standpunkt und ein konkreter Vorschlag, zum Beispiel eine Testphase in einer Abteilung",
      "Eine Wiederholung der Aufgabenstellung"
     ],
     "loesung": 1,
     "erklaerung": "Der Schluss bündelt die Abwägung zu einem Urteil. Ein konkreter Vorschlag zeigt, dass du praktisch denkst."
    },
    {
     "art": "ordnen",
     "frage": "Bau den Satz, der die Einleitung abschließt.",
     "teile": [
      "Im",
      "Folgenden",
      "möchte",
      "ich",
      "die",
      "Vor-",
      "und",
      "Nachteile",
      "dieses",
      "Vorschlags",
      "gegeneinander",
      "abwägen."
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
     "erklaerung": "„Im Folgenden\" auf Position eins, danach sofort das Verb. „Gegeneinander abwägen\" ist eine feste Verbindung."
    },
    {
     "art": "ordnen",
     "frage": "Bau den Satz, mit dem der Schluss beginnt.",
     "teile": [
      "Alles",
      "in",
      "allem",
      "spreche",
      "ich",
      "mich",
      "deshalb",
      "für",
      "eine",
      "einjährige",
      "Testphase",
      "aus."
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
     "erklaerung": "„Sich für etwas aussprechen\" mit trennbarem Verb: „aus\" steht am Satzende."
    }
   ]
  },
  {
   "id": "tc1bs2",
   "stufe": 1,
   "titel": "Wirtschaftssprache und Nominalstil",
   "kurz": "Präzise Wörter aus dem Betrieb statt Alltagssprache",
   "ziel": "Nach diesem Block formulierst du betriebliche Sachverhalte sachlich und knapp, mit passenden Fachwörtern und Nominalgruppen, ohne steif zu klingen.",
   "zeichen": "💼",
   "farbe": "gold",
   "aufgaben": [
    {
     "art": "wahl",
     "frage": "Welche Formulierung passt in einen Text an die Geschäftsleitung?",
     "opt": [
      "Die Firma würde dadurch einen Haufen Geld sparen.",
      "Dadurch ließen sich die laufenden Kosten spürbar senken.",
      "Da bleibt dann mehr Kohle übrig."
     ],
     "loesung": 1,
     "erklaerung": "„Laufende Kosten senken\" ist der übliche Ausdruck im Betrieb. „Haufen Geld\" und „Kohle\" sind umgangssprachlich."
    },
    {
     "art": "wahl",
     "frage": "Was ist die Nominalisierung von „weil die Aufträge zurückgegangen sind\"?",
     "opt": [
      "wegen des Rückgangs der Aufträge",
      "wegen die Aufträge zurückgehen",
      "wegen zurückgegangener Auftrag"
     ],
     "loesung": 0,
     "erklaerung": "„Zurückgehen\" wird zu „der Rückgang\", „wegen\" verlangt den Genitiv: „wegen des Rückgangs\"."
    },
    {
     "art": "wahl",
     "frage": "Welches Verb passt? „Wir sollten die Abläufe im Lager ___.\"",
     "opt": [
      "verschlanken",
      "verdünnen",
      "verkleinern"
     ],
     "loesung": 0,
     "erklaerung": "„Abläufe verschlanken\" bedeutet, unnötige Schritte zu streichen. Das ist im Betrieb ein gängiger Ausdruck."
    },
    {
     "art": "wahl",
     "frage": "Welche Nominalgruppe ersetzt „wenn man die Kunden besser bindet\"?",
     "opt": [
      "durch eine stärkere Kundenbindung",
      "durch Kunden stärker binden",
      "durch das Kunden binden besser"
     ],
     "loesung": 0,
     "erklaerung": "„Kundenbindung\" ist ein fester Begriff. Mit „durch\" und Adjektiv entsteht eine knappe Nominalgruppe."
    },
    {
     "art": "wahl",
     "frage": "Welcher Satz ist sachlich und trotzdem gut lesbar?",
     "opt": [
      "Die Einführung der Vertrauensarbeitszeit würde die Eigenverantwortung der Beschäftigten stärken.",
      "Die zum Zweck der Steigerung der Eigenverantwortung erfolgende Einführung der Vertrauensarbeitszeit.",
      "Wenn wir das machen, dann sind die Leute halt selber verantwortlich."
     ],
     "loesung": 0,
     "erklaerung": "Gute Wirtschaftssprache mischt Nominalgruppen mit einem echten Verb. Zu viele Nomen hintereinander machen den Satz unlesbar."
    },
    {
     "art": "wahl",
     "frage": "Welcher Ausdruck bedeutet, dass eine Investition sich nach einiger Zeit bezahlt macht?",
     "opt": [
      "Sie amortisiert sich.",
      "Sie vergeht sich.",
      "Sie verrechnet sich."
     ],
     "loesung": 0,
     "erklaerung": "„Sich amortisieren\" heißt: Die Ersparnis oder der Gewinn hat die Kosten wieder eingebracht."
    },
    {
     "art": "wahl",
     "frage": "Wie nennt man die Arbeit an einen externen Dienstleister abzugeben?",
     "opt": [
      "auslagern",
      "ausladen",
      "auslassen"
     ],
     "loesung": 0,
     "erklaerung": "„Auslagern\" oder „Outsourcing\" bedeutet, eine Aufgabe einem anderen Unternehmen zu übertragen."
    },
    {
     "art": "wahl",
     "frage": "Welche Formulierung klingt in einem Text für die Mitarbeiterzeitung natürlich?",
     "opt": [
      "Viele Kollegen in der Produktion befürchten, dass die Schichtplanung schwieriger wird.",
      "Seitens der Produktionsmitarbeiterschaft bestehen Befürchtungen hinsichtlich einer Erschwernis der Schichtplanung.",
      "Die Leute in der Halle haben halt Angst wegen der Schichten."
     ],
     "loesung": 0,
     "erklaerung": "Der erste Satz ist sachlich und klar. Der zweite übertreibt den Nominalstil, der dritte ist zu salopp."
    },
    {
     "art": "ordnen",
     "frage": "Bau den Satz im Nominalstil.",
     "teile": [
      "Die",
      "Auslagerung",
      "des",
      "Kundenservice",
      "hätte",
      "eine",
      "Senkung",
      "der",
      "Personalkosten",
      "zur",
      "Folge."
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
     "erklaerung": "„Etwas zur Folge haben\" ist eine Nomen-Verb-Verbindung, die in Wirtschaftstexten oft vorkommt."
    },
    {
     "art": "ordnen",
     "frage": "Bau den Satz mit einer Nomen-Verb-Verbindung.",
     "teile": [
      "Die",
      "Geschäftsleitung",
      "sollte",
      "die",
      "Bedenken",
      "des",
      "Betriebsrats",
      "in",
      "Betracht",
      "ziehen."
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
     "erklaerung": "„In Betracht ziehen\" bedeutet „berücksichtigen\". Das Modalverb steht auf Position zwei, der Infinitiv am Ende."
    }
   ]
  },
  {
   "id": "tc1bs3",
   "stufe": 2,
   "titel": "Abwägen und begründen auf C1",
   "kurz": "Zwar … aber, einerseits … andererseits, schwerer wiegt: Gewicht verteilen statt aufzählen",
   "ziel": "Nach diesem Block gewichtest du Argumente, räumst Gegenargumente ein und begründest deinen Standpunkt so, dass er auch für Skeptiker nachvollziehbar ist.",
   "zeichen": "⚖️",
   "farbe": "rot",
   "aufgaben": [
    {
     "art": "wahl",
     "frage": "Welcher Satz räumt ein Gegenargument ein und schwächt es zugleich ab?",
     "opt": [
      "Zwar kostet ein Messestand viel Geld, doch die Kontakte, die dort entstehen, sind kaum anders zu gewinnen.",
      "Ein Messestand kostet viel Geld und die Kontakte sind gut.",
      "Ein Messestand kostet viel Geld, deshalb sind die Kontakte gut."
     ],
     "loesung": 0,
     "erklaerung": "„Zwar … doch\" gibt der Gegenseite recht und stellt dann das stärkere Argument dagegen."
    },
    {
     "art": "wahl",
     "frage": "Was drückt „Schwerer wiegt meines Erachtens …\" aus?",
     "opt": [
      "Dass du alle Argumente gleich wichtig findest",
      "Dass du ein Argument wichtiger findest als die vorher genannten",
      "Dass ein Produkt besonders schwer ist"
     ],
     "loesung": 1,
     "erklaerung": "Mit „schwerer wiegen\" gewichtest du. Genau das unterscheidet eine Abwägung von einer Liste."
    },
    {
     "art": "wahl",
     "frage": "Welche Begründung ist auf C1 am überzeugendsten?",
     "opt": [
      "Ein Großraumbüro ist schlecht, weil es schlecht ist.",
      "Ein Großraumbüro ist ungeeignet für unsere Buchhaltung, weil dort viel konzentrierte Arbeit anfällt und schon heute jedes Telefonat am Nachbartisch stört.",
      "Ein Großraumbüro ist ungeeignet, das weiß doch jeder."
     ],
     "loesung": 1,
     "erklaerung": "Die Begründung bezieht sich auf die konkrete Abteilung und nennt eine Beobachtung. Das macht sie überprüfbar."
    },
    {
     "art": "wahl",
     "frage": "Welcher Konnektor leitet eine Einschränkung ein?",
     "opt": [
      "folglich",
      "allerdings",
      "zudem"
     ],
     "loesung": 1,
     "erklaerung": "„Allerdings\" schränkt das vorher Gesagte ein. „Folglich\" zieht eine Folgerung, „zudem\" ergänzt."
    },
    {
     "art": "wahl",
     "frage": "Wie formulierst du eine Bedingung für deine Zustimmung?",
     "opt": [
      "Ich stimme zu, und zwar immer.",
      "Ich halte das Modell für sinnvoll, vorausgesetzt, die Erreichbarkeit für Kunden bleibt gesichert.",
      "Ich halte das Modell für sinnvoll, obwohl ich es gut finde."
     ],
     "loesung": 1,
     "erklaerung": "„Vorausgesetzt, …\" nennt eine Bedingung. So wirkt dein Standpunkt durchdacht und nicht pauschal."
    },
    {
     "art": "wahl",
     "frage": "Welcher Satz zeigt Verständnis für die Gegenseite, ohne die eigene Position aufzugeben?",
     "opt": [
      "Die Sorge der Kollegen aus dem Vertrieb ist durchaus nachvollziehbar, sie lässt sich aber durch klare Absprachen auffangen.",
      "Die Kollegen aus dem Vertrieb haben unrecht.",
      "Die Kollegen aus dem Vertrieb haben recht, ich auch."
     ],
     "loesung": 0,
     "erklaerung": "Erst anerkennen, dann zeigen, wie man das Problem lösen kann: So überzeugt man auch Skeptiker."
    },
    {
     "art": "wahl",
     "frage": "Welche Formulierung passt zu einer vorsichtigen Einschätzung?",
     "opt": [
      "Es ist absolut sicher, dass der Umsatz steigt.",
      "Es ist durchaus denkbar, dass sich der Umsatz mittelfristig erhöht.",
      "Der Umsatz steigt hundertprozentig."
     ],
     "loesung": 1,
     "erklaerung": "Bei Prognosen ist Vorsicht glaubwürdiger. „Durchaus denkbar\" und „mittelfristig\" klingen sachlich."
    },
    {
     "art": "wahl",
     "frage": "Welcher Satz verbindet Argument und Folge elegant?",
     "opt": [
      "Viele Bewerber schreiben ungern Anschreiben, sodass uns gute Leute womöglich gar nicht erst erreichen.",
      "Viele Bewerber schreiben ungern Anschreiben. Und gute Leute. Erreichen uns nicht.",
      "Viele Bewerber schreiben ungern Anschreiben, obwohl gute Leute uns erreichen."
     ],
     "loesung": 0,
     "erklaerung": "„Sodass\" schließt eine Folge an. „Obwohl\" würde einen Gegensatz ausdrücken und passt hier nicht."
    },
    {
     "art": "ordnen",
     "frage": "Bau den Satz, der Argumente gewichtet.",
     "teile": [
      "Diesen",
      "Vorteilen",
      "stehen",
      "jedoch",
      "erhebliche",
      "Risiken",
      "gegenüber."
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
     "erklaerung": "„Etwas steht einer Sache gegenüber\" verlangt den Dativ: „diesen Vorteilen\"."
    },
    {
     "art": "ordnen",
     "frage": "Bau den Satz mit Einräumung.",
     "teile": [
      "Auch",
      "wenn",
      "die",
      "Umstellung",
      "zunächst",
      "Zeit",
      "kostet,",
      "halte",
      "ich",
      "sie",
      "für",
      "richtig."
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
     "erklaerung": "Nach dem Nebensatz mit „auch wenn\" steht im Hauptsatz sofort das Verb: „halte ich\"."
    }
   ]
  },
  {
   "id": "tc1bs4",
   "stufe": 2,
   "titel": "Verknüpfung und roter Faden",
   "kurz": "Absätze verbinden, zurückverweisen, überleiten: ein Text aus einem Guss",
   "ziel": "Nach diesem Block verknüpfst du Sätze und Absätze so, dass dein Text sich wie ein durchdachtes Ganzes liest und nicht wie eine Sammlung einzelner Gedanken.",
   "zeichen": "🧵",
   "farbe": "lila",
   "aufgaben": [
    {
     "art": "wahl",
     "frage": "Welche Überleitung verbindet den Absatz mit Vorteilen mit dem Absatz mit Nachteilen?",
     "opt": [
      "Jetzt kommen die Nachteile.",
      "So überzeugend diese Punkte auf den ersten Blick sind, so wenig darf man die Risiken übersehen.",
      "Nachteile gibt es auch."
     ],
     "loesung": 1,
     "erklaerung": "Die Überleitung blickt auf die Vorteile zurück und kündigt zugleich die Gegenseite an."
    },
    {
     "art": "wahl",
     "frage": "Worauf verweist „Dieser Punkt\" am Anfang eines Satzes?",
     "opt": [
      "Auf etwas, das gerade vorher genannt wurde",
      "Auf etwas, das erst im Schluss kommt",
      "Auf die Überschrift"
     ],
     "loesung": 0,
     "erklaerung": "Rückverweise wie „dieser Punkt\", „ein solches Modell\" oder „das\" knüpfen an den vorigen Satz an und halten den Faden."
    },
    {
     "art": "wahl",
     "frage": "Welches Wort vermeidet die Wiederholung von „die Vier-Tage-Woche\" im nächsten Satz?",
     "opt": [
      "ein solches Arbeitszeitmodell",
      "die Woche",
      "sie selbst wieder"
     ],
     "loesung": 0,
     "erklaerung": "Ein Synonym mit „solch\" greift den Begriff auf, ohne ihn zu wiederholen. „Die Woche\" wäre ungenau."
    },
    {
     "art": "wahl",
     "frage": "Welcher Konnektor fügt ein zusätzliches Argument derselben Richtung hinzu?",
     "opt": [
      "hinzu kommt, dass",
      "dennoch",
      "im Gegensatz dazu"
     ],
     "loesung": 0,
     "erklaerung": "„Hinzu kommt, dass\" ergänzt. „Dennoch\" und „im Gegensatz dazu\" leiten eine Gegenposition ein."
    },
    {
     "art": "wahl",
     "frage": "Welcher Satz verweist im Schluss elegant auf die Einleitung zurück?",
     "opt": [
      "Um auf die eingangs gestellte Frage zurückzukommen: Ein eigener Messestand lohnt sich für uns erst im übernächsten Jahr.",
      "Ich habe jetzt genug geschrieben.",
      "Die Frage war ja am Anfang."
     ],
     "loesung": 0,
     "erklaerung": "„Eingangs\" verweist auf den Anfang des Textes. So schließt sich der Bogen."
    },
    {
     "art": "wahl",
     "frage": "Welche Satzverbindung ist korrekt?",
     "opt": [
      "Die Kosten sind hoch, trotzdem halte ich die Investition für sinnvoll.",
      "Die Kosten sind hoch, trotzdem ich halte die Investition für sinnvoll.",
      "Die Kosten sind hoch, trotzdem die Investition ich für sinnvoll halte."
     ],
     "loesung": 0,
     "erklaerung": "„Trotzdem\" steht auf Position eins des Hauptsatzes, danach folgt sofort das Verb."
    },
    {
     "art": "wahl",
     "frage": "Womit verbindest du ein Beispiel mit der vorangehenden Behauptung?",
     "opt": [
      "So hat etwa unser Standort in Bremen im letzten Jahr …",
      "Aber unser Standort in Bremen …",
      "Folglich hat unser Standort in Bremen …"
     ],
     "loesung": 0,
     "erklaerung": "„So … etwa\" oder „wie das Beispiel … zeigt\" kündigen ein Beispiel an. „Folglich\" wäre eine Schlussfolgerung."
    },
    {
     "art": "wahl",
     "frage": "Was gehört an den Anfang jedes Absatzes im Hauptteil?",
     "opt": [
      "Ein Satz, der den neuen Gedanken mit dem vorigen verbindet oder ihn ankündigt",
      "Ein Zitat aus dem Internet",
      "Eine Frage an den Leser, ohne Antwort"
     ],
     "loesung": 0,
     "erklaerung": "Der erste Satz eines Absatzes ist die Brücke. Er zeigt, warum jetzt dieser Gedanke folgt."
    },
    {
     "art": "ordnen",
     "frage": "Bau den Satz, der zum Schluss überleitet.",
     "teile": [
      "Wägt",
      "man",
      "die",
      "genannten",
      "Argumente",
      "gegeneinander",
      "ab,",
      "so",
      "überwiegen",
      "aus",
      "meiner",
      "Sicht",
      "die",
      "Vorteile."
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
      11,
      12,
      13
     ],
     "erklaerung": "Konditionalsatz ohne „wenn\": Das Verb steht vorn, der Hauptsatz beginnt mit „so\"."
    },
    {
     "art": "ordnen",
     "frage": "Bau den Satz mit einem Rückverweis.",
     "teile": [
      "Gerade",
      "dieser",
      "Aspekt",
      "wird",
      "in",
      "der",
      "bisherigen",
      "Diskussion",
      "oft",
      "übersehen."
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
     "erklaerung": "„Gerade dieser Aspekt\" greift den vorigen Gedanken auf und hebt ihn hervor."
    }
   ]
  }
 ],
 "teile": [
  {
   "nr": 1,
   "art": "mitteilung",
   "name": "Argumentativer Text",
   "kurz": "Zwei Themen zur Wahl, etwa 350 Wörter",
   "was": "In jeder Runde stehen zwei Themen aus dem Betrieb, wie in der Prüfung. Schreib eines oder beide. Zu jedem gibt es einen Mustertext.",
   "tipp": "Plane fünf Minuten: Welche Vorteile, welche Nachteile, welches Beispiel aus deinem Beruf, welches Fazit? Dann erst schreiben.",
   "zeichen": "🖋️",
   "farbe": "turq",
   "punkte": 48,
   "runden": [
    {
     "id": "tc1bsr1",
     "titel": "Runde 1",
     "aufgaben": [
      {
       "id": "tc1bt1",
       "situation": "Die Geschäftsleitung der Hagedorn Verpackungen GmbH in Bielefeld mit rund zweihundert Beschäftigten plant ein Programm, bei dem Mitarbeiter für sechs Monate in eine andere Abteilung wechseln können. Die Mitarbeiterzeitung bittet um Beiträge. Legen Sie Vor- und Nachteile eines solchen Tätigkeitswechsels dar und begründen Sie Ihren Standpunkt.",
       "eingang": {
        "von": "Stimmen aus der Belegschaft",
        "betreff": "Sechs Monate in einer anderen Abteilung?",
        "text": "„Ich habe zwölf Jahre nur Angebote kalkuliert. Ein halbes Jahr in der Produktion würde mir zeigen, warum manche Termine einfach nicht zu halten sind.\" Tobias Rehm, Vertriebsinnendienst\n„Wer soll denn meine Arbeit machen, wenn ich weg bin? Am Ende bleibt alles an den Kollegen hängen.\" Sevgi Aydın, Buchhaltung"
       },
       "sorte": "aufsatz",
       "an": null,
       "punkte": [
        {
         "nr": 1,
         "was": "Einleitung",
         "hinweis": "Nennen Sie den Anlass und die Frage, um die es geht."
        },
        {
         "nr": 2,
         "was": "Vorteile",
         "hinweis": "Stellen Sie dar, was für einen Tätigkeitswechsel spricht."
        },
        {
         "nr": 3,
         "was": "Nachteile",
         "hinweis": "Stellen Sie dar, was dagegen spricht."
        },
        {
         "nr": 4,
         "was": "Eigener Standpunkt",
         "hinweis": "Beziehen Sie begründet Stellung und machen Sie einen Vorschlag."
        }
       ],
       "muster": "Seit der Betriebsversammlung im März wird bei uns darüber gesprochen, ob Mitarbeiter künftig für sechs Monate in eine andere Abteilung wechseln dürfen. Die Meinungen gehen weit auseinander, wie die beiden Stimmen in der letzten Ausgabe zeigen. Im Folgenden möchte ich die wichtigsten Argumente abwägen und meinen eigenen Standpunkt darlegen.\nFür das Programm spricht vor allem, dass man die Arbeit der anderen Abteilungen endlich von innen kennenlernt. Herr Rehm aus dem Vertriebsinnendienst bringt es auf den Punkt: Wer nie in der Produktion gestanden hat, versteht nicht, warum ein zugesagter Liefertermin plötzlich wackelt. Solche Missverständnisse kosten uns jede Woche Zeit und Nerven. Hinzu kommt, dass viele Kollegen seit Jahren dieselbe Tätigkeit ausüben. Ein Wechsel könnte neue Motivation wecken und zeigen, wo jemand noch ungenutzte Fähigkeiten hat. Für das Unternehmen wäre das ein Gewinn, weil im Krankheitsfall mehr Leute einspringen könnten.\nSo überzeugend diese Punkte sind, so wenig darf man die Probleme übersehen. Frau Aydın aus der Buchhaltung spricht eine berechtigte Sorge aus. In kleinen Teams fällt jeder Ausfall sofort auf, und ein halbes Jahr ist eine lange Zeit. Wenn keine Vertretung geregelt ist, müssen die verbleibenden Kollegen die Arbeit mit erledigen, und das führt schnell zu Überstunden und Unmut. Außerdem braucht jeder Neue eine Einarbeitung. In der Fertigung etwa darf niemand ohne Schulung an die Maschinen, sodass der Wechsel zunächst eher bremst als hilft.\nIch selbst habe in meiner früheren Firma in Izmir drei Monate im Einkauf verbracht, obwohl ich eigentlich im Kundenservice tätig war. Danach konnte ich Kundenanfragen zu Lieferzeiten viel genauer beantworten, weil ich wusste, wie unsere Lieferanten arbeiten. Allerdings hatte meine Abteilung damals eine Aushilfe für mich eingestellt, sonst wäre das kaum gegangen.\nAlles in allem spreche ich mich für das Programm aus, vorausgesetzt, es wird sorgfältig geplant. Sinnvoll erscheint mir, mit zwei oder drei Freiwilligen pro Jahr zu beginnen, die Dauer zunächst auf drei Monate zu begrenzen und vorab eine Vertretung festzulegen. Nach einem Jahr sollten Teilnehmer und Abteilungsleiter gemeinsam auswerten, ob sich der Aufwand gelohnt hat. Erst dann ließe sich entscheiden, ob das Programm auf weitere Abteilungen ausgeweitet wird.",
       "woerter": 350,
       "hilfen": [
        "Seit … wird bei uns darüber gesprochen, ob …",
        "Für das Programm spricht vor allem, dass …",
        "Hinzu kommt, dass …",
        "So überzeugend diese Punkte sind, so wenig darf man … übersehen.",
        "Ich selbst habe in meiner früheren Firma …",
        "Alles in allem spreche ich mich für … aus, vorausgesetzt, …"
       ],
       "erklaerung": "Der Text greift beide Kollegenstimmen auf, trennt Vorteile und Nachteile in eigene Absätze, stützt die Abwägung mit einer eigenen Erfahrung und endet mit einer Zustimmung unter klaren Bedingungen.",
       "rubrik": [
        {
         "t": "Aufgabengerechtheit",
         "h": "Passt der Text zum Auftrag? Vor- und Nachteile, eigener Standpunkt, roter Faden, kritische Auseinandersetzung?"
        },
        {
         "t": "Korrektheit",
         "h": "Grammatik und Rechtschreibung: Stören Fehler das Verstehen? Vergleich mit dem Muster."
        },
        {
         "t": "Repertoire",
         "h": "Wie vielfältig und präzise sind Wortschatz und Satzbau? Nominalstil, Fachwörter, Konnektoren."
        },
        {
         "t": "Kommunikative Gestaltung",
         "h": "Klare Struktur, gut verknüpft, dem Anlass angemessen?"
        }
       ],
       "max": 48,
       "c1h": true,
       "c1allg": true,
       "level": "C1",
       "platzhalter": "Schreib hier deinen Text …",
       "rubrikTitel": "Bewerte dich nach den vier telc-Kriterien",
       "rubrikHinweis": "Vier Kriterien wie bei telc C1 Beruf, je A = 12, B = 8, C = 4, D = 0 Punkte."
      },
      {
       "id": "tc1bt2",
       "situation": "Die Kühn Lasertechnik GmbH, ein Betrieb mit vierzig Mitarbeitern in Ulm, überlegt, im nächsten Jahr zum ersten Mal mit einem eigenen Stand auf einer internationalen Fachmesse auszustellen. Die Geschäftsführung bittet die Abteilungsleiter um eine schriftliche Einschätzung. Legen Sie Vor- und Nachteile dar und begründen Sie Ihren Standpunkt.",
       "eingang": {
        "von": "Aus dem Protokoll der Leitungsrunde",
        "betreff": "Erste Messeteilnahme",
        "text": "„Unsere Wettbewerber stehen alle in Stuttgart. Wer dort fehlt, existiert für viele Einkäufer gar nicht.\" Marc Kühn, Geschäftsführer\n„Ein Stand kostet uns mit allem Drum und Dran schnell sechzigtausend Euro. Das sind zwei Vertriebsmitarbeiter für ein halbes Jahr.\" Ilona Fechner, Controlling"
       },
       "sorte": "aufsatz",
       "an": null,
       "punkte": [
        {
         "nr": 1,
         "was": "Einleitung",
         "hinweis": "Nennen Sie den Anlass Ihrer Einschätzung."
        },
        {
         "nr": 2,
         "was": "Vorteile einer Messeteilnahme",
         "hinweis": "Erläutern Sie, was das Unternehmen gewinnen könnte."
        },
        {
         "nr": 3,
         "was": "Nachteile und Risiken",
         "hinweis": "Erläutern Sie Kosten und Aufwand."
        },
        {
         "nr": 4,
         "was": "Empfehlung",
         "hinweis": "Geben Sie eine begründete Empfehlung."
        }
       ],
       "muster": "In der Leitungsrunde vom vergangenen Dienstag wurde die Frage aufgeworfen, ob wir im kommenden Herbst zum ersten Mal mit einem eigenen Stand auf der Fachmesse in Stuttgart vertreten sein sollen. Da die Entscheidung erhebliche Mittel bindet, möchte ich die Argumente beider Seiten kurz gegenüberstellen und eine Empfehlung aus Sicht des Vertriebs geben.\nFür eine Teilnahme spricht zunächst die Sichtbarkeit. Herr Kühn hat recht, wenn er darauf hinweist, dass alle unsere direkten Wettbewerber in Stuttgart ausstellen. Viele Einkäufer aus der Automobilzulieferung planen ihren Messebesuch gezielt, um sich an zwei Tagen einen Überblick über den Markt zu verschaffen. Wer dort nicht vertreten ist, taucht in ihren Listen schlicht nicht auf. Ein zweiter Vorteil liegt im persönlichen Gespräch. Auf einer Messe kommen Einkäufer, Konstrukteure und Geschäftsführer an einen Tisch, die man sonst nur mit vielen Anrufen und Terminen einzeln erreicht. Unsere Schneidanlagen sind erklärungsbedürftig, und an einer laufenden Maschine überzeugt man einen Kunden schneller als mit jedem Prospekt.\nDiesen Chancen stehen jedoch erhebliche Kosten gegenüber. Frau Fechner rechnet mit rund sechzigtausend Euro für Standmiete, Aufbau, Transport der Vorführanlage, Hotel und Personal. Für einen Betrieb unserer Größe ist das eine Summe, die sich erst nach mehreren Aufträgen amortisiert. Zum Vergleich: Unser gesamtes Marketingbudget lag im vergangenen Jahr bei knapp neunzigtausend Euro, und davon sind zwei Drittel für die neue Internetseite und unsere Kataloge bereits fest verplant. Hinzu kommt der Aufwand in der Vorbereitung. Vier Kollegen wären mindestens eine Woche gebunden, und in dieser Zeit bleibt das Tagesgeschäft liegen. Schließlich ist ungewiss, ob ein Neuling ohne Erfahrung mit Messen die Kontakte nach der Messe auch konsequent nachbearbeitet. Ohne diese Nacharbeit wäre das Geld weitgehend verloren.\nWägt man beide Seiten ab, so halte ich einen Messeauftritt grundsätzlich für richtig, aber nicht in der Form eines großen Einzelstands. Ich schlage vor, im ersten Jahr einen Platz auf dem Gemeinschaftsstand des Landes Baden-Württemberg zu buchen. Dort sind die Kosten deutlich niedriger, und wir können testen, wie viele ernsthafte Anfragen wir tatsächlich erhalten. Parallel sollten wir vorab festlegen, wer die Kontakte innerhalb von zwei Wochen nach der Messe anruft. Wenn sich daraus mindestens drei konkrete Angebote ergeben, wäre ein eigener Stand im Folgejahr gut begründet.",
       "woerter": 350,
       "hilfen": [
        "In der Leitungsrunde wurde die Frage aufgeworfen, ob …",
        "Für eine Teilnahme spricht zunächst …",
        "Diesen Chancen stehen jedoch erhebliche Kosten gegenüber.",
        "… amortisiert sich erst nach …",
        "Wägt man beide Seiten ab, so …",
        "Ich schlage vor, im ersten Jahr …"
       ],
       "erklaerung": "Die Einschätzung bezieht sich auf beide Stimmen aus der Leitungsrunde, nennt konkrete Kosten und Abläufe und schlägt einen Mittelweg mit einem messbaren Kriterium für die spätere Entscheidung vor.",
       "rubrik": [
        {
         "t": "Aufgabengerechtheit",
         "h": "Passt der Text zum Auftrag? Vor- und Nachteile, eigener Standpunkt, roter Faden, kritische Auseinandersetzung?"
        },
        {
         "t": "Korrektheit",
         "h": "Grammatik und Rechtschreibung: Stören Fehler das Verstehen? Vergleich mit dem Muster."
        },
        {
         "t": "Repertoire",
         "h": "Wie vielfältig und präzise sind Wortschatz und Satzbau? Nominalstil, Fachwörter, Konnektoren."
        },
        {
         "t": "Kommunikative Gestaltung",
         "h": "Klare Struktur, gut verknüpft, dem Anlass angemessen?"
        }
       ],
       "max": 48,
       "c1h": true,
       "c1allg": true,
       "level": "C1",
       "platzhalter": "Schreib hier deinen Text …",
       "rubrikTitel": "Bewerte dich nach den vier telc-Kriterien",
       "rubrikHinweis": "Vier Kriterien wie bei telc C1 Beruf, je A = 12, B = 8, C = 4, D = 0 Punkte."
      }
     ]
    },
    {
     "id": "tc1bsr2",
     "titel": "Runde 2",
     "aufgaben": [
      {
       "id": "tc1bt3",
       "situation": "Die Versicherungsagentur Lorenz und Partner in Hannover möchte die Zeiterfassung abschaffen und Vertrauensarbeitszeit einführen: Wann und wie lange jemand arbeitet, entscheidet jeder selbst, solange die Arbeit erledigt wird und Termine eingehalten werden. Der Betriebsrat sammelt dazu Meinungen. Legen Sie Vor- und Nachteile dar und begründen Sie Ihren Standpunkt.",
       "eingang": {
        "von": "Rundmail des Betriebsrats",
        "betreff": "Vertrauensarbeitszeit: Ihre Meinung ist gefragt",
        "text": "„Endlich muss ich mich nicht mehr rechtfertigen, wenn ich nachmittags mein Kind abhole und abends noch zwei Akten bearbeite.\" Kerstin Wolff, Schadensabteilung\n„Ohne Stempeluhr zählt niemand mehr die Überstunden. Ich kenne Firmen, da arbeiten die Leute dann einfach umsonst länger.\" Daniel Brandt, Betriebsrat"
       },
       "sorte": "aufsatz",
       "an": null,
       "punkte": [
        {
         "nr": 1,
         "was": "Einleitung",
         "hinweis": "Nennen Sie den Anlass."
        },
        {
         "nr": 2,
         "was": "Vorteile",
         "hinweis": "Was spricht für Vertrauensarbeitszeit?"
        },
        {
         "nr": 3,
         "was": "Nachteile",
         "hinweis": "Welche Risiken sehen Sie?"
        },
        {
         "nr": 4,
         "was": "Standpunkt",
         "hinweis": "Nehmen Sie begründet Stellung."
        }
       ],
       "muster": "Die Geschäftsleitung hat angekündigt, ab Januar die Zeiterfassung abzuschaffen und Vertrauensarbeitszeit einzuführen. Der Betriebsrat bittet uns um unsere Meinung, und ich möchte diese Gelegenheit nutzen, um die Vor- und Nachteile aus Sicht der Sachbearbeitung abzuwägen.\nAuf den ersten Blick hat das Modell viel für sich. Wie Frau Wolff aus der Schadensabteilung schreibt, könnten Kollegen mit Kindern oder pflegebedürftigen Eltern ihren Tag deutlich freier einteilen. Es macht wenig Sinn, um halb neun am Schreibtisch zu sitzen, wenn die Kunden ohnehin erst gegen zehn anrufen. Zudem drückt die Abschaffung der Stempeluhr ein Vertrauen aus, das viele als Wertschätzung empfinden werden. Wer sich nicht ständig kontrolliert fühlt, arbeitet erfahrungsgemäß motivierter und übernimmt mehr Verantwortung für seine Ergebnisse. Nebenbei entfiele auch der Ärger über vergessene Buchungen am Terminal, den die Personalabteilung jeden Monat mühsam von Hand korrigieren muss.\nGleichwohl sind die Bedenken von Herrn Brandt ernst zu nehmen. Wenn niemand mehr die Stunden erfasst, verschwimmt die Grenze zwischen Arbeit und Freizeit schnell. Gerade in Wochen mit vielen Sturmschäden ist die Arbeitsmenge bei uns kaum zu bewältigen, und ohne Zeiterfassung würden die Mehrstunden einfach unsichtbar. Hinzu kommt, dass nicht jeder sich gut selbst organisieren kann. Jüngere Kollegen, die gerade erst eingearbeitet werden, brauchen feste Ansprechpartner und klare Zeiten, in denen das Team erreichbar ist. Auch unsere Kunden erwarten, dass sie vormittags jemanden erreichen, der ihre Schadensmeldung kennt.\nEin Bekannter, der bei einer Bank in Frankfurt arbeitet, hat mir von genau diesem Problem erzählt. Nach der Einführung der Vertrauensarbeitszeit sei die Stimmung zunächst gut gewesen, nach einem Jahr hätten sich aber viele über ständige Erreichbarkeit am Abend beklagt. Erst als die Bank Kernzeiten und eine freiwillige Zeiterfassung eingeführt habe, habe sich die Lage entspannt.\nAus diesen Gründen befürworte ich die Vertrauensarbeitszeit, allerdings nicht ohne Regeln. Ich schlage vor, eine Kernzeit von zehn bis fünfzehn Uhr festzulegen, in der alle erreichbar sind. Darüber hinaus sollte jeder die Möglichkeit haben, seine Stunden freiwillig in einem einfachen Programm zu notieren, damit Überlastung sichtbar wird. Nach sechs Monaten könnte der Betriebsrat eine anonyme Umfrage durchführen, um zu prüfen, ob das Modell hält, was es verspricht.",
       "woerter": 350,
       "hilfen": [
        "Auf den ersten Blick hat das Modell viel für sich.",
        "Wer sich nicht ständig kontrolliert fühlt, …",
        "Gleichwohl sind die Bedenken von … ernst zu nehmen.",
        "Hinzu kommt, dass …",
        "Aus diesen Gründen befürworte ich …, allerdings nicht ohne …",
        "Darüber hinaus sollte jeder die Möglichkeit haben, …"
       ],
       "erklaerung": "Der Beitrag nimmt beide Stimmen auf, gibt eine Erfahrung aus zweiter Hand korrekt im Konjunktiv I wieder und verbindet die Zustimmung mit zwei konkreten Regeln und einer Überprüfung.",
       "rubrik": [
        {
         "t": "Aufgabengerechtheit",
         "h": "Passt der Text zum Auftrag? Vor- und Nachteile, eigener Standpunkt, roter Faden, kritische Auseinandersetzung?"
        },
        {
         "t": "Korrektheit",
         "h": "Grammatik und Rechtschreibung: Stören Fehler das Verstehen? Vergleich mit dem Muster."
        },
        {
         "t": "Repertoire",
         "h": "Wie vielfältig und präzise sind Wortschatz und Satzbau? Nominalstil, Fachwörter, Konnektoren."
        },
        {
         "t": "Kommunikative Gestaltung",
         "h": "Klare Struktur, gut verknüpft, dem Anlass angemessen?"
        }
       ],
       "max": 48,
       "c1h": true,
       "c1allg": true,
       "level": "C1",
       "platzhalter": "Schreib hier deinen Text …",
       "rubrikTitel": "Bewerte dich nach den vier telc-Kriterien",
       "rubrikHinweis": "Vier Kriterien wie bei telc C1 Beruf, je A = 12, B = 8, C = 4, D = 0 Punkte."
      },
      {
       "id": "tc1bt4",
       "situation": "Die Brückner Medizintechnik AG in Tuttlingen erzielt inzwischen sechzig Prozent ihres Umsatzes im Ausland. Der Vorstand überlegt, Englisch als offizielle Firmensprache einzuführen, auch für Besprechungen und interne Dokumente. Für das Intranet werden Stellungnahmen gesammelt. Legen Sie Vor- und Nachteile dar und begründen Sie Ihren Standpunkt.",
       "eingang": {
        "von": "Intranet, Forum „Unternehmen im Wandel\"",
        "betreff": "Englisch als Firmensprache?",
        "text": "„In unserem Entwicklungsteam sitzen Leute aus neun Ländern. Wir sprechen sowieso schon Englisch, nur die Protokolle sind noch auf Deutsch.\" Rahul Mehta, Entwicklung\n„In der Montage sprechen viele kaum Englisch. Sollen die jetzt Arbeitsanweisungen lesen, die sie nicht verstehen?\" Jürgen Haas, Meister Montage"
       },
       "sorte": "aufsatz",
       "an": null,
       "punkte": [
        {
         "nr": 1,
         "was": "Einleitung",
         "hinweis": "Nennen Sie den Anlass."
        },
        {
         "nr": 2,
         "was": "Vorteile",
         "hinweis": "Was spricht für Englisch als Firmensprache?"
        },
        {
         "nr": 3,
         "was": "Nachteile",
         "hinweis": "Was spricht dagegen?"
        },
        {
         "nr": 4,
         "was": "Standpunkt",
         "hinweis": "Begründen Sie Ihre Meinung und machen Sie einen Vorschlag."
        }
       ],
       "muster": "Weil wir inzwischen mehr als die Hälfte unseres Umsatzes im Ausland erzielen, denkt der Vorstand darüber nach, Englisch zur offiziellen Firmensprache zu machen. Diese Entscheidung würde unseren Arbeitsalltag stark verändern. Deshalb möchte ich im Folgenden die wichtigsten Argumente dafür und dagegen abwägen.\nFür eine einheitliche Firmensprache spricht vor allem die Zusammenarbeit über Ländergrenzen hinweg. Herr Mehta beschreibt die Lage in der Entwicklung sehr treffend: Besprechungen laufen dort längst auf Englisch, doch die Protokolle müssen anschließend übersetzt werden, was Zeit kostet und zu Fehlern führt. Auch mit unseren Tochtergesellschaften in Boston und Singapur ließen sich Unterlagen schneller austauschen. Hinzu kommt die Personalgewinnung. Hoch qualifizierte Ingenieure aus dem Ausland würden eher zu uns kommen, wenn sie nicht vom ersten Tag an Deutsch beherrschen müssen. Im vergangenen Jahr haben zwei Bewerber aus Indien ihre Zusage zurückgezogen, weil ihnen die Sprachanforderungen zu hoch erschienen.\nDiesen Vorteilen stehen allerdings ernsthafte Probleme gegenüber. Herr Haas weist zu Recht darauf hin, dass in der Montage viele Kollegen kaum Englisch sprechen. In der Medizintechnik ist das besonders heikel, denn wer eine Arbeitsanweisung nicht genau versteht, macht Fehler, die im schlimmsten Fall Patienten gefährden. Außerdem würden sich langjährige Mitarbeiter, die ihr Fachwissen auf Deutsch gelernt haben, plötzlich unsicher fühlen und sich in Besprechungen weniger einbringen. Es besteht die Gefahr, dass im Unternehmen zwei Gruppen entstehen: die, die mitreden, und die, die nur noch zuhören.\nAus eigener Erfahrung weiß ich, wie anstrengend das sein kann. In meiner ersten Stelle in Deutschland wurde in den Besprechungen Deutsch gesprochen, das ich damals nur mittelmäßig beherrschte. Ich habe viele gute Ideen für mich behalten, einfach weil mir die Worte fehlten. Dieselbe Situation möchte ich unseren Kollegen in der Montage ersparen.\nMeines Erachtens wäre eine Lösung nach Bereichen sinnvoller als eine Regel für alle. Englisch sollte die Sprache in der Entwicklung, im internationalen Vertrieb und in allen Unterlagen sein, die ins Ausland gehen. In Produktion und Montage dagegen sollten Arbeitsanweisungen auf Deutsch bleiben und bei Bedarf übersetzt werden. Zugleich sollte das Unternehmen allen Interessierten kostenlose Englischkurse während der Arbeitszeit anbieten. Umgekehrt sollten ausländische Kollegen Deutschkurse besuchen können, damit die Verständigung in beide Richtungen besser wird.",
       "woerter": 350,
       "hilfen": [
        "Für eine einheitliche Firmensprache spricht vor allem …",
        "… beschreibt die Lage sehr treffend:",
        "Diesen Vorteilen stehen allerdings ernsthafte Probleme gegenüber.",
        "… weist zu Recht darauf hin, dass …",
        "Es besteht die Gefahr, dass …",
        "Meines Erachtens wäre … sinnvoller als …"
       ],
       "erklaerung": "Der Text verbindet die betriebliche Realität beider Abteilungen mit einer eigenen Spracherfahrung und schlägt eine differenzierte Lösung nach Bereichen statt eines pauschalen Ja oder Nein vor.",
       "rubrik": [
        {
         "t": "Aufgabengerechtheit",
         "h": "Passt der Text zum Auftrag? Vor- und Nachteile, eigener Standpunkt, roter Faden, kritische Auseinandersetzung?"
        },
        {
         "t": "Korrektheit",
         "h": "Grammatik und Rechtschreibung: Stören Fehler das Verstehen? Vergleich mit dem Muster."
        },
        {
         "t": "Repertoire",
         "h": "Wie vielfältig und präzise sind Wortschatz und Satzbau? Nominalstil, Fachwörter, Konnektoren."
        },
        {
         "t": "Kommunikative Gestaltung",
         "h": "Klare Struktur, gut verknüpft, dem Anlass angemessen?"
        }
       ],
       "max": 48,
       "c1h": true,
       "c1allg": true,
       "level": "C1",
       "platzhalter": "Schreib hier deinen Text …",
       "rubrikTitel": "Bewerte dich nach den vier telc-Kriterien",
       "rubrikHinweis": "Vier Kriterien wie bei telc C1 Beruf, je A = 12, B = 8, C = 4, D = 0 Punkte."
      }
     ]
    },
    {
     "id": "tc1bsr3",
     "titel": "Runde 3",
     "aufgaben": [
      {
       "id": "tc1bt5",
       "situation": "Die Hausverwaltung Seidel und Söhne in Leipzig zieht in ein neues Gebäude. Statt Zweierbüros soll es dort ein Großraumbüro für alle fünfunddreißig Mitarbeiter geben, mit Telefonkabinen und Besprechungsräumen. Die Geschäftsleitung bittet die Abteilungen um eine schriftliche Rückmeldung. Legen Sie Vor- und Nachteile dar und begründen Sie Ihren Standpunkt.",
       "eingang": {
        "von": "Rückmeldungen aus den Abteilungen",
        "betreff": "Umzug in die Prager Straße",
        "text": "„Wenn wir alle in einem Raum sitzen, muss ich nicht mehr zwanzig Mails schreiben, um eine Frage zur Nebenkostenabrechnung zu klären.\" Paula Engel, Objektbetreuung\n„Ich telefoniere jeden Tag mit verärgerten Mietern. Das will ich nicht vor dreißig Leuten tun, und die wollen es auch nicht hören.\" Frank Görlitz, Mieterservice"
       },
       "sorte": "aufsatz",
       "an": null,
       "punkte": [
        {
         "nr": 1,
         "was": "Einleitung",
         "hinweis": "Nennen Sie den Anlass."
        },
        {
         "nr": 2,
         "was": "Vorteile",
         "hinweis": "Was spricht für ein Großraumbüro?"
        },
        {
         "nr": 3,
         "was": "Nachteile",
         "hinweis": "Was spricht dagegen?"
        },
        {
         "nr": 4,
         "was": "Standpunkt",
         "hinweis": "Beziehen Sie begründet Stellung."
        }
       ],
       "muster": "Im Sommer ziehen wir in das neue Gebäude in der Prager Straße, und nach den bisherigen Plänen sollen dort alle Kollegen gemeinsam in einem Großraumbüro arbeiten. Die Geschäftsleitung hat uns gebeten, dazu Stellung zu nehmen. Ich möchte zunächst die Argumente dafür und dagegen darstellen und anschließend meine Einschätzung begründen.\nEin Großraumbüro bietet zweifellos einige Vorteile. Frau Engel aus der Objektbetreuung nennt den wichtigsten: Kurze Wege erleichtern die Abstimmung. Heute laufen viele Fragen über E-Mails hin und her, obwohl sie sich in einem kurzen Gespräch am Schreibtisch klären ließen. Gerade bei der Nebenkostenabrechnung, an der Buchhaltung und Objektbetreuung gemeinsam arbeiten, würde das Zeit sparen. Darüber hinaus fördert ein offener Raum den Austausch zwischen den Abteilungen, die sich heute oft nur in der Kaffeeküche begegnen. Neue Kollegen lernen dort schneller, wer wofür zuständig ist. Und nicht zuletzt würde die Geschäftsleitung, die ebenfalls im Raum sitzen soll, leichter ansprechbar sein.\nDem steht jedoch ein gewichtiger Nachteil gegenüber, nämlich der Lärm. Ein Großteil unserer Arbeit besteht aus Telefonaten, und viele davon sind unangenehm. Herr Görlitz vom Mieterservice beschreibt die Lage sehr anschaulich: Wer mit einem verärgerten Mieter über einen Wasserschaden spricht, braucht Ruhe, und die Kollegen ringsum brauchen sie ebenfalls. Zudem gehen in unseren Gesprächen oft persönliche Daten über den Tisch, etwa wenn es um Mietrückstände geht. Im Großraum ist Vertraulichkeit kaum zu gewährleisten. Die geplanten Telefonkabinen helfen nur bedingt, denn mit vier Kabinen für fünfunddreißig Mitarbeiter wird es zu Stoßzeiten Wartezeiten geben.\nIch selbst habe zwei Jahre in einem Callcenter mit Großraumbüro gearbeitet. Die Kollegen waren freundlich und hilfsbereit, aber an konzentriertes Arbeiten war kaum zu denken. Nach einem Arbeitstag dort war ich deutlich erschöpfter als heute, obwohl ich weniger Fälle bearbeitet habe, und viele Kollegen trugen ständig Kopfhörer, um sich abzuschirmen.\nAlles in allem halte ich ein reines Großraumbüro für unseren Betrieb nicht für geeignet. Sinnvoller fände ich eine Aufteilung in mehrere mittelgroße Räume mit jeweils sechs bis acht Plätzen, die nach Abteilungen geordnet sind. Der Mieterservice sollte einen eigenen, abgetrennten Bereich bekommen. Zusätzlich könnte eine offene Teeküche mit Stehtischen als Treffpunkt dienen, damit der gewünschte Austausch trotzdem stattfindet.",
       "woerter": 350,
       "hilfen": [
        "Ein Großraumbüro bietet zweifellos einige Vorteile.",
        "Darüber hinaus fördert …",
        "Dem steht jedoch ein gewichtiger Nachteil gegenüber, nämlich …",
        "… ist kaum zu gewährleisten.",
        "… helfen nur bedingt, denn …",
        "Sinnvoller fände ich eine Aufteilung in …"
       ],
       "erklaerung": "Der Beitrag bewertet das Großraumbüro konkret für die Arbeit einer Hausverwaltung, ergänzt das Argument Datenschutz, stützt es mit eigener Erfahrung und schlägt eine praktikable Raumaufteilung vor.",
       "rubrik": [
        {
         "t": "Aufgabengerechtheit",
         "h": "Passt der Text zum Auftrag? Vor- und Nachteile, eigener Standpunkt, roter Faden, kritische Auseinandersetzung?"
        },
        {
         "t": "Korrektheit",
         "h": "Grammatik und Rechtschreibung: Stören Fehler das Verstehen? Vergleich mit dem Muster."
        },
        {
         "t": "Repertoire",
         "h": "Wie vielfältig und präzise sind Wortschatz und Satzbau? Nominalstil, Fachwörter, Konnektoren."
        },
        {
         "t": "Kommunikative Gestaltung",
         "h": "Klare Struktur, gut verknüpft, dem Anlass angemessen?"
        }
       ],
       "max": 48,
       "c1h": true,
       "c1allg": true,
       "level": "C1",
       "platzhalter": "Schreib hier deinen Text …",
       "rubrikTitel": "Bewerte dich nach den vier telc-Kriterien",
       "rubrikHinweis": "Vier Kriterien wie bei telc C1 Beruf, je A = 12, B = 8, C = 4, D = 0 Punkte."
      },
      {
       "id": "tc1bt6",
       "situation": "Der Online-Händler Gartenwerk Schmitz in Mönchengladbach verkauft Gartengeräte. Bisher beantworten acht eigene Mitarbeiter alle Kundenanfragen. Die Geschäftsleitung prüft, den Kundenservice an einen externen Dienstleister in Portugal auszulagern. Schreiben Sie für die Abteilungsleiterrunde eine Stellungnahme. Legen Sie Vor- und Nachteile dar und begründen Sie Ihren Standpunkt.",
       "eingang": {
        "von": "Aus der Abteilungsleiterrunde",
        "betreff": "Kundenservice auslagern?",
        "text": "„Der Dienstleister bietet Betreuung rund um die Uhr in vier Sprachen. Das schaffen wir mit acht Leuten nie.\" Bettina Schmitz, Geschäftsführung\n„Unsere Leute kennen jedes Produkt. Wenn ein Kunde fragt, welcher Mähroboter an einen Hang passt, liest der Dienstleister das aus einer Liste vor.\" Ahmet Korkmaz, Leitung Kundenservice"
       },
       "sorte": "aufsatz",
       "an": null,
       "punkte": [
        {
         "nr": 1,
         "was": "Einleitung",
         "hinweis": "Nennen Sie den Anlass Ihrer Stellungnahme."
        },
        {
         "nr": 2,
         "was": "Vorteile einer Auslagerung",
         "hinweis": "Erläutern Sie, was das Unternehmen gewinnen würde."
        },
        {
         "nr": 3,
         "was": "Nachteile und Risiken",
         "hinweis": "Erläutern Sie, was verloren gehen könnte."
        },
        {
         "nr": 4,
         "was": "Empfehlung",
         "hinweis": "Begründen Sie Ihren Standpunkt."
        }
       ],
       "muster": "Die Geschäftsleitung prüft derzeit, ob unser Kundenservice künftig von einem externen Dienstleister in Lissabon übernommen werden soll. Da diese Entscheidung unsere Kunden unmittelbar betrifft, möchte ich in dieser Stellungnahme die Vor- und Nachteile einer Auslagerung abwägen.\nFür die Auslagerung sprechen vor allem drei Gründe. Erstens wären unsere Kunden besser erreichbar. Heute endet unsere Hotline um achtzehn Uhr, doch gerade am Wochenende, wenn die Leute im Garten arbeiten, kommen die meisten Fragen. Der Dienstleister bietet Betreuung rund um die Uhr. Zweitens könnten wir mit Kunden in Frankreich, den Niederlanden und Spanien in deren Sprache kommunizieren, was für unsere geplante Expansion wichtig ist. Drittens ließen sich die Personalkosten besser planen und an die Saison anpassen, weil wir nur für tatsächlich bearbeitete Anfragen bezahlen würden und in der ruhigen Wintersaison weniger Kosten anfielen.\nDiesen Argumenten stehen jedoch gewichtige Nachteile gegenüber. Herr Korkmaz weist zu Recht darauf hin, dass unsere Mitarbeiter die Produkte genau kennen. Viele Kunden rufen nicht wegen einer verspäteten Lieferung an, sondern weil sie eine Beratung brauchen, etwa welcher Rasenmäher für einen steilen Hang geeignet ist. Solche Fragen kann ein externer Mitarbeiter, der gleichzeitig für mehrere Firmen arbeitet, kaum ebenso kompetent beantworten. Zudem verlieren wir den direkten Draht zu unseren Kunden. Heute erfahren wir über den Service sehr schnell, wenn ein Produkt häufig defekt ist, und können beim Hersteller reklamieren. Schließlich würden acht erfahrene Kollegen ihren Arbeitsplatz verlieren, was das Betriebsklima erheblich belasten dürfte.\nIn meinem früheren Unternehmen, einem Elektronikhändler, wurde der Service vor einigen Jahren ausgelagert. Die Zahl der Beschwerden stieg im ersten Jahr deutlich, und nach zwei Jahren holte man einen Teil der Aufgaben wieder ins Haus zurück. Die erhoffte Ersparnis war bis dahin durch Rücksendungen und verärgerte Stammkunden längst aufgezehrt.\nAus diesen Gründen halte ich eine vollständige Auslagerung für den falschen Weg. Ich schlage vor, nur einfache Anfragen wie Lieferstatus und Rücksendungen außerhalb unserer Geschäftszeiten an den Dienstleister zu geben. Die Produktberatung und die Bearbeitung von Reklamationen sollten dagegen bei unserem eigenen Team bleiben, das dafür nach Bedarf um eine Teilzeitkraft für das Wochenende ergänzt werden könnte. So würden wir die Erreichbarkeit verbessern, ohne unsere größte Stärke aufzugeben.",
       "woerter": 350,
       "hilfen": [
        "Für die Auslagerung sprechen vor allem drei Gründe.",
        "Erstens … Zweitens … Drittens …",
        "Diesen Argumenten stehen jedoch gewichtige Nachteile gegenüber.",
        "Zudem verlieren wir …",
        "… dürfte das Betriebsklima erheblich belasten.",
        "Aus diesen Gründen halte ich … für den falschen Weg."
       ],
       "erklaerung": "Die Stellungnahme ordnet die Vorteile mit „erstens, zweitens, drittens\", nennt bei den Nachteilen auch einen weniger offensichtlichen Punkt und schlägt eine Teillösung vor, die beide Positionen verbindet.",
       "rubrik": [
        {
         "t": "Aufgabengerechtheit",
         "h": "Passt der Text zum Auftrag? Vor- und Nachteile, eigener Standpunkt, roter Faden, kritische Auseinandersetzung?"
        },
        {
         "t": "Korrektheit",
         "h": "Grammatik und Rechtschreibung: Stören Fehler das Verstehen? Vergleich mit dem Muster."
        },
        {
         "t": "Repertoire",
         "h": "Wie vielfältig und präzise sind Wortschatz und Satzbau? Nominalstil, Fachwörter, Konnektoren."
        },
        {
         "t": "Kommunikative Gestaltung",
         "h": "Klare Struktur, gut verknüpft, dem Anlass angemessen?"
        }
       ],
       "max": 48,
       "c1h": true,
       "c1allg": true,
       "level": "C1",
       "platzhalter": "Schreib hier deinen Text …",
       "rubrikTitel": "Bewerte dich nach den vier telc-Kriterien",
       "rubrikHinweis": "Vier Kriterien wie bei telc C1 Beruf, je A = 12, B = 8, C = 4, D = 0 Punkte."
      }
     ]
    },
    {
     "id": "tc1bsr4",
     "titel": "Runde 4",
     "aufgaben": [
      {
       "id": "tc1bt7",
       "situation": "Die Gießerei Albrecht in Siegen arbeitet im Dreischichtbetrieb. Die Geschäftsleitung möchte für die Produktion eine Vier-Tage-Woche mit je neun Stunden und vierzig Minuten pro Schicht einführen, um als Arbeitgeber attraktiver zu werden. Die Werkszeitung sammelt Meinungen. Legen Sie Vor- und Nachteile dar und begründen Sie Ihren Standpunkt.",
       "eingang": {
        "von": "Werkszeitung „Albrecht aktuell\"",
        "betreff": "Vier Tage arbeiten, drei Tage frei?",
        "text": "„Seit zwei Jahren finden wir kaum noch Gießereimechaniker. Mit einer Vier-Tage-Woche hätten wir endlich ein Argument.\" Stefanie Krämer, Personalleitung\n„Fast zehn Stunden an der Gießanlage, bei der Hitze? Nach acht Stunden lässt die Konzentration nach, dann passieren Unfälle.\" Wolfgang Peters, Schichtleiter"
       },
       "sorte": "aufsatz",
       "an": null,
       "punkte": [
        {
         "nr": 1,
         "was": "Einleitung",
         "hinweis": "Nennen Sie den Anlass."
        },
        {
         "nr": 2,
         "was": "Vorteile",
         "hinweis": "Was spricht für die Vier-Tage-Woche in der Produktion?"
        },
        {
         "nr": 3,
         "was": "Nachteile",
         "hinweis": "Was spricht dagegen?"
        },
        {
         "nr": 4,
         "was": "Standpunkt",
         "hinweis": "Beziehen Sie begründet Stellung."
        }
       ],
       "muster": "Die Geschäftsleitung schlägt vor, in der Produktion eine Vier-Tage-Woche einzuführen, bei der jede Schicht künftig knapp zehn Stunden dauern soll. In der Werkszeitung wurde dazu um Meinungen gebeten. Als jemand, der seit sechs Jahren an der Formanlage arbeitet, möchte ich die Vor- und Nachteile aus Sicht der Halle darstellen.\nZunächst ist offensichtlich, warum die Personalabteilung diesen Schritt befürwortet. Frau Krämer berichtet, dass offene Stellen für Gießereimechaniker inzwischen monatelang unbesetzt bleiben. Junge Fachkräfte vergleichen heute sehr genau, welche Arbeitszeiten ihnen angeboten werden, und drei freie Tage pro Woche wären ein starkes Argument gegenüber anderen Betrieben in der Region. Auch für die jetzige Belegschaft hätte das Modell Vorteile. Viele von uns pendeln täglich mehr als vierzig Kilometer aus dem Sauerland. Ein Arbeitstag weniger bedeutet eine Fahrt weniger, und das spart Zeit und Benzin.\nSo verlockend das klingt, so wenig darf man die Belastung unterschätzen. Herr Peters spricht ein ernstes Problem an. Bei uns herrschen an der Gießanlage im Sommer Temperaturen von über vierzig Grad, und schon heute merkt man nach sieben, acht Stunden, wie die Aufmerksamkeit nachlässt. Eine noch längere Schicht würde das Unfallrisiko erhöhen. Außerdem ist fraglich, wie die Nachtschicht organisiert werden soll. Fast zehn Stunden nachts zu arbeiten, ist für viele, insbesondere für ältere Kollegen, kaum zumutbar. Hinzu kommt, dass Kollegen mit kleinen Kindern Probleme bekommen dürften, weil die Kita um sechzehn Uhr schließt.\nIch kenne das Modell aus meiner Zeit bei einem Zulieferer in Polen. Anfangs waren alle begeistert von den langen Wochenenden. Nach einem Jahr wurde es aber wieder abgeschafft, weil die Krankmeldungen deutlich gestiegen waren und es in der Spätschicht zwei schwere Arbeitsunfälle gegeben hatte.\nMeine Schlussfolgerung lautet daher: Die Idee ist richtig, aber die Umsetzung muss zu unserer Arbeit passen. Statt längerer Schichten schlage ich vor, die Wochenarbeitszeit für Schichtarbeiter leicht zu senken und dafür einen freien Tag alle zwei Wochen einzuführen. Außerdem sollte das Modell freiwillig sein und zunächst in einer einzigen Abteilung getestet werden, zum Beispiel in der Putzerei, wo die Hitzebelastung geringer ist. Die Ergebnisse sollten nach sechs Monaten mit Betriebsrat und Arbeitssicherheit gemeinsam ausgewertet werden.",
       "woerter": 350,
       "hilfen": [
        "Zunächst ist offensichtlich, warum …",
        "… wäre ein starkes Argument gegenüber …",
        "So verlockend das klingt, so wenig darf man … unterschätzen.",
        "Außerdem ist fraglich, wie …",
        "… ist kaum zumutbar.",
        "Meine Schlussfolgerung lautet daher: …"
       ],
       "erklaerung": "Der Verfasser schreibt aus Sicht der Produktion, nennt konkrete Bedingungen wie Hitze, Pendeln und Nachtschicht und macht einen Gegenvorschlag, der das Ziel der Geschäftsleitung ernst nimmt.",
       "rubrik": [
        {
         "t": "Aufgabengerechtheit",
         "h": "Passt der Text zum Auftrag? Vor- und Nachteile, eigener Standpunkt, roter Faden, kritische Auseinandersetzung?"
        },
        {
         "t": "Korrektheit",
         "h": "Grammatik und Rechtschreibung: Stören Fehler das Verstehen? Vergleich mit dem Muster."
        },
        {
         "t": "Repertoire",
         "h": "Wie vielfältig und präzise sind Wortschatz und Satzbau? Nominalstil, Fachwörter, Konnektoren."
        },
        {
         "t": "Kommunikative Gestaltung",
         "h": "Klare Struktur, gut verknüpft, dem Anlass angemessen?"
        }
       ],
       "max": 48,
       "c1h": true,
       "c1allg": true,
       "level": "C1",
       "platzhalter": "Schreib hier deinen Text …",
       "rubrikTitel": "Bewerte dich nach den vier telc-Kriterien",
       "rubrikHinweis": "Vier Kriterien wie bei telc C1 Beruf, je A = 12, B = 8, C = 4, D = 0 Punkte."
      },
      {
       "id": "tc1bt8",
       "situation": "Die Softwarefirma Nordlicht Systems in Kiel bekommt auf viele Stellen nur wenige Bewerbungen. Die Personalabteilung schlägt vor, künftig auf Anschreiben zu verzichten: Ein Lebenslauf und drei kurze Fragen im Online-Formular sollen reichen. Für das Intranet werden Meinungen gesammelt. Legen Sie Vor- und Nachteile dar und begründen Sie Ihren Standpunkt.",
       "eingang": {
        "von": "Intranet, Rubrik „Personal\"",
        "betreff": "Bewerben ohne Anschreiben",
        "text": "„Die Hälfte der Anschreiben ist ohnehin aus dem Internet kopiert. Ich lese inzwischen nur noch den Lebenslauf.\" Lena Voss, Personalreferentin\n„Im Anschreiben sehe ich, ob jemand sich mit uns beschäftigt hat. Ohne das bekommen wir Massenbewerbungen.\" Carsten Hoffmann, Teamleiter Entwicklung"
       },
       "sorte": "aufsatz",
       "an": null,
       "punkte": [
        {
         "nr": 1,
         "was": "Einleitung",
         "hinweis": "Nennen Sie den Anlass."
        },
        {
         "nr": 2,
         "was": "Vorteile",
         "hinweis": "Was spricht für Bewerbungen ohne Anschreiben?"
        },
        {
         "nr": 3,
         "was": "Nachteile",
         "hinweis": "Was spricht dagegen?"
        },
        {
         "nr": 4,
         "was": "Standpunkt",
         "hinweis": "Begründen Sie Ihre Meinung."
        }
       ],
       "muster": "Auf unsere letzte Ausschreibung für eine Stelle im Backend haben wir in sechs Wochen nur elf Bewerbungen erhalten. Vor diesem Hintergrund schlägt die Personalabteilung vor, künftig auf das Anschreiben zu verzichten. Ich möchte im Folgenden darlegen, was aus meiner Sicht für und gegen diesen Schritt spricht.\nDas stärkste Argument für den Vorschlag ist die niedrigere Hürde. Viele gute Entwickler sind derzeit fest angestellt und suchen nicht aktiv. Wer sich nebenbei umsieht, verzichtet eher auf eine Bewerbung, wenn er dafür einen ganzen Abend an einem Anschreiben feilen muss. Hinzu kommt, was Frau Voss beobachtet hat: Ein großer Teil der Anschreiben besteht aus Standardformulierungen und sagt wenig über die Person aus. Seit Textprogramme solche Briefe in Sekunden erstellen, ist ihre Aussagekraft weiter gesunken. Für unsere Personalabteilung würde der Wegfall außerdem Zeit sparen, die sie besser in persönliche Gespräche investieren könnte. Ein kurzes Telefonat von zehn Minuten verrät mir über einen Bewerber mehr als jedes noch so sorgfältig formulierte Anschreiben.\nAuf der anderen Seite ist die Sorge von Herrn Hoffmann nicht von der Hand zu weisen. Ein gutes Anschreiben zeigt, ob sich jemand mit unserem Unternehmen auseinandergesetzt hat und warum er gerade zu uns möchte. Fällt dieser Schritt weg, könnten wir mit Bewerbungen überflutet werden, die mit einem Klick an zwanzig Firmen gleichzeitig verschickt wurden. Gerade für Bewerber mit ungewöhnlichem Lebenslauf, etwa Quereinsteiger, ist das Anschreiben außerdem eine Chance, Lücken zu erklären und ihre Motivation zu zeigen.\nIch habe selbst über ein Anschreiben meinen ersten Job in Deutschland bekommen, obwohl mein Abschluss aus der Ukraine nicht dem üblichen Profil entsprach. Ohne diese Möglichkeit wäre ich vermutlich schon in der ersten Runde aussortiert worden.\nAlles in allem halte ich den Vorschlag dennoch für richtig, sofern die drei Fragen im Formular gut gewählt sind. Sie sollten konkret sein, zum Beispiel: Welches Projekt aus den letzten zwei Jahren würden Sie uns gern zeigen? Wer möchte, sollte zusätzlich die Möglichkeit haben, freiwillig ein paar Sätze zu seinem Werdegang zu schreiben. Nach einem halben Jahr sollten wir vergleichen, ob sich Zahl und Qualität der Bewerbungen verbessert haben, und notfalls zum bisherigen Verfahren zurückkehren.",
       "woerter": 350,
       "hilfen": [
        "Vor diesem Hintergrund schlägt … vor, …",
        "Das stärkste Argument für den Vorschlag ist …",
        "Auf der anderen Seite ist die Sorge von … nicht von der Hand zu weisen.",
        "Fällt dieser Schritt weg, …",
        "Alles in allem halte ich den Vorschlag dennoch für richtig, sofern …",
        "Nach einem halben Jahr sollten wir vergleichen, ob …"
       ],
       "erklaerung": "Der Text beginnt mit einer konkreten Zahl als Anlass, nutzt einen Konditionalsatz ohne „wenn\" und verbindet die Zustimmung mit Bedingungen, die die Bedenken des Teamleiters aufnehmen.",
       "rubrik": [
        {
         "t": "Aufgabengerechtheit",
         "h": "Passt der Text zum Auftrag? Vor- und Nachteile, eigener Standpunkt, roter Faden, kritische Auseinandersetzung?"
        },
        {
         "t": "Korrektheit",
         "h": "Grammatik und Rechtschreibung: Stören Fehler das Verstehen? Vergleich mit dem Muster."
        },
        {
         "t": "Repertoire",
         "h": "Wie vielfältig und präzise sind Wortschatz und Satzbau? Nominalstil, Fachwörter, Konnektoren."
        },
        {
         "t": "Kommunikative Gestaltung",
         "h": "Klare Struktur, gut verknüpft, dem Anlass angemessen?"
        }
       ],
       "max": 48,
       "c1h": true,
       "c1allg": true,
       "level": "C1",
       "platzhalter": "Schreib hier deinen Text …",
       "rubrikTitel": "Bewerte dich nach den vier telc-Kriterien",
       "rubrikHinweis": "Vier Kriterien wie bei telc C1 Beruf, je A = 12, B = 8, C = 4, D = 0 Punkte."
      }
     ]
    }
   ]
  }
 ],
 "laeufe": [
  {
   "id": "tc1bsl1",
   "titel": "Prüfungslauf 1",
   "minuten": 70,
   "aufgaben": [
    {
     "id": "tc1bt9",
     "situation": "Bei der Steuerberatung Krause und Lindner in Freiburg haben bisher nur Teamleiter einen Firmenwagen. Die Kanzlei möchte das Mobilitätsangebot neu regeln: Alle Mitarbeiter sollen künftig zwischen einem kleinen Firmenwagen und einem geleasten Jobrad mit Zuschuss zum Nahverkehr wählen können. Schreiben Sie für den Newsletter. Legen Sie Vor- und Nachteile dar und begründen Sie Ihren Standpunkt.",
     "eingang": {
      "von": "Newsletter der Kanzlei",
      "betreff": "Firmenwagen oder Jobrad?",
      "text": "„Ich wohne in einem Dorf im Schwarzwald, der letzte Bus fährt um neunzehn Uhr. Ohne Auto komme ich gar nicht in die Kanzlei.\" Melanie Fritsch, Lohnbuchhaltung\n„Bei uns stehen sechs Firmenwagen den ganzen Tag auf dem teuren Parkplatz. Mit dem Rad bin ich in der Innenstadt schneller.\" Jonas Lindner, Steuerberater"
     },
     "sorte": "aufsatz",
     "an": null,
     "punkte": [
      {
       "nr": 1,
       "was": "Einleitung",
       "hinweis": "Nennen Sie den Anlass."
      },
      {
       "nr": 2,
       "was": "Vorteile der Wahlmöglichkeit",
       "hinweis": "Erläutern Sie Vorteile für Mitarbeiter und Kanzlei."
      },
      {
       "nr": 3,
       "was": "Nachteile und Probleme",
       "hinweis": "Erläutern Sie mögliche Schwierigkeiten."
      },
      {
       "nr": 4,
       "was": "Standpunkt",
       "hinweis": "Nehmen Sie begründet Stellung."
      }
     ],
     "muster": "Die Kanzleileitung möchte die Regelung für Dienstfahrzeuge neu fassen und künftig allen Mitarbeitern die Wahl zwischen einem kleinen Firmenwagen und einem Jobrad mit Zuschuss zum Nahverkehr anbieten. Ich begrüße es, dass die Belegschaft dazu gehört wird, und möchte die wichtigsten Gesichtspunkte abwägen.\nDie Wahlmöglichkeit hat aus meiner Sicht klare Vorteile. Zum einen wäre sie gerechter als die bisherige Lösung, bei der nur Teamleiter einen Wagen bekommen, während alle anderen leer ausgehen. Zum anderen berücksichtigt sie, dass unsere Wege zur Arbeit sehr unterschiedlich sind. Frau Fritsch, die in einem Dorf ohne Busverbindung am Abend lebt, ist auf ein Auto angewiesen. Herr Lindner dagegen wohnt in der Wiehre und ist mit dem Rad schneller in der Kanzlei als mit dem Auto. Für die Kanzlei würde das Jobrad zudem die Kosten senken, denn ein Stellplatz in der Innenstadt kostet uns monatlich rund hundertzwanzig Euro. Nicht zuletzt passt ein solches Angebot gut zu unseren Mandanten aus der Solarbranche, die auf Nachhaltigkeit großen Wert legen.\nGleichwohl sehe ich einige praktische Probleme. Wer sich für das Jobrad entscheidet, kann damit keine Akten zu Mandanten nach Emmendingen oder Lörrach bringen. Für solche Termine bräuchten wir deshalb mindestens zwei Poolfahrzeuge, die sich alle teilen. Außerdem sind die steuerlichen Regeln für beide Modelle unterschiedlich, und gerade wir als Steuerberater sollten darauf achten, dass niemand durch seine Wahl unerwartet mehr Steuern zahlt. Schließlich ist offen, was passiert, wenn jemand nach einem Jahr umzieht oder Nachwuchs bekommt und deshalb sein Modell wechseln möchte.\nIch selbst würde mich für das Jobrad entscheiden. In meiner Heimatstadt Krakau bin ich jahrelang mit dem Auto zur Arbeit gefahren und habe täglich im Stau gestanden. Seit ich hier mit dem Rad fahre, komme ich entspannter an und brauche kein Fitnessstudio mehr. Mir ist aber bewusst, dass das bei Regen im November und mit zwei Kindern im Kindersitz anders aussehen kann.\nInsgesamt befürworte ich den Vorschlag. Damit er funktioniert, sollte die Kanzlei zwei Poolwagen für Mandantentermine bereitstellen, jedem vor der Wahl eine kurze Beratung zu den steuerlichen Folgen anbieten und einen Wechsel des Modells alle zwei Jahre ermöglichen.",
     "woerter": 350,
     "hilfen": [
      "Ich begrüße es, dass …",
      "Zum einen … Zum anderen …",
      "… ist auf … angewiesen.",
      "Gleichwohl sehe ich einige praktische Probleme.",
      "Schließlich ist offen, was passiert, wenn …",
      "Damit er funktioniert, sollte …"
     ],
     "erklaerung": "Der Beitrag zeigt beide Lebenslagen aus den Zitaten, ergänzt Probleme, an die in der Kanzlei niemand gedacht hat, und stimmt dem Vorschlag mit drei konkreten Bedingungen zu.",
     "rubrik": [
      {
       "t": "Aufgabengerechtheit",
       "h": "Passt der Text zum Auftrag? Vor- und Nachteile, eigener Standpunkt, roter Faden, kritische Auseinandersetzung?"
      },
      {
       "t": "Korrektheit",
       "h": "Grammatik und Rechtschreibung: Stören Fehler das Verstehen? Vergleich mit dem Muster."
      },
      {
       "t": "Repertoire",
       "h": "Wie vielfältig und präzise sind Wortschatz und Satzbau? Nominalstil, Fachwörter, Konnektoren."
      },
      {
       "t": "Kommunikative Gestaltung",
       "h": "Klare Struktur, gut verknüpft, dem Anlass angemessen?"
      }
     ],
     "max": 48,
     "c1h": true,
     "c1allg": true,
     "level": "C1",
     "platzhalter": "Schreib hier deinen Text …",
     "rubrikTitel": "Bewerte dich nach den vier telc-Kriterien",
     "rubrikHinweis": "Vier Kriterien wie bei telc C1 Beruf, je A = 12, B = 8, C = 4, D = 0 Punkte."
    }
   ]
  },
  {
   "id": "tc1bsl2",
   "titel": "Prüfungslauf 2",
   "minuten": 70,
   "aufgaben": [
    {
     "id": "tc1bt10",
     "situation": "Das Klinikum Am Rosengarten in Kassel hat Mühe, Pflegekräfte zu halten. Die Klinikleitung überlegt, auf dem Gelände eine Betriebskita mit Öffnungszeiten von fünf Uhr dreißig bis zweiundzwanzig Uhr zu bauen. Die Kosten sind hoch. Für die Mitarbeiterzeitschrift werden Stellungnahmen gesucht. Legen Sie Vor- und Nachteile dar und begründen Sie Ihren Standpunkt.",
     "eingang": {
      "von": "Mitarbeiterzeitschrift „Rosengarten intern\"",
      "betreff": "Eine eigene Kita für das Klinikum?",
      "text": "„Meine Frühschicht beginnt um sechs. Keine städtische Kita öffnet so früh. Ohne meine Mutter könnte ich nicht arbeiten.\" Nadine Schulte, Pflegefachkraft Station B4\n„Zwei Millionen Euro für eine Kita? Dafür könnten wir zwölf zusätzliche Pflegekräfte einstellen, und die fehlen uns jetzt.\" Dr. Uwe Kessler, Kaufmännischer Direktor"
     },
     "sorte": "aufsatz",
     "an": null,
     "punkte": [
      {
       "nr": 1,
       "was": "Einleitung",
       "hinweis": "Nennen Sie den Anlass."
      },
      {
       "nr": 2,
       "was": "Vorteile einer Betriebskita",
       "hinweis": "Erläutern Sie, wem sie nützen würde."
      },
      {
       "nr": 3,
       "was": "Nachteile und Kosten",
       "hinweis": "Erläutern Sie die Gegenargumente."
      },
      {
       "nr": 4,
       "was": "Standpunkt",
       "hinweis": "Begründen Sie Ihre Meinung."
      }
     ],
     "muster": "Die Klinikleitung denkt darüber nach, auf unserem Gelände eine eigene Kita einzurichten, deren Öffnungszeiten sich nach unseren Schichten richten. Da es dabei um viel Geld geht, wird das Vorhaben im Haus kontrovers diskutiert. Ich möchte die Argumente beider Seiten darlegen und anschließend begründen, warum ich das Projekt unterstütze.\nFür eine Betriebskita spricht in erster Linie, dass sie ein Problem löst, das städtische Einrichtungen nicht lösen können. Wie Frau Schulte von der Station B4 schreibt, beginnt die Frühschicht um sechs Uhr, die Spätschicht endet nach einundzwanzig Uhr. Keine öffentliche Kita in Kassel ist zu diesen Zeiten geöffnet. Viele Kolleginnen arbeiten deshalb nur in Teilzeit oder verlassen nach der Elternzeit den Beruf ganz. Eine Kita direkt am Klinikum würde ihnen ermöglichen, wieder mehr Stunden zu arbeiten. Darüber hinaus wäre sie ein starkes Argument bei der Suche nach neuen Fachkräften, um die alle Kliniken der Region konkurrieren.\nDie Einwände von Herrn Dr. Kessler sind allerdings ernst zu nehmen. Zwei Millionen Euro sind für ein Haus, das ohnehin knapp kalkulieren muss, eine erhebliche Summe. Hinzu kommen jedes Jahr die laufenden Kosten für Erzieher, deren Arbeitszeiten ebenfalls ungewöhnlich wären. Es ist auch keineswegs sicher, dass die Kita voll ausgelastet sein würde, denn manche Eltern bevorzugen eine Einrichtung in der Nähe ihrer Wohnung. Schließlich profitieren nur Beschäftigte mit kleinen Kindern, während andere Gruppen leer ausgehen. Kollegen, die ihre Eltern pflegen, haben ähnliche Schwierigkeiten mit den Schichtzeiten und bekämen keinerlei Unterstützung.\nTrotz dieser Bedenken überwiegen für mich die Vorteile. Zwölf neue Stellen nützen wenig, wenn wir sie nicht besetzen können, und genau das ist seit Jahren unser Problem. Wenn hingegen zwanzig Kolleginnen ihre Teilzeit um zehn Stunden aufstocken, entspricht das rechnerisch fünf zusätzlichen Vollzeitstellen, und zwar mit erfahrenen Kräften, die das Haus bereits kennen.\nIch schlage vor, zunächst eine Umfrage unter allen Beschäftigten durchzuführen, um den tatsächlichen Bedarf zu ermitteln. Ergibt sich daraus ein ausreichendes Interesse, sollte das Klinikum prüfen, ob es die Kita gemeinsam mit dem benachbarten Seniorenheim betreiben kann. Auf diese Weise ließen sich die Kosten teilen, ohne auf das Angebot zu verzichten. Eine solche Kooperation würde zugleich zeigen, dass das Klinikum seine Verantwortung für die Beschäftigten ernst nimmt.",
     "woerter": 350,
     "hilfen": [
      "Für … spricht in erster Linie, dass …",
      "Darüber hinaus wäre sie ein starkes Argument bei …",
      "Die Einwände von … sind allerdings ernst zu nehmen.",
      "Es ist auch keineswegs sicher, dass …",
      "Trotz dieser Bedenken überwiegen für mich die Vorteile.",
      "Ergibt sich daraus …, sollte …"
     ],
     "erklaerung": "Der Text entkräftet das Kostenargument mit einer eigenen Rechnung, statt es nur abzulehnen, und schlägt einen Weg vor, der den Bedarf zuerst prüft und die Kosten teilt.",
     "rubrik": [
      {
       "t": "Aufgabengerechtheit",
       "h": "Passt der Text zum Auftrag? Vor- und Nachteile, eigener Standpunkt, roter Faden, kritische Auseinandersetzung?"
      },
      {
       "t": "Korrektheit",
       "h": "Grammatik und Rechtschreibung: Stören Fehler das Verstehen? Vergleich mit dem Muster."
      },
      {
       "t": "Repertoire",
       "h": "Wie vielfältig und präzise sind Wortschatz und Satzbau? Nominalstil, Fachwörter, Konnektoren."
      },
      {
       "t": "Kommunikative Gestaltung",
       "h": "Klare Struktur, gut verknüpft, dem Anlass angemessen?"
      }
     ],
     "max": 48,
     "c1h": true,
     "c1allg": true,
     "level": "C1",
     "platzhalter": "Schreib hier deinen Text …",
     "rubrikTitel": "Bewerte dich nach den vier telc-Kriterien",
     "rubrikHinweis": "Vier Kriterien wie bei telc C1 Beruf, je A = 12, B = 8, C = 4, D = 0 Punkte."
    }
   ]
  }
 ]
};
