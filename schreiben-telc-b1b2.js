/* ============================================================
   deutschoderwas club — SCHREIBEN telc Deutsch B1·B2 Beruf

   Aufbau nach dem offiziellen telc-Format (Übungstest 1 B1·B2 Beruf
   und „Tipps zur Prüfungsvorbereitung", geprüft 03.11.2026). Alle
   Texte und Aufgaben eigene, Kontext Arbeitswelt.
   Erzeugt aus scratchpad/telcb1b2 mit bau.js.
   ============================================================ */

window.SCHREIBEN_TELC_B1B2 = {
 "niveau": "telcB1B2",
 "pruefung": "telc Deutsch B1·B2 Beruf",
 "minuten": 45,
 "punkte": 40,
 "intro": "Bei telc B1·B2 Beruf schreibst du in fünfundvierzig Minuten zwei E-Mails: eine an Kunden, Lieferanten oder Interessenten (Sie-Form) und eine an Kollegen oder Vorgesetzte. Jede hat drei Inhaltspunkte. Bewertet wird nach vier Kriterien mit je bis zu fünf Punkten, zusammen höchstens 40. B1 ab 14, B2 ab 30 Punkten.",
 "stufen": [
  {
   "nr": 1,
   "titel": "Die zwei E-Mails",
   "zeichen": "🖼️",
   "was": "Sie an Kunden, du an Kollegen: Betreff, Anrede, Schluss."
  },
  {
   "nr": 2,
   "titel": "Drei Punkte ausbauen",
   "zeichen": "🧩",
   "was": "Jeder Punkt in mehreren Sätzen, verbunden und höflich."
  },
  {
   "nr": 3,
   "titel": "Die zwei Aufgaben",
   "zeichen": "✉️",
   "was": "Mails an Kunden und an Kollegen, mit Muster."
  },
  {
   "nr": 4,
   "titel": "Die Prüfung",
   "zeichen": "⏱️",
   "was": "Beide Mails, fünfundvierzig Minuten mit Uhr."
  }
 ],
 "bloecke": [
  {
   "id": "tbb12s1",
   "stufe": 1,
   "titel": "Sie-Mail an Kunden: Betreff, Anrede, Einleitung, Schluss",
   "kurz": "Der Rahmen einer E-Mail an Kunden und Lieferanten sitzt, bevor der Inhalt kommt",
   "ziel": "Nach diesem Block schreibst du Betreff, Anrede, ersten Satz und Schluss einer Sie-Mail an Kunden, Lieferanten oder Interessenten sicher und ohne langes Nachdenken.",
   "zeichen": "✉️",
   "farbe": "turq",
   "aufgaben": [
    {
     "art": "wahl",
     "frage": "Du schreibst einem Kunden, dass seine Bestellung später kommt. Welcher Betreff ist am besten?",
     "opt": [
      "Lieferung",
      "Ihre Bestellung 4471: neuer Liefertermin 14. März",
      "Leider schlechte Nachrichten!!!"
     ],
     "loesung": 1,
     "erklaerung": "Ein guter Betreff nennt Bestellung und Thema. Der Kunde weiß sofort, worum es geht, ohne die Mail zu öffnen."
    },
    {
     "art": "wahl",
     "frage": "Die Kundin heißt Frau Yıldız. Welche Anrede ist richtig?",
     "opt": [
      "Sehr geehrte Frau Yıldız,",
      "Sehr geehrter Frau Yıldız,",
      "Hallo Yıldız!"
     ],
     "loesung": 0,
     "erklaerung": "„Sehr geehrte“ gehört zu „Frau“, „Sehr geehrter“ zu „Herr“. Nach der Anrede steht ein Komma."
    },
    {
     "art": "wahl",
     "frage": "Ein Kunde hat sich über eine kaputte Lieferung beschwert. Wie beginnst du deine Antwort?",
     "opt": [
      "Ihre Mail ist bei uns angekommen.",
      "wir sind nicht schuld, das war die Post.",
      "vielen Dank für Ihre Nachricht. Es tut mir leid, dass die Ware beschädigt bei Ihnen angekommen ist."
     ],
     "loesung": 2,
     "erklaerung": "Erst bedanken, dann Bedauern zeigen. Der Kunde fühlt sich ernst genommen, bevor die Lösung kommt."
    },
    {
     "art": "wahl",
     "frage": "Du schreibst einer Interessentin zum ersten Mal. Ihr habt euch auf einer Messe kurz gesehen. Wie beginnst du?",
     "opt": [
      "erinnern Sie sich noch an mich?",
      "ich schreibe Ihnen diese E-Mail, weil ich Ihnen schreiben möchte.",
      "wir haben uns am Donnerstag auf der Messe in Leipzig an unserem Stand kurz unterhalten."
     ],
     "loesung": 2,
     "erklaerung": "Wenn du den Kontakt selbst beginnst, sagst du im ersten Satz, woher ihr euch kennt oder warum du schreibst."
    },
    {
     "art": "wahl",
     "frage": "Wie geht es nach „Sehr geehrter Herr Lenz,“ richtig weiter?",
     "opt": [
      "Vielen Dank für Ihr Angebot vom 3. Mai.",
      "vielen Dank für Ihr Angebot vom 3. Mai.",
      "vielen dank für ihr Angebot vom 3. Mai."
     ],
     "loesung": 1,
     "erklaerung": "Nach dem Komma der Anrede schreibst du klein weiter. „Ihr“ als Höflichkeitsform bleibt aber groß."
    },
    {
     "art": "wahl",
     "frage": "Welcher Schlusssatz passt in eine Mail an einen Kunden?",
     "opt": [
      "Wenn Sie noch Fragen haben, erreichen Sie mich direkt unter 0421 55 83 20.",
      "Tschüss und bis dann.",
      "Antworten Sie bitte schnell, wir haben viel zu tun."
     ],
     "loesung": 0,
     "erklaerung": "Ein guter Schluss bietet Hilfe an und nennt einen konkreten Weg, zum Beispiel die Durchwahl."
    },
    {
     "art": "wahl",
     "frage": "Was steht unter „Mit freundlichen Grüßen“?",
     "opt": [
      "Nur der Vorname",
      "Gar nichts, die E-Mail-Adresse reicht",
      "Vorname, Nachname und darunter Abteilung oder Firma"
     ],
     "loesung": 2,
     "erklaerung": "Der Kunde muss sehen, wer schreibt und an wen er sich wenden kann. Nach dem Gruß steht kein Komma."
    },
    {
     "art": "wahl",
     "frage": "Welcher Satz bleibt die ganze Zeit in der Sie-Form?",
     "opt": [
      "Könnten Sie mir bitte deine Kundennummer schicken?",
      "Könnten Sie mir bitte Ihre Kundennummer schicken?",
      "Kannst du mir bitte Ihre Kundennummer schicken?"
     ],
     "loesung": 1,
     "erklaerung": "Ein typischer Fehler in der Prüfung: mitten im Satz von Sie zu du wechseln. Verb und Pronomen müssen zusammenpassen."
    },
    {
     "art": "ordnen",
     "frage": "Bau den ersten Satz einer Antwort.",
     "teile": [
      "vielen Dank",
      "für",
      "Ihre",
      "Bestellung",
      "vom",
      "2. Oktober."
     ],
     "loesung": [
      0,
      1,
      2,
      3,
      4,
      5
     ],
     "erklaerung": "Nach der Anrede beginnt der Satz klein: „vielen Dank für Ihre …“."
    },
    {
     "art": "ordnen",
     "frage": "Bau den Schlusssatz.",
     "teile": [
      "Bei Fragen",
      "können",
      "Sie",
      "mich",
      "gern",
      "direkt",
      "anrufen."
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
     "erklaerung": "„Bei Fragen“ steht auf Position eins, deshalb kommt das Verb „können“ direkt danach."
    }
   ]
  },
  {
   "id": "tbb12s2",
   "stufe": 1,
   "titel": "Du-Mail an Kollegen: locker, aber klar",
   "kurz": "Freundlich und kurz schreiben, ohne dass Informationen fehlen",
   "ziel": "Nach diesem Block schreibst du Kollegen eine Du-Mail, die freundlich klingt und trotzdem alles enthält: wer, was, wann. Und du weißt, wann du bei der Chefin beim Sie bleibst.",
   "zeichen": "💬",
   "farbe": "gold",
   "aufgaben": [
    {
     "art": "wahl",
     "frage": "Du schreibst deinem Kollegen Marco. Ihr duzt euch. Welche Anrede passt?",
     "opt": [
      "Hallo Marco,",
      "Sehr geehrter Marco,",
      "Sehr geehrter Herr Kollege,"
     ],
     "loesung": 0,
     "erklaerung": "Unter Kollegen mit Du ist „Hallo“ plus Vorname normal. „Sehr geehrter“ passt nicht zum Vornamen."
    },
    {
     "art": "wahl",
     "frage": "Welcher Gruß passt am Ende einer Mail an eine Kollegin?",
     "opt": [
      "Hochachtungsvoll, darunter dein voller Name",
      "Viele Grüße, darunter dein Vorname",
      "Mit vorzüglicher Hochachtung"
     ],
     "loesung": 1,
     "erklaerung": "„Viele Grüße“ oder „Liebe Grüße“ sind unter Kollegen üblich. „Hochachtungsvoll“ ist sehr alt und steif."
    },
    {
     "art": "wahl",
     "frage": "Deine Kollegin fragt, ob du am Samstag ihre Frühschicht übernimmst. Welche Antwort ist klar?",
     "opt": [
      "Mal sehen, vielleicht.",
      "Ja, kann sein, sag mal Bescheid.",
      "Klar, ich übernehme deine Frühschicht am Samstag. Kannst du dafür meine Spätschicht am Dienstag nehmen?"
     ],
     "loesung": 2,
     "erklaerung": "Locker heißt nicht ungenau. Die Kollegin muss wissen: Ja oder nein, und was ist mit dem Gegentausch?"
    },
    {
     "art": "wahl",
     "frage": "Welcher Satz ist für eine Mail an eine Kollegin zu unhöflich?",
     "opt": [
      "Kannst du mir die Liste bis Freitag schicken?",
      "Ey, schick mal die Liste, aber zack zack!",
      "Hättest du kurz Zeit, auf die Liste zu schauen?"
     ],
     "loesung": 1,
     "erklaerung": "Auch mit Du bleibt man im Betrieb höflich. Eine Bitte mit „kannst du“ oder „hättest du“ klingt freundlich."
    },
    {
     "art": "wahl",
     "frage": "Du schreibst deiner Teamleiterin. Ihr siezt euch. Welche Anrede passt?",
     "opt": [
      "Hallo Frau Hartmann,",
      "Hi Petra,",
      "Sehr geehrte Damen und Herren,"
     ],
     "loesung": 0,
     "erklaerung": "Intern ist „Hallo Frau …“ mit Sie üblich und höflich genug. „Sehr geehrte Damen und Herren“ ist nur für Unbekannte."
    },
    {
     "art": "wahl",
     "frage": "Welcher Betreff passt zu einer Frage an einen Kollegen?",
     "opt": [
      "Frage",
      "Hilfe!!!",
      "Spätschicht am 12. Oktober: Kannst du tauschen?"
     ],
     "loesung": 2,
     "erklaerung": "Auch intern hilft ein genauer Betreff. Der Kollege sieht sofort, worum es geht und dass er antworten soll."
    },
    {
     "art": "wahl",
     "frage": "Ein Kollege war krank. Du informierst ihn über eine Änderung. Welcher Satz ist am klarsten?",
     "opt": [
      "Es hat sich was geändert, frag am besten mal rum.",
      "Die Inventur ist irgendwie verschoben worden.",
      "Kurz zur Info: Die Inventur ist jetzt am Freitag ab 7 Uhr, nicht mehr am Donnerstag."
     ],
     "loesung": 2,
     "erklaerung": "Neue Information plus alte Information: So versteht der Kollege die Änderung sofort."
    },
    {
     "art": "wahl",
     "frage": "Welche Frage ist grammatisch richtig?",
     "opt": [
      "Haben du morgen um neun kurz Zeit?",
      "Hast du morgen um neun kurz Zeit?",
      "Hast Sie morgen um neun kurz Zeit?"
     ],
     "loesung": 1,
     "erklaerung": "Bei „du“ endet das Verb auf -st: hast, kannst, könntest."
    },
    {
     "art": "ordnen",
     "frage": "Bau die Bitte an einen Kollegen.",
     "teile": [
      "Kannst",
      "du",
      "mir",
      "bis Freitag",
      "kurz",
      "Bescheid",
      "sagen?"
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
     "erklaerung": "Ja/Nein-Frage: Das Modalverb steht vorn, der Infinitiv „sagen“ am Ende."
    },
    {
     "art": "ordnen",
     "frage": "Bau den Dank am Ende.",
     "teile": [
      "Danke",
      "dir",
      "schon mal",
      "für",
      "deine",
      "Hilfe!"
     ],
     "loesung": [
      0,
      1,
      2,
      3,
      4,
      5
     ],
     "erklaerung": "„Danke dir schon mal“ ist ein typischer, freundlicher Schluss unter Kollegen."
    }
   ]
  },
  {
   "id": "tbb12s3",
   "stufe": 2,
   "titel": "Einen Inhaltspunkt ausbauen: Grund, Detail, Bitte",
   "kurz": "Aus einem Stichwort werden drei, vier Sätze mit echtem Inhalt",
   "ziel": "Nach diesem Block machst du aus jedem Inhaltspunkt einen kleinen Absatz: Was ist los, warum, ein konkretes Detail und am Ende eine Bitte oder der nächste Schritt.",
   "zeichen": "🔗",
   "farbe": "rot",
   "aufgaben": [
    {
     "art": "wahl",
     "frage": "Inhaltspunkt: „Liefertermin verschieben“. Welche Lösung ist am besten ausgebaut?",
     "opt": [
      "Leider müssen wir den Liefertermin verschieben, weil unser Zulieferer die Schrauben erst am Montag schickt. Die Ware kann deshalb frühestens am 18. März bei Ihnen sein. Bitte geben Sie mir kurz Bescheid, ob das für Sie in Ordnung ist.",
      "Wir müssen den Liefertermin verschieben.",
      "Wir müssen den Liefertermin verschieben. Das ist schade. Wir finden das auch schade. Es tut uns sehr leid."
     ],
     "loesung": 0,
     "erklaerung": "Grund, neues Datum, Bitte: Jeder Satz bringt eine neue Information. Nur Bedauern zu wiederholen füllt den Punkt nicht."
    },
    {
     "art": "wahl",
     "frage": "Was fehlt hier? „Ich kann am Donnerstag nicht zur Besprechung kommen. Können wir den Termin verschieben?“",
     "opt": [
      "die Bitte",
      "die Anrede",
      "der Grund"
     ],
     "loesung": 2,
     "erklaerung": "Die Bitte ist da, aber nicht warum. Ein kurzer Grund wie „weil ich zur Schulung nach Hannover fahre“ macht den Punkt vollständig."
    },
    {
     "art": "wahl",
     "frage": "Welche Angabe macht eine Reklamation konkreter?",
     "opt": [
      "Das Paket war irgendwie kaputt.",
      "Der Karton war an einer Ecke eingedrückt, und zwei von zwölf Gläsern waren zerbrochen.",
      "Es gab ein Problem mit der Ware."
     ],
     "loesung": 1,
     "erklaerung": "Zahlen und genaue Beschreibungen zeigen, dass du den Punkt wirklich bearbeitet hast."
    },
    {
     "art": "wahl",
     "frage": "Welcher Satz schließt diesen Punkt mit einer Bitte ab?",
     "opt": [
      "Könnten Sie uns bis Mittwoch zwei neue Gläser schicken?",
      "Das war alles zu den Gläsern.",
      "Gläser sind ja leider teuer."
     ],
     "loesung": 0,
     "erklaerung": "Am Ende des Punktes sagst du, was der andere jetzt tun soll, am besten mit Termin."
    },
    {
     "art": "wahl",
     "frage": "Wie viel schreibst du zu einem Inhaltspunkt?",
     "opt": [
      "Ein Satz reicht immer",
      "Zwei bis vier Sätze, damit der Punkt wirklich bearbeitet ist",
      "Mindestens zehn Sätze, je mehr, desto besser"
     ],
     "loesung": 1,
     "erklaerung": "Es gibt keine feste Wortzahl. Aber jeder Punkt soll in mehreren Sätzen ausgeführt werden, sonst gibt es Punktabzug."
    },
    {
     "art": "wahl",
     "frage": "Welcher Satz ist nur Füllmaterial und bringt keine Information?",
     "opt": [
      "Die neue Software läuft ab dem 1. April.",
      "Bitte melden Sie sich bis Freitag an.",
      "Wie Sie sicher wissen, ist Kommunikation im Leben sehr wichtig."
     ],
     "loesung": 2,
     "erklaerung": "Allgemeine Sätze ohne Bezug zur Situation verlängern die Mail, aber die Prüfer zählen sie nicht als Inhalt."
    },
    {
     "art": "wahl",
     "frage": "In welcher Reihenfolge baust du einen Punkt am besten auf?",
     "opt": [
      "Bitte, Gruß, Grund",
      "Worum geht es, dann Grund oder Detail, dann Bitte oder nächster Schritt",
      "Nur Details, keine Bitte"
     ],
     "loesung": 1,
     "erklaerung": "Diese Reihenfolge funktioniert fast immer und hilft dir, in der Prüfung nichts zu vergessen."
    },
    {
     "art": "wahl",
     "frage": "Inhaltspunkt: „Neuen Termin vorschlagen“. Welche Lösung ist am besten?",
     "opt": [
      "Wie wäre es mit Dienstag, dem 9. Mai, um 10 Uhr? Dann ist auch unser Techniker im Haus und kann sich die Maschine gleich mit Ihnen ansehen.",
      "Irgendwann nächste Woche.",
      "Sagen Sie mir einen Termin."
     ],
     "loesung": 0,
     "erklaerung": "Ein konkreter Vorschlag mit Datum, Uhrzeit und Grund zeigt, dass du mitdenkst."
    },
    {
     "art": "ordnen",
     "frage": "Bau den Satz mit dem Grund.",
     "teile": [
      "Der Grund",
      "dafür",
      "ist,",
      "dass",
      "unser Lager",
      "gerade",
      "umgebaut",
      "wird."
     ],
     "loesung": [
      0,
      1,
      2,
      3,
      4,
      5,
      6,
      7
     ],
     "erklaerung": "Im Nebensatz mit „dass“ steht das Verb am Ende: „umgebaut wird“."
    },
    {
     "art": "ordnen",
     "frage": "Bau die Bitte mit Termin.",
     "teile": [
      "Könnten",
      "Sie",
      "mir",
      "bis Freitag",
      "eine kurze",
      "Rückmeldung",
      "geben?"
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
     "erklaerung": "„Könnten Sie“ macht die Bitte höflich, „bis Freitag“ macht sie verbindlich."
    }
   ]
  },
  {
   "id": "tbb12s4",
   "stufe": 2,
   "titel": "Verbinden und höflich bleiben: Konnektoren, Konjunktiv II",
   "kurz": "Sätze sinnvoll verknüpfen und auch Kritik freundlich sagen",
   "ziel": "Nach diesem Block verbindest du deine Sätze mit passenden Konnektoren und formulierst Bitten, Kritik und Absagen so, dass sie im Beruf gut ankommen.",
   "zeichen": "📝",
   "farbe": "lila",
   "aufgaben": [
    {
     "art": "wahl",
     "frage": "Welches Wort passt? „Die Maschine war defekt, ___ konnten wir den Auftrag nicht pünktlich fertig machen.“",
     "opt": [
      "weil",
      "obwohl",
      "deshalb"
     ],
     "loesung": 2,
     "erklaerung": "„deshalb“ zeigt die Folge und steht vor dem Verb: deshalb konnten wir …"
    },
    {
     "art": "wahl",
     "frage": "Welches Wort passt? „Wir liefern am Montag, ___ die Ware rechtzeitig aus Polen kommt.“",
     "opt": [
      "trotzdem",
      "außerdem",
      "falls"
     ],
     "loesung": 2,
     "erklaerung": "„falls“ nennt eine Bedingung. Das Verb steht am Ende: falls die Ware … kommt."
    },
    {
     "art": "wahl",
     "frage": "Welches Wort passt? „Ich übernehme gern die Frühschicht. ___ müsste ich dann am Freitag eine Stunde früher gehen.“",
     "opt": [
      "Weil",
      "Allerdings",
      "Damit"
     ],
     "loesung": 1,
     "erklaerung": "„Allerdings“ schränkt ein, ohne unfreundlich zu klingen. Danach kommt direkt das Verb."
    },
    {
     "art": "wahl",
     "frage": "Welcher Satz ist am höflichsten?",
     "opt": [
      "Würden Sie mir die Rechnung bitte noch einmal schicken?",
      "Schicken Sie mir die Rechnung noch mal.",
      "Sie müssen mir die Rechnung noch mal schicken."
     ],
     "loesung": 0,
     "erklaerung": "Konjunktiv II mit „würden“, „könnten“ oder „wäre“ macht aus einem Befehl eine Bitte."
    },
    {
     "art": "wahl",
     "frage": "Welches Wort passt? „Ich ___ gern wissen, ob die Lieferung versichert ist.“",
     "opt": [
      "werde",
      "wurde",
      "würde"
     ],
     "loesung": 2,
     "erklaerung": "„Ich würde gern wissen“ ist Konjunktiv II und eine typische höfliche Frage im Beruf."
    },
    {
     "art": "wahl",
     "frage": "Du kritisierst einen Lieferanten. Welcher Satz ist sachlich und höflich?",
     "opt": [
      "Ihre Lieferungen sind wieder mal eine Katastrophe.",
      "Leider ist uns aufgefallen, dass die letzten beiden Lieferungen nicht vollständig waren.",
      "Können Sie eigentlich nicht zählen?"
     ],
     "loesung": 1,
     "erklaerung": "„Leider ist uns aufgefallen, dass …“ nennt das Problem klar, ohne den anderen anzugreifen."
    },
    {
     "art": "wahl",
     "frage": "Ein Kunde möchte einen Rabatt, den du nicht geben kannst. Wie sagst du nein?",
     "opt": [
      "Leider ist ein Rabatt in diesem Fall nicht möglich. Wir könnten Ihnen aber die Lieferung kostenlos anbieten.",
      "Nein, das geht nicht.",
      "Rabatt gibt es bei uns nicht, Pech gehabt."
     ],
     "loesung": 0,
     "erklaerung": "Ein Nein mit „leider“ und einem anderen Angebot hält den Kunden."
    },
    {
     "art": "wahl",
     "frage": "Welcher Satz ist richtig?",
     "opt": [
      "Wäre es möglich, dass Sie verschieben den Termin auf Donnerstag?",
      "Wäre es möglich, dass Sie den Termin auf Donnerstag verschieben?",
      "Wäre es möglich, Sie den Termin dass verschieben?"
     ],
     "loesung": 1,
     "erklaerung": "Nach „dass“ steht das Verb am Ende: … auf Donnerstag verschieben."
    },
    {
     "art": "ordnen",
     "frage": "Bau die höfliche Anfrage.",
     "teile": [
      "Wir",
      "hätten",
      "gern",
      "ein Angebot",
      "für",
      "zwanzig",
      "Bürostühle."
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
     "erklaerung": "„Wir hätten gern“ ist Konjunktiv II von „haben“ und klingt höflicher als „wir wollen“."
    },
    {
     "art": "ordnen",
     "frage": "Bau den Satz mit Gegensatz.",
     "teile": [
      "Obwohl",
      "es",
      "sehr",
      "stressig",
      "war,",
      "haben",
      "wir",
      "alles",
      "pünktlich",
      "geschafft."
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
     "erklaerung": "Nach dem Nebensatz mit „obwohl“ kommt im Hauptsatz zuerst das Verb: haben wir …"
    }
   ]
  }
 ],
 "teile": [
  {
   "nr": 1,
   "art": "mitteilung",
   "name": "E-Mail an Kunden",
   "kurz": "Sie-Form, drei Inhaltspunkte",
   "was": "Du schreibst an Kunden, Lieferanten oder Interessenten: eine Antwort auf eine Anfrage oder Reklamation oder eine eigene Anfrage. Alle drei Punkte, dazu Betreff, Anrede, Einleitung und Schluss.",
   "tipp": "Ein Punkt, ein Absatz. Nenne konkrete Daten: Termin, Menge, Preis, Ansprechpartner.",
   "zeichen": "💼",
   "farbe": "turq",
   "punkte": 20,
   "runden": [
    {
     "id": "tb12s1r1",
     "titel": "Runde 1",
     "aufgaben": [
      {
       "id": "bb12a1",
       "typ": "formell",
       "situation": "Sie arbeiten im Kundenservice von Sitzwerk Bürobedarf, einem Versandhändler für Büromöbel. Ein Kunde hat sich per E-Mail beschwert. Antworten Sie ihm.",
       "eingang": {
        "von": "Ralf Brandner, Steuerbüro Brandner",
        "betreff": "Bürostuhl kaputt, Bestellung 58213",
        "text": "Guten Tag,\nam Dienstag ist unser neuer Bürostuhl „Ergo Plus“ angekommen. Schon beim Auspacken haben wir gemerkt, dass die linke Armlehne gebrochen ist. Der Karton war außen ganz, der Schaden muss also vorher passiert sein. Fotos hänge ich an.\nDer Stuhl ist für eine neue Mitarbeiterin, die am Montag anfängt. Bis dahin brauchen wir einen Stuhl, der funktioniert.\nWie geht es jetzt weiter?\nMit freundlichen Grüßen\nRalf Brandner"
       },
       "sorte": "email",
       "an": "Herr Ralf Brandner, Steuerbüro Brandner",
       "betreff": "AW: Bürostuhl kaputt, Bestellung 58213",
       "punkte": [
        {
         "nr": 1,
         "was": "Entschuldigung",
         "hinweis": "Entschuldigen Sie sich für den Schaden und gehen Sie auf die Fotos ein."
        },
        {
         "nr": 2,
         "was": "Lösung",
         "hinweis": "Schlagen Sie eine Lösung vor und nennen Sie einen Termin."
        },
        {
         "nr": 3,
         "was": "Beschädigter Stuhl",
         "hinweis": "Erklären Sie, was mit dem kaputten Stuhl passiert."
        }
       ],
       "muster": "Betreff: AW: Bürostuhl kaputt, Bestellung 58213\nSehr geehrter Herr Brandner,\nvielen Dank für Ihre Nachricht und die Fotos. Es tut mir wirklich leid, dass der Stuhl beschädigt bei Ihnen angekommen ist. Auf den Bildern sieht man gut, dass die Armlehne direkt am Gelenk gebrochen ist. Das ist ein Transportschaden, und dafür zahlen Sie natürlich nichts.\nWir schicken Ihnen einen neuen Stuhl vom gleichen Modell. Er ist bei uns auf Lager und geht morgen früh mit der Spedition raus. Sie bekommen ihn also spätestens am Freitag, rechtzeitig bevor Ihre neue Kollegin anfängt.\nDen kaputten Stuhl müssen Sie nicht selbst verpacken. Der Fahrer nimmt ihn bei der Lieferung einfach wieder mit. Bitte stellen Sie ihn dafür in die Nähe vom Eingang.\nFalls etwas nicht klappt, erreichen Sie mich direkt unter 0561 47 30 18.\nMit freundlichen Grüßen\nKerstin Wolff\nKundenservice, Sitzwerk Bürobedarf",
       "hilfen": [
        "Es tut mir wirklich leid, dass …",
        "Das ist ein Transportschaden, und dafür …",
        "Wir schicken Ihnen …",
        "Sie bekommen ihn spätestens am …",
        "… müssen Sie nicht selbst …",
        "Falls etwas nicht klappt, erreichen Sie mich …"
       ],
       "erklaerung": "Der Kunde will wissen, wie es weitergeht. Das Muster nennt eine klare Lösung mit Termin und nimmt ihm Arbeit ab, statt sich nur zu entschuldigen.",
       "rubrik": [
        {
         "t": "I Aufgabenbewältigung",
         "h": "Sind alle drei Inhaltspunkte ausführlich drin, dazu Betreff, Anrede, Einleitung und Schluss?",
         "stufen": [
          {
           "w": 5,
           "t": "B2+",
           "d": "B2 gut erfüllt"
          },
          {
           "w": 4,
           "t": "B2",
           "d": "B2 erfüllt"
          },
          {
           "w": 3,
           "t": "B1+",
           "d": "B1 gut erfüllt"
          },
          {
           "w": 2,
           "t": "B1",
           "d": "B1 erfüllt"
          },
          {
           "w": 1,
           "t": "A2",
           "d": "A2"
          },
          {
           "w": 0,
           "t": "–",
           "d": "unter A2"
          }
         ]
        },
        {
         "t": "II Kommunikative Gestaltung",
         "h": "Passt der Ton zur Person (Sie oder du)? Ist der Text gut aufgebaut und verbunden?",
         "stufen": [
          {
           "w": 5,
           "t": "B2+",
           "d": "B2 gut erfüllt"
          },
          {
           "w": 4,
           "t": "B2",
           "d": "B2 erfüllt"
          },
          {
           "w": 3,
           "t": "B1+",
           "d": "B1 gut erfüllt"
          },
          {
           "w": 2,
           "t": "B1",
           "d": "B1 erfüllt"
          },
          {
           "w": 1,
           "t": "A2",
           "d": "A2"
          },
          {
           "w": 0,
           "t": "–",
           "d": "unter A2"
          }
         ]
        },
        {
         "t": "III Korrektheit",
         "h": "Grammatik und Rechtschreibung. Vergleiche mit dem Muster.",
         "stufen": [
          {
           "w": 5,
           "t": "B2+",
           "d": "B2 gut erfüllt"
          },
          {
           "w": 4,
           "t": "B2",
           "d": "B2 erfüllt"
          },
          {
           "w": 3,
           "t": "B1+",
           "d": "B1 gut erfüllt"
          },
          {
           "w": 2,
           "t": "B1",
           "d": "B1 erfüllt"
          },
          {
           "w": 1,
           "t": "A2",
           "d": "A2"
          },
          {
           "w": 0,
           "t": "–",
           "d": "unter A2"
          }
         ]
        },
        {
         "t": "IV Wortschatz",
         "h": "Passende, genaue Wörter aus dem Beruf, nicht immer dieselben.",
         "stufen": [
          {
           "w": 5,
           "t": "B2+",
           "d": "B2 gut erfüllt"
          },
          {
           "w": 4,
           "t": "B2",
           "d": "B2 erfüllt"
          },
          {
           "w": 3,
           "t": "B1+",
           "d": "B1 gut erfüllt"
          },
          {
           "w": 2,
           "t": "B1",
           "d": "B1 erfüllt"
          },
          {
           "w": 1,
           "t": "A2",
           "d": "A2"
          },
          {
           "w": 0,
           "t": "–",
           "d": "unter A2"
          }
         ]
        }
       ],
       "max": 20,
       "keineKI": true,
       "ohneWortzahl": true,
       "woerter": 120,
       "platzhalter": "Schreib hier deine E-Mail …",
       "rubrikTitel": "Bewerte dich wie die telc-Prüfer",
       "rubrikHinweis": "Vier Kriterien, je 0 bis 5 Punkte: 5 = B2 gut erfüllt, 4 = B2 erfüllt, 3 = B1 gut erfüllt, 2 = B1 erfüllt, 1 = A2. telc nennt keine Wortzahl; jeder Punkt soll in mehreren Sätzen stehen."
      },
      {
       "id": "bb12a2",
       "typ": "formell",
       "situation": "Sie arbeiten in der Küche des Restaurants „Zur Alten Mühle“. Am Samstag, dem 14. Juni, feiert eine Firma bei Ihnen mit etwa 80 Gästen. Schreiben Sie Ihrem Getränkelieferanten, Herrn Seidel von Getränke Hollmann, eine E-Mail.",
       "sorte": "email",
       "an": "Herr Seidel, Getränke Hollmann",
       "betreff": "Lieferung für Samstag, 14. Juni: größere Menge, früherer Termin",
       "punkte": [
        {
         "nr": 1,
         "was": "Mehr Getränke",
         "hinweis": "Erklären Sie, warum Sie diesmal mehr brauchen, und nennen Sie die Mengen."
        },
        {
         "nr": 2,
         "was": "Liefertermin",
         "hinweis": "Bitten Sie um eine frühere Lieferung und sagen Sie, warum."
        },
        {
         "nr": 3,
         "was": "Rückgabe",
         "hinweis": "Fragen Sie, was mit übrigen Getränken und dem Leergut passiert."
        }
       ],
       "muster": "Betreff: Lieferung für Samstag, 14. Juni: größere Menge, früherer Termin\nSehr geehrter Herr Seidel,\nam Samstag, dem 14. Juni, haben wir eine Firmenfeier mit etwa 80 Gästen im großen Saal. Deshalb brauchen wir diese Woche deutlich mehr als sonst. Zusätzlich zu unserer normalen Bestellung hätten wir gern 15 Kisten Mineralwasser, 10 Kisten Apfelschorle und 6 Fässer Pils.\nNormalerweise kommt Ihr Fahrer samstags gegen 11 Uhr. Diesmal wäre es gut, wenn die Lieferung schon am Freitag bis 15 Uhr da sein könnte. Am Samstagvormittag bauen wir den Saal auf und haben keine Zeit, die Ware anzunehmen und in den Keller zu bringen.\nWahrscheinlich bleibt nach der Feier einiges übrig. Können wir volle Kisten und angebrochene Fässer zurückgeben? Und wann würden Sie das Leergut abholen?\nFür eine kurze Bestätigung bis Mittwoch wäre ich Ihnen dankbar.\nMit freundlichen Grüßen\nTomasz Wiśniewski\nKüchenchef, Restaurant Zur Alten Mühle",
       "hilfen": [
        "Deshalb brauchen wir diese Woche deutlich mehr als sonst.",
        "Zusätzlich zu unserer normalen Bestellung hätten wir gern …",
        "Diesmal wäre es gut, wenn …",
        "Können wir … zurückgeben?",
        "Für eine kurze Bestätigung bis … wäre ich Ihnen dankbar."
       ],
       "erklaerung": "Hier beginnst du den Kontakt selbst. Darum steht der Anlass gleich im ersten Satz, danach folgen Mengen, Termin und Frage, jeweils mit Grund.",
       "rubrik": [
        {
         "t": "I Aufgabenbewältigung",
         "h": "Sind alle drei Inhaltspunkte ausführlich drin, dazu Betreff, Anrede, Einleitung und Schluss?",
         "stufen": [
          {
           "w": 5,
           "t": "B2+",
           "d": "B2 gut erfüllt"
          },
          {
           "w": 4,
           "t": "B2",
           "d": "B2 erfüllt"
          },
          {
           "w": 3,
           "t": "B1+",
           "d": "B1 gut erfüllt"
          },
          {
           "w": 2,
           "t": "B1",
           "d": "B1 erfüllt"
          },
          {
           "w": 1,
           "t": "A2",
           "d": "A2"
          },
          {
           "w": 0,
           "t": "–",
           "d": "unter A2"
          }
         ]
        },
        {
         "t": "II Kommunikative Gestaltung",
         "h": "Passt der Ton zur Person (Sie oder du)? Ist der Text gut aufgebaut und verbunden?",
         "stufen": [
          {
           "w": 5,
           "t": "B2+",
           "d": "B2 gut erfüllt"
          },
          {
           "w": 4,
           "t": "B2",
           "d": "B2 erfüllt"
          },
          {
           "w": 3,
           "t": "B1+",
           "d": "B1 gut erfüllt"
          },
          {
           "w": 2,
           "t": "B1",
           "d": "B1 erfüllt"
          },
          {
           "w": 1,
           "t": "A2",
           "d": "A2"
          },
          {
           "w": 0,
           "t": "–",
           "d": "unter A2"
          }
         ]
        },
        {
         "t": "III Korrektheit",
         "h": "Grammatik und Rechtschreibung. Vergleiche mit dem Muster.",
         "stufen": [
          {
           "w": 5,
           "t": "B2+",
           "d": "B2 gut erfüllt"
          },
          {
           "w": 4,
           "t": "B2",
           "d": "B2 erfüllt"
          },
          {
           "w": 3,
           "t": "B1+",
           "d": "B1 gut erfüllt"
          },
          {
           "w": 2,
           "t": "B1",
           "d": "B1 erfüllt"
          },
          {
           "w": 1,
           "t": "A2",
           "d": "A2"
          },
          {
           "w": 0,
           "t": "–",
           "d": "unter A2"
          }
         ]
        },
        {
         "t": "IV Wortschatz",
         "h": "Passende, genaue Wörter aus dem Beruf, nicht immer dieselben.",
         "stufen": [
          {
           "w": 5,
           "t": "B2+",
           "d": "B2 gut erfüllt"
          },
          {
           "w": 4,
           "t": "B2",
           "d": "B2 erfüllt"
          },
          {
           "w": 3,
           "t": "B1+",
           "d": "B1 gut erfüllt"
          },
          {
           "w": 2,
           "t": "B1",
           "d": "B1 erfüllt"
          },
          {
           "w": 1,
           "t": "A2",
           "d": "A2"
          },
          {
           "w": 0,
           "t": "–",
           "d": "unter A2"
          }
         ]
        }
       ],
       "max": 20,
       "keineKI": true,
       "ohneWortzahl": true,
       "woerter": 120,
       "platzhalter": "Schreib hier deine E-Mail …",
       "rubrikTitel": "Bewerte dich wie die telc-Prüfer",
       "rubrikHinweis": "Vier Kriterien, je 0 bis 5 Punkte: 5 = B2 gut erfüllt, 4 = B2 erfüllt, 3 = B1 gut erfüllt, 2 = B1 erfüllt, 1 = A2. telc nennt keine Wortzahl; jeder Punkt soll in mehreren Sätzen stehen."
      }
     ]
    },
    {
     "id": "tb12s1r2",
     "titel": "Runde 2",
     "aufgaben": [
      {
       "id": "bb12a3",
       "typ": "formell",
       "situation": "Sie arbeiten im Büro des Malerbetriebs Krause und Sohn. Eine Interessentin hat eine Anfrage geschickt. Antworten Sie ihr.",
       "eingang": {
        "von": "Dr. Grace Okafor, Zahnarztpraxis Okafor",
        "betreff": "Anfrage: Praxisräume streichen",
        "text": "Sehr geehrte Damen und Herren,\nich möchte das Wartezimmer und die Flure meiner Praxis neu streichen lassen, insgesamt etwa 120 Quadratmeter Wandfläche. Können Sie mir dafür ein Angebot machen?\nWichtig ist mir, dass der Praxisbetrieb möglichst wenig gestört wird. Unsere Sprechzeiten sind Montag bis Freitag von 8 bis 18 Uhr.\nWie lange würden die Arbeiten ungefähr dauern?\nMit freundlichen Grüßen\nGrace Okafor"
       },
       "sorte": "email",
       "an": "Frau Dr. Grace Okafor, Zahnarztpraxis Okafor",
       "betreff": "AW: Anfrage: Praxisräume streichen",
       "punkte": [
        {
         "nr": 1,
         "was": "Besichtigung",
         "hinweis": "Schlagen Sie einen Termin vor, um die Räume vorher anzusehen."
        },
        {
         "nr": 2,
         "was": "Dauer",
         "hinweis": "Sagen Sie, wie lange die Arbeiten ungefähr dauern und wovon das abhängt."
        },
        {
         "nr": 3,
         "was": "Praxisbetrieb",
         "hinweis": "Machen Sie einen Vorschlag, wie die Praxis normal weiterarbeiten kann."
        }
       ],
       "muster": "Betreff: AW: Anfrage: Praxisräume streichen\nSehr geehrte Frau Dr. Okafor,\nvielen Dank für Ihre Anfrage. Gern machen wir Ihnen ein Angebot. Damit es genau wird, würde sich unser Meister, Herr Krause, die Räume vorher kurz ansehen. Passt es Ihnen am Donnerstag, dem 6. März, um 18:15 Uhr, also direkt nach Ihrer Sprechstunde? Das dauert etwa eine halbe Stunde.\nBei 120 Quadratmetern rechnen wir mit zwei bis drei Arbeitstagen für zwei Maler. Das hängt aber davon ab, ob wir Löcher spachteln oder alte Tapeten entfernen müssen.\nDamit Ihre Praxis normal weiterlaufen kann, könnten wir am Freitag ab 18 Uhr mit den Fluren anfangen und am Samstag das Wartezimmer streichen. Wir verwenden eine Farbe, die kaum riecht. Am Montag merken Ihre Patienten also nichts mehr davon.\nBitte geben Sie mir kurz Bescheid, ob der Termin für Sie passt.\nMit freundlichen Grüßen\nSabine Lorenz\nBüro, Malerbetrieb Krause und Sohn",
       "hilfen": [
        "Gern machen wir Ihnen ein Angebot.",
        "Damit es genau wird, würde sich … die Räume vorher ansehen.",
        "Passt es Ihnen am … um …?",
        "Wir rechnen mit …",
        "Das hängt aber davon ab, ob …",
        "Damit Ihre Praxis normal weiterlaufen kann, könnten wir …"
       ],
       "erklaerung": "Die Interessentin hat zwei Sorgen: Dauer und Störung der Praxis. Das Muster beantwortet beide konkret und macht mit dem Besichtigungstermin den nächsten Schritt leicht.",
       "rubrik": [
        {
         "t": "I Aufgabenbewältigung",
         "h": "Sind alle drei Inhaltspunkte ausführlich drin, dazu Betreff, Anrede, Einleitung und Schluss?",
         "stufen": [
          {
           "w": 5,
           "t": "B2+",
           "d": "B2 gut erfüllt"
          },
          {
           "w": 4,
           "t": "B2",
           "d": "B2 erfüllt"
          },
          {
           "w": 3,
           "t": "B1+",
           "d": "B1 gut erfüllt"
          },
          {
           "w": 2,
           "t": "B1",
           "d": "B1 erfüllt"
          },
          {
           "w": 1,
           "t": "A2",
           "d": "A2"
          },
          {
           "w": 0,
           "t": "–",
           "d": "unter A2"
          }
         ]
        },
        {
         "t": "II Kommunikative Gestaltung",
         "h": "Passt der Ton zur Person (Sie oder du)? Ist der Text gut aufgebaut und verbunden?",
         "stufen": [
          {
           "w": 5,
           "t": "B2+",
           "d": "B2 gut erfüllt"
          },
          {
           "w": 4,
           "t": "B2",
           "d": "B2 erfüllt"
          },
          {
           "w": 3,
           "t": "B1+",
           "d": "B1 gut erfüllt"
          },
          {
           "w": 2,
           "t": "B1",
           "d": "B1 erfüllt"
          },
          {
           "w": 1,
           "t": "A2",
           "d": "A2"
          },
          {
           "w": 0,
           "t": "–",
           "d": "unter A2"
          }
         ]
        },
        {
         "t": "III Korrektheit",
         "h": "Grammatik und Rechtschreibung. Vergleiche mit dem Muster.",
         "stufen": [
          {
           "w": 5,
           "t": "B2+",
           "d": "B2 gut erfüllt"
          },
          {
           "w": 4,
           "t": "B2",
           "d": "B2 erfüllt"
          },
          {
           "w": 3,
           "t": "B1+",
           "d": "B1 gut erfüllt"
          },
          {
           "w": 2,
           "t": "B1",
           "d": "B1 erfüllt"
          },
          {
           "w": 1,
           "t": "A2",
           "d": "A2"
          },
          {
           "w": 0,
           "t": "–",
           "d": "unter A2"
          }
         ]
        },
        {
         "t": "IV Wortschatz",
         "h": "Passende, genaue Wörter aus dem Beruf, nicht immer dieselben.",
         "stufen": [
          {
           "w": 5,
           "t": "B2+",
           "d": "B2 gut erfüllt"
          },
          {
           "w": 4,
           "t": "B2",
           "d": "B2 erfüllt"
          },
          {
           "w": 3,
           "t": "B1+",
           "d": "B1 gut erfüllt"
          },
          {
           "w": 2,
           "t": "B1",
           "d": "B1 erfüllt"
          },
          {
           "w": 1,
           "t": "A2",
           "d": "A2"
          },
          {
           "w": 0,
           "t": "–",
           "d": "unter A2"
          }
         ]
        }
       ],
       "max": 20,
       "keineKI": true,
       "ohneWortzahl": true,
       "woerter": 120,
       "platzhalter": "Schreib hier deine E-Mail …",
       "rubrikTitel": "Bewerte dich wie die telc-Prüfer",
       "rubrikHinweis": "Vier Kriterien, je 0 bis 5 Punkte: 5 = B2 gut erfüllt, 4 = B2 erfüllt, 3 = B1 gut erfüllt, 2 = B1 erfüllt, 1 = A2. telc nennt keine Wortzahl; jeder Punkt soll in mehreren Sätzen stehen."
      },
      {
       "id": "bb12a4",
       "typ": "formell",
       "situation": "Sie arbeiten bei Netzwerk Plus, einem kleinen IT-Dienstleister in Erfurt. Am Samstag, dem 22. November, tauschen Sie den Server Ihrer Kundin aus, des Steuerbüros Lindqvist. Informieren Sie Frau Lindqvist per E-Mail.",
       "sorte": "email",
       "an": "Frau Karin Lindqvist, Steuerbüro Lindqvist",
       "betreff": "Serveraustausch am Samstag, 22. November",
       "punkte": [
        {
         "nr": 1,
         "was": "Termin und Grund",
         "hinweis": "Nennen Sie den Termin und erklären Sie, warum der Server ausgetauscht wird."
        },
        {
         "nr": 2,
         "was": "Einschränkungen",
         "hinweis": "Erklären Sie, was in dieser Zeit nicht funktioniert."
        },
        {
         "nr": 3,
         "was": "Bitte an das Büro",
         "hinweis": "Bitten Sie die Mitarbeiter, vorher etwas zu erledigen."
        }
       ],
       "muster": "Betreff: Serveraustausch am Samstag, 22. November\nSehr geehrte Frau Lindqvist,\nwie am Telefon schon kurz besprochen, tauschen wir am Samstag, dem 22. November, Ihren Server aus. Das alte Gerät ist jetzt sieben Jahre alt, und die Festplatten haben in den letzten Wochen mehrmals Fehler gemeldet. Bevor wirklich Daten verloren gehen, ersetzen wir es lieber.\nWir fangen um 8 Uhr an und sind voraussichtlich gegen 15 Uhr fertig. In dieser Zeit können Sie nicht auf die gemeinsamen Ordner und das Buchhaltungsprogramm zugreifen. E-Mails funktionieren aber normal, auch auf dem Handy.\nIch hätte noch eine Bitte: Ihre Mitarbeiter sollten am Freitag vor Feierabend alle offenen Dateien speichern und die Rechner ganz herunterfahren, nicht nur abmelden. Sonst können wir einige Daten nicht sauber übertragen.\nAm Montag um 7:30 Uhr ist mein Kollege Herr Baumann bei Ihnen im Büro, falls doch noch etwas hakt.\nMit freundlichen Grüßen\nDeniz Aydın\nNetzwerk Plus GmbH",
       "hilfen": [
        "wie am Telefon schon kurz besprochen, …",
        "Bevor …, ersetzen wir es lieber.",
        "In dieser Zeit können Sie nicht …",
        "… funktionieren aber normal.",
        "Ich hätte noch eine Bitte: …",
        "Sonst können wir …"
       ],
       "erklaerung": "Bei einer Information an Kunden zählt: Was passiert, wann, was bedeutet das für mich und was muss ich tun. Das Muster beantwortet alle vier Fragen ohne Fachchinesisch.",
       "rubrik": [
        {
         "t": "I Aufgabenbewältigung",
         "h": "Sind alle drei Inhaltspunkte ausführlich drin, dazu Betreff, Anrede, Einleitung und Schluss?",
         "stufen": [
          {
           "w": 5,
           "t": "B2+",
           "d": "B2 gut erfüllt"
          },
          {
           "w": 4,
           "t": "B2",
           "d": "B2 erfüllt"
          },
          {
           "w": 3,
           "t": "B1+",
           "d": "B1 gut erfüllt"
          },
          {
           "w": 2,
           "t": "B1",
           "d": "B1 erfüllt"
          },
          {
           "w": 1,
           "t": "A2",
           "d": "A2"
          },
          {
           "w": 0,
           "t": "–",
           "d": "unter A2"
          }
         ]
        },
        {
         "t": "II Kommunikative Gestaltung",
         "h": "Passt der Ton zur Person (Sie oder du)? Ist der Text gut aufgebaut und verbunden?",
         "stufen": [
          {
           "w": 5,
           "t": "B2+",
           "d": "B2 gut erfüllt"
          },
          {
           "w": 4,
           "t": "B2",
           "d": "B2 erfüllt"
          },
          {
           "w": 3,
           "t": "B1+",
           "d": "B1 gut erfüllt"
          },
          {
           "w": 2,
           "t": "B1",
           "d": "B1 erfüllt"
          },
          {
           "w": 1,
           "t": "A2",
           "d": "A2"
          },
          {
           "w": 0,
           "t": "–",
           "d": "unter A2"
          }
         ]
        },
        {
         "t": "III Korrektheit",
         "h": "Grammatik und Rechtschreibung. Vergleiche mit dem Muster.",
         "stufen": [
          {
           "w": 5,
           "t": "B2+",
           "d": "B2 gut erfüllt"
          },
          {
           "w": 4,
           "t": "B2",
           "d": "B2 erfüllt"
          },
          {
           "w": 3,
           "t": "B1+",
           "d": "B1 gut erfüllt"
          },
          {
           "w": 2,
           "t": "B1",
           "d": "B1 erfüllt"
          },
          {
           "w": 1,
           "t": "A2",
           "d": "A2"
          },
          {
           "w": 0,
           "t": "–",
           "d": "unter A2"
          }
         ]
        },
        {
         "t": "IV Wortschatz",
         "h": "Passende, genaue Wörter aus dem Beruf, nicht immer dieselben.",
         "stufen": [
          {
           "w": 5,
           "t": "B2+",
           "d": "B2 gut erfüllt"
          },
          {
           "w": 4,
           "t": "B2",
           "d": "B2 erfüllt"
          },
          {
           "w": 3,
           "t": "B1+",
           "d": "B1 gut erfüllt"
          },
          {
           "w": 2,
           "t": "B1",
           "d": "B1 erfüllt"
          },
          {
           "w": 1,
           "t": "A2",
           "d": "A2"
          },
          {
           "w": 0,
           "t": "–",
           "d": "unter A2"
          }
         ]
        }
       ],
       "max": 20,
       "keineKI": true,
       "ohneWortzahl": true,
       "woerter": 120,
       "platzhalter": "Schreib hier deine E-Mail …",
       "rubrikTitel": "Bewerte dich wie die telc-Prüfer",
       "rubrikHinweis": "Vier Kriterien, je 0 bis 5 Punkte: 5 = B2 gut erfüllt, 4 = B2 erfüllt, 3 = B1 gut erfüllt, 2 = B1 erfüllt, 1 = A2. telc nennt keine Wortzahl; jeder Punkt soll in mehreren Sätzen stehen."
      }
     ]
    }
   ]
  },
  {
   "nr": 2,
   "art": "mitteilung",
   "name": "E-Mail an Kollegen",
   "kurz": "Du oder Sie, drei Inhaltspunkte",
   "was": "Du schreibst an Kollegen oder an deine Vorgesetzte, zum Beispiel wegen einer Vertretung, eines Problems oder einer Planung. Alle drei Punkte gehören hinein.",
   "tipp": "Kollegen duzt man oft, die Chefin siezt man meist. Locker heißt nicht ungenau: Was soll wer bis wann tun?",
   "zeichen": "📝",
   "farbe": "gold",
   "punkte": 20,
   "runden": [
    {
     "id": "tb12s2r1",
     "titel": "Runde 1",
     "aufgaben": [
      {
       "id": "bb12b1",
       "typ": "informell",
       "situation": "Sie arbeiten im Lager eines Onlinehändlers. Ihre Kollegin Dilara möchte mit Ihnen eine Schicht tauschen. Antworten Sie ihr.",
       "eingang": {
        "von": "Dilara Şahin",
        "betreff": "Tausch am Samstag?",
        "text": "Hi,\nmein Bruder heiratet am Samstag, dem 17. Mai, und ich bin für die Frühschicht eingeteilt. Könntest du die übernehmen? Ich würde dafür eine Schicht von dir nehmen, egal welche. Frau Hartmann muss den Tausch aber noch absegnen.\nLG Dilara"
       },
       "sorte": "email",
       "an": "Dilara Şahin",
       "betreff": "AW: Tausch am Samstag?",
       "punkte": [
        {
         "nr": 1,
         "was": "Zusage",
         "hinweis": "Sagen Sie zu und gratulieren Sie."
        },
        {
         "nr": 2,
         "was": "Gegentausch",
         "hinweis": "Nennen Sie eine Schicht, die Dilara für Sie übernehmen soll, und sagen Sie, warum."
        },
        {
         "nr": 3,
         "was": "Teamleitung",
         "hinweis": "Schlagen Sie vor, wer mit Frau Hartmann spricht."
        }
       ],
       "muster": "Betreff: AW: Tausch am Samstag?\nHallo Dilara,\nklar, die Frühschicht am 17. übernehme ich. Ich hatte an dem Samstag sowieso nichts vor, und um sechs anzufangen macht mir nichts aus. Herzlichen Glückwunsch an deinen Bruder, feiert schön!\nWenn du schon fragst: Am Donnerstag, dem 22. Mai, habe ich Spätschicht, und genau an dem Tag hat mein Sohn um 18 Uhr ein Fußballturnier. Wenn du die Schicht nehmen könntest, wäre das super. Dann kann ich endlich mal zuschauen.\nWegen Frau Hartmann: Ich sehe sie morgen sowieso bei der Teambesprechung um halb acht. Ich kann ihr den Tausch kurz sagen und ihn danach gleich in den Plan am Schichtbrett eintragen. Oder willst du ihr lieber selbst schreiben? Sag einfach Bescheid.\nViele Grüße\nMirko",
       "hilfen": [
        "klar, … übernehme ich.",
        "Wenn du schon fragst: …",
        "Wenn du … nehmen könntest, wäre das super.",
        "Wegen …: Ich sehe sie morgen sowieso …",
        "Oder willst du lieber selbst …?",
        "Sag einfach Bescheid."
       ],
       "erklaerung": "Locker im Ton, aber genau in der Sache: Datum, Schicht und Uhrzeit stehen drin. Am Ende ist klar, wer was mit der Teamleiterin klärt.",
       "rubrik": [
        {
         "t": "I Aufgabenbewältigung",
         "h": "Sind alle drei Inhaltspunkte ausführlich drin, dazu Betreff, Anrede, Einleitung und Schluss?",
         "stufen": [
          {
           "w": 5,
           "t": "B2+",
           "d": "B2 gut erfüllt"
          },
          {
           "w": 4,
           "t": "B2",
           "d": "B2 erfüllt"
          },
          {
           "w": 3,
           "t": "B1+",
           "d": "B1 gut erfüllt"
          },
          {
           "w": 2,
           "t": "B1",
           "d": "B1 erfüllt"
          },
          {
           "w": 1,
           "t": "A2",
           "d": "A2"
          },
          {
           "w": 0,
           "t": "–",
           "d": "unter A2"
          }
         ]
        },
        {
         "t": "II Kommunikative Gestaltung",
         "h": "Passt der Ton zur Person (Sie oder du)? Ist der Text gut aufgebaut und verbunden?",
         "stufen": [
          {
           "w": 5,
           "t": "B2+",
           "d": "B2 gut erfüllt"
          },
          {
           "w": 4,
           "t": "B2",
           "d": "B2 erfüllt"
          },
          {
           "w": 3,
           "t": "B1+",
           "d": "B1 gut erfüllt"
          },
          {
           "w": 2,
           "t": "B1",
           "d": "B1 erfüllt"
          },
          {
           "w": 1,
           "t": "A2",
           "d": "A2"
          },
          {
           "w": 0,
           "t": "–",
           "d": "unter A2"
          }
         ]
        },
        {
         "t": "III Korrektheit",
         "h": "Grammatik und Rechtschreibung. Vergleiche mit dem Muster.",
         "stufen": [
          {
           "w": 5,
           "t": "B2+",
           "d": "B2 gut erfüllt"
          },
          {
           "w": 4,
           "t": "B2",
           "d": "B2 erfüllt"
          },
          {
           "w": 3,
           "t": "B1+",
           "d": "B1 gut erfüllt"
          },
          {
           "w": 2,
           "t": "B1",
           "d": "B1 erfüllt"
          },
          {
           "w": 1,
           "t": "A2",
           "d": "A2"
          },
          {
           "w": 0,
           "t": "–",
           "d": "unter A2"
          }
         ]
        },
        {
         "t": "IV Wortschatz",
         "h": "Passende, genaue Wörter aus dem Beruf, nicht immer dieselben.",
         "stufen": [
          {
           "w": 5,
           "t": "B2+",
           "d": "B2 gut erfüllt"
          },
          {
           "w": 4,
           "t": "B2",
           "d": "B2 erfüllt"
          },
          {
           "w": 3,
           "t": "B1+",
           "d": "B1 gut erfüllt"
          },
          {
           "w": 2,
           "t": "B1",
           "d": "B1 erfüllt"
          },
          {
           "w": 1,
           "t": "A2",
           "d": "A2"
          },
          {
           "w": 0,
           "t": "–",
           "d": "unter A2"
          }
         ]
        }
       ],
       "max": 20,
       "keineKI": true,
       "ohneWortzahl": true,
       "woerter": 120,
       "platzhalter": "Schreib hier deine E-Mail …",
       "rubrikTitel": "Bewerte dich wie die telc-Prüfer",
       "rubrikHinweis": "Vier Kriterien, je 0 bis 5 Punkte: 5 = B2 gut erfüllt, 4 = B2 erfüllt, 3 = B1 gut erfüllt, 2 = B1 erfüllt, 1 = A2. telc nennt keine Wortzahl; jeder Punkt soll in mehreren Sätzen stehen."
      },
      {
       "id": "bb12b2",
       "typ": "halbformell",
       "situation": "Sie arbeiten in der Warenannahme eines Baumarkts. Sie möchten den Staplerschein machen. Schreiben Sie Ihrer Chefin, Frau Weidemann, eine E-Mail. Sie siezen sich.",
       "sorte": "email",
       "an": "Frau Weidemann",
       "betreff": "Bitte um Teilnahme am Staplerkurs im Februar",
       "punkte": [
        {
         "nr": 1,
         "was": "Kurs",
         "hinweis": "Nennen Sie den Kurs, den Termin und die Kosten."
        },
        {
         "nr": 2,
         "was": "Nutzen",
         "hinweis": "Erklären Sie, warum der Kurs für den Betrieb sinnvoll ist."
        },
        {
         "nr": 3,
         "was": "Vertretung",
         "hinweis": "Sagen Sie, wer Sie in dieser Zeit vertritt."
        }
       ],
       "muster": "Betreff: Bitte um Teilnahme am Staplerkurs im Februar\nHallo Frau Weidemann,\nich möchte Sie fragen, ob ich den Staplerschein machen darf. Das Bildungswerk Ostwestfalen in Bielefeld bietet vom 10. bis 12. Februar einen Kurs an. Er kostet 380 Euro, die Prüfung ist schon dabei.\nFür uns in der Warenannahme wäre das eine große Erleichterung. Im Moment hat nur Herr Polat einen Staplerschein. Wenn er frei hat oder krank ist, stehen die Paletten oft stundenlang am Tor, und die Fahrer müssen warten. Letzten Dienstag ist deshalb eine ganze Lieferung Fliesen erst am nächsten Tag ins Lager gekommen.\nDie Vertretung habe ich schon geklärt. Frau Nowak aus dem Lager kennt die Annahme gut und würde die drei Tage übernehmen. Sie hat in der Woche sowieso Frühschicht, genau wie ich.\nIch würde mich sehr freuen, wenn das klappt. Den Link zum Kurs schicke ich Ihnen gern.\nViele Grüße\nAhmad Rahimi",
       "hilfen": [
        "ich möchte Sie fragen, ob ich … darf.",
        "Für uns in … wäre das eine große Erleichterung.",
        "Im Moment hat nur …",
        "Letzten Dienstag ist deshalb …",
        "Die Vertretung habe ich schon geklärt.",
        "Ich würde mich sehr freuen, wenn das klappt."
       ],
       "erklaerung": "Wer die Chefin um etwas bittet, sollte zeigen, was der Betrieb davon hat. Das Beispiel vom letzten Dienstag und die geklärte Vertretung machen das Ja leicht.",
       "rubrik": [
        {
         "t": "I Aufgabenbewältigung",
         "h": "Sind alle drei Inhaltspunkte ausführlich drin, dazu Betreff, Anrede, Einleitung und Schluss?",
         "stufen": [
          {
           "w": 5,
           "t": "B2+",
           "d": "B2 gut erfüllt"
          },
          {
           "w": 4,
           "t": "B2",
           "d": "B2 erfüllt"
          },
          {
           "w": 3,
           "t": "B1+",
           "d": "B1 gut erfüllt"
          },
          {
           "w": 2,
           "t": "B1",
           "d": "B1 erfüllt"
          },
          {
           "w": 1,
           "t": "A2",
           "d": "A2"
          },
          {
           "w": 0,
           "t": "–",
           "d": "unter A2"
          }
         ]
        },
        {
         "t": "II Kommunikative Gestaltung",
         "h": "Passt der Ton zur Person (Sie oder du)? Ist der Text gut aufgebaut und verbunden?",
         "stufen": [
          {
           "w": 5,
           "t": "B2+",
           "d": "B2 gut erfüllt"
          },
          {
           "w": 4,
           "t": "B2",
           "d": "B2 erfüllt"
          },
          {
           "w": 3,
           "t": "B1+",
           "d": "B1 gut erfüllt"
          },
          {
           "w": 2,
           "t": "B1",
           "d": "B1 erfüllt"
          },
          {
           "w": 1,
           "t": "A2",
           "d": "A2"
          },
          {
           "w": 0,
           "t": "–",
           "d": "unter A2"
          }
         ]
        },
        {
         "t": "III Korrektheit",
         "h": "Grammatik und Rechtschreibung. Vergleiche mit dem Muster.",
         "stufen": [
          {
           "w": 5,
           "t": "B2+",
           "d": "B2 gut erfüllt"
          },
          {
           "w": 4,
           "t": "B2",
           "d": "B2 erfüllt"
          },
          {
           "w": 3,
           "t": "B1+",
           "d": "B1 gut erfüllt"
          },
          {
           "w": 2,
           "t": "B1",
           "d": "B1 erfüllt"
          },
          {
           "w": 1,
           "t": "A2",
           "d": "A2"
          },
          {
           "w": 0,
           "t": "–",
           "d": "unter A2"
          }
         ]
        },
        {
         "t": "IV Wortschatz",
         "h": "Passende, genaue Wörter aus dem Beruf, nicht immer dieselben.",
         "stufen": [
          {
           "w": 5,
           "t": "B2+",
           "d": "B2 gut erfüllt"
          },
          {
           "w": 4,
           "t": "B2",
           "d": "B2 erfüllt"
          },
          {
           "w": 3,
           "t": "B1+",
           "d": "B1 gut erfüllt"
          },
          {
           "w": 2,
           "t": "B1",
           "d": "B1 erfüllt"
          },
          {
           "w": 1,
           "t": "A2",
           "d": "A2"
          },
          {
           "w": 0,
           "t": "–",
           "d": "unter A2"
          }
         ]
        }
       ],
       "max": 20,
       "keineKI": true,
       "ohneWortzahl": true,
       "woerter": 120,
       "platzhalter": "Schreib hier deine E-Mail …",
       "rubrikTitel": "Bewerte dich wie die telc-Prüfer",
       "rubrikHinweis": "Vier Kriterien, je 0 bis 5 Punkte: 5 = B2 gut erfüllt, 4 = B2 erfüllt, 3 = B1 gut erfüllt, 2 = B1 erfüllt, 1 = A2. telc nennt keine Wortzahl; jeder Punkt soll in mehreren Sätzen stehen."
      }
     ]
    },
    {
     "id": "tb12s2r2",
     "titel": "Runde 2",
     "aufgaben": [
      {
       "id": "bb12b3",
       "typ": "informell",
       "situation": "Sie arbeiten im Innendienst einer Firma für Reinigungsmittel. Ab Montag sind Sie zwei Wochen im Urlaub. Ihr Kollege Jonas vertritt Sie. Schreiben Sie ihm eine Übergabe-Mail.",
       "sorte": "email",
       "an": "Jonas Becker",
       "betreff": "Übergabe für meine Urlaubsvertretung ab Montag",
       "punkte": [
        {
         "nr": 1,
         "was": "Offener Auftrag",
         "hinweis": "Erklären Sie, was bei einem Kunden noch zu tun ist."
        },
        {
         "nr": 2,
         "was": "Unterlagen",
         "hinweis": "Sagen Sie, wo Jonas die Unterlagen findet."
        },
        {
         "nr": 3,
         "was": "Wichtiger Termin",
         "hinweis": "Weisen Sie auf einen Termin hin und sagen Sie, worauf er achten soll."
        }
       ],
       "muster": "Betreff: Übergabe für meine Urlaubsvertretung ab Montag\nHallo Jonas,\ndanke noch mal, dass du mich die zwei Wochen vertrittst. Das meiste läuft von allein, aber zwei Sachen solltest du wissen.\nDas Hotel Seeblick wartet noch auf das Angebot für die neuen Spülmittel. Die Mengen habe ich schon eingetragen, es fehlt nur noch der Rabatt. Herr Stamm hat mir am Telefon 8 Prozent zugesagt. Das musst du nur noch eintragen und spätestens am Mittwoch rausschicken.\nAlle Unterlagen liegen im Teamordner unter Kunden, Hotel Seeblick, Angebote. Die ausgedruckten Lieferscheine sind in der roten Mappe links auf meinem Schreibtisch.\nAm Donnerstag, dem 9. Oktober, kommt außerdem um 10 Uhr Frau Krüger von der Kita Sonnenschein zur Besprechung. Sie ist sehr nett, hat sich aber letztes Mal über eine verspätete Lieferung geärgert. Frag am besten vorher im Lager nach, ob ihre Bestellung pünktlich rausgeht.\nWenn es brennt, schreib mir einfach eine Nachricht.\nViele Grüße\nKatarzyna",
       "hilfen": [
        "danke noch mal, dass du …",
        "Das meiste läuft von allein, aber …",
        "Das musst du nur noch …",
        "Alle Unterlagen liegen …",
        "Frag am besten vorher …",
        "Wenn es brennt, …"
       ],
       "erklaerung": "Eine gute Übergabe beantwortet die Fragen, die der Kollege sonst stellen müsste: Was ist offen, wo liegt es, worauf muss ich aufpassen.",
       "rubrik": [
        {
         "t": "I Aufgabenbewältigung",
         "h": "Sind alle drei Inhaltspunkte ausführlich drin, dazu Betreff, Anrede, Einleitung und Schluss?",
         "stufen": [
          {
           "w": 5,
           "t": "B2+",
           "d": "B2 gut erfüllt"
          },
          {
           "w": 4,
           "t": "B2",
           "d": "B2 erfüllt"
          },
          {
           "w": 3,
           "t": "B1+",
           "d": "B1 gut erfüllt"
          },
          {
           "w": 2,
           "t": "B1",
           "d": "B1 erfüllt"
          },
          {
           "w": 1,
           "t": "A2",
           "d": "A2"
          },
          {
           "w": 0,
           "t": "–",
           "d": "unter A2"
          }
         ]
        },
        {
         "t": "II Kommunikative Gestaltung",
         "h": "Passt der Ton zur Person (Sie oder du)? Ist der Text gut aufgebaut und verbunden?",
         "stufen": [
          {
           "w": 5,
           "t": "B2+",
           "d": "B2 gut erfüllt"
          },
          {
           "w": 4,
           "t": "B2",
           "d": "B2 erfüllt"
          },
          {
           "w": 3,
           "t": "B1+",
           "d": "B1 gut erfüllt"
          },
          {
           "w": 2,
           "t": "B1",
           "d": "B1 erfüllt"
          },
          {
           "w": 1,
           "t": "A2",
           "d": "A2"
          },
          {
           "w": 0,
           "t": "–",
           "d": "unter A2"
          }
         ]
        },
        {
         "t": "III Korrektheit",
         "h": "Grammatik und Rechtschreibung. Vergleiche mit dem Muster.",
         "stufen": [
          {
           "w": 5,
           "t": "B2+",
           "d": "B2 gut erfüllt"
          },
          {
           "w": 4,
           "t": "B2",
           "d": "B2 erfüllt"
          },
          {
           "w": 3,
           "t": "B1+",
           "d": "B1 gut erfüllt"
          },
          {
           "w": 2,
           "t": "B1",
           "d": "B1 erfüllt"
          },
          {
           "w": 1,
           "t": "A2",
           "d": "A2"
          },
          {
           "w": 0,
           "t": "–",
           "d": "unter A2"
          }
         ]
        },
        {
         "t": "IV Wortschatz",
         "h": "Passende, genaue Wörter aus dem Beruf, nicht immer dieselben.",
         "stufen": [
          {
           "w": 5,
           "t": "B2+",
           "d": "B2 gut erfüllt"
          },
          {
           "w": 4,
           "t": "B2",
           "d": "B2 erfüllt"
          },
          {
           "w": 3,
           "t": "B1+",
           "d": "B1 gut erfüllt"
          },
          {
           "w": 2,
           "t": "B1",
           "d": "B1 erfüllt"
          },
          {
           "w": 1,
           "t": "A2",
           "d": "A2"
          },
          {
           "w": 0,
           "t": "–",
           "d": "unter A2"
          }
         ]
        }
       ],
       "max": 20,
       "keineKI": true,
       "ohneWortzahl": true,
       "woerter": 120,
       "platzhalter": "Schreib hier deine E-Mail …",
       "rubrikTitel": "Bewerte dich wie die telc-Prüfer",
       "rubrikHinweis": "Vier Kriterien, je 0 bis 5 Punkte: 5 = B2 gut erfüllt, 4 = B2 erfüllt, 3 = B1 gut erfüllt, 2 = B1 erfüllt, 1 = A2. telc nennt keine Wortzahl; jeder Punkt soll in mehreren Sätzen stehen."
      },
      {
       "id": "bb12b4",
       "typ": "halbformell",
       "situation": "Sie arbeiten als Koch im Restaurant Lindengarten. Heute Morgen gab es ein Problem mit dem Kühlraum. Ihr Chef, Herr Demir, ist heute nicht im Haus. Schreiben Sie ihm eine E-Mail. Sie siezen sich.",
       "sorte": "email",
       "an": "Herr Demir",
       "betreff": "Kühlraum: Tür schließt nicht mehr richtig",
       "punkte": [
        {
         "nr": 1,
         "was": "Problem",
         "hinweis": "Beschreiben Sie das Problem genau."
        },
        {
         "nr": 2,
         "was": "Erste Maßnahmen",
         "hinweis": "Erklären Sie, was Sie heute schon gemacht haben."
        },
        {
         "nr": 3,
         "was": "Vorschlag",
         "hinweis": "Machen Sie einen Vorschlag, wie es weitergehen soll."
        }
       ],
       "muster": "Betreff: Kühlraum: Tür schließt nicht mehr richtig\nGuten Tag Herr Demir,\nheute Morgen um halb sieben hat Elena gemerkt, dass die Tür vom Kühlraum nicht mehr richtig zugeht. Die Gummidichtung unten ist an einer Stelle eingerissen, und die Tür springt immer wieder ein Stück auf. Das Thermometer hat schon 9 Grad statt 4 Grad gezeigt.\nWir haben sofort das Fleisch und den Fisch in die beiden Kühlschränke in der Küche gebracht. Das Gemüse ist erst mal im Kühlraum geblieben. Die Tür halten wir im Moment mit einem Getränkekasten zu, seitdem liegt die Temperatur wieder bei 5 Grad. Alles steht in der Temperaturliste.\nIch würde vorschlagen, dass wir die Firma Kältetechnik Rauch anrufen. Die hat letztes Jahr schon die Dichtung am Gefrierschrank gewechselt, und das ging schnell. Wenn Sie einverstanden sind, rufe ich dort morgen um acht an.\nBitte geben Sie mir kurz Bescheid.\nViele Grüße\nSamuel Osei",
       "hilfen": [
        "heute Morgen um … hat … gemerkt, dass …",
        "Das Thermometer hat schon … gezeigt.",
        "Wir haben sofort …",
        "Im Moment …, seitdem …",
        "Ich würde vorschlagen, dass wir …",
        "Wenn Sie einverstanden sind, …"
       ],
       "erklaerung": "Der Chef ist nicht da und muss trotzdem entscheiden können. Das Muster nennt Fakten mit Uhrzeit und Temperatur, zeigt, was schon getan wurde, und fragt nur noch nach dem Okay.",
       "rubrik": [
        {
         "t": "I Aufgabenbewältigung",
         "h": "Sind alle drei Inhaltspunkte ausführlich drin, dazu Betreff, Anrede, Einleitung und Schluss?",
         "stufen": [
          {
           "w": 5,
           "t": "B2+",
           "d": "B2 gut erfüllt"
          },
          {
           "w": 4,
           "t": "B2",
           "d": "B2 erfüllt"
          },
          {
           "w": 3,
           "t": "B1+",
           "d": "B1 gut erfüllt"
          },
          {
           "w": 2,
           "t": "B1",
           "d": "B1 erfüllt"
          },
          {
           "w": 1,
           "t": "A2",
           "d": "A2"
          },
          {
           "w": 0,
           "t": "–",
           "d": "unter A2"
          }
         ]
        },
        {
         "t": "II Kommunikative Gestaltung",
         "h": "Passt der Ton zur Person (Sie oder du)? Ist der Text gut aufgebaut und verbunden?",
         "stufen": [
          {
           "w": 5,
           "t": "B2+",
           "d": "B2 gut erfüllt"
          },
          {
           "w": 4,
           "t": "B2",
           "d": "B2 erfüllt"
          },
          {
           "w": 3,
           "t": "B1+",
           "d": "B1 gut erfüllt"
          },
          {
           "w": 2,
           "t": "B1",
           "d": "B1 erfüllt"
          },
          {
           "w": 1,
           "t": "A2",
           "d": "A2"
          },
          {
           "w": 0,
           "t": "–",
           "d": "unter A2"
          }
         ]
        },
        {
         "t": "III Korrektheit",
         "h": "Grammatik und Rechtschreibung. Vergleiche mit dem Muster.",
         "stufen": [
          {
           "w": 5,
           "t": "B2+",
           "d": "B2 gut erfüllt"
          },
          {
           "w": 4,
           "t": "B2",
           "d": "B2 erfüllt"
          },
          {
           "w": 3,
           "t": "B1+",
           "d": "B1 gut erfüllt"
          },
          {
           "w": 2,
           "t": "B1",
           "d": "B1 erfüllt"
          },
          {
           "w": 1,
           "t": "A2",
           "d": "A2"
          },
          {
           "w": 0,
           "t": "–",
           "d": "unter A2"
          }
         ]
        },
        {
         "t": "IV Wortschatz",
         "h": "Passende, genaue Wörter aus dem Beruf, nicht immer dieselben.",
         "stufen": [
          {
           "w": 5,
           "t": "B2+",
           "d": "B2 gut erfüllt"
          },
          {
           "w": 4,
           "t": "B2",
           "d": "B2 erfüllt"
          },
          {
           "w": 3,
           "t": "B1+",
           "d": "B1 gut erfüllt"
          },
          {
           "w": 2,
           "t": "B1",
           "d": "B1 erfüllt"
          },
          {
           "w": 1,
           "t": "A2",
           "d": "A2"
          },
          {
           "w": 0,
           "t": "–",
           "d": "unter A2"
          }
         ]
        }
       ],
       "max": 20,
       "keineKI": true,
       "ohneWortzahl": true,
       "woerter": 120,
       "platzhalter": "Schreib hier deine E-Mail …",
       "rubrikTitel": "Bewerte dich wie die telc-Prüfer",
       "rubrikHinweis": "Vier Kriterien, je 0 bis 5 Punkte: 5 = B2 gut erfüllt, 4 = B2 erfüllt, 3 = B1 gut erfüllt, 2 = B1 erfüllt, 1 = A2. telc nennt keine Wortzahl; jeder Punkt soll in mehreren Sätzen stehen."
      }
     ]
    }
   ]
  }
 ],
 "laeufe": [
  {
   "id": "tb12sl1",
   "titel": "Prüfungslauf 1",
   "minuten": 45,
   "aufgaben": [
    {
     "id": "bb12a5",
     "typ": "formell",
     "situation": "Sie arbeiten im Einkauf des Seniorenzentrums Am Lindenhof. Ein Lieferant hat Ihnen eine Rechnung geschickt. Bei der Lieferung gab es aber ein Problem. Antworten Sie.",
     "eingang": {
      "von": "Pflegebedarf Ostmann, Buchhaltung",
      "betreff": "Rechnung Nr. 41187",
      "text": "Sehr geehrte Damen und Herren,\nim Anhang erhalten Sie die Rechnung Nr. 41187 für Ihre Bestellung vom 3. November. Bitte überweisen Sie den Betrag von 1.284,60 Euro innerhalb von 14 Tagen.\nBei Fragen melden Sie sich gern.\nMit freundlichen Grüßen\nPetra Albrecht\nBuchhaltung, Pflegebedarf Ostmann"
     },
     "sorte": "email",
     "an": "Frau Petra Albrecht, Pflegebedarf Ostmann",
     "betreff": "AW: Rechnung Nr. 41187",
     "punkte": [
      {
       "nr": 1,
       "was": "Fehler bei der Lieferung",
       "hinweis": "Beschreiben Sie genau, was bei der Lieferung gefehlt hat."
      },
      {
       "nr": 2,
       "was": "Rechnung",
       "hinweis": "Bitten Sie um eine korrigierte Rechnung."
      },
      {
       "nr": 3,
       "was": "Fehlende Ware",
       "hinweis": "Fragen Sie, wann die fehlende Ware kommt, und sagen Sie, warum es eilt."
      }
     ],
     "muster": "Betreff: AW: Rechnung Nr. 41187\nSehr geehrte Frau Albrecht,\nvielen Dank für die Rechnung. Leider passt sie nicht zu dem, was bei uns angekommen ist. Bestellt hatten wir 40 Packungen Einmalhandschuhe in Größe M und 20 Packungen in Größe L. Geliefert wurden aber nur die 40 Packungen in Größe M, die Größe L fehlt ganz. Das hat unser Hausmeister beim Auspacken bemerkt und auf dem Lieferschein notiert.\nDeshalb können wir die Rechnung so nicht bezahlen. Bitte schicken Sie uns eine korrigierte Rechnung nur über die Ware, die wir wirklich bekommen haben.\nAußerdem möchte ich wissen, wann die Handschuhe in Größe L kommen. Viele unserer Pflegekräfte brauchen diese Größe, und unser Vorrat reicht höchstens noch bis Ende nächster Woche.\nEine Kopie vom Lieferschein hänge ich an.\nMit freundlichen Grüßen\nOlena Kravets\nEinkauf, Seniorenzentrum Am Lindenhof",
     "hilfen": [
      "Leider passt sie nicht zu dem, was …",
      "Bestellt hatten wir …, geliefert wurden aber nur …",
      "Deshalb können wir die Rechnung so nicht bezahlen.",
      "Bitte schicken Sie uns eine korrigierte Rechnung …",
      "Außerdem möchte ich wissen, wann …",
      "Unser Vorrat reicht höchstens noch bis …"
     ],
     "erklaerung": "Eine Reklamation braucht Fakten: was bestellt, was geliefert, wer es bemerkt hat. Dann ist die Bitte um eine neue Rechnung für den Lieferanten sofort nachvollziehbar.",
     "rubrik": [
      {
       "t": "I Aufgabenbewältigung",
       "h": "Sind alle drei Inhaltspunkte ausführlich drin, dazu Betreff, Anrede, Einleitung und Schluss?",
       "stufen": [
        {
         "w": 5,
         "t": "B2+",
         "d": "B2 gut erfüllt"
        },
        {
         "w": 4,
         "t": "B2",
         "d": "B2 erfüllt"
        },
        {
         "w": 3,
         "t": "B1+",
         "d": "B1 gut erfüllt"
        },
        {
         "w": 2,
         "t": "B1",
         "d": "B1 erfüllt"
        },
        {
         "w": 1,
         "t": "A2",
         "d": "A2"
        },
        {
         "w": 0,
         "t": "–",
         "d": "unter A2"
        }
       ]
      },
      {
       "t": "II Kommunikative Gestaltung",
       "h": "Passt der Ton zur Person (Sie oder du)? Ist der Text gut aufgebaut und verbunden?",
       "stufen": [
        {
         "w": 5,
         "t": "B2+",
         "d": "B2 gut erfüllt"
        },
        {
         "w": 4,
         "t": "B2",
         "d": "B2 erfüllt"
        },
        {
         "w": 3,
         "t": "B1+",
         "d": "B1 gut erfüllt"
        },
        {
         "w": 2,
         "t": "B1",
         "d": "B1 erfüllt"
        },
        {
         "w": 1,
         "t": "A2",
         "d": "A2"
        },
        {
         "w": 0,
         "t": "–",
         "d": "unter A2"
        }
       ]
      },
      {
       "t": "III Korrektheit",
       "h": "Grammatik und Rechtschreibung. Vergleiche mit dem Muster.",
       "stufen": [
        {
         "w": 5,
         "t": "B2+",
         "d": "B2 gut erfüllt"
        },
        {
         "w": 4,
         "t": "B2",
         "d": "B2 erfüllt"
        },
        {
         "w": 3,
         "t": "B1+",
         "d": "B1 gut erfüllt"
        },
        {
         "w": 2,
         "t": "B1",
         "d": "B1 erfüllt"
        },
        {
         "w": 1,
         "t": "A2",
         "d": "A2"
        },
        {
         "w": 0,
         "t": "–",
         "d": "unter A2"
        }
       ]
      },
      {
       "t": "IV Wortschatz",
       "h": "Passende, genaue Wörter aus dem Beruf, nicht immer dieselben.",
       "stufen": [
        {
         "w": 5,
         "t": "B2+",
         "d": "B2 gut erfüllt"
        },
        {
         "w": 4,
         "t": "B2",
         "d": "B2 erfüllt"
        },
        {
         "w": 3,
         "t": "B1+",
         "d": "B1 gut erfüllt"
        },
        {
         "w": 2,
         "t": "B1",
         "d": "B1 erfüllt"
        },
        {
         "w": 1,
         "t": "A2",
         "d": "A2"
        },
        {
         "w": 0,
         "t": "–",
         "d": "unter A2"
        }
       ]
      }
     ],
     "max": 20,
     "keineKI": true,
     "ohneWortzahl": true,
     "woerter": 120,
     "platzhalter": "Schreib hier deine E-Mail …",
     "rubrikTitel": "Bewerte dich wie die telc-Prüfer",
     "rubrikHinweis": "Vier Kriterien, je 0 bis 5 Punkte: 5 = B2 gut erfüllt, 4 = B2 erfüllt, 3 = B1 gut erfüllt, 2 = B1 erfüllt, 1 = A2. telc nennt keine Wortzahl; jeder Punkt soll in mehreren Sätzen stehen."
    },
    {
     "id": "bb12b5",
     "typ": "informell",
     "situation": "Sie arbeiten in der Verwaltung einer Wohnungsbaugenossenschaft. Ein Kollege geht in Rente. Ihre Kollegin Bettina plant den Abschied und hat dem Team geschrieben. Antworten Sie ihr.",
     "eingang": {
      "von": "Bettina Kohl",
      "betreff": "Abschied Klaus",
      "text": "Hallo zusammen,\nwie ihr wisst, geht Klaus Ende Juni in Rente. Nach 31 Jahren bei uns finde ich, wir sollten ihn nicht nur mit einem Blumenstrauß verabschieden. Hat jemand eine Idee für ein Geschenk? Und wer hilft mir bei der Organisation? Ich dachte an Freitag, den 27. Juni, nach der Arbeit.\nBettina"
     },
     "sorte": "email",
     "an": "Bettina Kohl",
     "betreff": "AW: Abschied Klaus",
     "punkte": [
      {
       "nr": 1,
       "was": "Hilfe und Geschenk",
       "hinweis": "Sagen Sie Ihre Hilfe zu und schlagen Sie ein Geschenk vor."
      },
      {
       "nr": 2,
       "was": "Geld sammeln",
       "hinweis": "Machen Sie einen Vorschlag, wie das Geld gesammelt wird."
      },
      {
       "nr": 3,
       "was": "Ort",
       "hinweis": "Schlagen Sie einen Ort für die Feier vor."
      }
     ],
     "muster": "Betreff: AW: Abschied Klaus\nHallo Bettina,\ngute Idee, ich helfe gern mit. Klaus erzählt doch ständig von seinem Garten. Wie wäre es mit einem Gutschein von der Baumschule Tegeler? Dann kann er sich selbst aussuchen, was er pflanzen will. Dazu könnten wir eine große Karte machen, auf der alle unterschreiben.\nFürs Geld würde ich einen Umschlag in der Teeküche aufhängen, mit einer Liste daneben. So sieht jeder, wer schon etwas gegeben hat, aber nicht, wie viel. Ich finde, 10 Euro pro Person wären okay. Um den Umschlag kann ich mich bis zum 20. Juni kümmern.\nFür den Freitag schlage ich den Biergarten am Stadtpark vor. Der ist fünf Minuten zu Fuß, und man kann dort Tische für Gruppen reservieren. Bei schlechtem Wetter gibt es auch einen Raum drinnen. Soll ich da mal anrufen?\nLiebe Grüße\nHatice",
     "hilfen": [
      "gute Idee, ich helfe gern mit.",
      "Wie wäre es mit …?",
      "Dazu könnten wir …",
      "Fürs Geld würde ich …",
      "Um … kann ich mich bis … kümmern.",
      "Soll ich da mal anrufen?"
     ],
     "erklaerung": "Jeder Vorschlag hat einen kurzen Grund: Garten, Liste ohne Beträge, Biergarten mit Raum für Regen. So kann Bettina direkt Ja sagen.",
     "rubrik": [
      {
       "t": "I Aufgabenbewältigung",
       "h": "Sind alle drei Inhaltspunkte ausführlich drin, dazu Betreff, Anrede, Einleitung und Schluss?",
       "stufen": [
        {
         "w": 5,
         "t": "B2+",
         "d": "B2 gut erfüllt"
        },
        {
         "w": 4,
         "t": "B2",
         "d": "B2 erfüllt"
        },
        {
         "w": 3,
         "t": "B1+",
         "d": "B1 gut erfüllt"
        },
        {
         "w": 2,
         "t": "B1",
         "d": "B1 erfüllt"
        },
        {
         "w": 1,
         "t": "A2",
         "d": "A2"
        },
        {
         "w": 0,
         "t": "–",
         "d": "unter A2"
        }
       ]
      },
      {
       "t": "II Kommunikative Gestaltung",
       "h": "Passt der Ton zur Person (Sie oder du)? Ist der Text gut aufgebaut und verbunden?",
       "stufen": [
        {
         "w": 5,
         "t": "B2+",
         "d": "B2 gut erfüllt"
        },
        {
         "w": 4,
         "t": "B2",
         "d": "B2 erfüllt"
        },
        {
         "w": 3,
         "t": "B1+",
         "d": "B1 gut erfüllt"
        },
        {
         "w": 2,
         "t": "B1",
         "d": "B1 erfüllt"
        },
        {
         "w": 1,
         "t": "A2",
         "d": "A2"
        },
        {
         "w": 0,
         "t": "–",
         "d": "unter A2"
        }
       ]
      },
      {
       "t": "III Korrektheit",
       "h": "Grammatik und Rechtschreibung. Vergleiche mit dem Muster.",
       "stufen": [
        {
         "w": 5,
         "t": "B2+",
         "d": "B2 gut erfüllt"
        },
        {
         "w": 4,
         "t": "B2",
         "d": "B2 erfüllt"
        },
        {
         "w": 3,
         "t": "B1+",
         "d": "B1 gut erfüllt"
        },
        {
         "w": 2,
         "t": "B1",
         "d": "B1 erfüllt"
        },
        {
         "w": 1,
         "t": "A2",
         "d": "A2"
        },
        {
         "w": 0,
         "t": "–",
         "d": "unter A2"
        }
       ]
      },
      {
       "t": "IV Wortschatz",
       "h": "Passende, genaue Wörter aus dem Beruf, nicht immer dieselben.",
       "stufen": [
        {
         "w": 5,
         "t": "B2+",
         "d": "B2 gut erfüllt"
        },
        {
         "w": 4,
         "t": "B2",
         "d": "B2 erfüllt"
        },
        {
         "w": 3,
         "t": "B1+",
         "d": "B1 gut erfüllt"
        },
        {
         "w": 2,
         "t": "B1",
         "d": "B1 erfüllt"
        },
        {
         "w": 1,
         "t": "A2",
         "d": "A2"
        },
        {
         "w": 0,
         "t": "–",
         "d": "unter A2"
        }
       ]
      }
     ],
     "max": 20,
     "keineKI": true,
     "ohneWortzahl": true,
     "woerter": 120,
     "platzhalter": "Schreib hier deine E-Mail …",
     "rubrikTitel": "Bewerte dich wie die telc-Prüfer",
     "rubrikHinweis": "Vier Kriterien, je 0 bis 5 Punkte: 5 = B2 gut erfüllt, 4 = B2 erfüllt, 3 = B1 gut erfüllt, 2 = B1 erfüllt, 1 = A2. telc nennt keine Wortzahl; jeder Punkt soll in mehreren Sätzen stehen."
    }
   ]
  },
  {
   "id": "tb12sl2",
   "titel": "Prüfungslauf 2",
   "minuten": 45,
   "aufgaben": [
    {
     "id": "bb12a6",
     "typ": "formell",
     "situation": "Sie arbeiten an der Annahme der Werkstatt Kfz-Service Kaya. Ein Kunde fragt per E-Mail nach seinem Auto. Antworten Sie ihm.",
     "eingang": {
      "von": "Jörg Meinhardt",
      "betreff": "Mein Auto, Kennzeichen KS-JM 412",
      "text": "Hallo,\nich habe meinen Kombi am Montag zur Inspektion gebracht. Ihr Kollege meinte, vorne ist wohl noch ein neuer Bremssattel fällig. Ist das Auto trotzdem am Freitag fertig? Am Samstag fahren wir mit der Familie für eine Woche an die Ostsee.\nGruß\nJörg Meinhardt"
     },
     "sorte": "email",
     "an": "Herr Jörg Meinhardt",
     "betreff": "AW: Mein Auto, Kennzeichen KS-JM 412",
     "punkte": [
      {
       "nr": 1,
       "was": "Verzögerung",
       "hinweis": "Erklären Sie, warum das Auto am Freitag nicht fertig ist."
      },
      {
       "nr": 2,
       "was": "Neuer Termin",
       "hinweis": "Nennen Sie einen neuen Termin."
      },
      {
       "nr": 3,
       "was": "Ersatzlösung",
       "hinweis": "Machen Sie dem Kunden ein Angebot, damit er trotzdem in den Urlaub fahren kann."
      }
     ],
     "muster": "Betreff: AW: Mein Auto, Kennzeichen KS-JM 412\nSehr geehrter Herr Meinhardt,\ndanke für Ihre Nachricht. Leider habe ich keine guten Nachrichten. Der Bremssattel vorne links ist tatsächlich defekt, und unser Großhändler kann das passende Teil erst am Montag liefern. Ohne das Teil dürfen wir Ihnen das Auto aus Sicherheitsgründen nicht mitgeben.\nWir bauen den Bremssattel am Montag gleich morgens ein. Ihr Wagen ist dann ab 14 Uhr abholbereit, also wenn Sie aus dem Urlaub zurück sind.\nDamit Sie trotzdem an die Ostsee fahren können, kann ich Ihnen einen Ersatzwagen anbieten. Wir haben einen Kombi in der gleichen Größe da, sogar mit Dachträger. Er kostet 25 Euro pro Tag, die Versicherung ist dabei. Sie könnten ihn am Freitag ab 16 Uhr bei uns abholen.\nRufen Sie mich am besten kurz an, dann reserviere ich das Auto für Sie: 0561 92 44 07.\nMit freundlichen Grüßen\nAnja Petersen\nKfz-Service Kaya",
     "hilfen": [
      "Leider habe ich keine guten Nachrichten.",
      "… kann das passende Teil erst am … liefern.",
      "Ihr Wagen ist dann ab … abholbereit.",
      "Damit Sie trotzdem …, kann ich Ihnen … anbieten.",
      "Rufen Sie mich am besten kurz an, dann …"
     ],
     "erklaerung": "Eine schlechte Nachricht wird leichter, wenn gleich eine Lösung folgt. Das Muster erklärt den Grund ehrlich und bietet mit dem Ersatzwagen etwas Konkretes an.",
     "rubrik": [
      {
       "t": "I Aufgabenbewältigung",
       "h": "Sind alle drei Inhaltspunkte ausführlich drin, dazu Betreff, Anrede, Einleitung und Schluss?",
       "stufen": [
        {
         "w": 5,
         "t": "B2+",
         "d": "B2 gut erfüllt"
        },
        {
         "w": 4,
         "t": "B2",
         "d": "B2 erfüllt"
        },
        {
         "w": 3,
         "t": "B1+",
         "d": "B1 gut erfüllt"
        },
        {
         "w": 2,
         "t": "B1",
         "d": "B1 erfüllt"
        },
        {
         "w": 1,
         "t": "A2",
         "d": "A2"
        },
        {
         "w": 0,
         "t": "–",
         "d": "unter A2"
        }
       ]
      },
      {
       "t": "II Kommunikative Gestaltung",
       "h": "Passt der Ton zur Person (Sie oder du)? Ist der Text gut aufgebaut und verbunden?",
       "stufen": [
        {
         "w": 5,
         "t": "B2+",
         "d": "B2 gut erfüllt"
        },
        {
         "w": 4,
         "t": "B2",
         "d": "B2 erfüllt"
        },
        {
         "w": 3,
         "t": "B1+",
         "d": "B1 gut erfüllt"
        },
        {
         "w": 2,
         "t": "B1",
         "d": "B1 erfüllt"
        },
        {
         "w": 1,
         "t": "A2",
         "d": "A2"
        },
        {
         "w": 0,
         "t": "–",
         "d": "unter A2"
        }
       ]
      },
      {
       "t": "III Korrektheit",
       "h": "Grammatik und Rechtschreibung. Vergleiche mit dem Muster.",
       "stufen": [
        {
         "w": 5,
         "t": "B2+",
         "d": "B2 gut erfüllt"
        },
        {
         "w": 4,
         "t": "B2",
         "d": "B2 erfüllt"
        },
        {
         "w": 3,
         "t": "B1+",
         "d": "B1 gut erfüllt"
        },
        {
         "w": 2,
         "t": "B1",
         "d": "B1 erfüllt"
        },
        {
         "w": 1,
         "t": "A2",
         "d": "A2"
        },
        {
         "w": 0,
         "t": "–",
         "d": "unter A2"
        }
       ]
      },
      {
       "t": "IV Wortschatz",
       "h": "Passende, genaue Wörter aus dem Beruf, nicht immer dieselben.",
       "stufen": [
        {
         "w": 5,
         "t": "B2+",
         "d": "B2 gut erfüllt"
        },
        {
         "w": 4,
         "t": "B2",
         "d": "B2 erfüllt"
        },
        {
         "w": 3,
         "t": "B1+",
         "d": "B1 gut erfüllt"
        },
        {
         "w": 2,
         "t": "B1",
         "d": "B1 erfüllt"
        },
        {
         "w": 1,
         "t": "A2",
         "d": "A2"
        },
        {
         "w": 0,
         "t": "–",
         "d": "unter A2"
        }
       ]
      }
     ],
     "max": 20,
     "keineKI": true,
     "ohneWortzahl": true,
     "woerter": 120,
     "platzhalter": "Schreib hier deine E-Mail …",
     "rubrikTitel": "Bewerte dich wie die telc-Prüfer",
     "rubrikHinweis": "Vier Kriterien, je 0 bis 5 Punkte: 5 = B2 gut erfüllt, 4 = B2 erfüllt, 3 = B1 gut erfüllt, 2 = B1 erfüllt, 1 = A2. telc nennt keine Wortzahl; jeder Punkt soll in mehreren Sätzen stehen."
    },
    {
     "id": "bb12b6",
     "typ": "halbformell",
     "situation": "Sie arbeiten als Pflegefachkraft im Seniorenheim Haus am Park. Seit zwei Wochen arbeiten Sie einen neuen Kollegen ein. Ihre Pflegedienstleitung möchte wissen, wie es läuft. Antworten Sie ihr. Sie siezen sich.",
     "eingang": {
      "von": "Monika Brunner, Pflegedienstleitung",
      "betreff": "Einarbeitung Herr Mensah",
      "text": "Hallo Frau Popescu,\nHerr Mensah ist jetzt seit zwei Wochen bei uns im Wohnbereich 2. Wie läuft die Einarbeitung aus Ihrer Sicht? Gibt es etwas, wobei er noch Unterstützung braucht? Am 30. September muss ich der Heimleitung eine kurze Rückmeldung geben.\nViele Grüße\nMonika Brunner"
     },
     "sorte": "email",
     "an": "Frau Monika Brunner",
     "betreff": "AW: Einarbeitung Herr Mensah",
     "punkte": [
      {
       "nr": 1,
       "was": "Was gut läuft",
       "hinweis": "Beschreiben Sie, was schon gut klappt."
      },
      {
       "nr": 2,
       "was": "Unterstützung",
       "hinweis": "Sagen Sie, wo der Kollege noch Hilfe braucht."
      },
      {
       "nr": 3,
       "was": "Vorschlag",
       "hinweis": "Machen Sie einen Vorschlag für die nächsten Wochen."
      }
     ],
     "muster": "Betreff: AW: Einarbeitung Herr Mensah\nHallo Frau Brunner,\ndanke für Ihre Nachfrage. Insgesamt bin ich mit Herrn Mensah sehr zufrieden. Er ist pünktlich, arbeitet sorgfältig, und die Bewohner mögen ihn. Frau Albers, die sonst kaum mit jemandem spricht, wartet morgens schon auf ihn. Die Grundpflege und die Mobilisation macht er inzwischen ganz selbstständig.\nUnsicher ist er noch bei der Dokumentation am Computer. Er kennt unser Programm aus seiner alten Einrichtung nicht und braucht für die Berichte am Ende der Schicht oft doppelt so lange wie wir. Bei der Medikamentenausgabe schaue ich auch noch mit, aber das ist nach zwei Wochen normal.\nMein Vorschlag wäre, dass er nächste Woche zwei Stunden mit Herrn Lange aus der Qualitätssicherung am Programm übt. Danach könnte er im Oktober die ersten Spätdienste allein übernehmen. Ich wäre dann telefonisch erreichbar.\nViele Grüße\nIoana Popescu",
     "hilfen": [
      "Insgesamt bin ich mit … sehr zufrieden.",
      "… macht er inzwischen ganz selbstständig.",
      "Unsicher ist er noch bei …",
      "Mein Vorschlag wäre, dass …",
      "Danach könnte er …"
     ],
     "erklaerung": "Eine Rückmeldung an die Leitung ist ehrlich und konkret: ein Beispiel für das Positive, eine klare Schwäche und ein Plan, wie sie behoben wird.",
     "rubrik": [
      {
       "t": "I Aufgabenbewältigung",
       "h": "Sind alle drei Inhaltspunkte ausführlich drin, dazu Betreff, Anrede, Einleitung und Schluss?",
       "stufen": [
        {
         "w": 5,
         "t": "B2+",
         "d": "B2 gut erfüllt"
        },
        {
         "w": 4,
         "t": "B2",
         "d": "B2 erfüllt"
        },
        {
         "w": 3,
         "t": "B1+",
         "d": "B1 gut erfüllt"
        },
        {
         "w": 2,
         "t": "B1",
         "d": "B1 erfüllt"
        },
        {
         "w": 1,
         "t": "A2",
         "d": "A2"
        },
        {
         "w": 0,
         "t": "–",
         "d": "unter A2"
        }
       ]
      },
      {
       "t": "II Kommunikative Gestaltung",
       "h": "Passt der Ton zur Person (Sie oder du)? Ist der Text gut aufgebaut und verbunden?",
       "stufen": [
        {
         "w": 5,
         "t": "B2+",
         "d": "B2 gut erfüllt"
        },
        {
         "w": 4,
         "t": "B2",
         "d": "B2 erfüllt"
        },
        {
         "w": 3,
         "t": "B1+",
         "d": "B1 gut erfüllt"
        },
        {
         "w": 2,
         "t": "B1",
         "d": "B1 erfüllt"
        },
        {
         "w": 1,
         "t": "A2",
         "d": "A2"
        },
        {
         "w": 0,
         "t": "–",
         "d": "unter A2"
        }
       ]
      },
      {
       "t": "III Korrektheit",
       "h": "Grammatik und Rechtschreibung. Vergleiche mit dem Muster.",
       "stufen": [
        {
         "w": 5,
         "t": "B2+",
         "d": "B2 gut erfüllt"
        },
        {
         "w": 4,
         "t": "B2",
         "d": "B2 erfüllt"
        },
        {
         "w": 3,
         "t": "B1+",
         "d": "B1 gut erfüllt"
        },
        {
         "w": 2,
         "t": "B1",
         "d": "B1 erfüllt"
        },
        {
         "w": 1,
         "t": "A2",
         "d": "A2"
        },
        {
         "w": 0,
         "t": "–",
         "d": "unter A2"
        }
       ]
      },
      {
       "t": "IV Wortschatz",
       "h": "Passende, genaue Wörter aus dem Beruf, nicht immer dieselben.",
       "stufen": [
        {
         "w": 5,
         "t": "B2+",
         "d": "B2 gut erfüllt"
        },
        {
         "w": 4,
         "t": "B2",
         "d": "B2 erfüllt"
        },
        {
         "w": 3,
         "t": "B1+",
         "d": "B1 gut erfüllt"
        },
        {
         "w": 2,
         "t": "B1",
         "d": "B1 erfüllt"
        },
        {
         "w": 1,
         "t": "A2",
         "d": "A2"
        },
        {
         "w": 0,
         "t": "–",
         "d": "unter A2"
        }
       ]
      }
     ],
     "max": 20,
     "keineKI": true,
     "ohneWortzahl": true,
     "woerter": 120,
     "platzhalter": "Schreib hier deine E-Mail …",
     "rubrikTitel": "Bewerte dich wie die telc-Prüfer",
     "rubrikHinweis": "Vier Kriterien, je 0 bis 5 Punkte: 5 = B2 gut erfüllt, 4 = B2 erfüllt, 3 = B1 gut erfüllt, 2 = B1 erfüllt, 1 = A2. telc nennt keine Wortzahl; jeder Punkt soll in mehreren Sätzen stehen."
    }
   ]
  }
 ]
};
