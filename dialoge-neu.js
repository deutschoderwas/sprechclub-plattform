/* ============================================================
   dialoge-neu.js — Dialoge fuer die fuenf Bereiche ohne einen

   Kochen, Medizin, Reinigung, Technik/Planung und Landwirtschaft
   hatten Wortschatz und Hoertexte, aber keine einzige Situation
   zum Mitreden.

   Wird NACH dialoge.js geladen und haengt seine Situationen an.
   dialoge.js bleibt unangetastet; nimmt man die Zeile in
   konto.html heraus, ist alles wie vorher.

   Aufbau je Schritt wie in dialoge.js:
     amanda · hinweis · beispiel · redemittel
   ============================================================ */
(function () {
  if (!window.DIALOGE || !window.DIALOGE.push) return;

  var NEU = [
 {
  "id": "einkaufszettel",
  "modus": "alltag", "em": "🥕", "titel": "Was kochen wir heute?", "lvl": "A2",
  "dauer": "3 Min", "kat": "essen",
  "ort": "Ihr steht in der Küche und überlegt, was es heute zu essen gibt.",
  "schritte": [
   { "amanda": "Ich habe Hunger. Was kochen wir denn heute?",
     "hinweis": "Mach einen Vorschlag und sag, warum.",
     "beispiel": "Wie wäre es mit Suppe? Es ist kalt draußen.",
     "redemittel": ["Wie wäre es mit …?", "Ich hätte Lust auf …", "Wir könnten … machen."] },
   { "amanda": "Suppe klingt gut. Haben wir alles da?",
     "hinweis": "Sag, was da ist und was fehlt.",
     "beispiel": "Kartoffeln und Zwiebeln haben wir. Möhren fehlen noch.",
     "redemittel": ["Wir haben noch …", "Es fehlt nur …", "… ist alle."] },
   { "amanda": "Dann gehe ich einkaufen. Wie viel brauchen wir?",
     "hinweis": "Nenn eine Menge.",
     "beispiel": "Ein Kilo Möhren reicht, wir sind ja zu dritt.",
     "redemittel": ["Ein Kilo …", "Eine Packung …", "Das reicht für …"] },
   { "amanda": "Soll ich noch etwas mitbringen?",
     "hinweis": "Nenn noch zwei Sachen — und sei höflich.",
     "beispiel": "Wenn du magst, noch Brot und Sahne. Danke dir!",
     "redemittel": ["Wenn du magst, noch …", "Bring bitte auch …", "Das wäre lieb."] },
   { "amanda": "Und wer kocht?",
     "hinweis": "Teilt die Arbeit auf.",
     "beispiel": "Ich schneide das Gemüse, du kochst — einverstanden?",
     "redemittel": ["Ich mache …, du machst …", "Einverstanden?", "Ich übernehme …"] }
  ]
 },
 {
  "id": "rezept-erklaeren",
  "modus": "alltag", "em": "🍲", "titel": "Ein Rezept erklären", "lvl": "B1",
  "dauer": "3 Min", "kat": "essen",
  "ort": "Eine Freundin will wissen, wie du dein Lieblingsgericht kochst.",
  "schritte": [
   { "amanda": "Das schmeckt so gut! Wie machst du das?",
     "hinweis": "Nenn zuerst die wichtigsten Zutaten.",
     "beispiel": "Es sind nur vier Sachen: Reis, Zwiebeln, Tomaten und Öl.",
     "redemittel": ["Man braucht …", "Es sind nur …", "Das Wichtigste ist …"] },
   { "amanda": "Und wie fängst du an?",
     "hinweis": "Beschreibe den ersten Schritt.",
     "beispiel": "Zuerst schneide ich die Zwiebeln und brate sie kurz an.",
     "redemittel": ["Zuerst …", "Als Erstes …", "Ich fange mit … an."] },
   { "amanda": "Und dann?",
     "hinweis": "Zwei weitere Schritte, in der richtigen Reihenfolge.",
     "beispiel": "Dann kommen die Tomaten dazu, und zum Schluss der Reis.",
     "redemittel": ["Dann …", "Danach …", "Zum Schluss …"] },
   { "amanda": "Wie lange muss das kochen?",
     "hinweis": "Nenn eine Zeit und woran man das Ende erkennt.",
     "beispiel": "Etwa zwanzig Minuten — bis der Reis weich ist.",
     "redemittel": ["Etwa … Minuten.", "So lange, bis …", "Man merkt es daran, dass …"] },
   { "amanda": "Kann man auch etwas weglassen?",
     "hinweis": "Sag, was man tauschen kann.",
     "beispiel": "Statt Reis geht auch Nudeln. Ohne Zwiebeln schmeckt es weniger.",
     "redemittel": ["Statt … kann man …", "Ohne … schmeckt es …", "Das geht auch mit …"] }
  ]
 },
 {
  "id": "anamnese-kurz",
  "modus": "business", "em": "🩺", "titel": "Beschwerden erfragen", "lvl": "B2",
  "dauer": "4 Min", "kat": "gesundheit",
  "ort": "Du bist in der Praxis. Eine Patientin sitzt vor dir und klagt über Bauchschmerzen.",
  "schritte": [
   { "amanda": "Guten Tag. Ich habe seit ein paar Tagen Bauchschmerzen.",
     "hinweis": "Begrüße sie und frag nach dem Beginn.",
     "beispiel": "Guten Tag. Seit wann genau haben Sie die Schmerzen?",
     "redemittel": ["Seit wann genau …?", "Wann hat das angefangen?", "Erzählen Sie mir bitte …"] },
   { "amanda": "Seit Montag, glaube ich. Mal mehr, mal weniger.",
     "hinweis": "Frag nach Ort und Stärke.",
     "beispiel": "Können Sie mir zeigen, wo genau? Und wie stark ist es von eins bis zehn?",
     "redemittel": ["Können Sie mir zeigen, wo …?", "Wie stark sind die Schmerzen?", "Strahlt es irgendwohin aus?"] },
   { "amanda": "Hier unten rechts. Vielleicht eine Sechs.",
     "hinweis": "Frag nach Begleitsymptomen.",
     "beispiel": "Hatten Sie Fieber, Übelkeit oder Durchfall dazu?",
     "redemittel": ["Hatten Sie auch …?", "Ist Ihnen übel?", "Haben Sie Fieber gemessen?"] },
   { "amanda": "Übel war mir gestern, ja. Fieber habe ich nicht gemessen.",
     "hinweis": "Erklär, was du jetzt machst — ohne Fachwörter.",
     "beispiel": "Ich taste den Bauch ab und nehme Blut ab. Das dauert ein paar Minuten.",
     "redemittel": ["Ich schaue mir … an.", "Wir machen zuerst …", "Das dauert etwa …"] },
   { "amanda": "Ist das etwas Schlimmes?",
     "hinweis": "Antworte ehrlich und ruhig, ohne ein Ergebnis zu versprechen.",
     "beispiel": "Das kann ich erst nach der Untersuchung sagen. Wir klären das heute.",
     "redemittel": ["Das kann ich erst sagen, wenn …", "Im Moment sieht es … aus.", "Wir klären das heute."] }
  ]
 },
 {
  "id": "befund-erklaeren",
  "modus": "business", "em": "📋", "titel": "Einen Befund erklären", "lvl": "B2",
  "dauer": "3 Min", "kat": "gesundheit",
  "ort": "Der Blutwert ist auffällig. Der Patient versteht die Zahlen nicht.",
  "schritte": [
   { "amanda": "Auf dem Zettel stehen so viele Zahlen. Was heißt das denn?",
     "hinweis": "Nenn zuerst das Wichtigste in einem Satz.",
     "beispiel": "Das Wichtigste zuerst: Ein Wert ist zu niedrig, alles andere ist in Ordnung.",
     "redemittel": ["Das Wichtigste zuerst: …", "Kurz gesagt: …", "Ein Wert fällt auf: …"] },
   { "amanda": "Welcher denn?",
     "hinweis": "Erklär den Wert in einfachen Worten.",
     "beispiel": "Ihr Eisenwert. Eisen braucht der Körper, um Blut zu bilden.",
     "redemittel": ["Das ist der Wert für …", "Der Körper braucht das, um …", "Man kann sich das so vorstellen: …"] },
   { "amanda": "Und deshalb bin ich so müde?",
     "hinweis": "Bestätige vorsichtig und ohne zu übertreiben.",
     "beispiel": "Das passt gut zusammen, ja. Sicher sind wir nach der nächsten Kontrolle.",
     "redemittel": ["Das passt zusammen.", "Möglich ist es.", "Sicher wissen wir es, wenn …"] },
   { "amanda": "Was mache ich jetzt?",
     "hinweis": "Nenn zwei klare Schritte.",
     "beispiel": "Sie nehmen vier Wochen Tabletten, dann messen wir noch einmal.",
     "redemittel": ["Zuerst …, danach …", "Sie nehmen … für …", "Wir sehen uns in … wieder."] },
   { "amanda": "Und wenn es nicht besser wird?",
     "hinweis": "Sag, wann er sich melden soll.",
     "beispiel": "Wenn Sie nach zwei Wochen keine Besserung merken, rufen Sie an.",
     "redemittel": ["Melden Sie sich, wenn …", "Sollte … nicht besser werden, dann …", "Rufen Sie ruhig an."] }
  ]
 },
 {
  "id": "reinigung-uebergabe",
  "modus": "business", "em": "🧽", "titel": "Schicht übergeben", "lvl": "A2",
  "dauer": "3 Min", "kat": "team",
  "ort": "Deine Schicht ist zu Ende. Die Kollegin von der Spätschicht kommt.",
  "schritte": [
   { "amanda": "Hallo! Wie war es heute — alles geschafft?",
     "hinweis": "Sag, was fertig ist.",
     "beispiel": "Hallo! Die Büros und der Flur sind fertig, alles gewischt.",
     "redemittel": ["… ist fertig.", "Ich habe schon …", "Alles erledigt bis auf …"] },
   { "amanda": "Und was ist noch offen?",
     "hinweis": "Nenn, was liegen geblieben ist, und warum.",
     "beispiel": "Der Besprechungsraum fehlt noch. Da war bis eben ein Termin.",
     "redemittel": ["Offen ist noch …", "Ich bin nicht dazu gekommen, weil …", "Bitte mach du noch …"] },
   { "amanda": "Ist mit dem Material alles in Ordnung?",
     "hinweis": "Sag, was fehlt oder kaputt ist.",
     "beispiel": "Das Reinigungsmittel für die Böden ist fast leer, bitte nachbestellen.",
     "redemittel": ["… ist fast leer.", "… ist kaputt.", "Wir brauchen neue …"] },
   { "amanda": "Gab es sonst etwas?",
     "hinweis": "Erwähne eine Beschwerde oder Besonderheit.",
     "beispiel": "Im dritten Stock hat sich jemand über den Flur beschwert. Ich habe ihn noch einmal gemacht.",
     "redemittel": ["Es gab eine Beschwerde über …", "Achte bitte auf …", "Aufgefallen ist mir …"] },
   { "amanda": "Alles klar. Schönen Feierabend!",
     "hinweis": "Verabschiede dich und sag, wann du wieder da bist.",
     "beispiel": "Danke dir! Ich bin morgen wieder in der Frühschicht.",
     "redemittel": ["Danke, dir auch!", "Morgen bin ich wieder …", "Bis morgen!"] }
  ]
 },
 {
  "id": "reinigung-beschwerde",
  "modus": "business", "em": "📢", "titel": "Eine Beschwerde annehmen", "lvl": "B1",
  "dauer": "3 Min", "kat": "kunden",
  "ort": "Eine Mitarbeiterin sagt dir, dass ihr Büro gestern nicht sauber war.",
  "schritte": [
   { "amanda": "Entschuldigung — mein Büro war gestern überhaupt nicht gemacht.",
     "hinweis": "Hör zu und zeig, dass du es ernst nimmst.",
     "beispiel": "Das tut mir leid, das sollte nicht passieren. Welches Zimmer ist es?",
     "redemittel": ["Das tut mir leid.", "Danke, dass Sie es sagen.", "Um welchen Raum geht es?"] },
   { "amanda": "Zimmer 212. Der Papierkorb war voll und der Boden staubig.",
     "hinweis": "Frag genau nach, ohne dich zu verteidigen.",
     "beispiel": "Verstanden — Papierkorb und Boden. War das nur gestern so?",
     "redemittel": ["Verstanden: …", "War das nur gestern?", "Ist Ihnen noch mehr aufgefallen?"] },
   { "amanda": "Vorgestern war es auch schon nicht besonders.",
     "hinweis": "Sag, was du jetzt tust.",
     "beispiel": "Ich mache das Zimmer heute selbst und schaue mir den Plan an.",
     "redemittel": ["Ich kümmere mich darum.", "Ich mache heute …", "Ich schaue nach, woran es lag."] },
   { "amanda": "Danke. Kann ich mich darauf verlassen?",
     "hinweis": "Gib eine Zusage, die du auch halten kannst.",
     "beispiel": "Ja. Bis heute Abend ist es gemacht, ich sage Ihnen morgen Bescheid.",
     "redemittel": ["Bis … ist es erledigt.", "Ich gebe Ihnen Bescheid.", "Sie können sich darauf verlassen."] },
   { "amanda": "Gut, danke Ihnen.",
     "hinweis": "Bedanke dich für den Hinweis.",
     "beispiel": "Gern. Und sagen Sie mir gern gleich Bescheid, wenn wieder etwas ist.",
     "redemittel": ["Gern.", "Sagen Sie mir ruhig Bescheid.", "Danke für den Hinweis."] }
  ]
 },
 {
  "id": "abnahme-begleiten",
  "modus": "business", "em": "📐", "titel": "Eine Abnahme begleiten", "lvl": "B2",
  "dauer": "4 Min", "kat": "kunden",
  "ort": "Der Kunde steht vor der neuen Anlage. Zwei Punkte sind noch offen.",
  "schritte": [
   { "amanda": "Wir würden heute gern abnehmen. Ist alles fertig?",
     "hinweis": "Sag ehrlich, was steht und was nicht.",
     "beispiel": "Die Anlage läuft. Zwei Punkte sind noch offen, die zeige ich Ihnen gleich.",
     "redemittel": ["Die Anlage läuft.", "Offen sind noch …", "Ich zeige Ihnen …"] },
   { "amanda": "Welche Punkte sind das?",
     "hinweis": "Nenn beide sachlich, ohne Ausreden.",
     "beispiel": "Die Abdeckung fehlt noch, und ein Sensor wird nächste Woche getauscht.",
     "redemittel": ["Erstens …, zweitens …", "Es fehlt noch …", "… wird ausgetauscht."] },
   { "amanda": "Und warum ist das nicht fertig?",
     "hinweis": "Begründe kurz und nenn einen Termin.",
     "beispiel": "Das Teil kam verspätet vom Lieferanten. Am Donnerstag ist es montiert.",
     "redemittel": ["Der Grund ist …", "Am … ist es erledigt.", "Wir haben es schon bestellt."] },
   { "amanda": "Können wir trotzdem abnehmen?",
     "hinweis": "Schlag eine Abnahme mit Restpunkten vor.",
     "beispiel": "Ja — wir nehmen mit diesen beiden Restpunkten ab und halten sie schriftlich fest.",
     "redemittel": ["Wir können … mit Restpunkten abnehmen.", "Wir halten schriftlich fest, dass …", "Das würde ich so vorschlagen."] },
   { "amanda": "Einverstanden. Wer schreibt das auf?",
     "hinweis": "Sag, wer was macht und bis wann.",
     "beispiel": "Ich schicke Ihnen das Protokoll heute Abend zum Gegenlesen.",
     "redemittel": ["Ich schicke Ihnen …", "Bitte lesen Sie gegen.", "Bis … haben Sie es."] }
  ]
 },
 {
  "id": "aenderung-begruenden",
  "modus": "business", "em": "🔧", "titel": "Eine Änderung begründen", "lvl": "B2",
  "dauer": "3 Min", "kat": "buero",
  "ort": "In der Fertigung passt ein Maß nicht. Du musst die Zeichnung ändern lassen.",
  "schritte": [
   { "amanda": "Du willst die Zeichnung ändern? Wir sind mitten in der Fertigung.",
     "hinweis": "Sag klar, worum es geht.",
     "beispiel": "Ja. Die Bohrung muss zwei Millimeter weiter nach innen.",
     "redemittel": ["Es geht um …", "Wir müssen … ändern.", "Konkret: …"] },
   { "amanda": "Warum? Bisher lief es doch.",
     "hinweis": "Nenn den Grund, kurz und nachvollziehbar.",
     "beispiel": "An der Schnittstelle stößt die Schraube an. Das haben wir erst beim Einbau gesehen.",
     "redemittel": ["Der Grund ist …", "Aufgefallen ist das beim …", "Sonst passiert Folgendes: …"] },
   { "amanda": "Was kostet uns das?",
     "hinweis": "Nenn Aufwand und Folgen ehrlich.",
     "beispiel": "Zwei Tage und zehn Teile in die Nacharbeit. Ohne Änderung wären es mehr.",
     "redemittel": ["Der Aufwand ist …", "Das kostet uns …", "Ohne die Änderung wäre …"] },
   { "amanda": "Geht es nicht anders?",
     "hinweis": "Zeig, dass du Alternativen geprüft hast.",
     "beispiel": "Ich habe zwei Wege geprüft. Der andere wäre billiger, hält aber nicht dauerhaft.",
     "redemittel": ["Ich habe … geprüft.", "Die Alternative wäre …, aber …", "Dauerhaft hält nur …"] },
   { "amanda": "Gut. Was brauchst du von mir?",
     "hinweis": "Bitte um die Freigabe und nenn den nächsten Schritt.",
     "beispiel": "Deine Freigabe bis morgen früh, dann geht die neue Zeichnung raus.",
     "redemittel": ["Ich brauche deine Freigabe bis …", "Danach …", "Ich melde mich, sobald …"] }
  ]
 },
 {
  "id": "hof-einweisung",
  "modus": "business", "em": "🚜", "titel": "Einen Helfer einweisen", "lvl": "B1",
  "dauer": "3 Min", "kat": "handwerk",
  "ort": "Ein neuer Saisonhelfer steht vor dir. Heute wird geerntet.",
  "schritte": [
   { "amanda": "Guten Morgen! Ich bin neu — was soll ich machen?",
     "hinweis": "Begrüße ihn und sag, was heute ansteht.",
     "beispiel": "Guten Morgen! Heute ernten wir das Feld hinter der Scheune.",
     "redemittel": ["Heute machen wir …", "Deine Aufgabe ist …", "Wir fangen mit … an."] },
   { "amanda": "Und wie genau?",
     "hinweis": "Erklär die Arbeit in drei Schritten.",
     "beispiel": "Erst die Kiste holen, dann Reihe für Reihe pflücken, volle Kisten an den Weg stellen.",
     "redemittel": ["Erst …, dann …, danach …", "Wichtig ist, dass …", "Immer der Reihe nach."] },
   { "amanda": "Woran erkenne ich, was reif ist?",
     "hinweis": "Gib ein einfaches Erkennungszeichen.",
     "beispiel": "Nimm nur die dunklen. Die hellen bleiben noch zwei Tage hängen.",
     "redemittel": ["Nimm nur …", "Alles, was … ist, bleibt hängen.", "Du erkennst es an …"] },
   { "amanda": "Wann ist Pause?",
     "hinweis": "Sag Zeiten und wo.",
     "beispiel": "Um neun eine Viertelstunde, um zwölf eine halbe. Vorn am Schuppen.",
     "redemittel": ["Um … ist Pause.", "Wir treffen uns bei …", "Feierabend ist um …"] },
   { "amanda": "Und wenn ich etwas nicht weiß?",
     "hinweis": "Sag, an wen er sich wendet.",
     "beispiel": "Dann frag mich oder Petra. Lieber einmal fragen als eine Reihe falsch machen.",
     "redemittel": ["Dann frag einfach …", "Lieber fragen als …", "Ich bin auf dem Feld."] }
  ]
 },
 {
  "id": "wetter-arbeit",
  "modus": "business", "em": "🌧️", "titel": "Wetter ändert den Plan", "lvl": "B1",
  "dauer": "3 Min", "kat": "handwerk",
  "ort": "Es regnet seit dem Morgen. Die geplante Arbeit auf dem Feld geht nicht.",
  "schritte": [
   { "amanda": "Bei dem Regen können wir doch nicht raus, oder?",
     "hinweis": "Sag, was heute nicht geht — und warum.",
     "beispiel": "Nein. Der Boden ist zu nass, der Traktor bleibt stecken.",
     "redemittel": ["Heute geht … nicht.", "Der Grund ist …", "Bei dem Wetter …"] },
   { "amanda": "Und was machen wir stattdessen?",
     "hinweis": "Schlag zwei andere Arbeiten vor.",
     "beispiel": "Wir könnten die Halle aufräumen und die Maschinen prüfen.",
     "redemittel": ["Wir könnten …", "Stattdessen machen wir …", "Das wäre auch mal dran."] },
   { "amanda": "Wie lange dauert das?",
     "hinweis": "Nenn eine Zeit.",
     "beispiel": "Bis Mittag sind wir durch, denke ich.",
     "redemittel": ["Bis … sind wir fertig.", "Das dauert etwa …", "Höchstens …"] },
   { "amanda": "Und wann holen wir das Feld nach?",
     "hinweis": "Nenn einen neuen Termin — mit Vorbehalt.",
     "beispiel": "Wenn es morgen trocken bleibt, fangen wir früh um sechs an.",
     "redemittel": ["Wenn … bleibt, dann …", "Sonst verschieben wir auf …", "Wir schauen morgen früh."] },
   { "amanda": "Sag ich das den anderen?",
     "hinweis": "Klärt, wer wen informiert.",
     "beispiel": "Ja, sag du es den Helfern. Ich rufe beim Nachbarn wegen der Maschine an.",
     "redemittel": ["Sag du bitte …", "Ich kümmere mich um …", "Dann weiß es jeder."] }
  ]
 }
 ,
 {
  "id": "telefon-praxis",
  "modus": "alltag", "em": "☎️", "titel": "Beim Arzt anrufen", "lvl": "A2",
  "dauer": "3 Min", "kat": "gesundheit",
  "ort": "Du rufst in einer Praxis an und willst einen Termin. Am Telefon geht alles schneller als im Kurs.",
  "schritte": [
   { "amanda": "Praxis Dr. Sommer, Sie sprechen mit Frau Yildiz, guten Tag.",
     "hinweis": "Melde dich mit deinem Namen und sag, warum du anrufst.",
     "beispiel": "Guten Tag, mein Name ist Ana Silva. Ich hätte gern einen Termin.",
     "redemittel": ["Mein Name ist …", "Ich hätte gern …", "Ich rufe an, weil …"] },
   { "amanda": "Wie war Ihr Name? Können Sie den buchstabieren?",
     "hinweis": "Buchstabiere deinen Namen — ruhig und langsam.",
     "beispiel": "Gern: S wie Samuel, I wie Ida, L wie Ludwig, V wie Viktor, A wie Anton.",
     "redemittel": ["Gern: … wie …", "Ich buchstabiere: …", "Soll ich es wiederholen?"] },
   { "amanda": "Danke. Am Dienstag um 8:15 wäre etwas frei.",
     "hinweis": "Du hast nicht alles verstanden. Frag höflich nach.",
     "beispiel": "Entschuldigung, könnten Sie das bitte wiederholen? Um wie viel Uhr?",
     "redemittel": ["Könnten Sie das bitte wiederholen?", "Etwas langsamer, bitte.", "Habe ich richtig verstanden: …?"] },
   { "amanda": "Dienstag, acht Uhr fünfzehn. Passt das?",
     "hinweis": "Sag zu — oder schlag etwas anderes vor.",
     "beispiel": "Dienstag passt leider nicht. Geht auch Mittwochnachmittag?",
     "redemittel": ["Das passt gut.", "Da kann ich leider nicht.", "Ginge auch …?"] },
   { "amanda": "Mittwoch um 15:30 hätte ich noch etwas.",
     "hinweis": "Bestätige den Termin und verabschiede dich.",
     "beispiel": "Mittwoch halb vier, das notiere ich mir. Vielen Dank, auf Wiederhören.",
     "redemittel": ["Das notiere ich mir.", "Vielen Dank für Ihre Hilfe.", "Auf Wiederhören."] }
  ]
 },
 {
  "id": "telefon-ausrichten",
  "modus": "business", "em": "📞", "titel": "Der Kollege ist nicht da", "lvl": "B1",
  "dauer": "3 Min", "kat": "buero",
  "ort": "Du gehst ans Telefon. Die Person, die gesucht wird, ist im Urlaub.",
  "schritte": [
   { "amanda": "Guten Tag, Berger hier. Könnte ich bitte Herrn Kaya sprechen?",
     "hinweis": "Sag, dass er nicht da ist — und wann er wieder da ist.",
     "beispiel": "Guten Tag, Frau Berger. Herr Kaya ist bis Montag im Urlaub.",
     "redemittel": ["… ist heute nicht im Haus.", "… ist bis … im Urlaub.", "Er ist gerade in einem Termin."] },
   { "amanda": "Oh. Und wer kann mir sonst weiterhelfen?",
     "hinweis": "Biete an, etwas auszurichten oder zu verbinden.",
     "beispiel": "Ich kann ihm etwas ausrichten — oder ich verbinde Sie mit seiner Vertretung.",
     "redemittel": ["Kann ich etwas ausrichten?", "Ich verbinde Sie mit …", "Soll er Sie zurückrufen?"] },
   { "amanda": "Richten Sie ihm bitte aus, dass die Lieferung nicht angekommen ist.",
     "hinweis": "Wiederhole die Nachricht, damit nichts verloren geht.",
     "beispiel": "Ich notiere: die Lieferung ist nicht angekommen. Habe ich das richtig?",
     "redemittel": ["Ich notiere: …", "Habe ich das richtig verstanden?", "Ich wiederhole kurz: …"] },
   { "amanda": "Genau. Er hat meine Nummer.",
     "hinweis": "Frag trotzdem nach Nummer und Erreichbarkeit.",
     "beispiel": "Zur Sicherheit: unter welcher Nummer erreicht er Sie, und wann am besten?",
     "redemittel": ["Zur Sicherheit: …", "Unter welcher Nummer …?", "Wann sind Sie am besten erreichbar?"] },
   { "amanda": "Ab neun bin ich immer am Platz. Vielen Dank!",
     "hinweis": "Beende das Gespräch mit einer klaren Zusage.",
     "beispiel": "Danke, ich gebe es ihm gleich Montag früh weiter. Auf Wiederhören.",
     "redemittel": ["Ich gebe es weiter.", "Er meldet sich bei Ihnen.", "Auf Wiederhören."] }
  ]
 },
 {
  "id": "anmeldung-buergeramt",
  "modus": "alltag", "em": "🏠", "titel": "Anmeldung beim Bürgeramt", "lvl": "A2",
  "dauer": "3 Min", "kat": "amt",
  "ort": "Du bist neu in der Stadt und meldest deine Wohnung an. Vor dir sitzt die Sachbearbeiterin.",
  "schritte": [
   { "amanda": "Guten Tag. Was kann ich für Sie tun?",
     "hinweis": "Sag, was du willst — in einem Satz.",
     "beispiel": "Guten Tag. Ich möchte mich anmelden, ich bin neu in die Stadt gezogen.",
     "redemittel": ["Ich möchte mich anmelden.", "Ich bin neu hier.", "Ich komme wegen …"] },
   { "amanda": "Haben Sie den Ausweis und die Wohnungsgeberbestätigung dabei?",
     "hinweis": "Antworte — und sag ehrlich, wenn etwas fehlt.",
     "beispiel": "Den Ausweis habe ich. Die Wohnungsgeberbestätigung schickt mein Vermieter morgen.",
     "redemittel": ["Das habe ich dabei.", "Das fehlt mir leider noch.", "Kann ich das nachreichen?"] },
   { "amanda": "Ohne die Bestätigung kann ich Sie nicht anmelden.",
     "hinweis": "Frag nach, wie es weitergeht.",
     "beispiel": "Verstehe. Muss ich dann einen neuen Termin machen, oder reicht die E-Mail?",
     "redemittel": ["Was heißt das für mich?", "Muss ich neu buchen?", "Reicht auch eine Kopie?"] },
   { "amanda": "Sie können sie per E-Mail nachreichen, dann geht es ohne Termin.",
     "hinweis": "Wiederhole, was du tun musst.",
     "beispiel": "Also: Bestätigung per Mail an Sie, dann kommt die Anmeldung mit der Post?",
     "redemittel": ["Also noch einmal: …", "Ich fasse zusammen: …", "Und danach …?"] },
   { "amanda": "Genau so. Die Meldebescheinigung kommt dann per Post.",
     "hinweis": "Bedanke dich und frag nach der Frist.",
     "beispiel": "Vielen Dank. Bis wann muss die Anmeldung fertig sein?",
     "redemittel": ["Bis wann habe ich Zeit?", "Vielen Dank für Ihre Geduld.", "Gibt es eine Frist?"] }
  ]
 },
 {
  "id": "beratungsstelle",
  "modus": "alltag", "em": "🤝", "titel": "In der Beratungsstelle", "lvl": "B1",
  "dauer": "3 Min", "kat": "amt",
  "ort": "Du hast einen Brief vom Amt bekommen und verstehst ihn nicht. In der Beratungsstelle sitzt jemand, der hilft.",
  "schritte": [
   { "amanda": "Kommen Sie herein. Worum geht es denn?",
     "hinweis": "Beschreibe dein Problem in zwei Sätzen.",
     "beispiel": "Ich habe diesen Brief bekommen und verstehe nicht, was ich tun soll.",
     "redemittel": ["Ich habe einen Brief bekommen von …", "Ich verstehe nicht, was …", "Können Sie mir helfen bei …?"] },
   { "amanda": "Darf ich den Brief sehen? … Hier steht, dass Unterlagen fehlen.",
     "hinweis": "Frag genau nach, welche Unterlagen gemeint sind.",
     "beispiel": "Welche Unterlagen genau? Steht das irgendwo im Brief?",
     "redemittel": ["Welche genau?", "Wo steht das?", "Was bedeutet dieses Wort hier?"] },
   { "amanda": "Ihre Gehaltsabrechnungen der letzten drei Monate.",
     "hinweis": "Sag, was du davon schon hast.",
     "beispiel": "Zwei habe ich zu Hause. Die dritte muss ich beim Arbeitgeber holen.",
     "redemittel": ["Das habe ich schon.", "Das muss ich noch besorgen.", "Wo bekomme ich …?"] },
   { "amanda": "Wichtig ist die Frist: bis zum Fünfzehnten.",
     "hinweis": "Frag, was passiert, wenn es knapp wird.",
     "beispiel": "Und wenn ich das bis dahin nicht schaffe — kann ich die Frist verlängern?",
     "redemittel": ["Was passiert, wenn …?", "Kann man die Frist verlängern?", "An wen wende ich mich dann?"] },
   { "amanda": "Rufen Sie vorher an, das geht meistens.",
     "hinweis": "Fasse zusammen, was du jetzt tust.",
     "beispiel": "Gut: Abrechnungen holen, alles bis zum Fünfzehnten schicken, sonst anrufen. Danke!",
     "redemittel": ["Ich fasse zusammen: …", "Dann mache ich Folgendes: …", "Vielen Dank für Ihre Hilfe."] }
  ]
 },
 {
  "id": "kurs-nachfragen",
  "modus": "alltag", "em": "🙋", "titel": "Im Kurs nachfragen", "lvl": "A2",
  "dauer": "2 Min", "kat": "bildung",
  "ort": "Im Deutschkurs. Die Lehrerin hat gerade etwas erklärt — du hast die Hälfte nicht verstanden.",
  "schritte": [
   { "amanda": "So, ist das für alle klar?",
     "hinweis": "Sag ehrlich, dass du eine Frage hast.",
     "beispiel": "Entschuldigung, ich habe eine Frage.",
     "redemittel": ["Ich habe eine Frage.", "Entschuldigung, …", "Darf ich etwas fragen?"] },
   { "amanda": "Natürlich, immer her damit.",
     "hinweis": "Sag genau, was unklar ist — nicht nur 'alles'.",
     "beispiel": "Den zweiten Satz habe ich nicht verstanden. Warum steht da 'dem'?",
     "redemittel": ["Ich habe … nicht verstanden.", "Warum steht hier …?", "Was ist der Unterschied zwischen … und …?"] },
   { "amanda": "Weil 'mit' immer den Dativ verlangt. Ist das klarer?",
     "hinweis": "Bitte um ein Beispiel.",
     "beispiel": "Fast. Können Sie noch ein Beispiel geben?",
     "redemittel": ["Können Sie ein Beispiel geben?", "Also zum Beispiel: …?", "Und wenn ich sage: …?"] },
   { "amanda": "Zum Beispiel: Ich fahre mit dem Bus.",
     "hinweis": "Wiederhole mit einem eigenen Satz.",
     "beispiel": "Also: Ich gehe mit meiner Schwester ins Kino.",
     "redemittel": ["Also: …", "Dann heißt es: …", "Stimmt das so?"] },
   { "amanda": "Genau richtig!",
     "hinweis": "Bedanke dich — und sag, was du zu Hause übst.",
     "beispiel": "Danke. Ich übe das heute Abend mit zehn eigenen Sätzen.",
     "redemittel": ["Danke, jetzt ist es klar.", "Das übe ich noch.", "Kann ich Ihnen die Sätze zeigen?"] }
  ]
 },
 {
  "id": "kurs-entschuldigung",
  "modus": "alltag", "em": "📧", "titel": "Sich im Kurs entschuldigen", "lvl": "A2",
  "dauer": "2 Min", "kat": "bildung",
  "ort": "Du warst zwei Tage krank. Am ersten Tag zurück sprichst du mit der Lehrerin.",
  "schritte": [
   { "amanda": "Schön, dass Sie wieder da sind! Alles wieder gut?",
     "hinweis": "Erklär kurz, warum du gefehlt hast.",
     "beispiel": "Danke, ja. Ich hatte Fieber und musste zwei Tage zu Hause bleiben.",
     "redemittel": ["Ich war krank.", "Ich musste zu Hause bleiben.", "Es geht wieder."] },
   { "amanda": "Kein Problem. Bringen Sie mir bitte eine kurze Entschuldigung mit.",
     "hinweis": "Frag, was hineingehört.",
     "beispiel": "Gern. Was muss darin stehen — nur die Tage, oder auch der Grund?",
     "redemittel": ["Was muss darin stehen?", "Reicht ein Satz?", "Brauchen Sie ein Attest?"] },
   { "amanda": "Datum, Tage und Ihre Unterschrift reichen.",
     "hinweis": "Frag nach dem verpassten Stoff.",
     "beispiel": "Alles klar. Und was haben wir am Montag und Dienstag gemacht?",
     "redemittel": ["Was habe ich verpasst?", "Welche Seiten waren dran?", "Gibt es Hausaufgaben dazu?"] },
   { "amanda": "Perfekt und Wechselpräpositionen, Seite 40 bis 44.",
     "hinweis": "Sag, wie du es nachholst.",
     "beispiel": "Dann arbeite ich die Seiten heute Abend nach und mache die Übungen.",
     "redemittel": ["Das hole ich nach.", "Ich mache die Übungen bis …", "Kann ich Sie fragen, wenn etwas unklar ist?"] },
   { "amanda": "Sehr gern. Fragen Sie einfach.",
     "hinweis": "Bedanke dich kurz.",
     "beispiel": "Danke, das hilft mir sehr.",
     "redemittel": ["Danke, das hilft mir.", "Sehr nett, danke.", "Bis morgen!"] }
  ]
 },
 {
  "id": "weiterbildung-beratung",
  "modus": "business", "em": "🎓", "titel": "Beratung zur Weiterbildung", "lvl": "B1",
  "dauer": "3 Min", "kat": "bildung",
  "ort": "Bei der Agentur für Arbeit. Du willst wissen, ob dein Abschluss hier zählt.",
  "schritte": [
   { "amanda": "Guten Tag. Sie wollten sich zur Weiterbildung beraten lassen?",
     "hinweis": "Sag, was du gelernt hast und was du willst.",
     "beispiel": "Ja. Ich bin Krankenschwester aus Georgien und möchte hier wieder in dem Beruf arbeiten.",
     "redemittel": ["Ich bin … von Beruf.", "Mein Abschluss ist aus …", "Ich möchte gern wieder …"] },
   { "amanda": "Dann brauchen Sie die Anerkennung Ihres Abschlusses. Haben Sie die schon beantragt?",
     "hinweis": "Antworte und frag nach dem Weg.",
     "beispiel": "Noch nicht. Wo stelle ich den Antrag, und wie lange dauert das?",
     "redemittel": ["Wo stelle ich den Antrag?", "Wie lange dauert das ungefähr?", "Was kostet das?"] },
   { "amanda": "Bei der zuständigen Stelle im Bundesland. Rechnen Sie mit einigen Monaten.",
     "hinweis": "Frag, was du in der Zwischenzeit tun kannst.",
     "beispiel": "Und bis dahin — kann ich schon arbeiten oder einen Kurs machen?",
     "redemittel": ["Und in der Zwischenzeit?", "Kann ich schon …?", "Was raten Sie mir?"] },
   { "amanda": "Ein Fachsprachkurs wäre sinnvoll. Den können wir fördern.",
     "hinweis": "Frag nach der Förderung.",
     "beispiel": "Was heißt fördern genau — übernehmen Sie die Kosten ganz?",
     "redemittel": ["Was heißt das genau?", "Wer zahlt was?", "Welche Voraussetzungen gibt es?"] },
   { "amanda": "Mit Bildungsgutschein ja. Voraussetzung ist B2.",
     "hinweis": "Fasse deinen nächsten Schritt zusammen.",
     "beispiel": "Gut: erst B2 nachweisen, dann Bildungsgutschein, dann der Fachsprachkurs. Danke!",
     "redemittel": ["Ich fasse zusammen: …", "Mein nächster Schritt ist …", "Vielen Dank für die Beratung."] }
  ]
 },
 {
  "id": "praktikum-fragen",
  "modus": "business", "em": "🛠️", "titel": "Nach einem Praktikum fragen", "lvl": "B1",
  "dauer": "3 Min", "kat": "bewerbung",
  "ort": "Du rufst in einem Betrieb an und fragst nach einem Praktikumsplatz.",
  "schritte": [
   { "amanda": "Elektro Haas, guten Tag.",
     "hinweis": "Melde dich und nenne dein Anliegen.",
     "beispiel": "Guten Tag, mein Name ist Omar Haddad. Ich suche einen Praktikumsplatz.",
     "redemittel": ["Mein Name ist …", "Ich suche …", "Ich rufe an, weil …"] },
   { "amanda": "Praktikum in welchem Bereich denn?",
     "hinweis": "Sag, was du kannst und was du lernen willst.",
     "beispiel": "In der Elektrotechnik. Ich habe in Syrien drei Jahre als Elektriker gearbeitet.",
     "redemittel": ["Im Bereich …", "Ich habe … Jahre als … gearbeitet.", "Ich möchte lernen, wie …"] },
   { "amanda": "Und wie lange soll das Praktikum gehen?",
     "hinweis": "Nenn Zeitraum und Umfang.",
     "beispiel": "Vier Wochen, gern ab Anfang nächsten Monats, Vollzeit.",
     "redemittel": ["Etwa … Wochen.", "Ab … wäre möglich.", "In Voll- oder Teilzeit."] },
   { "amanda": "Schicken Sie mir Ihre Unterlagen, dann sehen wir weiter.",
     "hinweis": "Frag, was genau du schicken sollst.",
     "beispiel": "Gern. Reicht der Lebenslauf, oder brauchen Sie auch die Zeugnisse?",
     "redemittel": ["Was soll ich schicken?", "Reicht …?", "An welche Adresse?"] },
   { "amanda": "Lebenslauf reicht erst mal. Meine Mail ist auf der Website.",
     "hinweis": "Bestätige und verabschiede dich freundlich.",
     "beispiel": "Alles klar, den Lebenslauf schicke ich heute noch. Vielen Dank, auf Wiederhören.",
     "redemittel": ["Das schicke ich heute.", "Vielen Dank für die Auskunft.", "Auf Wiederhören."] }
  ]
 },
 {
  "id": "abo-kuendigen",
  "modus": "alltag", "em": "✂️", "titel": "Ein Abo kündigen", "lvl": "B1",
  "dauer": "3 Min", "kat": "vertrag",
  "ort": "Du willst ein Abo beenden. Am Telefon versucht man, dich zu halten.",
  "schritte": [
   { "amanda": "Schön, dass Sie anrufen. Was kann ich für Sie tun?",
     "hinweis": "Sag klar, dass du kündigen willst.",
     "beispiel": "Guten Tag. Ich möchte mein Abo zum nächstmöglichen Termin kündigen.",
     "redemittel": ["Ich möchte kündigen.", "… zum nächstmöglichen Termin.", "Bitte bestätigen Sie mir das schriftlich."] },
   { "amanda": "Darf ich fragen, warum? Wir hätten da ein besseres Angebot …",
     "hinweis": "Bleib freundlich, aber bei deiner Entscheidung.",
     "beispiel": "Danke, aber ich brauche es einfach nicht mehr. Ich bleibe bei der Kündigung.",
     "redemittel": ["Danke, aber …", "Ich bleibe dabei.", "Das brauche ich nicht mehr."] },
   { "amanda": "Verstehe. Zum Monatsende geht es leider nicht mehr.",
     "hinweis": "Frag nach dem genauen Datum.",
     "beispiel": "Zu welchem Datum endet der Vertrag dann genau?",
     "redemittel": ["Zu welchem Datum genau?", "Wie lange läuft er noch?", "Wann wird zuletzt abgebucht?"] },
   { "amanda": "Zum dreißigsten September.",
     "hinweis": "Bitte um eine schriftliche Bestätigung.",
     "beispiel": "Gut. Schicken Sie mir das bitte schriftlich per E-Mail.",
     "redemittel": ["Bitte schriftlich.", "Per E-Mail an …", "Ich hätte das gern bestätigt."] },
   { "amanda": "Mache ich. Sonst noch etwas?",
     "hinweis": "Beende das Gespräch klar.",
     "beispiel": "Nein, danke. Damit ist alles geklärt. Auf Wiederhören.",
     "redemittel": ["Damit ist alles geklärt.", "Nein, danke.", "Auf Wiederhören."] }
  ]
 },
 {
  "id": "phishing-erkennen",
  "modus": "alltag", "em": "🎣", "titel": "Diese Mail ist komisch", "lvl": "B1",
  "dauer": "3 Min", "kat": "vertrag",
  "ort": "Eine Freundin zeigt dir eine E-Mail: angeblich von der Bank, mit einem Link.",
  "schritte": [
   { "amanda": "Schau mal, die Bank will mein Passwort. Soll ich das eingeben?",
     "hinweis": "Sag deutlich Nein — und warum.",
     "beispiel": "Nein, auf keinen Fall. Eine Bank fragt nie per Mail nach dem Passwort.",
     "redemittel": ["Auf keinen Fall.", "Eine Bank fragt nie nach …", "Das sieht nach Betrug aus."] },
   { "amanda": "Aber da steht mein Name drin!",
     "hinweis": "Erklär, woran man eine falsche Mail erkennt.",
     "beispiel": "Namen kann man kaufen. Schau auf die Absenderadresse und auf die Fehler im Text.",
     "redemittel": ["Schau auf …", "Woran man es erkennt: …", "Fahr mit der Maus über den Link."] },
   { "amanda": "Und wenn es doch echt ist? Sie schreiben, mein Konto wird gesperrt.",
     "hinweis": "Sag, wie sie es sicher prüft.",
     "beispiel": "Dann ruf die Bank direkt an — mit der Nummer von deiner Karte, nicht aus der Mail.",
     "redemittel": ["Ruf direkt an, aber …", "Nimm die Nummer von …", "Klick den Link nicht an."] },
   { "amanda": "Okay. Und was mache ich mit der Mail?",
     "hinweis": "Nenn zwei klare Schritte.",
     "beispiel": "Nicht antworten, nichts anklicken, löschen — und wenn du unsicher bist, melde sie.",
     "redemittel": ["Nicht antworten.", "Einfach löschen.", "Du kannst sie melden bei …"] },
   { "amanda": "Gut, dass ich gefragt habe.",
     "hinweis": "Gib ihr eine einfache Regel für die Zukunft mit.",
     "beispiel": "Merk dir: Wer dich drängt und Angst macht, will meistens etwas von dir.",
     "redemittel": ["Merk dir: …", "Im Zweifel: …", "Frag lieber einmal zu viel."] }
  ]
 },
  /* ---- B2/C1-Ausbau 25.10.2026 (Julia: B2- und C1-Material) ----
     Vorher: B2 10, B2–C1 2, C1 13 von 130. Kaum B2-Alltag, gar kein
     B2/C1 bei Notfall; Essen, Gefühle, Familie je nur eins.
     Mit Umgangssprache + Klartext (Feld aus dialog-stufen.js). Bewusst
     ohne "woerter": dialog-stufen.js zeigt sie unter der ANTWORT, hier
     erklären sie aber Amandas Zeile — das wäre an der falschen Stelle. */

 {
  "id": "b2-unfall-autotuer",
  "modus": "alltag",
  "em": "🚲",
  "kat": "notfall",
  "titel": "Die Autotür ging auf — und du lagst auf der Straße",
  "lvl": "B2",
  "dauer": "5 Min",
  "ort": "Du fährst mit dem Rad, ein Fahrer öffnet die Tür, du stürzt. Dir ist nicht viel passiert, aber das Rad ist kaputt. Der Fahrer steigt aus.",
  "schritte": [
   {
    "amanda": "Mensch, haben Sie mich erschreckt! Sie sind ja auch echt schnell unterwegs gewesen.",
    "klartext": "Sie haben mich erschreckt. Sie sind aber auch sehr schnell gefahren.",
    "hinweis": "Erst sagen, wie es dir geht. Dann ruhig, aber deutlich klarstellen, was passiert ist — ohne dich zu entschuldigen.",
    "beispiel": "Mir ist zum Glück nichts Schlimmes passiert. Aber ich war nicht zu schnell — Sie haben die Tür aufgemacht, ohne zu schauen.",
    "redemittel": [
     "Mir ist zum Glück nichts passiert.",
     "Sie haben die Tür aufgemacht, ohne zu schauen.",
     "Ich war ganz normal auf dem Radweg."
    ]
   },
   {
    "amanda": "Na ja, so genau weiß man das ja nicht. Lassen wir das doch einfach, ist ja nix passiert.",
    "klartext": "Man weiß nicht genau, wer schuld ist. Lassen wir es einfach, es ist ja nichts passiert.",
    "hinweis": "Nicht darauf einlassen. Zeig auf den Schaden und sag, was jetzt passieren muss.",
    "beispiel": "Doch, schauen Sie: Das Vorderrad ist verbogen. Das muss repariert werden. Wir sollten unsere Daten austauschen.",
    "redemittel": [
     "Doch, schauen Sie mal hier.",
     "Das muss repariert werden.",
     "Wir sollten unsere Daten austauschen."
    ]
   },
   {
    "amanda": "Daten austauschen? Wegen so einem Fahrrad? Ich kann Ihnen auch zwanzig Euro geben.",
    "hinweis": "Ablehnen und begründen. Eine Reparatur kostet meistens mehr, und Schmerzen kommen manchmal erst später.",
    "beispiel": "Danke, aber das reicht wahrscheinlich nicht. Ich weiß noch nicht, was die Reparatur kostet. Und falls mir morgen etwas wehtut, brauche ich Ihre Versicherung.",
    "redemittel": [
     "Das reicht wahrscheinlich nicht.",
     "Ich weiß noch nicht, was es kostet.",
     "Falls morgen noch etwas wehtut, …"
    ]
   },
   {
    "amanda": "Okay, okay. Was brauchen Sie denn?",
    "hinweis": "Genau sagen, was du brauchst. Und ein Foto machen — das ist ein ganz normaler Schritt.",
    "beispiel": "Ihren Namen, Ihre Adresse und Ihre Versicherung. Und ich mache kurz ein Foto vom Auto und vom Kennzeichen, wenn das okay ist.",
    "redemittel": [
     "Ich brauche Ihren Namen und Ihre Adresse.",
     "Bei welcher Versicherung sind Sie?",
     "Ich mache kurz ein Foto, wenn das okay ist."
    ]
   },
   {
    "amanda": "Hier, meine Karte. Die Versicherung steht hinten drauf.",
    "hinweis": "Freundlich abschließen und sagen, wie es weitergeht.",
    "beispiel": "Danke. Ich lasse das Rad reparieren und schicke Ihnen die Rechnung. Und Sie geben den Schaden bitte Ihrer Versicherung weiter.",
    "redemittel": [
     "Ich schicke Ihnen die Rechnung.",
     "Geben Sie das bitte Ihrer Versicherung weiter.",
     "Dann hören wir voneinander."
    ]
   }
  ]
 },
 {
  "id": "b2-schaden-nachbar-unten",
  "modus": "alltag",
  "em": "💧",
  "kat": "wohnen",
  "titel": "Der Nachbar von unten hat einen Wasserfleck",
  "lvl": "B2",
  "dauer": "5 Min",
  "ort": "Es klingelt. Dein Nachbar aus der Wohnung unter dir sagt, an seiner Decke ist ein Wasserfleck — und das Wasser kommt von dir.",
  "schritte": [
   {
    "amanda": "Guten Abend. Bei mir im Bad ist ein großer Wasserfleck an der Decke. Das muss von Ihnen kommen.",
    "hinweis": "Ruhig bleiben. Zeig Verständnis, aber gib nicht sofort zu, dass es deine Schuld ist — das weißt du noch nicht.",
    "beispiel": "Oh, das tut mir leid, das ist ärgerlich. Ich weiß von keinem Wasserschaden, aber lassen Sie uns das zusammen anschauen.",
    "redemittel": [
     "Das tut mir leid, das ist ärgerlich.",
     "Davon weiß ich noch nichts.",
     "Lassen Sie uns das zusammen anschauen."
    ]
   },
   {
    "amanda": "Der Fleck ist genau unter Ihrer Badewanne. Die Decke ist schon ganz weich.",
    "hinweis": "Vorschlagen, was ihr sofort tut: nachschauen, Wasser abdrehen, Fotos machen.",
    "beispiel": "Dann schaue ich sofort unter der Wanne nach. Zur Sicherheit drehe ich das Wasser ab. Können Sie bitte Fotos von Ihrer Decke machen?",
    "redemittel": [
     "Ich schaue sofort nach.",
     "Zur Sicherheit drehe ich das Wasser ab.",
     "Können Sie bitte Fotos machen?"
    ]
   },
   {
    "amanda": "Und wer bezahlt das jetzt? Ich habe das Bad erst letztes Jahr neu gemacht.",
    "hinweis": "Erklär, wie das in Deutschland normalerweise läuft: Hausverwaltung informieren, Versicherungen kümmern sich.",
    "beispiel": "Das klären die Versicherungen. Ich habe eine Haftpflichtversicherung, und das Haus hat eine Gebäudeversicherung. Wir sollten beide heute noch die Hausverwaltung informieren.",
    "redemittel": [
     "Das klären die Versicherungen.",
     "Ich habe eine Haftpflichtversicherung.",
     "Wir sollten die Hausverwaltung informieren."
    ]
   },
   {
    "amanda": "Die Hausverwaltung braucht immer ewig. Ich will nicht wochenlang auf einen Fleck schauen.",
    "hinweis": "Verständnis zeigen und etwas Konkretes anbieten, damit es schneller geht.",
    "beispiel": "Das verstehe ich. Ich rufe morgen früh selbst an und schreibe auch eine Mail. Ich gebe Ihnen meine Nummer, dann sind Sie immer auf dem Laufenden.",
    "redemittel": [
     "Das verstehe ich gut.",
     "Ich rufe morgen früh selbst an.",
     "Dann sind Sie immer auf dem Laufenden."
    ]
   },
   {
    "amanda": "Gut. Dann schreibe ich Ihnen, sobald der Handwerker bei mir war.",
    "hinweis": "Freundlich abschließen. Mit Nachbarn lohnt sich ein guter Ton — ihr wohnt noch lange zusammen.",
    "beispiel": "Sehr gut, danke für Ihre Geduld. Und klingeln Sie ruhig, wenn etwas ist.",
    "redemittel": [
     "Danke für Ihre Geduld.",
     "Klingeln Sie ruhig, wenn etwas ist.",
     "Wir kriegen das schon hin."
    ]
   }
  ]
 },
 {
  "id": "b2-weihnachten-aufteilen",
  "modus": "alltag",
  "em": "🎄",
  "kat": "familie",
  "titel": "Weihnachten bei wem? Ein Kompromiss mit der Familie",
  "lvl": "B2",
  "dauer": "5 Min",
  "ort": "Deine Schwiegermutter ruft an. Sie möchte, dass ihr alle drei Feiertage bei ihr verbringt. Ihr wolltet aber auch zu deiner Familie.",
  "schritte": [
   {
    "amanda": "Ich plane schon mal Weihnachten. Ihr kommt doch am Vierundzwanzigsten und bleibt bis zum Sechsundzwanzigsten, oder?",
    "hinweis": "Erst Freude zeigen, dann vorsichtig sagen, dass es dieses Jahr anders aussieht.",
    "beispiel": "Wie schön, dass du schon planst! Wir freuen uns auf euch. Dieses Jahr wollten wir die Feiertage aber ein bisschen aufteilen.",
    "redemittel": [
     "Wie schön, dass du schon planst.",
     "Wir freuen uns auf euch.",
     "Dieses Jahr wollten wir es ein bisschen aufteilen."
    ]
   },
   {
    "amanda": "Aufteilen? Aber Heiligabend war doch immer bei uns.",
    "hinweis": "Begründen, ohne Vorwurf. Sprich von euren Wünschen, nicht davon, was sie falsch macht.",
    "beispiel": "Ja, und das war immer sehr schön. Aber meine Eltern sehen wir nur zweimal im Jahr. Für uns wäre es fair, wenn beide Familien etwas von uns haben.",
    "redemittel": [
     "Das war immer sehr schön.",
     "Für uns wäre es fair, wenn …",
     "Wir möchten beide Familien sehen."
    ]
   },
   {
    "amanda": "Und wie stellt ihr euch das vor?",
    "hinweis": "Einen konkreten Vorschlag machen — mit Tagen und Uhrzeiten. Das macht es leichter, ja zu sagen.",
    "beispiel": "Wir kommen Heiligabend zu euch und bleiben bis zum Mittagessen am Fünfundzwanzigsten. Danach fahren wir zu meinen Eltern.",
    "redemittel": [
     "Unser Vorschlag wäre: …",
     "Wir kommen … und bleiben bis …",
     "Danach fahren wir zu …"
    ]
   },
   {
    "amanda": "Hm. Das ist schon ein bisschen traurig. Die Kinder freuen sich doch immer so auf den zweiten Feiertag.",
    "hinweis": "Ihre Enttäuschung ernst nehmen und ihr etwas anbieten, das ihr wichtig ist.",
    "beispiel": "Das verstehe ich. Wie wäre es, wenn die Kinder im Januar ein Wochenende bei euch schlafen? Dann habt ihr sie mal ganz für euch.",
    "redemittel": [
     "Ich verstehe, dass du enttäuscht bist.",
     "Wie wäre es, wenn …?",
     "Dann habt ihr sie mal ganz für euch."
    ]
   },
   {
    "amanda": "Na gut. Das mit Januar klingt eigentlich schön.",
    "hinweis": "Danke sagen und die Abmachung freundlich festhalten.",
    "beispiel": "Danke, dass du so flexibel bist. Dann machen wir es so, und den Termin im Januar suchen wir gleich zusammen aus.",
    "redemittel": [
     "Danke, dass du so flexibel bist.",
     "Dann machen wir es so.",
     "Den Termin suchen wir gleich zusammen aus."
    ]
   }
  ]
 },
 {
  "id": "b2-gastgeber-braten",
  "modus": "alltag",
  "em": "🍽️",
  "kat": "essen",
  "titel": "Eingeladen — und es gibt Braten",
  "lvl": "B2",
  "dauer": "4 Min",
  "ort": "Du bist bei Kollegen zum Essen eingeladen. Du isst kein Fleisch, hast es aber vorher nicht gesagt. Jetzt steht ein Schweinebraten auf dem Tisch.",
  "schritte": [
   {
    "amanda": "So, jetzt wird gegessen! Ich habe den ganzen Nachmittag in der Küche gestanden. Gib mal deinen Teller.",
    "hinweis": "Erst die Mühe loben. Dann ehrlich, aber leicht sagen, dass du kein Fleisch isst — und dass es dein Fehler war, nichts zu sagen.",
    "beispiel": "Das sieht toll aus, so viel Arbeit! Es ist mir ein bisschen peinlich: Ich esse kein Fleisch. Ich hätte das vorher sagen sollen.",
    "redemittel": [
     "Das sieht toll aus.",
     "Es ist mir ein bisschen peinlich, aber …",
     "Ich hätte das vorher sagen sollen."
    ]
   },
   {
    "amanda": "Oh nein! Warum hast du denn nichts gesagt? Jetzt hab ich gar nichts anderes.",
    "hinweis": "Die Gastgeberin beruhigen. Zeig, dass du auch so satt wirst.",
    "beispiel": "Mach dir bitte keine Gedanken! Die Knödel und das Rotkraut reichen mir völlig. Ich esse einfach davon ein bisschen mehr.",
    "redemittel": [
     "Mach dir bitte keine Gedanken.",
     "… reicht mir völlig.",
     "Ich esse einfach davon mehr."
    ]
   },
   {
    "amanda": "Aber die Soße ist mit Fleisch gemacht. Ist das schlimm?",
    "hinweis": "Ehrlich, aber unkompliziert antworten. Du entscheidest, wie streng du bist — und sagst es freundlich.",
    "beispiel": "Dann lasse ich die Soße lieber weg, aber das ist überhaupt kein Problem. Mit etwas Butter auf den Knödeln schmeckt es mir auch.",
    "redemittel": [
     "Dann lasse ich … lieber weg.",
     "Das ist überhaupt kein Problem.",
     "So schmeckt es mir auch."
    ]
   },
   {
    "amanda": "Nächstes Mal sagst du es aber vorher, ja? Dann koche ich was Schönes für dich.",
    "hinweis": "Danke sagen und das Thema leicht beenden, damit der Abend schön bleibt.",
    "beispiel": "Versprochen. Und danke, dass du so lieb reagierst. Erzähl mal, wie war euer Urlaub?",
    "redemittel": [
     "Versprochen.",
     "Danke, dass du so lieb reagierst.",
     "Erzähl mal, …"
    ]
   }
  ]
 },
 {
  "id": "b2-freundin-enttaeuscht",
  "modus": "alltag",
  "em": "💬",
  "kat": "gefuehle",
  "titel": "Schon wieder abgesagt — die Freundin ist enttäuscht",
  "lvl": "B2",
  "dauer": "5 Min",
  "ort": "Du hast deiner Freundin in diesem Monat schon zweimal abgesagt. Jetzt musst du wieder absagen. Sie ruft an.",
  "schritte": [
   {
    "amanda": "Sag nicht, dass du heute auch nicht kannst.",
    "hinweis": "Nicht drumherum reden. Ehrlich sagen, dass es so ist, und dass es dir leidtut.",
    "beispiel": "Doch, leider. Und ich weiß, dass das jetzt das dritte Mal ist. Es tut mir wirklich leid.",
    "redemittel": [
     "Doch, leider.",
     "Ich weiß, dass das jetzt das dritte Mal ist.",
     "Es tut mir wirklich leid."
    ]
   },
   {
    "amanda": "Ehrlich gesagt habe ich langsam das Gefühl, dass ich dir nicht mehr so wichtig bin.",
    "hinweis": "Ihr Gefühl nicht wegreden. Erst zeigen, dass du es verstehst, dann den wahren Grund sagen.",
    "beispiel": "Ich verstehe, dass es sich so anfühlt. Das hat aber nichts mit dir zu tun. Bei der Arbeit ist gerade so viel los, dass ich abends einfach leer bin.",
    "redemittel": [
     "Ich verstehe, dass es sich so anfühlt.",
     "Das hat nichts mit dir zu tun.",
     "Im Moment bin ich abends einfach leer."
    ]
   },
   {
    "amanda": "Dann sag das doch einfach. Ich dachte schon, ich hab was falsch gemacht.",
    "hinweis": "Zugeben, dass du früher hättest reden sollen.",
    "beispiel": "Du hast recht, ich hätte das früher sagen sollen. Statt zu erklären, habe ich einfach abgesagt. Das war nicht fair.",
    "redemittel": [
     "Du hast recht.",
     "Ich hätte das früher sagen sollen.",
     "Das war nicht fair von mir."
    ]
   },
   {
    "amanda": "Und jetzt? Sehen wir uns überhaupt noch mal?",
    "hinweis": "Einen festen, kleinen Vorschlag machen, den du sicher einhalten kannst.",
    "beispiel": "Auf jeden Fall. Wie wäre es mit Sonntagvormittag? Nur ein Spaziergang und ein Kaffee — das schaffe ich ganz sicher.",
    "redemittel": [
     "Auf jeden Fall.",
     "Wie wäre es mit …?",
     "Das schaffe ich ganz sicher."
    ]
   },
   {
    "amanda": "Okay. Aber wehe, du sagst ab!",
    "klartext": "Okay. Aber du darfst auf keinen Fall absagen!",
    "hinweis": "Locker und herzlich antworten. Ein kleiner Witz zeigt, dass zwischen euch wieder alles gut ist.",
    "beispiel": "Versprochen. Und den Kaffee zahle ich — als Entschuldigung.",
    "redemittel": [
     "Versprochen.",
     "Den Kaffee zahle ich.",
     "Ich freu mich auf dich."
    ]
   }
  ]
 },
 {
  "id": "c1-elternabend-klassenfahrt",
  "modus": "alltag",
  "em": "🏫",
  "kat": "bildung",
  "titel": "Elternabend: Du bist gegen die teure Klassenfahrt",
  "lvl": "C1",
  "dauer": "6 Min",
  "ort": "Elternabend. Die Elternsprecherin schlägt eine Klassenfahrt nach London für 650 Euro vor. Fast alle nicken. Du findest das zu teuer — nicht nur für dich.",
  "schritte": [
   {
    "amanda": "Gut, dann sind wir uns ja einig. London, Ende Mai. Gibt es noch Fragen?",
    "hinweis": "Melden, obwohl die Stimmung schon entschieden ist. Erst das Positive anerkennen, dann einen Einwand anmelden — ohne gleich dagegen zu sein.",
    "beispiel": "Ja, ich hätte noch einen Punkt. Die Idee finde ich schön, keine Frage. Ich frage mich nur, ob wir beim Preis wirklich an alle Familien gedacht haben.",
    "redemittel": [
     "Ich hätte noch einen Punkt.",
     "Die Idee finde ich schön, keine Frage.",
     "Ich frage mich nur, ob …"
    ]
   },
   {
    "amanda": "Also, es gibt ja den Förderverein. Wer es sich nicht leisten kann, kann einen Antrag stellen.",
    "hinweis": "Den Punkt würdigen und dann zeigen, wo das Problem liegt: Viele stellen den Antrag aus Scham nicht.",
    "beispiel": "Das ist gut, dass es den gibt. Aus Erfahrung weiß ich aber: Viele stellen den Antrag nicht, weil es ihnen unangenehm ist. Dann fährt das Kind einfach nicht mit — und niemand spricht darüber.",
    "redemittel": [
     "Das ist gut, dass es … gibt.",
     "Aus Erfahrung weiß ich aber: …",
     "Und niemand spricht darüber."
    ]
   },
   {
    "amanda": "Aber London ist eine einmalige Chance. Die Kinder lernen da Englisch, sehen eine Weltstadt …",
    "hinweis": "Das Ziel teilen, aber eine Alternative anbieten, die dasselbe Ziel billiger erreicht. So bist du nicht der Bremser, sondern der mit der Lösung.",
    "beispiel": "Da bin ich ganz bei Ihnen, was das Ziel angeht. Nur: Das ginge auch für die Hälfte — zum Beispiel mit dem Zug nach Brüssel oder Amsterdam. Da lernen sie genauso viel.",
    "redemittel": [
     "Was das Ziel angeht, bin ich ganz bei Ihnen.",
     "Nur: Das ginge auch für die Hälfte.",
     "Da lernen sie genauso viel."
    ]
   },
   {
    "amanda": "Hm. Ich will jetzt aber auch nicht alles wieder neu aufrollen.",
    "klartext": "Ich möchte jetzt nicht wieder ganz von vorn anfangen.",
    "hinweis": "Den Vorschlag klein machen, damit Zustimmung leichtfällt: nicht neu entscheiden, nur vergleichen.",
    "beispiel": "Muss ja auch gar nicht heute sein. Mein Vorschlag: Wir holen bis zum nächsten Mal ein zweites Angebot ein und stimmen dann ab — anonym, damit jeder ehrlich sein kann.",
    "redemittel": [
     "Muss ja gar nicht heute sein.",
     "Mein Vorschlag: …",
     "anonym, damit jeder ehrlich sein kann"
    ]
   },
   {
    "amanda": "Gut, das ist fair. Würden Sie das zweite Angebot dann einholen?",
    "hinweis": "Verantwortung übernehmen. Wer einen Einwand bringt und dann selbst anpackt, wird ernst genommen.",
    "beispiel": "Gern, das übernehme ich. Ich schicke die Angebote spätestens in zwei Wochen an alle.",
    "redemittel": [
     "Gern, das übernehme ich.",
     "Ich schicke … an alle.",
     "spätestens in zwei Wochen"
    ]
   }
  ]
 },
 {
  "id": "c1-kollege-laestert",
  "modus": "business",
  "em": "☕",
  "kat": "team",
  "titel": "In der Kaffeeküche wird über die Chefin gelästert",
  "lvl": "C1",
  "dauer": "5 Min",
  "ort": "Kaffeeküche. Ein Kollege lästert über die neue Chefin und will, dass du mitmachst. Du willst nicht mitlästern, aber auch nicht wie ein Spielverderber wirken.",
  "schritte": [
   {
    "amanda": "Hast du die Mail von der Neuen gesehen? Die hat doch echt 'nen Knall. Jetzt sollen wir jeden Freitag 'nen Bericht schreiben.",
    "klartext": "Hast du die Mail von der neuen Chefin gesehen? Sie ist wirklich verrückt. Jetzt sollen wir jeden Freitag einen Bericht schreiben.",
    "hinweis": "Den Ärger über die Sache aufgreifen, aber nicht über die Person urteilen. So bist du dabei, ohne mitzulästern.",
    "beispiel": "Ja, hab ich gesehen. Der Bericht jeden Freitag nervt mich auch ein bisschen. Ob sie einen Knall hat, weiß ich nicht — sie ist ja erst drei Wochen da.",
    "redemittel": [
     "Das nervt mich auch ein bisschen.",
     "Ob …, weiß ich nicht.",
     "Sie ist ja erst … da."
    ]
   },
   {
    "amanda": "Ach komm, jetzt tu nicht so. Du hast doch letzte Woche selber die Augen verdreht.",
    "klartext": "Tu nicht so, als ob dich das nicht stört. Letzte Woche hast du auch die Augen verdreht.",
    "hinweis": "Mit Humor zugeben, dass er recht hat, und trotzdem deine Linie halten. Selbstironie nimmt Druck raus.",
    "beispiel": "Erwischt. Aber genervt sein und jemandem einen Knall unterstellen sind zwei Paar Schuhe. Sonst lästern wir in einem Jahr über die Nächste.",
    "redemittel": [
     "Erwischt.",
     "Das sind zwei Paar Schuhe.",
     "Sonst …"
    ]
   },
   {
    "amanda": "Und was willst du machen? Brav jeden Freitag den Bericht abliefern?",
    "hinweis": "Einen konstruktiven Weg zeigen: das Problem dort ansprechen, wo es etwas bringt.",
    "beispiel": "Erst mal ja. Und im nächsten Teammeeting fragen wir sie einfach, wofür sie die Berichte braucht. Vielleicht reicht ihr ja eine Tabelle statt drei Seiten.",
    "redemittel": [
     "Erst mal ja.",
     "Wir fragen sie einfach, wofür …",
     "Vielleicht reicht ihr ja …"
    ]
   },
   {
    "amanda": "Du meinst, das bringt was?",
    "klartext": "Glaubst du, dass das etwas hilft?",
    "hinweis": "Zuversicht zeigen, ohne naiv zu wirken, und ihn mit ins Boot holen.",
    "beispiel": "Einen Versuch ist es wert. Wenn wir das zu zweit ansprechen, wirkt es nicht wie Gemecker, sondern wie ein Vorschlag. Bist du dabei?",
    "redemittel": [
     "Einen Versuch ist es wert.",
     "Das wirkt nicht wie Gemecker, sondern wie …",
     "Bist du dabei?"
    ]
   }
  ]
 },
 {
  "id": "c1-rechnung-hoeher-als-angebot",
  "modus": "alltag",
  "em": "🧾",
  "kat": "vertrag",
  "titel": "Die Rechnung ist 40 Prozent höher als das Angebot",
  "lvl": "C1",
  "dauer": "6 Min",
  "ort": "Ein Malerbetrieb hat deine Wohnung gestrichen. Angeboten waren 1.800 Euro, auf der Rechnung stehen 2.540. Du rufst den Chef an.",
  "schritte": [
   {
    "amanda": "Malerbetrieb Kern, guten Tag.",
    "hinweis": "Sachlich einsteigen: wer du bist, worum es geht, und die zwei Zahlen. Noch kein Vorwurf.",
    "beispiel": "Guten Tag, hier ist Novak aus der Lindenstraße zwölf. Es geht um Ihre Rechnung. Im Angebot standen 1.800 Euro, die Rechnung liegt bei 2.540. Das möchte ich gern verstehen.",
    "redemittel": [
     "Es geht um Ihre Rechnung vom …",
     "Im Angebot standen …, die Rechnung liegt bei …",
     "Das möchte ich gern verstehen."
    ]
   },
   {
    "amanda": "Ja, da kam halt einiges dazu. Die Wände waren in 'nem schlechteren Zustand, als wir dachten. Das sieht man vorher ja nicht.",
    "klartext": "Es kam einiges dazu. Die Wände waren in einem schlechteren Zustand, als wir dachten. Das kann man vorher nicht sehen.",
    "hinweis": "Nicht akzeptieren, dass Mehrkosten einfach passieren. Wichtig: Bei so großen Abweichungen hätte er dich vorher informieren müssen.",
    "beispiel": "Das kann sein. Aber bei so einer Abweichung hätten Sie mir vorher Bescheid geben müssen. Ich hätte dann selbst entscheiden können, ob ich das will.",
    "redemittel": [
     "Das kann sein. Aber …",
     "Bei so einer Abweichung hätten Sie mir vorher Bescheid geben müssen.",
     "Ich hätte selbst entscheiden können, ob …"
    ]
   },
   {
    "amanda": "Na ja, bei Ihnen war doch jemand zu Hause. Mit dem haben die Jungs das kurz abgesprochen.",
    "klartext": "Bei Ihnen war doch jemand zu Hause. Mit dieser Person haben meine Mitarbeiter das kurz besprochen.",
    "hinweis": "Nicht vom Kern ablenken lassen. Nachfragen, was genau abgesprochen wurde, und eine Aufstellung verlangen.",
    "beispiel": "Davon weiß ich nichts, und von einem Betrag war offenbar nicht die Rede. Schicken Sie mir bitte eine genaue Aufstellung: welche Arbeiten zusätzlich, wie viele Stunden, welches Material.",
    "redemittel": [
     "Davon weiß ich nichts.",
     "Von einem Betrag war offenbar nicht die Rede.",
     "Schicken Sie mir bitte eine genaue Aufstellung."
    ]
   },
   {
    "amanda": "Kann ich machen. Aber gemacht ist gemacht, das müssen Sie schon zahlen.",
    "klartext": "Das kann ich machen. Aber die Arbeit ist erledigt, also müssen Sie sie bezahlen.",
    "hinweis": "Ruhig bleiben und fair sein: Was im Angebot steht, zahlst du sofort. Über den Rest redet ihr, wenn die Aufstellung da ist.",
    "beispiel": "Den Betrag aus dem Angebot überweise ich Ihnen diese Woche, die Arbeit ist ja gut geworden. Über den Rest sprechen wir, wenn ich die Aufstellung habe.",
    "redemittel": [
     "Den Betrag aus dem Angebot überweise ich diese Woche.",
     "Die Arbeit ist ja gut geworden.",
     "Über den Rest sprechen wir, wenn …"
    ]
   },
   {
    "amanda": "Hm. Gut, ich schick Ihnen das morgen. Vielleicht finden wir ja 'ne Lösung.",
    "klartext": "Gut, ich schicke Ihnen das morgen. Vielleicht finden wir eine Lösung.",
    "hinweis": "Die Tür offenlassen und schriftlich bestätigen. So bleibt es freundlich, und du hast alles in der Hand.",
    "beispiel": "Das fände ich gut. Ich fasse unser Gespräch kurz per Mail zusammen, damit wir beide dasselbe im Kopf haben.",
    "redemittel": [
     "Das fände ich gut.",
     "Ich fasse unser Gespräch kurz per Mail zusammen.",
     "damit wir beide dasselbe im Kopf haben"
    ]
   }
  ]
 },
  /* ---- B2/C1-Ausbau, Runde 2 (25.10.2026) ---- */

 {
  "id": "b2-notruf-leiter",
  "modus": "business",
  "em": "🚑",
  "kat": "notfall",
  "titel": "Notruf: Ein Kollege ist von der Leiter gefallen",
  "lvl": "B2",
  "dauer": "4 Min",
  "ort": "Im Lager ist ein Kollege von der Leiter gestürzt. Er ist wach, aber er blutet am Kopf und kann nicht aufstehen. Du rufst die 112.",
  "schritte": [
   {
    "amanda": "Notruf Feuerwehr und Rettungsdienst. Wo genau ist der Notfallort?",
    "hinweis": "Zuerst der Ort — so genau wie möglich: Adresse, Gebäude, wo man reinkommt.",
    "beispiel": "Firma Baumann Logistik, Industriestraße vierzehn in Hagen. Im Lager, Halle zwei. Am besten über das Tor an der Rückseite.",
    "redemittel": [
     "Die Adresse ist …",
     "Im Gebäude …, Halle …",
     "Am besten kommen Sie über …"
    ]
   },
   {
    "amanda": "Was ist passiert?",
    "hinweis": "Kurz und sachlich: was, wie hoch, wie geht es ihm jetzt.",
    "beispiel": "Ein Kollege ist von einer Leiter gefallen, ungefähr aus zwei Metern. Er ist wach und spricht, aber er blutet am Kopf und kann nicht aufstehen.",
    "redemittel": [
     "… ist aus etwa … Metern gefallen.",
     "Er ist wach und spricht.",
     "Er blutet am … und kann nicht …"
    ]
   },
   {
    "amanda": "Wie viele Verletzte? Und wie alt ist der Mann ungefähr?",
    "hinweis": "Genau antworten, auch wenn du nur schätzen kannst. Sag ehrlich, wenn du schätzt.",
    "beispiel": "Nur er. Er ist ungefähr fünfzig, genau weiß ich es nicht.",
    "redemittel": [
     "Nur eine Person.",
     "Er ist ungefähr …",
     "Genau weiß ich es nicht."
    ]
   },
   {
    "amanda": "Der Rettungswagen ist unterwegs. Bewegen Sie ihn nicht. Drücken Sie ein sauberes Tuch auf die Wunde. Ist jemand am Tor?",
    "hinweis": "Bestätigen, was du tust, und dass jemand den Rettungsdienst reinholt. Nicht auflegen, bevor die Leitstelle es sagt.",
    "beispiel": "Okay, ich bewege ihn nicht und drücke ein Tuch drauf. Meine Kollegin geht jetzt zum Tor und wartet dort.",
    "redemittel": [
     "Okay, ich bewege ihn nicht.",
     "Ich drücke ein Tuch auf die Wunde.",
     "Eine Kollegin wartet am Tor."
    ]
   },
   {
    "amanda": "Gut. Bleiben Sie bei ihm und sprechen Sie mit ihm. Wenn sich etwas verändert, rufen Sie sofort wieder an.",
    "hinweis": "Kurz bestätigen. Mehr braucht es nicht.",
    "beispiel": "Mache ich. Danke.",
    "redemittel": [
     "Mache ich.",
     "Ich bleibe bei ihm.",
     "Danke."
    ]
   }
  ]
 },
 {
  "id": "b2-umtausch-ohne-bon",
  "modus": "business",
  "em": "🧥",
  "kat": "kunden",
  "titel": "Du arbeitest im Laden: Umtausch ohne Kassenbon",
  "lvl": "B2",
  "dauer": "4 Min",
  "ort": "Du arbeitest in einem Bekleidungsgeschäft. Eine Kundin will eine Jacke zurückgeben. Sie hat keinen Kassenbon, und das Etikett ist ab.",
  "schritte": [
   {
    "amanda": "Ich möchte die Jacke zurückgeben. Die gefällt mir doch nicht. Den Bon hab ich leider nicht mehr.",
    "hinweis": "Freundlich bleiben, dann die Regel erklären: Ohne Bon ist es schwierig.",
    "beispiel": "Das tut mir leid. Ohne Kassenbon kann ich Ihnen leider kein Geld zurückgeben. Ich muss ja sehen, wann und wo die Jacke gekauft wurde.",
    "redemittel": [
     "Das tut mir leid.",
     "Ohne Kassenbon kann ich leider …",
     "Ich muss ja sehen, wann …"
    ]
   },
   {
    "amanda": "Aber ich hab sie doch hier gekauft! Vor zwei Wochen. Ihre Kollegin war da.",
    "hinweis": "Ihr nicht widersprechen, aber auch nicht nachgeben. Nach einem anderen Nachweis fragen.",
    "beispiel": "Ich glaube Ihnen das. Haben Sie vielleicht mit Karte bezahlt? Dann sehen Sie es auf dem Kontoauszug, und damit kann ich etwas machen.",
    "redemittel": [
     "Ich glaube Ihnen das.",
     "Haben Sie vielleicht mit Karte bezahlt?",
     "Damit kann ich etwas machen."
    ]
   },
   {
    "amanda": "Nein, bar. Und das Etikett hab ich schon abgeschnitten.",
    "hinweis": "Eine faire Alternative anbieten, die das Geschäft erlauben kann: Gutschein oder Umtausch.",
    "beispiel": "Dann kann ich Ihnen das Geld nicht auszahlen. Aber ich kann Ihnen einen Gutschein geben, oder Sie suchen sich gleich etwas anderes aus.",
    "redemittel": [
     "Dann kann ich … nicht …",
     "Ich kann Ihnen aber … anbieten.",
     "Oder Sie suchen sich gleich etwas anderes aus."
    ]
   },
   {
    "amanda": "Ein Gutschein? Na gut. Wie lange gilt der?",
    "hinweis": "Klare Auskunft geben und freundlich abschließen.",
    "beispiel": "Drei Jahre, bis Ende des Jahres zweitausendneunundzwanzig. Ich schreibe es Ihnen drauf. Und vielleicht finden Sie ja heute schon etwas Schönes.",
    "redemittel": [
     "Der Gutschein gilt …",
     "Ich schreibe es Ihnen drauf.",
     "Vielleicht finden Sie ja heute schon etwas."
    ]
   }
  ]
 },
 {
  "id": "c1-zweitmeinung-op",
  "modus": "alltag",
  "em": "🩺",
  "kat": "gesundheit",
  "titel": "Der Arzt will operieren — du willst erst eine zweite Meinung",
  "lvl": "C1",
  "dauer": "5 Min",
  "ort": "Beim Orthopäden. Du hast seit Monaten Knieschmerzen. Er schlägt eine Operation vor, am liebsten schon nächste Woche.",
  "schritte": [
   {
    "amanda": "Also, auf dem MRT sieht man es deutlich. Das würde ich operieren. Ich hätte nächsten Dienstag einen Termin frei.",
    "hinweis": "Nicht sofort ja sagen. Erst zeigen, dass du ihn ernst nimmst, dann um Zeit bitten.",
    "beispiel": "Danke, dass Sie es so klar erklären. Bevor ich mich festlege, möchte ich das aber gern in Ruhe verstehen. Nächsten Dienstag ist mir ehrlich gesagt zu schnell.",
    "redemittel": [
     "Bevor ich mich festlege, …",
     "Das möchte ich in Ruhe verstehen.",
     "Das ist mir ehrlich gesagt zu schnell."
    ]
   },
   {
    "amanda": "Je länger Sie warten, desto schlimmer wird's. Da würde ich nicht lange rumüberlegen.",
    "klartext": "Je länger Sie warten, desto schlimmer wird es. Ich würde nicht lange darüber nachdenken.",
    "hinweis": "Sachliche Fragen stellen statt zu streiten: Gibt es eine Alternative? Was passiert, wenn man wartet?",
    "beispiel": "Das nehme ich ernst. Darf ich trotzdem fragen: Gibt es eine Alternative ohne Operation, zum Beispiel Physiotherapie? Und was genau passiert, wenn ich zwei, drei Monate warte?",
    "redemittel": [
     "Das nehme ich ernst. Darf ich trotzdem fragen: …",
     "Gibt es eine Alternative ohne Operation?",
     "Was genau passiert, wenn ich … warte?"
    ]
   },
   {
    "amanda": "Physio können Sie machen, aber das bringt bei Ihrem Befund erfahrungsgemäß wenig.",
    "hinweis": "Jetzt klar sagen, was du willst: eine zweite Meinung. Und um die Unterlagen bitten.",
    "beispiel": "Verstehe. Bei einer Operation möchte ich trotzdem gern eine zweite ärztliche Meinung hören. Können Sie mir dafür die MRT-Bilder und den Befund mitgeben?",
    "redemittel": [
     "Ich möchte gern eine zweite ärztliche Meinung hören.",
     "Können Sie mir … mitgeben?",
     "die Bilder und den Befund"
    ]
   },
   {
    "amanda": "Können Sie machen. Aber dann ist der Termin am Dienstag weg.",
    "hinweis": "Gelassen bleiben. Ein verlorener Termin ist kein Argument. Freundlich die Tür offenlassen.",
    "beispiel": "Das ist in Ordnung. Wenn die zweite Meinung genauso ausfällt, melde ich mich wieder bei Ihnen — dann weiß ich wenigstens, dass es die richtige Entscheidung ist.",
    "redemittel": [
     "Das ist in Ordnung.",
     "Wenn … genauso ausfällt, melde ich mich wieder.",
     "Dann weiß ich wenigstens, dass …"
    ]
   }
  ]
 },
 {
  "id": "c1-pflege-mutter-geschwister",
  "modus": "alltag",
  "em": "🫶",
  "kat": "familie",
  "titel": "Wer kümmert sich um Mama? Gespräch mit dem Bruder",
  "lvl": "C1",
  "dauer": "6 Min",
  "ort": "Eure Mutter braucht seit dem Sturz Hilfe im Alltag. Du wohnst in der Nähe und machst fast alles. Dein Bruder wohnt weiter weg. Ihr telefoniert.",
  "schritte": [
   {
    "amanda": "Und, wie geht's Mama? Du machst das ja super, ehrlich.",
    "hinweis": "Danke sagen, aber nicht in Lob versinken. Ehrlich sagen, wie es dir damit geht.",
    "beispiel": "Danke. Es geht ihr besser. Aber ehrlich gesagt: Mir wird es langsam zu viel. Ich bin fast jeden Tag bei ihr, neben der Arbeit.",
    "redemittel": [
     "Ehrlich gesagt: …",
     "Mir wird es langsam zu viel.",
     "neben der Arbeit"
    ]
   },
   {
    "amanda": "Ich weiß, ich weiß. Aber ich wohne nun mal zweihundert Kilometer weg. Was soll ich da machen?",
    "klartext": "Ich weiß. Aber ich wohne nun einmal zweihundert Kilometer entfernt. Was kann ich da tun?",
    "hinweis": "Den Einwand anerkennen und zeigen, dass auch aus der Ferne viel geht. Konkret werden.",
    "beispiel": "Das stimmt, und niemand erwartet, dass du jeden Tag kommst. Aber vieles geht auch von dort: Arzttermine organisieren, mit der Pflegekasse telefonieren, die Rechnungen übernehmen.",
    "redemittel": [
     "Das stimmt, und niemand erwartet, dass …",
     "Vieles geht auch aus der Ferne.",
     "zum Beispiel: …"
    ]
   },
   {
    "amanda": "Mit der Pflegekasse? Was soll ich denn da?",
    "hinweis": "Erklären, was ein Pflegegrad bringt. Damit wird aus Streit ein gemeinsamer Plan.",
    "beispiel": "Wir sollten einen Pflegegrad beantragen. Dann gibt es Geld, und wir können zum Beispiel einen Pflegedienst bezahlen, der morgens kommt. Den Antrag könntest du übernehmen.",
    "redemittel": [
     "Wir sollten … beantragen.",
     "Dann gibt es …",
     "Den Antrag könntest du übernehmen."
    ]
   },
   {
    "amanda": "Okay, das kann ich machen. Und sonst?",
    "hinweis": "Noch etwas Konkretes vereinbaren, das dir Luft verschafft.",
    "beispiel": "Und ich hätte gern ein Wochenende im Monat frei. Wäre es möglich, dass du dann zu ihr fährst? Das wäre für mich eine riesige Entlastung — und Mama freut sich auch.",
    "redemittel": [
     "Ich hätte gern …",
     "Wäre es möglich, dass du …?",
     "Das wäre für mich eine riesige Entlastung."
    ]
   },
   {
    "amanda": "Ein Wochenende im Monat … ja, das kriege ich hin. Tut mir leid, dass ich das nicht früher gesehen hab.",
    "klartext": "Ein Wochenende im Monat, ja, das schaffe ich. Es tut mir leid, dass ich das nicht früher bemerkt habe.",
    "hinweis": "Die Entschuldigung annehmen, ohne nachzutreten. Und festhalten, was ihr vereinbart habt.",
    "beispiel": "Danke, das bedeutet mir viel. Lass uns die Wochenenden gleich in einen gemeinsamen Kalender eintragen, dann ist es verbindlich.",
    "redemittel": [
     "Danke, das bedeutet mir viel.",
     "Lass uns … gleich eintragen.",
     "Dann ist es verbindlich."
    ]
   }
  ]
 },
 {
  "id": "c1-flug-annulliert-gutschein",
  "modus": "alltag",
  "em": "✈️",
  "kat": "unterwegs",
  "titel": "Flug gestrichen — und am Schalter gibt's nur einen Gutschein",
  "lvl": "C1",
  "dauer": "5 Min",
  "ort": "Am Flughafen. Dein Flug nach Lissabon ist gestrichen. Am Schalter der Fluggesellschaft bietet man dir einen Gutschein an.",
  "schritte": [
   {
    "amanda": "Es tut mir leid, der Flug ist annulliert. Ich kann Ihnen einen Gutschein über den Ticketpreis ausstellen.",
    "hinweis": "Freundlich, aber bestimmt: Du willst wissen, welche Möglichkeiten es gibt — nicht nur die eine, die man dir anbietet.",
    "beispiel": "Danke. Bevor ich etwas annehme: Welche Möglichkeiten habe ich denn genau? Ich muss eigentlich heute noch nach Lissabon.",
    "redemittel": [
     "Bevor ich etwas annehme: …",
     "Welche Möglichkeiten habe ich genau?",
     "Ich muss eigentlich heute noch …"
    ]
   },
   {
    "amanda": "Der nächste Flug ist morgen um 6:40, aber der ist so gut wie voll. Der Gutschein ist einfacher.",
    "hinweis": "Das Einfache für die Gesellschaft ist nicht automatisch gut für dich. Klar sagen, was du willst.",
    "beispiel": "Für Sie vielleicht. Mir wäre lieber: Buchen Sie mich bitte auf den nächsten freien Flug um — auch mit einer anderen Gesellschaft. Und wenn ich übernachten muss, brauche ich ein Hotel.",
    "redemittel": [
     "Mir wäre lieber: …",
     "Buchen Sie mich bitte um.",
     "auch mit einer anderen Gesellschaft"
    ]
   },
   {
    "amanda": "Das Hotel kann ich Ihnen nicht zusagen. Das müssen Sie dann über das Online-Formular einreichen.",
    "hinweis": "Ruhig bleiben, aber deine Rechte kennen und benennen. Nach der EU-Verordnung muss die Fluggesellschaft bei Annullierung für Betreuung sorgen.",
    "beispiel": "Bei einer Annullierung muss die Fluggesellschaft für die Übernachtung sorgen, das steht in der EU-Fluggastrechte-Verordnung. Können Sie bitte nachfragen, welches Hotel Sie mir geben?",
    "redemittel": [
     "Das steht in der EU-Fluggastrechte-Verordnung.",
     "Die Fluggesellschaft muss für … sorgen.",
     "Können Sie bitte nachfragen, …?"
    ]
   },
   {
    "amanda": "Ich frag mal meine Kollegin.",
    "hinweis": "Während du wartest: schriftliche Bestätigung verlangen. Das brauchst du später für die Entschädigung.",
    "beispiel": "Danke. Und geben Sie mir bitte schriftlich, dass der Flug annulliert wurde und aus welchem Grund. Das brauche ich später für meinen Antrag.",
    "redemittel": [
     "Geben Sie mir bitte schriftlich, dass …",
     "und aus welchem Grund",
     "Das brauche ich später für meinen Antrag."
    ]
   },
   {
    "amanda": "Okay. Sie haben einen Platz morgen um 6:40, ein Hotelgutschein ist hier, und die Bestätigung schicke ich Ihnen per Mail.",
    "hinweis": "Danke sagen. Der Ton bleibt freundlich — die Person am Schalter hat den Flug nicht gestrichen.",
    "beispiel": "Vielen Dank, dass Sie sich gekümmert haben. Ich weiß, dass Sie heute viel Stress haben.",
    "redemittel": [
     "Vielen Dank, dass Sie sich gekümmert haben.",
     "Ich weiß, dass Sie heute viel Stress haben.",
     "Schönen Abend noch."
    ]
   }
  ]
 },
 {
  "id": "c1-freundin-geschaeftsidee",
  "modus": "alltag",
  "em": "☕",
  "kat": "gefuehle",
  "titel": "Ehrlich sein: Die Geschäftsidee der Freundin hat Lücken",
  "lvl": "C1",
  "dauer": "5 Min",
  "ort": "Deine Freundin will ihren festen Job kündigen und ein Café eröffnen. Sie zeigt dir begeistert ihren Plan. Du siehst große Probleme.",
  "schritte": [
   {
    "amanda": "Und? Sag ehrlich! Ich kündige nächsten Monat und dann geht's los. Ist das nicht der Wahnsinn?",
    "klartext": "Sag ehrlich, was du denkst! Ich kündige nächsten Monat, und dann fange ich an. Ist das nicht großartig?",
    "hinweis": "Zuerst echte Anerkennung, aber nicht übertreiben. Dann um Erlaubnis für Kritik fragen.",
    "beispiel": "Man merkt, wie viel Herzblut da drin steckt, und die Idee mit dem Lesecafé finde ich wirklich schön. Darf ich dir trotzdem ehrlich sagen, wo ich noch Fragen habe?",
    "redemittel": [
     "Man merkt, wie viel Herzblut da drinsteckt.",
     "… finde ich wirklich schön.",
     "Darf ich dir trotzdem ehrlich sagen, …?"
    ]
   },
   {
    "amanda": "Klar. Aber mach mir jetzt bitte nicht alles kaputt.",
    "klartext": "Natürlich. Aber bitte zerstöre jetzt nicht meine ganze Freude.",
    "hinweis": "Sie beruhigen und dann die Kritik als Frage formulieren, nicht als Urteil.",
    "beispiel": "Will ich gar nicht. Mir ist nur aufgefallen: Die Miete ist eingeplant, aber was ist mit den ersten Monaten, in denen noch wenig Kundschaft kommt? Wovon lebst du da?",
    "redemittel": [
     "Will ich gar nicht.",
     "Mir ist nur aufgefallen: …",
     "Was ist mit …? Wovon lebst du da?"
    ]
   },
   {
    "amanda": "Ach, das läuft schon. Die Lage ist super, die Leute kommen bestimmt.",
    "hinweis": "Nicht lockerlassen, aber humorvoll und warm bleiben. Konkret nachfragen.",
    "beispiel": "Bestimmt ist so ein Wort, das mir bei Geld immer ein bisschen Angst macht. Hast du mal ausgerechnet, wie viele Kaffees du am Tag verkaufen musst, damit es sich trägt?",
    "redemittel": [
     "… ist so ein Wort, das mir … Angst macht.",
     "Hast du mal ausgerechnet, wie viele …?",
     "damit es sich trägt"
    ]
   },
   {
    "amanda": "Hm. Nee, so genau eigentlich nicht.",
    "klartext": "Nein, so genau habe ich das eigentlich nicht ausgerechnet.",
    "hinweis": "Jetzt nicht triumphieren. Einen hilfreichen Vorschlag machen, der die Idee rettet statt sie zu beerdigen.",
    "beispiel": "Dann lass uns das am Wochenende zusammen durchrechnen. Und vielleicht kündigst du nicht sofort, sondern reduzierst erst mal auf Teilzeit. Dann hast du ein Polster und trotzdem dein Café.",
    "redemittel": [
     "Lass uns das zusammen durchrechnen.",
     "Vielleicht …, sondern erst mal …",
     "Dann hast du ein Polster und trotzdem …"
    ]
   }
  ]
 },
 {
  "id": "c1-catering-verhandeln",
  "modus": "business",
  "em": "🥂",
  "kat": "essen",
  "titel": "Catering für die Firmenfeier: Das Angebot ist zu teuer",
  "lvl": "C1",
  "dauer": "5 Min",
  "ort": "Du organisierst die Weihnachtsfeier für sechzig Leute. Der Caterer will 52 Euro pro Person. Dein Budget sind 40 Euro.",
  "schritte": [
   {
    "amanda": "Also, zweiundfünfzig pro Kopf, da ist alles drin: Vorspeise, zwei Hauptgerichte, Dessert, Service. Da kann ich nicht viel machen.",
    "hinweis": "Das Angebot würdigen, aber offen dein Budget nennen. Wer seine Zahl nennt, verhandelt ehrlicher.",
    "beispiel": "Das Angebot ist wirklich gut zusammengestellt. Ich bin aber ehrlich: Unser Budget liegt bei vierzig Euro pro Person. Wir müssen also schauen, wo wir ansetzen.",
    "redemittel": [
     "Das Angebot ist wirklich gut.",
     "Ich bin aber ehrlich: Unser Budget liegt bei …",
     "Wir müssen schauen, wo wir ansetzen."
    ]
   },
   {
    "amanda": "Vierzig? Da müssten wir aber ordentlich abspecken.",
    "klartext": "Vierzig Euro? Dann müssten wir sehr viel weglassen.",
    "hinweis": "Selbst Vorschläge machen, wo man sparen kann, ohne dass die Feier schlechter wird.",
    "beispiel": "Muss gar nicht so viel sein. Zwei Ideen: Statt zwei Hauptgerichten ein Buffet mit einer vegetarischen und einer Fleischvariante. Und das Dessert könnte als kleines Fingerfood kommen.",
    "redemittel": [
     "Muss gar nicht so viel sein.",
     "Zwei Ideen: …",
     "statt … lieber …"
    ]
   },
   {
    "amanda": "Buffet ginge. Dann spare ich beim Service. Damit wären wir bei sechsundvierzig.",
    "hinweis": "Den Fortschritt anerkennen und einen zweiten Hebel nutzen: Menge, Termin, zukünftige Aufträge.",
    "beispiel": "Das ist schon ein großer Schritt, danke. Wenn wir die Feier an einem Donnerstag machen statt am Freitag, und wir Sie auch für das Sommerfest buchen — kommen wir dann auf zweiundvierzig?",
    "redemittel": [
     "Das ist schon ein großer Schritt.",
     "Wenn wir …, kommen wir dann auf …?",
     "und wir Sie auch für … buchen"
    ]
   },
   {
    "amanda": "Donnerstag und Sommerfest … okay, dreiundvierzig. Weiter runter geht's wirklich nicht.",
    "klartext": "Wenn es Donnerstag ist und Sie mich auch für das Sommerfest buchen, dann dreiundvierzig Euro. Billiger geht es wirklich nicht.",
    "hinweis": "Entscheiden: Drei Euro über dem Budget sind bei so einem Entgegenkommen vertretbar. Zusagen und schriftlich festhalten.",
    "beispiel": "Das ist fair, damit kann ich leben. Schicken Sie mir das Angebot bitte schriftlich, mit dem Sommerfest als Option, dann gebe ich es heute noch frei.",
    "redemittel": [
     "Das ist fair, damit kann ich leben.",
     "Schicken Sie mir das bitte schriftlich.",
     "Dann gebe ich es heute noch frei."
    ]
   }
  ]
 },
 {
  "id": "c1-hausversammlung-fahrradkeller",
  "modus": "alltag",
  "em": "🚲",
  "kat": "menschen",
  "titel": "Hausversammlung: Streit um den Fahrradkeller",
  "lvl": "C1",
  "dauer": "6 Min",
  "ort": "Hausversammlung. Der Fahrradkeller ist voll, auch mit alten, kaputten Rädern. Eine Nachbarin will Kinderwagen verbieten, andere sind sauer. Du willst vermitteln.",
  "schritte": [
   {
    "amanda": "Ich sag's jetzt mal ganz klar: Kinderwagen haben im Fahrradkeller nichts zu suchen. Das heißt Fahrradkeller, nicht Kinderwagenkeller.",
    "klartext": "Ich sage es ganz deutlich: Kinderwagen gehören nicht in den Fahrradkeller.",
    "hinweis": "Nicht Partei ergreifen. Das Problem hinter dem Streit benennen: zu wenig Platz.",
    "beispiel": "Ich glaube, wir haben eigentlich alle dasselbe Problem: Der Keller ist zu voll. Bevor wir darüber streiten, wer rein darf, sollten wir schauen, was da überhaupt steht.",
    "redemittel": [
     "Ich glaube, wir haben alle dasselbe Problem: …",
     "Bevor wir darüber streiten, …",
     "sollten wir schauen, was …"
    ]
   },
   {
    "amanda": "Ach ja? Und was soll da stehen außer Fahrrädern?",
    "hinweis": "Mit einer Beobachtung antworten, nicht mit einem Vorwurf an jemanden.",
    "beispiel": "Mir ist aufgefallen, dass mindestens acht Räder seit Jahren nicht bewegt wurden — platte Reifen, verrostete Ketten. Die gehören wahrscheinlich niemandem mehr hier im Haus.",
    "redemittel": [
     "Mir ist aufgefallen, dass …",
     "seit Jahren nicht bewegt",
     "Die gehören wahrscheinlich niemandem mehr."
    ]
   },
   {
    "amanda": "Das mag ja sein. Aber das ändert nichts daran, dass die Kinderwagen den Gang versperren.",
    "hinweis": "Ihren Punkt anerkennen — er ist berechtigt — und ihn in eine Lösung einbauen.",
    "beispiel": "Da haben Sie recht, der Gang muss frei bleiben, schon wegen der Sicherheit. Mein Vorschlag: Wir räumen die alten Räder raus, und dann bekommen die Kinderwagen eine feste Ecke hinten links, wo sie niemanden stören.",
    "redemittel": [
     "Da haben Sie recht, … muss frei bleiben.",
     "Mein Vorschlag: …",
     "eine feste Ecke, wo sie niemanden stören"
    ]
   },
   {
    "amanda": "Und wer entscheidet, welches Rad weg darf? Ich will nicht, dass mir einer mein Rad wegschmeißt.",
    "klartext": "Wer entscheidet, welches Fahrrad entfernt wird? Ich möchte nicht, dass jemand mein Fahrrad wegwirft.",
    "hinweis": "Ein faires Verfahren vorschlagen, das niemanden überrumpelt: markieren, Frist, Hausverwaltung.",
    "beispiel": "Niemand wirft einfach etwas weg. Wir hängen an jedes Rad einen Zettel. Wer sein Rad behalten will, nimmt den Zettel innerhalb von vier Wochen ab. Was danach noch einen Zettel hat, entsorgt die Hausverwaltung.",
    "redemittel": [
     "Niemand wirft einfach etwas weg.",
     "Wer …, nimmt den Zettel innerhalb von … ab.",
     "Was danach noch …, entsorgt die Hausverwaltung."
    ]
   },
   {
    "amanda": "Gut, das klingt fair. Und wer schreibt der Hausverwaltung?",
    "hinweis": "Die Aufgabe übernehmen und das Ergebnis zusammenfassen, damit alle wissen, was beschlossen ist.",
    "beispiel": "Das mache ich. Also: Zettel an alle Räder, vier Wochen Frist, danach räumt die Verwaltung, und die Kinderwagen bekommen die Ecke hinten links. Sind alle einverstanden?",
    "redemittel": [
     "Das mache ich.",
     "Also, zusammengefasst: …",
     "Sind alle einverstanden?"
    ]
   }
  ]
 },
  /* ---- B2/C1-Ausbau, Runde 3 (25.10.2026) ---- */

 {
  "id": "b2-zug-platz-besetzt",
  "modus": "alltag",
  "em": "🚆",
  "kat": "unterwegs",
  "titel": "Im ICE sitzt jemand auf deinem reservierten Platz",
  "lvl": "B2",
  "dauer": "4 Min",
  "ort": "Der Zug ist voll. Du hast einen Platz reserviert, aber dort sitzt ein Mann mit Laptop und Kopfhörern.",
  "schritte": [
   {
    "amanda": "Hm? Ja bitte?",
    "hinweis": "Höflich, aber klar. Zeig deine Reservierung, statt lange zu erklären.",
    "beispiel": "Entschuldigung, ich glaube, Sie sitzen auf meinem Platz. Ich habe hier die Reservierung für Wagen sieben, Platz dreiundvierzig.",
    "redemittel": [
     "Entschuldigung, ich glaube, …",
     "Ich habe hier die Reservierung für …",
     "Wagen …, Platz …"
    ]
   },
   {
    "amanda": "Ach, echt? Da stand aber nix auf der Anzeige. Ich dachte, der ist frei.",
    "klartext": "Wirklich? Auf der Anzeige stand aber nichts. Ich dachte, der Platz ist frei.",
    "hinweis": "Verständnis zeigen — die Anzeige ist oft wirklich leer. Trotzdem bei deiner Bitte bleiben.",
    "beispiel": "Das kann gut sein, die Anzeigen funktionieren oft nicht. Aber ich habe den Platz bezahlt und würde mich gern setzen.",
    "redemittel": [
     "Das kann gut sein.",
     "Die Anzeigen funktionieren oft nicht.",
     "Ich würde mich gern setzen."
    ]
   },
   {
    "amanda": "Ich hab hier aber grad alles aufgebaut, und ich muss gleich in ein Meeting. Können Sie nicht woanders hin?",
    "klartext": "Ich habe hier gerade alles aufgebaut, und ich habe gleich ein Meeting. Können Sie sich nicht woanders hinsetzen?",
    "hinweis": "Freundlich ablehnen und begründen. Der Zug ist voll — das ist ein gutes Argument.",
    "beispiel": "Ich verstehe, dass das gerade ungünstig ist. Aber der Zug ist voll, und ich fahre noch drei Stunden. Ich warte gern kurz, bis Sie zusammengepackt haben.",
    "redemittel": [
     "Ich verstehe, dass das gerade ungünstig ist.",
     "Aber …",
     "Ich warte gern kurz, bis …"
    ]
   },
   {
    "amanda": "Na gut. Moment.",
    "hinweis": "Danke sagen und freundlich helfen. So endet es ohne schlechte Stimmung.",
    "beispiel": "Danke, sehr nett. Soll ich Ihnen mit dem Koffer helfen?",
    "redemittel": [
     "Danke, sehr nett.",
     "Soll ich Ihnen helfen?",
     "Kein Stress."
    ]
   }
  ]
 },
 {
  "id": "b2-handyvertrag-kuendigen",
  "modus": "alltag",
  "em": "📱",
  "kat": "einkaufen",
  "titel": "Handyvertrag kündigen — der Verkäufer will verlängern",
  "lvl": "B2",
  "dauer": "4 Min",
  "ort": "Im Handyladen. Dein Vertrag läuft schon über zwei Jahre. Du willst kündigen, weil du ein günstigeres Angebot gefunden hast.",
  "schritte": [
   {
    "amanda": "Hallo! Was kann ich für Sie tun? Wollen Sie ein neues Handy?",
    "hinweis": "Gleich sagen, was du willst. Kurz und klar.",
    "beispiel": "Nein, danke. Ich möchte meinen Vertrag kündigen. Hier ist meine Kundennummer.",
    "redemittel": [
     "Ich möchte meinen Vertrag kündigen.",
     "Hier ist meine Kundennummer.",
     "Nein, danke."
    ]
   },
   {
    "amanda": "Kündigen? Schade! Ich kann Ihnen aber ein super Angebot machen: zehn Euro günstiger, wenn Sie zwei Jahre verlängern.",
    "hinweis": "Dich nicht überreden lassen. Freundlich ablehnen und sagen, warum.",
    "beispiel": "Danke, aber ich möchte mich nicht wieder für zwei Jahre binden. Ich habe ein Angebot ohne lange Laufzeit gefunden.",
    "redemittel": [
     "Danke, aber ich möchte mich nicht …",
     "Ich habe ein Angebot ohne lange Laufzeit gefunden.",
     "Mein Entschluss steht fest."
    ]
   },
   {
    "amanda": "Aber dann haben Sie ja noch drei Monate Kündigungsfrist.",
    "hinweis": "Nachfragen, wenn etwas nicht stimmt. Nach der Mindestlaufzeit ist ein Vertrag in Deutschland monatlich kündbar.",
    "beispiel": "Mein Vertrag läuft schon über zwei Jahre. Soweit ich weiß, kann ich dann mit einem Monat Frist kündigen. Können Sie das bitte noch mal prüfen?",
    "redemittel": [
     "Soweit ich weiß, …",
     "mit einem Monat Frist",
     "Können Sie das bitte noch mal prüfen?"
    ]
   },
   {
    "amanda": "Ah, stimmt, Sie haben recht. Dann endet der Vertrag Ende November.",
    "hinweis": "Eine schriftliche Bestätigung verlangen. Das ist bei Kündigungen sehr wichtig.",
    "beispiel": "Super, danke. Bekomme ich dafür bitte eine schriftliche Bestätigung, per Mail oder ausgedruckt?",
    "redemittel": [
     "Bekomme ich bitte eine schriftliche Bestätigung?",
     "per Mail oder ausgedruckt",
     "Danke für Ihre Hilfe."
    ]
   }
  ]
 },
 {
  "id": "b2-hochzeit-niemand-kennen",
  "modus": "alltag",
  "em": "💒",
  "kat": "menschen",
  "titel": "Auf einer Hochzeit, auf der du fast niemanden kennst",
  "lvl": "B2",
  "dauer": "4 Min",
  "ort": "Du bist mit deinem Partner auf der Hochzeit seiner Kollegin. Er holt Getränke. Neben dir am Stehtisch steht eine Frau, die du nicht kennst.",
  "schritte": [
   {
    "amanda": "Schöne Feier, oder? Woher kennen Sie denn das Brautpaar?",
    "hinweis": "Kurz antworten und eine Gegenfrage stellen — so läuft Smalltalk.",
    "beispiel": "Ja, wirklich schön! Ich bin mit Jonas hier, er arbeitet mit der Braut zusammen. Und Sie? Gehören Sie zur Familie?",
    "redemittel": [
     "Ich bin mit … hier.",
     "Er arbeitet mit … zusammen.",
     "Und Sie? …?"
    ]
   },
   {
    "amanda": "Ich bin die Tante vom Bräutigam. Ich kenn hier auch kaum jemanden, ehrlich gesagt. Die Familie ist riesig.",
    "klartext": "Ich bin die Tante des Bräutigams. Ehrlich gesagt kenne ich hier auch kaum jemanden.",
    "hinweis": "Eine Gemeinsamkeit finden — das verbindet sofort. Ein bisschen Humor hilft.",
    "beispiel": "Dann sind wir ja schon zu zweit! Ich habe vorhin mindestens zehn Leuten die Hand gegeben und mir keinen einzigen Namen gemerkt.",
    "redemittel": [
     "Dann sind wir ja schon zu zweit!",
     "Ich habe mir keinen einzigen Namen gemerkt.",
     "Geht mir genauso."
    ]
   },
   {
    "amanda": "Haha, genau so geht's mir auch. Sie haben einen leichten Akzent — woher kommen Sie?",
    "hinweis": "Kurz und entspannt antworten. Du entscheidest, wie viel du erzählen willst — und lenkst dann auf ein anderes Thema.",
    "beispiel": "Aus Portugal, aus Porto. Ich lebe aber schon fünf Jahre hier. Waren Sie schon mal in Portugal?",
    "redemittel": [
     "Ich komme aus …",
     "Ich lebe schon … Jahre hier.",
     "Waren Sie schon mal in …?"
    ]
   },
   {
    "amanda": "Ja, an der Algarve, vor Jahren! Ach, da kommt Ihr Mann mit den Getränken.",
    "hinweis": "Das Gespräch freundlich öffnen: deinen Partner vorstellen, damit sie nicht allein bleibt.",
    "beispiel": "Ah, perfekt. Jonas, das ist die Tante vom Bräutigam. Wir haben gerade festgestellt, dass wir beide hier niemanden kennen.",
    "redemittel": [
     "Das ist …",
     "Wir haben gerade festgestellt, dass …",
     "Darf ich vorstellen: …"
    ]
   }
  ]
 },
 {
  "id": "b2-apotheke-wechselwirkung",
  "modus": "alltag",
  "em": "💊",
  "kat": "gesundheit",
  "titel": "In der Apotheke: Verträgt sich das mit meinen Tabletten?",
  "lvl": "B2",
  "dauer": "4 Min",
  "ort": "Du hast starke Rückenschmerzen und willst ein Schmerzmittel kaufen. Du nimmst aber jeden Tag Tabletten gegen hohen Blutdruck.",
  "schritte": [
   {
    "amanda": "Guten Tag, was darf's sein?",
    "hinweis": "Sag, was du brauchst — und sag gleich, welche Tabletten du schon nimmst.",
    "beispiel": "Ich hätte gern etwas gegen Rückenschmerzen. Ich nehme aber jeden Tag Tabletten gegen Bluthochdruck. Verträgt sich das?",
    "redemittel": [
     "Ich hätte gern etwas gegen …",
     "Ich nehme jeden Tag …",
     "Verträgt sich das?"
    ]
   },
   {
    "amanda": "Gut, dass Sie fragen. Wissen Sie, wie Ihr Blutdruckmittel heißt?",
    "hinweis": "Ehrlich sagen, was du weißt. Wenn du den Namen nicht weißt, biete eine Lösung an.",
    "beispiel": "Den genauen Namen weiß ich leider nicht. Ich habe aber ein Foto von der Packung auf dem Handy. Soll ich es Ihnen zeigen?",
    "redemittel": [
     "Den genauen Namen weiß ich leider nicht.",
     "Ich habe ein Foto von der Packung.",
     "Soll ich es Ihnen zeigen?"
    ]
   },
   {
    "amanda": "Ja, danke. Ibuprofen würde ich Ihnen da eher nicht empfehlen, das kann die Wirkung abschwächen. Für ein paar Tage wäre Paracetamol besser.",
    "hinweis": "Nachfragen, damit du es richtig nimmst: wie oft, wie lange.",
    "beispiel": "Okay, verstehe. Wie oft am Tag darf ich das nehmen? Und wie lange höchstens?",
    "redemittel": [
     "Wie oft am Tag darf ich …?",
     "Wie lange höchstens?",
     "Gibt es etwas, worauf ich achten muss?"
    ]
   },
   {
    "amanda": "Höchstens dreimal am Tag eine, und nicht länger als drei Tage ohne Arzt. Wenn es dann nicht besser ist, gehen Sie bitte zur Hausärztin.",
    "hinweis": "Zusammenfassen, was du verstanden hast. So merkst du es dir besser.",
    "beispiel": "Also höchstens dreimal am Tag und maximal drei Tage, sonst zur Ärztin. Vielen Dank für die Beratung.",
    "redemittel": [
     "Also: …",
     "Sonst gehe ich zur Ärztin.",
     "Vielen Dank für die Beratung."
    ]
   }
  ]
 },
 {
  "id": "b2-handwerker-dreck",
  "modus": "business",
  "em": "🧹",
  "kat": "handwerk",
  "titel": "Du bist Handwerker: Die Kundin beschwert sich über den Dreck",
  "lvl": "B2",
  "dauer": "4 Min",
  "ort": "Du hast in einer Wohnung neue Steckdosen eingebaut. Die Kundin kommt nach Hause und ist sauer: überall Staub und Bohrreste.",
  "schritte": [
   {
    "amanda": "Also, das darf doch nicht wahr sein! Überall Staub, sogar auf dem Sofa. Das war heute Morgen sauber!",
    "hinweis": "Nicht verteidigen. Erst ihren Ärger anerkennen und dich entschuldigen.",
    "beispiel": "Sie haben recht, das sieht nicht gut aus. Das tut mir leid. Beim Bohren in der Wand staubt es leider sehr.",
    "redemittel": [
     "Sie haben recht, das sieht nicht gut aus.",
     "Das tut mir leid.",
     "Beim Bohren staubt es leider sehr."
    ]
   },
   {
    "amanda": "Und jetzt? Soll ich das jetzt alles selbst putzen?",
    "hinweis": "Sofort eine Lösung anbieten und konkret sagen, was du tust.",
    "beispiel": "Nein, natürlich nicht. Ich hole jetzt den Industriesauger aus dem Auto und mache alles sauber, auch das Sofa.",
    "redemittel": [
     "Nein, natürlich nicht.",
     "Ich hole jetzt …",
     "und mache alles sauber"
    ]
   },
   {
    "amanda": "Gut. Aber warum haben Sie nichts abgedeckt?",
    "hinweis": "Den Fehler zugeben, ohne Ausreden. Und sagen, wie es beim nächsten Mal läuft.",
    "beispiel": "Das hätte ich machen sollen, da haben Sie völlig recht. Beim nächsten Raum lege ich vorher Folie aus.",
    "redemittel": [
     "Das hätte ich machen sollen.",
     "Da haben Sie völlig recht.",
     "Beim nächsten Mal …"
    ]
   },
   {
    "amanda": "Na gut. Die Steckdosen funktionieren aber alle?",
    "hinweis": "Kurz und kompetent antworten — und anbieten, es zu zeigen.",
    "beispiel": "Ja, alle sind angeschlossen und geprüft. Wenn Sie möchten, zeige ich sie Ihnen kurz, bevor ich sauge.",
    "redemittel": [
     "Ja, alle sind … und geprüft.",
     "Wenn Sie möchten, zeige ich …",
     "bevor ich …"
    ]
   }
  ]
 },
 {
  "id": "b2-elterngeld-rueckfrage",
  "modus": "alltag",
  "em": "👶",
  "kat": "amt",
  "titel": "Die Elterngeldstelle ruft an: Es fehlen Unterlagen",
  "lvl": "B2",
  "dauer": "4 Min",
  "ort": "Du hast vor drei Wochen Elterngeld beantragt. Jetzt ruft eine Sachbearbeiterin der Elterngeldstelle an.",
  "schritte": [
   {
    "amanda": "Guten Tag, hier ist die Elterngeldstelle. Ich bearbeite Ihren Antrag. Da fehlen leider noch Unterlagen.",
    "hinweis": "Freundlich reagieren und genau nachfragen, was fehlt. Am besten gleich mitschreiben.",
    "beispiel": "Oh, gut, dass Sie anrufen. Was genau fehlt denn? Ich schreibe es mir gleich auf.",
    "redemittel": [
     "Gut, dass Sie anrufen.",
     "Was genau fehlt denn?",
     "Ich schreibe es mir auf."
    ]
   },
   {
    "amanda": "Die Gehaltsabrechnungen von Januar bis März fehlen. Und die Geburtsurkunde mit dem Vermerk für das Elterngeld.",
    "hinweis": "Wiederholen, was du verstanden hast. Und nachfragen, wenn ein Wort neu ist.",
    "beispiel": "Also die Gehaltsabrechnungen von Januar bis März. Und die Geburtsurkunde — was meinen Sie genau mit dem Vermerk?",
    "redemittel": [
     "Also: …",
     "Was meinen Sie genau mit …?",
     "Habe ich das richtig verstanden?"
    ]
   },
   {
    "amanda": "Das Standesamt stellt eine extra Bescheinigung für das Elterngeld aus. Die haben Sie bei der Geburt bekommen.",
    "hinweis": "Ehrlich sagen, wenn du nicht sicher bist, und fragen, was passiert, wenn du sie nicht findest.",
    "beispiel": "Ah, das kann sein, das muss ich zu Hause suchen. Und wenn ich sie nicht finde? Kann ich sie beim Standesamt neu bekommen?",
    "redemittel": [
     "Das muss ich zu Hause suchen.",
     "Und wenn ich … nicht finde?",
     "Kann ich sie neu bekommen?"
    ]
   },
   {
    "amanda": "Ja, das geht. Schicken Sie uns bitte alles innerhalb von vier Wochen, gern auch per Post.",
    "hinweis": "Nach dem Aktenzeichen fragen, damit alles richtig zugeordnet wird. Dann danke sagen.",
    "beispiel": "Mache ich. Welches Aktenzeichen soll ich auf den Brief schreiben? Dann danke ich Ihnen für den Anruf.",
    "redemittel": [
     "Welches Aktenzeichen soll ich angeben?",
     "innerhalb von vier Wochen",
     "Danke für den Anruf."
    ]
   }
  ]
 },
 {
  "id": "c1-bauleiter-subunternehmer",
  "modus": "business",
  "em": "🏗️",
  "kat": "handwerk",
  "titel": "Falsche Lieferung, der Zeitplan wackelt — Klartext mit dem Subunternehmer",
  "lvl": "C1",
  "dauer": "6 Min",
  "ort": "Du bist Bauleiterin. Der Fensterbauer hat die falschen Maße geliefert. Der Einzug der Mieter ist in sechs Wochen. Du rufst den Chef der Firma an.",
  "schritte": [
   {
    "amanda": "Ja, ich hab's schon gehört. Blöd gelaufen. Da hat sich bei uns jemand beim Aufmaß vertan.",
    "klartext": "Ich habe es schon gehört. Das ist schlecht gelaufen. Jemand bei uns hat beim Messen einen Fehler gemacht.",
    "hinweis": "Nicht über die Schuldfrage diskutieren, sie ist geklärt. Sofort zum Wichtigsten: dem Termin.",
    "beispiel": "Danke, dass Sie das gleich zugeben. Dann müssen wir nicht über die Ursache reden, sondern nur über eins: Wann sind die richtigen Fenster drin?",
    "redemittel": [
     "Danke, dass Sie das gleich zugeben.",
     "Dann müssen wir nicht über …, sondern nur über eins: …",
     "Wann sind … drin?"
    ]
   },
   {
    "amanda": "Also, neu produzieren dauert normalerweise fünf Wochen. Plus Einbau.",
    "hinweis": "Die Folgen klar machen — ohne Drohung, mit Fakten. Dann fragen, was er tun kann.",
    "beispiel": "Fünf Wochen plus Einbau heißt: Der Innenausbau kann nicht anfangen, und der Einzug in sechs Wochen ist weg. Was können Sie tun, damit es schneller geht?",
    "redemittel": [
     "… heißt konkret: …",
     "Der Einzug ist dann nicht zu halten.",
     "Was können Sie tun, damit …?"
    ]
   },
   {
    "amanda": "Ich kann beim Werk anfragen, ob die uns vorziehen. Versprechen kann ich nix.",
    "klartext": "Ich kann beim Werk fragen, ob sie unseren Auftrag zuerst produzieren. Ich kann aber nichts versprechen.",
    "hinweis": "Das reicht nicht. Eine Frist und eine Zwischenlösung verlangen, die die Baustelle weiterlaufen lässt.",
    "beispiel": "Bitte fragen Sie heute noch an und geben Sie mir bis morgen Mittag einen verbindlichen Termin. Und bis dahin: Können Sie die Öffnungen provisorisch dicht machen, damit drinnen weitergearbeitet werden kann?",
    "redemittel": [
     "Geben Sie mir bis … einen verbindlichen Termin.",
     "Und bis dahin: …",
     "provisorisch dicht machen"
    ]
   },
   {
    "amanda": "Provisorisch abdichten, ja, das kriegen wir hin. Das geht dann aber auf Ihre Rechnung, oder?",
    "klartext": "Wir können die Öffnungen provisorisch abdichten. Bezahlen Sie das?",
    "hinweis": "Bestimmt bleiben: Wer den Fehler verursacht hat, trägt die Kosten. Aber im Ton freundlich.",
    "beispiel": "Nein, das sehe ich anders. Der Fehler lag beim Aufmaß, also bei Ihnen. Die Abdichtung und die Neuproduktion übernehmen Sie. Das halte ich gleich schriftlich fest.",
    "redemittel": [
     "Nein, das sehe ich anders.",
     "Der Fehler lag bei …, also …",
     "Das halte ich gleich schriftlich fest."
    ]
   },
   {
    "amanda": "Hm. Na gut. Ich meld mich morgen bis zwölf.",
    "klartext": "Na gut. Ich melde mich morgen bis zwölf Uhr.",
    "hinweis": "Das Gespräch verbindlich abschließen und die Beziehung retten — ihr arbeitet noch länger zusammen.",
    "beispiel": "Gut, dann bis morgen zwölf. Und danke, dass Sie so offen damit umgehen. Das macht es für uns beide leichter.",
    "redemittel": [
     "Dann bis morgen …",
     "Danke, dass Sie so offen damit umgehen.",
     "Das macht es für uns beide leichter."
    ]
   }
  ]
 },
 {
  "id": "c1-pflege-arzt-ueberzeugen",
  "modus": "business",
  "em": "📞",
  "kat": "pflege",
  "titel": "Die Bewohnerin baut ab — den Arzt am Telefon überzeugen",
  "lvl": "C1",
  "dauer": "5 Min",
  "ort": "Du bist Pflegefachkraft im Spätdienst. Frau Weber, 84, ist seit heute Nachmittag verwirrt und hat Fieber. Du rufst den Hausarzt an. Er hat Feierabend.",
  "schritte": [
   {
    "amanda": "Ja, Doktor Brandt. Ich bin eigentlich schon auf dem Sprung. Was gibt's?",
    "klartext": "Hier ist Doktor Brandt. Ich wollte gerade gehen. Worum geht es?",
    "hinweis": "Strukturiert berichten: wer, was ist neu, welche Werte. Ein Arzt hört nur kurz zu — gib ihm gleich das Wichtigste.",
    "beispiel": "Guten Abend, hier ist Schwester Amina aus dem Haus Lindenhof. Es geht um Frau Weber, vierundachtzig. Sie ist seit heute Nachmittag neu verwirrt und hat neununddreißig Komma eins Fieber.",
    "redemittel": [
     "Es geht um …",
     "Seit … ist sie neu …",
     "Sie hat … Fieber."
    ]
   },
   {
    "amanda": "Verwirrt ist sie doch öfter mal, oder? Geben Sie ihr was gegen das Fieber, ich schau morgen vorbei.",
    "klartext": "Sie ist doch öfter verwirrt, oder? Geben Sie ihr ein Mittel gegen das Fieber, ich komme morgen.",
    "hinweis": "Widersprechen mit Fakten: Was ist anders als sonst? Gib weitere Werte, die die Lage ernst machen.",
    "beispiel": "Nein, das ist anders als sonst. Normalerweise erkennt sie uns alle, heute nicht. Dazu: Puls hundertzwölf, Blutdruck neunzig zu fünfzig, und sie hat seit Mittag kaum getrunken.",
    "redemittel": [
     "Nein, das ist anders als sonst.",
     "Normalerweise …, heute nicht.",
     "Dazu: …"
    ]
   },
   {
    "amanda": "Hm. Blutdruck neunzig zu fünfzig … Und Urin?",
    "hinweis": "Ehrlich antworten, auch wenn du etwas nicht weißt. Und deine Einschätzung sagen.",
    "beispiel": "Sie war seit dem Mittag nicht auf der Toilette, die Einlage ist trocken. Ehrlich gesagt mache ich mir Sorgen. Ich glaube nicht, dass das bis morgen warten kann.",
    "redemittel": [
     "Seit … nicht …",
     "Ehrlich gesagt mache ich mir Sorgen.",
     "Ich glaube nicht, dass das bis morgen warten kann."
    ]
   },
   {
    "amanda": "Okay. Ich schaff's heute nicht mehr. Rufen Sie den ärztlichen Bereitschaftsdienst — oder bei Verschlechterung direkt die 112.",
    "hinweis": "Die Anweisung wiederholen, damit sie eindeutig ist, und dokumentieren, dass der Arzt informiert ist.",
    "beispiel": "Verstanden: Ich rufe jetzt den Bereitschaftsdienst, und wenn es schlechter wird, die 112. Ich dokumentiere, dass ich Sie um neunzehn Uhr zehn informiert habe.",
    "redemittel": [
     "Verstanden: …",
     "Wenn es schlechter wird, …",
     "Ich dokumentiere, dass ich Sie um … informiert habe."
    ]
   }
  ]
 },
  /* ---- B2/C1-Ausbau, Runde 4 (25.10.2026) ---- */

 {
  "id": "c1-zeugenaussage-unfall",
  "modus": "alltag",
  "em": "🚓",
  "kat": "notfall",
  "titel": "Du hast den Unfall gesehen — jetzt fragt die Polizei genau nach",
  "lvl": "C1",
  "dauer": "5 Min",
  "ort": "An einer Kreuzung sind zwei Autos zusammengestoßen. Du hast es von der Bushaltestelle aus gesehen. Eine Polizistin nimmt deine Aussage auf.",
  "schritte": [
   {
    "amanda": "Sie haben den Unfall gesehen? Erzählen Sie bitte der Reihe nach, was passiert ist.",
    "hinweis": "Chronologisch und nur das, was du wirklich gesehen hast. Ort und Richtung genau beschreiben.",
    "beispiel": "Ja. Ich stand an der Haltestelle. Der silberne Kombi kam aus der Goethestraße und wollte nach links abbiegen. Der rote Kleinwagen kam ihm entgegen und fuhr geradeaus. Dann hat es gekracht.",
    "redemittel": [
     "Ich stand …",
     "… kam aus … und wollte …",
     "Dann hat es gekracht."
    ]
   },
   {
    "amanda": "Welche Farbe hatte die Ampel für den roten Wagen?",
    "hinweis": "Genau trennen: Was hast du gesehen, was vermutest du? Das ist bei einer Aussage das Wichtigste.",
    "beispiel": "Das kann ich nicht mit Sicherheit sagen. Ich habe erst hingeschaut, als ich das Hupen gehört habe. Für den Kombi war es auf jeden Fall noch grün, das habe ich gesehen.",
    "redemittel": [
     "Das kann ich nicht mit Sicherheit sagen.",
     "Ich habe erst hingeschaut, als …",
     "Auf jeden Fall …, das habe ich gesehen."
    ]
   },
   {
    "amanda": "Der Fahrer vom Kombi sagt, der Kleinwagen sei viel zu schnell gewesen. Würden Sie das bestätigen?",
    "hinweis": "Nicht übernehmen, was andere sagen. Deine eigene Einschätzung geben, mit einer vorsichtigen Formulierung.",
    "beispiel": "Bestätigen kann ich das nicht. Er kam mir nicht auffällig schnell vor, aber Geschwindigkeiten kann ich schlecht schätzen. Das möchte ich nicht behaupten.",
    "redemittel": [
     "Bestätigen kann ich das nicht.",
     "Er kam mir nicht auffällig … vor.",
     "Das möchte ich nicht behaupten."
    ]
   },
   {
    "amanda": "Verstehe. Ist Ihnen sonst noch etwas aufgefallen?",
    "hinweis": "Ein Detail nennen, das wichtig sein kann — wieder klar als Beobachtung.",
    "beispiel": "Ja, der Fahrer vom Kombi hatte das Handy in der Hand, als er ausgestiegen ist. Ob er es auch vorher beim Fahren benutzt hat, habe ich nicht gesehen.",
    "redemittel": [
     "Ja, mir ist aufgefallen, dass …",
     "Ob …, habe ich nicht gesehen.",
     "Das kann ich nur so sagen."
    ]
   },
   {
    "amanda": "Danke. Ich brauche noch Ihre Personalien. Eventuell meldet sich später jemand von der Versicherung.",
    "hinweis": "Kooperativ abschließen und fragen, ob du deine Aussage noch einmal lesen kannst.",
    "beispiel": "Natürlich. Kann ich die Aussage nachher noch einmal durchlesen, bevor ich unterschreibe? Ich möchte sicher sein, dass alles genau so drinsteht.",
    "redemittel": [
     "Natürlich.",
     "Kann ich die Aussage noch einmal durchlesen?",
     "bevor ich unterschreibe"
    ]
   }
  ]
 },
 {
  "id": "c1-mieterhoehung-verhandeln",
  "modus": "alltag",
  "em": "🏠",
  "kat": "wohnen",
  "titel": "Mieterhöhung um 25 Prozent — du rufst die Vermieterin an",
  "lvl": "C1",
  "dauer": "6 Min",
  "ort": "Ein Brief: Deine Miete soll von 800 auf 1.000 Euro steigen. Du wohnst seit drei Jahren dort, die letzte Erhöhung ist zwei Jahre her. Du rufst die Vermieterin an.",
  "schritte": [
   {
    "amanda": "Ah, Sie haben den Brief bekommen. Ja, die Preise sind ja überall gestiegen, das verstehen Sie sicher.",
    "hinweis": "Höflich beginnen, aber gleich sagen, dass du nicht einverstanden bist. Noch keine Paragrafen.",
    "beispiel": "Ja, ich habe den Brief bekommen, und ich verstehe, dass alles teurer wird. Aber fünfundzwanzig Prozent auf einmal — da kann ich so nicht zustimmen.",
    "redemittel": [
     "Ich verstehe, dass …",
     "Aber … auf einmal — da kann ich so nicht zustimmen.",
     "Das ist für mich eine große Summe."
    ]
   },
   {
    "amanda": "Na ja, vergleichbare Wohnungen hier kosten inzwischen locker tausend.",
    "klartext": "Ähnliche Wohnungen hier kosten inzwischen leicht tausend Euro.",
    "hinweis": "Mit Fakten antworten. Es gibt eine Grenze, wie stark die Miete in drei Jahren steigen darf — das ist die Kappungsgrenze.",
    "beispiel": "Mag sein. Aber soweit ich weiß, darf die Miete in drei Jahren höchstens um zwanzig Prozent steigen, in vielen Städten sogar nur um fünfzehn. Und die letzte Erhöhung war vor zwei Jahren.",
    "redemittel": [
     "Mag sein. Aber soweit ich weiß, …",
     "höchstens um … Prozent in drei Jahren",
     "Und die letzte Erhöhung war …"
    ]
   },
   {
    "amanda": "Das müsste ich prüfen. Mein Steuerberater hat mir das so ausgerechnet.",
    "hinweis": "Ihr Raum lassen, das zu prüfen, ohne sie bloßzustellen. Und nach der Begründung fragen.",
    "beispiel": "Das ist gut, prüfen Sie das gern noch einmal. Ich hätte dann auch gern die Begründung schriftlich — zum Beispiel, auf welchen Mietspiegel Sie sich beziehen.",
    "redemittel": [
     "Prüfen Sie das gern noch einmal.",
     "Ich hätte auch gern die Begründung schriftlich.",
     "auf welchen Mietspiegel Sie sich beziehen"
    ]
   },
   {
    "amanda": "Hm. Sie sind ja eigentlich ein sehr angenehmer Mieter. Ich will da keinen Streit.",
    "hinweis": "Die Gelegenheit nutzen: Kooperation zeigen und einen Kompromiss anbieten, der für dich tragbar ist.",
    "beispiel": "Das geht mir genauso, ich wohne sehr gern hier. Eine moderate Erhöhung im Rahmen des Mietspiegels würde ich akzeptieren. Vielleicht schicken Sie mir einfach ein neues Schreiben, das wir beide gut vertreten können.",
    "redemittel": [
     "Das geht mir genauso.",
     "Eine moderate Erhöhung im Rahmen … würde ich akzeptieren.",
     "ein Schreiben, das wir beide gut vertreten können"
    ]
   },
   {
    "amanda": "Gut, ich spreche noch mal mit meinem Steuerberater und schicke Ihnen was Neues.",
    "hinweis": "Freundlich abschließen. Sag, dass du bis zum neuen Schreiben nichts unterschreibst.",
    "beispiel": "Sehr gern, danke. Dann warte ich auf das neue Schreiben und unterschreibe das alte erst mal nicht. Schönen Tag noch.",
    "redemittel": [
     "Dann warte ich auf …",
     "… unterschreibe ich erst mal nicht.",
     "Schönen Tag noch."
    ]
   }
  ]
 },
 {
  "id": "c1-finanzamt-rueckfrage",
  "modus": "alltag",
  "em": "📑",
  "kat": "amt",
  "titel": "Das Finanzamt will dein Homeoffice nicht anerkennen",
  "lvl": "C1",
  "dauer": "5 Min",
  "ort": "Ein Sachbearbeiter vom Finanzamt ruft an. In deiner Steuererklärung hast du an 180 Tagen Homeoffice angegeben. Er hat Zweifel.",
  "schritte": [
   {
    "amanda": "Sie haben hundertachtzig Tage Homeoffice angegeben. Das ist ziemlich viel. Können Sie das belegen?",
    "hinweis": "Ruhig und sachlich. Sag, dass die Angabe stimmt, und biete Nachweise an.",
    "beispiel": "Ja, das stimmt so. Ich arbeite seit letztem Jahr drei Tage pro Woche von zu Hause. Das kann ich gern belegen.",
    "redemittel": [
     "Ja, das stimmt so.",
     "Ich arbeite seit … von zu Hause.",
     "Das kann ich gern belegen."
    ]
   },
   {
    "amanda": "Und womit? Eine Bescheinigung vom Arbeitgeber liegt uns nicht vor.",
    "hinweis": "Konkrete Nachweise nennen und anbieten, sie nachzureichen.",
    "beispiel": "Mein Arbeitgeber kann mir eine Bescheinigung ausstellen, dass Homeoffice vereinbart ist. Außerdem habe ich einen Kalender, in dem jeder Bürotag eingetragen ist. Beides reiche ich gern nach.",
    "redemittel": [
     "Mein Arbeitgeber kann mir … ausstellen.",
     "Außerdem habe ich …",
     "Beides reiche ich gern nach."
    ]
   },
   {
    "amanda": "Gut. Dann würde ich die Bearbeitung erst mal zurückstellen. Wie lange brauchen Sie?",
    "hinweis": "Eine realistische Frist nennen — lieber etwas mehr Zeit, aber verbindlich.",
    "beispiel": "Die Bescheinigung dauert vielleicht eine Woche. Wäre es in Ordnung, wenn ich Ihnen alles bis Ende des Monats schicke?",
    "redemittel": [
     "… dauert vielleicht …",
     "Wäre es in Ordnung, wenn ich …?",
     "bis Ende des Monats"
    ]
   },
   {
    "amanda": "Das passt. Schicken Sie es über Ihr Elster-Konto, mit Bezug auf Ihre Steuernummer.",
    "hinweis": "Zusammenfassen, damit nichts schiefgeht, und dich bedanken.",
    "beispiel": "Alles klar: Bescheinigung und Kalender bis Monatsende über Elster, mit meiner Steuernummer. Danke, dass Sie angerufen haben, statt gleich einen Bescheid zu schicken.",
    "redemittel": [
     "Alles klar: …",
     "über Elster, mit meiner Steuernummer",
     "Danke, dass Sie angerufen haben."
    ]
   }
  ]
 },
 {
  "id": "c1-stressinterview-deutsch",
  "modus": "business",
  "em": "💼",
  "kat": "bewerbung",
  "titel": "Vorstellungsgespräch: „Ihr Deutsch ist ja nicht perfekt …“",
  "lvl": "C1",
  "dauer": "5 Min",
  "ort": "Zweites Vorstellungsgespräch für eine Stelle im Vertrieb. Der Abteilungsleiter wird plötzlich kritisch.",
  "schritte": [
   {
    "amanda": "Ganz ehrlich: Ihr Lebenslauf ist gut. Aber Ihr Deutsch ist ja nicht perfekt. Sie müssten jeden Tag mit Kunden telefonieren.",
    "hinweis": "Nicht verteidigen und nicht entschuldigen. Den Punkt ruhig annehmen und zeigen, warum er kein Problem ist.",
    "beispiel": "Das stimmt, perfekt ist es nicht — und trotzdem führen wir dieses Gespräch gerade ohne Probleme. In meiner letzten Stelle habe ich täglich auf Deutsch mit Kunden telefoniert.",
    "redemittel": [
     "Das stimmt, perfekt ist es nicht.",
     "Und trotzdem …",
     "In meiner letzten Stelle habe ich täglich …"
    ]
   },
   {
    "amanda": "Und wenn ein Kunde Sie mal nicht versteht? Das wirkt dann ja auch auf unsere Firma.",
    "hinweis": "Eine Strategie zeigen, statt Versprechen zu machen. Und deinen Vorteil nennen.",
    "beispiel": "Dann frage ich nach und fasse zusammen, was ich verstanden habe — das machen gute Verkäufer sowieso. Und ich spreche außerdem fließend Polnisch und Russisch. Für Ihre Kunden in Osteuropa ist das ein Vorteil.",
    "redemittel": [
     "Dann frage ich nach und fasse zusammen.",
     "Das machen gute … sowieso.",
     "Für … ist das ein Vorteil."
    ]
   },
   {
    "amanda": "Hm. Und schriftlich? Angebote, E-Mails?",
    "hinweis": "Ehrlich sein und zeigen, dass du dich kennst und eine Lösung hast.",
    "beispiel": "Schriftlich bin ich etwas langsamer als mündlich, das gebe ich zu. Wichtige Angebote lasse ich deshalb gegenlesen oder nutze Vorlagen. Bisher gab es dadurch keine einzige Beschwerde.",
    "redemittel": [
     "Schriftlich bin ich etwas langsamer, das gebe ich zu.",
     "… lasse ich deshalb gegenlesen.",
     "Bisher gab es dadurch keine …"
    ]
   },
   {
    "amanda": "Gut. Haben Sie noch Fragen an uns?",
    "hinweis": "Den Spieß umdrehen: eine kluge Frage stellen, die zeigt, dass du schon an die Arbeit denkst.",
    "beispiel": "Ja, eine. Welche Kunden würde ich in den ersten drei Monaten betreuen, und wie würde die Einarbeitung aussehen?",
    "redemittel": [
     "Ja, eine.",
     "Welche … würde ich in den ersten … Monaten …?",
     "Wie würde die Einarbeitung aussehen?"
    ]
   }
  ]
 },
 {
  "id": "c1-grosskunde-droht",
  "modus": "business",
  "em": "🤝",
  "kat": "kunden",
  "titel": "Der wichtigste Kunde droht zu kündigen",
  "lvl": "C1",
  "dauer": "6 Min",
  "ort": "Du betreust einen Großkunden. Drei Lieferungen kamen zu spät. Der Einkaufsleiter ruft an und ist kurz davor, den Vertrag zu kündigen.",
  "schritte": [
   {
    "amanda": "Ich mach's kurz: Drei Mal zu spät in zwei Monaten. Ich hab ein Angebot von Ihrer Konkurrenz auf dem Tisch.",
    "klartext": "Ich sage es kurz: Sie haben in zwei Monaten dreimal zu spät geliefert. Ich habe ein Angebot von Ihrer Konkurrenz.",
    "hinweis": "Nicht abwiegeln, nicht entschuldigen ohne Ende. Die Verspätungen ohne Wenn und Aber anerkennen.",
    "beispiel": "Das ist berechtigt, und ich will gar nichts schönreden. Drei verspätete Lieferungen sind nicht das, was Sie von uns erwarten können.",
    "redemittel": [
     "Das ist berechtigt.",
     "Ich will gar nichts schönreden.",
     "… ist nicht das, was Sie von uns erwarten können."
    ]
   },
   {
    "amanda": "Und? Was ändert sich jetzt? Ich hab keine Lust, mir das noch zwei Monate anzuschauen.",
    "klartext": "Was ändert sich jetzt? Ich möchte das nicht noch zwei Monate erleben.",
    "hinweis": "Ursache in einem Satz, dann konkrete Maßnahmen. Keine Ausreden, keine langen Erklärungen.",
    "beispiel": "Die Ursache war ein Engpass bei unserem Spediteur. Ab sofort liefern wir Ihre Ware über einen zweiten Spediteur, und ich bekomme jeden Morgen einen Statusbericht zu Ihren Aufträgen.",
    "redemittel": [
     "Die Ursache war …",
     "Ab sofort …",
     "und ich bekomme jeden Morgen …"
    ]
   },
   {
    "amanda": "Schöne Worte. Das hab ich schon mal gehört.",
    "klartext": "Das klingt gut, aber das wurde mir schon einmal versprochen.",
    "hinweis": "Misstrauen ernst nehmen und Verbindlichkeit anbieten, die etwas kostet.",
    "beispiel": "Verstehe ich. Deshalb mein Vorschlag: Wenn die nächsten drei Monate eine Lieferung zu spät kommt, bekommen Sie auf diese Lieferung fünf Prozent Nachlass. Das schreibe ich Ihnen heute noch schriftlich.",
    "redemittel": [
     "Verstehe ich. Deshalb mein Vorschlag: …",
     "Wenn …, bekommen Sie …",
     "Das schreibe ich Ihnen heute noch schriftlich."
    ]
   },
   {
    "amanda": "Hm. Fünf Prozent. Und Sie sind persönlich mein Ansprechpartner, nicht irgendein Callcenter.",
    "hinweis": "Zusagen und verbindlich abschließen. Kurz und klar.",
    "beispiel": "Selbstverständlich. Sie erreichen mich direkt, auch mobil. Ich schicke Ihnen die Vereinbarung bis heute Abend, und nächste Woche rufe ich Sie an, wie es läuft.",
    "redemittel": [
     "Selbstverständlich.",
     "Sie erreichen mich direkt.",
     "Nächste Woche rufe ich Sie an, wie es läuft."
    ]
   }
  ]
 },
 {
  "id": "c1-gebrauchtwagen-maengel",
  "modus": "alltag",
  "em": "🚗",
  "kat": "einkaufen",
  "titel": "Gebrauchtwagen kaufen: Mängel finden, Preis drücken",
  "lvl": "C1",
  "dauer": "5 Min",
  "ort": "Du schaust dir einen gebrauchten Kombi bei einem privaten Verkäufer an. Er will 9.500 Euro. Bei der Probefahrt fallen dir ein paar Dinge auf.",
  "schritte": [
   {
    "amanda": "Na, und? Der fährt doch super, oder? Für das Geld kriegen Sie nix Besseres.",
    "klartext": "Er fährt doch sehr gut, oder? Für diesen Preis bekommen Sie nichts Besseres.",
    "hinweis": "Positiv anfangen, aber nicht begeistert wirken — Begeisterung kostet Geld. Dann die Mängel ruhig nennen.",
    "beispiel": "Er fährt ordentlich, ja. Mir sind aber ein paar Dinge aufgefallen: Beim Bremsen zieht er leicht nach rechts, und die Reifen sind ziemlich abgefahren.",
    "redemittel": [
     "Er fährt ordentlich, ja.",
     "Mir sind aber ein paar Dinge aufgefallen: …",
     "Beim … zieht er leicht nach …"
    ]
   },
   {
    "amanda": "Ach, die Reifen. Die sind halt Sommerreifen, das ist ganz normal.",
    "klartext": "Das sind Sommerreifen, das ist ganz normal.",
    "hinweis": "Nicht ablenken lassen. Konkret werden: was es kostet.",
    "beispiel": "Normal oder nicht — sie müssen vor dem Winter neu, das sind schnell sechshundert Euro. Und das mit der Bremse müsste eine Werkstatt anschauen.",
    "redemittel": [
     "Normal oder nicht — …",
     "Das sind schnell … Euro.",
     "Das müsste eine Werkstatt anschauen."
    ]
   },
   {
    "amanda": "Also, unter neuntausend geh ich nicht. Ich hab noch zwei andere Interessenten.",
    "hinweis": "Ruhig bleiben, ein begründetes Angebot machen und zeigen, dass du auch gehen kannst.",
    "beispiel": "Das ist Ihr gutes Recht. Mein Angebot wäre achttausendvierhundert — das ist der Preis minus Reifen und Bremse. Wenn das nicht passt, ist das auch in Ordnung.",
    "redemittel": [
     "Das ist Ihr gutes Recht.",
     "Mein Angebot wäre … — das ist …",
     "Wenn das nicht passt, ist das auch in Ordnung."
    ]
   },
   {
    "amanda": "Achttausendsiebenhundert, und wir sind uns einig.",
    "hinweis": "Einen fairen Abschluss finden und sofort die wichtigsten Punkte für den Vertrag nennen.",
    "beispiel": "Achttausendsechshundert, und Sie geben mir alle Rechnungen und das Serviceheft mit. Dann machen wir einen schriftlichen Kaufvertrag.",
    "redemittel": [
     "…, und Sie geben mir … mit.",
     "das Serviceheft",
     "Dann machen wir einen schriftlichen Kaufvertrag."
    ]
   }
  ]
 },
 {
  "id": "c1-schwiegervater-erziehung",
  "modus": "alltag",
  "em": "👨‍👧",
  "kat": "familie",
  "titel": "Der Schwiegervater kritisiert eure Erziehung — vor dem Kind",
  "lvl": "C1",
  "dauer": "5 Min",
  "ort": "Sonntagsessen. Eure Tochter, sieben, will den Nachtisch nicht. Dein Schwiegervater sagt laut, dass ihr viel zu weich seid.",
  "schritte": [
   {
    "amanda": "Also, zu meiner Zeit hätte es das nicht gegeben. Ihr lasst der Kleinen ja alles durchgehen.",
    "klartext": "Früher hätte es das nicht gegeben. Ihr erlaubt dem Kind alles.",
    "hinweis": "Nicht vor dem Kind streiten. Ruhig reagieren und das Gespräch auf später verschieben.",
    "beispiel": "Ich merke, dass dich das beschäftigt. Lass uns da gern nachher in Ruhe drüber reden — nicht jetzt am Tisch.",
    "redemittel": [
     "Ich merke, dass dich das beschäftigt.",
     "Lass uns nachher in Ruhe darüber reden.",
     "nicht jetzt am Tisch"
    ]
   },
   {
    "amanda": "Warum denn nicht jetzt? Die Kleine kann ruhig hören, dass man nicht immer seinen Willen kriegt.",
    "hinweis": "Freundlich, aber klar eine Grenze ziehen. Begründe mit dem Kind, nicht mit deinem Ärger.",
    "beispiel": "Weil sie gerade sieht, wie Erwachsene über sie reden. Das möchte ich nicht. Das ist keine Kritik an dir — es geht mir nur um sie.",
    "redemittel": [
     "Weil …",
     "Das möchte ich nicht.",
     "Das ist keine Kritik an dir — es geht mir nur um …"
    ]
   },
   {
    "amanda": "Ich hab's doch nur gut gemeint. Ich hab ja auch drei Kinder großgezogen.",
    "klartext": "Ich wollte nur helfen. Ich habe auch drei Kinder großgezogen.",
    "hinweis": "Später in der Küche, unter vier Augen. Seine Erfahrung anerkennen. Dann erklären, wie ihr es macht und warum.",
    "beispiel": "Das weiß ich, und das sieht man ja auch. Wir machen es nur ein bisschen anders: Beim Essen zwingen wir sie nicht, dafür gibt es keine Süßigkeiten zwischendurch. Das funktioniert für uns gut.",
    "redemittel": [
     "Das weiß ich, und das sieht man ja auch.",
     "Wir machen es nur ein bisschen anders: …",
     "Das funktioniert für uns gut."
    ]
   },
   {
    "amanda": "Na gut. Ihr müsst's ja wissen.",
    "klartext": "Na gut. Es ist eure Entscheidung.",
    "hinweis": "Das Gespräch versöhnlich beenden und ihm eine Rolle geben, in der er gut ist.",
    "beispiel": "Danke, dass du es akzeptierst. Und ehrlich: Sie liebt es, mit dir im Garten zu arbeiten. Da lernt sie mehr Geduld als bei jedem Nachtisch.",
    "redemittel": [
     "Danke, dass du es akzeptierst.",
     "Und ehrlich: …",
     "Da lernt sie mehr … als …"
    ]
   }
  ]
 },
 {
  "id": "b2-vhs-kurs-wechseln",
  "modus": "alltag",
  "em": "📚",
  "kat": "bildung",
  "titel": "Der Deutschkurs ist zu leicht — du willst wechseln",
  "lvl": "B2",
  "dauer": "4 Min",
  "ort": "Du machst einen Deutschkurs an der Volkshochschule. Nach drei Wochen merkst du: Der Kurs ist zu leicht. Du sprichst nach dem Unterricht mit der Kursleiterin.",
  "schritte": [
   {
    "amanda": "Ja? Haben Sie eine Frage zu den Hausaufgaben?",
    "hinweis": "Freundlich anfangen und dein Anliegen höflich sagen, ohne den Kurs schlechtzumachen.",
    "beispiel": "Nein, es geht um etwas anderes. Mir gefällt Ihr Unterricht sehr gut. Aber ich habe das Gefühl, dass der Kurs für mich ein bisschen zu leicht ist.",
    "redemittel": [
     "Es geht um etwas anderes.",
     "Mir gefällt Ihr Unterricht sehr gut.",
     "Ich habe das Gefühl, dass …"
    ]
   },
   {
    "amanda": "Ah, wirklich? Woran merken Sie das?",
    "hinweis": "Konkrete Beispiele geben. So kann sie dich besser einschätzen.",
    "beispiel": "Die meisten Grammatikthemen kenne ich schon, und ich bin bei den Übungen immer als Erste fertig. Was mir fehlt, ist mehr Sprechen über schwierige Themen.",
    "redemittel": [
     "Die meisten … kenne ich schon.",
     "Ich bin bei den Übungen immer als Erste fertig.",
     "Was mir fehlt, ist …"
    ]
   },
   {
    "amanda": "Das stimmt, Sie sind wirklich weit. Es gibt einen B2-Kurs am Dienstagabend. Aber der hat schon vor einem Monat angefangen.",
    "hinweis": "Zeigen, dass du dir das zutraust, und fragen, wie ein Wechsel praktisch geht.",
    "beispiel": "Das traue ich mir zu, den Stoff vom ersten Monat kann ich nachholen. Wie läuft so ein Wechsel? Muss ich mich neu anmelden?",
    "redemittel": [
     "Das traue ich mir zu.",
     "… kann ich nachholen.",
     "Wie läuft so ein Wechsel?"
    ]
   },
   {
    "amanda": "Ich spreche mit der Kollegin. Kommen Sie doch nächsten Dienstag einfach mal zum Schnuppern.",
    "klartext": "Kommen Sie nächsten Dienstag zum Probieren in den Kurs.",
    "hinweis": "Dich bedanken und fragen, was mit dem Geld für deinen jetzigen Kurs passiert.",
    "beispiel": "Sehr gern, vielen Dank. Und noch eine Frage: Was passiert mit der Kursgebühr, die ich schon bezahlt habe?",
    "redemittel": [
     "Sehr gern, vielen Dank.",
     "Noch eine Frage: …",
     "Was passiert mit der Kursgebühr?"
    ]
   }
  ]
 }
  ];

  var da = {};
  window.DIALOGE.forEach(function (d) { da[d.id] = 1; });
  NEU.forEach(function (d) { if (!da[d.id]) window.DIALOGE.push(d); });
})();
