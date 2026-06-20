/* ============================================================
   deutschoderwas · Teste dein Deutschniveau
   Aufgaben-Itembank A1–C1 (Goethe-/telc-Stil) + Bewertungsschema
   Bewertung nach offiziellem Prinzip (goethe.de / telc.net):
   - pro Modul max. 100 Punkte, bestanden ab 60 % (= 60 Punkte)
   - Notenstufen: 90–100 sehr gut · 80–89 gut · 70–79 befriedigend
     · 60–69 ausreichend · <60 nicht bestanden
   - Einstufung (CEFR): höchste Stufe, auf der ≥60 % erreicht werden,
     solange die nächsthöhere Stufe <60 % bleibt.
   AUDIO-URLs werden nach der KI-Audio-Generierung eingsetzt.
   ============================================================ */
(function () {
  window.NIVEAUTEST = window.NIVEAUTEST || {};

  // Hero: rundes Portrait (Blur-Hintergrund, Deutschland-Ring) + Sprechblase/Fragezeichen.
  window.NIVEAUTEST.HERO_CUTOUT = 'julia-rund.png';
  window.NIVEAUTEST.HERO_PHOTO = 'julia-niveau.jpg';
  window.NIVEAUTEST.HERO_BUBBLE = 'Welches Deutschniveau habe ich eigentlich?';
  // (KI-Illustration als Fallback, falls das Foto fehlt)
  window.NIVEAUTEST.HERO_IMG = 'https://d8j0ntlcm91z4.cloudfront.net/user_38tIQPWpEsaUmk18tYN8mskaaAF/hf_20260620_080132_e735a515-f746-403e-afde-b9d556b5bc74.png';

  // Reihenfolge der Stufen + numerischer Index
  window.NIVEAUTEST.LEVELS = ['A1', 'A2', 'B1', 'B2', 'C1'];

  window.NIVEAUTEST.SCHEME = {
    pass: 60, // Bestehensgrenze in % je Modul (Goethe/telc)
    grades: [
      { min: 90, label: 'sehr gut' },
      { min: 80, label: 'gut' },
      { min: 70, label: 'befriedigend' },
      { min: 60, label: 'ausreichend' },
      { min: 0,  label: 'noch nicht bestanden' }
    ]
  };

  // CEFR-Beschreibungen für das Ergebnis
  window.NIVEAUTEST.LEVEL_INFO = {
    'unter A1': {
      title: 'Absoluter Anfang',
      cefr: '–',
      text: 'Du startest gerade erst – perfekt! Mit den richtigen ersten Schritten kommst du schnell ins Sprechen.',
      tip: 'Starte mit den Grundlagen: Begrüßung, Vorstellung, Zahlen. Im Sprechclub (A2-Gruppe) wirst du sanft abgeholt.'
    },
    'A1': {
      title: 'Anfänger',
      cefr: 'A1',
      text: 'Du verstehst und benutzt einfache, alltägliche Ausdrücke und ganz einfache Sätze. Eine super Basis!',
      tip: 'Bau jetzt Wortschatz und einfache Sätze aus. Der Aussprache- und Wortschatzclub helfen dir, sicherer zu werden.'
    },
    'A2': {
      title: 'Grundlegende Kenntnisse',
      cefr: 'A2',
      text: 'Du verständigst dich in einfachen, routinemäßigen Situationen und kannst über vertraute Themen sprechen.',
      tip: 'Jetzt geht es ums freie Sprechen! Die A2-Gruppe im Sprechclub ist genau dein Niveau.'
    },
    'B1': {
      title: 'Selbstständige Sprachverwendung',
      cefr: 'B1',
      text: 'Du kommst in den meisten Alltagssituationen zurecht und kannst zusammenhängend über Themen sprechen, die dich interessieren.',
      tip: 'Bring deine Fließigkeit aufs nächste Level: Debatten & Rollenspiele im Sprechclub (B1/B2) sind ideal für dich.'
    },
    'B2': {
      title: 'Fortgeschritten',
      cefr: 'B2',
      text: 'Du verstehst komplexere Texte, sprichst spontan und fließend und kannst deinen Standpunkt klar vertreten.',
      tip: 'Feile an Nuancen und Idiomatik. Die B2/C1-Gruppe und die Grammatik-Feinheiten warten auf dich.'
    },
    'C1': {
      title: 'Kompetente Sprachverwendung',
      cefr: 'C1',
      text: 'Wow! Du verstehst anspruchsvolle Texte, sprichst flüssig und nutzt die Sprache wirksam und differenziert.',
      tip: 'Halte dein Niveau hoch und verfeinere den Feinschliff: anspruchsvolle Diskussionen im B2/C1-Sprechclub.'
    }
  };

  // Modul-Namen
  window.NIVEAUTEST.SKILLS = {
    bausteine: { name: 'Sprachbausteine', emoji: '🧩', sub: 'Grammatik & Wortschatz' },
    lesen:     { name: 'Leseverstehen',   emoji: '📖', sub: 'Texte verstehen' },
    hoeren:    { name: 'Hörverstehen',    emoji: '🎧', sub: 'Audio verstehen' }
  };

  // KI-Audioclips (URLs werden nach Generierung eingesetzt)
  var CDN = 'https://d8j0ntlcm91z4.cloudfront.net/user_38tIQPWpEsaUmk18tYN8mskaaAF/';
  window.NIVEAUTEST.AUDIO = {
    a1_lena:       { url: CDN + 'hf_20260620_080101_b5e2a295-ac78-4276-901f-1cef4317bfb1.mp3', script: 'Hallo! Ich heiße Lena. Ich komme aus Spanien und wohne jetzt in Hamburg. Ich bin Studentin und lerne seit einem Jahr Deutsch.' },
    a1_zug:        { url: CDN + 'hf_20260620_080104_b8e094a4-3141-46c7-b639-d8b9fc4c8a29.mp3', script: 'Achtung am Gleis drei. Der Intercity nach München, Abfahrt um halb neun, fährt heute mit fünf Minuten Verspätung ab. Wir bitten um Ihr Verständnis.' },
    a2_apotheke:   { url: CDN + 'hf_20260620_080106_d0bcbed8-16aa-4ff7-a666-d3bbdf566bec.mp3', script: 'Entschuldigung, wo ist die nächste Apotheke? – Gehen Sie hier geradeaus und dann die zweite Straße links. Die Apotheke ist direkt neben dem Supermarkt.' },
    a2_schwimmbad: { url: CDN + 'hf_20260620_080107_70f9e66a-0a8e-4fff-ac26-cef6dca48978.mp3', script: 'Am Samstag war ich mit Freunden im Schwimmbad. Leider hat es am Nachmittag stark geregnet, deshalb sind wir früher nach Hause gegangen.' },
    b1_voicemail:  { url: CDN + 'hf_20260620_080119_d525be4c-34c7-40bd-bb42-750da89b012c.mp3', script: 'Hallo Tom, hier ist Sarah. Du, unser Treffen morgen müssen wir leider verschieben. Mein Chef hat kurzfristig einen Termin angesetzt. Können wir uns stattdessen am Donnerstag sehen? Ruf mich bitte zurück.' },
    b1_radio:      { url: CDN + 'hf_20260620_080121_fb4d8a4f-d084-4cc9-9d2d-21ec1b7e3d6b.mp3', script: 'Und nun die Verkehrsnachrichten. Die Stadt führt ab nächstem Monat ein neues Parksystem ein. In der Innenstadt wird das Parken teurer, dafür sind Busse und Bahnen am Wochenende kostenlos.' },
    b2_homeoffice: { url: CDN + 'hf_20260620_080124_f63e0bfb-b530-4ca9-a4fb-2cb159073378.mp3', script: 'In der heutigen Diskussion ging es um das Homeoffice. Während viele Arbeitnehmer die Flexibilität schätzen, betonen die Arbeitgeber, dass der persönliche Austausch im Büro für die Kreativität unverzichtbar bleibt.' },
    c1_referent:   { url: CDN + 'hf_20260620_080128_3a46887e-12d4-4450-9cc7-5cf23f714eaf.mp3', script: 'Der Referent argumentierte, dass technologische Innovationen zwar kurzfristig Arbeitsplätze gefährden, langfristig jedoch neue Berufsfelder schaffen – vorausgesetzt, es wird konsequent in Bildung investiert.' }
  };

  // ---- Aufgaben ----
  // Felder: id, level, skill, type('choice'), q, options[], answer(Index),
  //         explain, optional: context (Lesetext), audio (Key), quick(true=im Schnelltest)
  window.NIVEAUTEST.ITEMS = [
    /* ===================== A1 ===================== */
    // Sprachbausteine
    { id:'a1b1', level:'A1', skill:'bausteine', quick:true, q:'Wie heißt ___? – Ich heiße Anna.', options:['du','dich','dir','dein'], answer:0, explain:'„Wie heißt du?" – das Personalpronomen im Nominativ ist „du".' },
    { id:'a1b2', level:'A1', skill:'bausteine', quick:true, q:'Ich ___ aus Italien.', options:['komme','kommst','kommt','kommen'], answer:0, explain:'„ich komme" – 1. Person Singular.' },
    { id:'a1b3', level:'A1', skill:'bausteine', q:'Das ist mein Bruder. ___ heißt Max.', options:['Er','Sie','Es','Wir'], answer:0, explain:'„der Bruder" → „er".' },
    { id:'a1b4', level:'A1', skill:'bausteine', quick:true, q:'___ du Kaffee oder Tee?', options:['Möchtest','Möchte','Möchten','Möchtet'], answer:0, explain:'„du möchtest" – 2. Person Singular.' },
    { id:'a1b5', level:'A1', skill:'bausteine', q:'Ich wohne ___ Berlin.', options:['in','an','auf','zu'], answer:0, explain:'Bei Städten/Ländern: „in Berlin".' },
    // Lesen
    { id:'a1l1', level:'A1', skill:'lesen', quick:true, context:'Anna kommt aus Polen. Sie ist 24 Jahre alt und arbeitet als Krankenschwester in einem Krankenhaus in Köln. Am Wochenende spielt sie gern Tennis.', q:'Was ist Annas Beruf?', options:['Krankenschwester','Lehrerin','Ärztin','Studentin'], answer:0, explain:'Im Text: „arbeitet als Krankenschwester".' },
    { id:'a1l2', level:'A1', skill:'lesen', context:'Liebe Maria, ich komme am Freitag um 18 Uhr am Bahnhof an. Kannst du mich abholen? Bis bald, Tom.', q:'Was möchte Tom?', options:['Er möchte abgeholt werden.','Er möchte am Bahnhof arbeiten.','Er kommt am Samstag.','Er möchte Maria nicht sehen.'], answer:0, explain:'„Kannst du mich abholen?" – Tom möchte abgeholt werden.' },
    // Hören
    { id:'a1h1', level:'A1', skill:'hoeren', audio:'a1_lena', quick:true, q:'Woher kommt Lena?', options:['Aus Spanien','Aus Italien','Aus Hamburg','Aus Polen'], answer:0, explain:'„Ich komme aus Spanien."' },
    { id:'a1h2', level:'A1', skill:'hoeren', audio:'a1_zug', q:'Um wie viel Uhr sollte der Zug planmäßig abfahren?', options:['Um halb neun','Um neun Uhr','Um halb acht','Um fünf Uhr'], answer:0, explain:'„Abfahrt um halb neun" (die 5 Minuten sind nur die Verspätung).' },

    /* ===================== A2 ===================== */
    { id:'a2b1', level:'A2', skill:'bausteine', quick:true, q:'Gestern ___ ich ins Kino gegangen.', options:['bin','habe','war','ist'], answer:0, explain:'Perfekt mit Bewegungsverb „gehen" → „sein": „ich bin gegangen".' },
    { id:'a2b2', level:'A2', skill:'bausteine', quick:true, q:'Ich interessiere mich ___ Musik.', options:['für','auf','an','über'], answer:0, explain:'„sich interessieren für" + Akkusativ.' },
    { id:'a2b3', level:'A2', skill:'bausteine', q:'Du ___ heute früher nach Hause gehen.', options:['darfst','darf','dürfen','durftet'], answer:0, explain:'„du darfst" – Modalverb, 2. Person Singular.' },
    { id:'a2b4', level:'A2', skill:'bausteine', quick:true, q:'Ich habe ___ neuen Computer gekauft.', options:['einen','ein','eine','einem'], answer:0, explain:'„der Computer", Akkusativ → „einen neuen Computer".' },
    { id:'a2b5', level:'A2', skill:'bausteine', q:'Wir treffen uns ___ Montag.', options:['am','im','um','zu'], answer:0, explain:'Wochentage: „am Montag".' },
    // Lesen
    { id:'a2l1', level:'A2', skill:'lesen', quick:true, context:'Sehr geehrte Damen und Herren, leider muss der Deutschkurs am Montag ausfallen, da die Lehrerin krank ist. Der Kurs wird am Mittwoch nachgeholt. Mit freundlichen Grüßen, die Sprachschule.', q:'Warum fällt der Kurs am Montag aus?', options:['Die Lehrerin ist krank.','Es ist ein Feiertag.','Die Schule ist geschlossen.','Es gibt zu wenige Teilnehmer.'], answer:0, explain:'„da die Lehrerin krank ist".' },
    { id:'a2l2', level:'A2', skill:'lesen', context:'Zu vermieten: helle 2-Zimmer-Wohnung im Zentrum, 55 m², 650 Euro warm, ab 1. März frei. Haustiere sind leider nicht erlaubt.', q:'Was ist in der Wohnung NICHT erlaubt?', options:['Haustiere','Besuch','Rauchen','Musik'], answer:0, explain:'„Haustiere sind leider nicht erlaubt".' },
    // Hören
    { id:'a2h1', level:'A2', skill:'hoeren', audio:'a2_apotheke', quick:true, q:'Wo ist die Apotheke?', options:['Neben dem Supermarkt','Gegenüber dem Bahnhof','Hinter der Schule','Im Krankenhaus'], answer:0, explain:'„Die Apotheke ist direkt neben dem Supermarkt."' },
    { id:'a2h2', level:'A2', skill:'hoeren', audio:'a2_schwimmbad', q:'Warum sind sie früher nach Hause gegangen?', options:['Weil es stark geregnet hat','Weil das Schwimmbad zu war','Weil sie müde waren','Weil es zu kalt war'], answer:0, explain:'„weil es stark geregnet hat".' },

    /* ===================== B1 ===================== */
    { id:'b1b1', level:'B1', skill:'bausteine', quick:true, q:'Ich freue mich schon ___ das Wochenende.', options:['auf','über','für','an'], answer:0, explain:'„sich freuen auf" (Zukunft) + Akkusativ.' },
    { id:'b1b2', level:'B1', skill:'bausteine', quick:true, q:'Das ist der Mann, ___ ich gestern getroffen habe.', options:['den','der','dem','dessen'], answer:0, explain:'Relativpronomen im Akkusativ (treffen + Akk.) → „den".' },
    { id:'b1b3', level:'B1', skill:'bausteine', q:'Wenn ich mehr Zeit hätte, ___ ich öfter Sport machen.', options:['würde','werde','wurde','habe'], answer:0, explain:'Konjunktiv II (irreal): „würde … machen".' },
    { id:'b1b4', level:'B1', skill:'bausteine', quick:true, q:'Obwohl es regnete, ___ wir trotzdem spazieren.', options:['gingen','gegangen','gehen','zu gehen'], answer:0, explain:'Hauptsatz nach „obwohl"-Satz: Verb „gingen" (Präteritum).' },
    { id:'b1b5', level:'B1', skill:'bausteine', q:'Der Brief muss bis morgen ___ werden.', options:['geschrieben','schreiben','geschrieben hat','schreibt'], answer:0, explain:'Passiv mit Modalverb: „muss … geschrieben werden".' },
    // Lesen
    { id:'b1l1', level:'B1', skill:'lesen', quick:true, context:'Seit drei Jahren engagiere ich mich ehrenamtlich in einer Tierauffangstation. Anfangs war es nur eine Beschäftigung für ein paar Wochenenden, aber inzwischen ist es zu meiner größten Leidenschaft geworden.', q:'Wie hat sich die Tätigkeit für die Person entwickelt?', options:['Aus einer Nebenbeschäftigung wurde eine Leidenschaft.','Sie wurde immer anstrengender.','Sie macht es nur noch am Wochenende.','Sie hat damit aufgehört.'], answer:0, explain:'„Anfangs … nur … Wochenenden, aber inzwischen … größte Leidenschaft".' },
    { id:'b1l2', level:'B1', skill:'lesen', context:'Ich finde, dass Handys in der Schule verboten werden sollten. Sie lenken die Schüler ab und führen oft zu Streit. Trotzdem sollte man in Notfällen telefonieren dürfen.', q:'Welche Ausnahme nennt der Autor?', options:['Telefonieren in Notfällen','Spiele in der Pause','Musik im Unterricht','Fotos im Klassenzimmer'], answer:0, explain:'„Trotzdem sollte man in Notfällen telefonieren dürfen".' },
    // Hören
    { id:'b1h1', level:'B1', skill:'hoeren', audio:'b1_voicemail', quick:true, q:'Was möchte Sarah?', options:['Das Treffen verschieben','Das Treffen ganz absagen','Den Chef treffen','Tom zum Essen einladen'], answer:0, explain:'„unser Treffen … müssen wir leider verschieben".' },
    { id:'b1h2', level:'B1', skill:'hoeren', audio:'b1_radio', q:'Was ist am Wochenende kostenlos?', options:['Busse und Bahnen','Das Parken in der Innenstadt','Der Eintritt ins Museum','Das Fahrrad-Verleihsystem'], answer:0, explain:'„dafür sind Busse und Bahnen am Wochenende kostenlos".' },

    /* ===================== B2 ===================== */
    { id:'b2b1', level:'B2', skill:'bausteine', quick:true, q:'___ des schlechten Wetters fand das Straßenfest statt.', options:['Trotz','Wegen','Während','Statt'], answer:0, explain:'„Trotz" + Genitiv: das Fest fand obwohl des Wetters statt.' },
    { id:'b2b2', level:'B2', skill:'bausteine', quick:true, q:'Er tat so, als ___ er von nichts gewusst.', options:['hätte','hatte','hat','habe'], answer:0, explain:'Irrealer Vergleich „als ob/als" → Konjunktiv II: „als hätte er gewusst".' },
    { id:'b2b3', level:'B2', skill:'bausteine', q:'Je mehr ich übe, ___ sicherer werde ich.', options:['desto','als','wie','dass'], answer:0, explain:'„je …, desto …" (Komparativ-Konstruktion).' },
    { id:'b2b4', level:'B2', skill:'bausteine', quick:true, q:'Das Projekt, ___ Leitung sie übernahm, war ein Erfolg.', options:['dessen','deren','das','dem'], answer:0, explain:'„das Projekt" (Neutrum), Genitiv-Relativpronomen → „dessen Leitung".' },
    { id:'b2b5', level:'B2', skill:'bausteine', q:'Es ist wichtig, dass die Mitarbeiter regelmäßig ___ werden.', options:['informiert','informieren','zu informieren','informierend'], answer:0, explain:'Passiv: „informiert werden".' },
    // Lesen
    { id:'b2l1', level:'B2', skill:'lesen', quick:true, context:'Die Digitalisierung hat den Arbeitsmarkt grundlegend verändert. Während manche Berufe verschwinden, entstehen gleichzeitig völlig neue Tätigkeitsfelder. Entscheidend ist daher die Bereitschaft, sich kontinuierlich weiterzubilden.', q:'Was ist laut Text entscheidend?', options:['Die Bereitschaft zur ständigen Weiterbildung','Dass alte Berufe erhalten bleiben','Eine schnellere Digitalisierung','Mehr freie Zeit für Mitarbeiter'], answer:0, explain:'„Entscheidend ist … die Bereitschaft, sich kontinuierlich weiterzubilden".' },
    { id:'b2l2', level:'B2', skill:'lesen', context:'Dass die neue Software die Arbeit erleichtern soll, mag stimmen. In der Praxis jedoch verbringen die Angestellten nun mehr Zeit mit der Bedienung des Programms als mit ihrer eigentlichen Aufgabe.', q:'Was kritisiert der Text?', options:['Die Software kostet mehr Zeit, als sie spart.','Die Angestellten sind zu langsam.','Die Software ist zu teuer.','Niemand benutzt das Programm.'], answer:0, explain:'Die Angestellten verbringen „mehr Zeit mit der Bedienung … als mit ihrer eigentlichen Aufgabe".' },
    // Hören
    { id:'b2h1', level:'B2', skill:'hoeren', audio:'b2_homeoffice', quick:true, q:'Was betonen die Arbeitgeber?', options:['Der persönliche Austausch im Büro ist wichtig für die Kreativität.','Homeoffice ist immer produktiver.','Flexibilität ist unwichtig.','Mitarbeiter sollten weniger arbeiten.'], answer:0, explain:'„… der persönliche Austausch im Büro für die Kreativität unverzichtbar bleibt".' },

    /* ===================== C1 ===================== */
    { id:'c1b1', level:'C1', skill:'bausteine', quick:true, q:'___ aller Bemühungen scheiterte das Vorhaben.', options:['Ungeachtet','Trotzdem','Obwohl','Dennoch'], answer:0, explain:'„Ungeachtet" + Genitiv (= trotz). „Trotzdem/Dennoch" sind Adverbien, „obwohl" leitet einen Nebensatz ein.' },
    { id:'c1b2', level:'C1', skill:'bausteine', quick:true, q:'Die Maßnahme dürfte kaum Wirkung zeigen, ___ sie konsequent umgesetzt würde.', options:['es sei denn,','sofern','damit','indem'], answer:0, explain:'„es sei denn" = außer wenn; passt zur einschränkenden Bedingung.' },
    { id:'c1b3', level:'C1', skill:'bausteine', q:'Sie nahm die heftige Kritik gelassen ___, ohne sich zu rechtfertigen.', options:['hin','an','auf','wahr'], answer:0, explain:'„etwas hinnehmen" = (widerspruchslos) akzeptieren.' },
    { id:'c1b4', level:'C1', skill:'bausteine', quick:true, q:'Hätte man früher reagiert, ___ der Schaden begrenzt werden können.', options:['hätte','wäre','würde','müsste'], answer:0, explain:'Irrealer Konditional der Vergangenheit: „hätte … begrenzt werden können".' },
    { id:'c1b5', level:'C1', skill:'bausteine', q:'Der Minister sah sich gezwungen, ___ den Vorwürfen Stellung zu nehmen.', options:['zu','gegen','über','an'], answer:0, explain:'„zu etwas Stellung nehmen" – feste Verbindung mit „zu".' },
    // Lesen
    { id:'c1l1', level:'C1', skill:'lesen', quick:true, context:'Der vorliegende Befund legt nahe, dass ökonomische Anreize allein nicht ausreichen, um nachhaltiges Verhalten zu fördern. Vielmehr bedarf es eines kulturellen Wandels, der ökologisches Handeln als selbstverständlich erscheinen lässt.', q:'Welche Schlussfolgerung zieht der Autor?', options:['Neben finanziellen Anreizen ist ein kultureller Wandel nötig.','Finanzielle Anreize sind völlig wirkungslos.','Nachhaltiges Verhalten lässt sich nicht beeinflussen.','Nur Verbote führen zu nachhaltigem Verhalten.'], answer:0, explain:'„… Anreize allein nicht ausreichen … Vielmehr bedarf es eines kulturellen Wandels".' },
    { id:'c1l2', level:'C1', skill:'lesen', context:'Man kann der Regierung kaum vorwerfen, sie habe untätig zugesehen; ob die ergriffenen Maßnahmen jedoch zielführend waren, bleibt fraglich.', q:'Wie bewertet der Autor das Handeln der Regierung?', options:['Sie war nicht untätig, aber der Erfolg ist ungewiss.','Sie hat völlig versagt.','Ihre Maßnahmen waren eindeutig erfolgreich.','Sie hat nichts unternommen.'], answer:0, explain:'„kaum vorwerfen, … untätig" (= sie tat etwas), aber „ob … zielführend … bleibt fraglich".' },
    // Hören
    { id:'c1h1', level:'C1', skill:'hoeren', audio:'c1_referent', quick:true, q:'Unter welcher Bedingung entstehen laut Referent neue Berufsfelder?', options:['Wenn konsequent in Bildung investiert wird','Wenn Innovationen gestoppt werden','Wenn Arbeitsplätze abgebaut werden','Wenn die Löhne sinken'], answer:0, explain:'„… neue Berufsfelder schaffen – vorausgesetzt, es wird konsequent in Bildung investiert".' }
  ];
})();
