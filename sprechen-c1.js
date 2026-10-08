/* ============================================================
   deutschoderwas club — SPRECHEN C1 (Goethe-Zertifikat C1, modular)

   Aufbau nach dem Handbuch „Prüfungsziele, Testbeschreibung" des
   Goethe-Instituts, geprüft am 08.10.2026, bestätigt durch eine
   zweite Quelle:

     Teil 1  Vortrag vor Publikum, danach Rückfragen (Produktion)
     Teil 2  Diskussion, den eigenen Standpunkt vertreten
     20 Minuten Prüfung, 20 Minuten Vorbereitung mit Notizen,
     100 Punkte, bestanden ab 60. In der Regel Paarprüfung.

   Eine Unschärfe sei genannt: Der Handbuch-Auszug spricht an
   einer Stelle von drei Teilen, beschreibt aber nur zwei. Keine
   zweite Quelle kennt einen dritten; üblicherweise werden
   Vortrag und anschließende Rückfragen getrennt gezählt. Hier
   stehen deshalb zwei Teile, mit den Rückfragen als Teil des
   Vortrags — so, wie die Prüfung abläuft.

   Der Sprung von B2 auf C1: Auf B2 war ein gut gegliederter
   Vortrag mit zwei begründeten Aspekten eine gute Leistung. Auf
   C1 kommt die Rückfrage dazu — und die entscheidet. Wer seinen
   Vortrag auswendig gelernt hat, bricht ein, sobald jemand
   nachhakt. Geprüft wird, ob du deine eigene These unter Druck
   halten, einschränken oder begründet aufgeben kannst.

   In der Diskussion zählt nicht, wer recht behält. Gewertet wird,
   ob du auf das eingehst, was die andere Person gesagt hat —
   wörtlich, nicht nur dem Thema nach.
   ============================================================ */

window.SPRECHEN_C1 = {

  niveau: 'C1',
  pruefung: 'Goethe-Zertifikat C1 (modular)',
  minuten: 20,
  punkte: 30,

  stufen: [
    { nr:1, titel:'Der Vortrag, der Nachfragen aushält', zeichen:'🎤',
      was:'Gliedern kannst du schon. Jetzt übst du, die eigene These zu verteidigen, einzuschränken oder begründet fallenzulassen, wenn jemand nachhakt.' },
    { nr:2, titel:'Zuhören und darauf antworten', zeichen:'💬',
      was:'Die häufigste Schwäche in C1-Diskussionen: Beide tragen ihre Punkte vor, ohne aufeinander einzugehen. Du übst, das Gesagte aufzunehmen und daran anzuknüpfen.' },
    { nr:3, titel:'Die beiden Prüfungsteile', zeichen:'🎯',
      was:'Vortrag mit Rückfragen und Diskussion, mit Vorbereitungszeit und Uhr. Zu jedem Thema ein Mustervortrag und die Kriterien, nach denen bewertet wird.' }
  ],

  bloecke: [

    { id:'c1sp1b1', stufe:1, titel:'Wenn jemand nachhakt',
      kurz:'Die eigene These unter Druck halten',
      ziel:'Nach diesem Block hast du drei Antworten parat: verteidigen, einschränken, begründet nachgeben.',
      zeichen:'🎤', farbe:'turq',
      aufgaben: [
        { art:'wahl', frage:'Die Prüferin fragt: „Gilt das wirklich für alle Branchen?" Welche Antwort ist auf C1 am stärksten?',
          opt:['Ja, für alle.','Nein, da haben Sie recht.','Für die meisten — in der Pflege allerdings nicht, und zwar aus einem bestimmten Grund.'],
          loesung:2, erklaerung:'Einschränken und sofort begründen ist stärker als beharren oder einknicken. Es zeigt, dass du deine eigene Aussage überblickst.' },
        { art:'wahl', frage:'„Woher haben Sie diese Zahl?" — und du weißt es nicht mehr genau.',
          opt:['Das habe ich irgendwo gelesen.','Die genaue Quelle habe ich nicht im Kopf; die Größenordnung stammt aus einer Erhebung des Statistischen Bundesamtes.','Das stimmt auf jeden Fall.'],
          loesung:1, erklaerung:'Unsicherheit zugeben und trotzdem einordnen. Das wird höher bewertet als eine erfundene Sicherheit.' },
        { art:'wahl', frage:'Welche Wendung leitet eine Einschränkung ein, ohne schwach zu wirken?',
          opt:['Vielleicht habe ich mich geirrt.','Ich würde das insofern einschränken, als …','Also eigentlich nicht.'],
          loesung:1, erklaerung:'„insofern …, als" ist die präzise Form: Du sagst genau, in welcher Hinsicht die Einschränkung gilt.' },
        { art:'wahl', frage:'„Das Gegenteil ist doch längst belegt." Wie antwortest du?',
          opt:['Nein, das stimmt nicht.','Mir sind diese Befunde bekannt; sie beziehen sich allerdings auf einen anderen Zeitraum.','Da bin ich überfragt.'],
          loesung:1, erklaerung:'Den Einwand aufnehmen, ihn gelten lassen und seinen Geltungsbereich begrenzen — die souveränste Reaktion.' },
        { art:'wahl', frage:'Welche Formulierung gibt begründet nach?',
          opt:['Okay, Sie haben gewonnen.','Dieses Argument überzeugt mich; ich würde meine Aussage entsprechend abschwächen.','Von mir aus.'],
          loesung:1, erklaerung:'Seine Meinung zu ändern ist auf C1 kein Punktverlust, solange man sagt, warum und wie weit.' },
        { art:'wahl', frage:'„Können Sie das an einem Beispiel zeigen?"',
          opt:['Nicht so richtig.','Gern. Ein Betrieb in meiner Nachbarschaft hat genau das versucht — mit einem Ergebnis, das meine These stützt.','Beispiele gibt es viele.'],
          loesung:1, erklaerung:'Ein konkretes, kurzes Beispiel mit Bezug zur These. „Beispiele gibt es viele" ist eine Ausweichbewegung.' },
        { art:'ordnen', frage:'Bau die Einschränkung.',
          teile:['Ich','würde','das','insofern','einschränken,','als es nur für größere Betriebe gilt'],
          loesung:[0,1,2,3,4,5],
          erklaerung:'„insofern" steht im Mittelfeld, der Nebensatz mit „als" folgt am Ende.' },
        { art:'ordnen', frage:'Bau die Antwort auf einen Einwand.',
          teile:['So berechtigt Ihr Einwand ist,','er','betrifft','nur','einen Teil der Fälle'],
          loesung:[0,1,2,3,4],
          erklaerung:'Nach dem eingeräumten Vordersatz folgt ein vollständiger Hauptsatz — „er betrifft", nicht „betrifft er".' },
        { art:'ordnen', frage:'Bau die höfliche Rückfrage.',
          teile:['Habe','ich','Sie','richtig','verstanden,','dass Sie die Kosten für entscheidend halten'],
          loesung:[0,1,2,3,4,5],
          erklaerung:'Die Rückversicherung „Habe ich Sie richtig verstanden, dass …" gewinnt Zeit und zeigt zugleich, dass du zugehört hast.' }
      ] },

    { id:'c1sp1b2', stufe:1, titel:'Der Vortrag mit Haltung',
      kurz:'Gliedern reicht nicht mehr',
      ziel:'Nach diesem Block baust du einen Vortrag, der eine Frage stellt, statt nur ein Thema abzuarbeiten.',
      zeichen:'🗂️', farbe:'gold',
      aufgaben: [
        { art:'wahl', frage:'Welcher Einstieg ist auf C1 am besten?',
          opt:['In meinem Vortrag geht es um das Thema Wohnen.','Über Wohnungsnot wird viel gesprochen — meist allerdings über die falsche Frage.','Ich möchte heute über Wohnen sprechen.'],
          loesung:1, erklaerung:'Ein C1-Einstieg setzt eine Spitze und kündigt an, dass gleich etwas Überraschendes kommt. Die anderen beiden kündigen nur an.' },
        { art:'wahl', frage:'Wie kündigt man die Gliederung an, ohne sie herunterzubeten?',
          opt:['Ich habe drei Punkte: erstens, zweitens, drittens.','Ich möchte zwei Aspekte herausgreifen, die in der Debatte meist getrennt behandelt werden.','Mein Vortrag hat eine Einleitung, einen Hauptteil und einen Schluss.'],
          loesung:1, erklaerung:'Die Gliederung wird begründet, nicht nur genannt — und zugleich eine These über die Debatte aufgestellt.' },
        { art:'wahl', frage:'Welcher Übergang zwischen zwei Aspekten ist am stärksten?',
          opt:['Jetzt komme ich zum zweiten Punkt.','Das führt unmittelbar zu einer Frage, die bisher offengeblieben ist.','Soviel dazu.'],
          loesung:1, erklaerung:'Der Übergang verknüpft, statt nur zu zählen. So entsteht ein Gedankengang statt einer Liste.' },
        { art:'wahl', frage:'Wie schließt ein C1-Vortrag am besten?',
          opt:['Das war mein Vortrag, danke.','Zusammenfassend: Punkt eins, Punkt zwei.','Wenn ich mich entscheiden müsste, würde ich … — unter der Bedingung, dass …'],
          loesung:2, erklaerung:'Ein Schluss, der Position bezieht und die Bedingung nennt. Eine reine Zusammenfassung ist B2.' },
        { art:'wahl', frage:'Was tun, wenn du den Faden verlierst?',
          opt:['Schweigen und nachdenken.','Lassen Sie mich den Gedanken anders fassen: …','Entschuldigung, ich bin ganz durcheinander.'],
          loesung:1, erklaerung:'Eine Reparaturformel hält den Redefluss aufrecht. Sie gehört ausdrücklich zum bewerteten Repertoire.' },
        { art:'wahl', frage:'Welcher Satz macht eine Behauptung überprüfbar?',
          opt:['Das ist allgemein bekannt.','Das zeigt sich zum Beispiel daran, dass …','Jeder weiß das.'],
          loesung:1, erklaerung:'„Das zeigt sich daran, dass" zwingt zum Beleg. Die anderen beiden behaupten nur.' },
        { art:'ordnen', frage:'Bau den Einstieg mit Zuspitzung.',
          teile:['Über die Vier-Tage-Woche','wird','viel','gesprochen','—','meist allerdings ohne die Frage nach den Kosten'],
          loesung:[0,1,2,3,4,5],
          erklaerung:'Hauptsatz mit Verbzweitstellung, dann der zugespitzte Nachtrag nach dem Gedankenstrich.' },
        { art:'ordnen', frage:'Bau die begründete Gliederung.',
          teile:['Ich','möchte','zwei Aspekte','herausgreifen,','die','in der Debatte','meist','getrennt behandelt werden'],
          loesung:[0,1,2,3,4,5,6,7],
          erklaerung:'Im Relativsatz steht das Verb am Ende: „… getrennt behandelt werden".' },
        { art:'ordnen', frage:'Bau den Schluss mit Bedingung.',
          teile:['Insgesamt','spricht','mehr','dafür','als dagegen,','sofern die Einführung schrittweise erfolgt'],
          loesung:[0,1,2,3,4,5],
          erklaerung:'Der Bedingungssatz mit „sofern" steht am Ende und begrenzt das Urteil, ohne es zurückzunehmen.' }
      ] },

    { id:'c1sp2b1', stufe:2, titel:'Auf das eingehen, was gesagt wurde',
      kurz:'Die häufigste Schwäche in C1-Diskussionen',
      ziel:'Nach diesem Block knüpfst du wörtlich an die andere Person an, statt nur dein eigenes Argument nachzuschieben.',
      zeichen:'💬', farbe:'rot',
      aufgaben: [
        { art:'wahl', frage:'Ihr Gegenüber sagt: „Das scheitert am Geld." Welche Antwort geht wirklich darauf ein?',
          opt:['Ich finde das Thema trotzdem wichtig.','Sie sprechen die Finanzierung an — genau da sehe ich allerdings einen Spielraum, den wir noch nicht genutzt haben.','Geld ist immer ein Problem.'],
          loesung:1, erklaerung:'Die Antwort nimmt das Stichwort auf und widerspricht an genau dieser Stelle. Die anderen beiden wechseln das Thema.' },
        { art:'wahl', frage:'Welche Wendung zeigt, dass du zugehört hast?',
          opt:['Wie Sie gerade sagten, …','Ich meine aber, …','Jedenfalls denke ich, …'],
          loesung:0, erklaerung:'Eine wörtliche Wiederaufnahme ist das einfachste und wirksamste Mittel, Bezug herzustellen.' },
        { art:'wahl', frage:'Wie übernimmst du höflich das Wort?',
          opt:['Moment, jetzt bin ich dran.','Darf ich an dieser Stelle kurz einhaken?','…'],
          loesung:1, erklaerung:'„einhaken" ist die übliche, höfliche Formel. Wer nie unterbricht, bekommt in der Paarprüfung zu wenig Redeanteil.' },
        { art:'wahl', frage:'Dein Gegenüber redet seit zwei Minuten. Was tust du?',
          opt:['Warten, bis er fertig ist.','An einer Atempause einhaken und an das zuletzt Gesagte anknüpfen.','Gleichzeitig anfangen zu sprechen.'],
          loesung:1, erklaerung:'Bewertet wird auch die Gesprächsfähigkeit. Nur zuhören kostet Punkte, dazwischenreden auch.' },
        { art:'wahl', frage:'Wie fasst man zusammen, um zu einem Ergebnis zu kommen?',
          opt:['Also gut.','Halten wir fest: In zwei Punkten sind wir uns einig, offen bleibt die Frage der Finanzierung.','Wir sind uns ja einig.'],
          loesung:1, erklaerung:'Eine Zusammenfassung, die Einigkeit und offene Punkte trennt — der sicherste Weg zu einem gemeinsamen Ergebnis.' },
        { art:'wahl', frage:'Welche Formulierung widerspricht, ohne anzugreifen?',
          opt:['Das ist doch Unsinn.','Da bin ich anderer Ansicht, und zwar aus folgendem Grund: …','Sie irren sich.'],
          loesung:1, erklaerung:'Widerspruch plus sofortige Begründung. Die Ankündigung „aus folgendem Grund" verpflichtet dich, auch einen zu liefern.' },
        { art:'ordnen', frage:'Bau die Anknüpfung.',
          teile:['Sie','haben','gerade','die Finanzierung','angesprochen','—','und genau da sehe ich einen Spielraum'],
          loesung:[0,1,2,3,4,5,6],
          erklaerung:'Das Partizip „angesprochen" steht am Satzende, der Anschluss folgt nach dem Gedankenstrich.' },
        { art:'ordnen', frage:'Bau die Zusammenfassung.',
          teile:['Halten','wir','fest,','dass','wir','uns','in zwei Punkten','einig sind'],
          loesung:[0,1,2,3,4,5,6,7],
          erklaerung:'Im „dass"-Satz steht das Verb am Ende: „… einig sind".' },
        { art:'ordnen', frage:'Bau den höflichen Widerspruch.',
          teile:['Da','bin','ich','anderer','Ansicht,','weil die Zahlen etwas anderes nahelegen'],
          loesung:[0,1,2,3,4,5],
          erklaerung:'Im „weil"-Satz steht das Verb am Ende: „… nahelegen".' }
      ] },

    { id:'c1sp2b2', stufe:2, titel:'Aussprache und Wirkung',
      kurz:'Was Prüfende hören, bevor sie den Inhalt bewerten',
      ziel:'Nach diesem Block weißt du, welche Kleinigkeiten in der mündlichen Prüfung über den Eindruck entscheiden.',
      zeichen:'🔊', farbe:'lila',
      aufgaben: [
        { art:'wahl', frage:'Was ist bei einem C1-Vortrag wichtiger?',
          opt:['Fehlerfreiheit','Verständlichkeit und ein durchgehaltener Gedanke','Möglichst viele Fachwörter'],
          loesung:1, erklaerung:'Die Kriterien gewichten Flüssigkeit und Kohärenz hoch. Einzelne Fehler kosten kaum, ein abreißender Gedanke schon.' },
        { art:'wahl', frage:'Wo liegt die Betonung in „Ich halte das für ÜBERtrieben"?',
          opt:['auf „halte"','auf der ersten Silbe von „übertrieben"','auf „das"'],
          loesung:1, erklaerung:'Bei trennbaren und untrennbaren Vorsilben entscheidet die Betonung über die Bedeutung. „über-" trägt hier den Ton.' },
        { art:'wahl', frage:'Welche Pause wirkt souverän?',
          opt:['Eine kurze Pause vor dem wichtigsten Satz.','Gar keine Pause.','Viele kleine Pausen mit „ähm".'],
          loesung:0, erklaerung:'Eine gesetzte Pause hebt hervor. Füllgeräusche dagegen senken die Bewertung der Flüssigkeit.' },
        { art:'wahl', frage:'Dein Gegenüber spricht sehr leise. Was tust du?',
          opt:['Lauter sprechen als sonst.','Freundlich nachfragen: „Könnten Sie das noch einmal sagen?"','Nichts sagen und raten.'],
          loesung:1, erklaerung:'Nachfragen ist eine Gesprächsleistung und wird positiv bewertet — Raten führt fast sicher zu einer Antwort am Thema vorbei.' },
        { art:'wahl', frage:'Wie gehst du mit einem Wort um, das dir fehlt?',
          opt:['Stocken und auf Englisch wechseln.','Umschreiben: „… das Papier, das man bekommt, wenn man gekündigt hat."','Einfach weitersprechen und hoffen.'],
          loesung:1, erklaerung:'Umschreiben ist eine eigene Fertigkeit und gehört ausdrücklich zu den bewerteten Strategien.' },
        { art:'wahl', frage:'Wie viel Redeanteil solltest du in der Diskussion anstreben?',
          opt:['Deutlich mehr als die andere Person.','Etwa die Hälfte.','So wenig wie möglich, um Fehler zu vermeiden.'],
          loesung:1, erklaerung:'Beide werden einzeln bewertet. Wer zu wenig sagt, kann nicht zeigen, was er kann; wer dominiert, verliert bei der Gesprächsfähigkeit.' },
        { art:'ordnen', frage:'Bau die Umschreibung.',
          teile:['Das','ist','das Papier,','das','man','bekommt,','wenn man gekündigt hat'],
          loesung:[0,1,2,3,4,5,6],
          erklaerung:'Zwei verschachtelte Nebensätze, beide mit dem Verb am Ende — genau das, was beim Umschreiben unter Zeitdruck misslingt.' },
        { art:'ordnen', frage:'Bau die Reparaturformel.',
          teile:['Lassen','Sie','mich','den Gedanken','anders','fassen'],
          loesung:[0,1,2,3,4,5],
          erklaerung:'Imperativ mit „lassen Sie mich" plus Infinitiv am Ende.' },
        { art:'ordnen', frage:'Bau die höfliche Nachfrage.',
          teile:['Könnten','Sie','das','bitte','noch einmal','ausführen?'],
          loesung:[0,1,2,3,4,5],
          erklaerung:'Konjunktiv II in der Frage, der Infinitiv steht am Ende.' }
      ] }
  ],

  teile: [

    /* ====================== TEIL 1 ====================== */
    { nr:1, art:'erzaehlen', name:'Vortrag mit Rückfragen',
      kurz:'Vier bis fünf Minuten frei sprechen, danach antworten',
      was:'Du hältst einen Vortrag zu einem vorgegebenen Thema und beantwortest anschließend Rückfragen der Prüfenden und der anderen teilnehmenden Person.',
      tipp:'Der Vortrag ist die halbe Miete, die Rückfragen sind die andere. Lege dir in der Vorbereitungszeit zu jeder deiner Thesen die Frage zurecht, die du selbst stellen würdest — und eine Antwort darauf. Wer eingeräumt hat, bevor er gefragt wird, steht besser da als wer verteidigt.',
      zeichen:'🎤', farbe:'turq', punkte:15,
      runden: [
        { id:'c1sp1r1', thema:'Künstliche Intelligenz am Arbeitsplatz',
          karten: [ {
            thema:'Sollten Unternehmen offenlegen, wo sie künstliche Intelligenz einsetzen?',
            punkte: [
              '1 Einstieg mit einer Zuspitzung — welche Frage wird in der Debatte meist übersehen?',
              '2 Erster Aspekt mit Beleg oder Beispiel',
              '3 Zweiter Aspekt, der mit dem ersten zusammenhängt',
              '4 Fazit mit Position und Bedingung',
              'Rechne mit Rückfragen: Gilt das für alle Branchen? Woher stammt Ihre Zahl? Was wäre die Gegenposition?'
            ],
            redemittel: [
              'Über … wird viel gesprochen — meist allerdings ohne die Frage nach …',
              'Ich möchte zwei Aspekte herausgreifen, die meist getrennt behandelt werden.',
              'Das zeigt sich zum Beispiel daran, dass …',
              'Das führt unmittelbar zu einer Frage, die bisher offengeblieben ist.',
              'Wenn ich mich entscheiden müsste, würde ich … — unter der Bedingung, dass …',
              'Ich würde das insofern einschränken, als …'
            ],
            bewertung:'Geprüft wird nicht nur der Vortrag. Entscheidend sind die Rückfragen: Hältst du deine These, schränkst du sie begründet ein oder gibst du sie mit Begründung auf? Wer bei der ersten Nachfrage einknickt oder stur bleibt, verliert hier Punkte.',
            mustervortrag:'Über künstliche Intelligenz am Arbeitsplatz wird viel gesprochen — meist allerdings ohne die Frage, wer eigentlich erfährt, dass sie im Spiel war. Genau darum soll es mir gehen.\nIch möchte zwei Aspekte herausgreifen, die in der Debatte meist getrennt behandelt werden: die Entscheidung über Menschen und die Entscheidung über Texte.\nDer erste Aspekt betrifft Bewerbungen und Beurteilungen. Wo ein Programm vorsortiert, sollte das offengelegt werden, und zwar aus einem einfachen Grund: Nur wer weiß, dass eine Maschine mitentschieden hat, kann die Entscheidung überhaupt anfechten. Das zeigt sich daran, dass in mehreren Verfahren erst nach Jahren bekannt wurde, nach welchen Merkmalen aussortiert worden war.\nDas führt unmittelbar zum zweiten Punkt: Bei Texten liegt der Fall anders. Ob eine Pressemitteilung mit Hilfe eines Programms entstanden ist, berührt niemandes Rechte. Eine Kennzeichnungspflicht für jeden Satz würde vor allem Papier erzeugen und am Ende niemanden schützen. Wer alles kennzeichnet, kennzeichnet nichts: Ein Hinweis, der unter jedem Dokument steht, wird nach zwei Wochen von niemandem mehr gelesen. Das ist keine theoretische Sorge — bei den Hinweisen zum Datenschutz lässt sich genau das beobachten.\nWenn ich mich entscheiden müsste, würde ich eine Offenlegungspflicht befürworten — allerdings beschränkt auf Entscheidungen über Personen. Überall dort, wo es um Menschen geht, muss nachvollziehbar bleiben, wer oder was entschieden hat. Mir ist bewusst, dass die Grenze zwischen beiden Bereichen nicht immer scharf verläuft; ein Text kann eine Entscheidung vorbereiten. Gerade deshalb halte ich es für richtig, die Pflicht an der Wirkung festzumachen und nicht am Werkzeug.',
            rueckfragen: [
              { frage:'Gilt Ihre Forderung auch für kleine Betriebe mit fünf Beschäftigten?',
                muster:'Im Grundsatz ja, allerdings würde ich den Aufwand abstufen. Eine Pflicht zur Dokumentation ergibt nur Sinn, wenn sie erfüllbar ist — für einen Fünf-Personen-Betrieb hieße das: ein Satz im Verfahren, kein Gutachten.' },
              { frage:'Sie sprachen von mehreren Verfahren. Welche meinen Sie?',
                muster:'Die genauen Aktenzeichen habe ich nicht im Kopf. Bekannt geworden sind vor allem Fälle aus dem Personalbereich großer Konzerne, in denen Auswahlkriterien erst nachträglich offengelegt wurden. Die Größenordnung ist belegt, die Einzelheiten müsste ich nachsehen.' },
              { frage:'Wäre eine Offenlegung nicht ein Wettbewerbsnachteil?',
                muster:'So berechtigt der Einwand ist, er trifft nur dort zu, wo die Offenlegung technische Einzelheiten verlangt. Mir geht es nicht um das Verfahren, sondern um die Tatsache des Einsatzes — und die verrät keinem Mitbewerber etwas.' }
            ] } ] },

        { id:'c1sp1r2', thema:'Ehrenamt und Gesellschaft',
          karten: [ {
            thema:'Sollte ehrenamtliches Engagement stärker belohnt werden — etwa durch Rentenpunkte?',
            punkte: [
              '1 Einstieg mit Zuspitzung',
              '2 Erster Aspekt mit Beispiel',
              '3 Zweiter Aspekt, der eine Spannung aufmacht',
              '4 Fazit mit Position und Bedingung',
              'Rechne mit Rückfragen: Verliert das Ehrenamt dadurch nicht seinen Charakter? Wer soll das bezahlen?'
            ],
            redemittel: [
              'Die Frage wird meist so gestellt, als ginge es um …; tatsächlich geht es um …',
              'Ein erster Aspekt, der dafür spricht, ist …',
              'Hier allerdings entsteht eine Spannung: …',
              'Insgesamt spricht mehr dafür als dagegen, sofern …'
            ],
            bewertung:'Achte darauf, die Spannung zwischen beiden Aspekten wirklich auszusprechen, statt sie zu umgehen. Auf C1 wird belohnt, wer das Problem seiner eigenen Position benennt.',
            mustervortrag:'Die Frage nach der Belohnung von Ehrenämtern wird meist so gestellt, als ginge es um Geld. Tatsächlich geht es um Anerkennung — und darum, wer sich ein Ehrenamt überhaupt leisten kann.\nEin erster Aspekt, der für Rentenpunkte spricht, ist die soziale Schieflage. Ehrenamt setzt freie Zeit voraus, und freie Zeit ist ungleich verteilt. Wer in Schichten arbeitet oder zwei Jobs hat, engagiert sich seltener — nicht aus Unwillen, sondern aus Mangel an Stunden. Rentenpunkte würden genau dort ausgleichen. Hinzu kommt, dass unbezahlte Arbeit sich im Alter doppelt rächt: Wer jahrelang Angehörige gepflegt oder einen Verein getragen hat, hat in dieser Zeit weniger eingezahlt und bekommt später weniger heraus.\nHier allerdings entsteht eine Spannung: Sobald eine Gegenleistung winkt, verändert sich das Motiv. Vereine berichten, dass die Bereitschaft, unbezahlte Aufgaben zu übernehmen, sinkt, sobald andere Aufgaben vergütet werden. Es könnte also sein, dass eine Belohnung genau das verdrängt, was sie fördern soll. Ganz von der Hand zu weisen ist dieser Einwand nicht, auch wenn die Untersuchungen dazu uneinheitlich sind und sich meist auf Geldzahlungen beziehen, nicht auf Ansprüche, die erst Jahrzehnte später wirksam werden. Wer heute zwei Stunden in der Woche gibt, rechnet kaum in Rentenpunkten.\nInsgesamt spricht für mich mehr dafür als dagegen, sofern die Anerkennung an einen Umfang gebunden wird und nicht an die Art der Tätigkeit. Wer über Jahre regelmäßig Zeit gibt, sollte das im Alter spüren — unabhängig davon, ob er im Chor singt oder Flüchtlinge begleitet.',
            rueckfragen: [
              { frage:'Verliert das Ehrenamt durch eine Gegenleistung nicht seinen Charakter?',
                muster:'Diese Gefahr sehe ich auch, ich habe sie selbst angesprochen. Sie hängt allerdings von der Höhe ab: Eine symbolische Anerkennung wirkt anders als eine Bezahlung, die sich lohnt. Ab welchem Punkt das kippt, weiß ich nicht — das wäre empirisch zu klären.' },
              { frage:'Wer soll das finanzieren?',
                muster:'Die Rentenkasse, und das ist der schwierigste Punkt meines Vorschlags. Man müsste gegenrechnen, was an Pflege- und Betreuungsleistungen eingespart wird, die sonst bezahlt werden müssten. Ob die Rechnung aufgeht, kann ich nicht behaupten.' },
              { frage:'Warum nicht einfach mehr Urlaubstage für Ehrenamtliche?',
                muster:'Das wäre ein gangbarer Weg, trifft aber nur Angestellte. Selbstständige und Menschen ohne Erwerbsarbeit — also gerade viele Ehrenamtliche — hätten nichts davon. Insofern halte ich die Rentenlösung für die gerechtere.' }
            ] } ] },

        { id:'c1sp1r3', thema:'Stadt, Land und Daseinsvorsorge',
          karten: [ {
            thema:'Muss der Staat gleichwertige Lebensverhältnisse in Stadt und Land garantieren?',
            punkte: [
              '1 Einstieg: Was heißt „gleichwertig" eigentlich?',
              '2 Erster Aspekt mit Beispiel',
              '3 Zweiter Aspekt mit Gegenbewegung',
              '4 Fazit mit Position und Bedingung',
              'Rechne mit Rückfragen: Ist das bezahlbar? Wo ziehen Sie die Grenze?'
            ],
            redemittel: [
              'Bevor man die Frage beantwortet, muss man klären, was mit … gemeint ist.',
              'Dafür spricht zunächst, dass …',
              'Dagegen lässt sich einwenden, … Das trifft insofern zu, als …',
              'Entscheidend ist daher weniger …, als vielmehr …'
            ],
            bewertung:'Dieses Thema verführt zu Allgemeinplätzen. Gewertet wird, ob du den Begriff „gleichwertig" selbst zum Thema machst, statt ihn zu übernehmen.',
            mustervortrag:'Bevor man diese Frage beantwortet, muss man klären, was mit „gleichwertig" gemeint ist. Gleich sind die Lebensverhältnisse nie — die Frage ist, welche Unterschiede hinnehmbar sind und welche nicht.\nDafür spricht zunächst, dass bestimmte Leistungen nicht verhandelbar sein sollten: ärztliche Versorgung, Schulweg, Anbindung. Wenn eine Geburtsstation neunzig Minuten entfernt liegt, ist das keine Frage des Komforts mehr. In mehreren Landkreisen ist genau das inzwischen die Realität. Dasselbe gilt für Grundschulen: Ein Schulweg von einer Stunde ist für ein Kind im ersten Schuljahr keine Zumutung mehr, sondern eine Benachteiligung, die sich über Jahre summiert.\nDagegen lässt sich einwenden, dass sich eine flächendeckende Versorgung nicht bezahlen lässt und dass Menschen ihren Wohnort frei wählen. Das trifft insofern zu, als niemand ein Recht auf ein Theater vor der Haustür hat. Es verkennt allerdings, dass Wohnortwahl selten frei ist: Wer ein Haus geerbt hat oder Angehörige pflegt, zieht nicht um.\nEntscheidend ist daher weniger die Frage, ob der Staat Gleichwertigkeit garantieren muss, als vielmehr, wofür. Für Grundversorgung: ja, und zwar verbindlich. Für alles Weitere halte ich Unterschiede nicht nur für hinnehmbar, sondern für den eigentlichen Reiz verschiedener Orte. Eine Gemeinde, die versucht, alles zu haben, was eine Großstadt bietet, wird darin immer unterlegen sein. Sie wäre besser beraten, das auszubauen, was sie ohnehin auszeichnet — vorausgesetzt, die Grundversorgung steht. Ohne sie nützt der schönste Ortskern nichts, weil die Menschen wegziehen, die ihn beleben sollen. Die Reihenfolge ist also nicht beliebig: erst das Notwendige, dann das Besondere.',
            rueckfragen: [
              { frage:'Wo genau ziehen Sie die Grenze zwischen Grundversorgung und dem Übrigen?',
                muster:'Mein Maßstab wäre: Alles, dessen Fehlen Gesundheit, Bildung oder Erwerbsarbeit unmöglich macht, gehört dazu. Ein Schwimmbad nicht, eine erreichbare Hausarztpraxis schon. Die Abgrenzung im Einzelfall ist strittig, das gebe ich zu.' },
              { frage:'Ist das finanzierbar?',
                muster:'Vollständig vermutlich nicht. Ich würde deshalb nicht bei der Gleichverteilung ansetzen, sondern bei Mindeststandards — eine Höchstentfernung statt einer Einrichtung in jedem Ort. Das ist billiger und erreicht dasselbe Ziel.' },
              { frage:'Sie sprachen von neunzig Minuten zur Geburtsstation. Ist das nicht ein Einzelfall?',
                muster:'Als Extremfall ja. Die Entwicklung ist aber allgemein: Die Zahl der Geburtsstationen ist in den vergangenen zwanzig Jahren deutlich zurückgegangen. Mir ging es weniger um den einzelnen Landkreis als um die Richtung.' }
            ] } ] }
      ] },

    /* ====================== TEIL 2 ====================== */
    { nr:2, art:'planen', name:'Diskussion — den Standpunkt vertreten',
      kurz:'Gemeinsam zu einem Ergebnis kommen, ohne die eigene Position aufzugeben',
      was:'Du diskutierst mit der anderen teilnehmenden Person über eine strittige Frage. Ihr sollt am Ende zu einem gemeinsamen Ergebnis kommen.',
      tipp:'Der häufigste Fehler: Beide halten abwechselnd kleine Vorträge. Bewertet wird aber, ob du auf das eingehst, was gerade gesagt wurde — wörtlich. Nimm das Stichwort deines Gegenübers auf, bevor du widersprichst. Und achte auf den Redeanteil: ungefähr die Hälfte.',
      zeichen:'💬', farbe:'gruen', punkte:15,
      runden: [
        { id:'c1sp2r1', thema:'Weiterbildung im Betrieb',
          karten: [ {
            aufgabe:'Euer Betrieb stellt einmalig 20.000 Euro für Weiterbildung bereit. Die Geschäftsführung möchte von euch beiden einen gemeinsamen Vorschlag, wie das Geld eingesetzt wird. Zur Wahl stehen: Sprachkurse für alle, eine Fachfortbildung für wenige, oder eine Führungsschulung für die Teamleitungen.',
            punkte: [
              'Welche Variante haltet ihr für richtig — und warum?',
              'Wer profitiert, wer geht leer aus?',
              'Wie geht ihr mit dem Einwand um, dass Fortbildung in der Arbeitszeit stattfinden muss?',
              'Einigt euch auf einen konkreten Vorschlag mit Verteilung.'
            ],
            redemittel: [
              'Sie haben gerade … angesprochen — genau da sehe ich allerdings …',
              'Darf ich an dieser Stelle kurz einhaken?',
              'Da bin ich anderer Ansicht, und zwar aus folgendem Grund: …',
              'Wie Sie sagten, … Daran anknüpfend würde ich vorschlagen, …',
              'Halten wir fest: In zwei Punkten sind wir uns einig, offen bleibt …'
            ],
            bewertung:'Bewertet wird nicht, wer sich durchsetzt. Geprüft wird, ob du Vorschläge begründest, das Gesagte aufnimmst, höflich widersprichst und am Ende ein konkretes gemeinsames Ergebnis formulierst.',
            mustervorschlag:'Ich würde vorschlagen, das Geld nicht auf eine Gruppe zu konzentrieren, und zwar aus folgendem Grund: Eine Fachfortbildung für fünf Leute bringt kurzfristig am meisten, erzeugt aber genau die Zweiteilung, über die bei uns ohnehin geklagt wird.\nMein Vorschlag wäre eine Aufteilung: zwei Drittel in Sprachkurse, die allen offenstehen, ein Drittel in eine Fachfortbildung mit offener Bewerbung. Damit profitieren viele, und wer tiefer einsteigen will, bekommt die Gelegenheit.\nSie haben vorhin den Zeitpunkt angesprochen — genau da sehe ich allerdings die eigentliche Hürde. Ein Kurs am Feierabend erreicht die Schichtarbeiter nicht. Ich würde deshalb vorschlagen, die Hälfte der Kurszeit als Arbeitszeit anzurechnen. Das kostet nichts zusätzlich, verschiebt aber, wer teilnehmen kann.\nHalten wir fest: In der Aufteilung sind wir uns einig, offen bleibt die Frage der Arbeitszeit. Die würde ich der Geschäftsführung als eigenen Punkt vorlegen.' } ] },

        { id:'c1sp2r2', thema:'Handy an der Schule',
          karten: [ {
            aufgabe:'Ihr seid Mitglieder der Schulkonferenz. Es geht um ein Handyverbot. Vorgeschlagen sind drei Varianten: vollständiges Verbot auf dem Gelände, Verbot nur im Unterricht, oder keine Regel mit begleitendem Unterricht zur Mediennutzung. Einigt euch auf eine Empfehlung.',
            punkte: [
              'Welche Variante haltet ihr für richtig?',
              'Wie würde sie in der Praxis durchgesetzt?',
              'Was antwortet ihr Eltern, die ihr Kind erreichen wollen?',
              'Einigt euch auf eine Empfehlung mit Begründung.'
            ],
            redemittel: [
              'Ich würde zunächst klären wollen, ob …',
              'Das sehe ich anders, weil …',
              'Da haben Sie recht, allerdings …',
              'Wie wäre es, wenn wir … miteinander verbinden?',
              'Als Empfehlung würde ich formulieren: …'
            ],
            bewertung:'Achte besonders auf den dritten Punkt — die Frage der Eltern ist der Einwand, an dem sich zeigt, ob du auf Gegenargumente eingehst oder sie übergehst.',
            mustervorschlag:'Ich würde zunächst klären wollen, worum es eigentlich geht: um Störungen im Unterricht oder um die Mediennutzung insgesamt. Das sind zwei verschiedene Probleme, und sie verlangen verschiedene Antworten.\nFür den Unterricht halte ich ein klares Verbot für richtig. Da bin ich bei Ihnen. Ein Verbot auf dem gesamten Gelände sehe ich dagegen anders, weil es in den Pausen kaum durchsetzbar ist und die Lehrkräfte in eine Kontrollrolle drängt, die das Verhältnis belastet.\nSie haben die Eltern angesprochen — das ist der Punkt, an dem die meisten Verbote scheitern. Ich würde vorschlagen, das Sekretariat als festen Weg zu benennen und das den Eltern schriftlich mitzuteilen. Damit ist die Erreichbarkeit gesichert, ohne dass jedes Kind das Gerät braucht.\nAls Empfehlung würde ich formulieren: Verbot im Unterricht, Freigabe in den Pausen ab Klasse acht, verbindliche Erreichbarkeit über das Sekretariat und zwei Unterrichtsstunden zur Mediennutzung pro Halbjahr.' } ] },

        { id:'c1sp2r3', thema:'Stadtfest oder Stadtbibliothek',
          karten: [ {
            aufgabe:'Eure Gemeinde hat 50.000 Euro übrig. Eine Bürgerversammlung soll entscheiden: ein großes Stadtfest zum Jubiläum, längere Öffnungszeiten der Bibliothek für zwei Jahre, oder die Sanierung des Spielplatzes. Ihr beide sollt der Versammlung einen gemeinsamen Vorschlag vorlegen.',
            punkte: [
              'Welche Variante hat Vorrang — und warum?',
              'Wen erreicht ihr damit, wen nicht?',
              'Wie begegnet ihr dem Einwand, einmalige Ausgaben seien nachhaltiger als laufende?',
              'Einigt euch auf einen Vorschlag.'
            ],
            redemittel: [
              'Mir scheint, die eigentliche Frage ist weniger …, als vielmehr …',
              'Darf ich kurz einhaken?',
              'So berechtigt das ist, es betrifft nur …',
              'Ich schlage vor, dass wir …',
              'Halten wir fest: …'
            ],
            bewertung:'Der dritte Punkt — einmalig gegen laufend — ist der inhaltliche Kern. Wer ihn übergeht und nur Vorlieben austauscht, bleibt auf B2.',
            mustervorschlag:'Mir scheint, die eigentliche Frage ist weniger, was am schönsten wäre, als vielmehr, was nach zwei Jahren noch da ist. Ein Fest ist an einem Wochenende vorbei.\nIch würde deshalb für die Bibliothek plädieren, allerdings mit einer Einschränkung: Längere Öffnungszeiten für zwei Jahre schaffen eine Erwartung, die danach enttäuscht wird. Entweder man sichert die Finanzierung darüber hinaus, oder man lässt es.\nSie haben vorhin eingewandt, einmalige Ausgaben seien nachhaltiger, weil sie keine Folgekosten erzeugen. So berechtigt das ist, es betrifft nur die Haushaltsseite. Ein sanierter Spielplatz hält fünfzehn Jahre, das stimmt — er erreicht aber nur Familien mit kleinen Kindern, und davon gibt es bei uns immer weniger.\nIch schlage vor, dass wir zwei Drittel in die Spielplatzsanierung geben und ein Drittel in die Bibliothek, aber zweckgebunden für Anschaffungen statt für Öffnungszeiten. Damit entstehen keine Folgekosten, und beides bleibt. Halten wir fest: kein Fest, Aufteilung zwei zu eins, keine laufenden Verpflichtungen.' } ] }
      ] }
  ],

  laeufe: [
    { id:'c1splauf1', titel:'Sprechen C1 — ein kompletter Durchgang', minuten:20,
      teile: [ { nr:1, art:'erzaehlen', ref:'c1sp1r1' }, { nr:2, art:'planen', ref:'c1sp2r1' } ] }
  ]
};
