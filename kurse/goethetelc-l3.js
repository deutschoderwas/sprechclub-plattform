// Vorbereitungstraining Goethe & telc – Lektion 3: Schreiben — der Brief, der Punkte holt
// deutschoderwas club · Kursmaterial
window.LEKTION = {
  meta: { kurs: 'Vorbereitungstraining Goethe & telc', nr: 3, titel: 'Schreiben — der Brief, der Punkte holt', level: 'A2–C1', bild: 'th-bewerbung', dauer: 'ca. 25 Min' },
  intro: {
    text: 'Ein sprachlich schöner Brief kann trotzdem durchfallen — nämlich dann, wenn ein Leitpunkt fehlt oder die Anrede nicht zum Anlass passt. Hier siehst du, wonach die Prüferin wirklich sucht, wie du in vier Absätzen alle Punkte einsammelst und mit welchen Konnektoren dein Text zusammenhält.',
    du_lernst: ['Die Bewertungskriterien', 'Alle Leitpunkte abdecken', 'Anrede und Gruß je nach Anlass', 'Konnektoren, die Punkte bringen']
  },
  dialog: {
    bild: 'th-bewerbung',
    situation: 'Korrekturgespräch am Kursende. Mehmet hat einen Beschwerdebrief an eine Sprachschule geschrieben — sauber formuliert, aber nur die halbe Punktzahl.',
    lines: [
      { sp: 'Katrin', txt: 'Sprachlich ist der Brief gut. Trotzdem nur die Hälfte der Punkte. Ahnst du, warum?' },
      { sp: 'Mehmet', txt: 'Weil ich Grammatikfehler drin habe?' },
      { sp: 'Katrin', txt: 'Nein. Weil einer von vier Leitpunkten fehlt. Der zählt für sich, egal wie schön der Rest ist.' },
      { sp: 'Mehmet', txt: 'Aber ich habe doch über alles geschrieben —' },
      { sp: 'Katrin', txt: 'Zeig mir die Stelle, an der du sagst, was du jetzt von der Schule willst.' },
      { sp: 'Mehmet', txt: 'Ähm … hier steht: „Das finde ich nicht gut."' },
      { sp: 'Katrin', txt: 'Das ist ein Gefühl, keine Forderung. Die Prüferin sucht einen Satz mit „Ich bitte Sie" oder „Ich erwarte".' },
      { sp: 'Mehmet', txt: 'Und die Anrede? Ich hatte „Liebe Sprachschule" geschrieben.' },
      { sp: 'Katrin', txt: 'An eine Einrichtung, die du nicht persönlich kennst? „Sehr geehrte Damen und Herren." Sonst kostet es dich zusätzlich beim Register.' },
      { sp: 'Mehmet', txt: 'Also: vier Leitpunkte, vier Absätze — und am Schluss klar sagen, was ich will.' }
    ]
  },
  vokabeln: [
    { de: 'der Leitpunkt', em: '📍', bsp: 'Vier Vorgaben in der Aufgabe. Vier Absätze im Brief.' },
    { de: 'alle Punkte abdecken', em: '☑️', bsp: 'Ein vergessener Leitpunkt kostet ein Viertel im Inhalt.' },
    { de: 'die Textsorte', em: '🗂️', bsp: 'Brief, E-Mail, Forumsbeitrag — jede hat ihre Form.' },
    { de: 'der Betreff', em: '📎', bsp: 'Beschwerde: Kurs A2 vom 3. März' },
    { de: 'die Anrede', em: '🙋', bsp: 'Sehr geehrte Damen und Herren,' },
    { de: 'der Bezugssatz', em: '🔗', bsp: 'ich habe im März an Ihrem Kurs teilgenommen.' },
    { de: 'sich beschweren', em: '😤', bsp: 'Ich möchte mich über den Ausfall beschweren.' },
    { de: 'eine Bitte formulieren', em: '🙏', bsp: 'Ich bitte Sie, mir den Beitrag zu erstatten.' },
    { de: 'die Forderung', em: '📢', bsp: 'Ich erwarte eine Antwort bis zum 30. April.' },
    { de: 'die Grußformel', em: '👋', bsp: 'Mit freundlichen Grüßen' },
    { de: 'das Register', em: '🎚️', bsp: 'formell oder locker — nie im selben Text mischen' },
    { de: 'der Absatz', em: '📄', bsp: 'Ein Leitpunkt, ein Absatz. Das sieht die Prüferin sofort.' },
    { de: 'der Konnektor', em: '⛓️', bsp: 'deshalb, allerdings, außerdem, trotzdem' },
    { de: 'die Wortanzahl', em: '📏', bsp: 'Zu kurz kostet Punkte. Zu lang kostet Zeit.' },
    { de: 'die Höflichkeit', em: '🤝', bsp: 'Auch eine Beschwerde bleibt freundlich.' },
    { de: 'die schriftliche Bestätigung', em: '📨', bsp: 'Ich bitte Sie um eine kurze schriftliche Bestätigung.' }
  ],
  grammatik: {
    title: 'Was die Prüfung von dir will',
    blocks: [
      {
        h: 'Die Kriterien — dafür gibt es Punkte',
        txt: 'Die Prüferin hat einen Bewertungsbogen mit einer Spalte pro Kriterium. Sie sucht nicht nach Fehlern, sie hakt ab. Wenn sie etwas nicht findet, kann sie es nicht bewerten:',
        table: [
          ['Kriterium', 'Wonach die Prüferin sucht', 'Was Punkte kostet'],
          ['Inhalt', 'alle vier Leitpunkte, jeder mit zwei bis drei Sätzen', 'ein Leitpunkt fehlt oder wird nur gestreift'],
          ['Aufbau', 'Anrede, Einleitung, Absätze, Schluss, Gruß', 'ein Textblock ohne Absätze'],
          ['Wortschatz', 'passende Ausdrücke, Konnektoren, Variation', 'dreimal derselbe Satzanfang'],
          ['Korrektheit', 'Satzbau, Endungen, Zeichensetzung', 'Fehler, die das Verstehen stören'],
          ['Register', 'durchgehend formell oder durchgehend locker', 'Mischung aus „Sehr geehrte" und „Ciao"']
        ],
        note: 'Inhalt ist das teuerste Kriterium. Ein einfacher, aber vollständiger Brief bekommt mehr Punkte als ein eleganter, in dem ein Leitpunkt fehlt.'
      },
      {
        h: 'Anrede und Gruß — je nach Anlass',
        txt: 'Die Textsorte entscheidet über die erste und die letzte Zeile. Diese beiden Zeilen sieht die Prüferin zuerst:',
        table: [
          ['Anlass', 'Anrede', 'Gruß'],
          ['Beschwerde an eine Firma, kein Name bekannt', 'Sehr geehrte Damen und Herren,', 'Mit freundlichen Grüßen'],
          ['E-Mail an eine Sachbearbeiterin mit Namen', 'Sehr geehrte Frau Kern,', 'Mit freundlichen Grüßen'],
          ['Anfrage bei einem Verein, lockerer Ton', 'Guten Tag, Herr Lehmann,', 'Viele Grüße'],
          ['Nachricht an eine Freundin', 'Liebe Sofia,', 'Liebe Grüße'],
          ['Beitrag in einem Kursforum', 'Hallo zusammen,', 'Bis bald']
        ],
        note: 'Nach der Anrede steht ein Komma, und danach geht es klein weiter: „Sehr geehrte Damen und Herren, ich habe im März …"'
      }
    ]
  },
  uebungen: [
    { typ: 'mc', frage: 'Ein Brief ist fast fehlerfrei, behandelt aber nur drei von vier Leitpunkten. Was passiert?', optionen: ['Nichts, die Sprache zählt am meisten.', 'Im Kriterium Inhalt fehlt ein Viertel der Punkte.', 'Der Brief wird gar nicht bewertet.'], richtig: 1, hinweis: 'Inhalt wird nach Leitpunkten abgehakt, nicht nach Gefühl.' },
    { typ: 'mc', frage: 'Du schreibst an eine Sprachschule und kennst niemanden dort persönlich. Welche Anrede?', optionen: ['Liebe Sprachschule,', 'Hallo Team,', 'Sehr geehrte Damen und Herren,'], richtig: 2, hinweis: 'Ohne Namen und im formellen Anlass gibt es nur diese eine Formel.' },
    { typ: 'mc', frage: 'Welcher Satz ist eine Forderung und kein Gefühl?', optionen: ['Ich bitte Sie, mir den Kursbeitrag zurückzuerstatten.', 'Das finde ich wirklich nicht gut.', 'Ich war sehr enttäuscht von Ihrem Kurs.'], richtig: 0, hinweis: 'Eine Forderung nennt eine Handlung, die der andere tun soll.' },
    { typ: 'match', frage: 'Anlass und passende Anrede — was gehört zusammen?', paare: [['Beschwerde an eine Firma ohne Ansprechpartner', '🏛️ Sehr geehrte Damen und Herren,'], ['E-Mail an Frau Kern im Kundenservice', '📇 Sehr geehrte Frau Kern,'], ['Nachricht an eine Freundin', '💬 Liebe Sofia,'], ['Beitrag im Kursforum', '👥 Hallo zusammen,'], ['lockere Anfrage bei einem Sportverein', '⚽ Guten Tag, Herr Lehmann,']] },
    { typ: 'gapbank', frage: 'Verbinde die Sätze mit den passenden Konnektoren.', text: 'Ich habe den Kurs im Januar gebucht, ___ er hat nie stattgefunden. ___ bitte ich Sie um eine Rückzahlung. ___ erwarte ich eine kurze schriftliche Bestätigung.', bank: ['aber', 'Deshalb', 'Außerdem', 'Trotzdem'], loesung: ['aber', 'Deshalb', 'Außerdem'], hinweis: 'aber verbindet den Gegensatz, deshalb zieht die Folge, außerdem hängt an.' },
    { typ: 'order', frage: 'Bau den Bittsatz für den Schlussabsatz!', woerter: ['Sie', 'Ich', 'schriftliche', 'um', 'bitte', 'Bestätigung', 'eine'], loesung: 'Ich bitte Sie um eine schriftliche Bestätigung', hinweis: 'bitten + Akkusativ der Person + um + Akkusativ der Sache.' },
    { typ: 'listen', audio: 'Sehr geehrte Frau Bergmann, ich beziehe mich auf Ihr Schreiben vom zwölften Mai.', frage: 'Hör zu: Welches Register hörst du?', optionen: ['locker, unter Freunden', 'formell, an eine Behörde oder Firma', 'unhöflich und fordernd'], richtig: 1 },
    { typ: 'bild', bild: 'th-bewerbung', frage: 'Du schreibst eine Bewerbungs-E-Mail. Was gehört in die allererste Zeile?', optionen: ['Deine Telefonnummer', 'Ein Dankeschön für die Aufmerksamkeit', 'Ein Betreff, der den Anlass nennt', 'Dein vollständiger Lebenslauf'], richtig: 2, hinweis: 'Der Betreff sagt in einer Zeile, worum es geht — und wird mitbewertet.' },
    { typ: 'mc', frage: 'Wie viele Absätze hat ein guter Prüfungsbrief mit vier Leitpunkten?', optionen: ['Einen, damit es zusammenhängend wirkt', 'So viele wie möglich, das sieht ordentlich aus', 'Vier plus Anrede und Gruß — ein Punkt pro Absatz'], richtig: 2, hinweis: 'Die Absätze zeigen der Prüferin, wo sie welchen Leitpunkt abhaken kann.' },
    { typ: 'type', frage: 'Schreib den Schlusssatz deiner Beschwerde: Du willst dein Geld bis Ende April zurück.', muster: 'Ich bitte Sie, mir den Kursbeitrag bis zum 30. April zurückzuerstatten.', akzeptiert: ['ich bitte sie', 'ich erwarte', 'ich möchte sie bitten', 'ich fordere sie auf'], hinweis: 'Nenne die Handlung und die Frist. Höflich bleiben, aber konkret werden.' }
  ],
  zusammenfassung: {
    kernsaetze: [
      'Sehr geehrte Damen und Herren, ich beziehe mich auf …',
      'Ich habe im März an Ihrem Kurs teilgenommen.',
      'Leider hat der Unterricht mehrfach nicht stattgefunden.',
      'Deshalb bitte ich Sie, mir den Beitrag zu erstatten.',
      'Vielen Dank im Voraus. Mit freundlichen Grüßen'
    ],
    merke: [
      '<b>Ein Leitpunkt, ein Absatz.</b> Vier Vorgaben in der Aufgabe heißen vier Absätze im Brief.',
      'Anrede und Gruß gehören zusammen: <b>Sehr geehrte … / Mit freundlichen Grüßen</b> — nie mischen.',
      'Ein Gefühl bringt keine Punkte, eine <b>Forderung</b> schon: <b>Ich bitte Sie, … zu …</b>'
    ],
    tipp: 'Nimm dir eine echte Prüfungsaufgabe und markier die vier Leitpunkte mit vier Farben. Schreib den Brief und mal danach dieselben vier Farben an den Rand. Wo eine Farbe fehlt, fehlen Punkte — das siehst du in drei Sekunden.'
  },
  sprechen: {
    task: 'Sprich deinen Beschwerdebrief laut, Absatz für Absatz. Sag vor jedem Absatz, welchen Leitpunkt du gerade abdeckst — so hörst du sofort, wenn einer fehlt.',
    tipps: ['Erster Punkt — warum ich schreibe: …', 'Zweiter Punkt — was passiert ist: …', 'Dritter Punkt — was ich mir wünsche: …', 'Vierter Punkt — bis wann ich eine Antwort erwarte: …']
  }
};
