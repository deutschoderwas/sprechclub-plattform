/* ============================================================
   deutschoderwas club — HÖREN A1 (Start Deutsch 1)

   Aufbau nach der offiziellen Testbeschreibung des Goethe-
   Instituts: drei Teile, 15 Aufgaben, je ein Punkt, circa
   20 Minuten, ein Viertel der Gesamtprüfung.

     Teil 1  sechs kurze Gespräche, Auswahl a/b/c   — zweimal
     Teil 2  vier Lautsprecherdurchsagen, richtig/falsch — EINMAL
     Teil 3  fünf Anrufbeantworter-Ansagen, a/b/c    — zweimal

   Das Feld mal sagt, wie oft man einen Text hören darf. Bei
   den Durchsagen ist es bewusst nur einmal — sonst übt man
   etwas anderes als die Prüfung.

   Der Weg hat vier Stufen, wie ein Lehrbuch aufgebaut:
   erst Zahlen und Zeiten, dann die Signalwörter, dann die
   Aufgabentypen, zuletzt die ganze Prüfung mit Uhr.

   WICHTIG für die Sprachausgabe: In allen gesprochenen Texten
   sind Zahlen AUSGESCHRIEBEN (zweihundertfünfundvierzig, halb
   vier). Ziffern würde die Stimme falsch vorlesen.

   wer ist Frau oder Mann und steuert die Stimme — bei den
   Gesprächen kommen immer beide vor, damit man zwei Sprecher
   unterscheiden kann.

   stelle ist die wörtliche Stelle im Hörtext, die die Antwort
   beweist. Sie wird nach dem Antworten im eingeblendeten Text
   gelb markiert — beim Hören sieht man den Text NICHT.
   ============================================================ */
window.HOEREN_A1 = {
 "niveau": "A1",
 "pruefung": "Start Deutsch 1",
 "minuten": 20,
 "punkte": 15,
 "stufen": [
  {
   "nr": 1,
   "titel": "Zahlen und Zeiten heraushören",
   "zeichen": "🔢",
   "was": "Die häufigste Falle im Hören ist keine Vokabel, sondern eine Zahl. 245 oder 254, halb sieben oder sieben Uhr dreißig — das entscheidet über den Punkt."
  },
  {
   "nr": 2,
   "titel": "Das Wort, das alles ändert",
   "zeichen": "🔍",
   "was": "nicht, leider, erst, statt, fällt aus. Der Text nennt oft zuerst den alten Plan und dann die Änderung. Wer nur den Anfang hört, kreuzt falsch an."
  },
  {
   "nr": 3,
   "titel": "Die drei Aufgabentypen",
   "zeichen": "🎧",
   "was": "Jetzt echte Prüfungsaufgaben, einzeln und in Ruhe. Gespräche und Anrufbeantworter hörst du zweimal, Durchsagen nur einmal — genau wie in der Prüfung."
  },
  {
   "nr": 4,
   "titel": "Die ganze Prüfung",
   "zeichen": "⏱️",
   "was": "15 Aufgaben, 20 Minuten, keine Rückmeldung zwischendurch. So wie am Prüfungstag."
  }
 ],
 "bloecke": [
  {
   "id": "h1b1",
   "stufe": 1,
   "titel": "Zahlen heraushören",
   "kurz": "Nummern, Gleise, Linien",
   "ziel": "Nach diesem Block verwechselst du 245 und 254 nicht mehr.",
   "zeichen": "🔢",
   "farbe": "turq",
   "aufgaben": [
    {
     "art": "hoerwahl",
     "wer": "Frau",
     "text": "Herr Schneider wohnt im Hotel Adler, Zimmer zweihundertfünfundvierzig.",
     "frage": "Welche Zimmernummer hat Herr Schneider?",
     "opt": [
      "Zimmer 245",
      "Zimmer 254",
      "Zimmer 2"
     ],
     "loesung": 0,
     "stelle": "Zimmer zweihundertfünfundvierzig",
     "erklaerung": "Zweihundertfünfundvierzig heißt 245. Bei 254 würdest du zweihundertvierundfünfzig hören — die Reihenfolge der beiden letzten Zahlen ist der Unterschied."
    },
    {
     "art": "hoerwahl",
     "wer": "Mann",
     "text": "Achtung am Bahnsteig. Der Zug nach Hamburg fährt heute von Gleis dreißig ab.",
     "frage": "Von welchem Gleis fährt der Zug nach Hamburg?",
     "opt": [
      "Gleis 13",
      "Gleis 30",
      "Gleis 3"
     ],
     "loesung": 1,
     "stelle": "von Gleis dreißig",
     "erklaerung": "Achte auf das Wortende: dreißig endet auf -ßig und ist 30, dreizehn endet auf -zehn und wäre 13. Diese beiden verwechselst du in der Prüfung am schnellsten."
    },
    {
     "art": "hoerwahl",
     "wer": "Frau",
     "text": "Zum Krankenhaus fährst du am besten mit der Linie sechsundsiebzig.",
     "frage": "Welche Buslinie fährt zum Krankenhaus?",
     "opt": [
      "Linie 66",
      "Linie 6",
      "Linie 76"
     ],
     "loesung": 2,
     "stelle": "mit der Linie sechsundsiebzig",
     "erklaerung": "Sechsundsiebzig ist 76: zuerst die Sechs, dann der Zehner siebzig. Sechsundsechzig (66) klingt am Anfang fast gleich — den Unterschied hörst du erst im zweiten Teil des Wortes."
    },
    {
     "art": "hoerwahl",
     "wer": "Mann",
     "text": "Die Praxis von Doktor Aydin ist in der Bergstraße siebzehn, gleich neben der Post.",
     "frage": "Welche Hausnummer hat die Praxis?",
     "opt": [
      "Nummer 70",
      "Nummer 17",
      "Nummer 7"
     ],
     "loesung": 1,
     "stelle": "in der Bergstraße siebzehn",
     "erklaerung": "Siebzehn endet auf -zehn und ist 17. Siebzig endet auf -zig und wäre 70 — an diesem kurzen Wortende hörst du den Unterschied."
    },
    {
     "art": "hoerwahl",
     "wer": "Frau",
     "text": "Die Apotheke am Markt hat die Nummer neun acht sieben, sechs fünf vier.",
     "frage": "Wie ist die Telefonnummer der Apotheke?",
     "opt": [
      "987 654",
      "897 654",
      "987 645"
     ],
     "loesung": 0,
     "stelle": "neun acht sieben, sechs fünf vier",
     "erklaerung": "Telefonnummern hörst du Ziffer für Ziffer — schreib beim Hören sofort mit. Hier kommt zuerst neun, dann acht, dann sieben, also 987 und nicht 897."
    },
    {
     "art": "hoerwahl",
     "wer": "Mann",
     "text": "Wir wohnen jetzt in Bremen. Die Postleitzahl ist zwei acht zwei sieben fünf.",
     "frage": "Wie ist die neue Postleitzahl?",
     "opt": [
      "28725",
      "28257",
      "28275"
     ],
     "loesung": 2,
     "stelle": "zwei acht zwei sieben fünf",
     "erklaerung": "Postleitzahlen spricht man einzeln. Am Ende hörst du sieben fünf, also 75 — bei 28257 wären die letzten beiden Ziffern vertauscht."
    },
    {
     "art": "hoerwahl",
     "wer": "Frau",
     "text": "Die Nummer hundertdreiundvierzig, bitte zum Schalter kommen.",
     "frage": "Welche Wartenummer wird im Amt aufgerufen?",
     "opt": [
      "143",
      "134",
      "13"
     ],
     "loesung": 0,
     "stelle": "Die Nummer hundertdreiundvierzig",
     "erklaerung": "Hundertdreiundvierzig ist 143: erst die Drei, dann der Zehner vierzig. Bei 134 hörst du hundertvierunddreißig — achte darauf, welche Zahl vor dem und steht."
    },
    {
     "art": "hoerwahl",
     "wer": "Mann",
     "text": "Ihr Schließfach im Schwimmbad ist die Nummer neunundvierzig, hinten links.",
     "frage": "Welche Nummer hat das Schließfach?",
     "opt": [
      "94",
      "49",
      "9"
     ],
     "loesung": 1,
     "stelle": "die Nummer neunundvierzig",
     "erklaerung": "Im Deutschen hörst du die Einerzahl zuerst: neunundvierzig ist 49, nicht 94. Wer nur das erste Wort hört, kreuzt schnell falsch an."
    },
    {
     "art": "hoerwahl",
     "wer": "Frau",
     "text": "Der Deutschkurs ist heute in Raum hundertsechs, im ersten Stock.",
     "frage": "In welchem Raum ist der Deutschkurs?",
     "opt": [
      "Raum 160",
      "Raum 16",
      "Raum 106"
     ],
     "loesung": 2,
     "stelle": "in Raum hundertsechs",
     "erklaerung": "Hundertsechs ist 106 — nach hundert kommt direkt die sechs. Hundertsechzig (160) hätte am Ende ein -zig, das hörst du deutlich."
    },
    {
     "art": "hoerwahl",
     "wer": "Mann",
     "text": "Ihre Kundennummer bei uns in der Werkstatt ist achthundertfünfzehn. Bitte notieren Sie sich das.",
     "frage": "Wie ist die Kundennummer in der Werkstatt?",
     "opt": [
      "815",
      "851",
      "85"
     ],
     "loesung": 0,
     "stelle": "achthundertfünfzehn",
     "erklaerung": "Fünfzehn endet auf -zehn und steht für 15, also 815. Achthunderteinundfünfzig (851) klingt am Ende ganz anders — hör deshalb bis zum Schluss, bevor du ankreuzt."
    },
    {
     "art": "hoerwahl",
     "wer": "Frau",
     "text": "Familie Yilmaz wohnt in Wohnung vierundzwanzig, im zweiten Stock.",
     "frage": "In welcher Wohnung wohnt Familie Yilmaz?",
     "opt": [
      "Wohnung 42",
      "Wohnung 4",
      "Wohnung 24"
     ],
     "loesung": 2,
     "stelle": "in Wohnung vierundzwanzig",
     "erklaerung": "Vierundzwanzig ist 24: Die Vier hörst du zuerst, sie steht aber hinten. Zweiundvierzig (42) wäre genau umgekehrt."
    },
    {
     "art": "hoerwahl",
     "wer": "Mann",
     "text": "Die Kita ist in der Lindenstraße fünfundneunzig, direkt am Park.",
     "frage": "Welche Hausnummer hat die Kita?",
     "opt": [
      "Nummer 59",
      "Nummer 95",
      "Nummer 9"
     ],
     "loesung": 1,
     "stelle": "in der Lindenstraße fünfundneunzig",
     "erklaerung": "Fünfundneunzig ist 95, denn neunzig ist der Zehner. Neunundfünfzig (59) hat dieselben Wortteile in anderer Reihenfolge — die Zahl erkennst du am Wort nach dem und."
    },
    {
     "art": "hoerwahl",
     "wer": "Frau",
     "text": "Meine Nummer auf dem Bibliotheksausweis ist dreihundertsiebzehn.",
     "frage": "Welche Nummer steht auf dem Bibliotheksausweis?",
     "opt": [
      "317",
      "371",
      "37"
     ],
     "loesung": 0,
     "stelle": "dreihundertsiebzehn",
     "erklaerung": "Siebzehn mit -zehn am Ende ist 17, also 317. Dreihunderteinundsiebzig (371) wäre länger — die Endung verrät dir die Zahl."
    },
    {
     "art": "hoerwahl",
     "wer": "Mann",
     "text": "Fahren Sie mit der Straßenbahn Linie achtzehn bis zum Marktplatz.",
     "frage": "Mit welcher Straßenbahnlinie soll man fahren?",
     "opt": [
      "Linie 80",
      "Linie 18",
      "Linie 8"
     ],
     "loesung": 1,
     "stelle": "Linie achtzehn",
     "erklaerung": "Achtzehn endet auf -zehn und ist 18, achtzig endet auf -zig und wäre 80. Bei Linien und Gleisen ist das die Falle, in die du am häufigsten tappst."
    }
   ]
  },
  {
   "id": "h1b2",
   "stufe": 1,
   "titel": "Uhrzeiten und Tage",
   "kurz": "Wann genau ist es?",
   "ziel": "Nach diesem Block hörst du den Unterschied zwischen halb sieben und sieben Uhr dreißig.",
   "zeichen": "🕐",
   "farbe": "gelb",
   "aufgaben": [
    {
     "art": "hoerwahl",
     "wer": "Frau",
     "text": "Der Zug nach Köln fährt heute um vierzehn Uhr vierzig ab.",
     "frage": "Wann fährt der Zug nach Köln?",
     "opt": [
      "Um 14.40 Uhr",
      "Um 14.45 Uhr",
      "Um 4.40 Uhr"
     ],
     "loesung": 0,
     "stelle": "um vierzehn Uhr vierzig",
     "erklaerung": "Vierzehn Uhr vierzig ist 14.40, also zwanzig vor drei. Viertel vor drei wäre 14.45 — diese fünf Minuten kosten dich in der Prüfung schnell einen Punkt."
    },
    {
     "art": "hoerwahl",
     "wer": "Mann",
     "text": "Wir gehen heute Abend ins Kino. Der Film beginnt um halb sieben.",
     "frage": "Wann beginnt der Film?",
     "opt": [
      "Um 19.00 Uhr",
      "Um 19.30 Uhr",
      "Um 18.30 Uhr"
     ],
     "loesung": 2,
     "stelle": "um halb sieben",
     "erklaerung": "Halb sieben heißt 18.30, also eine halbe Stunde vor sieben. Sieben Uhr dreißig (19.30) ist eine ganze Stunde später — bei halb musst du immer zurückdenken."
    },
    {
     "art": "hoerwahl",
     "wer": "Frau",
     "text": "Ihr Termin bei Doktor Weber ist am Donnerstag um neun Uhr.",
     "frage": "An welchem Tag ist der Termin bei Doktor Weber?",
     "opt": [
      "Am Dienstag",
      "Am Donnerstag",
      "Am Mittwoch"
     ],
     "loesung": 1,
     "stelle": "am Donnerstag um neun Uhr",
     "erklaerung": "Dienstag und Donnerstag klingen am Anfang fast gleich. Achte auf die erste Silbe: Diens- oder Donners- — mehr Unterschied hast du nicht."
    },
    {
     "art": "hoerwahl",
     "wer": "Mann",
     "text": "Das Bürgeramt hat am Freitag nur vormittags geöffnet, von acht bis zwölf.",
     "frage": "Wann hat das Bürgeramt am Freitag geöffnet?",
     "opt": [
      "Nur nachmittags",
      "Den ganzen Tag",
      "Nur vormittags"
     ],
     "loesung": 2,
     "stelle": "nur vormittags geöffnet",
     "erklaerung": "Vormittags und nachmittags unterscheiden sich nur am Wortanfang: vor- ist vor zwölf, nach- ist nach zwölf. Die Zeit von acht bis zwölf bestätigt dir die Antwort."
    },
    {
     "art": "hoerwahl",
     "wer": "Frau",
     "text": "Meine Tochter hat am elften August Geburtstag. Wir feiern am Samstag.",
     "frage": "Wann hat die Tochter Geburtstag?",
     "opt": [
      "Am 11. August",
      "Am 1. August",
      "Am 3. August"
     ],
     "loesung": 0,
     "stelle": "am elften August",
     "erklaerung": "Am elften ist der 11., am ersten wäre der 1. Beide Wörter sind kurz und klingen ähnlich — hör auf das el- am Anfang, dann liegst du richtig."
    },
    {
     "art": "hoerwahl",
     "wer": "Mann",
     "text": "Mein Bus zur Arbeit fährt schon um Viertel vor acht.",
     "frage": "Wann fährt der Bus zur Arbeit?",
     "opt": [
      "Um 8.15 Uhr",
      "Um 7.45 Uhr",
      "Um 8.45 Uhr"
     ],
     "loesung": 1,
     "stelle": "um Viertel vor acht",
     "erklaerung": "Viertel vor acht ist 7.45, also fünfzehn Minuten vor acht. Viertel nach acht wäre 8.15 — für dich entscheidet nur das kleine Wort vor oder nach."
    },
    {
     "art": "hoerwahl",
     "wer": "Frau",
     "text": "Das Schwimmbad öffnet morgens schon um sieben Uhr dreißig.",
     "frage": "Wann öffnet das Schwimmbad?",
     "opt": [
      "Um 7.13 Uhr",
      "Um 6.30 Uhr",
      "Um 7.30 Uhr"
     ],
     "loesung": 2,
     "stelle": "um sieben Uhr dreißig",
     "erklaerung": "Sieben Uhr dreißig ist 7.30, also halb acht. Halb sieben wäre 6.30 — und dreißig ist nicht dreizehn: an der Endung erkennst du die Zahl."
    },
    {
     "art": "hoerwahl",
     "wer": "Mann",
     "text": "Der Elternabend in der Schule ist am Mittwoch um neunzehn Uhr.",
     "frage": "Wann ist der Elternabend in der Schule?",
     "opt": [
      "Am Montag",
      "Am Mittwoch",
      "Am Freitag"
     ],
     "loesung": 1,
     "stelle": "am Mittwoch um neunzehn Uhr",
     "erklaerung": "Montag und Mittwoch beginnen beide mit M. Den Unterschied hörst du in der Mitte: Mitt-woch klingt kurz und hart, Mon-tag hat ein n."
    },
    {
     "art": "hoerwahl",
     "wer": "Frau",
     "text": "Ihr Auto ist um Viertel nach vier fertig. Sie können es dann abholen.",
     "frage": "Wann ist das Auto fertig?",
     "opt": [
      "Um 16.15 Uhr",
      "Um 16.45 Uhr",
      "Um 4.30 Uhr"
     ],
     "loesung": 0,
     "stelle": "um Viertel nach vier",
     "erklaerung": "Viertel nach vier ist 16.15 am Nachmittag. Viertel vor vier wäre 15.45 — du musst nur heraushören, ob nach oder vor gesagt wird."
    },
    {
     "art": "hoerwahl",
     "wer": "Mann",
     "text": "Die Bibliothek hat am Samstag von zehn bis dreizehn Uhr offen.",
     "frage": "Bis wann hat die Bibliothek am Samstag offen?",
     "opt": [
      "Bis 3 Uhr",
      "Bis 10 Uhr",
      "Bis 13 Uhr"
     ],
     "loesung": 2,
     "stelle": "von zehn bis dreizehn Uhr",
     "erklaerung": "Dreizehn Uhr ist 13 Uhr, also ein Uhr mittags. Verwechsle dreizehn nicht mit drei — die Endung -zehn zeigt dir die größere Zahl."
    },
    {
     "art": "hoerwahl",
     "wer": "Frau",
     "text": "Bring die Kinder bitte bis zwanzig nach acht in die Kita.",
     "frage": "Bis wann sollen die Kinder in der Kita sein?",
     "opt": [
      "Um 8.20 Uhr",
      "Um 7.40 Uhr",
      "Um 8.40 Uhr"
     ],
     "loesung": 0,
     "stelle": "bis zwanzig nach acht",
     "erklaerung": "Zwanzig nach acht ist 8.20. Zwanzig vor acht wäre 7.40 — bei nach zählst du die Minuten dazu, bei vor ziehst du sie ab."
    },
    {
     "art": "hoerwahl",
     "wer": "Mann",
     "text": "Ihre Waschmaschine kommt am dreizehnten Mai zwischen zehn und zwölf.",
     "frage": "Wann kommt die Waschmaschine?",
     "opt": [
      "Am 3. Mai",
      "Am 13. Mai",
      "Am 30. Mai"
     ],
     "loesung": 1,
     "stelle": "am dreizehnten Mai",
     "erklaerung": "Am dreizehnten ist der 13., am dritten wäre der 3. und am dreißigsten der 30. Die Endung -zehnten macht den Unterschied — hör dir das Wort bis zum Ende an."
    },
    {
     "art": "hoerwahl",
     "wer": "Frau",
     "text": "Ihr nächster Termin in der Physiotherapie ist am Dienstag um zehn nach neun.",
     "frage": "Wann ist der nächste Termin in der Physiotherapie?",
     "opt": [
      "Am Donnerstag um 9.10 Uhr",
      "Am Dienstag um 9.50 Uhr",
      "Am Dienstag um 9.10 Uhr"
     ],
     "loesung": 2,
     "stelle": "am Dienstag um zehn nach neun",
     "erklaerung": "Zehn nach neun ist 9.10, zehn vor zehn wäre 9.50. Hier musst du auf zwei Dinge gleichzeitig hören: den Tag und die Minuten."
    },
    {
     "art": "hoerwahl",
     "wer": "Mann",
     "text": "Ich habe am zweiten Juni einen Termin beim Frisör, morgens um elf.",
     "frage": "Wann hat der Mann einen Termin beim Frisör?",
     "opt": [
      "Am 2. Juni",
      "Am 12. Juni",
      "Am 2. Juli"
     ],
     "loesung": 0,
     "stelle": "am zweiten Juni",
     "erklaerung": "Am zweiten ist der 2., am zwölften wäre der 12. Und Juni und Juli klingen fast gleich — Juni erkennst du an der Endung -ni."
    }
   ]
  },
  {
   "id": "h2b1",
   "stufe": 2,
   "titel": "Das Wort, das alles ändert",
   "kurz": "nicht, kein, leider, statt",
   "ziel": "Nach diesem Block überhörst du kein nicht und kein leider mehr.",
   "zeichen": "❗",
   "farbe": "rot",
   "aufgaben": [
    {
     "art": "hoerwahl",
     "wer": "Frau",
     "text": "Eine wichtige Information für alle: Die Prüfung ist nicht am Montag, sondern am Mittwoch.",
     "frage": "Wann ist die Prüfung?",
     "opt": [
      "Am Montag",
      "Am Mittwoch",
      "Am Dienstag"
     ],
     "loesung": 1,
     "stelle": "nicht am Montag, sondern am Mittwoch",
     "erklaerung": "Das kleine Wort nicht kippt die ganze Aussage. Warte immer auf das sondern — erst danach bekommst du die richtige Information."
    },
    {
     "art": "hoerwahl",
     "wer": "Mann",
     "text": "Guten Tag. Brötchen haben wir heute leider keine mehr. Brot und Kuchen sind aber noch da.",
     "frage": "Was gibt es in der Bäckerei heute nicht mehr?",
     "opt": [
      "Brot",
      "Kuchen",
      "Brötchen"
     ],
     "loesung": 2,
     "stelle": "Brötchen haben wir heute leider keine mehr",
     "erklaerung": "Das Wort keine steht hier weit hinten im Satz — bis dahin klingt für dich alles positiv. Was danach genannt wird, gibt es noch."
    },
    {
     "art": "hoerwahl",
     "wer": "Frau",
     "text": "Ich komme leider nicht mit ins Schwimmbad. Ich muss heute arbeiten.",
     "frage": "Was macht die Frau heute?",
     "opt": [
      "Sie geht ins Schwimmbad",
      "Sie arbeitet",
      "Sie geht zum Arzt"
     ],
     "loesung": 1,
     "stelle": "Ich komme leider nicht mit",
     "erklaerung": "Leider ist dein Warnwort: Danach kommt fast immer eine Absage. Das Schwimmbad wird zwar genannt, aber sie geht nicht hin."
    },
    {
     "art": "hoerwahl",
     "wer": "Mann",
     "text": "Wir fahren am Wochenende statt nach Hamburg nach Bremen. Die Fahrt ist kürzer.",
     "frage": "Wohin fahren sie am Wochenende?",
     "opt": [
      "Nach Bremen",
      "Nach Hamburg",
      "Nach Berlin"
     ],
     "loesung": 0,
     "stelle": "statt nach Hamburg nach Bremen",
     "erklaerung": "Direkt nach statt steht das, was nicht passiert. Das echte Ziel kommt danach — du musst also weiterhören, bis Bremen fällt."
    },
    {
     "art": "hoerwahl",
     "wer": "Frau",
     "text": "Der Supermarkt macht heute erst um neun Uhr auf, nicht schon um acht.",
     "frage": "Wann öffnet der Supermarkt heute?",
     "opt": [
      "Um 8 Uhr",
      "Um 10 Uhr",
      "Um 9 Uhr"
     ],
     "loesung": 2,
     "stelle": "erst um neun Uhr auf",
     "erklaerung": "Erst heißt: später als normal. Die Zeit direkt nach erst ist die richtige, die zweite Uhrzeit soll dich nur verwirren."
    },
    {
     "art": "hoerwahl",
     "wer": "Mann",
     "text": "Eigentlich wollte ich kein Auto kaufen. Jetzt habe ich doch eins gekauft.",
     "frage": "Hat der Mann ein Auto gekauft?",
     "opt": [
      "Ja, er hat ein Auto gekauft",
      "Nein, er hat keins gekauft",
      "Er kauft im Sommer eins"
     ],
     "loesung": 0,
     "stelle": "habe ich doch eins gekauft",
     "erklaerung": "Doch dreht die erste Aussage um. Der Plan war anders, am Ende hat er das Auto trotzdem gekauft — die Antwort steckt für dich im zweiten Satz."
    },
    {
     "art": "hoerwahl",
     "wer": "Frau",
     "text": "Unsere Praxis ist jeden Tag geöffnet, außer am Mittwoch.",
     "frage": "Wann ist die Praxis geöffnet?",
     "opt": [
      "Jeden Tag, auch am Mittwoch",
      "Jeden Tag, aber nicht am Mittwoch",
      "Nur am Mittwoch"
     ],
     "loesung": 1,
     "stelle": "außer am Mittwoch",
     "erklaerung": "Außer nimmt einen Tag wieder heraus. Wenn du nach jeden Tag geöffnet aufhörst zuzuhören, kreuzt du falsch an."
    },
    {
     "art": "hoerwahl",
     "wer": "Mann",
     "text": "Der Bus hält hier heute nicht. Er hält erst an der nächsten Haltestelle.",
     "frage": "Wo hält der Bus heute?",
     "opt": [
      "Hier an dieser Haltestelle",
      "Am Bahnhof",
      "An der nächsten Haltestelle"
     ],
     "loesung": 2,
     "stelle": "hält hier heute nicht",
     "erklaerung": "Das nicht steht ganz am Satzende — bis dahin klingt alles normal. Hör jeden Satz zu Ende, sonst steigst du falsch aus."
    },
    {
     "art": "hoerwahl",
     "wer": "Frau",
     "text": "Ich habe kein Kleingeld dabei. Kannst du bitte für mich bezahlen?",
     "frage": "Warum kann die Frau nicht bezahlen?",
     "opt": [
      "Sie hat kein Kleingeld dabei",
      "Sie hat ihre Karte vergessen",
      "Sie hat keine Zeit"
     ],
     "loesung": 0,
     "stelle": "kein Kleingeld dabei",
     "erklaerung": "Kein steht direkt vor dem Nomen und streicht es komplett. Du hörst zwar das Wort Kleingeld, aber sie hat keins."
    },
    {
     "art": "hoerwahl",
     "wer": "Mann",
     "text": "Das Medikament haben wir gerade leider nicht da. Ich bestelle es für morgen.",
     "frage": "Was sagt der Mann in der Apotheke?",
     "opt": [
      "Er gibt das Medikament sofort mit",
      "Er hat es nicht da und bestellt es",
      "Es gibt das Medikament nicht mehr"
     ],
     "loesung": 1,
     "stelle": "leider nicht da",
     "erklaerung": "Leider nicht da heißt: heute nicht, aber später schon. Der zweite Satz sagt dir, wie es weitergeht — deshalb ist gar nicht mehr falsch."
    },
    {
     "art": "hoerwahl",
     "wer": "Frau",
     "text": "Ich nehme heute statt einem Kaffee lieber einen Tee.",
     "frage": "Was möchte die Frau trinken?",
     "opt": [
      "Einen Kaffee",
      "Einen Kaffee und einen Tee",
      "Einen Tee"
     ],
     "loesung": 2,
     "stelle": "statt einem Kaffee lieber einen Tee",
     "erklaerung": "Nach statt steht das, was sie nicht nimmt. Du hörst den Kaffee laut und deutlich, bestellt wird aber der Tee."
    },
    {
     "art": "hoerwahl",
     "wer": "Mann",
     "text": "Meine Schwester kommt erst am Sonntag zu Besuch, nicht schon am Samstag.",
     "frage": "Wann kommt die Schwester zu Besuch?",
     "opt": [
      "Am Sonntag",
      "Am Samstag",
      "Am Freitag"
     ],
     "loesung": 0,
     "stelle": "erst am Sonntag",
     "erklaerung": "Erst zeigt dir: Es dauert länger als gedacht. Der Tag direkt nach erst ist der richtige — Samstag wird nur genannt, um dich zu testen."
    },
    {
     "art": "hoerwahl",
     "wer": "Frau",
     "text": "Zur Feier am Freitag kommen alle Kollegen, außer Herr Novak. Er ist im Urlaub.",
     "frage": "Wer kommt nicht zur Feier?",
     "opt": [
      "Nur Herr Novak kommt",
      "Alle kommen",
      "Herr Novak kommt nicht"
     ],
     "loesung": 2,
     "stelle": "außer Herr Novak",
     "erklaerung": "Außer bedeutet: Diese eine Person ist nicht dabei. Der Name kommt direkt nach außer — genau da musst du hinhören."
    },
    {
     "art": "hoerwahl",
     "wer": "Mann",
     "text": "Guten Tag, ich habe keinen Termin. Ich wollte nur kurz etwas fragen.",
     "frage": "Was ist mit dem Termin des Mannes?",
     "opt": [
      "Er hat einen Termin um 10 Uhr",
      "Er hat keinen Termin",
      "Er hat einen Termin am Freitag"
     ],
     "loesung": 1,
     "stelle": "ich habe keinen Termin",
     "erklaerung": "Kein vor dem Nomen streicht es komplett: keinen Termin heißt, dass er gar keinen hat. Achte auf das kein direkt vor dem Wort, das du suchst."
    }
   ]
  },
  {
   "id": "h2b2",
   "stufe": 2,
   "titel": "Wenn sich etwas ändert",
   "kurz": "fällt aus, verschoben, abgesagt",
   "ziel": "Nach diesem Block hörst du bis zum Ende und erkennst die Änderung.",
   "zeichen": "🔄",
   "farbe": "blau",
   "aufgaben": [
    {
     "art": "hoerwahl",
     "wer": "Frau",
     "text": "Guten Morgen. Der Deutschkurs um zehn Uhr fällt heute leider aus. Wir sehen uns morgen wieder.",
     "frage": "Was passiert heute mit dem Deutschkurs?",
     "opt": [
      "Er beginnt später",
      "Er fällt aus",
      "Er ist in einem anderen Raum"
     ],
     "loesung": 1,
     "stelle": "fällt heute leider aus",
     "erklaerung": "Fällt aus heißt: Der Kurs findet gar nicht statt. Die Uhrzeit am Anfang lenkt dich ab — die wichtige Information kommt erst danach."
    },
    {
     "art": "hoerwahl",
     "wer": "Mann",
     "text": "Der Zug nach Leipzig sollte um acht Uhr fahren. Die Abfahrt verschiebt sich um zwanzig Minuten.",
     "frage": "Wann fährt der Zug nach Leipzig?",
     "opt": [
      "Um 8.20 Uhr",
      "Um 8.00 Uhr",
      "Um 7.40 Uhr"
     ],
     "loesung": 0,
     "stelle": "verschiebt sich um zwanzig Minuten",
     "erklaerung": "Zuerst hörst du den alten Plan, dann die Änderung. Verschiebt sich um zwanzig Minuten heißt später — du musst selbst rechnen."
    },
    {
     "art": "hoerwahl",
     "wer": "Frau",
     "text": "Die Sprechstunde von Frau Demir ist heute verlegt. Sie findet in Zimmer fünf statt, nicht in Zimmer drei.",
     "frage": "Wo ist die Sprechstunde heute?",
     "opt": [
      "In Zimmer 3",
      "Im Sekretariat",
      "In Zimmer 5"
     ],
     "loesung": 2,
     "stelle": "Sie findet in Zimmer fünf statt",
     "erklaerung": "Verlegt heißt: Der Ort ändert sich. Der neue Raum steht vor dem nicht, der alte danach — beide Zahlen hörst du, nur eine ist richtig."
    },
    {
     "art": "hoerwahl",
     "wer": "Mann",
     "text": "Der Handwerker wollte um neun Uhr kommen. Er kommt heute eine Stunde später.",
     "frage": "Wann kommt der Handwerker?",
     "opt": [
      "Um 10 Uhr",
      "Um 9 Uhr",
      "Um 8 Uhr"
     ],
     "loesung": 0,
     "stelle": "Er kommt heute eine Stunde später",
     "erklaerung": "Die erste Uhrzeit ist nur der alte Plan. Eine Stunde später heißt neun plus eins — die neue Zeit wird nicht gesagt, du musst sie selbst ausrechnen."
    },
    {
     "art": "hoerwahl",
     "wer": "Frau",
     "text": "Ich habe dreimal in der Praxis angerufen. Die Leitung war die ganze Zeit besetzt.",
     "frage": "Was war das Problem beim Anrufen?",
     "opt": [
      "Niemand war in der Praxis",
      "Die Leitung war besetzt",
      "Die Nummer war falsch"
     ],
     "loesung": 1,
     "stelle": "Die Leitung war die ganze Zeit besetzt",
     "erklaerung": "Besetzt heißt: Es telefoniert schon jemand. Daran erkennst du, dass die Nummer richtig war und sie trotzdem niemanden erreicht hat."
    },
    {
     "art": "hoerwahl",
     "wer": "Mann",
     "text": "Der Aufzug im Haus geht nicht mehr. Wir müssen die Treppe nehmen.",
     "frage": "Was ist mit dem Aufzug?",
     "opt": [
      "Er ist zu klein",
      "Er fährt nur nach oben",
      "Er funktioniert nicht mehr"
     ],
     "loesung": 2,
     "stelle": "geht nicht mehr",
     "erklaerung": "Geht nicht mehr heißt kaputt — gehen bedeutet hier funktionieren, nicht laufen. Der Satz mit der Treppe bestätigt dir das."
    },
    {
     "art": "hoerwahl",
     "wer": "Frau",
     "text": "Das Sommerfest in der Kita am Samstag ist leider abgesagt. Es regnet zu viel.",
     "frage": "Was passiert mit dem Sommerfest?",
     "opt": [
      "Es ist am Sonntag",
      "Es ist abgesagt",
      "Es ist in der Turnhalle"
     ],
     "loesung": 1,
     "stelle": "ist leider abgesagt",
     "erklaerung": "Abgesagt heißt: Es findet nicht statt, auch nicht woanders. Der Grund danach ist nur eine Erklärung und gibt dir keinen neuen Termin."
    },
    {
     "art": "hoerwahl",
     "wer": "Mann",
     "text": "Die Post in der Hauptstraße hat heute zu. Sie öffnet erst am Dienstag wieder.",
     "frage": "Wie ist es heute bei der Post?",
     "opt": [
      "Sie hat geschlossen",
      "Sie öffnet mittags",
      "Sie ist wie immer offen"
     ],
     "loesung": 0,
     "stelle": "hat heute zu",
     "erklaerung": "Hat zu ist die gesprochene Form von geschlossen. Merk dir das Paar: hat auf ist offen, hat zu ist geschlossen."
    },
    {
     "art": "hoerwahl",
     "wer": "Frau",
     "text": "Der Bus um sieben Uhr fünfzehn fällt heute aus. Der nächste Bus kommt um sieben Uhr fünfundvierzig.",
     "frage": "Wann kann man heute mit dem Bus fahren?",
     "opt": [
      "Um 7.15 Uhr",
      "Gar nicht",
      "Um 7.45 Uhr"
     ],
     "loesung": 2,
     "stelle": "Der nächste Bus kommt um sieben Uhr fünfundvierzig",
     "erklaerung": "Die erste Uhrzeit gehört zum Bus, der ausfällt. Erst im zweiten Satz kommt die Zeit, die du wirklich brauchst."
    },
    {
     "art": "hoerwahl",
     "wer": "Mann",
     "text": "Ihr Termin am Dienstag verschiebt sich auf Donnerstag. Die Uhrzeit bleibt gleich.",
     "frage": "An welchem Tag ist der Termin jetzt?",
     "opt": [
      "Am Dienstag",
      "Am Donnerstag",
      "Am Mittwoch"
     ],
     "loesung": 1,
     "stelle": "verschiebt sich auf Donnerstag",
     "erklaerung": "Nach verschiebt sich auf kommt der neue Tag. Dienstag ist nur der alte Termin — und die beiden Tage klingen für dich zusätzlich sehr ähnlich."
    },
    {
     "art": "hoerwahl",
     "wer": "Frau",
     "text": "Der Schwimmkurs für Kinder ist von Montag auf Freitag verlegt. Bitte sagen Sie es weiter.",
     "frage": "Wann ist der Schwimmkurs jetzt?",
     "opt": [
      "Am Freitag",
      "Am Montag",
      "Am Mittwoch"
     ],
     "loesung": 0,
     "stelle": "von Montag auf Freitag verlegt",
     "erklaerung": "Bei von A auf B ist B der neue Termin. Der erste Tag ist immer der alte — das Wörtchen auf zeigt dir die Richtung."
    },
    {
     "art": "hoerwahl",
     "wer": "Mann",
     "text": "Herr Ito kommt heute erst um elf ins Büro. Die Besprechung beginnt deshalb später.",
     "frage": "Wann kommt Herr Ito ins Büro?",
     "opt": [
      "Um 9 Uhr",
      "Gar nicht",
      "Um 11 Uhr"
     ],
     "loesung": 2,
     "stelle": "erst um elf ins Büro",
     "erklaerung": "Erst um elf heißt: später als sonst, aber er kommt. Die Uhrzeit direkt nach erst ist die, die du brauchst."
    },
    {
     "art": "hoerwahl",
     "wer": "Frau",
     "text": "Der Ausflug am Sonntag ist abgesagt. Wir machen ihn im September neu.",
     "frage": "Was ist mit dem Ausflug am Sonntag?",
     "opt": [
      "Er ist eine Stunde später",
      "Er findet nicht statt",
      "Er ist am Samstag"
     ],
     "loesung": 1,
     "stelle": "ist abgesagt",
     "erklaerung": "Abgesagt heißt: am Sonntag passiert nichts. Der neue Plan im September darf dich bei der Frage nach dem Sonntag nicht ablenken."
    },
    {
     "art": "hoerwahl",
     "wer": "Mann",
     "text": "Die Waschmaschine im Keller geht seit gestern nicht mehr. Der Techniker kommt am Montag.",
     "frage": "Was ist mit der Waschmaschine im Keller?",
     "opt": [
      "Sie ist kaputt",
      "Sie ist neu",
      "Sie ist besetzt"
     ],
     "loesung": 0,
     "stelle": "geht seit gestern nicht mehr",
     "erklaerung": "Geht nicht mehr heißt kaputt. Der Satz über den Techniker ist dein Beweis — jemand muss die Maschine reparieren."
    }
   ]
  }
 ],
 "teile": [
  {
   "nr": 1,
   "art": "gespraech",
   "name": "Kurze Gespräche",
   "kurz": "Sechs Gespräche, drei Antworten",
   "was": "Zwei Menschen reden miteinander — am Empfang, am Telefon, im Laden. Dazu eine Frage mit drei Antworten. Du hörst jedes Gespräch zweimal.",
   "tipp": "Lies die Frage, BEVOR du auf Abspielen drückst. Dann weißt du beim Hören schon, worauf du warten musst. Im Text kommen mehrere Zahlen vor — gefragt ist nur eine.",
   "zeichen": "💬",
   "farbe": "turq",
   "mal": 2,
   "runden": [
    {
     "id": "t1r1",
     "aufgaben": [
      {
       "ort": "Am Empfang in der Sprachschule",
       "zeilen": [
        {
         "wer": "Frau",
         "text": "Guten Tag, ich möchte mich für den Deutschkurs anmelden."
        },
        {
         "wer": "Mann",
         "text": "Gern. Der Abendkurs beginnt am Montag um achtzehn Uhr, der Vormittagskurs schon um neun."
        },
        {
         "wer": "Frau",
         "text": "Ich arbeite bis fünf. Dann nehme ich den Abendkurs."
        },
        {
         "wer": "Mann",
         "text": "Alles klar. Bringen Sie am Montag bitte Ihren Ausweis mit."
        }
       ],
       "frage": "Wann beginnt der Kurs von der Frau?",
       "opt": [
        "Um 18 Uhr",
        "Um 9 Uhr",
        "Um 5 Uhr"
       ],
       "loesung": 0,
       "stelle": "Der Abendkurs beginnt am Montag um achtzehn Uhr",
       "erklaerung": "Drei Zeiten sind zu hören. Die Frau sagt, sie nimmt den Abendkurs — also gilt achtzehn Uhr. Fünf ist nur das Ende von ihrer Arbeit, das brauchst du nicht."
      },
      {
       "ort": "In der Bäckerei",
       "zeilen": [
        {
         "wer": "Mann",
         "text": "Guten Morgen, ich möchte einen Kuchen für Samstag bestellen."
        },
        {
         "wer": "Frau",
         "text": "Gern. Für wie viele Personen soll der Kuchen sein?"
        },
        {
         "wer": "Mann",
         "text": "Wir sind zwölf, aber zwei Kinder essen keinen Kuchen."
        },
        {
         "wer": "Frau",
         "text": "Dann mache ich einen Kuchen für zehn Personen."
        }
       ],
       "frage": "Für wie viele Personen ist der Kuchen?",
       "opt": [
        "Für 12 Personen",
        "Für 2 Personen",
        "Für 10 Personen"
       ],
       "loesung": 2,
       "stelle": "einen Kuchen für zehn Personen",
       "erklaerung": "Du hörst zwölf und zwei, aber beide sind nur Zwischenschritte. Die Verkäuferin sagt am Ende die richtige Zahl: zehn."
      },
      {
       "ort": "An der Kinokasse",
       "zeilen": [
        {
         "wer": "Frau",
         "text": "Zwei Karten für den Film um zwanzig Uhr, bitte."
        },
        {
         "wer": "Mann",
         "text": "Der Film um zwanzig Uhr ist leider ausverkauft. Es gibt noch Karten für einundzwanzig Uhr dreißig."
        },
        {
         "wer": "Frau",
         "text": "Gut, dann zweimal halb zehn."
        },
        {
         "wer": "Mann",
         "text": "Das macht sechzehn Euro."
        }
       ],
       "frage": "Wann geht die Frau ins Kino?",
       "opt": [
        "Um 20 Uhr",
        "Um 21.30 Uhr",
        "Um 16 Uhr"
       ],
       "loesung": 1,
       "stelle": "Karten für einundzwanzig Uhr dreißig",
       "erklaerung": "Wenn du das Wort ausverkauft hörst, ist die erste Uhrzeit weg. Halb zehn und einundzwanzig Uhr dreißig sind dieselbe Zeit."
      },
      {
       "ort": "Im Fitnessstudio",
       "zeilen": [
        {
         "wer": "Mann",
         "text": "Entschuldigung, wann hat das Studio am Sonntag geöffnet?"
        },
        {
         "wer": "Frau",
         "text": "Am Sonntag von zehn bis achtzehn Uhr. Von Montag bis Freitag schon ab sieben."
        },
        {
         "wer": "Mann",
         "text": "Und der Kurs am Sonntagmorgen?"
        },
        {
         "wer": "Frau",
         "text": "Der beginnt um elf."
        }
       ],
       "frage": "Wann öffnet das Studio am Sonntag?",
       "opt": [
        "Um 10 Uhr",
        "Um 7 Uhr",
        "Um 11 Uhr"
       ],
       "loesung": 0,
       "stelle": "Am Sonntag von zehn bis achtzehn Uhr",
       "erklaerung": "Sieben gilt für die Woche, elf ist der Kurs. Wenn du auf das Wort Sonntag wartest, findest du die richtige Zahl direkt danach."
      },
      {
       "ort": "Am Telefon mit einem Freund",
       "zeilen": [
        {
         "wer": "Frau",
         "text": "Hallo Deniz, kommst du am Samstag zu meiner Feier?"
        },
        {
         "wer": "Mann",
         "text": "Am Samstag arbeite ich bis acht. Aber am Sonntag habe ich Zeit."
        },
        {
         "wer": "Frau",
         "text": "Die Feier ist leider nur am Samstag."
        },
        {
         "wer": "Mann",
         "text": "Dann komme ich später, so gegen halb neun."
        }
       ],
       "frage": "Wann kommt Deniz zur Feier?",
       "opt": [
        "Am Sonntag",
        "Um 8 Uhr",
        "Um halb 9"
       ],
       "loesung": 2,
       "stelle": "so gegen halb neun",
       "erklaerung": "Acht Uhr ist das Ende von seiner Arbeit, und der Sonntag fällt weg. Die Antwort findest du wie so oft im letzten Satz."
      },
      {
       "ort": "Beim Zahnarzt am Empfang",
       "zeilen": [
        {
         "wer": "Mann",
         "text": "Guten Tag, ich möchte einen Termin. Am liebsten am Freitag."
        },
        {
         "wer": "Frau",
         "text": "Am Freitag ist alles voll. Am Donnerstag um fünfzehn Uhr wäre noch frei."
        },
        {
         "wer": "Mann",
         "text": "Donnerstag passt. Um wie viel Uhr noch mal?"
        },
        {
         "wer": "Frau",
         "text": "Um fünfzehn Uhr, bitte kommen Sie zehn Minuten früher."
        }
       ],
       "frage": "Wann hat der Mann seinen Termin?",
       "opt": [
        "Donnerstag um 15 Uhr",
        "Freitag um 15 Uhr",
        "Donnerstag um 10 Uhr"
       ],
       "loesung": 0,
       "stelle": "Am Donnerstag um fünfzehn Uhr",
       "erklaerung": "Merk dir Tag und Uhrzeit immer zusammen. Die zehn Minuten sind nur ein Tipp und keine Terminzeit."
      }
     ]
    },
    {
     "id": "t1r2",
     "aufgaben": [
      {
       "ort": "Im Supermarkt an der Kasse",
       "zeilen": [
        {
         "wer": "Frau",
         "text": "Das macht zusammen neunundzwanzig Euro fünfzig."
        },
        {
         "wer": "Mann",
         "text": "Kann ich mit Karte zahlen?"
        },
        {
         "wer": "Frau",
         "text": "Ab zehn Euro gern. Möchten Sie eine Tüte für dreißig Cent?"
        },
        {
         "wer": "Mann",
         "text": "Nein danke, ich habe eine Tasche dabei."
        }
       ],
       "frage": "Wie viel muss der Mann bezahlen?",
       "opt": [
        "29,50 Euro",
        "10 Euro",
        "30 Cent"
       ],
       "loesung": 0,
       "stelle": "neunundzwanzig Euro fünfzig",
       "erklaerung": "Drei Zahlen, aber nur eine ist der Preis. Zehn Euro ist die Grenze für die Karte, dreißig Cent kostet die Tüte — die brauchst du nicht."
      },
      {
       "ort": "In der Autowerkstatt",
       "zeilen": [
        {
         "wer": "Mann",
         "text": "Guten Tag, wann ist mein Auto fertig?"
        },
        {
         "wer": "Frau",
         "text": "Heute leider nicht mehr. Morgen ab vierzehn Uhr können Sie es abholen."
        },
        {
         "wer": "Mann",
         "text": "Und was kostet die Reparatur?"
        },
        {
         "wer": "Frau",
         "text": "Ungefähr zweihundertfünfzig Euro."
        }
       ],
       "frage": "Wann kann der Mann sein Auto abholen?",
       "opt": [
        "Heute um 14 Uhr",
        "Morgen ab 14 Uhr",
        "Morgen ab 2 Uhr"
       ],
       "loesung": 1,
       "stelle": "Morgen ab vierzehn Uhr",
       "erklaerung": "Das kleine Wort morgen entscheidet hier alles. Vierzehn Uhr allein reicht dir nicht, du brauchst auch den Tag."
      },
      {
       "ort": "Am Fahrkartenschalter",
       "zeilen": [
        {
         "wer": "Frau",
         "text": "Eine Fahrkarte nach Nürnberg, bitte. Wann fährt der nächste Zug?"
        },
        {
         "wer": "Mann",
         "text": "Um sechzehn Uhr zwölf von Gleis sieben. Der Zug danach fährt um siebzehn Uhr zwei."
        },
        {
         "wer": "Frau",
         "text": "Ich nehme den um sechzehn Uhr zwölf."
        },
        {
         "wer": "Mann",
         "text": "Gern, einfach oder hin und zurück?"
        }
       ],
       "frage": "Von welchem Gleis fährt der Zug der Frau?",
       "opt": [
        "Gleis 7",
        "Gleis 12",
        "Gleis 17"
       ],
       "loesung": 0,
       "stelle": "von Gleis sieben",
       "erklaerung": "Hier fliegen dir vier Zahlen um die Ohren. Warte auf das Wort Gleis — die Zahl direkt danach ist die richtige."
      },
      {
       "ort": "Im Blumenladen",
       "zeilen": [
        {
         "wer": "Mann",
         "text": "Ich suche Blumen für meine Mutter. Sie hat am Sonntag Geburtstag."
        },
        {
         "wer": "Frau",
         "text": "Wie schön. Diese Rosen kosten fünfzehn Euro, die Tulpen zwölf."
        },
        {
         "wer": "Mann",
         "text": "Ich nehme die Tulpen."
        },
        {
         "wer": "Frau",
         "text": "Sehr gern. Soll ich eine Karte dazulegen?"
        }
       ],
       "frage": "Wie viel bezahlt der Mann für die Blumen?",
       "opt": [
        "15 Euro",
        "5 Euro",
        "12 Euro"
       ],
       "loesung": 2,
       "stelle": "die Tulpen zwölf",
       "erklaerung": "Zwei Blumen, zwei Preise. Du musst dir merken, welche Blume er nimmt — dann gehört die Zahl von selbst dazu."
      },
      {
       "ort": "In der Kantine",
       "zeilen": [
        {
         "wer": "Frau",
         "text": "Was gibt es heute zum Mittagessen?"
        },
        {
         "wer": "Mann",
         "text": "Suppe für zwei Euro fünfzig oder Nudeln mit Salat für fünf Euro."
        },
        {
         "wer": "Frau",
         "text": "Ich nehme die Nudeln und dazu ein Wasser."
        },
        {
         "wer": "Mann",
         "text": "Mit Wasser sind das sechs Euro."
        }
       ],
       "frage": "Wie viel bezahlt die Frau?",
       "opt": [
        "2,50 Euro",
        "5 Euro",
        "6 Euro"
       ],
       "loesung": 2,
       "stelle": "Mit Wasser sind das sechs Euro",
       "erklaerung": "Fünf Euro ist nur das Essen ohne Getränk. Warte bis zum Schluss, denn den Endpreis nennt man dir erst ganz zuletzt."
      },
      {
       "ort": "Am Telefon mit dem Vermieter",
       "zeilen": [
        {
         "wer": "Mann",
         "text": "Guten Tag, Frau Novak. Der Handwerker kommt am Mittwoch."
        },
        {
         "wer": "Frau",
         "text": "Am Mittwoch bin ich bis vierzehn Uhr im Büro."
        },
        {
         "wer": "Mann",
         "text": "Er kommt zwischen fünfzehn und siebzehn Uhr."
        },
        {
         "wer": "Frau",
         "text": "Gut, dann bin ich zu Hause."
        }
       ],
       "frage": "Wann kommt der Handwerker?",
       "opt": [
        "Vor 14 Uhr",
        "Zwischen 15 und 17 Uhr",
        "Am Donnerstag"
       ],
       "loesung": 1,
       "stelle": "zwischen fünfzehn und siebzehn Uhr",
       "erklaerung": "Vierzehn Uhr gehört zur Frau und ihrem Büro. Achte darauf, wer über wen spricht, dann nimmst du die richtige Zeit."
      }
     ]
    },
    {
     "id": "t1r3",
     "aufgaben": [
      {
       "ort": "Auf dem Wochenmarkt",
       "zeilen": [
        {
         "wer": "Frau",
         "text": "Was kostet das Kilo Äpfel?"
        },
        {
         "wer": "Mann",
         "text": "Zwei Euro zwanzig. Die Birnen kosten drei Euro."
        },
        {
         "wer": "Frau",
         "text": "Dann nehme ich zwei Kilo Äpfel."
        },
        {
         "wer": "Mann",
         "text": "Das macht vier Euro vierzig."
        }
       ],
       "frage": "Wie viel bezahlt die Frau für die Äpfel?",
       "opt": [
        "2,20 Euro",
        "4,40 Euro",
        "3 Euro"
       ],
       "loesung": 1,
       "stelle": "Das macht vier Euro vierzig",
       "erklaerung": "Zwei Euro zwanzig gilt nur für ein Kilo, drei Euro sind die Birnen. Den Preis, den sie wirklich zahlt, hörst du im letzten Satz."
      },
      {
       "ort": "Im Reisebüro",
       "zeilen": [
        {
         "wer": "Mann",
         "text": "Wir möchten im Juli nach Spanien fliegen, eine Woche."
        },
        {
         "wer": "Frau",
         "text": "Vom siebten bis zum vierzehnten Juli habe ich noch ein Hotel am Meer."
        },
        {
         "wer": "Mann",
         "text": "Das klingt gut. Was kostet das für zwei Personen?"
        },
        {
         "wer": "Frau",
         "text": "Achthundert Euro zusammen."
        }
       ],
       "frage": "Wann beginnt der Urlaub?",
       "opt": [
        "Am 1. Juli",
        "Am 14. Juli",
        "Am 7. Juli"
       ],
       "loesung": 2,
       "stelle": "Vom siebten bis zum vierzehnten Juli",
       "erklaerung": "Nach vom kommt der Anfang, nach bis zum das Ende. An diesen zwei kleinen Wörtern erkennst du, welches Datum gefragt ist."
      },
      {
       "ort": "Beim Friseur am Telefon",
       "zeilen": [
        {
         "wer": "Frau",
         "text": "Salon Bella, guten Tag."
        },
        {
         "wer": "Mann",
         "text": "Guten Tag, ich hätte gern einen Termin am Dienstagnachmittag."
        },
        {
         "wer": "Frau",
         "text": "Um sechzehn Uhr oder um siebzehn Uhr dreißig?"
        },
        {
         "wer": "Mann",
         "text": "Sechzehn Uhr ist zu früh, ich nehme den späteren Termin."
        }
       ],
       "frage": "Wann kommt der Mann zum Friseur?",
       "opt": [
        "Um 17.30 Uhr",
        "Um 16 Uhr",
        "Um 13.30 Uhr"
       ],
       "loesung": 0,
       "stelle": "um siebzehn Uhr dreißig",
       "erklaerung": "Er wiederholt die Uhrzeit nicht, er sagt nur den späteren Termin. Deshalb musst du dir beide Zeiten merken und dann die zweite nehmen."
      },
      {
       "ort": "Im Möbelhaus",
       "zeilen": [
        {
         "wer": "Mann",
         "text": "Entschuldigung, wo finde ich Lampen?"
        },
        {
         "wer": "Frau",
         "text": "Im zweiten Stock, neben den Teppichen. Betten sind im dritten Stock."
        },
        {
         "wer": "Mann",
         "text": "Danke. Und wo ist der Aufzug?"
        },
        {
         "wer": "Frau",
         "text": "Gleich hier rechts."
        }
       ],
       "frage": "In welchem Stock sind die Lampen?",
       "opt": [
        "Im 2. Stock",
        "Im 3. Stock",
        "Im Erdgeschoss"
       ],
       "loesung": 0,
       "stelle": "Im zweiten Stock, neben den Teppichen",
       "erklaerung": "Zwei Stockwerke in einem Satz. Der dritte gehört zu den Betten — hör auf das Wort direkt vor der Zahl, dann erwischst du das Richtige."
      },
      {
       "ort": "Bei der Nachbarin an der Tür",
       "zeilen": [
        {
         "wer": "Frau",
         "text": "Guten Abend, Herr Petrov. Können Sie am Freitag ein Paket für mich annehmen?"
        },
        {
         "wer": "Mann",
         "text": "Gern. Wann kommt es denn?"
        },
        {
         "wer": "Frau",
         "text": "Zwischen acht und zwölf Uhr. Ich bin erst am Abend wieder da."
        },
        {
         "wer": "Mann",
         "text": "Kein Problem, ich bin den ganzen Vormittag zu Hause."
        }
       ],
       "frage": "Wann kommt das Paket?",
       "opt": [
        "Am Abend",
        "Am Vormittag",
        "Am Samstag"
       ],
       "loesung": 1,
       "stelle": "Zwischen acht und zwölf Uhr",
       "erklaerung": "Acht bis zwölf Uhr ist der Vormittag, das bestätigt der Nachbar am Ende. Am Abend ist nur die Frau wieder da — darauf sollst du hereinfallen."
      },
      {
       "ort": "Am Schalter in der Bank",
       "zeilen": [
        {
         "wer": "Mann",
         "text": "Guten Tag, ich möchte ein Konto eröffnen."
        },
        {
         "wer": "Frau",
         "text": "Dafür brauchen Sie Ihren Pass und eine Anmeldung von der Stadt."
        },
        {
         "wer": "Mann",
         "text": "Meinen Pass habe ich dabei."
        },
        {
         "wer": "Frau",
         "text": "Dann bringen Sie bitte noch die Anmeldung mit, dann geht es sofort."
        }
       ],
       "frage": "Was fehlt dem Mann noch?",
       "opt": [
        "Der Pass",
        "Ein Foto",
        "Die Anmeldung"
       ],
       "loesung": 2,
       "stelle": "bringen Sie bitte noch die Anmeldung mit",
       "erklaerung": "Zwei Papiere werden genannt, eines hat er schon. Bei dem Wort noch musst du hellhörig werden, denn danach kommt das, was fehlt."
      }
     ]
    },
    {
     "id": "t1r4",
     "aufgaben": [
      {
       "ort": "In der Pizzeria",
       "zeilen": [
        {
         "wer": "Frau",
         "text": "Wir möchten bestellen. Einmal Pizza Margherita und einmal Salat."
        },
        {
         "wer": "Mann",
         "text": "Gern. Die Pizza dauert zwanzig Minuten."
        },
        {
         "wer": "Frau",
         "text": "Und zu trinken ein Wasser und eine Cola, bitte."
        },
        {
         "wer": "Mann",
         "text": "Kommt sofort."
        }
       ],
       "frage": "Wie lange dauert die Pizza?",
       "opt": [
        "20 Minuten",
        "2 Minuten",
        "12 Minuten"
       ],
       "loesung": 0,
       "stelle": "dauert zwanzig Minuten",
       "erklaerung": "Zwanzig endet auf -zig, zwölf ist ein ganz anderes Wort. Sprich beim Üben beides laut mit, dann verwechselst du es nicht mehr."
      },
      {
       "ort": "Am Telefon mit der Grundschule",
       "zeilen": [
        {
         "wer": "Mann",
         "text": "Guten Morgen, mein Sohn Luca ist krank. Er kommt heute nicht."
        },
        {
         "wer": "Frau",
         "text": "Danke für die Information. Wie lange ist er denn krank?"
        },
        {
         "wer": "Mann",
         "text": "Der Arzt sagt, bis Freitag."
        },
        {
         "wer": "Frau",
         "text": "Gute Besserung. Am Montag sehen wir ihn wieder."
        }
       ],
       "frage": "Wann kommt Luca wieder in die Schule?",
       "opt": [
        "Heute",
        "Am Freitag",
        "Am Montag"
       ],
       "loesung": 2,
       "stelle": "Am Montag sehen wir ihn wieder",
       "erklaerung": "Bis Freitag ist er krank, zurück ist er also erst danach. Die Lehrerin sagt dir den Tag am Ende ganz klar."
      },
      {
       "ort": "Im Elektronikmarkt",
       "zeilen": [
        {
         "wer": "Frau",
         "text": "Ich suche Kopfhörer, aber nicht zu teuer."
        },
        {
         "wer": "Mann",
         "text": "Diese hier kosten neunundvierzig Euro, die schwarzen neunundzwanzig."
        },
        {
         "wer": "Frau",
         "text": "Ich nehme die schwarzen."
        },
        {
         "wer": "Mann",
         "text": "Gute Wahl. Die Kasse ist vorne links."
        }
       ],
       "frage": "Wie viel kosten die Kopfhörer von der Frau?",
       "opt": [
        "49 Euro",
        "29 Euro",
        "94 Euro"
       ],
       "loesung": 1,
       "stelle": "die schwarzen neunundzwanzig",
       "erklaerung": "Neunundvierzig und neunundzwanzig beginnen genau gleich. Erst am Wortende hörst du den Unterschied, also warte bis zum letzten Teil."
      },
      {
       "ort": "An der Bushaltestelle",
       "zeilen": [
        {
         "wer": "Mann",
         "text": "Entschuldigung, fährt hier der Bus zum Stadion?"
        },
        {
         "wer": "Frau",
         "text": "Nein, hier fährt nur die Linie fünfzig. Zum Stadion müssen Sie die Linie vierzehn nehmen."
        },
        {
         "wer": "Mann",
         "text": "Und wo hält die?"
        },
        {
         "wer": "Frau",
         "text": "Auf der anderen Straßenseite."
        }
       ],
       "frage": "Welche Linie fährt zum Stadion?",
       "opt": [
        "Linie 50",
        "Linie 40",
        "Linie 14"
       ],
       "loesung": 2,
       "stelle": "die Linie vierzehn nehmen",
       "erklaerung": "Die Antwort beginnt mit nein, also ist die erste Linie falsch. Wenn du das Wort Stadion hörst, kommt gleich danach die richtige Zahl."
      },
      {
       "ort": "Im Waschsalon",
       "zeilen": [
        {
         "wer": "Frau",
         "text": "Entschuldigung, wie lange dauert eine Wäsche?"
        },
        {
         "wer": "Mann",
         "text": "Fünfundvierzig Minuten. Der Trockner braucht noch mal eine halbe Stunde."
        },
        {
         "wer": "Frau",
         "text": "Also bin ich in einer Stunde fertig?"
        },
        {
         "wer": "Mann",
         "text": "Mit Trockner eher in eineinhalb Stunden."
        }
       ],
       "frage": "Wie lange dauert die Wäsche ohne Trockner?",
       "opt": [
        "45 Minuten",
        "30 Minuten",
        "90 Minuten"
       ],
       "loesung": 0,
       "stelle": "Fünfundvierzig Minuten",
       "erklaerung": "Die halbe Stunde gehört zum Trockner, eineinhalb Stunden sind beides zusammen. Achte in der Frage auf das Wort ohne, dann weißt du, was du brauchst."
      },
      {
       "ort": "Beim Optiker",
       "zeilen": [
        {
         "wer": "Mann",
         "text": "Meine Brille ist kaputt. Wann bekomme ich eine neue?"
        },
        {
         "wer": "Frau",
         "text": "In etwa einer Woche, also am nächsten Donnerstag."
        },
        {
         "wer": "Mann",
         "text": "So lange? Ich brauche sie für die Arbeit."
        },
        {
         "wer": "Frau",
         "text": "Eine einfache Brille geht auch bis Montag."
        }
       ],
       "frage": "Wann ist die einfache Brille fertig?",
       "opt": [
        "Am Donnerstag",
        "Am Montag",
        "In zwei Wochen"
       ],
       "loesung": 1,
       "stelle": "geht auch bis Montag",
       "erklaerung": "Donnerstag gilt für die normale Brille. Wenn du das Wort einfach hörst, kommt gleich danach der andere Tag."
      }
     ]
    },
    {
     "id": "t1r5",
     "aufgaben": [
      {
       "ort": "Im Sportverein",
       "zeilen": [
        {
         "wer": "Frau",
         "text": "Wann ist das Training für die Kinder?"
        },
        {
         "wer": "Mann",
         "text": "Dienstags und donnerstags von sechzehn bis siebzehn Uhr."
        },
        {
         "wer": "Frau",
         "text": "Und was kostet das im Monat?"
        },
        {
         "wer": "Mann",
         "text": "Zehn Euro für Kinder, für Erwachsene zwanzig."
        }
       ],
       "frage": "Was kostet das Training für Kinder im Monat?",
       "opt": [
        "16 Euro",
        "20 Euro",
        "10 Euro"
       ],
       "loesung": 2,
       "stelle": "Zehn Euro für Kinder",
       "erklaerung": "Sechzehn und siebzehn sind Uhrzeiten, keine Preise. Bei den Preisen musst du hören, ob Kinder oder Erwachsene bei der Zahl stehen."
      },
      {
       "ort": "Am Kiosk am Bahnhof",
       "zeilen": [
        {
         "wer": "Mann",
         "text": "Eine Zeitung und einen Kaffee, bitte."
        },
        {
         "wer": "Frau",
         "text": "Drei Euro sechzig zusammen. Möchten Sie Milch dazu?"
        },
        {
         "wer": "Mann",
         "text": "Ja, bitte. Und haben Sie auch Briefmarken?"
        },
        {
         "wer": "Frau",
         "text": "Nein, Briefmarken gibt es nur in der Post da drüben."
        }
       ],
       "frage": "Wo bekommt der Mann Briefmarken?",
       "opt": [
        "Am Kiosk",
        "In der Post",
        "Im Zug"
       ],
       "loesung": 1,
       "stelle": "nur in der Post da drüben",
       "erklaerung": "Nach einem Nein kommt fast immer die richtige Information. Warte also auf den Satz nach dem Nein, dort bekommst du den Ort."
      },
      {
       "ort": "Im Fundbüro",
       "zeilen": [
        {
         "wer": "Frau",
         "text": "Guten Tag, ich habe gestern meinen Schlüssel in der Straßenbahn verloren."
        },
        {
         "wer": "Mann",
         "text": "Welche Farbe hat der Anhänger?"
        },
        {
         "wer": "Frau",
         "text": "Rot, und es sind drei Schlüssel dran."
        },
        {
         "wer": "Mann",
         "text": "Einen Moment. Ja, hier ist er. Bitte unterschreiben Sie kurz."
        }
       ],
       "frage": "Was hat die Frau verloren?",
       "opt": [
        "Eine Tasche",
        "Ihren Schlüssel",
        "Ihr Handy"
       ],
       "loesung": 1,
       "stelle": "meinen Schlüssel in der Straßenbahn verloren",
       "erklaerung": "Farbe und Anzahl lenken dich ab, gefragt ist nur der Gegenstand. Den hörst du schon im allerersten Satz."
      },
      {
       "ort": "Beim Umzug in der neuen Wohnung",
       "zeilen": [
        {
         "wer": "Mann",
         "text": "Wo soll der Schrank hin?"
        },
        {
         "wer": "Frau",
         "text": "Bitte ins Schlafzimmer, links neben das Fenster."
        },
        {
         "wer": "Mann",
         "text": "Und die Kisten mit den Büchern?"
        },
        {
         "wer": "Frau",
         "text": "Die kommen ins Wohnzimmer."
        }
       ],
       "frage": "Wohin kommt der Schrank?",
       "opt": [
        "Ins Wohnzimmer",
        "In die Küche",
        "Ins Schlafzimmer"
       ],
       "loesung": 2,
       "stelle": "Bitte ins Schlafzimmer",
       "erklaerung": "Zwei Zimmer werden genannt, und beide klingen ähnlich. Merk dir, welches Möbelstück zuerst dran ist, dann gehört die Antwort dazu."
      },
      {
       "ort": "In der Tierarztpraxis",
       "zeilen": [
        {
         "wer": "Frau",
         "text": "Guten Tag, mein Hund frisst seit zwei Tagen nichts."
        },
        {
         "wer": "Mann",
         "text": "Kommen Sie bitte um sechzehn Uhr, dann hat der Arzt Zeit."
        },
        {
         "wer": "Frau",
         "text": "Geht es auch früher? Um vierzehn Uhr wäre gut."
        },
        {
         "wer": "Mann",
         "text": "Vierzehn Uhr ist schon voll. Sechzehn Uhr oder morgen früh."
        }
       ],
       "frage": "Wann soll die Frau in die Praxis kommen?",
       "opt": [
        "Um 16 Uhr",
        "Um 14 Uhr",
        "Um 2 Uhr"
       ],
       "loesung": 0,
       "stelle": "Kommen Sie bitte um sechzehn Uhr",
       "erklaerung": "Ihr Wunsch um vierzehn Uhr geht nicht, das Wort voll sagt es dir. Übrig bleibt die Zeit, die zweimal genannt wird."
      },
      {
       "ort": "Am Telefon mit dem Hausmeister",
       "zeilen": [
        {
         "wer": "Mann",
         "text": "Hausverwaltung Berger, guten Tag."
        },
        {
         "wer": "Frau",
         "text": "Guten Tag, bei uns im dritten Stock ist das Licht im Flur kaputt."
        },
        {
         "wer": "Mann",
         "text": "Ich komme morgen Vormittag vorbei, so gegen elf."
        },
        {
         "wer": "Frau",
         "text": "Danke, ich bin dann zu Hause."
        }
       ],
       "frage": "Wann kommt der Hausmeister?",
       "opt": [
        "Heute um 11 Uhr",
        "Morgen gegen 11 Uhr",
        "Morgen um 3 Uhr"
       ],
       "loesung": 1,
       "stelle": "morgen Vormittag vorbei, so gegen elf",
       "erklaerung": "Der dritte Stock ist nur der Ort und keine Uhrzeit. Für die Antwort brauchst du zwei Wörter zusammen: morgen und gegen elf."
      }
     ]
    }
   ]
  },
  {
   "nr": 2,
   "art": "durchsage",
   "name": "Durchsagen",
   "kurz": "Vier Durchsagen, richtig oder falsch",
   "was": "Lautsprecherdurchsagen am Bahnhof, im Supermarkt, im Schwimmbad. Dazu eine Aussage: stimmt sie oder nicht?",
   "tipp": "Diese Texte hörst du nur EINMAL — auch hier im Training. Deshalb: erst die Aussage lesen, dann abspielen, und beim Hören nur auf dieses eine Detail achten.",
   "zeichen": "📢",
   "farbe": "rot",
   "mal": 1,
   "runden": [
    {
     "id": "t2r1",
     "aufgaben": [
      {
       "ort": "Am Hauptbahnhof",
       "wer": "Mann",
       "text": "Achtung an Gleis fünf. Der Intercity nach Dresden, Abfahrt vierzehn Uhr sieben, fährt heute von Gleis elf. Wir bitten um Ihr Verständnis.",
       "satz": "Der Zug nach Dresden fährt von Gleis 11.",
       "loesung": true,
       "stelle": "fährt heute von Gleis elf",
       "erklaerung": "Die erste Zahl ist das alte Gleis. Nach dem Wort heute kommt das neue Gleis — genau darauf musst du warten."
      },
      {
       "ort": "Im Supermarkt",
       "wer": "Frau",
       "text": "Liebe Kundinnen und Kunden, heute im Angebot: Erdbeeren aus der Region, zwei Schalen für drei Euro. Sie finden die Erdbeeren gleich am Eingang.",
       "satz": "Die Erdbeeren stehen an der Kasse.",
       "loesung": false,
       "stelle": "gleich am Eingang",
       "erklaerung": "Das Angebot stimmt, aber der Ort nicht. Du hörst Eingang, und Kasse kommt in der Durchsage gar nicht vor."
      },
      {
       "ort": "In der U-Bahn-Station",
       "wer": "Frau",
       "text": "Achtung, eine Information für alle Fahrgäste. Die Linie U vier fährt wegen Bauarbeiten nur bis zum Rathaus. Von dort fährt ein Bus weiter zum Zoo.",
       "satz": "Die U 4 fährt heute bis zum Zoo.",
       "loesung": false,
       "stelle": "nur bis zum Rathaus",
       "erklaerung": "Das kleine Wort nur begrenzt die Fahrt. Zum Zoo kommst du nur mit dem Bus, nicht mit der U-Bahn."
      },
      {
       "ort": "Im Kaufhaus",
       "wer": "Mann",
       "text": "Sehr geehrte Kundinnen und Kunden, wir schließen in fünfzehn Minuten. Bitte kommen Sie jetzt zu den Kassen im Erdgeschoss.",
       "satz": "Das Kaufhaus schließt in einer Viertelstunde.",
       "loesung": true,
       "stelle": "wir schließen in fünfzehn Minuten",
       "erklaerung": "Fünfzehn Minuten sind eine Viertelstunde. Rechne beim Hören kurz um, dann erkennst du dieselbe Information in anderen Worten."
      }
     ]
    },
    {
     "id": "t2r2",
     "aufgaben": [
      {
       "ort": "Am Flughafen",
       "wer": "Frau",
       "text": "Letzter Aufruf für Herrn Almeida, gebucht nach Lissabon. Bitte kommen Sie sofort zum Ausgang A neun. Ihr Flugzeug wartet.",
       "satz": "Herr Almeida soll zum Ausgang A 19 kommen.",
       "loesung": false,
       "stelle": "zum Ausgang A neun",
       "erklaerung": "Neun und neunzehn klingen am Anfang gleich. Hör auf das Wortende, dann merkst du, dass hier das -zehn fehlt."
      },
      {
       "ort": "Im Hallenbad",
       "wer": "Mann",
       "text": "Liebe Gäste, in zehn Minuten ist die letzte Runde. Bitte verlassen Sie dann das Becken und gehen Sie zu den Umkleiden.",
       "satz": "Die Gäste sollen bald aus dem Wasser kommen.",
       "loesung": true,
       "stelle": "Bitte verlassen Sie dann das Becken",
       "erklaerung": "Das Becken verlassen heißt raus aus dem Wasser. Die Aussage wiederholt den Text fast nie wörtlich, du musst also mitdenken."
      },
      {
       "ort": "Im Museum",
       "wer": "Frau",
       "text": "Verehrte Besucherinnen und Besucher, die Führung durch die Ausstellung beginnt um fünfzehn Uhr am Eingang. Karten bekommen Sie noch an der Kasse.",
       "satz": "Die Führung beginnt um 15 Uhr.",
       "loesung": true,
       "stelle": "beginnt um fünfzehn Uhr",
       "erklaerung": "Fünfzehn Uhr ist drei Uhr am Nachmittag. Die Zahl steht direkt hinter dem Wort beginnt, dort solltest du hinhören."
      },
      {
       "ort": "Im Baumarkt",
       "wer": "Mann",
       "text": "Eine Durchsage für Familie Kowalski: Ihr Sohn Marek wartet bei der Information neben dem Ausgang. Bitte holen Sie ihn dort ab.",
       "satz": "Marek wartet auf dem Parkplatz.",
       "loesung": false,
       "stelle": "wartet bei der Information neben dem Ausgang",
       "erklaerung": "Der Name stimmt, aber der Ort nicht. Wenn du den Namen hörst, achte danach sofort auf das Wort mit bei oder an."
      }
     ]
    },
    {
     "id": "t2r3",
     "aufgaben": [
      {
       "ort": "Auf der Fähre",
       "wer": "Frau",
       "text": "Liebe Fahrgäste, wir kommen in zwanzig Minuten in Rostock an. Bitte gehen Sie erst zu Ihrem Auto, wenn Sie die nächste Durchsage hören.",
       "satz": "Die Fahrgäste sollen sofort zu ihren Autos gehen.",
       "loesung": false,
       "stelle": "Bitte gehen Sie erst zu Ihrem Auto",
       "erklaerung": "Das Wort erst dreht die Aussage um: noch nicht jetzt, sondern später. Wenn du erst hörst, ist sofort fast immer falsch."
      },
      {
       "ort": "Im Krankenhaus",
       "wer": "Mann",
       "text": "Eine Bitte an alle Besucher: Die Besuchszeit endet heute um neunzehn Uhr. Bitte verlassen Sie danach die Zimmer.",
       "satz": "Besucher können bis 19 Uhr bleiben.",
       "loesung": true,
       "stelle": "Die Besuchszeit endet heute um neunzehn Uhr",
       "erklaerung": "Enden um neunzehn Uhr heißt: bis dahin darfst du bleiben. Das Verb enden gibt dir die Uhrzeit für das Ende."
      },
      {
       "ort": "In der Stadtbibliothek",
       "wer": "Frau",
       "text": "Liebe Leserinnen und Leser, wir schließen heute schon um sechzehn Uhr. Ab morgen haben wir wieder bis zwanzig Uhr geöffnet.",
       "satz": "Die Bibliothek schließt heute um 20 Uhr.",
       "loesung": false,
       "stelle": "wir schließen heute schon um sechzehn Uhr",
       "erklaerung": "Beide Zeiten kommen vor, aber heute gilt nur sechzehn Uhr. Die Wörter heute und ab morgen sortieren dir die Zahlen."
      },
      {
       "ort": "Im Stadion",
       "wer": "Mann",
       "text": "Achtung, eine Fundsache. Am Eingang Nord wurde ein blauer Rucksack gefunden. Sie können ihn beim Ordner am Block C abholen.",
       "satz": "Es wurde ein blauer Rucksack gefunden.",
       "loesung": true,
       "stelle": "ein blauer Rucksack gefunden",
       "erklaerung": "Farbe und Sache stehen direkt nebeneinander: blauer Rucksack. Die vielen Orte danach brauchst du für diese Aussage nicht."
      }
     ]
    },
    {
     "id": "t2r4",
     "aufgaben": [
      {
       "ort": "Im Parkhaus",
       "wer": "Frau",
       "text": "Achtung, eine Durchsage für den Fahrer von dem grünen Kombi aus Kassel. Bitte fahren Sie sofort weg, Sie stehen vor der Ausfahrt.",
       "satz": "Der grüne Kombi steht vor der Einfahrt.",
       "loesung": false,
       "stelle": "Sie stehen vor der Ausfahrt",
       "erklaerung": "Ausfahrt und Einfahrt klingen fast gleich. Der erste Teil vom Wort entscheidet, also hörst du am besten auf aus und ein."
      },
      {
       "ort": "Im Freibad",
       "wer": "Mann",
       "text": "Liebe Badegäste, wegen Gewitter schließt das Freibad heute schon um siebzehn Uhr. Bitte verlassen Sie sofort das Wasser.",
       "satz": "Das Freibad schließt heute früher, weil es ein Gewitter gibt.",
       "loesung": true,
       "stelle": "wegen Gewitter schließt das Freibad heute schon um siebzehn Uhr",
       "erklaerung": "Der Grund steht ganz am Anfang: wegen Gewitter. Und das Wort schon zeigt dir, dass es früher als sonst ist."
      },
      {
       "ort": "Auf der Messe",
       "wer": "Frau",
       "text": "Eine Information für unsere Gäste: Die Halle drei ist heute geschlossen. Alle Vorträge finden in der Halle sieben statt.",
       "satz": "Die Vorträge sind in Halle 7.",
       "loesung": true,
       "stelle": "in der Halle sieben statt",
       "erklaerung": "Zwei Hallen, zwei Zahlen. Die geschlossene Halle kommt zuerst, deshalb musst du bis zum Wort Vorträge warten."
      },
      {
       "ort": "Im Gartencenter",
       "wer": "Mann",
       "text": "Liebe Kundinnen und Kunden, heute bekommen Sie alle Rosen zum halben Preis. Das Angebot gilt nur bis achtzehn Uhr.",
       "satz": "Das Angebot für die Rosen gilt die ganze Woche.",
       "loesung": false,
       "stelle": "gilt nur bis achtzehn Uhr",
       "erklaerung": "Nur bis achtzehn Uhr heißt heute und nicht länger. Das Wörtchen nur macht aus dem Angebot eine Grenze, die du hören musst."
      }
     ]
    },
    {
     "id": "t2r5",
     "aufgaben": [
      {
       "ort": "Am Bahnsteig",
       "wer": "Frau",
       "text": "Information zum Regionalzug nach Ulm. Der Zug hat heute etwa zehn Minuten Verspätung. Die Abfahrt ist jetzt um acht Uhr fünfzig.",
       "satz": "Der Zug nach Ulm fährt pünktlich ab.",
       "loesung": false,
       "stelle": "etwa zehn Minuten Verspätung",
       "erklaerung": "Das Wort Verspätung sagt schon alles. Wenn du es hörst, kann pünktlich nicht mehr stimmen."
      },
      {
       "ort": "Im Kino",
       "wer": "Mann",
       "text": "Liebe Gäste, der Film im Saal zwei beginnt in fünf Minuten. Bitte schalten Sie jetzt Ihre Handys aus.",
       "satz": "Die Gäste sollen ihre Handys ausschalten.",
       "loesung": true,
       "stelle": "schalten Sie jetzt Ihre Handys aus",
       "erklaerung": "Das Verb steht auseinander: schalten am Anfang, aus am Ende. Warte bis zum Satzende, dann hast du die ganze Information."
      },
      {
       "ort": "Auf dem Campingplatz",
       "wer": "Frau",
       "text": "Guten Abend, liebe Gäste. Ab zweiundzwanzig Uhr ist bei uns Nachtruhe. Die Duschen sind aber die ganze Nacht offen.",
       "satz": "Ab 22 Uhr soll es leise sein.",
       "loesung": true,
       "stelle": "ist bei uns Nachtruhe",
       "erklaerung": "Nachtruhe heißt leise sein. Zweiundzwanzig Uhr ist zehn Uhr abends — wenn du beim Hören schnell mitrechnest, passt die Zahl zur Aussage."
      },
      {
       "ort": "Im Zoo",
       "wer": "Mann",
       "text": "Liebe Besucher, die Fütterung der Pinguine beginnt um sechzehn Uhr dreißig. Die Affen bekommen ihr Futter schon um fünfzehn Uhr.",
       "satz": "Die Pinguine bekommen ihr Futter um 15 Uhr.",
       "loesung": false,
       "stelle": "beginnt um sechzehn Uhr dreißig",
       "erklaerung": "Zwei Tiere und zwei Zeiten in drei Sekunden. Merk dir immer, welche Zahl zu welchem Tier gehört, sonst fällst du auf die zweite herein."
      }
     ]
    }
   ]
  },
  {
   "nr": 3,
   "art": "ansage",
   "name": "Auf dem Anrufbeantworter",
   "kurz": "Fünf Ansagen, drei Antworten",
   "was": "Eine Nachricht auf der Mailbox: die Praxis sagt den Termin ab, die Werkstatt meldet das Auto fertig, eine Freundin verschiebt das Treffen.",
   "tipp": "Fast jede Ansage nennt erst den alten Termin und dann den neuen. Warte auf das Signalwort — leider, aber, statt, neu. Danach kommt die Antwort.",
   "zeichen": "📞",
   "farbe": "gold",
   "mal": 2,
   "runden": [
    {
     "id": "t3r1",
     "aufgaben": [
      {
       "von": "Praxis Doktor Neumann",
       "wer": "Frau",
       "text": "Guten Tag, hier ist die Praxis Doktor Neumann. Ihr Termin am Mittwoch um neun Uhr muss leider ausfallen. Der Arzt ist krank. Wir haben einen neuen Termin für Sie am Freitag um halb elf. Bitte rufen Sie kurz zurück.",
       "frage": "Wann ist der neue Termin in der Praxis?",
       "opt": [
        "Am Mittwoch um 9 Uhr",
        "Am Freitag um 11 Uhr",
        "Am Freitag um 10.30 Uhr"
       ],
       "loesung": 2,
       "stelle": "am Freitag um halb elf",
       "erklaerung": "Halb elf ist 10.30 Uhr, nicht 11 Uhr. Beim Wort „leider“ weißt du schon: Den ersten Termin kannst du vergessen."
      },
      {
       "von": "Autowerkstatt Berger",
       "wer": "Mann",
       "text": "Hallo Frau Kirsch, hier ist die Autowerkstatt Berger. Ihr Auto ist fertig. Sie können es ab morgen früh abholen. Wir haben bis achtzehn Uhr geöffnet, am Samstag nur bis zwölf.",
       "frage": "Bis wann hat die Werkstatt am Samstag geöffnet?",
       "opt": [
        "Bis 18 Uhr",
        "Bis 12 Uhr",
        "Bis 8 Uhr"
       ],
       "loesung": 1,
       "stelle": "am Samstag nur bis zwölf",
       "erklaerung": "Zuerst hörst du achtzehn Uhr, aber das gilt für die anderen Tage. Warte auf das Wort Samstag, danach kommt deine Zeit."
      },
      {
       "von": "Hausverwaltung Sommer",
       "wer": "Frau",
       "text": "Guten Tag, Frau Aydin, hier spricht die Hausverwaltung Sommer. Am Donnerstag kommt der Handwerker und repariert die Heizung. Er kommt zwischen acht und zehn Uhr. Bitte seien Sie zu Hause.",
       "frage": "Wann kommt der Handwerker in die Wohnung?",
       "opt": [
        "Am Donnerstag am Morgen",
        "Am Donnerstag am Nachmittag",
        "Am Dienstag am Morgen"
       ],
       "loesung": 0,
       "stelle": "zwischen acht und zehn Uhr",
       "erklaerung": "Acht bis zehn Uhr ist der Morgen. Du musst dir keine genaue Uhrzeit merken, nur Tag und Tageszeit."
      },
      {
       "von": "Grundschule am Park",
       "wer": "Mann",
       "text": "Guten Morgen, hier ist die Grundschule am Park. Am Freitag fällt der Unterricht in der ersten und in der zweiten Stunde aus. Ihr Sohn kommt also erst um zehn Uhr zur Schule. Der Nachmittag ist ganz normal.",
       "frage": "Wann beginnt für den Sohn am Freitag die Schule?",
       "opt": [
        "Um 8 Uhr",
        "Um 9 Uhr",
        "Um 10 Uhr"
       ],
       "loesung": 2,
       "stelle": "erst um zehn Uhr zur Schule",
       "erklaerung": "Das Wort erst zeigt dir die neue Zeit. Zwei Stunden fallen aus, deshalb geht es für dich später los."
      },
      {
       "von": "Paketdienst Schnell und Sicher",
       "wer": "Frau",
       "text": "Hallo, hier ist der Paketdienst Schnell und Sicher. Wir waren heute bei Ihnen, aber Sie waren nicht zu Hause. Ihr Paket liegt jetzt bei Ihrem Nachbarn in Wohnung sieben. Sie können es dort bis Samstag abholen.",
       "frage": "Wo liegt das Paket jetzt?",
       "opt": [
        "Auf der Post",
        "Beim Nachbarn",
        "Im Paketshop"
       ],
       "loesung": 1,
       "stelle": "bei Ihrem Nachbarn in Wohnung sieben",
       "erklaerung": "Der Anfang sagt dir nur, dass niemand da war. Wo dein Paket wirklich liegt, hörst du erst im dritten Satz."
      }
     ]
    },
    {
     "id": "t3r2",
     "aufgaben": [
      {
       "von": "Sparkasse Mitte",
       "wer": "Mann",
       "text": "Guten Tag, Herr Okafor, hier ist die Sparkasse Mitte. Ihre neue Bankkarte ist da. Sie können sie ab Montag bei uns abholen. Bitte bringen Sie Ihren Personalausweis mit. Wir haben von neun bis sechzehn Uhr geöffnet.",
       "frage": "Was soll Herr Okafor mitbringen?",
       "opt": [
        "Die alte Karte",
        "Den Personalausweis",
        "Ein Foto"
       ],
       "loesung": 1,
       "stelle": "Ihren Personalausweis mit",
       "erklaerung": "Die Uhrzeiten am Ende lenken dich ab. Die Antwort steht im Satz mit bitte bringen Sie mit."
      },
      {
       "von": "Bürgeramt Nord",
       "wer": "Frau",
       "text": "Guten Tag, hier ist das Bürgeramt Nord. Sie haben einen Termin am Dienstag um vierzehn Uhr. Leider müssen wir den Termin verschieben. Sie kommen jetzt am Mittwoch um vierzehn Uhr dreißig.",
       "frage": "Wann ist der Termin im Bürgeramt jetzt?",
       "opt": [
        "Am Dienstag um 14 Uhr",
        "Am Mittwoch um 4 Uhr",
        "Am Mittwoch um 14.30 Uhr"
       ],
       "loesung": 2,
       "stelle": "am Mittwoch um vierzehn Uhr dreißig",
       "erklaerung": "Hier ändern sich Tag und Uhrzeit. Nach dem Wort verschieben bekommst du immer den Termin, der wirklich gilt."
      },
      {
       "von": "Sprachschule Lingua",
       "wer": "Mann",
       "text": "Hallo, hier ist die Sprachschule Lingua. Ihr Deutschkurs am Montag ist nicht mehr in Raum drei. Wir sind jetzt in Raum sieben im ersten Stock. Die Zeit bleibt gleich, achtzehn Uhr. Bis Montag.",
       "frage": "In welchem Raum ist der Kurs am Montag?",
       "opt": [
        "In Raum 3",
        "In Raum 1",
        "In Raum 7"
       ],
       "loesung": 2,
       "stelle": "jetzt in Raum sieben",
       "erklaerung": "Das Wort jetzt zeigt dir die Änderung. Der erste Stock ist die Etage, nicht die Nummer vom Raum."
      },
      {
       "von": "Elena",
       "wer": "Frau",
       "text": "Hallo, ich bin es, Elena. Wir wollten uns ja am Samstag im Café treffen. Ich muss am Samstag aber arbeiten. Können wir am Sonntag um vier gehen? Ruf mich bitte an.",
       "frage": "Wann möchte Elena sich jetzt treffen?",
       "opt": [
        "Am Samstag",
        "Am Sonntag",
        "Am Freitag"
       ],
       "loesung": 1,
       "stelle": "am Sonntag um vier",
       "erklaerung": "Am Anfang hörst du nur den alten Plan. Nach dem Wort aber kommt der Tag, der jetzt gilt."
      },
      {
       "von": "Thomas aus dem Büro",
       "wer": "Mann",
       "text": "Hallo Sabine, hier ist Thomas aus dem Büro. Die Besprechung heute Nachmittag beginnt nicht um drei, sondern schon um zwei. Bitte bring die Liste für Herrn Klein mit. Melde dich kurz, wenn du das gehört hast.",
       "frage": "Wann beginnt die Besprechung?",
       "opt": [
        "Um 14 Uhr",
        "Um 15 Uhr",
        "Um 13 Uhr"
       ],
       "loesung": 0,
       "stelle": "sondern schon um zwei",
       "erklaerung": "Bei nicht und sondern gilt für dich immer die zweite Zahl. Zwei am Nachmittag ist 14 Uhr."
      }
     ]
    },
    {
     "id": "t3r3",
     "aufgaben": [
      {
       "von": "Zahnarztpraxis Doktor Lang",
       "wer": "Frau",
       "text": "Guten Tag, Frau Petrova, hier ist die Zahnarztpraxis Doktor Lang. Bei uns ist ein Termin frei geworden. Sie können schon am Montag um acht Uhr kommen. Ihr Termin am Freitag bleibt sonst natürlich. Sagen Sie uns bitte kurz Bescheid.",
       "frage": "Wann kann Frau Petrova früher kommen?",
       "opt": [
        "Am Freitag um 8 Uhr",
        "Am Montag um 8 Uhr",
        "Am Montag um 18 Uhr"
       ],
       "loesung": 1,
       "stelle": "schon am Montag um acht Uhr",
       "erklaerung": "Das Wort schon zeigt dir den früheren Termin. Freitag ist nur der alte Termin, der auch bleiben darf."
      },
      {
       "von": "Apotheke am Markt",
       "wer": "Mann",
       "text": "Guten Tag, hier ist die Apotheke am Markt. Ihr Medikament ist jetzt da. Wir haben heute bis achtzehn Uhr dreißig auf. Morgen ist Sonntag, da ist die Apotheke geschlossen. Am Montag sind wir wieder ab acht Uhr für Sie da.",
       "frage": "Ab wann kann man das Medikament am Montag holen?",
       "opt": [
        "Ab 18.30 Uhr",
        "Ab 8 Uhr",
        "Am Montag ist geschlossen"
       ],
       "loesung": 1,
       "stelle": "wieder ab acht Uhr",
       "erklaerung": "Drei Zeiten kommen vor, du brauchst aber nur eine. Hör auf das Wort Montag, danach steht die richtige Zeit."
      },
      {
       "von": "Friseursalon Haarfein",
       "wer": "Frau",
       "text": "Hallo Herr Bauer, hier ist der Friseursalon Haarfein. Ihr Termin am Donnerstag um sechzehn Uhr geht leider nicht. Meine Kollegin ist krank. Passt es Ihnen am selben Tag um achtzehn Uhr? Bitte rufen Sie uns an.",
       "frage": "Wann soll Herr Bauer zum Friseur kommen?",
       "opt": [
        "Am Donnerstag um 16 Uhr",
        "Am Freitag um 18 Uhr",
        "Am Donnerstag um 18 Uhr"
       ],
       "loesung": 2,
       "stelle": "am selben Tag um achtzehn Uhr",
       "erklaerung": "Am selben Tag heißt für dich: Der Tag bleibt gleich, nur die Uhrzeit ist neu."
      },
      {
       "von": "Fahrschule Rot",
       "wer": "Mann",
       "text": "Hallo Lena, hier ist die Fahrschule Rot. Deine Fahrstunde morgen um siebzehn Uhr fällt aus. Das Auto ist in der Werkstatt. Wir machen die Stunde am Dienstag um siebzehn Uhr. Bis dann.",
       "frage": "Wann ist die Fahrstunde von Lena?",
       "opt": [
        "Morgen um 17 Uhr",
        "Am Dienstag um 17 Uhr",
        "Am Dienstag um 7 Uhr"
       ],
       "loesung": 1,
       "stelle": "am Dienstag um siebzehn Uhr",
       "erklaerung": "Hier bleibt die Uhrzeit gleich und nur der Tag ist neu. Nach fällt aus bekommst du immer den neuen Termin."
      },
      {
       "von": "Kita Sonnenblume",
       "wer": "Frau",
       "text": "Guten Morgen, hier ist die Kita Sonnenblume. Ihre Tochter hat Fieber. Bitte holen Sie sie heute früher ab, am besten vor zwölf Uhr. Wenn das nicht geht, sagen Sie uns bitte Bescheid.",
       "frage": "Warum ruft die Kita an?",
       "opt": [
        "Das Kind ist krank",
        "Die Kita ist geschlossen",
        "Das Kind hat Geburtstag"
       ],
       "loesung": 0,
       "stelle": "hat Fieber",
       "erklaerung": "Fieber ist für dich das Signalwort für krank. Danach kommt die Bitte, das Kind früher abzuholen."
      }
     ]
    },
    {
     "id": "t3r4",
     "aufgaben": [
      {
       "von": "Versicherung Nordstern",
       "wer": "Mann",
       "text": "Guten Tag, Frau Silva, hier ist die Versicherung Nordstern. Wir haben Ihren Brief bekommen. Leider fehlt noch eine Unterschrift auf Seite zwei. Bitte schicken Sie uns das Blatt noch einmal per Post. Vielen Dank.",
       "frage": "Was soll Frau Silva machen?",
       "opt": [
        "Das Blatt noch einmal schicken",
        "Anrufen",
        "Zur Versicherung kommen"
       ],
       "loesung": 0,
       "stelle": "schicken Sie uns das Blatt noch einmal per Post",
       "erklaerung": "Am Anfang klingt alles gut, der Brief ist ja da. Erst nach dem Wort leider hörst du, was du noch machen musst."
      },
      {
       "von": "Stadtbibliothek Süd",
       "wer": "Frau",
       "text": "Guten Tag, hier ist die Stadtbibliothek Süd. Ihr Buch war schon am Montag fällig. Bitte bringen Sie es bis Freitag zurück. Sonst kostet jeder Tag fünfzig Cent. Danke schön.",
       "frage": "Bis wann soll das Buch zurück in die Bibliothek?",
       "opt": [
        "Bis Montag",
        "Bis Freitag",
        "Bis Samstag"
       ],
       "loesung": 1,
       "stelle": "bis Freitag zurück",
       "erklaerung": "Montag ist der alte Tag und schon vorbei. Der Tag, der für dich zählt, kommt nach dem Wort bitte."
      },
      {
       "von": "Umzugsfirma Kraft und Sohn",
       "wer": "Mann",
       "text": "Hallo Herr Demir, hier ist die Umzugsfirma Kraft und Sohn. Wir kommen am Samstag, aber nicht um sieben Uhr, sondern erst um neun. Wir brauchen dann etwa vier Stunden. Bitte machen Sie einen Parkplatz vor dem Haus frei.",
       "frage": "Wann kommen die Männer von der Umzugsfirma?",
       "opt": [
        "Um 7 Uhr",
        "Um 4 Uhr",
        "Um 9 Uhr"
       ],
       "loesung": 2,
       "stelle": "sondern erst um neun",
       "erklaerung": "Nach nicht und sondern hörst du die richtige Uhrzeit. Vier Stunden ist nur die Dauer, keine Uhrzeit."
      },
      {
       "von": "Tierarztpraxis Vier Pfoten",
       "wer": "Frau",
       "text": "Guten Tag, Frau Wagner, hier ist die Tierarztpraxis Vier Pfoten. Ihr Hund braucht wieder eine Impfung. Wir haben am vierzehnten Mai um elf Uhr einen Platz frei. Bitte sagen Sie uns Bescheid, ob das passt.",
       "frage": "Wann ist ein Termin für die Impfung frei?",
       "opt": [
        "Am 14. Mai",
        "Am 4. Mai",
        "Am 11. Mai"
       ],
       "loesung": 0,
       "stelle": "am vierzehnten Mai um elf Uhr",
       "erklaerung": "Elf ist hier die Uhrzeit und nicht das Datum. Das Datum hörst du immer direkt vor dem Monat."
      },
      {
       "von": "Fitnessstudio Aktiv",
       "wer": "Mann",
       "text": "Hallo, hier ist das Fitnessstudio Aktiv. Der Kurs Rücken fit am Mittwoch um neunzehn Uhr fällt diese Woche aus. Dafür gibt es am Donnerstag um neunzehn Uhr einen Extra-Kurs. Die Anmeldung geht nur über unsere Internetseite.",
       "frage": "Was muss man für den Extra-Kurs machen?",
       "opt": [
        "Anrufen",
        "Im Studio Bescheid sagen",
        "Sich im Internet anmelden"
       ],
       "loesung": 2,
       "stelle": "nur über unsere Internetseite",
       "erklaerung": "Die beiden Uhrzeiten lenken dich ab. Deine Antwort steht im letzten Satz nach dem Wort Anmeldung."
      }
     ]
    },
    {
     "id": "t3r5",
     "aufgaben": [
      {
       "von": "Optiker Klarblick",
       "wer": "Frau",
       "text": "Guten Tag, Herr Novak, hier ist der Optiker Klarblick. Ihre neue Brille ist fertig. Sie können sie ab Donnerstag abholen. Am Donnerstag haben wir bis zwanzig Uhr auf, sonst nur bis achtzehn Uhr.",
       "frage": "Bis wann ist der Optiker am Donnerstag offen?",
       "opt": [
        "Bis 18 Uhr",
        "Bis 8 Uhr",
        "Bis 20 Uhr"
       ],
       "loesung": 2,
       "stelle": "bis zwanzig Uhr auf",
       "erklaerung": "Am Donnerstag ist länger offen als sonst. Achtzehn Uhr gilt für dich nur an den anderen Tagen."
      },
      {
       "von": "Restaurant Zur Linde",
       "wer": "Mann",
       "text": "Guten Abend, hier ist das Restaurant Zur Linde. Sie haben für Samstag einen Tisch für vier Personen bestellt. Um neunzehn Uhr haben wir leider keinen Tisch mehr frei. Um zwanzig Uhr geht es aber. Bitte rufen Sie kurz zurück.",
       "frage": "Wann ist im Restaurant ein Tisch frei?",
       "opt": [
        "Um 19 Uhr",
        "Um 20 Uhr",
        "Um 4 Uhr"
       ],
       "loesung": 1,
       "stelle": "Um zwanzig Uhr geht es aber",
       "erklaerung": "Vier ist hier die Zahl der Personen und keine Uhrzeit. Die freie Zeit hörst du nach dem Satz mit leider."
      },
      {
       "von": "Möbelhaus Wohnwelt",
       "wer": "Frau",
       "text": "Guten Tag, Familie Schulz, hier ist das Möbelhaus Wohnwelt. Ihr Sofa kommt nicht am Montag, sondern am Mittwoch. Der Fahrer ist zwischen zwölf und sechzehn Uhr bei Ihnen. Bitte sagen Sie uns, ob jemand zu Hause ist.",
       "frage": "An welchem Tag kommt das Sofa?",
       "opt": [
        "Am Montag",
        "Am Mittwoch",
        "Am Dienstag"
       ],
       "loesung": 1,
       "stelle": "sondern am Mittwoch",
       "erklaerung": "Montag und Mittwoch klingen am Anfang gleich. Warte auf das Wort sondern, danach hörst du den richtigen Tag."
      },
      {
       "von": "Hausmeister Kowalski",
       "wer": "Mann",
       "text": "Guten Morgen, hier ist der Hausmeister Kowalski. Am Dienstag ist von acht bis vierzehn Uhr kein Wasser im Haus. Wir reparieren die Leitung im Keller. Bitte machen Sie sich am Montagabend etwas Wasser fertig.",
       "frage": "Was ist am Dienstag im Haus los?",
       "opt": [
        "Es gibt kein Wasser",
        "Der Strom ist weg",
        "Der Keller ist zu"
       ],
       "loesung": 0,
       "stelle": "kein Wasser im Haus",
       "erklaerung": "Keller und Leitung hörst du auch, aber das sind nur Details. Das Problem selbst steht im zweiten Satz."
      },
      {
       "von": "Theaterkasse vom Stadttheater",
       "wer": "Frau",
       "text": "Guten Tag, Frau Hofmann, hier ist die Theaterkasse vom Stadttheater. Ihre zwei Karten liegen für Sie bereit. Bitte holen Sie die Karten bis Freitag ab. Am Abend von der Vorstellung ist die Kasse erst ab neunzehn Uhr offen.",
       "frage": "Bis wann soll Frau Hofmann die Karten abholen?",
       "opt": [
        "Bis Freitag",
        "Bis 19 Uhr",
        "Bis zur Vorstellung"
       ],
       "loesung": 0,
       "stelle": "bis Freitag ab",
       "erklaerung": "Die Uhrzeit am Ende gilt nur für den Abend im Theater. Für dein Abholen zählt der Satz mit bitte."
      }
     ]
    }
   ]
  }
 ],
 "laeufe": [
  {
   "id": "p1",
   "titel": "Prüfungslauf 1",
   "minuten": 20,
   "teile": [
    {
     "nr": 1,
     "art": "gespraech",
     "aufgaben": [
      {
       "ort": "An der Hotelrezeption",
       "zeilen": [
        {
         "wer": "Frau",
         "text": "Guten Abend, ich habe ein Zimmer für zwei Nächte reserviert, auf den Namen Kellner."
        },
        {
         "wer": "Mann",
         "text": "Willkommen. Sie haben Zimmer zweihundertacht im zweiten Stock."
        },
        {
         "wer": "Frau",
         "text": "Vielen Dank. Und wann gibt es Frühstück?"
        },
        {
         "wer": "Mann",
         "text": "Von sieben bis halb elf. Am Sonntag erst ab acht."
        }
       ],
       "frage": "Ab wann gibt es am Sonntag Frühstück?",
       "opt": [
        "Ab 8 Uhr",
        "Ab 7 Uhr",
        "Ab 10.30 Uhr"
       ],
       "loesung": 0,
       "stelle": "Am Sonntag erst ab acht",
       "erklaerung": "Die erste Zeit gilt für die normalen Tage. Nach dem Wort Sonntag kommt die Zeit, die du brauchst."
      },
      {
       "ort": "In der Apotheke",
       "zeilen": [
        {
         "wer": "Frau",
         "text": "Guten Tag, ich brauche etwas gegen Husten."
        },
        {
         "wer": "Mann",
         "text": "Möchten Sie lieber einen Saft oder Tabletten?"
        },
        {
         "wer": "Frau",
         "text": "Tabletten schlucke ich nicht so gern. Lieber den Saft."
        },
        {
         "wer": "Mann",
         "text": "Gut, der Saft kostet neun Euro achtzig."
        }
       ],
       "frage": "Was nimmt die Frau gegen den Husten?",
       "opt": [
        "Tabletten",
        "Einen Saft",
        "Einen Tee"
       ],
       "loesung": 1,
       "stelle": "Lieber den Saft",
       "erklaerung": "Zuerst hörst du beide Möglichkeiten. Bei dem Wort lieber sagt dir die Frau, was sie wirklich nimmt."
      },
      {
       "ort": "Im Schuhgeschäft",
       "zeilen": [
        {
         "wer": "Mann",
         "text": "Entschuldigung, haben Sie diese Schuhe in Größe zweiundvierzig?"
        },
        {
         "wer": "Frau",
         "text": "Zweiundvierzig ist leider weg. Ich habe noch dreiundvierzig und einundvierzig."
        },
        {
         "wer": "Mann",
         "text": "Dann probiere ich dreiundvierzig."
        },
        {
         "wer": "Frau",
         "text": "Einen Moment, ich hole die Schuhe."
        }
       ],
       "frage": "Welche Größe probiert der Mann?",
       "opt": [
        "Größe 42",
        "Größe 41",
        "Größe 43"
       ],
       "loesung": 2,
       "stelle": "Dann probiere ich dreiundvierzig",
       "erklaerung": "Die Größe vom Anfang gibt es nicht mehr. Erst im dritten Satz hörst du die Größe, die der Mann wirklich nimmt."
      },
      {
       "ort": "Am Infoschalter im Rathaus",
       "zeilen": [
        {
         "wer": "Frau",
         "text": "Guten Tag, wo kann ich meine Wohnung anmelden?"
        },
        {
         "wer": "Mann",
         "text": "Im ersten Stock, Zimmer hundertvier. Aber Sie brauchen einen Termin."
        },
        {
         "wer": "Frau",
         "text": "Kann ich den Termin gleich hier machen?"
        },
        {
         "wer": "Mann",
         "text": "Nein, das geht nur im Internet."
        }
       ],
       "frage": "Wie bekommt die Frau einen Termin?",
       "opt": [
        "Am Schalter",
        "Im Internet",
        "Am Telefon"
       ],
       "loesung": 1,
       "stelle": "das geht nur im Internet",
       "erklaerung": "Die Nummer vom Zimmer ist nur eine Ablenkung. Deine Antwort steht im letzten Satz nach dem Wort nein."
      },
      {
       "ort": "In der Eisdiele",
       "zeilen": [
        {
         "wer": "Mann",
         "text": "Zwei Kugeln Eis bitte, einmal Schokolade und einmal Erdbeere."
        },
        {
         "wer": "Frau",
         "text": "Erdbeere ist heute leider alle. Wir haben noch Vanille, Zitrone und Nuss."
        },
        {
         "wer": "Mann",
         "text": "Dann nehme ich Schokolade und Vanille."
        },
        {
         "wer": "Frau",
         "text": "Gern, das macht drei Euro."
        }
       ],
       "frage": "Welches Eis bekommt der Mann?",
       "opt": [
        "Schokolade und Erdbeere",
        "Zitrone und Nuss",
        "Schokolade und Vanille"
       ],
       "loesung": 2,
       "stelle": "Schokolade und Vanille",
       "erklaerung": "Beim Wort alle weißt du: Der erste Wunsch geht nicht. Danach nennt der Mann seine neue Bestellung."
      },
      {
       "ort": "Im Copyshop",
       "zeilen": [
        {
         "wer": "Frau",
         "text": "Guten Tag, ich möchte diese Seiten kopieren, bitte zwanzig Mal."
        },
        {
         "wer": "Mann",
         "text": "In Farbe oder in Schwarz-Weiß?"
        },
        {
         "wer": "Frau",
         "text": "Schwarz-Weiß reicht. Wann ist es fertig?"
        },
        {
         "wer": "Mann",
         "text": "In einer halben Stunde können Sie die Kopien abholen."
        }
       ],
       "frage": "Wann sind die Kopien fertig?",
       "opt": [
        "In 30 Minuten",
        "In 20 Minuten",
        "In einer Stunde"
       ],
       "loesung": 0,
       "stelle": "In einer halben Stunde",
       "erklaerung": "Zwanzig ist die Zahl der Kopien und keine Zeit. Eine halbe Stunde sind für dich 30 Minuten."
      }
     ]
    },
    {
     "nr": 2,
     "art": "durchsage",
     "aufgaben": [
      {
       "ort": "In der Straßenbahn",
       "wer": "Frau",
       "text": "Liebe Fahrgäste, wegen eines Unfalls stehen wir hier etwa zehn Minuten. Danach fahren wir ganz normal weiter. Wir danken für Ihre Geduld.",
       "satz": "Die Straßenbahn wartet etwa 10 Minuten.",
       "loesung": true,
       "stelle": "etwa zehn Minuten",
       "erklaerung": "Die Zahl hörst du direkt im ersten Satz. Das Wort etwa ändert für dich nichts."
      },
      {
       "ort": "Im Einkaufszentrum",
       "wer": "Mann",
       "text": "Liebe Kundinnen und Kunden, wir schließen heute schon um zwanzig Uhr. Bitte gehen Sie rechtzeitig zur Kasse. Morgen sind wir wieder bis einundzwanzig Uhr für Sie da.",
       "satz": "Das Einkaufszentrum schließt heute um 21 Uhr.",
       "loesung": false,
       "stelle": "heute schon um zwanzig Uhr",
       "erklaerung": "Beide Uhrzeiten kommen vor. Einundzwanzig Uhr gilt für dich erst morgen, heute ist früher Schluss."
      },
      {
       "ort": "Auf dem Weihnachtsmarkt",
       "wer": "Frau",
       "text": "Achtung, eine Information für alle Gäste. Das Karussell für die Kinder fährt heute erst ab fünfzehn Uhr. Die Stände mit Essen sind schon offen. Wir wünschen Ihnen einen schönen Nachmittag.",
       "satz": "Das Karussell fährt ab 15 Uhr.",
       "loesung": true,
       "stelle": "erst ab fünfzehn Uhr",
       "erklaerung": "Das Wort erst sagt dir: Vorher geht es nicht. Die Zahl im Satz ist trotzdem richtig."
      },
      {
       "ort": "In der Buchhandlung",
       "wer": "Mann",
       "text": "Liebe Kundinnen und Kunden, heute Abend um neunzehn Uhr liest bei uns die Autorin Maria Berg. Der Eintritt ist frei. Die Stühle finden Sie im ersten Stock.",
       "satz": "Die Lesung kostet 5 Euro.",
       "loesung": false,
       "stelle": "Der Eintritt ist frei",
       "erklaerung": "Frei heißt hier, dass du nichts bezahlst. Einen Preis hörst du in der ganzen Durchsage nicht."
      }
     ]
    },
    {
     "nr": 3,
     "art": "ansage",
     "aufgaben": [
      {
       "von": "Reinigung Blitzblank",
       "wer": "Frau",
       "text": "Guten Tag, Herr Yilmaz, hier ist die Reinigung Blitzblank. Ihre Jacke war leider sehr schmutzig. Sie ist deshalb erst am Freitag fertig, nicht schon am Mittwoch. Es tut uns sehr leid.",
       "frage": "Wann ist die Jacke fertig?",
       "opt": [
        "Am Mittwoch",
        "Am Freitag",
        "Am Donnerstag"
       ],
       "loesung": 1,
       "stelle": "erst am Freitag fertig",
       "erklaerung": "Nach dem Wort erst hörst du den neuen Tag. Mittwoch war nur der alte Plan."
      },
      {
       "von": "Volkshochschule Ostheim",
       "wer": "Mann",
       "text": "Hallo Frau Brandt, hier ist die Volkshochschule Ostheim. Ihr Kochkurs beginnt eine Woche später, also erst am zweiten Oktober. Bitte bringen Sie eine Schürze mit. Wir freuen uns auf Sie.",
       "frage": "Wann beginnt der Kochkurs?",
       "opt": [
        "Am 2. Oktober",
        "Am 1. Oktober",
        "Am 2. November"
       ],
       "loesung": 0,
       "stelle": "erst am zweiten Oktober",
       "erklaerung": "Eine Woche später sagt dir nur, dass sich etwas ändert. Das genaue Datum hörst du gleich danach."
      },
      {
       "von": "Nachbarin Frau Gruber",
       "wer": "Frau",
       "text": "Hallo, hier ist Ihre Nachbarin, Frau Gruber. Ich fahre morgen früh in den Urlaub. Können Sie bitte meine Blumen gießen? Der Schlüssel liegt bei meiner Mutter im Erdgeschoss.",
       "frage": "Wo liegt der Schlüssel von Frau Gruber?",
       "opt": [
        "In der Wohnung von Frau Gruber",
        "Im Briefkasten",
        "Bei der Mutter im Erdgeschoss"
       ],
       "loesung": 2,
       "stelle": "bei meiner Mutter im Erdgeschoss",
       "erklaerung": "Deine Antwort steht ganz am Ende. Achte auf das lange Wort Erdgeschoss."
      },
      {
       "von": "Elektriker Sattler",
       "wer": "Mann",
       "text": "Guten Tag, hier ist der Elektriker Sattler. Ich wollte um vierzehn Uhr bei Ihnen sein. Ich stehe aber im Stau und komme etwa eine Stunde später. Bitte warten Sie noch kurz auf mich.",
       "frage": "Wann kommt der Elektriker?",
       "opt": [
        "Um 13 Uhr",
        "Um 14 Uhr",
        "Um 15 Uhr"
       ],
       "loesung": 2,
       "stelle": "etwa eine Stunde später",
       "erklaerung": "Eine Stunde nach vierzehn Uhr ist 15 Uhr. Die neue Zeit hörst du nicht als Zahl, du musst sie selbst rechnen."
      },
      {
       "von": "Kundenservice Telefonwelt",
       "wer": "Frau",
       "text": "Guten Tag, hier ist der Kundenservice von Telefonwelt. Ihr Internet geht seit gestern nicht. Ein Techniker kommt am Montag zwischen acht und zwölf Uhr. Bitte bleiben Sie an diesem Vormittag zu Hause.",
       "frage": "Wann kommt der Techniker?",
       "opt": [
        "Am Montagvormittag",
        "Am Montagnachmittag",
        "Am Sonntagvormittag"
       ],
       "loesung": 0,
       "stelle": "am Montag zwischen acht und zwölf Uhr",
       "erklaerung": "Acht bis zwölf Uhr ist der Vormittag. Das Wort Vormittag hörst du am Ende noch einmal."
      }
     ]
    }
   ]
  },
  {
   "id": "p2",
   "titel": "Prüfungslauf 2",
   "minuten": 20,
   "teile": [
    {
     "nr": 1,
     "art": "gespraech",
     "aufgaben": [
      {
       "ort": "Im Handyladen",
       "zeilen": [
        {
         "wer": "Mann",
         "text": "Guten Tag, mein Handy ist kaputt. Der Bildschirm bleibt schwarz."
        },
        {
         "wer": "Frau",
         "text": "Das können wir reparieren. Es dauert etwa drei Tage und kostet neunundachtzig Euro."
        },
        {
         "wer": "Mann",
         "text": "Und was kostet ein neues Handy?"
        },
        {
         "wer": "Frau",
         "text": "Ein neues bekommen Sie bei uns ab hundertneunzig Euro."
        }
       ],
       "frage": "Was kostet die Reparatur vom Handy?",
       "opt": [
        "89 Euro",
        "190 Euro",
        "3 Euro"
       ],
       "loesung": 0,
       "stelle": "kostet neunundachtzig Euro",
       "erklaerung": "Zwei Preise hörst du hier. Der erste gehört zur Reparatur, der zweite zu einem neuen Handy."
      },
      {
       "ort": "Am Schalter in der Post",
       "zeilen": [
        {
         "wer": "Frau",
         "text": "Ich möchte dieses Paket nach Österreich schicken."
        },
        {
         "wer": "Mann",
         "text": "Normal dauert es vier Tage, express nur zwei Tage. Express kostet aber zehn Euro mehr."
        },
        {
         "wer": "Frau",
         "text": "Das ist mir zu teuer. Dann normal, bitte."
        },
        {
         "wer": "Mann",
         "text": "Gut, dann sind wir bei sieben Euro fünfzig."
        }
       ],
       "frage": "Wie schickt die Frau das Paket?",
       "opt": [
        "Normal in 4 Tagen",
        "Express in 2 Tagen",
        "Als Brief"
       ],
       "loesung": 0,
       "stelle": "Dann normal, bitte",
       "erklaerung": "Bei zu teuer weißt du schon, dass Express wegfällt. Danach sagt die Frau klar, was sie nimmt."
      },
      {
       "ort": "In der Metzgerei",
       "zeilen": [
        {
         "wer": "Mann",
         "text": "Guten Morgen, ich hätte gern dreihundert Gramm Hackfleisch."
        },
        {
         "wer": "Frau",
         "text": "Gern. Darf es auch etwas mehr sein? Ich habe hier dreihundertfünfzig Gramm."
        },
        {
         "wer": "Mann",
         "text": "Nein, dreihundert reichen mir genau."
        },
        {
         "wer": "Frau",
         "text": "Alles klar, dann nehme ich noch etwas weg."
        }
       ],
       "frage": "Wie viel Hackfleisch kauft der Mann?",
       "opt": [
        "350 Gramm",
        "30 Gramm",
        "300 Gramm"
       ],
       "loesung": 2,
       "stelle": "dreihundert reichen mir genau",
       "erklaerung": "Die Verkäuferin bietet dir mehr an, aber der Mann sagt nein. Nach dem Wort nein kommt die richtige Menge."
      },
      {
       "ort": "Im Café",
       "zeilen": [
        {
         "wer": "Frau",
         "text": "Guten Tag, wir sind vier Personen. Haben Sie einen Tisch draußen?"
        },
        {
         "wer": "Mann",
         "text": "Draußen ist leider alles voll. Drinnen am Fenster ist ein Tisch für vier frei."
        },
        {
         "wer": "Frau",
         "text": "Gut, dann nehmen wir den Tisch am Fenster."
        },
        {
         "wer": "Mann",
         "text": "Kommen Sie mit, ich zeige Ihnen den Platz."
        }
       ],
       "frage": "Wo sitzen die Gäste?",
       "opt": [
        "Draußen",
        "Drinnen am Fenster",
        "An der Bar"
       ],
       "loesung": 1,
       "stelle": "den Tisch am Fenster",
       "erklaerung": "Voll heißt für dich: Da ist kein Platz mehr. Danach hörst du, wo der freie Tisch steht."
      },
      {
       "ort": "Im Schreibwarenladen",
       "zeilen": [
        {
         "wer": "Mann",
         "text": "Ich suche ein Heft für meinen Sohn, bitte kariert."
        },
        {
         "wer": "Frau",
         "text": "Karierte Hefte stehen hier links. Ein Heft kostet einen Euro zwanzig, drei Stück kosten drei Euro."
        },
        {
         "wer": "Mann",
         "text": "Dann nehme ich gleich drei Stück."
        },
        {
         "wer": "Frau",
         "text": "Sehr gern, das ist günstiger."
        }
       ],
       "frage": "Wie viel bezahlt der Mann für die Hefte?",
       "opt": [
        "1,20 Euro",
        "3 Euro",
        "2 Euro"
       ],
       "loesung": 1,
       "stelle": "drei Stück kosten drei Euro",
       "erklaerung": "Der erste Preis gilt nur für ein Heft. Der Mann nimmt drei Stück, deshalb zählt für dich der zweite Preis."
      },
      {
       "ort": "Im Kleidergeschäft",
       "zeilen": [
        {
         "wer": "Frau",
         "text": "Der Pullover gefällt mir gut. Haben Sie ihn auch in Blau?"
        },
        {
         "wer": "Mann",
         "text": "In Blau leider nicht. Wir haben ihn nur in Grün und in Schwarz."
        },
        {
         "wer": "Frau",
         "text": "Dann nehme ich den schwarzen."
        },
        {
         "wer": "Mann",
         "text": "Der kostet neunundzwanzig Euro."
        }
       ],
       "frage": "Welche Farbe nimmt die Frau?",
       "opt": [
        "Blau",
        "Grün",
        "Schwarz"
       ],
       "loesung": 2,
       "stelle": "nehme ich den schwarzen",
       "erklaerung": "Die Farbe vom Anfang gibt es nicht. Am Ende hörst du von der Frau selbst, welche Farbe sie mitnimmt."
      }
     ]
    },
    {
     "nr": 2,
     "art": "durchsage",
     "aufgaben": [
      {
       "ort": "In der Sporthalle",
       "wer": "Mann",
       "text": "Achtung, eine Durchsage für alle Kinder. Das Training beginnt heute zehn Minuten später. Bitte wartet noch in der Umkleide. Flaschen bitte nicht mit in die Halle nehmen.",
       "satz": "Das Training beginnt später.",
       "loesung": true,
       "stelle": "zehn Minuten später",
       "erklaerung": "Das Wort später hörst du direkt im zweiten Satz. Die Zahl brauchst du für diesen Satz gar nicht."
      },
      {
       "ort": "Im Hotel beim Frühstück",
       "wer": "Frau",
       "text": "Guten Morgen, liebe Gäste. Der Kaffeeautomat ist heute leider kaputt. Kaffee und Tee bekommen Sie an der Bar. Das Buffet ist ganz normal geöffnet.",
       "satz": "Es gibt heute kein Frühstück.",
       "loesung": false,
       "stelle": "Das Buffet ist ganz normal geöffnet",
       "erklaerung": "Nur der Automat ist kaputt, nicht das ganze Frühstück. Der letzte Satz sagt dir das ganz klar."
      },
      {
       "ort": "An der Autobahnraststätte",
       "wer": "Mann",
       "text": "Achtung, eine Information für unsere Gäste. Der Parkplatz vor dem Haus wird heute repariert. Bitte parken Sie hinter dem Gebäude. Der Weg ist zu Fuß nur zwei Minuten.",
       "satz": "Man soll hinter dem Gebäude parken.",
       "loesung": true,
       "stelle": "parken Sie hinter dem Gebäude",
       "erklaerung": "Zuerst hörst du den Parkplatz vorne, aber der ist zu. Der neue Platz kommt nach dem Wort bitte."
      },
      {
       "ort": "Im Konzerthaus",
       "wer": "Frau",
       "text": "Liebe Gäste, das Konzert beginnt in zehn Minuten. Bitte schalten Sie jetzt Ihre Handys aus. In der Pause gibt es Getränke im Foyer.",
       "satz": "In der Pause gibt es Getränke im ersten Stock.",
       "loesung": false,
       "stelle": "Getränke im Foyer",
       "erklaerung": "Getränke gibt es wirklich, aber an einem anderen Ort. Du hörst Foyer und nicht erster Stock."
      }
     ]
    },
    {
     "nr": 3,
     "art": "ansage",
     "aufgaben": [
      {
       "von": "Krankenkasse Gesundplus",
       "wer": "Mann",
       "text": "Guten Tag, Frau Nowak, hier ist die Krankenkasse Gesundplus. Wir brauchen noch eine Bescheinigung von Ihrem Arzt. Bitte schicken Sie uns das Papier bis zum zwanzigsten März. Sonst können wir Ihnen das Geld nicht überweisen.",
       "frage": "Bis wann soll Frau Nowak die Bescheinigung schicken?",
       "opt": [
        "Bis zum 20. März",
        "Bis zum 12. März",
        "Bis zum 20. Mai"
       ],
       "loesung": 0,
       "stelle": "bis zum zwanzigsten März",
       "erklaerung": "Zwanzigsten und zwölften klingen am Anfang ähnlich, deshalb hörst du bis zum Ende vom Wort. Der Monat ist März."
      },
      {
       "von": "Schneiderei Nadelöhr",
       "wer": "Frau",
       "text": "Hallo Herr Fischer, hier ist die Schneiderei Nadelöhr. Ihre Hose ist jetzt kürzer und fertig. Sie können sie nicht am Dienstag, sondern erst ab Donnerstag abholen. Das macht dann zwölf Euro.",
       "frage": "Wie viel kostet die Arbeit an der Hose?",
       "opt": [
        "12 Euro",
        "2 Euro",
        "20 Euro"
       ],
       "loesung": 0,
       "stelle": "dann zwölf Euro",
       "erklaerung": "Der Preis kommt ganz am Ende, nach den beiden Tagen. Zwölf und zwanzig verwechselst du leicht, hör auf das Wortende."
      },
      {
       "von": "Sportverein Blau-Weiß",
       "wer": "Mann",
       "text": "Hallo, hier ist der Trainer vom Sportverein Blau-Weiß. Das Spiel am Sonntag ist nicht bei uns, sondern in Rosdorf. Wir treffen uns um neun Uhr am Vereinsheim und fahren zusammen. Bitte denkt an eure Schuhe.",
       "frage": "Wo ist das Spiel am Sonntag?",
       "opt": [
        "Beim eigenen Verein",
        "In Rosdorf",
        "Am Vereinsheim"
       ],
       "loesung": 1,
       "stelle": "sondern in Rosdorf",
       "erklaerung": "Das Vereinsheim ist nur der Treffpunkt für die Fahrt. Den Ort vom Spiel hörst du nach dem Wort sondern."
      },
      {
       "von": "Autovermietung Fahrbar",
       "wer": "Frau",
       "text": "Guten Tag, Herr Aslan, hier ist die Autovermietung Fahrbar. Sie wollten Ihr Auto am Freitag um acht Uhr abholen. Wir öffnen am Freitag aber erst um neun Uhr. Passt Ihnen neun Uhr auch? Bitte rufen Sie kurz zurück.",
       "frage": "Wann kann Herr Aslan das Auto abholen?",
       "opt": [
        "Um 8 Uhr",
        "Um 19 Uhr",
        "Um 9 Uhr"
       ],
       "loesung": 2,
       "stelle": "erst um neun Uhr",
       "erklaerung": "Acht Uhr war dein Wunsch, aber da ist noch zu. Nach dem Wort erst kommt die Zeit, die wirklich geht."
      },
      {
       "von": "Physiotherapie Bewegung",
       "wer": "Mann",
       "text": "Guten Tag, Frau Klein, hier ist die Physiotherapie Bewegung. Ihre Termine beginnen nächste Woche. Der erste Termin ist am Montag um sechzehn Uhr, danach kommen Sie immer mittwochs. Bitte bringen Sie ein großes Handtuch mit.",
       "frage": "Wann ist der erste Termin bei der Physiotherapie?",
       "opt": [
        "Am Mittwoch um 16 Uhr",
        "Am Montag um 6 Uhr",
        "Am Montag um 16 Uhr"
       ],
       "loesung": 2,
       "stelle": "am Montag um sechzehn Uhr",
       "erklaerung": "Mittwoch gilt erst für die späteren Termine. Deinen ersten Termin hast du am Montag."
      }
     ]
    }
   ]
  }
 ]
};
