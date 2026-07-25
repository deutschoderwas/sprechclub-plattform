// Alltagsdeutsch A1 – Lektion 2: Zahlen, Alter & Telefonnummer
window.LEKTION = {
  meta: { kurs: 'Alltagsdeutsch A1', nr: 2, titel: 'Zahlen, Alter & Telefonnummer', level: 'A1', bild: 'a1-l2', dauer: 'ca. 15 Min' },
  intro: {
    text: 'Zahlen brauchst du überall: beim Einkaufen, beim Arzt, beim Amt. Heute lernst du die Zahlen von 0 bis 100, wie du dein Alter sagst und wie du deine Telefonnummer angibst.',
    du_lernst: ['Zahlen 0–100', 'Wie alt bist du?', 'Telefonnummer sagen', 'sein: ich bin / du bist']
  },
  dialog: {
    bild: 'a1-l2',
    situation: 'Omar meldet sich im Sprachkurs an. Frau Weber vom Büro fragt nach seinen Daten.',
    lines: [
      { sp: 'Frau Weber', txt: 'Guten Tag! Wie alt sind Sie?' },
      { sp: 'Omar', txt: 'Ich bin dreiundzwanzig Jahre alt.' },
      { sp: 'Frau Weber', txt: 'Und wie ist Ihre Telefonnummer?' },
      { sp: 'Omar', txt: 'Meine Nummer ist null eins sieben, vier vier zwei.' },
      { sp: 'Frau Weber', txt: 'Danke. Der Kurs kostet achtzig Euro.' },
      { sp: 'Omar', txt: 'Achtzig Euro? Alles klar, vielen Dank!' }
    ]
  },
  vokabeln: [
    { de: 'null', em: '0️⃣', bsp: '0' },
    { de: 'eins, zwei, drei', em: '3️⃣', bsp: '1, 2, 3' },
    { de: 'vier, fünf, sechs', em: '6️⃣', bsp: '4, 5, 6' },
    { de: 'sieben, acht, neun', em: '9️⃣', bsp: '7, 8, 9' },
    { de: 'zehn', em: '🔟', bsp: '10' },
    { de: 'zwanzig', em: '🔢', bsp: '20' },
    { de: 'dreiundzwanzig', em: '🔢', bsp: '23 – erst 3, dann 20!' },
    { de: 'hundert', em: '💯', bsp: '100' },
    { de: 'Wie alt bist du?', em: '🎂', bsp: 'Frage nach dem Alter' },
    { de: 'Ich bin … Jahre alt.', em: '🙋', bsp: 'Ich bin 23 Jahre alt.' },
    { de: 'die Telefonnummer', em: '📱', bsp: 'Meine Nummer ist …' },
    { de: 'Was kostet das?', em: '💶', bsp: 'Frage nach dem Preis' },
    { de: 'der Euro', em: '💰', bsp: 'achtzig Euro' }
  ],
  grammatik: {
    title: 'Grammatik im Kontext',
    blocks: [
      {
        h: 'sein – das wichtigste Verb',
        txt: 'Für Alter und Namen brauchst du „sein":',
        table: [
          ['Person', 'sein', 'Beispiel'],
          ['ich', 'bin', 'Ich bin 23.'],
          ['du', 'bist', 'Du bist 30.'],
          ['er/sie', 'ist', 'Sie ist 45.'],
          ['Sie (formell)', 'sind', 'Wie alt sind Sie?']
        ],
        note: '„sein" ist unregelmäßig — am besten auswendig lernen. Du brauchst es jeden Tag!'
      },
      {
        h: 'Zahlen: rückwärts denken!',
        txt: 'Ab 21 sagt man im Deutschen erst die kleine Zahl, dann die große:',
        table: [
          ['Zahl', 'Deutsch', 'Logik'],
          ['21', 'einundzwanzig', '1 + und + 20'],
          ['23', 'dreiundzwanzig', '3 + und + 20'],
          ['45', 'fünfundvierzig', '5 + und + 40'],
          ['87', 'siebenundachtzig', '7 + und + 80']
        ],
        note: 'Merke: 23 = „drei-und-zwanzig". Genau umgekehrt wie im Englischen (twenty-three).'
      }
    ]
  },
  uebungen: [
    { typ: 'listen', audio: 'Ich bin dreiundzwanzig Jahre alt.', frage: 'Hör zu: Wie alt ist er?', optionen: ['23 Jahre', '32 Jahre', '13 Jahre'], richtig: 0, hinweis: 'drei-und-zwanzig = erst 3, dann 20' },
    { typ: 'mc', frage: 'Was bedeutet „fünfundvierzig"?', optionen: ['45', '54', '55'], richtig: 0, hinweis: 'fünf + und + vierzig' },
    { typ: 'mc', frage: 'Wie alt ___ du?', optionen: ['bist', 'bin', 'ist'], richtig: 0, hinweis: 'du → bist' },
    { typ: 'gapbank', frage: 'Füll die Lücken!', text: 'Ich ___ 30 Jahre alt. Meine Schwester ___ 25.', bank: ['bin', 'ist', 'bist'], loesung: ['bin', 'ist'], hinweis: 'ich → bin · sie → ist' },
    { typ: 'match', frage: 'Welche Zahl passt?', paare: [['siebzehn', '17'], ['siebzig', '70'], ['zwölf', '12'], ['zwanzig', '20']] },
    { typ: 'order', frage: 'Bau die Frage!', woerter: ['alt', 'Wie', 'du', 'bist'], loesung: 'Wie alt bist du', hinweis: 'W-Wort, Adjektiv, Verb, Person.' },
    { typ: 'mc', frage: 'Der Kurs kostet 80 Euro. Wie sagt man 80?', optionen: ['achtzig', 'achtzehn', 'acht'], richtig: 0, hinweis: '-zig = die Zehnerzahl (80), -zehn = 18' },
    { typ: 'type', frage: 'Und du? Wie alt bist du?', muster: 'Ich bin 28 Jahre alt.', akzeptiert: ['^ich bin \\d+', '^ich bin .*jahre'], hinweis: 'Schreib: „Ich bin … Jahre alt."' }
  ],
  zusammenfassung: {
    kernsaetze: [
      'Ich bin … Jahre alt.',
      'Wie alt bist du? / Wie alt sind Sie?',
      'Meine Telefonnummer ist …',
      'Was kostet das? – Das kostet … Euro.'
    ],
    merke: [
      '<b>sein</b>: ich <b>bin</b> · du <b>bist</b> · er/sie <b>ist</b> · Sie <b>sind</b>.',
      'Zahlen ab 21 rückwärts: 23 = <b>drei</b>und<b>zwanzig</b> (erst die kleine Zahl!).',
      '<b>-zehn</b> = 13–19 · <b>-zig</b> = 20, 30, 40 … Achte auf den Unterschied: acht<b>zehn</b> (18) ≠ acht<b>zig</b> (80).'
    ],
    tipp: 'Lies eine Woche lang jede Hausnummer, jeden Preis und jede Uhrzeit laut auf Deutsch. Zahlen lernt man nur durch Wiederholung — aber dann sitzen sie für immer.'
  },
  sprechen: {
    task: 'Sag laut: dein Alter, deine Telefonnummer und wie viel dein letzter Einkauf gekostet hat.',
    tipps: ['Ich bin … Jahre alt.', 'Meine Nummer ist …', 'Das kostet … Euro.']
  }
};
