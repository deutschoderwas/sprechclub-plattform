/* ============================================================
   deutschoderwas club — SPRECHEN B2 (Goethe-Zertifikat B2 · telc B2)

   Aufbau nach der offiziellen Testbeschreibung: zwei Teile,
   circa fünfzehn Minuten, Paarprüfung.

     Teil 1  Vortrag halten — ein Thema in etwa vier Minuten:
             Einleitung, zwei bis drei Aspekte mit Beispielen, Fazit
     Teil 2  Diskussion — mit der Partnerin oder dem Partner eine
             Lösung finden: vorschlagen, widersprechen, einräumen,
             sich einigen

   Der Sprung von B1 auf B2: In B1 erzählt man von sich und arbeitet
   fünf Folien ab. In B2 argumentiert man frei. Es gibt keine
   Stichpunktliste mehr, die einen durch den Vortrag trägt — die
   Gliederung muss aus dem eigenen Kopf kommen. Und in der Diskussion
   reicht Zustimmung nicht: Wer nie widerspricht, nie einräumt und nie
   nachfragt, zeigt der Prüferin schlicht nicht, was sie sehen will.

   Der häufigste Fehler auf B2 ist die Behauptung ohne Beleg.
   „Homeoffice ist besser" ist kein Argument. Erst mit Begründung und
   Beispiel wird daraus eines — und genau dafür gibt es die Punkte.

   Punkte: Teil 1 fünfzehn, Teil 2 fünfzehn — zusammen dreißig.
   Pro Karte gibt es drei Punkte im Selbstcheck.

   muster… sind Musterlösungen zum Vergleichen, nicht zum
   Auswendiglernen. Die Lernenden nehmen sich selbst auf,
   hören danach das Muster und haken ehrlich ab.
   ============================================================ */

window.SPRECHEN_B2 = {

  niveau: 'B2',
  pruefung: 'Goethe-Zertifikat B2 · telc B2',
  minuten: 15,
  punkte: 30,

  stufen: [
    { nr:1, titel:'Frei argumentieren', zeichen:'🧠',
      was:'Eine Position beziehen, sie begründen und mit einem Beispiel belegen. Auf B2 zählt nicht die Meinung, sondern der Weg dorthin.' },
    { nr:2, titel:'Das Gespräch führen', zeichen:'🤝',
      was:'Höflich widersprechen, etwas einräumen, nachfragen, zusammenfassen — und das Wort ergreifen, ohne unhöflich zu werden.' },
    { nr:3, titel:'Die beiden Prüfungsteile', zeichen:'🎯',
      was:'Vortrag und Diskussion einzeln geübt — mit Karte, Redemitteln, Musterlösung und ehrlichem Selbstcheck.' },
    { nr:4, titel:'Die ganze Prüfung', zeichen:'⏱️',
      was:'Beide Teile hintereinander, fünfzehn Minuten mit Uhr — so wie am Prüfungstag.' }
  ],

  /* ==========================================================
     STUFE 1 und 2 — Übungen vor den echten Karten
     ========================================================== */

  bloecke: [

    { id:'b2sp1b1', stufe:1, titel:'Position beziehen und begründen',
      kurz:'Behauptung, Begründung, Beispiel — der Dreischritt jedes B2-Arguments',
      ziel:'Nach diesem Block sagst du nicht nur, was du denkst, sondern lieferst Grund und Beleg gleich mit.',
      zeichen:'🧠', farbe:'gruen',
      aufgaben: [
        { art:'wahl', frage:'Welche Aussage ist ein vollständiges B2-Argument?',
          optionen:['Die Vier-Tage-Woche ist gut.','Ich bin für die Vier-Tage-Woche, weil erholte Leute konzentrierter arbeiten — in unserem Betrieb sind die Fehlzeiten seit der Umstellung spürbar gesunken.','Vier Tage arbeiten finde ich schöner als fünf.'],
          loesung:1,
          erklaerung:'Behauptung, Begründung, Beispiel. Ohne den dritten Schritt bleibt es eine Meinung, und Meinungen bringen auf B2 kaum Punkte.' },
        { art:'wahl', frage:'Wie leitest du ein konkretes Beispiel am besten ein?',
          optionen:['Zum Beispiel, ja.','Ich denke halt so.','Ein Beispiel dafür ist die Firma meines Bruders: Dort gilt seit zwei Jahren eine feste Zeit ohne Mails.'],
          loesung:2,
          erklaerung:'Ein Beispiel muss benannt und ausgeführt werden. „Zum Beispiel" allein ist nur eine Ankündigung ohne Inhalt.' },
        { art:'wahl', frage:'Welcher Satz räumt ein Gegenargument ein und behält trotzdem die eigene Position?',
          optionen:['Das stimmt nicht.','Zwar entstehen dadurch höhere Kosten, allerdings sinken die Ausfälle langfristig deutlich.','Kosten sind mir egal.'],
          loesung:1,
          erklaerung:'„Zwar … allerdings" ist die typische B2-Struktur: Man zeigt, dass man die Gegenseite kennt, und bleibt trotzdem bei seiner Linie.' },
        { art:'wahl', frage:'Welcher Konnektor stellt zwei Dinge einander gegenüber?',
          optionen:['deshalb','hingegen','außerdem'],
          loesung:1,
          erklaerung:'„hingegen" markiert den Gegensatz: In der Stadt sind die Wege kurz, auf dem Land hingegen ist die Miete bezahlbar.' },
        { art:'wahl', frage:'Du sollst deine Position abschwächen, weil du dir nicht sicher bist. Welcher Satz passt?',
          optionen:['Das ist definitiv so.','Ich würde sagen, dass sich das eher lohnt — sicher bin ich mir allerdings nicht.','Keine Ahnung, ehrlich gesagt.'],
          loesung:1,
          erklaerung:'Vorsichtig formulieren ist auf B2 eine Stärke, kein Ausweichen. „Ich würde sagen, dass …" zeigt Sprachgefühl.' },
        { art:'wahl', frage:'Welche Formulierung wirkt im Vortrag am überzeugendsten?',
          optionen:['Man sagt, dass Weiterbildung wichtig ist.','Untersuchungen der Handelskammer zeigen, dass sich Weiterbildung nach etwa zwei Jahren bezahlt macht.','Weiterbildung ist halt wichtig.'],
          loesung:1,
          erklaerung:'Eine Quelle oder Zahl macht aus einer Behauptung einen Beleg. „Man sagt" ist auf B2 zu vage.' },
        { art:'ordnen', frage:'Bau das Argument mit Begründung.',
          teile:['Ich','bin','der Meinung,','dass','sich','flexible Arbeitszeiten','langfristig','auszahlen'],
          loesung:[0,1,2,3,4,5,6,7],
          erklaerung:'Nach „dass" steht das Verb ganz am Ende: … langfristig auszahlen.' },
        { art:'ordnen', frage:'Bau das Zugeständnis mit Gegenposition.',
          teile:['Zwar','kostet','das','den Betrieb','zunächst mehr,','allerdings','bleiben','die Fachkräfte länger'],
          loesung:[0,1,2,3,4,5,6,7],
          erklaerung:'Nach „allerdings" folgt sofort das Verb, weil es auf Position eins steht: allerdings bleiben …' },
        { art:'ordnen', frage:'Bau die Überleitung zum Beispiel.',
          teile:['Das','lässt sich','gut','an einem Beispiel','aus meinem eigenen Alltag','zeigen'],
          loesung:[0,1,2,3,4,5],
          erklaerung:'„lässt sich … zeigen" ist eine Passiv-Ersatzform — genau die Art Struktur, die auf B2 erwartet wird.' }
      ] },

    { id:'b2sp1b2', stufe:1, titel:'Den Vortrag gliedern',
      kurz:'Einleitung, zwei bis drei Aspekte, Fazit — vier Minuten ohne Zettel',
      ziel:'Nach diesem Block hast du ein Gerüst im Kopf, das zu jedem Thema passt — und die Sätze, die es hörbar machen.',
      zeichen:'🎤', farbe:'gruen',
      aufgaben: [
        { art:'wahl', frage:'Womit beginnt ein guter B2-Vortrag?',
          optionen:['Mit der eigenen Meinung.','Mit dem Thema und einem Satz, warum es gerade jetzt wichtig ist.','Mit einer Entschuldigung für das eigene Deutsch.'],
          loesung:1,
          erklaerung:'Die Einleitung ordnet das Thema ein. Die Meinung kommt erst am Ende — sonst hat das Fazit nichts mehr zu sagen.' },
        { art:'wahl', frage:'Wie viele Aspekte solltest du im Hauptteil behandeln?',
          optionen:['Einen einzigen, dafür sehr lang.','Zwei bis drei, jeder mit einem Beispiel.','So viele wie möglich.'],
          loesung:1,
          erklaerung:'Zwei bis drei Aspekte in vier Minuten sind machbar. Wer sechs Punkte anreißt, bleibt überall an der Oberfläche.' },
        { art:'wahl', frage:'Welcher Satz kündigt die Gliederung hörbar an?',
          optionen:['Also, dann fange ich mal an.','Ich möchte auf zwei Punkte eingehen: erstens auf die Kosten, zweitens auf die Folgen für Familien.','Ich rede jetzt über verschiedene Sachen.'],
          loesung:1,
          erklaerung:'Eine angekündigte Gliederung führt die Zuhörer — und dich selbst. Sie ist dein Geländer, wenn du den Faden verlierst.' },
        { art:'wahl', frage:'Welche Überleitung führt sauber zum zweiten Aspekt?',
          optionen:['Und dann noch etwas.','Damit komme ich zu meinem zweiten Punkt, den Folgen für die Umwelt.','Ja, und außerdem, also …'],
          loesung:1,
          erklaerung:'„Damit komme ich zu …" macht den Schnitt hörbar. Prüfer bewerten ausdrücklich, ob ein Vortrag gegliedert wirkt.' },
        { art:'wahl', frage:'Was gehört ins Fazit?',
          optionen:['Ein neuer Aspekt, der noch fehlt.','Eine kurze Bündelung und die eigene Position.','Eine Entschuldigung, dass die Zeit zu kurz war.'],
          loesung:1,
          erklaerung:'Das Fazit fasst zusammen und bezieht Stellung. Neue Argumente im Schluss wirken unstrukturiert.' },
        { art:'wahl', frage:'Dir fällt mitten im Vortrag ein Wort nicht ein. Was tust du?',
          optionen:['Du hörst auf zu sprechen.','Du umschreibst es: „also dieses Gerät, mit dem man die Luft misst".','Du wechselst ins Englische.'],
          loesung:1,
          erklaerung:'Umschreiben ist auf B2 ausdrücklich eine bewertete Strategie. Schweigen ist der einzige echte Fehler.' },
        { art:'ordnen', frage:'Bau den Einstieg in den Vortrag.',
          teile:['In meinem Vortrag','geht','es','um die Frage,','ob','Schulen','Handys','verbieten sollten'],
          loesung:[0,1,2,3,4,5,6,7],
          erklaerung:'Steht eine Angabe vorn, folgt sofort das Verb. Nach „ob" wandert das Verb ans Satzende.' },
        { art:'ordnen', frage:'Bau die Überleitung zum Fazit.',
          teile:['Zusammenfassend','lässt','sich','sagen,','dass','die Vorteile','klar','überwiegen'],
          loesung:[0,1,2,3,4,5,6,7],
          erklaerung:'„Zusammenfassend lässt sich sagen, dass …" ist die zuverlässigste Schlussformel — und signalisiert dem Prüfer das Ende.' },
        { art:'ordnen', frage:'Bau den Satz, der den zweiten Aspekt ankündigt.',
          teile:['Ein weiterer','Aspekt,','auf den','ich','kurz','eingehen möchte,','ist','die Finanzierung'],
          loesung:[0,1,2,3,4,5,6,7],
          erklaerung:'Der Relativsatz mit Präposition — „auf den ich eingehen möchte" — ist ein typisches B2-Merkmal.' }
      ] },

    { id:'b2sp2b1', stufe:2, titel:'Höflich widersprechen und einräumen',
      kurz:'Die Sätze, mit denen die Diskussion steht und fällt',
      ziel:'Nach diesem Block widersprichst du, ohne den anderen vor den Kopf zu stoßen — und gibst nach, ohne deine Position aufzugeben.',
      zeichen:'💬', farbe:'gold',
      aufgaben: [
        { art:'wahl', frage:'Deine Partnerin schlägt etwas vor, das du für falsch hältst. Wie widersprichst du auf B2?',
          optionen:['Nein, das ist Unsinn.','Das sehe ich anders, weil dabei die Kolleginnen im Schichtdienst völlig übergangen würden.','Da bin ich anderer Meinung.'],
          loesung:1,
          erklaerung:'Widerspruch ohne Begründung ist auf B2 zu wenig. „Das sehe ich anders, weil …" liefert beides in einem Satz.' },
        { art:'wahl', frage:'Welcher Satz räumt zuerst etwas ein und widerspricht erst danach?',
          optionen:['Da haben Sie recht, allerdings löst das unser eigentliches Problem nicht.','Nein, so geht das nicht.','Das ist mir zu kompliziert.'],
          loesung:0,
          erklaerung:'Erst zustimmen, dann einschränken — das ist die höflichste und auf B2 am höchsten bewertete Form des Widerspruchs.' },
        { art:'wahl', frage:'Welche Formulierung ist in einer Prüfungsdiskussion zu direkt?',
          optionen:['Das kann ich so nicht ganz unterschreiben.','Da bin ich mir nicht so sicher.','Das ist doch völliger Quatsch.'],
          loesung:2,
          erklaerung:'Der Ton wird mitbewertet. Auf B2 wird Angemessenheit verlangt, nicht nur Verständlichkeit.' },
        { art:'wahl', frage:'Du stimmst grundsätzlich zu, hast aber eine Bedingung. Was sagst du?',
          optionen:['Damit könnte ich leben, vorausgesetzt, wir prüfen das nach einem halben Jahr noch einmal.','Ja, egal.','Meinetwegen.'],
          loesung:0,
          erklaerung:'„vorausgesetzt, …" macht aus einer Zustimmung einen echten Verhandlungsschritt — genau das erwartet die Aufgabe.' },
        { art:'wahl', frage:'Welcher Satz bringt euch zur Einigung?',
          optionen:['Machen wir halt irgendwas.','Dann lass uns einen Mittelweg nehmen: Wir starten mit zwei Terminen und stocken bei Bedarf auf.','Entscheide du.'],
          loesung:1,
          erklaerung:'Ein konkreter Kompromissvorschlag ist das Ziel des ganzen Teils. Ohne ihn fehlt der Aufgabe das Ergebnis.' },
        { art:'wahl', frage:'Was wird in Teil zwei außer der Sprache bewertet?',
          optionen:['Wie schnell ihr fertig seid.','Ob du auf die Beiträge der anderen Person wirklich eingehst.','Wie viele Fremdwörter du benutzt.'],
          loesung:1,
          erklaerung:'Interaktion ist ein eigenes Bewertungskriterium. Zwei parallele Monologe kosten Punkte, auch bei fehlerfreiem Deutsch.' },
        { art:'ordnen', frage:'Bau den höflichen Widerspruch.',
          teile:['Das','sehe','ich','ehrlich gesagt','anders,','weil','die Kosten','dabei','steigen würden'],
          loesung:[0,1,2,3,4,5,6,7,8],
          erklaerung:'Nach „weil" steht das Verb am Ende — bei zwei Verben zuerst das Partizip oder der Infinitiv, dann „würden".' },
        { art:'ordnen', frage:'Bau das Zugeständnis.',
          teile:['Da','haben','Sie','völlig','recht,','allerdings','sollten','wir','die Eltern vorher fragen'],
          loesung:[0,1,2,3,4,5,6,7,8],
          erklaerung:'„allerdings" steht auf Position eins, deshalb folgt direkt das Verb: allerdings sollten wir …' },
        { art:'ordnen', frage:'Bau den Kompromissvorschlag.',
          teile:['Wie','wäre','es,','wenn','wir','uns','in der Mitte','treffen würden'],
          loesung:[0,1,2,3,4,5,6,7],
          erklaerung:'„Wie wäre es, wenn …" plus Konjunktiv ist die höflichste Art, einen Kompromiss anzubieten.' }
      ] },

    { id:'b2sp2b2', stufe:2, titel:'Nachfragen, zusammenfassen, das Wort nehmen',
      kurz:'Im Gespräch bleiben, auch wenn es schnell wird',
      ziel:'Nach diesem Block holst du dir das Wort zurück, sicherst Verständnis ab und bündelst am Ende, worauf ihr euch geeinigt habt.',
      zeichen:'🔁', farbe:'gold',
      aufgaben: [
        { art:'wahl', frage:'Du hast das Argument deines Partners nicht ganz verstanden. Was sagst du?',
          optionen:['Ja, genau.','Könntest du das noch einmal genauer ausführen? Ich bin mir nicht sicher, ob ich dich richtig verstanden habe.','Egal, weiter.'],
          loesung:1,
          erklaerung:'Nachfragen kostet keine Punkte, sondern bringt welche — es zeigt Gesprächskompetenz.' },
        { art:'wahl', frage:'Welcher Satz sichert ab, dass du richtig verstanden hast?',
          optionen:['Verstehe ich dich richtig, dass du den Zuschuss lieber an Bedingungen knüpfen möchtest?','Ja ja, klar.','Das habe ich schon gesagt.'],
          loesung:0,
          erklaerung:'Das Zusammenfassen der Gegenposition zeigt Zuhören und verschafft dir gleichzeitig Denkzeit.' },
        { art:'wahl', frage:'Dein Partner redet seit zwei Minuten ohne Pause. Wie ergreifst du das Wort?',
          optionen:['Du unterbrichst mit „Stopp".','Du wartest, bis er von selbst aufhört.','Du sagst: „Darf ich dazu kurz etwas ergänzen?"'],
          loesung:2,
          erklaerung:'Höflich unterbrechen gehört auf B2 ausdrücklich dazu. Wer nur wartet, hat am Ende zu wenig gesprochen.' },
        { art:'wahl', frage:'Wie gibst du das Wort aktiv ab?',
          optionen:['So, ich bin fertig.','Wie siehst du das — hältst du den Aufwand für vertretbar?','Jetzt du.'],
          loesung:1,
          erklaerung:'Eine gezielte Rückfrage bindet die andere Person ein und wird als Interaktion bewertet.' },
        { art:'wahl', frage:'Du brauchst einen Moment zum Nachdenken. Welche Formulierung hilft?',
          optionen:['Das ist eine gute Frage — lass mich kurz überlegen, wie ich das am besten formuliere.','…','Ich weiß es nicht.'],
          loesung:0,
          erklaerung:'Solche Füllstrukturen sind auf B2 erlaubt und sogar erwünscht. Sie klingen souverän, eine stumme Pause klingt nach Blackout.' },
        { art:'wahl', frage:'Wie beendet ihr die Diskussion richtig?',
          optionen:['Mit einem gemeinsamen Ergebnis in einem Satz.','Damit, dass jeder noch einmal seine Meinung wiederholt.','Gar nicht, die Zeit ist ja um.'],
          loesung:0,
          erklaerung:'Ohne formuliertes Ergebnis fehlt der Aufgabe der letzte Schritt — und euch beiden ein Punkt.' },
        { art:'ordnen', frage:'Bau die höfliche Unterbrechung.',
          teile:['Darf','ich','an dieser Stelle','kurz','etwas','einwerfen'],
          loesung:[0,1,2,3,4,5],
          erklaerung:'Das zweite Verb steht im Infinitiv am Satzende — auch in der Frage.' },
        { art:'ordnen', frage:'Bau die absichernde Nachfrage.',
          teile:['Habe','ich','dich','richtig','verstanden,','dass','du','das Budget','kürzen möchtest'],
          loesung:[0,1,2,3,4,5,6,7,8],
          erklaerung:'Im Nebensatz mit „dass" rutscht das Modalverb ganz nach hinten: … kürzen möchtest.' },
        { art:'ordnen', frage:'Bau die Bündelung am Schluss.',
          teile:['Halten','wir','also','fest,','dass','wir','uns','auf zwei Termine','geeinigt haben'],
          loesung:[0,1,2,3,4,5,6,7,8],
          erklaerung:'„Halten wir also fest, dass …" ist die stärkste Abschlussformel in Teil zwei — sie macht das Ergebnis hörbar.' }
      ] }
  ],

  /* ==========================================================
     STUFE 3 — die echten Prüfungsteile
     ========================================================== */

  teile: [

    { nr:1, art:'erzaehlen', name:'Vortrag halten',
      kurz:'Ein Thema in etwa vier Minuten — Einleitung, Aspekte, Fazit',
      was:'Du bekommst ein Thema und Vorbereitungszeit. Danach hältst du einen zusammenhängenden Vortrag: Du führst ins Thema ein, entwickelst zwei bis drei Aspekte mit Beispielen und ziehst ein Fazit mit deiner eigenen Position. Am Ende beantwortest du eine Nachfrage.',
      tipp:'Kündige deine Gliederung im ersten Satz an. Zwei gut belegte Aspekte sind mehr wert als fünf angerissene — und jedes Argument braucht ein Beispiel.',
      zeichen:'🎤', farbe:'gold', punkte:15,
      runden: [
        { id:'b2s1r1', thema:'Arbeitszeit: die Vier-Tage-Woche',
          karten: [
            { thema:'Sollten Betriebe die Vier-Tage-Woche einführen?',
              punkte:['1 Einleitung: Thema und warum es aktuell ist','2 Erster Aspekt mit Beispiel','3 Zweiter Aspekt mit Beispiel','4 Fazit und eigene Position','Redemittel: In meinem Vortrag geht es um … · Ein erster Aspekt ist … · Damit komme ich zu … · Zusammenfassend lässt sich sagen, dass …'],
              redemittel:['In meinem Vortrag geht es um die Frage, ob …','Ein erster Aspekt, den ich nennen möchte, ist …','Das lässt sich gut an einem Beispiel zeigen: …','Zwar …, allerdings …','Damit komme ich zu meinem zweiten Punkt.','Zusammenfassend lässt sich sagen, dass …'],
              bewertung:'Die Prüfer achten auf drei Dinge: Ist der Vortrag erkennbar gegliedert? Wird jedes Argument begründet und belegt? Bezieht das Fazit klar Stellung?',
              mustervortrag:'In meinem Vortrag geht es um die Frage, ob Betriebe die Vier-Tage-Woche einführen sollten. Das Thema ist gerade deshalb aktuell, weil viele Branchen händeringend Personal suchen und die Arbeitszeit zum wichtigsten Argument bei der Stellensuche geworden ist. Ich möchte auf zwei Aspekte eingehen: auf die Produktivität und auf die Folgen für Betriebe mit Schichtdienst.\nDer erste Aspekt ist die Produktivität. Es klingt zunächst unlogisch, dass weniger Arbeitszeit zu gleicher Leistung führen soll. Verschiedene Versuche zeigen jedoch, dass in vier Tagen konzentrierter gearbeitet wird, weil Besprechungen kürzer werden und weniger Zeit für Nebensächliches bleibt. Ein Beispiel aus meinem Umfeld: Eine Agentur, in der eine Freundin arbeitet, hat den Freitag gestrichen und gleichzeitig alle Sitzungen auf dreißig Minuten begrenzt. Der Umsatz ist seitdem stabil geblieben, die Krankmeldungen sind spürbar zurückgegangen.\nDamit komme ich zu meinem zweiten Punkt, den Betrieben mit Schichtdienst. Hier sieht die Lage anders aus. In einem Krankenhaus oder in der Pflege lässt sich Arbeit nicht verdichten — ein Patient braucht seine Zeit. Zwar wäre gerade dort ein freier Tag mehr besonders wertvoll, allerdings müssten dafür zusätzliche Kräfte eingestellt werden, die es auf dem Arbeitsmarkt schlicht nicht gibt.\nZusammenfassend lässt sich sagen, dass die Vier-Tage-Woche kein Modell für alle ist. In Büroberufen halte ich sie für sinnvoll und überfällig, im Schichtdienst hingegen für unrealistisch, solange das Personal fehlt. Meine Position ist deshalb: einführen, wo es geht, aber ehrlich sagen, wo es nicht geht.',
              musterantwort:'Ob ich selbst darauf verzichten würde? Auf ein Fünftel des Gehalts sicher nicht. Bei gleichem Lohn würde ich sofort zustimmen, und ich glaube, den meisten in meiner Generation ginge es genauso.' }
          ],
          erklaerung:'Beachte den Aufbau: Ankündigung der Gliederung, zwei Aspekte mit je einem Beispiel, dann ein Fazit, das wirklich Position bezieht. Genau diese drei Schritte hakt der Prüfer ab.' },

        { id:'b2s1r2', thema:'Umweltschutz im Alltag',
          karten: [
            { thema:'Wie viel kann der Einzelne für den Umweltschutz tun?',
              punkte:['1 Einleitung: Thema und warum es strittig ist','2 Erster Aspekt mit Beispiel','3 Zweiter Aspekt mit Beispiel','4 Fazit und eigene Position','Redemittel: Häufig wird behauptet, dass … · Dem lässt sich entgegenhalten … · Meiner Erfahrung nach …'],
              redemittel:['Häufig wird behauptet, dass …','Dem lässt sich allerdings entgegenhalten, dass …','Meiner Erfahrung nach …','Entscheidend ist dabei vor allem …','Aus diesen Gründen bin ich der Meinung, dass …'],
              bewertung:'Bewertet wird, ob du eine strittige Frage von zwei Seiten beleuchtest und trotzdem zu einer eigenen Antwort kommst. Nur Vor- und Nachteile aufzählen genügt auf B2 nicht.',
              mustervortrag:'Mein Thema ist heute die Frage, wie viel der Einzelne im Alltag überhaupt für den Umweltschutz tun kann. Die Frage ist strittig, weil die einen sagen, jede eingesparte Plastiktüte zähle, und die anderen einwenden, dass die entscheidenden Hebel in der Industrie liegen. Ich möchte beide Seiten betrachten und danach sagen, wo ich stehe.\nHäufig wird behauptet, individuelles Verhalten sei symbolisch und ändere nichts. Daran ist etwas Wahres: Wer den Müll trennt, aber zweimal im Jahr fliegt, gleicht die Ersparnis in wenigen Stunden wieder aus. Ein Beispiel dafür ist meine eigene Rechnung vom letzten Jahr — ich hatte konsequent auf Einwegverpackungen verzichtet und trotzdem eine schlechtere Bilanz als davor, einfach wegen einer einzigen Flugreise.\nDem lässt sich allerdings entgegenhalten, dass individuelles Verhalten selten allein bleibt. In dem Haus, in dem ich wohne, hat eine Nachbarin vor drei Jahren angefangen, Regenwasser für den Garten zu sammeln. Inzwischen machen es sechs Parteien, und die Hausverwaltung hat eine zweite Tonne aufgestellt. Verhalten wirkt also weniger über die eingesparte Menge als über das Beispiel, das es setzt.\nEntscheidend ist dabei vor allem, dass man die großen Posten kennt: Heizen, Fleisch, Flüge, Auto. Aus diesen Gründen bin ich der Meinung, dass der Einzelne durchaus etwas bewirkt — aber nur, wenn er dort ansetzt, wo es wehtut, und nicht nur dort, wo es sich gut anfühlt.',
              musterantwort:'Am schwersten fällt mir tatsächlich das Auto. Auf dem Land ohne Bus funktioniert der Alltag ohne Wagen kaum, und da hilft auch der beste Vorsatz nicht weiter.' }
          ],
          erklaerung:'Die Formel „Häufig wird behauptet … Dem lässt sich entgegenhalten …" trägt jeden strittigen Vortrag. Sie zeigt dem Prüfer sofort, dass du die Gegenposition kennst.' },

        { id:'b2s1r3', thema:'Medienerziehung',
          karten: [
            { thema:'Ab welchem Alter sollten Kinder ein eigenes Smartphone haben?',
              punkte:['1 Einleitung: Thema und Bezug zur Gegenwart','2 Erster Aspekt mit Beispiel','3 Zweiter Aspekt mit Beispiel','4 Fazit und eigene Position','Redemittel: Man kann das Thema von zwei Seiten betrachten · Auffällig ist dabei … · Ich plädiere dafür, dass …'],
              redemittel:['Man kann das Thema von zwei Seiten betrachten.','Auffällig ist dabei, dass …','Ein weiterer Aspekt, auf den ich eingehen möchte, ist …','Das halte ich insofern für problematisch, als …','Ich plädiere deshalb dafür, dass …'],
              bewertung:'Hier zählt vor allem die Differenzierung: Wer nur „dafür" oder „dagegen" sagt, bleibt unter B2. Erwartet wird ein Abwägen mit klarer Schlussfolgerung.',
              mustervortrag:'Ich spreche heute über die Frage, ab welchem Alter Kinder ein eigenes Smartphone bekommen sollten. Kaum ein Thema führt in Elternabenden so zuverlässig zu Streit, und das liegt daran, dass beide Seiten gute Gründe haben. Man kann das Thema von zwei Seiten betrachten: von der Sicherheit her und von der Entwicklung her.\nDer erste Aspekt ist die Sicherheit. Viele Eltern geben ihrem Kind ein Gerät mit, damit es sich melden kann, wenn der Bus ausfällt oder das Training früher endet. Das ist nachvollziehbar. Meine Schwester hat ihrer Tochter zum zehnten Geburtstag ein Handy ohne Internetzugang geschenkt, nur für Anrufe und Nachrichten. Damit war das eigentliche Bedürfnis gedeckt, ohne dass das Kind Zugang zu allem hatte.\nEin weiterer Aspekt, auf den ich eingehen möchte, ist die Entwicklung. Auffällig ist dabei, dass Kinder mit unbegrenztem Zugang deutlich schlechter abschalten können. Lehrerinnen berichten von Schülern, die nachts wach liegen, weil sie in Gruppenchats nichts verpassen wollen. Das halte ich insofern für problematisch, als sich Konzentration in diesem Alter erst ausbildet.\nIch plädiere deshalb dafür, nicht über ein festes Alter zu streiten, sondern über den Funktionsumfang. Ein einfaches Gerät mit etwa zehn Jahren, ein volles Smartphone frühestens mit dreizehn und dann mit klaren Regeln — das scheint mir der vernünftigste Weg zu sein.',
              musterantwort:'Verbote allein halte ich für wenig wirksam. Wenn alle anderen in der Klasse ein Gerät haben, entsteht Druck, und dann wird das Handy heimlich benutzt statt gar nicht.' }
          ],
          erklaerung:'„Ich plädiere dafür, nicht über X zu streiten, sondern über Y" ist ein starker Schluss: Er beantwortet die Frage und verschiebt sie zugleich auf eine sinnvollere Ebene.' },

        { id:'b2s1r4', thema:'Umgang mit künstlicher Intelligenz',
          karten: [
            { thema:'Sollten Hochschulen den Einsatz künstlicher Intelligenz erlauben?',
              punkte:['1 Einleitung: Thema und warum es neu verhandelt wird','2 Erster Aspekt mit Beispiel','3 Zweiter Aspekt mit Beispiel','4 Fazit und eigene Position','Redemittel: In letzter Zeit wird viel darüber diskutiert, ob … · Für … spricht, dass … · Dagegen spricht allerdings …'],
              redemittel:['In letzter Zeit wird viel darüber diskutiert, ob …','Für diese Position spricht, dass …','Dagegen spricht allerdings, dass …','Nicht zu vergessen ist außerdem …','Alles in allem komme ich zu dem Schluss, dass …'],
              bewertung:'Der Prüfer achtet darauf, ob du ein abstraktes Thema mit konkreten Beispielen erdest und ob deine Konnektoren die Argumente wirklich verbinden.',
              mustervortrag:'In letzter Zeit wird viel darüber diskutiert, ob Hochschulen den Einsatz künstlicher Intelligenz beim Schreiben von Arbeiten erlauben sollten. Neu ist die Frage deshalb, weil sich die Werkzeuge schneller verbreitet haben, als die Prüfungsordnungen angepasst werden konnten. Ich möchte zwei Aspekte behandeln: die Frage der Fairness und die Frage, was eigentlich geprüft werden soll.\nFür ein Verbot spricht auf den ersten Blick die Fairness. Wer ein teures Programm nutzt, hat einen Vorteil gegenüber jemandem, der es nicht bezahlen kann. Dagegen spricht allerdings, dass sich dieses Argument gegen fast jedes Hilfsmittel richten ließe — auch gute Wörterbücher und Nachhilfe kosten Geld. Eine Dozentin an der Universität Leipzig hat deshalb den umgekehrten Weg gewählt: Sie stellt allen Studierenden denselben Zugang zur Verfügung und verlangt, dass jede Nutzung dokumentiert wird.\nDer zweite Aspekt ist grundsätzlicher: Was wird eigentlich geprüft? Wenn eine Hausarbeit zeigen soll, dass jemand Quellen findet, ordnet und bewertet, dann verändert ein Werkzeug, das Texte formuliert, den Kern der Aufgabe. Nicht zu vergessen ist außerdem, dass viele Berufe genau diesen Umgang inzwischen voraussetzen. Wer ihn an der Hochschule verbietet, bildet an der Praxis vorbei aus.\nAlles in allem komme ich zu dem Schluss, dass ein Verbot der falsche Weg ist. Sinnvoller wäre eine Kennzeichnungspflicht und daneben mehr mündliche Prüfungen, in denen sich ohnehin sofort zeigt, ob jemand seinen Stoff verstanden hat.',
              musterantwort:'Missbrauch lässt sich nie ganz verhindern, das stimmt. Aber ein mündliches Nachgespräch von zehn Minuten entlarvt eine fremde Arbeit zuverlässiger als jede Software.' }
          ],
          erklaerung:'Abstrakte Themen wirken sofort stärker, wenn ein konkreter Fall darin vorkommt. Ein Satz über eine reale Hochschule ersetzt drei allgemeine Sätze.' }
      ] },

    { nr:2, art:'planen', name:'Diskussion — gemeinsam eine Lösung finden',
      kurz:'Vorschlagen, widersprechen, einräumen, sich einigen',
      was:'Ihr bekommt beide dieselbe Situation und müsst gemeinsam zu einer Lösung kommen. Du machst begründete Vorschläge, reagierst auf die Vorschläge deines Partners, widersprichst höflich, räumst ein — und am Ende formuliert ihr ein gemeinsames Ergebnis.',
      tipp:'Sag nie nur Ja. Wer durchgehend zustimmt, zeigt keine Aushandlung. Widersprich mindestens einmal begründet und räum mindestens einmal etwas ein.',
      zeichen:'💬', farbe:'gruen', punkte:15,
      runden: [
        { id:'b2s2r1', thema:'Wohnen in der Stadt',
          karten: [
            { aufgabe:'In eurem Wohnhaus steht ein großer, ungenutzter Innenhof. Die Hausverwaltung stellt zweitausend Euro bereit und lässt die Mieter entscheiden, was daraus wird. Ihr sollt der Eigentümerversammlung einen gemeinsamen Vorschlag machen.',
              punkte:['Was soll aus dem Hof werden?','Wer nutzt ihn, wer pflegt ihn?','Wie verteilt ihr das Geld?','Wie geht ihr mit Widerspruch im Haus um?','Redemittel: Ich würde vorschlagen, … · Das sehe ich anders, weil … · Da haben Sie recht, allerdings … · Halten wir also fest, dass …'],
              redemittel:['Ich würde vorschlagen, zunächst … zu klären.','Das sehe ich anders, weil …','Da hast du völlig recht, allerdings …','Wie wäre es, wenn wir uns in der Mitte treffen würden?','Halten wir also fest, dass …'],
              bewertung:'Bewertet wird, ob du Vorschläge begründest, auf die Gegenseite eingehst und am Schluss ein konkretes gemeinsames Ergebnis formulierst.',
              mustervorschlag:'Ich würde vorschlagen, den Hof nicht auf eine einzige Nutzung festzulegen. Meine Idee wäre: die Hälfte der Fläche als Hochbeete für alle, die andere Hälfte einfach als Sitzplatz mit ein paar Bänken. Der Grund ist ganz praktisch — im Haus wohnen Familien mit kleinen Kindern und mehrere ältere Leute, und beide Gruppen haben völlig verschiedene Vorstellungen von einem Hof. Die zweitausend Euro würde ich zu etwa zwei Dritteln in feste Dinge stecken, also Beete und Bänke, und ein Drittel als Rücklage lassen. Was hältst du davon?',
              mustereinigung:'Halten wir also fest: Wir schlagen der Versammlung zwei Zonen vor — Hochbeete an der Südseite, eine Sitzecke unter dem Baum. Vierzehnhundert Euro gehen in die Anschaffung, sechshundert bleiben als Rücklage für das erste Jahr. Die Pflege übernimmt eine Liste, in die sich jede Partei für einen Monat einträgt, und wer nicht mitmachen möchte, wird nicht dazu verpflichtet. Vor der Versammlung sprechen wir die drei Parteien im Erdgeschoss persönlich an, weil sie am stärksten betroffen sind.' }
          ],
          erklaerung:'Achte auf das Ende: Die Einigung nennt Zonen, Beträge, Zuständigkeit und den nächsten Schritt. So konkret muss ein B2-Ergebnis sein.' },

        { id:'b2s2r2', thema:'Weiterbildung im Betrieb',
          karten: [
            { aufgabe:'Euer Betrieb hat ein Weiterbildungsbudget von dreitausend Euro für das ganze Team. Die Wünsche gehen weit auseinander: Sprachkurse, ein Software-Training, ein Rhetorikseminar. Ihr sollt der Abteilungsleitung einen gemeinsamen Vorschlag vorlegen.',
              punkte:['Welche Weiterbildung hat Vorrang?','Nach welchen Kriterien entscheidet ihr?','Wie verhindert ihr, dass sich jemand übergangen fühlt?','Was schlagt ihr für das nächste Jahr vor?','Redemittel: Vorrang hätte für mich … · Dem kann ich nur teilweise zustimmen · vorausgesetzt, dass …'],
              redemittel:['Vorrang hätte für mich eindeutig …','Dem kann ich nur teilweise zustimmen, denn …','Damit könnte ich leben, vorausgesetzt, dass …','Wir sollten das an ein klares Kriterium binden.','Einigen wir uns also darauf, dass …'],
              bewertung:'Die Prüfer achten darauf, ob ihr Kriterien nennt statt nur Wünsche — und ob beide etwa gleich viel Redeanteil haben.',
              mustervorschlag:'Vorrang hätte für mich eindeutig das Software-Training, und zwar aus einem einfachen Grund: Wir arbeiten alle täglich mit dem Programm, und im Moment löst jeder dieselben Probleme auf eigene Faust. Eine Schulung für das ganze Team würde also allen etwas bringen, während ein Sprachkurs nur die zwei Kolleginnen im Export betrifft. Ich würde deshalb zweitausend Euro dort einsetzen. Für den Rest schlage ich vor, dass wir ein Kriterium festlegen, statt nach Sympathie zu entscheiden — zum Beispiel: Wer im letzten Jahr nichts bekommen hat, kommt zuerst. Wärst du damit einverstanden?',
              mustereinigung:'Einigen wir uns also darauf: Zweitausend Euro gehen in das Software-Training für das gesamte Team, tausend Euro in das Rhetorikseminar für die beiden Kolleginnen, die letztes Jahr leer ausgegangen sind. Den Sprachkurs vertagen wir aufs nächste Jahr und melden ihn jetzt schon für das kommende Budget an, damit niemand das Gefühl hat, übergangen worden zu sein. Wir schreiben das Kriterium in einem Satz auf und legen es der Leitung zusammen mit dem Vorschlag vor.' }
          ],
          erklaerung:'„Dem kann ich nur teilweise zustimmen, denn …" ist der Satz, der eine Diskussion in Gang hält. Reine Zustimmung wirkt bequem und bringt keine Punkte.' },

        { id:'b2s2r3', thema:'Ehrenamt',
          karten: [
            { aufgabe:'Ein Sportverein in eurem Stadtteil findet keine Ehrenamtlichen mehr. Die Trainerin hört nach zwölf Jahren auf, für die Jugendmannschaft ist niemand in Sicht. Ihr seid beide im Vorstand und sollt gemeinsam einen Plan entwickeln.',
              punkte:['Warum findet der Verein niemanden?','Welche Maßnahmen schlagt ihr vor?','Was kostet das und wer macht es?','Bis wann wollt ihr ein Ergebnis sehen?','Redemittel: Das eigentliche Problem liegt meiner Ansicht nach … · Da bin ich mir nicht so sicher · Lass uns einen Mittelweg nehmen'],
              redemittel:['Das eigentliche Problem liegt meiner Ansicht nach woanders, nämlich …','Da bin ich mir ehrlich gesagt nicht so sicher.','Ich sehe deinen Punkt, trotzdem …','Lass uns einen Mittelweg nehmen: …','Verbleiben wir so, dass …'],
              bewertung:'Hier wird geprüft, ob ihr eine Ursache analysiert, bevor ihr Maßnahmen beschließt — und ob ihr Aufgaben und Fristen konkret verteilt.',
              mustervorschlag:'Das eigentliche Problem liegt meiner Ansicht nach nicht daran, dass niemand helfen will, sondern daran, wie wir fragen. Wir suchen jemanden für zwölf Jahre und zwei Abende pro Woche — das sagt kaum jemand zu, der Kinder oder Schichtdienst hat. Ich würde vorschlagen, die Aufgabe zu zerlegen: drei Personen, die sich das Training teilen, und eine vierte, die nur die Organisation übernimmt. Dazu ein Zuschuss von zweihundert Euro im Jahr für die Übungsleiterlizenz. Das kostet uns wenig und senkt die Hürde deutlich. Wie siehst du das?',
              mustereinigung:'Verbleiben wir so: Wir schreiben die Aufgabe in drei kleinen Paketen aus statt als eine große Stelle, übernehmen die Kosten für die Lizenz und fragen zuerst gezielt die Eltern der Jugendmannschaft an, weil sie ohnehin am Spielfeldrand stehen. Du sprichst bis Ende des Monats mit den Eltern, ich kümmere mich um die Lizenz und den Aushang. Wenn wir bis zur Winterpause niemanden gefunden haben, legen wir die Mannschaft für eine Saison mit dem Nachbarverein zusammen.' }
          ],
          erklaerung:'Erst die Ursache, dann die Maßnahme — diese Reihenfolge wirkt in jeder Diskussion souverän und liefert dir die Begründung gleich mit.' },

        { id:'b2s2r4', thema:'Reisen und Nachhaltigkeit',
          karten: [
            { aufgabe:'Euer Betrieb macht jedes Jahr einen zweitägigen Betriebsausflug. In diesem Jahr soll er klimafreundlicher werden, ohne dass er teurer wird oder deutlich weniger Spaß macht. Ihr beide sollt den Vorschlag ausarbeiten.',
              punkte:['Wohin und womit reist ihr?','Wie überzeugt ihr die Kolleginnen und Kollegen?','Wo spart ihr, wo gebt ihr mehr aus?','Was macht ihr mit denen, die nicht mitziehen?','Redemittel: Ich schlage vor, … · Das ließe sich einwenden, aber … · Können wir uns darauf einigen, dass …'],
              redemittel:['Ich schlage vor, dass wir zunächst …','Das ließe sich einwenden, aber dann müssten wir …','Verstehe ich dich richtig, dass du lieber … möchtest?','Darf ich dazu kurz etwas ergänzen?','Können wir uns darauf einigen, dass …?'],
              bewertung:'Bewertet werden Aushandlung und Ton: höflich widersprechen, echte Kompromisse anbieten und die andere Person aktiv einbeziehen.',
              mustervorschlag:'Ich schlage vor, dass wir zunächst die Anreise klären, denn dort steckt der größte Teil der Belastung. Statt der Wochenendfahrt an die Küste würde ich ein Ziel wählen, das mit dem Zug in zwei Stunden erreichbar ist — das Elbsandsteingebirge zum Beispiel. Wir sparen dadurch die Bustickets und können das Geld in eine bessere Unterkunft stecken, was dem Ausflug eher nützt als schadet. Das ließe sich einwenden, dass die Auswahl kleiner wird, aber ehrlich gesagt hat sich im letzten Jahr ohnehin die halbe Belegschaft über die lange Fahrt beschwert. Wie siehst du das?',
              mustereinigung:'Können wir uns darauf einigen: Wir fahren mit dem Zug in die Sächsische Schweiz, buchen ein Gasthaus mit regionaler Küche und legen den Betrag, den wir bei der Anreise sparen, auf das Abendessen um. Für die drei Kolleginnen aus dem Umland, für die der Zug ein Umweg wäre, organisieren wir eine gemeinsame Fahrgemeinschaft. Du fragst die Preise beim Gasthaus an, ich mache eine Umfrage im Team — und wir entscheiden endgültig, wenn wir beide Zahlen vorliegen haben.' }
          ],
          erklaerung:'Ein guter Kompromiss nimmt der Gegenseite etwas weg und gibt an anderer Stelle etwas zurück. Genau das macht dieses Muster mit der Unterkunft.' }
      ] }
  ],

  /* ==========================================================
     STUFE 4 — die ganze Prüfung
     ========================================================== */

  laeufe: [

    { id:'b2spl1', titel:'Prüfungslauf 1', minuten:15,
      teile: [
        { nr:1, art:'erzaehlen', thema:'Weiterbildung: Muss man ein Leben lang lernen?',
          karten: [
            { thema:'Sollten Arbeitnehmer verpflichtet werden, sich regelmäßig weiterzubilden?',
              punkte:['1 Einleitung: Thema und warum es aktuell ist','2 Erster Aspekt mit Beispiel','3 Zweiter Aspekt mit Beispiel','4 Fazit und eigene Position','Redemittel: In meinem Vortrag geht es um … · Zwar …, allerdings … · Alles in allem …'],
              redemittel:['In meinem Vortrag geht es um die Frage, ob …','Ein erster Aspekt ist …','Zwar …, allerdings …','Alles in allem komme ich zu dem Schluss, dass …'],
              bewertung:'Gegliedert, begründet, belegt — und ein Fazit, das eine Frage wirklich beantwortet.',
              mustervortrag:'In meinem Vortrag geht es um die Frage, ob Arbeitnehmer verpflichtet werden sollten, sich regelmäßig weiterzubilden. Aktuell ist das Thema, weil sich Berufsbilder derzeit schneller verändern als je zuvor — Tätigkeiten, die vor zehn Jahren den Alltag ausmachten, übernimmt heute ein Programm. Ich möchte zwei Aspekte betrachten: die Verantwortung der Betriebe und die Frage der Zumutbarkeit.\nDer erste Aspekt betrifft die Betriebe. Wer verlangt, dass sich Beschäftigte weiterbilden, muss ihnen dafür Zeit geben. In der Praxis passiert oft das Gegenteil: Der Kurs findet am Samstag statt und wird nicht bezahlt. Ein Beispiel aus meinem Umfeld ist eine Pflegerin, die zwei Fortbildungen im Jahr nachweisen muss, beide aber in ihrer Freizeit absolviert. Unter solchen Bedingungen wird aus einer Chance eine Belastung.\nDamit komme ich zum zweiten Punkt, der Zumutbarkeit. Zwar ist Lernen grundsätzlich für jeden möglich, allerdings sind die Voraussetzungen sehr ungleich verteilt. Wer Schicht arbeitet, kleine Kinder hat oder Angehörige pflegt, hat schlicht weniger Luft. Eine allgemeine Pflicht würde diese Menschen zusätzlich unter Druck setzen, obwohl gerade sie ohnehin die längeren Tage haben.\nAlles in allem komme ich zu dem Schluss, dass eine Pflicht der falsche Ansatz ist. Sinnvoller wäre ein verbrieftes Recht auf Weiterbildung während der Arbeitszeit. Damit hätte jeder die Möglichkeit — und niemand den Druck.',
              musterantwort:'Ob ich selbst genug tue? Wahrscheinlich nicht. Ich nehme mir jedes Jahr etwas vor und schiebe es, weil der Alltag dazwischenkommt. Genau deshalb finde ich feste Zeiten im Betrieb so wichtig.' }
          ] },
        { nr:2, art:'planen', thema:'Umweltschutz im Büroalltag',
          karten: [
            { aufgabe:'Eure Abteilung will im Büroalltag Müll und Energie sparen. Die Geschäftsführung gibt euch freie Hand, aber kein zusätzliches Budget. Ihr sollt gemeinsam drei Maßnahmen festlegen und sie beim nächsten Treffen vorstellen.',
              punkte:['Womit fangt ihr an?','Was bringt am meisten, was ist nur Symbolik?','Wie überzeugt ihr die Skeptiker?','Wie messt ihr, ob es etwas gebracht hat?','Redemittel: Ich würde vorschlagen, … · Das sehe ich anders, weil … · Da hast du recht, allerdings … · Halten wir fest, dass …'],
              redemittel:['Ich würde vorschlagen, mit … anzufangen.','Das sehe ich anders, weil …','Da hast du recht, allerdings …','Wie wäre es, wenn wir das zunächst befristet ausprobieren?','Halten wir also fest, dass …'],
              bewertung:'Begründete Vorschläge, mindestens ein höflicher Widerspruch, ein Zugeständnis und ein konkretes gemeinsames Ergebnis.',
              mustervorschlag:'Ich würde vorschlagen, mit dem anzufangen, was tatsächlich etwas bringt, und nicht mit dem, was am sichtbarsten ist. Die Einwegbecher an der Kaffeemaschine sind zwar das offensichtlichste Ärgernis, aber der größte Posten ist bei uns eindeutig das Heizen bei gekippten Fenstern im Winter. Ich schlage deshalb vor: erstens feste Lüftungszeiten statt Dauerkipp, zweitens Pfandbecher statt Einweg, drittens den Drucker auf beidseitig als Standard. Das kostet nichts und lässt sich sofort umsetzen. Was meinst du dazu?',
              mustereinigung:'Halten wir also fest: Wir starten mit den drei Maßnahmen Lüften, Pfandbecher und beidseitiges Drucken, und zwar zunächst befristet für drei Monate. Du übernimmst die Ansage im Teammeeting, ich hänge eine kurze Anleitung an die Küchentür. Nach den drei Monaten schauen wir uns die Papier- und Heizkosten an und entscheiden dann, was bleibt. Wer nicht mitmachen möchte, wird nicht angesprochen — wir setzen darauf, dass die Zahlen überzeugen.' }
          ] }
      ] },

    { id:'b2spl2', titel:'Prüfungslauf 2', minuten:15,
      teile: [
        { nr:1, art:'erzaehlen', thema:'Ehrenamt: Wer hält die Gesellschaft zusammen?',
          karten: [
            { thema:'Sollte ehrenamtliches Engagement stärker belohnt werden?',
              punkte:['1 Einleitung: Thema und warum darüber gestritten wird','2 Erster Aspekt mit Beispiel','3 Zweiter Aspekt mit Beispiel','4 Fazit und eigene Position','Redemittel: Häufig wird gefordert, dass … · Dem lässt sich entgegenhalten … · Ich plädiere dafür, dass …'],
              redemittel:['Häufig wird gefordert, dass …','Dem lässt sich entgegenhalten, dass …','Auffällig ist dabei, dass …','Ich plädiere deshalb dafür, dass …'],
              bewertung:'Zwei Seiten, konkrete Beispiele, klare eigene Position im Schluss.',
              mustervortrag:'Mein Thema ist die Frage, ob ehrenamtliches Engagement stärker belohnt werden sollte — durch Geld, durch Rentenpunkte oder durch Vergünstigungen. Gestritten wird darüber, weil beide Seiten etwas Richtiges sehen: Die einen sagen, ohne Ehrenamt bräche vieles zusammen, die anderen fürchten, dass Bezahlung genau das zerstört, was Ehrenamt ausmacht.\nHäufig wird gefordert, dass wenigstens die Kosten erstattet werden. Das halte ich für berechtigt. Wer als Übungsleiterin zweimal pro Woche zwanzig Kilometer fährt, zahlt für sein Engagement am Ende drauf. In dem Verein, in dem ich früher aktiv war, sind zwei Trainer allein deshalb ausgestiegen — nicht wegen der Zeit, sondern wegen der Spritkosten.\nDem lässt sich allerdings entgegenhalten, dass eine echte Bezahlung die Sache verändert. Auffällig ist dabei, dass sich in Vereinen mit Aufwandsentschädigung die Erwartungen verschieben: Plötzlich wird über Stunden gesprochen, über Zuständigkeiten, über wer wofür bezahlt wird. Die Selbstverständlichkeit, mit der man einspringt, geht dabei ein Stück weit verloren.\nIch plädiere deshalb dafür, klar zwischen Erstattung und Bezahlung zu trennen. Auslagen sollten immer ersetzt werden, ohne Antrag und ohne Diskussion. Eine Bezahlung hingegen halte ich für den falschen Weg — sie löst das Problem nicht, sondern verschiebt es nur.',
              musterantwort:'Anerkennung muss nicht immer Geld sein. Ein verlässlicher Ansprechpartner in der Verwaltung und weniger Papierkram wären für die meisten Ehrenamtlichen wertvoller als eine Prämie.' }
          ] },
        { nr:2, art:'planen', thema:'Künstliche Intelligenz in der Schule',
          karten: [
            { aufgabe:'Die Schule eurer Kinder will Regeln für den Einsatz künstlicher Intelligenz bei Hausaufgaben festlegen. Ihr beide seid im Elternbeirat und sollt der Schulleitung einen gemeinsamen Vorschlag machen.',
              punkte:['Erlauben, verbieten oder regeln?','Welche Regeln sind praktisch durchsetzbar?','Wie werden Eltern und Lehrkräfte einbezogen?','Was passiert bei Verstößen?','Redemittel: Ich bin dafür, dass … · Das kann ich so nicht ganz unterschreiben · vorausgesetzt, dass … · Einigen wir uns darauf, dass …'],
              redemittel:['Ich bin grundsätzlich dafür, dass …','Das kann ich so nicht ganz unterschreiben, denn …','Damit könnte ich leben, vorausgesetzt, dass …','Darf ich an dieser Stelle kurz etwas einwerfen?','Einigen wir uns also darauf, dass …'],
              bewertung:'Aushandlung statt Zustimmung: begründet widersprechen, einräumen, das Wort abgeben und ein Ergebnis in einem Satz festhalten.',
              mustervorschlag:'Ich bin grundsätzlich dafür, den Einsatz zu regeln statt zu verbieten. Ein Verbot lässt sich zu Hause schlicht nicht kontrollieren, und wir würden die Kinder nur dazu erziehen, es zu verschweigen. Mein Vorschlag wäre: Bei Hausaufgaben, die dem Üben dienen, bleibt das Werkzeug tabu, weil man das Üben nicht abgeben kann. Bei größeren Arbeiten darf es benutzt werden, muss aber am Ende in zwei Sätzen angegeben werden — wofür genau. Damit lernen die Kinder gleich, transparent damit umzugehen. Wie siehst du das?',
              mustereinigung:'Einigen wir uns also darauf: Wir schlagen der Schulleitung eine Zwei-Klassen-Regel vor — Übungsaufgaben ohne Hilfsmittel, Projektarbeiten mit Kennzeichnungspflicht. Dazu ein Elternabend im Herbst, an dem die Lehrkräfte einmal vorführen, was diese Programme können und was nicht. Bei Verstößen soll es kein Notenproblem geben, sondern ein Gespräch und die Aufgabe noch einmal. Du formulierst den Vorschlag schriftlich, ich sammle vorher die Rückmeldungen aus den anderen Klassen ein.' }
          ] }
      ] }
  ]

};
