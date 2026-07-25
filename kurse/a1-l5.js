// Alltagsdeutsch A1 – Lektion 5: Mein Tag und die Uhrzeit
// deutschoderwas club · Kursmaterial
window.LEKTION = {
  meta: { kurs: 'Alltagsdeutsch A1', nr: 5, titel: 'Mein Tag und die Uhrzeit', level: 'A1', bild: 'th-tag', dauer: 'ca. 15 Min' },
  intro: {
    text: 'Wann stehst du auf? Wann fängt dein Kurs an? Heute erzählst du deinen Tag auf Deutsch. Du lernst Verben, die sich im Satz teilen. Und du lernst: „halb sechs" ist 5:30 Uhr.',
    du_lernst: ['Den Tagesablauf erzählen', 'Trennbare Verben: aufstehen, anfangen', 'Uhrzeit offiziell und umgangssprachlich', 'Nach der Uhrzeit fragen']
  },
  dialog: {
    bild: 'th-tag',
    situation: 'Olena und Kwame warten morgens an der Bushaltestelle. Olena sieht müde aus.',
    lines: [
      { sp: 'Kwame', txt: 'Guten Morgen, Olena! Du siehst müde aus. Wann stehst du auf?' },
      { sp: 'Olena', txt: 'Um halb sechs. Mein Deutschkurs fängt schon um sieben Uhr an.' },
      { sp: 'Kwame', txt: 'Um sieben? Das ist wirklich früh.' },
      { sp: 'Olena', txt: 'Ja, sehr früh. Und du? Wann fängst du an?' },
      { sp: 'Kwame', txt: 'Ich fange erst um Viertel nach neun an. Aber ich arbeite bis achtzehn Uhr.' },
      { sp: 'Olena', txt: 'Und wann kaufst du ein?' },
      { sp: 'Kwame', txt: 'Nach der Arbeit, so um halb sieben.' },
      { sp: 'Olena', txt: 'Gut. Ich rufe dich heute Abend an, ja?' },
      { sp: 'Kwame', txt: 'Gern! Aber nicht nach zehn — dann schlafe ich ein.' }
    ]
  },
  vokabeln: [
    { de: 'aufstehen', em: '🛏️', bsp: 'Ich stehe um halb sechs auf.' },
    { de: 'anfangen', em: '▶️', bsp: 'Der Kurs fängt um sieben an.' },
    { de: 'einkaufen', em: '🛒', bsp: 'Ich kaufe nach der Arbeit ein.' },
    { de: 'anrufen', em: '📞', bsp: 'Ich rufe dich heute Abend an.' },
    { de: 'einschlafen', em: '😴', bsp: 'Ich schlafe um zehn ein.' },
    { de: 'arbeiten', em: '💼', bsp: 'Ich arbeite bis achtzehn Uhr.' },
    { de: 'Wie spät ist es?', em: '🕐', bsp: 'Frage nach der Uhrzeit' },
    { de: 'Um wie viel Uhr …?', em: '⏰', bsp: 'Um wie viel Uhr fängt der Kurs an?' },
    { de: 'halb sechs', em: '🕠', bsp: '5:30 – eine halbe Stunde vor sechs!' },
    { de: 'Viertel nach neun', em: '🕘', bsp: '9:15' },
    { de: 'Viertel vor acht', em: '🕢', bsp: '7:45' },
    { de: 'der Vormittag', em: '🌤️', bsp: 'von 9 bis 12 Uhr' },
    { de: 'der Nachmittag', em: '☀️', bsp: 'von 14 bis 18 Uhr' },
    { de: 'früh / spät', em: '⏳', bsp: 'Sieben Uhr ist früh.' }
  ],
  grammatik: {
    title: 'Grammatik im Kontext',
    blocks: [
      {
        h: 'Trennbare Verben – die Vorsilbe fliegt ans Ende',
        txt: 'Manche Verben haben vorne eine kleine Silbe: auf-, an-, ein-. Im Satz bleibt sie nicht am Verb, sondern springt ganz nach hinten:',
        table: [
          ['Verb', 'Satz', 'Was passiert?'],
          ['aufstehen', 'Ich stehe um halb sechs auf.', 'auf → ans Satzende'],
          ['anfangen', 'Der Kurs fängt um sieben an.', 'an → ans Satzende'],
          ['einkaufen', 'Ich kaufe nach der Arbeit ein.', 'ein → ans Satzende'],
          ['anrufen', 'Ich rufe dich heute Abend an.', 'an → ans Satzende'],
          ['einschlafen', 'Ich schlafe um zehn ein.', 'ein → ans Satzende']
        ],
        note: 'Die Vorsilbe ist ein Bumerang: Du wirfst sie ans Satzende. Auch in der Frage — Wann stehst du auf? Wann fängst du an?'
      },
      {
        h: 'Uhrzeit: offiziell und umgangssprachlich',
        txt: 'Am Bahnhof hörst du die offizielle Zeit. Im Gespräch sagt man es einfacher:',
        table: [
          ['Uhr', 'Offiziell', 'Umgangssprachlich'],
          ['7:00', 'sieben Uhr', 'um sieben'],
          ['9:15', 'neun Uhr fünfzehn', 'Viertel nach neun'],
          ['17:30', 'siebzehn Uhr dreißig', 'halb sechs'],
          ['19:45', 'neunzehn Uhr fünfundvierzig', 'Viertel vor acht'],
          ['18:00', 'achtzehn Uhr', 'um sechs']
        ],
        note: 'Achtung bei „halb": halb sechs ist 5:30, nicht 6:30. Deutsche zählen zur nächsten Stunde hin. „halb sechs" heißt also 5:30 Uhr.'
      }
    ]
  },
  uebungen: [
    { typ: 'listen', audio: 'Mein Kurs fängt um Viertel nach neun an.', frage: 'Hör zu: Wann fängt der Kurs an?', optionen: ['9:15', '9:45', '8:45'], richtig: 0 },
    { typ: 'mc', frage: 'Welcher Satz ist richtig?', optionen: ['Ich stehe um sechs auf.', 'Ich aufstehe um sechs.', 'Ich auf stehe um sechs.'], richtig: 0, hinweis: 'Die Vorsilbe steht am Satzende. Nicht vorne beim Verb.' },
    { typ: 'mc', frage: '„halb sieben" — wie spät ist das?', optionen: ['6:30', '7:30', '7:00'], richtig: 0, hinweis: '„halb" + Stunde bedeutet 30 Minuten VOR dieser Stunde.' },
    { typ: 'gapbank', frage: 'Setz die Vorsilben ans Satzende!', text: 'Mein Kurs fängt um acht ___. Danach rufe ich meine Mutter ___.', bank: ['an', 'an', 'auf'], loesung: ['an', 'an'], hinweis: 'anfangen und anrufen haben beide die Vorsilbe an-. Sie steht immer hinten.' },
    { typ: 'match', frage: 'Welche Uhrzeit passt?', paare: [['7:45', '🕢 Viertel vor acht'], ['12:15', '🕛 Viertel nach zwölf'], ['20:30', '🕣 halb neun'], ['6:00', '🕕 sechs Uhr']] },
    { typ: 'order', frage: 'Sortiere die Wörter — wohin gehört die Vorsilbe?', woerter: ['auf', 'Ich', 'sechs', 'stehe', 'um'], loesung: 'Ich stehe um sechs auf', hinweis: 'Das Verb steht auf Position 2, die Vorsilbe ganz am Ende.' },
    { typ: 'bild', bild: 'th-tag', frage: 'Worum geht es auf dem Bild?', optionen: ['um einen ganz normalen Tagesablauf', 'um ein Fußballspiel', 'um eine Hochzeit', 'um einen Urlaub am Meer'], richtig: 0, hinweis: 'Achte auf Uhr, Wecker und den Tagesablauf.' },
    { typ: 'mc', frage: 'Der Zug fährt um neunzehn Uhr dreißig. Im Gespräch sagt man:', optionen: ['halb acht', 'halb sieben', 'neunzehn halb'], richtig: 0, hinweis: '19:30 = 30 Minuten vor 20 Uhr, also vor acht — deshalb halb acht.' },
    { typ: 'order', frage: 'Bau die Frage nach dem Kursbeginn!', woerter: ['du', 'Wann', 'an', 'fängst'], loesung: 'Wann fängst du an', hinweis: 'W-Wort, dann das Verb, dann die Person — die Vorsilbe bleibt hinten.' },
    { typ: 'type', frage: 'Und du? Wann stehst du auf?', muster: 'Ich stehe um halb sieben auf.', akzeptiert: ['^ich stehe um .+ auf', '^um .+ auf', '^ich stehe .+ auf'], hinweis: 'Vergiss das „auf" am Satzende nicht. Ohne die Vorsilbe fehlt etwas.' }
  ],
  zusammenfassung: {
    kernsaetze: [
      'Ich stehe um halb sechs auf.',
      'Mein Deutschkurs fängt um sieben Uhr an.',
      'Ich arbeite bis achtzehn Uhr.',
      'Ich rufe dich heute Abend an.',
      'Wie spät ist es? – Um wie viel Uhr fängst du an?'
    ],
    merke: [
      'Trennbare Verben: Die Vorsilbe (<b>auf-</b>, <b>an-</b>, <b>ein-</b>) springt ans <b>Satzende</b> — Ich stehe um sechs <b>auf</b>.',
      'Auch in der Frage bleibt die Vorsilbe hinten: <b>Wann</b> fängst du <b>an</b>?',
      '<b>halb sechs = 5:30</b>, nicht 6:30. Deutsche zählen zur <b>nächsten</b> vollen Stunde.'
    ],
    tipp: 'Schreib deinen Tag einmal auf: sechs Sätze mit Uhrzeit, von „Ich stehe … auf" bis „Ich schlafe … ein". Lies sie eine Woche lang jeden Abend laut vor — danach kommt dein Tagesablauf ohne Nachdenken.'
  },
  sprechen: {
    task: 'Erzähl deinen Tag laut, von morgens bis abends: Wann stehst du auf, wann fängt deine Arbeit oder dein Kurs an, wann kaufst du ein, wann schläfst du ein? Nenne zu jedem Punkt eine Uhrzeit.',
    tipps: ['Ich stehe um … auf.', 'Mein Kurs fängt um … an.', 'Ich arbeite von … bis …', 'Abends schlafe ich um … ein.']
  }
};
