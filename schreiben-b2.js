/* ============================================================
   deutschoderwas club — SCHREIBEN B2 (Goethe-Zertifikat B2 · telc B2)

   Aufbau nach der offiziellen Testbeschreibung: zwei Teile,
   fünfundsiebzig Minuten, zwei Texte.

     Teil 1  Forumsbeitrag — Stellungnahme mit Argument
             und Gegenargument                      ca. 150 Wörter
     Teil 2  Formelle Nachricht — Beschwerde, Bitte,
             Vorschlag, Reklamation                 ca. 100 Wörter

   Der Sprung von B1: Es reicht nicht mehr, eine Meinung zu
   nennen und mit „weil" zu begründen. Auf B2 wird bewertet, ob
   du eine These aufstellst, sie stützt, ein Gegenargument
   einräumst und entkräftest und zu einem Schluss kommst.
   Bewertet werden außerdem Register und Konnektoren: „zwar …
   allerdings", „hingegen", „dennoch", „zumal", „insofern".

   Teil 1 zählt zwanzig Punkte, Teil 2 zehn — zusammen dreißig.
   Bestanden ist wie in der Prüfung ab sechzig Prozent.

   muster ist eine Musterlösung zum Vergleichen, nicht zum
   Auswendiglernen. Erst selbst schreiben, dann vergleichen.
   ============================================================ */

window.SCHREIBEN_B2 = {

  niveau: 'B2',
  pruefung: 'Goethe-Zertifikat B2 · telc B2',
  minuten: 75,
  punkte: 30,

  stufen: [
    { nr:1, titel:'Argumentieren statt berichten', zeichen:'🧭',
      was:'Auf B2 genügt keine Meinung mehr, die nur behauptet wird. Du brauchst eine These, eine tragfähige Begründung und ein Gegenargument, das du ernst nimmst und trotzdem entkräftest.' },
    { nr:2, titel:'Konnektoren und Register', zeichen:'🔗',
      was:'allerdings, hingegen, dennoch, zumal, insofern — diese Wörter machen aus Sätzen einen Gedankengang. Dazu kommt der Unterschied zwischen sachlich und emotional, der in Teil 2 über die Punkte entscheidet.' },
    { nr:3, titel:'Die zwei Prüfungsteile', zeichen:'🎯',
      was:'Stellungnahme im Forum und formelle Nachricht, jeweils fünf Runden mit zwei Aufgaben. Immer mit Musterlösung, Formulierungshilfen und einem Hinweis, worauf die Prüfenden achten.' },
    { nr:4, titel:'Die ganze Prüfung', zeichen:'⏱️',
      was:'Beide Texte hintereinander, fünfundsiebzig Minuten mit Uhr. Rechne mit etwa fünfundvierzig Minuten für Teil eins und fünfundzwanzig für Teil zwei, der Rest gehört der Kontrolle.' }
  ],

  /* ==========================================================
     STUFE 1 und 2 — Übungen vor den echten Schreibaufgaben
     ========================================================== */

  bloecke: [

    { id:'s1b1', stufe:1, titel:'These, Begründung, Einräumung',
      kurz:'Der Bauplan einer B2-Stellungnahme',
      hinweis:'Drei Möglichkeiten, eine passt. Achte darauf, welcher Satz wirklich argumentiert.',
      ziel:'Nach diesem Block erkennst du, was eine These von einer Beobachtung unterscheidet — und wie man ein Gegenargument einräumt, ohne die eigene Position aufzugeben.',
      zeichen:'🧭', farbe:'turq',
      aufgaben: [
        { art:'wahl', frage:'Welcher Satz stellt eine These auf, statt nur zu berichten?',
          opt:['Viele Firmen bieten inzwischen Homeoffice an.','Homeoffice sollte in Bürojobs zum Standard werden.','Ich arbeite zweimal pro Woche zu Hause.'],
          loesung:1,
          erklaerung:'Eine These bewertet oder fordert etwas, erkennbar an „sollte", „müsste", „ist notwendig". Die beiden anderen Sätze beschreiben nur.' },
        { art:'wahl', frage:'„Zwar spart Homeoffice lange Wege, ___ leidet der Austausch im Team."',
          opt:['deswegen','allerdings','außerdem'],
          loesung:1,
          erklaerung:'„zwar … allerdings" ist das Standardpaar für die Einräumung. Nach „allerdings" folgt sofort das Verb: allerdings leidet …' },
        { art:'wahl', frage:'Welche Wendung räumt ein Gegenargument ein, ohne die eigene Meinung aufzugeben?',
          opt:['Das ist schlicht falsch.','Sicherlich gibt es Bereiche, in denen das schwierig ist — entscheidend bleibt aber die Frage der Kosten.','Darüber muss man gar nicht diskutieren.'],
          loesung:1,
          erklaerung:'Erst zustimmen, dann mit „entscheidend bleibt aber" die eigene Linie halten. Wer die Gegenseite abbügelt, verliert auf B2 Punkte.' },
        { art:'wahl', frage:'Welcher Satz begründet am stärksten?',
          opt:['Die Vier-Tage-Woche ist super, das sieht doch jeder.','Ich finde die Vier-Tage-Woche gut.','Ich halte die Vier-Tage-Woche für sinnvoll, weil ausgeruhte Beschäftigte weniger Fehler machen.'],
          loesung:2,
          erklaerung:'Nur der dritte Satz nennt einen nachvollziehbaren Grund. „Das sieht doch jeder" ist keine Begründung, sondern eine Behauptung.' },
        { art:'wahl', frage:'Welche Formulierung leitet ein Fazit ein?',
          opt:['Aus diesen Gründen halte ich eine schrittweise Einführung für den besseren Weg.','Ich weiß auch nicht so recht.','Und noch etwas ganz anderes:'],
          loesung:0,
          erklaerung:'„Aus diesen Gründen", „insgesamt", „kurz gesagt" bündeln das Gesagte. Ein neues Argument gehört nicht mehr in den Schluss.' },
        { art:'wahl', frage:'Was bedeutet „Ich teile diese Auffassung nur bedingt"?',
          opt:['Ich stimme vollständig zu.','Ich stimme teilweise zu.','Ich lehne den Gedanken ganz ab.'],
          loesung:1,
          erklaerung:'„nur bedingt" heißt: in Grenzen, mit Vorbehalt. Eine sehr nützliche Wendung, wenn du differenzieren willst.' },
        { art:'wahl', frage:'Welcher Einstieg passt zu einem Forumsbeitrag auf B2?',
          opt:['Sehr geehrte Damen und Herren, hiermit teile ich Ihnen mit,','In der Debatte um das Handyverbot wird ein Punkt regelmäßig übersehen.','Hallo Leute, keine Ahnung, aber ich schreib mal was.'],
          loesung:1,
          erklaerung:'Ein Forumsbeitrag ist weder ein Amtsbrief noch ein Chat. Der Einstieg soll das Thema zuspitzen und sofort Haltung zeigen.' },
        { art:'wahl', frage:'„Kostenloser Nahverkehr wäre ein Gewinn. Die Städte würden entlastet." Was fehlt für B2?',
          opt:['ein drittes Beispiel derselben Art','ein eingeräumtes Gegenargument, das anschließend entkräftet wird','ein Ausrufezeichen'],
          loesung:1,
          erklaerung:'Zwei Argumente in dieselbe Richtung sind noch keine Argumentation. Erst der Blick auf die Gegenseite macht daraus B2.' },
        { art:'wahl', frage:'Worin unterscheidet sich „zwar … allerdings" von „einerseits … andererseits"?',
          opt:['Beides ist gleichwertig, nur andere Wörter.','„Zwar" darf ausschließlich in formellen Briefen stehen.','Bei „zwar … allerdings" liegt das Gewicht klar auf dem zweiten Teil.'],
          loesung:2,
          erklaerung:'„einerseits … andererseits" wägt neutral ab, „zwar … allerdings" räumt ein und entscheidet sich dann. Für eine Stellungnahme ist das zweite Paar stärker.' },
        { art:'wahl', frage:'Wie schließt du eine Stellungnahme im Forum überzeugend ab?',
          opt:['Mit einem Fazit und einer Frage an die anderen.','Mit „Mit freundlichen Grüßen" und deinem vollen Namen.','Mit einem neuen Argument, das du nicht mehr erklärst.'],
          loesung:0,
          erklaerung:'Das Fazit bündelt deine Position, die Frage gehört zur Textsorte Forum. Formelle Grußformeln wirken dort deplatziert.' }
      ] },

    { id:'s1b2', stufe:1, titel:'Sachlich statt emotional',
      kurz:'Beschweren, fordern, um Kulanz bitten — ohne Aggression',
      hinweis:'In Teil 2 entscheidet der Ton. Welche Formulierung wirkt bestimmt, aber höflich?',
      ziel:'Nach diesem Block schreibst du Beschwerden, die ernst genommen werden, weil sie Sachverhalt, Folge und Wunsch nennen statt Ärger.',
      zeichen:'⚖️', farbe:'turq',
      aufgaben: [
        { art:'wahl', frage:'Sie beschweren sich über Baulärm. Welcher Satz ist sachlich?',
          opt:['Ihre Handwerker sind eine einzige Zumutung.','Seit drei Wochen wird täglich ab sechs Uhr gebohrt; als Schichtarbeiterin kann ich tagsüber nicht mehr schlafen.','Das ist ja wohl die Höhe.'],
          loesung:1,
          erklaerung:'Sachlich heißt: Zeitraum, Vorgang, Folge für mich. Wer Fakten nennt, muss nicht laut werden.' },
        { art:'wahl', frage:'Welche Formulierung wirkt bestimmt, aber nicht aggressiv?',
          opt:['Antworten Sie gefälligst.','Ich erwarte Ihre Antwort bis Freitag, sonst schalte ich sofort einen Anwalt ein.','Ich bitte Sie, mir bis Freitag eine Rückmeldung zu geben.'],
          loesung:2,
          erklaerung:'Eine Frist ist erlaubt und sogar erwünscht. Die Drohung im zweiten Satz wäre in der Prüfung ein Registerfehler.' },
        { art:'wahl', frage:'Wofür steht „Ich wäre Ihnen sehr verbunden, wenn …"?',
          opt:['für eine besonders höfliche Bitte','für einen versteckten Vorwurf','für eine umgangssprachliche Wendung'],
          loesung:0,
          erklaerung:'Eine feste Höflichkeitsformel des Schriftverkehrs, gleichbedeutend mit „ich wäre Ihnen sehr dankbar".' },
        { art:'wahl', frage:'„Sie haben meine Rechnung falsch berechnet." Wie klingt das sachlicher?',
          opt:['Die Rechnung wurde offenbar falsch berechnet.','Sie können anscheinend nicht rechnen.','Ihre Rechnung ist eine Frechheit.'],
          loesung:0,
          erklaerung:'Das Passiv nimmt den persönlichen Vorwurf heraus; „offenbar" lässt dem Gegenüber einen Ausweg. Genau das erwartet man in einer Beschwerde.' },
        { art:'wahl', frage:'Welche Wendung bittet um Kulanz?',
          opt:['Sie müssen mir das Geld zurückgeben.','Ich bitte Sie, den Fall zu prüfen und mir aus Kulanz entgegenzukommen.','Dann zahle ich eben nicht mehr.'],
          loesung:1,
          erklaerung:'Kulanz ist freiwilliges Entgegenkommen ohne Rechtsanspruch. Deshalb wird darum gebeten, nicht darauf bestanden.' },
        { art:'wahl', frage:'Welcher Betreff passt zu einer formellen Beschwerde?',
          opt:['Beschwerde','Ärger mit euch!!!','Verspätete Lieferung, Auftragsnummer 84210'],
          loesung:2,
          erklaerung:'Der Betreff nennt Vorgang und Nummer. So landet die Nachricht sofort im richtigen Vorgang.' },
        { art:'wahl', frage:'Welcher Satz nennt die Folge sachlich?',
          opt:['Das kostet mich ein Vermögen!!!','Dadurch entstehen mir zusätzliche Kosten von rund achtzig Euro im Monat.','Ich bin wirklich sauer auf Sie.'],
          loesung:1,
          erklaerung:'Zahlen wirken stärker als Empörung. „Dadurch entstehen mir …" ist die Standardwendung für Folgekosten.' },
        { art:'wahl', frage:'Wie formulieren Sie einen Vorschlag an die Geschäftsleitung?',
          opt:['Ich schlage vor, das Modell zunächst für sechs Monate zu erproben.','Ihr müsst da endlich mal etwas ändern.','Macht doch einfach was Neues.'],
          loesung:0,
          erklaerung:'Ein Vorschlag nennt Maßnahme und Zeitraum. „Zunächst" signalisiert, dass niemand sich dauerhaft festlegen muss — das erhöht die Chancen.' },
        { art:'wahl', frage:'Was gehört NICHT in eine formelle Beschwerde?',
          opt:['eine sachliche Beschreibung des Vorgangs','eine persönliche Beleidigung','eine konkrete Frist'],
          loesung:1,
          erklaerung:'Frist und Sachverhalt sind erwünscht. Beleidigungen kosten Punkte und in der Wirklichkeit auch die Antwort.' },
        { art:'wahl', frage:'Wie leiten Sie eine Beschwerde ein, ohne sofort anzugreifen?',
          opt:['Hiermit beschwere ich mich über alles.','Sie haben da gründlich Mist gebaut.','Ich wende mich an Sie, weil bei der Lieferung vom dritten Mai etwas schiefgelaufen ist.'],
          loesung:2,
          erklaerung:'Der Einleitungssatz nennt Anlass und Datum. Erst danach folgt, was genau passiert ist.' }
      ] },

    { id:'s2b1', stufe:2, titel:'Konnektoren genau treffen',
      kurz:'allerdings, hingegen, dennoch, zumal, insofern, sofern, indem',
      hinweis:'Jedes dieser Wörter hat eine eigene Aufgabe. Welches passt in die Lücke?',
      ziel:'Nach diesem Block verbindest du Gedanken statt Sätze — und weißt, wo das Verb danach steht.',
      zeichen:'🔗', farbe:'gold',
      aufgaben: [
        { art:'wahl', frage:'„In den Städten steigen die Mieten rasant, auf dem Land ___ stehen Wohnungen leer."',
          opt:['deshalb','hingegen','zumal'],
          loesung:1,
          erklaerung:'„hingegen" stellt zwei Bereiche einander gegenüber. Es steht meist nach dem ersten Satzglied, nicht am Satzanfang.' },
        { art:'wahl', frage:'„Das Modell lohnt sich für den Betrieb, ___ er dadurch Bürofläche einspart."',
          opt:['zumal','obwohl','trotzdem'],
          loesung:0,
          erklaerung:'„zumal" liefert einen zusätzlichen, verstärkenden Grund. Es leitet einen Nebensatz ein, das Verb steht am Ende: … einspart.' },
        { art:'wahl', frage:'„Die Kantine bietet zwei vegetarische Gerichte an; ___ greifen die meisten zum Schnitzel."',
          opt:['sofern','deswegen','dennoch'],
          loesung:2,
          erklaerung:'„dennoch" zeigt den Widerspruch zur Erwartung. Danach folgt sofort das Verb: dennoch greifen …' },
        { art:'wahl', frage:'„Das Handy stört den Unterricht erheblich. ___ ist ein Verbot nachvollziehbar."',
          opt:['Insofern','Hingegen','Sofern'],
          loesung:0,
          erklaerung:'„insofern" heißt: in dieser Hinsicht, aus dem gerade genannten Grund. Es knüpft an den Satz davor an, das Verb folgt direkt.' },
        { art:'wahl', frage:'Welcher Satz ist richtig gebaut?',
          opt:['Allerdings die Umsetzung ist teuer.','Allerdings ist die Umsetzung teuer.','Allerdings die Umsetzung teuer ist.'],
          loesung:1,
          erklaerung:'„allerdings" besetzt das Vorfeld, deshalb folgt sofort das gebeugte Verb. Derselbe Bau gilt für „dennoch" und „insofern".' },
        { art:'wahl', frage:'„___ genug Personal eingestellt wird, funktioniert die Vier-Tage-Woche auch in der Pflege."',
          opt:['Dennoch','Sofern','Hingegen'],
          loesung:1,
          erklaerung:'„sofern" nennt eine Bedingung, ähnlich wie „wenn", nur schriftsprachlicher. Verb am Ende: … eingestellt wird.' },
        { art:'wahl', frage:'„Sie engagiert sich seit Jahren ehrenamtlich, ___ sie kaum Freizeit hat."',
          opt:['weil','obwohl','indem'],
          loesung:1,
          erklaerung:'„obwohl" nennt den Gegengrund. Mit „weil" wäre die Aussage unlogisch.' },
        { art:'wahl', frage:'„Die Stadt kann Kosten senken, ___ sie die Takte verdichtet statt neue Strecken zu bauen."',
          opt:['indem','sodass','obwohl'],
          loesung:0,
          erklaerung:'„indem" nennt das Mittel, also das Wie. „sodass" nennt dagegen die Folge.' },
        { art:'wahl', frage:'Welches Wort fügt ein zweites Argument in dieselbe Richtung an?',
          opt:['hingegen','trotzdem','darüber hinaus'],
          loesung:2,
          erklaerung:'„darüber hinaus", „zudem" und „ferner" reihen gleichgerichtete Argumente. Die beiden anderen leiten einen Gegensatz ein.' },
        { art:'wahl', frage:'„Die Studie ist zehn Jahre alt; ___ sind ihre Ergebnisse nach wie vor brauchbar."',
          opt:['folglich','dennoch','somit'],
          loesung:1,
          erklaerung:'Nach dem Einwand „alt" folgt ein Widerspruch, also „dennoch". „folglich" und „somit" würden eine Schlussfolgerung anschließen.' }
      ] },

    { id:'s2b2', stufe:2, titel:'Argumente bauen',
      kurz:'Wortstellung in These, Einräumung, Fazit und höflicher Bitte',
      hinweis:'Zieh die Teile in die richtige Reihenfolge. Achte darauf, wo das gebeugte Verb landet.',
      ziel:'Nach diesem Block sitzen die Satzmuster, die du in beiden Prüfungsteilen immer wieder brauchst.',
      zeichen:'🧱', farbe:'gold',
      aufgaben: [
        { art:'ordnen', frage:'Bau die These mit Vorfeld.',
          teile:['Meiner Ansicht nach','sollte','die Vier-Tage-Woche','zunächst','in großen Betrieben','erprobt werden'],
          loesung:[0,1,2,3,4,5],
          erklaerung:'Steht „Meiner Ansicht nach" im Vorfeld, folgt sofort das gebeugte Verb „sollte". Der Infinitiv wandert ans Ende.' },
        { art:'ordnen', frage:'Bau die Einräumung mit „zwar … allerdings".',
          teile:['Zwar','verursacht','das Modell','höhere Kosten,','allerdings','sinkt','der Krankenstand','deutlich'],
          loesung:[0,1,2,3,4,5,6,7],
          erklaerung:'Beide Signalwörter stehen im Vorfeld, deshalb folgt jeweils direkt das Verb: zwar verursacht …, allerdings sinkt …' },
        { art:'ordnen', frage:'Bau die Begründung mit „weil" und Modalverb.',
          teile:['Ein Verbot','ist','sinnvoll,','weil','sich','die Klasse','sonst','kaum','konzentrieren','kann'],
          loesung:[0,1,2,3,4,5,6,7,8,9],
          erklaerung:'Im weil-Satz steht das gebeugte Verb ganz am Ende, hinter dem Infinitiv: … konzentrieren kann.' },
        { art:'ordnen', frage:'Bau den Satz mit „indem".',
          teile:['Die Stadt','könnte','den Nahverkehr','entlasten,','indem','sie','die Taktzeiten','verkürzt'],
          loesung:[0,1,2,3,4,5,6,7],
          erklaerung:'„indem" nennt das Mittel und leitet einen Nebensatz ein — Verb am Ende: … verkürzt.' },
        { art:'ordnen', frage:'Bau das Fazit.',
          teile:['Aus diesen Gründen','halte','ich','eine schrittweise Einführung','für','den besseren Weg'],
          loesung:[0,1,2,3,4,5],
          erklaerung:'„etwas für etwas halten" ist die feste Wendung für ein Urteil. Nach dem Vorfeld folgt sofort „halte".' },
        { art:'ordnen', frage:'Bau die besonders höfliche Bitte.',
          teile:['Ich','wäre','Ihnen','sehr verbunden,','wenn','Sie','den Vorgang','noch einmal','prüfen','würden'],
          loesung:[0,1,2,3,4,5,6,7,8,9],
          erklaerung:'Im wenn-Satz steht „würden" ganz am Ende, hinter dem Infinitiv „prüfen". Der Konjunktiv macht die Bitte weich.' },
        { art:'ordnen', frage:'Bau die sachliche Folge.',
          teile:['Dadurch','entstehen','mir','zusätzliche Kosten','in Höhe von','achtzig Euro'],
          loesung:[0,1,2,3,4,5],
          erklaerung:'„Dadurch" im Vorfeld, dann das Verb. „in Höhe von" ist die schriftsprachliche Form für eine Betragsangabe.' },
        { art:'ordnen', frage:'Bau den Vorschlag an den Arbeitgeber.',
          teile:['Ich','schlage','vor,','das Modell','für','sechs Monate','zu','erproben'],
          loesung:[0,1,2,3,4,5,6,7],
          erklaerung:'„vorschlagen" ist trennbar: schlage … vor. Der Nebensatz folgt mit „zu" plus Infinitiv am Ende.' }
      ] }
  ],

  /* ==========================================================
     STUFE 3 — die echten Prüfungsteile
     ========================================================== */

  teile: [

    { nr:1, art:'mitteilung', name:'Stellungnahme im Forum',
      kurz:'Meinung, Begründung, Gegenargument — etwa 150 Wörter',
      was:'Du liest einen Diskussionsbeitrag im Internet und schreibst deine Stellungnahme. Bewertet wird, ob du eine These vertrittst, sie stützt, ein Gegenargument einräumst und entkräftest und zu einem Schluss kommst.',
      tipp:'Der Bauplan: Einstieg mit Zuspitzung, These, Begründung mit Beispiel, Einräumung mit „zwar … allerdings", Fazit, Frage an die anderen. Plane zwei Minuten für die Gliederung — das spart am Ende zehn.',
      zeichen:'💬', farbe:'turq', punkte:20,
      runden: [

        { id:'s1r1', titel:'Runde 1',
          aufgaben: [
            { situation:'Im Forum „Arbeitswelt heute" schreibt jemand, sein Unternehmen hole alle Beschäftigten wieder vollständig ins Büro zurück. Schreiben Sie Ihre Stellungnahme.',
              sorte:'forum', an:'Forum „Arbeitswelt heute"', betreff:'Zurück ins Büro — richtig oder überholt?',
              punkte: [
                { nr:1, was:'Standpunkt', hinweis:'Formuliere eine klare These, keine Beobachtung.' },
                { nr:2, was:'Begründung', hinweis:'Stütze sie mit einem Grund und einem konkreten Beispiel.' },
                { nr:3, was:'Gegenargument und Fazit', hinweis:'Räume einen Einwand ein, entkräfte ihn und ziehe einen Schluss.' }
              ],
              muster:'In der Debatte um die Rückkehr ins Büro wird ein Punkt regelmäßig übersehen: Es geht nicht um Anwesenheit, sondern um Ergebnisse.\nMeiner Ansicht nach sollten Unternehmen mindestens zwei feste Homeoffice-Tage anbieten. Wer den täglichen Weg spart, gewinnt Zeit und arbeitet konzentrierter, zumal in vielen Großraumbüros ohnehin ständig jemand stört. Konzentrierte Aufgaben erledige ich zu Hause in etwa der Hälfte der Zeit, weil niemand dazwischenfragt. In meinem Team ist die Zahl der Krankmeldungen deutlich gesunken, seit wir flexibel entscheiden dürfen.\nZwar verstehe ich den Einwand der Geschäftsleitung, dass spontane Absprachen wegfallen und neue Kolleginnen schwerer hineinfinden. Allerdings lässt sich genau das mit zwei gemeinsamen Bürotagen pro Woche lösen; die Zusammenarbeit leidet erst, wenn niemand mehr verbindlich vor Ort ist.\nAus diesen Gründen halte ich ein festes Mischmodell für den besseren Weg: Präsenz dort, wo sie wirklich etwas bringt, und Ruhe dort, wo konzentriert gearbeitet wird.\nWie ist das bei euch geregelt?',
              woerter:150,
              hilfen:['In der Debatte um … wird ein Punkt übersehen: …','Meiner Ansicht nach sollte …, zumal …','Zwar …, allerdings …'],
              erklaerung:'Die Einräumung ist das Herzstück. Wer den Einwand der Gegenseite nur nennt und stehen lässt, bekommt weniger Punkte als jemand, der ihn anschließend entkräftet.' },

            { situation:'Im Forum „Arbeitswelt heute" wird gefragt, ob die Vier-Tage-Woche bei vollem Lohn eingeführt werden sollte. Schreiben Sie Ihre Stellungnahme.',
              sorte:'forum', an:'Forum „Arbeitswelt heute"', betreff:'Vier-Tage-Woche bei vollem Lohn?',
              punkte: [
                { nr:1, was:'Standpunkt', hinweis:'Sag klar, wofür du bist — und unter welcher Bedingung.' },
                { nr:2, was:'Begründung', hinweis:'Nenne einen Grund und belege ihn mit einer Erfahrung.' },
                { nr:3, was:'Gegenargument und Fazit', hinweis:'Nimm den stärksten Einwand ernst und antworte darauf.' }
              ],
              muster:'Die Diskussion über die Vier-Tage-Woche wird oft so geführt, als ginge es allein um weniger Arbeit. Tatsächlich geht es darum, wie sinnvoll wir die Zeit nutzen.\nIch halte eine Vier-Tage-Woche bei vollem Lohnausgleich für richtig, sofern die Aufgaben vorher ehrlich sortiert werden. In Betrieben, die das erprobt haben, gingen Krankenstand und Kündigungen zurück, während die Ergebnisse stabil blieben. Eine befreundete Agentur arbeitet seit zwei Jahren so und findet inzwischen leichter Fachkräfte als die gesamte Konkurrenz. Wer dort kündigt, tut das inzwischen aus privaten Gründen und nicht wegen der Belastung.\nZwar lässt sich das Modell in Pflege, Handwerk und Handel nicht einfach übertragen, weil dort Schichten besetzt sein müssen. Allerdings spricht das nicht gegen den Versuch, sondern für zusätzliche Stellen — und zwar genau dort, wo heute ohnehin kaum jemand bleiben will.\nDeshalb wäre ich dafür, das Modell branchenweise zu erproben, statt es pauschal abzulehnen.\nWelche Erfahrungen habt ihr damit gemacht?',
              woerter:150,
              hilfen:['Ich halte … für richtig, sofern …','Zwar lässt sich …, allerdings spricht das nicht gegen …, sondern für …','Deshalb wäre ich dafür, … zu erproben.'],
              erklaerung:'„sofern" macht aus einer Forderung eine bedingte Forderung — genau diese Differenzierung erwarten die Prüfenden auf B2.' }
          ] },

        { id:'s1r2', titel:'Runde 2',
          aufgaben: [
            { situation:'Im Forum „Schule und Familie" wird diskutiert, ob Handys an Schulen komplett verboten werden sollten. Schreiben Sie Ihre Stellungnahme.',
              sorte:'forum', an:'Forum „Schule und Familie"', betreff:'Handyverbot an Schulen',
              punkte: [
                { nr:1, was:'Standpunkt', hinweis:'Beziehe klar Position, gern mit einer Einschränkung.' },
                { nr:2, was:'Begründung', hinweis:'Begründe und nenne ein Beispiel aus deinem Umfeld.' },
                { nr:3, was:'Gegenargument und Fazit', hinweis:'Greife den häufigsten Einwand auf und schließe ab.' }
              ],
              muster:'Beim Handyverbot an Schulen prallen zwei Sichtweisen aufeinander: Schutz auf der einen, Eigenverantwortung auf der anderen Seite.\nIch bin dafür, Handys während des Unterrichts und in den Pausen einzusammeln, allerdings nur bis zur zehnten Klasse. Jüngere Schülerinnen und Schüler können der ständigen Ablenkung kaum widerstehen, zumal viele Anwendungen genau darauf ausgelegt sind. An der Schule meiner Nichte wird seit einem Jahr so verfahren, und die Lehrkräfte berichten, dass in den Pausen wieder geredet und gespielt wird. Auch die Streitigkeiten über heimlich aufgenommene Videos sind dort deutlich zurückgegangen.\nZwar wird eingewendet, ein Verbot verhindere den Lernprozess, den Jugendliche im Umgang mit Medien durchlaufen müssen. Dennoch halte ich diesen Einwand für schwach: Medienkompetenz entsteht nicht von allein, sondern im Unterricht — und dafür braucht es Regeln statt Dauerablenkung.\nInsofern plädiere ich für ein Verbot mit Augenmaß, verbunden mit verbindlichem Medienunterricht.\nWie handhaben eure Schulen das?',
              woerter:150,
              hilfen:['Ich bin dafür, …, allerdings nur …','Zwar wird eingewendet, … Dennoch halte ich diesen Einwand für schwach.','Insofern plädiere ich für …'],
              erklaerung:'„Zwar wird eingewendet, …" ist eine elegante Art, das Gegenargument einzuführen, ohne es selbst zu vertreten. Danach folgt die Entkräftung mit „dennoch".' },

            { situation:'Im Forum „Stadt und Verkehr" fordert jemand, Busse und Bahnen sollten überall kostenlos sein. Schreiben Sie Ihre Stellungnahme.',
              sorte:'forum', an:'Forum „Stadt und Verkehr"', betreff:'Nulltarif im Nahverkehr?',
              punkte: [
                { nr:1, was:'Standpunkt', hinweis:'Sag, ob du den Nulltarif für den richtigen Schritt hältst.' },
                { nr:2, was:'Begründung', hinweis:'Begründe mit einer Beobachtung aus deiner Region.' },
                { nr:3, was:'Gegenargument und Fazit', hinweis:'Räume das stärkste Gegenargument ein und schlage etwas vor.' }
              ],
              muster:'Ob Busse und Bahnen kostenlos sein sollten, hängt für mich davon ab, was man damit erreichen will.\nMeiner Ansicht nach wäre ein Nulltarif der falsche erste Schritt. Wer heute mit dem Auto fährt, tut das selten wegen des Preises, sondern weil der Bus nur zweimal pro Stunde fährt und abends gar nicht mehr. Bei uns im Landkreis wurden die Tarife gesenkt, an der Auslastung änderte sich nichts; erst der neue Halbstundentakt brachte volle Züge. Solange die letzte Verbindung um zwanzig Uhr endet, bleibt das Auto für Berufstätige alternativlos.\nZwar entlastet ein kostenloses Ticket Haushalte mit wenig Geld spürbar, und dieses Argument wiegt schwer. Allerdings nützt der günstigste Fahrschein wenig, wenn der Zug überfüllt ist oder gestrichen wird. Sinnvoller wäre daher ein günstiges Sozialticket, verbunden mit dem konsequenten Ausbau der Strecken.\nKurz gesagt: erst das Angebot, dann der Preis.\nWie sieht es bei euch aus, würdet ihr umsteigen?',
              woerter:150,
              hilfen:['… hängt davon ab, was man erreichen will.','Zwar entlastet …, allerdings nützt … wenig, wenn …','Kurz gesagt: erst …, dann …'],
              erklaerung:'Wer ein Argument der Gegenseite ausdrücklich als schwerwiegend anerkennt („dieses Argument wiegt schwer"), wirkt souverän — und darf danach umso deutlicher widersprechen.' }
          ] },

        { id:'s1r3', titel:'Runde 3',
          aufgaben: [
            { situation:'Im Forum „Essen und Umwelt" wird gefragt, ob Kantinen ihr Fleischangebot deutlich reduzieren sollten. Schreiben Sie Ihre Stellungnahme.',
              sorte:'forum', an:'Forum „Essen und Umwelt"', betreff:'Weniger Fleisch in der Kantine?',
              punkte: [
                { nr:1, was:'Standpunkt', hinweis:'Nenne deine Position und werde konkret.' },
                { nr:2, was:'Begründung', hinweis:'Begründe und nenne eine Beobachtung aus deinem Betrieb.' },
                { nr:3, was:'Gegenargument und Fazit', hinweis:'Nimm den Vorwurf der Bevormundung ernst und antworte darauf.' }
              ],
              muster:'In unserer Kantine wird derzeit heftig darüber gestritten, ob es weiterhin täglich Fleisch geben soll.\nIch halte es für richtig, das Angebot deutlich zu verschieben: zwei vegetarische Gerichte, ein veganes und Fleisch an zwei Tagen pro Woche, dafür in besserer Qualität. Ein gut gewürzter Eintopf kostet die Küche zudem weniger als ein billiges Schnitzel. Kantinen prägen Gewohnheiten, und wer sich einmal an ein gutes Gemüsegericht gewöhnt hat, vermisst das Schnitzel erstaunlich selten. Seit unser Betrieb die Reihenfolge in der Auslage geändert hat, greifen spürbar mehr Kolleginnen und Kollegen zum vegetarischen Teller.\nZwar empfinden viele solche Vorgaben als Bevormundung, und diesen Einwand nehme ich ernst. Allerdings wird niemandem etwas verboten; es bleibt eine freie Wahl, nur eben mit einem anderen Standardangebot.\nEntscheidend ist für mich, dass das Essen schmeckt und bezahlbar bleibt. Dann kommt der Rest von allein.\nWie ist das Angebot bei euch, und würdet ihr eine Umstellung mittragen?',
              woerter:150,
              hilfen:['Ich halte es für richtig, … zu verschieben: …','Zwar empfinden viele …, und diesen Einwand nehme ich ernst.','Entscheidend ist für mich, dass …'],
              erklaerung:'Konkrete Zahlen („zwei vegetarische Gerichte, ein veganes") machen aus einer Meinung einen Vorschlag. Das hebt den Text deutlich über B1.' },

            { situation:'Im Forum „Medien und Gesellschaft" wird ein Mindestalter von sechzehn Jahren für soziale Netzwerke gefordert. Schreiben Sie Ihre Stellungnahme.',
              sorte:'forum', an:'Forum „Medien und Gesellschaft"', betreff:'Soziale Netzwerke erst ab sechzehn?',
              punkte: [
                { nr:1, was:'Standpunkt', hinweis:'Sag, was du von einem Mindestalter hältst.' },
                { nr:2, was:'Begründung', hinweis:'Begründe mit einem Beispiel aus deinem Umfeld.' },
                { nr:3, was:'Gegenargument und Fazit', hinweis:'Räume die Sorgen der Gegenseite ein und mach einen Gegenvorschlag.' }
              ],
              muster:'Die Forderung nach einem Mindestalter von sechzehn Jahren wird meist sehr emotional diskutiert. Ein nüchterner Blick lohnt sich trotzdem.\nIch bin skeptisch, ob ein Verbot wirklich hilft. Wer mit dreizehn kein Konto anlegen darf, legt es trotzdem an, nur eben heimlich und ohne Ansprechpartner. Meine Nachbarin hat das bei ihrem Sohn erlebt: Das Verbot führte nicht zu weniger Bildschirmzeit, sondern dazu, dass er zu Hause nichts mehr erzählte. Genau dieser Vertrauensverlust macht Jugendliche verletzlicher, denn im Ernstfall fragen sie niemanden mehr um Rat.\nZwar sind die Hinweise auf Schlafmangel und wachsenden Vergleichsdruck ernst zu nehmen, und die Anbieter tun bis heute zu wenig dagegen. Allerdings wäre es wirksamer, die Unternehmen zu regulieren: keine endlosen Feeds für Minderjährige, keine Werbung, klare Meldewege.\nInsofern bin ich durchaus für strenge Regeln — nur sollten sie die Konzerne treffen und nicht die Jugendlichen.\nWürde ein Mindestalter in euren Familien überhaupt etwas ändern?',
              woerter:150,
              hilfen:['Ich bin skeptisch, ob …','Zwar sind die Hinweise auf … ernst zu nehmen, allerdings wäre es wirksamer, …','Insofern bin ich durchaus für …, nur …'],
              erklaerung:'Auf B2 darf man widersprechen, ohne die Sorgen der Gegenseite abzuwerten. Der Gegenvorschlag am Ende zeigt, dass du das Problem verstanden hast.' }
          ] },

        { id:'s1r4', titel:'Runde 4',
          aufgaben: [
            { situation:'Im Forum „Gesellschaft" wird ein verpflichtendes soziales Jahr für junge Menschen gefordert. Schreiben Sie Ihre Stellungnahme.',
              sorte:'forum', an:'Forum „Gesellschaft"', betreff:'Soziales Pflichtjahr — sinnvoll?',
              punkte: [
                { nr:1, was:'Standpunkt', hinweis:'Sag klar, ob du dafür oder dagegen bist.' },
                { nr:2, was:'Begründung', hinweis:'Begründe mit eigener Erfahrung oder Beobachtung.' },
                { nr:3, was:'Gegenargument und Fazit', hinweis:'Nimm das beste Argument der Gegenseite auf und schließe mit einer Alternative.' }
              ],
              muster:'Ob ein verpflichtendes soziales Jahr eingeführt werden sollte, beschäftigt mich seit Langem, da ich selbst im Rettungsdienst ehrenamtlich tätig bin.\nIch bin dagegen. Ein Ehrenamt lebt davon, dass es freiwillig ist; verpflichtete Kräfte belasten die Einrichtungen häufig mehr, als sie entlasten, zumal jemand sie einarbeiten muss. Bei uns bleiben etwa zwei Drittel derjenigen dabei, die aus eigenem Antrieb gekommen sind — von den Pflichtpraktikanten war es kaum jemand. Die Anleitung kostet unsere hauptamtlichen Kräfte außerdem Zeit, die im Einsatz an anderer Stelle fehlt.\nZwar trifft es zu, dass junge Menschen dadurch Bereiche kennenlernen, die sie sonst nie betreten würden, und dass der Zusammenhalt wächst. Dennoch löst ein Pflichtjahr das eigentliche Problem nicht: Pflege und Betreuung sind unterbesetzt, weil sie schlecht bezahlt und schlecht organisiert sind.\nStatt einer Pflicht wären mir bezahlte Freistellungen für Engagement und eine echte Anerkennung im Lebenslauf lieber.\nWäre ein Pflichtjahr in eurem Umfeld willkommen?',
              woerter:150,
              hilfen:['Ich bin dagegen. … lebt davon, dass …','Zwar trifft es zu, dass …, dennoch löst … das eigentliche Problem nicht.','Statt … wäre mir … lieber.'],
              erklaerung:'„Statt … wäre mir … lieber" ersetzt die abgelehnte Forderung durch eine eigene. Ein Nein wirkt immer stärker, wenn ein Vorschlag folgt.' },

            { situation:'Im Forum „Wohnen" wird über eine gesetzliche Obergrenze für Mieten diskutiert. Schreiben Sie Ihre Stellungnahme.',
              sorte:'forum', an:'Forum „Wohnen"', betreff:'Obergrenze für Mieten?',
              punkte: [
                { nr:1, was:'Standpunkt', hinweis:'Nenne deine Position, gern differenziert.' },
                { nr:2, was:'Begründung', hinweis:'Begründe mit einem konkreten Fall.' },
                { nr:3, was:'Gegenargument und Fazit', hinweis:'Greife den Einwand der Fachleute auf und ziehe einen Schluss.' }
              ],
              muster:'Die Mieten in meiner Stadt sind in fünf Jahren um fast vierzig Prozent gestiegen. Kein Wunder, dass der Ruf nach einer Obergrenze lauter wird.\nIch halte eine Deckelung kurzfristig für richtig, langfristig jedoch für unzureichend. Familien, die seit Jahren in ihrem Viertel wohnen, dürfen nicht verdrängt werden, nur weil nach einer Renovierung das Doppelte verlangt werden kann. Eine Kollegin pendelt inzwischen achtzig Kilometer, weil sie in der Nähe nichts Bezahlbares mehr gefunden hat. Für Pflegekräfte, Busfahrerinnen und Erzieher wird die Stadt unbezahlbar, obwohl sie genau dort gebraucht werden.\nZwar warnen Fachleute zu Recht, dass strenge Grenzen den Neubau bremsen und Wohnungen ganz vom Markt verschwinden. Allerdings entsteht bezahlbarer Wohnraum auch ohne Deckel nicht von allein; dafür braucht es Bauland, kommunale Gesellschaften und weniger Ferienwohnungen.\nBeides zusammen wäre die Lösung, eines allein hilft niemandem.\nWie hat sich die Miete bei euch entwickelt?',
              woerter:150,
              hilfen:['Ich halte … kurzfristig für richtig, langfristig jedoch für unzureichend.','Zwar warnen Fachleute zu Recht, dass …','Beides zusammen wäre die Lösung, eines allein …'],
              erklaerung:'„kurzfristig … langfristig" ist ein einfacher Trick, um eine Position zu differenzieren, ohne unentschlossen zu wirken.' }
          ] },

        { id:'s1r5', titel:'Runde 5',
          aufgaben: [
            { situation:'Im Forum „Beruf und Bildung" wird gefragt, ob Betriebe Weiterbildung während der Arbeitszeit ermöglichen müssen. Schreiben Sie Ihre Stellungnahme.',
              sorte:'forum', an:'Forum „Beruf und Bildung"', betreff:'Weiterbildung in der Arbeitszeit?',
              punkte: [
                { nr:1, was:'Standpunkt', hinweis:'Formuliere eine konkrete Forderung.' },
                { nr:2, was:'Begründung', hinweis:'Begründe mit Zahlen oder einer Erfahrung.' },
                { nr:3, was:'Gegenargument und Fazit', hinweis:'Nimm die Lage kleiner Betriebe ernst und schlage eine Lösung vor.' }
              ],
              muster:'In der Diskussion über Weiterbildung höre ich oft, dafür sei schließlich die Freizeit da. Genau darin liegt der Denkfehler.\nMeiner Ansicht nach sollten Betriebe jährlich fünf bezahlte Bildungstage garantieren. Die Anforderungen ändern sich rasant, und wer abends nach der Schicht noch lernen soll, bricht die Kurse erfahrungsgemäß ab. In meinem früheren Betrieb haben von zwölf Angemeldeten nur drei den Abendkurs beendet, während der Tageskurs vollständig durchlief. Wer erschöpft in einen Kurs geht, lernt zudem messbar weniger; das gilt in jedem Alter.\nZwar ist der Einwand berechtigt, dass kleine Firmen den Ausfall kaum auffangen können, zumal Fachkräfte ohnehin knapp sind. Allerdings ließe sich das über einen gemeinsamen Fonds und über eine Planung im ruhigen Winterhalbjahr regeln; teurer als ständige Neueinstellungen wäre es kaum.\nWer heute nicht ausbildet, sucht morgen vergeblich — und zahlt am Ende das Doppelte an eine Personalagentur.\nWie viel Weiterbildung ist bei euch üblich, und wer bezahlt sie?',
              woerter:150,
              hilfen:['Genau darin liegt der Denkfehler.','Zwar ist der Einwand berechtigt, dass …, zumal …','Allerdings ließe sich das über … regeln.'],
              erklaerung:'Ein kurzer, zugespitzter Satz als Fazit („Wer heute nicht ausbildet, sucht morgen vergeblich.") wirkt stärker als eine lange Zusammenfassung.' },

            { situation:'Im Forum „Familie und Beruf" wird diskutiert, ob ein fester Anteil der Elternzeit für den zweiten Elternteil reserviert werden sollte. Schreiben Sie Ihre Stellungnahme.',
              sorte:'forum', an:'Forum „Familie und Beruf"', betreff:'Elternzeit gerechter aufteilen?',
              punkte: [
                { nr:1, was:'Standpunkt', hinweis:'Sag klar, ob du eine verbindliche Regelung befürwortest.' },
                { nr:2, was:'Begründung', hinweis:'Begründe und nenne ein Beispiel.' },
                { nr:3, was:'Gegenargument und Fazit', hinweis:'Greife den Einwand der Bevormundung auf und schließe ab.' }
              ],
              muster:'Dass Väter im Schnitt nur zwei Monate Elternzeit nehmen, ist kein Zufall, sondern das Ergebnis stiller Erwartungen im Betrieb.\nIch bin dafür, einen festen Anteil verbindlich für den zweiten Elternteil zu reservieren. Nur wenn die Zeit sonst verfällt, wird sie auch genommen; der Blick nach Skandinavien zeigt das sehr deutlich. Ein Kollege hat sechs Monate übernommen und sagt heute, er habe seinen Haushalt und sein Kind vorher schlicht nicht gekannt. In seiner Abteilung haben danach zwei weitere Kollegen ebenfalls länger ausgesetzt.\nZwar wird eingewendet, der Staat solle sich nicht in Familienentscheidungen einmischen. Allerdings ist die heutige Aufteilung kaum eine freie Entscheidung, sondern folgt dem Gehaltsunterschied und der Sorge vor Nachteilen im Beruf. Solange Elternzeit als Karriererisiko gilt, entscheidet nicht die Familie, sondern der Betrieb.\nEine verbindliche Regelung nimmt genau diesen Druck von den Familien, statt ihn zu erhöhen.\nWie war das bei euch, hat der Vater länger als zwei Monate ausgesetzt?',
              woerter:150,
              hilfen:['… ist kein Zufall, sondern das Ergebnis …','Nur wenn …, wird … auch …','Zwar wird eingewendet, …, allerdings ist … kaum eine freie Entscheidung.'],
              erklaerung:'„nicht …, sondern …" schärft eine These sofort. Der Satz sagt nicht nur, was du meinst, sondern auch, was du ablehnst.' }
          ] },
      ] },

    { nr:2, art:'mitteilung', name:'Formelle Nachricht',
      kurz:'Beschwerde, Bitte, Vorschlag — etwa 100 Wörter',
      was:'Du schreibst an eine Firma, eine Verwaltung oder deinen Arbeitgeber. Beschwerde, Bitte um Kulanz, Vorschlag oder Reklamation — sachlich, höflich-distanziert und mit klarem Anliegen.',
      tipp:'Vier Schritte: Anlass mit Datum oder Nummer, Sachverhalt, Folge für dich, konkrete Bitte mit Frist. Kein Ärger, keine Drohung, keine Emojis — Nachdruck entsteht durch Fakten.',
      zeichen:'📮', farbe:'rot', punkte:10,
      runden: [

        { id:'s2r1', titel:'Runde 1',
          aufgaben: [
            { situation:'Im Vorderhaus Ihres Mietshauses wird seit drei Wochen umgebaut, angekündigt wurde nichts. Sie arbeiten im Schichtdienst. Schreiben Sie an die Hausverwaltung.',
              sorte:'email', an:'Hausverwaltung Ahrens', betreff:'Bauarbeiten im Vorderhaus, Wohnung 2 links',
              punkte: [
                { nr:1, was:'Sachverhalt', hinweis:'Nenne Zeitraum und Vorgang sachlich.' },
                { nr:2, was:'Folge', hinweis:'Erkläre, was das für dich bedeutet.' },
                { nr:3, was:'Bitte mit Frist', hinweis:'Bitte um Zeitplan und um eine konkrete Einschränkung.' }
              ],
              muster:'Sehr geehrte Frau Ahrens,\nseit dem vierten März wird im Vorderhaus umgebaut. Die Arbeiten beginnen regelmäßig vor sieben Uhr und dauern bis in den Abend; angekündigt wurden sie mir nicht.\nDa ich im Schichtdienst arbeite und tagsüber schlafen muss, ist die Belastung erheblich. Den Umbau möchte ich keineswegs verzögern, ich benötige jedoch Planungssicherheit.\nIch bitte Sie daher, mir bis zum kommenden Freitag den vorgesehenen Zeitplan zukommen zu lassen und die lautesten Arbeiten auf die Zeit zwischen neun und siebzehn Uhr zu beschränken.\nFür eine kurze Rückmeldung wäre ich Ihnen sehr verbunden.\nMit freundlichen Grüßen\nKatrin Söllner',
              woerter:100,
              hilfen:['Seit dem … wird …; angekündigt wurde mir nichts.','Da ich …, ist die Belastung erheblich.','Ich bitte Sie daher, mir bis … zukommen zu lassen.'],
              erklaerung:'Der Satz „Den Umbau möchte ich keineswegs verzögern" nimmt der Beschwerde die Schärfe, ohne die Forderung zurückzunehmen. Genau diese Balance wird bewertet.' },

            { situation:'Sie haben einen Abendkurs bezahlt, waren aber lange krank und konnten nur vier von zwanzig Terminen besuchen. Eine Erstattung ist laut Bedingungen ausgeschlossen. Schreiben Sie an die Sprachschule.',
              sorte:'email', an:'Sprachschule Lingua Nova', betreff:'Kursgebühr Abendkurs B2, Buchung 3288',
              punkte: [
                { nr:1, was:'Anlass', hinweis:'Nenne Kurs, Buchungsnummer und was passiert ist.' },
                { nr:2, was:'Einräumung', hinweis:'Zeig, dass du die Bedingungen kennst.' },
                { nr:3, was:'Bitte um Kulanz', hinweis:'Bitte um Entgegenkommen und nenne eine Alternative.' }
              ],
              muster:'Sehr geehrte Damen und Herren,\nich habe den Abendkurs B2 gebucht, der am achten Januar begonnen hat (Buchung 3288). Nach der zweiten Sitzung bin ich längere Zeit erkrankt und konnte nur vier von zwanzig Terminen wahrnehmen; ein ärztliches Attest füge ich bei.\nMir ist bewusst, dass die Gebühr nach Ihren Bedingungen nicht erstattet wird. Dennoch möchte ich Sie bitten, den Fall zu prüfen und mir aus Kulanz entgegenzukommen.\nAuch eine Anrechnung des Betrags auf den Kurs im Herbst wäre für mich eine gute Lösung.\nÜber eine wohlwollende Prüfung würde ich mich sehr freuen.\nMit freundlichen Grüßen\nIbrahim Cetin',
              woerter:100,
              hilfen:['Mir ist bewusst, dass …','Dennoch möchte ich Sie bitten, den Fall zu prüfen.','Auch … wäre für mich eine gute Lösung.'],
              erklaerung:'Bei einer Kulanzbitte gibt es keinen Anspruch. Deshalb zuerst die Regel anerkennen, dann bitten — und immer eine zweite Lösung anbieten.' }
          ] },

        { id:'s2r2', titel:'Runde 2',
          aufgaben: [
            { situation:'In Ihrer Abteilung wird seit Längerem über feste Homeoffice-Tage gesprochen. Schreiben Sie Ihrem Abteilungsleiter einen Vorschlag.',
              sorte:'email', an:'Herr Dr. Wendt, Abteilungsleitung', betreff:'Vorschlag: feste Bürotage statt Anwesenheitspflicht',
              punkte: [
                { nr:1, was:'Anlass', hinweis:'Sag, warum du schreibst.' },
                { nr:2, was:'Vorschlag', hinweis:'Beschreibe das Modell konkret.' },
                { nr:3, was:'Nutzen und Erprobung', hinweis:'Nenne den Vorteil und schlage einen Testzeitraum vor.' }
              ],
              muster:'Sehr geehrter Herr Dr. Wendt,\nim Team wird seit Längerem über feste Homeoffice-Tage gesprochen. Dazu möchte ich Ihnen einen konkreten Vorschlag unterbreiten.\nDenkbar wären zwei feste Bürotage für alle, Dienstag und Donnerstag, sowie freie Wahl an den übrigen Tagen. Besprechungen ließen sich auf die Präsenztage legen; an der Erreichbarkeit würde sich nichts ändern.\nFür die Abteilung sähe ich zwei Vorteile: weniger Ausfälle durch lange Pendelzeiten und ein Argument bei der Suche nach Fachkräften.\nIch schlage vor, das Modell zunächst für sechs Monate zu erproben und anschließend gemeinsam auszuwerten.\nGern stelle ich Ihnen die Einzelheiten in einem kurzen Gespräch vor.\nMit freundlichen Grüßen\nMarek Lindner',
              woerter:100,
              hilfen:['Dazu möchte ich Ihnen einen konkreten Vorschlag unterbreiten.','Denkbar wären …','Ich schlage vor, … zunächst für … zu erproben.'],
              erklaerung:'Ein Vorschlag nach oben braucht drei Dinge: ein konkretes Modell, den Nutzen für den Betrieb und eine befristete Erprobung. „Denkbar wären …" hält die Tür offen.' },

            { situation:'Ihr Notebook war innerhalb weniger Monate dreimal mit demselben Fehler in Reparatur. Sie brauchen es beruflich täglich. Schreiben Sie an den Händler.',
              sorte:'email', an:'Kundenservice Technikhaus Nord', betreff:'Dritte Reparatur, Rechnungsnummer 20419',
              punkte: [
                { nr:1, was:'Sachverhalt', hinweis:'Nenne Kaufdatum, Nummer und Verlauf.' },
                { nr:2, was:'Bewertung', hinweis:'Sag sachlich, warum das für dich nicht mehr zumutbar ist.' },
                { nr:3, was:'Forderung mit Frist', hinweis:'Fordere Ersatz oder Erstattung bis zu einem Datum.' }
              ],
              muster:'Sehr geehrte Damen und Herren,\nam elften Februar habe ich bei Ihnen ein Notebook erworben (Rechnungsnummer 20419). Seitdem war das Gerät dreimal in Reparatur; derselbe Fehler tritt nach wenigen Tagen erneut auf.\nDamit ist die Nachbesserung aus meiner Sicht fehlgeschlagen. Ich habe zweimal ohne Ergebnis abgewartet, benötige das Gerät jedoch beruflich täglich.\nIch fordere Sie daher auf, mir bis zum dreißigsten Mai ein neues Gerät gleicher Ausstattung zu liefern oder den Kaufpreis zu erstatten.\nSollte ich bis dahin keine Rückmeldung erhalten, werde ich weitere Schritte prüfen.\nMit freundlichen Grüßen\nSofia Marek',
              woerter:100,
              hilfen:['Seitdem war das Gerät dreimal in Reparatur.','Damit ist die Nachbesserung aus meiner Sicht fehlgeschlagen.','Ich fordere Sie daher auf, mir bis zum … zu liefern oder … zu erstatten.'],
              erklaerung:'Hier ist „Ich fordere Sie auf" angemessen, weil ein Anspruch besteht. Der Nachdruck kommt aus Datum, Nummer und Frist — nicht aus Ärger.' }
          ] },

        { id:'s2r3', titel:'Runde 3',
          aufgaben: [
            { situation:'Ihre Bahnverbindung zur Arbeit fällt seit Wochen mehrmals wöchentlich aus. Sie haben ein Jahresabonnement. Schreiben Sie an den Verkehrsverbund.',
              sorte:'email', an:'Verkehrsverbund, Kundenservice', betreff:'Ausfälle Linie S4, Kundennummer 77312',
              punkte: [
                { nr:1, was:'Sachverhalt', hinweis:'Nenne Linie, Zeitraum und Kundennummer.' },
                { nr:2, was:'Folge', hinweis:'Beziffere den entstandenen Nachteil.' },
                { nr:3, was:'Bitte', hinweis:'Bitte um Auskunft und um anteilige Erstattung.' }
              ],
              muster:'Sehr geehrte Damen und Herren,\nich besitze seit zwei Jahren ein Jahresabonnement für die Linie S4 (Kundennummer 77312). Seit Anfang April fällt die Verbindung um sechs Uhr zwölf an mehreren Tagen pro Woche ersatzlos aus.\nDadurch erreiche ich meinen Arbeitsplatz nur noch mit dem Auto, wodurch mir zusätzliche Kosten von rund achtzig Euro im Monat entstehen.\nIch bitte Sie mitzuteilen, ab wann wieder mit einem verlässlichen Fahrplan zu rechnen ist, und den Beitrag für April und Mai anteilig zu erstatten.\nÜber eine Antwort innerhalb der nächsten zwei Wochen wäre ich froh.\nMit freundlichen Grüßen\nAnna Bergström',
              woerter:100,
              hilfen:['Seit Anfang … fällt … ersatzlos aus.','Dadurch entstehen mir zusätzliche Kosten von rund …','Ich bitte Sie mitzuteilen, ab wann …'],
              erklaerung:'Zwei Anliegen in einer Nachricht sind erlaubt, wenn sie klar getrennt sind: Auskunft und Erstattung. Die bezifferte Folge macht die Bitte begründet.' },

            { situation:'In der Kantine Ihres Betriebs gibt es nur ein vegetarisches Gericht, das meist früh ausverkauft ist. Schreiben Sie einen Vorschlag an die Leitung der Kantine.',
              sorte:'email', an:'Frau Kowal, Kantinenleitung', betreff:'Vorschlag zum Mittagsangebot',
              punkte: [
                { nr:1, was:'Anlass', hinweis:'Nenne die Beobachtung, die zum Vorschlag führt.' },
                { nr:2, was:'Vorschlag', hinweis:'Sag konkret, was du änderst würdest.' },
                { nr:3, was:'Angebot', hinweis:'Biete an, etwas dazu beizutragen.' }
              ],
              muster:'Sehr geehrte Frau Kowal,\ndas Mittagsangebot unserer Kantine wird im Haus häufig besprochen. Daher möchte ich Ihnen einen Vorschlag machen.\nDerzeit steht nur ein vegetarisches Gericht zur Wahl, das meist schon vor dreizehn Uhr ausverkauft ist. Ein zweites fleischloses Gericht würde die Wartezeiten verkürzen und käme einer wachsenden Zahl von Beschäftigten entgegen.\nIch schlage vor, die Umstellung zunächst an zwei Tagen pro Woche zu erproben und die Rückmeldungen der Gäste auszuwerten.\nFalls es hilfreich ist, sammle ich gern Vorschläge aus den Abteilungen und stelle sie Ihnen zusammen.\nMit freundlichen Grüßen\nJulian Reiter',
              woerter:100,
              hilfen:['Daher möchte ich Ihnen einen Vorschlag machen.','… würde die Wartezeiten verkürzen und käme … entgegen.','Falls es hilfreich ist, sammle ich gern …'],
              erklaerung:'Wer selbst etwas anbietet, bekommt eher ein Ja. Der Konjunktiv („würde verkürzen", „käme entgegen") hält den Ton höflich und unaufdringlich.' }
          ] },

        { id:'s2r4', titel:'Runde 4',
          aufgaben: [
            { situation:'Sie müssen ein bereits bezahltes Wochenendseminar zehn Tage vorher absagen, weil Ihr Kind krank ist. Laut Bedingungen werden achtzig Prozent einbehalten. Schreiben Sie an den Veranstalter.',
              sorte:'email', an:'Bildungswerk Rheinblick', betreff:'Absage Seminar 17./18. Juni, Buchung 5083',
              punkte: [
                { nr:1, was:'Anlass', hinweis:'Nenne Seminar, Buchungsnummer und Absage.' },
                { nr:2, was:'Grund', hinweis:'Erkläre kurz und sachlich, warum du absagst.' },
                { nr:3, was:'Bitte um Kulanz', hinweis:'Bitte um Entgegenkommen und schlage etwas vor.' }
              ],
              muster:'Sehr geehrte Damen und Herren,\nfür das Wochenendseminar am siebzehnten und achtzehnten Juni habe ich mich verbindlich angemeldet und die Gebühr bereits überwiesen (Buchung 5083).\nLeider muss ich meine Teilnahme absagen: Meine Tochter ist erkrankt, und ich habe kurzfristig keine Betreuung gefunden. Die Absage erfolgt damit zehn Tage vor Beginn.\nMir ist bekannt, dass in diesem Zeitraum achtzig Prozent der Gebühr einbehalten werden. Ich bitte Sie dennoch, mir aus Kulanz entgegenzukommen und mir die Teilnahme an einem späteren Termin zu ermöglichen.\nVielen Dank für Ihr Verständnis.\nMit freundlichen Grüßen\nPetra Hoffmann',
              woerter:100,
              hilfen:['Leider muss ich meine Teilnahme absagen: …','Mir ist bekannt, dass …','Ich bitte Sie dennoch, mir … zu ermöglichen.'],
              erklaerung:'Ein Umbuchungswunsch ist für den Veranstalter billiger als eine Rückzahlung — deshalb ist er die klügere Bitte. Der Grund bleibt knapp und ohne Rührseligkeit.' },

            { situation:'Ihr Vermieter kündigt eine Mieterhöhung um zwölf Prozent an, ohne Vergleichswohnungen zu nennen. In der Wohnung gibt es außerdem Mängel. Schreiben Sie ihm.',
              sorte:'email', an:'Herr Baumgartner, Vermieter', betreff:'Ihr Schreiben vom 12. Mai — Mieterhöhung',
              punkte: [
                { nr:1, was:'Bezug', hinweis:'Nimm Bezug auf das Schreiben mit Datum.' },
                { nr:2, was:'Einwand', hinweis:'Nenne sachlich, was fehlt und welche Mängel bestehen.' },
                { nr:3, was:'Bitte mit Frist', hinweis:'Bitte um Nachweis und um Berücksichtigung der Mängel.' }
              ],
              muster:'Sehr geehrter Herr Baumgartner,\nIhr Schreiben vom zwölften Mai mit der Ankündigung einer Mieterhöhung um zwölf Prozent habe ich erhalten.\nDie Erhöhung wird mit dem Mietspiegel begründet, ohne dass Vergleichswohnungen genannt werden. Zudem ist das Bad seit der Modernisierung im Jahr zweitausendsechs unverändert, und die Fenster im Wohnzimmer schließen seit Längerem nicht mehr dicht.\nIch bitte Sie daher, mir die Berechnung nachvollziehbar darzulegen und die genannten Mängel zu berücksichtigen. Bis zur Klärung sehe ich mich nicht in der Lage, der Erhöhung zuzustimmen.\nFür Ihre Rückmeldung bis Ende des Monats wäre ich Ihnen dankbar.\nMit freundlichen Grüßen\nNadia Khoury',
              woerter:100,
              hilfen:['Ihr Schreiben vom … habe ich erhalten.','… wird begründet, ohne dass … genannt werden.','Bis zur Klärung sehe ich mich nicht in der Lage, … zuzustimmen.'],
              erklaerung:'„Ich sehe mich nicht in der Lage" ist die höfliche Form der Ablehnung. Sie widerspricht deutlich, greift aber niemanden persönlich an.' }
          ] },

        { id:'s2r5', titel:'Runde 5',
          aufgaben: [
            { situation:'Sie möchten im Herbst an einer Fortbildung teilnehmen und dafür Bildungsurlaub beantragen. Schreiben Sie an Ihre Vorgesetzte.',
              sorte:'email', an:'Frau Petersen, Personalleitung', betreff:'Antrag auf Bildungsurlaub, 4. bis 8. November',
              punkte: [
                { nr:1, was:'Anliegen', hinweis:'Nenne Fortbildung und Zeitraum.' },
                { nr:2, was:'Nutzen', hinweis:'Erkläre, was der Betrieb davon hat.' },
                { nr:3, was:'Bitte und Organisation', hinweis:'Bitte um Zustimmung und kläre die Vertretung.' }
              ],
              muster:'Sehr geehrte Frau Petersen,\nich möchte im Herbst an einer Fortbildung zum Thema Projektmanagement teilnehmen. Der Kurs findet vom vierten bis zum achten November statt und schließt mit einem Zertifikat ab.\nDie Inhalte betreffen unmittelbar meine Aufgaben in der Bauleitung; insbesondere die Terminplanung würde davon profitieren. Von den Kosten in Höhe von sechshundert Euro würde ich die Hälfte selbst tragen.\nIch bitte Sie, mir für diese Woche Bildungsurlaub zu gewähren. Meine Vertretung habe ich mit Herrn Özdemir bereits abgestimmt.\nÜber eine positive Entscheidung würde ich mich sehr freuen.\nMit freundlichen Grüßen\nLucas Freitag',
              woerter:100,
              hilfen:['Der Kurs findet vom … bis zum … statt.','Die Inhalte betreffen unmittelbar meine Aufgaben in …','Ich bitte Sie, mir … zu gewähren.'],
              erklaerung:'Ein Antrag überzeugt, wenn er dem Betrieb Arbeit abnimmt: Nutzen benennen, Kosten teilen, Vertretung schon geregelt.' },

            { situation:'Ihre Elternzeit endet bald. Sie möchten zunächst in Teilzeit zurückkehren. Schreiben Sie an Ihren Vorgesetzten.',
              sorte:'email', an:'Herr Neubauer, Teamleitung', betreff:'Rückkehr aus der Elternzeit zum 1. September',
              punkte: [
                { nr:1, was:'Anlass', hinweis:'Nenne das Ende der Elternzeit und deine Rückkehr.' },
                { nr:2, was:'Wunsch', hinweis:'Sag konkret, welche Stunden und Tage du möchtest.' },
                { nr:3, was:'Nutzen und Bitte', hinweis:'Nenne den Vorteil für das Team und bitte um ein Gespräch.' }
              ],
              muster:'Sehr geehrter Herr Neubauer,\nmeine Elternzeit endet am ersten September. Ich freue mich darauf, wieder in die Abteilung zurückzukehren.\nGern würde ich zunächst mit dreißig Wochenstunden einsteigen, verteilt auf Montag bis Donnerstag. Der Betreuungsplatz ist an diesen Tagen gesichert; ab Januar könnte ich die Stunden wieder aufstocken.\nFür das Team hätte diese Lösung den Vorteil, dass ich die Übergabe der laufenden Projekte in Ruhe übernehmen kann, statt sofort in die Vertretung zu wechseln.\nIch bitte Sie, meinem Antrag auf befristete Teilzeit zuzustimmen, und schlage ein Gespräch in den nächsten zwei Wochen vor.\nMit freundlichen Grüßen\nElena Fischer',
              woerter:100,
              hilfen:['Gern würde ich zunächst mit … Wochenstunden einsteigen.','Für das Team hätte diese Lösung den Vorteil, dass …','Ich bitte Sie, meinem Antrag … zuzustimmen.'],
              erklaerung:'Wer einen Wunsch äußert, sollte ihn befristen und den Nutzen für die anderen nennen. „zunächst" und „ab Januar" zeigen, dass du mitgedacht hast.' }
          ] },
      ] }
  ],

  /* ==========================================================
     STUFE 4 — die ganze Prüfung
     ========================================================== */

  laeufe: [

    { id:'p1', titel:'Prüfungslauf 1', minuten:75,
      aufgaben: [
        { situation:'TEIL 1 — Im Forum „Arbeit und Gesellschaft" wird diskutiert, ob Unternehmen ihren Beschäftigten für ehrenamtliches Engagement bezahlte freie Tage geben sollten. Schreiben Sie Ihre Stellungnahme (etwa 150 Wörter).',
          sorte:'forum', an:'Forum „Arbeit und Gesellschaft"', betreff:'Freie Tage für das Ehrenamt?',
          punkte: [
            { nr:1, was:'Standpunkt', hinweis:'Formuliere eine klare These mit konkreter Zahl.' },
            { nr:2, was:'Begründung', hinweis:'Begründe mit einer Erfahrung oder Beobachtung.' },
            { nr:3, was:'Gegenargument und Fazit', hinweis:'Nimm die Lage der Betriebe ernst und schließe mit einem Vorschlag.' }
          ],
          muster:'Die Frage, ob Betriebe freie Tage für ehrenamtliches Engagement gewähren sollten, betrifft mich unmittelbar, da ich in der freiwilligen Feuerwehr aktiv bin.\nIch halte drei bezahlte Tage im Jahr für angemessen. Ohne Ehrenamt funktionieren weder Rettungsdienst noch Vereine, und die Einsätze fallen nun einmal auch werktags an. Wer nach einer durchwachten Nacht pünktlich zur Schicht erscheinen muss, hält das auf Dauer nicht durch. Bei uns haben zwei Kameraden genau deshalb aufgehört, obwohl beide jahrelang dabei waren.\nZwar entstehen den Unternehmen dadurch Ausfälle, die gerade kleine Betriebe schwer auffangen können; dieser Einwand ist ernst zu nehmen. Allerdings profitieren dieselben Betriebe von Beschäftigten, die Verantwortung übernehmen und ruhig bleiben, wenn es eng wird — Fähigkeiten, die kein Seminar vermittelt. Nicht wenige Führungskräfte haben genau dort gelernt, im entscheidenden Moment Verantwortung zu übernehmen.\nSinnvoll wäre daher ein steuerlicher Ausgleich für kleine Firmen, damit das Engagement nicht am Betriebsrisiko scheitert.\nWie wird das in euren Unternehmen gehandhabt?',
          woerter:150,
          hilfen:['Ich halte … für angemessen.','Zwar entstehen …; dieser Einwand ist ernst zu nehmen. Allerdings …','Sinnvoll wäre daher …'],
          erklaerung:'Plane für Teil eins etwa fünfundvierzig Minuten: fünf zum Gliedern, dreißig zum Schreiben, zehn zur Kontrolle. Prüfe am Ende gezielt: These da? Beispiel da? Einräumung mit Entkräftung da? Fazit da?' },

        { situation:'TEIL 2 — Die Parkplätze an Ihrem Arbeitsort sind seit dem Umbau knapp, die Straßenbahn hält jedoch direkt vor dem Haus. Schreiben Sie einen Vorschlag an die Geschäftsleitung (etwa 100 Wörter).',
          sorte:'email', an:'Frau Lindqvist, Geschäftsleitung', betreff:'Vorschlag: bezuschusstes Jobticket',
          punkte: [
            { nr:1, was:'Anlass', hinweis:'Beschreibe die Lage sachlich.' },
            { nr:2, was:'Vorschlag', hinweis:'Nenne die Maßnahme und ihren Nutzen für beide Seiten.' },
            { nr:3, was:'Angebot', hinweis:'Biete an, die Sache vorzubereiten.' }
          ],
          muster:'Sehr geehrte Frau Lindqvist,\nich möchte Ihnen einen Vorschlag zur Anfahrt der Beschäftigten unterbreiten.\nDie Parkplätze am Standort sind seit dem Umbau knapp, gleichzeitig hält die Straßenbahn direkt vor dem Haus. Ein bezuschusstes Jobticket wäre daher für beide Seiten sinnvoll: Der Druck auf die Stellflächen ließe nach, und die monatliche Belastung der Kolleginnen und Kollegen sänke spürbar.\nIch schlage vor, das Ticket zunächst für ein Jahr anzubieten und den Zuschuss auf die Hälfte des Preises zu begrenzen.\nGern bereite ich eine kurze Übersicht über Kosten und Anbieter vor, falls Sie den Vorschlag weiterverfolgen möchten.\nMit freundlichen Grüßen\nTobias Krenn',
          woerter:100,
          hilfen:['Ich möchte Ihnen einen Vorschlag zu … unterbreiten.','… wäre für beide Seiten sinnvoll: …','Gern bereite ich … vor, falls Sie …'],
          erklaerung:'Rechne für Teil zwei mit fünfundzwanzig Minuten. Kontrolliere am Schluss die Form: Betreff konkret? Anrede korrekt? Durchgehend „Sie"? Grußformel und Name vorhanden?' }
      ] },

    { id:'p2', titel:'Prüfungslauf 2', minuten:75,
      aufgaben: [
        { situation:'TEIL 1 — Im Forum „Wohnen in der Stadt" wird gefordert, die Vermietung von Wohnungen an Touristen streng zu begrenzen. Schreiben Sie Ihre Stellungnahme (etwa 150 Wörter).',
          sorte:'forum', an:'Forum „Wohnen in der Stadt"', betreff:'Ferienwohnungen begrenzen?',
          punkte: [
            { nr:1, was:'Standpunkt', hinweis:'Nenne deine Position klar und begründe sie im selben Absatz.' },
            { nr:2, was:'Beispiel', hinweis:'Belege sie mit einer Beobachtung aus deinem Umfeld.' },
            { nr:3, was:'Gegenargument und Fazit', hinweis:'Räume den Einwand der Eigentümer ein und ziehe einen Schluss.' }
          ],
          muster:'In vielen Städten stehen ganze Häuser leer, während Wohnungssuchende Hunderte Bewerbungen schreiben. Über die Begrenzung von Ferienwohnungen sollte deshalb nüchtern gesprochen werden.\nMeiner Ansicht nach gehört die dauerhafte Vermietung an Touristen genehmigungspflichtig gemacht. Wohnraum ist knapp und wird mit öffentlichem Geld gefördert; er sollte dort ankommen, wo Menschen leben und arbeiten. In meinem Haus sind inzwischen drei von acht Wohnungen Ferienwohnungen, die Nachbarschaft wechselt wöchentlich. Der Bäcker an der Ecke hat im Frühjahr geschlossen, weil ihm die Stammkundschaft fehlte.\nZwar sichert der Tourismus Arbeitsplätze, und manche Eigentümerinnen sind auf diese Einnahmen angewiesen. Allerdings ließe sich beides verbinden, indem eine feste Obergrenze pro Gebäude gilt und die Vermietung auf wenige Wochen im Jahr beschränkt wird. Wer seine eigene Wohnung während des Urlaubs vermietet, wäre davon gar nicht betroffen.\nEntscheidend ist am Ende, dass die Regeln auch kontrolliert werden; sonst bleibt es beim Papier.\nWie ist die Lage in eurer Stadt?',
          woerter:150,
          hilfen:['Meiner Ansicht nach gehört … genehmigungspflichtig gemacht.','Zwar sichert …, allerdings ließe sich beides verbinden, indem …','Entscheidend ist am Ende, dass …'],
          erklaerung:'„indem" trägt hier die Lösung: Es sagt nicht nur, dass ein Ausgleich möglich ist, sondern auch wie. Solche Sätze heben eine Stellungnahme sichtbar auf B2.' },

        { situation:'TEIL 2 — In einem Online-Kurs, den Sie für eine Prüfung brauchen, sind mehrere Termine ausgefallen. Ersatztermine wurden nicht angeboten. Schreiben Sie an den Anbieter (etwa 100 Wörter).',
          sorte:'email', an:'Fernakademie Kontor, Kursbetreuung', betreff:'Ausgefallene Termine Kurs Buchhaltung, Teilnehmernummer 9146',
          punkte: [
            { nr:1, was:'Sachverhalt', hinweis:'Nenne Kurs, Nummer und was ausgefallen ist.' },
            { nr:2, was:'Folge', hinweis:'Erkläre, warum das für dich ein Problem ist.' },
            { nr:3, was:'Forderung mit Frist', hinweis:'Verlange Ersatztermine oder anteilige Erstattung.' }
          ],
          muster:'Sehr geehrte Damen und Herren,\nich nehme seit Februar an Ihrem Online-Kurs Buchhaltung teil (Teilnehmernummer 9146).\nVon den bisher zwölf geplanten Terminen sind vier kurzfristig ausgefallen; zwei weitere endeten wegen technischer Störungen nach zwanzig Minuten. Angekündigte Ersatztermine wurden bislang nicht angeboten.\nDa ich den Kurs für meine Prüfung im Juli benötige, ist die Verzögerung für mich ein ernstes Problem.\nIch bitte Sie, mir bis zum kommenden Montag verbindliche Ersatztermine zu nennen. Sollte dies nicht möglich sein, erwarte ich die anteilige Erstattung der Kursgebühr.\nFür Ihre Rückmeldung bedanke ich mich im Voraus.\nMit freundlichen Grüßen\nDilan Yildiz',
          woerter:100,
          hilfen:['Von den bisher … Terminen sind … ausgefallen.','Da ich … benötige, ist die Verzögerung für mich ein ernstes Problem.','Sollte dies nicht möglich sein, erwarte ich …'],
          erklaerung:'Die Kombination aus höflicher Bitte und klarer Alternative („Sollte dies nicht möglich sein, erwarte ich …") erzeugt Nachdruck, ohne unhöflich zu werden.' }
      ] }
  ]

};
