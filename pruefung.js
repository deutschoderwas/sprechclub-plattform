window.PRUEFUNG = {
  A2: {
    niveau:'A2', titel:'A2 — Start Deutsch 2 / telc A2', minuten:20,
    teile:[
      { art:'lesen', name:'Leseverstehen', text:'Aushang im Treppenhaus: Liebe Nachbarinnen und Nachbarn, am Samstag, dem 12. April, machen wir von 10 bis 14 Uhr einen Hof-Flohmarkt. Jede Familie bekommt einen Tisch. Bitte meldet euch bis Mittwoch bei Frau Özdemir in Wohnung 4 an. Wer keinen Tisch braucht, kann eine Decke auf den Boden legen. Für Kaffee und Kuchen sorgt Familie Weber. Kinder dürfen ihre Spielsachen selbst verkaufen. Bei Regen fällt der Flohmarkt aus, dann treffen wir uns am Sonntag zur gleichen Zeit. Bitte stellt eure Autos an diesem Tag auf die Straße, damit wir Platz haben. Vielen Dank und bis Samstag!',
        aufgaben:[
          { frage:'Wann beginnt der Flohmarkt?', opt:['Um 9 Uhr','Um 10 Uhr','Um 14 Uhr'], loesung:1,
            erklaerung:'Im Aushang steht „von 10 bis 14 Uhr" — 10 Uhr ist der Beginn, 14 Uhr das Ende.' },
          { frage:'Wo muss man sich anmelden?', opt:['Bei Frau Özdemir','Bei Familie Weber','Im Hausmeisterbüro'], loesung:0,
            erklaerung:'Der Text sagt klar: „Bitte meldet euch bis Mittwoch bei Frau Özdemir in Wohnung 4 an."' },
          { frage:'Was macht Familie Weber?', opt:['Sie verkauft Spielsachen','Sie stellt die Tische auf','Sie macht Kaffee und Kuchen'], loesung:2,
            erklaerung:'„Für Kaffee und Kuchen sorgt Familie Weber" — sie kümmert sich also um die Bewirtung.' },
          { frage:'Was passiert, wenn es regnet?', opt:['Der Flohmarkt ist am Sonntag','Der Flohmarkt ist im Keller','Der Flohmarkt fällt ganz aus'], loesung:0,
            erklaerung:'Bei Regen wird verschoben: „dann treffen wir uns am Sonntag zur gleichen Zeit".' },
          { frage:'Was sollen die Nachbarn mit ihren Autos machen?', opt:['In der Garage lassen','Auf die Straße stellen','Vor den Tischen parken'], loesung:1,
            erklaerung:'Am Ende steht: „Bitte stellt eure Autos an diesem Tag auf die Straße, damit wir Platz haben."' }
        ] },
      { art:'grammatik', name:'Sprachbausteine',
        aufgaben:[
          { frage:'Ich warte ___ den Bus.', opt:['für','an','auf'], loesung:2,
            erklaerung:'Man sagt immer „warten auf" + Akkusativ — also „auf den Bus".' },
          { frage:'Gestern ___ ich lange geschlafen.', opt:['bin','habe','war'], loesung:1,
            erklaerung:'„schlafen" bildet das Perfekt mit „haben": ich habe geschlafen.' },
          { frage:'Das ist ___ Fahrrad von meiner Schwester.', opt:['der','die','das'], loesung:2,
            erklaerung:'„Fahrrad" ist sächlich, deshalb heißt es „das Fahrrad".' },
          { frage:'___ du mir bitte helfen?', opt:['Kannst','Musst','Willst'], loesung:0,
            erklaerung:'Für eine höfliche Bitte nimmt man „kannst du bitte …?".' },
          { frage:'Mein Bruder ist zwei Jahre ___ als ich.', opt:['älter','alt','am ältesten'], loesung:0,
            erklaerung:'Beim Vergleich mit „als" braucht man den Komparativ: älter.' },
          { frage:'Wir fahren morgen zu ___ Eltern.', opt:['unser','unseren','unsere'], loesung:1,
            erklaerung:'Nach „zu" steht der Dativ, im Plural also „unseren Eltern".' }
        ] },
      { art:'hoeren', name:'Hörverstehen', hoertext:'Frau: Guten Tag, Praxis Doktor Behrens, mein Name ist Kowalski. Mann: Guten Tag, hier ist Ahmet Yilmaz. Ich habe morgen um zehn Uhr einen Termin, aber ich muss leider arbeiten. Frau: Kein Problem. Am Donnerstag um sechzehn Uhr dreißig ist noch etwas frei. Mann: Das passt gut, danke. Frau: Bitte bringen Sie Ihre Versichertenkarte mit.',
        aufgaben:[
          { frage:'Warum ruft der Mann an?', opt:['Er möchte ein Rezept','Er will den Termin verschieben','Er sucht die Adresse'], loesung:1,
            erklaerung:'Er kann morgen nicht kommen, weil er arbeiten muss, und bekommt deshalb einen neuen Termin.' },
          { frage:'Wann ist der neue Termin?', opt:['Am Donnerstag um 16.30 Uhr','Am Mittwoch um 10 Uhr','Am Donnerstag um 6 Uhr'], loesung:0,
            erklaerung:'Die Frau sagt: „Am Donnerstag um sechzehn Uhr dreißig ist noch etwas frei."' },
          { frage:'Wo ruft der Mann an?', opt:['In einer Apotheke','In einem Amt','In einer Arztpraxis'], loesung:2,
            erklaerung:'Die Frau meldet sich mit „Praxis Doktor Behrens" — das ist eine Arztpraxis.' },
          { frage:'Was soll der Mann mitbringen?', opt:['Seinen Pass','Geld','Die Versichertenkarte'], loesung:2,
            erklaerung:'Zum Schluss bittet die Frau: „Bitte bringen Sie Ihre Versichertenkarte mit."' }
        ] }
    ]
  },
  B1: {
    niveau:'B1', titel:'B1 — Zertifikat Deutsch / telc B1', minuten:25,
    teile:[
      { art:'lesen', name:'Leseverstehen', text:'E-Mail an die Belegschaft: Liebe Kolleginnen und Kollegen, ab dem 1. Juni ändert sich unsere Arbeitszeitregelung. Wer möchte, kann künftig zwei Tage pro Woche im Homeoffice arbeiten, muss diese Tage aber bis Freitag der Vorwoche im Kalender eintragen. Die Kernarbeitszeit von 10 bis 15 Uhr bleibt bestehen, weil wir in dieser Zeit Besprechungen ansetzen. Wer regelmäßig zu Hause arbeitet, erhält auf Antrag einen Bildschirm und einen Bürostuhl für den Arbeitsplatz zu Hause. Die Anträge nimmt Herr Neumann aus der Personalabteilung entgegen, allerdings erst ab Mitte Mai. Wichtig ist außerdem: Wer neu im Betrieb ist, arbeitet in den ersten drei Monaten weiterhin vollständig im Büro, damit die Einarbeitung gut gelingt. Bei Fragen wenden Sie sich bitte an Ihre Teamleitung.',
        aufgaben:[
          { frage:'Wie viele Homeoffice-Tage sind pro Woche möglich?', opt:['Einer','Zwei','Drei'], loesung:1,
            erklaerung:'In der E-Mail heißt es, man könne „zwei Tage pro Woche im Homeoffice arbeiten".' },
          { frage:'Bis wann muss man die Homeoffice-Tage eintragen?', opt:['Bis Montagmorgen','Bis Ende des Monats','Bis Freitag der Vorwoche'], loesung:2,
            erklaerung:'Der Text nennt die Frist ausdrücklich: „bis Freitag der Vorwoche im Kalender eintragen".' },
          { frage:'Warum bleibt die Kernarbeitszeit bestehen?', opt:['Weil die Kantine dann offen ist','Weil der Chef es so will','Weil dann Besprechungen stattfinden'], loesung:2,
            erklaerung:'Der Nebensatz mit „weil" erklärt es: In dieser Zeit werden Besprechungen angesetzt.' },
          { frage:'Wer bearbeitet die Anträge auf Ausstattung?', opt:['Die Teamleitung','Der Betriebsrat','Herr Neumann'], loesung:2,
            erklaerung:'„Die Anträge nimmt Herr Neumann aus der Personalabteilung entgegen" — allerdings erst ab Mitte Mai.' },
          { frage:'Was gilt für neue Mitarbeitende?', opt:['Sie arbeiten drei Monate im Büro','Sie dürfen sofort ins Homeoffice','Sie brauchen keinen Antrag'], loesung:0,
            erklaerung:'Wegen der Einarbeitung bleiben neue Kolleginnen und Kollegen die ersten drei Monate im Büro.' }
        ] },
      { art:'grammatik', name:'Sprachbausteine',
        aufgaben:[
          { frage:'Ich rufe dich an, ___ ich zu Hause bin.', opt:['sobald','trotzdem','deshalb'], loesung:0,
            erklaerung:'„sobald" leitet einen Zeitsatz ein und bedeutet: unmittelbar nachdem etwas passiert.' },
          { frage:'Er kam zu spät, ___ er den Zug verpasst hatte.', opt:['weil','obwohl','damit'], loesung:0,
            erklaerung:'Der verpasste Zug ist der Grund, deshalb steht hier der Kausalsatz mit „weil".' },
          { frage:'Der Kollege, ___ Auto kaputt ist, kommt heute mit dem Rad.', opt:['der','dem','dessen'], loesung:2,
            erklaerung:'Besitz im Relativsatz drückt man mit „dessen" aus: sein Auto ist kaputt.' },
          { frage:'Wenn ich mehr Zeit ___, würde ich einen Kurs besuchen.', opt:['hätte','habe','hatte'], loesung:0,
            erklaerung:'Im irrealen Wunschsatz steht der Konjunktiv II: „wenn ich hätte … würde ich".' },
          { frage:'Sie freut sich schon ___ den Urlaub im Sommer.', opt:['über','auf','für'], loesung:1,
            erklaerung:'„sich freuen auf" blickt in die Zukunft, „sich freuen über" auf etwas Vergangenes.' },
          { frage:'Nach der Arbeit bin ich noch kurz einkaufen ___.', opt:['gewesen','gegangen','gefahren'], loesung:1,
            erklaerung:'„einkaufen gehen" ist die feste Verbindung; im Perfekt heißt es „bin einkaufen gegangen".' }
        ] },
      { art:'hoeren', name:'Hörverstehen', hoertext:'Guten Tag, hier spricht Frau Bergmann von der Hausverwaltung Lindner. Ich rufe wegen Ihrer Wohnung in der Kastanienallee an. Am kommenden Dienstag kommt zwischen acht und zwölf Uhr ein Techniker, um die Heizung zu prüfen. Bitte sorgen Sie dafür, dass jemand zu Hause ist, sonst müssen wir einen zweiten Termin berechnen. Falls Ihnen der Dienstag gar nicht passt, rufen Sie mich bitte bis Montagmittag zurück. Vielen Dank und einen schönen Tag.',
        aufgaben:[
          { frage:'Wer hat auf den Anrufbeantworter gesprochen?', opt:['Eine Nachbarin','Die Hausverwaltung','Ein Techniker'], loesung:1,
            erklaerung:'Frau Bergmann stellt sich gleich am Anfang als Mitarbeiterin der Hausverwaltung Lindner vor.' },
          { frage:'Was soll am Dienstag gemacht werden?', opt:['Die Heizung wird geprüft','Die Fenster werden getauscht','Der Zähler wird abgelesen'], loesung:0,
            erklaerung:'Der Techniker kommt ausdrücklich, „um die Heizung zu prüfen".' },
          { frage:'Warum soll jemand zu Hause sein?', opt:['Damit es warm bleibt','Weil sonst ein zweiter Termin kostet','Weil der Schlüssel fehlt'], loesung:1,
            erklaerung:'Frau Bergmann warnt: Sonst müsse ein zweiter Termin berechnet werden.' },
          { frage:'Bis wann soll man zurückrufen, wenn der Termin nicht passt?', opt:['Bis Sonntagabend','Bis Dienstagfrüh','Bis Montagmittag'], loesung:2,
            erklaerung:'Am Ende der Nachricht nennt sie die Frist: „rufen Sie mich bitte bis Montagmittag zurück".' }
        ] }
    ]
  },
  B2: {
    niveau:'B2', titel:'B2 — Goethe-Zertifikat B2 / telc B2', minuten:30,
    teile:[
      { art:'lesen', name:'Leseverstehen', text:'Aus einer Regionalzeitung: Seit dem Frühjahr wird in Hallstett ein Modellversuch erprobt, bei dem der Busverkehr im Ortsteil Neuried nicht mehr nach festem Fahrplan, sondern auf Abruf organisiert wird. Wer fahren möchte, meldet den Wunsch per App oder telefonisch an, woraufhin ein Kleinbus die Fahrgäste an einer der neu eingerichteten Haltepunkte abholt. Die Gemeinde begründet den Schritt damit, dass die alten Linienbusse häufig fast leer unterwegs gewesen seien. Kritiker wenden allerdings ein, dass ältere Menschen ohne Smartphone benachteiligt würden, weshalb die Telefonhotline dauerhaft erhalten bleiben soll. Nach Angaben der Verkehrsbetriebe ist die Zahl der Fahrgäste seit Beginn des Versuchs um knapp ein Fünftel gestiegen, während die Betriebskosten leicht gesunken sind. Ob das Modell auf weitere Ortsteile ausgeweitet wird, soll im Herbst entschieden werden.',
        aufgaben:[
          { frage:'Wie funktioniert das neue Angebot in Neuried?', opt:['Nach festem Fahrplan','Auf Abruf per App oder Telefon','Nur mit Voranmeldung am Vortag'], loesung:1,
            erklaerung:'Der Text betont: nicht mehr nach Fahrplan, sondern „auf Abruf" per App oder telefonisch.' },
          { frage:'Womit begründet die Gemeinde die Umstellung?', opt:['Mit fehlenden Fahrern','Mit den kaum ausgelasteten Linienbussen','Mit dem Wunsch der Fahrgäste'], loesung:1,
            erklaerung:'In der indirekten Rede heißt es, die alten Busse „seien häufig fast leer unterwegs gewesen".' },
          { frage:'Was befürchten die Kritiker?', opt:['Dass die Fahrpreise steigen','Dass die Busse zu klein sind','Dass ältere Menschen benachteiligt werden'], loesung:2,
            erklaerung:'Der Einwand lautet, Menschen ohne Smartphone würden benachteiligt — deshalb bleibt die Hotline.' },
          { frage:'Wie haben sich die Fahrgastzahlen entwickelt?', opt:['Sie sind leicht gesunken','Sie sind gleich geblieben','Sie sind um etwa 20 Prozent gestiegen'], loesung:2,
            erklaerung:'„Um knapp ein Fünftel gestiegen" entspricht knapp 20 Prozent.' },
          { frage:'Was ist über die Zukunft des Modells bekannt?', opt:['Es wird sofort ausgeweitet','Es wird zum Jahresende beendet','Die Entscheidung fällt im Herbst'], loesung:2,
            erklaerung:'Der letzte Satz sagt, über eine Ausweitung solle im Herbst entschieden werden.' }
        ] },
      { art:'grammatik', name:'Sprachbausteine',
        aufgaben:[
          { frage:'Die Unterlagen ___ bis Freitag geprüft werden.', opt:['haben','sind','müssen'], loesung:2,
            erklaerung:'Passiv mit Modalverb: Modalverb plus Partizip plus „werden" — hier „müssen … geprüft werden".' },
          { frage:'An deiner Stelle ___ ich das Angebot noch einmal genau lesen.', opt:['würde','werde','wäre'], loesung:0,
            erklaerung:'Für einen höflichen Rat nimmt man den Konjunktiv II: „an deiner Stelle würde ich …".' },
          { frage:'Der ___ Bericht liegt der Geschäftsführung bereits vor.', opt:['überarbeitete','überarbeitend','überarbeiten'], loesung:0,
            erklaerung:'Das Partizip II als Attribut hat passive Bedeutung: der Bericht, der überarbeitet wurde.' },
          { frage:'Wir müssen das Problem endlich ___ Sprache bringen.', opt:['in','zur','auf die'], loesung:1,
            erklaerung:'Die feste Nomen-Verb-Verbindung lautet „etwas zur Sprache bringen", also ansprechen.' },
          { frage:'Er hat den Vertrag unterschrieben, ___ er die Bedingungen kannte.', opt:['ohne dass','anstatt dass','indem'], loesung:0,
            erklaerung:'„ohne dass" drückt aus, dass etwas Erwartetes gerade nicht der Fall war.' },
          { frage:'Das ist genau der Punkt, ___ es in der Sitzung ging.', opt:['worum','um den','worüber'], loesung:0,
            erklaerung:'„es geht um" wird im Relativsatz zu „worum" — Präposition und Pronomen verschmelzen.' }
        ] },
      { art:'hoeren', name:'Hörverstehen', hoertext:'Frau: Herr Krause, Sie leiten die Kantine seit zwanzig Jahren. Was hat sich am stärksten verändert? Mann: Früher wurde vor allem nach Preis entschieden, heute fragen die Leute zuerst, woher das Fleisch kommt. Frau: Und wie reagieren Sie darauf? Mann: Wir beziehen inzwischen fast alles aus der Region, was uns natürlich mehr Arbeit macht, weil wir mit vielen kleinen Höfen verhandeln müssen. Frau: Lohnt sich das? Mann: Wirtschaftlich gerade so, aber wir werfen deutlich weniger weg, und das rechnet sich am Ende doch.',
        aufgaben:[
          { frage:'Was hat sich laut Herrn Krause am meisten verändert?', opt:['Die Portionsgrößen','Das Interesse an der Herkunft','Die Öffnungszeiten'], loesung:1,
            erklaerung:'Er sagt, früher zählte der Preis, heute fragten die Leute zuerst nach der Herkunft des Fleisches.' },
          { frage:'Warum ist der regionale Einkauf aufwendiger?', opt:['Weil viele kleine Höfe beteiligt sind','Weil die Wege länger sind','Weil das Personal fehlt'], loesung:0,
            erklaerung:'Er nennt das Verhandeln mit vielen kleinen Höfen als Grund für den Mehraufwand.' },
          { frage:'Wie beurteilt er die Wirtschaftlichkeit?', opt:['Sehr lohnend','Knapp, aber vertretbar','Ein klares Verlustgeschäft'], loesung:1,
            erklaerung:'„Wirtschaftlich gerade so" heißt: Es geht knapp auf, ist aber vertretbar.' },
          { frage:'Welcher Vorteil wird zusätzlich genannt?', opt:['Mehr Gäste','Günstigere Preise','Weniger Lebensmittelabfall'], loesung:2,
            erklaerung:'Am Ende betont er, dass deutlich weniger weggeworfen wird und sich das rechnet.' }
        ] }
    ]
  },
  C1: {
    niveau:'C1', titel:'C1 — Goethe-Zertifikat C1 / telc C1 Hochschule', minuten:35,
    teile:[
      { art:'lesen', name:'Leseverstehen', text:'Aus einem Fachbeitrag: Dass Weiterbildung im Betrieb häufig als Belohnung für ohnehin gut qualifizierte Beschäftigte vergeben wird, gehört zu den hartnäckigsten Widersprüchen der Personalentwicklung. Wer bereits über einen Abschluss verfügt, wird gefördert; wer angelernt arbeitet, geht nicht selten leer aus, obwohl gerade dort der Bedarf am größten wäre. Untersuchungen legen nahe, dass dies weniger auf bösen Willen als auf strukturelle Trägheit zurückzuführen ist: Kurse werden zentral geplant, in der Kernarbeitszeit angesetzt und setzen ein Maß an Selbstorganisation voraus, das im Schichtbetrieb schlicht nicht vorhanden ist. Betriebe, die den Spieß umgedreht und Lerneinheiten in kurzen Blöcken direkt an der Maschine angeboten haben, berichten von einer deutlich höheren Beteiligung. Ob sich daraus ein belastbares Modell ableiten lässt, bleibt gleichwohl offen, denn die Zahl der untersuchten Fälle ist bislang überschaubar.',
        aufgaben:[
          { frage:'Worin besteht der beschriebene Widerspruch?', opt:['Weiterbildung ist zu teuer für Betriebe','Weiterbildung wird von Beschäftigten abgelehnt','Weiterbildung erreicht am ehesten die, die sie am wenigsten brauchen'], loesung:2,
            erklaerung:'Gefördert werden die bereits Qualifizierten, während der Bedarf bei den Angelernten am größten wäre.' },
          { frage:'Wie erklärt der Text die Ungleichverteilung?', opt:['Mit bewusster Benachteiligung','Mit fehlendem Interesse der Betriebe','Mit strukturellen Beharrungskräften'], loesung:2,
            erklaerung:'Es heißt ausdrücklich „weniger auf bösen Willen als auf strukturelle Trägheit" zurückzuführen.' },
          { frage:'Was bedeutet die Wendung „den Spieß umgedreht" hier?', opt:['Sie haben die Kurse gestrichen','Sie haben das übliche Vorgehen umgekehrt','Sie haben die Kosten weitergegeben'], loesung:1,
            erklaerung:'Die Redewendung meint, dass man die gewohnte Logik umkehrt — hier: Lernen kommt zur Maschine statt umgekehrt.' },
          { frage:'Welche Einschränkung nennt der Autor zum Schluss?', opt:['Die Fallzahl ist noch gering','Die Beteiligung war zu niedrig','Die Kosten waren nicht messbar'], loesung:0,
            erklaerung:'Der letzte Satz weist darauf hin, dass die Zahl der untersuchten Fälle bislang überschaubar sei.' },
          { frage:'Welche Haltung nimmt der Text insgesamt ein?', opt:['Uneingeschränkt zustimmend','Deutlich ablehnend','Interessiert, aber zurückhaltend'], loesung:2,
            erklaerung:'Das Signalwort „gleichwohl" markiert die vorsichtige Distanz trotz erkennbarer Sympathie für den Ansatz.' }
        ] },
      { art:'grammatik', name:'Sprachbausteine',
        aufgaben:[
          { frage:'___ der massiven Kritik hielt die Leitung an ihrem Konzept fest.', opt:['Ungeachtet','Infolge','Anhand'], loesung:0,
            erklaerung:'„ungeachtet" plus Genitiv drückt einen Gegensatz aus, „infolge" dagegen eine Folge.' },
          { frage:'Der Antrag ist ___ vollständig auszufüllen.', opt:['sorgfältig','sorgfältiger','am sorgfältigsten'], loesung:0,
            erklaerung:'Hier steht das Adverb ohne Steigerung; „ist auszufüllen" ist das Passiv der Notwendigkeit.' },
          { frage:'Er tat so, als ___ er von der Sache nie gehört.', opt:['hat','hätte','habe'], loesung:1,
            erklaerung:'Nach „als ob" beziehungsweise „als" mit Inversion steht der irreale Vergleich im Konjunktiv II.' },
          { frage:'Die ___ Fragen wurden vertagt.', opt:['noch zu klärenden','noch geklärten','noch klärend'], loesung:0,
            erklaerung:'Das Gerundivum „zu" plus Partizip I drückt aus, was noch geklärt werden muss.' },
          { frage:'Sie hat die Angelegenheit endgültig ___ die Akten gelegt.', opt:['auf','zu','ad'], loesung:1,
            erklaerung:'Die feste Wendung lautet „etwas zu den Akten legen", also endgültig abschließen.' },
          { frage:'Der Sprecher betonte, man ___ die Ergebnisse noch nicht bewerten.', opt:['kann','könne','könnte'], loesung:1,
            erklaerung:'In der indirekten Rede steht der Konjunktiv I: „man könne".' }
        ] },
      { art:'hoeren', name:'Hörverstehen', hoertext:'Mann: Frau Reinhardt, Sie beraten Kommunen bei der Digitalisierung. Woran scheitert es Ihrer Erfahrung nach? Frau: Fast nie an der Technik. Es scheitert daran, dass niemand bereit ist, einen einmal eingeführten Prozess auch wieder abzuschaffen. Mann: Also wird digitalisiert, was eigentlich wegfallen müsste? Frau: Genau, und damit zementiert man den Aufwand für weitere zehn Jahre. Mann: Was raten Sie? Frau: Vor jedem Projekt eine ehrliche Inventur. Wer das überspringt, kauft sich teure Software für ein Problem, das er gar nicht mehr haben müsste.',
        aufgaben:[
          { frage:'Woran scheitert Digitalisierung laut Frau Reinhardt meistens?', opt:['An der Technik','An fehlendem Geld','An unveränderten Prozessen'], loesung:2,
            erklaerung:'Sie sagt „fast nie an der Technik" — das Problem seien Prozesse, die niemand abschaffen will.' },
          { frage:'Was meint sie mit „zementiert man den Aufwand"?', opt:['Der Aufwand wird langfristig festgeschrieben','Der Aufwand wird sofort halbiert','Der Aufwand wird auf andere verlagert'], loesung:0,
            erklaerung:'Das Bild vom Zement steht dafür, dass etwas dauerhaft fixiert wird — hier für zehn Jahre.' },
          { frage:'Was empfiehlt sie vor jedem Projekt?', opt:['Eine Ausschreibung','Eine ehrliche Bestandsaufnahme','Eine Mitarbeiterbefragung'], loesung:1,
            erklaerung:'Sie rät zu einer „ehrlichen Inventur", also einer nüchternen Bestandsaufnahme.' },
          { frage:'Wie ist ihr Ton in dem Gespräch?', opt:['Ausweichend','Begeistert','Pointiert und kritisch'], loesung:2,
            erklaerung:'Zugespitzte Formulierungen wie „teure Software für ein Problem, das er gar nicht mehr haben müsste" zeigen die kritische Schärfe.' }
        ] }
    ]
  }
};
