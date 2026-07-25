// Vorbereitungstraining Goethe & telc – Lektion 1: Lesen — die Aufgabentypen und ihre Fallen
// deutschoderwas club · Kursmaterial
window.LEKTION = {
  meta: { kurs: 'Vorbereitungstraining Goethe & telc', nr: 1, titel: 'Lesen — die Aufgabentypen und ihre Fallen', level: 'A2–C1', bild: 'th-fachtext', dauer: 'ca. 25 Min' },
  intro: {
    text: 'Du verstehst die Texte. Trotzdem reicht die Zeit nicht und die Punkte fehlen. Das liegt nicht an deinem Deutsch, sondern daran, wie du liest. Hier siehst du, wie die Aufgabentypen im Leseteil gebaut sind, wo die Ablenker sitzen und wie du dir die Minuten einteilst.',
    du_lernst: ['Die Aufgabentypen im Leseteil', 'Zeitbudget pro Teil', 'Ablenker erkennen', 'Wann „Text sagt dazu nichts" stimmt']
  },
  dialog: {
    bild: 'th-fachtext',
    situation: 'Nach dem Übungstest im Kursraum. Frau Yilmaz geht mit Olena den Leseteil durch — drei Aufgaben sind leer geblieben.',
    lines: [
      { sp: 'Frau Yilmaz', txt: 'Dreizehn von zwanzig. Wo bist du hängen geblieben?' },
      { sp: 'Olena', txt: 'Bei Teil 2. Ich habe den ersten Text dreimal gelesen, dann war die Zeit weg.' },
      { sp: 'Frau Yilmaz', txt: 'Dreimal. Und danach?' },
      { sp: 'Olena', txt: 'Danach habe ich nur noch geraten. Aber ich verstehe die Texte doch —' },
      { sp: 'Frau Yilmaz', txt: 'Genau das ist dein Problem. Du liest wie eine Leserin, nicht wie eine Kandidatin. Du sollst nicht verstehen, du sollst finden.' },
      { sp: 'Olena', txt: 'Und wenn ein Wort fehlt, das ich nicht kenne?' },
      { sp: 'Frau Yilmaz', txt: 'Weiterlesen. Schau, Aufgabe 7. Im Text steht: „Die Anmeldung ist ausschließlich online möglich." In der Aufgabe steht: „Man kann sich auch telefonisch anmelden." Was ist das?' },
      { sp: 'Olena', txt: 'Falsch. Ausschließlich heißt nur.' },
      { sp: 'Frau Yilmaz', txt: 'Sofort richtig. Warum hast du im Test dann „Der Text sagt dazu nichts" angekreuzt?' },
      { sp: 'Olena', txt: 'Weil das Wort telefonisch im Text gar nicht vorkam. Ich habe nach dem Wort gesucht statt nach dem Sinn.' }
    ]
  },
  vokabeln: [
    { de: 'die Aufgabenstellung', em: '📌', bsp: 'Erst lesen, was gefragt ist — dann den Text.' },
    { de: 'überfliegen', em: '👀', bsp: 'einmal schnell drüber, nur für den Überblick' },
    { de: 'der Schlüsselbegriff', em: '🔑', bsp: 'Datum, Zahl, Name, Ort — daran hältst du dich fest.' },
    { de: 'die Zuordnungsaufgabe', em: '🧩', bsp: 'Person zu Anzeige — es bleiben immer Anzeigen übrig, die zu niemandem passen.' },
    { de: 'der Ablenker', em: '🪤', bsp: 'die Option, die fast stimmt' },
    { de: 'die Umschreibung', em: '♻️', bsp: 'Die Lösung steht nie mit denselben Wörtern im Text.' },
    { de: 'ausschließlich', em: '⛔', bsp: 'ausschließlich = nur. Ein klassisches Prüfungswort.' },
    { de: 'Der Text sagt dazu nichts.', em: '❔', bsp: 'nur, wenn das Thema wirklich fehlt' },
    { de: 'ankreuzen', em: '✍️', bsp: 'Kreuz jede Aufgabe an — auch die unsicheren.' },
    { de: 'der Antwortbogen', em: '📝', bsp: 'Nicht übertragen heißt: keine Punkte.' },
    { de: 'sich verzetteln', em: '⏳', bsp: 'zu lange an einer Aufgabe kleben' },
    { de: 'eine Aufgabe überspringen', em: '⏭️', bsp: 'Weiter, und am Ende zurück.' },
    { de: 'die Restzeit', em: '⏱️', bsp: 'Die letzten fünf Minuten gehören dem Antwortbogen.' },
    { de: 'die Textstelle markieren', em: '🖍️', bsp: 'Unterstreich die Zeile, die die Antwort trägt.' },
    { de: 'raten', em: '🎲', bsp: 'Ein falsches Kreuz gibt keinen Abzug, ein leeres Feld nie einen Punkt.' },
    { de: 'die Aussage', em: '🗒️', bsp: 'Stimmt die Aussage mit dem Text überein?' }
  ],
  grammatik: {
    title: 'Was die Prüfung von dir will',
    blocks: [
      {
        h: 'Die Aufgabentypen im Leseteil — und deine Zeit pro Teil',
        txt: 'Jeder Teil prüft etwas anderes. Wer alle Teile gleich liest, verliert genau dort Zeit, wo es nichts bringt.',
        table: [
          ['Aufgabentyp', 'Was du siehst', 'Was geprüft wird', 'Technik', 'Zeit'],
          ['Zuordnung', 'Kurztexte und Personen mit Wünschen', 'gezieltes Suchen', 'Wünsche zuerst lesen, dann scannen', 'ca. 10 Min'],
          ['Richtig / Falsch', 'ein Sachtext und Aussagen dazu', 'Detailverstehen', 'Aussage lesen, Textstelle suchen, vergleichen', 'ca. 12 Min'],
          ['Multiple Choice', 'ein längerer Text, drei Optionen je Frage', 'Hauptaussage und Absicht', 'Absatz für Absatz, Optionen erst danach', 'ca. 15 Min'],
          ['Anzeigen / Schilder', 'kurze Aushänge, Hinweise, Regeln', 'Alltagsorientierung', 'nur nach dem einen Detail suchen', 'ca. 6 Min']
        ],
        note: 'Schreib dir die Uhrzeit auf, zu der du bei jedem Teil spätestens fertig sein musst. Nicht die Minuten — die Uhrzeit.'
      },
      {
        h: 'So ist ein Ablenker gebaut',
        txt: 'Ein Ablenker ist nie offensichtlich falsch. Er nimmt die Wörter aus dem Text und dreht eine Kleinigkeit um:',
        table: [
          ['Im Text steht', 'In der Aufgabe steht', 'Warum es nicht passt'],
          ['Die Anmeldung ist ausschließlich online möglich.', 'Man kann sich auch telefonisch anmelden.', 'ausschließlich schließt jeden anderen Weg aus'],
          ['Der Kurs findet in den Schulferien nicht statt.', 'Der Kurs läuft das ganze Jahr durch.', 'die Ausnahme wird einfach weggelassen'],
          ['Er hat lange überlegt und sich dann entschieden.', 'Er hat spontan entschieden.', 'lange überlegt ist das Gegenteil von spontan'],
          ['Der Eintritt ist für Kinder bis 12 Jahre frei.', 'Der Eintritt ist für alle frei.', 'aus einer Gruppe werden alle gemacht'],
          ['Frau Bergmann arbeitet seit Mai in Leipzig.', 'Frau Bergmann zieht im Mai nach Leipzig.', 'arbeiten seit ist keine Aussage über den Umzug']
        ],
        note: 'Achte auf die kleinen Wörter: nur, auch, alle, immer, kein, ab, bis, seit. Sie entscheiden fast jede Aufgabe.'
      }
    ]
  },
  uebungen: [
    { typ: 'listen', audio: 'Die Anmeldung ist ausschließlich online möglich.', frage: 'Hör zu: Welche Aussage stimmt mit dem Satz überein?', optionen: ['Man kann sich auch telefonisch anmelden.', 'Man kann sich nur im Internet anmelden.', 'Die Anmeldung ist schon geschlossen.'], richtig: 1 },
    { typ: 'mc', frage: 'Im Text steht: „Der Kurs findet in den Schulferien nicht statt." Die Aufgabe sagt: „Der Kurs läuft das ganze Jahr durch." Was kreuzt du an?', optionen: ['Falsch', 'Richtig', 'Der Text sagt dazu nichts'], richtig: 0, hinweis: 'Wenn der Text eine Ausnahme nennt und die Aussage sie unterschlägt, ist die Aussage falsch.' },
    { typ: 'mc', frage: 'Wann ist „Der Text sagt dazu nichts" wirklich richtig?', optionen: ['Wenn ein Wort aus der Aufgabe nicht wörtlich im Text steht', 'Wenn du den Satz im Text nicht verstehst', 'Wenn das Thema der Aussage im Text überhaupt nicht vorkommt'], richtig: 2, hinweis: 'Es geht um den Inhalt, nicht um einzelne Wörter. Fast jede Lösung ist umschrieben.' },
    { typ: 'match', frage: 'Aufgabentyp und passende Technik — was gehört zusammen?', paare: [['Zuordnung', '🧩 zuerst die Wünsche der Personen lesen'], ['Richtig / Falsch', '🖍️ die Textstelle suchen und markieren'], ['Multiple Choice', '📖 Absatz lesen, dann erst die Optionen'], ['Anzeigen und Schilder', '🔍 nur nach dem einen Detail scannen'], ['letzte fünf Minuten', '📝 alles auf den Antwortbogen übertragen']] },
    { typ: 'gapbank', frage: 'So gehst du an jeden Lesetext heran. Setz ein.', text: 'Lies zuerst die ___, dann ___ du den Text. Wenn du hängst, ___ du die Aufgabe und kommst später zurück.', bank: ['Aufgabenstellung', 'überfliegst', 'überspringst', 'übersetzt'], loesung: ['Aufgabenstellung', 'überfliegst', 'überspringst'], hinweis: 'Übersetzen kostet Zeit und bringt keinen einzigen Punkt.' },
    { typ: 'order', frage: 'Bau den Satz aus dem Prüfungstext!', woerter: ['online', 'Die', 'ist', 'möglich', 'Anmeldung', 'ausschließlich'], loesung: 'Die Anmeldung ist ausschließlich online möglich', hinweis: 'Subjekt, dann Verb auf Position 2, die Angaben danach.' },
    { typ: 'bild', bild: 'th-fachtext', frage: 'Vor dir liegt ein dichter Sachtext mit vier Fragen. Womit fängst du an?', optionen: ['Mit dem ersten Absatz, Wort für Wort', 'Mit den Fragen — dann weißt du, wonach du suchst', 'Mit dem Wörterbuch für die unbekannten Wörter', 'Mit dem letzten Absatz, da steht meistens die Lösung'], richtig: 1, hinweis: 'Die Fragen sind deine Suchaufträge. Ohne sie liest du ins Blaue.' },
    { typ: 'mc', frage: 'Fünf Minuten vor Schluss sind noch vier Aufgaben offen. Was tust du?', optionen: ['Alle vier Texte noch in Ruhe lesen', 'Die vier Felder leer lassen, raten ist unehrlich', 'Alle vier ankreuzen, auch geraten, und den Bogen übertragen'], richtig: 2, hinweis: 'Für ein leeres Feld gibt es null Punkte, für ein geratenes vielleicht einen. Abzug gibt es nicht.' },
    { typ: 'mc', frage: 'Welches kleine Wort verändert die Aussage am stärksten?', optionen: ['nur', 'gestern', 'gern'], richtig: 0, hinweis: 'nur, auch, alle, kein und immer sind die Schrauben, an denen die Prüfung dreht.' },
    { typ: 'type', frage: 'Schreib in einem Satz, was du machst, bevor du einen Prüfungstext liest.', muster: 'Ich lese zuerst die Aufgabenstellung und markiere die Schlüsselbegriffe.', akzeptiert: ['aufgabe', 'frage', 'schlüssel'], hinweis: 'Nenne die Reihenfolge: erst die Aufgabe, dann der Text.' }
  ],
  zusammenfassung: {
    kernsaetze: [
      'Erst die Aufgabe, dann der Text — nie umgekehrt.',
      'Die Lösung steht immer umschrieben, nie mit denselben Wörtern.',
      '„Der Text sagt dazu nichts" gilt nur, wenn das Thema fehlt.',
      'Hängen bleiben ist teurer als raten: überspringen und zurückkommen.',
      'Die letzten fünf Minuten gehören dem Antwortbogen.'
    ],
    merke: [
      'Kleine Wörter entscheiden: <b>nur · auch · alle · kein · seit · ab · bis</b>.',
      'Ein Ablenker klingt fast richtig — er dreht <b>eine einzige Information</b> um.',
      'Kein Feld bleibt leer. <b>Für falsch gibt es keinen Abzug, für leer nie einen Punkt.</b>'
    ],
    tipp: 'Nimm dir diese Woche jeden Tag einen Übungstext und stell dir den Wecker auf die vorgesehene Zeit. Wenn er klingelt, hörst du auf — auch mitten im Satz. Nach fünf Tagen weißt du körperlich, wie lange zehn Minuten sind.'
  },
  sprechen: {
    task: 'Nimm eine Anzeige aus einer Zeitung oder von einem Aushang. Sprich laut, was drinsteht und was garantiert nicht drinsteht — genau so, wie du es in einer Richtig-Falsch-Aufgabe entscheiden müsstest.',
    tipps: ['Im Text steht: …', 'Daraus folgt: …', 'Das steht dort nicht, also …', 'Das Wort „nur" schließt aus, dass …']
  }
};
