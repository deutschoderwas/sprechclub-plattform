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
  debatte: {
    frage: 'Gebraucht kaufen oder neu kaufen?',
    für: 'Gebraucht', gegen: 'Neu',
    pro: ['Es kostet oft die Hälfte.', 'Nichts wird weggeworfen, was noch funktioniert.', 'Manche Sachen gibt es neu gar nicht mehr.'],
    con: ['Es gibt Garantie, wenn etwas kaputtgeht.', 'Man weiß genau, was man bekommt.', 'Man muss nichts abholen und nicht verhandeln.']
  },
  sprechen: ['Beschreibe einen Gegenstand bei dir zu Hause so, dass jemand ihn kaufen möchte.', 'Frage höflich nach dem Zustand: Wie alt? Funktioniert alles? Warum verkaufst du es?', 'Der Artikel kam kaputt an. Schreib in drei Sätzen, was du willst.'],
  neunzig: 'Erzähle von einer Sache, die du gekauft und bereut hast.'
},
'apotheke': {
  titel: ['In der', 'Apotheke'],
  ziel: 'Sagen, was dir fehlt, ein Rezept einlösen und die Packungsbeilage verstehen.',
  fragen: ['Was macht die Person hinter der Theke?', 'Was sagst du, wenn du Kopfschmerzen hast?', 'Was fragst du, bevor du ein Medikament nimmst?'],
  debatte: {
    frage: 'Medikamente online bestellen — gut oder gefährlich?',
    für: 'Online bestellen', gegen: 'In der Apotheke',
    pro: ['Es ist deutlich billiger.', 'Man kann auch abends und sonntags bestellen.', 'Wer schlecht laufen kann, spart sich den Weg.'],
    con: ['In der Apotheke wird man beraten und gefragt.', 'Man bekommt es sofort, nicht erst in drei Tagen.', 'Bei Wechselwirkungen schaut jemand mit.']
  },
  sprechen: ['Sag in der Apotheke, was dir fehlt — ohne das Wort für die Krankheit zu benutzen.', 'Frag nach: Wie oft? Wie lange? Vor oder nach dem Essen?', 'Erklär, dass du das Medikament nicht verträgst.'],
  neunzig: 'Erzähle, was du machst, wenn du dich krank fühlst.'
},
'notfall': {
  titel: ['Krankenhaus &', 'Notfall'],
  ziel: 'Schnell sagen, was passiert ist — und im Krankenhaus den Weg finden.',
  fragen: ['Was ist der Person auf dem Bild passiert?', 'Welche Nummer wählst du im Notfall?', 'Was sagst du zuerst am Telefon?'],
  debatte: {
    frage: 'Bei welchen Beschwerden geht man in die Notaufnahme?',
    für: 'Lieber einmal zu viel', gegen: 'Nur im echten Notfall',
    pro: ['Bei Brustschmerzen kann man nicht abwarten.', 'Am Wochenende ist keine Praxis offen.', 'Auch Angst ist ein Grund — Sicherheit hilft.'],
    con: ['Wer nicht dringend ist, wartet dort stundenlang.', 'Der Hausarzt kennt die Vorgeschichte.', 'Der Notdienst am Telefon sagt, was nötig ist.']
  },
  sprechen: ['Melde einen Unfall: Wo? Was ist passiert? Wie viele Personen?', 'Beschreibe deine Schmerzen: wo, seit wann, wie stark.', 'Frag nach dem Weg zur Station — und wiederhole ihn.'],
  neunzig: 'Erzähle von einem Tag, an dem du im Krankenhaus warst.'
},
'kasse': {
  titel: ['Krankenkasse &', 'Versicherung'],
  ziel: 'Verstehen, was bezahlt wird — und höflich nachhaken, wenn etwas abgelehnt wird.',
  fragen: ['Was bekommt die Person am Schreibtisch gerade?', 'Welche Versicherungen kennst du in Deutschland?', 'Was machst du, wenn ein Brief von der Kasse kommt?'],
  debatte: {
    frage: 'Braucht man eine Zusatzversicherung?',
    für: 'Zusatzversicherung', gegen: 'Nur die gesetzliche',
    pro: ['Beim Zahnarzt zahlt man sonst viel selbst.', 'Eine Brille kostet schnell mehrere hundert Euro.', 'Im Krankenhaus bekommt man ein ruhigeres Zimmer.'],
    con: ['Die Grundversorgung ist bezahlt, und die reicht meistens.', 'Man zahlt jahrelang für etwas, das man selten braucht.', 'Das Geld kann man auch selbst zurücklegen.']
  },
  sprechen: ['Ruf bei der Kasse an und frag, ob eine Behandlung bezahlt wird.', 'Erklär in drei Sätzen, warum du Widerspruch einlegst.', 'Frag nach, was du an Papieren schicken musst.'],
  neunzig: 'Erzähle, wie Krankenversicherung in deinem Heimatland funktioniert.'
},
'werkstatt': {
  titel: ['Auto &', 'Werkstatt'],
  ziel: 'Ein Geräusch beschreiben, einen Kostenvoranschlag verlangen, den Termin klären.',
  fragen: ['Was macht der Mechaniker auf dem Bild?', 'Wie beschreibst du ein Geräusch, wenn du das Wort nicht kennst?', 'Was fragst du, bevor die Werkstatt anfängt?'],
  debatte: {
    frage: 'Kleine Reparaturen selbst machen oder machen lassen?',
    für: 'Selbst machen', gegen: 'In die Werkstatt',
    pro: ['Ein Ölwechsel ist keine Wissenschaft.', 'Man spart die Arbeitsstunde, und die ist teuer.', 'Man lernt sein Auto kennen.'],
    con: ['Bei den Bremsen geht es um Leben.', 'Ohne Werkstattnachweis kann die Garantie weg sein.', 'Werkzeug für einmal lohnt sich nicht.']
  },
  sprechen: ['Beschreibe ein Geräusch mit einfachen Worten: wann, wie oft, wobei.', 'Frag nach Preis und Dauer — und lass es dir schriftlich geben.', 'Die Rechnung ist höher als gesagt. Sprich das ruhig an.'],
  neunzig: 'Erzähle von deinem ersten Auto oder deinem Weg zur Arbeit.'
},
'schule': {
  titel: ['Kita &', 'Schule'],
  ziel: 'Mit Lehrern sprechen, ein Kind entschuldigen, beim Elternabend etwas sagen.',
  fragen: ['Wer wartet auf dem Bild an der Tür?', 'Was sagst du, wenn dein Kind krank ist?', 'Was möchtest du beim Elterngespräch wissen?'],
  debatte: {
    frage: 'Hausaufgaben — sinnvoll oder zu viel?',
    für: 'Sinnvoll', gegen: 'Zu viel',
    pro: ['Ohne Üben bleibt nichts hängen.', 'Kinder lernen, sich selbst zu organisieren.', 'Eltern sehen, was in der Schule gerade läuft.'],
    con: ['Nach acht Stunden Schule ist der Kopf voll.', 'Wer zu Hause keine Hilfe hat, fällt weiter zurück.', 'Der Nachmittag gehört auch der Familie.']
  },
  sprechen: ['Melde dein Kind für heute ab und sag, warum.', 'Frag die Lehrerin, wie du zu Hause helfen kannst.', 'Sprich beim Elternabend einen Wunsch an — freundlich und klar.'],
  neunzig: 'Erzähle von deiner eigenen Schulzeit.'
},

/* ---------- Beruf: was in jedem Job gilt ---------- */
'bewerbung': {
  titel: ['Bewerbung &', 'Vorstellung'],
  ziel: 'Sich in zwei Minuten vorstellen und auf die typischen Fragen antworten.',
  fragen: ['Wer sitzt auf dem Bild wem gegenüber?', 'Was sagst du in den ersten dreißig Sekunden?', 'Welche Frage stellst du am Ende selbst?'],
  debatte: {
    frage: 'Foto in der Bewerbung — ja oder nein?',
    für: 'Mit Foto', gegen: 'Ohne Foto',
    pro: ['Ein Gesicht bleibt eher im Kopf.', 'Es wirkt persönlicher und offener.', 'In manchen Branchen wird es erwartet.'],
    con: ['Es zählt die Qualifikation, nicht das Aussehen.', 'Ein Foto lädt zu Vorurteilen ein.', 'In vielen Ländern ist es längst unüblich.']
  },
  sprechen: ['Stell dich in einer Minute vor: Name, Beruf, Erfahrung, Ziel.', 'Antworte auf: Warum wollen Sie zu uns?', 'Antworte ehrlich auf: Was ist Ihre Schwäche?'],
  neunzig: 'Erzähle von deinem bisherigen Weg im Beruf.'
},
'erste-tage': {
  titel: ['Die ersten', 'Tage'],
  ziel: 'Fragen stellen, ohne sich zu schämen — und den Anfang gut hinbekommen.',
  fragen: ['Was zeigt der Kollege der neuen Person?', 'Was fragst du am ersten Tag zuerst?', 'Wie sagst du, dass du etwas nicht verstanden hast?'],
  debatte: {
    frage: 'Am Anfang lieber viel fragen oder erst zuschauen?',
    für: 'Fragen', gegen: 'Zuschauen',
    pro: ['Wer nicht fragt, macht es wochenlang falsch.', 'Fragen zeigt Interesse, nicht Schwäche.', 'Am Anfang darf man alles fragen — später nicht mehr.'],
    con: ['Man stört Kollegen mitten in der Arbeit.', 'Vieles klärt sich beim Zusehen von selbst.', 'Wer erst schaut, stellt danach die besseren Fragen.']
  },
  sprechen: ['Frag nach dem Ablauf: Wann Pause? Wo umziehen? Wem melde ich mich?', 'Sag höflich, dass du etwas noch einmal gezeigt bekommen möchtest.', 'Stell dich in der Teamrunde kurz vor.'],
  neunzig: 'Erzähle von deinem ersten Arbeitstag — hier oder zu Hause.'
},
'rechte': {
  titel: ['Krank, Urlaub &', 'Schicht'],
  ziel: 'Sich krankmelden, Urlaub beantragen, einen Diensttausch vorschlagen.',
  fragen: ['Was hält die Person auf dem Bild in der Hand?', 'Wen rufst du an, wenn du krank bist — und wann?', 'Wie beantragst du Urlaub?'],
  debatte: {
    frage: 'Krank zur Arbeit gehen — nie oder manchmal doch?',
    für: 'Manchmal ja', gegen: 'Nie',
    pro: ['Bei einer leichten Erkältung geht es oft.', 'Das Team ist knapp, andere müssen einspringen.', 'Zu Hause sitzen macht auch nicht gesünder.'],
    con: ['Man steckt Kollegen und Kunden an.', 'Man wird langsamer gesund und fällt länger aus.', 'Fehler passieren, wenn man nicht klar denkt.']
  },
  sprechen: ['Melde dich telefonisch krank: kurz, klar, mit Dauer.', 'Bitte um Urlaub in einer bestimmten Woche und nenne den Grund.', 'Frag eine Kollegin, ob sie die Schicht tauscht.'],
  neunzig: 'Erzähle, wie deine Arbeitswoche aussieht.'
},
'heikel': {
  titel: ['Heikle', 'Gespräche'],
  ziel: 'Nein sagen, Kritik annehmen, einen Fehler zugeben — ruhig und höflich.',
  fragen: ['Wie sitzen die beiden auf dem Bild zueinander?', 'Wie sagst du Nein, ohne unhöflich zu sein?', 'Was sagst du, wenn dir ein Fehler passiert ist?'],
  debatte: {
    frage: 'Kritik sofort ansprechen oder abwarten?',
    für: 'Sofort ansprechen', gegen: 'Abwarten',
    pro: ['Später erinnert sich niemand an die Einzelheiten.', 'Ärger wächst, wenn man ihn schluckt.', 'Wer sofort spricht, spricht meist noch sachlich.'],
    con: ['Im ersten Ärger sagt man Dinge, die man bereut.', 'Der andere hört besser zu, wenn Ruhe ist.', 'Manches erledigt sich von selbst.']
  },
  sprechen: ['Lehne eine zusätzliche Schicht ab und biete etwas anderes an.', 'Gib einen Fehler zu und sag, was du jetzt tust.', 'Sprich einen Kollegen auf etwas an, das dich stört.'],
  neunzig: 'Erzähle von einem Gespräch, das dir schwergefallen ist.'
},

/* ---------- Beruf: die Felder ---------- */
'pflege': {
  titel: ['Pflege —', 'Schicht & Übergabe'],
  ziel: 'Eine Übergabe geben, Angehörigen etwas erklären, freundlich Grenzen setzen.',
  fragen: ['Wer arbeitet auf dem Bild, wer wird begleitet?', 'Was sagst du zu Beginn deiner Schicht?', 'Welche drei Dinge gehören in jede Übergabe?'],
  debatte: {
    frage: 'Sollen Angehörige bei der Pflege dabei sein?',
    für: 'Dabei sein', gegen: 'Draußen bleiben',
    pro: ['Sie kennen den Menschen seit Jahrzehnten.', 'Vertraute Stimmen beruhigen.', 'Sie sehen, wie viel Arbeit dahintersteckt.'],
    con: ['Die Pflege dauert doppelt so lange.', 'Manches ist für die Familie schwer auszuhalten.', 'Viele schämen sich vor den eigenen Kindern.']
  },
  sprechen: ['Gib eine Übergabe: Nacht ruhig, Blutdruck gemessen, Schmerzen im Knie.', 'Erklär einer Tochter freundlich, warum ihre Mutter heute langsamer ist.', 'Eine Bewohnerin will nicht aufstehen. Sprich mit ihr, ohne zu drängen.'],
  neunzig: 'Erzähle von einer Schicht, die dir in Erinnerung geblieben ist.'
},
'medizin': {
  titel: ['Medizin —', 'Anamnese & Aufklärung'],
  ziel: 'Beschwerden erfragen, einen Befund einfach erklären, Sicherheit geben.',
  fragen: ['Wer spricht auf dem Bild mit wem?', 'Welche Fragen stellst du zuerst?', 'Wie erklärst du einen Befund ohne Fachwörter?'],
  debatte: {
    frage: 'Wie viel Fachsprache verträgt ein Patientengespräch?',
    für: 'Fachbegriffe nennen', gegen: 'Einfache Worte',
    pro: ['Der richtige Begriff steht später auch im Brief.', 'Patienten können danach selbst nachlesen.', 'Es klingt genau und nicht ungefähr.'],
    con: ['Wer nichts versteht, fragt nicht mehr nach.', 'Angst wächst mit fremden Wörtern.', 'Nur verstandene Anweisungen werden befolgt.']
  },
  sprechen: ['Frag nach: seit wann, wo genau, wie stark, was hilft.', 'Erklär eine Untersuchung in drei einfachen Sätzen.', 'Sag einer Patientin ruhig, dass sie noch einmal wiederkommen soll.'],
  neunzig: 'Erzähle, wie ein Arztbesuch in deinem Heimatland abläuft.'
},
'erziehung': {
  titel: ['Erziehung —', 'Kita & Eltern'],
  ziel: 'Ein Tür-und-Angel-Gespräch führen und ein Kind mit Worten begleiten.',
  fragen: ['Was machen die Kinder auf dem Bild?', 'Was erzählst du Eltern beim Abholen?', 'Wie sprichst du mit einem Kind, das weint?'],
  debatte: {
    frage: 'Wie früh sollen Kinder in die Kita?',
    für: 'Früh', gegen: 'Später',
    pro: ['Kinder lernen Sprache am schnellsten von Kindern.', 'Eltern können arbeiten und bleiben unabhängig.', 'Feste Zeiten geben Kindern Sicherheit.'],
    con: ['Ganz Kleine brauchen wenige feste Bezugspersonen.', 'Die Gruppen sind oft zu groß.', 'Die ersten Jahre kommen nie wieder.']
  },
  sprechen: ['Erzähl in einer Minute vom Tag eines Kindes — schön und ehrlich.', 'Sprich mit Eltern über die Eingewöhnung.', 'Tröste ein Kind, ohne es zu unterbrechen.'],
  neunzig: 'Erzähle, was Kinder in deinem Heimatland nach der Schule machen.'
},
'fahren': {
  titel: ['Fahren —', 'Tour & Übergabe'],
  ziel: 'Verspätung melden, eine Adresse klären, eine Ware ordentlich übergeben.',
  fragen: ['Was transportiert die Person auf dem Bild?', 'Was sagst du, wenn du im Stau stehst?', 'Was machst du, wenn niemand öffnet?'],
  debatte: {
    frage: 'Pakete beim Nachbarn abgeben — praktisch oder problematisch?',
    für: 'Beim Nachbarn abgeben', gegen: 'Wieder mitnehmen',
    pro: ['Eine zweite Fahrt kostet Zeit und Sprit.', 'Der Kunde hat sein Paket noch heute.', 'Die meisten Nachbarn helfen gern.'],
    con: ['Ohne Erlaubnis ist es heikel.', 'Manche Nachbarn kennt man gar nicht.', 'Bei Verlust steht der Fahrer gerade.']
  },
  sprechen: ['Ruf an und melde eine Stunde Verspätung.', 'Klär eine unklare Adresse am Telefon.', 'Übergib ein Paket und lass unterschreiben.'],
  neunzig: 'Erzähle von deinem Arbeitstag auf der Straße.'
},
'küche': {
  titel: ['Küche —', 'Station & Bestellung'],
  ziel: 'Bestellungen annehmen, in der Küche kurz und klar reden, Allergien ernst nehmen.',
  fragen: ['Was macht die Person am Herd?', 'Wie sagst du in der Küche schnell Bescheid?', 'Was fragst du bei einer Allergie?'],
  debatte: {
    frage: 'Feste Karte oder wechselndes Tagesgericht?',
    für: 'Feste Karte', gegen: 'Wechselndes Tagesgericht',
    pro: ['Alle Handgriffe sitzen, es geht schneller.', 'Der Einkauf ist planbar, es bleibt weniger übrig.', 'Gäste wissen, was sie bekommen.'],
    con: ['Frisches vom Markt landet sofort auf dem Teller.', 'Das Team langweilt sich nicht.', 'Stammgäste kommen öfter, weil es Neues gibt.']
  },
  sprechen: ['Ruf eine Bestellung in die Küche — kurz und laut genug.', 'Frag nach einer Allergie und wiederhole die Antwort.', 'Sag deiner Chefin, dass eine Zutat ausgegangen ist.'],
  neunzig: 'Erzähle von einem Gericht, das du gut kochen kannst.'
},
'hotel': {
  titel: ['Hotel —', 'Empfang & Gäste'],
  ziel: 'Einchecken, Wünsche aufnehmen, eine Beschwerde freundlich lösen.',
  fragen: ['Was passiert am Empfang auf dem Bild?', 'Was fragst du beim Check-in?', 'Was sagst du, wenn ein Zimmer noch nicht fertig ist?'],
  debatte: {
    frage: 'Check-in am Automaten oder am Empfang?',
    für: 'Automat', gegen: 'Empfang',
    pro: ['Keine Schlange nach einer langen Anreise.', 'Es geht rund um die Uhr.', 'Wer müde ist, will nicht reden.'],
    con: ['Ein Mensch löst Sonderwünsche in einer Minute.', 'Der erste Eindruck entscheidet über die Bewertung.', 'Bei Problemen steht man am Automaten allein.']
  },
  sprechen: ['Nimm einen Gast auf: Name, Nacht, Frühstück, Schlüssel.', 'Ein Gast beschwert sich über Lärm. Antworte ruhig und biete etwas an.', 'Erklär den Weg zum Frühstücksraum.'],
  neunzig: 'Erzähle von einem Hotel, in dem du einmal warst.'
},
'handel': {
  titel: ['Handel —', 'Beraten & Kasse'],
  ziel: 'Beraten, Reklamationen annehmen und an der Kasse freundlich bleiben.',
  fragen: ['Was macht die Verkäuferin auf dem Bild?', 'Wie sprichst du einen Kunden an?', 'Was sagst du, wenn etwas nicht mehr da ist?'],
  debatte: {
    frage: 'Braucht der Laden vor Ort noch eine Zukunft?',
    für: 'Der Laden bleibt', gegen: 'Online gewinnt',
    pro: ['Beraten, anfassen, anprobieren — das kann kein Paket.', 'Man hat es sofort, ohne zu warten.', 'Der Laden hält die Innenstadt am Leben.'],
    con: ['Online ist fast immer billiger.', 'Die Auswahl im Netz ist größer.', 'Dort ist auch sonntags um zehn geöffnet.']
  },
  sprechen: ['Berate zu zwei Produkten und nenne einen echten Unterschied.', 'Nimm eine Reklamation an, ohne Schuld zu verteilen.', 'Erklär, wie der Umtausch bei euch läuft.'],
  neunzig: 'Erzähle, wie du am liebsten einkaufst.'
},
'it': {
  titel: ['IT —', 'Ticket & Störung'],
  ziel: 'Ein Problem sauber aufnehmen, Schritte erklären, den Stand melden.',
  fragen: ['Was sieht die Person auf ihren Bildschirmen?', 'Welche Fragen stellst du bei einer Störung zuerst?', 'Wie erklärst du einen Schritt am Telefon?'],
  debatte: {
    frage: 'Homeoffice in der IT — dauerhaft oder nur manchmal?',
    für: 'Dauerhaft Homeoffice', gegen: 'Vor Ort',
    pro: ['Konzentrierte Arbeit gelingt zu Hause besser.', 'Der Arbeitsweg fällt weg.', 'Man findet Leute, die weiter weg wohnen.'],
    con: ['Ein Blick über die Schulter spart eine Stunde Chat.', 'Neue Kollegen lernen vor Ort schneller.', 'Das Team bleibt zusammen, nicht nur verbunden.']
  },
  sprechen: ['Nimm ein Ticket auf: was, seit wann, wie oft, was hilft.', 'Erklär einen Neustart in einfachen Schritten.', 'Melde den Stand einer Störung an die Abteilung.'],
  neunzig: 'Erzähle von einem technischen Problem, das du gelöst hast.'
},
'buchhaltung': {
  titel: ['Buchhaltung —', 'Rechnung & Frist'],
  ziel: 'Eine Rechnung prüfen, an eine Frist erinnern, eine Nachfrage sachlich beantworten.',
  fragen: ['Was liegt auf dem Schreibtisch auf dem Bild?', 'Worauf schaust du bei einer Rechnung zuerst?', 'Wie erinnerst du höflich an eine offene Zahlung?'],
  debatte: {
    frage: 'Alles digital oder Papier daneben behalten?',
    für: 'Alles digital', gegen: 'Papier daneben',
    pro: ['Suchen dauert Sekunden statt Stunden.', 'Beim Umzug geht nichts verloren.', 'Zwei Personen können gleichzeitig hineinschauen.'],
    con: ['Ohne Strom und Netz kommt man nicht dran.', 'Auf Papier übersieht man weniger.', 'Manches will der Prüfer immer noch im Original.']
  },
  sprechen: ['Frag nach einer fehlenden Angabe auf einer Rechnung.', 'Schreib eine freundliche Erinnerung in drei Sätzen.', 'Erklär einer Kollegin, warum eine Zahlung noch nicht raus ist.'],
  neunzig: 'Erzähle, wie du deine eigenen Rechnungen ordnest.'
},
'friseur-beruf': {
  titel: ['Friseur —', 'Beratung & Termin'],
  ziel: 'Einen Wunsch verstehen, beraten und einen Termin sauber vereinbaren.',
  fragen: ['Was passiert auf dem Bild im Salon?', 'Wie fragst du nach dem Wunsch?', 'Was sagst du, wenn ein Wunsch nicht geht?'],
  debatte: {
    frage: 'Soll man ehrlich sagen, dass eine Frisur nicht passt?',
    für: 'Ehrlich sagen', gegen: 'Der Kunde entscheidet',
    pro: ['Genau dafür geht man zu Fachleuten.', 'Unzufriedene Kunden kommen nicht wieder.', 'Ein ehrlicher Rat kostet nichts.'],
    con: ['Es ist der Kopf des Kunden, nicht meiner.', 'Über Geschmack lässt sich nicht streiten.', 'Wer sich bevormundet fühlt, geht woanders hin.']
  },
  sprechen: ['Frag nach: wie kurz, wie oft gefärbt, was gefällt nicht?', 'Rate freundlich von einem Wunsch ab und biete etwas an.', 'Vereinbare einen Termin mit Dauer und Preis.'],
  neunzig: 'Erzähle von einem Friseurbesuch, der gut oder schiefgegangen ist.'
},
'landwirtschaft': {
  titel: ['Landwirtschaft —', 'Hof & Saison'],
  ziel: 'Über Arbeit im Jahreslauf sprechen, Anweisungen geben und verstehen.',
  fragen: ['Was steht auf dem Bild neben der Person?', 'Welche Arbeit gehört zu welcher Jahreszeit?', 'Wie gibst du eine kurze Anweisung?'],
  debatte: {
    frage: 'Bio oder konventionell?',
    für: 'Bio', gegen: 'Konventionell',
    pro: ['Der Boden bleibt länger fruchtbar.', 'Weniger Chemie im Grundwasser.', 'Viele Kunden zahlen dafür mehr.'],
    con: ['Der Ertrag ist kleiner, das Essen teurer.', 'Nicht jeder kann sich Bio leisten.', 'Auch konventionell gelten strenge Regeln.']
  },
  sprechen: ['Beschreibe deinen Arbeitstag von morgens bis abends.', 'Erklär einem neuen Helfer eine Aufgabe in drei Schritten.', 'Sag, warum eine Arbeit heute nicht geht — Wetter, Technik, Zeit.'],
  neunzig: 'Erzähle, was in deinem Heimatland angebaut wird.'
},
'sozial': {
  titel: ['Soziale Arbeit —', 'Beratung & Nähe'],
  ziel: 'Zuhören, nachfragen, gemeinsam einen nächsten Schritt finden.',
  fragen: ['Wer sitzt auf dem Bild am Tisch?', 'Wie beginnst du ein Beratungsgespräch?', 'Wie fragst du nach, ohne zu drängen?'],
  debatte: {
    frage: 'Wie viel Nähe verträgt Beratung?',
    für: 'Nähe', gegen: 'Abstand',
    pro: ['Ohne Vertrauen erzählt niemand das Wesentliche.', 'Menschen kommen wieder, wenn sie sich gesehen fühlen.', 'Nähe heißt nicht Freundschaft.'],
    con: ['Zu viel Nähe macht es schwer, Nein zu sagen.', 'Abstand schützt auch die eigene Gesundheit.', 'Klare Rollen helfen beiden Seiten.']
  },
  sprechen: ['Beginne ein Gespräch und lass die andere Person zuerst erzählen.', 'Fass zusammen, was du gehört hast — in eigenen Worten.', 'Schlagt gemeinsam einen nächsten Schritt vor.'],
  neunzig: 'Erzähle, wer dir geholfen hat, als du neu warst.'
},

/* ---------- Felder, die vorher gar kein Material hatten ---------- */
'polizei': {
  titel: ['Polizei &', 'Sicherheit'],
  ziel: 'Eine Anzeige machen, etwas beschreiben, bei einer Kontrolle ruhig bleiben.',
  fragen: ['Was passiert auf dem Bild gerade?', 'Welche Nummer wählst du bei Gefahr?', 'Was sagst du, wenn dir etwas gestohlen wurde?'],
  debatte: {
    frage: 'Mehr Kameras auf öffentlichen Plätzen?',
    für: 'Mehr Kameras', gegen: 'Weniger Kameras',
    pro: ['Taten lassen sich hinterher aufklären.', 'Viele fühlen sich abends sicherer.', 'An Bahnhöfen hat es nachweislich geholfen.'],
    con: ['Beobachtet werden vor allem Unschuldige.', 'Wer filmt, verhindert die Tat nicht.', 'Die Aufnahmen landen irgendwo, und niemand weiß wo.']
  },
  sprechen: ['Melde einen Diebstahl: was, wo, wann, wie sah die Person aus?', 'Beschreibe eine Person in fünf Sätzen — ohne zu bewerten.', 'Bei einer Kontrolle wirst du nach dem Ausweis gefragt. Antworte höflich.'],
  neunzig: 'Erzähle, wie sicher du dich hier fühlst — und warum.'
},
'bau': {
  titel: ['Auf dem', 'Bau'],
  ziel: 'Anweisungen verstehen, Gefahren ansprechen, den Stand der Arbeit melden.',
  fragen: ['Was macht die Person auf dem Bild?', 'Was gehört auf jeder Baustelle zur Sicherheit?', 'Wie sagst du, dass etwas gefährlich ist?'],
  debatte: {
    frage: 'Muss man auf dem Bau laut werden, damit es läuft?',
    für: 'Laut ist nötig', gegen: 'Ruhig geht besser',
    pro: ['Neben der Maschine hört man sonst nichts.', 'Bei Gefahr muss es sofort ankommen.', 'Ein kurzer Ruf ist schneller als eine Erklärung.'],
    con: ['Wer angeschrien wird, fragt nicht mehr nach.', 'Missverständnisse kosten mehr als eine Minute Erklärung.', 'Absprachen am Morgen sparen das Rufen am Nachmittag.']
  },
  sprechen: ['Erklär einem neuen Kollegen den Weg über die Baustelle — mit den Gefahrenstellen.', 'Melde deinem Bauleiter, dass Material fehlt.', 'Sag höflich, dass du eine Arbeit ohne Sicherung nicht machst.'],
  neunzig: 'Erzähle von einer Arbeit, auf die du stolz bist.'
},
'elektro-shk': {
  titel: ['Elektro &', 'SHK'],
  ziel: 'Eine Störung aufnehmen, dem Kunden erklären, was zu tun ist, sicher arbeiten.',
  fragen: ['Woran arbeitet die Person auf dem Bild?', 'Was prüfst du, bevor du anfängst?', 'Wie erklärst du einem Kunden ein Problem ohne Fachwörter?'],
  debatte: {
    frage: 'Reparieren oder gleich austauschen?',
    für: 'Reparieren', gegen: 'Austauschen',
    pro: ['Ein Ersatzteil ist billiger als ein neues Gerät.', 'Es entsteht weniger Müll.', 'Die alte Anlage kennt man in- und auswendig.'],
    con: ['Neue Geräte verbrauchen deutlich weniger.', 'Bei alten Anlagen kommt bald das nächste Teil.', 'Für Ersatzteile gibt es oft keine Garantie mehr.']
  },
  sprechen: ['Nimm eine Störung auf: seit wann, wie oft, was hat der Kunde schon versucht?', 'Erklär, warum du heute nicht fertig wirst.', 'Sag, welches Ersatzteil du brauchst und wie lange es dauert.'],
  neunzig: 'Erzähle von einem Einsatz, der anders lief als geplant.'
},
'metall': {
  titel: ['Metall &', 'Werkstatt'],
  ziel: 'Maße und Zeichnungen besprechen, Fehler melden, sicher arbeiten.',
  fragen: ['Was liegt auf dem Bild auf der Werkbank?', 'Was schaust du dir auf einer Zeichnung zuerst an?', 'Was machst du, wenn ein Maß nicht stimmt?'],
  debatte: {
    frage: 'Lieber schnell arbeiten oder lieber genau?',
    für: 'Tempo', gegen: 'Genauigkeit',
    pro: ['Der Auftrag hat einen Termin.', 'Wer ewig misst, wird nie fertig.', 'Nicht jedes Teil braucht ein Zehntel.'],
    con: ['Nacharbeit kostet doppelt so viel Zeit.', 'Ein falsches Maß fällt erst beim Kunden auf.', 'Sicherheitsteile verzeihen keinen Fehler.']
  },
  sprechen: ['Erklär einem Kollegen ein Teil nach der Zeichnung.', 'Melde, dass ein Maß außerhalb der Toleranz liegt.', 'Sag, welches Werkzeug du brauchst und warum.'],
  neunzig: 'Erzähle, wie du zu deinem Beruf gekommen bist.'
},
'reinigung': {
  titel: ['Reinigung —', 'Plan & Übergabe'],
  ziel: 'Den Plan verstehen, eine Beschwerde annehmen, die Schicht sauber übergeben.',
  fragen: ['Was hat die Person auf dem Bild dabei?', 'Was machst du zuerst, wenn du einen Raum betrittst?', 'Was sagst du, wenn etwas fehlt?'],
  debatte: {
    frage: 'Reinigung tagsüber oder nach Feierabend?',
    für: 'Tagsüber', gegen: 'Nach Feierabend',
    pro: ['Fragen lassen sich sofort klären.', 'Man ist nicht allein im Haus.', 'Die Zeiten passen besser zur Familie.'],
    con: ['Niemand wird bei der Arbeit gestört.', 'Man kommt überall hinein, auch in Besprechungsräume.', 'Ohne Publikum geht es schneller.']
  },
  sprechen: ['Erklär, in welcher Reihenfolge du einen Raum machst.', 'Nimm eine Beschwerde an, ohne dich zu verteidigen.', 'Gib eine Übergabe: fertig, offen, kaputt.'],
  neunzig: 'Erzähle, was an deiner Arbeit die meisten Leute nicht sehen.'
},
'lager': {
  titel: ['Lager —', 'Ware & Versand'],
  ziel: 'Ware annehmen, kommissionieren, Abweichungen sofort melden.',
  fragen: ['Was steht auf dem Bild in den Regalen?', 'Was prüfst du beim Wareneingang?', 'Was machst du, wenn der Bestand nicht stimmt?'],
  debatte: {
    frage: 'Alles per Scanner oder auch auf Papier?',
    für: 'Scanner', gegen: 'Papier',
    pro: ['Der Bestand stimmt in Echtzeit.', 'Es gibt weniger Zahlendreher.', 'Jeder sieht sofort, wo die Ware steht.'],
    con: ['Fällt das System aus, steht alles.', 'Auf Papier schreibt man schnell etwas dazu.', 'Nicht jeder kommt mit dem Gerät zurecht.']
  },
  sprechen: ['Melde eine Teillieferung: was kam, was fehlt.', 'Erklär einem neuen Kollegen das Kommissionieren in drei Schritten.', 'Sag, warum der Versand heute später rausgeht.'],
  neunzig: 'Erzähle, wie ein Tag in deinem Lager abläuft.'
},
'produktion': {
  titel: ['Produktion —', 'Linie & Qualität'],
  ziel: 'Störungen melden, Stückzahlen besprechen, die Schicht übergeben.',
  fragen: ['Was macht die Person auf dem Bild an der Anlage?', 'Was tust du zuerst, wenn die Maschine steht?', 'Wie meldest du einen Qualitätsfehler?'],
  debatte: {
    frage: 'Zählt am Ende Stückzahl oder Qualität?',
    für: 'Stückzahl', gegen: 'Qualität',
    pro: ['Ohne Menge trägt sich die Linie nicht.', 'Kunden bestellen Termine, keine Absichten.', 'Wer zu langsam ist, verliert den Auftrag.'],
    con: ['Ausschuss kostet Material und Zeit doppelt.', 'Eine Reklamation kostet mehr als eine Stunde Stillstand.', 'Den guten Ruf verliert man nur einmal.']
  },
  sprechen: ['Melde einen Stillstand: seit wann, was ist passiert, wer ist informiert?', 'Erklär einem Kollegen das Rüsten in vier Schritten.', 'Gib die Schichtübergabe: Stückzahl, Störungen, offene Punkte.'],
  neunzig: 'Erzähle, was an deiner Schicht gut und was schwer ist.'
},
'ingenieur': {
  titel: ['Technik &', 'Planung'],
  ziel: 'Anforderungen klären, Änderungen begründen, eine Abnahme begleiten.',
  fragen: ['Was hält die Person auf dem Bild in der Hand?', 'Was klärst du am Anfang eines Projekts?', 'Wie begründest du eine Änderung?'],
  debatte: {
    frage: 'Lieber früh liefern oder lieber vollständig?',
    für: 'Früh liefern', gegen: 'Vollständig liefern',
    pro: ['Man sieht schnell, ob die Richtung stimmt.', 'Frühe Änderungen sind billig.', 'Der Kunde bleibt im Bild.'],
    con: ['Halbfertiges bleibt als „funktioniert nicht“ im Kopf.', 'Nachbessern kostet Vertrauen.', 'Jede Zwischenlieferung bindet Zeit.']
  },
  sprechen: ['Erklär eine Anforderung so, dass die Werkstatt sie umsetzen kann.', 'Begründe, warum ein Termin nicht zu halten ist.', 'Führe durch eine Abnahme: was passt, was ist offen, wie geht es weiter.'],
  neunzig: 'Erzähle von einem Projekt, das dich weitergebracht hat.'
},

/* ---------- Ankommen, Kurs, Medien ---------- */
'ankommen': {
  titel: ['Ankommen in', 'Deutschland'],
  ziel: 'Anmelden, Termine bekommen, Briefe verstehen — und wissen, wer hilft.',
  fragen: ['Was macht die Person auf dem Bild gerade?', 'Was musstest du in den ersten Wochen erledigen?', 'Wo hast du Hilfe gefunden, als du etwas nicht verstanden hast?'],
  debatte: {
    frage: 'Sollte man Ämter auf Englisch bedienen dürfen?',
    für: 'Ja, auf Englisch', gegen: 'Nein, auf Deutsch',
    pro: ['Wichtige Fristen verpasst niemand mehr aus Sprachgründen.', 'Die Beratung wird schneller und billiger.', 'Wer arbeitet, hat oft keine Zeit für einen Kurs vorher.'],
    con: ['Deutsch lernt man am schnellsten, wenn man es braucht.', 'Rechtlich zählt am Ende der deutsche Text.', 'Für einfache Sprache braucht es kein Englisch.']
  },
  sprechen: ['Erklär jemandem, der neu ist, die ersten drei Behördengänge.', 'Ruf an und frag nach einem Termin — nenne Grund, Name und Erreichbarkeit.', 'Beschreibe einen Brief, den du nicht verstanden hast, und was du dann getan hast.'],
  neunzig: 'Erzähle von deiner ersten Woche in Deutschland.'
},
'sprachkurs': {
  titel: ['Im', 'Deutschkurs'],
  ziel: 'Nachfragen, ohne sich zu schämen — und nachholen, was du verpasst hast.',
  fragen: ['Was passiert auf dem Bild im Kurs?', 'Was machst du, wenn du etwas nicht verstanden hast?', 'Wie übst du zu Hause?'],
  debatte: {
    frage: 'Im Kurs nur Deutsch — oder darf die Muttersprache helfen?',
    für: 'Nur Deutsch', gegen: 'Muttersprache erlaubt',
    pro: ['Man gewöhnt sich schneller ans Zuhören.', 'Alle im Raum verstehen dasselbe.', 'Man traut sich früher zu sprechen.'],
    con: ['Eine Erklärung in der Muttersprache spart zehn Minuten Rätseln.', 'Wer nichts versteht, schaltet ab.', 'Grammatik versteht man einmal richtig — dann nie wieder.']
  },
  sprechen: ['Frag nach einer Erklärung: sag genau, was unklar ist, nicht nur „alles".', 'Erklär einer Mitschülerin eine Regel mit einem eigenen Beispiel.', 'Melde dich für zwei Tage ab und sag, wie du den Stoff nachholst.'],
  neunzig: 'Erzähle, wie du am besten lernst — und was gar nicht funktioniert.'
},
'weiterbildung': {
  titel: ['Weiterbildung &', 'Anerkennung'],
  ziel: 'Sagen, was du kannst, und herausfinden, was dafür hier gilt.',
  fragen: ['Worüber sprechen die beiden auf dem Bild?', 'Welchen Abschluss hast du — und zählt er hier?', 'Was wäre dein nächster Schritt im Beruf?'],
  debatte: {
    frage: 'Erst arbeiten oder erst die Sprache?',
    für: 'Erst arbeiten', gegen: 'Erst die Sprache',
    pro: ['Im Betrieb lernt man die Sprache, die man wirklich braucht.', 'Man verdient Geld und wartet nicht.', 'Kontakte entstehen bei der Arbeit, nicht im Kursraum.'],
    con: ['Ohne B2 bleibt der Beruf verschlossen, den man gelernt hat.', 'Ein Kurs geht später nur noch abends.', 'Wer unter seinem Niveau arbeitet, bleibt oft dort.']
  },
  sprechen: ['Stell dich in einer Minute vor: Abschluss, Erfahrung, Ziel.', 'Frag in einer Beratung nach: Antrag, Dauer, Kosten, nächster Schritt.', 'Ruf an und frag nach einem Praktikumsplatz.'],
  neunzig: 'Erzähle von deinem Beruf und was du daran magst.'
},
'telefonieren': {
  titel: ['Am', 'Telefon'],
  ziel: 'Sich melden, nachfragen, buchstabieren — und das Gespräch klar beenden.',
  fragen: ['Was macht die Person auf dem Bild?', 'Was ist am Telefon schwerer als von Angesicht zu Angesicht?', 'Welchen Satz brauchst du, wenn du etwas nicht verstanden hast?'],
  debatte: {
    frage: 'Anrufen oder lieber schreiben?',
    für: 'Anrufen', gegen: 'Schreiben',
    pro: ['In zwei Minuten ist geklärt, was per Mail drei Tage dauert.', 'Man hört sofort, ob der andere einen verstanden hat.', 'Für die Sprache ist jedes Telefonat ein Training.'],
    con: ['Beim Schreiben hat man Zeit für die richtigen Wörter.', 'Man hat es später schwarz auf weiß.', 'Niemand muss sich für seinen Akzent schämen.']
  },
  sprechen: ['Ruf in einer Praxis an und mach einen Termin — mit Buchstabieren.', 'Nimm eine Nachricht auf und wiederhole sie zur Sicherheit.', 'Sprich auf eine Mailbox: Name, Grund, Nummer, wann du erreichbar bist.'],
  neunzig: 'Erzähle von einem Telefonat, das schiefgegangen ist.'
},
'medien': {
  titel: ['Nachrichten,', 'Werbung & Netz'],
  ziel: 'Verstehen, was gemeint ist — und merken, wenn dich jemand hereinlegen will.',
  fragen: ['Was sieht die Person auf dem Bild auf ihrem Bildschirm?', 'Woher bekommst du deine Nachrichten?', 'Wie erkennst du, ob eine Nachricht stimmt?'],
  debatte: {
    frage: 'Nachrichten auf Deutsch oder in der Muttersprache?',
    für: 'Auf Deutsch', gegen: 'In der Muttersprache',
    pro: ['Man lernt jeden Tag Wörter, die hier zählen.', 'Man erfährt, worüber die Kollegen morgen reden.', 'Nachrichten in einfacher Sprache gibt es kostenlos.'],
    con: ['Man versteht Hintergründe wirklich, nicht nur die Hälfte.', 'Nach der Arbeit ist der Kopf müde.', 'Fehlende Details führen zu falschen Schlüssen.']
  },
  sprechen: ['Erzähl eine Nachricht von heute in drei Sätzen nach.', 'Erklär jemandem, woran man eine Betrugsmail erkennt.', 'Kündige ein Abo am Telefon — freundlich, aber bestimmt.'],
  neunzig: 'Erzähle, was du im Netz gern liest oder schaust.'
}
};
