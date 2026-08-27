/* ============================================================
   lektionen-texte.js — was an einer Lektion von Hand kommt

   Wortschatz, Aufgaben und Dialoge stehen längst in uebungen.js
   und dialoge.js. Was dort NICHT steht, ist der Rahmen einer
   Stunde: die Frage zum Einstieg, eine Streitfrage, ein
   Sprechauftrag, ein Thema für die 90 Sekunden. Genau das
   steht hier — pro Bereich, von Hand geschrieben.

   Wird nur vom Baugerüst mach-lektionen.js gelesen, nie von
   der Webseite selbst.
   ============================================================ */
module.exports = {

/* ---------- Alltag ---------- */
'verkaufen': {
  titel: ['Online kaufen &', 'verkaufen'],
  ziel: 'Eine Anzeige schreiben, nachfragen, handeln — und sicher zurückschicken.',
  fragen: ['Was verkauft die Person auf dem Bild?', 'Was möchtest du wissen, bevor du etwas Gebrauchtes kaufst?', 'Was schreibst du, wenn der Preis zu hoch ist?'],
  debatte: { frage: 'Gebraucht kaufen oder neu kaufen?', pro: 'Gebraucht — billiger und besser für die Umwelt.', con: 'Neu — mit Garantie und ohne Überraschung.' },
  sprechen: ['Beschreibe einen Gegenstand bei dir zu Hause so, dass jemand ihn kaufen möchte.', 'Frage höflich nach dem Zustand: Wie alt? Funktioniert alles? Warum verkaufst du es?', 'Der Artikel kam kaputt an. Schreib in drei Sätzen, was du willst.'],
  neunzig: 'Erzähle von einer Sache, die du gekauft und bereut hast.'
},
'apotheke': {
  titel: ['In der', 'Apotheke'],
  ziel: 'Sagen, was dir fehlt, ein Rezept einlösen und die Packungsbeilage verstehen.',
  fragen: ['Was macht die Person hinter der Theke?', 'Was sagst du, wenn du Kopfschmerzen hast?', 'Was fragst du, bevor du ein Medikament nimmst?'],
  debatte: { frage: 'Medikamente online bestellen — gut oder gefährlich?', pro: 'Praktisch und oft günstiger.', con: 'Ohne Beratung ist es riskant.' },
  sprechen: ['Sag in der Apotheke, was dir fehlt — ohne das Wort für die Krankheit zu benutzen.', 'Frag nach: Wie oft? Wie lange? Vor oder nach dem Essen?', 'Erklär, dass du das Medikament nicht verträgst.'],
  neunzig: 'Erzähle, was du machst, wenn du dich krank fühlst.'
},
'notfall': {
  titel: ['Krankenhaus &', 'Notfall'],
  ziel: 'Schnell sagen, was passiert ist — und im Krankenhaus den Weg finden.',
  fragen: ['Was ist der Person auf dem Bild passiert?', 'Welche Nummer wählst du im Notfall?', 'Was sagst du zuerst am Telefon?'],
  debatte: { frage: 'Bei welchen Beschwerden geht man in die Notaufnahme?', pro: 'Lieber einmal zu viel als einmal zu wenig.', con: 'Die Notaufnahme ist für echte Notfälle da.' },
  sprechen: ['Melde einen Unfall: Wo? Was ist passiert? Wie viele Personen?', 'Beschreibe deine Schmerzen: wo, seit wann, wie stark.', 'Frag nach dem Weg zur Station — und wiederhole ihn.'],
  neunzig: 'Erzähle von einem Tag, an dem du im Krankenhaus warst.'
},
'kasse': {
  titel: ['Krankenkasse &', 'Versicherung'],
  ziel: 'Verstehen, was bezahlt wird — und höflich nachhaken, wenn etwas abgelehnt wird.',
  fragen: ['Was bekommt die Person am Schreibtisch gerade?', 'Welche Versicherungen kennst du in Deutschland?', 'Was machst du, wenn ein Brief von der Kasse kommt?'],
  debatte: { frage: 'Braucht man eine Zusatzversicherung?', pro: 'Ja — sonst zahlt man beim Zahnarzt viel selbst.', con: 'Nein — die gesetzliche Kasse reicht.' },
  sprechen: ['Ruf bei der Kasse an und frag, ob eine Behandlung bezahlt wird.', 'Erklär in drei Sätzen, warum du Widerspruch einlegst.', 'Frag nach, was du an Papieren schicken musst.'],
  neunzig: 'Erzähle, wie Krankenversicherung in deinem Heimatland funktioniert.'
},
'werkstatt': {
  titel: ['Auto &', 'Werkstatt'],
  ziel: 'Ein Geräusch beschreiben, einen Kostenvoranschlag verlangen, den Termin klären.',
  fragen: ['Was macht der Mechaniker auf dem Bild?', 'Wie beschreibst du ein Geräusch, wenn du das Wort nicht kennst?', 'Was fragst du, bevor die Werkstatt anfängt?'],
  debatte: { frage: 'Kleine Reparaturen selbst machen oder machen lassen?', pro: 'Selbst — man lernt es und spart Geld.', con: 'Werkstatt — sicherer, und die Garantie bleibt.' },
  sprechen: ['Beschreibe ein Geräusch mit einfachen Worten: wann, wie oft, wobei.', 'Frag nach Preis und Dauer — und lass es dir schriftlich geben.', 'Die Rechnung ist höher als gesagt. Sprich das ruhig an.'],
  neunzig: 'Erzähle von deinem ersten Auto oder deinem Weg zur Arbeit.'
},
'schule': {
  titel: ['Kita &', 'Schule'],
  ziel: 'Mit Lehrern sprechen, ein Kind entschuldigen, beim Elternabend etwas sagen.',
  fragen: ['Wer wartet auf dem Bild an der Tür?', 'Was sagst du, wenn dein Kind krank ist?', 'Was möchtest du beim Elterngespräch wissen?'],
  debatte: { frage: 'Hausaufgaben — sinnvoll oder zu viel?', pro: 'Sie helfen beim Üben zu Hause.', con: 'Sie nehmen Familien den Abend.' },
  sprechen: ['Melde dein Kind für heute ab und sag, warum.', 'Frag die Lehrerin, wie du zu Hause helfen kannst.', 'Sprich beim Elternabend einen Wunsch an — freundlich und klar.'],
  neunzig: 'Erzähle von deiner eigenen Schulzeit.'
},

/* ---------- Beruf: was in jedem Job gilt ---------- */
'bewerbung': {
  titel: ['Bewerbung &', 'Vorstellung'],
  ziel: 'Sich in zwei Minuten vorstellen und auf die typischen Fragen antworten.',
  fragen: ['Wer sitzt auf dem Bild wem gegenüber?', 'Was sagst du in den ersten dreißig Sekunden?', 'Welche Frage stellst du am Ende selbst?'],
  debatte: { frage: 'Foto in der Bewerbung — ja oder nein?', pro: 'Ein Foto macht die Bewerbung persönlicher.', con: 'Es lenkt von der Leistung ab.' },
  sprechen: ['Stell dich in einer Minute vor: Name, Beruf, Erfahrung, Ziel.', 'Antworte auf: Warum wollen Sie zu uns?', 'Antworte ehrlich auf: Was ist Ihre Schwäche?'],
  neunzig: 'Erzähle von deinem bisherigen Weg im Beruf.'
},
'erste-tage': {
  titel: ['Die ersten', 'Tage'],
  ziel: 'Fragen stellen, ohne sich zu schämen — und den Anfang gut hinbekommen.',
  fragen: ['Was zeigt der Kollege der neuen Person?', 'Was fragst du am ersten Tag zuerst?', 'Wie sagst du, dass du etwas nicht verstanden hast?'],
  debatte: { frage: 'Am Anfang lieber viel fragen oder erst zuschauen?', pro: 'Fragen — sonst macht man es lange falsch.', con: 'Zuschauen — man stört weniger und lernt mit den Augen.' },
  sprechen: ['Frag nach dem Ablauf: Wann Pause? Wo umziehen? Wem melde ich mich?', 'Sag höflich, dass du etwas noch einmal gezeigt bekommen möchtest.', 'Stell dich in der Teamrunde kurz vor.'],
  neunzig: 'Erzähle von deinem ersten Arbeitstag — hier oder zu Hause.'
},
'rechte': {
  titel: ['Krank, Urlaub &', 'Schicht'],
  ziel: 'Sich krankmelden, Urlaub beantragen, einen Diensttausch vorschlagen.',
  fragen: ['Was hält die Person auf dem Bild in der Hand?', 'Wen rufst du an, wenn du krank bist — und wann?', 'Wie beantragst du Urlaub?'],
  debatte: { frage: 'Krank zur Arbeit gehen — nie oder manchmal doch?', pro: 'Manchmal geht es nicht anders, das Team ist knapp.', con: 'Nie — man steckt andere an und wird langsamer gesund.' },
  sprechen: ['Melde dich telefonisch krank: kurz, klar, mit Dauer.', 'Bitte um Urlaub in einer bestimmten Woche und nenne den Grund.', 'Frag eine Kollegin, ob sie die Schicht tauscht.'],
  neunzig: 'Erzähle, wie deine Arbeitswoche aussieht.'
},
'heikel': {
  titel: ['Heikle', 'Gespräche'],
  ziel: 'Nein sagen, Kritik annehmen, einen Fehler zugeben — ruhig und höflich.',
  fragen: ['Wie sitzen die beiden auf dem Bild zueinander?', 'Wie sagst du Nein, ohne unhöflich zu sein?', 'Was sagst du, wenn dir ein Fehler passiert ist?'],
  debatte: { frage: 'Kritik sofort ansprechen oder abwarten?', pro: 'Sofort — sonst wächst der Ärger.', con: 'Abwarten — im ruhigen Moment hört man besser zu.' },
  sprechen: ['Lehne eine zusätzliche Schicht ab und biete etwas anderes an.', 'Gib einen Fehler zu und sag, was du jetzt tust.', 'Sprich einen Kollegen auf etwas an, das dich stört.'],
  neunzig: 'Erzähle von einem Gespräch, das dir schwergefallen ist.'
},

/* ---------- Beruf: die Felder ---------- */
'pflege': {
  titel: ['Pflege —', 'Schicht & Übergabe'],
  ziel: 'Eine Übergabe geben, Angehörigen etwas erklären, freundlich Grenzen setzen.',
  fragen: ['Wer arbeitet auf dem Bild, wer wird begleitet?', 'Was sagst du zu Beginn deiner Schicht?', 'Welche drei Dinge gehören in jede Übergabe?'],
  debatte: { frage: 'Sollen Angehörige bei der Pflege dabei sein?', pro: 'Ja — sie kennen den Menschen am besten.', con: 'Nein — es macht die Arbeit unruhiger.' },
  sprechen: ['Gib eine Übergabe: Nacht ruhig, Blutdruck gemessen, Schmerzen im Knie.', 'Erklär einer Tochter freundlich, warum ihre Mutter heute langsamer ist.', 'Eine Bewohnerin will nicht aufstehen. Sprich mit ihr, ohne zu drängen.'],
  neunzig: 'Erzähle von einer Schicht, die dir in Erinnerung geblieben ist.'
},
'medizin': {
  titel: ['Medizin —', 'Anamnese & Aufklärung'],
  ziel: 'Beschwerden erfragen, einen Befund einfach erklären, Sicherheit geben.',
  fragen: ['Wer spricht auf dem Bild mit wem?', 'Welche Fragen stellst du zuerst?', 'Wie erklärst du einen Befund ohne Fachwörter?'],
  debatte: { frage: 'Wie viel Fachsprache verträgt ein Patientengespräch?', pro: 'Die richtigen Begriffe schaffen Klarheit.', con: 'Einfache Worte schaffen Vertrauen.' },
  sprechen: ['Frag nach: seit wann, wo genau, wie stark, was hilft.', 'Erklär eine Untersuchung in drei einfachen Sätzen.', 'Sag einer Patientin ruhig, dass sie noch einmal wiederkommen soll.'],
  neunzig: 'Erzähle, wie ein Arztbesuch in deinem Heimatland abläuft.'
},
'erziehung': {
  titel: ['Erziehung —', 'Kita & Eltern'],
  ziel: 'Ein Tür-und-Angel-Gespräch führen und ein Kind mit Worten begleiten.',
  fragen: ['Was machen die Kinder auf dem Bild?', 'Was erzählst du Eltern beim Abholen?', 'Wie sprichst du mit einem Kind, das weint?'],
  debatte: { frage: 'Wie früh sollen Kinder in die Kita?', pro: 'Früh — sie lernen die Sprache mit anderen Kindern.', con: 'Später — die ersten Jahre gehören der Familie.' },
  sprechen: ['Erzähl in einer Minute vom Tag eines Kindes — schön und ehrlich.', 'Sprich mit Eltern über die Eingewöhnung.', 'Tröste ein Kind, ohne es zu unterbrechen.'],
  neunzig: 'Erzähle, was Kinder in deinem Heimatland nach der Schule machen.'
},
'fahren': {
  titel: ['Fahren —', 'Tour & Übergabe'],
  ziel: 'Verspätung melden, eine Adresse klären, eine Ware ordentlich übergeben.',
  fragen: ['Was transportiert die Person auf dem Bild?', 'Was sagst du, wenn du im Stau stehst?', 'Was machst du, wenn niemand öffnet?'],
  debatte: { frage: 'Pakete beim Nachbarn abgeben — praktisch oder problematisch?', pro: 'Besser als eine zweite Fahrt.', con: 'Nur mit Erlaubnis, sonst gibt es Ärger.' },
  sprechen: ['Ruf an und melde eine Stunde Verspätung.', 'Klär eine unklare Adresse am Telefon.', 'Übergib ein Paket und lass unterschreiben.'],
  neunzig: 'Erzähle von deinem Arbeitstag auf der Straße.'
},
'kueche': {
  titel: ['Küche —', 'Station & Bestellung'],
  ziel: 'Bestellungen annehmen, in der Küche kurz und klar reden, Allergien ernst nehmen.',
  fragen: ['Was macht die Person am Herd?', 'Wie sagst du in der Küche schnell Bescheid?', 'Was fragst du bei einer Allergie?'],
  debatte: { frage: 'Feste Karte oder wechselndes Tagesgericht?', pro: 'Feste Karte — alles läuft eingespielt.', con: 'Wechselnd — frischer und interessanter.' },
  sprechen: ['Ruf eine Bestellung in die Küche — kurz und laut genug.', 'Frag nach einer Allergie und wiederhole die Antwort.', 'Sag deiner Chefin, dass eine Zutat ausgegangen ist.'],
  neunzig: 'Erzähle von einem Gericht, das du gut kochen kannst.'
},
'hotel': {
  titel: ['Hotel —', 'Empfang & Gäste'],
  ziel: 'Einchecken, Wünsche aufnehmen, eine Beschwerde freundlich lösen.',
  fragen: ['Was passiert am Empfang auf dem Bild?', 'Was fragst du beim Check-in?', 'Was sagst du, wenn ein Zimmer noch nicht fertig ist?'],
  debatte: { frage: 'Check-in am Automaten oder am Empfang?', pro: 'Automat — schnell, keine Warteschlange.', con: 'Empfang — ein Mensch löst Probleme sofort.' },
  sprechen: ['Nimm einen Gast auf: Name, Nacht, Frühstück, Schlüssel.', 'Ein Gast beschwert sich über Lärm. Antworte ruhig und biete etwas an.', 'Erklär den Weg zum Frühstücksraum.'],
  neunzig: 'Erzähle von einem Hotel, in dem du einmal warst.'
},
'handel': {
  titel: ['Handel —', 'Beraten & Kasse'],
  ziel: 'Beraten, Reklamationen annehmen und an der Kasse freundlich bleiben.',
  fragen: ['Was macht die Verkäuferin auf dem Bild?', 'Wie sprichst du einen Kunden an?', 'Was sagst du, wenn etwas nicht mehr da ist?'],
  debatte: { frage: 'Braucht der Laden vor Ort noch eine Zukunft?', pro: 'Ja — Beratung und Anfassen gibt es online nicht.', con: 'Online ist billiger und immer offen.' },
  sprechen: ['Berate zu zwei Produkten und nenne einen echten Unterschied.', 'Nimm eine Reklamation an, ohne Schuld zu verteilen.', 'Erklär, wie der Umtausch bei euch läuft.'],
  neunzig: 'Erzähle, wie du am liebsten einkaufst.'
},
'it': {
  titel: ['IT —', 'Ticket & Störung'],
  ziel: 'Ein Problem sauber aufnehmen, Schritte erklären, den Stand melden.',
  fragen: ['Was sieht die Person auf ihren Bildschirmen?', 'Welche Fragen stellst du bei einer Störung zuerst?', 'Wie erklärst du einen Schritt am Telefon?'],
  debatte: { frage: 'Homeoffice in der IT — dauerhaft oder nur manchmal?', pro: 'Dauerhaft — konzentriertes Arbeiten geht überall.', con: 'Vor Ort — Probleme klärt man schneller zu zweit.' },
  sprechen: ['Nimm ein Ticket auf: was, seit wann, wie oft, was hilft.', 'Erklär einen Neustart in einfachen Schritten.', 'Melde den Stand einer Störung an die Abteilung.'],
  neunzig: 'Erzähle von einem technischen Problem, das du gelöst hast.'
},
'buchhaltung': {
  titel: ['Buchhaltung —', 'Rechnung & Frist'],
  ziel: 'Eine Rechnung prüfen, an eine Frist erinnern, eine Nachfrage sachlich beantworten.',
  fragen: ['Was liegt auf dem Schreibtisch auf dem Bild?', 'Worauf schaust du bei einer Rechnung zuerst?', 'Wie erinnerst du höflich an eine offene Zahlung?'],
  debatte: { frage: 'Alles digital oder Papier daneben behalten?', pro: 'Digital — schneller zu finden und zu sichern.', con: 'Papier — man übersieht weniger.' },
  sprechen: ['Frag nach einer fehlenden Angabe auf einer Rechnung.', 'Schreib eine freundliche Erinnerung in drei Sätzen.', 'Erklär einer Kollegin, warum eine Zahlung noch nicht raus ist.'],
  neunzig: 'Erzähle, wie du deine eigenen Rechnungen ordnest.'
},
'friseur-beruf': {
  titel: ['Friseur —', 'Beratung & Termin'],
  ziel: 'Einen Wunsch verstehen, beraten und einen Termin sauber vereinbaren.',
  fragen: ['Was passiert auf dem Bild im Salon?', 'Wie fragst du nach dem Wunsch?', 'Was sagst du, wenn ein Wunsch nicht geht?'],
  debatte: { frage: 'Soll man ehrlich sagen, dass eine Frisur nicht passt?', pro: 'Ja — dafür kommt man zu Fachleuten.', con: 'Der Kunde entscheidet, wir beraten nur.' },
  sprechen: ['Frag nach: wie kurz, wie oft gefärbt, was gefällt nicht?', 'Rate freundlich von einem Wunsch ab und biete etwas an.', 'Vereinbare einen Termin mit Dauer und Preis.'],
  neunzig: 'Erzähle von einem Friseurbesuch, der gut oder schiefgegangen ist.'
},
'landwirtschaft': {
  titel: ['Landwirtschaft —', 'Hof & Saison'],
  ziel: 'Über Arbeit im Jahreslauf sprechen, Anweisungen geben und verstehen.',
  fragen: ['Was steht auf dem Bild neben der Person?', 'Welche Arbeit gehört zu welcher Jahreszeit?', 'Wie gibst du eine kurze Anweisung?'],
  debatte: { frage: 'Bio oder konventionell?', pro: 'Bio — besser für Boden und Tiere.', con: 'Konventionell — mehr Ertrag, günstigere Lebensmittel.' },
  sprechen: ['Beschreibe deinen Arbeitstag von morgens bis abends.', 'Erklär einem neuen Helfer eine Aufgabe in drei Schritten.', 'Sag, warum eine Arbeit heute nicht geht — Wetter, Technik, Zeit.'],
  neunzig: 'Erzähle, was in deinem Heimatland angebaut wird.'
},
'sozial': {
  titel: ['Soziale Arbeit —', 'Beratung & Nähe'],
  ziel: 'Zuhören, nachfragen, gemeinsam einen nächsten Schritt finden.',
  fragen: ['Wer sitzt auf dem Bild am Tisch?', 'Wie beginnst du ein Beratungsgespräch?', 'Wie fragst du nach, ohne zu drängen?'],
  debatte: { frage: 'Wie viel Nähe verträgt Beratung?', pro: 'Nähe schafft Vertrauen und öffnet Türen.', con: 'Abstand schützt beide Seiten.' },
  sprechen: ['Beginne ein Gespräch und lass die andere Person zuerst erzählen.', 'Fass zusammen, was du gehört hast — in eigenen Worten.', 'Schlagt gemeinsam einen nächsten Schritt vor.'],
  neunzig: 'Erzähle, wer dir geholfen hat, als du neu warst.'
},

/* ---------- Felder, die vorher gar kein Material hatten ---------- */
'polizei': {
  titel: ['Polizei &', 'Sicherheit'],
  ziel: 'Eine Anzeige machen, etwas beschreiben, bei einer Kontrolle ruhig bleiben.',
  fragen: ['Was passiert auf dem Bild gerade?', 'Welche Nummer wählst du bei Gefahr?', 'Was sagst du, wenn dir etwas gestohlen wurde?'],
  debatte: { frage: 'Mehr Kameras auf öffentlichen Plätzen?', pro: 'Sie helfen, Taten aufzuklären.', con: 'Sie beobachten vor allem Unschuldige.' },
  sprechen: ['Melde einen Diebstahl: was, wo, wann, wie sah die Person aus?', 'Beschreibe eine Person in fünf Sätzen — ohne zu bewerten.', 'Bei einer Kontrolle wirst du nach dem Ausweis gefragt. Antworte höflich.'],
  neunzig: 'Erzähle, wie sicher du dich hier fühlst — und warum.'
},
'bau': {
  titel: ['Auf dem', 'Bau'],
  ziel: 'Anweisungen verstehen, Gefahren ansprechen, den Stand der Arbeit melden.',
  fragen: ['Was macht die Person auf dem Bild?', 'Was gehört auf jeder Baustelle zur Sicherheit?', 'Wie sagst du, dass etwas gefährlich ist?'],
  debatte: { frage: 'Muss man auf dem Bau laut werden, damit es läuft?', pro: 'Auf der Baustelle hört man sonst nichts.', con: 'Klare Absprachen wirken besser als Lautstärke.' },
  sprechen: ['Erklär einem neuen Kollegen den Weg über die Baustelle — mit den Gefahrenstellen.', 'Melde deinem Bauleiter, dass Material fehlt.', 'Sag höflich, dass du eine Arbeit ohne Sicherung nicht machst.'],
  neunzig: 'Erzähle von einer Arbeit, auf die du stolz bist.'
},
'elektro-shk': {
  titel: ['Elektro &', 'SHK'],
  ziel: 'Eine Störung aufnehmen, dem Kunden erklären, was zu tun ist, sicher arbeiten.',
  fragen: ['Woran arbeitet die Person auf dem Bild?', 'Was prüfst du, bevor du anfängst?', 'Wie erklärst du einem Kunden ein Problem ohne Fachwörter?'],
  debatte: { frage: 'Reparieren oder gleich austauschen?', pro: 'Reparieren — günstiger und besser für die Umwelt.', con: 'Austauschen — neue Technik verbraucht weniger.' },
  sprechen: ['Nimm eine Störung auf: seit wann, wie oft, was hat der Kunde schon versucht?', 'Erklär, warum du heute nicht fertig wirst.', 'Sag, welches Ersatzteil du brauchst und wie lange es dauert.'],
  neunzig: 'Erzähle von einem Einsatz, der anders lief als geplant.'
},
'metall': {
  titel: ['Metall &', 'Werkstatt'],
  ziel: 'Maße und Zeichnungen besprechen, Fehler melden, sicher arbeiten.',
  fragen: ['Was liegt auf dem Bild auf der Werkbank?', 'Was schaust du dir auf einer Zeichnung zuerst an?', 'Was machst du, wenn ein Maß nicht stimmt?'],
  debatte: { frage: 'Lieber schnell arbeiten oder lieber genau?', pro: 'Tempo — der Auftrag muss raus.', con: 'Genauigkeit — Nacharbeit kostet mehr Zeit.' },
  sprechen: ['Erklär einem Kollegen ein Teil nach der Zeichnung.', 'Melde, dass ein Maß außerhalb der Toleranz liegt.', 'Sag, welches Werkzeug du brauchst und warum.'],
  neunzig: 'Erzähle, wie du zu deinem Beruf gekommen bist.'
},
'reinigung': {
  titel: ['Reinigung —', 'Plan & Übergabe'],
  ziel: 'Den Plan verstehen, eine Beschwerde annehmen, die Schicht sauber übergeben.',
  fragen: ['Was hat die Person auf dem Bild dabei?', 'Was machst du zuerst, wenn du einen Raum betrittst?', 'Was sagst du, wenn etwas fehlt?'],
  debatte: { frage: 'Reinigung tagsüber oder nach Feierabend?', pro: 'Tagsüber — man kann Fragen sofort klären.', con: 'Abends — man stört niemanden bei der Arbeit.' },
  sprechen: ['Erklär, in welcher Reihenfolge du einen Raum machst.', 'Nimm eine Beschwerde an, ohne dich zu verteidigen.', 'Gib eine Übergabe: fertig, offen, kaputt.'],
  neunzig: 'Erzähle, was an deiner Arbeit die meisten Leute nicht sehen.'
},
'lager': {
  titel: ['Lager —', 'Ware & Versand'],
  ziel: 'Ware annehmen, kommissionieren, Abweichungen sofort melden.',
  fragen: ['Was steht auf dem Bild in den Regalen?', 'Was prüfst du beim Wareneingang?', 'Was machst du, wenn der Bestand nicht stimmt?'],
  debatte: { frage: 'Alles per Scanner oder auch auf Papier?', pro: 'Scanner — schneller und weniger Fehler.', con: 'Papier — funktioniert auch, wenn die Technik ausfällt.' },
  sprechen: ['Melde eine Teillieferung: was kam, was fehlt.', 'Erklär einem neuen Kollegen das Kommissionieren in drei Schritten.', 'Sag, warum der Versand heute später rausgeht.'],
  neunzig: 'Erzähle, wie ein Tag in deinem Lager abläuft.'
},
'produktion': {
  titel: ['Produktion —', 'Linie & Qualität'],
  ziel: 'Störungen melden, Stückzahlen besprechen, die Schicht übergeben.',
  fragen: ['Was macht die Person auf dem Bild an der Anlage?', 'Was tust du zuerst, wenn die Maschine steht?', 'Wie meldest du einen Qualitätsfehler?'],
  debatte: { frage: 'Zählt am Ende Stückzahl oder Qualität?', pro: 'Stückzahl — ohne Menge kein Geschäft.', con: 'Qualität — Ausschuss kostet doppelt.' },
  sprechen: ['Melde einen Stillstand: seit wann, was ist passiert, wer ist informiert?', 'Erklär einem Kollegen das Rüsten in vier Schritten.', 'Gib die Schichtübergabe: Stückzahl, Störungen, offene Punkte.'],
  neunzig: 'Erzähle, was an deiner Schicht gut und was schwer ist.'
},
'ingenieur': {
  titel: ['Technik &', 'Planung'],
  ziel: 'Anforderungen klären, Änderungen begründen, eine Abnahme begleiten.',
  fragen: ['Was hält die Person auf dem Bild in der Hand?', 'Was klärst du am Anfang eines Projekts?', 'Wie begründest du eine Änderung?'],
  debatte: { frage: 'Lieber früh liefern oder lieber vollständig?', pro: 'Früh — man sieht schnell, ob es passt.', con: 'Vollständig — Nachbessern kostet Vertrauen.' },
  sprechen: ['Erklär eine Anforderung so, dass die Werkstatt sie umsetzen kann.', 'Begründe, warum ein Termin nicht zu halten ist.', 'Führe durch eine Abnahme: was passt, was ist offen, wie geht es weiter.'],
  neunzig: 'Erzähle von einem Projekt, das dich weitergebracht hat.'
}
};
