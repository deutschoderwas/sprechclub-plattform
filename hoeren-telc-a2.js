/* ============================================================
   telc Deutsch A2 (Start Deutsch 2) — Hören
   Aufbau nach dem telc-Übungstest Deutsch A2 (Stand 12/2024):
     Teil 1  Fünf Ansagen am Telefon, Telefonnotiz ergänzen, zweimal
     Teil 2  Fünf Radiodurchsagen, a/b/c, nur einmal
     Teil 3  Ein Gespräch, fünf Personen Orten zuordnen (9 Orte), zweimal
   15 Punkte, ca. 20 Minuten.
   ============================================================ */
(function(){
var ORTE_1 = ['Empfang','Küche','Lager','Kantine','Besprechungsraum','Büro der Chefin','Werkstatt','Parkplatz','Kopierraum'];
var ORTE_2 = ['Bäckerei','Apotheke','Post','Bank','Reinigung','Blumenladen','Bibliothek','Friseur','Markt'];
var ORTE_3 = ['Bühne','Kasse','Getränkestand','Grill','Kinderecke','Eingang','Flohmarkt','Musikzelt','Kuchenbuffet'];
var ORTE_4 = ['Wartezimmer','Labor','Röntgen','Anmeldung','Kantine','Station 3','Apotheke','Parkhaus','Garten'];

window.HOEREN_TELC_A2 = {
  niveau:'telcA2', pruefung:'telc Deutsch A2', minuten:20, punkte:15,
  intro:'Der Hören-Teil bei telc A2 hat drei Teile, etwa zwanzig Minuten: Ansagen am Telefon, aus denen du eine Notiz ergänzt, kurze Durchsagen im Radio und ein Gespräch, in dem du Personen Orten zuordnest. Die Telefonansagen und das Gespräch hörst du zweimal, die Radiodurchsagen nur einmal.',
  stufen:[
    { nr:1, titel:'Zahlen, Zeiten, Namen', zeichen:'👂', was:'Uhrzeiten, Tage, Telefonnummern und Preise beim Hören sicher verstehen.' },
    { nr:2, titel:'Einmal hören', zeichen:'⚡', was:'Kurze Radiotexte beim ersten Mal verstehen: auf das eine Detail achten.' },
    { nr:3, titel:'Die drei Aufgabentypen', zeichen:'🎯', was:'Alle drei Teile einzeln, mit Text und Erklärung nach jeder Antwort.' },
    { nr:4, titel:'Die ganze Prüfung', zeichen:'⏱️', was:'15 Aufgaben am Stück, etwa zwanzig Minuten.' } ],

  bloecke:[
    { id:'ta2h1', stufe:1, titel:'Zahlen, Zeiten, Namen', kurz:'Was genau wurde gesagt?',
      ziel:'Nach diesem Block verwechselst du keine Uhrzeiten und Tage mehr.', zeichen:'🔢', farbe:'turq',
      aufgaben:[
        { art:'hoerwahl', ort:'Anrufbeantworter', wer:'Frau', text:'Hallo Tom, ich bin es, Nina. Wir treffen uns morgen nicht um sieben, sondern erst um halb acht. Bis dann!',
          frage:'Wann treffen sie sich?', opt:['Um 7 Uhr','Um 7:30 Uhr','Um 8:30 Uhr'], loesung:1, stelle:'erst um halb acht',
          erklaerung:'Halb acht ist 7:30 Uhr. Sieben war der alte Plan.' },
        { art:'hoerwahl', ort:'Anrufbeantworter', wer:'Mann', text:'Guten Tag, hier ist die Praxis Doktor Lenz. Ihr Termin ist nicht am Dienstag, sondern am Donnerstag, gleiche Uhrzeit.',
          frage:'Wann ist der Termin?', opt:['Am Dienstag','Am Donnerstag','Am Freitag'], loesung:1, stelle:'sondern am Donnerstag',
          erklaerung:'„Nicht …, sondern …“: Das Zweite gilt.' },
        { art:'hoerwahl', ort:'Anrufbeantworter', wer:'Frau', text:'Meine neue Handynummer ist null eins sieben null, vier fünf, acht zwei, drei drei.',
          frage:'Wie heißt die Nummer?', opt:['0170 45 82 33','0170 54 28 33','0710 45 82 33'], loesung:0, stelle:'null eins sieben null, vier fünf, acht zwei, drei drei',
          erklaerung:'Am Telefon sagt man die Zahlen oft paarweise: vier fünf, acht zwei, drei drei.' },
        { art:'hoerwahl', ort:'Im Geschäft', wer:'Mann', text:'Die Jacke kostet normalerweise neunundachtzig Euro. Heute bekommen Sie sie für neunundfünfzig.',
          frage:'Was kostet die Jacke heute?', opt:['89 Euro','59 Euro','95 Euro'], loesung:1, stelle:'Heute bekommen Sie sie für neunundfünfzig',
          erklaerung:'89 Euro ist der normale Preis. Heute kostet sie 59 Euro.' },
        { art:'hoerwahl', ort:'Anrufbeantworter', wer:'Frau', text:'Hallo, hier ist Frau Krüger vom Fitnessstudio. Ihr Kurs beginnt am fünfzehnten März. Bitte bringen Sie ein Handtuch mit.',
          frage:'Wann beginnt der Kurs?', opt:['Am 5. März','Am 15. März','Am 50. März'], loesung:1, stelle:'am fünfzehnten März',
          erklaerung:'Fünfzehnter März ist der 15.03.' },
        { art:'hoerwahl', ort:'Anrufbeantworter', wer:'Mann', text:'Hallo Frau Weber, Ihr Paket liegt bei uns in der Filiale. Sie können es ab morgen ab zehn Uhr abholen. Bitte bringen Sie Ihren Ausweis mit.',
          frage:'Was soll Frau Weber mitbringen?', opt:['Ihren Ausweis','Ihre Karte','Ihr Paket'], loesung:0, stelle:'Bitte bringen Sie Ihren Ausweis mit',
          erklaerung:'Zum Abholen braucht sie den Ausweis.' },
        { art:'hoerwahl', ort:'Anrufbeantworter', wer:'Frau', text:'Hi Ali, das Kino heute fällt aus, Lea ist krank. Wollen wir am Wochenende gehen? Ruf mich zurück.',
          frage:'Warum fällt das Kino aus?', opt:['Ali hat keine Zeit.','Lea ist krank.','Das Kino ist geschlossen.'], loesung:1, stelle:'Lea ist krank',
          erklaerung:'Der Grund steht direkt danach: Lea ist krank.' },
        { art:'hoerwahl', ort:'Anrufbeantworter', wer:'Mann', text:'Guten Tag, hier ist das Autohaus Berg. Ihr Wagen ist fertig. Die Reparatur kostet einhundertvierzig Euro.',
          frage:'Was kostet die Reparatur?', opt:['104 Euro','140 Euro','400 Euro'], loesung:1, stelle:'einhundertvierzig Euro',
          erklaerung:'Einhundertvierzig ist 140. Vierzehn und vierzig klingen ähnlich, hör genau hin.' } ] },

    { id:'ta2h2', stufe:2, titel:'Durchsagen im Radio', kurz:'Wetter, Verkehr, Programm',
      ziel:'Nach diesem Block weißt du, auf welches Wort es bei Radiodurchsagen ankommt.', zeichen:'📻', farbe:'gold',
      aufgaben:[
        { art:'hoerwahl', ort:'Radio — Verkehr', wer:'Mann', text:'Und jetzt der Verkehr: Auf der A drei zwischen Köln und Bonn gibt es nach einem Unfall fünf Kilometer Stau. Fahren Sie bitte über die A fünfundfünfzig.',
          frage:'Was ist auf der A3?', opt:['Ein Stau','Eine Baustelle','Nebel'], loesung:0, stelle:'fünf Kilometer Stau',
          erklaerung:'Nach einem Unfall gibt es Stau.' },
        { art:'hoerwahl', ort:'Radio — Wetter', wer:'Frau', text:'Das Wetter für morgen: Am Vormittag regnet es noch, am Nachmittag wird es sonnig bei zwanzig Grad.',
          frage:'Wie ist das Wetter am Nachmittag?', opt:['Es regnet.','Es ist sonnig.','Es schneit.'], loesung:1, stelle:'am Nachmittag wird es sonnig',
          erklaerung:'Regen nur am Vormittag. Nachmittags Sonne.' },
        { art:'hoerwahl', ort:'Radio — Programm', wer:'Mann', text:'Heute Abend um acht hören Sie bei uns das Konzert aus der Philharmonie. Die Nachrichten kommen deshalb erst um zehn.',
          frage:'Wann kommen heute die Nachrichten?', opt:['Um 20 Uhr','Um 22 Uhr','Um 18 Uhr'], loesung:1, stelle:'erst um zehn',
          erklaerung:'Um acht ist das Konzert. Die Nachrichten kommen um zehn, also 22 Uhr.' },
        { art:'hoerwahl', ort:'Radio — Gewinnspiel', wer:'Frau', text:'Sie möchten zwei Karten für das Fußballspiel am Samstag gewinnen? Dann schicken Sie uns bis Freitag eine E-Mail.',
          frage:'Was muss man machen?', opt:['Anrufen','Eine E-Mail schreiben','Ins Studio kommen'], loesung:1, stelle:'schicken Sie uns bis Freitag eine E-Mail',
          erklaerung:'Man schickt eine E-Mail.' },
        { art:'hoerwahl', ort:'Radio — Grüße', wer:'Mann', text:'Und noch ein Gruß: Anna aus Mainz wünscht ihrer Oma Gerda alles Gute zum neunzigsten Geburtstag.',
          frage:'Wer hat Geburtstag?', opt:['Anna','Gerda','Mainz'], loesung:1, stelle:'ihrer Oma Gerda alles Gute zum neunzigsten Geburtstag',
          erklaerung:'Anna grüßt, Oma Gerda hat Geburtstag.' },
        { art:'hoerwahl', ort:'Radio — Tipp', wer:'Frau', text:'Unser Tipp fürs Wochenende: Im Stadtpark ist am Sonntag ein Kinderfest. Der Eintritt ist frei, nur das Essen kostet etwas.',
          frage:'Was kostet beim Kinderfest Geld?', opt:['Der Eintritt','Das Essen','Nichts'], loesung:1, stelle:'nur das Essen kostet etwas',
          erklaerung:'Eintritt frei, nur das Essen muss man bezahlen.' } ] }
  ],

  teile:[
    { nr:1, art:'ansage', name:'Telefonansagen', kurz:'Fünf Ansagen, Telefonnotiz ergänzen — zweimal hören',
      was:'Du hörst fünf Nachrichten am Telefon und ergänzt in jeder Telefonnotiz eine Information: eine Zeit, einen Tag, eine Nummer oder einen Ort.',
      tipp:'Lies zuerst, was in der Notiz fehlt. Dann weißt du, worauf du hören musst. Zahlen darfst du als Ziffern schreiben.',
      zeichen:'📞', farbe:'turq', punkte:5, mal:2,
      runden:[
        { id:'ta2h1r1', titel:'Fünf Nachrichten', aufgaben:[
          { von:'Anrufbeantworter — Zahnarztpraxis', wer:'Frau', text:'Guten Tag, hier ist die Zahnarztpraxis Doktor Brandt. Diese Nachricht ist für Herrn Kaya. Ihr Termin am Montag muss leider ausfallen. Können Sie am Mittwoch um halb neun kommen? Bitte rufen Sie kurz zurück. Danke!',
            notiz:{ titel:'Telefonnotiz', zeilen:['Anruf von: Zahnarztpraxis Dr. Brandt','Termin am Montag fällt aus'], feld:'Neuer Termin: Mittwoch um', loesungen:['8:30','8.30','8:30 Uhr','8.30 Uhr','halb neun','halb 9'] },
            frage:'Ergänze die Telefonnotiz.', stelle:'am Mittwoch um halb neun', erklaerung:'Halb neun ist 8:30 Uhr.' },
          { von:'Anrufbeantworter — Freundin Sara', wer:'Frau', text:'Hallo, hier ist Sara. Wir grillen am Samstag bei mir im Garten. Kannst du einen Salat mitbringen? Wir fangen um vier an. Tschüss!',
            notiz:{ titel:'Telefonnotiz', zeilen:['Anruf von: Sara','Grillen am Samstag'], feld:'Mitbringen:', loesungen:['Salat','einen Salat','ein Salat'] },
            frage:'Ergänze die Telefonnotiz.', stelle:'Kannst du einen Salat mitbringen?', erklaerung:'Sara möchte einen Salat.' },
          { von:'Anrufbeantworter — Hausverwaltung', wer:'Mann', text:'Guten Tag, hier ist Herr Schulz von der Hausverwaltung. Am Donnerstag kommt der Techniker wegen der Heizung. Er kommt zwischen zehn und zwölf Uhr. Bitte seien Sie zu Hause.',
            notiz:{ titel:'Telefonnotiz', zeilen:['Anruf von: Hausverwaltung, Herr Schulz','Techniker wegen der Heizung'], feld:'Tag:', loesungen:['Donnerstag','am Donnerstag','Do'] },
            frage:'Ergänze die Telefonnotiz.', stelle:'Am Donnerstag kommt der Techniker', erklaerung:'Der Techniker kommt am Donnerstag.' },
          { von:'Anrufbeantworter — Kollege Jan', wer:'Mann', text:'Hallo, hier ist Jan. Ich habe eine neue Handynummer. Schreib sie dir bitte auf: null eins fünf eins, sechs zwei, vier vier, neun null.',
            notiz:{ titel:'Telefonnotiz', zeilen:['Anruf von: Jan','neue Handynummer'], feld:'Nummer: 0151', loesungen:['62 44 90','624490','62-44-90','62 4490','6244 90'] },
            frage:'Ergänze die Telefonnotiz.', stelle:'sechs zwei, vier vier, neun null', erklaerung:'Nach 0151 kommen 62 44 90.' },
          { von:'Anrufbeantworter — Bibliothek', wer:'Frau', text:'Hallo, hier ist die Stadtbibliothek. Das Buch, das Sie bestellt haben, ist jetzt da. Sie können es bis Freitag an der Information im ersten Stock abholen.',
            notiz:{ titel:'Telefonnotiz', zeilen:['Anruf von: Stadtbibliothek','bestelltes Buch ist da'], feld:'Abholen bis:', loesungen:['Freitag','bis Freitag','Fr'] },
            frage:'Ergänze die Telefonnotiz.', stelle:'bis Freitag', erklaerung:'Abholen bis Freitag.' } ] },
        { id:'ta2h1r2', titel:'Fünf Nachrichten', aufgaben:[
          { von:'Anrufbeantworter — Sprachschule', wer:'Mann', text:'Guten Tag, hier ist die Sprachschule Lingua. Ihr Kurs findet nächste Woche nicht in Raum zwölf statt, sondern in Raum zwanzig. Die Uhrzeit bleibt gleich.',
            notiz:{ titel:'Telefonnotiz', zeilen:['Anruf von: Sprachschule Lingua','Kurs nächste Woche'], feld:'Raum:', loesungen:['20','zwanzig','Raum 20'] },
            frage:'Ergänze die Telefonnotiz.', stelle:'sondern in Raum zwanzig', erklaerung:'Nicht zwölf, sondern zwanzig.' },
          { von:'Anrufbeantworter — Bruder Emre', wer:'Mann', text:'Hey, hier ist Emre. Mein Zug kommt am Sonntag um vierzehn Uhr zehn an. Kannst du mich am Bahnhof abholen? Danke!',
            notiz:{ titel:'Telefonnotiz', zeilen:['Anruf von: Emre','Ankunft am Sonntag'], feld:'Uhrzeit:', loesungen:['14:10','14.10','14:10 Uhr','14.10 Uhr','vierzehn Uhr zehn'] },
            frage:'Ergänze die Telefonnotiz.', stelle:'um vierzehn Uhr zehn', erklaerung:'Vierzehn Uhr zehn ist 14:10 Uhr.' },
          { von:'Anrufbeantworter — Möbelhaus', wer:'Frau', text:'Guten Tag, hier ist das Möbelhaus Wohnwelt. Ihr neuer Tisch wird am Dienstag geliefert. Die Lieferung kostet fünfundzwanzig Euro. Sie bezahlen bitte bar beim Fahrer.',
            notiz:{ titel:'Telefonnotiz', zeilen:['Anruf von: Möbelhaus Wohnwelt','Lieferung Tisch am Dienstag'], feld:'Kosten Lieferung:', loesungen:['25 Euro','25','25 €','25,00 Euro','fünfundzwanzig Euro'] },
            frage:'Ergänze die Telefonnotiz.', stelle:'fünfundzwanzig Euro', erklaerung:'Die Lieferung kostet 25 Euro.' },
          { von:'Anrufbeantworter — Kita', wer:'Frau', text:'Hallo Frau Nowak, hier ist Petra aus der Kita. Morgen machen wir einen Ausflug in den Wald. Bitte geben Sie Lena Gummistiefel mit.',
            notiz:{ titel:'Telefonnotiz', zeilen:['Anruf von: Kita, Petra','Ausflug in den Wald'], feld:'Lena braucht:', loesungen:['Gummistiefel','die Gummistiefel'] },
            frage:'Ergänze die Telefonnotiz.', stelle:'Bitte geben Sie Lena Gummistiefel mit', erklaerung:'Für den Wald braucht Lena Gummistiefel.' },
          { von:'Anrufbeantworter — Kollegin Anja', wer:'Frau', text:'Hallo, hier ist Anja. Das Treffen mit den Kunden ist nicht im Büro, sondern im Hotel Krone am Bahnhof. Bis morgen!',
            notiz:{ titel:'Telefonnotiz', zeilen:['Anruf von: Anja','Treffen mit den Kunden'], feld:'Ort:', loesungen:['Hotel Krone','im Hotel Krone','Hotel Krone am Bahnhof'] },
            frage:'Ergänze die Telefonnotiz.', stelle:'sondern im Hotel Krone', erklaerung:'Nicht im Büro, sondern im Hotel Krone.' } ] } ] },

    { nr:2, art:'durchsage', name:'Radiodurchsagen', kurz:'Fünf kurze Radiotexte, a/b/c — nur einmal hören',
      was:'Du hörst fünf kurze Texte aus dem Radio: Wetter, Verkehr, Programm, Grüße, Gewinnspiel. Zu jedem Text wählst du a, b oder c.',
      tipp:'Diese Texte hörst du nur einmal, auch hier im Training. Lies deshalb zuerst die Frage und die drei Antworten.',
      zeichen:'📻', farbe:'gold', punkte:5, mal:1,
      runden:[
        { id:'ta2h2r1', titel:'Fünf Durchsagen', aufgaben:[
          { ort:'Radio — Wetter', wer:'Frau', text:'Und nun das Wetter für das Wochenende. Am Samstag ist es noch bewölkt, aber trocken. Am Sonntag scheint dann überall die Sonne, bei bis zu fünfundzwanzig Grad.',
            frage:'Wie ist das Wetter am Sonntag?', opt:['Es regnet.','Es ist sonnig.','Es ist bewölkt.'], loesung:1, stelle:'Am Sonntag scheint dann überall die Sonne',
            erklaerung:'Bewölkt ist es am Samstag. Am Sonntag scheint die Sonne.' },
          { ort:'Radio — Verkehr', wer:'Mann', text:'Eine Meldung für alle, die mit der U-Bahn fahren: Die Linie U zwei fährt heute wegen Bauarbeiten nur bis zum Hauptbahnhof. Ab dort fahren Busse.',
            frage:'Was ist heute bei der U2?', opt:['Sie fährt gar nicht.','Sie fährt nur bis zum Hauptbahnhof.','Sie fährt nur abends.'], loesung:1, stelle:'nur bis zum Hauptbahnhof',
            erklaerung:'Die U2 fährt, aber nur bis zum Hauptbahnhof.' },
          { ort:'Radio — Programm', wer:'Frau', text:'Nach den Nachrichten hören Sie unser Gesundheitsmagazin. Heute geht es um das Thema Schlaf. Rufen Sie uns an und stellen Sie Ihre Fragen.',
            frage:'Worum geht es im Gesundheitsmagazin?', opt:['Um Sport','Um Schlaf','Um Essen'], loesung:1, stelle:'Heute geht es um das Thema Schlaf',
            erklaerung:'Das Thema heute ist Schlaf.' },
          { ort:'Radio — Gewinnspiel', wer:'Mann', text:'Unser Gewinnspiel heute: Wir verlosen eine Reise für zwei Personen nach Hamburg. Rufen Sie bis achtzehn Uhr an und nennen Sie das Lösungswort.',
            frage:'Was kann man gewinnen?', opt:['Konzertkarten','Eine Reise','Ein Fahrrad'], loesung:1, stelle:'eine Reise für zwei Personen nach Hamburg',
            erklaerung:'Man kann eine Reise nach Hamburg gewinnen.' },
          { ort:'Radio — Grüße', wer:'Frau', text:'Ein Gruß von Marco an seine Kollegen in der Bäckerei Schmidt: Danke für die tolle Abschiedsfeier! Ich vermisse euch schon.',
            frage:'Warum grüßt Marco seine Kollegen?', opt:['Er hat Geburtstag.','Er bedankt sich für eine Feier.','Er sucht eine neue Stelle.'], loesung:1, stelle:'Danke für die tolle Abschiedsfeier',
            erklaerung:'Marco bedankt sich für die Abschiedsfeier.' } ] },
        { id:'ta2h2r2', titel:'Fünf Durchsagen', aufgaben:[
          { ort:'Radio — Verkehr', wer:'Mann', text:'Achtung, Autofahrer: Die Brücke in der Hafenstraße ist ab Montag für zwei Wochen gesperrt. Bitte fahren Sie über die Bahnhofstraße.',
            frage:'Wie lange ist die Brücke gesperrt?', opt:['Zwei Tage','Zwei Wochen','Zwei Monate'], loesung:1, stelle:'für zwei Wochen gesperrt',
            erklaerung:'Die Brücke ist zwei Wochen gesperrt.' },
          { ort:'Radio — Veranstaltung', wer:'Frau', text:'Am Samstag ist im Rathaus wieder Tag der offenen Tür. Von zehn bis sechzehn Uhr können Sie alle Räume besichtigen. Für Kinder gibt es ein Malprogramm.',
            frage:'Was gibt es für Kinder?', opt:['Ein Malprogramm','Ein Theater','Ein Fußballspiel'], loesung:0, stelle:'Für Kinder gibt es ein Malprogramm',
            erklaerung:'Für Kinder gibt es ein Malprogramm.' },
          { ort:'Radio — Wetter', wer:'Mann', text:'Heute Nacht wird es sehr kalt, bis minus fünf Grad. Auf den Straßen kann es glatt sein. Fahren Sie bitte vorsichtig.',
            frage:'Was soll man heute Nacht tun?', opt:['Nicht Auto fahren','Vorsichtig fahren','Zu Hause bleiben'], loesung:1, stelle:'Fahren Sie bitte vorsichtig',
            erklaerung:'Man soll vorsichtig fahren.' },
          { ort:'Radio — Programm', wer:'Frau', text:'Unser Morgenprogramm beginnt heute ausnahmsweise erst um sieben Uhr. Vorher übertragen wir das Fußballspiel aus Brasilien.',
            frage:'Warum beginnt das Morgenprogramm später?', opt:['Wegen eines Fußballspiels','Wegen der Nachrichten','Wegen eines Konzerts'], loesung:0, stelle:'Vorher übertragen wir das Fußballspiel aus Brasilien',
            erklaerung:'Vorher läuft ein Fußballspiel.' },
          { ort:'Radio — Tipp', wer:'Mann', text:'Ein Tipp für Familien: Das Schwimmbad am See hat diese Woche länger geöffnet, bis einundzwanzig Uhr. Kinder unter sechs Jahren zahlen keinen Eintritt.',
            frage:'Wer muss im Schwimmbad nichts bezahlen?', opt:['Alle Familien','Kinder unter sechs','Alle nach 21 Uhr'], loesung:1, stelle:'Kinder unter sechs Jahren zahlen keinen Eintritt',
            erklaerung:'Nur Kinder unter sechs Jahren zahlen nichts.' } ] } ] },

    { nr:3, art:'gespraech', name:'Gespräch: Wer ist wo?', kurz:'Ein Gespräch, fünf Personen, neun Orte — zweimal hören',
      was:'Du hörst ein Gespräch in Abschnitten. Jemand erklärt, wo verschiedene Personen sind oder wohin sie gehen. Du ordnest jeder Person einen Ort zu. Vier Orte bleiben übrig.',
      tipp:'Oft wird ein Ort zuerst genannt und dann korrigiert: „Normalerweise ist sie in der Küche, aber heute …“ Das Letzte zählt.',
      zeichen:'🗺️', farbe:'rot', punkte:5, mal:2,
      runden:[
        { id:'ta2h3r1', titel:'Der erste Tag im Betrieb', aufgaben:[
          { ort:'Gespräch — Abschnitt 1', zeilen:[
              { wer:'Mann', text:'So, Frau Ilić, willkommen bei uns! Ich zeige Ihnen jetzt alles. Hier vorne sitzt Frau Roth.' },
              { wer:'Frau', text:'Ist sie die Sekretärin?' },
              { wer:'Mann', text:'Ja, genau. Sie begrüßt alle Besucher, sie sitzt am Empfang.' } ],
            frage:'Wo arbeitet Frau Roth?', opt:ORTE_1, fest:true, loesung:0, stelle:'sie sitzt am Empfang',
            erklaerung:'Frau Roth begrüßt die Besucher am Empfang.' },
          { ort:'Gespräch — Abschnitt 2', zeilen:[
              { wer:'Frau', text:'Und wer ist Herr Demir?' },
              { wer:'Mann', text:'Herr Demir ist unser Mechaniker. Normalerweise ist er im Lager, aber diese Woche repariert er die Maschinen in der Werkstatt.' } ],
            frage:'Wo ist Herr Demir diese Woche?', opt:ORTE_1, fest:true, loesung:6, stelle:'diese Woche repariert er die Maschinen in der Werkstatt',
            erklaerung:'Normalerweise Lager, aber diese Woche Werkstatt.' },
          { ort:'Gespräch — Abschnitt 3', zeilen:[
              { wer:'Frau', text:'Und die Chefin, Frau Berger? Wo finde ich sie?' },
              { wer:'Mann', text:'Ihr Büro ist im ersten Stock. Aber jetzt gerade hat sie eine Sitzung mit Kunden im Besprechungsraum.' } ],
            frage:'Wo ist Frau Berger jetzt?', opt:ORTE_1, fest:true, loesung:4, stelle:'jetzt gerade hat sie eine Sitzung mit Kunden im Besprechungsraum',
            erklaerung:'Ihr Büro ist oben, aber jetzt ist sie im Besprechungsraum.' },
          { ort:'Gespräch — Abschnitt 4', zeilen:[
              { wer:'Mann', text:'Und das ist Paul, unser Auszubildender. Er macht gerade Kopien für die Sitzung.' },
              { wer:'Frau', text:'Im Kopierraum?' },
              { wer:'Mann', text:'Ja, gleich hier links.' } ],
            frage:'Wo ist Paul?', opt:ORTE_1, fest:true, loesung:8, stelle:'Er macht gerade Kopien für die Sitzung',
            erklaerung:'Paul macht Kopien im Kopierraum.' },
          { ort:'Gespräch — Abschnitt 5', zeilen:[
              { wer:'Frau', text:'Wo kann man hier eigentlich zu Mittag essen?' },
              { wer:'Mann', text:'In der Kantine. Herr Weiß kocht dort jeden Tag. Heute gibt es Gemüsesuppe.' } ],
            frage:'Wo arbeitet Herr Weiß?', opt:ORTE_1, fest:true, loesung:3, stelle:'In der Kantine. Herr Weiß kocht dort jeden Tag',
            erklaerung:'Herr Weiß kocht in der Kantine. Die Küche ist ein anderer Ort in der Liste.' } ] },
        { id:'ta2h3r2', titel:'Einkaufen am Samstag', aufgaben:[
          { ort:'Gespräch — Abschnitt 1', zeilen:[
              { wer:'Frau', text:'Wo ist denn Oma? Ich dachte, sie kommt mit zum Markt.' },
              { wer:'Mann', text:'Nein, sie wollte zuerst zum Markt, aber dann ist sie zum Friseur gegangen. Sie hat um zehn einen Termin.' } ],
            frage:'Wo ist Oma?', opt:ORTE_2, fest:true, loesung:7, stelle:'dann ist sie zum Friseur gegangen',
            erklaerung:'Erst wollte sie zum Markt, jetzt ist sie beim Friseur.' },
          { ort:'Gespräch — Abschnitt 2', zeilen:[
              { wer:'Frau', text:'Und Leon?' },
              { wer:'Mann', text:'Leon bringt seine Bücher zurück. Die müssen heute zurück, sonst kostet es Geld.' } ],
            frage:'Wo ist Leon?', opt:ORTE_2, fest:true, loesung:6, stelle:'Leon bringt seine Bücher zurück',
            erklaerung:'Bücher zurückbringen: Bibliothek.' },
          { ort:'Gespräch — Abschnitt 3', zeilen:[
              { wer:'Frau', text:'Hat Mia das Paket für Tante Inge schon weggeschickt?' },
              { wer:'Mann', text:'Sie ist gerade dort und wartet in der Schlange. Am Samstag ist bei der Post immer viel los.' } ],
            frage:'Wo ist Mia?', opt:ORTE_2, fest:true, loesung:2, stelle:'Am Samstag ist bei der Post immer viel los',
            erklaerung:'Ein Paket schickt man bei der Post weg.' },
          { ort:'Gespräch — Abschnitt 4', zeilen:[
              { wer:'Frau', text:'Und dein Bruder? Er braucht doch noch Medikamente.' },
              { wer:'Mann', text:'Die hat er schon gestern geholt. Heute holt er nur seinen Anzug. Der war schmutzig.' } ],
            frage:'Wo ist der Bruder heute?', opt:ORTE_2, fest:true, loesung:4, stelle:'Heute holt er nur seinen Anzug. Der war schmutzig',
            erklaerung:'Einen schmutzigen Anzug holt man aus der Reinigung. Die Apotheke war gestern.' },
          { ort:'Gespräch — Abschnitt 5', zeilen:[
              { wer:'Frau', text:'Und was machst du jetzt?' },
              { wer:'Mann', text:'Ich hole noch Brötchen fürs Frühstück, dann komme ich zu dir.' } ],
            frage:'Wohin geht der Mann?', opt:ORTE_2, fest:true, loesung:0, stelle:'Ich hole noch Brötchen fürs Frühstück',
            erklaerung:'Brötchen gibt es in der Bäckerei.' } ] } ] }
  ],

  laeufe:[
    { id:'ta2hl1', titel:'Prüfungslauf 1', minuten:20, teile:[
      { nr:1, art:'ansage', aufgaben:[
        { von:'Anrufbeantworter — Friseursalon', wer:'Frau', text:'Hallo Frau Lehmann, hier ist der Friseursalon Schnittig. Wir müssen Ihren Termin am Freitag leider verschieben. Geht es am Samstag um elf Uhr? Bitte rufen Sie zurück.',
          notiz:{ titel:'Telefonnotiz', zeilen:['Anruf von: Friseursalon Schnittig','Termin Freitag verschoben'], feld:'Neuer Termin: Samstag um', loesungen:['11','11 Uhr','11:00','11.00','elf','elf Uhr'] },
          frage:'Ergänze die Telefonnotiz.', stelle:'am Samstag um elf Uhr', erklaerung:'Neuer Termin: Samstag um 11 Uhr.' },
        { von:'Anrufbeantworter — Nachbarin', wer:'Frau', text:'Hallo, hier ist Frau Schmitt von nebenan. Ich habe ein Paket für Sie angenommen. Sie können es heute Abend nach achtzehn Uhr bei mir holen.',
          notiz:{ titel:'Telefonnotiz', zeilen:['Anruf von: Frau Schmitt','Paket angenommen'], feld:'Abholen ab:', loesungen:['18 Uhr','18','18:00','18.00','achtzehn Uhr'] },
          frage:'Ergänze die Telefonnotiz.', stelle:'nach achtzehn Uhr', erklaerung:'Ab 18 Uhr.' },
        { von:'Anrufbeantworter — Fahrschule', wer:'Mann', text:'Guten Tag, hier ist die Fahrschule Grünlicht. Ihre Prüfung ist am zwölften April. Bitte bringen Sie Ihren Personalausweis mit.',
          notiz:{ titel:'Telefonnotiz', zeilen:['Anruf von: Fahrschule Grünlicht','Prüfung'], feld:'Datum:', loesungen:['12. April','12.04.','12.4.','zwölfter April','12 April','am 12. April'] },
          frage:'Ergänze die Telefonnotiz.', stelle:'am zwölften April', erklaerung:'Zwölfter April ist der 12.04.' },
        { von:'Anrufbeantworter — Freund Max', wer:'Mann', text:'Hi, hier ist Max. Wir treffen uns morgen nicht vor dem Kino, sondern im Café Lisa daneben. Bis morgen!',
          notiz:{ titel:'Telefonnotiz', zeilen:['Anruf von: Max','Treffen morgen'], feld:'Treffpunkt:', loesungen:['Café Lisa','im Café Lisa','Cafe Lisa'] },
          frage:'Ergänze die Telefonnotiz.', stelle:'sondern im Café Lisa', erklaerung:'Nicht vor dem Kino, sondern im Café Lisa.' },
        { von:'Anrufbeantworter — Vermieter', wer:'Mann', text:'Guten Tag, hier ist Herr Klein, Ihr Vermieter. Die neue Miete ist ab Januar sechshundertzwanzig Euro. Den Brief bekommen Sie diese Woche.',
          notiz:{ titel:'Telefonnotiz', zeilen:['Anruf von: Herr Klein, Vermieter','neue Miete ab Januar'], feld:'Miete:', loesungen:['620 Euro','620','620 €','sechshundertzwanzig Euro'] },
          frage:'Ergänze die Telefonnotiz.', stelle:'sechshundertzwanzig Euro', erklaerung:'Die neue Miete ist 620 Euro.' } ] },
      { nr:2, art:'durchsage', aufgaben:[
        { ort:'Radio — Verkehr', wer:'Frau', text:'Auf der Autobahn A sieben bei Hamburg ist ein Lastwagen liegen geblieben. Es gibt drei Kilometer Stau in Richtung Norden.',
          frage:'Was ist auf der A7?', opt:['Ein Lastwagen steht still.','Die Autobahn ist gesperrt.','Es gibt Nebel.'], loesung:0, stelle:'ein Lastwagen liegen geblieben',
          erklaerung:'Ein Lastwagen ist liegen geblieben, deshalb gibt es Stau.' },
        { ort:'Radio — Wetter', wer:'Mann', text:'Für morgen erwarten wir viel Wind und am Abend Gewitter. Am Vormittag bleibt es aber noch trocken.',
          frage:'Wann gibt es morgen Gewitter?', opt:['Am Vormittag','Am Mittag','Am Abend'], loesung:2, stelle:'am Abend Gewitter',
          erklaerung:'Gewitter am Abend, vormittags ist es trocken.' },
        { ort:'Radio — Programm', wer:'Frau', text:'Um vierzehn Uhr hören Sie heute unsere Sendung „Kochen mit Kindern“. Das Rezept finden Sie danach auf unserer Internetseite.',
          frage:'Wo findet man das Rezept?', opt:['In der Zeitung','Auf der Internetseite','Im Supermarkt'], loesung:1, stelle:'auf unserer Internetseite',
          erklaerung:'Das Rezept steht auf der Internetseite.' },
        { ort:'Radio — Gewinnspiel', wer:'Mann', text:'Wer weiß die Antwort? Schreiben Sie uns eine SMS an die Nummer fünf fünf fünf. Unter allen richtigen Antworten verlosen wir ein Fahrrad.',
          frage:'Wie nimmt man teil?', opt:['Mit einer SMS','Mit einem Brief','Mit einem Anruf'], loesung:0, stelle:'Schreiben Sie uns eine SMS',
          erklaerung:'Man schickt eine SMS.' },
        { ort:'Radio — Grüße', wer:'Frau', text:'Und jetzt ein Gruß von Familie Yıldız an ihren Sohn Can: Herzlichen Glückwunsch zur bestandenen Prüfung!',
          frage:'Warum gratuliert die Familie?', opt:['Zum Geburtstag','Zur Hochzeit','Zur bestandenen Prüfung'], loesung:2, stelle:'zur bestandenen Prüfung',
          erklaerung:'Can hat seine Prüfung bestanden.' } ] },
      { nr:3, art:'gespraech', aufgaben:[
        { ort:'Gespräch — Abschnitt 1', zeilen:[
            { wer:'Frau', text:'So, das Sommerfest kann beginnen! Wer hilft wo? Herr Albers, Sie wollten doch an der Kasse sitzen?' },
            { wer:'Mann', text:'Eigentlich ja. Aber Frau Kurz macht jetzt die Kasse. Ich stehe am Grill.' } ],
          frage:'Wo hilft Herr Albers?', opt:ORTE_3, fest:true, loesung:3, stelle:'Ich stehe am Grill',
          erklaerung:'Erst Kasse geplant, jetzt Grill.' },
        { ort:'Gespräch — Abschnitt 2', zeilen:[
            { wer:'Frau', text:'Und Frau Kurz?' },
            { wer:'Mann', text:'Die sitzt wie gesagt an der Kasse und verkauft die Bons.' } ],
          frage:'Wo hilft Frau Kurz?', opt:ORTE_3, fest:true, loesung:1, stelle:'Die sitzt wie gesagt an der Kasse',
          erklaerung:'Frau Kurz macht die Kasse.' },
        { ort:'Gespräch — Abschnitt 3', zeilen:[
            { wer:'Frau', text:'Wer passt auf die Kinder auf?' },
            { wer:'Mann', text:'Lisa. Sie malt mit ihnen in der Kinderecke.' } ],
          frage:'Wo ist Lisa?', opt:ORTE_3, fest:true, loesung:4, stelle:'Sie malt mit ihnen in der Kinderecke',
          erklaerung:'Lisa ist bei den Kindern in der Kinderecke.' },
        { ort:'Gespräch — Abschnitt 4', zeilen:[
            { wer:'Frau', text:'Und Tarek? Spielt er nicht Gitarre?' },
            { wer:'Mann', text:'Doch, aber erst um sechs. Bis dahin verkauft er Getränke.' } ],
          frage:'Wo ist Tarek jetzt?', opt:ORTE_3, fest:true, loesung:2, stelle:'Bis dahin verkauft er Getränke',
          erklaerung:'Die Musik kommt später. Jetzt ist Tarek am Getränkestand.' },
        { ort:'Gespräch — Abschnitt 5', zeilen:[
            { wer:'Frau', text:'Und Oma Helga hat doch so viele Kuchen gebacken.' },
            { wer:'Mann', text:'Genau, sie verkauft sie selbst. Am Kuchenbuffet, gleich neben dem Eingang.' } ],
          frage:'Wo ist Oma Helga?', opt:ORTE_3, fest:true, loesung:8, stelle:'Am Kuchenbuffet',
          erklaerung:'Oma Helga ist am Kuchenbuffet. Der Eingang ist nur daneben.' } ] } ] },

    { id:'ta2hl2', titel:'Prüfungslauf 2', minuten:20, teile:[
      { nr:1, art:'ansage', aufgaben:[
        { von:'Anrufbeantworter — Tierarzt', wer:'Frau', text:'Guten Tag, hier ist die Tierarztpraxis am Park. Ihre Katze kann heute nach Hause. Sie können sie ab fünfzehn Uhr abholen.',
          notiz:{ titel:'Telefonnotiz', zeilen:['Anruf von: Tierarztpraxis am Park','Katze kann nach Hause'], feld:'Abholen ab:', loesungen:['15 Uhr','15','15:00','15.00','fünfzehn Uhr'] },
          frage:'Ergänze die Telefonnotiz.', stelle:'ab fünfzehn Uhr', erklaerung:'Ab 15 Uhr.' },
        { von:'Anrufbeantworter — Schwester', wer:'Frau', text:'Hallo, ich bin es, Daria. Ich komme am Wochenende doch nicht mit dem Auto, sondern mit dem Bus. Kannst du mich an der Haltestelle Rathaus abholen?',
          notiz:{ titel:'Telefonnotiz', zeilen:['Anruf von: Daria','Besuch am Wochenende'], feld:'Abholen an der Haltestelle:', loesungen:['Rathaus','Haltestelle Rathaus','am Rathaus'] },
          frage:'Ergänze die Telefonnotiz.', stelle:'an der Haltestelle Rathaus', erklaerung:'Haltestelle Rathaus.' },
        { von:'Anrufbeantworter — Jobcenter', wer:'Mann', text:'Guten Tag, hier ist das Jobcenter, Herr Vogt. Bitte kommen Sie am Dienstag in Zimmer dreihundertzwölf. Bringen Sie Ihren Lebenslauf mit.',
          notiz:{ titel:'Telefonnotiz', zeilen:['Anruf von: Jobcenter, Herr Vogt','Termin am Dienstag'], feld:'Zimmer:', loesungen:['312','Zimmer 312','dreihundertzwölf'] },
          frage:'Ergänze die Telefonnotiz.', stelle:'in Zimmer dreihundertzwölf', erklaerung:'Zimmer 312.' },
        { von:'Anrufbeantworter — Sportverein', wer:'Mann', text:'Hallo, hier ist Bernd vom Sportverein. Das Training ist ab nächster Woche nicht mehr am Montag, sondern am Mittwoch.',
          notiz:{ titel:'Telefonnotiz', zeilen:['Anruf von: Bernd, Sportverein','Training ab nächster Woche'], feld:'Neuer Tag:', loesungen:['Mittwoch','am Mittwoch','Mi'] },
          frage:'Ergänze die Telefonnotiz.', stelle:'sondern am Mittwoch', erklaerung:'Nicht Montag, sondern Mittwoch.' },
        { von:'Anrufbeantworter — Restaurant', wer:'Frau', text:'Guten Abend, hier ist das Restaurant Bella Vista. Wir bestätigen Ihren Tisch für Freitag. Sie haben für sechs Personen reserviert.',
          notiz:{ titel:'Telefonnotiz', zeilen:['Anruf von: Restaurant Bella Vista','Tisch am Freitag'], feld:'Personen:', loesungen:['6','sechs','6 Personen'] },
          frage:'Ergänze die Telefonnotiz.', stelle:'für sechs Personen', erklaerung:'Sechs Personen.' } ] },
      { nr:2, art:'durchsage', aufgaben:[
        { ort:'Radio — Verkehr', wer:'Mann', text:'Wegen eines Stadtlaufs ist die Innenstadt am Sonntag von acht bis vierzehn Uhr für Autos gesperrt. Busse fahren normal.',
          frage:'Was ist am Sonntag?', opt:['Busse fahren nicht.','Autos dürfen nicht in die Innenstadt.','Die Innenstadt ist den ganzen Tag gesperrt.'], loesung:1, stelle:'für Autos gesperrt',
          erklaerung:'Nur Autos dürfen nicht fahren, und nur bis 14 Uhr. Busse fahren normal.' },
        { ort:'Radio — Wetter', wer:'Frau', text:'Heute bleibt es den ganzen Tag grau und kühl, aber es regnet nicht. Morgen kommt dann der Regen.',
          frage:'Wie ist das Wetter heute?', opt:['Es regnet.','Es ist grau, aber trocken.','Es ist sonnig.'], loesung:1, stelle:'grau und kühl, aber es regnet nicht',
          erklaerung:'Grau und kühl, aber ohne Regen. Regen kommt erst morgen.' },
        { ort:'Radio — Programm', wer:'Mann', text:'In unserer Sendung „Neu in der Stadt“ erzählen heute zwei Familien aus Syrien von ihrem ersten Jahr in Deutschland.',
          frage:'Wer erzählt in der Sendung?', opt:['Zwei Familien','Zwei Lehrer','Zwei Politiker'], loesung:0, stelle:'erzählen heute zwei Familien aus Syrien',
          erklaerung:'Zwei Familien erzählen.' },
        { ort:'Radio — Gewinnspiel', wer:'Frau', text:'Machen Sie mit bei unserem Fotowettbewerb! Schicken Sie uns Ihr schönstes Herbstfoto. Einsendeschluss ist der dreißigste Oktober.',
          frage:'Was soll man schicken?', opt:['Ein Rezept','Ein Foto','Einen Brief'], loesung:1, stelle:'Schicken Sie uns Ihr schönstes Herbstfoto',
          erklaerung:'Man schickt ein Foto.' },
        { ort:'Radio — Veranstaltung', wer:'Mann', text:'Die Stadtbibliothek lädt am Donnerstag zum Abend der Sprachen ein. Sie können dort Menschen aus vielen Ländern treffen. Der Eintritt ist frei.',
          frage:'Was kostet der Abend?', opt:['Nichts','Fünf Euro','Zehn Euro'], loesung:0, stelle:'Der Eintritt ist frei',
          erklaerung:'Der Eintritt ist frei.' } ] },
      { nr:3, art:'gespraech', aufgaben:[
        { ort:'Gespräch — Abschnitt 1', zeilen:[
            { wer:'Mann', text:'Schwester Maria, wo ist Herr Koch? Er ist nicht in seinem Zimmer.' },
            { wer:'Frau', text:'Er ist gerade beim Röntgen. Er kommt in einer halben Stunde zurück.' } ],
          frage:'Wo ist Herr Koch?', opt:ORTE_4, fest:true, loesung:2, stelle:'Er ist gerade beim Röntgen',
          erklaerung:'Herr Koch ist beim Röntgen.' },
        { ort:'Gespräch — Abschnitt 2', zeilen:[
            { wer:'Mann', text:'Und seine Frau? Sie wollte doch heute kommen.' },
            { wer:'Frau', text:'Sie ist schon da. Sie wartet unten im Garten, weil das Wetter so schön ist.' } ],
          frage:'Wo wartet Frau Koch?', opt:ORTE_4, fest:true, loesung:8, stelle:'Sie wartet unten im Garten',
          erklaerung:'Nicht im Wartezimmer, sondern im Garten.' },
        { ort:'Gespräch — Abschnitt 3', zeilen:[
            { wer:'Mann', text:'Ist Doktor Hahn auf Station drei?' },
            { wer:'Frau', text:'Nein, er hat jetzt Pause. Er isst in der Kantine.' } ],
          frage:'Wo ist Doktor Hahn?', opt:ORTE_4, fest:true, loesung:4, stelle:'Er isst in der Kantine',
          erklaerung:'Er hat Pause und isst in der Kantine.' },
        { ort:'Gespräch — Abschnitt 4', zeilen:[
            { wer:'Mann', text:'Und der Neue, Herr Sommer?' },
            { wer:'Frau', text:'Der bringt gerade die Blutproben ins Labor.' } ],
          frage:'Wo ist Herr Sommer?', opt:ORTE_4, fest:true, loesung:1, stelle:'die Blutproben ins Labor',
          erklaerung:'Blutproben bringt man ins Labor.' },
        { ort:'Gespräch — Abschnitt 5', zeilen:[
            { wer:'Mann', text:'Und Frau Peters? Ich habe eine Frage zu den Formularen.' },
            { wer:'Frau', text:'Frau Peters sitzt unten an der Anmeldung. Da können Sie sie fragen.' } ],
          frage:'Wo ist Frau Peters?', opt:ORTE_4, fest:true, loesung:3, stelle:'Frau Peters sitzt unten an der Anmeldung',
          erklaerung:'Frau Peters ist an der Anmeldung.' } ] } ] }
  ]
};
})();
