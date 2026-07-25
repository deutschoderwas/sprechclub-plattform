// Deutsch für Büro & Logistik – Lektion 6: Der kurze Bericht
// deutschoderwas club · Kursmaterial
window.LEKTION = {
  meta: { kurs: 'Deutsch für Büro & Logistik', nr: 6, titel: 'Der kurze Bericht', level: 'A2–B2', bild: 'th-fachtext', dauer: 'ca. 18 Min' },
  intro: {
    text: 'Deine Chefin liest drei Zeilen, dann entscheidet sie. Ein guter Bericht bringt deshalb das Ergebnis in den ersten Satz und die Erklärung danach. Dafür brauchst du zwei Dinge: den Nominalstil, der Berichtsdeutsch kurz macht, und die Wörter, mit denen du Zahlen einordnest, statt sie nur aufzuzählen.',
    du_lernst: ['Kernaussage zuerst, Details danach', 'Nominalstil: prüfen wird zur Prüfung', 'Zahlen vergleichen und bewerten', 'Mit einer Empfehlung schließen']
  },
  dialog: {
    bild: 'th-fachtext',
    situation: 'Kwame soll den Monatsbericht Lager abgeben. Betriebsleiterin Frau Reimann liest die erste Fassung im Stehen, zwischen zwei Terminen.',
    lines: [
      { sp: 'Frau Reimann', txt: 'Kwame, ich habe zwei Minuten bis zum nächsten Termin. Was steht im Monatsbericht?' },
      { sp: 'Kwame', txt: 'Also, ich fange mit dem Wareneingang an, dann kommen die Retouren, und ganz am Ende die Sache mit dem Stapler …' },
      { sp: 'Frau Reimann', txt: 'Stopp. Was ist das Wichtigste?' },
      { sp: 'Kwame', txt: 'Die Fehlerquote ist von 4,2 auf 1,8 Prozent gefallen.' },
      { sp: 'Frau Reimann', txt: 'Das ist Ihr erster Satz. Nicht Ihr letzter.' },
      { sp: 'Kwame', txt: 'Und wie formuliere ich das?' },
      { sp: 'Frau Reimann', txt: 'Kurz: „Die Fehlerquote im Wareneingang ist im Juni auf 1,8 Prozent gesunken — der niedrigste Wert seit Januar." Danach eine Zeile: warum.' },
      { sp: 'Kwame', txt: 'Der Rückgang kommt daher, dass wir Sammelladungen jetzt doppelt kontrollieren.' },
      { sp: 'Frau Reimann', txt: 'Im Bericht heißt das: „Ursache ist die Einführung der doppelten Kontrolle." Und ganz zum Schluss Ihre Bitte — Sie wollten doch einen zweiten Scanner.' },
      { sp: 'Kwame', txt: 'Bis Ende Juli, sonst steigt die Quote im Sommergeschäft wieder. Gut, drei Sätze — dann lesen Sie es auch.' }
    ]
  },
  vokabeln: [
    { de: 'die Fehlerquote', em: '📉', bsp: 'Die Fehlerquote liegt bei 1,8 Prozent.' },
    { de: 'der Rückgang', em: '⬇️', bsp: 'ein Rückgang um 2,4 Prozentpunkte' },
    { de: 'der Anstieg', em: '⬆️', bsp: 'ein Anstieg gegenüber dem Vormonat' },
    { de: 'sinken auf … / steigen auf …', em: '📊', bsp: 'Die Quote ist auf 1,8 Prozent gesunken.' },
    { de: 'gegenüber dem Vormonat', em: '🗓', bsp: 'zwölf Prozent weniger gegenüber dem Vormonat' },
    { de: 'im Vergleich zu …', em: '⚖️', bsp: 'im Vergleich zum Vorjahr deutlich besser' },
    { de: 'Ursache ist …', em: '🔍', bsp: 'Ursache ist die doppelte Kontrolle.' },
    { de: 'die Einführung', em: '🚀', bsp: 'die Einführung der doppelten Kontrolle' },
    { de: 'die Umsetzung', em: '🔧', bsp: 'Die Umsetzung erfolgt ab Juli.' },
    { de: 'erfolgen', em: '✔️', bsp: 'Die Prüfung erfolgt wöchentlich.' },
    { de: 'der Handlungsbedarf', em: '❗', bsp: 'Beim Scanner besteht Handlungsbedarf.' },
    { de: 'die Empfehlung', em: '👉', bsp: 'Empfehlung: zweiter Scanner bis Ende Juli.' },
    { de: 'deutlich / leicht', em: '📐', bsp: 'deutlich gesunken, leicht gestiegen' },
    { de: 'der niedrigste Wert seit …', em: '🏅', bsp: 'der niedrigste Wert seit Januar' },
    { de: 'die Retoure', em: '🔙', bsp: 'Retouren sind Rücksendungen von Kunden.' },
    { de: 'die Sammelladung', em: '🚛', bsp: 'mehrere Aufträge auf einer Tour' }
  ],
  grammatik: {
    title: 'Grammatik im Berufskontext',
    blocks: [
      {
        h: 'Nominalstil — vom Satz zum Substantiv',
        txt: 'Berichtsdeutsch presst Verben zu Substantiven zusammen. Das spart Zeilen und klingt sachlich — im Gespräch bleibst du dagegen beim Verb.',
        table: [
          ['Gesprochen (Verb)', 'Bericht (Nomen)'],
          ['Wir haben die doppelte Kontrolle eingeführt.', 'Einführung der doppelten Kontrolle'],
          ['Wir prüfen jede Woche.', 'wöchentliche Prüfung'],
          ['Weil viele Retouren kamen, …', 'aufgrund der hohen Retourenzahl'],
          ['Wir setzen das ab Juli um.', 'Umsetzung ab Juli'],
          ['Wir brauchen einen zweiten Scanner.', 'Bedarf: ein zweiter Scanner']
        ],
        note: 'Faustregel: Verb wird zu Nomen, weil wird zu aufgrund, nachdem wird zu nach. Aber übertreib es nicht — vier Substantive hintereinander liest niemand mehr freiwillig.'
      },
      {
        h: 'Zahlen einordnen statt aufzählen',
        txt: 'Eine Zahl allein sagt nichts. Erst der Vergleich macht daraus eine Aussage, mit der jemand etwas anfangen kann:',
        table: [
          ['Nur die Zahl', 'Eingeordnet'],
          ['1,8 Prozent Fehlerquote', '1,8 Prozent — der niedrigste Wert seit Januar'],
          ['Wir hatten 340 Retouren.', '340 Retouren, zwölf Prozent weniger als im Vormonat'],
          ['Die Quote ist gefallen.', 'Die Quote ist deutlich gefallen: von 4,2 auf 1,8 Prozent'],
          ['Es gab Verzögerungen.', 'Drei Touren verspäteten sich um mehr als zwei Stunden']
        ],
        note: 'Achte auf die Präpositionen: gesunken auf 1,8 Prozent nennt den Endwert, gesunken um 2,4 Punkte nennt die Differenz, gegenüber dem Vormonat nennt den Vergleich.'
      }
    ]
  },
  uebungen: [
    { typ: 'listen', audio: 'Die Fehlerquote im Wareneingang ist im Juni auf 1,8 Prozent gesunken.', frage: 'Hör zu: Welcher Wert wird am Ende erreicht?', optionen: ['1,8 Prozent', '4,2 Prozent', '18 Prozent'], richtig: 0, hinweis: '„auf" nennt immer den neuen Wert, nicht die Differenz.' },
    { typ: 'mc', frage: 'Womit beginnt ein guter kurzer Bericht?', optionen: ['mit dem wichtigsten Ergebnis', 'mit dem zeitlichen Ablauf', 'mit einem Dank an das Team'], richtig: 0, hinweis: 'Kernaussage zuerst — alles danach ist nur noch Begründung.' },
    { typ: 'mc', frage: 'Wie heißt „Wir haben die doppelte Kontrolle eingeführt" im Nominalstil?', optionen: ['Einführung der doppelten Kontrolle', 'Die Kontrolle wurde doppelt.', 'Wir kontrollieren jetzt doppelt.'], richtig: 0, hinweis: 'Verb einführen wird zum Nomen die Einführung, danach folgt der Genitiv.' },
    { typ: 'mc', frage: 'Was ist der Unterschied zwischen „um" und „auf"?', optionen: ['„um" nennt die Differenz, „auf" den neuen Wert.', '„um" nennt den neuen Wert, „auf" die Differenz.', 'Beides bedeutet dasselbe.'], richtig: 0, hinweis: 'gesunken um 2,4 Prozentpunkte · gesunken auf 1,8 Prozent' },
    { typ: 'gapbank', frage: 'Setz die Präpositionen ein.', text: 'Die Quote ist ___ 2,4 Prozentpunkte gefallen und damit ___ 1,8 Prozent gesunken — ein deutlicher Rückgang ___ dem Vormonat.', bank: ['um', 'auf', 'gegenüber', 'über'], loesung: ['um', 'auf', 'gegenüber'], hinweis: 'Differenz mit um, Endwert mit auf, Vergleich mit gegenüber plus Dativ.' },
    { typ: 'order', frage: 'Bau den Ursachensatz im Nominalstil!', woerter: ['Kontrolle', 'ist', 'Ursache', 'doppelten', 'Einführung', 'die', 'der'], loesung: 'Ursache ist die Einführung der doppelten Kontrolle', hinweis: 'Nach dem Nomen Einführung folgt der Genitiv: der doppelten Kontrolle.' },
    { typ: 'match', frage: 'Verb und Nominalstil — was gehört zusammen?', paare: [['prüfen', '🔍 die Prüfung'], ['umsetzen', '🔧 die Umsetzung'], ['einführen', '🚀 die Einführung'], ['zurücksenden', '🔙 die Rücksendung'], ['sich verspäten', '⏰ die Verspätung']] },
    { typ: 'bild', bild: 'th-fachtext', frage: 'Dein Bericht endet mit „Es gab einige Probleme." Was fehlt?', optionen: ['eine konkrete Empfehlung mit Termin', 'ein längeres Vorwort', 'eine Entschuldigung'], richtig: 0, hinweis: 'Ein Bericht ohne Empfehlung erzeugt nur Rückfragen — und die kosten dich den nächsten Termin.' },
    { typ: 'mc', frage: 'Welcher Satz ordnet die Zahl richtig ein?', optionen: ['340 Retouren — zwölf Prozent weniger als im Vormonat', 'Wir hatten 340 Retouren.', 'Es gab wieder viele Retouren.'], richtig: 0, hinweis: 'Erst der Vergleich macht aus einer Zahl eine Aussage.' },
    { typ: 'type', frage: 'Schreib den ersten Satz deines Berichts: Die Lieferquote ist im Mai von 91 auf 96 Prozent gestiegen.', muster: 'Die Lieferquote ist im Mai auf 96 Prozent gestiegen — fünf Prozentpunkte mehr als im Vormonat.', akzeptiert: ['auf 96', 'gestiegen', 'prozent'], hinweis: 'Endwert mit „auf", Vergleich direkt dahinter. Die Kernaussage steht im ersten Satz.' }
  ],
  zusammenfassung: {
    kernsaetze: [
      'Die Fehlerquote im Wareneingang ist im Juni auf 1,8 Prozent gesunken.',
      'Das ist der niedrigste Wert seit Januar.',
      'Ursache ist die Einführung der doppelten Kontrolle.',
      'Gegenüber dem Vormonat bedeutet das einen Rückgang um 2,4 Prozentpunkte.',
      'Empfehlung: ein zweiter Scanner bis Ende Juli, sonst steigt die Quote im Sommergeschäft wieder.'
    ],
    merke: [
      '<b>Kernaussage in den ersten Satz</b> — der Ablauf interessiert niemanden.',
      'Nominalstil: <b>Verb wird Nomen</b> (einführen → die Einführung), danach steht der <b>Genitiv</b>.',
      'Zahlen einordnen: <b>auf</b> = Endwert · <b>um</b> = Differenz · <b>gegenüber</b> = Vergleich.'
    ],
    tipp: 'Nimm deinen letzten Bericht und streiche alles bis auf drei Sätze: Ergebnis, Ursache, Empfehlung. Wenn danach noch alles Wichtige drinsteht, hast du das Prinzip verstanden — und dein nächster Bericht wird direkt so geschrieben.'
  },
  sprechen: {
    task: 'Berichte in genau drei Sätzen über deine letzte Arbeitswoche: erst das Ergebnis mit einer Zahl, dann die Ursache, dann eine Empfehlung mit Termin.',
    tipps: ['… ist im … auf … Prozent gesunken/gestiegen.', 'Das ist der höchste/niedrigste Wert seit …', 'Ursache ist die Einführung von …', 'Empfehlung: … bis spätestens …']
  }
};
