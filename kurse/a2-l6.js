// Alltagsdeutsch A2 – Lektion 6: Den Weg finden
// deutschoderwas club · Kursmaterial
window.LEKTION = {
  meta: { kurs: 'Alltagsdeutsch A2', nr: 6, titel: 'Den Weg finden', level: 'A2', bild: 'th-weg', dauer: 'ca. 18 Min' },
  intro: {
    text: 'Du stehst an einer Kreuzung, der Termin beginnt in zehn Minuten und das Handy hat keinen Empfang. Jetzt hilft nur fragen — und die Antwort verstehen. Hier lernst du, wie man Wege erklärt bekommt und selbst erklärt: mit Imperativ, Ordnungszahlen und ein paar klaren Richtungswörtern.',
    du_lernst: ['Nach dem Weg fragen', 'Wege erklären', 'Imperativ mit du und Sie', 'Ordnungszahlen und Richtungen']
  },
  dialog: {
    bild: 'th-weg',
    situation: 'Mehmet ist neu in der Stadt und sucht das Bürgeramt. Er fragt eine Passantin, Sofia — und dann ruft auch noch seine Nachbarin Katrin an.',
    lines: [
      { sp: 'Mehmet', txt: 'Entschuldigen Sie, wie komme ich zum Bürgeramt? Ich habe dort um zehn einen Termin.' },
      { sp: 'Sofia', txt: 'Gehen Sie hier geradeaus bis zur Ampel. Dann nehmen Sie die zweite Straße links.' },
      { sp: 'Mehmet', txt: 'Die zweite links. Und dann?' },
      { sp: 'Sofia', txt: 'Gehen Sie an der Apotheke vorbei. Das Bürgeramt ist das dritte Gebäude auf der rechten Seite.' },
      { sp: 'Mehmet', txt: 'Wie lange brauche ich zu Fuß?' },
      { sp: 'Sofia', txt: 'Ungefähr zehn Minuten. Wenn Sie es eilig haben, fahren Sie mit der Straßenbahn.' },
      { sp: 'Mehmet', txt: 'Vielen Dank! — Moment, meine Nachbarin ruft an.' },
      { sp: 'Katrin', txt: 'Mehmet, bist du schon da? Nimm die Linie 3 und steig am Rathaus aus!' },
      { sp: 'Mehmet', txt: 'Zu spät, ich gehe schon zu Fuß. Sag mal, ist das Bürgeramt im ersten Stock?' },
      { sp: 'Katrin', txt: 'Im zweiten. Frag unten am Empfang, dann findest du das Zimmer sofort.' }
    ]
  },
  vokabeln: [
    { de: 'geradeaus', em: '⬆️', bsp: 'Gehen Sie zweihundert Meter geradeaus.' },
    { de: 'links', em: '⬅️', bsp: 'Nehmen Sie die zweite Straße links.' },
    { de: 'rechts', em: '➡️', bsp: 'Das Amt ist auf der rechten Seite.' },
    { de: 'die Ampel', em: '🚦', bsp: 'An der Ampel gehen Sie über die Straße.' },
    { de: 'die Kreuzung', em: '✖️', bsp: 'An der großen Kreuzung biegen Sie ab.' },
    { de: 'abbiegen', em: '↩️', bsp: 'Biegen Sie hier rechts ab.' },
    { de: 'vorbeigehen an', em: '🚶', bsp: 'Gehen Sie an der Apotheke vorbei.' },
    { de: 'die Straßenbahn', em: '🚊', bsp: 'Die Straßenbahn fährt alle zehn Minuten.' },
    { de: 'die Haltestelle', em: '🚏', bsp: 'Die Haltestelle heißt Rathaus.' },
    { de: 'aussteigen', em: '🚪', bsp: 'Steig am Rathaus aus!' },
    { de: 'der Stock', em: '🏢', bsp: 'Das Zimmer ist im zweiten Stock.' },
    { de: 'der Empfang', em: '🛎️', bsp: 'Frag unten am Empfang nach dem Zimmer.' },
    { de: 'gegenüber', em: '🔄', bsp: 'Die Apotheke ist gegenüber vom Bahnhof.' },
    { de: 'zu Fuß', em: '👟', bsp: 'Zu Fuß brauchst du zehn Minuten.' }
  ],
  grammatik: {
    title: 'Grammatik im Kontext',
    blocks: [
      {
        h: 'Imperativ mit du und Sie',
        txt: 'Wegbeschreibungen sind fast immer Aufforderungen. Zwei Formen brauchst du dafür — eine für Freunde, eine für Fremde.',
        table: [
          ['Infinitiv', 'du-Form', 'Sie-Form'],
          ['gehen', 'Geh geradeaus!', 'Gehen Sie geradeaus!'],
          ['nehmen', 'Nimm die Linie 3!', 'Nehmen Sie die Linie 3!'],
          ['fahren', 'Fahr mit der Straßenbahn!', 'Fahren Sie mit der Straßenbahn!'],
          ['aussteigen', 'Steig am Rathaus aus!', 'Steigen Sie am Rathaus aus!'],
          ['sein', 'Sei pünktlich!', 'Seien Sie pünktlich!']
        ],
        note: '<b>du</b>: Verbstamm ohne -st und ohne „du" (du gehst → Geh!). Verben mit e → i ändern sich mit: du nimmst → <b>Nimm!</b> · <b>Sie</b>: Infinitiv + Sie. Trennbare Vorsilben stehen am Ende.'
      },
      {
        h: 'Ordnungszahlen und Richtungen',
        txt: 'Erste, zweite, dritte — ohne diese Wörter kommst du in keiner Wegbeschreibung an.',
        table: [
          ['Zahl', 'Ordnungszahl', 'Im Satz'],
          ['1.', 'erste', 'Nehmen Sie die erste Straße rechts.'],
          ['2.', 'zweite', 'Das Zimmer ist im zweiten Stock.'],
          ['3.', 'dritte', 'Es ist das dritte Gebäude auf der rechten Seite.'],
          ['4.', 'vierte', 'Steigen Sie an der vierten Haltestelle aus.'],
          ['20.', 'zwanzigste', 'Heute ist der zwanzigste Mai.']
        ],
        note: 'Bis 19 hängst du <b>-te</b> an, ab 20 <b>-ste</b>. Unregelmäßig: <b>erste, dritte, siebte, achte</b>. Richtungen: nach links/rechts, geradeaus, bis zur Ampel, an … vorbei, gegenüber von …'
      }
    ]
  },
  uebungen: [
    { typ: 'listen', audio: 'Nehmen Sie die zweite Straße links und gehen Sie an der Apotheke vorbei.', frage: 'Hör zu: Welche Straße soll er nehmen?', optionen: ['die zweite links', 'die zweite rechts', 'die erste links'], richtig: 0 },
    { typ: 'mc', frage: 'Zu einer fremden Person sagst du: „___ Sie die erste Straße rechts!"', optionen: ['Nehmen', 'Nimm', 'Nehmt'], richtig: 0, hinweis: 'Die Sie-Form ist der Infinitiv, direkt gefolgt von Sie.' },
    { typ: 'mc', frage: 'Zu einem Freund sagst du: „___ am Rathaus aus!"', optionen: ['Steig', 'Steigst', 'Steigen'], richtig: 0, hinweis: 'Der du-Imperativ ist der Verbstamm ohne -st, die trennbare Vorsilbe rutscht ans Ende.' },
    { typ: 'mc', frage: 'Das Bürgeramt ist im ___ Stock.', optionen: ['zweiten', 'zwei', 'zweite'], richtig: 0, hinweis: 'Nach im steht der Dativ, deshalb endet die Ordnungszahl auf -en.' },
    { typ: 'gapbank', frage: 'Erklär den Weg in der Sie-Form.', text: '___ Sie geradeaus bis zur Ampel. Dann ___ Sie links ___.', bank: ['Gehen', 'biegen', 'ab', 'Geh', 'vorbei'], loesung: ['Gehen', 'biegen', 'ab'], hinweis: 'Sie-Imperativ: Infinitiv plus Sie — bei trennbaren Verben steht die Vorsilbe am Satzende.' },
    { typ: 'order', frage: 'Bau die Wegbeschreibung!', woerter: ['zweite', 'die', 'Nehmen', 'Straße', 'Sie', 'links'], loesung: 'Nehmen Sie die zweite Straße links', hinweis: 'Im Imperativ steht das Verb ganz vorne, dann folgt Sie.' },
    { typ: 'order', frage: 'Bau die Aufforderung für einen Freund!', woerter: ['Rathaus', 'am', 'Steig', 'aus'], loesung: 'Steig am Rathaus aus', hinweis: 'Trennbares Verb: Der Stamm steht vorne, die Vorsilbe ganz hinten.' },
    { typ: 'match', frage: 'Unterwegs: Was gehört zusammen?', paare: [['geradeaus', '⬆️ immer weiter, nicht abbiegen'], ['die Haltestelle', '🚏 hier hält die Straßenbahn'], ['gegenüber', '🔄 auf der anderen Straßenseite'], ['abbiegen', '↩️ die Richtung wechseln'], ['der Empfang', '🛎️ der Schalter gleich am Eingang']] },
    { typ: 'bild', bild: 'th-weg', frage: 'Eine fremde Person sucht die Post und du kennst den Weg. Wie erklärst du ihn?', optionen: ['Gehen Sie geradeaus und biegen Sie an der Ampel links ab.', 'Du gehst geradeaus und biegst links ab.', 'Geh geradeaus und bieg links ab.', 'Ich gehe geradeaus und biege links ab.'], richtig: 0, hinweis: 'Fremde Personen siezt man — Infinitiv plus Sie.' },
    { typ: 'type', frage: 'Erklär den Weg von der Haltestelle zu dir nach Hause. Nutze den Imperativ mit Sie.', muster: 'Gehen Sie geradeaus und nehmen Sie die zweite Straße rechts.', akzeptiert: ['(gehen|fahren|nehmen|biegen|steigen) sie .+'], hinweis: 'Sie-Imperativ: Verb im Infinitiv zuerst, dann Sie, dann der Rest.' }
  ],
  zusammenfassung: {
    kernsaetze: [
      'Entschuldigen Sie, wie komme ich zum Bürgeramt?',
      'Gehen Sie geradeaus bis zur Ampel und nehmen Sie die zweite Straße links.',
      'Gehen Sie an der Apotheke vorbei — es ist das dritte Gebäude rechts.',
      'Nimm die Linie 3 und steig am Rathaus aus!',
      'Das Zimmer ist im zweiten Stock. Frag unten am Empfang.'
    ],
    merke: [
      'du-Imperativ: Verbstamm <b>ohne -st</b> und ohne „du" — du gehst → <b>Geh!</b>, du nimmst → <b>Nimm!</b>',
      'Sie-Imperativ: <b>Infinitiv + Sie</b> — Gehen Sie! Nehmen Sie! Trennbare Vorsilbe ans <b>Satzende</b>: Steigen Sie … <b>aus</b>!',
      'Ordnungszahlen: bis 19. mit <b>-te</b>, ab 20. mit <b>-ste</b>. Nach <b>im/an der</b> kommt die Dativendung: im <b>zweiten</b> Stock.'
    ],
    tipp: 'Beschreib dir diese Woche laut den Weg, den du sowieso jeden Tag gehst — von der Haltestelle bis zur Haustür, Schritt für Schritt im Sie-Imperativ. Wenn du dabei ins Stocken kommst, weißt du genau, welches Wort dir noch fehlt.'
  },
  sprechen: {
    task: 'Erklär zweimal denselben Weg: einmal einer fremden Person mit Sie und einmal einer Freundin mit du. Nutze mindestens zwei Ordnungszahlen und ein Verkehrsmittel.',
    tipps: ['Gehen Sie geradeaus bis zur Ampel / Geh geradeaus bis zur Ampel.', 'Nehmen Sie die erste Straße rechts. / Nimm die erste Straße rechts.', 'Fahren Sie mit der Linie 3 und steigen Sie am Rathaus aus.', 'Es ist das dritte Gebäude auf der linken Seite.']
  }
};
