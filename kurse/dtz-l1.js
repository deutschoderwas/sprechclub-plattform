// DTZ – Deutsch-Test für Zuwanderer – Lektion 1: Hören — Ansagen, Gespräche, Nachrichten
// deutschoderwas club · Kursmaterial
window.LEKTION = {
  meta: { kurs: 'DTZ – Deutsch-Test für Zuwanderer', nr: 1, titel: 'Hören — Ansagen, Gespräche, Nachrichten', level: 'A2–B1', bild: 'th-medien', dauer: 'ca. 20 Min' },
  intro: {
    text: 'Der Hörteil dauert rund 25 Minuten und hat 20 Aufgaben in vier Teilen. Die meisten Teilnehmenden verlieren hier Punkte, weil sie alles verstehen wollen — das musst du nicht. Du brauchst pro Aufgabe genau eine Information, und die steht schon in der Frage. Diese Lektion zeigt dir, wie du sie findest.',
    du_lernst: ['Die vier Hörteile und wie oft du sie hörst', 'Schlüsselwörter aus der Frage holen', 'Zeiten, Zahlen und Orte sicher hören', 'Was du getrost überhören darfst']
  },
  dialog: {
    bild: 'th-medien',
    situation: 'Aisha ruft abends ihre Kurskollegin Rana an. Beim Übungstest hat sie den ganzen ersten Hörteil verpasst — und Rana muss gleich zum Spätdienst.',
    lines: [
      { sp: 'Aisha', txt: 'Rana, hast du kurz? Das Hören macht mich echt fertig.' },
      { sp: 'Rana', txt: 'Zwei Minuten, dann muss ich los. Was war denn?' },
      { sp: 'Aisha', txt: 'Teil eins, diese Nachrichten auf dem Anrufbeantworter. Die reden so schnell — und man hört das nur einmal.' },
      { sp: 'Rana', txt: 'Nur einmal, ja. Aber du brauchst pro Ansage auch nur eine Information.' },
      { sp: 'Aisha', txt: 'Wie meinst du das? Ich verstehe doch die Hälfte nicht.' },
      { sp: 'Rana', txt: 'Musst du auch nicht. Lies vorher die Frage. Wenn da steht „Wann ist der Termin?", dann wartest du nur auf eine Uhrzeit.' },
      { sp: 'Aisha', txt: 'Und der ganze Rest?' },
      { sp: 'Rana', txt: 'Läuft an dir vorbei. Ehrlich. Ich habe im Test zwei Wörter verstanden und trotzdem das richtige Kreuz gesetzt.' },
      { sp: 'Aisha', txt: 'Okay. Und Teil drei, die Gespräche?' },
      { sp: 'Rana', txt: 'Die hörst du zweimal. Erste Runde nur zuhören, zweite Runde ankreuzen. — Sorry, mein Bus. Wir üben morgen weiter, ja?' }
    ]
  },
  vokabeln: [
    { de: 'die Ansage', em: '📢', bsp: 'Teil 1: vier Ansagen auf dem Anrufbeantworter.' },
    { de: 'der Anrufbeantworter', em: '☎️', bsp: 'Sie haben eine neue Nachricht.' },
    { de: 'die Durchsage', em: '🔊', bsp: 'Durchsagen am Bahnhof, im Kaufhaus, im Radio.' },
    { de: 'das Schlüsselwort', em: '🔑', bsp: 'Das eine Wort, auf das du wartest.' },
    { de: 'der Antwortbogen', em: '📄', bsp: 'Nur was hier steht, wird gewertet.' },
    { de: 'ankreuzen', em: '✅', bsp: 'Kreuzen Sie a, b oder c an.' },
    { de: 'die Verspätung', em: '🚆', bsp: 'Der Zug hat zwanzig Minuten Verspätung.' },
    { de: 'verschieben', em: '📅', bsp: 'Der Termin wird auf Donnerstag verschoben.' },
    { de: 'ausfallen', em: '❌', bsp: 'Der Kurs fällt morgen aus.' },
    { de: 'voraussichtlich', em: '⏳', bsp: 'wahrscheinlich, aber noch nicht sicher' },
    { de: 'Bescheid geben', em: '📞', bsp: 'Geben Sie mir bitte kurz Bescheid.' },
    { de: 'sich melden', em: '🔔', bsp: 'Bitte melden Sie sich bis Freitag.' },
    { de: 'die Meinung', em: '💬', bsp: 'In Teil 4 sagen Leute ihre Meinung.' },
    { de: 'raten', em: '🎲', bsp: 'Nichts verstanden? Trotzdem ein Kreuz setzen.' }
  ],
  grammatik: {
    title: 'Sprache in Ansagen und Durchsagen',
    blocks: [
      {
        h: 'Zeitangaben — am, um, ab, gegen, bis',
        txt: 'In fast jeder Ansage kommt eine Zeit vor. Die kleine Präposition davor sagt dir schon, welche Art von Zeit gleich folgt:',
        table: [
          ['Präposition', 'So klingt es in der Ansage', 'Was gemeint ist'],
          ['am', 'am Dienstag, am 14. März', 'ein Tag oder Datum'],
          ['um', 'um Viertel vor neun', 'eine genaue Uhrzeit'],
          ['ab', 'ab 14 Uhr geöffnet', 'von da an'],
          ['gegen', 'gegen Mittag', 'ungefähr, nicht genau'],
          ['bis', 'bis spätestens Freitag', 'eine Frist, letzter Termin']
        ],
        note: 'Hörst du „ab" oder „um", kommt sofort danach die Information, die du brauchst. Diese fünf Wörter sind dein Startsignal.'
      },
      {
        h: 'Ansage-Deutsch übersetzen',
        txt: 'Ansagen sagen dasselbe wie normale Menschen — nur umständlicher. So sieht die Übersetzung aus:',
        table: [
          ['In der Ansage', 'Gemeint ist', 'Typische Testfrage'],
          ['Der Termin wird auf Donnerstag verschoben.', 'Nicht Mittwoch, sondern Donnerstag.', 'Wann ist der Termin?'],
          ['Der Zug hat voraussichtlich 20 Minuten Verspätung.', 'Er kommt später.', 'Was ist das Problem?'],
          ['Der Deutschkurs fällt morgen aus.', 'Morgen kein Unterricht.', 'Was passiert morgen?'],
          ['Bitte melden Sie sich bis Freitag.', 'Du musst anrufen oder schreiben.', 'Was soll die Person tun?']
        ],
        note: 'Die wichtige Information steht fast immer im zweiten Teil des Satzes. Der Anfang ist nur Verpackung — Begrüßung, Name, Firma.'
      }
    ]
  },
  uebungen: [
    { typ: 'listen', audio: 'Der Termin bei Frau Doktor Ehlers wird auf Donnerstag um Viertel vor neun verschoben.', frage: 'Hör zu: Wann ist der neue Termin?', optionen: ['Mittwoch, 8:45 Uhr', 'Donnerstag, 8:45 Uhr', 'Donnerstag, 9:15 Uhr'], richtig: 1 },
    { typ: 'mc', frage: 'Wie oft hörst du die Ansagen in Teil 1?', optionen: ['Einmal', 'Zweimal', 'So oft du möchtest'], richtig: 0, hinweis: 'Teil 1 und Teil 2 laufen einmal, Teil 3 zweimal, Teil 4 wieder einmal. Wer das weiß, hört anders zu.' },
    { typ: 'mc', frage: 'Die Frage lautet: „Wann soll Herr Petrow zurückrufen?" Worauf wartest du beim Hören?', optionen: ['Auf den Namen der Firma', 'Auf eine Zeitangabe', 'Auf eine Telefonnummer'], richtig: 1, hinweis: 'Das Fragewort verrät dir das Schlüsselwort. Wann = Zeit, Wo = Ort, Was = Handlung.' },
    { typ: 'match', frage: 'Hörteil und Inhalt — was passt zusammen?', paare: [['Teil 1', '☎️ vier Nachrichten auf dem Anrufbeantworter'], ['Teil 2', '🔊 fünf Durchsagen im Bahnhof, Kaufhaus, Radio'], ['Teil 3', '🗣️ vier Alltagsgespräche, zweimal zu hören'], ['Teil 4', '💬 Leute sagen im Radio ihre Meinung']] },
    { typ: 'gapbank', frage: 'Setz die richtige Zeitpräposition ein.', text: 'Der Kurs beginnt ___ Montag ___ neun Uhr. Das Büro ist ___ 14 Uhr geschlossen, also komm vorher.', bank: ['am', 'um', 'ab', 'bis'], loesung: ['am', 'um', 'ab'], hinweis: 'am + Tag · um + genaue Uhrzeit · ab + Startzeit.' },
    { typ: 'order', frage: 'Bau den Ansagesatz!', woerter: ['wird', 'Der', 'verschoben', 'Termin', 'auf', 'Donnerstag'], loesung: 'Der Termin wird auf Donnerstag verschoben', hinweis: 'Passiv: wird steht auf Position 2, das Partizip II ganz am Ende.' },
    { typ: 'bild', bild: 'th-medien', frage: 'Du sitzt mit Kopfhörern vor dem Antwortbogen. Was machst du in der kurzen Pause vor jeder Aufgabe?', optionen: ['Die letzte Aufgabe noch einmal überdenken', 'Die Augen schließen und durchatmen', 'Die Frage lesen und das Schlüsselwort markieren', 'Auf die Uhr schauen'], richtig: 2, hinweis: 'Die Pausen sind Lesezeit, keine Erholungszeit. Wer die Frage schon kennt, hört gezielt statt panisch.' },
    { typ: 'mc', frage: 'Eine Aufgabe hast du nicht verstanden. Was tust du?', optionen: ['Nachdenken, bis es klick macht', 'Das Feld leer lassen', 'Trotzdem ankreuzen und sofort weiterhören'], richtig: 2, hinweis: 'Ein falsches Kreuz kostet dich nichts extra, ein leeres Feld ist sicher kein Punkt. Und wer grübelt, verpasst die nächste Aufgabe.' },
    { typ: 'listen', audio: 'Achtung am Gleis sieben: Der Regionalexpress nach Dortmund hat voraussichtlich zwanzig Minuten Verspätung.', frage: 'Hör zu: Was ist das Problem?', optionen: ['Der Zug fällt aus.', 'Das Gleis wurde geändert.', 'Der Zug kommt später.'], richtig: 2 },
    { typ: 'type', frage: 'Deine Kurskollegin fragt: Was machst du, wenn du in Teil 1 fast nichts verstehst? Antworte in einem Satz.', muster: 'Ich höre nur auf das Schlüsselwort aus der Frage und kreuze dann an.', akzeptiert: ['schlüsselwort', 'frage', 'kreuz', 'raten'], hinweis: 'Sag, worauf du dich konzentrierst — auf das eine Wort, nach dem die Frage verlangt.' }
  ],
  zusammenfassung: {
    kernsaetze: [
      'Teil 1 und 2 hörst du einmal, Teil 3 zweimal, Teil 4 wieder einmal.',
      'Erst die Frage lesen, dann hören — das Schlüsselwort steht schon in der Frage.',
      'Du musst nicht alles verstehen. Du musst eine Information finden.',
      'am Dienstag · um Viertel vor neun · ab 14 Uhr · gegen Mittag · bis Freitag.',
      'Ein leeres Feld ist immer falsch. Ein geratenes Kreuz kann richtig sein.'
    ],
    merke: [
      'Das Fragewort gibt dir das Schlüsselwort: <b>Wann</b> → Zeit, <b>Wo</b> → Ort, <b>Was soll man tun</b> → Handlung.',
      'Die wichtige Information kommt in Ansagen fast immer <b>im zweiten Teil des Satzes</b> — der Anfang ist Begrüßung und Verpackung.',
      'Verpasst ist verpasst: <b>Nie zurückdenken</b>, immer sofort zur nächsten Aufgabe. Die läuft nämlich schon.'
    ],
    tipp: 'Ruf diese Woche einmal am Tag eine echte Ansage an: die Terminhotline deines Arztes, die Bandansage einer Behörde, die Servicenummer deines Anbieters. Schreib danach nur auf, was du an Zeit und Handlung verstanden hast. Genau das trainiert Teil 1.'
  },
  sprechen: {
    task: 'Sprich eine Ansage auf einen Anrufbeantworter: Du musst deinen Termin am Dienstag absagen und schlägst einen neuen vor. Nenne deinen Namen, den Grund, den neuen Termin und deine Nummer — laut und in ganzen Sätzen.',
    tipps: ['Guten Tag, hier spricht … Ich rufe an wegen …', 'Leider kann ich am Dienstag nicht kommen, weil …', 'Wäre Donnerstag um Viertel vor neun möglich?', 'Bitte geben Sie mir kurz Bescheid unter der Nummer …']
  }
};
