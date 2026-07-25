// Deutsch für die Pflege – Lektion 5: Notfall im Dienst
// deutschoderwas club · Kursmaterial
window.LEKTION = {
  meta: { kurs: 'Deutsch für die Pflege', nr: 5, titel: 'Notfall im Dienst', level: 'B1–B2', bild: 'th-arzt', dauer: 'ca. 20 Min' },
  intro: {
    text: 'Im Notfall hast du keine Zeit für schöne Sätze — und genau da bricht Fremdsprache zuerst weg. Deshalb übst du hier das Gegenteil von höflich: drei Wörter, laut, eindeutig. Dazu Zahlen und Uhrzeiten, die auch unter Adrenalin sitzen, und die Rückfrage, die verhindert, dass etwas untergeht.',
    du_lernst: ['Knappe Imperative im Team', 'Notruf strukturiert absetzen', 'Zahlen und Uhrzeiten sicher sagen', 'Anweisungen zurückgeben und absichern']
  },
  dialog: {
    bild: 'th-arzt',
    situation: 'Frühdienst, 6:50 Uhr, Haus B. Fatima findet Herrn Petrow bewusstlos vor dem Bett und ruft Kwame dazu, kurz darauf kommt Dr. Berger.',
    lines: [
      { sp: 'Fatima', txt: 'Kwame, sofort in die 22! Herr Petrow liegt am Boden.' },
      { sp: 'Kwame', txt: 'Bin da. Ist er ansprechbar?' },
      { sp: 'Fatima', txt: 'Nein. Atmung vorhanden, Puls schwach. Hol den Notfallkoffer und ruf den Notarzt.' },
      { sp: 'Kwame', txt: 'Was sage ich der Leitstelle?' },
      { sp: 'Fatima', txt: 'Haus B, Station 2, Zimmer 22 — bewusstlose Person, achtundsiebzig Jahre, Kreislauf instabil.' },
      { sp: 'Kwame', txt: 'Achtundsiebzig, Kreislauf instabil, Haus B, Zimmer 22 — habe ich.' },
      { sp: 'Dr. Berger', txt: 'Seit wann liegt er? Welche Werte?' },
      { sp: 'Fatima', txt: 'Aufgefunden um 6:42 Uhr, also vor acht Minuten. Blutdruck achtzig zu fünfzig, Puls hundertzwanzig. Letzter Kontakt gegen halb sechs, da war er wach und orientiert.' },
      { sp: 'Dr. Berger', txt: 'Zugang legen, Sauerstoff sechs Liter. Medikamentenliste?' },
      { sp: 'Fatima', txt: 'Liegt im Zimmer. Soll ich sie holen — oder bleibe ich bei ihm?' }
    ]
  },
  vokabeln: [
    { de: 'nicht ansprechbar', em: '😶', bsp: 'Der Bewohner ist nicht ansprechbar.' },
    { de: 'Atmung vorhanden', em: '🫁', bsp: 'Atmung vorhanden, Puls tastbar.' },
    { de: 'der Puls ist tastbar', em: '💗', bsp: 'Puls tastbar, aber schwach und schnell.' },
    { de: 'der Notfallkoffer', em: '🎒', bsp: 'Hol den Notfallkoffer!' },
    { de: 'die Leitstelle', em: '☎️', bsp: 'Die Leitstelle fragt immer nach dem genauen Ort.' },
    { de: 'aufgefunden um …', em: '🕕', bsp: 'Aufgefunden um 6:42 Uhr vor dem Bett.' },
    { de: 'Kreislauf instabil', em: '📉', bsp: 'Bewusstlose Person, Kreislauf instabil.' },
    { de: 'einen Zugang legen', em: '💉', bsp: 'Zugang legen, bitte die rosa Kanüle.' },
    { de: 'der Sauerstoff', em: '🫧', bsp: 'Sauerstoff sechs Liter über Maske.' },
    { de: 'die stabile Seitenlage', em: '↔️', bsp: 'Bewusstlos mit Atmung: stabile Seitenlage.' },
    { de: 'die Reanimation', em: '🫀', bsp: 'Reanimation begonnen um 6:45 Uhr.' },
    { de: 'die Medikamentenliste', em: '💊', bsp: 'Die Medikamentenliste liegt im Zimmer.' },
    { de: 'Ich wiederhole: …', em: '🔁', bsp: 'Ich wiederhole: sechs Liter Sauerstoff.' },
    { de: 'Habe ich.', em: '✅', bsp: 'kurze Bestätigung, dass die Info angekommen ist' },
    { de: 'die Uhrzeit festhalten', em: '🕰️', bsp: 'Wer schreibt mit? Uhrzeit festhalten!' },
    { de: 'Soll ich … oder …?', em: '❓', bsp: 'Soll ich sie holen oder bleibe ich bei ihm?' }
  ],
  grammatik: {
    title: 'Grammatik im Berufskontext',
    blocks: [
      {
        h: 'Der Notfall-Imperativ — kurz, laut, eindeutig',
        txt: 'Im Notfall fällt alles weg, was nicht Information ist: bitte, mal, kurz, Konjunktiv. Übrig bleiben zwei Formen — der nackte Imperativ und der Infinitiv am Satzende. Beides ist im Notfall nicht unhöflich, sondern korrekt:',
        table: [
          ['Normal', 'Im Notfall', 'Form'],
          ['Könntest du bitte den Notfallkoffer holen?', 'Hol den Notfallkoffer!', 'Imperativ du'],
          ['Würden Sie bitte den Zugang legen?', 'Zugang legen!', 'Infinitiv als Kommando'],
          ['Ich würde vorschlagen, den Notarzt zu rufen.', 'Notarzt rufen, sofort!', 'Infinitiv plus sofort'],
          ['Würdest du bitte hier bleiben?', 'Du bleibst hier!', 'Präsens als Anweisung'],
          ['Wer könnte die Zeit mitschreiben?', 'Kwame, du schreibst mit!', 'Name plus Aufgabe']
        ],
        note: 'Immer <b>Name zuerst</b>, dann die Aufgabe. „Jemand ruft den Notarzt" ruft niemand. „Kwame, ruf den Notarzt!" ruft Kwame.'
      },
      {
        h: 'Zahlen melden und zurückgeben',
        txt: 'Zahlen sind das Erste, was unter Druck verrutscht. Sag sie in der festen Reihenfolge — und gib jede Anweisung, die du bekommst, einmal zurück. Das kostet zwei Sekunden und rettet die Übergabe:',
        table: [
          ['Angabe', 'So sagst du es', 'So gibst du es zurück'],
          ['Blutdruck 80/50', 'Blutdruck achtzig zu fünfzig', 'Achtzig zu fünfzig, verstanden.'],
          ['Puls 120', 'Puls hundertzwanzig', 'Puls hundertzwanzig, habe ich.'],
          ['06:42 Uhr', 'aufgefunden um sechs Uhr zweiundvierzig', 'Sechs Uhr zweiundvierzig, notiert.'],
          ['O2 6 l/min', 'Sauerstoff sechs Liter', 'Ich wiederhole: sechs Liter.'],
          ['78 Jahre', 'achtundsiebzig Jahre', 'Achtundsiebzig, alles klar.']
        ],
        note: 'Wenn du eine Zahl nicht verstanden hast, rate nie. Ein Satz genügt: <b>Noch mal bitte — achtzig oder achtzehn?</b>'
      }
    ]
  },
  uebungen: [
    { typ: 'listen', audio: 'Aufgefunden um sechs Uhr zweiundvierzig, männlich, achtundsiebzig Jahre.', frage: 'Hör zu: Uhrzeit und Alter?', optionen: ['6:42 Uhr, 78 Jahre', '6:24 Uhr, 78 Jahre', '6:42 Uhr, 68 Jahre'], richtig: 0 },
    { typ: 'mc', frage: 'Du rufst die Leitstelle. Was gehört als Erstes in die Meldung?', optionen: ['Wo genau du bist und was passiert ist', 'Der Name des Bewohners', 'Die Vorerkrankungen des Bewohners'], richtig: 0, hinweis: 'Die Leitstelle braucht zuerst den Ort — Einrichtung, Haus, Station, Zimmer. Erst dann, was passiert ist. Alles Weitere fragt sie selbst ab.' },
    { typ: 'mc', frage: 'Welcher Zuruf funktioniert im Notfall am zuverlässigsten?', optionen: ['Kwame, ruf den Notarzt!', 'Kann bitte jemand den Notarzt rufen?', 'Der Notarzt müsste vielleicht mal informiert werden.'], richtig: 0, hinweis: 'Ohne Namen fühlt sich niemand angesprochen. Name zuerst, dann die Aufgabe.' },
    { typ: 'gapbank', frage: 'Setz die knappen Imperative ein.', text: '___ den Notfallkoffer! ___ den Notarzt! Und ___ mir sofort Bescheid.', bank: ['Hol', 'Ruf', 'sag', 'Holen', 'Sagen'], loesung: ['Hol', 'Ruf', 'sag'], hinweis: 'Der du-Imperativ ist der Verbstamm ohne Endung: holen → hol, rufen → ruf, sagen → sag.' },
    { typ: 'bild', bild: 'th-arzt', frage: 'Die Ärztin sagt: „Sauerstoff sechs Liter." Was antwortest du?', optionen: ['Ich wiederhole: sechs Liter Sauerstoff.', 'Ja.', 'Machen wir gleich.'], richtig: 0, hinweis: 'Anweisung zurückgeben heißt: laut wiederholen. Nur so merken beide, wenn etwas falsch angekommen ist.' },
    { typ: 'order', frage: 'Bau die Anweisung!', woerter: ['die', 'Bringen', 'stabile', 'Sie', 'ihn', 'Seitenlage', 'in'], loesung: 'Bringen Sie ihn in die stabile Seitenlage', hinweis: 'Verb – Sie – Akkusativ – Präposition – Ziel.' },
    { typ: 'match', frage: 'Situation und richtige Reaktion — was passt?', paare: [['bewusstlos, Atmung vorhanden', '↔️ stabile Seitenlage'], ['keine Atmung', '🫀 Reanimation beginnen'], ['Kreislauf instabil', '☎️ Notarzt über 112'], ['Zahl nicht verstanden', '❓ Noch mal bitte — achtzig oder achtzehn?'], ['Anweisung erhalten', '🔁 Ich wiederhole: …']] },
    { typ: 'type', frage: 'Setz den Notruf ab: bewusstlose Frau, 84 Jahre, Atmung vorhanden, Seniorenheim Lindenhof, Haus A, Zimmer 5.', muster: 'Seniorenheim Lindenhof, Haus A, Zimmer 5. Bewusstlose Person, weiblich, vierundachtzig Jahre, Atmung vorhanden.', akzeptiert: ['bewusstlos', 'atmung', 'haus a', 'zimmer 5', 'vierundachtzig'], hinweis: 'Reihenfolge: Wo genau seid ihr — was ist passiert — wer ist betroffen — wie ist der Zustand.' },
    { typ: 'mc', frage: 'Die Ärztin fragt: „Seit wann liegt er?" Beste Antwort:', optionen: ['Aufgefunden um 6:42 Uhr, letzter Kontakt gegen halb sechs.', 'Weiß ich nicht genau, ist noch nicht lange her.', 'Vor ein paar Minuten ungefähr.'], richtig: 0, hinweis: 'Zwei Uhrzeiten machen den Zeitraum klar: wann gefunden, wann zuletzt gesehen. „Ein paar Minuten" hilft niemandem.' },
    { typ: 'type', frage: 'Du sollst die Medikamentenliste holen, willst aber den Bewohner nicht allein lassen. Frag nach.', muster: 'Soll ich die Liste holen oder bleibe ich bei ihm?', akzeptiert: ['soll ich', 'oder', 'wer holt', 'übernimmt jemand'], hinweis: 'Die Rückversicherungsfrage stellt zwei Möglichkeiten gegenüber: <b>Soll ich … oder …?</b> So entscheidet die Person, die den Überblick hat.' }
  ],
  zusammenfassung: {
    kernsaetze: [
      'Kwame, sofort in die 22 — Herr Petrow liegt am Boden!',
      'Nicht ansprechbar, Atmung vorhanden, Puls schwach.',
      'Haus B, Station 2, Zimmer 22 — bewusstlose Person, achtundsiebzig Jahre, Kreislauf instabil.',
      'Aufgefunden um 6:42 Uhr, letzter Kontakt gegen halb sechs.',
      'Ich wiederhole: sechs Liter Sauerstoff. — Soll ich sie holen oder bleibe ich hier?'
    ],
    merke: [
      'Im Notfall gilt: <b>Name zuerst, dann die Aufgabe.</b> Ein Zuruf an alle erreicht niemanden.',
      'Zwei Kommandoformen reichen: <b>Hol den Koffer!</b> (Imperativ) und <b>Zugang legen!</b> (Infinitiv).',
      'Jede Zahl, jede Anweisung <b>einmal zurückgeben</b> — und lieber einmal zu oft nachfragen als raten.'
    ],
    tipp: 'Sprich einmal pro Schicht auf dem Weg über den Flur zwei Zahlen laut aus: den letzten Blutdruck und die aktuelle Uhrzeit — auf Deutsch, mit vollständigen Zahlwörtern. Zahlen sind reine Automatik, und Automatik entsteht nur durch Wiederholung, nicht durch Verstehen.'
  },
  sprechen: {
    task: 'Spiel den Notruf komplett durch: Du findest eine bewusstlose Bewohnerin. Sprich laut — erst der Zuruf an den Kollegen mit Namen und Auftrag, dann die Meldung an die Leitstelle, dann die Übergabe an den Notarzt mit Uhrzeiten und Werten.',
    tipps: ['Olena, komm sofort in die 14 — und bring den Notfallkoffer mit!', 'Haus A, Zimmer 14 — bewusstlose Person, weiblich, vierundachtzig Jahre, Atmung vorhanden.', 'Aufgefunden um …, letzter Kontakt um …', 'Ich wiederhole: … — Soll ich … oder …?']
  }
};
