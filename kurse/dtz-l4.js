// DTZ – Deutsch-Test für Zuwanderer – Lektion 4: Sprechen Teil 1 — über sich erzählen
// deutschoderwas club · Kursmaterial
window.LEKTION = {
  meta: { kurs: 'DTZ – Deutsch-Test für Zuwanderer', nr: 4, titel: 'Sprechen Teil 1 — über sich erzählen', level: 'A2–B1', bild: 'th-migration', dauer: 'ca. 20 Min' },
  intro: {
    text: 'Die mündliche Prüfung dauert rund 16 Minuten, du machst sie zu zweit, und zwei Prüfende hören zu. Teil 1 ist der einfachste: Du erzählst über dich. Auf deinem Blatt stehen nur Stichpunkte — Name, Herkunft, Familie, Arbeit, Freizeit, Pläne. Die Sätze kommen von dir, und du kannst sie zu Hause vorbereiten.',
    du_lernst: ['Alle Stichpunkte abarbeiten statt nach vier Sätzen aufhören', 'Perfekt für deine eigene Geschichte', 'seit, vor und in richtig benutzen', 'Nachfragen der Prüfenden beantworten']
  },
  dialog: {
    bild: 'th-migration',
    situation: 'Prüfungssimulation im Kursraum. Ibrahim sitzt der Prüferin Frau Reinhardt gegenüber und soll über sich erzählen — nach vier Sätzen ist er fertig.',
    lines: [
      { sp: 'Frau Reinhardt', txt: 'Herr Nasri, erzählen Sie uns bitte etwas über sich.' },
      { sp: 'Ibrahim', txt: 'Ich heiße Ibrahim Nasri, ich bin dreiunddreißig und komme aus Marokko. Ich wohne in Kassel.' },
      { sp: 'Frau Reinhardt', txt: '… und weiter?' },
      { sp: 'Ibrahim', txt: 'Weiter? Das ist alles.' },
      { sp: 'Frau Reinhardt', txt: 'Schauen Sie auf Ihre Stichpunkte. Da stehen noch Familie, Arbeit, Freizeit und Ihre Pläne.' },
      { sp: 'Ibrahim', txt: 'Ach so, Entschuldigung. Ich bin verheiratet und habe eine Tochter, sie ist vier. Ich arbeite seit zwei Jahren in einer Bäckerei, morgens ab vier Uhr.' },
      { sp: 'Frau Reinhardt', txt: 'Seit wann leben Sie denn in Deutschland?' },
      { sp: 'Ibrahim', txt: 'Ich bin zweitausendzwanzig nach Deutschland gekommen. Am Anfang war es sehr schwer.' },
      { sp: 'Frau Reinhardt', txt: 'Und was möchten Sie beruflich machen?' },
      { sp: 'Ibrahim', txt: 'Entschuldigung, könnten Sie die Frage bitte wiederholen? — Ah, Pläne. Ich mache den Führerschein und arbeite dann als Fahrer.' }
    ]
  },
  vokabeln: [
    { de: 'der Stichpunkt', em: '📝', bsp: 'Auf dem Blatt stehen nur Stichpunkte — die Sätze machst du.' },
    { de: 'die Herkunft', em: '🌍', bsp: 'Ich komme ursprünglich aus Marokko.' },
    { de: 'ursprünglich', em: '🧭', bsp: 'Ursprünglich komme ich aus einer kleinen Stadt.' },
    { de: 'die Muttersprache', em: '🗣️', bsp: 'Meine Muttersprache ist Arabisch.' },
    { de: 'seit + Zeitangabe', em: '⏳', bsp: 'Ich arbeite seit zwei Jahren in einer Bäckerei.' },
    { de: 'die Schicht', em: '🌙', bsp: 'Ich arbeite in Schichten, morgens ab vier Uhr.' },
    { de: 'die Ausbildung', em: '🎓', bsp: 'Ich möchte eine Ausbildung machen.' },
    { de: 'den Abschluss anerkennen lassen', em: '📜', bsp: 'Ich lasse meinen Abschluss aus Marokko anerkennen.' },
    { de: 'vorhaben', em: '🎯', bsp: 'Ich habe vor, den Führerschein zu machen.' },
    { de: 'in meiner Freizeit', em: '⚽', bsp: 'In meiner Freizeit spiele ich Fußball mit meinem Bruder.' },
    { de: 'sich einleben', em: '🏡', bsp: 'Inzwischen habe ich mich gut eingelebt.' },
    { de: 'Könnten Sie das bitte wiederholen?', em: '🔁', bsp: 'wenn du die Frage nicht verstanden hast' },
    { de: 'Das habe ich nicht verstanden.', em: '❓', bsp: 'ehrlich und völlig erlaubt' },
    { de: 'Am Anfang war es schwer.', em: '💪', bsp: 'guter Satz, um von früher zu erzählen' }
  ],
  grammatik: {
    title: 'Über die eigene Geschichte sprechen',
    blocks: [
      {
        h: 'Perfekt — was war, erzählst du so',
        txt: 'Fast alles aus deinem Leben liegt in der Vergangenheit. Im Gespräch nimmst du dafür das Perfekt:',
        table: [
          ['Verb', 'Perfekt', 'So sagst du es'],
          ['kommen', 'ist gekommen', 'Ich bin 2020 nach Deutschland gekommen.'],
          ['ziehen', 'ist gezogen', 'Wir sind letztes Jahr nach Kassel gezogen.'],
          ['arbeiten', 'hat gearbeitet', 'In Marokko habe ich als Elektriker gearbeitet.'],
          ['machen', 'hat gemacht', 'Ich habe zuerst einen Sprachkurs gemacht.'],
          ['anfangen', 'hat angefangen', 'Im Mai habe ich in der Bäckerei angefangen.']
        ],
        note: 'Bewegung von A nach B nimmt sein: bin gekommen, bin gezogen. Alles andere nimmt haben. Das Partizip steht immer ganz am Ende.'
      },
      {
        h: 'seit · vor · in — die drei Zeitwörter deiner Vorstellung',
        txt: 'Diese drei entscheiden, ob deine Vorstellung sauber klingt:',
        table: [
          ['Wort', 'Bedeutung', 'Beispiel', 'Zeitform'],
          ['seit', 'hat angefangen und dauert an', 'Ich wohne seit drei Jahren in Kassel.', 'Präsens'],
          ['vor', 'einmal, abgeschlossen', 'Vor drei Jahren bin ich hergekommen.', 'Perfekt'],
          ['in', 'liegt noch vor dir', 'In zwei Jahren möchte ich eine Ausbildung machen.', 'Präsens']
        ],
        note: 'Der häufigste Fehler in diesem Prüfungsteil: Nach seit steht im Deutschen das Präsens. Also „Ich wohne seit drei Jahren", nicht „Ich habe seit drei Jahren gewohnt".'
      }
    ]
  },
  uebungen: [
    { typ: 'mc', frage: 'Was steht in Teil 1 auf deinem Blatt?', optionen: ['Ein fertiger Text zum Vorlesen', 'Stichpunkte wie Name, Familie, Arbeit, Freizeit, Pläne', 'Eine einzige lange Frage'], richtig: 1, hinweis: 'Die Stichpunkte sind dein Gerüst. Geh sie der Reihe nach durch, dann vergisst du nichts.' },
    { typ: 'mc', frage: 'Ibrahim sagt nach vier Sätzen „Das ist alles." Was fehlt ihm?', optionen: ['Nichts, das reicht völlig', 'Die Begrüßung', 'Familie, Arbeit, Freizeit und Pläne'], richtig: 2, hinweis: 'Name, Alter und Wohnort sind erst ein Viertel. Zu jedem Stichpunkt gehören zwei bis drei Sätze.' },
    { typ: 'gapbank', frage: 'Perfekt oder Präsens? Setz die richtige Form ein.', text: 'Ich ___ 2020 nach Deutschland gekommen. Seit drei Jahren ___ ich in Kassel. Im Mai ___ ich in der Bäckerei angefangen.', bank: ['bin', 'wohne', 'habe', 'habe gewohnt'], loesung: ['bin', 'wohne', 'habe'], hinweis: 'kommen nimmt sein · nach seit steht Präsens · anfangen nimmt haben.' },
    { typ: 'order', frage: 'Bau den Satz!', woerter: ['bin', 'Ich', 'Deutschland', 'gekommen', 'nach', '2020'], loesung: 'Ich bin 2020 nach Deutschland gekommen', hinweis: 'bin steht auf Position 2, das Partizip ganz am Ende.' },
    { typ: 'match', frage: 'Stichpunkt und passender Satzanfang — was gehört zusammen?', paare: [['Herkunft', '🌍 Ich komme ursprünglich aus …'], ['Familie', '👨‍👩‍👧 Ich bin verheiratet und habe …'], ['Arbeit', '🥖 Ich arbeite seit zwei Jahren als …'], ['Freizeit', '⚽ In meiner Freizeit …'], ['Pläne', '🎯 Ich habe vor, …']] },
    { typ: 'listen', audio: 'Seit wann leben Sie in Deutschland?', frage: 'Hör zu: Welche Antwort passt?', optionen: ['In fünf Jahren.', 'Seit fünf Jahren.', 'Für fünf Jahre.'], richtig: 1 },
    { typ: 'bild', bild: 'th-migration', frage: 'Die Prüferin fragt: „Warum sind Sie nach Deutschland gekommen?" Welche Antwort ist am besten?', optionen: ['Weil.', 'Deutschland ist ein schönes Land, glaube ich.', 'Mein Mann hat hier Arbeit gefunden, deshalb sind wir 2020 gekommen.'], richtig: 2, hinweis: 'Ein Grund plus ein Zeitpunkt ergibt eine vollständige Antwort. Zwei Sätze reichen völlig.' },
    { typ: 'type', frage: 'Antworte der Prüferin: Seit wann leben Sie in Deutschland und was machen Sie hier?', muster: 'Ich lebe seit vier Jahren in Deutschland und arbeite in einem Supermarkt.', akzeptiert: ['seit', 'ich lebe', 'ich wohne', 'ich bin'], hinweis: 'Nach seit steht Präsens: „Ich lebe seit … Jahren." Häng mit „und" gleich eine zweite Information an.' },
    { typ: 'mc', frage: 'Du hast die Frage der Prüferin nicht verstanden. Was sagst du?', optionen: ['Nichts — du wartest ab.', 'Könnten Sie die Frage bitte wiederholen?', 'Ja, genau.'], richtig: 1, hinweis: 'Nachfragen ist erlaubt und kostet keinen einzigen Punkt. Schweigen kostet welche.' },
    { typ: 'mc', frage: 'Wie läuft die mündliche Prüfung ab?', optionen: ['Rund 16 Minuten, zu zweit mit einem Partner, in drei Teilen', 'Rund 30 Minuten, allein, in zwei Teilen', 'Rund 5 Minuten, allein, ein Teil'], richtig: 0, hinweis: 'Der DTZ prüft das Sprechen immer als Paarprüfung: drei Teile, zwei Prüfende, ungefähr 16 Minuten.' }
  ],
  zusammenfassung: {
    kernsaetze: [
      'Ich heiße … und komme ursprünglich aus …',
      'Ich bin 2020 nach Deutschland gekommen. Am Anfang war es schwer.',
      'Ich wohne seit drei Jahren in … und arbeite seit zwei Jahren als …',
      'In meiner Freizeit … Meine Muttersprache ist …',
      'Ich habe vor, eine Ausbildung zu machen. Könnten Sie das bitte wiederholen?'
    ],
    merke: [
      'Geh die <b>Stichpunkte der Reihe nach</b> durch — zu jedem zwei bis drei Sätze. Wer nach vier Sätzen stoppt, verschenkt den einfachsten Prüfungsteil.',
      '<b>sein</b> beim Ortswechsel (bin gekommen, bin gezogen), <b>haben</b> bei allem anderen (habe gearbeitet, habe angefangen).',
      'Nach <b>seit</b> steht Präsens: „Ich arbeite <b>seit</b> zwei Jahren." Nach <b>vor</b> steht Perfekt: „<b>Vor</b> zwei Jahren habe ich angefangen."'
    ],
    tipp: 'Nimm dir ein Blatt und schreib die sieben Stichpunkte untereinander: Herkunft, Familie, Wohnort, Sprachen, Arbeit, Freizeit, Pläne. Sprich sie diese Woche jeden Abend einmal durch und nimm dich mit dem Handy auf. Ab der dritten Aufnahme hörst du selbst, wo du stockst — und genau da baust du einen Satz ein.'
  },
  sprechen: {
    task: 'Stell dich im Prüfungsformat vor: Geh alle Stichpunkte durch — Herkunft, Familie, Wohnort, Sprachen, Arbeit, Freizeit, Pläne. Sprich mindestens 90 Sekunden am Stück und beantworte danach diese Nachfrage: Was war für Sie am Anfang in Deutschland am schwersten?',
    tipps: ['Ich heiße … und komme ursprünglich aus …', 'Ich bin … nach Deutschland gekommen.', 'Ich wohne seit … in … und arbeite als …', 'Ich habe vor, … zu machen.']
  }
};
