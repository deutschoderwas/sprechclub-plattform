/* ============================================================
   deutschoderwas — Amandas Dialoge
   Kleine Alltags- und Berufssituationen zum Mitreden.
   Aufbau je Schritt:
     amanda     — was Amanda sagt (wird vorgelesen)
     hinweis    — was der Lernende jetzt tun soll
     beispiel   — eine Musterantwort zum Ansehen
     redemittel — anklickbare Satzanfänge
   ============================================================ */
window.DIALOGE = [

/* ---------------------------- ALLTAG ---------------------------- */
{
  id:'baeckerei', modus:'alltag', em:'🥐', titel:'In der Bäckerei', lvl:'A1', dauer:'2 Min',
  ort:'Du stehst an der Theke. Vor dir liegen Brötchen, Brezeln und Kuchen.',
  schritte:[
    { amanda:'Guten Morgen! Was darf es sein?',
      hinweis:'Sag, was du kaufen möchtest.',
      beispiel:'Guten Morgen! Ich hätte gern drei Brötchen, bitte.',
      redemittel:['Ich hätte gern …','Ich nehme …','Einmal … bitte.'] },
    { amanda:'Gern. Sonst noch etwas?',
      hinweis:'Bestelle noch etwas — oder sag, dass das alles ist.',
      beispiel:'Ja, und ein Stück Kuchen bitte.',
      redemittel:['Ja, außerdem …','Nein danke, das ist alles.','Haben Sie auch …?'] },
    { amanda:'Das macht vier Euro zwanzig.',
      hinweis:'Sag, wie du bezahlen willst.',
      beispiel:'Kann ich mit Karte zahlen?',
      redemittel:['Ich zahle bar.','Kann ich mit Karte zahlen?','Hier bitte.'] },
    { amanda:'Natürlich. Vielen Dank und einen schönen Tag!',
      hinweis:'Verabschiede dich freundlich.',
      beispiel:'Danke, Ihnen auch! Auf Wiedersehen.',
      redemittel:['Ihnen auch!','Auf Wiedersehen.','Danke schön, tschüss!'] }
  ]
},
{
  id:'arzt-termin', modus:'alltag', em:'📞', titel:'Arzttermin am Telefon', lvl:'A2', dauer:'3 Min',
  ort:'Du rufst in einer Hausarztpraxis an. Du hast seit Tagen Rückenschmerzen.',
  schritte:[
    { amanda:'Praxis Dr. Weber, guten Tag. Was kann ich für Sie tun?',
      hinweis:'Sag deinen Namen und warum du anrufst.',
      beispiel:'Guten Tag, mein Name ist Ana Silva. Ich hätte gern einen Termin.',
      redemittel:['Mein Name ist …','Ich hätte gern einen Termin.','Ich bin Patientin bei Ihnen.'] },
    { amanda:'Worum geht es denn?',
      hinweis:'Beschreibe kurz dein Problem.',
      beispiel:'Ich habe seit einer Woche starke Rückenschmerzen.',
      redemittel:['Ich habe seit … Schmerzen.','Mir geht es nicht gut.','Es ist ziemlich schlimm.'] },
    { amanda:'Der nächste freie Termin wäre erst in sechs Wochen.',
      hinweis:'Das ist zu spät. Frag nach etwas Früherem.',
      beispiel:'Das ist leider sehr spät. Haben Sie eine Akutsprechstunde?',
      redemittel:['Geht es auch früher?','Haben Sie eine Akutsprechstunde?','Können Sie mich auf die Warteliste setzen?'] },
    { amanda:'Kommen Sie morgen um acht Uhr in die offene Sprechstunde. Bringen Sie Ihre Versichertenkarte mit.',
      hinweis:'Bestätige den Termin und frag nach, wenn du etwas nicht verstanden hast.',
      beispiel:'Morgen um acht, alles klar. Muss ich sonst noch etwas mitbringen?',
      redemittel:['Also morgen um …','Was muss ich mitbringen?','Können Sie das bitte wiederholen?'] }
  ]
},
{
  id:'restaurant', modus:'alltag', em:'🍽️', titel:'Im Restaurant bestellen', lvl:'A1–A2', dauer:'3 Min',
  ort:'Du sitzt am Tisch, die Kellnerin kommt mit der Karte.',
  schritte:[
    { amanda:'Guten Abend! Möchten Sie schon etwas trinken?',
      hinweis:'Bestelle ein Getränk.',
      beispiel:'Guten Abend. Ein Wasser ohne Kohlensäure, bitte.',
      redemittel:['Ich hätte gern …','Für mich bitte …','Was können Sie empfehlen?'] },
    { amanda:'Gern. Und haben Sie beim Essen schon gewählt?',
      hinweis:'Bestelle ein Gericht — oder frag nach einer Empfehlung.',
      beispiel:'Noch nicht ganz. Was würden Sie empfehlen?',
      redemittel:['Ich nehme …','Was ist heute besonders gut?','Ist da Fleisch drin?'] },
    { amanda:'Die Kürbissuppe ist heute sehr gut. Möchten Sie die probieren?',
      hinweis:'Sag ja oder nein — und erkläre kurz warum.',
      beispiel:'Ja, gern. Ich esse kein Fleisch, das passt gut.',
      redemittel:['Ja, das klingt gut.','Nein danke, lieber …','Ich esse kein …'] },
    { amanda:'Sehr gern. Ich bringe alles gleich.',
      hinweis:'Bedanke dich — und frag am Ende nach der Rechnung.',
      beispiel:'Danke schön. Könnten wir später bitte die Rechnung haben?',
      redemittel:['Danke schön.','Die Rechnung, bitte.','Zusammen oder getrennt?'] }
  ]
},
{
  id:'supermarkt', modus:'alltag', em:'🛒', titel:'Im Supermarkt fragen', lvl:'A1', dauer:'2 Min',
  ort:'Du suchst etwas und findest es nicht. Ein Mitarbeiter kommt vorbei.',
  schritte:[
    { amanda:'Kann ich Ihnen helfen?',
      hinweis:'Sag, was du suchst.',
      beispiel:'Ja bitte, ich suche Mehl.',
      redemittel:['Ich suche …','Entschuldigung, wo finde ich …?','Haben Sie …?'] },
    { amanda:'Mehl steht in Gang vier, ganz hinten links.',
      hinweis:'Bedanke dich oder frag nach, wenn du es nicht verstanden hast.',
      beispiel:'Gang vier, danke! Ist das neben dem Zucker?',
      redemittel:['Vielen Dank!','Wo genau?','Können Sie mir das zeigen?'] },
    { amanda:'Genau, direkt neben dem Zucker. Brauchen Sie sonst noch etwas?',
      hinweis:'Frag nach einer weiteren Sache — oder sag, dass alles gut ist.',
      beispiel:'Nein danke, das war alles. Sehr nett von Ihnen!',
      redemittel:['Nein danke, das war alles.','Eine Frage hätte ich noch …','Sie haben mir sehr geholfen.'] }
  ]
},
{
  id:'nachbarn', modus:'alltag', em:'🏠', titel:'Die Nachbarin kennenlernen', lvl:'A2', dauer:'3 Min',
  ort:'Du bist neu eingezogen und triffst im Treppenhaus deine Nachbarin.',
  schritte:[
    { amanda:'Oh, hallo! Sie sind neu hier, oder?',
      hinweis:'Stell dich vor.',
      beispiel:'Ja, genau. Ich heiße Omid, ich bin letzte Woche eingezogen.',
      redemittel:['Ich heiße …','Ich bin gerade eingezogen.','Freut mich, Sie kennenzulernen.'] },
    { amanda:'Herzlich willkommen! Ich bin Petra, ich wohne direkt über Ihnen. Woher kommen Sie denn?',
      hinweis:'Erzähl kurz, woher du kommst und wie lange du schon hier bist.',
      beispiel:'Ich komme aus dem Iran und lebe seit zwei Jahren in Deutschland.',
      redemittel:['Ich komme aus …','Ich lebe seit … hier.','Und Sie, wohnen Sie schon lange hier?'] },
    { amanda:'Und, gefällt es Ihnen hier im Viertel?',
      hinweis:'Sag deine Meinung und nenne einen Grund.',
      beispiel:'Ja, sehr! Es ist ruhig und der Park ist gleich um die Ecke.',
      redemittel:['Ja, sehr — vor allem …','Es ist noch ungewohnt, aber …','Was gefällt Ihnen hier am besten?'] },
    { amanda:'Wenn Sie etwas brauchen, klingeln Sie einfach. Ich bin fast immer da.',
      hinweis:'Bedanke dich herzlich.',
      beispiel:'Das ist sehr nett, danke! Das mache ich bestimmt.',
      redemittel:['Das ist sehr nett von Ihnen.','Vielen Dank, das hilft mir.','Gleichfalls — bei mir auch jederzeit.'] }
  ]
},
{
  id:'friseur', modus:'alltag', em:'💇', titel:'Beim Friseur', lvl:'A2', dauer:'3 Min',
  ort:'Du sitzt im Stuhl, die Friseurin fragt nach deinen Wünschen.',
  schritte:[
    { amanda:'So, was darf ich heute machen?',
      hinweis:'Sag, was du möchtest.',
      beispiel:'Nur die Spitzen schneiden, bitte. Etwa zwei Zentimeter.',
      redemittel:['Nur die Spitzen, bitte.','Ich möchte es kürzer.','Bitte nicht zu kurz.'] },
    { amanda:'Und die Länge oben? Soll das so bleiben?',
      hinweis:'Antworte genau — sag ja oder erkläre, was du willst.',
      beispiel:'Oben bitte so lassen, nur unten etwas dünner.',
      redemittel:['Oben bitte so lassen.','Etwas kürzer wäre gut.','Was würden Sie empfehlen?'] },
    { amanda:'Alles klar. Soll ich auch waschen und föhnen?',
      hinweis:'Entscheide dich und frag nach dem Preis.',
      beispiel:'Ja, gern. Was kostet das zusammen?',
      redemittel:['Ja, gern.','Nein danke, nur schneiden.','Was kostet das insgesamt?'] }
  ]
},
{
  id:'post', modus:'alltag', em:'📦', titel:'Ein Paket abholen', lvl:'A2', dauer:'2 Min',
  ort:'Du stehst in der Postfiliale mit einem Benachrichtigungszettel.',
  schritte:[
    { amanda:'Guten Tag, was kann ich für Sie tun?',
      hinweis:'Erkläre, warum du da bist.',
      beispiel:'Guten Tag, ich möchte ein Paket abholen. Hier ist der Zettel.',
      redemittel:['Ich möchte ein Paket abholen.','Hier ist die Benachrichtigung.','Ich habe eine Karte bekommen.'] },
    { amanda:'Haben Sie einen Ausweis dabei?',
      hinweis:'Antworte — und frag nach, falls du keinen hast.',
      beispiel:'Ja, hier ist mein Aufenthaltstitel. Geht der auch?',
      redemittel:['Ja, hier bitte.','Reicht mein Führerschein?','Ich habe leider nur …'] },
    { amanda:'Der geht auch. Einen Moment, ich hole das Paket. … So, bitte hier unterschreiben.',
      hinweis:'Bestätige und bedanke dich.',
      beispiel:'Alles klar, hier bitte. Vielen Dank!',
      redemittel:['Hier bitte.','Vielen Dank!','Muss ich noch etwas machen?'] }
  ]
},
{
  id:'wohnung', modus:'alltag', em:'🔑', titel:'Wohnungsbesichtigung', lvl:'B1', dauer:'4 Min',
  ort:'Du besichtigst eine Wohnung. Der Vermieter zeigt sie dir.',
  schritte:[
    { amanda:'Schön, dass Sie da sind. Das hier wäre das Wohnzimmer. Haben Sie Fragen?',
      hinweis:'Stell eine konkrete Frage zur Wohnung.',
      beispiel:'Ja — wie hoch sind denn die Nebenkosten im Monat?',
      redemittel:['Wie hoch sind die Nebenkosten?','Ist die Küche dabei?','Ab wann wäre die Wohnung frei?'] },
    { amanda:'Die Nebenkosten liegen bei etwa zweihundert Euro. Heizung ist dabei, Strom nicht.',
      hinweis:'Frag nach etwas, das dir wichtig ist.',
      beispiel:'Verstehe. Und darf man hier ein Haustier halten?',
      redemittel:['Und wie ist es mit …?','Darf man hier …?','Gibt es einen Keller?'] },
    { amanda:'Kleine Haustiere sind kein Problem. Darf ich fragen, was Sie beruflich machen?',
      hinweis:'Erzähl kurz von dir — Beruf und Situation.',
      beispiel:'Ich arbeite als Pflegekraft im Krankenhaus, unbefristet seit drei Jahren.',
      redemittel:['Ich arbeite als …','Ich habe einen unbefristeten Vertrag.','Ich wohne hier mit …'] },
    { amanda:'Das klingt gut. Ich melde mich bis Freitag bei Ihnen.',
      hinweis:'Zeig Interesse und verabschiede dich.',
      beispiel:'Sehr gern. Die Wohnung gefällt mir wirklich gut — ich freue mich auf Ihre Nachricht.',
      redemittel:['Die Wohnung gefällt mir sehr.','Ich freue mich auf Ihre Nachricht.','Vielen Dank für die Besichtigung.'] }
  ]
},
{
  id:'amt', modus:'alltag', em:'🏛️', titel:'Auf dem Amt anmelden', lvl:'B1', dauer:'4 Min',
  ort:'Bürgeramt, Anmeldung einer neuen Wohnung.',
  schritte:[
    { amanda:'Guten Tag. Nehmen Sie bitte Platz. Worum geht es?',
      hinweis:'Sag klar, was du brauchst.',
      beispiel:'Guten Tag. Ich möchte meine neue Wohnung anmelden.',
      redemittel:['Ich möchte mich anmelden.','Ich bin umgezogen.','Ich habe einen Termin um …'] },
    { amanda:'Haben Sie die Wohnungsgeberbestätigung dabei?',
      hinweis:'Antworte — auch wenn du das Wort nicht kennst, frag nach.',
      beispiel:'Entschuldigung, was ist das genau? Ich habe den Mietvertrag dabei.',
      redemittel:['Ja, hier bitte.','Was ist das genau?','Ich habe nur den Mietvertrag.'] },
    { amanda:'Das ist ein Formular, das Ihr Vermieter unterschreiben muss. Ohne das geht es leider nicht.',
      hinweis:'Frag, wie es jetzt weitergeht.',
      beispiel:'Verstehe. Kann ich das nachreichen oder brauche ich einen neuen Termin?',
      redemittel:['Kann ich das nachreichen?','Brauche ich einen neuen Termin?','Wo bekomme ich das Formular?'] },
    { amanda:'Sie können es per Post schicken oder in den Briefkasten werfen. Dann bearbeiten wir das.',
      hinweis:'Fasse zusammen, was du jetzt tun musst.',
      beispiel:'Also: Formular vom Vermieter unterschreiben lassen und einwerfen. Habe ich das richtig verstanden?',
      redemittel:['Also, ich muss …','Habe ich das richtig verstanden?','Bis wann muss das da sein?'] }
  ]
},
{
  id:'beschwerden', modus:'alltag', em:'🩺', titel:'Beschwerden beim Arzt', lvl:'A2–B1', dauer:'4 Min',
  ort:'Du sitzt im Sprechzimmer. Der Arzt schaut dich an.',
  schritte:[
    { amanda:'Guten Tag. Was führt Sie zu mir?',
      hinweis:'Beschreibe dein Problem: was, seit wann.',
      beispiel:'Ich habe seit einer Woche Kopfschmerzen und schlafe schlecht.',
      redemittel:['Ich habe seit … Schmerzen.','Mir ist oft schwindelig.','Ich fühle mich sehr müde.'] },
    { amanda:'Wo genau tut es weh? Und wie stark auf einer Skala von eins bis zehn?',
      hinweis:'Antworte möglichst genau.',
      beispiel:'Vor allem hinter den Augen. Ungefähr sechs von zehn.',
      redemittel:['Vor allem hier …','Der Schmerz ist stechend / dumpf.','Etwa … von zehn.'] },
    { amanda:'Nehmen Sie regelmäßig Medikamente?',
      hinweis:'Antworte ehrlich und vollständig.',
      beispiel:'Nur Vitamin D. Sonst nehme ich nichts.',
      redemittel:['Ich nehme regelmäßig …','Nein, gar keine.','Nur wenn ich Schmerzen habe.'] },
    { amanda:'Gut. Ich verschreibe Ihnen etwas und wir machen eine Blutuntersuchung.',
      hinweis:'Frag nach, was du nicht verstanden hast.',
      beispiel:'Danke. Was bedeutet das genau — muss ich nüchtern kommen?',
      redemittel:['Was bedeutet das genau?','Wie oft soll ich das nehmen?','Wann bekomme ich das Ergebnis?'] }
  ]
},
{
  id:'party', modus:'alltag', em:'🎉', titel:'Small Talk auf einer Feier', lvl:'A2–B1', dauer:'3 Min',
  ort:'Du bist auf der Geburtstagsfeier einer Kollegin. Jemand spricht dich an.',
  schritte:[
    { amanda:'Hi! Wir kennen uns noch gar nicht, oder? Ich bin Lena.',
      hinweis:'Stell dich vor und sag, woher du die Gastgeberin kennst.',
      beispiel:'Hi Lena, ich bin Sara. Ich arbeite mit Nina zusammen.',
      redemittel:['Ich bin …','Ich kenne … von der Arbeit.','Schön, dich kennenzulernen!'] },
    { amanda:'Ah, spannend! Und was machst du beruflich?',
      hinweis:'Erzähl kurz von deinem Beruf.',
      beispiel:'Ich bin Erzieherin in einem Kindergarten in der Nähe.',
      redemittel:['Ich arbeite als …','Ich bin gerade in Ausbildung.','Und du, was machst du?'] },
    { amanda:'Oh, das ist bestimmt anstrengend! Machst du das gern?',
      hinweis:'Sag deine Meinung und nenne einen Grund.',
      beispiel:'Sehr gern sogar. Die Kinder geben mir viel zurück, auch wenn es laut ist.',
      redemittel:['Ja, sehr gern — weil …','Manchmal ist es hart, aber …','Und wie ist das bei dir?'] }
  ]
},
{
  id:'umtausch', modus:'alltag', em:'🔁', titel:'Etwas umtauschen', lvl:'B1', dauer:'3 Min',
  ort:'Du bringst eine Jacke zurück, die Naht ist aufgegangen.',
  schritte:[
    { amanda:'Guten Tag, wie kann ich helfen?',
      hinweis:'Erkläre das Problem sachlich.',
      beispiel:'Guten Tag. Ich habe diese Jacke letzte Woche gekauft, aber die Naht ist schon kaputt.',
      redemittel:['Ich habe … gekauft, aber …','Da ist leider ein Fehler.','Ich möchte das reklamieren.'] },
    { amanda:'Haben Sie den Kassenbon dabei?',
      hinweis:'Antworte — und schlag eine Lösung vor, falls nicht.',
      beispiel:'Ja, hier. Ich hätte gern mein Geld zurück.',
      redemittel:['Ja, hier bitte.','Ich habe nur die Rechnung per E-Mail.','Ich hätte gern mein Geld zurück.'] },
    { amanda:'Wir tauschen normalerweise nur um. Wäre ein Gutschein in Ordnung?',
      hinweis:'Bleib freundlich, aber sag klar, was du willst.',
      beispiel:'Bei einem Fehler an der Ware habe ich aber Anspruch auf Erstattung. Das wäre mir lieber.',
      redemittel:['Das wäre mir lieber.','Ich bestehe auf …','Können Sie das bitte noch einmal prüfen?'] },
    { amanda:'Sie haben recht, das ist ein Materialfehler. Ich erstatte Ihnen den Betrag.',
      hinweis:'Bedanke dich.',
      beispiel:'Danke, das ist sehr freundlich von Ihnen.',
      redemittel:['Vielen Dank.','Das freut mich.','Danke für Ihre Hilfe.'] }
  ]
},
{
  id:'bahnhof', modus:'alltag', em:'🚉', titel:'Fahrkarte kaufen', lvl:'A1–A2', dauer:'2 Min',
  ort:'Am Schalter im Bahnhof.',
  schritte:[
    { amanda:'Guten Tag, wohin möchten Sie?',
      hinweis:'Sag dein Ziel und wann du fahren willst.',
      beispiel:'Guten Tag, nach Hamburg bitte, heute Nachmittag.',
      redemittel:['Nach … bitte.','Einmal … , einfach.','Hin und zurück, bitte.'] },
    { amanda:'Um 14:12 Uhr geht ein ICE, mit einem Umstieg in Hannover.',
      hinweis:'Frag nach, was du wissen musst.',
      beispiel:'Wie lange dauert die Fahrt insgesamt?',
      redemittel:['Wie lange dauert das?','Gibt es auch eine direkte Verbindung?','Von welchem Gleis fährt der Zug?'] },
    { amanda:'Vier Stunden zwanzig. Das Ticket kostet neunundvierzig Euro.',
      hinweis:'Kaufe die Karte oder frag nach einem günstigeren Angebot.',
      beispiel:'Gibt es eine günstigere Verbindung, wenn ich später fahre?',
      redemittel:['Das nehme ich.','Gibt es etwas Günstigeres?','Kann ich mit Karte zahlen?'] }
  ]
},

/* ---------------------------- BERUF ---------------------------- */
{
  id:'telefon-melden', modus:'business', em:'☎️', titel:'Sich am Telefon melden', lvl:'A2–B1', dauer:'3 Min',
  ort:'Du arbeitest im Büro. Das Telefon klingelt.',
  schritte:[
    { amanda:'Guten Tag, hier ist Frau Berger von der Firma Nordlicht. Spreche ich mit Herrn Kowal?',
      hinweis:'Melde dich richtig und bestätige.',
      beispiel:'Guten Tag Frau Berger, ja, Kowal am Apparat. Was kann ich für Sie tun?',
      redemittel:['… am Apparat.','Guten Tag, … , mein Name ist …','Was kann ich für Sie tun?'] },
    { amanda:'Es geht um unsere Lieferung von Dienstag. Die ist leider nicht angekommen.',
      hinweis:'Zeig, dass du zugehört hast, und frag nach Details.',
      beispiel:'Das tut mir leid. Können Sie mir bitte die Auftragsnummer nennen?',
      redemittel:['Das tut mir leid.','Können Sie mir bitte … nennen?','Ich kümmere mich darum.'] },
    { amanda:'Ja, das ist die 4-4-2-9-1.',
      hinweis:'Wiederhole die Nummer, damit kein Fehler passiert.',
      beispiel:'Also 4-4-2-9-1. Ich prüfe das und melde mich heute noch bei Ihnen.',
      redemittel:['Also … , richtig?','Ich prüfe das.','Ich melde mich bis … bei Ihnen.'] },
    { amanda:'Das wäre super. Vielen Dank!',
      hinweis:'Verabschiede dich beruflich.',
      beispiel:'Sehr gern. Einen schönen Tag noch, Frau Berger. Auf Wiederhören.',
      redemittel:['Sehr gern.','Auf Wiederhören.','Schönen Tag noch.'] }
  ]
},
{
  id:'bewerbung', modus:'business', em:'💼', titel:'Vorstellungsgespräch', lvl:'B1', dauer:'5 Min',
  ort:'Du sitzt im Bewerbungsgespräch. Zwei Personen schauen dich an.',
  schritte:[
    { amanda:'Schön, dass Sie da sind. Erzählen Sie doch bitte kurz etwas über sich.',
      hinweis:'Stell dich vor: Beruf, Erfahrung, warum du hier bist.',
      beispiel:'Gern. Ich bin gelernte Krankenpflegerin und arbeite seit vier Jahren auf einer Station. Jetzt suche ich eine Stelle mit mehr Verantwortung.',
      redemittel:['Ich bin gelernte/r …','Ich arbeite seit … als …','Zurzeit suche ich …'] },
    { amanda:'Und warum haben Sie sich gerade bei uns beworben?',
      hinweis:'Nenne einen konkreten Grund, der zur Firma passt.',
      beispiel:'Weil Sie viel in Weiterbildung investieren. Das ist mir wichtig, ich möchte mich fachlich weiterentwickeln.',
      redemittel:['Mich hat besonders … angesprochen.','Ich schätze, dass Sie …','Das passt gut zu meinem Ziel, …'] },
    { amanda:'Was würden Sie als Ihre größte Schwäche bezeichnen?',
      hinweis:'Sei ehrlich, aber zeig, wie du damit umgehst.',
      beispiel:'Ich sage schwer nein und nehme mir zu viel vor. Deshalb plane ich meine Woche inzwischen schriftlich.',
      redemittel:['Ich neige dazu, …','Daran arbeite ich, indem …','Früher war das ein Problem, heute …'] },
    { amanda:'Haben Sie noch Fragen an uns?',
      hinweis:'Stell eine gute Frage — das zeigt Interesse.',
      beispiel:'Ja: Wie sieht die Einarbeitung in den ersten Wochen aus?',
      redemittel:['Wie sieht die Einarbeitung aus?','Wie ist das Team aufgestellt?','Wann kann ich mit einer Rückmeldung rechnen?'] }
  ]
},
{
  id:'erster-tag', modus:'business', em:'👋', titel:'Erster Arbeitstag', lvl:'A2', dauer:'3 Min',
  ort:'Du kommst zum ersten Mal ins Büro. Eine Kollegin kommt auf dich zu.',
  schritte:[
    { amanda:'Hallo! Du bist bestimmt die neue Kollegin. Ich bin Miriam.',
      hinweis:'Stell dich vor und sag, wo du anfängst.',
      beispiel:'Hallo Miriam, ich bin Aisha. Ich fange heute in der Buchhaltung an.',
      redemittel:['Ich bin …','Ich fange heute in … an.','Freut mich!'] },
    { amanda:'Willkommen! Soll ich dir kurz alles zeigen?',
      hinweis:'Nimm das Angebot an und frag etwas Praktisches.',
      beispiel:'Sehr gern! Wo finde ich denn die Küche und die Toiletten?',
      redemittel:['Sehr gern.','Wo finde ich …?','Das wäre nett.'] },
    { amanda:'Küche ist am Ende des Flurs, Toiletten gleich daneben. Kaffee gibt es umsonst.',
      hinweis:'Bedanke dich und frag nach den Arbeitszeiten.',
      beispiel:'Danke! Und wann macht ihr normalerweise Mittagspause?',
      redemittel:['Danke dir!','Wann ist Mittagspause?','Gibt es feste Arbeitszeiten?'] }
  ]
},
{
  id:'hilfe-buero', modus:'business', em:'🙋', titel:'Um Hilfe bitten', lvl:'A2–B1', dauer:'3 Min',
  ort:'Du kommst mit einem Programm nicht weiter und fragst einen Kollegen.',
  schritte:[
    { amanda:'Ja? Was gibt es?',
      hinweis:'Frag höflich um Hilfe und sag, worum es geht.',
      beispiel:'Entschuldige die Störung — hast du kurz zwei Minuten? Ich komme mit dem Programm nicht weiter.',
      redemittel:['Hast du kurz Zeit?','Entschuldige die Störung …','Könntest du mir kurz helfen?'] },
    { amanda:'Klar, was funktioniert denn nicht?',
      hinweis:'Beschreibe das Problem konkret.',
      beispiel:'Ich kann die Rechnung nicht speichern. Es kommt immer eine Fehlermeldung.',
      redemittel:['Ich kann … nicht …','Es kommt immer eine Fehlermeldung.','Ich weiß nicht, wie ich …'] },
    { amanda:'Ah, das kenne ich. Du musst oben rechts erst das Projekt auswählen.',
      hinweis:'Bedanke dich und bestätige, dass du es verstanden hast.',
      beispiel:'Oben rechts das Projekt — verstanden. Vielen Dank, das hat mir sehr geholfen!',
      redemittel:['Verstanden, danke!','Also erst … , dann …','Das probiere ich gleich.'] }
  ]
},
{
  id:'meeting', modus:'business', em:'🗣️', titel:'Im Meeting die Meinung sagen', lvl:'B1–B2', dauer:'4 Min',
  ort:'Team-Besprechung. Es geht um einen neuen Ablauf.',
  schritte:[
    { amanda:'Wir wollen die Schichtplanung künftig digital machen. Wie sehen Sie das?',
      hinweis:'Sag deine Meinung und begründe sie.',
      beispiel:'Ich finde das grundsätzlich gut, weil wir dann alle denselben Stand haben.',
      redemittel:['Ich finde das gut, weil …','Aus meiner Sicht …','Ich sehe da vor allem den Vorteil, dass …'] },
    { amanda:'Frau Klein sagt, das kostet am Anfang zu viel Zeit. Was meinen Sie dazu?',
      hinweis:'Reagiere auf den Einwand — freundlich widersprechen oder zustimmen.',
      beispiel:'Da hat sie recht, am Anfang schon. Aber nach ein paar Wochen sparen wir Zeit.',
      redemittel:['Da hat sie recht, aber …','Ich sehe das anders, weil …','Das stimmt teilweise.'] },
    { amanda:'Und wie sollten wir dann starten?',
      hinweis:'Mach einen konkreten Vorschlag.',
      beispiel:'Ich würde vorschlagen, wir testen es einen Monat lang mit einer Station.',
      redemittel:['Ich würde vorschlagen, …','Wie wäre es, wenn wir …','Vielleicht könnten wir zuerst …'] },
    { amanda:'Guter Punkt. Nehmen wir das so auf.',
      hinweis:'Bestätige kurz und biete deine Hilfe an.',
      beispiel:'Sehr gern. Ich kann die Testphase begleiten, wenn Sie möchten.',
      redemittel:['Sehr gern.','Ich kann das übernehmen.','Melden Sie sich, wenn Sie Unterstützung brauchen.'] }
  ]
},
{
  id:'termin-verschieben', modus:'business', em:'📅', titel:'Einen Termin verschieben', lvl:'B1', dauer:'3 Min',
  ort:'Du musst einen Kundentermin absagen und neu legen.',
  schritte:[
    { amanda:'Firma Hoffmann, guten Tag.',
      hinweis:'Melde dich und komm zum Punkt.',
      beispiel:'Guten Tag, hier ist Luca Ferrari. Es geht um unseren Termin am Donnerstag.',
      redemittel:['Hier ist …','Es geht um unseren Termin am …','Ich rufe an, weil …'] },
    { amanda:'Ja, Donnerstag zehn Uhr. Stimmt etwas nicht?',
      hinweis:'Erkläre höflich, warum es nicht geht.',
      beispiel:'Leider muss ich den Termin verschieben — mir ist etwas dazwischengekommen.',
      redemittel:['Leider muss ich verschieben.','Es tut mir leid, aber …','Mir ist etwas dazwischengekommen.'] },
    { amanda:'Kein Problem. Wann würde es Ihnen denn passen?',
      hinweis:'Schlag zwei konkrete Zeiten vor.',
      beispiel:'Ginge es am Freitag um zehn oder alternativ Montag nachmittags?',
      redemittel:['Ginge es am … um …?','Wie sieht es bei Ihnen am … aus?','Ich hätte Zeit am …'] },
    { amanda:'Freitag zehn Uhr passt gut. Dann trage ich das so ein.',
      hinweis:'Bestätige und bedanke dich.',
      beispiel:'Perfekt, Freitag zehn Uhr. Vielen Dank für Ihr Verständnis!',
      redemittel:['Perfekt, dann bis …','Vielen Dank für Ihr Verständnis.','Ich schicke Ihnen noch eine Bestätigung.'] }
  ]
},
{
  id:'krankmeldung', modus:'business', em:'🤒', titel:'Sich krankmelden', lvl:'A2–B1', dauer:'2 Min',
  ort:'Du bist krank und rufst morgens im Büro an.',
  schritte:[
    { amanda:'Guten Morgen, Personalbüro, Schulz.',
      hinweis:'Melde dich und sag, warum du anrufst.',
      beispiel:'Guten Morgen Frau Schulz, hier ist Yusuf Demir. Ich muss mich leider krankmelden.',
      redemittel:['Hier ist …','Ich muss mich krankmelden.','Ich kann heute leider nicht kommen.'] },
    { amanda:'Oh, das tut mir leid. Was fehlt Ihnen denn?',
      hinweis:'Sag kurz, was los ist — Details sind nicht nötig.',
      beispiel:'Ich habe Fieber und starke Halsschmerzen.',
      redemittel:['Ich habe …','Mir geht es seit gestern schlecht.','Ich war schon beim Arzt.'] },
    { amanda:'Gute Besserung! Denken Sie an die Krankmeldung ab dem dritten Tag.',
      hinweis:'Bestätige und sag, wie es weitergeht.',
      beispiel:'Mache ich. Ich melde mich morgen wieder und sage Bescheid.',
      redemittel:['Mache ich.','Ich melde mich morgen.','Ich schicke die Bescheinigung per Post.'] }
  ]
},
{
  id:'urlaub', modus:'business', em:'🏖️', titel:'Urlaub beantragen', lvl:'A2–B1', dauer:'3 Min',
  ort:'Du gehst zu deiner Chefin und möchtest Urlaub nehmen.',
  schritte:[
    { amanda:'Ja, kommen Sie rein. Was gibt es?',
      hinweis:'Sag höflich, was du möchtest.',
      beispiel:'Hätten Sie kurz Zeit? Ich würde gern Urlaub beantragen.',
      redemittel:['Hätten Sie kurz Zeit?','Ich würde gern Urlaub nehmen.','Es geht um meinen Urlaub.'] },
    { amanda:'Klar. In welchem Zeitraum denn?',
      hinweis:'Nenne die Tage genau.',
      beispiel:'Vom 12. bis 23. August, also zwei Wochen.',
      redemittel:['Vom … bis zum …','Insgesamt … Tage.','Wenn das möglich ist.'] },
    { amanda:'Da ist Frau Ortiz auch weg. Ginge auch die Woche danach?',
      hinweis:'Reagiere flexibel — oder erkläre, warum es nicht geht.',
      beispiel:'Schwierig, die Flüge sind schon gebucht. Ich könnte aber die letzte Woche kürzen.',
      redemittel:['Das ist leider schwierig, weil …','Ich könnte … anpassen.','Ja, das ginge auch.'] },
    { amanda:'Gut, machen wir das so. Tragen Sie es bitte ins System ein.',
      hinweis:'Bedanke dich und bestätige.',
      beispiel:'Super, vielen Dank! Ich trage es heute noch ein.',
      redemittel:['Vielen Dank!','Mache ich sofort.','Das ist sehr entgegenkommend.'] }
  ]
},
{
  id:'kunde', modus:'business', em:'🤝', titel:'Kunden am Telefon beruhigen', lvl:'B1–B2', dauer:'4 Min',
  ort:'Ein Kunde ist verärgert, weil etwas schiefgelaufen ist.',
  schritte:[
    { amanda:'Also ehrlich, das ist jetzt das dritte Mal, dass die Lieferung zu spät kommt!',
      hinweis:'Nimm den Ärger ernst, bevor du erklärst.',
      beispiel:'Das kann ich gut verstehen, das ärgert mich auch. Es tut mir wirklich leid.',
      redemittel:['Das kann ich gut verstehen.','Es tut mir aufrichtig leid.','Sie haben völlig recht.'] },
    { amanda:'Und was machen Sie jetzt dagegen?',
      hinweis:'Nenne eine konkrete Lösung, keine Ausreden.',
      beispiel:'Ich kläre das heute noch mit dem Lager und rufe Sie bis 16 Uhr mit einem festen Termin zurück.',
      redemittel:['Ich kümmere mich persönlich darum.','Ich melde mich bis … bei Ihnen.','Als Lösung schlage ich vor …'] },
    { amanda:'Na gut. Aber ich erwarte, dass das jetzt wirklich klappt.',
      hinweis:'Bestätige verbindlich und bedanke dich für die Geduld.',
      beispiel:'Das verspreche ich Ihnen. Danke, dass Sie so offen waren — das hilft uns.',
      redemittel:['Darauf können Sie sich verlassen.','Danke für Ihre Geduld.','Ich melde mich auf jeden Fall.'] }
  ]
},
{
  id:'gehalt', modus:'business', em:'💶', titel:'Über Gehalt sprechen', lvl:'B2', dauer:'4 Min',
  ort:'Jahresgespräch mit deiner Vorgesetzten.',
  schritte:[
    { amanda:'Sie wollten über Ihr Gehalt sprechen. Erzählen Sie.',
      hinweis:'Sag klar, was du möchtest — und beginne mit deiner Leistung.',
      beispiel:'Ja. Ich habe dieses Jahr die neue Schichtplanung eingeführt und zwei Kolleginnen eingearbeitet. Deshalb möchte ich über eine Anpassung sprechen.',
      redemittel:['Ich habe dieses Jahr …','Deshalb möchte ich über … sprechen.','Meine Aufgaben sind gewachsen.'] },
    { amanda:'An welche Größenordnung denken Sie denn?',
      hinweis:'Nenne eine konkrete Zahl — mit Begründung.',
      beispiel:'Ich denke an eine Erhöhung von acht Prozent. Das entspricht dem, was für diese Aufgaben üblich ist.',
      redemittel:['Ich denke an …','Das entspricht dem Marktniveau.','Realistisch wären aus meiner Sicht …'] },
    { amanda:'Das ist im Moment schwierig. Wir haben ein enges Budget.',
      hinweis:'Bleib ruhig und schlag eine Alternative vor.',
      beispiel:'Das verstehe ich. Wäre eine kleinere Anpassung jetzt und eine Überprüfung in sechs Monaten möglich?',
      redemittel:['Das verstehe ich.','Wäre … möglich?','Können wir das in … Monaten noch einmal ansehen?'] },
    { amanda:'Das könnten wir machen. Ich spreche mit der Geschäftsführung.',
      hinweis:'Bedanke dich und halte es verbindlich fest.',
      beispiel:'Danke. Sollen wir gleich einen Termin für die Rückmeldung festhalten?',
      redemittel:['Vielen Dank.','Wann kann ich mit einer Antwort rechnen?','Halten wir das schriftlich fest?'] }
  ]
},
{
  id:'feedback', modus:'business', em:'💬', titel:'Kritik freundlich äußern', lvl:'B2', dauer:'3 Min',
  ort:'Eine Kollegin liefert Unterlagen immer sehr spät.',
  schritte:[
    { amanda:'Du wolltest mit mir sprechen? Ist was?',
      hinweis:'Beginne freundlich und sachlich — ohne Vorwurf.',
      beispiel:'Ja, kurz. Mir ist aufgefallen, dass die Unterlagen oft erst am Abend kommen.',
      redemittel:['Mir ist aufgefallen, dass …','Ich wollte etwas ansprechen.','Es geht mir nicht um Schuld, sondern um …'] },
    { amanda:'Ich habe aber auch wahnsinnig viel zu tun gerade.',
      hinweis:'Zeig Verständnis — und erkläre trotzdem, was du brauchst.',
      beispiel:'Das glaube ich dir sofort. Für mich wäre wichtig, dass ich sie bis Mittag habe, sonst schaffe ich meinen Teil nicht.',
      redemittel:['Das glaube ich dir.','Für mich wäre wichtig, dass …','Sonst kann ich … nicht.'] },
    { amanda:'Okay. Wenn ich es bis zwölf schicke, reicht das?',
      hinweis:'Bestätige die Lösung und bedanke dich.',
      beispiel:'Ja, das wäre perfekt. Danke, dass du so offen darüber sprichst.',
      redemittel:['Das wäre perfekt.','Danke für dein Verständnis.','Dann machen wir das so.'] }
  ]
},
{
  id:'praktikum', modus:'business', em:'🎓', titel:'Nach einem Praktikum fragen', lvl:'B1', dauer:'3 Min',
  ort:'Du rufst in einem Betrieb an und fragst nach einem Praktikumsplatz.',
  schritte:[
    { amanda:'Autohaus Kremer, guten Tag.',
      hinweis:'Stell dich vor und sag, warum du anrufst.',
      beispiel:'Guten Tag, mein Name ist Dario Popescu. Ich interessiere mich für einen Praktikumsplatz bei Ihnen.',
      redemittel:['Mein Name ist …','Ich interessiere mich für …','Ich rufe an, weil …'] },
    { amanda:'Ah, in welchem Bereich denn?',
      hinweis:'Sag genau, was du willst und was du kannst.',
      beispiel:'In der Kfz-Werkstatt. Ich habe in Rumänien zwei Jahre als Mechaniker gearbeitet.',
      redemittel:['Im Bereich …','Ich habe Erfahrung in …','Ich lerne gerade Deutsch auf Niveau …'] },
    { amanda:'Klingt interessant. Schicken Sie mir doch bitte Ihre Unterlagen per Mail.',
      hinweis:'Frag nach den Details — Adresse, Zeitpunkt, Ansprechpartner.',
      beispiel:'Sehr gern. An welche Adresse und an wen genau soll ich sie schicken?',
      redemittel:['An welche Adresse?','An wen darf ich sie richten?','Bis wann soll ich mich melden?'] }
  ]
}
];
