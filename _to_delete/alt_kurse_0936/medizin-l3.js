// Deutsch für Mediziner – Lektion 3: Aufklärung vor dem Eingriff
// deutschoderwas club · Kursmaterial
window.LEKTION = {
  meta: { kurs: 'Deutsch für Mediziner', nr: 3, titel: 'Aufklärung vor dem Eingriff', level: 'B2–C1', bild: 'th-gespraech', dauer: 'ca. 22 Min' },
  intro: {
    text: 'Aufklären heißt: alles Wichtige sagen, ohne den Patienten in Panik zu versetzen — und am Ende wissen, ob er es verstanden hat. Sprachlich hängt daran genau ein Werkzeug: der Konjunktiv II. Er verwandelt jede Katastrophe in einen möglichen Fall, über den man ruhig sprechen kann. Dazu kommen Häufigkeitswörter, die ehrlich bleiben, und drei Fragen, mit denen du prüfst, ob deine Erklärung angekommen ist.',
    du_lernst: ['Konjunktiv II für den hypothetischen Fall', 'Risiken ehrlich und ruhig benennen', 'Häufigkeiten in Worte fassen', 'Mit Rückversicherungsfragen das Verständnis prüfen']
  },
  dialog: {
    bild: 'th-gespraech',
    situation: 'Aufklärungsgespräch am Vorabend. Dr. Osei erklärt Frau Brandt die geplante Gallenblasenentfernung. Sie will das Gespräch eigentlich abkürzen.',
    lines: [
      { sp: 'Dr. Osei', txt: 'Frau Brandt, für morgen ist die Entfernung der Gallenblase geplant. Ich müsste die Risiken mit Ihnen durchgehen. Haben Sie dafür jetzt Ruhe?' },
      { sp: 'Frau Brandt', txt: 'Ach, geben Sie mir einfach den Zettel, ich unterschreibe. Sagen Sie mir nur, ob das gefährlich ist.' },
      { sp: 'Dr. Osei', txt: 'Das darf ich nicht — unterschreiben dürfen Sie erst, wenn wir gesprochen haben. Und ich sage es Ihnen ehrlich: Es ist ein Routineeingriff, wir machen ihn hier mehrmals pro Woche. Trotzdem muss ich Ihnen sagen, was theoretisch schiefgehen kann.' },
      { sp: 'Frau Brandt', txt: 'Na dann.' },
      { sp: 'Dr. Osei', txt: 'Häufig sind blaue Flecken an den kleinen Schnitten und ein Druckgefühl in der Schulter. Das klingt nach zwei bis drei Tagen ab. Selten, etwa bei einer von hundert Operationen, kommt es zu einer Nachblutung. Sollte das eintreten, würden wir es noch im Haus bemerken und sofort reagieren.' },
      { sp: 'Frau Brandt', txt: 'Und wenn Sie da drin was kaputt machen?' },
      { sp: 'Dr. Osei', txt: 'Sie meinen eine Verletzung der Gallenwege. Die ist sehr selten, weniger als einer von tausend Fällen. Träte sie ein, müssten wir den Eingriff erweitern, also von den vier kleinen Schnitten auf einen größeren umsteigen. Genau deshalb steht das auf dem Bogen.' },
      { sp: 'Frau Brandt', txt: 'Das ist mir jetzt trotzdem alles ein bisschen viel.' },
      { sp: 'Dr. Osei', txt: 'Das verstehe ich. Sagen Sie mir doch bitte in Ihren eigenen Worten, was morgen passiert — dann sehe ich, ob ich es verständlich erklärt habe.' },
      { sp: 'Frau Brandt', txt: 'Vier kleine Löcher, die Galle kommt raus, und wenn was blutet oder schiefgeht, machen Sie richtig auf. Und nüchtern bleiben ab Mitternacht.' }
    ]
  },
  vokabeln: [
    { de: 'das Aufklärungsgespräch', em: '📋', bsp: 'Ohne Aufklärungsgespräch keine Einwilligung.' },
    { de: 'der Eingriff / der Routineeingriff', em: '🔪', bsp: 'Der Eingriff dauert etwa vierzig Minuten.' },
    { de: 'die Einwilligung', em: '✍️', bsp: 'Sie geben Ihre Einwilligung mit der Unterschrift.' },
    { de: 'der Aufklärungsbogen', em: '📄', bsp: 'Das steht auch auf dem Bogen.' },
    { de: 'in seltenen Fällen', em: '🎲', bsp: 'In seltenen Fällen kommt es zu Fieber.' },
    { de: 'die Nachblutung', em: '🩸', bsp: 'Sollte es zu einer Nachblutung kommen, …' },
    { de: 'die Wundinfektion', em: '🦠', bsp: 'Die Wunde kann sich entzünden.' },
    { de: 'die Vollnarkose', em: '😴', bsp: 'Der Eingriff erfolgt in Vollnarkose.' },
    { de: 'nüchtern bleiben', em: '🚫', bsp: 'Ab Mitternacht bitte nichts mehr essen und trinken.' },
    { de: 'den Eingriff erweitern', em: '↔️', bsp: 'vom kleinen auf das offene Verfahren umsteigen' },
    { de: 'abklingen', em: '📉', bsp: 'Das klingt nach zwei bis drei Tagen ab.' },
    { de: 'Sollte es zu … kommen, …', em: '🔁', bsp: 'Sollte es zu Fieber kommen, melden Sie sich.' },
    { de: 'Risiko und Nutzen abwägen', em: '⚖️', bsp: 'Wir wägen Risiko und Nutzen gemeinsam ab.' },
    { de: 'die Alternative: abwarten', em: '⏳', bsp: 'Die Alternative wäre, zunächst abzuwarten.' },
    { de: 'in Ihren eigenen Worten', em: '🗣️', bsp: 'Sagen Sie mir in Ihren eigenen Worten, was morgen passiert.' },
    { de: 'Habe ich das verständlich erklärt?', em: '💬', bsp: 'Rückversicherung am Ende jedes Abschnitts' }
  ],
  grammatik: {
    title: 'Sprache der Aufklärung',
    blocks: [
      {
        h: 'Konjunktiv II — der Fall, der eintreten könnte',
        txt: 'Wenn du im Indikativ aufklärst, klingt jede Komplikation wie ein Termin: „Wir machen einen größeren Schnitt." Der Konjunktiv II schiebt das Ganze in den hypothetischen Raum — es könnte so kommen, es kommt aber meistens nicht so. Drei Bauformen decken alles ab:',
        table: [
          ['Bauform', 'Beispiel aus dem Gespräch', 'Wirkung'],
          ['Sollte + Infinitiv (ohne wenn)', 'Sollte es zu einer Blutung kommen, würden wir sofort reagieren.', 'der Standardsatz der Aufklärung — förmlich, ruhig'],
          ['wenn + Konjunktiv II', 'Wenn eine Verletzung aufträte, müssten wir erweitern.', 'schriftsprachlich, sehr distanziert'],
          ['Konjunktiv II ohne wenn (Inversion)', 'Träte sie ein, müssten wir den Eingriff erweitern.', 'gehoben, wirkt souverän — sparsam einsetzen'],
          ['würde + Infinitiv im Hauptsatz', 'Wir würden Sie dann sofort überwachen.', 'die einfachste und häufigste Form'],
          ['wäre / hätte / müsste / könnte', 'Die Alternative wäre, zunächst abzuwarten.', 'Vollformen statt würde — bei diesen Verben Pflicht']
        ],
        note: 'Nicht jedes Verb braucht „würde": bei <b>sein, haben</b> und den Modalverben benutzt du die Vollform (<b>wäre, hätte, müssten, könnten, dürfte</b>). Bei allen anderen Verben ist <b>würde + Infinitiv</b> im Klinikalltag völlig in Ordnung.'
      },
      {
        h: 'Häufigkeiten benennen, ohne zu erschrecken',
        txt: 'Du darfst nichts verschweigen — aber du darfst einordnen. Die Häufigkeitsstufen sind europaweit definiert; wenn du sie benutzt, bist du juristisch sauber und trotzdem verständlich:',
        table: [
          ['Stufe', 'Ungefähr', 'So sagst du es dem Patienten'],
          ['sehr häufig', 'mehr als 1 von 10', 'Fast jeder spürt das — es gehört dazu und klingt schnell ab.'],
          ['häufig', 'etwa 1 von 10', 'Das kommt oft vor und ist harmlos.'],
          ['gelegentlich', 'etwa 1 von 100', 'Das sehen wir hin und wieder. Wir behandeln es dann sofort.'],
          ['selten', 'etwa 1 von 1000', 'Das ist selten. Sollte es eintreten, sind wir darauf vorbereitet.'],
          ['sehr selten', 'weniger als 1 von 10 000', 'Ich muss es erwähnen, weil es dazugehört — gesehen habe ich es hier noch nicht.']
        ],
        note: 'Drei Dinge machen den Unterschied: <b>Zahl nennen</b>, <b>Einordnung geben</b>, <b>Handlungsplan anhängen</b>. „Selten, etwa einer von hundert — und sollte es passieren, würden wir sofort reagieren." Verboten ist nur eines: das Risiko wegreden („Da kann nichts passieren").'
      },
      {
        h: 'Rückversicherung — hat er es wirklich verstanden?',
        txt: 'Ein Nicken ist kein Verständnis. Frag nicht, ob es Fragen gibt, sondern lass zurückerzählen. Diese vier Fragen kosten zwei Minuten und retten dir das ganze Gespräch:',
        table: [
          ['Was du prüfen willst', 'Frage'],
          ['Ist das Wichtigste angekommen?', 'Sagen Sie mir bitte in Ihren eigenen Worten, was morgen passiert.'],
          ['War meine Erklärung gut?', 'Habe ich das verständlich erklärt, oder soll ich einen Teil noch einmal anders sagen?'],
          ['Was macht ihm Angst?', 'Was beschäftigt Sie an dem Eingriff am meisten?'],
          ['Ist noch etwas offen?', 'Welche Frage ist Ihnen jetzt noch wichtig, bevor Sie unterschreiben?']
        ],
        note: 'Der feine Unterschied: „Haben Sie das verstanden?" schiebt die Schuld zum Patienten — fast jeder sagt reflexhaft ja. <b>„Habe ich das verständlich erklärt?"</b> nimmt sie auf dich und macht Nachfragen erlaubt.'
      }
    ]
  },
  uebungen: [
    { typ: 'listen', audio: 'Sollte es zu einer Nachblutung kommen, würden wir sofort reagieren.', frage: 'Hör zu: Was sagt der Arzt über die Nachblutung?', optionen: ['Sie ist möglich, und das Team wäre darauf vorbereitet.', 'Sie tritt bei diesem Eingriff regelmäßig auf.', 'Sie ist bei dieser Operation ausgeschlossen.'], richtig: 0 },
    { typ: 'mc', frage: 'Welche Formulierung nennt das Risiko korrekt, ohne zu erschrecken?', optionen: ['Selten, etwa bei einem von hundert — sollte es eintreten, würden wir sofort reagieren.', 'Da kann eigentlich nichts passieren, machen Sie sich keine Gedanken.', 'Es kann zu schweren Blutungen kommen, im schlimmsten Fall mit tödlichem Ausgang.'], richtig: 0, hinweis: 'Ehrliche Aufklärung besteht aus drei Teilen: Häufigkeit nennen, einordnen, Handlungsplan anhängen. Weder Verharmlosen noch die nackte Schreckensvariante erfüllen das.' },
    { typ: 'gapbank', frage: 'Setz den Konjunktiv II der Aufklärung ein.', text: '___ es zu einer Blutung kommen, ___ wir sofort eingreifen. Ein größerer Schnitt ___ nur im Notfall nötig, und die Alternative ___ zunächst abzuwarten.', bank: ['Sollte', 'würden', 'wäre', 'wäre', 'Wird', 'werden'], loesung: ['Sollte', 'würden', 'wäre', 'wäre'], hinweis: 'Bei „sein" nutzt du immer die Vollform „wäre", nie „würde sein". Bei normalen Vollverben ist „würde + Infinitiv" der Normalfall.' },
    { typ: 'match', frage: 'Häufigkeitswort und Größenordnung — was gehört zusammen?', paare: [['häufig', '🔟 etwa 1 von 10'], ['gelegentlich', '💯 etwa 1 von 100'], ['selten', '🎲 etwa 1 von 1000'], ['sehr selten', '🌑 weniger als 1 von 10 000']] },
    { typ: 'order', frage: 'Bau den Standardsatz der Aufklärung!', woerter: ['Sollte', 'es', 'zu', 'Fieber', 'kommen', 'melden', 'Sie', 'sich', 'bitte', 'sofort'], loesung: 'Sollte es zu Fieber kommen melden Sie sich bitte sofort', hinweis: 'Bei „sollte" am Satzanfang fällt das „wenn" weg. Der Hauptsatz beginnt danach direkt mit dem Verb — die Position nach dem Nebensatz ist besetzt.' },
    { typ: 'mc', frage: 'Welche Rückversicherungsfrage prüft das Verständnis wirklich?', optionen: ['Sagen Sie mir bitte in Ihren eigenen Worten, was morgen passiert.', 'Haben Sie das jetzt alles verstanden?', 'Ist noch irgendwas unklar geblieben?'], richtig: 0, hinweis: 'Nur das Zurückerzählen zeigt, was angekommen ist. Ja-Nein-Fragen beantworten fast alle Patienten reflexhaft mit Ja — aus Höflichkeit oder aus Scham.' },
    { typ: 'bild', bild: 'th-gespraech', frage: 'Die Patientin sagt: „Geben Sie mir einfach den Zettel, ich unterschreibe." Wie reagierst du?', optionen: ['Unterschreiben dürfen Sie erst nach dem Gespräch — das schreibt das Gesetz so vor. Ich halte mich kurz.', 'In Ordnung, hier ist der Bogen, unterschreiben Sie unten rechts.', 'Wenn Sie es nicht hören wollen, kann ich Sie leider nicht operieren.', 'Das machen wir dann morgen früh vor der Narkose.'], richtig: 0, hinweis: 'Die Einwilligung ist nur nach erfolgter Aufklärung wirksam. Du bleibst freundlich, benennst den Grund und bietest an, es kurz zu halten — verweigern oder verschieben löst das Problem nicht.' },
    { typ: 'type', frage: 'Formuliere hypothetisch mit „sollte": Wenn Sie nach der Operation Fieber bekommen, rufen Sie uns an.', muster: 'Sollten Sie nach der Operation Fieber bekommen, rufen Sie uns bitte an.', akzeptiert: ['sollten sie', 'sollte es', 'falls sie'], hinweis: 'Bei „sollte" am Anfang entfällt „wenn", und das Verb steht ganz vorn im Nebensatz. Die Personalendung richtet sich nach dem Subjekt: Sollten Sie …, sollte er …' },
    { typ: 'mc', frage: 'Welcher Satz gehört NICHT in ein Aufklärungsgespräch?', optionen: ['Machen Sie sich keine Sorgen, bei mir ist noch nie etwas schiefgegangen.', 'Die Alternative wäre, zunächst abzuwarten und in drei Monaten neu zu schauen.', 'Ich muss das erwähnen, weil es dazugehört — gesehen habe ich es hier noch nicht.'], richtig: 0, hinweis: 'Persönliche Erfolgsgarantien sind fachlich falsch und juristisch angreifbar. Zur Aufklärung gehören dagegen zwingend auch die Behandlungsalternativen — einschließlich der Möglichkeit, nichts zu tun.' },
    { typ: 'type', frage: 'Ein Patient nickt nur und schweigt. Formuliere eine Frage, die herausfindet, was ihn beschäftigt.', muster: 'Was beschäftigt Sie an dem Eingriff im Moment am meisten?', akzeptiert: ['was beschäftigt', 'was macht ihnen', 'woran denken sie', 'was geht ihnen'], hinweis: 'Offene W-Fragen öffnen das Gespräch, Ja-Nein-Fragen schließen es. Frag nach dem Gefühl, nicht nach dem Wissen.' }
  ],
  zusammenfassung: {
    kernsaetze: [
      'Ich müsste die Risiken mit Ihnen durchgehen — haben Sie dafür jetzt Ruhe?',
      'Häufig sind blaue Flecken an den Schnitten. Das klingt nach zwei bis drei Tagen ab.',
      'Sollte es zu einer Nachblutung kommen, würden wir sofort reagieren.',
      'Die Alternative wäre, zunächst abzuwarten.',
      'Sagen Sie mir bitte in Ihren eigenen Worten, was morgen passiert.',
      'Habe ich das verständlich erklärt, oder soll ich einen Teil anders sagen?'
    ],
    merke: [
      'Der Standardsatz der Aufklärung: <b>Sollte es zu … kommen, würden wir …</b> — Risiko benennen und im selben Atemzug den Plan mitliefern.',
      'Bei <b>sein, haben</b> und den Modalverben immer die Vollform: <b>wäre, hätte, müssten, könnten, dürfte</b>. Kein „würde sein".',
      'Nie „Haben Sie das verstanden?", sondern <b>„Habe ich das verständlich erklärt?"</b> — und dann zurückerzählen lassen.'
    ],
    tipp: 'Nimm dir einen echten Aufklärungsbogen aus deiner Abteilung und übersetze jede Risikozeile in einen gesprochenen Satz nach dem Muster „Häufigkeit — Einordnung — Plan". Fünf Zeilen pro Tag reichen. Nach zwei Wochen sprichst du die Aufklärung frei, statt vom Bogen abzulesen — und genau das erwarten Prüfer und Patienten.'
  },
  sprechen: {
    task: 'Kläre laut über einen Eingriff auf, den du kennst: Nenne zuerst den Ablauf in drei Sätzen, dann zwei häufige und zwei seltene Risiken jeweils mit „Sollte … kommen, würden wir …", danach eine Alternative — und schließe mit einer Rückversicherungsfrage.',
    tipps: ['Ich müsste kurz die Risiken mit Ihnen durchgehen.', 'Häufig ist … — das klingt nach wenigen Tagen ab.', 'Sollte es zu … kommen, würden wir sofort …', 'Habe ich das verständlich erklärt?']
  }
};
