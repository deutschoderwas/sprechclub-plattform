/* ============================================================
   deutschoderwas club — HÖREN telc Deutsch A2·B1

   Aufbau nach dem offiziellen telc-Format (Übungstest 1 Deutsch
   A2·B1, geprüft 02.11.2026). Ergebnis der Prüfung ist A2 oder B1.
   Alle Texte und Aufgaben eigene, nur das Format ist nachgebaut.
   Erzeugt aus scratchpad/telca2b1 mit bau.js.
   ============================================================ */

window.HOEREN_TELC_A2B1 = {
 "niveau": "telcA2B1",
 "pruefung": "telc Deutsch A2·B1",
 "minuten": 35,
 "punkte": 25,
 "intro": "Der Hören-Teil bei telc A2·B1 hat fünf Teile, etwa fünfunddreißig Minuten: ein Alltagsgespräch, ein Gespräch im Beruf, kurze Ansagen, Meinungen — und am Ende Nachrichten auf dem Anrufbeantworter, aus denen du eine Telefonnotiz ergänzt. Manche Texte hörst du zweimal, manche nur einmal. Nach jeder Antwort siehst du den Text mit der entscheidenden Stelle.",
 "stufen": [
  {
   "nr": 1,
   "titel": "Zuordnen und notieren",
   "zeichen": "👂",
   "was": "Wer sagt was — und Zahlen, Zeiten, Namen richtig aufschreiben."
  },
  {
   "nr": 2,
   "titel": "Einmal hören",
   "zeichen": "⚡",
   "was": "Gespräche im Beruf und Meinungen beim ersten Mal verstehen."
  },
  {
   "nr": 3,
   "titel": "Die Aufgabentypen",
   "zeichen": "🎯",
   "was": "Alle fünf Teile einzeln."
  },
  {
   "nr": 4,
   "titel": "Die ganze Prüfung",
   "zeichen": "⏱️",
   "was": "25 Aufgaben am Stück, etwa fünfunddreißig Minuten."
  }
 ],
 "bloecke": [
  {
   "id": "tah1",
   "stufe": 1,
   "titel": "Wer sagt was? Personen und Dinge zuordnen",
   "kurz": "Viele Namen in kurzer Zeit — hör genau, wer was macht.",
   "ziel": "Nach diesem Block ordnest du Personen und Aufgaben richtig zu, auch wenn mehrere Namen fallen.",
   "zeichen": "👥",
   "farbe": "turq",
   "mal": 2,
   "aufgaben": [
    {
     "art": "hoerwahl",
     "ort": "Gespräch in der Familie",
     "wer": "Frau",
     "text": "Also, morgen machen wir es so: Ich bringe die Kinder zur Schule. Abholen kann ich sie aber nicht, ich habe bis vier Uhr Dienst. Das macht Oma, die freut sich schon.",
     "frage": "Wer holt die Kinder morgen ab?",
     "opt": [
      "Die Frau.",
      "Die Oma.",
      "Der Vater."
     ],
     "loesung": 1,
     "stelle": "Das macht Oma",
     "erklaerung": "Die Frau bringt die Kinder nur hin. Abholen macht die Oma."
    },
    {
     "art": "hoerwahl",
     "ort": "Gespräch unter Kollegen",
     "wer": "Mann",
     "text": "Für die Feier am Freitag ist fast alles klar. Jana bringt Salate mit, Herr Öztürk kümmert sich um die Getränke, und ich besorge die Musik. Nur den Kuchen hat noch keiner übernommen.",
     "frage": "Was macht Herr Öztürk?",
     "opt": [
      "Er kümmert sich um die Getränke.",
      "Er bringt Salate mit.",
      "Er backt einen Kuchen."
     ],
     "loesung": 0,
     "stelle": "Herr Öztürk kümmert sich um die Getränke",
     "erklaerung": "Salate bringt Jana. Den Kuchen macht noch niemand."
    },
    {
     "art": "hoerwahl",
     "ort": "Gespräch unter Nachbarn",
     "wer": "Frau",
     "text": "Den Schlüssel für meine Wohnung habe ich nicht Herrn Lang gegeben, der ist ja selbst im Urlaub. Frau Demir aus dem dritten Stock gießt die Blumen, sie hat ihn jetzt.",
     "frage": "Wer hat den Schlüssel?",
     "opt": [
      "Herr Lang.",
      "Die Frau selbst.",
      "Frau Demir."
     ],
     "loesung": 2,
     "stelle": "Frau Demir aus dem dritten Stock gießt die Blumen",
     "erklaerung": "Herr Lang ist im Urlaub. Der Schlüssel ist bei Frau Demir."
    },
    {
     "art": "hoerwahl",
     "ort": "Gespräch beim Einkaufen",
     "wer": "Mann",
     "text": "Die Tomaten sind für meine Frau, die macht heute Abend eine Soße. Der Käse ist für mich, und die Schokolade, na ja, die ist eigentlich für die Kinder, aber die esse ich wahrscheinlich selbst.",
     "frage": "Für wen sind die Tomaten?",
     "opt": [
      "Für die Kinder.",
      "Für seine Frau.",
      "Für ihn selbst."
     ],
     "loesung": 1,
     "stelle": "Die Tomaten sind für meine Frau",
     "erklaerung": "Der Käse ist für ihn, die Schokolade für die Kinder. Die Tomaten sind für die Frau."
    },
    {
     "art": "hoerwahl",
     "ort": "Gespräch in der Familie",
     "wer": "Frau",
     "text": "Dein Bruder hat das Auto am Wochenende. Papa wollte es eigentlich auch, aber er fährt jetzt doch mit dem Zug zu Onkel Frank. Du musst also das Fahrrad nehmen.",
     "frage": "Wer bekommt das Auto am Wochenende?",
     "opt": [
      "Der Vater.",
      "Onkel Frank.",
      "Der Bruder."
     ],
     "loesung": 2,
     "stelle": "Dein Bruder hat das Auto am Wochenende.",
     "erklaerung": "Papa wollte das Auto „eigentlich\", fährt aber mit dem Zug."
    },
    {
     "art": "hoerwahl",
     "ort": "Gespräch in der Firma",
     "wer": "Mann",
     "text": "Ihre Frage zum Urlaub kann ich leider nicht beantworten. Das entscheidet auch nicht Frau Kurz, obwohl sie die Pläne schreibt. Dafür müssen Sie direkt zum Abteilungsleiter, zu Herrn Vogt.",
     "frage": "Wer entscheidet über den Urlaub?",
     "opt": [
      "Herr Vogt.",
      "Frau Kurz.",
      "Der Mann selbst."
     ],
     "loesung": 0,
     "stelle": "Dafür müssen Sie direkt zum Abteilungsleiter, zu Herrn Vogt.",
     "erklaerung": "Frau Kurz schreibt nur die Pläne. Entscheiden darf der Abteilungsleiter."
    },
    {
     "art": "hoerwahl",
     "ort": "Gespräch unter Freundinnen",
     "wer": "Frau",
     "text": "Das Geschenk für Lisa? Das Buch habe ich besorgt, und Sarah hat die Karte geschrieben. Bezahlt haben wir es aber alle zusammen, jede zwölf Euro.",
     "frage": "Wer hat das Buch gekauft?",
     "opt": [
      "Sarah.",
      "Die Frau.",
      "Lisa."
     ],
     "loesung": 1,
     "stelle": "Das Buch habe ich besorgt",
     "erklaerung": "„ich\" ist die Frau selbst. Sarah hat nur die Karte geschrieben."
    },
    {
     "art": "hoerwahl",
     "ort": "Gespräch in der WG",
     "wer": "Mann",
     "text": "Ab nächster Woche gibt es einen neuen Plan. Ich mache die Küche, Tom bringt den Müll raus, und Nadia putzt das Bad. Das Bad war bis jetzt immer meine Aufgabe, darum bin ich echt froh.",
     "frage": "Wer putzt ab nächster Woche das Bad?",
     "opt": [
      "Der Mann.",
      "Tom.",
      "Nadia."
     ],
     "loesung": 2,
     "stelle": "Nadia putzt das Bad",
     "erklaerung": "Der Mann hat das Bad „bis jetzt\" geputzt. Im neuen Plan macht es Nadia."
    },
    {
     "art": "hoerwahl",
     "ort": "Gespräch beim Arzt",
     "wer": "Frau",
     "text": "Die Tabletten gegen die Schmerzen nehmen Sie morgens und abends. Die Tropfen sind aber nicht für Sie, die sind für Ihre Tochter, gegen den Husten.",
     "frage": "Für wen sind die Tropfen?",
     "opt": [
      "Für die Tochter.",
      "Für den Patienten selbst.",
      "Für den Sohn."
     ],
     "loesung": 0,
     "stelle": "die sind für Ihre Tochter",
     "erklaerung": "Die Tabletten sind für den Patienten, die Tropfen für die Tochter."
    },
    {
     "art": "hoerwahl",
     "ort": "Gespräch im Sportverein",
     "wer": "Mann",
     "text": "Das Training am Dienstag leitet diese Woche nicht Markus, der ist krank. Ich mache es auch nicht, ich habe einen Termin. Aber Petra hat gesagt, sie springt gern ein.",
     "frage": "Wer leitet das Training am Dienstag?",
     "opt": [
      "Markus.",
      "Petra.",
      "Der Mann."
     ],
     "loesung": 1,
     "stelle": "sie springt gern ein",
     "erklaerung": "„einspringen\" heißt: für jemanden die Aufgabe übernehmen. Petra leitet das Training."
    }
   ]
  },
  {
   "id": "tah2",
   "stufe": 1,
   "titel": "Zahlen, Zeiten, Namen notieren",
   "kurz": "Fünfzehn oder fünfzig? Halb drei oder drei Uhr dreißig? Genau hinhören.",
   "ziel": "Nach diesem Block notierst du Uhrzeiten, Preise, Nummern und Namen richtig — auch wenn sie ähnlich klingen.",
   "zeichen": "🔢",
   "farbe": "gold",
   "mal": 2,
   "aufgaben": [
    {
     "art": "hoerwahl",
     "ort": "Anrufbeantworter — Arztpraxis",
     "wer": "Frau",
     "text": "Ihr Termin ist am Mittwoch um vierzehn Uhr fünfzig. Bitte kommen Sie zehn Minuten früher, wir brauchen noch Ihre Versichertenkarte.",
     "frage": "Wann ist der Termin?",
     "opt": [
      "14:15 Uhr",
      "14:50 Uhr",
      "15:40 Uhr"
     ],
     "loesung": 1,
     "stelle": "um vierzehn Uhr fünfzig",
     "erklaerung": "Fünfzig, nicht fünfzehn. Achte auf das Ende: „-zig\" oder „-zehn\"."
    },
    {
     "art": "hoerwahl",
     "ort": "Durchsage im Supermarkt",
     "wer": "Mann",
     "text": "Heute im Angebot: Kaffee, das Pfund für nur sechs Euro neunzig. Das sind fast zwei Euro weniger als sonst.",
     "frage": "Wie viel kostet der Kaffee heute?",
     "opt": [
      "6,90 €",
      "9,60 €",
      "6,19 €"
     ],
     "loesung": 0,
     "stelle": "für nur sechs Euro neunzig",
     "erklaerung": "Erst die Euro, dann die Cent: sechs Euro neunzig."
    },
    {
     "art": "hoerwahl",
     "ort": "Telefongespräch",
     "wer": "Frau",
     "text": "Meine neue Nummer? Also: null eins sieben sechs, dreiundvierzig, achtundsechzig, zwölf.",
     "frage": "Wie ist die Nummer?",
     "opt": [
      "0176 34 86 12",
      "0167 43 68 12",
      "0176 43 68 12"
     ],
     "loesung": 2,
     "stelle": "null eins sieben sechs, dreiundvierzig",
     "erklaerung": "Im Deutschen kommt die Einerstelle zuerst: dreiundvierzig ist dreiundvierzig, nicht vierunddreißig."
    },
    {
     "art": "hoerwahl",
     "ort": "Anmeldung im Kurs",
     "wer": "Mann",
     "text": "Mein Name ist Wrobel. Das schreibt man W, R, O, B, E, L. Und der Vorname ist Adam, ganz einfach.",
     "frage": "Wie schreibt man den Familiennamen?",
     "opt": [
      "Wobrel",
      "Wrobel",
      "Robel"
     ],
     "loesung": 1,
     "stelle": "W, R, O, B, E, L",
     "erklaerung": "Beim Buchstabieren jeden Buchstaben einzeln mitschreiben."
    },
    {
     "art": "hoerwahl",
     "ort": "Bahnhofsdurchsage",
     "wer": "Frau",
     "text": "Achtung, bitte: Der Intercity nach Hamburg fährt heute von Gleis siebzehn, nicht von Gleis sieben.",
     "frage": "Von welchem Gleis fährt der Zug?",
     "opt": [
      "Gleis 7",
      "Gleis 70",
      "Gleis 17"
     ],
     "loesung": 2,
     "stelle": "von Gleis siebzehn, nicht von Gleis sieben",
     "erklaerung": "Gleis sieben wird ausdrücklich ausgeschlossen. Richtig ist siebzehn."
    },
    {
     "art": "hoerwahl",
     "ort": "Anrufbeantworter — Hausverwaltung",
     "wer": "Mann",
     "text": "Die Wohnung, die Sie besichtigen möchten, liegt in der Goethestraße achtunddreißig, im vierten Stock.",
     "frage": "Welche Hausnummer hat die Wohnung?",
     "opt": [
      "38",
      "83",
      "28"
     ],
     "loesung": 0,
     "stelle": "Goethestraße achtunddreißig",
     "erklaerung": "Acht-und-dreißig: zuerst die Acht hören, aber die Dreißig zuerst schreiben."
    },
    {
     "art": "hoerwahl",
     "ort": "Gespräch im Büro",
     "wer": "Frau",
     "text": "Die Besprechung ist nicht mehr am dreizehnten. Die haben wir auf den dreißigsten verschoben.",
     "frage": "Wann ist die Besprechung?",
     "opt": [
      "Am 13.",
      "Am 30.",
      "Am 3."
     ],
     "loesung": 1,
     "stelle": "auf den dreißigsten verschoben",
     "erklaerung": "„nicht mehr am dreizehnten\" — gilt nur der neue Termin: der dreißigste."
    },
    {
     "art": "hoerwahl",
     "ort": "Radio — Veranstaltungstipp",
     "wer": "Mann",
     "text": "Und noch ein Tipp für das Wochenende: Das Stadtfest beginnt am Samstag um halb drei auf dem Marktplatz.",
     "frage": "Wann beginnt das Stadtfest?",
     "opt": [
      "14:30 Uhr",
      "15:30 Uhr",
      "13:30 Uhr"
     ],
     "loesung": 0,
     "stelle": "um halb drei",
     "erklaerung": "„halb drei\" heißt: eine halbe Stunde vor drei, also vierzehn Uhr dreißig."
    },
    {
     "art": "hoerwahl",
     "ort": "Telefongespräch — Bestellung",
     "wer": "Frau",
     "text": "Ich wiederhole Ihre Bestellung: Sie bekommen also vierzig Stühle und vierzehn Tische, richtig?",
     "frage": "Wie viele Tische werden bestellt?",
     "opt": [
      "40",
      "4",
      "14"
     ],
     "loesung": 2,
     "stelle": "vierzig Stühle und vierzehn Tische",
     "erklaerung": "Vierzig sind die Stühle. Tische: vierzehn."
    },
    {
     "art": "hoerwahl",
     "ort": "Anrufbeantworter — Werkstatt",
     "wer": "Mann",
     "text": "Gute Nachricht: Die Reparatur ist günstiger als gedacht. Nicht hundertachtzig Euro, sondern nur hundertachtzehn Euro.",
     "frage": "Was kostet die Reparatur?",
     "opt": [
      "180 €",
      "118 €",
      "108 €"
     ],
     "loesung": 1,
     "stelle": "sondern nur hundertachtzehn Euro",
     "erklaerung": "Hundertachtzig wird korrigiert. Nach „sondern\" kommt der richtige Preis."
    }
   ]
  },
  {
   "id": "tah3",
   "stufe": 2,
   "titel": "Einmal hören: das Gespräch im Beruf",
   "kurz": "Pläne ändern sich: eigentlich, aber, nicht … sondern. Nur einmal hören!",
   "ziel": "Nach diesem Block verstehst du bei einmaligem Hören, was im Arbeitsgespräch am Ende wirklich gilt.",
   "zeichen": "💼",
   "farbe": "rot",
   "mal": 1,
   "aufgaben": [
    {
     "art": "hoerwahl",
     "ort": "Gespräch mit der Chefin",
     "wer": "Frau",
     "text": "Sie fangen am ersten Tag nicht hier im Büro an, sondern sind zuerst zwei Tage in unserem Lager. Dort lernen Sie die Produkte kennen. Danach kommen Sie zu uns ins Team.",
     "frage": "Wo arbeitet der neue Mitarbeiter in den ersten Tagen?",
     "opt": [
      "Im Büro.",
      "Im Lager.",
      "Im Team von der Chefin."
     ],
     "loesung": 1,
     "stelle": "sondern sind zuerst zwei Tage in unserem Lager",
     "erklaerung": "Ins Büro und ins Team kommt er erst danach."
    },
    {
     "art": "hoerwahl",
     "ort": "Gespräch unter Kollegen",
     "wer": "Mann",
     "text": "Den Bericht muss ich eigentlich bis Freitag abgeben. Aber Frau Schulze hat gesagt, Montag reicht auch, sie liest ihn sowieso erst nächste Woche.",
     "frage": "Bis wann muss der Mann den Bericht abgeben?",
     "opt": [
      "Bis Montag.",
      "Bis Freitag.",
      "Bis Ende nächster Woche."
     ],
     "loesung": 0,
     "stelle": "Montag reicht auch",
     "erklaerung": "„eigentlich Freitag\" — aber die Chefin erlaubt Montag."
    },
    {
     "art": "hoerwahl",
     "ort": "Gespräch in der Personalabteilung",
     "wer": "Frau",
     "text": "Ihre Überstunden können Sie sich leider nicht auszahlen lassen. Aber Sie dürfen sie als freie Tage nehmen, am besten noch vor dem Sommer.",
     "frage": "Was passiert mit den Überstunden?",
     "opt": [
      "Er bekommt dafür Geld.",
      "Sie verfallen im Sommer.",
      "Er bekommt dafür freie Tage."
     ],
     "loesung": 2,
     "stelle": "Sie dürfen sie als freie Tage nehmen",
     "erklaerung": "Auszahlen geht nicht. Er bekommt freie Tage, „vor dem Sommer\" ist nur ein Rat."
    },
    {
     "art": "hoerwahl",
     "ort": "Gespräch mit dem Teamleiter",
     "wer": "Mann",
     "text": "Die Schulung findet statt, aber nicht online, wie zuerst geplant. Der Trainer kommt zu uns ins Haus, in den großen Besprechungsraum.",
     "frage": "Wie findet die Schulung statt?",
     "opt": [
      "Online.",
      "In der Firma.",
      "Sie fällt aus."
     ],
     "loesung": 1,
     "stelle": "Der Trainer kommt zu uns ins Haus",
     "erklaerung": "„zu uns ins Haus\" bedeutet: in der Firma, nicht online."
    },
    {
     "art": "hoerwahl",
     "ort": "Gespräch am ersten Arbeitstag",
     "wer": "Frau",
     "text": "Mittagspause machen wir meistens zusammen um zwölf. In die Kantine gehen wir aber selten, die ist ziemlich teuer. Wir bringen uns lieber etwas von zu Hause mit.",
     "frage": "Was essen die Kollegen meistens?",
     "opt": [
      "Essen aus der Kantine.",
      "Essen aus dem Restaurant.",
      "Essen, das sie mitbringen."
     ],
     "loesung": 2,
     "stelle": "Wir bringen uns lieber etwas von zu Hause mit.",
     "erklaerung": "Die Kantine wird genannt, aber „selten\". Meistens bringen sie Essen mit."
    },
    {
     "art": "hoerwahl",
     "ort": "Gespräch unter Kollegen",
     "wer": "Mann",
     "text": "Ich wollte eigentlich nächste Woche Urlaub machen. Aber Thomas ist krank, und jemand muss die Kunden betreuen. Ich verschiebe den Urlaub auf den Herbst.",
     "frage": "Was macht der Mann nächste Woche?",
     "opt": [
      "Er arbeitet.",
      "Er macht Urlaub.",
      "Er ist krank."
     ],
     "loesung": 0,
     "stelle": "Ich verschiebe den Urlaub auf den Herbst.",
     "erklaerung": "Krank ist Thomas. Der Mann arbeitet und macht später Urlaub."
    },
    {
     "art": "hoerwahl",
     "ort": "Gespräch mit der Chefin",
     "wer": "Frau",
     "text": "Ihre Probezeit ist bald vorbei, und wir sind sehr zufrieden mit Ihnen. Nur bei den Gesprächen mit Kunden am Telefon möchte ich, dass Sie noch etwas freundlicher werden.",
     "frage": "Was soll die Person noch verbessern?",
     "opt": [
      "Ihre Pünktlichkeit.",
      "Ihre Telefongespräche mit Kunden.",
      "Ihre Arbeit im Team."
     ],
     "loesung": 1,
     "stelle": "Nur bei den Gesprächen mit Kunden am Telefon",
     "erklaerung": "„sehr zufrieden\" — „nur\" leitet die eine Kritik ein."
    },
    {
     "art": "hoerwahl",
     "ort": "Gespräch am Empfang",
     "wer": "Mann",
     "text": "Herr Winter ist im Moment noch in einer Besprechung, die dauert etwa eine halbe Stunde. Sie können gern hier warten oder unten in der Cafeteria einen Kaffee trinken.",
     "frage": "Was kann der Besucher tun?",
     "opt": [
      "Sofort zu Herrn Winter gehen.",
      "Später noch einmal anrufen.",
      "Warten oder in die Cafeteria gehen."
     ],
     "loesung": 2,
     "stelle": "Sie können gern hier warten oder unten in der Cafeteria",
     "erklaerung": "Herr Winter hat noch keine Zeit. Der Besucher kann warten oder Kaffee trinken."
    },
    {
     "art": "hoerwahl",
     "ort": "Gespräch unter Kolleginnen",
     "wer": "Frau",
     "text": "Der Drucker im zweiten Stock geht schon wieder nicht. Ich habe den Techniker angerufen, aber er kommt erst morgen. Bis dahin drucken wir alle unten im Erdgeschoss.",
     "frage": "Wo drucken die Kollegen heute?",
     "opt": [
      "Im Erdgeschoss.",
      "Im zweiten Stock.",
      "Gar nicht."
     ],
     "loesung": 0,
     "stelle": "Bis dahin drucken wir alle unten im Erdgeschoss.",
     "erklaerung": "Der Drucker im zweiten Stock ist kaputt. Gedruckt wird im Erdgeschoss."
    },
    {
     "art": "hoerwahl",
     "ort": "Gespräch mit dem Chef",
     "wer": "Mann",
     "text": "Ab März suchen wir jemanden, der auch samstags arbeiten kann. Dafür haben Sie dann am Montag frei. Mehr Geld gibt es leider nicht, die Stunden bleiben ja gleich.",
     "frage": "Was bekommt man für die Arbeit am Samstag?",
     "opt": [
      "Mehr Geld.",
      "Einen freien Montag.",
      "Mehr Urlaub."
     ],
     "loesung": 1,
     "stelle": "Dafür haben Sie dann am Montag frei.",
     "erklaerung": "„Dafür\" zeigt den Ausgleich: der freie Montag. Mehr Geld gibt es nicht."
    }
   ]
  },
  {
   "id": "tah4",
   "stufe": 2,
   "titel": "Meinungen verstehen",
   "kurz": "Einmal hören und die Haltung zusammenfassen — wie in Teil 4.",
   "ziel": "Nach diesem Block erkennst du bei einmaligem Hören die Meinung einer Person und findest die passende Zusammenfassung.",
   "zeichen": "💬",
   "farbe": "lila",
   "mal": 1,
   "aufgaben": [
    {
     "art": "hoerwahl",
     "ort": "Thema: Wohnen in einer WG",
     "wer": "Frau",
     "text": "Viele denken, eine WG ist nur etwas für Studenten. Ich bin vierzig und wohne mit drei Leuten zusammen. Ich spare Geld, und ich bin nie allein. Für mich ist das perfekt.",
     "frage": "Was denkt die Frau über die WG?",
     "opt": [
      "Eine WG passt nur zu jungen Leuten.",
      "Sie lebt sehr gern in einer WG.",
      "Sie möchte bald allein wohnen."
     ],
     "loesung": 1,
     "stelle": "Für mich ist das perfekt.",
     "erklaerung": "„Viele denken\" ist nicht ihre Meinung. Sie selbst findet die WG perfekt."
    },
    {
     "art": "hoerwahl",
     "ort": "Thema: Fernsehen",
     "wer": "Mann",
     "text": "Ich habe seit Jahren keinen Fernseher mehr. Filme und Nachrichten schaue ich aber trotzdem, eben auf dem Laptop, wann ich will.",
     "frage": "Was sagt der Mann?",
     "opt": [
      "Er schaut Filme, aber nicht im Fernsehen.",
      "Er schaut gar keine Filme mehr.",
      "Er möchte einen neuen Fernseher."
     ],
     "loesung": 0,
     "stelle": "eben auf dem Laptop, wann ich will",
     "erklaerung": "Kein Fernseher heißt nicht: keine Filme. „trotzdem\" zeigt das."
    },
    {
     "art": "hoerwahl",
     "ort": "Thema: Haustiere in der Stadt",
     "wer": "Frau",
     "text": "Ich liebe Hunde, wirklich. Aber in einer kleinen Wohnung ohne Garten, und wenn man den ganzen Tag arbeitet? Das ist für das Tier nicht fair. Deshalb habe ich keinen.",
     "frage": "Warum hat die Frau keinen Hund?",
     "opt": [
      "Sie mag keine Hunde.",
      "Der Vermieter erlaubt es nicht.",
      "Es würde dem Hund bei ihr nicht gut gehen."
     ],
     "loesung": 2,
     "stelle": "Das ist für das Tier nicht fair.",
     "erklaerung": "Sie liebt Hunde, denkt aber an das Tier: wenig Platz, wenig Zeit."
    },
    {
     "art": "hoerwahl",
     "ort": "Thema: Ehrenamt",
     "wer": "Mann",
     "text": "Ich helfe jeden Samstag im Seniorenheim. Das kostet Zeit, klar. Aber ich bekomme so viel zurück, das kann man mit Geld gar nicht bezahlen.",
     "frage": "Wie findet der Mann sein Ehrenamt?",
     "opt": [
      "Zu anstrengend.",
      "Es gibt ihm viel.",
      "Er möchte dafür Geld."
     ],
     "loesung": 1,
     "stelle": "Aber ich bekomme so viel zurück",
     "erklaerung": "„Das kostet Zeit\" ist nur ein kleiner Nachteil. Nach „Aber\" kommt seine Meinung."
    },
    {
     "art": "hoerwahl",
     "ort": "Thema: Arbeitszeiten",
     "wer": "Frau",
     "text": "Gleitzeit klingt toll, aber bei mir hat das nicht funktioniert. Ich habe immer länger gearbeitet. Mit festen Zeiten weiß ich wenigstens, wann Schluss ist.",
     "frage": "Was ist der Frau lieber?",
     "opt": [
      "Gleitzeit.",
      "Mehr Überstunden.",
      "Feste Arbeitszeiten."
     ],
     "loesung": 2,
     "stelle": "Mit festen Zeiten weiß ich wenigstens, wann Schluss ist.",
     "erklaerung": "„klingt toll, aber\" — für sie selbst sind feste Zeiten besser."
    },
    {
     "art": "hoerwahl",
     "ort": "Thema: Bargeld oder Karte",
     "wer": "Mann",
     "text": "Mit Karte zahle ich nur, wenn es nicht anders geht. Mit Bargeld sehe ich einfach besser, wie viel ich ausgebe.",
     "frage": "Wie bezahlt der Mann am liebsten?",
     "opt": [
      "Bar.",
      "Mit Karte.",
      "Mit dem Handy."
     ],
     "loesung": 0,
     "stelle": "Mit Bargeld sehe ich einfach besser",
     "erklaerung": "Die Karte nimmt er nur, „wenn es nicht anders geht\"."
    },
    {
     "art": "hoerwahl",
     "ort": "Thema: Leben im Dorf",
     "wer": "Frau",
     "text": "Im Dorf kennt jeder jeden. Als Kind fand ich das schrecklich. Heute, mit eigenen Kindern, finde ich genau das schön.",
     "frage": "Wie findet die Frau das Dorfleben heute?",
     "opt": [
      "Schrecklich.",
      "Positiv.",
      "Langweilig."
     ],
     "loesung": 1,
     "stelle": "finde ich genau das schön",
     "erklaerung": "„Als Kind\" und „Heute\" — gefragt ist die Meinung von heute."
    },
    {
     "art": "hoerwahl",
     "ort": "Thema: Fertiggerichte",
     "wer": "Mann",
     "text": "Fertiggerichte? Na ja, unter der Woche schon mal, wenn es schnell gehen muss. Aber am Wochenende kochen wir immer frisch, zusammen mit den Kindern.",
     "frage": "Was sagt der Mann über Fertiggerichte?",
     "opt": [
      "Er isst sie nie.",
      "Er isst sie jeden Tag.",
      "Er isst sie manchmal, wenn er wenig Zeit hat."
     ],
     "loesung": 2,
     "stelle": "unter der Woche schon mal, wenn es schnell gehen muss",
     "erklaerung": "„schon mal\" heißt: manchmal. Am Wochenende kocht die Familie frisch."
    },
    {
     "art": "hoerwahl",
     "ort": "Thema: Weiterbildung",
     "wer": "Frau",
     "text": "Meine Firma bezahlt mir einen Kurs am Abend. Natürlich bin ich nach der Arbeit oft müde, aber ich will unbedingt weiterkommen. Das ist es mir wert.",
     "frage": "Wie findet die Frau den Kurs?",
     "opt": [
      "Anstrengend, aber sinnvoll.",
      "Zu teuer.",
      "Unnötig."
     ],
     "loesung": 0,
     "stelle": "Das ist es mir wert.",
     "erklaerung": "Müde ja, aber „es ist es mir wert\". Teuer ist er für sie nicht, die Firma zahlt."
    },
    {
     "art": "hoerwahl",
     "ort": "Thema: Sport",
     "wer": "Mann",
     "text": "Ich habe zwei Jahre für das Fitnessstudio bezahlt und war vielleicht zehnmal dort. Jetzt gehe ich lieber mit Freunden joggen. Das kostet nichts, und ich mache es wirklich.",
     "frage": "Warum geht der Mann lieber joggen?",
     "opt": [
      "Das Fitnessstudio war ihm zu voll.",
      "Mit Freunden macht er wirklich regelmäßig Sport.",
      "Er hat keine Zeit mehr für Sport."
     ],
     "loesung": 1,
     "stelle": "und ich mache es wirklich",
     "erklaerung": "Ins Studio ist er kaum gegangen. Mit Freunden bleibt er dabei."
    }
   ]
  }
 ],
 "teile": [
  {
   "nr": 1,
   "art": "gespraech",
   "name": "Hören: Alltagsgespräch",
   "kurz": "Ein Gespräch, fünf Zuordnungen — zweimal hören",
   "was": "Du hörst ein Alltagsgespräch in Abschnitten und ordnest zu: Wer bringt was mit, wer macht was, an welchem Tag?",
   "tipp": "Pläne ändern sich im Gespräch: „Erst wollte sie …, aber jetzt …\" Das Letzte zählt.",
   "zeichen": "💬",
   "farbe": "turq",
   "punkte": 5,
   "mal": 2,
   "runden": [
    {
     "id": "a2b1ah1s1",
     "titel": "Wer bringt was zum Grillfest mit?",
     "aufgaben": [
      {
       "ort": "Gespräch — Abschnitt 1",
       "zeilen": [
        {
         "wer": "Frau",
         "text": "Hallo Jonas! Hast du schon mit allen wegen Samstag gesprochen?"
        },
        {
         "wer": "Mann",
         "text": "Ja, fast mit allen. Katja wollte zuerst einen Kuchen backen. Aber am Freitag hat sie keine Zeit. Jetzt macht sie einen großen Nudelsalat."
        }
       ],
       "frage": "Was bringt Katja mit?",
       "loesung": 0,
       "stelle": "Jetzt macht sie einen großen Nudelsalat.",
       "erklaerung": "Der Kuchen war nur der erste Plan. Jetzt macht Katja einen Salat.",
       "opt": [
        "Salat",
        "Würstchen",
        "Getränke",
        "Kuchen",
        "Brot",
        "Grillkohle",
        "Musikbox"
       ],
       "fest": true
      },
      {
       "ort": "Gespräch — Abschnitt 2",
       "zeilen": [
        {
         "wer": "Frau",
         "text": "Und Murat? Er hat doch ein Auto."
        },
        {
         "wer": "Mann",
         "text": "Genau, deshalb holt er die Getränke. Wasser, Saft und ein paar Flaschen Bier. Er wollte auch noch die Würstchen kaufen, aber das ist zu viel für einen allein."
        }
       ],
       "frage": "Was bringt Murat mit?",
       "loesung": 2,
       "stelle": "deshalb holt er die Getränke",
       "erklaerung": "Murat hat ein Auto und holt die Getränke. Die Würstchen sind ihm zu viel.",
       "opt": [
        "Salat",
        "Würstchen",
        "Getränke",
        "Kuchen",
        "Brot",
        "Grillkohle",
        "Musikbox"
       ],
       "fest": true
      },
      {
       "ort": "Gespräch — Abschnitt 3",
       "zeilen": [
        {
         "wer": "Frau",
         "text": "Dann kaufe ich die Würstchen, oder?"
        },
        {
         "wer": "Mann",
         "text": "Nein, warte. Elena hat zuerst gesagt, sie bringt Brot mit. Aber heute Morgen hat sie mir geschrieben: Ihr Bruder arbeitet in einer Metzgerei und bekommt die Würstchen billiger. Also bringt sie die Würstchen."
        }
       ],
       "frage": "Was bringt Elena mit?",
       "loesung": 1,
       "stelle": "Also bringt sie die Würstchen.",
       "erklaerung": "Erst wollte Elena Brot mitbringen, dann hat sie es geändert: Sie bringt die Würstchen.",
       "opt": [
        "Salat",
        "Würstchen",
        "Getränke",
        "Kuchen",
        "Brot",
        "Grillkohle",
        "Musikbox"
       ],
       "fest": true
      },
      {
       "ort": "Gespräch — Abschnitt 4",
       "zeilen": [
        {
         "wer": "Frau",
         "text": "Super. Und wer kümmert sich um das Brot?"
        },
        {
         "wer": "Mann",
         "text": "Das kann Paul holen. Er wohnt direkt neben der Bäckerei."
        },
        {
         "wer": "Frau",
         "text": "Paul? Der kommt doch erst am Abend. Nein, das Brot bringe ich mit, Jonas. Ich komme sowieso am Markt vorbei."
        },
        {
         "wer": "Mann",
         "text": "Danke, Sabine, das ist lieb."
        }
       ],
       "frage": "Was bringt Sabine mit?",
       "loesung": 4,
       "stelle": "das Brot bringe ich mit",
       "erklaerung": "Jonas schlägt Paul vor, aber Sabine übernimmt das Brot selbst.",
       "opt": [
        "Salat",
        "Würstchen",
        "Getränke",
        "Kuchen",
        "Brot",
        "Grillkohle",
        "Musikbox"
       ],
       "fest": true
      },
      {
       "ort": "Gespräch — Abschnitt 5",
       "zeilen": [
        {
         "wer": "Frau",
         "text": "Und was macht Paul dann?"
        },
        {
         "wer": "Mann",
         "text": "Paul bringt seine Musikbox mit, er hat so eine große. Grillkohle brauchen wir nicht, ich habe noch genug im Keller."
        },
        {
         "wer": "Frau",
         "text": "Perfekt. Dann haben wir ja alles."
        }
       ],
       "frage": "Was bringt Paul mit?",
       "loesung": 6,
       "stelle": "Paul bringt seine Musikbox mit",
       "erklaerung": "Paul bringt Musik mit. Die Grillkohle hat Jonas schon im Keller.",
       "opt": [
        "Salat",
        "Würstchen",
        "Getränke",
        "Kuchen",
        "Brot",
        "Grillkohle",
        "Musikbox"
       ],
       "fest": true
      }
     ]
    },
    {
     "id": "a2b1ah1s2",
     "titel": "Was macht Tamara an welchem Tag?",
     "aufgaben": [
      {
       "ort": "Gespräch — Abschnitt 1",
       "zeilen": [
        {
         "wer": "Mann",
         "text": "Tamara, wollen wir diese Woche mal ins Kino gehen? Vielleicht am Montag?"
        },
        {
         "wer": "Frau",
         "text": "Montag geht leider nicht. Da muss ich zum Zahnarzt. Eigentlich war der Termin am Dienstag, aber die Praxis hat ihn auf Montag verschoben."
        }
       ],
       "frage": "Wann geht Tamara zum Zahnarzt?",
       "loesung": 0,
       "stelle": "die Praxis hat ihn auf Montag verschoben",
       "erklaerung": "Der Termin war am Dienstag, jetzt ist er am Montag.",
       "opt": [
        "Montag",
        "Dienstag",
        "Mittwoch",
        "Donnerstag",
        "Freitag",
        "Samstag",
        "Sonntag"
       ],
       "fest": true
      },
      {
       "ort": "Gespräch — Abschnitt 2",
       "zeilen": [
        {
         "wer": "Mann",
         "text": "Und wie ist es mit Donnerstag?"
        },
        {
         "wer": "Frau",
         "text": "Am Donnerstag habe ich doch meinen Deutschkurs. Früher war der Kurs zweimal in der Woche, am Dienstag und am Donnerstag. Seit dieser Woche ist er nur noch am Donnerstag."
        }
       ],
       "frage": "Wann hat Tamara jetzt Deutschkurs?",
       "loesung": 3,
       "stelle": "Seit dieser Woche ist er nur noch am Donnerstag.",
       "erklaerung": "Der Dienstag ist weggefallen. Der Kurs ist jetzt nur noch donnerstags.",
       "opt": [
        "Montag",
        "Dienstag",
        "Mittwoch",
        "Donnerstag",
        "Freitag",
        "Samstag",
        "Sonntag"
       ],
       "fest": true
      },
      {
       "ort": "Gespräch — Abschnitt 3",
       "zeilen": [
        {
         "wer": "Mann",
         "text": "Dann ist der Dienstag ja frei!"
        },
        {
         "wer": "Frau",
         "text": "Leider nicht. Am Dienstag kommt der Handwerker wegen der Heizung. Er kommt irgendwann zwischen acht und zwölf, und danach muss ich die Wohnung aufräumen."
        }
       ],
       "frage": "Wann kommt der Handwerker?",
       "loesung": 1,
       "stelle": "Am Dienstag kommt der Handwerker wegen der Heizung.",
       "erklaerung": "Der Dienstag ist nicht frei: Dann kommt der Handwerker.",
       "opt": [
        "Montag",
        "Dienstag",
        "Mittwoch",
        "Donnerstag",
        "Freitag",
        "Samstag",
        "Sonntag"
       ],
       "fest": true
      },
      {
       "ort": "Gespräch — Abschnitt 4",
       "zeilen": [
        {
         "wer": "Mann",
         "text": "Und am Wochenende?"
        },
        {
         "wer": "Frau",
         "text": "Am Samstag besuche ich meine Mutter. Ich wollte eigentlich bis Sonntag bleiben, aber ich fahre schon am Samstagabend zurück."
        }
       ],
       "frage": "Wann besucht Tamara ihre Mutter?",
       "loesung": 5,
       "stelle": "Am Samstag besuche ich meine Mutter.",
       "erklaerung": "Sie bleibt nicht bis Sonntag. Sie besucht die Mutter nur am Samstag.",
       "opt": [
        "Montag",
        "Dienstag",
        "Mittwoch",
        "Donnerstag",
        "Freitag",
        "Samstag",
        "Sonntag"
       ],
       "fest": true
      },
      {
       "ort": "Gespräch — Abschnitt 5",
       "zeilen": [
        {
         "wer": "Mann",
         "text": "Also dann Sonntag? Oder vielleicht Mittwoch?"
        },
        {
         "wer": "Frau",
         "text": "Sonntag ist schlecht, da möchte ich mich ausruhen. Lass uns Mittwoch nehmen. Da habe ich früh Feierabend."
        },
        {
         "wer": "Mann",
         "text": "Gut, dann Mittwoch um acht. Ich kaufe die Karten."
        }
       ],
       "frage": "Wann gehen die beiden ins Kino?",
       "loesung": 2,
       "stelle": "Lass uns Mittwoch nehmen.",
       "erklaerung": "Sonntag passt nicht, sie nehmen den Mittwoch.",
       "opt": [
        "Montag",
        "Dienstag",
        "Mittwoch",
        "Donnerstag",
        "Freitag",
        "Samstag",
        "Sonntag"
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
   "name": "Hören: Gespräch im Beruf",
   "kurz": "Ein berufliches Gespräch, fünf Aussagen — EINMAL hören",
   "was": "Du hörst ein Gespräch bei der Arbeit, zum Beispiel mit dem Chef oder einem Kunden. Zu jedem Abschnitt eine Aussage: richtig oder falsch? Nur einmal hören.",
   "tipp": "Lies die Aussage, bevor der Abschnitt beginnt — du hast keine zweite Chance.",
   "zeichen": "🏢",
   "farbe": "gold",
   "punkte": 5,
   "mal": 1,
   "runden": [
    {
     "id": "a2b1ah2s1",
     "titel": "Im Supermarkt: Der Chef spricht mit einer Mitarbeiterin über den Schichtplan",
     "aufgaben": [
      {
       "ort": "Gespräch — Abschnitt 1",
       "zeilen": [
        {
         "wer": "Mann",
         "text": "Frau Petrović, haben Sie kurz Zeit? Es geht um den Schichtplan für nächste Woche."
        },
        {
         "wer": "Frau",
         "text": "Ja, natürlich. Ist etwas nicht in Ordnung?"
        },
        {
         "wer": "Mann",
         "text": "Herr Yilmaz ist krank. Er fehlt bestimmt bis Ende der Woche. Könnten Sie am Dienstag die Frühschicht übernehmen?"
        }
       ],
       "satz": "Herr Yilmaz ist nächste Woche im Urlaub.",
       "loesung": false,
       "stelle": "Herr Yilmaz ist krank.",
       "erklaerung": "Herr Yilmaz fehlt, weil er krank ist, nicht wegen Urlaub."
      },
      {
       "ort": "Gespräch — Abschnitt 2",
       "zeilen": [
        {
         "wer": "Frau",
         "text": "Am Dienstag früh? Das ist schwierig. Ich bringe morgens meine Tochter in die Kita, und die öffnet erst um sieben."
        },
        {
         "wer": "Mann",
         "text": "Und wenn Sie um halb acht anfangen und nicht um sechs?"
        },
        {
         "wer": "Frau",
         "text": "Das würde gehen, ja."
        }
       ],
       "satz": "Frau Petrović kann am Dienstag etwas später anfangen.",
       "loesung": true,
       "stelle": "Das würde gehen, ja.",
       "erklaerung": "Um sechs geht es nicht, um halb acht schon."
      },
      {
       "ort": "Gespräch — Abschnitt 3",
       "zeilen": [
        {
         "wer": "Mann",
         "text": "Gut, dann macht Jana die erste Stunde. Und am Samstag? Da haben Sie ja frei."
        },
        {
         "wer": "Frau",
         "text": "Ja, am Samstag hat meine Schwester Geburtstag. Da möchte ich wirklich nicht arbeiten."
        },
        {
         "wer": "Mann",
         "text": "Verstehe. Dann frage ich jemand anderen."
        }
       ],
       "satz": "Frau Petrović arbeitet am Samstag.",
       "loesung": false,
       "stelle": "Da möchte ich wirklich nicht arbeiten.",
       "erklaerung": "Sie hat frei, und der Chef fragt eine andere Person."
      },
      {
       "ort": "Gespräch — Abschnitt 4",
       "zeilen": [
        {
         "wer": "Mann",
         "text": "Noch etwas: Ab nächstem Monat haben wir neue Kassen. Alle müssen eine Schulung machen, am Donnerstag nach Feierabend, ungefähr zwei Stunden."
        },
        {
         "wer": "Frau",
         "text": "Wird die Zeit bezahlt?"
        },
        {
         "wer": "Mann",
         "text": "Ja, natürlich, das ist Arbeitszeit."
        }
       ],
       "satz": "Die Mitarbeiter bekommen die Zeit für die Schulung bezahlt.",
       "loesung": true,
       "stelle": "das ist Arbeitszeit",
       "erklaerung": "Die Schulung zählt als Arbeitszeit, also wird sie bezahlt."
      },
      {
       "ort": "Gespräch — Abschnitt 5",
       "zeilen": [
        {
         "wer": "Frau",
         "text": "Und kann ich die Überstunden später frei nehmen?"
        },
        {
         "wer": "Mann",
         "text": "Ja, schreiben Sie sie einfach in die Liste im Büro. Aber bitte nicht im Dezember, da brauchen wir alle Leute."
        }
       ],
       "satz": "Frau Petrović kann ihre Überstunden im Dezember frei nehmen.",
       "loesung": false,
       "stelle": "Aber bitte nicht im Dezember",
       "erklaerung": "Im Dezember braucht der Supermarkt alle Mitarbeiter."
      }
     ]
    },
    {
     "id": "a2b1ah2s2",
     "titel": "Am Telefon: Eine Kundin ruft in der Autowerkstatt an",
     "aufgaben": [
      {
       "ort": "Gespräch — Abschnitt 1",
       "zeilen": [
        {
         "wer": "Mann",
         "text": "Autowerkstatt Kowalski, guten Tag."
        },
        {
         "wer": "Frau",
         "text": "Guten Tag, hier ist Brandner. Ich habe gestern mein Auto zur Inspektion gebracht. Ist es schon fertig?"
        },
        {
         "wer": "Mann",
         "text": "Moment, Frau Brandner. Ja, die Inspektion ist fertig. Aber wir haben ein Problem an den Bremsen gefunden."
        }
       ],
       "satz": "Die Werkstatt hat bei der Inspektion einen Fehler gefunden.",
       "loesung": true,
       "stelle": "wir haben ein Problem an den Bremsen gefunden",
       "erklaerung": "Die Bremsen haben ein Problem."
      },
      {
       "ort": "Gespräch — Abschnitt 2",
       "zeilen": [
        {
         "wer": "Frau",
         "text": "Oh nein. Ist das teuer?"
        },
        {
         "wer": "Mann",
         "text": "Die vorderen Bremsen müssen neu. Das kostet ungefähr dreihundertzwanzig Euro, mit Arbeit."
        },
        {
         "wer": "Frau",
         "text": "Puh. Das ist mehr, als ich gedacht habe."
        }
       ],
       "satz": "Die Reparatur kostet weniger als dreihundert Euro.",
       "loesung": false,
       "stelle": "ungefähr dreihundertzwanzig Euro",
       "erklaerung": "Die Reparatur kostet etwa dreihundertzwanzig Euro, also mehr als dreihundert."
      },
      {
       "ort": "Gespräch — Abschnitt 3",
       "zeilen": [
        {
         "wer": "Frau",
         "text": "Kann ich damit noch ein paar Wochen fahren?"
        },
        {
         "wer": "Mann",
         "text": "Davon rate ich Ihnen ab. Das ist eine Frage der Sicherheit. Ich würde es noch diese Woche machen."
        }
       ],
       "satz": "Der Mechaniker meint, die Reparatur kann noch warten.",
       "loesung": false,
       "stelle": "Davon rate ich Ihnen ab.",
       "erklaerung": "Er rät ab und will die Bremsen noch diese Woche reparieren."
      },
      {
       "ort": "Gespräch — Abschnitt 4",
       "zeilen": [
        {
         "wer": "Frau",
         "text": "Na gut. Wann ist das Auto dann fertig?"
        },
        {
         "wer": "Mann",
         "text": "Die Teile müssen wir bestellen, sie kommen morgen früh. Morgen Nachmittag ab vier können Sie das Auto abholen."
        }
       ],
       "satz": "Frau Brandner kann ihr Auto morgen abholen.",
       "loesung": true,
       "stelle": "Morgen Nachmittag ab vier können Sie das Auto abholen.",
       "erklaerung": "Die Teile kommen morgen früh, am Nachmittag ist das Auto fertig."
      },
      {
       "ort": "Gespräch — Abschnitt 5",
       "zeilen": [
        {
         "wer": "Frau",
         "text": "Aber ich brauche das Auto morgen früh für die Arbeit."
        },
        {
         "wer": "Mann",
         "text": "Kein Problem, wir haben einen Ersatzwagen. Der kostet Sie nichts, Sie bezahlen nur das Benzin."
        },
        {
         "wer": "Frau",
         "text": "Das ist toll, den nehme ich."
        }
       ],
       "satz": "Für den Ersatzwagen muss Frau Brandner eine Gebühr bezahlen.",
       "loesung": false,
       "stelle": "Der kostet Sie nichts",
       "erklaerung": "Der Ersatzwagen ist kostenlos, nur das Benzin muss sie bezahlen."
      }
     ]
    }
   ]
  },
  {
   "nr": 3,
   "art": "durchsage",
   "name": "Hören: Ansagen",
   "kurz": "Fünf kurze Ansagen — zweimal hören",
   "was": "Du hörst fünf kurze Ansagen: Bahnhof, Supermarkt, Radio, Praxis, Kino. Zu jeder eine Aussage: richtig oder falsch?",
   "tipp": "Achte auf das eine Detail: Gleis, Uhrzeit, Tag. Oft wird es korrigiert.",
   "zeichen": "📢",
   "farbe": "rot",
   "punkte": 5,
   "mal": 2,
   "runden": [
    {
     "id": "a2b1ah3s1",
     "titel": "Fünf Ansagen",
     "aufgaben": [
      {
       "von": "Durchsage am Bahnhof",
       "wer": "Mann",
       "text": "Information zum Regionalzug nach Altenstein, Abfahrt neun Uhr vierzig. Wegen Bauarbeiten fährt dieser Zug heute nur bis Kirchdorf. Von Kirchdorf nach Altenstein fahren Busse als Ersatz. Die Busse stehen direkt vor dem Bahnhof Kirchdorf. Bitte rechnen Sie mit etwa zwanzig Minuten mehr Fahrzeit.",
       "satz": "Reisende nach Altenstein müssen in Kirchdorf in einen Bus umsteigen.",
       "loesung": true,
       "stelle": "Von Kirchdorf nach Altenstein fahren Busse als Ersatz.",
       "erklaerung": "Der Zug fährt nur bis Kirchdorf, danach geht es mit dem Bus weiter."
      },
      {
       "von": "Durchsage im Supermarkt",
       "wer": "Frau",
       "text": "Liebe Kunden, nur heute: Alle Äpfel und Birnen aus der Region gibt es zum halben Preis. Das Angebot gilt nicht für Bioobst. Außerdem bekommen Sie an unserer Käsetheke zu jedem Einkauf ab zehn Euro ein kleines Brot gratis. Vielen Dank für Ihren Einkauf.",
       "satz": "Heute ist auch das Bioobst billiger.",
       "loesung": false,
       "stelle": "Das Angebot gilt nicht für Bioobst.",
       "erklaerung": "Nur das normale Obst aus der Region ist billiger, Bioobst nicht."
      },
      {
       "von": "Anrufbeantworter einer Arztpraxis",
       "wer": "Frau",
       "text": "Guten Tag, Sie sind verbunden mit der Praxis Doktor Lehmann. Unsere Praxis ist vom zweiten bis zum sechzehnten August geschlossen. In dringenden Fällen wenden Sie sich bitte an die Praxis Doktor Aydın in der Bahnhofstraße. Rezepte können Sie ab dem siebzehnten August wieder bei uns abholen.",
       "satz": "In dringenden Fällen kann man in eine andere Praxis gehen.",
       "loesung": true,
       "stelle": "wenden Sie sich bitte an die Praxis Doktor Aydın",
       "erklaerung": "Während der Ferien hilft die Praxis Doktor Aydın."
      },
      {
       "von": "Verkehrsmeldung im Radio",
       "wer": "Mann",
       "text": "Und jetzt der Verkehr. Auf der Autobahn sieben zwischen Nordheim und Waldau gibt es nach einem Unfall acht Kilometer Stau. Bitte fahren Sie dort nicht entlang. Auf der Bundesstraße zwölf sind die Bauarbeiten seit heute Morgen beendet. Dort können Sie wieder normal fahren.",
       "satz": "Auf der Bundesstraße zwölf wird noch gebaut.",
       "loesung": false,
       "stelle": "sind die Bauarbeiten seit heute Morgen beendet",
       "erklaerung": "Die Bauarbeiten sind fertig. Der Stau ist auf der Autobahn."
      },
      {
       "von": "Ansage im Kino",
       "wer": "Frau",
       "text": "Herzlich willkommen im Kino Lichtspiel am Markt. Heute um siebzehn Uhr läuft der Familienfilm „Der kleine Drache“. Um zwanzig Uhr fünfzehn zeigen wir die Komödie „Sommer am See“. Die Spätvorstellung fällt heute leider aus. Und am Dienstag sind alle Karten nur sechs Euro.",
       "satz": "Am Dienstag sind die Kinokarten günstiger.",
       "loesung": true,
       "stelle": "am Dienstag sind alle Karten nur sechs Euro",
       "erklaerung": "Am Dienstag kostet jede Karte nur sechs Euro."
      }
     ]
    },
    {
     "id": "a2b1ah3s2",
     "titel": "Fünf Ansagen",
     "aufgaben": [
      {
       "von": "Durchsage in der Straßenbahn",
       "wer": "Mann",
       "text": "Liebe Fahrgäste, wegen eines Stadtfestes fährt diese Straßenbahn heute nicht über den Marktplatz. Wir fahren eine Umleitung über die Schillerstraße. Die Haltestellen Marktplatz und Rathaus werden heute nicht bedient. Für das Stadtfest steigen Sie bitte an der Haltestelle Theater aus.",
       "satz": "Die Straßenbahn hält heute am Rathaus.",
       "loesung": false,
       "stelle": "Die Haltestellen Marktplatz und Rathaus werden heute nicht bedient.",
       "erklaerung": "„Nicht bedient\" heißt: Die Bahn hält dort heute nicht."
      },
      {
       "von": "Anrufbeantworter einer Zahnarztpraxis",
       "wer": "Frau",
       "text": "Zahnarztpraxis Doktor Brenner, guten Tag. Sie rufen außerhalb unserer Sprechzeiten an. Wir sind montags bis freitags von acht bis zwölf Uhr für Sie da, am Dienstag und Donnerstag auch nachmittags von vierzehn bis achtzehn Uhr. Bei starken Schmerzen am Wochenende rufen Sie bitte den zahnärztlichen Notdienst an.",
       "satz": "Die Praxis ist am Donnerstagnachmittag geöffnet.",
       "loesung": true,
       "stelle": "am Dienstag und Donnerstag auch nachmittags",
       "erklaerung": "Dienstag und Donnerstag ist die Praxis auch am Nachmittag offen."
      },
      {
       "von": "Wetterbericht im Radio",
       "wer": "Mann",
       "text": "Das Wetter für das Wochenende: Am Samstag scheint überall die Sonne, bei Temperaturen bis vierundzwanzig Grad. Ideal für einen Ausflug! Am Sonntag wird es dann ungemütlich. Schon am Morgen gibt es kräftige Schauer, und es wird deutlich kühler, höchstens fünfzehn Grad.",
       "satz": "Der Sonntag ist gut für einen Ausflug.",
       "loesung": false,
       "stelle": "Am Sonntag wird es dann ungemütlich.",
       "erklaerung": "Der Ausflugstag ist der Samstag. Am Sonntag regnet es."
      },
      {
       "von": "Durchsage im Kaufhaus",
       "wer": "Frau",
       "text": "Liebe Kunden, ein kleiner Junge sucht seine Eltern. Er heißt Luca, ist ungefähr fünf Jahre alt und trägt eine rote Jacke. Luca wartet jetzt an der Information im Erdgeschoss. Die Eltern kommen bitte sofort dorthin. Vielen Dank.",
       "satz": "Luca wartet an der Information im ersten Stock.",
       "loesung": false,
       "stelle": "Luca wartet jetzt an der Information im Erdgeschoss.",
       "erklaerung": "Die Information ist im Erdgeschoss, nicht im ersten Stock."
      },
      {
       "von": "Durchsage im Schwimmbad",
       "wer": "Mann",
       "text": "Liebe Badegäste, in einer halben Stunde schließt das Hallenbad. Bitte verlassen Sie das Schwimmbecken spätestens um einundzwanzig Uhr fünfundvierzig. Die Sauna bleibt heute ausnahmsweise länger geöffnet, bis dreiundzwanzig Uhr. Wir wünschen Ihnen noch einen schönen Abend.",
       "satz": "Die Sauna ist heute länger geöffnet als das Schwimmbecken.",
       "loesung": true,
       "stelle": "Die Sauna bleibt heute ausnahmsweise länger geöffnet",
       "erklaerung": "Das Becken schließt bald, die Sauna ist bis dreiundzwanzig Uhr offen."
      }
     ]
    }
   ]
  },
  {
   "nr": 4,
   "art": "diskussion",
   "name": "Hören: Meinungen",
   "kurz": "Fünf Personen, ein Thema — EINMAL hören",
   "was": "Fünf Personen sagen ihre Meinung zu einem Thema. Zu jeder Person suchst du die passende Aussage. Zwei Aussagen bleiben übrig.",
   "tipp": "Hör auf die Haltung: findet die Person es gut, schlecht, oder „ja, aber\"?",
   "zeichen": "🗣️",
   "farbe": "lila",
   "punkte": 5,
   "mal": 1,
   "runden": [
    {
     "id": "a2b1ah4s1",
     "titel": "Einkaufen im Internet",
     "aufgaben": [
      {
       "von": "Person 1 — Anna",
       "wer": "Frau",
       "text": "Früher habe ich fast alles im Internet bestellt, Schuhe, Elektronik, sogar Möbel. Aber letztes Jahr habe ich ein Handy bezahlt, und es ist nie angekommen. Der Verkäufer war plötzlich weg und mein Geld auch. Seitdem schaue ich mir die Shops ganz genau an und bezahle nur noch auf Rechnung. Ich bestelle schon noch, aber viel weniger als früher.",
       "frage": "Welche Aussage passt zu Anna?",
       "loesung": 3,
       "stelle": "Seitdem schaue ich mir die Shops ganz genau an",
       "erklaerung": "Das Handy ist nie angekommen. Seitdem ist sie vorsichtig, bestellt aber weiter.",
       "opt": [
        "findet es praktisch, vermisst aber die Beratung im Geschäft",
        "kauft nur noch online, weil sie sehr wenig Zeit hat",
        "kauft lieber im Laden, damit die Geschäfte im Ort bleiben",
        "hatte eine schlechte Erfahrung und ist jetzt vorsichtig",
        "findet die vielen Pakete schlecht für die Umwelt",
        "bestellt online, wenn es dort deutlich billiger ist",
        "gibt im Internet nicht gern persönliche Daten an"
       ],
       "fest": true
      },
      {
       "von": "Person 2 — Peter",
       "wer": "Mann",
       "text": "In unserer Straße gab es früher eine Buchhandlung, einen Schuhladen und ein Spielwarengeschäft. Heute ist nur noch die Buchhandlung da. Natürlich wäre es bequemer, alles vom Sofa aus zu bestellen. Aber wenn alle das machen, sind bald auch die letzten Läden weg. Deshalb kaufe ich meine Bücher bei Frau Kessler um die Ecke, auch wenn sie dort manchmal einen Euro mehr kosten.",
       "frage": "Welche Aussage passt zu Peter?",
       "loesung": 2,
       "stelle": "sind bald auch die letzten Läden weg",
       "erklaerung": "Er kauft im Laden, damit die Geschäfte bleiben. Der höhere Preis ist ihm egal.",
       "opt": [
        "findet es praktisch, vermisst aber die Beratung im Geschäft",
        "kauft nur noch online, weil sie sehr wenig Zeit hat",
        "kauft lieber im Laden, damit die Geschäfte im Ort bleiben",
        "hatte eine schlechte Erfahrung und ist jetzt vorsichtig",
        "findet die vielen Pakete schlecht für die Umwelt",
        "bestellt online, wenn es dort deutlich billiger ist",
        "gibt im Internet nicht gern persönliche Daten an"
       ],
       "fest": true
      },
      {
       "von": "Person 3 — Fatma",
       "wer": "Frau",
       "text": "Mit zwei kleinen Kindern ist Online-Shopping für mich einfach praktisch. Ich bestelle abends, wenn die Kinder schlafen, und am nächsten Tag ist alles da. Was mir aber fehlt, ist jemand, den ich fragen kann. Letzte Woche wollte ich einen Kinderwagen kaufen und habe stundenlang Bewertungen gelesen. Im Geschäft hätte mir eine Verkäuferin in fünf Minuten geholfen.",
       "frage": "Welche Aussage passt zu Fatma?",
       "loesung": 0,
       "stelle": "Was mir aber fehlt, ist jemand, den ich fragen kann.",
       "erklaerung": "Praktisch ja, aber sie vermisst die Beratung. „nur noch online\" sagt sie nicht.",
       "opt": [
        "findet es praktisch, vermisst aber die Beratung im Geschäft",
        "kauft nur noch online, weil sie sehr wenig Zeit hat",
        "kauft lieber im Laden, damit die Geschäfte im Ort bleiben",
        "hatte eine schlechte Erfahrung und ist jetzt vorsichtig",
        "findet die vielen Pakete schlecht für die Umwelt",
        "bestellt online, wenn es dort deutlich billiger ist",
        "gibt im Internet nicht gern persönliche Daten an"
       ],
       "fest": true
      },
      {
       "von": "Person 4 — Jonas",
       "wer": "Mann",
       "text": "Ich gehe eigentlich gern in die Stadt und schaue mir die Sachen direkt an. Aber bei teuren Dingen vergleiche ich immer die Preise. Als ich einen neuen Fernseher gebraucht habe, war er im Internet fast hundert Euro günstiger. Da habe ich natürlich online bestellt. Bei kleinen Dingen ist mir der Unterschied egal, da kaufe ich im Laden.",
       "frage": "Welche Aussage passt zu Jonas?",
       "loesung": 5,
       "stelle": "war er im Internet fast hundert Euro günstiger",
       "erklaerung": "Online kauft er nur, wenn der Preisunterschied groß ist.",
       "opt": [
        "findet es praktisch, vermisst aber die Beratung im Geschäft",
        "kauft nur noch online, weil sie sehr wenig Zeit hat",
        "kauft lieber im Laden, damit die Geschäfte im Ort bleiben",
        "hatte eine schlechte Erfahrung und ist jetzt vorsichtig",
        "findet die vielen Pakete schlecht für die Umwelt",
        "bestellt online, wenn es dort deutlich billiger ist",
        "gibt im Internet nicht gern persönliche Daten an"
       ],
       "fest": true
      },
      {
       "von": "Person 5 — Irina",
       "wer": "Frau",
       "text": "Wenn ich durch unser Treppenhaus gehe, stehen da jeden Tag Kartons. Mein Nachbar bestellt drei Hosen, probiert sie an und schickt zwei zurück. Die Lieferwagen fahren hin und her, und am Ende landet alles im Müll. Das finde ich wirklich schlimm für die Natur. Ich bestelle höchstens zweimal im Jahr etwas, und dann alles zusammen in einem Paket.",
       "frage": "Welche Aussage passt zu Irina?",
       "loesung": 4,
       "stelle": "Das finde ich wirklich schlimm für die Natur.",
       "erklaerung": "Kartons, Lieferwagen, Müll: Sie denkt an die Umwelt.",
       "opt": [
        "findet es praktisch, vermisst aber die Beratung im Geschäft",
        "kauft nur noch online, weil sie sehr wenig Zeit hat",
        "kauft lieber im Laden, damit die Geschäfte im Ort bleiben",
        "hatte eine schlechte Erfahrung und ist jetzt vorsichtig",
        "findet die vielen Pakete schlecht für die Umwelt",
        "bestellt online, wenn es dort deutlich billiger ist",
        "gibt im Internet nicht gern persönliche Daten an"
       ],
       "fest": true
      }
     ]
    },
    {
     "id": "a2b1ah4s2",
     "titel": "Ein eigenes Handy für Kinder?",
     "aufgaben": [
      {
       "von": "Person 1 — Thomas",
       "wer": "Mann",
       "text": "Unser Sohn ist elf und hat seit einem Jahr ein Handy. Er darf es nach den Hausaufgaben benutzen, aber nur bis acht Uhr abends. Dann kommt es in die Küche, und dort bleibt es bis zum Frühstück. Am Anfang gab es deswegen jeden Abend Diskussionen. Inzwischen hat er sich daran gewöhnt, und ehrlich gesagt klappt es ganz gut.",
       "frage": "Welche Aussage passt zu Thomas?",
       "loesung": 2,
       "stelle": "aber nur bis acht Uhr abends",
       "erklaerung": "Der Sohn hat ein Handy, aber mit klaren Zeiten.",
       "opt": [
        "findet ein Handy wichtig, damit man das Kind immer erreichen kann",
        "findet, dass Kinder unter zwölf noch kein Handy brauchen",
        "erlaubt das Handy, aber nur zu bestimmten Zeiten",
        "bereut, dass sie ihrem Kind so früh ein Handy gegeben hat",
        "denkt, dass Kinder ohne Handy schnell allein sind",
        "findet, dass die Eltern ein gutes Vorbild sein müssen",
        "meint, dass die Schule den Umgang mit dem Handy lehren soll"
       ],
       "fest": true
      },
      {
       "von": "Person 2 — Petra",
       "wer": "Frau",
       "text": "Ich war eigentlich dagegen, meiner Tochter so früh ein Handy zu geben. Aber sie fährt jeden Tag allein mit dem Bus zum Training, und der Bus kommt oft zu spät. Jetzt kann sie mich anrufen, wenn etwas nicht klappt, und ich kann sie auch immer erreichen. Für mich als Mutter ist das eine große Beruhigung.",
       "frage": "Welche Aussage passt zu Petra?",
       "loesung": 0,
       "stelle": "ich kann sie auch immer erreichen",
       "erklaerung": "„Ich war eigentlich dagegen\" ist die Falle. Heute ist sie froh, weil sie die Tochter erreicht.",
       "opt": [
        "findet ein Handy wichtig, damit man das Kind immer erreichen kann",
        "findet, dass Kinder unter zwölf noch kein Handy brauchen",
        "erlaubt das Handy, aber nur zu bestimmten Zeiten",
        "bereut, dass sie ihrem Kind so früh ein Handy gegeben hat",
        "denkt, dass Kinder ohne Handy schnell allein sind",
        "findet, dass die Eltern ein gutes Vorbild sein müssen",
        "meint, dass die Schule den Umgang mit dem Handy lehren soll"
       ],
       "fest": true
      },
      {
       "von": "Person 3 — Ahmed",
       "wer": "Mann",
       "text": "Viele Eltern beschweren sich, dass ihre Kinder ständig am Handy hängen. Aber was sehen die Kinder denn zu Hause? Die Mutter schreibt beim Essen Nachrichten, der Vater schaut im Bett noch Videos. Bei uns liegt deshalb beim Essen kein Handy auf dem Tisch, auch meins nicht. Kinder machen doch sowieso nach, was wir machen.",
       "frage": "Welche Aussage passt zu Ahmed?",
       "loesung": 5,
       "stelle": "Kinder machen doch sowieso nach, was wir machen.",
       "erklaerung": "Er sieht die Eltern in der Pflicht: Kinder machen nach, was Erwachsene tun.",
       "opt": [
        "findet ein Handy wichtig, damit man das Kind immer erreichen kann",
        "findet, dass Kinder unter zwölf noch kein Handy brauchen",
        "erlaubt das Handy, aber nur zu bestimmten Zeiten",
        "bereut, dass sie ihrem Kind so früh ein Handy gegeben hat",
        "denkt, dass Kinder ohne Handy schnell allein sind",
        "findet, dass die Eltern ein gutes Vorbild sein müssen",
        "meint, dass die Schule den Umgang mit dem Handy lehren soll"
       ],
       "fest": true
      },
      {
       "von": "Person 4 — Svetlana",
       "wer": "Frau",
       "text": "Meine Kinder sind sieben und zehn, und sie fragen mich fast jeden Tag nach einem Handy. Alle in der Klasse haben angeblich eins. Aber ich bleibe dabei: Vor dem zwölften Geburtstag gibt es kein eigenes Handy. Wenn etwas ist, können sie zu Hause anrufen oder das Telefon im Sekretariat benutzen. Sie sollen lieber draußen spielen.",
       "frage": "Welche Aussage passt zu Svetlana?",
       "loesung": 1,
       "stelle": "Vor dem zwölften Geburtstag gibt es kein eigenes Handy.",
       "erklaerung": "Sie hat eine klare Grenze: erst mit zwölf. „Alle in der Klasse\" ist nicht ihre Meinung.",
       "opt": [
        "findet ein Handy wichtig, damit man das Kind immer erreichen kann",
        "findet, dass Kinder unter zwölf noch kein Handy brauchen",
        "erlaubt das Handy, aber nur zu bestimmten Zeiten",
        "bereut, dass sie ihrem Kind so früh ein Handy gegeben hat",
        "denkt, dass Kinder ohne Handy schnell allein sind",
        "findet, dass die Eltern ein gutes Vorbild sein müssen",
        "meint, dass die Schule den Umgang mit dem Handy lehren soll"
       ],
       "fest": true
      },
      {
       "von": "Person 5 — Lukas",
       "wer": "Mann",
       "text": "Ich habe mein erstes Handy erst mit vierzehn bekommen. Das war ehrlich gesagt eine schwierige Zeit für mich. Alle Verabredungen liefen über Gruppenchats, und ich habe oft einfach nichts davon gewusst. Am Montag haben die anderen dann vom Wochenende erzählt, und ich stand daneben. Deshalb finde ich: Wer heute kein Handy hat, gehört schnell nicht mehr dazu.",
       "frage": "Welche Aussage passt zu Lukas?",
       "loesung": 4,
       "stelle": "gehört schnell nicht mehr dazu",
       "erklaerung": "Ohne Handy hat er die Verabredungen verpasst und war ausgeschlossen.",
       "opt": [
        "findet ein Handy wichtig, damit man das Kind immer erreichen kann",
        "findet, dass Kinder unter zwölf noch kein Handy brauchen",
        "erlaubt das Handy, aber nur zu bestimmten Zeiten",
        "bereut, dass sie ihrem Kind so früh ein Handy gegeben hat",
        "denkt, dass Kinder ohne Handy schnell allein sind",
        "findet, dass die Eltern ein gutes Vorbild sein müssen",
        "meint, dass die Schule den Umgang mit dem Handy lehren soll"
       ],
       "fest": true
      }
     ]
    }
   ]
  },
  {
   "nr": 5,
   "art": "ansage",
   "name": "Hören und Schreiben: Telefonnotiz",
   "kurz": "Fünf Nachrichten auf dem Anrufbeantworter — notieren",
   "was": "Du hörst Nachrichten auf dem Anrufbeantworter und ergänzt die Telefonnotiz: eine Zeit, einen Ort, eine Nummer. Zweimal hören.",
   "tipp": "Lies zuerst, was fehlt — dann weißt du, worauf du hören musst. Zahlen darfst du als Ziffern schreiben.",
   "zeichen": "📝",
   "farbe": "turq",
   "punkte": 5,
   "mal": 2,
   "runden": [
    {
     "id": "a2b1ahns1",
     "titel": "Fünf Nachrichten",
     "aufgaben": [
      {
       "von": "Anrufbeantworter — Praxis Dr. Hartmann",
       "wer": "Frau",
       "text": "Guten Tag, hier ist die Praxis Doktor Hartmann, Frau Schmidt am Apparat. Diese Nachricht ist für Herrn Petrov. Leider muss Ihr Termin am Dienstag ausfallen, weil die Ärztin krank ist. Wir können Ihnen einen neuen Termin am Donnerstag um zehn Uhr fünfzehn anbieten. Bitte rufen Sie uns kurz an, ob das passt. Vielen Dank und auf Wiederhören.",
       "notiz": {
        "titel": "Telefonnotiz",
        "zeilen": [
         "Anruf von: Praxis Dr. Hartmann",
         "Thema: Termin am Dienstag fällt aus"
        ],
        "feld": "Neuer Termin: Donnerstag um",
        "loesungen": [
         "10:15 Uhr",
         "10.15 Uhr",
         "10:15",
         "10.15",
         "10 Uhr 15",
         "zehn Uhr fünfzehn",
         "Viertel nach zehn",
         "viertel nach zehn"
        ]
       },
       "stelle": "am Donnerstag um zehn Uhr fünfzehn",
       "erklaerung": "Der Dienstag fällt aus. Der neue Termin ist am Donnerstag um zehn Uhr fünfzehn.",
       "frage": "Ergänze die Telefonnotiz."
      },
      {
       "von": "Anrufbeantworter — Autowerkstatt Kraus",
       "wer": "Mann",
       "text": "Hallo Frau Yilmaz, hier ist Werner Kraus von der Autowerkstatt. Ihr Auto ist fertig, Sie können es ab morgen früh abholen. Wir haben die Bremsen und das Licht repariert. Das macht zusammen dreihundertzwanzig Euro. Sie können bar oder mit Karte bezahlen. Wir haben bis achtzehn Uhr geöffnet, am Samstag bis zwölf. Bis dann!",
       "notiz": {
        "titel": "Telefonnotiz",
        "zeilen": [
         "Anruf von: Herr Kraus, Werkstatt",
         "Thema: Auto ist fertig"
        ],
        "feld": "Kosten:",
        "loesungen": [
         "320 Euro",
         "320 €",
         "320,00 €",
         "320,- €",
         "320",
         "dreihundertzwanzig Euro"
        ]
       },
       "stelle": "Das macht zusammen dreihundertzwanzig Euro.",
       "erklaerung": "Bremsen und Licht kosten zusammen dreihundertzwanzig Euro. Achtzehn und zwölf sind Öffnungszeiten.",
       "frage": "Ergänze die Telefonnotiz."
      },
      {
       "von": "Anrufbeantworter — Kollegin Sandra",
       "wer": "Frau",
       "text": "Hallo Mira, hier ist Sandra. Du, das Teamessen am Freitag findet nicht im italienischen Restaurant statt, das hat geschlossen. Wir gehen stattdessen ins Gasthaus Zur Linde, das ist in der Bahnhofstraße, direkt neben der Post. Die Uhrzeit bleibt gleich, halb sieben. Sag mir bitte bis morgen Bescheid, ob du kommst. Tschüss!",
       "notiz": {
        "titel": "Telefonnotiz",
        "zeilen": [
         "Anruf von: Sandra",
         "Thema: Teamessen am Freitag, halb sieben"
        ],
        "feld": "Neuer Ort:",
        "loesungen": [
         "Gasthaus Zur Linde",
         "Gasthaus zur Linde",
         "Zur Linde",
         "zur Linde",
         "Linde",
         "Gasthaus Linde"
        ]
       },
       "stelle": "Wir gehen stattdessen ins Gasthaus Zur Linde",
       "erklaerung": "Das italienische Restaurant hat geschlossen. „stattdessen\" führt zum neuen Ort.",
       "frage": "Ergänze die Telefonnotiz."
      },
      {
       "von": "Anrufbeantworter — Hausverwaltung Becker",
       "wer": "Mann",
       "text": "Guten Tag, hier ist die Hausverwaltung Becker mit einer Nachricht für alle Mieter in der Gartenstraße. In unserem Brief steht leider ein falscher Tag. Der Techniker kommt nicht am Dienstag, sondern am Mittwoch und liest die Heizung ab. Bitte seien Sie zwischen acht und zwölf Uhr zu Hause. Vielen Dank für Ihr Verständnis.",
       "notiz": {
        "titel": "Telefonnotiz",
        "zeilen": [
         "Anruf von: Hausverwaltung Becker",
         "Thema: Heizung ablesen, acht bis zwölf Uhr"
        ],
        "feld": "Techniker kommt am:",
        "loesungen": [
         "Mittwoch",
         "Mi",
         "Mi.",
         "am Mittwoch"
        ]
       },
       "stelle": "nicht am Dienstag, sondern am Mittwoch",
       "erklaerung": "Dienstag steht falsch im Brief. Nach „nicht … sondern\" kommt der richtige Tag.",
       "frage": "Ergänze die Telefonnotiz."
      },
      {
       "von": "Anrufbeantworter — Kita Sonnenblume",
       "wer": "Frau",
       "text": "Hallo Herr Nowak, hier ist Frau Berger aus der Kita Sonnenblume. Morgen machen wir doch den Ausflug in den Tierpark. Bitte geben Sie Ihrem Sohn eine Regenjacke mit, es soll nämlich regnen. Essen müssen Sie nichts mitgeben, das Mittagessen bekommen wir dort. Wir sind um fünfzehn Uhr zurück. Vielen Dank!",
       "notiz": {
        "titel": "Telefonnotiz",
        "zeilen": [
         "Anruf von: Frau Berger, Kita",
         "Thema: Ausflug in den Tierpark"
        ],
        "feld": "Mitgeben:",
        "loesungen": [
         "Regenjacke",
         "eine Regenjacke",
         "Regenjacke mitgeben"
        ]
       },
       "stelle": "Bitte geben Sie Ihrem Sohn eine Regenjacke mit",
       "erklaerung": "Essen muss nicht mit. Mitgeben soll er nur eine Regenjacke.",
       "frage": "Ergänze die Telefonnotiz."
      }
     ]
    },
    {
     "id": "a2b1ahns2",
     "titel": "Fünf Nachrichten",
     "aufgaben": [
      {
       "von": "Anrufbeantworter — Bürgeramt",
       "wer": "Frau",
       "text": "Guten Tag, hier spricht das Bürgeramt, Frau Lorenz. Die Nachricht ist für Herrn Ahmadi. Ihr neuer Reisepass ist da und liegt zur Abholung bereit. Bitte bringen Sie Ihren alten Pass mit. Abholen können Sie ihn ohne Termin am Schalter drei, montags bis freitags von acht bis zwölf Uhr. Auf Wiederhören.",
       "notiz": {
        "titel": "Telefonnotiz",
        "zeilen": [
         "Anruf von: Bürgeramt, Frau Lorenz",
         "Thema: neuer Reisepass ist da"
        ],
        "feld": "Abholen am Schalter:",
        "loesungen": [
         "3",
         "drei",
         "Schalter 3",
         "Schalter drei",
         "Nr. 3"
        ]
       },
       "stelle": "am Schalter drei",
       "erklaerung": "Gefragt ist die Nummer vom Schalter: drei. Acht bis zwölf sind die Öffnungszeiten.",
       "frage": "Ergänze die Telefonnotiz."
      },
      {
       "von": "Anrufbeantworter — Fitnessstudio Aktiv",
       "wer": "Mann",
       "text": "Hallo Frau Weber, hier ist Tim vom Fitnessstudio Aktiv. Sie hatten nach dem Rückenkurs gefragt. Der Kurs am Montagabend ist leider schon voll. Aber am Mittwoch um neunzehn Uhr ist noch ein Platz frei. Wenn Sie möchten, reserviere ich ihn für Sie. Rufen Sie mich einfach zurück. Tschüss!",
       "notiz": {
        "titel": "Telefonnotiz",
        "zeilen": [
         "Anruf von: Tim, Fitnessstudio",
         "Thema: Rückenkurs, Montag ist voll"
        ],
        "feld": "Freier Platz: Mittwoch um",
        "loesungen": [
         "19 Uhr",
         "19:00 Uhr",
         "19.00 Uhr",
         "19:00",
         "19.00",
         "19",
         "neunzehn Uhr",
         "7 Uhr abends",
         "sieben Uhr abends"
        ]
       },
       "stelle": "am Mittwoch um neunzehn Uhr ist noch ein Platz frei",
       "erklaerung": "Montag ist voll. Frei ist nur der Kurs am Mittwoch um neunzehn Uhr.",
       "frage": "Ergänze die Telefonnotiz."
      },
      {
       "von": "Anrufbeantworter — Freund Paul",
       "wer": "Mann",
       "text": "Hallo Lena, hier ist Paul. Es geht um den Umzug am Samstag. Wir treffen uns nicht um neun, sondern schon um acht, weil wir den Transporter nur bis Mittag haben. Und bring bitte Handschuhe mit, die Kisten sind ziemlich schwer. Für Brötchen und Kaffee sorge ich. Danke dir, du bist die Beste!",
       "notiz": {
        "titel": "Telefonnotiz",
        "zeilen": [
         "Anruf von: Paul",
         "Thema: Umzug am Samstag, Handschuhe mitbringen"
        ],
        "feld": "Treffen um:",
        "loesungen": [
         "8 Uhr",
         "8:00 Uhr",
         "8.00 Uhr",
         "8:00",
         "8.00",
         "8",
         "acht Uhr",
         "acht"
        ]
       },
       "stelle": "sondern schon um acht",
       "erklaerung": "Neun war der alte Plan. Nach „sondern schon\" kommt die neue Zeit.",
       "frage": "Ergänze die Telefonnotiz."
      },
      {
       "von": "Anrufbeantworter — Zahnarztpraxis Dr. Özdemir",
       "wer": "Frau",
       "text": "Guten Tag, hier ist die Zahnarztpraxis Doktor Özdemir. Diese Nachricht ist für Frau Schulz. Ab nächster Woche haben wir eine neue Telefonnummer: null drei null, sechs vier, acht acht, eins zwei. Ich wiederhole: null drei null, sechs vier, acht acht, eins zwei. Ihr Termin bleibt natürlich bestehen. Auf Wiederhören.",
       "notiz": {
        "titel": "Telefonnotiz",
        "zeilen": [
         "Anruf von: Zahnarztpraxis Dr. Özdemir",
         "Thema: Termin bleibt"
        ],
        "feld": "Neue Telefonnummer:",
        "loesungen": [
         "030 64 88 12",
         "030648812",
         "030 648812",
         "030-648812",
         "030/648812",
         "030 / 648812",
         "030 64 88 1 2"
        ]
       },
       "stelle": "null drei null, sechs vier, acht acht, eins zwei",
       "erklaerung": "Die Nummer wird zweimal gesagt. Ziffer für Ziffer: null drei null, sechs vier, acht acht, eins zwei.",
       "frage": "Ergänze die Telefonnotiz."
      },
      {
       "von": "Anrufbeantworter — Buchhandlung am Markt",
       "wer": "Mann",
       "text": "Guten Tag Frau Rossi, hier ist die Buchhandlung am Markt. Das Buch, das Sie bestellt haben, ist leider noch nicht gekommen. Der Verlag hat uns gesagt, dass es erst Ende des Monats lieferbar ist. Wir rufen Sie wieder an, sobald es da ist. Sie müssen also nichts tun. Einen schönen Tag noch!",
       "notiz": {
        "titel": "Telefonnotiz",
        "zeilen": [
         "Anruf von: Buchhandlung am Markt",
         "Thema: bestelltes Buch noch nicht da"
        ],
        "feld": "Buch kommt:",
        "loesungen": [
         "Ende des Monats",
         "Ende Monat",
         "Monatsende",
         "am Monatsende",
         "Ende des Monats lieferbar",
         "erst Ende des Monats"
        ]
       },
       "stelle": "dass es erst Ende des Monats lieferbar ist",
       "erklaerung": "Das Buch ist noch nicht da. Es kommt erst Ende des Monats.",
       "frage": "Ergänze die Telefonnotiz."
      }
     ]
    }
   ]
  }
 ],
 "laeufe": [
  {
   "id": "ta2b1hl1",
   "titel": "Prüfungslauf 1",
   "minuten": 35,
   "teile": [
    {
     "nr": 1,
     "art": "gespraech",
     "aufgaben": [
      {
       "ort": "Gespräch — Abschnitt 1",
       "zeilen": [
        {
         "wer": "Frau",
         "text": "Felix, ich habe die Liste für Samstag gemacht. Dein Onkel Rafael kann doch schwere Sachen tragen, oder?"
        },
        {
         "wer": "Mann",
         "text": "Nein, er hat gerade Probleme mit dem Rücken. Aber er hat einen Führerschein für große Autos. Er fährt den Transporter, das hat er mir versprochen."
        }
       ],
       "frage": "Was macht Onkel Rafael?",
       "loesung": 4,
       "stelle": "Er fährt den Transporter",
       "erklaerung": "Tragen kann er wegen seines Rückens nicht. Er fährt den Transporter.",
       "opt": [
        "Kisten packen",
        "Möbel tragen",
        "auf die Kinder aufpassen",
        "Essen kochen",
        "den Transporter fahren",
        "die Lampen anschließen",
        "die alte Wohnung putzen"
       ],
       "fest": true
      },
      {
       "ort": "Gespräch — Abschnitt 2",
       "zeilen": [
        {
         "wer": "Frau",
         "text": "Gut. Dann brauchen wir starke Leute für die Möbel. Was ist mit Tim?"
        },
        {
         "wer": "Mann",
         "text": "Tim kommt mit zwei Freunden vom Fußball. Die tragen die Schränke und das Sofa."
        }
       ],
       "frage": "Was macht Tim?",
       "loesung": 1,
       "stelle": "Die tragen die Schränke und das Sofa.",
       "erklaerung": "Tim und seine Freunde tragen die schweren Möbel.",
       "opt": [
        "Kisten packen",
        "Möbel tragen",
        "auf die Kinder aufpassen",
        "Essen kochen",
        "den Transporter fahren",
        "die Lampen anschließen",
        "die alte Wohnung putzen"
       ],
       "fest": true
      },
      {
       "ort": "Gespräch — Abschnitt 3",
       "zeilen": [
        {
         "wer": "Frau",
         "text": "Meine Schwester Lisa wollte für alle kochen."
        },
        {
         "wer": "Mann",
         "text": "Ja, aber in der neuen Küche funktioniert der Herd noch nicht. Ich habe mit ihr gesprochen. Sie passt lieber auf die Kinder auf, und wir bestellen Pizza."
        }
       ],
       "frage": "Was macht Lisa?",
       "loesung": 2,
       "stelle": "Sie passt lieber auf die Kinder auf",
       "erklaerung": "Kochen geht nicht, weil der Herd kaputt ist. Lisa passt auf die Kinder auf.",
       "opt": [
        "Kisten packen",
        "Möbel tragen",
        "auf die Kinder aufpassen",
        "Essen kochen",
        "den Transporter fahren",
        "die Lampen anschließen",
        "die alte Wohnung putzen"
       ],
       "fest": true
      },
      {
       "ort": "Gespräch — Abschnitt 4",
       "zeilen": [
        {
         "wer": "Frau",
         "text": "Und deine Mutter? Sie will doch unbedingt helfen."
        },
        {
         "wer": "Mann",
         "text": "Sie hat gesagt, sie putzt die alte Wohnung, wenn alles draußen ist. Das ist wichtig, sonst bekommen wir die Kaution nicht zurück."
        }
       ],
       "frage": "Was macht Felix’ Mutter?",
       "loesung": 6,
       "stelle": "sie putzt die alte Wohnung",
       "erklaerung": "Die Mutter putzt am Ende die alte Wohnung.",
       "opt": [
        "Kisten packen",
        "Möbel tragen",
        "auf die Kinder aufpassen",
        "Essen kochen",
        "den Transporter fahren",
        "die Lampen anschließen",
        "die alte Wohnung putzen"
       ],
       "fest": true
      },
      {
       "ort": "Gespräch — Abschnitt 5",
       "zeilen": [
        {
         "wer": "Frau",
         "text": "Und mein Bruder Jakob? Er ist doch Elektriker."
        },
        {
         "wer": "Mann",
         "text": "Genau. Er kommt am Nachmittag und schließt in der neuen Wohnung die Lampen an. Die Kisten packen wir ja vorher selbst."
        }
       ],
       "frage": "Was macht Jakob?",
       "loesung": 5,
       "stelle": "schließt in der neuen Wohnung die Lampen an",
       "erklaerung": "Jakob ist Elektriker und schließt die Lampen an. Die Kisten packen Felix und Nadia.",
       "opt": [
        "Kisten packen",
        "Möbel tragen",
        "auf die Kinder aufpassen",
        "Essen kochen",
        "den Transporter fahren",
        "die Lampen anschließen",
        "die alte Wohnung putzen"
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
         "text": "Herzlich willkommen, Frau Haddad. Ich zeige Ihnen heute alles. Zuerst bekommen Sie Ihre Schlüsselkarte. Damit kommen Sie ins Haus und in den Personalraum."
        },
        {
         "wer": "Frau",
         "text": "Danke. Und wo kann ich meine Sachen lassen?"
        },
        {
         "wer": "Mann",
         "text": "Im Personalraum gibt es Schränke. Nehmen Sie einfach einen freien Schrank und schreiben Sie Ihren Namen darauf."
        }
       ],
       "satz": "Der Teamleiter gibt Frau Haddad einen bestimmten Schrank.",
       "loesung": false,
       "stelle": "Nehmen Sie einfach einen freien Schrank",
       "erklaerung": "Sie sucht sich selbst einen freien Schrank aus."
      },
      {
       "ort": "Gespräch — Abschnitt 2",
       "zeilen": [
        {
         "wer": "Frau",
         "text": "Und die Kleidung? Muss ich eine Uniform tragen?"
        },
        {
         "wer": "Mann",
         "text": "An der Rezeption ja. Die Blusen und Jacken bekommen Sie vom Hotel. Waschen müssen Sie sie nicht selbst, das macht unsere Wäscherei."
        }
       ],
       "satz": "Frau Haddad muss ihre Arbeitskleidung zu Hause waschen.",
       "loesung": false,
       "stelle": "das macht unsere Wäscherei",
       "erklaerung": "Die Wäscherei des Hotels wäscht die Kleidung."
      },
      {
       "ort": "Gespräch — Abschnitt 3",
       "zeilen": [
        {
         "wer": "Frau",
         "text": "Und wann mache ich Pause?"
        },
        {
         "wer": "Mann",
         "text": "Sie haben eine halbe Stunde Pause. Das Essen in der Kantine ist für Mitarbeiter kostenlos. Nur Saft oder Cola müssen Sie selbst bezahlen. Kaffee und Wasser sind gratis."
        }
       ],
       "satz": "Das Essen in der Kantine kostet für Mitarbeiter nichts.",
       "loesung": true,
       "stelle": "Das Essen in der Kantine ist für Mitarbeiter kostenlos.",
       "erklaerung": "Nur manche Getränke kosten Geld, das Essen ist kostenlos."
      },
      {
       "ort": "Gespräch — Abschnitt 4",
       "zeilen": [
        {
         "wer": "Frau",
         "text": "Arbeite ich in der ersten Woche schon allein?"
        },
        {
         "wer": "Mann",
         "text": "Nein, auf keinen Fall. In den ersten zwei Wochen arbeiten Sie immer zusammen mit Frau Berger. Sie hat viel Erfahrung und hilft Ihnen bei allem."
        }
       ],
       "satz": "Am Anfang arbeitet Frau Haddad mit einer Kollegin zusammen.",
       "loesung": true,
       "stelle": "arbeiten Sie immer zusammen mit Frau Berger",
       "erklaerung": "Zwei Wochen lang arbeitet sie nicht allein, sondern mit Frau Berger."
      },
      {
       "ort": "Gespräch — Abschnitt 5",
       "zeilen": [
        {
         "wer": "Frau",
         "text": "Und wenn ich einmal krank bin, wen rufe ich an?"
        },
        {
         "wer": "Mann",
         "text": "Bitte nicht die Rezeption, da ist immer viel los. Rufen Sie direkt mich an, am besten vor Ihrer Schicht. Die Krankmeldung vom Arzt brauchen wir ab dem dritten Tag."
        }
       ],
       "satz": "Wenn sie krank ist, soll Frau Haddad die Rezeption anrufen.",
       "loesung": false,
       "stelle": "Rufen Sie direkt mich an",
       "erklaerung": "Sie soll den Teamleiter anrufen, nicht die Rezeption."
      }
     ]
    },
    {
     "nr": 3,
     "art": "durchsage",
     "aufgaben": [
      {
       "von": "Durchsage am Bahnhof",
       "wer": "Frau",
       "text": "Achtung an Gleis drei. Der Intercity nach Nordhafen, planmäßige Abfahrt elf Uhr fünf, hat heute etwa vierzig Minuten Verspätung. Grund ist eine technische Störung. Reisende nach Brückenau können den Regionalzug um elf Uhr zwanzig an Gleis fünf nehmen.",
       "satz": "Nach Brückenau gibt es eine andere Verbindung.",
       "loesung": true,
       "stelle": "können den Regionalzug um elf Uhr zwanzig an Gleis fünf nehmen",
       "erklaerung": "Reisende nach Brückenau können mit einem anderen Zug fahren."
      },
      {
       "von": "Werbung im Radio",
       "wer": "Mann",
       "text": "Großer Umzugsverkauf im Möbelhaus Wohnfreude! Wir ziehen in ein neues Gebäude und verkaufen alle Sofas und Tische bis zu fünfzig Prozent billiger. Aber nur bis Samstag! Und das Beste: Bis Ende des Monats liefern wir Ihre Möbel kostenlos nach Hause.",
       "satz": "Die Lieferung der Möbel kostet extra.",
       "loesung": false,
       "stelle": "liefern wir Ihre Möbel kostenlos nach Hause",
       "erklaerung": "Bis Ende des Monats ist die Lieferung kostenlos."
      },
      {
       "von": "Ansage beim Bürgeramt",
       "wer": "Frau",
       "text": "Willkommen beim Bürgeramt der Stadt Grünfeld. Termine für einen neuen Personalausweis oder Reisepass vereinbaren Sie bitte online auf unserer Internetseite. Ohne Termin können Sie nur Ihre Wohnung anmelden, und zwar am Mittwochvormittag. Bitte bringen Sie dafür die Bestätigung von Ihrem Vermieter mit.",
       "satz": "Für einen neuen Reisepass braucht man einen Termin.",
       "loesung": true,
       "stelle": "Termine für einen neuen Personalausweis oder Reisepass vereinbaren Sie bitte online",
       "erklaerung": "Für Ausweis und Pass braucht man einen Termin. Ohne Termin geht nur die Anmeldung."
      },
      {
       "von": "Durchsage im Supermarkt",
       "wer": "Mann",
       "text": "Liebe Kunden, wir öffnen jetzt eine zweite Kasse. Bitte kommen Sie zur Kasse vier. Außerdem eine Information: Ab nächster Woche ist unser Markt auch am Samstag bis zweiundzwanzig Uhr geöffnet, nicht mehr nur bis zwanzig Uhr.",
       "satz": "Der Supermarkt schließt samstags weiterhin um zwanzig Uhr.",
       "loesung": false,
       "stelle": "auch am Samstag bis zweiundzwanzig Uhr geöffnet",
       "erklaerung": "Ab nächster Woche ist samstags bis zweiundzwanzig Uhr offen."
      },
      {
       "von": "Ansage im Theater",
       "wer": "Frau",
       "text": "Liebes Publikum, die Vorstellung beginnt in wenigen Minuten. Bitte schalten Sie Ihre Handys aus. Fotos und Videos sind während der Vorstellung nicht erlaubt. Nach dem ersten Teil gibt es eine Pause von zwanzig Minuten. In dieser Zeit bekommen Sie Getränke im Foyer im ersten Stock.",
       "satz": "In der Pause kann man etwas trinken.",
       "loesung": true,
       "stelle": "In dieser Zeit bekommen Sie Getränke im Foyer",
       "erklaerung": "In der Pause gibt es Getränke im Foyer."
      }
     ]
    },
    {
     "nr": 4,
     "art": "diskussion",
     "aufgaben": [
      {
       "von": "Person 1 — Stefan",
       "wer": "Mann",
       "text": "Früher bin ich jeden Morgen mit dem Auto in die Innenstadt gefahren und stand eine halbe Stunde im Stau. Dann noch einen Parkplatz suchen, das hat mich wahnsinnig gemacht. Seit dem Frühling nehme ich das Fahrrad. Ich fahre an den Autos vorbei und bin zehn Minuten früher im Büro. Dass es auch gesund ist, ist für mich nur ein schöner Nebeneffekt.",
       "frage": "Welche Aussage passt zu Stefan?",
       "loesung": 5,
       "stelle": "bin zehn Minuten früher im Büro",
       "erklaerung": "Der Hauptgrund ist die Zeit. Gesundheit nennt er nur als „Nebeneffekt\".",
       "opt": [
        "fährt Rad, weil es gut für die Gesundheit ist",
        "würde gern Rad fahren, aber der Weg ist zu gefährlich",
        "fährt nur bei gutem Wetter mit dem Fahrrad",
        "spart ohne Auto viel Geld",
        "braucht wegen der Kinder morgens das Auto",
        "ist mit dem Rad schneller als mit dem Auto",
        "fährt lieber mit Kollegen zusammen in einem Auto"
       ],
       "fest": true
      },
      {
       "von": "Person 2 — Monika",
       "wer": "Frau",
       "text": "Mein Büro ist nur sechs Kilometer von meiner Wohnung entfernt, eigentlich perfekt für das Fahrrad. Aber dazwischen liegt eine große Straße ohne Radweg, mit Lastwagen und Bussen. Ich habe es zweimal probiert und hatte beide Male richtig Angst. Wenn es dort einen sicheren Weg gäbe, würde ich sofort umsteigen. So nehme ich leider weiter das Auto.",
       "frage": "Welche Aussage passt zu Monika?",
       "loesung": 1,
       "stelle": "hatte beide Male richtig Angst",
       "erklaerung": "Sie möchte gern Rad fahren, aber die Straße ohne Radweg ist ihr zu gefährlich.",
       "opt": [
        "fährt Rad, weil es gut für die Gesundheit ist",
        "würde gern Rad fahren, aber der Weg ist zu gefährlich",
        "fährt nur bei gutem Wetter mit dem Fahrrad",
        "spart ohne Auto viel Geld",
        "braucht wegen der Kinder morgens das Auto",
        "ist mit dem Rad schneller als mit dem Auto",
        "fährt lieber mit Kollegen zusammen in einem Auto"
       ],
       "fest": true
      },
      {
       "von": "Person 3 — Kemal",
       "wer": "Mann",
       "text": "Radfahren finde ich eigentlich toll, am Wochenende mache ich lange Touren. Aber unter der Woche geht das nicht. Morgens bringe ich zuerst meine Tochter in den Kindergarten und meinen Sohn zur Schule, und die liegen in verschiedenen Stadtteilen. Danach fahre ich weiter zur Arbeit. Mit dem Fahrrad würde ich das niemals rechtzeitig schaffen.",
       "frage": "Welche Aussage passt zu Kemal?",
       "loesung": 4,
       "stelle": "Morgens bringe ich zuerst meine Tochter in den Kindergarten",
       "erklaerung": "Er muss morgens zwei Kinder an verschiedene Orte bringen. Deshalb nimmt er das Auto.",
       "opt": [
        "fährt Rad, weil es gut für die Gesundheit ist",
        "würde gern Rad fahren, aber der Weg ist zu gefährlich",
        "fährt nur bei gutem Wetter mit dem Fahrrad",
        "spart ohne Auto viel Geld",
        "braucht wegen der Kinder morgens das Auto",
        "ist mit dem Rad schneller als mit dem Auto",
        "fährt lieber mit Kollegen zusammen in einem Auto"
       ],
       "fest": true
      },
      {
       "von": "Person 4 — Lisa",
       "wer": "Frau",
       "text": "Von April bis Oktober fahre ich fast jeden Tag mit dem Rad, das macht mir richtig Spaß. Aber im Winter, wenn es dunkel, kalt und nass ist, nein danke. Dann nehme ich die Straßenbahn, auch wenn sie oft voll ist. Ich weiß, manche Kollegen fahren das ganze Jahr. Die bewundere ich, aber für mich ist das nichts.",
       "frage": "Welche Aussage passt zu Lisa?",
       "loesung": 2,
       "stelle": "wenn es dunkel, kalt und nass ist, nein danke",
       "erklaerung": "Sie fährt nur in der warmen Jahreszeit Rad, im Winter nicht.",
       "opt": [
        "fährt Rad, weil es gut für die Gesundheit ist",
        "würde gern Rad fahren, aber der Weg ist zu gefährlich",
        "fährt nur bei gutem Wetter mit dem Fahrrad",
        "spart ohne Auto viel Geld",
        "braucht wegen der Kinder morgens das Auto",
        "ist mit dem Rad schneller als mit dem Auto",
        "fährt lieber mit Kollegen zusammen in einem Auto"
       ],
       "fest": true
      },
      {
       "von": "Person 5 — Bernd",
       "wer": "Mann",
       "text": "Ich habe mein Auto letztes Jahr verkauft, und ich vermisse es kein bisschen. Rechnen Sie mal nach: Benzin, Versicherung, Reparaturen, Parkhaus. Das waren bei mir fast vierhundert Euro im Monat. Jetzt habe ich ein gutes Fahrrad und für schlechte Tage ein Monatsticket. Von dem Geld, das übrig bleibt, mache ich jetzt jedes Jahr einen schönen Urlaub.",
       "frage": "Welche Aussage passt zu Bernd?",
       "loesung": 3,
       "stelle": "Das waren bei mir fast vierhundert Euro im Monat.",
       "erklaerung": "Er rechnet die Kosten vor. Ohne Auto bleibt viel Geld übrig.",
       "opt": [
        "fährt Rad, weil es gut für die Gesundheit ist",
        "würde gern Rad fahren, aber der Weg ist zu gefährlich",
        "fährt nur bei gutem Wetter mit dem Fahrrad",
        "spart ohne Auto viel Geld",
        "braucht wegen der Kinder morgens das Auto",
        "ist mit dem Rad schneller als mit dem Auto",
        "fährt lieber mit Kollegen zusammen in einem Auto"
       ],
       "fest": true
      }
     ]
    },
    {
     "nr": 5,
     "art": "ansage",
     "aufgaben": [
      {
       "von": "Anrufbeantworter — Sprachschule Lingua",
       "wer": "Frau",
       "text": "Hallo Herr Haddad, hier ist Frau Brenner von der Sprachschule Lingua. Ihr Kurs am Montag findet diese Woche nicht im Raum zwölf statt, sondern im Raum vierundzwanzig im zweiten Stock. Im Raum zwölf wird nämlich gerade renoviert. Die Uhrzeit bleibt gleich, und auch Ihre Lehrerin ist dieselbe. Bis Montag und schönen Abend noch!",
       "notiz": {
        "titel": "Telefonnotiz",
        "zeilen": [
         "Anruf von: Sprachschule Lingua",
         "Thema: Kurs am Montag"
        ],
        "feld": "Neuer Raum:",
        "loesungen": [
         "24",
         "vierundzwanzig",
         "Raum 24",
         "Raum vierundzwanzig",
         "Nr. 24"
        ]
       },
       "stelle": "sondern im Raum vierundzwanzig im zweiten Stock",
       "erklaerung": "Raum zwölf wird renoviert. Der Kurs ist im Raum vierundzwanzig.",
       "frage": "Ergänze die Telefonnotiz."
      },
      {
       "von": "Anrufbeantworter — Paketdienst",
       "wer": "Mann",
       "text": "Guten Tag, hier ist Ihr Paketdienst. Wir konnten Ihr Paket heute leider nicht zustellen, weil niemand zu Hause war. Wir haben es deshalb bei Ihrer Nachbarin abgegeben, bei Frau Klein im Erdgeschoss. Falls Sie das Paket nicht bekommen, können Sie es ab morgen auch in der Filiale abholen. Vielen Dank.",
       "notiz": {
        "titel": "Telefonnotiz",
        "zeilen": [
         "Anruf von: Paketdienst",
         "Thema: Paket nicht zugestellt"
        ],
        "feld": "Paket ist bei:",
        "loesungen": [
         "Frau Klein",
         "Nachbarin Frau Klein",
         "der Nachbarin Frau Klein",
         "Frau Klein, Erdgeschoss",
         "Klein"
        ]
       },
       "stelle": "bei Frau Klein im Erdgeschoss",
       "erklaerung": "Die Filiale ist nur eine zweite Möglichkeit. Das Paket ist jetzt bei Frau Klein.",
       "frage": "Ergänze die Telefonnotiz."
      },
      {
       "von": "Anrufbeantworter — Tierarztpraxis am Park",
       "wer": "Frau",
       "text": "Hallo Familie Meier, hier ist die Tierarztpraxis am Park. Die Blutwerte von Ihrer Katze Mimi sind da, und alles ist in Ordnung. Mimi braucht aber noch eine Impfung. Bitte kommen Sie dafür in den nächsten zwei Wochen vorbei, am besten vormittags. Einen Termin brauchen Sie nicht. Einen schönen Tag noch!",
       "notiz": {
        "titel": "Telefonnotiz",
        "zeilen": [
         "Anruf von: Tierarztpraxis",
         "Thema: Blutwerte von Mimi sind gut"
        ],
        "feld": "Mimi braucht noch:",
        "loesungen": [
         "eine Impfung",
         "Impfung",
         "Impfung, vormittags"
        ]
       },
       "stelle": "Mimi braucht aber noch eine Impfung.",
       "erklaerung": "Die Blutwerte sind in Ordnung. Nach „aber\" kommt, was noch fehlt: eine Impfung.",
       "frage": "Ergänze die Telefonnotiz."
      },
      {
       "von": "Anrufbeantworter — Chef Herr Albers",
       "wer": "Mann",
       "text": "Hallo Frau Kovač, hier ist Albers. Kurze Info für morgen: Das Meeting mit dem Kunden beginnt nicht um neun, wir haben es auf vierzehn Uhr verschoben. Bitte bringen Sie die Präsentation auf einem Stick mit, der Laptop im Besprechungsraum funktioniert nicht. Danke und bis morgen.",
       "notiz": {
        "titel": "Telefonnotiz",
        "zeilen": [
         "Anruf von: Herr Albers",
         "Thema: Meeting mit dem Kunden, Präsentation auf Stick"
        ],
        "feld": "Meeting morgen um:",
        "loesungen": [
         "14 Uhr",
         "14:00 Uhr",
         "14.00 Uhr",
         "14:00",
         "14.00",
         "14",
         "vierzehn Uhr",
         "2 Uhr nachmittags",
         "zwei Uhr nachmittags"
        ]
       },
       "stelle": "wir haben es auf vierzehn Uhr verschoben",
       "erklaerung": "Neun Uhr gilt nicht mehr. „verschoben auf\" nennt die neue Zeit.",
       "frage": "Ergänze die Telefonnotiz."
      },
      {
       "von": "Anrufbeantworter — Stadtbibliothek",
       "wer": "Frau",
       "text": "Guten Tag, hier ist die Stadtbibliothek. Die Nachricht ist für Herrn Jansen. Sie haben noch zwei Bücher bei uns ausgeliehen, und die Leihfrist ist schon seit einer Woche vorbei. Bitte bringen Sie die Bücher bis Freitag zurück. Sonst müssen Sie eine Gebühr von fünf Euro bezahlen. Vielen Dank.",
       "notiz": {
        "titel": "Telefonnotiz",
        "zeilen": [
         "Anruf von: Stadtbibliothek",
         "Thema: zwei Bücher zurückgeben"
        ],
        "feld": "Zurückbringen bis:",
        "loesungen": [
         "Freitag",
         "Fr",
         "Fr.",
         "bis Freitag",
         "am Freitag"
        ]
       },
       "stelle": "Bitte bringen Sie die Bücher bis Freitag zurück.",
       "erklaerung": "„seit einer Woche\" ist die Vergangenheit. Die Frist ist Freitag.",
       "frage": "Ergänze die Telefonnotiz."
      }
     ]
    }
   ]
  },
  {
   "id": "ta2b1hl2",
   "titel": "Prüfungslauf 2",
   "minuten": 35,
   "teile": [
    {
     "nr": 1,
     "art": "gespraech",
     "aufgaben": [
      {
       "ort": "Gespräch — Abschnitt 1",
       "zeilen": [
        {
         "wer": "Mann",
         "text": "Amira, schau mal, das neue Programm von der Volkshochschule ist da. Du wolltest doch Englisch lernen."
        },
        {
         "wer": "Frau",
         "text": "Ja, wollte ich. Aber der Englischkurs ist immer morgens, und da arbeite ich. Ich nehme den Computerkurs am Abend. Den brauche ich sowieso für die Arbeit."
        }
       ],
       "frage": "Welchen Kurs macht Amira?",
       "loesung": 4,
       "stelle": "Ich nehme den Computerkurs am Abend.",
       "erklaerung": "Englisch ist morgens, das geht nicht. Sie nimmt den Computerkurs.",
       "opt": [
        "Schwimmen",
        "Kochen",
        "Yoga",
        "Gitarre",
        "Computer",
        "Englisch",
        "Tanzen"
       ],
       "fest": true
      },
      {
       "ort": "Gespräch — Abschnitt 2",
       "zeilen": [
        {
         "wer": "Frau",
         "text": "Und du, Stefan? Du sprichst doch seit Jahren vom Gitarrespielen."
        },
        {
         "wer": "Mann",
         "text": "Ach, die Gitarre. Nein. Mein Arzt sagt, ich soll mehr für meinen Rücken tun. Ich mache Yoga, immer mittwochs um sieben."
        }
       ],
       "frage": "Welchen Kurs macht Stefan?",
       "loesung": 2,
       "stelle": "Ich mache Yoga, immer mittwochs um sieben.",
       "erklaerung": "Gitarre ist nur ein alter Wunsch. Wegen des Rückens macht Stefan Yoga.",
       "opt": [
        "Schwimmen",
        "Kochen",
        "Yoga",
        "Gitarre",
        "Computer",
        "Englisch",
        "Tanzen"
       ],
       "fest": true
      },
      {
       "ort": "Gespräch — Abschnitt 3",
       "zeilen": [
        {
         "wer": "Frau",
         "text": "Leon braucht auch ein Hobby. Er sitzt nur vor dem Handy."
        },
        {
         "wer": "Mann",
         "text": "Er hat gesagt, er will Gitarre lernen. Ich schenke ihm meine alte Gitarre, dann kann er den Kurs machen."
        }
       ],
       "frage": "Welchen Kurs macht Leon?",
       "loesung": 3,
       "stelle": "er will Gitarre lernen",
       "erklaerung": "Leon bekommt die alte Gitarre vom Vater und macht den Gitarrenkurs.",
       "opt": [
        "Schwimmen",
        "Kochen",
        "Yoga",
        "Gitarre",
        "Computer",
        "Englisch",
        "Tanzen"
       ],
       "fest": true
      },
      {
       "ort": "Gespräch — Abschnitt 4",
       "zeilen": [
        {
         "wer": "Frau",
         "text": "Und Mia? Sie ist im Wasser noch nicht so sicher."
        },
        {
         "wer": "Mann",
         "text": "Richtig, und im Sommer fahren wir an den See. Sie macht zuerst den Schwimmkurs für Kinder. Tanzen kann sie im Herbst immer noch."
        }
       ],
       "frage": "Welchen Kurs macht Mia?",
       "loesung": 0,
       "stelle": "Sie macht zuerst den Schwimmkurs für Kinder.",
       "erklaerung": "Tanzen kommt erst später. Jetzt macht Mia den Schwimmkurs.",
       "opt": [
        "Schwimmen",
        "Kochen",
        "Yoga",
        "Gitarre",
        "Computer",
        "Englisch",
        "Tanzen"
       ],
       "fest": true
      },
      {
       "ort": "Gespräch — Abschnitt 5",
       "zeilen": [
        {
         "wer": "Frau",
         "text": "Und deine Mutter? Sie kocht doch so gern."
        },
        {
         "wer": "Mann",
         "text": "Gerade deshalb braucht sie keinen Kochkurs, sagt sie. Sie will mit ihrer Nachbarin zum Tanzkurs gehen. Stell dir vor, mit achtzig Jahren!"
        }
       ],
       "frage": "Welchen Kurs macht Stefans Mutter?",
       "loesung": 6,
       "stelle": "Sie will mit ihrer Nachbarin zum Tanzkurs gehen.",
       "erklaerung": "Sie kocht gern, aber einen Kochkurs braucht sie nicht. Sie geht tanzen.",
       "opt": [
        "Schwimmen",
        "Kochen",
        "Yoga",
        "Gitarre",
        "Computer",
        "Englisch",
        "Tanzen"
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
         "text": "Frau Okafor, ich muss Ihre Tour für morgen ändern. Frau Wagner kommt heute aus dem Krankenhaus nach Hause."
        },
        {
         "wer": "Frau",
         "text": "Ach, schön. Dann besuche ich sie morgen früh als Erste?"
        },
        {
         "wer": "Mann",
         "text": "Nein, morgens ist ihre Tochter bei ihr. Besuchen Sie Frau Wagner bitte erst am Mittag."
        }
       ],
       "satz": "Frau Okafor besucht Frau Wagner morgen als Erste.",
       "loesung": false,
       "stelle": "Besuchen Sie Frau Wagner bitte erst am Mittag.",
       "erklaerung": "Morgens ist die Tochter da. Frau Okafor kommt erst mittags."
      },
      {
       "ort": "Gespräch — Abschnitt 2",
       "zeilen": [
        {
         "wer": "Frau",
         "text": "In Ordnung. Braucht sie jetzt mehr Hilfe als vorher?"
        },
        {
         "wer": "Mann",
         "text": "Ja. Sie kann noch nicht allein duschen, und sie bekommt neue Tabletten. Der Plan liegt im Ordner bei ihr zu Hause."
        }
       ],
       "satz": "Der neue Medikamentenplan ist in der Wohnung von Frau Wagner.",
       "loesung": true,
       "stelle": "Der Plan liegt im Ordner bei ihr zu Hause.",
       "erklaerung": "Der Plan für die Tabletten liegt bei Frau Wagner zu Hause."
      },
      {
       "ort": "Gespräch — Abschnitt 3",
       "zeilen": [
        {
         "wer": "Frau",
         "text": "Und Herr Schmitz? Zu ihm fahre ich doch immer um elf."
        },
        {
         "wer": "Mann",
         "text": "Den übernimmt morgen Ihr Kollege Mario. Er ist sowieso in der Gegend."
        }
       ],
       "satz": "Frau Okafor besucht Herrn Schmitz morgen nicht.",
       "loesung": true,
       "stelle": "Den übernimmt morgen Ihr Kollege Mario.",
       "erklaerung": "Morgen fährt Mario zu Herrn Schmitz."
      },
      {
       "ort": "Gespräch — Abschnitt 4",
       "zeilen": [
        {
         "wer": "Frau",
         "text": "Gut. Noch etwas: Im Auto leuchtet seit gestern eine Warnlampe."
        },
        {
         "wer": "Mann",
         "text": "Oh, danke für den Hinweis. Fahren Sie heute bitte nicht mehr damit. Nehmen Sie das kleine Auto, der Schlüssel hängt im Büro."
        }
       ],
       "satz": "Frau Okafor soll heute mit demselben Auto weiterfahren.",
       "loesung": false,
       "stelle": "Fahren Sie heute bitte nicht mehr damit.",
       "erklaerung": "Sie soll das kleine Auto nehmen, nicht das Auto mit der Warnlampe."
      },
      {
       "ort": "Gespräch — Abschnitt 5",
       "zeilen": [
        {
         "wer": "Frau",
         "text": "Und die Teambesprechung am Freitag? Findet die statt?"
        },
        {
         "wer": "Mann",
         "text": "Ja, aber wir treffen uns nicht im Büro, sondern online. Viele sind an dem Tag unterwegs. Den Link schicke ich Ihnen per E-Mail."
        }
       ],
       "satz": "Die Teambesprechung findet im Büro statt.",
       "loesung": false,
       "stelle": "wir treffen uns nicht im Büro, sondern online",
       "erklaerung": "Die Besprechung ist online. Nach „sondern\" kommt die richtige Information."
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
       "text": "Information für die Passagiere nach Palma. Ihr Flug startet heute nicht von Ausgang zwölf, sondern von Ausgang achtzehn. Das Einsteigen beginnt in etwa zehn Minuten. Bitte halten Sie Ihre Bordkarte und Ihren Ausweis bereit. Vielen Dank.",
       "satz": "Das Einsteigen in das Flugzeug hat schon begonnen.",
       "loesung": false,
       "stelle": "Das Einsteigen beginnt in etwa zehn Minuten.",
       "erklaerung": "Das Einsteigen beginnt erst in zehn Minuten."
      },
      {
       "von": "Anrufbeantworter einer Hausarztpraxis",
       "wer": "Frau",
       "text": "Hausarztpraxis am Lindenplatz, guten Tag. Im Moment sind alle Leitungen besetzt. Wenn Sie nur ein Rezept bestellen möchten, sprechen Sie bitte nach dem Signalton Ihren Namen, Ihr Geburtsdatum und das Medikament auf das Band. Sie können das Rezept dann am nächsten Werktag abholen.",
       "satz": "Ein bestelltes Rezept kann man am selben Tag abholen.",
       "loesung": false,
       "stelle": "Sie können das Rezept dann am nächsten Werktag abholen.",
       "erklaerung": "Das Rezept ist erst am nächsten Werktag fertig."
      },
      {
       "von": "Veranstaltungstipp im Radio",
       "wer": "Mann",
       "text": "Und hier noch ein Tipp für das Wochenende: Am Sonntag ist im Stadtpark wieder Flohmarkt. Von neun bis sechzehn Uhr können Sie dort stöbern und günstig einkaufen. Wer selbst etwas verkaufen möchte, muss sich bis Freitag anmelden. Ein Stand kostet zehn Euro.",
       "satz": "Wer etwas verkaufen will, muss sich vorher anmelden.",
       "loesung": true,
       "stelle": "muss sich bis Freitag anmelden",
       "erklaerung": "Verkäufer müssen sich bis Freitag anmelden."
      },
      {
       "von": "Durchsage an der Bushaltestelle",
       "wer": "Frau",
       "text": "Liebe Fahrgäste, wegen eines Streiks fahren heute keine Busse in der Stadt. Die Straßenbahnen fahren, aber nur alle zwanzig Minuten. Ab morgen früh fahren alle Busse wieder nach Fahrplan. Wir bitten um Ihr Verständnis.",
       "satz": "Morgen fahren die Busse wieder normal.",
       "loesung": true,
       "stelle": "Ab morgen früh fahren alle Busse wieder nach Fahrplan.",
       "erklaerung": "Der Streik ist nur heute, morgen fahren die Busse wieder."
      },
      {
       "von": "Ansage im Kino",
       "wer": "Mann",
       "text": "Hallo und willkommen beim Kino Sternenhimmel. Bitte beachten Sie: In dieser Woche ist unser großer Saal wegen Renovierung geschlossen. Alle Filme laufen im kleinen Saal. Deshalb gibt es weniger Plätze. Reservieren Sie Ihre Karten am besten vorher im Internet.",
       "satz": "Diese Woche gibt es im Kino mehr Plätze als sonst.",
       "loesung": false,
       "stelle": "Deshalb gibt es weniger Plätze.",
       "erklaerung": "Nur der kleine Saal ist offen, also gibt es weniger Plätze."
      }
     ]
    },
    {
     "nr": 4,
     "art": "diskussion",
     "aufgaben": [
      {
       "von": "Person 1 — Maria",
       "wer": "Frau",
       "text": "Ich habe es zuerst allein mit einer App probiert. Das war billig, und ich konnte lernen, wann ich wollte. Das Problem war nur: Ich wollte fast nie. Nach drei Wochen habe ich gar nicht mehr gelernt. Jetzt gehe ich zweimal pro Woche in einen Kurs an der Volkshochschule. Da muss ich hin, und das ist genau das, was ich brauche.",
       "frage": "Welche Aussage passt zu Maria?",
       "loesung": 1,
       "stelle": "Da muss ich hin, und das ist genau das, was ich brauche.",
       "erklaerung": "Die App hat nicht funktioniert, weil sie allein nicht lernt. Der Kurs gibt ihr feste Termine.",
       "opt": [
        "lernt am meisten bei der Arbeit mit den Kollegen",
        "braucht einen Kurs, weil sie allein nicht regelmäßig lernt",
        "lernt am liebsten mit Serien und Musik",
        "findet Grammatik am wichtigsten",
        "hat durch ein Hobby Kontakt zu Deutschen gefunden",
        "lernt mit einer App, weil das flexibel ist",
        "hat Angst, beim Sprechen Fehler zu machen"
       ],
       "fest": true
      },
      {
       "von": "Person 2 — Dimitri",
       "wer": "Mann",
       "text": "In meiner Firma sprechen fast alle Englisch, deshalb habe ich lange kaum Deutsch gesprochen. Dann bin ich in einen Chor gegangen. Wir singen jeden Donnerstag, und danach sitzen wir noch zusammen und reden. Da spricht niemand Englisch mit mir. Am Anfang habe ich wenig verstanden, aber heute habe ich dort richtig gute Freunde.",
       "frage": "Welche Aussage passt zu Dimitri?",
       "loesung": 4,
       "stelle": "Dann bin ich in einen Chor gegangen.",
       "erklaerung": "Im Chor, also über ein Hobby, hat er deutsche Freunde gefunden. Bei der Arbeit spricht er Englisch.",
       "opt": [
        "lernt am meisten bei der Arbeit mit den Kollegen",
        "braucht einen Kurs, weil sie allein nicht regelmäßig lernt",
        "lernt am liebsten mit Serien und Musik",
        "findet Grammatik am wichtigsten",
        "hat durch ein Hobby Kontakt zu Deutschen gefunden",
        "lernt mit einer App, weil das flexibel ist",
        "hat Angst, beim Sprechen Fehler zu machen"
       ],
       "fest": true
      },
      {
       "von": "Person 3 — Sun-Hee",
       "wer": "Frau",
       "text": "Ich bin ehrlich gesagt kein Fan von Lehrbüchern, das ist mir zu trocken. Ich schaue jeden Abend eine deutsche Serie, zuerst mit Untertiteln, dann noch einmal ohne. Und beim Kochen höre ich deutsche Musik und singe mit, auch wenn meine Nachbarn das vielleicht nicht so toll finden. So lerne ich viele Wörter, die im Buch gar nicht stehen.",
       "frage": "Welche Aussage passt zu Sun-Hee?",
       "loesung": 2,
       "stelle": "Ich schaue jeden Abend eine deutsche Serie",
       "erklaerung": "Serien am Abend, Musik beim Kochen: Sie lernt mit Medien statt mit Büchern.",
       "opt": [
        "lernt am meisten bei der Arbeit mit den Kollegen",
        "braucht einen Kurs, weil sie allein nicht regelmäßig lernt",
        "lernt am liebsten mit Serien und Musik",
        "findet Grammatik am wichtigsten",
        "hat durch ein Hobby Kontakt zu Deutschen gefunden",
        "lernt mit einer App, weil das flexibel ist",
        "hat Angst, beim Sprechen Fehler zu machen"
       ],
       "fest": true
      },
      {
       "von": "Person 4 — Carlos",
       "wer": "Mann",
       "text": "Ich arbeite in einer Autowerkstatt, und meine Kollegen sprechen nur Deutsch, sogar ziemlich viel Dialekt. Die ersten Monate waren hart. Aber ich habe jeden Tag zugehört, nachgefragt und mitgeredet, in der Pause und bei der Arbeit. Einen Kurs habe ich nur ganz am Anfang gemacht. Am meisten gelernt habe ich aber in der Werkstatt.",
       "frage": "Welche Aussage passt zu Carlos?",
       "loesung": 0,
       "stelle": "Am meisten gelernt habe ich aber in der Werkstatt.",
       "erklaerung": "Der Kurs war nur am Anfang. Gelernt hat er vor allem mit den Kollegen.",
       "opt": [
        "lernt am meisten bei der Arbeit mit den Kollegen",
        "braucht einen Kurs, weil sie allein nicht regelmäßig lernt",
        "lernt am liebsten mit Serien und Musik",
        "findet Grammatik am wichtigsten",
        "hat durch ein Hobby Kontakt zu Deutschen gefunden",
        "lernt mit einer App, weil das flexibel ist",
        "hat Angst, beim Sprechen Fehler zu machen"
       ],
       "fest": true
      },
      {
       "von": "Person 5 — Olena",
       "wer": "Frau",
       "text": "Ich verstehe eigentlich schon ziemlich viel, und Grammatik kann ich auch gut. Aber wenn ich sprechen soll, zum Beispiel beim Arzt oder im Amt, werde ich ganz nervös. Ich denke immer, jetzt mache ich bestimmt einen Fehler, und die Leute lachen. Dann sage ich lieber gar nichts oder spreche Englisch. Das ärgert mich selbst am meisten.",
       "frage": "Welche Aussage passt zu Olena?",
       "loesung": 6,
       "stelle": "jetzt mache ich bestimmt einen Fehler",
       "erklaerung": "Grammatik ist die Falle. Ihr Problem ist die Angst vor Fehlern beim Sprechen.",
       "opt": [
        "lernt am meisten bei der Arbeit mit den Kollegen",
        "braucht einen Kurs, weil sie allein nicht regelmäßig lernt",
        "lernt am liebsten mit Serien und Musik",
        "findet Grammatik am wichtigsten",
        "hat durch ein Hobby Kontakt zu Deutschen gefunden",
        "lernt mit einer App, weil das flexibel ist",
        "hat Angst, beim Sprechen Fehler zu machen"
       ],
       "fest": true
      }
     ]
    },
    {
     "nr": 5,
     "art": "ansage",
     "aufgaben": [
      {
       "von": "Anrufbeantworter — Lindenschule, Frau Hoffmann",
       "wer": "Frau",
       "text": "Guten Tag, hier ist Frau Hoffmann, die Klassenlehrerin von Emma. Ich möchte Sie an den Elternabend erinnern. Er ist am Dienstag um neunzehn Uhr dreißig, aber nicht wie geplant im Klassenzimmer, sondern in der Aula, weil sehr viele Eltern kommen. Wir sprechen über die Klassenfahrt. Bis Dienstag!",
       "notiz": {
        "titel": "Telefonnotiz",
        "zeilen": [
         "Anruf von: Frau Hoffmann, Klassenlehrerin",
         "Thema: Elternabend Dienstag, 19:30 Uhr"
        ],
        "feld": "Ort:",
        "loesungen": [
         "Aula",
         "in der Aula",
         "die Aula",
         "Aula der Schule"
        ]
       },
       "stelle": "sondern in der Aula",
       "erklaerung": "Das Klassenzimmer war der alte Plan. Der Elternabend ist in der Aula.",
       "frage": "Ergänze die Telefonnotiz."
      },
      {
       "von": "Anrufbeantworter — Möbelhaus Wohnwelt",
       "wer": "Mann",
       "text": "Guten Tag Frau Novak, hier ist das Möbelhaus Wohnwelt. Ihr neues Sofa wird am Freitag geliefert. Unser Fahrer kommt zwischen dreizehn und sechzehn Uhr. Bitte sorgen Sie dafür, dass jemand zu Hause ist. Ihr altes Sofa nehmen wir gern mit, das kostet dann zusätzlich fünfundzwanzig Euro. Vielen Dank!",
       "notiz": {
        "titel": "Telefonnotiz",
        "zeilen": [
         "Anruf von: Möbelhaus Wohnwelt",
         "Thema: Lieferung Sofa, Freitag"
        ],
        "feld": "Altes Sofa mitnehmen kostet:",
        "loesungen": [
         "25 Euro",
         "25 €",
         "25,00 €",
         "25,- €",
         "25",
         "fünfundzwanzig Euro"
        ]
       },
       "stelle": "das kostet dann zusätzlich fünfundzwanzig Euro",
       "erklaerung": "Dreizehn und sechzehn sind Uhrzeiten. Das Mitnehmen kostet fünfundzwanzig Euro.",
       "frage": "Ergänze die Telefonnotiz."
      },
      {
       "von": "Anrufbeantworter — Schwester Anja",
       "wer": "Frau",
       "text": "Hallo, hier ist Anja. Du, den Geburtstag von Mama feiern wir doch nicht bei mir, sondern bei Tante Rita im Garten, weil bei mir einfach zu wenig Platz ist. Kannst du bitte einen Kuchen mitbringen? Am liebsten Apfelkuchen, den mag Mama am meisten. Ruf mich an, wenn du noch Fragen hast. Bis dann!",
       "notiz": {
        "titel": "Telefonnotiz",
        "zeilen": [
         "Anruf von: Anja",
         "Thema: Geburtstag von Mama, Apfelkuchen mitbringen"
        ],
        "feld": "Ort der Feier:",
        "loesungen": [
         "bei Tante Rita",
         "Tante Rita",
         "bei Tante Rita im Garten",
         "im Garten von Tante Rita",
         "Garten von Tante Rita",
         "Garten Tante Rita"
        ]
       },
       "stelle": "sondern bei Tante Rita im Garten",
       "erklaerung": "Bei Anja ist zu wenig Platz. Gefeiert wird bei Tante Rita.",
       "frage": "Ergänze die Telefonnotiz."
      },
      {
       "von": "Anrufbeantworter — Firma Brandt & Söhne",
       "wer": "Mann",
       "text": "Guten Tag Herr Kaya, hier ist Michael Brandt von der Firma Brandt und Söhne. Vielen Dank für Ihre Bewerbung. Wir möchten Sie gern zu einem Vorstellungsgespräch einladen, und zwar am zwölften März. Bitte bringen Sie Ihre Zeugnisse mit. Rufen Sie mich zurück, dann besprechen wir die Uhrzeit. Auf Wiederhören.",
       "notiz": {
        "titel": "Telefonnotiz",
        "zeilen": [
         "Anruf von: Herr Brandt",
         "Thema: Vorstellungsgespräch, Zeugnisse mitbringen"
        ],
        "feld": "Termin am:",
        "loesungen": [
         "12. März",
         "12 März",
         "12.3.",
         "12.03.",
         "12.3",
         "12.03",
         "zwölften März",
         "zwölfter März",
         "am 12. März"
        ]
       },
       "stelle": "und zwar am zwölften März",
       "erklaerung": "Das Datum ist der zwölfte März. Die Uhrzeit fehlt noch.",
       "frage": "Ergänze die Telefonnotiz."
      },
      {
       "von": "Anrufbeantworter — Freund Malik",
       "wer": "Mann",
       "text": "Hallo, hier ist Malik. Für heute Abend habe ich schon die Karten gekauft. Der Film fängt um zwanzig Uhr fünfzehn an. Wir treffen uns aber eine Viertelstunde vorher direkt am Eingang vom Kino, nicht am Bahnhof, okay? Die Karte kannst du mir später bezahlen. Bis nachher!",
       "notiz": {
        "titel": "Telefonnotiz",
        "zeilen": [
         "Anruf von: Malik",
         "Thema: Kino heute, Film um 20:15 Uhr"
        ],
        "feld": "Treffpunkt:",
        "loesungen": [
         "am Eingang vom Kino",
         "Eingang vom Kino",
         "Eingang Kino",
         "Kinoeingang",
         "am Kinoeingang",
         "am Eingang",
         "Eingang",
         "vor dem Kino"
        ]
       },
       "stelle": "direkt am Eingang vom Kino, nicht am Bahnhof",
       "erklaerung": "Nicht der Bahnhof: Treffpunkt ist der Eingang vom Kino.",
       "frage": "Ergänze die Telefonnotiz."
      }
     ]
    }
   ]
  }
 ]
};
