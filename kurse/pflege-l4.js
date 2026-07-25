// Deutsch für die Pflege – Lektion 4: Die Pflegedokumentation
// deutschoderwas club · Kursmaterial
window.LEKTION = {
  meta: { kurs: 'Deutsch für die Pflege', nr: 4, titel: 'Die Pflegedokumentation', level: 'B1–B2', bild: 'th-fachtext', dauer: 'ca. 20 Min' },
  intro: {
    text: 'Was nicht dokumentiert ist, hat nicht stattgefunden — den Satz hast du schon hundertmal gehört. Was dir keiner sagt: Die Doku hat ihre eigene Sprache. Kurz, unpersönlich, ohne ein einziges Urteil. Hier lernst du, wie du aus dem, was du gesehen hast, einen Eintrag machst, der auch nach zwei Jahren noch trägt.',
    du_lernst: ['Nominalstil für kurze Einträge', 'Passiv in der Verlaufsdokumentation', 'Beobachtung statt Bewertung', 'Wortschatz aus dem Pflegebericht']
  },
  dialog: {
    bild: 'th-fachtext',
    situation: 'Dienstzimmer, kurz vor Feierabend. Praxisanleiterin Katrin geht mit Mehmet seine Einträge vom Mittag durch — nebenbei leuchtet die Rufanlage.',
    lines: [
      { sp: 'Katrin', txt: 'Mehmet, ganz kurz — dein Eintrag von heute Mittag bei Frau Grunwald. Darf ich?' },
      { sp: 'Mehmet', txt: 'Klar. Ich habe geschrieben: „Bewohnerin war heute wieder sehr aggressiv und unfreundlich."' },
      { sp: 'Katrin', txt: 'Und was genau hat sie gemacht?' },
      { sp: 'Mehmet', txt: 'Sie hat den Teller weggeschoben und laut gerufen: Lassen Sie mich in Ruhe.' },
      { sp: 'Katrin', txt: 'Dann schreib genau das. „Aggressiv" ist deine Bewertung — das Wegschieben ist die Beobachtung.' },
      { sp: 'Mehmet', txt: 'Aber das ist doch viel länger. Ich habe noch neun Bewohner offen.' },
      { sp: 'Katrin', txt: 'Länger, ja. Dafür kann dir hinterher keiner etwas. Und hier, Satz drei: „Ich habe sie um 14 Uhr gelagert."' },
      { sp: 'Mehmet', txt: 'Ah — Passiv. „Die Bewohnerin wurde um 14 Uhr auf die linke Seite gelagert."' },
      { sp: 'Katrin', txt: 'Genau. Und das mit dem Essen kommt in einen eigenen Eintrag: Ablehnung der Mahlzeit um 12:30 Uhr. So, ich muss zur Klingel — schreib es um, ich schaue nachher drüber.' },
      { sp: 'Mehmet', txt: 'Mach ich. Substantiv statt Nebensatz, Uhrzeit dran, kein Urteil.' }
    ]
  },
  vokabeln: [
    { de: 'die Pflegedokumentation', em: '📁', bsp: 'Die Pflegedokumentation ist Teil der Behandlungsakte.' },
    { de: 'der Eintrag', em: '📝', bsp: 'Jeder Eintrag braucht Datum, Uhrzeit und Handzeichen.' },
    { de: 'die Beobachtung', em: '👁️', bsp: 'Die Beobachtung gehört in die Doku, das Urteil nicht.' },
    { de: 'die Bewertung', em: '⚖️', bsp: '„Aggressiv" ist eine Bewertung, keine Beobachtung.' },
    { de: 'nachvollziehbar', em: '🔗', bsp: 'Der Eintrag muss für Dritte nachvollziehbar sein.' },
    { de: 'die Maßnahme', em: '🧰', bsp: 'Die Maßnahme wurde wie geplant durchgeführt.' },
    { de: 'durchgeführt', em: '✔️', bsp: 'Prophylaxe durchgeführt, keine Auffälligkeiten.' },
    { de: 'die Lagerung', em: '🔁', bsp: 'Lagerung auf die linke Seite um 14 Uhr.' },
    { de: 'die Ablehnung', em: '🚫', bsp: 'Ablehnung der angebotenen Mahlzeit um 12:30 Uhr.' },
    { de: 'die Ausscheidung', em: '🚽', bsp: 'Ausscheidung unauffällig, Menge normal.' },
    { de: 'zeitnah', em: '⏱️', bsp: 'Bitte zeitnah dokumentieren, nicht erst am Schichtende.' },
    { de: 'das Handzeichen', em: '✍️', bsp: 'Ohne Handzeichen ist der Eintrag wertlos.' },
    { de: 'die Zustandsverschlechterung', em: '📉', bsp: 'Zustandsverschlechterung seit dem 12.03.' },
    { de: 'ohne Befund (o. B.)', em: '🔎', bsp: 'Hautinspektion o. B.' },
    { de: 'wörtlich zitieren', em: '💬', bsp: 'Bewohnerin äußert: „Lassen Sie mich in Ruhe."' },
    { de: 'laut Verordnung', em: '📄', bsp: 'Laut Verordnung zweimal täglich verabreicht.' }
  ],
  grammatik: {
    title: 'Grammatik im Berufskontext',
    blocks: [
      {
        h: 'Nominalstil und Passiv — die Sprache der Kurve',
        txt: 'Gesprochen sagst du ganze Sätze mit „ich". Geschrieben verschwindet das Ich: Aus dem Verb wird ein Substantiv, aus dem Aktiv ein Passiv. Das spart Platz und macht den Eintrag überprüfbar:',
        table: [
          ['So sagst du es', 'So steht es in der Doku'],
          ['Ich habe sie um 14 Uhr gelagert.', 'Lagerung um 14 Uhr auf die linke Seite.'],
          ['Sie wollte nichts essen.', 'Ablehnung der angebotenen Mahlzeit um 12:30 Uhr.'],
          ['Ich habe den Verband gewechselt.', 'Verbandwechsel am rechten Unterschenkel um 09:15 Uhr.'],
          ['Der Arzt hat das Mittel abgesetzt.', 'Das Mittel wurde laut Verordnung abgesetzt.'],
          ['Ich habe mit der Tochter telefoniert.', 'Information der Angehörigen um 16:40 Uhr erfolgt.']
        ],
        note: 'Zwei Bauteile reichen: <b>Substantiv aus dem Verb</b> (lagern → Lagerung, ablehnen → Ablehnung, wechseln → Wechsel) plus <b>Uhrzeit</b>. Wenn du doch einen ganzen Satz brauchst, nimm Passiv — <b>wurde + Partizip II</b>.'
      },
      {
        h: 'Beobachtung statt Bewertung',
        txt: 'Der Unterschied entscheidet im Zweifel vor Gericht. Beobachtung ist, was eine Kamera aufgenommen hätte. Bewertung ist alles, was du dazudenkst:',
        table: [
          ['Wertend (raus)', 'Objektiv (rein)'],
          ['Bewohnerin war aggressiv.', 'Bewohnerin schob den Teller weg und äußerte: „Lassen Sie mich in Ruhe."'],
          ['Er ist unkooperativ.', 'Er lehnte die Körperpflege dreimal ab.'],
          ['Sie hat schlecht gegessen.', 'Von der Mahlzeit wurden etwa zwei Löffel aufgenommen.'],
          ['Er war heute wieder anstrengend.', 'Er betrat zwischen 8 und 10 Uhr fünfmal das Dienstzimmer.'],
          ['Ihr geht es besser.', 'Sie ging heute erstmals ohne Unterstützung bis zum Aufenthaltsraum.']
        ],
        note: 'Faustregel: Steht in deinem Eintrag ein <b>Adjektiv über den Charakter</b> eines Menschen, ist es fast immer eine Bewertung. Zahlen, Zitate und Uhrzeiten sind nie eine.'
      }
    ]
  },
  uebungen: [
    { typ: 'mc', frage: 'Welcher Satz gehört so in die Pflegedokumentation?', optionen: ['Bewohnerin schob den Teller weg und äußerte: „Lassen Sie mich in Ruhe."', 'Bewohnerin war heute wieder sehr aggressiv.', 'Bewohnerin hatte mal wieder einen ihrer Tage.'], richtig: 0, hinweis: 'Dokumentiert wird nur, was eine Kamera aufgenommen hätte: Handlung und wörtliches Zitat.' },
    { typ: 'bild', bild: 'th-fachtext', frage: 'Du hast keine Zeit und willst die Doku ans Schichtende schieben. Was spricht dagegen?', optionen: ['Einträge müssen zeitnah erfolgen — sonst fehlen Details und Uhrzeiten stimmen nicht mehr.', 'Nichts, Hauptsache es steht am Ende der Schicht drin.', 'Am Schichtende ist man ruhiger und schreibt deshalb besser.'], richtig: 0, hinweis: 'Zeitnah heißt: möglichst direkt nach der Maßnahme. Erinnerung ist keine Quelle.' },
    { typ: 'gapbank', frage: 'Mach aus den Verben Substantive (Nominalstil).', text: '___ der Nahrung um 12:30 Uhr. ___ auf die linke Seite um 14 Uhr. ___ des Verbandes am rechten Unterschenkel.', bank: ['Ablehnung', 'Lagerung', 'Wechsel', 'Gabe', 'Kontrolle'], loesung: ['Ablehnung', 'Lagerung', 'Wechsel'], hinweis: 'Aus ablehnen wird die Ablehnung, aus lagern die Lagerung, aus wechseln der Wechsel.' },
    { typ: 'match', frage: 'Gesprochen und dokumentiert — was gehört zusammen?', paare: [['Ich habe den Verband gewechselt.', '🩹 Verbandwechsel um 09:15 Uhr'], ['Sie wollte nichts essen.', '🚫 Ablehnung der angebotenen Mahlzeit'], ['Ich habe die Tochter angerufen.', '📞 Information der Angehörigen erfolgt'], ['Die Haut war in Ordnung.', '🔎 Hautinspektion o. B.'], ['Ich habe sie umgelagert.', '🔁 Lagerung auf die linke Seite']] },
    { typ: 'order', frage: 'Bau den Verlaufseintrag im Passiv!', woerter: ['gelagert', 'Bewohnerin', 'linke', 'wurde', 'die', 'auf', 'Seite', 'Die'], loesung: 'Die Bewohnerin wurde auf die linke Seite gelagert', hinweis: 'Subjekt – wurde – Ergänzungen – Partizip II ganz am Ende.' },
    { typ: 'listen', audio: 'Ablehnung der angebotenen Mahlzeit um zwölf Uhr dreißig.', frage: 'Hör zu: Wann wurde die Mahlzeit abgelehnt?', optionen: ['um 12:30 Uhr', 'um 12:13 Uhr', 'um 13:30 Uhr'], richtig: 0 },
    { typ: 'mc', frage: 'Was fehlt diesem Eintrag: „Bewohner hat kaum getrunken."?', optionen: ['Menge und Uhrzeit — zum Beispiel: Trinkmenge bis 14 Uhr etwa 300 ml.', 'Nichts, das ist präzise genug.', 'Der Grund, warum er nicht trinken wollte.'], richtig: 0, hinweis: '„Kaum" ist eine Bewertung. Zahlen und Zeiten machen daraus eine Beobachtung.' },
    { typ: 'type', frage: 'Schreib objektiv um: „Herr Nowak war heute total unkooperativ."', muster: 'Herr Nowak lehnte die Körperpflege am Vormittag dreimal ab.', akzeptiert: ['lehnte', 'ablehnung', 'abgelehnt', 'verweigerte'], hinweis: 'Ersetze das Charakter-Adjektiv durch die konkrete Handlung — was genau hat er getan oder nicht getan?' },
    { typ: 'mc', frage: 'Eine Bewohnerin sagt: „Ich will hier nicht mehr sein." Wie hältst du das fest?', optionen: ['Als wörtliches Zitat mit Uhrzeit, dazu die Information an die Pflegedienstleitung.', 'Gar nicht, das sagt sie öfter.', 'Als Vermerk: Bewohnerin war depressiv verstimmt.'], richtig: 0, hinweis: 'Äußerungen mit möglichem Selbstgefährdungsbezug werden wörtlich dokumentiert und weitergegeben — eine Diagnose stellst du nicht.' },
    { typ: 'type', frage: 'Dokumentiere im Nominalstil: Du hast um 9 Uhr am rechten Bein einen Kompressionsverband angelegt.', muster: 'Anlage des Kompressionsverbandes am rechten Bein um 09:00 Uhr.', akzeptiert: ['anlage', 'kompressionsverband', 'um 09', 'um 9'], hinweis: 'Substantiv zuerst, dann Ort am Körper, dann Uhrzeit. Kein „ich".' }
  ],
  zusammenfassung: {
    kernsaetze: [
      'Lagerung um 14 Uhr auf die linke Seite.',
      'Ablehnung der angebotenen Mahlzeit um 12:30 Uhr.',
      'Verbandwechsel am rechten Unterschenkel, Wunde reizlos.',
      'Bewohnerin äußert: „Lassen Sie mich in Ruhe."',
      'Information der Angehörigen um 16:40 Uhr erfolgt.'
    ],
    merke: [
      '<b>Nominalstil</b>: Verb wird Substantiv — lagern → <b>Lagerung</b>, ablehnen → <b>Ablehnung</b>, wechseln → <b>Wechsel</b>.',
      'Ganzer Satz nötig? Dann <b>Passiv</b>: <b>wurde + Partizip II</b>, ohne „ich".',
      'Nie ein Urteil über den Menschen. <b>Zahlen, Uhrzeiten, Zitate</b> — daraus wird ein Eintrag, der hält.'
    ],
    tipp: 'Nimm dir diese Woche drei eigene Einträge vor und streich jedes Adjektiv durch, das etwas über den Charakter des Bewohners sagt. Ersetz es durch das, was du tatsächlich gesehen hast. Nach zehn Einträgen schreibst du automatisch anders.'
  },
  sprechen: {
    task: 'Diktiere dir selbst einen Verlaufseintrag für eine komplette Frühschicht: Körperpflege, Mobilisation, Essen, Ausscheidung, Auffälligkeiten. Sprich im Nominalstil und mit Uhrzeiten, so als würdest du direkt in die Kurve schreiben.',
    tipps: ['Körperpflege am Waschbecken mit Unterstützung durchgeführt.', 'Mobilisation in den Sessel von 10:00 bis 11:30 Uhr.', 'Trinkmenge bis 14 Uhr etwa 600 ml.', 'Hautinspektion o. B., keine Rötungen.']
  }
};
