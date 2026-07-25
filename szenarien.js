/* deutschoderwas club — Ernstfall-Szenarien
   Jedes Szenario ist eine Mission: Rolle · Ziel · Hindernis · Erfolgskriterium.
   Ohne Hindernis kein Aushandeln — ohne Aushandeln kein Sprachfortschritt.        */
window.SZENARIEN = [
  {
    id: 'arzttermin', bild: 'sz-arzttermin', kat: 'alltag', lvl: 'A2–B1', dauer: '5–8 Min',
    titel: 'Arzttermin am Telefon',
    kurz: 'Telefonieren ohne Mimik — die Angstsituation Nummer eins.',
    rolle: 'Du hast seit Tagen starke Rückenschmerzen und rufst in einer Hausarztpraxis an.',
    ziel: 'Vereinbare einen Termin in dieser oder nächster Woche.',
    hindernis: 'Die Praxis hat erst in sechs Wochen einen regulären Termin frei. Du musst nach einer Akutsprechstunde fragen oder erklären, warum es dringend ist.',
    erfolg: 'Du hast einen konkreten Tag und eine Uhrzeit — und weißt, was du mitbringen musst.',
    redemittel: [
      'Guten Tag, mein Name ist … Ich hätte gern einen Termin.',
      'Ich habe seit … starke Schmerzen.',
      'Geht es auch früher? Haben Sie eine Akutsprechstunde?',
      'Was muss ich mitbringen?',
      'Können Sie das bitte wiederholen?'
    ],
    woerter: ['der Termin', 'die Beschwerden', 'dringend', 'die Sprechstunde', 'die Versichertenkarte', 'die Überweisung']
  },
  {
    id: 'beimarzt', bild: 'medizin-l1', kat: 'alltag', lvl: 'A2–B2', dauer: '6–10 Min',
    titel: 'Beim Arzt: Beschwerden schildern',
    kurz: 'Wenn du falsch beschreibst, wird falsch behandelt.',
    rolle: 'Du sitzt beim Arzt. Du hast seit einer Woche Kopfschmerzen und schläfst schlecht.',
    ziel: 'Beschreibe deine Beschwerden so genau, dass der Arzt dich versteht.',
    hindernis: 'Der Arzt fragt nach Details, die du nicht vorbereitet hast: Seit wann genau? Wie stark auf einer Skala von 1 bis 10? Nimmst du Medikamente?',
    erfolg: 'Du hast Ort, Dauer, Art und Stärke der Schmerzen genannt und Rückfragen beantwortet.',
    redemittel: [
      'Ich habe seit … Schmerzen.',
      'Der Schmerz ist stechend / dumpf / drückend.',
      'Auf einer Skala von eins bis zehn würde ich sagen …',
      'Ich nehme regelmäßig … ein.',
      'Was bedeutet das genau?'
    ],
    woerter: ['die Schmerzen', 'stechend', 'dumpf', 'die Übelkeit', 'das Medikament', 'die Vorerkrankung']
  },
  {
    id: 'behoerde', bild: 'sz-behoerde', kat: 'alltag', lvl: 'B1–B2', dauer: '8–12 Min',
    titel: 'Auf der Behörde',
    kurz: 'Amtsdeutsch verstehen — und trotzdem bekommen, was du brauchst.',
    rolle: 'Du bist bei der Ausländerbehörde und willst deinen Aufenthaltstitel verlängern.',
    ziel: 'Kläre, welche Unterlagen fehlen und wie es weitergeht.',
    hindernis: 'Eine Bescheinigung fehlt, die Frist läuft in zwei Wochen ab, und der Sachbearbeiter spricht schnell und im Amtsdeutsch.',
    erfolg: 'Du weißt genau, welches Dokument fehlt, bis wann du es einreichen musst und wie.',
    redemittel: [
      'Ich möchte meinen Aufenthaltstitel verlängern.',
      'Entschuldigung, könnten Sie bitte etwas langsamer sprechen?',
      'Habe ich das richtig verstanden: Ich brauche …?',
      'Bis wann muss ich das einreichen?',
      'Kann ich das auch per Post schicken?'
    ],
    woerter: ['der Antrag', 'die Bescheinigung', 'die Frist', 'einreichen', 'der Nachweis', 'zuständig']
  },
  {
    id: 'krankmeldung', bild: 'sz-arzttermin', kat: 'beruf', lvl: 'A2–B1', dauer: '3–5 Min',
    titel: 'Krankmeldung beim Arbeitgeber',
    kurz: 'Kurz, häufig, sofort anwendbar — der ideale Einstieg.',
    rolle: 'Du bist krank und rufst morgens früh bei deiner Vorgesetzten an.',
    ziel: 'Melde dich krank und kläre, was mit deiner Schicht passiert.',
    hindernis: 'Deine Vorgesetzte fragt, wie lange du ausfällst, und bittet dich, selbst Ersatz für deine Schicht zu suchen.',
    erfolg: 'Die Krankmeldung ist angekommen, und ihr habt geklärt, wann du die Bescheinigung bringst.',
    redemittel: [
      'Guten Morgen, hier ist … Ich kann heute leider nicht kommen.',
      'Ich bin krank und war beim Arzt.',
      'Ich schicke Ihnen die Krankmeldung noch heute.',
      'Ich melde mich, sobald ich mehr weiß.',
      'Es tut mir leid für die kurzfristige Absage.'
    ],
    woerter: ['die Krankmeldung', 'die Arbeitsunfähigkeitsbescheinigung', 'die Schicht', 'ausfallen', 'kurzfristig', 'sich melden']
  },
  {
    id: 'wohnung', bild: 'sz-wohnung', kat: 'alltag', lvl: 'B1–B2', dauer: '6–10 Min',
    titel: 'Wohnungsbesichtigung',
    kurz: 'Höflich fragen, aber nichts übersehen.',
    rolle: 'Du besichtigst eine Wohnung, die dir gefällt. Es sind viele Bewerber da.',
    ziel: 'Stelle die wichtigsten Fragen und hinterlasse einen guten Eindruck.',
    hindernis: 'Du entdeckst Feuchtigkeit an der Wand. Du musst es ansprechen, ohne unhöflich zu wirken oder die Chance zu verlieren.',
    erfolg: 'Du hast Miete, Nebenkosten und Kaution geklärt und den Mangel angesprochen.',
    redemittel: [
      'Wie hoch sind die Nebenkosten?',
      'Ist die Kaution drei Kaltmieten?',
      'Mir ist hier etwas aufgefallen — könnten Sie mir das erklären?',
      'Wäre es möglich, das vor dem Einzug zu reparieren?',
      'Wann könnte ich einziehen?'
    ],
    woerter: ['die Kaltmiete', 'die Nebenkosten', 'die Kaution', 'der Mangel', 'die Feuchtigkeit', 'der Einzug']
  },
  {
    id: 'bewerbung', bild: 'sz-bewerbung', kat: 'beruf', lvl: 'B1–C1', dauer: '10–15 Min',
    titel: 'Vorstellungsgespräch',
    kurz: 'Direkter wirtschaftlicher Nutzen — hier zahlt sich jede Übung aus.',
    rolle: 'Du bewirbst dich auf eine Stelle in deinem Beruf.',
    ziel: 'Stelle dich vor, nenne deine Stärken und beantworte die kritischen Fragen.',
    hindernis: 'Man fragt nach einer Lücke in deinem Lebenslauf und nach deiner Gehaltsvorstellung — beides unangenehm.',
    erfolg: 'Du hast dich vorgestellt, die Lücke erklärt und eine Gehaltsspanne genannt.',
    redemittel: [
      'Ich habe … Jahre als … gearbeitet.',
      'Meine Stärke ist …, das zeigt sich zum Beispiel darin, dass …',
      'In dieser Zeit habe ich … — deshalb war ich nicht berufstätig.',
      'Meine Gehaltsvorstellung liegt zwischen … und … Euro.',
      'Darf ich dazu eine Rückfrage stellen?'
    ],
    woerter: ['die Bewerbung', 'die Stelle', 'die Erfahrung', 'die Stärke', 'die Gehaltsvorstellung', 'die Anerkennung']
  },
  {
    id: 'reklamation', bild: 'sz-reklamation', kat: 'alltag', lvl: 'A2–B1', dauer: '5–8 Min',
    titel: 'Reklamation im Geschäft',
    kurz: 'Beharren, ohne unhöflich zu werden — hochübertragbar.',
    rolle: 'Du hast vor zwei Wochen ein Gerät gekauft. Es funktioniert nicht mehr.',
    ziel: 'Bekomme Ersatz, Reparatur oder dein Geld zurück.',
    hindernis: 'Der Verkäufer sagt zuerst, das sei ein Bedienfehler und nicht die Schuld des Geschäfts.',
    erfolg: 'Du hast höflich widersprochen und eine Lösung vereinbart.',
    redemittel: [
      'Ich möchte das hier reklamieren.',
      'Das Gerät funktioniert seit gestern nicht mehr.',
      'Hier ist der Kassenbon.',
      'Das sehe ich anders — ich habe es genau nach Anleitung benutzt.',
      'Was können Sie mir anbieten?'
    ],
    woerter: ['reklamieren', 'der Kassenbon', 'die Garantie', 'der Umtausch', 'defekt', 'die Rückerstattung']
  },
  {
    id: 'restaurant', bild: 'sz-restaurant', kat: 'alltag', lvl: 'A1–A2', dauer: '4–6 Min',
    titel: 'Im Restaurant bestellen',
    kurz: 'Dein erstes Erfolgserlebnis auf Deutsch.',
    rolle: 'Du sitzt mit einer Freundin im Restaurant.',
    ziel: 'Bestelle Essen und Getränke und bitte am Ende um die Rechnung.',
    hindernis: 'Dein Wunschgericht ist aus, und du hast eine Unverträglichkeit, die du erklären musst.',
    erfolg: 'Du hast bestellt, den Sonderwunsch erklärt und getrennt bezahlt.',
    redemittel: [
      'Ich hätte gern …',
      'Was können Sie empfehlen?',
      'Ist da … drin? Ich vertrage kein …',
      'Könnten wir bitte getrennt zahlen?',
      'Die Rechnung, bitte.'
    ],
    woerter: ['die Speisekarte', 'die Vorspeise', 'das Hauptgericht', 'die Rechnung', 'getrennt zahlen', 'die Unverträglichkeit']
  },
  {
    id: 'unterwegs', bild: 'sz-bahnhof', kat: 'alltag', lvl: 'A1–A2', dauer: '4–6 Min',
    titel: 'Unterwegs: Ticket & Verspätung',
    kurz: 'Durchsagen verstehen — unter echten Bedingungen.',
    rolle: 'Du stehst am Bahnhof. Dein Zug hat Verspätung und du verpasst den Anschluss.',
    ziel: 'Finde heraus, wie du trotzdem ans Ziel kommst.',
    hindernis: 'Die Durchsage ist schwer zu verstehen, und der Mitarbeiter spricht schnell.',
    erfolg: 'Du kennst Gleis, Uhrzeit und Umstieg deiner neuen Verbindung.',
    redemittel: [
      'Entschuldigung, ich habe die Durchsage nicht verstanden.',
      'Ich muss nach … — welchen Zug nehme ich jetzt?',
      'Von welchem Gleis fährt er ab?',
      'Muss ich umsteigen?',
      'Gilt mein Ticket auch für diesen Zug?'
    ],
    woerter: ['die Verspätung', 'der Anschluss', 'das Gleis', 'umsteigen', 'die Durchsage', 'die Verbindung']
  },
  {
    id: 'uebergabe', bild: 'pflege-l1', kat: 'pflege', lvl: 'B2', dauer: '8–12 Min',
    titel: 'Schichtübergabe',
    kurz: 'Verdichtete Fachsprache unter Zeitdruck — prüfungsnah.',
    rolle: 'Du übergibst am Ende deiner Schicht drei Patienten an die Kollegin.',
    ziel: 'Übergib strukturiert: Person, Zustand, Verlauf, offene Aufgaben.',
    hindernis: 'Deine Kollegin fragt gezielt nach: Wie hoch war der Blutdruck? Wann genau wurde das Schmerzmittel gegeben?',
    erfolg: 'Alle drei Patienten sind vollständig übergeben, alle Rückfragen beantwortet.',
    redemittel: [
      'Zimmer …, Frau/Herr …, … Jahre, nach …',
      'Der Allgemeinzustand ist stabil / reduziert.',
      'Sie wurde zweimal mobilisiert.',
      'Der Verband wurde heute Morgen gewechselt.',
      'Bitte heute Abend noch …'
    ],
    woerter: ['die Übergabe', 'der Allgemeinzustand', 'die Vitalzeichen', 'mobilisieren', 'reizlos', 'die Flüssigkeitsbilanz']
  },
  {
    id: 'angehoerige', bild: 'sz-angehoerige', kat: 'pflege', lvl: 'B2–C1', dauer: '10–15 Min',
    titel: 'Angehörigengespräch',
    kurz: 'Der schwierigste Moment im Pflegealltag.',
    rolle: 'Du bist im Spätdienst. Die Tochter einer Patientin spricht dich aufgebracht an.',
    ziel: 'Nimm die Sorge ernst, erkläre sachlich und beruhige die Situation.',
    hindernis: 'Die Tochter macht dir Vorwürfe, unterbricht dich und fordert sofort den Arzt.',
    erfolg: 'Das Gespräch ist ruhig beendet, ihr habt ein konkretes weiteres Vorgehen vereinbart.',
    redemittel: [
      'Ich verstehe, dass Sie sich Sorgen machen.',
      'Darf ich Ihnen kurz erklären, wie der Tag verlaufen ist?',
      'Das kann ich leider nicht entscheiden — aber ich gebe es weiter.',
      'Ich notiere das und informiere die Ärztin.',
      'Wollen wir vereinbaren, dass ich Sie morgen anrufe?'
    ],
    woerter: ['die Sorge', 'nachvollziehen', 'weitergeben', 'das Vorgehen', 'zuständig', 'die Rückmeldung']
  },
  {
    id: 'arztruf', bild: 'sz-arztruf', kat: 'pflege', lvl: 'B2', dauer: '6–10 Min',
    titel: 'Telefonat mit der Ärztin',
    kurz: 'Telefonangst plus Fachsprache plus Hierarchie.',
    rolle: 'Der Zustand einer Patientin hat sich verschlechtert. Du rufst die diensthabende Ärztin an.',
    ziel: 'Melde die Veränderung präzise und hol dir eine Anordnung.',
    hindernis: 'Die Ärztin ist im Stress, unterbricht dich und will nur die relevanten Werte hören.',
    erfolg: 'Du hast strukturiert berichtet und eine klare Anordnung erhalten und wiederholt.',
    redemittel: [
      'Ich rufe an wegen Frau … aus Zimmer …',
      'Der Blutdruck ist auf … gefallen, der Puls liegt bei …',
      'Seit etwa … Minuten klagt sie über …',
      'Was soll ich jetzt tun?',
      'Ich wiederhole zur Sicherheit: …'
    ],
    woerter: ['die Anordnung', 'der Zustand', 'sich verschlechtern', 'die Werte', 'engmaschig', 'dokumentieren']
  },
  {
    id: 'anamnese', bild: 'medizin-l1', kat: 'medizin', lvl: 'B2–C1', dauer: '10–15 Min',
    titel: 'Anamnesegespräch führen',
    kurz: 'Kern der Fachsprachprüfung.',
    rolle: 'Du bist Ärztin oder Arzt in der Notaufnahme. Ein Patient kommt mit Brustschmerzen.',
    ziel: 'Führe eine vollständige Anamnese mit allen sieben W-Fragen.',
    hindernis: 'Der Patient antwortet in Laiensprache, weicht ab und erzählt Nebensächliches. Du musst freundlich zurückführen.',
    erfolg: 'Ort, Zeit, Charakter, Stärke, Ausstrahlung, Auslöser und Begleitsymptome sind erfasst.',
    redemittel: [
      'Was führt Sie heute zu uns?',
      'Könnten Sie den Schmerz genauer beschreiben?',
      'Seit wann bestehen die Beschwerden?',
      'Strahlt der Schmerz irgendwohin aus?',
      'Sind Vorerkrankungen bekannt?'
    ],
    woerter: ['die Anamnese', 'die Ausstrahlung', 'intermittierend', 'die Vorerkrankung', 'die Medikation', 'die Begleitsymptomatik']
  },
  {
    id: 'dolmetschen', bild: 'sz-arztruf', kat: 'medizin', lvl: 'C1', dauer: '10–15 Min',
    titel: 'Fachsprache in Laiensprache übersetzen',
    kurz: 'Genau das wird in der Fachsprachprüfung geprüft.',
    rolle: 'Du musst einer Patientin einen Befund erklären, den die Kollegin gerade fachsprachlich geschildert hat.',
    ziel: 'Übersetze den Befund in verständliche Alltagssprache — ohne etwas wegzulassen.',
    hindernis: 'Die Patientin ist verunsichert und fragt mehrfach nach. Fachbegriffe helfen ihr nicht weiter.',
    erfolg: 'Die Patientin kann in eigenen Worten wiedergeben, was sie hat und was jetzt passiert.',
    redemittel: [
      'Das bedeutet in einfachen Worten …',
      'Man könnte sagen, dass …',
      'Ich erkläre es Ihnen gern noch einmal anders.',
      'Haben Sie dazu noch Fragen?',
      'Können Sie mir kurz wiedergeben, was Sie verstanden haben?'
    ],
    woerter: ['der Befund', 'die Diagnose', 'gutartig', 'die Kontrolle', 'ambulant', 'die Nachsorge']
  },
  {
    id: 'smalltalk', bild: 'sz-smalltalk', kat: 'beruf', lvl: 'A2–B1', dauer: '5–8 Min',
    titel: 'Small Talk mit Kollegen',
    kurz: 'Entscheidet über Integration — und wird meist vernachlässigt.',
    rolle: 'Du bist neu im Team und stehst in der Pause in der Teeküche.',
    ziel: 'Führe ein lockeres Gespräch und lerne jemanden näher kennen.',
    hindernis: 'Es entsteht eine Pause im Gespräch, und du wirst nach etwas Privatem gefragt, das du nicht erzählen möchtest.',
    erfolg: 'Das Gespräch lief flüssig, du hast höflich eine Grenze gesetzt und eine Frage zurückgestellt.',
    redemittel: [
      'Und, wie war dein Wochenende?',
      'Bist du schon lange hier im Team?',
      'Das erzähle ich ein andermal — aber sag mal, …',
      'Ach, wirklich? Das wusste ich gar nicht.',
      'Wir sehen uns nachher!'
    ],
    woerter: ['die Pause', 'das Wochenende', 'übrigens', 'eigentlich', 'sich verstehen', 'der Feierabend']
  }
];

window.SZ_KATEGORIEN = [
  { id: 'alle',    label: 'Alle' },
  { id: 'alltag',  label: 'Alltag' },
  { id: 'beruf',   label: 'Beruf' },
  { id: 'pflege',  label: 'Pflege' },
  { id: 'medizin', label: 'Medizin' }
];
