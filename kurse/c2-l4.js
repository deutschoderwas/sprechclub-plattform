// Alltagsdeutsch C2 – Lektion 4: Fachtexte erschließen
// deutschoderwas club · Kursmaterial
window.LEKTION = {
  meta: { kurs: 'Alltagsdeutsch C2', nr: 4, titel: 'Fachtexte erschließen', level: 'C2', bild: 'th-fachtext', dauer: 'ca. 25 Min' },
  intro: {
    text: 'Ein Bescheid, ein Gutachten, ein Vertrag: Du kennst jedes einzelne Wort und weißt trotzdem nicht, was passiert ist. Das liegt nicht an deinem Wortschatz, sondern am Bauplan. Fachdeutsch packt alles in ein Substantiv und schiebt halbe Nebensätze zwischen Artikel und Hauptwort. Heute lernst du, so einen Satz auseinanderzunehmen — und ihn danach in einem Satz zu sagen, den auch dein Nachbar versteht.',
    du_lernst: ['Den Kern eines Schachtelsatzes in vier Schritten finden', 'Erweiterte Attribute in Relativsätze auflösen', 'Nominalstil zurück in Verben übersetzen', 'Fachwörter erkennen, die etwas anderes heißen, als sie klingen']
  },
  dialog: {
    bild: 'th-fachtext',
    situation: 'Kwame hat einen Bescheid der Bauaufsicht im Briefkasten. Seine Nachbarin Marta, pensionierte Verwaltungsjuristin, liest ihn mit ihm durch.',
    lines: [
      { sp: 'Kwame', txt: 'Ich habe diesen einen Satz jetzt viermal gelesen. Ich verstehe jedes Wort und trotzdem nicht, ob ich gewonnen oder verloren habe.' },
      { sp: 'Marta', txt: 'Lies ihn mir vor. Langsam.' },
      { sp: 'Kwame', txt: '„Die im Rahmen der Nachbarbeteiligung fristgerecht eingegangenen, gegen die Erteilung der Baugenehmigung gerichteten Einwendungen wurden geprüft und, soweit sie sich nicht auf nachbarschützende Vorschriften beziehen, als unbeachtlich zurückgewiesen."' },
      { sp: 'Marta', txt: 'Ein Satz, zwei erweiterte Attribute, ein Einschub. Such als Erstes das finite Verb des Hauptsatzes — nicht das erste Verb, das dir begegnet.' },
      { sp: 'Kwame', txt: 'Verben sehe ich einige. Aber konjugiert ist nur „wurden". Also: wurden geprüft und zurückgewiesen.' },
      { sp: 'Marta', txt: 'Damit steht das Gerüst. Wer wurde geprüft? Die Einwendungen. Alles andere im Satz sagt nur, welche Einwendungen gemeint sind und unter welcher Bedingung sie fliegen.' },
      { sp: 'Kwame', txt: 'Was heißt denn „soweit"? Für mich klingt das nach „sobald".' },
      { sp: 'Marta', txt: 'Nie. „Soweit" ist keine Zeitangabe, es schneidet zu. Übersetzt heißt der Einschub: Nur die Einwendungen zählen, die deine eigenen Nachbarrechte berühren. Der Rest ist raus.' },
      { sp: 'Kwame', txt: 'Also im Klartext: Sie haben meinen Einspruch angesehen und den größten Teil davon abgelehnt.' },
      { sp: 'Marta', txt: 'So ist es. Und noch eine Falle: „unbeachtlich" heißt nicht „unwichtig", sondern „rechtlich ohne Wirkung". Den Unterschied lernst du besser jetzt als nach Ablauf der Frist.' }
    ]
  },
  vokabeln: [
    { de: 'der Schachtelsatz', em: '📦', bsp: 'Ein Satz, in dem drei Sätze ineinanderstecken.' },
    { de: 'das erweiterte Attribut', em: '🪆', bsp: 'die im Rahmen der Beteiligung eingegangenen Einwendungen' },
    { de: 'der Nominalstil', em: '🧱', bsp: 'nach Prüfung der Unterlagen — statt: nachdem wir geprüft haben' },
    { de: 'der Verbalstil', em: '🏃', bsp: 'Die Behörde hat die Unterlagen geprüft.' },
    { de: 'das finite Verb', em: '🔧', bsp: 'das konjugierte Verb — es trägt das Gerüst des Satzes' },
    { de: 'der Einschub', em: '➕', bsp: 'alles, was zwischen zwei Kommas eingeklemmt ist' },
    { de: 'entwirren', em: '🧶', bsp: 'Ich entwirre den Satz, bevor ich ihn beantworte.' },
    { de: 'der Bescheid', em: '📬', bsp: 'Der Bescheid kam gestern, die Frist läuft ab morgen.' },
    { de: 'die Einwendung', em: '📄', bsp: 'ein förmlicher Einspruch im Verwaltungsverfahren' },
    { de: 'fristgerecht', em: '⏱️', bsp: 'Der Widerspruch ging fristgerecht ein.' },
    { de: 'unbeachtlich', em: '🚫', bsp: 'rechtlich ohne Wirkung — nicht: unwichtig' },
    { de: 'soweit', em: '✂️', bsp: 'schränkt ein, ist keine Zeitangabe: „soweit sie zutreffen"' },
    { de: 'etwas zurückweisen', em: '↩️', bsp: 'Die Behörde hat die Einwendungen zurückgewiesen.' },
    { de: 'sich auf etwas beziehen', em: '🔗', bsp: 'Der Absatz bezieht sich auf Paragraf drei.' },
    { de: 'die Rechtsbehelfsbelehrung', em: '⚖️', bsp: 'der Abschnitt am Ende, der sagt, wie du dich wehren kannst' },
    { de: 'im Klartext', em: '🗣️', bsp: 'Im Klartext: Sie haben abgelehnt.' },
    { de: 'sinngemäß wiedergeben', em: '🔁', bsp: 'Gib den Absatz sinngemäß in einem Satz wieder.' }
  ],
  grammatik: {
    title: 'Grammatik im Kontext',
    blocks: [
      {
        h: 'Den Kern zuerst — ein Schachtelsatz in vier Schritten',
        txt: 'Lies einen Fachsatz nicht von links nach rechts. Such erst das Gerüst und häng die Details danach wieder an. So sieht das am Satz aus dem Bescheid aus:',
        table: [
          ['Schritt', 'Wonach du suchst', 'Am Beispiel des Bescheids'],
          ['1. Finites Verb', 'das einzige konjugierte Verb des Hauptsatzes', 'wurden … geprüft und zurückgewiesen'],
          ['2. Subjekt', 'Wer oder was? — steht oft weit vorn', 'die Einwendungen'],
          ['3. Einschub streichen', 'alles zwischen zwei Kommas, das man weglassen kann', 'soweit sie sich nicht auf … Vorschriften beziehen'],
          ['4. Attribut auflösen', 'alles, was zwischen Artikel und Substantiv geklemmt ist', 'die im Rahmen … eingegangenen, gegen … gerichteten'],
          ['Ergebnis', 'ein Satz aus Subjekt und Verb', 'Die Einwendungen wurden geprüft und zurückgewiesen.']
        ],
        note: 'Der Trick ist die Reihenfolge: <b>erst das Gerüst, dann die Details</b>. Ein sicheres Zeichen für ein erweitertes Attribut ist der weite Abstand zwischen Artikel und Substantiv — steht nach „die" nicht spätestens im zweiten Wort ein Hauptwort, ist eine Schachtel im Anmarsch. Und der Einschub ist fast immer entbehrlich für das Verständnis des Kerns, aber entscheidend für die Frage, wen die Sache betrifft.'
      },
      {
        h: 'Erweitertes Attribut und Nominalstil zurückübersetzen',
        txt: 'Fachdeutsch presst ganze Nebensätze in Substantive und Partizipien. Du machst den Weg rückwärts: Substantiv wieder zum Verb, Partizip wieder zum Relativsatz, Präposition wieder zur Konjunktion.',
        table: [
          ['Fachsprache', 'Alltagssprache', 'Was du gemacht hast'],
          ['die fristgerecht eingegangenen Einwendungen', 'die Einwendungen, die fristgerecht eingegangen sind', 'Partizip wird Relativsatz'],
          ['nach Prüfung der Unterlagen', 'nachdem wir die Unterlagen geprüft haben', 'Substantiv wird Verb, Genitiv wird Objekt'],
          ['unter Berücksichtigung Ihrer Angaben', 'weil wir berücksichtigt haben, was Sie angegeben haben', 'Präposition wird Konjunktion'],
          ['bei Nichteinhaltung der Frist', 'wenn Sie die Frist nicht einhalten', 'Nominalgruppe wird Bedingungssatz'],
          ['die Erteilung der Baugenehmigung', 'die Behörde erteilt die Baugenehmigung', 'der Genitiv wird zum Objekt des neuen Verbs']
        ],
        note: 'Zwei Handgriffe reichen fast immer: <b>Substantive auf -ung, -nahme und -barkeit zurück ins Verb</b> und <b>Partizipien zurück in einen Relativsatz</b>. Achte auf den Genitiv daneben — er wird mal zum Subjekt („die Entscheidung der Behörde" = die Behörde entscheidet), mal zum Objekt („die Prüfung der Unterlagen" = jemand prüft die Unterlagen). Welche der beiden Lesarten gilt, sagt dir nur der Zusammenhang.'
      }
    ]
  },
  uebungen: [
    { typ: 'listen', audio: 'Die fristgerecht eingegangenen Einwendungen wurden als unbeachtlich zurückgewiesen.', frage: 'Hör zu: Was ist mit den Einwendungen passiert?', optionen: ['Sie kamen rechtzeitig, wurden aber als rechtlich wirkungslos abgelehnt.', 'Sie kamen zu spät und wurden deshalb nicht gelesen.', 'Sie waren unwichtig, wurden aber trotzdem angenommen.'], richtig: 0 },
    { typ: 'mc', frage: 'Welches ist das finite Verb im Hauptsatz von „Die gegen die Erteilung der Genehmigung gerichteten Einwendungen wurden geprüft"?', optionen: ['wurden', 'gerichteten', 'Erteilung'], richtig: 0, hinweis: 'Finit ist nur das konjugierte Verb — es richtet sich nach Person und Zahl des Subjekts. Partizipien wie „gerichteten" gehören zum Attribut, Substantive wie „Erteilung" sind gar keine Verben mehr.' },
    { typ: 'mc', frage: 'Was bedeutet „soweit" in „…, soweit sie sich nicht auf nachbarschützende Vorschriften beziehen"?', optionen: ['Es schränkt ein: Es gilt nur für den Teil, auf den die Bedingung zutrifft.', 'Es gibt einen Zeitpunkt an, ab dem etwas gilt.', 'Es begründet, warum die Behörde so entschieden hat.'], richtig: 0, hinweis: 'In Rechts- und Verwaltungstexten schneidet „soweit" den Geltungsbereich zu. Zeitlich wäre „sobald", begründend „da" oder „weil" — die drei Wörter sehen sich ähnlich und tun völlig Verschiedenes.' },
    { typ: 'match', frage: 'Fachsprache und Klartext — was gehört zusammen?', paare: [['nach Prüfung der Unterlagen', '🔧 nachdem wir die Unterlagen geprüft haben'], ['bei Nichteinhaltung der Frist', '⏱️ wenn Sie die Frist nicht einhalten'], ['unter Berücksichtigung Ihrer Angaben', '📝 weil wir Ihre Angaben einbezogen haben'], ['die Erteilung der Genehmigung', '🏗️ die Behörde erteilt die Genehmigung'], ['als unbeachtlich zurückgewiesen', '🚫 abgelehnt, weil rechtlich ohne Wirkung']] },
    { typ: 'gapbank', frage: 'Gib den Bescheid sinngemäß wieder. Setz ein.', text: 'Die Einwendungen wurden ___ und größtenteils ___. Im Verfahren bleiben nur die Punkte, die sich auf nachbarschützende Vorschriften ___.', bank: ['geprüft', 'zurückgewiesen', 'beziehen', 'erteilt', 'eingehalten'], loesung: ['geprüft', 'zurückgewiesen', 'beziehen'], hinweis: 'Das Gerüst eines Bescheids besteht immer aus zwei Teilen: was die Behörde getan hat und was davon für dich übrig bleibt. Alles andere im Satz ist Beschreibung.' },
    { typ: 'order', frage: 'Bau den Kernsatz des Bescheids!', woerter: ['wurden', 'Die', 'geprüft', 'Einwendungen', 'zurückgewiesen', 'und'], loesung: 'Die Einwendungen wurden geprüft und zurückgewiesen', hinweis: 'Im Passiv steht das finite Verb „wurden" auf Position zwei, die beiden Partizipien rücken ans Satzende und teilen sich das Hilfsverb.' },
    { typ: 'order', frage: 'Lös das erweiterte Attribut auf und bau den Relativsatz!', woerter: ['Einwendungen', 'die', 'fristgerecht', 'die', 'sind', 'eingegangen'], loesung: 'die Einwendungen die fristgerecht eingegangen sind', hinweis: 'Aus dem Partizip vor dem Substantiv wird ein Relativsatz dahinter — mit dem finiten Verb am Ende. Der Inhalt bleibt gleich, die Lesbarkeit verdoppelt sich.' },
    { typ: 'bild', bild: 'th-fachtext', frage: 'Wie gibst du „Nach Prüfung der eingereichten Unterlagen ergeht folgender Bescheid" im Klartext wieder?', optionen: ['Wir haben Ihre Unterlagen durchgesehen und entscheiden jetzt so:', 'Sobald wir Ihre Unterlagen prüfen, bekommen Sie einen Bescheid.', 'Ihre Unterlagen sind bei der Prüfung durchgefallen.', 'Wir bitten Sie, die Unterlagen zur Prüfung einzureichen.'], richtig: 0, hinweis: 'Beim Nominalstil steckt die Zeitstufe in der Präposition: „nach" heißt, die Prüfung ist bereits gelaufen. Wer daraus ein „sobald" macht, verschiebt den Bescheid in die Zukunft — und verpasst womöglich die Frist.' },
    { typ: 'type', frage: 'Übersetze in einen Satz Alltagsdeutsch: „Die Erteilung der Genehmigung erfolgt unter Berücksichtigung der eingegangenen Stellungnahmen."', muster: 'Die Behörde erteilt die Genehmigung und bezieht dabei die Stellungnahmen ein, die eingegangen sind.', akzeptiert: ['erteilt', 'genehmigt', 'gibt .* genehmigung'], hinweis: 'Zwei Handgriffe: „Erteilung" wird zum Verb „erteilen", und der Genitiv daneben wird sein Objekt. Das Verb „erfolgt" verschwindet dabei ersatzlos — es trägt nie eine eigene Bedeutung.' },
    { typ: 'type', frage: 'Ein Schreiben endet mit: „Bei Nichteinhaltung der genannten Frist wird der Antrag ohne weitere Prüfung abgelehnt." Sag es deinem Nachbarn in einem Satz.', muster: 'Wenn du die Frist nicht einhältst, lehnen sie den Antrag sofort ab.', akzeptiert: ['wenn .* frist', 'wenn du .* nicht', 'falls .* frist'], hinweis: 'Nominalgruppen mit „bei" enthalten fast immer eine Bedingung. Mach daraus einen Nebensatz mit „wenn" — dann steht auch klar da, wer etwas tun oder lassen muss.' }
  ],
  zusammenfassung: {
    kernsaetze: [
      'Such als Erstes das finite Verb, dann das Subjekt.',
      'Im Klartext: Sie haben geprüft und den größten Teil abgelehnt.',
      '„Soweit" schränkt ein, „sobald" gibt einen Zeitpunkt an.',
      '„Unbeachtlich" heißt rechtlich ohne Wirkung, nicht unwichtig.',
      'Nach Prüfung der Unterlagen — also: nachdem wir sie geprüft haben.'
    ],
    merke: [
      'Ein Schachtelsatz hat immer nur <b>ein finites Verb pro Satzebene</b>. Findest du es, hast du den Kern — der Rest ist Beschreibung.',
      'Ein <b>erweitertes Attribut</b> steht zwischen Artikel und Substantiv und wird zum <b>Relativsatz</b>: die eingegangenen Einwendungen = die Einwendungen, die eingegangen sind.',
      'Beim <b>Nominalstil</b> gilt: Substantiv zurück ins Verb, Genitiv wird Subjekt oder Objekt, Präposition wird Konjunktion. <b>Der Zusammenhang entscheidet, welche Lesart stimmt.</b>'
    ],
    tipp: 'Nimm dir diese Woche ein einziges echtes Schreiben vor — Versicherung, Vermieter, Amt — und schreib zu jedem Absatz genau einen Satz Klartext an den Rand. Wenn dir bei einem Absatz kein Satz gelingt, ist genau das die Stelle, an der du nachfragen musst. Diese Randnotizen sind nebenbei die beste Vorbereitung auf jedes Telefonat mit der Behörde.'
  },
  sprechen: {
    task: 'Such dir einen amtlichen oder juristischen Absatz aus deinem eigenen Leben und erklär ihn zwei Minuten lang laut, als wäre dein Gegenüber zwölf Jahre alt. Sag zuerst den Kernsatz in unter zehn Wörtern, dann die Bedingungen, dann die Frist. Nimm es auf und prüf, ob du ein einziges Substantiv auf -ung ungeübersetzt gelassen hast.',
    tipps: ['Der Kern ist: Sie haben abgelehnt.', 'Im Klartext heißt das: …', 'Das gilt aber nur, soweit …', 'Wichtig ist die Frist: bis zum …']
  }
};
