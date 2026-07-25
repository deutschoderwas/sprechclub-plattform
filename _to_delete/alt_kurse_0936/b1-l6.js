// Alltagsdeutsch B1 – Lektion 6: Auf dem Amt
// deutschoderwas club · Kursmaterial
window.LEKTION = {
  meta: { kurs: 'Alltagsdeutsch B1', nr: 6, titel: 'Auf dem Amt', level: 'B1', bild: 'th-amt', dauer: 'ca. 20 Min' },
  intro: {
    text: 'Auf dem Amt wird anders gesprochen als im Treppenhaus: Dort heißt es nicht „Ich will Kindergeld", sondern „Ich möchte einen Antrag auf Kindergeld stellen". Heute lernst du diese festen Wendungen — und den Genitiv, der in jedem zweiten Formular steckt: die Kopie des Ausweises, wegen des Umzugs, die Bearbeitung des Antrags.',
    du_lernst: ['Anliegen auf dem Amt formulieren', 'Nomen-Verb-Verbindungen wie einen Antrag stellen', 'Genitiv bei Nomen und Präpositionen', 'Nach Unterlagen und Fristen fragen']
  },
  dialog: {
    bild: 'th-amt',
    situation: 'Nguyen ist wegen ihres Umzugs im Bürgeramt. Herr Schneider am Schalter 4 nimmt die Ummeldung auf — und sie hat noch eine zweite Sache.',
    lines: [
      { sp: 'Herr Schneider', txt: 'Nummer 212, bitte. Guten Tag, was kann ich für Sie tun?' },
      { sp: 'Nguyen', txt: 'Guten Tag. Ich bin umgezogen und möchte mich ummelden. Hier ist die Bestätigung des Vermieters.' },
      { sp: 'Herr Schneider', txt: 'Danke. Ihren Ausweis brauche ich auch. Wann war der Tag des Einzugs?' },
      { sp: 'Nguyen', txt: 'Am ersten März. Wegen des Umzugs war alles etwas chaotisch — ich hoffe, ich bin nicht zu spät dran.' },
      { sp: 'Herr Schneider', txt: 'Die Frist beträgt zwei Wochen, aber wegen der langen Wartezeiten drücken wir gerade ein Auge zu.' },
      { sp: 'Nguyen', txt: 'Da bin ich froh. Ich hätte noch eine Frage: Ich möchte außerdem einen Antrag auf Wohngeld stellen.' },
      { sp: 'Herr Schneider', txt: 'Das läuft nicht hier, dafür ist die Wohngeldstelle im zweiten Stock zuständig. Sie können online einen Termin vereinbaren.' },
      { sp: 'Nguyen', txt: 'Können Sie mir sagen, welche Unterlagen ich brauche und wie lange die Bearbeitung des Antrags dauert?' },
      { sp: 'Herr Schneider', txt: 'Mietvertrag, die letzten drei Gehaltsabrechnungen und eine Kopie des Personalausweises — trotz des Onlineantrags bringen Sie die Papiere bitte mit. Es dauert meist sechs bis acht Wochen, den Bescheid bekommen Sie dann schriftlich.' },
      { sp: 'Nguyen', txt: 'Alles klar. Dann vereinbare ich heute Abend einen Termin und bringe alles vollständig mit.' }
    ]
  },
  vokabeln: [
    { de: 'einen Antrag stellen', em: '📝', bsp: 'Ich möchte einen Antrag auf Wohngeld stellen.' },
    { de: 'einen Termin vereinbaren', em: '📅', bsp: 'Vereinbaren Sie online einen Termin.' },
    { de: 'eine Auskunft geben', em: 'ℹ️', bsp: 'Dazu kann ich Ihnen leider keine Auskunft geben.' },
    { de: 'Widerspruch einlegen', em: '⚖️', bsp: 'Gegen den Bescheid können Sie Widerspruch einlegen.' },
    { de: 'eine Bescheinigung ausstellen', em: '🧾', bsp: 'Können Sie mir eine Bescheinigung ausstellen?' },
    { de: 'sich ummelden', em: '🏠', bsp: 'Nach dem Umzug muss man sich ummelden.' },
    { de: 'die Bestätigung des Vermieters', em: '🔑', bsp: 'Ohne Bestätigung des Vermieters geht nichts.' },
    { de: 'der Bescheid', em: '✉️', bsp: 'Der Bescheid kommt schriftlich.' },
    { de: 'die Bearbeitung', em: '⏱️', bsp: 'Die Bearbeitung dauert sechs Wochen.' },
    { de: 'die Unterlagen', em: '📂', bsp: 'Bringen Sie alle Unterlagen mit.' },
    { de: 'die Gehaltsabrechnung', em: '💶', bsp: 'die letzten drei Gehaltsabrechnungen' },
    { de: 'der Mietvertrag', em: '📃', bsp: 'Der Mietvertrag muss unterschrieben sein.' },
    { de: 'zuständig sein', em: '🏛️', bsp: 'Dafür ist die Wohngeldstelle zuständig.' },
    { de: 'die Frist beträgt …', em: '⏳', bsp: 'Die Frist beträgt zwei Wochen.' },
    { de: 'schriftlich', em: '🖨️', bsp: 'Bitte reichen Sie das schriftlich ein.' },
    { de: 'ein Auge zudrücken', em: '😉', bsp: 'Diesmal drücken wir ein Auge zu.' }
  ],
  grammatik: {
    title: 'Grammatik im Kontext',
    blocks: [
      {
        h: 'Genitiv — wem gehört was, wovon reden wir',
        txt: 'Auf Formularen und in Bescheiden steht der Genitiv in fast jeder Zeile. Er beantwortet die Frage „wessen?" und hängt zwei Nomen aneinander:',
        table: [
          ['Geschlecht', 'Artikel im Genitiv', 'Beispiel aus dem Amt'],
          ['maskulin (der Antrag)', 'des …-s / -es', 'die Bearbeitung des Antrags'],
          ['neutrum (das Kind)', 'des …-s / -es', 'der Name des Kindes'],
          ['feminin (die Wohnung)', 'der', 'die Adresse der Wohnung'],
          ['Plural (die Unterlagen)', 'der', 'die Prüfung der Unterlagen'],
          ['nach Präposition', 'wegen / trotz / während + Genitiv', 'wegen des Umzugs, trotz des Termins']
        ],
        note: 'Nur maskulin und neutrum bekommen ein <b>-s</b> am Nomen (des Antrag<b>s</b>), bei kurzen Wörtern oft <b>-es</b> (des Kind<b>es</b>). Feminin und Plural nehmen nur den Artikel <b>der</b> — das Nomen bleibt unverändert.'
      },
      {
        h: 'Nomen-Verb-Verbindungen — die Sprache der Behörde',
        txt: 'Ämter benutzen feste Paare aus Nomen und Verb. Lern sie als ganzen Block, nicht Wort für Wort — falsche Verben fallen sofort auf:',
        table: [
          ['Nomen-Verb-Verbindung', 'Bedeutung einfach gesagt'],
          ['einen Antrag stellen', 'etwas beantragen'],
          ['einen Termin vereinbaren', 'einen Termin ausmachen'],
          ['eine Auskunft geben', 'informieren'],
          ['eine Bescheinigung ausstellen', 'ein Papier ausdrucken und stempeln'],
          ['Widerspruch einlegen', 'gegen eine Entscheidung protestieren'],
          ['eine Entscheidung treffen', 'entscheiden']
        ],
        note: 'Man <b>stellt</b> einen Antrag (nicht: machen), man <b>legt</b> Widerspruch <b>ein</b> (nicht: geben), man <b>vereinbart</b> einen Termin (nicht: nehmen). Und beachte: Antrag <b>auf</b> + Akkusativ — ein Antrag <b>auf</b> Wohngeld.'
      }
    ]
  },
  uebungen: [
    { typ: 'listen', audio: 'Ich möchte einen Antrag auf Wohngeld stellen.', frage: 'Hör zu: Was will die Person?', optionen: ['Wohngeld beantragen', 'Wohngeld abholen', 'sich ummelden'], richtig: 0 },
    { typ: 'mc', frage: 'Welches Verb passt zu „Antrag"?', optionen: ['stellen', 'machen', 'geben'], richtig: 0, hinweis: 'Nomen-Verb-Verbindungen sind feste Paare — man stellt einen Antrag, immer.' },
    { typ: 'mc', frage: 'Wie lange dauert die Bearbeitung ___ Antrags?', optionen: ['des', 'der', 'dem'], richtig: 0, hinweis: 'der Antrag ist maskulin, im Genitiv also des Antrags mit -s am Nomen.' },
    { typ: 'mc', frage: '___ des Umzugs muss ich mich neu anmelden.', optionen: ['Wegen', 'Weil', 'Denn'], richtig: 0, hinweis: 'wegen ist eine Präposition mit Genitiv, weil und denn leiten dagegen einen Satz mit Verb ein.' },
    { typ: 'gapbank', frage: 'Setz Genitiv und Nomen-Verb-Verbindung ein.', text: 'Ich möchte einen Antrag auf Kindergeld ___. Bringen Sie bitte eine Kopie ___ Personalausweises mit. ___ des Umzugs brauche ich eine neue Bescheinigung.', bank: ['stellen', 'des', 'Wegen', 'der', 'machen'], loesung: ['stellen', 'des', 'Wegen'], hinweis: 'Antrag geht nur mit stellen. Maskulines Nomen im Genitiv bekommt des + -s. wegen verlangt den Genitiv.' },
    { typ: 'order', frage: 'Bau dein Anliegen am Schalter!', woerter: ['Ich', 'möchte', 'einen', 'Antrag', 'auf', 'Wohngeld', 'stellen'], loesung: 'Ich möchte einen Antrag auf Wohngeld stellen', hinweis: 'Das Modalverb steht auf Position 2, der Infinitiv der festen Wendung ganz am Ende.' },
    { typ: 'order', frage: 'Bau den Satz mit Genitiv!', woerter: ['Wegen', 'des', 'Umzugs', 'brauche', 'ich', 'eine', 'Bescheinigung'], loesung: 'Wegen des Umzugs brauche ich eine Bescheinigung', hinweis: 'Steht die Präposition mit Genitiv vorn, folgt danach sofort das Verb.' },
    { typ: 'match', frage: 'Welches Verb gehört zu welchem Nomen?', paare: [['einen Antrag …', '📝 stellen'], ['einen Termin …', '📅 vereinbaren'], ['eine Auskunft …', 'ℹ️ geben'], ['Widerspruch …', '⚖️ einlegen'], ['eine Bescheinigung …', '🧾 ausstellen']] },
    { typ: 'bild', bild: 'th-amt', frage: 'Du bist am Schalter dran. Wie eröffnest du dein Anliegen am besten?', optionen: ['Guten Tag, ich bin umgezogen und möchte mich ummelden.', 'Ich brauche jetzt sofort ein Papier.', 'Wo ist hier das richtige Zimmer?', 'Ich habe schon zwei Stunden gewartet.'], richtig: 0, hinweis: 'Erst grüßen, dann in einem Satz sagen, worum es geht. Der Rest ergibt sich aus den Rückfragen.' },
    { typ: 'type', frage: 'Frag am Schalter nach den nötigen Unterlagen — höflich und mit indirekter Frage.', muster: 'Könnten Sie mir sagen, welche Unterlagen ich für den Antrag brauche?', akzeptiert: ['könnten sie', 'können sie', 'würden sie', 'ich hätte'], hinweis: 'Kombiniere die Höflichkeitsform aus Lektion 1 mit der indirekten Frage aus Lektion 5.' }
  ],
  zusammenfassung: {
    kernsaetze: [
      'Guten Tag, ich bin umgezogen und möchte mich ummelden.',
      'Ich möchte einen Antrag auf Wohngeld stellen.',
      'Könnten Sie mir sagen, welche Unterlagen ich brauche?',
      'Wie lange dauert die Bearbeitung des Antrags?',
      'Gegen den Bescheid kann ich Widerspruch einlegen.'
    ],
    merke: [
      'Genitiv: maskulin und neutrum <b>des …-s/-es</b>, feminin und Plural <b>der</b> — nur der Artikel verrät den Fall.',
      'Die Präpositionen <b>wegen, trotz, während</b> stehen mit <b>Genitiv</b>: wegen <b>des</b> Umzugs, trotz <b>der</b> Frist.',
      'Nomen-Verb-Verbindungen sind feste Paare: einen Antrag <b>stellen</b>, einen Termin <b>vereinbaren</b>, Widerspruch <b>einlegen</b>.'
    ],
    tipp: 'Nimm den nächsten Brief, den du von einer Behörde bekommst, und markiere jeden Genitiv darin. Danach schreib in eigenen Worten in zwei Sätzen auf, was das Amt eigentlich von dir will — das ist die beste Übung, die es gibt.'
  },
  sprechen: {
    task: 'Spiel den Gang zum Amt durch: Begrüßung, dein Anliegen in einem Satz, eine Frage nach den Unterlagen und eine Frage nach der Dauer. Nutze mindestens eine Nomen-Verb-Verbindung und einen Genitiv.',
    tipps: ['Guten Tag, ich möchte … stellen.', 'Können Sie mir sagen, welche Unterlagen ich brauche?', 'Wie lange dauert die Bearbeitung des Antrags?', 'Wo kann ich einen Termin vereinbaren?']
  }
};
