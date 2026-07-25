// Alltagsdeutsch A2 – Lektion 2: Beim Arzt
// deutschoderwas club · Kursmaterial
window.LEKTION = {
  meta: { kurs: 'Alltagsdeutsch A2', nr: 2, titel: 'Beim Arzt', level: 'A2', bild: 'th-arzt', dauer: 'ca. 18 Min' },
  intro: {
    text: 'Den Termin hast du — jetzt sitzt du im Sprechzimmer und der Arzt fragt: „Was fehlt Ihnen?" Hier lernst du, wie du sagst, wo es wehtut, und wie du erzählst, was passiert ist. Das Wichtigste dabei ist die Vergangenheit: das Perfekt.',
    du_lernst: ['Beschwerden beschreiben', 'Körperteile benennen', 'Perfekt mit haben und sein', 'mir tut … weh']
  },
  dialog: {
    bild: 'th-arzt',
    situation: 'Olena Kowal sitzt bei Dr. Berger im Sprechzimmer. Seit drei Tagen hat sie Rückenschmerzen.',
    lines: [
      { sp: 'Dr. Berger', txt: 'Guten Tag, Frau Kowal. Was fehlt Ihnen denn?' },
      { sp: 'Olena', txt: 'Guten Tag, Herr Doktor. Mir tut seit drei Tagen der Rücken weh.' },
      { sp: 'Dr. Berger', txt: 'Ist etwas passiert? Sind Sie gestürzt?' },
      { sp: 'Olena', txt: 'Nein, gestürzt bin ich nicht. Aber am Samstag habe ich einen schweren Schrank getragen.' },
      { sp: 'Dr. Berger', txt: 'Und danach? Haben Sie sich ausgeruht?' },
      { sp: 'Olena', txt: 'Nicht wirklich. Am Sonntag bin ich zwei Stunden spazieren gegangen. Danach ist es schlimmer geworden.' },
      { sp: 'Dr. Berger', txt: 'Tut Ihnen sonst noch etwas weh?' },
      { sp: 'Olena', txt: 'Das linke Bein ein bisschen. Und seit gestern tut mir auch der Kopf weh.' },
      { sp: 'Dr. Berger', txt: 'Ich untersuche Sie gleich. Zum Röntgen müssen Sie erst einmal nicht — Sie bekommen eine Salbe und ein Rezept.' },
      { sp: 'Olena', txt: 'Danke. Die Salbe hole ich gleich in der Apotheke.' }
    ]
  },
  vokabeln: [
    { de: 'der Kopf', em: '🤕', bsp: 'Seit gestern tut mir der Kopf weh.' },
    { de: 'der Rücken', em: '🔙', bsp: 'Mein Rücken ist steif.' },
    { de: 'das Bein', em: '🦵', bsp: 'Das linke Bein tut mir weh.' },
    { de: 'der Hals', em: '🗣️', bsp: 'Der Hals tut beim Schlucken weh.' },
    { de: 'der Bauch', em: '😣', bsp: 'Nach dem Essen tut mir der Bauch weh.' },
    { de: 'weh tun', em: '😖', bsp: 'Mir tut der Rücken weh.' },
    { de: 'die Schmerzen', em: '💢', bsp: 'Ich habe seit drei Tagen Schmerzen.' },
    { de: 'untersuchen', em: '🩺', bsp: 'Der Arzt untersucht mich kurz.' },
    { de: 'das Rezept', em: '📄', bsp: 'Mit dem Rezept gehe ich in die Apotheke.' },
    { de: 'die Salbe', em: '🧴', bsp: 'Die Salbe kommt zweimal am Tag auf den Rücken.' },
    { de: 'die Apotheke', em: '💊', bsp: 'Die Apotheke ist gegenüber vom Bahnhof.' },
    { de: 'stürzen', em: '🤸', bsp: 'Ich bin auf der Treppe gestürzt.' },
    { de: 'sich ausruhen', em: '🛋️', bsp: 'Ruhen Sie sich ein paar Tage aus.' },
    { de: 'die Krankmeldung', em: '📝', bsp: 'Die Krankmeldung schicke ich meiner Firma.' }
  ],
  grammatik: {
    title: 'Grammatik im Kontext',
    blocks: [
      {
        h: 'Perfekt mit haben und sein',
        txt: 'Beim Arzt erzählst du fast alles in der Vergangenheit. Im Gespräch benutzt man dafür das Perfekt: haben oder sein auf Position 2, Partizip II am Satzende.',
        table: [
          ['Infinitiv', 'Perfekt', 'Beispiel'],
          ['tragen', 'hat getragen', 'Ich habe einen Schrank getragen.'],
          ['machen', 'hat gemacht', 'Ich habe Sport gemacht.'],
          ['gehen', 'ist gegangen', 'Ich bin spazieren gegangen.'],
          ['stürzen', 'ist gestürzt', 'Ich bin auf der Treppe gestürzt.'],
          ['werden', 'ist geworden', 'Es ist schlimmer geworden.'],
          ['passieren', 'ist passiert', 'Was ist passiert?']
        ],
        note: '<b>sein</b> nimmst du bei Bewegung von A nach B (gehen, fahren, kommen, stürzen) und bei Veränderung (werden, passieren, aufwachen). Sonst immer <b>haben</b>.'
      },
      {
        h: 'Körperteile mit Dativ: mir tut … weh',
        txt: 'Nicht du hast Schmerzen — der Körperteil tut dir weh. Die Person steht deshalb im Dativ.',
        table: [
          ['Wem?', 'Satz', 'Was tut weh?'],
          ['mir', 'Mir tut der Rücken weh.', 'der Rücken'],
          ['dir', 'Tut dir der Kopf weh?', 'der Kopf'],
          ['ihm / ihr', 'Ihr tut das Bein weh.', 'das Bein'],
          ['Ihnen', 'Tut Ihnen der Hals weh?', 'der Hals'],
          ['uns', 'Uns tun die Füße weh.', 'die Füße (Plural → tun)']
        ],
        note: 'Person im <b>Dativ</b> (mir, dir, ihm, ihr, uns, Ihnen) · Körperteil im <b>Nominativ</b>. Ein Körperteil → tut, mehrere → tun.'
      }
    ]
  },
  uebungen: [
    { typ: 'listen', audio: 'Am Sonntag bin ich zwei Stunden spazieren gegangen.', frage: 'Hör zu: Was hat sie am Sonntag gemacht?', optionen: ['Sie ist spazieren gegangen.', 'Sie ist zwei Stunden Rad gefahren.', 'Sie hat zwei Stunden geschlafen.'], richtig: 0 },
    { typ: 'mc', frage: 'Ich ___ am Samstag einen Schrank getragen.', optionen: ['habe', 'bin', 'hat'], richtig: 0, hinweis: 'Tragen ist keine Bewegung von A nach B — also haben.' },
    { typ: 'mc', frage: 'Ich ___ auf der Treppe gestürzt.', optionen: ['bin', 'habe', 'war'], richtig: 0, hinweis: 'Stürzen beschreibt eine plötzliche Bewegung — also sein.' },
    { typ: 'mc', frage: 'Schmerzen ausdrücken: Welcher Satz ist korrekt?', optionen: ['Mir tut der Kopf weh.', 'Ich tue der Kopf weh.', 'Mich tut der Kopf weh.'], richtig: 0, hinweis: 'Die Person steht im Dativ, der Körperteil im Nominativ.' },
    { typ: 'gapbank', frage: 'Perfekt: haben oder sein?', text: 'Am Samstag ___ ich einen Schrank getragen. Am Sonntag ___ ich spazieren gegangen. Danach ___ es schlimmer geworden.', bank: ['habe', 'bin', 'ist', 'hat', 'sind'], loesung: ['habe', 'bin', 'ist'], hinweis: 'Bewegung und Veränderung nehmen sein, alles andere haben.' },
    { typ: 'order', frage: 'Sortiere den Satz über die Schmerzen!', woerter: ['tut', 'Mir', 'weh', 'der', 'Rücken'], loesung: 'Mir tut der Rücken weh', hinweis: 'Erst die Person im Dativ, dann das Verb, dann der Körperteil.' },
    { typ: 'order', frage: 'Bau die Frage des Arztes!', woerter: ['gestürzt', 'Sind', 'Sie'], loesung: 'Sind Sie gestürzt', hinweis: 'In der Ja-Nein-Frage steht das konjugierte Verb ganz vorne.' },
    { typ: 'match', frage: 'Beim Arzt: Was gehört zusammen?', paare: [['der Rücken', '🔙 der Bereich hinter dem Bauch'], ['der Hals', '🗣️ tut beim Schlucken weh'], ['die Salbe', '🧴 kommt auf die Haut'], ['das Rezept', '📄 damit gehst du in die Apotheke'], ['die Krankmeldung', '📝 die bekommt der Arbeitgeber']] },
    { typ: 'bild', bild: 'th-arzt', frage: 'Du sitzt im Sprechzimmer. Der Arzt fragt: „Was fehlt Ihnen?" Was antwortest du?', optionen: ['Mir tut seit drei Tagen der Rücken weh.', 'Ich habe der Rücken weh.', 'Mein Rücken hat mich weh.', 'Ich bin Rückenschmerzen.'], richtig: 0, hinweis: 'Dativ der Person plus weh tun: Mir tut … weh.' },
    { typ: 'type', frage: 'Erzähl dem Arzt im Perfekt, was passiert ist.', muster: 'Ich bin am Sonntag gestürzt und danach ist es schlimmer geworden.', akzeptiert: ['^ich (bin|habe) .+', 'ich habe .+getragen', 'ich bin .+gestürzt'], hinweis: 'haben oder sein auf Position 2, Partizip II ans Satzende.' }
  ],
  zusammenfassung: {
    kernsaetze: [
      'Mir tut seit drei Tagen der Rücken weh.',
      'Ich habe am Samstag etwas Schweres getragen.',
      'Ich bin gestürzt. – Nein, gestürzt bin ich nicht.',
      'Danach ist es schlimmer geworden.',
      'Bekomme ich ein Rezept? Die Salbe hole ich in der Apotheke.'
    ],
    merke: [
      'Perfekt = <b>haben/sein auf Position 2</b> + <b>Partizip II am Satzende</b>.',
      '<b>sein</b> bei Bewegung und Veränderung: <b>ist</b> gegangen, <b>ist</b> gestürzt, <b>ist</b> geworden, <b>ist</b> passiert.',
      'Beim Schmerz steht die Person im <b>Dativ</b>: <b>Mir</b> tut der Kopf weh — nicht „ich tue".'
    ],
    tipp: 'Beschreibe eine Woche lang jeden Abend in drei Perfektsätzen, was du gemacht hast — laut, im Bad vor dem Spiegel. Achte bewusst darauf, wann du sein statt haben brauchst.'
  },
  sprechen: {
    task: 'Spiel den Arztbesuch: Sag, welcher Körperteil wehtut und seit wann, und erzähl in zwei bis drei Perfektsätzen, was vorher passiert ist. Frag am Ende nach einem Rezept.',
    tipps: ['Mir tut seit … der/die/das … weh.', 'Am Wochenende habe ich … gemacht/getragen.', 'Danach bin ich … gegangen / ist es schlimmer geworden.', 'Bekomme ich ein Rezept oder eine Krankmeldung?']
  }
};
