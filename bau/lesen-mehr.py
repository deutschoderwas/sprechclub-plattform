# -*- coding: utf-8 -*-
"""Hängt drei weitere Lese-/Schreibthemen an lesen-schreiben-neu.js an: A2, B2, C1."""
import shutil

P = 'lesen-schreiben-neu.js'
shutil.copy(P, '/tmp/bak-lesen.js')
s = open(P, encoding='utf-8').read()

NEU = r"""    },

    /* ---------------------------------------------------------------- A2 */
    {
      id: 'lesen-zettel-a2',
      title: 'Lesen: Zettel, Schilder, kurze Nachrichten',
      level: 'A2',
      emoji: '🗒️',
      words: [
        { de: 'geschlossen', info: 'nicht offen, man kann nicht hinein', emoji: '🔒' },
        { de: 'der Notdienst', info: 'Hilfe außerhalb der normalen Zeiten', emoji: '🚑' },
        { de: 'abholen', info: 'irgendwo hingehen und etwas mitnehmen', emoji: '📦' },
        { de: 'die Öffnungszeiten', info: 'wann ein Geschäft offen hat', emoji: '🕘' }
      ],
      exercises: [
        { type: 'lesen',
          text: 'Liebe Kundinnen und Kunden,\n\nvom 12. bis 19. August ist unsere Apotheke wegen Urlaub geschlossen.\n\nDen Notdienst übernimmt in dieser Zeit die Rosen-Apotheke in der Bahnhofstraße 4.\n\nAb dem 20. August sind wir wieder wie gewohnt für Sie da.',
          q: 'Wo bekommt man vom 12. bis 19. August Medikamente?',
          options: ['In der Rosen-Apotheke in der Bahnhofstraße.', 'Gar nicht.', 'In derselben Apotheke, nur nachmittags.', 'Im Krankenhaus.'],
          answer: 0,
          explain: 'Der Zettel nennt eine andere Apotheke, die in dieser Zeit den Notdienst übernimmt.' },
        { type: 'lesen',
          text: 'Liebe Kundinnen und Kunden,\n\nvom 12. bis 19. August ist unsere Apotheke wegen Urlaub geschlossen.\n\nDen Notdienst übernimmt in dieser Zeit die Rosen-Apotheke in der Bahnhofstraße 4.\n\nAb dem 20. August sind wir wieder wie gewohnt für Sie da.',
          q: 'Ab wann ist die Apotheke wieder offen?',
          options: ['Ab dem 20. August.', 'Ab dem 19. August.', 'Ab dem 12. August.', 'Das steht nicht da.'],
          answer: 0,
          explain: 'Die Apotheke ist bis zum 19. geschlossen, ab dem 20. wieder offen.' },
        { type: 'lesen',
          text: 'Hi Tom,\n\nich bin schon los, der Bus war früher da. Dein Schlüssel liegt unter der Fußmatte.\n\nDie Milch ist alle — bringst du bitte welche mit? Und das Paket bei Frau Kremer abholen nicht vergessen, sie ist nur bis 18 Uhr da.\n\nBis später!\nMarie',
          q: 'Was soll Tom bei Frau Kremer machen?',
          options: ['Ein Paket abholen.', 'Den Schlüssel abgeben.', 'Milch kaufen.', 'Auf Marie warten.'],
          answer: 0,
          explain: 'Das Paket liegt bei der Nachbarin und muss vor 18 Uhr abgeholt werden.' },
        { type: 'lesen',
          text: 'Hi Tom,\n\nich bin schon los, der Bus war früher da. Dein Schlüssel liegt unter der Fußmatte.\n\nDie Milch ist alle — bringst du bitte welche mit? Und das Paket bei Frau Kremer abholen nicht vergessen, sie ist nur bis 18 Uhr da.\n\nBis später!\nMarie',
          q: 'Warum ist Marie schon gegangen?',
          options: ['Der Bus kam früher als gedacht.', 'Sie hatte einen Streit.', 'Sie musste zu Frau Kremer.', 'Sie hat verschlafen.'],
          answer: 0,
          explain: 'Gleich im ersten Satz: der Bus war früher da.' },
        { type: 'schreiben',
          auftrag: 'Schreib Marie eine kurze Antwort: Du hast das Paket abgeholt, aber die Milch vergessen. Zwei bis drei Sätze.',
          muster: 'Hi Marie, das Paket habe ich bei Frau Kremer abgeholt, es steht im Flur. Die Milch habe ich leider vergessen — ich gehe morgen früh gleich einkaufen. Bis heute Abend!',
          tipp: 'Bei einer kurzen Nachricht reichen einfache Sätze. Wichtig ist, was erledigt ist und was nicht.' },
        { type: 'schreiben',
          auftrag: 'Schreib einen Zettel für deine Nachbarin: Du bist eine Woche weg und bittest sie, deine Post zu holen.',
          muster: 'Liebe Frau Kremer, ich bin vom 3. bis 10. Mai nicht da. Könnten Sie in dieser Zeit bitte meine Post aus dem Briefkasten holen? Den Schlüssel gebe ich Ihnen vorher. Vielen Dank und liebe Grüße, Ihre Nachbarin aus dem zweiten Stock.',
          tipp: 'Bei einer Bitte an Nachbarn: Anrede, Zeitraum, Bitte, Dank.' },
        { type: 'fehler', satz: 'Die Apotheke ist wegen Urlaub geschlossen bis 19. August.', falsch: 'geschlossen',
          richtig: 'Die Apotheke ist wegen Urlaub bis zum 19. August geschlossen.',
          explain: 'Das Partizip steht im Hauptsatz am Ende. Die Zeitangabe kommt davor.' },
        { type: 'fehler', satz: 'Kannst du bitte die Milch mitbringen mir?', falsch: 'mir',
          richtig: 'Kannst du mir bitte die Milch mitbringen?',
          explain: 'Das Pronomen mir steht früh im Satz, direkt nach dem Verb — nicht am Ende.' },
        { type: 'gap', text: 'Die Apotheke hat heute ___ — sie öffnet erst morgen wieder.',
          answer: 'geschlossen', alts: ['zu'], hint: 'Gegenteil von offen',
          explain: 'geschlossen ist das Wort, das auf Schildern und Zetteln steht.' },
        { type: 'gap', text: 'Ich muss noch ein Paket bei der Nachbarin ___.',
          answer: 'abholen', alts: ['holen'], hint: 'hingehen und mitnehmen',
          explain: 'abholen: irgendwo hingehen und etwas mitnehmen.' },
        { type: 'choice', q: 'Wo findet man normalerweise Öffnungszeiten?',
          options: ['An der Tür eines Geschäfts.', 'Auf der Rechnung.', 'Im Kühlschrank.', 'Auf dem Fahrschein.'],
          answer: 0, explain: 'Öffnungszeiten stehen an der Tür oder im Schaufenster.' },
        { type: 'choice', q: 'Ein Notdienst ist da …',
          options: ['außerhalb der normalen Öffnungszeiten.', 'nur montags.', 'nur für Kinder.', 'nur im Sommer.'],
          answer: 0, explain: 'Der Notdienst hilft dann, wenn normalerweise geschlossen ist — nachts, sonntags, im Urlaub.' }
      ]
    },

    /* ---------------------------------------------------------------- B2 */
    {
      id: 'lesen-meinung-b2',
      title: 'Lesen: Meinungen und Standpunkte',
      level: 'B2',
      emoji: '📰',
      words: [
        { de: 'der Standpunkt', info: 'die eigene Position in einer Frage', emoji: '🧭' },
        { de: 'einräumen', info: 'zugeben, dass die andere Seite teilweise recht hat', emoji: '🤝' },
        { de: 'die Voraussetzung', info: 'was da sein muss, damit etwas funktioniert', emoji: '🧱' },
        { de: 'überzeugen', info: 'jemanden dazu bringen, etwas zu glauben', emoji: '💡' }
      ],
      exercises: [
        { type: 'lesen',
          text: 'Seit drei Jahren arbeite ich zwei Tage pro Woche zu Hause, und ich möchte es nicht mehr missen. Der Weg ins Büro kostete mich täglich anderthalb Stunden — Zeit, die ich jetzt für Arbeit, Sport und meine Tochter habe.\n\nNatürlich hat die Sache einen Haken. Wer zu Hause arbeitet, verpasst die kurzen Gespräche auf dem Flur, und genau dort entstehen oft die besten Ideen. Auch für neue Kolleginnen ist es schwer: Man lernt ein Team nicht über Videoschalten kennen.\n\nDeshalb halte ich die Mischung für richtig. Zwei Tage zu Hause, drei im Büro — so bleibt beides erhalten: die Ruhe für konzentrierte Arbeit und der Kontakt, der ein Team zusammenhält.',
          q: 'Welchen Standpunkt vertritt die Autorin?',
          options: ['Eine Mischung aus Büro und Homeoffice ist am besten.', 'Homeoffice sollte abgeschafft werden.', 'Alle sollten nur noch zu Hause arbeiten.', 'Sie hat sich noch nicht entschieden.'],
          answer: 0,
          explain: 'Der letzte Absatz nennt die Position deutlich: zwei Tage zu Hause, drei im Büro.' },
        { type: 'lesen',
          text: 'Seit drei Jahren arbeite ich zwei Tage pro Woche zu Hause, und ich möchte es nicht mehr missen. Der Weg ins Büro kostete mich täglich anderthalb Stunden — Zeit, die ich jetzt für Arbeit, Sport und meine Tochter habe.\n\nNatürlich hat die Sache einen Haken. Wer zu Hause arbeitet, verpasst die kurzen Gespräche auf dem Flur, und genau dort entstehen oft die besten Ideen. Auch für neue Kolleginnen ist es schwer: Man lernt ein Team nicht über Videoschalten kennen.\n\nDeshalb halte ich die Mischung für richtig. Zwei Tage zu Hause, drei im Büro — so bleibt beides erhalten: die Ruhe für konzentrierte Arbeit und der Kontakt, der ein Team zusammenhält.',
          q: 'Was räumt die Autorin im zweiten Absatz ein?',
          options: ['Dass im Homeoffice der spontane Austausch fehlt.', 'Dass sie zu Hause weniger arbeitet.', 'Dass die Technik oft nicht funktioniert.', 'Dass ihre Tochter sie stört.'],
          answer: 0,
          explain: 'Einräumen heißt: der Gegenseite teilweise recht geben. Hier sind es die Flurgespräche und die neuen Kolleginnen.' },
        { type: 'lesen',
          text: 'Seit drei Jahren arbeite ich zwei Tage pro Woche zu Hause, und ich möchte es nicht mehr missen. Der Weg ins Büro kostete mich täglich anderthalb Stunden — Zeit, die ich jetzt für Arbeit, Sport und meine Tochter habe.\n\nNatürlich hat die Sache einen Haken. Wer zu Hause arbeitet, verpasst die kurzen Gespräche auf dem Flur, und genau dort entstehen oft die besten Ideen. Auch für neue Kolleginnen ist es schwer: Man lernt ein Team nicht über Videoschalten kennen.\n\nDeshalb halte ich die Mischung für richtig. Zwei Tage zu Hause, drei im Büro — so bleibt beides erhalten: die Ruhe für konzentrierte Arbeit und der Kontakt, der ein Team zusammenhält.',
          q: 'Wie ist der Text aufgebaut?',
          options: ['Vorteil, Einwand, Schlussfolgerung.', 'Nur Vorteile.', 'Nur Nachteile.', 'Eine reine Beschreibung ohne Meinung.'],
          answer: 0,
          explain: 'Genau dieser Dreischritt macht einen guten Meinungstext aus: erst der eigene Punkt, dann das Zugeständnis, dann das Fazit.' },
        { type: 'schreiben',
          auftrag: 'Schreib deinen eigenen Standpunkt zum Thema Homeoffice in vier bis fünf Sätzen. Nenne einen Vorteil, räume einen Nachteil ein und zieh ein Fazit.',
          muster: 'Zu Hause arbeite ich deutlich konzentrierter, weil mich niemand alle zehn Minuten unterbricht. Allerdings fehlt mir der schnelle Austausch: Was im Büro eine halbe Minute dauert, wird zu Hause zu drei Nachrichten. Auch das Gefühl, zum Team zu gehören, wächst nicht am Bildschirm. Trotzdem möchte ich nicht zurück zu fünf Bürotagen. Ein fester Tag im Büro pro Woche würde für mich reichen.',
          tipp: 'Der Dreischritt Vorteil, Einwand, Fazit wirkt in jeder Prüfung — und in jeder E-Mail.' },
        { type: 'schreiben',
          auftrag: 'Deine Chefin will Homeoffice ganz abschaffen. Schreib ihr eine höfliche E-Mail in vier bis fünf Sätzen, in der du für eine Mischung argumentierst.',
          muster: 'Sehr geehrte Frau Roth, ich habe von der geplanten Änderung gehört und möchte Ihnen kurz meine Sicht schildern. An meinen beiden Homeoffice-Tagen erledige ich die Aufgaben, die viel Konzentration verlangen, spürbar schneller. Gleichzeitig verstehe ich, dass der Austausch im Team darunter leiden kann. Wäre deshalb ein Modell mit drei festen Bürotagen denkbar? Über ein kurzes Gespräch würde ich mich freuen.',
          tipp: 'Wer die Gegenseite ernst nimmt, überzeugt eher. Deshalb gehört ein Zugeständnis in jede gute Argumentation.' },
        { type: 'fehler', satz: 'Trotzdem ich müde war, bin ich ins Büro gefahren.', falsch: 'Trotzdem',
          richtig: 'Obwohl ich müde war, bin ich ins Büro gefahren.',
          explain: 'Vor einem Nebensatz steht obwohl. trotzdem verbindet zwei Hauptsätze: Ich war müde, trotzdem bin ich gefahren.' },
        { type: 'fehler', satz: 'Ich halte die Mischung für richtig, weil sie beides erhalten bleibt.', falsch: 'sie',
          richtig: 'Ich halte die Mischung für richtig, weil so beides erhalten bleibt.',
          explain: 'Das Subjekt des Nebensatzes ist beides, nicht sie. Mit sie hätte der Satz zwei Subjekte.' },
        { type: 'gap', text: 'Sie ___ ein, dass im Homeoffice der spontane Austausch fehlt.',
          answer: 'räumt', alts: ['raeumt'], hint: 'einräumen = zugeben',
          explain: 'einräumen ist trennbar: Sie räumt ein, dass …' },
        { type: 'gap', text: 'Eine gute ___ für Homeoffice ist eine ruhige Ecke in der Wohnung.',
          answer: 'Voraussetzung', alts: ['voraussetzung', 'Bedingung'], hint: 'was da sein muss, damit es klappt',
          explain: 'Die Voraussetzung ist das, was vorher gegeben sein muss.' },
        { type: 'choice', q: 'Was heißt „einen Einwand einräumen“?',
          options: ['Zugeben, dass die Gegenseite teilweise recht hat.', 'Den Einwand ignorieren.', 'Der Gegenseite ganz zustimmen.', 'Einen neuen Vorschlag machen.'],
          answer: 0, explain: 'Man gibt einen Punkt zu, ohne die eigene Position aufzugeben — das macht die eigene Sicht glaubwürdiger.' },
        { type: 'choice', q: 'Welche Wendung leitet in einem Meinungstext das Fazit ein?',
          options: ['Deshalb halte ich … für richtig.', 'Zum Beispiel …', 'Auf der einen Seite …', 'Es wird berichtet, dass …'],
          answer: 0, explain: 'Deshalb, also, aus diesen Gründen — so beginnt der Schluss einer Argumentation.' }
      ]
    },

    /* ---------------------------------------------------------------- C1 */
    {
      id: 'lesen-kommentar-c1',
      title: 'Lesen: Kommentar und Zwischentöne',
      level: 'C1',
      emoji: '🗞️',
      words: [
        { de: 'die Zwischentöne', info: 'was zwischen den Zeilen mitschwingt', emoji: '🎚️' },
        { de: 'zweifellos', info: 'ganz sicher, ohne Frage', emoji: '✔️' },
        { de: 'die Kehrseite', info: 'die unangenehme Seite einer guten Sache', emoji: '🪙' },
        { de: 'relativieren', info: 'eine Aussage abschwächen, ins Verhältnis setzen', emoji: '⚖️' }
      ],
      exercises: [
        { type: 'lesen',
          text: 'Dass die Stadt die Innenstadt für Autos sperrt, wird gern als mutiger Schritt gefeiert. Mutig ist daran vor allem der Zeitpunkt: ein halbes Jahr vor der Wahl.\n\nZweifellos wird die Luft besser, und wer je an einem Julinachmittag am Ring gestanden hat, wird das begrüßen. Nur hat die Sache eine Kehrseite, über die im Rathaus auffällig wenig gesprochen wird. Die Geschäfte in den Seitenstraßen leben von Kundschaft, die eben nicht mit dem Lastenrad kommt. Und der Bus, der sie ersetzen soll, fährt in den Randbezirken weiterhin dreimal am Tag.\n\nMan kann eine Innenstadt autofrei machen. Man sollte dann aber auch sagen, wer den Preis dafür zahlt — und ihn nicht erst nach der Wahl beziffern.',
          q: 'Wie steht der Autor zur Sperrung?',
          options: ['Grundsätzlich dafür, aber er kritisiert die Umsetzung und den Zeitpunkt.', 'Klar dagegen.', 'Uneingeschränkt dafür.', 'Er äußert keine Meinung.'],
          answer: 0,
          explain: 'Zweifellos wird die Luft besser zeigt die Zustimmung. Die Kritik gilt dem Zeitpunkt und dem Verschweigen der Folgen.' },
        { type: 'lesen',
          text: 'Dass die Stadt die Innenstadt für Autos sperrt, wird gern als mutiger Schritt gefeiert. Mutig ist daran vor allem der Zeitpunkt: ein halbes Jahr vor der Wahl.\n\nZweifellos wird die Luft besser, und wer je an einem Julinachmittag am Ring gestanden hat, wird das begrüßen. Nur hat die Sache eine Kehrseite, über die im Rathaus auffällig wenig gesprochen wird. Die Geschäfte in den Seitenstraßen leben von Kundschaft, die eben nicht mit dem Lastenrad kommt. Und der Bus, der sie ersetzen soll, fährt in den Randbezirken weiterhin dreimal am Tag.\n\nMan kann eine Innenstadt autofrei machen. Man sollte dann aber auch sagen, wer den Preis dafür zahlt — und ihn nicht erst nach der Wahl beziffern.',
          q: 'Was ist mit „Mutig ist daran vor allem der Zeitpunkt“ gemeint?',
          options: ['Ein ironischer Seitenhieb: Die Entscheidung ist wahltaktisch.', 'Ein echtes Lob für den guten Zeitpunkt.', 'Eine neutrale Feststellung.', 'Eine Warnung vor der Wahl.'],
          answer: 0,
          explain: 'Der Satz lobt scheinbar, meint aber das Gegenteil. Diese Ironie ist typisch für den Kommentar.' },
        { type: 'lesen',
          text: 'Dass die Stadt die Innenstadt für Autos sperrt, wird gern als mutiger Schritt gefeiert. Mutig ist daran vor allem der Zeitpunkt: ein halbes Jahr vor der Wahl.\n\nZweifellos wird die Luft besser, und wer je an einem Julinachmittag am Ring gestanden hat, wird das begrüßen. Nur hat die Sache eine Kehrseite, über die im Rathaus auffällig wenig gesprochen wird. Die Geschäfte in den Seitenstraßen leben von Kundschaft, die eben nicht mit dem Lastenrad kommt. Und der Bus, der sie ersetzen soll, fährt in den Randbezirken weiterhin dreimal am Tag.\n\nMan kann eine Innenstadt autofrei machen. Man sollte dann aber auch sagen, wer den Preis dafür zahlt — und ihn nicht erst nach der Wahl beziffern.',
          q: 'Wer zahlt laut Text den Preis?',
          options: ['Geschäfte in Seitenstraßen und Menschen aus den Randbezirken.', 'Die Stadtverwaltung.', 'Die Autofahrer in der Innenstadt.', 'Der Text sagt es nicht.'],
          answer: 0,
          explain: 'Beide Gruppen werden genannt: die Läden ohne Laufkundschaft und die Randbezirke mit drei Bussen am Tag.' },
        { type: 'schreiben',
          auftrag: 'Schreib einen Leserbrief von fünf bis sechs Sätzen, der dem Kommentar widerspricht. Nimm den Einwand ernst und entkräfte ihn.',
          muster: 'Der Kommentar unterstellt der Stadt Wahltaktik und übersieht dabei, dass die Pläne seit vier Jahren im Verkehrsausschuss liegen. Dass die Umsetzung nun in ein Wahljahr fällt, ist eher Zufall als Kalkül. Richtig ist der Hinweis auf die Randbezirke: Ohne dichteren Takt wird die Sperrung dort als Zumutung ankommen. Genau deshalb steht der Ausbau der Buslinien im selben Beschluss. Man kann der Stadt vorwerfen, dass sie das schlecht erklärt hat. Ihr Mangel an Mut ist es nicht.',
          tipp: 'Ein starker Leserbrief greift ein konkretes Zitat auf und stellt eine Tatsache dagegen.' },
        { type: 'schreiben',
          auftrag: 'Formuliere denselben Sachverhalt einmal ohne Ironie — als sachliche Meldung in drei bis vier Sätzen.',
          muster: 'Die Stadt sperrt die Innenstadt ab dem kommenden Quartal für Autos. Die Verwaltung erwartet eine spürbare Verbesserung der Luftqualität. Einzelhändler in den Seitenstraßen befürchten Umsatzeinbußen, da ein Teil ihrer Kundschaft mit dem Auto anreist. Der Ausbau der Buslinien in den Randbezirken ist Teil des Beschlusses, ein Zeitplan liegt bisher nicht vor.',
          tipp: 'Eine Meldung nennt Fakten und Positionen, ohne sie zu bewerten. Kein zweifellos, kein auffällig wenig.' },
        { type: 'fehler', satz: 'Der Autor kritisiert nicht die Sperrung, sondern wie sie kommuniziert wurde.', falsch: 'wie',
          richtig: 'Der Autor kritisiert nicht die Sperrung, sondern die Art, wie sie kommuniziert wurde.',
          explain: 'Nach sondern muss ein Satzglied folgen, das zu die Sperrung passt. Ein bloßes wie hängt in der Luft.' },
        { type: 'fehler', satz: 'Zweifellos ist die Maßnahme umstritten, obwohl viele sie begrüßen dennoch.', falsch: 'dennoch',
          richtig: 'Zweifellos ist die Maßnahme umstritten, obwohl viele sie begrüßen.',
          explain: 'obwohl und dennoch sagen dasselbe. Beide zusammen sind eine doppelte Einschränkung.' },
        { type: 'gap', text: 'Die niedrigen Zahlen ___ den ersten Eindruck deutlich.',
          answer: 'relativieren', alts: ['relativierten'], hint: 'abschwächen, ins Verhältnis setzen',
          explain: 'relativieren: eine Aussage nicht widerlegen, aber ins Verhältnis rücken.' },
        { type: 'gap', text: 'Jede Erleichterung hat ihre ___: Was den einen hilft, kostet die anderen etwas.',
          answer: 'Kehrseite', alts: ['kehrseite'], hint: 'die andere, unangenehme Seite',
          explain: 'Die Kehrseite der Medaille — die Seite, die man nicht zeigt.' },
        { type: 'choice', q: 'Woran erkennt man Ironie in einem Kommentar meistens?',
          options: ['Lob steht in einem Zusammenhang, der es entwertet.', 'An Ausrufezeichen.', 'An besonders langen Sätzen.', 'An Fremdwörtern.'],
          answer: 0, explain: 'Mutig ist daran vor allem der Zeitpunkt: Das Lob wird durch das Folgende zurückgenommen.' },
        { type: 'choice', q: 'Was unterscheidet einen Kommentar von einer Meldung?',
          options: ['Der Kommentar bewertet, die Meldung berichtet.', 'Der Kommentar ist länger.', 'Die Meldung nennt keine Namen.', 'Es gibt keinen Unterschied.'],
          answer: 0, explain: 'Beide berichten Fakten, aber nur der Kommentar sagt, was der Autor davon hält.' }
      ]
    }
  ];"""

alt = """      ]
    }
  ];"""
assert s.count(alt) == 1, 'Anker fehlt: %d' % s.count(alt)
s = s.replace(alt, """      ]
""" + NEU)

open(P, 'w', encoding='utf-8').write(s)
print('drei Themen ergänzt (A2, B2, C1)')
