// Alltagsdeutsch B1 – Lektion 1: Bewerbung und Lebenslauf
// deutschoderwas club · Kursmaterial
window.LEKTION = {
  meta: { kurs: 'Alltagsdeutsch B1', nr: 1, titel: 'Bewerbung und Lebenslauf', level: 'B1', bild: 'th-bewerbung', dauer: 'ca. 20 Min' },
  intro: {
    text: 'Eine Bewerbung entscheidet sich oft in dreißig Sekunden — und in diesen dreißig Sekunden zählt der Ton. Heute lernst du, wie du höflich fragst, ohne zu betteln, und wie du deinen Lebenslauf so sortierst, dass er gelesen wird. Am Ende kannst du ein Anschreiben formulieren, das nicht nach Vorlage klingt.',
    du_lernst: ['Lebenslauf und Anschreiben aufbauen', 'Höflich fragen mit würde, könnte, hätte', 'Wortschatz rund um die Stellensuche', 'Nach einer Bewerbung nachfassen']
  },
  dialog: {
    bild: 'th-bewerbung',
    situation: 'Amir sitzt in der Berufsberatung. Frau Yilmaz schaut sich seine Unterlagen an, bevor er sich bei den Stadtwerken bewirbt.',
    lines: [
      { sp: 'Amir', txt: 'Guten Tag, Frau Yilmaz. Ich hätte eine Frage zu meiner Bewerbung — hätten Sie kurz Zeit?' },
      { sp: 'Frau Yilmaz', txt: 'Natürlich, setzen Sie sich. Zeigen Sie mir doch mal Ihren Lebenslauf.' },
      { sp: 'Amir', txt: 'Hier, bitte. Ich würde mich gern als Elektriker bei den Stadtwerken bewerben.' },
      { sp: 'Frau Yilmaz', txt: 'Gute Idee, die suchen wirklich Leute. Aber Ihr Lebenslauf ist drei Seiten lang. Könnten Sie ihn auf eine Seite kürzen?' },
      { sp: 'Amir', txt: 'Wirklich? Ich dachte, je mehr drinsteht, desto besser.' },
      { sp: 'Frau Yilmaz', txt: 'Weniger ist mehr. Und ich würde die Berufserfahrung nach oben stellen — das ist Ihr stärkstes Argument.' },
      { sp: 'Amir', txt: 'Verstehe. Und das Anschreiben? Wäre es besser, wenn ich meinen Deutschkurs auch erwähne?' },
      { sp: 'Frau Yilmaz', txt: 'Unbedingt, B1 ist ein Pluspunkt. Am Schluss schreiben Sie: „Über ein persönliches Gespräch würde ich mich sehr freuen."' },
      { sp: 'Amir', txt: 'Könnten Sie sich das Anschreiben nächste Woche noch einmal ansehen?' },
      { sp: 'Frau Yilmaz', txt: 'Gern. Schicken Sie es mir bis Freitag, dann hätten wir vor der Frist noch genug Zeit.' }
    ]
  },
  vokabeln: [
    { de: 'die Bewerbung', em: '📨', bsp: 'Ich schicke meine Bewerbung per E-Mail.' },
    { de: 'die Bewerbungsunterlagen', em: '📁', bsp: 'Lebenslauf, Anschreiben und Zeugnisse zusammen' },
    { de: 'der Lebenslauf', em: '📄', bsp: 'Ein Lebenslauf passt auf eine Seite.' },
    { de: 'das Anschreiben', em: '✍️', bsp: 'Im Anschreiben steht, warum du passt.' },
    { de: 'die Stellenanzeige', em: '📰', bsp: 'Ich habe die Stellenanzeige online gefunden.' },
    { de: 'sich bewerben bei / als', em: '🎯', bsp: 'Ich bewerbe mich bei den Stadtwerken als Elektriker.' },
    { de: 'die Berufserfahrung', em: '🛠️', bsp: 'Ich habe fünf Jahre Berufserfahrung.' },
    { de: 'die Ausbildung', em: '🎓', bsp: 'Meine Ausbildung habe ich in Aleppo gemacht.' },
    { de: 'die Kenntnisse', em: '🧠', bsp: 'Deutschkenntnisse, EDV-Kenntnisse' },
    { de: 'das Zeugnis', em: '🏅', bsp: 'Das Zeugnis kommt als Anlage dazu.' },
    { de: 'das Vorstellungsgespräch', em: '🤝', bsp: 'Ich wurde zum Vorstellungsgespräch eingeladen.' },
    { de: 'die Frist', em: '⏳', bsp: 'Die Frist läuft am 30. April ab.' },
    { de: 'kürzen', em: '✂️', bsp: 'Kürzen Sie den Text auf eine Seite.' },
    { de: 'erwähnen', em: '💬', bsp: 'Erwähne deinen Deutschkurs.' },
    { de: 'der Pluspunkt', em: '➕', bsp: 'Ein Führerschein ist ein Pluspunkt.' },
    { de: 'nachfassen', em: '📞', bsp: 'Nach zwei Wochen darfst du nachfassen.' }
  ],
  grammatik: {
    title: 'Grammatik im Kontext',
    blocks: [
      {
        h: 'Konjunktiv II — die Höflichkeitsform',
        txt: 'Amir sagt nicht „Ich will einen Termin", sondern „Ich hätte eine Frage". Drei Formen brauchst du fast immer:',
        table: [
          ['Verb', 'Konjunktiv II', 'Im Satz'],
          ['haben', 'ich hätte, Sie hätten', 'Ich hätte eine Frage.'],
          ['sein', 'ich wäre, es wäre', 'Wäre es besser, wenn ich das erwähne?'],
          ['können', 'ich könnte, Sie könnten', 'Könnten Sie den Text kürzen?'],
          ['alle anderen Verben', 'würde + Infinitiv', 'Ich würde mich gern bewerben.']
        ],
        note: 'Nur haben, sein und die Modalverben bilden eine eigene Form. Für alles andere nimmst du <b>würde + Infinitiv</b> — das ist kein Notbehelf, sondern die normale Variante.'
      },
      {
        h: 'Direkt oder höflich — derselbe Inhalt, andere Wirkung',
        txt: 'In einer Bewerbung wirkt die direkte Form schnell fordernd. Vergleiche:',
        table: [
          ['direkt (wirkt hart)', 'höflich (Konjunktiv II)'],
          ['Ich will diese Stelle.', 'Ich würde mich sehr über diese Stelle freuen.'],
          ['Rufen Sie mich an.', 'Könnten Sie mich kurz anrufen?'],
          ['Ich habe eine Frage.', 'Ich hätte eine Frage.'],
          ['Ist ein Termin am Montag möglich?', 'Wäre ein Termin am Montag möglich?']
        ],
        note: 'Faustregel fürs Anschreiben: Bitten immer im Konjunktiv II, Fakten über dich immer im Indikativ. „Ich <b>habe</b> fünf Jahre Erfahrung und <b>würde</b> mich über ein Gespräch freuen."'
      }
    ]
  },
  uebungen: [
    { typ: 'listen', audio: 'Ich hätte eine Frage zu der Stellenanzeige.', frage: 'Hör zu: Was sagt der Bewerber?', optionen: ['Ich hätte eine Frage zu der Stellenanzeige.', 'Ich habe die Stellenanzeige gefunden.', 'Ich hatte eine Frage zur Anzeige.'], richtig: 0 },
    { typ: 'mc', frage: 'Welcher Satz klingt am Telefon am höflichsten?', optionen: ['Könnten Sie mir sagen, ob die Stelle noch frei ist?', 'Sagen Sie mir, ob die Stelle frei ist.', 'Ich will wissen, ob die Stelle frei ist.'], richtig: 0, hinweis: 'Bitten formulierst du mit könnte, würde oder hätte — nicht im Imperativ.' },
    { typ: 'mc', frage: 'Was gehört NICHT in einen deutschen Lebenslauf?', optionen: ['Der Grund, warum du deine letzte Stelle verlassen hast', 'Berufserfahrung mit Zeitangaben', 'Ausbildung und Abschlüsse'], richtig: 0, hinweis: 'Der Lebenslauf listet Stationen und Fakten. Begründungen gehören ins Anschreiben oder ins Gespräch.' },
    { typ: 'gapbank', frage: 'Setz die höflichen Formen ein.', text: 'Ich ___ mich gern bei Ihnen bewerben. ___ Sie mir sagen, bis wann die Frist läuft? Ich ___ außerdem eine Frage zum Anschreiben.', bank: ['würde', 'Könnten', 'hätte', 'wären', 'müsste'], loesung: ['würde', 'Könnten', 'hätte'], hinweis: 'würde + Infinitiv für Wünsche · könnte für Bitten · hätte für Fragen und Anliegen.' },
    { typ: 'match', frage: 'Welches Dokument gehört wozu?', paare: [['der Lebenslauf', '📄 Stationen und Daten auf einer Seite'], ['das Anschreiben', '✍️ Warum genau diese Stelle?'], ['das Zeugnis', '🏅 Beweis für Abschluss und Leistung'], ['die Stellenanzeige', '📰 Wen der Betrieb sucht'], ['die Frist', '⏳ letzter möglicher Tag']] },
    { typ: 'order', frage: 'Bau die höfliche Bitte!', woerter: ['Könnten', 'Sie', 'mir', 'kurz', 'helfen'], loesung: 'Könnten Sie mir kurz helfen', hinweis: 'In der Frage steht das Verb auf Position 1, danach folgt das Subjekt.' },
    { typ: 'order', frage: 'Bau den Schlusssatz fürs Anschreiben!', woerter: ['würde', 'Ich', 'mich', 'über', 'eine', 'Rückmeldung', 'freuen'], loesung: 'Ich würde mich über eine Rückmeldung freuen', hinweis: 'würde steht auf Position 2, der Infinitiv ganz am Ende.' },
    { typ: 'bild', bild: 'th-bewerbung', frage: 'Die Unterlagen liegen fertig auf dem Tisch. Womit fasst du nach zwei Wochen ohne Antwort nach?', optionen: ['Ich wollte höflich nachfragen, ob meine Bewerbung angekommen ist.', 'Warum haben Sie mir nicht geantwortet?', 'Ich brauche sofort eine Antwort von Ihnen.', 'Meine Bewerbung ist bestimmt verloren gegangen.'], richtig: 0, hinweis: 'Nachfassen heißt erinnern, nicht drängen. Frag nach dem Stand, nicht nach der Schuld.' },
    { typ: 'type', frage: 'Schreib den Schlusssatz deines Anschreibens — höflich, im Konjunktiv II.', muster: 'Über eine Einladung zu einem Gespräch würde ich mich sehr freuen.', akzeptiert: ['würde', 'könnte', 'hätte', 'wäre'], hinweis: 'Nutze würde, könnte, hätte oder wäre. Ein Satz reicht — er soll freundlich klingen, nicht unterwürfig.' }
  ],
  zusammenfassung: {
    kernsaetze: [
      'Ich würde mich gern als … bei Ihnen bewerben.',
      'Ich hätte eine Frage zu Ihrer Stellenanzeige.',
      'Könnten Sie mir sagen, bis wann die Frist läuft?',
      'Wäre ein Termin am Montagvormittag möglich?',
      'Über ein persönliches Gespräch würde ich mich sehr freuen.'
    ],
    merke: [
      'Höflichkeit läuft über <b>Konjunktiv II</b>: <b>hätte</b> (Anliegen), <b>könnte</b> (Bitte), <b>wäre</b> (Vorschlag), <b>würde + Infinitiv</b> (alles andere).',
      'Der Lebenslauf hört bei <b>einer Seite</b> auf, und das <b>Wichtigste steht oben</b> — meist die Berufserfahrung.',
      'Fakten über dich bleiben im <b>Indikativ</b>: „Ich <b>habe</b> fünf Jahre Erfahrung." Nur die <b>Bitte</b> steht im Konjunktiv II.'
    ],
    tipp: 'Such dir diese Woche eine echte Stellenanzeige, die dich interessiert, und schreib nur die letzten drei Sätze des Anschreibens. Nur die. Wenn die sitzen, ist der Rest halb so schwer.'
  },
  sprechen: {
    task: 'Ruf beim Betrieb an: Stell dich vor, sag, auf welche Stelle du dich beworben hast, und frag höflich nach dem Stand deiner Bewerbung. Drei bis vier Sätze, alles laut.',
    tipps: ['Guten Tag, mein Name ist … Ich habe mich als … beworben.', 'Ich hätte eine kurze Frage …', 'Könnten Sie mir sagen, ob meine Unterlagen angekommen sind?', 'Über eine Rückmeldung würde ich mich sehr freuen.']
  }
};
