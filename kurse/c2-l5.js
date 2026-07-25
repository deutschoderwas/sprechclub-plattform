// Alltagsdeutsch C2 – Lektion 5: Ironie und Zwischentöne
// deutschoderwas club · Kursmaterial
window.LEKTION = {
  meta: { kurs: 'Alltagsdeutsch C2', nr: 5, titel: 'Ironie und Zwischentöne', level: 'C2', bild: 'th-ironie', dauer: 'ca. 25 Min' },
  intro: {
    text: 'Der gefährlichste Satz im Deutschen ist nicht der, den du nicht verstehst — sondern der, den du zu schnell verstehst. „Interessanter Ansatz" kann Lob sein oder ein Urteil mit Anlauf. Ironie steckt nie im Wort, sie steckt im Abstand zwischen Wort und Lage. Nach dieser Lektion hörst du diesen Abstand, du kannst selbst untertreiben und übertreiben — und du weißt, wann du besser einmal nachfragst.',
    du_lernst: ['Fünf Signale, an denen du Ironie erkennst', 'Untertreibung: die Litotes und ihre kühle Wirkung', 'Übertreibung: die Hyperbel und ihr Augenzwinkern', 'Freundlich nachfragen, statt Ironie mit Ironie zu beantworten']
  },
  dialog: {
    bild: 'th-ironie',
    situation: 'Mehmet hat seine erste Projektpräsentation hinter sich. Auf dem Flur fragt er seine Kollegin Sofia, wie das Lob der Abteilungsleiterin gemeint war.',
    lines: [
      { sp: 'Mehmet', txt: 'Sag mir bitte ehrlich: „Das war ja mal ein interessanter Ansatz" — ist das gut oder schlecht?' },
      { sp: 'Sofia', txt: 'Kommt darauf an, wie sie es gesagt hat. Schnell und warm, oder langsam mit einer Pause vor „interessant"?' },
      { sp: 'Mehmet', txt: 'Langsam. Und sie hat dabei auf ihre Unterlagen geschaut, nicht auf mich.' },
      { sp: 'Sofia', txt: 'Dann war es kein Lob. „Interessant" mit Pause heißt: Ich habe Einwände und spare sie mir für später.' },
      { sp: 'Mehmet', txt: 'Woran hätte ich das merken sollen? Der Satz ist doch positiv.' },
      { sp: 'Sofia', txt: 'Der Satz schon. Nur passt er nicht zur Lage, und genau dort entsteht Ironie. Wenn draußen der Sturm die Mülltonnen umwirft und jemand sagt „Herrliches Wetter", dann widerspricht die Welt dem Satz, nicht die Grammatik.' },
      { sp: 'Mehmet', txt: 'Und wenn ich die Lage nicht gut genug kenne, um den Abstand zu sehen?' },
      { sp: 'Sofia', txt: 'Dann achte auf die Signale. Ein gedehntes Wort. Ein zu großes Wort für eine kleine Sache. Oder das Gegenteil: Jemand macht etwas Riesiges winzig. Letzte Woche hieß es „Wir haben da eine Kleinigkeit gefunden" — gemeint war ein Rechenfehler von sechs Millionen.' },
      { sp: 'Mehmet', txt: 'Also entweder zwei Nummern zu groß oder zwei Nummern zu klein. Passend ist es nie.' },
      { sp: 'Sofia', txt: 'Genau. Und wenn du unsicher bist, frag freundlich nach: „Ist das jetzt ein Lob oder eine Warnung?" Damit blamierst du dich nie. Peinlich wird es nur, wenn du Ironie mit Ironie beantwortest, ohne sie erkannt zu haben.' }
    ]
  },
  vokabeln: [
    { de: 'die Ironie', em: '🎭', bsp: 'Man sagt das eine und meint das Gegenteil.' },
    { de: 'der Zwischenton', em: '🎚️', bsp: 'Der Zwischenton entscheidet, nicht das Wort.' },
    { de: 'mitschwingen', em: '〰️', bsp: 'In dem Lob schwingt eine Warnung mit.' },
    { de: 'der Seitenhieb', em: '🗡️', bsp: 'ein kleiner Angriff, versteckt im Nebensatz' },
    { de: 'die Anspielung', em: '👀', bsp: 'Das war eine Anspielung auf die letzte Sitzung.' },
    { de: 'das Augenzwinkern', em: '😉', bsp: 'Das Signal, dass ein Satz nicht wörtlich gilt.' },
    { de: 'die Untertreibung', em: '🤏', bsp: '„Eine Kleinigkeit" — bei sechs Millionen Fehlbetrag.' },
    { de: 'die Litotes', em: '➖', bsp: '„nicht ganz unbegabt" heißt: ziemlich gut' },
    { de: 'die Übertreibung', em: '🎈', bsp: '„Ich habe es dir tausendmal gesagt."' },
    { de: 'die Hyperbel', em: '📈', bsp: 'die Übertreibung als bewusstes Stilmittel' },
    { de: 'gedehnt', em: '🐌', bsp: 'Ein gedehntes „ja klar" ist selten Zustimmung.' },
    { de: 'beiläufig', em: '🍃', bsp: 'Er sagte es beiläufig — und traf genau.' },
    { de: 'etwas kleinreden', em: '🔽', bsp: 'Sie redet ihren eigenen Anteil klein.' },
    { de: 'etwas aufbauschen', em: '🫧', bsp: 'Er bauscht jede Kleinigkeit zum Skandal auf.' },
    { de: 'doppeldeutig', em: '🌗', bsp: 'Die Bemerkung war doppeldeutig, absichtlich.' },
    { de: 'nicht ganz ohne', em: '😬', bsp: '„Die Prüfung war nicht ganz ohne." = ziemlich hart' },
    { de: 'sich vertun', em: '🙃', bsp: 'Ich habe mich vertan und habe es ernst genommen.' },
    { de: 'Na super.', em: '🙄', bsp: 'heißt fast immer: gar nicht super' }
  ],
  grammatik: {
    title: 'Grammatik im Kontext',
    blocks: [
      {
        h: 'Fünf Signale, an denen du Ironie erkennst',
        txt: 'Kein einziges Wort ist an sich ironisch. Ironisch wird ein Satz erst durch den Abstand zu der Lage, in der er fällt. Diese fünf Abstände hörst du im deutschen Alltag am häufigsten:',
        table: [
          ['Signal', 'So klingt es', 'Gemeint ist'],
          ['Widerspruch zur Lage', 'Bei Sturm: „Herrliches Wetter heute."', 'genau das Gegenteil'],
          ['Gedehnte Betonung', '„Das war ja mal ein … interessanter Ansatz."', 'Einwände, die hier nicht ausgesprochen werden'],
          ['Zu großes Wort, kleine Sache', '„Ein Meisterwerk." — über eine Tabelle', 'freundlicher Spott'],
          ['Zu kleines Wort, große Sache', '„Da ist uns eine Kleinigkeit aufgefallen."', 'Alarm, höflich verpackt'],
          ['Übertriebene Höflichkeit', '„Danke für die überaus zügige Antwort."', 'Vorwurf: Es hat viel zu lange gedauert']
        ],
        note: 'Merk dir die Prüffrage: <b>Passt die Größe des Wortes zur Größe der Sache?</b> Wenn nicht, ist etwas anderes gemeint. Und beachte den Kanal: Beim Sprechen trägt die Betonung die halbe Bedeutung, <b>im Geschriebenen fehlt sie ersatzlos</b>. Deshalb ist Ironie in E-Mails die häufigste Quelle für Streit, der nie gemeint war.'
      },
      {
        h: 'Untertreibung und Übertreibung — zwei Richtungen, ein Ziel',
        txt: 'Beide Mittel arbeiten mit demselben Abstand, nur in entgegengesetzte Richtung. Wer untertreibt, klingt kühl und souverän. Wer übertreibt, klingt warm und wird selten wörtlich genommen.',
        table: [
          ['Mittel', 'So gebaut', 'Beispiel', 'Gemeint ist'],
          ['Litotes', 'nicht + Gegenteil', 'Das war nicht gerade billig.', 'Das war sehr teuer.'],
          ['Litotes', 'nicht un-', 'Sie ist nicht unbegabt.', 'Sie ist ziemlich gut.'],
          ['Litotes', 'nicht ohne', 'Die Prüfung war nicht ohne.', 'Die Prüfung war hart.'],
          ['Untertreibung', 'kleines Wort für Großes', 'ein kleiner Rechenfehler von sechs Millionen', 'ein schwerer Fehler, ruhig gesagt'],
          ['Hyperbel', 'Zahl ins Unmögliche', 'Ich habe es dir tausendmal gesagt.', 'oft — mit Vorwurf'],
          ['Hyperbel', 'Superlativ ohne Deckung', 'Das ist die beste Idee des Jahrhunderts.', 'freundlicher Spott oder echte Begeisterung']
        ],
        note: 'Die Wirkung ist nicht symmetrisch. <b>Litotes wirkt gehoben, kontrolliert und im Zweifel scharf</b> — sie eignet sich für Kritik, die sitzen soll, ohne laut zu werden. <b>Hyperbel wirkt umgangssprachlich und warm</b>, taugt aber nicht für Zahlen, Termine und alles, was jemand später nachprüft. Und Vorsicht bei der doppelten Verneinung: „nicht unwahrscheinlich" ist schwächer als „wahrscheinlich", nicht stärker.'
      }
    ]
  },
  uebungen: [
    { typ: 'listen', audio: 'Vielen Dank für die überaus zügige Rückmeldung.', frage: 'Hör zu: Die Antwort kam nach drei Wochen. Was ist gemeint?', optionen: ['Ein Vorwurf — die Rückmeldung hat viel zu lange gedauert.', 'Ein echtes Kompliment für schnelles Arbeiten.', 'Eine neutrale Bestätigung, dass die Mail angekommen ist.'], richtig: 0 },
    { typ: 'mc', frage: 'Deine Kollegin sagt über eine Klausur: „Die war nicht ohne." Was meint sie?', optionen: ['Die Klausur war ziemlich schwer.', 'Die Klausur war leichter als erwartet.', 'Die Klausur ist ausgefallen.'], richtig: 0, hinweis: 'Bei der Litotes verneinst du das Gegenteil und meinst damit eine kräftige Aussage. „Nicht ohne" ist eine feste Kurzform für „nicht ohne Schwierigkeit" — verneint wird die Harmlosigkeit, nicht die Sache.' },
    { typ: 'mc', frage: 'Welcher Satz ist eine Untertreibung und keine echte Beruhigung?', optionen: ['Wir haben da eine Kleinigkeit gefunden — sechs Millionen fehlen in der Bilanz.', 'Wir haben einen Tippfehler in der Überschrift gefunden.', 'Wir haben in der Bilanz einen schweren Fehler gefunden.'], richtig: 0, hinweis: 'Eine Untertreibung erkennst du am Missverhältnis zwischen Wort und Sache. Passt beides zusammen, ist es schlicht eine Beschreibung — auch wenn sie unangenehm klingt.' },
    { typ: 'match', frage: 'Was ist wirklich gemeint?', paare: [['Das war nicht gerade billig.', '💸 Das war sehr teuer.'], ['Sie ist nicht unbegabt.', '👏 Sie kann eine Menge.'], ['Ein wirklich … interessanter Ansatz.', '🤨 Ich habe Einwände.'], ['Ich habe es dir tausendmal gesagt.', '🔁 Ich habe es oft gesagt, und ich bin genervt.'], ['Na super.', '🙄 Gar nicht super.']] },
    { typ: 'gapbank', frage: 'Benenne die Mittel. Setz die passenden Begriffe ein.', text: 'Wer sagt „Das war nicht gerade billig", benutzt eine ___. Wer bei sechs Millionen von einem ___ Fehler spricht, untertreibt bewusst. Und wer etwas „tausendmal" gesagt hat, greift zur ___.', bank: ['Litotes', 'kleinen', 'Hyperbel', 'Anspielung', 'gedehnten'], loesung: ['Litotes', 'kleinen', 'Hyperbel'], hinweis: 'Beide Mittel arbeiten mit dem Abstand zur Wirklichkeit: Die Litotes verkleinert über eine Verneinung, die Hyperbel vergrößert ins Unmögliche. Erkennbar sind sie nur, wenn du die Lage kennst.' },
    { typ: 'order', frage: 'Bau die freundliche Nachfrage!', woerter: ['Lob', 'Ist', 'das', 'jetzt', 'ein', 'oder', 'eine', 'Warnung'], loesung: 'Ist das jetzt ein Lob oder eine Warnung', hinweis: 'In der Entscheidungsfrage steht das finite Verb auf Position eins. Die Partikel „jetzt" macht aus der Nachfrage keinen Vorwurf, sondern ein echtes Klärungsangebot.' },
    { typ: 'order', frage: 'Bau die Regel, warum Ironie entsteht!', woerter: ['steckt', 'Die', 'Ironie', 'nicht', 'Wort', 'im', 'sondern', 'in', 'der', 'Lage'], loesung: 'Die Ironie steckt nicht im Wort sondern in der Lage', hinweis: 'Bei „nicht A, sondern B" wird das Gegenstück parallel gebaut: Beide Teile brauchen dieselbe Form, hier zweimal eine Präpositionalgruppe im Dativ.' },
    { typ: 'bild', bild: 'th-ironie', frage: 'Ein Kunde antwortet seit drei Wochen nicht. Welche Formulierung riskiert in einer Mail einen echten Streit?', optionen: ['„Vielen Dank für die überaus zügige Rückmeldung."', '„Ich hake noch einmal nach, weil ich bis Freitag eine Antwort brauche."', '„Darf ich Sie an meine Anfrage vom dritten erinnern?"', '„Falls die Anfrage untergegangen ist, hänge ich sie noch einmal an."'], richtig: 0, hinweis: 'Schriftlich fehlt die Betonung, die Ironie im Gespräch als Ironie kennzeichnet. Ohne dieses Signal bleibt nur der Wortlaut — und der liest sich hier als offener Spott, den niemand mehr entschärfen kann.' },
    { typ: 'type', frage: 'Sag mit einer Litotes, dass ein Restaurant sehr teuer war.', muster: 'Billig war das nicht gerade.', akzeptiert: ['nicht gerade billig', 'nicht billig', 'nicht ganz billig', 'billig war das nicht', 'nicht ohne'], hinweis: 'Die Litotes verneint das Gegenteil dessen, was du meinst. Ein „gerade" oder „ganz" davor macht die Untertreibung hörbar — ohne diesen Zusatz klingt der Satz schnell wie eine schlichte Verneinung.' },
    { typ: 'type', frage: 'Deine Chefin sagt mit langer Pause: „Ein wirklich … interessanter Ansatz." Frag freundlich nach, wie sie es meint.', muster: 'Darf ich kurz nachfragen: Ist das ein Lob oder eher eine Warnung?', akzeptiert: ['lob oder', 'wie meinen sie das', 'wie meinst du das', 'darf ich nachfragen', 'darf ich kurz nachfragen', 'ernst gemeint'], hinweis: 'Nachfragen ist auf C2 kein Zeichen von Schwäche, sondern die einzige sichere Reaktion auf Doppeldeutigkeit. Wichtig ist der freundliche Rahmen — die Frage darf nicht klingen, als würdest du selbst zurückstechen.' }
  ],
  zusammenfassung: {
    kernsaetze: [
      'Ist das jetzt ein Lob oder eine Warnung?',
      'Das war nicht gerade billig.',
      'Die Prüfung war nicht ohne.',
      'Wir haben da eine Kleinigkeit gefunden.',
      'Ein wirklich interessanter Ansatz.'
    ],
    merke: [
      'Ironie steckt nie im Wort, sondern im <b>Abstand zwischen Wort und Lage</b>. Prüffrage: Passt die Größe des Wortes zur Größe der Sache?',
      '<b>Litotes</b> verneint das Gegenteil und wirkt kühl und gehoben: „nicht unbegabt", „nicht ohne", „nicht gerade billig".',
      '<b>Im Geschriebenen fehlt die Betonung.</b> Was gesprochen als Augenzwinkern ankommt, liest sich in der Mail als Spott — dort lieber wörtlich schreiben.'
    ],
    tipp: 'Sammle diese Woche fünf Sätze, bei denen du nicht sicher warst, ob sie ernst gemeint waren, und schreib jeweils dazu, welches Signal dich stutzig gemacht hat: die Pause, das zu große Wort oder der Widerspruch zur Lage. Nach fünf Notizen erkennst du das Muster schneller, und du wirst merken: Fast immer war es die Pause.'
  },
  sprechen: {
    task: 'Erzähl zwei Minuten lang von etwas, das richtig schiefgelaufen ist — aber untertreibe konsequent. Sag statt „Katastrophe" lieber „nicht ganz optimal", statt „völlig überteuert" lieber „nicht gerade günstig". Nimm es auf und hör dir an, ob du dabei souverän oder unehrlich klingst. Der Unterschied liegt allein im Tempo.',
    tipps: ['Das war nicht gerade optimal.', 'Es gab da eine Kleinigkeit.', 'Ich sage mal so: Es war nicht ohne.', 'Ist das jetzt ein Lob oder eine Warnung?']
  }
};
