// DTZ – Deutsch-Test für Zuwanderer – Lektion 2: Lesen — Anzeigen, Formulare, Briefe
// deutschoderwas club · Kursmaterial
window.LEKTION = {
  meta: { kurs: 'DTZ – Deutsch-Test für Zuwanderer', nr: 2, titel: 'Lesen — Anzeigen, Formulare, Briefe', level: 'A2–B1', bild: 'th-amt', dauer: 'ca. 20 Min' },
  intro: {
    text: 'Für den Leseteil hast du rund 45 Minuten und 20 Aufgaben in fünf Teilen — gut zwei Minuten pro Aufgabe. Das reicht bequem, wenn du aufhörst, jedes Wort zu lesen. Hier siebst du Anzeigen mit einem einzigen Suchwort und übersetzt Formularsprache zurück in normale Sätze.',
    du_lernst: ['Die 45 Minuten einteilen — gut zwei Minuten pro Aufgabe', 'Formularsprache entschlüsseln', 'Anzeigen zuordnen über ein Suchwort', 'Wann „keine Anzeige passt" richtig ist']
  },
  dialog: {
    bild: 'th-amt',
    situation: 'Wartebereich im Bürgeramt. Ruslan und Thi haben Nummer B 47 gezogen und üben Leseteil 3, während die Anzeigetafel weiterläuft.',
    lines: [
      { sp: 'Ruslan', txt: 'B einundvierzig. Wir sind siebenundvierzig, das dauert noch.' },
      { sp: 'Thi', txt: 'Dann machen wir Teil drei. Sechs Situationen, zehn Anzeigen.' },
      { sp: 'Ruslan', txt: 'Ich lese immer erst alle zehn Anzeigen durch. Danach weiß ich gar nichts mehr.' },
      { sp: 'Thi', txt: 'Falsch herum. Erst die Situation, dann suchst du.' },
      { sp: 'Ruslan', txt: 'Okay. Nummer eins: Frau Öztürk sucht einen Nebenjob am Wochenende.' },
      { sp: 'Thi', txt: 'Und was ist dein Suchwort?' },
      { sp: 'Ruslan', txt: 'Wochenende. Also Samstag, Sonntag.' },
      { sp: 'Thi', txt: 'Genau. Alles, wo nur Montag bis Freitag steht — weg. Du liest nicht, du siebst.' },
      { sp: 'Ruslan', txt: 'Und wenn wirklich keine passt?' },
      { sp: 'Thi', txt: 'Dann kreuzt du das x an. Das ist eine richtige Lösung, keine Notlösung. — B siebenundvierzig, Schalter drei. Los!' }
    ]
  },
  vokabeln: [
    { de: 'der Familienstand', em: '💍', bsp: 'ledig · verheiratet · geschieden · verwitwet' },
    { de: 'die Staatsangehörigkeit', em: '🌍', bsp: 'Was in deinem Pass steht.' },
    { de: 'das Geburtsdatum', em: '🎂', bsp: 'Geburtsdatum: 14.03.1991' },
    { de: 'die Anmeldung', em: '📝', bsp: 'Anmeldung bis zum 15.03. im Sekretariat.' },
    { de: 'die Unterschrift', em: '✍️', bsp: 'Ohne Unterschrift ist das Formular ungültig.' },
    { de: 'zutreffend', em: '☑️', bsp: 'Zutreffendes bitte ankreuzen.' },
    { de: 'in Blockschrift', em: '🔠', bsp: 'Bitte in Blockschrift ausfüllen.' },
    { de: 'die Frist', em: '⏰', bsp: 'Die Frist endet am Freitag.' },
    { de: 'die Gebühr', em: '💶', bsp: 'Es fällt eine Gebühr von 15 Euro an.' },
    { de: 'die Sprechzeiten', em: '🕐', bsp: 'Sprechzeiten: Di und Do, 8 bis 12 Uhr.' },
    { de: 'der Aushang', em: '📌', bsp: 'Ein Aushang im Treppenhaus.' },
    { de: 'die Hausordnung', em: '🏢', bsp: 'Die Ruhezeiten stehen in der Hausordnung.' },
    { de: 'die Voraussetzung', em: '✔️', bsp: 'Voraussetzung: Führerschein Klasse B.' },
    { de: 'entfällt', em: '➖', bsp: 'entfällt = gibt es in deinem Fall nicht' }
  ],
  grammatik: {
    title: 'Die Sprache der Ämter und Anzeigen',
    blocks: [
      {
        h: 'Formularsprache: aus Verben werden Nomen',
        txt: 'Im Gespräch sagst du einen Satz, im Formular steht ein einziges Nomen. Wenn du das Verb dahinter findest, verstehst du die Zeile sofort:',
        table: [
          ['So sagst du es', 'So steht es im Formular'],
          ['Ich melde mich an.', 'die Anmeldung'],
          ['Wann sind Sie geboren?', 'das Geburtsdatum'],
          ['Ich bin verheiratet.', 'Familienstand: verheiratet'],
          ['Bitte hier unterschreiben.', 'die Unterschrift'],
          ['Sie müssen 15 Euro bezahlen.', 'Gebühr: 15,00 Euro'],
          ['Wir sind dienstags von 8 bis 12 Uhr da.', 'Sprechzeiten: Di 8–12 Uhr']
        ],
        note: 'Formulare sprechen in Nomen. Übersetz sie im Kopf zurück in einen Satz — dann verschwindet die Angst vor der Seite.'
      },
      {
        h: 'Zuordnen in Teil 3: vom Suchwort zur Anzeige',
        txt: 'Du bekommst Situationen und mehr Anzeigen als Situationen. Für jede Situation gibt es genau ein entscheidendes Wort:',
        table: [
          ['Situation', 'Dein Suchwort', 'Passt nicht, wenn dort steht'],
          ['sucht einen Nebenjob am Wochenende', 'Wochenende / Samstag', 'nur Mo–Fr'],
          ['möchte abends Deutsch lernen', 'abends / ab 18 Uhr', 'vormittags'],
          ['will ein gebrauchtes Fahrrad kaufen', 'zu verkaufen', 'Fahrrad gesucht'],
          ['braucht Betreuung für ihr Kind', 'Kinder / Betreuung', 'ab 16 Jahren']
        ],
        note: 'Ein einziges Wort entscheidet über richtig oder falsch. Und wenn wirklich keine Anzeige passt, ist das x die vorgesehene Antwort — das ist so gebaut.'
      }
    ]
  },
  uebungen: [
    { typ: 'mc', frage: 'Wie viel Zeit hast du im Leseteil — und für wie viele Aufgaben?', optionen: ['Rund 25 Minuten für 20 Aufgaben', 'Rund 45 Minuten für 20 Aufgaben', 'Rund 30 Minuten für 10 Aufgaben'], richtig: 1, hinweis: 'Gut zwei Minuten pro Aufgabe. Das reicht — aber nur, wenn du gezielt suchst statt alles zu lesen.' },
    { typ: 'match', frage: 'Formularwort und Bedeutung — was passt?', paare: [['Familienstand', '💍 ledig, verheiratet, geschieden'], ['Staatsangehörigkeit', '🌍 dein Pass, dein Land'], ['Zutreffendes ankreuzen', '☑️ nur das, was für dich stimmt'], ['entfällt', '➖ gibt es in deinem Fall nicht'], ['Frist', '⏰ der letzte mögliche Tag']] },
    { typ: 'gapbank', frage: 'Welches Nomen gehört ins Formular?', text: 'Ort und Datum, darunter die ___. Bei Fragen: Die ___ sind dienstags von 8 bis 12 Uhr. Es fällt eine ___ von 15 Euro an.', bank: ['Unterschrift', 'Sprechzeiten', 'Gebühr', 'Frist'], loesung: ['Unterschrift', 'Sprechzeiten', 'Gebühr'], hinweis: 'Denk das Verb mit: unterschreiben → die Unterschrift, sprechen → die Sprechzeiten, bezahlen → die Gebühr.' },
    { typ: 'bild', bild: 'th-amt', frage: 'Auf dem Formular am Schalter steht: „Zutreffendes bitte ankreuzen." Was bedeutet das?', optionen: ['Alle Kästchen ankreuzen', 'Nur ankreuzen, was auf dich zutrifft', 'Gar nichts ankreuzen, das macht der Beamte'], richtig: 1, hinweis: 'zutreffend heißt: es stimmt für dich. Alles andere bleibt leer.' },
    { typ: 'order', frage: 'Bau den Satz aus der Hausordnung!', woerter: ['ist', 'Von', 'bis', 'Ruhezeit', '7', '22', 'Uhr'], loesung: 'Von 22 bis 7 Uhr ist Ruhezeit', hinweis: 'Die Zeitangabe steht auf Position 1 — das Verb steht trotzdem auf Position 2.' },
    { typ: 'mc', frage: 'In Teil 3 passt zu einer Situation keine einzige Anzeige. Was kreuzt du an?', optionen: ['Die Anzeige, die am ehesten passt', 'Nichts, du lässt es frei', 'Das x — keine Anzeige passt'], richtig: 2, hinweis: 'In der Regel bleibt genau eine Situation ohne passende Anzeige. Das x ist dafür gemacht.' },
    { typ: 'mc', frage: 'Leseteil 4: Drei Leute schreiben im Internetforum über Hunde in der Stadt. Was musst du entscheiden?', optionen: ['Wer schreibt das beste Deutsch?', 'Wie viele Hunde hat die Person?', 'Ist die Person dafür oder dagegen?'], richtig: 2, hinweis: 'In Teil 4 zählt nur die Haltung. Such nach Signalen wie „stört mich", „finde ich gut", „sollte verboten werden".' },
    { typ: 'type', frage: 'Im Formular steht die Zeile „Familienstand". Schreib deine Antwort in Formularsprache — ein einziges Wort.', muster: 'verheiratet', akzeptiert: ['ledig', 'verheiratet', 'geschieden', 'verwitwet', 'getrennt'], hinweis: 'Formulare wollen ein Wort, keinen Satz. Möglich sind: ledig, verheiratet, geschieden, verwitwet.' },
    { typ: 'listen', audio: 'Bitte füllen Sie das Formular in Blockschrift aus und vergessen Sie die Unterschrift nicht.', frage: 'Hör zu: Was sollst du tun?', optionen: ['Das Formular abgeben und warten', 'In Blockschrift schreiben und unterschreiben', 'Eine Gebühr von 15 Euro bezahlen'], richtig: 1 },
    { typ: 'mc', frage: 'Womit fängst du in Teil 3 an?', optionen: ['Mit der Situation — danach suchst du die passende Anzeige', 'Mit den Anzeigen, der Reihe nach von oben', 'Mit der letzten Anzeige, die passt meistens'], richtig: 0, hinweis: 'Erst wissen, was du suchst. Sonst liest du zehn Anzeigen und behältst keine einzige.' }
  ],
  zusammenfassung: {
    kernsaetze: [
      'Rund 45 Minuten, 20 Aufgaben, fünf Teile — gut zwei Minuten pro Aufgabe.',
      'Erst die Situation lesen, dann das Suchwort festlegen, dann die Anzeigen sieben.',
      'Zutreffendes ankreuzen · in Blockschrift ausfüllen · Frist beachten · unterschreiben.',
      'Wenn keine Anzeige passt, ist das x die richtige Antwort.',
      'Formulare sprechen in Nomen: Anmeldung, Geburtsdatum, Gebühr, Sprechzeiten.'
    ],
    merke: [
      'Du liest nicht, du <b>siebst</b>: ein Suchwort pro Situation, alles andere fliegt raus.',
      'Formularsprache = <b>Nomen statt Verb</b>. Übersetz die Zeile im Kopf in einen Satz, dann ist sie klar.',
      'Bei Meinungstexten in Teil 4 zählt nur eins: <b>dafür oder dagegen</b> — nicht die Details.'
    ],
    tipp: 'Nimm dir diese Woche einen echten Aushang vor: im Treppenhaus, im Supermarkt, an der Volkshochschule. Lies ihn mit Stoppuhr in 60 Sekunden und schreib danach drei Dinge auf: Was wird angeboten? Für wen? Bis wann? Mehr braucht der Leseteil nicht.'
  },
  sprechen: {
    task: 'Beschreib laut einen Aushang, den du kennst — vom schwarzen Brett, aus dem Hausflur, aus deiner Sprachschule. Sag in vier Sätzen: Wer schreibt? Was wird angeboten oder gesucht? Für wen ist das? Bis wann gilt es?',
    tipps: ['In diesem Aushang geht es um …', 'Angeboten wird … / Gesucht wird …', 'Das ist interessant für Leute, die …', 'Man muss sich bis … melden.']
  }
};
