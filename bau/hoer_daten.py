# -*- coding: utf-8 -*-
"""Daten fuer hoeren-b2c1-plus.js.

Von Hand stehen hier: die Woerter und die Hoertexte. Die sechzehn
Wortfragen pro Thema erzeugt mach-hoeren.py daraus — gleiche Form
wie in hoeren-b2-neu.js, nur ohne die Gefahr, dass Wort und
Erklaerung auseinanderlaufen.
"""

THEMEN = [

# ====================================================== B2
{
 "id": "b2-arzt-befund", "level": "B2", "emoji": "🎧",
 "title": "Beim Facharzt: Befund, Überweisung, Krankschreibung",
 "words": [
  ("der Befund", "das Ergebnis einer Untersuchung", "📋"),
  ("die Überweisung", "der Zettel vom Hausarzt zum Facharzt", "➡️"),
  ("die Krankschreibung", "die Bescheinigung, dass man nicht arbeiten kann", "🛏️"),
  ("die Vorsorge", "eine Untersuchung, bevor etwas weh tut", "🛡️"),
  ("unauffällig", "ohne Hinweis auf eine Krankheit", "✅"),
  ("die Kontrolle", "ein zweiter Termin, um nachzusehen", "🔁"),
  ("die Nebenwirkung", "was ein Medikament außerdem bewirkt", "⚠️"),
  ("absetzen", "ein Medikament nicht mehr nehmen", "🛑"),
  ("die Dosis", "wie viel man von einem Medikament nimmt", "💊"),
  ("nüchtern", "ohne vorher gegessen zu haben", "🚫🍽️"),
  ("die Rücksprache", "noch einmal mit jemandem reden, bevor man entscheidet", "💬"),
  ("die Praxis", "der Ort, an dem eine Ärztin arbeitet", "🏥"),
  ("die Zuzahlung", "der Teil, den man selbst bezahlt", "💶"),
  ("der Verdacht", "die Vermutung, dass etwas vorliegt", "🤔"),
  ("die Beschwerden", "was einem weh tut oder fehlt", "😣"),
  ("sich schonen", "sich nicht anstrengen", "🪶"),
 ],
 "listen": [
  ("📞 Anruf aus der Praxis",
   "Guten Tag, Frau Nowak, hier ist die Praxis Dr. Heller. Ich rufe wegen Ihrer Blutwerte an. "
   "Der Befund ist insgesamt unauffällig, da müssen Sie sich keine Sorgen machen. Ein Wert liegt "
   "ganz leicht über der Norm, das ist aber nichts, was wir jetzt behandeln müssten. Frau Doktor "
   "würde das in drei Monaten noch einmal kontrollieren. Sie brauchen dafür keine neue Überweisung, "
   "rufen Sie einfach an und sagen Sie, es geht um die Kontrolle. Und kommen Sie bitte wieder "
   "nüchtern, also morgens und ohne Frühstück.",
   "Was soll Frau Nowak tun?",
   ["In drei Monaten zur Kontrolle kommen, nüchtern und ohne neue Überweisung.",
    "Sofort in die Praxis kommen, weil ein Wert zu hoch ist.",
    "Sich eine neue Überweisung vom Hausarzt holen.",
    "Mit der Behandlung des erhöhten Wertes beginnen."], 0),

  ("🗣️ Im Sprechzimmer",
   "Also, ich habe mir das angesehen. Der Verdacht aus der Überweisung hat sich nicht bestätigt — "
   "das ist die gute Nachricht. Trotzdem erklären die Beschwerden sich noch nicht ganz. Ich würde "
   "vorschlagen, dass Sie das Medikament zunächst weiternehmen, aber mit halber Dosis. Setzen Sie "
   "es bitte nicht einfach ab, das hat beim letzten Mal zu Problemen geführt. Wenn es in zwei Wochen "
   "nicht besser ist, halten Sie noch einmal Rücksprache mit mir, bevor wir etwas anderes versuchen.",
   "Was sagt die Ärztin über das Medikament?",
   ["Es soll weitergenommen werden, aber nur noch mit der halben Dosis.",
    "Es soll sofort abgesetzt werden.",
    "Die Dosis soll verdoppelt werden.",
    "Es soll durch ein anderes Medikament ersetzt werden."], 0),

  ("💬 Am Empfang",
   "Die Krankschreibung habe ich Ihnen fertig gemacht, die gilt bis einschließlich Freitag. An Ihren "
   "Arbeitgeber geht nichts von uns aus, das läuft heute elektronisch über die Krankenkasse — Sie "
   "müssen Ihrem Betrieb aber trotzdem selbst Bescheid sagen, dass Sie krank sind. Für das Rezept "
   "fällt eine Zuzahlung an, die zahlen Sie direkt in der Apotheke, nicht bei uns. Und wenn es "
   "Montag noch nicht besser ist, rufen Sie bitte vor zehn an, dann bekommen Sie noch einen Termin.",
   "Was muss der Patient selbst erledigen?",
   ["Seinem Betrieb sagen, dass er krank ist.",
    "Die Krankschreibung an den Arbeitgeber schicken.",
    "Die Zuzahlung in der Praxis bezahlen.",
    "Die Krankenkasse über die Krankschreibung informieren."], 0),

  ("📻 In der Apotheke",
   "Das nehmen Sie bitte einmal täglich, am besten morgens zum Essen. Nicht auf nüchternen Magen, "
   "davon wird manchen übel — das ist die häufigste Nebenwirkung, und sie verschwindet meistens nach "
   "ein paar Tagen. Was Sie nicht machen sollten: das Mittel absetzen, sobald es Ihnen besser geht. "
   "Die Packung wird zu Ende genommen, auch wenn Sie nach drei Tagen schon nichts mehr spüren. "
   "Und Alkohol lassen Sie in der Zeit bitte weg.",
   "Welchen Fehler soll der Kunde vermeiden?",
   ["Das Medikament absetzen, sobald er sich besser fühlt.",
    "Das Medikament zum Essen einnehmen.",
    "Die Packung ganz aufbrauchen.",
    "Morgens statt abends einnehmen."], 0),
 ]},

{
 "id": "b2-bank-geld", "level": "B2", "emoji": "🎧",
 "title": "Bank und Geld: Konto, Dispo, Gebühren",
 "words": [
  ("der Dispo", "wie weit man das Konto überziehen darf", "📉"),
  ("überziehen", "mehr ausgeben, als auf dem Konto ist", "⬇️"),
  ("der Dauerauftrag", "eine Zahlung, die jeden Monat von allein läuft", "🔁"),
  ("die Lastschrift", "jemand darf das Geld selbst abbuchen", "🧾"),
  ("die Gebühr", "was die Bank für eine Leistung verlangt", "💶"),
  ("der Zinssatz", "wie teuer geliehenes Geld ist, in Prozent", "📈"),
  ("die Rate", "der Betrag, den man jeden Monat zurückzahlt", "📆"),
  ("die Laufzeit", "wie lange ein Vertrag oder Kredit läuft", "⏳"),
  ("der Kontoauszug", "die Liste aller Bewegungen auf dem Konto", "📄"),
  ("die Bonität", "wie zahlungsfähig jemand aus Sicht der Bank ist", "⭐"),
  ("widerrufen", "einen Vertrag nachträglich rückgängig machen", "↩️"),
  ("die Frist", "die Zeit, bis zu der etwas geschehen muss", "⏰"),
  ("das Entgelt", "das Wort der Bank für Gebühr", "🏷️"),
  ("die Rücklastschrift", "eine Abbuchung, die nicht geklappt hat", "❌"),
  ("der Freistellungsauftrag", "damit auf Zinsen bis zu einer Grenze keine Steuer anfällt", "📝"),
  ("aufstocken", "einen Betrag oder Rahmen größer machen", "⬆️"),
 ],
 "listen": [
  ("📞 Rückruf von der Bank",
   "Guten Tag, Herr Demir, Sie hatten wegen des Dispos angefragt. Ich habe mir das angesehen: Ihr "
   "Rahmen liegt derzeit bei zweitausend Euro, aufstocken können wir den auf dreitausend. Nur — "
   "und das sage ich Ihnen ganz offen — der Zinssatz liegt beim Dispo bei knapp zwölf Prozent. "
   "Wenn Sie das Geld länger als ein paar Wochen brauchen, ist ein Ratenkredit deutlich günstiger, "
   "da wären wir bei etwa sechs Prozent. Überlegen Sie es sich, und melden Sie sich einfach, wenn "
   "Sie das durchrechnen wollen.",
   "Was rät der Berater?",
   ["Bei längerem Bedarf einen Ratenkredit statt des Dispos zu nehmen.",
    "Den Dispo auf dreitausend Euro aufzustocken und so zu nutzen.",
    "Das Konto zu wechseln, weil die Gebühren zu hoch sind.",
    "Nichts zu tun, weil zwölf Prozent günstig sind."], 0),

  ("🗣️ Am Schalter",
   "Die Rücklastschrift kam, weil im Moment der Abbuchung nicht genug auf dem Konto war. Die Miete "
   "ging am Ersten raus, Ihr Gehalt kam aber erst am Dritten — das ist seit dem Jobwechsel so. "
   "Zwei Möglichkeiten: Entweder Sie sprechen mit dem Vermieter, ob die Abbuchung auf den Fünften "
   "gehen kann. Oder Sie lassen den Dispo als Puffer stehen. Ich würde Ihnen das Erste empfehlen, "
   "das kostet Sie nichts. Die Gebühr für die Rücklastschrift buche ich Ihnen einmalig zurück.",
   "Was empfiehlt die Beraterin?",
   ["Mit dem Vermieter über ein späteres Abbuchungsdatum zu sprechen.",
    "Den Dispo dauerhaft als Puffer zu nutzen.",
    "Den Arbeitgeber zu bitten, früher zu zahlen.",
    "Die Miete künftig selbst zu überweisen."], 0),

  ("💬 Nachricht auf der Mailbox",
   "Hallo Frau Krüger, hier ist Hoffmann von der Sparkasse. Es geht um Ihren Kreditantrag. Die "
   "Unterlagen sind vollständig, die Bonitätsprüfung ist durch, da gibt es keine Probleme. Was noch "
   "fehlt, sind die letzten drei Gehaltsnachweise — Sie hatten zwei geschickt. Wenn die bis "
   "Donnerstag da sind, bekommen Sie den Vertrag noch diese Woche. Denken Sie daran: Nach der "
   "Unterschrift haben Sie vierzehn Tage, in denen Sie widerrufen können, ohne einen Grund zu nennen.",
   "Was fehlt für den Kreditantrag noch?",
   ["Ein weiterer Gehaltsnachweis.",
    "Die Bonitätsprüfung.",
    "Die Unterschrift unter dem Vertrag.",
    "Der Widerruf der alten Vereinbarung."], 0),

  ("📻 Im Beratungsgespräch",
   "Beim Dauerauftrag bestimmen Sie: Sie sagen, wann wie viel an wen geht, und das läuft dann von "
   "allein. Bei der Lastschrift ist es umgekehrt — da holt sich der andere das Geld, und der Betrag "
   "kann jeden Monat anders sein. Deshalb ist die Lastschrift für Strom oder Handy üblich, der "
   "Dauerauftrag für die Miete. Und falls eine Lastschrift nicht stimmt: Sie können sie acht Wochen "
   "lang ohne Angabe von Gründen zurückholen.",
   "Worin unterscheiden sich Dauerauftrag und Lastschrift?",
   ["Beim Dauerauftrag bestimmt man selbst Betrag und Zeitpunkt, bei der Lastschrift der Empfänger.",
    "Der Dauerauftrag ist kostenlos, die Lastschrift kostet eine Gebühr.",
    "Die Lastschrift läuft nur einmal, der Dauerauftrag jeden Monat.",
    "Beim Dauerauftrag kann der Betrag jeden Monat anders sein."], 0),
 ]},

{
 "id": "b2-reise-stoerung", "level": "B2", "emoji": "🎧",
 "title": "Wenn die Reise schiefgeht: Verspätung, Umbuchung, Entschädigung",
 "words": [
  ("die Verspätung", "wenn etwas später kommt als geplant", "⏱️"),
  ("der Anschluss", "der nächste Zug oder Flug, den man erreichen muss", "🔗"),
  ("umbuchen", "auf eine andere Verbindung wechseln", "🔄"),
  ("die Entschädigung", "Geld als Ausgleich für einen Schaden", "💶"),
  ("der Ersatzverkehr", "Busse statt der ausgefallenen Bahn", "🚌"),
  ("die Durchsage", "was über Lautsprecher angesagt wird", "📢"),
  ("entfallen", "nicht stattfinden", "🚫"),
  ("die Fahrgastrechte", "was einem als Reisendem zusteht", "⚖️"),
  ("der Beleg", "ein Papier als Nachweis", "🧾"),
  ("erstatten", "Geld zurückzahlen", "↩️"),
  ("die Zugbindung", "die Pflicht, genau diesen Zug zu nehmen", "🎫"),
  ("aufheben", "hier: eine Regel nicht mehr gelten lassen", "🆓"),
  ("der Schalter", "die Stelle, an der man persönlich bedient wird", "🪟"),
  ("sich gedulden", "ruhig warten", "🧘"),
  ("die Weiterfahrt", "wie es nach dem Halt weitergeht", "➡️"),
  ("in Anspruch nehmen", "etwas nutzen, worauf man ein Recht hat", "✋"),
 ],
 "listen": [
  ("📢 Durchsage im Zug",
   "Sehr geehrte Fahrgäste, wir haben derzeit etwa fünfundzwanzig Minuten Verspätung. Grund ist eine "
   "Signalstörung bei Hannover. Für Reisende nach Bremen: Ihr Anschluss wartet nicht, der nächste "
   "Zug fährt stündlich. Die Zugbindung ist für alle Fahrkarten aufgehoben, Sie können also auch "
   "eine frühere oder spätere Verbindung nehmen, ohne umzubuchen. Ab sechzig Minuten Verspätung am "
   "Ziel haben Sie Anspruch auf eine Entschädigung; das Formular bekommen Sie beim Zugpersonal oder "
   "online.",
   "Was gilt für Reisende nach Bremen?",
   ["Sie müssen den nächsten Zug nehmen, der stündlich fährt.",
    "Ihr Anschlusszug wartet auf den verspäteten Zug.",
    "Sie müssen am Schalter umbuchen lassen.",
    "Sie bekommen auf jeden Fall eine Entschädigung."], 0),

  ("🗣️ Am Serviceschalter",
   "Also, Ihr Flug ist gestrichen, das sehe ich hier. Sie haben jetzt zwei Rechte, und die können "
   "Sie sich aussuchen: Entweder wir buchen Sie auf die nächste Maschine um, das wäre morgen früh "
   "um sieben, und Sie bekommen für heute Nacht ein Hotel. Oder Sie lassen sich den Flug komplett "
   "erstatten und reisen anders. Was ich Ihnen nicht sagen kann, ist, ob Sie zusätzlich Geld "
   "bekommen — das hängt davon ab, warum der Flug ausgefallen ist, und das klärt die Airline.",
   "Was kann der Reisende wählen?",
   ["Eine Umbuchung mit Hotel oder die Erstattung des Flugpreises.",
    "Eine Entschädigung in Höhe des Flugpreises.",
    "Ein Hotel und zusätzlich die volle Erstattung.",
    "Nur die Umbuchung auf den Flug am nächsten Morgen."], 0),

  ("📞 Beim Kundenservice",
   "Ich habe Ihren Antrag hier vorliegen. Die Verspätung ist bestätigt, einhundertzehn Minuten, "
   "damit stehen Ihnen fünfzig Prozent des Fahrpreises zu. Was ich noch brauche, ist die Fahrkarte "
   "selbst — ein Foto genügt. Den Beleg für das Taxi kann ich leider nicht anerkennen, Taxikosten "
   "werden nur ab Mitternacht erstattet, und Sie sind um halb elf angekommen. Sobald die Karte da "
   "ist, geht das Geld innerhalb von vier Wochen auf Ihr Konto.",
   "Warum wird der Taxibeleg nicht erstattet?",
   ["Weil der Reisende vor Mitternacht angekommen ist.",
    "Weil der Beleg nicht lesbar ist.",
    "Weil die Verspätung unter zwei Stunden lag.",
    "Weil Taxikosten grundsätzlich nie erstattet werden."], 0),

  ("📻 Ansage am Bahnsteig",
   "Achtung auf Gleis sieben: Der Regionalexpress nach Kassel entfällt heute. Zwischen Göttingen "
   "und Kassel fährt Ersatzverkehr mit Bussen, Abfahrt vor dem Hauptausgang, etwa alle dreißig "
   "Minuten. Bitte rechnen Sie mit einer längeren Fahrzeit von rund fünfundvierzig Minuten. "
   "Fahrräder können im Bus leider nicht mitgenommen werden. Reisende mit Sitzplatzreservierung "
   "wenden sich bitte an den Schalter in der Halle, dort wird die Reservierung erstattet.",
   "Was können Reisende mit Fahrrad nicht tun?",
   ["Den Ersatzbus nach Kassel benutzen.",
    "Die Reservierung erstatten lassen.",
    "Am Schalter in der Halle nachfragen.",
    "Alle dreißig Minuten abfahren."], 0),
 ]},

# ====================================================== C1
{
 "id": "c1-vortrag-folgen", "level": "C1", "emoji": "🎧",
 "title": "Dem Vortrag folgen: Gliederung, Exkurs, Rückbezug",
 "words": [
  ("die Gliederung", "wie ein Vortrag aufgebaut ist", "🗂️"),
  ("der Exkurs", "ein Abstecher weg vom eigentlichen Thema", "↪️"),
  ("der Rückbezug", "wenn jemand auf etwas Früheres zurückkommt", "🔙"),
  ("die These", "die Behauptung, die begründet werden soll", "🎯"),
  ("die Einschränkung", "ein Zusatz, der die Aussage schwächer macht", "⚖️"),
  ("vorwegnehmen", "etwas sagen, bevor es eigentlich dran ist", "⏩"),
  ("der Einwand", "ein Gegenargument", "✋"),
  ("entkräften", "ein Argument widerlegen", "💨"),
  ("der rote Faden", "die Linie, die sich durch das Ganze zieht", "🧵"),
  ("abschweifen", "vom Thema wegkommen", "🌀"),
  ("zusammenfassen", "das Wichtigste kurz wiederholen", "📌"),
  ("die Schlussfolgerung", "was sich aus dem Gesagten ergibt", "➡️"),
  ("untermauern", "mit Belegen stützen", "🧱"),
  ("die Randbemerkung", "eine Nebensache am Rande", "📎"),
  ("zurückkommen auf", "ein früheres Thema wieder aufgreifen", "🔁"),
  ("der Ausblick", "was danach noch kommt oder zu erwarten ist", "🔭"),
 ],
 "listen": [
  ("🎙️ Anfang eines Vortrags",
   "Bevor ich zum eigentlichen Thema komme, möchte ich eines vorwegnehmen, weil es erfahrungsgemäß "
   "sonst die ganze Diskussion bestimmt: Nein, ich halte die Maßnahme nicht für gescheitert. Was ich "
   "zeigen will, ist etwas anderes — nämlich dass die Zahlen, mit denen sie verteidigt wird, "
   "schlicht nicht das messen, was sie zu messen vorgeben. Ich gehe in drei Schritten vor: zuerst "
   "die Datenlage, dann zwei Einwände, die mir regelmäßig begegnen, und am Schluss ein kurzer "
   "Ausblick.",
   "Was macht der Redner am Anfang?",
   ["Er nimmt ein Missverständnis vorweg, das sonst die Diskussion bestimmen würde.",
    "Er erklärt, warum die Maßnahme gescheitert ist.",
    "Er fasst die Ergebnisse schon am Anfang zusammen.",
    "Er entkräftet den wichtigsten Einwand sofort."], 0),

  ("🎙️ Mitten im Vortrag",
   "An dieser Stelle ein kurzer Exkurs, der nicht direkt zum Thema gehört, aber das Bild vervoll"
   "ständigt: In Dänemark wurde dasselbe vor acht Jahren versucht, unter deutlich anderen Bedingungen "
   "allerdings, und ich warne davor, das eins zu eins zu übertragen. Ich sage das, weil die Zahl "
   "aus Kopenhagen in jeder zweiten Debatte auftaucht — meist ohne den Zusatz, dass dort die "
   "Ausgangslage eine völlig andere war. So, zurück zu unserem Punkt.",
   "Wie bewertet der Redner das dänische Beispiel?",
   ["Als nicht ohne Weiteres übertragbar, weil die Ausgangslage anders war.",
    "Als Beweis dafür, dass die Maßnahme funktioniert.",
    "Als unwichtig, weil es acht Jahre her ist.",
    "Als den stärksten Beleg für seine These."], 0),

  ("🎙️ Gegen Ende",
   "Ich komme damit auf den Einwand zurück, den ich am Anfang erwähnt und bewusst offengelassen "
   "habe: dass der Effekt sich auch durch den Konjunkturverlauf erklären ließe. Entkräften kann ich "
   "ihn nicht vollständig, und ich will das auch gar nicht behaupten. Was sich zeigen lässt, ist "
   "nur, dass der Effekt in den Regionen am stärksten ausfällt, in denen die Konjunktur am "
   "schwächsten war. Das spricht gegen die Erklärung, beweist aber nichts.",
   "Was sagt der Redner über den Einwand?",
   ["Er kann ihn nicht vollständig entkräften und sagt das offen.",
    "Er hat ihn am Anfang bereits widerlegt.",
    "Er hält ihn für die stärkste Erklärung.",
    "Er geht nicht weiter darauf ein."], 0),

  ("🎙️ Der Schluss",
   "Lassen Sie mich zusammenfassen, und ich halte mich kurz, weil die Zeit knapp ist. Erstens: Die "
   "Datenlage ist besser, als oft behauptet wird. Zweitens: Sie trägt die weitreichenden Schlüsse "
   "nicht, die daraus gezogen werden. Und drittens — das ist eher eine Randbemerkung, aber sie liegt "
   "mir am Herzen — wir sollten aufhören, jede Einschränkung als Schwäche zu lesen. Eine Studie, die "
   "ihre Grenzen nennt, ist die bessere Studie.",
   "Was ist der Randbemerkung des Redners wichtig?",
   ["Dass Einschränkungen in einer Studie kein Zeichen von Schwäche sind.",
    "Dass die Zeit für den Vortrag zu knapp war.",
    "Dass die Datenlage schlechter ist als behauptet.",
    "Dass weitreichende Schlüsse nötig sind."], 0),
 ]},

{
 "id": "c1-bewerbungsgespraech", "level": "C1", "emoji": "🎧",
 "title": "Im Vorstellungsgespräch: indirekte Fragen, Gehalt, Rückfragen",
 "words": [
  ("die Vorstellung", "hier: was man sich an Gehalt wünscht", "💭"),
  ("der Spielraum", "wie viel Verhandlung möglich ist", "↔️"),
  ("die Eingruppierung", "in welche Gehaltsstufe eine Stelle fällt", "📊"),
  ("die Probezeit", "die ersten Monate mit kurzer Kündigungsfrist", "⏳"),
  ("die Einarbeitung", "die Zeit, in der man die Arbeit lernt", "🧑‍🏫"),
  ("die Befristung", "wenn ein Vertrag ein Enddatum hat", "📅"),
  ("die Entwicklungsmöglichkeit", "die Aussicht, weiterzukommen", "📈"),
  ("die Schnittstelle", "die Stelle, an der zwei Bereiche zusammenarbeiten", "🔗"),
  ("belastbar", "auch unter Druck leistungsfähig", "💪"),
  ("die Lücke", "hier: eine Zeit ohne Beschäftigung im Lebenslauf", "🕳️"),
  ("hinterfragen", "kritisch nachfragen, ob etwas stimmt", "❓"),
  ("die Rückfrage", "die Frage, die man selbst stellt", "🙋"),
  ("nachvollziehbar", "so, dass man es verstehen und mitdenken kann", "🧩"),
  ("sich einbringen", "eigene Ideen und Arbeit beisteuern", "🤲"),
  ("die Zusage", "die verbindliche Antwort, dass man genommen wird", "✅"),
  ("in Aussicht stellen", "etwas für später versprechen, ohne es zuzusagen", "🔮"),
 ],
 "listen": [
  ("🗣️ Die Gehaltsfrage",
   "Dann kommen wir zu dem Punkt, um den sich ohnehin alle herumdrücken. Was ich Ihnen sagen kann: "
   "Die Stelle ist bei uns in der Gruppe E11 eingruppiert, da ist die Spanne vorgegeben, großen "
   "Spielraum habe ich nicht. Was ich beeinflussen kann, ist die Stufe innerhalb der Gruppe, und da "
   "zählt einschlägige Berufserfahrung. Bevor ich Ihnen eine Zahl nenne — welche Vorstellung haben "
   "Sie denn? Und sagen Sie ruhig eine Zahl, nicht eine Spanne; mit Spannen hört man am Ende immer "
   "nur die untere.",
   "Worauf hat der Personaler Einfluss?",
   ["Auf die Stufe innerhalb der vorgegebenen Entgeltgruppe.",
    "Auf die Entgeltgruppe selbst.",
    "Auf die Dauer der Probezeit.",
    "Auf gar nichts, die Zahl steht fest."], 0),

  ("🗣️ Die Frage nach der Lücke",
   "Mir ist aufgefallen, dass zwischen den beiden letzten Stationen gut ein Jahr liegt. Ich frage "
   "das nicht, um Sie in Verlegenheit zu bringen — es ist mir ehrlich gesagt gleich, ob Sie gereist "
   "sind, jemanden gepflegt haben oder gesucht haben. Was mich interessiert, ist etwas anderes: "
   "Würden Sie rückblickend sagen, dass Sie in dieser Zeit etwas gelernt haben, das Sie hier "
   "einbringen können? Wenn nicht, ist das auch eine Antwort.",
   "Was will die Personalerin wissen?",
   ["Ob die Bewerberin in dieser Zeit etwas gelernt hat, das hier nützt.",
    "Warum genau die Lücke entstanden ist.",
    "Ob die Bewerberin in dieser Zeit gearbeitet hat.",
    "Ob die Lücke im Lebenslauf richtig angegeben ist."], 0),

  ("🗣️ Die Rückfrage der Bewerberin",
   "Dann hätte ich noch zwei Rückfragen. Die erste betrifft die Einarbeitung: Sie haben vorhin "
   "gesagt, die Stelle sei neu geschaffen. Heißt das, es gibt niemanden, der die Aufgaben vorher "
   "gemacht hat — und wer entscheidet dann in den ersten Monaten, was Vorrang hat? Und die zweite: "
   "Sie haben Entwicklungsmöglichkeiten in Aussicht gestellt. Gibt es dafür einen festen Rahmen, "
   "oder hängt das am Ende vom Vorgesetzten ab?",
   "Was fragt die Bewerberin bei der zweiten Frage?",
   ["Ob die Entwicklungsmöglichkeiten geregelt sind oder von der Person des Vorgesetzten abhängen.",
    "Ob sie befördert wird, wenn die Probezeit vorbei ist.",
    "Wer die Stelle vorher gemacht hat.",
    "Wie lange die Einarbeitung dauert."], 0),

  ("📞 Der Anruf danach",
   "Frau Aydin, schön, dass ich Sie erreiche. Ich will nicht lange drum herumreden: Wir würden Sie "
   "gern nehmen. Eine förmliche Zusage schicke ich Ihnen heute schriftlich, das hier ist nur der "
   "Anruf vorweg. Zwei Dinge haben sich gegenüber dem Gespräch geändert, und ich sage sie Ihnen "
   "lieber jetzt: Der Starttermin würde sich um zwei Wochen nach hinten verschieben, und die Stelle "
   "ist zunächst auf zwei Jahre befristet, mit der klaren Absicht, sie zu entfristen. Wenn das für "
   "Sie ein Problem ist, sagen Sie es bitte offen.",
   "Was hat sich seit dem Gespräch geändert?",
   ["Der Starttermin und die Befristung der Stelle.",
    "Das Gehalt und der Starttermin.",
    "Die Probezeit und die Eingruppierung.",
    "Nichts, der Anruf bestätigt nur das Gespräch."], 0),
 ]},

{
 "id": "c1-telefonkonferenz", "level": "C1", "emoji": "🎧",
 "title": "Telefonkonferenz: schlechte Leitung, viele Stimmen",
 "words": [
  ("die Leitung", "die Verbindung beim Telefonieren", "📶"),
  ("stumm schalten", "das eigene Mikrofon ausschalten", "🔇"),
  ("aussetzen", "kurz ausfallen und wiederkommen", "〰️"),
  ("das Protokoll", "die schriftliche Mitschrift einer Sitzung", "📝"),
  ("die Tagesordnung", "die Liste der Punkte, die besprochen werden", "📋"),
  ("vertagen", "auf einen späteren Termin verschieben", "📆"),
  ("der Zwischenruf", "ein Einwurf, während jemand anders spricht", "💬"),
  ("sich melden", "zeigen, dass man etwas sagen möchte", "🙋"),
  ("die Abstimmung", "wenn alle sagen, wofür sie sind", "🗳️"),
  ("der Beschluss", "was am Ende verbindlich entschieden wurde", "⚖️"),
  ("federführend", "hauptverantwortlich für eine Sache", "✒️"),
  ("der Sachstand", "wie weit etwas gerade ist", "📍"),
  ("das Nachfassen", "später noch einmal nachhaken", "🔁"),
  ("der Umlauf", "etwas geht nacheinander an alle", "🔄"),
  ("in Vertretung", "anstelle von jemandem, der fehlt", "🪑"),
  ("abhaken", "als erledigt ansehen", "✔️"),
 ],
 "listen": [
  ("💻 Beginn der Konferenz",
   "So, ich glaube, wir sind vollzählig. Frau Lemke ist heute nicht dabei, Herr Özdemir ist in ihrer "
   "Vertretung da. Bitte schalten Sie sich alle stumm, wenn Sie nicht sprechen — gestern hat uns das "
   "eine halbe Stunde gekostet. Zur Tagesordnung: Punkt drei nehme ich raus, dazu fehlen uns noch "
   "die Zahlen, den vertagen wir auf nächste Woche. Dafür schieben wir das Thema Lieferfristen vor, "
   "weil Herr Brandt um halb vier raus muss.",
   "Was passiert mit Punkt drei?",
   ["Er wird auf nächste Woche vertagt, weil Zahlen fehlen.",
    "Er wird vorgezogen, weil Herr Brandt früher gehen muss.",
    "Er wird ohne die Zahlen besprochen.",
    "Er wird von Herrn Özdemir in Vertretung übernommen."], 0),

  ("💻 Schlechte Verbindung",
   "Entschuldigung, Herr Brandt, Sie setzen gerade aus — ich habe nur die Hälfte verstanden. Ich "
   "wiederhole mal, was bei mir angekommen ist, und Sie sagen mir, ob das stimmt: Die Lieferung "
   "kommt zwei Wochen später, der Kunde ist informiert, und die Frage ist jetzt, ob wir die "
   "Vertragsstrafe zahlen oder nachverhandeln. War das richtig? … Gut. Dann machen wir es so: Sie "
   "schreiben das kurz in den Chat, damit wir es fürs Protokoll sauber haben.",
   "Wie geht die Moderatorin mit der schlechten Verbindung um?",
   ["Sie wiederholt, was angekommen ist, und lässt es bestätigen.",
    "Sie bittet Herrn Brandt, alles noch einmal zu sagen.",
    "Sie vertagt den Punkt auf die nächste Sitzung.",
    "Sie lässt Herrn Brandt stumm schalten."], 0),

  ("💻 Mitten in der Diskussion",
   "Moment, bevor wir weitermachen — wir reden hier gerade über zwei verschiedene Dinge. Frau Sauer "
   "spricht über den Sachstand im laufenden Projekt, Sie, Herr Novak, über die Planung fürs nächste "
   "Jahr. Beides ist wichtig, aber durcheinander kommen wir nicht weiter. Ich schlage vor: erst der "
   "Sachstand, zehn Minuten, dann die Planung. Und Zwischenrufe bitte über die Meldefunktion, nicht "
   "einfach rein — im Telefon hört man nämlich nicht, wer gerade Luft holt.",
   "Was ist das Problem, das die Moderatorin benennt?",
   ["Es werden zwei verschiedene Themen gleichzeitig besprochen.",
    "Die Verbindung ist zu schlecht für eine Diskussion.",
    "Frau Sauer und Herr Novak sind unterschiedlicher Meinung.",
    "Die Tagesordnung wurde nicht eingehalten."], 0),

  ("💻 Am Ende",
   "Gut, dann halte ich fest: Die Lieferfristen klärt Herr Brandt federführend mit dem Kunden, "
   "Rückmeldung bis Freitag. Das Angebot geht nicht in die Sitzung, sondern im Umlauf an alle — wer "
   "bis Mittwoch nichts sagt, bei dem gehe ich von Zustimmung aus. Und Punkt drei steht nächste "
   "Woche wieder oben. Das Protokoll schicke ich heute Abend; bitte sagen Sie mir bis morgen "
   "Bescheid, wenn etwas falsch drinsteht, danach hake ich es ab.",
   "Was gilt für das Angebot?",
   ["Es geht im Umlauf an alle; Schweigen bis Mittwoch gilt als Zustimmung.",
    "Es wird in der nächsten Sitzung besprochen.",
    "Herr Brandt entscheidet darüber federführend.",
    "Es steht nächste Woche als Punkt drei auf der Tagesordnung."], 0),
 ]},
]
