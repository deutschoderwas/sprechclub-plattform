// Alltagsdeutsch B2 – Lektion 4: Einen Konflikt klären
// deutschoderwas club · Kursmaterial
window.LEKTION = {
  meta: { kurs: 'Alltagsdeutsch B2', nr: 4, titel: 'Einen Konflikt klären', level: 'B2', bild: 'th-gespraech', dauer: 'ca. 22 Min' },
  intro: {
    text: 'Etwas ist schiefgelaufen, und du bist sauer — aber du musst mit dieser Person morgen weiterarbeiten. Genau dafür hat das Deutsche eine eigene Zeitform: den Konjunktiv II der Vergangenheit. „Du hättest anrufen können" trifft, ohne zu verletzen. Heute lernst du, wie du einen Vorwurf so formulierst, dass dein Gegenüber zuhört statt sich zu verteidigen.',
    du_lernst: ['Ein Klärungsgespräch eröffnen', 'Konjunktiv II der Vergangenheit: hätte … gemacht', 'Vorwürfe abschwächen statt zuspitzen', 'Eine Vereinbarung für die Zukunft treffen']
  },
  dialog: {
    bild: 'th-gespraech',
    situation: 'Der Produktlaunch am Freitag ist schiefgegangen. Fatima sucht das Gespräch mit ihrem Kollegen Tobias, der den Termin verschoben hat, ohne sie zu erreichen.',
    lines: [
      { sp: 'Fatima', txt: 'Tobias, hast du zehn Minuten? Ich würde gern über den Launch am Freitag sprechen.' },
      { sp: 'Tobias', txt: 'Klar. Ich ahne schon, worauf das hinausläuft.' },
      { sp: 'Fatima', txt: 'Ich habe den Eindruck, dass ich zu spät informiert wurde. Von der Verschiebung habe ich erst am Donnerstagabend erfahren, aus dem Gruppenchat.' },
      { sp: 'Tobias', txt: 'Das tut mir ehrlich leid. Ich hätte dich sofort anrufen sollen, statt es nur in den Chat zu schreiben.' },
      { sp: 'Fatima', txt: 'Genau das wäre hilfreich gewesen. Mit einem Anruf hätte ich meinen Teil noch rechtzeitig anpassen können.' },
      { sp: 'Tobias', txt: 'Ich wollte dich nicht übergehen. Ehrlich gesagt bin ich selbst überrollt worden — die Änderung kam mittags von oben.' },
      { sp: 'Fatima', txt: 'Das wusste ich nicht. Vielleicht sehe ich es auch zu eng, aber ich hätte mir gewünscht, dass du wenigstens kurz Bescheid gibst, dass es hektisch wird.' },
      { sp: 'Tobias', txt: 'Der Punkt ist berechtigt. Wenn ich ehrlich bin: Ich hätte den neuen Termin gar nicht zusagen dürfen, ohne vorher mit dir zu sprechen.' },
      { sp: 'Fatima', txt: 'Gut, dass wir das aussprechen. Mir ist wichtiger, wie wir es beim nächsten Mal machen, als wer schuld war.' },
      { sp: 'Tobias', txt: 'Mein Vorschlag: Alles, was den Termin betrifft, geht sofort telefonisch an dich. Und ich hake nach, ob es angekommen ist.' }
    ]
  },
  vokabeln: [
    { de: 'das Klärungsgespräch', em: '🗣️', bsp: 'Wir sollten ein Klärungsgespräch führen.' },
    { de: 'etwas ansprechen', em: '📢', bsp: 'Ich möchte etwas ansprechen, das mich stört.' },
    { de: 'den Eindruck haben', em: '👁️', bsp: 'Ich habe den Eindruck, dass ich übergangen wurde.' },
    { de: 'jemanden übergehen', em: '🚫', bsp: 'Ich wollte dich nicht übergehen.' },
    { de: 'die Verschiebung', em: '📅', bsp: 'Von der Verschiebung habe ich zu spät erfahren.' },
    { de: 'rechtzeitig', em: '⏰', bsp: 'Ich hätte es rechtzeitig anpassen können.' },
    { de: 'Bescheid geben', em: '📨', bsp: 'Gib mir kurz Bescheid, wenn es eng wird.' },
    { de: 'nachhaken', em: '🪝', bsp: 'Ich hake nach, ob es angekommen ist.' },
    { de: 'etwas aussprechen', em: '💬', bsp: 'Gut, dass wir das aussprechen.' },
    { de: 'berechtigt', em: '👌', bsp: 'Der Punkt ist berechtigt.' },
    { de: 'die Absicht', em: '🎯', bsp: 'Das war nicht meine Absicht.' },
    { de: 'das Missverständnis', em: '🌀', bsp: 'Da liegt ein Missverständnis vor.' },
    { de: 'einlenken', em: '🤝', bsp: 'Er lenkt ein und gibt seinen Fehler zu.' },
    { de: 'etwas zugeben', em: '🙋', bsp: 'Ich gebe zu, das war mein Fehler.' },
    { de: 'die Vereinbarung', em: '📜', bsp: 'Treffen wir eine klare Vereinbarung.' },
    { de: 'es zu eng sehen', em: '🔎', bsp: 'Vielleicht sehe ich es zu eng.' }
  ],
  grammatik: {
    title: 'Grammatik im Kontext',
    blocks: [
      {
        h: 'Konjunktiv II der Vergangenheit — was hätte sein können',
        txt: 'Weder Fatima noch Tobias sagen „Du hast nicht angerufen". Sie sprechen über eine Vergangenheit, die es nicht gab. Dafür gibt es nur eine Form: hätte oder wäre plus Partizip II.',
        table: [
          ['Wirklichkeit (Perfekt)', 'Konjunktiv II der Vergangenheit', 'Wirkung'],
          ['Ich habe nicht angerufen.', 'Ich hätte anrufen sollen.', 'Bedauern, Selbstkritik'],
          ['Du hast nichts gesagt.', 'Du hättest kurz Bescheid geben können.', 'sehr weicher Vorwurf'],
          ['Das war nicht hilfreich.', 'Das wäre hilfreich gewesen.', 'Wunsch im Rückblick'],
          ['Ich konnte nichts anpassen.', 'Ich hätte etwas anpassen können.', 'verpasste Möglichkeit'],
          ['Ich habe den Termin zugesagt.', 'Ich hätte den Termin nicht zusagen dürfen.', 'eigener Fehler, klar benannt']
        ],
        note: 'Bauplan: <b>hätte / wäre + Partizip II</b>. Kommt ein Modalverb dazu, steht kein Partizip mehr, sondern <b>zwei Infinitive</b>, das Modalverb ganz am Ende: „Ich hätte <b>anrufen sollen</b>."'
      },
      {
        h: 'Vorwürfe abschwächen',
        txt: 'Derselbe Inhalt, zwei Wirkungen. Links macht der Satz die Tür zu, rechts bleibt sie offen:',
        table: [
          ['Hart — der Du-Vorwurf', 'Weich — die Ich-Perspektive'],
          ['Du hast mich nicht informiert!', 'Ich habe den Eindruck, dass ich zu spät informiert wurde.'],
          ['Du hättest anrufen müssen!', 'Ein kurzer Anruf hätte mir sehr geholfen.'],
          ['Das war rücksichtslos.', 'Vielleicht sehe ich es zu eng, aber das hat mich getroffen.'],
          ['Du machst das immer so!', 'Mir ist das jetzt zum zweiten Mal aufgefallen.'],
          ['Wer war dafür verantwortlich?', 'Mir ist wichtiger, wie wir es beim nächsten Mal machen.']
        ],
        note: 'Drei Weichmacher: <b>Passiv statt Du-Form</b> („ich wurde informiert"), <b>Konjunktiv II statt Indikativ</b> („hätte geholfen"), <b>Wahrnehmung statt Diagnose</b> („ich habe den Eindruck"). Und streich <b>immer</b> und <b>nie</b> — sie machen aus einem Vorfall einen Charakterfehler.'
      }
    ]
  },
  uebungen: [
    { typ: 'listen', audio: 'Ich hätte dich sofort anrufen sollen, statt es nur in den Chat zu schreiben.', frage: 'Hör zu: Was drückt der Sprecher aus?', optionen: ['Er bedauert sein eigenes Verhalten.', 'Er macht der anderen Person einen Vorwurf.', 'Er kündigt an, gleich anzurufen.'], richtig: 0 },
    { typ: 'mc', frage: 'Welcher Satz steht korrekt im Konjunktiv II der Vergangenheit?', optionen: ['Das wäre hilfreich gewesen.', 'Das würde hilfreich gewesen sein.', 'Das hätte hilfreich.'], richtig: 0, hinweis: 'Vergangenheit im Konjunktiv II gibt es nur in einer Form: hätte oder wäre plus Partizip II. würde funktioniert hier nicht.' },
    { typ: 'mc', frage: 'Welche Formulierung öffnet das Gespräch statt es zu schließen?', optionen: ['Ich habe den Eindruck, dass ich zu spät informiert wurde.', 'Du informierst mich grundsätzlich zu spät.', 'Von dir kommt nie rechtzeitig etwas.'], richtig: 0, hinweis: 'Sprich über deine Wahrnehmung, nicht über den Charakter des anderen. Wörter wie grundsätzlich, immer und nie machen aus einem Vorfall ein Urteil.' },
    { typ: 'gapbank', frage: 'Setz den Konjunktiv II der Vergangenheit ein.', text: 'Ich ___ dich sofort anrufen sollen. Ein kurzer Anruf ___ mir wirklich geholfen. Das ___ hilfreich gewesen. Mit mehr Zeit ___ ich meinen Teil noch anpassen können.', bank: ['hätte', 'hätte', 'wäre', 'hätte', 'würde', 'war'], loesung: ['hätte', 'hätte', 'wäre', 'hätte'], hinweis: 'Verben mit sein im Perfekt (sein, gehen, bleiben) nehmen wäre, alle anderen hätte. „gewesen" gehört immer zu wäre.' },
    { typ: 'order', frage: 'Bau den Satz, mit dem du deinen eigenen Fehler zugibst!', woerter: ['hätte', 'Ich', 'dich', 'sofort', 'anrufen', 'sollen'], loesung: 'Ich hätte dich sofort anrufen sollen', hinweis: 'Mit Modalverb entsteht ein doppelter Infinitiv: erst das Vollverb, dann das Modalverb — und beide ganz am Satzende.' },
    { typ: 'order', frage: 'Bau den weichen Vorwurf!', woerter: ['Anruf', 'Ein', 'kurzer', 'hätte', 'mir', 'geholfen'], loesung: 'Ein kurzer Anruf hätte mir geholfen', hinweis: 'Statt „du" wird hier eine Sache zum Subjekt. Das nimmt dem Vorwurf die Spitze, ohne den Inhalt zu ändern.' },
    { typ: 'match', frage: 'Harte Aussage und weiche Variante — was gehört zusammen?', paare: [['Du hast mich nicht informiert!', '👁️ Ich habe den Eindruck, dass ich zu spät informiert wurde.'], ['Du hättest anrufen müssen!', '📞 Ein kurzer Anruf hätte mir sehr geholfen.'], ['Das war rücksichtslos.', '💬 Vielleicht sehe ich es zu eng, aber das hat mich getroffen.'], ['Du machst das immer so!', '2️⃣ Mir ist das jetzt zum zweiten Mal aufgefallen.'], ['Wer war schuld?', '➡️ Wie machen wir es beim nächsten Mal?']] },
    { typ: 'bild', bild: 'th-gespraech', frage: 'Ihr sitzt euch gegenüber. Mit welchem Satz eröffnest du das Klärungsgespräch?', optionen: ['Hast du zehn Minuten? Ich würde gern über Freitag sprechen — mich beschäftigt da etwas.', 'Wir müssen reden, so geht das nicht weiter.', 'Ich hoffe, du weißt selbst, was du falsch gemacht hast.', 'Alles gut bei mir, ich wollte nur mal hören, wie es dir geht.'], richtig: 0, hinweis: 'Ein guter Einstieg nennt drei Dinge: die Zeit, das Thema und dein Anliegen. Weder Drohung noch Umweg — beides kostet dich das Gespräch.' },
    { typ: 'type', frage: 'Formuliere einen weichen Vorwurf im Konjunktiv II der Vergangenheit.', muster: 'Ich hätte mir gewünscht, dass du mir vorher kurz Bescheid gibst.', akzeptiert: ['hätte', 'wäre'], hinweis: 'hätte oder wäre plus Partizip II. Wenn du „ich" statt „du" zum Subjekt machst, wird aus dem Vorwurf ein Wunsch — und der lässt sich beantworten.' },
    { typ: 'mc', frage: 'Ihr habt den Konflikt besprochen. Womit beendest du das Gespräch?', optionen: ['Vereinbaren wir konkret: Terminänderungen kommen sofort telefonisch — und wir haken beide nach.', 'Gut, dann lassen wir das Thema jetzt einfach ruhen.', 'Ich hoffe, so etwas kommt nie wieder vor.', 'Beim nächsten Mal weiß ich dann ja Bescheid.'], richtig: 0, hinweis: 'Ein Klärungsgespräch ohne konkrete Vereinbarung wiederholt sich garantiert. Halte am Ende fest, wer was ab wann anders macht.' }
  ],
  zusammenfassung: {
    kernsaetze: [
      'Hast du zehn Minuten? Ich würde gern über Freitag sprechen.',
      'Ich habe den Eindruck, dass ich zu spät informiert wurde.',
      'Ein kurzer Anruf hätte mir sehr geholfen.',
      'Ich hätte dich sofort anrufen sollen — das war mein Fehler.',
      'Mir ist wichtiger, wie wir es beim nächsten Mal machen, als wer schuld war.'
    ],
    merke: [
      'Konjunktiv II der Vergangenheit = <b>hätte / wäre + Partizip II</b>. Mit Modalverb werden daraus <b>zwei Infinitive</b>: „Ich hätte <b>anrufen sollen</b>."',
      'Weichmacher-Trio: <b>Passiv</b> statt Du-Form, <b>Konjunktiv II</b> statt Indikativ, <b>Ich habe den Eindruck</b> statt einer Diagnose.',
      'Streich <b>immer</b> und <b>nie</b>. Sie verwandeln einen einzelnen Vorfall in einen Charaktervorwurf — und dann verteidigt sich dein Gegenüber, statt zuzuhören.'
    ],
    tipp: 'Denk an den letzten Ärger, den du geschluckt hast. Schreib ihn zuerst so auf, wie er dir im Kopf herausrutschen würde — mit du, immer und nie. Dann schreib ihn ein zweites Mal um: Ich-Perspektive, Konjunktiv II, ein konkreter Vorschlag am Ende. Genau diesen zweiten Satz sprichst du das nächste Mal aus.'
  },
  sprechen: {
    task: 'Sprich ein komplettes Klärungsgespräch aus deiner Sicht: Einstieg, deine Wahrnehmung, ein weicher Vorwurf im Konjunktiv II der Vergangenheit, und zum Schluss ein konkreter Vorschlag für die Zukunft.',
    tipps: ['Hast du kurz Zeit? Ich würde gern über … sprechen.', 'Ich habe den Eindruck, dass …', 'Es wäre hilfreich gewesen, wenn …', 'Mein Vorschlag für das nächste Mal: …']
  }
};
