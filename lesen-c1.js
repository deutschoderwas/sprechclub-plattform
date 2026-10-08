/* ============================================================
   deutschoderwas club — LESEN C1 (Goethe-Zertifikat C1, modular)

   Aufbau nach dem Handbuch „Prüfungsziele, Testbeschreibung" des
   Goethe-Instituts, geprüft am 08.10.2026:

     Teil 1  Lückentext, vier Möglichkeiten je Lücke        8   10 Min
     Teil 2  Artikel mit drei Möglichkeiten je Frage        7   20 Min
     Teil 3  Sätze in Lücken setzen — zwei bleiben übrig    8   20 Min
     Teil 4  Aussagen den Fachleuten zuordnen               7
     zusammen 30 Aufgaben, 65 Minuten (davon 5 für den
     Antwortbogen), 100 Punkte. Bestanden ab 18 richtigen.

   Achtung, zwei Prüfungen tragen denselben Namen: Das ALTE
   Goethe-Zertifikat C1 hatte drei Aufgaben, 70 Minuten und 25
   Punkte (Textzusammenfassung, Raster, Lückentext). Wer danach
   übt, übt die falsche Prüfung. Hier steht die modulare Fassung.

   Der Sprung von B2 auf C1: Auf B2 war die Aussage noch
   versteckt, aber ganz. Auf C1 ist sie auf zwei Absätze verteilt
   und steht in einer Sprache, die Handlungen in Hauptwörter
   verwandelt: nicht „man hat entschieden", sondern „die
   Entscheidungsfindung erfolgte". Wer diese Hülle nicht
   aufknackt, liest zwar jedes Wort und versteht trotzdem nicht,
   wer hier eigentlich was getan hat.

   Dazu kommt die Haltung. C1-Texte sagen selten rundheraus, was
   sie halten. Sie referieren eine fremde Position so lange, bis
   man sie für die eigene hält — und drehen sie dann mit einem
   einzigen „freilich" um.
   ============================================================ */

window.LESEN_C1 = {

  niveau: 'C1',
  pruefung: 'Goethe-Zertifikat C1 (modular)',
  minuten: 65,
  punkte: 30,

  stufen: [
    { nr:1, titel:'Die Hülle aufknacken', zeichen:'🔓',
      was:'Nominalstil, Funktionsverbgefüge, Passiversatz: C1-Texte verstecken das Verb. Du lernst, jeden dieser Sätze in einen einfachen zurückzuübersetzen — und zu sehen, wer handelt.' },
    { nr:2, titel:'Haltung und Wendepunkt', zeichen:'🧭',
      was:'Ein Wort dreht den ganzen Absatz: freilich, indes, zumal, gleichwohl. Du übst, die Stelle zu finden, an der ein Text die Seite wechselt.' },
    { nr:3, titel:'Die vier Prüfungsteile', zeichen:'🎯',
      was:'Jeder Teil einzeln, in Prüfungslänge und Prüfungszeit. Nach jeder Aufgabe siehst du die Lösung und die Stelle, an der sie stand.' }
  ],

  bloecke: [

    /* ---------- Stufe 1, Block 1 ---------- */
    { id:'c1s1b1', stufe:1, titel:'Wenn das Verb zum Hauptwort wird',
      kurz:'Nominalstil zurückübersetzen',
      ziel:'Nach diesem Block liest du „unter Beweis stellen" und denkst sofort „beweisen".',
      zeichen:'🔓', farbe:'turq',
      aufgaben: [
        { art:'wahl', frage:'„Die Inbetriebnahme der Anlage erfolgte im Frühjahr." Wer hat was getan?',
          opt:['Die Anlage hat im Frühjahr angefangen zu arbeiten.','Jemand hat die Anlage im Frühjahr in Betrieb genommen.','Die Anlage wurde im Frühjahr gebaut.'],
          loesung:1, erklaerung:'„erfolgte" verdeckt den Handelnden. Im Klartext: Jemand nahm sie in Betrieb — wer, sagt der Satz absichtlich nicht.' },
        { art:'wahl', frage:'„Der Antrag fand keine Berücksichtigung."',
          opt:['Der Antrag wurde abgelehnt.','Der Antrag wurde nicht beachtet.','Der Antrag kam zu spät.'],
          loesung:1, erklaerung:'„keine Berücksichtigung finden" heißt: gar nicht erst einbezogen. Eine Ablehnung wäre eine Entscheidung — hier gab es keine.' },
        { art:'wahl', frage:'„Wir stellen die Zusammenarbeit zur Disposition."',
          opt:['Wir bauen die Zusammenarbeit aus.','Wir stellen die Zusammenarbeit infrage.','Wir beenden die Zusammenarbeit.'],
          loesung:1, erklaerung:'„zur Disposition stellen" heißt: offen zur Debatte. Noch ist nichts beendet — aber die Drohung steht im Raum.' },
        { art:'wahl', frage:'„Die Umsetzung der Richtlinie steht noch aus."',
          opt:['Die Richtlinie wurde noch nicht umgesetzt.','Die Richtlinie wird gerade umgesetzt.','Die Richtlinie wurde zurückgenommen.'],
          loesung:0, erklaerung:'„steht aus" heißt: noch nicht geschehen, aber erwartet.' },
        { art:'wahl', frage:'„Von einer Stellungnahme wurde abgesehen."',
          opt:['Es gab eine Stellungnahme.','Man hat bewusst keine abgegeben.','Die Stellungnahme wurde übersehen.'],
          loesung:1, erklaerung:'„absehen von" ist eine Entscheidung, nicht ein Versehen. Übersehen wäre „versäumt".' },
        { art:'wahl', frage:'„Die Angaben entziehen sich unserer Kenntnis."',
          opt:['Wir wissen es nicht.','Die Angaben sind falsch.','Die Angaben sind geheim.'],
          loesung:0, erklaerung:'Eine sehr förmliche Art zu sagen: Wir wissen es nicht. Über richtig oder falsch sagt der Satz nichts.' },
        { art:'wahl', frage:'„Der Vorgang bedarf einer erneuten Prüfung."',
          opt:['Der Vorgang wurde schon geprüft und ist in Ordnung.','Der Vorgang muss noch einmal geprüft werden.','Der Vorgang wurde abgelehnt.'],
          loesung:1, erklaerung:'„bedarf" + Genitiv = braucht, muss. „erneut" verrät: es gab schon eine Prüfung.' },
        { art:'wahl', frage:'„Mit einer Entscheidung ist nicht vor Jahresende zu rechnen."',
          opt:['Die Entscheidung fällt noch dieses Jahr.','Die Entscheidung fällt frühestens am Jahresende.','Es wird keine Entscheidung geben.'],
          loesung:1, erklaerung:'„nicht vor" ist der frühestmögliche Zeitpunkt, keine Absage — und kein Versprechen.' },
        { art:'wahl', frage:'„Die Kritik ist nicht von der Hand zu weisen."',
          opt:['Die Kritik ist unberechtigt.','An der Kritik ist etwas dran.','Die Kritik wurde zurückgewiesen.'],
          loesung:1, erklaerung:'Eine doppelte Verneinung als Zugeständnis: Man gibt der Kritik recht, ohne es offen zu sagen.' },
        { art:'wahl', frage:'„Der Vorschlag stieß auf geteiltes Echo."',
          opt:['Alle waren dagegen.','Die einen waren dafür, die anderen dagegen.','Niemand hat reagiert.'],
          loesung:1, erklaerung:'„geteilt" heißt: beide Lager gab es. Das ist weniger als Zustimmung und mehr als Ablehnung.' }
      ] },

    /* ---------- Stufe 1, Block 2 ---------- */
    { id:'c1s1b2', stufe:1, titel:'Wer handelt hier eigentlich?',
      kurz:'Passiv, Passiversatz und verschwundene Urheber',
      ziel:'Nach diesem Block erkennst du, wann ein Text absichtlich verschweigt, wer etwas getan hat.',
      zeichen:'🕵️', farbe:'gold',
      aufgaben: [
        { art:'wahl', frage:'„Es wurden Fehler gemacht." Was leistet dieser Satz?',
          opt:['Er benennt die Verantwortlichen.','Er räumt Fehler ein, ohne jemanden zu nennen.','Er bestreitet die Fehler.'],
          loesung:1, erklaerung:'Der Klassiker der Verantwortungsvermeidung: Das Passiv lässt den Handelnden weg.' },
        { art:'wahl', frage:'„Die Zahlen lassen sich unterschiedlich deuten."',
          opt:['Die Zahlen sind falsch.','Man kann sie auf mehrere Arten verstehen.','Die Zahlen sind eindeutig.'],
          loesung:1, erklaerung:'„sich lassen" + Infinitiv ersetzt „können … werden". Oft eine höfliche Vorbereitung auf Widerspruch.' },
        { art:'wahl', frage:'„Das Ergebnis ist kaum zu überbieten."',
          opt:['Das Ergebnis ist sehr gut.','Das Ergebnis ist enttäuschend.','Das Ergebnis ist unklar.'],
          loesung:0, erklaerung:'„sein zu" + Infinitiv heißt hier „kann … werden": Es kann kaum übertroffen werden — also Lob.' },
        { art:'wahl', frage:'„Dieser Schritt ist nur schwer zu rechtfertigen."',
          opt:['Der Schritt war richtig.','Für den Schritt gibt es kaum gute Gründe.','Der Schritt wurde gut begründet.'],
          loesung:1, erklaerung:'Dieselbe Konstruktion, umgekehrte Wertung — hier eine deutliche Kritik in höflicher Form.' },
        { art:'wahl', frage:'„Seitens der Verwaltung hieß es, man prüfe den Fall."',
          opt:['Die Verwaltung hat den Fall geprüft.','Die Verwaltung sagt, sie prüfe ihn gerade.','Der Autor prüft den Fall.'],
          loesung:1, erklaerung:'„hieß es" plus Konjunktiv I („prüfe") markiert fremde Rede. Der Text übernimmt die Aussage nicht.' },
        { art:'wahl', frage:'„Angeblich sei die Frist eingehalten worden."',
          opt:['Die Frist wurde eingehalten.','Jemand behauptet das, der Text glaubt es nicht unbedingt.','Die Frist wurde versäumt.'],
          loesung:1, erklaerung:'„angeblich" plus Konjunktiv ist doppelte Distanz. Der Text geht auf Abstand zu dieser Behauptung.' },
        { art:'wahl', frage:'„Die Maßnahme gilt als umstritten."',
          opt:['Die Maßnahme ist umstritten.','Viele halten sie für umstritten.','Die Maßnahme ist beschlossen.'],
          loesung:1, erklaerung:'„gilt als" gibt eine verbreitete Einschätzung wieder, nicht einen Befund. Der Text bleibt neutral.' },
        { art:'wahl', frage:'„Es bleibt abzuwarten, ob sich der Aufwand lohnt."',
          opt:['Der Aufwand lohnt sich.','Man weiß es noch nicht.','Der Aufwand lohnt sich nicht.'],
          loesung:1, erklaerung:'Eine Formel für offenen Ausgang — oft mit leisem Zweifel, aber ohne Festlegung.' },
        { art:'wahl', frage:'„Der Behörde zufolge liegen keine Beschwerden vor."',
          opt:['Es gibt keine Beschwerden.','Die Behörde sagt, es gebe keine.','Die Beschwerden wurden abgelehnt.'],
          loesung:1, erklaerung:'„zufolge" nennt die Quelle. Ob es stimmt, sagt der Satz nicht — er sagt nur, wer es behauptet.' },
        { art:'wahl', frage:'„Dem Bericht ist zu entnehmen, dass die Kosten gestiegen sind."',
          opt:['Im Bericht steht es.','Der Bericht widerspricht dem.','Der Autor vermutet es.'],
          loesung:0, erklaerung:'„zu entnehmen sein" heißt: Es steht dort, man kann es dort nachlesen.' }
      ] },

    /* ---------- Stufe 2, Block 1 ---------- */
    { id:'c1s2b1', stufe:2, titel:'Das Wort, das alles dreht',
      kurz:'Konnektoren, die den Absatz kippen',
      ziel:'Nach diesem Block findest du in jedem Absatz die Stelle, an der der Text die Richtung wechselt.',
      zeichen:'🧭', farbe:'rot',
      aufgaben: [
        { art:'wahl', frage:'„Das Konzept ist durchdacht. Freilich fehlt ihm die Finanzierung." Welche Haltung hat der Text?',
          opt:['Uneingeschränktes Lob.','Lob mit einem entscheidenden Einwand.','Klare Ablehnung.'],
          loesung:1, erklaerung:'„freilich" leitet den Einwand ein — das Lob davor bleibt stehen, verliert aber sein Gewicht.' },
        { art:'wahl', frage:'„Der Plan überzeugt, zumal er ohne neue Stellen auskommt."',
          opt:['„zumal" schwächt das Lob ab.','„zumal" liefert einen zusätzlichen Grund für das Lob.','„zumal" widerspricht dem Lob.'],
          loesung:1, erklaerung:'„zumal" verstärkt: Es kommt ein besonders gewichtiges Argument hinzu.' },
        { art:'wahl', frage:'„Die Zahlen steigen. Indes ist Vorsicht geboten."',
          opt:['Die Zahlen sind ein gutes Zeichen.','Der Text bremst die positive Lesart.','Die Zahlen sind gefälscht.'],
          loesung:1, erklaerung:'„indes" ist ein gehobenes „jedoch". Es kündigt die Gegenbewegung an.' },
        { art:'wahl', frage:'„Sofern die Mittel bewilligt werden, beginnt der Bau im Herbst."',
          opt:['Der Bau beginnt im Herbst.','Der Bau beginnt nur unter einer Bedingung.','Der Bau ist abgesagt.'],
          loesung:1, erklaerung:'„sofern" ist eine Bedingung, kein Termin. Ohne Mittel kein Herbst.' },
        { art:'wahl', frage:'„Gleichwohl hält die Kommission an ihrem Zeitplan fest."',
          opt:['Die Kommission gibt nach.','Die Kommission bleibt trotz der Einwände dabei.','Die Kommission hat keinen Zeitplan.'],
          loesung:1, erklaerung:'„gleichwohl" heißt „trotzdem". Davor stand mit Sicherheit ein Gegenargument.' },
        { art:'wahl', frage:'„Weniger überzeugend ist hingegen der zweite Teil."',
          opt:['Beide Teile sind schwach.','Der erste Teil war besser.','Der zweite Teil ist der bessere.'],
          loesung:1, erklaerung:'„hingegen" stellt gegenüber. Wenn der zweite weniger überzeugt, hat der erste überzeugt.' },
        { art:'wahl', frage:'„Dass die Kosten steigen, sei unbestritten; fraglich ist allein das Tempo."',
          opt:['Alles ist umstritten.','Über das Ob herrscht Einigkeit, über das Wie schnell nicht.','Die Kosten steigen nicht.'],
          loesung:1, erklaerung:'Der Satz grenzt den Streit ein. „allein" heißt hier „nur" — eine wichtige C1-Bedeutung.' },
        { art:'wahl', frage:'„So berechtigt die Kritik sein mag — sie kommt zu spät."',
          opt:['Die Kritik ist unberechtigt.','Die Kritik stimmt, nützt aber nichts mehr.','Die Kritik kommt gerade recht.'],
          loesung:1, erklaerung:'„So … auch/mag" räumt ein und entwertet im selben Atemzug.' },
        { art:'wahl', frage:'„Nicht zuletzt deshalb wurde das Vorhaben verschoben."',
          opt:['Das war der unwichtigste Grund.','Das war ein wichtiger Grund unter mehreren.','Das war kein Grund.'],
          loesung:1, erklaerung:'„nicht zuletzt" hebt hervor: Dieser Grund zählt besonders, auch wenn er zuletzt genannt wird.' },
        { art:'wahl', frage:'„Dem Vernehmen nach soll die Stelle bereits besetzt sein."',
          opt:['Die Stelle ist sicher besetzt.','Es gibt Gerüchte, dass sie besetzt ist.','Die Stelle ist frei.'],
          loesung:1, erklaerung:'„dem Vernehmen nach" plus „soll" ist Hörensagen in Amtsdeutsch.' }
      ] },

    /* ---------- Stufe 2, Block 2 ---------- */
    { id:'c1s2b2', stufe:2, titel:'Wissenschaftssprache',
      kurz:'Die Wörter, nach denen Teil 1 fragt',
      ziel:'Nach diesem Block triffst du bei den vier Möglichkeiten je Lücke die richtige, auch wenn drei davon passen könnten.',
      zeichen:'🔬', farbe:'lila',
      aufgaben: [
        { art:'wahl', frage:'Die Studie ___ zu dem Schluss, dass der Effekt gering ist.',
          opt:['kommt','erreicht','findet','erhält'],
          loesung:0, erklaerung:'Feste Verbindung: zu einem Schluss kommen. „gelangen" ginge auch, „erreichen" nicht.' },
        { art:'wahl', frage:'Die Ergebnisse ___ frühere Befunde.',
          opt:['bestätigen','beweisen','versichern','bekräftigen'],
          loesung:0, erklaerung:'Ergebnisse bestätigen Befunde. „beweisen" ist in der Wissenschaft zu stark, „versichern" tun nur Menschen.' },
        { art:'wahl', frage:'Der Zusammenhang ___ sich erst bei genauerer Betrachtung.',
          opt:['zeigt','weist','deutet','legt'],
          loesung:0, erklaerung:'„sich zeigen" ist die gängige Form. „hindeuten" bräuchte „auf", „nahelegen" kein „sich".' },
        { art:'wahl', frage:'Diese Annahme ___ einer empirischen Grundlage.',
          opt:['fehlt','entbehrt','mangelt','vermisst'],
          loesung:1, erklaerung:'„entbehren" + Genitiv ist die gehobene Fügung. „mangeln" bräuchte „es mangelt an".' },
        { art:'wahl', frage:'Die Methode hat sich in der Praxis ___.',
          opt:['bewiesen','bewährt','erwiesen','bestätigt'],
          loesung:1, erklaerung:'Sich bewähren heißt: sich im Einsatz als tauglich erweisen. Genau das ist gemeint.' },
        { art:'wahl', frage:'Der Befund ___ Anlass zu Zweifeln.',
          opt:['gibt','macht','stellt','bringt'],
          loesung:0, erklaerung:'Anlass geben ist das feste Funktionsverbgefüge.' },
        { art:'wahl', frage:'Die Daten wurden ___ eines standardisierten Verfahrens erhoben.',
          opt:['mittels','durch','über','per'],
          loesung:0, erklaerung:'„mittels" + Genitiv ist die wissenschaftssprachliche Form.' },
        { art:'wahl', frage:'Die Unterschiede sind statistisch nicht ___.',
          opt:['bedeutend','signifikant','erheblich','wesentlich'],
          loesung:1, erklaerung:'„signifikant" ist der Fachbegriff; die anderen drei sind Alltagswörter für dieselbe Idee.' },
        { art:'wahl', frage:'Im ___ an die Untersuchung wurden die Teilnehmenden befragt.',
          opt:['Anschluss','Nachgang','Folge','Verlauf'],
          loesung:0, erklaerung:'„im Anschluss an" heißt: direkt danach. „im Nachgang" ist Bürodeutsch, „im Verlauf" hieße währenddessen.' },
        { art:'wahl', frage:'Die Ergebnisse lassen sich nur ___ verallgemeinern.',
          opt:['bedingt','teilweise','gering','knapp'],
          loesung:0, erklaerung:'„nur bedingt" ist die stehende Einschränkung in Fachtexten.' }
      ] }
  ],

  teile: [

    /* ====================== TEIL 1 ====================== */
    { nr:1, art:'textwahl', name:'Lückentext, vier Möglichkeiten',
      kurz:'Ein populärwissenschaftlicher Artikel, acht Lücken, je vier Wörter zur Auswahl',
      was:'Du liest einen Sachtext von rund dreihundert Wörtern, in dem acht Wörter fehlen. Zu jeder Lücke stehen vier Möglichkeiten. Nur eine passt — grammatisch, inhaltlich und stilistisch.',
      tipp:'Lies den Satz immer zu Ende, bevor du wählst. Oft entscheidet nicht die Bedeutung, sondern was danach kommt: eine Präposition, ein Genitiv, ein fester Ausdruck. Drei der vier Wörter bedeuten meist ungefähr dasselbe — gefragt ist das eine, das an dieser Stelle üblich ist.',
      zeichen:'🔓', farbe:'turq', punkte:8,
      runden: [
        { id:'c1t1r1',
          text: { sorte:'zeitschrift', quelle:'Wissensmagazin „Horizont"',
            titel:'Warum Gerüche ein besseres Gedächtnis haben als wir',
            zeilen: [
              'Kaum ein Sinneseindruck wirkt so unmittelbar wie ein Geruch. Wer nach Jahrzehnten den Flur seiner alten Schule betritt, wird oft von einer Erinnerung überrascht, die er längst verloren glaubte — und zwar nicht als blasse Information, sondern mitsamt der Stimmung von damals. Die Forschung (1) dieses Phänomen seit den achtziger Jahren, ohne dass es bislang restlos geklärt wäre.',
              'Verantwortlich ist vermutlich die Anatomie. Während Seh- und Hörreize zunächst eine Schaltstelle im Zwischenhirn passieren, gelangen Geruchsreize auf kürzerem Weg in jene Regionen, die für Gefühl und Gedächtnis zuständig sind. Diese Nähe, so die gängige Erklärung, (2) dafür, dass Gerüche Erinnerungen samt ihrer emotionalen Färbung aufrufen.',
              'Allerdings (3) diese Erklärung einer wichtigen Einschränkung. Die meisten Untersuchungen beruhen auf Selbstauskünften, und die sind notorisch unzuverlässig: Menschen halten die Erinnerungen, die ein Geruch auslöst, für besonders lebendig — ob sie auch besonders genau sind, ist damit nicht gesagt. Eine Arbeitsgruppe in Utrecht kam vor einigen Jahren (4) dem Schluss, dass Geruchserinnerungen zwar intensiver erlebt, aber nicht zuverlässiger abgerufen werden als andere.',
              'Praktische Folgen hat der Befund dennoch. In der Pflege von Menschen mit Demenz wird seit einiger Zeit (5) Gerüchen gearbeitet, um Zugang zu früher Erlebtem zu schaffen. Die Ergebnisse sind ermutigend, lassen sich aber nur (6) verallgemeinern, weil die Gruppen klein und die Biografien sehr verschieden sind.',
              'Was sich sagen lässt: Der Geruchssinn altert langsamer, als man lange annahm, und sein Nachlassen (7) in manchen Fällen Anlass zu weiterer Abklärung — es kann ein frühes Zeichen sein. Ob daraus ein Vorsorgeinstrument wird, (8) abzuwarten. Bis dahin bleibt der Flur der alten Schule das zuverlässigste Experiment, das jeder selbst durchführen kann.'
            ] },
          aufgaben: [
            { frage:'Lücke (1)', opt:['untersucht','erforscht','prüft','durchsucht'],
              loesung:1, stelle:'Die Forschung (1) dieses Phänomen seit den achtziger Jahren',
              erklaerung:'„erforschen" ist das Verb für langfristige wissenschaftliche Arbeit an einem Gegenstand. „untersuchen" wäre ein einzelner Vorgang, „prüfen" setzt eine Behauptung voraus, „durchsuchen" meint das Absuchen eines Raums.' },
            { frage:'Lücke (2)', opt:['sorgt','trägt','führt','bringt'],
              loesung:0, stelle:'so die gängige Erklärung, (2) dafür, dass Gerüche Erinnerungen',
              erklaerung:'„dafür sorgen, dass" ist die feste Fügung. „beitragen" bräuchte „zu", „führen" ebenso, „bringen" passt hier gar nicht.' },
            { frage:'Lücke (3)', opt:['braucht','bedarf','benötigt','erfordert'],
              loesung:1, stelle:'Allerdings (3) diese Erklärung einer wichtigen Einschränkung',
              erklaerung:'Der Genitiv „einer Einschränkung" verlangt „bedarf". Die drei anderen Verben stehen mit Akkusativ.' },
            { frage:'Lücke (4)', opt:['auf','zu','an','in'],
              loesung:1, stelle:'kam vor einigen Jahren (4) dem Schluss',
              erklaerung:'„zu dem Schluss kommen" — dieselbe Wendung, die du im Block „Wissenschaftssprache" geübt hast.' },
            { frage:'Lücke (5)', opt:['mit','durch','über','an'],
              loesung:0, stelle:'wird seit einiger Zeit (5) Gerüchen gearbeitet',
              erklaerung:'„mit etwas arbeiten" heißt: es als Mittel einsetzen. „an Gerüchen arbeiten" würde bedeuten, die Gerüche selbst zu verbessern.' },
            { frage:'Lücke (6)', opt:['bedingt','teilweise','befristet','bedingungslos'],
              loesung:0, stelle:'lassen sich aber nur (6) verallgemeinern',
              erklaerung:'„nur bedingt" ist die stehende Einschränkung. „teilweise" wäre inhaltlich nah, ist aber an dieser Stelle unüblich; „befristet" betrifft Zeit, „bedingungslos" ist das Gegenteil.' },
            { frage:'Lücke (7)', opt:['macht','gibt','stellt','setzt'],
              loesung:1, stelle:'sein Nachlassen (7) in manchen Fällen Anlass zu weiterer Abklärung',
              erklaerung:'„Anlass geben zu" ist das Funktionsverbgefüge. Mit „machen" oder „stellen" gibt es diese Fügung nicht.' },
            { frage:'Lücke (8)', opt:['ist','bleibt','wird','steht'],
              loesung:1, stelle:'Ob daraus ein Vorsorgeinstrument wird, (8) abzuwarten',
              erklaerung:'„Es bleibt abzuwarten" ist die feste Formel für offenen Ausgang. „ist abzuwarten" käme vor, klingt aber amtlich; im Fließtext steht „bleibt".' }
          ] }
      ] },

    /* ====================== TEIL 2 ====================== */
    { nr:2, art:'textwahl', name:'Artikel mit drei Möglichkeiten',
      kurz:'Ein langer Sachtext, sieben Fragen, je drei Antworten',
      was:'Ein Artikel von rund siebenhundert Wörtern mit hohem Informationsgehalt. Zu jeder Frage gibt es drei Antworten, von denen genau eine zum Text passt.',
      tipp:'Die falschen Antworten stehen fast wörtlich im Text — nur an der falschen Stelle oder mit vertauschtem Bezug. Prüfe immer, WER im Text etwas sagt und OB der Text es sich zu eigen macht.',
      zeichen:'📰', farbe:'gold', punkte:7,
      runden: [
        { id:'c1t2r1',
          text: { sorte:'zeitung', quelle:'Wochenzeitung „Der Querschnitt"',
            titel:'Die Rückkehr der Nachtzüge — Fortschritt oder Nostalgie?',
            zeilen: [
              'Vor fünfzehn Jahren galt der Nachtzug als Auslaufmodell. Die Deutsche Bahn stellte ihr Angebot 2016 ein, andere Gesellschaften waren ihr darin vorausgegangen. Begründet wurde der Rückzug mit Zahlen: Die Wagen seien alt, die Auslastung schwankend, die Erlöse pro Platz zu gering, um die hohen Betriebskosten zu decken. Dass ausgerechnet ein kleiner österreichischer Betreiber die Strecken übernahm und damit nach eigenen Angaben schwarze Zahlen schreibt, hat die Branche seither nicht losgelassen.',
              'Der Erfolg hat mehrere Ursachen, und die Begeisterung fürs Reisen ist nur eine davon. Entscheidend war eine Rechnung, die die großen Gesellschaften nicht aufmachen wollten: Ein Nachtzug ersetzt für die Reisenden nicht nur einen Flug, sondern auch eine Hotelnacht. Wer das einpreist, kommt auf einen Ticketpreis, der über dem eines Billigflugs liegt und trotzdem als günstig empfunden wird. Hinzu kam, dass mehrere Länder Nachtstrecken inzwischen bezuschussen — ein Umstand, den Kritiker gern anführen, wenn von Wirtschaftlichkeit die Rede ist.',
              'Technisch ist das Geschäft anspruchsvoller, als es aussieht. Ein Nachtzug steht tagsüber und verdient nichts; er muss gereinigt, bewacht und instandgehalten werden. Die Wagen sind Sonderanfertigungen in kleiner Stückzahl, entsprechend teuer und entsprechend lange in der Lieferung. Und weil die Züge nachts über die Grenzen mehrerer Länder fahren, brauchen sie Lokomotiven, die in all diesen Netzen zugelassen sind. Fachleute halten genau das, nicht die Nachfrage, für den eigentlichen Engpass.',
              'Umstritten ist auch die Klimabilanz, und zwar nicht in der Richtung, die man erwartet. Dass eine Bahnfahrt weniger Treibhausgase verursacht als ein Flug, bestreitet niemand. Strittig ist, wie viel ein einzelner Nachtzug tatsächlich einspart, wenn er statt eines vollen Tageszuges mit halber Besetzung fährt und dabei die gleiche Trasse belegt. Eine Untersuchung der Technischen Universität Delft kam zu dem Ergebnis, dass die Einsparung pro Reisendem deutlich geringer ausfällt als in der öffentlichen Debatte unterstellt — was die Autoren allerdings ausdrücklich nicht als Argument gegen Nachtzüge verstanden wissen wollen.',
              'Für die Fahrgäste zählt ohnehin anderes. Umfragen zeigen übereinstimmend, dass nicht der Preis und nicht die Umwelt den Ausschlag geben, sondern die gewonnene Zeit: Wer abends einsteigt und morgens ankommt, verliert keinen Arbeitstag. Dass viele dabei schlecht schlafen, nehmen sie offenbar in Kauf. Die Betreiber haben darauf reagiert und bauen inzwischen mehr Einzelkabinen ein, was die Zahl der Plätze senkt und den Preis weiter nach oben treibt.',
              'Wohin die Entwicklung führt, ist offen. Mehrere Gesellschaften haben Strecken angekündigt, einige davon wieder zurückgezogen, bevor der erste Zug fuhr. Gleichwohl spricht einiges dafür, dass der Nachtzug bleibt — nicht als Massenverkehrsmittel, sondern als Angebot für eine Minderheit, die bereit ist, für eine andere Art zu reisen mehr zu zahlen. Von einer Rückkehr zur Normalität der siebziger Jahre ist jedenfalls nicht auszugehen.'
            ] },
          aufgaben: [
            { frage:'Womit begründete die Deutsche Bahn 2016 das Aus für ihre Nachtzüge?',
              opt:['Mit fehlender Nachfrage der Reisenden.','Mit alten Wagen, schwankender Auslastung und zu geringen Erlösen.','Mit dem Wettbewerb durch österreichische Anbieter.'],
              loesung:1, stelle:'Die Wagen seien alt, die Auslastung schwankend, die Erlöse pro Platz zu gering',
              erklaerung:'Der österreichische Betreiber kommt im Text vor — aber als Nachfolger, nicht als Grund. „Fehlende Nachfrage" steht nirgends; von schwankender Auslastung ist die Rede.' },
            { frage:'Was war laut Text entscheidend für den Erfolg des neuen Betreibers?',
              opt:['Dass er den Flug UND die Hotelnacht ersetzt und das einpreist.','Dass seine Tickets billiger sind als Billigflüge.','Dass die Menschen wieder gern Zug fahren.'],
              loesung:0, stelle:'Ein Nachtzug ersetzt für die Reisenden nicht nur einen Flug, sondern auch eine Hotelnacht',
              erklaerung:'Der Text sagt ausdrücklich das Gegenteil von Antwort b: Der Preis liegt ÜBER dem eines Billigflugs. Die Reiselust nennt er „nur eine" Ursache.' },
            { frage:'Was gilt Fachleuten als eigentlicher Engpass?',
              opt:['Die zu geringe Nachfrage.','Die Zulassung der Lokomotiven in mehreren Ländern.','Die Reinigung der Wagen.'],
              loesung:1, stelle:'Fachleute halten genau das, nicht die Nachfrage, für den eigentlichen Engpass',
              erklaerung:'„genau das" verweist auf den Satz davor: die länderübergreifende Zulassung. Der Text schließt die Nachfrage ausdrücklich aus.' },
            { frage:'Was ist an der Klimabilanz umstritten?',
              opt:['Ob die Bahn überhaupt weniger Treibhausgase verursacht als das Flugzeug.','Wie groß die Einsparung bei halb besetzten Nachtzügen tatsächlich ist.','Ob Nachtzüge mehr verbrauchen als Flugzeuge.'],
              loesung:1, stelle:'Strittig ist, wie viel ein einzelner Nachtzug tatsächlich einspart',
              erklaerung:'Der Vorteil gegenüber dem Flug wird im Text ausdrücklich von niemandem bestritten. Umstritten ist allein die Höhe.' },
            { frage:'Wie ordnen die Delfter Autoren ihr eigenes Ergebnis ein?',
              opt:['Als Argument gegen Nachtzüge.','Ausdrücklich nicht als Argument gegen Nachtzüge.','Als Beweis für die Debatte.'],
              loesung:1, stelle:'was die Autoren allerdings ausdrücklich nicht als Argument gegen Nachtzüge verstanden wissen wollen',
              erklaerung:'Eine typische C1-Falle: Das Ergebnis klingt negativ, die Autoren distanzieren sich im selben Satz von dieser Lesart.' },
            { frage:'Was gibt laut Umfragen für die Fahrgäste den Ausschlag?',
              opt:['Der günstige Preis.','Der Beitrag zum Klimaschutz.','Die gewonnene Zeit, weil kein Arbeitstag verlorengeht.'],
              loesung:2, stelle:'nicht der Preis und nicht die Umwelt den Ausschlag geben, sondern die gewonnene Zeit',
              erklaerung:'Der Satz nennt die beiden falschen Antworten selbst und schließt sie aus.' },
            { frage:'Wie schätzt der Text die Zukunft des Nachtzugs ein?',
              opt:['Als Massenverkehrsmittel wie in den siebziger Jahren.','Als Angebot für eine zahlungsbereite Minderheit.','Als Auslaufmodell, das bald wieder verschwindet.'],
              loesung:1, stelle:'nicht als Massenverkehrsmittel, sondern als Angebot für eine Minderheit',
              erklaerung:'„Gleichwohl spricht einiges dafür, dass der Nachtzug bleibt" schließt c aus; der letzte Satz schließt a aus.' }
          ] }
      ] },

    /* ====================== TEIL 3 ====================== */
    { nr:3, art:'anzeigenX', name:'Sätze in die Lücken setzen',
      kurz:'Aus einem Kommentar wurden acht Sätze entfernt — zehn stehen zur Wahl',
      was:'Du liest einen Kommentar, aus dem acht Sätze herausgenommen wurden. Unten stehen zehn Sätze. Acht gehören in den Text, zwei bleiben übrig.',
      tipp:'Arbeite nicht mit dem Inhalt allein, sondern mit den Scharnieren: Pronomen („dieser Einwand"), Zeitangaben („damals") und Konnektoren („gleichwohl") zeigen, worauf sich ein Satz bezieht. Wenn zwei Sätze inhaltlich passen, entscheidet fast immer der Anschluss an den Satz davor.',
      zeichen:'🧩', farbe:'rot', punkte:8,
      runden: [
        { id:'c1t3r1',
          anzeigen: [
            { b:'a', quelle:'Satz a', zeilen:['Dass sie überhaupt gestellt wird, ist das eigentlich Neue.'] },
            { b:'b', quelle:'Satz b', zeilen:['Dieser Einwand verfängt allerdings nur auf den ersten Blick.'] },
            { b:'c', quelle:'Satz c', zeilen:['Damals hielt man das noch für eine Marotte einzelner Betriebe.'] },
            { b:'d', quelle:'Satz d', zeilen:['Genau hier liegt der Unterschied zu früheren Anläufen.'] },
            { b:'e', quelle:'Satz e', zeilen:['Die Kosten dafür trägt in aller Regel niemand freiwillig.'] },
            { b:'f', quelle:'Satz f', zeilen:['Beides zusammen ergibt noch keine Strategie.'] },
            { b:'g', quelle:'Satz g', zeilen:['Ob das gelingt, hängt weniger vom Geld als von der Geduld ab.'] },
            { b:'h', quelle:'Satz h', zeilen:['Die Zahl der Beschwerden ist seither deutlich gesunken.'] },
            { b:'i', quelle:'Satz i', zeilen:['Fachkräfte wandern in andere Branchen ab.'] },
            { b:'j', quelle:'Satz j', zeilen:['Von einer Lösung kann deshalb noch keine Rede sein.'] }
          ],
          aufgaben: [
            { person:'Lücke 1 — Der Text beginnt: „Seit etwa zehn Jahren diskutieren Unternehmen über die Vier-Tage-Woche. ___ Heute führen sie Modellversuche durch und veröffentlichen die Ergebnisse."',
              situation:'Der Satz muss die Zeit „vor zehn Jahren" aufnehmen und zum „Heute" des Folgesatzes den Gegensatz bilden.',
              loesung:'c', erklaerung:'„Damals" greift die Zeitangabe auf, „Marotte einzelner Betriebe" bildet den Gegensatz zu den heutigen Modellversuchen.' },
            { person:'Lücke 2 — „Die Versuche unterscheiden sich in einem Punkt von allem, was vorher war: Der Lohn bleibt gleich. ___"',
              situation:'Der Satz soll erklären, warum dieser Punkt so wichtig ist.',
              loesung:'d', erklaerung:'„Genau hier" verweist zurück auf den gleichbleibenden Lohn; „frühere Anläufe" nimmt „alles, was vorher war" auf.' },
            { person:'Lücke 3 — „Kritiker halten dagegen, eine Verkürzung sei in personalintensiven Berufen unmöglich. ___ Denn gerade dort wird ohnehin längst in Schichten gearbeitet."',
              situation:'Zwischen Einwand und Widerlegung („Denn …") fehlt die Überleitung.',
              loesung:'b', erklaerung:'„Dieser Einwand verfängt nur auf den ersten Blick" kündigt die Widerlegung an, die mit „Denn" folgt.' },
            { person:'Lücke 4 — „In der Pflege fehlt das Personal, und die Belastung steigt. ___ Wer bleibt, arbeitet mehr."',
              situation:'Der Satz muss die Folge des Personalmangels benennen.',
              loesung:'i', erklaerung:'Die Abwanderung erklärt, warum „wer bleibt" mehr arbeitet.' },
            { person:'Lücke 5 — „Eine Klinik in Niedersachsen hat die Dienstpläne vor zwei Jahren umgestellt. ___"',
              situation:'Nach der Umstellung folgt ein messbares Ergebnis.',
              loesung:'h', erklaerung:'„seither" knüpft an „vor zwei Jahren" an und nennt das Ergebnis.' },
            { person:'Lücke 6 — „Nötig wären mehr Stellen und eine andere Planung. ___ Was fehlt, ist eine Antwort auf die Frage, wer das bezahlt."',
              situation:'Der Satz fasst die beiden Forderungen zusammen und leitet zur offenen Frage über.',
              loesung:'f', erklaerung:'„Beides zusammen" verweist auf Stellen und Planung; „noch keine Strategie" bereitet die offene Frage vor.' },
            { person:'Lücke 7 — „Die Frage nach der Finanzierung lässt sich nicht an die Betriebe allein weiterreichen. ___"',
              situation:'Der Satz soll begründen, warum die Frage offen bleibt.',
              loesung:'e', erklaerung:'„Die Kosten dafür trägt niemand freiwillig" erklärt, warum sich die Frage nicht einfach weiterreichen lässt.' },
            { person:'Lücke 8 — Der Text endet: „Die Versuche laufen weiter, die Ergebnisse widersprechen sich. ___"',
              situation:'Ein Schlusssatz, der das Fazit offen lässt.',
              loesung:'j', erklaerung:'„Von einer Lösung kann deshalb noch keine Rede sein" zieht das Fazit aus den widersprüchlichen Ergebnissen. Übrig bleiben a und g.' }
          ] }
      ] },

    /* ====================== TEIL 4 ====================== */
    { nr:4, art:'anzeigenX', name:'Aussagen den Fachleuten zuordnen',
      kurz:'Vier Fachbeiträge, sieben Aussagen — wer vertritt was?',
      was:'Vier Fachleute äußern sich zum selben Thema. Du ordnest sieben Aussagen der Person zu, die sie vertritt.',
      tipp:'Alle vier reden über dasselbe, deshalb hilft das Stichwort nicht weiter. Entscheidend ist die Haltung: Wer sieht ein Problem, wer eine Chance, wer hält die Frage für falsch gestellt? Markiere dir bei jedem Beitrag in einem Wort, wofür die Person steht.',
      zeichen:'👥', farbe:'gruen', punkte:7,
      runden: [
        { id:'c1t4r1',
          anzeigen: [
            { b:'a', quelle:'Prof. Dr. Henrike Baumgart, Bildungsforscherin',
              zeilen: ['Die Debatte über Tablets im Unterricht wird seit Jahren mit großer Leidenschaft und erstaunlich dünner Datenlage geführt. Was wir aus den vorliegenden Studien ablesen können, ist unspektakulär: Das Gerät selbst verändert die Lernleistung kaum, weder nach oben noch nach unten. Was einen Unterschied macht, ist die Aufgabe, die damit gestellt wird. Wer ein Arbeitsblatt digitalisiert, hat ein digitales Arbeitsblatt — mehr nicht. Ich halte die Frage „Tablet ja oder nein" deshalb für falsch gestellt und für eine bequeme Ausweichbewegung: Über Geräte lässt sich leichter streiten als über Unterricht.'] },
            { b:'b', quelle:'Markus Dreyer, Schulleiter einer Gesamtschule',
              zeilen: ['Bei uns hat jede Klasse Tablets, seit vier Jahren. Was in keiner Studie steht: Der Aufwand verschiebt sich nur. Früher haben wir kopiert, heute aktualisieren wir Software, tauschen Akkus und erklären Eltern, warum das Gerät gesperrt ist. Dafür habe ich keine einzige zusätzliche Stunde bekommen. Ich bin nicht gegen die Geräte — ich bin dagegen, dass man sie anschafft und die Folgekosten denen überlässt, die ohnehin am Limit arbeiten. Rechnet man die Betreuung ehrlich ein, ist die Rechnung eine ganz andere.'] },
            { b:'c', quelle:'Dr. Aylin Korkmaz, Kinderärztin',
              zeilen: ['Mich interessiert weniger der Lernerfolg als das, was ich in der Sprechstunde sehe. Kinder, die acht Stunden auf Bildschirme schauen, klagen über Kopfschmerzen und schlafen schlechter — und die Schule ist inzwischen ein Teil dieser acht Stunden. Daraus folgt für mich kein Verbot. Es folgt daraus, dass die Schule mitzählen muss, wenn über Bildschirmzeit gesprochen wird, statt sich für einen Sonderfall zu halten. Ein Vormittag am Gerät ist kein pädagogischer Freiraum, sondern schlicht Bildschirmzeit.'] },
            { b:'d', quelle:'Jonas Reuter, Lehrer für Deutsch und Geschichte',
              zeilen: ['Ich war lange skeptisch und habe meine Meinung geändert, allerdings aus einem Grund, der selten genannt wird. Die Geräte helfen mir nicht beim Erklären, sie helfen mir beim Sehen: Ich erkenne innerhalb von Minuten, wer eine Aufgabe verstanden hat und wer nicht. Früher wusste ich das nach dem Einsammeln der Hefte, also drei Tage später. Dass ich inzwischen anders unterrichte, liegt nicht an der Technik, sondern daran, dass ich schneller merke, wann ich etwas noch einmal sagen muss.'] }
          ],
          aufgaben: [
            { person:'Aussage 1: Die eigentliche Streitfrage ist falsch formuliert.',
              situation:'Die eigentliche Streitfrage ist falsch formuliert.',
              loesung:'a', erklaerung:'Baumgart sagt wörtlich, sie halte die Frage „Tablet ja oder nein" für falsch gestellt.' },
            { person:'Aussage 2: Die Belastung ist nicht geringer geworden, sondern hat die Form gewechselt.',
              situation:'Die Belastung ist nicht geringer geworden, sondern hat die Form gewechselt.',
              loesung:'b', erklaerung:'Dreyer: „Der Aufwand verschiebt sich nur" — früher kopieren, heute Software und Akkus.' },
            { person:'Aussage 3: Die Schule darf sich bei der Bildschirmzeit nicht herausrechnen.',
              situation:'Die Schule darf sich bei der Bildschirmzeit nicht herausrechnen.',
              loesung:'c', erklaerung:'Korkmaz fordert, die Schule müsse mitzählen, „statt sich für einen Sonderfall zu halten".' },
            { person:'Aussage 4: Der Nutzen liegt darin, Verständnisprobleme früher zu bemerken.',
              situation:'Der Nutzen liegt darin, Verständnisprobleme früher zu bemerken.',
              loesung:'d', erklaerung:'Reuter: Die Geräte helfen ihm „beim Sehen" — er erkennt in Minuten statt in drei Tagen, wer nicht mitkommt.' },
            { person:'Aussage 5: Entscheidend ist nicht das Gerät, sondern die gestellte Aufgabe.',
              situation:'Entscheidend ist nicht das Gerät, sondern die gestellte Aufgabe.',
              loesung:'a', erklaerung:'Baumgart: „Was einen Unterschied macht, ist die Aufgabe, die damit gestellt wird."' },
            { person:'Aussage 6: Wer die Geräte anschafft, muss auch für ihre Betreuung aufkommen.',
              situation:'Wer die Geräte anschafft, muss auch für ihre Betreuung aufkommen.',
              loesung:'b', erklaerung:'Dreyer wendet sich dagegen, dass man die Folgekosten denen überlässt, „die ohnehin am Limit arbeiten".' },
            { person:'Aussage 7: Aus den beobachteten Beschwerden folgt kein Verbot.',
              situation:'Aus den beobachteten Beschwerden folgt kein Verbot.',
              loesung:'c', erklaerung:'Korkmaz schreibt ausdrücklich: „Daraus folgt für mich kein Verbot."' }
          ] }
      ] }
  ],

  laeufe: [
    { id:'c1lauf1', titel:'Lesen C1 — ein kompletter Durchgang', minuten:65,
      teile: [ { nr:1, art:'textwahl', ref:'c1t1r1' }, { nr:2, art:'textwahl', ref:'c1t2r1' },
               { nr:3, art:'anzeigenX', ref:'c1t3r1' }, { nr:4, art:'anzeigenX', ref:'c1t4r1' } ] }
  ]
};
