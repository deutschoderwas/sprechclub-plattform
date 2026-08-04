/* ============================================================
   deutschoderwas club — SPRECHEN A1 (Start Deutsch 1)

   Aufbau nach der offiziellen Testbeschreibung des Goethe-
   Instituts (Prüfungsziele Testbeschreibung A1 SD1):

     Teil 1  Sich vorstellen          3 Punkte
             Stichwörter + Namen buchstabieren + eine Nummer nennen
             ca. 80 Sekunden pro Person
     Teil 2  Um Informationen bitten  6 Punkte
             zwei Handlungskarten (Thema + Stichwort)
             2 Punkte pro Frage, 1 Punkt pro Antwort
     Teil 3  Bitten formulieren       6 Punkte
             zwei Bildkarten
             2 Punkte pro Bitte, 1 Punkt pro Reaktion

   Zusammen 15 Punkte, ein Viertel der Gesamtprüfung,
   Gruppenprüfung mit bis zu vier Teilnehmenden, circa 15 Minuten.

   Bewertet wird pro Aufgabe in drei Stufen: voll erfüllt und
   verständlich, nur teilweise erfüllt, nicht erfüllt.

   Der Weg hat vier Stufen — wie bei Lesen, Hören und Schreiben:

     1  Über mich          die Sätze, die in Teil 1 gebraucht werden
     2  Fragen und bitten  die Bausteine für Teil 2 und Teil 3
     3  Die Aufgabentypen  jeder Prüfungsteil einzeln, mit Musterlösung
     4  Die ganze Prüfung  alle drei Teile hintereinander, mit Uhr

   Gesprochen wird gegen die eigene Aufnahme: erst selbst sagen,
   dann die Musterantwort hören, dann ehrlich abhaken. Das ersetzt
   keinen Partner, aber es macht den Mund locker — und genau daran
   scheitern die meisten am Prüfungstag.
   ============================================================ */

window.SPRECHEN_A1 = {
 "niveau": "A1",
 "pruefung": "Start Deutsch 1",
 "minuten": 15,
 "punkte": 15,

 "stufen": [
  { "nr": 1, "titel": "Über mich", "zeichen": "🙋",
    "was": "Die sieben Angaben, nach denen in Teil 1 gefragt wird — und wie du sie in einem Satz sagst." },
  { "nr": 2, "titel": "Fragen und bitten", "zeichen": "🗣️",
    "was": "Wie eine Frage gebaut wird und wie eine Bitte höflich klingt. Das ist der ganze Trick in Teil 2 und 3." },
  { "nr": 3, "titel": "Die Aufgabentypen", "zeichen": "🎯",
    "was": "Jeder Prüfungsteil einzeln geübt — mit Karte, Musterantwort und Selbstcheck." },
  { "nr": 4, "titel": "Die ganze Prüfung", "zeichen": "⏱️",
    "was": "Alle drei Teile hintereinander, so wie am Prüfungstag." }
 ],

 "bloecke": [

  { "id": "sp1b1", "stufe": 1, "titel": "Die sieben Angaben",
    "kurz": "Name, Alter, Land, Wohnort, Sprachen, Beruf, Hobby",
    "ziel": "Nach diesem Block kannst du zu jedem der sieben Stichwörter einen richtigen Satz sagen.",
    "zeichen": "🙋", "farbe": "gruen",
    "aufgaben": [
     { "art": "wahl", "frage": "Stichwort: Name. Was sagst du?",
       "optionen": ["Ich heiße Amina Haddad.", "Ich bin Name Amina.", "Mein Name bin Amina."],
       "loesung": 0,
       "erklaerung": "„Ich heiße …\" oder „Mein Name ist …\". Beides ist richtig. „Ich bin Name\" gibt es nicht." },
     { "art": "wahl", "frage": "Stichwort: Alter. Was sagst du?",
       "optionen": ["Ich habe 34 Jahre.", "Ich bin 34 Jahre alt.", "Ich bin 34 Jahre alt Jahre."],
       "loesung": 1,
       "erklaerung": "Im Deutschen ist man alt, man hat kein Alter. „Ich bin 34.\" reicht auch." },
     { "art": "wahl", "frage": "Stichwort: Land. Was sagst du?",
       "optionen": ["Ich komme aus Tunesien.", "Ich komme von Tunesien.", "Ich komme aus der Tunesien."],
       "loesung": 0,
       "erklaerung": "Bei Ländern ohne Artikel: „aus\" + Land. Aus Tunesien, aus Polen, aus Syrien. Nur wenige Länder haben einen Artikel: aus der Türkei, aus der Ukraine, aus dem Iran." },
     { "art": "wahl", "frage": "Stichwort: Wohnort. Was sagst du?",
       "optionen": ["Ich wohne in Köln.", "Ich wohne nach Köln.", "Ich lebe Köln."],
       "loesung": 0,
       "erklaerung": "„wohnen in\" + Stadt. „nach\" brauchst du nur beim Fahren: Ich fahre nach Köln." },
     { "art": "wahl", "frage": "Stichwort: Sprachen. Was sagst du?",
       "optionen": ["Ich spreche Arabisch und ein bisschen Deutsch.", "Ich spreche arabisch und deutsch bisschen.", "Ich rede Arabisch, Deutsch klein."],
       "loesung": 0,
       "erklaerung": "Sprachen schreibt man groß und benutzt sie ohne Artikel. „ein bisschen\" steht vor der Sprache." },
     { "art": "wahl", "frage": "Stichwort: Beruf. Was sagst du?",
       "optionen": ["Ich arbeite als Friseurin.", "Ich bin eine Friseurin.", "Ich mache Friseurin."],
       "loesung": 0,
       "erklaerung": "„Ich bin Friseurin.\" ohne Artikel oder „Ich arbeite als Friseurin.\" Mit „eine\" klingt es falsch." },
     { "art": "wahl", "frage": "Stichwort: Hobby. Was sagst du?",
       "optionen": ["Mein Hobby ist Kochen.", "Ich habe Hobby Kochen.", "Mein Hobby bin kochen."],
       "loesung": 0,
       "erklaerung": "„Mein Hobby ist …\" oder „In meiner Freizeit koche ich gern.\" Das Verb als Hobby wird großgeschrieben: das Kochen, das Lesen." },
     { "art": "wahl", "frage": "Die Prüferin fragt: „Wie ist Ihr Familienname?\" Was antwortest du?",
       "optionen": ["Haddad.", "Ich bin Amina.", "Meine Familie ist Haddad."],
       "loesung": 0,
       "erklaerung": "Familienname ist der Nachname. Vorname ist Amina, Familienname ist Haddad. Nach dem Familiennamen kommt fast immer: „Buchstabieren Sie bitte.\"" }
    ] },

  { "id": "sp1b2", "stufe": 1, "titel": "Buchstabieren und Zahlen",
    "kurz": "Der Teil, den fast alle unterschätzen",
    "ziel": "Nach diesem Block buchstabierst du deinen Namen sicher und sagst Telefonnummern so, wie man sie in Deutschland sagt.",
    "zeichen": "🔤", "farbe": "blau",
    "aufgaben": [
     { "art": "wahl", "frage": "Wie buchstabiert man das ä?",
       "optionen": ["a-Umlaut", "ah-e", "doppel-a"],
       "loesung": 0,
       "erklaerung": "ä = a-Umlaut, ö = o-Umlaut, ü = u-Umlaut. Und ß heißt Eszett oder scharfes S." },
     { "art": "wahl", "frage": "Wie buchstabiert man das ss in „Straße\"?",
       "optionen": ["Da steht kein ss, sondern ß: Eszett.", "Doppel-S.", "S-S-Umlaut."],
       "loesung": 0,
       "erklaerung": "Straße schreibt man mit ß. Beim Buchstabieren sagst du: S-T-R-A-Eszett-E." },
     { "art": "wahl", "frage": "Der Prüfer sagt: „Buchstabieren Sie bitte.\" Du verstehst ihn nicht. Was sagst du?",
       "optionen": ["Wie bitte? Können Sie das wiederholen?", "Ich weiß nicht.", "Nein."],
       "loesung": 0,
       "erklaerung": "Nachfragen kostet keine Punkte. Schweigen schon. „Wie bitte?\" und „Können Sie das bitte wiederholen?\" solltest du auswendig können." },
     { "art": "wahl", "frage": "Deine Nummer ist 0176 3428591. Wie sagst du sie in der Prüfung?",
       "optionen": ["null-eins-sieben-sechs, drei-vier-zwei-acht-fünf-neun-eins", "eintausendsiebenhundertsechzig …", "null hundert sechsundsiebzig …"],
       "loesung": 0,
       "erklaerung": "Telefonnummern sagt man Ziffer für Ziffer, langsam und mit kleinen Pausen. Niemals als große Zahl." },
     { "art": "wahl", "frage": "Was ist die Postleitzahl in „50667 Köln\" — und wie sagst du sie?",
       "optionen": ["50667, gesprochen: fünf-null-sechs-sechs-sieben", "Köln, gesprochen: Köln", "50667, gesprochen: fünfzigtausendsechshundertsiebenundsechzig"],
       "loesung": 0,
       "erklaerung": "Die Postleitzahl steht vor der Stadt und wird auch Ziffer für Ziffer gesprochen." },
     { "art": "wahl", "frage": "Welche Zahl hörst du falsch am häufigsten?",
       "optionen": ["13 und 30 — dreizehn und dreißig", "1 und 2", "5 und 50"],
       "loesung": 0,
       "erklaerung": "Die Paare 13/30, 14/40, 15/50 bis 19/90 klingen ähnlich. Achte auf das Ende: -zehn oder -zig. Im Zweifel nachfragen." },
     { "art": "wahl", "frage": "Wie sagt man 21 auf Deutsch?",
       "optionen": ["einundzwanzig", "zwanzigundeins", "zwanzig-eins"],
       "loesung": 0,
       "erklaerung": "Im Deutschen kommt die kleine Zahl zuerst: einundzwanzig, zweiundvierzig, siebenundneunzig. Das ist für viele die schwerste Umstellung." },
     { "art": "wahl", "frage": "Der Prüfer fragt nach deiner Hausnummer. Du wohnst in der Ahornstraße 9. Was sagst du?",
       "optionen": ["Ahornstraße neun.", "Neun Ahornstraße.", "Ahornstraße nummer neunte."],
       "loesung": 0,
       "erklaerung": "Im Deutschen steht die Hausnummer hinter der Straße — anders als im Englischen." }
    ] },

  { "id": "sp2b1", "stufe": 2, "titel": "Fragen bauen",
    "kurz": "W-Frage oder Ja/Nein-Frage — das entscheidet die Wortstellung",
    "ziel": "Nach diesem Block baust du aus einem Stichwort in Sekunden eine richtige Frage. Das sind die 2 Punkte in Teil 2.",
    "zeichen": "❓", "farbe": "gelb",
    "aufgaben": [
     { "art": "ordnen", "frage": "Thema Einkaufen, Stichwort Brot. Bau die Frage.",
       "teile": ["Wo", "kaufen", "Sie", "Brot", "?"],
       "loesung": [0,1,2,3,4],
       "erklaerung": "Bei der W-Frage steht das Fragewort zuerst, dann das Verb, dann die Person: Wo kaufen Sie Brot?" },
     { "art": "ordnen", "frage": "Thema Wochenende, Stichwort Sport. Bau die Ja/Nein-Frage.",
       "teile": ["Machen", "Sie", "am Wochenende", "Sport", "?"],
       "loesung": [0,1,2,3,4],
       "erklaerung": "Ohne Fragewort steht das Verb ganz vorn: Machen Sie am Wochenende Sport? Die Antwort ist dann ja oder nein." },
     { "art": "wahl", "frage": "Auf der Karte steht nur ein Wort: „Frühstück\". Welche Frage passt?",
       "optionen": ["Was essen Sie zum Frühstück?", "Frühstück Sie?", "Sie Frühstück essen?"],
       "loesung": 0,
       "erklaerung": "Aus einem Stichwort machst du eine ganze Frage. Nur das Wort vorlesen gibt keine Punkte." },
     { "art": "wahl", "frage": "Welches Fragewort passt zu „Uhrzeit\"?",
       "optionen": ["Wann", "Wo", "Wer"],
       "loesung": 0,
       "erklaerung": "Wann fragt nach der Zeit, wo nach dem Ort, wer nach der Person, was nach der Sache, wie nach der Art, wie viel nach der Menge." },
     { "art": "ordnen", "frage": "Thema Familie, Stichwort Kinder. Bau die Frage.",
       "teile": ["Wie viele", "Kinder", "haben", "Sie", "?"],
       "loesung": [0,1,2,3,4],
       "erklaerung": "„Wie viele\" gehört direkt vor das Nomen: Wie viele Kinder haben Sie?" },
     { "art": "wahl", "frage": "Dein Partner fragt: „Wann stehen Sie auf?\" Welche Antwort gibt einen Punkt?",
       "optionen": ["Um sechs Uhr.", "Ja.", "Aufstehen."],
       "loesung": 0,
       "erklaerung": "Auf eine W-Frage passt kein ja. Ein kurzer, passender Satzteil reicht — aber er muss zur Frage passen." },
     { "art": "wahl", "frage": "Du hast die Frage nicht verstanden. Was tust du?",
       "optionen": ["„Entschuldigung, können Sie die Frage wiederholen?\"", "Du sagst irgendetwas.", "Du sagst nichts und wartest."],
       "loesung": 0,
       "erklaerung": "Nachfragen ist erlaubt und kostet keinen Punkt. Nichts sagen kostet alle." },
     { "art": "ordnen", "frage": "Thema Reisen, Stichwort Zug. Bau die Frage.",
       "teile": ["Fahren", "Sie", "gern", "mit dem Zug", "?"],
       "loesung": [0,1,2,3,4],
       "erklaerung": "Mit dem Zug, mit dem Bus, mit dem Auto — aber: zu Fuß. Das Verb steht bei der Ja/Nein-Frage vorn." }
    ] },

  { "id": "sp2b2", "stufe": 2, "titel": "Höflich bitten",
    "kurz": "Können Sie …? — und warum „bitte\" nie fehlen darf",
    "ziel": "Nach diesem Block formulierst du zu jedem Gegenstand eine höfliche Bitte und reagierst passend darauf. Das sind die 6 Punkte in Teil 3.",
    "zeichen": "🙏", "farbe": "rot",
    "aufgaben": [
     { "art": "ordnen", "frage": "Auf der Karte ist ein Fenster. Bau die Bitte.",
       "teile": ["Können", "Sie", "bitte", "das Fenster", "öffnen", "?"],
       "loesung": [0,1,2,3,4,5],
       "erklaerung": "Das Muster ist immer gleich: Können Sie bitte + Sache + Verb am Ende. Das Verb rutscht ans Ende, weil „können\" davor steht." },
     { "art": "wahl", "frage": "Auf der Karte ist ein Stift. Welche Bitte gibt volle Punkte?",
       "optionen": ["Können Sie mir bitte den Stift geben?", "Stift bitte.", "Ich will den Stift."],
       "loesung": 0,
       "erklaerung": "Ein ganzer Satz mit „bitte\" gibt 2 Punkte. Nur das Wort nennen oder „ich will\" ist zu wenig und klingt unhöflich." },
     { "art": "wahl", "frage": "Jemand bittet dich: „Können Sie bitte das Licht anmachen?\" Was antwortest du?",
       "optionen": ["Ja, gern.", "Danke.", "Bitte."],
       "loesung": 0,
       "erklaerung": "Auf eine Bitte reagierst du mit „Ja, gern.\", „Ja, natürlich.\" oder „Einen Moment, bitte.\" Das gibt den einen Punkt für die Reaktion." },
     { "art": "wahl", "frage": "Du kannst die Bitte nicht erfüllen. Was sagst du?",
       "optionen": ["Tut mir leid, das geht leider nicht.", "Nein.", "Ich kann nicht, tschüss."],
       "loesung": 0,
       "erklaerung": "Auch ein Nein gibt Punkte, wenn es höflich ist. „Tut mir leid\" plus kurze Begründung ist perfekt." },
     { "art": "ordnen", "frage": "Auf der Karte ist eine Tür. Bau die Bitte mit du.",
       "teile": ["Kannst", "du", "bitte", "die Tür", "zumachen", "?"],
       "loesung": [0,1,2,3,4,5],
       "erklaerung": "Mit du heißt es „Kannst du …?\", mit Sie „Können Sie …?\". In der Prüfung siezt du die anderen Teilnehmenden — außer ihr habt euch vorher geduzt." },
     { "art": "wahl", "frage": "Welche Bitte ist am höflichsten?",
       "optionen": ["Könnten Sie mir bitte helfen?", "Können Sie mir helfen?", "Helfen Sie mir."],
       "loesung": 0,
       "erklaerung": "„Könnten\" ist noch höflicher als „können\". Ein Befehl ohne bitte klingt unfreundlich — inhaltlich richtig, aber nicht angemessen." },
     { "art": "wahl", "frage": "Auf der Karte ist ein Glas Wasser. Was passt nicht?",
       "optionen": ["Wo ist das Wasser?", "Können Sie mir bitte ein Glas Wasser geben?", "Könnten Sie mir bitte Wasser bringen?"],
       "loesung": 0,
       "erklaerung": "In Teil 3 sollst du bitten, nicht fragen. Eine Frage nach dem Ort erfüllt die Aufgabe nicht — das ist Teil 2." },
     { "art": "ordnen", "frage": "Auf der Karte ist eine Uhr. Bau die Bitte.",
       "teile": ["Können", "Sie", "mir", "bitte", "die Uhrzeit", "sagen", "?"],
       "loesung": [0,1,2,3,4,5,6],
       "erklaerung": "„mir\" steht direkt hinter der Person und vor „bitte\". Merksatz: Können Sie mir bitte …?" }
    ] }
 ],

 "teile": [

  { "nr": 1, "art": "vorstellen", "name": "Sich vorstellen", "kurz": "Stichwörter, buchstabieren, eine Nummer",
    "was": "Du bekommst ein Blatt mit sieben Stichwörtern und stellst dich vor. Danach buchstabierst du ein Wort und nennst eine Nummer.",
    "tipp": "Sprich in ganzen Sätzen und lass kein Stichwort aus. Wer nur Wörter aufzählt, verliert Punkte.",
    "zeichen": "🙋", "farbe": "gruen", "punkte": 3,
    "runden": [
     { "id": "s1r1",
       "stichwoerter": ["Name", "Alter", "Land", "Wohnort", "Sprachen", "Beruf", "Hobby"],
       "buchstabieren": "Familienname",
       "nummer": "Telefonnummer",
       "muster": "Ich heiße Amina Haddad. Ich bin 34 Jahre alt. Ich komme aus Tunesien und wohne in Köln. Ich spreche Arabisch, Französisch und ein bisschen Deutsch. Ich arbeite als Friseurin. Mein Hobby ist Kochen.",
       "muster_buchstabieren": "H-A-D-D-A-D",
       "muster_nummer": "null-eins-sieben-sechs, drei-vier-zwei-acht-fünf-neun-eins",
       "erklaerung": "Sieben Stichwörter, sieben Aussagen. Wer eines auslässt, bekommt statt 1 Punkt nur einen halben. Buchstabieren und Nummer sind je ein eigener Punkt." },
     { "id": "s1r2",
       "stichwoerter": ["Name", "Alter", "Land", "Wohnort", "Sprachen", "Beruf", "Hobby"],
       "buchstabieren": "Wohnort",
       "nummer": "Postleitzahl",
       "muster": "Mein Name ist Pawel Nowak. Ich bin 27. Ich komme aus Polen und lebe seit zwei Jahren in Nürnberg. Ich spreche Polnisch, Englisch und Deutsch. Ich bin Elektriker. In meiner Freizeit spiele ich gern Fußball.",
       "muster_buchstabieren": "N-Ü-R-N-B-E-R-G, mit u-Umlaut",
       "muster_nummer": "neun-null-vier-null-drei",
       "erklaerung": "Beim Buchstabieren von Umlauten sagst du „u-Umlaut\" statt „ü\". Postleitzahlen werden Ziffer für Ziffer gesprochen." },
     { "id": "s1r3",
       "stichwoerter": ["Name", "Alter", "Land", "Wohnort", "Sprachen", "Beruf", "Hobby"],
       "buchstabieren": "Vorname",
       "nummer": "Hausnummer",
       "muster": "Ich heiße Yusuf Demir. Ich bin 41 Jahre alt. Ich komme aus der Türkei. Ich wohne in Essen, in der Bergstraße. Ich spreche Türkisch und Deutsch. Ich arbeite als Koch. Mein Hobby ist Musik.",
       "muster_buchstabieren": "Y-U-S-U-F",
       "muster_nummer": "vierzehn",
       "erklaerung": "Aus der Türkei, aus dem Iran, aus der Ukraine — diese Länder haben einen Artikel. Die meisten anderen nicht." }
    ] },

  { "nr": 2, "art": "fragen", "name": "Um Informationen bitten", "kurz": "Handlungskarten mit Thema und Stichwort",
    "was": "Du ziehst zwei Karten. Auf jeder steht ein Thema und ein Stichwort. Du stellst eine Frage — und beantwortest die Frage der anderen.",
    "tipp": "Aus dem Stichwort muss eine ganze Frage werden. Zwei Punkte für die Frage, ein Punkt für die Antwort.",
    "zeichen": "❓", "farbe": "gelb", "punkte": 6,
    "runden": [
     { "id": "s2r1", "thema": "Einkaufen",
       "karten": [
        { "stichwort": "Brot", "musterfrage": "Wo kaufen Sie Brot?", "musterantwort": "Beim Bäcker um die Ecke." },
        { "stichwort": "Supermarkt", "musterfrage": "Wann gehen Sie in den Supermarkt?", "musterantwort": "Meistens am Samstagvormittag." }
       ],
       "erklaerung": "Das Thema steht oben auf der Karte, das Stichwort darunter. Deine Frage muss beides verbinden." },
     { "id": "s2r2", "thema": "Wochenende",
       "karten": [
        { "stichwort": "Sport", "musterfrage": "Machen Sie am Wochenende Sport?", "musterantwort": "Ja, ich gehe schwimmen." },
        { "stichwort": "Familie", "musterfrage": "Was machen Sie am Wochenende mit Ihrer Familie?", "musterantwort": "Wir kochen zusammen und gehen spazieren." }
       ],
       "erklaerung": "Beide Fragetypen sind erlaubt — mit Fragewort oder ohne. Wichtig ist nur, dass die Wortstellung stimmt." },
     { "id": "s2r3", "thema": "Wohnen",
       "karten": [
        { "stichwort": "Zimmer", "musterfrage": "Wie viele Zimmer hat Ihre Wohnung?", "musterantwort": "Drei Zimmer, mit Küche und Bad." },
        { "stichwort": "Nachbarn", "musterfrage": "Kennen Sie Ihre Nachbarn?", "musterantwort": "Ja, wir grüßen uns jeden Tag." }
       ],
       "erklaerung": "„Wie viele\" steht immer direkt vor dem Nomen. Und denk daran: Bei der Antwort reicht ein kurzer Satz." },
     { "id": "s2r4", "thema": "Essen und Trinken",
       "karten": [
        { "stichwort": "Frühstück", "musterfrage": "Was essen Sie zum Frühstück?", "musterantwort": "Meistens Brot mit Käse und einen Kaffee." },
        { "stichwort": "Restaurant", "musterfrage": "Gehen Sie oft ins Restaurant?", "musterantwort": "Nein, nur einmal im Monat." }
       ],
       "erklaerung": "„zum Frühstück\", „zum Mittagessen\", „zum Abendessen\" — immer mit zum." },
     { "id": "s2r5", "thema": "Arbeit",
       "karten": [
        { "stichwort": "Beruf", "musterfrage": "Was sind Sie von Beruf?", "musterantwort": "Ich bin Krankenpflegerin." },
        { "stichwort": "Uhrzeit", "musterfrage": "Wann beginnt Ihre Arbeit?", "musterantwort": "Um halb acht." }
       ],
       "erklaerung": "„Was sind Sie von Beruf?\" ist die feste Wendung. Nicht: Was ist Ihr Beruf machen?" }
    ] },

  { "nr": 3, "art": "bitten", "name": "Bitten formulieren", "kurz": "Bildkarten mit Alltagsgegenständen",
    "was": "Du ziehst zwei Bildkarten. Zu jedem Gegenstand formulierst du eine Bitte — und reagierst auf die Bitte der anderen.",
    "tipp": "Immer ein ganzer Satz mit bitte. Zwei Punkte für die Bitte, ein Punkt für die Reaktion.",
    "zeichen": "🙏", "farbe": "rot", "punkte": 6,
    "runden": [
     { "id": "s3r1",
       "karten": [
        { "gegenstand": "Fenster", "zeichen": "🪟", "musterbitte": "Können Sie bitte das Fenster öffnen?", "musterreaktion": "Ja, natürlich." },
        { "gegenstand": "Stift", "zeichen": "🖊️", "musterbitte": "Können Sie mir bitte den Stift geben?", "musterreaktion": "Ja, gern. Hier bitte." }
       ],
       "erklaerung": "Auf der Karte ist nur ein Bild, kein Text. Du entscheidest, worum du bittest." },
     { "id": "s3r2",
       "karten": [
        { "gegenstand": "Tür", "zeichen": "🚪", "musterbitte": "Könnten Sie bitte die Tür zumachen?", "musterreaktion": "Einen Moment, ich mache das." },
        { "gegenstand": "Wasser", "zeichen": "💧", "musterbitte": "Können Sie mir bitte ein Glas Wasser bringen?", "musterreaktion": "Ja, sofort." }
       ],
       "erklaerung": "„Könnten\" statt „können\" klingt noch höflicher und ist auf A1 schon erlaubt." },
     { "id": "s3r3",
       "karten": [
        { "gegenstand": "Licht", "zeichen": "💡", "musterbitte": "Können Sie bitte das Licht anmachen?", "musterreaktion": "Ja, gern." },
        { "gegenstand": "Handy", "zeichen": "📱", "musterbitte": "Können Sie mir bitte Ihre Handynummer geben?", "musterreaktion": "Tut mir leid, das möchte ich lieber nicht." }
       ],
       "erklaerung": "Auch ein höfliches Nein gibt den Punkt für die Reaktion. Wichtig ist, dass du überhaupt reagierst." },
     { "id": "s3r4",
       "karten": [
        { "gegenstand": "Uhr", "zeichen": "🕐", "musterbitte": "Können Sie mir bitte die Uhrzeit sagen?", "musterreaktion": "Es ist Viertel nach drei." },
        { "gegenstand": "Buch", "zeichen": "📗", "musterbitte": "Können Sie mir bitte das Buch geben?", "musterreaktion": "Ja, hier ist es." }
       ],
       "erklaerung": "Bei „sagen\", „geben\", „bringen\", „zeigen\" brauchst du fast immer ein „mir\"." },
     { "id": "s3r5",
       "karten": [
        { "gegenstand": "Stuhl", "zeichen": "🪑", "musterbitte": "Können Sie mir bitte den Stuhl bringen?", "musterreaktion": "Ja, natürlich." },
        { "gegenstand": "Zettel", "zeichen": "📝", "musterbitte": "Können Sie das bitte auf einen Zettel schreiben?", "musterreaktion": "Ja, gern. Einen Moment." }
       ],
       "erklaerung": "Das zweite Verb steht immer am Satzende: bringen, schreiben, öffnen, geben." }
    ] }
 ],

 "laeufe": [
  { "id": "sp1", "titel": "Prüfungslauf 1", "minuten": 15,
    "teile": [
     { "nr": 1, "art": "vorstellen",
       "stichwoerter": ["Name", "Alter", "Land", "Wohnort", "Sprachen", "Beruf", "Hobby"],
       "buchstabieren": "Familienname", "nummer": "Telefonnummer",
       "muster": "Ich heiße Olena Kovalenko. Ich bin 31 Jahre alt. Ich komme aus der Ukraine und wohne in Leipzig. Ich spreche Ukrainisch, Russisch und ein bisschen Deutsch. Ich arbeite als Verkäuferin. Mein Hobby ist Lesen.",
       "muster_buchstabieren": "K-O-V-A-L-E-N-K-O",
       "muster_nummer": "null-eins-fünf-eins, zwei-drei-neun-vier-sieben-null-acht" },
     { "nr": 2, "art": "fragen", "thema": "Freizeit",
       "karten": [
        { "stichwort": "Kino", "musterfrage": "Gehen Sie gern ins Kino?", "musterantwort": "Ja, aber nicht sehr oft." },
        { "stichwort": "Urlaub", "musterfrage": "Wohin fahren Sie im Urlaub?", "musterantwort": "Meistens ans Meer." }
       ] },
     { "nr": 3, "art": "bitten",
       "karten": [
        { "gegenstand": "Fenster", "zeichen": "🪟", "musterbitte": "Können Sie bitte das Fenster zumachen?", "musterreaktion": "Ja, natürlich." },
        { "gegenstand": "Kaffee", "zeichen": "☕", "musterbitte": "Können Sie mir bitte einen Kaffee bringen?", "musterreaktion": "Ja, gern." }
       ] }
    ] },

  { "id": "sp2", "titel": "Prüfungslauf 2", "minuten": 15,
    "teile": [
     { "nr": 1, "art": "vorstellen",
       "stichwoerter": ["Name", "Alter", "Land", "Wohnort", "Sprachen", "Beruf", "Hobby"],
       "buchstabieren": "Wohnort", "nummer": "Postleitzahl",
       "muster": "Mein Name ist Ali Kaya. Ich bin 45. Ich komme aus der Türkei und lebe in Dortmund. Ich spreche Türkisch, Kurdisch und Deutsch. Ich bin Busfahrer. In meiner Freizeit gehe ich gern spazieren.",
       "muster_buchstabieren": "D-O-R-T-M-U-N-D",
       "muster_nummer": "vier-vier-eins-drei-sieben" },
     { "nr": 2, "art": "fragen", "thema": "Gesundheit",
       "karten": [
        { "stichwort": "Arzt", "musterfrage": "Wann gehen Sie zum Arzt?", "musterantwort": "Nur wenn ich krank bin." },
        { "stichwort": "Sport", "musterfrage": "Machen Sie jeden Tag Sport?", "musterantwort": "Nein, nur zweimal in der Woche." }
       ] },
     { "nr": 3, "art": "bitten",
       "karten": [
        { "gegenstand": "Tasche", "zeichen": "👜", "musterbitte": "Können Sie mir bitte die Tasche geben?", "musterreaktion": "Ja, hier bitte." },
        { "gegenstand": "Telefon", "zeichen": "☎️", "musterbitte": "Könnten Sie bitte später anrufen?", "musterreaktion": "Ja, kein Problem." }
       ] }
    ] }
 ]
};
