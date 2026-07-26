/* ============================================================
   deutschoderwas club — Deutsch für den Beruf
   20 Berufsfelder mit dem Sprachmaterial, das der Arbeitsalltag
   wirklich verlangt. Priorität nach der Anerkennungsstatistik
   2024, der BA-Engpassanalyse und dem Anteil Beschäftigter mit
   Einwanderungsgeschichte.

   Ein Berufsfeld:
     id          kurzer Name, wird in der Adresse benutzt
     t           Titel der Karte
     unter       die Teilberufe darunter
     lvl         das tatsächlich verlangte Sprachniveau
     pruef       die Fachsprachprüfung oder das einschlägige Zertifikat
     warum       warum dieses Feld wichtig ist, mit den echten Zahlen
     handlungen  die echten Sprachhandlungen des Berufsalltags
                 {t, e, lvl}
     chunks      Fachwortschatz als Wendungen, nie als Einzelwörter
                 {de, hi, bsp}
     dialoge     Gespräche aus dem Berufsalltag, Aufbau wie dialoge.js
                 {id, titel, lvl, dauer, ort, schritte:[{amanda,
                  hinweis, beispiel, redemittel}]}
     saetze      Sätze, die man auf der Arbeit hört und selbst braucht
                 {de, wann}
     ueb         Übungen, Typen wie in a1.js
     schreiben   ein echter Schreibauftrag aus dem Beruf
                 {auf, punkte, hilfe}

   Übungstypen:
     wahl        {typ,f,o,l,e}          Mehrfachwahl, l = Index
     luecke      {typ,f,l,e}            Lücke wird getippt
     bausteine   {typ,l,teile,e}        Satz aus Bausteinen bauen
     paare       {typ,p,e}              zuordnen
     hoeren      {typ,text,f,o,l,e}     text wird vorgelesen
     sprechen    {typ,f,l,e}            nachsprechen
     ordnen      {typ,l,f,e}            Reihenfolge herstellen
     artikel     {typ,w,l,e}            der/die/das

   Vier Befunde tragen den ganzen Bereich:
     1. Die Übergabe ist die universelle Sprachhandlung — sie
        kommt in mindestens zwölf der zwanzig Felder vor.
     2. Der Registerwechsel Fachsprache zu Laiensprache ist das
        eigentliche C-Niveau-Merkmal.
     3. Kritik, Fehler und Reklamation sind der härteste Kern
        und werden am seltensten unterrichtet.
     4. Sicherheitssprache hat eine eigene Grammatik:
        imperativischer Infinitiv, erweitertes Attribut,
        Modalverben der Verpflichtung im Passiv.
   ============================================================ */

window.BERUFE = [

  /* ===================== 1 · PFLEGE ===================== */
  {
    id:'pflege',
    t:'Pflege',
    unter:'Altenpflege, Krankenpflege, Kinderkrankenpflege, Pflegehilfe',
    lvl:'B1–B2',
    pruef:'telc Deutsch B1·B2 Pflege · Fachsprachprüfung B2 Pflege (60 Min., 3 x 20 Min.) · Goethe-Test PRO Pflege',
    warum:'41 Prozent aller Anerkennungen 2024 gingen an Pflegefachkräfte — 32.500 Bescheide, mehr als in jedem anderen Beruf. Über 46.000 Stellen sind unbesetzt. Für die Fachkraft verlangen die Länder B2, für die Pflegehilfe reicht meistens B1. Und immer mehr Länder prüfen nicht mehr allgemeines Deutsch, sondern Fachsprache am Fall.',
    handlungen:[
      {t:'Die Übergabe machen', e:'Am Schichtende in zwei Minuten sagen, was in den letzten acht Stunden passiert ist — Zimmer für Zimmer: Veränderung, Maßnahme, offener Punkt.', lvl:'B1'},
      {t:'Das Aufnahmegespräch führen', e:'Stammdaten, Gewohnheiten, Hilfsmittel, Allergien erfragen und gleichzeitig in das Formular eintragen.', lvl:'B2'},
      {t:'Schmerz genau erfragen', e:'Wo, wie, seit wann, wie stark auf einer Skala von null bis zehn, was macht es besser, was schlimmer.', lvl:'B1'},
      {t:'Ärztliche Anordnungen verstehen und rückversichern', e:'Die Anordnung wiederholen, bestätigen, bei Unklarheit gezielt nachfragen — auch am Telefon.', lvl:'B2'},
      {t:'Vitalzeichen dokumentieren', e:'Blutdruck, Puls, Temperatur, Sättigung knapp und sachlich in die Kurve und in die digitale Akte eintragen.', lvl:'B1'},
      {t:'Den Pflegebericht schreiben', e:'Freier Text zu Verlauf und Abweichung. Die schwerste Schreibaufgabe im Beruf — und die, die in der Prüfung drankommt.', lvl:'B2'},
      {t:'Angehörige informieren', e:'Ohne Fachwörter erklären, wie es der Bewohnerin geht, auf Sorgen eingehen und sagen, was du nicht sagen darfst.', lvl:'B2'},
      {t:'Zur Mobilisation anleiten und motivieren', e:'Handlung ansagen, Einverständnis einholen, Schritt für Schritt begleiten — und ruhig bleiben, wenn jemand nicht will.', lvl:'B1'},
      {t:'Eine Überleitung schreiben', e:'Verlegungsbericht an Klinik oder Heim, Kurzinfo an den Rettungsdienst.', lvl:'B2'},
      {t:'Im Notfall melden', e:'In dreißig Sekunden am Telefon alles sagen, was die Ärztin oder der Rettungsdienst braucht.', lvl:'B1'}
    ],
    chunks:[
      {de:'die Übergabe machen', hi:'am Schichtende der nächsten Schicht berichten', bsp:'Ich mache jetzt die Übergabe für Zimmer 12 bis 18.'},
      {de:'im Frühdienst sein', hi:'die Schicht ab etwa 6 Uhr — dazu Spätdienst und Nachtdienst', bsp:'Morgen bin ich im Frühdienst, ab 6 Uhr.'},
      {de:'die Vitalzeichen kontrollieren', hi:'Blutdruck, Puls, Temperatur, Atmung, Sättigung', bsp:'Ich kontrolliere jetzt bei Frau Klein die Vitalzeichen.'},
      {de:'den Blutdruck messen', hi:'Werte nennt man so: 130 zu 80', bsp:'Ich habe den Blutdruck gemessen: 130 zu 80.'},
      {de:'erhöhte Temperatur haben', hi:'fachlicher als „Fieber haben"', bsp:'Frau Klein hat seit heute Mittag erhöhte Temperatur.'},
      {de:'die Bedarfsmedikation geben', hi:'Medikament, das nur bei Bedarf gegeben wird', bsp:'Ich habe um 15 Uhr die Bedarfsmedikation gegeben.'},
      {de:'die Medikamente stellen', hi:'sie in den Dispenser einsortieren', bsp:'Die Medikamente für morgen sind schon gestellt.'},
      {de:'einen Dekubitus haben', hi:'Druckgeschwür, entsteht durch langes Liegen', bsp:'Am Steißbein zeigt sich ein Dekubitus Grad zwei.'},
      {de:'die Wunde ist gerötet', hi:'die sachliche Beschreibung, keine Bewertung', bsp:'Die Wunde ist gerötet, aber trocken.'},
      {de:'den Verband wechseln', hi:'auch: einen Verbandwechsel machen', bsp:'Der Verband wurde heute früh gewechselt.'},
      {de:'jemanden mobilisieren', hi:'aus dem Bett helfen, aufstehen und gehen lassen', bsp:'Herr Sauer wurde heute zweimal mobilisiert.'},
      {de:'in den Rollstuhl transferieren', hi:'vom Bett in den Rollstuhl setzen', bsp:'Wir transferieren sie zu zweit in den Rollstuhl.'},
      {de:'sturzgefährdet sein', hi:'ein hohes Risiko haben zu fallen', bsp:'Frau Bergmann ist sturzgefährdet, bitte engmaschig kontrollieren.'},
      {de:'das Sturzprotokoll ausfüllen', hi:'muss nach jedem Sturz geschrieben werden', bsp:'Nach dem Sturz habe ich das Sturzprotokoll ausgefüllt.'},
      {de:'die Grundpflege übernehmen', hi:'Waschen, Anziehen, Mundpflege, Toilettengang', bsp:'Die Grundpflege habe ich heute allein übernommen.'},
      {de:'die Einfuhr und Ausfuhr dokumentieren', hi:'wie viel getrunken und wie viel ausgeschieden wurde', bsp:'Bitte bei Herrn Lorenz Einfuhr und Ausfuhr dokumentieren.'},
      {de:'wenig getrunken haben', hi:'sehr häufiges Thema in der Übergabe', bsp:'Sie hat heute wenig getrunken, nur etwa 600 Milliliter.'},
      {de:'auf Station kommen', hi:'neu aufgenommen werden', bsp:'Um 14 Uhr ist eine neue Bewohnerin auf Station gekommen.'},
      {de:'die Pflegeanamnese erheben', hi:'im Aufnahmegespräch alles Wichtige erfragen', bsp:'Die Pflegeanamnese erhebe ich morgen mit der Tochter.'},
      {de:'orientiert sein zu Ort und Zeit', hi:'weiß, wo sie ist und welcher Tag ist', bsp:'Er ist zur Person orientiert, aber nicht zu Ort und Zeit.'},
      {de:'verwirrt wirken', hi:'vorsichtig formuliert, weil du beobachtest und nicht diagnostizierst', bsp:'Frau Klein wirkte am Abend verwirrt.'},
      {de:'die Anordnung rückversichern', hi:'die Anweisung wiederholen, damit nichts schiefgeht', bsp:'Ich wiederhole zur Sicherheit: zweimal täglich eine Tablette.'},
      {de:'die Visite begleiten', hi:'mit der Ärztin durch die Zimmer gehen', bsp:'Um 9 Uhr begleite ich die Visite.'},
      {de:'Rücksprache halten mit', hi:'noch einmal mit jemandem sprechen, bevor du handelst', bsp:'Ich halte kurz Rücksprache mit der Stationsleitung.'},
      {de:'den Pflegebericht schreiben', hi:'freier Text über Verlauf und Auffälligkeiten', bsp:'Den Pflegebericht schreibe ich vor der Übergabe.'},
      {de:'auffällig war, dass …', hi:'der Standardanfang im Bericht', bsp:'Auffällig war, dass sie das Essen abgelehnt hat.'},
      {de:'die Nahrung verweigern', hi:'nicht essen wollen — fachlich formuliert', bsp:'Sie hat das Mittagessen verweigert.'},
      {de:'zu beachten ist …', hi:'so kündigst du an, was die nächste Schicht wissen muss', bsp:'Zu beachten ist: bitte alle zwei Stunden umlagern.'},
      {de:'engmaschig kontrollieren', hi:'sehr oft nachschauen', bsp:'Bitte heute Nacht engmaschig kontrollieren.'},
      {de:'der Dienstplan hängt aus', hi:'der Plan, wer wann arbeitet', bsp:'Der Dienstplan für Juni hängt seit gestern aus.'},
      {de:'einen Dienst tauschen', hi:'mit einer Kollegin die Schicht wechseln', bsp:'Können wir am Samstag den Dienst tauschen?'},
      {de:'sich krankmelden', hi:'vor Schichtbeginn anrufen, das ist Pflicht', bsp:'Ich muss mich für morgen krankmelden.'},
      {de:'ein Angehörigengespräch führen', hi:'mit Tochter, Sohn oder Ehepartner sprechen', bsp:'Am Donnerstag führen wir ein Angehörigengespräch.'},
      {de:'das darf ich Ihnen leider nicht sagen', hi:'die Schweigepflicht freundlich benennen', bsp:'Das darf ich Ihnen leider nicht sagen, da müssen Sie mit der Ärztin sprechen.'},
      {de:'die Überleitung schreiben', hi:'Bericht, wenn jemand in die Klinik oder ins Heim verlegt wird', bsp:'Die Überleitung für die Klinik liegt fertig am Stützpunkt.'}
    ],
    dialoge:[
      {
        id:'pflege-uebergabe',
        titel:'Die Übergabe auf Station',
        lvl:'B1',
        dauer:'4 Min',
        ort:'Es ist 21 Uhr. Du übergibst an die Nachtschicht. Frau Klein in Zimmer 14 hatte heute Nachmittag Fieber und hat abends kaum getrunken.',
        schritte:[
          {amanda:'Hallo, wie war die Schicht? Fang mal mit Zimmer 14 an.', hinweis:'Sag, wer in Zimmer 14 liegt und was heute war.', beispiel:'In Zimmer 14 liegt Frau Klein. Sie hatte heute Nachmittag 38,7 Grad Fieber.', redemittel:['In Zimmer … liegt …','Sie hatte heute …','Auffällig war …']},
          {amanda:'Und was habt ihr gemacht?', hinweis:'Nenne die Maßnahme und die Uhrzeit.', beispiel:'Ich habe um 15 Uhr die Bedarfsmedikation gegeben und danach engmaschig kontrolliert.', redemittel:['Ich habe um … Uhr …','Danach habe ich …','Auf Anordnung von Dr. … habe ich …']},
          {amanda:'Hat das geholfen?', hinweis:'Sag den neuen Wert und wie sie jetzt wirkt.', beispiel:'Ja, um 19 Uhr waren es 37,4 Grad. Sie wirkt jetzt ruhiger, aber müde.', redemittel:['Um … Uhr waren es …','Sie wirkt …','Die Temperatur ist gesunken auf …']},
          {amanda:'Gibt es sonst noch etwas zu Frau Klein?', hinweis:'Trinkmenge nennen — das ist wichtig für die Nacht.', beispiel:'Sie hat heute wenig getrunken, nur etwa 600 Milliliter. Die Einfuhr wird dokumentiert.', redemittel:['Sie hat wenig getrunken, nur …','Bitte weiter dokumentieren …','Die Einfuhr liegt bei …']},
          {amanda:'Gut. Was soll ich heute Nacht besonders beachten?', hinweis:'Sag klar, was die Nachtschicht tun soll.', beispiel:'Zu beachten ist: bitte um 24 Uhr noch einmal Temperatur messen und ihr Trinken anbieten.', redemittel:['Zu beachten ist …','Bitte um … Uhr …','Falls die Temperatur wieder steigt, bitte …']}
        ]
      },
      {
        id:'pflege-schmerz',
        titel:'Schmerz erfragen',
        lvl:'B1',
        dauer:'4 Min',
        ort:'Herr Sauer, 78 Jahre, drückt seit dem Morgen die Hand auf den Bauch. Du willst wissen, was genau los ist, bevor du die Ärztin informierst.',
        schritte:[
          {amanda:'Ach, es tut so weh. Ganz schlimm ist das.', hinweis:'Frag zuerst, wo genau es wehtut.', beispiel:'Das tut mir leid, Herr Sauer. Können Sie mir zeigen, wo genau es wehtut?', redemittel:['Können Sie mir zeigen, wo …','Wo genau haben Sie Schmerzen?','Tut es hier weh?']},
          {amanda:'Hier, unten am Bauch. Seit heute früh.', hinweis:'Frag nach der Art des Schmerzes und gib ihm Wörter zur Auswahl.', beispiel:'Und wie sind die Schmerzen? Eher stechend, brennend oder dumpf?', redemittel:['Wie würden Sie den Schmerz beschreiben?','Eher stechend oder dumpf?','Zieht der Schmerz irgendwohin?']},
          {amanda:'So ein Ziehen ist das. Kommt und geht.', hinweis:'Frag nach der Stärke auf der Skala von null bis zehn.', beispiel:'Wenn null gar kein Schmerz ist und zehn der stärkste Schmerz — wo liegen Sie gerade?', redemittel:['Auf einer Skala von null bis zehn …','Wie stark ist es jetzt gerade?','Und wenn Sie liegen, wie stark ist es dann?']},
          {amanda:'Ich glaube, sechs. Wenn ich aufstehe, ist es schlimmer.', hinweis:'Fass zusammen und sag, was du jetzt tust.', beispiel:'Also ein ziehender Schmerz im Unterbauch, seit heute früh, Stärke sechs, beim Aufstehen stärker. Ich informiere sofort die Ärztin.', redemittel:['Also, wenn ich das richtig verstehe …','Ich fasse kurz zusammen …','Ich informiere die Ärztin und komme gleich zurück.']},
          {amanda:'Bekomme ich denn etwas dagegen?', hinweis:'Ehrlich bleiben — du darfst nichts versprechen.', beispiel:'Das entscheidet die Ärztin. Ich frage sofort nach und sage Ihnen in wenigen Minuten Bescheid.', redemittel:['Das entscheidet die Ärztin.','Ich frage nach und sage Ihnen Bescheid.','Ich lasse Sie damit nicht allein.']}
        ]
      },
      {
        id:'pflege-angehoerige',
        titel:'Das Gespräch mit der Tochter',
        lvl:'B2',
        dauer:'5 Min',
        ort:'Die Tochter von Frau Bergmann steht am Stützpunkt. Ihre Mutter ist gestern gestürzt, ohne Verletzung. Die Tochter ist aufgebracht.',
        schritte:[
          {amanda:'Meine Mutter ist gestürzt und niemand hat mich angerufen! Wie kann das passieren?', hinweis:'Erst die Emotion aufnehmen, dann sachlich werden.', beispiel:'Ich verstehe, dass Sie erschrocken sind. Ihre Mutter ist gestern gegen 17 Uhr im Bad gestürzt.', redemittel:['Ich verstehe, dass Sie …','Lassen Sie mich kurz erklären, was passiert ist.','Ihre Mutter ist gestern gegen … Uhr …']},
          {amanda:'Und? Ist sie verletzt?', hinweis:'Sag den Befund in Alltagssprache, ohne Fachwörter.', beispiel:'Nein, sie hat sich nichts gebrochen. Die Ärztin hat sie untersucht, sie hat nur einen blauen Fleck an der Hüfte.', redemittel:['Sie hat sich nichts gebrochen.','Die Ärztin hat sie untersucht.','Es geht ihr den Umständen entsprechend gut.']},
          {amanda:'Und was tun Sie jetzt, damit das nicht wieder passiert?', hinweis:'Nenne konkrete Maßnahmen.', beispiel:'Wir haben ein Sturzprotokoll geschrieben, eine Sensormatte gelegt und schauen nachts stündlich nach ihr.', redemittel:['Wir haben … geschrieben.','Zusätzlich haben wir …','Ab sofort kontrollieren wir …']},
          {amanda:'Was hat der Arzt denn genau gesagt? Welche Medikamente bekommt sie?', hinweis:'Grenze ziehen, freundlich, aber klar.', beispiel:'Über die Medikamente darf ich Ihnen leider keine Auskunft geben. Da vereinbare ich gern einen Termin mit der Ärztin.', redemittel:['Darüber darf ich leider keine Auskunft geben.','Das müsste die Ärztin Ihnen sagen.','Ich vereinbare gern einen Termin für Sie.']},
          {amanda:'Na gut. Aber rufen Sie mich nächstes Mal bitte sofort an.', hinweis:'Zusagen, was du wirklich halten kannst.', beispiel:'Das notiere ich in der Akte: Anruf bei jedem Sturz, auch nachts. Danke, dass Sie es ansprechen.', redemittel:['Das notiere ich in der Akte.','Wir rufen Sie beim nächsten Mal sofort an.','Danke, dass Sie das ansprechen.']}
        ]
      }
    ],
    saetze:[
      {de:'Können Sie das bitte wiederholen?', wann:'wenn du eine Anordnung nicht verstanden hast — immer besser als raten'},
      {de:'Ich wiederhole zur Sicherheit: …', wann:'wenn du eine Anordnung bestätigst, besonders am Telefon'},
      {de:'Das habe ich nicht ganz verstanden. Meinen Sie …?', wann:'wenn du eine Vermutung hast und sie prüfen willst'},
      {de:'Ich hole eben eine Kollegin dazu.', wann:'beim Transfer, beim Heben, bei Unsicherheit'},
      {de:'Darf ich Sie jetzt waschen?', wann:'vor jeder Handlung am Körper — Einverständnis einholen'},
      {de:'Ich helfe Ihnen beim Aufstehen. Auf drei.', wann:'beim Mobilisieren, damit ihr im selben Takt seid'},
      {de:'Haben Sie Schmerzen?', wann:'die wichtigste Frage der Schicht, mehrmals täglich'},
      {de:'Ich informiere sofort die Ärztin.', wann:'wenn sich der Zustand verschlechtert'},
      {de:'Ich sage Ihnen gleich Bescheid.', wann:'wenn du etwas erst klären musst — und dann wirklich zurückkommst'},
      {de:'Das darf ich Ihnen leider nicht sagen.', wann:'Schweigepflicht gegenüber Angehörigen und Besuch'},
      {de:'Können Sie kurz Rücksprache mit der Stationsleitung halten?', wann:'wenn eine Entscheidung über deiner Zuständigkeit liegt'},
      {de:'Mir ist etwas aufgefallen.', wann:'der beste Anfang, wenn du eine Beobachtung meldest'},
      {de:'Da ist mir ein Fehler passiert. Ich melde das.', wann:'Fehler früh melden schützt die Patientin und dich'},
      {de:'Ich bin heute für Zimmer 12 bis 18 zuständig.', wann:'zum Schichtbeginn gegenüber Bewohnern und Besuch'},
      {de:'Trinken Sie bitte noch einen Schluck für mich.', wann:'beim Motivieren — freundlich, nicht befehlend'}
    ],
    ueb:[
      {typ:'wahl', f:'Du übergibst an die Nachtschicht. Womit fängst du an?', o:['Mit deiner eigenen Müdigkeit','Mit Zimmernummer und Namen','Mit dem Dienstplan für morgen'], l:1, e:'Eine Übergabe ist immer geordnet: Zimmer, Name, dann was passiert ist. So findet sich die Kollegin sofort zurecht.'},
      {typ:'wahl', f:'Die Ärztin sagt am Telefon eine Anordnung durch. Was tust du?', o:['Du sagst „ja" und legst auf','Du wiederholst die Anordnung laut und lässt sie bestätigen','Du schreibst es später aus dem Gedächtnis auf'], l:1, e:'Telefonische Anordnungen wiederholst du immer wörtlich zurück. Das nennt man rückversichern und es verhindert die gefährlichsten Fehler.'},
      {typ:'wahl', f:'Welcher Satz gehört in den Pflegebericht?', o:['Frau Klein war heute wieder anstrengend.','Frau Klein hat das Mittagessen verweigert und wenig getrunken.','Frau Klein macht das mit Absicht.'], l:1, e:'Im Bericht beschreibst du, was du siehst — nicht, was du davon hältst. Beobachtung statt Bewertung.'},
      {typ:'luecke', f:'Ich ___ jetzt die Übergabe für Zimmer 12 bis 18.', l:'mache', e:'Man sagt: die Übergabe machen. Nicht „die Übergabe tun" oder „geben".'},
      {typ:'luecke', f:'Auffällig ___, dass sie das Essen abgelehnt hat.', l:'war', e:'Der Bericht steht in der Vergangenheit: Auffällig war, dass …'},
      {typ:'luecke', f:'Bitte heute Nacht ___ kontrollieren.', l:'engmaschig', e:'engmaschig heißt: sehr oft nachschauen. Das Wort steht in fast jeder Übergabe.'},
      {typ:'luecke', f:'Ich habe um 15 Uhr die ___ gegeben.', l:'Bedarfsmedikation', e:'Bedarfsmedikation ist das Medikament, das nur bei Bedarf gegeben wird — mit Uhrzeit dokumentieren.'},
      {typ:'luecke', f:'Auf einer ___ von null bis zehn — wie stark ist der Schmerz?', l:'Skala', e:'Die Schmerzskala von 0 bis 10 ist der Standard. Ohne Zahl ist die Angabe kaum verwertbar.'},
      {typ:'bausteine', l:'In Zimmer 14 liegt Frau Klein.', teile:['In','Zimmer','14','liegt','Frau','Klein'], e:'Der Ort steht vorn, dann das Verb, dann die Person. So beginnt jede Übergabe.'},
      {typ:'bausteine', l:'Sie hatte heute Nachmittag erhöhte Temperatur.', teile:['Sie','hatte','heute','Nachmittag','erhöhte','Temperatur'], e:'Zeitangabe vor der Sache: heute Nachmittag steht vor erhöhte Temperatur.'},
      {typ:'bausteine', l:'Zu beachten ist, dass sie wenig getrunken hat.', teile:['Zu','beachten','ist','dass','sie','wenig','getrunken','hat'], e:'Im Nebensatz mit dass steht das Verb ganz hinten: … getrunken hat.'},
      {typ:'paare', p:[['der Dekubitus','Druckgeschwür durch langes Liegen'],['die Mobilisation','aus dem Bett helfen, aufstehen, gehen'],['die Vitalzeichen','Blutdruck, Puls, Temperatur, Atmung'],['die Bedarfsmedikation','Medikament nur bei Bedarf'],['das Sturzprotokoll','Formular nach einem Sturz']], e:'Diese fünf Wörter hörst du in jeder Schicht. Lerne sie als Ganzes mit Artikel.'},
      {typ:'paare', p:[['stechend','wie ein Messer, kurz und spitz'],['dumpf','drückend, nicht genau zu orten'],['brennend','wie Feuer auf der Haut'],['ziehend','zieht in eine Richtung']], e:'Diese vier Wörter brauchst du, um Schmerz zu erfragen. Gib sie der Patientin zur Auswahl.'},
      {typ:'hoeren', text:'Zimmer 14, Frau Klein. Sie hatte heute Nachmittag 38,7 Grad. Ich habe die Bedarfsmedikation gegeben, um 19 Uhr waren es 37,4 Grad. Sie hat wenig getrunken, etwa 600 Milliliter.', f:'Wie hoch war die Temperatur um 19 Uhr?', o:['38,7 Grad','37,4 Grad','36,5 Grad'], l:1, e:'Achte in der Übergabe immer auf die Uhrzeit vor dem Wert. Der erste Wert war der Nachmittag, der zweite der Abend.'},
      {typ:'hoeren', text:'Bitte geben Sie Frau Bergmann zweimal täglich eine Tablette, morgens und abends, jeweils nach dem Essen.', f:'Wann soll die Tablette gegeben werden?', o:['dreimal täglich vor dem Essen','zweimal täglich nach dem Essen','einmal täglich morgens'], l:1, e:'Bei Anordnungen zählen drei Dinge: wie oft, wann, wie. Wiederhole sie zurück, bevor du auflegst.'},
      {typ:'sprechen', f:'Sag die Übergabe: In Zimmer 14 liegt Frau Klein. Sie hatte heute Nachmittag Fieber.', l:'In Zimmer 14 liegt Frau Klein', e:'Sprich ruhig und mach nach dem Namen eine kleine Pause. Dann kann die Kollegin mitschreiben.'},
      {typ:'sprechen', f:'Sag höflich: Darf ich Sie jetzt waschen?', l:'Darf ich Sie jetzt waschen', e:'Die Stimme geht am Satzende nach oben. Es ist eine Frage, keine Ansage — auch wenn es zum Ablauf gehört.'},
      {typ:'ordnen', l:['Ich stelle mich vor.','Ich frage, wo genau es wehtut.','Ich frage nach Art und Stärke des Schmerzes.','Ich fasse zusammen.','Ich informiere die Ärztin.'], f:'Bring das Schmerzgespräch in die richtige Reihenfolge.', e:'Erst der Kontakt, dann die Fragen, dann die Zusammenfassung. Die Zusammenfassung ist der Teil, den die meisten weglassen — und der Fehler verhindert.'},
      {typ:'artikel', w:'Übergabe', l:'die', e:'die Übergabe, Plural die Übergaben. Wörter auf -e sind sehr oft feminin.'},
      {typ:'artikel', w:'Dekubitus', l:'der', e:'der Dekubitus — lateinisch, männlich. Plural: die Dekubitus.'},
      {typ:'artikel', w:'Sturzprotokoll', l:'das', e:'das Protokoll, also auch das Sturzprotokoll. Das letzte Wort im Kompositum bestimmt den Artikel.'}
    ],
    schreiben:{
      auf:'Schreibe den Pflegebericht für Frau Klein, Zimmer 14, für den Spätdienst.',
      punkte:['Was war auffällig','Was hast du gemacht','Wie hat sie reagiert','Was ist für die nächste Schicht zu beachten'],
      hilfe:'Schreibe in der Vergangenheit und beschreibe, statt zu bewerten. Also nicht „sie war zickig", sondern „sie hat die Grundpflege abgelehnt". Fang die Punkte so an: „Auffällig war, dass …" · „Auf Anordnung von Dr. … habe ich …" · „Danach war sie …" · „Zu beachten ist …". Nenne immer Uhrzeit und Wert: 15 Uhr, 38,7 Grad, 600 Milliliter. Vier bis sechs Sätze reichen.'
    }
  },

  /* ===================== 2 · MEDIZIN UND ÄRZTINNEN ===================== */
  {
    id:'medizin',
    t:'Medizin und Ärztinnen',
    unter:'Ärztinnen und Ärzte, Zahnärztinnen und Zahnärzte, Therapie- und Assistenzberufe',
    lvl:'B2–C1',
    pruef:'Fachsprachprüfung der Landesärztekammer (60 Min., 3 Stationen à 20 Min., Bestehensgrenze 60 Prozent) · telc Deutsch B2·C1 Medizin',
    warum:'11.000 Anerkennungen 2024, das sind 14 Prozent und die zweitgrößte Gruppe nach der Pflege. In den BAMF-Spezialkurs „Akademische Heilberufe" traten 5.574 Menschen ein, im Jahr davor waren es 3.609. Verlangt wird allgemeinsprachliches B2 plus eine Fachsprachprüfung, die sich an C1 orientiert — so hat es die Gesundheitsministerkonferenz 2014 beschlossen. Bei den Therapie- und Assistenzberufen ist der Druck genauso hoch: 2.200 Anerkennungen in der Physiotherapie, 86 von 100 Punkten Engpassintensität, insgesamt 525.600 ausländische Beschäftigte in den Gesundheitsberufen.',
    handlungen:[
      {t:'Die Anamnese strukturiert erheben', e:'Hauptbeschwerde, Verlauf, Vorerkrankungen, Medikation, Allergien, Familie und Soziales abfragen — in einer Reihenfolge, die du nicht verlierst, auch wenn die Patientin abschweift.', lvl:'B2'},
      {t:'Das Aufklärungsgespräch führen', e:'Eingriff, Nutzen, Risiken und die Alternativen darstellen, Rückfragen zulassen und am Ende die Einwilligung dokumentieren.', lvl:'C1'},
      {t:'Den Patienten in der Visite vorstellen', e:'In zwei Minuten vor Ober- oder Chefarzt: Alter, Aufnahmegrund, Befunde, Verdachtsdiagnose, bisheriges Vorgehen, offene Frage.', lvl:'C1'},
      {t:'Arztbrief und Epikrise verfassen', e:'Anamnese, Befund, Diagnose, Therapie, Empfehlung — knapp, in der üblichen Reihenfolge und ohne einen Satz, den man zweimal lesen muss.', lvl:'C1'},
      {t:'Zwischen Fachsprache und Laiensprache wechseln', e:'Gegenüber Kollegen „Myokardinfarkt", gegenüber der Patientin „ein Gefäß am Herzen ist verstopft". Dieser Wechsel ist das eigentliche Prüfungsthema.', lvl:'C1'},
      {t:'Schwierige Nachrichten überbringen', e:'Eine ernste Diagnose mitteilen, Pausen aushalten, nichts beschönigen und trotzdem einen nächsten Schritt anbieten.', lvl:'C1'},
      {t:'Ein Konsil anfordern', e:'Telefonisch oder schriftlich eine andere Fachabteilung hinzuziehen und die Fragestellung so genau formulieren, dass eine Antwort möglich ist.', lvl:'C1'},
      {t:'Anordnungen an Pflege und MFA geben', e:'Wirkstoff, Dosis, Applikationsform, Zeitpunkt eindeutig nennen und dir die Anordnung zurücksagen lassen.', lvl:'B2'},
      {t:'Therapie sprachlich anleiten', e:'In der Physio- oder Ergotherapie eine Bewegung in Alltagssprache ansagen und die Ausführung korrigieren, ohne zu entmutigen.', lvl:'B2'},
      {t:'Im deutschen Gesundheitssystem navigieren', e:'Klinikhierarchie, Zuständigkeiten, Dokumentation, Heil- und Kostenplan — und rechtzeitig sagen, wenn etwas über deine Zuständigkeit hinausgeht.', lvl:'B2'}
    ],
    chunks:[
      {de:'die Anamnese erheben', hi:'die Vorgeschichte im Gespräch systematisch erfragen', bsp:'Ich erhebe zuerst die Anamnese, dann untersuche ich Sie.'},
      {de:'Was führt Sie zu uns?', hi:'die Standard-Eröffnungsfrage nach der Hauptbeschwerde', bsp:'Guten Tag, Herr Aydin. Was führt Sie heute zu uns?'},
      {de:'seit wann bestehen die Beschwerden', hi:'nach dem zeitlichen Verlauf fragen', bsp:'Seit wann bestehen die Beschwerden denn genau?'},
      {de:'der Schmerz strahlt aus in', hi:'der Schmerz wandert in eine andere Körperregion', bsp:'Der Schmerz strahlt in den linken Arm aus.'},
      {de:'Vorerkrankungen abfragen', hi:'was war früher schon, welche Operationen', bsp:'Sind bei Ihnen Vorerkrankungen bekannt, zum Beispiel Diabetes?'},
      {de:'die Dauermedikation erfragen', hi:'was nimmt die Patientin regelmäßig ein', bsp:'Welche Medikamente nehmen Sie dauerhaft ein?'},
      {de:'eine Allergie gegen etwas haben', hi:'immer vor jeder Gabe abfragen', bsp:'Haben Sie eine Allergie gegen Medikamente oder Pflaster?'},
      {de:'sich verschlechtert haben', hi:'der Zustand ist schlechter geworden', bsp:'Der Zustand hat sich über Nacht deutlich verschlechtert.'},
      {de:'einen Patienten stationär aufnehmen', hi:'im Krankenhaus behalten, nicht nach Hause schicken', bsp:'Wir nehmen Sie zur Beobachtung stationär auf.'},
      {de:'eine Verdachtsdiagnose stellen', hi:'die wahrscheinlichste Diagnose, noch nicht gesichert', bsp:'Die Verdachtsdiagnose lautet Lungenentzündung.'},
      {de:'eine Differenzialdiagnose erwägen', hi:'was könnte es sonst noch sein', bsp:'Differenzialdiagnostisch kommt auch eine Embolie in Betracht.'},
      {de:'Blut abnehmen und Labor bestimmen', hi:'die Standardmaßnahme bei fast jeder Aufnahme', bsp:'Wir nehmen Blut ab und bestimmen die Entzündungswerte.'},
      {de:'eine Bildgebung anordnen', hi:'Röntgen, Ultraschall, Computertomographie', bsp:'Ich ordne ein Röntgen des Thorax an.'},
      {de:'ich stelle Ihnen vor: Herr …, 62 Jahre', hi:'der feste Anfang jeder Patientenvorstellung', bsp:'Ich stelle Ihnen vor: Herr Aydin, 62 Jahre, aufgenommen über die Notaufnahme.'},
      {de:'aufgenommen wurde er wegen', hi:'der Aufnahmegrund in einem Halbsatz', bsp:'Aufgenommen wurde er wegen seit gestern bestehender Brustschmerzen.'},
      {de:'in der körperlichen Untersuchung zeigte sich', hi:'so leitest du den Befund ein', bsp:'In der körperlichen Untersuchung zeigte sich ein weiches Abdomen.'},
      {de:'unauffällig sein', hi:'ohne krankhaften Befund — das wichtigste Wort im Befundtext', bsp:'Der Neurostatus war unauffällig.'},
      {de:'ein Konsil anfordern', hi:'eine andere Fachabteilung um Beurteilung bitten', bsp:'Ich fordere ein kardiologisches Konsil an.'},
      {de:'die Fragestellung lautet', hi:'ohne Frage keine brauchbare Antwort vom Konsiliar', bsp:'Die Fragestellung lautet: Besteht eine Indikation zur Herzkatheteruntersuchung?'},
      {de:'Sie über den Eingriff aufklären', hi:'der juristisch verpflichtende Teil vor jeder Maßnahme', bsp:'Ich möchte Sie jetzt über den Eingriff aufklären.'},
      {de:'mögliche Komplikationen benennen', hi:'Risiken offen sagen, auch die seltenen', bsp:'Mögliche Komplikationen sind Blutung, Infektion und Nachblutung.'},
      {de:'eine alternative Behandlungsmöglichkeit darstellen', hi:'Pflicht — nicht nur der eine Weg', bsp:'Alternativ könnten wir zunächst rein medikamentös behandeln.'},
      {de:'die Einwilligung einholen', hi:'Unterschrift und Dokumentation, sonst gilt der Eingriff als Körperverletzung', bsp:'Wenn Sie einverstanden sind, hole ich Ihre Einwilligung schriftlich ein.'},
      {de:'in laienverständlicher Sprache erklären', hi:'der Registerwechsel, den die Fachsprachprüfung bewertet', bsp:'Ich erkläre es Ihnen in laienverständlicher Sprache.'},
      {de:'ein Gefäß am Herzen ist verstopft', hi:'so sagst du Myokardinfarkt der Patientin', bsp:'Bei Ihnen ist ein Gefäß am Herzen verstopft — wir nennen das Herzinfarkt.'},
      {de:'ich habe leider keine gute Nachricht', hi:'die Vorwarnung, bevor eine schwere Diagnose kommt', bsp:'Herr Weber, ich habe leider keine gute Nachricht für Sie.'},
      {de:'Möchten Sie, dass jemand dabei ist?', hi:'vor dem schwierigen Gespräch anbieten', bsp:'Möchten Sie, dass Ihre Tochter bei dem Gespräch dabei ist?'},
      {de:'dreimal täglich eine Tablette', hi:'so klingt eine saubere Anordnung', bsp:'Bitte dreimal täglich eine Tablette zu den Mahlzeiten.'},
      {de:'intravenös verabreichen', hi:'über die Vene — dazu: oral, subkutan, intramuskulär', bsp:'Das Antibiotikum wird zunächst intravenös verabreicht.'},
      {de:'nüchtern bleiben', hi:'nichts essen und trinken vor Eingriff oder Blutabnahme', bsp:'Bitte bleiben Sie ab Mitternacht nüchtern.'},
      {de:'zusammenfassend lässt sich sagen', hi:'der Einstieg in die Epikrise', bsp:'Zusammenfassend lässt sich sagen, dass sich der Verdacht bestätigt hat.'},
      {de:'wir empfehlen die Fortführung der Therapie', hi:'der Schlussteil des Arztbriefs', bsp:'Wir empfehlen die Fortführung der Therapie und eine Kontrolle in vier Wochen.'},
      {de:'wir entlassen Sie in Ihre ambulante Weiterbehandlung', hi:'die feste Formel am Briefende', bsp:'Wir entlassen Sie heute in Ihre ambulante Weiterbehandlung.'},
      {de:'den Heil- und Kostenplan erstellen', hi:'Zahnmedizin: was gemacht wird und was es kostet', bsp:'Ich erstelle Ihnen einen Heil- und Kostenplan für die Krone.'},
      {de:'auf dem Röntgenbild ist zu erkennen', hi:'Zahnmedizin: Bildbeschreibung, kommt in der Prüfung dran', bsp:'Auf dem Röntgenbild ist eine Aufhellung an der Wurzelspitze zu erkennen.'},
      {de:'Ziehen Sie die Fußspitze zur Nase', hi:'Therapieberufe: Bewegung in Alltagssprache ansagen', bsp:'Ziehen Sie die Fußspitze zur Nase und halten Sie kurz.'}
    ],
    dialoge:[
      {
        id:'medizin-anamnese',
        titel:'Die Anamnese in der Notaufnahme',
        lvl:'B2',
        dauer:'5 Min',
        ort:'Es ist 20 Uhr in der Notaufnahme. Herr Aydin, 62 Jahre, sitzt vor dir und hält die Hand auf die Brust. Du hast fünf Minuten, bevor das EKG geschrieben wird.',
        schritte:[
          {amanda:'Guten Abend, Herr Doktor. Mir ist heute so komisch geworden.', hinweis:'Begrüße ihn, stell dich vor und frag offen nach der Hauptbeschwerde.', beispiel:'Guten Abend, Herr Aydin. Mein Name ist Doktor Haddad, ich bin heute in der Notaufnahme. Was führt Sie zu uns?', redemittel:['Mein Name ist … , ich bin …','Was führt Sie zu uns?','Erzählen Sie mir bitte, was passiert ist.']},
          {amanda:'Hier, in der Brust. So ein Druck. Wie ein schwerer Stein.', hinweis:'Frag nach Zeitpunkt, Dauer und Ausstrahlung.', beispiel:'Seit wann besteht dieser Druck? Und strahlt er irgendwohin aus, zum Beispiel in den Arm oder in den Kiefer?', redemittel:['Seit wann besteht …?','Wie lange hält es an?','Strahlt der Schmerz irgendwohin aus?']},
          {amanda:'Seit heute Mittag. Und in den linken Arm zieht es auch.', hinweis:'Frag nach den auslösenden und lindernden Faktoren.', beispiel:'Wird es schlimmer, wenn Sie sich anstrengen? Und ist es in Ruhe besser geworden?', redemittel:['Wird es bei Belastung stärker?','Was macht es besser, was schlimmer?','Hatten Sie so etwas schon einmal?']},
          {amanda:'Beim Treppensteigen ist es ganz schlimm. Im Sitzen geht es.', hinweis:'Geh in die Vorgeschichte: Vorerkrankungen, Medikamente, Allergien.', beispiel:'Sind bei Ihnen Vorerkrankungen bekannt? Welche Medikamente nehmen Sie dauerhaft ein, und haben Sie Allergien?', redemittel:['Sind Vorerkrankungen bekannt?','Welche Medikamente nehmen Sie ein?','Haben Sie eine Allergie gegen Medikamente?']},
          {amanda:'Bluthochdruck habe ich. Tabletten nehme ich, den Namen weiß ich nicht. Allergien nicht.', hinweis:'Fass die Anamnese zusammen und sag, was jetzt konkret passiert.', beispiel:'Ich fasse zusammen: seit heute Mittag Druck in der Brust mit Ausstrahlung in den linken Arm, bei Belastung stärker, bekannter Bluthochdruck. Wir schreiben jetzt sofort ein EKG und nehmen Blut ab.', redemittel:['Ich fasse kurz zusammen …','Habe ich Sie richtig verstanden, dass …?','Als Nächstes machen wir …']}
        ]
      },
      {
        id:'medizin-visite',
        titel:'Die Patientenvorstellung in der Visite',
        lvl:'C1',
        dauer:'4 Min',
        ort:'Kurvenvisite um 8 Uhr. Die Oberärztin steht vor Zimmer 7 und schaut dich an. Du hast Herrn Aydin gestern Abend aufgenommen und musst ihn jetzt in zwei Minuten vorstellen.',
        schritte:[
          {amanda:'Zimmer 7, bitte. Wer liegt da?', hinweis:'Beginne mit der festen Formel: Name, Alter, Aufnahmegrund.', beispiel:'Ich stelle Ihnen vor: Herr Aydin, 62 Jahre, aufgenommen gestern Abend über die Notaufnahme wegen seit dem Mittag bestehender Thoraxschmerzen mit Ausstrahlung in den linken Arm.', redemittel:['Ich stelle Ihnen vor: Herr …, … Jahre','Aufgenommen wurde er wegen …','Vorstellung erfolgte über …']},
          {amanda:'Vorerkrankungen? Medikation?', hinweis:'Nenne die Vorgeschichte knapp und in fester Reihenfolge.', beispiel:'Bekannt sind eine arterielle Hypertonie und ein Nikotinabusus. Als Dauermedikation nimmt er einen Betablocker, den genauen Wirkstoff klären wir noch mit dem Hausarzt. Allergien sind nicht bekannt.', redemittel:['Bekannt sind …','Als Dauermedikation nimmt er …','Allergien sind nicht bekannt.']},
          {amanda:'Und die Befunde?', hinweis:'Untersuchung, Labor, Bildgebung — jeweils nur das Auffällige.', beispiel:'In der körperlichen Untersuchung war der Auskultationsbefund unauffällig. Im EKG zeigten sich Veränderungen in den Vorderwandableitungen, das Troponin war deutlich erhöht.', redemittel:['In der körperlichen Untersuchung zeigte sich …','Im Labor war … erhöht.','Der Befund war unauffällig bis auf …']},
          {amanda:'Ihre Einschätzung?', hinweis:'Verdachtsdiagnose nennen und begründen, Differenzialdiagnose anbieten.', beispiel:'Die Verdachtsdiagnose lautet akutes Koronarsyndrom. Differenzialdiagnostisch käme eine Lungenembolie in Betracht, dagegen spricht die belastungsabhängige Symptomatik.', redemittel:['Die Verdachtsdiagnose lautet …','Dafür spricht …','Differenzialdiagnostisch kommt … in Betracht.']},
          {amanda:'Wie ist das weitere Vorgehen?', hinweis:'Sag, was schon läuft, und stell deine offene Frage.', beispiel:'Er ist am Monitor, hat Acetylsalicylsäure und Heparin erhalten. Ich habe ein kardiologisches Konsil angefordert. Meine Frage wäre, ob wir ihn direkt in die Katheteruntersuchung anmelden.', redemittel:['Eingeleitet wurde bereits …','Ich habe ein Konsil angefordert.','Meine Frage wäre, ob …']}
        ]
      },
      {
        id:'medizin-aufklaerung',
        titel:'Das Aufklärungsgespräch',
        lvl:'C1',
        dauer:'5 Min',
        ort:'Frau Weber, 58 Jahre, soll morgen eine Magenspiegelung bekommen. Sie hat Angst vor dem Schlauch und will eigentlich lieber nach Hause. Du hast zehn Minuten und brauchst am Ende ihre Unterschrift.',
        schritte:[
          {amanda:'Muss das denn wirklich sein? Ich habe da furchtbare Angst vor.', hinweis:'Nimm die Angst ernst und erkläre in Laiensprache, worum es geht.', beispiel:'Ihre Angst kann ich gut verstehen. Bei der Magenspiegelung schauen wir mit einer sehr dünnen, biegsamen Kamera in den Magen, um die Ursache der Blutung zu finden.', redemittel:['Ihre Angst kann ich gut verstehen.','Ich erkläre es Ihnen in einfachen Worten.','Wir schauen mit einer kleinen Kamera …']},
          {amanda:'Und was habe ich davon?', hinweis:'Nenne den Nutzen konkret, ohne etwas zu versprechen.', beispiel:'Nur so sehen wir, woher die Blutung kommt. Wenn wir die Stelle finden, können wir sie oft im selben Vorgang direkt verschließen.', redemittel:['Der Vorteil ist, dass …','Nur so können wir …','In vielen Fällen können wir dabei gleich …']},
          {amanda:'Kann dabei auch etwas passieren?', hinweis:'Risiken offen benennen, von häufig zu selten.', beispiel:'Häufig sind Halsschmerzen und ein Druckgefühl danach. Selten kommt es zu einer Blutung, sehr selten zu einer Verletzung der Magenwand, die operiert werden müsste.', redemittel:['Häufig sind …','Selten kommt es zu …','Sehr selten, aber möglich ist …']},
          {amanda:'Gibt es denn nichts anderes?', hinweis:'Alternativen darstellen — das ist Pflicht, nicht Höflichkeit.', beispiel:'Wir könnten zunächst abwarten und nur die Blutwerte kontrollieren. Dann finden wir die Blutungsquelle aber nicht, und das Risiko einer erneuten Blutung bleibt.', redemittel:['Alternativ könnten wir …','Dagegen spricht, dass …','Wenn wir nichts tun, dann …']},
          {amanda:'Also gut. Was muss ich jetzt machen?', hinweis:'Nächste Schritte nennen, Rückfrage anbieten, Einwilligung einholen.', beispiel:'Bitte bleiben Sie ab Mitternacht nüchtern. Haben Sie noch Fragen? Wenn nicht, hole ich jetzt Ihre Einwilligung ein und wir unterschreiben beide.', redemittel:['Bitte bleiben Sie ab … nüchtern.','Haben Sie dazu noch Fragen?','Dann hole ich jetzt Ihre Einwilligung ein.']}
        ]
      }
    ],
    saetze:[
      {de:'Was führt Sie zu uns?', wann:'die erste Frage jeder Anamnese — offen, nicht mit Ja oder Nein zu beantworten'},
      {de:'Seit wann bestehen die Beschwerden?', wann:'immer direkt nach der Hauptbeschwerde'},
      {de:'Haben Sie eine Allergie gegen Medikamente?', wann:'vor jeder Verordnung, ohne Ausnahme'},
      {de:'Habe ich Sie richtig verstanden, dass …?', wann:'wenn du im Gespräch etwas absichern willst — auch prüfungsrelevant'},
      {de:'Ich erkläre es Ihnen in einfachen Worten.', wann:'der Übergang von der Fach- in die Laiensprache'},
      {de:'Ich stelle Ihnen vor: Herr …, 62 Jahre.', wann:'der feste Anfang der Patientenvorstellung in der Visite'},
      {de:'Die Verdachtsdiagnose lautet …', wann:'wenn du deine Einschätzung abgibst, aber noch nichts gesichert ist'},
      {de:'Ich fordere ein Konsil an. Die Fragestellung lautet …', wann:'am Telefon mit einer anderen Fachabteilung'},
      {de:'Bitte wiederholen Sie mir die Anordnung.', wann:'wenn du der Pflege etwas anordnest, besonders am Telefon'},
      {de:'Ich habe leider keine gute Nachricht für Sie.', wann:'als Vorwarnung, bevor du eine schwere Diagnose mitteilst'},
      {de:'Möchten Sie, dass jemand bei dem Gespräch dabei ist?', wann:'vor jedem schwierigen Gespräch anbieten'},
      {de:'Das kann ich Ihnen jetzt noch nicht sicher sagen.', wann:'wenn du ehrlich bleiben willst, statt zu beruhigen'},
      {de:'Ich hole dazu die Oberärztin.', wann:'wenn eine Entscheidung über deiner Zuständigkeit liegt — nie raten'},
      {de:'Bitte bleiben Sie ab Mitternacht nüchtern.', wann:'vor Eingriff, Narkose oder Blutabnahme'},
      {de:'Wir entlassen Sie in Ihre ambulante Weiterbehandlung.', wann:'im Entlassungsgespräch und am Ende des Arztbriefs'}
    ],
    ueb:[
      {typ:'wahl', f:'Du erklärst einer Patientin einen Herzinfarkt. Welcher Satz passt?', o:['Sie hatten einen Myokardinfarkt mit ST-Hebung.','Bei Ihnen ist ein Gefäß am Herzen verstopft, deshalb bekommt der Herzmuskel zu wenig Blut.','Der Troponinwert liegt deutlich über der Norm.'], l:1, e:'Gegenüber der Patientin sprichst du Transfersprache: Bild statt Fachwort. Genau dieser Registerwechsel wird in der Fachsprachprüfung bewertet.'},
      {typ:'wahl', f:'Womit beginnst du die Patientenvorstellung in der Visite?', o:['Mit deiner eigenen Einschätzung','Mit Name, Alter und Aufnahmegrund','Mit den Laborwerten'], l:1, e:'Die Reihenfolge ist fest: Name und Alter, Aufnahmegrund, Vorgeschichte, Befunde, Einschätzung, Vorgehen. Wer sie durcheinanderbringt, verliert die Zuhörer.'},
      {typ:'wahl', f:'Was gehört in jedes Aufklärungsgespräch, auch wenn niemand danach fragt?', o:['Die Kosten der Behandlung','Die alternativen Behandlungsmöglichkeiten','Der Name des Chefarztes'], l:1, e:'Nutzen, Risiken und Alternativen sind Pflicht. Fehlt die Alternative, ist die Aufklärung rechtlich unvollständig.'},
      {typ:'luecke', f:'Ich ___ zuerst die Anamnese, dann untersuche ich Sie.', l:'erhebe', e:'Man sagt: die Anamnese erheben. Nicht „machen" und nicht „nehmen".'},
      {typ:'luecke', f:'Der Schmerz ___ in den linken Arm aus.', l:'strahlt', e:'ausstrahlen ist trennbar: strahlt … aus. Die Frage dazu heißt: Strahlt der Schmerz irgendwohin aus?'},
      {typ:'luecke', f:'Die ___ lautet akutes Koronarsyndrom.', l:'Verdachtsdiagnose', e:'Solange nichts gesichert ist, sagst du Verdachtsdiagnose. Das schützt dich und ist fachlich korrekt.'},
      {typ:'luecke', f:'Ich fordere ein kardiologisches ___ an.', l:'Konsil', e:'das Konsil — die Beurteilung durch eine andere Fachabteilung. Immer mit einer klaren Fragestellung.'},
      {typ:'luecke', f:'Wenn Sie einverstanden sind, hole ich Ihre ___ ein.', l:'Einwilligung', e:'Ohne dokumentierte Einwilligung darf kein Eingriff stattfinden. Der feste Ausdruck ist: die Einwilligung einholen.'},
      {typ:'bausteine', l:'Seit wann bestehen die Beschwerden?', teile:['Seit','wann','bestehen','die','Beschwerden'], e:'Frageadverb vorn, dann das Verb, dann das Subjekt. So klingt jede Anamnesefrage.'},
      {typ:'bausteine', l:'In der körperlichen Untersuchung zeigte sich ein unauffälliger Befund.', teile:['In','der','körperlichen','Untersuchung','zeigte','sich','ein','unauffälliger','Befund'], e:'Die Ortsangabe steht vorn, das Verb an zweiter Stelle. Diese Wendung brauchst du in jeder Vorstellung.'},
      {typ:'bausteine', l:'Mögliche Komplikationen sind Blutung und Infektion.', teile:['Mögliche','Komplikationen','sind','Blutung','und','Infektion'], e:'Im Aufklärungsgespräch nennst du Risiken sachlich und ohne Verkleinerung.'},
      {typ:'paare', p:[['der Myokardinfarkt','ein Gefäß am Herzen ist verstopft'],['die Hypertonie','der Blutdruck ist dauerhaft zu hoch'],['die Dyspnoe','Sie bekommen schwer Luft'],['die Fraktur','der Knochen ist gebrochen'],['die Nausea','Ihnen ist übel']], e:'Links die Fachsprache für die Visite, rechts die Transfersprache für die Patientin. Lerne beide Seiten immer zusammen.'},
      {typ:'paare', p:[['die Anamnese','die Vorgeschichte im Gespräch erheben'],['die Epikrise','die zusammenfassende Beurteilung im Arztbrief'],['das Konsil','die Beurteilung durch eine andere Fachabteilung'],['die Indikation','der Grund, der eine Maßnahme rechtfertigt']], e:'Diese vier Wörter fallen jeden Tag auf Station. Ohne sie verstehst du keine Visite.'},
      {typ:'hoeren', text:'Herr Aydin, 62 Jahre, aufgenommen gestern Abend wegen Thoraxschmerz mit Ausstrahlung in den linken Arm. Bekannt sind eine arterielle Hypertonie und ein Nikotinabusus. Im EKG Veränderungen der Vorderwand, Troponin deutlich erhöht.', f:'Welche Vorerkrankung wird genannt?', o:['Diabetes mellitus','arterielle Hypertonie','Asthma bronchiale'], l:1, e:'In der Vorstellung kommt die Vorgeschichte immer nach dem Aufnahmegrund. Achte auf das Signalwort „bekannt sind".'},
      {typ:'hoeren', text:'Bitte geben Sie Herrn Aydin einmalig 5000 Einheiten Heparin intravenös und danach Acetylsalicylsäure 100 Milligramm oral.', f:'Wie soll das Heparin gegeben werden?', o:['oral','intravenös','subkutan'], l:1, e:'Bei jeder Anordnung zählen vier Dinge: Wirkstoff, Dosis, Applikationsform, Zeitpunkt. Lass sie dir zurücksagen.'},
      {typ:'sprechen', f:'Sag die Eröffnung der Anamnese: Guten Tag, mein Name ist Doktor Haddad. Was führt Sie zu uns?', l:'Guten Tag, mein Name ist', e:'Sprich langsam und mach nach dem Namen eine kleine Pause. Viele Patienten verstehen den Namen sonst nicht.'},
      {typ:'sprechen', f:'Sag in Laiensprache: Bei Ihnen ist ein Gefäß am Herzen verstopft.', l:'Bei Ihnen ist ein Gefäß am Herzen verstopft', e:'Kurze Sätze, ein Gedanke pro Satz, danach eine Pause. Die Pause ist der wichtigste Teil.'},
      {typ:'ordnen', l:['Name, Alter und Aufnahmegrund nennen','Vorerkrankungen und Medikation nennen','Untersuchungs- und Laborbefunde nennen','Verdachtsdiagnose und Differenzialdiagnose nennen','Bisheriges Vorgehen und offene Frage nennen'], f:'Bring die Patientenvorstellung in die richtige Reihenfolge.', e:'Diese Reihenfolge ist in ganz Deutschland gleich. Wenn du sie einmal automatisiert hast, kannst du jeden Fall vorstellen.'},
      {typ:'artikel', w:'Anamnese', l:'die', e:'die Anamnese, Plural die Anamnesen. Griechischer Ursprung, im Deutschen feminin.'},
      {typ:'artikel', w:'Konsil', l:'das', e:'das Konsil, Plural die Konsile. Merke: das Konsil anfordern.'},
      {typ:'artikel', w:'Befund', l:'der', e:'der Befund, Plural die Befunde. Ebenso: der Verlauf, der Eingriff — Verbstämme ohne Endung sind meist maskulin.'}
    ],
    schreiben:{
      auf:'Schreibe die Epikrise für Herrn Aydin, 62 Jahre, zur Entlassung nach behandeltem Herzinfarkt.',
      punkte:['Aufnahmegrund und Anamnese','Wesentliche Befunde','Diagnose und durchgeführte Therapie','Empfehlung für die Weiterbehandlung'],
      hilfe:'Schreibe im Wir-Stil und in der Vergangenheit: „Wir berichten über …", „Die Aufnahme erfolgte wegen …". Nenne nur, was für die Weiterbehandlung zählt — kein Nebenbefund ohne Folge. Der Schluss ist fest: „Zusammenfassend lässt sich sagen, dass …" · „Wir empfehlen die Fortführung der Therapie mit …" · „Wir entlassen den Patienten in Ihre ambulante Weiterbehandlung." Acht bis zwölf Sätze reichen. Keine Abkürzung, die die Hausärztin nicht kennt.'
    }
  },
  /* ===================== 3 · ERZIEHUNG UND KITA ===================== */
  {
    id:'erziehung',
    t:'Erziehung und Kita',
    unter:'Erzieherinnen, Kinderpflege, Frühpädagogik, Hort',
    lvl:'B2–C1',
    pruef:'Deutsch-Test für den Beruf B2·C1 · telc B2·C1 · Goethe-Zertifikat B2·C1',
    warum:'Rund 22.941 Erzieherinnen und Erzieher fehlen 2026 bundesweit, die Engpassintensität liegt bei 88 von 100 Punkten — Rang drei aller Berufe. Beim Sprachniveau ist dieses Feld das uneinheitlichste überhaupt: Berlin verlangt C1 für die Anerkennung und lässt den Einstieg mit B2 nur „mit Sprachauflage" zu, C1 muss dann binnen 18 Monaten nachgereicht werden. Bayern verlangt B2 und akzeptiert den Nachweis bis sechs Monate nach Arbeitsbeginn, Baden-Württemberg und Hessen legen gar kein Niveau fest. Die Orientierungstabelle der Bundesagentur ordnet Erzieherinnen wegen des Bildungsauftrags trotzdem C1 zu — plane also mit C1, auch wenn dein Land B2 sagt.',
    handlungen:[
      {t:'Die Bring- und Abholsituation gestalten', e:'In zwei Minuten an der Tür: Tagesinfo weitergeben, Elternfragen beantworten, Vollmachten klären, Auffälligkeiten taktvoll ansprechen.', lvl:'B2'},
      {t:'Das Entwicklungsgespräch führen', e:'Beobachtungen mit Beispielen belegen, Stärken zuerst nennen, Sorgen ansprechen und am Ende eine konkrete Vereinbarung treffen.', lvl:'C1'},
      {t:'Beobachtungen dokumentieren', e:'Im Entwicklungsbogen und im Portfolio beschreiben, was du gesehen hast — Datum, Situation, Verhalten. Beschreiben statt bewerten.', lvl:'C1'},
      {t:'Eine Bildungs- und Lerngeschichte schreiben', e:'Eine Alltagsszene so erzählen, dass das Kind sein Lernen darin wiederfindet und die Eltern es verstehen.', lvl:'C1'},
      {t:'Sprachlich mit Kindern arbeiten', e:'Vorlesen, reimen, singen, offene Fragen stellen und falsche Formen freundlich richtig wiederholen, ohne das Kind zu verbessern.', lvl:'B2'},
      {t:'Konflikte zwischen Kindern moderieren', e:'Beide Seiten anhören, die Perspektive des anderen sprachlich anbahnen und gemeinsam eine Lösung suchen, statt ein Urteil zu sprechen.', lvl:'B2'},
      {t:'Regeln und Grenzen setzen ohne Beschämung', e:'Klar sagen, was gilt, das Verhalten benennen und nicht das Kind — und die Regel begründen, statt sie zu wiederholen.', lvl:'B2'},
      {t:'Elternbrief und Aushang verfassen', e:'Freundlich, verbindlich und sprachlich so einfach, dass ihn auch Eltern mit wenig Deutsch verstehen.', lvl:'B2'},
      {t:'Im Team abstimmen', e:'Dienstübergabe, Teamsitzung, Fallbesprechung: einen Vorschlag machen, widersprechen, ohne zu verletzen, eine Absprache festhalten.', lvl:'C1'},
      {t:'Aufsichtspflicht und Unfall', e:'Nach einem Unfall die Eltern anrufen, die Unfallmeldung schreiben und die Meldung an Träger und Unfallkasse weitergeben.', lvl:'C1'}
    ],
    chunks:[
      {de:'ein Kind in die Gruppe aufnehmen', hi:'neu in die Kita, Beginn der Eingewöhnung', bsp:'Wir nehmen Mila nächste Woche in die Gruppe auf.'},
      {de:'die Eingewöhnung machen', hi:'die ersten Wochen, meist nach dem Berliner Modell', bsp:'Die Eingewöhnung dauert bei uns etwa vier Wochen.'},
      {de:'sich von der Mutter lösen', hi:'die zentrale Frage der Eingewöhnung', bsp:'Heute hat er sich nach fünf Minuten von der Mutter gelöst.'},
      {de:'im Morgenkreis sitzen', hi:'der gemeinsame Beginn des Kitatags', bsp:'Im Morgenkreis singen wir und besprechen den Tag.'},
      {de:'das Freispiel', hi:'die Zeit, in der die Kinder selbst wählen, was sie tun', bsp:'Im Freispiel hat sie fast eine Stunde am Bauteppich gebaut.'},
      {de:'in die Bauecke gehen', hi:'dazu: Puppenecke, Kuschelecke, Leseecke, Bauteppich', bsp:'Nach dem Frühstück geht er meistens direkt in die Bauecke.'},
      {de:'die Aufsichtspflicht haben', hi:'du bist verantwortlich, solange das Kind da ist', bsp:'Während der Übergabe hat noch die Frühdienstkraft die Aufsichtspflicht.'},
      {de:'eine Vollmacht hinterlegen', hi:'schriftlich, wer das Kind abholen darf', bsp:'Bitte hinterlegen Sie eine Vollmacht, wenn die Oma abholt.'},
      {de:'das Kind abholen dürfen', hi:'die häufigste Nachfrage an der Tür', bsp:'Darf Ihr Nachbar Ihr Kind heute abholen?'},
      {de:'eine Beobachtung dokumentieren', hi:'aufschreiben, was du gesehen hast — mit Datum', bsp:'Ich dokumentiere die Beobachtung noch heute im Bogen.'},
      {de:'beschreiben statt bewerten', hi:'die wichtigste Regel der Kita-Dokumentation', bsp:'Wir beschreiben, was das Kind tut, statt es zu bewerten.'},
      {de:'mir ist aufgefallen, dass …', hi:'der freundlichste Einstieg für eine Beobachtung', bsp:'Mir ist aufgefallen, dass Ali beim Essen oft aufsteht.'},
      {de:'das Portfolio führen', hi:'die Sammelmappe mit Bildern und Geschichten des Kindes', bsp:'Jedes Kind bei uns führt ein eigenes Portfolio.'},
      {de:'eine Bildungs- und Lerngeschichte schreiben', hi:'eine erzählte Beobachtung, direkt an das Kind gerichtet', bsp:'Für Mila schreibe ich diese Woche eine Bildungs- und Lerngeschichte.'},
      {de:'den Entwicklungsbogen ausfüllen', hi:'die strukturierte Vorlage vor dem Elterngespräch', bsp:'Vor dem Gespräch fülle ich den Entwicklungsbogen aus.'},
      {de:'einen Entwicklungsschritt machen', hi:'sichtbarer Fortschritt in einem Bereich', bsp:'In der Sprache hat sie einen großen Entwicklungsschritt gemacht.'},
      {de:'in der Feinmotorik sicherer werden', hi:'dazu: Grobmotorik, Sprache, Sozialverhalten, Selbständigkeit', bsp:'In der Feinmotorik ist er in den letzten Monaten deutlich sicherer geworden.'},
      {de:'sich gut in die Gruppe einfinden', hi:'freundliche Formel für gelungenes Ankommen', bsp:'Sie hat sich sehr gut in die Gruppe eingefunden.'},
      {de:'Kontakt zu anderen Kindern aufnehmen', hi:'Standardformulierung im Sozialverhalten', bsp:'Er nimmt von sich aus Kontakt zu anderen Kindern auf.'},
      {de:'einen Konflikt begleiten', hi:'dabei sein und moderieren, statt zu entscheiden', bsp:'Ich habe den Konflikt am Bauteppich begleitet.'},
      {de:'Wie hat sich Ali gefühlt, als …?', hi:'so bahnst du die Perspektivübernahme an', bsp:'Wie glaubst du, hat sich Ali gefühlt, als du ihm den Turm umgeworfen hast?'},
      {de:'sich abwechseln', hi:'die häufigste Lösung im Streit um Spielzeug', bsp:'Ihr könnt euch abwechseln: erst du, dann Mila.'},
      {de:'Bei uns ist es Regel, dass …', hi:'Regeln nennen, ohne das Kind zu beschämen', bsp:'Bei uns ist es Regel, dass wir im Flur langsam gehen.'},
      {de:'Stopp, das will ich nicht.', hi:'der Satz, den du den Kindern beibringst', bsp:'Sag deutlich: Stopp, das will ich nicht.'},
      {de:'zum Entwicklungsgespräch einladen', hi:'einmal im Jahr, schriftlich mit Terminvorschlag', bsp:'Wir laden Sie zum Entwicklungsgespräch am 14. Mai ein.'},
      {de:'einen Elternbrief verfassen', hi:'Information an alle Familien der Gruppe', bsp:'Zum Sommerfest verfasse ich noch einen Elternbrief.'},
      {de:'einen Aushang machen', hi:'der Zettel an der Gruppentür', bsp:'Ich mache einen Aushang wegen der Schließzeit.'},
      {de:'die Schließzeit', hi:'die Wochen, in denen die Kita zu ist', bsp:'Die Schließzeit ist vom 22. Juli bis zum 2. August.'},
      {de:'Wechselkleidung mitgeben', hi:'die Standardbitte an Eltern', bsp:'Bitte geben Sie Ihrem Kind Wechselkleidung mit.'},
      {de:'in der Teamsitzung besprechen', hi:'wöchentlich, mit Protokoll', bsp:'Das besprechen wir am Dienstag in der Teamsitzung.'},
      {de:'eine Fallbesprechung machen', hi:'ein Kind im Team gemeinsam anschauen', bsp:'Zu Ali machen wir nächste Woche eine Fallbesprechung.'},
      {de:'die Unfallmeldung schreiben', hi:'Pflicht nach jedem Unfall, geht an die Unfallkasse', bsp:'Nach dem Sturz habe ich sofort die Unfallmeldung geschrieben.'},
      {de:'sich eine Beule holen', hi:'die harmlose Verletzung, die du trotzdem meldest', bsp:'Sie hat sich beim Klettern eine Beule an der Stirn geholt.'},
      {de:'die Eltern telefonisch informieren', hi:'sofort, nicht erst beim Abholen', bsp:'Ich habe die Eltern telefonisch informiert, direkt nach dem Sturz.'},
      {de:'an die Frühförderstelle verweisen', hi:'wenn ein Kind zusätzliche Unterstützung braucht', bsp:'Wir würden Sie gern an die Frühförderstelle verweisen.'}
    ],
    dialoge:[
      {
        id:'erziehung-entwicklungsgespraech',
        titel:'Das Entwicklungsgespräch mit den Eltern',
        lvl:'C1',
        dauer:'5 Min',
        ort:'Es ist 16 Uhr, Personalraum. Vor dir sitzt Frau Öztürk, die Mutter von Ali, vier Jahre. Ali spricht in der Gruppe fast nichts, zu Hause aber viel. Der Entwicklungsbogen liegt zwischen euch.',
        schritte:[
          {amanda:'Guten Tag. Sagen Sie ehrlich, ist etwas mit Ali nicht in Ordnung?', hinweis:'Nimm die Sorge auf und beginne trotzdem mit den Stärken.', beispiel:'Schön, dass Sie da sind. Ich fange gern mit dem an, was gut läuft: Ali ist sehr ausdauernd, er baut manchmal eine halbe Stunde am Stück.', redemittel:['Schön, dass Sie sich Zeit genommen haben.','Ich fange mit dem an, was gut läuft.','Was mir besonders auffällt, ist …']},
          {amanda:'Ja, zu Hause baut er auch die ganze Zeit. Und sonst?', hinweis:'Bring deine Beobachtung mit einem konkreten Beispiel, ohne Urteil.', beispiel:'Mir ist aufgefallen, dass er in der Gruppe wenig spricht. Am Montag hat er zwanzig Minuten neben Mila gebaut und dabei kein Wort gesagt, obwohl er zugehört hat.', redemittel:['Mir ist aufgefallen, dass …','Ein Beispiel vom Montag: …','Ich beschreibe Ihnen, was ich beobachtet habe.']},
          {amanda:'Zu Hause redet er ohne Pause! Auf Türkisch und auf Deutsch.', hinweis:'Nimm die Information ernst und ordne sie fachlich ein, ohne zu diagnostizieren.', beispiel:'Das ist eine wichtige Information, danke. Das spricht dafür, dass die Sprache da ist und er sie in der Gruppe noch nicht einsetzt. Wie erlebt er den Morgen, wenn Sie ihn bringen?', redemittel:['Das ist eine wichtige Information.','Das spricht dafür, dass …','Wie erleben Sie das zu Hause?']},
          {amanda:'Morgens will er oft nicht. Er sagt, es ist so laut.', hinweis:'Verbinde beide Beobachtungen und schlage etwas Konkretes vor.', beispiel:'Dann passt das zusammen. Ich würde vorschlagen, dass er die ersten Wochen in der kleinen Leserunde dabei ist, da sind nur vier Kinder. Was halten Sie davon?', redemittel:['Dann passt das gut zusammen.','Ich würde vorschlagen, dass …','Was halten Sie davon?']},
          {amanda:'Das klingt gut. Und was kann ich zu Hause machen?', hinweis:'Gib eine kleine, machbare Vereinbarung und halte sie fest.', beispiel:'Erzählen Sie ihm abends in Ihrer Sprache von Ihrem Tag und lassen Sie ihn erzählen. Wir halten fest: kleine Leserunde ab Montag, in acht Wochen sprechen wir wieder. Ich notiere das im Protokoll.', redemittel:['Wir halten fest: …','In … Wochen schauen wir noch einmal.','Ich notiere das im Gesprächsprotokoll.']}
        ]
      },
      {
        id:'erziehung-abholen',
        titel:'An der Tür beim Abholen',
        lvl:'B2',
        dauer:'4 Min',
        ort:'Es ist 16.30 Uhr, Garderobe. Der Vater von Mila kommt zum Abholen. Mila ist heute vom Klettergerüst gefallen und hat eine Beule an der Stirn. Er sieht sie und wird sofort laut.',
        schritte:[
          {amanda:'Was ist denn mit ihrem Kopf passiert? Passt hier keiner auf?', hinweis:'Ruhig bleiben, zuerst sagen, was passiert ist — mit Uhrzeit.', beispiel:'Ich verstehe, dass Sie erschrocken sind. Mila ist heute gegen 11 Uhr im Garten vom Klettergerüst gerutscht und hat sich eine Beule an der Stirn geholt.', redemittel:['Ich verstehe, dass Sie erschrocken sind.','Heute gegen … Uhr ist …','Lassen Sie mich kurz erzählen, was passiert ist.']},
          {amanda:'Und warum ruft mich niemand an?', hinweis:'Sag ehrlich, was passiert ist, und entschuldige dich für das, was schiefgelaufen ist.', beispiel:'Wir haben um 11.15 Uhr auf Ihrem Handy angerufen und keine Verbindung bekommen. Wir hätten es danach noch einmal versuchen müssen, das tut mir leid.', redemittel:['Wir haben um … Uhr versucht, Sie zu erreichen.','Das hätten wir anders machen müssen.','Das tut mir leid.']},
          {amanda:'Und was haben Sie mit ihr gemacht?', hinweis:'Nenne die Maßnahmen der Reihe nach.', beispiel:'Wir haben sofort gekühlt, sie eine halbe Stunde beobachtet und die Unfallmeldung geschrieben. Sie war danach wieder im Freispiel und hat gegessen.', redemittel:['Wir haben sofort …','Danach haben wir …','Die Unfallmeldung habe ich geschrieben.']},
          {amanda:'Muss ich mit ihr zum Arzt?', hinweis:'Keine medizinische Auskunft geben, aber klar sagen, worauf zu achten ist.', beispiel:'Das kann ich nicht beurteilen, das entscheiden Sie oder die Kinderärztin. Wenn ihr übel wird, sie sehr müde ist oder erbricht, gehen Sie bitte heute noch hin.', redemittel:['Das kann ich nicht beurteilen.','Bitte achten Sie heute Abend darauf, ob …','Im Zweifel lieber einmal zu viel zur Ärztin.']},
          {amanda:'Gut. Aber nächstes Mal rufen Sie mich bitte an.', hinweis:'Zusagen, was du halten kannst, und die Nummer klären.', beispiel:'Das machen wir. Können wir noch eine zweite Nummer im Notfallbogen eintragen? Dann erreichen wir Sie sicher.', redemittel:['Das machen wir, versprochen.','Können wir eine zweite Nummer eintragen?','Danke, dass Sie es direkt ansprechen.']}
        ]
      },
      {
        id:'erziehung-konflikt',
        titel:'Streit am Bauteppich',
        lvl:'B2',
        dauer:'4 Min',
        ort:'Freispiel, kurz vor dem Aufräumen. Ali, vier Jahre, hat Milas Turm umgeworfen. Mila weint, Ali steht daneben und sagt nichts. Beide schauen dich an.',
        schritte:[
          {amanda:'Er hat meinen Turm kaputt gemacht! Der war so hoch!', hinweis:'Geh in die Hocke, beschreibe die Situation neutral und lass beide erzählen.', beispiel:'Ich sehe, der Turm liegt am Boden und du bist sehr traurig. Mila, erzähl du zuerst, dann ist Ali dran.', redemittel:['Ich sehe, dass …','Erzähl du zuerst, dann ist … dran.','Ich höre euch beiden zu.']},
          {amanda:'Ich habe ganz lange gebaut und dann kam er und hat geschubst!', hinweis:'Fasse zusammen, was du gehört hast, und gib das Wort weiter.', beispiel:'Also: Du hast lange gebaut, dann ist der Turm umgefallen, und du warst wütend. Ali, was ist aus deiner Sicht passiert?', redemittel:['Habe ich das richtig verstanden: …','Und du, Ali — was ist aus deiner Sicht passiert?','Erzähl mal, wie war das für dich.']},
          {amanda:'Ich wollte auch bauen. Sie hat alle Steine.', hinweis:'Nimm sein Motiv ernst und bahne die Perspektive des anderen an.', beispiel:'Du wolltest auch bauen und hattest keine Steine mehr. Was glaubst du, wie hat sich Mila gefühlt, als ihr Turm umgefallen ist?', redemittel:['Du wolltest also …','Wie hat sich … gefühlt, als …?','Schau mal, wie Mila jetzt guckt.']},
          {amanda:'Traurig. Aber sie gibt mir nie was ab.', hinweis:'Benenne das Verhalten, nicht das Kind, und nenne die Regel.', beispiel:'Umwerfen tut weh, das machen wir hier nicht. Bei uns ist es Regel, dass wir fragen, bevor wir etwas nehmen. Wie könnt ihr die Steine aufteilen?', redemittel:['Das machen wir hier nicht.','Bei uns ist es Regel, dass …','Was ist eure Idee, wie es weitergeht?']},
          {amanda:'Er kann die roten haben. Aber nur die roten.', hinweis:'Die Lösung der Kinder annehmen und sichtbar festhalten.', beispiel:'Das ist ein guter Vorschlag: Ali baut mit den roten Steinen, Mila mit den blauen. Und morgen früh baut ihr den Turm zusammen neu, wenn ihr wollt.', redemittel:['Das ist ein guter Vorschlag.','Dann machen wir es so: …','Wollt ihr euch die Hand geben?']}
        ]
      }
    ],
    saetze:[
      {de:'Mir ist aufgefallen, dass …', wann:'wenn du eine Beobachtung ansprichst — nie mit „Ihr Kind ist …" anfangen'},
      {de:'Ich beschreibe Ihnen, was ich beobachtet habe.', wann:'im Entwicklungsgespräch, bevor du auf ein Thema kommst'},
      {de:'Ein Beispiel vom Montag: …', wann:'jede Beobachtung braucht eine Szene, sonst klingt sie nach Meinung'},
      {de:'Wie erleben Sie das zu Hause?', wann:'wenn du die Eltern zu Fachleuten für ihr Kind machst'},
      {de:'Wir halten fest: …', wann:'am Ende jedes Elterngesprächs, für das Protokoll'},
      {de:'Bei uns ist es Regel, dass …', wann:'wenn du eine Grenze setzt, ohne das Kind schlecht zu machen'},
      {de:'Das machen wir hier nicht.', wann:'kurz und klar zum Verhalten, nicht zum Kind'},
      {de:'Wie hat sich Ali gefühlt, als …?', wann:'im Konflikt, um Perspektivübernahme anzubahnen'},
      {de:'Ihr könnt euch abwechseln: erst du, dann sie.', wann:'die praktischste Lösung im Streit um Spielzeug'},
      {de:'Bitte hinterlegen Sie dafür eine Vollmacht.', wann:'wenn jemand Neues das Kind abholen will'},
      {de:'Das kann ich nicht beurteilen, da müssten Sie zur Kinderärztin.', wann:'wenn Eltern eine medizinische Einschätzung von dir wollen'},
      {de:'Ich habe die Eltern telefonisch informiert.', wann:'nach jedem Unfall — und dann auch dokumentieren'},
      {de:'Ich gebe das in der Teamsitzung weiter.', wann:'wenn eine Entscheidung nicht bei dir allein liegt'},
      {de:'Da bin ich anderer Meinung, und zwar deshalb: …', wann:'im Team widersprechen, ohne die Kollegin anzugreifen'},
      {de:'Wir würden Sie gern an die Frühförderstelle verweisen.', wann:'wenn ein Kind mehr Unterstützung braucht als die Kita leisten kann'}
    ],
    ueb:[
      {typ:'wahl', f:'Welcher Satz gehört in den Entwicklungsbogen?', o:['Ali ist ein schüchternes Kind.','Ali hat am Montag zwanzig Minuten neben Mila gebaut und dabei nicht gesprochen.','Ali sollte mehr aus sich herausgehen.'], l:1, e:'Beschreiben statt bewerten: Datum, Situation, beobachtbares Verhalten. Alles andere ist deine Meinung, nicht deine Beobachtung.'},
      {typ:'wahl', f:'Womit beginnst du ein Entwicklungsgespräch?', o:['Mit dem Problem, damit es erledigt ist','Mit den Stärken und einem konkreten Beispiel','Mit der Frage, ob die Eltern zu Hause genug Deutsch sprechen'], l:1, e:'Erst die Stärken, dann das Anliegen. Eltern hören nur zu, wenn sie merken, dass du ihr Kind magst.'},
      {typ:'wahl', f:'Ein Kind hat ein anderes geschubst. Was sagst du?', o:['Du bist aber böse heute.','Schubsen tut weh, das machen wir hier nicht.','Wenn du das noch einmal machst, darfst du nicht mehr in den Garten.'], l:1, e:'Benenne das Verhalten, nicht das Kind. „Du bist böse" beschämt, „Schubsen tut weh" erklärt.'},
      {typ:'luecke', f:'Mir ist ___, dass Ali beim Essen oft aufsteht.', l:'aufgefallen', e:'auffallen ist trennbar und steht im Perfekt mit sein: Mir ist aufgefallen, dass … So beginnt fast jede gute Beobachtung.'},
      {typ:'luecke', f:'Sie hat sich sehr gut in die Gruppe ___.', l:'eingefunden', e:'sich einfinden — sich in einer neuen Umgebung zurechtfinden. Die freundliche Formel für gelungenes Ankommen.'},
      {typ:'luecke', f:'Bitte ___ Sie eine Vollmacht, wenn die Oma abholt.', l:'hinterlegen', e:'eine Vollmacht hinterlegen — sie schriftlich in der Kita abgeben. Ohne sie darf niemand das Kind mitnehmen.'},
      {typ:'luecke', f:'Nach dem Sturz habe ich sofort die ___ geschrieben.', l:'Unfallmeldung', e:'die Unfallmeldung geht an Träger und Unfallkasse. Auch bei einer Beule, auch wenn nichts weiter passiert ist.'},
      {typ:'luecke', f:'Wir ___ fest: kleine Leserunde ab Montag.', l:'halten', e:'etwas festhalten heißt hier: verbindlich vereinbaren und aufschreiben. Der Satz gehört ans Ende jedes Elterngesprächs.'},
      {typ:'bausteine', l:'Mir ist aufgefallen, dass er wenig spricht.', teile:['Mir','ist','aufgefallen','dass','er','wenig','spricht'], e:'Im dass-Satz steht das Verb am Ende: … dass er wenig spricht.'},
      {typ:'bausteine', l:'Bei uns ist es Regel, dass wir im Flur langsam gehen.', teile:['Bei','uns','ist','es','Regel','dass','wir','im','Flur','langsam','gehen'], e:'Die Regel gilt für alle — deshalb „bei uns" und „wir". Das nimmt dem Satz die Schärfe.'},
      {typ:'bausteine', l:'Wir laden Sie zum Entwicklungsgespräch ein.', teile:['Wir','laden','Sie','zum','Entwicklungsgespräch','ein'], e:'einladen ist trennbar: laden … ein. Die Vorsilbe rutscht ans Satzende.'},
      {typ:'paare', p:[['das Portfolio','die Sammelmappe des Kindes mit Bildern und Geschichten'],['die Bildungs- und Lerngeschichte','eine erzählte Beobachtung, an das Kind gerichtet'],['der Entwicklungsbogen','die strukturierte Vorlage vor dem Elterngespräch'],['die Eingewöhnung','die ersten Wochen mit Begleitung der Eltern'],['die Aufsichtspflicht','die Verantwortung, solange das Kind in der Kita ist']], e:'Diese fünf Begriffe stehen in jeder Kita-Konzeption. Lerne sie mit Artikel, sie kommen in jedem Gespräch vor.'},
      {typ:'paare', p:[['die Grobmotorik','klettern, rennen, balancieren'],['die Feinmotorik','schneiden, malen, Knopf schließen'],['das Sozialverhalten','teilen, streiten, trösten'],['die Selbständigkeit','allein anziehen, allein essen, allein zur Toilette']], e:'Die vier Bereiche des Entwicklungsbogens. Nach ihnen ist fast jedes Elterngespräch gegliedert.'},
      {typ:'hoeren', text:'Guten Tag, Frau Öztürk. Ali ist heute gegen elf Uhr im Garten vom Klettergerüst gerutscht. Wir haben sofort gekühlt und ihn eine halbe Stunde beobachtet. Es geht ihm gut, er hat danach normal gegessen.', f:'Was wurde direkt nach dem Sturz gemacht?', o:['Die Eltern wurden abgeholt','Es wurde gekühlt und beobachtet','Das Kind wurde zur Ärztin gebracht'], l:1, e:'Bei einer Unfallmeldung nennst du immer die Reihenfolge: was passiert ist, was ihr getan habt, wie es dem Kind jetzt geht.'},
      {typ:'hoeren', text:'Liebe Eltern, in der Woche vom 22. Juli bis zum 2. August ist unsere Kita geschlossen. Bitte geben Sie bis Freitag Bescheid, ob Sie eine Notbetreuung brauchen.', f:'Was sollen die Eltern bis Freitag tun?', o:['Die Kita bezahlen','Bescheid geben, ob sie eine Notbetreuung brauchen','Wechselkleidung mitbringen'], l:1, e:'Ein Aushang hat immer drei Teile: was ist, wann ist es, was sollen die Eltern tun. Der dritte Teil wird am häufigsten vergessen.'},
      {typ:'sprechen', f:'Sag freundlich: Mir ist aufgefallen, dass Ali in der Gruppe wenig spricht.', l:'Mir ist aufgefallen', e:'Sprich ruhig und lass die Stimme am Ende fallen. Es ist eine Beobachtung, keine Anklage.'},
      {typ:'sprechen', f:'Sag zu einem Kind im Streit: Wie hat sich Mila gefühlt, als ihr Turm umgefallen ist?', l:'Wie hat sich Mila gefühlt', e:'Geh in die Hocke und sprich langsam. Die Frage wirkt nur, wenn du auf Augenhöhe bist und danach eine Pause machst.'},
      {typ:'ordnen', l:['Beide Kinder anschauen und die Situation beschreiben','Erst das eine Kind erzählen lassen, dann das andere','Zusammenfassen, was du gehört hast','Nach dem Gefühl des anderen Kindes fragen','Gemeinsam eine Lösung finden und sie festhalten'], f:'Bring die Konfliktmoderation in die richtige Reihenfolge.', e:'Du entscheidest nicht, wer schuld ist. Du sorgst dafür, dass beide gehört werden und am Ende eine Lösung steht — die dürfen die Kinder erfinden.'},
      {typ:'artikel', w:'Eingewöhnung', l:'die', e:'die Eingewöhnung. Wörter auf -ung sind immer feminin — das gilt ohne Ausnahme.'},
      {typ:'artikel', w:'Portfolio', l:'das', e:'das Portfolio, Plural die Portfolios. Aus dem Italienischen, im Deutschen sächlich.'},
      {typ:'artikel', w:'Entwicklungsbogen', l:'der', e:'der Bogen, also auch der Entwicklungsbogen. Das letzte Wort im Kompositum bestimmt den Artikel.'}
    ],
    schreiben:{
      auf:'Schreibe die Bildungs- und Lerngeschichte für Ali, vier Jahre, über eine Szene am Bauteppich.',
      punkte:['Was hast du gesehen','Was hat Ali dabei gemacht und gesagt','Was hat ihn daran interessiert','Was planst du als Nächstes für ihn'],
      hilfe:'Schreibe das Kind direkt an, in der Du-Form und in der Vergangenheit: „Lieber Ali, am Montag habe ich dich am Bauteppich beobachtet." Beschreibe, was du gesehen hast, ohne zu loben und ohne zu bewerten — also nicht „du warst toll", sondern „du hast den Turm dreimal neu gebaut". Zeig, was du an seinem Lernen erkennst: „Ich habe gesehen, dass dir wichtig war, …". Schließe mit einem Angebot: „Nächste Woche lege ich dir … bereit." Sechs bis zehn Sätze, einfache Wörter — die Eltern lesen mit.'
    }
  },
  /* ===================== 4 · HANDWERK BAU ===================== */
  {
    id:'bau',
    t:'Handwerk Bau',
    unter:'Hoch-, Tief- und Rohbau, Gerüstbau, Trockenbau, Fliesen, Maler, Dach',
    lvl:'A2–B1',
    pruef:'Keine Fachsprachprüfung. Einschlägig: Deutsch-Test für den Beruf A2·B1·B2',
    warum:'Im Aus- und Trockenbau haben 67 Prozent der Beschäftigten eine Einwanderungsgeschichte — der höchste Wert aller Branchen. Im Gerüstbau sind es 48 Prozent, bei den Fliesenlegern 47 Prozent. Gleichzeitig können 62 Prozent der Tiefbaubetriebe ihre Stellen nicht besetzen. Für die praktische Arbeit reicht A2 bis B1, für die Ausbildung wird B2 erwartet. Es gibt keine Sprachprüfung der Handwerkskammern — aber wer Gefährdungen und Schutzmaßnahmen verstehen muss, braucht faktisch B1.',
    handlungen:[
      {t:'Die Tagesanweisung verstehen', e:'Morgens vom Polier hören, was heute gemacht wird, in welcher Reihenfolge und bis wann — unter Lärm, oft im Dialekt.', lvl:'B1'},
      {t:'Der Unterweisung folgen und nachfragen', e:'Die Sicherheitsunterweisung verstehen, unterschreiben und nachfragen, wenn du etwas nicht sicher weißt.', lvl:'B1'},
      {t:'Das Aufmaß nehmen und ansagen', e:'Maße, Höhen und Toleranzen laut ansagen, sie dir zurückbestätigen lassen und sauber notieren.', lvl:'A2'},
      {t:'Material und Werkzeug anfordern', e:'Auf der Baustelle und am Telefon beim Lager sagen, was fehlt, wie viel und bis wann.', lvl:'A2'},
      {t:'Bauplan und Leistungsverzeichnis lesen', e:'Symbole, Legende und Positionsnummern finden und im Plan zeigen, wovon du sprichst.', lvl:'B1'},
      {t:'Einen Mangel oder ein Hindernis melden', e:'Sagen, was du gefunden hast, ein Foto schicken, die Arbeit stoppen und eine Entscheidung einholen.', lvl:'B1'},
      {t:'Bedenken beim Kunden anmelden', e:'Fachlich begründen, warum es so nicht geht — verständlich für Laien und ohne dass der Kunde sich angegriffen fühlt.', lvl:'B1'},
      {t:'Bautagebuch und Stundenzettel führen', e:'Leistung, Material, Wetter und Behinderung eintragen — kurze Sätze, richtige Zahlen, Unterschrift.', lvl:'B1'},
      {t:'Einen eigenen Fehler eingestehen', e:'Sagen, was passiert ist, einen Vorschlag machen und den Ruf des Betriebs nicht beschädigen.', lvl:'B1'},
      {t:'Mit anderen Gewerken koordinieren', e:'Zugang, Reihenfolge und Übergabe der Fläche aushandeln, mit Kranführer und Einweiser sicher sprechen.', lvl:'B1'}
    ],
    chunks:[
      {de:'das Aufmaß nehmen', hi:'die Flächen und Längen messen, bevor abgerechnet wird', bsp:'Wir nehmen morgen das Aufmaß im Erdgeschoss.'},
      {de:'auf Maß schneiden', hi:'genau auf die gemessene Länge zuschneiden', bsp:'Die Platten müssen wir noch auf Maß schneiden.'},
      {de:'zwei Meter zwanzig', hi:'so sagt man Maße auf der Baustelle, nie „2,20 Meter"', bsp:'Die Höhe ist zwei Meter zwanzig.'},
      {de:'ich wiederhole: zwei Meter zwanzig', hi:'Maße immer zurückbestätigen, sonst wird falsch geschnitten', bsp:'Ich wiederhole: zwei Meter zwanzig, richtig?'},
      {de:'in der Toleranz liegen', hi:'die erlaubte Abweichung, meist wenige Millimeter', bsp:'Fünf Millimeter, das liegt noch in der Toleranz.'},
      {de:'die Bewehrung einlegen', hi:'die Stahlmatten in die Schalung legen, bevor betoniert wird', bsp:'Heute Vormittag legen wir die Bewehrung ein.'},
      {de:'die Schalung stellen', hi:'die Form aus Holz oder Systemteilen, in die der Beton kommt', bsp:'Die Schalung für die Wand stellen wir morgen.'},
      {de:'die Schalung ausschalen', hi:'die Form wieder abbauen, wenn der Beton fest ist', bsp:'Am Freitag können wir ausschalen.'},
      {de:'Beton einbringen und verdichten', hi:'Beton einfüllen und mit dem Rüttler entlüften', bsp:'Der Beton wird eingebracht und sofort verdichtet.'},
      {de:'den Estrich einbringen', hi:'die Schicht auf dem Rohboden, danach kommt der Belag', bsp:'Der Estrich wird am Montag eingebracht.'},
      {de:'die Trocknungszeit einhalten', hi:'die Zeit, bevor weitergearbeitet werden darf', bsp:'Bitte die Trocknungszeit von 48 Stunden einhalten.'},
      {de:'das Gerüst aufbauen', hi:'dazu: abbauen, umsetzen, freigeben', bsp:'Das Gerüst wird am Dienstag aufgebaut.'},
      {de:'das Gerüst ist freigegeben', hi:'erst dann darf man drauf — mit Gerüstschein', bsp:'Das Gerüst ist seit heute früh freigegeben.'},
      {de:'die Absturzsicherung anbringen', hi:'Geländer, Netz oder Seil gegen Absturz', bsp:'Vor Beginn der Arbeiten die Absturzsicherung anbringen!'},
      {de:'die persönliche Schutzausrüstung tragen', hi:'kurz PSA: Helm, Schuhe, Handschuhe, Weste, Brille', bsp:'Auf der ganzen Baustelle ist PSA zu tragen.'},
      {de:'an der Unterweisung teilnehmen', hi:'die Sicherheitsbelehrung, du unterschreibst danach', bsp:'Ich habe heute früh an der Unterweisung teilgenommen.'},
      {de:'die Gefährdungsbeurteilung', hi:'das Papier, in dem die Gefahren und Schutzmaßnahmen stehen', bsp:'In der Gefährdungsbeurteilung steht, dass wir anseilen müssen.'},
      {de:'die Tagesanweisung bekommen', hi:'was heute zu tun ist, meist morgens am Container', bsp:'Um sieben gibt der Polier die Tagesanweisung.'},
      {de:'Können Sie das bitte wiederholen?', hi:'der wichtigste Satz auf der lauten Baustelle', bsp:'Es ist sehr laut hier. Können Sie das bitte wiederholen?'},
      {de:'im Plan steht das nicht', hi:'so meldest du eine Abweichung zwischen Plan und Wirklichkeit', bsp:'Hier ist eine Leitung, im Plan steht das nicht.'},
      {de:'die Position im Leistungsverzeichnis', hi:'jede Leistung hat eine Nummer, danach wird abgerechnet', bsp:'Das ist Position 3.14 im Leistungsverzeichnis.'},
      {de:'einen Mangel melden', hi:'sofort und immer an den Vorarbeiter oder Polier', bsp:'Ich melde einen Mangel an der Dampfsperre.'},
      {de:'Bedenken anmelden', hi:'schriftlich sagen, dass es so nicht geht — schützt den Betrieb', bsp:'Wir müssen hier schriftlich Bedenken anmelden.'},
      {de:'der Putz trägt nicht', hi:'der Untergrund hält den nächsten Aufbau nicht', bsp:'Der Putz trägt nicht, wir müssen erst grundieren.'},
      {de:'den Untergrund vorbereiten', hi:'reinigen, grundieren, ausgleichen', bsp:'Zuerst bereiten wir den Untergrund vor.'},
      {de:'das Mischungsverhältnis einhalten', hi:'steht im technischen Merkblatt, nicht schätzen', bsp:'Bitte das Mischungsverhältnis genau einhalten.'},
      {de:'das Bautagebuch führen', hi:'täglich: Leistung, Material, Wetter, Behinderung', bsp:'Der Polier führt jeden Abend das Bautagebuch.'},
      {de:'den Stundenzettel abgeben', hi:'meist freitags, sonst gibt es kein Geld', bsp:'Den Stundenzettel gebe ich freitags im Büro ab.'},
      {de:'eine Behinderung eintragen', hi:'wenn du nicht arbeiten konntest, und warum', bsp:'Regen ab 14 Uhr — ich trage eine Behinderung ein.'},
      {de:'den Termin verschieben', hi:'sachlich, mit Grund und neuem Termin', bsp:'Wir müssen den Termin auf Donnerstag verschieben.'},
      {de:'da ist mir ein Fehler passiert', hi:'früh sagen ist immer billiger als spät', bsp:'Da ist mir ein Fehler passiert, ich habe zwei Zentimeter zu kurz geschnitten.'},
      {de:'die Fläche übergeben', hi:'ein Gewerk ist fertig, das nächste kann anfangen', bsp:'Am Mittwoch übergeben wir die Fläche an den Fliesenleger.'},
      {de:'wir kommen uns in die Quere', hi:'zwei Gewerke arbeiten gleichzeitig am selben Ort', bsp:'Wenn ihr Donnerstag streicht, kommen wir uns in die Quere.'},
      {de:'kannst du mir kurz anreichen?', hi:'auf der Baustelle duzt man sich fast immer', bsp:'Kannst du mir kurz die Wasserwaage anreichen?'},
      {de:'Achtung, Last kommt!', hi:'Warnruf beim Kran — alle schauen hoch', bsp:'Achtung, Last kommt von rechts!'}
    ],
    dialoge:[
      {
        id:'bau-tagesanweisung',
        titel:'Die Tagesanweisung vom Polier',
        lvl:'B1',
        dauer:'4 Min',
        ort:'Es ist 6.50 Uhr am Baucontainer. Der Polier verteilt die Arbeit für den Tag. Der Bagger läuft schon, du verstehst nur die Hälfte. Heute soll die Wand im zweiten Obergeschoss betoniert werden.',
        schritte:[
          {amanda:'Ihr geht heute hoch in den Zweiten, Wand Achse C, Bewehrung rein und dann zumachen.', hinweis:'Sag ehrlich, dass du wegen dem Lärm nachfragen musst.', beispiel:'Entschuldigung, hier ist es sehr laut. Können Sie das bitte noch einmal wiederholen?', redemittel:['Entschuldigung, hier ist es sehr laut.','Können Sie das bitte wiederholen?','Ich habe nur die Hälfte verstanden.']},
          {amanda:'Zweites Obergeschoss, Achse C. Erst Bewehrung einlegen, dann Schalung schließen.', hinweis:'Wiederhole die Reihenfolge, damit klar ist, dass du es hast.', beispiel:'Verstanden: erst die Bewehrung einlegen, dann die Schalung schließen. Achse C im zweiten Obergeschoss.', redemittel:['Verstanden: erst … , dann …','Also zuerst … und danach …','Ich wiederhole kurz: …']},
          {amanda:'Genau. Und um zwei kommt der Beton, da muss alles stehen.', hinweis:'Frag nach dem, was du wirklich brauchst: Zeit, Leute, Material.', beispiel:'Bis vierzehn Uhr also. Sind wir zu zweit oder zu dritt? Und ist die Bewehrung schon oben?', redemittel:['Bis wann genau?','Sind wir zu zweit oder zu dritt?','Ist das Material schon da?']},
          {amanda:'Zu dritt, Marek kommt dazu. Die Matten liegen unten am Kran.', hinweis:'Melde jetzt das Problem, das du schon kennst.', beispiel:'Eine Sache noch: Am Gerüst an der Nordseite fehlt das Geländer. Da können wir so nicht arbeiten.', redemittel:['Eine Sache noch: …','Da ist ein Problem mit …','So können wir da nicht arbeiten.']},
          {amanda:'Gut, dass du es sagst. Ich lasse das vor neun in Ordnung bringen.', hinweis:'Bestätige und sag, was du bis dahin machst.', beispiel:'Alles klar. Dann fangen wir an der Südseite an und wechseln, wenn das Geländer steht.', redemittel:['Alles klar.','Dann fangen wir zuerst mit … an.','Ich sage Bescheid, wenn wir fertig sind.']}
        ]
      },
      {
        id:'bau-bedenken',
        titel:'Bedenken beim Kunden anmelden',
        lvl:'B1',
        dauer:'4 Min',
        ort:'Altbauwohnung, bewohnt. Du sollst heute die Wände im Wohnzimmer spachteln und streichen. Der alte Putz ist feucht und bröselt. Die Kundin, Frau Reimann, steht daneben und will, dass es heute fertig wird.',
        schritte:[
          {amanda:'Sie können ja anfangen. Heute Abend haben wir Besuch, da soll es fertig sein.', hinweis:'Sag freundlich, dass es ein Problem gibt, und zeig es ihr.', beispiel:'Guten Tag, Frau Reimann. Bevor wir anfangen, muss ich Ihnen etwas zeigen. Sehen Sie hier — der Putz ist feucht und bröselt.', redemittel:['Bevor wir anfangen, muss ich Ihnen etwas zeigen.','Sehen Sie hier, …','Da gibt es ein Problem.']},
          {amanda:'Ach, das bisschen. Streichen Sie einfach drüber.', hinweis:'Erklär die Folge in einfachen Worten, ohne Fachwörter.', beispiel:'Das geht leider nicht. Der Putz trägt nicht mehr. Wenn wir darüber streichen, fällt die Farbe in ein paar Wochen mit dem Putz ab.', redemittel:['Das geht leider nicht, weil …','Der Putz trägt nicht.','Dann hält die Farbe nicht.']},
          {amanda:'Und was soll ich jetzt machen? Ich habe extra Urlaub genommen!', hinweis:'Nimm den Ärger auf und mach einen konkreten Vorschlag.', beispiel:'Das verstehe ich, das ist ärgerlich. Wir können heute den losen Putz abschlagen und grundieren. Morgen spachteln wir, übermorgen streichen wir.', redemittel:['Das verstehe ich, das ist ärgerlich.','Mein Vorschlag wäre: …','Heute machen wir … , morgen …']},
          {amanda:'Kostet das dann mehr?', hinweis:'Ehrlich bleiben und die Zuständigkeit klären.', beispiel:'Ja, die Vorarbeit kommt dazu. Den genauen Preis kann ich Ihnen nicht sagen, das macht mein Chef. Ich rufe ihn gleich an, dann bekommen Sie heute noch Bescheid.', redemittel:['Ja, das kostet mehr, weil …','Den Preis macht mein Chef.','Ich rufe ihn an, Sie bekommen heute Bescheid.']},
          {amanda:'Na gut. Aber schreiben Sie mir das bitte auf.', hinweis:'Zusagen und die Bedenkenanmeldung ankündigen.', beispiel:'Mache ich. Wir melden das auch schriftlich an — dann haben Sie und wir es schwarz auf weiß. Ich bringe Ihnen das Papier morgen früh mit.', redemittel:['Mache ich.','Wir melden das schriftlich an.','Das Papier bringe ich Ihnen morgen mit.']}
        ]
      },
      {
        id:'bau-fehler',
        titel:'Den eigenen Fehler melden',
        lvl:'B1',
        dauer:'3 Min',
        ort:'Mittag, Rohbau. Du hast die Aussparungen für die Fenster nach dem alten Plan gesetzt. Der neue Plan liegt seit gestern im Container. Zwei Öffnungen sind jetzt zehn Zentimeter zu schmal. Der Vorarbeiter kommt vorbei.',
        schritte:[
          {amanda:'Na, wie weit seid ihr? Die Aussparungen fertig?', hinweis:'Sag es direkt, nicht drumherum.', beispiel:'Die sind fertig, aber da ist mir ein Fehler passiert. Ich habe nach dem alten Plan gearbeitet.', redemittel:['Da ist mir ein Fehler passiert.','Ich muss dir etwas sagen.','Das ist schiefgegangen.']},
          {amanda:'Wie, nach dem alten Plan? Welcher liegt denn draußen?', hinweis:'Beschreib genau, was falsch ist — mit Zahlen.', beispiel:'Zwei Öffnungen an der Ostseite sind zehn Zentimeter zu schmal. Die anderen vier stimmen.', redemittel:['Zwei Öffnungen sind … zu schmal.','Betroffen sind …','Die anderen stimmen.']},
          {amanda:'Das ist ärgerlich. Wie konnte das passieren?', hinweis:'Sachlich bleiben, keine Ausrede, aber den Grund nennen.', beispiel:'Der neue Plan lag im Container, am Gerüst hing noch der alte. Ich habe nicht nachgeschaut. Das war mein Fehler.', redemittel:['Der Grund war, dass …','Ich habe nicht nachgeschaut.','Das war mein Fehler.']},
          {amanda:'Und jetzt?', hinweis:'Mach einen Vorschlag, statt auf eine Anweisung zu warten.', beispiel:'Ich würde vorschlagen, dass wir die zwei Öffnungen morgen früh nachstemmen. Das dauert etwa drei Stunden zu zweit.', redemittel:['Ich würde vorschlagen, dass …','Das dauert etwa …','Wir brauchen dafür …']},
          {amanda:'Gut. Und ab jetzt vor jeder Schicht auf den aktuellen Plan schauen.', hinweis:'Annehmen und die Konsequenz selbst benennen.', beispiel:'Alles klar. Ich hänge den neuen Plan am Gerüst auf und nehme den alten weg, dann passiert das keinem mehr.', redemittel:['Alles klar.','Ich mache es ab jetzt so: …','Danke, dass du es so sagst.']}
        ]
      }
    ],
    saetze:[
      {de:'Können Sie das bitte wiederholen? Hier ist es sehr laut.', wann:'jeden Tag auf der Baustelle — Nachfragen ist billiger als Nacharbeiten'},
      {de:'Ich wiederhole: zwei Meter zwanzig.', wann:'bei jedem Maß, das dir jemand zuruft'},
      {de:'Verstanden: erst die Bewehrung, dann die Schalung.', wann:'wenn du eine Reihenfolge bestätigst'},
      {de:'Bis wann muss das fertig sein?', wann:'am Ende jeder Tagesanweisung — der Termin fehlt fast immer'},
      {de:'Da ist ein Problem, ich zeige es Ihnen.', wann:'wenn du einen Mangel gefunden hast und ihn melden musst'},
      {de:'Im Plan steht das nicht.', wann:'wenn Wirklichkeit und Zeichnung nicht zusammenpassen — dann sofort stoppen'},
      {de:'So können wir da nicht arbeiten.', wann:'wenn die Sicherheit fehlt, zum Beispiel das Geländer am Gerüst'},
      {de:'Der Putz trägt nicht, wir müssen erst grundieren.', wann:'Bedenken anmelden beim Kunden, einfach und begründet'},
      {de:'Mein Vorschlag wäre: heute grundieren, morgen spachteln.', wann:'wenn du einen Termin nicht halten kannst — immer mit Alternative'},
      {de:'Den Preis macht mein Chef, ich frage nach.', wann:'wenn der Kunde Geld verhandeln will und du nicht zuständig bist'},
      {de:'Da ist mir ein Fehler passiert.', wann:'so früh wie möglich — spät gemeldete Fehler kosten das Zehnfache'},
      {de:'Kannst du mir kurz anreichen?', wann:'unter Kollegen, geduzt, ganz normal auf jeder Baustelle'},
      {de:'Achtung, Last kommt!', wann:'beim Kran — laut rufen, alle schauen hoch'},
      {de:'Wann könnt ihr die Fläche übergeben?', wann:'in der Abstimmung mit dem anderen Gewerk'},
      {de:'Ich brauche noch zwei Sack Zement bis morgen früh.', wann:'am Telefon beim Lager: was, wie viel, bis wann'}
    ],
    ueb:[
      {typ:'wahl', f:'Der Polier ruft dir ein Maß zu und es ist laut. Was tust du?', o:['Du nickst und fängst an','Du wiederholst das Maß laut und lässt es bestätigen','Du fragst später den Kollegen'], l:1, e:'Maße wiederholst du immer zurück. Ein falsch verstandenes Maß kostet ein ganzes Paket Material und einen halben Tag.'},
      {typ:'wahl', f:'Du findest im Boden eine Leitung, die im Plan nicht eingezeichnet ist. Was machst du zuerst?', o:['Vorsichtig weiterarbeiten','Arbeit stoppen, Foto machen, Vorarbeiter informieren','Die Leitung selbst umlegen'], l:1, e:'Bei einer Abweichung vom Plan wird gestoppt, nicht improvisiert. Foto und Meldung schützen dich und den Betrieb.'},
      {typ:'wahl', f:'Was heißt der Satz „Absturzsicherung vor Beginn der Arbeiten anbringen!"?', o:['Es ist erlaubt, sie anzubringen','Es ist eine Vorschrift, sie vorher anzubringen','Jemand hat sie schon angebracht'], l:1, e:'Das ist der imperativische Infinitiv: Verb am Ende, kein „Sie", kein „bitte". So sind fast alle Sicherheitsschilder und Betriebsanweisungen geschrieben — das ist eine Anordnung.'},
      {typ:'luecke', f:'Wir ___ morgen das Aufmaß im Erdgeschoss.', l:'nehmen', e:'Man sagt: das Aufmaß nehmen. Nicht „machen" und nicht „messen".'},
      {typ:'luecke', f:'Vor Beginn der Arbeiten die Absturzsicherung ___!', l:'anbringen', e:'Sicherheitssprache steht im Infinitiv, und der Infinitiv steht ganz am Ende. Lies solche Sätze immer von hinten.'},
      {typ:'luecke', f:'Der Putz ___ nicht, wir müssen erst grundieren.', l:'trägt', e:'tragen heißt hier: halten, den nächsten Aufbau aushalten. Der Standardsatz der Bedenkenanmeldung.'},
      {typ:'luecke', f:'Fünf Millimeter, das liegt noch in der ___.', l:'Toleranz', e:'die Toleranz ist die erlaubte Abweichung. Steht in der Norm und im Leistungsverzeichnis.'},
      {typ:'luecke', f:'Regen ab 14 Uhr — ich trage eine ___ ins Bautagebuch ein.', l:'Behinderung', e:'Eine Behinderung ist alles, was die Arbeit aufhält: Wetter, fehlendes Material, ein anderes Gewerk. Nicht eingetragen heißt: nicht passiert.'},
      {typ:'bausteine', l:'Erst die Bewehrung einlegen, dann die Schalung schließen.', teile:['Erst','die','Bewehrung','einlegen','dann','die','Schalung','schließen'], e:'So bestätigst du eine Reihenfolge: erst … , dann … . Beide Verben stehen im Infinitiv am Ende.'},
      {typ:'bausteine', l:'Beim Arbeiten auf dem Dach immer anseilen!', teile:['Beim','Arbeiten','auf','dem','Dach','immer','anseilen'], e:'Wieder der imperativische Infinitiv. Merke das Muster: Wo? Wann? Was tun! Das Verb kommt zum Schluss.'},
      {typ:'bausteine', l:'Da ist mir ein Fehler passiert.', teile:['Da','ist','mir','ein','Fehler','passiert'], e:'Der kürzeste und beste Weg, einen Fehler zu melden. Kein „vielleicht", kein „eigentlich".'},
      {typ:'paare', p:[['das Aufmaß','die Flächen und Längen messen für die Abrechnung'],['die Bewehrung','der Stahl, der in den Beton kommt'],['die Schalung','die Form, in die der Beton gegossen wird'],['der Estrich','die Schicht auf dem Rohboden vor dem Belag'],['die Unterweisung','die Sicherheitsbelehrung, die du unterschreibst']], e:'Diese fünf Wörter fallen auf jeder Baustelle in Deutschland. Lerne sie mit Artikel.'},
      {typ:'paare', p:[['die PSA','Helm, Schuhe, Handschuhe, Weste'],['die Gefährdungsbeurteilung','das Papier mit Gefahren und Schutzmaßnahmen'],['die Absturzsicherung','Geländer, Netz oder Seil gegen Absturz'],['der Gerüstschein','die Freigabe, ab wann man auf das Gerüst darf']], e:'Vier Begriffe aus dem Arbeitsschutz. Wer sie nicht kennt, darf auf vielen Baustellen nicht anfangen.'},
      {typ:'hoeren', text:'Ihr geht heute in den zweiten Stock, Achse C. Erst die Bewehrung einlegen, dann die Schalung schließen. Um vierzehn Uhr kommt der Beton, bis dahin muss alles stehen.', f:'Was muss bis vierzehn Uhr fertig sein?', o:['Nur die Bewehrung','Bewehrung und Schalung','Der Beton'], l:1, e:'In einer Tagesanweisung stehen immer drei Dinge: wo, was in welcher Reihenfolge, bis wann. Achte auf das Wort „bis dahin".'},
      {typ:'hoeren', text:'Achtung, eine Bitte an alle: Das Gerüst an der Nordseite ist noch nicht freigegeben. Bitte heute nur über die Südseite hoch. Freigabe voraussichtlich morgen früh.', f:'Wo darf man heute hochsteigen?', o:['An der Nordseite','An der Südseite','Gar nicht'], l:1, e:'„Nicht freigegeben" heißt: betreten verboten, auch wenn das Gerüst fertig aussieht. Die Freigabe macht der Gerüstbauer.'},
      {typ:'sprechen', f:'Sag laut: Entschuldigung, hier ist es sehr laut. Können Sie das bitte wiederholen?', l:'Entschuldigung, hier ist es sehr laut', e:'Sprich lauter als sonst und schau die Person an. Auf der Baustelle geht Höflichkeit nie verloren, aber Leisesprechen schon.'},
      {typ:'sprechen', f:'Sag zur Kundin: Der Putz trägt nicht, wir müssen erst grundieren.', l:'Der Putz trägt nicht', e:'Kurzer Satz, ruhiger Ton, dann eine Pause. Danach kommt dein Vorschlag — nie das Problem ohne Lösung stehen lassen.'},
      {typ:'ordnen', l:['Arbeit sofort stoppen','Ein Foto von der Stelle machen','Den Vorarbeiter oder Polier anrufen','Die Entscheidung abwarten','Den Vorgang im Bautagebuch eintragen'], f:'Bring die Meldung eines Hindernisses in die richtige Reihenfolge.', e:'Stoppen kommt zuerst, nicht zuletzt. Und der Eintrag ins Bautagebuch ist kein Papierkram, sondern dein Nachweis.'},
      {typ:'artikel', w:'Aufmaß', l:'das', e:'das Maß, also auch das Aufmaß. Plural: die Aufmaße.'},
      {typ:'artikel', w:'Bewehrung', l:'die', e:'die Bewehrung. Wörter auf -ung sind immer feminin — auch die Unterweisung und die Gefährdungsbeurteilung.'},
      {typ:'artikel', w:'Estrich', l:'der', e:'der Estrich, ohne Plural im Alltag. Merke: der Estrich wird eingebracht.'}
    ],
    schreiben:{
      auf:'Schreibe den Eintrag ins Bautagebuch für heute — mit der Bedenkenanmeldung zum feuchten Putz.',
      punkte:['Datum, Wetter und wer auf der Baustelle war','Welche Leistung wurde ausgeführt','Welches Problem ist aufgetreten','Was wurde vereinbart und wie geht es weiter'],
      hilfe:'Schreibe kurze Sätze in der Vergangenheit, ohne „ich finde" und ohne Erklärung, warum jemand schuld ist. Fang die Punkte so an: „Am 14. Mai, bewölkt, 12 Grad, drei Mann vor Ort." · „Ausgeführt wurden …" · „Festgestellt wurde, dass …" · „Vereinbart wurde mit der Bauherrin …". Nenne immer Uhrzeit, Menge und Ort: ab 14 Uhr, zwei Sack, Ostseite zweites Obergeschoss. Für die Bedenken reicht ein Satz mit Grund und Folge: „Der vorhandene Putz trägt nicht, ein Anstrich würde sich mit dem Untergrund lösen." Sechs bis acht Sätze.'
    }
  },

  /* ===================== 5 · ELEKTRO UND SHK ===================== */
  {
    id:'elektro-shk',
    t:'Elektro und SHK',
    unter:'Elektrotechnik, Bauelektrik, Anlagenmechanik Sanitär Heizung Klima',
    lvl:'B1–B2',
    pruef:'Keine Fachsprachprüfung. Einschlägig: Deutsch-Test für den Beruf B1·B2, BAMF-Spezialkurs Gewerbe-Technik (300 Unterrichtseinheiten)',
    warum:'In der Elektrotechnik haben 30 Prozent der Beschäftigten eine Einwanderungsgeschichte, die Engpassintensität liegt bei 80 von 100 Punkten — und die Lücke wächst weiter, weil Wärmepumpe, Photovoltaik, Wallbox und Netzausbau gleichzeitig kommen. SHK steht seit Jahren auf jeder Mangelberufsliste. Die Bundesagentur nennt den Elektrobereich ausdrücklich unter B2, also unter den Tätigkeiten mit mittleren sprachlichen Anforderungen. Der Beruf ist nicht reglementiert, aber sicherheitskritisch: Wer eine Freischaltung nicht sauber ansagen kann, ist eine Gefahr — hier ist B1 real zu wenig.',
    handlungen:[
      {t:'Den Schaltplan lesen und besprechen', e:'Stromlaufplan, Klemmenplan und Installationsplan verstehen und mit dem Kollegen abgleichen, welche Ader wo aufgelegt wird.', lvl:'B1'},
      {t:'Die fünf Sicherheitsregeln ansagen und quittieren', e:'Laut ansagen und bestätigen lassen: freischalten, gegen Wiedereinschalten sichern, Spannungsfreiheit feststellen, erden und kurzschließen, benachbarte unter Spannung stehende Teile abdecken.', lvl:'B1'},
      {t:'Den Fehler eingrenzen und beschreiben', e:'Symptom, Bedingung und Häufigkeit genau benennen — nicht „geht nicht", sondern „der FI löst nur aus, wenn die Waschmaschine läuft".', lvl:'B2'},
      {t:'Messwerte protokollieren und vergleichen', e:'Isolationswiderstand, Schleifenimpedanz und RCD-Auslösezeit messen, in das Prüfprotokoll eintragen und mit dem Sollwert vergleichen.', lvl:'B1'},
      {t:'Eine Störungsmeldung telefonisch aufnehmen', e:'Aus „die Heizung macht Geräusche und wird nicht warm" eine technische Verdachtsdiagnose machen, die Dringlichkeit einschätzen und einen Termin nennen.', lvl:'B2'},
      {t:'Kunden in eine Anlage einweisen', e:'Wärmepumpe, Wallbox, Wechselrichter oder Heizkurve so erklären, dass eine Laiin es nach fünf Minuten allein bedienen kann.', lvl:'B2'},
      {t:'Gefahren benennen und Notabschaltung anleiten', e:'Bei Gasgeruch, CO-Verdacht oder Legionellen klar sagen, was sofort zu tun und was auf keinen Fall zu tun ist.', lvl:'B1'},
      {t:'Die Übergabe auf der Baustelle machen', e:'Sagen, was heute fertig geworden ist, was offen bleibt und was der nächste Trupp mitbringen muss.', lvl:'B1'},
      {t:'Das Abnahme- und Übergabeprotokoll führen', e:'Leistung dokumentieren, Restpunkte festhalten, die Einweisung bestätigen lassen und unterschreiben lassen.', lvl:'B2'},
      {t:'Verzug und Lieferengpass vertreten', e:'Dem Kunden sagen, dass das Ersatzteil fehlt, ein Alternativteil vorschlagen und einen belastbaren neuen Termin nennen.', lvl:'B2'}
    ],
    chunks:[
      {de:'den Stromlaufplan lesen', hi:'der Plan zeigt den Stromfluss, nicht die Einbaulage', bsp:'Ich schaue kurz im Stromlaufplan nach, wo die Brücke sitzt.'},
      {de:'den Klemmenplan abgleichen', hi:'welche Ader auf welche Klemme kommt', bsp:'Wir gleichen den Klemmenplan ab, bevor wir auflegen.'},
      {de:'eine Ader auflegen', hi:'die Leitung an der Klemme anschließen', bsp:'Die braune Ader habe ich auf Klemme 3 aufgelegt.'},
      {de:'die fünf Sicherheitsregeln anwenden', hi:'die Reihenfolge ist Pflicht und wird laut angesagt', bsp:'Bevor wir anfangen, wenden wir die fünf Sicherheitsregeln an.'},
      {de:'die Anlage freischalten', hi:'Regel eins: allpolig vom Netz trennen', bsp:'Der Verteiler ist freigeschaltet, Feld 2 ist spannungsfrei.'},
      {de:'gegen Wiedereinschalten sichern', hi:'Regel zwei: Schloss anbringen und Schild aufhängen', bsp:'Ich habe den Automaten gegen Wiedereinschalten gesichert und das Schild aufgehängt.'},
      {de:'die Spannungsfreiheit feststellen', hi:'Regel drei: allpolig messen, nie nur mit dem Phasenprüfer', bsp:'Die Spannungsfreiheit habe ich allpolig festgestellt.'},
      {de:'erden und kurzschließen', hi:'Regel vier, in der Niederspannung nur bei Bedarf, im Netz immer', bsp:'Ist die Leitung schon geerdet und kurzgeschlossen?'},
      {de:'benachbarte Teile abdecken', hi:'Regel fünf: alles daneben, was noch unter Spannung steht', bsp:'Die benachbarten Teile sind mit Matten abgedeckt.'},
      {de:'ich quittiere', hi:'so bestätigst du eine Sicherheitsansage — kurz und laut', bsp:'Freigeschaltet und gesichert — ich quittiere.'},
      {de:'der FI löst aus', hi:'der Fehlerstromschutzschalter schaltet ab, umgangssprachlich der FI', bsp:'Der FI löst nur aus, wenn die Waschmaschine läuft.'},
      {de:'die Sicherung fliegt raus', hi:'Kundensprache für: der Leitungsschutzschalter schaltet ab', bsp:'Die Kundin sagt, die Sicherung fliegt jeden Abend raus.'},
      {de:'den Fehler eingrenzen', hi:'Schritt für Schritt Stromkreise abklemmen, bis es sich zeigt', bsp:'Ich grenze den Fehler ein, dann wissen wir, welcher Kreis es ist.'},
      {de:'den Isolationswiderstand messen', hi:'in Megaohm, Sollwert mindestens 1 Megaohm', bsp:'Der Isolationswiderstand liegt bei 5 Megaohm, das ist in Ordnung.'},
      {de:'die Schleifenimpedanz messen', hi:'zeigt, ob die Schutzeinrichtung schnell genug abschaltet', bsp:'Die Schleifenimpedanz habe ich an jeder Steckdose gemessen.'},
      {de:'die Auslösezeit des RCD prüfen', hi:'in Millisekunden, gehört in jedes Prüfprotokoll', bsp:'Die Auslösezeit des RCD lag bei 22 Millisekunden.'},
      {de:'im Sollbereich liegen', hi:'der Messwert ist so, wie er sein soll', bsp:'Alle Werte liegen im Sollbereich.'},
      {de:'das Messprotokoll ausfüllen', hi:'ohne Protokoll gilt die Prüfung als nicht gemacht', bsp:'Das Messprotokoll fülle ich noch vor Ort aus.'},
      {de:'eine Störung aufnehmen', hi:'am Telefon oder im Büro: was, seit wann, wie oft', bsp:'Ich nehme die Störung auf, dann rufe ich Sie mit einem Termin zurück.'},
      {de:'ein Notdienstfall sein', hi:'muss noch heute raus — kein Wasser, kein Strom, Gasgeruch', bsp:'Kein Warmwasser im Winter ist bei uns ein Notdienstfall.'},
      {de:'den hydraulischen Abgleich machen', hi:'jeder Heizkörper bekommt genau die Wassermenge, die er braucht', bsp:'Nach dem hydraulischen Abgleich wird auch der letzte Raum warm.'},
      {de:'die Vorlauftemperatur senken', hi:'wie heiß das Wasser zum Heizkörper geht', bsp:'Wir senken die Vorlauftemperatur auf 45 Grad, das spart Strom.'},
      {de:'die Heizkurve anpassen', hi:'regelt, wie stark die Heizung auf Kälte draußen reagiert', bsp:'Wenn es Ihnen zu kühl ist, passen wir die Heizkurve an.'},
      {de:'die Wärmepumpe in Betrieb nehmen', hi:'die Inbetriebnahme wird immer protokolliert', bsp:'Die Wärmepumpe haben wir heute in Betrieb genommen.'},
      {de:'die Wallbox anschließen', hi:'Ladestation für das Auto, meldepflichtig beim Netzbetreiber', bsp:'Die Wallbox ist angeschlossen und beim Netzbetreiber gemeldet.'},
      {de:'es riecht nach Gas', hi:'der Satz, nach dem alles andere warten muss', bsp:'Wenn es nach Gas riecht, machen Sie kein Licht an.'},
      {de:'die Gaszufuhr absperren', hi:'den Haupthahn zudrehen', bsp:'Sperren Sie bitte sofort die Gaszufuhr ab und öffnen Sie die Fenster.'},
      {de:'das Wasser absperren', hi:'vor jeder Arbeit an der Leitung', bsp:'Ich sperre kurz das Wasser ab, das dauert zehn Minuten.'},
      {de:'die Speichertemperatur erhöhen', hi:'gegen Legionellen, mindestens 60 Grad im Speicher', bsp:'Wir erhöhen die Speichertemperatur auf 60 Grad wegen der Legionellen.'},
      {de:'jemanden in die Anlage einweisen', hi:'zeigen, wie man sie bedient — gehört zur Abnahme', bsp:'Ich weise Sie jetzt in die Anlage ein, das dauert etwa zehn Minuten.'},
      {de:'Restpunkte festhalten', hi:'was noch fehlt, kommt schriftlich ins Protokoll', bsp:'Als Restpunkt halten wir fest: Abdeckung im Flur fehlt noch.'},
      {de:'das Protokoll unterschreiben lassen', hi:'ohne Unterschrift keine Abnahme', bsp:'Darf ich Sie bitten, hier das Übergabeprotokoll zu unterschreiben?'},
      {de:'das Wartungsprotokoll führen', hi:'Checkliste plus Messwerte, einmal im Jahr', bsp:'Das Wartungsprotokoll liegt in der Mappe an der Therme.'},
      {de:'der Schornsteinfeger kommt zur Abgasmessung', hi:'gesetzlich vorgeschrieben, Termin abstimmen', bsp:'Der Schornsteinfeger kommt nächste Woche zur Abgasmessung.'},
      {de:'das Ersatzteil ist nicht lieferbar', hi:'der häufigste Grund für Verzug', bsp:'Die Umwälzpumpe ist leider nicht lieferbar, Lieferzeit vier Wochen.'}
    ],
    dialoge:[
      {
        id:'elektro-stoerung',
        titel:'Die Störungsmeldung am Telefon',
        lvl:'B2',
        dauer:'5 Min',
        ort:'Es ist Montag, 8.20 Uhr. Frau Ottmann ruft im Büro an: Ihre Heizung wird nicht mehr richtig warm und macht Geräusche. Du nimmst die Störung auf und musst entscheiden, ob das heute noch raus muss.',
        schritte:[
          {amanda:'Guten Morgen, hier ist Ottmann. Meine Heizung macht so komische Geräusche und wird gar nicht mehr richtig warm.', hinweis:'Melde dich mit Firma und Namen und frag nach dem Geräusch — genau, nicht allgemein.', beispiel:'Guten Morgen, Frau Ottmann, Sanitär Kern, mein Name ist Amin Haddad. Können Sie das Geräusch beschreiben — eher ein Gluckern, ein Klopfen oder ein Pfeifen?', redemittel:['Guten Morgen, Firma …, mein Name ist …','Können Sie das Geräusch beschreiben?','Eher ein Gluckern oder ein Klopfen?']},
          {amanda:'So ein Gluckern, immer wenn die Heizung angeht. Und oben im Schlafzimmer bleibt der Heizkörper kalt.', hinweis:'Frag nach seit wann und ob es an allen Heizkörpern ist. Zeit und Umfang sind die zwei wichtigsten Angaben.', beispiel:'Seit wann ist das so? Und ist es nur der Heizkörper im Schlafzimmer oder sind mehrere kalt?', redemittel:['Seit wann ist das so?','Ist es nur ein Heizkörper oder mehrere?','Tritt es immer auf oder nur manchmal?']},
          {amanda:'Seit ungefähr einer Woche. Unten wird es warm, oben nicht. Ist das schlimm?', hinweis:'Sag deine Verdachtsdiagnose in Alltagssprache und schätze die Dringlichkeit ehrlich ein.', beispiel:'Das klingt nach Luft in der Anlage. Gefährlich ist das nicht, aber der Druck sollte kontrolliert werden. Wir kommen morgen, nicht als Notdienst.', redemittel:['Das klingt nach …','Gefährlich ist das nicht, aber …','Ein Notdienstfall ist das nicht, wir kommen …']},
          {amanda:'Und was kostet das dann?', hinweis:'Nenne Anfahrt und Stundensatz und sag klar, was du noch nicht sagen kannst.', beispiel:'Die Anfahrt kostet 45 Euro, der Stundensatz 68 Euro. Was am Ende nötig ist, kann ich erst nach der Prüfung vor Ort sagen.', redemittel:['Die Anfahrt kostet …','Der Stundensatz liegt bei …','Genaues kann ich erst vor Ort sagen.']},
          {amanda:'Gut, dann morgen. Wann genau kommen Sie denn?', hinweis:'Gib ein Zeitfenster, nicht eine Uhrzeit, und sag, was die Kundin vorbereiten soll.', beispiel:'Wir kommen morgen zwischen 9 und 12 Uhr. Bitte machen Sie den Heizungskeller zugänglich und halten Sie den Wartungsordner bereit.', redemittel:['Wir kommen morgen zwischen … und … Uhr.','Bitte halten Sie … bereit.','Der Kollege ruft vorher kurz an.']}
        ]
      },
      {
        id:'elektro-einweisung',
        titel:'Die Einweisung in die Wärmepumpe',
        lvl:'B2',
        dauer:'5 Min',
        ort:'Die Wärmepumpe ist eingebaut und läuft seit einer Stunde. Herr Doll, 71 Jahre, steht mit dir im Technikraum und soll die Anlage jetzt selbst bedienen können.',
        schritte:[
          {amanda:'Also, ehrlich gesagt verstehe ich von dem Ding gar nichts. Wo mache ich die denn an?', hinweis:'Nimm den Druck raus und sag zuerst, was er im Alltag überhaupt anfassen muss.', beispiel:'Das ist ganz normal, das erkläre ich Ihnen in Ruhe. Im Alltag brauchen Sie nur zwei Sachen: dieses Display hier und die Thermostate an den Heizkörpern.', redemittel:['Das erkläre ich Ihnen in Ruhe.','Im Alltag brauchen Sie nur …','Alles andere macht die Anlage selbst.']},
          {amanda:'Und was ist mit dieser Vorlauftemperatur? Da steht 42.', hinweis:'Erkläre den Fachbegriff mit einem Bild aus dem Alltag, ohne Fachwörter.', beispiel:'Die Vorlauftemperatur ist einfach, wie heiß das Wasser zu den Heizkörpern fließt. 42 Grad ist gut eingestellt — je niedriger, desto weniger Strom braucht die Anlage.', redemittel:['… ist einfach gesagt …','Sie können sich das so vorstellen: …','Je niedriger, desto …']},
          {amanda:'Und wenn mir das zu kalt wird im Winter?', hinweis:'Sag, was er selbst darf und wo er anrufen soll. Grenze ziehen.', beispiel:'Dann drehen Sie zuerst die Thermostate höher. Wenn es dann immer noch zu kühl bleibt, rufen Sie uns an — an der Heizkurve stellen wir das ein, nicht Sie.', redemittel:['Zuerst drehen Sie …','Wenn das nicht reicht, rufen Sie uns an.','Daran stellen bitte nur wir etwas ein.']},
          {amanda:'Und wenn da mal eine Störung angezeigt wird?', hinweis:'Nenne genau drei Schritte, nicht mehr.', beispiel:'Dann machen Sie drei Dinge: den Fehlercode abfotografieren, die Anlage nicht neu starten und uns anrufen. Der Code steht rechts unten im Display.', redemittel:['Dann machen Sie drei Dinge: …','Bitte starten Sie die Anlage nicht neu.','Der Fehlercode steht …']},
          {amanda:'Alles klar. Muss ich hier noch was unterschreiben?', hinweis:'Abnahme abschließen: Protokoll, Restpunkt, Unterschrift.', beispiel:'Ja, das Übergabeprotokoll. Als Restpunkt habe ich festgehalten: die Abdeckung an der Außeneinheit kommt nächste Woche. Unterschreiben Sie bitte hier unten.', redemittel:['Ja, das Übergabeprotokoll.','Als Restpunkt halte ich fest: …','Unterschreiben Sie bitte hier.']}
        ]
      },
      {
        id:'elektro-freischaltung',
        titel:'Die Freischaltung mit dem Kollegen',
        lvl:'B1',
        dauer:'4 Min',
        ort:'Ihr sollt im Verteiler eines Bürogebäudes einen Leitungsschutzschalter tauschen. Dein Kollege Ronny steht am Verteiler, du bist an der Unterverteilung im zweiten Stock.',
        schritte:[
          {amanda:'Ich bin am Hauptverteiler. Können wir anfangen?', hinweis:'Sag klar, welches Feld freigeschaltet werden soll — nie „das da".', beispiel:'Ja. Bitte Feld 2, Unterverteilung zweiter Stock, allpolig freischalten.', redemittel:['Bitte … freischalten.','Es geht um Feld …','Allpolig freischalten, bitte.']},
          {amanda:'Feld 2 ist raus.', hinweis:'Frag nach Regel zwei nach — gesichert und beschildert.', beispiel:'Danke. Ist es auch gegen Wiedereinschalten gesichert und das Schild hängt?', redemittel:['Ist es gegen Wiedereinschalten gesichert?','Hängt das Schild?','Bitte Schloss dran und beschildern.']},
          {amanda:'Schloss ist dran, Schild hängt. Der Schlüssel bleibt bei mir.', hinweis:'Jetzt kommt Regel drei: du misst und meldest das Ergebnis zurück.', beispiel:'Gut. Ich stelle jetzt die Spannungsfreiheit fest, allpolig. — Spannungsfreiheit festgestellt, ich quittiere.', redemittel:['Ich stelle jetzt die Spannungsfreiheit fest.','Spannungsfreiheit festgestellt.','Ich quittiere.']},
          {amanda:'Verstanden. Wie lange brauchst du?', hinweis:'Zeit nennen und sagen, was in der Zeit auf keinen Fall passieren darf.', beispiel:'Etwa zwanzig Minuten. Bitte auf keinen Fall wieder einschalten, bevor ich mich melde.', redemittel:['Ich brauche etwa …','Bitte auf keinen Fall einschalten, bevor …','Ich melde mich, wenn ich fertig bin.']},
          {amanda:'Alles klar, ich bleibe hier stehen.', hinweis:'Sag am Ende die Freigabe. Auch die muss eindeutig sein.', beispiel:'Ich bin fertig, Werkzeug ist raus, Abdeckung sitzt. Feld 2 kann wieder eingeschaltet werden.', redemittel:['Ich bin fertig, Werkzeug ist raus.','Die Abdeckung sitzt.','Feld … kann wieder eingeschaltet werden.']}
        ]
      }
    ],
    saetze:[
      {de:'Ich stelle jetzt die Spannungsfreiheit fest.', wann:'vor jeder Arbeit an der Anlage, laut und für den Kollegen hörbar'},
      {de:'Bitte auf keinen Fall wieder einschalten, bevor ich mich melde.', wann:'wenn du im Verteiler arbeitest und der Kollege woanders steht'},
      {de:'Freigeschaltet und gesichert — ich quittiere.', wann:'als Rückbestätigung einer Sicherheitsansage'},
      {de:'Können Sie beschreiben, wann genau das auftritt?', wann:'am Telefon, wenn die Kundin nur sagt, es geht nicht'},
      {de:'Das klingt nach Luft in der Anlage.', wann:'wenn du eine Verdachtsdiagnose nennst, ohne dich festzulegen'},
      {de:'Ein Notdienstfall ist das nicht, wir kommen morgen.', wann:'wenn du die Dringlichkeit einschätzt und einen Termin gibst'},
      {de:'Ich muss kurz das Wasser absperren, das dauert etwa zehn Minuten.', wann:'bevor du in der Wohnung anfängst — immer vorher ankündigen'},
      {de:'Die Werte liegen alle im Sollbereich.', wann:'nach der Messung, gegenüber Kollege oder Kundin'},
      {de:'Das kann ich Ihnen erst nach der Prüfung vor Ort sagen.', wann:'wenn nach dem Preis gefragt wird und du es noch nicht weißt'},
      {de:'Wenn es nach Gas riecht: kein Licht anmachen, Fenster auf, raus.', wann:'am Telefon bei Gasgeruch — kurze Sätze, klare Reihenfolge'},
      {de:'Sie können sich das so vorstellen: …', wann:'wenn du einen Fachbegriff für einen Laien übersetzt'},
      {de:'Daran stellen bitte nur wir etwas ein.', wann:'bei der Einweisung, wenn du eine Grenze ziehst'},
      {de:'Als Restpunkt halte ich fest: …', wann:'bei der Abnahme, wenn noch etwas offen ist'},
      {de:'Das Ersatzteil ist leider nicht lieferbar, ich schlage ein gleichwertiges Teil vor.', wann:'wenn du einen Lieferengpass gegenüber dem Kunden vertreten musst'},
      {de:'Fertig geworden ist heute …, offen ist noch …', wann:'bei der Übergabe an den nächsten Trupp'}
    ],
    ueb:[
      {typ:'wahl', f:'Welche Regel kommt direkt nach dem Freischalten?', o:['Erden und kurzschließen','Gegen Wiedereinschalten sichern','Spannungsfreiheit feststellen'], l:1, e:'Die Reihenfolge ist fest: freischalten, gegen Wiedereinschalten sichern, Spannungsfreiheit feststellen, erden und kurzschließen, benachbarte Teile abdecken. Erst das Schloss, dann das Messgerät.'},
      {typ:'wahl', f:'Die Kundin sagt: „Der Strom geht immer weg." Was fragst du zuerst?', o:['Wie alt ist das Haus?','Wann genau geht er weg und was läuft dann gerade?','Haben Sie schon einen anderen Betrieb gefragt?'], l:1, e:'Eine Störung wird über Bedingung und Häufigkeit eingegrenzt. „Immer wenn die Waschmaschine läuft" ist die halbe Diagnose.'},
      {typ:'wahl', f:'Du erklärst einer Kundin die Vorlauftemperatur. Welcher Satz ist gut?', o:['Der Vorlauf wird über die Heizkurve witterungsgeführt geregelt.','Das ist einfach gesagt, wie heiß das Wasser zu den Heizkörpern fließt.','Steht alles in der Betriebsanleitung.'], l:1, e:'Beim Einweisen übersetzt du Fachsprache in Alltagssprache. Das Fachwort darfst du danach nennen — aber erst nach dem Bild.'},
      {typ:'luecke', f:'Ich stelle jetzt allpolig die ___ fest.', l:'Spannungsfreiheit', e:'Die feste Wendung heißt: die Spannungsfreiheit feststellen. Nicht „prüfen ob Strom da ist".'},
      {typ:'luecke', f:'Der Verteiler ist gegen ___ gesichert.', l:'Wiedereinschalten', e:'Regel zwei heißt wörtlich: gegen Wiedereinschalten sichern. Schloss dran, Schild hängt.'},
      {typ:'luecke', f:'Alle Messwerte liegen im ___.', l:'Sollbereich', e:'Im Sollbereich liegen heißt: der Wert ist so, wie er sein soll. Das ist der Satz für das Prüfprotokoll.'},
      {typ:'luecke', f:'Nach dem hydraulischen ___ wird auch der letzte Heizkörper warm.', l:'Abgleich', e:'Der hydraulische Abgleich verteilt das Wasser gerecht auf alle Heizkörper. Er ist bei Wärmepumpen Pflicht.'},
      {typ:'bausteine', l:'Der FI löst nur aus, wenn die Waschmaschine läuft.', teile:['Der','FI','löst','nur','aus','wenn','die','Waschmaschine','läuft'], e:'So beschreibt man einen Fehler richtig: Symptom, dann die Bedingung im wenn-Satz. Im Nebensatz steht das Verb hinten: … läuft.'},
      {typ:'bausteine', l:'Ich muss kurz das Wasser absperren.', teile:['Ich','muss','kurz','das','Wasser','absperren'], e:'Bei Modalverb steht der Infinitiv ganz hinten. Das trennbare ab- bleibt am Verb: absperren.'},
      {typ:'bausteine', l:'Als Restpunkt halte ich die fehlende Abdeckung fest.', teile:['Als','Restpunkt','halte','ich','die','fehlende','Abdeckung','fest'], e:'Trennbares Verb: festhalten wird zu halte … fest. Der Vorsatz steht am Satzende.'},
      {typ:'paare', p:[['der Isolationswiderstand','sagt, ob die Leitung dicht ist — in Megaohm'],['die Schleifenimpedanz','sagt, ob schnell genug abgeschaltet wird'],['die Auslösezeit','sagt, wie schnell der RCD kommt — in Millisekunden'],['die Vorlauftemperatur','wie heiß das Wasser zum Heizkörper geht'],['die Heizkurve','wie stark die Heizung auf Kälte draußen reagiert']], e:'Diese fünf Begriffe stehen in jedem Protokoll und in jedem Kundengespräch. Lerne zu jedem einen Erklärsatz für Laien mit.'},
      {typ:'paare', p:[['Gasgeruch','Fenster auf, kein Licht anmachen, raus, dann anrufen'],['Legionellen','Speichertemperatur auf mindestens 60 Grad'],['CO-Verdacht','sofort lüften und die Feuerstätte abschalten'],['heiße Oberfläche','Verbrennungsgefahr, erst abkühlen lassen']], e:'Bei jeder Gefahr gehört ein Satz dazu, was der Kunde sofort tun soll. Nur warnen reicht nicht.'},
      {typ:'hoeren', text:'Guten Morgen, Firma Kern. Also, seit Samstag fliegt bei uns immer die Sicherung raus, aber nur abends, wenn der Trockner läuft. Tagsüber ist alles normal.', f:'Wann tritt der Fehler auf?', o:['immer, den ganzen Tag','abends, wenn der Trockner läuft','nur am Wochenende'], l:1, e:'Achte am Telefon auf die Bedingung. „Nur wenn …" ist die wichtigste Information für die Fehlersuche.'},
      {typ:'hoeren', text:'Feld 2 ist freigeschaltet, Schloss ist dran, Schild hängt. Der Schlüssel bleibt bei mir. Bitte melde dich, wenn du fertig bist.', f:'Wer hat den Schlüssel?', o:['der Kollege am Hauptverteiler','du selbst','der Hausmeister'], l:0, e:'Der Schlüssel bleibt immer bei dem, der freigeschaltet hat. Nur so kann niemand versehentlich einschalten.'},
      {typ:'sprechen', f:'Sag die Sicherheitsansage: Ich stelle jetzt allpolig die Spannungsfreiheit fest.', l:'Ich stelle jetzt allpolig die Spannungsfreiheit fest', e:'Sprich langsam und laut. Sicherheitsansagen macht man nicht nebenbei — der Kollege muss dich hören und antworten können.'},
      {typ:'sprechen', f:'Sag freundlich: Ich muss kurz das Wasser absperren, das dauert etwa zehn Minuten.', l:'Ich muss kurz das Wasser absperren', e:'Das Wort kurz und die Zeitangabe machen den Unterschied. Kunden akzeptieren fast alles, wenn sie wissen, wie lange es dauert.'},
      {typ:'ordnen', l:['Ich schalte die Anlage frei.','Ich sichere gegen Wiedereinschalten.','Ich stelle die Spannungsfreiheit fest.','Ich erde und schließe kurz.','Ich decke benachbarte Teile ab.'], f:'Bring die fünf Sicherheitsregeln in die richtige Reihenfolge.', e:'Diese Reihenfolge ist keine Empfehlung, sondern Vorschrift. Sie wird laut angesagt und vom Kollegen quittiert.'},
      {typ:'artikel', w:'Stromlaufplan', l:'der', e:'der Plan, also der Stromlaufplan, der Klemmenplan, der Installationsplan. Das letzte Wort im Kompositum bestimmt den Artikel.'},
      {typ:'artikel', w:'Wärmepumpe', l:'die', e:'die Pumpe, also die Wärmepumpe, die Umwälzpumpe. Wörter auf -e sind sehr oft feminin.'}
    ],
    schreiben:{
      auf:'Schreibe das Übergabeprotokoll für die Wärmepumpe bei Herrn Doll, Wilhelmstraße 4.',
      punkte:['Was wurde eingebaut und in Betrieb genommen','Welche Messwerte hast du aufgenommen','Worüber hast du den Kunden eingewiesen','Welche Restpunkte bleiben offen und bis wann'],
      hilfe:'Schreibe sachlich und im Passiv oder Perfekt — so steht es in echten Protokollen. Nutze diese Anfänge: „Am … wurde … in Betrieb genommen." · „Folgende Werte wurden aufgenommen: …" · „Der Kunde wurde eingewiesen in …" · „Als Restpunkt wird festgehalten: …". Nenne immer Datum, Uhrzeit und Wert mit Einheit: 42 Grad Vorlauf, 22 Millisekunden Auslösezeit. Am Ende ein Satz zur Unterschrift. Sechs bis acht Zeilen reichen.'
    }
  },

  /* ===================== 6 · METALL UND MECHATRONIK ===================== */
  {
    id:'metall',
    t:'Metall und Mechatronik',
    unter:'Metallbau, Schweiß- und Verbindungstechnik, Kfz-Mechatronik, Fahrzeugtechnik',
    lvl:'A2–B2',
    pruef:'Keine Sprachprüfung — die Kompetenz wird von den Kursträgern per Szenario-Methode im BAMF-Spezialkurs Gewerbe-Technik bescheinigt. Fachlich zählt die Schweißerprüfung nach DIN EN ISO 9606. Einschlägig: Deutsch-Test für den Beruf A2·B1·B2',
    warum:'In der Schweiß- und Verbindungstechnik haben 60 Prozent der Beschäftigten eine Einwanderungsgeschichte — der höchste Einzelwert der Auswertung von 2024. In der Metallbearbeitung sind es 37 Prozent, im Metallbau 30 Prozent, und 42 Prozent der Betriebe in der Metallerzeugung können Stellen nicht besetzen. Weil die Qualifikation über Normen international vergleichbar ist, ist die Sprache hier oft der einzige Engpass. Einstieg geht ab A2 bis B1, für Ausbildung und Qualifizierung brauchst du B2. Für die Kfz-Mechatronik hat das BAMF als einzigem gewerblichen Beruf ein vollständiges Sprachkonzept veröffentlicht — die Beispiele unten stammen direkt daraus.',
    handlungen:[
      {t:'Die technische Zeichnung lesen', e:'Ansichten, Schnitte, Maße, Toleranzen und Schweißnahtsymbole verstehen und mit dem Kollegen abgleichen, bevor du schneidest.', lvl:'B1'},
      {t:'Die Schweißanweisung einhalten', e:'Aus der WPS Verfahren, Zusatzwerkstoff, Vorwärmtemperatur und Lagenaufbau herauslesen und laut bestätigen.', lvl:'B2'},
      {t:'Maße ansagen und Abweichungen melden', e:'Mit Messschieber und Lehre gemessene Werte nennen, die Toleranz vergleichen und sagen, wenn etwas nicht passt.', lvl:'A2'},
      {t:'Nahtfehler benennen und Nacharbeit besprechen', e:'Pore, Riss, Einbrandkerbe und Verzug erkennen, das Ergebnis der Sichtprüfung entgegennehmen und die Nacharbeit abstimmen.', lvl:'B1'},
      {t:'Heißarbeiten anmelden', e:'Schweißerlaubnisschein ausfüllen lassen, Brandwache abstimmen, Absaugung und Funkenflug ansprechen.', lvl:'B1'},
      {t:'Den Werkstattauftrag mit Abkürzungen lesen', e:'Kürzel wie VLI für Scheinwerfer vorn links oder WD für Wartungsdienst richtig auflösen und im Zweifel nachfragen.', lvl:'B1'},
      {t:'Laienbeschreibungen in eine Diagnose übersetzen', e:'Aus „die Räder machen Geräusche" wird „Räder auswuchten" — und aus dem Kundensatz eine Prüfreihenfolge.', lvl:'B2'},
      {t:'Fehlercodes auslesen und mit Sollwerten vergleichen', e:'Diagnosedaten am Gerät auslesen, mit dem Sollwert vergleichen und das Messprotokoll erstellen.', lvl:'B1'},
      {t:'Nach der Probefahrt beraten', e:'Zustand, Art und Umfang der Mängel und die Kosten mitteilen und die Vor- und Nachteile von zwei Reparaturlösungen gegenüberstellen.', lvl:'B2'},
      {t:'Dokumentieren', e:'Inspektionsheft ausfüllen mit Kilometerstand und Profiltiefe, verbrauchtes Material für die Rechnung festhalten, Berichtsheft täglich führen.', lvl:'B1'}
    ],
    chunks:[
      {de:'die technische Zeichnung lesen', hi:'Ansichten, Schnitte und Maße verstehen, bevor du anfängst', bsp:'Ich lese die technische Zeichnung noch einmal, bevor wir zuschneiden.'},
      {de:'das Schweißnahtsymbol steht für', hi:'das kleine Zeichen an der Bezugslinie sagt, welche Naht gefordert ist', bsp:'Das Schweißnahtsymbol steht hier für eine Kehlnaht a4.'},
      {de:'eine Kehlnaht schweißen', hi:'die häufigste Naht, im Winkel zwischen zwei Blechen', bsp:'Die Kehlnaht schweiße ich in zwei Lagen.'},
      {de:'die Schweißanweisung einhalten', hi:'die WPS gibt Verfahren, Draht und Temperatur vor', bsp:'Wir halten uns genau an die Schweißanweisung.'},
      {de:'auf 120 Grad vorwärmen', hi:'die Vorwärmtemperatur steht in der WPS und wird gemessen', bsp:'Das Bauteil ist auf 120 Grad vorgewärmt.'},
      {de:'die Zwischenlagentemperatur prüfen', hi:'zwischen zwei Lagen darf es nicht zu heiß sein', bsp:'Bitte vor der Decklage die Zwischenlagentemperatur prüfen.'},
      {de:'im MAG-Verfahren schweißen', hi:'dazu: WIG für dünnes und feines, E-Hand auf der Baustelle', bsp:'Das schweißen wir im MAG-Verfahren, Draht 1,2 Millimeter.'},
      {de:'das Schutzgas ist alle', hi:'die Flasche ist leer — Standardsatz in der Halle', bsp:'Das Schutzgas ist alle, ich hole eine neue Flasche.'},
      {de:'die Wurzel liegt sauber', hi:'die erste Lage ist gut durchgeschweißt', bsp:'Die Wurzel liegt sauber, ich kann die Decklage setzen.'},
      {de:'eine Pore im Nahtbild haben', hi:'kleines Gasloch — häufigster Fehler bei Zugluft', bsp:'Hier ist eine Pore, die muss ich ausschleifen.'},
      {de:'eine Einbrandkerbe zeigen', hi:'Kerbe am Nahtrand, entsteht bei zu viel Strom', bsp:'An der Oberseite zeigt sich eine Einbrandkerbe.'},
      {de:'sich verziehen', hi:'das Bauteil zieht sich durch die Wärme krumm', bsp:'Der Rahmen hat sich beim Schweißen verzogen.'},
      {de:'die Naht nacharbeiten', hi:'ausschleifen und neu schweißen', bsp:'Die Naht muss ich nacharbeiten, sie hält die Sichtprüfung nicht.'},
      {de:'mit dem Messschieber messen', hi:'auf Zehntel genau, Ablesen üben', bsp:'Mit dem Messschieber gemessen sind es 12,4 Millimeter.'},
      {de:'in der Toleranz liegen', hi:'die Abweichung ist erlaubt', bsp:'12,4 statt 12,5 — das liegt noch in der Toleranz.'},
      {de:'die Heißarbeitserlaubnis einholen', hi:'auch Schweißerlaubnisschein, Pflicht außerhalb der Werkstatt', bsp:'Ohne Heißarbeitserlaubnis darfst du hier nicht schweißen.'},
      {de:'eine Brandwache stellen', hi:'jemand bleibt nach der Arbeit stehen und passt auf', bsp:'Nach dem Schweißen stellen wir eine Stunde eine Brandwache.'},
      {de:'die Absaugung einschalten', hi:'wegen Schweißrauch — nicht verhandelbar', bsp:'Vor dem ersten Zünden die Absaugung einschalten.'},
      {de:'Funkenflug abschirmen', hi:'mit Schweißerdecke oder Wand, gegen Brandgefahr', bsp:'Wir schirmen den Funkenflug mit einer Decke ab.'},
      {de:'den Werkstattauftrag lesen', hi:'da steht, was gemacht werden soll — oft in Kürzeln', bsp:'Auf dem Werkstattauftrag steht VLI und WD.'},
      {de:'VLI heißt Scheinwerfer vorn links', hi:'typisches Kürzel im Kfz-Auftrag', bsp:'VLI heißt Scheinwerfer vorn links, den wechsle ich zuerst.'},
      {de:'der letzte WD war bei 60.000', hi:'WD ist der Wartungsdienst, die Inspektion', bsp:'Der letzte WD war bei 60.000 Kilometern.'},
      {de:'das Fahrzeug aufbocken', hi:'auf die Hebebühne oder den Wagenheber', bsp:'Ich bocke das Fahrzeug auf und schaue mir die Bremsen an.'},
      {de:'die Räder auswuchten', hi:'das Ergebnis, wenn der Kunde sagt: die Räder machen Geräusche', bsp:'Die Räder müssen ausgewuchtet werden, dann ist das Vibrieren weg.'},
      {de:'die Batterie abklemmen', hi:'vor Arbeiten an der Elektrik, immer erst der Minuspol', bsp:'Zuerst die Batterie abklemmen, dann den Stecker ziehen.'},
      {de:'den Fehlerspeicher auslesen', hi:'mit dem Diagnosegerät, gibt einen Fehlercode', bsp:'Ich habe den Fehlerspeicher ausgelesen: P0171.'},
      {de:'mit dem Sollwert vergleichen', hi:'gemessener Wert gegen Vorgabe des Herstellers', bsp:'Der Messwert liegt bei 0,8 Volt, ich vergleiche mit dem Sollwert.'},
      {de:'eine Probefahrt machen', hi:'vor und nach der Reparatur, mit Protokoll', bsp:'Ich mache eine kurze Probefahrt, dann weiß ich mehr.'},
      {de:'die Profiltiefe messen', hi:'gehört ins Inspektionsheft, gesetzlich mindestens 1,6 Millimeter', bsp:'Die Profiltiefe vorn liegt bei 3 Millimetern.'},
      {de:'das Inspektionsheft ausfüllen', hi:'Kilometerstand, Datum, Stempel', bsp:'Das Inspektionsheft habe ich ausgefüllt und gestempelt.'},
      {de:'den Spurstangenkopf tauschen', hi:'langes Wort, drei Teile: Spur - Stange - Kopf', bsp:'Der Spurstangenkopf hat Spiel, der muss getauscht werden.'},
      {de:'die Scheinwerferreinigungsanlage prüfen', hi:'zerlege das Wort in Scheinwerfer - Reinigung - Anlage', bsp:'Die Scheinwerferreinigungsanlage funktioniert nicht mehr.'},
      {de:'Verspritzen vermeiden', hi:'so klingt Sicherheitssprache: Infinitiv am Ende, kein Subjekt', bsp:'Beim Ab- und Umfüllen Verspritzen vermeiden!'},
      {de:'Schutzbrille tragen', hi:'auch dieser Merksatz steht im Infinitiv an der Wand', bsp:'Beim Schleifen immer Schutzbrille tragen!'},
      {de:'einen Kostenvoranschlag machen', hi:'was die Reparatur voraussichtlich kostet', bsp:'Ich mache Ihnen einen Kostenvoranschlag, bevor wir anfangen.'}
    ],
    dialoge:[
      {
        id:'metall-probefahrt',
        titel:'Das Kundengespräch nach der Probefahrt',
        lvl:'B2',
        dauer:'5 Min',
        ort:'Es ist 16 Uhr, Frau Kaltenbach holt ihren zwölf Jahre alten Kombi ab. Du bist Probe gefahren: Die Bremsscheiben hinten sind stark eingelaufen, außerdem hat der Spurstangenkopf Spiel.',
        schritte:[
          {amanda:'Und? Was ist es denn nun? Machen Geräusche halt, die Räder.', hinweis:'Sag zuerst, was du gemacht hast, dann den Befund — ohne Fachwörter zu häufen.', beispiel:'Ich bin zwanzig Minuten Probe gefahren und habe den Wagen danach aufgebockt. Zwei Sachen sind auffällig: die Bremsen hinten und die Lenkung.', redemittel:['Ich bin … Probe gefahren.','Zwei Sachen sind auffällig: …','Der Reihe nach: …']},
          {amanda:'Die Bremsen? Die waren doch letztes Jahr erst dran.', hinweis:'Übersetze den Fachbegriff und nenne den Messwert dazu.', beispiel:'Die Beläge waren dran, die Scheiben nicht. Die Scheibe ist die runde Fläche, auf die der Belag drückt — sie ist jetzt 1,5 Millimeter unter dem Mindestmaß.', redemittel:['… ist einfach gesagt …','Gemessen habe ich …','Das Mindestmaß liegt bei …']},
          {amanda:'Und was heißt das jetzt? Muss das sofort sein?', hinweis:'Trenne klar: sicherheitsrelevant oder nicht. Sag es geradeheraus.', beispiel:'Die Bremse ist sicherheitsrelevant, die sollte heute gemacht werden. Der Spurstangenkopf hat Spiel, das können wir bis zur nächsten Inspektion beobachten.', redemittel:['Das ist sicherheitsrelevant.','Das sollte heute gemacht werden.','Das können wir beobachten.']},
          {amanda:'Gibt es da eine günstigere Möglichkeit?', hinweis:'Stelle zwei Lösungen mit Vor- und Nachteilen gegenüber — genau das verlangt der Beruf.', beispiel:'Es gibt zwei Wege. Original vom Hersteller: 420 Euro, zwei Jahre Garantie. Ein Markenteil aus dem freien Handel: 290 Euro, ein Jahr Garantie, Qualität ist gut. Der Unterschied ist vor allem der Preis und die Garantie.', redemittel:['Es gibt zwei Wege.','Der Vorteil ist …, der Nachteil ist …','Der Unterschied ist vor allem …']},
          {amanda:'Dann nehmen wir das günstigere. Wann ist der Wagen fertig?', hinweis:'Nenne Zeit, Kosten und was du dokumentierst.', beispiel:'Morgen bis 15 Uhr. Ich schreibe Ihnen den Kostenvoranschlag über 290 Euro plus Arbeitszeit und trage den Spurstangenkopf als Hinweis ins Inspektionsheft ein.', redemittel:['Morgen bis … Uhr.','Ich schreibe Ihnen einen Kostenvoranschlag über …','Ich trage … ins Inspektionsheft ein.']}
        ]
      },
      {
        id:'metall-nacharbeit',
        titel:'Die Naht hält die Sichtprüfung nicht',
        lvl:'B1',
        dauer:'4 Min',
        ort:'Freitagvormittag in der Halle. Der Meister Bogdan kommt mit dem Prüfbericht der Sichtprüfung an deinen Platz: An der Konsole, die du gestern geschweißt hast, sind zwei Poren und eine Einbrandkerbe gefunden worden.',
        schritte:[
          {amanda:'Die Sichtprüfung an der Konsole ist durch. Zwei Poren und eine Einbrandkerbe. Schau mal her.', hinweis:'Nimm den Befund an, ohne dich zu rechtfertigen, und frag nach der Stelle.', beispiel:'Okay, das schaue ich mir an. Sind die Poren in der Wurzel oder in der Decklage?', redemittel:['Okay, das schaue ich mir an.','Wo genau sitzen sie?','In der Wurzel oder in der Decklage?']},
          {amanda:'Beide in der Decklage. Woran lag das deiner Meinung nach?', hinweis:'Nenne eine sachliche Ursache. Das ist keine Schuldfrage, sondern Fehlersuche.', beispiel:'Ich vermute, es lag am Schutzgas. Das Tor stand offen, da war Zug an der Stelle. Und die Flasche war fast leer.', redemittel:['Ich vermute, es lag an …','Möglich ist auch, dass …','Ich habe gemerkt, dass …']},
          {amanda:'Kann sein. Wie arbeitest du das jetzt nach?', hinweis:'Beschreibe die Nacharbeit in der richtigen Reihenfolge.', beispiel:'Ich schleife die Stellen aus, prüfe die Vorwärmtemperatur, schweiße die Decklage neu und melde mich dann zur erneuten Sichtprüfung.', redemittel:['Ich schleife … aus.','Danach schweiße ich …','Dann melde ich mich zur Prüfung.']},
          {amanda:'Gut. Und was machen wir, damit das nicht wieder passiert?', hinweis:'Mach einen Vorschlag mit Begründung — das ist B2 und macht den Unterschied.', beispiel:'Ich würde vorschlagen, dass wir an dem Platz eine Stellwand aufstellen. Dann ist der Zug weg und das Schutzgas bleibt an der Naht.', redemittel:['Ich würde vorschlagen, dass …','Dann hätten wir den Vorteil, dass …','Wäre das für dich in Ordnung?']},
          {amanda:'Machen wir. Wann bist du fertig?', hinweis:'Realistische Zeit nennen und sagen, was danach ansteht.', beispiel:'Bis 13 Uhr bin ich durch. Danach trage ich den Materialverbrauch ins System ein.', redemittel:['Bis … Uhr bin ich durch.','Danach trage ich … ein.','Wenn etwas dazwischenkommt, sage ich Bescheid.']}
        ]
      },
      {
        id:'metall-heissarbeit',
        titel:'Heißarbeiten auf der Baustelle anmelden',
        lvl:'B1',
        dauer:'4 Min',
        ort:'Ihr sollt in einer Lagerhalle ein Geländer anschweißen. Die Sicherheitsbeauftragte Frau Reiners kommt an eure Arbeitsstelle, bevor ihr das erste Mal zündet.',
        schritte:[
          {amanda:'Guten Tag. Sie wollen hier schweißen? Haben Sie einen Erlaubnisschein?', hinweis:'Antworte klar und sag, was du hast und was noch fehlt.', beispiel:'Guten Tag. Ja, wir schweißen das Geländer an. Den Schweißerlaubnisschein hat mein Meister beantragt, unterschrieben ist er noch nicht.', redemittel:['Ja, wir schweißen …','Den Erlaubnisschein hat … beantragt.','Unterschrieben ist er noch nicht.']},
          {amanda:'Dann fangen Sie bitte nicht an. Was ist denn hier im Umkreis alles brennbar?', hinweis:'Schau dich um und nenne konkret, was du siehst.', beispiel:'Direkt neben uns stehen Kartonpaletten, und über uns läuft eine Kabeltrasse. Beides ist brennbar.', redemittel:['Direkt neben uns steht …','Über uns läuft …','Beides ist brennbar.']},
          {amanda:'Und wie sichern Sie das ab?', hinweis:'Nenne drei Maßnahmen, konkret und in Reihenfolge.', beispiel:'Wir räumen die Paletten fünf Meter weg, schirmen den Funkenflug mit einer Schweißerdecke ab und stellen den Feuerlöscher direkt daneben.', redemittel:['Wir räumen … weg.','Wir schirmen den Funkenflug mit … ab.','Der Feuerlöscher steht direkt daneben.']},
          {amanda:'Und nach der Arbeit?', hinweis:'Brandwache ansprechen — mit Dauer.', beispiel:'Nach der Arbeit bleibt ein Kollege eine Stunde als Brandwache und geht die Stelle noch zweimal ab.', redemittel:['Nach der Arbeit bleibt … als Brandwache.','Für mindestens … Stunde.','Er geht die Stelle noch einmal ab.']},
          {amanda:'Gut. Ich hole die Unterschrift, in zwanzig Minuten haben Sie den Schein.', hinweis:'Bestätige und sag, was ihr in der Zeit macht.', beispiel:'Danke. Bis dahin räumen wir und schalten die Absaugung an. Gezündet wird erst, wenn der Schein da ist.', redemittel:['Danke, bis dahin …','Gezündet wird erst, wenn …','Wir melden uns, wenn wir anfangen.']}
        ]
      }
    ],
    saetze:[
      {de:'Ich schaue mir die Zeichnung noch einmal an, bevor ich schneide.', wann:'wenn du unsicher bist — nachfragen kostet weniger als ein falsches Teil'},
      {de:'Steht die Vorwärmtemperatur in der Schweißanweisung?', wann:'vor dem Zünden, wenn die WPS nicht am Platz liegt'},
      {de:'Gemessen sind es 12,4 Millimeter, das liegt noch in der Toleranz.', wann:'wenn du einen Messwert ansagst'},
      {de:'Das passt so nicht, die Abweichung ist zu groß.', wann:'wenn du ein Teil zurückweisen musst — sachlich, ohne Vorwurf'},
      {de:'Ich vermute, es lag am Schutzgas.', wann:'in der Fehlersuche, wenn du eine Ursache nennst, ohne dich festzulegen'},
      {de:'Ich schleife die Stelle aus und schweiße neu.', wann:'wenn du die Nacharbeit ankündigst'},
      {de:'Ohne Erlaubnisschein fangen wir nicht an.', wann:'bei Heißarbeiten außerhalb der Werkstatt'},
      {de:'Beim Schleifen immer Schutzbrille tragen!', wann:'als Warnung an einen Kollegen — Infinitiv, kurz, laut'},
      {de:'Was heißt WD auf dem Auftrag genau?', wann:'wenn du eine Abkürzung nicht kennst — im Kfz-Auftrag völlig normal'},
      {de:'Ich habe den Fehlerspeicher ausgelesen, der Code lautet …', wann:'wenn du dem Meister oder der Hotline den Befund meldest'},
      {de:'Ich bin Probe gefahren und danach aufgebockt.', wann:'zu Beginn des Kundengesprächs, um zu zeigen, was du geprüft hast'},
      {de:'Das ist sicherheitsrelevant, das sollte heute gemacht werden.', wann:'wenn du eine Reparatur als dringend einstufst'},
      {de:'Es gibt zwei Wege — der Vorteil ist …, der Nachteil ist …', wann:'wenn du dem Kunden Reparaturlösungen gegenüberstellst'},
      {de:'Da ist mir ein Fehler passiert, ich melde das sofort.', wann:'eigene Fehler früh sagen — das schützt dich und den Ruf der Werkstatt'},
      {de:'Kann ich das noch einmal wiederholen, damit nichts schiefgeht?', wann:'wenn du einen Auftrag in der lauten Halle nur halb verstanden hast'}
    ],
    ueb:[
      {typ:'wahl', f:'Auf dem Werkstattauftrag steht: „VLI wechseln, letzter WD 60.000". Was ist zu tun?', o:['Ventil links innen prüfen, Werkstattdienst','Scheinwerfer vorn links wechseln, letzte Inspektion bei 60.000','Vorderachse links instandsetzen, Werksdienst'], l:1, e:'VLI heißt Scheinwerfer vorn links, WD heißt Wartungsdienst, also Inspektion. Kürzel stehen in jedem Auftrag — frag im Zweifel den Meister, rate nie.'},
      {typ:'wahl', f:'Die Kundin sagt: „Die Räder machen Geräusche." Was steht wahrscheinlich am Ende auf dem Auftrag?', o:['Räder auswuchten','Bremsflüssigkeit wechseln','Klimaanlage warten'], l:0, e:'Deine Aufgabe ist, aus der Laienbeschreibung eine Diagnose zu machen. Geräusche und Vibrieren beim Fahren heißen meistens: Räder auswuchten.'},
      {typ:'wahl', f:'Welcher Satz ist echte Sicherheitssprache aus dem Betrieb?', o:['Du solltest lieber nicht spritzen.','Beim Ab- und Umfüllen Verspritzen vermeiden!','Es wäre gut, wenn nichts danebengeht.'], l:1, e:'Sicherheitssprache steht im imperativischen Infinitiv: kein Subjekt, das Verb ganz hinten. Genau so hängt es an der Wand und steht im Betriebshandbuch.'},
      {typ:'luecke', f:'Das Bauteil ist auf 120 Grad ___.', l:'vorgewärmt', e:'Die Vorwärmtemperatur steht in der Schweißanweisung. Partizip: vorwärmen wird zu vorgewärmt.'},
      {typ:'luecke', f:'Die Naht muss ich ___, sie hält die Sichtprüfung nicht.', l:'nacharbeiten', e:'nacharbeiten heißt: ausschleifen und neu schweißen. Das Wort brauchst du in jedem Gespräch über Nahtfehler.'},
      {typ:'luecke', f:'Zuerst die Batterie ___, dann den Stecker ziehen.', l:'abklemmen', e:'Vor Arbeiten an der Elektrik immer erst abklemmen, zuerst der Minuspol. Trennbares Verb: ich klemme ab.'},
      {typ:'luecke', f:'Die ___ vorn liegt bei 3 Millimetern.', l:'Profiltiefe', e:'Die Profiltiefe des Reifens gehört ins Inspektionsheft. Gesetzlich sind mindestens 1,6 Millimeter verlangt.'},
      {typ:'bausteine', l:'Die Räder müssen ausgewuchtet werden.', teile:['Die','Räder','müssen','ausgewuchtet','werden'], e:'Passiv mit Modalverb: müssen plus Partizip plus werden. So klingt es in der Werkstatt und auf dem Auftrag.'},
      {typ:'bausteine', l:'Beim Ab- und Umfüllen Verspritzen vermeiden!', teile:['Beim','Ab-','und','Umfüllen','Verspritzen','vermeiden'], e:'Der imperativische Infinitiv: kein ich, kein du, das Verb steht als Infinitiv am Ende. Diese Form musst du lesen können — sie hängt überall.'},
      {typ:'bausteine', l:'Ich vermute, dass es am Schutzgas lag.', teile:['Ich','vermute','dass','es','am','Schutzgas','lag'], e:'Mit dass-Satz sagst du eine Vermutung höflich. Das Verb lag steht ganz hinten.'},
      {typ:'paare', p:[['die Pore','kleines Gasloch in der Naht'],['der Riss','durchgehender Bruch im Material'],['die Einbrandkerbe','Kerbe am Nahtrand, meist zu viel Strom'],['der Verzug','das Bauteil zieht sich durch Wärme krumm'],['der Bindefehler','die Lagen sind nicht miteinander verschmolzen']], e:'Diese Begriffe kommen in jedem Prüfbericht vor. Lerne zu jedem eine mögliche Ursache dazu, dann kannst du im Gespräch mitreden.'},
      {typ:'paare', p:[['MAG','Draht plus aktives Schutzgas, schnell, für Baustahl'],['WIG','sehr sauber, für dünne Bleche und Edelstahl'],['E-Hand','Stabelektrode, gut im Freien und bei Wind'],['der Messschieber','misst Maße auf Zehntel genau']], e:'Verfahren und Werkzeug musst du benennen können, bevor du über die Arbeit sprichst. Sage immer auch, warum ihr genau dieses Verfahren nehmt.'},
      {typ:'hoeren', text:'Also, der Wagen ist fertig. Die Bremsscheiben hinten waren unter dem Mindestmaß, die haben wir getauscht. Der Spurstangenkopf hat leichtes Spiel, das beobachten wir bis zur nächsten Inspektion. Profiltiefe vorn 3 Millimeter.', f:'Was wurde heute repariert?', o:['der Spurstangenkopf','die Bremsscheiben hinten','die Reifen vorn'], l:1, e:'Achte auf den Unterschied zwischen „haben wir getauscht" und „das beobachten wir". Nur das Erste ist erledigt.'},
      {typ:'hoeren', text:'Vor dem Schweißen bitte die Absaugung einschalten, die Vorwärmtemperatur mit dem Anlegethermometer prüfen und den Funkenflug mit der Decke abschirmen. Die Brandwache übernimmt nach Feierabend Kollege Pilz.', f:'Wer macht die Brandwache?', o:['du selbst','Kollege Pilz','die Sicherheitsbeauftragte'], l:1, e:'In Sicherheitsanweisungen steht am Ende fast immer, wer wofür zuständig ist. Diesen Teil solltest du dir immer notieren.'},
      {typ:'sprechen', f:'Sag den Messwert an: Gemessen sind es 12,4 Millimeter, das liegt noch in der Toleranz.', l:'Gemessen sind es 12,4 Millimeter', e:'Sprich die Zahl deutlich und mach vor der Einheit eine kleine Pause. In der lauten Halle geht sonst genau die Zahl verloren.'},
      {typ:'sprechen', f:'Sag zur Kundin: Das ist sicherheitsrelevant, das sollte heute gemacht werden.', l:'Das ist sicherheitsrelevant', e:'Ruhig und fest sprechen, nicht entschuldigend. Du empfiehlst hier nicht, du stufst ein — das darf man hören.'},
      {typ:'ordnen', l:['Ich lese den Werkstattauftrag und kläre die Abkürzungen.','Ich mache eine Probefahrt.','Ich bocke das Fahrzeug auf und prüfe.','Ich lese den Fehlerspeicher aus und vergleiche mit den Sollwerten.','Ich berate die Kundin über die Reparaturlösungen.'], f:'Bring den Ablauf in der Kfz-Werkstatt in die richtige Reihenfolge.', e:'Erst lesen, dann fahren, dann prüfen, dann messen, dann reden. Wer vor der Prüfung schon berät, muss sich später korrigieren.'},
      {typ:'artikel', w:'Schweißnaht', l:'die', e:'die Naht, also die Schweißnaht, die Kehlnaht, die Stumpfnaht. Das letzte Wort im Kompositum bestimmt den Artikel.'},
      {typ:'artikel', w:'Spurstangenkopf', l:'der', e:'der Kopf, also der Spurstangenkopf. Zerlege lange Wörter von hinten: Kopf - Stange - Spur.'}
    ],
    schreiben:{
      auf:'Schreibe den Reparaturbericht für den Kombi von Frau Kaltenbach, Kennzeichen mit Kilometerstand 148.320.',
      punkte:['Was hast du geprüft und wie','Welcher Befund mit welchem Messwert','Was wurde repariert und mit welchem Teil','Was bleibt offen und ist zur nächsten Inspektion zu beobachten'],
      hilfe:'Schreibe knapp und in Stichpunkten oder kurzen Sätzen, so wie es im Betrieb üblich ist. Nutze diese Anfänge: „Probefahrt über … Minuten durchgeführt." · „Befund: …" · „Durchgeführte Arbeiten: …" · „Zur Beobachtung: …". Nenne immer Messwert mit Einheit und den Kilometerstand. Fachwörter darfst du hier benutzen — der Bericht ist für die Werkstatt, nicht für die Kundin. Sechs bis acht Zeilen reichen.'
    }
  },

  /* ===================== 7 · KRAFTFAHRER UND LOGISTIK ===================== */
  {
    id:'fahren',
    t:'Kraftfahrer und Logistik',
    unter:'LKW-Fernverkehr, Nahverkehr, Bus und ÖPNV, Kurierdienst',
    lvl:'A2–B1',
    pruef:'Keine Sprachprüfung. Einschlägig: Deutsch-Test für den Beruf A2·B1. Die theoretische Fahrerlaubnisprüfung ist in 14 Sprachen möglich, die praktische Prüfung und die Grundqualifikation nach BKrFQG dagegen nur auf Deutsch',
    warum:'Bei Fahrerinnen und Fahrern von Bussen und Straßenbahnen haben 47 Prozent eine Einwanderungsgeschichte, im Güterverkehr 39 Prozent. Verkehr und Logistik sind mit 977.000 ausländischen Beschäftigten die absolut größte Gruppe überhaupt, und Berufskraftfahrer stehen namentlich auf der Engpassliste. Warum B1 hier besonders zählt: Es ist der einzige nicht-akademische Bereich mit einer gesetzlich fixierten Sprachanforderung — nach Paragraf 24a der Beschäftigungsverordnung ist B1 echte Pflicht für die Einreise zur Qualifizierung, und für Führerschein plus Grundqualifikation läuft dann eine Frist von 15 Monaten. Die Theorieprüfung kannst du in deiner Sprache ablegen, die praktische Prüfung und die Grundqualifikation nicht: Dolmetscher sind nicht zugelassen.',
    handlungen:[
      {t:'Frachtpapiere lesen und ausfüllen', e:'Frachtbrief und CMR, Lieferschein, Palettenschein und Ladeliste verstehen, prüfen und richtig abzeichnen.', lvl:'B1'},
      {t:'Mit der Disposition sprechen', e:'Am Telefon oder über den Bordcomputer den Auftrag annehmen, die Ankunftszeit melden, Verzug begründen und eine Umdisposition bestätigen.', lvl:'B1'},
      {t:'An der Rampe kommunizieren', e:'Sich anmelden, Tor- und Rampennummer verstehen, Wartezeit klären und um Ladehilfe bitten.', lvl:'A2'},
      {t:'Übernahme und Abgabe quittieren', e:'Menge und Zustand prüfen, einen Vorbehalt schriftlich vermerken und die Unterschrift des Empfängers einholen.', lvl:'B1'},
      {t:'Eine Kontrolle bestehen', e:'Bei Polizei oder BALM die Papiere vorlegen, Lenk- und Ruhezeiten erklären, Fahrtenschreiberdaten kommentieren und Anweisungen verstehen.', lvl:'B1'},
      {t:'Ladung sichern und Gefahrgut benennen', e:'Sicherungsmittel benennen, die Ladungssicherung erklären, ADR-Grundbegriffe verstehen und einen Mangel am Fahrzeug melden.', lvl:'B1'},
      {t:'Unfall und Panne melden', e:'Den Ort präzise angeben, den Sachverhalt schildern, den Notruf absetzen und den Unfallbericht ausfüllen.', lvl:'B1'},
      {t:'Fahrgäste ansagen und informieren', e:'Haltestellen ansagen, eine Störung durchsagen und dabei sagen, was die Fahrgäste jetzt tun sollen.', lvl:'A2'},
      {t:'Tarif- und Anschlussauskunft geben', e:'Fahrschein und Automat erklären, die richtige Preisstufe nennen und den Anschluss ansagen.', lvl:'B1'},
      {t:'Einen Konflikt deeskalieren', e:'Bei Schwarzfahren, Streit oder Alkohol ruhig bleiben, klare Ansagen machen und rechtzeitig die Leitstelle rufen.', lvl:'B1'}
    ],
    chunks:[
      {de:'den Frachtbrief mitführen', hi:'der CMR ist der Frachtbrief im internationalen Verkehr', bsp:'Der Frachtbrief muss immer im Fahrzeug mitgeführt werden.'},
      {de:'den Lieferschein abzeichnen', hi:'mit Unterschrift bestätigen, dass es stimmt', bsp:'Bitte zeichnen Sie mir hier den Lieferschein ab.'},
      {de:'den Palettenschein ausstellen', hi:'wer wie viele Europaletten getauscht hat', bsp:'Ich brauche noch einen Palettenschein über 18 Stück.'},
      {de:'die Ladeliste durchgehen', hi:'Position für Position prüfen, was aufs Fahrzeug kommt', bsp:'Ich gehe kurz die Ladeliste durch, dann fahre ich los.'},
      {de:'die Sendung übernehmen', hi:'die Ware annehmen und dafür geradestehen', bsp:'Die Sendung habe ich um 7.40 Uhr übernommen.'},
      {de:'einen Vorbehalt eintragen', hi:'schriftlich, wenn etwas nicht in Ordnung ist', bsp:'Ich trage einen Vorbehalt ein: Ware beschädigt übernommen.'},
      {de:'Ware beschädigt übernommen', hi:'der Standardvermerk auf dem Frachtbrief', bsp:'Auf dem CMR steht: Ware beschädigt übernommen, drei Kartons eingedrückt.'},
      {de:'sich an der Rampe anmelden', hi:'im Wareneingang oder am Pförtner melden', bsp:'Ich melde mich an: Spedition Kern, Auftrag 4412.'},
      {de:'auf Tor 7 fahren', hi:'die Tor- oder Rampennummer wird dir zugeteilt', bsp:'Sie fahren bitte auf Tor 7, rückwärts an die Rampe.'},
      {de:'rückwärts an die Rampe setzen', hi:'andocken, damit entladen werden kann', bsp:'Ich setze rückwärts an die Rampe, dann können Sie entladen.'},
      {de:'die Wartezeit klären', hi:'wie lange du stehen musst — kostet Geld und Lenkzeit', bsp:'Können Sie mir sagen, wie lange die Wartezeit ungefähr ist?'},
      {de:'die Standzeit läuft mir davon', hi:'so sagst du, dass dir die Zeit knapp wird', bsp:'Die Standzeit läuft mir davon, ich muss um 14 Uhr weiter.'},
      {de:'die Ankunftszeit durchgeben', hi:'die voraussichtliche Ankunft an die Disposition melden', bsp:'Ich gebe die Ankunftszeit durch: voraussichtlich 15.30 Uhr.'},
      {de:'im Stau stehen', hi:'der häufigste Grund für Verzug', bsp:'Ich stehe seit vierzig Minuten auf der A2 im Stau.'},
      {de:'Verzug haben', hi:'später kommen als geplant — immer früh melden', bsp:'Ich habe etwa eine Stunde Verzug, ich melde es dem Kunden.'},
      {de:'die Tour umdisponieren', hi:'die Reihenfolge oder das Ziel wird geändert', bsp:'Wir müssen die Tour umdisponieren, Dortmund fällt heute weg.'},
      {de:'den Auftrag im Bordcomputer bestätigen', hi:'antippen, damit die Disposition es sieht', bsp:'Ich habe den neuen Auftrag im Bordcomputer bestätigt.'},
      {de:'die Lenkzeit ist zu Ende', hi:'nach viereinhalb Stunden ist Pause Pflicht', bsp:'Meine Lenkzeit ist in zwanzig Minuten zu Ende.'},
      {de:'die Ruhezeit einhalten', hi:'täglich elf Stunden, verkürzt neun', bsp:'Ich habe die Ruhezeit eingehalten, elf Stunden in Kassel.'},
      {de:'die Karte in den Fahrtenschreiber stecken', hi:'die Fahrerkarte zeichnet alles auf', bsp:'Die Fahrerkarte steckt seit heute früh im Fahrtenschreiber.'},
      {de:'die Papiere vorlegen', hi:'bei der Kontrolle — Führerschein, Fahrerkarte, Frachtpapiere', bsp:'Ich lege Ihnen die Papiere vor, einen Moment bitte.'},
      {de:'die Ladung sichern', hi:'mit Zurrgurt, Antirutschmatte, Sperrbalken', bsp:'Die Ladung ist mit acht Zurrgurten gesichert.'},
      {de:'einen Zurrgurt anlegen', hi:'die Standardsicherung im Kastenaufbau', bsp:'Ich lege noch zwei Zurrgurte über die letzte Reihe.'},
      {de:'Gefahrgut nach ADR transportieren', hi:'ADR ist die Regel für gefährliche Güter', bsp:'Ich fahre Gefahrgut nach ADR, Klasse 3, entzündbare Flüssigkeit.'},
      {de:'das Warndreieck aufstellen', hi:'bei Panne: mindestens 100 Meter dahinter', bsp:'Ich habe die Warnblinkanlage an und das Warndreieck aufgestellt.'},
      {de:'eine Panne haben', hi:'Fahrzeug fährt nicht weiter — Ort präzise melden', bsp:'Ich habe eine Panne auf der A7, Richtung Hamburg, kurz vor der Ausfahrt Soltau.'},
      {de:'auf dem Standstreifen stehen', hi:'gehört zu jeder Ortsangabe bei einer Panne', bsp:'Ich stehe auf dem Standstreifen bei Kilometer 118.'},
      {de:'einen Mangel melden', hi:'alles am Fahrzeug, was nicht in Ordnung ist', bsp:'Ich melde einen Mangel: die Bremsleuchte hinten rechts geht nicht.'},
      {de:'die nächste Haltestelle ansagen', hi:'im Bus, auch wenn die Automatik ausfällt', bsp:'Nächste Haltestelle: Hauptbahnhof, Ausstieg rechts.'},
      {de:'eine Störungsdurchsage machen', hi:'sagen, was los ist und was die Fahrgäste tun sollen', bsp:'Wegen einer Störung endet diese Fahrt hier, bitte steigen Sie alle aus.'},
      {de:'die Preisstufe nennen', hi:'im ÖPNV heißt der Tarif so', bsp:'Bis zum Zoo brauchen Sie die Preisstufe B, das sind 3,20 Euro.'},
      {de:'den Anschluss erreichen', hi:'die Frage Nummer eins im Bus', bsp:'Die Linie 5 erreichen Sie noch, sie fährt fünf Minuten später.'},
      {de:'ohne gültigen Fahrschein fahren', hi:'die sachliche Formulierung für Schwarzfahren', bsp:'Sie fahren ohne gültigen Fahrschein, ich muss Ihre Daten aufnehmen.'},
      {de:'die Leitstelle rufen', hi:'wenn es allein nicht mehr geht', bsp:'Wenn Sie nicht aussteigen, rufe ich die Leitstelle.'}
    ],
    dialoge:[
      {
        id:'fahren-disposition',
        titel:'Der Anruf bei der Disposition wegen Verzug',
        lvl:'B1',
        dauer:'4 Min',
        ort:'Es ist 12.10 Uhr. Du stehst seit vierzig Minuten auf der A2 vor Bielefeld im Stau, das Entladefenster in Hannover ist auf 14 Uhr gebucht. Du rufst den Disponenten Herrn Wiegand an.',
        schritte:[
          {amanda:'Disposition Wiegand.', hinweis:'Melde dich mit Namen und Tournummer und sag sofort, worum es geht.', beispiel:'Hallo Herr Wiegand, hier ist Yusuf Aydin, Tour 214. Ich melde Verzug für Hannover.', redemittel:['Hier ist …, Tour …','Ich melde Verzug für …','Es geht um die Entladung in …']},
          {amanda:'Verzug? Wie viel denn?', hinweis:'Nenne den Grund, die Zeit bis jetzt und deine Schätzung für die Ankunft.', beispiel:'Ich stehe seit vierzig Minuten auf der A2 vor Bielefeld im Stau. Ich schätze, ich bin gegen 15.15 Uhr in Hannover, also etwa eine Stunde später.', redemittel:['Ich stehe seit … im Stau.','Ich schätze, ich bin gegen … Uhr da.','Das sind etwa … Verspätung.']},
          {amanda:'Das Zeitfenster war 14 Uhr. Schaffst du danach noch Braunschweig?', hinweis:'Rechne mit deiner Lenkzeit und antworte ehrlich, auch wenn es nein heißt.', beispiel:'Nein, das schaffe ich nicht. Meine Lenkzeit ist um 17 Uhr zu Ende, danach muss ich die Pause machen.', redemittel:['Nein, das schaffe ich nicht.','Meine Lenkzeit ist um … Uhr zu Ende.','Danach muss ich die Ruhezeit einhalten.']},
          {amanda:'Gut, dann nehme ich Braunschweig raus und gebe es an Kollegen Roth. Ruf du bitte in Hannover an.', hinweis:'Bestätige die Umdisposition Punkt für Punkt zurück, damit nichts falsch verstanden wird.', beispiel:'Ich wiederhole zur Sicherheit: Braunschweig fällt für mich weg, geht an Kollegen Roth. Ich rufe in Hannover an und melde 15.15 Uhr.', redemittel:['Ich wiederhole zur Sicherheit: …','Also: … fällt weg, … geht an …','Habe ich das richtig verstanden?']},
          {amanda:'Genau so. Und trag es bitte im Bordcomputer ein.', hinweis:'Zusage geben und sagen, wann du dich wieder meldest.', beispiel:'Mache ich. Ich trage den Verzug gleich im Bordcomputer ein und melde mich, sobald ich an der Rampe stehe.', redemittel:['Mache ich.','Ich trage das gleich im Bordcomputer ein.','Ich melde mich, sobald ich …']}
        ]
      },
      {
        id:'fahren-rampe',
        titel:'Die Anmeldung an der Rampe',
        lvl:'A2',
        dauer:'4 Min',
        ort:'15.20 Uhr, Wareneingang eines Logistikzentrums bei Hannover. Du bist eine Stunde zu spät und musst dich an der Anmeldung bei Frau Nowak melden. Zwei Kartons einer Palette sind unterwegs eingedrückt worden.',
        schritte:[
          {amanda:'Guten Tag. Für wen fahren Sie und welche Auftragsnummer?', hinweis:'Nenne Spedition, Auftragsnummer und was du geladen hast.', beispiel:'Guten Tag. Spedition Kern, Auftrag 4412, achtzehn Paletten Getränke für den Wareneingang.', redemittel:['Spedition …, Auftrag …','Ich habe … Paletten … geladen.','Ich bin für die Entladung angemeldet.']},
          {amanda:'Sie waren für 14 Uhr angemeldet. Es ist zwanzig nach drei.', hinweis:'Entschuldige dich kurz, nenne den Grund sachlich und sag, dass du informiert hast.', beispiel:'Das tut mir leid. Ich stand auf der A2 im Stau und habe den Verzug um 12 Uhr an die Disposition und an Ihre Kollegin gemeldet.', redemittel:['Das tut mir leid.','Ich stand … im Stau.','Ich habe den Verzug um … Uhr gemeldet.']},
          {amanda:'Gut, ich sehe es. Sie fahren auf Tor 7 und setzen rückwärts an die Rampe.', hinweis:'Wiederhole die Nummer zurück und frag nach der Wartezeit.', beispiel:'Tor 7, rückwärts an die Rampe. Können Sie mir sagen, wie lange die Wartezeit ungefähr ist?', redemittel:['Tor …, verstanden.','Können Sie mir sagen, wie lange …?','Wie lange dauert die Entladung ungefähr?']},
          {amanda:'Etwa vierzig Minuten. Ist mit der Ladung alles in Ordnung?', hinweis:'Sprich den Schaden von dir aus an — nicht warten, bis er entdeckt wird.', beispiel:'Nicht ganz. Auf Palette 12 sind zwei Kartons eingedrückt. Ich habe das schon beim Beladen auf dem Frachtbrief vermerkt: Ware beschädigt übernommen.', redemittel:['Nicht ganz, ich muss etwas melden.','Auf Palette … sind …','Ich habe einen Vorbehalt eingetragen.']},
          {amanda:'Dann machen wir gleich ein Foto und ich zeichne es ab.', hinweis:'Bestätige und sag klar, was du brauchst, bevor du wegfährst.', beispiel:'Gern. Ich brauche dann bitte Ihre Unterschrift auf dem Frachtbrief und einen Palettenschein über achtzehn Stück.', redemittel:['Ich brauche bitte Ihre Unterschrift auf …','Und einen Palettenschein über … Stück.','Bekomme ich davon eine Kopie?']}
        ]
      },
      {
        id:'fahren-kontrolle',
        titel:'Die Kontrolle auf dem Rastplatz',
        lvl:'B1',
        dauer:'5 Min',
        ort:'Kontrollstelle auf dem Rastplatz an der A7. Eine Beamtin des Bundesamts für Logistik und Mobilität winkt dich raus und will die Papiere und die Lenkzeiten sehen.',
        schritte:[
          {amanda:'Guten Tag, Kontrolle. Bitte Führerschein, Fahrerkarte und die Frachtpapiere.', hinweis:'Ruhig bleiben, bestätigen und sagen, was du tust, während du suchst.', beispiel:'Guten Tag. Selbstverständlich, einen Moment bitte. Der Führerschein ist hier, die Fahrerkarte steckt im Fahrtenschreiber.', redemittel:['Selbstverständlich, einen Moment bitte.','Der Führerschein ist hier.','Die Fahrerkarte steckt im Fahrtenschreiber.']},
          {amanda:'Wann haben Sie heute angefangen und wann war Ihre letzte Pause?', hinweis:'Antworte mit Uhrzeiten. Ohne Uhrzeit ist die Antwort wertlos.', beispiel:'Angefangen habe ich um 5.30 Uhr in Kassel. Meine Pause von fünfundvierzig Minuten war von 10 bis 10.45 Uhr auf dem Rastplatz Lutterberg.', redemittel:['Angefangen habe ich um … Uhr in …','Meine Pause war von … bis … Uhr.','Davor hatte ich elf Stunden Ruhezeit.']},
          {amanda:'Hier auf dem Ausdruck fehlt eine Eintragung für gestern Abend, 19 bis 20 Uhr.', hinweis:'Nicht streiten. Erklären, was in der Zeit war, und Unsicherheit zugeben, wenn du unsicher bist.', beispiel:'Da habe ich getankt und danach entladen. Ich glaube, ich habe vergessen umzustellen. Das tut mir leid, das trage ich nach.', redemittel:['Da habe ich … gemacht.','Ich glaube, ich habe vergessen …','Das tut mir leid, das trage ich nach.']},
          {amanda:'Und was haben Sie geladen? Ist Gefahrgut dabei?', hinweis:'Ladung und Sicherung konkret benennen.', beispiel:'Achtzehn Paletten Getränke, kein Gefahrgut. Die Ladung ist mit zehn Zurrgurten und Antirutschmatten gesichert.', redemittel:['Ich habe … geladen.','Gefahrgut ist nicht dabei.','Die Ladung ist mit … gesichert.']},
          {amanda:'In Ordnung. Sie bekommen eine Verwarnung wegen der fehlenden Eintragung.', hinweis:'Annehmen, nachfragen, was jetzt zu tun ist — höflich bis zum Schluss.', beispiel:'Verstanden. Muss ich das noch heute nachtragen oder reicht es, wenn mein Betrieb das meldet?', redemittel:['Verstanden.','Muss ich das noch heute …?','Bekomme ich das schriftlich?']}
        ]
      }
    ],
    saetze:[
      {de:'Hier ist … , Tour … , ich melde Verzug.', wann:'der erste Satz beim Anruf in der Disposition — Name, Tour, Sache'},
      {de:'Ich schätze, ich bin gegen 15.15 Uhr da.', wann:'wenn du eine Ankunftszeit durchgibst — lieber vorsichtig schätzen'},
      {de:'Meine Lenkzeit ist um 17 Uhr zu Ende.', wann:'wenn dir noch eine Tour angeboten wird, die du nicht schaffst'},
      {de:'Ich wiederhole zur Sicherheit: …', wann:'nach jeder Umdisposition am Telefon'},
      {de:'Ich melde mich, sobald ich an der Rampe stehe.', wann:'zum Abschluss des Gesprächs mit der Disposition'},
      {de:'Spedition …, Auftrag …, ich bin für die Entladung angemeldet.', wann:'an der Anmeldung im Wareneingang'},
      {de:'Auf welches Tor soll ich fahren?', wann:'wenn dir die Rampennummer nicht genannt wurde'},
      {de:'Können Sie mir sagen, wie lange die Wartezeit ungefähr ist?', wann:'wenn du wissen musst, ob deine Lenkzeit noch reicht'},
      {de:'Ich trage einen Vorbehalt ein: Ware beschädigt übernommen.', wann:'wenn du Ware annimmst, die nicht in Ordnung ist'},
      {de:'Ich brauche bitte Ihre Unterschrift auf dem Frachtbrief.', wann:'bei jeder Abgabe, bevor du wegfährst'},
      {de:'Selbstverständlich, einen Moment bitte.', wann:'zu Beginn einer Kontrolle — ruhig, freundlich, ohne Diskussion'},
      {de:'Angefangen habe ich um 5.30 Uhr, die Pause war von 10 bis 10.45 Uhr.', wann:'wenn nach Lenk- und Ruhezeiten gefragt wird'},
      {de:'Ich stehe auf der A7 Richtung Hamburg, Standstreifen, Kilometer 118.', wann:'bei Panne oder Unfall — Straße, Richtung, Kilometer, in dieser Reihenfolge'},
      {de:'Nächste Haltestelle: Hauptbahnhof, Ausstieg rechts.', wann:'die Fahrgastansage, wenn die Automatik ausfällt'},
      {de:'Bitte treten Sie einen Schritt zurück, ich möchte in Ruhe mit Ihnen sprechen.', wann:'wenn es im Bus laut wird und du deeskalieren willst'}
    ],
    ueb:[
      {typ:'wahl', f:'Du übernimmst eine Palette mit zwei eingedrückten Kartons. Was tust du?', o:['Nichts, das fällt niemandem auf','Einen Vorbehalt auf dem Frachtbrief eintragen','Erst beim Empfänger etwas sagen'], l:1, e:'Ohne schriftlichen Vorbehalt haftest du für den Schaden. Der Standardvermerk lautet: Ware beschädigt übernommen — dazu die Menge und die Palettennummer.'},
      {typ:'wahl', f:'Du stehst seit vierzig Minuten im Stau und kommst zu spät. Wann rufst du die Disposition an?', o:['Sofort, wenn klar ist, dass es nicht reicht','Kurz vor dem Entladefenster','Erst wenn der Kunde sich beschwert'], l:0, e:'Verzug meldest du früh. Je früher die Disposition Bescheid weiß, desto eher kann sie umdisponieren — und desto weniger Ärger bekommst du.'},
      {typ:'wahl', f:'Welche Ortsangabe ist bei einer Panne brauchbar?', o:['Irgendwo hinter Hannover auf der Autobahn','A7 Richtung Hamburg, Standstreifen, Kilometer 118','Auf der großen Straße bei einer Brücke'], l:1, e:'Straße, Fahrtrichtung, Standort, Kilometer — in dieser Reihenfolge. Die Kilometertafel steht alle 500 Meter am Rand.'},
      {typ:'luecke', f:'Ich melde ___ für Hannover, etwa eine Stunde.', l:'Verzug', e:'Verzug haben oder Verzug melden ist das Fachwort. „Ich bin zu spät" sagt man privat, nicht am Diensttelefon.'},
      {typ:'luecke', f:'Meine ___ ist um 17 Uhr zu Ende, danach muss ich Pause machen.', l:'Lenkzeit', e:'Lenkzeit ist die Zeit am Steuer, Ruhezeit die Pause dazwischen. Beide Wörter musst du bei jeder Kontrolle benutzen können.'},
      {typ:'luecke', f:'Die Ladung ist mit zehn ___ gesichert.', l:'Zurrgurten', e:'der Zurrgurt, Plural die Zurrgurte, im Dativ mit -n: mit zehn Zurrgurten.'},
      {typ:'luecke', f:'Bitte fahren Sie auf ___ 7 und setzen Sie rückwärts an die Rampe.', l:'Tor', e:'An der Rampe bekommst du eine Tornummer. Wiederhole sie immer zurück — Verwechslungen kosten dich zwanzig Minuten.'},
      {typ:'bausteine', l:'Ich stehe seit vierzig Minuten auf der A2 im Stau.', teile:['Ich','stehe','seit','vierzig','Minuten','auf','der','A2','im','Stau'], e:'Mit seit plus Dativ sagst du, wie lange etwas schon dauert. Das ist genau die Information, die die Disposition braucht.'},
      {typ:'bausteine', l:'Ich trage einen Vorbehalt in den Frachtbrief ein.', teile:['Ich','trage','einen','Vorbehalt','in','den','Frachtbrief','ein'], e:'Trennbares Verb: eintragen wird zu trage … ein. Wohin? in den Frachtbrief, also Akkusativ.'},
      {typ:'bausteine', l:'Können Sie mir sagen, wie lange die Wartezeit ist?', teile:['Können','Sie','mir','sagen','wie','lange','die','Wartezeit','ist'], e:'Die höfliche indirekte Frage: nach dem Komma steht das Fragewort, das Verb geht ans Ende. So fragst du an der Rampe.'},
      {typ:'paare', p:[['der Frachtbrief','das Papier, das die Sendung begleitet — international CMR'],['der Palettenschein','der Beleg über getauschte Europaletten'],['die Ladeliste','was in welcher Reihenfolge geladen wird'],['die Fahrerkarte','zeichnet Lenk- und Ruhezeiten auf'],['der Vorbehalt','der schriftliche Vermerk bei beschädigter Ware']], e:'Diese fünf Papiere und Begriffe kommen jeden Tag vor. Wer sie nicht benennen kann, kann eine Kontrolle nicht bestehen.'},
      {typ:'paare', p:[['der Zurrgurt','hält die Ladung nach unten fest'],['die Antirutschmatte','verhindert das Verrutschen auf der Ladefläche'],['der Sperrbalken','klemmt quer zwischen die Bordwände'],['ADR','die Regeln für den Transport von Gefahrgut']], e:'Sicherungsmittel musst du bei der Kontrolle benennen können — zeigen allein reicht nicht.'},
      {typ:'hoeren', text:'Hallo, Disposition. Du fährst heute Tour 214: erst Hannover, Entladefenster 14 Uhr, danach Braunschweig, Ladung ab 16 Uhr. Bestätige mir das bitte im Bordcomputer.', f:'Wann ist das Entladefenster in Hannover?', o:['14 Uhr','16 Uhr','Tour 214'], l:0, e:'Bei Aufträgen zählen Ort, Uhrzeit und Reihenfolge. Schreibe die Uhrzeiten sofort mit, bevor du bestätigst.'},
      {typ:'hoeren', text:'Achtung, eine Durchsage: Wegen einer Störung im Betriebsablauf endet diese Fahrt an der Haltestelle Rathaus. Bitte steigen Sie dort alle aus. Die Linie 12 fährt ab Rathaus weiter Richtung Klinikum.', f:'Was sollen die Fahrgäste tun?', o:['sitzen bleiben','am Rathaus aussteigen und in die Linie 12 umsteigen','zum Hauptbahnhof laufen'], l:1, e:'Eine gute Störungsdurchsage hat drei Teile: was ist los, wo endet es, was sollen die Fahrgäste jetzt tun. Der dritte Teil ist der wichtigste.'},
      {typ:'sprechen', f:'Sag am Telefon: Hier ist Yusuf Aydin, Tour 214, ich melde Verzug für Hannover.', l:'Hier ist Yusuf Aydin, Tour 214', e:'Name und Tournummer zuerst, dann die Sache. Sprich langsam — der Disponent hat zehn Anrufe in der Stunde und muss dich einordnen.'},
      {typ:'sprechen', f:'Mach die Ansage: Nächste Haltestelle Hauptbahnhof, Ausstieg rechts.', l:'Nächste Haltestelle Hauptbahnhof', e:'Kurz und deutlich, mit einer Pause nach dem Haltestellennamen. Im Bus hört man weniger, als du denkst.'},
      {typ:'ordnen', l:['Ich melde mich an der Anmeldung mit Spedition und Auftragsnummer.','Ich bekomme die Tornummer und wiederhole sie.','Ich setze rückwärts an die Rampe.','Ich melde den Schaden an der Palette.','Ich lasse den Frachtbrief unterschreiben.'], f:'Bring den Ablauf an der Rampe in die richtige Reihenfolge.', e:'Anmelden, Tor, andocken, Schaden melden, unterschreiben lassen. Ohne Unterschrift fährst du nie weg.'},
      {typ:'artikel', w:'Frachtbrief', l:'der', e:'der Brief, also der Frachtbrief, der Lieferschein ist der Schein. Das letzte Wort im Kompositum bestimmt den Artikel.'},
      {typ:'artikel', w:'Ladungssicherung', l:'die', e:'die Sicherung, also die Ladungssicherung. Wörter auf -ung sind immer feminin.'}
    ],
    schreiben:{
      auf:'Schreibe die Schadensmeldung an die Disposition für die Entladung in Hannover, Auftrag 4412.',
      punkte:['Wann und wo hast du die Sendung übernommen','Welcher Schaden an welcher Palette und in welchem Umfang','Was hast du auf dem Frachtbrief vermerkt und wer hat unterschrieben','Was schlägst du für die Abwicklung vor'],
      hilfe:'Schreibe sachlich, ohne Schuldzuweisung und ohne Entschuldigung — das ist ein Bericht, keine Erklärung. Nutze diese Anfänge: „Am … um … Uhr habe ich in … übernommen." · „Beim Entladen wurde festgestellt, dass …" · „Auf dem Frachtbrief wurde vermerkt: …" · „Ich schlage vor, dass …". Nenne immer Datum, Uhrzeit, Auftragsnummer, Palettennummer und Stückzahl. Fünf bis sieben Zeilen reichen, gern in kurzen Absätzen.'
    }
  },

  /* ===================== 8 · GASTRONOMIE UND KÜCHE ===================== */
  {
    id:'kueche',
    t:'Gastronomie und Küche',
    unter:'Koch und Köchin, Küchenhilfe, Beikoch, Systemgastronomie',
    lvl:'A2–B1',
    pruef:'Keine deutsche Branchenprüfung. Einschlägig: Deutsch-Test für den Beruf A2·B1 · Azubi-Berufssprachkurs Hotel und Gaststätten',
    warum:'54 Prozent der Köchinnen und Köche und 45 Prozent der Servicekräfte in der Gastronomie haben eine Einwanderungsgeschichte (2024). Koch ist einer der ältesten und stabilsten Engpassberufe und für sehr viele Zugewanderte die erste Arbeitsstelle in Deutschland überhaupt. Für einfachere Tätigkeiten reicht B1, für die Ausbildung wird B2 erwartet. Wo es Gästekontakt gibt — Bestellung, Allergiefrage, Beschwerde am Tisch —, liegt die Latte in der Praxis höher als auf dem Papier.',
    handlungen:[
      {t:'Das Mise en place absprechen', e:'Vor dem Service sagen und verstehen, was am eigenen Posten vorbereitet sein muss, was fehlt und was noch geschnitten, angesetzt oder aufgefüllt wird.', lvl:'A2'},
      {t:'Anweisungen am Pass verstehen', e:'Im Lärm und unter Zeitdruck kurze Kommandos des Küchenchefs richtig aufnehmen: anrichten, nachschieben, auf Abruf, Gangfolge.', lvl:'B1'},
      {t:'Die Bestellung mit Sonderwünschen aufnehmen', e:'Gargrad, Beilagenwechsel, ohne Zwiebeln, Kinderportion — nachfragen, wiederholen und fehlerfrei bonieren.', lvl:'B1'},
      {t:'Allergien abfragen und verbindlich beantworten', e:'Auf die Frage nach Gluten, Nüssen oder Laktose nie raten, sondern in der Küche nachfragen und dann eine klare Auskunft geben.', lvl:'B1'},
      {t:'Ein Gericht beschreiben und empfehlen', e:'Zubereitungsart, Konsistenz, Schärfe und Beilage in wenigen Sätzen erklären und eine passende Empfehlung aussprechen.', lvl:'B1'},
      {t:'Die Reklamation am Tisch bearbeiten', e:'Die Beschwerde verstehen, sich entschuldigen ohne Schuld einzugestehen, eine Lösung anbieten und bei Bedarf den Schichtleiter holen.', lvl:'B1'},
      {t:'Hygiene dokumentieren', e:'Kerntemperatur messen, Kühlkette prüfen, Werte ins Temperaturprotokoll eintragen und Abweichungen sofort melden.', lvl:'B1'},
      {t:'Die Warenannahme machen', e:'Lieferschein mit der Ware vergleichen, Temperatur bei Anlieferung messen, Mindesthaltbarkeitsdatum prüfen und beanstanden, was nicht stimmt.', lvl:'B1'},
      {t:'Abrechnen und kassieren', e:'Die Rechnung bringen, splitten, Zahlungsarten erklären und die Kartenzahlung sprachlich sauber abwickeln.', lvl:'A2'},
      {t:'Dienstplan und Schichtübergabe regeln', e:'Einen Schichttausch aushandeln, den Schließdienst übergeben und dokumentieren, was für die nächste Schicht offen ist.', lvl:'B1'}
    ],
    chunks:[
      {de:'das Mise en place machen', hi:'alles vorbereiten, bevor der Service losgeht', bsp:'Bis 17 Uhr muss das Mise en place am kalten Posten stehen.'},
      {de:'am Posten stehen', hi:'der feste Arbeitsplatz in der Küche', bsp:'Heute stehe ich am Posten Gardemanger.'},
      {de:'den Posten übergeben', hi:'am Schichtende sagen, was da ist und was fehlt', bsp:'Ich übergebe dir den Posten: Saucen sind fertig, Salat muss noch gewaschen werden.'},
      {de:'am Pass anrichten', hi:'der Pass ist der Übergabetisch zwischen Küche und Service', bsp:'Zwei Schnitzel richte ich gleich am Pass an.'},
      {de:'auf Abruf haben', hi:'vorgegart, wird erst auf Zuruf fertig gemacht', bsp:'Das Rinderfilet habe ich auf Abruf.'},
      {de:'etwas nachschieben', hi:'schnell noch etwas nachproduzieren, weil es leer wird', bsp:'Bitte einmal Pommes nachschieben, die Fritteuse ist leer.'},
      {de:'die Gangfolge einhalten', hi:'Vorspeise, Hauptgang, Nachspeise in der richtigen Reihenfolge', bsp:'Tisch 7 hat vier Personen, bitte die Gangfolge einhalten.'},
      {de:'einen Tisch bonieren', hi:'die Bestellung in die Kasse eingeben, damit sie in der Küche ankommt', bsp:'Ich boniere Tisch 12: zweimal Suppe, einmal Schnitzel.'},
      {de:'die Bestellung aufnehmen', hi:'am Tisch notieren, was die Gäste möchten', bsp:'Darf ich schon die Bestellung aufnehmen?'},
      {de:'einen Sonderwunsch notieren', hi:'alles, was vom Standard abweicht, kommt extra auf den Bon', bsp:'Ich notiere den Sonderwunsch: ohne Zwiebeln.'},
      {de:'den Gargrad erfragen', hi:'blutig, rosa oder durch — bei Steak immer fragen', bsp:'Wie hätten Sie das Steak gern? Rosa oder durch?'},
      {de:'die Beilage tauschen', hi:'statt Pommes zum Beispiel Salat', bsp:'Kann ich die Beilage tauschen, statt Kroketten lieber Salat?'},
      {de:'die vierzehn Allergene', hi:'die Stoffe, die nach dem Gesetz gekennzeichnet werden müssen', bsp:'Die vierzehn Allergene stehen hinten in der Karte.'},
      {de:'glutenhaltiges Getreide enthalten', hi:'die korrekte Formulierung statt „hat Gluten drin"', bsp:'Die Panade enthält glutenhaltiges Getreide.'},
      {de:'Ich frage in der Küche nach', hi:'die einzig richtige Antwort, wenn du bei Allergien unsicher bist', bsp:'Da bin ich mir nicht sicher, ich frage in der Küche nach.'},
      {de:'eine Kreuzkontamination vermeiden', hi:'Allergene dürfen nicht über Brett, Zange oder Öl übertragen werden', bsp:'Für die Allergikerin bitte neue Zange, wir müssen eine Kreuzkontamination vermeiden.'},
      {de:'nach HACCP arbeiten', hi:'das vorgeschriebene Eigenkontrollsystem für Lebensmittelsicherheit', bsp:'Wir arbeiten nach HACCP, deshalb wird jede Temperatur eingetragen.'},
      {de:'die Kerntemperatur messen', hi:'im Inneren des Lebensmittels, nicht außen', bsp:'Die Kerntemperatur muss mindestens 72 Grad betragen.'},
      {de:'die Kühlkette einhalten', hi:'die Ware darf zwischen Anlieferung und Lager nicht zu warm werden', bsp:'Bitte sofort einräumen, wir müssen die Kühlkette einhalten.'},
      {de:'das Temperaturprotokoll führen', hi:'jeden Tag Kühlhaustemperaturen eintragen und abzeichnen', bsp:'Das Temperaturprotokoll führe ich immer nach der Warenannahme.'},
      {de:'die Rückstellprobe nehmen', hi:'eine Portion aufheben, falls jemand krank wird', bsp:'Von jedem Gericht wird eine Rückstellprobe genommen.'},
      {de:'die Warenannahme machen', hi:'die Lieferung prüfen und annehmen', bsp:'Um 7 Uhr mache ich die Warenannahme.'},
      {de:'den Lieferschein abzeichnen', hi:'erst prüfen, dann unterschreiben', bsp:'Den Lieferschein zeichne ich erst ab, wenn alles vollständig ist.'},
      {de:'die Ware beanstanden', hi:'melden, dass etwas fehlt oder schlecht ist', bsp:'Ich muss die Ware beanstanden, der Fisch riecht nicht frisch.'},
      {de:'das Mindesthaltbarkeitsdatum prüfen', hi:'kurz MHD, steht auf der Packung', bsp:'Bitte bei der Sahne das Mindesthaltbarkeitsdatum prüfen.'},
      {de:'eine Reklamation aufnehmen', hi:'die Beschwerde eines Gastes ernst nehmen und weitergeben', bsp:'Ich nehme die Reklamation auf und gebe sie sofort in die Küche.'},
      {de:'Das tut mir leid, ich kümmere mich sofort darum', hi:'Entschuldigung ohne Schuldeingeständnis — der wichtigste Satz am Tisch', bsp:'Das tut mir leid, ich kümmere mich sofort darum.'},
      {de:'das Gericht neu machen lassen', hi:'die häufigste Lösung bei einer berechtigten Beschwerde', bsp:'Ich lasse das Gericht sofort neu machen.'},
      {de:'den Schichtleiter holen', hi:'wenn die Entscheidung über deiner Zuständigkeit liegt', bsp:'Einen Moment, ich hole eben den Schichtleiter.'},
      {de:'die Rechnung splitten', hi:'auf mehrere Gäste aufteilen', bsp:'Möchten Sie zusammen zahlen oder soll ich die Rechnung splitten?'},
      {de:'mit Karte zahlen', hi:'dazu: kontaktlos, Girocard, Kreditkarte', bsp:'Zahlen Sie bar oder mit Karte?'},
      {de:'einen Dienst tauschen', hi:'die Schicht mit einer Kollegin wechseln', bsp:'Können wir am Freitag den Dienst tauschen?'},
      {de:'den Schließdienst machen', hi:'die letzte Schicht: reinigen, abschließen, Kasse abrechnen', bsp:'Heute mache ich den Schließdienst, ich bin gegen ein Uhr fertig.'}
    ],
    dialoge:[
      {
        id:'kueche-reklamation',
        titel:'Die Reklamation am Tisch',
        lvl:'B1',
        dauer:'4 Min',
        ort:'Es ist Samstagabend, kurz nach 20 Uhr. An Tisch 7 schiebt ein Gast den Teller weg. Das Schnitzel ist innen noch kalt.',
        schritte:[
          {amanda:'Entschuldigung! Das Schnitzel ist innen kalt. So kann ich das nicht essen.', hinweis:'Entschuldige dich, ohne zu erklären, wer schuld ist. Zeig, dass du es ernst nimmst.', beispiel:'Das tut mir sehr leid, dass Sie damit unzufrieden sind. Ich kümmere mich sofort darum.', redemittel:['Das tut mir sehr leid …','Ich kümmere mich sofort darum.','Danke, dass Sie es sagen.']},
          {amanda:'Ja, aber ich warte jetzt schon vierzig Minuten.', hinweis:'Frag genau nach, bevor du etwas versprichst — was genau soll passieren.', beispiel:'Das verstehe ich. Soll ich das Schnitzel neu machen lassen oder möchten Sie lieber etwas anderes?', redemittel:['Das verstehe ich.','Soll ich … neu machen lassen?','Möchten Sie lieber …?']},
          {amanda:'Neu machen, aber es muss schnell gehen. Wir haben um halb zehn Theater.', hinweis:'Nenne eine Zeit, die du wirklich halten kannst.', beispiel:'In Ordnung. Ich gebe es sofort in die Küche und sage, dass es vorgezogen wird. In etwa zehn Minuten steht es auf dem Tisch.', redemittel:['Ich gebe es sofort in die Küche.','In etwa … Minuten …','Ich sage, dass es vorgezogen wird.']},
          {amanda:'Und was ist mit dem Wein? Der steht seit zwanzig Minuten hier.', hinweis:'Sag klar, was du selbst entscheiden darfst und was nicht.', beispiel:'Über einen Preisnachlass entscheidet der Schichtleiter. Ich hole ihn kurz an den Tisch, dann klären wir das direkt.', redemittel:['Darüber entscheidet der Schichtleiter.','Ich hole ihn kurz an den Tisch.','Das kann ich leider nicht allein entscheiden.']},
          {amanda:'Gut, dann machen Sie das bitte.', hinweis:'Fass zusammen und kündige an, dass du wiederkommst.', beispiel:'Also: das Schnitzel kommt neu, in etwa zehn Minuten, und der Schichtleiter kommt gleich zu Ihnen. Ich melde mich in jedem Fall noch einmal.', redemittel:['Also, ich fasse kurz zusammen …','Ich melde mich noch einmal.','Vielen Dank für Ihre Geduld.']}
        ]
      },
      {
        id:'kueche-pass',
        titel:'Am Pass im Stress',
        lvl:'B1',
        dauer:'4 Min',
        ort:'Freitag, 19.40 Uhr, volles Haus. Der Küchenchef steht am Pass und ruft die Bons aus. Du stehst am Posten Entremetier und hast zwei Bestellungen offen.',
        schritte:[
          {amanda:'Tisch neun! Zweimal Schnitzel, einmal ohne Beilage. Wie lange?', hinweis:'Antworte kurz und mit einer echten Zeit. In der Küche wird nicht erklärt, sondern geantwortet.', beispiel:'Sechs Minuten, Chef. Die Schnitzel sind in der Pfanne.', redemittel:['… Minuten, Chef.','Kommt sofort.','Ich brauche noch … Minuten.']},
          {amanda:'Zu lang. Die Vorspeise für sieben steht schon am Pass. Halt die Gangfolge!', hinweis:'Bestätige die Anweisung, statt dich zu rechtfertigen.', beispiel:'Verstanden. Ich ziehe Tisch sieben vor und lasse neun auf Abruf.', redemittel:['Verstanden.','Ich ziehe … vor.','Ich lasse … auf Abruf.']},
          {amanda:'Und die Kartoffeln sind gleich alle. Nachschieben!', hinweis:'Sag, was du tust und wann es fertig ist.', beispiel:'Ich schiebe sofort nach, in acht Minuten ist die neue Charge fertig.', redemittel:['Ich schiebe sofort nach.','In … Minuten ist es fertig.','Ich setze gleich neue an.']},
          {amanda:'Auf Bon sieben steht Allergie: Nüsse. Hast du das gesehen?', hinweis:'Bei Allergien wird nie geraten. Sag, was du konkret machst.', beispiel:'Ja, ich habe es gesehen. Ich nehme ein sauberes Brett und eine neue Zange, damit es keine Kreuzkontamination gibt.', redemittel:['Ja, ich habe es gesehen.','Ich nehme ein sauberes Brett …','… damit es keine Kreuzkontamination gibt.']},
          {amanda:'Gut. Anrichten für sieben, los!', hinweis:'Melde zurück, wenn der Teller am Pass steht — sonst weiß niemand, dass er fertig ist.', beispiel:'Tisch sieben steht am Pass, drei Teller. Fertig zum Ausgeben.', redemittel:['Tisch … steht am Pass.','Fertig zum Ausgeben.','… Teller, bitte abholen.']}
        ]
      },
      {
        id:'kueche-allergie',
        titel:'Ist da Gluten drin?',
        lvl:'B1',
        dauer:'3 Min',
        ort:'Mittagsservice. Eine Gästin an Tisch 3 fragt vor der Bestellung nach Gluten. Du kennst die Rezeptur der Soße nicht genau.',
        schritte:[
          {amanda:'Ich vertrage kein Gluten. Ist da Gluten drin, in der Soße?', hinweis:'Rate nicht. Sag ehrlich, dass du nachfragst.', beispiel:'Danke, dass Sie das sagen. Das kann ich Ihnen nicht sicher beantworten, ich frage in der Küche nach.', redemittel:['Danke, dass Sie das sagen.','Das kann ich Ihnen nicht sicher beantworten.','Ich frage in der Küche nach.']},
          {amanda:'Und was kann ich denn überhaupt essen?', hinweis:'Nenne, was du sicher weißt, und stell es als Vorschlag dar.', beispiel:'Der gegrillte Fisch mit Gemüse ist ohne Panade. Ich lasse aber trotzdem prüfen, ob die Marinade glutenhaltiges Getreide enthält.', redemittel:['… ist ohne Panade.','Ich lasse trotzdem prüfen, ob …','Sicher ohne Gluten ist …']},
          {amanda:'Ja bitte. Ich reagiere wirklich stark.', hinweis:'Sag, was in der Küche zusätzlich passiert.', beispiel:'Ich schreibe die Allergie auf den Bon. In der Küche wird dann mit sauberem Brett und neuer Zange gearbeitet, damit es keine Kreuzkontamination gibt.', redemittel:['Ich schreibe die Allergie auf den Bon.','In der Küche wird dann …','So vermeiden wir eine Kreuzkontamination.']},
          {amanda:'Gut. Wie lange dauert das denn?', hinweis:'Gib eine Zeit und komm wirklich zurück.', beispiel:'Zwei Minuten, dann bin ich mit einer sicheren Antwort wieder bei Ihnen.', redemittel:['Zwei Minuten, dann …','Ich bin gleich wieder bei Ihnen.','Ich komme mit einer sicheren Antwort zurück.']}
        ]
      }
    ],
    saetze:[
      {de:'Darf ich schon die Bestellung aufnehmen?', wann:'am Tisch, wenn die Gäste die Karte zugeklappt haben'},
      {de:'Wie hätten Sie das Steak gern? Rosa oder durch?', wann:'immer, bevor Fleisch boniert wird'},
      {de:'Ich wiederhole kurz Ihre Bestellung.', wann:'am Ende der Bestellung, bei Sonderwünschen Pflicht'},
      {de:'Da bin ich mir nicht sicher, ich frage in der Küche nach.', wann:'bei jeder Frage zu Allergenen — nie raten'},
      {de:'Das tut mir leid, ich kümmere mich sofort darum.', wann:'erster Satz bei jeder Reklamation am Tisch'},
      {de:'Soll ich es neu machen lassen?', wann:'wenn ein Gericht kalt, falsch oder nicht durch ist'},
      {de:'Einen Moment, ich hole eben den Schichtleiter.', wann:'bei Preisnachlass oder wenn der Gast laut wird'},
      {de:'Möchten Sie zusammen zahlen oder getrennt?', wann:'bevor du die Rechnung ausdruckst'},
      {de:'Kommt sofort, Chef.', wann:'am Pass, als kurze Bestätigung einer Anweisung'},
      {de:'Ich brauche noch drei Minuten.', wann:'wenn nach der Zeit gefragt wird — immer eine Zahl nennen'},
      {de:'Ich lasse das auf Abruf.', wann:'wenn ein Gericht vorbereitet ist und erst auf Zuruf fertig wird'},
      {de:'Die Kerntemperatur liegt bei 74 Grad.', wann:'beim Eintragen ins Temperaturprotokoll'},
      {de:'Ich muss die Ware beanstanden.', wann:'bei der Warenannahme, wenn etwas fehlt oder verdorben ist'},
      {de:'Ich übergebe dir den Posten.', wann:'beim Schichtwechsel in der Küche'},
      {de:'Können wir am Freitag den Dienst tauschen?', wann:'wenn du eine Schicht abgeben möchtest'}
    ],
    ueb:[
      {typ:'wahl', f:'Eine Gästin fragt: Ist da Gluten drin? Du bist unsicher. Was sagst du?', o:['Nein, bestimmt nicht.','Das kann ich Ihnen nicht sicher sagen, ich frage in der Küche nach.','Ich glaube, ein bisschen schon.'], l:1, e:'Bei Allergenen gibt es nur eine richtige Antwort: nachfragen. Eine falsche Auskunft kann jemanden ins Krankenhaus bringen.'},
      {typ:'wahl', f:'Ein Gast beschwert sich über das Essen. Womit fängst du an?', o:['Mit einer Erklärung, warum die Küche heute langsam ist','Mit einer Entschuldigung und dem Angebot, dich zu kümmern','Damit, dass du den Koch verteidigst'], l:1, e:'Entschuldigen ohne Schuldeingeständnis: Das tut mir leid, ich kümmere mich sofort darum. Erklärungen interessieren am Tisch niemanden.'},
      {typ:'wahl', f:'Was bedeutet auf Abruf?', o:['Das Gericht ist storniert','Das Gericht ist vorbereitet und wird erst auf Zuruf fertig gemacht','Der Gast ruft in der Küche an'], l:1, e:'Auf Abruf hält der Posten etwas bereit, bis der Pass es abruft. So passt die Gangfolge auch bei großen Tischen.'},
      {typ:'luecke', f:'Bis 17 Uhr muss das ___ en place am Posten stehen.', l:'Mise', e:'Mise en place ist französisch und heißt: alles ist an seinem Platz. Es wird deutsch ausgesprochen wie „Miis on plass".'},
      {typ:'luecke', f:'Ich ___ Tisch 12: zweimal Suppe, einmal Schnitzel.', l:'boniere', e:'bonieren heißt: die Bestellung in die Kasse eingeben. Dann erscheint der Bon in der Küche.'},
      {typ:'luecke', f:'Die ___ muss mindestens 72 Grad betragen.', l:'Kerntemperatur', e:'Die Kerntemperatur wird im Inneren gemessen, nicht an der Oberfläche. Sie steht in jedem HACCP-Protokoll.'},
      {typ:'luecke', f:'Bitte sofort einräumen, wir müssen die ___ einhalten.', l:'Kühlkette', e:'Die Kühlkette darf zwischen Anlieferung und Kühlhaus nicht unterbrochen werden. Deshalb wird Kühlware immer zuerst eingeräumt.'},
      {typ:'luecke', f:'Für die Allergikerin bitte eine neue Zange, wir müssen eine ___ vermeiden.', l:'Kreuzkontamination', e:'Kreuzkontamination heißt: das Allergen kommt über Brett, Messer, Zange oder Frittieröl doch noch ins Essen.'},
      {typ:'bausteine', l:'Das tut mir leid, ich kümmere mich sofort darum.', teile:['Das','tut','mir','leid','ich','kümmere','mich','sofort','darum'], e:'Zwei Hauptsätze, mit Komma verbunden. Diesen Satz solltest du auswendig können.'},
      {typ:'bausteine', l:'Ich frage in der Küche nach.', teile:['Ich','frage','in','der','Küche','nach'], e:'nachfragen ist trennbar: nach steht ganz hinten. Also nicht „Ich nachfrage".'},
      {typ:'bausteine', l:'Wie hätten Sie das Steak gern?', teile:['Wie','hätten','Sie','das','Steak','gern'], e:'Höfliche Frage im Konjunktiv. Am Tisch wird immer gesiezt, in der Küche geduzt.'},
      {typ:'paare', p:[['der Gardemanger','kalte Küche, Salate und Vorspeisen'],['der Saucier','Saucen, Fleisch und Schmorgerichte'],['der Patissier','Süßspeisen und Desserts'],['der Entremetier','Beilagen, Gemüse und Suppen'],['der Pass','Übergabetisch zwischen Küche und Service']], e:'Die Posten heißen fast überall gleich. Wenn du sie kennst, verstehst du sofort, wer was macht.'},
      {typ:'paare', p:[['bonieren','die Bestellung in die Kasse eingeben'],['anrichten','das Essen auf dem Teller fertig machen'],['nachschieben','schnell neue Ware nachproduzieren'],['abservieren','das benutzte Geschirr abräumen']], e:'Vier Verben, die du im Service jeden Abend hörst. Lerne sie mit einem Beispielsatz, nicht einzeln.'},
      {typ:'hoeren', text:'Tisch sieben, vier Personen. Zweimal Rinderfilet rosa, einmal durch. Achtung: auf Bon sieben steht Allergie Nüsse. Die Vorspeise ist schon raus, Hauptgang in zwölf Minuten.', f:'Was steht auf dem Bon für Tisch sieben?', o:['Allergie Gluten','Allergie Nüsse','keine Allergie'], l:1, e:'Allergiehinweise stehen immer oben auf dem Bon. Lies sie zuerst, bevor du mit dem Anrichten anfängst.'},
      {typ:'hoeren', text:'Guten Abend, die Suppe war leider kalt. Ich möchte das nicht bezahlen. Und wir haben um halb zehn Theater, es muss also schnell gehen.', f:'Was will der Gast?', o:['Er will die Suppe neu, aber schnell, und nicht dafür zahlen','Er will nur die Rechnung','Er will einen anderen Tisch'], l:0, e:'Bei einer Reklamation hörst du zwei Dinge heraus: die Sache (kalte Suppe) und die Zeit (Theater). Beides musst du in der Antwort aufgreifen.'},
      {typ:'sprechen', f:'Sag freundlich: Das tut mir leid, ich kümmere mich sofort darum.', l:'Das tut mir leid', e:'Sprich langsam und schau den Gast an. Der Ton macht hier mehr als das Wort.'},
      {typ:'sprechen', f:'Sag am Pass kurz und laut: Tisch sieben steht am Pass, drei Teller.', l:'Tisch sieben steht am Pass', e:'In der Küche wird kurz gesprochen. Erst der Tisch, dann die Zahl — keine ganzen Höflichkeitssätze.'},
      {typ:'ordnen', l:['Ich begrüße den Gast und bringe die Karte.','Ich nehme die Bestellung auf und frage nach Sonderwünschen.','Ich wiederhole die Bestellung.','Ich boniere den Tisch.','Ich serviere und wünsche guten Appetit.'], f:'Bring die Bestellung am Tisch in die richtige Reihenfolge.', e:'Der Schritt, den die meisten weglassen, ist das Wiederholen. Genau dort verhinderst du die teuren Fehler.'},
      {typ:'artikel', w:'Bon', l:'der', e:'der Bon, Plural die Bons. Ausgesprochen wie „Bong", das n bleibt nasal.'},
      {typ:'artikel', w:'Kühlkette', l:'die', e:'die Kette, also auch die Kühlkette. Das letzte Wort im Kompositum bestimmt den Artikel.'},
      {typ:'artikel', w:'Temperaturprotokoll', l:'das', e:'das Protokoll, also das Temperaturprotokoll. Wörter auf -oll aus dem Lateinischen sind meistens sächlich.'}
    ],
    schreiben:{
      auf:'Schreibe die Notiz für den Schichtleiter über die Reklamation an Tisch 7 ins Übergabebuch.',
      punkte:['Was der Gast reklamiert hat','Wann es passiert ist und wie lange er gewartet hat','Was du angeboten und gemacht hast','Was noch offen ist für den Schichtleiter'],
      hilfe:'Schreibe sachlich in der Vergangenheit und ohne Schuldzuweisung: nicht „die Küche hat gepennt", sondern „das Gericht kam nach vierzig Minuten kalt an den Tisch". Fang die Punkte so an: „Um … Uhr reklamierte der Gast an Tisch …" · „Ich habe … angeboten." · „Der Gast war damit …" · „Offen ist noch …". Nenne immer Uhrzeit, Tischnummer und Gericht. Vier bis sechs Sätze reichen.'
    }
  },

  /* ===================== 9 · HOTEL UND SERVICE ===================== */
  {
    id:'hotel',
    t:'Hotel und Service',
    unter:'Rezeption, Reservierung, Housekeeping, Service im Restaurant, Bankett',
    lvl:'A2–B2',
    pruef:'Keine Sprachprüfung. Einschlägig: Deutsch-Test für den Beruf A2·B1 · Azubi-Berufssprachkurs Hotel und Gaststätten',
    warum:'40 Prozent der Beschäftigten im Hotelservice haben eine Einwanderungsgeschichte (2024), und Hotelpersonal steht in allen Engpasslisten der Bundesagentur. Das Besondere an diesem Feld: Es enthält zwei Sprachwelten. Im Housekeeping reicht A2 — man arbeitet mit Liste, Zimmerstatus und kurzen Absprachen. An der Rezeption, in der Reservierung und im Bankett brauchst du B1 bis B2, weil du am Telefon Namen buchstabierst, Reklamationen aufnimmst und Rechnungen erklärst. Deshalb ist das Hotel eines der wenigen Felder, in dem ein echter Aufstieg über die Sprache läuft.',
    handlungen:[
      {t:'Den Check-in abwickeln', e:'Reservierung finden, Meldeschein ausfüllen lassen, Zimmerkarte übergeben, Frühstückszeiten und WLAN erklären.', lvl:'B1'},
      {t:'Den Check-out abwickeln', e:'Minibarverbrauch abfragen, Rechnung erklären, splitten, Rechnungsadresse aufnehmen und Kartenzahlung abwickeln.', lvl:'B1'},
      {t:'Eine Reservierung am Telefon annehmen', e:'Datum, Anzahl der Nächte, Zimmerkategorie und Personenzahl durch Nachfragen absichern, den Namen buchstabieren lassen und die Bestätigung ankündigen.', lvl:'B2'},
      {t:'Eine Gästereklamation aufnehmen', e:'Beschwerde verstehen, Zuständigkeit klären, einen Zeitrahmen zusagen und danach wirklich nachfassen.', lvl:'B2'},
      {t:'Den Zimmerstatus melden', e:'Belegt, frei, Abreise, Zusatzbett — den Stand kurz und eindeutig an die Rezeption durchgeben.', lvl:'A2'},
      {t:'Auffälligkeiten im Zimmer dokumentieren', e:'Minibarverbrauch, Schaden und Fundsache melden und schriftlich festhalten, ohne zu bewerten.', lvl:'A2'},
      {t:'Nach der Housekeeping-Liste arbeiten', e:'Zimmerpriorität lesen, Abreisezimmer zuerst machen, Bitte nicht stören respektieren und Rückfragen stellen.', lvl:'A2'},
      {t:'Eine Wegbeschreibung geben', e:'Bahnhof, Restaurant, Apotheke oder Arzt erklären — mit Richtung, Entfernung und einer Zeitangabe.', lvl:'B1'},
      {t:'Vom Frühdienst an den Spätdienst übergeben', e:'Anreisen, offene Reklamationen, Technikmeldungen und Sonderwünsche in wenigen Minuten weitergeben.', lvl:'B1'},
      {t:'Abrechnen und kassieren', e:'Gesamtsumme nennen, Rechnung splitten, Zahlungsart klären und Rückfragen zur Rechnung sachlich beantworten.', lvl:'B1'}
    ],
    chunks:[
      {de:'den Check-in machen', hi:'den Gast anmelden und ihm das Zimmer geben', bsp:'Ich mache jetzt den Check-in für Herrn Petrov.'},
      {de:'eine Reservierung auf den Namen … haben', hi:'die Standardformel bei der Ankunft', bsp:'Wir haben eine Reservierung auf den Namen Weber, zwei Nächte.'},
      {de:'den Meldeschein ausfüllen', hi:'gesetzlich vorgeschrieben, Name, Adresse, Unterschrift', bsp:'Würden Sie bitte kurz den Meldeschein ausfüllen?'},
      {de:'die Zimmerkategorie', hi:'Einzelzimmer, Doppelzimmer, Suite, Standard, Superior', bsp:'In welcher Zimmerkategorie darf ich buchen?'},
      {de:'ein Zusatzbett stellen', hi:'ein drittes Bett ins Zimmer bringen', bsp:'Für das Kind stellen wir ein Zusatzbett.'},
      {de:'die Rechnungsadresse aufnehmen', hi:'wichtig bei Firmenbuchungen', bsp:'Darf ich die Rechnungsadresse Ihrer Firma aufnehmen?'},
      {de:'die Rechnung splitten', hi:'auf zwei Karten oder zwei Personen aufteilen', bsp:'Soll ich die Rechnung splitten?'},
      {de:'auf das Zimmer buchen', hi:'die Getränke werden nicht sofort bezahlt', bsp:'Möchten Sie das auf das Zimmer buchen lassen?'},
      {de:'den Minibarverbrauch melden', hi:'was der Gast aus der Minibar genommen hat', bsp:'Zimmer 214: Minibarverbrauch zwei Wasser, ein Bier.'},
      {de:'den Namen buchstabieren', hi:'am Telefon Pflicht — mit dem deutschen Alphabet', bsp:'Können Sie mir den Namen bitte buchstabieren?'},
      {de:'eine Bestätigung per E-Mail schicken', hi:'am Ende jeder telefonischen Reservierung ankündigen', bsp:'Ich schicke Ihnen die Bestätigung gleich per E-Mail.'},
      {de:'ausgebucht sein', hi:'kein Zimmer mehr frei', bsp:'Am Wochenende sind wir leider ausgebucht.'},
      {de:'ein Zimmer nach hinten hinaus', hi:'zur ruhigen Seite, nicht zur Straße', bsp:'Ich kann Ihnen ein Zimmer nach hinten hinaus geben, da ist es ruhiger.'},
      {de:'das Frühstück ist von … bis …', hi:'die häufigste Auskunft an der Rezeption', bsp:'Das Frühstück ist von 6.30 bis 10 Uhr im Erdgeschoss.'},
      {de:'eine Reklamation aufnehmen', hi:'die Beschwerde notieren und weiterleiten', bsp:'Ich nehme Ihre Reklamation auf und leite sie an die Technik weiter.'},
      {de:'sich um etwas kümmern', hi:'zusagen, dass du es übernimmst', bsp:'Ich kümmere mich sofort darum.'},
      {de:'die Technik informieren', hi:'die Hausmeisterei oder den Haustechniker rufen', bsp:'Ich informiere die Technik, sie kommt in zwanzig Minuten.'},
      {de:'noch einmal nachfassen', hi:'später prüfen, ob das Problem gelöst ist', bsp:'Ich fasse in einer halben Stunde noch einmal nach.'},
      {de:'einen Zeitrahmen zusagen', hi:'sag eine Zeit, die du wirklich halten kannst', bsp:'Ich sage Ihnen einen Zeitrahmen zu: bis 18 Uhr ist es erledigt.'},
      {de:'das Zimmer ist auf Abreise', hi:'der Gast reist heute ab, das Zimmer wird komplett gemacht', bsp:'Zimmer 311 ist auf Abreise, ich mache es zuerst.'},
      {de:'das Zimmer ist frei gemeldet', hi:'gereinigt und bereit für den nächsten Gast', bsp:'Zimmer 214 ist frei gemeldet und kann vergeben werden.'},
      {de:'das Zimmer ist belegt', hi:'ein Gast wohnt darin und bleibt noch', bsp:'Zimmer 108 ist belegt, nur Handtücher wechseln.'},
      {de:'die Zimmerpriorität beachten', hi:'welche Zimmer zuerst gemacht werden müssen', bsp:'Bitte die Zimmerpriorität beachten, drei Anreisen kommen früh.'},
      {de:'Bitte nicht stören', hi:'das Schild an der Tür — nie ignorieren', bsp:'An 402 hängt „Bitte nicht stören", ich komme später wieder.'},
      {de:'eine Fundsache abgeben', hi:'Vergessenes wird notiert und an die Rezeption gebracht', bsp:'Ich gebe die Fundsache aus Zimmer 217 an der Rezeption ab.'},
      {de:'einen Schaden melden', hi:'sachlich beschreiben, nicht bewerten', bsp:'Ich melde einen Schaden: In Zimmer 305 tropft der Wasserhahn.'},
      {de:'die Wäsche wechseln', hi:'Bettwäsche und Handtücher', bsp:'In Zimmer 108 wird heute nur die Wäsche gewechselt.'},
      {de:'das Zimmer auffüllen', hi:'Seife, Shampoo, Kaffee, Wasser ergänzen', bsp:'Bitte alle belegten Zimmer auffüllen.'},
      {de:'geradeaus bis zur Ampel', hi:'Baustein jeder Wegbeschreibung', bsp:'Gehen Sie geradeaus bis zur Ampel und dann rechts.'},
      {de:'zu Fuß etwa zehn Minuten', hi:'Entfernung immer in Minuten angeben, nicht in Metern', bsp:'Der Bahnhof ist zu Fuß etwa zehn Minuten entfernt.'},
      {de:'die Übergabe an den Spätdienst', hi:'was war, was ist offen, was ist besonders', bsp:'Bei der Übergabe an den Spätdienst nenne ich alle offenen Reklamationen.'},
      {de:'mit Karte oder in bar zahlen', hi:'die Frage beim Check-out', bsp:'Zahlen Sie mit Karte oder in bar?'},
      {de:'die Gesamtsumme beträgt …', hi:'Summe immer deutlich und langsam nennen', bsp:'Die Gesamtsumme beträgt 248 Euro 50.'}
    ],
    dialoge:[
      {
        id:'hotel-checkin',
        titel:'Der Check-in an der Rezeption',
        lvl:'B1',
        dauer:'4 Min',
        ort:'Es ist 15.20 Uhr. Herr Petrov kommt mit Koffer an die Rezeption. Er hat zwei Nächte im Doppelzimmer gebucht, das Zimmer liegt zur Straße.',
        schritte:[
          {amanda:'Guten Tag, Petrov. Ich habe hier gebucht, zwei Nächte.', hinweis:'Begrüße, bestätige die Buchung und nenne die Eckdaten zurück.', beispiel:'Guten Tag, Herr Petrov, herzlich willkommen. Ich habe Ihre Reservierung: Doppelzimmer, zwei Nächte, Abreise am Donnerstag.', redemittel:['Herzlich willkommen.','Ich habe Ihre Reservierung …','… zwei Nächte, Abreise am …']},
          {amanda:'Genau. Brauchen Sie noch etwas von mir?', hinweis:'Bitte höflich um Ausweis und Unterschrift auf dem Meldeschein.', beispiel:'Würden Sie bitte kurz den Meldeschein ausfüllen und unterschreiben? Und darf ich einmal Ihren Ausweis sehen?', redemittel:['Würden Sie bitte …','Darf ich einmal Ihren Ausweis sehen?','Hier unten bitte Ihre Unterschrift.']},
          {amanda:'Bitte schön. Und wann gibt es Frühstück?', hinweis:'Gib Zeit und Ort in einem Satz.', beispiel:'Das Frühstück ist von 6.30 bis 10 Uhr im Erdgeschoss, gleich links neben der Bar.', redemittel:['Das Frühstück ist von … bis …','… im Erdgeschoss.','Der Aufzug ist dort hinten rechts.']},
          {amanda:'Eine Frage noch: Ist das Zimmer ruhig? Ich schlafe sehr schlecht.', hinweis:'Sei ehrlich und biete gleich eine Lösung an.', beispiel:'Ihr Zimmer liegt zur Straße. Ich kann Ihnen aber ein Zimmer nach hinten hinaus geben, da ist es deutlich ruhiger.', redemittel:['Ihr Zimmer liegt zur …','Ich kann Ihnen aber … geben.','Da ist es deutlich ruhiger.']},
          {amanda:'Sehr gern, das wäre super.', hinweis:'Übergib die Zimmerkarte mit Nummer und Etage und schließe freundlich ab.', beispiel:'Dann nehme ich Zimmer 412, vierter Stock. Hier ist Ihre Zimmerkarte, das WLAN-Passwort steht auf der Rückseite. Ich wünsche Ihnen einen angenehmen Aufenthalt.', redemittel:['Hier ist Ihre Zimmerkarte …','Das WLAN-Passwort steht …','Ich wünsche Ihnen einen angenehmen Aufenthalt.']}
        ]
      },
      {
        id:'hotel-reklamation',
        titel:'Die Klimaanlage geht nicht',
        lvl:'B2',
        dauer:'4 Min',
        ort:'Es ist 22.10 Uhr. Frau Sander ruft aus Zimmer 305 an der Rezeption an. Die Klimaanlage läuft nicht, das Zimmer ist warm, der Haustechniker hat schon Feierabend.',
        schritte:[
          {amanda:'Hallo, hier Sander, Zimmer 305. Die Klimaanlage geht nicht. Es ist unerträglich warm hier.', hinweis:'Nimm die Beschwerde ernst und wiederhole, was du verstanden hast.', beispiel:'Das tut mir leid, Frau Sander. Also die Klimaanlage in Zimmer 305 läuft überhaupt nicht, richtig?', redemittel:['Das tut mir leid …','Also, wenn ich Sie richtig verstehe …','… in Zimmer …, richtig?']},
          {amanda:'Ja. Ich habe alles probiert, der Regler tut gar nichts.', hinweis:'Sag ehrlich, was heute noch möglich ist und was nicht.', beispiel:'Unser Haustechniker ist heute leider nicht mehr im Haus. Ich kann Ihnen sofort einen Ventilator bringen und morgen früh um acht kommt die Technik.', redemittel:['Unser Haustechniker ist heute leider nicht mehr im Haus.','Ich kann Ihnen sofort … bringen.','Morgen früh um … kommt die Technik.']},
          {amanda:'Ein Ventilator? Ich habe für ein klimatisiertes Zimmer bezahlt.', hinweis:'Bleib sachlich und biete die bessere Lösung an, statt zu diskutieren.', beispiel:'Das verstehe ich gut. Wir haben noch ein freies Zimmer im zweiten Stock mit funktionierender Klimaanlage. Möchten Sie wechseln? Wir helfen Ihnen beim Umziehen.', redemittel:['Das verstehe ich gut.','Wir haben noch ein freies Zimmer …','Möchten Sie wechseln?']},
          {amanda:'Und was ist mit dem Preis? Ich möchte nicht den vollen Betrag zahlen.', hinweis:'Sag klar, was du entscheiden darfst und was nicht — und wann die Antwort kommt.', beispiel:'Über einen Preisnachlass entscheidet die Empfangsleitung. Ich notiere Ihre Reklamation und Sie bekommen morgen bis zehn Uhr eine Antwort.', redemittel:['Darüber entscheidet die Empfangsleitung.','Ich notiere Ihre Reklamation.','Sie bekommen bis … Uhr eine Antwort.']},
          {amanda:'Gut, dann ziehe ich um. Wann kann ich runterkommen?', hinweis:'Nenne eine konkrete Zeit und kündige an, dass du nachfasst.', beispiel:'In zehn Minuten ist das Zimmer fertig, ich rufe Sie an. Und ich fasse morgen früh noch einmal nach, ob alles in Ordnung ist.', redemittel:['In … Minuten ist es fertig.','Ich rufe Sie an.','Ich fasse morgen früh noch einmal nach.']}
        ]
      },
      {
        id:'hotel-zimmerstatus',
        titel:'Zimmerstatus an die Rezeption',
        lvl:'A2',
        dauer:'3 Min',
        ort:'Es ist 12.45 Uhr. Du bist im Housekeeping in der dritten Etage. Die Rezeption ruft an, weil drei Gäste früher anreisen wollen.',
        schritte:[
          {amanda:'Hallo, hier die Rezeption. Wie weit bist du in der dritten Etage?', hinweis:'Sag die Zahl zuerst, dann die Details.', beispiel:'Ich habe sechs Zimmer fertig. Zimmer 311 und 314 sind frei gemeldet.', redemittel:['Ich habe … Zimmer fertig.','Zimmer … ist frei gemeldet.','Ich bin gerade bei Zimmer …']},
          {amanda:'Und 402? Da kommt um 14 Uhr jemand an.', hinweis:'Sag ehrlich, warum es noch nicht geht.', beispiel:'An 402 hängt noch „Bitte nicht stören". Der Gast ist noch nicht abgereist.', redemittel:['An … hängt noch „Bitte nicht stören".','Der Gast ist noch nicht abgereist.','Ich komme später noch einmal.']},
          {amanda:'Okay, ich kläre das. Gibt es sonst etwas?', hinweis:'Melde Fundsache und Schaden — beides gehört sofort gemeldet.', beispiel:'Ja, zwei Sachen: In 217 lag ein Ladekabel, das bringe ich als Fundsache runter. Und in 305 tropft der Wasserhahn.', redemittel:['Ja, zwei Sachen …','In … lag ein/eine …, das bringe ich als Fundsache runter.','Und in … tropft/ist …']},
          {amanda:'Danke. Und der Minibarverbrauch von 214?', hinweis:'Nenne Zimmer, dann die Artikel mit Anzahl.', beispiel:'Zimmer 214: zwei Wasser und ein Bier. Ich habe es schon auf die Liste geschrieben.', redemittel:['Zimmer …: zwei … und ein …','Ich habe es auf die Liste geschrieben.','Sonst war die Minibar voll.']}
        ]
      }
    ],
    saetze:[
      {de:'Herzlich willkommen, ich habe Ihre Reservierung.', wann:'erster Satz beim Check-in'},
      {de:'Würden Sie bitte kurz den Meldeschein ausfüllen?', wann:'wenn der Gast angemeldet wird — gesetzliche Pflicht'},
      {de:'Können Sie mir den Namen bitte buchstabieren?', wann:'am Telefon, bei jeder Reservierung'},
      {de:'Ich wiederhole zur Sicherheit: zwei Nächte, Doppelzimmer, Anreise am Freitag.', wann:'am Ende jeder telefonischen Reservierung'},
      {de:'Ich schicke Ihnen die Bestätigung gleich per E-Mail.', wann:'als Abschluss der Reservierung'},
      {de:'Das tut mir leid, ich kümmere mich sofort darum.', wann:'erster Satz bei jeder Reklamation'},
      {de:'Ich informiere die Technik und melde mich in zwanzig Minuten.', wann:'wenn im Zimmer etwas nicht funktioniert'},
      {de:'Darüber entscheidet die Empfangsleitung.', wann:'bei Preisnachlass — nichts zusagen, was du nicht darfst'},
      {de:'Ich fasse später noch einmal nach, ob alles in Ordnung ist.', wann:'nach jeder Reklamation, und dann wirklich tun'},
      {de:'Das Frühstück ist von 6.30 bis 10 Uhr im Erdgeschoss.', wann:'die häufigste Auskunft überhaupt'},
      {de:'Der Bahnhof ist zu Fuß etwa zehn Minuten entfernt.', wann:'bei Wegbeschreibungen — immer in Minuten rechnen'},
      {de:'Zimmer 311 ist frei gemeldet.', wann:'wenn das Zimmer gereinigt und bereit ist'},
      {de:'An 402 hängt „Bitte nicht stören".', wann:'wenn du ein Zimmer nicht machen konntest'},
      {de:'Ich melde einen Schaden in Zimmer 305.', wann:'sobald dir etwas Kaputtes auffällt'},
      {de:'Die Gesamtsumme beträgt 248 Euro 50. Zahlen Sie mit Karte oder in bar?', wann:'beim Check-out an der Kasse'}
    ],
    ueb:[
      {typ:'wahl', f:'Ein Gast ruft an: Das Zimmer ist zu laut. Was tust du zuerst?', o:['Du erklärst, dass die Straße nun mal laut ist','Du entschuldigst dich und wiederholst, was du verstanden hast','Du sagst, dass alle Zimmer gleich sind'], l:1, e:'Erst spiegeln, dann lösen. Wenn der Gast merkt, dass du zugehört hast, wird das Gespräch sofort ruhiger.'},
      {typ:'wahl', f:'An der Zimmertür hängt „Bitte nicht stören". Was machst du?', o:['Kurz klopfen und trotzdem reingehen','Das Zimmer auslassen und später noch einmal kommen','Die Karte benutzen, es ist ja Mittag'], l:1, e:'Das Schild wird nie ignoriert. Melde der Rezeption, dass das Zimmer noch nicht gemacht werden konnte.'},
      {typ:'wahl', f:'Was bedeutet: Das Zimmer ist auf Abreise?', o:['Der Gast reist heute ab, das Zimmer wird komplett gemacht','Das Zimmer ist gesperrt','Der Gast bleibt noch eine Nacht'], l:0, e:'Abreisezimmer haben Priorität, weil dort am Nachmittag schon der nächste Gast einzieht.'},
      {typ:'luecke', f:'Würden Sie bitte kurz den ___ ausfüllen?', l:'Meldeschein', e:'Der Meldeschein ist Pflicht. Name, Adresse und Unterschrift des Gastes müssen darauf stehen.'},
      {typ:'luecke', f:'Können Sie mir den Namen bitte ___?', l:'buchstabieren', e:'Am Telefon buchstabierst du jeden Namen. Ein falsch geschriebener Name heißt später: Reservierung nicht gefunden.'},
      {typ:'luecke', f:'Zimmer 311 ist ___ gemeldet und kann vergeben werden.', l:'frei', e:'Frei gemeldet heißt: gereinigt, kontrolliert, bereit. Erst dann darf die Rezeption es vergeben.'},
      {typ:'luecke', f:'Ich ___ in einer halben Stunde noch einmal nach, ob alles in Ordnung ist.', l:'fasse', e:'nachfassen ist trennbar und heißt: sich noch einmal melden. Genau das unterscheidet guten von mittelmäßigem Service.'},
      {typ:'luecke', f:'Die ___ beträgt 248 Euro 50.', l:'Gesamtsumme', e:'Die Gesamtsumme nennst du beim Kassieren immer laut und deutlich, bevor der Gast die Karte gibt.'},
      {typ:'bausteine', l:'Ich habe Ihre Reservierung für zwei Nächte.', teile:['Ich','habe','Ihre','Reservierung','für','zwei','Nächte'], e:'für plus Akkusativ: für zwei Nächte. Der Zeitraum steht am Satzende.'},
      {typ:'bausteine', l:'Ich informiere die Technik und melde mich in zwanzig Minuten.', teile:['Ich','informiere','die','Technik','und','melde','mich','in','zwanzig','Minuten'], e:'Zwei Hauptsätze mit und. Im zweiten Teil steht das Subjekt nicht noch einmal.'},
      {typ:'bausteine', l:'Das Frühstück ist von halb sieben bis zehn Uhr.', teile:['Das','Frühstück','ist','von','halb','sieben','bis','zehn','Uhr'], e:'von … bis … für Zeiträume. Halb sieben heißt 6.30 Uhr, nicht 7.30 Uhr.'},
      {typ:'paare', p:[['belegt','ein Gast wohnt darin und bleibt noch'],['auf Abreise','der Gast reist heute ab'],['frei gemeldet','gereinigt und bereit für den nächsten Gast'],['Zusatzbett','drittes Bett für ein Kind oder eine dritte Person'],['Fundsache','etwas, das ein Gast vergessen hat']], e:'Diese fünf Wörter brauchst du im Housekeeping jeden Tag. Sie stehen genau so auf der Liste.'},
      {typ:'paare', p:[['der Meldeschein','Formular mit Name, Adresse und Unterschrift'],['die Zimmerkategorie','Standard, Superior, Suite'],['die Rechnungsadresse','Anschrift, an die die Rechnung geht'],['die Empfangsleitung','entscheidet über Preisnachlass und Sonderfälle']], e:'An der Rezeption sind das die vier Wörter, mit denen fast jedes Gespräch arbeitet.'},
      {typ:'hoeren', text:'Guten Tag, ich möchte ein Doppelzimmer buchen, vom vierzehnten bis zum sechzehnten März, zwei Nächte, für zwei Personen. Der Name ist Kowalski, K wie Kaufmann, O, W wie Wilhelm, A, L, S, K, I.', f:'Wie viele Nächte werden gebucht?', o:['eine Nacht','zwei Nächte','drei Nächte'], l:1, e:'Bei Reservierungen zählst du immer die Nächte, nicht die Tage. Vom Vierzehnten bis zum Sechzehnten sind zwei Nächte.'},
      {typ:'hoeren', text:'Hier Sander, Zimmer 305. Die Klimaanlage geht nicht, es ist sehr warm. Ich möchte entweder ein anderes Zimmer oder einen Preisnachlass.', f:'Was will die Gästin?', o:['nur ein anderes Handtuch','ein anderes Zimmer oder einen Preisnachlass','das Frühstück später'], l:1, e:'Sie nennt zwei mögliche Lösungen. Greif die auf, die du selbst entscheiden darfst — das Zimmer.'},
      {typ:'sprechen', f:'Sag am Telefon: Ich wiederhole zur Sicherheit: zwei Nächte, Doppelzimmer, Anreise am Freitag.', l:'Ich wiederhole zur Sicherheit', e:'Sprich die Zahlen langsam und mach nach jeder Angabe eine kleine Pause. So kann der Gast korrigieren.'},
      {typ:'sprechen', f:'Buchstabiere deinen eigenen Nachnamen laut, mit dem deutschen Alphabet.', l:'Mein Name ist', e:'Übe das wirklich laut. Am Telefon buchstabierst du jeden Tag — und dein eigener Name kommt am häufigsten dran.'},
      {typ:'ordnen', l:['Ich begrüße den Gast und suche die Reservierung.','Ich lasse den Meldeschein ausfüllen.','Ich erkläre Frühstückszeiten und WLAN.','Ich übergebe die Zimmerkarte mit Nummer und Etage.','Ich wünsche einen angenehmen Aufenthalt.'], f:'Bring den Check-in in die richtige Reihenfolge.', e:'Die Zimmerkarte kommt zum Schluss. Wer sie zu früh gibt, verliert den Gast, bevor die Informationen angekommen sind.'},
      {typ:'artikel', w:'Meldeschein', l:'der', e:'der Schein, also auch der Meldeschein. Ebenso: der Lieferschein, der Gutschein.'},
      {typ:'artikel', w:'Rezeption', l:'die', e:'die Rezeption. Wörter auf -tion sind im Deutschen immer feminin: die Reservierung, die Information, die Rezeption.'},
      {typ:'artikel', w:'Zusatzbett', l:'das', e:'das Bett, also das Zusatzbett. Plural: die Zusatzbetten.'}
    ],
    schreiben:{
      auf:'Schreibe die Übergabe vom Frühdienst an den Spätdienst an der Rezeption.',
      punkte:['Welche Anreisen und Abreisen noch offen sind','Welche Reklamation läuft und wie weit sie ist','Was die Technik oder das Housekeeping noch erledigen muss','Was der Spätdienst besonders beachten soll'],
      hilfe:'Schreibe knapp, in Stichpunkten oder kurzen Sätzen, und immer mit Zimmernummer und Uhrzeit. Fang die Punkte so an: „Offen sind noch …" · „Zimmer … hat um … Uhr reklamiert, weil …" · „Die Technik kommt morgen um …" · „Bitte beachten: …". Nenne Namen nur so, wie sie im System stehen, und bewerte niemanden — nicht „der Gast war unmöglich", sondern „der Gast wünscht eine Antwort bis 10 Uhr". Fünf bis acht Zeilen reichen.'
    }
  },

  /* ===================== 10 · EINZELHANDEL UND KASSE ===================== */
  {
    id:'handel',
    t:'Einzelhandel und Kasse',
    unter:'Verkauf, Kasse, Warenverräumung, Lebensmitteleinzelhandel, Fachhandel',
    lvl:'B1–B2',
    pruef:'Keine Prüfung — Trägerbescheinigung im BAMF-Spezialkurs Einzelhandel (300 Unterrichtseinheiten). Einschlägig: Deutsch-Test für den Beruf B2',
    warum:'41 Prozent der Beschäftigten im Verkauf von Lebensmitteln haben eine Einwanderungsgeschichte. Der Einzelhandel ist neben der Kfz-Mechatronik das einzige Berufsfeld mit einem vollständigen, veröffentlichten BAMF-Sprachkonzept — dort steht wörtlich, dass die Kundenkommunikation das Kernstück jedes Kurses sein soll. Die Bundesagentur nennt für den Einzelhandel B2 und für kaufmännische Berufe wie Einzelhandelskaufmann und -frau teils sogar C1, weil viel mit Schriftsprache gearbeitet wird. Für die zweijährige Verkäufer-Ausbildung liegen die Anforderungen niedriger, in der Praxis reicht dort ein gutes B1.',
    handlungen:[
      {t:'Das Verkaufsgespräch in acht Phasen führen', e:'Von der Begrüßung über Bedarfsermittlung, Warenvorlage und Argumentation bis zu Preisnennung, Ergänzungsangebot und Verabschiedung.', lvl:'B2'},
      {t:'Den Bedarf mit Fragetechnik ermitteln', e:'Offene Fragen zum Öffnen, geschlossene Fragen zum Festmachen — und dahinter das Kaufmotiv erkennen.', lvl:'B2'},
      {t:'Einen Einwand behandeln', e:'Das ist mir zu teuer nicht abwehren, sondern aufgreifen: nachfragen, Nutzen gegenrechnen, Alternative zeigen.', lvl:'B2'},
      {t:'Reklamation und Umtausch bearbeiten', e:'Die Beschwerde verstehen, die Umtauschregeln sachlich und bestimmt erklären und das Recht auf Nacherfüllung richtig darstellen.', lvl:'B2'},
      {t:'An der Kasse korrekt kassieren', e:'Gesamtsumme deutlich nennen, Wechselgeld vorzählen, Zahlungsarten erklären und für die Kundenkarte werben.', lvl:'B1'},
      {t:'Die Alterskontrolle durchführen', e:'Den Ausweis verlangen, die Regel erklären und den Verkauf freundlich, aber ohne Diskussion verweigern.', lvl:'B2'},
      {t:'Kassenprobleme ansprechen', e:'Vermeintliches Falschgeld ansprechen, auf die Beschwerde über falsches Rückgeld eingehen und ein Kassenminus gegenüber der Marktleitung erklären.', lvl:'B2'},
      {t:'Eine telefonische Bestellung annehmen', e:'Artikel, Menge und Abholtermin aufnehmen und durch Nachfragen sicherstellen, dass du richtig verstanden hast.', lvl:'B1'},
      {t:'Warenbezogen schreiben', e:'Preisschild nach der Preisangabenverordnung, Inventurliste, Eingaben im Warenwirtschaftssystem, Bestellung an den Lieferanten.', lvl:'B2'},
      {t:'Einen Mangel dem Lieferanten melden', e:'Per E-Mail oder Telefon klar und detailliert beschreiben, was fehlt oder beschädigt ist, und eine Frist setzen.', lvl:'B2'}
    ],
    chunks:[
      {de:'Kann ich Ihnen helfen?', hi:'die Begrüßungsphase — besser noch offen fragen', bsp:'Guten Tag, kann ich Ihnen helfen?'},
      {de:'den Bedarf ermitteln', hi:'herausfinden, was die Kundin wirklich sucht', bsp:'Zuerst ermittle ich den Bedarf, dann lege ich die Ware vor.'},
      {de:'eine offene Frage stellen', hi:'beginnt mit W und lässt sich nicht mit ja beantworten', bsp:'Wofür möchten Sie die Jacke denn hauptsächlich nutzen?'},
      {de:'eine geschlossene Frage stellen', hi:'am Ende, um eine Entscheidung festzumachen', bsp:'Nehmen Sie die blaue oder die graue?'},
      {de:'das Kaufmotiv erkennen', hi:'Sicherheit, Sparsamkeit, Bequemlichkeit, Ansehen, Gesundheit', bsp:'Ihr Kaufmotiv ist offenbar Sicherheit, deshalb zeige ich Ihnen dieses Modell.'},
      {de:'die Ware vorlegen', hi:'das Produkt in die Hand geben, nicht nur zeigen', bsp:'Ich lege Ihnen beide Modelle einmal vor.'},
      {de:'den Nutzen herausstellen', hi:'nicht Merkmal, sondern Vorteil für die Kundin nennen', bsp:'Der Vorteil für Sie ist, dass Sie die Jacke bei jedem Wetter tragen können.'},
      {de:'einen Einwand behandeln', hi:'die Bremse der Kundin ernst nehmen statt widersprechen', bsp:'Das ist mir zu teuer — den Einwand behandle ich mit einer Rückfrage.'},
      {de:'Im Vergleich wozu ist es zu teuer?', hi:'die klassische Rückfrage beim Preiseinwand', bsp:'Darf ich fragen: Im Vergleich wozu ist es zu teuer?'},
      {de:'ein Ergänzungsangebot machen', hi:'passendes Zubehör anbieten, bevor die Kundin geht', bsp:'Zu den Schuhen empfehle ich Ihnen noch ein Imprägnierspray.'},
      {de:'die Ware umtauschen', hi:'zurückgeben und etwas anderes nehmen', bsp:'Sie können die Ware innerhalb von vierzehn Tagen umtauschen.'},
      {de:'den Kassenbon vorlegen', hi:'Voraussetzung für Umtausch aus Kulanz', bsp:'Haben Sie den Kassenbon dabei?'},
      {de:'aus Kulanz zurücknehmen', hi:'freiwillig, nicht gesetzlich verpflichtet', bsp:'Wir nehmen die Ware aus Kulanz zurück.'},
      {de:'das Recht auf Nacherfüllung', hi:'bei einem Mangel: erst Reparatur oder Ersatz, dann Geld zurück', bsp:'Bei einem Mangel haben Sie zuerst das Recht auf Nacherfüllung.'},
      {de:'einen Mangel aufnehmen', hi:'genau beschreiben, was nicht funktioniert', bsp:'Ich nehme den Mangel auf: die Naht ist an der Seite offen.'},
      {de:'das Reklamationsformular ausfüllen', hi:'das betriebsinterne Formular bei jeder Reklamation', bsp:'Ich fülle jetzt das Reklamationsformular mit Ihnen aus.'},
      {de:'die Gesamtsumme nennen', hi:'laut und deutlich, bevor bezahlt wird', bsp:'Die Gesamtsumme beträgt 34 Euro 90.'},
      {de:'das Wechselgeld vorzählen', hi:'laut zählen, damit es keinen Streit gibt', bsp:'Ich zähle Ihnen das Wechselgeld vor: 5, 10, 15 Euro.'},
      {de:'die Alterskontrolle durchführen', hi:'bei Alkohol, Tabak, Energydrinks und Filmen', bsp:'Ich muss eine Alterskontrolle durchführen, darf ich Ihren Ausweis sehen?'},
      {de:'den Verkauf verweigern', hi:'wenn kein Ausweis vorliegt — ohne Diskussion', bsp:'Ohne Ausweis muss ich den Verkauf leider verweigern.'},
      {de:'einen Schein prüfen', hi:'bei Verdacht auf Falschgeld, ruhig und sachlich', bsp:'Ich prüfe den Schein einmal kurz, das ist bei uns Vorschrift.'},
      {de:'ein Kassenminus haben', hi:'am Ende der Schicht fehlt Geld in der Kasse', bsp:'Ich habe heute ein Kassenminus von 12 Euro 40.'},
      {de:'die Kasse abrechnen', hi:'zählen und mit dem Kassenbericht vergleichen', bsp:'Um 20 Uhr rechne ich die Kasse ab.'},
      {de:'für die Kundenkarte werben', hi:'gehört zum Standard an der Kasse', bsp:'Haben Sie schon unsere Kundenkarte?'},
      {de:'ein Preisschild schreiben', hi:'mit Warenbezeichnung, Gesamtpreis und Grundpreis', bsp:'Das Preisschild muss auch den Grundpreis pro Kilogramm zeigen.'},
      {de:'der Grundpreis pro Kilogramm', hi:'Pflicht nach der Preisangabenverordnung', bsp:'Neben dem Verkaufspreis steht immer der Grundpreis pro Kilogramm.'},
      {de:'die Ware verräumen', hi:'aus dem Lager ins Regal bringen und einsortieren', bsp:'Nach der Lieferung verräume ich die Ware ins Regal.'},
      {de:'das Mindesthaltbarkeitsdatum kontrollieren', hi:'kurz MHD, ältere Ware nach vorne', bsp:'Beim Auffüllen kontrolliere ich immer das Mindesthaltbarkeitsdatum.'},
      {de:'die Ware nach vorne räumen', hi:'ältere Ware zuerst verkaufen', bsp:'Bitte die alte Ware nach vorne räumen.'},
      {de:'die Inventur machen', hi:'den Bestand zählen und mit dem System vergleichen', bsp:'Am Sonntag machen wir Inventur.'},
      {de:'im Warenwirtschaftssystem buchen', hi:'jede Bewegung wird im System erfasst', bsp:'Den Bruch buche ich im Warenwirtschaftssystem aus.'},
      {de:'einen Mangel dem Lieferanten melden', hi:'schriftlich, mit Lieferschein- und Artikelnummer', bsp:'Ich melde den Mangel dem Lieferanten noch heute.'},
      {de:'eine Frist setzen', hi:'sagen, bis wann etwas erledigt sein muss', bsp:'Wir setzen eine Frist bis zum Freitag der kommenden Woche.'}
    ],
    dialoge:[
      {
        id:'handel-umtausch',
        titel:'Reklamation und Umtausch',
        lvl:'B2',
        dauer:'5 Min',
        ort:'Es ist Montagvormittag. Eine Kundin steht mit einem Paar Sneaker an der Serviceteke. Die Sohle löst sich, gekauft vor drei Wochen, Kassenbon ist dabei.',
        schritte:[
          {amanda:'Ich habe die Schuhe vor drei Wochen hier gekauft und schon löst sich die Sohle. Ich möchte mein Geld zurück.', hinweis:'Nimm die Beschwerde an und beschreibe den Mangel genau, bevor du über die Lösung sprichst.', beispiel:'Das tut mir leid. Darf ich einmal schauen? Ja, die Sohle löst sich vorne an der Naht. Haben Sie den Kassenbon dabei?', redemittel:['Das tut mir leid.','Darf ich einmal schauen?','Haben Sie den Kassenbon dabei?']},
          {amanda:'Hier, bitte. Also bekomme ich das Geld zurück?', hinweis:'Erkläre die Nacherfüllung sachlich und bestimmt — freundlich, aber ohne falsche Versprechen.', beispiel:'Bei einem Mangel haben Sie zuerst das Recht auf Nacherfüllung. Das heißt: Wir tauschen die Schuhe gegen ein neues Paar oder lassen sie reparieren. Was wäre Ihnen lieber?', redemittel:['Bei einem Mangel haben Sie zuerst das Recht auf Nacherfüllung.','Das heißt: Wir tauschen … oder …','Was wäre Ihnen lieber?']},
          {amanda:'Das finde ich nicht in Ordnung. Ich will die Schuhe gar nicht mehr.', hinweis:'Bleib bei der Regel, aber zeig Kompromissbereitschaft.', beispiel:'Das kann ich verstehen. Wenn der Umtausch auch beim zweiten Paar nicht hält, bekommen Sie selbstverständlich Ihr Geld zurück. Möchten Sie es einmal mit einem neuen Paar versuchen?', redemittel:['Das kann ich verstehen.','Wenn … nicht …, bekommen Sie selbstverständlich …','Möchten Sie es einmal mit … versuchen?']},
          {amanda:'Na gut, dann ein neues Paar. Aber in derselben Größe.', hinweis:'Bestätige und nenne den nächsten Schritt konkret.', beispiel:'Sehr gern, Größe 39. Ich fülle jetzt mit Ihnen das Reklamationsformular aus, dann hole ich Ihnen das neue Paar aus dem Lager.', redemittel:['Sehr gern, Größe …','Ich fülle jetzt das Reklamationsformular aus.','Dann hole ich Ihnen …']},
          {amanda:'Wie lange dauert das denn?', hinweis:'Nenne eine Zeit und schließe das Gespräch freundlich ab.', beispiel:'Etwa fünf Minuten. Wenn Sie möchten, setzen Sie sich solange dort hin, ich komme direkt zu Ihnen.', redemittel:['Etwa … Minuten.','Wenn Sie möchten, …','Ich komme direkt zu Ihnen.']}
        ]
      },
      {
        id:'handel-alterskontrolle',
        titel:'Die Alterskontrolle an der Kasse',
        lvl:'B2',
        dauer:'4 Min',
        ort:'Es ist Freitag, 18.30 Uhr, die Schlange ist lang. Ein sehr junger Kunde legt ein Sechserpack Bier und eine Packung Zigaretten aufs Band.',
        schritte:[
          {amanda:'Einmal das bitte.', hinweis:'Verlange den Ausweis freundlich und begründe es mit der Vorschrift, nicht mit dem Aussehen.', beispiel:'Bei Alkohol und Tabak müssen wir das Alter kontrollieren. Darf ich bitte einmal Ihren Ausweis sehen?', redemittel:['Bei Alkohol und Tabak müssen wir das Alter kontrollieren.','Darf ich bitte einmal Ihren Ausweis sehen?','Das ist bei uns Vorschrift.']},
          {amanda:'Den habe ich nicht dabei. Ich bin achtzehn, ehrlich.', hinweis:'Verweigere den Verkauf klar und ohne Diskussion — aber ohne den Kunden bloßzustellen.', beispiel:'Das glaube ich Ihnen gern, aber ohne Ausweis darf ich Bier und Zigaretten leider nicht verkaufen. Das ist Gesetz, da habe ich keinen Spielraum.', redemittel:['Das glaube ich Ihnen gern, aber …','Ohne Ausweis darf ich … leider nicht verkaufen.','Da habe ich keinen Spielraum.']},
          {amanda:'Das ist doch lächerlich. Bei Ihrer Kollegin geht das immer.', hinweis:'Geh nicht auf den Vergleich ein. Bleib bei dir und bei der Regel.', beispiel:'Ich kann nur sagen, wie ich es machen muss. Ohne Ausweis kein Verkauf — das gilt für alle. Die anderen Artikel kann ich Ihnen selbstverständlich abrechnen.', redemittel:['Ich kann nur sagen, wie ich es machen muss.','Das gilt für alle.','Die anderen Artikel kann ich Ihnen abrechnen.']},
          {amanda:'Dann holen Sie mal Ihren Chef.', hinweis:'Die Bitte ist legitim. Sag zu und bleib ruhig.', beispiel:'Das mache ich gern. Ich rufe die Marktleitung, das dauert etwa zwei Minuten. Darf ich in der Zwischenzeit die anderen Kunden abkassieren?', redemittel:['Das mache ich gern.','Ich rufe die Marktleitung.','Darf ich in der Zwischenzeit …?']},
          {amanda:'Ach, lassen Sie. Dann nur das Wasser und die Chips.', hinweis:'Schließe sachlich ab, ohne Triumph und ohne Vorwurf.', beispiel:'Alles klar. Wasser und Chips, die Gesamtsumme beträgt 4 Euro 30. Zahlen Sie bar oder mit Karte?', redemittel:['Alles klar.','Die Gesamtsumme beträgt …','Zahlen Sie bar oder mit Karte?']}
        ]
      },
      {
        id:'handel-einwand',
        titel:'Das ist mir zu teuer',
        lvl:'B2',
        dauer:'4 Min',
        ort:'Im Fachhandel für Haushaltsgeräte. Ein Kunde interessiert sich seit zehn Minuten für einen Staubsauger, zuckt aber beim Preisschild zurück.',
        schritte:[
          {amanda:'Zweihundertneunzig Euro? Das ist mir ehrlich gesagt zu teuer.', hinweis:'Widersprich nicht. Frag nach, worauf sich der Vergleich bezieht.', beispiel:'Das kann ich nachvollziehen. Darf ich fragen: Im Vergleich wozu ist es zu teuer?', redemittel:['Das kann ich nachvollziehen.','Darf ich fragen …','Im Vergleich wozu …?']},
          {amanda:'Im Internet habe ich ähnliche für hundertachtzig gesehen.', hinweis:'Stell den Nutzen heraus, nicht das Merkmal.', beispiel:'Verstehe. Der Unterschied liegt beim Motor: Dieses Gerät hat fünf Jahre Garantie, und wir reparieren im Haus. Für Sie heißt das: kein Einschicken und kein Warten.', redemittel:['Der Unterschied liegt bei …','Für Sie heißt das …','Wir reparieren im Haus.']},
          {amanda:'Trotzdem, das ist viel Geld auf einmal.', hinweis:'Biete eine echte Alternative an, statt den Preis zu verteidigen.', beispiel:'Dann zeige ich Ihnen gern noch das Vorgängermodell für zweihundertzwanzig Euro. Es hat die gleiche Düse, nur einen kleineren Behälter.', redemittel:['Dann zeige ich Ihnen gern …','Es hat … , nur …','Möchten Sie beide einmal vergleichen?']},
          {amanda:'Das klingt besser. Was ist der Unterschied im Alltag?', hinweis:'Antworte konkret und mach dann mit einer geschlossenen Frage den Abschluss.', beispiel:'Sie müssen den Behälter etwas öfter leeren, sonst nichts. Nehmen Sie das Vorgängermodell oder möchten Sie das größere?', redemittel:['Sie müssen … etwas öfter …, sonst nichts.','Nehmen Sie … oder möchten Sie …?','Beide sind sofort verfügbar.']},
          {amanda:'Das Vorgängermodell, bitte.', hinweis:'Mach das Ergänzungsangebot, bevor der Kunde zur Kasse geht.', beispiel:'Sehr gern. Dazu empfehle ich Ihnen noch die Ersatzfilter im Doppelpack, dann haben Sie ein Jahr Ruhe.', redemittel:['Sehr gern.','Dazu empfehle ich Ihnen noch …','Dann haben Sie … Ruhe.']}
        ]
      }
    ],
    saetze:[
      {de:'Guten Tag, kann ich Ihnen helfen?', wann:'die Begrüßungsphase — Blickkontakt zuerst, dann der Satz'},
      {de:'Wofür möchten Sie das Gerät hauptsächlich nutzen?', wann:'Bedarfsermittlung mit einer offenen Frage'},
      {de:'Der Vorteil für Sie ist, dass …', wann:'in der Verkaufsargumentation — Nutzen statt Merkmal'},
      {de:'Darf ich fragen: Im Vergleich wozu ist es zu teuer?', wann:'beim Preiseinwand, statt sofort einen Rabatt anzubieten'},
      {de:'Nehmen Sie die blaue oder die graue?', wann:'geschlossene Frage am Ende, um die Entscheidung festzumachen'},
      {de:'Dazu empfehle ich Ihnen noch …', wann:'Ergänzungsangebot, bevor der Kunde zur Kasse geht'},
      {de:'Haben Sie den Kassenbon dabei?', wann:'bei Umtausch und Reklamation'},
      {de:'Bei einem Mangel haben Sie zuerst das Recht auf Nacherfüllung.', wann:'wenn Kundschaft sofort Geld zurück verlangt'},
      {de:'Wir nehmen die Ware aus Kulanz zurück.', wann:'wenn es keinen Mangel gibt, ihr es aber trotzdem macht'},
      {de:'Die Gesamtsumme beträgt 34 Euro 90.', wann:'an der Kasse, laut und deutlich vor dem Bezahlen'},
      {de:'Ich zähle Ihnen das Wechselgeld vor.', wann:'bei Barzahlung — schützt dich vor Streit über das Rückgeld'},
      {de:'Darf ich bitte einmal Ihren Ausweis sehen?', wann:'bei Alkohol, Tabak, Energydrinks und Filmen'},
      {de:'Ohne Ausweis darf ich das leider nicht verkaufen.', wann:'wenn die Alterskontrolle nicht möglich ist — ohne Diskussion'},
      {de:'Ich prüfe den Schein einmal kurz, das ist bei uns Vorschrift.', wann:'bei Verdacht auf Falschgeld — nie den Kunden beschuldigen'},
      {de:'Ich melde den Mangel noch heute dem Lieferanten.', wann:'wenn bei der Anlieferung etwas fehlt oder beschädigt ist'}
    ],
    ueb:[
      {typ:'wahl', f:'Ein Kunde sagt: Das ist mir zu teuer. Was ist die beste erste Reaktion?', o:['Sofort einen Rabatt anbieten','Nachfragen: Im Vergleich wozu ist es zu teuer?','Sagen, dass Qualität eben kostet'], l:1, e:'Der Preiseinwand ist fast nie ein Preisproblem. Mit der Rückfrage erfährst du, ob es um Konkurrenz, Budget oder Zweifel am Nutzen geht.'},
      {typ:'wahl', f:'Ein junger Kunde will Bier kaufen und hat keinen Ausweis dabei. Was tust du?', o:['Verkaufen, er sieht alt genug aus','Den Verkauf verweigern und die Regel kurz erklären','Die Kollegin fragen, ob sie ihn kennt'], l:1, e:'Ohne Ausweis kein Verkauf. Erkläre es mit der Vorschrift, nicht mit dem Aussehen — dann wird es kein persönlicher Streit.'},
      {typ:'wahl', f:'Ein Kunde reklamiert einen echten Mangel und will sofort Geld zurück. Was ist rechtlich der erste Schritt?', o:['Geld zurück','Nacherfüllung, also Reparatur oder Ersatz','Gar nichts, der Bon ist zu alt'], l:1, e:'Bei einem Mangel kommt zuerst die Nacherfüllung: Reparatur oder Austausch. Geld zurück wird erst danach zum Thema.'},
      {typ:'luecke', f:'Ich zähle Ihnen das ___ vor: 5, 10, 15 Euro.', l:'Wechselgeld', e:'Vorzählen ist Standard an der Kasse. Es schützt dich, wenn jemand später behauptet, er habe zu wenig zurückbekommen.'},
      {typ:'luecke', f:'Bei einem Mangel haben Sie zuerst das Recht auf ___.', l:'Nacherfüllung', e:'Nacherfüllung heißt: Reparatur oder Ersatzlieferung. Das ist der Satz, den du im Reklamationsgespräch sicher können musst.'},
      {typ:'luecke', f:'Neben dem Verkaufspreis muss auch der ___ pro Kilogramm stehen.', l:'Grundpreis', e:'Das schreibt die Preisangabenverordnung vor. Auf das Schild gehören Warenbezeichnung, Gesamtpreis und Grundpreis.'},
      {typ:'luecke', f:'Ich habe heute ein ___ von 12 Euro 40.', l:'Kassenminus', e:'Kassenminus heißt: Es fehlt Geld. Melde es selbst und sofort — verschwiegene Differenzen werden immer größer als der Betrag.'},
      {typ:'luecke', f:'Am Sonntag machen wir ___, dann wird der ganze Bestand gezählt.', l:'Inventur', e:'Bei der Inventur wird der gezählte Bestand mit dem Warenwirtschaftssystem verglichen.'},
      {typ:'bausteine', l:'Darf ich bitte einmal Ihren Ausweis sehen?', teile:['Darf','ich','bitte','einmal','Ihren','Ausweis','sehen'], e:'Höfliche Bitte mit dürfen. Ihren steht im Akkusativ, weil sehen einen Akkusativ verlangt.'},
      {typ:'bausteine', l:'Der Vorteil für Sie ist, dass die Jacke wasserdicht ist.', teile:['Der','Vorteil','für','Sie','ist','dass','die','Jacke','wasserdicht','ist'], e:'Nach dass steht das Verb ganz hinten. Diese Satzform ist das Herz der Verkaufsargumentation.'},
      {typ:'bausteine', l:'Ohne Ausweis darf ich das leider nicht verkaufen.', teile:['Ohne','Ausweis','darf','ich','das','leider','nicht','verkaufen'], e:'ohne plus Akkusativ, ohne Artikel. Das Modalverb steht auf Position zwei, der Infinitiv am Ende.'},
      {typ:'paare', p:[['Begrüßung','Blickkontakt und ein freundlicher erster Satz'],['Bedarfsermittlung','offene Fragen, um herauszufinden, was gesucht wird'],['Warenvorlage','das Produkt in die Hand geben'],['Einwandbehandlung','die Bremse der Kundin aufgreifen'],['Ergänzungsangebot','passendes Zubehör anbieten']], e:'Fünf der acht Phasen des Verkaufsgesprächs. Wer sie in dieser Reihenfolge geht, verkauft mehr und diskutiert weniger.'},
      {typ:'paare', p:[['offene Frage','Was ist Ihnen dabei besonders wichtig?'],['geschlossene Frage','Nehmen Sie die blaue oder die graue?'],['Kaufmotiv Sicherheit','fragt nach Garantie und Haltbarkeit'],['Kaufmotiv Sparsamkeit','fragt zuerst nach dem Preis']], e:'Offene Fragen öffnen das Gespräch, geschlossene schließen es. Beide brauchst du — nur in der richtigen Reihenfolge.'},
      {typ:'hoeren', text:'Guten Tag, ich hätte gern zehn Kästen Mineralwasser, still, für Freitag zur Abholung. Der Name ist Brandt, B wie Berta, R, A, N, D, T. Meine Nummer ist die 0221 45 67 89.', f:'Was wird bestellt?', o:['zehn Kästen Mineralwasser, still, Abholung Freitag','zehn Flaschen Wasser mit Kohlensäure','zwei Kästen Wasser für Montag'], l:0, e:'Bei telefonischen Bestellungen wiederholst du immer Menge, Artikel und Termin. Genau dort passieren die teuren Missverständnisse.'},
      {typ:'hoeren', text:'Sie haben mir zu wenig Geld zurückgegeben. Ich habe mit fünfzig bezahlt und nur zwölf Euro zurückbekommen, dabei waren es nur achtundzwanzig Euro.', f:'Was reklamiert die Kundin?', o:['einen kaputten Artikel','falsches Rückgeld','einen falschen Preis im Regal'], l:1, e:'Bleib ruhig, sag nicht sofort nein. Die Kasse wird gezählt, dann ist es geklärt — genau das sagst du der Kundin auch.'},
      {typ:'sprechen', f:'Sag an der Kasse: Die Gesamtsumme beträgt 34 Euro 90. Zahlen Sie bar oder mit Karte?', l:'Die Gesamtsumme beträgt', e:'Sprich die Summe langsam und deutlich. Viele Kunden hören sie nur einmal und stellen sich darauf ein.'},
      {typ:'sprechen', f:'Sag freundlich und bestimmt: Ohne Ausweis darf ich das leider nicht verkaufen.', l:'Ohne Ausweis darf ich das leider nicht verkaufen', e:'Freundlich im Ton, fest in der Sache. Kein Fragezeichen am Ende, sonst klingt es verhandelbar.'},
      {typ:'ordnen', l:['Begrüßung','Bedarfsermittlung','Warenvorlage','Verkaufsargumentation','Einwandbehandlung','Preisnennung','Ergänzungsangebot','Verabschiedung'], f:'Bring die acht Phasen des Verkaufsgesprächs in die richtige Reihenfolge.', e:'Der Preis kommt spät — erst wenn der Nutzen klar ist. Wer zu früh über Geld spricht, verkauft über den Preis statt über die Ware.'},
      {typ:'artikel', w:'Kassenbon', l:'der', e:'der Bon, also auch der Kassenbon. Umgangssprachlich sagt man auch der Kassenzettel.'},
      {typ:'artikel', w:'Nacherfüllung', l:'die', e:'die Erfüllung, also die Nacherfüllung. Wörter auf -ung sind im Deutschen immer feminin.'},
      {typ:'artikel', w:'Preisschild', l:'das', e:'das Schild, also das Preisschild. Achtung: der Schild ist etwas anderes, nämlich der zum Schutz.'}
    ],
    schreiben:{
      auf:'Schreibe die E-Mail an den Lieferanten, in der du einen Mangel an der Lieferung von gestern meldest.',
      punkte:['Welche Lieferung du meinst: Datum, Lieferscheinnummer, Artikel','Was genau fehlt oder beschädigt ist, mit Menge','Was du erwartest: Ersatzlieferung oder Gutschrift','Bis wann du eine Antwort brauchst'],
      hilfe:'Schreibe sachlich und höflich im Sie. Kein Ärger, keine Vorwürfe — nur Fakten und eine klare Erwartung. Fang die Punkte so an: „Sehr geehrte Damen und Herren, bei der Lieferung vom … (Lieferschein Nr. …) haben wir Folgendes festgestellt: …" · „Von den bestellten … Kartons waren … beschädigt." · „Wir bitten Sie um Ersatzlieferung bis …" · „Für eine kurze Rückmeldung bis … wären wir Ihnen dankbar." Nenne immer Zahlen und Artikelnummern. Sechs bis acht Sätze reichen.'
    }
  },

  /* ===================== 11 · REINIGUNG UND GEBÄUDESERVICE ===================== */
  {
    id:'reinigung',
    t:'Reinigung und Gebäudeservice',
    unter:'Gebäudereinigung, Unterhaltsreinigung, Glas- und Fassadenreinigung, Hauswirtschaft',
    lvl:'A2–B1',
    pruef:'Keine Sprachprüfung. Einschlägig: Deutsch-Test für den Beruf A2 · Fachpraxis-Berufssprachkurs Reinigung und Hauswirtschaft',
    warum:'45 Prozent der Beschäftigten in Reinigungsberufen in Westdeutschland haben keinen deutschen Pass — fast jede und jeder Zweite und damit der höchste Anteil aller Berufssegmente. In Ostdeutschland sind es etwa 25 Prozent. Gebäudereiniger ist gemeldeter Engpassberuf und für sehr viele Zugewanderte die erste Arbeit in Deutschland überhaupt, oft parallel zum Integrationskurs. Für die Tätigkeit selbst reicht A2 — B1 brauchst du in dem Moment, in dem du Gefährdungen und Schutzmaßnahmen verstehen musst, also spätestens bei der Hygiene- und Sicherheitsunterweisung und beim Umgang mit Gefahrstoffen.',
    handlungen:[
      {t:'Den Revierplan lesen', e:'Objekt, Raumliste, Frequenz und Leistungsverzeichnis durchgehen und wissen, was heute dran ist und was Sonderreinigung wäre.', lvl:'A2'},
      {t:'Dosierung und Kennzeichnung verstehen', e:'Verdünnungsangaben wie eins zu hundert richtig ansetzen, Gefahrensymbole und die H- und P-Sätze auf dem Etikett lesen.', lvl:'B1'},
      {t:'Verfahren und Material benennen', e:'Sagen, ob du nass wischst, feucht wischst, grundreinigst oder desinfizierst — und mit welchem Tuch und welcher Maschine.', lvl:'A2'},
      {t:'Absperren und sichern', e:'Das Warnschild Rutschgefahr aufstellen, den Bereich absperren, die PSA anlegen und Vorbeigehende ansprechen.', lvl:'A2'},
      {t:'Bei Glasbruch, Blut oder Nadelfund richtig handeln', e:'Nichts mit der Hand aufnehmen, den Bereich sichern und sofort die Objektleitung informieren.', lvl:'B1'},
      {t:'Einen Schaden melden', e:'Wasserschaden, defektes Schloss, beschädigtes Inventar knapp und genau melden: wo, was, seit wann, was du schon getan hast.', lvl:'B1'},
      {t:'Fundsachen und Schließregeln einhalten', e:'Gefundenes abgeben und quittieren lassen, Schlüssel zurückgeben, abschließen und den Zutritt dokumentieren.', lvl:'A2'},
      {t:'Mit Nutzern und Bewohnern umgehen', e:'Zutritt erbitten, das Zeitfenster ankündigen, eine Beschwerde annehmen und weiterleiten, ohne selbst zu entscheiden.', lvl:'B1'},
      {t:'Diskretion und Datenschutz wahren', e:'Freundlich sagen, dass du keine Unterlagen anfassen und nichts weitererzählen darfst — auch wenn jemand nachfragt.', lvl:'B1'},
      {t:'Arbeitsrechtliches klären', e:'Stundenzettel führen, einen Einsatzortwechsel verstehen, sich krankmelden, Urlaub beantragen und die Lohnabrechnung nachvollziehen.', lvl:'B1'}
    ],
    chunks:[
      {de:'den Revierplan durchgehen', hi:'der Plan, welches Objekt und welcher Raum wann gereinigt wird', bsp:'Ich gehe den Revierplan für Haus C kurz mit dir durch.'},
      {de:'im Leistungsverzeichnis steht …', hi:'der Vertrag mit dem Kunden: was gemacht wird und was nicht', bsp:'Im Leistungsverzeichnis steht nur Unterhaltsreinigung, keine Fenster.'},
      {de:'die Unterhaltsreinigung machen', hi:'die regelmäßige, tägliche oder wöchentliche Reinigung', bsp:'Die Unterhaltsreinigung mache ich jeden Morgen von 6 bis 9 Uhr.'},
      {de:'eine Sonderreinigung anmelden', hi:'zusätzliche Leistung, die extra beauftragt und bezahlt wird', bsp:'Für die Küche müssten wir eine Sonderreinigung anmelden.'},
      {de:'die Frequenz ist zweimal pro Woche', hi:'wie oft der Raum laut Plan gereinigt wird', bsp:'Im Treppenhaus ist die Frequenz zweimal pro Woche.'},
      {de:'das Mittel eins zu hundert dosieren', hi:'ein Teil Reiniger auf hundert Teile Wasser, geschrieben „1:100"', bsp:'Den Sanitärreiniger dosiere ich eins zu hundert, also zehn Milliliter auf einen Liter.'},
      {de:'das Sicherheitsdatenblatt lesen', hi:'das Blatt zu jedem Reiniger: Gefahren, Schutz, Erste Hilfe', bsp:'Das Sicherheitsdatenblatt hängt im Putzraum an der Tür.'},
      {de:'die H- und P-Sätze beachten', hi:'H heißt Gefahr, P heißt Schutzmaßnahme — steht auf jedem Etikett', bsp:'Bitte vor dem Anmischen die H- und P-Sätze auf dem Kanister lesen.'},
      {de:'niemals zwei Reiniger mischen', hi:'die wichtigste Regel überhaupt: es können giftige Gase entstehen', bsp:'Chlor und Säure niemals mischen, auch nicht im Eimer.'},
      {de:'nass wischen', hi:'mit viel Wasser, für stark verschmutzte Böden', bsp:'Die Umkleide wische ich nass, da ist viel Sand.'},
      {de:'feucht wischen', hi:'nur leicht feucht, für Büro und Parkett', bsp:'Im Büro bitte nur feucht wischen, sonst quillt der Boden.'},
      {de:'eine Grundreinigung durchführen', hi:'einmal im Jahr, alles runter bis auf den Belag', bsp:'Im August führen wir in der Halle eine Grundreinigung durch.'},
      {de:'die Flächen desinfizieren', hi:'nach dem Reinigen abtöten, was an Keimen bleibt', bsp:'Türgriffe und Lichtschalter werden täglich desinfiziert.'},
      {de:'die Einwirkzeit einhalten', hi:'das Mittel muss stehen bleiben, sonst wirkt es nicht', bsp:'Das Desinfektionsmittel braucht fünf Minuten Einwirkzeit.'},
      {de:'die Einscheibenmaschine führen', hi:'die große Bodenmaschine mit einer runden Scheibe', bsp:'Die Einscheibenmaschine führe ich langsam von rechts nach links.'},
      {de:'das Mikrofasertuch wechseln', hi:'pro Raum ein frisches Tuch, sonst verteilst du Schmutz', bsp:'Nach jedem Sanitärraum wechsle ich das Mikrofasertuch.'},
      {de:'die Farbcodierung einhalten', hi:'rot für Sanitär, grün für Küche, blau für Büro', bsp:'Bitte die Farbcodierung einhalten: Rot bleibt im Sanitärbereich.'},
      {de:'das Warnschild aufstellen', hi:'das gelbe Schild mit dem Rutschsymbol', bsp:'Vor dem Wischen stelle ich immer das Warnschild auf.'},
      {de:'den Bereich absperren', hi:'mit Band oder Schild den Zugang sperren', bsp:'Ich sperre den Bereich ab, bis der Boden trocken ist.'},
      {de:'die PSA tragen', hi:'persönliche Schutzausrüstung: Handschuhe, Brille, Schuhe', bsp:'Beim Grundreiniger ist PSA Pflicht: Handschuhe und Schutzbrille.'},
      {de:'die Scherben aufnehmen', hi:'niemals mit der bloßen Hand, immer mit Schaufel und Besen', bsp:'Die Scherben nehme ich mit Kehrblech und Besen auf.'},
      {de:'einen Nadelfund melden', hi:'gebrauchte Spritze im Sanitärbereich — nicht anfassen', bsp:'Ich habe im Herren-WC eine Nadel gefunden und sofort gemeldet.'},
      {de:'einen Schaden melden', hi:'Standardhandlung: sofort und schriftlich', bsp:'Ich muss einen Schaden melden, im dritten Stock läuft Wasser.'},
      {de:'das Schloss ist defekt', hi:'häufigste Meldung nach dem Wasserschaden', bsp:'Das Schloss an Raum 214 ist defekt, die Tür schließt nicht.'},
      {de:'eine Fundsache abgeben', hi:'alles Gefundene kommt ins Büro, nichts in die Tasche', bsp:'Ich habe eine Geldbörse gefunden und als Fundsache abgegeben.'},
      {de:'den Schlüssel quittieren', hi:'mit Unterschrift bestätigen, dass du ihn hast', bsp:'Den Generalschlüssel muss ich morgens quittieren.'},
      {de:'Darf ich kurz reinkommen und sauber machen?', hi:'die Standardfrage an der Bürotür, immer siezen', bsp:'Entschuldigung, darf ich kurz reinkommen und sauber machen?'},
      {de:'das Zeitfenster ankündigen', hi:'sagen, wann du kommst und wie lange du brauchst', bsp:'Ich bin morgen zwischen 7 und 8 Uhr da, das dauert etwa zwanzig Minuten.'},
      {de:'Ich darf keine Unterlagen anfassen', hi:'Datenschutz — Papiere auf dem Schreibtisch bleiben liegen', bsp:'Ich darf keine Unterlagen anfassen, deshalb wische ich nur um die Mappe herum.'},
      {de:'eine Beschwerde weiterleiten', hi:'du nimmst sie an, entscheidest aber nicht selbst', bsp:'Ich leite Ihre Beschwerde heute noch an den Objektleiter weiter.'},
      {de:'den Stundenzettel abzeichnen lassen', hi:'Arbeitszeitnachweis, den der Kunde oder die Leitung unterschreibt', bsp:'Können Sie mir bitte den Stundenzettel abzeichnen?'},
      {de:'der Einsatzort wechselt', hi:'du wirst kurzfristig in ein anderes Objekt geschickt', bsp:'Ab Montag wechselt mein Einsatzort in die Schule am Park.'},
      {de:'sich krankmelden', hi:'vor Schichtbeginn anrufen, das ist Pflicht', bsp:'Ich muss mich für morgen krankmelden, ich habe Fieber.'},
      {de:'den Urlaubsantrag einreichen', hi:'schriftlich, mit Datum von wann bis wann', bsp:'Ich reiche den Urlaubsantrag für die Woche nach Ostern ein.'},
      {de:'der Mindestlohn im Gebäudereinigerhandwerk', hi:'eigener Tariflohn, höher als der allgemeine Mindestlohn', bsp:'Für die Innenreinigung gilt der Mindestlohn im Gebäudereinigerhandwerk.'}
    ],
    dialoge:[
      {
        id:'reinigung-schaden',
        titel:'Wasserschaden an den Objektleiter melden',
        lvl:'B1',
        dauer:'4 Min',
        ort:'Es ist 6.40 Uhr. Du reinigst das Sanitär im zweiten Stock und siehst, dass unter dem dritten Waschbecken Wasser austritt. Der Boden ist schon nass bis zur Tür. Du rufst den Objektleiter Herrn Weber an.',
        schritte:[
          {amanda:'Weber, guten Morgen. Was gibt es?', hinweis:'Sag zuerst, wer du bist und wo du gerade bist.', beispiel:'Guten Morgen, Herr Weber, hier ist Amina Yusuf aus dem Objekt Hauptstraße 12. Ich bin gerade im Sanitär im zweiten Stock.', redemittel:['Guten Morgen, hier ist … aus dem Objekt …','Ich bin gerade in …','Ich muss Ihnen einen Schaden melden.']},
          {amanda:'Okay. Was ist passiert?', hinweis:'Beschreibe sachlich, was du siehst — ohne Vermutung.', beispiel:'Unter dem dritten Waschbecken tritt Wasser aus der Leitung aus. Der Boden steht bis zur Tür unter Wasser.', redemittel:['Unter … tritt Wasser aus.','Der Boden steht unter Wasser bis …','Es sind etwa … Quadratmeter betroffen.']},
          {amanda:'Seit wann läuft das denn?', hinweis:'Sag genau, wann du es bemerkt hast, und rate nicht.', beispiel:'Bemerkt habe ich es um 6.40 Uhr. Gestern Abend um 20 Uhr war noch alles trocken.', redemittel:['Bemerkt habe ich es um … Uhr.','Gestern war noch alles trocken.','Genauer kann ich das leider nicht sagen.']},
          {amanda:'Haben Sie schon etwas gemacht?', hinweis:'Nenne die Maßnahmen, die du schon ergriffen hast.', beispiel:'Ich habe zwei Warnschilder aufgestellt und den Raum abgesperrt. Aufgewischt habe ich noch nichts, damit Sie es sehen können.', redemittel:['Ich habe das Warnschild aufgestellt.','Den Bereich habe ich abgesperrt.','Ich habe Fotos gemacht.']},
          {amanda:'Gut. Ich schicke den Haustechniker. Bleiben Sie bitte da.', hinweis:'Bestätige die Absprache und frag nach dem weiteren Weg.', beispiel:'Ich bleibe hier, bis der Haustechniker da ist. Soll ich den Schaden zusätzlich schriftlich melden?', redemittel:['Ich bleibe hier, bis …','Soll ich den Schaden schriftlich melden?','Melde ich mich noch einmal, wenn er da war?']}
        ]
      },
      {
        id:'reinigung-nutzer',
        titel:'Im Büro um Zutritt bitten',
        lvl:'A2',
        dauer:'3 Min',
        ort:'Es ist 17.10 Uhr. Du willst Raum 214 reinigen, aber Frau Kessler arbeitet noch am Schreibtisch. Auf dem Tisch liegen Akten. Der Papierkorb ist voll.',
        schritte:[
          {amanda:'Ja bitte?', hinweis:'Grüße, stell dich vor und bitte höflich um Zutritt. Siezen.', beispiel:'Guten Abend, mein Name ist Amina Yusuf von der Reinigung. Darf ich kurz reinkommen und sauber machen?', redemittel:['Guten Abend, mein Name ist …','Ich bin von der Reinigung.','Darf ich kurz reinkommen?']},
          {amanda:'Ich habe noch zu tun. Wie lange brauchen Sie denn?', hinweis:'Nenne eine ehrliche Zeitangabe und biete eine Lösung an.', beispiel:'Ich brauche etwa zehn Minuten. Ich kann auch nur den Papierkorb leeren und in zwanzig Minuten wiederkommen.', redemittel:['Ich brauche etwa … Minuten.','Ich kann auch später wiederkommen.','Passt es Ihnen um … Uhr besser?']},
          {amanda:'Machen Sie ruhig. Aber lassen Sie den Schreibtisch, wie er ist.', hinweis:'Bestätige und benenne die Datenschutzregel von dir aus.', beispiel:'Selbstverständlich. Ich darf keine Unterlagen anfassen, ich wische nur um die Mappen herum.', redemittel:['Selbstverständlich.','Ich darf keine Unterlagen anfassen.','Ich lasse alles so liegen, wie es ist.']},
          {amanda:'Übrigens: Die Fenster sind seit Wochen schmutzig. Das ärgert mich.', hinweis:'Nimm die Beschwerde an, verspricht aber nichts, was nicht dein Auftrag ist.', beispiel:'Das kann ich verstehen. Die Fenster gehören nicht zu meinem Auftrag, aber ich leite es heute noch an den Objektleiter weiter.', redemittel:['Das kann ich verstehen.','Das gehört leider nicht zu meinem Auftrag.','Ich leite das an den Objektleiter weiter.']},
          {amanda:'Danke. Und den Boden bitte nicht so nass, ich rutsche sonst aus.', hinweis:'Sag, wie du arbeitest, und weise auf das Warnschild hin.', beispiel:'Ich wische im Büro nur feucht, das trocknet schnell. Ich stelle trotzdem das Warnschild in den Flur.', redemittel:['Ich wische nur feucht.','Der Boden ist in … Minuten trocken.','Ich stelle das Warnschild auf.']}
        ]
      },
      {
        id:'reinigung-dosierung',
        titel:'Einweisung am Gefahrstoff',
        lvl:'B1',
        dauer:'4 Min',
        ort:'Erster Tag im neuen Objekt, 6 Uhr im Putzraum. Die Vorarbeiterin Frau Radu weist dich in den Sanitärreiniger ein. Der Kanister hat ein rotes Gefahrensymbol.',
        schritte:[
          {amanda:'Das ist unser Sanitärreiniger. Weißt du, wie du den ansetzt?', hinweis:'Frag nach der Dosierung — konkret, mit Zahlen.', beispiel:'Noch nicht. Wie ist die Dosierung? Eins zu hundert oder eins zu fünfzig?', redemittel:['Wie ist die Dosierung?','Wie viel Milliliter auf einen Liter?','Nehme ich kaltes oder warmes Wasser?']},
          {amanda:'Eins zu hundert. Also zehn Milliliter auf einen Liter Wasser.', hinweis:'Wiederhole zur Sicherheit zurück, wie eine Anordnung.', beispiel:'Ich wiederhole zur Sicherheit: zehn Milliliter Reiniger auf einen Liter Wasser.', redemittel:['Ich wiederhole zur Sicherheit …','Also …, richtig?','Habe ich das richtig verstanden?']},
          {amanda:'Genau. Und das rote Symbol auf dem Kanister?', hinweis:'Sag, was du tun musst, und frag nach dem Sicherheitsdatenblatt.', beispiel:'Das heißt ätzend, ich brauche Handschuhe und Schutzbrille. Wo hängt das Sicherheitsdatenblatt?', redemittel:['Das Symbol bedeutet …','Ich brauche dafür Handschuhe und …','Wo finde ich das Sicherheitsdatenblatt?']},
          {amanda:'An der Tür. Lies vorher die H- und P-Sätze.', hinweis:'Frag die eine Frage, die wirklich gefährlich ist.', beispiel:'Mache ich. Eine Frage noch: Darf ich den mit dem Kalklöser zusammen benutzen?', redemittel:['Eine Frage noch …','Darf ich … zusammen benutzen?','Was passiert, wenn ich …?']},
          {amanda:'Auf keinen Fall. Niemals mischen, da entsteht Chlorgas.', hinweis:'Bestätige klar und sag, was du bei einem Fehler tun würdest.', beispiel:'Verstanden: niemals mischen. Wenn doch einmal etwas passiert, lüfte ich, gehe raus und rufe dich sofort an.', redemittel:['Verstanden: niemals mischen.','Wenn etwas passiert, …','Ich rufe dich sofort an.']}
        ]
      }
    ],
    saetze:[
      {de:'Vorsicht, der Boden ist noch nass.', wann:'immer, wenn jemand auf die frisch gewischte Fläche zugeht'},
      {de:'Darf ich kurz reinkommen und sauber machen?', wann:'an jeder Bürotür und in jeder Wohnung — vor dem Betreten'},
      {de:'Ich bin in etwa zehn Minuten fertig.', wann:'wenn jemand wissen will, wie lange es dauert'},
      {de:'Ich darf keine Unterlagen anfassen.', wann:'wenn Papiere oder Akten auf dem Tisch liegen'},
      {de:'Das gehört leider nicht zu meinem Auftrag.', wann:'wenn jemand eine Leistung will, die nicht im Leistungsverzeichnis steht'},
      {de:'Ich leite das an den Objektleiter weiter.', wann:'bei jeder Beschwerde, die du nicht selbst entscheiden darfst'},
      {de:'Ich muss Ihnen einen Schaden melden.', wann:'der Anfang jedes Anrufs bei der Objektleitung'},
      {de:'Wie ist die Dosierung?', wann:'bei jedem neuen Reinigungsmittel — nie schätzen'},
      {de:'Ich wiederhole zur Sicherheit: …', wann:'wenn du eine Anweisung bestätigst, besonders am Telefon'},
      {de:'Das Sicherheitsdatenblatt hängt im Putzraum.', wann:'wenn jemand nach den Gefahren eines Mittels fragt'},
      {de:'Ich habe eine Fundsache abzugeben.', wann:'wenn du etwas gefunden hast — immer sofort ins Büro'},
      {de:'Können Sie mir bitte den Stundenzettel abzeichnen?', wann:'am Ende der Schicht beim Kunden oder bei der Leitung'},
      {de:'Ich habe den Bereich abgesperrt.', wann:'nach Glasbruch, bei Nässe oder bei einem Nadelfund'},
      {de:'Das kann ich nicht allein entscheiden.', wann:'wenn ein Nutzer dich zu etwas drängt, das dir nicht zusteht'},
      {de:'Ich melde mich für morgen krank.', wann:'vor Schichtbeginn, telefonisch — nicht per Nachricht an eine Kollegin'}
    ],
    ueb:[
      {typ:'wahl', f:'Du wischst den Flur. Was machst du zuerst?', o:['Den Eimer füllen','Das Warnschild aufstellen','Die Fenster öffnen'], l:1, e:'Das Warnschild kommt vor den ersten Wischzug. Wenn jemand ausrutscht, haftet der Betrieb — und die Frage ist immer, ob das Schild stand.'},
      {typ:'wahl', f:'Auf dem Schreibtisch liegen Akten. Was tust du?', o:['Ich lege sie ordentlich zur Seite','Ich wische um sie herum und fasse sie nicht an','Ich bringe sie ins Sekretariat'], l:1, e:'Unterlagen sind tabu. Du wischst darum herum. Alles andere ist ein Datenschutzproblem und kostet im Zweifel den Auftrag.'},
      {typ:'wahl', f:'Du findest im Herren-WC eine gebrauchte Spritze. Was ist richtig?', o:['Mit Handschuhen aufheben und in den Müll','Nicht anfassen, Bereich sichern, sofort melden','Mit dem Besen in die Ecke kehren'], l:1, e:'Ein Nadelfund wird nie mit der Hand aufgenommen, auch nicht mit Handschuhen. Bereich sichern, Objektleitung anrufen, Entsorgung macht die Fachkraft.'},
      {typ:'luecke', f:'Den Sanitärreiniger ___ ich eins zu hundert.', l:'dosiere', e:'Man sagt: ein Mittel dosieren. Also: Ich dosiere eins zu hundert — zehn Milliliter auf einen Liter.'},
      {typ:'luecke', f:'Im Büro bitte nur ___ wischen, nicht nass.', l:'feucht', e:'Feuchtwischen heißt: kaum Wasser, trocknet in Minuten. Nasswischen ist für Umkleide, Halle und Treppenhaus.'},
      {typ:'luecke', f:'Vorsicht, der Boden ist noch ___.', l:'nass', e:'Der Standardsatz im Flur. Sag ihn laut, auch wenn das Schild schon steht.'},
      {typ:'luecke', f:'Zwei Reiniger darf man ___ mischen.', l:'niemals', e:'Chlorreiniger und saurer Kalklöser ergeben zusammen Chlorgas. Diese Regel gilt ohne Ausnahme.'},
      {typ:'luecke', f:'Ich leite Ihre Beschwerde an den ___ weiter.', l:'Objektleiter', e:'Der Objektleiter ist deine Ansprechperson für alles, was du nicht selbst entscheidest. Nimm die Beschwerde an, entscheide sie nicht.'},
      {typ:'bausteine', l:'Darf ich kurz reinkommen und sauber machen?', teile:['Darf','ich','kurz','reinkommen','und','sauber','machen'], e:'Frage mit Modalverb: darf steht vorn, die beiden Verben stehen am Ende.'},
      {typ:'bausteine', l:'Unter dem Waschbecken tritt Wasser aus.', teile:['Unter','dem','Waschbecken','tritt','Wasser','aus'], e:'Trennbares Verb austreten: tritt steht an Position zwei, aus ganz am Schluss.'},
      {typ:'bausteine', l:'Ich habe den Bereich abgesperrt und das Warnschild aufgestellt.', teile:['Ich','habe','den','Bereich','abgesperrt','und','das','Warnschild','aufgestellt'], e:'Zwei Maßnahmen in einem Satz — genau so meldest du, was du schon getan hast.'},
      {typ:'paare', p:[['die Unterhaltsreinigung','die regelmäßige Reinigung nach Plan'],['die Grundreinigung','einmal im Jahr, alles komplett'],['die Desinfektion','Keime abtöten nach dem Reinigen'],['die Sonderreinigung','zusätzlicher Auftrag, extra bezahlt'],['die Einwirkzeit','wie lange das Mittel stehen bleiben muss']], e:'Diese fünf Wörter stehen in jedem Leistungsverzeichnis. Lerne sie mit Artikel.'},
      {typ:'paare', p:[['rot','Sanitär und WC'],['grün','Küche und Lebensmittel'],['blau','Büro und Möbel'],['gelb','Waschbecken und Armaturen']], e:'Die Farbcodierung der Tücher verhindert, dass Keime aus dem WC auf den Küchentisch wandern. Sie ist Pflicht, nicht Geschmackssache.'},
      {typ:'hoeren', text:'Guten Morgen, Herr Weber, hier ist Amina Yusuf aus dem Objekt Hauptstraße 12. Unter dem dritten Waschbecken im zweiten Stock tritt Wasser aus. Bemerkt habe ich es um 6.40 Uhr. Ich habe zwei Warnschilder aufgestellt und den Raum abgesperrt.', f:'Was hat die Reinigungskraft schon getan?', o:['Sie hat das Wasser aufgewischt','Sie hat Warnschilder aufgestellt und abgesperrt','Sie hat den Haustechniker gerufen'], l:1, e:'In einer Schadensmeldung sagst du drei Dinge: was ist, seit wann, und was du schon getan hast. Genau in dieser Reihenfolge.'},
      {typ:'hoeren', text:'Der Grundreiniger wird eins zu fünfzig dosiert, also zwanzig Milliliter auf einen Liter Wasser. Einwirkzeit fünf Minuten. Handschuhe und Schutzbrille sind Pflicht.', f:'Wie lange muss das Mittel einwirken?', o:['eine Minute','fünf Minuten','zwanzig Minuten'], l:1, e:'Achte bei Einweisungen immer auf drei Zahlen: Dosierung, Einwirkzeit, Schutzausrüstung. Schreib sie dir auf den Handrücken, wenn es sein muss.'},
      {typ:'sprechen', f:'Sag höflich an der Bürotür: Guten Abend, ich bin von der Reinigung. Darf ich kurz reinkommen?', l:'Guten Abend, ich bin von der Reinigung', e:'Erst grüßen, dann sagen, wer du bist, dann fragen. Die Frage geht am Ende mit der Stimme nach oben.'},
      {typ:'sprechen', f:'Warne jemanden im Flur: Vorsicht, der Boden ist noch nass!', l:'Vorsicht, der Boden ist noch nass', e:'Laut und früh sagen, nicht erst, wenn die Person schon auf der Fläche steht. Vorsicht wird betont.'},
      {typ:'ordnen', l:['Ich stelle das Warnschild auf.','Ich lese das Sicherheitsdatenblatt und die H- und P-Sätze.','Ich dosiere das Mittel eins zu hundert.','Ich reinige und halte die Einwirkzeit ein.','Ich räume ab und nehme das Warnschild weg.'], f:'Bring die Sanitärreinigung in die richtige Reihenfolge.', e:'Sicherheit steht am Anfang und am Ende. Das Schild geht erst weg, wenn der Boden trocken ist.'},
      {typ:'artikel', w:'Revierplan', l:'der', e:'der Plan, also der Revierplan. Das letzte Wort im Kompositum bestimmt den Artikel.'},
      {typ:'artikel', w:'Einwirkzeit', l:'die', e:'die Zeit, also die Einwirkzeit. Wörter auf -zeit sind immer feminin.'},
      {typ:'artikel', w:'Sicherheitsdatenblatt', l:'das', e:'das Blatt, also das Sicherheitsdatenblatt. Plural: die Sicherheitsdatenblätter.'}
    ],
    schreiben:{
      auf:'Schreibe die Schadensmeldung für den Wasserschaden im zweiten Stock an den Objektleiter.',
      punkte:['Wo genau und in welchem Objekt','Was du gesehen hast','Wann du es bemerkt hast','Welche Maßnahmen du schon ergriffen hast'],
      hilfe:'Schreib sachlich und ohne Vermutung: beschreibe, was du siehst, nicht, wer schuld ist. Fang so an: „Hiermit melde ich einen Schaden im Objekt …" · „Betroffen ist …" · „Bemerkt habe ich den Schaden am … um … Uhr." · „Als Sofortmaßnahme habe ich …". Nenne immer Raumnummer, Datum und Uhrzeit. Sechs bis acht Sätze reichen, am Ende ein Satz, was du von der Leitung brauchst.'
    }
  },

  /* ===================== 12 · LAGER UND KOMMISSIONIERUNG ===================== */
  {
    id:'lager',
    t:'Lager und Kommissionierung',
    unter:'Kommissionierung, Wareneingang, Versand, Fachkraft für Lagerlogistik, Spedition',
    lvl:'A2–B1',
    pruef:'Keine Sprachprüfung. Einschlägig: Deutsch-Test für den Beruf A2·B1 · Azubi-Berufssprachkurs und Fachpraxis-Berufssprachkurs Lager und Logistik',
    warum:'In den Verkehrs- und Logistikberufen arbeiten 977.000 ausländische Beschäftigte, ein Anteil von 29 Prozent — die absolut größte Gruppe überhaupt. Bei den Speditions- und Logistikkaufleuten haben 32 Prozent eine Einwanderungsgeschichte, und die Fachkraft für Lagerlogistik ist gemeldeter Engpassberuf. Für Anlerntätigkeiten reicht A2, für Wareneingang, Verbuchung und Terminabsprachen erwartet die Bundesagentur ausdrücklich B1. Für die Ausbildung zur Fachkraft für Lagerlogistik brauchst du B2.',
    handlungen:[
      {t:'Einen Kommissionierauftrag abarbeiten', e:'Pickliste und Lagerplatzcode lesen, die Position finden, die Menge bestätigen und eine Differenz sofort melden.', lvl:'A2'},
      {t:'Scannermeldungen verstehen', e:'Kurze Systemtexte wie Position gesperrt oder Menge prüfen richtig deuten und wissen, wann du stehen bleiben musst.', lvl:'B1'},
      {t:'Wareneingang prüfen', e:'Lieferschein gegen Bestellung abgleichen, Charge und Mindesthaltbarkeitsdatum erfassen, das Wareneingangsbuch führen.', lvl:'B1'},
      {t:'Abweichung und Schaden dokumentieren', e:'Transportschaden, Falschlieferung oder Fehlmenge auf dem Frachtbrief vermerken und die Schadensmitteilung schreiben.', lvl:'B1'},
      {t:'Das Warenwirtschaftssystem bedienen', e:'Buchungsmaske ausfüllen, Umlagerungsbeleg erzeugen, Bestandskorrektur und Inventurdifferenz erklären.', lvl:'B1'},
      {t:'Fremdfahrer einweisen', e:'Verkehrswege, Ladezone und Wartebereich erklären, auf den Sicherheitsabstand zum Flurförderzeug hinweisen — oft über die Sprachbarriere hinweg.', lvl:'B1'},
      {t:'Arbeitssicherheit im Lager', e:'Die Staplerunterweisung verstehen, Regalschäden melden, den Not-Aus kennen, Regeln im Gefahrstofflager einhalten.', lvl:'B1'},
      {t:'Termin und Priorität abstimmen', e:'Mit der Disposition klären, was zuerst raus muss, Verzug melden und eine Teillieferung aushandeln.', lvl:'B1'},
      {t:'Sendungsstatus auskunftsfähig geben', e:'Am Telefon sagen, wo eine Sendung steht, wann sie verladen wird und was du zusagen darfst.', lvl:'B1'},
      {t:'Die Schichtübergabe im Lager', e:'Sagen, welche Aufträge offen sind, wo es klemmt und was die nächste Schicht zuerst anfassen muss.', lvl:'B1'}
    ],
    chunks:[
      {de:'die Pickliste abarbeiten', hi:'die Liste der Artikel, die du zusammenstellen musst', bsp:'Ich arbeite die Pickliste für Auftrag 4711 gerade ab.'},
      {de:'einen Auftrag kommissionieren', hi:'die Ware nach Liste zusammenstellen', bsp:'Der Auftrag ist kommissioniert und steht am Tor 3.'},
      {de:'den Lagerplatz anfahren', hi:'zu dem Regalplatz gehen oder fahren, der auf dem Scanner steht', bsp:'Ich fahre jetzt Lagerplatz A zwölf null drei an.'},
      {de:'der Scanner meldet „Position gesperrt"', hi:'das System lässt die Entnahme nicht zu — nicht überstimmen', bsp:'Der Scanner meldet Position gesperrt, ich frage kurz beim Schichtführer nach.'},
      {de:'die Menge quittieren', hi:'auf dem Scanner bestätigen, was du entnommen hast', bsp:'Ich habe zwölf Stück entnommen und die Menge quittiert.'},
      {de:'eine Mengendifferenz melden', hi:'Bestand und Wirklichkeit stimmen nicht überein', bsp:'Auf dem Platz liegen nur acht Stück, ich melde eine Mengendifferenz.'},
      {de:'den Lieferschein gegen die Bestellung abgleichen', hi:'die Kernhandlung im Wareneingang', bsp:'Ich gleiche den Lieferschein gegen die Bestellung ab, bevor ich buche.'},
      {de:'die Ware vereinnahmen', hi:'im System als eingegangen buchen', bsp:'Die Palette ist geprüft, ich vereinnahme sie jetzt.'},
      {de:'die Charge erfassen', hi:'die Produktionsnummer, mit der man die Ware zurückverfolgt', bsp:'Bitte bei jedem Wareneingang die Charge erfassen.'},
      {de:'das Mindesthaltbarkeitsdatum prüfen', hi:'kurz MHD — bei Lebensmitteln und Chemie Pflicht', bsp:'Das Mindesthaltbarkeitsdatum ist nur noch vier Wochen, das nehmen wir nicht an.'},
      {de:'das Wareneingangsbuch führen', hi:'jede Anlieferung wird dort mit Datum eingetragen', bsp:'Das Wareneingangsbuch führe ich am Ende der Schicht nach.'},
      {de:'einen Transportschaden feststellen', hi:'die Ware ist auf dem Weg beschädigt worden', bsp:'An der zweiten Palette habe ich einen Transportschaden festgestellt.'},
      {de:'die Folie ist eingerissen', hi:'typische Beschreibung eines Schadens an der Palette', bsp:'Die Folie ist eingerissen und zwei Kartons sind eingedrückt.'},
      {de:'einen Vorbehalt auf dem Frachtbrief eintragen', hi:'schriftlich festhalten, dass die Ware nicht in Ordnung war', bsp:'Ich trage einen Vorbehalt auf dem Frachtbrief ein und lasse den Fahrer unterschreiben.'},
      {de:'eine Falschlieferung melden', hi:'geliefert wurde etwas anderes als bestellt', bsp:'Das ist eine Falschlieferung: bestellt war Artikel 220, geliefert wurde 202.'},
      {de:'eine Fehlmenge feststellen', hi:'es fehlt etwas gegenüber dem Lieferschein', bsp:'Laut Lieferschein sind es fünfzig Kartons, geliefert wurden achtundvierzig — Fehlmenge zwei.'},
      {de:'eine Schadensmitteilung schreiben', hi:'das Standarddokument an den Lieferanten', bsp:'Die Schadensmitteilung geht heute noch an den Lieferanten raus.'},
      {de:'im Warenwirtschaftssystem buchen', hi:'kurz WWS — dort steht der ganze Bestand', bsp:'Ich buche den Zugang gleich im Warenwirtschaftssystem.'},
      {de:'einen Umlagerungsbeleg erzeugen', hi:'wenn Ware von einem Platz auf einen anderen geht', bsp:'Für die Umlagerung nach Halle 2 erzeuge ich einen Umlagerungsbeleg.'},
      {de:'eine Bestandskorrektur vornehmen', hi:'den Systembestand an die Wirklichkeit anpassen — nur mit Freigabe', bsp:'Die Bestandskorrektur darf nur der Schichtführer vornehmen.'},
      {de:'die Inventurdifferenz erklären', hi:'sagen, warum gezählter und gebuchter Bestand auseinandergehen', bsp:'Die Inventurdifferenz erkläre ich mir durch eine Fehlbuchung im Mai.'},
      {de:'den Fremdfahrer einweisen', hi:'dem externen Lkw-Fahrer sagen, wohin und wie', bsp:'Ich weise den Fremdfahrer ein: Tor 4, Motor aus, Warnweste anziehen.'},
      {de:'an Tor 4 andocken', hi:'rückwärts an die Laderampe fahren', bsp:'Bitte an Tor 4 andocken, Tor 3 ist belegt.'},
      {de:'die Verkehrswege freihalten', hi:'die markierten Wege für Stapler und Fußgänger', bsp:'Die Verkehrswege bitte freihalten, hier fährt der Stapler durch.'},
      {de:'Abstand zum Flurförderzeug halten', hi:'Flurförderzeug ist das Fachwort für Stapler und Hubwagen', bsp:'Halten Sie bitte Abstand zum Flurförderzeug, der Fahrer sieht Sie nicht.'},
      {de:'den Staplerschein haben', hi:'die Fahrerlaubnis für den Gabelstapler, mit jährlicher Unterweisung', bsp:'Ich habe den Staplerschein, die Unterweisung war im März.'},
      {de:'einen Regalschaden melden', hi:'angefahrene Stütze oder verbogener Träger — sofort melden', bsp:'In Gang B ist eine Stütze angefahren, ich melde den Regalschaden.'},
      {de:'den Not-Aus drücken', hi:'der rote Pilzkopf, der alles sofort stoppt', bsp:'Wenn jemand in die Anlage greift, sofort den Not-Aus drücken.'},
      {de:'ins Gefahrstofflager gehen', hi:'eigener Bereich mit Auffangwanne und eigenen Regeln', bsp:'Im Gefahrstofflager darf nur eingelagert werden, wer unterwiesen ist.'},
      {de:'mit der Disposition abstimmen', hi:'die Abteilung, die Touren und Termine plant', bsp:'Den Termin stimme ich mit der Disposition ab.'},
      {de:'eine Teillieferung anbieten', hi:'jetzt schicken, was da ist, Rest später', bsp:'Wir können eine Teillieferung anbieten: dreißig Stück heute, der Rest am Freitag.'},
      {de:'in Verzug geraten', hi:'der Termin ist nicht mehr zu halten', bsp:'Wir geraten bei Auftrag 4711 in Verzug, ich informiere den Kunden.'},
      {de:'die Sendung ist verladen', hi:'sie liegt auf dem Lkw und ist raus', bsp:'Ihre Sendung ist heute Morgen verladen worden und kommt morgen an.'},
      {de:'die Sendungsnummer durchgeben', hi:'die Nummer, mit der der Kunde selbst nachsehen kann', bsp:'Ich gebe Ihnen die Sendungsnummer durch, dann können Sie mitverfolgen.'},
      {de:'was ist noch offen?', hi:'die Standardfrage bei der Schichtübergabe', bsp:'Was ist noch offen für die Spätschicht?'}
    ],
    dialoge:[
      {
        id:'lager-fehlmenge',
        titel:'Fehlmenge und Transportschaden melden',
        lvl:'B1',
        dauer:'4 Min',
        ort:'Es ist 8.15 Uhr am Wareneingang, Tor 2. Auf dem Lieferschein stehen fünfzig Kartons Artikel 4408, auf der Palette liegen achtundvierzig. Bei zwei Kartons ist die Folie eingerissen und die Ecke eingedrückt. Der Schichtführer Herr Bilic kommt dazu.',
        schritte:[
          {amanda:'Und? Passt die Lieferung von Nordmann?', hinweis:'Sag zuerst die Zahl: was steht auf dem Papier, was liegt da wirklich.', beispiel:'Nein. Laut Lieferschein sind es fünfzig Kartons Artikel 4408, gezählt habe ich achtundvierzig. Fehlmenge zwei.', redemittel:['Laut Lieferschein sind es …','Gezählt habe ich …','Das ergibt eine Fehlmenge von …']},
          {amanda:'Zweimal gezählt?', hinweis:'Antworte kurz und sag, wie du gezählt hast.', beispiel:'Ja, zweimal, einmal mit dem Kollegen zusammen. Es sind achtundvierzig, drei Lagen zu sechzehn.', redemittel:['Ja, zweimal.','Ein Kollege hat gegengezählt.','Es sind … Lagen zu je …']},
          {amanda:'Gut. Sonst noch etwas an der Palette?', hinweis:'Beschreibe den Transportschaden sachlich — was ist beschädigt, wie stark.', beispiel:'Zwei Kartons sind beschädigt. Die Folie ist eingerissen und bei beiden ist die untere Ecke eingedrückt. Ob der Inhalt kaputt ist, weiß ich noch nicht.', redemittel:['… Kartons sind beschädigt.','Die Folie ist eingerissen.','Ob der Inhalt beschädigt ist, kann ich noch nicht sagen.']},
          {amanda:'Der Fahrer will los. Was machen wir?', hinweis:'Sag klar, was jetzt passieren muss, bevor der Fahrer wegfährt.', beispiel:'Ich trage einen Vorbehalt auf dem Frachtbrief ein: Fehlmenge zwei Kartons, zwei Kartons beschädigt. Der Fahrer muss das unterschreiben, und ich mache Fotos.', redemittel:['Ich trage einen Vorbehalt ein.','Der Fahrer muss das unterschreiben.','Ich habe Fotos gemacht.']},
          {amanda:'Richtig. Und danach?', hinweis:'Nenne die nächsten Schritte im System und beim Lieferanten.', beispiel:'Ich vereinnahme nur achtundvierzig Stück, buche die zwei beschädigten auf Sperrbestand und schreibe heute noch die Schadensmitteilung an Nordmann.', redemittel:['Ich vereinnahme nur …','Die beschädigte Ware buche ich auf Sperrbestand.','Die Schadensmitteilung geht heute raus.']}
        ]
      },
      {
        id:'lager-fahrer',
        titel:'Den Fremdfahrer einweisen',
        lvl:'A2',
        dauer:'3 Min',
        ort:'Ein Lkw steht vor dem Hof. Der Fahrer spricht wenig Deutsch, du sprichst kein Rumänisch. Tor 3 ist belegt, Tor 4 ist frei. Der Fahrer hat keine Warnweste an.',
        schritte:[
          {amanda:'Hallo. Lieferung für Halle 1. Wohin?', hinweis:'Sag das Tor mit Zahl und zeig dabei hin. Kurze Sätze.', beispiel:'Guten Tag. Bitte Tor 4. Tor 3 ist belegt. Tor 4 ist dort, rechts.', redemittel:['Bitte Tor …','Tor … ist belegt.','Dort, rechts hinten.']},
          {amanda:'Okay, Tor 4. Ich fahre.', hinweis:'Halt ihn kurz auf: erst die Sicherheitsregeln.', beispiel:'Einen Moment bitte. Erst die Warnweste anziehen, dann fahren. Das ist bei uns Pflicht.', redemittel:['Einen Moment bitte.','Bitte zuerst die Warnweste anziehen.','Das ist bei uns Pflicht.']},
          {amanda:'Ah, ja. Papiere hier.', hinweis:'Nimm die Papiere an und sag, was du damit machst.', beispiel:'Danke. Ich prüfe den Lieferschein gegen unsere Bestellung. Das dauert etwa zehn Minuten.', redemittel:['Ich prüfe den Lieferschein.','Das dauert etwa … Minuten.','Bitte warten Sie im Fahrerbereich.']},
          {amanda:'Ich warte im Lkw?', hinweis:'Sag Nein und erkläre kurz, warum — Sicherheit im Verkehrsweg.', beispiel:'Nein, bitte nicht im Lkw. Bitte dort im Fahrerbereich warten. Hier fährt der Stapler, das ist gefährlich.', redemittel:['Bitte nicht im Lkw.','Bitte dort warten, hinter der gelben Linie.','Hier fährt der Stapler.']},
          {amanda:'Verstanden. Wie lange noch?', hinweis:'Gib eine ehrliche Zeit und sag, wann du zurückkommst.', beispiel:'Etwa zwanzig Minuten. Wenn alles passt, bringe ich Ihnen den unterschriebenen Lieferschein und Sie können abfahren.', redemittel:['Etwa … Minuten.','Ich komme dann zu Ihnen.','Dann bekommen Sie den Lieferschein zurück.']}
        ]
      },
      {
        id:'lager-disposition',
        titel:'Verzug mit der Disposition klären',
        lvl:'B1',
        dauer:'4 Min',
        ort:'Es ist 14 Uhr. Auftrag 4711 für den Kunden Kleinschmidt soll heute um 16 Uhr auf die Tour. Von hundert Stück sind nur sechzig da, der Rest kommt erst morgen früh. Frau Adler aus der Disposition ruft an.',
        schritte:[
          {amanda:'Adler, Disposition. Ist 4711 fertig für die 16-Uhr-Tour?', hinweis:'Sag klar Nein und nenne sofort die Zahl.', beispiel:'Nein, noch nicht vollständig. Von hundert Stück sind sechzig kommissioniert, vierzig fehlen.', redemittel:['Nein, noch nicht vollständig.','Von … Stück sind … fertig.','Es fehlen …']},
          {amanda:'Warum? Der Auftrag liegt seit gestern.', hinweis:'Nenne den Grund sachlich, ohne dich zu rechtfertigen und ohne jemanden zu beschuldigen.', beispiel:'Der Bestand im System stimmt nicht. Auf dem Lagerplatz lagen nur sechzig Stück. Der Zulauf ist für morgen früh angekündigt.', redemittel:['Der Bestand im System stimmt nicht.','Auf dem Lagerplatz lagen nur …','Der Zulauf kommt am …']},
          {amanda:'Der Kunde braucht die Ware aber morgen.', hinweis:'Biete eine Teillieferung an — konkret, mit Mengen und Terminen.', beispiel:'Dann schlage ich eine Teillieferung vor: sechzig Stück heute um 16 Uhr, die restlichen vierzig morgen mit der Frühtour.', redemittel:['Ich schlage eine Teillieferung vor.','… Stück heute, der Rest am …','Damit hätte der Kunde morgen früh alles.']},
          {amanda:'Kann ich mich darauf verlassen, dass die vierzig morgen rausgehen?', hinweis:'Sag nur zu, was du wirklich halten kannst — mit Bedingung.', beispiel:'Wenn der Zulauf bis 7 Uhr da ist, ja. Ich melde mich morgen um 7.30 Uhr bei Ihnen, egal wie es steht.', redemittel:['Wenn … da ist, ja.','Versprechen kann ich nur …','Ich melde mich morgen um … Uhr bei Ihnen.']},
          {amanda:'Gut. Sagen Sie dem Kunden bitte selbst Bescheid.', hinweis:'Bestätige und frag nach, was du dem Kunden sagen darfst.', beispiel:'Mache ich. Darf ich ihm die Sendungsnummer für die Teillieferung durchgeben und den Rest für morgen ankündigen?', redemittel:['Mache ich.','Darf ich ihm … durchgeben?','Was darf ich zusagen?']}
        ]
      }
    ],
    saetze:[
      {de:'Laut Lieferschein sind es fünfzig Kartons, gezählt habe ich achtundvierzig.', wann:'im Wareneingang, wenn etwas fehlt — immer beide Zahlen nennen'},
      {de:'Ich trage einen Vorbehalt auf dem Frachtbrief ein.', wann:'bei Schaden oder Fehlmenge, bevor der Fahrer abfährt'},
      {de:'Können Sie das bitte hier unterschreiben?', wann:'wenn der Fahrer den Vorbehalt bestätigen muss'},
      {de:'Ich melde eine Mengendifferenz.', wann:'wenn Systembestand und Regal nicht zusammenpassen'},
      {de:'Das buche ich auf Sperrbestand.', wann:'bei beschädigter Ware, die nicht verkauft werden darf'},
      {de:'Der Scanner meldet Position gesperrt.', wann:'wenn du nicht entnehmen darfst und nachfragen musst'},
      {de:'Ich frage kurz beim Schichtführer nach.', wann:'immer, bevor du etwas im System überstimmst'},
      {de:'Bitte Warnweste anziehen und hinter der gelben Linie warten.', wann:'bei jedem Fremdfahrer auf dem Hof'},
      {de:'Halten Sie bitte Abstand zum Flurförderzeug.', wann:'wenn jemand im Verkehrsweg steht — der Staplerfahrer sieht ihn oft nicht'},
      {de:'Wir können eine Teillieferung anbieten.', wann:'wenn der Termin sonst platzt'},
      {de:'Versprechen kann ich das nicht, aber ich melde mich um 7.30 Uhr.', wann:'wenn Disposition oder Kunde eine Zusage wollen, die du nicht halten kannst'},
      {de:'Ihre Sendung ist heute Morgen verladen worden.', wann:'am Telefon, wenn ein Kunde nach dem Stand fragt'},
      {de:'Ich gebe Ihnen die Sendungsnummer durch.', wann:'damit der Kunde selbst nachverfolgen kann'},
      {de:'Was ist noch offen für die Spätschicht?', wann:'zu Beginn der Übergabe'},
      {de:'Da bin ich mir nicht sicher, ich kläre das und rufe zurück.', wann:'besser als eine falsche Auskunft — und dann wirklich zurückrufen'}
    ],
    ueb:[
      {typ:'wahl', f:'Auf dem Lieferschein stehen fünfzig Kartons, du zählst achtundvierzig. Was tust du zuerst?', o:['Trotzdem annehmen und später buchen','Noch einmal zählen und dann den Vorbehalt auf dem Frachtbrief eintragen','Den Fahrer wegschicken'], l:1, e:'Erst gegenzählen, dann schriftlich festhalten. Ohne Vorbehalt auf dem Frachtbrief steht ihr später ohne Beweis da.'},
      {typ:'wahl', f:'Der Scanner meldet „Position gesperrt". Was ist richtig?', o:['Von einem anderen Platz nehmen','Beim Schichtführer nachfragen','Die Meldung wegklicken und entnehmen'], l:1, e:'Eine Sperre hat einen Grund: Qualitätsprüfung, Rückruf, Inventur. Wegklicken ist der Fehler, der am meisten Geld kostet.'},
      {typ:'wahl', f:'Ein Fremdfahrer steigt ohne Warnweste aus. Was sagst du?', o:['Nichts, er ist ja nicht bei uns angestellt','Bitte zuerst die Warnweste anziehen, das ist bei uns Pflicht','Sie müssen sofort vom Hof'], l:1, e:'Auf dem Hof gilt eure Betriebsordnung, auch für Fremde. Freundlich, kurz, mit Begründung — das reicht fast immer.'},
      {typ:'luecke', f:'Ich ___ den Lieferschein gegen die Bestellung ab.', l:'gleiche', e:'abgleichen ist trennbar: Ich gleiche … ab. Das ist die Kernhandlung im Wareneingang.'},
      {typ:'luecke', f:'Bei jedem Wareneingang muss die ___ erfasst werden.', l:'Charge', e:'Die Charge ist die Produktionsnummer. Ohne sie kannst du bei einem Rückruf nicht sagen, welche Ware betroffen ist.'},
      {typ:'luecke', f:'Die beschädigte Ware buche ich auf ___.', l:'Sperrbestand', e:'Sperrbestand heißt: liegt im Lager, darf aber nicht verkauft oder verschickt werden.'},
      {typ:'luecke', f:'Wir können eine ___ anbieten: sechzig Stück heute, vierzig morgen.', l:'Teillieferung', e:'Die Teillieferung ist die Standardlösung bei Verzug. Immer mit Menge und Termin anbieten, nie vage.'},
      {typ:'luecke', f:'Halten Sie bitte ___ zum Flurförderzeug.', l:'Abstand', e:'Flurförderzeug ist das Fachwort für Stapler und Hubwagen. Es steht so in jeder Unterweisung.'},
      {typ:'bausteine', l:'Laut Lieferschein sind es fünfzig Kartons.', teile:['Laut','Lieferschein','sind','es','fünfzig','Kartons'], e:'Laut plus Dativ heißt: so steht es im Papier. Sehr nützlich, wenn du dich auf ein Dokument beziehst.'},
      {typ:'bausteine', l:'Ich trage einen Vorbehalt auf dem Frachtbrief ein.', teile:['Ich','trage','einen','Vorbehalt','auf','dem','Frachtbrief','ein'], e:'eintragen ist trennbar: trage steht vorn, ein ganz am Ende.'},
      {typ:'bausteine', l:'Die Schadensmitteilung geht heute noch an den Lieferanten raus.', teile:['Die','Schadensmitteilung','geht','heute','noch','an','den','Lieferanten','raus'], e:'Zeitangabe vor Ortsangabe: heute noch steht vor an den Lieferanten.'},
      {typ:'paare', p:[['die Pickliste','Liste der Artikel für einen Auftrag'],['der Lieferschein','Papier, das mit der Ware kommt'],['der Frachtbrief','Papier des Transporteurs, hier kommt der Vorbehalt rein'],['das MHD','Mindesthaltbarkeitsdatum'],['die Charge','Produktionsnummer für die Rückverfolgung']], e:'Diese fünf Papiere und Nummern begegnen dir jeden Tag. Wer sie auseinanderhält, wird schnell zur Ansprechperson.'},
      {typ:'paare', p:[['die Fehlmenge','es wurde weniger geliefert als bestellt'],['die Falschlieferung','es kam ein anderer Artikel'],['der Transportschaden','die Ware wurde unterwegs beschädigt'],['die Inventurdifferenz','gezählter und gebuchter Bestand stimmen nicht']], e:'Vier Abweichungen, vier verschiedene Meldungen. Nenne immer den richtigen Namen, sonst wird falsch gebucht.'},
      {typ:'hoeren', text:'Guten Tag, Bilic, Wareneingang. Zur Lieferung von heute Morgen: Von den bestellten fünfzig Kartons Artikel 4408 sind achtundvierzig angekommen. Zwei Kartons sind beschädigt, die Folie war eingerissen. Wir haben einen Vorbehalt auf dem Frachtbrief eingetragen.', f:'Wie viele Kartons sind unbeschädigt angekommen?', o:['fünfzig','achtundvierzig','sechsundvierzig'], l:2, e:'Achtundvierzig sind angekommen, zwei davon beschädigt — also sechsundvierzig verwendbar. Bei Mengen musst du mitrechnen, nicht nur mithören.'},
      {typ:'hoeren', text:'Auftrag 4711: sechzig Stück gehen heute mit der 16-Uhr-Tour raus, die restlichen vierzig morgen mit der Frühtour. Der Zulauf wird morgen bis 7 Uhr erwartet.', f:'Wann kommen die restlichen vierzig Stück beim Kunden an?', o:['heute Abend','morgen mit der Frühtour','erst übermorgen'], l:1, e:'Bei Teillieferungen musst du zwei Termine gleichzeitig behalten. Schreib sie dir auf, bevor du dem Kunden etwas zusagst.'},
      {typ:'sprechen', f:'Melde die Fehlmenge: Laut Lieferschein sind es fünfzig Kartons, gezählt habe ich achtundvierzig.', l:'Laut Lieferschein sind es fünfzig Kartons', e:'Betone die beiden Zahlen. Kurze Pause nach Kartons, damit die Kollegin mitschreiben kann.'},
      {typ:'sprechen', f:'Weise einen Fremdfahrer ein: Bitte Tor 4, Warnweste anziehen und hinter der gelben Linie warten.', l:'Bitte Tor 4', e:'Kurze Sätze, ein Gedanke pro Satz, dabei hinzeigen. Bei Sprachbarriere ist langsam sprechen besser als lauter sprechen.'},
      {typ:'ordnen', l:['Ich nehme Lieferschein und Bestellung und gleiche sie ab.','Ich zähle die Ware und prüfe sie auf Schäden.','Ich trage bei Abweichung einen Vorbehalt auf dem Frachtbrief ein.','Ich vereinnahme die Ware im Warenwirtschaftssystem.','Ich schreibe die Schadensmitteilung an den Lieferanten.'], f:'Bring den Wareneingang in die richtige Reihenfolge.', e:'Prüfen kommt immer vor Buchen. Wer zuerst bucht und dann prüft, macht sich die Korrektur unnötig schwer.'},
      {typ:'artikel', w:'Lieferschein', l:'der', e:'der Schein, also der Lieferschein. Plural: die Lieferscheine.'},
      {typ:'artikel', w:'Pickliste', l:'die', e:'die Liste, also die Pickliste. Wörter auf -e sind sehr oft feminin.'},
      {typ:'artikel', w:'Flurförderzeug', l:'das', e:'das Fahrzeug, also das Flurförderzeug. Auf -zeug endende Wörter sind fast immer sächlich.'}
    ],
    schreiben:{
      auf:'Schreibe die Schadensmitteilung an den Lieferanten Nordmann zur Lieferung vom heutigen Tag.',
      punkte:['Bestellnummer, Lieferscheinnummer und Datum','Was geliefert wurde und was fehlt','Welcher Schaden festgestellt wurde','Was du vom Lieferanten erwartest'],
      hilfe:'Schreib knapp und in vollständigen Sätzen, keine Stichworte. Fang so an: „Bezug nehmend auf Ihre Lieferung vom … zur Bestellung Nummer …" · „Bei der Warenannahme haben wir festgestellt, dass …" · „Ein entsprechender Vorbehalt wurde auf dem Frachtbrief eingetragen." · „Wir bitten Sie um Nachlieferung bis zum …". Nenne immer Menge, Artikelnummer und Datum. Sieben bis zehn Sätze, sachlich, ohne Vorwurf — der Fahrer und der Lieferant sind nicht dieselbe Person.'
    }
  },

  /* ===================== 13 · PRODUKTION UND FERTIGUNG ===================== */
  {
    id:'produktion',
    t:'Produktion und Fertigung',
    unter:'Maschinen- und Anlagenbedienung, Kunststoffverarbeitung, Montage, Lebensmittelherstellung, Fleischverarbeitung, Backwaren',
    lvl:'A2–B2',
    pruef:'Keine Sprachprüfung. Einschlägig: Deutsch-Test für den Beruf A2·B1·B2 · Fachpraxis-Berufssprachkurs. Fachlich verpflichtend ist die Hygieneschulung nach Paragraf 43 Infektionsschutzgesetz',
    warum:'In der Kunststoff- und Kautschukherstellung haben 44 Prozent der Beschäftigten eine Einwanderungsgeschichte, in der Lebensmittelherstellung 54 Prozent, in der Fleischverarbeitung 46 Prozent — der Durchschnitt aller Berufe liegt bei 26 Prozent. In den fertigungstechnischen Berufen arbeiten 530.100 ausländische Beschäftigte, und 38 Prozent der Maschinenbaubetriebe können Stellen nicht besetzen. Für die Anlerntätigkeit an der Maschine reicht A2. B1 ist zwingend, sobald du Sicherheits- und Hygieneunterweisungen verstehen musst — und die sind hier weder freiwillig noch übersetzt. B2 brauchst du für Facharbeit und für die Ausbildung.',
    handlungen:[
      {t:'Die Schichtübergabe an der Anlage', e:'In zwei Minuten sagen: Stückzahl, Störungen, Ausschussgrund, laufender Auftrag, offene Punkte.', lvl:'B1'},
      {t:'Arbeitsanweisung und Rüstblatt lesen', e:'Prozessparameter wie Temperatur, Druck und Zykluszeit entnehmen, die Rüstfolge und den Werkzeugwechsel verstehen.', lvl:'B1'},
      {t:'Eine Störung eingrenzen und melden', e:'Dem Einrichter oder Schichtführer sagen: was, seit wann, wie oft und unter welcher Bedingung es auftritt.', lvl:'B1'},
      {t:'Qualitätsfehler benennen', e:'Grat, Einfallstelle, Lunker, Kratzer oder Maßabweichung mit dem richtigen Wort beschreiben statt „ist kaputt" zu sagen.', lvl:'B2'},
      {t:'Prüflos sperren und dokumentieren', e:'Fehlerkarte und Ausschussprotokoll ausfüllen, die betroffene Menge sperren und die Schicht informieren.', lvl:'B2'},
      {t:'Sicherheitsunterweisung verstehen', e:'Betriebsanweisung und Sicherheitsdatenblatt lesen, H- und P-Sätze, PSA-Pflicht, Not-Aus und Lockout-Tagout kennen.', lvl:'B1'},
      {t:'Im Stehmeeting kurz berichten', e:'In der Shopfloor-Runde vor der Kennzahlentafel in drei Sätzen sagen, wie die Schicht lief und was hakt.', lvl:'B2'},
      {t:'Einen Verbesserungsvorschlag einbringen', e:'Bei 5S und im Verbesserungsprozess sagen, was stört und was du konkret anders machen würdest.', lvl:'B2'},
      {t:'Hygieneunterweisung nach IfSG bestätigen', e:'Händedesinfektion, Arbeitskleidung und die Meldepflicht bei Erkrankung verstehen und unterschreiben — und wissen, was du unterschrieben hast.', lvl:'B1'},
      {t:'Schichtplan und Abwesenheit regeln', e:'Einen Schichttausch aushandeln, sich nach betrieblicher Regelung krankmelden, den Urlaubsantrag korrekt ausfüllen.', lvl:'B1'}
    ],
    chunks:[
      {de:'die Schichtübergabe machen', hi:'am Ende der Schicht der nächsten Besetzung berichten', bsp:'Ich mache jetzt die Schichtübergabe für Anlage 3.'},
      {de:'die Stückzahl liegt bei …', hi:'so nennst du das Ergebnis der Schicht', bsp:'Die Stückzahl liegt bei zwölfhundert, geplant waren dreizehnhundert.'},
      {de:'das Rüstblatt durchgehen', hi:'das Blatt mit allen Einstellwerten für ein Produkt', bsp:'Vor dem Werkzeugwechsel gehe ich das Rüstblatt durch.'},
      {de:'die Prozessparameter einstellen', hi:'Temperatur, Druck, Zykluszeit an der Steuerung', bsp:'Die Prozessparameter sind eingestellt: 220 Grad, 80 bar.'},
      {de:'die Zykluszeit liegt bei …', hi:'wie lange ein Teil braucht — der wichtigste Wert', bsp:'Die Zykluszeit liegt bei achtundzwanzig Sekunden.'},
      {de:'einen Werkzeugwechsel machen', hi:'das Werkzeug in der Maschine tauschen, meist mit dem Einrichter', bsp:'Um 14 Uhr steht der Werkzeugwechsel auf Artikel 220 an.'},
      {de:'die Maschine steht', hi:'sie produziert nicht — der Satz, der sofort gemeldet wird', bsp:'Die Maschine steht seit zwanzig Minuten, ich habe den Einrichter geholt.'},
      {de:'eine Störung eingrenzen', hi:'herausfinden, wann und wobei genau der Fehler kommt', bsp:'Ich konnte die Störung eingrenzen: nur beim Anfahren nach der Pause.'},
      {de:'seit wann tritt das auf?', hi:'die erste Frage des Einrichters — halte die Antwort bereit', bsp:'Das tritt seit etwa zwei Stunden auf, ungefähr jedes zehnte Teil.'},
      {de:'der Fehler tritt sporadisch auf', hi:'unregelmäßig, nicht bei jedem Teil — wichtiges Wort', bsp:'Der Fehler tritt sporadisch auf, etwa dreimal pro Stunde.'},
      {de:'Grat am Teil haben', hi:'überstehender Materialrand an der Trennkante', bsp:'Die Teile haben Grat an der Trennkante, das Werkzeug ist verschlissen.'},
      {de:'eine Einfallstelle zeigen', hi:'kleine Delle in der Oberfläche bei Kunststoffteilen', bsp:'Auf der Sichtseite zeigt sich eine Einfallstelle.'},
      {de:'einen Lunker im Material haben', hi:'Hohlraum im Inneren des Teils', bsp:'Im Querschnitt ist ein Lunker zu sehen.'},
      {de:'eine Maßabweichung feststellen', hi:'das Maß liegt außerhalb der Toleranz', bsp:'Ich habe eine Maßabweichung von drei Zehnteln festgestellt.'},
      {de:'außerhalb der Toleranz liegen', hi:'die Standardformulierung in der Qualitätssicherung', bsp:'Der Wert liegt außerhalb der Toleranz, ich sperre das Prüflos.'},
      {de:'das Prüflos sperren', hi:'die geprüfte Menge darf nicht weiter', bsp:'Ich habe das Prüflos gesperrt und den Schichtführer informiert.'},
      {de:'die Fehlerkarte ausfüllen', hi:'das Formular zu jedem Qualitätsfehler', bsp:'Die Fehlerkarte fülle ich direkt an der Anlage aus.'},
      {de:'ins Ausschussprotokoll eintragen', hi:'wie viele Teile aus welchem Grund Ausschuss wurden', bsp:'Vierzig Teile Ausschuss wegen Grat — steht im Ausschussprotokoll.'},
      {de:'die Betriebsanweisung beachten', hi:'das Blatt an der Maschine mit den Regeln für diesen Arbeitsplatz', bsp:'Die Betriebsanweisung hängt direkt an der Anlage.'},
      {de:'die H- und P-Sätze lesen', hi:'H heißt Gefahr, P heißt Schutzmaßnahme', bsp:'Vor dem Umfüllen bitte die H- und P-Sätze lesen.'},
      {de:'die PSA ist Pflicht', hi:'Schutzbrille, Handschuhe, Gehörschutz, Sicherheitsschuhe', bsp:'An dieser Anlage ist Gehörschutz Pflicht.'},
      {de:'den Not-Aus drücken', hi:'der rote Pilzkopf — bei Gefahr sofort', bsp:'Er hat den Not-Aus gedrückt, als die Hand zu nah kam.'},
      {de:'die Anlage gegen Wiedereinschalten sichern', hi:'Lockout-Tagout: abschließen und Schild anhängen', bsp:'Vor der Reinigung wird die Anlage gegen Wiedereinschalten gesichert.'},
      {de:'die Maschine ist noch nicht aus', hi:'der Satz, der Finger rettet — laut sagen', bsp:'Halt, die Maschine ist noch nicht aus, warte auf den Stillstand.'},
      {de:'die Kennzahlentafel lesen', hi:'die Tafel mit Stückzahl, Ausschuss und Verfügbarkeit', bsp:'Auf der Kennzahlentafel steht der Ausschuss bei zwei Prozent.'},
      {de:'im Stehmeeting berichten', hi:'kurze Shopfloor-Runde am Anfang der Schicht', bsp:'Im Stehmeeting berichte ich in drei Sätzen über die Nacht.'},
      {de:'einen Verbesserungsvorschlag einreichen', hi:'Vorschlag, wie etwas besser läuft — oft mit Prämie', bsp:'Ich habe einen Verbesserungsvorschlag für die Kistenablage eingereicht.'},
      {de:'nach 5S aufräumen', hi:'Ordnungssystem: jedes Werkzeug hat einen festen Platz', bsp:'Am Schichtende räumen wir den Arbeitsplatz nach 5S auf.'},
      {de:'die Hände desinfizieren', hi:'in der Lebensmittelproduktion vor jedem Betreten', bsp:'Vor dem Betreten der Halle bitte die Hände desinfizieren.'},
      {de:'die Kühlkette einhalten', hi:'die Ware darf nie zu warm werden', bsp:'Beim Umlagern bitte die Kühlkette einhalten, maximal zwei Grad.'},
      {de:'den HACCP-Punkt dokumentieren', hi:'Temperatur und Kontrolle ins Protokoll eintragen', bsp:'Den HACCP-Punkt an der Kühlung dokumentiere ich stündlich.'},
      {de:'eine Korrekturmaßnahme eintragen', hi:'was du getan hast, als der Wert nicht stimmte', bsp:'Abweichung 6 Grad, Korrekturmaßnahme: Ware umgelagert, Technik informiert.'},
      {de:'die Allergene kennzeichnen', hi:'die vierzehn Hauptallergene müssen auf das Etikett', bsp:'Auf dem Etikett fehlt das Allergen Sesam, das muss gekennzeichnet werden.'},
      {de:'einen Schichttausch vereinbaren', hi:'mit einer Kollegin die Schicht tauschen, Vorgesetzter muss zustimmen', bsp:'Können wir für Samstag einen Schichttausch vereinbaren?'},
      {de:'den Urlaubsantrag einreichen', hi:'schriftlich, meist über die Schichtleitung', bsp:'Den Urlaubsantrag für August habe ich gestern eingereicht.'}
    ],
    dialoge:[
      {
        id:'produktion-uebergabe',
        titel:'Schichtübergabe an der Anlage',
        lvl:'B1',
        dauer:'4 Min',
        ort:'Es ist 21.50 Uhr an Spritzgussmaschine 3. Du übergibst an die Nachtschicht. Der laufende Auftrag ist Artikel 4408, geplant waren dreizehnhundert Stück, geschafft hast du zwölfhundert. Zwischen 17 und 18 Uhr stand die Anlage wegen einer Störung am Greifer. Vierzig Teile sind wegen Grat Ausschuss.',
        schritte:[
          {amanda:'Servus. Wie war die Schicht an der 3?', hinweis:'Fang mit dem laufenden Auftrag und der Stückzahl an.', beispiel:'Läuft noch Artikel 4408. Die Stückzahl liegt bei zwölfhundert, geplant waren dreizehnhundert.', redemittel:['Es läuft noch Artikel …','Die Stückzahl liegt bei …','Geplant waren …']},
          {amanda:'Warum hundert weniger?', hinweis:'Nenne die Störung mit Uhrzeit und Dauer.', beispiel:'Die Anlage stand von 17 bis 18 Uhr. Der Greifer hat das Teil nicht sauber gegriffen, der Einrichter hat ihn neu justiert.', redemittel:['Die Anlage stand von … bis …','Das Problem war …','Der Einrichter hat …']},
          {amanda:'Und Ausschuss?', hinweis:'Sag Menge und Grund — der Grund ist wichtiger als die Menge.', beispiel:'Vierzig Teile Ausschuss wegen Grat an der Trennkante. Steht im Ausschussprotokoll, die Fehlerkarte habe ich ausgefüllt.', redemittel:['… Teile Ausschuss wegen …','Das steht im Ausschussprotokoll.','Die Fehlerkarte habe ich ausgefüllt.']},
          {amanda:'Ist das Werkzeug am Ende?', hinweis:'Sag, was du beobachtet hast, ohne zu urteilen — und was du empfiehlst.', beispiel:'Der Grat wird über die Schicht stärker. Ich vermute Verschleiß, entschieden hat das aber niemand. Ich würde beim Einrichter nachfragen lassen.', redemittel:['Der Fehler wird über die Schicht stärker.','Ich vermute …, sicher ist das nicht.','Das müsste der Einrichter beurteilen.']},
          {amanda:'Gut. Was soll ich heute Nacht beachten?', hinweis:'Sag klar, was die Nachtschicht tun soll — mit Zahl und Zeitpunkt.', beispiel:'Zu beachten ist: bitte jede Stunde ein Teil messen und bei Grat sofort stoppen. Um 2 Uhr steht der Werkzeugwechsel auf Artikel 220 an.', redemittel:['Zu beachten ist …','Bitte jede Stunde …','Um … Uhr steht … an.']}
        ]
      },
      {
        id:'produktion-stoerung',
        titel:'Störung an den Einrichter melden',
        lvl:'B1',
        dauer:'4 Min',
        ort:'Es ist 10.20 Uhr. An Linie 2 fällt ungefähr jedes zehnte Teil aus der Zuführung. Das passiert seit etwa zwei Stunden und nur, wenn die Anlage nach einer Pause wieder anfährt. Der Einrichter Herr Novak kommt an die Maschine.',
        schritte:[
          {amanda:'Was ist los bei dir?', hinweis:'Sag in einem Satz, was passiert — die Beobachtung, nicht die Diagnose.', beispiel:'An Linie 2 fällt etwa jedes zehnte Teil aus der Zuführung, bevor es in die Station kommt.', redemittel:['An Linie … fällt …','Etwa jedes … Teil …','Das Teil kommt nicht bis …']},
          {amanda:'Seit wann?', hinweis:'Uhrzeit nennen, nicht schätzen mit „schon länger".', beispiel:'Seit etwa 8.15 Uhr. Vorher lief die Schicht ohne Auffälligkeiten.', redemittel:['Seit etwa … Uhr.','Vorher lief es störungsfrei.','Zum ersten Mal war es um …']},
          {amanda:'Immer oder nur manchmal?', hinweis:'Sag die Häufigkeit mit Zahl und nenne die Bedingung.', beispiel:'Sporadisch, etwa dreimal pro Stunde. Auffällig ist: es passiert vor allem, wenn die Anlage nach einer Pause neu anfährt.', redemittel:['Sporadisch, etwa … mal pro Stunde.','Auffällig ist, dass …','Vor allem, wenn …']},
          {amanda:'Hast du schon was verstellt?', hinweis:'Ehrlich sagen, was du getan hast und was du nicht angefasst hast.', beispiel:'Nein, verstellt habe ich nichts. Ich habe die Zuführung gereinigt und den Sensor abgewischt. Die Parameter sind unverändert.', redemittel:['Verstellt habe ich nichts.','Ich habe nur … gereinigt.','Die Parameter sind unverändert.']},
          {amanda:'Gut. Ich schaue mir das an. Lass die Anlage stehen.', hinweis:'Bestätige, sichere die Anlage und frag, was mit der Ware passiert.', beispiel:'Alles klar, die Anlage bleibt stehen und ich sichere sie gegen Wiedereinschalten. Was mache ich mit den Teilen der letzten zwei Stunden?', redemittel:['Die Anlage bleibt stehen.','Ich sichere sie gegen Wiedereinschalten.','Was mache ich mit den Teilen aus …?']}
        ]
      },
      {
        id:'produktion-hygiene',
        titel:'Die Hygieneunterweisung nach dem Infektionsschutzgesetz',
        lvl:'B1',
        dauer:'4 Min',
        ort:'Erster Arbeitstag in der Backwarenproduktion, 5.30 Uhr. Frau Öztürk von der Qualitätssicherung macht mit dir die Erstunterweisung nach Paragraf 43 Infektionsschutzgesetz. Am Ende sollst du unterschreiben.',
        schritte:[
          {amanda:'Sie unterschreiben gleich, dass Sie unterwiesen wurden. Ist alles klar?', hinweis:'Frag nach, bevor du unterschreibst — das ist kein schlechtes Zeichen, sondern ein gutes.', beispiel:'Fast. Bevor ich unterschreibe, hätte ich zwei Fragen. Darf ich?', redemittel:['Bevor ich unterschreibe, hätte ich eine Frage.','Eines habe ich noch nicht ganz verstanden.','Darf ich kurz nachfragen?']},
          {amanda:'Natürlich, fragen Sie.', hinweis:'Frag die Meldepflicht bei Krankheit ab — das ist der Kern der Unterweisung.', beispiel:'Wenn ich Durchfall oder Fieber habe: Muss ich das melden, auch wenn ich mich sonst fit fühle?', redemittel:['Wenn ich … habe, muss ich dann …?','Ab wann muss ich mich melden?','Wen rufe ich in dem Fall an?']},
          {amanda:'Ja. Bei Durchfall, Erbrechen oder Fieber dürfen Sie nicht in die Produktion. Sofort melden.', hinweis:'Wiederhole die Regel zurück, damit sie sitzt.', beispiel:'Verstanden: bei Durchfall, Erbrechen oder Fieber sofort melden und nicht in die Produktion. Auch wenn es nur ein Tag ist.', redemittel:['Verstanden: bei … sofort melden.','Also nicht in die Produktion, sondern …','Ich wiederhole zur Sicherheit …']},
          {amanda:'Genau. Zweite Frage?', hinweis:'Frag konkret nach dem, was du täglich tun musst.', beispiel:'Zur Arbeitskleidung: Wo ziehe ich mich um, wie oft wechsle ich die Kleidung, und wann muss ich die Hände desinfizieren?', redemittel:['Wo ziehe ich mich um?','Wie oft wechsle ich …?','Wann genau muss ich die Hände desinfizieren?']},
          {amanda:'Umkleide vor der Schleuse, Kleidung täglich, Hände bei jedem Betreten und nach jeder Pause.', hinweis:'Fass zusammen und unterschreibe erst dann.', beispiel:'Also: umziehen in der Schleuse, Kleidung täglich frisch, Hände bei jedem Betreten und nach jeder Pause. Dann unterschreibe ich jetzt.', redemittel:['Also zusammengefasst …','Dann unterschreibe ich jetzt.','Bekomme ich eine Kopie für meine Unterlagen?']}
        ]
      }
    ],
    saetze:[
      {de:'Die Stückzahl liegt bei zwölfhundert, geplant waren dreizehnhundert.', wann:'am Anfang jeder Schichtübergabe'},
      {de:'Die Anlage stand von 17 bis 18 Uhr.', wann:'wenn du eine Stillstandszeit meldest — immer mit Uhrzeit'},
      {de:'Der Fehler tritt sporadisch auf, etwa dreimal pro Stunde.', wann:'bei der Störungsmeldung an Einrichter oder Instandhaltung'},
      {de:'Auffällig ist, dass es nur beim Anfahren passiert.', wann:'wenn du die Bedingung nennst — das ist die wertvollste Information'},
      {de:'Verstellt habe ich nichts.', wann:'wenn der Einrichter kommt — sag das immer als Erstes'},
      {de:'Der Wert liegt außerhalb der Toleranz.', wann:'bei der Maßprüfung, statt „das Teil ist schlecht"'},
      {de:'Ich sperre das Prüflos und informiere den Schichtführer.', wann:'wenn du einen Qualitätsfehler gefunden hast'},
      {de:'Halt, die Maschine ist noch nicht aus.', wann:'wenn jemand zu früh in die Anlage greift — laut und sofort'},
      {de:'Ich sichere die Anlage gegen Wiedereinschalten.', wann:'vor Reinigung, Wartung und Störungssuche'},
      {de:'Bevor ich unterschreibe, hätte ich noch eine Frage.', wann:'bei jeder Unterweisung, die du nicht vollständig verstanden hast'},
      {de:'Ich wiederhole zur Sicherheit: …', wann:'wenn du eine Anweisung bestätigst, besonders im Lärm'},
      {de:'Können Sie das bitte noch einmal langsam sagen?', wann:'an der lauten Anlage — kein Grund, sich zu schämen'},
      {de:'Ich habe die Fehlerkarte ausgefüllt.', wann:'bei der Übergabe, damit die nächste Schicht Bescheid weiß'},
      {de:'Können wir für Samstag einen Schichttausch vereinbaren?', wann:'unter Kolleginnen und Kollegen, vor dem Antrag beim Vorgesetzten'},
      {de:'Ich melde mich für heute krank, ich habe Durchfall.', wann:'in der Lebensmittelproduktion Pflicht — hier ist Krankmeldung keine Höflichkeit, sondern Gesetz'}
    ],
    ueb:[
      {typ:'wahl', f:'Du meldest eine Störung. Was gehört zuerst gesagt?', o:['Dass die Maschine schlecht ist','Was passiert, seit wann und wie oft','Wer Schuld hat'], l:1, e:'Der Einrichter braucht drei Dinge: was, seit wann, wie oft. Und wenn du die Bedingung kennst — nur beim Anfahren, nur bei Material aus Charge X — sparst du ihm eine Stunde.'},
      {typ:'wahl', f:'Bei der Maßprüfung liegt ein Teil außerhalb der Toleranz. Was tust du?', o:['Es aussortieren und weiterlaufen lassen','Das Prüflos sperren, Fehlerkarte ausfüllen, Schichtführer informieren','Warten, ob das nächste Teil besser ist'], l:1, e:'Ein Teil außerhalb der Toleranz heißt: die ganze geprüfte Menge ist verdächtig. Sperren, dokumentieren, melden — in dieser Reihenfolge.'},
      {typ:'wahl', f:'Du hast in der Lebensmittelproduktion seit heute Nacht Durchfall. Was gilt?', o:['Arbeiten und Handschuhe tragen','Nicht in die Produktion, sofort melden','Nur Verpackung machen, keine offene Ware'], l:1, e:'Nach Paragraf 42 und 43 Infektionsschutzgesetz gibt es hier kein Ermessen: Durchfall, Erbrechen oder Fieber bedeuten Tätigkeitsverbot und Meldepflicht.'},
      {typ:'luecke', f:'Vierzig Teile Ausschuss ___ Grat an der Trennkante.', l:'wegen', e:'wegen plus Genitiv oder Dativ nennt den Grund. Im Ausschussprotokoll steht immer ein Grund, nie nur eine Zahl.'},
      {typ:'luecke', f:'Der Fehler tritt ___ auf, etwa dreimal pro Stunde.', l:'sporadisch', e:'sporadisch heißt unregelmäßig. Das Gegenteil wäre reproduzierbar — beides sind Wörter, die der Einrichter hören will.'},
      {typ:'luecke', f:'Der Wert liegt außerhalb der ___.', l:'Toleranz', e:'Die Toleranz ist der erlaubte Bereich um das Sollmaß. Innerhalb heißt gut, außerhalb heißt Ausschuss oder Nacharbeit.'},
      {typ:'luecke', f:'Vor der Reinigung wird die Anlage gegen ___ gesichert.', l:'Wiedereinschalten', e:'Das ist Lockout-Tagout: abschließen, Schild anhängen, Schlüssel behalten. Kein anderer darf die Anlage starten, während du drin bist.'},
      {typ:'luecke', f:'Beim Umlagern bitte die ___ einhalten, maximal zwei Grad.', l:'Kühlkette', e:'Die Kühlkette darf an keiner Stelle unterbrochen werden — auch nicht für zehn Minuten auf dem Gang.'},
      {typ:'bausteine', l:'Die Anlage stand von 17 bis 18 Uhr.', teile:['Die','Anlage','stand','von','17','bis','18','Uhr'], e:'stehen im Präteritum: stand. In der Übergabe erzählst du in der Vergangenheit.'},
      {typ:'bausteine', l:'Auffällig ist, dass es nur beim Anfahren passiert.', teile:['Auffällig','ist','dass','es','nur','beim','Anfahren','passiert'], e:'Im dass-Satz steht das Verb ganz hinten: … passiert. Dieser Satzbau ist der Kern jeder guten Störungsmeldung.'},
      {typ:'bausteine', l:'Ich sperre das Prüflos und fülle die Fehlerkarte aus.', teile:['Ich','sperre','das','Prüflos','und','fülle','die','Fehlerkarte','aus'], e:'ausfüllen ist trennbar: fülle … aus. Das aus rutscht ans Satzende, auch im zweiten Teil des Satzes.'},
      {typ:'paare', p:[['der Grat','überstehender Rand an der Trennkante'],['die Einfallstelle','Delle in der Oberfläche'],['der Lunker','Hohlraum im Inneren des Teils'],['die Maßabweichung','das Maß stimmt nicht mit der Zeichnung'],['der Kratzer','Beschädigung der Sichtfläche']], e:'Fünf Fehlerbilder, fünf Namen. Wer sie kennt, wird von „mach mal" zur Fachkraft — das ist der sprachliche Unterschied zwischen A2 und B2 an der Anlage.'},
      {typ:'paare', p:[['die Betriebsanweisung','Regeln für diesen Arbeitsplatz, hängt an der Maschine'],['das Sicherheitsdatenblatt','Gefahren und Schutz zu einem Stoff'],['die Fehlerkarte','Formular zu einem einzelnen Qualitätsfehler'],['das HACCP-Protokoll','Temperatur- und Kontrollnachweis in der Lebensmittelproduktion']], e:'Vier Dokumente, die du finden können musst, bevor jemand danach fragt. Schau am ersten Tag nach, wo sie hängen.'},
      {typ:'hoeren', text:'Es läuft noch Artikel 4408. Die Stückzahl liegt bei zwölfhundert, geplant waren dreizehnhundert. Die Anlage stand von 17 bis 18 Uhr, der Greifer hat nicht sauber gegriffen. Vierzig Teile Ausschuss wegen Grat. Um 2 Uhr steht der Werkzeugwechsel auf Artikel 220 an.', f:'Was steht in der Nacht um 2 Uhr an?', o:['eine Störung am Greifer','ein Werkzeugwechsel','die Inventur'], l:1, e:'Der letzte Satz einer Übergabe ist fast immer der wichtigste: er sagt, was die nächste Schicht tun muss. Hör bis zum Ende zu.'},
      {typ:'hoeren', text:'Bei Durchfall, Erbrechen oder Fieber dürfen Sie nicht in die Produktion. Melden Sie sich sofort telefonisch bei der Schichtleitung. Die Arbeitskleidung wechseln Sie täglich, die Hände desinfizieren Sie bei jedem Betreten der Halle und nach jeder Pause.', f:'Wie oft wird die Arbeitskleidung gewechselt?', o:['bei jedem Betreten','täglich','einmal pro Woche'], l:1, e:'In Unterweisungen kommen viele Häufigkeiten kurz hintereinander. Ordne sie beim Zuhören zu: Kleidung täglich, Hände bei jedem Betreten.'},
      {typ:'sprechen', f:'Melde die Störung: An Linie 2 fällt etwa jedes zehnte Teil aus der Zuführung, seit etwa 8.15 Uhr.', l:'An Linie 2 fällt etwa jedes zehnte Teil', e:'Sprich lauter als sonst und mach nach der Uhrzeit eine Pause. An der Anlage ist es laut, wiederhole lieber einmal zu viel.'},
      {typ:'sprechen', f:'Sag vor der Unterschrift: Bevor ich unterschreibe, hätte ich noch eine Frage.', l:'Bevor ich unterschreibe, hätte ich noch eine Frage', e:'Freundlich und ruhig. Wer bei einer Unterweisung nachfragt, wirkt nicht schwach, sondern zuverlässig.'},
      {typ:'ordnen', l:['Ich messe das Teil und stelle eine Maßabweichung fest.','Ich sperre das Prüflos.','Ich fülle die Fehlerkarte aus.','Ich trage die Menge ins Ausschussprotokoll ein.','Ich informiere den Schichtführer.'], f:'Bring den Ablauf bei einem Qualitätsfehler in die richtige Reihenfolge.', e:'Sperren kommt vor Schreiben, Schreiben vor Melden. So kann in der Zwischenzeit niemand die verdächtige Ware weiterschicken.'},
      {typ:'artikel', w:'Ausschuss', l:'der', e:'der Ausschuss — die Teile, die nicht verwendbar sind. Kein Plural im Fertigungsgebrauch.'},
      {typ:'artikel', w:'Zykluszeit', l:'die', e:'die Zeit, also die Zykluszeit. Wörter auf -zeit sind immer feminin.'},
      {typ:'artikel', w:'Rüstblatt', l:'das', e:'das Blatt, also das Rüstblatt. Plural: die Rüstblätter.'}
    ],
    schreiben:{
      auf:'Schreibe das Übergabeprotokoll für deine Schicht an Anlage 3 für die Nachtschicht.',
      punkte:['Laufender Auftrag und Stückzahl','Störungen mit Uhrzeit und Dauer','Ausschuss mit Menge und Grund','Was die nächste Schicht beachten muss'],
      hilfe:'Schreib in der Vergangenheit und in kurzen Sätzen, ein Punkt pro Satz. Beschreibe, statt zu bewerten: nicht „das Werkzeug ist Schrott", sondern „der Grat wird über die Schicht stärker". Fang die Punkte so an: „Es läuft Artikel …" · „Die Anlage stand von … bis … wegen …" · „Ausschuss: … Teile wegen …" · „Zu beachten ist …". Nenne immer Uhrzeit, Stückzahl und Grund. Fünf bis acht Sätze reichen — die Nachtschicht liest im Stehen.'
    }
  },

  /* ===================== 14 · IT UND SOFTWARE ===================== */
  {
    id:'it',
    t:'IT und Software',
    unter:'Softwareentwicklung, Administration, IT-Support, Data und Cloud',
    lvl:'B1–B2',
    pruef:'Keine Sprachprüfung und kein Deutschnachweis für die Blaue Karte EU. Deutsch wird für die Niederlassungserlaubnis relevant: 27 Monate mit A1, 21 Monate mit B1.',
    warum:'109.000 offene Stellen zählt der Bitkom 2025 — und trotzdem gibt es hier keinen Sprachzwang. Englisch ist in vielen Firmen zulässige Arbeitssprache, für die Blaue Karte EU wird kein Deutschnachweis verlangt. Deutsch brauchst du trotzdem: für das Team im Stand-up, für Kunden ohne Technikwissen, für Behörden — und für den unbefristeten Aufenthalt. Wer mitredet und ein Ticket verständlich schreibt, wird im Betrieb anders wahrgenommen als jemand, der nur den Code abliefert.',
    handlungen:[
      {t:'Im Stand-up berichten', e:'In dreißig Sekunden sagen, was gestern fertig wurde, was heute ansteht und wo du nicht weiterkommst.', lvl:'B1'},
      {t:'Ein Ticket verständlich schreiben', e:'Schritte zur Reproduktion, erwartetes und tatsächliches Verhalten — so, dass eine Kollegin ohne Rückfrage arbeiten kann.', lvl:'B1'},
      {t:'Im Code Review höflich formulieren', e:'Kritik am Code äußern, nicht an der Person: Vorschlag statt Vorwurf, Frage statt Urteil.', lvl:'B2'},
      {t:'Eine Störung melden und eskalieren', e:'Betroffene Systeme, Beginn, Auswirkung und nächster Schritt — knapp, und rechtzeitig eine Stufe höher geben.', lvl:'B2'},
      {t:'Ein Wartungsfenster ankündigen', e:'Den Nutzern schriftlich sagen, wann das System nicht erreichbar ist, wie lange und was sie vorher tun sollen.', lvl:'B1'},
      {t:'Anforderungen mit der Fachabteilung klären', e:'Zuhören, wiederholen, Rückfragen stellen und am Ende schriftlich festhalten, was wirklich gebaut wird.', lvl:'B2'},
      {t:'Aufwand schätzen und Verzögerung begründen', e:'Eine Zahl nennen, die Annahmen dahinter offenlegen und früh sagen, wenn der Termin nicht hält.', lvl:'B2'},
      {t:'Fachbegriffe für Nicht-Techniker übersetzen', e:'Am Telefon dasselbe zweimal sagen: einmal fachlich, einmal in Alltagssprache. Das ist der Registerwechsel.', lvl:'B2'},
      {t:'In der Retrospektive Kritik geben und annehmen', e:'Sagen, was nicht gut lief, ohne jemanden bloßzustellen — und selbst ruhig bleiben, wenn du gemeint bist.', lvl:'B2'},
      {t:'Vertragsdeutsch und Behördengang bewältigen', e:'Arbeitsvertrag, Anmeldung, Steuer-Identifikationsnummer, Elternzeit, Niederlassungserlaubnis: alles läuft auf Deutsch.', lvl:'B2'}
    ],
    chunks:[
      {de:'am Stand-up teilnehmen', hi:'die tägliche Kurzbesprechung im Team, meist 15 Minuten', bsp:'Ich nehme jeden Morgen um 9 Uhr am Stand-up teil.'},
      {de:'gestern habe ich … abgeschlossen', hi:'der erste Teil im Stand-up: was war', bsp:'Gestern habe ich die Anmeldemaske abgeschlossen.'},
      {de:'heute mache ich weiter mit …', hi:'der zweite Teil: was heute ansteht', bsp:'Heute mache ich weiter mit der Schnittstelle zum Lager.'},
      {de:'blockiert bin ich bei …', hi:'der dritte Teil: wo es nicht weitergeht — sag es früh, nicht am Freitag', bsp:'Blockiert bin ich bei den Zugriffsrechten auf dem Testsystem.'},
      {de:'die Schnittstelle anbinden', hi:'zwei Systeme miteinander sprechen lassen', bsp:'Die Schnittstelle zum Warenwirtschaftssystem ist angebunden.'},
      {de:'die Anforderung aufnehmen', hi:'festhalten, was die Fachabteilung wirklich will', bsp:'Ich nehme die Anforderung auf und schicke sie dir bis Freitag.'},
      {de:'einen Fehlerbericht schreiben', hi:'im Alltag Ticket genannt — mit Schritten, erwartetem und tatsächlichem Verhalten', bsp:'Bitte schreib einen Fehlerbericht, dann kann ich das nachstellen.'},
      {de:'die Schritte zur Reproduktion angeben', hi:'wie man den Fehler wieder auslöst, eins nach dem anderen', bsp:'Ohne Schritte zur Reproduktion können wir den Fehler nicht suchen.'},
      {de:'das erwartete Verhalten beschreiben', hi:'was hätte passieren sollen — dazu kommt das tatsächliche Verhalten', bsp:'Erwartetes Verhalten: der Nutzer landet auf der Startseite.'},
      {de:'den Fehler nachstellen', hi:'ihn absichtlich noch einmal erzeugen', bsp:'Ich konnte den Fehler auf dem Testsystem nachstellen.'},
      {de:'die Bereitstellung planen', hi:'wann die neue Version auf das Produktivsystem geht', bsp:'Die Bereitstellung ist für Donnerstag, 20 Uhr geplant.'},
      {de:'auf das Produktivsystem gehen', hi:'echte Daten, echte Nutzer — ab jetzt zählt jeder Fehler', bsp:'Am Freitag gehen wir mit der neuen Version auf das Produktivsystem.'},
      {de:'ein Wartungsfenster ankündigen', hi:'die geplante Zeit, in der das System nicht erreichbar ist', bsp:'Wir kündigen ein Wartungsfenster von 22 bis 24 Uhr an.'},
      {de:'die Datensicherung einspielen', hi:'die Sicherungskopie zurückholen', bsp:'Wir haben die Datensicherung von gestern Abend eingespielt.'},
      {de:'die Zugriffsrechte vergeben', hi:'festlegen, wer was sehen und ändern darf', bsp:'Die Zugriffsrechte für die neue Kollegin sind vergeben.'},
      {de:'der Wartungsvertrag läuft aus', hi:'der Vertrag über Pflege und Unterstützung einer Software', bsp:'Der Wartungsvertrag läuft zum Jahresende aus.'},
      {de:'die Abnahme erteilen', hi:'der Kunde bestätigt schriftlich: so ist es richtig', bsp:'Die Fachabteilung hat die Abnahme gestern erteilt.'},
      {de:'eine Störung melden', hi:'ein System ist ganz oder teilweise ausgefallen', bsp:'Ich melde eine Störung im Bestellsystem, seit 10 Uhr.'},
      {de:'die Störung eskalieren', hi:'eine Stufe höher geben, wenn du allein nicht weiterkommst', bsp:'Wenn es bis 14 Uhr nicht läuft, eskaliere ich an die Teamleitung.'},
      {de:'die Auswirkung einschätzen', hi:'wer ist betroffen und wie schlimm ist es', bsp:'Betroffen sind alle Filialen, die Auswirkung ist hoch.'},
      {de:'einen Änderungswunsch aufnehmen', hi:'der Kunde will nachträglich etwas anderes', bsp:'Das ist ein Änderungswunsch — den nehme ich gern auf, aber er kostet Zeit.'},
      {de:'den Aufwand schätzen', hi:'sagen, wie viele Tage oder Stunden etwas dauert', bsp:'Den Aufwand schätze ich auf drei bis vier Tage.'},
      {de:'sich verzögern', hi:'später fertig werden als geplant — immer früh melden', bsp:'Die Auslieferung verzögert sich um eine Woche.'},
      {de:'eine Rückfrage haben zu …', hi:'nachfragen ist billiger als raten', bsp:'Ich habe noch eine Rückfrage zu der Anforderung aus dem Protokoll.'},
      {de:'einen Vorschlag machen', hi:'die höfliche Form der Kritik im Code Review', bsp:'Ein Vorschlag: Sollen wir das in eine eigene Funktion auslagern?'},
      {de:'aus meiner Sicht wäre es besser, wenn …', hi:'so kritisierst du den Code, nicht die Person', bsp:'Aus meiner Sicht wäre es besser, wenn wir den Wert vorher prüfen.'},
      {de:'das ist mir noch nicht ganz klar', hi:'Unklarheit benennen, ohne jemanden anzugreifen', bsp:'Diese Stelle ist mir noch nicht ganz klar — magst du sie kurz erklären?'},
      {de:'in einfachen Worten heißt das …', hi:'der Registerwechsel für Nicht-Techniker', bsp:'In einfachen Worten heißt das: Ihre Daten sind nicht verloren.'},
      {de:'die Anmeldung funktioniert nicht', hi:'die häufigste Meldung im Support', bsp:'Der Kunde sagt, die Anmeldung funktioniert seit heute früh nicht.'},
      {de:'einen Termin beim Bürgeramt haben', hi:'Wohnsitz anmelden, meist in den ersten zwei Wochen', bsp:'Ich habe am Dienstag einen Termin beim Bürgeramt zur Anmeldung.'},
      {de:'die Steuer-Identifikationsnummer bekommen', hi:'kommt nach der Anmeldung automatisch per Post', bsp:'Ohne Steuer-Identifikationsnummer zahlst du zu viel Lohnsteuer.'},
      {de:'die Niederlassungserlaubnis beantragen', hi:'der unbefristete Aufenthaltstitel — dafür brauchst du Deutsch', bsp:'Mit B1 kann ich die Niederlassungserlaubnis schon nach 21 Monaten beantragen.'},
      {de:'Elternzeit beantragen', hi:'schriftlich beim Arbeitgeber, spätestens sieben Wochen vorher', bsp:'Ich möchte ab März für sechs Monate Elternzeit beantragen.'}
    ],
    dialoge:[
      {
        id:'it-standup',
        titel:'Das Stand-up am Morgen',
        lvl:'B1',
        dauer:'4 Min',
        ort:'Es ist 9 Uhr, das Team steht im Besprechungsraum. Du bist an der Reihe. Gestern hast du die Anmeldemaske fertig gemacht, heute willst du an der Schnittstelle weiterarbeiten — aber du hast keine Rechte auf dem Testsystem.',
        schritte:[
          {amanda:'Gut, dann du. Wie war gestern?', hinweis:'Sag in einem Satz, was du gestern abgeschlossen hast.', beispiel:'Gestern habe ich die Anmeldemaske abgeschlossen und den Fehlerbericht 412 geschlossen.', redemittel:['Gestern habe ich … abgeschlossen.','Ich bin fertig geworden mit …','Ich habe … geschlossen.']},
          {amanda:'Und heute?', hinweis:'Nenne genau eine Sache, an der du heute arbeitest.', beispiel:'Heute mache ich weiter mit der Schnittstelle zum Lagersystem.', redemittel:['Heute mache ich weiter mit …','Heute fange ich an mit …','Mein Ziel für heute ist …']},
          {amanda:'Gibt es etwas, das dich aufhält?', hinweis:'Sag klar, wo du blockiert bist — und wer helfen kann.', beispiel:'Ja, blockiert bin ich bei den Zugriffsrechten auf dem Testsystem. Ich komme nicht auf die Datenbank.', redemittel:['Blockiert bin ich bei …','Ich komme nicht weiter, weil …','Da brauche ich Hilfe von …']},
          {amanda:'Seit wann geht das schon?', hinweis:'Nenne den Zeitpunkt und was du selbst schon versucht hast.', beispiel:'Seit gestern Nachmittag. Ich habe die Rechte angefragt, aber noch keine Antwort bekommen.', redemittel:['Seit gestern Nachmittag.','Ich habe schon … versucht.','Ich habe … angefragt, aber noch keine Antwort.']},
          {amanda:'Okay, ich kümmere mich nach dem Stand-up darum.', hinweis:'Bedanke dich und sag, was du bis dahin machst.', beispiel:'Danke. Bis dahin schreibe ich die Tests, dafür brauche ich die Rechte nicht.', redemittel:['Danke, das hilft mir.','Bis dahin mache ich …','Dafür brauche ich die Rechte nicht.']}
        ]
      },
      {
        id:'it-anforderung',
        titel:'Die Anforderung mit der Fachabteilung klären',
        lvl:'B2',
        dauer:'5 Min',
        ort:'Frau Reinhardt aus dem Vertrieb sitzt bei dir. Sie möchte einen Knopf, der „alle Kundendaten exportiert". Was das genau heißt, weiß noch niemand.',
        schritte:[
          {amanda:'Wir brauchen einen Knopf, der uns alle Kundendaten exportiert. Geht das bis nächste Woche?', hinweis:'Frag zuerst nach dem Zweck, nicht nach der Lösung.', beispiel:'Das schaue ich mir gern an. Damit ich es richtig baue: Wofür brauchen Sie den Export genau?', redemittel:['Damit ich es richtig baue: …','Wofür brauchen Sie das genau?','Was möchten Sie damit am Ende machen?']},
          {amanda:'Für die Quartalsauswertung. Wir müssen sehen, welche Kunden im letzten Vierteljahr bestellt haben.', hinweis:'Grenze die Daten ein — frag nach Feldern und Zeitraum.', beispiel:'Verstehe. Dann brauchen Sie nicht alle Kunden, sondern die mit Bestellung im Zeitraum. Welche Felder müssen drinstehen?', redemittel:['Dann brauchen Sie also nicht …, sondern …','Welche Felder müssen drinstehen?','Über welchen Zeitraum genau?']},
          {amanda:'Name, Kundennummer, Umsatz. Und bitte als Tabelle für die Tabellenkalkulation.', hinweis:'Wiederhole die Anforderung zusammengefasst, damit ihr euch sicher seid.', beispiel:'Ich fasse zusammen: eine Tabelle mit Name, Kundennummer und Umsatz, gefiltert nach Bestelldatum im gewählten Quartal.', redemittel:['Ich fasse zusammen: …','Habe ich Sie richtig verstanden: …?','Also konkret: …']},
          {amanda:'Genau so. Und bis Freitag, ja?', hinweis:'Nenne einen ehrlichen Aufwand und die Bedingung dafür.', beispiel:'Den Aufwand schätze ich auf zwei Tage. Freitag ist machbar, wenn ich bis morgen die Zugriffsrechte auf die Umsatzdaten bekomme.', redemittel:['Den Aufwand schätze ich auf …','… ist machbar, wenn …','Ohne … schaffe ich das nicht.']},
          {amanda:'Die Rechte besorge ich Ihnen heute noch.', hinweis:'Halte das Ergebnis schriftlich fest — das schützt euch beide.', beispiel:'Sehr gern. Ich schreibe die Anforderung kurz auf und schicke sie Ihnen zur Bestätigung, dann bauen wir wirklich dasselbe.', redemittel:['Ich schreibe die Anforderung auf und …','Ich schicke Ihnen das zur Bestätigung.','Bitte prüfen Sie kurz, ob das so stimmt.']}
        ]
      },
      {
        id:'it-support',
        titel:'Der Support-Anruf mit Frau Kubis',
        lvl:'B2',
        dauer:'5 Min',
        ort:'Frau Kubis aus der Buchhaltung ruft an. Sie kommt seit heute früh nicht in das Programm und hat Angst, dass ihre Belege weg sind. Fachwörter helfen ihr nicht.',
        schritte:[
          {amanda:'Ich komme nicht mehr rein und jetzt sind bestimmt alle meine Belege weg!', hinweis:'Erst beruhigen, dann fragen. Und keine Fachwörter.', beispiel:'Keine Sorge, Ihre Belege sind gespeichert, die gehen nicht verloren. Schauen wir zusammen, warum die Anmeldung nicht klappt.', redemittel:['Keine Sorge, … sind gespeichert.','Da geht nichts verloren.','Schauen wir uns das zusammen an.']},
          {amanda:'Ich gebe meinen Namen ein und dann kommt so ein rotes Kästchen.', hinweis:'Frag nach dem genauen Wortlaut der Meldung.', beispiel:'Können Sie mir vorlesen, was in dem roten Kästchen steht? Wort für Wort, das hilft mir sehr.', redemittel:['Können Sie mir vorlesen, was da steht?','Was genau steht in der Meldung?','Lesen Sie es bitte Wort für Wort vor.']},
          {amanda:'Da steht: Kennwort abgelaufen. Was heißt das denn?', hinweis:'Erkläre es in Alltagssprache, ohne Fachwort.', beispiel:'Das heißt nur: Ihr Kennwort ist zu alt. Aus Sicherheitsgründen muss es alle 90 Tage neu gesetzt werden. Wir machen das jetzt in zwei Minuten.', redemittel:['Das heißt nur: …','In einfachen Worten: …','Das ist nicht schlimm, das bedeutet …']},
          {amanda:'Und wie mache ich das? Ich bin da nicht so gut mit Computern.', hinweis:'Führe sie Schritt für Schritt, ein Schritt pro Satz.', beispiel:'Ganz einfach. Klicken Sie bitte unten auf „Kennwort vergessen". Sagen Sie mir, wenn Sie es sehen.', redemittel:['Klicken Sie bitte auf …','Sagen Sie mir, wenn Sie es sehen.','Und jetzt der nächste Schritt: …']},
          {amanda:'Ah, jetzt bin ich drin! Und die Belege sind alle da. Vielen Dank!', hinweis:'Schließe sauber ab und sag, was du noch dokumentierst.', beispiel:'Sehr gern. Ich halte das kurz im Ticket fest. Und in drei Monaten kommt die Meldung wieder — dann wissen Sie ja schon, was zu tun ist.', redemittel:['Ich halte das kurz im Ticket fest.','Melden Sie sich jederzeit wieder.','Dann wissen Sie beim nächsten Mal Bescheid.']}
        ]
      }
    ],
    saetze:[
      {de:'Blockiert bin ich bei den Zugriffsrechten.', wann:'im Stand-up, wenn du nicht weiterkommst — je früher, desto besser'},
      {de:'Ein Vorschlag: Sollen wir das in eine eigene Funktion auslagern?', wann:'im Code Review — als Frage, nicht als Befehl'},
      {de:'Aus meiner Sicht wäre es besser, wenn wir den Wert vorher prüfen.', wann:'wenn du im Review etwas kritisierst, ohne die Person anzugreifen'},
      {de:'Das ist mir noch nicht ganz klar. Magst du das kurz erklären?', wann:'statt zu raten oder stumm zu bleiben'},
      {de:'Können Sie mir vorlesen, was in der Meldung steht?', wann:'im Support, bevor du irgendetwas vermutest'},
      {de:'In einfachen Worten heißt das: …', wann:'wenn dein Gegenüber kein Technikwissen hat'},
      {de:'Ich fasse zusammen, damit wir wirklich dasselbe meinen.', wann:'am Ende jeder Anforderungsklärung'},
      {de:'Den Aufwand schätze ich auf drei bis vier Tage.', wann:'wenn nach einem Termin gefragt wird — nenne immer eine Spanne'},
      {de:'Das schaffe ich bis Freitag, wenn ich bis morgen die Daten bekomme.', wann:'Zusage mit Bedingung, damit die Verantwortung geteilt ist'},
      {de:'Die Auslieferung verzögert sich um eine Woche. Der Grund ist …', wann:'sobald du weißt, dass der Termin nicht hält — nicht erst am Termin'},
      {de:'Ich melde eine Störung im Bestellsystem, seit 10 Uhr.', wann:'am Anfang jeder Störungsmeldung: was, wo, seit wann'},
      {de:'Wenn es bis 14 Uhr nicht läuft, eskaliere ich an die Teamleitung.', wann:'wenn du eine Grenze setzt, bevor es zu spät ist'},
      {de:'Wir kündigen ein Wartungsfenster von 22 bis 24 Uhr an.', wann:'in der Rundmail an alle Nutzer, mindestens einen Tag vorher'},
      {de:'Bitte schreib einen Fehlerbericht mit den Schritten zur Reproduktion.', wann:'wenn jemand nur sagt, es geht nicht'},
      {de:'Da ist mir ein Fehler passiert. Ich habe die Datensicherung schon eingespielt.', wann:'Fehler früh melden — mit dem Schritt, den du schon getan hast'}
    ],
    ueb:[
      {typ:'wahl', f:'Du bist im Stand-up an der Reihe. Wie baust du deinen Beitrag auf?', o:['Gestern — heute — blockiert','Alles, was diese Woche noch ansteht','Erst die Probleme der anderen, dann deine'], l:0, e:'Das Stand-up hat immer dieselben drei Teile: was war, was kommt, wo hakt es. Damit bist du in dreißig Sekunden fertig und alle wissen Bescheid.'},
      {typ:'wahl', f:'Welche Formulierung gehört in ein Code Review?', o:['Das ist falsch, so macht man das nicht.','Aus meiner Sicht wäre es besser, wenn wir den Wert vorher prüfen.','Wer hat das denn geschrieben?'], l:1, e:'Kritik gilt dem Code, nicht der Person. „Aus meiner Sicht" und ein Vorschlag statt eines Urteils — damit kommst du in jedem deutschen Team weiter.'},
      {typ:'wahl', f:'Was muss in jedem Fehlerbericht stehen?', o:['Deine Vermutung, wer schuld ist','Schritte zur Reproduktion, erwartetes und tatsächliches Verhalten','Nur die Fehlermeldung'], l:1, e:'Diese drei Teile machen den Unterschied zwischen einem Ticket, das man bearbeiten kann, und einem, das zurückkommt.'},
      {typ:'luecke', f:'___ bin ich bei den Zugriffsrechten auf dem Testsystem.', l:'Blockiert', e:'Blockiert bin ich bei … — der Standardsatz im Stand-up. Er steht am Satzanfang, danach kommt das Verb.'},
      {typ:'luecke', f:'Die Auslieferung ___ sich um eine Woche.', l:'verzögert', e:'sich verzögern: später fertig werden als geplant. Das Wort ist reflexiv, das „sich" gehört dazu.'},
      {typ:'luecke', f:'Wir kündigen ein ___ von 22 bis 24 Uhr an.', l:'Wartungsfenster', e:'Das Wartungsfenster ist die geplante Zeit ohne Betrieb. Ankündigen heißt: vorher sagen, nicht danach erklären.'},
      {typ:'luecke', f:'Den ___ schätze ich auf drei bis vier Tage.', l:'Aufwand', e:'Der Aufwand ist die Arbeitszeit, die etwas kostet. Nenne immer eine Spanne, keine einzelne Zahl.'},
      {typ:'luecke', f:'Die Fachabteilung hat gestern die ___ erteilt.', l:'Abnahme', e:'Die Abnahme ist die schriftliche Bestätigung des Kunden: so ist es richtig. Ab da gilt das Projekt als geliefert.'},
      {typ:'bausteine', l:'Gestern habe ich die Anmeldemaske abgeschlossen.', teile:['Gestern','habe','ich','die','Anmeldemaske','abgeschlossen'], e:'Steht die Zeitangabe vorn, kommt sofort das Verb: Gestern habe ich … Das Partizip rutscht ans Ende.'},
      {typ:'bausteine', l:'Ich habe noch eine Rückfrage zu der Anforderung.', teile:['Ich','habe','noch','eine','Rückfrage','zu','der','Anforderung'], e:'eine Rückfrage haben zu + Dativ. Höflicher und kürzer als „Ich verstehe das nicht".'},
      {typ:'bausteine', l:'Das schaffe ich bis Freitag, wenn ich morgen die Daten bekomme.', teile:['Das','schaffe','ich','bis','Freitag','wenn','ich','morgen','die','Daten','bekomme'], e:'Im wenn-Satz steht das Verb ganz hinten: … die Daten bekomme. So machst du aus einer Zusage eine faire Zusage.'},
      {typ:'paare', p:[['die Schnittstelle','die Verbindung zwischen zwei Systemen'],['die Bereitstellung','die neue Version geht auf das Produktivsystem'],['die Datensicherung','die Kopie, die dich rettet'],['die Zugriffsrechte','wer darf was sehen und ändern'],['die Abnahme','der Kunde bestätigt schriftlich']], e:'Diese fünf Wörter stehen in fast jedem Projektprotokoll. Lerne sie mit Artikel und mit dem passenden Verb.'},
      {typ:'paare', p:[['die Störung','das System ist ausgefallen'],['der Änderungswunsch','der Kunde will nachträglich etwas anderes'],['der Fehlerbericht','das Ticket mit Reproduktion und Verhalten'],['der Wartungsvertrag','Pflege und Unterstützung gegen Geld']], e:'Vier Begriffe, vier ganz verschiedene Gespräche. Wenn du sie auseinanderhältst, redest du mit dem Kunden präziser.'},
      {typ:'hoeren', text:'Kurze Information an alle: Am Donnerstag ist von 22 bis 24 Uhr ein Wartungsfenster. In dieser Zeit ist das Bestellsystem nicht erreichbar. Bitte speichern Sie Ihre Arbeit vorher ab.', f:'Was sollen die Nutzer vorher tun?', o:['Den Rechner ausschalten','Ihre Arbeit abspeichern','Sich beim Support melden'], l:1, e:'In Ankündigungen steht die Handlung fast immer im letzten Satz, eingeleitet mit „Bitte". Da musst du hinhören.'},
      {typ:'hoeren', text:'Hallo, hier ist Frau Kubis aus der Buchhaltung. Ich komme seit heute früh nicht mehr in das Programm. Da steht: Kennwort abgelaufen. Können Sie mir bitte helfen?', f:'Was ist das Problem?', o:['Das Programm ist gelöscht','Das Kennwort ist abgelaufen','Die Belege sind verschwunden'], l:1, e:'Frag im Support immer nach dem genauen Wortlaut der Meldung. Der Wortlaut sagt dir oft schon die Lösung.'},
      {typ:'sprechen', f:'Sag deinen Stand-up-Beitrag: Gestern habe ich die Anmeldemaske abgeschlossen, heute mache ich weiter mit der Schnittstelle, blockiert bin ich bei den Rechten.', l:'Gestern habe ich die Anmeldemaske abgeschlossen', e:'Mach nach jedem der drei Teile eine kleine Pause. Dann kann das Team folgen, auch wenn du schnell sprichst.'},
      {typ:'sprechen', f:'Formuliere freundlich: Ein Vorschlag — sollen wir das in eine eigene Funktion auslagern?', l:'Ein Vorschlag', e:'Die Stimme geht am Ende nach oben. Es ist ein Angebot, kein Urteil. Genau das hört dein Gegenüber heraus.'},
      {typ:'ordnen', l:['Ich beschreibe, was ich getan habe.','Ich nenne die Schritte zur Reproduktion.','Ich schreibe das erwartete Verhalten auf.','Ich schreibe das tatsächliche Verhalten auf.','Ich hänge die Fehlermeldung an.'], f:'Bring den Fehlerbericht in die richtige Reihenfolge.', e:'Erst der Weg, dann der Unterschied zwischen Soll und Ist, zum Schluss der Beleg. In dieser Reihenfolge kann jede Kollegin sofort anfangen.'},
      {typ:'artikel', w:'Schnittstelle', l:'die', e:'die Schnittstelle, Plural die Schnittstellen. Wörter auf -e sind sehr oft feminin.'},
      {typ:'artikel', w:'Fehlerbericht', l:'der', e:'der Bericht, also auch der Fehlerbericht. Das letzte Wort im Kompositum bestimmt den Artikel.'},
      {typ:'artikel', w:'Wartungsfenster', l:'das', e:'das Fenster, also das Wartungsfenster. Plural bleibt gleich: die Wartungsfenster.'}
    ],
    schreiben:{
      auf:'Schreibe den Fehlerbericht für das Bestellsystem, damit die Kollegin ihn ohne Rückfrage bearbeiten kann.',
      punkte:['Was hast du getan (Schritte zur Reproduktion)','Was hätte passieren sollen','Was ist stattdessen passiert','Wer ist betroffen und wie dringend ist es'],
      hilfe:'Schreib sachlich und in kurzen Sätzen, ein Schritt pro Zeile. Nummeriere die Schritte: „1. Anmeldung öffnen. 2. Kundennummer eingeben. 3. Auf Suchen klicken." Dann zwei feste Überschriften: „Erwartetes Verhalten: …" und „Tatsächliches Verhalten: …". Nenne Uhrzeit, System und Version. Keine Vermutung, wer schuld ist — nur was du beobachtet hast. Acht bis zwölf Zeilen reichen.'
    }
  },
  /* ===================== 15 · INGENIEURWESEN ===================== */
  {
    id:'ingenieur',
    t:'Ingenieurwesen',
    unter:'Maschinenbau, Elektrotechnik, Bauingenieurwesen, Verfahrenstechnik, Projektleitung',
    lvl:'B2–C1',
    pruef:'Keine allgemeine Sprachnachweispflicht — „Ingenieur" ist eine geschützte Bezeichnung, reglementiert ist nur „Beratender Ingenieur". Arbeitgeber erwarten in der Praxis B2 bis C1.',
    warum:'4.400 Anerkennungen gab es 2024, rund 100.000 Stellen sind laut VDI offen. Ein Sprachgesetz gibt es hier nicht — aber Besprechung, Protokoll, Angebot und Abnahme laufen auf Deutsch, und zwar in einem Register, das kein Alltagskurs übt. Wer Nachträge nicht begründen und Termine nicht vertreten kann, verliert Geld für die Firma, egal wie gut die Rechnung stimmt.',
    handlungen:[
      {t:'Eine Besprechung leiten', e:'Tagesordnung ansagen, durch die Punkte führen, Redezeit begrenzen und am Ende jeden Beschluss laut wiederholen.', lvl:'C1'},
      {t:'Das Protokoll schreiben', e:'Beschlüsse und Aufgaben festhalten — wer macht was bis wann. Das Protokoll ist später das einzige Gedächtnis des Projekts.', lvl:'B2'},
      {t:'Lastenheft und Pflichtenheft lesen', e:'Erkennen, was der Kunde fordert und was ihr zusagt — und unklare Anforderungen vor Vertragsschluss präzisieren.', lvl:'C1'},
      {t:'Technische Unterlagen besprechen', e:'Zeichnung, Toleranz, Norm und Prüfbericht mit Werkstatt, Prüfstelle und Kunde durchgehen.', lvl:'B2'},
      {t:'Angebot und Nachtrag begründen', e:'Sagen, was im Festpreis enthalten ist und was nicht — freundlich, aber ohne einzuknicken.', lvl:'C1'},
      {t:'Termin- und Kostenabweichung vertreten', e:'Dem Kunden eine schlechte Nachricht überbringen, die Ursache benennen und sofort einen Lösungsvorschlag anhängen.', lvl:'C1'},
      {t:'Einen Änderungsantrag stellen', e:'Eine Änderung schriftlich beantragen, mit Auswirkung auf Termin, Kosten und Qualität.', lvl:'B2'},
      {t:'Präsentieren und Nachfragen aushalten', e:'Einen Stand vorstellen, Zwischenfragen zulassen, bei kritischen Fragen ruhig bleiben und ehrlich antworten.', lvl:'C1'},
      {t:'Lieferanten führen und reklamieren', e:'Angebot einholen, Termin nachhalten, Mangel rügen und Nachbesserung mit Frist verlangen.', lvl:'B2'},
      {t:'Sicherheits- und Behördensprache lesen', e:'Formulierungen wie „ist vorzulegen" oder „sind einzureichen" verstehen und selbst richtig verwenden.', lvl:'C1'}
    ],
    chunks:[
      {de:'die Tagesordnung durchgehen', hi:'am Anfang jeder Besprechung: was wird heute behandelt', bsp:'Ich gehe kurz die Tagesordnung durch, wir haben vier Punkte.'},
      {de:'zum nächsten Punkt kommen', hi:'so führst du weiter, ohne unhöflich zu unterbrechen', bsp:'Danke, dann kommen wir zum nächsten Punkt.'},
      {de:'einen Beschluss festhalten', hi:'das Ergebnis laut wiederholen und ins Protokoll schreiben', bsp:'Ich halte fest: Die Prüfung wird auf Mai verschoben.'},
      {de:'wer macht was bis wann', hi:'die drei Fragen, die am Ende jeder Besprechung geklärt sein müssen', bsp:'Bevor wir schließen: wer macht was bis wann?'},
      {de:'das Protokoll geht heute noch raus', hi:'Protokoll am selben Tag verschicken, sonst erinnert sich niemand', bsp:'Das Protokoll geht heute noch raus, bitte um Rückmeldung bis Freitag.'},
      {de:'das Lastenheft fordert …', hi:'was der Kunde verlangt', bsp:'Das Lastenheft fordert eine Verfügbarkeit von 98 Prozent.'},
      {de:'im Pflichtenheft zusagen', hi:'was ihr als Lösung verbindlich anbietet', bsp:'Im Pflichtenheft haben wir eine wöchentliche Wartung zugesagt.'},
      {de:'eine Anforderung präzisieren', hi:'unklare Formulierungen messbar machen', bsp:'Bitte lassen Sie uns die Anforderung präzisieren: Was heißt „kurzfristig verfügbar"?'},
      {de:'die Toleranz einhalten', hi:'die erlaubte Abweichung vom Sollmaß', bsp:'Das Bauteil hält die Toleranz von plus minus 0,1 Millimeter nicht ein.'},
      {de:'nach Norm ausführen', hi:'gemäß DIN, EN oder ISO arbeiten', bsp:'Die Schweißnaht wird nach Norm ausgeführt und geprüft.'},
      {de:'den Prüfbericht vorlegen', hi:'das Dokument über das Ergebnis der Prüfung', bsp:'Der Prüfbericht ist bis zum 15. März vorzulegen.'},
      {de:'die technische Zeichnung freigeben', hi:'sie ist ab jetzt verbindlich für die Fertigung', bsp:'Die technische Zeichnung wurde gestern freigegeben.'},
      {de:'im Festpreis enthalten sein', hi:'der Satz, um den fast jeder Streit geht', bsp:'Die Montage vor Ort ist im Festpreis nicht enthalten.'},
      {de:'einen Nachtrag stellen', hi:'zusätzliche Leistung, zusätzliches Geld — schriftlich und vorher', bsp:'Für die geänderte Verkleidung stellen wir einen Nachtrag.'},
      {de:'die Mehrkosten beziffern', hi:'eine konkrete Zahl nennen statt „wird teurer"', bsp:'Die Mehrkosten beziffern wir auf 8.400 Euro netto.'},
      {de:'einen Änderungsantrag einreichen', hi:'Änderung beantragen, mit Wirkung auf Termin und Kosten', bsp:'Der Änderungsantrag ist bis Montag einzureichen.'},
      {de:'sich der Termin nach hinten verschieben', hi:'die höfliche Form von „wir sind zu spät"', bsp:'Der Termin verschiebt sich um zwei Wochen nach hinten.'},
      {de:'in Verzug geraten', hi:'die vertragliche Formulierung für Terminüberschreitung', bsp:'Wenn die Lieferung ausbleibt, geraten wir in Verzug.'},
      {de:'die Ursache benennen', hi:'sagen, woran es liegt — ohne Schuldzuweisung', bsp:'Die Ursache ist die verspätete Lieferung der Antriebe.'},
      {de:'einen Lösungsvorschlag anhängen', hi:'nie eine schlechte Nachricht ohne Vorschlag überbringen', bsp:'Wir schlagen vor, die Montage vorzuziehen und die Verkleidung nachzuliefern.'},
      {de:'die Abnahme durchführen', hi:'gemeinsam prüfen und schriftlich bestätigen', bsp:'Die Abnahme führen wir am Donnerstag um 10 Uhr durch.'},
      {de:'einen Mangel rügen', hi:'einen Fehler formell und mit Frist beanstanden', bsp:'Wir rügen den Mangel und setzen eine Frist bis zum 30. April.'},
      {de:'Nachbesserung verlangen', hi:'der Lieferant muss den Mangel beseitigen', bsp:'Wir verlangen Nachbesserung innerhalb von zehn Werktagen.'},
      {de:'Bedenken anmelden', hi:'schriftlich warnen, wenn eine Vorgabe fachlich falsch ist — das schützt dich', bsp:'Wir melden Bedenken gegen den vorgesehenen Untergrund an.'},
      {de:'ein Angebot einholen', hi:'beim Lieferanten Preis und Termin anfragen', bsp:'Wir holen drei Angebote ein und vergleichen sie.'},
      {de:'den Termin nachhalten', hi:'regelmäßig nachfragen, ob es noch passt', bsp:'Ich halte den Liefertermin wöchentlich nach.'},
      {de:'ist bis zum … vorzulegen', hi:'Passiv der Verpflichtung: muss vorgelegt werden', bsp:'Die Gefährdungsbeurteilung ist bis zum Baubeginn vorzulegen.'},
      {de:'sind einzureichen', hi:'dieselbe Form im Plural — typisch für Behörde und Vertrag', bsp:'Die Unterlagen sind in zweifacher Ausfertigung einzureichen.'},
      {de:'die nicht fristgerecht eingereichten Unterlagen', hi:'das erweiterte Attribut: ein ganzer Nebensatz vor dem Nomen', bsp:'Die nicht fristgerecht eingereichten Unterlagen werden nicht berücksichtigt.'},
      {de:'zur Sache zurückkommen', hi:'freundlich abbrechen, wenn eine Besprechung abdriftet', bsp:'Lassen Sie uns zur Sache zurückkommen, wir haben noch zwei Punkte.'},
      {de:'das sehe ich anders, und zwar deshalb, weil …', hi:'sachlich widersprechen, ohne persönlich zu werden', bsp:'Das sehe ich anders, und zwar deshalb, weil die Norm eine Prüfung verlangt.'},
      {de:'auf den Punkt kommen', hi:'in der Präsentation: erst das Ergebnis, dann der Weg', bsp:'Ich komme gleich auf den Punkt: Wir liegen zwei Wochen hinter dem Plan.'}
    ],
    dialoge:[
      {
        id:'ingenieur-besprechung',
        titel:'Die Projektbesprechung mit Terminverzug',
        lvl:'C1',
        dauer:'5 Min',
        ort:'Montag, 9 Uhr, wöchentliche Projektbesprechung. Die Antriebe kommen zwei Wochen später als geplant. Herr Ostermann von der Fertigung ist verärgert, weil seine Leute dann leer laufen.',
        schritte:[
          {amanda:'Also, ich habe gehört, die Antriebe kommen nicht. Stimmt das?', hinweis:'Bestätige sachlich, mit Zahl und Ursache — ohne Ausflüchte.', beispiel:'Das stimmt. Der Lieferant meldet zwei Wochen Verzug, neuer Termin ist der 28. April. Die Ursache ist ein Engpass beim Getriebehersteller.', redemittel:['Das stimmt, und zwar …','Der neue Termin ist der …','Die Ursache ist …']},
          {amanda:'Und was machen meine Leute solange? Die stehen dann da.', hinweis:'Zeig, dass du die Folge verstanden hast, und mach einen Vorschlag.', beispiel:'Das ist genau der Punkt. Mein Vorschlag: Wir ziehen die Verkleidung vor, die ist unabhängig vom Antrieb. Dann bleibt Ihre Mannschaft im Takt.', redemittel:['Das ist genau der Punkt.','Mein Vorschlag wäre: …','Damit bleibt … im Takt.']},
          {amanda:'Vorziehen? Die Zeichnung ist doch noch gar nicht freigegeben.', hinweis:'Widersprich sachlich, wenn du es besser weißt — mit Beleg.', beispiel:'Doch, die technische Zeichnung wurde am Freitag freigegeben. Ich schicke Ihnen die Freigabe gleich nach der Besprechung.', redemittel:['Doch, … wurde am … freigegeben.','Ich schicke Ihnen den Beleg direkt nach der Besprechung.','Da bin ich anderer Meinung, und zwar deshalb, weil …']},
          {amanda:'Na gut. Aber der Endtermin bleibt, ja?', hinweis:'Sei ehrlich und nenne die Bedingung, unter der der Termin hält.', beispiel:'Der Endtermin hält, wenn die Antriebe am 28. April kommen und die Abnahme in derselben Woche stattfindet. Sonst verschiebt sich alles um eine Woche nach hinten.', redemittel:['Der Endtermin hält, wenn …','Andernfalls verschiebt sich … nach hinten.','Ich kann Ihnen das nur unter der Bedingung zusagen, dass …']},
          {amanda:'Okay. Dann halten wir das so fest.', hinweis:'Wiederhole die Beschlüsse und verteile die Aufgaben.', beispiel:'Ich halte fest: Verkleidung wird vorgezogen, Herr Ostermann plant um bis Mittwoch, ich hole die schriftliche Terminbestätigung bis Dienstag. Das Protokoll geht heute noch raus.', redemittel:['Ich halte fest: …','… bis … , … bis …','Das Protokoll geht heute noch raus.']}
        ]
      },
      {
        id:'ingenieur-kostenabweichung',
        titel:'Das Kundengespräch über die Kostenabweichung',
        lvl:'C1',
        dauer:'5 Min',
        ort:'Frau Dr. Wendland ist die Auftraggeberin. Sie hat nachträglich eine andere Verkleidung gewünscht. Das kostet 8.400 Euro mehr — sie geht aber von einem Festpreis aus.',
        schritte:[
          {amanda:'Wir haben einen Festpreis vereinbart. Warum bekomme ich jetzt einen Nachtrag?', hinweis:'Erst den Festpreis bestätigen, dann den Unterschied erklären.', beispiel:'Der Festpreis gilt selbstverständlich — für den Leistungsumfang aus dem Pflichtenheft. Die geänderte Verkleidung war darin nicht enthalten.', redemittel:['Der Festpreis gilt selbstverständlich — für …','… ist im Festpreis nicht enthalten.','Der Nachtrag betrifft ausschließlich …']},
          {amanda:'Das war doch nur eine Kleinigkeit. Ein anderes Blech, mehr nicht.', hinweis:'Erkläre den Aufwand konkret, ohne herablassend zu klingen.', beispiel:'Es sieht klein aus, hat aber Folgen: neues Material, neue Zeichnung, neue Prüfung nach Norm. Das sind zusammen 8.400 Euro netto.', redemittel:['Es sieht klein aus, hat aber Folgen: …','Konkret heißt das: …','Die Mehrkosten beziffern wir auf …']},
          {amanda:'Und wenn ich das ablehne?', hinweis:'Bleib ruhig und nenne die Alternative ehrlich.', beispiel:'Dann bauen wir die ursprünglich vereinbarte Verkleidung, ohne Mehrkosten. Beides ist möglich, Sie entscheiden.', redemittel:['Dann bauen wir … wie vereinbart.','Beides ist möglich, Sie entscheiden.','Die Alternative wäre …']},
          {amanda:'Das hätten Sie mir früher sagen müssen.', hinweis:'Kritik annehmen, ohne die Sache aufzugeben.', beispiel:'Da haben Sie recht, das hätte ich Ihnen am selben Tag mitteilen müssen. Künftig bekommen Sie jede Kostenwirkung innerhalb von 24 Stunden schriftlich.', redemittel:['Da haben Sie recht, …','Das hätte früher kommen müssen.','Künftig bekommen Sie … innerhalb von …']},
          {amanda:'Gut. Schicken Sie mir das schriftlich.', hinweis:'Schließe verbindlich ab: Dokument, Frist, Wirkung.', beispiel:'Sehr gern. Sie erhalten den Nachtrag heute per Mail, mit Mehrkosten, Terminwirkung und Frist bis Freitag. Ohne Ihre Freigabe bauen wir nach dem alten Stand weiter.', redemittel:['Sie erhalten … heute per Mail.','Mit Mehrkosten, Terminwirkung und Frist bis …','Ohne Ihre Freigabe bauen wir … weiter.']}
        ]
      },
      {
        id:'ingenieur-lieferant',
        titel:'Der Mangel beim Lieferanten',
        lvl:'B2',
        dauer:'4 Min',
        ort:'Von 40 gelieferten Bauteilen halten zwölf die Toleranz nicht ein. Du rufst Herrn Baumgart beim Lieferanten an. Die Montage beginnt in zehn Tagen.',
        schritte:[
          {amanda:'Baumgart, guten Tag. Was kann ich für Sie tun?', hinweis:'Nenne Auftrag, Menge und den Mangel — in einem Satz.', beispiel:'Guten Tag, Herr Baumgart. Es geht um Auftrag 4711: Von 40 Bauteilen halten zwölf die Toleranz von plus minus 0,1 Millimeter nicht ein.', redemittel:['Es geht um Auftrag …','Von … halten … die Toleranz nicht ein.','Wir haben einen Mangel festgestellt bei …']},
          {amanda:'Sind Sie sicher? Bei uns war die Prüfung in Ordnung.', hinweis:'Bleib freundlich und biete den Beleg an.', beispiel:'Ich verstehe Ihre Rückfrage. Wir haben nachgemessen und den Prüfbericht erstellt. Ich schicke ihn Ihnen sofort zu.', redemittel:['Ich verstehe Ihre Rückfrage.','Wir haben nachgemessen und … erstellt.','Ich schicke Ihnen den Prüfbericht sofort zu.']},
          {amanda:'Gut, schauen wir uns das an. Das dauert aber ein paar Wochen.', hinweis:'Setze eine Frist und begründe sie mit dem Montagetermin.', beispiel:'Das geht leider nicht. Wir verlangen Nachbesserung bis zum 30. April, denn die Montage beginnt am 5. Mai.', redemittel:['Das geht leider nicht, weil …','Wir verlangen Nachbesserung bis zum …','Der Montagetermin lässt uns keinen Spielraum.']},
          {amanda:'Und wenn wir das nicht schaffen?', hinweis:'Nenne die Folge sachlich, ohne zu drohen.', beispiel:'Dann geraten wir in Verzug und müssen die Mehrkosten geltend machen. Das möchte ich vermeiden — lassen Sie uns lieber eine Teillieferung vereinbaren.', redemittel:['Dann geraten wir in Verzug.','Das möchte ich vermeiden.','Lassen Sie uns lieber … vereinbaren.']},
          {amanda:'Teillieferung geht. Zwanzig Stück bis zum 25.', hinweis:'Wiederhole die Vereinbarung und kündige die schriftliche Bestätigung an.', beispiel:'Ich halte fest: 20 nachgebesserte Teile bis zum 25. April, die übrigen bis zum 30. April. Ich bestätige Ihnen das heute noch schriftlich.', redemittel:['Ich halte fest: …','Die übrigen … bis zum …','Ich bestätige Ihnen das heute noch schriftlich.']}
        ]
      }
    ],
    saetze:[
      {de:'Ich gehe kurz die Tagesordnung durch, wir haben vier Punkte.', wann:'zu Beginn jeder Besprechung, die du leitest'},
      {de:'Lassen Sie uns zur Sache zurückkommen.', wann:'wenn die Runde abdriftet — freundlich, aber bestimmt'},
      {de:'Ich halte fest: …', wann:'nach jedem Beschluss, laut und wörtlich, damit es im Protokoll steht'},
      {de:'Bevor wir schließen: wer macht was bis wann?', wann:'die wichtigste Frage der letzten Minute'},
      {de:'Das sehe ich anders, und zwar deshalb, weil …', wann:'sachlich widersprechen, ohne persönlich zu werden'},
      {de:'Das ist im Festpreis nicht enthalten.', wann:'wenn der Kunde eine Zusatzleistung selbstverständlich findet'},
      {de:'Die Mehrkosten beziffern wir auf 8.400 Euro netto.', wann:'immer mit Zahl — „wird teurer" akzeptiert niemand'},
      {de:'Der Termin verschiebt sich um zwei Wochen nach hinten. Die Ursache ist …', wann:'sobald du es weißt, nicht erst kurz vor dem Termin'},
      {de:'Mein Vorschlag wäre, die Montage vorzuziehen.', wann:'nach jeder schlechten Nachricht — nie ohne Lösungsvorschlag'},
      {de:'Wir melden Bedenken gegen die vorgesehene Ausführung an.', wann:'wenn eine Vorgabe fachlich falsch ist — schriftlich, das schützt dich'},
      {de:'Wir rügen den Mangel und setzen eine Frist bis zum 30. April.', wann:'bei fehlerhafter Lieferung, formell und mit Datum'},
      {de:'Der Prüfbericht ist bis zum 15. März vorzulegen.', wann:'Vertrags- und Behördendeutsch: Pflicht ohne „muss"'},
      {de:'Können Sie das bitte konkretisieren? Was heißt „kurzfristig" genau?', wann:'wenn eine Anforderung nicht messbar ist'},
      {de:'Ich komme gleich auf den Punkt: Wir liegen zwei Wochen hinter dem Plan.', wann:'am Anfang einer Präsentation mit schlechter Nachricht'},
      {de:'Dazu kann ich Ihnen jetzt nichts Belastbares sagen, ich melde mich bis morgen.', wann:'wenn du eine Frage nicht beantworten kannst — besser als raten'}
    ],
    ueb:[
      {typ:'wahl', f:'Womit endet eine gut geleitete Projektbesprechung?', o:['Mit dem letzten Tagesordnungspunkt','Mit der Frage: wer macht was bis wann','Mit einer offenen Diskussion'], l:1, e:'Ohne Zuständigkeit und Termin ist ein Beschluss nur eine Absichtserklärung. Diese drei Wörter — wer, was, bis wann — gehören in jedes Protokoll.'},
      {typ:'wahl', f:'Der Kunde beruft sich auf den Festpreis. Wie fängst du an?', o:['Der Festpreis gilt — für den Umfang aus dem Pflichtenheft.','Festpreis ist doch nur ein Richtwert.','Da müssen Sie mit meinem Chef sprechen.'], l:0, e:'Zuerst bestätigen, was gilt, dann die Grenze zeigen. So bleibst du glaubwürdig und musst trotzdem nichts verschenken.'},
      {typ:'wahl', f:'Was bedeutet „Die Unterlagen sind einzureichen"?', o:['Die Unterlagen wurden eingereicht','Die Unterlagen müssen eingereicht werden','Die Unterlagen können eingereicht werden'], l:1, e:'sein + zu + Infinitiv ist ein Passiv der Verpflichtung. Es heißt immer „müssen", auch wenn kein müssen dasteht. Diese Form steht in jedem Vertrag und jedem Behördenschreiben.'},
      {typ:'luecke', f:'Der Prüfbericht ist bis zum 15. März ___.', l:'vorzulegen', e:'sein + zu + Infinitiv: ist vorzulegen = muss vorgelegt werden. Das zu steht bei trennbaren Verben in der Mitte: vor-zu-legen.'},
      {typ:'luecke', f:'Die Montage vor Ort ist im ___ nicht enthalten.', l:'Festpreis', e:'Der Satz, der jeden Nachtrag einleitet. Sag ihn früh und freundlich, nicht erst bei der Rechnung.'},
      {typ:'luecke', f:'Wir ___ den Mangel und setzen eine Frist bis zum 30. April.', l:'rügen', e:'einen Mangel rügen heißt: ihn formell beanstanden. Ohne Rüge und Frist gibt es später keine Ansprüche.'},
      {typ:'luecke', f:'Das Bauteil hält die ___ von plus minus 0,1 Millimeter nicht ein.', l:'Toleranz', e:'Die Toleranz ist die erlaubte Abweichung vom Sollmaß. Man hält sie ein oder man hält sie nicht ein.'},
      {typ:'luecke', f:'Ich ___ fest: Die Prüfung wird auf Mai verschoben.', l:'halte', e:'etwas festhalten: den Beschluss laut wiederholen, bevor er ins Protokoll geht. Trennbares Verb, fest steht am Ende.'},
      {typ:'bausteine', l:'Die Mehrkosten beziffern wir auf 8.400 Euro netto.', teile:['Die','Mehrkosten','beziffern','wir','auf','8.400','Euro','netto'], e:'beziffern auf + Akkusativ. Steht das Objekt vorn, folgt sofort das Verb, dann das Subjekt.'},
      {typ:'bausteine', l:'Der Endtermin hält, wenn die Antriebe am 28. April kommen.', teile:['Der','Endtermin','hält','wenn','die','Antriebe','am','28.','April','kommen'], e:'Im wenn-Satz steht das Verb ganz hinten. So wird aus einer Zusage eine Zusage mit Bedingung — und die kannst du halten.'},
      {typ:'bausteine', l:'Wir melden Bedenken gegen die vorgesehene Ausführung an.', teile:['Wir','melden','Bedenken','gegen','die','vorgesehene','Ausführung','an'], e:'anmelden ist trennbar: melden … an. Bedenken anmelden ist die formelle Warnung, die dich später schützt.'},
      {typ:'paare', p:[['das Lastenheft','was der Kunde fordert'],['das Pflichtenheft','was ihr als Lösung zusagt'],['der Nachtrag','zusätzliche Leistung, zusätzliches Geld'],['der Prüfbericht','das Ergebnis der Prüfung, schriftlich'],['die Abnahme','gemeinsam prüfen und bestätigen']], e:'Diese fünf Dokumente bestimmen jedes Projekt. Wer sie verwechselt, argumentiert am Vertrag vorbei.'},
      {typ:'paare', p:[['in Verzug geraten','den vereinbarten Termin überschreiten'],['einen Mangel rügen','einen Fehler formell beanstanden'],['Nachbesserung verlangen','die Beseitigung des Mangels fordern'],['Bedenken anmelden','schriftlich vor einer falschen Vorgabe warnen']], e:'Vier Wendungen aus dem Vertragsdeutsch. Sie klingen hart, sind aber sachlich — und im Streitfall genau das, was zählt.'},
      {typ:'hoeren', text:'Kurze Information zum Projekt Halle Nord: Der Lieferant meldet zwei Wochen Verzug bei den Antrieben, neuer Termin ist der 28. April. Wir ziehen deshalb die Verkleidung vor. Der Endtermin bleibt bestehen.', f:'Was passiert wegen des Verzugs?', o:['Der Endtermin wird verschoben','Die Verkleidung wird vorgezogen','Das Projekt wird gestoppt'], l:1, e:'Achte auf das Wort „deshalb". Danach kommt immer die Maßnahme — das ist der Teil, den du dir merken musst.'},
      {typ:'hoeren', text:'Die geänderte Verkleidung ist im Festpreis nicht enthalten. Die Mehrkosten beziffern wir auf 8.400 Euro netto. Wir bitten um Ihre Freigabe bis Freitag.', f:'Was soll die Kundin tun?', o:['Bis Freitag freigeben','Eine neue Zeichnung schicken','Den Vertrag kündigen'], l:0, e:'In Nachträgen steht die Handlung im letzten Satz, meist mit „Wir bitten um …". Frist und Handlung immer zusammen lesen.'},
      {typ:'sprechen', f:'Sag den Beschluss: Ich halte fest — die Verkleidung wird vorgezogen, Herr Ostermann plant um bis Mittwoch.', l:'Ich halte fest', e:'Sprich langsam und mach nach „Ich halte fest" eine Pause. Alle im Raum schreiben jetzt mit.'},
      {typ:'sprechen', f:'Widersprich sachlich: Das sehe ich anders, und zwar deshalb, weil die Norm eine Prüfung verlangt.', l:'Das sehe ich anders', e:'Ruhige, gleichmäßige Stimme, kein Nachdruck auf „anders". Der Grund trägt das Argument, nicht die Lautstärke.'},
      {typ:'ordnen', l:['Ich bestätige den Festpreis.','Ich zeige, was nicht im Umfang enthalten war.','Ich erkläre den Aufwand konkret.','Ich beziffere die Mehrkosten.','Ich nenne Frist und Alternative.'], f:'Bring das Gespräch über den Nachtrag in die richtige Reihenfolge.', e:'Erst zustimmen, dann abgrenzen, dann rechnen, dann entscheiden lassen. Wer mit der Zahl anfängt, hat das Gespräch schon verloren.'},
      {typ:'artikel', w:'Lastenheft', l:'das', e:'das Heft, also das Lastenheft und das Pflichtenheft. Das letzte Wort im Kompositum bestimmt den Artikel.'},
      {typ:'artikel', w:'Toleranz', l:'die', e:'die Toleranz, Plural die Toleranzen. Wörter auf -anz und -enz sind immer feminin.'},
      {typ:'artikel', w:'Nachtrag', l:'der', e:'der Nachtrag, Plural die Nachträge. Verbstämme ohne Endung sind meistens männlich: der Antrag, der Vertrag, der Nachtrag.'}
    ],
    schreiben:{
      auf:'Schreibe das Protokoll der Projektbesprechung vom Montag, in der es um den Terminverzug bei den Antrieben ging.',
      punkte:['Ort, Zeit, Teilnehmende und Tagesordnung','Der Sachstand: was ist passiert und warum','Die Beschlüsse','Die Aufgaben: wer macht was bis wann'],
      hilfe:'Schreib knapp und im Präsens oder Perfekt, keine Meinungen, keine Namen mit Vorwürfen. Nutze feste Anfänge: „Anwesend: …" · „Zum Sachstand: …" · „Beschluss: …" · „Aufgabe: Herr … bis …". Für Pflichten nimm die Vertragsform: „Die Terminbestätigung ist bis Dienstag vorzulegen." Am Ende ein Satz zur Frist für Einwände: „Einwände bitte bis Freitag." Eine halbe Seite reicht.'
    }
  },
  /* ===================== 16 · BÜRO UND VERWALTUNG ===================== */
  {
    id:'buero',
    t:'Büro und Verwaltung',
    unter:'Sachbearbeitung, Sekretariat, Empfang, Personalabteilung, öffentliche Verwaltung',
    lvl:'B1–B2',
    pruef:'Keine Sprachprüfung. Einschlägig: Deutsch-Test für den Beruf B1·B2',
    warum:'Hier gibt es keine Fachsprachprüfung und keine Anerkennung — und trotzdem ist es das Feld, in dem Sprache nicht das Werkzeug, sondern die Arbeit selbst ist. Wer telefoniert, protokolliert und Behördenpost übersetzt, macht den ganzen Tag nichts anderes als Deutsch. Der Deutsch-Test für den Beruf B1·B2 ist das Zertifikat, das Arbeitgeber hier tatsächlich kennen. Und das Behördendeutsch mit seinen Nominalisierungen und Passivformen lernt man in keinem Alltagskurs.',
    handlungen:[
      {t:'Anrufe annehmen und weiterleiten', e:'Sich melden, das Anliegen erfassen, verbinden oder einen Rückruf zusagen — und den Rückruf dann auch veranlassen.', lvl:'B1'},
      {t:'Eine Gesprächsnotiz schreiben', e:'Wer hat wann angerufen, worum ging es, was ist zu tun — in vier Zeilen, sofort nach dem Gespräch.', lvl:'B1'},
      {t:'Die deutsche Geschäfts-E-Mail schreiben', e:'Betreff, Anrede, Anliegen im ersten Satz, Bitte, Grußformel. Und wissen, wann man siezt und wann „Hallo zusammen" reicht.', lvl:'B2'},
      {t:'Termine vereinbaren, verschieben, absagen', e:'Zeiten anbieten, Alternativen nennen und absagen, ohne den anderen zu verärgern.', lvl:'B1'},
      {t:'Protokoll und Aktenvermerk schreiben', e:'Ergebnisse einer Besprechung festhalten und einen Vorgang so notieren, dass ihn eine Kollegin in einem Jahr noch versteht.', lvl:'B2'},
      {t:'Behördendeutsch verstehen und übersetzen', e:'Nominalisierung, Passiv und Wendungen wie „nach Aktenlage" entschlüsseln — und für Kunden in einfache Worte fassen.', lvl:'B2'},
      {t:'Fristen und Wiedervorlage steuern', e:'Erkennen, bis wann etwas erledigt sein muss, und den Vorgang rechtzeitig auf Wiedervorlage legen.', lvl:'B1'},
      {t:'Eigene Personalangelegenheiten regeln', e:'Urlaubsantrag, Krankmeldung, Arbeitszeiterfassung und Gleitzeit richtig und rechtzeitig handhaben.', lvl:'B1'},
      {t:'Eine Beschwerde schriftlich beantworten', e:'Verständnis zeigen, den Sachverhalt darstellen, eine Lösung anbieten — sachlich und ohne Schuldbekenntnis, das nicht gemeint ist.', lvl:'B2'},
      {t:'Datenschutz und Schweigepflicht wahren', e:'Freundlich Nein sagen, wenn jemand Auskünfte will, die er nicht bekommen darf.', lvl:'B2'}
    ],
    chunks:[
      {de:'sich am Telefon melden', hi:'Firma, Name, Gruß — in dieser Reihenfolge', bsp:'Meier und Partner, Kowalczyk, guten Tag.'},
      {de:'Was kann ich für Sie tun?', hi:'die freundlichste Öffnung nach der Meldung', bsp:'Meier und Partner, Kowalczyk, guten Tag. Was kann ich für Sie tun?'},
      {de:'einen Moment, ich verbinde', hi:'so kündigst du die Weiterleitung an', bsp:'Einen Moment bitte, ich verbinde Sie mit Frau Ackermann.'},
      {de:'in einem Gespräch sein', hi:'die höfliche Form von „hat keine Zeit"', bsp:'Frau Ackermann ist gerade in einem Gespräch.'},
      {de:'einen Rückruf zusagen', hi:'versprechen, dass zurückgerufen wird — und es notieren', bsp:'Ich sage Ihnen einen Rückruf bis 15 Uhr zu.'},
      {de:'etwas ausrichten', hi:'eine Nachricht weitergeben', bsp:'Soll ich ihr etwas ausrichten?'},
      {de:'eine Gesprächsnotiz schreiben', hi:'wer, wann, worum, was ist zu tun', bsp:'Ich schreibe eine Gesprächsnotiz und lege sie ihr auf den Schreibtisch.'},
      {de:'unter der Nummer erreichbar sein', hi:'so notierst du den Rückrufwunsch', bsp:'Herr Petrow ist bis 16 Uhr unter der Nummer 0231 445566 erreichbar.'},
      {de:'Sehr geehrte Frau …', hi:'die förmliche Anrede nach außen, immer mit Komma und Kleinbuchstabe danach', bsp:'Sehr geehrte Frau Ackermann, vielen Dank für Ihre Nachricht.'},
      {de:'Hallo zusammen', hi:'intern im Team üblich — nach außen nie', bsp:'Hallo zusammen, hier die Unterlagen für morgen.'},
      {de:'Mit freundlichen Grüßen', hi:'die Standardgrußformel, ohne Komma danach', bsp:'Mit freundlichen Grüßen Anna Kowalczyk'},
      {de:'unter Bezugnahme auf Ihr Schreiben vom …', hi:'der förmliche Einstieg im Behördenverkehr', bsp:'Unter Bezugnahme auf Ihr Schreiben vom 3. Mai teilen wir Ihnen mit …'},
      {de:'wie telefonisch besprochen', hi:'so knüpfst du an ein Gespräch an', bsp:'Wie telefonisch besprochen sende ich Ihnen die Unterlagen.'},
      {de:'anbei erhalten Sie …', hi:'Standardsatz, wenn etwas mitgeschickt wird', bsp:'Anbei erhalten Sie die Rechnung in zweifacher Ausfertigung.'},
      {de:'einen Termin vereinbaren', hi:'zwei bis drei Zeiten anbieten, nicht nur eine', bsp:'Können wir einen Termin für nächste Woche vereinbaren?'},
      {de:'den Termin verschieben auf …', hi:'immer mit Ersatzvorschlag, sonst wirkt es wie eine Absage', bsp:'Können wir den Termin auf Donnerstag, 14 Uhr verschieben?'},
      {de:'kurzfristig absagen müssen', hi:'die höfliche Formel, wenn es eng wird', bsp:'Leider muss ich den Termin kurzfristig absagen.'},
      {de:'einen Aktenvermerk anlegen', hi:'kurze Notiz zu einem Vorgang in der Akte', bsp:'Zu dem Anruf habe ich einen Aktenvermerk angelegt.'},
      {de:'auf Wiedervorlage legen', hi:'den Vorgang zu einem bestimmten Datum wieder hochkommen lassen', bsp:'Ich lege den Vorgang auf Wiedervorlage zum 12. Juni.'},
      {de:'die Frist läuft ab am …', hi:'der wichtigste Satz in jeder Verwaltung', bsp:'Die Frist läuft am 30. April ab, wir brauchen die Unterlagen vorher.'},
      {de:'fristgerecht eingehen', hi:'rechtzeitig ankommen — es zählt der Eingang, nicht der Versand', bsp:'Der Widerspruch ist fristgerecht eingegangen.'},
      {de:'ist vorzulegen', hi:'Behördendeutsch für „muss vorgelegt werden"', bsp:'Die Bescheinigung ist bis zum 15. des Monats vorzulegen.'},
      {de:'sind einzureichen', hi:'dieselbe Pflichtform im Plural', bsp:'Die Unterlagen sind vollständig einzureichen.'},
      {de:'nach Aktenlage', hi:'nach dem, was in der Akte steht — nicht nach neuer Prüfung', bsp:'Nach Aktenlage wurde der Antrag bereits im März bearbeitet.'},
      {de:'die Bearbeitung des Antrags', hi:'Nominalisierung: aus „den Antrag bearbeiten" wird ein Nomen', bsp:'Die Bearbeitung des Antrags nimmt etwa vier Wochen in Anspruch.'},
      {de:'in einfachen Worten heißt das …', hi:'so übersetzt du Behördendeutsch für Kunden', bsp:'In einfachen Worten heißt das: Sie müssen nichts weiter tun.'},
      {de:'einen Urlaubsantrag stellen', hi:'schriftlich, vor der Buchung der Reise', bsp:'Ich stelle den Urlaubsantrag für die zweite Juliwoche.'},
      {de:'sich krankmelden', hi:'vor Arbeitsbeginn, telefonisch — das ist Pflicht', bsp:'Ich melde mich für heute krank, ich bringe die Bescheinigung nach.'},
      {de:'die Arbeitsunfähigkeitsbescheinigung einreichen', hi:'der Krankenschein, meist ab dem vierten Tag', bsp:'Die Arbeitsunfähigkeitsbescheinigung reiche ich morgen ein.'},
      {de:'die Arbeitszeit erfassen', hi:'kommen und gehen dokumentieren', bsp:'Bitte denken Sie daran, die Arbeitszeit täglich zu erfassen.'},
      {de:'in Gleitzeit arbeiten', hi:'flexibler Beginn, feste Kernzeit', bsp:'Wir arbeiten in Gleitzeit, die Kernzeit ist von 9 bis 15 Uhr.'},
      {de:'Überstunden abbauen', hi:'angesammelte Stunden durch Freizeit ausgleichen', bsp:'Am Freitag baue ich Überstunden ab.'},
      {de:'eine Beschwerde aufnehmen', hi:'zuhören, notieren, weiterleiten — nicht rechtfertigen', bsp:'Ich nehme Ihre Beschwerde gern auf und leite sie weiter.'},
      {de:'der Schweigepflicht unterliegen', hi:'du darfst bestimmte Auskünfte nicht geben', bsp:'Diese Angaben unterliegen der Schweigepflicht.'},
      {de:'aus Datenschutzgründen keine Auskunft geben', hi:'die freundliche Grenze am Telefon', bsp:'Aus Datenschutzgründen darf ich Ihnen dazu leider keine Auskunft geben.'}
    ],
    dialoge:[
      {
        id:'buero-telefonat',
        titel:'Anruf annehmen, weiterleiten, notieren',
        lvl:'B1',
        dauer:'4 Min',
        ort:'Es ist 10 Uhr am Empfang. Herr Petrow ruft an und möchte Frau Ackermann sprechen. Frau Ackermann sitzt bis 12 Uhr in einer Besprechung.',
        schritte:[
          {amanda:'Guten Tag, Petrow hier. Ich hätte gern Frau Ackermann gesprochen.', hinweis:'Du hast dich schon gemeldet. Sag freundlich, dass sie nicht erreichbar ist.', beispiel:'Guten Tag, Herr Petrow. Frau Ackermann ist bis 12 Uhr in einer Besprechung.', redemittel:['Frau … ist gerade in einem Gespräch.','Sie ist bis … Uhr in einer Besprechung.','Sie ist heute leider nicht im Haus.']},
          {amanda:'Ach schade. Es ist eigentlich dringend.', hinweis:'Biete etwas an: Nachricht aufnehmen oder Rückruf.', beispiel:'Soll ich ihr etwas ausrichten? Oder ich sage Ihnen einen Rückruf am Nachmittag zu.', redemittel:['Soll ich ihr etwas ausrichten?','Kann ich Ihnen weiterhelfen?','Ich sage Ihnen gern einen Rückruf zu.']},
          {amanda:'Ein Rückruf wäre gut. Es geht um die Rechnung vom März, die stimmt nicht.', hinweis:'Frag nach, damit die Notiz brauchbar wird — Nummer und Betrag.', beispiel:'Gern. Damit Frau Ackermann sich vorbereiten kann: Haben Sie die Rechnungsnummer zur Hand?', redemittel:['Damit Frau … sich vorbereiten kann: …','Haben Sie die … zur Hand?','Können Sie mir das kurz genauer sagen?']},
          {amanda:'Ja, Nummer 20250314, über 1.240 Euro. Meine Nummer ist 0231 445566.', hinweis:'Wiederhole Nummer und Rufnummer zur Kontrolle.', beispiel:'Ich wiederhole zur Sicherheit: Rechnung 20250314 über 1.240 Euro, Rückruf an 0231 445566.', redemittel:['Ich wiederhole zur Sicherheit: …','Habe ich das richtig notiert: …?','Also …, ist das korrekt?']},
          {amanda:'Genau so. Danke!', hinweis:'Sag verbindlich zu, bis wann zurückgerufen wird.', beispiel:'Sehr gern. Ich schreibe eine Gesprächsnotiz, Frau Ackermann meldet sich bis 15 Uhr bei Ihnen. Auf Wiederhören, Herr Petrow.', redemittel:['Ich schreibe eine Gesprächsnotiz.','Frau … meldet sich bis … Uhr bei Ihnen.','Auf Wiederhören, Herr …']}
        ]
      },
      {
        id:'buero-termin',
        titel:'Den Termin verschieben',
        lvl:'B1',
        dauer:'4 Min',
        ort:'Morgen um 11 Uhr ist ein Termin mit Frau Sanchez von der Steuerberatung. Deine Chefin muss kurzfristig zu einem anderen Termin. Du rufst an.',
        schritte:[
          {amanda:'Sanchez, guten Tag.', hinweis:'Melde dich, nenne den Anlass sofort.', beispiel:'Guten Tag, Frau Sanchez, Kowalczyk von Meier und Partner. Es geht um unseren Termin morgen um 11 Uhr.', redemittel:['… von … Es geht um …','Ich rufe an wegen …','Ich melde mich zu unserem Termin am …']},
          {amanda:'Ja, was ist damit?', hinweis:'Sag die Absage klar und begründe kurz — nicht ausschweifend.', beispiel:'Leider müssen wir den Termin kurzfristig verschieben. Frau Meier hat einen Gerichtstermin bekommen.', redemittel:['Leider müssen wir … verschieben.','Es tut mir leid, wir müssen …','Der Grund ist …']},
          {amanda:'Das ist ungünstig, ich hatte schon alles vorbereitet.', hinweis:'Nimm den Ärger ernst und biete sofort zwei Alternativen an.', beispiel:'Das verstehe ich, und es tut mir aufrichtig leid. Ginge es bei Ihnen am Donnerstag um 14 Uhr oder am Freitag um 10 Uhr?', redemittel:['Das verstehe ich, und es tut mir leid.','Ginge es bei Ihnen am … oder am …?','Ich kann Ihnen zwei Termine anbieten: …']},
          {amanda:'Donnerstag 14 Uhr geht. Aber dann bitte pünktlich.', hinweis:'Bestätige den neuen Termin mit Datum, Uhrzeit und Ort.', beispiel:'Vielen Dank. Dann Donnerstag, der 8. Mai, um 14 Uhr bei uns im Haus, Raum 2.', redemittel:['Dann halten wir fest: …','… um … Uhr bei uns im Haus.','Ich trage das so ein.']},
          {amanda:'Gut. Schicken Sie mir bitte noch eine Bestätigung.', hinweis:'Sag zu, was du schriftlich schickst — und bis wann.', beispiel:'Selbstverständlich. Sie erhalten die Bestätigung heute per E-Mail, mit den Unterlagen im Anhang. Vielen Dank für Ihr Verständnis.', redemittel:['Sie erhalten die Bestätigung heute per E-Mail.','Die Unterlagen schicke ich im Anhang mit.','Vielen Dank für Ihr Verständnis.']}
        ]
      },
      {
        id:'buero-beschwerde',
        titel:'Die Beschwerde am Telefon annehmen',
        lvl:'B2',
        dauer:'5 Min',
        ort:'Herr Wolff ruft aufgebracht an. Er wartet seit vier Wochen auf einen Bescheid und hat schon zweimal angerufen. Du bist neu im Vorgang.',
        schritte:[
          {amanda:'Das ist doch eine Frechheit! Vier Wochen und niemand meldet sich!', hinweis:'Erst die Verärgerung anerkennen, nicht rechtfertigen.', beispiel:'Ich kann verstehen, dass Sie verärgert sind, Herr Wolff. Vier Wochen sind lang. Ich schaue mir das jetzt sofort an.', redemittel:['Ich kann verstehen, dass Sie verärgert sind.','Das tut mir leid.','Ich schaue mir das jetzt sofort an.']},
          {amanda:'Ich habe schon zweimal angerufen, immer heißt es, das dauert noch.', hinweis:'Frag nach dem Aktenzeichen, damit du wirklich helfen kannst.', beispiel:'Damit ich den richtigen Vorgang finde: Haben Sie das Aktenzeichen aus unserem Schreiben zur Hand?', redemittel:['Damit ich den richtigen Vorgang finde: …','Haben Sie das Aktenzeichen zur Hand?','Nennen Sie mir bitte Ihr Geburtsdatum zur Prüfung.']},
          {amanda:'Ja, hier: B dreiundzwanzig Strich vierhundertzwölf.', hinweis:'Sag, was du siehst — in einfachen Worten, nicht im Behördenton.', beispiel:'Danke. Ich sehe: Der Vorgang liegt seit dem 2. April zur Prüfung bei der Fachabteilung. In einfachen Worten heißt das, es fehlt noch eine Rückmeldung von dort.', redemittel:['Ich sehe: …','In einfachen Worten heißt das: …','Der Stand ist folgender: …']},
          {amanda:'Und wie lange soll das noch dauern?', hinweis:'Sag nichts zu, was du nicht halten kannst — aber nenne einen festen Schritt.', beispiel:'Ein genaues Datum kann ich Ihnen nicht nennen. Ich fasse den Vorgang heute schriftlich nach und lege ihn auf Wiedervorlage zum Freitag.', redemittel:['Ein genaues Datum kann ich Ihnen nicht nennen.','Ich fasse den Vorgang heute nach.','Ich lege ihn auf Wiedervorlage zum …']},
          {amanda:'Und dann? Ruft dann wieder keiner an?', hinweis:'Mach eine konkrete, haltbare Zusage.', beispiel:'Doch. Ich rufe Sie am Montag an, auch wenn es noch keine Entscheidung gibt. Und ich lege einen Aktenvermerk an, damit jeder den Stand sieht.', redemittel:['Ich rufe Sie am … an, auch wenn …','Ich lege einen Aktenvermerk an.','Sie hören in jedem Fall von mir.']}
        ]
      }
    ],
    saetze:[
      {de:'Meier und Partner, Kowalczyk, guten Tag. Was kann ich für Sie tun?', wann:'die Meldung am Telefon: Firma, Name, Gruß, Angebot'},
      {de:'Einen Moment bitte, ich verbinde Sie mit Frau Ackermann.', wann:'bei der Weiterleitung — immer den Namen nennen'},
      {de:'Frau Ackermann ist gerade in einem Gespräch. Soll ich etwas ausrichten?', wann:'wenn die gesuchte Person nicht erreichbar ist'},
      {de:'Ich wiederhole zur Sicherheit: …', wann:'bei Nummern, Namen und Terminen — immer'},
      {de:'Unter welcher Nummer sind Sie zu erreichen?', wann:'bevor du einen Rückruf zusagst'},
      {de:'Ginge es bei Ihnen am Donnerstag um 14 Uhr oder am Freitag um 10 Uhr?', wann:'bei jeder Terminfrage: zwei Vorschläge statt einer'},
      {de:'Leider müssen wir den Termin kurzfristig verschieben.', wann:'bei der Absage — mit kurzer Begründung und Ersatztermin'},
      {de:'Ich kann verstehen, dass Sie verärgert sind.', wann:'der erste Satz bei jeder Beschwerde, noch vor der Sachfrage'},
      {de:'Ein genaues Datum kann ich Ihnen nicht nennen. Aber ich melde mich am Montag.', wann:'wenn du nichts versprechen kannst, aber trotzdem verbindlich bleiben willst'},
      {de:'Aus Datenschutzgründen darf ich Ihnen dazu leider keine Auskunft geben.', wann:'wenn jemand am Telefon nach Daten Dritter fragt'},
      {de:'Ich lege den Vorgang auf Wiedervorlage zum 12. Juni.', wann:'damit nichts liegen bleibt — der wichtigste Satz der Sachbearbeitung'},
      {de:'Die Frist läuft am 30. April ab.', wann:'wenn du auf einen Termin hinweist, der nicht verhandelbar ist'},
      {de:'In einfachen Worten heißt das: Sie müssen nichts weiter tun.', wann:'wenn du Behördendeutsch für einen Kunden übersetzt'},
      {de:'Wie telefonisch besprochen sende ich Ihnen die Unterlagen.', wann:'der Einstieg in die E-Mail nach einem Gespräch'},
      {de:'Ich melde mich für heute krank und bringe die Bescheinigung nach.', wann:'am Morgen, telefonisch, vor Arbeitsbeginn'}
    ],
    ueb:[
      {typ:'wahl', f:'Du schreibst an eine Kundin, die du nicht kennst. Welche Anrede nimmst du?', o:['Hallo zusammen,','Sehr geehrte Frau Ackermann,','Liebe Frau Ackermann,'], l:1, e:'Nach außen und beim ersten Kontakt immer „Sehr geehrte Frau …". Nach dem Komma geht es klein weiter. „Hallo zusammen" ist intern, „Liebe" erst, wenn man sich kennt.'},
      {typ:'wahl', f:'Wohin gehört das Anliegen in einer Geschäfts-E-Mail?', o:['In den ersten Satz nach der Anrede','In den letzten Absatz','In den Anhang'], l:0, e:'Deutsche Geschäftspost kommt schnell zur Sache: Betreff, Anrede, Anliegen. Wer erst drei Sätze Höflichkeit schreibt, wird überflogen.'},
      {typ:'wahl', f:'Am Telefon fragt jemand nach dem Gehalt einer Kollegin. Was sagst du?', o:['Das sage ich Ihnen gern.','Aus Datenschutzgründen darf ich Ihnen dazu keine Auskunft geben.','Fragen Sie sie doch selbst.'], l:1, e:'Freundlich, klar, ohne Diskussion. Der Datenschutz ist keine Ausrede, sondern deine Pflicht — und dieser Satz beendet die Frage höflich.'},
      {typ:'luecke', f:'Einen Moment bitte, ich ___ Sie mit Frau Ackermann.', l:'verbinde', e:'jemanden verbinden mit + Dativ. Nenne dabei immer den Namen, dann weiß der Anrufer, wohin er kommt.'},
      {typ:'luecke', f:'Ich lege den Vorgang auf ___ zum 12. Juni.', l:'Wiedervorlage', e:'Die Wiedervorlage sorgt dafür, dass ein Vorgang zum richtigen Datum wieder auf dem Tisch liegt. Ohne sie geht Arbeit verloren.'},
      {typ:'luecke', f:'Die Bescheinigung ist bis zum 15. des Monats ___.', l:'vorzulegen', e:'sein + zu + Infinitiv heißt: muss gemacht werden. Bei trennbaren Verben steht das zu in der Mitte: vor-zu-legen.'},
      {typ:'luecke', f:'___ Bezugnahme auf Ihr Schreiben vom 3. Mai teilen wir Ihnen mit …', l:'Unter', e:'Unter Bezugnahme auf … ist der förmliche Einstieg im Behördenverkehr. Im Alltag sagst du dafür: Wie besprochen …'},
      {typ:'luecke', f:'Ich kann ___, dass Sie verärgert sind.', l:'verstehen', e:'Der erste Satz bei jeder Beschwerde. Erst das Gefühl anerkennen, dann zur Sache — sonst hört dir niemand zu.'},
      {typ:'bausteine', l:'Frau Ackermann ist bis 12 Uhr in einer Besprechung.', teile:['Frau','Ackermann','ist','bis','12','Uhr','in','einer','Besprechung'], e:'in einer Besprechung sein — höflicher als „hat keine Zeit". Die Zeitangabe steht vor der Ortsangabe.'},
      {typ:'bausteine', l:'Ginge es bei Ihnen am Donnerstag um 14 Uhr?', teile:['Ginge','es','bei','Ihnen','am','Donnerstag','um','14','Uhr'], e:'Ginge ist der Konjunktiv von gehen und klingt vorsichtig statt fordernd. In der Frage steht das Verb ganz vorn.'},
      {typ:'bausteine', l:'Die Bearbeitung des Antrags nimmt etwa vier Wochen in Anspruch.', teile:['Die','Bearbeitung','des','Antrags','nimmt','etwa','vier','Wochen','in','Anspruch'], e:'Typisches Behördendeutsch: aus „den Antrag bearbeiten" wird „die Bearbeitung des Antrags" mit Genitiv. Erkennen musst du es, sagen darfst du es einfacher.'},
      {typ:'paare', p:[['die Gesprächsnotiz','wer, wann, worum, was ist zu tun'],['der Aktenvermerk','kurze Notiz zu einem Vorgang in der Akte'],['die Wiedervorlage','der Vorgang kommt zum Termin zurück'],['das Protokoll','die Ergebnisse einer Besprechung'],['die Frist','der Tag, an dem es zu spät wird']], e:'Fünf Werkzeuge der Verwaltung. Wer sie sicher unterscheidet, wirkt sofort eingearbeitet.'},
      {typ:'paare', p:[['ist vorzulegen','muss vorgelegt werden'],['nach Aktenlage','nach dem, was in der Akte steht'],['fristgerecht eingehen','rechtzeitig ankommen'],['unter Bezugnahme auf','mit Bezug auf']], e:'Behördendeutsch links, Alltagsdeutsch rechts. Genau dieser Wechsel ist deine Aufgabe am Schalter und am Telefon.'},
      {typ:'hoeren', text:'Guten Tag, Petrow hier. Ich wollte Frau Ackermann sprechen wegen der Rechnung 20250314 über 1.240 Euro. Ich bin bis 16 Uhr unter 0231 445566 erreichbar.', f:'Was muss in die Gesprächsnotiz?', o:['Nur der Name des Anrufers','Name, Anliegen, Rechnungsnummer und Rückrufnummer','Nur die Uhrzeit des Anrufs'], l:1, e:'Eine Notiz ist erst brauchbar, wenn die Kollegin ohne Rückfrage zurückrufen kann. Vier Angaben, vier Zeilen.'},
      {typ:'hoeren', text:'Sehr geehrte Frau Sanchez, unter Bezugnahme auf Ihr Schreiben vom 3. Mai teilen wir Ihnen mit, dass die Unterlagen vollständig einzureichen sind. Die Frist läuft am 30. Mai ab.', f:'Was ist zu tun?', o:['Die Unterlagen vollständig einreichen, bis 30. Mai','Auf ein weiteres Schreiben warten','Einen neuen Antrag stellen'], l:0, e:'„sind einzureichen" heißt: müssen eingereicht werden. Verbindliche Behördenpost erkennst du an dieser Passivform plus Frist.'},
      {typ:'sprechen', f:'Melde dich am Telefon: Meier und Partner, Kowalczyk, guten Tag. Was kann ich für Sie tun?', l:'Meier und Partner', e:'Sprich den Firmennamen langsam und mach danach eine kleine Pause. Das Ende geht freundlich nach oben, nicht heruntergeleiert.'},
      {typ:'sprechen', f:'Sag freundlich Nein: Aus Datenschutzgründen darf ich Ihnen dazu leider keine Auskunft geben.', l:'Aus Datenschutzgründen', e:'Ruhige, gleichbleibende Stimme, kein Zögern. Wer hier unsicher klingt, wird weiter bedrängt.'},
      {typ:'ordnen', l:['Ich melde mich mit Firma und Namen.','Ich frage nach dem Anliegen.','Ich sage, dass die Kollegin nicht erreichbar ist.','Ich nehme Nachricht und Rückrufnummer auf.','Ich wiederhole alles zur Kontrolle.','Ich schreibe die Gesprächsnotiz.'], f:'Bring das Telefonat mit Weiterleitung in die richtige Reihenfolge.', e:'Der letzte Schritt ist der, den die meisten vergessen. Ein Anruf ohne Notiz ist ein Anruf, den es nie gegeben hat.'},
      {typ:'artikel', w:'Aktenvermerk', l:'der', e:'der Vermerk, also der Aktenvermerk. Plural: die Aktenvermerke.'},
      {typ:'artikel', w:'Wiedervorlage', l:'die', e:'die Vorlage, also die Wiedervorlage. Wörter auf -e sind sehr oft feminin.'},
      {typ:'artikel', w:'Protokoll', l:'das', e:'das Protokoll, Plural die Protokolle. Fremdwörter auf -oll und -ment sind meistens sächlich.'}
    ],
    schreiben:{
      auf:'Beantworte die Beschwerde von Herrn Wolff schriftlich: Er wartet seit vier Wochen auf einen Bescheid und hat zweimal vergeblich angerufen.',
      punkte:['Bezug auf sein Schreiben und sein Anliegen','Verständnis für die Wartezeit','Der Sachstand: wo liegt der Vorgang','Was du konkret tust und bis wann er von dir hört'],
      hilfe:'Nimm die förmliche Form: Betreff mit Aktenzeichen, dann „Sehr geehrter Herr Wolff," und klein weiter. Fang so an: „Vielen Dank für Ihre Nachricht vom …" · „Ich kann gut verstehen, dass …" · „Zum Sachstand: …" · „Ich werde …". Keine Schuldzuweisung an Kolleginnen, keine Ausreden, aber auch kein Schuldbekenntnis, das du nicht meinst. Nenne mindestens ein festes Datum, an dem er von dir hört. Am Ende „Mit freundlichen Grüßen" ohne Komma. Sechs bis zehn Sätze.'
    }
  },

  /* ===================== 17 · BUCHHALTUNG UND STEUERN ===================== */
  {
    id:'buchhaltung',
    t:'Buchhaltung und Steuern',
    unter:'Finanzbuchhaltung, Lohnbuchhaltung, Steuerfachangestellte, Controlling',
    lvl:'B2–C1',
    pruef:'Keine Sprachprüfung. Einschlägig: Deutsch-Test für den Beruf B2. Für Steuerfachangestellte ist die Kammerprüfung deutschsprachig.',
    warum:'Für kaufmännische Berufe verlangt die Bundesagentur für Arbeit B2 bis C1 — begründet mit komplexer Sprachanwendung und intensivem Umgang mit Schriftsprache. Das ist der höchste Sprachanspruch außerhalb der akademischen Heilberufe. Wer die Zahlen kann, scheitert hier nicht an der Buchführung, sondern an der Sprache: an Bescheiden, an Mahnungen, am Gespräch mit der Mandantin. Dazu kommt ein Register, das in keinem Alltagskurs vorkommt — Behördendeutsch mit Nominalisierung und Passiv.',
    handlungen:[
      {t:'Belege prüfen und kontieren', e:'Rechnung ansehen, das richtige Sachkonto bestimmen und den Buchungssatz in Soll und Haben aufschreiben.', lvl:'B1'},
      {t:'Eine Rechnung auf Vollständigkeit prüfen', e:'Pflichtangaben durchgehen — Datum, Nummer, Steuersatz, Umsatzsteuer-Identifikationsnummer — und beim Aussteller nachfordern, was fehlt.', lvl:'B2'},
      {t:'Die Umsatzsteuer-Voranmeldung erklären', e:'Der Mandantin in einfachen Worten sagen, was angemeldet wurde, was Vorsteuer ist und wann gezahlt werden muss.', lvl:'B2'},
      {t:'Offene Posten klären und mahnen', e:'Zahlungserinnerung und Mahnung formulieren und beim Kunden anrufen — freundlich, aber bestimmt.', lvl:'B2'},
      {t:'Am Telefon über Geld sprechen', e:'Eine offene Forderung ansprechen, eine Ratenzahlung aushandeln, eine Zusage festhalten, ohne den Kunden zu verlieren.', lvl:'B2'},
      {t:'Die Lohnabrechnung erklären', e:'Einer Mitarbeiterin zeigen, warum aus dem Brutto ein bestimmtes Netto wird — Steuerklasse, Beiträge, Freibeträge, ohne Fachchinesisch.', lvl:'B2'},
      {t:'Einen Bescheid vom Finanzamt lesen', e:'Herausfinden, was festgesetzt wurde, welche Frist läuft und ob ein Einspruch nötig ist.', lvl:'C1'},
      {t:'Mit dem Finanzamt schriftlich verkehren', e:'Fristverlängerung beantragen, Einspruch einlegen, Unterlagen nachreichen — im richtigen Register mit Aktenzeichen und Steuernummer.', lvl:'C1'},
      {t:'Das Mandantengespräch führen', e:'Fehlende Belege anmahnen, Fristen ansagen, Nachfragen zu Privatanteilen stellen — höflich und trotzdem verbindlich.', lvl:'B2'},
      {t:'Die Betriebsprüfung begleiten', e:'Unterlagen bereitstellen, Fragen der Prüferin beantworten und nicht mehr sagen als nötig.', lvl:'C1'}
    ],
    chunks:[
      {de:'einen Beleg prüfen und kontieren', hi:'ansehen, ob alles stimmt, und das richtige Konto zuordnen', bsp:'Die Belege vom März habe ich geprüft und kontiert.'},
      {de:'einen Buchungssatz bilden', hi:'die Buchung in der Form Soll an Haben aufschreiben', bsp:'Für die Miete bilde ich den Buchungssatz Raumkosten an Bank.'},
      {de:'Soll an Haben buchen', hi:'die feste Reihenfolge — erst Soll, dann Haben', bsp:'Das wird gebucht: Wareneingang an Verbindlichkeiten.'},
      {de:'auf ein Sachkonto buchen', hi:'das Konto für die Art des Geschäftsvorfalls', bsp:'Das gehört auf das Sachkonto Bürobedarf.'},
      {de:'ein Debitorenkonto anlegen', hi:'Debitor ist der Kunde, der uns Geld schuldet', bsp:'Für die neue Kundin lege ich ein Debitorenkonto an.'},
      {de:'die Kreditorenrechnung erfassen', hi:'Kreditor ist der Lieferant, dem wir Geld schulden', bsp:'Die Kreditorenrechnungen erfasse ich immer freitags.'},
      {de:'eine Eingangsrechnung erfassen', hi:'die Rechnung, die zu uns kommt', bsp:'Die Eingangsrechnung ist erfasst, aber noch nicht bezahlt.'},
      {de:'eine Ausgangsrechnung stellen', hi:'die Rechnung, die wir schreiben', bsp:'Die Ausgangsrechnung geht heute noch raus.'},
      {de:'eine Gutschrift erstellen', hi:'wenn zu viel berechnet wurde oder Ware zurückgeht', bsp:'Ich erstelle Ihnen eine Gutschrift über den Differenzbetrag.'},
      {de:'eine Buchung stornieren', hi:'eine falsche Buchung wieder aufheben', bsp:'Die Buchung vom Dienstag habe ich storniert und neu erfasst.'},
      {de:'die Umsatzsteuer-Voranmeldung abgeben', hi:'monatlich oder vierteljährlich elektronisch ans Finanzamt', bsp:'Die Umsatzsteuer-Voranmeldung für Mai ist abgegeben.'},
      {de:'die Vorsteuer ziehen', hi:'die gezahlte Umsatzsteuer vom Finanzamt zurückholen', bsp:'Ohne ordentliche Rechnung können wir die Vorsteuer nicht ziehen.'},
      {de:'die Umsatzsteuer-Identifikationsnummer prüfen', hi:'kurz USt-IdNr., wichtig bei Kunden im Ausland', bsp:'Bitte prüfen Sie vorher die Umsatzsteuer-Identifikationsnummer des Kunden.'},
      {de:'das Reverse-Charge-Verfahren anwenden', hi:'die Steuerschuld geht auf den Leistungsempfänger über', bsp:'Bei dieser Rechnung wenden wir das Reverse-Charge-Verfahren an.'},
      {de:'eine Zahlungserinnerung schicken', hi:'die freundliche Stufe vor der ersten Mahnung', bsp:'Wir haben Ihnen am Montag eine Zahlungserinnerung geschickt.'},
      {de:'die zweite Mahnung rausschicken', hi:'nach der ersten Mahnung, jetzt mit Gebühr', bsp:'Wenn bis Freitag nichts eingeht, geht die zweite Mahnung raus.'},
      {de:'sich im Verzug befinden', hi:'die Zahlungsfrist ist abgelaufen — ab da laufen Mahngebühren und Verzugszinsen', bsp:'Sie befinden sich seit dem 15. April im Verzug, dazu kommen Mahngebühren und Verzugszinsen.'},
      {de:'die offenen Posten klären', hi:'die Liste der unbezahlten Rechnungen durchgehen', bsp:'Ich gehe heute mit dem Vertrieb die offenen Posten durch.'},
      {de:'eine Ratenzahlung vereinbaren', hi:'der übliche Kompromiss am Mahntelefon, wenn kein Zahlungseingang zu sehen ist', bsp:'Wir können gern eine Ratenzahlung in drei Schritten vereinbaren.'},
      {de:'die Lohnabrechnung erstellen', hi:'monatlich, mit Brutto, Abzügen und Netto', bsp:'Die Lohnabrechnungen für Juni sind fertig.'},
      {de:'vom Brutto zum Netto kommen', hi:'so erklärst du die Abzüge Schritt für Schritt', bsp:'Vom Brutto zum Netto gehen Lohnsteuer und Sozialversicherung ab.'},
      {de:'die Lohnsteuerklasse wechseln', hi:'zum Beispiel nach Heirat oder Trennung', bsp:'Sie haben zum Januar die Lohnsteuerklasse gewechselt, deshalb ist das Netto höher.'},
      {de:'die Sozialversicherungsbeiträge abführen', hi:'Kranken-, Pflege-, Renten- und Arbeitslosenversicherung', bsp:'Die Sozialversicherungsbeiträge führen wir am drittletzten Bankarbeitstag ab.'},
      {de:'die Beitragsbemessungsgrenze überschreiten', hi:'ab dieser Grenze steigen die Beiträge nicht weiter', bsp:'Ihr Gehalt liegt über der Beitragsbemessungsgrenze, deshalb bleibt der Beitrag gleich.'},
      {de:'den Jahresabschluss aufstellen', hi:'Bilanz und Gewinn- und Verlustrechnung zum Jahresende', bsp:'Den Jahresabschluss stellen wir bis Ende Mai auf.'},
      {de:'eine Abschreibung buchen', hi:'den Wertverlust über die Nutzungsdauer verteilen', bsp:'Für den Firmenwagen buchen wir die Abschreibung über sechs Jahre.'},
      {de:'eine Rückstellung bilden', hi:'Geld zurücklegen für etwas, das sicher kommt, aber noch nicht feststeht', bsp:'Für die Steuerberatungskosten bilden wir eine Rückstellung.'},
      {de:'die Inventur durchführen', hi:'zum Stichtag alle Bestände zählen und bewerten', bsp:'Die Inventur führen wir am 31. Dezember durch.'},
      {de:'einen Bescheid vom Finanzamt bekommen', hi:'die amtliche Entscheidung, immer mit Datum und Frist', bsp:'Heute ist der Bescheid vom Finanzamt gekommen.'},
      {de:'die Frist läuft ab am …', hi:'der wichtigste Satz im ganzen Beruf', bsp:'Die Frist läuft am 30. Juni ab, danach geht nichts mehr.'},
      {de:'Einspruch einlegen', hi:'innerhalb eines Monats gegen den Bescheid', bsp:'Gegen den Bescheid legen wir fristwahrend Einspruch ein.'},
      {de:'Fristverlängerung beantragen', hi:'schriftlich, mit kurzer Begründung', bsp:'Wir beantragen Fristverlängerung bis zum 31. August.'},
      {de:'die Betriebsprüfung steht an', hi:'das Finanzamt kündigt sich schriftlich an', bsp:'Im Herbst steht bei uns eine Betriebsprüfung an.'},
      {de:'fehlende Belege anfordern', hi:'der Dauerbrenner im Mandantengespräch', bsp:'Ich fordere die fehlenden Belege für Februar noch einmal an.'},
      {de:'die Unterlagen sind bis zum … einzureichen', hi:'Behördendeutsch: sein plus zu plus Infinitiv statt müssen', bsp:'Die Unterlagen sind bis zum 15. des Folgemonats einzureichen.'}
    ],
    dialoge:[
      {
        id:'buchhaltung-mahntelefonat',
        titel:'Das Mahntelefonat',
        lvl:'B2',
        dauer:'5 Min',
        ort:'Es ist Dienstagvormittag. Die Rechnung 2024-0871 über 4.280 Euro ist seit sechs Wochen offen, zwei schriftliche Mahnungen sind raus. Du rufst Herrn Weber in der Buchhaltung des Kunden an.',
        schritte:[
          {amanda:'Weber, guten Tag. Was kann ich für Sie tun?', hinweis:'Stell dich vor und sag sofort und ruhig, worum es geht — mit Nummer und Betrag.', beispiel:'Guten Tag, Herr Weber, mein Name ist Nour Haddad von der Firma Lenz. Ich rufe wegen unserer Rechnung 2024-0871 über 4.280 Euro an, die seit dem 15. April offen ist.', redemittel:['Mein Name ist … von der Firma …','Ich rufe wegen unserer Rechnung … an.','Die Rechnung ist seit dem … offen.']},
          {amanda:'Offen? Das kann eigentlich nicht sein. Die müsste längst raus sein.', hinweis:'Widersprich nicht hart. Sag sachlich, was du siehst, und lass ihm die Tür offen.', beispiel:'Das kann natürlich sein, dass sich etwas überschnitten hat. Bei uns ist bis heute kein Zahlungseingang zu sehen. Können Sie mir sagen, wann und über welches Konto gezahlt wurde?', redemittel:['Das kann natürlich sein, dass …','Bei uns ist bis heute kein Zahlungseingang zu sehen.','Können Sie mir sagen, wann gezahlt wurde?']},
          {amanda:'Moment … nein, stimmt. Die liegt hier noch zur Freigabe. Der Chef ist im Urlaub.', hinweis:'Zeig Verständnis, aber halte am Termin fest. Freundlich, aber bestimmt.', beispiel:'Danke, dass Sie kurz nachgeschaut haben. Nur: Die Zahlungsfrist ist seit sechs Wochen abgelaufen, und wir sind bereits bei der zweiten Mahnung. Bis wann können Sie die Freigabe organisieren?', redemittel:['Danke, dass Sie nachgeschaut haben.','Nur: Die Zahlungsfrist ist seit … abgelaufen.','Bis wann können Sie … organisieren?']},
          {amanda:'Ehrlich gesagt ist es bei uns gerade eng. Ginge auch eine Teilzahlung?', hinweis:'Biete eine Lösung an, aber mach sie verbindlich — Betrag, Termin, Schriftform.', beispiel:'Das lässt sich machen. Ich schlage zwei Raten vor: 2.140 Euro bis zum 30. Juni und den Rest bis zum 31. Juli. Ich bestätige Ihnen das gleich schriftlich per E-Mail.', redemittel:['Das lässt sich machen.','Ich schlage zwei Raten vor: … bis zum … und …','Ich bestätige Ihnen das schriftlich.']},
          {amanda:'Einverstanden. Und die Mahngebühren?', hinweis:'Sag klar, was bleibt und was du nachlässt — nichts versprechen, was du nicht darfst.', beispiel:'Die Mahngebühr von fünf Euro lasse ich stehen, auf die Verzugszinsen verzichten wir, wenn die erste Rate pünktlich eingeht. Vielen Dank für die Klärung, Herr Weber.', redemittel:['Die Mahngebühr lasse ich stehen.','Auf die Verzugszinsen verzichten wir, wenn …','Vielen Dank für die Klärung.']}
        ]
      },
      {
        id:'buchhaltung-belege',
        titel:'Fehlende Belege und eine Frist vom Finanzamt',
        lvl:'B2',
        dauer:'5 Min',
        ort:'Deine Mandantin, Frau Özdemir, führt ein kleines Café. Für Februar und März fehlen die Bewirtungsbelege und die Tankquittungen. Das Finanzamt hat die Steuererklärung angefordert, die Frist läuft am 30. Juni ab.',
        schritte:[
          {amanda:'Hallo, Sie wollten mich sprechen? Ist etwas nicht in Ordnung?', hinweis:'Fang freundlich an, aber nenne sofort den Anlass und die Frist.', beispiel:'Guten Tag, Frau Özdemir. Es ist nichts Schlimmes. Das Finanzamt hat die Steuererklärung angefordert, die Frist läuft am 30. Juni ab. Dafür fehlen mir noch Unterlagen.', redemittel:['Es ist nichts Schlimmes, aber …','Das Finanzamt hat … angefordert.','Die Frist läuft am … ab.']},
          {amanda:'Welche denn? Ich habe Ihnen doch alles gegeben.', hinweis:'Werde konkret: Zeitraum, Art der Belege, Anzahl.', beispiel:'Für Februar und März fehlen die Bewirtungsbelege, das sind nach meiner Liste elf Stück, und die Tankquittungen für den Lieferwagen.', redemittel:['Für … fehlen mir …','Nach meiner Liste sind das … Stück.','Konkret geht es um …']},
          {amanda:'Die Tankquittungen? Ich zahle doch immer mit Karte, das steht auf dem Konto.', hinweis:'Erkläre, warum der Kontoauszug nicht reicht — kurz und ohne Fachchinesisch.', beispiel:'Der Kontoauszug zeigt nur den Betrag. Für die Vorsteuer brauche ich die Quittung, weil darauf die Umsatzsteuer ausgewiesen ist. Ohne sie können wir die Vorsteuer nicht ziehen.', redemittel:['Der Kontoauszug zeigt nur …','Für die Vorsteuer brauche ich …, weil …','Ohne Beleg können wir … nicht ziehen.']},
          {amanda:'Und wenn ich die nicht mehr finde? Das ist ja schon Monate her.', hinweis:'Bleib ruhig, biete einen Weg an und sag ehrlich, was es kostet.', beispiel:'Dann fordern Sie beim Tankstellenbetreiber einen Zweitbeleg an, das geht meistens online. Wenn wir nichts finden, buche ich es ohne Vorsteuerabzug — dann wird es für Sie etwas teurer.', redemittel:['Dann fordern Sie … einen Zweitbeleg an.','Wenn wir nichts finden, buche ich …','Das heißt für Sie konkret: …']},
          {amanda:'Gut. Bis wann brauchen Sie das alles?', hinweis:'Nenne einen Termin vor der Frist und sag, was du sonst tust.', beispiel:'Bis zum 10. Juni, dann habe ich noch Luft. Falls es knapp wird, beantrage ich beim Finanzamt Fristverlängerung — sagen Sie mir bitte rechtzeitig Bescheid.', redemittel:['Bis zum … , dann habe ich noch Luft.','Falls es knapp wird, beantrage ich …','Sagen Sie mir bitte rechtzeitig Bescheid.']}
        ]
      },
      {
        id:'buchhaltung-lohn',
        titel:'Die Lohnabrechnung erklären',
        lvl:'B2',
        dauer:'4 Min',
        ort:'Eine Kollegin aus der Produktion steht mit ihrer Abrechnung für Juli in der Tür. Ihr Bruttogehalt ist gestiegen, das Netto aber kaum. Sie versteht die Abzüge nicht.',
        schritte:[
          {amanda:'Ich habe eine Gehaltserhöhung bekommen, aber unten steht fast dasselbe wie letzten Monat. Stimmt das?', hinweis:'Nimm den Ärger ernst und kündige an, dass ihr die Abrechnung gemeinsam durchgeht.', beispiel:'Das kann ich gut verstehen, das sieht erst mal komisch aus. Setzen wir uns kurz zusammen, ich gehe die Abrechnung mit Ihnen Zeile für Zeile durch.', redemittel:['Das kann ich gut verstehen.','Das sieht auf den ersten Blick komisch aus.','Ich gehe die Abrechnung mit Ihnen durch.']},
          {amanda:'Also, hier oben steht 3.100 Euro. Und warum bekomme ich davon nur gut 2.000?', hinweis:'Erkläre den Weg vom Brutto zum Netto in zwei Schritten, ohne Fachwörter zu häufen.', beispiel:'Von den 3.100 Euro brutto gehen zwei Blöcke ab: erstens die Lohnsteuer und der Solidaritätszuschlag, zweitens die Sozialversicherung — Krankenkasse, Pflege, Rente und Arbeitslosenversicherung.', redemittel:['Vom Brutto gehen zwei Blöcke ab: …','Erstens … , zweitens …','Was übrig bleibt, ist Ihr Netto.']},
          {amanda:'Meine Nachbarin verdient genauso viel und hat mehr raus. Wie kann das sein?', hinweis:'Erkläre die Lohnsteuerklasse als Grund, ohne über die Nachbarin zu urteilen.', beispiel:'Das liegt meistens an der Lohnsteuerklasse. Sie haben Steuerklasse eins, Ihre Nachbarin vielleicht drei — da wird monatlich weniger Lohnsteuer einbehalten.', redemittel:['Das liegt meistens an der Lohnsteuerklasse.','Bei Steuerklasse … wird monatlich weniger einbehalten.','Am Jahresende gleicht sich das oft wieder aus.']},
          {amanda:'Kann ich das ändern?', hinweis:'Sag, was möglich ist und wo die Grenze deiner Zuständigkeit liegt.', beispiel:'Ändern können Sie die Steuerklasse beim Finanzamt, wenn Sie verheiratet sind. Ob sich das für Sie lohnt, kann ich nicht beurteilen — das rechnet Ihnen ein Steuerberater aus.', redemittel:['Ändern können Sie das beim Finanzamt.','Ob sich das lohnt, kann ich nicht beurteilen.','Da müssten Sie … fragen.']},
          {amanda:'Und diese Zeile hier, Beitragsbemessungsgrenze — was heißt das?', hinweis:'Erkläre einen Fachbegriff in einem Satz mit einem Bild.', beispiel:'Das ist eine Obergrenze. Ab einem bestimmten Gehalt steigen die Beiträge zur Kranken- und Rentenversicherung nicht weiter — bei Ihnen spielt das aber noch keine Rolle.', redemittel:['Das ist eine Obergrenze.','Ab einem bestimmten Gehalt steigen die Beiträge nicht weiter.','Bei Ihnen spielt das noch keine Rolle.']}
        ]
      }
    ],
    saetze:[
      {de:'Können Sie mir die Rechnungsnummer nennen?', wann:'am Telefon, bevor du irgendetwas suchst oder zusagst'},
      {de:'Bei uns ist bis heute kein Zahlungseingang zu sehen.', wann:'im Mahngespräch — sachlich, ohne Vorwurf'},
      {de:'Die Zahlungsfrist ist am … abgelaufen.', wann:'wenn du den Verzug feststellst'},
      {de:'Bis wann dürfen wir mit dem Eingang rechnen?', wann:'die entscheidende Frage — sie verlangt einen Termin, kein Vielleicht'},
      {de:'Ich bestätige Ihnen das gleich schriftlich per E-Mail.', wann:'nach jeder mündlichen Absprache über Geld'},
      {de:'Ohne ordentliche Rechnung können wir die Vorsteuer nicht ziehen.', wann:'wenn ein Beleg fehlt oder Pflichtangaben fehlen'},
      {de:'Mir fehlen für März noch folgende Belege: …', wann:'am Anfang jeder Belegnachforderung'},
      {de:'Die Frist läuft am … ab.', wann:'immer, wenn du einen Termin durchsetzen musst'},
      {de:'Gegen den Bescheid legen wir fristwahrend Einspruch ein.', wann:'wenn die Frist drängt und die Prüfung noch dauert'},
      {de:'Wir beantragen Fristverlängerung bis zum …', wann:'schriftlich ans Finanzamt, mit kurzer Begründung'},
      {de:'Das habe ich falsch gebucht, ich storniere und buche neu.', wann:'eigener Fehler — früh und klar melden, das ist hier Standard'},
      {de:'Darf ich kurz Rücksprache mit dem Steuerberater halten?', wann:'wenn die Frage über deine Zuständigkeit hinausgeht'},
      {de:'Das kann ich nicht beurteilen, da müssten Sie … fragen.', wann:'Grenze ziehen, ohne unhöflich zu werden'},
      {de:'Ich fasse zusammen: Sie zahlen … bis zum …', wann:'am Ende jedes Telefonats über Zahlungen'},
      {de:'Bitte reichen Sie die Unterlagen bis zum … ein.', wann:'schriftlich an Mandanten und Kollegen'}
    ],
    ueb:[
      {typ:'wahl', f:'Der Kunde sagt am Telefon: „Die Rechnung ist bestimmt schon bezahlt." Was antwortest du?', o:['„Das stimmt nicht, ich sehe hier gar nichts."','„Das kann sein, dass sich etwas überschnitten hat. Bei uns ist bis heute kein Zahlungseingang zu sehen."','„Dann kläre ich das später mit meinem Chef."'], l:1, e:'Freundlich, aber bestimmt heißt: du gibst dem Gegenüber einen Ausweg und bleibst trotzdem bei deinem Punkt. Ein direkter Widerspruch bringt dich in der Buchhaltung selten weiter.'},
      {typ:'wahl', f:'Was steht bei einer Eingangsrechnung im Soll?', o:['Der Aufwand oder die Ware','Die Verbindlichkeit gegenüber dem Lieferanten','Die Bank'], l:0, e:'Bei der Eingangsrechnung buchst du Aufwand an Verbindlichkeiten: das, was du bekommst, steht im Soll, die Schuld im Haben.'},
      {typ:'wahl', f:'Der Bescheid vom Finanzamt ist am 3. Mai zugegangen. Wie lange hast du für den Einspruch?', o:['Zwei Wochen','Einen Monat','Drei Monate'], l:1, e:'Die Einspruchsfrist beträgt einen Monat nach Bekanntgabe. Deshalb ist das Erste, was du bei jedem Bescheid tust: Datum suchen und Frist notieren.'},
      {typ:'luecke', f:'Die Unterlagen ___ bis zum 15. des Folgemonats einzureichen.', l:'sind', e:'sein plus zu plus Infinitiv ist die höfliche Behördenform von müssen: sind einzureichen. Merk dir das als Baustein, es kommt in jedem Schreiben vor.'},
      {typ:'luecke', f:'Ohne ordentliche Rechnung können wir die ___ nicht ziehen.', l:'Vorsteuer', e:'Vorsteuer ist die Umsatzsteuer, die du selbst gezahlt hast und vom Finanzamt zurückbekommst — aber nur mit korrektem Beleg.'},
      {typ:'luecke', f:'Sie ___ sich seit dem 15. April im Verzug.', l:'befinden', e:'sich im Verzug befinden ist die feste Wendung in Mahnungen. Umgangssprachlich sagt man: Sie haben noch nicht gezahlt.'},
      {typ:'luecke', f:'Wir beantragen ___ bis zum 31. August.', l:'Fristverlängerung', e:'Fristverlängerung beantragen — ohne Artikel, wie in Anträgen üblich. Immer mit Steuernummer und kurzer Begründung.'},
      {typ:'luecke', f:'Vom Brutto gehen Lohnsteuer und ___ ab.', l:'Sozialversicherung', e:'Die vier Zweige sind Kranken-, Pflege-, Renten- und Arbeitslosenversicherung. Zusammen nennt man sie Sozialversicherung.'},
      {typ:'bausteine', l:'Die Rechnung ist seit dem 15. April offen.', teile:['Die','Rechnung','ist','seit','dem','15.','April','offen'], e:'seit plus Dativ: seit dem 15. April. Diese Angabe gehört in den ersten Satz jedes Mahntelefonats.'},
      {typ:'bausteine', l:'Für März fehlen mir noch die Bewirtungsbelege.', teile:['Für','März','fehlen','mir','noch','die','Bewirtungsbelege'], e:'fehlen steht mit Dativ: mir fehlen die Belege. Nicht „ich fehle die Belege".'},
      {typ:'bausteine', l:'Ich bestätige Ihnen die Absprache schriftlich per E-Mail.', teile:['Ich','bestätige','Ihnen','die','Absprache','schriftlich','per','E-Mail'], e:'Erst die Person im Dativ, dann die Sache im Akkusativ: Ich bestätige Ihnen die Absprache.'},
      {typ:'paare', p:[['der Debitor','Kunde, der uns Geld schuldet'],['der Kreditor','Lieferant, dem wir Geld schulden'],['die Vorsteuer','gezahlte Umsatzsteuer, die zurückkommt'],['die Rückstellung','Geld für eine Verpflichtung, die noch nicht feststeht'],['die Abschreibung','Wertverlust über die Nutzungsdauer']], e:'Diese fünf Wörter fallen jeden Tag. Lerne sie mit Artikel — die Verwechslung von Debitor und Kreditor ist der Klassiker.'},
      {typ:'paare', p:[['die Zahlungserinnerung','freundlicher Hinweis, noch ohne Gebühr'],['die erste Mahnung','klarer Hinweis mit neuer Frist'],['die zweite Mahnung','mit Mahngebühr und Verzugszinsen'],['das Mahnverfahren','der Weg über das Gericht']], e:'Die Stufen des Mahnwesens sind auch Stufen der Sprache: erst bitten, dann auffordern, dann ankündigen.'},
      {typ:'hoeren', text:'Guten Tag, hier ist Weber von der Firma Sander. Es geht um Ihre Rechnung 2024-0871 über 4.280 Euro. Wir können erst zum 30. Juni zahlen, dafür dann den vollen Betrag. Rufen Sie mich bitte zurück.', f:'Was schlägt Herr Weber vor?', o:['Eine Teilzahlung in zwei Raten','Zahlung des vollen Betrags, aber später','Eine Gutschrift über den Betrag'], l:1, e:'Achte auf das kleine Wort dafür — es kündigt den Gegenwert an: später, aber vollständig. Notiere Betrag, Termin und Rechnungsnummer beim Hören mit.'},
      {typ:'hoeren', text:'Ihr Bruttogehalt beträgt 3.100 Euro. Davon gehen 412 Euro Lohnsteuer ab und 638 Euro Sozialversicherung. Ausgezahlt werden 2.050 Euro.', f:'Wie hoch ist das Netto?', o:['3.100 Euro','2.050 Euro','638 Euro'], l:1, e:'Netto ist immer der Betrag, der ausgezahlt wird. Das Signalwort ist ausgezahlt oder Auszahlungsbetrag.'},
      {typ:'sprechen', f:'Sag freundlich, aber bestimmt: Bei uns ist bis heute kein Zahlungseingang zu sehen.', l:'Bei uns ist bis heute kein Zahlungseingang zu sehen', e:'Sprich ruhig und ohne Betonung auf kein. Der Satz ist eine Feststellung, kein Vorwurf — das hört man an der Stimme.'},
      {typ:'sprechen', f:'Sag: Die Frist läuft am 30. Juni ab, deshalb brauche ich die Belege bis zum 10. Juni.', l:'Die Frist läuft am 30. Juni ab', e:'Mach eine kleine Pause vor deshalb. So hört die Mandantin zuerst den Grund und dann die Bitte — das wirkt sachlich statt drängend.'},
      {typ:'ordnen', l:['Die Rechnung wird gestellt und die Zahlungsfrist läuft.','Nach Ablauf der Frist geht die Zahlungserinnerung raus.','Es folgt die erste Mahnung mit neuer Frist.','Die zweite Mahnung kommt, jetzt mit Mahngebühr und Verzugszinsen.','Der Fall geht ins gerichtliche Mahnverfahren.'], f:'Bring das Mahnwesen in die richtige Reihenfolge.', e:'Jede Stufe hat ihre eigene Sprache. Wer gleich in der Zahlungserinnerung mit dem Gericht droht, verliert den Kunden und gewinnt trotzdem nichts.'},
      {typ:'artikel', w:'Buchungssatz', l:'der', e:'der Satz, also auch der Buchungssatz. Das letzte Wort im Kompositum bestimmt den Artikel.'},
      {typ:'artikel', w:'Mahnung', l:'die', e:'die Mahnung, Plural die Mahnungen. Wörter auf -ung sind immer feminin.'},
      {typ:'artikel', w:'Finanzamt', l:'das', e:'das Amt, also das Finanzamt. Plural: die Finanzämter.'}
    ],
    schreiben:{
      auf:'Schreibe die zweite Mahnung an einen Geschäftskunden für die offene Rechnung 2024-0871 über 4.280 Euro, fällig seit dem 15. April.',
      punkte:['Auf welche Rechnung und welche Mahnung du dich beziehst','Welcher Betrag offen ist und seit wann','Welche Gebühren und Zinsen dazukommen','Bis wann gezahlt werden muss und was sonst passiert'],
      hilfe:'Schreib sachlich und höflich, aber ohne Weichmacher — keine Entschuldigungen dafür, dass du Geld forderst. Nutze das unpersönliche Register: „Trotz unserer Zahlungserinnerung vom … ist ein Zahlungseingang bisher nicht zu verzeichnen." · „Der offene Betrag ist bis zum … auf das unten genannte Konto zu überweisen." · „Wir bitten Sie, den Ausgleich bis zum … vorzunehmen." · „Sollten sich Ihre Zahlung und dieses Schreiben überschnitten haben, betrachten Sie es bitte als gegenstandslos." Nenne immer Rechnungsnummer, Datum, Betrag und eine konkrete Frist. Acht bis zwölf Zeilen reichen.'
    }
  },
  /* ===================== 18 · FRISEUR UND KOSMETIK ===================== */
  {
    id:'friseur',
    t:'Friseur und Kosmetik',
    unter:'Friseurhandwerk, Kosmetik, Nageldesign, Barbier, Wellness und Massage',
    lvl:'A2–B1',
    pruef:'Keine Sprachprüfung. Einschlägig: Deutsch-Test für den Beruf A2·B1. Die Meisterprüfung findet inklusive Fachgespräch auf Deutsch statt. Für die Ausbildung und die Meisterprüfung wird B2 erwartet.',
    warum:'Das Friseur- und Kosmetikhandwerk ist einer der klassischen Einstiegs- und Selbstständigkeitsberufe für Zugewanderte: die Hürde beim Einstieg ist niedrig, der Weg zum eigenen Salon kurz. Sprachlich ist das Feld trotzdem anspruchsvoll, denn der ganze Beruf ist Gespräch — Beratung, den Wunsch verstehen, Erwartungen steuern, Reklamation. Fachlich reicht A2 bis B1 für die Arbeit am Stuhl; für die Ausbildung und die Meisterprüfung mit Fachgespräch brauchst du B2.',
    handlungen:[
      {t:'Termine am Telefon vergeben', e:'Wunschtermin aufnehmen, Dauer einschätzen, Alternative anbieten, Namen und Nummer richtig notieren.', lvl:'A2'},
      {t:'Termine verschieben und absagen', e:'Eine Absage entgegennehmen, einen Ersatztermin anbieten und einen wiederholten Terminausfall ansprechen.', lvl:'B1'},
      {t:'Das Beratungsgespräch führen', e:'Den Wunsch so lange nachfragen, bis beide dasselbe Bild im Kopf haben — Länge, Form, Farbe.', lvl:'B1'},
      {t:'Haar und Kopfhaut beurteilen und benennen', e:'Struktur, Zustand und Schäden beschreiben und sagen, was daraus folgt.', lvl:'B1'},
      {t:'Über Farbe beraten', e:'Ansatz, Strähnen, Blondierung, Tönung erklären — dazu Haltbarkeit, Nuance und Grauabdeckung.', lvl:'B1'},
      {t:'Nach Allergien fragen und aufklären', e:'Verträglichkeit abfragen, den Hautverträglichkeitstest erklären und auf Einwirkzeit und Schutz achten.', lvl:'B1'},
      {t:'Erwartungen dämpfen', e:'Freundlich sagen, was heute nicht geht, und einen realistischen Plan in zwei Schritten anbieten.', lvl:'B1'},
      {t:'Eine Reklamation annehmen', e:'Zuhören, die Ursache verständlich erklären und eine konkrete Lösung anbieten, ohne sich kleinzumachen.', lvl:'B1'},
      {t:'Preis nennen und kassieren', e:'Den Preis vorher sagen, Aufpreise begründen, abkassieren und mit Trinkgeld umgehen.', lvl:'A2'},
      {t:'Ein Produkt empfehlen', e:'Aus der Behandlung heraus etwas vorschlagen und ein Nein sofort akzeptieren.', lvl:'B1'}
    ],
    chunks:[
      {de:'einen Termin vergeben', hi:'am Telefon oder am Empfang einen Platz eintragen', bsp:'Ich kann Ihnen am Donnerstag um halb vier einen Termin vergeben.'},
      {de:'einen Termin verschieben', hi:'auf einen anderen Tag legen', bsp:'Können wir den Termin auf nächste Woche verschieben?'},
      {de:'einen Termin absagen', hi:'ganz streichen — bitte rechtzeitig, sonst ist der Termin geplatzt', bsp:'Wenn Sie absagen müssen, sagen Sie uns bitte bis 24 Stunden vorher Bescheid.'},
      {de:'Wie viel soll ab?', hi:'die Standardfrage vor dem Schnitt, ganz alltagssprachlich', bsp:'Und wie viel soll ab? Zeigen Sie es mir mal mit den Fingern.'},
      {de:'zwei Fingerbreit abschneiden', hi:'die übliche Maßangabe im Salon', bsp:'Also etwa zwei Fingerbreit, mehr nicht.'},
      {de:'nur die Spitzen schneiden', hi:'die Länge bleibt, es wird nur nachgeschnitten', bsp:'Heute nur die Spitzen, die Länge bleibt.'},
      {de:'stufig schneiden', hi:'in Stufen, damit es Bewegung bekommt', bsp:'Soll ich es leicht stufig schneiden oder gerade lassen?'},
      {de:'die Haare ausdünnen', hi:'Fülle wegnehmen, ohne zu kürzen', bsp:'Ich dünne es an den Seiten etwas aus, dann liegt es besser.'},
      {de:'einen Pony schneiden', hi:'die Haare vorn über der Stirn', bsp:'Wollen Sie den Pony kürzer oder erst mal so lassen?'},
      {de:'feines Haar haben', hi:'dünn im einzelnen Haar, oft wenig Halt', bsp:'Sie haben sehr feines Haar, deshalb würde ich nicht zu stark ausdünnen.'},
      {de:'strapaziertes Haar', hi:'durch Farbe, Hitze oder Sonne geschädigt', bsp:'Die Längen sind ziemlich strapaziert.'},
      {de:'Spliss haben', hi:'gespaltene Haarspitzen', bsp:'Unten haben Sie Spliss, den sollten wir wegnehmen.'},
      {de:'eine empfindliche Kopfhaut haben', hi:'reagiert schnell mit Jucken oder Brennen — dazu: trockene Kopfhaut, die spannt und schuppt', bsp:'Wenn Sie eine empfindliche oder trockene Kopfhaut haben, sagen Sie es mir bitte vorher.'},
      {de:'den Ansatz nachfärben', hi:'nur die nachgewachsenen Haare am Kopf', bsp:'Der Ansatz ist etwa zwei Zentimeter, den färben wir nach.'},
      {de:'Strähnen machen', hi:'einzelne Partien heller färben', bsp:'Ich mache Ihnen ein paar feine Strähnen im Deckhaar.'},
      {de:'eine Blondierung machen', hi:'die Haare mit Blondiermittel aufhellen', bsp:'Für dieses Blond brauchen wir eine Blondierung.'},
      {de:'eine Tönung auftragen', hi:'Farbe, die nach einigen Wäschen rausgeht', bsp:'Die Tönung hält etwa sechs bis acht Wäschen.'},
      {de:'eine Nuance heller gehen', hi:'ein kleiner Schritt in der Farbe', bsp:'Wir gehen heute nur eine Nuance heller.'},
      {de:'die Grauabdeckung', hi:'wie gut die Farbe die grauen Haare deckt', bsp:'Diese Farbe hat eine sehr gute Grauabdeckung.'},
      {de:'die Farbe hält etwa …', hi:'so sprichst du über Haltbarkeit', bsp:'Die Farbe hält etwa vier bis sechs Wochen, dann sieht man den Ansatz.'},
      {de:'einen Hautverträglichkeitstest machen', hi:'kleine Menge hinter dem Ohr, 48 Stunden vorher', bsp:'Vor der ersten Farbe machen wir einen Hautverträglichkeitstest.'},
      {de:'eine Allergie gegen etwas haben', hi:'immer vor Farbe und Dauerwelle abfragen', bsp:'Haben Sie eine Allergie gegen Haarfarbe oder Nickel?'},
      {de:'die Einwirkzeit einhalten', hi:'wie lange das Mittel auf dem Haar bleibt', bsp:'Die Einwirkzeit sind 35 Minuten, ich stelle den Wecker.'},
      {de:'Handschuhe tragen', hi:'Pflicht bei Farbe und Blondierung, schützt deine Haut', bsp:'Beim Auftragen trage ich immer Handschuhe.'},
      {de:'für Lüftung sorgen', hi:'Fenster auf oder Absaugung an', bsp:'Beim Blondieren sorgen wir für gute Lüftung.'},
      {de:'Das schaffen wir heute nicht in einem Termin.', hi:'der wichtigste Satz zum Erwartungen dämpfen', bsp:'Von Schwarz auf Hellblond — das schaffen wir heute nicht in einem Termin.'},
      {de:'die Farbe ist zu dunkel geworden', hi:'der häufigste Satz in der Reklamation — antworte mit: das lässt sich korrigieren', bsp:'Die Farbe ist zu dunkel geworden, das wollte ich so nicht.'},
      {de:'einen Aufpreis für lange Haare berechnen', hi:'mehr Material und mehr Zeit', bsp:'Bei langen Haaren kommt ein Aufpreis von zehn Euro dazu.'},
      {de:'an der Kasse abrechnen', hi:'kassieren, bar oder mit Karte', bsp:'Rechnen wir vorne an der Kasse ab?'},
      {de:'Der Rest ist für Sie.', hi:'so gibt die Kundin Trinkgeld — du bedankst dich kurz', bsp:'Vielen Dank, das ist sehr nett von Ihnen.'},
      {de:'ein Produkt empfehlen', hi:'vorschlagen, nicht aufdrängen', bsp:'Ich kann Ihnen für die Längen eine Kur empfehlen — Sie müssen aber nicht.'},
      {de:'die Arbeitsflächen desinfizieren', hi:'nach jedem Kunden, Kamm und Schere auch', bsp:'Zwischen zwei Kunden desinfiziere ich Kamm und Arbeitsfläche.'},
      {de:'der Hautschutzplan hängt aus', hi:'Vorschrift im Salon: welche Creme, welche Handschuhe wann', bsp:'Der Hautschutzplan hängt im Lager neben dem Waschbecken.'},
      {de:'das Terminbuch und das Kassenbuch führen', hi:'wer wann kommt und was am Tag eingenommen wurde', bsp:'Nach Feierabend führe ich das Kassenbuch und trage die Termine für morgen ein.'},
      {de:'im Dienstplan eingetragen sein', hi:'wer wann im Salon steht — wer krank ist, meldet sich vor Öffnung', bsp:'Am Samstag bin ich bis 16 Uhr im Dienstplan eingetragen.'}
    ],
    dialoge:[
      {
        id:'friseur-beratung',
        titel:'Die Beratung vor Schnitt und Farbe',
        lvl:'B1',
        dauer:'5 Min',
        ort:'Frau Krüger sitzt zum ersten Mal bei dir am Stuhl. Sie hat langes, dunkles und an den Längen strapaziertes Haar und zeigt dir ein Foto von einem sehr hellen Blond.',
        schritte:[
          {amanda:'Ich hätte gern genau diese Farbe. Und die Länge kann so bleiben.', hinweis:'Nimm den Wunsch ernst und frag nach, statt sofort zu bewerten.', beispiel:'Ein schönes Bild, das gefällt mir auch. Darf ich kurz durch Ihre Haare fassen? Und sagen Sie mir: Waren Sie schon einmal blondiert?', redemittel:['Ein schönes Bild, das gefällt mir auch.','Darf ich kurz durch Ihre Haare fassen?','Waren Sie schon einmal blondiert?']},
          {amanda:'Nein, aber ich färbe seit zwei Jahren zu Hause dunkel nach.', hinweis:'Beschreibe, was du siehst — sachlich, ohne die Kundin zu kritisieren.', beispiel:'Danke, das ist wichtig. Ihr Haar ist von Natur aus fein, die Längen sind strapaziert und unten sehen wir Spliss. Dazu liegt eine dunkle Farbe drauf.', redemittel:['Danke, das ist wichtig.','Ihr Haar ist … , die Längen sind …','Unten sehe ich …']},
          {amanda:'Und? Geht das trotzdem?', hinweis:'Dämpf die Erwartung freundlich und biete sofort einen Plan an.', beispiel:'Von dieser Basis auf dieses Blond — das schaffen wir heute nicht in einem Termin. Ich schlage zwei Schritte vor: heute Strähnen und eine Nuance heller, in sechs Wochen den nächsten Schritt.', redemittel:['Das schaffen wir heute nicht in einem Termin.','Ich schlage zwei Schritte vor: …','Heute … , in sechs Wochen …']},
          {amanda:'Hm. Und wenn wir es heute doch versuchen?', hinweis:'Bleib bei deiner fachlichen Einschätzung und sag klar, was die Folge wäre.', beispiel:'Ehrlich gesagt würde ich davon abraten. Bei einer Blondierung in einem Schritt wird das Haar sehr strapaziert, es kann brechen. Das möchte ich Ihnen nicht antun.', redemittel:['Ehrlich gesagt würde ich davon abraten.','Bei … wird das Haar sehr strapaziert.','Das möchte ich Ihnen nicht antun.']},
          {amanda:'Gut, dann machen wir es in zwei Schritten. Was kostet das heute?', hinweis:'Nenne Preis, Aufpreis und Dauer, bevor du anfängst.', beispiel:'Heute Strähnen mit Schnitt: 95 Euro, bei Ihrer Länge kommt ein Aufpreis von zehn Euro dazu. Wir brauchen etwa zweieinhalb Stunden. Ist das in Ordnung für Sie?', redemittel:['Heute … kostet …','Bei Ihrer Länge kommt ein Aufpreis von … dazu.','Wir brauchen etwa … Stunden.']}
        ]
      },
      {
        id:'friseur-reklamation',
        titel:'Die Reklamation nach der Farbe',
        lvl:'B1',
        dauer:'5 Min',
        ort:'Zwei Tage nach der Behandlung steht Frau Alt im Salon. Sie ist enttäuscht: Die Farbe ist deutlich dunkler geworden, als sie erwartet hat. Der Salon ist voll, andere Kundinnen hören mit.',
        schritte:[
          {amanda:'Schauen Sie sich das an! Die Farbe ist viel zu dunkel geworden. So wollte ich das überhaupt nicht.', hinweis:'Erst zuhören und die Enttäuschung anerkennen — nicht sofort erklären.', beispiel:'Das tut mir leid, ich sehe, dass Sie enttäuscht sind. Kommen Sie doch kurz mit nach hinten ans Licht, dann schauen wir es uns in Ruhe an.', redemittel:['Das tut mir leid.','Ich sehe, dass Sie enttäuscht sind.','Kommen Sie kurz mit, dann schauen wir es in Ruhe an.']},
          {amanda:'Ich habe doch gesagt, ich will es warm und nicht so schwarz.', hinweis:'Erkläre die Ursache verständlich, ohne Schuld zuzuweisen.', beispiel:'Ich erkläre Ihnen, was passiert ist: Ihre Längen sind sehr porös, sie nehmen viel mehr Farbe auf als der Ansatz. Deshalb ist es unten dunkler geworden.', redemittel:['Ich erkläre Ihnen, was passiert ist.','Ihre Längen sind sehr porös, deshalb …','Das kommt vor, wenn …']},
          {amanda:'Und was heißt das jetzt für mich?', hinweis:'Biete eine konkrete Lösung an — mit Termin, Aufwand und Kosten.', beispiel:'Das lässt sich korrigieren. Ich würde die Farbe mit einer sanften Behandlung etwas herausziehen und einen wärmeren Ton darüberlegen. Das machen wir natürlich auf unsere Kosten.', redemittel:['Das lässt sich korrigieren.','Ich würde … und dann …','Das machen wir auf unsere Kosten.']},
          {amanda:'Und wenn das wieder nicht klappt? Ich habe am Samstag eine Hochzeit.', hinweis:'Sei ehrlich über das Ergebnis und nenne einen Termin vor dem Anlass.', beispiel:'Ich kann Ihnen nicht versprechen, dass wir das Foto genau treffen. Aber deutlich wärmer bekommen wir es. Donnerstag um zehn hätte ich Zeit, dann sind Sie vor Samstag fertig.', redemittel:['Ich kann Ihnen nicht versprechen, dass …','Aber … bekommen wir hin.','Am … um … hätte ich Zeit.']},
          {amanda:'Na gut. Dann Donnerstag.', hinweis:'Bedanke dich und sag, was die Kundin bis dahin tun kann.', beispiel:'Danke, dass Sie es direkt angesprochen haben. Waschen Sie bis Donnerstag bitte nur mit lauwarmem Wasser, dann arbeiten wir besser. Ich trage Sie ein.', redemittel:['Danke, dass Sie es direkt angesprochen haben.','Bitte bis dahin nur …','Ich trage Sie ein.']}
        ]
      },
      {
        id:'friseur-termin',
        titel:'Der Termin am Telefon',
        lvl:'A2',
        dauer:'4 Min',
        ort:'Es ist Freitagnachmittag, im Salon ist viel los. Das Telefon klingelt. Die Kundin möchte kurzfristig einen Termin für Schnitt und Ansatzfarbe — und ist beim letzten Mal nicht erschienen.',
        schritte:[
          {amanda:'Guten Tag, ich hätte gern morgen einen Termin. Geht das noch?', hinweis:'Melde dich freundlich, frag nach der Leistung und mach klar, wie viel Zeit du brauchst.', beispiel:'Salon Wagner, guten Tag. Sehr gern — worum geht es denn, nur Schneiden oder auch Farbe? Für beides brauche ich etwa zwei Stunden.', redemittel:['Salon … , guten Tag.','Worum geht es denn, nur … oder auch …?','Dafür brauche ich etwa … Stunden.']},
          {amanda:'Schneiden und den Ansatz nachfärben, bitte. Am liebsten vormittags.', hinweis:'Sag ehrlich, dass der Wunschtermin nicht geht, und biete zwei Alternativen an.', beispiel:'Vormittags bin ich morgen leider ausgebucht. Ich hätte Samstag um 15 Uhr oder Dienstag um 9 Uhr. Was passt Ihnen besser?', redemittel:['Vormittags bin ich leider ausgebucht.','Ich hätte … oder …','Was passt Ihnen besser?']},
          {amanda:'Dann Samstag um drei.', hinweis:'Wiederhole Termin, Leistung und Dauer und frag nach Namen und Telefonnummer.', beispiel:'Sehr gern: Samstag, 15 Uhr, Schnitt und Ansatz, etwa zwei Stunden. Auf welchen Namen darf ich eintragen, und unter welcher Nummer erreiche ich Sie?', redemittel:['Sehr gern: … , … Uhr, …','Auf welchen Namen darf ich eintragen?','Unter welcher Nummer erreiche ich Sie?']},
          {amanda:'Alt, A-L-T. Handynummer null eins sieben eins …', hinweis:'Sprich den Terminausfall vom letzten Mal höflich an.', beispiel:'Danke, ich habe es notiert. Eine Bitte noch, Frau Alt: Beim letzten Mal ist der Termin leider offengeblieben. Sagen Sie uns bitte spätestens 24 Stunden vorher Bescheid, wenn etwas dazwischenkommt.', redemittel:['Eine Bitte noch: …','Beim letzten Mal ist der Termin offengeblieben.','Sagen Sie uns bitte … vorher Bescheid.']},
          {amanda:'Ja, das war blöd, tut mir leid. Das mache ich.', hinweis:'Schließe freundlich ab und wiederhole den Termin ein letztes Mal.', beispiel:'Kein Problem, danke. Dann bis Samstag um 15 Uhr — ich freue mich. Schönen Tag noch, Frau Alt.', redemittel:['Kein Problem, danke.','Dann bis … um … Uhr.','Schönen Tag noch.']}
        ]
      }
    ],
    saetze:[
      {de:'Und wie viel soll ab?', wann:'die erste Frage vor jedem Schnitt'},
      {de:'Zeigen Sie es mir bitte mit den Fingern.', wann:'wenn Zentimeterangaben unklar sind — zwei Fingerbreit versteht jeder'},
      {de:'Darf ich kurz durch Ihre Haare fassen?', wann:'vor jeder Berührung, auch wenn es zum Beruf gehört'},
      {de:'Haben Sie eine Allergie gegen Haarfarbe?', wann:'vor jeder Farbe und Blondierung, jedes Mal neu'},
      {de:'Waren Sie schon einmal blondiert?', wann:'in der Farbberatung — die Vorgeschichte entscheidet über das Ergebnis'},
      {de:'Das schaffen wir heute nicht in einem Termin.', wann:'wenn der Wunsch zu groß für einen Besuch ist'},
      {de:'Ehrlich gesagt würde ich davon abraten.', wann:'freundlich Nein sagen — immer mit Begründung dahinter'},
      {de:'Ist die Wassertemperatur so angenehm?', wann:'am Waschbecken, vor und während des Waschens'},
      {de:'Die Einwirkzeit sind 35 Minuten, ich komme zwischendurch nach Ihnen sehen.', wann:'wenn du die Kundin einen Moment allein lässt'},
      {de:'Möchten Sie das so, oder soll ich noch etwas kürzer?', wann:'kurz vor Schluss — der letzte Kontrollpunkt'},
      {de:'Das lässt sich korrigieren.', wann:'bei der Reklamation, als erstes Lösungssignal'},
      {de:'Das machen wir natürlich auf unsere Kosten.', wann:'wenn der Fehler bei euch lag — sag es von dir aus'},
      {de:'Bei langen Haaren kommt ein Aufpreis dazu.', wann:'vor der Behandlung, nie erst an der Kasse'},
      {de:'Ich kann Ihnen dafür eine Kur empfehlen — Sie müssen aber nicht.', wann:'Produktempfehlung ohne Druck'},
      {de:'Sagen Sie uns bitte spätestens 24 Stunden vorher Bescheid.', wann:'am Ende jeder Terminvergabe, freundlich und beiläufig'}
    ],
    ueb:[
      {typ:'wahl', f:'Die Kundin zeigt ein Foto mit sehr hellem Blond, hat aber dunkel gefärbtes, strapaziertes Haar. Was sagst du?', o:['„Kein Problem, das machen wir heute."','„Das schaffen wir heute nicht in einem Termin. Ich schlage zwei Schritte vor."','„Das geht bei Ihnen leider gar nicht."'], l:1, e:'Erwartungen dämpfen heißt nicht Nein sagen. Du nennst die Grenze und lieferst sofort einen Plan hinterher — dann bleibt die Kundin.'},
      {typ:'wahl', f:'Eine Kundin reklamiert laut im vollen Salon. Was tust du zuerst?', o:['Du erklärst sofort, warum die Farbe so geworden ist.','Du hörst zu, entschuldigst dich für den Ärger und bittest sie nach hinten.','Du holst die Chefin und gehst weiter arbeiten.'], l:1, e:'Erst die Person, dann die Sache. Und ein ruhigerer Ort nimmt Druck aus dem Gespräch — für die Kundin und für die anderen Gäste.'},
      {typ:'wahl', f:'Wann machst du den Hautverträglichkeitstest?', o:['Direkt vor dem Auftragen der Farbe','Etwa 48 Stunden vor der Behandlung','Nach der Behandlung, wenn es juckt'], l:1, e:'Der Test braucht Vorlauf, meist 48 Stunden. Deshalb fragst du schon bei der Terminvergabe, ob die Kundin zum ersten Mal färbt.'},
      {typ:'luecke', f:'Der ___ ist etwa zwei Zentimeter, den färben wir nach.', l:'Ansatz', e:'Der Ansatz sind die nachgewachsenen Haare am Kopf. Ansatz nachfärben ist die häufigste Farbleistung im Salon.'},
      {typ:'luecke', f:'Die ___ sind 35 Minuten, ich stelle den Wecker.', l:'Einwirkzeit', e:'Die Einwirkzeit ist die Zeit, in der das Mittel im Haar arbeitet. Wird sie überschritten, wird die Farbe zu dunkel oder das Haar geschädigt.'},
      {typ:'luecke', f:'Unten haben Sie ___, den sollten wir wegnehmen.', l:'Spliss', e:'Spliss sind gespaltene Haarspitzen. Das Wort hat keinen Plural: der Spliss.'},
      {typ:'luecke', f:'Bei langen Haaren kommt ein ___ von zehn Euro dazu.', l:'Aufpreis', e:'Aufpreis nennst du immer vorher. Eine Überraschung an der Kasse ist der schnellste Weg zu einer schlechten Bewertung.'},
      {typ:'bausteine', l:'Darf ich kurz durch Ihre Haare fassen?', teile:['Darf','ich','kurz','durch','Ihre','Haare','fassen'], e:'Die Frage mit Darf ich holt das Einverständnis. Modalverb vorn, Vollverb ganz hinten.'},
      {typ:'bausteine', l:'Ich schlage zwei Schritte vor.', teile:['Ich','schlage','zwei','Schritte','vor'], e:'vorschlagen ist trennbar: Ich schlage … vor. Das vor rutscht ans Satzende.'},
      {typ:'bausteine', l:'Die Farbe hält etwa vier bis sechs Wochen.', teile:['Die','Farbe','hält','etwa','vier','bis','sechs','Wochen'], e:'etwa vor der Zahl macht die Angabe unverbindlich — genau richtig, wenn du keine feste Zusage geben willst.'},
      {typ:'paare', p:[['stufig','in Stufen geschnitten, mit Bewegung'],['ausdünnen','Fülle wegnehmen, ohne zu kürzen'],['der Ansatz','die nachgewachsenen Haare am Kopf'],['die Tönung','Farbe, die nach einigen Wäschen rausgeht'],['die Grauabdeckung','wie gut graue Haare gedeckt werden']], e:'Diese fünf Wörter fallen in fast jeder Beratung. Lerne sie zusammen mit einem ganzen Beispielsatz.'},
      {typ:'paare', p:[['feines Haar','dünn im einzelnen Haar, wenig Halt'],['strapaziertes Haar','geschädigt durch Farbe, Hitze oder Sonne'],['empfindliche Kopfhaut','reagiert schnell mit Jucken oder Brennen'],['poröses Haar','nimmt sehr viel Farbe auf']], e:'Mit diesen vier Beschreibungen kannst du fast jeden Haarzustand benennen — und damit auch begründen, was heute geht und was nicht.'},
      {typ:'hoeren', text:'Guten Tag, ich wollte meinen Termin am Donnerstag um zehn absagen, mir ist etwas dazwischengekommen. Hätten Sie stattdessen am Samstag noch etwas frei? Am liebsten nachmittags.', f:'Was möchte die Kundin?', o:['Den Termin ganz absagen','Den Termin auf Samstagnachmittag verschieben','Einen zusätzlichen Termin buchen'], l:1, e:'Das Signalwort ist stattdessen: sie sagt ab und will gleichzeitig einen Ersatz. Notiere beim Hören immer Tag, Uhrzeit und Wunschzeit.'},
      {typ:'hoeren', text:'Also, wir machen heute nur die Spitzen, etwa zwei Fingerbreit, und legen eine Tönung darüber. Die Tönung hält sechs bis acht Wäschen. Die Blondierung machen wir erst in sechs Wochen.', f:'Was passiert heute nicht?', o:['Die Spitzen schneiden','Die Tönung','Die Blondierung'], l:2, e:'Achte auf erst in sechs Wochen — erst heißt hier: noch nicht jetzt. Das ist die typische Formulierung, wenn du in zwei Schritten arbeitest.'},
      {typ:'sprechen', f:'Sag freundlich: Und wie viel soll ab? Zeigen Sie es mir bitte mit den Fingern.', l:'Und wie viel soll ab', e:'Die Stimme geht bei ab nach oben. Danach kleine Pause — die Kundin soll überlegen und zeigen dürfen.'},
      {typ:'sprechen', f:'Sag ruhig und ohne Rechtfertigung: Das tut mir leid. Das lässt sich korrigieren.', l:'Das tut mir leid', e:'Kurze Sätze, ruhige Stimme, kein Aber dazwischen. Sobald du dich rechtfertigst, wird die Kundin lauter.'},
      {typ:'ordnen', l:['Ich begrüße die Kundin und frage nach ihrem Wunsch.','Ich fasse durch die Haare und beurteile Struktur und Kopfhaut.','Ich frage nach Allergien und Vorbehandlungen.','Ich sage, was heute möglich ist, und nenne Preis und Dauer.','Ich beginne mit der Behandlung.'], f:'Bring die Beratung vor der Farbe in die richtige Reihenfolge.', e:'Preis und Dauer kommen vor die Behandlung, nie danach. Und die Frage nach Allergien steht immer vor dem ersten Auftrag von Farbe.'},
      {typ:'artikel', w:'Ansatz', l:'der', e:'der Ansatz, Plural die Ansätze. Männlich, wie fast alle Wörter, die vom Verb ohne Endung kommen: ansetzen — der Ansatz.'},
      {typ:'artikel', w:'Tönung', l:'die', e:'die Tönung. Alle Wörter auf -ung sind feminin — auch die Blondierung und die Behandlung.'},
      {typ:'artikel', w:'Trinkgeld', l:'das', e:'das Geld, also das Trinkgeld. Das letzte Wort im Kompositum bestimmt den Artikel.'}
    ],
    schreiben:{
      auf:'Eine Kundin hat sich per E-Mail über eine Farbbehandlung beschwert: Die Farbe sei zu dunkel geworden. Schreibe die Antwort aus dem Salon.',
      punkte:['Dass du die Beschwerde verstanden hast und es dir leidtut','Was fachlich die Ursache war, in einfachen Worten','Welche Lösung du anbietest und was sie kostet','Ein konkreter Terminvorschlag und wie sie antworten kann'],
      hilfe:'Siez die Kundin und bleib freundlich, kurz und ohne lange Rechtfertigung. Fang die Punkte so an: „vielen Dank, dass Sie sich direkt bei uns gemeldet haben." · „Es tut mir leid, dass das Ergebnis nicht Ihren Erwartungen entspricht." · „Fachlich liegt das daran, dass …" · „Ich schlage Ihnen vor, dass wir …" · „Die Korrektur übernehmen wir selbstverständlich auf unsere Kosten." Schreib keine Bausteine aus dem Internet ab, sondern nimm ein Detail aus dem Termin auf — das merkt die Kundin sofort. Acht bis zehn Zeilen reichen.'
    }
  },

  /* ===================== 19 · LANDWIRTSCHAFT UND GARTENBAU ===================== */
  {
    id:'landwirtschaft',
    t:'Landwirtschaft und Gartenbau',
    unter:'Ackerbau, Tierhaltung, Gemüsebau, Garten- und Landschaftsbau, Saisonarbeit, Forst',
    lvl:'A2–B1',
    pruef:'Keine Sprachprüfung. Einschlägig: Deutsch-Test für den Beruf A2·B1. Wer Pflanzenschutzmittel anwenden will, braucht den Sachkundenachweis nach der Pflanzenschutz-Sachkundeverordnung — diese Prüfung findet auf Deutsch statt.',
    warum:'Die Landwirtschaft und der Gartenbau sind eines der größten Felder für Saison- und Wanderarbeit in Deutschland. Der Anteil der Beschäftigten, die kaum oder gar kein Deutsch sprechen, ist hier so hoch wie in kaum einem anderen Bereich — und genau das macht das Feld gefährlich: an der Maschine, beim Pflanzenschutz und bei Hitze wird ein Missverständnis sofort zum Unfall. Für angelernte Arbeit reicht A2 bis B1, für eine Berufsausbildung wird B2 verlangt. Wer hier B1 erreicht, dolmetscht nach kurzer Zeit für die anderen und wird schnell Vorarbeiterin.',
    handlungen:[
      {t:'Die Arbeitsanweisung am Morgen verstehen', e:'Vom Vorarbeiter aufnehmen, wer heute wohin geht, welche Reihe, welches Beet, welcher Schlag — und nachfragen, bevor du losgehst.', lvl:'A2'},
      {t:'Ernte und Menge melden', e:'Am Ende des Tages sagen, wie viele Kisten oder Steigen fertig sind und wo noch etwas offen ist.', lvl:'A2'},
      {t:'Qualität beurteilen und benennen', e:'Sortierung und Güteklasse ansprechen: was ist reif, was ist zu klein, was ist Ausschuss.', lvl:'B1'},
      {t:'Auffälligkeiten am Tier melden', e:'Beobachtung ohne Diagnose weitergeben: frisst nicht, lahmt, das Euter ist heiß — und sagen, wie lange das schon so ist.', lvl:'B1'},
      {t:'Maschinen sicher übernehmen', e:'Die Einweisung verstehen, den Not-Aus und den Zapfwellenschutz zeigen lassen, eine Störung sofort melden.', lvl:'B1'},
      {t:'Pflanzenschutz nach Vorschrift besprechen', e:'Wartezeit, Abstandsauflage und Schutzausrüstung klären, das Sicherheitsdatenblatt lesen, das Spritzprotokoll ausfüllen.', lvl:'B1'},
      {t:'Im Privatgarten mit Kunden sprechen', e:'Im Garten- und Landschaftsbau erklären, was heute gemacht wird, wo Dreck entsteht und wann ihr fertig seid — auf Sie.', lvl:'B1'},
      {t:'Hitze, Wetter und Trinken ansprechen', e:'Sagen, wenn dir schlecht wird, Pause und Schatten einfordern, Frostschutz und Regen mit dem Team abstimmen.', lvl:'A2'},
      {t:'Stundenzettel und Lohnabrechnung klären', e:'Die eigenen Stunden eintragen, die Abrechnung lesen, Abzüge für Unterkunft und Verpflegung nachfragen.', lvl:'B1'},
      {t:'Sich krankmelden und einen Unfall melden', e:'Vor Arbeitsbeginn anrufen, den Grund nennen und beim Unfall Ort, Person und Verletzung in wenigen Sätzen sagen.', lvl:'A2'}
    ],
    chunks:[
      {de:'in die Reihe gehen', hi:'die Pflanzreihe oder das Beet, wo du heute arbeitest', bsp:'Ihr geht heute in die Reihen zwölf bis achtzehn, das Beet vorne bleibt liegen.'},
      {de:'auf dem Schlag arbeiten', hi:'Schlag ist das große Feldstück, die Parzelle dein Abschnitt darin', bsp:'Wir arbeiten heute auf dem Schlag hinter dem Wald, jeder bekommt eine Parzelle.'},
      {de:'das ist noch nicht reif', hi:'der wichtigste Qualitätssatz bei der Ernte', bsp:'Die hier lasse ich hängen, das ist noch nicht reif.'},
      {de:'nach Güteklasse sortieren', hi:'Klasse eins, Klasse zwei, Ausschuss', bsp:'Bitte gleich in der Reihe nach Güteklasse sortieren.'},
      {de:'die Steige füllen', hi:'Steige ist die flache Kiste für Obst und Gemüse', bsp:'Eine Steige fasst fünf Kilo, die vollen Kisten stapelt ihr am Feldrand.'},
      {de:'die Erntemenge melden', hi:'am Ende des Tages die Zahl durchgeben', bsp:'Ich melde die Erntemenge: hundertzwanzig Steigen.'},
      {de:'das Melkzeug ansetzen', hi:'die Melkbecher an das Euter setzen, früh und abends', bsp:'Erst reinigen, dann das Melkzeug ansetzen.'},
      {de:'das Euter ist gerötet', hi:'Beobachtung, keine Diagnose — sofort melden', bsp:'Bei Nummer siebenundvierzig ist das Euter gerötet.'},
      {de:'die Kuh lahmt', hi:'sie läuft ungleichmäßig, meist ein Problem an den Klauen', bsp:'Die Kuh im hinteren Stand lahmt seit gestern, die Klauen muss sich der Pfleger ansehen.'},
      {de:'sie frisst nicht', hi:'das erste Zeichen, dass ein Tier krank ist', bsp:'Nummer zwölf frisst nicht, das Futter liegt seit heute früh im Trog.'},
      {de:'die Tränke ist verstopft', hi:'sehr häufige Meldung im Stall', bsp:'Die Tränke in Bucht drei ist verstopft, die Tiere kommen nicht ran.'},
      {de:'eine Kalbung steht an', hi:'die Geburt kommt bald, das Tier braucht Aufsicht', bsp:'Bei der jungen Kuh steht heute Nacht eine Kalbung an.'},
      {de:'den Tierarzt rufen', hi:'wenn du unsicher bist, immer melden', bsp:'Soll ich den Tierarzt rufen oder wartest du bis morgen?'},
      {de:'den Traktor anhängen', hi:'ein Anbaugerät an den Traktor koppeln', bsp:'Kannst du den Traktor an die Ballenpresse anhängen?'},
      {de:'die Zapfwelle abschalten', hi:'die wichtigste Sicherheitsregel am Anbaugerät', bsp:'Bevor du absteigst: Zapfwelle abschalten und Schlüssel abziehen.'},
      {de:'der Zapfwellenschutz fehlt', hi:'ohne Schutz darf nicht gearbeitet werden', bsp:'Ich fange nicht an, der Zapfwellenschutz fehlt.'},
      {de:'den Not-Aus drücken', hi:'roter Knopf, hält die Maschine sofort an', bsp:'Der Mähdrescher ist verstopft, ich habe sofort den Not-Aus gedrückt.'},
      {de:'den Sachkundenachweis haben', hi:'ohne ihn darfst du kein Pflanzenschutzmittel anwenden', bsp:'Für das Spritzen brauchst du den Sachkundenachweis.'},
      {de:'die Wartezeit einhalten', hi:'die Tage zwischen Spritzung und Ernte', bsp:'Wir dürfen erst am Freitag ernten, die Wartezeit beträgt sieben Tage.'},
      {de:'die Abstandsauflage beachten', hi:'Mindestabstand zu Gewässer und Nachbarfläche', bsp:'Am Bach müssen wir die Abstandsauflage beachten, fünf Meter.'},
      {de:'die Persönliche Schutzausrüstung anlegen', hi:'Handschuhe, Schutzbrille, Anzug, Maske', bsp:'Vor dem Ansetzen der Brühe die Persönliche Schutzausrüstung anlegen.'},
      {de:'im Sicherheitsdatenblatt nachsehen', hi:'dort stehen Gefahren und Erste Hilfe', bsp:'Sieh bitte im Sicherheitsdatenblatt nach, ob das hautreizend ist.'},
      {de:'das Spritzprotokoll ausfüllen', hi:'Pflicht nach jeder Anwendung: Mittel, Menge, Fläche, Datum', bsp:'Nach dem Spritzen fülle ich das Spritzprotokoll aus.'},
      {de:'die Stauden setzen', hi:'die Pflanzung im Garten- und Landschaftsbau', bsp:'Nach dem Aushub setzen wir die Stauden, Abstand dreißig Zentimeter.'},
      {de:'die Rasenansaat vorbereiten', hi:'Boden lockern, planieren, säen, walzen', bsp:'Morgen bereiten wir die Rasenansaat im Vorgarten vor.'},
      {de:'die Hecke in Form schneiden', hi:'Schnitt im Garten- und Landschaftsbau', bsp:'Wir schneiden heute die Hecke in Form, etwa auf Brusthöhe.'},
      {de:'Pflaster verlegen', hi:'Wege und Einfahrten im Landschaftsbau', bsp:'Wir verlegen das Pflaster in Reihe, mit drei Millimeter Fuge.'},
      {de:'die Bewässerung anstellen', hi:'Tropfschlauch, Beregnung oder Kreisregner', bsp:'Bei der Hitze stellen wir die Bewässerung schon um fünf Uhr an.'},
      {de:'wir sind gegen sechzehn Uhr fertig', hi:'im Privatgarten sagst du dem Kunden immer Ablauf und Ende — auf Sie', bsp:'Heute schneiden wir nur die Hecke, wir sind gegen sechzehn Uhr fertig.'},
      {de:'Frostschutz aufziehen', hi:'Vlies über die Kultur legen, wenn Frost kommt', bsp:'Heute Nacht kommt Frost, wir ziehen noch Frostschutz auf.'},
      {de:'genug trinken', hi:'bei Hitze Pflicht, nicht Höflichkeit', bsp:'Trink genug, bei dreißig Grad brauchst du drei Liter.'},
      {de:'den Stundenzettel abgeben', hi:'deine Arbeitszeit, jede Woche', bsp:'Den Stundenzettel gebe ich freitags im Büro ab.'},
      {de:'einen Saisonvertrag haben', hi:'befristeter Vertrag für die Erntezeit', bsp:'Ich habe einen Saisonvertrag bis Ende September.'},
      {de:'Abzüge für die Unterkunft', hi:'was vom Lohn für Zimmer und Essen abgeht — der Mindestlohn gilt auch für Saisonkräfte', bsp:'Auf der Lohnabrechnung sehe ich Abzüge für die Unterkunft, können Sie mir das erklären?'},
      {de:'sich krankmelden', hi:'vor Arbeitsbeginn anrufen, das ist Pflicht', bsp:'Ich muss mich für heute krankmelden, ich habe Fieber.'}
    ],
    dialoge:[
      {
        id:'landwirtschaft-anweisung',
        titel:'Die Arbeitsanweisung am Morgen',
        lvl:'A2',
        dauer:'4 Min',
        ort:'Es ist zehn nach sechs am Erdbeerfeld. Der Vorarbeiter Herr Krause teilt die Reihen ein. Du bist seit drei Wochen im Betrieb und verstehst noch nicht jedes Wort.',
        schritte:[
          {amanda:'Guten Morgen. Ihr geht heute in die Reihen zwölf bis achtzehn, Steigen stehen am Vorgewende.', hinweis:'Wiederhole die Zahlen, damit du sicher bist.', beispiel:'Guten Morgen. Also Reihe zwölf bis achtzehn, und die Steigen hole ich am Vorgewende. Habe ich das richtig?', redemittel:['Also Reihe … bis …','Habe ich das richtig verstanden?','Wo genau stehen die Steigen?']},
          {amanda:'Genau. Und nur reif pflücken, gestern war zu viel Grünes in den Kisten.', hinweis:'Frag konkret nach, woran man reif erkennt — das ist keine dumme Frage.', beispiel:'Verstanden. Woran sehe ich, dass eine Frucht reif ist? Ganz rot bis zur Spitze?', redemittel:['Woran erkenne ich …?','Ist die hier reif oder noch nicht?','Soll ich Ihnen kurz eine zeigen?']},
          {amanda:'Ganz rot, keine weiße Schulter. Und sortiert gleich in der Reihe: Klasse eins in die grüne Steige, Klasse zwei in die graue.', hinweis:'Wiederhole die Sortierung mit den Farben, damit nichts vertauscht wird.', beispiel:'Also Klasse eins in die grüne Steige, Klasse zwei in die graue. Und was mache ich mit kaputten Früchten?', redemittel:['Also Klasse eins in …','Und wohin kommt der Ausschuss?','Was mache ich, wenn eine Frucht faul ist?']},
          {amanda:'Ausschuss kommt in den schwarzen Eimer am Weg. Fertig sein sollten wir um vierzehn Uhr.', hinweis:'Sag, was du brauchst — Pause und Wasser gehören dazu.', beispiel:'In Ordnung. Wann ist die Pause? Ich möchte bei der Hitze genug trinken.', redemittel:['Wann ist die Pause?','Wo kann ich Wasser holen?','Gibt es Schatten in der Mittagszeit?']},
          {amanda:'Pause halb zehn, zwanzig Minuten. Wasser steht im Anhänger. Noch Fragen?', hinweis:'Fass zum Schluss den ganzen Auftrag in einem Satz zusammen.', beispiel:'Nein, alles klar: Reihe zwölf bis achtzehn, nur reif pflücken, Klasse eins grün, Klasse zwei grau, fertig um vierzehn Uhr.', redemittel:['Alles klar, also …','Ich fasse kurz zusammen …','Wenn etwas unklar ist, komme ich zu Ihnen.']}
        ]
      },
      {
        id:'landwirtschaft-meldung',
        titel:'Ein krankes Tier melden',
        lvl:'B1',
        dauer:'4 Min',
        ort:'Halb sechs am Morgen im Milchviehstall. Beim Vortrieb zum Melkstand bleibt Nummer siebenundvierzig stehen. Du meldest es der Betriebsleiterin Frau Hartl.',
        schritte:[
          {amanda:'Was ist los, warum bist du noch nicht am Melkstand?', hinweis:'Nenne zuerst das Tier und die Beobachtung, nicht deine Vermutung.', beispiel:'Nummer siebenundvierzig ist mir aufgefallen. Sie steht abseits und ist nicht mit zum Melken gekommen.', redemittel:['Mir ist etwas aufgefallen …','Nummer … steht abseits.','Sie ist nicht mitgekommen.']},
          {amanda:'Seit wann denn?', hinweis:'Zeitangabe ist entscheidend — sag ehrlich, was du weißt und was nicht.', beispiel:'Gestern Abend hat sie noch normal gefressen. Heute früh frisst sie nicht und lahmt hinten links.', redemittel:['Gestern Abend war sie noch …','Seit heute früh …','Wie lange genau, kann ich nicht sagen.']},
          {amanda:'Hast du dir das Euter angesehen?', hinweis:'Beschreibe, was du siehst und fühlst — sachlich, ohne Diagnose.', beispiel:'Ja. Das Euter ist hinten rechts gerötet und fühlt sich wärmer an als die andere Seite.', redemittel:['Das Euter ist …','Es fühlt sich wärmer an als …','Ich habe keine Verletzung gesehen.']},
          {amanda:'Und die Milch?', hinweis:'Sag, was du geprüft hast — und wenn du etwas nicht geprüft hast, sag auch das.', beispiel:'Die habe ich noch nicht geprüft. Soll ich vormelken und schauen, ob Flocken drin sind?', redemittel:['Das habe ich noch nicht geprüft.','Soll ich vormelken?','Ich schaue nach, ob Flocken drin sind.']},
          {amanda:'Ja, mach das. Und dann?', hinweis:'Schlag den nächsten Schritt selbst vor und sag, was du dokumentierst.', beispiel:'Ich melke sie separat, trage sie in die Stallkarte ein und rufe den Tierarzt an, wenn es bis acht Uhr nicht besser ist.', redemittel:['Ich melke sie separat.','Ich trage das in die Stallkarte ein.','Soll ich den Tierarzt rufen?']}
        ]
      },
      {
        id:'landwirtschaft-maschine',
        titel:'Störung an der Maschine melden',
        lvl:'B1',
        dauer:'4 Min',
        ort:'Vierzehn Uhr auf dem Schlag hinter dem Wald. Beim Pressen macht die Ballenpresse ein lautes Geräusch, ein Ballen kommt schief heraus. Der Betriebsleiter kommt mit dem Auto aufs Feld.',
        schritte:[
          {amanda:'Warum steht ihr? Wir müssen bis heute Abend fertig sein.', hinweis:'Sag zuerst, dass du gestoppt hast, und warum. Sicherheit vor Tempo.', beispiel:'Ich habe die Zapfwelle abgeschaltet und den Motor aus. Die Presse macht ein lautes Schlagen und der letzte Ballen war schief.', redemittel:['Ich habe die Zapfwelle abgeschaltet.','Die Maschine macht ein …','Der letzte Ballen war …']},
          {amanda:'Seit wann macht sie das?', hinweis:'Grenze die Zeit ein und nenne, was du vorher gemacht hast.', beispiel:'Seit etwa zehn Minuten. Vorher lief sie normal, das war ungefähr ab dem zwanzigsten Ballen.', redemittel:['Seit ungefähr … Minuten.','Vorher lief sie normal.','Es hat angefangen, als …']},
          {amanda:'Hast du schon nachgesehen?', hinweis:'Sag, was du geprüft hast — und nenne deine Grenze.', beispiel:'Ich habe von außen geschaut, da hängt Stroh im Einzug. Aufmachen möchte ich sie nicht, dafür bin ich nicht eingewiesen.', redemittel:['Ich habe von außen geschaut.','Da hängt … fest.','Dafür bin ich nicht eingewiesen.']},
          {amanda:'Gut, dass du nicht reingegriffen hast. Kannst du mir helfen?', hinweis:'Bestätige und sag klar, unter welcher Bedingung du mitarbeitest.', beispiel:'Ja, gern. Ich ziehe vorher den Schlüssel ab und warte, bis alles steht. Sagen Sie mir bitte genau, was ich anfassen darf.', redemittel:['Ich ziehe den Schlüssel ab.','Ich warte, bis alles steht.','Sagen Sie mir bitte, was ich anfassen darf.']},
          {amanda:'Alles klar. Melde so etwas immer sofort.', hinweis:'Bestätige die Regel und sag, was du dokumentierst.', beispiel:'Mache ich. Ich schreibe die Störung mit Uhrzeit auf den Stundenzettel, damit die Standzeit nachvollziehbar ist.', redemittel:['Mache ich, sofort.','Ich schreibe die Störung mit Uhrzeit auf.','Soll ich das auch der Werkstatt melden?']}
        ]
      }
    ],
    saetze:[
      {de:'Können Sie das bitte noch einmal langsam sagen?', wann:'bei der Arbeitsanweisung am Morgen, wenn es schnell ging'},
      {de:'Habe ich das richtig verstanden: Reihe zwölf bis achtzehn?', wann:'immer, bevor du losgehst — Nachfragen kostet weniger als ein falsch abgeernteter Schlag'},
      {de:'Woran erkenne ich, dass es reif ist?', wann:'in den ersten Tagen bei einer neuen Kultur'},
      {de:'Das ist noch nicht reif, das lasse ich hängen.', wann:'wenn jemand dich drängt, schneller zu pflücken'},
      {de:'Mir ist etwas aufgefallen.', wann:'der beste Anfang für jede Meldung — im Stall wie am Feld'},
      {de:'Nummer siebenundvierzig frisst nicht.', wann:'Beobachtung am Tier melden, mit Nummer statt Beschreibung'},
      {de:'Soll ich den Tierarzt rufen?', wann:'wenn du unsicher bist — lieber einmal zu viel fragen'},
      {de:'Ich habe die Zapfwelle abgeschaltet.', wann:'als erster Satz bei jeder Maschinenstörung'},
      {de:'Dafür bin ich nicht eingewiesen.', wann:'wenn dir jemand eine Maschine gibt, die du nicht kennst — das ist dein Recht'},
      {de:'Wie lange ist die Wartezeit?', wann:'bevor du eine gespritzte Fläche betrittst oder abernst'},
      {de:'Ich brauche Handschuhe und eine Schutzbrille.', wann:'beim Ansetzen der Spritzbrühe — die Ausrüstung stellt der Betrieb'},
      {de:'Mir ist schlecht, ich brauche zehn Minuten Schatten.', wann:'bei Hitze — sag es früh, nicht wenn du schon umkippst'},
      {de:'Wo kann ich Wasser nachfüllen?', wann:'bei jeder Feldarbeit im Sommer'},
      {de:'Können Sie mir die Abzüge auf der Abrechnung erklären?', wann:'wenn Unterkunft oder Verpflegung abgezogen werden'},
      {de:'Ich muss mich für heute krankmelden.', wann:'vor Arbeitsbeginn anrufen, nicht erst am Feld fehlen'}
    ],
    ueb:[
      {typ:'wahl', f:'Die Ballenpresse macht ein lautes Geräusch. Was machst du zuerst?', o:['Schneller fahren, damit ihr fertig werdet','Zapfwelle abschalten, Motor aus, dann melden','Kurz reingreifen und das Stroh rausziehen'], l:1, e:'An jedem Anbaugerät gilt: erst abschalten, dann anschauen. In eine laufende Maschine greift man nie — auch nicht kurz.'},
      {typ:'wahl', f:'Was bedeutet Wartezeit im Pflanzenschutz?', o:['Wie lange die Spritze warten muss, bis sie sauber ist','Die Tage zwischen Anwendung und Ernte','Die Zeit, bis der Vorarbeiter kommt'], l:1, e:'Die Wartezeit steht auf dem Mittel und im Spritzprotokoll. Wer zu früh erntet, macht die ganze Partie unverkäuflich.'},
      {typ:'wahl', f:'Welche Meldung über ein Tier ist richtig formuliert?', o:['Die Kuh hat bestimmt eine Euterentzündung.','Nummer siebenundvierzig frisst nicht und das Euter ist gerötet.','Mit der Kuh stimmt irgendwas nicht.'], l:1, e:'Du beobachtest, du diagnostizierst nicht. Nummer, Beobachtung, Zeit — das braucht die Betriebsleiterin, alles andere entscheidet der Tierarzt.'},
      {typ:'luecke', f:'Bevor du absteigst: die Zapfwelle ___ und den Schlüssel abziehen.', l:'abschalten', e:'Die Zapfwelle abschalten ist die wichtigste Sicherheitsregel am Traktor. Der Satz kommt in jeder Unterweisung vor.'},
      {typ:'luecke', f:'Wir dürfen erst am Freitag ernten, die ___ beträgt sieben Tage.', l:'Wartezeit', e:'Die Wartezeit gilt zwischen Spritzung und Ernte. Sie steht auf der Packung und gehört ins Spritzprotokoll.'},
      {typ:'luecke', f:'Bitte gleich in der Reihe nach ___ sortieren: Klasse eins und Klasse zwei.', l:'Güteklasse', e:'Nach Güteklasse sortieren spart einen ganzen Arbeitsgang in der Halle. Deshalb sortiert man schon am Feld.'},
      {typ:'luecke', f:'Nummer zwölf ___ nicht und steht abseits von der Herde.', l:'frisst', e:'frisst nicht ist das erste und wichtigste Zeichen bei Nutztieren. Bei Tieren sagt man fressen, nicht essen.'},
      {typ:'luecke', f:'Vor dem Ansetzen der Spritzbrühe die Persönliche ___ anlegen.', l:'Schutzausrüstung', e:'Persönliche Schutzausrüstung, kurz PSA: Handschuhe, Schutzbrille, Anzug, bei manchen Mitteln auch Maske.'},
      {typ:'bausteine', l:'Ich habe die Zapfwelle abgeschaltet und den Motor ausgemacht.', teile:['Ich','habe','die','Zapfwelle','abgeschaltet','und','den','Motor','ausgemacht'], e:'Zwei Handlungen mit und verbunden: die Partizipien stehen jeweils am Ende ihres Teils.'},
      {typ:'bausteine', l:'Das Euter ist hinten rechts gerötet.', teile:['Das','Euter','ist','hinten','rechts','gerötet'], e:'Erst die Sache, dann das Verb, dann die Ortsangabe. Bei Tiermeldungen ist die Seitenangabe wichtig: hinten rechts, vorne links.'},
      {typ:'bausteine', l:'Habe ich das richtig verstanden, dass ich Reihe zwölf bis achtzehn mache?', teile:['Habe','ich','das','richtig','verstanden','dass','ich','Reihe','zwölf','bis','achtzehn','mache'], e:'Im Nebensatz mit dass steht das Verb ganz hinten: … mache. Dieser Satz rettet dir viele Arbeitstage.'},
      {typ:'paare', p:[['die Steige','flache Kiste für Obst und Gemüse'],['der Schlag','großes zusammenhängendes Feldstück'],['die Zapfwelle','treibt das Anbaugerät vom Traktor an'],['die Tränke','wo die Tiere trinken'],['der Sachkundenachweis','Erlaubnis, Pflanzenschutzmittel anzuwenden']], e:'Diese fünf Wörter hörst du in der ersten Woche. Lerne sie mit Artikel als Ganzes.'},
      {typ:'paare', p:[['sie lahmt','läuft ungleichmäßig, Problem an Klaue oder Bein'],['sie frisst nicht','erstes Zeichen für Krankheit'],['das Euter ist heiß','Hinweis auf eine Entzündung'],['eine Kalbung steht an','die Geburt kommt, das Tier braucht Aufsicht']], e:'Vier Beobachtungen, vier Meldungen. Sag immer dazu, seit wann — das ist die erste Rückfrage.'},
      {typ:'hoeren', text:'Guten Morgen. Ihr geht heute in die Reihen zwölf bis achtzehn. Nur reif pflücken, ganz rot bis zur Spitze. Klasse eins kommt in die grüne Steige, Klasse zwei in die graue. Pause ist um halb zehn.', f:'Wohin kommt Klasse zwei?', o:['in die grüne Steige','in die graue Steige','in den schwarzen Eimer'], l:1, e:'Bei Anweisungen mit Farben lohnt sich das Wiederholen: grün ist Klasse eins, grau ist Klasse zwei.'},
      {typ:'hoeren', text:'Achtung, das Mittel ist hautreizend. Beim Ansetzen der Brühe Handschuhe und Schutzbrille tragen. Die Wartezeit beträgt sieben Tage, das Feld darf vorher nicht betreten werden.', f:'Was gilt für das Feld nach der Anwendung?', o:['Es darf sieben Tage nicht betreten werden','Es darf sofort betreten werden','Es darf nur mit Schutzbrille betreten werden'], l:0, e:'Wartezeit und Betretungsverbot sind zwei getrennte Auflagen. Im Zweifel im Sicherheitsdatenblatt nachsehen.'},
      {typ:'sprechen', f:'Sag die Rückfrage: Habe ich das richtig verstanden, Reihe zwölf bis achtzehn?', l:'Habe ich das richtig verstanden', e:'Die Stimme geht am Ende nach oben. Sprich die Zahlen langsam und einzeln, dann hört der Vorarbeiter den Fehler sofort.'},
      {typ:'sprechen', f:'Sag deine Grenze freundlich: Dafür bin ich nicht eingewiesen.', l:'Dafür bin ich nicht eingewiesen', e:'Ruhig und ohne Entschuldigung sprechen. Das ist kein Nein zur Arbeit, sondern ein Ja zur Sicherheit — und rechtlich stehst du damit richtig.'},
      {typ:'ordnen', l:['Ich schalte die Zapfwelle ab und mache den Motor aus.','Ich schaue von außen, was klemmt.','Ich melde die Störung mit Uhrzeit.','Ich warte auf die Einweisung, bevor ich etwas anfasse.','Ich trage die Standzeit auf dem Stundenzettel ein.'], f:'Bring die Maschinenstörung in die richtige Reihenfolge.', e:'Abschalten kommt immer vor Anschauen. Und der letzte Schritt wird am häufigsten vergessen — ohne Eintrag gibt es die Standzeit offiziell nicht.'},
      {typ:'artikel', w:'Steige', l:'die', e:'die Steige, Plural die Steigen. Wörter auf -e sind sehr oft feminin.'},
      {typ:'artikel', w:'Schlag', l:'der', e:'der Schlag, Plural die Schläge. Gemeint ist das Feldstück, nicht der Schlag mit der Hand.'},
      {typ:'artikel', w:'Spritzprotokoll', l:'das', e:'das Protokoll, also auch das Spritzprotokoll. Das letzte Wort im Kompositum bestimmt den Artikel.'}
    ],
    schreiben:{
      auf:'Schreibe eine kurze Schadensmeldung an den Betriebsleiter: Die Ballenpresse hat eine Störung, ihr steht seit vierzehn Uhr auf dem Schlag hinter dem Wald.',
      punkte:['Wann und wo es passiert ist','Was du beobachtet hast','Was du sofort getan hast','Was du jetzt vom Betrieb brauchst'],
      hilfe:'Schreibe kurz und in der Vergangenheit, fünf bis sieben Sätze reichen. Beobachtung statt Vermutung: nicht „die Presse ist kaputt", sondern „die Presse macht ein lautes Schlagen, der letzte Ballen kam schief heraus". Fang die Punkte so an: „Am … gegen … Uhr …" · „Mir ist aufgefallen, dass …" · „Ich habe sofort …" · „Ich brauche …". Nenne immer Uhrzeit, Ort und Menge: vierzehn Uhr, Schlag hinter dem Wald, ab Ballen zwanzig. Die Anrede ist Sie, der Schluss schlicht: Mit freundlichen Grüßen.'
    }
  },
  /* ===================== 20 · SOZIALARBEIT UND BETREUUNG ===================== */
  {
    id:'sozial',
    t:'Sozialarbeit und Betreuung',
    unter:'Soziale Arbeit, Migrationsberatung, Eingliederungshilfe, Schulsozialarbeit, Betreuung',
    lvl:'C1',
    pruef:'Keine Fachsprachprüfung. Einschlägig: telc C1 Hochschule, Goethe-Zertifikat C1, DSH-2, Deutsch-Test für den Beruf C1.',
    warum:'Die Soziale Arbeit steht auf Rang vier der KOFA-Engpassliste 2026 mit einer Engpassintensität von 85 von 100 und gilt als chronisch unterversorgt. Zugleich ist Mehrsprachigkeit hier ein echter Qualifikationsvorteil: in der Migrationsberatung, der Eingliederungshilfe und der Schulsozialarbeit ist deine Herkunftssprache Teil der fachlichen Eignung. Beim Niveau ist Vorsicht geboten: das verlangte C1 stammt aus der Berliner Verwaltungspraxis zum Sozialberufe-Anerkennungsgesetz, das selbst nur „die erforderlichen Kenntnisse in der deutschen Sprache" fordert. Bundesweit ist das nicht einheitlich geregelt — kläre dein Niveau bei der Landesanerkennungsstelle einzeln.',
    handlungen:[
      {t:'Die Erstberatung führen', e:'Das Anliegen klären, den Auftrag aushandeln, die eigene Zuständigkeit und ihre Grenzen benennen.', lvl:'C1'},
      {t:'Nicht-direktiv gesprächsführen', e:'Aktiv zuhören, paraphrasieren, spiegeln, offene Fragen stellen, am Ende zusammenfassen — ohne Ratschläge zu verteilen.', lvl:'C1'},
      {t:'Einen Bescheid erschließen und übersetzen', e:'Verfügungssatz, Begründung und Rechtsbehelfsbelehrung lesen und in Alltagssprache erklären, ohne den Inhalt zu verfälschen.', lvl:'C1'},
      {t:'Anträge gemeinsam ausfüllen und Widerspruch vorbereiten', e:'Formulare Feld für Feld durchgehen, Nachweise sammeln, die Frist berechnen und den Widerspruch begründen.', lvl:'C1'},
      {t:'Hilfeplan und Bericht schreiben', e:'Ziele operationalisiert formulieren und Berichte an Jobcenter, Jugendamt oder Betreuungsgericht verfassen.', lvl:'C1'},
      {t:'Den Fall in der Fallkonferenz vorstellen', e:'In fünf Minuten Sachstand, Einschätzung und Bedarf darlegen, Zuständigkeiten aushandeln, Hilfen koordinieren.', lvl:'C1'},
      {t:'Krisenintervention und Deeskalation', e:'Bei Aggression, Suizidalität oder drohender Wohnungslosigkeit ruhig, klar und handlungsleitend sprechen.', lvl:'C1'},
      {t:'Zwischen den Registern wechseln', e:'Verwaltungssprache in Alltagssprache übersetzen und zurück — und dabei die eigene Rolle nicht mit der einer Dolmetscherin verwechseln.', lvl:'C1'},
      {t:'Nähe und Distanz sprachlich regeln', e:'Freundlich und zugewandt bleiben und trotzdem Schweigepflicht, Datenschutz und die eigene Rolle klar benennen.', lvl:'C1'},
      {t:'Projektmittel beantragen und abrechnen', e:'Bedarf, Ziele und Wirkung im Antrag begründen und am Ende den Verwendungsnachweis schreiben.', lvl:'C1'}
    ],
    chunks:[
      {de:'das Anliegen klären', hi:'der erste Schritt jeder Beratung: worum geht es wirklich', bsp:'Bevor wir Formulare ausfüllen, klären wir Ihr Anliegen.'},
      {de:'den Auftrag aushandeln', hi:'gemeinsam festlegen, woran ihr arbeitet — Beratung ist keine Erledigung', bsp:'Lassen Sie uns den Auftrag für heute aushandeln.'},
      {de:'dafür bin ich nicht zuständig', hi:'Grenze benennen und trotzdem weitervermitteln', bsp:'Dafür bin ich nicht zuständig, aber ich sage Ihnen, wer es ist.'},
      {de:'an eine Fachstelle verweisen', hi:'die geordnete Weitergabe, kein Abschieben', bsp:'Bei Schulden verweise ich Sie an die Schuldnerberatung im Haus.'},
      {de:'habe ich Sie richtig verstanden, dass …', hi:'Paraphrase — der Kernsatz nicht-direktiver Gesprächsführung', bsp:'Habe ich Sie richtig verstanden, dass Sie vor allem die Kündigung fürchten?'},
      {de:'ich fasse noch einmal zusammen', hi:'am Ende jedes Beratungsabschnitts', bsp:'Ich fasse noch einmal zusammen, was wir vereinbart haben.'},
      {de:'was wäre für Sie ein guter erster Schritt', hi:'offene Frage statt Ratschlag', bsp:'Was wäre für Sie ein guter erster Schritt bis nächste Woche?'},
      {de:'ich höre da eine große Sorge heraus', hi:'Spiegeln — du benennst das Gefühl, ohne zu deuten', bsp:'Ich höre da eine große Sorge um Ihre Kinder heraus.'},
      {de:'den Bescheid durchgehen', hi:'Seite für Seite gemeinsam lesen', bsp:'Wir gehen den Bescheid jetzt zusammen durch, Absatz für Absatz.'},
      {de:'im Verfügungssatz steht …', hi:'der Teil ganz vorn, der die Entscheidung enthält', bsp:'Im Verfügungssatz steht, dass der Antrag abgelehnt wurde.'},
      {de:'die Begründung stützt sich auf …', hi:'wo die Behörde erklärt, warum sie so entschieden hat', bsp:'Die Begründung stützt sich auf fehlende Nachweise, nicht auf Ihr Einkommen.'},
      {de:'die Rechtsbehelfsbelehrung lesen', hi:'ganz am Ende: wie und bis wann man widersprechen kann', bsp:'Wichtig ist die Rechtsbehelfsbelehrung ganz unten auf der letzten Seite.'},
      {de:'die Frist läuft ab dem …', hi:'meist ein Monat nach Bekanntgabe', bsp:'Die Frist läuft ab dem Tag nach der Zustellung, also bis zum vierzehnten.'},
      {de:'Widerspruch einlegen', hi:'schriftlich und fristgerecht, Begründung darf nachgereicht werden', bsp:'Wir legen Widerspruch ein und reichen die Begründung nach.'},
      {de:'den Antrag gemeinsam ausfüllen', hi:'du hilfst beim Verstehen, unterschreiben tut die Klientin', bsp:'Wir füllen den Antrag gemeinsam aus, unterschreiben müssen Sie selbst.'},
      {de:'die Mitwirkungspflicht erklären', hi:'was die Klientin liefern muss, damit die Behörde entscheidet', bsp:'Ich erkläre Ihnen kurz die Mitwirkungspflicht, sonst wird der Antrag versagt.'},
      {de:'Ziele operationalisiert formulieren', hi:'nachprüfbar statt gut gemeint: wer, was, bis wann, woran erkennbar', bsp:'Im Hilfeplan formulieren wir die Ziele operationalisiert.'},
      {de:'einen Hilfeplan fortschreiben', hi:'den bestehenden Plan überarbeiten statt neu schreiben', bsp:'Im Juni schreiben wir den Hilfeplan gemeinsam fort.'},
      {de:'den Sachstand darstellen', hi:'im Bericht und in der Fallkonferenz: nüchtern, ohne Wertung', bsp:'Ich stelle kurz den Sachstand seit dem letzten Hilfeplangespräch dar.'},
      {de:'aus fachlicher Sicht empfehle ich …', hi:'so trennst du Einschätzung von Beobachtung', bsp:'Aus fachlicher Sicht empfehle ich eine ambulante Hilfe zur Erziehung.'},
      {de:'den Fall in der Fallkonferenz vorstellen', hi:'fünf Minuten, dann Rückfragen', bsp:'Ich stelle den Fall am Donnerstag in der Fallkonferenz vor.'},
      {de:'die Zuständigkeit abgrenzen', hi:'wer macht was — der häufigste Konflikt im Netzwerk', bsp:'Lassen Sie uns die Zuständigkeiten zwischen Jugendamt und Klinik abgrenzen.'},
      {de:'ich merke, dass Sie wütend sind', hi:'Deeskalation beginnt mit Benennen, nicht mit Beruhigen', bsp:'Ich merke, dass Sie wütend sind. Das darf sein, ich höre Ihnen zu.'},
      {de:'ich möchte, dass Sie sich setzen', hi:'klare Ich-Botschaft statt Befehl in der Krise', bsp:'Ich möchte, dass Sie sich setzen, dann können wir das in Ruhe klären.'},
      {de:'so kann ich nicht mit Ihnen sprechen', hi:'die Grenze, wenn es bedrohlich wird — ruhig und ohne Drohung', bsp:'So kann ich nicht mit Ihnen sprechen. Ich unterbreche das Gespräch für zehn Minuten.'},
      {de:'haben Sie konkrete Gedanken, sich etwas anzutun', hi:'bei Suizidalität direkt und ruhig fragen, nicht andeuten', bsp:'Ich frage Sie direkt: Haben Sie konkrete Gedanken, sich etwas anzutun?'},
      {de:'die drohende Wohnungslosigkeit abwenden', hi:'Fachbegriff für alles, was vor der Räumung passiert', bsp:'Wir versuchen, die drohende Wohnungslosigkeit noch abzuwenden.'},
      {de:'die Schweigepflicht gilt auch hier', hi:'zu Beginn jeder Beratung einmal aussprechen', bsp:'Die Schweigepflicht gilt auch hier, nichts geht ohne Ihre Zustimmung raus.'},
      {de:'eine Schweigepflichtentbindung unterschreiben', hi:'nötig, bevor du mit anderen Stellen sprichst', bsp:'Für das Gespräch mit der Schule brauche ich eine Schweigepflichtentbindung.'},
      {de:'Nähe und Distanz wahren', hi:'freundlich sein, ohne Freundin zu werden', bsp:'In der Betreuung ist es wichtig, Nähe und Distanz zu wahren.'},
      {de:'auf Augenhöhe beraten', hi:'die Klientin entscheidet, du stellst Wissen bereit', bsp:'Wir beraten auf Augenhöhe, entscheiden müssen Sie.'},
      {de:'im Alltag heißt das …', hi:'die Brücke von der Verwaltungssprache in die Alltagssprache', bsp:'Im Bescheid steht Versagung. Im Alltag heißt das: Sie bekommen kein Geld, weil Unterlagen fehlen.'},
      {de:'Projektmittel beantragen', hi:'Antrag an Kommune, Land oder Stiftung', bsp:'Wir beantragen Projektmittel für die Sprachcafés im nächsten Jahr.'},
      {de:'den Verwendungsnachweis erbringen', hi:'am Projektende belegen, wofür das Geld ausgegeben wurde', bsp:'Bis Ende März müssen wir den Verwendungsnachweis erbringen.'},
      {de:'die Fallakte dokumentieren', hi:'was besprochen, vereinbart und veranlasst wurde', bsp:'Ich dokumentiere das Gespräch heute noch in der Fallakte.'}
    ],
    dialoge:[
      {
        id:'sozial-erstberatung',
        titel:'Die Erstberatung mit Auftragsklärung',
        lvl:'C1',
        dauer:'5 Min',
        ort:'Dienstagvormittag in der Migrationsberatung. Frau Yilmaz kommt ohne Termin, hat einen Umschlag vom Jobcenter dabei und beginnt sofort über ihren Vermieter, ihren Sohn und das Amt gleichzeitig zu sprechen.',
        schritte:[
          {amanda:'Ich weiß gar nicht mehr weiter. Der Vermieter droht, mein Sohn geht nicht zur Schule, und dann kam dieser Brief.', hinweis:'Ordne, ohne zu unterbrechen: benenne die Themen und lass sie priorisieren.', beispiel:'Das ist eine Menge auf einmal. Ich höre drei Themen: die Wohnung, Ihr Sohn und den Brief vom Jobcenter. Womit sollen wir heute anfangen?', redemittel:['Ich höre drei Themen heraus …','Das ist viel auf einmal.','Womit sollen wir heute anfangen?']},
          {amanda:'Mit dem Brief, glaube ich. Da steht eine Frist drin und ich verstehe das nicht.', hinweis:'Bestätige die Priorität und kläre, was die Klientin von dir konkret erwartet.', beispiel:'Gut, dann nehmen wir den Brief. Erwarten Sie von mir, dass ich Ihnen den Bescheid erkläre, oder dass wir heute schon etwas dagegen unternehmen?', redemittel:['Dann nehmen wir …','Was erwarten Sie heute konkret von mir?','Geht es Ihnen eher um Verstehen oder um Handeln?']},
          {amanda:'Beides. Aber vor allem: Können Sie das für mich regeln?', hinweis:'Beschreibe deine Rolle und ihre Grenze — freundlich, aber unmissverständlich.', beispiel:'Ich kann Sie beraten und den Widerspruch mit Ihnen vorbereiten. Unterschreiben und einreichen müssen Sie selbst, ich vertrete Sie nicht rechtlich.', redemittel:['Ich kann … und ich kann nicht …','Unterschreiben müssen Sie selbst.','Ich vertrete Sie nicht rechtlich, dafür wäre …']},
          {amanda:'Und was ist mit meinem Sohn? Die Schule ruft dauernd an.', hinweis:'Nimm das Thema ernst, schiebe es aber bewusst und terminiert nach hinten.', beispiel:'Das notiere ich als Thema für den nächsten Termin. Wenn Sie einverstanden sind, hole ich dazu die Schulsozialarbeiterin dazu — dafür bräuchte ich eine Schweigepflichtentbindung.', redemittel:['Das notiere ich für den nächsten Termin.','Wenn Sie einverstanden sind …','Dafür bräuchte ich eine Schweigepflichtentbindung.']},
          {amanda:'Gut. Also heute nur der Brief.', hinweis:'Fasse den ausgehandelten Auftrag zusammen und mache ihn überprüfbar.', beispiel:'Dann halten wir fest: Heute klären wir den Bescheid und formulieren den Widerspruch, Frist ist der vierzehnte. Der Termin zur Schule folgt am Donnerstag. Passt das so für Sie?', redemittel:['Dann halten wir fest …','Frist ist der …','Passt das so für Sie?']}
        ]
      },
      {
        id:'sozial-bescheid',
        titel:'Einen Bescheid erklären',
        lvl:'C1',
        dauer:'5 Min',
        ort:'Dieselbe Beratung, zwanzig Minuten später. Auf dem Tisch liegt ein Ablehnungsbescheid des Jobcenters. Frau Yilmaz hat ihn dreimal gelesen und nichts verstanden.',
        schritte:[
          {amanda:'Da steht so viel. Was heißt das denn jetzt überhaupt?', hinweis:'Gib zuerst das Ergebnis in einem Alltagssatz, dann erst die Struktur.', beispiel:'Kurz gesagt: Sie bekommen die Leistung im Moment nicht. Das steht ganz vorn, das nennt sich Verfügungssatz. Warum, steht darunter in der Begründung.', redemittel:['Kurz gesagt …','Ganz vorn steht die Entscheidung …','Darunter steht, warum.']},
          {amanda:'Aber warum denn? Ich habe doch alles abgegeben.', hinweis:'Lies die Begründung vor und übersetze den entscheidenden Begriff.', beispiel:'Hier steht: Versagung wegen fehlender Mitwirkung. Im Alltag heißt das: Das Amt sagt, es fehlen Unterlagen — nicht, dass Sie kein Recht darauf haben.', redemittel:['Hier steht …','Im Alltag heißt das …','Das ist ein Unterschied, denn …']},
          {amanda:'Und was mache ich jetzt? Ist das endgültig?', hinweis:'Zeig die Rechtsbehelfsbelehrung und rechne die Frist konkret aus.', beispiel:'Nein. Ganz unten steht die Rechtsbehelfsbelehrung: Sie können innerhalb eines Monats Widerspruch einlegen. Der Bescheid ist vom vierten, die Frist endet also am fünften des nächsten Monats.', redemittel:['Ganz unten steht …','Sie können innerhalb eines Monats …','Die Frist endet am …']},
          {amanda:'Ich weiß aber nicht, was ich da schreiben soll.', hinweis:'Erkläre, dass Einlegen und Begründen zwei Schritte sind — das nimmt Druck.', beispiel:'Das ist gut zu wissen: Erst legen wir Widerspruch ein, das sind drei Zeilen. Die Begründung dürfen wir nachreichen, wenn die Unterlagen da sind.', redemittel:['Das sind zwei Schritte.','Erst … , dann …','Die Begründung dürfen wir nachreichen.']},
          {amanda:'Also habe ich noch eine Chance?', hinweis:'Ehrlich bleiben: Mut machen, aber nichts versprechen. Und die Vereinbarung festhalten.', beispiel:'Versprechen kann ich Ihnen nichts, aber die Aussichten sind gut, wenn die Unterlagen kommen. Wir vereinbaren: Sie bringen bis Freitag die Kontoauszüge, ich schreibe bis dahin den Widerspruch.', redemittel:['Versprechen kann ich Ihnen nichts.','Die Aussichten sind gut, wenn …','Wir vereinbaren: Sie … , ich …']}
        ]
      },
      {
        id:'sozial-deeskalation',
        titel:'Deeskalation im Wartebereich',
        lvl:'C1',
        dauer:'5 Min',
        ort:'Freitag kurz vor Schluss. Herr Novak wartet seit einer Stunde, sein Termin ist ausgefallen. Er steht mitten im Flur, spricht sehr laut und schlägt mit der flachen Hand auf den Tresen. Andere Wartende schauen weg.',
        schritte:[
          {amanda:'Eine Stunde! Ich sitze hier eine Stunde und keiner sagt mir was! Das ist eine Frechheit!', hinweis:'Sprich ihn mit Namen an, benenne das Gefühl, verteidige dich nicht.', beispiel:'Herr Novak, ich sehe, dass Sie wütend sind, und ich kann das verstehen. Eine Stunde warten ohne Information ist zu viel.', redemittel:['Herr Novak, ich sehe, dass …','Ich kann das verstehen.','Das ist zu viel, da haben Sie recht.']},
          {amanda:'Verstehen! Alle verstehen! Und dann passiert nichts!', hinweis:'Reduziere die Reizschwelle: Ich-Botschaft, konkreter Vorschlag, Ortswechsel.', beispiel:'Ich möchte, dass wir das klären. Kommen Sie bitte mit ins Zimmer drei, da sitzen wir und ich schaue sofort in Ihre Akte.', redemittel:['Ich möchte, dass wir das klären.','Kommen Sie bitte mit …','Ich schaue sofort nach.']},
          {amanda:'Warum? Damit mich hier keiner hört?', hinweis:'Keine Rechtfertigung, klare Grenze bei der Lautstärke und beim Schlagen.', beispiel:'Damit wir in Ruhe reden können. Und ich sage Ihnen offen: Wenn Sie weiter auf den Tresen schlagen, muss ich das Gespräch beenden. Das möchte ich nicht.', redemittel:['Damit wir in Ruhe reden können.','Ich sage Ihnen offen …','Wenn … , dann muss ich … . Das möchte ich nicht.']},
          {amanda:'Ist ja gut. Aber ich brauche heute eine Antwort wegen der Wohnung.', hinweis:'Greif das Sachthema auf und trenne, was heute geht und was nicht.', beispiel:'Danke. Zur Wohnung: Die Räumungsklage kann ich heute nicht stoppen. Was heute noch geht, ist ein Anruf bei der Fachstelle zur Vermeidung von Wohnungslosigkeit.', redemittel:['Danke.','Was heute nicht geht, ist …','Was heute noch geht, ist …']},
          {amanda:'Dann rufen Sie an. Und was, wenn die auch nichts machen?', hinweis:'Vereinbare einen konkreten nächsten Schritt mit Termin — Sicherheit senkt Aggression.', beispiel:'Dann sehen wir uns am Montag um neun und gehen den Widerspruch durch. Ich rufe jetzt an, Sie hören mit. Und ich schreibe Ihnen auf, was wir vereinbart haben.', redemittel:['Wir sehen uns am … um …','Ich rufe jetzt an, Sie hören mit.','Ich schreibe Ihnen auf, was wir vereinbart haben.']}
        ]
      }
    ],
    saetze:[
      {de:'Womit sollen wir heute anfangen?', wann:'wenn jemand mehrere Probleme gleichzeitig auf den Tisch legt'},
      {de:'Habe ich Sie richtig verstanden, dass …?', wann:'Paraphrase — mindestens dreimal pro Beratungsgespräch'},
      {de:'Was erwarten Sie heute konkret von mir?', wann:'die Auftragsklärung, ohne die jede Beratung ins Leere läuft'},
      {de:'Dafür bin ich nicht zuständig, aber ich sage Ihnen, wer es ist.', wann:'wenn das Anliegen außerhalb deines Auftrags liegt'},
      {de:'Ich kann Sie beraten, entscheiden müssen Sie selbst.', wann:'wenn jemand will, dass du es für ihn regelst'},
      {de:'Im Alltag heißt das: …', wann:'beim Übersetzen von Verwaltungssprache — der wichtigste Satz im Beruf'},
      {de:'Die Frist endet am …', wann:'immer mit konkretem Datum, nie mit „in einem Monat"'},
      {de:'Versprechen kann ich Ihnen nichts, aber …', wann:'wenn du Hoffnung machen willst, ohne unehrlich zu werden'},
      {de:'Die Schweigepflicht gilt auch hier.', wann:'in den ersten fünf Minuten jeder Erstberatung'},
      {de:'Dafür bräuchte ich Ihre Schweigepflichtentbindung.', wann:'bevor du mit Schule, Klinik oder Amt sprichst'},
      {de:'Ich sehe, dass Sie wütend sind.', wann:'als erster Satz in der Deeskalation — benennen statt beruhigen'},
      {de:'Wenn Sie weiter schreien, muss ich das Gespräch beenden. Das möchte ich nicht.', wann:'die klare Grenze, ruhig gesprochen, ohne Drohton'},
      {de:'Ich frage Sie direkt: Haben Sie Gedanken, sich etwas anzutun?', wann:'bei Hinweisen auf Suizidalität — direkt fragen ist richtig, nicht gefährlich'},
      {de:'Aus fachlicher Sicht empfehle ich …', wann:'in Fallkonferenz und Bericht, wenn du von Beobachtung zu Einschätzung wechselst'},
      {de:'Ich fasse zusammen, was wir vereinbart haben.', wann:'am Ende jedes Gesprächs — und dann so in die Fallakte'}
    ],
    ueb:[
      {typ:'wahl', f:'Eine Klientin nennt in fünf Minuten vier Probleme. Was tust du zuerst?', o:['Du beginnst mit dem, was du am besten kannst','Du benennst die Themen und lässt sie priorisieren','Du bearbeitest alle vier parallel'], l:1, e:'Auftragsklärung heißt: sortieren und die Klientin wählen lassen. Wer selbst priorisiert, arbeitet am eigenen Auftrag, nicht am ihren.'},
      {typ:'wahl', f:'Wo steht in einem Bescheid, wie lange du Widerspruch einlegen kannst?', o:['Im Verfügungssatz ganz vorn','In der Begründung','In der Rechtsbehelfsbelehrung am Ende'], l:2, e:'Die Rechtsbehelfsbelehrung steht immer am Schluss. Fehlt sie oder ist sie falsch, verlängert sich die Frist auf ein Jahr — deshalb liest du sie zuerst.'},
      {typ:'wahl', f:'Ein Klient schreit im Wartebereich. Welcher Einstieg deeskaliert?', o:['Beruhigen Sie sich bitte sofort.','Herr Novak, ich sehe, dass Sie wütend sind.','Wenn Sie so weitermachen, rufe ich den Sicherheitsdienst.'], l:1, e:'Name plus Benennen des Gefühls senkt die Erregung. „Beruhigen Sie sich" erhöht sie fast immer, weil es das Gefühl abspricht.'},
      {typ:'luecke', f:'Bevor wir Formulare ausfüllen, ___ wir Ihr Anliegen.', l:'klären', e:'das Anliegen klären ist der erste Schritt jeder Beratung — vor jedem Formular.'},
      {typ:'luecke', f:'Im Bescheid steht Versagung. Im ___ heißt das: Es fehlen Unterlagen.', l:'Alltag', e:'Im Alltag heißt das … ist deine Standardbrücke von der Verwaltungs- in die Alltagssprache.'},
      {typ:'luecke', f:'Für das Gespräch mit der Schule brauche ich eine ___.', l:'Schweigepflichtentbindung', e:'Ohne schriftliche Entbindung darfst du mit keiner anderen Stelle über den Fall sprechen — auch nicht kurz am Telefon.'},
      {typ:'luecke', f:'Im Hilfeplan formulieren wir die Ziele ___, also nachprüfbar.', l:'operationalisiert', e:'Operationalisiert heißt: wer, was, bis wann, woran erkennbar. „Frau M. soll stabiler werden" ist kein Ziel.'},
      {typ:'bausteine', l:'Habe ich Sie richtig verstanden, dass Sie vor allem die Kündigung fürchten?', teile:['Habe','ich','Sie','richtig','verstanden','dass','Sie','vor','allem','die','Kündigung','fürchten'], e:'Im Nebensatz mit dass steht das Verb am Ende. Diese Paraphrase prüft dein Verstehen und gibt der Klientin die Deutungshoheit zurück.'},
      {typ:'bausteine', l:'Ich kann Sie beraten, entscheiden müssen Sie selbst.', teile:['Ich','kann','Sie','beraten','entscheiden','müssen','Sie','selbst'], e:'Zwei Hauptsätze, im zweiten steht das Vollverb vorn zur Betonung. Der Satz definiert deine Rolle in acht Wörtern.'},
      {typ:'bausteine', l:'Wenn Sie weiter auf den Tresen schlagen, muss ich das Gespräch beenden.', teile:['Wenn','Sie','weiter','auf','den','Tresen','schlagen','muss','ich','das','Gespräch','beenden'], e:'Nach dem Wenn-Satz folgt das Verb sofort: muss ich. Klare Bedingung, klare Folge — genau das braucht Deeskalation.'},
      {typ:'paare', p:[['der Verfügungssatz','die Entscheidung ganz vorn im Bescheid'],['die Begründung','warum die Behörde so entschieden hat'],['die Rechtsbehelfsbelehrung','wie und bis wann man widersprechen kann'],['die Mitwirkungspflicht','was die Klientin selbst beibringen muss'],['die Versagung','Ablehnung, weil Unterlagen fehlen']], e:'Diese fünf Begriffe stehen in fast jedem Bescheid. Wer sie kennt, liest jeden Bescheid in zwei Minuten.'},
      {typ:'paare', p:[['aktives Zuhören','signalisieren, dass du folgst, ohne zu bewerten'],['Paraphrasieren','mit eigenen Worten wiedergeben und rückfragen'],['Spiegeln','das Gefühl benennen, das du wahrnimmst'],['offene Frage','Frage, die nicht mit ja oder nein zu beantworten ist'],['Zusammenfassen','den Stand bündeln und Vereinbarungen festhalten']], e:'Die fünf Grundtechniken nicht-direktiver Gesprächsführung. Auf C1 geht es nicht darum, sie zu kennen, sondern sie flüssig zu formulieren.'},
      {typ:'hoeren', text:'Ich kann Sie beraten und den Widerspruch mit Ihnen vorbereiten. Unterschreiben und einreichen müssen Sie selbst. Rechtlich vertreten darf ich Sie nicht, dafür wäre eine Anwältin zuständig.', f:'Was macht die Beraterin nicht?', o:['Den Widerspruch vorbereiten','Die Klientin rechtlich vertreten','Beraten'], l:1, e:'Rollenklarheit ist Pflicht. Rechtsberatung im engeren Sinn ist Anwältinnen vorbehalten — das musst du sagen können, ohne die Klientin abzuweisen.'},
      {typ:'hoeren', text:'Der Bescheid ist vom vierten Mai. Sie können innerhalb eines Monats Widerspruch einlegen. Die Begründung dürfen Sie nachreichen, sobald die Unterlagen vorliegen.', f:'Was gilt für die Begründung?', o:['Sie muss sofort mit eingereicht werden','Sie darf nachgereicht werden','Sie ist nicht nötig'], l:1, e:'Widerspruch einlegen und begründen sind zwei Schritte. Das zu wissen rettet Fristen — die drei Zeilen gehen immer noch am letzten Tag raus.'},
      {typ:'sprechen', f:'Sag die Paraphrase: Habe ich Sie richtig verstanden, dass Sie vor allem die Kündigung fürchten?', l:'Habe ich Sie richtig verstanden', e:'Sprich langsam und geh am Ende mit der Stimme nach oben. Eine Paraphrase ist eine echte Frage, keine Feststellung — die Klientin muss widersprechen können.'},
      {typ:'sprechen', f:'Sag die Grenze ruhig: So kann ich nicht mit Ihnen sprechen. Ich unterbreche für zehn Minuten.', l:'So kann ich nicht mit Ihnen sprechen', e:'Leiser und langsamer werden, nicht lauter. Die Stimme trägt hier mehr als der Inhalt: ruhig, tief, ohne Drohton.'},
      {typ:'ordnen', l:['Ich begrüße und nenne Schweigepflicht und Rahmen.','Ich lasse das Anliegen schildern und höre aktiv zu.','Ich benenne die Themen und lasse priorisieren.','Ich handle den Auftrag aus und benenne meine Grenzen.','Ich fasse zusammen und vereinbare den nächsten Schritt.'], f:'Bring die Erstberatung in die richtige Reihenfolge.', e:'Der Rahmen kommt vor dem Inhalt, der Auftrag vor der Bearbeitung. Wer den vierten Schritt überspringt, sitzt in Woche drei an einem Problem, das die Klientin nie beauftragt hat.'},
      {typ:'artikel', w:'Bescheid', l:'der', e:'der Bescheid, Plural die Bescheide. Dazu: der Ablehnungsbescheid, der Widerspruchsbescheid.'},
      {typ:'artikel', w:'Rechtsbehelfsbelehrung', l:'die', e:'die Belehrung, also auch die Rechtsbehelfsbelehrung. Wörter auf -ung sind immer feminin.'},
      {typ:'artikel', w:'Hilfeplan', l:'der', e:'der Plan, also auch der Hilfeplan. Plural: die Hilfepläne.'}
    ],
    schreiben:{
      auf:'Schreibe den Sachstandsbericht an das Jugendamt zur Fortschreibung des Hilfeplans für die Familie Y.',
      punkte:['Sachstand seit dem letzten Hilfeplangespräch','Welche Ziele erreicht wurden und welche nicht','Deine fachliche Einschätzung','Der empfohlene weitere Hilfebedarf'],
      hilfe:'Trenne strikt Beobachtung und Bewertung: erst was war, dann was du daraus schließt. Fang die Punkte so an: „Seit dem Hilfeplangespräch am … " · „Das Ziel … wurde teilweise erreicht, erkennbar daran, dass …" · „Aus fachlicher Sicht …" · „Ich empfehle daher …". Formuliere Ziele operationalisiert, also mit Person, Handlung, Zeitpunkt und Erkennungsmerkmal. Schreibe im Behördenregister, aber ohne Nebelwörter — Passivkonstruktionen wie „ist vorzulegen" sind hier richtig, Floskeln wie „im Rahmen der Möglichkeiten" nicht. Eine bis anderthalb Seiten, Anrede Sie, Schluss: Mit freundlichen Grüßen.'
    }
  },

];
