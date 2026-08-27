/* ============================================================
   vokabel-saetze-neu.js — Beispielsaetze fuer die Woerter,
   die noch keinen hatten

   Ein Wort mit Bedeutung versteht man; ein Wort im Satz weiss
   man auch zu benutzen. 348 Woerter im Wortschatz standen
   bisher nur mit ihrer Bedeutung da.

   Schluessel: das Wort genau so, wie es in uebungen.js steht.
   Wert: ein Satz aus dem Alltag, das Zielwort zwischen §…§ —
   daraus macht der Trainer den gelben Textmarker.

   Wird NACH vokabel-saetze.js geladen und ergaenzt nur, was dort
   fehlt; vorhandene Saetze bleiben unangetastet.
   ============================================================ */
(function () {
  var NEU = {

/* ---------- A1 · Familie & Personen ---------- */
"die Familie": "Am Sonntag kocht meine ganze §Familie§ zusammen.",
"die Mutter": "Meine §Mutter§ ruft jeden Abend um acht an.",
"der Vater": "Mein §Vater§ bringt die Kinder morgens zur Schule.",
"die Eltern": "Meine §Eltern§ wohnen noch in meiner Heimatstadt.",
"das Kind": "Das §Kind§ spielt draußen im Hof.",
"die Tochter": "Meine §Tochter§ geht seit August in die Schule.",
"der Sohn": "Mein §Sohn§ ist drei Jahre alt.",
"die Schwester": "Meine §Schwester§ ist zwei Jahre älter als ich.",
"der Bruder": "Mein §Bruder§ hilft mir beim Umzug.",
"die Großmutter": "Meine §Großmutter§ backt den besten Kuchen.",
"der Großvater": "Mein §Großvater§ erzählt gern von früher.",
"die Frau": "Die §Frau§ am Schalter war sehr freundlich.",
"der Mann": "Der §Mann§ vor mir hat seinen Ausweis vergessen.",
"das Baby": "Das §Baby§ schläft endlich.",
"der Onkel": "Mein §Onkel§ wohnt seit zwanzig Jahren in Hamburg.",
"die Tante": "Meine §Tante§ besucht uns im Sommer.",

/* ---------- A1 · Essen & Trinken ---------- */
"das Brot": "Ich kaufe jeden Morgen frisches §Brot§.",
"das Brötchen": "Am Sonntag gibt es bei uns §Brötchen§ zum Frühstück.",
"die Butter": "Die §Butter§ ist noch zu hart zum Streichen.",
"der Käse": "Auf mein Brot kommt §Käse§ und eine Tomate.",
"die Milch": "Trinkst du deinen Kaffee mit §Milch§?",
"der Kaffee": "Ohne §Kaffee§ komme ich morgens nicht in Gang.",
"der Tee": "Bei Halsschmerzen trinke ich §Tee§ mit Honig.",
"das Wasser": "Ein Glas §Wasser§, bitte.",
"der Apfel": "Ich nehme mir einen §Apfel§ mit zur Arbeit.",
"die Kartoffel": "Die §Kartoffeln§ kochen schon zwanzig Minuten.",
"das Gemüse": "Zum Fleisch gibt es §Gemüse§ aus der Pfanne.",
"das Obst": "Im Sommer esse ich viel §Obst§.",
"das Fleisch": "Ich esse nur einmal in der Woche §Fleisch§.",
"der Fisch": "Freitags gibt es bei uns §Fisch§.",
"das Frühstück": "Zum §Frühstück§ esse ich meistens nur ein Brot.",
"das Abendessen": "Das §Abendessen§ ist um sieben fertig.",

/* ---------- A1 · Tag & Uhrzeit ---------- */
"der Morgen": "Am §Morgen§ trinke ich zuerst ein Glas Wasser.",
"der Vormittag": "Am §Vormittag§ habe ich einen Termin beim Arzt.",
"der Mittag": "Um §Mittag§ mache ich eine halbe Stunde Pause.",
"der Nachmittag": "Am §Nachmittag§ hole ich die Kinder ab.",
"der Abend": "Am §Abend§ lese ich noch ein bisschen.",
"die Nacht": "In der §Nacht§ war es sehr laut auf der Straße.",
"die Uhr": "Meine §Uhr§ geht zwei Minuten vor.",
"die Stunde": "Der Kurs dauert eine §Stunde§.",
"die Minute": "Warte bitte eine §Minute§, ich komme gleich.",
"die Woche": "Diese §Woche§ arbeite ich früh.",
"der Monat": "Nächsten §Monat§ ziehe ich um.",
"das Wochenende": "Am §Wochenende§ schlafe ich länger.",
"die Arbeit": "Nach der §Arbeit§ gehe ich einkaufen.",
"die Pause": "In der §Pause§ trinken wir zusammen Kaffee.",
"die Freizeit": "In meiner §Freizeit§ spiele ich Fußball.",

/* ---------- A1 · Begrüßen & Vorstellen ---------- */
"der Name": "Mein §Name§ ist Ana Silva.",
"der Vorname": "Schreiben Sie bitte den §Vornamen§ in das erste Feld.",
"der Nachname": "Meinen §Nachnamen§ buchstabiere ich lieber.",
"die Begrüßung": "Zur §Begrüßung§ gibt man sich hier oft die Hand.",
"der Gruß": "Sie hat mir einen freundlichen §Gruß§ zugerufen.",
"das Land": "Aus welchem §Land§ kommst du?",
"die Sprache": "Meine erste §Sprache§ ist Arabisch.",
"die Adresse": "Ich schreibe dir meine §Adresse§ auf.",
"die Telefonnummer": "Hast du meine neue §Telefonnummer§?",
"das Alter": "Nach dem §Alter§ fragt man hier nicht immer.",
"der Freund": "Mein §Freund§ hilft mir beim Deutschlernen.",
"die Nachbarin": "Meine §Nachbarin§ nimmt Pakete für mich an.",
"die Frage": "Ich habe noch eine §Frage§ zum Formular.",
"die Antwort": "Auf meine E-Mail kam noch keine §Antwort§.",

/* ---------- A1 · Einkaufen & Preise ---------- */
"der Supermarkt": "Der §Supermarkt§ hat bis acht Uhr geöffnet.",
"das Geschäft": "Das §Geschäft§ um die Ecke ist sonntags zu.",
"der Kunde": "Der §Kunde§ vor mir bezahlt mit Karte.",
"die Verkäuferin": "Die §Verkäuferin§ hat mir eine andere Größe geholt.",
"die Größe": "Haben Sie die Jacke auch in §Größe§ M?",
"die Bäckerei": "Die §Bäckerei§ macht schon um sechs auf.",
"der Markt": "Auf dem §Markt§ ist das Gemüse frischer.",

/* ---------- A1 · Wohnung & Möbel ---------- */
"das Zimmer": "Mein §Zimmer§ ist klein, aber hell.",
"der Tisch": "Stell die Teller bitte auf den §Tisch§.",
"die Tür": "Mach bitte die §Tür§ zu, es zieht.",
"der Keller": "Die Fahrräder stehen im §Keller§.",

/* ---------- A2 · Bank, Konto & Geld ---------- */
"das Girokonto": "Mein Gehalt kommt jeden Monat auf mein §Girokonto§.",
"die Überweisung": "Die §Überweisung§ ist erst morgen auf deinem Konto.",
"der Dauerauftrag": "Die Miete zahle ich per §Dauerauftrag§.",
"abheben": "Ich muss noch fünfzig Euro §abheben§.",
"einzahlen": "Kann ich hier auch Bargeld §einzahlen§?",
"die Geheimzahl": "Sag deine §Geheimzahl§ niemandem, auch nicht am Telefon.",
"der Kontoauszug": "Auf dem §Kontoauszug§ steht eine Buchung, die ich nicht kenne.",
"die Gebühr": "Für die Karte kommt eine §Gebühr§ von zehn Euro im Jahr dazu.",
"der Kontostand": "Ich schaue kurz meinen §Kontostand§ nach.",
"sperren": "Ich habe meine Karte verloren — bitte §sperren§ Sie sie sofort.",
"der Geldautomat": "Der §Geldautomat§ im Supermarkt ist kaputt.",
"die IBAN": "Schick mir bitte deine §IBAN§ per Nachricht.",

/* ---------- A2 · Post & Pakete ---------- */
"das Paket": "Mein §Paket§ kommt heute zwischen zwei und sechs.",
"die Briefmarke": "Für den Brief brauche ich noch eine §Briefmarke§.",
"der Absender": "Schreib den §Absender§ oben links auf den Umschlag.",
"der Empfänger": "Der §Empfänger§ war nicht zu Hause.",
"das Einschreiben": "Den Vertrag schicke ich lieber als §Einschreiben§.",
"die Sendungsnummer": "Mit der §Sendungsnummer§ kannst du das Paket verfolgen.",
"die Packstation": "Ich hole das Paket abends an der §Packstation§.",
"die Benachrichtigungskarte": "Im Briefkasten lag nur eine §Benachrichtigungskarte§.",
"das Porto": "Das §Porto§ für den Brief kostet fünfundachtzig Cent.",
"der Schalter": "Am §Schalter§ war heute wenig los.",
"abholen": "Ich kann das Paket erst morgen §abholen§.",
"annehmen": "Kannst du das Paket für mich §annehmen§?",

/* ---------- A2 · Kleidung kaufen & Größen ---------- */
"anprobieren": "Darf ich die Hose einmal §anprobieren§?",
"die Umkleidekabine": "Die §Umkleidekabine§ ist ganz hinten rechts.",
"zu eng": "Die Jacke ist mir an den Schultern §zu eng§.",
"zu weit": "Die Hose ist §zu weit§, ich brauche eine Nummer kleiner.",
"der Reißverschluss": "Der §Reißverschluss§ klemmt.",
"das Sonderangebot": "Die Schuhe waren im §Sonderangebot§.",
"umtauschen": "Kann ich den Pullover noch §umtauschen§?",
"die Baumwolle": "Ich trage im Sommer am liebsten §Baumwolle§.",
"der Schal": "Nimm den §Schal§ mit, es wird kalt.",
"der Kassenbon": "Ohne §Kassenbon§ geht der Umtausch leider nicht.",
"passen": "Die Schuhe §passen§ mir genau.",

/* ---------- A2 · Amt & Formulare ---------- */
"die Anmeldung": "Für die §Anmeldung§ brauchst du das ausgefüllte Formular und deinen Ausweis.",
"das Formular": "Das §Formular§ gibt es auch auf Englisch.",
"die Bescheinigung": "Ich brauche eine §Bescheinigung§ für meinen Arbeitgeber.",
"der Antrag": "Der §Antrag§ muss bis Ende des Monats da sein.",
"die Unterschrift": "Hier fehlt noch Ihre §Unterschrift§.",
"der Ausweis": "Bringen Sie bitte Ihren §Ausweis§ mit.",
"das Amt": "Das §Amt§ hat dienstags bis achtzehn Uhr offen.",
"die Frist": "Die §Frist§ läuft am Freitag ab.",
"die Wartenummer": "Meine §Wartenummer§ ist die vierundachtzig.",
"der Sachbearbeiter": "Mein §Sachbearbeiter§ ist diese Woche im Urlaub.",
"ausfüllen": "Ich muss das Formular noch §ausfüllen§.",

/* ---------- A2 · Kita, Schule & Elternabend ---------- */
"der Elternabend": "Der §Elternabend§ ist am Dienstag um neunzehn Uhr.",
"die Hausaufgaben": "Nach dem Essen macht mein Sohn seine §Hausaufgaben§.",
"der Kindergartenplatz": "Wir haben endlich einen §Kindergartenplatz§ bekommen.",
"krankmelden": "Ich muss meine Tochter heute §krankmelden§.",
"die Klassenlehrerin": "Die §Klassenlehrerin§ hat mich angerufen.",
"der Ausflug": "Am Freitag macht die Klasse einen §Ausflug§ in den Zoo.",
"die Einschulung": "Zur §Einschulung§ kommen auch die Großeltern.",
"die Betreuung": "Die §Betreuung§ am Nachmittag kostet extra.",
"der Elternbrief": "Im §Elternbrief§ stand nichts von einem Termin.",

/* ---------- A2 · Auto, Werkstatt & Panne ---------- */
"die Werkstatt": "Mein Auto steht seit gestern in der §Werkstatt§.",
"die Panne": "Wir hatten auf der Autobahn eine §Panne§.",
"der Reifen": "Der §Reifen§ hinten links verliert Luft.",
"die Bremse": "Die §Bremse§ quietscht beim Anhalten.",
"der TÜV": "Nächsten Monat muss ich zum §TÜV§.",
"der Kostenvoranschlag": "Machen Sie mir bitte vorher einen §Kostenvoranschlag§.",
"abschleppen": "Das Auto springt nicht an, wir müssen es §abschleppen§ lassen.",
"der Ölwechsel": "Der §Ölwechsel§ ist alle fünfzehntausend Kilometer dran.",
"die Reparatur": "Die §Reparatur§ dauert zwei Tage.",
"die Versicherung": "Die §Versicherung§ zahlt den Schaden.",
"tanken": "Ich muss noch §tanken§, bevor wir losfahren.",

/* ---------- A2 · Beim Arzt ---------- */
"die Versichertenkarte": "Ohne §Versichertenkarte§ kann ich Sie leider nicht aufnehmen.",
"das Wartezimmer": "Im §Wartezimmer§ saßen schon fünf Leute vor mir.",
"die Sprechstunde": "Die §Sprechstunde§ ist heute nur bis zwölf.",
"die Beschwerden": "Meine §Beschwerden§ sind seit gestern schlimmer.",
"die Nebenwirkung": "Die häufigste §Nebenwirkung§ ist Müdigkeit.",
"die Salbe": "Streich die §Salbe§ zweimal am Tag dünn auf.",
"der Notdienst": "Am Sonntag hilft nur der §Notdienst§.",
"absagen": "Ich muss den Termin leider §absagen§.",
"sich untersuchen lassen": "Nach dem Unfall wollte ich mich §untersuchen lassen§.",

/* ---------- A2 · Freizeit & Wetter ---------- */
"sich verabreden": "Wollen wir uns für Samstag §verabreden§?",
"das Freibad": "Bei dem Wetter gehen wir ins §Freibad§.",
"bewölkt": "Heute ist es den ganzen Tag §bewölkt§.",
"der Regenschirm": "Nimm den §Regenschirm§ mit, es soll regnen.",
"spazieren gehen": "Ich gehe nach der Arbeit gern eine Stunde §spazieren§.",
"der Verein": "Mein Sohn spielt im §Verein§ Fußball.",
"die Ausstellung": "Die §Ausstellung§ läuft noch bis Ende Mai.",
"das Grillen": "Zum §Grillen§ bringt jeder etwas mit.",

/* ---------- A2 · Café & Bäckerei ---------- */
"bestellen": "Ich möchte gern §bestellen§, bitte.",
"zum Mitnehmen": "Einen Kaffee §zum Mitnehmen§, bitte.",
"das Stück Kuchen": "Ein §Stück Kuchen§ und einen Tee, bitte.",
"belegt": "Ich nehme ein §belegtes§ Brötchen mit Käse.",
"das Trinkgeld": "Als §Trinkgeld§ lasse ich meistens einen Euro da.",
"der Sitzplatz": "Ist der §Sitzplatz§ hier noch frei?",
"die Theke": "Bestellt wird vorne an der §Theke§.",
"frisch": "Die Brötchen sind noch ganz §frisch§.",
"getrennt zahlen": "Wir möchten bitte §getrennt zahlen§.",

/* ---------- A2 · Beim Friseur ---------- */
"die Spitzen": "Bitte nur die §Spitzen§ schneiden.",
"der Pony": "Der §Pony§ ist mir zu lang geworden.",
"färben": "Ich lasse meine Haare zum ersten Mal §färben§.",
"föhnen": "Soll ich Ihnen die Haare noch §föhnen§?",
"waschen": "Vor dem Schnitt §waschen§ wir die Haare.",
"der Scheitel": "Meinen §Scheitel§ trage ich links.",
"die Frisur": "Die neue §Frisur§ steht dir gut.",
"der Spiegel": "Schauen Sie einmal in den §Spiegel§ — gefällt es Ihnen so?",
"die Strähnen": "Ein paar helle §Strähnen§ wären schön.",

/* ---------- A2 · Handy & Vertrag ---------- */
"die Prepaid-Karte": "Mit einer §Prepaid-Karte§ zahlst du nur, was du verbrauchst.",
"das Datenvolumen": "Mein §Datenvolumen§ ist schon am Zwanzigsten leer.",
"kündigen": "Ich möchte meinen Vertrag zum Monatsende §kündigen§.",
"die Kündigungsfrist": "Die §Kündigungsfrist§ beträgt drei Monate.",
"der Empfang": "Im Keller habe ich keinen §Empfang§.",
"der Router": "Zieh beim §Router§ einmal den Stecker.",
"die Hotline": "Bei der §Hotline§ hing ich zwanzig Minuten in der Warteschleife.",
"aufladen": "Ich muss meine Karte noch §aufladen§.",

/* ---------- A2 · Wohnung & Miete ---------- */
"die Kaution": "Die §Kaution§ sind zwei Monatsmieten.",
"die Nebenkosten": "Die §Nebenkosten§ kommen zur Miete noch dazu.",
"die Hausordnung": "Laut §Hausordnung§ ist ab zweiundzwanzig Uhr Ruhe.",
"der Mietvertrag": "Den §Mietvertrag§ lese ich mir vorher genau durch.",
"das Treppenhaus": "Im §Treppenhaus§ darf nichts stehen.",
"Müll trennen": "Hier muss man den §Müll trennen§.",
"umziehen": "Wir wollen im Sommer §umziehen§.",

/* ---------- A2 · Arbeit & Schicht ---------- */
"die Schicht": "Diese Woche habe ich die späte §Schicht§.",
"der Urlaubsantrag": "Meinen §Urlaubsantrag§ habe ich gestern abgegeben.",
"sich krankmelden": "Wenn du krank bist, musst du dich vor acht Uhr §krankmelden§.",
"der Arbeitsvertrag": "Im §Arbeitsvertrag§ stehen deine Stunden und dein Lohn.",
"der Lohn": "Der §Lohn§ kommt immer am Ende des Monats.",
"die Besprechung": "Die §Besprechung§ dauert eine halbe Stunde.",
"die Schutzbrille": "Ohne §Schutzbrille§ darfst du nicht an die Maschine.",

/* ---------- A2 · Im Restaurant ---------- */
"die Speisekarte": "Könnten wir bitte die §Speisekarte§ haben?",
"die Beilage": "Als §Beilage§ nehme ich Salat.",
"die Vorspeise": "Als §Vorspeise§ gibt es heute Suppe.",
"reservieren": "Ich möchte für Samstag einen Tisch §reservieren§.",
"vegetarisch": "Ich esse §vegetarisch§ — haben Sie etwas ohne Fleisch?",

/* ---------- A2 · Einkaufen ---------- */
"das Pfand": "Für die Flaschen bekommst du §Pfand§ zurück.",
"die EC-Karte": "Kann ich mit §EC-Karte§ zahlen?",
"die Garantie": "Auf das Gerät gibt es zwei Jahre §Garantie§.",
"das Haltbarkeitsdatum": "Schau mal aufs §Haltbarkeitsdatum§, die Milch ist von letzter Woche.",

/* ---------- A2 · Unterwegs ---------- */
"der Fahrplan": "Im §Fahrplan§ steht, dass der Bus alle zwanzig Minuten fährt.",
"entwerten": "Vergiss nicht, die Fahrkarte zu §entwerten§.",
"die Durchsage": "Die §Durchsage§ habe ich nicht verstanden.",
"die Fahrkarte": "Meine §Fahrkarte§ gilt für zwei Zonen.",

/* ---------- B1/C1 · Büro & Zusammenarbeit ---------- */
"die Rückmeldung": "Ich brauche bis Freitag eine kurze §Rückmeldung§ von dir.",
"die Abstimmung": "Nach der §Abstimmung§ mit dem Team fange ich an.",
"die Priorität": "Was hat jetzt §Priorität§ — der Bericht oder die Präsentation?",
"der Aufwand": "Der §Aufwand§ ist größer, als es aussieht.",
"die Zuständigkeit": "Dafür liegt die §Zuständigkeit§ bei der Buchhaltung.",
"delegieren": "Diese Aufgabe kann ich gut §delegieren§.",
"verbindlich": "Können Sie mir das §verbindlich§ zusagen?",
"der Puffer": "Ich plane immer einen halben Tag §Puffer§ ein.",
"eskalieren": "Wenn bis morgen nichts kommt, müssen wir das §eskalieren§.",
"kurzfristig": "Der Termin wurde §kurzfristig§ abgesagt.",

/* ---------- B1/C1 · Pflege ---------- */
"die Übergabe": "Bei der §Übergabe§ berichte ich, was in der Nacht war.",
"dokumentieren": "Bitte §dokumentieren§ Sie jede Gabe sofort.",
"die Vitalzeichen": "Die §Vitalzeichen§ sind stabil.",
"mobilisieren": "Wir §mobilisieren§ Frau Braun heute zum ersten Mal.",
"sturzgefährdet": "Herr Klein ist §sturzgefährdet§, bitte begleiten Sie ihn.",
"die Bedarfsmedikation": "Er hat einmal §Bedarfsmedikation§ gegen die Schmerzen bekommen.",
"die Schweigepflicht": "Wir haben §Schweigepflicht§, auch gegenüber Nachbarn.",
"die Angehörigen": "Die §Angehörigen§ rufen jeden Abend an.",
"verlegt werden": "Frau Sauer soll morgen auf die Zwei §verlegt werden§.",
"die Prophylaxe": "Zur §Prophylaxe§ lagern wir ihn alle zwei Stunden um.",
"der Bewohner": "Der §Bewohner§ aus Zimmer vier möchte gern nach draußen.",
"die Pflegekraft": "Als §Pflegekraft§ arbeite ich im Schichtdienst.",
"der Blutdruck": "Der §Blutdruck§ war heute Morgen etwas niedrig.",
"die Visite": "Die §Visite§ ist immer um neun.",
"aufstehen helfen": "Zu zweit können wir ihm besser beim §Aufstehen helfen§.",
"die Windel": "Die §Windel§ wechseln wir vor der Nachtruhe.",
"klingeln": "Wenn Sie etwas brauchen, einfach §klingeln§.",
"die Dokumentation": "Ohne §Dokumentation§ gilt eine Leistung als nicht erbracht.",

/* ---------- B1/C1 · Kundinnen und Kunden ---------- */
"das Anliegen": "Ich fasse Ihr §Anliegen§ kurz zusammen.",
"die Reklamation": "Ihre §Reklamation§ ist bei uns eingegangen.",
"weiterleiten": "Ich werde das an die Fachabteilung §weiterleiten§.",
"der Rückruf": "Ich notiere Ihnen einen §Rückruf§ für morgen früh.",
"kulant": "Wir zeigen uns da gern §kulant§.",
"die Bearbeitung": "Die §Bearbeitung§ dauert etwa fünf Werktage.",
"überfragt sein": "Da bin ich gerade §überfragt§ — ich frage kurz nach.",
"entgegenkommen": "Wir können Ihnen beim Preis etwas §entgegenkommen§.",
"sich melden": "Ich §melde mich§ spätestens am Donnerstag.",

/* ---------- B1/C1 · Amt & Bescheid ---------- */
"der Bescheid": "Der §Bescheid§ kam heute mit der Post.",
"der Widerspruch": "Gegen die Entscheidung lege ich §Widerspruch§ ein.",
"die Zustellung": "Die Frist beginnt mit der §Zustellung§ des Briefes.",
"der Nachweis": "Als §Nachweis§ reicht die Kopie des Vertrags.",
"die Bewilligung": "Die §Bewilligung§ gilt für zwölf Monate.",
"die Rückforderung": "Die §Rückforderung§ von dreihundert Euro verstehe ich nicht.",
"das Aktenzeichen": "Geben Sie bitte immer das §Aktenzeichen§ an.",
"die Anlage": "Die Gehaltsabrechnung finden Sie in der §Anlage§.",
"glaubhaft machen": "Sie müssen §glaubhaft machen§, dass der Brief nie angekommen ist.",

/* ---------- B1/C1 · Bewerbung ---------- */
"das Anschreiben": "Im §Anschreiben§ stehen drei Sätze, warum ich passe.",
"die Probezeit": "Die §Probezeit§ dauert sechs Monate.",
"die Gehaltsvorstellung": "Meine §Gehaltsvorstellung§ liegt bei sechsundvierzigtausend Euro im Jahr.",
"der Quereinsteiger": "Als §Quereinsteiger§ bringe ich Erfahrung aus dem Verkauf mit.",
"die Anerkennung": "Die §Anerkennung§ meines Abschlusses hat ein Jahr gedauert.",
"sich einarbeiten": "Ich brauche vier Wochen, um mich §einzuarbeiten§.",
"die Zusage": "Heute kam die §Zusage§ per Mail.",
"die Absage": "Nach der §Absage§ habe ich um eine Rückmeldung gebeten.",
"die Weiterbildung": "Die Firma zahlt eine §Weiterbildung§ im Jahr.",

/* ---------- Beim Zahnarzt ---------- */
"der Zahn": "Der §Zahn§ links oben tut beim Kauen weh.",
"die Zahnschmerzen": "Ich habe seit Tagen §Zahnschmerzen§.",
"die Füllung": "Die alte §Füllung§ ist herausgefallen.",
"die Spritze": "Ohne §Spritze§ halte ich das nicht aus.",
"die Kontrolle": "Zur §Kontrolle§ gehe ich zweimal im Jahr.",
"die Zahnseide": "Benutzen Sie abends auch §Zahnseide§?",
"die Krone": "Die §Krone§ wird im Labor gemacht.",
"die Zahnpasta": "Meine §Zahnpasta§ ist fast leer.",

/* ---------- KI & Arbeitswelt ---------- */
"die künstliche Intelligenz": "Bei uns schreibt die §künstliche Intelligenz§ inzwischen die ersten Entwürfe.",
"die Automatisierung": "Die §Automatisierung§ hat die Arbeit verändert, nicht abgeschafft.",
"die Effizienz": "Mehr §Effizienz§ heißt nicht automatisch bessere Arbeit.",
"die Verantwortung": "Die §Verantwortung§ bleibt am Ende beim Menschen.",
"der Datenschutz": "Beim §Datenschutz§ dürfen wir keine Abkürzung nehmen.",
"die Umschulung": "Nach der §Umschulung§ arbeitet er jetzt in der IT.",
"das Risiko": "Das größte §Risiko§ ist, dass niemand mehr nachprüft.",
"die Zusammenarbeit": "Die §Zusammenarbeit§ mit der neuen Kollegin läuft gut.",

/* ---------- C1 · Arzt & Befund ---------- */
"der Befund": "Der §Befund§ liegt seit heute Morgen vor.",
"die Diagnose": "Bis zur §Diagnose§ hat es lange gedauert.",
"die Wechselwirkung": "Zwischen den beiden Medikamenten gibt es eine §Wechselwirkung§.",
"die Vorerkrankung": "Haben Sie §Vorerkrankungen§, von denen ich wissen sollte?",
"chronisch": "Die Schmerzen sind inzwischen §chronisch§.",
"akut": "Im §akuten§ Fall rufen Sie bitte sofort an.",
"die Zweitmeinung": "Vor der Operation hole ich mir eine §Zweitmeinung§.",
"abklären": "Das sollten wir vorher §abklären§ lassen.",

/* ---------- C1 · Vertrag & Geld ---------- */
"die Laufzeit": "Die §Laufzeit§ beträgt vierundzwanzig Monate.",
"der Effektivzins": "Achten Sie auf den §Effektivzins§, nicht auf die Monatsrate.",
"die Rate": "Die §Rate§ wird jeden Ersten abgebucht.",
"widerrufen": "Sie können den Vertrag innerhalb von vierzehn Tagen §widerrufen§.",
"die Selbstbeteiligung": "Die §Selbstbeteiligung§ liegt bei dreihundert Euro.",
"das Kleingedruckte": "Im §Kleingedruckten§ stand die entscheidende Klausel.",
"in Verzug geraten": "Wer zweimal nicht zahlt, kann §in Verzug geraten§.",
"die Gesamtkosten": "Die §Gesamtkosten§ sind höher als die Summe der Raten.",

/* ---------- C1 · Familie & Alltag ---------- */
"die Elternzeit": "Mein Mann nimmt drei Monate §Elternzeit§.",
"das Elterngeld": "Das §Elterngeld§ muss man vorher beantragen.",
"die Vereinbarkeit": "Die §Vereinbarkeit§ von Beruf und Familie ist bei uns ein Dauerthema.",
"alleinerziehend": "Sie ist §alleinerziehend§ und arbeitet in Teilzeit.",
"die Nachhilfe": "Mein Sohn bekommt seit Herbst §Nachhilfe§ in Mathe.",
"versetzt werden": "Ob sie §versetzt werden§, entscheidet sich im Juni.",
"der Kita-Platz": "Auf einen §Kita-Platz§ warten wir seit einem Jahr.",

/* ---------- B1 · Amt & Bewerbung ---------- */
"die Unterlagen": "Bringen Sie bitte alle §Unterlagen§ im Original mit.",
"die Sachbearbeiterin": "Meine §Sachbearbeiterin§ hat mich zurückgerufen.",
"beglaubigt": "Die Kopie muss §beglaubigt§ sein.",
"der Aufenthaltstitel": "Mein §Aufenthaltstitel§ läuft im März ab.",
"zuständig sein": "Dafür ist ein anderes Amt §zuständig§.",
"die Stellenanzeige": "In der §Stellenanzeige§ stand nichts von Schichtarbeit.",
"die Vollzeit": "Ich suche eine Stelle in §Vollzeit§.",

/* ---------- A2 · Handy ---------- */
"die Störung": "Beim Internet gibt es gerade eine §Störung§."

  };

  var S = window.VOKABEL_SAETZE = window.VOKABEL_SAETZE || {};
  Object.keys(NEU).forEach(function (k) { if (!S[k]) S[k] = NEU[k]; });
})();
