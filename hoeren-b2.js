/* ============================================================
   deutschoderwas club — HÖREN B2 (Goethe-Zertifikat B2 · telc B2)

   Aufbau nach der offiziellen Testbeschreibung: vier Teile,
   dreißig Aufgaben, je ein Punkt, circa vierzig Minuten.

     Teil 1  fünf kurze Nachrichten und Ansagen   — zweimal
             je eine Richtig/Falsch-Aufgabe und eine a/b/c-Frage
     Teil 2  ein Vortrag mit Argumentation        — EINMAL
     Teil 3  ein längeres Gespräch, richtig/falsch — EINMAL
     Teil 4  eine Diskussion, wer sagt was        — zweimal

   Das Feld mal sagt, wie oft man einen Text hören darf. Bei
   Teil zwei und drei ist es bewusst nur einmal — sonst übt man
   etwas anderes als die Prüfung.

   Der Sprung von B1 auf B2: Auf B1 reicht es, die Haltung zu
   erkennen — dafür oder dagegen. Auf B2 musst du hören, WARUM
   jemand etwas sagt, welches Argument dahintersteckt und wo er
   sich selbst einschränkt. Die Sprecher loben und kritisieren im
   selben Satz, sie relativieren, sie werden ironisch. Und sie
   reden, wie Menschen wirklich reden: mit „also", mit „ehrlich
   gesagt", mit Selbstkorrekturen mitten im Satz.

   Der Weg hat vier Stufen, wie ein Lehrbuch aufgebaut:
   erst das Gemeinte hinter dem Gesagten, dann Zahlen und
   Verhältnisse, dann Argument und Absicht, dann die
   Aufgabentypen, zuletzt die ganze Prüfung mit Uhr.

   WICHTIG für die Sprachausgabe: In allen gesprochenen Texten
   sind Zahlen AUSGESCHRIEBEN (zweihundertvierzehn, achtzehn Uhr
   zwölf, am siebzehnten Mai, vierzig Prozent, zwei Millionen).
   Auch Abkürzungen stehen ausgeschrieben da — „zum Beispiel"
   statt der Kurzform, „Euro" statt des Zeichens. Ziffern und
   Kürzel würde die Stimme falsch vorlesen.

   wer ist Frau oder Mann und steuert die Stimme. stelle ist die
   wörtliche Stelle im Hörtext, die im Rückblick markiert wird —
   sie muss ZEICHENGENAU im Text vorkommen.
   ============================================================ */

window.HOEREN_B2 = {

  niveau: 'B2',
  pruefung: 'Goethe-Zertifikat B2 · telc B2',
  minuten: 40,
  punkte: 30,

  stufen: [
    { nr:1, titel:'Gesagt und gemeint', zeichen:'🎧',
      was:'Auf B2 sagt kaum jemand geradeheraus, was er meint. Gelobt wird, um danach zu kritisieren; zugestimmt wird, um einzuschränken. Hier lernst du, den zweiten Satz wichtiger zu nehmen als den ersten.' },
    { nr:2, titel:'Argument und Absicht', zeichen:'🧩',
      was:'Warum sagt jemand das? Als Beleg, als Einwand, als Bitte, als Vorwurf? In dieser Stufe hörst du die Struktur eines Arguments heraus — auch wenn die Konnektoren nur nebenbei fallen.' },
    { nr:3, titel:'Die vier Prüfungsteile', zeichen:'🎯',
      was:'Jeder Prüfungsteil einzeln geübt, in drei Runden — mit Hörtext, Lösung und der Stelle, an der es stand. Ansagen, Vortrag, Gespräch, Diskussion.' },
    { nr:4, titel:'Die ganze Prüfung', zeichen:'⏱️',
      was:'Alle vier Teile hintereinander, dreißig Aufgaben, mit Uhr und ohne Rückmeldung zwischendurch — so wie am Prüfungstag.' }
  ],

  /* ==========================================================
     STUFE 1 und 2 — Hörübungen vor den echten Aufgaben
     ========================================================== */

  bloecke: [

    { id:'s1b1', stufe:1, titel:'Das Lob mit dem Widerhaken',
      kurz:'zwar, allerdings, nur — wo die eigentliche Aussage steht',
      ziel:'Nach diesem Block hörst du automatisch weiter, wenn ein Satz freundlich anfängt — denn die Botschaft kommt danach.',
      zeichen:'🎧', farbe:'turq', mal:2,
      aufgaben: [
        { art:'hoerwahl', ort:'Betriebsversammlung', wer:'Mann',
          text:'Also, dass die neue Software besser ist als die alte, will ich gar nicht bestreiten. Nur, ehrlich gesagt, hat uns bisher niemand gefragt, ob wir sie überhaupt in dieser Form brauchen.',
          frage:'Was kritisiert der Mann?',
          opt:['Dass die Software nicht funktioniert.','Dass die Beschäftigten nicht gefragt wurden.','Dass die Software zu teuer ist.'],
          loesung:1, stelle:'hat uns bisher niemand gefragt',
          erklaerung:'Der erste Satz gibt etwas zu, der zweite nach „Nur" bringt die Kritik. Auf B2 steht die Aussage fast immer hinten.' },
        { art:'hoerwahl', ort:'Vereinssitzung', wer:'Frau',
          text:'Ich sage es mal so: Wenn sich bis zum Herbst niemand findet, der die Kasse übernimmt, dann war es das mit den Wanderungen. So einfach ist das leider.',
          frage:'Was meint die Frau?',
          opt:['Die Wanderungen sind auf jeden Fall vorbei.','Ohne neuen Kassenwart enden die Wanderungen.','Sie übernimmt die Kasse selbst.'],
          loesung:1, stelle:'dann war es das mit den Wanderungen',
          erklaerung:'Das „Wenn" macht daraus eine Bedingung, keine feste Ankündigung. Genau dieser Unterschied wird geprüft.' },
        { art:'hoerwahl', ort:'Personalgespräch', wer:'Mann',
          text:'Ihre Zahlen sind wirklich beeindruckend, das muss man Ihnen lassen. Was mir fehlt, ist eher, na ja, dass Sie das Team mitnehmen. Die Kolleginnen erfahren vieles erst hinterher.',
          frage:'Was will der Vorgesetzte sagen?',
          opt:['Er ist rundum zufrieden.','Er lobt die Leistung und kritisiert die Zusammenarbeit.','Er kritisiert die Zahlen.'],
          loesung:1, stelle:'Was mir fehlt, ist eher',
          erklaerung:'„Was mir fehlt" leitet die eigentliche Kritik ein. Das Lob davor macht sie nur erträglicher.' },
        { art:'hoerwahl', ort:'Radiogespräch über die Innenstadt', wer:'Frau',
          text:'Ob der neue Platz am Ende schön wird, darüber lässt sich streiten, klar. Dass er dringend gebraucht wird, darüber eigentlich nicht.',
          frage:'Wie steht die Frau zu dem Platz?',
          opt:['Sie hält ihn für überflüssig.','Sie hält ihn für nötig, über die Gestaltung diskutiert sie gern.','Sie findet ihn vor allem schön.'],
          loesung:1, stelle:'Dass er dringend gebraucht wird, darüber eigentlich nicht',
          erklaerung:'Sie stellt zwei Dinge gegenüber: strittig ist die Form, unstrittig die Notwendigkeit.' },
        { art:'hoerwahl', ort:'Gespräch über einen Umzug', wer:'Mann',
          text:'Nach München also. Mutig. Ich würde es mir bei den Mieten dort dreimal überlegen, ehrlich. Aber gut, das muss jeder für sich wissen.',
          frage:'Wie bewertet der Mann den Umzug?',
          opt:['Er findet ihn richtig.','Er hält ihn für riskant, mischt sich aber nicht ein.','Er versteht die Gründe nicht.'],
          loesung:1, stelle:'Ich würde es mir bei den Mieten dort dreimal überlegen',
          erklaerung:'„Mutig" ist hier keine Anerkennung, sondern eine Warnung. Das „Aber gut" nimmt ihr nur die Schärfe.' },
        { art:'hoerwahl', ort:'Gespräch über Sport', wer:'Frau',
          text:'Dass Bewegung guttut, ist ja nun wirklich keine Neuigkeit. Trotzdem, und da nehme ich mich überhaupt nicht aus, schafft es kaum jemand regelmäßig.',
          frage:'Was sagt die Frau über sich selbst?',
          opt:['Sie trainiert regelmäßig.','Sie hat dasselbe Problem wie die anderen.','Sie hält Sport für unnötig.'],
          loesung:1, stelle:'und da nehme ich mich überhaupt nicht aus',
          erklaerung:'„sich nicht ausnehmen" heißt: das gilt auch für mich. Sie kritisiert also nicht nur andere.' },
        { art:'hoerwahl', ort:'Gespräch über Medien', wer:'Mann',
          text:'Ich habe die Nachrichten-App gelöscht, wirklich. Nicht weil sie schlecht gemacht wäre, im Gegenteil, sondern weil ich abends einfach nicht mehr aufhören konnte.',
          frage:'Warum hat er die App gelöscht?',
          opt:['Weil die App schlecht war.','Weil er sie zu lange benutzt hat.','Weil sie zu viel gekostet hat.'],
          loesung:1, stelle:'sondern weil ich abends einfach nicht mehr aufhören konnte',
          erklaerung:'Das „Nicht weil …, sondern weil" schließt die naheliegende Antwort ausdrücklich aus.' },
        { art:'hoerwahl', ort:'Gespräch über den Bus aufs Land', wer:'Frau',
          text:'Billiger ist der Bus, keine Frage, da widerspreche ich nicht. Nur wenn er zweimal am Tag fährt, hilft mir der günstigste Preis herzlich wenig.',
          frage:'Was ist der Frau wichtiger als der Preis?',
          opt:['Die Sauberkeit.','Wie oft der Bus fährt.','Der Komfort der Sitze.'],
          loesung:1, stelle:'hilft mir der günstigste Preis herzlich wenig',
          erklaerung:'„herzlich wenig" ist ironisch gemeint und heißt: gar nicht. Entscheidend ist für sie der Takt.' }
      ] },

    { id:'s1b2', stufe:1, titel:'Zahlen, Anteile, Entwicklungen',
      kurz:'jeder Dritte, ein Viertel, deutlich mehr — mitdenken beim Hören',
      ziel:'Nach diesem Block verstehst du Angaben, die nur als Verhältnis oder als Tendenz genannt werden — und du rechnest im Kopf mit.',
      zeichen:'🔢', farbe:'turq', mal:2,
      aufgaben: [
        { art:'hoerwahl', ort:'Vortrag über Ernährung', wer:'Frau',
          text:'Knapp jeder Dritte in Deutschland isst inzwischen bewusst weniger Fleisch. Vor zehn Jahren war es gerade einmal jeder Zehnte. Da hat sich also einiges bewegt, und zwar schneller, als wir dachten.',
          frage:'Wie hat sich der Anteil entwickelt?',
          opt:['Er ist ungefähr gleich geblieben.','Er hat sich deutlich mehr als verdoppelt.','Er ist zurückgegangen.'],
          loesung:1, stelle:'Vor zehn Jahren war es gerade einmal jeder Zehnte',
          erklaerung:'Von jedem Zehnten auf fast jeden Dritten — das ist gut das Dreifache. Die Zahl steht nicht da, du musst sie bilden.' },
        { art:'hoerwahl', ort:'Sitzung des Betriebsrats', wer:'Mann',
          text:'Von den zweihundertvierzig Beschäftigten haben sich hundertachtzig für das neue Modell gemeldet. Das ist, also, das ist deutlich mehr, als wir erwartet hatten.',
          frage:'Wie groß ist der Anteil der Interessierten?',
          opt:['Etwa ein Drittel.','Etwa drei Viertel.','Alle.'],
          loesung:1, stelle:'haben sich hundertachtzig für das neue Modell gemeldet',
          erklaerung:'Hundertachtzig von zweihundertvierzig sind drei Viertel. Solche kleinen Rechnungen gehören auf B2 dazu.' },
        { art:'hoerwahl', ort:'Pressegespräch im Rathaus', wer:'Frau',
          text:'Die Zahl der Radfahrenden ist im Sommer um rund vierzig Prozent gestiegen, das freut uns natürlich. Im Winter dagegen bricht sie regelmäßig ein, und daran haben auch die neuen Wege nichts geändert.',
          frage:'Was sagt sie über den Winter?',
          opt:['Auch im Winter steigt die Zahl.','Im Winter geht die Zahl stark zurück.','Im Winter bleibt die Zahl gleich.'],
          loesung:1, stelle:'Im Winter dagegen bricht sie regelmäßig ein',
          erklaerung:'„einbrechen" heißt: stark zurückgehen. Das „dagegen" kündigt den Gegensatz zum Sommer an.' },
        { art:'hoerwahl', ort:'Jahresversammlung im Verein', wer:'Mann',
          text:'Wir haben derzeit dreihundertzwanzig Mitglieder, davon ist rund ein Viertel über siebzig. Nachwuchs, ja, den suchen wir händeringend, das ist kein Geheimnis.',
          frage:'Was trifft auf den Verein zu?',
          opt:['Ein Viertel der Mitglieder ist älter als siebzig.','Die Hälfte der Mitglieder ist älter als siebzig.','Der Verein hat genügend junge Mitglieder.'],
          loesung:0, stelle:'davon ist rund ein Viertel über siebzig',
          erklaerung:'„händeringend suchen" zeigt zusätzlich, dass es beim Nachwuchs eben nicht gut aussieht.' },
        { art:'hoerwahl', ort:'Beratung zur Weiterbildung', wer:'Frau',
          text:'Der Lehrgang kostet neunhundert Euro. Die Hälfte übernimmt Ihr Betrieb, und von dem, was übrig bleibt, können Sie einen Teil steuerlich absetzen.',
          frage:'Was zahlt der Betrieb?',
          opt:['Nichts.','Die Hälfte der Gebühr.','Den gesamten Lehrgang.'],
          loesung:1, stelle:'Die Hälfte übernimmt Ihr Betrieb',
          erklaerung:'Die Steuer betrifft nur den Rest — sie ändert nichts am Anteil des Betriebs.' },
        { art:'hoerwahl', ort:'Gespräch über den Nahverkehr', wer:'Mann',
          text:'Die Bahn ist im Schnitt vier Minuten später dran als angegeben. Klingt harmlos, ich weiß. Nur bei einer Umsteigezeit von fünf Minuten wird daraus schnell eine Stunde.',
          frage:'Warum ist die kleine Verspätung ein Problem?',
          opt:['Weil der Zug oft ausfällt.','Weil man den Anschluss verpasst.','Weil die Fahrkarte teurer wird.'],
          loesung:1, stelle:'bei einer Umsteigezeit von fünf Minuten wird daraus schnell eine Stunde',
          erklaerung:'Vier Minuten sind wenig, aber sie reichen, um den Anschluss zu verlieren — und dann wartet man lange.' },
        { art:'hoerwahl', ort:'Vortrag über Mediennutzung', wer:'Frau',
          text:'Jugendliche verbringen im Schnitt dreieinhalb Stunden am Tag mit dem Handy. Bei den Erwachsenen sind es, man höre und staune, kaum weniger.',
          frage:'Was sagt sie über die Erwachsenen?',
          opt:['Sie nutzen das Handy deutlich weniger.','Sie nutzen es fast genauso lange.','Sie nutzen es doppelt so lange.'],
          loesung:1, stelle:'sind es, man höre und staune, kaum weniger',
          erklaerung:'„kaum weniger" heißt: fast genauso viel. Der Einschub „man höre und staune" zeigt ihre Überraschung.' },
        { art:'hoerwahl', ort:'Nach dem Stadtlauf', wer:'Mann',
          text:'Angemeldet hatten sich zweihundert Läuferinnen und Läufer, angetreten sind am Ende hundertsechzig. Bei diesem Wetter, ehrlich gesagt, hätte ich mit weniger gerechnet.',
          frage:'Wie viele Angemeldete sind nicht gekommen?',
          opt:['Vierzig.','Hundertsechzig.','Keine.'],
          loesung:0, stelle:'angetreten sind am Ende hundertsechzig',
          erklaerung:'Zweihundert minus hundertsechzig sind vierzig. Der letzte Satz sagt außerdem: Er ist zufrieden.' }
      ] },

    { id:'s2b1', stufe:2, titel:'Das Argument dahinter',
      kurz:'zwar … allerdings, solange, nur wenn — die Logik im Satz',
      ziel:'Nach diesem Block erkennst du, ob jemand zustimmt, eine Bedingung stellt oder in Wahrheit widerspricht.',
      zeichen:'🧩', farbe:'gold', mal:2,
      aufgaben: [
        { art:'hoerwahl', ort:'Diskussion über Arbeitszeit', wer:'Frau',
          text:'Zwar spricht vieles für die Vier-Tage-Woche, das gebe ich zu. Allerdings, und das wird gern überhört, funktioniert sie nur dort, wo vorher schon genug Leute da waren.',
          frage:'Was macht die Frau?',
          opt:['Sie lehnt das Modell grundsätzlich ab.','Sie stimmt zu und nennt eine Bedingung.','Sie hält das Modell überall für machbar.'],
          loesung:1, stelle:'funktioniert sie nur dort, wo vorher schon genug Leute da waren',
          erklaerung:'„zwar … allerdings" ist das Grundmuster der Einschränkung. Nach dem „allerdings" steht die Bedingung.' },
        { art:'hoerwahl', ort:'Bürgerversammlung zur Innenstadt', wer:'Mann',
          text:'Die Innenstadt wird ja nicht dadurch lebendig, dass man ein paar Bänke aufstellt. Solange die Mieten so hoch sind, stehen die Läden trotzdem leer.',
          frage:'Was ist sein Hauptargument?',
          opt:['Bänke sind zu teuer.','Die hohen Mieten sind das eigentliche Problem.','Die Innenstadt ist längst lebendig.'],
          loesung:1, stelle:'Solange die Mieten so hoch sind, stehen die Läden trotzdem leer',
          erklaerung:'„Solange …, trotzdem" heißt: Die Maßnahme ändert nichts an der Ursache.' },
        { art:'hoerwahl', ort:'Gespräch über eine Fortbildung', wer:'Frau',
          text:'Ich will das Angebot gar nicht schlechtreden, im Gegenteil. Nur wenn die Fortbildung abends um sieben anfängt, ist sie für Eltern eben nicht zu schaffen.',
          frage:'Was ist ihr Einwand?',
          opt:['Die Inhalte sind schlecht.','Die Uhrzeit schließt bestimmte Menschen aus.','Die Fortbildung ist zu teuer.'],
          loesung:1, stelle:'ist sie für Eltern eben nicht zu schaffen',
          erklaerung:'Sie lobt vorweg, um deutlich zu machen: Ihr Einwand betrifft die Organisation, nicht den Inhalt.' },
        { art:'hoerwahl', ort:'Podiumsgespräch über das Ehrenamt', wer:'Mann',
          text:'Klar, ohne Ehrenamt läuft in den Vereinen gar nichts, das ist unbestritten. Bloß darf der Staat sich darauf nicht ausruhen, und genau das passiert seit Jahren.',
          frage:'Was betont der Mann?',
          opt:['Das Ehrenamt soll staatliche Aufgaben übernehmen.','Der Staat darf seine Verantwortung nicht abgeben.','Das Ehrenamt wird überschätzt.'],
          loesung:1, stelle:'darf der Staat sich darauf nicht ausruhen',
          erklaerung:'„sich auf etwas ausruhen" heißt: nichts mehr selbst tun. Das „Bloß" kündigt den Einwand an.' },
        { art:'hoerwahl', ort:'Gespräch über die Kantine', wer:'Frau',
          text:'Verbote bringen bei so etwas selten etwas, das zeigt doch die Erfahrung. Wenn das vegetarische Gericht aber gut schmeckt und günstiger ist, greifen die Leute von allein zu.',
          frage:'Was schlägt die Frau vor?',
          opt:['Fleisch zu verbieten.','Über Geschmack und Preis zu überzeugen.','Alles so zu lassen, wie es ist.'],
          loesung:1, stelle:'greifen die Leute von allein zu',
          erklaerung:'„von allein" ist der Gegenbegriff zum Verbot: Sie setzt auf freiwillige Entscheidung.' },
        { art:'hoerwahl', ort:'Diskussion über den Nulltarif im Bus', wer:'Mann',
          text:'Kostenlos hin oder her — mir nützt der Nulltarif herzlich wenig, wenn ich morgens im Bus stehe wie in der Sardinenbüchse.',
          frage:'Was ist ihm wichtiger als der Preis?',
          opt:['Dass der Bus sauber ist.','Dass genug Platz da ist.','Dass die Fahrer freundlich sind.'],
          loesung:1, stelle:'wenn ich morgens im Bus stehe wie in der Sardinenbüchse',
          erklaerung:'Das Bild von der Sardinenbüchse steht für Überfüllung. Sein Thema ist also die Kapazität.' },
        { art:'hoerwahl', ort:'Gespräch über Nachrichten', wer:'Frau',
          text:'Ich lese morgens eine Zeitung und danach nichts mehr, ganz bewusst. Nicht, weil mich das alles nicht interessieren würde, sondern weil ich sonst den ganzen Tag nur noch scrolle.',
          frage:'Warum begrenzt sie ihren Nachrichtenkonsum?',
          opt:['Politik interessiert sie nicht.','Sie will nicht ständig am Bildschirm hängen.','Zeitungen sind ihr zu teuer.'],
          loesung:1, stelle:'sondern weil ich sonst den ganzen Tag nur noch scrolle',
          erklaerung:'Die erste Erklärung wird ausdrücklich verneint — sie ist die Falle in der Aufgabe.' },
        { art:'hoerwahl', ort:'Gespräch über das Leben im Ausland', wer:'Mann',
          text:'Sprachlich, ja, das kriegt man irgendwann hin, da mache ich mir keine Sorgen. Was einen wirklich fertigmacht, sind die Ämter und die Formulare, die kein Mensch versteht.',
          frage:'Was hält er für die größte Hürde?',
          opt:['Die fremde Sprache.','Die Behörden.','Das Wetter.'],
          loesung:1, stelle:'sind die Ämter und die Formulare',
          erklaerung:'„Was einen wirklich fertigmacht" hebt das Eigentliche hervor — die Sprache hat er vorher abgehakt.' }
      ] },

    { id:'s2b2', stufe:2, titel:'Warum sagt jemand das?',
      kurz:'Bitte, Vorwurf, Rat oder Beschwerde in freundlicher Verpackung',
      ziel:'Nach diesem Block erkennst du die Absicht hinter einer Äußerung — die schwerste Frage in Teil eins der Prüfung.',
      zeichen:'🎯', farbe:'gold', mal:2,
      aufgaben: [
        { art:'hoerwahl', ort:'Moderation einer Radiodiskussion', wer:'Frau',
          text:'Herr Brandt, bevor wir weitermachen: Sie haben eben von Zahlen gesprochen. Können Sie die kurz einordnen? Sonst hängt das so im Raum.',
          frage:'Was ist die Absicht der Moderatorin?',
          opt:['Sie lobt den Gast.','Sie bittet um eine Erläuterung.','Sie beendet die Diskussion.'],
          loesung:1, stelle:'Können Sie die kurz einordnen',
          erklaerung:'„einordnen" heißt hier: erklären, was die Zahl bedeutet. Es ist eine höfliche Aufforderung.' },
        { art:'hoerwahl', ort:'Besprechung im Büro', wer:'Frau',
          text:'Also, das Konzept steht, das ist wirklich gut geworden. Ich würde nur ungern damit vor den Kunden gehen, bevor die Zahlen noch einmal geprüft sind.',
          frage:'Was will die Vorgesetzte?',
          opt:['Sie lehnt das Konzept ab.','Sie will vor der Präsentation eine Prüfung.','Sie will sofort präsentieren.'],
          loesung:1, stelle:'bevor die Zahlen noch einmal geprüft sind',
          erklaerung:'„Ich würde nur ungern" ist eine sehr höfliche Form von: So bitte noch nicht.' },
        { art:'hoerwahl', ort:'Mitgliederversammlung', wer:'Mann',
          text:'Ich mache das jetzt seit elf Jahren, gern, wirklich gern. Aber irgendwann sollte auch mal jemand anderes ran, das sage ich heute ganz offen.',
          frage:'Was möchte der Sprecher?',
          opt:['Er möchte weitermachen.','Er möchte abgelöst werden.','Er kritisiert seinen Nachfolger.'],
          loesung:1, stelle:'sollte auch mal jemand anderes ran',
          erklaerung:'Das lange Lob am Anfang macht die Bitte weicher — die Bitte selbst steht nach dem „Aber".' },
        { art:'hoerwahl', ort:'Am Gartenzaun', wer:'Frau',
          text:'Sie haben da wirklich einen wunderbaren Garten, das muss ich Ihnen mal sagen. Nur der Rasenmäher am Sonntagmorgen, also, das ist schon grenzwertig.',
          frage:'Was tut die Nachbarin?',
          opt:['Sie macht nur ein Kompliment.','Sie beschwert sich freundlich verpackt.','Sie bittet um Hilfe im Garten.'],
          loesung:1, stelle:'das ist schon grenzwertig',
          erklaerung:'„grenzwertig" ist eine deutliche Beschwerde. Das Lob davor soll den Streit vermeiden.' },
        { art:'hoerwahl', ort:'Im Prüfungsvorbereitungskurs', wer:'Mann',
          text:'Sie müssen nicht jedes Wort verstehen, wirklich nicht. Konzentrieren Sie sich lieber darauf, was am Ende eines Beitrags kommt — da steht in der Prüfung meistens die Lösung.',
          frage:'Was tut der Kursleiter?',
          opt:['Er warnt vor der Prüfung.','Er gibt einen Tipp zum Vorgehen.','Er kritisiert die Teilnehmenden.'],
          loesung:1, stelle:'Konzentrieren Sie sich lieber darauf, was am Ende eines Beitrags kommt',
          erklaerung:'Ein Imperativ mit „lieber" ist ein Rat, keine Kritik und keine Warnung.' },
        { art:'hoerwahl', ort:'Unter Kolleginnen', wer:'Frau',
          text:'Wenn du magst, schaue ich mir deine Bewerbung noch einmal an. Musst du aber nicht, ich will mich da auch gar nicht einmischen.',
          frage:'Was tut die Kollegin?',
          opt:['Sie bietet Hilfe an, ohne zu drängen.','Sie kritisiert die Bewerbung.','Sie bittet selbst um Hilfe.'],
          loesung:0, stelle:'schaue ich mir deine Bewerbung noch einmal an',
          erklaerung:'Der Nachsatz nimmt dem Angebot den Druck. Ein Angebot bleibt es trotzdem.' },
        { art:'hoerwahl', ort:'Bürgerversammlung zur Brücke', wer:'Mann',
          text:'Ich möchte hier wirklich niemandem zu nahe treten. Nur wurde uns dieselbe Brücke schon vor sechs Jahren versprochen, und passiert ist bis heute nichts.',
          frage:'Was tut der Redner?',
          opt:['Er lobt die Verwaltung.','Er wirft der Verwaltung leere Versprechen vor.','Er stellt eine reine Sachfrage.'],
          loesung:1, stelle:'schon vor sechs Jahren versprochen, und passiert ist bis heute nichts',
          erklaerung:'Die Entschuldigung am Anfang ist eine Höflichkeitsformel. Danach folgt ein klarer Vorwurf.' },
        { art:'hoerwahl', ort:'In der Kabine nach dem Spiel', wer:'Frau',
          text:'Dass ihr am Samstag verloren habt, geschenkt, das kommt vor. Was mich stört, ist etwas anderes: In der zweiten Halbzeit hat keiner mehr geredet auf dem Platz.',
          frage:'Was kritisiert die Trainerin?',
          opt:['Das Ergebnis.','Die fehlende Verständigung im Team.','Die Kondition der Spielerinnen.'],
          loesung:1, stelle:'In der zweiten Halbzeit hat keiner mehr geredet auf dem Platz',
          erklaerung:'„geschenkt" heißt: darüber rede ich gar nicht. Wichtig ist ihr, was nach „Was mich stört" kommt.' }
      ] }
  ],

  /* ==========================================================
     STUFE 3 — die echten Prüfungsteile
     ========================================================== */

  teile: [

    { nr:1, art:'ansage', name:'Kurze Nachrichten und Ansagen',
      kurz:'Kurze Texte, je zwei Aufgaben — zweimal hören',
      was:'Du hörst Nachrichten auf der Mailbox, Durchsagen und Meldungen im Radio. Zu jedem Text gibt es eine Richtig/Falsch-Aufgabe und eine Frage mit drei Antworten.',
      tipp:'Lies beide Aufgaben, bevor der Text läuft. Beim ersten Hören klärst du richtig oder falsch, beim zweiten die Auswahl. Achte auf „allerdings", „nur" und „bloß" — dahinter steht meistens die Lösung.',
      zeichen:'📢', farbe:'turq', punkte:10, mal:2,
      runden: [

        { id:'h1r1', titel:'Nachrichten auf der Mailbox',
          aufgaben: [
            { von:'Nachricht aus der Personalabteilung', wer:'Frau',
              text:'Hallo Frau Sandberg, hier ist Miriam Vogt aus der Personalabteilung. Also, das mit dem Seminar hat geklappt, Ihr Platz ist sicher. Nur der Termin hat sich verschoben, es geht jetzt erst am siebzehnten Mai los, nicht am dritten. Die Kursgebühr übernehmen wir komplett, die Fahrt allerdings müssten Sie selbst bezahlen. Melden Sie sich kurz, ja?',
              satz:'Die Firma bezahlt auch die Fahrtkosten.',
              loesung:false, stelle:'die Fahrt allerdings müssten Sie selbst bezahlen',
              erklaerung:'Das „allerdings" trennt die gute Nachricht von der Einschränkung: Gebühr ja, Fahrt nein.' },
            { von:'Nachricht aus der Personalabteilung', wer:'Frau',
              text:'Hallo Frau Sandberg, hier ist Miriam Vogt aus der Personalabteilung. Also, das mit dem Seminar hat geklappt, Ihr Platz ist sicher. Nur der Termin hat sich verschoben, es geht jetzt erst am siebzehnten Mai los, nicht am dritten. Die Kursgebühr übernehmen wir komplett, die Fahrt allerdings müssten Sie selbst bezahlen. Melden Sie sich kurz, ja?',
              frage:'Was hat sich geändert?',
              opt:['Der Ort des Seminars.','Der Beginn des Seminars.','Der Preis des Seminars.'],
              loesung:1, stelle:'es geht jetzt erst am siebzehnten Mai los',
              erklaerung:'Beide Daten werden genannt — entscheidend ist das mit „jetzt erst". Preis und Ort bleiben gleich.' },

            { von:'Nachricht vom Turnverein', wer:'Mann',
              text:'Guten Tag, Habermann hier, vom Turnverein Eichenfeld. Es geht um die Mitgliederversammlung am Donnerstag. Also, wir mussten den Raum wechseln, wir sind jetzt im Gasthaus Krone statt in der Turnhalle. Die Uhrzeit bleibt, neunzehn Uhr dreißig. Und ganz wichtig: Wir suchen immer noch jemanden für die Kasse. Denken Sie mal darüber nach, ja?',
              satz:'Die Versammlung beginnt später als geplant.',
              loesung:false, stelle:'Die Uhrzeit bleibt, neunzehn Uhr dreißig',
              erklaerung:'Geändert hat sich nur der Ort. Für die Uhrzeit sagt er ausdrücklich, dass sie bleibt.' },
            { von:'Nachricht vom Turnverein', wer:'Mann',
              text:'Guten Tag, Habermann hier, vom Turnverein Eichenfeld. Es geht um die Mitgliederversammlung am Donnerstag. Also, wir mussten den Raum wechseln, wir sind jetzt im Gasthaus Krone statt in der Turnhalle. Die Uhrzeit bleibt, neunzehn Uhr dreißig. Und ganz wichtig: Wir suchen immer noch jemanden für die Kasse. Denken Sie mal darüber nach, ja?',
              frage:'Worum bittet der Anrufer?',
              opt:['Um einen größeren Raum.','Darum, über das Amt des Kassenwarts nachzudenken.','Um eine schriftliche Anmeldung.'],
              loesung:1, stelle:'Wir suchen immer noch jemanden für die Kasse',
              erklaerung:'„Denken Sie mal darüber nach" ist die eigentliche Bitte — vorsichtig formuliert, aber unmissverständlich.' },

            { von:'Nachricht von einer Freundin', wer:'Frau',
              text:'Hi, ich bin es, Lena. Du, wegen Samstag: Der Transporter ist gebucht, den holen wir um acht Uhr ab. Was noch fehlt, sind Leute zum Tragen, bisher sind wir nur zu dritt, und der Keller ist wirklich voll. Frag doch mal deinen Bruder, ob er kann. Kartons brauchen wir übrigens keine mehr, die hat mir die Nachbarin geschenkt.',
              satz:'Lena braucht noch Umzugskartons.',
              loesung:false, stelle:'Kartons brauchen wir übrigens keine mehr',
              erklaerung:'Die Kartons werden genannt, aber ausdrücklich als erledigt. Genau darauf zielt die Falle.' },
            { von:'Nachricht von einer Freundin', wer:'Frau',
              text:'Hi, ich bin es, Lena. Du, wegen Samstag: Der Transporter ist gebucht, den holen wir um acht Uhr ab. Was noch fehlt, sind Leute zum Tragen, bisher sind wir nur zu dritt, und der Keller ist wirklich voll. Frag doch mal deinen Bruder, ob er kann. Kartons brauchen wir übrigens keine mehr, die hat mir die Nachbarin geschenkt.',
              frage:'Was ist Lenas eigentliches Problem?',
              opt:['Der Transporter ist noch nicht gebucht.','Es fehlen Helferinnen und Helfer.','Der Termin passt nicht.'],
              loesung:1, stelle:'Was noch fehlt, sind Leute zum Tragen',
              erklaerung:'„Was noch fehlt" markiert das offene Problem. Der Transporter ist ja schon organisiert.' }
          ],
          erklaerung:'Beide Aufgaben gehören jeweils zum selben Text. In der Prüfung stehen sie untereinander auf dem Blatt.' },

        { id:'h1r2', titel:'Durchsagen unterwegs und im Haus',
          aufgaben: [
            { von:'Durchsage der Verkehrsbetriebe', wer:'Mann',
              text:'Achtung, eine Information für unsere Fahrgäste: Wegen Bauarbeiten fährt die Straßenbahnlinie sechs ab Montag nicht mehr bis zum Hauptbahnhof, sondern nur noch bis zur Haltestelle Stadtpark. Von dort bringt Sie ein Ersatzbus weiter, die Fahrt dauert dadurch etwa acht Minuten länger. Fahrkarten behalten selbstverständlich ihre Gültigkeit. Wir bitten, ja, wir bitten um Ihr Verständnis.',
              satz:'Die Fahrgäste brauchen für den Ersatzbus eine neue Fahrkarte.',
              loesung:false, stelle:'Fahrkarten behalten selbstverständlich ihre Gültigkeit',
              erklaerung:'„Gültigkeit behalten" heißt: Die alte Fahrkarte reicht auch für den Ersatzverkehr.' },
            { von:'Durchsage der Verkehrsbetriebe', wer:'Mann',
              text:'Achtung, eine Information für unsere Fahrgäste: Wegen Bauarbeiten fährt die Straßenbahnlinie sechs ab Montag nicht mehr bis zum Hauptbahnhof, sondern nur noch bis zur Haltestelle Stadtpark. Von dort bringt Sie ein Ersatzbus weiter, die Fahrt dauert dadurch etwa acht Minuten länger. Fahrkarten behalten selbstverständlich ihre Gültigkeit. Wir bitten, ja, wir bitten um Ihr Verständnis.',
              frage:'Was ändert sich ab Montag?',
              opt:['Die Bahn fährt eine kürzere Strecke.','Die Bahn fällt ganz aus.','Die Bahn fährt seltener.'],
              loesung:0, stelle:'sondern nur noch bis zur Haltestelle Stadtpark',
              erklaerung:'Sie fährt weiter, nur eben nicht mehr bis zum Ende. Ein Ersatzbus schließt die Lücke.' },

            { von:'Durchsage in der Volkshochschule', wer:'Frau',
              text:'Liebe Kursteilnehmerinnen und Kursteilnehmer, eine kurze Durchsage: Der Kurs Rhetorik im Beruf findet heute im Raum zweihundertvierzehn statt, also eine Etage höher als sonst. Der Grund ist ganz banal, im Erdgeschoss ist die Heizung ausgefallen. Wer möchte, kann sich unten an der Theke noch einen Tee mitnehmen, der ist heute umsonst.',
              satz:'Der Kurs fällt heute aus.',
              loesung:false, stelle:'findet heute im Raum zweihundertvierzehn statt',
              erklaerung:'Nur der Raum ist ein anderer. „findet statt" schließt einen Ausfall direkt aus.' },
            { von:'Durchsage in der Volkshochschule', wer:'Frau',
              text:'Liebe Kursteilnehmerinnen und Kursteilnehmer, eine kurze Durchsage: Der Kurs Rhetorik im Beruf findet heute im Raum zweihundertvierzehn statt, also eine Etage höher als sonst. Der Grund ist ganz banal, im Erdgeschoss ist die Heizung ausgefallen. Wer möchte, kann sich unten an der Theke noch einen Tee mitnehmen, der ist heute umsonst.',
              frage:'Warum wurde der Raum gewechselt?',
              opt:['Der alte Raum ist zu klein.','Die Heizung funktioniert nicht.','Es kommen mehr Teilnehmende als erwartet.'],
              loesung:1, stelle:'im Erdgeschoss ist die Heizung ausgefallen',
              erklaerung:'„Der Grund ist ganz banal" kündigt die Begründung an — sie folgt unmittelbar danach.' },

            { von:'Durchsage im Betrieb', wer:'Mann',
              text:'Kurze Info an alle: Die Kantine bleibt in der kommenden Woche geschlossen, wir bekommen eine neue Küche. Dafür steht ein Imbisswagen auf dem Hof, mittags von halb zwölf bis vierzehn Uhr. Bezahlen könnt ihr dort nur mit Karte, Bargeld nimmt der Kollege nicht. Ach ja, und das vegetarische Gericht kostet einen Euro weniger als die anderen.',
              satz:'Man kann beim Imbisswagen bar bezahlen.',
              loesung:false, stelle:'Bargeld nimmt der Kollege nicht',
              erklaerung:'„nur mit Karte" wird im nächsten Satz noch einmal bestätigt. Bar geht also nicht.' },
            { von:'Durchsage im Betrieb', wer:'Mann',
              text:'Kurze Info an alle: Die Kantine bleibt in der kommenden Woche geschlossen, wir bekommen eine neue Küche. Dafür steht ein Imbisswagen auf dem Hof, mittags von halb zwölf bis vierzehn Uhr. Bezahlen könnt ihr dort nur mit Karte, Bargeld nimmt der Kollege nicht. Ach ja, und das vegetarische Gericht kostet einen Euro weniger als die anderen.',
              frage:'Was gilt für das vegetarische Gericht?',
              opt:['Es ist schnell ausverkauft.','Es ist günstiger als die übrigen Gerichte.','Es gibt es nur am Montag.'],
              loesung:1, stelle:'das vegetarische Gericht kostet einen Euro weniger',
              erklaerung:'Der Nachsatz mit „Ach ja" klingt nebensächlich — genau dort steckt in der Prüfung oft die Information.' }
          ],
          erklaerung:'Durchsagen kommen schnell zur Sache. Das Wort nach „weil", „da" oder „der Grund ist" beantwortet fast immer die Warum-Frage.' },

        { id:'h1r3', titel:'Meldungen im Radio',
          aufgaben: [
            { von:'Meldung aus dem Rathaus', wer:'Frau',
              text:'Und jetzt noch etwas aus dem Rathaus: Der Umbau des Marktplatzes beginnt später als angekündigt. Statt im März geht es erst im Juni los, weil, ja, weil eine Leitung nicht dort liegt, wo sie in den Plänen eingezeichnet war. Die Kosten bleiben nach Angaben der Stadt unverändert bei rund zwei Millionen Euro.',
              satz:'Der Umbau wird teurer als geplant.',
              loesung:false, stelle:'Die Kosten bleiben nach Angaben der Stadt unverändert',
              erklaerung:'Später heißt nicht automatisch teurer. Zu den Kosten sagt die Meldung ausdrücklich: unverändert.' },
            { von:'Meldung aus dem Rathaus', wer:'Frau',
              text:'Und jetzt noch etwas aus dem Rathaus: Der Umbau des Marktplatzes beginnt später als angekündigt. Statt im März geht es erst im Juni los, weil, ja, weil eine Leitung nicht dort liegt, wo sie in den Plänen eingezeichnet war. Die Kosten bleiben nach Angaben der Stadt unverändert bei rund zwei Millionen Euro.',
              frage:'Warum verzögert sich der Umbau?',
              opt:['Weil Geld fehlt.','Weil eine Leitung an einer anderen Stelle liegt.','Weil Anwohner protestiert haben.'],
              loesung:1, stelle:'weil eine Leitung nicht dort liegt, wo sie in den Plänen eingezeichnet war',
              erklaerung:'Die Sprecherin stockt kurz und wiederholt „weil" — danach kommt der Grund.' },

            { von:'Meldung aus der Wissenschaft', wer:'Mann',
              text:'Eine Meldung aus der Wissenschaft: Wer regelmäßig selbst kocht, ernährt sich einer neuen Studie zufolge ausgewogener, und zwar unabhängig davon, wie viel er verdient. Überraschend fanden die Forschenden vor allem, dass es dabei weniger auf die Zeit ankommt als auf die Gewohnheit. Wer einmal angefangen hat, bleibt meistens dabei.',
              satz:'Laut der Studie kommt es vor allem auf das Einkommen an.',
              loesung:false, stelle:'unabhängig davon, wie viel er verdient',
              erklaerung:'„unabhängig davon" heißt: Das Einkommen spielt gerade keine Rolle.' },
            { von:'Meldung aus der Wissenschaft', wer:'Mann',
              text:'Eine Meldung aus der Wissenschaft: Wer regelmäßig selbst kocht, ernährt sich einer neuen Studie zufolge ausgewogener, und zwar unabhängig davon, wie viel er verdient. Überraschend fanden die Forschenden vor allem, dass es dabei weniger auf die Zeit ankommt als auf die Gewohnheit. Wer einmal angefangen hat, bleibt meistens dabei.',
              frage:'Was war für die Forschenden überraschend?',
              opt:['Dass die Gewohnheit wichtiger ist als die Zeit.','Dass Kochen sehr viel Zeit kostet.','Dass Männer seltener kochen.'],
              loesung:0, stelle:'dass es dabei weniger auf die Zeit ankommt als auf die Gewohnheit',
              erklaerung:'Der Vergleich „weniger … als" dreht die naheliegende Erwartung um.' },

            { von:'Hinweis für die Sportfreunde', wer:'Frau',
              text:'Zum Schluss noch etwas für die Sportfreunde: Das Stadtlauf-Wochenende steigt wie geplant, allerdings mit einer Änderung. Die Strecke führt in diesem Jahr nicht durch die Altstadt, sondern am Fluss entlang. Anmeldungen sind noch bis Freitagabend möglich, danach nur noch vor Ort, und dann kostet es zehn Euro mehr.',
              satz:'Man kann sich auch noch am Veranstaltungstag anmelden.',
              loesung:true, stelle:'danach nur noch vor Ort',
              erklaerung:'Die Anmeldung vor Ort bleibt möglich, sie wird nur teurer. Die Aussage stimmt also.' },
            { von:'Hinweis für die Sportfreunde', wer:'Frau',
              text:'Zum Schluss noch etwas für die Sportfreunde: Das Stadtlauf-Wochenende steigt wie geplant, allerdings mit einer Änderung. Die Strecke führt in diesem Jahr nicht durch die Altstadt, sondern am Fluss entlang. Anmeldungen sind noch bis Freitagabend möglich, danach nur noch vor Ort, und dann kostet es zehn Euro mehr.',
              frage:'Was ist in diesem Jahr anders?',
              opt:['Der Termin.','Die Strecke.','Die Startzeit.'],
              loesung:1, stelle:'nicht durch die Altstadt, sondern am Fluss entlang',
              erklaerung:'„steigt wie geplant" schließt eine Terminänderung aus. Das „allerdings" kündigt die eine Änderung an.' }
          ],
          erklaerung:'Radiomeldungen sind dicht gepackt. Suche nach „neu", „geändert" oder „allerdings" — dort steht, worauf die Frage zielt.' }
      ] },

    { nr:2, art:'vortrag', name:'Ein Vortrag mit Argumenten',
      kurz:'Ein längerer Text am Stück — nur EINMAL hören',
      was:'Du hörst einen Vortrag, eine Präsentation oder einen Erfahrungsbericht. Die Fragen folgen der Reihenfolge des Textes. Es geht nicht um Einzelheiten, sondern um die Absicht der sprechenden Person.',
      tipp:'Du hörst nur einmal. Lies vorher alle Fragen und merke dir die Reihenfolge. Wenn du eine Antwort verpasst, spring sofort weiter — sonst verlierst du zwei statt einer.',
      zeichen:'🎙️', farbe:'rot', punkte:6, mal:1,
      runden: [

        { id:'h2r1', titel:'Vortrag über Arbeitszeitmodelle', ort:'Betriebsversammlung, Vortrag einer Beraterin',
          text:'Schönen guten Abend. Mein Name ist Andrea Roth, ich berate Betriebe bei der Arbeitszeit, seit, ja, seit gut fünfzehn Jahren. Und ich sage es gleich vorweg: Das eine Modell, das für alle passt, gibt es nicht. Wer Ihnen das verspricht, will Ihnen etwas verkaufen. Nehmen wir die Vier-Tage-Woche. In den Betrieben, die ich begleitet habe, ist die Zufriedenheit deutlich gestiegen, das stimmt. Nur, und das wird selten dazugesagt, funktioniert sie fast nur dort, wo vorher schon genug Personal da war. Das zweite Modell ist die Vertrauensarbeitszeit. Klingt erst einmal wunderbar: Niemand stempelt, jeder teilt sich die Zeit selbst ein. In der Praxis erlebe ich allerdings oft das Gegenteil von Freiheit. Die Leute arbeiten mehr, weil niemand mehr sieht, wann eigentlich Schluss ist. Was dagegen fast überall hilft, ist etwas ziemlich Unspektakuläres: feste Kernzeiten, in denen alle erreichbar sind, und ansonsten Ruhe. Klingt langweilig, ich weiß. Aber die Zahl der Missverständnisse geht spürbar zurück. Und zum Schluss ein Satz, der Ihnen vielleicht nicht gefällt: Kein Arbeitszeitmodell repariert ein schlechtes Betriebsklima. Wer sich nicht traut, seine Überstunden aufzuschreiben, für den werden es eben vier lange Tage.',
          aufgaben: [
            { ort:'Betriebsversammlung, Einleitung', wer:'Frau',
              text:'Schönen guten Abend. Mein Name ist Andrea Roth, ich berate Betriebe bei der Arbeitszeit, seit, ja, seit gut fünfzehn Jahren. Und ich sage es gleich vorweg: Das eine Modell, das für alle passt, gibt es nicht. Wer Ihnen das verspricht, will Ihnen etwas verkaufen.',
              frage:'Womit beginnt die Rednerin ihren Vortrag?',
              opt:['Mit dem Modell, das sie allen empfiehlt.','Mit einer Warnung vor einfachen Lösungen.','Mit einer Kritik an ihren Auftraggebern.'],
              loesung:1, stelle:'Das eine Modell, das für alle passt, gibt es nicht',
              erklaerung:'Sie stellt ihre Grundthese an den Anfang und warnt zugleich vor Beratern, die etwas anderes behaupten.' },
            { ort:'Betriebsversammlung, Vier-Tage-Woche', wer:'Frau',
              text:'Nehmen wir die Vier-Tage-Woche. In den Betrieben, die ich begleitet habe, ist die Zufriedenheit deutlich gestiegen, das stimmt. Nur, und das wird selten dazugesagt, funktioniert sie fast nur dort, wo vorher schon genug Personal da war.',
              frage:'Welche Bedingung nennt sie für die Vier-Tage-Woche?',
              opt:['Der Betrieb muss klein sein.','Es muss vorher genug Personal geben.','Die Löhne müssen sinken.'],
              loesung:1, stelle:'funktioniert sie fast nur dort, wo vorher schon genug Personal da war',
              erklaerung:'Erst bestätigt sie den Erfolg, dann schränkt sie ihn mit „Nur" auf eine Voraussetzung ein.' },
            { ort:'Betriebsversammlung, Vertrauensarbeitszeit', wer:'Frau',
              text:'Das zweite Modell ist die Vertrauensarbeitszeit. Klingt erst einmal wunderbar: Niemand stempelt, jeder teilt sich die Zeit selbst ein. In der Praxis erlebe ich allerdings oft das Gegenteil von Freiheit. Die Leute arbeiten mehr, weil niemand mehr sieht, wann eigentlich Schluss ist.',
              frage:'Was beobachtet sie bei der Vertrauensarbeitszeit?',
              opt:['Die Beschäftigten arbeiten weniger.','Die Beschäftigten arbeiten oft länger.','Die Beschäftigten kommen später zur Arbeit.'],
              loesung:1, stelle:'Die Leute arbeiten mehr, weil niemand mehr sieht, wann eigentlich Schluss ist',
              erklaerung:'„das Gegenteil von Freiheit" ist die Vorwarnung. Die Erklärung liefert der letzte Satz.' },
            { ort:'Betriebsversammlung, Empfehlung', wer:'Frau',
              text:'Was dagegen fast überall hilft, ist etwas ziemlich Unspektakuläres: feste Kernzeiten, in denen alle erreichbar sind, und ansonsten Ruhe. Klingt langweilig, ich weiß. Aber die Zahl der Missverständnisse geht spürbar zurück.',
              frage:'Was empfiehlt sie fast allen Betrieben?',
              opt:['Feste Zeiten, in denen alle erreichbar sind.','Vollständig freie Zeiteinteilung.','Eine neue Software für die Zeiterfassung.'],
              loesung:0, stelle:'feste Kernzeiten, in denen alle erreichbar sind',
              erklaerung:'Sie räumt selbst ein, dass der Vorschlag langweilig klingt — und begründet ihn mit weniger Missverständnissen.' },
            { ort:'Betriebsversammlung, Schluss', wer:'Frau',
              text:'Und zum Schluss ein Satz, der Ihnen vielleicht nicht gefällt: Kein Arbeitszeitmodell repariert ein schlechtes Betriebsklima. Wer sich nicht traut, seine Überstunden aufzuschreiben, für den werden es eben vier lange Tage.',
              frage:'Was ist ihre abschließende Aussage?',
              opt:['Ein gutes Modell löst die Probleme im Betrieb.','Die Arbeitszeit allein ändert nichts am Klima im Betrieb.','Überstunden sollte man besser nicht aufschreiben.'],
              loesung:1, stelle:'Kein Arbeitszeitmodell repariert ein schlechtes Betriebsklima',
              erklaerung:'Das Beispiel mit den Überstunden zeigt, was sie meint: Die vier Tage werden dann einfach länger.' }
          ],
          erklaerung:'Achte in Vorträgen auf „Nur", „allerdings" und „was dagegen hilft". An diesen Stellen wechselt die Rednerin vom Bericht zur eigenen Bewertung.' },

        { id:'h2r2', titel:'Vortrag über das Vereinsleben', ort:'Abend des Stadtverbands der Vereine',
          text:'Guten Abend, mein Name ist Til Boysen, ich bin beim Stadtverband für die Vereine zuständig. Ich fange mit einer Zahl an, die viele überrascht: Jeder dritte Erwachsene in dieser Stadt ist Mitglied in einem Verein. Sterbende Vereinslandschaft klingt anders, finde ich. Das Problem liegt nämlich woanders. Mitglieder finden wir, ehrlich gesagt, immer noch. Was wir kaum noch finden, sind Menschen, die ein Amt übernehmen. Kassenwart, Vorsitz, Schriftführung — bei diesen Posten schauen auf jeder Versammlung plötzlich alle auf den Boden. Woran das liegt? Sicher nicht daran, dass die Jüngeren bequem wären, das höre ich oft und das stimmt einfach nicht. Es liegt eher daran, dass ein Amt heute wirkt wie eine Ehe auf Lebenszeit. Wer einmal Ja sagt, kommt so schnell nicht wieder heraus. Deshalb raten wir zu etwas, das zuerst komisch klingt: Teilen Sie die Ämter auf. Zwei Personen für die Kasse, jede für zwei Jahre, mit klarer Übergabe. In den Vereinen, die das gemacht haben, hat sich die Zahl der Kandidatinnen und Kandidaten fast verdoppelt. Und eine Bitte zum Schluss, die kostet nichts: Fragen Sie die Leute direkt. Ein Aushang am schwarzen Brett hat noch nie jemanden überzeugt, ein Gespräch nach dem Training dagegen schon.',
          aufgaben: [
            { ort:'Stadtverband, Einleitung', wer:'Mann',
              text:'Guten Abend, mein Name ist Til Boysen, ich bin beim Stadtverband für die Vereine zuständig. Ich fange mit einer Zahl an, die viele überrascht: Jeder dritte Erwachsene in dieser Stadt ist Mitglied in einem Verein. Sterbende Vereinslandschaft klingt anders, finde ich.',
              frage:'Was will der Redner mit der Zahl zeigen?',
              opt:['Dass die Vereine kaum noch Mitglieder haben.','Dass die Vereine weiterhin viele Menschen erreichen.','Dass die Stadt zu wenig Geld gibt.'],
              loesung:1, stelle:'Jeder dritte Erwachsene in dieser Stadt ist Mitglied in einem Verein',
              erklaerung:'„Sterbende Vereinslandschaft klingt anders" ist ironisch — er widerspricht damit einem verbreiteten Bild.' },
            { ort:'Stadtverband, das eigentliche Problem', wer:'Mann',
              text:'Das Problem liegt nämlich woanders. Mitglieder finden wir, ehrlich gesagt, immer noch. Was wir kaum noch finden, sind Menschen, die ein Amt übernehmen. Kassenwart, Vorsitz, Schriftführung — bei diesen Posten schauen auf jeder Versammlung plötzlich alle auf den Boden.',
              frage:'Worin besteht das eigentliche Problem der Vereine?',
              opt:['Es fehlen Mitglieder.','Es fehlen Menschen für die Ämter.','Es fehlen Sportstätten.'],
              loesung:1, stelle:'Was wir kaum noch finden, sind Menschen, die ein Amt übernehmen',
              erklaerung:'Das Bild vom Blick auf den Boden beschreibt genau die Situation: Niemand meldet sich freiwillig.' },
            { ort:'Stadtverband, die Ursache', wer:'Mann',
              text:'Woran das liegt? Sicher nicht daran, dass die Jüngeren bequem wären, das höre ich oft und das stimmt einfach nicht. Es liegt eher daran, dass ein Amt heute wirkt wie eine Ehe auf Lebenszeit. Wer einmal Ja sagt, kommt so schnell nicht wieder heraus.',
              frage:'Wie erklärt er den Mangel an Freiwilligen?',
              opt:['Die jungen Leute sind zu bequem.','Ein Amt wirkt wie eine Verpflichtung ohne Ende.','Die Vereine zahlen zu wenig.'],
              loesung:1, stelle:'dass ein Amt heute wirkt wie eine Ehe auf Lebenszeit',
              erklaerung:'Die erste Erklärung weist er ausdrücklich zurück — sie ist als falsche Spur eingebaut.' },
            { ort:'Stadtverband, der Vorschlag', wer:'Mann',
              text:'Deshalb raten wir zu etwas, das zuerst komisch klingt: Teilen Sie die Ämter auf. Zwei Personen für die Kasse, jede für zwei Jahre, mit klarer Übergabe. In den Vereinen, die das gemacht haben, hat sich die Zahl der Kandidatinnen und Kandidaten fast verdoppelt.',
              frage:'Was empfiehlt er den Vereinen?',
              opt:['Ämter auf mehrere Schultern zu verteilen.','Ämter ganz abzuschaffen.','Für Ämter Geld zu bezahlen.'],
              loesung:0, stelle:'Teilen Sie die Ämter auf',
              erklaerung:'Er nennt sogar das Ergebnis: fast doppelt so viele Kandidaturen. Das ist sein Beleg.' },
            { ort:'Stadtverband, Schluss', wer:'Mann',
              text:'Und eine Bitte zum Schluss, die kostet nichts: Fragen Sie die Leute direkt. Ein Aushang am schwarzen Brett hat noch nie jemanden überzeugt, ein Gespräch nach dem Training dagegen schon.',
              frage:'Wie gewinnt man laut ihm neue Ehrenamtliche?',
              opt:['Über Aushänge im Vereinsheim.','Über die persönliche Ansprache.','Über soziale Medien.'],
              loesung:1, stelle:'Fragen Sie die Leute direkt',
              erklaerung:'Den Aushang nennt er nur, um ihn zu verwerfen. Der Gegensatz macht die Antwort eindeutig.' }
          ],
          erklaerung:'Wenn ein Redner eine verbreitete Meinung zuerst nennt und dann verwirft, ist genau diese Meinung die Falle in den Antwortoptionen.' },

        { id:'h2r3', titel:'Vortrag über Nachrichten und Aufmerksamkeit', ort:'Volkshochschule, Abendvortrag',
          text:'Ich freue mich, dass so viele gekommen sind. Ich bin Psychologin und beschäftige mich mit Nachrichtenkonsum. Und nein, ich bin nicht hier, um Ihnen das Handy wegzunehmen. Mir geht es um etwas anderes: darum, wie wir lesen, nicht wie viel. Was viele nicht wissen: Unser Kopf unterscheidet kaum zwischen einer Nachricht, die uns wirklich betrifft, und einer, die tausend Kilometer entfernt passiert. Er reagiert beide Male mit Anspannung. Handeln können wir aber nur im ersten Fall, und genau daraus entsteht dieses Gefühl von Ohnmacht. Der zweite Punkt ist die Häufigkeit. Wer zwanzigmal am Tag kurz auf die Schlagzeilen schaut, weiß am Abend erstaunlich wenig. Wer einmal am Tag zwanzig Minuten liest, weiß deutlich mehr. Die Menge ist dieselbe, die Wirkung nicht. Jetzt kommt der Teil, bei dem mir regelmäßig widersprochen wird: Ich halte nichts davon, Nachrichten ganz wegzulassen. Wer gar nichts mehr liest, fühlt sich zwar besser, ist aber auch leichter zu beeinflussen. Mein Vorschlag ist deshalb ganz praktisch: feste Zeiten, eine Quelle, die Sie wirklich schätzen, und abends das Gerät aus dem Schlafzimmer. Nach zwei Wochen erzählen mir die meisten dasselbe: Sie wissen mehr und schlafen besser.',
          aufgaben: [
            { ort:'Volkshochschule, Einleitung', wer:'Frau',
              text:'Ich freue mich, dass so viele gekommen sind. Ich bin Psychologin und beschäftige mich mit Nachrichtenkonsum. Und nein, ich bin nicht hier, um Ihnen das Handy wegzunehmen. Mir geht es um etwas anderes: darum, wie wir lesen, nicht wie viel.',
              frage:'Was ist ihr Anliegen?',
              opt:['Dass die Zuhörenden weniger Nachrichten lesen.','Dass sie anders mit Nachrichten umgehen.','Dass sie ganz auf das Handy verzichten.'],
              loesung:1, stelle:'darum, wie wir lesen, nicht wie viel',
              erklaerung:'Sie stellt „wie" und „wie viel" gegeneinander und entscheidet sich klar für das „wie".' },
            { ort:'Volkshochschule, Wirkung im Kopf', wer:'Frau',
              text:'Was viele nicht wissen: Unser Kopf unterscheidet kaum zwischen einer Nachricht, die uns wirklich betrifft, und einer, die tausend Kilometer entfernt passiert. Er reagiert beide Male mit Anspannung. Handeln können wir aber nur im ersten Fall, und genau daraus entsteht dieses Gefühl von Ohnmacht.',
              frage:'Warum ermüden Nachrichten aus fernen Ländern?',
              opt:['Weil der Körper reagiert, man aber nichts tun kann.','Weil sie besonders kompliziert sind.','Weil sie meistens falsch sind.'],
              loesung:0, stelle:'Handeln können wir aber nur im ersten Fall',
              erklaerung:'Anspannung ohne Handlungsmöglichkeit — daraus entsteht laut ihr das Gefühl der Ohnmacht.' },
            { ort:'Volkshochschule, Häufigkeit', wer:'Frau',
              text:'Der zweite Punkt ist die Häufigkeit. Wer zwanzigmal am Tag kurz auf die Schlagzeilen schaut, weiß am Abend erstaunlich wenig. Wer einmal am Tag zwanzig Minuten liest, weiß deutlich mehr. Die Menge ist dieselbe, die Wirkung nicht.',
              frage:'Was sagt sie über das häufige kurze Nachlesen?',
              opt:['Man behält dabei weniger als bei einmal langem Lesen.','Man ist dadurch besser informiert.','Es macht keinen Unterschied.'],
              loesung:0, stelle:'weiß am Abend erstaunlich wenig',
              erklaerung:'Sie vergleicht zwei Wege mit gleicher Gesamtzeit — und nennt ausdrücklich die unterschiedliche Wirkung.' },
            { ort:'Volkshochschule, Widerspruch', wer:'Frau',
              text:'Jetzt kommt der Teil, bei dem mir regelmäßig widersprochen wird: Ich halte nichts davon, Nachrichten ganz wegzulassen. Wer gar nichts mehr liest, fühlt sich zwar besser, ist aber auch leichter zu beeinflussen.',
              frage:'Wie steht sie zum völligen Verzicht auf Nachrichten?',
              opt:['Sie empfiehlt ihn.','Sie hält ihn für riskant.','Sie äußert sich dazu nicht.'],
              loesung:1, stelle:'ist aber auch leichter zu beeinflussen',
              erklaerung:'„zwar besser … aber leichter zu beeinflussen" — der Vorteil wiegt den Nachteil für sie nicht auf.' },
            { ort:'Volkshochschule, Vorschlag', wer:'Frau',
              text:'Mein Vorschlag ist deshalb ganz praktisch: feste Zeiten, eine Quelle, die Sie wirklich schätzen, und abends das Gerät aus dem Schlafzimmer. Nach zwei Wochen erzählen mir die meisten dasselbe: Sie wissen mehr und schlafen besser.',
              frage:'Was schlägt sie konkret vor?',
              opt:['Nachrichten nur noch am Wochenende zu lesen.','Feste Zeiten und das Gerät nachts nicht im Schlafzimmer.','Möglichst viele Quellen gleichzeitig zu nutzen.'],
              loesung:1, stelle:'feste Zeiten, eine Quelle, die Sie wirklich schätzen, und abends das Gerät aus dem Schlafzimmer',
              erklaerung:'Sie nennt drei Punkte auf einmal. Die richtige Option fasst zwei davon zusammen, die falschen widersprechen ihnen.' }
          ],
          erklaerung:'Bei Vorträgen mit einer These lohnt sich die Frage: Wogegen argumentiert die Person eigentlich? Die Gegenposition steht fast immer in den falschen Optionen.' }
      ] },

    { nr:3, art:'gespraech', name:'Ein längeres Gespräch',
      kurz:'Zwei Menschen, ein Anliegen, ein Missverständnis — nur EINMAL hören',
      was:'Du hörst ein Beratungs- oder Alltagsgespräch. Zu jeder Aussage entscheidest du, ob sie zum Gehörten passt. Oft glaubt eine der beiden Personen etwas Falsches — genau darauf zielen die Aufgaben.',
      tipp:'Achte darauf, WER etwas sagt und ob es bestätigt oder korrigiert wird. Viele Aussagen stimmen inhaltlich, stammen aber von der falschen Person oder wurden im Gespräch widerlegt.',
      zeichen:'🎤', farbe:'gold', punkte:6, mal:1,
      runden: [

        { id:'h3r1', titel:'Beratung zur Weiterbildung', ort:'Bildungsberatung, Beraterin und Interessent',
          zeilen: [
            { wer:'Mann', text:'Guten Tag. Ich interessiere mich für die Weiterbildung zum Techniker, also berufsbegleitend. Und, ehrlich gesagt, bei den Kosten blicke ich überhaupt nicht durch.' },
            { wer:'Frau', text:'Da sind Sie nicht der Erste. Die Weiterbildung kostet insgesamt dreitausendzweihundert Euro, verteilt auf zwei Jahre.' },
            { wer:'Mann', text:'Also sechzehnhundert im Jahr. Das übernimmt doch der Betrieb, oder? So habe ich das jedenfalls verstanden.' },
            { wer:'Frau', text:'Da muss ich Sie leider bremsen. Ihr Betrieb zahlt die Hälfte, so steht es im Tarifvertrag. Die andere Hälfte tragen Sie selbst, oder Sie beantragen die Förderung.' },
            { wer:'Mann', text:'Moment, Förderung? Davon hat mir niemand etwas gesagt.' },
            { wer:'Frau', text:'Das ist das Aufstiegs-Bafög. Damit kommen Sie am Ende auf einen Eigenanteil von, ja, ungefähr vierhundert Euro im Jahr.' },
            { wer:'Mann', text:'Das klingt schon ganz anders. Und der Unterricht, wann ist der? Ich arbeite ja Schicht.' },
            { wer:'Frau', text:'Freitagabend und samstags. Bei Schichtarbeit wird es eng, das sage ich Ihnen ganz ehrlich. Manche tauschen die Schichten, andere steigen nach einem halben Jahr wieder aus.' },
            { wer:'Mann', text:'Sie machen mir gerade wenig Mut.' },
            { wer:'Frau', text:'Doch, ich will Sie nicht abschrecken. Ich will nur, dass Sie mit offenen Augen anfangen. Reden Sie vorher mit Ihrem Schichtleiter, das ist der wichtigste Schritt.' },
            { wer:'Mann', text:'Gut. Und die Anmeldung, bis wann geht die?' },
            { wer:'Frau', text:'Bis Ende August. Aber warten Sie damit nicht bis zur letzten Woche, der Kurs war im vergangenen Jahr schon im Juli voll.' }
          ],
          aufgaben: [
            { ort:'Bildungsberatung, Kosten',
              zeilen: [
                { wer:'Frau', text:'Da sind Sie nicht der Erste. Die Weiterbildung kostet insgesamt dreitausendzweihundert Euro, verteilt auf zwei Jahre.' },
                { wer:'Mann', text:'Also sechzehnhundert im Jahr. Das übernimmt doch der Betrieb, oder? So habe ich das jedenfalls verstanden.' },
                { wer:'Frau', text:'Da muss ich Sie leider bremsen. Ihr Betrieb zahlt die Hälfte, so steht es im Tarifvertrag. Die andere Hälfte tragen Sie selbst, oder Sie beantragen die Förderung.' }
              ],
              satz:'Der Betrieb übernimmt die kompletten Kosten der Weiterbildung.',
              loesung:false, stelle:'Ihr Betrieb zahlt die Hälfte',
              erklaerung:'Der Mann glaubt das, die Beraterin korrigiert ihn mit „Da muss ich Sie leider bremsen".' },
            { ort:'Bildungsberatung, Förderung',
              zeilen: [
                { wer:'Mann', text:'Moment, Förderung? Davon hat mir niemand etwas gesagt.' },
                { wer:'Frau', text:'Das ist das Aufstiegs-Bafög. Damit kommen Sie am Ende auf einen Eigenanteil von, ja, ungefähr vierhundert Euro im Jahr.' }
              ],
              satz:'Mit der Förderung sinkt der eigene Anteil deutlich.',
              loesung:true, stelle:'ungefähr vierhundert Euro im Jahr',
              erklaerung:'Ohne Förderung wären es achthundert Euro im Jahr, mit Förderung nur noch die Hälfte davon.' },
            { ort:'Bildungsberatung, Unterrichtszeiten',
              zeilen: [
                { wer:'Mann', text:'Das klingt schon ganz anders. Und der Unterricht, wann ist der? Ich arbeite ja Schicht.' },
                { wer:'Frau', text:'Freitagabend und samstags. Bei Schichtarbeit wird es eng, das sage ich Ihnen ganz ehrlich. Manche tauschen die Schichten, andere steigen nach einem halben Jahr wieder aus.' }
              ],
              satz:'Der Unterricht findet vormittags unter der Woche statt.',
              loesung:false, stelle:'Freitagabend und samstags',
              erklaerung:'Der Unterricht liegt am Wochenende. Genau deshalb ist die Schichtarbeit ein Problem.' },
            { ort:'Bildungsberatung, Einschätzung',
              zeilen: [
                { wer:'Mann', text:'Sie machen mir gerade wenig Mut.' },
                { wer:'Frau', text:'Doch, ich will Sie nicht abschrecken. Ich will nur, dass Sie mit offenen Augen anfangen. Reden Sie vorher mit Ihrem Schichtleiter, das ist der wichtigste Schritt.' }
              ],
              satz:'Die Beraterin rät ihm von der Weiterbildung ab.',
              loesung:false, stelle:'ich will Sie nicht abschrecken',
              erklaerung:'Sie warnt vor den Schwierigkeiten, empfiehlt aber einen konkreten nächsten Schritt. Das ist keine Absage.' },
            { ort:'Bildungsberatung, Anmeldung',
              zeilen: [
                { wer:'Mann', text:'Gut. Und die Anmeldung, bis wann geht die?' },
                { wer:'Frau', text:'Bis Ende August. Aber warten Sie damit nicht bis zur letzten Woche, der Kurs war im vergangenen Jahr schon im Juli voll.' }
              ],
              satz:'Man sollte sich deutlich vor dem letzten Termin anmelden.',
              loesung:true, stelle:'warten Sie damit nicht bis zur letzten Woche',
              erklaerung:'Die Frist endet zwar später, aber der Kurs kann vorher voll sein. Die Begründung liefert sie gleich mit.' }
          ],
          erklaerung:'In Beratungsgesprächen steht die Lösung fast immer in der Korrektur: „Da muss ich Sie bremsen", „nicht ganz", „so ist es nicht".' },

        { id:'h3r2', titel:'Umzug ins Ausland', ort:'Zwei Kolleginnen und Kollegen in der Teeküche',
          zeilen: [
            { wer:'Frau', text:'Sag mal, stimmt das, was man hört? Du gehst nach Schweden?' },
            { wer:'Mann', text:'Nach Göteborg, ja. Ab Oktober, erst einmal für zwei Jahre.' },
            { wer:'Frau', text:'Zwei Jahre? Ich dachte, das wäre so ein kurzer Einsatz von ein paar Monaten.' },
            { wer:'Mann', text:'Das war der ursprüngliche Plan. Dann haben sie gefragt, ob ich das Team gleich mit aufbaue, und da konnte ich schlecht Nein sagen.' },
            { wer:'Frau', text:'Und Nina und die Kinder?' },
            { wer:'Mann', text:'Kommen mit, aber später. Die Große macht erst noch ihren Abschluss, das wären sonst zwei Wechsel in einem Jahr. Das wollten wir ihr nicht antun.' },
            { wer:'Frau', text:'Und die Sprache? Schwedisch lernt man ja nicht mal eben nebenbei.' },
            { wer:'Mann', text:'Im Betrieb läuft alles auf Englisch, das ist kein Problem. Nur beim Amt, oder wenn der Handwerker kommt, da wird es zäh. Ich habe jetzt einen Kurs angefangen, zweimal die Woche.' },
            { wer:'Frau', text:'Und wenn es euch dort nicht gefällt?' },
            { wer:'Mann', text:'Dann kommen wir zurück, so einfach ist das. Meine Stelle hier bleibt zwei Jahre offen, das steht sogar schriftlich. Ohne das hätte ich es nicht gemacht, ganz ehrlich.' },
            { wer:'Frau', text:'Das ist ja beruhigend. Ich hätte trotzdem Bauchschmerzen bei so einem Schritt.' },
            { wer:'Mann', text:'Die habe ich auch. Nur hätte ich in zehn Jahren mehr Bauchschmerzen, wenn ich es nicht probiert hätte.' }
          ],
          aufgaben: [
            { ort:'Teeküche, die Dauer',
              zeilen: [
                { wer:'Mann', text:'Nach Göteborg, ja. Ab Oktober, erst einmal für zwei Jahre.' },
                { wer:'Frau', text:'Zwei Jahre? Ich dachte, das wäre so ein kurzer Einsatz von ein paar Monaten.' },
                { wer:'Mann', text:'Das war der ursprüngliche Plan. Dann haben sie gefragt, ob ich das Team gleich mit aufbaue, und da konnte ich schlecht Nein sagen.' }
              ],
              satz:'Der Mann bleibt nur wenige Monate in Schweden.',
              loesung:false, stelle:'erst einmal für zwei Jahre',
              erklaerung:'Die Kollegin hatte etwas anderes gehört — ihr Irrtum wird im Gespräch sofort richtiggestellt.' },
            { ort:'Teeküche, die Familie',
              zeilen: [
                { wer:'Frau', text:'Und Nina und die Kinder?' },
                { wer:'Mann', text:'Kommen mit, aber später. Die Große macht erst noch ihren Abschluss, das wären sonst zwei Wechsel in einem Jahr. Das wollten wir ihr nicht antun.' }
              ],
              satz:'Die Familie zieht sofort mit um.',
              loesung:false, stelle:'Kommen mit, aber später',
              erklaerung:'Das „aber später" schränkt die Zusage ein. Der Grund folgt im nächsten Satz.' },
            { ort:'Teeküche, die Sprache',
              zeilen: [
                { wer:'Frau', text:'Und die Sprache? Schwedisch lernt man ja nicht mal eben nebenbei.' },
                { wer:'Mann', text:'Im Betrieb läuft alles auf Englisch, das ist kein Problem. Nur beim Amt, oder wenn der Handwerker kommt, da wird es zäh. Ich habe jetzt einen Kurs angefangen, zweimal die Woche.' }
              ],
              satz:'Im Betrieb muss er Schwedisch sprechen.',
              loesung:false, stelle:'Im Betrieb läuft alles auf Englisch',
              erklaerung:'Schwedisch braucht er im Alltag, nicht im Betrieb. Deshalb der Kurs zweimal die Woche.' },
            { ort:'Teeküche, die Rückkehr',
              zeilen: [
                { wer:'Frau', text:'Und wenn es euch dort nicht gefällt?' },
                { wer:'Mann', text:'Dann kommen wir zurück, so einfach ist das. Meine Stelle hier bleibt zwei Jahre offen, das steht sogar schriftlich. Ohne das hätte ich es nicht gemacht, ganz ehrlich.' }
              ],
              satz:'Er kann auf seine alte Stelle zurückkehren.',
              loesung:true, stelle:'Meine Stelle hier bleibt zwei Jahre offen',
              erklaerung:'„das steht sogar schriftlich" verstärkt die Zusage. Für ihn war sie die Bedingung für den Schritt.' },
            { ort:'Teeküche, die Zweifel',
              zeilen: [
                { wer:'Frau', text:'Das ist ja beruhigend. Ich hätte trotzdem Bauchschmerzen bei so einem Schritt.' },
                { wer:'Mann', text:'Die habe ich auch. Nur hätte ich in zehn Jahren mehr Bauchschmerzen, wenn ich es nicht probiert hätte.' }
              ],
              satz:'Der Mann hat keinerlei Zweifel an seiner Entscheidung.',
              loesung:false, stelle:'Die habe ich auch',
              erklaerung:'Er gibt die Zweifel zu und stellt ihnen nur ein größeres Bedauern gegenüber.' }
          ],
          erklaerung:'Auf B2 wird oft geprüft, ob du eine Zusage von einer eingeschränkten Zusage unterscheiden kannst: „ja, aber später" ist eben nicht „sofort".' },

        { id:'h3r3', titel:'Im Bürgerbüro: Anwohnerparken', ort:'Bürgerbüro, Mitarbeiter und Neubürgerin',
          zeilen: [
            { wer:'Frau', text:'Guten Tag. Ich brauche einen Anwohnerparkausweis, ich bin gerade in die Färberstraße gezogen.' },
            { wer:'Mann', text:'Färberstraße, Moment. Die gehört seit dem Umbau zur Innenstadtzone, und dort geben wir keine Anwohnerausweise mehr aus.' },
            { wer:'Frau', text:'Wie bitte? Mein Vermieter hat mir versichert, das sei überhaupt kein Problem.' },
            { wer:'Mann', text:'Das höre ich öfter. Die Regel gilt seit dem ersten Januar, viele Vermieter wissen davon nichts oder sagen es lieber nicht dazu.' },
            { wer:'Frau', text:'Und wo soll ich jetzt parken? Ich arbeite im Schichtdienst, ich komme nachts um halb zwölf nach Hause.' },
            { wer:'Mann', text:'Es gibt zwei Möglichkeiten. Im Parkhaus am Museum kostet ein Dauerstellplatz fünfundsiebzig Euro im Monat. Oder Sie stellen einen Antrag auf eine Ausnahme, wegen der Schichtarbeit.' },
            { wer:'Frau', text:'Eine Ausnahme? Und die bekomme ich dann auch?' },
            { wer:'Mann', text:'Ehrlich gesagt: Etwa die Hälfte der Anträge geht durch. Sie brauchen eine Bescheinigung vom Arbeitgeber, aus der die Nachtschichten hervorgehen.' },
            { wer:'Frau', text:'Und wie lange dauert so etwas?' },
            { wer:'Mann', text:'Vier bis sechs Wochen. In der Zwischenzeit bekommen Sie einen vorläufigen Ausweis, den stelle ich Ihnen gleich hier aus.' },
            { wer:'Frau', text:'Das hätten Sie auch früher sagen können.' },
            { wer:'Mann', text:'Da haben Sie recht, entschuldigen Sie. Ich fange beim nächsten Mal mit der guten Nachricht an.' }
          ],
          aufgaben: [
            { ort:'Bürgerbüro, die Auskunft',
              zeilen: [
                { wer:'Frau', text:'Guten Tag. Ich brauche einen Anwohnerparkausweis, ich bin gerade in die Färberstraße gezogen.' },
                { wer:'Mann', text:'Färberstraße, Moment. Die gehört seit dem Umbau zur Innenstadtzone, und dort geben wir keine Anwohnerausweise mehr aus.' }
              ],
              satz:'In der Färberstraße gibt es keine Anwohnerausweise mehr.',
              loesung:true, stelle:'dort geben wir keine Anwohnerausweise mehr aus',
              erklaerung:'Der Grund ist die neue Zone. Die Aussage gibt genau das wieder, was der Mitarbeiter sagt.' },
            { ort:'Bürgerbüro, der Vermieter',
              zeilen: [
                { wer:'Frau', text:'Wie bitte? Mein Vermieter hat mir versichert, das sei überhaupt kein Problem.' },
                { wer:'Mann', text:'Das höre ich öfter. Die Regel gilt seit dem ersten Januar, viele Vermieter wissen davon nichts oder sagen es lieber nicht dazu.' }
              ],
              satz:'Der Vermieter hatte die Frau richtig informiert.',
              loesung:false, stelle:'Die Regel gilt seit dem ersten Januar',
              erklaerung:'Die Regel gilt schon länger. Der Mitarbeiter deutet sogar an, dass manche Vermieter es bewusst verschweigen.' },
            { ort:'Bürgerbüro, die Alternativen',
              zeilen: [
                { wer:'Frau', text:'Und wo soll ich jetzt parken? Ich arbeite im Schichtdienst, ich komme nachts um halb zwölf nach Hause.' },
                { wer:'Mann', text:'Es gibt zwei Möglichkeiten. Im Parkhaus am Museum kostet ein Dauerstellplatz fünfundsiebzig Euro im Monat. Oder Sie stellen einen Antrag auf eine Ausnahme, wegen der Schichtarbeit.' }
              ],
              satz:'Ein Dauerstellplatz im Parkhaus ist kostenlos.',
              loesung:false, stelle:'kostet ein Dauerstellplatz fünfundsiebzig Euro im Monat',
              erklaerung:'Der Preis wird deutlich genannt. Kostenlos ist nur der vorläufige Ausweis später im Gespräch.' },
            { ort:'Bürgerbüro, die Aussichten',
              zeilen: [
                { wer:'Frau', text:'Eine Ausnahme? Und die bekomme ich dann auch?' },
                { wer:'Mann', text:'Ehrlich gesagt: Etwa die Hälfte der Anträge geht durch. Sie brauchen eine Bescheinigung vom Arbeitgeber, aus der die Nachtschichten hervorgehen.' }
              ],
              satz:'Fast alle Anträge auf eine Ausnahme werden bewilligt.',
              loesung:false, stelle:'Etwa die Hälfte der Anträge geht durch',
              erklaerung:'Die Hälfte ist nicht „fast alle". Solche Mengenangaben werden auf B2 gern zugespitzt.' },
            { ort:'Bürgerbüro, die Übergangszeit',
              zeilen: [
                { wer:'Frau', text:'Und wie lange dauert so etwas?' },
                { wer:'Mann', text:'Vier bis sechs Wochen. In der Zwischenzeit bekommen Sie einen vorläufigen Ausweis, den stelle ich Ihnen gleich hier aus.' }
              ],
              satz:'Bis zur Entscheidung darf sie mit einem vorläufigen Ausweis parken.',
              loesung:true, stelle:'bekommen Sie einen vorläufigen Ausweis',
              erklaerung:'„In der Zwischenzeit" beantwortet genau die Frage nach der Wartezeit.' }
          ],
          erklaerung:'Behördengespräche leben von Ausnahmen und Fristen. Merke dir beim Hören: Was gilt grundsätzlich, was gilt vorübergehend?' }
      ] },

    { nr:4, art:'diskussion', name:'Wer sagt was?',
      kurz:'Eine Diskussion mit zwei Gästen — zweimal hören',
      was:'Zwei Menschen mit unterschiedlichen Positionen diskutieren. Zu jeder Aussage entscheidest du, wer sie vertritt: die eine Person, die andere oder beide.',
      tipp:'Merke dir zuerst die Grundhaltung beider. Achte dann auf Zustimmungssignale wie „da bin ich ganz bei Ihnen" oder „das unterschreibe ich" — sie führen zur Antwort „beide". „Das mag sein, trotzdem" ist dagegen keine Zustimmung.',
      zeichen:'🗣️', farbe:'turq', punkte:8, mal:2,
      runden: [

        { id:'h4r1', titel:'Soll der Nahverkehr kostenlos sein?',
          aufgaben: [
            { ort:'Radiodiskussion — Frau Lindqvist und Herr Bergmann',
              zeilen: [
                { wer:'Frau', text:'Ich sage es ganz klar: Solange der Bus auf dem Land alle zwei Stunden fährt, ist der Nulltarif ein reines Symbol. Erst das Angebot, dann der Preis.' },
                { wer:'Mann', text:'Da bin ich ausnahmsweise ganz bei Ihnen. Nur bezahlt dieses Angebot am Ende auch jemand, und das sind die Städte und Gemeinden.' }
              ],
              frage:'Wer hält den Ausbau des Angebots für wichtiger als den Preis?',
              opt:['Frau Lindqvist','Herr Bergmann','beide'],
              loesung:2, stelle:'Da bin ich ausnahmsweise ganz bei Ihnen',
              erklaerung:'„ausnahmsweise ganz bei Ihnen" ist volle Zustimmung. Sein „Nur" betrifft danach die Finanzierung.' },
            { ort:'Radiodiskussion — Frau Lindqvist und Herr Bergmann',
              zeilen: [
                { wer:'Mann', text:'Kostenlos heißt ja nicht kostenlos. In unserer Stadt fehlen dann jedes Jahr achtzehn Millionen Euro, die woanders eingespart werden müssten.' },
                { wer:'Frau', text:'Diese Rechnung kenne ich. Sie verschweigt nur, was uns Staus, Unfälle und schlechte Luft Jahr für Jahr kosten.' }
              ],
              frage:'Wer rechnet die Folgekosten des Autoverkehrs mit ein?',
              opt:['Frau Lindqvist','Herr Bergmann','beide'],
              loesung:0, stelle:'was uns Staus, Unfälle und schlechte Luft Jahr für Jahr kosten',
              erklaerung:'Er rechnet nur mit dem Haushalt der Stadt. Sie erweitert die Rechnung um die Kosten des Autoverkehrs.' },
            { ort:'Radiodiskussion — Frau Lindqvist und Herr Bergmann',
              zeilen: [
                { wer:'Frau', text:'In Tallinn fahren die Einwohner seit Jahren umsonst. Der Anteil der Autofahrten ist dort allerdings nur leicht zurückgegangen, das gebe ich zu.' },
                { wer:'Mann', text:'Sehen Sie, genau das meine ich. Für wenig Wirkung sehr viel Geld.' }
              ],
              frage:'Wer bewertet den Nulltarif als zu teuer für seine Wirkung?',
              opt:['Frau Lindqvist','Herr Bergmann','beide'],
              loesung:1, stelle:'Für wenig Wirkung sehr viel Geld',
              erklaerung:'Sie nennt die schwache Wirkung selbst, zieht daraus aber nicht seinen Schluss. Zugeben ist nicht dasselbe wie bewerten.' },
            { ort:'Radiodiskussion — Frau Lindqvist und Herr Bergmann',
              zeilen: [
                { wer:'Mann', text:'Was ich mir gut vorstellen könnte, wäre ein sehr günstiges Jahresticket für Auszubildende und Rentnerinnen. Zielgerichtet, statt mit der Gießkanne.' },
                { wer:'Frau', text:'Dagegen hätte ich überhaupt nichts. Ich fürchte nur, es bleibt beim Ticket und die Busse kommen trotzdem nicht.' }
              ],
              frage:'Wer könnte sich vergünstigte Tickets für bestimmte Gruppen vorstellen?',
              opt:['Frau Lindqvist','Herr Bergmann','beide'],
              loesung:2, stelle:'Dagegen hätte ich überhaupt nichts',
              erklaerung:'Ihre Sorge betrifft die Umsetzung, nicht den Vorschlag selbst. Beide sind also dafür.' },
            { ort:'Radiodiskussion — Frau Lindqvist und Herr Bergmann',
              zeilen: [
                { wer:'Frau', text:'Am Ende entscheidet die Erfahrung im Alltag. Wer einmal zwanzig Minuten im Regen an der Haltestelle steht, kommt so schnell nicht wieder.' },
                { wer:'Mann', text:'Das mag sein. Trotzdem bleibe ich dabei: Ohne solide Finanzierung reden wir hier über Wolkenkuckucksheim.' }
              ],
              frage:'Wer stellt die alltägliche Erfahrung der Fahrgäste in den Mittelpunkt?',
              opt:['Frau Lindqvist','Herr Bergmann','beide'],
              loesung:0, stelle:'Wer einmal zwanzig Minuten im Regen an der Haltestelle steht, kommt so schnell nicht wieder',
              erklaerung:'„Das mag sein … trotzdem" ist eine höfliche Ablehnung, keine Zustimmung.' }
          ],
          erklaerung:'Zustimmung erkennst du an festen Wendungen: „da bin ich bei Ihnen", „dagegen hätte ich nichts". Ablehnung versteckt sich hinter „das mag sein" und „im Prinzip".' },

        { id:'h4r2', titel:'Ein verpflichtendes soziales Jahr?',
          aufgaben: [
            { ort:'Podiumsdiskussion — Herr Yildirim und Frau Kowalski',
              zeilen: [
                { wer:'Mann', text:'In unserem Verein bricht die Betreuung der Jugendmannschaften gerade weg. Ein verpflichtendes Jahr würde uns sofort helfen, und eine Zumutung ist das nun wirklich nicht.' },
                { wer:'Frau', text:'Doch, genau das ist es. Man kann junge Menschen nicht zum Helfen zwingen und das Ergebnis dann Engagement nennen.' }
              ],
              frage:'Wer hält eine Pflicht für zumutbar?',
              opt:['Herr Yildirim','Frau Kowalski','beide'],
              loesung:0, stelle:'eine Zumutung ist das nun wirklich nicht',
              erklaerung:'Ihr „Doch, genau das ist es" widerspricht direkt. Deutlicher kann eine Gegenposition kaum sein.' },
            { ort:'Podiumsdiskussion — Herr Yildirim und Frau Kowalski',
              zeilen: [
                { wer:'Frau', text:'Was wir brauchen, sind bessere Bedingungen: Fahrtkosten, Versicherung, eine feste Ansprechperson. Daran scheitert es doch, nicht am Willen.' },
                { wer:'Mann', text:'Da widerspreche ich Ihnen nicht. Nur löst das mein Problem nicht in diesem Jahr, sondern frühestens in fünf.' }
              ],
              frage:'Wer fordert bessere Rahmenbedingungen für Freiwillige?',
              opt:['Herr Yildirim','Frau Kowalski','beide'],
              loesung:2, stelle:'Da widerspreche ich Ihnen nicht',
              erklaerung:'Er teilt die Forderung, hält sie aber für zu langsam. Sein Einwand betrifft den Zeitraum, nicht die Sache.' },
            { ort:'Podiumsdiskussion — Herr Yildirim und Frau Kowalski',
              zeilen: [
                { wer:'Mann', text:'Meine Tochter hat freiwillig ein Jahr im Pflegeheim gearbeitet. Sie sagt heute, das habe sie mehr geprägt als die ganze Schulzeit.' },
                { wer:'Frau', text:'Freiwillig, genau das ist mein Punkt. Ihre Tochter hat sich entschieden, sie wurde nicht verpflichtet.' }
              ],
              frage:'Wer berichtet von einer Erfahrung in der eigenen Familie?',
              opt:['Herr Yildirim','Frau Kowalski','beide'],
              loesung:0, stelle:'Meine Tochter hat freiwillig ein Jahr im Pflegeheim gearbeitet',
              erklaerung:'Sie greift sein Beispiel auf, dreht es aber gegen ihn. Erzählt hat es nur er.' },
            { ort:'Podiumsdiskussion — Herr Yildirim und Frau Kowalski',
              zeilen: [
                { wer:'Frau', text:'Ein Pflichtjahr trifft außerdem nicht alle gleich. Wer studieren will, verliert ein Jahr, wer ohnehin jobben muss, verliert Einkommen.' },
                { wer:'Mann', text:'Das ist ein berechtigter Einwand, ehrlich gesagt. Deshalb wäre ich dafür, das Jahr auf die Ausbildung anzurechnen.' }
              ],
              frage:'Wer sieht die Gefahr, dass ein Pflichtjahr ungerecht wirkt?',
              opt:['Herr Yildirim','Frau Kowalski','beide'],
              loesung:2, stelle:'Das ist ein berechtigter Einwand, ehrlich gesagt',
              erklaerung:'Er erkennt das Problem ausdrücklich an und schlägt sogar eine Lösung dafür vor.' },
            { ort:'Podiumsdiskussion — Herr Yildirim und Frau Kowalski',
              zeilen: [
                { wer:'Mann', text:'Ich sage Ihnen, wie das endet: Ohne Pflicht macht es in zehn Jahren niemand mehr, und dann sperren die Vereine zu.' },
                { wer:'Frau', text:'Das halte ich für Schwarzmalerei. Die Zahlen zeigen etwas anderes, gerade bei kurzen Einsätzen von wenigen Wochen.' }
              ],
              frage:'Wer erwartet, dass das Ehrenamt ohne Pflicht verschwindet?',
              opt:['Herr Yildirim','Frau Kowalski','beide'],
              loesung:0, stelle:'Ohne Pflicht macht es in zehn Jahren niemand mehr',
              erklaerung:'„Schwarzmalerei" heißt: übertrieben düster. Sie teilt seine Prognose also nicht.' }
          ],
          erklaerung:'Wenn eine Person das Argument der anderen aufgreift, prüfe genau: Übernimmt sie es oder dreht sie es um? Nur im ersten Fall ist die Antwort „beide".' },

        { id:'h4r3', titel:'Weniger Fleisch in der Kantine?',
          aufgaben: [
            { ort:'Betriebsgespräch — Frau Achebe und Herr Steinbach',
              zeilen: [
                { wer:'Frau', text:'Ich bin dafür, das vegetarische Gericht zum Standard zu machen. Wer Fleisch möchte, bekommt es weiterhin, muss es aber ausdrücklich bestellen.' },
                { wer:'Mann', text:'Und da fängt es an. Für die Kollegen in der Werkhalle ist das eine Bevormundung, so wird es jedenfalls ankommen.' }
              ],
              frage:'Wer befürchtet, dass sich die Beschäftigten bevormundet fühlen?',
              opt:['Frau Achebe','Herr Steinbach','beide'],
              loesung:1, stelle:'ist das eine Bevormundung',
              erklaerung:'Sie schlägt die Regel vor, er sagt die Wirkung voraus. Die Sorge äußert nur er.' },
            { ort:'Betriebsgespräch — Frau Achebe und Herr Steinbach',
              zeilen: [
                { wer:'Mann', text:'Verstehen Sie mich nicht falsch: Weniger Fleisch, gern. Nur nicht per Ansage von oben, sondern weil das Essen überzeugt.' },
                { wer:'Frau', text:'Das unterschreibe ich sofort. Ein schlechtes vegetarisches Gericht schadet der Sache mehr als jedes Schnitzel.' }
              ],
              frage:'Wer meint, die Qualität des Essens entscheidet?',
              opt:['Frau Achebe','Herr Steinbach','beide'],
              loesung:2, stelle:'Das unterschreibe ich sofort',
              erklaerung:'„unterschreiben" ist hier bildlich: volle Zustimmung. Beide setzen auf Überzeugung statt Vorschrift.' },
            { ort:'Betriebsgespräch — Frau Achebe und Herr Steinbach',
              zeilen: [
                { wer:'Frau', text:'In den Betrieben, die umgestellt haben, ist der Fleischanteil um vierzig Prozent gesunken, ohne dass weniger Essen verkauft wurde.' },
                { wer:'Mann', text:'Diese Untersuchungen kenne ich. Nur stammen sie fast alle aus Bürobetrieben, und das ist etwas anderes als Schichtarbeit.' }
              ],
              frage:'Wer bezweifelt, dass sich die Ergebnisse übertragen lassen?',
              opt:['Frau Achebe','Herr Steinbach','beide'],
              loesung:1, stelle:'stammen sie fast alle aus Bürobetrieben',
              erklaerung:'Er bestreitet nicht die Zahlen, sondern ihre Übertragbarkeit auf seinen Betrieb.' },
            { ort:'Betriebsgespräch — Frau Achebe und Herr Steinbach',
              zeilen: [
                { wer:'Mann', text:'Was mich wirklich stört, ist der Preis. Der vegetarische Teller kostet bei uns dasselbe wie der mit Fleisch. Das versteht kein Mensch.' },
                { wer:'Frau', text:'Da rennen Sie bei mir offene Türen ein. Das billigere Gericht muss auch billiger sein, sonst wird die ganze Idee unglaubwürdig.' }
              ],
              frage:'Wer hält den gleichen Preis für ein Problem?',
              opt:['Frau Achebe','Herr Steinbach','beide'],
              loesung:2, stelle:'Da rennen Sie bei mir offene Türen ein',
              erklaerung:'„offene Türen einrennen" heißt: Dafür muss man mich nicht überzeugen, ich bin längst dieser Meinung.' },
            { ort:'Betriebsgespräch — Frau Achebe und Herr Steinbach',
              zeilen: [
                { wer:'Frau', text:'Am Ende geht es um Gewohnheit. Nach drei Wochen fragt niemand mehr, warum dienstags kein Fleisch auf dem Plan steht.' },
                { wer:'Mann', text:'Bei uns schon, das kann ich Ihnen versichern. Wir hatten das vor zwei Jahren, und der Ärger hielt ein halbes Jahr an.' }
              ],
              frage:'Wer glaubt, dass sich die Beschäftigten schnell umgewöhnen?',
              opt:['Frau Achebe','Herr Steinbach','beide'],
              loesung:0, stelle:'Nach drei Wochen fragt niemand mehr',
              erklaerung:'Er hält mit einer eigenen Erfahrung dagegen: Bei ihm dauerte der Ärger ein halbes Jahr.' }
          ],
          erklaerung:'In Teil vier gibt es fast immer einen Punkt, an dem sich beide einig sind. Suche ihn gezielt — er ist oft die Aufgabe, die viele verschenken.' }
      ] }
  ],

  /* ==========================================================
     STUFE 4 — die ganze Prüfung
     ========================================================== */

  laeufe: [

    { id:'p1', titel:'Prüfungslauf 1', minuten:40,
      teile: [

        { nr:1, art:'ansage', mal:2, aufgaben: [
          { von:'Nachricht der Volkshochschule', wer:'Frau',
            text:'Guten Tag, Frau Petrova, Volkshochschule Ostheim, mein Name ist Ute Bergmann. Ihr Prüfungstermin steht jetzt fest: am neunten Juni, um neun Uhr, im Hauptgebäude. Der schriftliche Teil dauert zweieinhalb Stunden, das Sprechen ist erst am Nachmittag. Bringen Sie bitte unbedingt einen Ausweis mit, ohne den dürfen wir Sie nicht zulassen.',
            satz:'Ohne Ausweis darf man an der Prüfung nicht teilnehmen.',
            loesung:true, stelle:'ohne den dürfen wir Sie nicht zulassen',
            erklaerung:'„nicht zulassen" heißt: nicht mitschreiben lassen. Das „unbedingt" verstärkt es zusätzlich.' },
          { von:'Nachricht der Volkshochschule', wer:'Frau',
            text:'Guten Tag, Frau Petrova, Volkshochschule Ostheim, mein Name ist Ute Bergmann. Ihr Prüfungstermin steht jetzt fest: am neunten Juni, um neun Uhr, im Hauptgebäude. Der schriftliche Teil dauert zweieinhalb Stunden, das Sprechen ist erst am Nachmittag. Bringen Sie bitte unbedingt einen Ausweis mit, ohne den dürfen wir Sie nicht zulassen.',
            frage:'Wann findet der mündliche Teil statt?',
            opt:['Am Vormittag.','Am Nachmittag.','An einem anderen Tag.'],
            loesung:1, stelle:'das Sprechen ist erst am Nachmittag',
            erklaerung:'Das „erst" trennt die beiden Prüfungsteile zeitlich. Beide sind aber am selben Tag.' },

          { von:'Nachricht eines Kollegen', wer:'Mann',
            text:'Hi Jana, Serkan hier. Du, die Projektbesprechung morgen: Wir bleiben bei zehn Uhr, sitzen aber im großen Besprechungsraum, weil Herr Falke aus Hamburg dazukommt. Und kannst du die Zahlen aus dem letzten Quartal mitbringen? Nicht ausgedruckt, digital reicht völlig. Bis morgen dann.',
            satz:'Die Besprechung wurde auf eine andere Uhrzeit verschoben.',
            loesung:false, stelle:'Wir bleiben bei zehn Uhr',
            erklaerung:'Geändert hat sich nur der Raum, und zwar wegen des Gastes aus Hamburg.' },
          { von:'Nachricht eines Kollegen', wer:'Mann',
            text:'Hi Jana, Serkan hier. Du, die Projektbesprechung morgen: Wir bleiben bei zehn Uhr, sitzen aber im großen Besprechungsraum, weil Herr Falke aus Hamburg dazukommt. Und kannst du die Zahlen aus dem letzten Quartal mitbringen? Nicht ausgedruckt, digital reicht völlig. Bis morgen dann.',
            frage:'In welcher Form soll Jana die Zahlen mitbringen?',
            opt:['Ausgedruckt auf Papier.','In digitaler Form.','Gar nicht, er hat sie schon.'],
            loesung:1, stelle:'Nicht ausgedruckt, digital reicht völlig',
            erklaerung:'Das „Nicht …, sondern" ist hier verkürzt: Zuerst das Ausgeschlossene, dann das Gewünschte.' },

          { von:'Durchsage im Bahnhof', wer:'Frau',
            text:'Sehr geehrte Fahrgäste am Gleis vier: Der Regionalzug nach Erfurt fällt heute leider aus. Als Ersatz nehmen Sie bitte den Zug nach Weimar, Abfahrt achtzehn Uhr zwölf ab Gleis sieben, und steigen Sie dort um. Ihre Fahrkarte behält selbstverständlich ihre Gültigkeit.',
            satz:'Der Zug nach Erfurt hat lediglich Verspätung.',
            loesung:false, stelle:'fällt heute leider aus',
            erklaerung:'Ein Ausfall ist keine Verspätung — der Zug fährt heute überhaupt nicht.' },
          { von:'Durchsage im Bahnhof', wer:'Frau',
            text:'Sehr geehrte Fahrgäste am Gleis vier: Der Regionalzug nach Erfurt fällt heute leider aus. Als Ersatz nehmen Sie bitte den Zug nach Weimar, Abfahrt achtzehn Uhr zwölf ab Gleis sieben, und steigen Sie dort um. Ihre Fahrkarte behält selbstverständlich ihre Gültigkeit.',
            frage:'Was sollen die Reisenden tun?',
            opt:['Auf den nächsten Zug nach Erfurt warten.','Über Weimar fahren und dort umsteigen.','Am Schalter eine neue Fahrkarte kaufen.'],
            loesung:1, stelle:'nehmen Sie bitte den Zug nach Weimar',
            erklaerung:'Die Durchsage nennt Ersatzzug, Gleis und Umstieg. Eine neue Fahrkarte braucht niemand.' },

          { von:'Nachricht vom Handballverein', wer:'Mann',
            text:'Hallo zusammen, hier spricht Mirko vom Handballverein. Kurz zur Mitgliederversammlung am Freitag: Sie findet statt, auch wenn bisher nur wenige zugesagt haben. Neu ist, dass wir den Beitrag anheben müssen, um drei Euro im Monat. Wer damit ein Problem hat, soll bitte kommen und es sagen. Hinterher meckern gilt nicht.',
            satz:'Der Mitgliedsbeitrag soll steigen.',
            loesung:true, stelle:'dass wir den Beitrag anheben müssen',
            erklaerung:'„anheben" heißt erhöhen. Die genaue Summe nennt er gleich danach.' },
          { von:'Nachricht vom Handballverein', wer:'Mann',
            text:'Hallo zusammen, hier spricht Mirko vom Handballverein. Kurz zur Mitgliederversammlung am Freitag: Sie findet statt, auch wenn bisher nur wenige zugesagt haben. Neu ist, dass wir den Beitrag anheben müssen, um drei Euro im Monat. Wer damit ein Problem hat, soll bitte kommen und es sagen. Hinterher meckern gilt nicht.',
            frage:'Was wünscht sich der Sprecher?',
            opt:['Dass Kritik in der Versammlung geäußert wird.','Dass niemand widerspricht.','Dass alle schriftlich abstimmen.'],
            loesung:0, stelle:'soll bitte kommen und es sagen',
            erklaerung:'„Hinterher meckern gilt nicht" macht die Absicht deutlich: Er will die Kritik im Saal hören.' },

          { von:'Meldung aus dem Rathaus', wer:'Frau',
            text:'Und noch eine Nachricht aus dem Rathaus: Das alte Postgebäude wird nun doch nicht abgerissen. Der Stadtrat hat gestern Abend beschlossen, dort Wohnungen einzurichten, ein Drittel davon zu günstigen Mieten. Die Arbeiten beginnen im kommenden Frühjahr, dauern werden sie voraussichtlich drei Jahre.',
            satz:'Das Postgebäude wird abgerissen.',
            loesung:false, stelle:'wird nun doch nicht abgerissen',
            erklaerung:'Das „nun doch nicht" zeigt: Es gab andere Pläne, sie wurden geändert.' },
          { von:'Meldung aus dem Rathaus', wer:'Frau',
            text:'Und noch eine Nachricht aus dem Rathaus: Das alte Postgebäude wird nun doch nicht abgerissen. Der Stadtrat hat gestern Abend beschlossen, dort Wohnungen einzurichten, ein Drittel davon zu günstigen Mieten. Die Arbeiten beginnen im kommenden Frühjahr, dauern werden sie voraussichtlich drei Jahre.',
            frage:'Was entsteht in dem Gebäude?',
            opt:['Büros.','Wohnungen.','Ein Museum.'],
            loesung:1, stelle:'dort Wohnungen einzurichten',
            erklaerung:'Der Zusatz mit den günstigen Mieten bestätigt es: Es geht um Wohnraum.' }
        ] },

        { nr:2, art:'vortrag', mal:1, aufgaben: [
          { ort:'Infoabend, Erfahrungsbericht', wer:'Mann',
            text:'Ja, hallo. Ich soll erzählen, wie das war mit dem Auswandern. Vorweg: Ich bin kein Fachmann, ich habe es einfach gemacht, vor sechs Jahren, mit zwei Koffern, nach Portugal. Und das meiste, was ich vorher gelesen hatte, war, ehrlich gesagt, nicht besonders hilfreich.',
            frage:'Wie stellt sich der Sprecher vor?',
            opt:['Als Fachmann für Auswanderung.','Als jemand, der eigene Erfahrungen weitergibt.','Als Mitarbeiter einer Beratungsstelle.'],
            loesung:1, stelle:'Ich bin kein Fachmann, ich habe es einfach gemacht',
            erklaerung:'Er grenzt sich ausdrücklich von Fachleuten und von Ratgebertexten ab.' },
          { ort:'Infoabend, die Sprache', wer:'Mann',
            text:'Der größte Fehler am Anfang war die Sprache. Ich dachte, mit Englisch komme ich schon durch. Im Café ja, beim Vermieter auch. Beim Finanzamt saß ich dann da wie ein Schuljunge und habe nichts verstanden. Ich habe erst nach einem Jahr angefangen, richtig zu lernen. Viel zu spät.',
            frage:'Was bereut er rückblickend?',
            opt:['Dass er zu spät mit der Landessprache begonnen hat.','Dass er kein Englisch konnte.','Dass er zu schnell umgezogen ist.'],
            loesung:0, stelle:'Ich habe erst nach einem Jahr angefangen, richtig zu lernen',
            erklaerung:'„Viel zu spät" ist seine eigene Bewertung. Englisch hat ihm im Alltag sogar geholfen.' },
          { ort:'Infoabend, die Ämter', wer:'Mann',
            text:'Was mich wirklich überrascht hat, war nicht das Heimweh. Das kam kaum. Es war die Bürokratie: Steuernummer, Krankenversicherung, Anmeldung. Jedes Amt wollte ein Papier, das man nur bei einem anderen Amt bekam. Das hat vier Monate gedauert, und ich hatte sogar Hilfe.',
            frage:'Was war für ihn am schwierigsten?',
            opt:['Das Heimweh.','Die Behördengänge.','Das Klima.'],
            loesung:1, stelle:'Es war die Bürokratie',
            erklaerung:'Das Heimweh wird ausdrücklich als das genannt, was gerade nicht das Problem war.' },
          { ort:'Infoabend, das Geld', wer:'Mann',
            text:'Beim Geld unterschätzen viele die ersten Monate. Meine Miete war zwar niedriger als in Köln, das stimmt. Aber Strom, Versicherung und vor allem die Flüge nach Hause haben das komplett aufgefressen. Rechnen Sie lieber mit einem halben Jahr ohne Ersparnis.',
            frage:'Was sagt er über die Lebenshaltungskosten?',
            opt:['Alles war deutlich billiger als in Deutschland.','Die günstige Miete wurde durch andere Kosten aufgezehrt.','Er konnte von Anfang an sparen.'],
            loesung:1, stelle:'haben das komplett aufgefressen',
            erklaerung:'„aufgefressen" ist umgangssprachlich für: der Vorteil war am Ende weg.' },
          { ort:'Infoabend, die Freundschaften', wer:'Mann',
            text:'Und der Punkt, über den kaum jemand spricht: die Freundschaften zu Hause. Am Anfang schreiben alle. Nach einem Jahr sind es noch drei, vier Leute. Das ist nicht böse gemeint von denen, das ist einfach so. Man muss dort neu anfangen, sonst wird es einsam.',
            frage:'Was beobachtet er bei den Kontakten in die alte Heimat?',
            opt:['Sie bleiben unverändert eng.','Sie werden mit der Zeit deutlich weniger.','Sie brechen sofort ganz ab.'],
            loesung:1, stelle:'Nach einem Jahr sind es noch drei, vier Leute',
            erklaerung:'Er beschreibt eine allmähliche Entwicklung und nimmt sie ausdrücklich niemandem übel.' },
          { ort:'Infoabend, sein Rat', wer:'Mann',
            text:'Würde ich es wieder machen? Sofort. Aber ich würde vorher hinfliegen, nicht zwei Wochen als Tourist, sondern einen Monat mit Arbeit im Gepäck. Urlaub und Alltag, das sind zwei völlig verschiedene Länder, auch wenn sie gleich heißen.',
            frage:'Was würde er beim nächsten Mal anders machen?',
            opt:['Er würde vorher länger vor Ort leben und arbeiten.','Er würde gar nicht mehr auswandern.','Er würde ohne Sprachkenntnisse gehen.'],
            loesung:0, stelle:'sondern einen Monat mit Arbeit im Gepäck',
            erklaerung:'Der letzte Satz erklärt, warum: Als Tourist sieht man ein anderes Land als im Alltag.' }
        ] },

        { nr:3, art:'gespraech', mal:1, aufgaben: [
          { ort:'Sportverein, Vorsitzende und Vater',
            zeilen: [
              { wer:'Frau', text:'Schön, dass Sie kurz Zeit haben. Es geht um die Trainingszeiten der Jüngsten.' },
              { wer:'Mann', text:'Das habe ich mir fast gedacht. Meine Frau sagt, dienstags um sechzehn Uhr ist unmöglich, da sitzen die Kinder noch in der Schule.' }
            ],
            satz:'Der Vater hält die geplante Trainingszeit für zu früh.',
            loesung:true, stelle:'dienstags um sechzehn Uhr ist unmöglich',
            erklaerung:'Er gibt zwar die Meinung seiner Frau wieder, macht sie sich aber ohne Einschränkung zu eigen.' },
          { ort:'Sportverein, Vorsitzende und Vater',
            zeilen: [
              { wer:'Frau', text:'Genau deshalb frage ich. Wir könnten auf halb sechs gehen, dann wird es im Winter allerdings dunkel.' },
              { wer:'Mann', text:'Auf dem Kunstrasen ist doch Licht.' },
              { wer:'Frau', text:'Schon, nur teilen wir den Platz mit den Erwachsenen. Ab halb sieben gehört er denen.' }
            ],
            satz:'Der Verein kann den Platz abends unbegrenzt nutzen.',
            loesung:false, stelle:'Ab halb sieben gehört er denen',
            erklaerung:'Das Licht ist nicht das Problem, sondern die Belegung. Ein typischer Wechsel des Arguments.' },
          { ort:'Sportverein, Vorsitzende und Vater',
            zeilen: [
              { wer:'Mann', text:'Und wenn die Kinder samstags trainieren?' },
              { wer:'Frau', text:'Das haben wir versucht. Da kommt die Hälfte nicht, weil die Familien am Wochenende wegfahren.' }
            ],
            satz:'Training am Samstag hat in der Vergangenheit gut funktioniert.',
            loesung:false, stelle:'Da kommt die Hälfte nicht',
            erklaerung:'„Das haben wir versucht" klingt neutral, ist hier aber die Ankündigung eines Misserfolgs.' },
          { ort:'Sportverein, Vorsitzende und Vater',
            zeilen: [
              { wer:'Frau', text:'Es gäbe noch eine Möglichkeit. Wenn wir eine zweite Übungsleitung hätten, könnten wir die Gruppe teilen.' },
              { wer:'Mann', text:'Und deshalb schauen Sie mich jetzt so an, ja?' },
              { wer:'Frau', text:'Ertappt.' }
            ],
            satz:'Die Vorsitzende möchte den Vater als Übungsleiter gewinnen.',
            loesung:true, stelle:'Ertappt',
            erklaerung:'„Ertappt" bestätigt, dass er ihre Absicht richtig erraten hat. Gesagt hat sie es nie direkt.' },
          { ort:'Sportverein, Vorsitzende und Vater',
            zeilen: [
              { wer:'Mann', text:'Ich habe keine Lizenz, das ist Ihnen hoffentlich klar.' },
              { wer:'Frau', text:'Den Kurs zahlt der Verein, ein Wochenende im Herbst. Und Sie stünden nicht allein da, Miriam macht das seit Jahren.' }
            ],
            satz:'Der Vater müsste die Ausbildung selbst bezahlen.',
            loesung:false, stelle:'Den Kurs zahlt der Verein',
            erklaerung:'Sie räumt beide Bedenken aus: die Kosten und die Sorge, allein dazustehen.' },
          { ort:'Sportverein, Vorsitzende und Vater',
            zeilen: [
              { wer:'Mann', text:'Versprechen kann ich nichts. Ich rede mit meiner Frau und melde mich bis Sonntag.' },
              { wer:'Frau', text:'Mehr will ich gar nicht. Und falls es nicht klappt, bleibt es bei dienstags um sechzehn Uhr.' }
            ],
            satz:'Der Vater sagt am Ende fest zu.',
            loesung:false, stelle:'Versprechen kann ich nichts',
            erklaerung:'Er sagt nur ein Gespräch und eine Rückmeldung zu — das ist keine Zusage in der Sache.' }
        ] },

        { nr:4, art:'diskussion', mal:2, aufgaben: [
          { ort:'Diskussion — Frau Halbach und Herr Krohn',
            zeilen: [
              { wer:'Mann', text:'Seit wir die Handys morgens einsammeln, ist der Pausenhof wieder laut. Und zwar im besten Sinne, die Kinder reden miteinander.' },
              { wer:'Frau', text:'Das glaube ich Ihnen sofort. Nur lernen sie in dieser Zeit eben nicht, mit dem Gerät vernünftig umzugehen.' }
            ],
            frage:'Wer berichtet von guten Erfahrungen mit dem Einsammeln?',
            opt:['Frau Halbach','Herr Krohn','beide'],
            loesung:1, stelle:'ist der Pausenhof wieder laut',
            erklaerung:'Sie zweifelt seinen Bericht nicht an, zieht aber einen anderen Schluss daraus.' },
          { ort:'Diskussion — Frau Halbach und Herr Krohn',
            zeilen: [
              { wer:'Frau', text:'Ein Verbot ist bequem, das ist das eigentliche Problem. Man muss dann nämlich nichts mehr erklären.' },
              { wer:'Mann', text:'Bequem? Fragen Sie mal meine Kolleginnen, die jeden Morgen die Kisten durch das Haus tragen.' }
            ],
            frage:'Wer hält ein Verbot für die bequeme Lösung?',
            opt:['Frau Halbach','Herr Krohn','beide'],
            loesung:0, stelle:'Ein Verbot ist bequem, das ist das eigentliche Problem',
            erklaerung:'Seine Rückfrage „Bequem?" ist bereits der Widerspruch.' },
          { ort:'Diskussion — Frau Halbach und Herr Krohn',
            zeilen: [
              { wer:'Mann', text:'Was mich wirklich umtreibt, sind die Aufnahmen. Ein Video aus der Umkleide, und ein Kind ist wochenlang fertig. Das hatten wir zweimal.' },
              { wer:'Frau', text:'Da bin ich ganz bei Ihnen. Solche Fälle wiegen schwer, das will ich überhaupt nicht kleinreden.' }
            ],
            frage:'Wer sieht in heimlichen Aufnahmen ein ernstes Problem?',
            opt:['Frau Halbach','Herr Krohn','beide'],
            loesung:2, stelle:'Da bin ich ganz bei Ihnen',
            erklaerung:'„nicht kleinreden" bestätigt die Zustimmung ein zweites Mal.' },
          { ort:'Diskussion — Frau Halbach und Herr Krohn',
            zeilen: [
              { wer:'Frau', text:'In der Oberstufe halte ich ein striktes Verbot allerdings für lebensfremd. Die jungen Leute organisieren damit ihren halben Alltag.' },
              { wer:'Mann', text:'Das sehe ich anders. Wer mit achtzehn nicht sechs Stunden ohne Handy auskommt, hat ein anderes Problem.' }
            ],
            frage:'Wer will nach Altersstufen unterscheiden?',
            opt:['Frau Halbach','Herr Krohn','beide'],
            loesung:0, stelle:'In der Oberstufe halte ich ein striktes Verbot allerdings für lebensfremd',
            erklaerung:'„Das sehe ich anders" ist seine höfliche, aber klare Ablehnung.' },
          { ort:'Diskussion — Frau Halbach und Herr Krohn',
            zeilen: [
              { wer:'Mann', text:'Unsere Noten sind übrigens besser geworden, seit das Verbot gilt.' },
              { wer:'Frau', text:'Vorsicht. Eine Schule ist keine Studie. Sie haben im selben Jahr auch die Förderstunden ausgebaut, wenn ich mich recht erinnere.' }
            ],
            frage:'Wer bezweifelt, dass das Verbot die Ursache der besseren Noten ist?',
            opt:['Frau Halbach','Herr Krohn','beide'],
            loesung:0, stelle:'Eine Schule ist keine Studie',
            erklaerung:'Sie nennt sogar eine zweite mögliche Ursache — die Förderstunden.' },
          { ort:'Diskussion — Frau Halbach und Herr Krohn',
            zeilen: [
              { wer:'Frau', text:'Was wirklich hilft, ist Medienunterricht, und zwar ab der fünften Klasse. Nicht als Projekttag, sondern jede Woche.' },
              { wer:'Mann', text:'Damit rennen Sie bei mir offene Türen ein. Nur sagen Sie mir bitte, wer das unterrichten soll.' }
            ],
            frage:'Wer hält regelmäßigen Medienunterricht für sinnvoll?',
            opt:['Frau Halbach','Herr Krohn','beide'],
            loesung:2, stelle:'Damit rennen Sie bei mir offene Türen ein',
            erklaerung:'Seine Frage nach dem Personal betrifft die Umsetzung, nicht die Idee.' },
          { ort:'Diskussion — Frau Halbach und Herr Krohn',
            zeilen: [
              { wer:'Mann', text:'Die Eltern stehen übrigens hinter uns. Über achtzig Prozent haben in der Umfrage für das Einsammeln gestimmt.' },
              { wer:'Frau', text:'Das wundert mich nicht. Viele Eltern sind froh, wenn die Schule eine Entscheidung übernimmt, die zu Hause schwerfällt.' }
            ],
            frage:'Wer erklärt die Zustimmung der Eltern mit deren eigener Unsicherheit?',
            opt:['Frau Halbach','Herr Krohn','beide'],
            loesung:0, stelle:'Viele Eltern sind froh, wenn die Schule eine Entscheidung übernimmt',
            erklaerung:'Er nennt nur die Zahl. Die Deutung liefert allein sie.' },
          { ort:'Diskussion — Frau Halbach und Herr Krohn',
            zeilen: [
              { wer:'Frau', text:'Am Ende brauchen wir Regeln, die die Schülerinnen und Schüler mittragen. Sonst wandert das Gerät eben in die Socke.' },
              { wer:'Mann', text:'Da haben Sie recht, das erleben wir täglich. Regeln ohne Einsicht halten ungefähr eine Woche.' }
            ],
            frage:'Wer meint, Regeln funktionieren nur mit Einsicht der Jugendlichen?',
            opt:['Frau Halbach','Herr Krohn','beide'],
            loesung:2, stelle:'Da haben Sie recht, das erleben wir täglich',
            erklaerung:'Er bestätigt aus der Praxis und formuliert die These sogar noch einmal zugespitzt.' }
        ] }
      ] },

    { id:'p2', titel:'Prüfungslauf 2', minuten:40,
      teile: [

        { nr:1, art:'ansage', mal:2, aufgaben: [
          { von:'Nachricht der Hausverwaltung', wer:'Mann',
            text:'Guten Tag, Frau Delgado, Hausverwaltung Winter. Es geht um die Sanierung der Fassade. Das Gerüst steht ab dem zweiten Mai, die Arbeiten dauern etwa acht Wochen. Ihre Miete wird für diese Zeit um zehn Prozent gemindert, das machen wir automatisch, Sie müssen nichts beantragen. Die Balkone dürfen Sie in dieser Zeit allerdings nicht nutzen.',
            satz:'Die Mieterinnen und Mieter müssen die Mietminderung selbst beantragen.',
            loesung:false, stelle:'das machen wir automatisch, Sie müssen nichts beantragen',
            erklaerung:'Der Satz sagt es zweimal: von allein und ohne Antrag.' },
          { von:'Nachricht der Hausverwaltung', wer:'Mann',
            text:'Guten Tag, Frau Delgado, Hausverwaltung Winter. Es geht um die Sanierung der Fassade. Das Gerüst steht ab dem zweiten Mai, die Arbeiten dauern etwa acht Wochen. Ihre Miete wird für diese Zeit um zehn Prozent gemindert, das machen wir automatisch, Sie müssen nichts beantragen. Die Balkone dürfen Sie in dieser Zeit allerdings nicht nutzen.',
            frage:'Was ist während der Arbeiten nicht erlaubt?',
            opt:['Die Wohnung zu betreten.','Den Balkon zu benutzen.','Die Fenster zu öffnen.'],
            loesung:1, stelle:'Die Balkone dürfen Sie in dieser Zeit allerdings nicht nutzen',
            erklaerung:'Das „allerdings" am Schluss kündigt die einzige Einschränkung an.' },

          { von:'Nachricht der Personalabteilung', wer:'Frau',
            text:'Hallo Herr Adeyemi, Personalabteilung, Frau Lorenz am Apparat. Ihr Antrag auf die Weiterbildung ist durch, herzlichen Glückwunsch. Zwei Dinge noch: Die Freistellung gilt nur für die Kurstage, nicht für die Prüfungswoche. Und der Betrieb übernimmt die Gebühr, die Bücher zahlen Sie selbst. Kommen Sie bitte diese Woche noch zum Unterschreiben vorbei.',
            satz:'Der Betrieb bezahlt auch die Bücher.',
            loesung:false, stelle:'die Bücher zahlen Sie selbst',
            erklaerung:'Die Gebühr und die Bücher werden ausdrücklich getrennt. Nur das eine zahlt der Betrieb.' },
          { von:'Nachricht der Personalabteilung', wer:'Frau',
            text:'Hallo Herr Adeyemi, Personalabteilung, Frau Lorenz am Apparat. Ihr Antrag auf die Weiterbildung ist durch, herzlichen Glückwunsch. Zwei Dinge noch: Die Freistellung gilt nur für die Kurstage, nicht für die Prüfungswoche. Und der Betrieb übernimmt die Gebühr, die Bücher zahlen Sie selbst. Kommen Sie bitte diese Woche noch zum Unterschreiben vorbei.',
            frage:'Wofür gilt die Freistellung nicht?',
            opt:['Für die Kurstage.','Für die Prüfungswoche.','Für den gesamten Lehrgang.'],
            loesung:1, stelle:'nicht für die Prüfungswoche',
            erklaerung:'„nur für … nicht für" grenzt die Freistellung genau ab.' },

          { von:'Durchsage im Sportbad', wer:'Mann',
            text:'Liebe Badegäste, ein kurzer Hinweis: Das Sportbecken wird heute ab siebzehn Uhr für das Vereinstraining gesperrt. Das Freizeitbecken und die Sauna bleiben wie gewohnt geöffnet, und zwar bis zweiundzwanzig Uhr. Wer heute wegen des Sportbeckens gekommen ist, bekommt an der Kasse einen Gutschein für den nächsten Besuch.',
            satz:'Das gesamte Bad schließt heute um siebzehn Uhr.',
            loesung:false, stelle:'Das Freizeitbecken und die Sauna bleiben wie gewohnt geöffnet',
            erklaerung:'Gesperrt wird nur ein Becken. Die übrigen Bereiche haben normal geöffnet.' },
          { von:'Durchsage im Sportbad', wer:'Mann',
            text:'Liebe Badegäste, ein kurzer Hinweis: Das Sportbecken wird heute ab siebzehn Uhr für das Vereinstraining gesperrt. Das Freizeitbecken und die Sauna bleiben wie gewohnt geöffnet, und zwar bis zweiundzwanzig Uhr. Wer heute wegen des Sportbeckens gekommen ist, bekommt an der Kasse einen Gutschein für den nächsten Besuch.',
            frage:'Was bekommen enttäuschte Gäste?',
            opt:['Ihr Geld zurück.','Einen Gutschein.','Eine Jahreskarte.'],
            loesung:1, stelle:'bekommt an der Kasse einen Gutschein',
            erklaerung:'Ein Gutschein gilt für den nächsten Besuch — Geld gibt es also nicht zurück.' },

          { von:'Nachricht aus der Fahrgemeinschaft', wer:'Frau',
            text:'Hallo Tobias, ich bin es, Ayla. Wegen der Fahrgemeinschaft nächste Woche: Ich kann Montag und Mittwoch fahren, Freitag leider nicht, da habe ich einen Termin in der Klinik. Wenn du Freitag nicht selbst fahren willst, es gibt jetzt einen Bus um sieben Uhr zwanzig, der ist ziemlich neu. Sag mir kurz Bescheid.',
            satz:'Ayla kann an allen drei Tagen fahren.',
            loesung:false, stelle:'Freitag leider nicht',
            erklaerung:'Zwei Tage sagt sie zu, den dritten ausdrücklich ab, mit Begründung.' },
          { von:'Nachricht aus der Fahrgemeinschaft', wer:'Frau',
            text:'Hallo Tobias, ich bin es, Ayla. Wegen der Fahrgemeinschaft nächste Woche: Ich kann Montag und Mittwoch fahren, Freitag leider nicht, da habe ich einen Termin in der Klinik. Wenn du Freitag nicht selbst fahren willst, es gibt jetzt einen Bus um sieben Uhr zwanzig, der ist ziemlich neu. Sag mir kurz Bescheid.',
            frage:'Was schlägt sie für den Freitag vor?',
            opt:['Ein Taxi zu nehmen.','Mit dem Bus zu fahren.','Zu Hause zu bleiben.'],
            loesung:1, stelle:'es gibt jetzt einen Bus um sieben Uhr zwanzig',
            erklaerung:'Sie bietet eine Alternative an, ohne sie ihm vorzuschreiben.' },

          { von:'Meldung über Schulkantinen', wer:'Mann',
            text:'Und zum Schluss eine Meldung, die viele Eltern interessieren dürfte: Schulkantinen, die auf frische Zutaten umgestellt haben, verzeichnen einer Untersuchung zufolge fast ein Drittel weniger Essensreste. Der Preis pro Portion stieg dabei nur um wenige Cent. Entscheidend war laut den Forschenden übrigens nicht das Rezept, sondern dass die Kinder mitentscheiden durften.',
            satz:'Das frische Essen wurde deutlich teurer.',
            loesung:false, stelle:'stieg dabei nur um wenige Cent',
            erklaerung:'„nur um wenige Cent" ist das Gegenteil von deutlich teurer.' },
          { von:'Meldung über Schulkantinen', wer:'Mann',
            text:'Und zum Schluss eine Meldung, die viele Eltern interessieren dürfte: Schulkantinen, die auf frische Zutaten umgestellt haben, verzeichnen einer Untersuchung zufolge fast ein Drittel weniger Essensreste. Der Preis pro Portion stieg dabei nur um wenige Cent. Entscheidend war laut den Forschenden übrigens nicht das Rezept, sondern dass die Kinder mitentscheiden durften.',
            frage:'Was war laut der Untersuchung entscheidend?',
            opt:['Die Rezepte.','Die Beteiligung der Kinder.','Die Größe der Küche.'],
            loesung:1, stelle:'sondern dass die Kinder mitentscheiden durften',
            erklaerung:'Das „nicht …, sondern" nennt zuerst die erwartete und dann die tatsächliche Ursache.' }
        ] },

        { nr:2, art:'vortrag', mal:1, aufgaben: [
          { ort:'Bürgerversammlung, Stadtplanerin', wer:'Frau',
            text:'Guten Abend. Mein Name ist Kerstin Mai, ich bin Stadtplanerin und, ja, ich bin heute vor allem hier, um mir Ihre Einwände anzuhören. Zuerst erkläre ich aber kurz, was überhaupt geplant ist. Vieles, was gerade in der Zeitung steht, stimmt so nämlich nicht.',
            frage:'Was ist ihr Ziel an diesem Abend?',
            opt:['Den fertigen Plan durchzusetzen.','Zu informieren und Einwände zu hören.','Neue Geschäfte anzuwerben.'],
            loesung:1, stelle:'um mir Ihre Einwände anzuhören',
            erklaerung:'Sie nennt beides: erst erklären, dann zuhören. Von Durchsetzen ist keine Rede.' },
          { ort:'Bürgerversammlung, der Vorplatz', wer:'Frau',
            text:'Der Kern ist der Vorplatz. Der ist heute eine Verkehrsfläche mit ein bisschen Restraum für Menschen. Künftig soll es umgekehrt sein. Die Busse halten weiterhin dort, aber der Durchgangsverkehr wird über die Ringstraße geführt.',
            frage:'Was ändert sich für die Busse?',
            opt:['Sie halten nicht mehr am Vorplatz.','Sie halten weiterhin dort.','Sie fahren nur noch abends.'],
            loesung:1, stelle:'Die Busse halten weiterhin dort',
            erklaerung:'Verlegt wird nur der Durchgangsverkehr, also die Autos ohne Ziel in der Innenstadt.' },
          { ort:'Bürgerversammlung, die Parkplätze', wer:'Frau',
            text:'Der häufigste Einwand betrifft die Parkplätze. Ja, es fallen achtzig weg. Was selten dazugesagt wird: Im neuen Parkhaus entstehen hundertzwanzig, also mehr als vorher. Nur eben nicht direkt vor der Ladentür, und das ist für viele der eigentliche Punkt.',
            frage:'Wie sieht es nach dem Umbau mit den Parkplätzen aus?',
            opt:['Es gibt weniger als vorher.','Es gibt mehr, aber sie liegen weiter entfernt.','Es gibt genau gleich viele.'],
            loesung:1, stelle:'Im neuen Parkhaus entstehen hundertzwanzig, also mehr als vorher',
            erklaerung:'Achtzig fallen weg, hundertzwanzig kommen dazu. Der Streit geht in Wahrheit um die Entfernung.' },
          { ort:'Bürgerversammlung, die Kosten', wer:'Frau',
            text:'Zu den Kosten: Wir rechnen mit vierzehn Millionen Euro, das ist viel Geld, da widerspreche ich nicht. Rund die Hälfte kommt allerdings vom Land, und dieses Geld gibt es nur für dieses Projekt. In Schulen umleiten lässt es sich nicht, so gern manche das hätten.',
            frage:'Was sagt sie über die Mittel des Landes?',
            opt:['Sie könnten auch für Schulen verwendet werden.','Sie sind an dieses Projekt gebunden.','Sie sind noch gar nicht bewilligt.'],
            loesung:1, stelle:'dieses Geld gibt es nur für dieses Projekt',
            erklaerung:'Sie greift damit einen bekannten Einwand auf und entkräftet ihn.' },
          { ort:'Bürgerversammlung, die Bäume', wer:'Frau',
            text:'Was mir persönlich am wichtigsten ist, sind die Bäume. Zwanzig alte Platanen bleiben stehen, dafür haben wir den Plan zweimal geändert. Das hat uns ein halbes Jahr gekostet, und ich würde es wieder so machen.',
            frage:'Warum wurde der Plan zweimal geändert?',
            opt:['Wegen der hohen Kosten.','Um alte Bäume zu erhalten.','Wegen der Busse.'],
            loesung:1, stelle:'Zwanzig alte Platanen bleiben stehen, dafür haben wir den Plan zweimal geändert',
            erklaerung:'„dafür" nennt hier den Zweck: Die Änderung diente dem Erhalt der Bäume.' },
          { ort:'Bürgerversammlung, die Bauzeit', wer:'Frau',
            text:'Und jetzt der Satz, den Sie nicht gern hören werden: Die Bauzeit beträgt drei Jahre, und in dieser Zeit wird es unbequem. Wer Ihnen etwas anderes erzählt, war noch nie auf einer Baustelle. Wir versuchen, die Zufahrt für die Geschäfte offen zu halten, versprechen kann ich es aber nicht.',
            frage:'Was kündigt sie für die Bauzeit an?',
            opt:['Es wird kaum Einschränkungen geben.','Es wird drei Jahre lang unbequem.','Die Geschäfte müssen schließen.'],
            loesung:1, stelle:'in dieser Zeit wird es unbequem',
            erklaerung:'Sie verspricht ausdrücklich nichts, sondern kündigt Schwierigkeiten offen an.' }
        ] },

        { nr:3, art:'gespraech', mal:1, aufgaben: [
          { ort:'Betriebsärztin und Mitarbeiter',
            zeilen: [
              { wer:'Frau', text:'Sie sind wegen der Rückenschmerzen hier, richtig? Erzählen Sie mal.' },
              { wer:'Mann', text:'Seit dem Umzug ins neue Büro, ja. Ich sitze jetzt am Fenster, sehr schön, aber der Bildschirm steht seitlich. Ich drehe mich den ganzen Tag.' }
            ],
            satz:'Die Beschwerden hängen mit dem neuen Arbeitsplatz zusammen.',
            loesung:true, stelle:'Ich sitze jetzt am Fenster, sehr schön, aber der Bildschirm steht seitlich',
            erklaerung:'„Seit dem Umzug" stellt den zeitlichen Zusammenhang her, der Rest erklärt die Ursache.' },
          { ort:'Betriebsärztin und Mitarbeiter',
            zeilen: [
              { wer:'Frau', text:'Das ist der Klassiker. Bevor wir über Sport reden, stellen wir den Tisch um. Das bringt oft mehr als jedes Training.' },
              { wer:'Mann', text:'Ich hatte damit gerechnet, dass Sie mich jetzt ins Fitnessstudio schicken.' }
            ],
            satz:'Die Ärztin empfiehlt zuerst, den Arbeitsplatz zu verändern.',
            loesung:true, stelle:'Bevor wir über Sport reden, stellen wir den Tisch um',
            erklaerung:'Das „Bevor" legt die Reihenfolge fest: erst der Schreibtisch, dann der Sport.' },
          { ort:'Betriebsärztin und Mitarbeiter',
            zeilen: [
              { wer:'Frau', text:'Das kommt danach. Und übrigens: Der Betrieb zahlt nicht das Studio, sondern einen Zuschuss von dreißig Euro im Monat, egal wohin Sie gehen.' },
              { wer:'Mann', text:'Ach so. Ein Kollege hat mir erzählt, das sei komplett kostenlos.' }
            ],
            satz:'Der Betrieb übernimmt die vollen Kosten für ein Fitnessstudio.',
            loesung:false, stelle:'Der Betrieb zahlt nicht das Studio, sondern einen Zuschuss',
            erklaerung:'Der Kollege hatte es falsch verstanden. Ein Zuschuss deckt nur einen Teil.' },
          { ort:'Betriebsärztin und Mitarbeiter',
            zeilen: [
              { wer:'Frau', text:'Das erzählen sich viele. Sie können den Zuschuss auch für den Schwimmverein nehmen, oder für einen Kurs in der Volkshochschule.' },
              { wer:'Mann', text:'Schwimmen wäre mir sogar lieber, ehrlich gesagt.' }
            ],
            satz:'Den Zuschuss gibt es nur für Fitnessstudios.',
            loesung:false, stelle:'Sie können den Zuschuss auch für den Schwimmverein nehmen',
            erklaerung:'Sie nennt gleich mehrere Möglichkeiten — die Wahl liegt bei ihm.' },
          { ort:'Betriebsärztin und Mitarbeiter',
            zeilen: [
              { wer:'Frau', text:'Dann machen wir das so. Wichtig ist die Regelmäßigkeit, nicht die Dauer. Zweimal die Woche vierzig Minuten schlägt einmal im Monat drei Stunden.' },
              { wer:'Mann', text:'Das klingt machbar.' }
            ],
            satz:'Für die Ärztin zählt vor allem die Länge der einzelnen Einheit.',
            loesung:false, stelle:'Wichtig ist die Regelmäßigkeit, nicht die Dauer',
            erklaerung:'Ihr Beispiel rechnet es vor: oft und kurz schlägt selten und lang.' },
          { ort:'Betriebsärztin und Mitarbeiter',
            zeilen: [
              { wer:'Mann', text:'Und wenn es nicht besser wird?' },
              { wer:'Frau', text:'Dann sehen wir uns in sechs Wochen wieder, und dann überweise ich Sie zur Orthopädie. Ich wette allerdings, dass wir das hier lösen.' }
            ],
            satz:'Die Ärztin überweist ihn sofort zum Facharzt.',
            loesung:false, stelle:'Dann sehen wir uns in sechs Wochen wieder',
            erklaerung:'Die Überweisung ist der zweite Schritt, und nur für den Fall, dass es nicht besser wird.' }
        ] },

        { nr:4, art:'diskussion', mal:2, aufgaben: [
          { ort:'Stadtgespräch — Frau Ortmann und Herr Brune',
            zeilen: [
              { wer:'Frau', text:'Wir haben in dieser Stadt vierzigtausend Menschen auf der Warteliste für eine Wohnung. Wer da Hochhäuser grundsätzlich ablehnt, muss mir sagen, wohin die Leute sonst sollen.' },
              { wer:'Mann', text:'In die leerstehenden Bürogebäude zum Beispiel. Davon haben wir genug, das rechnet nur niemand ehrlich nach.' }
            ],
            frage:'Wer schlägt vor, leere Bürogebäude umzubauen?',
            opt:['Frau Ortmann','Herr Brune','beide'],
            loesung:1, stelle:'In die leerstehenden Bürogebäude zum Beispiel',
            erklaerung:'Sie stellt die Frage, er gibt eine andere Antwort als sie erwartet.' },
          { ort:'Stadtgespräch — Frau Ortmann und Herr Brune',
            zeilen: [
              { wer:'Mann', text:'Ein Hochhaus verschattet den halben Stadtteil, und der Wind zwischen den Türmen ist auch kein Vergnügen.' },
              { wer:'Frau', text:'Das stimmt bei schlechter Planung. Bei guter nicht, dafür gibt es inzwischen ziemlich genaue Modelle.' }
            ],
            frage:'Wer hält diese Nachteile für vermeidbar?',
            opt:['Frau Ortmann','Herr Brune','beide'],
            loesung:0, stelle:'Das stimmt bei schlechter Planung',
            erklaerung:'Sie bestreitet die Nachteile nicht grundsätzlich, macht sie aber von der Planung abhängig.' },
          { ort:'Stadtgespräch — Frau Ortmann und Herr Brune',
            zeilen: [
              { wer:'Frau', text:'Was wir beide nicht wollen, ist, dass die Stadt immer weiter ins Grüne wächst.' },
              { wer:'Mann', text:'Da sind wir uns tatsächlich einig. Jeder Hektar Acker, der verschwindet, kommt nicht zurück.' }
            ],
            frage:'Wer ist gegen weiteres Bauen im Umland?',
            opt:['Frau Ortmann','Herr Brune','beide'],
            loesung:2, stelle:'Da sind wir uns tatsächlich einig',
            erklaerung:'„tatsächlich einig" ist trotz des überraschten Tons eine klare Zustimmung.' },
          { ort:'Stadtgespräch — Frau Ortmann und Herr Brune',
            zeilen: [
              { wer:'Mann', text:'Und die Mieten? In den neuen Türmen zahlt man zwanzig Euro pro Quadratmeter. Das hilft doch keinem, der eine Wohnung sucht.' },
              { wer:'Frau', text:'Der Einwand ist berechtigt. Deshalb bin ich dafür, die Hälfte der Wohnungen fest zu binden, mit einer Obergrenze für die Miete.' }
            ],
            frage:'Wer fordert eine feste Mietbindung?',
            opt:['Frau Ortmann','Herr Brune','beide'],
            loesung:0, stelle:'die Hälfte der Wohnungen fest zu binden',
            erklaerung:'Er nennt das Problem, die Forderung stellt aber nur sie.' },
          { ort:'Stadtgespräch — Frau Ortmann und Herr Brune',
            zeilen: [
              { wer:'Frau', text:'In Rotterdam funktioniert genau das seit Jahren, und die Innenstadt ist dadurch lebendiger geworden.' },
              { wer:'Mann', text:'Rotterdam, immer Rotterdam. Die Stadt wurde im Krieg zerstört, die hatten gar keine gewachsene Altstadt zu verlieren.' }
            ],
            frage:'Wer hält den Vergleich mit anderen Städten für unpassend?',
            opt:['Frau Ortmann','Herr Brune','beide'],
            loesung:1, stelle:'die hatten gar keine gewachsene Altstadt zu verlieren',
            erklaerung:'Die Wiederholung des Städtenamens zeigt schon seinen Überdruss an diesem Beispiel.' },
          { ort:'Stadtgespräch — Frau Ortmann und Herr Brune',
            zeilen: [
              { wer:'Mann', text:'Was mich am meisten stört, ist, dass die Anwohner erst gefragt werden, wenn der Kran schon steht.' },
              { wer:'Frau', text:'Da haben Sie leider völlig recht. Wir Planerinnen und Planer machen das seit Jahrzehnten falsch herum.' }
            ],
            frage:'Wer kritisiert die späte Beteiligung der Anwohner?',
            opt:['Frau Ortmann','Herr Brune','beide'],
            loesung:2, stelle:'Da haben Sie leider völlig recht',
            erklaerung:'Sie schließt sich sogar selbst in die Kritik ein — deutlicher wird Zustimmung selten.' },
          { ort:'Stadtgespräch — Frau Ortmann und Herr Brune',
            zeilen: [
              { wer:'Frau', text:'Ein Punkt noch, der gern vergessen wird: Hohe Häuser sind pro Wohnung teurer zu bauen, nicht billiger. Aufzüge, Brandschutz, Statik.' },
              { wer:'Mann', text:'Sehen Sie, das sagen wir seit Jahren. Nur glaubt uns das bisher niemand.' }
            ],
            frage:'Wer hält hohe Häuser pro Wohnung für teurer?',
            opt:['Frau Ortmann','Herr Brune','beide'],
            loesung:2, stelle:'das sagen wir seit Jahren',
            erklaerung:'Sie nennt das Argument, er bestätigt, dass seine Initiative es seit Langem vertritt.' },
          { ort:'Stadtgespräch — Frau Ortmann und Herr Brune',
            zeilen: [
              { wer:'Mann', text:'Für mich bleibt es dabei: erst die vorhandenen Gebäude, dann reden wir über Türme.' },
              { wer:'Frau', text:'Und für mich gilt: Wir brauchen beides, und zwar gleichzeitig. Nacheinander dauert das dreißig Jahre.' }
            ],
            frage:'Wer will beide Wege gleichzeitig gehen?',
            opt:['Frau Ortmann','Herr Brune','beide'],
            loesung:0, stelle:'Wir brauchen beides, und zwar gleichzeitig',
            erklaerung:'Er will eine Reihenfolge, sie will Parallelität. Genau darin liegt der Unterschied.' }
        ] }
      ] }
  ]

};
