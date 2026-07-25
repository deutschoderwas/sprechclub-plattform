// DTZ – Deutsch-Test für Zuwanderer – Lektion 3: Schreiben — die halbformelle Nachricht
// deutschoderwas club · Kursmaterial
window.LEKTION = {
  meta: { kurs: 'DTZ – Deutsch-Test für Zuwanderer', nr: 3, titel: 'Schreiben — die halbformelle Nachricht', level: 'A2–B1', bild: 'th-bewerbung', dauer: 'ca. 20 Min' },
  intro: {
    text: 'Im Schreibteil hast du 30 Minuten und genau eine Aufgabe — du wählst zwischen zwei Themen. Verlangt wird eine Nachricht mit vier Inhaltspunkten, dazu Anrede und Gruß. Wer alle vier Punkte abarbeitet, holt sich die Punkte auch mit einfachen Sätzen. Wer schön formuliert, aber einen Punkt vergisst, verliert ein Viertel.',
    du_lernst: ['Die vier Inhaltspunkte sicher abarbeiten', 'Anrede und Gruß, die zusammenpassen', 'Konnektoren und die Stelle des Verbs', 'Die 30 Minuten sinnvoll einteilen']
  },
  dialog: {
    bild: 'th-bewerbung',
    situation: 'Lerncafé am Freitagnachmittag. Dilan schreibt eine Übungsaufgabe, Nadeem hat den Timer auf 30 Minuten gestellt und meldet sich zwischendurch.',
    lines: [
      { sp: 'Nadeem', txt: 'Zwanzig Minuten sind rum. Wie weit bist du?' },
      { sp: 'Dilan', txt: 'Noch bei der Einleitung. Die klingt so komisch.' },
      { sp: 'Nadeem', txt: 'Zeig mal her. — Dilan, das sind sechs Zeilen, und kein einziger Inhaltspunkt ist dabei.' },
      { sp: 'Dilan', txt: 'Aber der Anfang muss doch schön sein.' },
      { sp: 'Nadeem', txt: 'Der Anfang ist eine Zeile. „Sehr geehrte Frau Kaufmann," — fertig. Die Punkte bringen die Punkte.' },
      { sp: 'Dilan', txt: 'Vier Stück, oder?' },
      { sp: 'Nadeem', txt: 'Vier. Und zu jedem schreibst du zwei Sätze. Warum du schreibst, was du willst, wann es passt, und ein Vorschlag.' },
      { sp: 'Dilan', txt: 'Und wenn ich einen vergesse?' },
      { sp: 'Nadeem', txt: 'Dann fehlt dir ein Viertel vom Inhalt. Deshalb hak sie ab, während du schreibst. — Noch zehn Minuten.' },
      { sp: 'Dilan', txt: 'Okay. Ich schreib die Einleitung neu. Ein Satz.' }
    ]
  },
  vokabeln: [
    { de: 'der Inhaltspunkt', em: '📌', bsp: 'Die Aufgabe nennt vier Inhaltspunkte.' },
    { de: 'die Anrede', em: '🙋', bsp: 'Sehr geehrte Frau Kaufmann,' },
    { de: 'die Grußformel', em: '👋', bsp: 'Mit freundlichen Grüßen' },
    { de: 'der Betreff', em: '📄', bsp: 'Betreff: Absage Termin am 12. Mai' },
    { de: 'sich beschweren', em: '😠', bsp: 'Ich möchte mich über den Lärm beschweren.' },
    { de: 'sich entschuldigen', em: '🙏', bsp: 'Ich möchte mich entschuldigen, dass ich nicht da war.' },
    { de: 'die Bitte', em: '🤲', bsp: 'Ich habe eine Bitte: Könnten Sie mir …?' },
    { de: 'absagen', em: '❌', bsp: 'Leider muss ich den Termin absagen.' },
    { de: 'der Grund', em: '🔍', bsp: 'Der Grund ist, dass mein Sohn krank ist.' },
    { de: 'leider', em: '😕', bsp: 'Leider kann ich am Montag nicht kommen.' },
    { de: 'deshalb', em: '➡️', bsp: 'Mein Bus ist ausgefallen. Deshalb bin ich zu spät gekommen.' },
    { de: 'trotzdem', em: '🔁', bsp: 'Ich habe wenig Zeit. Trotzdem komme ich gern.' },
    { de: 'der Ersatztermin', em: '📅', bsp: 'Könnten wir einen Ersatztermin finden?' },
    { de: 'Ich freue mich über eine kurze Antwort.', em: '📬', bsp: 'guter Schlusssatz vor der Grußformel' }
  ],
  grammatik: {
    title: 'Sätze verbinden, Briefe rahmen',
    blocks: [
      {
        h: 'Konnektoren — und wo das Verb landet',
        txt: 'Vier Wörter, die deine Nachricht sofort erwachsener klingen lassen. Wichtig ist nur, wohin das Verb rutscht:',
        table: [
          ['Konnektor', 'Beispielsatz', 'Das Verb steht'],
          ['weil', 'Ich kann nicht kommen, weil mein Sohn krank ist.', 'ganz am Ende'],
          ['deshalb', 'Mein Sohn ist krank. Deshalb kann ich nicht kommen.', 'direkt nach deshalb'],
          ['trotzdem', 'Ich habe wenig Zeit. Trotzdem komme ich gern.', 'direkt nach trotzdem'],
          ['denn', 'Ich komme später, denn mein Bus hatte Verspätung.', 'ganz normal wie im Hauptsatz']
        ],
        note: 'weil schickt das Verb ans Ende. deshalb und trotzdem ziehen es sofort zu sich. denn ändert gar nichts — deshalb ist denn dein sicherster Konnektor.'
      },
      {
        h: 'Anrede und Gruß — das passende Paar',
        txt: 'Anrede und Gruß gehören zusammen wie Schuhe. Förmlich zu förmlich, locker zu locker:',
        table: [
          ['Wem schreibst du?', 'Anrede', 'Gruß'],
          ['Amt, Vermieter, Firma (Name bekannt)', 'Sehr geehrte Frau Kaufmann,', 'Mit freundlichen Grüßen'],
          ['Firma, Name unbekannt', 'Sehr geehrte Damen und Herren,', 'Mit freundlichen Grüßen'],
          ['Kursleiterin, Nachbarin — du siezt sie', 'Liebe Frau Brandt,', 'Herzliche Grüße'],
          ['Freundin, Kollege — ihr duzt euch', 'Hallo Sara,', 'Liebe Grüße']
        ],
        note: 'Nach der Anrede kommt ein Komma, und danach geht es klein weiter: Sehr geehrte Frau Kaufmann, ich schreibe Ihnen …'
      }
    ]
  },
  uebungen: [
    { typ: 'mc', frage: 'Wie viel Zeit hast du für den Schreibteil?', optionen: ['45 Minuten für zwei Aufgaben', '20 Minuten für eine Aufgabe', '30 Minuten für eine Aufgabe'], richtig: 2, hinweis: 'Du bekommst zwei Themen zur Auswahl und schreibst genau eines davon.' },
    { typ: 'match', frage: 'Anrede, Gruß und Situation — was passt zusammen?', paare: [['Sehr geehrte Damen und Herren,', '📄 Firma, Name unbekannt, ganz förmlich'], ['Liebe Frau Brandt,', '🙂 du kennst sie, aber du siezt sie'], ['Hallo Sara,', '👋 Freundin, ihr duzt euch'], ['Mit freundlichen Grüßen', '✉️ der Standardgruß im förmlichen Brief'], ['Liebe Grüße', '💌 der Gruß unter Freundinnen']] },
    { typ: 'gapbank', frage: 'Setz die Konnektoren ein.', text: 'Ich kann am Montag leider nicht kommen, ___ mein Sohn krank ist. ___ möchte ich Sie um einen Ersatztermin bitten. Donnerstag wäre gut, ___ da habe ich frei.', bank: ['weil', 'Deshalb', 'denn', 'trotzdem'], loesung: ['weil', 'Deshalb', 'denn'], hinweis: 'weil → Verb ans Ende · deshalb → Verb direkt danach · denn → der Satz bleibt normal.' },
    { typ: 'order', frage: 'Bau den Nebensatz!', woerter: ['weil', 'krank', 'Sohn', 'ist', 'mein'], loesung: 'weil mein Sohn krank ist', hinweis: 'Nach weil kommt zuerst das Subjekt — das Verb steht ganz am Ende.' },
    { typ: 'mc', frage: 'Die Aufgabe nennt vier Inhaltspunkte. Du behandelst nur drei davon. Was passiert?', optionen: ['Nichts, drei reichen völlig.', 'Du verlierst Punkte — auch wenn dein Deutsch gut ist.', 'Der Text wird gar nicht bewertet.'], richtig: 1, hinweis: 'Zuerst wird der Inhalt bewertet: Jeder der vier Punkte muss vorkommen. Zwei Sätze pro Punkt genügen dafür.' },
    { typ: 'bild', bild: 'th-bewerbung', frage: 'Du schreibst an eine Firma, deren Ansprechpartner du nicht kennst. Wie fängst du an?', optionen: ['Hallo zusammen,', 'Sehr geehrte Damen und Herren,', 'Liebe Firma,', 'Guten Tag alle miteinander,'], richtig: 1, hinweis: 'Kein Name bekannt heißt: Sehr geehrte Damen und Herren, — danach Komma und klein weiterschreiben.' },
    { typ: 'type', frage: 'Schreib den ersten Satz deiner Nachricht. Der Grund: Du musst deinen Termin am Montag absagen.', muster: 'Ich schreibe Ihnen, weil ich meinen Termin am Montag leider absagen muss.', akzeptiert: ['schreibe', 'leider', 'absagen', 'termin'], hinweis: 'Satz eins beantwortet immer: Warum schreibe ich überhaupt? Die Details kommen danach.' },
    { typ: 'mc', frage: 'Welcher Schluss passt in eine halbformelle Nachricht?', optionen: ['Tschüss und bis dann!', 'Das war es. Ende.', 'Ich freue mich über eine kurze Antwort. Mit freundlichen Grüßen'], richtig: 2, hinweis: 'Ein Schlusssatz plus Grußformel — beides gehört zur Rahmung und wird bewertet.' },
    { typ: 'listen', audio: 'Sehr geehrte Frau Kaufmann, leider muss ich unseren Termin am Montag absagen.', frage: 'Hör zu: In welchem Verhältnis stehen die beiden?', optionen: ['Freundschaftlich — die beiden duzen sich', 'Förmlich — der Absender siezt Frau Kaufmann', 'Der Absender kennt ihren Namen nicht'], richtig: 1 },
    { typ: 'mc', frage: 'Du hast 30 Minuten. Wie teilst du sie am besten ein?', optionen: ['5 Minuten planen, 20 schreiben, 5 kontrollieren', '25 Minuten schreiben, 5 Minuten planen', 'Sofort losschreiben, das spart Zeit'], richtig: 0, hinweis: 'Die letzten fünf Minuten sind die wertvollsten: Anrede da? Alle vier Punkte da? Gruß da? Verben am richtigen Platz?' }
  ],
  zusammenfassung: {
    kernsaetze: [
      '30 Minuten, eine Aufgabe von zwei, vier Inhaltspunkte.',
      'Sehr geehrte Frau …, ich schreibe Ihnen, weil …',
      'Leider kann ich am … nicht kommen. Der Grund ist, dass …',
      'Könnten wir einen Ersatztermin finden? Donnerstag wäre gut, denn da habe ich frei.',
      'Ich freue mich über eine kurze Antwort. Mit freundlichen Grüßen'
    ],
    merke: [
      'Der Inhalt zählt zuerst: <b>alle vier Punkte</b>, je zwei Sätze. Schön formulieren kommt danach.',
      '<b>weil</b> → Verb ans Ende · <b>deshalb</b> und <b>trotzdem</b> → Verb sofort danach · <b>denn</b> → alles bleibt, wie es ist.',
      'Anrede und Gruß sind ein Paar: <b>Sehr geehrte …</b> gehört zu <b>Mit freundlichen Grüßen</b>, <b>Hallo …</b> zu <b>Liebe Grüße</b>.'
    ],
    tipp: 'Schreib diese Woche drei kurze Nachrichten mit Timer — 25 Minuten, nicht mehr: eine Absage an einen Arzt, eine Beschwerde über eine kaputte Heizung, eine Bitte um einen Termin. Streich danach mit dem Stift ab, welche vier Punkte du wirklich behandelt hast. Nach drei Runden machst du es automatisch.'
  },
  sprechen: {
    task: 'Sprich deine Nachricht laut, bevor du sie schreibst: Sag in vier Blöcken, was in deinem Brief stehen soll — Grund, Anliegen, Zeitvorschlag, Bitte um Antwort. Wer es sagen kann, kann es auch schreiben.',
    tipps: ['Ich schreibe Ihnen, weil …', 'Leider kann ich … Der Grund ist, dass …', 'Könnten wir …? Donnerstag wäre gut, denn …', 'Ich freue mich über eine kurze Antwort.']
  }
};
