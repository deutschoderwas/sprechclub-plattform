// Vorbereitungstraining Goethe & telc – Lektion 4: Sprachbausteine — die Muster, die immer kommen
// deutschoderwas club · Kursmaterial
window.LEKTION = {
  meta: { kurs: 'Vorbereitungstraining Goethe & telc', nr: 4, titel: 'Sprachbausteine — die Muster, die immer kommen', level: 'A2–C1', bild: 'th-sprache', dauer: 'ca. 25 Min' },
  intro: {
    text: 'Die Sprachbausteine sind der Prüfungsteil, in dem sich Lernen am schnellsten auszahlt. Bei telc heißt er so; bei Goethe stecken dieselben Lücken ab B2 im Lesen-Modul. Es sind immer dieselben Verben mit denselben Präpositionen, dieselben Konnektoren, dieselben Briefformeln. Wer die Muster kennt, füllt diesen Teil in acht Minuten und holt Punkte, die anderswo Arbeit kosten.',
    du_lernst: ['Verben mit fester Präposition', 'Konnektoren und Satzstellung', 'Feste Wendungen im Brief', 'Lücken systematisch lösen']
  },
  dialog: {
    bild: 'th-sprache',
    situation: 'Marta bringt ihren korrigierten Lückentext mit. Vier Fehler — und Herr Demir zeigt ihr, dass es in Wahrheit nur einer ist.',
    lines: [
      { sp: 'Herr Demir', txt: 'Vier Fehler, Marta. Und alle vier sind dieselbe Sache.' },
      { sp: 'Marta', txt: 'Wirklich? Für mich sahen die völlig verschieden aus.' },
      { sp: 'Herr Demir', txt: 'Nummer 12: „Ich freue mich ___ Ihre Antwort." Du hast über eingesetzt.' },
      { sp: 'Marta', txt: 'Ja, weil man sich über etwas freut.' },
      { sp: 'Herr Demir', txt: 'Über etwas, das schon da ist. Auf etwas, das noch kommt. Die Antwort kommt erst.' },
      { sp: 'Marta', txt: 'Und Nummer 15, „Ich bewerbe mich ___ die Stelle"? Da hatte ich für.' },
      { sp: 'Herr Demir', txt: 'Um. Immer um. Das musst du nicht verstehen, das musst du wissen.' },
      { sp: 'Marta', txt: 'Das ist doch stumpfes Auswendiglernen.' },
      { sp: 'Herr Demir', txt: 'Ist es. Zwanzig Verben, zwei Wochen — und dann ist dieser ganze Prüfungsteil geschenkt. Die Prüfung nimmt jedes Mal dieselben.' },
      { sp: 'Marta', txt: 'Gut. Zwanzig Karten, jeden Abend fünf Minuten.' }
    ]
  },
  vokabeln: [
    { de: 'sich bewerben um', em: '📮', bsp: 'Ich bewerbe mich um die Stelle als Pflegehelferin.' },
    { de: 'sich freuen auf', em: '🎉', bsp: 'auf etwas, das noch kommt' },
    { de: 'sich freuen über', em: '😊', bsp: 'über etwas, das schon da ist' },
    { de: 'warten auf', em: '⌛', bsp: 'Ich warte seit drei Wochen auf den Bescheid.' },
    { de: 'sich interessieren für', em: '🔍', bsp: 'Ich interessiere mich für Ihr Kursangebot.' },
    { de: 'teilnehmen an', em: '🙋', bsp: 'Ich habe an dem Abendkurs teilgenommen.' },
    { de: 'achten auf', em: '👁️', bsp: 'Achten Sie bitte auf die Uhrzeit.' },
    { de: 'sich beziehen auf', em: '📌', bsp: 'Ich beziehe mich auf Ihre Anzeige vom 3. Mai.' },
    { de: 'verantwortlich sein für', em: '🧾', bsp: 'Wer ist für die Anmeldung verantwortlich?' },
    { de: 'es geht um', em: '🎯', bsp: 'In der Anzeige geht es um eine Teilzeitstelle.' },
    { de: 'Vielen Dank im Voraus.', em: '🙏', bsp: 'Standardformel am Briefende' },
    { de: 'Für Rückfragen stehe ich zur Verfügung.', em: '📞', bsp: 'kommt in fast jeder Bewerbung vor' },
    { de: 'je … desto', em: '⚖️', bsp: 'Je länger ich hier lebe, desto leichter fällt es mir.' },
    { de: 'entweder … oder', em: '🔀', bsp: 'Entweder am Montag oder am Mittwoch.' },
    { de: 'obwohl / trotzdem', em: '🚧', bsp: 'Obwohl ich arbeite, schaffe ich drei Abende.' },
    { de: 'weder … noch', em: '🚫', bsp: 'Ich habe weder eine Bestätigung noch eine Rechnung erhalten.' }
  ],
  grammatik: {
    title: 'Was die Prüfung von dir will',
    blocks: [
      {
        h: 'Verben mit fester Präposition — die Liste, die jedes Mal kommt',
        txt: 'Die Präposition gehört zum Verb wie die Endung. Sie hat nichts mit Logik zu tun, und sie ist nicht verhandelbar. Lern das Verb nie ohne sie:',
        table: [
          ['Verb + Präposition', 'Kasus', 'So steht es in der Prüfung'],
          ['sich bewerben um', 'Akkusativ', 'Ich bewerbe mich um die ausgeschriebene Stelle.'],
          ['sich freuen auf', 'Akkusativ', 'Ich freue mich auf Ihre Antwort.'],
          ['sich freuen über', 'Akkusativ', 'Ich habe mich sehr über Ihre Zusage gefreut.'],
          ['warten auf', 'Akkusativ', 'Wir warten auf den Bescheid.'],
          ['sich interessieren für', 'Akkusativ', 'Ich interessiere mich für Ihr Angebot.'],
          ['sich beziehen auf', 'Akkusativ', 'Ich beziehe mich auf Ihr Schreiben vom 3. Mai.'],
          ['teilnehmen an', 'Dativ', 'Ich habe an dem Kurs teilgenommen.'],
          ['achten auf', 'Akkusativ', 'Bitte achten Sie auf die Frist.']
        ],
        note: 'Merkhilfe für die häufigste Falle: auf = es kommt noch · über = es ist schon passiert. Freu dich auf den Urlaub, freu dich über das Geschenk.'
      },
      {
        h: 'Konnektoren — welches Wort schiebt das Verb wohin?',
        txt: 'In den Sprachbausteinen steht die Lücke fast immer vor einem Nebensatz oder am Satzanfang. Wenn du weißt, wo das Verb landet, weißt du, welches Wort passt:',
        table: [
          ['Konnektor', 'Bedeutung', 'Wo steht das Verb?', 'Beispiel'],
          ['weil', 'Grund', 'ganz am Ende', 'Ich komme später, weil der Bus ausfällt.'],
          ['deshalb', 'Folge', 'direkt danach', 'Der Bus fällt aus, deshalb komme ich später.'],
          ['obwohl', 'Gegensatz im Nebensatz', 'ganz am Ende', 'Obwohl ich arbeite, mache ich den Kurs.'],
          ['trotzdem', 'Gegensatz im Hauptsatz', 'direkt danach', 'Ich arbeite, trotzdem mache ich den Kurs.'],
          ['damit', 'Absicht', 'ganz am Ende', 'Ich übe täglich, damit ich sicherer werde.'],
          ['sondern', 'Korrektur nach nein', 'normale Stellung', 'Nicht am Montag, sondern am Mittwoch.']
        ],
        note: 'Vier Wörter reichen für die meisten Lücken: weil und obwohl schieben das Verb ans Ende, deshalb und trotzdem ziehen es sofort nach vorn.'
      }
    ]
  },
  uebungen: [
    { typ: 'mc', frage: 'Ich freue mich ___ Ihre Antwort.', optionen: ['auf', 'über', 'für'], richtig: 0, hinweis: 'Die Antwort kommt erst noch — und was noch kommt, bekommt auf.' },
    { typ: 'mc', frage: 'Ich bewerbe mich ___ die Stelle als Pflegehelferin.', optionen: ['für', 'um', 'auf'], richtig: 1, hinweis: 'sich bewerben hat nur eine Präposition, und die heißt um.' },
    { typ: 'mc', frage: 'Welcher Satz ist richtig?', optionen: ['Ich beziehe mich an Ihre Anzeige vom 3. Mai.', 'Ich beziehe mich über Ihre Anzeige vom 3. Mai.', 'Ich beziehe mich auf Ihre Anzeige vom 3. Mai.'], richtig: 2, hinweis: 'sich beziehen auf + Akkusativ — der Standardeinstieg jeder Bewerbung.' },
    { typ: 'gapbank', frage: 'Setz die richtigen Präpositionen und die feste Wendung ein.', text: 'Ich interessiere mich ___ Ihren Abendkurs und möchte ___ dem Unterricht im Herbst teilnehmen. Für Rückfragen ___ ich Ihnen gern zur Verfügung.', bank: ['für', 'an', 'stehe', 'auf'], loesung: ['für', 'an', 'stehe'], hinweis: 'teilnehmen verlangt an + Dativ. Die Schlussformel ist auswendig zu lernen.' },
    { typ: 'gapbank', frage: 'Welcher Konnektor passt — achte darauf, wo das Verb steht.', text: 'Ich habe wenig Zeit, ___ melde ich mich für den Intensivkurs an. ___ ich voll berufstätig bin, schaffe ich drei Abende pro Woche.', bank: ['deshalb', 'Obwohl', 'weil', 'Trotzdem'], loesung: ['deshalb', 'Obwohl'], hinweis: 'Nach deshalb kommt sofort das Verb. Nach obwohl wandert es ans Satzende.' },
    { typ: 'match', frage: 'Verb und feste Ergänzung — was gehört zusammen?', paare: [['sich bewerben', '📮 um die ausgeschriebene Stelle'], ['warten', '⌛ auf den Bescheid'], ['teilnehmen', '🙋 an einem Abendkurs'], ['sich interessieren', '🔍 für das Kursangebot'], ['achten', '👁️ auf die Anmeldefrist']] },
    { typ: 'order', frage: 'Bau die Schlussformel!', woerter: ['im', 'Dank', 'Vielen', 'Ihre', 'für', 'Voraus', 'Mühe'], loesung: 'Vielen Dank im Voraus für Ihre Mühe', hinweis: 'Erst der Dank, dann die Zeitangabe, dann wofür.' },
    { typ: 'listen', audio: 'Je länger ich hier lebe, desto leichter fällt mir die Sprache.', frage: 'Hör zu: Welche Struktur wird benutzt?', optionen: ['entweder … oder', 'je … desto', 'weder … noch'], richtig: 1 },
    { typ: 'bild', bild: 'th-sprache', frage: 'Im Lückentext fehlt ein kleines Wort mitten im Satz. Was prüfst du zuerst?', optionen: ['Wie lang die Lücke gedruckt ist', 'Ob der Satz schön klingt', 'Wie viele Lücken es insgesamt gibt', 'Welches Verb im Satz steht — es bestimmt die Präposition'], richtig: 3, hinweis: 'Die Lücke gehört fast nie zum Nomen, sondern zum Verb davor oder dahinter.' },
    { typ: 'type', frage: 'Schreib den Standardsatz, mit dem du dich in einer Bewerbung auf eine Anzeige beziehst.', muster: 'Ich beziehe mich auf Ihre Anzeige vom 3. Mai in der Rheinischen Post.', akzeptiert: ['beziehe mich auf', 'mit bezug auf', 'in bezug auf'], hinweis: 'Der Satz nennt immer die Quelle und das Datum.' }
  ],
  zusammenfassung: {
    kernsaetze: [
      'Ich beziehe mich auf Ihre Anzeige vom …',
      'Ich interessiere mich für Ihr Angebot und bewerbe mich um die Stelle.',
      'Ich habe an dem Kurs teilgenommen und warte auf den Bescheid.',
      'Für Rückfragen stehe ich Ihnen gern zur Verfügung.',
      'Vielen Dank im Voraus für Ihre Mühe.'
    ],
    merke: [
      'Lern jedes Verb <b>mit seiner Präposition</b> als ein Wort: sich bewerben <b>um</b> · teilnehmen <b>an</b> · achten <b>auf</b>.',
      '<b>auf</b> = es kommt noch · <b>über</b> = es ist schon passiert. Das entscheidet die häufigste Lücke der Prüfung.',
      '<b>weil</b> und <b>obwohl</b> schieben das Verb ans Ende, <b>deshalb</b> und <b>trotzdem</b> ziehen es nach vorn.'
    ],
    tipp: 'Schreib dir zwanzig Karten: vorn das Verb ohne Präposition, hinten der ganze Beispielsatz. Fünf Minuten am Abend, zwei Wochen lang. Danach ist dieser Prüfungsteil der Teil, in dem du Zeit gewinnst statt verlierst.'
  },
  sprechen: {
    task: 'Sprich zehn Sätze über deine eigene Situation — jeder Satz muss ein Verb mit fester Präposition enthalten. Sag laut, worauf du wartest, wofür du dich interessierst, worum du dich beworben hast.',
    tipps: ['Ich interessiere mich für …', 'Ich warte gerade auf …', 'Ich habe mich um … beworben.', 'Ich nehme an … teil.']
  }
};
