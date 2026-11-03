/* ============================================================
   deutschoderwas club — HÖREN telc Deutsch B1·B2 Pflege

   Aufbau nach dem offiziellen telc-Format (Übungstest 1 B1·B2 Pflege
   und Tipps zur Prüfungsvorbereitung, geprüft 03.11.2026). Alle Texte
   eigene, Kontext Pflegealltag. Erzeugt aus scratchpad/pflege mit bau.js.
   ============================================================ */

window.HOEREN_TELC_PFL = {
 "niveau": "telcPfl",
 "pruefung": "telc Deutsch B1·B2 Pflege",
 "minuten": 25,
 "punkte": 23,
 "intro": "Der Hören-Teil bei telc B1·B2 Pflege dauert etwa fünfundzwanzig Minuten, und du hörst jeden Text nur einmal: Telefonansagen, kurze Gespräche im Pflegealltag, eine Teambesprechung und Meinungen. Nach jeder Antwort siehst du den Text mit der wichtigen Stelle.",
 "stufen": [
  {
   "nr": 1,
   "titel": "Das Wichtige hören",
   "zeichen": "👂",
   "was": "Telefonansagen und kurze Gespräche."
  },
  {
   "nr": 2,
   "titel": "Länger zuhören",
   "zeichen": "🏥",
   "was": "Teambesprechung, Meinungen erkennen."
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
   "was": "23 Aufgaben, etwa fünfundzwanzig Minuten."
  }
 ],
 "bloecke": [
  {
   "id": "tph1",
   "stufe": 1,
   "titel": "Telefonansagen: Termin, Medikament, Rückruf",
   "kurz": "Praxis, Apotheke, Labor, Angehörige: Jede Ansage hat viele Infos, aber nur eine Frage. Erst die Frage lesen, dann gezielt hören.",
   "ziel": "Nach diesem Block liest du vor dem Hören die Frage und findest in einer Ansage genau das Detail: den Termin, das Medikament oder wie du zurückrufen sollst.",
   "zeichen": "☎️",
   "farbe": "gold",
   "mal": 1,
   "aufgaben": [
    {
     "art": "hoerwahl",
     "ort": "Anrufbeantworter einer Hausarztpraxis",
     "wer": "Frau",
     "text": "Praxis Doktor Brenner, guten Tag. Hausbesuche in Pflegeheimen melden Sie bitte bis zehn Uhr an. Anfragen nach zehn Uhr übernehmen wir erst am nächsten Werktag.",
     "frage": "Bis wann muss man einen Hausbesuch anmelden?",
     "opt": [
      "Bis zehn Uhr.",
      "Bis zum Nachmittag.",
      "Bis zum nächsten Werktag."
     ],
     "loesung": 0,
     "stelle": "melden Sie bitte bis zehn Uhr an",
     "erklaerung": "Der nächste Werktag ist das, was passiert, wenn man zu spät anruft."
    },
    {
     "art": "hoerwahl",
     "ort": "Nachricht einer Apotheke",
     "wer": "Mann",
     "text": "Hier ist die Apotheke am Rathaus. Die Augentropfen für Herrn Klein sind heute leider nicht mehr gekommen. Wir liefern sie morgen früh mit der normalen Tour, zusammen mit den Blistern.",
     "frage": "Wann kommen die Augentropfen?",
     "opt": [
      "Heute Nachmittag.",
      "Morgen früh.",
      "Nächste Woche mit den Blistern."
     ],
     "loesung": 1,
     "stelle": "Wir liefern sie morgen früh",
     "erklaerung": "Die Blister kommen auch morgen früh, zusammen mit den Tropfen."
    },
    {
     "art": "hoerwahl",
     "ort": "Nachricht einer Hausärztin",
     "wer": "Frau",
     "text": "Hallo, Doktor Sander hier. Bei Frau Pohl bitte das Antibiotikum weitergeben, bis die Packung leer ist, auch wenn es ihr schon besser geht. Bitte nicht vorher absetzen.",
     "frage": "Was soll man mit dem Antibiotikum machen?",
     "opt": [
      "Es geben, bis die Packung leer ist.",
      "Es absetzen, wenn es Frau Pohl besser geht.",
      "Eine neue Packung bestellen."
     ],
     "loesung": 0,
     "stelle": "weitergeben, bis die Packung leer ist",
     "erklaerung": "„auch wenn es ihr schon besser geht\" ist die Falle für die erste Antwort."
    },
    {
     "art": "hoerwahl",
     "ort": "Nachricht der Pflegedienstleitung",
     "wer": "Mann",
     "text": "Hallo Irina, hier ist Jürgen. Ruf mich bitte heute noch zurück, aber nicht auf dem Handy, das ist kaputt. Am besten im Büro, ich bin bis sechzehn Uhr da.",
     "frage": "Wie soll Irina Jürgen erreichen?",
     "opt": [
      "Morgen früh im Büro.",
      "Im Büro bis sechzehn Uhr.",
      "Auf dem Handy."
     ],
     "loesung": 1,
     "stelle": "Am besten im Büro, ich bin bis sechzehn Uhr da",
     "erklaerung": "Das Handy ist kaputt, und zurückrufen soll sie heute."
    },
    {
     "art": "hoerwahl",
     "ort": "Anrufbeantworter eines Sanitätshauses",
     "wer": "Frau",
     "text": "Sanitätshaus Lorenz. Bei Problemen mit einem Pflegebett oder einer Wechseldruckmatratze erreichen Sie unseren Notdienst auch am Wochenende unter null eins sieben null, zwei zwei drei vier fünf.",
     "frage": "Wofür gibt es am Wochenende einen Notdienst?",
     "opt": [
      "Für neue Bestellungen.",
      "Für Probleme mit Betten und Matratzen.",
      "Für Rezepte vom Hausarzt."
     ],
     "loesung": 1,
     "stelle": "Bei Problemen mit einem Pflegebett",
     "erklaerung": "Bestellungen und Rezepte werden in der Ansage nicht genannt."
    },
    {
     "art": "hoerwahl",
     "ort": "Nachricht eines Labors",
     "wer": "Mann",
     "text": "Labor Seidel hier. Die Blutprobe von Frau Arndt ist leider geronnen. Wir brauchen eine neue Probe, bitte morgen nüchtern abnehmen, also vor dem Frühstück.",
     "frage": "Wann soll man das Blut abnehmen?",
     "opt": [
      "Heute Nachmittag.",
      "Morgen nach dem Frühstück.",
      "Morgen vor dem Frühstück."
     ],
     "loesung": 2,
     "stelle": "bitte morgen nüchtern abnehmen",
     "erklaerung": "„Nüchtern\" heißt: ohne vorher etwas zu essen, also vor dem Frühstück."
    },
    {
     "art": "hoerwahl",
     "ort": "Nachricht einer Angehörigen",
     "wer": "Frau",
     "text": "Hallo, hier ist Frau Berg. Ich kann am Freitag leider nicht zur Pflegevisite kommen. Geht es auch am Montag um die gleiche Zeit? Bitte rufen Sie mich zurück.",
     "frage": "Was möchte Frau Berg?",
     "opt": [
      "Am Freitag früher kommen.",
      "Dass die Pflegevisite ohne sie stattfindet.",
      "Den Termin auf Montag verschieben."
     ],
     "loesung": 2,
     "stelle": "Geht es auch am Montag um die gleiche Zeit?",
     "erklaerung": "Sie sagt den Freitag ab und fragt nach einem neuen Termin. Sie will dabei sein."
    },
    {
     "art": "hoerwahl",
     "ort": "Warteschleife einer Krankenkasse",
     "wer": "Mann",
     "text": "Für Fragen zu Pflegehilfsmitteln drücken Sie bitte die Eins. Für Fragen zum Pflegegrad die Zwei. Bei allen anderen Anliegen bleiben Sie bitte in der Leitung.",
     "frage": "Was drückt man bei einer Frage zum Pflegegrad?",
     "opt": [
      "Die Eins.",
      "Nichts, man bleibt in der Leitung.",
      "Die Zwei."
     ],
     "loesung": 2,
     "stelle": "Für Fragen zum Pflegegrad die Zwei",
     "erklaerung": "Bei Tastenmenüs merkst du dir nur das Stichwort aus der Frage: Pflegegrad."
    },
    {
     "art": "hoerwahl",
     "ort": "Nachricht einer Kollegin",
     "wer": "Frau",
     "text": "Hallo Tim, Sarah hier. Herr Jung hat heute um elf einen Termin beim Zahnarzt, nicht um zehn, wie es im Kalender steht. Der Fahrdienst kommt um halb elf.",
     "frage": "Wann hat Herr Jung den Termin beim Zahnarzt?",
     "opt": [
      "Um zehn Uhr.",
      "Um halb elf.",
      "Um elf Uhr."
     ],
     "loesung": 2,
     "stelle": "heute um elf einen Termin beim Zahnarzt",
     "erklaerung": "Zehn Uhr ist der Fehler im Kalender, halb elf kommt der Fahrdienst."
    }
   ]
  },
  {
   "id": "tph2",
   "stufe": 1,
   "titel": "Kurze Gespräche: Global und Detail",
   "kurz": "Erst: Worum geht es? Dann: Welches Detail stimmt? Zwei Fragen, zwei Arten zu hören.",
   "ziel": "Nach diesem Block erkennst du in kurzen Gesprächen auf Station und im Pflegedienst zuerst das Thema und danach das wichtige Detail.",
   "zeichen": "💬",
   "farbe": "turq",
   "mal": 1,
   "aufgaben": [
    {
     "art": "hoerwahl",
     "ort": "Gespräch im Dienstzimmer",
     "wer": "Frau",
     "text": "Kannst du mir mal helfen? Frau Wendt will heute nicht duschen. Sie sagt, ihr ist kalt. Ich wasche sie jetzt am Waschbecken, und morgen versuchen wir es noch mal.",
     "frage": "Worum geht es?",
     "opt": [
      "Eine Kollegin ist krank.",
      "Eine Bewohnerin möchte nicht duschen.",
      "Die Dusche ist kaputt."
     ],
     "loesung": 1,
     "stelle": "Frau Wendt will heute nicht duschen",
     "erklaerung": "Globale Frage: Wer will was nicht? Die Dusche selbst ist in Ordnung."
    },
    {
     "art": "hoerwahl",
     "ort": "Gespräch mit einem Bewohner",
     "wer": "Mann",
     "text": "Schwester, das Essen heute war mir zu salzig. Ich soll doch wegen dem Herz wenig Salz essen, hat der Doktor gesagt. Können Sie das mal der Küche sagen?",
     "frage": "Was möchte der Mann?",
     "opt": [
      "Einen Termin beim Arzt.",
      "Mehr Salz im Essen.",
      "Dass die Küche informiert wird."
     ],
     "loesung": 2,
     "stelle": "Können Sie das mal der Küche sagen?",
     "erklaerung": "Der Arzt wird nur als Grund genannt. Die Bitte steht am Ende."
    },
    {
     "art": "hoerwahl",
     "ort": "Gespräch bei der Übergabe",
     "wer": "Frau",
     "text": "Herr Böhm hat heute Mittag kaum gegessen, nur die Suppe. Getrunken hat er gut, fast zwei Liter. Morgen bitte wieder auf das Essen achten.",
     "frage": "Was war heute bei Herrn Böhm das Problem?",
     "opt": [
      "Das Trinken.",
      "Das Essen.",
      "Die Suppe."
     ],
     "loesung": 1,
     "stelle": "kaum gegessen, nur die Suppe",
     "erklaerung": "Getrunken hat er gut. Die Suppe war das Einzige, was er gegessen hat."
    },
    {
     "art": "hoerwahl",
     "ort": "Gespräch mit einer Ärztin",
     "wer": "Frau",
     "text": "Ich habe mir die Wunde angesehen. Sie heilt gut. Wir bleiben bei diesem Verband, aber Sie müssen ihn jetzt nur noch alle drei Tage wechseln, nicht mehr jeden zweiten Tag.",
     "frage": "Was ändert sich?",
     "opt": [
      "Der Verband wird seltener gewechselt.",
      "Es gibt einen neuen Verband.",
      "Der Verband wird jeden Tag gewechselt."
     ],
     "loesung": 0,
     "stelle": "nur noch alle drei Tage wechseln",
     "erklaerung": "Der Verband bleibt gleich. Nur der Abstand zwischen den Wechseln wird größer."
    },
    {
     "art": "hoerwahl",
     "ort": "Gespräch unter Kollegen",
     "wer": "Mann",
     "text": "Ich habe mit Petra getauscht. Ich mache am Samstag ihren Frühdienst, und sie macht dafür meinen Spätdienst am Sonntag. Die Wohnbereichsleitung weiß schon Bescheid.",
     "frage": "Was macht der Mann am Samstag?",
     "opt": [
      "Spätdienst.",
      "Frühdienst.",
      "Er hat frei."
     ],
     "loesung": 1,
     "stelle": "Ich mache am Samstag ihren Frühdienst",
     "erklaerung": "Der Spätdienst ist am Sonntag, und den macht Petra."
    },
    {
     "art": "hoerwahl",
     "ort": "Gespräch mit einer Angehörigen",
     "wer": "Frau",
     "text": "Ich wollte nur sagen, mein Vater bekommt nächste Woche eine neue Brille. Die alte ist ja ganz zerkratzt. Ich bringe sie am Dienstag vorbei.",
     "frage": "Worum geht es?",
     "opt": [
      "Um ein kaputtes Hörgerät.",
      "Um eine neue Brille für den Vater.",
      "Um einen Termin beim Augenarzt."
     ],
     "loesung": 1,
     "stelle": "mein Vater bekommt nächste Woche eine neue Brille",
     "erklaerung": "Ein Augenarzttermin wird nicht erwähnt, nur die fertige Brille."
    },
    {
     "art": "hoerwahl",
     "ort": "Gespräch im ambulanten Pflegedienst",
     "wer": "Mann",
     "text": "Frau Schwarz ist ab morgen für zwei Wochen bei ihrer Tochter. Also bitte nicht hinfahren. Die Medikamente hat die Tochter schon abgeholt.",
     "frage": "Was soll man bei Frau Schwarz tun?",
     "opt": [
      "Die Tochter anrufen.",
      "Zwei Wochen lang nicht hinfahren.",
      "Morgen die Medikamente bringen."
     ],
     "loesung": 1,
     "stelle": "Also bitte nicht hinfahren",
     "erklaerung": "Die Medikamente sind schon abgeholt. Frau Schwarz ist gar nicht zu Hause."
    },
    {
     "art": "hoerwahl",
     "ort": "Gespräch auf Station",
     "wer": "Frau",
     "text": "Der Patient in Zimmer drei hat gerade geklingelt, er hat Bauchschmerzen, so acht von zehn. Ich habe den Stationsarzt schon angerufen, er kommt gleich.",
     "frage": "Was hat die Frau schon gemacht?",
     "opt": [
      "Den Blutdruck gemessen.",
      "Ein Schmerzmittel gegeben.",
      "Den Arzt angerufen."
     ],
     "loesung": 2,
     "stelle": "Ich habe den Stationsarzt schon angerufen",
     "erklaerung": "„schon\" zeigt, was bereits passiert ist. Von einem Schmerzmittel sagt sie nichts."
    },
    {
     "art": "hoerwahl",
     "ort": "Gespräch mit einem Bewohner",
     "wer": "Mann",
     "text": "Ich möchte heute Nachmittag nicht zur Gymnastik. Mein Knie tut weh. Aber zum Kaffee komme ich gern runter.",
     "frage": "Was macht der Mann heute Nachmittag?",
     "opt": [
      "Er bleibt den ganzen Tag im Zimmer.",
      "Er kommt zum Kaffee.",
      "Er geht zur Gymnastik."
     ],
     "loesung": 1,
     "stelle": "zum Kaffee komme ich gern runter",
     "erklaerung": "Nach „Aber\" kommt, was er doch macht."
    }
   ]
  },
  {
   "id": "tph3",
   "stufe": 2,
   "titel": "Teambesprechung: Wer macht was?",
   "kurz": "Namen, Aufgaben, Beschlüsse: In einer Besprechung zählt, wer etwas übernimmt und was am Ende gilt.",
   "ziel": "Nach diesem Block hörst du in einer Teambesprechung heraus, wer welche Aufgabe übernimmt und was beschlossen wird, auch wenn erst andere Vorschläge kommen.",
   "zeichen": "👥",
   "farbe": "rot",
   "mal": 1,
   "aufgaben": [
    {
     "art": "hoerwahl",
     "ort": "Teambesprechung: Ausflug",
     "wer": "Frau",
     "text": "Zum Ausflug am Freitag: Ich kümmere mich um den Bus. Marco, du machst die Liste, wer mitfährt. Und Heike packt die Medikamente für unterwegs.",
     "frage": "Was macht Marco?",
     "opt": [
      "Er schreibt die Liste der Mitfahrer.",
      "Er bestellt den Bus.",
      "Er packt die Medikamente."
     ],
     "loesung": 0,
     "stelle": "Marco, du machst die Liste, wer mitfährt",
     "erklaerung": "Achte auf den Namen: Direkt danach kommt seine Aufgabe."
    },
    {
     "art": "hoerwahl",
     "ort": "Teambesprechung: Pflegevisite",
     "wer": "Mann",
     "text": "Also, dann halten wir fest: Die Pflegevisite bei Frau Engel machen wir nicht am Montag, sondern am Mittwoch, weil die Tochter erst dann kann.",
     "frage": "Was wird beschlossen?",
     "opt": [
      "Die Pflegevisite fällt aus.",
      "Die Tochter kommt am Montag.",
      "Die Pflegevisite findet am Mittwoch statt."
     ],
     "loesung": 2,
     "stelle": "sondern am Mittwoch",
     "erklaerung": "„Dann halten wir fest\" leitet einen Beschluss ein. „nicht ... sondern\" zeigt die Änderung."
    },
    {
     "art": "hoerwahl",
     "ort": "Teambesprechung: Fortbildung",
     "wer": "Frau",
     "text": "Viele haben gefragt, ob die Fortbildung zur Schmerzerfassung auch online geht. Ich habe nachgefragt: Nein, sie ist nur vor Ort, weil wir praktisch üben.",
     "frage": "Was erfahren die Mitarbeiter?",
     "opt": [
      "Die Fortbildung ist online.",
      "Die Fortbildung findet nur vor Ort statt.",
      "Die Fortbildung wird verschoben."
     ],
     "loesung": 1,
     "stelle": "sie ist nur vor Ort",
     "erklaerung": "Das „Nein\" beantwortet die Frage der Kollegen."
    },
    {
     "art": "hoerwahl",
     "ort": "Teambesprechung: Material",
     "wer": "Mann",
     "text": "Ich bestelle das Inkontinenzmaterial ab jetzt nicht mehr selbst. Das macht ab dem ersten Dezember die Verwaltung. Ihr schreibt nur auf die Liste, was fehlt.",
     "frage": "Wer bestellt ab Dezember das Material?",
     "opt": [
      "Die Verwaltung.",
      "Der Mann selbst.",
      "Jede Pflegekraft."
     ],
     "loesung": 0,
     "stelle": "Das macht ab dem ersten Dezember die Verwaltung",
     "erklaerung": "Die Pflegekräfte schreiben nur auf, was fehlt. Bestellen ist nicht ihre Aufgabe."
    },
    {
     "art": "hoerwahl",
     "ort": "Teambesprechung: Zurück zum Thema",
     "wer": "Frau",
     "text": "Gut, dann zurück zu Herrn Schäfer. Wir waren uns ja einig, dass er wieder mehr selbst machen soll. Ab morgen wäscht er sich den Oberkörper allein, wir helfen nur beim Rücken.",
     "frage": "Was soll Herr Schäfer ab morgen tun?",
     "opt": [
      "Er wäscht sich den Oberkörper selbst.",
      "Er soll sich ganz allein waschen.",
      "Er bekommt mehr Hilfe beim Waschen."
     ],
     "loesung": 0,
     "stelle": "wäscht er sich den Oberkörper allein",
     "erklaerung": "Beim Rücken hilft das Team weiter, also wäscht er sich nicht ganz allein."
    },
    {
     "art": "hoerwahl",
     "ort": "Teambesprechung: Vorschlag",
     "wer": "Mann",
     "text": "Ich hätte einen Vorschlag: Wir machen die Übergabe am Bett, also direkt beim Bewohner, nicht mehr im Dienstzimmer. Was meint ihr? Gut, dann probieren wir das ab nächster Woche einen Monat lang.",
     "frage": "Was wird beschlossen?",
     "opt": [
      "Die Übergabe am Bett wird einen Monat lang ausprobiert.",
      "Die Übergabe bleibt im Dienstzimmer.",
      "Die Bewohner kommen zur Übergabe ins Dienstzimmer."
     ],
     "loesung": 0,
     "stelle": "dann probieren wir das ab nächster Woche einen Monat lang",
     "erklaerung": "„Gut, dann\" zeigt: Das Team ist einverstanden, es gibt einen Beschluss."
    },
    {
     "art": "hoerwahl",
     "ort": "Teambesprechung: Erstens, zweitens",
     "wer": "Frau",
     "text": "Zwei Dinge noch. Erstens: Die Temperatur im Medikamentenkühlschrank bitte jeden Morgen eintragen. Zweitens: Die Tür zum Medikamentenraum bleibt immer abgeschlossen, auch wenn man nur kurz rausgeht.",
     "frage": "Was ist die zweite Regel?",
     "opt": [
      "Den Medikamentenraum immer abschließen.",
      "Die Temperatur eintragen.",
      "Den Kühlschrank abschließen."
     ],
     "loesung": 0,
     "stelle": "Die Tür zum Medikamentenraum bleibt immer abgeschlossen",
     "erklaerung": "„Erstens\" und „Zweitens\" zeigen dir die Reihenfolge."
    },
    {
     "art": "hoerwahl",
     "ort": "Teambesprechung: Einwand",
     "wer": "Mann",
     "text": "Ich verstehe die Idee mit den festen Essenszeiten. Aber Frau Lux schläft morgens immer lange. Für sie sollten wir eine Ausnahme machen, sie frühstückt eben um neun.",
     "frage": "Was möchte der Mann?",
     "opt": [
      "Die festen Essenszeiten für alle abschaffen.",
      "Frau Lux früher wecken.",
      "Eine Ausnahme für Frau Lux."
     ],
     "loesung": 2,
     "stelle": "Für sie sollten wir eine Ausnahme machen",
     "erklaerung": "„Ich verstehe die Idee\" heißt: Er ist nicht gegen die Regel, nur gegen sie im Fall von Frau Lux."
    },
    {
     "art": "hoerwahl",
     "ort": "Teambesprechung: Zum Schluss",
     "wer": "Frau",
     "text": "Zum Schluss noch: Wer am Samstag bei der Adventsfeier hilft, bekommt die Stunden gutgeschrieben. Bitte tragt euch bis Mittwoch in die Liste ein.",
     "frage": "Bis wann soll man sich eintragen?",
     "opt": [
      "Bis Mittwoch.",
      "Bis Samstag.",
      "Bis zur nächsten Besprechung."
     ],
     "loesung": 0,
     "stelle": "Bitte tragt euch bis Mittwoch in die Liste ein",
     "erklaerung": "Samstag ist die Feier selbst, nicht die Frist."
    }
   ]
  },
  {
   "id": "tph4",
   "stufe": 2,
   "titel": "Meinungen erkennen",
   "kurz": "Dafür, dagegen oder „ja, aber\"? Die Haltung steckt oft in kleinen Wörtern wie „aber\", „trotzdem\" oder „das stimmt nicht\".",
   "ziel": "Nach diesem Block erkennst du, welche Haltung jemand zu einem Thema aus der Pflege hat, auch wenn er zuerst die Gegenseite nennt.",
   "zeichen": "⚖️",
   "farbe": "lila",
   "mal": 1,
   "aufgaben": [
    {
     "art": "hoerwahl",
     "ort": "Fachtagung: Pflegeroboter",
     "wer": "Frau",
     "text": "Ein Roboter, der Wäsche fährt? Warum nicht. Aber sobald es um die Pflege am Menschen geht, also Waschen, Essen reichen, Trösten, bin ich raus.",
     "frage": "Welche Haltung hat die Frau?",
     "opt": [
      "Sie akzeptiert Roboter nur für Arbeiten ohne direkten Kontakt.",
      "Sie möchte Roboter auch beim Waschen.",
      "Sie lehnt jeden Roboter ab."
     ],
     "loesung": 0,
     "stelle": "sobald es um die Pflege am Menschen geht",
     "erklaerung": "„Warum nicht\" sagt ja zur Wäsche. „bin ich raus\" sagt nein zur Pflege am Menschen."
    },
    {
     "art": "hoerwahl",
     "ort": "Fachtagung: Nachtdienst",
     "wer": "Mann",
     "text": "Viele sagen, der Nachtdienst sei ruhig. Das stimmt einfach nicht. Ich bin nachts für vierzig Bewohner allein zuständig.",
     "frage": "Was meint der Mann?",
     "opt": [
      "Nachts gibt es zu viele Pflegekräfte.",
      "Der Nachtdienst ist ruhig.",
      "Der Nachtdienst ist anstrengend."
     ],
     "loesung": 2,
     "stelle": "Das stimmt einfach nicht",
     "erklaerung": "„Viele sagen\" leitet eine fremde Meinung ein. Danach widerspricht er."
    },
    {
     "art": "hoerwahl",
     "ort": "Radio: Dokumentation",
     "wer": "Frau",
     "text": "Natürlich muss man dokumentieren, das ist Pflicht. Ich finde nur, wir schreiben heute vieles doppelt und dreifach. Das könnte man locker halbieren.",
     "frage": "Was findet die Frau?",
     "opt": [
      "Die Dokumentation ist genau richtig so.",
      "Man könnte viel weniger schreiben.",
      "Man sollte gar nicht mehr dokumentieren."
     ],
     "loesung": 1,
     "stelle": "Das könnte man locker halbieren",
     "erklaerung": "„Natürlich ... Pflicht\" ist ein Zugeständnis. „Ich finde nur\" bringt ihre Kritik."
    },
    {
     "art": "hoerwahl",
     "ort": "Fachtagung: Zeitarbeit",
     "wer": "Mann",
     "text": "Ich war selbst fünf Jahre bei einer Zeitarbeitsfirma. Das Geld war gut, die Dienste konnte ich mir aussuchen. Trotzdem bin ich zurück in ein festes Team. Mir haben die Kollegen gefehlt.",
     "frage": "Warum hat der Mann die Zeitarbeit verlassen?",
     "opt": [
      "Wegen des Geldes.",
      "Wegen der Dienstzeiten.",
      "Weil ihm ein festes Team gefehlt hat."
     ],
     "loesung": 2,
     "stelle": "Mir haben die Kollegen gefehlt",
     "erklaerung": "Geld und Dienste waren gut. „Trotzdem\" zeigt den wirklichen Grund."
    },
    {
     "art": "hoerwahl",
     "ort": "Radio: Pflegekräfte aus dem Ausland",
     "wer": "Frau",
     "text": "Ich freue mich über jede Kollegin aus dem Ausland, ehrlich. Aber dann muss die Einarbeitung auch stimmen. Man kann nicht jemanden am dritten Tag allein in den Nachtdienst schicken.",
     "frage": "Welche Haltung hat die Frau?",
     "opt": [
      "Sie ist dafür, fordert aber eine gute Einarbeitung.",
      "Sie findet den Nachtdienst gut für neue Kollegen.",
      "Sie ist gegen Pflegekräfte aus dem Ausland."
     ],
     "loesung": 0,
     "stelle": "Aber dann muss die Einarbeitung auch stimmen",
     "erklaerung": "Typisches „ja, aber\": Sie ist dafür, stellt aber eine Bedingung."
    },
    {
     "art": "hoerwahl",
     "ort": "Fachtagung: Angehörige",
     "wer": "Mann",
     "text": "Ganz ehrlich, ohne die Angehörigen würde bei uns vieles nicht laufen. Die bringen Kleidung, gehen mit zum Arzt und kennen die Gewohnheiten. Das ist für uns eine große Hilfe.",
     "frage": "Wie sieht der Mann die Angehörigen?",
     "opt": [
      "Als Kontrolle.",
      "Als große Hilfe.",
      "Als Störung bei der Arbeit."
     ],
     "loesung": 1,
     "stelle": "Das ist für uns eine große Hilfe",
     "erklaerung": "Hier gibt es kein „aber\". Seine Haltung ist eindeutig positiv."
    },
    {
     "art": "hoerwahl",
     "ort": "Radio: Haustiere",
     "wer": "Frau",
     "text": "Ein Hund im Heim? Ich weiß nicht. Die Bewohner freuen sich, klar. Aber was ist mit Allergien, mit Hygiene, mit Leuten, die Angst haben? Da bin ich eher skeptisch.",
     "frage": "Welche Haltung hat die Frau?",
     "opt": [
      "Sie hat keine Meinung.",
      "Sie ist sofort dafür.",
      "Sie ist eher dagegen."
     ],
     "loesung": 2,
     "stelle": "Da bin ich eher skeptisch",
     "erklaerung": "„Die Bewohner freuen sich, klar\" ist die Gegenseite. Am Ende sagt sie ihre eigene Meinung."
    },
    {
     "art": "hoerwahl",
     "ort": "Fachtagung: Zwölf-Stunden-Dienste",
     "wer": "Mann",
     "text": "Ob zwölf Stunden gut oder schlecht sind, hängt für mich nur an einer Sache: an den Pausen. Mit echten Pausen geht das. Ohne Pausen ist es gefährlich.",
     "frage": "Wovon hängt es für den Mann ab?",
     "opt": [
      "Von der Zahl der Bewohner.",
      "Vom Gehalt.",
      "Von den Pausen."
     ],
     "loesung": 2,
     "stelle": "hängt für mich nur an einer Sache: an den Pausen",
     "erklaerung": "Er ist weder klar dafür noch dagegen. Seine Meinung hängt an einer Bedingung."
    },
    {
     "art": "hoerwahl",
     "ort": "Radio: Fortbildung",
     "wer": "Frau",
     "text": "Fortbildungen in der Freizeit? Nein. Wenn der Arbeitgeber will, dass ich etwas lerne, dann ist das Arbeitszeit. Punkt.",
     "frage": "Was meint die Frau?",
     "opt": [
      "Man sollte Fortbildungen in der Freizeit machen.",
      "Fortbildungen gehören in die Arbeitszeit.",
      "Fortbildungen sind unnötig."
     ],
     "loesung": 1,
     "stelle": "dann ist das Arbeitszeit",
     "erklaerung": "Sie ist nicht gegen Fortbildungen, sondern dagegen, sie in der Freizeit zu machen."
    }
   ]
  }
 ],
 "teile": [
  {
   "nr": 1,
   "art": "ansage",
   "name": "Hören: Telefonansagen",
   "kurz": "Vier Ansagen, nur EINMAL hören",
   "was": "Vier Nachrichten auf dem Anrufbeantworter, zum Beispiel von der Hausarztpraxis, der Apotheke oder von Angehörigen. Zu jeder eine Aufgabe mit drei Antworten.",
   "tipp": "Lies die Aufgabe vorher: Termin, Medikament, Rückrufnummer? Dann weißt du, worauf du hörst.",
   "zeichen": "☎️",
   "farbe": "turq",
   "punkte": 4,
   "mal": 1,
   "runden": [
    {
     "id": "pfh1s1",
     "titel": "Vier Telefonansagen",
     "aufgaben": [
      {
       "von": "Nachricht der Hausarztpraxis: Praxis Doktor Lehmann",
       "wer": "Frau",
       "text": "Guten Tag, hier ist die Praxis Doktor Lehmann, Anja Berger von der Anmeldung. Ich rufe an wegen Herrn Kraus aus Zimmer zwölf. Der Doktor hat sich die Blutwerte angeschaut, das Kalium ist zu niedrig. Er möchte, dass Herr Kraus ab morgen früh zusätzlich eine Kaliumtablette bekommt, eine am Morgen, zum Frühstück. Das Rezept faxen wir Ihnen heute noch. Die Wassertablette bleibt wie bisher. In zwei Wochen nehmen Sie bitte noch einmal Blut ab, die Röhrchen bringt Ihnen unser Fahrdienst. Danke und auf Wiederhören.",
       "frage": "Was ändert sich ab morgen bei Herrn Kraus?",
       "opt": [
        "Er bekommt morgens zusätzlich eine Kaliumtablette.",
        "Ihm wird morgen früh Blut abgenommen.",
        "Er bekommt keine Wassertablette mehr."
       ],
       "loesung": 0,
       "stelle": "ab morgen früh zusätzlich eine Kaliumtablette bekommt",
       "erklaerung": "Die Wassertablette bleibt, und Blut wird erst in zwei Wochen wieder abgenommen."
      },
      {
       "von": "Nachricht der Apotheke am Markt",
       "wer": "Mann",
       "text": "Guten Tag, Apotheke am Markt, Yıldız hier. Es geht um die Bestellung für den Wohnbereich zwei. Das Schmerzpflaster für Frau Hoffmann ist beim Großhändler gerade nicht lieferbar. Ich habe mit der Hausärztin telefoniert, sie ist einverstanden, dass wir ein gleichwertiges Pflaster von einem anderen Hersteller geben. Gleicher Wirkstoff, gleiche Stärke, nur die Packung sieht anders aus. Bitte sagen Sie das den Kollegen, damit sich niemand wundert. Alles andere bringt unser Bote heute Nachmittag gegen sechzehn Uhr.",
       "frage": "Was teilt die Apotheke mit?",
       "opt": [
        "Die Hausärztin soll ein neues Rezept schreiben.",
        "Frau Hoffmann bekommt ein Pflaster von einem anderen Hersteller.",
        "Frau Hoffmann bekommt vorerst kein Schmerzpflaster."
       ],
       "loesung": 1,
       "stelle": "ein gleichwertiges Pflaster von einem anderen Hersteller",
       "erklaerung": "Das Pflaster fehlt nicht, es kommt nur von einer anderen Firma. Mit der Ärztin ist schon alles geklärt."
      },
      {
       "von": "Nachricht einer Angehörigen: Frau Wagner, Tochter einer Bewohnerin",
       "wer": "Frau",
       "text": "Hallo, hier ist Petra Wagner, die Tochter von Frau Elfriede Wagner aus Zimmer acht. Ich wollte eigentlich morgen um zehn kommen und mit Mama zum Augenarzt fahren. Mein Auto ist aber in der Werkstatt. Mein Bruder kann sie abholen, allerdings erst um halb elf. Der Termin ist um elf, das reicht noch. Könnten Sie Mama bitte schon fertig machen, also angezogen, und ihre Brille und die Versichertenkarte bereitlegen? Vielen Dank, und bis bald.",
       "frage": "Wann und von wem wird Frau Wagner morgen abgeholt?",
       "opt": [
        "Um elf Uhr vom Fahrdienst.",
        "Um halb elf von ihrem Sohn.",
        "Um zehn Uhr von ihrer Tochter."
       ],
       "loesung": 1,
       "stelle": "Mein Bruder kann sie abholen, allerdings erst um halb elf",
       "erklaerung": "Zehn Uhr war der alte Plan der Tochter. Um elf ist der Termin beim Augenarzt."
      },
      {
       "von": "Nachricht des Sanitätshauses Brückner",
       "wer": "Mann",
       "text": "Guten Tag, Sanitätshaus Brückner, mein Name ist Kowalczyk. Ich rufe an wegen der Wechseldruckmatratze für Herrn Schulte. Die Krankenkasse hat heute zugestimmt. Wir würden die Matratze am Donnerstag zwischen acht und zwölf Uhr bringen und gleich aufbauen. Dafür muss das Bett frei sein, Herr Schulte sollte also in der Zeit im Rollstuhl sitzen oder im Gemeinschaftsraum sein. Den Kompressor schließen wir an, und ich zeige dann einer Pflegekraft kurz, wie man den Druck einstellt. Wenn Donnerstag nicht geht, rufen Sie mich bitte zurück.",
       "frage": "Was ist bei der Lieferung am Donnerstag wichtig?",
       "opt": [
        "Eine Pflegekraft muss den Kompressor anschließen.",
        "Das Bett von Herrn Schulte muss frei sein.",
        "Herr Schulte muss bei der Lieferung im Bett liegen."
       ],
       "loesung": 1,
       "stelle": "Dafür muss das Bett frei sein",
       "erklaerung": "Den Kompressor schließt das Sanitätshaus selbst an. Die Pflegekraft lernt nur, den Druck einzustellen."
      }
     ]
    },
    {
     "id": "pfh1s2",
     "titel": "Vier Telefonansagen",
     "aufgaben": [
      {
       "von": "Nachricht der Pflegedienstleitung: Sabine Roth",
       "wer": "Frau",
       "text": "Hallo Marek, hier ist Sabine Roth. Du, ich muss dich um etwas bitten. Für Samstag hat sich Jana krankgemeldet, und ich finde niemanden für den Frühdienst im Wohnbereich drei. Du hättest ja frei. Wenn du einspringen könntest, würdest du dafür den Montag frei bekommen, nicht nur die Stunden gutgeschrieben. Und den Spätdienst am Sonntag übernimmt dann Olga statt dir. Sag mir bitte bis heute Abend Bescheid, per Telefon oder kurz über die Dienstplan-App. Danke dir.",
       "frage": "Was bekommt Marek, wenn er am Samstag einspringt?",
       "opt": [
        "Er bekommt am Montag frei.",
        "Er bekommt die Stunden ausgezahlt.",
        "Er bekommt den Spätdienst am Sonntag."
       ],
       "loesung": 0,
       "stelle": "würdest du dafür den Montag frei bekommen",
       "erklaerung": "Von Geld ist keine Rede, und den Sonntag übernimmt Olga für ihn."
      },
      {
       "von": "Nachricht des Labors Weber und Partner",
       "wer": "Mann",
       "text": "Guten Tag, hier ist das Labor Weber und Partner, Lukas Brandt. Ich rufe wegen einer Urinprobe von heute Morgen an, Bewohnerin Frau Ingrid Seidel. Leider können wir die Probe nicht auswerten, der Becher war nicht beschriftet und kam ohne Anforderungsschein. Wir brauchen bitte eine neue Probe, am besten Morgenurin aus dem Mittelstrahl, und dazu den Schein mit Namen und Geburtsdatum. Unser Fahrer kommt morgen gegen neun. Bis dahin die Probe bitte in den Kühlschrank stellen und nicht im Zimmer stehen lassen.",
       "frage": "Warum braucht das Labor eine neue Probe?",
       "opt": [
        "Weil die Probe zu warm war.",
        "Weil die Probe zu spät gekommen ist.",
        "Weil der Becher keinen Namen hatte."
       ],
       "loesung": 2,
       "stelle": "der Becher war nicht beschriftet",
       "erklaerung": "Der Kühlschrank ist nur ein Hinweis für die neue Probe. Das Problem war die fehlende Beschriftung."
      },
      {
       "von": "Nachricht der Hausarztpraxis Doktor Aydın",
       "wer": "Frau",
       "text": "Guten Tag, Praxis Doktor Aydın, hier ist Frau Neumann. Sie hatten heute früh wegen Herrn Becker angerufen, wegen seines Fiebers. Die Doktorin kann heute keinen Hausbesuch mehr machen, sie kommt morgen gegen acht. Bis dahin messen Sie bitte alle vier Stunden die Temperatur und achten Sie darauf, dass er genug trinkt, mindestens anderthalb Liter. Wenn das Fieber über neununddreißig steigt oder er schlecht Luft bekommt, rufen Sie bitte den ärztlichen Bereitschaftsdienst oder bei Atemnot sofort den Notruf.",
       "frage": "Was sollen die Pflegekräfte bis morgen tun?",
       "opt": [
        "Herrn Becker am Nachmittag in die Praxis bringen.",
        "Sofort den Notruf wählen.",
        "Regelmäßig Fieber messen und auf das Trinken achten."
       ],
       "loesung": 2,
       "stelle": "messen Sie bitte alle vier Stunden die Temperatur",
       "erklaerung": "Den Notruf braucht man nur bei Atemnot. Zuerst sollen die Pflegekräfte beobachten und messen."
      },
      {
       "von": "Nachricht eines Angehörigen: Herr Pavlov, Sohn eines Bewohners",
       "wer": "Mann",
       "text": "Ja, hallo, hier ist Dimitri Pavlov, ich bin der Sohn von Herrn Pavlov aus Zimmer fünfzehn. Ich war gestern zu Besuch, und mir ist aufgefallen, dass mein Vater seine Hörgeräte nicht drin hatte. Er hat fast nichts verstanden und war ganz durcheinander. Ich glaube, die Batterien sind leer. Ich habe neue gekauft und lege sie heute Abend in seine Nachttischschublade, in die obere. Könnten Sie die bitte morgen früh einsetzen? Er schafft das allein nicht mehr. Danke.",
       "frage": "Worum bittet Herr Pavlov?",
       "opt": [
        "Batterien für die Hörgeräte zu kaufen.",
        "Die neuen Batterien in die Hörgeräte einzusetzen.",
        "Neue Hörgeräte für seinen Vater zu bestellen."
       ],
       "loesung": 1,
       "stelle": "Könnten Sie die bitte morgen früh einsetzen?",
       "erklaerung": "Die Batterien hat er schon gekauft. Das Pflegeteam soll sie nur einsetzen."
      }
     ]
    },
    {
     "id": "pfh1s3",
     "titel": "Vier Telefonansagen",
     "aufgaben": [
      {
       "von": "Nachricht des Sanitätshauses Hellmann",
       "wer": "Frau",
       "text": "Sanitätshaus Hellmann, Kerstin Albrecht am Apparat. Ich rufe an wegen der Kompressionsstrümpfe für Frau Lorenz. Letzte Woche haben wir ja am Nachmittag gemessen, und da waren ihre Beine schon geschwollen. So stimmen die Maße nicht. Wir müssen deshalb noch einmal messen, und zwar morgens, gleich nach dem Aufstehen. Ich könnte am Mittwoch um sieben Uhr dreißig kommen. Bitte lassen Sie Frau Lorenz bis dahin im Bett und ziehen Sie sie noch nicht an. Rufen Sie mich zurück, wenn das nicht klappt.",
       "frage": "Warum kommt Frau Albrecht am Mittwoch früh?",
       "opt": [
        "Um Frau Lorenz beim Anziehen zu helfen.",
        "Um die fertigen Strümpfe zu bringen.",
        "Um die Beine noch einmal zu messen."
       ],
       "loesung": 2,
       "stelle": "Wir müssen deshalb noch einmal messen",
       "erklaerung": "Die Strümpfe sind noch nicht fertig. Am Morgen sind die Beine nicht geschwollen, deshalb misst man dann."
      },
      {
       "von": "Nachricht der Pflegedienstleitung: Stefan Krüger",
       "wer": "Mann",
       "text": "Hallo zusammen, hier ist Stefan Krüger von der Pflegedienstleitung. Eine Info für alle im Haus. Morgen ist die Pflichtschulung zum Brandschutz. Sie findet nicht wie geplant im Speisesaal statt, sondern im Schulungsraum im Keller, weil im Speisesaal der Boden gemacht wird. Beginn ist um vierzehn Uhr, sie dauert etwa eine Stunde. Wer im Frühdienst ist, geht direkt nach der Übergabe hin. Bitte unterschreibt danach die Teilnehmerliste, sonst zählt die Schulung nicht.",
       "frage": "Wo findet die Schulung statt?",
       "opt": [
        "Im Dienstzimmer bei der Übergabe.",
        "Im Speisesaal.",
        "Im Schulungsraum im Keller."
       ],
       "loesung": 2,
       "stelle": "sondern im Schulungsraum im Keller",
       "erklaerung": "Der Speisesaal war der alte Plan. Die Übergabe ist nur der Zeitpunkt für den Frühdienst."
      },
      {
       "von": "Nachricht der Rosen-Apotheke",
       "wer": "Frau",
       "text": "Guten Tag, Rosen-Apotheke, Weiß. Eine Rückfrage zu dem Rezept für Herrn Engel. Darauf steht ein Antibiotikum, dreimal täglich. Herr Engel bekommt laut unserer Liste aber auch einen Blutverdünner, und die beiden passen nicht gut zusammen, der Gerinnungswert kann sich verändern. Ich habe die Praxis schon informiert, die Ärztin ruft Sie heute noch an. Bitte geben Sie das Antibiotikum erst, wenn Sie mit ihr gesprochen haben. Die Tabletten liefern wir trotzdem schon mit.",
       "frage": "Was soll das Pflegeteam tun?",
       "opt": [
        "Die Tabletten selbst in der Apotheke abholen.",
        "Den Blutverdünner sofort absetzen.",
        "Mit dem Antibiotikum warten, bis die Ärztin angerufen hat."
       ],
       "loesung": 2,
       "stelle": "Bitte geben Sie das Antibiotikum erst, wenn Sie mit ihr gesprochen haben",
       "erklaerung": "Vom Absetzen des Blutverdünners sagt die Apotheke nichts, und die Tabletten werden geliefert."
      },
      {
       "von": "Nachricht des Labors am Klinikum",
       "wer": "Mann",
       "text": "Guten Tag, hier ist das Labor am Klinikum, Jansen. Es geht um den Nasenabstrich von Herrn Albers, den Sie am Montag geschickt haben. Das Ergebnis ist da: Herr Albers hat einen multiresistenten Keim. Der Befund geht heute auch an den Hausarzt. Ich sage es Ihnen aber vorab, damit Sie die Hygienemaßnahmen schon heute beginnen können. Bitte informieren Sie auch Ihre Hygienebeauftragte. Bei Fragen erreichen Sie mich bis fünfzehn Uhr.",
       "frage": "Warum ruft das Labor an?",
       "opt": [
        "Weil der Hausarzt nicht erreichbar ist.",
        "Weil der Abstrich wiederholt werden muss.",
        "Damit das Team sofort mit den Hygienemaßnahmen beginnen kann."
       ],
       "loesung": 2,
       "stelle": "damit Sie die Hygienemaßnahmen schon heute beginnen können",
       "erklaerung": "Der Hausarzt bekommt den Befund auch. Das Labor ruft an, damit niemand Zeit verliert."
      }
     ]
    }
   ]
  },
  {
   "nr": 2,
   "art": "gespraech",
   "name": "Hören: Gespräche im Pflegealltag",
   "kurz": "Fünf kurze Gespräche, je zwei Aufgaben",
   "was": "Fünf kurze Gespräche mit Bewohnern, Angehörigen oder Kollegen. Zuerst: Worum geht es, richtig oder falsch? Dann eine Detailfrage. Alles nur einmal.",
   "tipp": "Bei der ersten Aufgabe zählt das Thema. Bei der zweiten das Detail, und das ändert sich oft noch im Gespräch.",
   "zeichen": "💬",
   "farbe": "gold",
   "punkte": 10,
   "mal": 1,
   "runden": [
    {
     "id": "pfh2s1",
     "titel": "Fünf Gespräche: Frühdienst im Altenheim",
     "aufgaben": [
      {
       "ort": "Gespräch 1, Abschnitt 1",
       "zeilen": [
        {
         "wer": "Frau",
         "text": "Guten Morgen, Herr Hoffmann. Haben Sie gut geschlafen?"
        },
        {
         "wer": "Mann",
         "text": "Ach, es geht. Die Hüfte hat wieder wehgetan, ich bin dreimal aufgewacht."
        },
        {
         "wer": "Frau",
         "text": "Rechts, wie immer? Wie stark ist es denn jetzt, wenn null gar nichts ist und zehn ganz schlimm?"
        },
        {
         "wer": "Mann",
         "text": "Jetzt so fünf. Heute Nacht war es mehr, vielleicht sieben."
        }
       ],
       "satz": "Herr Hoffmann hatte in der Nacht Schmerzen.",
       "loesung": true,
       "stelle": "Die Hüfte hat wieder wehgetan",
       "erklaerung": "Er ist wegen der Hüfte dreimal aufgewacht. In der Nacht waren die Schmerzen sogar stärker als jetzt."
      },
      {
       "ort": "Gespräch 1, Abschnitt 2",
       "zeilen": [
        {
         "wer": "Frau",
         "text": "Okay. Sie haben ja für Schmerzen eine Bedarfsmedikation. Ich frage gleich bei der Schichtleitung nach und bringe Ihnen dann die Tablette."
        },
        {
         "wer": "Mann",
         "text": "Kann ich nicht erst frühstücken? Auf nüchternen Magen vertrage ich die nicht."
        },
        {
         "wer": "Frau",
         "text": "Doch, natürlich. Dann gibt es die Tablette zum Frühstück, und ich trage das gleich ein. In einer Stunde frage ich Sie noch einmal, wie es Ihnen geht."
        }
       ],
       "frage": "Wann bekommt Herr Hoffmann die Schmerztablette?",
       "opt": [
        "Erst nach einer Stunde.",
        "Sofort, vor dem Frühstück.",
        "Zum Frühstück."
       ],
       "loesung": 2,
       "stelle": "Dann gibt es die Tablette zum Frühstück",
       "erklaerung": "Nach einer Stunde fragt die Pflegekraft nur noch einmal nach den Schmerzen."
      },
      {
       "ort": "Gespräch 2, Abschnitt 1",
       "zeilen": [
        {
         "wer": "Mann",
         "text": "Kannst du mir gleich mal bei Frau Brandt helfen? Ich will sie umlagern, allein schaffe ich das nicht."
        },
        {
         "wer": "Frau",
         "text": "Jetzt sofort? Ich bin gerade mitten in der Medikamentenrunde."
        },
        {
         "wer": "Mann",
         "text": "Nee, in zehn Minuten reicht. Sie liegt seit sechs auf dem Rücken, das steht so im Lagerungsplan."
        },
        {
         "wer": "Frau",
         "text": "Okay, ich komme, wenn ich mit dem Wagen fertig bin."
        }
       ],
       "satz": "Die Frau soll ihre Arbeit sofort unterbrechen.",
       "loesung": false,
       "stelle": "in zehn Minuten reicht",
       "erklaerung": "Sie macht zuerst die Medikamentenrunde fertig. Der Kollege braucht sie erst in zehn Minuten."
      },
      {
       "ort": "Gespräch 2, Abschnitt 2",
       "zeilen": [
        {
         "wer": "Mann",
         "text": "Gut. Und schau dir dann mal das Steißbein an. Da ist eine Rötung, die war gestern noch nicht da."
        },
        {
         "wer": "Frau",
         "text": "Hast du den Fingertest gemacht?"
        },
        {
         "wer": "Mann",
         "text": "Ja, die Rötung bleibt, wenn man draufdrückt. Ich glaube, das ist ein Dekubitus, Kategorie eins."
        },
        {
         "wer": "Frau",
         "text": "Dann muss das in die Dokumentation, mit Foto, und wir sagen es der Schichtleitung. Und ab jetzt lagern wir sie alle zwei Stunden."
        }
       ],
       "frage": "Was beschließen die beiden?",
       "opt": [
        "Die Rötung wird dokumentiert, und Frau Brandt wird öfter gelagert.",
        "Frau Brandt soll nur noch auf dem Rücken liegen.",
        "Der Hausarzt soll sofort kommen."
       ],
       "loesung": 0,
       "stelle": "Dann muss das in die Dokumentation, mit Foto",
       "erklaerung": "Informiert wird die Schichtleitung, nicht der Hausarzt. Auf dem Rücken soll sie gerade nicht liegen bleiben."
      },
      {
       "ort": "Gespräch 3, Abschnitt 1",
       "zeilen": [
        {
         "wer": "Frau",
         "text": "Herr Nowak, wie war denn heute früh der Blutzucker bei Frau Kessler?"
        },
        {
         "wer": "Mann",
         "text": "Zweihundertsechzig, Frau Doktor. Das ist schon der dritte Morgen, an dem er so hoch ist."
        },
        {
         "wer": "Frau",
         "text": "Hm. Isst sie abends noch etwas Süßes?"
        },
        {
         "wer": "Mann",
         "text": "Ihre Tochter bringt ihr manchmal Schokolade mit, das haben wir schon gesehen."
        }
       ],
       "satz": "Der Blutzucker von Frau Kessler war mehrmals zu hoch.",
       "loesung": true,
       "stelle": "Das ist schon der dritte Morgen",
       "erklaerung": "Drei Morgen hintereinander ist der Wert zu hoch."
      },
      {
       "ort": "Gespräch 3, Abschnitt 2",
       "zeilen": [
        {
         "wer": "Frau",
         "text": "Dann sprechen Sie bitte erst einmal mit der Tochter. Das Insulin ändere ich jetzt noch nicht."
        },
        {
         "wer": "Mann",
         "text": "Und wie oft sollen wir messen?"
        },
        {
         "wer": "Frau",
         "text": "Die nächsten drei Tage bitte viermal am Tag, vor jeder Mahlzeit und vor dem Schlafen. Am Freitag schaue ich mir die Werte an."
        }
       ],
       "frage": "Was sollen die Pflegekräfte tun?",
       "opt": [
        "Die Insulinmenge erhöhen.",
        "Am Freitag die Tochter anrufen.",
        "Drei Tage lang öfter den Blutzucker messen."
       ],
       "loesung": 2,
       "stelle": "Die nächsten drei Tage bitte viermal am Tag",
       "erklaerung": "Das Insulin bleibt gleich. Am Freitag schaut sich die Ärztin die Werte an."
      },
      {
       "ort": "Gespräch 4, Abschnitt 1",
       "zeilen": [
        {
         "wer": "Mann",
         "text": "Entschuldigung, haben Sie kurz Zeit? Ich bin der Sohn von Frau Weber."
        },
        {
         "wer": "Frau",
         "text": "Ja, natürlich. Worum geht es?"
        },
        {
         "wer": "Mann",
         "text": "Meine Mutter sagt, ihre Strickjacke ist weg, die blaue. Die war letzte Woche in der Wäsche und ist nicht zurückgekommen."
        },
        {
         "wer": "Frau",
         "text": "Oh, das tut mir leid. War da ein Namensschild drin?"
        }
       ],
       "satz": "Der Mann sucht ein Kleidungsstück seiner Mutter.",
       "loesung": true,
       "stelle": "ihre Strickjacke ist weg",
       "erklaerung": "Die blaue Strickjacke ist nach der Wäsche nicht zurückgekommen."
      },
      {
       "ort": "Gespräch 4, Abschnitt 2",
       "zeilen": [
        {
         "wer": "Mann",
         "text": "Ich glaube nicht, die haben wir neu gekauft."
        },
        {
         "wer": "Frau",
         "text": "Dann ist sie vielleicht bei einem anderen Bewohner gelandet. Ich schaue nachher in der Wäschekammer bei den Sachen ohne Namen nach."
        },
        {
         "wer": "Mann",
         "text": "Danke. Und die neuen Sachen, die ich heute mitgebracht habe?"
        },
        {
         "wer": "Frau",
         "text": "Die geben Sie bitte vorne im Büro ab. Da werden Namensschilder eingenäht, bevor die Sachen in die Wäsche gehen."
        }
       ],
       "frage": "Was soll der Mann mit der neuen Kleidung machen?",
       "opt": [
        "Sie direkt in die Wäschekammer bringen.",
        "Sie im Büro abgeben.",
        "Sie selbst mit Namen beschriften."
       ],
       "loesung": 1,
       "stelle": "Die geben Sie bitte vorne im Büro ab",
       "erklaerung": "In die Wäschekammer geht die Pflegekraft selbst. Die Namensschilder näht das Büro ein."
      },
      {
       "ort": "Gespräch 5, Abschnitt 1",
       "zeilen": [
        {
         "wer": "Frau",
         "text": "Milan, du warst doch vorhin bei Herrn Krause. Hat er gefrühstückt?"
        },
        {
         "wer": "Mann",
         "text": "Kaum. Zwei Löffel Brei, dann hat er den Kopf weggedreht. Trinken wollte er auch nicht."
        },
        {
         "wer": "Frau",
         "text": "Das war gestern schon so. Hast du das eingetragen?"
        },
        {
         "wer": "Mann",
         "text": "Noch nicht, mache ich gleich."
        }
       ],
       "satz": "Herr Krause hat heute gut gegessen und getrunken.",
       "loesung": false,
       "stelle": "Zwei Löffel Brei, dann hat er den Kopf weggedreht",
       "erklaerung": "Er hat kaum gegessen und nichts getrunken, wie schon gestern."
      },
      {
       "ort": "Gespräch 5, Abschnitt 2",
       "zeilen": [
        {
         "wer": "Frau",
         "text": "Gut. Ab heute führen wir bei ihm ein Trinkprotokoll. Jedes Glas, auch wenn es nur halb ist."
        },
        {
         "wer": "Mann",
         "text": "Soll ich ihm vielleicht Saft anbieten statt Tee? Den mag er lieber."
        },
        {
         "wer": "Frau",
         "text": "Ja, probier das. Und wenn er bis Mittag unter einem halben Liter bleibt, rufe ich den Hausarzt an."
        }
       ],
       "frage": "Was wird ab heute bei Herrn Krause gemacht?",
       "opt": [
        "Alles, was er trinkt, wird aufgeschrieben.",
        "Er bekommt nur noch Brei.",
        "Er bekommt keinen Tee mehr."
       ],
       "loesung": 0,
       "stelle": "Ab heute führen wir bei ihm ein Trinkprotokoll",
       "erklaerung": "Saft ist nur ein Versuch, Tee ist nicht verboten. Fest beschlossen ist das Trinkprotokoll."
      }
     ]
    },
    {
     "id": "pfh2s2",
     "titel": "Fünf Gespräche: Ambulanter Pflegedienst",
     "aufgaben": [
      {
       "ort": "Gespräch 1, Abschnitt 1",
       "zeilen": [
        {
         "wer": "Frau",
         "text": "Guten Morgen, Herr Schneider, ich bin es, Lena vom Pflegedienst. Ich habe geklingelt, aber Sie haben nicht aufgemacht."
        },
        {
         "wer": "Mann",
         "text": "Ach, Entschuldigung, ich war im Bad. Haben Sie den Schlüssel genommen?"
        },
        {
         "wer": "Frau",
         "text": "Ja, aus dem Schlüsselkasten. Ihre Tochter hat uns ja den Code gegeben. Wie geht es Ihnen heute?"
        },
        {
         "wer": "Mann",
         "text": "Gut, gut. Nur die Beine sind ein bisschen dick."
        }
       ],
       "satz": "Herr Schneider hat der Pflegekraft die Tür geöffnet.",
       "loesung": false,
       "stelle": "Ja, aus dem Schlüsselkasten",
       "erklaerung": "Er war im Bad. Die Pflegekraft hat den Schlüssel aus dem Schlüsselkasten genommen."
      },
      {
       "ort": "Gespräch 1, Abschnitt 2",
       "zeilen": [
        {
         "wer": "Frau",
         "text": "Zeigen Sie mal. Ja, die Knöchel sind geschwollen. Haben Sie gestern Abend die Beine hochgelegt?"
        },
        {
         "wer": "Mann",
         "text": "Nein, ich habe bis spät im Sessel ferngesehen."
        },
        {
         "wer": "Frau",
         "text": "Okay. Ich ziehe Ihnen jetzt die Kompressionsstrümpfe an, und heute Abend legen Sie die Beine bitte auf den Hocker. Wenn es morgen nicht besser ist, sage ich dem Hausarzt Bescheid."
        }
       ],
       "frage": "Was soll Herr Schneider heute Abend tun?",
       "opt": [
        "Den Hausarzt anrufen.",
        "Die Strümpfe selbst ausziehen.",
        "Die Beine hochlegen."
       ],
       "loesung": 2,
       "stelle": "heute Abend legen Sie die Beine bitte auf den Hocker",
       "erklaerung": "Den Hausarzt informiert die Pflegekraft selbst, und nur wenn es morgen nicht besser ist."
      },
      {
       "ort": "Gespräch 2, Abschnitt 1",
       "zeilen": [
        {
         "wer": "Mann",
         "text": "Hallo Steffi, ich bin gerade bei Frau Graf. Sie hat ihre Tabletten von gestern Abend nicht genommen, die liegen noch im Dosett."
        },
        {
         "wer": "Frau",
         "text": "Welche denn?"
        },
        {
         "wer": "Mann",
         "text": "Das Fach für abends ist voll. Also das Blutdruckmittel und die Wassertablette."
        },
        {
         "wer": "Frau",
         "text": "Hm, das ist nicht gut. Wie ist der Blutdruck jetzt?"
        }
       ],
       "satz": "Frau Graf hat Medikamente nicht genommen.",
       "loesung": true,
       "stelle": "Das Fach für abends ist voll",
       "erklaerung": "Die Abendtabletten liegen noch im Dosett."
      },
      {
       "ort": "Gespräch 2, Abschnitt 2",
       "zeilen": [
        {
         "wer": "Mann",
         "text": "Hundertsiebzig zu fünfundneunzig. Sonst geht es ihr gut, kein Schwindel, keine Kopfschmerzen."
        },
        {
         "wer": "Frau",
         "text": "Gib ihr die Morgentabletten ganz normal, die vom Abend bitte nicht nachgeben. Ich rufe den Hausarzt an und melde mich."
        },
        {
         "wer": "Mann",
         "text": "Alles klar. Ich messe dann in einer halben Stunde noch mal."
        }
       ],
       "frage": "Was soll der Mann mit den Tabletten machen?",
       "opt": [
        "Die Abendtabletten jetzt nachgeben.",
        "Nur die Morgentabletten geben.",
        "Alle Tabletten zusammen geben."
       ],
       "loesung": 1,
       "stelle": "Gib ihr die Morgentabletten ganz normal",
       "erklaerung": "Die vergessenen Abendtabletten soll er ausdrücklich nicht nachgeben."
      },
      {
       "ort": "Gespräch 3, Abschnitt 1",
       "zeilen": [
        {
         "wer": "Frau",
         "text": "Gut, dass Sie da sind. Mein Mann ist heute Nacht im Flur hingefallen."
        },
        {
         "wer": "Mann",
         "text": "Oh. Hat er sich verletzt?"
        },
        {
         "wer": "Frau",
         "text": "Er hat einen blauen Fleck am Arm, sonst nichts, sagt er. Aber ich konnte ihn nicht allein hochheben, ich musste den Nachbarn holen."
        },
        {
         "wer": "Mann",
         "text": "Das war richtig so. Ich schaue ihn mir gleich genau an."
        }
       ],
       "satz": "Der Ehemann der Frau ist gestürzt.",
       "loesung": true,
       "stelle": "Mein Mann ist heute Nacht im Flur hingefallen",
       "erklaerung": "Er ist in der Nacht im Flur gestürzt und hat einen blauen Fleck."
      },
      {
       "ort": "Gespräch 3, Abschnitt 2",
       "zeilen": [
        {
         "wer": "Mann",
         "text": "Warum ist er denn nachts aufgestanden?"
        },
        {
         "wer": "Frau",
         "text": "Zur Toilette. Er muss jede Nacht zwei oder drei Mal."
        },
        {
         "wer": "Mann",
         "text": "Dann wäre ein Toilettenstuhl neben dem Bett eine Idee. Und ein Nachtlicht im Flur. Den Toilettenstuhl kann der Hausarzt verordnen, das frage ich heute noch an."
        }
       ],
       "frage": "Was schlägt der Mann vor?",
       "opt": [
        "Einen Hausnotruf zu bestellen.",
        "Einen Toilettenstuhl neben das Bett zu stellen.",
        "Nachts öfter den Nachbarn um Hilfe zu bitten."
       ],
       "loesung": 1,
       "stelle": "ein Toilettenstuhl neben dem Bett",
       "erklaerung": "Ein Hausnotruf wird nicht genannt. Der Nachbar war nur die Hilfe in dieser Nacht."
      },
      {
       "ort": "Gespräch 4, Abschnitt 1",
       "zeilen": [
        {
         "wer": "Frau",
         "text": "Rashid, hast du kurz Zeit? Es geht um deine Tour am Wochenende."
        },
        {
         "wer": "Mann",
         "text": "Ja klar. Ist was mit den Schlüsseln?"
        },
        {
         "wer": "Frau",
         "text": "Nein. Wir haben zwei neue Patienten in Oberdorf, beide mit Insulin. Ich würde sie gern dir geben, weil du ja da in der Nähe wohnst."
        },
        {
         "wer": "Mann",
         "text": "Hm, dann wird die Tour aber ganz schön lang."
        }
       ],
       "satz": "Es gibt ein Problem mit den Schlüsseln.",
       "loesung": false,
       "stelle": "Nein. Wir haben zwei neue Patienten in Oberdorf",
       "erklaerung": "Die Schlüssel sind nur seine Vermutung. Es geht um zwei neue Patienten."
      },
      {
       "ort": "Gespräch 4, Abschnitt 2",
       "zeilen": [
        {
         "wer": "Frau",
         "text": "Ich weiß. Deshalb nehme ich dir Frau Lindner und Herrn Busch raus, die fährt dann Kathrin."
        },
        {
         "wer": "Mann",
         "text": "Ah, okay. Dann passt das."
        },
        {
         "wer": "Frau",
         "text": "Und für die Neuen ist die Pflegeplanung schon im Tablet. Lies sie dir bitte vorher durch, vor allem die Insulinmengen."
        }
       ],
       "frage": "Was soll Rashid vor dem Wochenende tun?",
       "opt": [
        "Mit Kathrin die Tour tauschen.",
        "Die Pflegeplanung der neuen Patienten lesen.",
        "Frau Lindner und Herrn Busch besuchen."
       ],
       "loesung": 1,
       "stelle": "Lies sie dir bitte vorher durch",
       "erklaerung": "Frau Lindner und Herrn Busch übernimmt Kathrin. Getauscht wird nicht die ganze Tour."
      },
      {
       "ort": "Gespräch 5, Abschnitt 1",
       "zeilen": [
        {
         "wer": "Mann",
         "text": "Sie sind heute aber spät dran. Ich warte schon seit acht."
        },
        {
         "wer": "Frau",
         "text": "Ja, tut mir leid, Herr Wójcik. Bei einer Patientin vor Ihnen hat es länger gedauert, ein Notfall."
        },
        {
         "wer": "Mann",
         "text": "Hätten Sie nicht anrufen können?"
        },
        {
         "wer": "Frau",
         "text": "Da haben Sie recht, das hätte ich machen sollen."
        }
       ],
       "satz": "Die Pflegekraft kommt später als sonst.",
       "loesung": true,
       "stelle": "Bei einer Patientin vor Ihnen hat es länger gedauert",
       "erklaerung": "Wegen eines Notfalls kommt sie zu spät, Herr Wójcik wartet schon seit acht."
      },
      {
       "ort": "Gespräch 5, Abschnitt 2",
       "zeilen": [
        {
         "wer": "Mann",
         "text": "Und mein Termin bei der Physiotherapie ist um zehn."
        },
        {
         "wer": "Frau",
         "text": "Dann machen wir heute nur das Duschen und die Strümpfe, das schaffen wir bis halb zehn. Den Verband wechsle ich heute Nachmittag, ich komme um drei noch mal vorbei."
        },
        {
         "wer": "Mann",
         "text": "Gut, so geht das."
        }
       ],
       "frage": "Wann wechselt die Pflegekraft den Verband?",
       "opt": [
        "Am Nachmittag.",
        "Um zehn Uhr.",
        "Vor dem Duschen."
       ],
       "loesung": 0,
       "stelle": "Den Verband wechsle ich heute Nachmittag",
       "erklaerung": "Um zehn hat Herr Wójcik Physiotherapie. Am Morgen ist nur Zeit für Duschen und Strümpfe."
      }
     ]
    },
    {
     "id": "pfh2s3",
     "titel": "Fünf Gespräche: Station im Krankenhaus",
     "aufgaben": [
      {
       "ort": "Gespräch 1, Abschnitt 1",
       "zeilen": [
        {
         "wer": "Frau",
         "text": "Herr Kılıç, wie geht es Herrn Roth in Zimmer neun? Er ist doch gestern an der Hüfte operiert worden."
        },
        {
         "wer": "Mann",
         "text": "Eigentlich ganz gut. Er hat heute Morgen zum ersten Mal mit der Physiotherapie am Bett gestanden."
        },
        {
         "wer": "Frau",
         "text": "Sehr schön. Und die Schmerzen?"
        },
        {
         "wer": "Mann",
         "text": "Bei Belastung sagt er sechs, in Ruhe zwei."
        }
       ],
       "satz": "Herr Roth hat heute zum ersten Mal nach der Operation gestanden.",
       "loesung": true,
       "stelle": "zum ersten Mal mit der Physiotherapie am Bett gestanden",
       "erklaerung": "Mit der Physiotherapie hat er heute Morgen zum ersten Mal am Bett gestanden."
      },
      {
       "ort": "Gespräch 1, Abschnitt 2",
       "zeilen": [
        {
         "wer": "Frau",
         "text": "Gut. Dann geben Sie ihm das Schmerzmittel bitte eine halbe Stunde vor der nächsten Physiotherapie, nicht erst danach."
        },
        {
         "wer": "Mann",
         "text": "Machen wir. Und der Blasenkatheter?"
        },
        {
         "wer": "Frau",
         "text": "Der kann heute raus. Achten Sie dann darauf, ob er gut Wasser lassen kann."
        }
       ],
       "frage": "Wann soll Herr Roth das Schmerzmittel bekommen?",
       "opt": [
        "Eine halbe Stunde vor der Physiotherapie.",
        "Direkt nach der Physiotherapie.",
        "Nur bei Schmerzen in Ruhe."
       ],
       "loesung": 0,
       "stelle": "eine halbe Stunde vor der nächsten Physiotherapie",
       "erklaerung": "„nicht erst danach\" schließt die erste Antwort aus."
      },
      {
       "ort": "Gespräch 2, Abschnitt 1",
       "zeilen": [
        {
         "wer": "Mann",
         "text": "Schwester, darf ich jetzt endlich was trinken? Ich habe so einen Durst."
        },
        {
         "wer": "Frau",
         "text": "Sie sind heute um vierzehn Uhr dran mit der Magenspiegelung, Herr Ivanov. Da muss der Magen leer sein."
        },
        {
         "wer": "Mann",
         "text": "Ach, das ist heute? Das hat mir keiner gesagt."
        },
        {
         "wer": "Frau",
         "text": "Doch, der Arzt war gestern Abend bei Ihnen. Aber das war vielleicht ein bisschen viel auf einmal."
        }
       ],
       "satz": "Herr Ivanov soll heute untersucht werden.",
       "loesung": true,
       "stelle": "Sie sind heute um vierzehn Uhr dran mit der Magenspiegelung",
       "erklaerung": "Die Magenspiegelung ist heute um vierzehn Uhr."
      },
      {
       "ort": "Gespräch 2, Abschnitt 2",
       "zeilen": [
        {
         "wer": "Mann",
         "text": "Und was darf ich jetzt noch?"
        },
        {
         "wer": "Frau",
         "text": "Essen nichts mehr, auch keinen Kaugummi. Bis zehn Uhr dürfen Sie noch klares Wasser oder Tee ohne Zucker trinken, danach gar nichts."
        },
        {
         "wer": "Mann",
         "text": "Na gut. Dann trinke ich jetzt noch schnell einen Tee."
        }
       ],
       "frage": "Was darf Herr Ivanov bis zehn Uhr noch?",
       "opt": [
        "Klares Wasser oder Tee ohne Zucker trinken.",
        "Einen Kaugummi kauen.",
        "Etwas Kleines essen."
       ],
       "loesung": 0,
       "stelle": "Bis zehn Uhr dürfen Sie noch klares Wasser oder Tee ohne Zucker trinken",
       "erklaerung": "Essen und Kaugummi sind schon jetzt verboten. Nur klare Getränke sind bis zehn Uhr erlaubt."
      },
      {
       "ort": "Gespräch 3, Abschnitt 1",
       "zeilen": [
        {
         "wer": "Frau",
         "text": "Jonas, kannst du nachher die Neue mitnehmen, Maria? Sie hat heute ihren zweiten Tag."
        },
        {
         "wer": "Mann",
         "text": "Ich habe heute sieben Patienten, davon zwei frisch operiert. Ich weiß nicht, ob ich ihr viel zeigen kann."
        },
        {
         "wer": "Frau",
         "text": "Sie soll ja nur mitlaufen und zuschauen."
        },
        {
         "wer": "Mann",
         "text": "Na gut, wenn es nur das ist."
        }
       ],
       "satz": "Der Mann freut sich darauf, der neuen Kollegin alles zu zeigen.",
       "loesung": false,
       "stelle": "Ich weiß nicht, ob ich ihr viel zeigen kann",
       "erklaerung": "Er hat viel zu tun und ist zuerst unsicher. Er sagt erst zu, als er hört, dass sie nur mitläuft."
      },
      {
       "ort": "Gespräch 3, Abschnitt 2",
       "zeilen": [
        {
         "wer": "Frau",
         "text": "Und lass sie bitte noch keine Medikamente richten. Das macht sie erst, wenn sie die Schulung hatte."
        },
        {
         "wer": "Mann",
         "text": "Klar. Blutdruck messen darf sie aber?"
        },
        {
         "wer": "Frau",
         "text": "Ja, Vitalzeichen, Lagern, Essen bringen, das alles. Und bei der Visite soll sie dabei sein."
        }
       ],
       "frage": "Was darf Maria noch nicht machen?",
       "opt": [
        "Medikamente richten.",
        "Blutdruck messen.",
        "Bei der Visite dabei sein."
       ],
       "loesung": 0,
       "stelle": "lass sie bitte noch keine Medikamente richten",
       "erklaerung": "Blutdruck messen und die Visite sind ausdrücklich erlaubt."
      },
      {
       "ort": "Gespräch 4, Abschnitt 1",
       "zeilen": [
        {
         "wer": "Frau",
         "text": "Entschuldigung, ich möchte zu meiner Mutter, Frau Kühn. Man hat mir unten gesagt, sie liegt jetzt in einem anderen Zimmer."
        },
        {
         "wer": "Mann",
         "text": "Ja, das stimmt. Wir mussten sie heute Morgen verlegen, in Zimmer zwölf. Das ist ein Einzelzimmer."
        },
        {
         "wer": "Frau",
         "text": "Ein Einzelzimmer? Ist etwas passiert?"
        },
        {
         "wer": "Mann",
         "text": "Keine Sorge, es geht ihr nicht schlechter. Wir haben bei ihr einen Keim gefunden, der sich leicht überträgt. Deshalb ist sie isoliert."
        }
       ],
       "satz": "Frau Kühn liegt jetzt in einem anderen Zimmer.",
       "loesung": true,
       "stelle": "Wir mussten sie heute Morgen verlegen",
       "erklaerung": "Sie wurde in ein Einzelzimmer verlegt, weil sie isoliert werden muss."
      },
      {
       "ort": "Gespräch 4, Abschnitt 2",
       "zeilen": [
        {
         "wer": "Frau",
         "text": "Darf ich trotzdem zu ihr?"
        },
        {
         "wer": "Mann",
         "text": "Ja, natürlich. Vor der Tür steht ein Wagen mit Kittel, Handschuhen und Mundschutz. Das ziehen Sie bitte an, bevor Sie reingehen. Beim Rausgehen kommt alles in den Eimer im Zimmer, und dann bitte die Hände desinfizieren."
        },
        {
         "wer": "Frau",
         "text": "Okay. Und ihre Sachen?"
        },
        {
         "wer": "Mann",
         "text": "Die bleiben bitte im Zimmer."
        }
       ],
       "frage": "Was muss die Frau beim Besuch tun?",
       "opt": [
        "Die Sachen ihrer Mutter mitnehmen.",
        "Schutzkleidung anziehen.",
        "Vor der Tür bleiben."
       ],
       "loesung": 1,
       "stelle": "Das ziehen Sie bitte an, bevor Sie reingehen",
       "erklaerung": "Sie darf ins Zimmer, aber nur mit Kittel, Handschuhen und Mundschutz. Die Sachen bleiben drin."
      },
      {
       "ort": "Gespräch 5, Abschnitt 1",
       "zeilen": [
        {
         "wer": "Frau",
         "text": "Daniel, hast du Frau Morina in der Sieben schon für die Entlassung fertig gemacht?"
        },
        {
         "wer": "Mann",
         "text": "Fast. Der Arztbrief fehlt noch. Und der Krankentransport kommt erst um vierzehn Uhr."
        },
        {
         "wer": "Frau",
         "text": "Hm. Das Bett brauchen wir aber schon um zwölf, die Notaufnahme hat einen Patienten für uns."
        },
        {
         "wer": "Mann",
         "text": "Dann setze ich sie in den Aufenthaltsraum, da kann sie warten."
        }
       ],
       "satz": "Frau Morina kann schon um zwölf Uhr nach Hause fahren.",
       "loesung": false,
       "stelle": "der Krankentransport kommt erst um vierzehn Uhr",
       "erklaerung": "Um zwölf wird nur ihr Bett gebraucht. Abgeholt wird sie erst um vierzehn Uhr."
      },
      {
       "ort": "Gespräch 5, Abschnitt 2",
       "zeilen": [
        {
         "wer": "Frau",
         "text": "Gut. Gib ihr dort ein Mittagessen. Und den Medikamentenplan für zu Hause, hast du den mit ihr besprochen?"
        },
        {
         "wer": "Mann",
         "text": "Noch nicht. Ihre Tochter kommt um halb eins, dann mache ich das mit beiden zusammen."
        },
        {
         "wer": "Frau",
         "text": "Gute Idee. Die Tochter stellt ja zu Hause die Tabletten."
        }
       ],
       "frage": "Wann bespricht der Mann den Medikamentenplan?",
       "opt": [
        "Erst um vierzehn Uhr mit dem Fahrer.",
        "Wenn die Tochter da ist.",
        "Sofort mit Frau Morina allein."
       ],
       "loesung": 1,
       "stelle": "dann mache ich das mit beiden zusammen",
       "erklaerung": "Die Tochter stellt zu Hause die Tabletten, deshalb soll sie dabei sein."
      }
     ]
    }
   ]
  },
  {
   "nr": 3,
   "art": "gespraech",
   "name": "Hören: Teambesprechung",
   "kurz": "Drei Personen, sechs Aufgaben a/b/c",
   "was": "Eine Teambesprechung auf Station mit drei Personen, in sechs Abschnitten. Zu jedem eine Aufgabe mit drei Antworten.",
   "tipp": "Wer macht was, und was wird am Ende beschlossen? Ein Vorschlag ist noch kein Beschluss.",
   "zeichen": "🏥",
   "farbe": "rot",
   "punkte": 6,
   "mal": 1,
   "runden": [
    {
     "id": "pfh3s1",
     "titel": "Teambesprechung: Dienstplan über Weihnachten",
     "aufgaben": [
      {
       "ort": "Teambesprechung, Abschnitt 1",
       "zeilen": [
        {
         "wer": "Frau",
         "text": "So, dann fangen wir an. Ich bin Frau Sommer, für die Neuen. Erster Punkt heute ist der Dienstplan über Weihnachten. Ich habe eure Wünsche gesammelt, und, na ja, fast alle wollen Heiligabend frei haben."
        },
        {
         "wer": "Mann",
         "text": "War ja klar."
        },
        {
         "wer": "Frau",
         "text": "Ich hatte letztes Jahr Heiligabend Spätdienst und Silvester Nachtdienst. Ich finde, dieses Jahr sind mal andere dran."
        },
        {
         "wer": "Frau",
         "text": "Das sehe ich auch so, Elena. Deshalb gilt ab diesem Jahr: Wer letztes Jahr Heiligabend gearbeitet hat, bekommt dieses Jahr frei."
        }
       ],
       "frage": "Welche Regel gilt ab diesem Jahr?",
       "opt": [
        "Wer letztes Jahr Heiligabend gearbeitet hat, hat dieses Jahr frei.",
        "Alle bekommen Heiligabend frei.",
        "Heiligabend arbeiten nur Kollegen ohne Kinder."
       ],
       "loesung": 0,
       "stelle": "Wer letztes Jahr Heiligabend gearbeitet hat, bekommt dieses Jahr frei",
       "erklaerung": "Fast alle wollen frei haben, das geht nicht. Die neue Regel richtet sich nach dem letzten Jahr."
      },
      {
       "ort": "Teambesprechung, Abschnitt 2",
       "zeilen": [
        {
         "wer": "Mann",
         "text": "Und wie viele brauchen wir Heiligabend?"
        },
        {
         "wer": "Frau",
         "text": "Im Frühdienst vier, im Spätdienst drei, nachts wie immer eine Fachkraft und eine Hilfskraft. Im Spätdienst sind wir sonst zu viert, aber abends gehen ja viele Bewohner zu ihren Familien."
        },
        {
         "wer": "Frau",
         "text": "Wie viele sind das dieses Jahr, Frau Sommer?"
        },
        {
         "wer": "Frau",
         "text": "Bis jetzt neun. Die Liste hängt im Dienstzimmer, die Angehörigen sollen sich bis zum fünfzehnten Dezember eintragen."
        }
       ],
       "frage": "Warum braucht man Heiligabend im Spätdienst weniger Personal?",
       "opt": [
        "Weil es im Haus keine Feier gibt.",
        "Weil der Nachtdienst früher anfängt.",
        "Weil viele Bewohner bei ihren Familien sind."
       ],
       "loesung": 2,
       "stelle": "abends gehen ja viele Bewohner zu ihren Familien",
       "erklaerung": "Normalerweise sind es vier, Heiligabend drei, weil weniger Bewohner im Haus sind."
      },
      {
       "ort": "Teambesprechung, Abschnitt 3",
       "zeilen": [
        {
         "wer": "Mann",
         "text": "Ich kann Heiligabend arbeiten, Frühdienst. Meine Familie feiert erst am fünfundzwanzigsten. Dafür hätte ich gern Silvester frei."
        },
        {
         "wer": "Frau",
         "text": "Das ist super, Tobias, danke. Silvester schauen wir gleich."
        },
        {
         "wer": "Frau",
         "text": "Und ich kann den Spätdienst am ersten Feiertag machen, wenn ich Heiligabend frei habe."
        },
        {
         "wer": "Frau",
         "text": "Gut, Elena, ich schreibe es auf."
        }
       ],
       "frage": "Was bietet Tobias an?",
       "opt": [
        "Heiligabend Frühdienst zu machen.",
        "Am ersten Feiertag Spätdienst zu machen.",
        "Silvester im Nachtdienst zu arbeiten."
       ],
       "loesung": 0,
       "stelle": "Ich kann Heiligabend arbeiten, Frühdienst",
       "erklaerung": "Silvester möchte er frei haben. Den Spätdienst am ersten Feiertag bietet Elena an."
      },
      {
       "ort": "Teambesprechung, Abschnitt 4",
       "zeilen": [
        {
         "wer": "Frau",
         "text": "Dann das Problem Nachtdienst. Herr Lewandowski ist vom zwanzigsten Dezember bis zum sechsten Januar im Urlaub. Den Urlaub hatte er schon im Frühjahr beantragt."
        },
        {
         "wer": "Frau",
         "text": "Und wer macht dann die Nächte?"
        },
        {
         "wer": "Frau",
         "text": "Ich habe mit der Pflegedienstleitung gesprochen. Wir bekommen für diese Zeit eine Kollegin aus dem Wohnbereich eins. Die übrigen Nächte verteilen wir unter uns, aber niemand macht mehr als vier Nächte am Stück."
        }
       ],
       "frage": "Wie wird das Problem mit dem Nachtdienst gelöst?",
       "opt": [
        "Herr Lewandowski verschiebt seinen Urlaub.",
        "Man holt Personal von einer Zeitarbeitsfirma.",
        "Eine Kollegin aus einem anderen Wohnbereich hilft aus."
       ],
       "loesung": 2,
       "stelle": "eine Kollegin aus dem Wohnbereich eins",
       "erklaerung": "Der Urlaub ist schon lange genehmigt. Eine Zeitarbeitsfirma wird nicht erwähnt."
      },
      {
       "ort": "Teambesprechung, Abschnitt 5",
       "zeilen": [
        {
         "wer": "Mann",
         "text": "Und was ist, wenn sich jemand krank meldet? Letztes Jahr war an Weihnachten das halbe Team krank."
        },
        {
         "wer": "Frau",
         "text": "Genau deshalb mache ich dieses Jahr eine Bereitschaftsliste. Jeden Feiertag ist eine Person in Rufbereitschaft und muss telefonisch erreichbar sein. Dafür gibt es einen Zuschlag."
        },
        {
         "wer": "Frau",
         "text": "Muss man dann in der Nähe bleiben?"
        },
        {
         "wer": "Frau",
         "text": "Ja, Elena, du solltest in einer Stunde hier sein können."
        }
       ],
       "frage": "Was ist neu für die Feiertage?",
       "opt": [
        "Alle müssen in der Nähe der Einrichtung wohnen.",
        "Wer krank ist, bekommt keinen Zuschlag.",
        "Jeden Feiertag gibt es eine Person in Rufbereitschaft."
       ],
       "loesung": 2,
       "stelle": "Jeden Feiertag ist eine Person in Rufbereitschaft",
       "erklaerung": "In der Nähe bleiben muss nur, wer gerade Rufbereitschaft hat."
      },
      {
       "ort": "Teambesprechung, Abschnitt 6",
       "zeilen": [
        {
         "wer": "Frau",
         "text": "Gut. Ich mache bis Freitag einen Entwurf und hänge ihn aus. Dann habt ihr eine Woche Zeit, untereinander zu tauschen."
        },
        {
         "wer": "Mann",
         "text": "Tauschen aber nur mit Absprache, oder?"
        },
        {
         "wer": "Frau",
         "text": "Genau, Tobias. Jeden Tausch schreibt ihr bitte in das Tauschbuch, und ich unterschreibe. Einfach so selbst im Plan ändern geht nicht, das ist wegen der Fachkraftquote wichtig."
        }
       ],
       "frage": "Was müssen die Mitarbeiter bei einem Diensttausch tun?",
       "opt": [
        "Den Tausch aufschreiben und unterschreiben lassen.",
        "Bis Freitag einen Entwurf machen.",
        "Den Plan selbst ändern."
       ],
       "loesung": 0,
       "stelle": "Jeden Tausch schreibt ihr bitte in das Tauschbuch",
       "erklaerung": "Selbst im Plan ändern ist verboten. Den Entwurf macht Frau Sommer."
      }
     ]
    },
    {
     "id": "pfh3s2",
     "titel": "Teambesprechung: Ein neuer Bewohner mit Demenz",
     "aufgaben": [
      {
       "ort": "Teambesprechung, Abschnitt 1",
       "zeilen": [
        {
         "wer": "Mann",
         "text": "Nächster Punkt. Am Montag zieht Herr Günther Maier bei uns ein, Zimmer sechzehn. Er ist achtzig und hat eine Alzheimer-Demenz, mittleres Stadium. Bis jetzt hat ihn seine Frau zu Hause gepflegt."
        },
        {
         "wer": "Frau",
         "text": "Und warum zieht er jetzt um, Herr Weber?"
        },
        {
         "wer": "Mann",
         "text": "Seine Frau hatte vor drei Wochen eine Knieoperation und kann ihn nicht mehr versorgen. Sie ist auch völlig erschöpft."
        },
        {
         "wer": "Frau",
         "text": "Das ist für beide schwer."
        }
       ],
       "frage": "Warum zieht Herr Maier ins Heim?",
       "opt": [
        "Weil seine Frau ihn nicht mehr pflegen kann.",
        "Weil seine Demenz plötzlich schlimmer geworden ist.",
        "Weil er selbst operiert worden ist."
       ],
       "loesung": 0,
       "stelle": "kann ihn nicht mehr versorgen",
       "erklaerung": "Operiert wurde seine Frau, nicht er. Deshalb kann sie ihn nicht mehr pflegen."
      },
      {
       "ort": "Teambesprechung, Abschnitt 2",
       "zeilen": [
        {
         "wer": "Frau",
         "text": "Wissen wir schon etwas über seinen Tagesablauf?"
        },
        {
         "wer": "Mann",
         "text": "Ja, seine Frau hat den Biografiebogen schon ausgefüllt. Er war Bäcker und ist sein Leben lang um vier Uhr aufgestanden. Das macht er heute noch oft."
        },
        {
         "wer": "Frau",
         "text": "Um vier? Dann ist er ja wach, bevor der Frühdienst kommt."
        },
        {
         "wer": "Mann",
         "text": "Genau, Fatma. Der Nachtdienst muss das wissen. Wenn er um vier aufsteht, bitte nicht wieder ins Bett schicken. Lieber in die Küche setzen, einen Kaffee geben."
        }
       ],
       "frage": "Was soll der Nachtdienst tun, wenn Herr Maier früh aufsteht?",
       "opt": [
        "Ihm einen Kaffee in der Küche anbieten.",
        "Den Frühdienst früher holen.",
        "Ihn wieder ins Bett bringen."
       ],
       "loesung": 0,
       "stelle": "Lieber in die Küche setzen, einen Kaffee geben",
       "erklaerung": "„bitte nicht wieder ins Bett schicken\" schließt die zweite Antwort aus."
      },
      {
       "ort": "Teambesprechung, Abschnitt 3",
       "zeilen": [
        {
         "wer": "Frau",
         "text": "Was ist mit Weglaufen? Bei Frau Krüger damals war das ein großes Thema."
        },
        {
         "wer": "Mann",
         "text": "Zu Hause ist er zweimal nachts auf die Straße gegangen. Deshalb kommt er bei uns in den geschützten Wohnbereich. Ein Bettgitter oder andere Fixierungen bekommt er nicht, das möchte die Familie nicht, und das brauchen wir auch nicht."
        },
        {
         "wer": "Frau",
         "text": "Und Medikamente zur Beruhigung?"
        },
        {
         "wer": "Mann",
         "text": "Hat er nicht, und der Hausarzt will es erst einmal so lassen. Wir versuchen es ohne."
        }
       ],
       "frage": "Was gilt für Herrn Maier?",
       "opt": [
        "Er wohnt im geschützten Wohnbereich.",
        "Er bekommt Medikamente zur Beruhigung.",
        "Er bekommt nachts ein Bettgitter."
       ],
       "loesung": 0,
       "stelle": "kommt er bei uns in den geschützten Wohnbereich",
       "erklaerung": "Bettgitter und Beruhigungsmittel werden beide ausdrücklich abgelehnt."
      },
      {
       "ort": "Teambesprechung, Abschnitt 4",
       "zeilen": [
        {
         "wer": "Frau",
         "text": "Wer wird denn seine Bezugspflegekraft?"
        },
        {
         "wer": "Mann",
         "text": "Ich hatte an dich gedacht, Anna. Du hast ja die Fortbildung zu Demenz gemacht."
        },
        {
         "wer": "Frau",
         "text": "Gern. Aber in der ersten Woche habe ich drei Tage Schule, ich mache doch gerade die Weiterbildung zur Praxisanleiterin."
        },
        {
         "wer": "Mann",
         "text": "Dann übernimmt Fatma an diesen Tagen, und du machst die Pflegeplanung, wenn du zurück bist."
        }
       ],
       "frage": "Wer kümmert sich in der ersten Woche an drei Tagen um Herrn Maier?",
       "opt": [
        "Fatma.",
        "Anna.",
        "Herr Weber."
       ],
       "loesung": 0,
       "stelle": "Dann übernimmt Fatma an diesen Tagen",
       "erklaerung": "Anna ist seine Bezugspflegekraft, aber an drei Tagen in der Schule."
      },
      {
       "ort": "Teambesprechung, Abschnitt 5",
       "zeilen": [
        {
         "wer": "Frau",
         "text": "Und der Einzugstag? Der ist für Menschen mit Demenz oft ganz schlimm."
        },
        {
         "wer": "Mann",
         "text": "Ich habe mit Frau Maier gesprochen. Sie bringt vorher schon Sachen von zu Hause, seinen Sessel und Familienfotos. Damit das Zimmer nicht so fremd ist."
        },
        {
         "wer": "Frau",
         "text": "Das ist gut. Kann sie am ersten Tag bleiben?"
        },
        {
         "wer": "Mann",
         "text": "Ja, sie bleibt bis zum Abendessen. Und in den ersten Wochen darf sie jederzeit kommen, auch ohne Anmeldung."
        }
       ],
       "frage": "Was macht Frau Maier, damit sich ihr Mann wohlfühlt?",
       "opt": [
        "Sie bringt eigene Möbel und Fotos mit.",
        "Sie besucht ihn erst nach zwei Wochen.",
        "Sie übernachtet in den ersten Tagen bei ihm."
       ],
       "loesung": 0,
       "stelle": "seinen Sessel und Familienfotos",
       "erklaerung": "Sie bleibt am ersten Tag nur bis zum Abendessen, von Übernachten ist keine Rede."
      },
      {
       "ort": "Teambesprechung, Abschnitt 6",
       "zeilen": [
        {
         "wer": "Frau",
         "text": "Wie reden wir mit ihm, wenn er nach Hause will?"
        },
        {
         "wer": "Mann",
         "text": "Nicht widersprechen und ihm nicht erklären, dass er jetzt hier wohnt. Das hilft bei ihm nicht. Fragen, was er zu Hause machen möchte, und ihn ablenken. Frau Maier sagt, er redet gern über Brot und über Fußball."
        },
        {
         "wer": "Frau",
         "text": "Das schreibe ich in die Pflegeplanung, damit alle das wissen."
        }
       ],
       "frage": "Was sollen die Pflegekräfte tun, wenn Herr Maier nach Hause will?",
       "opt": [
        "Mit ihm über Themen sprechen, die er mag.",
        "Ihm erklären, dass er jetzt im Heim wohnt.",
        "Sofort seine Frau anrufen."
       ],
       "loesung": 0,
       "stelle": "Fragen, was er zu Hause machen möchte, und ihn ablenken",
       "erklaerung": "Erklären soll man es ihm gerade nicht. Ablenken mit Brot und Fußball hilft."
      }
     ]
    },
    {
     "id": "pfh3s3",
     "titel": "Teambesprechung: Sturzprophylaxe",
     "aufgaben": [
      {
       "ort": "Teambesprechung, Abschnitt 1",
       "zeilen": [
        {
         "wer": "Frau",
         "text": "Ich habe die Sturzprotokolle vom letzten Quartal ausgewertet. Wir hatten vierzehn Stürze, im Quartal davor waren es acht. Das ist fast doppelt so viel."
        },
        {
         "wer": "Mann",
         "text": "Vierzehn? Das ist echt viel."
        },
        {
         "wer": "Frau",
         "text": "Wann sind die meisten passiert, Frau Demir?"
        },
        {
         "wer": "Frau",
         "text": "Das ist das Auffällige, Sandra. Elf von vierzehn in der Nacht oder früh am Morgen, und fast alle auf dem Weg zur Toilette."
        }
       ],
       "frage": "Was zeigt die Auswertung?",
       "opt": [
        "Die Zahl der Stürze ist gleich geblieben.",
        "Die meisten Stürze passieren nachts auf dem Weg zur Toilette.",
        "Die meisten Stürze passieren beim Essen."
       ],
       "loesung": 1,
       "stelle": "fast alle auf dem Weg zur Toilette",
       "erklaerung": "Die Zahl ist von acht auf vierzehn gestiegen, also nicht gleich geblieben."
      },
      {
       "ort": "Teambesprechung, Abschnitt 2",
       "zeilen": [
        {
         "wer": "Mann",
         "text": "Das wundert mich nicht. Nachts ist es auf den Fluren ziemlich dunkel, seit die Lampen ausgetauscht wurden."
        },
        {
         "wer": "Frau",
         "text": "Das habe ich auch gehört, Kai. Die neuen Lampen gehen erst an, wenn man direkt darunter steht."
        },
        {
         "wer": "Frau",
         "text": "Das ist doch gefährlich."
        },
        {
         "wer": "Frau",
         "text": "Ich habe mit der Haustechnik gesprochen. Bis Ende des Monats bekommen alle Zimmer zusätzlich ein Nachtlicht neben dem Bett."
        }
       ],
       "frage": "Was soll sich bis Ende des Monats ändern?",
       "opt": [
        "Die Flurlampen bleiben die ganze Nacht an.",
        "Die Zimmer bekommen ein Nachtlicht.",
        "Die Flurlampen werden wieder ausgetauscht."
       ],
       "loesung": 1,
       "stelle": "alle Zimmer zusätzlich ein Nachtlicht neben dem Bett",
       "erklaerung": "Über die Flurlampen wird nur geklagt. Geändert wird etwas in den Zimmern."
      },
      {
       "ort": "Teambesprechung, Abschnitt 3",
       "zeilen": [
        {
         "wer": "Frau",
         "text": "Und die Toilettengänge? Viele Bewohner klingeln nicht, die stehen einfach auf."
        },
        {
         "wer": "Frau",
         "text": "Genau da möchte ich ansetzen. Bei allen mit hohem Sturzrisiko machen wir ab nächster Woche feste Toilettenzeiten: vor dem Schlafen, gegen Mitternacht und gegen vier Uhr."
        },
        {
         "wer": "Mann",
         "text": "Das schafft der Nachtdienst aber nicht bei allen."
        },
        {
         "wer": "Frau",
         "text": "Es sind im Moment sieben Bewohner. Das geht."
        }
       ],
       "frage": "Was wird ab nächster Woche eingeführt?",
       "opt": [
        "Eine Klingel für alle Bewohner.",
        "Feste Toilettenzeiten für Bewohner mit hohem Sturzrisiko.",
        "Ein zweiter Nachtdienst."
       ],
       "loesung": 1,
       "stelle": "machen wir ab nächster Woche feste Toilettenzeiten",
       "erklaerung": "Einen zweiten Nachtdienst gibt es nicht. Es geht nur um sieben Bewohner."
      },
      {
       "ort": "Teambesprechung, Abschnitt 4",
       "zeilen": [
        {
         "wer": "Mann",
         "text": "Und was ist mit den Schuhen? Ich sehe ständig Leute in Socken oder in offenen Pantoffeln."
        },
        {
         "wer": "Frau",
         "text": "Ja, Frau Engel hat diese Pantoffeln mit Absatz, da wird mir immer ganz anders."
        },
        {
         "wer": "Frau",
         "text": "Gutes Thema. Ich schreibe den Angehörigen einen Brief und bitte sie, feste Hausschuhe mit Fersenteil und rutschfester Sohle zu kaufen. Bei Frau Engel rufe ich die Tochter direkt an."
        }
       ],
       "frage": "Wie will Frau Demir das Problem mit den Schuhen lösen?",
       "opt": [
        "Sie kauft für alle Bewohner neue Schuhe.",
        "Sie verbietet offene Pantoffeln.",
        "Sie bittet die Angehörigen, passende Hausschuhe zu kaufen."
       ],
       "loesung": 2,
       "stelle": "bitte sie, feste Hausschuhe mit Fersenteil",
       "erklaerung": "Kaufen sollen die Angehörigen. Ein Verbot wird nicht ausgesprochen."
      },
      {
       "ort": "Teambesprechung, Abschnitt 5",
       "zeilen": [
        {
         "wer": "Frau",
         "text": "Was ich noch sagen wollte: Bei Herrn Brück hat sich die Medikation geändert. Er bekommt seit letzter Woche ein neues Mittel zum Schlafen, und seitdem ist er morgens ganz wackelig."
        },
        {
         "wer": "Frau",
         "text": "Das ist wichtig, Sandra. Hast du das dokumentiert?"
        },
        {
         "wer": "Frau",
         "text": "Ja, im Pflegebericht."
        },
        {
         "wer": "Frau",
         "text": "Gut. Dann sprich das bitte bei der Visite am Donnerstag an. Schlafmittel erhöhen das Sturzrisiko, das muss der Arzt wissen."
        }
       ],
       "frage": "Was soll Sandra am Donnerstag tun?",
       "opt": [
        "Den Arzt auf die Nebenwirkung hinweisen.",
        "Das Schlafmittel absetzen.",
        "Herrn Brück morgens im Bett lassen."
       ],
       "loesung": 0,
       "stelle": "Dann sprich das bitte bei der Visite am Donnerstag an",
       "erklaerung": "Absetzen darf nur der Arzt. Sandra soll ihn informieren."
      },
      {
       "ort": "Teambesprechung, Abschnitt 6",
       "zeilen": [
        {
         "wer": "Mann",
         "text": "Sollten wir nicht auch mehr Hüftschutzhosen einsetzen?"
        },
        {
         "wer": "Frau",
         "text": "Die helfen, wenn jemand fällt, aber viele tragen sie nicht gern, weil sie unbequem sind. Wir bieten sie an, zwingen aber niemanden. Viel wichtiger finde ich, dass die Leute in Bewegung bleiben. Deshalb fängt ab dem ersten des Monats wieder die Sturzgruppe mit der Physiotherapeutin an, zweimal pro Woche."
        },
        {
         "wer": "Frau",
         "text": "Das ist gut. Die Gruppe war früher sehr beliebt."
        }
       ],
       "frage": "Was hält Frau Demir für besonders wichtig?",
       "opt": [
        "Dass die Bewohner weniger laufen.",
        "Dass alle Bewohner Hüftschutzhosen tragen.",
        "Dass die Bewohner sich viel bewegen."
       ],
       "loesung": 2,
       "stelle": "dass die Leute in Bewegung bleiben",
       "erklaerung": "Hüftschutzhosen werden nur angeboten. „Viel wichtiger\" zeigt ihre eigentliche Meinung."
      }
     ]
    }
   ]
  },
  {
   "nr": 4,
   "art": "diskussion",
   "name": "Hören: Meinungen",
   "kurz": "Drei Personen, sechs Aussagen",
   "was": "Drei Pflegekräfte sagen ihre Meinung zu einem Thema. Zu jeder Person passt eine Aussage, drei bleiben übrig.",
   "tipp": "Hör auf die Haltung: dafür, dagegen oder „ja, aber\".",
   "zeichen": "🗣️",
   "farbe": "lila",
   "punkte": 3,
   "mal": 1,
   "runden": [
    {
     "id": "pfh4s1",
     "titel": "Roboter in der Pflege",
     "aufgaben": [
      {
       "von": "Person 1: Herr Novak, Pflegefachkraft in einem Altenheim",
       "wer": "Mann",
       "text": "Ich arbeite seit zwanzig Jahren in der Pflege, und mein Rücken merkt das. Wenn ich höre, dass ein Roboter einen Bewohner aus dem Bett in den Rollstuhl heben kann, dann denke ich nicht an Science-Fiction, sondern an meine Bandscheiben. Ich weiß, dass solche Geräte noch teuer sind. Aber Heben, Wäsche fahren, Essenswagen schieben, das kostet uns jeden Tag Kraft. Wenn ein Roboter mir das abnimmt, habe ich mehr Zeit und Kraft für die Bewohner. Ich hätte so ein Gerät lieber heute als morgen.",
       "loesung": 0,
       "stelle": "Wenn ein Roboter mir das abnimmt",
       "erklaerung": "Er denkt an seinen Rücken und an schwere Arbeiten wie Heben. Die Bewohner bekommen dadurch mehr Zeit von ihm.",
       "frage": "Welche Aussage passt zu Herr Novak?",
       "opt": [
        "Roboter können Pflegekräfte bei schwerer körperlicher Arbeit entlasten.",
        "Menschliche Nähe kann keine Maschine ersetzen.",
        "Die Technik passt heute noch nicht in den Alltag eines Heims.",
        "Roboter werden viele Pflegekräfte arbeitslos machen.",
        "Für alte Menschen sind Roboter zu kompliziert.",
        "Die Bewohner sollten selbst entscheiden, ob ein Roboter sie unterstützt."
       ],
       "fest": true
      },
      {
       "von": "Person 2: Frau Hagen, Leiterin eines Pflegeheims",
       "wer": "Frau",
       "text": "Wir haben im letzten Jahr einen Roboter getestet, der Getränke verteilen und die Bewohner ans Trinken erinnern sollte. Die Idee fand ich gut. Aber im Alltag ist er ständig an Rollatoren hängen geblieben, er hat die Türschwellen nicht geschafft, und das Internet in unserem alten Gebäude war zu schwach. Am Ende mussten sich zwei Kollegen mehr um den Roboter kümmern als um die Bewohner. Ich bin nicht grundsätzlich dagegen. Aber so, wie die Geräte heute sind, passen sie nicht in ein normales Heim.",
       "loesung": 2,
       "stelle": "so, wie die Geräte heute sind, passen sie nicht in ein normales Heim",
       "erklaerung": "Sie ist nicht grundsätzlich dagegen. Ihr Problem ist, dass die Technik im Alltag noch nicht funktioniert.",
       "frage": "Welche Aussage passt zu Frau Hagen?",
       "opt": [
        "Roboter können Pflegekräfte bei schwerer körperlicher Arbeit entlasten.",
        "Menschliche Nähe kann keine Maschine ersetzen.",
        "Die Technik passt heute noch nicht in den Alltag eines Heims.",
        "Roboter werden viele Pflegekräfte arbeitslos machen.",
        "Für alte Menschen sind Roboter zu kompliziert.",
        "Die Bewohner sollten selbst entscheiden, ob ein Roboter sie unterstützt."
       ],
       "fest": true
      },
      {
       "von": "Person 3: Herr Baumann, Sohn einer Bewohnerin",
       "wer": "Mann",
       "text": "Meine Mutter ist neunzig und lebt seit zwei Jahren im Heim. Dort gibt es jetzt eine kleine Robbe aus Plüsch, die reagiert, wenn man sie streichelt. Ich war zuerst skeptisch. Aber meine Mutter liebt sie, sie redet mit ihr und wird ganz ruhig. Ihre Nachbarin dagegen findet das Ding albern und will es nicht im Zimmer haben. Und genau so muss es sein. Man darf niemandem einen Roboter aufzwingen, aber man sollte ihn auch niemandem wegnehmen, dem er guttut. Das müssen die alten Menschen selbst sagen dürfen.",
       "loesung": 5,
       "stelle": "Das müssen die alten Menschen selbst sagen dürfen",
       "erklaerung": "Die Mutter liebt die Robbe, die Nachbarin nicht. Für ihn entscheidet jeder Bewohner selbst.",
       "frage": "Welche Aussage passt zu Herr Baumann?",
       "opt": [
        "Roboter können Pflegekräfte bei schwerer körperlicher Arbeit entlasten.",
        "Menschliche Nähe kann keine Maschine ersetzen.",
        "Die Technik passt heute noch nicht in den Alltag eines Heims.",
        "Roboter werden viele Pflegekräfte arbeitslos machen.",
        "Für alte Menschen sind Roboter zu kompliziert.",
        "Die Bewohner sollten selbst entscheiden, ob ein Roboter sie unterstützt."
       ],
       "fest": true
      }
     ]
    },
    {
     "id": "pfh4s2",
     "titel": "Zwölf-Stunden-Schichten",
     "aufgaben": [
      {
       "von": "Person 1: Frau Kowalski, Pflegefachkraft auf einer Intensivstation",
       "wer": "Frau",
       "text": "Wir arbeiten bei uns seit drei Jahren in Zwölf-Stunden-Schichten, und ich will nicht mehr zurück. Klar, am Ende einer Schicht bin ich fertig. Aber ich arbeite nur drei oder vier Tage in der Woche und habe dann oft vier Tage hintereinander frei. Früher hatte ich zwischen zwei Diensten manchmal nur einen freien Tag, und an dem habe ich nur geschlafen und Wäsche gewaschen. Jetzt fahre ich auch mal zu meiner Familie nach Polen, ohne Urlaub zu nehmen. Das ist für mich viel wert.",
       "loesung": 1,
       "stelle": "habe dann oft vier Tage hintereinander frei",
       "erklaerung": "Sie gibt zu, dass die Schicht anstrengend ist. Wichtig sind ihr die vielen freien Tage am Stück.",
       "frage": "Welche Aussage passt zu Frau Kowalski?",
       "opt": [
        "Lange Schichten führen zu mehr Fehlern.",
        "Mit langen Schichten hat man mehr freie Tage am Stück.",
        "Lange Schichten passen nicht zu einem Leben mit Kindern.",
        "Die Bewohner haben mehr Ruhe, wenn das Personal seltener wechselt.",
        "Zwölf Stunden schafft man nur mit genug Pausen.",
        "Die Bezahlung ist wichtiger als die Länge der Schicht."
       ],
       "fest": true
      },
      {
       "von": "Person 2: Herr Lindemann, Pflegedienstleiter",
       "wer": "Mann",
       "text": "Ich verstehe, warum viele junge Kollegen das wollen. Aber ich schaue mir unsere Fehlerberichte an, und da sehe ich etwas anderes. Die meisten Fehler bei Medikamenten passieren in den letzten zwei, drei Stunden eines langen Dienstes. Da ist man müde, liest eine Zahl falsch, verwechselt zwei Becher. In der Pflege kann so etwas für einen Menschen schlimme Folgen haben. Deshalb bleiben wir bei uns im Haus bei acht Stunden, auch wenn ich damit bei manchen Bewerbern nicht gut ankomme.",
       "loesung": 0,
       "stelle": "Die meisten Fehler bei Medikamenten passieren in den letzten zwei, drei Stunden",
       "erklaerung": "„Ich verstehe\" ist nur die Einleitung. Seine Haltung kommt nach „Aber\": Müdigkeit führt zu Fehlern.",
       "frage": "Welche Aussage passt zu Herr Lindemann?",
       "opt": [
        "Lange Schichten führen zu mehr Fehlern.",
        "Mit langen Schichten hat man mehr freie Tage am Stück.",
        "Lange Schichten passen nicht zu einem Leben mit Kindern.",
        "Die Bewohner haben mehr Ruhe, wenn das Personal seltener wechselt.",
        "Zwölf Stunden schafft man nur mit genug Pausen.",
        "Die Bezahlung ist wichtiger als die Länge der Schicht."
       ],
       "fest": true
      },
      {
       "von": "Person 3: Frau Osei, Pflegehelferin in einem Wohnbereich für Menschen mit Demenz",
       "wer": "Frau",
       "text": "Bei uns im Wohnbereich für Menschen mit Demenz haben wir die langen Schichten letztes Jahr eingeführt, und am meisten haben die Bewohner davon. Früher kam morgens jemand, mittags jemand anders, abends wieder jemand Neues. Für Menschen mit Demenz ist das sehr anstrengend, jedes Gesicht ist wieder fremd. Jetzt bin ich den ganzen Tag da, von morgens bis abends. Die Bewohner kennen mich, sie sind ruhiger, und es gibt viel weniger Streit beim Waschen oder beim Essen. Für mich persönlich ist der Tag lang, aber das ist es mir wert.",
       "loesung": 3,
       "stelle": "Die Bewohner kennen mich, sie sind ruhiger",
       "erklaerung": "Sie spricht vor allem über die Bewohner: Weniger Wechsel bedeutet weniger Unruhe.",
       "frage": "Welche Aussage passt zu Frau Osei?",
       "opt": [
        "Lange Schichten führen zu mehr Fehlern.",
        "Mit langen Schichten hat man mehr freie Tage am Stück.",
        "Lange Schichten passen nicht zu einem Leben mit Kindern.",
        "Die Bewohner haben mehr Ruhe, wenn das Personal seltener wechselt.",
        "Zwölf Stunden schafft man nur mit genug Pausen.",
        "Die Bezahlung ist wichtiger als die Länge der Schicht."
       ],
       "fest": true
      }
     ]
    },
    {
     "id": "pfh4s3",
     "titel": "Angehörige bei der Pflege",
     "aufgaben": [
      {
       "von": "Person 1: Frau Richter, Pflegeberaterin",
       "wer": "Frau",
       "text": "Zu mir in die Pflegeberatung kommen jede Woche Töchter, Söhne, Ehepartner, und viele sind am Ende ihrer Kräfte. Sie arbeiten, haben eigene Kinder und fahren dann jeden Abend noch zur Mutter ins Heim, um ihr das Essen zu geben, weil sie Angst haben, dass sonst niemand Zeit hat. Ich sage dann oft: Sie dürfen auch einfach nur zu Besuch kommen. Sie müssen nicht die Pflegekraft ersetzen. Die Familien wollen helfen, das ist schön, aber sie brauchen auch selbst jemanden, der auf sie aufpasst.",
       "loesung": 4,
       "stelle": "viele sind am Ende ihrer Kräfte",
       "erklaerung": "Sie beschreibt Angehörige, die zu viel tragen: Arbeit, Kinder und jeden Abend das Heim.",
       "frage": "Welche Aussage passt zu Frau Richter?",
       "opt": [
        "Angehörige sollten bei der Grundpflege mithelfen dürfen.",
        "Angehörige kennen den Menschen oft besser als das Pflegepersonal.",
        "Pflegekräfte sollten Angehörige besser anleiten.",
        "Die Pflege ist Aufgabe der Fachleute, nicht der Familie.",
        "Viele Angehörige sind selbst überlastet.",
        "Manche Angehörige mischen sich zu sehr in die Arbeit ein."
       ],
       "fest": true
      },
      {
       "von": "Person 2: Herr Adeyemi, Pflegefachkraft auf einer geriatrischen Station",
       "wer": "Mann",
       "text": "Wir hatten neulich einen Patienten, der nicht mehr sprechen konnte und jedes Essen abgelehnt hat. Wir haben alles versucht. Dann kam seine Frau und hat gesagt: Er isst abends nie etwas Warmes, nur Brot mit Käse, das war schon immer so. Am nächsten Abend hat er alles aufgegessen. So etwas steht in keiner Akte. Die Familie weiß Dinge über einen Menschen, die wir in drei Wochen auf Station nie herausfinden. Deshalb frage ich die Angehörigen heute immer als Erstes.",
       "loesung": 1,
       "stelle": "Die Familie weiß Dinge über einen Menschen",
       "erklaerung": "Sein Beispiel zeigt: Die Ehefrau wusste etwas, das im Team niemand wusste.",
       "frage": "Welche Aussage passt zu Herr Adeyemi?",
       "opt": [
        "Angehörige sollten bei der Grundpflege mithelfen dürfen.",
        "Angehörige kennen den Menschen oft besser als das Pflegepersonal.",
        "Pflegekräfte sollten Angehörige besser anleiten.",
        "Die Pflege ist Aufgabe der Fachleute, nicht der Familie.",
        "Viele Angehörige sind selbst überlastet.",
        "Manche Angehörige mischen sich zu sehr in die Arbeit ein."
       ],
       "fest": true
      },
      {
       "von": "Person 3: Frau Schuster, Wohnbereichsleiterin in einem Altenheim",
       "wer": "Frau",
       "text": "Ich habe nichts gegen Angehörige, im Gegenteil. Aber ich habe Familien erlebt, die jeden Tag kommen und alles kontrollieren. Warum ist das Bett nicht frisch bezogen, warum hat Mama heute Morgen nicht geduscht, warum trägt sie diese Bluse. Meine Kolleginnen stehen dann im Zimmer und müssen sich rechtfertigen, während drei andere Bewohner klingeln. Manchmal wünsche ich mir einfach, dass die Angehörigen uns ein bisschen mehr vertrauen und uns unsere Arbeit machen lassen.",
       "loesung": 5,
       "stelle": "dass die Angehörigen uns ein bisschen mehr vertrauen und uns unsere Arbeit machen lassen",
       "erklaerung": "„Ich habe nichts gegen Angehörige\" ist die Einleitung. Ihr Punkt ist die ständige Kontrolle.",
       "frage": "Welche Aussage passt zu Frau Schuster?",
       "opt": [
        "Angehörige sollten bei der Grundpflege mithelfen dürfen.",
        "Angehörige kennen den Menschen oft besser als das Pflegepersonal.",
        "Pflegekräfte sollten Angehörige besser anleiten.",
        "Die Pflege ist Aufgabe der Fachleute, nicht der Familie.",
        "Viele Angehörige sind selbst überlastet.",
        "Manche Angehörige mischen sich zu sehr in die Arbeit ein."
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
   "id": "tpfhl1",
   "titel": "Prüfungslauf 1",
   "minuten": 25,
   "teile": [
    {
     "nr": 1,
     "art": "ansage",
     "aufgaben": [
      {
       "von": "Nachricht einer Angehörigen: Frau Feldmann, Nichte eines Bewohners",
       "wer": "Frau",
       "text": "Guten Abend, hier spricht Monika Feldmann, ich bin die Nichte von Herrn Gerhard Ott. Ich wollte nur Bescheid geben: Am Sonntag haben wir in der Familie einen Geburtstag, und wir würden meinen Onkel gern zum Mittagessen abholen, so gegen elf. Wir bringen ihn spätestens um fünf zurück. Ich glaube, er nimmt um zwölf Tabletten. Packen Sie die doch bitte in so einen Tablettenbecher mit seinem Namen, dann gebe ich sie ihm beim Essen. Rufen Sie mich gern zurück unter null eins sieben zwei, vier vier acht drei null.",
       "frage": "Worum bittet Frau Feldmann?",
       "opt": [
        "Um einen Platz für die Familie beim Mittagessen im Heim.",
        "Um einen Rückruf am Sonntag um elf Uhr.",
        "Um die Mittagstabletten ihres Onkels zum Mitnehmen."
       ],
       "loesung": 2,
       "stelle": "Packen Sie die doch bitte in so einen Tablettenbecher",
       "erklaerung": "Elf Uhr ist die Abholzeit, und gegessen wird bei der Familie, nicht im Heim."
      },
      {
       "von": "Nachricht der Hausarztpraxis an der Kirche",
       "wer": "Mann",
       "text": "Guten Tag, hier ist Doktor Friedrich, Hausarztpraxis an der Kirche. Ich habe die Wunddokumentation von Frau Meier bekommen, danke für die Fotos. Die Wunde am Fuß heilt nicht so, wie sie sollte. Ich möchte, dass sich eine Wundexpertin das ansieht, und habe eine Überweisung zur Wundsprechstunde im Kreiskrankenhaus geschrieben. Die liegt ab morgen bei uns am Empfang. Bis zum Termin bitte weiter so verbinden wie bisher, alle zwei Tage. Und schicken Sie mir weiter die Fotos.",
       "frage": "Was soll das Pflegeteam bis zum Termin machen?",
       "opt": [
        "Den Verband jeden Tag wechseln.",
        "Die Wunde wie bisher versorgen.",
        "Keine Fotos mehr schicken."
       ],
       "loesung": 1,
       "stelle": "bitte weiter so verbinden wie bisher",
       "erklaerung": "Der Verband bleibt bei alle zwei Tage, und die Fotos soll das Team weiter schicken."
      },
      {
       "von": "Nachricht aus dem Büro des Pflegedienstes",
       "wer": "Frau",
       "text": "Hallo Ayşe, hier ist Claudia vom Büro. Kleine Änderung für deine Tour morgen früh. Frau Dietrich ist seit heute im Krankenhaus, die fällt also weg. Dafür hast du neu Herrn Lange in der Gartenstraße vierzehn, Kompressionsstrümpfe anziehen und Augentropfen. Der Schlüssel hängt am Brett im Büro, Nummer dreiundzwanzig. Herr Lange ist sehr früh wach, du kannst also gleich als Erstes zu ihm fahren, so um sechs Uhr fünfundvierzig. Die Tourenliste auf dem Handy ist schon geändert.",
       "frage": "Was ist neu an Ayşes Tour?",
       "opt": [
        "Sie holt eine neue Tourenliste im Büro ab.",
        "Sie fährt als Erstes zu Herrn Lange.",
        "Sie besucht Frau Dietrich im Krankenhaus."
       ],
       "loesung": 1,
       "stelle": "du kannst also gleich als Erstes zu ihm fahren",
       "erklaerung": "Frau Dietrich fällt weg, und die Tourenliste ist schon auf dem Handy geändert."
      },
      {
       "von": "Nachricht des Sanitätshauses Meyer",
       "wer": "Mann",
       "text": "Guten Tag, Sanitätshaus Meyer, Becker am Apparat. Der Rollator für Herrn Schmid ist da. Leider haben wir das falsche Modell bekommen, den breiten. Der passt bei Herrn Schmid nicht durch die Badezimmertür, das hatten Sie uns ja extra gesagt. Den schmalen hat der Hersteller erst in drei Wochen. Wir können Ihnen bis dahin einen Leihrollator bringen, kostenlos. Wenn Sie das möchten, rufen Sie bitte kurz zurück, dann bringe ich ihn noch diese Woche.",
       "frage": "Was bietet das Sanitätshaus an?",
       "opt": [
        "Bis zur Lieferung einen Leihrollator zu bringen.",
        "Den breiten Rollator sofort zu liefern.",
        "Den schmalen Rollator noch diese Woche zu bringen."
       ],
       "loesung": 0,
       "stelle": "einen Leihrollator bringen, kostenlos",
       "erklaerung": "Der schmale Rollator kommt erst in drei Wochen. Diese Woche kommt nur der Leihrollator."
      }
     ]
    },
    {
     "nr": 2,
     "art": "gespraech",
     "aufgaben": [
      {
       "ort": "Gespräch 1, Abschnitt 1",
       "zeilen": [
        {
         "wer": "Frau",
         "text": "Hallo, ich bin die Tochter von Herrn Lehmann. Mein Vater hat jetzt so ein Gitter am Bett. Das hatte er letzte Woche noch nicht."
        },
        {
         "wer": "Mann",
         "text": "Sie meinen das Seitenteil? Das ist nicht hochgestellt, keine Sorge. Das dürfen wir ohne Genehmigung gar nicht."
        },
        {
         "wer": "Frau",
         "text": "Ah. Aber das Bett ist neu, oder?"
        },
        {
         "wer": "Mann",
         "text": "Ja, das ist ein Niederflurbett. Das kann man ganz tief stellen, damit er sich nicht verletzt, falls er nachts herausrutscht."
        }
       ],
       "satz": "Am Bett von Herrn Lehmann ist jetzt ein Gitter hochgestellt.",
       "loesung": false,
       "stelle": "Das ist nicht hochgestellt, keine Sorge",
       "erklaerung": "Das Seitenteil ist da, aber unten. Ohne Genehmigung darf es nicht hochgestellt werden."
      },
      {
       "ort": "Gespräch 1, Abschnitt 2",
       "zeilen": [
        {
         "wer": "Frau",
         "text": "Und dann liegt da noch so eine Matte vor dem Bett."
        },
        {
         "wer": "Mann",
         "text": "Genau, die Sensormatte. Wenn Ihr Vater nachts aufsteht, klingelt es bei uns im Dienstzimmer, und wir können gleich zu ihm gehen."
        },
        {
         "wer": "Frau",
         "text": "Ach so. Dann muss ich mir nachts nicht mehr so viele Sorgen machen."
        }
       ],
       "frage": "Wozu ist die Matte vor dem Bett?",
       "opt": [
        "Sie macht den Boden weicher.",
        "Sie meldet den Pflegekräften, wenn Herr Lehmann aufsteht.",
        "Sie hält Herrn Lehmann im Bett."
       ],
       "loesung": 1,
       "stelle": "klingelt es bei uns im Dienstzimmer",
       "erklaerung": "Eine Sensormatte gibt ein Signal. Sie hält niemanden fest."
      },
      {
       "ort": "Gespräch 2, Abschnitt 1",
       "zeilen": [
        {
         "wer": "Mann",
         "text": "Guten Tag, ich habe meiner Frau Erdbeerkuchen mitgebracht. Darf sie den essen?"
        },
        {
         "wer": "Frau",
         "text": "Grundsätzlich ja, Herr Simon. Aber Ihre Frau hat ja Schluckstörungen, sie bekommt im Moment alles püriert."
        },
        {
         "wer": "Mann",
         "text": "Ach so. Und Kuchen geht gar nicht?"
        },
        {
         "wer": "Frau",
         "text": "Mit den Stücken ist das gefährlich, sie kann sich verschlucken."
        }
       ],
       "satz": "Die Frau von Herrn Simon kann nicht gut schlucken.",
       "loesung": true,
       "stelle": "Ihre Frau hat ja Schluckstörungen",
       "erklaerung": "Wegen der Schluckstörung bekommt sie im Moment nur pürierte Kost."
      },
      {
       "ort": "Gespräch 2, Abschnitt 2",
       "zeilen": [
        {
         "wer": "Mann",
         "text": "Schade. Das war immer ihr Lieblingskuchen."
        },
        {
         "wer": "Frau",
         "text": "Wissen Sie was? Geben Sie mir den Kuchen. Die Küche kann ihn pürieren, dann bekommt sie ihn heute Nachmittag zum Kaffee. Und Sie sitzen dabei."
        },
        {
         "wer": "Mann",
         "text": "Das wäre schön. Danke."
        }
       ],
       "frage": "Was passiert mit dem Kuchen?",
       "opt": [
        "Herr Simon isst ihn allein in der Cafeteria.",
        "Herr Simon nimmt ihn wieder mit nach Hause.",
        "Er wird für Frau Simon püriert."
       ],
       "loesung": 2,
       "stelle": "Die Küche kann ihn pürieren",
       "erklaerung": "Die Pflegekraft findet eine Lösung: Die Küche püriert den Kuchen für den Kaffee am Nachmittag."
      },
      {
       "ort": "Gespräch 3, Abschnitt 1",
       "zeilen": [
        {
         "wer": "Mann",
         "text": "Frau Ramadani, ich wollte fragen, wie es meiner Mutter geht. Ich wohne ja in Hamburg und komme nur alle zwei Monate."
        },
        {
         "wer": "Frau",
         "text": "Ehrlich gesagt ist sie in den letzten Wochen ruhiger geworden. Sie isst weniger und schläft viel am Tag."
        },
        {
         "wer": "Mann",
         "text": "Das habe ich am Telefon auch gemerkt. Sie redet kaum noch."
        },
        {
         "wer": "Frau",
         "text": "Wir haben das auch dem Hausarzt gesagt."
        }
       ],
       "satz": "Der Zustand der Mutter hat sich verändert.",
       "loesung": true,
       "stelle": "Sie isst weniger und schläft viel am Tag",
       "erklaerung": "Sie ist ruhiger, isst weniger und schläft mehr. Auch der Sohn hat das gemerkt."
      },
      {
       "ort": "Gespräch 3, Abschnitt 2",
       "zeilen": [
        {
         "wer": "Mann",
         "text": "Und was hat der Arzt gesagt?"
        },
        {
         "wer": "Frau",
         "text": "Er kommt am Donnerstag und möchte dann gern auch mit Ihnen sprechen. Es geht darum, was Ihre Mutter sich wünscht, wenn es ihr schlechter geht. Geht das bei Ihnen per Video?"
        },
        {
         "wer": "Mann",
         "text": "Ja, das geht. Ich nehme mir den Vormittag frei."
        }
       ],
       "frage": "Was möchte der Hausarzt?",
       "opt": [
        "Dass der Sohn öfter zu Besuch kommt.",
        "Die Mutter ins Krankenhaus bringen.",
        "Am Donnerstag mit dem Sohn sprechen."
       ],
       "loesung": 2,
       "stelle": "möchte dann gern auch mit Ihnen sprechen",
       "erklaerung": "Das Gespräch findet per Video statt, der Sohn muss dafür nicht anreisen."
      },
      {
       "ort": "Gespräch 4, Abschnitt 1",
       "zeilen": [
        {
         "wer": "Frau",
         "text": "Junger Mann, wann kommt denn mein Mann? Er wollte mich doch abholen."
        },
        {
         "wer": "Mann",
         "text": "Frau Haas, Ihr Mann kommt heute nicht. Aber Ihre Tochter kommt um vier zum Kaffee."
        },
        {
         "wer": "Frau",
         "text": "Meine Tochter? Die muss doch arbeiten."
        },
        {
         "wer": "Mann",
         "text": "Heute hat sie frei. Sie hat es mir gestern gesagt."
        }
       ],
       "satz": "Der Mann von Frau Haas holt sie heute ab.",
       "loesung": false,
       "stelle": "Ihr Mann kommt heute nicht",
       "erklaerung": "Nicht ihr Mann kommt, sondern ihre Tochter, und zwar zum Kaffee um vier."
      },
      {
       "ort": "Gespräch 4, Abschnitt 2",
       "zeilen": [
        {
         "wer": "Frau",
         "text": "Ach so. Und was mache ich bis dahin?"
        },
        {
         "wer": "Mann",
         "text": "Um zwei ist im Gemeinschaftsraum Singen. Da waren Sie letzte Woche auch, das hat Ihnen gefallen. Soll ich Sie hinbringen?"
        },
        {
         "wer": "Frau",
         "text": "Singen? Ja, das mache ich gern."
        }
       ],
       "frage": "Was schlägt der Pfleger Frau Haas vor?",
       "opt": [
        "Zum Singen zu gehen.",
        "Ihre Tochter anzurufen.",
        "Sich bis vier hinzulegen."
       ],
       "loesung": 0,
       "stelle": "Um zwei ist im Gemeinschaftsraum Singen",
       "erklaerung": "Er bietet an, sie zum Singen zu bringen. Um vier kommt dann die Tochter."
      },
      {
       "ort": "Gespräch 5, Abschnitt 1",
       "zeilen": [
        {
         "wer": "Frau",
         "text": "Herr Okoro, ich habe eine Beschwerde. Meine Mutter hatte gestern um elf Uhr noch den Schlafanzug an, als ich kam."
        },
        {
         "wer": "Mann",
         "text": "Das stimmt, das tut mir leid. Wir waren gestern im Frühdienst nur zu dritt, zwei Kollegen waren krank."
        },
        {
         "wer": "Frau",
         "text": "Das kann ja mal passieren. Aber es war schon das zweite Mal in diesem Monat."
        },
        {
         "wer": "Mann",
         "text": "Ich verstehe, dass Sie das ärgert."
        }
       ],
       "satz": "Die Frau ist mit der Pflege ihrer Mutter unzufrieden.",
       "loesung": true,
       "stelle": "ich habe eine Beschwerde",
       "erklaerung": "Sie beschwert sich, weil es schon das zweite Mal in diesem Monat passiert ist."
      },
      {
       "ort": "Gespräch 5, Abschnitt 2",
       "zeilen": [
        {
         "wer": "Frau",
         "text": "Was kann ich denn da machen?"
        },
        {
         "wer": "Mann",
         "text": "Am besten sprechen Sie direkt mit unserer Pflegedienstleitung, Frau Berger. Sie macht den Dienstplan. Ich kann Ihnen gleich einen Termin bei ihr geben, morgen ist sie den ganzen Tag da."
        },
        {
         "wer": "Frau",
         "text": "Ja, bitte, machen Sie das."
        }
       ],
       "frage": "Was soll die Frau tun?",
       "opt": [
        "Mit der Pflegedienstleitung sprechen.",
        "Ihre Mutter morgens selbst anziehen.",
        "Eine schriftliche Beschwerde an die Heimleitung schicken."
       ],
       "loesung": 0,
       "stelle": "sprechen Sie direkt mit unserer Pflegedienstleitung",
       "erklaerung": "Frau Berger macht den Dienstplan. Von einem Brief an die Heimleitung ist keine Rede."
      }
     ]
    },
    {
     "nr": 3,
     "art": "gespraech",
     "aufgaben": [
      {
       "ort": "Teambesprechung, Abschnitt 1",
       "zeilen": [
        {
         "wer": "Frau",
         "text": "Nächster Punkt: Am ersten Dezember fängt Grace Mensah bei uns an. Sie ist Pflegefachkraft aus Ghana und hat dort sieben Jahre im Krankenhaus gearbeitet. Ihre Anerkennung ist aber noch nicht ganz fertig."
        },
        {
         "wer": "Mann",
         "text": "Das heißt, sie arbeitet erst mal als Pflegehelferin?"
        },
        {
         "wer": "Frau",
         "text": "Genau, Nikolai. Bis zur Anerkennung darf sie keine Aufgaben übernehmen, für die man eine Fachkraft braucht. Sie macht in dieser Zeit ihre Anpassungsmaßnahme bei uns."
        }
       ],
       "frage": "Was erfahren wir über Grace Mensah?",
       "opt": [
        "Sie kommt direkt von der Pflegeschule.",
        "Sie arbeitet zuerst als Pflegehelferin.",
        "Ihre Anerkennung ist schon abgeschlossen."
       ],
       "loesung": 1,
       "stelle": "Das heißt, sie arbeitet erst mal als Pflegehelferin",
       "erklaerung": "Sie hat sieben Jahre Berufserfahrung, aber ihre Anerkennung ist noch nicht fertig."
      },
      {
       "ort": "Teambesprechung, Abschnitt 2",
       "zeilen": [
        {
         "wer": "Frau",
         "text": "Und wer arbeitet sie ein, Frau Brandl?"
        },
        {
         "wer": "Frau",
         "text": "Ich möchte, dass Nikolai ihr Praxisanleiter wird. Du hast ja letztes Jahr die Weiterbildung gemacht, Nikolai."
        },
        {
         "wer": "Mann",
         "text": "Ja, mache ich gern. Aber dann brauche ich auch die Zeit dafür. Letztes Mal mit dem Auszubildenden hatte ich jeden Tag zehn Patienten und keine Minute für ihn."
        },
        {
         "wer": "Frau",
         "text": "Verstehe. Deshalb plane ich dich die ersten vier Wochen immer zusammen mit Grace im selben Dienst ein, und ihr habt zusammen zwei Patienten weniger."
        }
       ],
       "frage": "Was verspricht Frau Brandl Nikolai?",
       "opt": [
        "Er muss keine Nachtdienste mehr machen.",
        "Er bekommt mehr Geld für die Anleitung.",
        "Er hat zusammen mit Grace weniger Patienten."
       ],
       "loesung": 2,
       "stelle": "ihr habt zusammen zwei Patienten weniger",
       "erklaerung": "Nikolai braucht Zeit für die Anleitung, und genau die bekommt er."
      },
      {
       "ort": "Teambesprechung, Abschnitt 3",
       "zeilen": [
        {
         "wer": "Frau",
         "text": "Wie ist es mit der Sprache? Spricht sie gut Deutsch?"
        },
        {
         "wer": "Frau",
         "text": "Sie hat die Sprachprüfung für die Pflege bestanden und spricht gut. Aber die Fachsprache und vor allem die Dokumentation sind am Anfang schwer, das hat sie mir selbst gesagt."
        },
        {
         "wer": "Mann",
         "text": "Und unsere Abkürzungen im Pflegebericht. Die verstehe ja nicht mal ich immer."
        },
        {
         "wer": "Frau",
         "text": "Genau. Ines, du hast doch mal eine Liste mit unseren häufigsten Abkürzungen gemacht. Kannst du die bitte aktualisieren und ihr am ersten Tag geben?"
        }
       ],
       "frage": "Worum bittet Frau Brandl Ines?",
       "opt": [
        "Die Pflegeberichte für Grace zu schreiben.",
        "Eine Liste mit Abkürzungen auf den neuen Stand zu bringen.",
        "Mit Grace einen Deutschkurs zu machen."
       ],
       "loesung": 1,
       "stelle": "Kannst du die bitte aktualisieren",
       "erklaerung": "Die Liste gibt es schon. Ines soll sie aktualisieren und Grace geben."
      },
      {
       "ort": "Teambesprechung, Abschnitt 4",
       "zeilen": [
        {
         "wer": "Mann",
         "text": "Wie sieht denn die erste Woche aus?"
        },
        {
         "wer": "Frau",
         "text": "Die ersten zwei Tage ist sie nur im Frühdienst und läuft mit, ohne eigene Bewohner. Am ersten Tag gibt es außerdem die Hygieneschulung und die Einweisung in die Geräte, also Lifter, Blutzuckermessgerät und so weiter. Ab dem dritten Tag übernimmt sie mit dir zusammen die ersten Bewohner."
        },
        {
         "wer": "Frau",
         "text": "Und die Medikamente?"
        },
        {
         "wer": "Frau",
         "text": "Die macht sie bis zur Anerkennung gar nicht."
        }
       ],
       "frage": "Was macht Grace in den ersten zwei Tagen?",
       "opt": [
        "Sie gibt unter Aufsicht Medikamente.",
        "Sie läuft im Frühdienst mit.",
        "Sie übernimmt allein die ersten Bewohner."
       ],
       "loesung": 1,
       "stelle": "Die ersten zwei Tage ist sie nur im Frühdienst und läuft mit",
       "erklaerung": "Eigene Bewohner bekommt sie erst ab dem dritten Tag, und Medikamente gar nicht."
      },
      {
       "ort": "Teambesprechung, Abschnitt 5",
       "zeilen": [
        {
         "wer": "Frau",
         "text": "Ich finde, wir sollten auch an das Menschliche denken. Sie ist neu in Deutschland und kennt hier niemanden."
        },
        {
         "wer": "Frau",
         "text": "Da hast du recht, Ines. Hast du eine Idee?"
        },
        {
         "wer": "Frau",
         "text": "Wir könnten am Ende der ersten Woche zusammen frühstücken, im Pausenraum. Jeder bringt etwas mit."
        },
        {
         "wer": "Mann",
         "text": "Gute Idee. Ich backe meinen Apfelkuchen."
        }
       ],
       "frage": "Was schlägt Ines vor?",
       "opt": [
        "Ein gemeinsames Frühstück im Pausenraum.",
        "Grace bei der Wohnungssuche zu helfen.",
        "Eine Feier am ersten Arbeitstag."
       ],
       "loesung": 0,
       "stelle": "Wir könnten am Ende der ersten Woche zusammen frühstücken",
       "erklaerung": "Das Frühstück ist am Ende der ersten Woche, nicht am ersten Tag."
      },
      {
       "ort": "Teambesprechung, Abschnitt 6",
       "zeilen": [
        {
         "wer": "Frau",
         "text": "Schön. Eine letzte Sache: Nach vier Wochen machen wir ein Gespräch zu dritt, Grace, Nikolai und ich. Da schauen wir, was gut läuft und wo sie noch Hilfe braucht."
        },
        {
         "wer": "Mann",
         "text": "Soll ich vorher etwas aufschreiben?"
        },
        {
         "wer": "Frau",
         "text": "Ja, bitte. Füll den Bogen für die Einarbeitung jede Woche aus, dann haben wir beim Gespräch alles schwarz auf weiß."
        }
       ],
       "frage": "Was soll Nikolai jede Woche tun?",
       "opt": [
        "Frau Brandl einen Bericht per E-Mail schicken.",
        "Einen Bogen zur Einarbeitung ausfüllen.",
        "Ein Gespräch mit Grace allein führen."
       ],
       "loesung": 1,
       "stelle": "Füll den Bogen für die Einarbeitung jede Woche aus",
       "erklaerung": "Das Gespräch gibt es nur einmal nach vier Wochen, und zwar zu dritt."
      }
     ]
    },
    {
     "nr": 4,
     "art": "diskussion",
     "aufgaben": [
      {
       "von": "Person 1: Herr Petrov, Pflegefachkraft im ambulanten Pflegedienst",
       "wer": "Mann",
       "text": "Früher habe ich nach jeder Tour noch eine halbe Stunde im Büro gesessen und alles in die Mappen geschrieben. Und manchmal wusste ich nicht mehr, ob ich bei einem Patienten den Blutdruck um acht oder um halb neun gemessen hatte. Jetzt trage ich alles direkt beim Patienten ein, mit Uhrzeit, und die Werte sind sofort im System. Die Kollegin im Spätdienst sieht sie gleich. Ich bin schneller zu Hause, und es stimmt einfach mehr. Ich möchte nie wieder zurück zum Papier.",
       "loesung": 0,
       "stelle": "und es stimmt einfach mehr",
       "erklaerung": "Er spart die halbe Stunde im Büro, und die Uhrzeiten stimmen. Also schneller und genauer.",
       "frage": "Welche Aussage passt zu Herr Petrov?",
       "opt": [
        "Mit dem Tablet dokumentiert man schneller und genauer.",
        "Erfahrene Kollegen brauchen mehr Unterstützung bei der neuen Technik.",
        "Das Tippen am Gerät nimmt Zeit für die Bewohner weg.",
        "Daten auf Tablets sind nicht sicher genug.",
        "Die Dokumentation sollte insgesamt kürzer werden.",
        "Ohne stabiles Netz funktioniert das ganze System nicht."
       ],
       "fest": true
      },
      {
       "von": "Person 2: Frau Lange, Pflegehelferin in einem Altenheim",
       "wer": "Frau",
       "text": "Was mich stört: Früher habe ich nach dem Waschen noch kurz mit der Bewohnerin geredet, über ihre Enkel, über das Wetter. Jetzt stehe ich im Zimmer und tippe. Die Frau liegt da und schaut mich an, und ich schaue auf den Bildschirm. Das fühlt sich falsch an. Ich weiß, dass die Dokumentation wichtig ist und dass das Tablet praktisch ist. Aber ich habe das Gefühl, dass ich mehr Zeit mit dem Gerät verbringe als mit den Menschen. Und für die sind wir doch eigentlich da.",
       "loesung": 2,
       "stelle": "dass ich mehr Zeit mit dem Gerät verbringe als mit den Menschen",
       "erklaerung": "„Ich weiß, dass das Tablet praktisch ist\" ist ein Zugeständnis. Nach „Aber\" kommt ihre Meinung.",
       "frage": "Welche Aussage passt zu Frau Lange?",
       "opt": [
        "Mit dem Tablet dokumentiert man schneller und genauer.",
        "Erfahrene Kollegen brauchen mehr Unterstützung bei der neuen Technik.",
        "Das Tippen am Gerät nimmt Zeit für die Bewohner weg.",
        "Daten auf Tablets sind nicht sicher genug.",
        "Die Dokumentation sollte insgesamt kürzer werden.",
        "Ohne stabiles Netz funktioniert das ganze System nicht."
       ],
       "fest": true
      },
      {
       "von": "Person 3: Frau Wójcik, Praxisanleiterin in einem Pflegeheim",
       "wer": "Frau",
       "text": "Ich bin bei uns im Haus die Ansprechpartnerin für das neue System, und ich merke, wie unterschiedlich das läuft. Die jungen Kollegen haben es in einer Stunde verstanden. Aber wir haben auch Kolleginnen, die seit dreißig Jahren in der Pflege arbeiten, sehr gute Pflegekräfte, die noch nie mit einem Tablet gearbeitet haben. Die bekommen eine Schulung von zwei Stunden und sollen dann alles können. Das geht nicht. Die brauchen jemanden, der sich ein paar Dienste lang neben sie stellt. Sonst verlieren wir genau die Erfahrenen.",
       "loesung": 1,
       "stelle": "Die brauchen jemanden, der sich ein paar Dienste lang neben sie stellt",
       "erklaerung": "Zwei Stunden Schulung reichen für die erfahrenen Kolleginnen nicht. Sie brauchen Begleitung im Dienst.",
       "frage": "Welche Aussage passt zu Frau Wójcik?",
       "opt": [
        "Mit dem Tablet dokumentiert man schneller und genauer.",
        "Erfahrene Kollegen brauchen mehr Unterstützung bei der neuen Technik.",
        "Das Tippen am Gerät nimmt Zeit für die Bewohner weg.",
        "Daten auf Tablets sind nicht sicher genug.",
        "Die Dokumentation sollte insgesamt kürzer werden.",
        "Ohne stabiles Netz funktioniert das ganze System nicht."
       ],
       "fest": true
      }
     ]
    }
   ]
  },
  {
   "id": "tpfhl2",
   "titel": "Prüfungslauf 2",
   "minuten": 25,
   "teile": [
    {
     "nr": 1,
     "art": "ansage",
     "aufgaben": [
      {
       "von": "Nachricht des Labors Doktor Schäfer",
       "wer": "Frau",
       "text": "Guten Morgen, Labor Doktor Schäfer, hier ist Frau Krämer. Kurz zu Herrn Wolff: Sein Langzeitzucker ist deutlich gestiegen, der Befund geht heute an die Hausärztin. Ich rufe aber eigentlich wegen etwas anderem an. Bei den Röhrchen von gestern fehlte bei zwei Proben das Datum. Bitte schreiben Sie in Zukunft immer Datum und Uhrzeit der Abnahme drauf, sonst dürfen wir die Proben nicht bearbeiten. Vielen Dank.",
       "frage": "Worum bittet Frau Krämer?",
       "opt": [
        "Auf jedes Röhrchen Datum und Uhrzeit zu schreiben.",
        "Bei Herrn Wolff noch einmal Blut abzunehmen.",
        "Die Hausärztin über den Blutzucker zu informieren."
       ],
       "loesung": 0,
       "stelle": "immer Datum und Uhrzeit der Abnahme drauf",
       "erklaerung": "Die Hausärztin bekommt den Befund direkt vom Labor. Der eigentliche Grund für den Anruf kommt danach."
      },
      {
       "von": "Nachricht der Bahnhof-Apotheke",
       "wer": "Mann",
       "text": "Guten Tag, hier ist die Bahnhof-Apotheke, Ahmadi. Ich rufe wegen der Wochenblister für den Wohnbereich eins an. Die Ärztin von Frau Kaiser hat die Dosis vom Blutdruckmittel geändert, jetzt nur noch eine halbe Tablette am Abend. Die Blister für diese Woche sind aber schon gestellt, mit der ganzen Tablette. Bitte geben Sie Frau Kaiser diese Woche die Abendtablette nicht aus dem Blister, sondern aus der Einzelpackung, die ich Ihnen heute mitschicke. Ab nächster Woche stimmt es dann im Blister.",
       "frage": "Was soll das Team diese Woche bei Frau Kaiser tun?",
       "opt": [
        "Ihr das Blutdruckmittel morgens geben.",
        "Ihr die Abendtablette aus der Einzelpackung geben.",
        "Ihr abends die ganze Tablette aus dem Blister geben."
       ],
       "loesung": 1,
       "stelle": "sondern aus der Einzelpackung, die ich Ihnen heute mitschicke",
       "erklaerung": "Im Blister ist diese Woche noch die alte, ganze Tablette. Erst ab nächster Woche ist er richtig."
      },
      {
       "von": "Nachricht der Hausarztpraxis Doktor Vogel",
       "wer": "Frau",
       "text": "Ja, hallo, Praxis Doktor Vogel, Lisa am Telefon. Sie hatten nach einem Termin für die Grippeimpfung gefragt, für die Bewohner, die das möchten. Die Doktorin kommt am Dienstag in zwei Wochen um neun Uhr zu Ihnen ins Haus. Wir brauchen bis Freitag eine Liste mit Namen und die unterschriebenen Einverständniserklärungen, bei Bewohnern mit Betreuung auch von den Betreuern. Den Impfstoff bringt die Doktorin mit, den müssen Sie nicht bestellen.",
       "frage": "Was muss das Heim bis Freitag schicken?",
       "opt": [
        "Eine Namensliste und die Einverständniserklärungen.",
        "Einen Terminvorschlag für die Doktorin.",
        "Den bestellten Impfstoff."
       ],
       "loesung": 0,
       "stelle": "eine Liste mit Namen und die unterschriebenen Einverständniserklärungen",
       "erklaerung": "Den Impfstoff bringt die Ärztin mit, und der Termin steht schon fest."
      },
      {
       "von": "Nachricht der Pflegedienstleitung: Herr Hartmann",
       "wer": "Mann",
       "text": "Guten Morgen, Frau Petrović, hier ist Herr Hartmann. Ich habe gerade Ihren Urlaubsantrag gesehen, zweite und dritte Januarwoche. Die zweite Woche geht, das ist kein Problem. In der dritten Woche sind aber schon zwei Kollegen aus Ihrem Wohnbereich im Urlaub. Können Sie die dritte Woche vielleicht in den Februar legen? Dann unterschreibe ich sofort. Kommen Sie doch einfach nach der Übergabe kurz bei mir im Büro vorbei.",
       "frage": "Was möchte Herr Hartmann?",
       "opt": [
        "Dass Frau Petrović im Januar gar keinen Urlaub nimmt.",
        "Dass sie einen neuen Antrag per Post schickt.",
        "Dass sie einen Teil ihres Urlaubs später nimmt."
       ],
       "loesung": 2,
       "stelle": "Können Sie die dritte Woche vielleicht in den Februar legen?",
       "erklaerung": "Die zweite Januarwoche ist genehmigt. Nur die dritte Woche soll sie verschieben."
      }
     ]
    },
    {
     "nr": 2,
     "art": "gespraech",
     "aufgaben": [
      {
       "ort": "Gespräch 1, Abschnitt 1",
       "zeilen": [
        {
         "wer": "Frau",
         "text": "Also, die Nacht war ruhig, bis auf Frau Keller. Die war ab drei Uhr unruhig, ist immer wieder aufgestanden und wollte nach Hause."
        },
        {
         "wer": "Mann",
         "text": "Ist sie gestürzt?"
        },
        {
         "wer": "Frau",
         "text": "Nein, zum Glück nicht. Ich habe mich eine Weile zu ihr gesetzt, dann ist sie gegen fünf eingeschlafen."
        },
        {
         "wer": "Mann",
         "text": "Okay. Dann lassen wir sie heute früh länger schlafen."
        }
       ],
       "satz": "Frau Keller hat in der Nacht schlecht geschlafen.",
       "loesung": true,
       "stelle": "Die war ab drei Uhr unruhig",
       "erklaerung": "Sie war von drei bis fünf Uhr wach und unruhig."
      },
      {
       "ort": "Gespräch 1, Abschnitt 2",
       "zeilen": [
        {
         "wer": "Frau",
         "text": "Ja. Und Herr Fuchs hatte um zwei Uhr achtunddreißig Komma fünf. Ich habe ihm Wadenwickel gemacht und viel zu trinken gegeben, jetzt sind es siebenunddreißig Komma acht."
        },
        {
         "wer": "Mann",
         "text": "Hast du den Bereitschaftsarzt angerufen?"
        },
        {
         "wer": "Frau",
         "text": "Nein, dafür war es nicht hoch genug. Aber ruf bitte heute früh den Hausarzt an, wenn es wieder steigt."
        }
       ],
       "frage": "Was soll der Frühdienst bei Herrn Fuchs tun?",
       "opt": [
        "Sofort den Bereitschaftsarzt anrufen.",
        "Ihm Wadenwickel machen.",
        "Den Hausarzt anrufen, wenn das Fieber wieder steigt."
       ],
       "loesung": 2,
       "stelle": "ruf bitte heute früh den Hausarzt an, wenn es wieder steigt",
       "erklaerung": "Die Wadenwickel hat die Nachtwache schon gemacht. Der Bereitschaftsarzt wurde nicht gebraucht."
      },
      {
       "ort": "Gespräch 2, Abschnitt 1",
       "zeilen": [
        {
         "wer": "Mann",
         "text": "Hallo, hier ist Sergej aus dem Wohnbereich zwei. Kannst du kurz rüberkommen? Herr Bauer ist aus dem Bett gerutscht und sitzt auf dem Boden."
        },
        {
         "wer": "Frau",
         "text": "Hat er Schmerzen?"
        },
        {
         "wer": "Mann",
         "text": "Er sagt nein. Er ist wach und kann alles bewegen. Aber allein bekomme ich ihn nicht hoch."
        },
        {
         "wer": "Frau",
         "text": "Okay, ich komme. Versuch es bitte nicht allein."
        }
       ],
       "satz": "Herr Bauer hat sich beim Sturz verletzt.",
       "loesung": false,
       "stelle": "Er sagt nein. Er ist wach und kann alles bewegen",
       "erklaerung": "Er hat keine Schmerzen und kann alles bewegen. Das Problem ist nur, ihn hochzubekommen."
      },
      {
       "ort": "Gespräch 2, Abschnitt 2",
       "zeilen": [
        {
         "wer": "Frau",
         "text": "So, da bin ich. Wir nehmen den Lifter, nicht mit den Händen. Holst du ihn aus dem Bad?"
        },
        {
         "wer": "Mann",
         "text": "Mache ich. Und danach schreibe ich das Sturzprotokoll."
        },
        {
         "wer": "Frau",
         "text": "Ja, mit Uhrzeit. Und miss bitte noch mal den Blutdruck, bevor wir gehen."
        }
       ],
       "frage": "Wie bringen die beiden Herrn Bauer ins Bett?",
       "opt": [
        "Sie benutzen einen Lifter.",
        "Sie heben ihn zu zweit mit den Händen hoch.",
        "Sie warten auf den Frühdienst."
       ],
       "loesung": 0,
       "stelle": "Wir nehmen den Lifter",
       "erklaerung": "„nicht mit den Händen\" schließt die erste Antwort aus."
      },
      {
       "ort": "Gespräch 3, Abschnitt 1",
       "zeilen": [
        {
         "wer": "Mann",
         "text": "Schwester, ich kann nicht schlafen. Können Sie mir nicht eine Schlaftablette geben?"
        },
        {
         "wer": "Frau",
         "text": "Herr Arslan, Sie haben keine Schlaftablette verordnet. Die darf ich Ihnen nicht einfach geben."
        },
        {
         "wer": "Mann",
         "text": "Zu Hause habe ich immer eine genommen."
        },
        {
         "wer": "Frau",
         "text": "Das kann sein, aber hier muss das der Arzt aufschreiben."
        }
       ],
       "satz": "Herr Arslan bekommt eine Schlaftablette.",
       "loesung": false,
       "stelle": "Die darf ich Ihnen nicht einfach geben",
       "erklaerung": "Ohne ärztliche Verordnung darf die Pflegekraft keine Schlaftablette geben."
      },
      {
       "ort": "Gespräch 3, Abschnitt 2",
       "zeilen": [
        {
         "wer": "Mann",
         "text": "Und was soll ich jetzt machen? Ich liege hier seit zwei Stunden wach."
        },
        {
         "wer": "Frau",
         "text": "Ich mache Ihnen eine warme Milch mit Honig, und dann bleibe ich ein paar Minuten bei Ihnen. Morgen sage ich der Kollegin, dass sie mit dem Hausarzt sprechen soll."
        },
        {
         "wer": "Mann",
         "text": "Na gut. Milch mit Honig hat meine Frau auch immer gemacht."
        }
       ],
       "frage": "Was macht die Pflegekraft jetzt?",
       "opt": [
        "Sie bringt ihm eine warme Milch.",
        "Sie ruft den Hausarzt an.",
        "Sie gibt ihm eine halbe Tablette."
       ],
       "loesung": 0,
       "stelle": "Ich mache Ihnen eine warme Milch mit Honig",
       "erklaerung": "Mit dem Hausarzt spricht erst morgen die Kollegin."
      },
      {
       "ort": "Gespräch 4, Abschnitt 1",
       "zeilen": [
        {
         "wer": "Mann",
         "text": "Bei Frau Yilmaz ist heute ein neuer Blasenkatheter gelegt worden, vom Urologen."
        },
        {
         "wer": "Frau",
         "text": "Warum denn?"
        },
        {
         "wer": "Mann",
         "text": "Der alte war verstopft, es war kaum Urin im Beutel. Jetzt läuft es wieder gut, der Urin ist klar."
        },
        {
         "wer": "Frau",
         "text": "Gut. Und wie viel war es seit dem Wechsel?"
        }
       ],
       "satz": "Frau Yilmaz hat heute einen neuen Katheter bekommen.",
       "loesung": true,
       "stelle": "ein neuer Blasenkatheter gelegt worden",
       "erklaerung": "Der alte Katheter war verstopft, der Urologe hat einen neuen gelegt."
      },
      {
       "ort": "Gespräch 4, Abschnitt 2",
       "zeilen": [
        {
         "wer": "Mann",
         "text": "Dreihundert Milliliter seit sechzehn Uhr. Das steht alles im Bilanzbogen."
        },
        {
         "wer": "Frau",
         "text": "Okay. Soll ich in der Nacht den Beutel leeren?"
        },
        {
         "wer": "Mann",
         "text": "Ja, um zwei und dann noch mal um sechs, und bitte die Menge eintragen. Wenn wieder nichts kommt, ruf den Bereitschaftsdienst."
        }
       ],
       "frage": "Was soll die Nachtwache tun?",
       "opt": [
        "Den Beutel leeren und die Menge aufschreiben.",
        "Den Katheter noch einmal wechseln.",
        "Den Urologen um zwei Uhr anrufen."
       ],
       "loesung": 0,
       "stelle": "bitte die Menge eintragen",
       "erklaerung": "Um zwei Uhr soll sie den Beutel leeren. Angerufen wird nur, wenn kein Urin mehr kommt."
      },
      {
       "ort": "Gespräch 5, Abschnitt 1",
       "zeilen": [
        {
         "wer": "Frau",
         "text": "Entschuldigen Sie, dass ich so spät anrufe. Hier ist Frau Schubert. Meine Mutter hat mich eben angerufen und gesagt, dass sie niemand ins Bett gebracht hat."
        },
        {
         "wer": "Mann",
         "text": "Guten Abend, Frau Schubert. Ihre Mutter liegt im Bett, ich war vor zehn Minuten bei ihr. Sie hat nur ihr Telefon mitgenommen."
        },
        {
         "wer": "Frau",
         "text": "Ach so. Sie klang so durcheinander."
        },
        {
         "wer": "Mann",
         "text": "Abends ist sie oft etwas verwirrt, das kennen wir bei ihr."
        }
       ],
       "satz": "Die Mutter von Frau Schubert ist noch nicht im Bett.",
       "loesung": false,
       "stelle": "Ihre Mutter liegt im Bett",
       "erklaerung": "Der Pfleger war vor zehn Minuten bei ihr. Sie war am Telefon nur verwirrt."
      },
      {
       "ort": "Gespräch 5, Abschnitt 2",
       "zeilen": [
        {
         "wer": "Frau",
         "text": "Soll ich ihr das Telefon abends lieber wegnehmen?"
        },
        {
         "wer": "Mann",
         "text": "Das muss Ihre Mutter selbst entscheiden. Aber wir können zusammen überlegen. Kommen Sie doch am Wochenende vorbei, dann sprechen wir mit der Bezugspflegekraft."
        },
        {
         "wer": "Frau",
         "text": "Ja, gut. Am Samstag bin ich sowieso da."
        }
       ],
       "frage": "Was schlägt der Mann vor?",
       "opt": [
        "Am Wochenende mit der Bezugspflegekraft zu sprechen.",
        "Die Mutter jeden Abend anzurufen.",
        "Der Mutter abends das Telefon wegzunehmen."
       ],
       "loesung": 0,
       "stelle": "dann sprechen wir mit der Bezugspflegekraft",
       "erklaerung": "Das Telefon wegnehmen ist die Idee der Tochter. Der Pfleger sagt, das entscheidet die Mutter selbst."
      }
     ]
    },
    {
     "nr": 3,
     "art": "gespraech",
     "aufgaben": [
      {
       "ort": "Teambesprechung, Abschnitt 1",
       "zeilen": [
        {
         "wer": "Mann",
         "text": "Ich muss euch etwas ankündigen. Nächste Woche kommt das Gesundheitsamt zur Hygienebegehung. Den genauen Tag wissen wir nicht, die kommen unangemeldet."
        },
        {
         "wer": "Frau",
         "text": "Oh je, Herr Schulz. Letztes Mal gab es ja ziemlich viel Kritik."
        },
        {
         "wer": "Mann",
         "text": "Ja, vor allem bei der Händedesinfektion und bei den Pflegewagen. Das wollen wir dieses Mal besser machen."
        }
       ],
       "frage": "Was weiß man über die Kontrolle?",
       "opt": [
        "Das Team hat sie selbst bestellt.",
        "Sie kommt ohne Anmeldung in der nächsten Woche.",
        "Sie findet am Montag statt."
       ],
       "loesung": 1,
       "stelle": "die kommen unangemeldet",
       "erklaerung": "Nur die Woche ist bekannt, nicht der Tag."
      },
      {
       "ort": "Teambesprechung, Abschnitt 2",
       "zeilen": [
        {
         "wer": "Mann",
         "text": "Was war denn bei der Händedesinfektion das Problem?"
        },
        {
         "wer": "Mann",
         "text": "Viele haben Ringe getragen, und manche hatten lange oder lackierte Fingernägel. Das geht nicht, Emre, das ist eine klare Regel. Unter Ringen kann man die Hände nicht richtig desinfizieren."
        },
        {
         "wer": "Frau",
         "text": "Und Uhren?"
        },
        {
         "wer": "Mann",
         "text": "Auch keine Uhren am Handgelenk. Wer eine Uhr braucht, nimmt eine Ansteckuhr."
        }
       ],
       "frage": "Was ist bei der Arbeit erlaubt?",
       "opt": [
        "Eine Uhr an der Kleidung.",
        "Kurze lackierte Fingernägel.",
        "Ein Ehering."
       ],
       "loesung": 0,
       "stelle": "Wer eine Uhr braucht, nimmt eine Ansteckuhr",
       "erklaerung": "Ringe und lackierte Nägel sind verboten. Eine Ansteckuhr trägt man an der Kleidung."
      },
      {
       "ort": "Teambesprechung, Abschnitt 3",
       "zeilen": [
        {
         "wer": "Frau",
         "text": "Und die Pflegewagen?"
        },
        {
         "wer": "Mann",
         "text": "Da lag letztes Mal alles durcheinander, saubere Handschuhe neben benutzten Waschlappen. Ab sofort gilt: Oben auf dem Wagen nur saubere Sachen, Benutztes kommt sofort in den Abwurf. Und jeden Abend wischt der Spätdienst den Wagen mit Desinfektionsmittel ab."
        },
        {
         "wer": "Mann",
         "text": "Und am Wochenende?"
        },
        {
         "wer": "Mann",
         "text": "Auch der Spätdienst."
        }
       ],
       "frage": "Wer reinigt die Pflegewagen?",
       "opt": [
        "Der Nachtdienst am Wochenende.",
        "Der Spätdienst, jeden Abend.",
        "Die Reinigungsfirma einmal pro Woche."
       ],
       "loesung": 1,
       "stelle": "jeden Abend wischt der Spätdienst den Wagen mit Desinfektionsmittel ab",
       "erklaerung": "Auch am Wochenende ist es der Spätdienst."
      },
      {
       "ort": "Teambesprechung, Abschnitt 4",
       "zeilen": [
        {
         "wer": "Frau",
         "text": "Was ist eigentlich mit den Flaschen mit Desinfektionsmittel in den Zimmern? Auf einigen steht kein Anbruchdatum."
        },
        {
         "wer": "Mann",
         "text": "Gut, dass du das sagst, Katrin. Auf jede angebrochene Flasche kommt das Datum. Und kontrolliert bitte bei jeder Flasche das Verfallsdatum."
        },
        {
         "wer": "Mann",
         "text": "Ich kann das morgen im Frühdienst durchgehen, ich habe eh nur sechs Bewohner."
        },
        {
         "wer": "Mann",
         "text": "Prima, danke, Emre."
        }
       ],
       "frage": "Was macht Emre morgen?",
       "opt": [
        "Er schreibt eine neue Hygieneregel.",
        "Er kontrolliert die Flaschen in den Zimmern.",
        "Er bestellt neue Flaschen."
       ],
       "loesung": 1,
       "stelle": "Ich kann das morgen im Frühdienst durchgehen",
       "erklaerung": "Er bietet an, alle Flaschen zu kontrollieren, weil er morgen wenige Bewohner hat."
      },
      {
       "ort": "Teambesprechung, Abschnitt 5",
       "zeilen": [
        {
         "wer": "Mann",
         "text": "Und Frau Albers mit dem Keim? Die Kontrolle schaut sich das bestimmt an."
        },
        {
         "wer": "Mann",
         "text": "Bestimmt. Bei ihr ist alles richtig: Schutzkittel und Handschuhe bei der Pflege, eigenes Blutdruckgerät, eigenes Fieberthermometer im Zimmer. Was noch fehlt, ist das Schild an der Tür für Besucher."
        },
        {
         "wer": "Frau",
         "text": "Das kann ich heute noch machen, die Vorlage hat die Hygienebeauftragte."
        }
       ],
       "frage": "Was fehlt bei Frau Albers noch?",
       "opt": [
        "Schutzkittel für die Pflege.",
        "Ein Hinweis an der Tür.",
        "Ein eigenes Blutdruckgerät."
       ],
       "loesung": 1,
       "stelle": "Was noch fehlt, ist das Schild an der Tür für Besucher",
       "erklaerung": "Blutdruckgerät und Schutzkittel sind schon da. „Was noch fehlt\" führt zur Antwort."
      },
      {
       "ort": "Teambesprechung, Abschnitt 6",
       "zeilen": [
        {
         "wer": "Mann",
         "text": "Zum Schluss: Ich weiß, dass das alles Zeit kostet und dass wir sowieso viel zu tun haben. Aber es geht nicht um die Kontrolle, es geht um unsere Bewohner. Eine Infektion kann für einen alten Menschen lebensgefährlich sein."
        },
        {
         "wer": "Frau",
         "text": "Das stimmt. Bei dem Magen-Darm-Virus letzten Winter mussten drei Bewohner ins Krankenhaus."
        },
        {
         "wer": "Mann",
         "text": "Eben. Und deshalb gilt das alles auch nach der Kontrolle weiter."
        }
       ],
       "frage": "Was will Herr Schulz am Ende sagen?",
       "opt": [
        "Die Mitarbeiter haben zu wenig zu tun.",
        "Nach der Kontrolle gelten die Regeln nicht mehr.",
        "Die Regeln sind zum Schutz der Bewohner da."
       ],
       "loesung": 2,
       "stelle": "es geht um unsere Bewohner",
       "erklaerung": "„nicht um die Kontrolle\" und „gilt auch nach der Kontrolle weiter\" schließen die zweite Antwort aus."
      }
     ]
    },
    {
     "nr": 4,
     "art": "diskussion",
     "aufgaben": [
      {
       "von": "Person 1: Frau Brückner, Leiterin eines Seniorenheims",
       "wer": "Frau",
       "text": "Bei uns dürfen Bewohner ihre Katze oder ihren kleinen Hund mitbringen, wenn sie sich noch selbst darum kümmern können oder die Familie hilft. Ich habe das eingeführt, nachdem eine Frau nicht ins Heim ziehen wollte, weil sie ihren Kater nicht abgeben konnte. Sie hat lieber allein in ihrer Wohnung gelebt, obwohl sie mehrmals gestürzt war. Das fand ich furchtbar. Ein Tier ist für viele alte Menschen das Letzte, was ihnen geblieben ist. Das darf man ihnen beim Umzug nicht auch noch wegnehmen.",
       "loesung": 3,
       "stelle": "Das darf man ihnen beim Umzug nicht auch noch wegnehmen",
       "erklaerung": "Sie spricht über das eigene Tier, das beim Umzug mitkommen darf.",
       "frage": "Welche Aussage passt zu Frau Brückner?",
       "opt": [
        "Tiere machen Bewohner ruhiger und fröhlicher.",
        "Ein Tier im Heim bedeutet zusätzliche Arbeit für das Personal.",
        "Aus hygienischen Gründen gehören Tiere nicht in ein Pflegeheim.",
        "Bewohner sollten ihr eigenes Haustier mitbringen dürfen.",
        "Besuchshunde sind besser als Tiere, die immer im Heim leben.",
        "Man muss auch an Bewohner denken, die Angst vor Tieren haben."
       ],
       "fest": true
      },
      {
       "von": "Person 2: Herr Krämer, Pflegefachkraft in einem Altenheim",
       "wer": "Mann",
       "text": "Auf unserem Wohnbereich lebt seit einem Jahr ein Wellensittich, und am Anfang fanden das alle toll. Inzwischen muss ich sagen: Wer füttert ihn am Wochenende? Wer macht den Käfig sauber? Das sind am Ende wir, zwischen Medikamenten und Lagerung. Und als der Vogel krank war, bin ich in meiner Pause zum Tierarzt gefahren. Ich mag Tiere, wirklich. Aber wenn ein Heim sich ein Tier anschafft, muss vorher klar sein, wer sich darum kümmert. Sonst bleibt es wieder an der Pflege hängen.",
       "loesung": 1,
       "stelle": "Sonst bleibt es wieder an der Pflege hängen",
       "erklaerung": "Er mag Tiere, aber Füttern, Käfig und Tierarzt sind zusätzliche Arbeit für die Pflege.",
       "frage": "Welche Aussage passt zu Herr Krämer?",
       "opt": [
        "Tiere machen Bewohner ruhiger und fröhlicher.",
        "Ein Tier im Heim bedeutet zusätzliche Arbeit für das Personal.",
        "Aus hygienischen Gründen gehören Tiere nicht in ein Pflegeheim.",
        "Bewohner sollten ihr eigenes Haustier mitbringen dürfen.",
        "Besuchshunde sind besser als Tiere, die immer im Heim leben.",
        "Man muss auch an Bewohner denken, die Angst vor Tieren haben."
       ],
       "fest": true
      },
      {
       "von": "Person 3: Frau Yıldız, Tochter einer Bewohnerin",
       "wer": "Frau",
       "text": "Meine Mutter ist als Kind von einem Hund gebissen worden. Sie hat bis heute Panik vor Hunden. Seit Kurzem kommt in ihr Heim jeden Mittwoch ein Besuchshund in den Gemeinschaftsraum. Für die anderen ist das schön, das sehe ich. Aber meine Mutter traut sich mittwochs nicht mehr aus dem Zimmer, und keiner hat sie vorher gefragt. Ich bin nicht gegen Tiere im Heim. Ich wünsche mir nur, dass man bei solchen Plänen alle Bewohner fragt, auch die, die Angst haben.",
       "loesung": 5,
       "stelle": "auch die, die Angst haben",
       "erklaerung": "Der Besuchshund ist nur das Beispiel. Sie will, dass man an Bewohner mit Angst denkt.",
       "frage": "Welche Aussage passt zu Frau Yıldız?",
       "opt": [
        "Tiere machen Bewohner ruhiger und fröhlicher.",
        "Ein Tier im Heim bedeutet zusätzliche Arbeit für das Personal.",
        "Aus hygienischen Gründen gehören Tiere nicht in ein Pflegeheim.",
        "Bewohner sollten ihr eigenes Haustier mitbringen dürfen.",
        "Besuchshunde sind besser als Tiere, die immer im Heim leben.",
        "Man muss auch an Bewohner denken, die Angst vor Tieren haben."
       ],
       "fest": true
      }
     ]
    }
   ]
  }
 ]
};
