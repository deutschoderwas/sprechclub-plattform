/* hoer-fragen.js — zu jedem Hörtext zwei weitere Fragen.
   Vorher hatte jede Aufnahme genau eine Frage; ein Hörthema bestand
   dadurch zu über 95 % aus Wortaufgaben. Jetzt fragt jede Aufnahme
   drei verschiedene Details ab (Zeit, Ort, Grund, Zahl …).
   Erstellt am 22.09.2026, jede Frage unabhängig gegengeprüft:
   ein zweiter Durchgang hat alle 588 Fragen nur mit dem Transkript
   beantwortet — 588 von 588 stimmten mit der Lösung überein.
   Format je Aufnahme: [Frage, [Optionen], Index richtig, Erklärung] */
(function () {
  var F = {
"https://d8j0ntlcm91z4.cloudfront.net/user_38tIQPWpEsaUmk18tYN8mskaaAF/hf_20260722_071923_497106db-1b75-4525-b1af-9d527030fdbd.wav": [
[
"Seit wann gibt es die Zahnschmerzen?",
[
"Seit gestern",
"Seit heute früh",
"Seit einer Woche"
],
0,
"Im Text: „Ich habe seit gestern starke Zahnschmerzen.“ — also seit gestern."
],
[
"Wann tut der Zahn besonders weh?",
[
"Bei heißen Getränken",
"Bei kalten Getränken",
"Beim Essen am Abend"
],
1,
"Im Text: „besonders wenn ich etwas Kaltes trinke“ — also bei kalten Getränken."
]
],
"https://d8j0ntlcm91z4.cloudfront.net/user_38tIQPWpEsaUmk18tYN8mskaaAF/hf_20260722_071925_203fa970-cc7e-4f8e-8bc1-e821ac6c89b6.wav": [
[
"Was passiert laut dem Text mit einfachen, wiederholenden Aufgaben?",
[
"Sie werden automatisiert.",
"Sie werden besser bezahlt.",
"Sie werden immer schwieriger."
],
0,
"Im Text: „Einfache, wiederholende Aufgaben werden automatisiert“ — also werden sie automatisiert."
],
[
"Was entsteht laut dem Text gleichzeitig?",
[
"Neue Schulen",
"Neue Gesetze",
"Neue Berufe"
],
2,
"Im Text: „doch gleichzeitig entstehen neue Berufe“ — also neue Berufe."
]
],
"https://d8j0ntlcm91z4.cloudfront.net/user_38tIQPWpEsaUmk18tYN8mskaaAF/hf_20260820_074636_f65102c1-a958-481c-a5ab-0d661d125ca8.mp3": [
[
"Wann ist der alte Termin?",
[
"Morgen um zehn Uhr",
"Heute um neun Uhr",
"Morgen um neun Uhr"
],
2,
"Im Text: „Ich habe morgen um neun Uhr einen Termin“ — also morgen um neun."
],
[
"Wann möchte Herr Yilmaz einen neuen Termin?",
[
"Heute Abend",
"Nächste Woche",
"Übermorgen"
],
1,
"Im Text: „einen neuen Termin nächste Woche“ — also nächste Woche."
]
],
"https://d8j0ntlcm91z4.cloudfront.net/user_38tIQPWpEsaUmk18tYN8mskaaAF/hf_20260820_074636_ffa446d9-1c49-4328-85a2-a8d3787fccbd.mp3": [
[
"Was soll die Kundin zu den Tabletten trinken?",
[
"Viel Saft",
"Viel Wasser",
"Viel Tee"
],
1,
"Im Text: „Trinken Sie viel Wasser dazu.“ — also viel Wasser."
],
[
"Welche Nebenwirkung ist normal?",
[
"Kopfschmerzen",
"Müdigkeit",
"Bauchschmerzen"
],
1,
"Im Text: „Wenn Sie müde werden, ist das eine normale Nebenwirkung.“ — also Müdigkeit."
]
],
"https://d8j0ntlcm91z4.cloudfront.net/user_38tIQPWpEsaUmk18tYN8mskaaAF/hf_20260820_074636_e44f427a-2756-494d-9278-1dff6e2a0b12.mp3": [
[
"Wann schläft das Baby?",
[
"Um sieben Uhr",
"Um acht Uhr",
"Um neun Uhr"
],
1,
"Im Text: „Unser Baby schläft um acht Uhr“ — also um acht."
],
[
"Wie heißt die Frau mit der lauten Musik?",
[
"Frau Wagner",
"Frau Nowak",
"Frau Neumann"
],
1,
"Im Text: „Guten Abend, Frau Nowak.“ — sie hört die laute Musik."
]
],
"https://d8j0ntlcm91z4.cloudfront.net/user_38tIQPWpEsaUmk18tYN8mskaaAF/hf_20260820_074636_27adf16e-ebaa-4827-91c1-e0c04779bc2e.mp3": [
[
"In welchem Stock wohnt Familie Sanchez?",
[
"Im dritten Stock",
"Im ersten Stock",
"Im zweiten Stock"
],
2,
"Im Text: „aus der Wohnung im zweiten Stock“ — also im zweiten Stock."
],
[
"Wann ist die Familie den ganzen Tag zu Hause?",
[
"Am Samstag",
"Am Donnerstag",
"Am Freitag"
],
2,
"Im Text: „Am Freitag sind wir den ganzen Tag zu Hause.“ — also am Freitag."
]
],
"https://d8j0ntlcm91z4.cloudfront.net/user_38tIQPWpEsaUmk18tYN8mskaaAF/hf_20260820_074636_89aa6483-338e-4479-b857-4bc1974cfdab.mp3": [
[
"Wie viel kostet alles zusammen?",
[
"20,80 €",
"12,18 €",
"12,80 €"
],
2,
"Im Text: „Das macht zusammen zwölf Euro achtzig.“ — also 12,80 €."
],
[
"Was fragt der Verkäufer nach der Zahlung?",
[
"Ob sie den Kassenbon möchte",
"Ob sie eine Tüte möchte",
"Ob sie eine Kundenkarte hat"
],
0,
"Im Text: „Möchten Sie den Kassenbon?“ — er fragt nach dem Kassenbon."
]
],
"https://d8j0ntlcm91z4.cloudfront.net/user_38tIQPWpEsaUmk18tYN8mskaaAF/hf_20260820_074636_3550896c-745d-4cc7-8664-6db1beada997.mp3": [
[
"Wann hat der Kunde die Jacke gekauft?",
[
"Heute",
"Letzte Woche",
"Gestern"
],
2,
"Im Text: „ich habe gestern diese Jacke gekauft“ — also gestern."
],
[
"Was möchte die Verkäuferin sehen?",
[
"Den Ausweis",
"Den Kassenbon",
"Die Kundenkarte"
],
1,
"Im Text: „Haben Sie den Kassenbon dabei?“ — also den Kassenbon."
]
],
"https://d8j0ntlcm91z4.cloudfront.net/user_38tIQPWpEsaUmk18tYN8mskaaAF/hf_20260820_074636_6108584a-f350-41e1-a684-426e71f86d46.mp3": [
[
"Wann ist der Termin?",
[
"Donnerstag um zehn Uhr",
"Donnerstag um neun Uhr",
"Dienstag um neun Uhr"
],
1,
"Im Text: „am Donnerstag um neun Uhr“ — also Donnerstag um neun."
],
[
"Wofür braucht der Mann einen Termin?",
[
"Für einen neuen Ausweis",
"Für die Anmeldung",
"Für einen Mietvertrag"
],
1,
"Im Text: „brauche einen Termin für die Anmeldung“ — also für die Anmeldung."
]
],
"https://d8j0ntlcm91z4.cloudfront.net/user_38tIQPWpEsaUmk18tYN8mskaaAF/hf_20260820_074636_d27992ac-a290-42ea-82db-ef1e12131ea7.mp3": [
[
"Wie weit ist der Antrag am Anfang?",
[
"Fast fertig",
"Noch ganz leer",
"Schon komplett"
],
0,
"Im Text: „Ihr Antrag ist fast fertig.“ — also fast fertig."
],
[
"Was braucht die Frau vom Sachbearbeiter?",
[
"Einen Briefumschlag",
"Ein neues Formular",
"Einen Kugelschreiber"
],
2,
"Im Text: „Haben Sie einen Kugelschreiber?“ — also einen Kugelschreiber."
]
],
"https://d8j0ntlcm91z4.cloudfront.net/user_38tIQPWpEsaUmk18tYN8mskaaAF/hf_20260820_165859_c72beff6-b767-4a7f-bebd-25382f1dea3d.mp3": [
[
"Wen ruft Herr Yilmaz an?",
[
"Frau Weber",
"Frau Berger",
"Frau Nowak"
],
1,
"Im Text: „Guten Morgen, Frau Berger, hier ist Ali Yilmaz.“ — also Frau Berger."
],
[
"Was bringt Herr Yilmaz morgen mit?",
[
"Die Krankmeldung",
"Das Rezept",
"Den Arbeitsvertrag"
],
0,
"Im Text: „Morgen bringe ich die Krankmeldung mit.“ — also die Krankmeldung."
]
],
"https://d8j0ntlcm91z4.cloudfront.net/user_38tIQPWpEsaUmk18tYN8mskaaAF/hf_20260820_165859_45794f2b-c25d-4a53-ad91-e3dcfdd84a84.mp3": [
[
"Wann ist nächste Woche Feierabend?",
[
"Um 13:00 Uhr",
"Um 16:30 Uhr",
"Um 16:00 Uhr"
],
1,
"Im Text: „Der Feierabend bleibt wie immer um sechzehn Uhr dreißig.“ — also um 16:30 Uhr."
],
[
"Warum ändert sich die Mittagspause?",
[
"Die Kantine ist geschlossen.",
"Die Maschine läuft länger.",
"Es kommen neue Kollegen."
],
1,
"Im Text: „Die Maschine läuft länger, deshalb …“ — das ist der Grund."
]
],
"https://d8j0ntlcm91z4.cloudfront.net/user_38tIQPWpEsaUmk18tYN8mskaaAF/hf_20260820_165900_40b06e21-65be-43d0-b726-19b915ae9c5e.mp3": [
[
"Wann fährt der Zug laut Fahrplan ab?",
[
"Um 10:35 Uhr",
"Um 10:20 Uhr",
"Um 10:15 Uhr"
],
1,
"Im Text: „Abfahrt zehn Uhr zwanzig“ — also um 10:20 Uhr."
],
[
"Von welchem Gleis fährt der Zug heute?",
[
"Von Gleis zehn",
"Von Gleis fünf",
"Von Gleis acht"
],
2,
"Im Text: „Der Zug fährt heute von Gleis acht, nicht von Gleis fünf.“ — also Gleis acht."
]
],
"https://d8j0ntlcm91z4.cloudfront.net/user_38tIQPWpEsaUmk18tYN8mskaaAF/hf_20260820_165859_d63896a5-b1f6-4514-83c6-03d95e5796a7.mp3": [
[
"Bis wohin fährt dieser Bus?",
[
"Bis zum Marktplatz",
"Bis zum Bahnhof",
"Bis zum Krankenhaus"
],
0,
"Im Text: „dieser Bus fährt nur bis zum Marktplatz“ — also bis zum Marktplatz."
],
[
"Wohin möchte die Frau fahren?",
[
"Zum Marktplatz",
"Zum Krankenhaus",
"Zum Bahnhof"
],
1,
"Im Text: „fährt dieser Bus zum Krankenhaus?“ — sie möchte zum Krankenhaus."
]
],
"https://d8j0ntlcm91z4.cloudfront.net/user_38tIQPWpEsaUmk18tYN8mskaaAF/hf_20260820_165859_911f1932-2f75-4827-9794-020b26cf2763.mp3": [
[
"Was trinkt die Frau?",
[
"Ein Bier",
"Ein Wasser",
"Einen Saft"
],
1,
"Im Text: „Und ein Wasser.“ — also ein Wasser."
],
[
"Zu welcher Tageszeit ist die Frau im Restaurant?",
[
"Am Morgen",
"Am Mittag",
"Am Abend"
],
2,
"Im Text: „Guten Abend, was möchten Sie bestellen?“ — also am Abend."
]
],
"https://d8j0ntlcm91z4.cloudfront.net/user_38tIQPWpEsaUmk18tYN8mskaaAF/hf_20260820_165859_c8fe3bc8-3f93-4e47-97a5-d4092967e32f.mp3": [
[
"Was möchte der Mann am Anfang?",
[
"Zahlen",
"Bestellen",
"Die Speisekarte"
],
0,
"Im Text: „Wir möchten bitte zahlen.“ — also zahlen."
],
[
"Was hatte der Mann?",
[
"Die Suppe",
"Den Salat",
"Die Nudeln"
],
0,
"Im Text: „Ich hatte die Suppe.“ — also die Suppe."
]
],
"https://d8j0ntlcm91z4.cloudfront.net/user_38tIQPWpEsaUmk18tYN8mskaaAF/hf_20260820_165900_8d82df0c-f63e-4bd9-83a1-5076dae453d8.mp3": [
[
"Warum hat Tom am Samstag keine Zeit?",
[
"Er arbeitet.",
"Er ist krank.",
"Er hat Besuch."
],
0,
"Im Text: „Am Samstag leider nicht, da arbeite ich.“ — er arbeitet."
],
[
"Wo treffen sich Anna und Tom?",
[
"Am Freibad",
"Im Café",
"Am Bahnhof"
],
0,
"Im Text: „dann Sonntag um drei am Freibad?“ — also am Freibad."
]
],
"https://d8j0ntlcm91z4.cloudfront.net/user_38tIQPWpEsaUmk18tYN8mskaaAF/hf_20260820_165859_c43803b5-a847-4081-b218-16d33478be19.mp3": [
[
"Wie ist das Wetter am Vormittag?",
[
"Bewölkt",
"Regnerisch",
"Sonnig"
],
2,
"Im Text: „Am Vormittag scheint noch die Sonne.“ — also sonnig."
],
[
"Wie warm wird es heute?",
[
"Zwanzig Grad",
"Sechs Grad",
"Sechzehn Grad"
],
2,
"Im Text: „Die Temperatur liegt bei sechzehn Grad.“ — also sechzehn Grad."
]
],
"https://d8j0ntlcm91z4.cloudfront.net/user_38tIQPWpEsaUmk18tYN8mskaaAF/hf_20260821_081944_54fa390a-5232-497f-8537-330181242442.mp3": [
[
"Wie viel kostet der Kaffee?",
[
"2,80 €",
"8,20 €",
"2,18 €"
],
0,
"Im Text: „Das macht zwei Euro achtzig.“ — also 2,80 €."
],
[
"Zu welcher Tageszeit ist das Gespräch?",
[
"Am Mittag",
"Am Morgen",
"Am Abend"
],
1,
"Im Text: „Guten Morgen, was darf es sein?“ — also am Morgen."
]
],
"https://d8j0ntlcm91z4.cloudfront.net/user_38tIQPWpEsaUmk18tYN8mskaaAF/hf_20260821_081944_78d9e18b-389c-4054-82fc-126c36a74aee.mp3": [
[
"Was sagt der Verkäufer über die Brötchen?",
[
"Sie sind ganz frisch.",
"Sie sind heute billig.",
"Sie sind von gestern."
],
0,
"Im Text: „Sie sind ganz frisch.“ — also ganz frisch."
],
[
"Was möchte die Frau noch dazu?",
[
"Eine Brezel",
"Ein Brot",
"Eine Tüte"
],
2,
"Im Text: „Und bitte eine Tüte dazu.“ — also eine Tüte."
]
],
"https://d8j0ntlcm91z4.cloudfront.net/user_38tIQPWpEsaUmk18tYN8mskaaAF/hf_20260821_081944_1d16c3ba-722e-487f-b916-3e02263ee1da.mp3": [
[
"Was soll die Kundin zeigen?",
[
"Ihren Ausweis",
"Ihren Mietvertrag",
"Ihre Bankkarte"
],
0,
"Im Text: „Haben Sie Ihren Ausweis dabei?“ — also ihren Ausweis."
],
[
"Was kostet das Konto für die Kundin?",
[
"Zwei Euro im Monat",
"Fünf Euro im Monat",
"Nichts"
],
2,
"Im Text: „für Sie ist es ohne Gebühr“ — es kostet also nichts."
]
],
"https://d8j0ntlcm91z4.cloudfront.net/user_38tIQPWpEsaUmk18tYN8mskaaAF/hf_20260821_081944_78d3cef4-c84b-45ce-be03-2321d15d9353.mp3": [
[
"Was soll die Mitarbeiterin machen?",
[
"Eine neue Karte schicken",
"Die Karte sperren",
"Das Konto schließen"
],
1,
"Im Text: „Können Sie sie bitte sperren?“ — sie soll die Karte sperren."
],
[
"Wann ist der Mann geboren?",
[
"Am 3. Mai 1990",
"Am 3. März 1990",
"Am 5. Mai 1990"
],
0,
"Im Text: „geboren am 3. Mai 1990“ — also am 3. Mai 1990."
]
],
"https://d8j0ntlcm91z4.cloudfront.net/user_38tIQPWpEsaUmk18tYN8mskaaAF/hf_20260821_081944_ab814982-937a-4b80-b647-87e2c6f16735.mp3": [
[
"Was soll die Frau aufschreiben?",
[
"Name und Telefonnummer",
"Empfänger und Absender",
"Adresse und Gewicht"
],
1,
"Im Text: „Bitte schreiben Sie hier den Empfänger und den Absender.“"
],
[
"Was kostet das Paket?",
[
"16,99 €",
"19,99 €",
"6,99 €"
],
0,
"Im Text: „Sechzehn Euro neunundneunzig.“ — also 16,99 €."
]
],
"https://d8j0ntlcm91z4.cloudfront.net/user_38tIQPWpEsaUmk18tYN8mskaaAF/hf_20260821_081944_f0a95e5e-07be-47ae-abfd-95ae0050bf84.mp3": [
[
"Wer war nicht da?",
[
"Die Postbotin",
"Herr Peters",
"Die Nachbarin"
],
2,
"Im Text: „Ihre Nachbarin war leider nicht da.“ — also die Nachbarin."
],
[
"Wohin legt der Bote die Karte?",
[
"Vor die Wohnungstür",
"In Wohnung drei",
"In den Briefkasten"
],
2,
"Im Text: „Die Karte lege ich in Ihren Briefkasten.“ — also in den Briefkasten."
]
],
"https://d8j0ntlcm91z4.cloudfront.net/user_38tIQPWpEsaUmk18tYN8mskaaAF/hf_20260821_081944_1850ecc1-5158-4c25-b8c0-955b646de0ed.mp3": [
[
"Warum geht Mittwoch nicht?",
[
"Er hat da Urlaub.",
"Er arbeitet da.",
"Er ist da krank."
],
1,
"Im Text: „Da arbeite ich leider.“ — er arbeitet am Mittwoch."
],
[
"Was möchte der Mann im Salon machen lassen?",
[
"Die Haare färben",
"Die Haare schneiden",
"Die Haare waschen"
],
1,
"Im Text: „einen Termin zum Schneiden“ — also die Haare schneiden."
]
],
"https://d8j0ntlcm91z4.cloudfront.net/user_38tIQPWpEsaUmk18tYN8mskaaAF/hf_20260821_081944_2cc70206-1ca2-432b-9618-4a275bbdc7aa.mp3": [
[
"Wie viel soll die Friseurin abschneiden?",
[
"Etwa zehn Zentimeter",
"Etwa fünf Zentimeter",
"Etwa zwei Zentimeter"
],
2,
"Im Text: „Nur die Spitzen bitte, etwa zwei Zentimeter.“"
],
[
"Was möchte die Kundin heute nicht?",
[
"Die Spitzen schneiden",
"Die Haare föhnen",
"Die Haare färben"
],
2,
"Im Text: „Nein danke, heute keine Farbe.“ — sie möchte keine Farbe."
]
],
"https://d8j0ntlcm91z4.cloudfront.net/user_38tIQPWpEsaUmk18tYN8mskaaAF/hf_20260821_101058_18e0ce27-13de-4618-a76e-e657eae94495.mp3": [
[
"Seit wann funktioniert das Internet nicht?",
[
"Seit einer Woche",
"Seit gestern Abend",
"Seit heute Morgen"
],
1,
"Im Text: „seit gestern Abend nicht mehr“ — also seit gestern Abend."
],
[
"Was hat die Person schon gemacht?",
[
"Den Router neu gestartet",
"Ein neues Kabel gekauft",
"Einen Techniker gerufen"
],
0,
"Im Text: „Ich habe ihn schon aus- und wieder eingeschaltet.“ — also neu gestartet."
]
],
"https://d8j0ntlcm91z4.cloudfront.net/user_38tIQPWpEsaUmk18tYN8mskaaAF/hf_20260821_101058_88da1c4a-bb84-401c-b443-298fbc804cce.mp3": [
[
"Wann ist das Datenvolumen leer?",
[
"Nach zwei Wochen",
"Nach einer Woche",
"Nach drei Wochen"
],
0,
"Im Text: „immer schon nach zwei Wochen leer“ — also nach zwei Wochen."
],
[
"Was hat die Kundin schon bei der Firma?",
[
"Einen Termin",
"Einen Vertrag",
"Ein Konto"
],
1,
"Im Text: „ich habe einen Vertrag bei Ihnen“ — also einen Vertrag."
]
],
"https://d8j0ntlcm91z4.cloudfront.net/user_38tIQPWpEsaUmk18tYN8mskaaAF/hf_20260821_101058_821c13bc-f3e1-4332-ac81-91045c7cc1cf.mp3": [
[
"In welche Klasse geht Mila?",
[
"In die 3b",
"In die 3a",
"In die 2b"
],
0,
"Im Text: „Meine Tochter Mila aus der Klasse 3b“ — also in die 3b."
],
[
"Was schickt die Mutter morgen mit?",
[
"Eine Entschuldigung",
"Das Schulbuch",
"Die Hausaufgaben"
],
0,
"Im Text: „Ich schicke morgen eine Entschuldigung mit.“"
]
],
"https://d8j0ntlcm91z4.cloudfront.net/user_38tIQPWpEsaUmk18tYN8mskaaAF/hf_20260821_101058_07b2f71a-a542-47b6-a1e6-49642beb62e6.mp3": [
[
"Wann sind die Kinder zurück?",
[
"Um vier Uhr",
"Um drei Uhr",
"Um acht Uhr"
],
1,
"Im Text: „und sind um drei Uhr zurück“ — also um drei."
],
[
"Wie fahren die Kinder in den Zoo?",
[
"Mit dem Bus",
"Mit dem Fahrrad",
"Mit dem Zug"
],
0,
"Im Text: „Wir fahren um acht Uhr mit dem Bus los“ — also mit dem Bus."
]
],
"https://d8j0ntlcm91z4.cloudfront.net/user_38tIQPWpEsaUmk18tYN8mskaaAF/hf_20260821_101058_0cef6e50-9fad-43f7-88dd-c25cbada5947.mp3": [
[
"Wann macht das Auto ein lautes Geräusch?",
[
"Beim Parken",
"Beim Halten",
"Beim Starten"
],
1,
"Im Text: „Mein Auto macht beim Halten ein lautes Geräusch.“"
],
[
"Bis wann soll das Auto in der Werkstatt bleiben?",
[
"Bis heute Abend",
"Bis Freitag",
"Bis morgen"
],
2,
"Im Text: „Können Sie den Wagen bis morgen hierlassen?“ — also bis morgen."
]
],
"https://d8j0ntlcm91z4.cloudfront.net/user_38tIQPWpEsaUmk18tYN8mskaaAF/hf_20260821_101058_d6f10a3b-432c-4a3b-a467-ac0fe1f96eea.mp3": [
[
"Wo steht das Auto?",
[
"Am Bahnhof in Köln",
"Am Flughafen in Köln",
"Am Marktplatz in Köln"
],
0,
"Im Text: „Am Bahnhof in Köln.“ — dort steht das Auto."
],
[
"Wann kommt der Abschleppwagen?",
[
"In dreizehn Minuten",
"In einer Stunde",
"In dreißig Minuten"
],
2,
"Im Text: „ein Wagen kommt in dreißig Minuten“ — also in dreißig Minuten."
]
],
"https://d8j0ntlcm91z4.cloudfront.net/user_38tIQPWpEsaUmk18tYN8mskaaAF/hf_20260821_101058_dc534431-d9b0-4574-a7e5-478b2f2bb779.mp3": [
[
"Was ist das Problem mit der Jeans?",
[
"Sie ist zu lang.",
"Sie ist zu weit.",
"Sie ist zu eng."
],
2,
"Im Text: „sie ist leider zu eng“ — also zu eng."
],
[
"Was probiert die Kundin an?",
[
"Eine Jacke",
"Einen Rock",
"Eine Jeans"
],
2,
"Im Text: „Und, passt die Jeans?“ — sie probiert eine Jeans an."
]
],
"https://d8j0ntlcm91z4.cloudfront.net/user_38tIQPWpEsaUmk18tYN8mskaaAF/hf_20260821_101058_e08d9611-62f9-436f-a039-6fff203b96df.mp3": [
[
"Was ist das Problem mit dem Pullover?",
[
"Er ist zu weit.",
"Er ist zu eng.",
"Er ist zu kurz."
],
0,
"Im Text: „Er ist mir zu weit.“ — also zu weit."
],
[
"Was soll der Kunde zeigen?",
[
"Die Kundenkarte",
"Den Ausweis",
"Den Kassenbon"
],
2,
"Im Text: „Haben Sie den Kassenbon dabei?“ — also den Kassenbon."
]
],
"ton/hoeren-a1/a1-begruessen-1.mp3": [
[
"Wie heißt die Nachbarin?",
[
"Frau Weber",
"Frau Yilmaz",
"Frau Berger"
],
2,
"Im Text: „Ich bin Frau Berger.“ — also Frau Berger."
],
[
"Wo wohnt Frau Berger?",
[
"Im Erdgeschoss",
"Oben rechts",
"Oben links"
],
0,
"Im Text: „Ich wohne unten im Erdgeschoss.“ — also im Erdgeschoss."
]
],
"ton/hoeren-a1/a1-begruessen-2.mp3": [
[
"Woher kommt Nadia?",
[
"Aus Tunesien",
"Aus Ägypten",
"Aus Marokko"
],
2,
"Im Text: „Ich komme aus Marokko“ — also aus Marokko."
],
[
"Wer ist Julia?",
[
"Nadias Freundin",
"Die Lehrerin",
"Eine Schülerin"
],
1,
"Im Text: „Mein Name ist Julia. Ich bin Ihre Lehrerin.“"
]
],
"ton/hoeren-a1/a1-begruessen-3.mp3": [
[
"Wie schreibt man den Namen?",
[
"Schewzuk",
"Schewczyk",
"Schewczuk"
],
2,
"Im Text wird buchstabiert: „S, C, H, E, W, C, Z, U, K“ — also Schewczuk."
],
[
"Was sagt die andere Person am Ende?",
[
"„Das ist schön.“",
"„Jetzt habe ich es.“",
"„Bitte noch einmal.“"
],
1,
"Im Text: „Vielen Dank, jetzt habe ich es.“"
]
],
"ton/hoeren-a1/a1-begruessen-4.mp3": [
[
"Was ist die Frau von Beruf?",
[
"Krankenpflegerin",
"Kinderärztin",
"Verkäuferin"
],
0,
"Im Text: „Ich bin Krankenpflegerin.“"
],
[
"Wie viele Kinder hat die Frau?",
[
"Einen Sohn",
"Eine Tochter",
"Zwei Töchter"
],
1,
"Im Text: „Wir haben eine Tochter.“ — also eine Tochter."
]
],
"ton/hoeren-a1/a1-zahlen-1.mp3": [
[
"Wie bezahlt die Person?",
[
"Bar",
"Mit Karte",
"Mit Gutschein"
],
1,
"Im Text: „Mit Karte, bitte.“ — also mit Karte."
],
[
"Was möchte die Person noch?",
[
"Den Kassenbon",
"Eine Kundenkarte",
"Eine Tüte"
],
0,
"Im Text: „Möchten Sie den Kassenbon? Ja, bitte.“"
]
],
"ton/hoeren-a1/a1-zahlen-2.mp3": [
[
"Was ist heute im Angebot?",
[
"Äpfel",
"Birnen",
"Bananen"
],
0,
"Im Text: „heute im Angebot: ein Kilo Äpfel“ — also Äpfel."
],
[
"Wie viel kostet ein Kilo?",
[
"2,99 €",
"1,90 €",
"1,99 €"
],
2,
"Im Text: „für nur einen Euro neunundneunzig“ — also 1,99 €."
]
],
"ton/hoeren-a1/a1-zahlen-3.mp3": [
[
"In welchem Stock ist die Wohnung?",
[
"Im dritten Stock",
"Im zweiten Stock",
"Im vierten Stock"
],
0,
"Im Text: „dritter Stock“ — also im dritten Stock."
],
[
"Wie ist die Postleitzahl?",
[
"10097",
"01079",
"01097"
],
2,
"Im Text: „Null eins null neun sieben.“ — also 01097."
]
],
"ton/hoeren-a1/a1-zahlen-4.mp3": [
[
"Wie viel kostet der Kaffee?",
[
"2,40 €",
"7,60 €",
"2,60 €"
],
0,
"Im Text: „Der Kaffee kostet zwei Euro vierzig.“ — also 2,40 €."
],
[
"Womit bezahlt der Gast?",
[
"Mit zehn Euro",
"Mit der Karte",
"Mit zwanzig Euro"
],
0,
"Im Text: „ich habe nur einen Zehn Euro Schein“ — er zahlt mit zehn Euro."
]
],
"ton/hoeren-a1/a1-uhrzeit-1.mp3": [
[
"Wie heißt der Arzt?",
[
"Doktor Wagner",
"Doktor Berger",
"Doktor Weber"
],
2,
"Im Text: „Praxis Doktor Weber“ — also Doktor Weber."
],
[
"Was braucht die Person?",
[
"Eine Krankmeldung",
"Einen Termin",
"Ein Rezept"
],
1,
"Im Text: „ich brauche einen Termin“ — also einen Termin."
]
],
"ton/hoeren-a1/a1-uhrzeit-2.mp3": [
[
"Wohin fährt der Zug?",
[
"Nach Hamburg",
"Nach Hannover",
"Nach Bremen"
],
0,
"Im Text: „Der Zug nach Hamburg“ — also nach Hamburg."
],
[
"Für welches Gleis ist die Information?",
[
"Gleis zwei",
"Gleis zehn",
"Gleis drei"
],
2,
"Im Text: „eine Information für Gleis drei“ — also Gleis drei."
]
],
"ton/hoeren-a1/a1-uhrzeit-3.mp3": [
[
"Warum kann Ella nicht kommen?",
[
"Sie hat Besuch.",
"Sie muss arbeiten.",
"Sie ist krank."
],
2,
"Im Text: „Ich kann heute Abend nicht kommen, ich bin krank.“"
],
[
"Wann kann Ella nicht kommen?",
[
"Am Samstag",
"Heute Abend",
"Morgen früh"
],
1,
"Im Text: „Ich kann heute Abend nicht kommen“ — also heute Abend."
]
],
"ton/hoeren-a1/a1-uhrzeit-4.mp3": [
[
"Bis wann arbeitet die zweite Person heute?",
[
"Bis halb sechs",
"Bis sieben Uhr",
"Bis sechs Uhr"
],
1,
"Im Text: „Ich muss bis sieben arbeiten.“ — also bis sieben."
],
[
"Wann hat die zweite Person morgen frei?",
[
"Am Abend",
"Am Nachmittag",
"Am Vormittag"
],
2,
"Im Text: „morgen habe ich schon am Vormittag frei“ — also am Vormittag."
]
],
"ton/hoeren-a1/a1-baecker-1.mp3": [
[
"Wie viele Brötchen möchte der Kunde?",
[
"Zwei",
"Vier",
"Drei"
],
2,
"Im Text: „Drei Brötchen und ein Bauernbrot“ — also drei."
],
[
"Welches Brot kauft der Kunde?",
[
"Ein Bauernbrot",
"Ein Weißbrot",
"Ein Vollkornbrot"
],
0,
"Im Text: „und ein Bauernbrot, bitte“ — also ein Bauernbrot."
]
],
"ton/hoeren-a1/a1-baecker-2.mp3": [
[
"Wie viele Stück Apfelkuchen sind noch da?",
[
"Ein Stück",
"Zwei Stück",
"Drei Stück"
],
1,
"Im Text: „Ja, zwei Stück sind noch da.“ — also zwei."
],
[
"Für wen ist der Käsekuchen?",
[
"Für ihre Tochter",
"Für ihre Mutter",
"Für ihren Sohn"
],
0,
"Im Text: „ein Stück Käsekuchen für meine Tochter“"
]
],
"ton/hoeren-a1/a1-baecker-3.mp3": [
[
"Wie viele Brezeln kauft die Person?",
[
"Drei",
"Vier",
"Zwei"
],
1,
"Im Text: „Dann bitte vier Stück in eine Tüte.“ — also vier."
],
[
"Wie möchte die Person die Brezeln?",
[
"In einer Tüte",
"In einer Box",
"Auf einem Teller"
],
0,
"Im Text: „vier Stück in eine Tüte“ — also in einer Tüte."
]
],
"ton/hoeren-a1/a1-baecker-4.mp3": [
[
"Was trinkt die Person?",
[
"Einen Tee",
"Einen Saft",
"Einen Kaffee"
],
2,
"Im Text: „Und einen Kaffee zum Mitnehmen.“ — also einen Kaffee."
],
[
"Wie viel kostet alles zusammen?",
[
"8,40 €",
"4,80 €",
"4,18 €"
],
1,
"Im Text: „Das macht vier Euro achtzig.“ — also 4,80 €."
]
],
"ton/hoeren-a1/a1-weg-1.mp3": [
[
"Was sucht die Person?",
[
"Die Apotheke",
"Die Haltestelle",
"Den Bahnhof"
],
1,
"Im Text: „wo ist die nächste Haltestelle?“ — sie sucht die Haltestelle."
],
[
"Bis wohin geht man zuerst geradeaus?",
[
"Bis zur Ampel",
"Bis zur Brücke",
"Bis zur Kreuzung"
],
0,
"Im Text: „Gehen Sie hier geradeaus bis zur Ampel.“"
]
],
"ton/hoeren-a1/a1-weg-2.mp3": [
[
"Worüber geht man zum Bahnhof?",
[
"Über den Platz",
"Über die Kreuzung",
"Über die Brücke"
],
2,
"Im Text: „Sie gehen über die Brücke“ — also über die Brücke."
],
[
"Wo ist der Bahnhof dann?",
[
"Auf der rechten Seite",
"Auf der linken Seite",
"Direkt vor der Brücke"
],
1,
"Im Text: „Der Bahnhof ist dann auf der linken Seite.“"
]
],
"ton/hoeren-a1/a1-weg-3.mp3": [
[
"Was ist das Problem der Person?",
[
"Sie hat kein Handy.",
"Sie ist krank.",
"Sie hat sich verlaufen."
],
2,
"Im Text: „Ich habe mich verlaufen.“ — also hat sie sich verlaufen."
],
[
"Was sucht die Person?",
[
"Den Supermarkt",
"Die Apotheke",
"Die Bank"
],
1,
"Im Text: „Ich suche die Apotheke.“ — also die Apotheke."
]
],
"ton/hoeren-a1/a1-weg-4.mp3": [
[
"Wohin möchte die Person?",
[
"Zum Bahnhof",
"Zum Krankenhaus",
"Zum Parkplatz"
],
1,
"Im Text: „Wie komme ich zum Krankenhaus?“ — also zum Krankenhaus."
],
[
"Wo soll man links fahren?",
[
"An der nächsten Ampel",
"An der nächsten Kreuzung",
"An der zweiten Straße"
],
1,
"Im Text: „Fahren Sie an der nächsten Kreuzung links.“"
]
],
"ton/hoeren-a1/a1-telefon-1.mp3": [
[
"Wohin geht Elena gleich?",
[
"Zum Arzt",
"Zur Apotheke",
"Zur Arbeit"
],
0,
"Im Text: „Ich gehe gleich zum Arzt“ — also zum Arzt."
],
[
"Wann schickt Elena die Krankmeldung?",
[
"Noch heute",
"Am Montag",
"Morgen früh"
],
0,
"Im Text: „schicke die Krankmeldung noch heute“ — also noch heute."
]
],
"ton/hoeren-a1/a1-telefon-2.mp3": [
[
"Wen möchte der Anrufer sprechen?",
[
"Herrn Klein",
"Frau Klein",
"Herrn Lindner"
],
0,
"Im Text: „ich möchte Herrn Klein sprechen“ — also Herrn Klein."
],
[
"Was fragt die Frau am Ende?",
[
"Ob er eine Nachricht hinterlässt",
"Ob er später anrufen möchte",
"Ob er kurz warten möchte"
],
1,
"Im Text: „Möchten Sie später noch einmal anrufen?“"
]
],
"ton/hoeren-a1/a1-telefon-3.mp3": [
[
"Bis wann ist die Praxis heute geöffnet?",
[
"Bis zehn Uhr",
"Bis zwölf Uhr",
"Bis vierzehn Uhr"
],
1,
"Im Text: „Wir haben heute bis zwölf Uhr geöffnet.“ — also bis zwölf."
],
[
"Was macht die Praxis danach?",
[
"Sie schreibt einen Brief.",
"Sie schickt eine SMS.",
"Sie ruft zurück."
],
2,
"Im Text: „Wir rufen Sie dann zurück.“ — die Praxis ruft zurück."
]
],
"ton/hoeren-a1/a1-telefon-4.mp3": [
[
"Wann ist der Termin?",
[
"Am Montag um neun Uhr",
"Am Mittwoch um neun Uhr",
"Am Montag um zehn Uhr"
],
0,
"Im Text: „Ihr Termin ist am Montag um neun Uhr.“"
],
[
"Was macht die andere Person?",
[
"Sie schreibt eine E-Mail.",
"Sie spricht langsamer.",
"Sie spricht lauter."
],
1,
"Im Text: „Natürlich, ich spreche langsamer.“"
]
],
"https://d8j0ntlcm91z4.cloudfront.net/user_38tIQPWpEsaUmk18tYN8mskaaAF/hf_20260620_131442_c95f4cdc-ce28-4601-870d-70f364ebb589.mp3": [
[
"Von welcher Firma ist Frau Weber?",
[
"Von der Firma Sommer",
"Von der Firma Sonnig",
"Von der Firma Berger"
],
1,
"Im Text: „hier ist Frau Weber von der Firma Sonnig“."
],
[
"Wo findet das Gespräch statt?",
[
"Im Büro der Firma",
"Am Telefon",
"Online per Video"
],
0,
"Im Text: „Bitte kommen Sie … in unser Büro.“ — also im Büro der Firma."
]
],
"https://d8j0ntlcm91z4.cloudfront.net/user_38tIQPWpEsaUmk18tYN8mskaaAF/hf_20260620_131443_75500bf0-73e8-4f43-afaa-29e30eab5ec8.mp3": [
[
"Wann ist das Teammeeting?",
[
"Heute um 15 Uhr",
"Heute um 16 Uhr",
"Morgen um 15 Uhr"
],
0,
"Im Text: „heute Nachmittag um fünfzehn Uhr“ — also heute um 15 Uhr."
],
[
"Wie lange dauert das Meeting ungefähr?",
[
"Eine Stunde",
"Eine halbe Stunde",
"Zwei Stunden"
],
0,
"Im Text: „Das Meeting dauert ungefähr eine Stunde.“"
]
],
"https://d8j0ntlcm91z4.cloudfront.net/user_38tIQPWpEsaUmk18tYN8mskaaAF/hf_20260620_131444_6e99fd47-20ca-4fc1-b74f-3d9437c6df27.mp3": [
[
"Wer ist heute krank?",
[
"Der Chef",
"Frau Klein",
"Herr Becker"
],
1,
"Im Text: „Frau Klein ist heute leider krank.“ — also Frau Klein."
],
[
"Was soll Herr Becker schnell machen?",
[
"Frau Klein besuchen",
"Den Chef zurückrufen",
"Eine E-Mail schreiben"
],
1,
"Im Text: „Rufen Sie mich bitte schnell zurück.“ — er soll zurückrufen."
]
],
"https://d8j0ntlcm91z4.cloudfront.net/user_38tIQPWpEsaUmk18tYN8mskaaAF/hf_20260620_131446_e3563af5-b4af-41c0-8495-8d4e94129d8f.mp3": [
[
"Wen sucht die Firma?",
[
"Eine Mitarbeiterin fürs Büro",
"Eine Mitarbeiterin fürs Lager",
"Eine Mitarbeiterin für die Kantine"
],
0,
"Im Text: „eine neue Mitarbeiterin für das Büro“."
],
[
"Wie soll man die Bewerbung schicken?",
[
"Per Post",
"Per Fax",
"Per E-Mail"
],
2,
"Im Text: „Ihre Bewerbung können Sie … per E-Mail schicken.“"
]
],
"https://d8j0ntlcm91z4.cloudfront.net/user_38tIQPWpEsaUmk18tYN8mskaaAF/hf_20260620_131447_ad1e78cb-847a-49df-99f2-d5cc49c4c4ee.mp3": [
[
"Wann ist die Präsentation?",
[
"Übermorgen",
"Heute Nachmittag",
"Morgen"
],
2,
"Im Text: „bei der Präsentation für morgen“ — also morgen."
],
[
"In welcher Abteilung arbeitet Lena?",
[
"In der Buchhaltung",
"Im Marketing",
"Im Vertrieb"
],
1,
"Im Text: „hier ist Lena aus dem Marketing“."
]
],
"https://d8j0ntlcm91z4.cloudfront.net/user_38tIQPWpEsaUmk18tYN8mskaaAF/hf_20260707_060857_dbb7b186-efd0-42d6-b8ee-84c317c4aa54.wav": [
[
"Was hat Frau Berger besonders gefallen?",
[
"Die Eigeninitiative der Person",
"Die Kenntnisse in Logistik",
"Die lange Berufserfahrung"
],
0,
"Im Text: „Uns hat besonders gefallen, dass Sie … viel Eigeninitiative zeigen.“"
],
[
"Bis wann soll sich die Person melden?",
[
"Bis Donnerstag",
"Bis Montag",
"Bis Freitag"
],
2,
"Im Text: „Bitte melden Sie sich bis Freitag bei mir.“"
]
],
"https://d8j0ntlcm91z4.cloudfront.net/user_38tIQPWpEsaUmk18tYN8mskaaAF/hf_20260620_141417_26fd009a-3daa-4cf5-a550-87b6089c4662.mp3": [
[
"Warum fällt der Deutschunterricht aus?",
[
"Die Lehrerin ist krank.",
"Es gibt einen Ausflug.",
"Die Schule ist zu."
],
0,
"Im Text: „Frau Schmidt ist krank.“ — deshalb fällt der Unterricht aus."
],
[
"Mit welchem Fach beginnt der Unterricht am Montag?",
[
"Mit Deutsch",
"Mit Englisch",
"Mit Mathematik"
],
2,
"Im Text: „Der Unterricht beginnt erst um neun Uhr mit Mathematik.“"
]
],
"https://d8j0ntlcm91z4.cloudfront.net/user_38tIQPWpEsaUmk18tYN8mskaaAF/hf_20260620_141418_09ac171b-4c5b-469a-912c-ce5ed5b1e5fe.mp3": [
[
"Wann ist die Deutschprüfung?",
[
"Am Freitag um zehn Uhr",
"Am Freitag um zwölf Uhr",
"Am Donnerstag um zehn Uhr"
],
0,
"Im Text: „Die Deutschprüfung ist am Freitag um zehn Uhr“."
],
[
"In welchem Raum ist die Prüfung?",
[
"In Raum zwanzig",
"In Raum zwölf",
"In Raum zehn"
],
1,
"Im Text: „in Raum zwölf“ — also Raum zwölf."
]
],
"https://d8j0ntlcm91z4.cloudfront.net/user_38tIQPWpEsaUmk18tYN8mskaaAF/hf_20260620_141419_f2e7c133-682e-4d8b-afb2-16cfbdd1c1be.mp3": [
[
"Wie heißt das Buch?",
[
"„Deutsch für den Beruf“",
"„Deutsch für den Alltag“",
"„Deutsch für die Schule“"
],
0,
"Im Text: „Ihr Buch ‚Deutsch für den Beruf‘ …“."
],
[
"Was soll man tun, wenn man das Buch länger braucht?",
[
"Eine E-Mail schreiben",
"Ein neues Buch kaufen",
"Die Bibliothek anrufen"
],
2,
"Im Text: „Wenn Sie es länger brauchen, rufen Sie uns bitte an.“"
]
],
"https://d8j0ntlcm91z4.cloudfront.net/user_38tIQPWpEsaUmk18tYN8mskaaAF/hf_20260620_141421_40b63495-7443-4e0e-9dcd-99558eb24cec.mp3": [
[
"Wie oft findet der Kurs statt?",
[
"Dreimal pro Woche",
"Einmal pro Woche",
"Zweimal pro Woche"
],
2,
"Im Text: „Der Kurs findet zweimal pro Woche statt.“"
],
[
"Wer ruft an?",
[
"Die Stadtbibliothek",
"Die Sprachschule Aktiv",
"Die Volkshochschule"
],
1,
"Im Text: „hier ist die Sprachschule Aktiv“."
]
],
"https://d8j0ntlcm91z4.cloudfront.net/user_38tIQPWpEsaUmk18tYN8mskaaAF/hf_20260620_141422_778c7085-6008-4403-aeaa-c710ef8cf0f5.mp3": [
[
"Wie viel kostet ein Kilo Äpfel?",
[
"Zwei Euro",
"Einen Euro",
"Achtzehn Cent"
],
1,
"Im Text: „Alle Äpfel kosten nur einen Euro pro Kilo.“"
],
[
"Bis wann gilt das Angebot?",
[
"Bis 20 Uhr",
"Bis 16 Uhr",
"Bis 18 Uhr"
],
2,
"Im Text: „Das Angebot gilt nur bis achtzehn Uhr.“"
]
],
"https://d8j0ntlcm91z4.cloudfront.net/user_38tIQPWpEsaUmk18tYN8mskaaAF/hf_20260620_141424_3c27a784-0a87-4996-9d7a-4e8df2030e5c.mp3": [
[
"Wann schließt das Geschäft?",
[
"In zwanzig Minuten",
"In zehn Minuten",
"In fünf Minuten"
],
1,
"Im Text: „Unser Geschäft schließt in zehn Minuten.“"
],
[
"Wann öffnet das Geschäft morgen?",
[
"Um zehn Uhr",
"Um acht Uhr",
"Um neun Uhr"
],
1,
"Im Text: „Wir öffnen morgen wieder um acht Uhr.“"
]
],
"https://d8j0ntlcm91z4.cloudfront.net/user_38tIQPWpEsaUmk18tYN8mskaaAF/hf_20260620_141426_cd030c30-c272-4d87-8a04-57d3add681f2.mp3": [
[
"Wo kann man die Karte abholen?",
[
"Bei der Post",
"Am Automaten",
"In der Filiale"
],
2,
"Im Text: „in unserer Filiale abholen“ — also in der Filiale."
],
[
"Was soll man mitbringen?",
[
"Den Ausweis",
"Den Kontoauszug",
"Die alte Karte"
],
0,
"Im Text: „Bringen Sie bitte Ihren Ausweis mit.“"
]
],
"https://d8j0ntlcm91z4.cloudfront.net/user_38tIQPWpEsaUmk18tYN8mskaaAF/hf_20260620_141427_18ed08b0-71d2-4a8e-b152-86aa71e6dbea.mp3": [
[
"Wo kann man das Paket abholen?",
[
"In der Postfiliale",
"In der Packstation",
"Beim Nachbarn"
],
1,
"Im Text: „Sie können es … in der Packstation abholen.“"
],
[
"Ab wann kann man das Paket abholen?",
[
"Ab heute Abend",
"Ab Montag",
"Ab morgen"
],
2,
"Im Text: „Sie können es ab morgen … abholen.“"
]
],
"https://d8j0ntlcm91z4.cloudfront.net/user_38tIQPWpEsaUmk18tYN8mskaaAF/hf_20260720_051331_d9be7ee3-812a-46f3-977a-b636865a574a.wav": [
[
"Warum meldet sich die Sparkasse?",
[
"Der Kunde wollte einen Spartipp.",
"Das Konto des Kunden ist leer.",
"Der Kunde wollte einen Kredit."
],
0,
"Im Text: „Sie haben nach einem Spartipp gefragt.“"
],
[
"Worauf soll man beim Einkaufen achten?",
[
"Auf Bio und Regionales",
"Auf Rabatte und Schnäppchen",
"Auf Qualität und Marken"
],
1,
"Im Text: „Achten Sie außerdem beim Einkaufen auf Rabatte und Schnäppchen.“"
]
],
"https://d8j0ntlcm91z4.cloudfront.net/user_38tIQPWpEsaUmk18tYN8mskaaAF/hf_20260620_141429_65070025-e0b2-4973-b484-d4fa42fe8ff9.mp3": [
[
"Für wie viele Personen ist der Tisch?",
[
"Für fünf Personen",
"Für vier Personen",
"Für drei Personen"
],
1,
"Im Text: „Ihren Tisch für vier Personen“."
],
[
"Was soll man tun, wenn sich etwas ändert?",
[
"Online neu buchen",
"Eine E-Mail schicken",
"Im Restaurant anrufen"
],
2,
"Im Text: „Wenn sich etwas ändert, rufen Sie uns bitte an.“"
]
],
"https://d8j0ntlcm91z4.cloudfront.net/user_38tIQPWpEsaUmk18tYN8mskaaAF/hf_20260620_141431_aba534b5-a0ec-4fc0-ad2a-69259d2fbaa1.mp3": [
[
"Wie lange braucht man für die Suppe?",
[
"Dreißig Minuten",
"Zwanzig Minuten",
"Zehn Minuten"
],
1,
"Im Text: „In zwanzig Minuten ist die Suppe fertig.“"
],
[
"Welche Suppe ist das?",
[
"Eine Kartoffelsuppe",
"Eine Zwiebelsuppe",
"Eine Tomatensuppe"
],
2,
"Im Text: „Für eine schnelle Tomatensuppe …“."
]
],
"https://d8j0ntlcm91z4.cloudfront.net/user_38tIQPWpEsaUmk18tYN8mskaaAF/hf_20260620_141432_cfc04ffc-e139-445e-b5eb-7d7c4ff41913.mp3": [
[
"Was ist heute im Angebot?",
[
"Brötchen",
"Apfelkuchen",
"Käsekuchen"
],
1,
"Im Text: „Heute gibt es auch leckeren Apfelkuchen im Angebot.“"
],
[
"Wie ist der Apfelkuchen laut Durchsage?",
[
"Klein",
"Warm",
"Lecker"
],
2,
"Im Text: „leckeren Apfelkuchen“ — er ist also lecker."
]
],
"https://d8j0ntlcm91z4.cloudfront.net/user_38tIQPWpEsaUmk18tYN8mskaaAF/hf_20260620_141434_a7df1816-b0ae-49f8-86c6-a40d1b043087.mp3": [
[
"Woher kommt das Gemüse?",
[
"Direkt vom Bauernhof",
"Direkt aus dem Ausland",
"Direkt aus dem Garten"
],
0,
"Im Text: „frisches Gemüse direkt vom Bauernhof“."
],
[
"Was ist besonders süß?",
[
"Die Kirschen",
"Die Tomaten",
"Die Erdbeeren"
],
2,
"Im Text: „Die Erdbeeren sind besonders süß.“"
]
],
"https://d8j0ntlcm91z4.cloudfront.net/user_38tIQPWpEsaUmk18tYN8mskaaAF/hf_20260620_141509_6486c979-29c6-415e-8f31-96a6871202b4.mp3": [
[
"Was hat die Person bekommen?",
[
"Die Stelle",
"Eine Wohnung",
"Ein Geschenk"
],
0,
"Im Text: „Ich habe die Stelle bekommen!“"
],
[
"Was schlägt die Person für heute Abend vor?",
[
"Ins Kino gehen",
"Zusammen feiern",
"Zu Hause bleiben"
],
1,
"Im Text: „Lass uns heute Abend zusammen feiern.“"
]
],
"https://d8j0ntlcm91z4.cloudfront.net/user_38tIQPWpEsaUmk18tYN8mskaaAF/hf_20260620_141511_a79cde95-724f-4d3e-8fec-087ba171c5a9.mp3": [
[
"Wie fühlt sich Tom?",
[
"Ein bisschen traurig",
"Richtig glücklich",
"Ein bisschen wütend"
],
0,
"Im Text: „Ich bin ein bisschen traurig“."
],
[
"Was schlägt Tom vor?",
[
"Sich morgen zu treffen",
"Später zu reden",
"Heute zu feiern"
],
1,
"Im Text: „Vielleicht können wir später reden?“"
]
],
"https://d8j0ntlcm91z4.cloudfront.net/user_38tIQPWpEsaUmk18tYN8mskaaAF/hf_20260620_141513_6272bb3c-6f33-417d-8eb2-b0436d86995e.mp3": [
[
"Wann ist die Prüfung?",
[
"Heute",
"Übermorgen",
"Morgen"
],
2,
"Im Text: „Morgen habe ich meine Führerscheinprüfung.“"
],
[
"Worum bittet sie Anna?",
[
"Mit ihr zu lernen",
"Die Daumen zu drücken",
"Sie abzuholen"
],
1,
"Im Text: „Drück mir die Daumen!“"
]
],
"https://d8j0ntlcm91z4.cloudfront.net/user_38tIQPWpEsaUmk18tYN8mskaaAF/hf_20260620_141515_7879c8df-275f-47c1-84d9-b49015171224.mp3": [
[
"Zu welcher Tageszeit hört man die Nachricht?",
[
"Am Morgen",
"Am Abend",
"Am Mittag"
],
1,
"Im Text: „Schönen guten Abend.“ — also am Abend."
],
[
"Was sagt die Stimme am Ende?",
[
"„Bis morgen früh.“",
"„Sie schaffen das schon.“",
"„Sie haben es sich verdient.“"
],
2,
"Im Text: „Sie haben es sich verdient.“ — das ist der letzte Satz."
]
],
"https://d8j0ntlcm91z4.cloudfront.net/user_38tIQPWpEsaUmk18tYN8mskaaAF/hf_20260620_141517_4c603008-dbd7-4661-b4d2-a8e46fc5708d.mp3": [
[
"Wer ruft an?",
[
"Die Praxis Dr. Müller",
"Die Praxis Dr. Weber",
"Die Praxis Dr. Meier"
],
0,
"Im Text: „hier ist die Praxis Dr. Müller“."
],
[
"Was soll man mitbringen?",
[
"Die Überweisung",
"Die Versichertenkarte",
"Den Personalausweis"
],
1,
"Im Text: „Bitte bringen Sie Ihre Versichertenkarte mit.“"
]
],
"https://d8j0ntlcm91z4.cloudfront.net/user_38tIQPWpEsaUmk18tYN8mskaaAF/hf_20260620_141518_3128c88c-4a79-4b1c-b15c-d0e3501fdeb7.mp3": [
[
"Bis wann kann man das Medikament heute abholen?",
[
"Bis 16 Uhr",
"Bis 20 Uhr",
"Bis 18 Uhr"
],
2,
"Im Text: „Sie können es heute bis achtzehn Uhr abholen.“"
],
[
"Wie heißt die Apotheke?",
[
"Apotheke am Park",
"Apotheke am Bahnhof",
"Apotheke am Markt"
],
2,
"Im Text: „hier ist die Apotheke am Markt“."
]
],
"https://d8j0ntlcm91z4.cloudfront.net/user_38tIQPWpEsaUmk18tYN8mskaaAF/hf_20260620_141520_28f59a2f-85c0-4947-8fdb-886b2136aeb0.mp3": [
[
"Wie viel Wasser soll man am besten trinken?",
[
"Zwei Liter",
"Drei Liter",
"Einen Liter"
],
0,
"Im Text: „genug Wasser, am besten zwei Liter“."
],
[
"Wie lang soll der Spaziergang sein?",
[
"Kurz",
"Zwei Stunden",
"Sehr lang"
],
0,
"Im Text: „machen Sie einen kurzen Spaziergang“ — also kurz."
]
],
"https://d8j0ntlcm91z4.cloudfront.net/user_38tIQPWpEsaUmk18tYN8mskaaAF/hf_20260620_141522_99f76e89-5896-4f5b-b124-aebb35c78990.mp3": [
[
"Wann ist der Termin?",
[
"Morgen um 14 Uhr",
"Morgen um 16 Uhr",
"Heute um 14 Uhr"
],
0,
"Im Text: „Ihren Termin morgen um vierzehn Uhr“."
],
[
"Was soll man tun, wenn man nicht kommen kann?",
[
"Einen Brief schreiben",
"Einfach später kommen",
"Rechtzeitig absagen"
],
2,
"Im Text: „sagen Sie bitte rechtzeitig ab“."
]
],
"https://d8j0ntlcm91z4.cloudfront.net/user_38tIQPWpEsaUmk18tYN8mskaaAF/hf_20260620_141524_99b03b27-425c-4285-92b6-5c201f6cfc99.mp3": [
[
"Warum gibt es kein Internet?",
[
"Wegen Wartungsarbeiten",
"Wegen eines Sturms",
"Wegen eines Stromausfalls"
],
0,
"Im Text: „Wegen Wartungsarbeiten ist das Internet … nicht verfügbar.“"
],
[
"Wer ruft an?",
[
"Der Vermieter",
"Der Internetanbieter",
"Der Stromanbieter"
],
1,
"Im Text: „hier ist Ihr Internetanbieter“."
]
],
"https://d8j0ntlcm91z4.cloudfront.net/user_38tIQPWpEsaUmk18tYN8mskaaAF/hf_20260620_141526_78fe169a-65b5-40d8-ac1f-75ae607223d0.mp3": [
[
"Wann sollte der Film zuerst beginnen?",
[
"Um 19 Uhr",
"Um 20 Uhr",
"Um 21 Uhr"
],
1,
"Im Text: „beginnt nicht um zwanzig Uhr, sondern erst um einundzwanzig Uhr“."
],
[
"Was zeigt der Sender vor dem Film?",
[
"Den Wetterbericht",
"Eine Sportsendung",
"Die Nachrichten"
],
2,
"Im Text: „Davor zeigen wir die Nachrichten.“"
]
],
"https://d8j0ntlcm91z4.cloudfront.net/user_38tIQPWpEsaUmk18tYN8mskaaAF/hf_20260620_141527_9d5e17f7-e6d3-4909-af61-07ca0af828f0.mp3": [
[
"Von wann ist das Foto?",
[
"Von letzter Woche",
"Von gestern",
"Von heute"
],
1,
"Im Text: „mein Foto von gestern“ — also von gestern."
],
[
"Was soll die andere Person tun?",
[
"Das Foto teilen",
"Sofort anrufen",
"Kurz schreiben"
],
2,
"Im Text: „Schreib mir bitte kurz, ob es dir gefällt.“"
]
],
"https://d8j0ntlcm91z4.cloudfront.net/user_38tIQPWpEsaUmk18tYN8mskaaAF/hf_20260620_141529_9288adcc-2680-4181-9ebc-bcf0fe46a4e7.mp3": [
[
"Bis wann hat der Laden geöffnet?",
[
"Bis 18 Uhr",
"Bis 20 Uhr",
"Bis 19 Uhr"
],
2,
"Im Text: „Wir haben bis neunzehn Uhr geöffnet.“"
],
[
"Wie heißt der Laden?",
[
"Tech-Point",
"Tech-Store",
"Handy-Point"
],
0,
"Im Text: „hier ist der Handyladen Tech-Point“."
]
],
"https://d8j0ntlcm91z4.cloudfront.net/user_38tIQPWpEsaUmk18tYN8mskaaAF/hf_20260720_051329_de935e5d-2cf7-4389-8d90-e8dc06eb1bf4.wav": [
[
"Wann ist Lena gestern eingeschlafen?",
[
"Um drei Uhr",
"Um ein Uhr",
"Um zwei Uhr"
],
2,
"Im Text: „bin erst um zwei Uhr eingeschlafen“."
],
[
"Warum ist Lena so spät eingeschlafen?",
[
"Sie hat lange gescrollt.",
"Sie hat Kaffee getrunken.",
"Die Nachbarn waren laut."
],
0,
"Im Text: „Ich habe gestern viel zu lange durch mein Handy gescrollt“."
]
],
"https://d8j0ntlcm91z4.cloudfront.net/user_38tIQPWpEsaUmk18tYN8mskaaAF/hf_20260620_141531_4a83b092-fc47-4b7c-b556-1fe009d70aae.mp3": [
[
"Was kann es am Abend geben?",
[
"Einen starken Regen",
"Dichten Nebel",
"Ein kurzes Gewitter"
],
2,
"Im Text: „Am Abend kann es ein kurzes Gewitter geben.“"
],
[
"Was soll man nicht vergessen?",
[
"Den Sonnenschutz",
"Die warme Jacke",
"Den Regenschirm"
],
0,
"Im Text: „Vergessen Sie den Sonnenschutz nicht!“"
]
],
"https://d8j0ntlcm91z4.cloudfront.net/user_38tIQPWpEsaUmk18tYN8mskaaAF/hf_20260620_141533_e558e787-2089-404f-8299-c199dc45a6dd.mp3": [
[
"Wo hört man die Durchsage?",
[
"Im Zoo",
"Im Schwimmbad",
"Im Stadtpark"
],
2,
"Im Text: „Liebe Besucher des Stadtparks“ — also im Stadtpark."
],
[
"Wer dankt es den Besuchern?",
[
"Die Gärtner",
"Die Stadt",
"Die Natur"
],
2,
"Im Text: „Die Natur dankt es Ihnen.“"
]
],
"https://d8j0ntlcm91z4.cloudfront.net/user_38tIQPWpEsaUmk18tYN8mskaaAF/hf_20260620_141535_d874e54e-76dd-4b0e-8900-fe687b9c640b.mp3": [
[
"Wovor warnt die Durchsage?",
[
"Vor einem Sturm",
"Vor starkem Schnee",
"Vor großer Hitze"
],
0,
"Im Text: „Heute Nachmittag kommt ein starker Sturm.“"
],
[
"Wann kommt das Unwetter?",
[
"Heute Abend",
"Heute Nachmittag",
"Morgen früh"
],
1,
"Im Text: „Heute Nachmittag kommt ein starker Sturm.“ — also heute Nachmittag."
]
],
"https://d8j0ntlcm91z4.cloudfront.net/user_38tIQPWpEsaUmk18tYN8mskaaAF/hf_20260620_141538_249639fa-f373-4682-aea9-c673040455be.mp3": [
[
"Welche Tonne soll man rausstellen?",
[
"Die braune Tonne",
"Die gelbe Tonne",
"Die blaue Tonne"
],
2,
"Im Text: „Bitte stellen Sie die blaue Tonne … raus.“"
],
[
"Wann soll man die Tonne rausstellen?",
[
"Am Morgen",
"Am Abend davor",
"Am Mittag"
],
0,
"Im Text: „stellen Sie die blaue Tonne am Morgen raus“."
]
],
"https://d8j0ntlcm91z4.cloudfront.net/user_38tIQPWpEsaUmk18tYN8mskaaAF/hf_20260620_141613_f4f85cd9-fa6b-4470-aea7-328bc360a4c4.mp3": [
[
"Wen stellt die Person vor?",
[
"Ihre neue Chefin",
"Ihre neue Kollegin",
"Ihre neue Nachbarin"
],
1,
"Im Text: „ich möchte dir meine neue Kollegin vorstellen“."
],
[
"Was sagt die Person am Ende?",
[
"„Du wirst sie mögen!“",
"„Ruf sie mal an!“",
"„Du kennst sie schon!“"
],
0,
"Im Text: „Du wirst sie mögen!“ — das ist der letzte Satz."
]
],
"https://d8j0ntlcm91z4.cloudfront.net/user_38tIQPWpEsaUmk18tYN8mskaaAF/hf_20260620_141615_459c628a-f3c1-4d81-969a-35a90c424b20.mp3": [
[
"Über wen spricht die Person?",
[
"Über Herrn Klein",
"Über Herrn Becker",
"Über Frau Klein"
],
0,
"Im Text: „Über Herrn Klein kann ich nur Gutes sagen.“"
],
[
"Was macht die Person am Ende?",
[
"Sie sucht Ersatz.",
"Sie kritisiert ihn.",
"Sie empfiehlt ihn."
],
2,
"Im Text: „Ich empfehle ihn gern.“"
]
],
"https://d8j0ntlcm91z4.cloudfront.net/user_38tIQPWpEsaUmk18tYN8mskaaAF/hf_20260620_141617_8178e245-cf21-499f-aac7-8fd71e5349e1.mp3": [
[
"Was macht der Bruder auf Partys?",
[
"Er spricht nicht viel.",
"Er tanzt sehr viel.",
"Er geht sehr früh."
],
0,
"Im Text: „Auf Partys spricht er nicht viel“."
],
[
"Worin ist der Bruder sehr gut?",
[
"Im Zuhören",
"Im Tanzen",
"Im Erzählen"
],
0,
"Im Text: „er ist ein sehr guter Zuhörer“."
]
],
"https://d8j0ntlcm91z4.cloudfront.net/user_38tIQPWpEsaUmk18tYN8mskaaAF/hf_20260620_141619_fe98c156-5446-4994-9b7e-ad2b4f3d7199.mp3": [
[
"Wer mag die offene Art der Chefin?",
[
"Das ganze Team",
"Nur der Direktor",
"Vor allem die Kunden"
],
0,
"Im Text: „Das ganze Team mag ihre offene Art.“"
],
[
"Was hat die Chefin immer?",
[
"Viel Zeit",
"Gute Laune",
"Gute Ideen"
],
2,
"Im Text: „hat immer gute Ideen“."
]
],
"https://d8j0ntlcm91z4.cloudfront.net/user_38tIQPWpEsaUmk18tYN8mskaaAF/hf_20260620_141621_74f8d056-fc7d-4e6d-975e-e7ce9911ca79.mp3": [
[
"Was glaubt die Person über die Prüfung?",
[
"Die Prüfung wird verschoben.",
"Die Prüfung wird kein Problem.",
"Die Prüfung wird sehr schwer."
],
1,
"Im Text: „Das schaffst du locker.“ — die Prüfung wird also kein Problem."
],
[
"Warum soll sich die andere Person keine Sorgen machen?",
[
"Sie kann sie wiederholen.",
"Sie hat noch viel Zeit.",
"Sie hat viel gelernt."
],
2,
"Im Text: „Du hast viel gelernt“ — deshalb keine Sorgen."
]
],
"https://d8j0ntlcm91z4.cloudfront.net/user_38tIQPWpEsaUmk18tYN8mskaaAF/hf_20260620_141622_416e028f-afbb-4eb3-a095-c95777e9733d.mp3": [
[
"Wo ist die Person gerade?",
[
"Am Bahnhof",
"Im Stau",
"An der Haltestelle"
],
1,
"Im Text: „Ich stehe leider noch im Stau“ — also im Stau."
],
[
"Wann ist die Person im Büro?",
[
"In zwanzig Minuten",
"In einer Stunde",
"In zehn Minuten"
],
0,
"Im Text: „In zwanzig Minuten bin ich im Büro.“"
]
],
"https://d8j0ntlcm91z4.cloudfront.net/user_38tIQPWpEsaUmk18tYN8mskaaAF/hf_20260620_141624_af60518d-59cd-4374-bfcb-371aa4a9b89d.mp3": [
[
"Wann war das Essen?",
[
"Gestern",
"Letzte Woche",
"Heute Mittag"
],
0,
"Im Text: „das Essen gestern war wirklich super“ — also gestern."
],
[
"Was möchte die Person?",
[
"Selbst kochen",
"Noch einmal hingehen",
"Das Rezept haben"
],
1,
"Im Text: „Wir müssen da unbedingt nochmal hingehen.“"
]
],
"https://d8j0ntlcm91z4.cloudfront.net/user_38tIQPWpEsaUmk18tYN8mskaaAF/hf_20260620_141625_1dbf050e-dc1e-4e1b-8752-d08846bd54c2.mp3": [
[
"Wann sehen sich die Personen wieder?",
[
"Am Montag",
"Morgen",
"Nächste Woche"
],
1,
"Im Text: „Wir sehen uns morgen.“ — also morgen."
],
[
"Was wünscht die Person zum Schluss?",
[
"Gute Besserung",
"Einen schönen Abend",
"Ein schönes Wochenende"
],
1,
"Im Text: „Schönen Abend noch und bis dann!“"
]
],
"https://d8j0ntlcm91z4.cloudfront.net/user_38tIQPWpEsaUmk18tYN8mskaaAF/hf_20260620_141627_fae580e4-5e90-44ec-8f00-7d1962e7b21c.mp3": [
[
"Wohin fliegen die Passagiere?",
[
"Nach Bern",
"Nach Bremen",
"Nach Berlin"
],
2,
"Im Text: „für die Passagiere nach Berlin“ — also nach Berlin."
],
[
"Wann startet der Flug?",
[
"Um 12 Uhr",
"Um 15 Uhr",
"Um 14 Uhr"
],
2,
"Im Text: „startet heute pünktlich um vierzehn Uhr“ — also um 14 Uhr."
]
],
"https://d8j0ntlcm91z4.cloudfront.net/user_38tIQPWpEsaUmk18tYN8mskaaAF/hf_20260620_141630_dd722fe2-8190-4b73-b6aa-a8b9c5369dd8.mp3": [
[
"Für welches Gleis ist die Information?",
[
"Für Gleis dreizehn",
"Für Gleis drei",
"Für Gleis zwei"
],
1,
"Im Text: „Information für die Reisenden auf Gleis drei“."
],
[
"Wohin fährt der Zug?",
[
"Nach Nürnberg",
"Nach München",
"Nach Münster"
],
1,
"Im Text: „Der Zug nach München“ — also nach München."
]
],
"https://d8j0ntlcm91z4.cloudfront.net/user_38tIQPWpEsaUmk18tYN8mskaaAF/hf_20260620_141632_3fb1d78b-9643-4b3a-8280-21cc9479c14c.mp3": [
[
"Ab wann ist das Zimmer reserviert?",
[
"Ab Samstag",
"Ab Donnerstag",
"Ab Freitag"
],
2,
"Im Text: „für zwei Nächte ab Freitag“ — also ab Freitag."
],
[
"Wann gibt es Frühstück?",
[
"Von sieben bis zehn Uhr",
"Von acht bis elf Uhr",
"Von sechs bis neun Uhr"
],
0,
"Im Text: „Das Frühstück gibt es von sieben bis zehn Uhr.“"
]
],
"https://d8j0ntlcm91z4.cloudfront.net/user_38tIQPWpEsaUmk18tYN8mskaaAF/hf_20260620_141634_dcb88cfd-fd7d-4ff7-9f96-2000aa34cb12.mp3": [
[
"Wohin fährt der Zug?",
[
"Nach Hannover",
"Nach Bremen",
"Nach Hamburg"
],
2,
"Im Text: „Der Zug nach Hamburg“ — also nach Hamburg."
],
[
"Von welchem Gleis fährt der Zug heute nicht?",
[
"Von Gleis acht",
"Von Gleis drei",
"Von Gleis fünf"
],
2,
"Im Text: „fährt heute nicht von Gleis fünf, sondern von Gleis acht“."
]
],
"https://d8j0ntlcm91z4.cloudfront.net/user_38tIQPWpEsaUmk18tYN8mskaaAF/hf_20260707_060858_63b0afda-1303-46dc-abae-fc28ae54988b.wav": [
[
"Was haben sie in Kroatien besichtigt?",
[
"Ein altes Museum",
"Eine alte Kirche",
"Ein altes Schloss"
],
2,
"Im Text: „Wir haben ein altes Schloss besichtigt“."
],
[
"Was planen sie für nächstes Jahr?",
[
"Den Urlaub zu Hause zu verbringen",
"Wieder nach Kroatien zu fahren",
"Eine Reise nach Italien zu machen"
],
1,
"Im Text: „Nächstes Jahr fahren wir bestimmt wieder dorthin.“"
]
],
"https://d8j0ntlcm91z4.cloudfront.net/user_38tIQPWpEsaUmk18tYN8mskaaAF/hf_20260620_141636_81f76dca-a447-487a-9ce4-d43a9ecc214a.mp3": [
[
"Warum fährt der Bus eine andere Strecke?",
[
"Wegen einer Baustelle",
"Wegen eines Festes",
"Wegen eines Unfalls"
],
0,
"Im Text: „fährt heute wegen einer Baustelle eine andere Strecke“."
],
[
"Wo sollen die Fahrgäste aussteigen?",
[
"Am Bahnhof",
"Am Rathaus",
"Am Marktplatz"
],
1,
"Im Text: „Bitte steigen Sie am Rathaus aus.“"
]
],
"https://d8j0ntlcm91z4.cloudfront.net/user_38tIQPWpEsaUmk18tYN8mskaaAF/hf_20260620_141638_f04316df-09d2-4cbc-bf55-02b51b10c7fe.mp3": [
[
"Wie lang ist der Stau?",
[
"Fünf Kilometer",
"Fünfzehn Kilometer",
"Zehn Kilometer"
],
0,
"Im Text: „einen Stau von fünf Kilometern“."
],
[
"Welchen Weg sollen die Autofahrer nehmen?",
[
"Durch die Innenstadt",
"Über die Landstraße",
"Über die Autobahn"
],
1,
"Im Text: „Fahren Sie wenn möglich über die Landstraße.“"
]
],
"https://d8j0ntlcm91z4.cloudfront.net/user_38tIQPWpEsaUmk18tYN8mskaaAF/hf_20260620_141640_91ea26c2-da52-4799-8ed8-36b4b953db0b.mp3": [
[
"Was ist mit dem Parkhaus in der Stadtmitte?",
[
"Es ist heute voll.",
"Es wird repariert.",
"Es ist zu teuer."
],
0,
"Im Text: „Das Parkhaus in der Stadtmitte ist heute voll.“"
],
[
"Wie kommt man vom Bahnhof ins Zentrum?",
[
"Mit der Straßenbahn",
"Mit dem Taxi",
"Mit dem Bus"
],
2,
"Im Text: „Von dort fahren Busse ins Zentrum.“"
]
],
"https://d8j0ntlcm91z4.cloudfront.net/user_38tIQPWpEsaUmk18tYN8mskaaAF/hf_20260620_141641_6db2e7eb-6748-49e7-a297-74628eb07da5.mp3": [
[
"Was sollen die Fahrgäste nach der Oper nehmen?",
[
"Den Ersatzbus",
"Ein Taxi",
"Die U-Bahn"
],
0,
"Im Text: „Danach nehmen Sie bitte den Ersatzbus.“"
],
[
"Für welches Verkehrsmittel ist die Information?",
[
"Für die S-Bahn",
"Für den Stadtbus",
"Für die Straßenbahn"
],
2,
"Im Text: „Information für die Fahrgäste der Straßenbahn“."
]
],
"https://d8j0ntlcm91z4.cloudfront.net/user_38tIQPWpEsaUmk18tYN8mskaaAF/hf_20260620_141713_82708b77-2d2f-47d5-95d6-88f842f77f38.mp3": [
[
"Wann hat die Person den Film gesehen?",
[
"Heute",
"Gestern",
"Letzte Woche"
],
1,
"Im Text: „Ich habe gestern den neuen Film gesehen“."
],
[
"Wie waren die Bilder im Film?",
[
"Wunderschön",
"Langweilig",
"Sehr dunkel"
],
0,
"Im Text: „die Bilder wunderschön“."
]
],
"https://d8j0ntlcm91z4.cloudfront.net/user_38tIQPWpEsaUmk18tYN8mskaaAF/hf_20260620_141715_354f9505-c01f-422c-ad35-4c26d1585023.mp3": [
[
"Wo war der Urlaub?",
[
"In einer Großstadt",
"Am Meer",
"In den Bergen"
],
2,
"Im Text: „Der Urlaub in den Bergen war traumhaft.“"
],
[
"Wie war das Wetter?",
[
"Herrlich",
"Sehr kalt",
"Regnerisch"
],
0,
"Im Text: „das Wetter herrlich“."
]
],
"https://d8j0ntlcm91z4.cloudfront.net/user_38tIQPWpEsaUmk18tYN8mskaaAF/hf_20260620_141717_bc2b4e3d-2f78-4ed5-9466-0a36a76fb764.mp3": [
[
"Wo hat die Person gegessen?",
[
"Zu Hause",
"Bei guten Freunden",
"Im neuen Restaurant"
],
2,
"Im Text: „Das Abendessen im neuen Restaurant war köstlich.“"
],
[
"Wie war der Service?",
[
"Sehr langsam",
"Super freundlich",
"Etwas unfreundlich"
],
1,
"Im Text: „der Service war super freundlich“."
]
],
"https://d8j0ntlcm91z4.cloudfront.net/user_38tIQPWpEsaUmk18tYN8mskaaAF/hf_20260620_141719_5384e8ec-12e2-4c24-a18d-2a0edce36961.mp3": [
[
"Was ist passiert?",
[
"Die Person hat die Prüfung bestanden.",
"Die Person hat eine Stelle bekommen.",
"Die Person hat im Lotto gewonnen."
],
2,
"Im Text: „ich habe im Lotto gewonnen!“"
],
[
"Was möchte die Person jetzt?",
[
"Verreisen",
"Ein Auto kaufen",
"Feiern"
],
2,
"Im Text: „Wir müssen das unbedingt feiern!“"
]
],
"https://d8j0ntlcm91z4.cloudfront.net/user_38tIQPWpEsaUmk18tYN8mskaaAF/hf_20260620_141721_3bcf9a6b-0c5c-4824-8a20-07a2ff3ac773.mp3": [
[
"Wo hört man die Durchsage?",
[
"Im Supermarkt",
"Im Café",
"In der Bäckerei"
],
2,
"Im Text: „Hier in der Bäckerei gibt es heute …“."
],
[
"Was gehört laut Text noch zum typischen Frühstück?",
[
"Käse und Marmelade",
"Wurst und Eier",
"Müsli und Joghurt"
],
0,
"Im Text: „Frühstück mit Brötchen, Käse und Marmelade“."
]
],
"https://d8j0ntlcm91z4.cloudfront.net/user_38tIQPWpEsaUmk18tYN8mskaaAF/hf_20260620_141724_9aa8e987-51cc-425f-b614-9dc0fd2f9396.mp3": [
[
"Wann ist der Termin?",
[
"Um elf Uhr",
"Um zehn Uhr",
"Um neun Uhr"
],
1,
"Im Text: „unseren Termin um Punkt zehn Uhr“."
],
[
"Wer ruft an?",
[
"Frau Wagner",
"Herr Wagner",
"Herr Weber"
],
1,
"Im Text: „Hallo, hier ist Herr Wagner.“"
]
],
"https://d8j0ntlcm91z4.cloudfront.net/user_38tIQPWpEsaUmk18tYN8mskaaAF/hf_20260620_141725_8711b62e-1758-4bcb-b892-99fcefaba601.mp3": [
[
"Wohin kommt das Papier?",
[
"In die braune Tonne",
"In die blaue Tonne",
"In die gelbe Tonne"
],
1,
"Im Text: „das Papier in die blaue Tonne“."
],
[
"Wofür bedankt sich die Durchsage?",
[
"Fürs Mitmachen",
"Für die Geduld",
"Fürs Zuhören"
],
0,
"Im Text: „Vielen Dank fürs Mitmachen!“"
]
],
"https://d8j0ntlcm91z4.cloudfront.net/user_38tIQPWpEsaUmk18tYN8mskaaAF/hf_20260620_141727_29bb824c-d51a-419a-a20a-6e73e7bdb0ea.mp3": [
[
"Um wie viel Uhr trifft man sich?",
[
"Um 18 Uhr",
"Um 20 Uhr",
"Um 19 Uhr"
],
2,
"Im Text: „im Sportverein um neunzehn Uhr“."
],
[
"Was macht man danach?",
[
"Essen gehen",
"Ein Bier trinken",
"Tanzen gehen"
],
1,
"Im Text: „Danach gehen wir noch gemütlich ein Bier trinken.“"
]
],
"https://d8j0ntlcm91z4.cloudfront.net/user_38tIQPWpEsaUmk18tYN8mskaaAF/hf_20260620_141728_19d87096-ac68-48a7-8bf1-f528f67c7516.mp3": [
[
"An welchem Tag kommt der Handwerker?",
[
"Am Dienstag",
"Am Donnerstag",
"Am Freitag"
],
1,
"Im Text: „Der Handwerker kommt am Donnerstag“."
],
[
"Wann soll man zu Hause sein?",
[
"Zwischen acht und zwölf Uhr",
"Zwischen neun und elf Uhr",
"Zwischen neun und zwölf Uhr"
],
2,
"Im Text: „zwischen neun und zwölf Uhr zu Hause“."
]
],
"https://d8j0ntlcm91z4.cloudfront.net/user_38tIQPWpEsaUmk18tYN8mskaaAF/hf_20260620_141731_32862194-4f09-44dc-8dfd-d24649b94a93.mp3": [
[
"An welchem Tag kommt die Lieferung?",
[
"Am Sonntag",
"Am Freitag",
"Am Samstag"
],
2,
"Im Text: „wird am Samstag … geliefert“."
],
[
"In welcher Zeit wird geliefert?",
[
"Zwischen 10 und 12 Uhr",
"Zwischen 10 und 14 Uhr",
"Zwischen 12 und 14 Uhr"
],
1,
"Im Text: „zwischen zehn und vierzehn Uhr geliefert“."
]
],
"https://d8j0ntlcm91z4.cloudfront.net/user_38tIQPWpEsaUmk18tYN8mskaaAF/hf_20260620_141732_9303697e-8855-4322-9b2e-f370fc311c66.mp3": [
[
"Wann ist die Besichtigung?",
[
"Am Mittwoch um 17 Uhr",
"Am Donnerstag um 17 Uhr",
"Am Mittwoch um 19 Uhr"
],
0,
"Im Text: „Besichtigung am Mittwoch um siebzehn Uhr“."
],
[
"In welcher Straße ist die Wohnung?",
[
"In der Parkstraße",
"In der Bergstraße",
"In der Gartenstraße"
],
2,
"Im Text: „die Wohnung in der Gartenstraße“."
]
],
"https://d8j0ntlcm91z4.cloudfront.net/user_38tIQPWpEsaUmk18tYN8mskaaAF/hf_20260620_141734_a9d672b8-4e0e-4d2f-bfe4-c1d1bdd96256.mp3": [
[
"Wie heißt der Nachbar?",
[
"Herr Berg",
"Herr Roth",
"Herr Ott"
],
2,
"Im Text: „hier ist Herr Ott von nebenan“."
],
[
"Was kann am Wochenende passieren?",
[
"Es kann laut werden.",
"Das Wasser ist weg.",
"Der Strom fällt aus."
],
0,
"Im Text: „es kann etwas laut werden“."
]
],
"https://d8j0ntlcm91z4.cloudfront.net/user_38tIQPWpEsaUmk18tYN8mskaaAF/hf_20260713_070217_004f2125-4fb1-4899-a4db-a02857716b9f.wav": [
[
"Ab wann ist eigentlich Ruhezeit?",
[
"Ab 20 Uhr",
"Ab 23 Uhr",
"Ab 22 Uhr"
],
2,
"Im Text: „Nach 22 Uhr ist ja eigentlich Ruhezeit“."
],
[
"Wann war die Musik sehr laut?",
[
"Gestern",
"Heute Morgen",
"Am Wochenende"
],
0,
"Im Text: „die Musik war gestern sehr laut“."
]
],
"https://d8j0ntlcm91z4.cloudfront.net/user_38tIQPWpEsaUmk18tYN8mskaaAF/hf_20260707_060902_59335e78-591b-42e2-8eff-876090c5a763.wav": [
[
"Worauf hat die Person heute keine Lust?",
[
"Auf den Sport",
"Auf die Party",
"Auf das Meeting"
],
2,
"Im Text: „ich hab heute echt keinen Bock auf das Meeting“."
],
[
"Wie reagiert die andere Person auf die Neuigkeit?",
[
"Sie ist sehr überrascht.",
"Sie wusste es schon.",
"Sie ist enttäuscht."
],
0,
"Im Text: „Echt jetzt? Ich bin platt!“ — sie ist also sehr überrascht."
]
],
"https://d8j0ntlcm91z4.cloudfront.net/user_38tIQPWpEsaUmk18tYN8mskaaAF/hf_20260713_070220_97a09030-8c29-4896-bd0c-d85e42aaddcc.wav": [
[
"Warum hat der Mann den Zug noch bekommen?",
[
"Der Zug hatte Verspätung.",
"Er ist schnell gerannt.",
"Ein Freund hat ihn gefahren."
],
0,
"Im Text: „dann hatte er zehn Minuten Verspätung, und ich bin gerade noch reingekommen“."
],
[
"Warum hat er im Meeting nichts verstanden?",
[
"Er war an dem Tag zu müde.",
"Es war im Meetingraum zu laut.",
"Die Chefin redete kompliziert."
],
2,
"Im Text: „Die Chefin hat so kompliziert geredet, ich habe nur Bahnhof verstanden.“"
]
],
"https://d8j0ntlcm91z4.cloudfront.net/user_38tIQPWpEsaUmk18tYN8mskaaAF/hf_20260826_062316_8c95ec2a-d381-4d58-a06a-874ea238644c.mp3": [
[
"Zu welchem Schalter soll die Nummer B41?",
[
"Zu Schalter sieben",
"Zu Schalter elf",
"Zu Schalter vier"
],
0,
"Im Text: „Die Wartenummer B einundvierzig bitte zu Schalter sieben.“"
],
[
"Wer wird heute ab 13 Uhr bedient?",
[
"Nur Kunden mit Termin",
"Alle Kunden",
"Nur Kunden ohne Termin"
],
0,
"Im Text: „Ab dreizehn Uhr werden heute nur noch Kundinnen und Kunden mit Termin bedient.“"
]
],
"https://d8j0ntlcm91z4.cloudfront.net/user_38tIQPWpEsaUmk18tYN8mskaaAF/hf_20260826_062317_100ffb0c-d423-42c5-b3b5-51d1dba71e64.mp3": [
[
"Welches Dokument fehlt noch?",
[
"Die Meldebescheinigung",
"Der Personalausweis",
"Die Geburtsurkunde"
],
0,
"Im Text: „aber die Meldebescheinigung fehlt noch“."
],
[
"Wie kann Frau Demir das Dokument abgeben?",
[
"Per E-Mail an das Amt",
"Im Briefkasten am Eingang",
"Bei einem zweiten Termin"
],
1,
"Im Text: „Sie können sie einfach in den Briefkasten neben dem Eingang werfen.“"
]
],
"https://d8j0ntlcm91z4.cloudfront.net/user_38tIQPWpEsaUmk18tYN8mskaaAF/hf_20260826_062316_ddf96d70-eb05-4eec-8d33-90b0c952b592.mp3": [
[
"Wohin soll die Person morgen gehen?",
[
"Zu Schalter drei",
"Zu Schalter fünf",
"Zu Schalter acht"
],
0,
"Im Text: „Dann kommen Sie einfach ohne Termin zu Schalter drei“."
],
[
"Was kostet das morgen?",
[
"Nichts",
"Zehn Euro",
"Fünf Euro"
],
0,
"Im Text: „Eine Gebühr fällt dafür nicht an.“ — es kostet also nichts."
]
],
"https://d8j0ntlcm91z4.cloudfront.net/user_38tIQPWpEsaUmk18tYN8mskaaAF/hf_20260826_062317_5fe1a6e2-5aa8-4a81-a3bd-572a7b494fe6.mp3": [
[
"Wann kommt der Bescheid?",
[
"In vier Wochen",
"In drei Wochen",
"In zwei Wochen"
],
1,
"Im Text: „Der Bescheid kommt erst in drei Wochen“."
],
[
"Wer geht mit zum Amt?",
[
"Die Schwester",
"Die Nachbarin",
"Ein Kollege"
],
1,
"Im Text: „Meine Nachbarin geht mit, sie hat eine Vollmacht von mir.“"
]
],
"https://d8j0ntlcm91z4.cloudfront.net/user_38tIQPWpEsaUmk18tYN8mskaaAF/hf_20260826_062316_f26a942b-2daf-46f8-a876-25f667dab4bf.mp3": [
[
"Welche Taste wählt man für eine Kartensperre?",
[
"Die Sieben",
"Die Zwei",
"Die Eins"
],
2,
"Im Text: „Für eine Kartensperre wählen Sie bitte die Eins“."
],
[
"Wann ist die Filiale in der Bahnhofstraße geschlossen?",
[
"Am Montag",
"Am Freitag",
"Am Samstag"
],
1,
"Im Text: „Unsere Filiale in der Bahnhofstraße bleibt am Freitag geschlossen.“"
]
],
"https://d8j0ntlcm91z4.cloudfront.net/user_38tIQPWpEsaUmk18tYN8mskaaAF/hf_20260826_062316_bb9dca0f-e2e9-4ff5-aa26-3a5f4d4aadf9.mp3": [
[
"Wann kommt die neue Karte?",
[
"In etwa zehn Werktagen",
"In etwa fünf Werktagen",
"In etwa drei Werktagen"
],
1,
"Im Text: „sie kommt in etwa fünf Werktagen“."
],
[
"Was soll Herr Osei zum Schalter mitbringen?",
[
"Seinen Kontoauszug",
"Seinen Ausweis",
"Seine alte Karte"
],
1,
"Im Text: „bitte bringen Sie Ihren Ausweis mit“."
]
],
"https://d8j0ntlcm91z4.cloudfront.net/user_38tIQPWpEsaUmk18tYN8mskaaAF/hf_20260826_062316_54a7cd05-3245-475e-8cb8-960ac4152b9e.mp3": [
[
"Was kostet das Girokonto normalerweise?",
[
"4,90 € im Monat",
"9,40 € im Monat",
"4,50 € im Monat"
],
0,
"Im Text: „Das Girokonto kostet vier Euro neunzig im Monat“."
],
[
"Was kostet extra?",
[
"Das Eröffnen des Kontos",
"Die Karte zum Girokonto",
"Abheben an fremden Automaten"
],
2,
"Im Text: „Abheben am fremden Automaten kostet allerdings extra.“"
]
],
"https://d8j0ntlcm91z4.cloudfront.net/user_38tIQPWpEsaUmk18tYN8mskaaAF/hf_20260826_062316_388fa21f-2035-4b0f-bd9b-071dbc76ef51.mp3": [
[
"Was vermutet die zweite Person?",
[
"Eine Lastschrift vom Fitnessstudio",
"Eine Lastschrift vom Handyanbieter",
"Eine Lastschrift von der Versicherung"
],
0,
"Im Text: „Vielleicht eine Lastschrift vom Fitnessstudio?“"
],
[
"Wo soll man vorher nachschauen?",
[
"Im alten Vertrag",
"Im Verwendungszweck",
"In der Kündigung"
],
1,
"Im Text: „schau vorher im Verwendungszweck nach, wer da abbucht“."
]
],
"https://d8j0ntlcm91z4.cloudfront.net/user_38tIQPWpEsaUmk18tYN8mskaaAF/hf_20260826_073607_5fb75be9-bff9-4963-99b7-5e94bb4340b4.mp3": [
[
"Ab wann wird der Kran umgesetzt?",
[
"Ab zwölf Uhr",
"Ab halb elf",
"Ab elf Uhr"
],
1,
"Im Text: „Der Kran … wird ab halb elf umgesetzt.“"
],
[
"Welcher Weg ist bis Mittag gesperrt?",
[
"Zwischen Kran und Halle",
"Zwischen Tor und Container",
"Zwischen Halle und Container"
],
2,
"Im Text: „Der Weg zwischen der Halle und dem Container ist bis Mittag gesperrt“."
]
],
"https://d8j0ntlcm91z4.cloudfront.net/user_38tIQPWpEsaUmk18tYN8mskaaAF/hf_20260826_073607_f77ab594-7d8b-47f4-8125-76fa4b04b3b4.mp3": [
[
"Warum kann man den Beton nicht einbringen?",
[
"Wegen Sturm",
"Wegen Regen",
"Wegen Frost"
],
2,
"Im Text: „Für morgen früh ist Frost angesagt, unter minus fünf Grad können wir den Beton nicht einbringen.“"
],
[
"Bis wann gilt der Baustopp?",
[
"Bis Mittwoch",
"Bis Freitag",
"Bis Donnerstag"
],
2,
"Im Text: „einen Baustopp bis Donnerstag angeordnet“."
]
],
"https://d8j0ntlcm91z4.cloudfront.net/user_38tIQPWpEsaUmk18tYN8mskaaAF/hf_20260826_073607_baaa74a2-53c8-4ce0-8522-e1c53c8c2e6d.mp3": [
[
"Was liefert der Fahrer?",
[
"Zwanzig Paletten Steine",
"Zehn Paletten Steine",
"Zwanzig Paletten Zement"
],
0,
"Im Text: „zwanzig Paletten Steine“."
],
[
"Wer muss die Lieferung abnehmen?",
[
"Der Bauleiter",
"Der Polier",
"Der Fahrer"
],
1,
"Im Text: „aber abnehmen muss der Polier“."
]
],
"https://d8j0ntlcm91z4.cloudfront.net/user_38tIQPWpEsaUmk18tYN8mskaaAF/hf_20260826_073607_1fae3531-c669-44a5-ac5f-8ed91209c397.mp3": [
[
"Wann muss die Person morgen aufstehen?",
[
"Um sechs Uhr",
"Um fünf Uhr",
"Um sieben Uhr"
],
0,
"Im Text: „ich muss morgen um sechs raus“."
],
[
"Was schafft man laut Polier bis Ostern?",
[
"Den Rohbau",
"Das ganze Haus",
"Den Innenausbau"
],
0,
"Im Text: „wir schaffen den Rohbau bis Ostern, mehr nicht“."
]
],
"https://d8j0ntlcm91z4.cloudfront.net/user_38tIQPWpEsaUmk18tYN8mskaaAF/hf_20260826_073607_28ed843f-3dba-4aec-9cd9-6859d52382f9.mp3": [
[
"Bis wann kann man heute die Unterlagen prüfen lassen?",
[
"Bis 17 Uhr",
"Bis 16 Uhr",
"Bis 15 Uhr"
],
1,
"Im Text: „Das geht heute nur bis sechzehn Uhr“."
],
[
"Was beginnt ab 17 Uhr?",
[
"Beratungen zum eigenen Lebenslauf",
"Einzelgespräche mit den Firmen",
"Vorträge zum Vorstellungsgespräch"
],
2,
"Im Text: „Ab siebzehn Uhr beginnen die Vorträge zum Vorstellungsgespräch.“"
]
],
"https://d8j0ntlcm91z4.cloudfront.net/user_38tIQPWpEsaUmk18tYN8mskaaAF/hf_20260826_073607_df7f7775-e522-4482-9205-d527dbb728b9.mp3": [
[
"Wann ist das Vorstellungsgespräch jetzt?",
[
"Am Donnerstag um elf Uhr",
"Am Mittwoch um zehn Uhr",
"Am Donnerstag um zehn Uhr"
],
2,
"Im Text: „erst am Donnerstag um zehn Uhr“."
],
[
"Was soll Frau Osei mitbringen?",
[
"Ihr letztes Arbeitszeugnis",
"Ihren gültigen Ausweis",
"Ihren aktuellen Lebenslauf"
],
0,
"Im Text: „Bringen Sie bitte Ihr letztes Arbeitszeugnis mit.“"
]
],
"https://d8j0ntlcm91z4.cloudfront.net/user_38tIQPWpEsaUmk18tYN8mskaaAF/hf_20260826_073824_ab03a84f-fdc0-4e63-8d20-671bde692a1a.mp3": [
[
"Welche Unterlage kommt noch aus dem Heimatland?",
[
"Das Zeugnis",
"Der Lebenslauf",
"Der Pass"
],
0,
"Im Text: „das Zeugnis kommt noch aus meinem Heimatland“."
],
[
"Wo soll die Person am Samstag sein?",
[
"Am Haupteingang",
"Am Hintereingang",
"Im Büro"
],
1,
"Im Text: „dann um sieben Uhr am Hintereingang“."
]
],
"https://d8j0ntlcm91z4.cloudfront.net/user_38tIQPWpEsaUmk18tYN8mskaaAF/hf_20260826_073824_4c97d79d-9d0a-466a-b3c9-2b1fe9bce8d3.mp3": [
[
"Warum hat sie eine Absage bekommen?",
[
"Wegen ihrer wenigen Erfahrung",
"Wegen ihrer Gehaltsvorstellung",
"Wegen ihres fehlenden Zeugnisses"
],
1,
"Im Text: „Angeblich passte meine Gehaltsvorstellung nicht.“"
],
[
"Was hatte sie als Gehalt geschrieben?",
[
"2.800 Euro netto",
"2.800 Euro brutto",
"2.080 Euro brutto"
],
1,
"Im Text: „Zweitausendachthundert brutto.“"
]
],
"https://d8j0ntlcm91z4.cloudfront.net/user_38tIQPWpEsaUmk18tYN8mskaaAF/hf_20260826_073824_cd70adf7-0db6-4022-9149-58f2cb3eaf4f.mp3": [
[
"Bis wann ist die Buchhaltung diese Woche erreichbar?",
[
"Bis 12 Uhr",
"Bis 15 Uhr",
"Bis 13 Uhr"
],
2,
"Im Text: „erreichen Sie uns diese Woche nur bis dreizehn Uhr“."
],
[
"Wie soll man Fragen zu offenen Rechnungen stellen?",
[
"Schriftlich, mit Kundennummer",
"Telefonisch, mit Kundennummer",
"Schriftlich, mit Rechnungsnummer"
],
2,
"Im Text: „Fragen zu offenen Rechnungen schicken Sie bitte schriftlich, mit der Rechnungsnummer im Betreff.“"
]
],
"https://d8j0ntlcm91z4.cloudfront.net/user_38tIQPWpEsaUmk18tYN8mskaaAF/hf_20260826_073824_c6963f99-a618-40bb-b2e6-56be86ad00e1.mp3": [
[
"Wie viel ist auf der Rechnung zu viel?",
[
"Knapp vierzig Euro",
"Knapp vierzehn Euro",
"Knapp vierhundert Euro"
],
0,
"Im Text: „es sind knapp vierzig Euro zu viel“."
],
[
"Was will Aydin jetzt tun?",
[
"Einen neuen Lieferanten suchen",
"Bei Möller eine Gutschrift anfragen",
"Die Rechnung sofort überweisen"
],
1,
"Im Text: „Ich frage bei Möller nach einer Gutschrift.“"
]
],
"https://d8j0ntlcm91z4.cloudfront.net/user_38tIQPWpEsaUmk18tYN8mskaaAF/hf_20260826_073824_23143509-4939-4809-96d8-4c420c4e98d8.mp3": [
[
"Wann hat die Person überwiesen?",
[
"Am dritten März",
"Am zweiten März",
"Am zweiten Mai"
],
1,
"Im Text: „die Überweisung vom zweiten März“."
],
[
"Was passiert mit der Mahnung?",
[
"Sie ist erledigt.",
"Sie muss bezahlt werden.",
"Sie wird noch erhöht."
],
0,
"Im Text: „Ich kläre das, die Mahnung ist erledigt.“"
]
],
"https://d8j0ntlcm91z4.cloudfront.net/user_38tIQPWpEsaUmk18tYN8mskaaAF/hf_20260826_073824_670ec816-e242-488c-b74b-cd8ac9daaa64.mp3": [
[
"Wie viele Kontoauszüge fehlen noch?",
[
"Drei",
"Vier",
"Zwei"
],
0,
"Im Text: „Drei Kontoauszüge fehlen noch“."
],
[
"Ab wann wird es ruhiger?",
[
"Ab dem Ersten",
"Ab nächster Woche",
"Ab Montag"
],
0,
"Im Text: „Ab dem Ersten wird es ruhiger“."
]
],
"https://d8j0ntlcm91z4.cloudfront.net/user_38tIQPWpEsaUmk18tYN8mskaaAF/hf_20260826_074039_eb75ba62-7fb0-4487-b482-1dd9ef777f8c.mp3": [
[
"Wo findet die Besprechung jetzt statt?",
[
"Im großen Raum",
"Oben im zweiten Stock",
"Unten neben der Küche"
],
2,
"Im Text: „nicht im großen Raum …, sondern unten neben der Küche“."
],
[
"Was sollen die Kollegen selbst mitbringen?",
[
"Die Tagesordnung",
"Einen Laptop",
"Das Protokoll"
],
0,
"Im Text: „Bitte bringen Sie die Tagesordnung selbst mit“."
]
],
"https://d8j0ntlcm91z4.cloudfront.net/user_38tIQPWpEsaUmk18tYN8mskaaAF/hf_20260826_074039_2eb76630-4864-4ff2-9cc4-5f1c7803d72a.mp3": [
[
"Wann war der ursprüngliche Termin?",
[
"Am Mittwoch um zehn Uhr",
"Am Dienstag um zehn Uhr",
"Am Mittwoch am Nachmittag"
],
0,
"Im Text: „unseren Termin am Mittwoch um zehn Uhr“."
],
[
"Welchen neuen Tag schlägt die Anruferin vor?",
[
"Nächste Woche Dienstag",
"Nächste Woche Mittwoch",
"Diese Woche Dienstag"
],
0,
"Im Text: „Können wir auf nächste Woche Dienstag gehen“."
]
],
"https://d8j0ntlcm91z4.cloudfront.net/user_38tIQPWpEsaUmk18tYN8mskaaAF/hf_20260826_074040_630559a1-9651-4e57-8cdf-427c6b3f9781.mp3": [
[
"Was braucht der Kunde?",
[
"Neue Ordner und Stifte",
"Neue Ordner und Zettel",
"Neue Stifte und Papier"
],
0,
"Im Text: „ich brauche neue Ordner und zwei Schachteln Stifte“."
],
[
"Wie oft wird der Bürobedarf bestellt?",
[
"Einmal pro Woche",
"Zweimal im Monat",
"Einmal im Monat"
],
2,
"Im Text: „nur noch einmal im Monat, immer zum Ersten“."
]
],
"https://d8j0ntlcm91z4.cloudfront.net/user_38tIQPWpEsaUmk18tYN8mskaaAF/hf_20260826_074039_c3a29e56-d97a-4510-85b8-c209959c45d7.mp3": [
[
"Warum wird es nächste Woche eng?",
[
"Sie hat selbst Urlaub",
"Sie vertritt zwei Kolleginnen",
"Sie bekommt zwei neue Kolleginnen"
],
1,
"Im Text: „Ich mache die Vertretung für zwei Kolleginnen gleichzeitig.“"
],
[
"Was macht sie mit den Telefonen?",
[
"Sie schaltet sie aus",
"Sie nimmt alle Anrufe an",
"Sie leitet sie weiter"
],
2,
"Im Text: „die Telefone leite ich weiter“."
]
],
"https://d8j0ntlcm91z4.cloudfront.net/user_38tIQPWpEsaUmk18tYN8mskaaAF/hf_20260826_074039_d2d15c28-db95-415a-bca7-67ff4271dbf9.mp3": [
[
"Was soll man bei einem Stromausfall im Haus zuerst tun?",
[
"Die Sicherungen im Verteiler prüfen",
"Sofort die Taste Eins drücken",
"Den Zählerstand ablesen und nennen"
],
0,
"Im Text: „prüfen Sie bitte zuerst die Sicherungen im Verteiler“."
],
[
"Welche Taste drückt man, wenn die ganze Straße dunkel ist?",
[
"Die Drei",
"Die Eins",
"Die Zwei"
],
1,
"Im Text: „Ist die ganze Straße dunkel, drücken Sie die Eins.“"
]
],
"https://d8j0ntlcm91z4.cloudfront.net/user_38tIQPWpEsaUmk18tYN8mskaaAF/hf_20260826_074039_f5e65c78-4286-4bba-b4b0-644bedb65535.mp3": [
[
"Welchen neuen Termin schlägt die Firma vor?",
[
"Dienstag um halb acht",
"Donnerstag um neun",
"Donnerstag um halb acht"
],
2,
"Im Text: „Ich schlage Ihnen Donnerstag um halb acht vor.“"
],
[
"Worum bittet die Firma Frau Adamczyk außerdem?",
[
"Den Heizkörper im Flur freihalten",
"Den Heizkörper im Flur entlüften",
"Die Heizung im Flur ausschalten"
],
0,
"Im Text: „stellen Sie bis dahin nichts vor den Heizkörper im Flur“."
]
],
"https://d8j0ntlcm91z4.cloudfront.net/user_38tIQPWpEsaUmk18tYN8mskaaAF/hf_20260826_074253_65d06b5f-45e3-436b-8701-c9bde2f616dd.mp3": [
[
"Wann kann die Firma kommen?",
[
"Heute zwischen acht und zwölf",
"Morgen zwischen zwölf und vier",
"Morgen zwischen acht und zwölf"
],
2,
"Im Text: „Wir können morgen zwischen acht und zwölf kommen.“"
],
[
"Wie viel kostet die Anfahrt?",
[
"Neunzehn Euro",
"Neunundneunzig Euro",
"Neunundvierzig Euro"
],
2,
"Im Text: „Die Anfahrt neunundvierzig Euro“."
]
],
"https://d8j0ntlcm91z4.cloudfront.net/user_38tIQPWpEsaUmk18tYN8mskaaAF/hf_20260826_074252_1e1f8d81-a258-41af-b769-ddc7ca167ff8.mp3": [
[
"Was ist das Problem mit der Heizung?",
[
"Sie wird oben warm, unten nicht",
"Sie wird unten warm, oben nicht",
"Sie wird gar nicht mehr warm"
],
1,
"Im Text: „Unten wird sie warm, oben bleibt sie kalt.“"
],
[
"Wie lange hat der Kundendienst beim Freund gebraucht?",
[
"Zehn Minuten",
"Zwanzig Minuten",
"Eine Stunde"
],
0,
"Im Text: „Bei mir hat er nur zehn Minuten gebraucht“."
]
],
"https://d8j0ntlcm91z4.cloudfront.net/user_38tIQPWpEsaUmk18tYN8mskaaAF/hf_20260826_074253_749819ed-24f6-4a97-9ffd-392ba40ea8a7.mp3": [
[
"Wann fährt der Bus los?",
[
"Um neun Uhr",
"Um neun Uhr dreißig",
"Um acht Uhr dreißig"
],
1,
"Im Text: „Wir fahren erst um neun Uhr dreißig los.“"
],
[
"Wo meldet man sich, wenn man sein Essen vergessen hat?",
[
"Bei der Lehrerin",
"Auf dem Schulhof",
"Im Sekretariat"
],
2,
"Im Text: „Wer sein Essen vergessen hat, meldet sich bitte im Sekretariat.“"
]
],
"https://d8j0ntlcm91z4.cloudfront.net/user_38tIQPWpEsaUmk18tYN8mskaaAF/hf_20260826_074253_fb91c194-1dd3-47cd-9c78-fb6f012e14a6.mp3": [
[
"Was schickt die Mutter heute an die Kita?",
[
"Den Zettel als Foto",
"Die Liste per Post",
"Ein Foto von der Oma"
],
0,
"Im Text: „Heute schicke ich Ihnen den Zettel als Foto.“"
],
[
"Wann kommt die Mutter in die Kita, um zu unterschreiben?",
[
"Heute Nachmittag",
"Morgen früh",
"Morgen Nachmittag"
],
1,
"Im Text: „Ich komme morgen früh vorbei und unterschreibe das.“"
]
],
"https://d8j0ntlcm91z4.cloudfront.net/user_38tIQPWpEsaUmk18tYN8mskaaAF/hf_20260826_074253_eb73153c-b86a-48f7-abce-515b4330957f.mp3": [
[
"Wie war die Nacht bei Lasse?",
[
"Unruhig, er hat viel geweint",
"Ruhig, er hat gut geschlafen",
"Kurz, er war sehr früh wach"
],
0,
"Im Text: „Unruhig, Lasse hat viel geweint.“"
],
[
"Was macht der Vater heute?",
[
"Er geht nach einer halben Stunde",
"Er wartet draußen vor dem Haus",
"Er bleibt die ganze Zeit im Raum"
],
2,
"Im Text: „Heute bleiben Sie noch die ganze Zeit im Raum“."
]
],
"https://d8j0ntlcm91z4.cloudfront.net/user_38tIQPWpEsaUmk18tYN8mskaaAF/hf_20260826_074252_e7ce9eee-28b2-4585-a999-31eb9aadc46a.mp3": [
[
"Was hat die Erzieherin während des Streits gemacht?",
[
"Sie hat nur zugeschaut",
"Sie hat den Bagger weggenommen",
"Sie hat die Kinder getrennt"
],
0,
"Im Text: „Ich habe nichts gesagt, nur zugeschaut.“"
],
[
"Wann will sie die Beobachtung aufschreiben?",
[
"Nach dem Elterngespräch",
"Vor dem Elterngespräch",
"Am nächsten Morgen"
],
1,
"Im Text: „Mache ich noch vor dem Elterngespräch.“"
]
],
"https://d8j0ntlcm91z4.cloudfront.net/user_38tIQPWpEsaUmk18tYN8mskaaAF/hf_20260826_074509_ba6354b5-3e8c-49fd-9468-79d74d8c32d0.mp3": [
[
"Warum sind die Rampen drei und vier gesperrt?",
[
"Dort wird der Zaun repariert",
"Dort wird gerade entladen",
"Dort wird das Tor repariert"
],
2,
"Im Text: „dort wird das Tor repariert“."
],
[
"Wer wird nicht entladen?",
[
"Wer ohne Lieferschein kommt",
"Wer mit laufendem Motor kommt",
"Wer ohne Anmeldung kommt"
],
0,
"Im Text: „Wer ohne Lieferschein kommt, wird nicht entladen.“"
]
],
"https://d8j0ntlcm91z4.cloudfront.net/user_38tIQPWpEsaUmk18tYN8mskaaAF/hf_20260826_074509_6c61aeec-52ca-48f1-baff-c34f19e9cf49.mp3": [
[
"Ab wann kann Marek in Erfurt entladen?",
[
"Ab zehn Uhr",
"Ab elf Uhr",
"Ab zwölf Uhr"
],
1,
"Im Text: „du kannst erst ab elf Uhr entladen“."
],
[
"Wann soll Marek seine Pause machen?",
[
"Vor der ersten Entladestelle",
"Nach der Entladung in Erfurt",
"Nach der ersten Entladestelle"
],
2,
"Im Text: „mach die Pause gleich nach der ersten Entladestelle“."
]
],
"https://d8j0ntlcm91z4.cloudfront.net/user_38tIQPWpEsaUmk18tYN8mskaaAF/hf_20260826_074509_c5ae8249-88cb-4ca9-bab2-7b8477d162f7.mp3": [
[
"Wie viele Paletten hat der Fahrer dabei?",
[
"Zehn",
"Acht",
"Zwölf"
],
2,
"Im Text: „ich habe zwölf Paletten für Sie“."
],
[
"Wie lange soll der Fahrer warten?",
[
"Eine gute Stunde",
"Eine halbe Stunde",
"Zwei Stunden"
],
0,
"Im Text: „Wie lange denn? — Eine gute Stunde.“"
]
],
"https://d8j0ntlcm91z4.cloudfront.net/user_38tIQPWpEsaUmk18tYN8mskaaAF/hf_20260826_074509_5c22780e-097d-4304-8023-941f37db8546.mp3": [
[
"Was hat der Fahrer am Ende mit dem Paket gemacht?",
[
"Er hat es vor die Tür gelegt",
"Er hat es wieder mitgenommen",
"Er hat es beim Nachbarn gelassen"
],
1,
"Im Text: „Also habe ich alles wieder mitgenommen.“"
],
[
"Wann war er zu Hause?",
[
"Um sieben",
"Um neun",
"Um acht"
],
2,
"Im Text: „Um acht war ich zu Hause.“"
]
],
"https://d8j0ntlcm91z4.cloudfront.net/user_38tIQPWpEsaUmk18tYN8mskaaAF/hf_20260826_062316_2bcb796f-c486-4d22-82fc-4a96094e19c0.mp3": [
[
"Wie lange ist die Kita im Sommer zu?",
[
"Drei Wochen",
"Zwei Wochen",
"Vier Wochen"
],
0,
"Im Text: „In den Sommerferien ist die Kita drei Wochen zu“."
],
[
"Bis wann soll man die Vollmacht abgeben?",
[
"Bis Montag",
"Bis Mittwoch",
"Bis Freitag"
],
2,
"Im Text: „Bitte bis Freitag abgeben.“"
]
],
"https://d8j0ntlcm91z4.cloudfront.net/user_38tIQPWpEsaUmk18tYN8mskaaAF/hf_20260826_062316_745216fd-86a2-4bc3-80e6-24106efbf0c1.mp3": [
[
"Was soll Frau Yilmaz tun?",
[
"Früher kommen als sonst",
"Erst zur Abholzeit kommen",
"Einen Zettel vom Arzt holen"
],
0,
"Im Text: „Können Sie bitte vorher kommen, nicht erst zur Abholzeit?“"
],
[
"Wen hat die Kita auch schon angerufen?",
[
"Die Oma von Mia",
"Den Mann von Frau Yilmaz",
"Den Arzt von Mia"
],
1,
"Im Text: „Wir haben es auch bei Ihrem Mann versucht.“"
]
],
"https://d8j0ntlcm91z4.cloudfront.net/user_38tIQPWpEsaUmk18tYN8mskaaAF/hf_20260826_062317_30ba3f48-1cc3-4a39-b85b-1f9326ca5de8.mp3": [
[
"Welchen Termin nimmt die Mutter?",
[
"Dienstag um halb elf",
"Donnerstag um neun",
"Donnerstag um halb elf"
],
2,
"Im Text: „Donnerstag um halb elf? — Donnerstag habe ich frei, das passt.“"
],
[
"Was soll die Mutter mitbringen?",
[
"Das blaue Heft",
"Das gelbe Heft",
"Das rote Heft"
],
1,
"Im Text: „Bringen Sie bitte das gelbe Heft mit“."
]
],
"https://d8j0ntlcm91z4.cloudfront.net/user_38tIQPWpEsaUmk18tYN8mskaaAF/hf_20260826_062316_0a1be477-4ad4-4ec2-8e06-c105f56e1ddb.mp3": [
[
"Wen soll die Person fragen?",
[
"Sabine",
"Die Große",
"Die Oma"
],
0,
"Im Text: „Dann frag doch Sabine“."
],
[
"Wie kommt die Große nach Hause?",
[
"Mit Sabine",
"Mit der Oma",
"Allein"
],
2,
"Im Text: „Die kommt allein nach Hause, sie hat ja den Schlüssel.“"
]
],
"https://d8j0ntlcm91z4.cloudfront.net/user_38tIQPWpEsaUmk18tYN8mskaaAF/hf_20260826_062638_4d569692-ed6c-4790-b81c-e565d84be10a.mp3": [
[
"Ab wann ist der Grill an?",
[
"Ab vier Uhr",
"Ab drei Uhr",
"Ab fünf Uhr"
],
0,
"Im Text: „Der Grill ist ab vier Uhr an“."
],
[
"Wie bekommt man Getränke?",
[
"Gegen eine Spende",
"Umsonst am Tisch",
"Für zwei Euro"
],
0,
"Im Text: „Getränke gibt es gegen eine kleine Spende“."
]
],
"https://d8j0ntlcm91z4.cloudfront.net/user_38tIQPWpEsaUmk18tYN8mskaaAF/hf_20260826_062638_d9959547-6300-4aca-852d-d5fad4b10b6c.mp3": [
[
"Warum sagt Nadja für Samstag ab?",
[
"Sie muss am Samstag arbeiten",
"Ihr Mann ist krank",
"Ihr Kind hat Windpocken"
],
2,
"Im Text: „meine Kleine hat Windpocken“."
],
[
"Wann bringt Nadja das Geschenk?",
[
"Am Samstag",
"Nächste Woche",
"Am Freitagabend"
],
1,
"Im Text: „ich bringe es nächste Woche vorbei“."
]
],
"https://d8j0ntlcm91z4.cloudfront.net/user_38tIQPWpEsaUmk18tYN8mskaaAF/hf_20260826_062638_5c76b7ac-4547-4468-b4be-29e99f9f774b.mp3": [
[
"Was brauchen die beiden für die Anmeldung?",
[
"Ausweise und Geburtsurkunden",
"Ausweise und Passfotos",
"Pässe und eine Gästeliste"
],
0,
"Im Text: „Beide Ausweise und die Geburtsurkunden.“"
],
[
"Wie viele Gäste passen in den kleinen Saal?",
[
"Dreißig",
"Zehn",
"Zwanzig"
],
1,
"Im Text: „In den kleinen Saal passen zehn“."
]
],
"https://d8j0ntlcm91z4.cloudfront.net/user_38tIQPWpEsaUmk18tYN8mskaaAF/hf_20260826_062638_776e0eb8-757e-4067-b82b-83cc399b0367.mp3": [
[
"Was sollen die Gäste Jonas schenken?",
[
"Ein Spielzeug",
"Ein Fahrrad",
"Geld im Umschlag"
],
2,
"Im Text: „Steckt lieber ein paar Euro in einen Umschlag“."
],
[
"Wofür sparen die Eltern?",
[
"Für einen Urlaub",
"Für ein Spielzeug",
"Für ein Fahrrad"
],
2,
"Im Text: „wir sparen für sein Fahrrad“."
]
],
"https://d8j0ntlcm91z4.cloudfront.net/user_38tIQPWpEsaUmk18tYN8mskaaAF/hf_20260826_074510_fc97b5c9-2229-439f-a4b6-7f69fe6bff14.mp3": [
[
"An welchem Tag hat der Salon immer Ruhetag?",
[
"Am Sonntag",
"Am Montag",
"Am Dienstag"
],
1,
"Im Text: „Am Montag ist bei uns immer Ruhetag.“"
],
[
"Bis wann ist der Salon heute geöffnet?",
[
"Bis achtzehn Uhr",
"Bis sechzehn Uhr",
"Bis zwanzig Uhr"
],
0,
"Im Text: „Wir haben heute geöffnet bis achtzehn Uhr.“"
]
],
"https://d8j0ntlcm91z4.cloudfront.net/user_38tIQPWpEsaUmk18tYN8mskaaAF/hf_20260826_074509_5c622a43-1923-4296-b1cc-6f25ba944b73.mp3": [
[
"Wann war Frau Berger beim Färben?",
[
"Gestern",
"Vorgestern",
"Letzte Woche"
],
0,
"Im Text: „Ich war gestern bei Ihnen zum Färben.“"
],
[
"Wann möchte Frau Berger vorbeikommen?",
[
"Morgen nach elf Uhr",
"Heute vor elf Uhr",
"Morgen vor elf Uhr"
],
2,
"Im Text: „morgen Vormittag … am liebsten vor elf Uhr“."
]
],
"https://d8j0ntlcm91z4.cloudfront.net/user_38tIQPWpEsaUmk18tYN8mskaaAF/hf_20260826_074723_97783ed5-1be5-488a-8d5a-7c4201af57df.mp3": [
[
"Um wie viel Uhr ist ein Termin frei?",
[
"Um vierzehn Uhr",
"Um sechzehn Uhr",
"Um achtzehn Uhr"
],
1,
"Im Text: „Um sechzehn Uhr wäre etwas frei“."
],
[
"Bei wem bekommt die Kundin den Termin?",
[
"Bei Frau Yildiz",
"Bei Frau Berger",
"Bei Frau Sonne"
],
0,
"Im Text: „bei Frau Yildiz“."
]
],
"https://d8j0ntlcm91z4.cloudfront.net/user_38tIQPWpEsaUmk18tYN8mskaaAF/hf_20260826_074723_ea23295f-1363-4d07-8867-93ea5a6f260f.mp3": [
[
"Was hat sie am ersten Tag gemacht?",
[
"Nur geschnitten und gefärbt",
"Nur gefärbt und geföhnt",
"Nur gewaschen und geföhnt"
],
2,
"Im Text: „Ich habe nur gewaschen und geföhnt.“"
],
[
"Wie viel Trinkgeld hat sie bekommen?",
[
"Zwei Euro",
"Fünf Euro",
"Zehn Euro"
],
1,
"Im Text: „eine Kundin hat mir Trinkgeld gegeben, fünf Euro“."
]
],
"https://d8j0ntlcm91z4.cloudfront.net/user_38tIQPWpEsaUmk18tYN8mskaaAF/hf_20260826_074723_5cfabcb5-dfb4-404b-8ca5-0ca8d344bf8e.mp3": [
[
"Warum schließt der Markt morgen früher?",
[
"Wegen der Inventur",
"Wegen eines Feiertags",
"Wegen einer Störung"
],
0,
"Im Text: „Wegen der Inventur schließen wir morgen bereits um sechzehn Uhr.“"
],
[
"Wer soll zur Kasse vier gehen?",
[
"Kunden mit kleineren Einkäufen",
"Kunden mit großen Einkäufen",
"Kunden von der Frischetheke"
],
0,
"Im Text: „bitte gehen Sie dort mit kleineren Einkäufen hin“."
]
],
"https://d8j0ntlcm91z4.cloudfront.net/user_38tIQPWpEsaUmk18tYN8mskaaAF/hf_20260826_074723_32436579-7c07-4a36-b451-58faaf36745d.mp3": [
[
"Warum ändert sich der Schichtplan?",
[
"Ein Kollege hat Urlaub",
"Die Filiale macht Inventur",
"Ein Kollege ist krank"
],
2,
"Im Text: „Ihr Kollege ist krank, deshalb …“."
],
[
"Wann beginnt ihre Schicht am Montag?",
[
"Um sechs Uhr",
"Um sieben Uhr",
"Um acht Uhr"
],
0,
"Im Text: „die Frühschicht ab sechs Uhr“."
]
],
"https://d8j0ntlcm91z4.cloudfront.net/user_38tIQPWpEsaUmk18tYN8mskaaAF/hf_20260826_074723_719adc25-aee4-4fee-b904-b24d41873750.mp3": [
[
"Was bekommt der Kunde nach der Prüfung?",
[
"Sein Geld oder einen Gutschein",
"Ein neues Gerät oder einen Gutschein",
"Ein neues Gerät oder sein Geld"
],
1,
"Im Text: „Sie bekommen danach entweder ein neues Gerät oder einen Gutschein.“"
],
[
"Wie lange dauert das Ganze?",
[
"Etwa drei Wochen",
"Etwa eine Woche",
"Etwa zwei Wochen"
],
2,
"Im Text: „Das dauert etwa zwei Wochen.“"
]
],
"https://d8j0ntlcm91z4.cloudfront.net/user_38tIQPWpEsaUmk18tYN8mskaaAF/hf_20260826_074723_58555dd9-2b59-4017-9398-42205ffb6d35.mp3": [
[
"Bis wann wurde bei der Inventur gezählt?",
[
"Bis halb zehn abends",
"Bis halb elf abends",
"Bis elf Uhr abends"
],
1,
"Im Text: „Bis halb elf abends gezählt“."
],
[
"Was gibt es jetzt jede Woche?",
[
"Eine Kontrolle an der Frischetheke",
"Eine Inventur im ganzen Markt",
"Ein Gespräch mit dem Filialleiter"
],
0,
"Im Text: „Jetzt gibt es jede Woche eine Kontrolle an der Frischetheke.“"
]
],
"https://d8j0ntlcm91z4.cloudfront.net/user_38tIQPWpEsaUmk18tYN8mskaaAF/hf_20260826_074936_94da0ae4-a78f-44db-bbd8-4c850891db63.mp3": [
[
"Wem soll man Fehler beim Packen melden?",
[
"Der Personalabteilung",
"Dem Betriebsrat",
"Der Schichtleitung"
],
2,
"Im Text: „meldet das sofort bei der Schichtleitung“."
],
[
"Wo hängt ab Montag ein neuer Zettel?",
[
"Neben der Tür",
"Neben der Kasse",
"Neben der Waage"
],
2,
"Im Text: „Ab Montag hängt dafür ein neuer Zettel neben der Waage.“"
]
],
"https://d8j0ntlcm91z4.cloudfront.net/user_38tIQPWpEsaUmk18tYN8mskaaAF/hf_20260826_074936_fbc3b6e3-8f16-43f6-81fb-27be04db4c27.mp3": [
[
"Wann möchte Herr Kollmann am liebsten sprechen?",
[
"Heute Nachmittag",
"Morgen früh",
"Morgen Abend"
],
1,
"Im Text: „am besten morgen früh“."
],
[
"Worum geht es in dem Gespräch?",
[
"Um die Bestellung letzte Woche",
"Um den Schichtplan nächste Woche",
"Um die Lieferung von gestern"
],
0,
"Im Text: „Es geht um die Sache mit der Bestellung letzte Woche.“"
]
],
"https://d8j0ntlcm91z4.cloudfront.net/user_38tIQPWpEsaUmk18tYN8mskaaAF/hf_20260826_074936_5a03c03e-4088-4554-832d-69026a4f6de6.mp3": [
[
"Warum schafft er die Arbeit zuerst nicht?",
[
"Er hat noch zwei Aufträge offen",
"Er muss heute um sechs gehen",
"Er hat heute keinen Kollegen"
],
0,
"Im Text: „ich habe schon zwei Aufträge offen“."
],
[
"Wofür bedankt sich der andere?",
[
"Dass er länger bleibt",
"Dass er Ali fragt",
"Dass er es gleich sagt"
],
2,
"Im Text: „Danke, dass du das gleich sagst und nicht erst um sechs.“"
]
],
"https://d8j0ntlcm91z4.cloudfront.net/user_38tIQPWpEsaUmk18tYN8mskaaAF/hf_20260826_074936_4f945c49-5201-4012-834f-6b1f16e89b33.mp3": [
[
"Wann will sie nach mehr Gehalt fragen?",
[
"Morgen",
"Nächste Woche",
"Nächsten Monat"
],
1,
"Im Text: „Ich will nächste Woche nach mehr Gehalt fragen.“"
],
[
"Was will sie im Gespräch zuerst sagen?",
[
"Wie viel sie verdienen will",
"Was sie letztes Jahr übernommen hat",
"Was ihre Kollegen verdienen"
],
1,
"Im Text: „Erst, was ich im letzten Jahr übernommen habe, dann meine Zahl.“"
]
],
"https://d8j0ntlcm91z4.cloudfront.net/user_38tIQPWpEsaUmk18tYN8mskaaAF/hf_20260826_074936_982229f0-e23d-486e-aea6-1eb74e3900d1.mp3": [
[
"Was bekommt man, wenn man später aufsteht?",
[
"Ein Brötchen und einen Kaffee",
"Ein Frühstück auf dem Zimmer",
"Einen Gutschein für morgen"
],
0,
"Im Text: „bekommt an der Rezeption ein belegtes Brötchen und einen Kaffee“."
],
[
"Ab wann werden die Zimmer gereinigt?",
[
"Ab zehn Uhr",
"Ab halb zehn",
"Ab elf Uhr"
],
2,
"Im Text: „Die Zimmer werden ab elf Uhr gereinigt.“"
]
],
"https://d8j0ntlcm91z4.cloudfront.net/user_38tIQPWpEsaUmk18tYN8mskaaAF/hf_20260826_074936_424a63fc-f092-4f79-ab47-269adbe81d40.mp3": [
[
"Welches Problem gibt es mit dem gebuchten Zimmer?",
[
"Eine Heizung ist kaputt",
"Das Zimmer ist zu laut",
"Das Zimmer ist zu klein"
],
0,
"Im Text: „Leider ist eine Heizung kaputt.“"
],
[
"Wann beginnt das Frühstück im Hotel?",
[
"Um sechs Uhr",
"Um sieben Uhr",
"Um halb sieben"
],
2,
"Im Text: „Das Frühstück beginnt bei uns schon um halb sieben.“"
]
],
"https://d8j0ntlcm91z4.cloudfront.net/user_38tIQPWpEsaUmk18tYN8mskaaAF/hf_20260826_075151_99102d90-841d-4cf9-b4cd-b94a6c4aef8c.mp3": [
[
"Welche Zimmernummer hat der Gast?",
[
"Zweihundertvier",
"Zweihundertvierzig",
"Vierhundertzwei"
],
0,
"Im Text: „Zimmer zweihundertvier“."
],
[
"Wo soll der Gast seinen Koffer abstellen?",
[
"Rechts neben dem Aufzug",
"Links neben dem Aufzug",
"Links neben der Rezeption"
],
1,
"Im Text: „in den Gepäckraum links neben dem Aufzug“."
]
],
"https://d8j0ntlcm91z4.cloudfront.net/user_38tIQPWpEsaUmk18tYN8mskaaAF/hf_20260826_075150_eda09474-9a5b-4703-91ed-de3637d26bc7.mp3": [
[
"Worüber hat sich der Gast beschwert?",
[
"Das Essen am Abend war kalt",
"Das Zimmer war nachts sehr laut",
"Das Zimmer war nicht gemacht"
],
2,
"Im Text: „sein Zimmer war um vier noch nicht gemacht“."
],
[
"Wie viele Zimmer sind morgen belegt?",
[
"Die Hälfte",
"Alle",
"Nur wenige"
],
1,
"Im Text: „Morgen sind wir voll, alle Zimmer sind ausgebucht.“"
]
],
"https://d8j0ntlcm91z4.cloudfront.net/user_38tIQPWpEsaUmk18tYN8mskaaAF/hf_20260826_075151_e84b5184-d5e4-4e3f-b1fe-89d26d780d73.mp3": [
[
"Wann beginnt die Begehung?",
[
"Um acht Uhr",
"Um zehn Uhr",
"Um neun Uhr"
],
2,
"Im Text: „Die Begehung beginnt um neun Uhr“."
],
[
"Wo sollen die Besucher wegen des Krans bleiben?",
[
"Am hinteren Bauteil",
"Am Container",
"Auf den gelben Wegen"
],
2,
"Im Text: „Der Kran läuft heute den ganzen Tag, bleiben Sie bitte auf den gelben Wegen.“"
]
],
"https://d8j0ntlcm91z4.cloudfront.net/user_38tIQPWpEsaUmk18tYN8mskaaAF/hf_20260826_075150_c9a9c624-6f3b-4b58-94db-a644abd68c28.mp3": [
[
"Wann schickt Herr Bergmann die Stellungnahme?",
[
"Heute Abend",
"Morgen früh",
"Am Freitag"
],
1,
"Im Text: „schicke Ihnen morgen früh die Stellungnahme“."
],
[
"Wann ist der Abgabetermin?",
[
"Am Donnerstag",
"Am Montag",
"Am Freitag"
],
2,
"Im Text: „Den Abgabetermin am Freitag halten wir trotzdem.“"
]
],
"https://d8j0ntlcm91z4.cloudfront.net/user_38tIQPWpEsaUmk18tYN8mskaaAF/hf_20260826_075151_9e1f61ad-de79-4428-9c9e-7391f5ea45d4.mp3": [
[
"Was bringt die Person zum Schalter?",
[
"Die geänderten Zeichnungen",
"Den unterschriebenen Vertrag",
"Die neue Rechnung"
],
0,
"Im Text: „ich bringe die geänderten Zeichnungen für die Halle“."
],
[
"Was soll die Person am Ende unterschreiben?",
[
"Die Freigabe",
"Den Eingang",
"Die Zeichnungen"
],
1,
"Im Text: „Unterschreiben Sie hier bitte den Eingang.“"
]
],
"https://d8j0ntlcm91z4.cloudfront.net/user_38tIQPWpEsaUmk18tYN8mskaaAF/hf_20260826_075150_95e9749e-0cd0-417a-a4b9-8fb85480227a.mp3": [
[
"Wie lange dauerte der Termin beim Kunden?",
[
"Drei Stunden",
"Vier Stunden",
"Zwei Stunden"
],
0,
"Im Text: „Drei Stunden, und am Ende kam wieder ein Änderungswunsch.“"
],
[
"Der wievielte Änderungswunsch war das?",
[
"Der dritte",
"Der zweite",
"Der vierte"
],
2,
"Im Text: „Der wievielte? — Der vierte.“"
]
],
"https://d8j0ntlcm91z4.cloudfront.net/user_38tIQPWpEsaUmk18tYN8mskaaAF/hf_20260826_075407_49e3697e-77f1-4b23-a3e5-2a89ac22eebc.mp3": [
[
"Was ist von dem Ausfall betroffen?",
[
"Alle Anwendungen",
"Nur die Zeiterfassung",
"Nur das Telefon"
],
1,
"Im Text: „Der Ausfall betrifft nur die Zeiterfassung“."
],
[
"Bis wann rechnet man mit einer Lösung?",
[
"Bis zwölf Uhr",
"Bis sechzehn Uhr",
"Bis vierzehn Uhr"
],
2,
"Im Text: „Wir rechnen mit einer Lösung bis vierzehn Uhr.“"
]
],
"https://d8j0ntlcm91z4.cloudfront.net/user_38tIQPWpEsaUmk18tYN8mskaaAF/hf_20260826_075407_40fe7f13-11f7-4b1e-b07a-4cd872d248e2.mp3": [
[
"Wofür braucht Frau Demir einen Zugang?",
[
"Für das Lohnprogramm",
"Für die Zeiterfassung",
"Für das Postfach"
],
0,
"Im Text: „wegen dem Zugang zum Lohnprogramm“."
],
[
"Ab wann ist Herr Kraus im Urlaub?",
[
"Ab Donnerstag",
"Ab Montag",
"Ab Freitag"
],
0,
"Im Text: „ab Donnerstag bin ich im Urlaub“."
]
],
"https://d8j0ntlcm91z4.cloudfront.net/user_38tIQPWpEsaUmk18tYN8mskaaAF/hf_20260826_075407_1b02992d-b36c-4cb3-8451-64e791732d9d.mp3": [
[
"Wann war beim Rechner zuletzt alles in Ordnung?",
[
"Am Montag",
"Am Sonntag",
"Am Freitag"
],
2,
"Im Text: „Wann war das letzte Mal alles in Ordnung? — Freitag.“"
],
[
"Wann soll der Mann wiederkommen?",
[
"Um vierzehn Uhr",
"Um sechzehn Uhr",
"Um achtzehn Uhr"
],
1,
"Im Text: „Kommen Sie um sechzehn Uhr wieder.“"
]
],
"https://d8j0ntlcm91z4.cloudfront.net/user_38tIQPWpEsaUmk18tYN8mskaaAF/hf_20260826_075408_5dbb6a5f-92ef-4821-b6fe-13a6cb104c7c.mp3": [
[
"An welchem Tag ist die Frist?",
[
"Am Donnerstag",
"Am Freitag",
"Am Montag"
],
1,
"Im Text: „Die Frist steht auf Freitag“."
],
[
"Wie oft ruft der Kunde an?",
[
"Zweimal am Tag",
"Einmal am Tag",
"Jeden Morgen"
],
0,
"Im Text: „Zweimal am Tag ruft er an.“"
]
],
"https://d8j0ntlcm91z4.cloudfront.net/user_38tIQPWpEsaUmk18tYN8mskaaAF/hf_20260826_062638_829e4aa0-0770-4ce0-999f-59948c629e35.mp3": [
[
"Warum schließt der Supermarkt heute früher?",
[
"Wegen eines Feiertags",
"Wegen einer Störung",
"Wegen der Inventur"
],
2,
"Im Text: „weil wir Inventur machen“."
],
[
"Für wen ist die Kasse drei heute?",
[
"Für Kunden mit Flaschen",
"Für Kunden mit Kindern",
"Für Kunden mit wenigen Waren"
],
2,
"Im Text: „Die Kasse drei ist heute nur für Kunden mit wenigen Waren geöffnet.“"
]
],
"https://d8j0ntlcm91z4.cloudfront.net/user_38tIQPWpEsaUmk18tYN8mskaaAF/hf_20260826_062638_7460b4be-b77b-4847-a9da-2c4c63b731c3.mp3": [
[
"Was war mit der Milch?",
[
"Sie war abgelaufen",
"Sie war zu teuer",
"Sie war offen"
],
0,
"Im Text: „wegen der Milch, die schon abgelaufen war“."
],
[
"Wohin soll Frau Petrova kommen?",
[
"Zur Frischetheke",
"Zur Information",
"Zum Pfandautomaten"
],
1,
"Im Text: „Kommen Sie einfach zur Information neben der Kasse eins.“"
]
],
"https://d8j0ntlcm91z4.cloudfront.net/user_38tIQPWpEsaUmk18tYN8mskaaAF/hf_20260826_062848_3b743ae2-bf87-4853-85aa-c070d247cb43.mp3": [
[
"Wie viel kostet der Einkauf?",
[
"Neunzehn Euro achtzig",
"Zwanzig Euro achtzig",
"Neunzehn Euro zwanzig"
],
0,
"Im Text: „Das macht dann neunzehn Euro achtzig.“"
],
[
"Was für eine Tüte möchte der Kunde?",
[
"Eine kleine",
"Eine große",
"Eine aus Papier"
],
0,
"Im Text: „Ja, eine kleine bitte.“"
]
],
"https://d8j0ntlcm91z4.cloudfront.net/user_38tIQPWpEsaUmk18tYN8mskaaAF/hf_20260826_062848_4b320871-bb5c-4a42-b73e-a24c22af41a3.mp3": [
[
"Was war letzte Woche mit dem Automaten?",
[
"Er war voll",
"Er war geschlossen",
"Er war kaputt"
],
2,
"Im Text: „Der Automat war letzte Woche aber kaputt.“"
],
[
"Wo gilt der Bon?",
[
"Nur in diesem Markt",
"In jedem Markt",
"Nur im anderen Markt"
],
0,
"Im Text: „Der Bon gilt übrigens nur in diesem Markt“."
]
],
"https://d8j0ntlcm91z4.cloudfront.net/user_38tIQPWpEsaUmk18tYN8mskaaAF/hf_20260825_195740_b262384a-63ac-424c-b18b-e8494262d8af.mp3": [
[
"Warum passt die Hose nicht?",
[
"Sie ist zu lang",
"Sie ist zu eng",
"Sie ist zu weit"
],
1,
"Im Text: „aber sie ist mir zu eng“."
],
[
"In welcher Farbe gibt es die Hose noch?",
[
"In Schwarz",
"In Grau",
"In Blau"
],
2,
"Im Text: „In Blau hätten wir noch eine.“"
]
],
"https://d8j0ntlcm91z4.cloudfront.net/user_38tIQPWpEsaUmk18tYN8mskaaAF/hf_20260825_195740_ec8bfa71-008c-42bb-a07c-37b631b30d64.mp3": [
[
"Was ist das Problem mit der Jacke?",
[
"Der Reißverschluss klemmt",
"Ein Knopf fehlt",
"Die Farbe ist falsch"
],
0,
"Im Text: „der Reißverschluss klemmt“."
],
[
"Wo ist der Kassenbon?",
[
"Im Auto",
"Zu Hause",
"In der Jacke"
],
1,
"Im Text: „den habe ich zu Hause liegen lassen“."
]
],
"https://d8j0ntlcm91z4.cloudfront.net/user_38tIQPWpEsaUmk18tYN8mskaaAF/hf_20260825_195740_927cb8f4-3fac-4a89-99c7-1e42de0f2f23.mp3": [
[
"Um wie viel Prozent sind die Jacken reduziert?",
[
"Um zwanzig Prozent",
"Um fünfzig Prozent",
"Um dreißig Prozent"
],
2,
"Im Text: „um dreißig Prozent reduziert“."
],
[
"Bis wann gilt das Angebot?",
[
"Heute bis achtzehn Uhr",
"Heute bis zwanzig Uhr",
"Morgen bis achtzehn Uhr"
],
0,
"Im Text: „Das Angebot gilt nur heute bis achtzehn Uhr.“"
]
],
"https://d8j0ntlcm91z4.cloudfront.net/user_38tIQPWpEsaUmk18tYN8mskaaAF/hf_20260825_195740_9d710087-1f65-4be9-986a-f6bcb385f3dd.mp3": [
[
"Was denkt die Kundin zuerst?",
[
"Es ist zu eng",
"Es ist zu teuer",
"Es ist zu weit"
],
2,
"Im Text: „ist das nicht zu weit?“"
],
[
"Was passt laut Freundin super zu ihr?",
[
"Die Größe",
"Der Schnitt",
"Die Farbe"
],
2,
"Im Text: „Die Farbe passt super zu dir.“"
]
],
"https://d8j0ntlcm91z4.cloudfront.net/user_38tIQPWpEsaUmk18tYN8mskaaAF/hf_20260826_075408_feaa1948-cb0e-4281-a636-5dd7d7a0d048.mp3": [
[
"Wann beginnt die Hygieneschulung?",
[
"Am Freitag um sechzehn Uhr",
"Heute um sechzehn Uhr",
"Heute um fünfzehn Uhr"
],
1,
"Im Text: „beginnt heute um sechzehn Uhr im Personalraum, nicht wie geplant am Freitag“."
],
[
"Was soll die Küche heute Abend statt Fisch nehmen?",
[
"Fisch aus dem Tiefkühler",
"Rindfleisch aus dem Kühlraum",
"Hähnchenbrust aus dem Kühlraum"
],
2,
"Im Text: „nehmt für heute Abend die Hähnchenbrust aus dem Kühlraum“."
]
],
"https://d8j0ntlcm91z4.cloudfront.net/user_38tIQPWpEsaUmk18tYN8mskaaAF/hf_20260826_075407_4ee5af9c-bc86-4a97-a47d-67cc11446179.mp3": [
[
"Warum kann Tobias heute nicht arbeiten?",
[
"Er muss selbst zum Arzt",
"Er muss mit dem Sohn zum Arzt",
"Er muss zu einer Schulung"
],
1,
"Im Text: „Ich muss mit meinem Sohn zum Arzt.“"
],
[
"Wann müsste Amina da sein?",
[
"Um sechzehn Uhr",
"Um fünfzehn Uhr",
"Um achtzehn Uhr"
],
0,
"Im Text: „Du müsstest um sechzehn Uhr da sein“."
]
],
"https://d8j0ntlcm91z4.cloudfront.net/user_38tIQPWpEsaUmk18tYN8mskaaAF/hf_20260826_075622_70b9849d-a60b-4e8b-9aea-8488e544d996.mp3": [
[
"Was verträgt die Dame nicht?",
[
"Milch",
"Nüsse",
"Eier"
],
1,
"Im Text: „Die Dame verträgt keine Nüsse.“"
],
[
"Was ändert die Küche am Salat?",
[
"Sie lässt den Käse weg",
"Sie lässt die Tomaten weg",
"Sie lässt das Öl weg"
],
2,
"Im Text: „wir machen den Salat ohne das Öl“."
]
],
"https://d8j0ntlcm91z4.cloudfront.net/user_38tIQPWpEsaUmk18tYN8mskaaAF/hf_20260826_075622_0bef1bc9-31c9-47e0-9802-00f9a4005acf.mp3": [
[
"Was hat die Bedienung gemacht?",
[
"Sie hat sich entschuldigt",
"Sie hat den Chef geholt",
"Sie hat ein Getränk gebracht"
],
0,
"Im Text: „die Bedienung hat sich entschuldigt“."
],
[
"Worauf schaut der Chef?",
[
"Auf die Sauberkeit",
"Auf die Zeit",
"Auf die Kühlkette"
],
2,
"Im Text: „Der schaut nur, ob wir die Kühlkette einhalten.“"
]
],
"https://d8j0ntlcm91z4.cloudfront.net/user_38tIQPWpEsaUmk18tYN8mskaaAF/hf_20260826_075622_e2af5951-bdc2-4034-9b3c-09fae739c243.mp3": [
[
"Wann kommt der Lastwagen aus Hamburg?",
[
"Um dreizehn Uhr",
"Um zehn Uhr",
"Um elf Uhr"
],
0,
"Im Text: „kommt statt um zehn erst um dreizehn Uhr“."
],
[
"Was sollen die Mitarbeiter bis dahin tun?",
[
"Aufträge für den Süden kommissionieren",
"Aufträge für Hamburg kommissionieren",
"Den Boden an Rampe zwei reinigen"
],
0,
"Im Text: „Bis dahin kommissionieren Sie bitte die Aufträge für den Süden.“"
]
],
"https://d8j0ntlcm91z4.cloudfront.net/user_38tIQPWpEsaUmk18tYN8mskaaAF/hf_20260826_075622_23f8c1c8-fdbc-48b9-82e5-01aa5ddf5e9f.mp3": [
[
"Wann ist die Schulung?",
[
"Am Montag um acht",
"Am Mittwoch um zehn",
"Am Mittwoch um acht"
],
2,
"Im Text: „Die Schulung ist am Mittwoch um acht Uhr“."
],
[
"Was soll Herr Osei mitbringen?",
[
"Den alten Schein und den Ausweis",
"Den Ausweis und ein Passfoto",
"Den alten Schein und ein Passfoto"
],
0,
"Im Text: „Bringen Sie bitte den alten Schein und Ihren Ausweis mit.“"
]
],
"https://d8j0ntlcm91z4.cloudfront.net/user_38tIQPWpEsaUmk18tYN8mskaaAF/hf_20260826_075623_0e61e743-d888-411a-8f34-93bbb4d33275.mp3": [
[
"Zu welcher Rampe soll der Fahrer?",
[
"Rampe vier",
"Rampe zwei",
"Rampe zwölf"
],
0,
"Im Text: „Wo soll ich hin? — Rampe vier.“"
],
[
"Was soll der Fahrer am Ende tun?",
[
"Die Paletten nachzählen",
"Auf dem Schein unterschreiben",
"Die fehlenden Paletten holen"
],
1,
"Im Text: „Unterschreiben Sie hier bitte auch.“"
]
],
"https://d8j0ntlcm91z4.cloudfront.net/user_38tIQPWpEsaUmk18tYN8mskaaAF/hf_20260826_075622_2b3a6c41-886b-4931-99eb-83b3490ee247.mp3": [
[
"Wie viele Kilometer läuft sie am Tag?",
[
"Zehn",
"Zwölf",
"Zwanzig"
],
2,
"Im Text: „Zwanzig Kilometer laufe ich am Tag“."
],
[
"Wann piept der Scanner?",
[
"Wenn man zu langsam ist",
"Wenn ein Fehler passiert",
"Wenn die Pause beginnt"
],
0,
"Im Text: „Der piept, wenn du zu langsam bist.“"
]
],
"https://d8j0ntlcm91z4.cloudfront.net/user_38tIQPWpEsaUmk18tYN8mskaaAF/hf_20260826_075836_3f32f126-58d3-4237-985d-09ea6a25eae0.mp3": [
[
"Wann fangen die Helfer heute an?",
[
"Um halb acht",
"Um halb neun",
"Um neun Uhr"
],
1,
"Im Text: „Wir fangen heute erst um halb neun an“."
],
[
"Wo treffen sich alle nachher?",
[
"Am oberen Feld",
"Am Hofladen",
"Am unteren Feld"
],
2,
"Im Text: „Der Anhänger steht am unteren Feld, dort treffen wir uns nachher.“"
]
],
"https://d8j0ntlcm91z4.cloudfront.net/user_38tIQPWpEsaUmk18tYN8mskaaAF/hf_20260826_075836_1fb29138-b0eb-4a14-a8c4-daabd4275684.mp3": [
[
"Wann fangen sie morgen an?",
[
"Um fünf Uhr",
"Um sechs Uhr",
"Um vier Uhr"
],
0,
"Im Text: „deshalb fangen wir schon um fünf Uhr an“."
],
[
"Was wollen sie vor dem Hagel holen?",
[
"Die Äpfel vom oberen Feld",
"Die Birnen vom unteren Feld",
"Die Äpfel vom unteren Feld"
],
2,
"Im Text: „Wir wollen die Äpfel vom unteren Feld holen“."
]
],
"https://d8j0ntlcm91z4.cloudfront.net/user_38tIQPWpEsaUmk18tYN8mskaaAF/hf_20260826_075836_cce09862-07a4-4279-ae1e-c0d524eb3b5d.mp3": [
[
"Wo bekommt man die Milch?",
[
"Drinnen an der Kasse",
"Direkt im Stall",
"Draußen am Automaten"
],
2,
"Im Text: „Ja, draußen am Automaten, rund um die Uhr.“"
],
[
"Was kostet ein Liter Milch?",
[
"Einen Euro zehn",
"Zwei Euro zehn",
"Einen Euro"
],
0,
"Im Text: „Ein Liter kostet einen Euro zehn.“"
]
],
"https://d8j0ntlcm91z4.cloudfront.net/user_38tIQPWpEsaUmk18tYN8mskaaAF/hf_20260826_075836_58ac1056-9530-491b-855b-02a3c8ed61f5.mp3": [
[
"Wie wird bei der Spargelernte bezahlt?",
[
"Nach Stunden",
"Im Akkord",
"Pro Woche"
],
1,
"Im Text: „bezahlt wird im Akkord“."
],
[
"Wann macht Marek den Stall?",
[
"Nur abends",
"Nur morgens",
"Morgens und abends"
],
0,
"Im Text: „Machst du auch den Stall? — Nur abends.“"
]
],
"https://d8j0ntlcm91z4.cloudfront.net/user_38tIQPWpEsaUmk18tYN8mskaaAF/hf_20260826_075836_7e833ba1-0f3d-4fb8-9821-cc1d4f6a52ba.mp3": [
[
"Wie lange wartet man im Moment?",
[
"Etwa zwei Stunden",
"Etwa eine Stunde",
"Etwa eine halbe Stunde"
],
1,
"Im Text: „Im Moment warten Sie etwa eine Stunde.“"
],
[
"Was soll man mit einer Überweisung tun?",
[
"Im Wartezimmer zeigen",
"Beim Arzt abgeben",
"Am Schalter abgeben"
],
2,
"Im Text: „Wer eine Überweisung dabei hat, gibt sie bitte am Schalter ab.“"
]
],
"https://d8j0ntlcm91z4.cloudfront.net/user_38tIQPWpEsaUmk18tYN8mskaaAF/hf_20260826_075836_9f574c17-a033-4745-b6a1-02d9e848b765.mp3": [
[
"An welchem Tag ist die Blutabnahme?",
[
"Am Montag",
"Am Donnerstag",
"Am Dienstag"
],
1,
"Im Text: „Ihr Termin zur Blutabnahme am Donnerstag“."
],
[
"Wann wird der Befund besprochen?",
[
"Am Donnerstag am Telefon",
"Am Freitag in der Praxis",
"Am Montag in der Sprechstunde"
],
2,
"Im Text: „Den Befund besprechen wir dann in der Sprechstunde am Montag.“"
]
],
"https://d8j0ntlcm91z4.cloudfront.net/user_38tIQPWpEsaUmk18tYN8mskaaAF/hf_20260826_080051_253f8145-f51e-4621-bf18-357f89db4932.mp3": [
[
"Wann ist der Termin beim Hautarzt?",
[
"Dienstag um acht Uhr fünfzehn",
"Donnerstag um acht Uhr fünfzehn",
"Dienstag um acht Uhr fünfzig"
],
0,
"Im Text: „Am Dienstag um acht Uhr fünfzehn wäre etwas frei.“"
],
[
"Woran soll der Patient noch denken?",
[
"An seine Karte",
"An seinen Ausweis",
"An seine Befunde"
],
0,
"Im Text: „denken Sie an Ihre Karte“."
]
],
"https://d8j0ntlcm91z4.cloudfront.net/user_38tIQPWpEsaUmk18tYN8mskaaAF/hf_20260826_080051_69ab8e2a-0786-4ba3-880a-1d7a0e0e8040.mp3": [
[
"Wie lange wartet der Herr schon?",
[
"Seit zehn Minuten",
"Seit einer halben Stunde",
"Seit einer Stunde"
],
2,
"Im Text: „wartet seit einer Stunde“."
],
[
"Wo soll die Kollegin anrufen?",
[
"Im Labor",
"Bei der Ärztin",
"Beim Patienten"
],
0,
"Im Text: „Und ruf im Labor an, seine Werte sind immer noch nicht da.“"
]
],
"https://d8j0ntlcm91z4.cloudfront.net/user_38tIQPWpEsaUmk18tYN8mskaaAF/hf_20260826_080051_82c36c09-44ad-40a6-9e38-22bce3cb0f34.mp3": [
[
"Bis wann steht die große Fräse still?",
[
"Bis zum Abend",
"Bis zum Mittag",
"Bis vierzehn Uhr"
],
1,
"Im Text: „steht bis zum Mittag still“."
],
[
"Wo liegen die neuen Schutzbrillen?",
[
"Auf dem Tisch bei der Tür",
"In der Qualitätskontrolle",
"Im Schrank am Eingang"
],
2,
"Im Text: „Die neuen Schutzbrillen liegen ab heute im Schrank am Eingang.“"
]
],
"https://d8j0ntlcm91z4.cloudfront.net/user_38tIQPWpEsaUmk18tYN8mskaaAF/hf_20260826_080051_b9a7806e-d188-4465-a38e-6ba1a15a1fbf.mp3": [
[
"Wie viele Teile sind durchgefallen?",
[
"Zwanzig",
"Zwölf",
"Zwei"
],
0,
"Im Text: „Die zwanzig Teile von gestern sind bei der Kontrolle durchgefallen.“"
],
[
"Was soll Herr Nowak vor dem Anstellen der Maschine tun?",
[
"Die Teile noch einmal messen",
"Die Zeichnung genau anschauen",
"Den Meister anrufen"
],
1,
"Im Text: „Schau dir bitte gleich früh die Zeichnung noch einmal genau an, bevor du die Maschine anstellst.“"
]
],
"https://d8j0ntlcm91z4.cloudfront.net/user_38tIQPWpEsaUmk18tYN8mskaaAF/hf_20260826_080051_587d3e5c-c76a-40db-97e2-78a34cbb1a9b.mp3": [
[
"Welche Größe haben die Fräser?",
[
"Sechs Millimeter",
"Zehn Millimeter",
"Acht Millimeter"
],
2,
"Im Text: „Welche Größe …? — Acht Millimeter.“"
],
[
"Wann kommt der zweite Fräser?",
[
"Am Donnerstag",
"Am Dienstag",
"Am Freitag"
],
0,
"Im Text: „der andere kommt am Donnerstag“."
]
],
"https://d8j0ntlcm91z4.cloudfront.net/user_38tIQPWpEsaUmk18tYN8mskaaAF/hf_20260826_080051_de4b8edd-6713-4455-9431-32a658cfe79d.mp3": [
[
"Was trug der Neue beim Wegräumen der Späne nicht?",
[
"Eine Schutzbrille",
"Sicherheitsschuhe",
"Handschuhe"
],
2,
"Im Text: „Der Neue hat ohne Handschuhe die Späne weggeräumt“."
],
[
"Wie lange dauerte die Einweisung heute früh?",
[
"Eine halbe Stunde",
"Eine ganze Stunde",
"Zehn Minuten"
],
0,
"Im Text: „Eine halbe Stunde standen wir da.“"
]
],
"https://d8j0ntlcm91z4.cloudfront.net/user_38tIQPWpEsaUmk18tYN8mskaaAF/hf_20260826_080305_868b8c6e-1289-4b98-8927-177f150dbeeb.mp3": [
[
"Wo findet die Übergabe heute statt?",
[
"Im Dienstzimmer im ersten Stock",
"Im Aufenthaltsraum im Erdgeschoss",
"Im Aufenthaltsraum im ersten Stock"
],
1,
"Im Text: „im Aufenthaltsraum im Erdgeschoss“."
],
[
"Wann beginnt die Übergabe?",
[
"Um sechs Uhr",
"Um sieben Uhr",
"Um sechs Uhr dreißig"
],
2,
"Im Text: „beginnt trotzdem pünktlich um sechs Uhr dreißig“."
]
],
"https://d8j0ntlcm91z4.cloudfront.net/user_38tIQPWpEsaUmk18tYN8mskaaAF/hf_20260826_080305_4a63a6a6-f3cd-4375-9f95-8bec1a204a8f.mp3": [
[
"Wer ist im Nachtdienst ausgefallen?",
[
"Frau Ohm",
"Frau Cetin",
"Frau Marek"
],
0,
"Im Text: „Frau Ohm ist im Nachtdienst ausgefallen“."
],
[
"Bis wann soll Frau Cetin Bescheid sagen?",
[
"Bis heute sechzehn Uhr",
"Bis heute achtzehn Uhr",
"Bis morgen achtzehn Uhr"
],
1,
"Im Text: „Sagen Sie mir bitte bis heute achtzehn Uhr Bescheid“."
]
],
"https://d8j0ntlcm91z4.cloudfront.net/user_38tIQPWpEsaUmk18tYN8mskaaAF/hf_20260826_080305_ba82342a-2693-4903-b1e4-ecde909d6ffd.mp3": [
[
"Wer steht in der Akte als Auskunftsperson?",
[
"Ihre Tante",
"Ihr Bruder",
"Ihre Mutter"
],
1,
"Im Text: „in unserer Akte steht nur Ihr Bruder als Auskunftsperson“."
],
[
"Was soll die Nichte am besten tun?",
[
"Morgen noch einmal kommen",
"Ihren Bruder anrufen",
"Heute mit der Tante sprechen"
],
2,
"Im Text: „sprechen Sie am besten heute mit ihr“."
]
],
"https://d8j0ntlcm91z4.cloudfront.net/user_38tIQPWpEsaUmk18tYN8mskaaAF/hf_20260826_080305_e4545311-d05a-4921-b7fb-a5353f6418f9.mp3": [
[
"Wie oft hat Herr Palm geklingelt?",
[
"Dreimal",
"Zweimal",
"Viermal"
],
0,
"Im Text: „Er hat dreimal geklingelt“."
],
[
"Wo soll sie es noch einmal laut sagen?",
[
"Bei der Ärztin",
"In der Pause",
"In der Übergabe"
],
2,
"Im Text: „Sag es in der Übergabe noch mal laut“."
]
],
"https://d8j0ntlcm91z4.cloudfront.net/user_38tIQPWpEsaUmk18tYN8mskaaAF/hf_20260826_062848_15b0e92b-5206-4e5b-8a85-760c5b7a2e9e.mp3": [
[
"Was soll man am Eingang tun?",
[
"Eine Nummer ziehen",
"Ein Formular holen",
"Den Ausweis zeigen"
],
0,
"Im Text: „Bitte ziehen Sie am Eingang eine Nummer“."
],
[
"Bis wann hat das Fundbüro heute geöffnet?",
[
"Bis sechzehn Uhr",
"Bis vierzehn Uhr",
"Bis achtzehn Uhr"
],
0,
"Im Text: „Das Fundbüro … hat heute bis sechzehn Uhr geöffnet.“"
]
],
"https://d8j0ntlcm91z4.cloudfront.net/user_38tIQPWpEsaUmk18tYN8mskaaAF/hf_20260826_062848_5789da6c-380e-4e7a-8ae6-0ba3cbc6a64c.mp3": [
[
"Wie lautet das Aktenzeichen?",
[
"K vier zwei sieben",
"K sieben vier zwei",
"K vier sieben zwei"
],
2,
"Im Text: „K wie Kaufmann, vier, sieben, zwei“."
],
[
"Wann ruft die Polizei Frau Novak an?",
[
"Wenn das Rad gefunden wird",
"Wenn sich ein Zeuge meldet",
"Wenn die Versicherung fragt"
],
1,
"Im Text: „Falls sich ein Zeuge meldet, rufen wir Sie an.“"
]
],
"https://d8j0ntlcm91z4.cloudfront.net/user_38tIQPWpEsaUmk18tYN8mskaaAF/hf_20260826_062848_12dc0e4b-95b2-4b55-aba3-d0f5151f282b.mp3": [
[
"Wo stand das Fahrrad?",
[
"Vor dem Bahnhof",
"Vor dem Supermarkt",
"Vor dem Haus"
],
0,
"Im Text: „es stand vor dem Bahnhof“."
],
[
"Was bekommt der Mann am Ende?",
[
"Einen Kaufvertrag",
"Eine Bestätigung",
"Eine Rechnung"
],
1,
"Im Text: „Danach bekommen Sie eine Bestätigung.“"
]
],
"https://d8j0ntlcm91z4.cloudfront.net/user_38tIQPWpEsaUmk18tYN8mskaaAF/hf_20260826_062848_fe061d39-779d-43e5-9bc5-8c448f18487e.mp3": [
[
"Wie lange hat die Anzeige gedauert?",
[
"Zehn Minuten",
"Eine Stunde",
"Zwanzig Minuten"
],
2,
"Im Text: „Zwanzig Minuten, dann war die Anzeige fertig.“"
],
[
"Wer geht morgen als Zeugin hin?",
[
"Eine Kollegin",
"Seine Schwester",
"Eine Nachbarin"
],
2,
"Im Text: „Eine Nachbarin hat den Mann gesehen, sie geht morgen als Zeugin hin.“"
]
],
"https://d8j0ntlcm91z4.cloudfront.net/user_38tIQPWpEsaUmk18tYN8mskaaAF/hf_20260826_063253_e16afea0-c343-4f70-8487-2f20fe8b0f96.mp3": [
[
"Wofür ist die Kasse zwei heute geöffnet?",
[
"Nur für Briefe",
"Nur für Pakete",
"Nur für Formulare"
],
1,
"Im Text: „Die Kasse zwei ist heute nur für Pakete geöffnet.“"
],
[
"Wo liegen die Formulare für einen Nachsendeauftrag?",
[
"Am Eingang",
"Am Schalter drei",
"An der Kasse zwei"
],
0,
"Im Text: „Formulare für einen Nachsendeauftrag liegen am Eingang bereit.“"
]
],
"https://d8j0ntlcm91z4.cloudfront.net/user_38tIQPWpEsaUmk18tYN8mskaaAF/hf_20260826_063253_28adde6f-7c05-43e5-85d2-d4372886ebd1.mp3": [
[
"Seit wann liegt das Einschreiben in der Filiale?",
[
"Seit Dienstag",
"Seit Freitag",
"Seit Montag"
],
2,
"Im Text: „Ihr Einschreiben liegt seit Montag bei uns.“"
],
[
"Was braucht seine Frau, wenn sie es abholt?",
[
"Eine Rechnung",
"Eine Vollmacht",
"Ein Foto"
],
1,
"Im Text: „braucht Ihre Frau eine Vollmacht von Ihnen“."
]
],
"https://d8j0ntlcm91z4.cloudfront.net/user_38tIQPWpEsaUmk18tYN8mskaaAF/hf_20260826_063253_c66f0fcb-fc3d-40cc-a2f3-dab50c265ee1.mp3": [
[
"Was hat der Kunde verloren?",
[
"Seinen Personalausweis",
"Die Benachrichtigungskarte",
"Die Sendungsnummer"
],
1,
"Im Text: „Haben Sie die Benachrichtigungskarte dabei? — Nein, die habe ich verloren.“"
],
[
"Wie viel muss der Kunde zahlen?",
[
"Das Porto",
"Zwei Euro",
"Nichts"
],
2,
"Im Text: „das Porto ist schon bezahlt, Sie zahlen nichts“."
]
],
"https://d8j0ntlcm91z4.cloudfront.net/user_38tIQPWpEsaUmk18tYN8mskaaAF/hf_20260826_063253_a0e6db10-56ef-4269-8fbb-7b6651e1cf1c.mp3": [
[
"Wo ist die Packstation?",
[
"Am Supermarkt",
"Am Bahnhof",
"An der Post"
],
0,
"Im Text: „in die Packstation gelegt, gleich am Supermarkt“."
],
[
"Wie geht die Klappe auf?",
[
"Mit einem Schlüssel",
"Mit einer Karte",
"Mit einem Code"
],
2,
"Im Text: „Ich bekomme einen Code aufs Handy, damit geht die Klappe auf.“"
]
],
"https://d8j0ntlcm91z4.cloudfront.net/user_38tIQPWpEsaUmk18tYN8mskaaAF/hf_20260826_080305_f67c87cc-b12a-4354-a84c-4d28dce1acb2.mp3": [
[
"Warum steht die Anlage vier still?",
[
"Wegen einer Störung an der Presse",
"Wegen des Schichtwechsels um zwei",
"Wegen einer Wartung am Band"
],
0,
"Im Text: „Die Anlage vier steht wegen einer Störung an der Presse still.“"
],
[
"Wie lange dauert die Reparatur ungefähr?",
[
"Eine Stunde",
"Zwei Stunden",
"Vier Stunden"
],
1,
"Im Text: „wir rechnen mit ungefähr zwei Stunden“."
]
],
"https://d8j0ntlcm91z4.cloudfront.net/user_38tIQPWpEsaUmk18tYN8mskaaAF/hf_20260826_080305_ea5771d3-c1da-432d-b435-8970b4668eab.mp3": [
[
"Wie lange dauert die Unterweisung?",
[
"Etwa zwanzig Minuten",
"Etwa eine Stunde",
"Etwa vierzig Minuten"
],
2,
"Im Text: „Das dauert etwa vierzig Minuten.“"
],
[
"Was soll Frau Nowak mitbringen?",
[
"Ihren Gehörschutz",
"Ihre Schutzbrille",
"Ihren Ausweis"
],
0,
"Im Text: „Bringen Sie bitte Ihren Gehörschutz mit“."
]
],
"https://d8j0ntlcm91z4.cloudfront.net/user_38tIQPWpEsaUmk18tYN8mskaaAF/hf_20260826_080519_c1490050-b0dd-4f0b-b0c4-afa097a545af.mp3": [
[
"Was ist das Problem an der Anlage sieben?",
[
"Sie schneidet Teile zu kurz",
"Sie zieht Schrauben nicht fest",
"Sie bleibt ständig stehen"
],
1,
"Im Text: „die Anlage sieben zieht die Schrauben nicht fest“."
],
[
"Seit wann gibt es die Störung?",
[
"Seit etwa einer Stunde",
"Seit heute Morgen",
"Seit etwa einer halben Stunde"
],
2,
"Im Text: „Seit ungefähr einer halben Stunde.“"
]
],
"https://d8j0ntlcm91z4.cloudfront.net/user_38tIQPWpEsaUmk18tYN8mskaaAF/hf_20260826_080519_2eca2f5e-5dcc-4664-a025-15ca8bf176bd.mp3": [
[
"Wie viel Zulage bekommt er?",
[
"Fast dreihundert im Monat",
"Fast zweihundert im Monat",
"Fast dreihundert pro Woche"
],
0,
"Im Text: „Fast dreihundert im Monat“."
],
[
"Wie lange dauert die Übergabe morgens?",
[
"Zehn Minuten",
"Neunzig Sekunden",
"Fünf Minuten"
],
2,
"Im Text: „Und die Übergabe morgens? — Fünf Minuten“."
]
],
"https://d8j0ntlcm91z4.cloudfront.net/user_38tIQPWpEsaUmk18tYN8mskaaAF/hf_20260826_080519_5d8c0ae1-b074-485b-8817-f91e4fd8980b.mp3": [
[
"Wo findet die Versammlung statt?",
[
"In der Halle",
"Im Besprechungsraum",
"Im Speiseraum"
],
2,
"Im Text: „Beginn ist um vierzehn Uhr im Speiseraum“."
],
[
"Welches Thema hat die Versammlung?",
[
"Die neuen Schichtpläne",
"Die neuen Maschinen",
"Die neuen Urlaubspläne"
],
0,
"Im Text: „Thema sind die neuen Schichtpläne und die Zuschläge am Wochenende.“"
]
],
"https://d8j0ntlcm91z4.cloudfront.net/user_38tIQPWpEsaUmk18tYN8mskaaAF/hf_20260826_080519_1e4534fe-230f-4846-a8e0-4146bcf3c80a.mp3": [
[
"Ab welchem Tag braucht man das Papier vom Arzt?",
[
"Ab dem dritten Tag",
"Ab dem vierten Tag",
"Ab dem fünften Tag"
],
1,
"Im Text: „Ab dem vierten Tag brauchen wir aber immer das Papier vom Arzt“."
],
[
"Was passiert ohne das Papier vom Arzt?",
[
"Er bekommt eine Abmahnung",
"Er muss die Tage nacharbeiten",
"Der Lohn wird nicht weitergezahlt"
],
2,
"Im Text: „sonst können wir den Lohn nicht weiterzahlen“."
]
],
"https://d8j0ntlcm91z4.cloudfront.net/user_38tIQPWpEsaUmk18tYN8mskaaAF/hf_20260826_080519_adb91bdc-39d6-4ebb-899b-018ac5d560bb.mp3": [
[
"Was sagt ihr Chef über den Urlaub?",
[
"In der Probezeit gibt es halben Urlaub",
"In der Probezeit gibt es keinen Urlaub",
"Erst nach einem Jahr gibt es Urlaub"
],
1,
"Im Text: „Mein Chef sagt, in der Probezeit gibt es gar keinen Urlaub.“"
],
[
"Was passiert mit dem Resturlaub, wenn sie vorher geht?",
[
"Er verfällt",
"Er wird übertragen",
"Er wird ausgezahlt"
],
2,
"Im Text: „Dann wird der Rest ausgezahlt.“"
]
],
"https://d8j0ntlcm91z4.cloudfront.net/user_38tIQPWpEsaUmk18tYN8mskaaAF/hf_20260826_080519_798370f7-799f-458d-a71f-6b1f7d9d06fe.mp3": [
[
"Wie viele Überstunden fehlen ihm?",
[
"Fast zehn",
"Fast zwanzig",
"Fast dreißig"
],
1,
"Im Text: „fast zwanzig Stück“."
],
[
"Wann fragt er im Büro nach?",
[
"Morgen",
"Heute noch",
"Nächste Woche"
],
0,
"Im Text: „Ich frag morgen im Büro nach.“"
]
],
"https://d8j0ntlcm91z4.cloudfront.net/user_38tIQPWpEsaUmk18tYN8mskaaAF/hf_20260826_080733_23e76902-8f0a-45d6-904d-d4de3ede28ca.mp3": [
[
"Bis wann soll man die Sachen wegräumen?",
[
"Bis achtzehn Uhr",
"Bis sechzehn Uhr",
"Bis zwanzig Uhr"
],
0,
"Im Text: „Bitte räumen Sie bis achtzehn Uhr alle Sachen … “."
],
[
"Wo sind die Toiletten am Freitag geschlossen?",
[
"Im ersten Stock",
"Im dritten Stock",
"Im zweiten Stock"
],
2,
"Im Text: „Die Toiletten im zweiten Stock sind am Freitag geschlossen.“"
]
],
"https://d8j0ntlcm91z4.cloudfront.net/user_38tIQPWpEsaUmk18tYN8mskaaAF/hf_20260826_080733_7b1dcf7b-8a8f-4145-834c-8a230e27bc8a.mp3": [
[
"Warum soll Frau Sadiku einspringen?",
[
"Frau Weber ist krank",
"Frau Weber hat Urlaub",
"Herr Kern ist krank"
],
0,
"Im Text: „Frau Weber ist krank.“"
],
[
"Wann ist die Schlüsselübergabe?",
[
"Um sechs Uhr",
"Um sieben Uhr",
"Um acht Uhr"
],
1,
"Im Text: „die Schlüsselübergabe ist um sieben Uhr“."
]
],
"https://d8j0ntlcm91z4.cloudfront.net/user_38tIQPWpEsaUmk18tYN8mskaaAF/hf_20260826_080733_eb5e0c1f-cbd6-4631-929e-10f7d0c70d1f.mp3": [
[
"Welches Mittel soll sie gegen Kalk nehmen?",
[
"Das blaue",
"Das rote",
"Das gelbe"
],
2,
"Im Text: „Nehmen Sie das gelbe.“"
],
[
"Wie viel Mittel kommt auf einen Eimer?",
[
"Ein Verschluss",
"Zwei Verschlüsse",
"Ein halber Verschluss"
],
0,
"Im Text: „nur ein Verschluss auf einen Eimer“."
]
],
"https://d8j0ntlcm91z4.cloudfront.net/user_38tIQPWpEsaUmk18tYN8mskaaAF/hf_20260826_080733_acb68d13-a39c-4fab-a6a5-5d018510a69a.mp3": [
[
"Wie viele Etagen soll die Person in drei Stunden putzen?",
[
"Vier",
"Drei",
"Fünf"
],
0,
"Im Text: „Vier Etagen in drei Stunden, das schaffe ich nicht.“"
],
[
"Was vergisst die Person immer?",
[
"Die Handschuhe",
"Den Schlüssel",
"Den Stundenzettel"
],
2,
"Im Text: „Nur den Stundenzettel vergesse ich immer.“"
]
],
"https://d8j0ntlcm91z4.cloudfront.net/user_38tIQPWpEsaUmk18tYN8mskaaAF/hf_20260826_080733_d558ecbf-483f-47ea-a9a8-5f1e01948752.mp3": [
[
"Bis wann geht die offene Sprechstunde heute?",
[
"Bis fünfzehn Uhr",
"Bis sechzehn Uhr",
"Bis vierzehn Uhr"
],
0,
"Im Text: „Die offene Sprechstunde endet heute schon um fünfzehn Uhr“."
],
[
"Warum endet die Sprechstunde heute früher?",
[
"Eine Kollegin ist heute krank geworden",
"Eine Kollegin fährt zu einem Hausbesuch",
"Das Team hat eine lange Sitzung"
],
1,
"Im Text: „weil eine Kollegin zu einem Hausbesuch fährt“."
]
],
"https://d8j0ntlcm91z4.cloudfront.net/user_38tIQPWpEsaUmk18tYN8mskaaAF/hf_20260826_080733_7bcbe1fa-2f28-4a1d-918d-686eef30bbf3.mp3": [
[
"Wann ist der Termin beim Amt?",
[
"Am Dienstag um zehn Uhr",
"Am Donnerstag um neun Uhr",
"Am Donnerstag um zehn Uhr"
],
2,
"Im Text: „Ihr Termin beim Amt ist am Donnerstag um zehn Uhr.“"
],
[
"Wo treffen sich Herr Aydin und Frau Klose?",
[
"Vor dem Eingang",
"In der Beratungsstelle",
"Im Wartebereich"
],
0,
"Im Text: „Wir treffen uns eine Viertelstunde vorher vor dem Eingang.“"
]
],
"https://d8j0ntlcm91z4.cloudfront.net/user_38tIQPWpEsaUmk18tYN8mskaaAF/hf_20260826_080939_52d1d7f2-07f7-4358-be26-aa188a26f9ea.mp3": [
[
"Von wem ist der Bescheid?",
[
"Vom Finanzamt",
"Vom Jobcenter",
"Von der Krankenkasse"
],
1,
"Im Text: „Das ist ein Bescheid vom Jobcenter“."
],
[
"Was soll der Mann zum Termin mitbringen?",
[
"Nur den neuen Brief",
"Seinen Ausweis und den Brief",
"Alle Briefe, auch die alten"
],
2,
"Im Text: „Bringen Sie bitte alle Briefe mit, auch die alten.“"
]
],
"https://d8j0ntlcm91z4.cloudfront.net/user_38tIQPWpEsaUmk18tYN8mskaaAF/hf_20260826_080939_46d8596c-39f3-4826-b471-6b6e0b5ab298.mp3": [
[
"Was konnte die Beraterin beim Hausbesuch zuerst nur tun?",
[
"Zuhören",
"Den Antrag ausfüllen",
"Die Kollegin anrufen"
],
0,
"Im Text: „ich konnte erst mal nur zuhören“."
],
[
"Wen ruft die Beraterin morgen an?",
[
"Die Frau vom Hausbesuch",
"Ihre Chefin",
"Die Kollegin vom Netzwerk"
],
2,
"Im Text: „rufe morgen die Kollegin vom Netzwerk an“."
]
],
"https://d8j0ntlcm91z4.cloudfront.net/user_38tIQPWpEsaUmk18tYN8mskaaAF/hf_20260826_063253_2bb370ce-6466-477d-8f71-4d475ec4a198.mp3": [
[
"Bis wann müssen die Fahrzeuge vom Gelände?",
[
"Bis sechs Uhr",
"Bis acht Uhr",
"Bis neun Uhr"
],
2,
"Im Text: „bis spätestens neun Uhr vom Gelände zu fahren“."
],
[
"Wie wird die Standgebühr bezahlt?",
[
"Direkt am Stand",
"Am Eingang",
"Vorher im Internet"
],
0,
"Im Text: „Die Standgebühr kassieren wir wie immer direkt am Stand“."
]
],
"https://d8j0ntlcm91z4.cloudfront.net/user_38tIQPWpEsaUmk18tYN8mskaaAF/hf_20260826_063253_eb2c6470-e430-4326-bf78-b4e1618fa908.mp3": [
[
"Wie viel bietet Marco für das Fahrrad?",
[
"Hundertzwanzig Euro",
"Neunzig Euro",
"Hundert Euro"
],
1,
"Im Text: „Ich würde neunzig bieten“."
],
[
"Wann könnte Marco das Fahrrad abholen?",
[
"Am Freitagabend",
"Am Sonntagvormittag",
"Am Samstagvormittag"
],
2,
"Im Text: „Abholen könnte ich es am Samstagvormittag“."
]
],
"https://d8j0ntlcm91z4.cloudfront.net/user_38tIQPWpEsaUmk18tYN8mskaaAF/hf_20260826_063519_8ace8e1e-a252-44a7-9924-f6d03f3af9cf.mp3": [
[
"Was soll eine Lampe allein kosten?",
[
"Fünfundzwanzig Euro",
"Fünfunddreißig Euro",
"Zwanzig Euro"
],
0,
"Im Text: „Was soll die Lampe kosten? — Fünfundzwanzig.“"
],
[
"Wie viel bietet die Kundin zuerst für beide Lampen?",
[
"Vierzig Euro",
"Fünfunddreißig Euro",
"Achtunddreißig Euro"
],
1,
"Im Text: „Sagen wir fünfunddreißig, dann nehme ich sie sofort mit.“"
]
],
"https://d8j0ntlcm91z4.cloudfront.net/user_38tIQPWpEsaUmk18tYN8mskaaAF/hf_20260826_063519_2432af95-b293-4056-9f6c-1ca0e45f213d.mp3": [
[
"Welchen Preis will sie in die Anzeige schreiben?",
[
"Achtzig Euro, Verhandlungsbasis",
"Achtzig Euro, Festpreis",
"Hundert Euro, Verhandlungsbasis"
],
0,
"Im Text: „Achtzig, Verhandlungsbasis.“"
],
[
"Wie soll das Sofa zum Käufer kommen?",
[
"Sie liefert es selbst",
"Mit einer Spedition",
"Der Käufer holt es ab"
],
2,
"Im Text: „Nur Abholung, ich schleppe das nicht durch die halbe Stadt.“"
]
],
"https://d8j0ntlcm91z4.cloudfront.net/user_38tIQPWpEsaUmk18tYN8mskaaAF/hf_20260826_063519_103e5a89-44de-40a6-8dc3-7b52b1c38117.mp3": [
[
"Warum dauert heute alles länger?",
[
"Ein Mechaniker ist krank",
"Ersatzteile kommen später",
"Die Werkstatt ist voll"
],
1,
"Im Text: „Weil eine Lieferung mit Ersatzteilen später kommt“."
],
[
"Wo meldet man sich für einen Ersatzwagen?",
[
"Am Tresen zwei",
"Am Tresen eins",
"Am Tresen drei"
],
0,
"Im Text: „Wer einen Ersatzwagen bestellt hat, meldet sich bitte am Tresen zwei.“"
]
],
"https://d8j0ntlcm91z4.cloudfront.net/user_38tIQPWpEsaUmk18tYN8mskaaAF/hf_20260826_063519_c0ffee89-2b18-4713-b142-c1ce6a91153b.mp3": [
[
"Was muss am Wagen gemacht werden?",
[
"Die Bremsbeläge vorne",
"Die Reifen hinten",
"Die Bremsbeläge hinten"
],
2,
"Im Text: „Die Bremsbeläge hinten sind runter, die müssen raus.“"
],
[
"Wie viel kostet die Reparatur mit den Bremsen etwa?",
[
"Vierhundertneunzig Euro",
"Dreihundertzwanzig Euro",
"Vierhundertzwanzig Euro"
],
0,
"Im Text: „mit den Bremsen werden es etwa vierhundertneunzig“."
]
],
"https://d8j0ntlcm91z4.cloudfront.net/user_38tIQPWpEsaUmk18tYN8mskaaAF/hf_20260826_063519_7245dca2-3f5d-43b9-9739-72a32fb4e618.mp3": [
[
"Was ist dem Kunden aufgefallen?",
[
"Vorne links quietscht es beim Bremsen",
"Vorne rechts quietscht es beim Bremsen",
"Hinten links quietscht es beim Bremsen"
],
0,
"Im Text: „Vorne links quietscht es beim Bremsen.“"
],
[
"Wie viel kostet die Prüfung?",
[
"Hundertdreißig Euro",
"Hundertfünfzig Euro",
"Hundertfünfunddreißig Euro"
],
2,
"Im Text: „Hundertfünfunddreißig Euro“."
]
],
"https://d8j0ntlcm91z4.cloudfront.net/user_38tIQPWpEsaUmk18tYN8mskaaAF/hf_20260826_063519_e06d1c76-1d26-415f-8b16-f90983fdb27e.mp3": [
[
"Wann bekommt die Person ihre Winterreifen?",
[
"Nächste Woche",
"Morgen",
"Nächsten Monat"
],
0,
"Im Text: „Nächste Woche, ich habe einen Termin.“"
],
[
"Wie alt sind ihre Reifen?",
[
"Zwei Jahre",
"Drei Jahre",
"Vier Jahre"
],
1,
"Im Text: „Meine sind doch erst drei Jahre alt.“"
]
],
"https://d8j0ntlcm91z4.cloudfront.net/user_38tIQPWpEsaUmk18tYN8mskaaAF/hf_20260826_063737_fd78a962-9bf0-4ec4-9f5e-f3a5aad5a85a.mp3": [
[
"Wann ist die Praxis wieder da?",
[
"Am Montag ab neun Uhr",
"Am Montag ab acht Uhr",
"Am Dienstag ab acht Uhr"
],
1,
"Im Text: „Wir sind wieder am Montag ab acht Uhr für Sie da.“"
],
[
"Wo findet man die Nummer vom Notdienst?",
[
"An der Praxistür",
"Im Telefonbuch",
"Auf der Internetseite"
],
2,
"Im Text: „Die Nummer finden Sie auf unserer Internetseite.“"
]
],
"https://d8j0ntlcm91z4.cloudfront.net/user_38tIQPWpEsaUmk18tYN8mskaaAF/hf_20260826_063737_d93a2e41-a407-4dcf-ae91-da21df9fd94e.mp3": [
[
"Wann war der alte Termin?",
[
"Am Dienstag um vierzehn Uhr",
"Am Donnerstag um vierzehn Uhr",
"Am Dienstag um neun Uhr"
],
0,
"Im Text: „Ihr Termin am Dienstag um vierzehn Uhr muss leider verschoben werden.“"
],
[
"Was kostet die Zahnreinigung?",
[
"Neunundfünfzig Euro",
"Sechsundneunzig Euro",
"Neunundsechzig Euro"
],
2,
"Im Text: „sie kostet neunundsechzig Euro“."
]
],
"https://d8j0ntlcm91z4.cloudfront.net/user_38tIQPWpEsaUmk18tYN8mskaaAF/hf_20260826_063737_19483e2f-a468-4089-85a3-3682a4469bba.mp3": [
[
"Um wie viel Uhr hat Herr Yilmaz einen Termin?",
[
"Um zehn Uhr",
"Um zwölf Uhr",
"Um elf Uhr"
],
2,
"Im Text: „ich habe einen Termin um elf Uhr, Yilmaz“."
],
[
"Wann war er zuletzt zur Kontrolle?",
[
"Im Herbst",
"Im Frühling",
"Im Sommer"
],
0,
"Im Text: „das letzte Mal war im Herbst“."
]
],
"https://d8j0ntlcm91z4.cloudfront.net/user_38tIQPWpEsaUmk18tYN8mskaaAF/hf_20260826_063737_718029f0-4b2c-4095-8154-1d4b8dd053ce.mp3": [
[
"Wie lange war die Lippe dick?",
[
"Zwei Stunden",
"Drei Stunden",
"Vier Stunden"
],
1,
"Im Text: „Danach war die Lippe drei Stunden lang dick.“"
],
[
"Warum hat es nicht wehgetan?",
[
"Der Arzt war sehr vorsichtig",
"Er hat eine Tablette genommen",
"Er hat eine Betäubung bekommen"
],
2,
"Im Text: „Nein, ich habe eine Betäubung bekommen.“"
]
],
"ton/hoeren-b2/b2-team-klaeren-1.mp3": [
[
"Warum schafft Herr Lang die Auswertung nicht?",
[
"Ihm fehlen noch Daten",
"Zwei Kolleginnen sind krank",
"Er ist selbst krank"
],
1,
"Im Text: „Wir haben gerade einen Engpass …, zwei Kolleginnen sind krank“."
],
[
"Was soll Frau Berger tun, wenn der Vorschlag ein Problem ist?",
[
"Ihm schriftlich antworten",
"Seine Chefin informieren",
"Ihn anrufen"
],
2,
"Im Text: „Wenn das für Sie ein Problem ist, rufen Sie mich bitte an“."
]
],
"ton/hoeren-b2/b2-team-klaeren-2.mp3": [
[
"Woran hat die Vorgesetzte die Unzufriedenheit bemerkt?",
[
"An einer E-Mail der Mitarbeiterin",
"An ihrem Gesichtsausdruck",
"An einer Bemerkung in der Sitzung"
],
1,
"Im Text: „Sie haben nichts gesagt, aber Ihr Gesicht sprach Bände.“"
],
[
"Was bietet die Vorgesetzte an?",
[
"Die Aufteilung noch zu ändern",
"Eine neue Sitzung anzusetzen",
"Die Mitarbeiterin zu versetzen"
],
0,
"Im Text: „Ich kann die Aufteilung ändern, solange sie noch nicht steht.“"
]
],
"ton/hoeren-b2/b2-team-klaeren-3.mp3": [
[
"Welche Regel galt laut Absprache?",
[
"Wer den Kunden kennt, schreibt die Zusammenfassung",
"Wer zuletzt spricht, schreibt die Zusammenfassung",
"Wer den Termin führt, schreibt die Zusammenfassung"
],
2,
"Im Text: „wer den Termin führt, schreibt auch die Zusammenfassung“."
],
[
"Worum geht es in dem Gespräch?",
[
"Um eine Rückmeldung an den Kunden",
"Um einen neuen Termin beim Kunden",
"Um eine Beschwerde des Kunden"
],
0,
"Im Text: „hast du die Rückmeldung an den Kunden geschickt?“"
]
],
"ton/hoeren-b2/b2-team-klaeren-4.mp3": [
[
"Warum laufen die Urlaubsanträge künftig über das Portal?",
[
"Weil sie direkt bei der Personalabteilung landen",
"Weil die Chefin bald das Team verlässt",
"Weil Papieranträge verloren gegangen sind"
],
0,
"Im Text: „dass die Anträge dann automatisch bei der Personalabteilung landen“."
],
[
"Wann sollen Mitarbeitende mit Fragen kommen?",
[
"In den nächsten Tagen",
"Erst kurz vor dem Urlaub",
"In der nächsten Teamsitzung"
],
0,
"Im Text: „Wer Fragen hat, kommt bitte in den nächsten Tagen auf mich zu, nicht erst, wenn der Urlaub ansteht.“"
]
],
"ton/hoeren-b2/b2-amt-widerspruch-1.mp3": [
[
"Ab wann läuft die Frist für den Widerspruch?",
[
"Ab dem Tag, an dem man den Bescheid öffnet",
"Ab dem Datum auf dem Bescheid",
"Ab dem Tag des Anrufs beim Amt"
],
1,
"Im Text: „einen Monat ab dem Datum auf dem Bescheid, nicht ab dem Tag, an dem Sie ihn geöffnet haben“."
],
[
"Was braucht der Widerspruch laut Sachbearbeiter?",
[
"Ein Formular und eine Unterschrift",
"Eine ausführliche Begründung",
"Einen Satz und das Aktenzeichen"
],
2,
"Im Text: „Ein Satz genügt, dazu das Aktenzeichen.“"
]
],
"ton/hoeren-b2/b2-amt-widerspruch-2.mp3": [
[
"Wie lange dauert die Bearbeitung derzeit?",
[
"Bis zu vier Wochen",
"Bis zu sechs Wochen",
"Bis zu acht Wochen"
],
1,
"Im Text: „verlängert sich die Bearbeitungszeit derzeit auf bis zu sechs Wochen“."
],
[
"Wie soll man nach dem Stand des Antrags fragen?",
[
"Per E-Mail mit Aktenzeichen",
"Am Telefon mit Aktenzeichen",
"Persönlich im Bürgerservice"
],
0,
"Im Text: „Schreiben Sie uns bitte mit Ihrem Aktenzeichen per E-Mail.“"
]
],
"ton/hoeren-b2/b2-amt-widerspruch-3.mp3": [
[
"Um wie viel liegt die Wohnung über der angemessenen Höhe?",
[
"Um achtzehn Euro",
"Um hundertachtzig Euro",
"Um achtzig Euro"
],
2,
"Im Text: „Ihre Wohnung liegt achtzig Euro darüber.“"
],
[
"Wie wird am Ende über den Fall entschieden?",
[
"Im Einzelfall",
"Nach einer festen Tabelle",
"Durch ein Gericht"
],
0,
"Im Text: „Das wird im Einzelfall geprüft.“"
]
],
"ton/hoeren-b2/b2-amt-widerspruch-4.mp3": [
[
"Wann hat der Nachbar Widerspruch eingelegt?",
[
"Gestern",
"Letzten Monat",
"Letzte Woche"
],
2,
"Im Text: „Ja, letzte Woche.“"
],
[
"Wie lang war der Widerspruch am Ende?",
[
"Zwei Seiten",
"Eine halbe Seite",
"Fünf Zeilen"
],
2,
"Im Text: „und dann waren es fünf Zeilen“."
]
],
"ton/hoeren-b2/b2-wohnen-vertrag-1.mp3": [
[
"Wie hoch ist die Nachzahlung?",
[
"Vierzig Euro",
"Vierhundert Euro",
"Vierzehnhundert Euro"
],
1,
"Im Text: „eine Nachzahlung von vierhundert Euro“."
],
[
"Welche Kosten sind deutlich gestiegen?",
[
"Die Wasserkosten",
"Die Müllgebühren",
"Die Heizkosten"
],
2,
"Im Text: „die Heizkosten sind bei Ihnen deutlich gestiegen“."
]
],
"ton/hoeren-b2/b2-wohnen-vertrag-2.mp3": [
[
"Welcher Mangel wird in der Küche eingetragen?",
[
"Der Herd geht nicht",
"Der Wasserhahn tropft",
"Die Spüle ist undicht"
],
1,
"Im Text: „Küche: Der Wasserhahn tropft, das trage ich ein.“"
],
[
"Was wird zum Riss in der Fliese notiert?",
[
"Vorbestehend",
"Neu entstanden",
"Schon repariert"
],
0,
"Im Text: „Gut, dann notiere ich: vorbestehend.“"
]
],
"ton/hoeren-b2/b2-wohnen-vertrag-3.mp3": [
[
"Wie lang ist die Kündigungsfrist?",
[
"Ein Monat",
"Drei Monate",
"Sechs Monate"
],
1,
"Im Text: „die Kündigungsfrist sind drei Monate“."
],
[
"Warum lassen sich viele Vermieter trotzdem darauf ein?",
[
"Weil sie dazu verpflichtet sind",
"Weil sie dann mehr Miete bekommen",
"Weil sie selbst nicht suchen müssen"
],
2,
"Im Text: „weil sie die Wohnung dann nicht selbst suchen müssen“."
]
],
"ton/hoeren-b2/b2-wohnen-vertrag-4.mp3": [
[
"An welchen Tagen ist mit Lärm zu rechnen?",
[
"Von Montag bis Mittwoch",
"Von Montag bis Freitag",
"Von Mittwoch bis Freitag"
],
0,
"Im Text: „Von Montag bis Mittwoch ist mit Lärm … zu rechnen.“"
],
[
"Worum werden die Bewohner gebeten?",
[
"Nichts in den Flur zu stellen",
"Das Treppenhaus nicht zu benutzen",
"Die Fenster geschlossen zu halten"
],
0,
"Im Text: „bitte stellen Sie in dieser Zeit nichts in den Flur“."
]
],
"ton/hoeren-b2/b2-medien-einordnen-1.mp3": [
[
"Woran erkennt man an der Kennzeichnung eine Meinung?",
[
"Am Wort „Meldung“ über dem Text",
"Am Namen der Quelle unter dem Text",
"Am Wort „Kommentar“ über dem Text"
],
2,
"Im Text: „Steht Kommentar oder Analyse darüber, ist es ausdrücklich eine Meinung.“"
],
[
"Was nennt eine Meldung laut Radiobeitrag?",
[
"Woher sie ihre Zahlen hat",
"Die Meinung der Redaktion",
"Wie oft sie geteilt wurde"
],
0,
"Im Text: „Eine Meldung nennt, woher sie ihre Zahlen hat.“"
]
],
"ton/hoeren-b2/b2-medien-einordnen-2.mp3": [
[
"Warum steht die Meldung laut der zweiten Person überall?",
[
"Weil viele Redaktionen sie geprüft haben",
"Weil alle voneinander abgeschrieben haben",
"Weil sie von der Regierung kommt"
],
1,
"Im Text: „heißt nur, dass alle voneinander abgeschrieben haben“."
],
[
"Welche Quelle steht bei allen Berichten?",
[
"Verschiedene Zeitungen",
"Eine neue Studie",
"Dieselbe Agentur"
],
2,
"Im Text: „bei allen dieselbe Agentur“."
]
],
"ton/hoeren-b2/b2-medien-einordnen-3.mp3": [
[
"Wo steht der Hinweis „Anzeige“?",
[
"Ganz unten in der Beschreibung",
"Ganz oben im Titel des Videos",
"Am Ende des Videos im Bild"
],
0,
"Im Text: „Ganz unten in der Beschreibung steht Anzeige, ganz klein.“"
],
[
"Was soll die angesprochene Person jetzt tun?",
[
"Das Video löschen",
"Das Kleingedruckte suchen",
"Das Mittel bestellen"
],
1,
"Im Text: „Schau mal, ob du das Kleingedruckte findest.“"
]
],
"ton/hoeren-b2/b2-medien-einordnen-4.mp3": [
[
"Was zeigt der Algorithmus laut Vortrag?",
[
"Mehr von dem, was man lange ansah",
"Vor allem Inhalte, die widersprechen",
"Vor allem Inhalte von Freunden"
],
0,
"Im Text: „Er zeigt Ihnen mehr von dem, was Sie lange angesehen haben.“"
],
[
"Wie beschreibt der Vortragende den Algorithmus?",
[
"Als böse",
"Als zufällig",
"Als einseitig"
],
2,
"Im Text: „Der Algorithmus ist nicht böse, er ist nur einseitig.“"
]
],
"ton/hoeren-c1/c1-verhandeln-1.mp3": [
[
"Warum ist der Zeitpunkt laut Vorgesetzter schwierig?",
[
"Die Zahlen der Abteilung sind schwach",
"Die Stelle wird im Frühjahr gestrichen",
"Das Budget wurde im Dezember festgelegt"
],
2,
"Im Text: „Wir haben das Budget für dieses Jahr im Dezember festgezurrt“."
],
[
"Wie bewertet die Vorgesetzte die Zahlen der Mitarbeiterin?",
[
"Als ausbaufähig",
"Als durchschnittlich",
"Als überzeugend"
],
2,
"Im Text: „Ihre Zahlen sprechen für sich, das will ich gar nicht kleinreden.“"
]
],
"ton/hoeren-c1/c1-verhandeln-2.mp3": [
[
"Wie deutet die Kollegin das Ergebnis des Gesprächs?",
[
"Als Ablehnung",
"Als Vertagung",
"Als Zusage"
],
1,
"Im Text: „Das ist eine Vertagung, keine Ablehnung.“"
],
[
"Wie soll die Mail sein?",
[
"Freundlich und zwei Sätze lang",
"Ausführlich und sehr formell",
"Deutlich und mit einer Frist"
],
0,
"Im Text: „Freundlich, zwei Sätze.“"
]
],
"ton/hoeren-c1/c1-verhandeln-3.mp3": [
[
"Welchen Vorteil hat die Abrechnung pro Quartal laut Sprecher?",
[
"Sie senkt den Gesamtpreis",
"Sie verkürzt die Laufzeit",
"Sie spart beiden Verwaltung"
],
2,
"Im Text: „machen wir eine pro Quartal, das spart uns beiden Verwaltung“."
],
[
"Wann soll der Dienstleister sagen, wenn ihm die Bindung zu lang ist?",
[
"Jetzt gleich",
"In vier Wochen",
"Nach dem ersten Jahr"
],
0,
"Im Text: „sagen Sie es jetzt und nicht in vier Wochen“."
]
],
"ton/hoeren-c1/c1-verhandeln-4.mp3": [
[
"Was passiert laut Kollegen, wenn man die eigene Zahl zuerst nennt?",
[
"Man wirkt zu unsicher",
"Man bekommt sofort ein Angebot",
"Man hat nur noch nach unten Platz"
],
2,
"Im Text: „Sie nennen ihre Zahl zuerst und haben danach nur noch nach unten Platz.“"
],
[
"Was gewinnt man, wenn man nicht sofort ja sagt?",
[
"Einen höheren Preis",
"Eine Nacht zum Nachdenken",
"Die Sympathie der Gegenseite"
],
1,
"Im Text: „aber Sie gewinnen die Nacht, in der Sie merken, was Sie überhört haben“."
]
],
"ton/hoeren-c1/c1-debatte-1.mp3": [
[
"Was räumt die Sprecherin ein?",
[
"Dass die Zahlen im ersten Punkt stimmen",
"Dass der Gesetzentwurf gut gelungen ist",
"Dass die Gemeinden die Kosten tragen"
],
0,
"Im Text: „Ich räume gern ein, dass die Zahlen in Ihrem ersten Punkt stimmen.“"
],
[
"Was setzt die Gegenseite laut Sprecherin voraus?",
[
"Dass der Bund die ganzen Kosten zahlt",
"Dass nur die Gemeinden die Kosten tragen",
"Dass die Zahlen schon veraltet sind"
],
1,
"Im Text: „Sie setzen voraus, dass die Kosten allein bei den Gemeinden hängen bleiben“."
]
],
"ton/hoeren-c1/c1-debatte-2.mp3": [
[
"Wie oft hat der Gast gesagt, es werde geprüft?",
[
"Zweimal",
"Viermal",
"Dreimal"
],
2,
"Im Text: „Sie haben jetzt dreimal gesagt, es werde geprüft.“"
],
[
"Was wollte die fragende Person wissen?",
[
"Ob er dafür oder dagegen ist",
"Wann die Prüfung fertig ist",
"Wer die Fassung überarbeitet"
],
0,
"Im Text: „Meine Frage war eine andere: Sind Sie dafür oder dagegen?“"
]
],
"ton/hoeren-c1/c1-debatte-3.mp3": [
[
"Wie hat das Publikum beim Thema Finanzierung reagiert?",
[
"Es hat applaudiert",
"Es hat protestiert",
"Es blieb still"
],
0,
"Im Text: „ist er auf die Moral ausgewichen, und das Publikum hat applaudiert“."
],
[
"Wie oft hat der Redner laut der zweiten Person Ungefragtes beantwortet?",
[
"Einmal",
"Dreimal",
"Zweimal"
],
2,
"Im Text: „dass er zweimal etwas beantwortet hat, was niemand gefragt hatte“."
]
],
"ton/hoeren-c1/c1-debatte-4.mp3": [
[
"Worum geht es laut Seminar meistens nicht mehr, wenn jemand diesen Satz sagt?",
[
"Um die Erlaubnis",
"Um die Sache",
"Um die Person"
],
1,
"Im Text: „dann geht es meistens nicht mehr um die Sache“."
],
[
"Was bleibt dem Gegenüber bei der empfohlenen Reaktion erhalten?",
[
"Das letzte Wort",
"Die eigene Meinung",
"Die Würde"
],
2,
"Im Text: „ohne dem Gegenüber die Würde zu nehmen“."
]
],
"ton/hoeren-c1/c1-zahlen-hoeren-1.mp3": [
[
"Wie viele Personen wurden befragt?",
[
"Dreißig",
"Dreihundert",
"Dreitausend"
],
1,
"Im Text: „Wir haben dreihundert Personen befragt, nicht dreitausend“."
],
[
"Aus welcher Jahreszeit stammt die Momentaufnahme?",
[
"Aus dem Frühjahr",
"Aus dem Herbst",
"Aus dem Sommer"
],
0,
"Im Text: „eine Momentaufnahme aus dem Frühjahr; im Herbst sah es schon einmal anders aus“."
]
],
"ton/hoeren-c1/c1-zahlen-hoeren-2.mp3": [
[
"Was ist laut Vortrag im Schnitt gestiegen?",
[
"Die Teilnehmerzahl",
"Die Kosten",
"Die Zufriedenheit"
],
2,
"Im Text: „Sie sagen, die Zufriedenheit sei im Schnitt gestiegen.“"
],
[
"Welchen Fall beschreibt die fragende Person als Beispiel?",
[
"Eine Gruppe wurde überhaupt nicht befragt",
"Die Zahlen stammen alle aus dem Vorjahr",
"Eine Hälfte zufriedener, die andere unzufriedener"
],
2,
"Im Text: „Wenn eine Hälfte deutlich zufriedener ist und die andere unzufriedener …“."
]
],
"ton/hoeren-c1/c1-zahlen-hoeren-3.mp3": [
[
"Welche andere Erklärung nennt die Fachperson?",
[
"Lesen macht Menschen gesünder",
"Gesündere Menschen lesen auch mehr",
"Ältere Menschen lesen mehr"
],
1,
"Im Text: „dass Menschen, die gesünder leben, auch mehr lesen“."
],
[
"Wo liegt laut Fachperson meistens der Unterschied?",
[
"Zwischen zwei ähnlichen Studien",
"Zwischen Lesern und Nichtlesern",
"Zwischen Studie und Berichterstattung"
],
2,
"Im Text: „der Unterschied zwischen der Studie und dem, was daraus gemacht wird“."
]
],
"ton/hoeren-c1/c1-zahlen-hoeren-4.mp3": [
[
"Was bedeutet der Anstieg um hundert Prozent im Beispiel?",
[
"Von zwei auf vier Fälle",
"Von zwei auf zweihundert Fälle",
"Von vier auf acht Fälle"
],
0,
"Im Text: „bei zwei Fällen sind es dann vier“."
],
[
"Wie viele Menschen stehen hinter den acht Komma drei Prozent?",
[
"Hundert",
"Tausend",
"Zwölftausend"
],
1,
"Im Text: „obwohl tausend Menschen dahinterstehen“."
]
],
"ton/hoeren-c1/c1-zwischen-den-zeilen-1.mp3": [
[
"Warum hat man sich für jemand anderen entschieden?",
[
"Man suchte bessere Sprachkenntnisse",
"Man suchte jemanden aus dem Haus",
"Man suchte mehr Projekterfahrung"
],
2,
"Im Text: „weil wir jemanden mit mehr Erfahrung im Projektgeschäft gesucht haben“."
],
[
"Was hat die anrufende Person gemacht, um die Zusage ernst zu meinen?",
[
"Sie hat sich eine Notiz gemacht",
"Sie hat die Unterlagen weitergeleitet",
"Sie hat einen Termin angeboten"
],
0,
"Im Text: „Bei mir ist es keine Floskel; ich habe mir eine Notiz gemacht.“"
]
],
"ton/hoeren-c1/c1-zwischen-den-zeilen-2.mp3": [
[
"Wofür bedankt sich die Absenderin in der E-Mail?",
[
"Für den ausführlichen Entwurf",
"Für die schnelle Antwort",
"Für die gute Zusammenarbeit"
],
0,
"Im Text: „Vielen Dank für den ausführlichen Entwurf“."
],
[
"Womit kommt die Kollegin laut Rat in den Termin?",
[
"Mit neuen Argumenten",
"Mit einer Schere",
"Mit einer Liste"
],
1,
"Im Text: „So kommst du mit einer Schere.“"
]
],
"ton/hoeren-c1/c1-zwischen-den-zeilen-3.mp3": [
[
"Seit wann kocht die Köchin?",
[
"Seit dreißig Jahren",
"Seit zwanzig Jahren",
"Seit vierzig Jahren"
],
0,
"Im Text: „Ich koche seit dreißig Jahren“."
],
[
"Was holt die Köchin am Ende?",
[
"Brot und Wurst",
"Salat und Käse",
"Brot und Käse"
],
2,
"Im Text: „ich hole uns Brot und Käse“."
]
],
"ton/hoeren-c1/c1-zwischen-den-zeilen-4.mp3": [
[
"Welches Wort trägt im ersten Beispiel ein Nein?",
[
"„grundsätzlich“",
"„gern“",
"„leider“"
],
0,
"Im Text: „das Wort grundsätzlich trägt hier ein Nein“."
],
[
"Was bedeutet „nicht in diesem Quartal“ laut Sprecher meistens?",
[
"Im nächsten Quartal",
"Eigentlich gar nicht",
"Sobald Geld da ist"
],
1,
"Im Text: „heißt selten später, meistens heißt es nicht“."
]
]
};
  var U = window.UEBUNGEN; if (!U || !U.skills) return;
  U.skills.forEach(function (sk) {
    (sk.themes || []).forEach(function (t) {
      var neu = [];
      (t.exercises || []).forEach(function (e) {
        if (e.type !== 'listen' || !e.audioUrl || !F[e.audioUrl] || e.__hf) return;
        F[e.audioUrl].forEach(function (f) {
          neu.push({ type: 'listen', label: e.label, audioUrl: e.audioUrl, transcript: e.transcript,
            q: f[0], options: f[1], answer: f[2], explain: f[3], __hf: 1 });
        });
      });
      if (neu.length) t.exercises = (t.exercises || []).concat(neu);
    });
  });
})();
