/* ============================================================
   deutschoderwas club — HÖREN A2 (Start Deutsch 2)

   Aufbau nach dem offiziellen Prüfungsformat des Goethe-Zertifikats A2
   (Start Deutsch 2): vier Teile, 20 Aufgaben, 30 Minuten, ein Viertel
   der Gesamtprüfung.

     Teil 1  Fünf kurze Gespräche im Alltag        · zweimal hören
     Teil 2  Fünf Durchsagen — richtig oder falsch · einmal hören
     Teil 3  Fünf Nachrichten auf dem Anrufbeantworter · einmal hören
     Teil 4  Fünf Meinungen im Radio               · zweimal hören

   Jede Aufgabe trägt die Fundstelle im Text (`stelle`) und eine
   Erklärung, die sagt, woran man es hört — nicht nur, was richtig ist.

   Aufbau der Daten wie in hoeren-a1.js, damit pruefung-hoeren.js
   beide Niveaus ohne Änderung anzeigen kann.
   ============================================================ */
window.HOEREN_A2 = {
  niveau: 'A2',
  pruefung: 'Start Deutsch 2',
  minuten: 30,
  punkte: 20,

  stufen: [
    { nr:1, titel:'Zahlen, Zeiten und Preise', zeichen:'🔢',
      was:'Auf A2 wird es genauer: nicht mehr „um acht", sondern „Viertel vor acht". Nicht 20 Euro, sondern 19,90. Genau diese Feinheiten entscheiden über den Punkt.' },
    { nr:2, titel:'Die Änderung heraushören', zeichen:'🔄',
      was:'In fast jeder Durchsage steht zuerst der Plan und dann die Änderung. Wer nur den Anfang hört, kreuzt falsch an. Achte auf leider, statt, heute ausnahmsweise und stattdessen.' },
    { nr:3, titel:'Wer will was?', zeichen:'💬',
      was:'In Gesprächen reden zwei Menschen mit verschiedenen Wünschen. Die Frage fragt immer nach einer bestimmten Person — hör darauf, wer den Satz sagt.' },
    { nr:4, titel:'Meinung und Begründung', zeichen:'⚖️',
      was:'Im letzten Teil sagen Leute ihre Meinung. Wichtig ist nicht das Thema, sondern ob jemand dafür oder dagegen ist — und warum.' }
  ],

  bloecke: [
    { id:'h2b1', stufe:1, titel:'Zahlen, Zeiten und Preise', kurz:'Uhrzeiten, Preise, Nummern',
      ziel:'Du hörst Zahlen sicher heraus, auch wenn sie ähnlich klingen.',
      zeichen:'🔢', farbe:'#1F5FD1',
      aufgaben:[
        { art:'hoerwahl', wer:'Frau', text:'Der Zug fährt um Viertel vor acht, nicht um Viertel nach acht.',
          frage:'Wann fährt der Zug?', opt:['Um 7.45 Uhr','Um 8.15 Uhr','Um 8.45 Uhr'], loesung:0,
          stelle:'um Viertel vor acht',
          erklaerung:'Viertel vor acht heißt 7.45 Uhr — eine Viertelstunde VOR acht. Viertel nach acht wäre 8.15 Uhr.' },
        { art:'hoerwahl', wer:'Mann', text:'Das macht dann neunzehn Euro neunzig, bitte.',
          frage:'Was kostet es?', opt:['19,90 €','90,19 €','19,19 €'], loesung:0,
          stelle:'neunzehn Euro neunzig',
          erklaerung:'Zuerst kommen die Euro, dann die Cent: neunzehn Euro und neunzig Cent.' },
        { art:'hoerwahl', wer:'Frau', text:'Meine neue Nummer ist null eins sieben sechs, dreiundzwanzig, achtundvierzig, sechzig.',
          frage:'Wie lautet die Nummer?', opt:['0176 23 48 60','0176 32 84 60','0176 23 84 60'], loesung:0,
          stelle:'dreiundzwanzig, achtundvierzig',
          erklaerung:'Dreiundzwanzig ist 23, achtundvierzig ist 48. Im Deutschen kommt die Einerzahl zuerst — hör auf das und.' },
        { art:'hoerwahl', wer:'Mann', text:'Wir treffen uns halb sieben vor dem Kino, dann schaffen wir den Film um sieben.',
          frage:'Wann treffen sich die beiden?', opt:['Um 18.30 Uhr','Um 19.30 Uhr','Um 19.00 Uhr'], loesung:0,
          stelle:'halb sieben',
          erklaerung:'Halb sieben heißt 6.30 Uhr, abends also 18.30. Der Film läuft danach um sieben.' },
        { art:'hoerwahl', wer:'Frau', text:'Die Wohnung kostet sechshundertfünfzig Euro kalt, dazu kommen hundertzwanzig Euro Nebenkosten.',
          frage:'Wie hoch ist die Kaltmiete?', opt:['650 €','770 €','120 €'], loesung:0,
          stelle:'sechshundertfünfzig Euro kalt',
          erklaerung:'Kalt heißt ohne Nebenkosten. 650 € ist die Kaltmiete, 770 € wäre warm.' },
        { art:'hoerwahl', wer:'Mann', text:'Der Kurs geht acht Wochen, immer dienstags und donnerstags.',
          frage:'Wie oft in der Woche ist der Kurs?', opt:['Zweimal','Achtmal','Einmal'], loesung:0,
          stelle:'dienstags und donnerstags',
          erklaerung:'Zwei Tage in der Woche — acht Wochen ist die ganze Dauer, nicht die Häufigkeit.' },
        { art:'hoerwahl', wer:'Frau', text:'Der Termin ist am dreizehnten März, nicht am dreißigsten.',
          frage:'Wann ist der Termin?', opt:['Am 13. März','Am 30. März','Am 3. März'], loesung:0,
          stelle:'am dreizehnten März',
          erklaerung:'Dreizehnter und dreißigster klingen ähnlich. Achte auf die Endung: -zehnten gegen -ßigsten.' },
        { art:'hoerwahl', wer:'Mann', text:'Wir haben von neun bis achtzehn Uhr geöffnet, am Samstag nur bis vierzehn Uhr.',
          frage:'Wann schließt das Geschäft am Samstag?', opt:['Um 14 Uhr','Um 18 Uhr','Um 9 Uhr'], loesung:0,
          stelle:'am Samstag nur bis vierzehn Uhr',
          erklaerung:'Der zweite Satzteil gilt für Samstag. Das Wörtchen nur zeigt an, dass hier etwas anders ist.' }
      ] },

    { id:'h2b2', stufe:2, titel:'Die Änderung heraushören', kurz:'Plan, dann Änderung',
      ziel:'Du erkennst, was wirklich gilt — auch wenn zuerst etwas anderes gesagt wurde.',
      zeichen:'🔄', farbe:'#DD0000',
      aufgaben:[
        { art:'hoerwahl', wer:'Mann', text:'Der Deutschkurs findet heute ausnahmsweise nicht in Raum zwölf statt, sondern in Raum drei.',
          frage:'In welchem Raum ist der Kurs heute?', opt:['In Raum 3','In Raum 12','In Raum 30'], loesung:0,
          stelle:'sondern in Raum drei',
          erklaerung:'Nach sondern kommt, was wirklich gilt. Raum zwölf war der ursprüngliche Plan.' },
        { art:'hoerwahl', wer:'Frau', text:'Der Arzt kommt heute später. Statt um zehn beginnt die Sprechstunde erst um elf.',
          frage:'Wann beginnt die Sprechstunde?', opt:['Um 11 Uhr','Um 10 Uhr','Um 12 Uhr'], loesung:0,
          stelle:'statt um zehn … erst um elf',
          erklaerung:'Statt zeigt die alte Zeit an, erst die neue. Die neue Zeit gilt.' },
        { art:'hoerwahl', wer:'Mann', text:'Die Lieferung kommt leider nicht am Freitag. Wir bringen das Paket am Montag zwischen acht und zwölf.',
          frage:'Wann kommt das Paket?', opt:['Am Montag','Am Freitag','Am Dienstag'], loesung:0,
          stelle:'Wir bringen das Paket am Montag',
          erklaerung:'Nach leider nicht steht immer, was ausfällt. Der zweite Satz nennt den neuen Termin.' },
        { art:'hoerwahl', wer:'Frau', text:'Das Schwimmbad ist wegen einer Reparatur bis Ende der Woche geschlossen. Ab Montag sind wir wieder für Sie da.',
          frage:'Ab wann ist das Schwimmbad wieder offen?', opt:['Ab Montag','Ab Ende der Woche','Ab heute'], loesung:0,
          stelle:'Ab Montag sind wir wieder für Sie da',
          erklaerung:'Bis Ende der Woche sagt, wie lange zu ist. Ab Montag sagt, wann wieder offen ist.' },
        { art:'hoerwahl', wer:'Mann', text:'Achtung: Die Linie sechs fährt heute nicht bis zum Hauptbahnhof, sondern nur bis zum Marktplatz.',
          frage:'Wo endet die Linie 6 heute?', opt:['Am Marktplatz','Am Hauptbahnhof','An der Schule'], loesung:0,
          stelle:'sondern nur bis zum Marktplatz',
          erklaerung:'Nur bis grenzt ein: weiter fährt der Bus heute nicht.' },
        { art:'hoerwahl', wer:'Frau', text:'Ihr Tisch für vier Personen ist reserviert. Können Sie statt um neunzehn Uhr schon um achtzehn Uhr dreißig kommen?',
          frage:'Wann soll der Gast kommen?', opt:['Um 18.30 Uhr','Um 19 Uhr','Um 16 Uhr'], loesung:0,
          stelle:'schon um achtzehn Uhr dreißig',
          erklaerung:'Die Frage mit statt bittet um die frühere Zeit — 18.30 Uhr.' },
        { art:'hoerwahl', wer:'Mann', text:'Der Vortrag beginnt eine halbe Stunde später als geplant, also erst um zwanzig Uhr.',
          frage:'Wann beginnt der Vortrag?', opt:['Um 20 Uhr','Um 19.30 Uhr','Um 20.30 Uhr'], loesung:0,
          stelle:'also erst um zwanzig Uhr',
          erklaerung:'Nach also steht die fertige Uhrzeit — du musst nicht selbst rechnen.' },
        { art:'hoerwahl', wer:'Frau', text:'Frau Berger ist heute im Homeoffice. Sie erreichen sie nicht im Büro, aber gern auf dem Handy.',
          frage:'Wie erreicht man Frau Berger heute?', opt:['Auf dem Handy','Im Büro','Gar nicht'], loesung:0,
          stelle:'aber gern auf dem Handy',
          erklaerung:'Nach aber kommt die Möglichkeit, die bleibt.' }
      ] }
  ],
