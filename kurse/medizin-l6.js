// Deutsch für Mediziner – Lektion 6: Das schwierige Gespräch
// deutschoderwas club · Kursmaterial
window.LEKTION = {
  meta: { kurs: 'Deutsch für Mediziner', nr: 6, titel: 'Das schwierige Gespräch', level: 'B2–C1', bild: 'th-arzt', dauer: 'ca. 22 Min' },
  intro: {
    text: 'Eine schlechte Nachricht überbringt man nicht mit Fachwissen, sondern mit Sprache und Timing. Der entscheidende Teil ist der, in dem du nichts sagst: die Pause nach dem Befund. Drumherum brauchst du Wendungen, die tragen, ohne zu trösten — und die kleinen Wörter, an denen Muttersprachler sofort hören, ob jemand nur korrekt spricht oder wirklich da ist: doch, mal, denn, ruhig, eben.',
    du_lernst: ['Eine schlechte Nachricht in Etappen überbringen', 'Pausen aushalten statt füllen', 'Modalpartikeln richtig dosieren', 'Behutsam formulieren mit Konjunktiv II']
  },
  dialog: {
    bild: 'th-arzt',
    situation: 'Onkologische Ambulanz. Dr. Ferreira teilt Herrn Grabowski und seiner Tochter das Ergebnis der Gewebeprobe mit.',
    lines: [
      { sp: 'Dr. Ferreira', txt: 'Herr Grabowski, gut, dass Ihre Tochter mitgekommen ist. Das Ergebnis der Gewebeprobe liegt vor. Ist es Ihnen recht, wenn wir gleich darüber sprechen?' },
      { sp: 'Herr Grabowski', txt: 'Sagen Sie es ruhig. Ich hab die ganze Nacht nicht geschlafen.' },
      { sp: 'Dr. Ferreira', txt: 'Was vermuten Sie denn selbst?' },
      { sp: 'Herr Grabowski', txt: 'Dass es nichts Gutes ist.' },
      { sp: 'Dr. Ferreira', txt: 'Da haben Sie leider recht. Der Befund zeigt, dass es sich um einen bösartigen Tumor handelt. — — —' },
      { sp: 'Tochter', txt: 'Also Krebs.' },
      { sp: 'Dr. Ferreira', txt: 'Ja. — Ich lasse Ihnen einen Moment Zeit.' },
      { sp: 'Herr Grabowski', txt: 'Und? Wie lange hab ich noch?' },
      { sp: 'Dr. Ferreira', txt: 'Diese Frage kann ich Ihnen heute ehrlich nicht beantworten, und ich möchte Ihnen nichts sagen, was ich nicht weiß. Was ich sagen kann: Der Tumor ist begrenzt, und es gibt eine Behandlung, die wir Ihnen anbieten würden. Wäre es Ihnen recht, wenn wir die Einzelheiten am Donnerstag besprechen? Dann können Sie das erst mal sacken lassen — und bringen Sie Ihre Tochter doch wieder mit.' },
      { sp: 'Herr Grabowski', txt: 'Donnerstag, gut. Dann machen wir das eben Schritt für Schritt.' }
    ]
  },
  vokabeln: [
    { de: 'Ist es Ihnen recht, wenn …?', em: '🤲', bsp: 'Erlaubnis einholen, bevor du beginnst' },
    { de: 'Was vermuten Sie denn selbst?', em: '💭', bsp: 'Klärt, was der Patient schon ahnt.' },
    { de: 'die Gewebeprobe', em: '🔬', bsp: 'Das Ergebnis der Gewebeprobe liegt vor.' },
    { de: 'bösartig / gutartig', em: '⚫', bsp: 'Es handelt sich um einen bösartigen Tumor.' },
    { de: 'Da haben Sie leider recht.', em: '💔', bsp: 'bestätigt die Ahnung, ohne sie zu überrollen' },
    { de: 'Ich lasse Ihnen Zeit.', em: '⏸️', bsp: 'Der Satz, der die Pause eröffnet.' },
    { de: 'Das tut mir leid.', em: '🕊️', bsp: 'kurz, echt, ohne Zusatz' },
    { de: 'Ich sehe, dass Sie das trifft.', em: '👁️', bsp: 'Gefühl benennen statt wegreden' },
    { de: 'Was beschäftigt Sie jetzt am meisten?', em: '🧭', bsp: 'öffnet das Gespräch nach der Pause' },
    { de: 'sacken lassen', em: '🪨', bsp: 'Lassen Sie das erst einmal sacken.' },
    { de: 'Schritt für Schritt', em: '👣', bsp: 'Wir gehen das Schritt für Schritt an.' },
    { de: 'Wäre es Ihnen recht, wenn …?', em: '🗓️', bsp: 'behutsamer Terminvorschlag' },
    { de: 'die Modalpartikel „ruhig"', em: '🫱', bsp: 'Sagen Sie es ruhig. (= nur zu, keine Angst)' },
    { de: 'die Modalpartikel „doch"', em: '🤗', bsp: 'Bringen Sie Ihre Tochter doch wieder mit.' },
    { de: 'die Modalpartikel „denn"', em: '🙋', bsp: 'Was vermuten Sie denn selbst?' },
    { de: 'die Modalpartikel „eben"', em: '🤷', bsp: 'Dann machen wir das eben so.' }
  ],
  grammatik: {
    title: 'Sprache im schwierigen Gespräch',
    blocks: [
      {
        h: 'Modalpartikeln — die kleinen Wörter, die alles ändern',
        txt: 'Modalpartikeln sind unbetont, unübersetzbar und stehen im Mittelfeld des Satzes. Sie tragen keine Information, sondern Haltung. Ohne sie klingt selbst ein grammatisch perfekter Satz wie eine Durchsage:',
        table: [
          ['Partikel', 'Wirkung', 'Beispiel im Gespräch'],
          ['denn', 'echtes Interesse, weicht die Frage auf', 'Was vermuten Sie denn selbst?'],
          ['ruhig', 'erlaubt etwas, nimmt Hemmung', 'Sagen Sie es ruhig. Melden Sie sich ruhig jederzeit.'],
          ['doch', 'freundlicher Anstoß, warmer Vorschlag', 'Bringen Sie Ihre Tochter doch wieder mit.'],
          ['mal', 'macht die Aufforderung klein und leicht', 'Setzen wir uns erst mal hin.'],
          ['eben / halt', 'akzeptiert, was nicht zu ändern ist', 'Dann gehen wir das eben Schritt für Schritt an.'],
          ['ja', 'gemeinsames Wissen, schafft Nähe', 'Wir haben ja schon beim letzten Termin darüber gesprochen.'],
          ['wohl', 'Vermutung, lässt Raum', 'Das ist jetzt wohl viel auf einmal.']
        ],
        note: 'Zwei harte Regeln: Modalpartikeln sind <b>unbetont</b> — betonst du sie, kippt die Bedeutung („Sagen Sie es RUHIG" klingt genervt). Und höchstens <b>eine pro Satz</b>. Wer sie häuft, klingt nicht warm, sondern beiläufig — und Beiläufigkeit ist in diesem Gespräch das Schlimmste.'
      },
      {
        h: 'Konjunktiv II als Schutzschicht',
        txt: 'In Lektion 3 hat der Konjunktiv II Risiken in den hypothetischen Raum verschoben. Hier tut er etwas anderes: Er gibt dem Patienten die Möglichkeit, nein zu sagen. Genau das braucht jemand, der gerade die Kontrolle über sein Leben verloren hat:',
        table: [
          ['Direkt', 'Behutsam', 'Was der Patient hört'],
          ['Ist Ihnen das recht?', 'Wäre es Ihnen recht, wenn …?', 'Ich darf auch ablehnen.'],
          ['Ich schlage vor, dass …', 'Ich würde Ihnen vorschlagen, dass …', 'Das ist ein Angebot, kein Befehl.'],
          ['Bringen Sie jemanden mit.', 'Es wäre gut, wenn jemand dabei wäre.', 'Er sorgt sich um mich.'],
          ['Kommen Sie Donnerstag wieder.', 'Könnten wir uns Donnerstag noch einmal zusammensetzen?', 'Wir machen das gemeinsam.'],
          ['Wir behandeln Sie mit Chemotherapie.', 'Es gibt eine Behandlung, die wir Ihnen anbieten würden.', 'Ich entscheide mit.']
        ],
        note: 'Aber Vorsicht vor der Überdosis: Die <b>Diagnose selbst</b> steht im Indikativ. „Der Befund zeigt, dass es sich um einen bösartigen Tumor handelt" — klar und ohne Konjunktiv. Behutsam sind Vorschläge und Fragen, nie die Tatsache.'
      },
      {
        h: 'Sechs Etappen — und eine davon ist Schweigen',
        txt: 'Schlechte Nachrichten überbringt man nicht am Stück, sondern in Etappen mit Halt dazwischen. Diese Reihenfolge gehört zum Standard und wird in der Prüfung genauso erwartet wie am Bett:',
        table: [
          ['Etappe', 'Was du tust', 'Formulierung'],
          ['1. Rahmen', 'Ruhe, Sitzen, Angehörige, Erlaubnis', 'Ist es Ihnen recht, wenn wir gleich darüber sprechen?'],
          ['2. Vorwissen', 'fragen, was er selbst vermutet', 'Was vermuten Sie denn selbst?'],
          ['3. Vorwarnschuss', 'ein Satz Ankündigung', 'Ich habe leider keine gute Nachricht für Sie.'],
          ['4. Die Nachricht', 'ein einziger klarer Satz, kein Fachwort', 'Der Befund zeigt, dass es ein bösartiger Tumor ist.'],
          ['5. Die Pause', 'nichts sagen — fünf bis zehn Sekunden', '(Schweigen) … Ich lasse Ihnen einen Moment Zeit.'],
          ['6. Ausblick', 'ein nächster Schritt, ein Termin', 'Wir gehen das Schritt für Schritt an. Donnerstag besprechen wir die Einzelheiten.']
        ],
        note: 'Etappe 5 ist die schwerste und die wichtigste. Nach der Nachricht hört der Patient ohnehin nichts mehr — jedes Wort, das du jetzt sprichst, ist verloren. Und drei Sätze sind endgültig verboten: <b>„Das wird schon wieder."</b> · <b>„Ich weiß, wie Sie sich fühlen."</b> · <b>„Da müssen Sie jetzt stark sein."</b>'
      }
    ]
  },
  uebungen: [
    { typ: 'listen', audio: 'Wäre es Ihnen recht, wenn wir die Einzelheiten am Donnerstag besprechen?', frage: 'Hör zu: Was macht die Ärztin?', optionen: ['Sie schlägt einen Termin vor und lässt dem Patienten die Wahl.', 'Sie bestellt den Patienten verbindlich für Donnerstag ein.', 'Sie fragt, ob der Patient am Donnerstag schon Bescheid weiß.'], richtig: 0 },
    { typ: 'mc', frage: 'Du hast die Diagnose gesagt. Der Patient schweigt. Was tust du?', optionen: ['Du erklärst sofort die Behandlungsmöglichkeiten.', 'Du schweigst mit und hältst die Pause aus.', 'Du sagst: Das wird schon wieder, da kommen viele durch.'], richtig: 1, hinweis: 'Nach der Nachricht kann niemand mehr Informationen aufnehmen. Die Pause gehört dem Patienten — wer sie füllt, füllt sie für sich selbst.' },
    { typ: 'match', frage: 'Modalpartikel und Wirkung — was passt zusammen?', paare: [['denn', '🙋 echtes Interesse an der Antwort'], ['ruhig', '🫱 erlaubt etwas, nimmt die Hemmung'], ['doch', '🤗 warmer, freundlicher Anstoß'], ['eben', '🤷 akzeptiert, was nicht zu ändern ist'], ['wohl', '🌫️ Vermutung, lässt Raum']] },
    { typ: 'gapbank', frage: 'Setz die passenden Modalpartikeln ein.', text: 'Was beschäftigt Sie ___ am meisten? Setzen Sie sich ___ erst einmal hin. Und fragen Sie ___ nach, wenn etwas unklar bleibt.', bank: ['denn', 'doch', 'ruhig', 'eben', 'wohl'], loesung: ['denn', 'doch', 'ruhig'], hinweis: '„denn" weicht die Frage auf, „doch" ist der warme Anstoß, „ruhig" gibt die Erlaubnis („Fragen Sie ruhig nach" = nur zu). „eben" und „wohl" gehören zu Aussagen über Tatsachen, nicht zu Aufforderungen.' },
    { typ: 'mc', frage: 'Welcher Satz hilft dem Patienten NICHT?', optionen: ['Ich weiß genau, wie Sie sich jetzt fühlen.', 'Ich sehe, dass Sie das sehr trifft.', 'Das tut mir leid.'], richtig: 0, hinweis: 'Niemand weiß, wie ein anderer sich fühlt — der Satz nimmt dem Patienten sein eigenes Erleben weg. Beobachten und benennen ist erlaubt, behaupten nicht.' },
    { typ: 'order', frage: 'Bau die behutsame Empfehlung mit Konjunktiv II!', woerter: ['Es', 'wäre', 'gut', 'wenn', 'jemand', 'aus', 'der', 'Familie', 'dabei', 'wäre'], loesung: 'Es wäre gut wenn jemand aus der Familie dabei wäre', hinweis: 'Im Hauptsatz steht „wäre" auf Position 2, im wenn-Satz ganz am Ende. Aus einer Anweisung wird so ein Wunsch, den man annehmen oder ablehnen kann.' },
    { typ: 'bild', bild: 'th-arzt', frage: 'Der Patient fragt: „Wie lange habe ich noch?" Was antwortest du?', optionen: ['Statistisch liegt die mittlere Überlebenszeit bei etwa vierzehn Monaten.', 'Das sollten Sie besser mit Ihrem Hausarzt besprechen.', 'Diese Frage kann ich Ihnen heute ehrlich nicht beantworten. Was ich sagen kann, ist …', 'Darüber würde ich mir an Ihrer Stelle jetzt keine Gedanken machen.'], richtig: 2, hinweis: 'Ehrlich bleiben, ohne die Tür zuzuschlagen: sagen, was du nicht weißt, und sofort anschließen, was du weißt. Zahlen ohne Kontext, Weiterverweisen und Abwiegeln lassen den Patienten allein.' },
    { typ: 'type', frage: 'Formuliere behutsam mit Konjunktiv II: „Ich schlage vor, dass wir nächste Woche mit der Behandlung beginnen."', muster: 'Ich würde Ihnen vorschlagen, dass wir nächste Woche mit der Behandlung beginnen.', akzeptiert: ['ich würde', 'wäre es', 'könnten wir'], hinweis: 'Aus dem Vorschlag im Indikativ wird mit „würde" ein Angebot. Der Inhalt bleibt gleich, die Entscheidung geht zurück an den Patienten.' },
    { typ: 'mc', frage: 'Was ist der „Vorwarnschuss" vor der eigentlichen Nachricht?', optionen: ['Ein Satz wie „Ich habe leider keine gute Nachricht für Sie."', 'Die vollständige Diagnose mit allen Fachbegriffen.', 'Die Frage, ob der Patient jemanden anrufen möchte.'], richtig: 0, hinweis: 'Der Vorwarnschuss gibt dem Patienten zwei Sekunden, sich innerlich festzuhalten. Ohne ihn trifft die Nachricht ungebremst — mit ihm hört er den entscheidenden Satz wenigstens noch.' },
    { typ: 'type', frage: 'Die Tochter beginnt zu weinen. Formuliere einen Satz, mit dem du reagierst, ohne zu trösten.', muster: 'Ich sehe, dass Sie das sehr trifft. Nehmen Sie sich ruhig einen Moment.', akzeptiert: ['ich sehe', 'das tut mir leid', 'nehmen sie sich', 'lassen sie sich'], hinweis: 'Benenne, was du siehst, und gib Zeit. Trostformeln wie „Das wird schon" beenden das Gefühl, statt es zuzulassen — und beenden damit oft auch das Gespräch.' }
  ],
  zusammenfassung: {
    kernsaetze: [
      'Ist es Ihnen recht, wenn wir gleich darüber sprechen?',
      'Was vermuten Sie denn selbst?',
      'Ich habe leider keine gute Nachricht für Sie.',
      'Der Befund zeigt, dass es sich um einen bösartigen Tumor handelt.',
      'Ich lasse Ihnen einen Moment Zeit. — Was beschäftigt Sie jetzt am meisten?',
      'Wir gehen das Schritt für Schritt an. Wäre Ihnen Donnerstag recht?'
    ],
    merke: [
      'Sechs Etappen: <b>Rahmen → Vorwissen → Vorwarnschuss → Nachricht → Pause → Ausblick.</b> Die Pause ist keine Lücke, sie ist eine Etappe.',
      'Modalpartikeln sind <b>unbetont</b> und kommen <b>höchstens einmal pro Satz</b>: denn · ruhig · doch · mal · eben · wohl.',
      'Konjunktiv II für <b>Vorschläge und Fragen</b> — die <b>Diagnose selbst</b> steht im Indikativ, klar und in einem Satz.'
    ],
    tipp: 'Übe diese Woche genau eine Sache: die Pause. Sag einem Freund einen beliebigen ernsten Satz und schweig danach zehn Sekunden, ohne zu lächeln, ohne Papier zu sortieren, ohne „ähm". Es fühlt sich endlos an — für dein Gegenüber ist es genau richtig. Wer diese zehn Sekunden aushält, hat den schwersten Teil des Gesprächs gelernt.'
  },
  sprechen: {
    task: 'Überbringe laut eine schlechte Nachricht in allen sechs Etappen. Halte nach dem entscheidenden Satz wirklich zehn Sekunden Pause — nimm das Gespräch auf und prüfe hinterher, ob du die Stille ausgehalten hast.',
    tipps: ['Ist es Ihnen recht, wenn wir jetzt darüber sprechen?', 'Was vermuten Sie denn selbst?', 'Ich habe leider keine gute Nachricht für Sie.', 'Ich lasse Ihnen einen Moment Zeit.', 'Wir gehen das Schritt für Schritt an.']
  }
};
