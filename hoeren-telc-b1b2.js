/* ============================================================
   deutschoderwas club — HÖREN telc Deutsch B1·B2 Beruf

   Aufbau nach dem offiziellen telc-Format (Übungstest 1 B1·B2 Beruf
   und „Tipps zur Prüfungsvorbereitung", geprüft 03.11.2026). Alle
   Texte und Aufgaben eigene, Kontext Arbeitswelt.
   Erzeugt aus scratchpad/telcb1b2 mit bau.js.
   ============================================================ */

window.HOEREN_TELC_B1B2 = {
 "niveau": "telcB1B2",
 "pruefung": "telc Deutsch B1·B2 Beruf",
 "minuten": 25,
 "punkte": 23,
 "intro": "Der Hören-Teil bei telc B1·B2 Beruf dauert etwa fünfundzwanzig Minuten, und du hörst jeden Text nur einmal: Telefonansagen, kurze Gespräche am Arbeitsplatz, eine Radiosendung oder Besprechung und Meinungen auf einer Tagung. Nach jeder Antwort siehst du den Text mit der entscheidenden Stelle.",
 "stufen": [
  {
   "nr": 1,
   "titel": "Das eine Detail",
   "zeichen": "👂",
   "was": "Telefonansagen und kurze Gespräche: Thema und Detail."
  },
  {
   "nr": 2,
   "titel": "Länger zuhören",
   "zeichen": "🪤",
   "was": "Einer Sendung folgen, Meinungen erkennen."
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
   "id": "tbb12h1",
   "stufe": 1,
   "titel": "Telefonansagen: das eine Detail",
   "kurz": "Viele Zahlen, viele Infos, aber nur eine Frage. Erst die Frage lesen, dann gezielt hören.",
   "ziel": "Nach diesem Block liest du vor dem Hören die Frage und findest in einer Ansage genau das Detail, das gefragt ist.",
   "zeichen": "☎️",
   "farbe": "gold",
   "mal": 1,
   "aufgaben": [
    {
     "art": "hoerwahl",
     "ort": "Anrufbeantworter einer Spedition",
     "wer": "Mann",
     "text": "Spedition Albers, guten Tag. Abholungen für morgen melden Sie bitte bis vierzehn Uhr an. Was später kommt, holen wir erst übermorgen ab.",
     "frage": "Bis wann muss man eine Abholung für morgen anmelden?",
     "opt": [
      "Bis vierzehn Uhr.",
      "Bis morgen früh.",
      "Bis übermorgen."
     ],
     "loesung": 0,
     "stelle": "melden Sie bitte bis vierzehn Uhr an",
     "erklaerung": "„übermorgen\" ist das, was passiert, wenn man zu spät anmeldet."
    },
    {
     "art": "hoerwahl",
     "ort": "Warteschleife eines Lieferanten",
     "wer": "Frau",
     "text": "Für Fragen zu Ihrer Rechnung drücken Sie bitte die Eins. Für Lieferungen die Zwei. Wenn Sie einen neuen Vertrag abschließen möchten, drücken Sie die Drei.",
     "frage": "Welche Taste drückt man bei einer Frage zur Lieferung?",
     "opt": [
      "Die Zwei.",
      "Die Eins.",
      "Die Drei."
     ],
     "loesung": 0,
     "stelle": "Für Lieferungen die Zwei",
     "erklaerung": "Bei Tastenmenüs merkst du dir nur das Stichwort aus der Frage: Lieferung."
    },
    {
     "art": "hoerwahl",
     "ort": "Nachricht einer Kollegin",
     "wer": "Frau",
     "text": "Hallo Ben, Clara hier. Die Besprechung ist nicht in Raum drei null eins, der ist belegt. Wir gehen rüber in Raum drei null fünf, gleiche Zeit.",
     "frage": "In welchem Raum ist die Besprechung?",
     "opt": [
      "In Raum drei null fünf.",
      "In Raum drei null eins.",
      "In Raum drei null drei."
     ],
     "loesung": 0,
     "stelle": "Wir gehen rüber in Raum drei null fünf",
     "erklaerung": "Die erste Raumnummer ist die alte. „nicht … der ist belegt\" zeigt die Änderung."
    },
    {
     "art": "hoerwahl",
     "ort": "Anrufbeantworter des Betriebsarztes",
     "wer": "Mann",
     "text": "Hier ist der Betriebsarzt. Ich bin bis Freitag im Urlaub. In dringenden Fällen wenden Sie sich bitte an die Kollegin in Werk zwei, Durchwahl fünf fünf null.",
     "frage": "An wen soll man sich in dringenden Fällen wenden?",
     "opt": [
      "An den Betriebsarzt nach dem Urlaub.",
      "An die Zentrale in Werk fünf.",
      "An eine Kollegin in Werk zwei."
     ],
     "loesung": 2,
     "stelle": "an die Kollegin in Werk zwei",
     "erklaerung": "Die Fünf gehört zur Durchwahl, nicht zum Werk."
    },
    {
     "art": "hoerwahl",
     "ort": "Nachricht eines Kunden",
     "wer": "Mann",
     "text": "Guten Tag, Ruppert hier. Die Lieferung ist angekommen, danke. Nur die Rechnung fehlt. Schicken Sie sie bitte per Mail, nicht per Post.",
     "frage": "Was möchte Herr Ruppert?",
     "opt": [
      "Die Rechnung per Post bekommen.",
      "Die Lieferung zurückschicken.",
      "Die Rechnung per Mail bekommen."
     ],
     "loesung": 2,
     "stelle": "Schicken Sie sie bitte per Mail",
     "erklaerung": "„nicht per Post\" schließt die dritte Antwort aus."
    },
    {
     "art": "hoerwahl",
     "ort": "Ansage eines Großhändlers",
     "wer": "Frau",
     "text": "Unser Lager ist vom zweiten bis zum sechsten Januar wegen Inventur geschlossen. Bestellungen, die bis zum zwanzigsten Dezember eingehen, liefern wir noch vor Weihnachten.",
     "frage": "Bis wann muss man bestellen, damit vor Weihnachten geliefert wird?",
     "opt": [
      "Bis zum zwanzigsten Dezember.",
      "Bis zum sechsten Januar.",
      "Bis zum zweiten Januar."
     ],
     "loesung": 0,
     "stelle": "bis zum zwanzigsten Dezember eingehen",
     "erklaerung": "Drei Daten: Die Januardaten gehören zur Inventur, nicht zur Bestellung."
    },
    {
     "art": "hoerwahl",
     "ort": "Nachricht eines Kollegen",
     "wer": "Mann",
     "text": "Hallo Sandra, Paul hier. Du, ich schaff es heute nicht vor zehn, die Bahn steht. Kannst du bitte um neun den Kunden am Telefon übernehmen? Die Nummer liegt auf meinem Tisch.",
     "frage": "Was soll Sandra tun?",
     "opt": [
      "Paul eine Telefonnummer schicken.",
      "Um zehn Uhr zur Bahn kommen.",
      "Um neun Uhr ein Kundengespräch übernehmen."
     ],
     "loesung": 2,
     "stelle": "Kannst du bitte um neun den Kunden am Telefon übernehmen",
     "erklaerung": "Zehn Uhr ist Pauls Ankunft. Die Nummer liegt auf dem Tisch, Sandra muss sie nicht schicken."
    },
    {
     "art": "hoerwahl",
     "ort": "Warteschleife eines Paketdienstes",
     "wer": "Mann",
     "text": "Bitte haben Sie noch einen Moment Geduld. Übrigens: Ihr Paket können Sie auch ohne Wartezeit auf unserer Internetseite umleiten, zum Beispiel an eine Filiale oder zu einem Nachbarn.",
     "frage": "Wie kann man ein Paket ohne Wartezeit umleiten?",
     "opt": [
      "In der Warteschleife.",
      "In einer Filiale.",
      "Über die Internetseite."
     ],
     "loesung": 2,
     "stelle": "auf unserer Internetseite umleiten",
     "erklaerung": "Die Filiale ist ein mögliches Ziel für das Paket, nicht der Weg zum Umleiten."
    },
    {
     "art": "hoerwahl",
     "ort": "Nachricht der Personalabteilung",
     "wer": "Frau",
     "text": "Personalabteilung, Kaiser. Ihre Bescheinigung für den Arbeitgeberwechsel ist fertig. Sie können sie ab Montag in Zimmer zwei zwölf abholen, aber nur vormittags.",
     "frage": "Wann kann man die Bescheinigung abholen?",
     "opt": [
      "Ab Montag, den ganzen Tag.",
      "Ab Montag, nur vormittags.",
      "Nur am Montag."
     ],
     "loesung": 1,
     "stelle": "ab Montag in Zimmer zwei zwölf abholen, aber nur vormittags",
     "erklaerung": "„ab Montag\" heißt: von Montag an. „aber nur vormittags\" schränkt die Zeit ein."
    },
    {
     "art": "hoerwahl",
     "ort": "Nachricht eines Handwerksbetriebs",
     "wer": "Mann",
     "text": "Guten Tag, Heizungsbau Graf. Unser Monteur kommt morgen nicht um acht, sondern erst um elf. Bitte sorgen Sie dafür, dass jemand im Haus ist, der den Keller aufschließen kann.",
     "frage": "Was soll der Kunde tun?",
     "opt": [
      "Um acht Uhr zu Hause sein.",
      "Dafür sorgen, dass jemand den Keller aufschließt.",
      "Den Monteur um elf anrufen."
     ],
     "loesung": 1,
     "stelle": "dass jemand im Haus ist, der den Keller aufschließen kann",
     "erklaerung": "Acht Uhr ist die alte Zeit. Gefragt ist, was der Kunde tun soll."
    }
   ]
  },
  {
   "id": "tbb12h2",
   "stufe": 1,
   "titel": "Global und Detail im kurzen Gespräch",
   "kurz": "Erst: Worum geht es? Dann: Welches Detail stimmt? Zwei Fragen, zwei Arten zu hören.",
   "ziel": "Nach diesem Block erkennst du in kurzen Gesprächen am Arbeitsplatz zuerst das Thema und danach das wichtige Detail.",
   "zeichen": "💬",
   "farbe": "turq",
   "mal": 1,
   "aufgaben": [
    {
     "art": "hoerwahl",
     "ort": "Im Büro, Teil eins",
     "wer": "Frau",
     "text": "Sag mal, hast du noch Toner für den Drucker? Unserer ist leer, und ich muss bis elf die Verträge rausschicken.",
     "frage": "Es geht um ein Problem mit dem Drucker.",
     "opt": [
      "Richtig",
      "Falsch"
     ],
     "loesung": 0,
     "stelle": "Unserer ist leer, und ich muss bis elf die Verträge rausschicken",
     "erklaerung": "Globalfrage: Worum geht es? Der Toner ist leer, also kann sie nicht drucken."
    },
    {
     "art": "hoerwahl",
     "ort": "Im Büro, Teil zwei",
     "wer": "Frau",
     "text": "Die Verträge für Firma Lenz, ja. Zwei Stück. Die anderen drei haben noch Zeit bis Montag.",
     "frage": "Wie viele Verträge müssen heute raus?",
     "opt": [
      "Fünf.",
      "Zwei.",
      "Drei."
     ],
     "loesung": 1,
     "stelle": "Die Verträge für Firma Lenz, ja. Zwei Stück",
     "erklaerung": "Detailfrage: Drei Verträge haben noch Zeit. Fünf ist die Summe."
    },
    {
     "art": "hoerwahl",
     "ort": "Gespräch mit der Teamleiterin, Teil eins",
     "wer": "Mann",
     "text": "Ich wollte nur kurz Bescheid sagen, ich muss morgen früher gehen. Mein Sohn hat einen Termin beim Kinderarzt, um halb vier.",
     "frage": "Der Mann möchte morgen einen ganzen Tag frei nehmen.",
     "opt": [
      "Richtig",
      "Falsch"
     ],
     "loesung": 1,
     "stelle": "ich muss morgen früher gehen",
     "erklaerung": "„früher gehen\" ist nicht dasselbe wie „frei nehmen\". Er arbeitet, aber kürzer."
    },
    {
     "art": "hoerwahl",
     "ort": "Gespräch mit der Teamleiterin, Teil zwei",
     "wer": "Mann",
     "text": "Um halb vier ist der Termin, also müsste ich um drei los. Die Übergabe mache ich vorher mit Katja, die übernimmt dann bis Feierabend.",
     "frage": "Wann möchte der Mann morgen gehen?",
     "opt": [
      "Zum Feierabend.",
      "Um drei Uhr.",
      "Um halb vier."
     ],
     "loesung": 1,
     "stelle": "also müsste ich um drei los",
     "erklaerung": "Halb vier ist der Arzttermin. Gehen muss er eine halbe Stunde früher."
    },
    {
     "art": "hoerwahl",
     "ort": "Gespräch in der Werkstatt, Teil eins",
     "wer": "Frau",
     "text": "Herr Polat, der Kunde von gestern hat sich gemeldet. Er ist mit der Reparatur nicht zufrieden, die Waschmaschine verliert wieder Wasser.",
     "frage": "Ein Kunde beschwert sich.",
     "opt": [
      "Richtig",
      "Falsch"
     ],
     "loesung": 0,
     "stelle": "Er ist mit der Reparatur nicht zufrieden",
     "erklaerung": "„nicht zufrieden\" und das Problem mit dem Wasser zeigen eine Beschwerde."
    },
    {
     "art": "hoerwahl",
     "ort": "Gespräch in der Werkstatt, Teil zwei",
     "wer": "Frau",
     "text": "Er möchte, dass heute noch jemand kommt. Ich hab ihm gesagt, heute geht es nicht mehr, aber morgen früh um acht als Erstes.",
     "frage": "Wann kommt jemand zum Kunden?",
     "opt": [
      "Morgen um acht.",
      "Heute noch.",
      "Morgen am Nachmittag."
     ],
     "loesung": 0,
     "stelle": "aber morgen früh um acht als Erstes",
     "erklaerung": "„heute noch\" ist der Wunsch des Kunden, nicht der Termin."
    },
    {
     "art": "hoerwahl",
     "ort": "Ansage im Lager, Teil eins",
     "wer": "Mann",
     "text": "Die neuen Arbeitsschuhe sind da, die liegen im Lager auf dem Tisch. Jeder kann sich ein Paar nehmen, aber bitte nur eins und den Namen auf die Liste schreiben.",
     "frage": "Der Mann spricht über Arbeitskleidung.",
     "opt": [
      "Richtig",
      "Falsch"
     ],
     "loesung": 0,
     "stelle": "Die neuen Arbeitsschuhe sind da",
     "erklaerung": "Arbeitsschuhe gehören zur Arbeitskleidung. Das Thema ist die Ausgabe der Schuhe."
    },
    {
     "art": "hoerwahl",
     "ort": "Ansage im Lager, Teil zwei",
     "wer": "Mann",
     "text": "Wer die alten Schuhe nicht mehr braucht, wirft sie bitte nicht weg. Die sammeln wir in dem blauen Karton neben der Tür, die gehen dann an eine Recyclingfirma.",
     "frage": "Was soll man mit den alten Schuhen machen?",
     "opt": [
      "Wegwerfen.",
      "In den blauen Karton legen.",
      "Auf die Liste schreiben."
     ],
     "loesung": 1,
     "stelle": "in dem blauen Karton neben der Tür",
     "erklaerung": "„nicht weg\" schließt die erste Antwort aus. Die Liste ist für die neuen Schuhe."
    },
    {
     "art": "hoerwahl",
     "ort": "Gespräch in der Kaffeeküche, Teil eins",
     "wer": "Frau",
     "text": "Du, ich glaub, wir müssen die Weihnachtsfeier verschieben. Das Restaurant hat abgesagt, die haben einen Wasserschaden in der Küche.",
     "frage": "Die Weihnachtsfeier fällt dieses Jahr aus.",
     "opt": [
      "Richtig",
      "Falsch"
     ],
     "loesung": 1,
     "stelle": "wir müssen die Weihnachtsfeier verschieben",
     "erklaerung": "„verschieben\" heißt: später, nicht ausfallen. Das ist eine typische Falle."
    },
    {
     "art": "hoerwahl",
     "ort": "Gespräch in der Kaffeeküche, Teil zwei",
     "wer": "Frau",
     "text": "Ich hab schon beim Italiener am Markt gefragt. Die hätten am zwanzigsten Platz, also eine Woche später. Für dreißig Leute, das passt genau.",
     "frage": "Wann könnte die Feier stattfinden?",
     "opt": [
      "Am dreißigsten.",
      "Am dreizehnten.",
      "Am zwanzigsten."
     ],
     "loesung": 2,
     "stelle": "Die hätten am zwanzigsten Platz",
     "erklaerung": "Dreißig ist die Zahl der Gäste, nicht das Datum."
    }
   ]
  },
  {
   "id": "tbb12h3",
   "stufe": 2,
   "titel": "Einer längeren Sendung folgen",
   "kurz": "Fragen der Moderation, „erstens\", „zum Schluss\", „zurück zu\": Diese Wörter zeigen dir den Weg.",
   "ziel": "Nach diesem Block nutzt du die Fragen und Signalwörter in einer Radiosendung oder Besprechung, um nach einmaligem Hören den Faden zu behalten.",
   "zeichen": "📻",
   "farbe": "rot",
   "mal": 1,
   "aufgaben": [
    {
     "art": "hoerwahl",
     "ort": "Radiosendung: Probezeit",
     "wer": "Mann",
     "text": "Da muss ich etwas korrigieren. Viele glauben, dass man in der Probezeit gar keine Rechte hat. Das stimmt nicht. Auch in der Probezeit gibt es Urlaub und Lohn bei Krankheit.",
     "frage": "Was sagt der Gast über die Probezeit?",
     "opt": [
      "Man hat dann keine Rechte.",
      "Man hat auch dann Rechte, zum Beispiel auf Urlaub.",
      "Man bekommt bei Krankheit keinen Lohn."
     ],
     "loesung": 1,
     "stelle": "Auch in der Probezeit gibt es Urlaub",
     "erklaerung": "„Viele glauben\" leitet eine fremde Meinung ein. Danach kommt: „Das stimmt nicht.\""
    },
    {
     "art": "hoerwahl",
     "ort": "Radiosendung: Berufswechsel",
     "wer": "Frau",
     "text": "Bevor wir zu Ihren Fragen kommen, noch ein Blick auf die Zahlen: Im letzten Jahr haben fast doppelt so viele Menschen den Beruf gewechselt wie vor zehn Jahren.",
     "frage": "Was kommt in der Sendung nach den Zahlen?",
     "opt": [
      "Fragen der Hörer.",
      "Ein neuer Gast.",
      "Die Nachrichten."
     ],
     "loesung": 0,
     "stelle": "Bevor wir zu Ihren Fragen kommen",
     "erklaerung": "„Bevor wir zu … kommen\" kündigt den nächsten Teil der Sendung an."
    },
    {
     "art": "hoerwahl",
     "ort": "Radiosendung: Bewerbungsgespräch",
     "wer": "Mann",
     "text": "Erstens: Fragen Sie im Bewerbungsgespräch nicht gleich nach dem Urlaub. Zweitens: Bereiten Sie zwei, drei Fragen zur Firma vor. Und das Wichtigste kommt zum Schluss: Seien Sie pünktlich.",
     "frage": "Was ist laut Gast am wichtigsten?",
     "opt": [
      "Nicht nach Urlaub fragen.",
      "Pünktlich sein.",
      "Fragen zur Firma vorbereiten."
     ],
     "loesung": 1,
     "stelle": "Und das Wichtigste kommt zum Schluss",
     "erklaerung": "Bei Aufzählungen auf Wörter wie „das Wichtigste\" achten, nicht nur auf „erstens\"."
    },
    {
     "art": "hoerwahl",
     "ort": "Radiosendung: Neu im Beruf",
     "wer": "Frau",
     "text": "Am Anfang dachte ich, ich schaffe das nie. Inzwischen, nach zwei Jahren, macht mir die Arbeit im Labor richtig Spaß.",
     "frage": "Wie findet die Frau ihre Arbeit heute?",
     "opt": [
      "Zu schwer für sie.",
      "Sie will aufhören.",
      "Sie macht ihr Spaß."
     ],
     "loesung": 2,
     "stelle": "macht mir die Arbeit im Labor richtig Spaß",
     "erklaerung": "„Am Anfang\" und „Inzwischen\" zeigen zwei Zeitpunkte. Gefragt ist heute."
    },
    {
     "art": "hoerwahl",
     "ort": "Radiosendung: Neue Berufe",
     "wer": "Mann",
     "text": "Das ist eine gute Frage, aber da muss ich ein bisschen ausholen. Vor zwanzig Jahren gab es diesen Beruf noch gar nicht. Heute suchen alle Firmen solche Leute, und die Gehälter sind deutlich gestiegen.",
     "frage": "Was hat sich bei diesem Beruf geändert?",
     "opt": [
      "Er ist heute gefragt und besser bezahlt.",
      "Es gibt ihn nicht mehr.",
      "Die Gehälter sind gesunken."
     ],
     "loesung": 0,
     "stelle": "Heute suchen alle Firmen solche Leute",
     "erklaerung": "„ausholen\" heißt: Die Antwort kommt nicht sofort. Geduldig weiterhören."
    },
    {
     "art": "hoerwahl",
     "ort": "Radiosendung: Bäckerhandwerk",
     "wer": "Frau",
     "text": "Sie haben eben gesagt, dass viele Bäckereien keine Lehrlinge mehr finden. Woran liegt das Ihrer Meinung nach? Nur an den frühen Arbeitszeiten?",
     "frage": "Worüber hat der Gast gerade gesprochen?",
     "opt": [
      "Über fehlende Lehrlinge in Bäckereien.",
      "Über neue Arbeitszeiten.",
      "Über zu hohe Brotpreise."
     ],
     "loesung": 0,
     "stelle": "dass viele Bäckereien keine Lehrlinge mehr finden",
     "erklaerung": "„Sie haben eben gesagt\" fasst zusammen, was vorher kam. So findest du wieder in die Sendung."
    },
    {
     "art": "hoerwahl",
     "ort": "Radiosendung: Bäckerhandwerk",
     "wer": "Mann",
     "text": "Nein, nicht nur. Die Arbeitszeit ist ein Grund, klar. Aber der Hauptgrund ist, dass junge Leute den Beruf gar nicht kennen. Die waren noch nie in einer Backstube.",
     "frage": "Was ist laut Gast der Hauptgrund?",
     "opt": [
      "Die Backstuben sind zu klein.",
      "Die frühen Arbeitszeiten.",
      "Junge Leute kennen den Beruf nicht."
     ],
     "loesung": 2,
     "stelle": "Aber der Hauptgrund ist",
     "erklaerung": "Die Arbeitszeit ist „ein Grund\". Nach „Aber der Hauptgrund\" kommt die Lösung."
    },
    {
     "art": "hoerwahl",
     "ort": "Radiosendung: Anerkennung",
     "wer": "Frau",
     "text": "Zurück zu Ihrem Beispiel von vorhin, der Pflegekraft aus Rumänien. Wie lange hat es gedauert, bis ihre Ausbildung hier anerkannt war?",
     "frage": "Was macht die Moderatorin hier?",
     "opt": [
      "Sie beendet die Sendung.",
      "Sie stellt einen neuen Gast vor.",
      "Sie kommt auf ein früheres Thema zurück."
     ],
     "loesung": 2,
     "stelle": "Zurück zu Ihrem Beispiel von vorhin",
     "erklaerung": "„Zurück zu … von vorhin\" zeigt: Ein Thema von früher wird wieder aufgenommen."
    },
    {
     "art": "hoerwahl",
     "ort": "Radiosendung: Anerkennung",
     "wer": "Mann",
     "text": "Ungefähr acht Monate. Das klingt lang, aber früher waren es oft zwei Jahre. Inzwischen geht vieles schneller, weil man die Unterlagen online einreichen kann.",
     "frage": "Wie lange hat die Anerkennung gedauert?",
     "opt": [
      "Etwa zwei Jahre.",
      "Etwa acht Monate.",
      "Ein paar Wochen."
     ],
     "loesung": 1,
     "stelle": "Ungefähr acht Monate. Das klingt lang",
     "erklaerung": "Zwei Jahre war es „früher\". Die Antwort steht gleich am Anfang."
    },
    {
     "art": "hoerwahl",
     "ort": "Radiosendung: Abschluss",
     "wer": "Frau",
     "text": "Leider ist unsere Zeit schon fast um. Eine letzte Frage noch, ganz kurz: Würden Sie den Beruf heute noch einmal wählen?",
     "frage": "An welcher Stelle der Sendung sind wir?",
     "opt": [
      "In der Mitte.",
      "Am Ende.",
      "Am Anfang."
     ],
     "loesung": 1,
     "stelle": "Leider ist unsere Zeit schon fast um",
     "erklaerung": "„Zeit fast um\" und „letzte Frage\" zeigen das Ende. Die letzte Aufgabe gehört oft dazu."
    }
   ]
  },
  {
   "id": "tbb12h4",
   "stufe": 2,
   "titel": "Meinungen und Haltungen erkennen",
   "kurz": "Dafür, dagegen oder „ja, aber\"? Die Haltung steckt oft in kleinen Wörtern.",
   "ziel": "Nach diesem Block erkennst du, welche Haltung jemand zu einem Arbeitsthema hat, auch wenn er zuerst die Gegenseite nennt.",
   "zeichen": "⚖️",
   "farbe": "lila",
   "mal": 1,
   "aufgaben": [
    {
     "art": "hoerwahl",
     "ort": "Tagung: Homeoffice",
     "wer": "Mann",
     "text": "Homeoffice ist schön und gut. Aber ein neuer Kollege lernt am Bildschirm einfach nicht so viel wie neben einem erfahrenen Kollegen am Schreibtisch.",
     "frage": "Welche Haltung hat der Mann?",
     "opt": [
      "Er ist gegen jedes Homeoffice.",
      "Er sieht Nachteile für neue Mitarbeiter.",
      "Er findet Homeoffice für alle ideal."
     ],
     "loesung": 1,
     "stelle": "ein neuer Kollege lernt am Bildschirm einfach nicht so viel",
     "erklaerung": "„schön und gut. Aber\" heißt: grundsätzlich okay, aber mit einem bestimmten Problem."
    },
    {
     "art": "hoerwahl",
     "ort": "Tagung: Vier-Tage-Woche",
     "wer": "Frau",
     "text": "Ich war skeptisch, ehrlich. Aber seit wir die Vier-Tage-Woche haben, sind bei uns kaum noch Leute krank. Das hat mich überzeugt.",
     "frage": "Welche Haltung hat die Frau heute?",
     "opt": [
      "Sie ist immer noch skeptisch.",
      "Sie ist inzwischen dafür.",
      "Sie findet, dass mehr Leute krank sind."
     ],
     "loesung": 1,
     "stelle": "Das hat mich überzeugt",
     "erklaerung": "„Ich war skeptisch\" ist Vergangenheit. Ihre heutige Meinung steht am Ende."
    },
    {
     "art": "hoerwahl",
     "ort": "Tagung: Weiterbildung",
     "wer": "Mann",
     "text": "Weiterbildung, ja, gerne. Aber doch nicht am Samstag, in meiner Freizeit. Wenn die Firma das will, dann während der Arbeitszeit.",
     "frage": "Was fordert der Mann?",
     "opt": [
      "Weiterbildung am Samstag.",
      "Keine Weiterbildung mehr.",
      "Weiterbildung in der Arbeitszeit."
     ],
     "loesung": 2,
     "stelle": "Wenn die Firma das will, dann während der Arbeitszeit",
     "erklaerung": "Er ist für Weiterbildung. Er ist nur gegen den Samstag."
    },
    {
     "art": "hoerwahl",
     "ort": "Tagung: Neue Software",
     "wer": "Frau",
     "text": "Man kann über die neue Software viel schimpfen. Ich finde trotzdem, sie spart uns jeden Tag eine halbe Stunde.",
     "frage": "Welche Haltung hat die Frau?",
     "opt": [
      "Sie braucht jetzt eine halbe Stunde länger.",
      "Sie schimpft über die Software.",
      "Sie findet die Software insgesamt nützlich."
     ],
     "loesung": 2,
     "stelle": "sie spart uns jeden Tag eine halbe Stunde",
     "erklaerung": "„Man kann … schimpfen\" ist die Meinung anderer. „trotzdem\" zeigt ihre eigene."
    },
    {
     "art": "hoerwahl",
     "ort": "Tagung: Schichtarbeit",
     "wer": "Mann",
     "text": "Ich weiß nicht. Einerseits verdient man in der Nachtschicht mehr. Andererseits sehe ich meine Kinder kaum noch. Ich hab mich noch nicht entschieden.",
     "frage": "Welche Haltung hat der Mann zur Nachtschicht?",
     "opt": [
      "Er ist unentschlossen.",
      "Er ist dagegen.",
      "Er ist dafür."
     ],
     "loesung": 0,
     "stelle": "Ich hab mich noch nicht entschieden",
     "erklaerung": "„Einerseits … andererseits\" und „noch nicht entschieden\" zeigen: Er schwankt."
    },
    {
     "art": "hoerwahl",
     "ort": "Tagung: Mitarbeitergespräche",
     "wer": "Frau",
     "text": "Mitarbeitergespräche? Wenn sie gut gemacht sind, sehr hilfreich. Leider sind sie bei uns meistens ein Ritual, das man schnell abhakt.",
     "frage": "Was kritisiert die Frau?",
     "opt": [
      "Die Gespräche werden in ihrer Firma nicht ernst genommen.",
      "Die Gespräche dauern zu lange.",
      "Mitarbeitergespräche sind grundsätzlich unnötig."
     ],
     "loesung": 0,
     "stelle": "meistens ein Ritual, das man schnell abhakt",
     "erklaerung": "Grundsätzlich findet sie die Gespräche hilfreich. Kritik übt sie an der Praxis in ihrer Firma."
    },
    {
     "art": "hoerwahl",
     "ort": "Tagung: Künstliche Intelligenz",
     "wer": "Mann",
     "text": "Viele sagen, künstliche Intelligenz nimmt uns die Arbeit weg. Das sehe ich nicht so. Sie nimmt uns langweilige Arbeit weg, und das ist doch gut.",
     "frage": "Welche Haltung hat der Mann?",
     "opt": [
      "Er hat Angst um seinen Arbeitsplatz.",
      "Er findet seine Arbeit langweilig.",
      "Er sieht künstliche Intelligenz positiv."
     ],
     "loesung": 2,
     "stelle": "Das sehe ich nicht so",
     "erklaerung": "Die Angst ist die Meinung von „vielen\". Mit „Das sehe ich nicht so\" widerspricht er."
    },
    {
     "art": "hoerwahl",
     "ort": "Tagung: Großraumbüro",
     "wer": "Frau",
     "text": "Die Idee mit dem Großraumbüro klingt modern. Ich kann mir nur nicht vorstellen, wie man da in Ruhe telefonieren soll.",
     "frage": "Welche Haltung hat die Frau?",
     "opt": [
      "Sie findet das Großraumbüro modern und gut.",
      "Sie hat Zweifel am Großraumbüro.",
      "Sie telefoniert nicht gern."
     ],
     "loesung": 1,
     "stelle": "Ich kann mir nur nicht vorstellen",
     "erklaerung": "„klingt modern\" ist höflich. Das kleine Wort „nur\" leitet ihre Zweifel ein."
    },
    {
     "art": "hoerwahl",
     "ort": "Tagung: Betriebsausflug",
     "wer": "Mann",
     "text": "Ein Betriebsausflug im Jahr? Von mir aus. Aber mir wäre ehrlich gesagt eine Prämie lieber als ein Ausflug, auf den die Hälfte gar keine Lust hat.",
     "frage": "Was möchte der Mann?",
     "opt": [
      "Er möchte zwei Ausflüge im Jahr.",
      "Er hätte lieber Geld als einen Ausflug.",
      "Er freut sich auf den Ausflug."
     ],
     "loesung": 1,
     "stelle": "mir wäre ehrlich gesagt eine Prämie lieber",
     "erklaerung": "„Von mir aus\" klingt wie Zustimmung, ist aber gleichgültig. Sein Wunsch: eine Prämie."
    },
    {
     "art": "hoerwahl",
     "ort": "Tagung: Sparen im Betrieb",
     "wer": "Frau",
     "text": "Natürlich müssen wir sparen, das sieht jeder. Aber ausgerechnet beim Arbeitsschutz? Da hört es für mich auf.",
     "frage": "Welche Haltung hat die Frau?",
     "opt": [
      "Sie lehnt Sparen beim Arbeitsschutz ab.",
      "Sie findet, dass der Betrieb schon genug spart.",
      "Sie ist gegen jedes Sparen."
     ],
     "loesung": 0,
     "stelle": "Da hört es für mich auf",
     "erklaerung": "Sparen findet sie grundsätzlich richtig. „ausgerechnet\" und „Da hört es auf\" zeigen die Grenze."
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
   "was": "Vier Ansagen am Telefon: Anrufbeantworter, Warteschleife, Nachrichten von Kollegen. Zu jeder eine Frage mit drei Antworten. Du hörst jeden Text nur einmal.",
   "tipp": "Lies die Frage vor dem Hören. Dann weißt du, auf welches Detail es ankommt: Zeit, Raum, Nummer, was zu tun ist.",
   "zeichen": "☎️",
   "farbe": "turq",
   "punkte": 4,
   "mal": 1,
   "runden": [
    {
     "id": "b12h1s1",
     "titel": "Vier Telefonansagen",
     "aufgaben": [
      {
       "von": "Anrufbeantworter — Spedition Krause",
       "wer": "Mann",
       "text": "Spedition Krause, guten Tag. Sie rufen außerhalb unserer Geschäftszeiten an. Unser Büro ist montags bis freitags von sieben bis siebzehn Uhr besetzt. Wenn Sie eine Sendung verfolgen wollen, brauchen Sie dafür nicht anzurufen, das geht rund um die Uhr auf unserer Internetseite mit Ihrer Sendungsnummer. Bei Schäden an einer Lieferung melden Sie sich bitte innerhalb von drei Tagen schriftlich, am besten mit Fotos. Für dringende Fragen zu Abholungen am Wochenende erreichen Sie unseren Bereitschaftsdienst unter der Durchwahl vier null zwei. Vielen Dank.",
       "frage": "Was soll man tun, wenn eine Lieferung beschädigt ist?",
       "opt": [
        "Die Sendungsnummer im Internet eingeben.",
        "Innerhalb von drei Tagen schriftlich Bescheid geben.",
        "Sofort den Bereitschaftsdienst anrufen."
       ],
       "loesung": 1,
       "stelle": "melden Sie sich bitte innerhalb von drei Tagen schriftlich",
       "erklaerung": "Der Bereitschaftsdienst ist nur für Abholungen am Wochenende, die Internetseite nur für die Sendungsverfolgung."
      },
      {
       "von": "Nachricht einer Kollegin — Frau Yilmaz, Einkauf",
       "wer": "Frau",
       "text": "Ja, hallo Herr Brandt, hier ist Derya Yilmaz aus dem Einkauf. Es geht um unser Treffen morgen mit dem Lieferanten. Wir hatten ja Raum zwei null vier gesagt, aber da ist der Beamer kaputt, hat mir die Haustechnik eben gesagt. Ich hab jetzt den kleinen Besprechungsraum im Erdgeschoss gebucht, neben dem Empfang. Die Uhrzeit bleibt, also zehn Uhr. Ach, und könnten Sie bitte die Preisliste vom letzten Jahr mitbringen? Ich finde meine nicht mehr. Danke, bis morgen.",
       "frage": "Wo findet das Treffen statt?",
       "opt": [
        "Im Besprechungsraum neben dem Empfang.",
        "Im Büro der Haustechnik.",
        "In Raum zwei null vier."
       ],
       "loesung": 0,
       "stelle": "den kleinen Besprechungsraum im Erdgeschoss gebucht",
       "erklaerung": "Raum zwei null vier war der alte Plan. Wegen des kaputten Beamers gibt es einen neuen Raum."
      },
      {
       "von": "Warteschleife — Stadtwerke Lindenau",
       "wer": "Frau",
       "text": "Herzlich willkommen beim Kundenservice der Stadtwerke Lindenau. Zurzeit sind alle Leitungen besetzt. Die Wartezeit beträgt etwa zwölf Minuten. Wenn Sie Ihren Zählerstand mitteilen möchten, legen Sie bitte auf und nutzen Sie das Formular auf unserer Internetseite, das geht schneller. Bei einem Umzug halten Sie bitte Ihre Kundennummer bereit, Sie finden sie oben rechts auf Ihrer Rechnung. Bei einer Störung der Stromversorgung drücken Sie jetzt die Eins, dann werden Sie direkt mit dem Störungsdienst verbunden.",
       "frage": "Was sollen Anrufer tun, die ihren Zählerstand melden wollen?",
       "opt": [
        "In der Leitung bleiben und warten.",
        "Das Formular im Internet benutzen.",
        "Die Eins drücken."
       ],
       "loesung": 1,
       "stelle": "nutzen Sie das Formular auf unserer Internetseite",
       "erklaerung": "Die Eins ist nur für Störungen. Für den Zählerstand soll man auflegen und das Formular nehmen."
      },
      {
       "von": "Nachricht eines Kunden — Herr Petrović, Autohaus Sonnenhang",
       "wer": "Mann",
       "text": "Guten Tag, Petrović hier, Autohaus Sonnenhang. Ich rufe wegen der Rechnung an, die Sie uns letzte Woche geschickt haben, Nummer achtzehn zweiundvierzig. Da sind zwanzig Reifen berechnet, wir haben aber nur sechzehn bekommen. Die anderen vier sollten ja nachgeliefert werden, sind aber bis heute nicht da. Bitte schicken Sie mir eine korrigierte Rechnung, dann überweise ich sofort. Sie erreichen mich bis sechzehn Uhr unter null fünf eins eins, drei acht sieben null. Danke.",
       "frage": "Was möchte Herr Petrović?",
       "opt": [
        "Vier weitere Reifen bestellen.",
        "Eine neue Rechnung bekommen.",
        "Sein Geld zurück überwiesen bekommen."
       ],
       "loesung": 1,
       "stelle": "Bitte schicken Sie mir eine korrigierte Rechnung",
       "erklaerung": "Er will nichts nachbestellen und hat noch nicht bezahlt. Er braucht eine richtige Rechnung."
      }
     ]
    },
    {
     "id": "b12h1s2",
     "titel": "Vier Telefonansagen",
     "aufgaben": [
      {
       "von": "Anrufbeantworter — Praxis für Arbeitsmedizin Dr. Okonkwo",
       "wer": "Frau",
       "text": "Sie sind verbunden mit der arbeitsmedizinischen Praxis Doktor Okonkwo. Unsere Praxis ist vom zweiundzwanzigsten Dezember bis zum dritten Januar geschlossen. Ab dem vierten Januar sind wir wieder zu den gewohnten Zeiten für Sie da. Untersuchungen für neue Mitarbeiter, die ihre Stelle im Januar antreten, vereinbaren Sie bitte bis zum neunzehnten Dezember. Die Vertretung übernimmt in dieser Zeit die Praxis Hellwig in der Bahnhofstraße. Bitte bringen Sie dorthin Ihre Versichertenkarte und den Untersuchungsbogen Ihres Arbeitgebers mit.",
       "frage": "Bis wann sollen neue Mitarbeiter einen Termin vereinbaren?",
       "opt": [
        "Bis zum vierten Januar.",
        "Bis zum neunzehnten Dezember.",
        "Bis zum zweiundzwanzigsten Dezember."
       ],
       "loesung": 1,
       "stelle": "vereinbaren Sie bitte bis zum neunzehnten Dezember",
       "erklaerung": "Der zweiundzwanzigste ist der Beginn der Schließung, der vierte Januar das Ende."
      },
      {
       "von": "Nachricht vom Schichtleiter — Thomas Wagner, Lager",
       "wer": "Mann",
       "text": "Hallo Ivana, hier ist Thomas. Du, ich muss den Plan für Samstag ändern. Der Lastwagen aus Polen kommt nicht um sechs, sondern erst gegen neun, der stand die halbe Nacht im Stau. Das heißt, du brauchst nicht schon um halb sechs da zu sein. Komm bitte um halb neun, dann hast du noch Zeit, Tor zwei frei zu räumen. Der Stapler steht übrigens noch in der Werkstatt, nimm den aus Halle drei. Wenn was ist, ruf mich auf dem Handy an. Bis Samstag.",
       "frage": "Wann soll Ivana am Samstag kommen?",
       "opt": [
        "Um halb neun.",
        "Um halb sechs.",
        "Um neun."
       ],
       "loesung": 0,
       "stelle": "Komm bitte um halb neun",
       "erklaerung": "Halb sechs war der alte Plan, um neun kommt der Lastwagen. Ivana soll eine halbe Stunde vorher da sein."
      },
      {
       "von": "Ansage — Technik-Hotline Datenwerk Systeme",
       "wer": "Mann",
       "text": "Willkommen bei der Hotline für technische Fragen von Datenwerk Systeme. Bitte beachten Sie: Am Dienstag zwischen achtzehn und zweiundzwanzig Uhr führen wir Wartungsarbeiten durch. In dieser Zeit können Sie sich nicht im Kundenportal anmelden. Ihre E-Mails sind davon nicht betroffen. Wenn Sie Ihr Passwort vergessen haben, sagen Sie jetzt bitte „Passwort\". Für alle anderen Fragen bleiben Sie bitte in der Leitung, der nächste freie Mitarbeiter ist gleich für Sie da.",
       "frage": "Was funktioniert am Dienstagabend nicht?",
       "opt": [
        "Die Hotline.",
        "Das Versenden von E-Mails.",
        "Die Anmeldung im Kundenportal."
       ],
       "loesung": 2,
       "stelle": "können Sie sich nicht im Kundenportal anmelden",
       "erklaerung": "Die E-Mails sind ausdrücklich „nicht betroffen\". Nur das Kundenportal ist gesperrt."
      },
      {
       "von": "Nachricht einer Kundin — Frau Lindqvist, Bäckerei am Markt",
       "wer": "Frau",
       "text": "Ja, guten Morgen, Lindqvist von der Bäckerei am Markt. Ich hatte bei Ihnen für Freitag die Reparatur von unserem Backofen bestellt. Ihr Techniker wollte um acht kommen. Das ist bei uns aber ganz schlecht, da ist der Laden voll. Geht es vielleicht ab vierzehn Uhr? Da ist es ruhiger. Und bitte sagen Sie ihm, er soll hinten über den Hof reinkommen, nicht durch den Laden. Rufen Sie mich doch kurz zurück, ja? Danke schön.",
       "frage": "Was soll der Techniker tun?",
       "opt": [
        "Frau Lindqvist am Freitag vorher anrufen.",
        "Am Nachmittag über den Hof hereinkommen.",
        "Um acht Uhr durch den Laden kommen."
       ],
       "loesung": 1,
       "stelle": "er soll hinten über den Hof reinkommen",
       "erklaerung": "Acht Uhr passt nicht, und den Rückruf soll die Firma machen, nicht der Techniker."
      }
     ]
    },
    {
     "id": "b12h1s3",
     "titel": "Vier Telefonansagen",
     "aufgaben": [
      {
       "von": "Anrufbeantworter — Personalabteilung Klinikum Weserbogen",
       "wer": "Frau",
       "text": "Guten Tag, Sie haben die Personalabteilung des Klinikums Weserbogen erreicht. Wir sind gerade nicht am Platz. Wenn Sie sich auf eine Stelle bewerben möchten, schicken Sie Ihre Unterlagen bitte nur noch über unser Bewerberportal, Bewerbungen per Post können wir leider nicht mehr bearbeiten. Mitarbeiter, die Fragen zu ihrer Gehaltsabrechnung haben, wenden sich bitte an Frau Kowalski unter der Durchwahl drei null sechs. Alle anderen hinterlassen bitte nach dem Signalton Namen und Telefonnummer, wir rufen zurück.",
       "frage": "Wie soll man sich bewerben?",
       "opt": [
        "Telefonisch bei Frau Kowalski.",
        "Per Post.",
        "Über das Bewerberportal."
       ],
       "loesung": 2,
       "stelle": "nur noch über unser Bewerberportal",
       "erklaerung": "Post wird nicht mehr bearbeitet, und Frau Kowalski ist für die Gehaltsabrechnung zuständig."
      },
      {
       "von": "Nachricht einer Kollegin — Frau Becker, Empfang",
       "wer": "Frau",
       "text": "Hallo Herr Demir, Becker vom Empfang. Bei mir steht ein Herr Albers, der sagt, er hat um elf einen Termin mit Ihnen. Ich hab ihn erst mal in die Cafeteria geschickt, im ersten Stock, da kann er einen Kaffee trinken. Er wartet da auf Sie. Ach so, und er hat ein Paket für Sie mitgebracht, das liegt hier bei mir am Empfang, das ist ziemlich schwer. Holen Sie es bitte nachher ab, ich kann hier nicht weg. Danke.",
       "frage": "Wo wartet Herr Albers?",
       "opt": [
        "Am Empfang.",
        "Im Büro von Herrn Demir.",
        "In der Cafeteria."
       ],
       "loesung": 2,
       "stelle": "in die Cafeteria geschickt, im ersten Stock",
       "erklaerung": "Am Empfang liegt nur das Paket. Herr Albers selbst ist in der Cafeteria."
      },
      {
       "von": "Warteschleife — Versandhandel Gartenglück",
       "wer": "Mann",
       "text": "Vielen Dank für Ihren Anruf bei Gartenglück. Leider sind im Moment alle Kollegen im Gespräch. Sie möchten eine Bestellung zurückschicken? Das Rücksendeetikett können Sie ganz einfach in Ihrem Kundenkonto ausdrucken, dafür müssen Sie nicht warten. Bitte beachten Sie, dass Pflanzen vom Umtausch ausgeschlossen sind. Wenn eine Lieferung beschädigt angekommen ist, drücken Sie die Zwei. Für alle anderen Anliegen bleiben Sie bitte dran.",
       "frage": "Was kann man nicht zurückschicken?",
       "opt": [
        "Pflanzen.",
        "Beschädigte Ware.",
        "Bestellungen ohne Rücksendeetikett."
       ],
       "loesung": 0,
       "stelle": "dass Pflanzen vom Umtausch ausgeschlossen sind",
       "erklaerung": "„vom Umtausch ausgeschlossen\" heißt: kann man nicht zurückgeben. Für beschädigte Ware gibt es die Zwei."
      },
      {
       "von": "Nachricht eines Lieferanten — Herr Haas, Druckerei Weidner",
       "wer": "Mann",
       "text": "Ja, Haas hier, Druckerei Weidner. Es geht um Ihre Flyer für die Messe. Die Farbe auf der Rückseite war nicht so, wie wir das wollten, deshalb drucken wir die ganze Auflage noch mal neu, das kostet Sie natürlich nichts extra. Aber dadurch werden die Flyer erst am Mittwoch fertig statt am Montag. Wenn Sie die unbedingt früher brauchen, könnten wir Ihnen am Montag schon mal fünfhundert Stück von der alten Auflage mitgeben. Sagen Sie mir einfach Bescheid.",
       "frage": "Was bietet Herr Haas an?",
       "opt": [
        "Einen Preisnachlass für die alte Auflage.",
        "Einen Teil der alten Flyer schon am Montag.",
        "Die Lieferung der neuen Flyer am Montag."
       ],
       "loesung": 1,
       "stelle": "am Montag schon mal fünfhundert Stück",
       "erklaerung": "Die neuen Flyer kommen erst am Mittwoch. Von einem Preisnachlass ist keine Rede, nur „nichts extra\"."
      }
     ]
    }
   ]
  },
  {
   "nr": 2,
   "art": "gespraech",
   "name": "Hören: Gespräche am Arbeitsplatz",
   "kurz": "Fünf kurze Gespräche, je zwei Aufgaben",
   "was": "Fünf kurze Gespräche im Betrieb. Zuerst: Worum geht es, richtig oder falsch? Dann eine Detailfrage mit drei Antworten. Alles nur einmal.",
   "tipp": "Bei der ersten Aufgabe zählt das Thema, nicht jedes Wort. Bei der zweiten das Detail: Pläne ändern sich oft noch im Gespräch.",
   "zeichen": "💬",
   "farbe": "gold",
   "punkte": 10,
   "mal": 1,
   "runden": [
    {
     "id": "b12h2s1",
     "titel": "Fünf Gespräche: Büro und Verwaltung",
     "aufgaben": [
      {
       "ort": "Gespräch 1 — Abschnitt 1",
       "zeilen": [
        {
         "wer": "Frau",
         "text": "Sag mal, Jens, weißt du, ob der Drucker im zweiten Stock wieder geht?"
        },
        {
         "wer": "Mann",
         "text": "Der große? Nee, da war heute Morgen schon wieder Papierstau. Ich hab den Techniker angerufen."
        },
        {
         "wer": "Frau",
         "text": "Mist. Ich muss nämlich noch die Unterlagen für die Schulung morgen ausdrucken, sechzig Seiten."
        },
        {
         "wer": "Mann",
         "text": "Na ja, du kannst unten bei der Personalabteilung drucken, die haben auch so ein großes Gerät."
        }
       ],
       "satz": "Die Frau möchte etwas ausdrucken, aber das Gerät funktioniert nicht.",
       "loesung": true,
       "stelle": "Ich muss nämlich noch die Unterlagen für die Schulung morgen ausdrucken",
       "erklaerung": "Der Drucker hat Papierstau, und die Frau braucht sechzig Seiten für morgen."
      },
      {
       "ort": "Gespräch 1 — Abschnitt 2",
       "zeilen": [
        {
         "wer": "Frau",
         "text": "Bei der Personalabteilung? Da brauch ich doch einen Code, oder?"
        },
        {
         "wer": "Mann",
         "text": "Ja, aber frag Frau Sauer, die gibt dir den. Die sitzt in Zimmer einhundertvierzehn."
        },
        {
         "wer": "Frau",
         "text": "Einhundertvierzehn, okay. Und wann kommt der Techniker?"
        },
        {
         "wer": "Mann",
         "text": "Erst morgen Nachmittag, hat er gesagt. Also zu spät für dich."
        }
       ],
       "frage": "Was soll die Frau tun?",
       "opt": [
        "Den Techniker noch einmal anrufen.",
        "Bis morgen Nachmittag auf den Techniker warten.",
        "Frau Sauer nach dem Code fragen."
       ],
       "loesung": 2,
       "stelle": "frag Frau Sauer, die gibt dir den",
       "erklaerung": "Der Techniker kommt zu spät. Für den Drucker unten braucht sie den Code von Frau Sauer."
      },
      {
       "ort": "Gespräch 2 — Abschnitt 1",
       "zeilen": [
        {
         "wer": "Mann",
         "text": "Frau Kühn, haben Sie kurz Zeit? Es geht um meinen Urlaub im August."
        },
        {
         "wer": "Frau",
         "text": "Ja, kommen Sie rein. Was gibt es denn?"
        },
        {
         "wer": "Mann",
         "text": "Ich hatte ja die ersten zwei Augustwochen beantragt. Jetzt hat meine Frau aber erst ab der dritten Woche frei bekommen. Kann ich das noch tauschen?"
        },
        {
         "wer": "Frau",
         "text": "Moment, ich schau mal in den Plan. Hm. In der dritten Woche ist schon Herr Lang weg."
        }
       ],
       "satz": "Der Mann möchte seinen Urlaub absagen.",
       "loesung": false,
       "stelle": "Kann ich das noch tauschen?",
       "erklaerung": "Er will den Urlaub nicht absagen, sondern in eine andere Zeit legen."
      },
      {
       "ort": "Gespräch 2 — Abschnitt 2",
       "zeilen": [
        {
         "wer": "Frau",
         "text": "Also, wenn Herr Lang einverstanden ist, eine Woche früher zu gehen, dann geht das. Sonst wird es schwierig."
        },
        {
         "wer": "Mann",
         "text": "Ach so. Dann frag ich ihn gleich mal."
        },
        {
         "wer": "Frau",
         "text": "Ja, machen Sie das. Und dann brauche ich einen neuen Antrag von Ihnen, schriftlich, der alte ist ja schon genehmigt."
        },
        {
         "wer": "Mann",
         "text": "Alles klar, bis morgen haben Sie den."
        }
       ],
       "frage": "Was braucht Frau Kühn vom Mann?",
       "opt": [
        "Einen neuen schriftlichen Antrag.",
        "Eine Unterschrift von Herrn Lang.",
        "Den alten genehmigten Antrag."
       ],
       "loesung": 0,
       "stelle": "dann brauche ich einen neuen Antrag von Ihnen, schriftlich",
       "erklaerung": "Mit Herrn Lang soll er nur sprechen. Der alte Antrag ist schon genehmigt, er braucht einen neuen."
      },
      {
       "ort": "Gespräch 3 — Abschnitt 1",
       "zeilen": [
        {
         "wer": "Frau",
         "text": "Hallo, Sie sind bestimmt Herr Osei, der Neue, oder?"
        },
        {
         "wer": "Mann",
         "text": "Ja, genau. Guten Morgen. Mir hat man gesagt, ich soll mich bei Ihnen melden."
        },
        {
         "wer": "Frau",
         "text": "Richtig, ich bin Petra Lange, ich zeig Ihnen heute alles. Haben Sie schon Ihren Ausweis für die Tür?"
        },
        {
         "wer": "Mann",
         "text": "Nein, noch nicht. Am Empfang meinten sie, der ist noch nicht fertig."
        }
       ],
       "satz": "Der Mann hat heute seinen ersten Arbeitstag.",
       "loesung": true,
       "stelle": "Sie sind bestimmt Herr Osei, der Neue",
       "erklaerung": "„der Neue\" und „ich zeig Ihnen heute alles\" zeigen: Er fängt heute an."
      },
      {
       "ort": "Gespräch 3 — Abschnitt 2",
       "zeilen": [
        {
         "wer": "Frau",
         "text": "Na ja, das kennen wir. Dann bekommen Sie erst mal einen Besucherausweis, der gilt eine Woche."
        },
        {
         "wer": "Mann",
         "text": "Und der öffnet auch die Tür zum Lager?"
        },
        {
         "wer": "Frau",
         "text": "Nein, leider nicht, nur die Bürotüren. Fürs Lager müssen Sie bis dahin klingeln. Aber das ist in der ersten Woche eh nicht Ihr Bereich."
        }
       ],
       "frage": "Was kann der Mann mit dem Besucherausweis machen?",
       "opt": [
        "Nur die Tür zum Lager öffnen.",
        "Nur die Bürotüren öffnen.",
        "Alle Türen öffnen."
       ],
       "loesung": 1,
       "stelle": "Nein, leider nicht, nur die Bürotüren",
       "erklaerung": "Für das Lager muss er klingeln. Der Ausweis öffnet nur die Büros."
      },
      {
       "ort": "Gespräch 4 — Abschnitt 1",
       "zeilen": [
        {
         "wer": "Mann",
         "text": "Du, Aylin, die Besprechung mit dem Vertrieb um drei, findet die statt?"
        },
        {
         "wer": "Frau",
         "text": "Moment, da kam vorhin eine Mail. Ja, hier: Herr Berger ist krank. Die wird verschoben."
        },
        {
         "wer": "Mann",
         "text": "Ach so. Auf wann denn?"
        },
        {
         "wer": "Frau",
         "text": "Das steht hier noch nicht. Er meldet sich, schreibt seine Assistentin."
        }
       ],
       "satz": "Die Besprechung um drei Uhr findet heute nicht statt.",
       "loesung": true,
       "stelle": "Herr Berger ist krank. Die wird verschoben",
       "erklaerung": "„verschoben\" heißt: nicht heute, sondern später. Der neue Termin ist noch offen."
      },
      {
       "ort": "Gespräch 4 — Abschnitt 2",
       "zeilen": [
        {
         "wer": "Mann",
         "text": "Gut, dann hab ich ja Zeit für die Angebote. Die müssen bis Freitag raus."
        },
        {
         "wer": "Frau",
         "text": "Bis Freitag? Ich dachte, bis Donnerstag."
        },
        {
         "wer": "Mann",
         "text": "Nee, der Kunde hat uns noch einen Tag mehr gegeben. Aber ich will die trotzdem morgen fertig haben, Freitag bin ich beim Zahnarzt."
        }
       ],
       "frage": "Wann will der Mann die Angebote fertig haben?",
       "opt": [
        "Am Freitag.",
        "Heute.",
        "Morgen."
       ],
       "loesung": 2,
       "stelle": "Aber ich will die trotzdem morgen fertig haben",
       "erklaerung": "Freitag ist die Frist des Kunden. Weil er dann beim Zahnarzt ist, will er schon morgen fertig sein."
      },
      {
       "ort": "Gespräch 5 — Abschnitt 1",
       "zeilen": [
        {
         "wer": "Frau",
         "text": "Herr Krüger, ich mache gerade die Bestellung für Büromaterial. Brauchen Sie noch was?"
        },
        {
         "wer": "Mann",
         "text": "Ja, Ordner. Die breiten. Und Druckerpatronen, die schwarzen sind fast leer."
        },
        {
         "wer": "Frau",
         "text": "Ordner, okay. Wie viele?"
        },
        {
         "wer": "Mann",
         "text": "Zehn. Nein, sagen wir zwanzig, im Januar kommt ja die ganze Ablage vom letzten Jahr."
        }
       ],
       "satz": "Der Mann bestellt selbst Büromaterial.",
       "loesung": false,
       "stelle": "ich mache gerade die Bestellung für Büromaterial",
       "erklaerung": "Die Frau macht die Bestellung. Der Mann sagt nur, was er braucht."
      },
      {
       "ort": "Gespräch 5 — Abschnitt 2",
       "zeilen": [
        {
         "wer": "Frau",
         "text": "Zwanzig Ordner. Und die Patronen, für welches Gerät war das noch mal?"
        },
        {
         "wer": "Mann",
         "text": "Der Drucker hier im Zimmer. Die normalen schwarzen."
        },
        {
         "wer": "Frau",
         "text": "Gut. Aber die Patronen dauern diesmal etwas, der Lieferant hat Lieferschwierigkeiten. Vielleicht zwei Wochen."
        },
        {
         "wer": "Mann",
         "text": "Zwei Wochen? Dann leih ich mir solange eine von Frau Engel."
        }
       ],
       "frage": "Was macht der Mann, bis die Patronen kommen?",
       "opt": [
        "Er leiht sich eine Patrone bei einer Kollegin.",
        "Er druckt zwei Wochen lang nichts.",
        "Er bestellt bei einem anderen Lieferanten."
       ],
       "loesung": 0,
       "stelle": "Dann leih ich mir solange eine von Frau Engel",
       "erklaerung": "„solange\" heißt: bis die Lieferung kommt. Frau Engel ist eine Kollegin."
      }
     ]
    },
    {
     "id": "b12h2s2",
     "titel": "Fünf Gespräche: Lager, Logistik und Produktion",
     "aufgaben": [
      {
       "ort": "Gespräch 1 — Abschnitt 1",
       "zeilen": [
        {
         "wer": "Mann",
         "text": "Ewa, kannst du mal kommen? Bei der Lieferung von Firma Stein stimmt was nicht."
        },
        {
         "wer": "Frau",
         "text": "Was ist denn los?"
        },
        {
         "wer": "Mann",
         "text": "Auf dem Lieferschein stehen vierzig Paletten, aber hier sind nur sechsunddreißig."
        },
        {
         "wer": "Frau",
         "text": "Hast du richtig gezählt? Hinten an der Rampe stehen noch welche."
        }
       ],
       "satz": "Es geht um ein mögliches Problem bei einer Lieferung.",
       "loesung": true,
       "stelle": "Bei der Lieferung von Firma Stein stimmt was nicht",
       "erklaerung": "Der Mann glaubt, dass Paletten fehlen. Ob das stimmt, zeigt erst der zweite Abschnitt."
      },
      {
       "ort": "Gespräch 1 — Abschnitt 2",
       "zeilen": [
        {
         "wer": "Mann",
         "text": "Ach so, ja, die vier da hinten. Die gehören dazu?"
        },
        {
         "wer": "Frau",
         "text": "Ja, die hat der Fahrer schon vorhin abgeladen. Also passt alles."
        },
        {
         "wer": "Mann",
         "text": "Gut. Dann unterschreib ich jetzt den Lieferschein."
        },
        {
         "wer": "Frau",
         "text": "Warte, erst die Folie aufmachen und schauen, ob was kaputt ist. Sonst können wir nachher nichts mehr reklamieren."
        }
       ],
       "frage": "Was soll der Mann vor der Unterschrift machen?",
       "opt": [
        "Die Ware auf Schäden kontrollieren.",
        "Die Paletten noch einmal zählen.",
        "Den Fahrer anrufen."
       ],
       "loesung": 0,
       "stelle": "erst die Folie aufmachen und schauen, ob was kaputt ist",
       "erklaerung": "Die Anzahl stimmt schon. Vor der Unterschrift soll er prüfen, ob etwas beschädigt ist."
      },
      {
       "ort": "Gespräch 2 — Abschnitt 1",
       "zeilen": [
        {
         "wer": "Frau",
         "text": "Herr Yıldız, Sie wollten mich sprechen?"
        },
        {
         "wer": "Mann",
         "text": "Ja, Frau Roth. Ich wollte fragen, ob ich den Staplerschein machen kann. Ich fahr ja jetzt schon oft mit dem Hubwagen, und der Kollege Bauer geht im Sommer in Rente."
        },
        {
         "wer": "Frau",
         "text": "Ja, das ist eine gute Idee. Wir brauchen sowieso noch jemanden."
        }
       ],
       "satz": "Der Mann möchte eine Weiterbildung machen.",
       "loesung": true,
       "stelle": "ob ich den Staplerschein machen kann",
       "erklaerung": "Der Staplerschein ist eine Weiterbildung. Die Chefin findet die Idee gut."
      },
      {
       "ort": "Gespräch 2 — Abschnitt 2",
       "zeilen": [
        {
         "wer": "Mann",
         "text": "Und wer bezahlt das? Ich hab gehört, das kostet über dreihundert Euro."
        },
        {
         "wer": "Frau",
         "text": "Das zahlt die Firma, keine Sorge. Aber der Kurs ist an zwei Samstagen. Die Zeit bekommen Sie als Überstunden gutgeschrieben."
        },
        {
         "wer": "Mann",
         "text": "Ah, gut. Wann ist der nächste?"
        },
        {
         "wer": "Frau",
         "text": "Im April, glaube ich. Ich schau nach und sag Ihnen Bescheid."
        }
       ],
       "frage": "Was gilt für den Kurs?",
       "opt": [
        "Der Mann muss ihn selbst bezahlen.",
        "Er beginnt im Sommer.",
        "Er findet an zwei Samstagen statt."
       ],
       "loesung": 2,
       "stelle": "Aber der Kurs ist an zwei Samstagen",
       "erklaerung": "Die Firma zahlt. Im Sommer geht Herr Bauer in Rente, der Kurs ist im April."
      },
      {
       "ort": "Gespräch 3 — Abschnitt 1",
       "zeilen": [
        {
         "wer": "Mann",
         "text": "Linie drei steht schon wieder."
        },
        {
         "wer": "Frau",
         "text": "Was, schon wieder? Das ist heute das dritte Mal."
        },
        {
         "wer": "Mann",
         "text": "Ja, die Folie reißt immer an der gleichen Stelle. Ich glaube, die neue Rolle passt nicht richtig."
        },
        {
         "wer": "Frau",
         "text": "Na toll. Und wir müssen bis zwei noch achthundert Packungen schaffen."
        }
       ],
       "satz": "Eine Maschine funktioniert nicht richtig.",
       "loesung": true,
       "stelle": "Linie drei steht schon wieder",
       "erklaerung": "„steht\" heißt hier: Die Maschine läuft nicht. Das ist heute schon dreimal passiert."
      },
      {
       "ort": "Gespräch 3 — Abschnitt 2",
       "zeilen": [
        {
         "wer": "Frau",
         "text": "Hast du die Instandhaltung schon angerufen?"
        },
        {
         "wer": "Mann",
         "text": "Ja, aber Herr Kraus ist gerade in Halle zwei. Er kommt in einer halben Stunde."
        },
        {
         "wer": "Frau",
         "text": "Eine halbe Stunde? So lange können wir nicht warten. Weißt du was, wir nehmen die alten Rollen aus dem Lager, mit denen lief es ja."
        },
        {
         "wer": "Mann",
         "text": "Gut, ich hol sie."
        }
       ],
       "frage": "Was wollen die beiden jetzt machen?",
       "opt": [
        "In Halle zwei weiterarbeiten.",
        "Auf Herrn Kraus warten.",
        "Die alten Folienrollen benutzen."
       ],
       "loesung": 2,
       "stelle": "wir nehmen die alten Rollen aus dem Lager",
       "erklaerung": "Warten ist zu lang. Halle zwei ist nur der Ort, wo Herr Kraus gerade ist."
      },
      {
       "ort": "Gespräch 4 — Abschnitt 1",
       "zeilen": [
        {
         "wer": "Frau",
         "text": "Marek, hast du nächste Woche Frühschicht?"
        },
        {
         "wer": "Mann",
         "text": "Ja, warum?"
        },
        {
         "wer": "Frau",
         "text": "Ich hab Spätschicht, aber am Mittwoch hat mein Sohn einen Elternabend in der Schule. Könnten wir tauschen?"
        },
        {
         "wer": "Mann",
         "text": "Hm, nur Mittwoch oder die ganze Woche?"
        }
       ],
       "satz": "Die Frau möchte die ganze Woche Frühschicht haben.",
       "loesung": false,
       "stelle": "am Mittwoch hat mein Sohn einen Elternabend",
       "erklaerung": "Sie braucht nur einen Abend frei, wegen des Elternabends am Mittwoch."
      },
      {
       "ort": "Gespräch 4 — Abschnitt 2",
       "zeilen": [
        {
         "wer": "Frau",
         "text": "Nur Mittwoch. Ich weiß, das ist kurzfristig."
        },
        {
         "wer": "Mann",
         "text": "Mittwoch geht. Aber dann musst du das dem Herrn Schmid sagen, nicht ich. Der will das immer schriftlich, mit Unterschrift von uns beiden."
        },
        {
         "wer": "Frau",
         "text": "Ja, klar. Ich druck das Formular aus und bring es dir in der Pause."
        }
       ],
       "frage": "Was muss die Frau tun?",
       "opt": [
        "Den Mann am Mittwoch anrufen.",
        "Den Tausch dem Vorgesetzten schriftlich melden.",
        "Herrn Schmid um einen freien Tag bitten."
       ],
       "loesung": 1,
       "stelle": "Der will das immer schriftlich, mit Unterschrift von uns beiden",
       "erklaerung": "Sie will keinen freien Tag, sie tauscht nur. Den Tausch muss sie Herrn Schmid schriftlich geben."
      },
      {
       "ort": "Gespräch 5 — Abschnitt 1",
       "zeilen": [
        {
         "wer": "Mann",
         "text": "Hast du die Mail gelesen? Wegen der Sicherheitsunterweisung?"
        },
        {
         "wer": "Frau",
         "text": "Nein, welche Mail?"
        },
        {
         "wer": "Mann",
         "text": "Die muss jetzt jeder jedes Jahr machen, auch wir, die schon lange hier sind. Am Computer, so ein Kurs mit Fragen am Ende."
        },
        {
         "wer": "Frau",
         "text": "Ach, das schon wieder. Letztes Jahr war das doch auf Papier."
        }
       ],
       "satz": "Alle Mitarbeiter müssen an einer Sicherheitsunterweisung teilnehmen.",
       "loesung": true,
       "stelle": "Die muss jetzt jeder jedes Jahr machen",
       "erklaerung": "„jeder\", auch die langjährigen Kollegen. Neu ist nur, dass es am Computer läuft."
      },
      {
       "ort": "Gespräch 5 — Abschnitt 2",
       "zeilen": [
        {
         "wer": "Mann",
         "text": "Ja, jetzt ist es online. Dauert etwa vierzig Minuten. Bis Ende des Monats muss man fertig sein."
        },
        {
         "wer": "Frau",
         "text": "Und wann soll ich das machen? Während der Schicht?"
        },
        {
         "wer": "Mann",
         "text": "Ja, das gilt als Arbeitszeit. Im Pausenraum steht extra ein Computer dafür. Nimm aber Kopfhörer mit, da sind Videos dabei."
        }
       ],
       "frage": "Wo kann man die Unterweisung machen?",
       "opt": [
        "Zu Hause am eigenen Computer.",
        "Im Büro des Chefs.",
        "Am Computer im Pausenraum."
       ],
       "loesung": 2,
       "stelle": "Im Pausenraum steht extra ein Computer dafür",
       "erklaerung": "„online\" heißt nicht automatisch zu Hause. Es ist Arbeitszeit, der Computer steht im Pausenraum."
      }
     ]
    },
    {
     "id": "b12h2s3",
     "titel": "Fünf Gespräche: Pflege und Gesundheit",
     "aufgaben": [
      {
       "ort": "Gespräch 1 — Abschnitt 1",
       "zeilen": [
        {
         "wer": "Frau",
         "text": "So, Übergabe. Frau Brehm in Zimmer zwölf hatte heute Nacht Fieber, achtunddreißig fünf."
        },
        {
         "wer": "Mann",
         "text": "Hat sie was bekommen?"
        },
        {
         "wer": "Frau",
         "text": "Ja, um vier Uhr eine Tablette gegen Fieber. Jetzt ist es runter. Aber der Arzt soll sie heute noch anschauen."
        },
        {
         "wer": "Mann",
         "text": "Okay, ich schreib es auf."
        }
       ],
       "satz": "Die Frau informiert ihren Kollegen über eine Patientin.",
       "loesung": true,
       "stelle": "Frau Brehm in Zimmer zwölf hatte heute Nacht Fieber",
       "erklaerung": "„Übergabe\" heißt: Die Nachtschicht gibt Informationen an die nächste Schicht weiter."
      },
      {
       "ort": "Gespräch 1 — Abschnitt 2",
       "zeilen": [
        {
         "wer": "Frau",
         "text": "Und Herr Ahmadi in der Vierzehn, der wird heute entlassen. Seine Tochter holt ihn ab, um elf."
        },
        {
         "wer": "Mann",
         "text": "Um elf? Da ist doch die Visite."
        },
        {
         "wer": "Frau",
         "text": "Ja, deswegen. Die Entlassungspapiere müssen vorher fertig sein. Frag bitte Doktor Lenz, ob er die schon um zehn unterschreiben kann."
        },
        {
         "wer": "Mann",
         "text": "Mach ich."
        }
       ],
       "frage": "Was soll der Mann tun?",
       "opt": [
        "Den Arzt bitten, die Papiere früher zu unterschreiben.",
        "Die Tochter von Herrn Ahmadi anrufen.",
        "Die Visite auf zehn Uhr verschieben."
       ],
       "loesung": 0,
       "stelle": "ob er die schon um zehn unterschreiben kann",
       "erklaerung": "Die Visite bleibt um elf. Nur die Papiere sollen schon um zehn fertig sein."
      },
      {
       "ort": "Gespräch 2 — Abschnitt 1",
       "zeilen": [
        {
         "wer": "Mann",
         "text": "Sabine, hast du schon den Dienstplan für Dezember gesehen?"
        },
        {
         "wer": "Frau",
         "text": "Nein, hängt der schon?"
        },
        {
         "wer": "Mann",
         "text": "Ja, seit heute Morgen. Ich bin an Weihnachten eingetragen, beide Tage. Und Silvester auch."
        },
        {
         "wer": "Frau",
         "text": "Was? Du hattest doch letztes Jahr schon Weihnachten."
        }
       ],
       "satz": "Der Mann ist mit dem Dienstplan zufrieden.",
       "loesung": false,
       "stelle": "Ich bin an Weihnachten eingetragen, beide Tage",
       "erklaerung": "Er muss an allen Feiertagen arbeiten, wie schon letztes Jahr. Das gefällt ihm nicht."
      },
      {
       "ort": "Gespräch 2 — Abschnitt 2",
       "zeilen": [
        {
         "wer": "Mann",
         "text": "Eben. Ich geh nachher zu Frau Hartmann und frag, ob man das ändern kann."
        },
        {
         "wer": "Frau",
         "text": "Mach das. Aber warte bis nach der Mittagspause, vorher hat sie die Besprechung mit der Heimleitung."
        },
        {
         "wer": "Mann",
         "text": "Stimmt. Dann so um halb zwei."
        }
       ],
       "frage": "Wann will der Mann mit Frau Hartmann sprechen?",
       "opt": [
        "Um halb zwei.",
        "Während der Besprechung.",
        "Vor der Mittagspause."
       ],
       "loesung": 0,
       "stelle": "Dann so um halb zwei",
       "erklaerung": "Vor der Pause hat Frau Hartmann eine Besprechung. Deshalb geht er erst danach."
      },
      {
       "ort": "Gespräch 3 — Abschnitt 1",
       "zeilen": [
        {
         "wer": "Frau",
         "text": "Du, Tobias, von dem Blutdruckmittel für Herrn Weiß ist nur noch eine Packung da."
        },
        {
         "wer": "Mann",
         "text": "Echt? Ich dachte, wir haben letzte Woche bestellt."
        },
        {
         "wer": "Frau",
         "text": "Ja, aber die Apotheke hat nur die Hälfte geliefert. Der Rest war nicht vorrätig."
        }
       ],
       "satz": "Ein Medikament für einen Bewohner wird knapp.",
       "loesung": true,
       "stelle": "ist nur noch eine Packung da",
       "erklaerung": "Es gibt nur noch eine Packung, weil die Apotheke nicht alles geliefert hat."
      },
      {
       "ort": "Gespräch 3 — Abschnitt 2",
       "zeilen": [
        {
         "wer": "Mann",
         "text": "Und wie lange reicht die eine Packung?"
        },
        {
         "wer": "Frau",
         "text": "Noch vier Tage. Die Apotheke sagt, Montag kommt der Rest."
        },
        {
         "wer": "Mann",
         "text": "Montag ist knapp. Ruf doch mal bei der Hausärztin an. Vielleicht kann sie ein anderes Mittel aufschreiben, für den Notfall."
        },
        {
         "wer": "Frau",
         "text": "Gute Idee, das mach ich gleich."
        }
       ],
       "frage": "Was schlägt der Mann vor?",
       "opt": [
        "Die Hausärztin anzurufen.",
        "Bis Montag zu warten.",
        "Bei einer anderen Apotheke zu bestellen."
       ],
       "loesung": 0,
       "stelle": "Ruf doch mal bei der Hausärztin an",
       "erklaerung": "„Montag ist knapp\": Warten ist ihm zu unsicher. Eine andere Apotheke nennt er nicht."
      },
      {
       "ort": "Gespräch 4 — Abschnitt 1",
       "zeilen": [
        {
         "wer": "Mann",
         "text": "Au. Mein Rücken."
        },
        {
         "wer": "Frau",
         "text": "Was ist passiert?"
        },
        {
         "wer": "Mann",
         "text": "Ich hab Herrn Klein allein ins Bett gehoben. Der Lifter war besetzt."
        },
        {
         "wer": "Frau",
         "text": "Allein? Das darfst du doch gar nicht. Bei ihm sind wir immer zu zweit."
        }
       ],
       "satz": "Der Mann hat sich bei der Arbeit am Rücken wehgetan.",
       "loesung": true,
       "stelle": "Ich hab Herrn Klein allein ins Bett gehoben",
       "erklaerung": "„Au. Mein Rücken.\" und das Heben allein zeigen, was passiert ist."
      },
      {
       "ort": "Gespräch 4 — Abschnitt 2",
       "zeilen": [
        {
         "wer": "Mann",
         "text": "Ich weiß. Es war niemand da, alle waren beim Frühstück."
        },
        {
         "wer": "Frau",
         "text": "Trotzdem. Du musst das jetzt als Arbeitsunfall melden. Auch wenn es nur ein bisschen wehtut."
        },
        {
         "wer": "Mann",
         "text": "Muss das sein? Wegen so was?"
        },
        {
         "wer": "Frau",
         "text": "Ja. Wenn es schlimmer wird, bist du sonst nicht versichert. Das Formular liegt im Stationszimmer, im oberen Fach."
        }
       ],
       "frage": "Warum soll der Mann den Unfall melden?",
       "opt": [
        "Weil der Lifter kaputt war.",
        "Weil er sonst nicht versichert ist, falls es schlimmer wird.",
        "Weil er morgen nicht arbeiten kann."
       ],
       "loesung": 1,
       "stelle": "Wenn es schlimmer wird, bist du sonst nicht versichert",
       "erklaerung": "Der Lifter war nicht kaputt, sondern besetzt. Der Grund für die Meldung ist die Versicherung."
      },
      {
       "ort": "Gespräch 5 — Abschnitt 1",
       "zeilen": [
        {
         "wer": "Frau",
         "text": "Hast du dich schon für die Fortbildung angemeldet? Das Thema Demenz?"
        },
        {
         "wer": "Mann",
         "text": "Nein, wann ist die?"
        },
        {
         "wer": "Frau",
         "text": "Am zwölften und dreizehnten März, jeweils den ganzen Tag. Die Plätze sind aber begrenzt, nur fünfzehn."
        },
        {
         "wer": "Mann",
         "text": "Klingt gut. Das brauch ich wirklich, in meinem Wohnbereich haben wir immer mehr Bewohner mit Demenz."
        }
       ],
       "satz": "Der Mann interessiert sich für die Fortbildung.",
       "loesung": true,
       "stelle": "Das brauch ich wirklich",
       "erklaerung": "Er hat sich noch nicht angemeldet, findet die Fortbildung aber wichtig für seine Arbeit."
      },
      {
       "ort": "Gespräch 5 — Abschnitt 2",
       "zeilen": [
        {
         "wer": "Frau",
         "text": "Dann musst du dich schnell anmelden. Bei Frau Gül, per Mail."
        },
        {
         "wer": "Mann",
         "text": "Nicht im Intranet?"
        },
        {
         "wer": "Frau",
         "text": "Nee, diesmal nicht, das ist ja ein externer Anbieter. Und sprich vorher mit deiner Wohnbereichsleitung, die muss zustimmen, wegen dem Dienstplan."
        }
       ],
       "frage": "Wie meldet man sich an?",
       "opt": [
        "Per Mail bei Frau Gül.",
        "Im Intranet.",
        "Bei der Wohnbereichsleitung."
       ],
       "loesung": 0,
       "stelle": "Bei Frau Gül, per Mail",
       "erklaerung": "Die Wohnbereichsleitung muss nur zustimmen. Angemeldet wird bei Frau Gül."
      }
     ]
    }
   ]
  },
  {
   "nr": 3,
   "art": "interview",
   "name": "Hören: Radiosendung oder Besprechung",
   "kurz": "Ein längeres Gespräch, sechs Aufgaben",
   "was": "Eine Radiosendung über ein Arbeitsthema oder eine Teambesprechung. Sechs Fragen mit je drei Antworten, in der Reihenfolge des Gesprächs.",
   "tipp": "Die Fragen folgen dem Gespräch. Wenn du eine verpasst, geh gleich zur nächsten.",
   "zeichen": "📻",
   "farbe": "rot",
   "punkte": 6,
   "mal": 1,
   "runden": [
    {
     "id": "b12h3s1",
     "titel": "Radiosendung: Rechte im Minijob",
     "aufgaben": [
      {
       "ort": "Radiosendung — Abschnitt 1",
       "zeilen": [
        {
         "wer": "Frau",
         "text": "Guten Abend und willkommen bei „Feierabend\", unserer Sendung rund um Arbeit und Beruf. Heute geht es um Minijobs. Bei mir im Studio ist Stefan Wolter von der Beratungsstelle Arbeit und Recht in Kassel. Herr Wolter, guten Abend."
        },
        {
         "wer": "Mann",
         "text": "Guten Abend, danke für die Einladung."
        },
        {
         "wer": "Frau",
         "text": "Herr Wolter, wer kommt eigentlich zu Ihnen in die Beratung? Sind das vor allem Studenten?"
        },
        {
         "wer": "Mann",
         "text": "Nein, eben nicht. Das denken viele. Die meisten, die zu uns kommen, sind Frauen zwischen vierzig und sechzig, oft mit Kindern, die neben dem Haushalt etwas dazuverdienen. Studenten sehen wir eher selten."
        }
       ],
       "frage": "Wer kommt laut Herrn Wolter am häufigsten in die Beratung?",
       "opt": [
        "Vor allem Studenten.",
        "Vor allem Menschen ohne Familie.",
        "Vor allem Frauen zwischen vierzig und sechzig."
       ],
       "loesung": 2,
       "stelle": "sind Frauen zwischen vierzig und sechzig",
       "erklaerung": "Die Studenten nennt die Moderatorin, Herr Wolter widerspricht: „Nein, eben nicht.\""
      },
      {
       "ort": "Radiosendung — Abschnitt 2",
       "zeilen": [
        {
         "wer": "Frau",
         "text": "Und mit welchen Fragen kommen die Leute?"
        },
        {
         "wer": "Mann",
         "text": "Ganz oft geht es um Urlaub. Viele wissen nicht, dass sie als Minijobber genauso Anspruch auf bezahlten Urlaub haben wie alle anderen. Und manche Arbeitgeber, na ja, die sagen das auch nicht so gern."
        },
        {
         "wer": "Frau",
         "text": "Also auch Minijobber bekommen bezahlten Urlaub?"
        },
        {
         "wer": "Mann",
         "text": "Ja, natürlich. Wer zum Beispiel an zwei Tagen in der Woche arbeitet, hat Anspruch auf mindestens acht Urlaubstage im Jahr."
        }
       ],
       "frage": "Was wissen viele Minijobber nicht?",
       "opt": [
        "Dass sie bezahlten Urlaub bekommen.",
        "Dass sie nur an zwei Tagen arbeiten dürfen.",
        "Dass sie acht Wochen Urlaub haben."
       ],
       "loesung": 0,
       "stelle": "genauso Anspruch auf bezahlten Urlaub haben",
       "erklaerung": "Zwei Tage pro Woche sind nur ein Beispiel, und es sind acht Tage, nicht acht Wochen."
      },
      {
       "ort": "Radiosendung — Abschnitt 3",
       "zeilen": [
        {
         "wer": "Frau",
         "text": "Was ist mit Krankheit? Wenn ich im Minijob krank werde?"
        },
        {
         "wer": "Mann",
         "text": "Auch dann muss der Arbeitgeber weiterzahlen, sechs Wochen lang, wie bei allen anderen. Sie müssen sich allerdings sofort am ersten Tag krankmelden. Und ab dem vierten Tag brauchen Sie eine Bescheinigung vom Arzt, wenn im Vertrag nichts anderes steht."
        },
        {
         "wer": "Frau",
         "text": "Ah, also wie bei einem normalen Job."
        },
        {
         "wer": "Mann",
         "text": "Genau, das ist der Punkt. Ein Minijob ist ein ganz normales Arbeitsverhältnis, nur mit weniger Stunden."
        }
       ],
       "frage": "Was sagt Herr Wolter über Krankheit im Minijob?",
       "opt": [
        "Minijobber bekommen bei Krankheit kein Geld.",
        "Man braucht immer ab dem ersten Tag eine Bescheinigung.",
        "Der Arbeitgeber zahlt sechs Wochen lang weiter."
       ],
       "loesung": 2,
       "stelle": "muss der Arbeitgeber weiterzahlen, sechs Wochen lang",
       "erklaerung": "Am ersten Tag muss man sich nur krankmelden. Die Bescheinigung braucht man erst ab dem vierten Tag."
      },
      {
       "ort": "Radiosendung — Abschnitt 4",
       "zeilen": [
        {
         "wer": "Frau",
         "text": "Uns hat eine Hörerin geschrieben, sie arbeitet in einer Bäckerei. Ihr Chef sagt, wenn sie krank ist, muss sie die Stunden später nacharbeiten. Stimmt das?"
        },
        {
         "wer": "Mann",
         "text": "Nein, das stimmt nicht. Krankheitstage muss man nicht nacharbeiten, und man bekommt dafür auch nicht weniger Geld. Das ist leider ein Klassiker bei uns in der Beratung."
        },
        {
         "wer": "Frau",
         "text": "Und was kann sie jetzt tun?"
        },
        {
         "wer": "Mann",
         "text": "Erst mal mit dem Chef reden, ganz sachlich. Viele wissen das wirklich nicht. Wenn das nichts bringt, kann sie zu uns kommen oder zur Gewerkschaft gehen. Die Beratung bei uns ist übrigens kostenlos."
        }
       ],
       "frage": "Was soll die Hörerin zuerst tun?",
       "opt": [
        "Zur Gewerkschaft gehen.",
        "Die Stunden nacharbeiten.",
        "Mit ihrem Chef sprechen."
       ],
       "loesung": 2,
       "stelle": "Erst mal mit dem Chef reden, ganz sachlich",
       "erklaerung": "„Erst mal\" zeigt den ersten Schritt. Die Gewerkschaft kommt nur, „wenn das nichts bringt\"."
      },
      {
       "ort": "Radiosendung — Abschnitt 5",
       "zeilen": [
        {
         "wer": "Frau",
         "text": "Herr Wolter, viele haben ja auch zwei Minijobs. Geht das eigentlich?"
        },
        {
         "wer": "Mann",
         "text": "Das geht, aber da muss man aufpassen. Wer eine normale Stelle hat, darf einen Minijob dazu haben, der bleibt abgabenfrei. Bei zwei Minijobs nebeneinander werden die aber zusammengerechnet. Und wenn man dann über die Grenze kommt, zahlt man auf einmal Sozialabgaben."
        },
        {
         "wer": "Frau",
         "text": "Also vorher genau rechnen."
        },
        {
         "wer": "Mann",
         "text": "Ja, und am besten beide Arbeitgeber informieren. Die müssen das sowieso wissen."
        }
       ],
       "frage": "Was passiert bei zwei Minijobs?",
       "opt": [
        "Der erste Arbeitgeber zahlt die Sozialabgaben.",
        "Die Verdienste werden zusammengerechnet.",
        "Man darf den zweiten Job nicht annehmen."
       ],
       "loesung": 1,
       "stelle": "Bei zwei Minijobs nebeneinander werden die aber zusammengerechnet",
       "erklaerung": "Zwei Minijobs sind erlaubt. Wichtig ist, dass beide zusammen gezählt werden."
      },
      {
       "ort": "Radiosendung — Abschnitt 6",
       "zeilen": [
        {
         "wer": "Frau",
         "text": "Zum Schluss: Was ist Ihr wichtigster Tipp?"
        },
        {
         "wer": "Mann",
         "text": "Lassen Sie sich einen schriftlichen Vertrag geben. Das ist Pflicht, und trotzdem arbeiten viele ohne. Da steht dann drin, wie viele Stunden, welcher Lohn, wie viel Urlaub. Wenn es mal Streit gibt, haben Sie etwas in der Hand."
        },
        {
         "wer": "Frau",
         "text": "Herr Wolter, vielen Dank. Und wer Fragen hat: Die Beratungsstelle erreichen Sie dienstags und donnerstags von neun bis fünfzehn Uhr."
        }
       ],
       "frage": "Was ist Herrn Wolters wichtigster Tipp?",
       "opt": [
        "Nur dienstags und donnerstags arbeiten.",
        "Bei Streit sofort kündigen.",
        "Einen schriftlichen Vertrag verlangen."
       ],
       "loesung": 2,
       "stelle": "Lassen Sie sich einen schriftlichen Vertrag geben",
       "erklaerung": "Dienstag und Donnerstag sind die Zeiten der Beratungsstelle, kein Tipp für die Arbeit."
      }
     ]
    },
    {
     "id": "b12h3s2",
     "titel": "Teambesprechung: Das neue Ticketsystem im Kundenservice",
     "aufgaben": [
      {
       "ort": "Teambesprechung — Abschnitt 1",
       "zeilen": [
        {
         "wer": "Frau",
         "text": "So, dann fangen wir an. Murat fehlt noch, der hat noch einen Kunden am Telefon, der kommt später. Also, Thema heute: das neue Ticketsystem. Ab dem ersten März arbeiten wir damit, das alte Programm wird dann abgeschaltet."
        },
        {
         "wer": "Mann",
         "text": "Am ersten März schon? Ich dachte, erst im April."
        },
        {
         "wer": "Frau",
         "text": "Nein, das wurde vorgezogen. Der Vertrag für das alte System läuft Ende Februar aus."
        }
       ],
       "frage": "Warum kommt das neue System früher als gedacht?",
       "opt": [
        "Weil Murat das so wollte.",
        "Weil der Vertrag für das alte System endet.",
        "Weil das alte Programm kaputt ist."
       ],
       "loesung": 1,
       "stelle": "Der Vertrag für das alte System läuft Ende Februar aus",
       "erklaerung": "Murat ist nur noch am Telefon. Kaputt ist das alte Programm nicht, der Vertrag endet."
      },
      {
       "ort": "Teambesprechung — Abschnitt 2",
       "zeilen": [
        {
         "wer": "Frau",
         "text": "Und wie läuft die Schulung, Frau Haller? Wir können ja nicht alle gleichzeitig weg vom Telefon."
        },
        {
         "wer": "Frau",
         "text": "Genau, Lena, deshalb machen wir zwei Gruppen. Die eine am Dienstag, die andere am Donnerstag, jeweils von acht bis zwölf. Die Liste hängt ab morgen in der Küche, tragt euch bitte bis Freitag ein."
        },
        {
         "wer": "Mann",
         "text": "Und wer nicht kann? Ich bin am Dienstag beim Zahnarzt, und Donnerstag hab ich frei."
        },
        {
         "wer": "Frau",
         "text": "Dann sprich mit mir, Jonas. Für zwei, drei Leute gibt es noch einen Termin online."
        }
       ],
       "frage": "Was sollen die Mitarbeiter bis Freitag machen?",
       "opt": [
        "Einen Online-Termin buchen.",
        "Sich in eine Liste eintragen.",
        "Die Schulung abschließen."
       ],
       "loesung": 1,
       "stelle": "tragt euch bitte bis Freitag ein",
       "erklaerung": "Den Online-Termin gibt es nur für wenige, die an beiden Tagen nicht können."
      },
      {
       "ort": "Teambesprechung — Abschnitt 3",
       "zeilen": [
        {
         "wer": "Mann",
         "text": "Entschuldigung, bin schon da. Was hab ich verpasst?"
        },
        {
         "wer": "Frau",
         "text": "Hallo Murat. Neues Ticketsystem, März, Schulungen. Lena erklärt es dir nachher. Was ich noch sagen wollte: Im neuen System bekommt jede Anfrage eine Nummer, und die Kunden können online sehen, wie weit wir sind."
        },
        {
         "wer": "Mann",
         "text": "Ach, das ist gut. Dann rufen die nicht dreimal an und fragen, ob ihre Reklamation schon bearbeitet ist."
        },
        {
         "wer": "Frau",
         "text": "Genau das ist die Idee."
        }
       ],
       "frage": "Welchen Vorteil sieht Murat?",
       "opt": [
        "Die Kunden rufen seltener nach.",
        "Die Kunden bekommen schneller ihr Geld.",
        "Er muss keine Nummern mehr vergeben."
       ],
       "loesung": 0,
       "stelle": "Dann rufen die nicht dreimal an",
       "erklaerung": "Weil die Kunden online nachsehen können, müssen sie nicht mehr anrufen."
      },
      {
       "ort": "Teambesprechung — Abschnitt 4",
       "zeilen": [
        {
         "wer": "Mann",
         "text": "Und was ist mit den alten Fällen? Ich hab noch so dreißig offene Reklamationen."
        },
        {
         "wer": "Frau",
         "text": "Die bleiben im alten Programm und werden dort fertig bearbeitet. Bis Ende Februar geht das noch. Neue Fälle ab März kommen nur noch ins neue System."
        },
        {
         "wer": "Mann",
         "text": "Und wenn bis dahin nicht alle fertig sind?"
        },
        {
         "wer": "Frau",
         "text": "Dann übertragt ihr die per Hand. Aber bitte versucht, das zu vermeiden, das ist viel Arbeit."
        }
       ],
       "frage": "Was passiert mit den alten offenen Fällen?",
       "opt": [
        "Sie werden ab März gelöscht.",
        "Sie werden automatisch ins neue System übertragen.",
        "Sie werden im alten Programm abgeschlossen."
       ],
       "loesung": 2,
       "stelle": "werden dort fertig bearbeitet",
       "erklaerung": "Per Hand übertragen wird nur im Notfall, automatisch passiert nichts."
      },
      {
       "ort": "Teambesprechung — Abschnitt 5",
       "zeilen": [
        {
         "wer": "Frau",
         "text": "Eine Frage noch, Frau Haller. Am Anfang wird das doch sicher langsamer gehen. Bekommen wir da Unterstützung?"
        },
        {
         "wer": "Frau",
         "text": "Ja. In den ersten zwei Wochen sitzt jemand vom Hersteller hier bei uns im Büro, jeden Vormittag. Den könnt ihr direkt fragen. Und Murat hat das System schon in seiner alten Firma benutzt."
        },
        {
         "wer": "Mann",
         "text": "Na ja, das war eine ältere Version. Aber das Prinzip kenn ich, klar."
        }
       ],
       "frage": "Welche Unterstützung gibt es am Anfang?",
       "opt": [
        "Murat übernimmt alle Schulungen.",
        "Es gibt eine Hotline rund um die Uhr.",
        "Eine Person vom Hersteller kommt zwei Wochen lang ins Büro."
       ],
       "loesung": 2,
       "stelle": "sitzt jemand vom Hersteller hier bei uns im Büro",
       "erklaerung": "Murat kennt das System nur aus einer älteren Version. Von Schulungen durch ihn ist keine Rede."
      },
      {
       "ort": "Teambesprechung — Abschnitt 6",
       "zeilen": [
        {
         "wer": "Frau",
         "text": "Gut. Dann noch was Organisatorisches. In der ersten Märzwoche bitte keinen Urlaub. Wer da schon Urlaub eingetragen hat, kommt bitte heute noch zu mir."
        },
        {
         "wer": "Mann",
         "text": "Ich hab den dritten März frei, das ist mein Geburtstag."
        },
        {
         "wer": "Frau",
         "text": "Ein Tag ist kein Problem, Jonas. Es geht mir um ganze Wochen. So, das wäre alles von meiner Seite. Danke euch."
        }
       ],
       "frage": "Was gilt für die erste Märzwoche?",
       "opt": [
        "Längerer Urlaub ist nicht möglich.",
        "Niemand darf einen freien Tag nehmen.",
        "Alle müssen Überstunden machen."
       ],
       "loesung": 0,
       "stelle": "Es geht mir um ganze Wochen",
       "erklaerung": "Ein einzelner freier Tag ist erlaubt. Nur ganze Wochen Urlaub gehen nicht."
      }
     ]
    },
    {
     "id": "b12h3s3",
     "titel": "Radiosendung: Ausbildung mit über dreißig",
     "aufgaben": [
      {
       "ort": "Radiosendung — Abschnitt 1",
       "zeilen": [
        {
         "wer": "Mann",
         "text": "Willkommen zurück bei „Arbeitswelt am Mittag\". Eine Ausbildung macht man mit sechzehn oder achtzehn, so denken die meisten. Natalia Brandt sieht das anders. Sie ist vierunddreißig und im zweiten Lehrjahr als Elektronikerin. Frau Brandt, hallo."
        },
        {
         "wer": "Frau",
         "text": "Hallo, schön, dass ich da sein darf."
        },
        {
         "wer": "Mann",
         "text": "Was haben Sie denn vorher gemacht?"
        },
        {
         "wer": "Frau",
         "text": "Ich war zwölf Jahre Verkäuferin in einem Möbelhaus. Eigentlich hat mir das gefallen, aber dann wurde die Filiale geschlossen. Und da hab ich gedacht, jetzt oder nie."
        }
       ],
       "frage": "Warum hat Frau Brandt mit der Ausbildung angefangen?",
       "opt": [
        "Ihr Arbeitsplatz ist weggefallen.",
        "Sie wollte mehr Geld verdienen.",
        "Die Arbeit im Möbelhaus hat ihr nicht gefallen."
       ],
       "loesung": 0,
       "stelle": "dann wurde die Filiale geschlossen",
       "erklaerung": "„Eigentlich hat mir das gefallen\": Der Grund war die Schließung der Filiale."
      },
      {
       "ort": "Radiosendung — Abschnitt 2",
       "zeilen": [
        {
         "wer": "Mann",
         "text": "Und warum gerade Elektronikerin?"
        },
        {
         "wer": "Frau",
         "text": "Ehrlich gesagt, wegen meinem Vater. Der war Elektriker, und als Kind hab ich ihm immer zugeschaut. Ich wollte das damals schon machen, aber in der Schule hieß es, das ist nichts für Mädchen. Na ja, und dann hab ich es halt gelassen."
        },
        {
         "wer": "Mann",
         "text": "Und jetzt haben Sie es nachgeholt."
        },
        {
         "wer": "Frau",
         "text": "Genau. Mit ein paar Jahren Verspätung."
        }
       ],
       "frage": "Warum hat Frau Brandt die Ausbildung nicht schon früher gemacht?",
       "opt": [
        "Sie hatte damals kein Interesse an Technik.",
        "Man hat ihr in der Schule davon abgeraten.",
        "Ihr Vater war dagegen."
       ],
       "loesung": 1,
       "stelle": "in der Schule hieß es, das ist nichts für Mädchen",
       "erklaerung": "Der Vater war ihr Vorbild, nicht dagegen. Interesse hatte sie schon als Kind."
      },
      {
       "ort": "Radiosendung — Abschnitt 3",
       "zeilen": [
        {
         "wer": "Mann",
         "text": "Wie ist das, mit vierunddreißig neben lauter Achtzehnjährigen in der Berufsschule zu sitzen?"
        },
        {
         "wer": "Frau",
         "text": "Am Anfang komisch, ganz klar. Die ersten Wochen haben mich alle gesiezt. Ich dachte, die halten mich für die Lehrerin."
        },
        {
         "wer": "Mann",
         "text": "Und heute?"
        },
        {
         "wer": "Frau",
         "text": "Inzwischen sind wir eine gute Klasse. Die helfen mir bei Mathe und ich helfe ihnen, wenn sie eine Bewerbung schreiben müssen."
        }
       ],
       "frage": "Wie ist das Verhältnis zu den jungen Mitschülern heute?",
       "opt": [
        "Sie helfen sich gegenseitig.",
        "Sie hat kaum Kontakt zu ihnen.",
        "Sie siezen sie immer noch."
       ],
       "loesung": 0,
       "stelle": "Die helfen mir bei Mathe und ich helfe ihnen",
       "erklaerung": "Das Siezen war nur in den ersten Wochen. Heute hilft jeder dem anderen."
      },
      {
       "ort": "Radiosendung — Abschnitt 4",
       "zeilen": [
        {
         "wer": "Mann",
         "text": "Jetzt die Frage, die sich viele stellen: Wie kommt man mit dem Ausbildungsgehalt über die Runden?"
        },
        {
         "wer": "Frau",
         "text": "Das ist wirklich das Schwierigste. Ich bekomme im zweiten Jahr etwa tausend Euro. Davon allein könnte ich meine Wohnung nicht bezahlen."
        },
        {
         "wer": "Mann",
         "text": "Und wie machen Sie das dann?"
        },
        {
         "wer": "Frau",
         "text": "Ich bekomme zusätzlich Berufsausbildungsbeihilfe von der Arbeitsagentur. Das wissen viele gar nicht, dass man das auch mit über dreißig noch beantragen kann."
        }
       ],
       "frage": "Wie finanziert Frau Brandt ihr Leben?",
       "opt": [
        "Nur mit ihrem Ausbildungsgehalt.",
        "Mit einem Nebenjob im Möbelhaus.",
        "Mit dem Gehalt und einer Unterstützung von der Arbeitsagentur."
       ],
       "loesung": 2,
       "stelle": "Ich bekomme zusätzlich Berufsausbildungsbeihilfe von der Arbeitsagentur",
       "erklaerung": "Das Gehalt allein reicht nicht. „zusätzlich\" zeigt die zweite Geldquelle."
      },
      {
       "ort": "Radiosendung — Abschnitt 5",
       "zeilen": [
        {
         "wer": "Mann",
         "text": "Und was sagt Ihr Betrieb? Hatten die keine Bedenken, eine Frau über dreißig zu nehmen?"
        },
        {
         "wer": "Frau",
         "text": "Im Gegenteil. Mein Chef hat im Vorstellungsgespräch gesagt, ihm ist das sogar lieber."
        },
        {
         "wer": "Mann",
         "text": "Lieber? Warum das denn?"
        },
        {
         "wer": "Frau",
         "text": "Na ja, ich bin zuverlässig, ich kann mit Kunden reden, das hab ich ja zwölf Jahre gemacht. Zu Kundenterminen nimmt er mich jetzt schon mit, obwohl ich noch in der Ausbildung bin."
        }
       ],
       "frage": "Was schätzt ihr Chef besonders?",
       "opt": [
        "Dass sie schon als Elektrikerin gearbeitet hat.",
        "Ihre Erfahrung im Umgang mit Kunden.",
        "Ihre guten Noten in Mathe."
       ],
       "loesung": 1,
       "stelle": "ich kann mit Kunden reden",
       "erklaerung": "Aus zwölf Jahren im Verkauf kann sie gut mit Kunden umgehen. In Mathe braucht sie selbst Hilfe."
      },
      {
       "ort": "Radiosendung — Abschnitt 6",
       "zeilen": [
        {
         "wer": "Mann",
         "text": "Was würden Sie Leuten raten, die auch überlegen, mit dreißig oder vierzig noch mal anzufangen?"
        },
        {
         "wer": "Frau",
         "text": "Erst mal ein Praktikum machen. Eine Woche, zwei Wochen, im Urlaub zum Beispiel. Dann merkt man schnell, ob das wirklich passt. Ich hab das auch gemacht, bevor ich unterschrieben hab. Und dann: nicht zu lange überlegen."
        },
        {
         "wer": "Mann",
         "text": "Frau Brandt, vielen Dank und viel Erfolg bei der Prüfung."
        }
       ],
       "frage": "Was rät Frau Brandt?",
       "opt": [
        "Vorher ein Praktikum zu machen.",
        "Den Urlaub für die Prüfung zu nutzen.",
        "Lange über die Entscheidung nachzudenken."
       ],
       "loesung": 0,
       "stelle": "Erst mal ein Praktikum machen",
       "erklaerung": "Sie sagt das Gegenteil von langem Nachdenken: „nicht zu lange überlegen\"."
      }
     ]
    }
   ]
  },
  {
   "nr": 4,
   "art": "diskussion",
   "name": "Hören: Meinungen auf einer Tagung",
   "kurz": "Drei Personen, sechs Aussagen",
   "was": "Drei Personen sagen ihre Meinung zu einem Arbeitsthema. Zu jeder Person passt eine Aussage, drei bleiben übrig.",
   "tipp": "Hör auf die Haltung: dafür, dagegen oder „ja, aber\". Die übrigen Aussagen greifen oft Wörter aus dem Text auf.",
   "zeichen": "🗣️",
   "farbe": "lila",
   "punkte": 3,
   "mal": 1,
   "runden": [
    {
     "id": "b12h4s1",
     "titel": "Homeoffice: Wie geht es weiter?",
     "aufgaben": [
      {
       "von": "Person 1 — Herr Okafor, Betriebsrat in einem Versicherungsbüro",
       "wer": "Mann",
       "text": "Bei uns arbeiten die meisten inzwischen zwei, drei Tage zu Hause, und im Prinzip finden das alle gut. Aber was ich im Betriebsrat immer öfter höre, ist etwas anderes. Die Leute bekommen abends um neun noch Nachrichten von ihrem Teamleiter, am Sonntag kommt eine Mail mit der Bitte, das schnell noch anzuschauen. Und weil man ja zu Hause ist, macht man es halt. Deshalb verhandeln wir gerade eine Vereinbarung: Nach achtzehn Uhr und am Wochenende muss niemand antworten. Ohne so etwas wird das Homeoffice auf Dauer zur Falle.",
       "loesung": 2,
       "stelle": "Nach achtzehn Uhr und am Wochenende muss niemand antworten",
       "erklaerung": "Er findet Homeoffice gut, will aber feste Zeiten, in denen niemand erreichbar sein muss.",
       "frage": "Welche Aussage passt zu Herr Okafor?",
       "opt": [
        "Im Homeoffice fehlt der Kontakt zu den Kollegen.",
        "Nicht jeder Beruf eignet sich für die Arbeit von zu Hause.",
        "Wer zu Hause arbeitet, braucht klare Regeln für die Erreichbarkeit.",
        "Homeoffice spart der Firma viel Geld für Büroräume.",
        "Im Homeoffice wird weniger gearbeitet als im Büro.",
        "Die Firma sollte die Ausstattung zu Hause bezahlen."
       ],
       "fest": true
      },
      {
       "von": "Person 2 — Frau Lindner, Inhaberin einer Schreinerei",
       "wer": "Frau",
       "text": "Ich lese immer nur über Homeoffice, als ob alle Menschen am Schreibtisch sitzen. Ich habe vierzehn Mitarbeiter, davon arbeiten zwölf in der Werkstatt oder beim Kunden. Die können ihre Küchen ja nicht zu Hause im Wohnzimmer bauen. Und dann kommt meine Bürokraft und fragt, ob sie freitags von zu Hause arbeiten darf. Darf sie, das ist nicht das Problem. Aber in der Werkstatt gibt es natürlich Ärger. Die fragen, warum die und wir nicht? Das ist für einen Handwerksbetrieb eine echte Frage, auf die ich noch keine gute Antwort habe.",
       "loesung": 1,
       "stelle": "Die können ihre Küchen ja nicht zu Hause im Wohnzimmer bauen",
       "erklaerung": "Handwerker in der Werkstatt können nicht zu Hause arbeiten. Das ist ihr Hauptpunkt.",
       "frage": "Welche Aussage passt zu Frau Lindner?",
       "opt": [
        "Im Homeoffice fehlt der Kontakt zu den Kollegen.",
        "Nicht jeder Beruf eignet sich für die Arbeit von zu Hause.",
        "Wer zu Hause arbeitet, braucht klare Regeln für die Erreichbarkeit.",
        "Homeoffice spart der Firma viel Geld für Büroräume.",
        "Im Homeoffice wird weniger gearbeitet als im Büro.",
        "Die Firma sollte die Ausstattung zu Hause bezahlen."
       ],
       "fest": true
      },
      {
       "von": "Person 3 — Herr Albrecht, Abteilungsleiter in einer Stadtverwaltung",
       "wer": "Mann",
       "text": "Unsere Verwaltung hat im letzten Jahr ein ganzes Stockwerk aufgegeben, weil durch das Homeoffice so viele Schreibtische leer standen. Das freut natürlich die Finanzabteilung. Ich sehe aber auch die andere Seite. Früher hat man in der Kaffeeküche mal schnell was geklärt, man hat mitbekommen, wenn es einer Kollegin nicht gut geht. Heute sehe ich manche Mitarbeiter wochenlang nur als kleines Bild auf dem Bildschirm. Zwei junge Kollegen haben mir neulich gesagt, dass sie sich ziemlich allein fühlen. Deshalb haben wir jetzt einen festen Bürotag eingeführt, den Dienstag, da sind alle da.",
       "loesung": 0,
       "stelle": "dass sie sich ziemlich allein fühlen",
       "erklaerung": "Das gesparte Stockwerk ist nur der Einstieg. Ihm geht es um den fehlenden Kontakt.",
       "frage": "Welche Aussage passt zu Herr Albrecht?",
       "opt": [
        "Im Homeoffice fehlt der Kontakt zu den Kollegen.",
        "Nicht jeder Beruf eignet sich für die Arbeit von zu Hause.",
        "Wer zu Hause arbeitet, braucht klare Regeln für die Erreichbarkeit.",
        "Homeoffice spart der Firma viel Geld für Büroräume.",
        "Im Homeoffice wird weniger gearbeitet als im Büro.",
        "Die Firma sollte die Ausstattung zu Hause bezahlen."
       ],
       "fest": true
      }
     ]
    },
    {
     "id": "b12h4s2",
     "titel": "Die Vier-Tage-Woche",
     "aufgaben": [
      {
       "von": "Person 1 — Frau Haddad, Personalleiterin einer Spedition",
       "wer": "Frau",
       "text": "Wir suchen seit Jahren Leute für die Disposition, und es war wirklich zum Verzweifeln. Auf eine Anzeige kamen vielleicht zwei Bewerbungen, und die passten oft nicht. Vor einem Jahr haben wir im Büro die Vier-Tage-Woche eingeführt, bei vollem Gehalt. Seitdem schreiben wir das groß in jede Anzeige. Und auf einmal bekommen wir zwanzig, dreißig Bewerbungen. Leute rufen an und sagen, sie haben sich nur wegen des freien Freitags gemeldet. Ob alle Kollegen jetzt glücklicher sind, weiß ich nicht genau. Aber unser Personalproblem im Büro ist erst mal gelöst.",
       "loesung": 1,
       "stelle": "auf einmal bekommen wir zwanzig, dreißig Bewerbungen",
       "erklaerung": "Seit der Vier-Tage-Woche bekommt die Firma viel mehr Bewerbungen. Beim Lohn wurde nichts gekürzt.",
       "frage": "Welche Aussage passt zu Frau Haddad?",
       "opt": [
        "Eine kürzere Woche ist im Schichtbetrieb schwer umzusetzen.",
        "Mit der Vier-Tage-Woche findet man leichter neue Mitarbeiter.",
        "Zehn Stunden am Tag sind auf Dauer zu anstrengend.",
        "Die Vier-Tage-Woche führt zu weniger Krankmeldungen.",
        "Jeder Mitarbeiter sollte sein Arbeitszeitmodell selbst wählen dürfen.",
        "Wer nur vier Tage arbeitet, sollte auch weniger Lohn bekommen."
       ],
       "fest": true
      },
      {
       "von": "Person 2 — Herr Novak, Elektriker auf dem Bau",
       "wer": "Mann",
       "text": "Ich hab das ein halbes Jahr gemacht, vier Tage, aber jeden Tag zehn Stunden. Am Anfang fand ich das super, Freitag frei, langes Wochenende. Nach ein paar Wochen hab ich aber gemerkt, dass ich abends total kaputt war. Um sechs aus dem Haus, um sieben zurück, essen, schlafen, fertig. Und auf der Baustelle passieren in der zehnten Stunde einfach mehr Fehler, das hat auch mein Meister gesagt. Jetzt sind wir wieder bei fünf Tagen mit acht Stunden, und ehrlich gesagt bin ich froh darüber.",
       "loesung": 2,
       "stelle": "dass ich abends total kaputt war",
       "erklaerung": "Der freie Freitag hat ihm gefallen, aber die langen Tage waren zu viel.",
       "frage": "Welche Aussage passt zu Herr Novak?",
       "opt": [
        "Eine kürzere Woche ist im Schichtbetrieb schwer umzusetzen.",
        "Mit der Vier-Tage-Woche findet man leichter neue Mitarbeiter.",
        "Zehn Stunden am Tag sind auf Dauer zu anstrengend.",
        "Die Vier-Tage-Woche führt zu weniger Krankmeldungen.",
        "Jeder Mitarbeiter sollte sein Arbeitszeitmodell selbst wählen dürfen.",
        "Wer nur vier Tage arbeitet, sollte auch weniger Lohn bekommen."
       ],
       "fest": true
      },
      {
       "von": "Person 3 — Frau Ivanova, Produktionsleiterin bei einem Hersteller von Verpackungen",
       "wer": "Frau",
       "text": "Ich verstehe, dass alle davon reden. Aber bei uns laufen die Maschinen rund um die Uhr, sieben Tage die Woche, in drei Schichten. Wenn jeder nur noch vier Tage arbeitet, brauche ich ungefähr zwanzig Prozent mehr Leute, und die finde ich auf dem Arbeitsmarkt gerade nicht. Im Büro geht das vielleicht, da macht man am Freitag eben zu. Eine Maschine kann ich nicht am Freitag zumachen. Wir probieren jetzt etwas anderes: mehr freie Tage am Stück nach der Nachtschicht. Das ist auch eine Entlastung.",
       "loesung": 0,
       "stelle": "Eine Maschine kann ich nicht am Freitag zumachen",
       "erklaerung": "Sie sucht zwar auch Leute, ihr Hauptpunkt ist aber: Mit drei Schichten geht das Modell kaum.",
       "frage": "Welche Aussage passt zu Frau Ivanova?",
       "opt": [
        "Eine kürzere Woche ist im Schichtbetrieb schwer umzusetzen.",
        "Mit der Vier-Tage-Woche findet man leichter neue Mitarbeiter.",
        "Zehn Stunden am Tag sind auf Dauer zu anstrengend.",
        "Die Vier-Tage-Woche führt zu weniger Krankmeldungen.",
        "Jeder Mitarbeiter sollte sein Arbeitszeitmodell selbst wählen dürfen.",
        "Wer nur vier Tage arbeitet, sollte auch weniger Lohn bekommen."
       ],
       "fest": true
      }
     ]
    },
    {
     "id": "b12h4s3",
     "titel": "Künstliche Intelligenz im Büro",
     "aufgaben": [
      {
       "von": "Person 1 — Frau Schuster, Sachbearbeiterin in einer Versicherung",
       "wer": "Frau",
       "text": "Wir dürfen seit dem Frühjahr so ein Programm mit künstlicher Intelligenz benutzen, zum Beispiel für Briefe an Kunden. Und ich gebe zu, das geht schnell. Ich schreibe drei Stichworte, und zehn Sekunden später ist der Brief fertig. Aber neulich stand da ein Paragraf drin, den es gar nicht gibt. Und einmal hat das Programm einem Kunden einfach eine Erstattung versprochen, die er gar nicht bekommt. Zum Glück habe ich das vorher gelesen. Ich lese jetzt jeden Brief zweimal. Ehrlich gesagt spare ich dadurch gar nicht so viel Zeit, wie alle denken.",
       "loesung": 0,
       "stelle": "Ich lese jetzt jeden Brief zweimal",
       "erklaerung": "Das Programm ist schnell, macht aber Fehler. Deshalb kontrolliert sie jeden Brief.",
       "frage": "Welche Aussage passt zu Frau Schuster?",
       "opt": [
        "Programme mit künstlicher Intelligenz machen Fehler, die man kontrollieren muss.",
        "Die Firma muss klare Regeln für den Umgang mit Daten aufstellen.",
        "Alle Mitarbeiter brauchen eine Schulung zu den neuen Programmen.",
        "Durch die neuen Programme bleibt mehr Zeit für die Arbeit mit Menschen.",
        "Künstliche Intelligenz wird viele Arbeitsplätze ersetzen.",
        "Man sollte solche Programme im Büro ganz verbieten."
       ],
       "fest": true
      },
      {
       "von": "Person 2 — Herr Benali, Geschäftsführer eines Pflegedienstes",
       "wer": "Mann",
       "text": "Bei uns in der ambulanten Pflege war die Dokumentation immer das große Thema. Meine Leute haben abends noch eine Stunde am Tablet gesessen und aufgeschrieben, was sie bei jedem Patienten gemacht haben. Jetzt sprechen sie das im Auto kurz ein, und das Programm macht daraus einen ordentlichen Bericht. Natürlich wird das noch mal gelesen. Aber die gewonnene Zeit geht nicht in mehr Touren, das war mir wichtig. Die Pflegekräfte können jetzt beim Patienten mal zehn Minuten länger bleiben und sich unterhalten. Dafür sind die ja eigentlich mal in den Beruf gegangen.",
       "loesung": 3,
       "stelle": "beim Patienten mal zehn Minuten länger bleiben",
       "erklaerung": "Die Kontrolle erwähnt er nur kurz. Wichtig ist ihm die Zeit für die Patienten.",
       "frage": "Welche Aussage passt zu Herr Benali?",
       "opt": [
        "Programme mit künstlicher Intelligenz machen Fehler, die man kontrollieren muss.",
        "Die Firma muss klare Regeln für den Umgang mit Daten aufstellen.",
        "Alle Mitarbeiter brauchen eine Schulung zu den neuen Programmen.",
        "Durch die neuen Programme bleibt mehr Zeit für die Arbeit mit Menschen.",
        "Künstliche Intelligenz wird viele Arbeitsplätze ersetzen.",
        "Man sollte solche Programme im Büro ganz verbieten."
       ],
       "fest": true
      },
      {
       "von": "Person 3 — Frau Wendt, Datenschutzbeauftragte bei einem Autozulieferer",
       "wer": "Frau",
       "text": "Ich bin nicht gegen diese Programme, damit das klar ist. Aber was ich in den letzten Monaten gesehen habe, macht mir Sorgen. Kollegen kopieren ganze Verträge mit Kundennamen in ein kostenloses Programm aus dem Internet, nur damit es ihnen eine Zusammenfassung schreibt. Wo diese Daten dann landen, weiß niemand. Wir haben deshalb jetzt eine klare Liste: Welche Programme sind erlaubt, welche Daten dürfen hinein und welche nie. Und die Geschäftsleitung muss dahinterstehen, sonst hält sich keiner daran. Das habe ich in drei Firmen erlebt.",
       "loesung": 1,
       "stelle": "Wir haben deshalb jetzt eine klare Liste",
       "erklaerung": "Sie ist ausdrücklich nicht für ein Verbot, sondern für feste Regeln beim Umgang mit Daten.",
       "frage": "Welche Aussage passt zu Frau Wendt?",
       "opt": [
        "Programme mit künstlicher Intelligenz machen Fehler, die man kontrollieren muss.",
        "Die Firma muss klare Regeln für den Umgang mit Daten aufstellen.",
        "Alle Mitarbeiter brauchen eine Schulung zu den neuen Programmen.",
        "Durch die neuen Programme bleibt mehr Zeit für die Arbeit mit Menschen.",
        "Künstliche Intelligenz wird viele Arbeitsplätze ersetzen.",
        "Man sollte solche Programme im Büro ganz verbieten."
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
   "id": "tb12hl1",
   "titel": "Prüfungslauf 1",
   "minuten": 25,
   "teile": [
    {
     "nr": 1,
     "art": "ansage",
     "aufgaben": [
      {
       "von": "Anrufbeantworter — Bildungszentrum Nordstadt",
       "wer": "Frau",
       "text": "Hier ist das Bildungszentrum Nordstadt. Unser Sekretariat ist in dieser Woche nur vormittags besetzt. Wichtig für alle Teilnehmer im Kurs Lagerlogistik: Der Unterricht am Donnerstag fällt nicht aus, er findet aber nicht in Raum zwölf statt, sondern in der Werkstatt im Nebengebäude. Bitte bringen Sie Sicherheitsschuhe mit. Wer keine eigenen hat, kann sich im Sekretariat welche ausleihen, allerdings nur gegen ein Pfand von zwanzig Euro.",
       "frage": "Wo findet der Unterricht am Donnerstag statt?",
       "opt": [
        "In Raum zwölf.",
        "In der Werkstatt im Nebengebäude.",
        "Im Sekretariat."
       ],
       "loesung": 1,
       "stelle": "sondern in der Werkstatt im Nebengebäude",
       "erklaerung": "„nicht in Raum zwölf, sondern …\": Nach „sondern\" kommt der richtige Ort."
      },
      {
       "von": "Nachricht eines Kollegen — Herr Schulte, Vertrieb",
       "wer": "Mann",
       "text": "Hallo Frau Adeyemi, Schulte hier. Kurze Sache wegen der Präsentation für die Firma Hoffmann am Freitag. Ich hab gerade mit denen telefoniert, die kommen nicht zu dritt, sondern zu fünft. Können Sie bitte noch zwei Stühle mehr in den Raum stellen lassen und beim Mittagessen auch für zwei mehr bestellen? Ach, und die Präsentation selbst, die schicken Sie mir bitte bis Donnerstagmittag, nicht erst abends, ich will die noch mal durchgehen. Danke Ihnen.",
       "frage": "Was soll Frau Adeyemi tun?",
       "opt": [
        "Das Mittagessen absagen.",
        "Die Präsentation am Donnerstagabend schicken.",
        "Für zwei zusätzliche Gäste sorgen."
       ],
       "loesung": 2,
       "stelle": "noch zwei Stühle mehr in den Raum stellen lassen",
       "erklaerung": "Die Präsentation soll schon mittags kommen, „nicht erst abends\". Das Essen wird mehr, nicht abgesagt."
      },
      {
       "von": "Ansage — Betriebskantine Werk Süd",
       "wer": "Frau",
       "text": "Hier ist die Ansage der Betriebskantine Werk Süd für die kommende Woche. Wegen Umbauarbeiten bleibt die Kantine von Montag bis Mittwoch geschlossen. In dieser Zeit steht ab elf Uhr dreißig ein Imbisswagen auf dem Parkplatz vor Halle vier. Ihre Essensmarken gelten dort ganz normal. Ab Donnerstag sind wir wieder für Sie da, dann auch mit der neuen Salattheke. Vorbestellungen für Besprechungen nehmen wir in dieser Woche leider nicht an.",
       "frage": "Wo bekommt man am Montag ein Mittagessen?",
       "opt": [
        "In der Kantine.",
        "Auf dem Parkplatz vor Halle vier.",
        "An der neuen Salattheke."
       ],
       "loesung": 1,
       "stelle": "ein Imbisswagen auf dem Parkplatz vor Halle vier",
       "erklaerung": "Die Kantine und die Salattheke gibt es erst wieder ab Donnerstag."
      },
      {
       "von": "Nachricht einer Angehörigen — Frau Sommer, an den Pflegedienst",
       "wer": "Frau",
       "text": "Ja, guten Tag, hier ist Sommer, die Tochter von Herrn Kaminski aus der Lessingstraße. Mein Vater muss morgen früh zur Blutabnahme ins Krankenhaus, ich fahre ihn um sieben Uhr hin. Ihre Kollegin braucht also morgen nicht um halb acht zu kommen. Könnte sie stattdessen am Nachmittag kommen, so gegen drei? Dann sind wir zurück. Die Tabletten für morgen früh hab ich ihm schon hingelegt. Bitte rufen Sie mich zurück, ob das klappt.",
       "frage": "Was möchte Frau Sommer?",
       "opt": [
        "Dass die Pflegerin morgen am Nachmittag kommt.",
        "Dass die Pflegerin schon um sieben Uhr kommt.",
        "Dass die Pflegerin ihren Vater ins Krankenhaus fährt."
       ],
       "loesung": 0,
       "stelle": "Könnte sie stattdessen am Nachmittag kommen",
       "erklaerung": "Ins Krankenhaus fährt Frau Sommer selbst. Um sieben fahren sie los, deshalb soll die Pflegerin später kommen."
      }
     ]
    },
    {
     "nr": 2,
     "art": "gespraech",
     "aufgaben": [
      {
       "ort": "Gespräch 1 — Abschnitt 1",
       "zeilen": [
        {
         "wer": "Frau",
         "text": "Entschuldigung, ich hab diese Jacke letzte Woche hier gekauft, und jetzt ist der Reißverschluss kaputt."
        },
        {
         "wer": "Mann",
         "text": "Oh, das tut mir leid. Darf ich mal sehen? Hm, ja, der hakt richtig."
        },
        {
         "wer": "Frau",
         "text": "Ich hab sie nur zweimal getragen."
        },
        {
         "wer": "Mann",
         "text": "Haben Sie den Kassenbon dabei?"
        }
       ],
       "satz": "Die Kundin möchte eine Jacke reklamieren.",
       "loesung": true,
       "stelle": "jetzt ist der Reißverschluss kaputt",
       "erklaerung": "Die Jacke ist neu und schon kaputt. Das ist eine Reklamation."
      },
      {
       "ort": "Gespräch 1 — Abschnitt 2",
       "zeilen": [
        {
         "wer": "Frau",
         "text": "Moment, ja, hier."
        },
        {
         "wer": "Mann",
         "text": "Danke. Also, umtauschen kann ich sie leider nicht, die Größe haben wir nicht mehr da. Ich kann Ihnen aber das Geld zurückgeben oder einen Gutschein."
        },
        {
         "wer": "Frau",
         "text": "Dann lieber das Geld. Auf meine Karte, bitte."
        },
        {
         "wer": "Mann",
         "text": "Gerne."
        }
       ],
       "frage": "Was bekommt die Kundin?",
       "opt": [
        "Einen Gutschein.",
        "Ihr Geld zurück.",
        "Eine neue Jacke in derselben Größe."
       ],
       "loesung": 1,
       "stelle": "Dann lieber das Geld",
       "erklaerung": "Umtausch geht nicht, und zwischen Geld und Gutschein wählt sie das Geld."
      },
      {
       "ort": "Gespräch 2 — Abschnitt 1",
       "zeilen": [
        {
         "wer": "Mann",
         "text": "Chefin, Tisch sieben fragt, ob in der Kürbissuppe Nüsse sind. Die Frau hat eine Allergie."
        },
        {
         "wer": "Frau",
         "text": "Nüsse? Nein, keine Nüsse. Aber oben drauf kommt Kürbiskernöl."
        },
        {
         "wer": "Mann",
         "text": "Ist das schlimm?"
        },
        {
         "wer": "Frau",
         "text": "Weiß ich nicht. Das muss sie selbst entscheiden. Frag sie lieber noch mal genau."
        }
       ],
       "satz": "Ein Gast hat eine Frage zu einem Gericht.",
       "loesung": true,
       "stelle": "ob in der Kürbissuppe Nüsse sind",
       "erklaerung": "Ein Gast mit Allergie will wissen, was in der Suppe ist."
      },
      {
       "ort": "Gespräch 2 — Abschnitt 2",
       "zeilen": [
        {
         "wer": "Mann",
         "text": "Okay. Und wenn sie das Öl nicht will?"
        },
        {
         "wer": "Frau",
         "text": "Dann machen wir die Suppe ohne. Kein Problem. Schreib es aber deutlich auf den Bon, damit Marco das sieht."
        },
        {
         "wer": "Mann",
         "text": "Mach ich. Ach, und Tisch sieben will dann gleich noch zahlen, getrennt."
        }
       ],
       "frage": "Was soll der Mann tun?",
       "opt": [
        "Den Wunsch deutlich auf den Bon schreiben.",
        "Die Suppe selbst kochen.",
        "Marco zu Tisch sieben schicken."
       ],
       "loesung": 0,
       "stelle": "Schreib es aber deutlich auf den Bon",
       "erklaerung": "Marco kocht und soll den Wunsch auf dem Bon lesen."
      },
      {
       "ort": "Gespräch 3 — Abschnitt 1",
       "zeilen": [
        {
         "wer": "Frau",
         "text": "Felix, wir haben ein Problem. Zimmer zwei null acht ist doppelt vergeben."
        },
        {
         "wer": "Mann",
         "text": "Wie, doppelt?"
        },
        {
         "wer": "Frau",
         "text": "Herr Lorenz hat es über die Internetseite gebucht, und eine Firma hat es per Telefon reserviert. Und beide kommen heute."
        },
        {
         "wer": "Mann",
         "text": "Na super. Haben wir noch was frei?"
        }
       ],
       "satz": "Ein Zimmer wurde zweimal gebucht.",
       "loesung": true,
       "stelle": "Zimmer zwei null acht ist doppelt vergeben",
       "erklaerung": "„doppelt vergeben\" heißt: Zwei Gäste haben dasselbe Zimmer gebucht."
      },
      {
       "ort": "Gespräch 3 — Abschnitt 2",
       "zeilen": [
        {
         "wer": "Frau",
         "text": "Nur noch die Suite im fünften Stock."
        },
        {
         "wer": "Mann",
         "text": "Dann gib Herrn Lorenz die Suite, zum gleichen Preis. Der war schon dreimal bei uns, den wollen wir nicht verlieren."
        },
        {
         "wer": "Frau",
         "text": "Und die Firma?"
        },
        {
         "wer": "Mann",
         "text": "Die bekommt die zwei null acht, wie reserviert."
        }
       ],
       "frage": "Was bekommt Herr Lorenz?",
       "opt": [
        "Die Suite zum normalen Zimmerpreis.",
        "Ein Zimmer in einem anderen Hotel.",
        "Zimmer zwei null acht."
       ],
       "loesung": 0,
       "stelle": "Dann gib Herrn Lorenz die Suite, zum gleichen Preis",
       "erklaerung": "Zimmer zwei null acht bekommt die Firma. Herr Lorenz zahlt für die Suite nicht mehr."
      },
      {
       "ort": "Gespräch 4 — Abschnitt 1",
       "zeilen": [
        {
         "wer": "Mann",
         "text": "Frau Dragić, soll ich die Getränke jetzt einräumen oder erst nach Ladenschluss?"
        },
        {
         "wer": "Frau",
         "text": "Jetzt, bitte. Das Regal ist fast leer, vor allem das Wasser."
        },
        {
         "wer": "Mann",
         "text": "Okay. Und die Sonderangebote vorne am Eingang?"
        },
        {
         "wer": "Frau",
         "text": "Die machen wir morgen früh. Das Werbeplakat ist noch nicht da."
        }
       ],
       "satz": "Der Mann soll die Getränke erst nach Ladenschluss einräumen.",
       "loesung": false,
       "stelle": "Jetzt, bitte. Das Regal ist fast leer",
       "erklaerung": "Die Chefin sagt „Jetzt\". Erst morgen kommen die Sonderangebote dran."
      },
      {
       "ort": "Gespräch 4 — Abschnitt 2",
       "zeilen": [
        {
         "wer": "Mann",
         "text": "Ach so. Und wann kommt das Plakat?"
        },
        {
         "wer": "Frau",
         "text": "Der Fahrer meinte, morgen um sieben. Wir öffnen um acht, das reicht dann gerade so."
        },
        {
         "wer": "Mann",
         "text": "Soll ich früher kommen?"
        },
        {
         "wer": "Frau",
         "text": "Ja, wenn das für dich geht, um halb sieben."
        }
       ],
       "frage": "Wann soll der Mann morgen kommen?",
       "opt": [
        "Um sieben.",
        "Um acht.",
        "Um halb sieben."
       ],
       "loesung": 2,
       "stelle": "Ja, wenn das für dich geht, um halb sieben",
       "erklaerung": "Um sieben kommt das Plakat, um acht öffnet der Laden. Der Mann soll vorher da sein."
      },
      {
       "ort": "Gespräch 5 — Abschnitt 1",
       "zeilen": [
        {
         "wer": "Frau",
         "text": "Bäckerei Hansen, Sie sprechen mit Frau Ruiz."
        },
        {
         "wer": "Mann",
         "text": "Ja, guten Tag, Petersen hier. Ich hatte für Samstag eine Torte bestellt, zum Geburtstag meiner Mutter."
        },
        {
         "wer": "Frau",
         "text": "Ja, Moment, Petersen, Petersen, ja, hier hab ich es. Eine Schwarzwälder Kirsch für zwölf Personen."
        },
        {
         "wer": "Mann",
         "text": "Genau. Ich müsste da noch was ändern."
        }
       ],
       "satz": "Der Mann ruft an, weil er eine Bestellung ändern möchte.",
       "loesung": true,
       "stelle": "Ich müsste da noch was ändern",
       "erklaerung": "Die Torte ist schon bestellt. Er möchte etwas daran ändern, nicht neu bestellen."
      },
      {
       "ort": "Gespräch 5 — Abschnitt 2",
       "zeilen": [
        {
         "wer": "Frau",
         "text": "Was soll es denn sein?"
        },
        {
         "wer": "Mann",
         "text": "Es kommen doch mehr Leute, so zwanzig. Und meine Schwester verträgt keinen Alkohol, also bitte ohne Kirschwasser."
        },
        {
         "wer": "Frau",
         "text": "Für zwanzig Personen machen wir dann zwei Torten, eine ohne Alkohol, eine normal. Geht das?"
        },
        {
         "wer": "Mann",
         "text": "Ja, perfekt."
        }
       ],
       "frage": "Was bestellt der Mann am Ende?",
       "opt": [
        "Zwei Torten ohne Kirschwasser.",
        "Eine große Torte ohne Alkohol.",
        "Zwei Torten, eine davon ohne Alkohol."
       ],
       "loesung": 2,
       "stelle": "eine ohne Alkohol, eine normal",
       "erklaerung": "Nur eine der beiden Torten ist ohne Alkohol, die andere ist normal."
      }
     ]
    },
    {
     "nr": 3,
     "art": "interview",
     "aufgaben": [
      {
       "ort": "Teambesprechung — Abschnitt 1",
       "zeilen": [
        {
         "wer": "Frau",
         "text": "Guten Morgen zusammen. Kurz vorweg: Kaffee ist da, Brötchen hat Herr Kaya mitgebracht, danke dafür. Wir haben heute drei Themen: die neuen Patienten, die Dienstwagen und den Plan für die Feiertage. Ich fang mal mit den Patienten an."
        },
        {
         "wer": "Mann",
         "text": "Gibt es viele neue?"
        },
        {
         "wer": "Frau",
         "text": "Fünf ab nächster Woche, alle hier im Stadtteil Ostend. Deshalb müssen wir die Touren neu planen."
        }
       ],
       "frage": "Warum müssen die Touren neu geplant werden?",
       "opt": [
        "Weil es neue Patienten gibt.",
        "Weil ein Dienstwagen fehlt.",
        "Weil Patienten weggezogen sind."
       ],
       "loesung": 0,
       "stelle": "Fünf ab nächster Woche, alle hier im Stadtteil Ostend",
       "erklaerung": "Die Dienstwagen sind ein eigenes Thema. Der Grund für die neuen Touren sind fünf neue Patienten."
      },
      {
       "ort": "Teambesprechung — Abschnitt 2",
       "zeilen": [
        {
         "wer": "Frau",
         "text": "Ich hab mir überlegt, dass Frau Petrova die neuen Patienten übernimmt. Sie wohnt ja selbst im Ostend."
        },
        {
         "wer": "Frau",
         "text": "Ja, Frau Lorenz, das passt mir gut. Aber dann wird meine Tour am Morgen zu lang. Ich hab jetzt schon elf Leute."
        },
        {
         "wer": "Frau",
         "text": "Stimmt. Dann gibt Herr Schmitt zwei von seinen Patienten ab, die in der Nähe vom Marktplatz. Herr Schmitt, geht das?"
        },
        {
         "wer": "Mann",
         "text": "Ja, kein Problem. Ich hab sowieso die längste Fahrstrecke."
        }
       ],
       "frage": "Was macht Herr Schmitt?",
       "opt": [
        "Er übernimmt die neuen Patienten.",
        "Er gibt zwei seiner Patienten ab.",
        "Er fährt ab jetzt ins Ostend."
       ],
       "loesung": 1,
       "stelle": "Dann gibt Herr Schmitt zwei von seinen Patienten ab",
       "erklaerung": "Die neuen Patienten übernimmt Frau Petrova. Herr Schmitt hat danach weniger zu fahren."
      },
      {
       "ort": "Teambesprechung — Abschnitt 3",
       "zeilen": [
        {
         "wer": "Frau",
         "text": "Dann zu den Dienstwagen. Der blaue Kleinwagen ist seit Montag in der Werkstatt, Getriebeschaden. Das dauert mindestens zwei Wochen."
        },
        {
         "wer": "Mann",
         "text": "Zwei Wochen? Und womit fahre ich dann?"
        },
        {
         "wer": "Frau",
         "text": "Herr Kaya, für Sie haben wir einen Mietwagen bestellt, den können Sie morgen ab sieben am Büro abholen. Der Schlüssel liegt im Briefkasten."
        },
        {
         "wer": "Mann",
         "text": "Ah, gut. Ich dachte schon, ich muss mit dem Fahrrad."
        }
       ],
       "frage": "Wie kommt Herr Kaya an den Mietwagen?",
       "opt": [
        "Er holt ihn in der Werkstatt ab.",
        "Frau Lorenz bringt ihm den Schlüssel.",
        "Der Schlüssel liegt im Briefkasten am Büro."
       ],
       "loesung": 2,
       "stelle": "Der Schlüssel liegt im Briefkasten",
       "erklaerung": "In der Werkstatt steht nur der kaputte Kleinwagen. Den Mietwagen holt er am Büro ab."
      },
      {
       "ort": "Teambesprechung — Abschnitt 4",
       "zeilen": [
        {
         "wer": "Mann",
         "text": "Darf ich noch was zu den Autos sagen?"
        },
        {
         "wer": "Frau",
         "text": "Ja, Herr Schmitt, bitte."
        },
        {
         "wer": "Mann",
         "text": "Es ist mir jetzt zum zweiten Mal passiert, dass ich morgens ins Auto steige und der Tank fast leer ist. Wer abends als Letzter fährt, sollte doch tanken."
        },
        {
         "wer": "Frau",
         "text": "Ja, das ist eigentlich die Regel. Ich hänge morgen noch mal einen Zettel ins Auto. Ab jetzt gilt: Unter einem Viertel wird getankt, die Karte liegt im Handschuhfach."
        }
       ],
       "frage": "Worüber beschwert sich Herr Schmitt?",
       "opt": [
        "Die Tankkarte ist weg.",
        "Die Autos sind schmutzig.",
        "Die Autos sind morgens nicht getankt."
       ],
       "loesung": 2,
       "stelle": "der Tank fast leer ist",
       "erklaerung": "Die Tankkarte liegt im Handschuhfach. Das Problem ist der leere Tank am Morgen."
      },
      {
       "ort": "Teambesprechung — Abschnitt 5",
       "zeilen": [
        {
         "wer": "Frau",
         "text": "Letztes Thema: die Feiertage. Ich brauche für Weihnachten und Silvester je zwei Leute für die Frühtour und einen für den Abend."
        },
        {
         "wer": "Frau",
         "text": "Ich kann Weihnachten machen. Meine Familie feiert erst am sechsundzwanzigsten."
        },
        {
         "wer": "Frau",
         "text": "Danke, Frau Petrova. Herr Kaya, Sie hatten letztes Jahr Silvester, oder?"
        },
        {
         "wer": "Mann",
         "text": "Ja, und Weihnachten auch. Dieses Jahr wäre ich gern mal zu Hause."
        }
       ],
       "frage": "Was möchte Herr Kaya?",
       "opt": [
        "Er möchte an Silvester arbeiten.",
        "Er möchte an den Feiertagen frei haben.",
        "Er möchte mit Frau Petrova tauschen."
       ],
       "loesung": 1,
       "stelle": "Dieses Jahr wäre ich gern mal zu Hause",
       "erklaerung": "Letztes Jahr hat er an beiden Feiertagen gearbeitet. Dieses Jahr möchte er frei haben."
      },
      {
       "ort": "Teambesprechung — Abschnitt 6",
       "zeilen": [
        {
         "wer": "Frau",
         "text": "Verstehe ich. Dann frage ich noch die Kollegen aus der Spätschicht, die sind heute nicht da. Ich schicke allen bis Freitag eine Nachricht mit dem Plan. Wer tauschen will, regelt das bitte untereinander und sagt mir dann Bescheid."
        },
        {
         "wer": "Mann",
         "text": "Und wer übernimmt den Abend an Silvester?"
        },
        {
         "wer": "Frau",
         "text": "Den mach ich selbst. So, danke euch, schöne Woche."
        }
       ],
       "frage": "Wer arbeitet an Silvester am Abend?",
       "opt": [
        "Die Leiterin, Frau Lorenz.",
        "Herr Kaya.",
        "Ein Kollege aus der Spätschicht."
       ],
       "loesung": 0,
       "stelle": "Den mach ich selbst",
       "erklaerung": "Die Spätschicht wird nur gefragt. Den Silvesterabend übernimmt die Leiterin selbst."
      }
     ]
    },
    {
     "nr": 4,
     "art": "diskussion",
     "aufgaben": [
      {
       "von": "Person 1 — Herr Mendes, Lagerarbeiter",
       "wer": "Mann",
       "text": "Ich hab vor zwei Jahren den Staplerschein gemacht und dann noch einen Kurs als Fachkraft für Lagerlogistik, abends, zweimal pro Woche, ein ganzes Jahr lang. Die Firma hat die Hälfte bezahlt, das war gut. Aber verdienen tue ich bis heute genau dasselbe wie vorher. Mein Chef sagt, er freut sich, dass ich jetzt mehr kann. Ja, schön. Aber ich mache jetzt auch die Einarbeitung von den Neuen und die Planung für die Inventur. Wenn man mehr Verantwortung hat, muss das auch auf dem Konto sichtbar sein. Sonst fragt sich der Nächste, warum er sich das antun soll.",
       "loesung": 3,
       "stelle": "muss das auch auf dem Konto sichtbar sein",
       "erklaerung": "Dass der Kurs abends war, stört ihn nicht so sehr. Er ärgert sich, dass er nicht mehr verdient.",
       "frage": "Welche Aussage passt zu Herr Mendes?",
       "opt": [
        "Weiterbildung sollte während der Arbeitszeit stattfinden.",
        "Viele Beschäftigte wissen nicht, welche Förderung es gibt.",
        "Kurze Lerneinheiten am Arbeitsplatz bringen mehr als lange Seminare.",
        "Wer sich weiterbildet, sollte danach mehr verdienen.",
        "Kleine Betriebe können sich Weiterbildung kaum leisten.",
        "Sprachkurse sind die wichtigste Weiterbildung für ausländische Fachkräfte."
       ],
       "fest": true
      },
      {
       "von": "Person 2 — Frau Berisha, Weiterbildungsberaterin",
       "wer": "Frau",
       "text": "In meine Beratung kommen jede Woche Leute, die seit Jahren eine Weiterbildung machen wollen und denken, sie können sich das nicht leisten. Dann frage ich: Wissen Sie, dass der Staat bei einer Meisterschule einen großen Teil der Kosten übernimmt? Und die meisten schauen mich an, als hätte ich etwas Unglaubliches erzählt. Auch dass die Arbeitsagentur Weiterbildung für Beschäftigte bezahlen kann, wenn der Betrieb mitmacht, das weiß kaum jemand. Das Geld ist da, es wird nur nicht abgeholt. Ich wünsche mir, dass die Betriebe ihre Leute darauf hinweisen.",
       "loesung": 1,
       "stelle": "Das Geld ist da, es wird nur nicht abgeholt",
       "erklaerung": "Die Menschen kennen die Förderung nicht. Darum geht es in ihrem ganzen Beitrag.",
       "frage": "Welche Aussage passt zu Frau Berisha?",
       "opt": [
        "Weiterbildung sollte während der Arbeitszeit stattfinden.",
        "Viele Beschäftigte wissen nicht, welche Förderung es gibt.",
        "Kurze Lerneinheiten am Arbeitsplatz bringen mehr als lange Seminare.",
        "Wer sich weiterbildet, sollte danach mehr verdienen.",
        "Kleine Betriebe können sich Weiterbildung kaum leisten.",
        "Sprachkurse sind die wichtigste Weiterbildung für ausländische Fachkräfte."
       ],
       "fest": true
      },
      {
       "von": "Person 3 — Herr Lehmann, Ausbildungsleiter in einem Elektronikwerk",
       "wer": "Mann",
       "text": "Wir haben früher unsere Leute für drei Tage in ein Hotel geschickt, zu einem Seminar. Danach kamen sie mit einem dicken Ordner zurück, und der stand dann im Schrank. Seit einem Jahr machen wir es anders. Jeden Mittwoch gibt es eine Viertelstunde direkt an der Maschine, ein Kollege zeigt einen Handgriff oder ein neues Programm, und alle probieren es sofort aus. Das kostet fast nichts, und die Leute behalten es viel besser. Ich würde nicht sagen, dass Seminare überflüssig sind. Aber für den Alltag in der Produktion ist das kleine Format viel wirksamer.",
       "loesung": 2,
       "stelle": "Jeden Mittwoch gibt es eine Viertelstunde direkt an der Maschine",
       "erklaerung": "Die geringen Kosten sind ein Nebenpunkt. Er findet kurze Einheiten an der Maschine wirksamer.",
       "frage": "Welche Aussage passt zu Herr Lehmann?",
       "opt": [
        "Weiterbildung sollte während der Arbeitszeit stattfinden.",
        "Viele Beschäftigte wissen nicht, welche Förderung es gibt.",
        "Kurze Lerneinheiten am Arbeitsplatz bringen mehr als lange Seminare.",
        "Wer sich weiterbildet, sollte danach mehr verdienen.",
        "Kleine Betriebe können sich Weiterbildung kaum leisten.",
        "Sprachkurse sind die wichtigste Weiterbildung für ausländische Fachkräfte."
       ],
       "fest": true
      }
     ]
    }
   ]
  },
  {
   "id": "tb12hl2",
   "titel": "Prüfungslauf 2",
   "minuten": 25,
   "teile": [
    {
     "nr": 1,
     "art": "ansage",
     "aufgaben": [
      {
       "von": "Anrufbeantworter — Werkstatt Brückner",
       "wer": "Mann",
       "text": "Werkstatt Brückner, guten Tag. Wir sind von Montag bis Freitag von halb acht bis achtzehn Uhr für Sie da, samstags bis zwölf. Sie möchten einen Termin für den Reifenwechsel? Den buchen Sie bitte direkt online, am Telefon können wir dafür im Moment keine Termine vergeben. Bei einer Panne auf der Straße rufen Sie bitte unseren Abschleppdienst an, die Nummer ist null eins sieben null, vier vier zwei, sechs neun eins. Ansonsten sprechen Sie nach dem Ton, wir rufen zurück.",
       "frage": "Wie bekommt man einen Termin für den Reifenwechsel?",
       "opt": [
        "Über den Abschleppdienst.",
        "Über das Internet.",
        "Mit einer Nachricht nach dem Ton."
       ],
       "loesung": 1,
       "stelle": "Den buchen Sie bitte direkt online",
       "erklaerung": "„online\" heißt über das Internet. Am Telefon werden dafür gerade keine Termine vergeben."
      },
      {
       "von": "Nachricht einer Kollegin — Frau Nowak, Buchhaltung",
       "wer": "Frau",
       "text": "Hallo Herr Fischer, Nowak hier aus der Buchhaltung. Ihre Reisekostenabrechnung für Hamburg ist bei mir angekommen, danke. Mir fehlt aber noch die Hotelrechnung, und zwar im Original, eine Kopie reicht leider nicht. Die Tankquittungen sind dabei, die sind in Ordnung. Wenn ich die Rechnung bis Ende der Woche habe, bekommen Sie das Geld noch mit dem Gehalt im März. Sonst wird es April. Legen Sie sie mir einfach ins Fach.",
       "frage": "Was fehlt Frau Nowak noch?",
       "opt": [
        "Die Originalrechnung vom Hotel.",
        "Die Tankquittungen.",
        "Eine Kopie der Hotelrechnung."
       ],
       "loesung": 0,
       "stelle": "und zwar im Original, eine Kopie reicht leider nicht",
       "erklaerung": "Die Tankquittungen sind schon da, und eine Kopie reicht ausdrücklich nicht."
      },
      {
       "von": "Warteschleife — Gesundheitskasse Mittelland",
       "wer": "Frau",
       "text": "Willkommen bei der Gesundheitskasse Mittelland. Bitte haben Sie noch etwas Geduld. Ein Hinweis für Arbeitgeber: Die Krankmeldungen Ihrer Mitarbeiter bekommen Sie seit diesem Jahr elektronisch. Sie müssen dafür keine Papierbescheinigung mehr anfordern. Wenn Sie eine neue Versichertenkarte brauchen, können Sie das Foto auch in unserer App hochladen. Möchten Sie lieber zurückgerufen werden, drücken Sie die Raute, dann melden wir uns innerhalb von zwei Stunden.",
       "frage": "Was passiert, wenn man die Raute drückt?",
       "opt": [
        "Man kann ein Foto hochladen.",
        "Man bekommt innerhalb von zwei Stunden einen Rückruf.",
        "Man wird sofort mit einem Mitarbeiter verbunden."
       ],
       "loesung": 1,
       "stelle": "dann melden wir uns innerhalb von zwei Stunden",
       "erklaerung": "Die Raute ist für den Rückruf. Das Foto lädt man in der App hoch."
      },
      {
       "von": "Nachricht eines Kunden — Herr Brandl, Restaurant Zum Anker",
       "wer": "Mann",
       "text": "Grüß Gott, Brandl vom Restaurant Zum Anker. Wir hatten bei Ihnen für Samstag zwei Aushilfen für unsere Hochzeitsfeier angefragt. Jetzt hat das Brautpaar noch zwanzig Gäste mehr eingeladen, wir sind also bei hundertzwanzig. Wir bräuchten deshalb drei Leute statt zwei, gleiche Zeit, also von siebzehn Uhr bis Mitternacht. Wichtig ist, dass mindestens einer schon mal hinter der Bar gearbeitet hat. Bitte geben Sie mir bis morgen Bescheid, ob das geht.",
       "frage": "Was ist für Herrn Brandl wichtig?",
       "opt": [
        "Dass alle Aushilfen schon in einer Bar gearbeitet haben.",
        "Dass eine der Aushilfen Erfahrung an der Bar hat.",
        "Dass die Aushilfen früher als geplant kommen."
       ],
       "loesung": 1,
       "stelle": "dass mindestens einer schon mal hinter der Bar gearbeitet hat",
       "erklaerung": "„mindestens einer\" heißt nicht alle. Die Zeit bleibt gleich."
      }
     ]
    },
    {
     "nr": 2,
     "art": "gespraech",
     "aufgaben": [
      {
       "ort": "Gespräch 1 — Abschnitt 1",
       "zeilen": [
        {
         "wer": "Mann",
         "text": "Support, Hoffmann, guten Tag."
        },
        {
         "wer": "Frau",
         "text": "Ja, hallo, hier ist Weber aus der Buchhaltung. Ich komme nicht mehr in mein E-Mail-Programm. Da steht immer, mein Passwort ist abgelaufen."
        },
        {
         "wer": "Mann",
         "text": "Ja, das passiert alle neunzig Tage. Haben Sie schon ein neues gewählt?"
        },
        {
         "wer": "Frau",
         "text": "Ich hab es versucht, aber es kommt immer eine Fehlermeldung."
        }
       ],
       "satz": "Die Frau kann sich nicht anmelden.",
       "loesung": true,
       "stelle": "Ich komme nicht mehr in mein E-Mail-Programm",
       "erklaerung": "„Ich komme nicht mehr rein\" heißt: Die Anmeldung klappt nicht."
      },
      {
       "ort": "Gespräch 1 — Abschnitt 2",
       "zeilen": [
        {
         "wer": "Mann",
         "text": "Wie lang war denn das neue Passwort?"
        },
        {
         "wer": "Frau",
         "text": "Acht Zeichen, glaub ich."
        },
        {
         "wer": "Mann",
         "text": "Ah, da liegt es. Es müssen jetzt mindestens zwölf sein, mit einer Zahl und einem Sonderzeichen. Das hat sich im Oktober geändert."
        },
        {
         "wer": "Frau",
         "text": "Zwölf? Na gut, ich probier es."
        }
       ],
       "frage": "Warum funktioniert das neue Passwort nicht?",
       "opt": [
        "Es wurde im Oktober gesperrt.",
        "Es ist älter als neunzig Tage.",
        "Es ist zu kurz."
       ],
       "loesung": 2,
       "stelle": "Es müssen jetzt mindestens zwölf sein",
       "erklaerung": "Acht Zeichen sind zu wenig. Im Oktober hat sich nur die Regel geändert."
      },
      {
       "ort": "Gespräch 2 — Abschnitt 1",
       "zeilen": [
        {
         "wer": "Mann",
         "text": "Morgen, Frau Klose. Wir wollten heute im Bad die Fliesen legen."
        },
        {
         "wer": "Frau",
         "text": "Ja, guten Morgen. Ähm, da gibt es ein Problem. Die Fliesen sind gestern nicht gekommen."
        },
        {
         "wer": "Mann",
         "text": "Nicht gekommen? Die waren doch für Montag bestellt."
        },
        {
         "wer": "Frau",
         "text": "Ja, der Baumarkt hat angerufen, die hängen irgendwo beim Spediteur."
        }
       ],
       "satz": "Die Handwerker können heute wie geplant arbeiten.",
       "loesung": false,
       "stelle": "Die Fliesen sind gestern nicht gekommen",
       "erklaerung": "Ohne Fliesen geht der Plan nicht. Die Handwerker müssen etwas anderes machen."
      },
      {
       "ort": "Gespräch 2 — Abschnitt 2",
       "zeilen": [
        {
         "wer": "Mann",
         "text": "Hm. Dann machen wir heute was anderes. Wir können schon mal die Wand in der Küche vorbereiten, das stand sowieso für nächste Woche an."
        },
        {
         "wer": "Frau",
         "text": "Ja, gut. Brauchen Sie dafür was von mir?"
        },
        {
         "wer": "Mann",
         "text": "Nur dass die Küche frei ist. Die Schränke müssen weg von der Wand."
        },
        {
         "wer": "Frau",
         "text": "Das schaffe ich bis zehn."
        }
       ],
       "frage": "Was machen die Handwerker heute?",
       "opt": [
        "Sie bereiten die Küchenwand vor.",
        "Sie holen die Fliesen beim Spediteur.",
        "Sie legen die Fliesen im Bad."
       ],
       "loesung": 0,
       "stelle": "die Wand in der Küche vorbereiten",
       "erklaerung": "Die Küche war erst für nächste Woche geplant und wird jetzt vorgezogen."
      },
      {
       "ort": "Gespräch 3 — Abschnitt 1",
       "zeilen": [
        {
         "wer": "Frau",
         "text": "Kundenservice Netzfunk, mein Name ist Schäfer, was kann ich für Sie tun?"
        },
        {
         "wer": "Mann",
         "text": "Ja, Günther hier. Ich will meinen Vertrag kündigen, ich ziehe nach Spanien."
        },
        {
         "wer": "Frau",
         "text": "Oh, verstehe. Haben Sie Ihre Kundennummer da?"
        },
        {
         "wer": "Mann",
         "text": "Moment, vier sieben drei, acht acht eins."
        }
       ],
       "satz": "Der Mann möchte seinen Vertrag verlängern.",
       "loesung": false,
       "stelle": "Ich will meinen Vertrag kündigen",
       "erklaerung": "Er zieht ins Ausland und möchte den Vertrag beenden, nicht verlängern."
      },
      {
       "ort": "Gespräch 3 — Abschnitt 2",
       "zeilen": [
        {
         "wer": "Frau",
         "text": "Danke. Herr Günther, Ihr Vertrag läuft noch bis Ende Juni. Bei einem Umzug ins Ausland können Sie aber früher raus. Dafür brauchen wir eine Bescheinigung."
        },
        {
         "wer": "Mann",
         "text": "Was für eine Bescheinigung?"
        },
        {
         "wer": "Frau",
         "text": "Die Abmeldung vom Einwohnermeldeamt. Die schicken Sie uns einfach als Foto per Mail."
        }
       ],
       "frage": "Was muss der Mann schicken?",
       "opt": [
        "Seinen neuen Mietvertrag in Spanien.",
        "Eine schriftliche Kündigung per Post.",
        "Die Abmeldung vom Einwohnermeldeamt."
       ],
       "loesung": 2,
       "stelle": "Die Abmeldung vom Einwohnermeldeamt",
       "erklaerung": "Gebraucht wird die Abmeldung, und zwar als Foto per Mail, nicht per Post."
      },
      {
       "ort": "Gespräch 4 — Abschnitt 1",
       "zeilen": [
        {
         "wer": "Mann",
         "text": "Frau Avcı, heute Nachmittag bin ich allein am Schalter, oder?"
        },
        {
         "wer": "Frau",
         "text": "Nein, Frau Lehmann kommt um zwei. Sie hatte nur einen Arzttermin."
        },
        {
         "wer": "Mann",
         "text": "Ach so, gut. Es ist nämlich voll, die Leute warten bis draußen auf dem Flur."
        },
        {
         "wer": "Frau",
         "text": "Ja, das liegt an den Pässen. Vor den Sommerferien wollen alle noch schnell einen neuen Reisepass."
        }
       ],
       "satz": "Im Amt warten heute viele Menschen.",
       "loesung": true,
       "stelle": "die Leute warten bis draußen auf dem Flur",
       "erklaerung": "Es ist so voll, dass die Leute bis auf den Flur warten."
      },
      {
       "ort": "Gespräch 4 — Abschnitt 2",
       "zeilen": [
        {
         "wer": "Mann",
         "text": "Können wir nicht noch einen Schalter aufmachen?"
        },
        {
         "wer": "Frau",
         "text": "Ich frag mal Herrn Böhm. Vielleicht kann Kevin helfen, unser Auszubildender."
        },
        {
         "wer": "Mann",
         "text": "Das wäre super. Aber Pässe bearbeiten darf er ja nicht."
        },
        {
         "wer": "Frau",
         "text": "Nein, nur Nummern ausgeben und schauen, ob die Leute alle Unterlagen dabeihaben."
        }
       ],
       "frage": "Wobei soll der Auszubildende helfen?",
       "opt": [
        "Beim Prüfen der Unterlagen.",
        "Beim Bearbeiten der Pässe.",
        "Beim Öffnen eines neuen Schalters."
       ],
       "loesung": 0,
       "stelle": "schauen, ob die Leute alle Unterlagen dabeihaben",
       "erklaerung": "Pässe darf er nicht bearbeiten. Er gibt Nummern aus und prüft die Unterlagen."
      },
      {
       "ort": "Gespräch 5 — Abschnitt 1",
       "zeilen": [
        {
         "wer": "Mann",
         "text": "Hallo Jana, Dragan hier. Ich steh in der Gartenstraße, bei Nummer zwölf macht keiner auf."
        },
        {
         "wer": "Frau",
         "text": "Hast du geklingelt?"
        },
        {
         "wer": "Mann",
         "text": "Zweimal. Und die Nachbarn sind auch nicht da."
        },
        {
         "wer": "Frau",
         "text": "Moment, ich schau mal in den Auftrag. Ah, da steht eine Notiz: Bitte in der Garage abstellen."
        }
       ],
       "satz": "Der Fahrer kann ein Paket nicht wie normal übergeben.",
       "loesung": true,
       "stelle": "bei Nummer zwölf macht keiner auf",
       "erklaerung": "Niemand ist zu Hause, auch die Nachbarn nicht. Deshalb ruft er in der Zentrale an."
      },
      {
       "ort": "Gespräch 5 — Abschnitt 2",
       "zeilen": [
        {
         "wer": "Mann",
         "text": "In der Garage? Die ist zu."
        },
        {
         "wer": "Frau",
         "text": "Da steht, sie ist offen, die Seitentür. Links neben dem Tor."
        },
        {
         "wer": "Mann",
         "text": "Ach so, ja, jetzt seh ich sie. Okay, ich stell es rein und mach ein Foto."
        },
        {
         "wer": "Frau",
         "text": "Ja, mach unbedingt ein Foto, sonst glaubt uns das nachher keiner."
        }
       ],
       "frage": "Wo stellt der Fahrer das Paket ab?",
       "opt": [
        "Vor dem Garagentor.",
        "Bei den Nachbarn.",
        "In der Garage, durch die Seitentür."
       ],
       "loesung": 2,
       "stelle": "die Seitentür. Links neben dem Tor",
       "erklaerung": "Das große Tor ist zu, aber die Seitentür ist offen. Die Nachbarn sind nicht da."
      }
     ]
    },
    {
     "nr": 3,
     "art": "interview",
     "aufgaben": [
      {
       "ort": "Radiosendung — Abschnitt 1",
       "zeilen": [
        {
         "wer": "Frau",
         "text": "Hallo und guten Tag bei „Job und Leben\". Sehr viele Menschen in Deutschland arbeiten im Schichtdienst: in der Pflege, bei der Polizei, in der Industrie. Was macht das mit unserem Körper? Darüber spreche ich mit Doktor Jonas Feldmann, Arbeitsmediziner in einem großen Chemiewerk. Herr Feldmann, wo liegt das größte Problem?"
        },
        {
         "wer": "Mann",
         "text": "Ganz klar: beim Schlaf. Wer nachts arbeitet, muss tagsüber schlafen, und das ist für den Körper einfach nicht vorgesehen."
        },
        {
         "wer": "Frau",
         "text": "Und wie viel schlafen die Leute dann wirklich?"
        },
        {
         "wer": "Mann",
         "text": "Die meisten nach einer Nachtschicht nur vier oder fünf Stunden, und das über Jahre."
        }
       ],
       "frage": "Was ist laut Doktor Feldmann das größte Problem?",
       "opt": [
        "Zu viel Arbeit in der Industrie.",
        "Zu wenig Schlaf.",
        "Schlechtes Essen in der Nacht."
       ],
       "loesung": 1,
       "stelle": "Ganz klar: beim Schlaf",
       "erklaerung": "„Ganz klar\" zeigt die Antwort auf die Frage nach dem größten Problem."
      },
      {
       "ort": "Radiosendung — Abschnitt 2",
       "zeilen": [
        {
         "wer": "Frau",
         "text": "Was kann man da tun?"
        },
        {
         "wer": "Mann",
         "text": "Das Schlafzimmer wirklich dunkel machen, mit Rollläden oder dicken Vorhängen. Handy aus, Klingel aus. Und, das klingt jetzt banal: der Familie sagen, dass man nicht gestört werden will. Viele erzählen mir, dass um elf der Paketbote klingelt, und dann ist der Schlaf vorbei."
        },
        {
         "wer": "Frau",
         "text": "Und Schlaftabletten?"
        },
        {
         "wer": "Mann",
         "text": "Davon rate ich ab. Kurzfristig helfen sie vielleicht, aber man gewöhnt sich schnell daran."
        }
       ],
       "frage": "Was hält Doktor Feldmann von Schlaftabletten?",
       "opt": [
        "Er verschreibt sie nur für kurze Zeit.",
        "Er rät davon ab.",
        "Er empfiehlt sie nach jeder Nachtschicht."
       ],
       "loesung": 1,
       "stelle": "Davon rate ich ab",
       "erklaerung": "„kurzfristig helfen sie vielleicht\" ist nur eine Einschränkung. Seine Meinung: lieber nicht."
      },
      {
       "ort": "Radiosendung — Abschnitt 3",
       "zeilen": [
        {
         "wer": "Frau",
         "text": "Wie sieht es mit dem Essen aus? Viele essen ja nachts einfach, was der Automat hergibt."
        },
        {
         "wer": "Mann",
         "text": "Ja, das sehe ich jeden Tag. Schokoriegel, Chips, Cola. Der Magen ist nachts aber eigentlich im Ruhemodus."
        },
        {
         "wer": "Frau",
         "text": "Was empfehlen Sie stattdessen?"
        },
        {
         "wer": "Mann",
         "text": "Eine richtige warme Mahlzeit vor der Schicht, so gegen acht Uhr abends, und nachts nur etwas Leichtes. Ein Joghurt, ein Brot, Obst."
        }
       ],
       "frage": "Wann soll man laut Doktor Feldmann warm essen?",
       "opt": [
        "Mitten in der Nacht.",
        "Vor Beginn der Nachtschicht.",
        "Direkt nach der Schicht am Morgen."
       ],
       "loesung": 1,
       "stelle": "Eine richtige warme Mahlzeit vor der Schicht",
       "erklaerung": "Nachts empfiehlt er nur etwas Leichtes. Warm essen soll man vorher, gegen acht Uhr abends."
      },
      {
       "ort": "Radiosendung — Abschnitt 4",
       "zeilen": [
        {
         "wer": "Frau",
         "text": "Es gibt ja verschiedene Schichtmodelle. Ist eins besser als die anderen?"
        },
        {
         "wer": "Mann",
         "text": "Ja. Für den Körper ist es besser, wenn die Schichten vorwärts wechseln. Also erst Frühschicht, dann Spätschicht, dann Nachtschicht."
        },
        {
         "wer": "Frau",
         "text": "Und rückwärts?"
        },
        {
         "wer": "Mann",
         "text": "Rückwärts, also von der Nacht direkt in die Frühschicht, das ist am schlimmsten. Leider ist das in vielen Betrieben immer noch üblich."
        }
       ],
       "frage": "Welcher Wechsel ist laut Doktor Feldmann am ungünstigsten?",
       "opt": [
        "Von der Nachtschicht in die Frühschicht.",
        "Von der Frühschicht in die Spätschicht.",
        "Von der Spätschicht in die Nachtschicht."
       ],
       "loesung": 0,
       "stelle": "von der Nacht direkt in die Frühschicht",
       "erklaerung": "Früh, spät, Nacht ist „vorwärts\" und gut. „am schlimmsten\" ist der Wechsel rückwärts."
      },
      {
       "ort": "Radiosendung — Abschnitt 5",
       "zeilen": [
        {
         "wer": "Frau",
         "text": "Jetzt hat uns ein Hörer geschrieben. Er ist neunundfünfzig und arbeitet seit dreißig Jahren in Schichten. Er fragt, ob er ein Recht hat, keine Nachtschicht mehr zu machen."
        },
        {
         "wer": "Mann",
         "text": "Ein automatisches Recht nur wegen des Alters gibt es leider nicht."
        },
        {
         "wer": "Frau",
         "text": "Also muss er weiter nachts arbeiten?"
        },
        {
         "wer": "Mann",
         "text": "Nicht unbedingt. Wenn ein Arzt bescheinigt, dass die Nachtarbeit seiner Gesundheit schadet, dann muss der Arbeitgeber ihm, wenn es möglich ist, einen Arbeitsplatz am Tag anbieten. Das steht so im Arbeitszeitgesetz."
        }
       ],
       "frage": "Wann muss der Arbeitgeber einen Arbeitsplatz am Tag anbieten?",
       "opt": [
        "Wenn jemand dreißig Jahre in Schichten gearbeitet hat.",
        "Wenn ein Arzt gesundheitliche Gründe bescheinigt.",
        "Wenn der Mitarbeiter älter als fünfundfünfzig ist."
       ],
       "loesung": 1,
       "stelle": "Wenn ein Arzt bescheinigt, dass die Nachtarbeit seiner Gesundheit schadet",
       "erklaerung": "Alter und lange Schichtarbeit allein reichen nicht. Es kommt auf die Bescheinigung vom Arzt an."
      },
      {
       "ort": "Radiosendung — Abschnitt 6",
       "zeilen": [
        {
         "wer": "Frau",
         "text": "Herr Feldmann, eine letzte Frage: Arbeiten Sie selbst auch nachts?"
        },
        {
         "wer": "Mann",
         "text": "Zum Glück nur im Bereitschaftsdienst, vielleicht zweimal im Monat. Und ich merke es jedes Mal. Am nächsten Tag bin ich zu nichts zu gebrauchen. Deshalb hab ich großen Respekt vor allen, die das jede Woche machen."
        },
        {
         "wer": "Frau",
         "text": "Vielen Dank, Herr Feldmann. Nach den Nachrichten geht es weiter mit Ihren Fragen zum Thema Kündigung."
        }
       ],
       "frage": "Wie oft arbeitet Doktor Feldmann selbst nachts?",
       "opt": [
        "Etwa zweimal im Monat.",
        "Jede Woche.",
        "Nie."
       ],
       "loesung": 0,
       "stelle": "vielleicht zweimal im Monat",
       "erklaerung": "„jede Woche\" sagt er über andere Menschen, nicht über sich selbst."
      }
     ]
    },
    {
     "nr": 4,
     "art": "diskussion",
     "aufgaben": [
      {
       "von": "Person 1 — Frau Kılıç, Verkäuferin in einem Modehaus",
       "wer": "Frau",
       "text": "Bei uns gibt es einmal im Jahr, immer im Januar, das große Mitarbeitergespräch. Eine halbe Stunde mit der Filialleiterin, und da wird dann alles besprochen, was im ganzen Jahr passiert ist. Das Problem ist: Wenn im März etwas schiefgeht, höre ich das erst im Januar darauf. Dann kann ich doch gar nichts mehr ändern. Ich hätte lieber alle zwei, drei Monate ein kurzes Gespräch, zehn Minuten reichen ja. Hauptsache, ich weiß, wo ich stehe, und zwar nicht erst nach einem Jahr.",
       "loesung": 0,
       "stelle": "Ich hätte lieber alle zwei, drei Monate ein kurzes Gespräch",
       "erklaerung": "Ein Gespräch im Januar ist ihr zu selten. Sie möchte öfter und kürzer sprechen.",
       "frage": "Welche Aussage passt zu Frau Kılıç?",
       "opt": [
        "Ein Gespräch pro Jahr ist zu wenig.",
        "Im Mitarbeitergespräch sollte es nicht ums Gehalt gehen.",
        "Auch die Mitarbeiter sollten ihren Vorgesetzten bewerten dürfen.",
        "Viele Führungskräfte haben nie gelernt, solche Gespräche zu führen.",
        "Mitarbeitergespräche sind reine Zeitverschwendung.",
        "Die Ergebnisse des Gesprächs müssen schriftlich festgehalten werden."
       ],
       "fest": true
      },
      {
       "von": "Person 2 — Herr Wagner, Teamleiter in einem Kundenservice-Center",
       "wer": "Mann",
       "text": "Ich bin vor drei Jahren Teamleiter geworden, weil ich gute Zahlen hatte. Am Telefon war ich gut, ja. Aber dann saß ich auf einmal einer Kollegin gegenüber, die zehn Jahre älter ist als ich, und sollte ihr sagen, dass sie zu oft fehlt. Niemand hatte mir je gezeigt, wie man so ein Gespräch führt. Ich hab rumgestottert, sie war beleidigt, das Gespräch war eine Katastrophe. Inzwischen habe ich ein Seminar dazu gemacht, auf eigenen Wunsch. Ich glaube, so geht es vielen, die plötzlich Chef werden.",
       "loesung": 3,
       "stelle": "Niemand hatte mir je gezeigt, wie man so ein Gespräch führt",
       "erklaerung": "Das Gespräch war schlecht, aber nicht sinnlos. Das Problem war seine fehlende Schulung.",
       "frage": "Welche Aussage passt zu Herr Wagner?",
       "opt": [
        "Ein Gespräch pro Jahr ist zu wenig.",
        "Im Mitarbeitergespräch sollte es nicht ums Gehalt gehen.",
        "Auch die Mitarbeiter sollten ihren Vorgesetzten bewerten dürfen.",
        "Viele Führungskräfte haben nie gelernt, solche Gespräche zu führen.",
        "Mitarbeitergespräche sind reine Zeitverschwendung.",
        "Die Ergebnisse des Gesprächs müssen schriftlich festgehalten werden."
       ],
       "fest": true
      },
      {
       "von": "Person 3 — Frau Engel, Geschäftsführerin eines Ingenieurbüros",
       "wer": "Frau",
       "text": "Wir machen die Gespräche bei uns seit letztem Jahr in beide Richtungen. Erst sage ich, wie ich die Arbeit meines Mitarbeiters sehe, und dann sagt er mir, was ich besser machen könnte. Am Anfang hat sich keiner getraut, da kam nur: alles super, Frau Engel. Inzwischen bekomme ich ehrliche Antworten. Zum Beispiel, dass ich Aufgaben oft zu spät verteile oder in Besprechungen zu viel rede. Das ist nicht immer angenehm. Aber ich lerne daraus mehr als aus jedem Führungsseminar. Und die Leute merken, dass ihre Meinung zählt.",
       "loesung": 2,
       "stelle": "und dann sagt er mir, was ich besser machen könnte",
       "erklaerung": "Das Führungsseminar ist nur ein Vergleich. Bei ihr bewerten die Mitarbeiter auch die Chefin.",
       "frage": "Welche Aussage passt zu Frau Engel?",
       "opt": [
        "Ein Gespräch pro Jahr ist zu wenig.",
        "Im Mitarbeitergespräch sollte es nicht ums Gehalt gehen.",
        "Auch die Mitarbeiter sollten ihren Vorgesetzten bewerten dürfen.",
        "Viele Führungskräfte haben nie gelernt, solche Gespräche zu führen.",
        "Mitarbeitergespräche sind reine Zeitverschwendung.",
        "Die Ergebnisse des Gesprächs müssen schriftlich festgehalten werden."
       ],
       "fest": true
      }
     ]
    }
   ]
  }
 ]
};
