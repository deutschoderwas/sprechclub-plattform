/* ============================================================
   deutschoderwas club — LESEN B1 (Zertifikat B1)

   Aufbau nach der offiziellen Testbeschreibung: fünf Teile,
   dreißig Aufgaben, je ein Punkt, fünfundsechzig Minuten.

     Teil 1  ein Blog- oder Forumsbeitrag, richtig/falsch   6
     Teil 2  zwei Zeitungsmeldungen, je drei Fragen a/b/c   6
     Teil 3  Anzeigen zuordnen — eine passt nie             7
     Teil 4  Meinungen: ist die Person dafür oder dagegen?  7
     Teil 5  Hausordnung oder Anleitung, vier Fragen        4

   Der Sprung von A2 auf B1: Der Text sagt es nicht mehr wörtlich.
   Wer nur nach dem Wort aus der Frage sucht, findet die Falle
   statt der Lösung. Auf B1 wird umschrieben, eingeschränkt und
   zwischen den Zeilen gewertet.

   stelle ist die Fundstelle, die im Rückblick im Text markiert
   wird — sie muss ZEICHENGENAU in den Zeilen vorkommen.
   ============================================================ */

window.LESEN_B1 = {

  niveau: 'B1',
  pruefung: 'Zertifikat B1',
  minuten: 65,
  punkte: 30,

  stufen: [
    { nr:1, titel:'Dasselbe mit anderen Worten', zeichen:'🔁',
      was:'Die Frage benutzt nie die Wörter des Textes. Wer nur sucht, findet die falsche Stelle.' },
    { nr:2, titel:'Haltung erkennen', zeichen:'⚖️',
      was:'Dafür, dagegen oder unentschieden — meist ohne dass eines dieser Wörter im Text steht.' },
    { nr:3, titel:'Die Aufgabentypen', zeichen:'🎯',
      was:'Alle fünf Prüfungsteile einzeln geübt — mit Text, Lösung und der Stelle, an der es stand.' },
    { nr:4, titel:'Die ganze Prüfung', zeichen:'⏱️',
      was:'Fünf Teile, dreißig Aufgaben, fünfundsechzig Minuten mit Uhr — wie am Prüfungstag.' }
  ],

  /* ==========================================================
     STUFE 1 und 2 — Übungen vor den echten Aufgaben
     ========================================================== */

  bloecke: [

    { id:'b1l1b1', stufe:1, titel:'Umschreibungen erkennen',
      kurz:'Ein Wort im Text, ein anderes in der Frage',
      ziel:'Nach diesem Block suchst du nicht mehr nach Wörtern, sondern nach Bedeutungen.',
      zeichen:'🔁', farbe:'turq',
      aufgaben: [
        { art:'wahl', frage:'Im Text steht: „Die Teilnahme ist kostenfrei." Was bedeutet das?',
          opt:['Man muss nichts bezahlen.','Man muss vorher fragen.','Man bekommt Geld dafür.'],
          loesung:0,
          erklaerung:'„kostenfrei" und „kostenlos" heißen dasselbe: gratis.' },
        { art:'wahl', frage:'Im Text steht: „Der Kurs ist bereits ausgebucht." Was heißt das?',
          opt:['Es sind noch Plätze frei.','Es gibt keine Plätze mehr.','Der Kurs fällt aus.'],
          loesung:1,
          erklaerung:'„ausgebucht" heißt: alle Plätze sind vergeben. Der Kurs findet aber statt.' },
        { art:'wahl', frage:'Im Text steht: „Eine Anmeldung ist nicht erforderlich."',
          opt:['Man muss sich anmelden.','Man kann einfach kommen.','Man darf nicht kommen.'],
          loesung:1,
          erklaerung:'„nicht erforderlich" heißt: nicht nötig.' },
        { art:'wahl', frage:'Im Text steht: „Der Betrag wird monatlich abgebucht."',
          opt:['Man überweist selbst jeden Monat.','Das Geld wird automatisch abgezogen.','Man zahlt einmal im Jahr.'],
          loesung:1,
          erklaerung:'„abbuchen" heißt: die Firma holt das Geld selbst vom Konto.' },
        { art:'wahl', frage:'Im Text steht: „Das Angebot gilt nur für Neukunden."',
          opt:['Alle bekommen den Preis.','Nur wer noch nicht Kunde ist.','Nur langjährige Kunden.'],
          loesung:1,
          erklaerung:'„Neukunde" ist jemand, der vorher noch keinen Vertrag hatte.' },
        { art:'wahl', frage:'Im Text steht: „Die Veranstaltung findet bei jeder Witterung statt."',
          opt:['Nur bei gutem Wetter.','Egal wie das Wetter ist.','Nur bei Regen.'],
          loesung:1,
          erklaerung:'„Witterung" ist ein anderes Wort für Wetter.' },
        { art:'wahl', frage:'Im Text steht: „Wir bitten um rechtzeitige Absage."',
          opt:['Man soll früh Bescheid sagen, wenn man nicht kommt.','Man soll auf jeden Fall kommen.','Man soll erst am Tag selbst absagen.'],
          loesung:0,
          erklaerung:'„rechtzeitig" heißt: früh genug, nicht in letzter Minute.' },
        { art:'wahl', frage:'Im Text steht: „Der Eintritt ist ermäßigt für Studierende."',
          opt:['Studierende zahlen mehr.','Studierende zahlen weniger.','Studierende zahlen nichts.'],
          loesung:1,
          erklaerung:'„ermäßigt" heißt reduziert — weniger, aber nicht umsonst.' },
        { art:'wahl', frage:'Im Text steht: „Die Frist läuft am dreißigsten Juni ab."',
          opt:['Am dreißigsten Juni beginnt etwas.','Nach dem dreißigsten Juni geht es nicht mehr.','Der Termin ist unwichtig.'],
          loesung:1,
          erklaerung:'„ablaufen" heißt: zu Ende gehen. Danach ist es zu spät.' },
        { art:'wahl', frage:'Im Text steht: „Wir übernehmen keine Haftung für Wertsachen."',
          opt:['Wertsachen sind versichert.','Bei Verlust zahlt niemand Ersatz.','Wertsachen sind verboten.'],
          loesung:1,
          erklaerung:'„keine Haftung übernehmen" heißt: wir zahlen nicht, wenn etwas wegkommt.' }
      ] },

    { id:'b1l1b2', stufe:1, titel:'Die Falle im Text',
      kurz:'Das gesuchte Wort steht da — aber im falschen Zusammenhang',
      ziel:'Nach diesem Block prüfst du immer, ob die gefundene Stelle wirklich die Frage beantwortet.',
      zeichen:'🪤', farbe:'turq',
      aufgaben: [
        { art:'wahl', frage:'Text: „Der Kurs kostete früher hundertzwanzig Euro, jetzt nur noch neunzig." Was kostet er heute?',
          opt:['Hundertzwanzig Euro.','Neunzig Euro.','Zweihundertzehn Euro.'],
          loesung:1,
          erklaerung:'Die erste Zahl ist der alte Preis. „jetzt nur noch" markiert den gültigen.' },
        { art:'wahl', frage:'Text: „Anders als geplant beginnt der Unterricht nicht um acht, sondern um neun." Wann beginnt er?',
          opt:['Um acht Uhr.','Um neun Uhr.','Er beginnt gar nicht.'],
          loesung:1,
          erklaerung:'Nach „nicht …, sondern" steht immer die richtige Angabe.' },
        { art:'wahl', frage:'Text: „Frau Ott hatte vorgeschlagen, das Fest im Park zu feiern. Am Ende entschied man sich für den Saal." Wo wird gefeiert?',
          opt:['Im Park.','Im Saal.','Es wird nicht gefeiert.'],
          loesung:1,
          erklaerung:'Ein Vorschlag ist noch keine Entscheidung. „Am Ende" zeigt das Ergebnis.' },
        { art:'wahl', frage:'Text: „Viele glauben, Katzen bräuchten wenig Zuwendung. Tatsächlich leiden sie unter Einsamkeit." Was stimmt?',
          opt:['Katzen brauchen wenig Zuwendung.','Katzen brauchen Gesellschaft.','Katzen leben lieber allein.'],
          loesung:1,
          erklaerung:'„Viele glauben … tatsächlich" — der erste Teil ist der Irrtum, der zweite die Aussage.' },
        { art:'wahl', frage:'Text: „Zwar ist der Weg zur Schule weit, dafür ist der Unterricht ausgezeichnet." Wie bewertet der Autor die Schule?',
          opt:['Insgesamt positiv.','Insgesamt negativ.','Er sagt nichts dazu.'],
          loesung:0,
          erklaerung:'„Zwar …, dafür …" nennt einen Nachteil und gleicht ihn mit einem größeren Vorteil aus.' },
        { art:'wahl', frage:'Text: „Ursprünglich wollte die Stadt das Bad schließen. Nach Protesten bleibt es geöffnet." Was passiert mit dem Bad?',
          opt:['Es schließt.','Es bleibt offen.','Es wird verkauft.'],
          loesung:1,
          erklaerung:'„Ursprünglich" kündigt an, dass sich der Plan geändert hat.' },
        { art:'wahl', frage:'Text: „Außer sonntags hat die Bäckerei täglich geöffnet." Wann ist geschlossen?',
          opt:['Sonntags.','Samstags.','Nie.'],
          loesung:0,
          erklaerung:'„außer" nimmt genau einen Tag aus.' },
        { art:'wahl', frage:'Text: „Bis auf zwei Teilnehmer haben alle bestanden." Wie viele sind durchgefallen?',
          opt:['Alle.','Zwei.','Keiner.'],
          loesung:1,
          erklaerung:'„bis auf" heißt: mit Ausnahme von. Also zwei nicht.' },
        { art:'wahl', frage:'Text: „Der Vertrag verlängert sich automatisch, sofern nicht drei Monate vorher gekündigt wird." Was muss man tun, um auszusteigen?',
          opt:['Nichts, er endet von selbst.','Rechtzeitig kündigen.','Den Vertrag neu unterschreiben.'],
          loesung:1,
          erklaerung:'„sofern nicht" nennt die Bedingung, unter der die Verlängerung ausbleibt.' },
        { art:'wahl', frage:'Text: „Der Vortrag richtet sich vor allem an Einsteiger, Fortgeschrittene sind aber willkommen." Wer darf kommen?',
          opt:['Nur Einsteiger.','Beide Gruppen.','Nur Fortgeschrittene.'],
          loesung:1,
          erklaerung:'„vor allem" schließt niemanden aus — das „aber willkommen" bestätigt es.' }
      ] },

    { id:'b1l2b1', stufe:2, titel:'Dafür oder dagegen?',
      kurz:'Die Haltung erkennen, ohne dass sie ausgesprochen wird',
      ziel:'Nach diesem Block ordnest du jede Meinungsäußerung sicher einer Seite zu — das ist Teil vier.',
      zeichen:'⚖️', farbe:'gold',
      aufgaben: [
        { art:'wahl', frage:'„Ich habe drei Kinder und arbeite Vollzeit. Ohne die Ganztagsschule wäre das nicht zu schaffen." Wie steht die Person zur Ganztagsschule?',
          opt:['Dafür.','Dagegen.','Unentschieden.'],
          loesung:0,
          erklaerung:'Sie beschreibt die Schule als Voraussetzung für ihr Leben — deutlicher geht Zustimmung kaum.' },
        { art:'wahl', frage:'„Kinder sollen nachmittags spielen, nicht in der Schule sitzen. Wir haben das früher auch anders geschafft." Haltung?',
          opt:['Dafür.','Dagegen.','Unentschieden.'],
          loesung:1,
          erklaerung:'„Wir haben das früher auch anders geschafft" ist ein klassisches Argument dagegen.' },
        { art:'wahl', frage:'„Grundsätzlich finde ich die Idee richtig. Ob genug Personal da ist, bezweifle ich allerdings." Haltung?',
          opt:['Klar dafür.','Klar dagegen.','Im Grundsatz dafür, aber skeptisch.'],
          loesung:2,
          erklaerung:'Zustimmung plus Zweifel an der Umsetzung — auf B1 sehr häufig.' },
        { art:'wahl', frage:'„Für uns auf dem Dorf ändert das gar nichts, es gibt hier ohnehin nur eine Schule." Haltung?',
          opt:['Dafür.','Dagegen.','Es betrifft die Person nicht.'],
          loesung:2,
          erklaerung:'Kein Urteil, nur die Feststellung, dass es sie nicht angeht.' },
        { art:'wahl', frage:'„Ich habe es ausprobiert und bin zurückgerudert. In der Theorie klingt es besser als im Alltag." Haltung?',
          opt:['Dafür.','Dagegen.','Unentschieden.'],
          loesung:1,
          erklaerung:'„zurückrudern" heißt: eine Entscheidung wieder zurücknehmen.' },
        { art:'wahl', frage:'„Man kann darüber streiten. Ich sehe bei uns im Betrieb aber nur Vorteile." Haltung?',
          opt:['Dafür.','Dagegen.','Unentschieden.'],
          loesung:0,
          erklaerung:'Der erste Satz klingt offen, der zweite entscheidet klar.' },
        { art:'wahl', frage:'„Solange niemand sagt, wer das bezahlt, halte ich das für Wunschdenken." Haltung?',
          opt:['Dafür.','Dagegen.','Unentschieden.'],
          loesung:1,
          erklaerung:'„Wunschdenken" bedeutet: schön gedacht, aber unrealistisch.' },
        { art:'wahl', frage:'„Bei uns läuft es seit zwei Jahren, und ich möchte es nicht mehr missen." Haltung?',
          opt:['Dafür.','Dagegen.','Unentschieden.'],
          loesung:0,
          erklaerung:'„nicht mehr missen wollen" heißt: nicht mehr darauf verzichten wollen.' },
        { art:'wahl', frage:'„Mich überzeugt weder das eine noch das andere Argument. Ich warte erst mal ab." Haltung?',
          opt:['Dafür.','Dagegen.','Unentschieden.'],
          loesung:2,
          erklaerung:'„weder … noch" plus abwarten — die Person legt sich bewusst nicht fest.' },
        { art:'wahl', frage:'„Was mich stört, ist nicht die Sache selbst, sondern wie darüber geredet wird." Haltung zur Sache?',
          opt:['Dafür oder zumindest nicht dagegen.','Klar dagegen.','Sie äußert sich gar nicht.'],
          loesung:0,
          erklaerung:'Sie kritisiert ausdrücklich nicht die Sache, sondern den Ton — also keine Ablehnung der Sache.' }
      ] },

    { id:'b1l2b2', stufe:2, titel:'Amtsdeutsch und Kleingedrucktes',
      kurz:'Hausordnung, Vertrag, Aushang — die Sprache der Regeln',
      ziel:'Nach diesem Block verstehst du, was erlaubt, verboten oder nur empfohlen ist. Das ist Teil fünf.',
      zeichen:'📋', farbe:'gold',
      aufgaben: [
        { art:'wahl', frage:'„Das Abstellen von Fahrrädern im Treppenhaus ist untersagt."',
          opt:['Es ist erlaubt.','Es ist verboten.','Es wird empfohlen.'],
          loesung:1,
          erklaerung:'„untersagt" ist das Amtswort für verboten.' },
        { art:'wahl', frage:'„Es wird gebeten, die Ruhezeiten einzuhalten."',
          opt:['Eine höfliche Aufforderung.','Ein strenges Verbot mit Strafe.','Eine Einladung.'],
          loesung:0,
          erklaerung:'„Es wird gebeten" ist eine Bitte, keine Strafandrohung.' },
        { art:'wahl', frage:'„Kinder haften für ihre Eltern" steht als Scherz auf einem Schild. Was gilt rechtlich meist?',
          opt:['Eltern haften für ihre Kinder.','Kinder haften für Eltern.','Niemand haftet.'],
          loesung:0,
          erklaerung:'Der übliche Satz lautet umgekehrt. Auf B1 lohnt es sich, solche Wendungen zu kennen.' },
        { art:'wahl', frage:'„Die Nutzung erfolgt auf eigene Gefahr."',
          opt:['Der Betreiber übernimmt das Risiko.','Man ist selbst verantwortlich.','Die Nutzung ist verboten.'],
          loesung:1,
          erklaerung:'„auf eigene Gefahr" heißt: bei einem Unfall haftet man selbst.' },
        { art:'wahl', frage:'„Zuwiderhandlungen werden zur Anzeige gebracht."',
          opt:['Verstöße werden gemeldet.','Es gibt eine Belohnung.','Es ist nur ein Hinweis.'],
          loesung:0,
          erklaerung:'„Zuwiderhandlung" ist ein Verstoß, „zur Anzeige bringen" heißt: bei der Polizei melden.' },
        { art:'wahl', frage:'„Die Kündigung bedarf der Schriftform."',
          opt:['Ein Anruf genügt.','Man muss schriftlich kündigen.','Man kann gar nicht kündigen.'],
          loesung:1,
          erklaerung:'„bedarf der Schriftform" heißt: es muss schriftlich sein.' },
        { art:'wahl', frage:'„Die Reinigung des Treppenhauses obliegt den Mietern."',
          opt:['Der Vermieter putzt.','Die Mieter müssen putzen.','Eine Firma putzt.'],
          loesung:1,
          erklaerung:'„obliegen" heißt: es ist die Aufgabe oder Pflicht von jemandem.' },
        { art:'wahl', frage:'„Ausnahmen sind nach Absprache möglich."',
          opt:['Ausnahmen gibt es nie.','Man kann fragen und bekommt vielleicht eine Ausnahme.','Jeder darf ausnahmsweise alles.'],
          loesung:1,
          erklaerung:'„nach Absprache" heißt: wenn man vorher fragt und es vereinbart.' },
        { art:'wahl', frage:'„Der Mietvertrag verlängert sich stillschweigend um ein Jahr."',
          opt:['Man muss aktiv verlängern.','Er verlängert sich von selbst.','Er endet automatisch.'],
          loesung:1,
          erklaerung:'„stillschweigend" heißt: ohne dass jemand etwas tun oder sagen muss.' },
        { art:'wahl', frage:'„Für Schäden wird nur bei grober Fahrlässigkeit gehaftet."',
          opt:['Es wird immer gehaftet.','Nur bei schwerem Verschulden.','Nie.'],
          loesung:1,
          erklaerung:'„grobe Fahrlässigkeit" ist ein besonders schwerer Fehler — nur dann wird gezahlt.' }
      ] }
  ],

  /* ==========================================================
     STUFE 3 — die echten Prüfungsteile
     ========================================================== */

  teile: [

    { nr:1, art:'rf', name:'Blogbeitrag verstehen',
      kurz:'Ein persönlicher Text, sechs Aussagen richtig oder falsch',
      was:'Du liest einen Blog- oder Forumsbeitrag, in dem jemand von sich erzählt. Zu jeder Aussage entscheidest du, ob sie zum Text passt.',
      tipp:'Die Aussagen folgen der Reihenfolge des Textes. Lies immer den ganzen Absatz — die Einschränkung steht oft im nächsten Satz.',
      zeichen:'📝', farbe:'turq', punkte:6,
      runden: [
        { id:'l1r1',
          texte: [ { sorte:'blog', von:'Mareikes Blog — Ein Jahr ohne Auto', betreff:null,
            zeilen: [
              'Vor genau einem Jahr habe ich mein Auto verkauft. Nicht aus Überzeugung, ehrlich gesagt, sondern weil die Reparatur teurer gewesen wäre als der Wagen selbst.',
              'Die ersten Wochen waren hart. Ich wohne am Stadtrand, der Bus fährt abends nur noch stündlich. Zweimal habe ich fast eine neue Karre gekauft.',
              'Dann kam der Sommer, und mit ihm das Fahrrad. Ich fahre jetzt vierzig Minuten zur Arbeit und komme wacher an, als ich es je mit dem Auto war.',
              'Gespart habe ich übrigens weniger, als alle denken. Bahncard, Leihwagen für Besuche bei den Eltern, ab und zu ein Taxi — am Ende sind es vielleicht achtzig Euro im Monat.',
              'Was sich wirklich geändert hat, ist etwas anderes: Ich plane meine Tage anders. Und ich kenne inzwischen die halbe Nachbarschaft, weil man an der Haltestelle eben ins Gespräch kommt.',
              'Würde ich es wieder tun? Ja. Aber ich verstehe jeden, für den es nicht geht. Wer Schichtdienst hat oder kleine Kinder zur Kita bringt, für den ist das keine ehrliche Option.'
            ] } ],
          aufgaben: [
            { satz:'Mareike hat ihr Auto aus Überzeugung verkauft.',
              loesung:false, stelle:'Nicht aus Überzeugung, ehrlich gesagt',
              erklaerung:'Der Grund war die teure Reparatur, nicht die Überzeugung.' },
            { satz:'Am Anfang hat sie über einen neuen Wagen nachgedacht.',
              loesung:true, stelle:'Zweimal habe ich fast eine neue Karre gekauft',
              erklaerung:'„Karre" ist umgangssprachlich für Auto.' },
            { satz:'Sie fährt inzwischen mit dem Rad zur Arbeit.',
              loesung:true, stelle:'Ich fahre jetzt vierzig Minuten zur Arbeit',
              erklaerung:'Der Absatz davor nennt das Fahrrad — der Satz führt es fort.' },
            { satz:'Sie spart sehr viel Geld.',
              loesung:false, stelle:'Gespart habe ich übrigens weniger, als alle denken',
              erklaerung:'Achtzig Euro im Monat nennt sie selbst als bescheiden.' },
            { satz:'Sie hat durch den Verzicht mehr Kontakt zu Nachbarn.',
              loesung:true, stelle:'ich kenne inzwischen die halbe Nachbarschaft',
              erklaerung:'Sie nennt sogar den Grund: das Gespräch an der Haltestelle.' },
            { satz:'Sie empfiehlt allen, das Auto abzuschaffen.',
              loesung:false, stelle:'Aber ich verstehe jeden, für den es nicht geht',
              erklaerung:'Sie schränkt ausdrücklich ein — für Schichtarbeiter hält sie es für unrealistisch.' }
          ] },

        { id:'l1r2',
          texte: [ { sorte:'forum', von:'Forum „Erstes Jahr in Deutschland" — Beitrag von Yusuf', betreff:null,
            zeilen: [
              'Ich bin jetzt vierzehn Monate hier und will kurz aufschreiben, was mir am meisten geholfen hat. Vielleicht nützt es jemandem.',
              'Der Sprachkurs war wichtig, klar. Aber gebracht hat mir am meisten der Nebenjob in der Küche. Da musste ich reden, ob ich wollte oder nicht.',
              'Mit den Ämtern war es schwieriger als gedacht. Nicht wegen der Sprache — die Formulare verstehe ich inzwischen. Sondern weil ich nie wusste, welches Amt für was zuständig ist.',
              'Ein Tipp, den mir niemand gegeben hat: Geht zur Migrationsberatung. Das kostet nichts und die Leute dort kennen die Wege.',
              'Freunde zu finden hat am längsten gedauert. Fast ein Jahr. Am Ende ging es über den Sportverein, nicht über den Kurs.',
              'Was ich falsch gemacht habe: Ich habe zu lange nur mit Landsleuten gesprochen. Verständlich, aber es hat mich ein halbes Jahr gekostet.'
            ] } ],
          aufgaben: [
            { satz:'Yusuf lebt seit mehr als einem Jahr in Deutschland.',
              loesung:true, stelle:'Ich bin jetzt vierzehn Monate hier',
              erklaerung:'Vierzehn Monate sind mehr als zwölf.' },
            { satz:'Für sein Deutsch war der Kurs am wichtigsten.',
              loesung:false, stelle:'gebracht hat mir am meisten der Nebenjob in der Küche',
              erklaerung:'Der Kurs war wichtig, der Job aber wichtiger.' },
            { satz:'Die Formulare der Ämter versteht er nicht.',
              loesung:false, stelle:'die Formulare verstehe ich inzwischen',
              erklaerung:'Sein Problem war die Zuständigkeit, nicht die Sprache.' },
            { satz:'Die Migrationsberatung ist kostenlos.',
              loesung:true, stelle:'Das kostet nichts',
              erklaerung:'Direkt gesagt.' },
            { satz:'Seine Freunde hat er im Sprachkurs gefunden.',
              loesung:false, stelle:'Am Ende ging es über den Sportverein, nicht über den Kurs',
              erklaerung:'Der Kurs wird ausdrücklich ausgeschlossen.' },
            { satz:'Er bereut, anfangs zu wenig Deutsch gesprochen zu haben.',
              loesung:true, stelle:'Ich habe zu lange nur mit Landsleuten gesprochen',
              erklaerung:'Er nennt es selbst einen Fehler, der ihn ein halbes Jahr gekostet hat.' }
          ] },

        { id:'l1r3',
          texte: [ { sorte:'blog', von:'Blog „Zweite Ausbildung mit vierzig"', betreff:null,
            zeilen: [
              'Mit vierzig noch einmal in die Berufsschule — davon hatte ich lange geträumt und es genauso lange verschoben.',
              'Den Ausschlag gab nicht die Unzufriedenheit im alten Job. Es war die Nachricht, dass unsere Abteilung in zwei Jahren geschlossen wird.',
              'Das Geld war die größte Hürde. Ich bekomme jetzt ungefähr die Hälfte von früher. Ohne die Rücklagen meiner Frau wäre es nicht gegangen.',
              'In der Klasse bin ich mit Abstand der Älteste, der Rest ist um die zwanzig. Ich hatte Sorge, dass das komisch wird. Es ist das Gegenteil eingetreten: Wir helfen uns gegenseitig, jeder kann etwas anderes.',
              'Fachlich fällt mir das Praktische leicht, ich habe ja siebzehn Jahre gearbeitet. Schwer tue ich mich mit der Theorie und vor allem mit dem Lernen an sich. Das muss man üben wie einen Muskel.',
              'Ob es sich lohnt, weiß ich in zwei Jahren. Bereut habe ich es bisher an keinem einzigen Tag.'
            ] } ],
          aufgaben: [
            { satz:'Er hat den Schritt lange hinausgeschoben.',
              loesung:true, stelle:'es genauso lange verschoben',
              erklaerung:'„verschieben" ist hier dasselbe wie hinausschieben.' },
            { satz:'Er hat gewechselt, weil ihm der alte Job keinen Spaß mehr machte.',
              loesung:false, stelle:'Den Ausschlag gab nicht die Unzufriedenheit im alten Job',
              erklaerung:'Der eigentliche Grund war die angekündigte Schließung.' },
            { satz:'Er verdient jetzt deutlich weniger.',
              loesung:true, stelle:'Ich bekomme jetzt ungefähr die Hälfte von früher',
              erklaerung:'Die Hälfte ist deutlich weniger.' },
            { satz:'Mit den jungen Mitschülern gibt es Probleme.',
              loesung:false, stelle:'Es ist das Gegenteil eingetreten',
              erklaerung:'Er hatte die Sorge, sie hat sich nicht bestätigt.' },
            { satz:'Der praktische Teil fällt ihm leichter als der theoretische.',
              loesung:true, stelle:'Schwer tue ich mich mit der Theorie',
              erklaerung:'Beide Hälften des Satzes zusammen ergeben die Aussage.' },
            { satz:'Er bereut seine Entscheidung inzwischen.',
              loesung:false, stelle:'Bereut habe ich es bisher an keinem einzigen Tag',
              erklaerung:'Das genaue Gegenteil steht im Text.' }
          ] }
      ] },

    { nr:2, art:'textwahl', name:'Zeitungsmeldungen',
      kurz:'Kurze Zeitungstexte mit je drei Fragen',
      was:'Du liest zwei kurze Zeitungstexte. Zu jedem gibt es drei Fragen mit je drei Antworten.',
      tipp:'Die Antwortmöglichkeiten benutzen fast nie die Wörter des Textes. Suche die Bedeutung, nicht das Wort.',
      zeichen:'📰', farbe:'gold', punkte:6,
      runden: [
        { id:'l2r1',
          text: { sorte:'zeitung', quelle:'Regionalanzeiger', titel:'Aus dem Schwimmbad wird ein Bürgerhaus',
            zeilen: [
              'Das alte Hallenbad an der Poststraße steht seit sieben Jahren leer. Nun hat der Stadtrat entschieden, was daraus wird: ein Bürgerhaus mit Räumen für Vereine, einer Küche und einem Saal für zweihundert Personen.',
              'Der Umbau kostet etwa vier Millionen Euro. Zwei Drittel davon kommen vom Land, den Rest muss die Stadt tragen. Ursprünglich war der Abriss geplant, der wäre allerdings kaum billiger gewesen.',
              'Für die Vereine ist die Entscheidung eine Erleichterung. Bisher mussten sie sich die Turnhalle der Grundschule teilen. „Wir proben seit Jahren zwischen Sportgeräten", sagt Chorleiterin Iris Fend.',
              'Kritik kommt vom Schwimmverein. Er hatte gehofft, das Becken zu retten. Die Stadt verweist auf das neue Freibad, das im Sommer öffnet.'
            ] },
          aufgaben: [
            { frage:'Was passiert mit dem alten Hallenbad?',
              opt:['Es wird abgerissen.','Es wird zu einem Bürgerhaus.','Es bleibt ein Schwimmbad.'],
              loesung:1, stelle:'ein Bürgerhaus mit Räumen für Vereine',
              erklaerung:'Der Abriss war nur der ursprüngliche Plan und wurde verworfen.' },
            { frage:'Wer zahlt den größten Teil des Umbaus?',
              opt:['Das Land.','Die Stadt.','Die Vereine.'],
              loesung:0, stelle:'Zwei Drittel davon kommen vom Land',
              erklaerung:'Zwei Drittel sind mehr als die Hälfte — also der größte Teil.' },
            { frage:'Warum ist der Schwimmverein unzufrieden?',
              opt:['Weil der Umbau zu teuer ist.','Weil das Schwimmbecken verschwindet.','Weil der Saal zu klein ist.'],
              loesung:1, stelle:'Er hatte gehofft, das Becken zu retten',
              erklaerung:'Die Hoffnung auf das Becken erfüllt sich nicht.' }
          ] },

        { id:'l2r2',
          text: { sorte:'zeitung', quelle:'Wochenkurier', titel:'Praxis auf Rädern versorgt die Dörfer',
            zeilen: [
              'Seit Januar rollt im Kreis Uckerfeld ein umgebauter Kleinbus über die Dörfer. An Bord: eine Ärztin, eine Praxisassistentin und alles, was für eine normale Sprechstunde nötig ist.',
              'Der Anlass war ernst. Von acht Hausarztpraxen im Kreis haben in den letzten fünf Jahren fünf geschlossen, weil sich keine Nachfolge fand. Für viele Ältere bedeutete das Wege von über dreißig Kilometern.',
              'Der Bus hält in zwölf Orten nach festem Plan, jeder Ort einmal pro Woche. Termine kann man telefonisch machen, wer keinen hat, wird trotzdem drangenommen — allerdings mit Wartezeit.',
              'Das Modell ist zunächst auf drei Jahre angelegt und wird vom Land finanziert. Ob es danach weitergeht, hängt davon ab, wie viele Menschen es nutzen. Bisher sind die Zahlen besser als erwartet.'
            ] },
          aufgaben: [
            { frage:'Warum wurde die rollende Praxis eingerichtet?',
              opt:['Weil viele Hausarztpraxen geschlossen haben.','Weil die Menschen keine Autos haben.','Weil das Krankenhaus zu klein ist.'],
              loesung:0, stelle:'haben in den letzten fünf Jahren fünf geschlossen',
              erklaerung:'Die langen Wege sind die Folge der Schließungen, nicht der Grund.' },
            { frage:'Was gilt für Patienten ohne Termin?',
              opt:['Sie werden abgewiesen.','Sie kommen dran, müssen aber warten.','Sie müssen mehr bezahlen.'],
              loesung:1, stelle:'wird trotzdem drangenommen — allerdings mit Wartezeit',
              erklaerung:'Das „allerdings" nennt den Preis dafür: warten.' },
            { frage:'Wovon hängt die Zukunft des Projekts ab?',
              opt:['Von der Zahl der Nutzer.','Vom Wetter im Winter.','Von der Zahl der Ärzte im Land.'],
              loesung:0, stelle:'hängt davon ab, wie viele Menschen es nutzen',
              erklaerung:'Der letzte Satz sagt sogar, dass die Zahlen bisher gut sind.' }
          ] },

        { id:'l2r3',
          text: { sorte:'zeitung', quelle:'Stadtblatt', titel:'Weniger Pakete, mehr Nachbarn',
            zeilen: [
              'In der Weststadt läuft seit einem halben Jahr ein Versuch, der bundesweit beachtet wird. Alle Pakete für vier Straßenzüge gehen an eine zentrale Station am Marktplatz. Von dort holen die Bewohner sie selbst ab.',
              'Der Grund war nicht der Umweltschutz, auch wenn das oft behauptet wird. Auslöser waren Beschwerden über zugeparkte Gehwege und Lieferwagen in zweiter Reihe.',
              'Die Zahl der Lieferfahrten ist seither um etwa siebzig Prozent gesunken. Nicht alle sind begeistert: Wer schlecht zu Fuß ist, empfindet den Weg als Zumutung. Für diese Fälle gibt es einen kostenlosen Bringdienst, den allerdings kaum jemand kennt.',
              'Überraschend ist ein Nebeneffekt. An der Station stehen die Leute an und kommen ins Gespräch. Zwei Nachbarschaftsgruppen sind so entstanden.'
            ] },
          aufgaben: [
            { frage:'Warum wurde die Paketstation eingeführt?',
              opt:['Wegen des Umweltschutzes.','Wegen Beschwerden über den Verkehr.','Weil die Post zu teuer wurde.'],
              loesung:1, stelle:'Auslöser waren Beschwerden über zugeparkte Gehwege',
              erklaerung:'Der Umweltschutz wird ausdrücklich als falsche Annahme genannt.' },
            { frage:'Was ist das Problem für ältere Bewohner?',
              opt:['Der Weg zur Station.','Die Öffnungszeiten.','Die Kosten.'],
              loesung:0, stelle:'Wer schlecht zu Fuß ist, empfindet den Weg als Zumutung',
              erklaerung:'Der Bringdienst ist kostenlos, das Geld ist also kein Problem.' },
            { frage:'Was war nicht geplant, ist aber eingetreten?',
              opt:['Weniger Lieferfahrten.','Neue Kontakte unter Nachbarn.','Höhere Mieten.'],
              loesung:1, stelle:'Überraschend ist ein Nebeneffekt',
              erklaerung:'Weniger Fahrten war das Ziel, die Kontakte waren die Überraschung.' }
          ] }
      ] },

    { nr:3, art:'anzeigenX', name:'Anzeigen zuordnen',
      kurz:'Sechs Anzeigen, dazu Situationen — eine passt nie',
      was:'Du liest sechs Anzeigen und mehrere Situationen. Zu jeder Situation suchst du die passende Anzeige. Manchmal passt keine — dann wählst du x.',
      tipp:'Lies erst die Situation, dann die Anzeigen. Ein einziges Detail entscheidet meistens: eine Uhrzeit, eine Bedingung, ein Alter.',
      zeichen:'🔍', farbe:'rot', punkte:7,
      runden: [
        { id:'l3r1',
          anzeigen: [
            { b:'a', quelle:'Musikschule Klangwerk', zeilen:['Gitarrenunterricht für Erwachsene','Einzelstunden, abends ab 18 Uhr','Auch für absolute Anfänger','60 Minuten 35 Euro'] },
            { b:'b', quelle:'Jugendzentrum Nord', zeilen:['Bandprobenraum zu vermieten','Nur für Gruppen ab 3 Personen','Wochenende ausgebucht','Werktags 10 Euro pro Stunde'] },
            { b:'c', quelle:'Volkshochschule', zeilen:['Chor für alle','Dienstags 19–21 Uhr','Keine Vorkenntnisse nötig','Semesterbeitrag 45 Euro'] },
            { b:'d', quelle:'Privatanzeige', zeilen:['Verkaufe Klavier, gut erhalten','Selbstabholung, 2. Stock ohne Aufzug','VB 400 Euro','Nur an Wochenenden zu besichtigen'] },
            { b:'e', quelle:'Musikladen Saitenweise', zeilen:['Instrumente mieten statt kaufen','Geigen, Flöten, Gitarren','Ab 15 Euro im Monat','Mietkosten werden beim Kauf angerechnet'] },
            { b:'f', quelle:'Kulturverein Alte Post', zeilen:['Offene Bühne jeden ersten Freitag','Anmeldung bis Mittwoch','Eintritt frei für Mitwirkende','Publikum 5 Euro'] }
          ],
          aufgaben: [
            { situation:'Ihre Tochter möchte ein Jahr lang Geige ausprobieren, ohne dass Sie gleich ein teures Instrument kaufen.',
              loesung:'e', erklaerung:'Anzeige e vermietet Instrumente, ausdrücklich auch Geigen — genau zum Ausprobieren.' },
            { situation:'Sie singen gern, haben aber nie Noten gelernt, und suchen etwas Regelmäßiges am Abend.',
              loesung:'c', erklaerung:'Der Chor ist abends und verlangt ausdrücklich keine Vorkenntnisse.' },
            { situation:'Sie sind fünfundvierzig und wollen zum ersten Mal Gitarre lernen, aber erst nach Feierabend.',
              loesung:'a', erklaerung:'Anzeige a ist für Erwachsene, abends und auch für absolute Anfänger.' },
            { situation:'Sie und zwei Freunde suchen einen Raum, in dem Sie samstags proben können.',
              loesung:'x', erklaerung:'Anzeige b hätte gepasst — aber am Wochenende ist der Raum ausgebucht. Keine andere Anzeige bietet Proberäume.' },
            { situation:'Sie möchten Ihr selbst geschriebenes Lied einmal vor Publikum spielen.',
              loesung:'f', erklaerung:'Die offene Bühne ist genau dafür da, für Mitwirkende sogar kostenlos.' }
          ] },

        { id:'l3r2',
          anzeigen: [
            { b:'a', quelle:'Pflegedienst Sonnenhof', zeilen:['Betreuung für Senioren zu Hause','Stundenweise oder ganztägig','Auch am Wochenende','Kostenübernahme durch Pflegekasse möglich'] },
            { b:'b', quelle:'Nachbarschaftshilfe Ost', zeilen:['Einkaufen und Begleitung zu Terminen','Ehrenamtlich, kostenlos','Nur werktags vormittags','Voranmeldung eine Woche vorher'] },
            { b:'c', quelle:'Fahrdienst Mobil', zeilen:['Fahrten zu Arzt und Behörde','Rollstuhlgerechte Fahrzeuge','Rund um die Uhr','Preis nach Kilometer'] },
            { b:'d', quelle:'Seniorentreff Lindenhof', zeilen:['Kaffee und Spiele, dienstags 15 Uhr','Offen für alle ab 60','Kein Beitrag','Gehhilfen willkommen'] },
            { b:'e', quelle:'Praxis für Physiotherapie', zeilen:['Hausbesuche möglich','Nur mit ärztlicher Verordnung','Termine Montag bis Donnerstag','Wartezeit derzeit 4 Wochen'] },
            { b:'f', quelle:'Essen auf Rädern', zeilen:['Warme Mahlzeit täglich ins Haus','Auch vegetarisch und diabetesgerecht','Bestellung bis 10 Uhr am Vortag','Ab 6,50 Euro pro Portion'] }
          ],
          aufgaben: [
            { situation:'Ihre Mutter kann nicht mehr kochen und soll jeden Mittag eine warme Mahlzeit bekommen.',
              loesung:'f', erklaerung:'Essen auf Rädern liefert täglich warm ins Haus.' },
            { situation:'Ihr Vater braucht am Sonntagabend jemanden, der ein paar Stunden bei ihm bleibt.',
              loesung:'a', erklaerung:'Der Pflegedienst arbeitet stundenweise und auch am Wochenende. Die Nachbarschaftshilfe nur werktags vormittags.' },
            { situation:'Ihre Nachbarin sitzt im Rollstuhl und muss abends zu einer Untersuchung ins Krankenhaus.',
              loesung:'c', erklaerung:'Der Fahrdienst hat rollstuhlgerechte Fahrzeuge und fährt rund um die Uhr.' },
            { situation:'Ihre Tante fühlt sich einsam und würde gern regelmäßig andere Menschen treffen, ohne etwas zu bezahlen.',
              loesung:'d', erklaerung:'Der Seniorentreff ist beitragsfrei und findet regelmäßig statt.' },
            { situation:'Sie brauchen für Ihren Mann sofort Krankengymnastik zu Hause, einen Arztschein haben Sie nicht.',
              loesung:'x', erklaerung:'Anzeige e verlangt eine ärztliche Verordnung und hat vier Wochen Wartezeit — beides passt nicht zu „sofort" und „ohne Schein".' }
          ] }
      ] },

    { nr:4, art:'textwahl', name:'Meinungen: dafür oder dagegen',
      kurz:'Kurze Leserbriefe — welche Haltung vertritt die Person?',
      was:'Du liest kurze Meinungsbeiträge zu einem Thema. Zu jedem entscheidest du, ob die Person dafür oder dagegen ist.',
      tipp:'Die Wörter dafür und dagegen kommen fast nie vor. Achte auf das letzte Drittel — dort steht meist die Wertung.',
      zeichen:'⚖️', farbe:'gruen', punkte:7,
      runden: [
        { id:'l4r1',
          text: { sorte:'leserbrief', quelle:'Leserbriefe zum Thema Handyverbot an Schulen', titel:'Zuschrift von Petra L., Lehrerin',
            zeilen: [
              'Seit wir die Geräte morgens einsammeln, ist der Pausenhof wieder laut — und zwar im besten Sinne. Die Kinder reden miteinander, streiten sich, spielen Fangen.',
              'Natürlich gab es Protest, vor allem von Eltern, die ihre Kinder erreichen wollen. Dafür haben wir das Sekretariat, das hat immer funktioniert.',
              'Ich weiß, dass die Kinder irgendwann lernen müssen, mit diesen Geräten umzugehen. Nur muss das nicht in der fünften Klasse zwischen Mathe und Deutsch passieren.'
            ] },
          aufgaben: [
            { frage:'Ist Petra L. für oder gegen das Handyverbot?',
              opt:['Dafür','Dagegen'],
              loesung:0, stelle:'ist der Pausenhof wieder laut — und zwar im besten Sinne',
              erklaerung:'Sie beschreibt die Folgen durchweg positiv und entkräftet den Einwand der Eltern.' },
            { frage:'Wie geht sie mit dem Argument der Erreichbarkeit um?',
              opt:['Sie hält es für berechtigt und fordert Ausnahmen.','Sie verweist auf das Sekretariat.','Sie geht nicht darauf ein.'],
              loesung:1, stelle:'Dafür haben wir das Sekretariat',
              erklaerung:'Sie nimmt den Einwand auf und entkräftet ihn mit einer Alternative.' }
          ] },

        { id:'l4r2',
          text: { sorte:'leserbrief', quelle:'Leserbriefe zum Thema Handyverbot an Schulen', titel:'Zuschrift von Ahmet K., Vater',
            zeilen: [
              'Meine Tochter fährt jeden Tag vierzig Minuten mit zwei Bussen zur Schule. Dass ich sie in dieser Zeit nicht erreichen kann, halte ich für schwer erträglich.',
              'Man sagt uns: Es gibt ja das Sekretariat. Wer dort schon einmal um halb acht angerufen hat, weiß, wie das läuft.',
              'Statt einzusammeln sollte man beibringen, wie man diese Geräte vernünftig benutzt. Verbote lösen das Problem nicht, sie verschieben es nur nach Hause.'
            ] },
          aufgaben: [
            { frage:'Ist Ahmet K. für oder gegen das Handyverbot?',
              opt:['Dafür','Dagegen'],
              loesung:1, stelle:'Verbote lösen das Problem nicht',
              erklaerung:'Er nennt eine Alternative zum Verbot und kritisiert es ausdrücklich.' },
            { frage:'Was schlägt er stattdessen vor?',
              opt:['Handys nur in Pausen erlauben.','Den Umgang mit den Geräten unterrichten.','Die Schulwege verkürzen.'],
              loesung:1, stelle:'sollte man beibringen, wie man diese Geräte vernünftig benutzt',
              erklaerung:'Sein Gegenvorschlag ist Bildung statt Verbot.' }
          ] },

        { id:'l4r3',
          text: { sorte:'leserbrief', quelle:'Leserbriefe zum Thema Handyverbot an Schulen', titel:'Zuschrift von Nina B., Schülerin, 16',
            zeilen: [
              'Ich bin die Erste, die zugibt, dass wir zu viel am Handy hängen. In der neunten Klasse habe ich manchmal im Unterricht heimlich Videos geschaut, das war nicht klug.',
              'Trotzdem finde ich das Einsammeln falsch. Wir organisieren unsere Gruppenarbeiten darüber, wir suchen Vokabeln nach, wir schreiben unseren Eltern.',
              'Sinnvoller wäre eine Regel pro Fach: In der Klausur weg, im Projektunterricht erlaubt. So machen es die Lehrer, die ich am meisten respektiere, ohnehin schon.'
            ] },
          aufgaben: [
            { frage:'Ist Nina B. für oder gegen das Einsammeln der Handys?',
              opt:['Dafür','Dagegen'],
              loesung:1, stelle:'Trotzdem finde ich das Einsammeln falsch',
              erklaerung:'Der erste Absatz klingt selbstkritisch — das „Trotzdem" dreht die Aussage.' },
            { frage:'Welche Lösung hält sie für besser?',
              opt:['Ein Verbot für die ganze Schule.','Unterschiedliche Regeln je nach Unterricht.','Gar keine Regeln.'],
              loesung:1, stelle:'Sinnvoller wäre eine Regel pro Fach',
              erklaerung:'Sie will differenzieren, nicht abschaffen — „gar keine Regeln" wäre also falsch.' }
          ] }
      ] },

    { nr:5, art:'uebersicht', name:'Hausordnung und Anleitungen',
      kurz:'Regeln lesen und auf die eigene Lage anwenden',
      was:'Du liest eine Hausordnung, eine Gebrauchsanweisung oder eine Kursordnung und beantwortest vier Fragen dazu.',
      tipp:'Achte auf muss, darf, soll und kann. Genau daran hängt, ob etwas Pflicht, erlaubt oder nur empfohlen ist.',
      zeichen:'📋', farbe:'turq', punkte:4,
      runden: [
        { id:'l5r1',
          tafel: { titel:'Hausordnung — Wohnanlage Birkenweg 12–18',
            zeilen: [
              { k:'Ruhezeiten', v:'22–7 Uhr sowie sonn- und feiertags ganztägig. Musizieren werktags höchstens zwei Stunden.' },
              { k:'Treppenhaus', v:'Fluchtwege freihalten. Fahrräder und Kinderwagen gehören in den Kellerraum.' },
              { k:'Waschküche', v:'Nutzung nach Plan im Aushang. Trockner nur bis 20 Uhr. Flusensieb nach jedem Gang reinigen.' },
              { k:'Müll', v:'Trennung nach Papier, Verpackung, Restmüll, Bio. Sperrmüll nur nach Anmeldung beim Hausmeister.' },
              { k:'Haustiere', v:'Kleintiere ohne Genehmigung. Hunde und Katzen nur mit schriftlicher Zustimmung der Verwaltung.' },
              { k:'Grillen', v:'Auf Balkonen nur mit Elektrogrill. Im Innenhof an den ausgewiesenen Plätzen, bis 21 Uhr.' }
            ] },
          aufgaben: [
            { situation:'Sie möchten sich einen Hund anschaffen. Was müssen Sie tun?',
              opt:['Nichts, Haustiere sind erlaubt.','Vorher schriftlich bei der Verwaltung fragen.','Den Hausmeister mündlich informieren.'],
              loesung:1, stelle:'Hunde und Katzen nur mit schriftlicher Zustimmung der Verwaltung',
              erklaerung:'Kleintiere sind frei, Hunde ausdrücklich nicht.' },
            { situation:'Sie wollen am Sonntagnachmittag eine Stunde Klavier üben.',
              opt:['Das ist erlaubt.','Das ist nicht erlaubt.','Das ist bis 21 Uhr erlaubt.'],
              loesung:1, stelle:'sonn- und feiertags ganztägig',
              erklaerung:'Die Ruhezeit gilt sonntags den ganzen Tag — die zwei Stunden gelten nur werktags.' },
            { situation:'Sie haben einen alten Schrank, den Sie loswerden möchten.',
              opt:['Einfach an die Straße stellen.','Beim Hausmeister anmelden.','In den Restmüll geben.'],
              loesung:1, stelle:'Sperrmüll nur nach Anmeldung beim Hausmeister',
              erklaerung:'Ein Schrank ist Sperrmüll, dafür gilt die Anmeldepflicht.' },
            { situation:'Sie möchten im Sommer auf dem Balkon grillen.',
              opt:['Gar nicht erlaubt.','Nur mit Elektrogrill.','Nur mit Holzkohle.'],
              loesung:1, stelle:'Auf Balkonen nur mit Elektrogrill',
              erklaerung:'Holzkohle ist nur im Innenhof an bestimmten Plätzen denkbar, nicht auf dem Balkon.' }
          ] },

        { id:'l5r2',
          tafel: { titel:'Kursordnung — Sprachschule Lingua, Abendkurse',
            zeilen: [
              { k:'Anmeldung', v:'Schriftlich oder online. Der Platz ist erst nach Zahlung der ersten Rate verbindlich.' },
              { k:'Zahlung', v:'In drei Raten oder auf einmal. Bei Einmalzahlung fünf Prozent Nachlass.' },
              { k:'Rücktritt', v:'Bis zwei Wochen vor Kursbeginn kostenlos. Danach werden fünfzig Prozent fällig, ab Kursbeginn der volle Betrag.' },
              { k:'Fehlzeiten', v:'Ab drei versäumten Terminen entfällt der Anspruch auf die Teilnahmebescheinigung. Krankheit mit Attest zählt nicht mit.' },
              { k:'Wechsel', v:'Ein Wechsel in ein anderes Niveau ist in den ersten zwei Wochen möglich, sofern dort ein Platz frei ist.' },
              { k:'Material', v:'Das Lehrbuch ist nicht im Preis enthalten und wird im Unterricht gemeinsam bestellt.' }
            ] },
          aufgaben: [
            { situation:'Sie melden sich an, haben aber noch nichts überwiesen. Ist Ihr Platz sicher?',
              opt:['Ja, die Anmeldung genügt.','Nein, erst nach der ersten Zahlung.','Nur wenn Sie online gebucht haben.'],
              loesung:1, stelle:'erst nach Zahlung der ersten Rate verbindlich',
              erklaerung:'Die Anmeldung allein reicht ausdrücklich nicht.' },
            { situation:'Sie sagen zehn Tage vor Kursbeginn ab. Was zahlen Sie?',
              opt:['Nichts.','Die Hälfte.','Den vollen Betrag.'],
              loesung:1, stelle:'Danach werden fünfzig Prozent fällig',
              erklaerung:'Zehn Tage sind weniger als zwei Wochen — die kostenlose Frist ist vorbei.' },
            { situation:'Sie waren dreimal krank und haben jedes Mal ein Attest. Bekommen Sie die Bescheinigung?',
              opt:['Ja.','Nein.','Nur mit Nachprüfung.'],
              loesung:0, stelle:'Krankheit mit Attest zählt nicht mit',
              erklaerung:'Diese Fehltage werden nicht mitgezählt, die Grenze ist also nicht erreicht.' },
            { situation:'Nach vier Wochen merken Sie, dass der Kurs zu schwer ist.',
              opt:['Sie können jederzeit wechseln.','Ein Wechsel ist nicht mehr vorgesehen.','Sie bekommen Geld zurück.'],
              loesung:1, stelle:'in den ersten zwei Wochen möglich',
              erklaerung:'Vier Wochen liegen außerhalb der Frist.' }
          ] }
      ] }
  ],

  /* ==========================================================
     STUFE 4 — die ganze Prüfung
     ========================================================== */

  laeufe: [

    { id:'b1ll1', titel:'Prüfungslauf 1', minuten:65,
      teile: [

        { nr:1, art:'rf',
          texte: [ { sorte:'blog', von:'Blog „Sechs Monate Elternzeit — ein Vater berichtet"', betreff:null,
            zeilen: [
              'Als ich im Betrieb ankündigte, ein halbes Jahr auszusetzen, war die erste Reaktion Schweigen. Die zweite war die Frage, ob meine Frau denn nicht könne.',
              'Ich hatte mich lange gedrückt, das gebe ich zu. Bei unserem ersten Kind waren es zwei Monate, und die habe ich halb im Homeoffice verbracht.',
              'Die ersten Wochen mit dem Kleinen allein waren härter als jede Projektwoche. Nicht anstrengender im Kopf — aber es hört eben nie auf.',
              'Was mich überrascht hat: Auf dem Spielplatz war ich fast immer der einzige Mann. Angesprochen wurde ich trotzdem ständig, meistens sehr freundlich.',
              'Beruflich hat es mir nicht geschadet, jedenfalls bisher nicht. Meine Stelle war noch da, das Projekt allerdings ohne mich weitergelaufen. Damit muss man rechnen.',
              'Ob ich es wieder machen würde? Sofort. Und ich würde es früher tun, nicht erst beim zweiten Kind.'
            ] } ],
          aufgaben: [
            { satz:'Die Kollegen reagierten begeistert auf seine Ankündigung.',
              loesung:false, stelle:'war die erste Reaktion Schweigen',
              erklaerung:'Schweigen und die Rückfrage nach der Frau sind keine Begeisterung.' },
            { satz:'Beim ersten Kind hatte er weniger Elternzeit genommen.',
              loesung:true, stelle:'Bei unserem ersten Kind waren es zwei Monate',
              erklaerung:'Zwei Monate gegenüber sechs Monaten jetzt.' },
            { satz:'Er fand die Zeit mit dem Kind geistig anspruchsvoller als seine Arbeit.',
              loesung:false, stelle:'Nicht anstrengender im Kopf',
              erklaerung:'Er sagt ausdrücklich: hart ja, aber nicht im Kopf.' },
            { satz:'Auf dem Spielplatz traf er kaum andere Väter.',
              loesung:true, stelle:'war ich fast immer der einzige Mann',
              erklaerung:'Direkt gesagt.' },
            { satz:'Nach der Rückkehr hatte er seinen Arbeitsplatz verloren.',
              loesung:false, stelle:'Meine Stelle war noch da',
              erklaerung:'Nur das Projekt lief ohne ihn weiter — die Stelle blieb.' },
            { satz:'Er würde es beim nächsten Mal früher machen.',
              loesung:true, stelle:'Und ich würde es früher tun',
              erklaerung:'Der letzte Satz sagt es wörtlich.' }
          ] },

        { nr:2, art:'textwahl',
          text: { sorte:'zeitung', quelle:'Kreiszeitung', titel:'Schulhof wird zum Garten',
            zeilen: [
              'Die Gesamtschule Nordfeld hat ein Drittel ihres Schulhofs entsiegelt. Wo bis zum Frühjahr Asphalt lag, wachsen jetzt Beete, Sträucher und zwei Obstbäume.',
              'Die Idee kam nicht vom Kollegium, sondern aus dem Schülerrat. Ein Jahr lang haben die Jugendlichen Unterschriften gesammelt und einen Plan gezeichnet.',
              'Bezahlt wurde der Umbau je zur Hälfte von der Stadt und aus Spenden. Die Arbeit selbst übernahmen Eltern und Schüler an vier Wochenenden.',
              'Nicht alles läuft rund. Im ersten Sommer ging ein Teil der Pflanzen ein, weil in den Ferien niemand goss. Für dieses Jahr gibt es nun einen Gießplan mit festen Namen.'
            ] },
          aufgaben: [
            { frage:'Von wem stammt die Idee?',
              opt:['Von den Lehrern.','Von den Schülern.','Von der Stadt.'],
              loesung:1, stelle:'sondern aus dem Schülerrat',
              erklaerung:'„nicht vom Kollegium, sondern" schließt die Lehrer aus.' },
            { frage:'Wer hat den Umbau bezahlt?',
              opt:['Nur die Stadt.','Stadt und Spender gemeinsam.','Nur die Eltern.'],
              loesung:1, stelle:'je zur Hälfte von der Stadt und aus Spenden',
              erklaerung:'Die Eltern haben gearbeitet, nicht bezahlt.' },
            { frage:'Welches Problem gab es im ersten Jahr?',
              opt:['Die Pflanzen wurden im Sommer nicht gegossen.','Der Asphalt kam zurück.','Es fehlte an Werkzeug.'],
              loesung:0, stelle:'weil in den Ferien niemand goss',
              erklaerung:'Der Gießplan ist die Antwort darauf.' }
          ] },

        { nr:2, art:'textwahl',
          text: { sorte:'zeitung', quelle:'Kreiszeitung', titel:'Bibliothek verleiht jetzt auch Werkzeug',
            zeilen: [
              'Bohrmaschine, Nähmaschine, Raclette-Gerät: Die Stadtbibliothek Nordfeld verleiht seit August nicht mehr nur Bücher. Rund zweihundert Gegenstände stehen zur Auswahl.',
              'Das Angebot richtet sich vor allem an Menschen mit kleinen Wohnungen und schmalem Geldbeutel. Wer eine Bohrmaschine zweimal im Jahr braucht, muss sie nicht besitzen.',
              'Ausgeliehen wird mit dem normalen Bibliotheksausweis, die Leihfrist beträgt eine Woche. Verlängern kann man nur, wenn niemand sonst wartet.',
              'Am gefragtesten sind bisher nicht die teuren Geräte, sondern der Tapeziertisch und die Heißklebepistole. Beide sind seit Wochen durchgehend vergeben.'
            ] },
          aufgaben: [
            { frage:'Was kann man dort seit August ausleihen?',
              opt:['Nur Bücher.','Auch Werkzeuge und Haushaltsgeräte.','Nur Küchengeräte.'],
              loesung:1, stelle:'verleiht seit August nicht mehr nur Bücher',
              erklaerung:'Die Aufzählung nennt Werkzeug und Küchengerät.' },
            { frage:'Was braucht man zum Ausleihen?',
              opt:['Einen besonderen Antrag.','Den normalen Bibliotheksausweis.','Eine Kaution.'],
              loesung:1, stelle:'mit dem normalen Bibliotheksausweis',
              erklaerung:'Nichts Zusätzliches wird verlangt.' },
            { frage:'Welche Gegenstände sind am beliebtesten?',
              opt:['Die teuersten Geräte.','Einfache Helfer wie Tapeziertisch und Klebepistole.','Die Nähmaschinen.'],
              loesung:1, stelle:'sondern der Tapeziertisch und die Heißklebepistole',
              erklaerung:'Die teuren Geräte werden ausdrücklich ausgeschlossen.' }
          ] },

        { nr:3, art:'anzeigenX',
          anzeigen: [
            { b:'a', quelle:'Wohnungsanzeige', zeilen:['2 Zimmer, 54 m², Altbau','Ab 1. November frei','Keine Haustiere','680 Euro warm'] },
            { b:'b', quelle:'WG sucht Mitbewohner', zeilen:['Zimmer 18 m² in 4er-WG','Nur Studierende','Ab sofort','390 Euro alles inklusive'] },
            { b:'c', quelle:'Zwischenmiete', zeilen:['Möblierte 1-Zimmer-Wohnung','Nur von Januar bis März','Katzen erlaubt','550 Euro warm'] },
            { b:'d', quelle:'Genossenschaft Wohnbund', zeilen:['3 Zimmer, barrierefrei, Aufzug','Nur für Mitglieder','Wartezeit ca. 2 Jahre','Ab 720 Euro warm'] },
            { b:'e', quelle:'Haus zur Miete', zeilen:['4 Zimmer mit kleinem Garten','Am Ortsrand, Bus 1x pro Stunde','Ab sofort, Hunde nach Absprache','1150 Euro warm'] },
            { b:'f', quelle:'Apartmenthaus Zentrum', zeilen:['Möbliertes Apartment, 28 m²','Monatlich kündbar','Waschmaschine im Haus','790 Euro alles inklusive'] }
          ],
          aufgaben: [
            { situation:'Sie studieren und suchen ab sofort ein günstiges Zimmer, in dem alle Nebenkosten enthalten sind.',
              loesung:'b', erklaerung:'Die WG nimmt Studierende, ist ab sofort frei und kostet alles inklusive.' },
            { situation:'Sie kommen für ein Praktikum von Januar bis März in die Stadt und bringen Ihre Katze mit.',
              loesung:'c', erklaerung:'Genau dieser Zeitraum, möbliert, und Katzen sind ausdrücklich erlaubt.' },
            { situation:'Sie sind zu zweit, brauchen einen Aufzug wegen des Rollators und wollen bald einziehen.',
              loesung:'x', erklaerung:'Anzeige d ist zwar barrierefrei mit Aufzug, aber nur für Mitglieder und mit zwei Jahren Wartezeit — „bald" geht damit nicht.' },
            { situation:'Sie ziehen im November ein, haben keine Tiere und wollen unter siebenhundert Euro bleiben.',
              loesung:'a', erklaerung:'Ab November frei, 680 Euro, Haustierverbot stört Sie nicht.' },
            { situation:'Sie wissen noch nicht, wie lange Sie bleiben, und wollen jederzeit aussteigen können.',
              loesung:'f', erklaerung:'„Monatlich kündbar" ist genau die gesuchte Flexibilität.' },
            { situation:'Sie haben zwei Kinder, einen Hund und legen Wert auf einen Garten.',
              loesung:'e', erklaerung:'Vier Zimmer, Garten, Hunde nach Absprache.' },
            { situation:'Sie suchen eine Wohnung ohne Möbel im Zentrum für höchstens fünfhundert Euro.',
              loesung:'x', erklaerung:'Keine der Anzeigen ist unmöbliert, zentral und so günstig zugleich.' }
          ] },

        { nr:4, art:'textwahl',
          text: { sorte:'leserbrief', quelle:'Thema: Sollen Innenstädte autofrei werden?', titel:'Zuschrift von Bernd R.',
            zeilen: ['Ich fahre seit dreißig Jahren Taxi und höre jeden Tag, wie schwierig es geworden ist. Wer schlecht laufen kann, kommt ohne Auto nirgends hin. Eine autofreie Innenstadt klingt gut, solange man jung und gesund ist.'] },
          aufgaben: [
            { frage:'Ist Bernd R. dafür oder dagegen?', opt:['Dafür','Dagegen'],
              loesung:1, stelle:'solange man jung und gesund ist',
              erklaerung:'Der letzte Satz entwertet die Idee — für ihn taugt sie nur für einen Teil der Menschen.' }
          ] },
        { nr:4, art:'textwahl',
          text: { sorte:'leserbrief', quelle:'Thema: Sollen Innenstädte autofrei werden?', titel:'Zuschrift von Meike H.',
            zeilen: ['Wir haben zwei Jahre in Groningen gelebt, dort ist das Zentrum praktisch autofrei. Ich habe nie erlebt, dass jemand deshalb nicht einkaufen konnte. Die Geschäfte dort leben, unsere hier sterben.'] },
          aufgaben: [
            { frage:'Ist Meike H. dafür oder dagegen?', opt:['Dafür','Dagegen'],
              loesung:0, stelle:'Die Geschäfte dort leben, unsere hier sterben',
              erklaerung:'Sie stellt das autofreie Vorbild deutlich über die eigene Stadt.' }
          ] },
        { nr:4, art:'textwahl',
          text: { sorte:'leserbrief', quelle:'Thema: Sollen Innenstädte autofrei werden?', titel:'Zuschrift von Dr. Tomas W.',
            zeilen: ['Als Arzt mit Praxis am Markt sehe ich beides. Weniger Lärm wäre ein Gewinn, keine Frage. Nur müssen meine Patienten mich erreichen, und viele sind über achtzig. Ohne echten Ersatzverkehr halte ich das für unverantwortlich.'] },
          aufgaben: [
            { frage:'Ist Dr. W. dafür oder dagegen?', opt:['Dafür','Dagegen'],
              loesung:1, stelle:'halte ich das für unverantwortlich',
              erklaerung:'Er räumt Vorteile ein, kommt aber zu einem ablehnenden Urteil.' }
          ] },
        { nr:4, art:'textwahl',
          text: { sorte:'leserbrief', quelle:'Thema: Sollen Innenstädte autofrei werden?', titel:'Zuschrift von Selin A.',
            zeilen: ['Meine Kinder sind vier und sieben. Wenn wir in die Stadt gehen, halte ich beide ständig an der Hand fest. In einer autofreien Innenstadt könnte ich sie einfach laufen lassen. Allein dafür wäre ich sofort dabei.'] },
          aufgaben: [
            { frage:'Ist Selin A. dafür oder dagegen?', opt:['Dafür','Dagegen'],
              loesung:0, stelle:'wäre ich sofort dabei',
              erklaerung:'Klarer Wunsch, klare Begründung.' }
          ] },
        { nr:4, art:'textwahl',
          text: { sorte:'leserbrief', quelle:'Thema: Sollen Innenstädte autofrei werden?', titel:'Zuschrift von Georg P.',
            zeilen: ['Man sollte aufhören, so zu tun, als ginge es ums Klima. Es geht darum, dass ein paar Leute ihre Ruhe wollen und der Rest sehen soll, wo er bleibt. Ich habe nichts gegen Fahrräder, aber gegen diese Art von Politik schon.'] },
          aufgaben: [
            { frage:'Ist Georg P. dafür oder dagegen?', opt:['Dafür','Dagegen'],
              loesung:1, stelle:'gegen diese Art von Politik schon',
              erklaerung:'Er unterstellt den Befürwortern falsche Motive und lehnt ab.' }
          ] },
        { nr:4, art:'textwahl',
          text: { sorte:'leserbrief', quelle:'Thema: Sollen Innenstädte autofrei werden?', titel:'Zuschrift von Hanna L.',
            zeilen: ['Ich betreibe ein Café in der Fußgängerzone. Seit die Straße vor drei Jahren gesperrt wurde, sitzen bei uns doppelt so viele Leute draußen. Die Angst der Händler kenne ich — ich hatte sie selbst und habe mich geirrt.'] },
          aufgaben: [
            { frage:'Ist Hanna L. dafür oder dagegen?', opt:['Dafür','Dagegen'],
              loesung:0, stelle:'ich hatte sie selbst und habe mich geirrt',
              erklaerung:'Sie beschreibt ihren eigenen Meinungswechsel hin zur Zustimmung.' }
          ] },
        { nr:4, art:'textwahl',
          text: { sorte:'leserbrief', quelle:'Thema: Sollen Innenstädte autofrei werden?', titel:'Zuschrift von Ulrich B.',
            zeilen: ['Solange die Busse abends im Stundentakt fahren und am Wochenende gar nicht, ist das ganze Gerede müßig. Erst der Nahverkehr, dann die Sperrung. In dieser Reihenfolge bin ich sofort dafür.'] },
          aufgaben: [
            { frage:'Ist Ulrich B. dafür oder dagegen?', opt:['Dafür','Dagegen'],
              loesung:0, stelle:'In dieser Reihenfolge bin ich sofort dafür',
              erklaerung:'Er stellt eine Bedingung, sagt aber am Ende ausdrücklich zu.' }
          ] },

        { nr:5, art:'uebersicht',
          tafel: { titel:'Benutzungsordnung — Städtisches Hallenbad',
            zeilen: [
              { k:'Öffnungszeiten', v:'Mo–Fr 6.30–21 Uhr, Sa/So 8–19 Uhr. Einlass bis 45 Minuten vor Schluss.' },
              { k:'Eintritt', v:'Erwachsene 5,50 Euro, ermäßigt 3,50 Euro. Kinder unter 6 Jahren frei, aber nur in Begleitung Erwachsener.' },
              { k:'Frühschwimmen', v:'Mo, Mi, Fr 6.30–8 Uhr. In dieser Zeit ist die Rutsche gesperrt.' },
              { k:'Schwimmkurse', v:'Dienstag und Donnerstag 16–18 Uhr. Zwei Bahnen sind dann für den Kurs reserviert.' },
              { k:'Sauna', v:'Ab 16 Jahren, Zuschlag 4 Euro. Mittwoch ist Damentag.' },
              { k:'Hausordnung', v:'Duschen vor dem Baden ist Pflicht. Essen und Trinken nur im Bistro. Schwimmflügel sind erlaubt, Luftmatratzen nicht.' }
            ] },
          aufgaben: [
            { situation:'Sie kommen am Samstag um 18.30 Uhr an die Kasse.',
              opt:['Sie kommen noch hinein.','Der Einlass ist bereits vorbei.','Das Bad hat samstags geschlossen.'],
              loesung:1, stelle:'Einlass bis 45 Minuten vor Schluss',
              erklaerung:'Samstags ist um 19 Uhr Schluss, der letzte Einlass also um 18.15 Uhr.' },
            { situation:'Ihr fünfjähriger Sohn möchte mit Ihnen schwimmen gehen.',
              opt:['Er zahlt den vollen Preis.','Er zahlt nichts, muss aber begleitet werden.','Kinder dürfen gar nicht ins Bad.'],
              loesung:1, stelle:'Kinder unter 6 Jahren frei, aber nur in Begleitung Erwachsener',
              erklaerung:'Beide Teile der Regel zusammen ergeben die Antwort.' },
            { situation:'Sie wollen am Mittwochmorgen um sieben Uhr rutschen.',
              opt:['Das geht.','Die Rutsche ist zu dieser Zeit gesperrt.','Das Bad ist noch geschlossen.'],
              loesung:1, stelle:'In dieser Zeit ist die Rutsche gesperrt',
              erklaerung:'Mittwoch ist Frühschwimmen, und dann ist die Rutsche zu.' },
            { situation:'Sie möchten Ihre mitgebrachte Luftmatratze benutzen.',
              opt:['Das ist erlaubt.','Das ist nicht erlaubt.','Nur im Nichtschwimmerbecken.'],
              loesung:1, stelle:'Luftmatratzen nicht',
              erklaerung:'Schwimmflügel sind erlaubt, Luftmatratzen ausdrücklich nicht.' }
          ] }
      ] },

    { id:'b1ll2', titel:'Prüfungslauf 2', minuten:65,
      teile: [

        { nr:1, art:'rf',
          texte: [ { sorte:'forum', von:'Forum „Prüfungsangst" — Beitrag von Dilara', betreff:null,
            zeilen: [
              'Ich schreibe das hier auf, weil mir vor zwei Jahren so ein Beitrag geholfen hätte. Ich bin dreimal durch die B1-Prüfung gefallen, immer am selben Teil.',
              'Am Wissen lag es nicht. Meine Lehrerin sagte jedes Mal, im Unterricht könne ich alles. Sobald das Blatt vor mir lag, war der Kopf leer.',
              'Beim vierten Versuch habe ich zwei Dinge anders gemacht. Erstens habe ich zu Hause immer mit Uhr geübt, auch wenn ich keine Lust hatte.',
              'Zweitens habe ich mit dem Teil angefangen, der mir am leichtesten fiel — nicht mit dem ersten. Das ist erlaubt, ich wusste es nur nicht.',
              'Bestanden habe ich am Ende mit neunundsiebzig Punkten. Kein Glanzergebnis, aber es reicht, und darum ging es.',
              'Was ich nicht empfehlen kann: Beruhigungstabletten. Eine Freundin hat das versucht und war so müde, dass sie beim Hören eingeschlafen ist.'
            ] } ],
          aufgaben: [
            { satz:'Dilara hat die Prüfung mehrmals nicht bestanden.',
              loesung:true, stelle:'Ich bin dreimal durch die B1-Prüfung gefallen',
              erklaerung:'„durchfallen" heißt: nicht bestehen.' },
            { satz:'Ihre Lehrerin hielt ihre Deutschkenntnisse für zu schwach.',
              loesung:false, stelle:'im Unterricht könne ich alles',
              erklaerung:'Das Problem war die Prüfungssituation, nicht das Können.' },
            { satz:'Sie hat vor dem vierten Versuch mit Zeitbegrenzung geübt.',
              loesung:true, stelle:'zu Hause immer mit Uhr geübt',
              erklaerung:'Mit Uhr üben heißt: unter Zeitdruck.' },
            { satz:'Man muss die Prüfungsteile in der vorgegebenen Reihenfolge bearbeiten.',
              loesung:false, stelle:'Das ist erlaubt, ich wusste es nur nicht',
              erklaerung:'Sie hat mit dem leichtesten Teil begonnen und sagt, dass das zulässig ist.' },
            { satz:'Sie hat ein sehr gutes Ergebnis erreicht.',
              loesung:false, stelle:'Kein Glanzergebnis',
              erklaerung:'Sie bewertet ihr Ergebnis selbst als ausreichend, nicht als sehr gut.' },
            { satz:'Von Medikamenten gegen die Nervosität rät sie ab.',
              loesung:true, stelle:'Was ich nicht empfehlen kann: Beruhigungstabletten',
              erklaerung:'Das Beispiel der Freundin bestätigt die Warnung.' }
          ] },

        { nr:2, art:'textwahl',
          text: { sorte:'zeitung', quelle:'Tagesblatt', titel:'Reparaturcafé feiert fünften Geburtstag',
            zeilen: [
              'Was 2021 mit drei Rentnern und einem Lötkolben in einem Gemeindesaal begann, ist heute eine feste Größe: Das Reparaturcafé Weststadt öffnet jeden zweiten Samstag und zählt inzwischen zweiundzwanzig ehrenamtliche Helfer.',
              'Repariert wird fast alles, was in einen Kofferraum passt: Toaster, Lampen, Fahrräder, zunehmend auch Kleidung. Nicht angenommen werden Geräte, bei denen Gas oder Starkstrom im Spiel ist — dafür fehlt die Versicherung.',
              'Bezahlt wird nichts. Wer möchte, wirft etwas in die Kasse; davon werden Ersatzteile gekauft. Etwa sechs von zehn Geräten gehen repariert wieder nach Hause.',
              'Am schwierigsten sind moderne Geräte, sagt Mitgründer Werner Ohms. „Vieles ist verklebt statt verschraubt. Da kommen wir mit dem besten Willen nicht hinein."'
            ] },
          aufgaben: [
            { frage:'Wie oft ist das Reparaturcafé geöffnet?',
              opt:['Jeden Samstag.','Alle zwei Wochen samstags.','Nur im Sommer.'],
              loesung:1, stelle:'öffnet jeden zweiten Samstag',
              erklaerung:'„jeden zweiten Samstag" ist alle zwei Wochen.' },
            { frage:'Was wird dort nicht repariert?',
              opt:['Kleidung.','Geräte mit Gas oder Starkstrom.','Fahrräder.'],
              loesung:1, stelle:'bei denen Gas oder Starkstrom im Spiel ist',
              erklaerung:'Der Grund ist die fehlende Versicherung.' },
            { frage:'Warum sind neue Geräte schwierig?',
              opt:['Weil sie zu groß sind.','Weil sie verklebt und nicht verschraubt sind.','Weil Ersatzteile zu teuer sind.'],
              loesung:1, stelle:'Vieles ist verklebt statt verschraubt',
              erklaerung:'Ohms nennt genau das als Hindernis.' }
          ] },

        { nr:2, art:'textwahl',
          text: { sorte:'zeitung', quelle:'Tagesblatt', titel:'Nachtbus fährt künftig auch unter der Woche',
            zeilen: [
              'Ab dem ersten Dezember fährt die Nachtlinie N drei nicht mehr nur am Wochenende, sondern an allen Tagen. Zwischen ein und vier Uhr verkehrt sie dann stündlich.',
              'Angestoßen hat die Änderung nicht die Stadt, sondern das Klinikum. Dort beginnt die Frühschicht um halb sechs, viele Pflegekräfte kamen bisher nur mit dem Auto zur Arbeit.',
              'Die Mehrkosten von jährlich rund dreihunderttausend Euro teilen sich Stadt und Klinikum. Zunächst ist die Erweiterung auf zwei Jahre befristet.',
              'Ob die Linie danach bleibt, entscheidet sich an den Fahrgastzahlen. Ein Sprecher der Verkehrsbetriebe dämpfte allerdings die Erwartungen: Nachtlinien seien selten kostendeckend, das sei auch nicht ihr Zweck.'
            ] },
          aufgaben: [
            { frage:'Was ändert sich ab Dezember?',
              opt:['Der Bus fährt an allen Wochentagen nachts.','Der Bus fährt nur noch am Wochenende.','Der Bus wird eingestellt.'],
              loesung:0, stelle:'sondern an allen Tagen',
              erklaerung:'Vorher nur am Wochenende, jetzt täglich.' },
            { frage:'Wer hat die Änderung angestoßen?',
              opt:['Die Stadt.','Das Klinikum.','Die Fahrgäste.'],
              loesung:1, stelle:'sondern das Klinikum',
              erklaerung:'Die Stadt wird ausdrücklich ausgeschlossen, sie zahlt nur mit.' },
            { frage:'Was sagt der Sprecher der Verkehrsbetriebe?',
              opt:['Die Linie wird sicher Gewinn machen.','Nachtlinien rechnen sich meist nicht.','Die Linie wird nach zwei Jahren sicher bleiben.'],
              loesung:1, stelle:'Nachtlinien seien selten kostendeckend',
              erklaerung:'Er dämpft ausdrücklich die Erwartungen.' }
          ] },

        { nr:3, art:'anzeigenX',
          anzeigen: [
            { b:'a', quelle:'Ferienhof Lindenbach', zeilen:['Urlaub auf dem Bauernhof','Familienzimmer ab 95 Euro/Nacht','Hunde willkommen','Nur ganze Wochen buchbar'] },
            { b:'b', quelle:'Jugendherberge Seeblick', zeilen:['Mehrbettzimmer ab 28 Euro','Frühstück inklusive','Gruppen ab 8 Personen bevorzugt','Kein Einzelzimmer'] },
            { b:'c', quelle:'Pension Hafenblick', zeilen:['Doppelzimmer 78 Euro','Direkt am Meer','Ganzjährig geöffnet','Keine Haustiere, Nichtraucherhaus'] },
            { b:'d', quelle:'Campingplatz Waldrand', zeilen:['Stellplätze für Zelt und Wohnmobil','Ab 18 Euro pro Nacht','Nur Mai bis September','Sanitärgebäude neu'] },
            { b:'e', quelle:'Ferienwohnung Stadtmitte', zeilen:['2 Zimmer, Küche, Balkon','Mindestens 3 Nächte','110 Euro pro Nacht','Aufzug vorhanden, stufenlos'] },
            { b:'f', quelle:'Wanderhütte Hochkamm', zeilen:['Einfache Übernachtung im Lager','Nur zu Fuß erreichbar','Voranmeldung zwingend','15 Euro inkl. Suppe'] }
          ],
          aufgaben: [
            { situation:'Sie reisen mit dem Wohnmobil und wollen im Juli für zwei Nächte bleiben.',
              loesung:'d', erklaerung:'Der Campingplatz nimmt Wohnmobile und hat im Juli geöffnet.' },
            { situation:'Sie fahren mit Ihrem Hund eine Woche aufs Land.',
              loesung:'a', erklaerung:'Der Ferienhof erlaubt Hunde und vermietet ohnehin nur ganze Wochen.' },
            { situation:'Ihre Mutter benutzt einen Rollator, Sie suchen für vier Nächte eine Unterkunft ohne Treppen.',
              loesung:'e', erklaerung:'Die Ferienwohnung ist stufenlos mit Aufzug, und vier Nächte erfüllen die Mindestdauer.' },
            { situation:'Sie sind zu zweit und möchten spontan im November ans Meer.',
              loesung:'c', erklaerung:'Die Pension liegt direkt am Meer und ist ganzjährig geöffnet.' },
            { situation:'Sie reisen allein und suchen ein günstiges Einzelzimmer in der Jugendherberge.',
              loesung:'x', erklaerung:'Die Jugendherberge hat ausdrücklich keine Einzelzimmer, und keine andere Anzeige bietet ein günstiges Einzelzimmer.' },
            { situation:'Sie machen eine mehrtägige Bergwanderung und brauchen unterwegs eine Schlafgelegenheit.',
              loesung:'f', erklaerung:'Die Wanderhütte ist nur zu Fuß erreichbar — genau für Wanderer gedacht.' },
            { situation:'Sie kommen mit einer Schulklasse von zwanzig Jugendlichen und brauchen Frühstück.',
              loesung:'b', erklaerung:'Die Jugendherberge bevorzugt Gruppen ab acht Personen, Frühstück ist enthalten.' }
          ] },

        { nr:4, art:'textwahl',
          text: { sorte:'leserbrief', quelle:'Thema: Soll man Trinkgeld abschaffen?', titel:'Zuschrift von Katrin M.',
            zeilen: ['Ich habe zwölf Jahre bedient. Vom Trinkgeld habe ich meine Miete bezahlt, weil der Stundenlohn es nicht hergab. Wer es abschaffen will, muss zuerst über die Löhne reden — sonst ist das eine Kürzung mit schönem Namen.'] },
          aufgaben: [
            { frage:'Ist Katrin M. für die Abschaffung?', opt:['Dafür','Dagegen'],
              loesung:1, stelle:'sonst ist das eine Kürzung mit schönem Namen',
              erklaerung:'Sie lehnt die Abschaffung unter den jetzigen Bedingungen ab.' }
          ] },
        { nr:4, art:'textwahl',
          text: { sorte:'leserbrief', quelle:'Thema: Soll man Trinkgeld abschaffen?', titel:'Zuschrift von Jonas F.',
            zeilen: ['In Japan gibt es kein Trinkgeld und der Service ist besser als überall sonst. Bei uns entscheidet die Laune des Gastes, was jemand verdient. Das finde ich unwürdig. Faire Preise, faire Löhne, fertig.'] },
          aufgaben: [
            { frage:'Ist Jonas F. für die Abschaffung?', opt:['Dafür','Dagegen'],
              loesung:0, stelle:'Faire Preise, faire Löhne, fertig',
              erklaerung:'Er hält das System für unwürdig und fordert die Alternative.' }
          ] },
        { nr:4, art:'textwahl',
          text: { sorte:'leserbrief', quelle:'Thema: Soll man Trinkgeld abschaffen?', titel:'Zuschrift von Rita S.',
            zeilen: ['Für mich ist Trinkgeld ein Dankeschön, nichts weiter. Wenn jemand freundlich war, gebe ich gern etwas. Diesen kleinen Moment möchte ich mir nicht wegnehmen lassen.'] },
          aufgaben: [
            { frage:'Ist Rita S. für die Abschaffung?', opt:['Dafür','Dagegen'],
              loesung:1, stelle:'möchte ich mir nicht wegnehmen lassen',
              erklaerung:'Sie will das Trinkgeld ausdrücklich behalten.' }
          ] },
        { nr:4, art:'textwahl',
          text: { sorte:'leserbrief', quelle:'Thema: Soll man Trinkgeld abschaffen?', titel:'Zuschrift von Ali D.',
            zeilen: ['Ich führe ein kleines Lokal. Wenn ich das Trinkgeld einpreise, stehen auf der Karte höhere Zahlen und die Leute kommen seltener. So ehrlich muss man sein. Deshalb bleibe ich beim alten System, auch wenn es nicht schön ist.'] },
          aufgaben: [
            { frage:'Ist Ali D. für die Abschaffung?', opt:['Dafür','Dagegen'],
              loesung:1, stelle:'Deshalb bleibe ich beim alten System',
              erklaerung:'Er nennt das System selbst „nicht schön", entscheidet sich aber dagegen, es zu ändern.' }
          ] },
        { nr:4, art:'textwahl',
          text: { sorte:'leserbrief', quelle:'Thema: Soll man Trinkgeld abschaffen?', titel:'Zuschrift von Franziska N.',
            zeilen: ['Als Frau im Service habe ich erlebt, dass freundliches Lächeln mehr einbringt als gute Arbeit. Ein System, in dem sich das lohnt, gehört abgeschafft. Der Lohn muss vom Arbeitgeber kommen, nicht vom Wohlwollen am Tisch.'] },
          aufgaben: [
            { frage:'Ist Franziska N. für die Abschaffung?', opt:['Dafür','Dagegen'],
              loesung:0, stelle:'gehört abgeschafft',
              erklaerung:'Sie sagt es wörtlich und begründet es mit ihrer Erfahrung.' }
          ] },
        { nr:4, art:'textwahl',
          text: { sorte:'leserbrief', quelle:'Thema: Soll man Trinkgeld abschaffen?', titel:'Zuschrift von Herbert K.',
            zeilen: ['Man kann über vieles diskutieren, aber nicht mit Verboten. Wer geben will, soll geben dürfen. Wer nicht will, lässt es. Ich verstehe gar nicht, warum man daraus eine Grundsatzfrage macht.'] },
          aufgaben: [
            { frage:'Ist Herbert K. für die Abschaffung?', opt:['Dafür','Dagegen'],
              loesung:1, stelle:'Wer geben will, soll geben dürfen',
              erklaerung:'Er verteidigt die Freiwilligkeit und damit den Erhalt.' }
          ] },
        { nr:4, art:'textwahl',
          text: { sorte:'leserbrief', quelle:'Thema: Soll man Trinkgeld abschaffen?', titel:'Zuschrift von Lena W.',
            zeilen: ['Seit ich in einem Betrieb arbeite, der Trinkgeld gleichmäßig auf alle verteilt — auch auf die Küche —, ist die Stimmung besser als je zuvor. Abschaffen muss man es nicht. Man muss es nur gerecht teilen.'] },
          aufgaben: [
            { frage:'Ist Lena W. für die Abschaffung?', opt:['Dafür','Dagegen'],
              loesung:1, stelle:'Abschaffen muss man es nicht',
              erklaerung:'Sie will es behalten und nur anders verteilen — das ist keine Zustimmung zur Abschaffung.' }
          ] },

        { nr:5, art:'uebersicht',
          tafel: { titel:'Gebrauchsanweisung — Waschmaschine WM 2400',
            zeilen: [
              { k:'Vor dem ersten Gebrauch', v:'Transportsicherungen an der Rückseite entfernen. Ohne diesen Schritt entfällt die Garantie.' },
              { k:'Beladung', v:'Baumwolle bis 8 kg, Feinwäsche bis 3 kg, Wolle bis 2 kg. Nicht über die markierte Linie füllen.' },
              { k:'Waschmittel', v:'Fach I Vorwäsche, Fach II Hauptwäsche, Fach mit Blume für Weichspüler. Flüssigmittel nicht bei Vorwäsche verwenden.' },
              { k:'Kurzprogramm', v:'30 Minuten, nur bis 3 kg und nur für leicht verschmutzte Wäsche geeignet.' },
              { k:'Kindersicherung', v:'Beide Tasten rechts drei Sekunden gedrückt halten. Anzeige zeigt ein Schlosssymbol.' },
              { k:'Bei Störung', v:'Erst Flusensieb prüfen, dann Zulaufschlauch. Kundendienst nur mit Kaufbeleg und Gerätenummer.' }
            ] },
          aufgaben: [
            { situation:'Sie haben die Maschine gerade geliefert bekommen und wollen sofort waschen.',
              opt:['Sie können sofort starten.','Sie müssen zuerst die Transportsicherungen entfernen.','Sie müssen 24 Stunden warten.'],
              loesung:1, stelle:'Transportsicherungen an der Rückseite entfernen',
              erklaerung:'Ohne diesen Schritt verlieren Sie sogar die Garantie.' },
            { situation:'Sie möchten vier Kilogramm leicht verschmutzte Hemden im Kurzprogramm waschen.',
              opt:['Das geht.','Das geht nicht, die Menge ist zu groß.','Das geht nur mit Vorwäsche.'],
              loesung:1, stelle:'nur bis 3 kg',
              erklaerung:'Der Verschmutzungsgrad passt, die Menge nicht.' },
            { situation:'Sie benutzen flüssiges Waschmittel und wollen eine Vorwäsche machen.',
              opt:['Das ist vorgesehen.','Flüssigmittel ist für die Vorwäsche nicht geeignet.','Flüssigmittel gehört ins Weichspülerfach.'],
              loesung:1, stelle:'Flüssigmittel nicht bei Vorwäsche verwenden',
              erklaerung:'Direkt verboten in der Anleitung.' },
            { situation:'Die Maschine pumpt nicht ab. Was prüfen Sie zuerst?',
              opt:['Den Zulaufschlauch.','Das Flusensieb.','Die Kindersicherung.'],
              loesung:1, stelle:'Erst Flusensieb prüfen',
              erklaerung:'Die Reihenfolge steht ausdrücklich in der Anleitung.' }
          ] }
      ] }
  ]

};
