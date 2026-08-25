/* ============================================================
   deutschoderwas · Niveau-Test – Aufgaben-Erweiterung (Etappe 2)
   +57 Sprachbausteine A1–C1 → großer Test umfasst damit 100 Übungen.
   Aufsteigend: leicht (A1) bis schwer (C1). options[0] = richtig
   (die Engine mischt die Anzeige-Reihenfolge zufällig).
   Wird NACH niveautest-data.js geladen.
   ============================================================ */
(function () {
  if (!window.NIVEAUTEST || !window.NIVEAUTEST.ITEMS) return;
  var B = function (id, level, q, options, explain) {
    return { id: id, level: level, skill: 'bausteine', q: q, options: options, answer: 0, explain: explain };
  };
  var more = [
    /* ===================== A1 ===================== */
    B('a1b6','A1','Das ist ___ Auto.',['mein','meine','meinen','meinem'],'„das Auto" (Neutrum) → mein Auto.'),
    B('a1b7','A1','Wir ___ gern Pizza.',['essen','esst','isst','esse'],'„wir essen" – 1. Person Plural.'),
    B('a1b8','A1','Ich habe ___ Hund.',['einen','ein','eine','einem'],'„der Hund", Akkusativ → einen Hund.'),
    B('a1b9','A1','___ kostet das Brot?',['Wie viel','Wie viele','Wie','Wer'],'Nach dem Preis fragt man mit „Wie viel".'),
    B('a1b10','A1','Mein Vater ___ Lehrer.',['ist','bist','sind','bin'],'„er/sie/es ist".'),
    B('a1b11','A1','Plural: das Kind → die ___',['Kinder','Kinds','Kindern','Kinde'],'Der Plural von „Kind" ist „Kinder".'),
    B('a1b12','A1','Ich trinke ___ Milch.',['keine','kein','keinen','nicht'],'„die Milch" (feminin) → keine Milch.'),
    B('a1b13','A1','Wir fahren ___ Bus zur Schule.',['mit dem','mit der','mit das','mit den'],'„der Bus", Dativ nach „mit" → mit dem Bus.'),
    B('a1b14','A1','___ ihr schon Deutsch?',['Sprecht','Sprichst','Spricht','Sprechen'],'„ihr sprecht" – 2. Person Plural.'),
    B('a1b15','A1','Ich stehe ___ 7 Uhr auf.',['um','am','im','an'],'Uhrzeit: „um 7 Uhr".'),
    B('a1b16','A1','Das Buch liegt ___ Tisch.',['auf dem','auf der','auf den','auf das'],'Position (wo?) → Dativ: auf dem Tisch.'),
    B('a1b17','A1','Sie ___ ein Eis.',['möchte','möchten','möchtest','möchtet'],'„sie möchte" – 3. Person Singular.'),

    /* ===================== A2 ===================== */
    B('a2b6','A2','Ich habe gestern Fußball ___.',['gespielt','gespielen','spielt','spielen'],'Perfekt: „habe … gespielt".'),
    B('a2b7','A2','Gib ___ bitte das Salz.',['mir','mich','ich','mein'],'„geben" + Dativ (wem?) → mir.'),
    B('a2b8','A2','Der Film war ___ als das Buch.',['besser','gut','guter','am besten'],'Komparativ von „gut" → besser … als.'),
    B('a2b9','A2','Ich rufe dich heute Abend ___.',['an','auf','aus','ein'],'Trennbares Verb „anrufen" → … rufe … an.'),
    B('a2b10','A2','Ich bleibe zu Hause, ___ ich krank bin.',['weil','aber','und','sondern'],'Grund mit „weil" (+ Verb am Ende).'),
    B('a2b11','A2','Sie freut sich ___ das Geschenk.',['über','auf','für','an'],'„sich freuen über" (etwas Gegenwärtiges).'),
    B('a2b12','A2','Wir treffen uns ___ Samstagabend.',['am','im','um','zu'],'Tageszeiten/Tage: „am Samstagabend".'),
    B('a2b13','A2','Du musst ___ die Hände waschen.',['dir','dich','du','sich'],'Reflexiv im Dativ (Körperteil als Akkusativobjekt) → dir.'),
    B('a2b14','A2','Ich wohne hier seit ___ Jahr.',['einem','ein','einen','eines'],'„seit" + Dativ → einem Jahr.'),
    B('a2b15','A2','Ich interessiere mich ___ Sport.',['für','an','auf','über'],'„sich interessieren für" + Akkusativ.'),
    B('a2b16','A2','___ es regnet, bleiben wir drinnen.',['Wenn','Als','Ob','Dass'],'Bedingung/wiederholt → „Wenn".'),

    /* ===================== B1 ===================== */
    B('b1b6','B1','Das ist die Frau, ___ Tochter Ärztin ist.',['deren','dessen','die','der'],'Genitiv-Relativpronomen, feminin → deren.'),
    B('b1b7','B1','An deiner Stelle ___ ich das nicht machen.',['würde','werde','wurde','will'],'Irreale Empfehlung: Konjunktiv II „würde … machen".'),
    B('b1b8','B1','Der Termin wird auf morgen ___.',['verschoben','verschieben','verschiebt','verschob'],'Passiv Präsens: „wird … verschoben".'),
    B('b1b9','B1','Trotz ___ Regens gingen wir spazieren.',['des','dem','der','das'],'„trotz" + Genitiv → des Regens.'),
    B('b1b10','B1','Ich war müde, ___ bin ich früh ins Bett gegangen.',['deshalb','obwohl','weil','sondern'],'Folge mit „deshalb" (Hauptsatz, Verb an Position 2).'),
    B('b1b11','B1','___ ich klein war, wohnten wir in Berlin.',['Als','Wenn','Wann','Ob'],'Einmalige Vergangenheit → „Als".'),
    B('b1b12','B1','Er hat versprochen, pünktlich zu ___.',['sein','ist','war','sind'],'Infinitiv mit „zu" → zu sein.'),
    B('b1b13','B1','Je länger ich warte, ___ nervöser werde ich.',['desto','als','wie','dass'],'„je …, desto …".'),
    B('b1b14','B1','Ich freue mich darauf, dich bald ___.',['zu sehen','sehen','gesehen','sah'],'„sich freuen darauf" + Infinitiv mit „zu".'),
    B('b1b15','B1','Das Haus, ___ wir wohnen, ist alt.',['in dem','in das','das','dem'],'Relativsatz mit Präposition (wo?) → in dem.'),
    B('b1b16','B1','Bevor du gehst, ___ bitte das Licht aus.',['mach','machst','gemacht','zu machen'],'Imperativ 2. Person Singular → „mach … aus".'),

    /* ===================== B2 ===================== */
    B('b2b6','B2','Hätte ich das gewusst, ___ ich anders gehandelt.',['hätte','würde','wäre','hatte'],'Irrealer Konditional der Vergangenheit → „hätte … gehandelt".'),
    B('b2b7','B2','Der Vertrag muss bis Freitag ___ werden.',['unterschrieben','unterschreiben','unterschrieb','unterzeichnet zu'],'Passiv mit Modalverb: „muss … unterschrieben werden".'),
    B('b2b8','B2','Wir helfen dem neuen ___.',['Kunden','Kunde','Kundes','Kund'],'N-Deklination: „dem Kunden".'),
    B('b2b9','B2','Die ___ Frau winkte uns zu.',['lachende','gelacht','lachen','gelachte'],'Partizip I als Adjektiv: „die lachende Frau".'),
    B('b2b10','B2','___ des schlechten Wetters fiel das Spiel aus.',['Wegen','Trotz','Während','Ohne'],'Grund mit „wegen" + Genitiv.'),
    B('b2b11','B2','Es ist wichtig, dass alle rechtzeitig ___ werden.',['informiert','informieren','zu informieren','informierend'],'Passiv im dass-Satz: „informiert werden".'),
    B('b2b12','B2','Sowohl Anna ___ auch Tom sind eingeladen.',['als','wie','und','oder'],'Feste Verbindung „sowohl … als auch".'),
    B('b2b13','B2','Anstatt zu ___, ging er ins Kino.',['lernen','lernte','gelernt','lernend'],'„anstatt zu" + Infinitiv → zu lernen.'),
    B('b2b14','B2','Der Politiker, ___ Rücktritt gefordert wurde, schwieg.',['dessen','deren','der','den'],'Genitiv-Relativpronomen, maskulin → dessen.'),
    B('b2b15','B2','Innerhalb ___ Woche bekommen Sie Antwort.',['einer','eine','einem','einen'],'„innerhalb" + Genitiv → einer Woche.'),
    B('b2b16','B2','Mir liegt viel ___, dass du dabei bist.',['daran','davon','dazu','darüber'],'Feste Verbindung „mir liegt daran, dass …".'),

    /* ===================== C1 ===================== */
    B('c1b6','C1','Er stellte den Vorschlag ___ Diskussion.',['zur','in die','auf die','an die'],'Funktionsverbgefüge „etwas zur Diskussion stellen".'),
    B('c1b7','C1','___ der Tatsache, dass es regnete, fuhren wir los.',['Ungeachtet','Trotzdem','Obwohl','Wegen'],'„ungeachtet" + Genitiv (= trotz).'),
    B('c1b8','C1','Das Vorhaben war von Anfang an zum Scheitern ___.',['verurteilt','bestimmt','geplant','gebracht'],'Feste Wendung „zum Scheitern verurteilt".'),
    B('c1b9','C1','Sie sagte, sie ___ leider keine Zeit.',['habe','hat','hätte','haben'],'Indirekte Rede → Konjunktiv I „habe".'),
    B('c1b10','C1','Die Organisation lässt zu wünschen ___.',['übrig','offen','aus','nach'],'Redewendung „zu wünschen übrig lassen".'),
    B('c1b11','C1','Im Großen und ___ war alles in Ordnung.',['Ganzen','Kleinen','Weiten','Vollen'],'Redewendung „im Großen und Ganzen".'),
    B('c1b12','C1','Er nimmt kein Blatt ___ den Mund.',['vor','über','auf','an'],'Redewendung „kein Blatt vor den Mund nehmen".'),
    B('c1b13','C1','Ein zweiter Versuch kommt nicht ___ Frage.',['in','zur','auf','aus'],'Feste Wendung „nicht in Frage kommen".'),
    B('c1b14','C1','Sie ist durchaus ___ der Lage, das zu lösen.',['in','auf','zu','an'],'Feste Wendung „in der Lage sein".'),
    B('c1b15','C1','Aus dem Bericht zog sie die Konsequenzen ___.',['daraus','davon','dazu','darin'],'„Konsequenzen aus etwas ziehen" → daraus.'),
    B('c1b16','C1','Die Sitzung wurde kurzfristig ___.',['vertagt','verspätet','verzögert','versetzt'],'„vertagen" = auf einen späteren Termin verschieben (formell).'),
    B('c1b17','C1','Dass das so nicht funktioniert, liegt ___ der Hand.',['auf','in','an','bei'],'Redewendung „auf der Hand liegen" (offensichtlich sein).')
  ];
  Array.prototype.push.apply(window.NIVEAUTEST.ITEMS, more);
})();
