// Deutsch für Büro & Logistik – Lektion 4: Lieferung und Reklamation
// deutschoderwas club · Kursmaterial
window.LEKTION = {
  meta: { kurs: 'Deutsch für Büro & Logistik', nr: 4, titel: 'Lieferung und Reklamation', level: 'A2–B2', bild: 'th-wirtschaft', dauer: 'ca. 18 Min' },
  intro: {
    text: 'Wenn die Palette aufgerissen ankommt oder die Ware zwei Wochen zu spät kommt, entscheidet die Sprache, ob daraus Streit wird oder eine Lösung. Du meldest Schäden sachlich im Passiv, setzt Fristen, die wirklich halten, und fasst nach, ohne den Ton zu verlieren.',
    du_lernst: ['Schäden sachlich melden statt anklagen', 'Passiv: wird angenommen, wurde geliefert', 'Fristen setzen: bis spätestens, innerhalb von', 'Nachfassen, ohne unhöflich zu werden']
  },
  dialog: {
    bild: 'th-wirtschaft',
    situation: 'Wareneingang bei Nordfracht, kurz nach sieben. Nguyen hat gerade abgeladen und holt Amir aus der Disposition dazu — der Fahrer will weiter.',
    lines: [
      { sp: 'Nguyen', txt: 'Amir, komm mal runter. Die Palette vom Lieferanten — die Folie ist aufgerissen, zwei Kartons sind eingedrückt.' },
      { sp: 'Amir', txt: 'Hast du das fotografiert?' },
      { sp: 'Nguyen', txt: 'Drei Bilder, noch vor dem Abladen. Der Fahrer steht daneben und will los.' },
      { sp: 'Amir', txt: 'Dann bitte nichts unterschreiben, solange der Schaden nicht auf dem Lieferschein vermerkt ist.' },
      { sp: 'Nguyen', txt: 'Er sagt, er hat die Palette so übernommen und keine Zeit.' },
      { sp: 'Amir', txt: 'Verstehe ich, dauert aber eine Minute: „Zwei Kartons beschädigt, Fotos vorhanden." Datum, Uhrzeit, Unterschrift. Sonst bleiben wir auf dem Schaden sitzen.' },
      { sp: 'Nguyen', txt: 'Mach ich. Und was passiert mit der Ware?' },
      { sp: 'Amir', txt: 'Wird unter Vorbehalt angenommen und separat gestellt. Ich schreibe heute noch: Ersatz bis spätestens Freitag, sonst kürzen wir die Rechnung.' },
      { sp: 'Nguyen', txt: 'Und wenn keiner antwortet?' },
      { sp: 'Amir', txt: 'Dann fasse ich Montag nach. Freundlich — aber mit Datum.' }
    ]
  },
  vokabeln: [
    { de: 'der Wareneingang', em: '🏭', bsp: 'Die Prüfung erfolgt im Wareneingang.' },
    { de: 'der Lieferschein', em: '📄', bsp: 'den Schaden auf dem Lieferschein vermerken' },
    { de: 'beschädigt / eingedrückt', em: '💥', bsp: 'Zwei Kartons sind eingedrückt.' },
    { de: 'vermerken', em: '✍️', bsp: 'Bitte den Schaden schriftlich vermerken.' },
    { de: 'unter Vorbehalt annehmen', em: '⚠️', bsp: 'Die Ware wird unter Vorbehalt angenommen.' },
    { de: 'reklamieren', em: '📣', bsp: 'Wir reklamieren die Teillieferung.' },
    { de: 'die Reklamation', em: '🧾', bsp: 'Ihre Reklamation vom 14.03.' },
    { de: 'Ersatz liefern', em: '🔄', bsp: 'Bitte liefern Sie kostenfrei Ersatz.' },
    { de: 'die Frist', em: '⏳', bsp: 'Die Frist läuft am Freitag ab.' },
    { de: 'bis spätestens', em: '📅', bsp: 'bis spätestens Freitag, 12 Uhr' },
    { de: 'innerhalb von …', em: '🕒', bsp: 'innerhalb von zehn Werktagen' },
    { de: 'nachfassen', em: '🔔', bsp: 'Ich fasse am Montag noch einmal nach.' },
    { de: 'die Teillieferung', em: '📦', bsp: 'Es kam nur eine Teillieferung an.' },
    { de: 'der Verzug', em: '⏰', bsp: 'Die Lieferung ist seit Dienstag in Verzug.' },
    { de: 'die Rechnung kürzen', em: '✂️', bsp: 'Wir kürzen die Rechnung um den Schadenswert.' },
    { de: 'Wir bitten um kurzfristige Klärung.', em: '🤝', bsp: 'freundlicher Schlusssatz mit Druck' }
  ],
  grammatik: {
    title: 'Grammatik im Berufskontext',
    blocks: [
      {
        h: 'Passiv — sachlich bleiben, wenn es ärgerlich wird',
        txt: 'In der Reklamation zählt, was passiert ist, nicht wer schuld ist. Das Passiv nimmt den Vorwurf heraus und lässt die Sache stehen.',
        table: [
          ['Aktiv (klingt nach Vorwurf)', 'Passiv (sachlich)'],
          ['Sie haben zwei Kartons beschädigt.', 'Zwei Kartons wurden beschädigt angeliefert.'],
          ['Wir nehmen die Ware unter Vorbehalt an.', 'Die Ware wird unter Vorbehalt angenommen.'],
          ['Sie müssen den Ersatz bis Freitag schicken.', 'Der Ersatz muss bis Freitag geliefert werden.'],
          ['Wir haben den Schaden fotografiert.', 'Der Schaden wurde fotografiert und dokumentiert.']
        ],
        note: 'Bauplan: werden + Partizip II. Gegenwart: wird angenommen · Vergangenheit: wurde geliefert · mit Modalverb: muss geliefert werden. Wer es getan hat, steht nur da, wenn es wirklich wichtig ist.'
      },
      {
        h: 'Fristen, die halten',
        txt: 'Eine Frist ohne Datum ist keine Frist. Diese fünf Formulierungen decken den Alltag ab — sie unterscheiden sich in der Härte:',
        table: [
          ['Formulierung', 'Bedeutung', 'Wann nutzen?'],
          ['bis Freitag', 'irgendwann am Freitag', 'intern, locker'],
          ['bis spätestens Freitag, 12 Uhr', 'harte Grenze mit Uhrzeit', 'Ersatz, Reklamation'],
          ['innerhalb von zehn Werktagen', 'Werktage sind Montag bis Samstag', 'Gutschrift, Prüfung'],
          ['umgehend', 'sofort, ohne Verzögerung', 'Eskalation'],
          ['zum 01.06.', 'ab diesem Stichtag gültig', 'Verträge, Preise']
        ],
        note: 'Schreib immer Wochentag und Datum zusammen: „bis spätestens Freitag, 14.03." Dann kann sich niemand verlesen — und du hast einen Bezugspunkt fürs Nachfassen. Vorsicht bei den Tagen: Werktage sind Montag bis Samstag, Arbeitstage nur Montag bis Freitag.'
      }
    ]
  },
  uebungen: [
    { typ: 'listen', audio: 'Die Ware wird unter Vorbehalt angenommen und separat gestellt.', frage: 'Hör zu: Was passiert mit der Ware?', optionen: ['Sie wird angenommen, aber der Anspruch bleibt bestehen.', 'Sie wird sofort zurückgeschickt.', 'Sie wird eingelagert und freigegeben.'], richtig: 0, hinweis: 'Unter Vorbehalt heißt: annehmen, ohne auf Rechte zu verzichten.' },
    { typ: 'mc', frage: 'Der Fahrer drängt und du siehst einen Schaden. Was tust du zuerst?', optionen: ['Fotografieren und den Schaden auf dem Lieferschein vermerken lassen.', 'Schnell unterschreiben und den Schaden später telefonisch melden.', 'Die komplette Lieferung verweigern und den Fahrer wieder wegschicken.'], richtig: 0, hinweis: 'Ohne Vermerk auf dem Lieferschein ist ein Transportschaden später kaum durchzusetzen.' },
    { typ: 'mc', frage: 'Welcher Satz gehört in eine schriftliche Reklamation?', optionen: ['Zwei Kartons wurden beschädigt angeliefert.', 'Bei euch geht ja immer alles kaputt.', 'Da ist irgendwas hin.'], richtig: 0, hinweis: 'Passiv plus konkrete Zahl — sachlich und überprüfbar.' },
    { typ: 'gapbank', frage: 'Setz die Passivformen ein.', text: 'Der Schaden ___ am Montag fotografiert. Der Ersatz muss bis Freitag ___ ___.', bank: ['wurde', 'geliefert', 'werden', 'ist'], loesung: ['wurde', 'geliefert', 'werden'], hinweis: 'Vergangenheit: wurde + Partizip II · mit Modalverb: Partizip II + werden am Satzende.' },
    { typ: 'order', frage: 'Bau den Satz für den Wareneingang!', woerter: ['angenommen', 'Vorbehalt', 'wird', 'Die', 'unter', 'Ware'], loesung: 'Die Ware wird unter Vorbehalt angenommen', hinweis: 'Passiv Präsens: Subjekt + wird + Angabe + Partizip II am Ende.' },
    { typ: 'match', frage: 'Formulierung und Bedeutung — was passt zusammen?', paare: [['bis spätestens Freitag, 12 Uhr', '⏳ harte Grenze mit Uhrzeit'], ['innerhalb von zehn Werktagen', '🕒 Montag bis Samstag, ohne Sonn- und Feiertage'], ['umgehend', '⚡ sofort, ohne Verzögerung'], ['zum 01.06.', '📅 ab diesem Stichtag gültig'], ['nachfassen', '🔔 freundlich an eine Frist erinnern']] },
    { typ: 'bild', bild: 'th-wirtschaft', frage: 'Die Frist ist abgelaufen, der Lieferant meldet sich nicht. Wie fasst du nach?', optionen: ['Warum antworten Sie eigentlich nicht? Ich warte jetzt schon viel zu lange auf Ihre Mail.', 'Ich beziehe mich auf meine Mail vom 14.03. und bitte um Rückmeldung bis morgen, 12 Uhr.', 'Ich wollte nur kurz fragen, ob Sie vielleicht irgendwann Zeit für eine Antwort finden.'], richtig: 1, hinweis: 'Nachfassen heißt: alte Nachricht nennen, neue Frist setzen, Ton halten.' },
    { typ: 'mc', frage: 'Was bedeutet „Die Lieferung ist in Verzug"?', optionen: ['Der vereinbarte Termin ist überschritten.', 'Die Lieferung ist unterwegs.', 'Die Lieferung wurde storniert.'], richtig: 0, hinweis: 'Verzug = Termin verpasst, ohne dass ein neuer vereinbart wurde.' },
    { typ: 'mc', frage: 'Welcher Schlusssatz hält den Ton und macht trotzdem Druck?', optionen: ['Wir bitten um kurzfristige Klärung bis Freitag, 14.03.', 'Das ist wirklich eine Frechheit.', 'Melden Sie sich einfach mal.'], richtig: 0, hinweis: 'Druck entsteht durch ein Datum, nicht durch Lautstärke.' },
    { typ: 'type', frage: 'Formuliere die Reklamation in einem Satz: Von 20 gelieferten Kartons sind 2 beschädigt.', muster: 'Von den 20 gelieferten Kartons wurden zwei beschädigt angeliefert, Fotos liegen bei.', akzeptiert: ['wurden', 'beschädigt', 'zwei'], hinweis: 'Passiv, konkrete Zahl, Nachweis erwähnen — und keine Schuldzuweisung.' }
  ],
  zusammenfassung: {
    kernsaetze: [
      'Zwei Kartons wurden beschädigt angeliefert, Fotos liegen bei.',
      'Die Ware wird unter Vorbehalt angenommen und separat gestellt.',
      'Wir bitten Sie, bis spätestens Freitag, 14.03., kostenfrei Ersatz zu liefern.',
      'Ich beziehe mich auf meine Nachricht vom 14.03.',
      'Wir bitten um kurzfristige Klärung.'
    ],
    merke: [
      '<b>Passiv</b> statt Vorwurf: <b>wurde</b> geliefert · <b>wird</b> angenommen · muss geliefert <b>werden</b>.',
      'Ohne Vermerk auf dem <b>Lieferschein</b> gibt es später keinen Schaden — nur eine Behauptung.',
      'Eine Frist braucht immer <b>Wochentag, Datum und Uhrzeit</b>.'
    ],
    tipp: 'Leg dir eine Reklamationszeile im Handy ab: „Zwei Kartons beschädigt, Fotos vorhanden, Datum, Uhrzeit." Wenn der Fahrer drängt, hast du den Satz in zehn Sekunden auf dem Lieferschein — und die Diskussion ist beendet, bevor sie anfängt.'
  },
  sprechen: {
    task: 'Steh am Wareneingang und melde deiner Kollegin den Schaden: Was ist beschädigt, wie viele Kartons sind betroffen, was hast du dokumentiert und welche Frist setzt du dem Lieferanten?',
    tipps: ['Von … Kartons wurden … beschädigt angeliefert.', 'Der Schaden wurde fotografiert und auf dem Lieferschein vermerkt.', 'Die Ware wird unter Vorbehalt angenommen.', 'Wir bitten um Ersatz bis spätestens …']
  }
};
