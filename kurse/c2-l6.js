// Alltagsdeutsch C2 – Lektion 6: Auf Augenhöhe debattieren
// deutschoderwas club · Kursmaterial
window.LEKTION = {
  meta: { kurs: 'Alltagsdeutsch C2', nr: 6, titel: 'Auf Augenhöhe debattieren', level: 'C2', bild: 'th-debatte', dauer: 'ca. 25 Min' },
  intro: {
    text: 'Wer in einer Debatte nur widerspricht, bekommt Widerstand. Wer zuerst etwas zugibt, bekommt Zuhören — und danach die Gelegenheit, den Einwand genau dort zu kippen, wo er nicht trägt. Das ist kein Trick, das ist Handwerk: Zugeständnis, Abgrenzung, Widerlegung. Nach dieser Lektion kannst du jemandem in einem Punkt recht geben, ohne deine Position zu verlieren, und einen Einwand zurückweisen, ohne dein Gegenüber klein zu machen.',
    du_lernst: ['Konzessive Verbindungen von zwar-aber bis ungeachtet dessen', 'Der Dreischritt: zugeben, abgrenzen, widerlegen', 'Einen Einwand aufrechterhalten, ohne ihn zu wiederholen', 'Elegant zurückweisen statt gewinnen wollen']
  },
  dialog: {
    bild: 'th-debatte',
    situation: 'Podiumsdiskussion an der Volkshochschule zur Vier-Tage-Woche. Die Personalleiterin Olena Kovalenko diskutiert mit dem Handwerksmeister Herrn Schneider, Katrin moderiert.',
    lines: [
      { sp: 'Katrin', txt: 'Frau Kovalenko, Herr Schneider — Vier-Tage-Woche, volle Bezahlung. Sie fangen an.' },
      { sp: 'Olena', txt: 'Bei uns funktioniert sie: gleiche Leistung, weniger Krankmeldungen, dreimal so viele Bewerbungen. Und ich rede nicht von einem Versuch über drei Monate, sondern von zwei Jahren.' },
      { sp: 'Schneider', txt: 'Dass es bei Ihnen funktioniert, bestreite ich gar nicht. Nur sitzen Ihre Leute vor Bildschirmen. Ein Dach deckt sich nicht schneller, bloß weil wir es uns wünschen.' },
      { sp: 'Olena', txt: 'Das ist ein fairer Einwand, und ich nehme ihn an. Er trifft allerdings nicht das Modell, sondern seine Übertragbarkeit. Das sind zwei verschiedene Fragen.' },
      { sp: 'Schneider', txt: 'Zugegeben. Wenngleich mir die Unterscheidung auf meiner Baustelle herzlich wenig hilft.' },
      { sp: 'Olena', txt: 'Da haben Sie recht. Nur folgt daraus nicht, dass wir es lassen — sondern dass für Ihre Branche eine andere Form gefunden werden muss.' },
      { sp: 'Schneider', txt: 'So einleuchtend das klingt, so wenig traue ich den Zahlen. „Gleiche Leistung" — gemessen woran?' },
      { sp: 'Olena', txt: 'An abgeschlossenen Vorgängen pro Woche, extern erhoben. Ich schicke Ihnen die Erhebung zu. Und wenn sie meiner Behauptung widerspricht, sage ich das hier im nächsten Jahr öffentlich.' },
      { sp: 'Schneider', txt: 'Auf dieses Angebot gehe ich ein. Meinen Einwand halte ich gleichwohl aufrecht, bis ich die Zahlen gesehen habe.' },
      { sp: 'Katrin', txt: 'Und genau so geht das. Sie haben sich in der Sache widersprochen, ohne einander zu unterstellen, der andere sei dumm oder unehrlich.' }
    ]
  },
  vokabeln: [
    { de: 'das Zugeständnis', em: '🤝', bsp: 'Ein Zugeständnis am Anfang öffnet das Gespräch.' },
    { de: 'einräumen', em: '🫱', bsp: 'Ich räume ein, dass der Einwand berechtigt ist.' },
    { de: 'zugegeben', em: '👌', bsp: 'Zugegeben, das habe ich unterschätzt.' },
    { de: 'der Einwand', em: '🚧', bsp: 'Das ist ein fairer Einwand.' },
    { de: 'einen Einwand aufrechterhalten', em: '🧷', bsp: 'Ich halte meinen Einwand aufrecht, bis Zahlen vorliegen.' },
    { de: 'etwas bestreiten', em: '🙅', bsp: 'Dass es bei Ihnen läuft, bestreite ich gar nicht.' },
    { de: 'widerlegen', em: '❌', bsp: 'Eine Behauptung widerlegt man mit Belegen, nicht mit Lautstärke.' },
    { de: 'entkräften', em: '💨', bsp: 'Das Beispiel entkräftet den Einwand nur zur Hälfte.' },
    { de: 'zutreffen', em: '🎯', bsp: 'Der Einwand trifft nicht das Modell, sondern die Übertragung.' },
    { de: 'die Übertragbarkeit', em: '🔄', bsp: 'Die Frage ist nicht, ob es geht, sondern wo noch.' },
    { de: 'wenngleich', em: '📘', bsp: 'obwohl — schriftsprachlich und gehoben' },
    { de: 'gleichwohl', em: '⚖️', bsp: 'trotzdem — im gehobenen Register' },
    { de: 'ungeachtet dessen', em: '🗿', bsp: 'sehr formell für: davon unabhängig' },
    { de: 'daraus folgt nicht', em: '🧮', bsp: 'Daraus folgt nicht, dass wir es lassen.' },
    { de: 'auf ein Angebot eingehen', em: '🤲', bsp: 'Auf dieses Angebot gehe ich ein.' },
    { de: 'jemandem in einem Punkt recht geben', em: '🎾', bsp: 'In diesem Punkt haben Sie recht.' },
    { de: 'die Erhebung', em: '📊', bsp: 'eine extern erhobene Datengrundlage' }
  ],
  grammatik: {
    title: 'Grammatik im Kontext',
    blocks: [
      {
        h: 'Konzessive Verbindungen — sechs Wege, dasselbe zuzugeben',
        txt: 'Konzessiv heißt: Du gibst etwas zu und hältst trotzdem an deiner Position fest. Deutsch bietet dafür sechs Bauformen, die sich nicht in der Bedeutung unterscheiden, sondern im Register und im Satzbau.',
        table: [
          ['Mittel', 'Satzbau', 'Beispiel', 'Ebene'],
          ['obwohl / obgleich', 'Nebensatz, Verb ans Ende', 'Obwohl der Einwand zutrifft, bleibe ich dabei.', 'neutral, überall'],
          ['zwar … aber', 'zwei Hauptsätze', 'Der Einwand trifft zwar zu, aber er ändert nichts.', 'neutral, gesprochen'],
          ['wenngleich', 'Nebensatz, Verb ans Ende', '…, wenngleich mir das wenig hilft.', 'gehoben, schriftlich'],
          ['gleichwohl / dennoch', 'Adverb, füllt Position eins oder steht im Mittelfeld', 'Gleichwohl halte ich daran fest.', 'gehoben'],
          ['ungeachtet dessen', 'Präpositionalgruppe vorn', 'Ungeachtet dessen bleibt der Vorschlag richtig.', 'sehr formell'],
          ['so … auch', 'Nebensatz mit Adjektiv vorn, Verb ans Ende', 'So einleuchtend das auch klingt, es überzeugt mich nicht.', 'rhetorisch, gesprochen']
        ],
        note: 'Der häufigste Fehler ist ein Satzbaufehler, kein Wortfehler: <b>obwohl und wenngleich sind Konjunktionen</b> und schicken das finite Verb ans Ende. <b>Gleichwohl, dennoch und trotzdem sind Adverbien</b> — sie besetzen Position eins, und das Verb folgt sofort: „Gleichwohl halte ich daran fest", nie „Gleichwohl ich halte daran fest".'
      },
      {
        h: 'Der Dreischritt: zugeben — abgrenzen — widerlegen',
        txt: 'Ein Zugeständnis ist keine Niederlage, solange du im nächsten Satz sagst, wie weit es reicht. Genau das macht Olena auf dem Podium — Schritt für Schritt:',
        table: [
          ['Schritt', 'Was du tust', 'Formulierung vom Podium'],
          ['1. Zugeben', 'den wahren Kern des Einwands benennen', 'Das ist ein fairer Einwand, und ich nehme ihn an.'],
          ['2. Abgrenzen', 'sagen, was der Einwand nicht trifft', 'Er trifft nicht das Modell, sondern seine Übertragbarkeit.'],
          ['3. Widerlegen', 'die Folgerung des Gegenübers kippen', 'Daraus folgt nicht, dass wir es lassen.'],
          ['4. Prüfbar machen', 'den eigenen Beleg anbieten', 'Ich schicke Ihnen die Erhebung zu.'],
          ['5. Stehen lassen', 'den Rest offen halten, statt zu siegen', 'Meinen Einwand halte ich gleichwohl aufrecht.']
        ],
        note: 'Der Kern des Verfahrens liegt in Schritt zwei: <b>Nicht der Einwand ist falsch, sondern seine Reichweite.</b> Wer das sauber trennt, muss nichts abstreiten und verliert trotzdem nichts. Und Schritt fünf ist das eigentliche Zeichen von Augenhöhe — eine Debatte muss nicht in derselben Stunde entschieden werden, in der sie geführt wird.'
      }
    ]
  },
  uebungen: [
    { typ: 'listen', audio: 'Dass es bei Ihnen funktioniert, bestreite ich gar nicht.', frage: 'Hör zu: Was macht der Sprecher gerade?', optionen: ['Er räumt einen Punkt ein — und wird gleich widersprechen.', 'Er stimmt vollständig zu und gibt seine Position auf.', 'Er weicht der Frage aus, ohne Stellung zu beziehen.'], richtig: 0 },
    { typ: 'mc', frage: 'Welcher Satz ist korrekt gebaut?', optionen: ['Sie haben recht. Gleichwohl halte ich an dem Vorschlag fest.', 'Sie haben recht. Gleichwohl ich halte an dem Vorschlag fest.', 'Sie haben recht. Gleichwohl ich an dem Vorschlag festhalte.'], richtig: 0, hinweis: '„Gleichwohl" ist ein Adverb und besetzt Position eins — danach folgt sofort das finite Verb, dann das Subjekt. Nur echte Konjunktionen wie „obwohl" oder „wenngleich" schicken das Verb ans Satzende.' },
    { typ: 'mc', frage: 'Ihr Gegenüber sagt: „Ihr Modell funktioniert nur im Büro." Welche Antwort räumt ein, ohne die eigene Position aufzugeben?', optionen: ['Das trifft zu — nur betrifft es die Übertragbarkeit, nicht das Modell selbst.', 'Das sehe ich völlig anders, dafür gibt es keinen Beleg.', 'Da mögen Sie recht haben, aber darüber möchte ich nicht diskutieren.'], richtig: 0, hinweis: 'Der zweite Schritt des Dreischritts grenzt ab: Er bestimmt, wie weit der Einwand reicht. Pauschales Abstreiten wirkt uneinsichtig, ein Zugeständnis ohne Abgrenzung gibt die eigene Position ohne Not preis.' },
    { typ: 'match', frage: 'Konzessives Mittel und Register — was gehört zusammen?', paare: [['zwar … aber', '💬 überall, besonders im Gespräch'], ['wenngleich', '📘 gehoben und schriftlich'], ['ungeachtet dessen', '🗿 sehr formell, fast juristisch'], ['so … auch', '🎙️ rhetorisch, mit Nachdruck gesprochen'], ['obwohl', '⚖️ neutral, in jeder Lage möglich']] },
    { typ: 'gapbank', frage: 'Setz die konzessiven Verbindungen ein.', text: 'Der Einwand trifft ___ zu, ___ er ändert an meiner Position nichts. In einem Punkt haben Sie recht; ___ halte ich an dem Vorschlag fest.', bank: ['zwar', 'aber', 'gleichwohl', 'wenngleich', 'ungeachtet'], loesung: ['zwar', 'aber', 'gleichwohl'], hinweis: 'Prüf zuerst die Wortart: „zwar … aber" verbindet zwei Hauptsätze, „gleichwohl" ist ein Adverb und darf allein auf Position eins stehen. „Wenngleich" leitet dagegen einen Nebensatz ein und kann dort nicht stehen.' },
    { typ: 'order', frage: 'Bau das Zugeständnis aus Schritt eins!', woerter: ['ist', 'Das', 'ein', 'fairer', 'Einwand', 'und', 'ich', 'nehme', 'ihn', 'an'], loesung: 'Das ist ein fairer Einwand und ich nehme ihn an', hinweis: 'Zwei Hauptsätze mit „und" — im zweiten steht das Pronomen vor dem Präfix des trennbaren Verbs, das ganz ans Ende rückt.' },
    { typ: 'order', frage: 'Bau die konzessive Wendung mit Nachdruck!', woerter: ['einleuchtend', 'So', 'das', 'auch', 'klingt', 'es', 'überzeugt', 'mich', 'nicht'], loesung: 'So einleuchtend das auch klingt es überzeugt mich nicht', hinweis: 'Bei „so + Adjektiv … auch" steht das Adjektiv direkt hinter „so" und das finite Verb am Ende des Nebensatzes. Der Hauptsatz danach beginnt ohne Umstellung — das gibt dem Widerspruch seinen Schwung.' },
    { typ: 'bild', bild: 'th-debatte', frage: 'Ihr Gegenüber bringt einen Einwand, der in einem Punkt wirklich stimmt. Welche Reaktion bleibt auf Augenhöhe?', optionen: ['Das ist ein fairer Einwand. Er trifft allerdings nicht das Modell, sondern seine Übertragbarkeit.', 'Das haben Sie offenbar nicht verstanden, ich erkläre es gern noch einmal.', 'Da mögen Sie recht haben, aber das führt hier zu weit.', 'Interessant, dass ausgerechnet Sie das sagen.'], richtig: 0, hinweis: 'Augenhöhe zeigt sich daran, dass der Widerspruch der Sache gilt und nicht der Person. Zweifel an der Auffassungsgabe, das Abwürgen der Frage und der Seitenhieb auf die Herkunft des Einwands verlassen alle drei die Sachebene.' },
    { typ: 'type', frage: 'Jemand sagt: „Ihre Zahlen stammen aus einem einzigen Betrieb." Räum den wahren Kern ein und grenz ihn ab.', muster: 'Das trifft zu, und ich nehme den Punkt an. Er betrifft aber die Reichweite meiner Zahlen, nicht ihre Richtigkeit.', akzeptiert: ['das trifft zu', 'da haben sie recht', 'das stimmt', 'das bestreite ich nicht', 'zugegeben'], hinweis: 'Der Dreischritt beginnt mit dem echten Zugeständnis, nicht mit einem halben. Danach grenzt du ab: Ein Einwand gegen die Reichweite ist kein Einwand gegen die Richtigkeit.' },
    { typ: 'type', frage: 'Weise einen Einwand zurück, ohne ihn kleinzumachen — benutze „gleichwohl".', muster: 'Ihr Einwand ist berechtigt; gleichwohl halte ich an dem Vorschlag fest.', akzeptiert: ['gleichwohl'], hinweis: 'Achte auf die Wortstellung nach dem Adverb: Position eins ist „gleichwohl", dann kommt sofort das finite Verb und erst danach das Subjekt.' }
  ],
  zusammenfassung: {
    kernsaetze: [
      'Das ist ein fairer Einwand, und ich nehme ihn an.',
      'Er trifft nicht das Modell, sondern seine Übertragbarkeit.',
      'Daraus folgt nicht, dass wir es lassen.',
      'Meinen Einwand halte ich gleichwohl aufrecht.',
      'Auf dieses Angebot gehe ich ein.'
    ],
    merke: [
      'Der Dreischritt: <b>zugeben — abgrenzen — widerlegen</b>. Wer zuerst etwas zugibt, bekommt Zuhören statt Widerstand.',
      'Nicht der Einwand ist falsch, sondern seine <b>Reichweite</b>. Trenn immer, ob jemand deine Sache angreift oder ihre Übertragbarkeit.',
      'Satzbau vor Vokabular: <b>obwohl und wenngleich</b> schicken das Verb ans Ende, <b>gleichwohl, dennoch und trotzdem</b> stehen als Adverb auf Position eins.'
    ],
    tipp: 'Nimm dir diese Woche eine Meinung vor, die du wirklich nicht teilst, und schreib dazu drei Sätze auf: einen echten Punkt, den du der Gegenseite zugestehst, die Grenze dieses Punktes, und deine Folgerung. Wenn dir der erste Satz nicht gelingt, kennst du die Gegenposition noch nicht gut genug — und genau dann verlierst du in jeder Debatte.'
  },
  sprechen: {
    task: 'Such dir ein Thema, bei dem du eine klare Meinung hast, und sprich drei Minuten dagegen an — gegen deine eigene Position. Beginne mit einem ehrlichen Zugeständnis, grenz es ab und zieh dann deine Folgerung. Benutze dabei mindestens drei verschiedene konzessive Verbindungen und beende die Aufnahme, ohne die Sache entschieden zu haben.',
    tipps: ['Das ist ein fairer Einwand, und ich nehme ihn an.', 'Der Punkt trifft zwar zu, aber er betrifft nur …', 'Daraus folgt allerdings nicht, dass …', 'Meinen Einwand halte ich gleichwohl aufrecht.']
  }
};
