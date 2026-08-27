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
  ];

  var da = {};
  window.DIALOGE.forEach(function (d) { da[d.id] = 1; });
  NEU.forEach(function (d) { if (!da[d.id]) window.DIALOGE.push(d); });
})();
