// Alltagsdeutsch A2 – Lektion 5: Kleidung kaufen und umtauschen
// deutschoderwas club · Kursmaterial
window.LEKTION = {
  meta: { kurs: 'Alltagsdeutsch A2', nr: 5, titel: 'Kleidung kaufen und umtauschen', level: 'A2', bild: 'th-einkauf', dauer: 'ca. 18 Min' },
  intro: {
    text: 'Der Mantel ist zu klein, der Kassenbon liegt noch in der Tasche — jetzt musst du im Laden erklären, was du willst. Hier lernst du die Sätze für Umtausch und Beratung. Und du hörst zwei Dinge, die im Geschäft ständig vorkommen: der blaue Mantel und der ist teurer als der graue.',
    du_lernst: ['Umtauschen und reklamieren', 'Größe, Farbe, Passform', 'Adjektive nach der / das / die', 'Komparativ und Vergleich mit als']
  },
  dialog: {
    bild: 'th-einkauf',
    situation: 'Fatima steht mit einer Tüte im Bekleidungsgeschäft. Der Verkäufer Tobias ist an der Kasse.',
    lines: [
      { sp: 'Fatima', txt: 'Entschuldigung, ich möchte den blauen Mantel umtauschen.' },
      { sp: 'Tobias', txt: 'Gern. Haben Sie den Kassenbon dabei?' },
      { sp: 'Fatima', txt: 'Ja, hier. Der Mantel ist mir leider zu klein — vor allem an den Schultern.' },
      { sp: 'Tobias', txt: 'Dann probieren Sie die nächste Größe. Der graue Mantel dort ist etwas weiter geschnitten.' },
      { sp: 'Fatima', txt: 'Der graue gefällt mir gut. Aber ist er teurer als der blaue?' },
      { sp: 'Tobias', txt: 'Nein, er kostet genauso viel. Die Umkleidekabine ist hinten rechts.' },
      { sp: 'Fatima', txt: 'Der passt viel besser. Die Ärmel sind ein bisschen länger, das ist angenehmer.' },
      { sp: 'Tobias', txt: 'Sehr gut, dann tausche ich um. Möchten Sie die warme Mütze dazu? Die ist heute reduziert.' },
      { sp: 'Fatima', txt: 'Nein danke. Ein Mantel ist genug für heute.' }
    ]
  },
  vokabeln: [
    { de: 'umtauschen', em: '🔁', bsp: 'Ich möchte den Mantel umtauschen.' },
    { de: 'der Kassenbon', em: '🧾', bsp: 'Ohne Kassenbon geht der Umtausch nicht.' },
    { de: 'die Größe', em: '📏', bsp: 'Haben Sie den Mantel eine Größe größer?' },
    { de: 'anprobieren', em: '👗', bsp: 'Darf ich die Hose anprobieren?' },
    { de: 'die Umkleidekabine', em: '🚪', bsp: 'Die Umkleidekabine ist hinten rechts.' },
    { de: 'passen', em: '✅', bsp: 'Der graue Mantel passt mir viel besser.' },
    { de: 'gefallen', em: '😍', bsp: 'Die Farbe gefällt mir.' },
    { de: 'der Mantel', em: '🧥', bsp: 'Der blaue Mantel ist mir zu klein.' },
    { de: 'das Hemd', em: '👔', bsp: 'Das weiße Hemd trage ich im Büro.' },
    { de: 'die Mütze', em: '🧢', bsp: 'Im Winter brauche ich eine warme Mütze.' },
    { de: 'eng / weit', em: '↔️', bsp: 'Die Hose ist mir zu eng, der Mantel ist weit genug.' },
    { de: 'der Ärmel', em: '🧵', bsp: 'Die Ärmel sind zwei Zentimeter zu kurz.' },
    { de: 'reduziert', em: '🏷️', bsp: 'Der Pullover ist um dreißig Prozent reduziert.' },
    { de: 'das Angebot', em: '💶', bsp: 'Im Angebot kostet die Mütze nur zehn Euro.' }
  ],
  grammatik: {
    title: 'Grammatik im Kontext',
    blocks: [
      {
        h: 'Adjektive nach dem bestimmten Artikel',
        txt: 'Steht der, das oder die vor dem Adjektiv, ist die Endung fast immer -en. Nur in vier Feldern heißt sie -e.',
        table: [
          ['Kasus', 'maskulin', 'neutrum', 'feminin', 'Plural'],
          ['Nominativ', 'der blaue Mantel', 'das weiße Hemd', 'die warme Mütze', 'die neuen Schuhe'],
          ['Akkusativ', 'den blauen Mantel', 'das weiße Hemd', 'die warme Mütze', 'die neuen Schuhe'],
          ['Dativ', 'dem blauen Mantel', 'dem weißen Hemd', 'der warmen Mütze', 'den neuen Schuhen']
        ],
        note: 'Merk dir die fünf <b>-e</b>-Felder: Nominativ maskulin, neutrum und feminin sowie Akkusativ neutrum und feminin. Alles andere bekommt <b>-en</b>.'
      },
      {
        h: 'Komparativ — der Vergleich mit als',
        txt: 'Für den Vergleich hängst du -er an das Adjektiv. Kurze Adjektive mit a, o, u bekommen oft einen Umlaut dazu.',
        table: [
          ['Grundform', 'Komparativ', 'Beispiel'],
          ['teuer', 'teurer', 'Der graue ist nicht teurer als der blaue.'],
          ['lang', 'länger', 'Die Ärmel sind länger.'],
          ['warm', 'wärmer', 'Die Mütze ist wärmer als der Schal.'],
          ['gut', 'besser', 'Der graue Mantel passt besser.'],
          ['gern', 'lieber', 'Ich trage lieber Blau.'],
          ['viel', 'mehr', 'Ich brauche mehr Platz im Schrank.']
        ],
        note: 'Vergleich mit <b>als</b>: teurer <b>als</b> der blaue. Gleichheit mit <b>genauso … wie</b>: Er kostet genauso viel <b>wie</b> der andere.'
      }
    ]
  },
  uebungen: [
    { typ: 'listen', audio: 'Der graue Mantel ist etwas weiter geschnitten als der blaue.', frage: 'Hör zu: Wie ist der graue Mantel?', optionen: ['etwas weiter', 'etwas enger', 'etwas kürzer'], richtig: 0 },
    { typ: 'mc', frage: 'Ich möchte ___ blauen Mantel umtauschen.', optionen: ['den', 'der', 'dem'], richtig: 0, hinweis: 'umtauschen verlangt den Akkusativ — maskulin heißt das den.' },
    { typ: 'mc', frage: 'Die warm___ Mütze gefällt mir.', optionen: ['e', 'en', 'er'], richtig: 0, hinweis: 'Nominativ feminin nach die ist eines der fünf -e-Felder.' },
    { typ: 'mc', frage: 'Der graue Mantel ist ___ als der blaue.', optionen: ['teurer', 'teuer', 'am teuersten'], richtig: 0, hinweis: 'Ein Vergleich mit als braucht immer die Komparativform auf -er.' },
    { typ: 'gapbank', frage: 'Setz Artikel, Adjektiv und Komparativ ein.', text: 'Ich nehme ___ grauen Mantel. ___ blaue Mantel ist mir zu klein. Die Ärmel sind hier ___.', bank: ['den', 'Der', 'länger', 'dem', 'lang'], loesung: ['den', 'Der', 'länger'], hinweis: 'Erst den Kasus prüfen, dann die Adjektivendung. Beim Vergleich hilft die Endung -er.' },
    { typ: 'order', frage: 'Sortiere den Satz für den Umtausch!', woerter: ['den', 'Ich', 'umtauschen', 'Mantel', 'möchte', 'blauen'], loesung: 'Ich möchte den blauen Mantel umtauschen', hinweis: 'Modalverb auf Position 2, Infinitiv ans Ende — und im Akkusativ endet das Adjektiv auf -en.' },
    { typ: 'order', frage: 'Bau den Vergleich!', woerter: ['ist', 'Der', 'als', 'graue', 'der', 'blaue', 'teurer'], loesung: 'Der graue ist teurer als der blaue', hinweis: 'Der Komparativ steht vor als, nicht danach.' },
    { typ: 'match', frage: 'Im Geschäft: Was passt zu welcher Erklärung?', paare: [['umtauschen', '🔁 zurückgeben und etwas anderes nehmen'], ['der Kassenbon', '🧾 der Beleg von der Kasse'], ['anprobieren', '👗 in der Kabine testen'], ['reduziert', '🏷️ im Preis heruntergesetzt'], ['passen', '✅ die richtige Größe haben']] },
    { typ: 'bild', bild: 'th-einkauf', frage: 'Der Mantel ist zu klein. Was sagst du an der Kasse?', optionen: ['Ich möchte den Mantel gegen eine größere Größe umtauschen.', 'Ich will das Mantel großer haben.', 'Der Mantel ist mir zu groß, bitte kleiner.', 'Ich tausche der Mantel um.'], richtig: 0, hinweis: 'Akkusativ nach umtauschen, Komparativ für den Wunsch nach mehr Größe.' },
    { typ: 'type', frage: 'Vergleiche zwei Kleidungsstücke. Nutze den Komparativ mit als.', muster: 'Die schwarze Jacke ist wärmer als die graue.', akzeptiert: ['.+er als .+', 'besser als', 'lieber .+ als'], hinweis: 'Adjektiv plus -er, dann als — bei a, o, u kommt oft ein Umlaut dazu.' }
  ],
  zusammenfassung: {
    kernsaetze: [
      'Ich möchte den blauen Mantel umtauschen — hier ist der Kassenbon.',
      'Der Mantel ist mir leider zu klein. Haben Sie eine Größe größer?',
      'Darf ich das anprobieren? Wo ist die Umkleidekabine?',
      'Der graue gefällt mir besser und passt viel besser.',
      'Ist er teurer als der blaue? – Nein, er kostet genauso viel.'
    ],
    merke: [
      'Nach <b>der / das / die</b> endet das Adjektiv fast immer auf <b>-en</b> — außer im Nominativ und im Akkusativ neutrum/feminin: dort <b>-e</b>.',
      'Komparativ: Adjektiv + <b>-er</b>, Vergleich mit <b>als</b> (wärmer <b>als</b>), Gleichheit mit <b>genauso … wie</b>.',
      'Unregelmäßig und wichtig: <b>gut – besser</b>, <b>gern – lieber</b>, <b>viel – mehr</b>, <b>hoch – höher</b>.'
    ],
    tipp: 'Öffne diese Woche einmal deinen Kleiderschrank und beschreibe fünf Teile laut mit Artikel und Adjektiv: der blaue Pullover, das weiße Hemd, die warme Jacke. Danach vergleiche je zwei davon mit als.'
  },
  sprechen: {
    task: 'Spiel den Umtausch im Laden: Sag, was du zurückgeben willst und warum, frag nach einer anderen Größe oder Farbe und vergleiche zwei Modelle miteinander.',
    tipps: ['Ich möchte den/das/die … umtauschen. Hier ist der Kassenbon.', 'Der Mantel ist mir zu eng/zu kurz.', 'Haben Sie das eine Größe größer?', 'Der graue gefällt mir besser als der blaue.']
  }
};
