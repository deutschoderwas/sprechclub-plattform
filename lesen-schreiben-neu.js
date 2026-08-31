/* ============================================================
   lesen-schreiben-neu.js — Lesen und Schreiben im Übungsbereich

   Bis jetzt konnte man auf der Plattform hören, sprechen, Wörter
   anklicken und Sätze bauen. Lesen und Schreiben kamen im Üben
   überhaupt nicht vor — die beiden Fertigkeiten, die in jeder
   Prüfung die Hälfte der Punkte ausmachen.

   Diese Datei hängt sich additiv an window.UEBUNGEN an, genau wie
   grammatik-neu.js und aussprache-neu.js.
   ============================================================ */
(function () {
  if (!window.UEBUNGEN || !window.UEBUNGEN.skills) return;

  var THEMEN = [
    {
      id: 'lesen-alltag-b1',
      title: 'Lesen: Nachrichten aus dem Alltag',
      level: 'B1',
      emoji: '📖',
      words: [
        { de: 'die Nachricht', info: 'eine kurze Mitteilung an jemanden', emoji: '💬' },
        { de: 'der Aushang', info: 'ein Zettel, der öffentlich hängt', emoji: '📋' },
        { de: 'die Frist', info: 'der letzte Termin, bis zu dem etwas gehen muss', emoji: '⏳' },
        { de: 'Bescheid geben', info: 'jemandem sagen, wie es aussieht', emoji: '📣' }
      ],
      exercises: [
        {
          type: 'lesen',
          text: 'Hallo Sabine,\n\nich schaffe es morgen leider doch nicht um sechs. Bei uns dauert die Besprechung länger, und danach muss ich noch schnell zur Post, sonst geht das Paket diese Woche nicht mehr raus.\n\nGeht auch halb acht? Dann hätte ich es entspannt. Falls das zu spät ist, verschieben wir einfach auf Samstag — mir ist beides recht.\n\nSag kurz Bescheid.\nLiebe Grüße, Nadia',
          q: 'Warum kann Nadia nicht um sechs?',
          options: ['Die Besprechung dauert länger und sie muss noch zur Post.', 'Sie hat keine Lust mehr.', 'Sie ist krank geworden.', 'Sie hat den Termin vergessen.'],
          answer: 0,
          explain: 'Beides steht im ersten Absatz: die Besprechung dauert länger, und danach kommt noch die Post.'
        },
        {
          type: 'lesen',
          text: 'Hallo Sabine,\n\nich schaffe es morgen leider doch nicht um sechs. Bei uns dauert die Besprechung länger, und danach muss ich noch schnell zur Post, sonst geht das Paket diese Woche nicht mehr raus.\n\nGeht auch halb acht? Dann hätte ich es entspannt. Falls das zu spät ist, verschieben wir einfach auf Samstag — mir ist beides recht.\n\nSag kurz Bescheid.\nLiebe Grüße, Nadia',
          q: 'Was schlägt Nadia vor?',
          options: ['Halb acht — oder sonst Samstag.', 'Nur Samstag.', 'Sie sagt den Termin ganz ab.', 'Sie kommt eine Stunde früher.'],
          answer: 0,
          explain: 'Sie nennt zwei Möglichkeiten und sagt, dass ihr beides recht ist.'
        },
        {
          type: 'lesen',
          text: 'Liebe Hausbewohnerinnen und Hausbewohner,\n\nam Dienstag, dem 14., wird im ganzen Haus die Heizung gewartet. Die Technikerin muss dafür in jede Wohnung. Wir bitten Sie, zwischen 8 und 16 Uhr jemanden zu Hause zu haben.\n\nWer an diesem Tag nicht da sein kann, gibt bitte bis Freitag im Büro Bescheid. Dann vereinbaren wir einen zweiten Termin.\n\nIhre Hausverwaltung',
          q: 'Was soll man tun, wenn man am Dienstag arbeiten muss?',
          options: ['Bis Freitag im Büro Bescheid geben.', 'Nichts, die Technikerin kommt trotzdem.', 'Am Dienstag früher nach Hause gehen.', 'Einen Schlüssel bei den Nachbarn abgeben.'],
          answer: 0,
          explain: 'Der letzte Absatz nennt die Frist: bis Freitag Bescheid geben, dann gibt es einen zweiten Termin.'
        },
        {
          type: 'lesen',
          text: 'Liebe Hausbewohnerinnen und Hausbewohner,\n\nam Dienstag, dem 14., wird im ganzen Haus die Heizung gewartet. Die Technikerin muss dafür in jede Wohnung. Wir bitten Sie, zwischen 8 und 16 Uhr jemanden zu Hause zu haben.\n\nWer an diesem Tag nicht da sein kann, gibt bitte bis Freitag im Büro Bescheid. Dann vereinbaren wir einen zweiten Termin.\n\nIhre Hausverwaltung',
          q: 'In welchem Zeitraum kommt die Technikerin?',
          options: ['Zwischen 8 und 16 Uhr.', 'Genau um 8 Uhr.', 'Am Nachmittag.', 'Das steht nicht im Text.'],
          answer: 0,
          explain: 'Der Aushang nennt eine Spanne, keine feste Uhrzeit — deshalb soll den ganzen Tag jemand da sein.'
        },
        {
          type: 'lesen',
          text: 'Sehr geehrte Frau Ilić,\n\nvielen Dank für Ihre Bewerbung als Pflegefachkraft. Ihre Unterlagen haben uns überzeugt, und wir würden Sie gern kennenlernen.\n\nPasst Ihnen Donnerstag, der 9., um 10 Uhr? Das Gespräch dauert etwa eine Stunde und findet in unserem Haus in der Lindenstraße statt. Bringen Sie bitte Ihre Zeugnisse im Original mit.\n\nFalls der Termin nicht passt, rufen Sie uns einfach an.\n\nMit freundlichen Grüßen\nT. Brandner',
          q: 'Was muss Frau Ilić zum Gespräch mitbringen?',
          options: ['Ihre Zeugnisse im Original.', 'Nur einen Ausweis.', 'Kopien ihrer Bewerbung.', 'Nichts.'],
          answer: 0,
          explain: 'Im Original heißt: nicht als Kopie, sondern die echten Dokumente.'
        },
        {
          type: 'lesen',
          text: 'Sehr geehrte Frau Ilić,\n\nvielen Dank für Ihre Bewerbung als Pflegefachkraft. Ihre Unterlagen haben uns überzeugt, und wir würden Sie gern kennenlernen.\n\nPasst Ihnen Donnerstag, der 9., um 10 Uhr? Das Gespräch dauert etwa eine Stunde und findet in unserem Haus in der Lindenstraße statt. Bringen Sie bitte Ihre Zeugnisse im Original mit.\n\nFalls der Termin nicht passt, rufen Sie uns einfach an.\n\nMit freundlichen Grüßen\nT. Brandner',
          q: 'Wie ist der Stand der Bewerbung?',
          options: ['Sie ist eine Runde weiter und wird zum Gespräch eingeladen.', 'Sie wurde abgelehnt.', 'Sie hat die Stelle schon bekommen.', 'Es fehlen noch Unterlagen.'],
          answer: 0,
          explain: 'Die Unterlagen haben überzeugt, jetzt folgt das persönliche Gespräch — die Zusage ist das noch nicht.'
        },

        { type: 'schreiben',
          auftrag: 'Antworte Nadia in zwei bis drei Sätzen: Halb acht passt dir nicht, Samstag aber schon. Schlag eine Uhrzeit vor.',
          muster: 'Hallo Nadia, halb acht wird bei mir leider knapp, da bin ich noch unterwegs. Samstag passt mir aber gut — wie wäre es um elf? Sag Bescheid, dann plane ich den Vormittag frei.',
          tipp: 'Absagen klingen freundlicher, wenn gleich ein neuer Vorschlag folgt.' },
        { type: 'schreiben',
          auftrag: 'Du kannst am Dienstag nicht zu Hause sein. Schreib drei Sätze an die Hausverwaltung und bitte um einen zweiten Termin.',
          muster: 'Sehr geehrte Damen und Herren, am Dienstag, dem 14., bin ich leider den ganzen Tag auf der Arbeit und kann niemanden in die Wohnung lassen. Könnten wir einen zweiten Termin vereinbaren? Mir würde jeder Nachmittag ab 16 Uhr passen.',
          tipp: 'Im Brief an eine Verwaltung: Anrede, Grund, Bitte — in dieser Reihenfolge.' },
        { type: 'schreiben',
          auftrag: 'Frau Ilić kann am Donnerstag nicht. Schreib ihre Antwort in drei bis vier Sätzen: bedanken, absagen, neuen Termin vorschlagen.',
          muster: 'Sehr geehrter Herr Brandner, vielen Dank für die Einladung, ich freue mich sehr über Ihr Interesse. Leider habe ich am Donnerstag bis 14 Uhr Dienst und schaffe es nicht um 10 Uhr. Wäre ein Termin am Freitag oder am Donnerstagnachmittag möglich? Über eine kurze Rückmeldung würde ich mich freuen.',
          tipp: 'Erst danken, dann absagen, dann eine Lösung anbieten — so bleibt die Absage positiv.' },

        { type: 'fehler', satz: 'Ich gebe Ihnen bis Freitag bescheid.', falsch: 'bescheid',
          richtig: 'Ich gebe Ihnen bis Freitag Bescheid.',
          explain: 'Bescheid ist ein Nomen und wird großgeschrieben, auch in der Verbindung Bescheid geben.' },
        { type: 'fehler', satz: 'Ich freue mich über Ihre Einladung zum Gespräch am Donnerstag.', falsch: 'über',
          richtig: 'Ich freue mich auf das Gespräch am Donnerstag.',
          explain: 'sich freuen über heißt: es ist schon passiert. Für etwas, das noch kommt, steht auf.' },
        { type: 'fehler', satz: 'Falls der Termin nicht passt, rufen Sie uns bitte anrufen.', falsch: 'anrufen',
          richtig: 'Falls der Termin nicht passt, rufen Sie uns bitte an.',
          explain: 'Das Verb steht schon konjugiert am Satzanfang. Am Ende gehört nur das Präfix an.' },

        { type: 'gap', text: 'Ich gebe Ihnen bis Freitag ___.', answer: 'Bescheid', alts: ['bescheid'],
          hint: 'Nomen, wird großgeschrieben', explain: 'Bescheid geben heißt: jemandem sagen, wie es aussieht.' },
        { type: 'gap', text: 'Die ___ läuft am Freitag ab — danach geht es nicht mehr.', answer: 'Frist', alts: ['frist'],
          hint: 'der letzte mögliche Termin', explain: 'Die Frist ist der Zeitpunkt, bis zu dem etwas erledigt sein muss.' },
        { type: 'choice', q: 'Was bedeutet „Zeugnisse im Original mitbringen“?',
          options: ['Die echten Dokumente, keine Kopien.', 'Nur Kopien.', 'Eine Übersetzung.', 'Eine Liste der Zeugnisse.'],
          answer: 0, explain: 'Im Original heißt immer: das echte Papier, nicht die Kopie.' },
        { type: 'choice', q: 'Ein Aushang im Hausflur richtet sich an …',
          options: ['alle Bewohnerinnen und Bewohner des Hauses.', 'nur an die Hausverwaltung.', 'nur an eine Person.', 'an Besucher von außen.'],
          answer: 0, explain: 'Ein Aushang hängt öffentlich und gilt für alle im Haus.' }
      ]
    }
  ];

  /* An den passenden Bereich anhängen: Lesen und Schreiben gehören
     zum Wortschatz-Bereich, wenn es keinen eigenen gibt. */
  var ziel = null;
  (window.UEBUNGEN.skills || []).forEach(function (s) {
    if (!ziel && (s.id === 'lesen' || s.id === 'lesen-schreiben')) ziel = s;
  });
  if (!ziel) {
    ziel = { id: 'lesen-schreiben', name: 'Lesen & Schreiben', emoji: '📖', color: '#7C3AED', themes: [] };
    window.UEBUNGEN.skills.push(ziel);
  }
  ziel.themes = (ziel.themes || []).concat(THEMEN);
})();
