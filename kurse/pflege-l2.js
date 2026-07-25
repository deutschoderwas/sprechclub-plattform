// Deutsch für die Pflege – Lektion 2: Die Körperpflege — mit dem Bewohner sprechen
// deutschoderwas club · Kursmaterial
window.LEKTION = {
  meta: { kurs: 'Deutsch für die Pflege', nr: 2, titel: 'Die Körperpflege — mit dem Bewohner sprechen', level: 'B1–B2', bild: 'pflege-l1', dauer: 'ca. 20 Min' },
  intro: {
    text: 'Bei der Körperpflege kommst du Menschen sehr nah — näher, als es sonst im Leben je passiert. Genau deshalb entscheidet dein Ton darüber, ob jemand mitmacht oder dichtmacht. Hier lernst du, wie du Anweisungen so formulierst, dass sie nach Angebot klingen und nicht nach Befehl.',
    du_lernst: ['Imperativ in der Sie-Form', 'Anweisungen abschwächen', 'Modalverben für höfliche Angebote', 'Wortschatz rund um die Morgenpflege']
  },
  dialog: {
    bild: 'pflege-l1',
    situation: 'Morgenpflege im Seniorenheim Lindenhof, Zimmer 7. Pflegefachkraft Amir will Herrn Waldmann beim Waschen unterstützen — der hat schlecht geschlafen.',
    lines: [
      { sp: 'Amir', txt: 'Guten Morgen, Herr Waldmann. Haben Sie ein bisschen schlafen können?' },
      { sp: 'Herr Waldmann', txt: 'Ging so. Die Nacht war lang.' },
      { sp: 'Amir', txt: 'Das tut mir leid. Ich würde Sie jetzt gern beim Waschen unterstützen — ist Ihnen das recht?' },
      { sp: 'Herr Waldmann', txt: 'Muss das denn jetzt sofort sein? Ich bin doch noch gar nicht richtig wach.' },
      { sp: 'Amir', txt: 'Wir haben Zeit. Trinken Sie ruhig erst Ihren Kaffee. Das Fenster mache ich schon mal zu, es zieht ein bisschen.' },
      { sp: 'Amir', txt: 'So. Und jetzt setzen Sie sich bitte ganz langsam auf die Bettkante — ich halte Sie fest.' },
      { sp: 'Herr Waldmann', txt: 'Langsam! Mir wird schwindelig.' },
      { sp: 'Amir', txt: 'Dann bleiben wir einen Moment einfach sitzen. Sagen Sie mir Bescheid, wenn es wieder geht.' },
      { sp: 'Herr Waldmann', txt: 'Geht schon. Das Gesicht wasche ich mir aber selber.' },
      { sp: 'Amir', txt: 'Sehr gern, machen Sie das. Ich reiche Ihnen den Waschlappen — und den Rücken übernehme ich, ja?' }
    ]
  },
  vokabeln: [
    { de: 'Ist Ihnen das recht?', em: '🙂', bsp: 'höfliche Rückfrage vor jedem Handgriff' },
    { de: 'Ich würde Sie gern unterstützen.', em: '🤝', bsp: 'klingt nach Angebot, nicht nach Befehl' },
    { de: 'der Waschlappen', em: '🧽', bsp: 'Ich reiche Ihnen den Waschlappen.' },
    { de: 'die Waschschüssel', em: '🪣', bsp: 'Die Waschschüssel steht auf dem Nachttisch.' },
    { de: 'die Wassertemperatur', em: '🌡️', bsp: 'Ist Ihnen das Wasser warm genug?' },
    { de: 'die Bettkante', em: '🛏️', bsp: 'Setzen Sie sich bitte auf die Bettkante.' },
    { de: 'sich aufsetzen', em: '🧍', bsp: 'Setzen Sie sich ganz langsam auf.' },
    { de: 'schwindelig', em: '😵', bsp: 'Mir wird schwindelig.' },
    { de: 'Bescheid sagen', em: '🗣️', bsp: 'Sagen Sie mir Bescheid, wenn es zu kalt ist.' },
    { de: 'die Intimpflege', em: '🚿', bsp: 'Ich mache jetzt die Intimpflege, ja?' },
    { de: 'abtrocknen', em: '🧺', bsp: 'Ich trockne Sie gut ab, damit Sie nicht frieren.' },
    { de: 'eincremen', em: '🧴', bsp: 'Soll ich Ihnen die Beine eincremen?' },
    { de: 'die Rötung', em: '🔴', bsp: 'Am Steiß ist eine kleine Rötung.' },
    { de: 'frische Wäsche', em: '👕', bsp: 'Ich lege Ihnen frische Wäsche raus.' },
    { de: 'die Zahnprothese', em: '🦷', bsp: 'Möchten Sie die Zahnprothese selbst einsetzen?' },
    { de: 'Machen Sie so viel wie möglich selbst.', em: '💪', bsp: 'Ressourcen fördern statt alles abnehmen' }
  ],
  grammatik: {
    title: 'Grammatik im Berufskontext',
    blocks: [
      {
        h: 'Imperativ in der Sie-Form',
        txt: 'Die Sie-Form ist einfach: Verb zuerst, dann „Sie". Bei reflexiven Verben kommt „sich" direkt danach.',
        table: [
          ['Infinitiv', 'Imperativ (Sie)', 'Im Zimmer gesagt'],
          ['kommen', 'Kommen Sie', 'Kommen Sie bitte langsam hoch.'],
          ['sich setzen', 'Setzen Sie sich', 'Setzen Sie sich bitte auf die Bettkante.'],
          ['sich festhalten', 'Halten Sie sich fest', 'Halten Sie sich am Griff fest.'],
          ['sein', 'Seien Sie', 'Seien Sie ganz vorsichtig.'],
          ['sagen', 'Sagen Sie', 'Sagen Sie mir Bescheid, wenn es weh tut.']
        ],
        note: 'Nur „sein" ist unregelmäßig: <b>Seien Sie</b>. Alles andere ist Infinitiv + Sie.'
      },
      {
        h: 'Anweisungen kleiner machen',
        txt: 'Ein nackter Imperativ klingt im Zimmer schnell nach Kommando. Drei Werkzeuge machen ihn weich — Wörtchen einbauen, Modalverb nutzen oder eine Frage daraus machen:',
        table: [
          ['Hart', 'Weich', 'Werkzeug'],
          ['Drehen Sie sich um.', 'Drehen Sie sich bitte mal kurz zur Seite.', 'bitte · mal · kurz'],
          ['Ich wasche Ihnen jetzt den Rücken.', 'Darf ich Ihnen den Rücken waschen?', 'Modalverb als Frage'],
          ['Ziehen Sie den Arm hoch.', 'Können Sie den Arm ein Stück heben?', 'können statt Imperativ'],
          ['Ich creme Sie ein.', 'Möchten Sie, dass ich Sie eincreme?', 'Wunsch erfragen'],
          ['Stehen Sie auf.', 'Wir stehen jetzt zusammen auf, ja?', 'wir-Form plus Rückfrage']
        ],
        note: '<b>mal</b> und <b>kurz</b> kosten nichts und nehmen jeder Anweisung die Schärfe. „Drehen Sie sich mal kurz" klingt nach zwei Sekunden Aufwand — „Drehen Sie sich um" nach einer Anordnung.'
      }
    ]
  },
  uebungen: [
    { typ: 'listen', audio: 'Setzen Sie sich bitte ganz langsam auf die Bettkante.', frage: 'Hör zu: Was soll der Bewohner tun?', optionen: ['sich langsam auf die Bettkante setzen', 'sich langsam ins Bett legen', 'sich am Bettgitter festhalten'], richtig: 0 },
    { typ: 'mc', frage: 'Welcher Satz passt am besten in ein Zimmer, in dem jemand gerade erst aufwacht?', optionen: ['Ich würde Sie jetzt gern beim Waschen unterstützen — ist Ihnen das recht?', 'So, waschen wir jetzt mal.', 'Ich muss Sie jetzt waschen, ich habe noch acht Zimmer.'], richtig: 0, hinweis: 'Angebot plus Rückfrage lässt dem Bewohner die Entscheidung — das ist der Kern von Höflichkeit in der Pflege.' },
    { typ: 'bild', bild: 'pflege-l1', frage: 'Du betrittst das Zimmer zur Morgenpflege. Womit fängst du an?', optionen: ['Begrüßen, vorstellen, was du vorhast ankündigen', 'Sofort die Bettdecke zurückschlagen', 'Erst das Fenster öffnen und dann anfangen'], richtig: 0, hinweis: 'Vor jedem Handgriff kommt die Ankündigung. Wer weiß, was gleich passiert, macht mit.' },
    { typ: 'gapbank', frage: 'Setz die richtigen Imperativformen ein.', text: '___ Sie sich bitte ganz langsam auf. ___ Sie sich am Griff fest. Und ___ Sie ganz vorsichtig.', bank: ['Setzen', 'Halten', 'seien', 'Stehen', 'Drehen'], loesung: ['Setzen', 'Halten', 'seien'], hinweis: 'Bei „sein" heißt der Imperativ <b>seien Sie</b> — das ist die einzige unregelmäßige Form.' },
    { typ: 'match', frage: 'Handgriff und Satz — was gehört zusammen?', paare: [['Wassertemperatur prüfen', '🌡️ Ist Ihnen das Wasser warm genug?'], ['Rücken waschen', '🧽 Darf ich Ihnen den Rücken waschen?'], ['Beine eincremen', '🧴 Möchten Sie, dass ich Sie eincreme?'], ['Zur Seite drehen', '🔄 Drehen Sie sich bitte mal kurz zur Seite.'], ['Rötung entdeckt', '🔴 Am Steiß ist eine kleine Rötung.']] },
    { typ: 'order', frage: 'Bau die höfliche Bitte!', woerter: ['sich', 'kurz', 'Drehen', 'zur', 'bitte', 'Seite', 'Sie'], loesung: 'Drehen Sie sich bitte kurz zur Seite', hinweis: 'Verb – Sie – sich – bitte – Rest.' },
    { typ: 'mc', frage: 'Herr Waldmann sagt: „Muss das denn jetzt sofort sein?" Was antwortest du?', optionen: ['Wir haben Zeit. Trinken Sie ruhig erst Ihren Kaffee.', 'Ja, leider, ich bin im Zeitplan.', 'Sie müssen sowieso gewaschen werden.'], richtig: 0, hinweis: 'Widerstand ist meistens ein Tempoproblem. Wer Zeit anbietet, bekommt Mitarbeit zurück.' },
    { typ: 'mc', frage: 'Welches Wort macht eine Anweisung am schnellsten weicher?', optionen: ['mal', 'sofort', 'endlich'], richtig: 0, hinweis: 'Modalpartikeln wie <b>mal</b> und <b>kurz</b> verkleinern die Aufgabe — der Satz klingt nach wenig Aufwand.' },
    { typ: 'type', frage: 'Der Bewohner soll den Arm heben, damit du die Achsel waschen kannst. Formuliere es höflich.', muster: 'Können Sie den Arm bitte mal ein Stück heben?', akzeptiert: ['können sie', 'könnten sie', 'würden sie', 'heben sie bitte', 'darf ich'], hinweis: 'Mach aus dem Imperativ eine Frage mit <b>können</b>, <b>könnten</b> oder <b>würden</b> — oder bau wenigstens „bitte mal" ein.' },
    { typ: 'type', frage: 'Du willst mit der Intimpflege beginnen. Kündige es an und frag um Erlaubnis.', muster: 'Ich würde jetzt gern die Intimpflege machen. Ist Ihnen das recht?', akzeptiert: ['ist ihnen das recht', 'darf ich', 'ich würde gern', 'wäre es ihnen recht', 'einverstanden'], hinweis: 'Erst ankündigen, dann fragen. Ohne Ankündigung wird jeder Handgriff als Übergriff erlebt.' }
  ],
  zusammenfassung: {
    kernsaetze: [
      'Ich würde Sie jetzt gern beim Waschen unterstützen — ist Ihnen das recht?',
      'Setzen Sie sich bitte ganz langsam auf, ich halte Sie fest.',
      'Sagen Sie mir Bescheid, wenn es zu kalt oder zu schnell wird.',
      'Drehen Sie sich bitte mal kurz zur Seite.',
      'Darf ich Ihnen den Rücken waschen? Das Gesicht machen Sie selbst.'
    ],
    merke: [
      '<b>Imperativ Sie-Form</b> = Infinitiv + Sie. Einzige Ausnahme: <b>Seien Sie</b>.',
      'Drei Weichmacher: <b>bitte · mal · kurz</b>. Sie kosten eine Sekunde und retten das ganze Gespräch.',
      'Aus jedem Befehl kann eine Frage werden: <b>Darf ich …? · Können Sie …? · Möchten Sie, dass ich …?</b>'
    ],
    tipp: 'Nimm dir für diese Woche einen einzigen Satz vor: „Ist Ihnen das recht?" Sag ihn bei jedem Bewohner einmal vor dem ersten Handgriff. Du wirst merken, wie viel weniger Abwehr dir entgegenkommt — und der Satz sitzt nach drei Tagen von allein.'
  },
  sprechen: {
    task: 'Sprich eine komplette Morgenpflege durch, so wie du sie im Zimmer sagen würdest: begrüßen, ankündigen, um Erlaubnis fragen, jeden Handgriff vorher benennen, am Ende nachfragen, ob alles gut war.',
    tipps: ['Guten Morgen, Herr/Frau … — haben Sie gut geschlafen?', 'Ich würde Sie jetzt gern beim Waschen unterstützen. Ist Ihnen das recht?', 'Drehen Sie sich bitte mal kurz zur Seite, ich halte Sie.', 'Sagen Sie Bescheid, wenn Ihnen das Wasser zu kalt ist.']
  }
};
