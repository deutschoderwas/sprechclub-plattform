/* ============================================================
   telc Deutsch A2 (Start Deutsch 2) — Schreiben
   Aufbau nach dem telc-Übungstest Deutsch A2 (Stand 12/2024):
     Teil 1  Formular: fünf Angaben aus einem kurzen Text, je 1 Punkt
     Teil 2  Kurzer Brief oder E-Mail, etwa 40 Wörter, zu drei von vier
             Punkten. Je Inhaltspunkt bis 3, dazu 1 Punkt für Anrede und Gruß.
   15 Punkte. Lesen und Schreiben zusammen 50 Minuten; hier 20 fürs Schreiben.
   ============================================================ */
(function(){
var PT = 'Wähle drei der vier Punkte und schreib zu jedem ein bis zwei Sätze. Anrede und Gruß nicht vergessen.';
window.SCHREIBEN_TELC_A2 = {
  niveau:'telcA2', pruefung:'telc Deutsch A2', minuten:20, punkte:15,
  stufen:[
    { nr:1, titel:'Die Wörter im Formular', zeichen:'📋', was:'Familienstand, Geburtsort, Staatsangehörigkeit: Hier lernst du, was in welches Feld gehört.' },
    { nr:2, titel:'Der kurze Brief', zeichen:'🧱', was:'Anrede, drei Punkte, Gruß. Und die Sätze, mit denen du auf eine Einladung oder Frage antwortest.' },
    { nr:3, titel:'Die zwei Aufgabentypen', zeichen:'🧩', was:'Echte Formulare und Briefe, mit Muster und Selbstcheck.' },
    { nr:4, titel:'Die ganze Prüfung', zeichen:'⏱️', was:'Formular und Brief zusammen, 20 Minuten.' } ],

  bloecke:[
    { id:'ta2w1', stufe:1, titel:'Was gehört in welches Feld?', kurz:'Die Wörter im Anmeldeformular',
      ziel:'Nach diesem Block füllst du jedes Formular ohne Raten aus.', zeichen:'📋', farbe:'turq',
      aufgaben:[
        { art:'wahl', frage:'Im Formular steht „Familienstand“. Was schreiben Sie?', opt:['verheiratet','Deutschland','Lehrerin'], loesung:0,
          erklaerung:'Familienstand: ledig, verheiratet, geschieden oder verwitwet.' },
        { art:'wahl', frage:'„Geburtsort“ ist …', opt:['die Stadt, in der man geboren ist','die Stadt, in der man wohnt','das Land, aus dem man kommt'], loesung:0,
          erklaerung:'Geburtsort ist der Ort der Geburt. Der Wohnort kann ein anderer sein.' },
        { art:'wahl', frage:'Im Text: „Er ist am 4. Juni 1990 geboren.“ Was schreiben Sie bei „Geburtsdatum“?', opt:['04.06.1990','06.04.1990','1990.06.04'], loesung:0,
          erklaerung:'In Deutschland schreibt man Tag, Monat, Jahr: 04.06.1990.' },
        { art:'wahl', frage:'„Staatsangehörigkeit“: Die Frau kommt aus Polen. Was schreibt sie?', opt:['polnisch','Polen, Warschau','Polnisch sprechen'], loesung:0,
          erklaerung:'Man schreibt meistens das Adjektiv: polnisch, türkisch, syrisch.' },
        { art:'wahl', frage:'„Fremdsprachen“: Was gehört hierhin?', opt:['Englisch und Spanisch','Deutschkurs A2','aus Spanien'], loesung:0,
          erklaerung:'Fremdsprachen sind Sprachen, die man zusätzlich spricht.' },
        { art:'wahl', frage:'„PLZ“ ist die Abkürzung für …', opt:['Postleitzahl','Platz','Privatzahl'], loesung:0,
          erklaerung:'PLZ: Postleitzahl, zum Beispiel 50667.' },
        { art:'wahl', frage:'Im Text: „Sie war verheiratet, jetzt lebt sie allein.“ Familienstand?', opt:['geschieden','ledig','verheiratet'], loesung:0,
          erklaerung:'Wer verheiratet war und nicht mehr ist, ist geschieden. Ledig heißt: nie verheiratet.' },
        { art:'wahl', frage:'„Bevorzugte Kurszeit“: Die Person arbeitet bis 17 Uhr. Was passt?', opt:['abends','vormittags','mittags'], loesung:0,
          erklaerung:'Wer bis 17 Uhr arbeitet, kann nur abends.' } ] },

    { id:'ta2w2', stufe:2, titel:'Bausteine für den Brief', kurz:'Anrede, Antwort, Gruß',
      ziel:'Nach diesem Block hast du für jeden Brief einen Anfang und ein Ende.', zeichen:'✉️', farbe:'rot',
      aufgaben:[
        { art:'wahl', frage:'Sie schreiben an Ihre Bekannte Sabine. Welche Anrede passt?', opt:['Liebe Sabine,','Sehr geehrte Sabine,','Hallo Frau Sabine,'], loesung:0,
          erklaerung:'Bekannte und Freunde duzt man: Liebe Sabine, oder Hallo Sabine,' },
        { art:'wahl', frage:'Sie bedanken sich für eine Einladung. Welcher Satz passt?', opt:['Vielen Dank für deine Einladung!','Ich lade dich ein.','Bitte schicken Sie mir die Einladung.'], loesung:0,
          erklaerung:'Am Anfang bedankt man sich für die Einladung.' },
        { art:'wahl', frage:'Sie möchten fragen, ob Sie jemanden mitbringen dürfen. Was schreiben Sie?', opt:['Darf ich meinen Freund mitbringen?','Mein Freund ist mitgebracht.','Bring deinen Freund!'], loesung:0,
          erklaerung:'Höflich fragen: Darf ich …?' },
        { art:'wahl', frage:'Welcher Gruß passt zu einem Brief an eine Freundin?', opt:['Viele Grüße','Mit freundlichen Grüßen, Ihr','Hochachtungsvoll'], loesung:0,
          erklaerung:'Bei Freunden: Viele Grüße oder Liebe Grüße.' },
        { art:'ordnen', frage:'Bring den Brief in die richtige Reihenfolge.', teile:['Liebe Maria,','vielen Dank für die Einladung zu deiner Party.','Ich komme gern und bringe einen Kuchen mit.','Wann soll ich da sein?','Viele Grüße','Ahmed'],
          erklaerung:'Anrede, Dank, Antwort, Frage, Gruß, Name.' },
        { art:'ordnen', frage:'Bring die E-Mail in die richtige Reihenfolge.', teile:['Hallo Jonas,','leider kann ich am Samstag nicht kommen.','Ich muss arbeiten.','Können wir uns am Sonntag treffen?','Liebe Grüße','Nadia'],
          erklaerung:'Anrede, Absage, Grund, Vorschlag, Gruß, Name.' } ] }
  ],

  teile:[
    { nr:1, art:'formular', name:'Formular ausfüllen', kurz:'Fünf Angaben aus dem Text',
      was:'Ein kurzer Text beschreibt eine Person. Im Formular fehlen fünf Angaben. Alle stehen im Text: Du musst sie finden und richtig hinschreiben.',
      tipp:'Lies erst das Feld, dann such im Text. Datum kurz mit Ziffern schreiben. Geburtsort und Wohnort sind oft verschieden.',
      zeichen:'📋', farbe:'turq', punkte:5,
      runden:[
        { id:'ta2w1r1', situation:'Ihr Freund Karim Haddad möchte einen Deutschkurs B1 machen. Sie helfen ihm bei der Anmeldung im Internet.',
          text:'Karim Haddad kommt aus Marokko. Er ist am zweiten Februar neunzehnhundertdreiundneunzig in Fès geboren. Seit drei Jahren wohnt er in der Gartenstraße zwölf in vierundvierzigtausendeinhundertfünfunddreißig Dortmund. Karim ist verheiratet und hat einen Sohn. Er spricht Arabisch, Französisch und Englisch. Weil er von acht bis sechzehn Uhr arbeitet, möchte er abends lernen.',
          formular:{ titel:'Sprachschule Westfalen — Anmeldung Deutschkurs B1', zeilen:[
            { feld:'Name', wert:'Karim Haddad' },
            { feld:'Geburtsdatum', loesung:['02.02.1993','2.2.1993','02.02.93','2. Februar 1993'] },
            { feld:'Geburtsort', loesung:['Fès','Fes','Fez'] },
            { feld:'Wohnort', loesung:['44135 Dortmund','Dortmund','44135, Dortmund'] },
            { feld:'Familienstand', loesung:['verheiratet','Verheiratet'] },
            { feld:'Fremdsprachen', wert:'Arabisch (Muttersprache)' },
            { feld:'Kurszeit', loesung:['abends','Abends','am Abend'] } ] },
          erklaerung:'Das Datum steht ausgeschrieben im Text, im Formular schreibst du 02.02.1993. Kurszeit: Er arbeitet bis 16 Uhr, also abends.' },
        { id:'ta2w1r2', situation:'Ihre Kollegin Ana Ferreira möchte Mitglied im Sportverein werden. Sie helfen ihr beim Formular.',
          text:'Ana Ferreira ist Portugiesin. Sie ist am siebzehnten Oktober neunzehnhundertachtundachtzig in Porto geboren und lebt jetzt in München, Lindwurmstraße fünf. Sie war verheiratet, jetzt ist sie geschieden. Ana möchte am liebsten Volleyball spielen, und zwar am Wochenende.',
          formular:{ titel:'TSV München-Süd — Mitgliedsantrag', zeilen:[
            { feld:'Name', wert:'Ana Ferreira' },
            { feld:'Staatsangehörigkeit', loesung:['portugiesisch','Portugiesisch','Portugal'] },
            { feld:'Geburtsdatum', loesung:['17.10.1988','17.10.88','17. Oktober 1988'] },
            { feld:'Straße, Hausnummer', loesung:['Lindwurmstraße 5','Lindwurmstr. 5'] },
            { feld:'Familienstand', loesung:['geschieden','Geschieden'] },
            { feld:'Sportart', loesung:['Volleyball'] },
            { feld:'Trainingszeit', wert:'Wochenende' } ] },
          erklaerung:'„Sie war verheiratet, jetzt ist sie geschieden“: Im Formular steht nur der jetzige Stand, also geschieden.' },
        { id:'ta2w1r3', situation:'Ihr Nachbar Dmitri Ivanov möchte einen Ausweis für die Stadtbibliothek. Sie helfen ihm.',
          text:'Dmitri Ivanov ist am neunundzwanzigsten Mai zweitausendeins in Sofia geboren. Er ist Bulgare und studiert in Leipzig Informatik. Er ist ledig. Er wohnt in der Karl-Liebknecht-Straße vierzig, Postleitzahl null vier eins zwei sieben, in Leipzig. Er interessiert sich besonders für Bücher über Geschichte.',
          formular:{ titel:'Stadtbibliothek Leipzig — Antrag Leserausweis', zeilen:[
            { feld:'Name', wert:'Dmitri Ivanov' },
            { feld:'Geburtsdatum', loesung:['29.05.2001','29.5.2001','29. Mai 2001'] },
            { feld:'Geburtsort', loesung:['Sofia'] },
            { feld:'PLZ, Wohnort', loesung:['04127 Leipzig','04127, Leipzig'] },
            { feld:'Beruf', loesung:['Student','Student (Informatik)','Informatikstudent'] },
            { feld:'Familienstand', wert:'ledig' },
            { feld:'Interessen', loesung:['Geschichte','Bücher über Geschichte'] } ] },
          erklaerung:'Die Postleitzahl beginnt mit einer Null: 04127. Beim Beruf reicht „Student“.' } ] },

    { nr:2, art:'mitteilung', name:'Brief schreiben', kurz:'Drei von vier Punkten, etwa 40 Wörter',
      was:'Du antwortest auf eine Einladung oder Nachricht. Es gibt vier Punkte, du wählst drei und schreibst zu jedem ein bis zwei Sätze. Etwa 40 Wörter, mit Anrede und Gruß.',
      tipp:'Schreib zuerst Anrede und Gruß hin. Dann die drei Punkte dazwischen. Für die Form gibt es einen eigenen Punkt.',
      zeichen:'✉️', farbe:'rot', punkte:10,
      runden:[
        { id:'ta2w2r1', titel:'Runde 1', aufgaben:[
          { situation:'Ihre Bekannte Julia heiratet im Juni in Hamburg und lädt Sie ein. Antworten Sie ihr.', sorte:'email', an:'Julia', betreff:'Deine Hochzeit',
            noetig:3, punkteText:PT, level:'A2', woerter:40,
            punkte:[ { nr:1, was:'Mitkommen', hinweis:'Darf jemand mitkommen?' }, { nr:2, was:'Geschenk', hinweis:'Was wünscht sie sich?' },
                     { nr:3, was:'Bräutigam', hinweis:'Frag nach dem Bräutigam.' }, { nr:4, was:'Übernachtung', hinweis:'Wo kannst du in Hamburg schlafen?' } ],
            muster:'Liebe Julia,\nvielen Dank für die Einladung! Ich komme sehr gern. Darf ich meinen Mann mitbringen? Was wünschst du dir zur Hochzeit? Und kannst du mir ein günstiges Hotel in Hamburg empfehlen?\nViele Grüße\nElena',
            hilfen:['Darf ich … mitbringen?','Was wünschst du dir …?','Kannst du mir … empfehlen?'],
            erklaerung:'Drei Punkte reichen: hier Mitkommen, Geschenk und Übernachtung. Der vierte Punkt bringt keine Extrapunkte.' },
          { situation:'Ihr Kollege Thomas macht am Freitag eine Abschiedsfeier im Büro, weil er in eine andere Stadt zieht. Sie können nicht kommen. Schreiben Sie ihm.', sorte:'email', an:'Thomas', betreff:'Deine Feier am Freitag',
            noetig:3, punkteText:PT, level:'A2', woerter:40,
            punkte:[ { nr:1, was:'Absage', hinweis:'Sag, dass du nicht kommen kannst, und warum.' }, { nr:2, was:'Neue Stadt', hinweis:'Frag nach der neuen Stadt.' },
                     { nr:3, was:'Treffen', hinweis:'Schlag ein Treffen vorher vor.' }, { nr:4, was:'Wünsche', hinweis:'Wünsch ihm etwas für den Neuanfang.' } ],
            muster:'Lieber Thomas,\nleider kann ich am Freitag nicht kommen, weil ich zum Arzt muss. Wollen wir am Donnerstag zusammen Mittag essen? Ich wünsche dir viel Glück in deiner neuen Stadt!\nViele Grüße\nMarek',
            hilfen:['Leider kann ich nicht kommen, weil …','Wollen wir …?','Ich wünsche dir …'],
            erklaerung:'Absage, Treffen und Wünsche: drei Punkte, je ein Satz, dazu Anrede und Gruß.' } ] },
        { id:'ta2w2r2', titel:'Runde 2', aufgaben:[
          { situation:'Ihre Nachbarin Frau Wagner macht im Hof ein Sommerfest für alle im Haus und lädt Sie ein. Antworten Sie ihr.', sorte:'email', an:'Frau Wagner', betreff:'Sommerfest im Hof',
            noetig:3, punkteText:PT, level:'A2', woerter:40,
            punkte:[ { nr:1, was:'Zusage', hinweis:'Sag, dass du kommst.' }, { nr:2, was:'Essen', hinweis:'Was kannst du mitbringen?' },
                     { nr:3, was:'Hilfe', hinweis:'Biete Hilfe an.' }, { nr:4, was:'Uhrzeit', hinweis:'Frag, wann das Fest beginnt.' } ],
            muster:'Liebe Frau Wagner,\nvielen Dank für die Einladung! Ich komme gern. Ich kann einen Nudelsalat mitbringen. Wann beginnt das Fest? Ich helfe auch gern beim Aufbauen.\nViele Grüße\nSamir Haddad',
            hilfen:['Ich komme gern.','Ich kann … mitbringen.','Ich helfe gern beim …'],
            erklaerung:'Bei einer Nachbarin, die man siezt, schreibt man „Liebe Frau Wagner,“ oder „Sehr geehrte Frau Wagner,“.' },
          { situation:'Ihr Freund Lukas hat Sie am Wochenende zu einem Ausflug in die Berge eingeladen. Antworten Sie ihm.', sorte:'email', an:'Lukas', betreff:'Ausflug am Wochenende',
            noetig:3, punkteText:PT, level:'A2', woerter:40,
            punkte:[ { nr:1, was:'Antwort', hinweis:'Kommst du mit?' }, { nr:2, was:'Treffpunkt', hinweis:'Wo trefft ihr euch?' },
                     { nr:3, was:'Kleidung', hinweis:'Was soll man anziehen?' }, { nr:4, was:'Essen', hinweis:'Wer bringt etwas zu essen mit?' } ],
            muster:'Hallo Lukas,\ndanke für die Einladung, ich komme gern mit! Wo treffen wir uns am Samstag? Brauche ich Wanderschuhe? Ich kann Brötchen und Obst mitbringen.\nLiebe Grüße\nAyşe',
            hilfen:['Ich komme gern mit!','Wo treffen wir uns?','Ich kann … mitbringen.'],
            erklaerung:'Hier sind sogar alle vier Punkte drin. Drei hätten gereicht.' } ] } ] }
  ],

  laeufe:[
    { id:'ta2wl1', titel:'Prüfungslauf 1', minuten:20,
      formular:{ id:'ta2wl1f', situation:'Ihre Freundin Mei Lin möchte einen Kochkurs an der Volkshochschule machen. Sie helfen ihr.',
        text:'Mei Lin kommt aus China. Sie ist am elften Januar neunzehnhundertfünfundneunzig in Shanghai geboren. Sie wohnt in der Bergstraße drei in neunundsechzigtausendeinhundertsiebzehn Heidelberg. Sie ist ledig und arbeitet als Krankenschwester. Am liebsten möchte sie italienisch kochen lernen.',
        formular:{ titel:'VHS Heidelberg — Anmeldung', zeilen:[
          { feld:'Name', wert:'Mei Lin' },
          { feld:'Geburtsdatum', loesung:['11.01.1995','11.1.1995','11. Januar 1995'] },
          { feld:'Geburtsort', loesung:['Shanghai'] },
          { feld:'PLZ, Wohnort', loesung:['69117 Heidelberg','69117, Heidelberg'] },
          { feld:'Beruf', loesung:['Krankenschwester','Krankenpflegerin'] },
          { feld:'Familienstand', wert:'ledig' },
          { feld:'Kurs', loesung:['italienisch kochen','Italienisch kochen','italienische Küche','Kochkurs Italienisch'] } ] },
        erklaerung:'Fünf Angaben, je ein Punkt.' },
      aufgabe:{ situation:'Ihr Freund Paolo hat Geburtstag und lädt Sie am Samstag in ein Restaurant ein. Antworten Sie ihm.', sorte:'email', an:'Paolo', betreff:'Dein Geburtstag',
        noetig:3, punkteText:PT, level:'A2', woerter:40,
        punkte:[ { nr:1, was:'Antwort', hinweis:'Kommst du?' }, { nr:2, was:'Weg', hinweis:'Wie kommst du zum Restaurant?' },
                 { nr:3, was:'Geschenk', hinweis:'Was wünscht er sich?' }, { nr:4, was:'Begleitung', hinweis:'Darfst du jemanden mitbringen?' } ],
        muster:'Lieber Paolo,\nvielen Dank für die Einladung! Ich komme sehr gern. Wie komme ich am besten zum Restaurant? Und was wünschst du dir zum Geburtstag?\nBis Samstag\nLin',
        hilfen:['Ich komme sehr gern.','Wie komme ich …?','Was wünschst du dir …?'],
        erklaerung:'Prüfe zum Schluss: drei Punkte, Anrede, Gruß, etwa 40 Wörter.' } },
    { id:'ta2wl2', titel:'Prüfungslauf 2', minuten:20,
      formular:{ id:'ta2wl2f', situation:'Ihr Bruder Omar möchte sich bei einer Zeitarbeitsfirma anmelden. Sie helfen ihm.',
        text:'Omar Saleh ist Syrer. Er ist am dreißigsten August neunzehnhundertneunundneunzig in Aleppo geboren. Er wohnt in der Hauptstraße einundzwanzig in Kassel. Er ist verheiratet und hat zwei Töchter. Omar hat als Elektriker gearbeitet und kann ab sofort anfangen.',
        formular:{ titel:'Zeitarbeit Plus — Bewerberbogen', zeilen:[
          { feld:'Name', wert:'Omar Saleh' },
          { feld:'Staatsangehörigkeit', loesung:['syrisch','Syrisch','Syrien'] },
          { feld:'Geburtsdatum', loesung:['30.08.1999','30.8.1999','30. August 1999'] },
          { feld:'Familienstand', loesung:['verheiratet','Verheiratet'] },
          { feld:'Kinder', loesung:['2','zwei','2 Töchter','zwei Töchter'] },
          { feld:'Beruf', loesung:['Elektriker'] },
          { feld:'Arbeitsbeginn', wert:'ab sofort' } ] },
        erklaerung:'Bei „Kinder“ reicht die Zahl: 2.' },
      aufgabe:{ situation:'Ihre Kursleiterin Frau Neumann lädt alle zu einem Kursabschluss-Picknick im Park ein. Antworten Sie ihr.', sorte:'email', an:'Frau Neumann', betreff:'Picknick im Park',
        noetig:3, punkteText:PT, level:'A2', woerter:40,
        punkte:[ { nr:1, was:'Zusage', hinweis:'Kommst du?' }, { nr:2, was:'Essen', hinweis:'Was bringst du mit?' },
                 { nr:3, was:'Regen', hinweis:'Was passiert bei Regen?' }, { nr:4, was:'Familie', hinweis:'Darf deine Familie mitkommen?' } ],
        muster:'Liebe Frau Neumann,\nvielen Dank für die Einladung, ich komme gern! Ich bringe einen Kuchen mit. Darf meine Tochter auch mitkommen? Und was machen wir, wenn es regnet?\nViele Grüße\nOlga',
        hilfen:['Ich bringe … mit.','Darf … mitkommen?','Was machen wir, wenn …?'],
        erklaerung:'Bei der Kursleiterin passt „Liebe Frau Neumann,“ und am Ende „Viele Grüße“.' } }
  ]
};
})();
