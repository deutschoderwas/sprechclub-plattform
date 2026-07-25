// Alltagsdeutsch A2 – Lektion 3: Eine Wohnung suchen
// deutschoderwas club · Kursmaterial
window.LEKTION = {
  meta: { kurs: 'Alltagsdeutsch A2', nr: 3, titel: 'Eine Wohnung suchen', level: 'A2', bild: 'th-wohnung', dauer: 'ca. 18 Min' },
  intro: {
    text: 'Eine Wohnungsbesichtigung dauert oft nur zwanzig Minuten — und in dieser Zeit musst du fragen, was wirklich zählt: Miete, Nebenkosten, Kaution. Hier bekommst du die Wörter dafür. Und du lernst den Unterschied zwischen „Der Schrank steht im Flur" und „Ich stelle den Schrank in den Flur".',
    du_lernst: ['Bei der Besichtigung fragen', 'Miete, Nebenkosten, Kaution', 'Wo? mit Dativ – Wohin? mit Akkusativ', 'stehen/stellen · liegen/legen']
  },
  dialog: {
    bild: 'th-wohnung',
    situation: 'Kwame Mensah besichtigt eine Zweizimmerwohnung. Die Vermieterin, Frau Schneider, zeigt ihm die Räume.',
    lines: [
      { sp: 'Frau Schneider', txt: 'Guten Tag, Herr Mensah. Schön, dass Sie pünktlich sind. Kommen Sie herein.' },
      { sp: 'Kwame', txt: 'Guten Tag, Frau Schneider. Die Wohnung liegt wirklich ruhig.' },
      { sp: 'Frau Schneider', txt: 'Ja, der Balkon geht nach hinten in den Hof. Und hier ist das Wohnzimmer.' },
      { sp: 'Kwame', txt: 'Das ist hell. Wo steht bei Ihnen die Waschmaschine?' },
      { sp: 'Frau Schneider', txt: 'Im Keller, jede Wohnung hat dort einen Platz. Das Bad ist neben der Küche.' },
      { sp: 'Kwame', txt: 'Darf ich meinen Schrank an die Wand im Schlafzimmer stellen?' },
      { sp: 'Frau Schneider', txt: 'Natürlich. Sie dürfen auch Bilder an die Wände hängen — nur bitte keine Löcher in die Fliesen bohren.' },
      { sp: 'Kwame', txt: 'Verstanden. Und was kostet die Wohnung warm?' },
      { sp: 'Frau Schneider', txt: 'Achthundert Euro warm. Die Kaution sind zwei Kaltmieten.' },
      { sp: 'Kwame', txt: 'Gut. Die Unterlagen lege ich heute Abend in Ihren Briefkasten.' }
    ]
  },
  vokabeln: [
    { de: 'die Besichtigung', em: '🔑', bsp: 'Die Besichtigung ist am Samstag um elf.' },
    { de: 'die Vermieterin', em: '🧑‍💼', bsp: 'Die Vermieterin zeigt mir die Wohnung.' },
    { de: 'die Warmmiete', em: '💶', bsp: 'Die Warmmiete sind achthundert Euro.' },
    { de: 'die Nebenkosten', em: '🔥', bsp: 'Heizung, Wasser und Müll sind Nebenkosten.' },
    { de: 'die Kaution', em: '🏦', bsp: 'Die Kaution sind zwei Kaltmieten.' },
    { de: 'der Mietvertrag', em: '📑', bsp: 'Den Mietvertrag unterschreiben wir am Freitag.' },
    { de: 'der Balkon', em: '🌿', bsp: 'Der Balkon geht in den Hof.' },
    { de: 'der Keller', em: '📦', bsp: 'Die Waschmaschine steht im Keller.' },
    { de: 'das Schlafzimmer', em: '🛏️', bsp: 'Der Schrank steht im Schlafzimmer.' },
    { de: 'der Schrank', em: '🗄️', bsp: 'Ich stelle den Schrank an die Wand.' },
    { de: 'die Wand', em: '🧱', bsp: 'Ich hänge das Bild an die Wand.' },
    { de: 'der Briefkasten', em: '📬', bsp: 'Die Unterlagen liegen im Briefkasten.' },
    { de: 'die Unterlagen', em: '📄', bsp: 'Der Vermieter möchte alle Unterlagen sehen.' },
    { de: 'hell und ruhig', em: '☀️', bsp: 'Die Wohnung ist hell und ruhig.' }
  ],
  grammatik: {
    title: 'Grammatik im Kontext',
    blocks: [
      {
        h: 'Wechselpräpositionen: Wo? oder Wohin?',
        txt: 'Neun Präpositionen können beides: Dativ oder Akkusativ. Die Frage entscheidet — Ort oder Ziel.',
        table: [
          ['Präposition', 'Wo? + Dativ', 'Wohin? + Akkusativ'],
          ['in', 'Der Schrank steht im Schlafzimmer.', 'Ich stelle den Schrank ins Schlafzimmer.'],
          ['an', 'Das Bild hängt an der Wand.', 'Ich hänge das Bild an die Wand.'],
          ['auf', 'Die Unterlagen liegen auf dem Tisch.', 'Ich lege die Unterlagen auf den Tisch.'],
          ['neben', 'Das Bad ist neben der Küche.', 'Ich stelle die Maschine neben die Dusche.'],
          ['über / unter', 'Die Lampe hängt über dem Tisch.', 'Ich hänge die Lampe über den Tisch.']
        ],
        note: 'Die neun Wechselpräpositionen: <b>in, an, auf, über, unter, vor, hinter, neben, zwischen</b>. Kurzformen: in dem = im · in das = ins · an dem = am.'
      },
      {
        h: 'Verbpaare: stehen/stellen, liegen/legen',
        txt: 'Manche Verben beschreiben einen Ort, andere eine Bewegung dorthin. Sie kommen immer paarweise.',
        table: [
          ['Wo? + Dativ (Ort)', 'Wohin? + Akkusativ (Bewegung)'],
          ['stehen – Der Schrank steht im Flur.', 'stellen – Ich stelle den Schrank in den Flur.'],
          ['liegen – Die Unterlagen liegen auf dem Tisch.', 'legen – Ich lege die Unterlagen auf den Tisch.'],
          ['hängen – Das Bild hängt an der Wand.', 'hängen – Ich hänge das Bild an die Wand.'],
          ['sitzen – Wir sitzen auf dem Balkon.', 'setzen – Wir setzen uns auf den Balkon.']
        ],
        note: 'Merkhilfe: Die Verben mit <b>-e-</b> in der Mitte (st<b>e</b>llen, l<b>e</b>gen, s<b>e</b>tzen) bringen etwas irgendwohin — sie brauchen den Akkusativ.'
      }
    ]
  },
  uebungen: [
    { typ: 'listen', audio: 'Die Waschmaschine steht im Keller, das Bad ist neben der Küche.', frage: 'Hör zu: Wo steht die Waschmaschine?', optionen: ['Im Keller.', 'Im Bad.', 'Neben der Küche.'], richtig: 0 },
    { typ: 'mc', frage: 'Ich hänge das Bild ___ Wand.', optionen: ['an die', 'an der', 'auf der'], richtig: 0, hinweis: 'Hängen mit Bewegung fragt nach wohin — also Akkusativ.' },
    { typ: 'mc', frage: 'Das Bad ist ___ Küche.', optionen: ['neben der', 'neben die', 'neben dem'], richtig: 0, hinweis: 'Wo? verlangt den Dativ. Die Küche ist feminin.' },
    { typ: 'mc', frage: 'Welche Frage passt zu „Ich stelle den Schrank ins Schlafzimmer"?', optionen: ['Wohin stellst du den Schrank?', 'Wo steht der Schrank?', 'Woher kommt der Schrank?'], richtig: 0, hinweis: 'Der Akkusativ antwortet auf die Frage wohin.' },
    { typ: 'gapbank', frage: 'Dativ oder Akkusativ?', text: 'Der Schrank steht ___ Schlafzimmer. Die Unterlagen lege ich ___ Briefkasten. Das Bild hängt ___ Wand.', bank: ['im', 'in den', 'an der', 'an die', 'auf dem'], loesung: ['im', 'in den', 'an der'], hinweis: 'stehen und hängen zeigen den Ort, legen zeigt die Bewegung.' },
    { typ: 'order', frage: 'Wohin kommen die Unterlagen? Sortiere den Satz!', woerter: ['die', 'Ich', 'Unterlagen', 'in', 'lege', 'Briefkasten', 'den'], loesung: 'Ich lege die Unterlagen in den Briefkasten', hinweis: 'legen bewegt etwas an einen Ort — die Präposition bekommt den Akkusativ.' },
    { typ: 'order', frage: 'Wo steht die Waschmaschine? Sortiere den Satz!', woerter: ['steht', 'Waschmaschine', 'Keller', 'Die', 'im'], loesung: 'Die Waschmaschine steht im Keller', hinweis: 'stehen beschreibt den Ort — im ist die Kurzform von in dem.' },
    { typ: 'match', frage: 'Wohnung und Verben: Was passt zu was?', paare: [['stehen', '🧍 Wo? mit Dativ'], ['stellen', '➡️ Wohin? mit Akkusativ'], ['die Kaution', '🏦 Geld als Sicherheit für den Vermieter'], ['die Nebenkosten', '🔥 Heizung, Wasser, Müll'], ['die Besichtigung', '🔑 Termin in der leeren Wohnung']] },
    { typ: 'bild', bild: 'th-wohnung', frage: 'Du stehst in der leeren Wohnung und suchst den Platz für die Waschmaschine. Was fragst du?', optionen: ['Wo kann ich die Waschmaschine anschließen?', 'Wohin steht die Waschmaschine?', 'Wo stelle ich die Waschmaschine hin dem Keller?', 'Wohin ist die Waschmaschine?'], richtig: 0, hinweis: 'Wo fragt nach dem Ort, wohin nach dem Ziel einer Bewegung.' },
    { typ: 'type', frage: 'Beschreib dein Wohnzimmer: Wo steht oder hängt was?', muster: 'Das Sofa steht an der Wand und die Lampe hängt über dem Tisch.', akzeptiert: ['(steht|liegt|hängt|sitzt) .+', '(an|auf|in|neben|über|unter) (dem|der|einem|einer) .+'], hinweis: 'Ohne Bewegung: Wo? mit Dativ — an der Wand, auf dem Tisch, neben dem Sofa.' }
  ],
  zusammenfassung: {
    kernsaetze: [
      'Wie hoch ist die Warmmiete und was gehört zu den Nebenkosten?',
      'Wie viel Kaution muss ich zahlen?',
      'Wo steht die Waschmaschine? – Im Keller.',
      'Darf ich den Schrank an die Wand stellen?',
      'Die Unterlagen lege ich heute Abend in Ihren Briefkasten.'
    ],
    merke: [
      'Wechselpräpositionen: <b>Wo? → Dativ</b> (im Keller) · <b>Wohin? → Akkusativ</b> (in den Keller).',
      'Ortsverben nehmen den Dativ: <b>stehen, liegen, hängen, sitzen</b>. Bewegungsverben nehmen den Akkusativ: <b>stellen, legen, hängen, setzen</b>.',
      'Kurzformen sparen Zeit: <b>in dem = im · in das = ins · an dem = am</b>.'
    ],
    tipp: 'Geh einmal durch deine Wohnung und sag zu jedem Möbelstück laut zwei Sätze: einen mit Wo (Der Tisch steht am Fenster) und einen mit Wohin (Ich stelle den Tisch ans Fenster). Zehn Möbelstücke reichen für die ganze Regel.'
  },
  sprechen: {
    task: 'Spiel eine Besichtigung: Beschreib in drei Sätzen, wo in der Wohnung was steht, und stell der Vermieterin drei Fragen zu Miete, Nebenkosten und Kaution.',
    tipps: ['Die Wohnung ist hell und liegt ruhig.', 'Wo steht die Waschmaschine? – Wohin darf ich den Schrank stellen?', 'Wie hoch sind die Nebenkosten?', 'Wann kann ich den Mietvertrag unterschreiben?']
  }
};
