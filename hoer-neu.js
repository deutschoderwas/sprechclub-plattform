/* ============================================================
   hoer-neu.js — neue Hoerthemen fuer den Lernbereich

   Wird NACH uebungen.js geladen und haengt seine Themen an den
   Bereich "Hoeren" an. Die grosse Datei uebungen.js bleibt
   unangetastet; nimmt man die Zeile in konto.html heraus, ist
   alles wie vorher.

   Je Thema: 16 Woerter, 4 echte Hoertexte mit Audio und
   Transkript, 16 Wortbedeutungen. Die Stimme ist Julias eigene.
   ============================================================ */
(function(){
  var U = window.UEBUNGEN;
  if(!U || !U.skills) return;
  var ho = null;
  for(var i=0;i<U.skills.length;i++){ if(U.skills[i].id==='hoeren'){ ho=U.skills[i]; break; } }
  if(!ho) return;
  if(!ho.themes) ho.themes = [];

  var NEU = [
 {
  "id": "amt",
  "title": "Termin beim Amt",
  "level": "B1",
  "emoji": "🎧",
  "words": [
   {
    "de": "der Termin",
    "info": "die feste Zeit für dein Gespräch",
    "emoji": "🗓️"
   },
   {
    "de": "die Anmeldung",
    "info": "der Eintrag deiner Wohnung beim Amt",
    "emoji": "📋"
   },
   {
    "de": "die Unterlagen",
    "info": "alle Papiere, die du mitbringst",
    "emoji": "📄"
   },
   {
    "de": "der Nachweis",
    "info": "ein Papier, das etwas beweist",
    "emoji": "🧾"
   },
   {
    "de": "die Frist",
    "info": "die Zeit bis zum letzten Tag",
    "emoji": "⏳"
   },
   {
    "de": "der Bescheid",
    "info": "die schriftliche Antwort vom Amt",
    "emoji": "✉️"
   },
   {
    "de": "das Formular",
    "info": "ein Blatt mit vielen Feldern",
    "emoji": "📝"
   },
   {
    "de": "die Wartenummer",
    "info": "sie sagt, wann du dran bist",
    "emoji": "🎫"
   },
   {
    "de": "der Sachbearbeiter",
    "info": "die Person hinter dem Schreibtisch",
    "emoji": "👔"
   },
   {
    "de": "die Meldebescheinigung",
    "info": "ein Papier über deine Wohnung",
    "emoji": "🏠"
   },
   {
    "de": "der Antrag",
    "info": "du bittest schriftlich um etwas",
    "emoji": "📨"
   },
   {
    "de": "beglaubigen",
    "info": "amtlich bestätigen, dass etwas echt ist",
    "emoji": "✅"
   },
   {
    "de": "die Gebühr",
    "info": "das Geld, das du zahlen musst",
    "emoji": "💶"
   },
   {
    "de": "die Öffnungszeiten",
    "info": "wann du ins Amt kannst",
    "emoji": "🕘"
   },
   {
    "de": "die Vollmacht",
    "info": "damit darf jemand für dich handeln",
    "emoji": "✍️"
   },
   {
    "de": "nachreichen",
    "info": "etwas später noch bringen",
    "emoji": "📮"
   }
  ],
  "exercises": [
   {
    "type": "listen",
    "label": "📢 Durchsage im Bürgeramt",
    "audioUrl": "https://d8j0ntlcm91z4.cloudfront.net/user_38tIQPWpEsaUmk18tYN8mskaaAF/hf_20260826_062316_8c95ec2a-d381-4d58-a06a-874ea238644c.mp3",
    "q": "Bis wann muss man ohne Termin eine Nummer ziehen?",
    "options": [
     "Bis zwölf Uhr",
     "Bis dreizehn Uhr",
     "Bis vierzehn Uhr",
     "Bis elf Uhr"
    ],
    "answer": 0,
    "transcript": "Guten Tag im Bürgeramt Mitte. Die Wartenummer B einundvierzig bitte zu Schalter sieben. Wir weisen darauf hin: Ab dreizehn Uhr werden heute nur noch Kundinnen und Kunden mit Termin bedient. Wer ohne Termin gekommen ist, zieht bitte bis spätestens zwölf Uhr eine Nummer am Automaten im Eingang. Vielen Dank für Ihr Verständnis.",
    "explain": "Ohne Termin gilt: die Nummer bis spätestens zwölf Uhr ziehen, denn ab dreizehn Uhr geht es nur noch mit Termin."
   },
   {
    "type": "listen",
    "label": "📞 Mailbox: Es fehlt noch etwas",
    "audioUrl": "https://d8j0ntlcm91z4.cloudfront.net/user_38tIQPWpEsaUmk18tYN8mskaaAF/hf_20260826_062317_100ffb0c-d423-42c5-b3b5-51d1dba71e64.mp3",
    "q": "Was passiert, wenn das Papier nicht bis Freitag da ist?",
    "options": [
     "Der Vorgang wird geschlossen",
     "Der Termin wird verschoben",
     "Die Gebühr wird höher",
     "Der Bescheid kommt später"
    ],
    "answer": 0,
    "transcript": "Hallo Frau Demir, hier ist Kleinert vom Bürgeramt. Ihr Antrag ist bei uns angekommen, aber die Meldebescheinigung fehlt noch. Bitte reichen Sie die bis Freitag nach, sonst müssen wir den Vorgang schließen. Sie können sie einfach in den Briefkasten neben dem Eingang werfen. Ein zweiter Termin ist dann nicht nötig. Danke und einen schönen Tag.",
    "explain": "Frau Kleinert sagt klar: ohne die Meldebescheinigung bis Freitag wird der Vorgang geschlossen."
   },
   {
    "type": "listen",
    "label": "🪟 Am Schalter: Kopie reicht nicht",
    "audioUrl": "https://d8j0ntlcm91z4.cloudfront.net/user_38tIQPWpEsaUmk18tYN8mskaaAF/hf_20260826_062316_ddf96d70-eb05-4eec-8d33-90b0c952b592.mp3",
    "q": "Warum klappt die Anmeldung heute nicht?",
    "options": [
     "Er hat nur eine Kopie dabei",
     "Er hat keinen Termin gebucht",
     "Er hat das Formular vergessen",
     "Er kommt nach den Öffnungszeiten"
    ],
    "answer": 0,
    "transcript": "Guten Tag, ich möchte mich anmelden. — Haben Sie die Wohnungsgeberbestätigung dabei? — Nur eine Kopie. — Da brauchen wir leider das Original, sonst kann ich die Anmeldung nicht abschließen. — Und wenn ich es morgen bringe? — Dann kommen Sie einfach ohne Termin zu Schalter drei, das dauert fünf Minuten. Eine Gebühr fällt dafür nicht an.",
    "explain": "Das Amt nimmt für die Anmeldung nur das Original der Bestätigung, nicht die Kopie."
   },
   {
    "type": "listen",
    "label": "☕ Unter Nachbarn: Wie war es beim Amt?",
    "audioUrl": "https://d8j0ntlcm91z4.cloudfront.net/user_38tIQPWpEsaUmk18tYN8mskaaAF/hf_20260826_062317_5fe1a6e2-5aa8-4a81-a3bd-572a7b494fe6.mp3",
    "q": "Was muss der Mann noch nachreichen?",
    "options": [
     "Einen Nachweis über sein Einkommen",
     "Eine Vollmacht für seine Nachbarin",
     "Eine Kopie von seinem Bescheid",
     "Ein Formular über seine Wohnung"
    ],
    "answer": 0,
    "transcript": "Und, hat es geklappt beim Amt? — Halb. Der Bescheid kommt erst in drei Wochen, sagt der Sachbearbeiter. — So lange? — Ja, und ich muss noch einen Nachweis über mein Einkommen nachreichen. Meine Nachbarin geht mit, sie hat eine Vollmacht von mir. Wenn ich die Frist verpasse, fange ich wieder von vorne an.",
    "explain": "Er sagt selbst, dass ihm noch ein Nachweis über sein Einkommen fehlt."
   },
   {
    "type": "choice",
    "audio": "der Termin",
    "q": "🔊 Hör zu – was bedeutet das Wort?",
    "options": [
     "die feste Zeit für dein Gespräch",
     "die Nummer auf deinem Zettel",
     "der Name vom zuständigen Amt",
     "das Zimmer im ersten Stock"
    ],
    "answer": 0,
    "w": "der Termin",
    "explain": "der Termin = die feste Zeit für dein Gespräch."
   },
   {
    "type": "choice",
    "audio": "die Anmeldung",
    "q": "🔊 Hör zu – was bedeutet das Wort?",
    "options": [
     "die Abgabe von alten Papieren",
     "der Eintrag deiner Wohnung beim Amt",
     "die Zahlung der offenen Gebühren",
     "die Bitte um einen neuen Pass"
    ],
    "answer": 1,
    "w": "die Anmeldung",
    "explain": "die Anmeldung = der Eintrag deiner Wohnung beim Amt."
   },
   {
    "type": "choice",
    "audio": "die Unterlagen",
    "q": "🔊 Hör zu – was bedeutet das Wort?",
    "options": [
     "die Formulare an der Wand",
     "die Zettel mit den Nummern",
     "alle Papiere, die du mitbringst",
     "die Regale hinter dem Schalter"
    ],
    "answer": 2,
    "w": "die Unterlagen",
    "explain": "die Unterlagen = alle Papiere, die du mitbringst."
   },
   {
    "type": "choice",
    "audio": "der Nachweis",
    "q": "🔊 Hör zu – was bedeutet das Wort?",
    "options": [
     "ein Papier mit deinem Termin",
     "ein Brief mit einer Frage",
     "ein Zettel für die Kasse",
     "ein Papier, das etwas beweist"
    ],
    "answer": 3,
    "w": "der Nachweis",
    "explain": "der Nachweis = ein Papier, das etwas beweist."
   },
   {
    "type": "choice",
    "audio": "die Frist",
    "q": "🔊 Hör zu – was bedeutet das Wort?",
    "options": [
     "die Zeit bis zum letzten Tag",
     "die Zeit im Wartebereich",
     "der Tag mit langen Öffnungszeiten",
     "die Pause der Mitarbeiter"
    ],
    "answer": 0,
    "w": "die Frist",
    "explain": "die Frist = die Zeit bis zum letzten Tag."
   },
   {
    "type": "choice",
    "audio": "der Bescheid",
    "q": "🔊 Hör zu – was bedeutet das Wort?",
    "options": [
     "die mündliche Frage am Schalter",
     "die schriftliche Antwort vom Amt",
     "die Kopie von deinem Ausweis",
     "die Rechnung für die Gebühren"
    ],
    "answer": 1,
    "w": "der Bescheid",
    "explain": "der Bescheid = die schriftliche Antwort vom Amt."
   },
   {
    "type": "choice",
    "audio": "das Formular",
    "q": "🔊 Hör zu – was bedeutet das Wort?",
    "options": [
     "ein Brief mit einer Frist",
     "ein Heft mit alten Regeln",
     "ein Blatt mit vielen Feldern",
     "ein Zettel mit deiner Nummer"
    ],
    "answer": 2,
    "w": "das Formular",
    "explain": "das Formular = ein Blatt mit vielen Feldern."
   },
   {
    "type": "choice",
    "audio": "die Wartenummer",
    "q": "🔊 Hör zu – was bedeutet das Wort?",
    "options": [
     "sie sagt, was du zahlen musst",
     "sie zeigt, wo dein Amt liegt",
     "sie nennt den Namen im Büro",
     "sie sagt, wann du dran bist"
    ],
    "answer": 3,
    "w": "die Wartenummer",
    "explain": "die Wartenummer = sie sagt, wann du dran bist."
   },
   {
    "type": "choice",
    "audio": "der Sachbearbeiter",
    "q": "🔊 Hör zu – was bedeutet das Wort?",
    "options": [
     "die Person hinter dem Schreibtisch",
     "die Person im Wartebereich",
     "der Chef von der ganzen Behörde",
     "der Mann am Eingang vom Haus"
    ],
    "answer": 0,
    "w": "der Sachbearbeiter",
    "explain": "der Sachbearbeiter = die Person hinter dem Schreibtisch."
   },
   {
    "type": "choice",
    "audio": "die Meldebescheinigung",
    "q": "🔊 Hör zu – was bedeutet das Wort?",
    "options": [
     "ein Papier über deine Arbeit",
     "ein Papier über deine Wohnung",
     "ein Brief über deine Steuern",
     "ein Zettel über deinen Termin"
    ],
    "answer": 1,
    "w": "die Meldebescheinigung",
    "explain": "die Meldebescheinigung = ein Papier über deine Wohnung."
   },
   {
    "type": "choice",
    "audio": "der Antrag",
    "q": "🔊 Hör zu – was bedeutet das Wort?",
    "options": [
     "du sagst am Schalter Bescheid",
     "du zahlst eine kleine Gebühr",
     "du bittest schriftlich um etwas",
     "du holst dir ein neues Papier"
    ],
    "answer": 2,
    "w": "der Antrag",
    "explain": "der Antrag = du bittest schriftlich um etwas."
   },
   {
    "type": "choice",
    "audio": "beglaubigen",
    "q": "🔊 Hör zu – was bedeutet das Wort?",
    "options": [
     "schnell abschreiben, was im Papier steht",
     "genau lesen, was der Brief sagt",
     "höflich fragen, ob etwas fehlt",
     "amtlich bestätigen, dass etwas echt ist"
    ],
    "answer": 3,
    "w": "beglaubigen",
    "explain": "beglaubigen = amtlich bestätigen, dass etwas echt ist."
   },
   {
    "type": "choice",
    "audio": "die Gebühr",
    "q": "🔊 Hör zu – was bedeutet das Wort?",
    "options": [
     "das Geld, das du zahlen musst",
     "das Geld, das du zurückbekommst",
     "der Zettel, den du unterschreibst",
     "die Frist, die das Amt setzt"
    ],
    "answer": 0,
    "w": "die Gebühr",
    "explain": "die Gebühr = das Geld, das du zahlen musst."
   },
   {
    "type": "choice",
    "audio": "die Öffnungszeiten",
    "q": "🔊 Hör zu – was bedeutet das Wort?",
    "options": [
     "wann der Bescheid bei dir ankommt",
     "wann du ins Amt kommen kannst",
     "wann du deine Nummer ziehen darfst",
     "wann dein Termin zu Ende ist"
    ],
    "answer": 1,
    "w": "die Öffnungszeiten",
    "explain": "die Öffnungszeiten = wann du ins Amt kommen kannst."
   },
   {
    "type": "choice",
    "audio": "die Vollmacht",
    "q": "🔊 Hör zu – was bedeutet das Wort?",
    "options": [
     "damit darfst du früher hineingehen",
     "damit zahlst du weniger Gebühren",
     "damit darf jemand für dich handeln",
     "damit bekommst du sofort einen Termin"
    ],
    "answer": 2,
    "w": "die Vollmacht",
    "explain": "die Vollmacht = damit darf jemand für dich handeln."
   },
   {
    "type": "choice",
    "audio": "nachreichen",
    "q": "🔊 Hör zu – was bedeutet das Wort?",
    "options": [
     "etwas beim Amt abholen",
     "etwas noch einmal fragen",
     "etwas am Schalter zeigen",
     "etwas später noch bringen"
    ],
    "answer": 3,
    "w": "nachreichen",
    "explain": "nachreichen = etwas später noch bringen."
   }
  ]
 },
 {
  "id": "bank",
  "title": "Konto und Karte",
  "level": "B1",
  "emoji": "🎧",
  "words": [
   {
    "de": "das Girokonto",
    "info": "damit zahlst du jeden Tag",
    "emoji": "💳"
   },
   {
    "de": "eröffnen",
    "info": "ein neues Konto anlegen",
    "emoji": "🆕"
   },
   {
    "de": "die Überweisung",
    "info": "Geld von dir zu jemandem",
    "emoji": "📤"
   },
   {
    "de": "der Empfänger",
    "info": "die Person, die Geld bekommt",
    "emoji": "👤"
   },
   {
    "de": "der Verwendungszweck",
    "info": "kurzer Text, wofür das Geld ist",
    "emoji": "📝"
   },
   {
    "de": "der Dauerauftrag",
    "info": "jeden Monat der gleiche Betrag",
    "emoji": "🔁"
   },
   {
    "de": "die Lastschrift",
    "info": "die Firma holt das Geld selbst",
    "emoji": "📥"
   },
   {
    "de": "der Kontoauszug",
    "info": "die Liste aller Buchungen",
    "emoji": "🧾"
   },
   {
    "de": "der Kontostand",
    "info": "wie viel Geld noch da ist",
    "emoji": "📊"
   },
   {
    "de": "die Buchung",
    "info": "eine Bewegung auf dem Konto",
    "emoji": "📒"
   },
   {
    "de": "die Gebühren",
    "info": "was die Bank dafür nimmt",
    "emoji": "💶"
   },
   {
    "de": "der Dispo",
    "info": "erlaubtes Minus auf dem Konto",
    "emoji": "📉"
   },
   {
    "de": "die Geheimzahl",
    "info": "vier Ziffern für die Karte",
    "emoji": "🔢"
   },
   {
    "de": "sperren",
    "info": "nicht mehr benutzen lassen",
    "emoji": "🔒"
   },
   {
    "de": "abheben",
    "info": "Geld aus dem Automaten holen",
    "emoji": "🏧"
   },
   {
    "de": "kündigen",
    "info": "einen Vertrag beenden",
    "emoji": "✂️"
   }
  ],
  "exercises": [
   {
    "type": "listen",
    "label": "📢 Ansage am Telefon",
    "audioUrl": "https://d8j0ntlcm91z4.cloudfront.net/user_38tIQPWpEsaUmk18tYN8mskaaAF/hf_20260826_062316_f26a942b-2daf-46f8-a876-25f667dab4bf.mp3",
    "q": "Wie lange wartet man im Schnitt?",
    "options": [
     "Etwa sieben Minuten",
     "Etwa neun Minuten",
     "Etwa fünf Minuten",
     "Etwa zwölf Minuten"
    ],
    "answer": 0,
    "transcript": "Willkommen bei der Stadtbank Nordstadt. Alle Mitarbeiter sind im Gespräch. Für eine Kartensperre wählen Sie bitte die Eins, für Fragen zu Ihrem Konto die Zwei. Unsere Filiale in der Bahnhofstraße bleibt am Freitag geschlossen. Geld abheben können Sie rund um die Uhr am Automaten im Vorraum. Die durchschnittliche Wartezeit beträgt sieben Minuten.",
    "explain": "Ganz am Ende der Ansage heißt es, die durchschnittliche Wartezeit beträgt sieben Minuten."
   },
   {
    "type": "listen",
    "label": "📞 Mailbox: Ihre Karte ist gesperrt",
    "audioUrl": "https://d8j0ntlcm91z4.cloudfront.net/user_38tIQPWpEsaUmk18tYN8mskaaAF/hf_20260826_062316_bb9dca0f-e2e9-4ff5-aa26-3a5f4d4aadf9.mp3",
    "q": "Warum wurde die Karte gesperrt?",
    "options": [
     "Die Geheimzahl war zweimal falsch",
     "Das Konto war zweimal im Minus",
     "Die alte Karte war nicht mehr gültig",
     "Der Ausweis in der Filiale fehlte"
    ],
    "answer": 0,
    "transcript": "Guten Tag, Herr Osei, Ludwig von der Stadtbank. Ihre Karte haben wir gesperrt, weil sie zweimal mit falscher Geheimzahl benutzt wurde. Die neue Karte ist unterwegs, sie kommt in etwa fünf Werktagen. Bis dahin können Sie am Schalter Geld abheben, bitte bringen Sie Ihren Ausweis mit. Rufen Sie zurück, wenn das nicht Sie waren.",
    "explain": "Die Bank sperrt die Karte, weil zweimal die falsche Geheimzahl eingegeben wurde."
   },
   {
    "type": "listen",
    "label": "🪟 Am Tresen: ein Konto eröffnen",
    "audioUrl": "https://d8j0ntlcm91z4.cloudfront.net/user_38tIQPWpEsaUmk18tYN8mskaaAF/hf_20260826_062316_54a7cd05-3245-475e-8cb8-960ac4152b9e.mp3",
    "q": "Wann kostet das Konto nichts?",
    "options": [
     "Ab tausendzweihundert Euro Gehalt im Monat",
     "Ab vierhundert Euro Gehalt im Monat",
     "Im ersten Jahr nach dem Vertrag",
     "Mit einer Karte ohne eigene Gebühren"
    ],
    "answer": 0,
    "transcript": "Ich möchte ein Konto eröffnen. — Gern. Haben Sie eine Meldebescheinigung dabei? — Ja, und meinen Pass. — Sehr gut. Das Girokonto kostet vier Euro neunzig im Monat, ab tausendzweihundert Euro Gehaltseingang ist es kostenlos. — Und die Karte? — Die ist dabei. Abheben am fremden Automaten kostet allerdings extra.",
    "explain": "Die Beraterin sagt, ab tausendzweihundert Euro Gehaltseingang fallen keine Gebühren an."
   },
   {
    "type": "listen",
    "label": "☕ Unter Freundinnen: Was bucht da ab?",
    "audioUrl": "https://d8j0ntlcm91z4.cloudfront.net/user_38tIQPWpEsaUmk18tYN8mskaaAF/hf_20260826_062316_388fa21f-2035-4b0f-bd9b-071dbc76ef51.mp3",
    "q": "Wie lange kann man eine Lastschrift zurückholen?",
    "options": [
     "Acht Wochen lang",
     "Vier Wochen lang",
     "Zwei Wochen lang",
     "Sechs Wochen lang"
    ],
    "answer": 0,
    "transcript": "Mein Kontoauszug sieht komisch aus. Da geht jeden Monat ein Betrag ab, den ich nicht kenne. — Vielleicht eine Lastschrift vom Fitnessstudio? — Ich habe doch gekündigt. — Dann hol dir das Geld zurück, das geht acht Wochen lang. Ruf morgen bei der Bank an und schau vorher im Verwendungszweck nach, wer da abbucht.",
    "explain": "Die Freundin sagt, dass man das Geld acht Wochen lang zurückholen kann."
   },
   {
    "type": "choice",
    "audio": "das Girokonto",
    "q": "🔊 Hör zu – was bedeutet das Wort?",
    "options": [
     "damit zahlst du jeden Tag",
     "damit sparst du für später",
     "damit zahlst du deine Schulden",
     "damit bekommst du einen Kredit"
    ],
    "answer": 0,
    "w": "das Girokonto",
    "explain": "das Girokonto = damit zahlst du jeden Tag."
   },
   {
    "type": "choice",
    "audio": "eröffnen",
    "q": "🔊 Hör zu – was bedeutet das Wort?",
    "options": [
     "ein altes Konto beenden",
     "ein neues Konto anlegen",
     "ein Konto sperren lassen",
     "ein Konto leer räumen"
    ],
    "answer": 1,
    "w": "eröffnen",
    "explain": "eröffnen = ein neues Konto anlegen."
   },
   {
    "type": "choice",
    "audio": "die Überweisung",
    "q": "🔊 Hör zu – was bedeutet das Wort?",
    "options": [
     "Geld aus dem Automaten holen",
     "Geld für später zurücklegen",
     "Geld von dir zu jemandem",
     "Geld auf dem Konto zählen"
    ],
    "answer": 2,
    "w": "die Überweisung",
    "explain": "die Überweisung = Geld von dir zu jemandem."
   },
   {
    "type": "choice",
    "audio": "der Empfänger",
    "q": "🔊 Hör zu – was bedeutet das Wort?",
    "options": [
     "die Person, die Geld schickt",
     "die Bank, die alles bucht",
     "die Firma, die Geld abbucht",
     "die Person, die Geld bekommt"
    ],
    "answer": 3,
    "w": "der Empfänger",
    "explain": "der Empfänger = die Person, die Geld bekommt."
   },
   {
    "type": "choice",
    "audio": "der Verwendungszweck",
    "q": "🔊 Hör zu – was bedeutet das Wort?",
    "options": [
     "kurzer Text, wofür das Geld ist",
     "lange Nummer von deinem Konto",
     "kurzer Name von deiner Bank",
     "genauer Betrag auf dem Auszug"
    ],
    "answer": 0,
    "w": "der Verwendungszweck",
    "explain": "der Verwendungszweck = kurzer Text, wofür das Geld ist."
   },
   {
    "type": "choice",
    "audio": "der Dauerauftrag",
    "q": "🔊 Hör zu – was bedeutet das Wort?",
    "options": [
     "einmal im Jahr ein Betrag",
     "jeden Monat der gleiche Betrag",
     "jeden Monat ein anderer Betrag",
     "jede Woche eine neue Karte"
    ],
    "answer": 1,
    "w": "der Dauerauftrag",
    "explain": "der Dauerauftrag = jeden Monat der gleiche Betrag."
   },
   {
    "type": "choice",
    "audio": "die Lastschrift",
    "q": "🔊 Hör zu – was bedeutet das Wort?",
    "options": [
     "die Bank legt das Geld zurück",
     "die Firma schickt dir das Geld",
     "die Firma holt das Geld selbst",
     "der Kunde bringt das Geld hin"
    ],
    "answer": 2,
    "w": "die Lastschrift",
    "explain": "die Lastschrift = die Firma holt das Geld selbst."
   },
   {
    "type": "choice",
    "audio": "der Kontoauszug",
    "q": "🔊 Hör zu – was bedeutet das Wort?",
    "options": [
     "die Karte für den Automaten",
     "die Nummer von deinem Konto",
     "der Vertrag mit deiner Bank",
     "die Liste aller Buchungen"
    ],
    "answer": 3,
    "w": "der Kontoauszug",
    "explain": "der Kontoauszug = die Liste aller Buchungen."
   },
   {
    "type": "choice",
    "audio": "der Kontostand",
    "q": "🔊 Hör zu – was bedeutet das Wort?",
    "options": [
     "wie viel Geld noch da ist",
     "wie viel du im Monat zahlst",
     "wie alt dein Konto schon ist",
     "wie hoch die Gebühren sind"
    ],
    "answer": 0,
    "w": "der Kontostand",
    "explain": "der Kontostand = wie viel Geld noch da ist."
   },
   {
    "type": "choice",
    "audio": "die Buchung",
    "q": "🔊 Hör zu – was bedeutet das Wort?",
    "options": [
     "ein Termin bei deiner Bank",
     "eine Bewegung auf dem Konto",
     "ein Brief von deiner Bank",
     "ein Fehler an dem Automaten"
    ],
    "answer": 1,
    "w": "die Buchung",
    "explain": "die Buchung = eine Bewegung auf dem Konto."
   },
   {
    "type": "choice",
    "audio": "die Gebühren",
    "q": "🔊 Hör zu – was bedeutet das Wort?",
    "options": [
     "was die Bank dir dafür gibt",
     "was du im Monat verdienst",
     "was die Bank dafür nimmt",
     "was auf dem Konto liegt"
    ],
    "answer": 2,
    "w": "die Gebühren",
    "explain": "die Gebühren = was die Bank dafür nimmt."
   },
   {
    "type": "choice",
    "audio": "der Dispo",
    "q": "🔊 Hör zu – was bedeutet das Wort?",
    "options": [
     "erlaubtes Limit am Automaten",
     "geplantes Sparen für später",
     "gesperrtes Geld auf dem Konto",
     "erlaubtes Minus auf dem Konto"
    ],
    "answer": 3,
    "w": "der Dispo",
    "explain": "der Dispo = erlaubtes Minus auf dem Konto."
   },
   {
    "type": "choice",
    "audio": "die Geheimzahl",
    "q": "🔊 Hör zu – was bedeutet das Wort?",
    "options": [
     "vier Ziffern für die Karte",
     "vier Buchstaben für die Bank",
     "die lange Nummer vom Konto",
     "der Name auf deiner Karte"
    ],
    "answer": 0,
    "w": "die Geheimzahl",
    "explain": "die Geheimzahl = vier Ziffern für die Karte."
   },
   {
    "type": "choice",
    "audio": "sperren",
    "q": "🔊 Hör zu – was bedeutet das Wort?",
    "options": [
     "noch einmal neu bestellen",
     "nicht mehr benutzen lassen",
     "wieder frei geben lassen",
     "sofort selbst bezahlen"
    ],
    "answer": 1,
    "w": "sperren",
    "explain": "sperren = nicht mehr benutzen lassen."
   },
   {
    "type": "choice",
    "audio": "abheben",
    "q": "🔊 Hör zu – was bedeutet das Wort?",
    "options": [
     "Geld auf das Konto legen",
     "Geld an jemanden schicken",
     "Geld aus dem Automaten holen",
     "Geld für den Monat planen"
    ],
    "answer": 2,
    "w": "abheben",
    "explain": "abheben = Geld aus dem Automaten holen."
   },
   {
    "type": "choice",
    "audio": "kündigen",
    "q": "🔊 Hör zu – was bedeutet das Wort?",
    "options": [
     "einen Vertrag verlängern",
     "einen Vertrag unterschreiben",
     "einen Vertrag verschicken",
     "einen Vertrag beenden"
    ],
    "answer": 3,
    "w": "kündigen",
    "explain": "kündigen = einen Vertrag beenden."
   }
  ]
 },
 {
  "id": "bau",
  "title": "Auf der Baustelle",
  "level": "B1",
  "emoji": "🎧",
  "words": [
   {
    "de": "der Polier",
    "info": "der Chef direkt auf dem Bau",
    "emoji": "👷"
   },
   {
    "de": "der Bauleiter",
    "info": "er plant und prüft die Arbeiten",
    "emoji": "📋"
   },
   {
    "de": "die Absperrung",
    "info": "sie hält Fremde vom Bereich fern",
    "emoji": "🚧"
   },
   {
    "de": "das Gerüst",
    "info": "damit kommt man nach oben",
    "emoji": "🏗️"
   },
   {
    "de": "der Schutzhelm",
    "info": "harter Schutz für den Kopf",
    "emoji": "⛑️"
   },
   {
    "de": "die Materiallieferung",
    "info": "neue Ware kommt auf den Bau",
    "emoji": "🚚"
   },
   {
    "de": "das Aufmaß",
    "info": "genaues Messen der fertigen Arbeit",
    "emoji": "📏"
   },
   {
    "de": "der Feierabend",
    "info": "Schluss mit der Arbeit heute",
    "emoji": "🌇"
   },
   {
    "de": "die Bauzeit",
    "info": "wie lange das Bauen dauert",
    "emoji": "⏳"
   },
   {
    "de": "die Einweisung",
    "info": "kurze Erklärung vor dem Beginn",
    "emoji": "🗣️"
   },
   {
    "de": "die Schalung",
    "info": "Form für den nassen Beton",
    "emoji": "🧱"
   },
   {
    "de": "der Bauschutt",
    "info": "Reste von altem Stein",
    "emoji": "🗑️"
   },
   {
    "de": "die Sicherheitsschuhe",
    "info": "feste Schuhe mit hartem Vorderteil",
    "emoji": "🥾"
   },
   {
    "de": "die Verzögerung",
    "info": "es dauert länger als geplant",
    "emoji": "🐌"
   },
   {
    "de": "der Baustopp",
    "info": "es wird gerade nicht weitergebaut",
    "emoji": "✋"
   },
   {
    "de": "die Palette",
    "info": "Holzunterlage für schwere Ware",
    "emoji": "📦"
   }
  ],
  "exercises": [
   {
    "type": "listen",
    "label": "📢 Durchsage auf dem Gelände",
    "audioUrl": "https://d8j0ntlcm91z4.cloudfront.net/user_38tIQPWpEsaUmk18tYN8mskaaAF/hf_20260826_073607_5fb75be9-bff9-4963-99b7-5e94bb4340b4.mp3",
    "q": "Wann kommt die Materiallieferung?",
    "options": [
     "Erst um vierzehn Uhr am Nachmittag",
     "Schon am Vormittag wie geplant",
     "Erst am nächsten Morgen ganz früh",
     "Um halb elf zusammen mit dem Kran"
    ],
    "answer": 0,
    "transcript": "Achtung, eine Durchsage vom Bauleiter. Der Kran im hinteren Bereich wird ab halb elf umgesetzt. Der Weg zwischen der Halle und dem Container ist bis Mittag gesperrt, bitte geht außen an der Absperrung entlang. Die Materiallieferung mit dem Estrich kommt erst um vierzehn Uhr, nicht wie geplant am Vormittag. Helm und Sicherheitsschuhe bleiben auf dem ganzen Gelände Pflicht.",
    "explain": "In der Durchsage heißt es, dass das Material erst um vierzehn Uhr kommt und nicht am Vormittag."
   },
   {
    "type": "listen",
    "label": "📞 Mailbox: Frost, der Beton wartet",
    "audioUrl": "https://d8j0ntlcm91z4.cloudfront.net/user_38tIQPWpEsaUmk18tYN8mskaaAF/hf_20260826_073607_f77ab594-7d8b-47f4-8125-76fa4b04b3b4.mp3",
    "q": "Was soll Herr Demir morgen früh trotzdem machen?",
    "options": [
     "Um sieben in den Container kommen und aufräumen",
     "Zu Hause bleiben und auf einen Anruf warten",
     "Erst am Donnerstag wieder zur Baustelle kommen",
     "Den Beton am Morgen allein im Stock einbringen"
    ],
    "answer": 0,
    "transcript": "Hallo Herr Demir, hier ist Kowalski, der Polier. Für morgen früh ist Frost angesagt, unter minus fünf Grad können wir den Beton nicht einbringen. Der Bauleiter hat einen Baustopp bis Donnerstag angeordnet. Komm bitte trotzdem um sieben in den Container, wir räumen das Gerüst frei und machen das Aufmaß im ersten Stock fertig. Melde dich, wenn das nicht geht.",
    "explain": "Der Polier sagt, dass trotz Baustopp um sieben im Container angefangen wird: Gerüst freiräumen und Aufmaß."
   },
   {
    "type": "listen",
    "label": "🪟 Am Tresen: Die Lieferung kommt an",
    "audioUrl": "https://d8j0ntlcm91z4.cloudfront.net/user_38tIQPWpEsaUmk18tYN8mskaaAF/hf_20260826_073607_baaa74a2-53c8-4ce0-8522-e1c53c8c2e6d.mp3",
    "q": "Warum soll der Fahrer nicht vorne an der Einfahrt abladen?",
    "options": [
     "Weil dort die Absperrung im Weg steht",
     "Weil dort der Weg für ihn zu eng ist",
     "Weil dort gerade der Kran gearbeitet wird",
     "Weil dort schon andere Paletten stehen"
    ],
    "answer": 0,
    "transcript": "Moin, ich habe eine Lieferung, zwanzig Paletten Steine. Wo unterschreibt mir das jemand? — Hier am Tresen, aber abnehmen muss der Polier. — Und wo soll ich abladen? — Nicht vorne an der Einfahrt, da steht die Absperrung. Fahr hinten am Zaun entlang bis zum Kran. Ohne Unterschrift auf dem Lieferschein kommst du am Tor nicht wieder raus.",
    "explain": "Der Mann am Tresen sagt, vorne stehe die Absperrung, deshalb soll der Fahrer hinten am Zaun entlangfahren."
   },
   {
    "type": "listen",
    "label": "☕ Privat: Zwei Monate hinterher",
    "audioUrl": "https://d8j0ntlcm91z4.cloudfront.net/user_38tIQPWpEsaUmk18tYN8mskaaAF/hf_20260826_073607_1fae3531-c669-44a5-ac5f-8ed91209c397.mp3",
    "q": "Warum liegt die Baustelle hinter dem Plan?",
    "options": [
     "Wegen wochenlangem Regen und danach dem Frost",
     "Wegen fehlender Lieferungen und kranker Kollegen",
     "Weil der Bauleiter viel zu knapp geplant hat",
     "Weil das Gerüst viel zu spät gekommen ist"
    ],
    "answer": 0,
    "transcript": "Kommst du noch mit auf ein Bier? — Nur kurz, ich muss morgen um sechs raus. — Wird das noch was mit eurem Termin? — Nie im Leben. Vier Wochen Regen, dann der Frost, wir sind zwei Monate hinterher. — Und der Bauleiter? — Der schreibt Listen. Der Polier sagt, wir schaffen den Rohbau bis Ostern, mehr nicht. — Dann macht doch früher Feierabend.",
    "explain": "Er sagt, vier Wochen Regen und danach der Frost haben die Baustelle zwei Monate zurückgeworfen."
   },
   {
    "type": "choice",
    "audio": "der Polier",
    "q": "🔊 Hör zu – was bedeutet das Wort?",
    "options": [
     "der Chef direkt auf dem Bau",
     "der Fahrer von dem großen Lastwagen",
     "der Mann am Tor der Baustelle",
     "der Planer im Büro der Firma"
    ],
    "answer": 0,
    "w": "der Polier",
    "explain": "der Polier = der Chef direkt auf dem Bau."
   },
   {
    "type": "choice",
    "audio": "der Bauleiter",
    "q": "🔊 Hör zu – was bedeutet das Wort?",
    "options": [
     "er trägt die Steine nach oben",
     "er plant und prüft die Arbeiten",
     "er fährt den Kran auf dem Bau",
     "er verkauft das fertige Haus später"
    ],
    "answer": 1,
    "w": "der Bauleiter",
    "explain": "der Bauleiter = er plant und prüft die Arbeiten."
   },
   {
    "type": "choice",
    "audio": "die Absperrung",
    "q": "🔊 Hör zu – was bedeutet das Wort?",
    "options": [
     "sie hält das Gerüst an der Wand",
     "sie zeigt den Weg zum Container",
     "sie hält Fremde vom Bereich fern",
     "sie schützt das Material vor Regen"
    ],
    "answer": 2,
    "w": "die Absperrung",
    "explain": "die Absperrung = sie hält Fremde vom Bereich fern."
   },
   {
    "type": "choice",
    "audio": "das Gerüst",
    "q": "🔊 Hör zu – was bedeutet das Wort?",
    "options": [
     "damit hebt man schwere Steine",
     "damit misst man die fertige Wand",
     "damit fährt man den Schutt weg",
     "damit kommt man nach oben"
    ],
    "answer": 3,
    "w": "das Gerüst",
    "explain": "das Gerüst = damit kommt man nach oben."
   },
   {
    "type": "choice",
    "audio": "der Schutzhelm",
    "q": "🔊 Hör zu – was bedeutet das Wort?",
    "options": [
     "harter Schutz für den Kopf",
     "fester Schutz für die Füße",
     "dicker Schutz für die Hände",
     "weicher Schutz für die Ohren"
    ],
    "answer": 0,
    "w": "der Schutzhelm",
    "explain": "der Schutzhelm = harter Schutz für den Kopf."
   },
   {
    "type": "choice",
    "audio": "die Materiallieferung",
    "q": "🔊 Hör zu – was bedeutet das Wort?",
    "options": [
     "alter Schutt geht vom Bau weg",
     "neue Ware kommt auf den Bau",
     "neue Leute kommen auf den Bau",
     "fertige Rechnung kommt ins Büro"
    ],
    "answer": 1,
    "w": "die Materiallieferung",
    "explain": "die Materiallieferung = neue Ware kommt auf den Bau."
   },
   {
    "type": "choice",
    "audio": "das Aufmaß",
    "q": "🔊 Hör zu – was bedeutet das Wort?",
    "options": [
     "grobes Schätzen der nächsten Arbeit",
     "schnelles Prüfen der neuen Ware",
     "genaues Messen der fertigen Arbeit",
     "kurzes Notieren der geleisteten Stunden"
    ],
    "answer": 2,
    "w": "das Aufmaß",
    "explain": "das Aufmaß = genaues Messen der fertigen Arbeit."
   },
   {
    "type": "choice",
    "audio": "der Feierabend",
    "q": "🔊 Hör zu – was bedeutet das Wort?",
    "options": [
     "Pause in der Mitte vom Tag",
     "Fest mit den Kollegen am Abend",
     "freier Tag in der ganzen Woche",
     "Schluss mit der Arbeit heute"
    ],
    "answer": 3,
    "w": "der Feierabend",
    "explain": "der Feierabend = Schluss mit der Arbeit heute."
   },
   {
    "type": "choice",
    "audio": "die Bauzeit",
    "q": "🔊 Hör zu – was bedeutet das Wort?",
    "options": [
     "wie lange das Bauen dauert",
     "wann am Morgen angefangen wird",
     "wie teuer das ganze Haus wird",
     "wie viele Leute dort arbeiten"
    ],
    "answer": 0,
    "w": "die Bauzeit",
    "explain": "die Bauzeit = wie lange das Bauen dauert."
   },
   {
    "type": "choice",
    "audio": "die Einweisung",
    "q": "🔊 Hör zu – was bedeutet das Wort?",
    "options": [
     "lange Prüfung nach dem Ende",
     "kurze Erklärung vor dem Beginn",
     "schnelle Pause vor dem Mittag",
     "kurze Meldung an das Büro"
    ],
    "answer": 1,
    "w": "die Einweisung",
    "explain": "die Einweisung = kurze Erklärung vor dem Beginn."
   },
   {
    "type": "choice",
    "audio": "die Schalung",
    "q": "🔊 Hör zu – was bedeutet das Wort?",
    "options": [
     "Deckel für den vollen Eimer",
     "Schutz für das nasse Holz",
     "Form für den nassen Beton",
     "Gitter für das hohe Gerüst"
    ],
    "answer": 2,
    "w": "die Schalung",
    "explain": "die Schalung = Form für den nassen Beton."
   },
   {
    "type": "choice",
    "audio": "der Bauschutt",
    "q": "🔊 Hör zu – was bedeutet das Wort?",
    "options": [
     "Sand für den frischen Beton",
     "Werkzeug aus dem alten Wagen",
     "Erde aus dem tiefen Loch",
     "Reste von altem Stein"
    ],
    "answer": 3,
    "w": "der Bauschutt",
    "explain": "der Bauschutt = Reste von altem Stein."
   },
   {
    "type": "choice",
    "audio": "die Sicherheitsschuhe",
    "q": "🔊 Hör zu – was bedeutet das Wort?",
    "options": [
     "feste Schuhe mit hartem Vorderteil",
     "leichte Schuhe mit weicher Sohle",
     "hohe Stiefel aus dickem Gummi",
     "warme Schuhe mit dickem Futter"
    ],
    "answer": 0,
    "w": "die Sicherheitsschuhe",
    "explain": "die Sicherheitsschuhe = feste Schuhe mit hartem Vorderteil."
   },
   {
    "type": "choice",
    "audio": "die Verzögerung",
    "q": "🔊 Hör zu – was bedeutet das Wort?",
    "options": [
     "es kostet mehr als geplant",
     "es dauert länger als geplant",
     "es wird früher fertig als gedacht",
     "es fehlen mehr Leute als sonst"
    ],
    "answer": 1,
    "w": "die Verzögerung",
    "explain": "die Verzögerung = es dauert länger als geplant."
   },
   {
    "type": "choice",
    "audio": "der Baustopp",
    "q": "🔊 Hör zu – was bedeutet das Wort?",
    "options": [
     "es wird gerade schneller gearbeitet",
     "es wird gerade an zwei Stellen gebaut",
     "es wird gerade nicht weitergebaut",
     "es wird gerade alles noch einmal geprüft"
    ],
    "answer": 2,
    "w": "der Baustopp",
    "explain": "der Baustopp = es wird gerade nicht weitergebaut."
   },
   {
    "type": "choice",
    "audio": "die Palette",
    "q": "🔊 Hör zu – was bedeutet das Wort?",
    "options": [
     "Papierliste für gelieferte Ware",
     "Metallkiste für kleines Werkzeug",
     "Kunststoffeimer für nassen Mörtel",
     "Holzunterlage für schwere Ware"
    ],
    "answer": 3,
    "w": "die Palette",
    "explain": "die Palette = Holzunterlage für schwere Ware."
   }
  ]
 },
 {
  "id": "bewerbung",
  "title": "Sich richtig bewerben",
  "level": "B1",
  "emoji": "🎧",
  "words": [
   {
    "de": "die Stellenanzeige",
    "info": "dort steht, wen eine Firma sucht",
    "emoji": "📰"
   },
   {
    "de": "der Lebenslauf",
    "info": "die Liste deiner Schulen und Stellen",
    "emoji": "📄"
   },
   {
    "de": "das Anschreiben",
    "info": "der Brief zu deiner Bewerbung",
    "emoji": "✉️"
   },
   {
    "de": "das Vorstellungsgespräch",
    "info": "dort lernt die Firma dich kennen",
    "emoji": "🤝"
   },
   {
    "de": "das Arbeitszeugnis",
    "info": "das Papier über deine Leistungen",
    "emoji": "🏅"
   },
   {
    "de": "die Probearbeit",
    "info": "ein Tag zum Mitarbeiten ohne Vertrag",
    "emoji": "🧰"
   },
   {
    "de": "die Absage",
    "info": "sie wollen dich leider nicht nehmen",
    "emoji": "🚫"
   },
   {
    "de": "die Zusage",
    "info": "die Stelle gehört jetzt dir",
    "emoji": "✅"
   },
   {
    "de": "die Gehaltsvorstellung",
    "info": "so viel Geld möchtest du verdienen",
    "emoji": "💶"
   },
   {
    "de": "die Bewerbungsunterlagen",
    "info": "alle Papiere, die du mitschickst",
    "emoji": "📎"
   },
   {
    "de": "die Berufserfahrung",
    "info": "was du schon gearbeitet hast",
    "emoji": "⏳"
   },
   {
    "de": "die Anerkennung",
    "info": "dein Abschluss gilt auch hier",
    "emoji": "🏛️"
   },
   {
    "de": "der Ansprechpartner",
    "info": "diese Person darfst du fragen",
    "emoji": "👤"
   },
   {
    "de": "die Befristung",
    "info": "die Stelle endet an einem Tag",
    "emoji": "⏱️"
   },
   {
    "de": "sich bewerben",
    "info": "schriftlich um eine Stelle bitten",
    "emoji": "🖊️"
   },
   {
    "de": "der Eintrittstermin",
    "info": "der erste Tag im neuen Betrieb",
    "emoji": "🗓️"
   }
  ],
  "exercises": [
   {
    "type": "listen",
    "label": "📢 Durchsage auf der Jobmesse",
    "audioUrl": "https://d8j0ntlcm91z4.cloudfront.net/user_38tIQPWpEsaUmk18tYN8mskaaAF/hf_20260826_073607_28ed843f-3dba-4aec-9cd9-6859d52382f9.mp3",
    "q": "Was soll man zum Stand hinten links mitbringen?",
    "options": [
     "Den fertigen Lebenslauf auf Papier",
     "Das Zeugnis vom alten Betrieb",
     "Die Einladung von der Messe",
     "Den Ausweis und ein Foto"
    ],
    "answer": 0,
    "transcript": "Herzlich willkommen auf der Jobmesse in Halle zwei. Ein Hinweis für alle, die ihre Bewerbungsunterlagen prüfen lassen möchten: Das geht heute nur bis sechzehn Uhr, am Stand ganz hinten links. Bringen Sie Ihren Lebenslauf bitte ausgedruckt mit, am Bildschirm können wir ihn leider nicht ansehen. Ab siebzehn Uhr beginnen die Vorträge zum Vorstellungsgespräch.",
    "explain": "Die Durchsage sagt ausdrücklich, dass der Lebenslauf ausgedruckt dabei sein muss, weil man ihn am Bildschirm nicht ansieht."
   },
   {
    "type": "listen",
    "label": "📞 Mailbox: Der Termin wird verschoben",
    "audioUrl": "https://d8j0ntlcm91z4.cloudfront.net/user_38tIQPWpEsaUmk18tYN8mskaaAF/hf_20260826_073607_df7f7775-e522-4482-9205-d527dbb728b9.mp3",
    "q": "Warum findet das Gespräch nicht am Dienstag statt?",
    "options": [
     "Die Werkstattleiterin ist noch krank",
     "Die Stelle wurde neu ausgeschrieben",
     "Das Arbeitszeugnis fehlt noch immer",
     "Am Dienstag ist der Betrieb zu"
    ],
    "answer": 0,
    "transcript": "Guten Tag, Frau Osei, hier ist Brandt von der Firma Lehmann. Wir würden Sie gern zum Vorstellungsgespräch einladen, allerdings nicht am Dienstag, sondern erst am Donnerstag um zehn Uhr. Unsere Werkstattleiterin ist bis Mittwoch krank. Bringen Sie bitte Ihr letztes Arbeitszeugnis mit. Wenn der neue Termin nicht passt, rufen Sie mich einfach zurück.",
    "explain": "Herr Brandt nennt den Grund selbst: die Werkstattleiterin ist bis Mittwoch krank, deshalb erst Donnerstag."
   },
   {
    "type": "listen",
    "label": "🪑 Am Tresen: Ohne Termin vorgestellt",
    "audioUrl": "https://d8j0ntlcm91z4.cloudfront.net/user_38tIQPWpEsaUmk18tYN8mskaaAF/hf_20260826_073824_ab03a84f-fdc0-4e63-8d20-671bde692a1a.mp3",
    "q": "Was ist dem Betrieb im Moment am wichtigsten?",
    "options": [
     "Dass sie einmal zur Probe mitarbeitet",
     "Dass das Zeugnis schnell nachgereicht wird",
     "Dass sie den Lebenslauf noch schickt",
     "Dass sie am Samstag früher kommt"
    ],
    "answer": 0,
    "transcript": "Guten Tag, ich habe Ihre Stellenanzeige gelesen und wollte mich vorstellen. — Schön, haben Sie Unterlagen dabei? — Lebenslauf ja, das Zeugnis kommt noch aus meinem Heimatland. — Das ist kein Problem, das können Sie nachreichen. Wichtiger wäre uns eine Probearbeit. Hätten Sie am Samstag früh Zeit? — Ja, sehr gern. — Gut, dann um sieben Uhr am Hintereingang.",
    "explain": "Der Betrieb sagt, das Zeugnis kann warten, wichtiger sei eine Probearbeit am Samstag."
   },
   {
    "type": "listen",
    "label": "☕ Unter Freundinnen: Wieder eine Absage",
    "audioUrl": "https://d8j0ntlcm91z4.cloudfront.net/user_38tIQPWpEsaUmk18tYN8mskaaAF/hf_20260826_073824_4c97d79d-9d0a-466a-b3c9-2b1fe9bce8d3.mp3",
    "q": "Was will sie beim nächsten Gespräch anders machen?",
    "options": [
     "Sie fragt zuerst nach dem Verdienst",
     "Sie nennt eine niedrigere Summe",
     "Sie schickt das Zeugnis mit",
     "Sie geht ohne Unterlagen hin"
    ],
    "answer": 0,
    "transcript": "Und, hast du was gehört? — Ja, eine Absage. Angeblich passte meine Gehaltsvorstellung nicht. — Was hattest du denn geschrieben? — Zweitausendachthundert brutto. — Für die Stelle ist das doch normal. — Fand ich auch. Aber egal, morgen kommt schon das nächste Vorstellungsgespräch, und da frage ich diesmal erst, was sie zahlen wollen.",
    "explain": "Sie sagt am Ende, dass sie diesmal zuerst fragt, was der Betrieb zahlen will."
   },
   {
    "type": "choice",
    "audio": "die Stellenanzeige",
    "q": "🔊 Hör zu – was bedeutet das Wort?",
    "options": [
     "dort steht, wen eine Firma sucht",
     "dort steht, was der Betrieb verkauft",
     "dort steht, wann die Firma öffnet",
     "dort steht, wer im Büro arbeitet"
    ],
    "answer": 0,
    "w": "die Stellenanzeige",
    "explain": "die Stellenanzeige = dort steht, wen eine Firma sucht."
   },
   {
    "type": "choice",
    "audio": "der Lebenslauf",
    "q": "🔊 Hör zu – was bedeutet das Wort?",
    "options": [
     "die Liste deiner Wünsche und Ziele",
     "die Liste deiner Schulen und Stellen",
     "der Brief an den neuen Betrieb",
     "das Papier von deiner letzten Firma"
    ],
    "answer": 1,
    "w": "der Lebenslauf",
    "explain": "der Lebenslauf = die Liste deiner Schulen und Stellen."
   },
   {
    "type": "choice",
    "audio": "das Anschreiben",
    "q": "🔊 Hör zu – was bedeutet das Wort?",
    "options": [
     "der Zettel mit deinen Zeugnissen",
     "die Antwort von der Firma",
     "der Brief zu deiner Bewerbung",
     "die Liste deiner alten Stellen"
    ],
    "answer": 2,
    "w": "das Anschreiben",
    "explain": "das Anschreiben = der Brief zu deiner Bewerbung."
   },
   {
    "type": "choice",
    "audio": "das Vorstellungsgespräch",
    "q": "🔊 Hör zu – was bedeutet das Wort?",
    "options": [
     "dort arbeitest du einen Tag mit",
     "dort holst du deine Papiere ab",
     "dort bekommst du deinen Vertrag",
     "dort lernt die Firma dich kennen"
    ],
    "answer": 3,
    "w": "das Vorstellungsgespräch",
    "explain": "das Vorstellungsgespräch = dort lernt die Firma dich kennen."
   },
   {
    "type": "choice",
    "audio": "das Arbeitszeugnis",
    "q": "🔊 Hör zu – was bedeutet das Wort?",
    "options": [
     "das Papier über deine Leistungen",
     "das Papier über deinen Verdienst",
     "das Papier mit deinen freien Tagen",
     "das Papier über deine Wohnung"
    ],
    "answer": 0,
    "w": "das Arbeitszeugnis",
    "explain": "das Arbeitszeugnis = das Papier über deine Leistungen."
   },
   {
    "type": "choice",
    "audio": "die Probearbeit",
    "q": "🔊 Hör zu – was bedeutet das Wort?",
    "options": [
     "ein Tag mit vielen Fragen im Büro",
     "ein Tag zum Mitarbeiten ohne Vertrag",
     "ein Tag frei vor dem Anfang",
     "ein Tag für die Prüfung im Amt"
    ],
    "answer": 1,
    "w": "die Probearbeit",
    "explain": "die Probearbeit = ein Tag zum Mitarbeiten ohne Vertrag."
   },
   {
    "type": "choice",
    "audio": "die Absage",
    "q": "🔊 Hör zu – was bedeutet das Wort?",
    "options": [
     "sie melden sich erst später bei dir",
     "sie laden dich noch einmal ein",
     "sie wollen dich leider nicht nehmen",
     "sie brauchen noch ein paar Papiere"
    ],
    "answer": 2,
    "w": "die Absage",
    "explain": "die Absage = sie wollen dich leider nicht nehmen."
   },
   {
    "type": "choice",
    "audio": "die Zusage",
    "q": "🔊 Hör zu – was bedeutet das Wort?",
    "options": [
     "die Stelle ist schon vergeben",
     "der Termin steht endlich fest",
     "der Vertrag läuft bald aus",
     "die Stelle gehört jetzt dir"
    ],
    "answer": 3,
    "w": "die Zusage",
    "explain": "die Zusage = die Stelle gehört jetzt dir."
   },
   {
    "type": "choice",
    "audio": "die Gehaltsvorstellung",
    "q": "🔊 Hör zu – was bedeutet das Wort?",
    "options": [
     "so viel Geld möchtest du verdienen",
     "so viel Geld zahlt der Betrieb immer",
     "so viele Stunden willst du arbeiten",
     "so viel Geld bleibt dir am Ende"
    ],
    "answer": 0,
    "w": "die Gehaltsvorstellung",
    "explain": "die Gehaltsvorstellung = so viel Geld möchtest du verdienen."
   },
   {
    "type": "choice",
    "audio": "die Bewerbungsunterlagen",
    "q": "🔊 Hör zu – was bedeutet das Wort?",
    "options": [
     "alle Papiere, die du zu Hause hast",
     "alle Papiere, die du mitschickst",
     "alle Fragen, die im Gespräch kommen",
     "alle Firmen, die du angeschrieben hast"
    ],
    "answer": 1,
    "w": "die Bewerbungsunterlagen",
    "explain": "die Bewerbungsunterlagen = alle Papiere, die du mitschickst."
   },
   {
    "type": "choice",
    "audio": "die Berufserfahrung",
    "q": "🔊 Hör zu – was bedeutet das Wort?",
    "options": [
     "was du gern lernen möchtest",
     "was du in der Schule hattest",
     "was du schon gearbeitet hast",
     "was du am liebsten machst"
    ],
    "answer": 2,
    "w": "die Berufserfahrung",
    "explain": "die Berufserfahrung = was du schon gearbeitet hast."
   },
   {
    "type": "choice",
    "audio": "die Anerkennung",
    "q": "🔊 Hör zu – was bedeutet das Wort?",
    "options": [
     "dein Antrag ist beim Amt angekommen",
     "dein Vertrag wird endlich länger",
     "dein Zeugnis kommt mit der Post",
     "dein Abschluss gilt auch hier"
    ],
    "answer": 3,
    "w": "die Anerkennung",
    "explain": "die Anerkennung = dein Abschluss gilt auch hier."
   },
   {
    "type": "choice",
    "audio": "der Ansprechpartner",
    "q": "🔊 Hör zu – was bedeutet das Wort?",
    "options": [
     "diese Person darfst du fragen",
     "diese Person prüft deine Papiere",
     "diese Person arbeitet neben dir",
     "diese Person leitet den ganzen Betrieb"
    ],
    "answer": 0,
    "w": "der Ansprechpartner",
    "explain": "der Ansprechpartner = diese Person darfst du fragen."
   },
   {
    "type": "choice",
    "audio": "die Befristung",
    "q": "🔊 Hör zu – was bedeutet das Wort?",
    "options": [
     "die Stelle beginnt an einem Tag",
     "die Stelle endet an einem Tag",
     "die Arbeit ist nur am Wochenende",
     "die Zeit zum Kennenlernen im Betrieb"
    ],
    "answer": 1,
    "w": "die Befristung",
    "explain": "die Befristung = die Stelle endet an einem Tag."
   },
   {
    "type": "choice",
    "audio": "sich bewerben",
    "q": "🔊 Hör zu – was bedeutet das Wort?",
    "options": [
     "schriftlich den Vertrag beenden",
     "höflich nach dem Gehalt fragen",
     "schriftlich um eine Stelle bitten",
     "pünktlich zum Gespräch erscheinen"
    ],
    "answer": 2,
    "w": "sich bewerben",
    "explain": "sich bewerben = schriftlich um eine Stelle bitten."
   },
   {
    "type": "choice",
    "audio": "der Eintrittstermin",
    "q": "🔊 Hör zu – was bedeutet das Wort?",
    "options": [
     "der letzte Tag im alten Betrieb",
     "der Tag von deinem Gespräch",
     "der Tag mit der ersten Abrechnung",
     "der erste Tag im neuen Betrieb"
    ],
    "answer": 3,
    "w": "der Eintrittstermin",
    "explain": "der Eintrittstermin = der erste Tag im neuen Betrieb."
   }
  ]
 },
 {
  "id": "buchhaltung",
  "title": "Zahlen und Belege",
  "level": "B1",
  "emoji": "🎧",
  "words": [
   {
    "de": "der Beleg",
    "info": "Papier als Nachweis für Ausgaben",
    "emoji": "🧾"
   },
   {
    "de": "die Eingangsrechnung",
    "info": "kommt von der Firma zu uns",
    "emoji": "📥"
   },
   {
    "de": "prüfen",
    "info": "genau anschauen, ob alles stimmt",
    "emoji": "🔍"
   },
   {
    "de": "das Zahlungsziel",
    "info": "bis dahin muss bezahlt sein",
    "emoji": "⏳"
   },
   {
    "de": "der Skonto",
    "info": "kleiner Nachlass beim schnellen Zahlen",
    "emoji": "💸"
   },
   {
    "de": "die Mahnung",
    "info": "Erinnerung, dass Geld noch fehlt",
    "emoji": "✉️"
   },
   {
    "de": "die Überweisung",
    "info": "Geld geht zur anderen Firma",
    "emoji": "💶"
   },
   {
    "de": "der Verwendungszweck",
    "info": "der Text bei einer Zahlung",
    "emoji": "📝"
   },
   {
    "de": "der Zahlungseingang",
    "info": "das Geld ist angekommen",
    "emoji": "✅"
   },
   {
    "de": "der offene Posten",
    "info": "hier fehlt das Geld noch",
    "emoji": "🔴"
   },
   {
    "de": "die Gutschrift",
    "info": "Geld kommt wieder zurück",
    "emoji": "↩️"
   },
   {
    "de": "die Umsatzsteuer",
    "info": "der Anteil für den Staat",
    "emoji": "🏛️"
   },
   {
    "de": "die Buchung",
    "info": "ein Eintrag mit Datum und Betrag",
    "emoji": "✍️"
   },
   {
    "de": "der Kontoauszug",
    "info": "zeigt jede Zahlung im Monat",
    "emoji": "🏦"
   },
   {
    "de": "die Kostenstelle",
    "info": "zeigt, wer das bezahlen muss",
    "emoji": "🏷️"
   },
   {
    "de": "der Monatsabschluss",
    "info": "am Ende ist alles gebucht",
    "emoji": "📆"
   }
  ],
  "exercises": [
   {
    "type": "listen",
    "label": "📢 Ansage in der Warteschleife",
    "audioUrl": "https://d8j0ntlcm91z4.cloudfront.net/user_38tIQPWpEsaUmk18tYN8mskaaAF/hf_20260826_073824_cd70adf7-0db6-4022-9149-58f2cb3eaf4f.mp3",
    "q": "Wann sieht die Buchhaltung eine Zahlung von heute?",
    "options": [
     "Noch am selben Tag bis dreizehn Uhr",
     "Erst nach dem Monatsabschluss der Woche",
     "Frühestens übermorgen auf dem Kontoauszug",
     "Sobald die Rechnungsnummer geschickt wurde"
    ],
    "answer": 2,
    "transcript": "Sie sind mit der Buchhaltung verbunden. Alle Plätze sind gerade besetzt. Ein Hinweis vorweg: Wegen des Monatsabschlusses erreichen Sie uns diese Woche nur bis dreizehn Uhr. Fragen zu offenen Rechnungen schicken Sie bitte schriftlich, mit der Rechnungsnummer im Betreff. Zahlungen, die Sie heute überweisen, sehen wir frühestens übermorgen auf dem Kontoauszug. Bitte mahnen Sie uns deshalb nicht sofort.",
    "explain": "Die Ansage sagt, Zahlungen von heute stehen frühestens übermorgen auf dem Kontoauszug."
   },
   {
    "type": "listen",
    "label": "📞 Mailbox: Bitte noch nicht zahlen",
    "audioUrl": "https://d8j0ntlcm91z4.cloudfront.net/user_38tIQPWpEsaUmk18tYN8mskaaAF/hf_20260826_073824_c6963f99-a618-40bb-b2e6-56be86ad00e1.mp3",
    "q": "Was stimmt an der Rechnung nicht?",
    "options": [
     "Die Menge auf der Rechnung ist zu hoch",
     "Die Umsatzsteuer ist falsch gerechnet",
     "Das Zahlungsziel ist schon abgelaufen",
     "Die Gutschrift von Möller fehlt noch"
    ],
    "answer": 1,
    "transcript": "Frau Klein, hier ist Aydin aus dem Einkauf. Ich habe die Rechnung von Möller auf dem Tisch. Die Menge stimmt, aber die Umsatzsteuer ist falsch gerechnet, es sind knapp vierzig Euro zu viel. Bitte noch nicht überweisen. Ich frage bei Möller nach einer Gutschrift. Das Zahlungsziel läuft erst am Ende vom Monat, wir haben also Zeit.",
    "explain": "Er sagt, die Menge stimmt, aber die Umsatzsteuer ist falsch gerechnet."
   },
   {
    "type": "listen",
    "label": "🪟 Am Tresen: Mahnung, aber bezahlt",
    "audioUrl": "https://d8j0ntlcm91z4.cloudfront.net/user_38tIQPWpEsaUmk18tYN8mskaaAF/hf_20260826_073824_23143509-4939-4809-96d8-4c420c4e98d8.mp3",
    "q": "Warum wurde die Zahlung nicht gefunden?",
    "options": [
     "Weil im Verwendungszweck die Nummer fehlt",
     "Weil der Kunde erst im März bezahlt hat",
     "Weil der Beleg von der falschen Bank ist",
     "Weil die Mahnung schon erledigt war"
    ],
    "answer": 0,
    "transcript": "Guten Tag, ich habe eine Mahnung bekommen, aber ich habe längst bezahlt. — Haben Sie den Beleg dabei? — Hier, die Überweisung vom zweiten März. — Moment, bei uns ist nichts angekommen. Steht da eine Rechnungsnummer im Verwendungszweck? — Nein, nur mein Name. — Das ist der Grund. Ohne Nummer finden wir die Zahlung nicht. Ich kläre das, die Mahnung ist erledigt.",
    "explain": "Ohne die Rechnungsnummer im Verwendungszweck kann die Buchhaltung die Zahlung nicht zuordnen."
   },
   {
    "type": "listen",
    "label": "☕ Privat: Es wird wieder spät",
    "audioUrl": "https://d8j0ntlcm91z4.cloudfront.net/user_38tIQPWpEsaUmk18tYN8mskaaAF/hf_20260826_073824_670ec816-e242-488c-b74b-cd8ac9daaa64.mp3",
    "q": "Warum kann niemand anders die Arbeit machen?",
    "options": [
     "Weil die Belege nur er selbst kennt",
     "Weil ab dem Ersten alle im Urlaub sind",
     "Weil die Kontoauszüge noch nicht da sind",
     "Weil die Kollegin gerade krank ist"
    ],
    "answer": 3,
    "transcript": "Kommst du heute später? — Ja, wir haben Monatsabschluss. — Und das dauert so lange? — Bei uns schon. Drei Kontoauszüge fehlen noch, und ein paar Belege finde ich einfach nicht. — Kann das nicht jemand anders machen? — Meine Kollegin ist krank. Ab dem Ersten wird es ruhiger, dann gehen wir endlich mal wieder essen.",
    "explain": "Er sagt, seine Kollegin ist krank, deshalb bleibt die Arbeit an ihm hängen."
   },
   {
    "type": "choice",
    "audio": "der Beleg",
    "q": "🔊 Hör zu – was bedeutet das Wort?",
    "options": [
     "Papier als Nachweis für Ausgaben",
     "Papier mit dem Plan für morgen",
     "Zettel mit der neuen Adresse",
     "Liste mit allen Kunden im Ort"
    ],
    "answer": 0,
    "w": "der Beleg",
    "explain": "der Beleg = Papier als Nachweis für Ausgaben."
   },
   {
    "type": "choice",
    "audio": "die Eingangsrechnung",
    "q": "🔊 Hör zu – was bedeutet das Wort?",
    "options": [
     "geht von uns an die Kunden",
     "kommt von der Firma zu uns",
     "liegt beim Chef zur Unterschrift",
     "bleibt immer im Ordner liegen"
    ],
    "answer": 1,
    "w": "die Eingangsrechnung",
    "explain": "die Eingangsrechnung = kommt von der Firma zu uns."
   },
   {
    "type": "choice",
    "audio": "prüfen",
    "q": "🔊 Hör zu – was bedeutet das Wort?",
    "options": [
     "schnell an den Kunden schicken",
     "sofort in den Ordner legen",
     "genau anschauen, ob alles stimmt",
     "gleich in bar bezahlen"
    ],
    "answer": 2,
    "w": "prüfen",
    "explain": "prüfen = genau anschauen, ob alles stimmt."
   },
   {
    "type": "choice",
    "audio": "das Zahlungsziel",
    "q": "🔊 Hör zu – was bedeutet das Wort?",
    "options": [
     "danach wird die Ware geliefert",
     "vorher kommt die erste Mahnung",
     "dabei wird die Steuer gerechnet",
     "bis dahin muss bezahlt sein"
    ],
    "answer": 3,
    "w": "das Zahlungsziel",
    "explain": "das Zahlungsziel = bis dahin muss bezahlt sein."
   },
   {
    "type": "choice",
    "audio": "der Skonto",
    "q": "🔊 Hör zu – was bedeutet das Wort?",
    "options": [
     "kleiner Nachlass beim schnellen Zahlen",
     "kleiner Aufschlag beim späten Zahlen",
     "kleine Gebühr für die Lieferung",
     "kleiner Rest auf dem Konto"
    ],
    "answer": 0,
    "w": "der Skonto",
    "explain": "der Skonto = kleiner Nachlass beim schnellen Zahlen."
   },
   {
    "type": "choice",
    "audio": "die Mahnung",
    "q": "🔊 Hör zu – was bedeutet das Wort?",
    "options": [
     "Nachricht, dass die Ware kommt",
     "Erinnerung, dass Geld noch fehlt",
     "Hinweis, dass der Preis steigt",
     "Meldung, dass das Konto leer ist"
    ],
    "answer": 1,
    "w": "die Mahnung",
    "explain": "die Mahnung = Erinnerung, dass Geld noch fehlt."
   },
   {
    "type": "choice",
    "audio": "die Überweisung",
    "q": "🔊 Hör zu – was bedeutet das Wort?",
    "options": [
     "Ware geht zur anderen Firma",
     "Post geht an die andere Abteilung",
     "Geld geht zur anderen Firma",
     "Geld kommt in bar in die Kasse"
    ],
    "answer": 2,
    "w": "die Überweisung",
    "explain": "die Überweisung = Geld geht zur anderen Firma."
   },
   {
    "type": "choice",
    "audio": "der Verwendungszweck",
    "q": "🔊 Hör zu – was bedeutet das Wort?",
    "options": [
     "der Name auf dem Konto",
     "der Betrag auf der Rechnung",
     "das Datum auf dem Beleg",
     "der Text bei einer Zahlung"
    ],
    "answer": 3,
    "w": "der Verwendungszweck",
    "explain": "der Verwendungszweck = der Text bei einer Zahlung."
   },
   {
    "type": "choice",
    "audio": "der Zahlungseingang",
    "q": "🔊 Hör zu – was bedeutet das Wort?",
    "options": [
     "das Geld ist angekommen",
     "die Rechnung ist verschickt",
     "die Ware ist geliefert",
     "die Frist ist abgelaufen"
    ],
    "answer": 0,
    "w": "der Zahlungseingang",
    "explain": "der Zahlungseingang = das Geld ist angekommen."
   },
   {
    "type": "choice",
    "audio": "der offene Posten",
    "q": "🔊 Hör zu – was bedeutet das Wort?",
    "options": [
     "hier fehlt die Ware noch",
     "hier fehlt das Geld noch",
     "hier fehlt der Beleg noch",
     "hier fehlt die Steuer noch"
    ],
    "answer": 1,
    "w": "der offene Posten",
    "explain": "der offene Posten = hier fehlt das Geld noch."
   },
   {
    "type": "choice",
    "audio": "die Gutschrift",
    "q": "🔊 Hör zu – was bedeutet das Wort?",
    "options": [
     "Geld wird später gezahlt",
     "Ware wird neu geliefert",
     "Geld kommt wieder zurück",
     "Preis wird noch verhandelt"
    ],
    "answer": 2,
    "w": "die Gutschrift",
    "explain": "die Gutschrift = Geld kommt wieder zurück."
   },
   {
    "type": "choice",
    "audio": "die Umsatzsteuer",
    "q": "🔊 Hör zu – was bedeutet das Wort?",
    "options": [
     "der Anteil für die Bank",
     "der Anteil für den Händler",
     "der Anteil für die Kasse",
     "der Anteil für den Staat"
    ],
    "answer": 3,
    "w": "die Umsatzsteuer",
    "explain": "die Umsatzsteuer = der Anteil für den Staat."
   },
   {
    "type": "choice",
    "audio": "die Buchung",
    "q": "🔊 Hör zu – was bedeutet das Wort?",
    "options": [
     "ein Eintrag mit Datum und Betrag",
     "ein Zettel mit Name und Adresse",
     "ein Brief mit Frist und Nummer",
     "ein Ordner mit Blatt und Kopie"
    ],
    "answer": 0,
    "w": "die Buchung",
    "explain": "die Buchung = ein Eintrag mit Datum und Betrag."
   },
   {
    "type": "choice",
    "audio": "der Kontoauszug",
    "q": "🔊 Hör zu – was bedeutet das Wort?",
    "options": [
     "zeigt jeden Kunden im Jahr",
     "zeigt jede Zahlung im Monat",
     "zeigt jede Ware im Lager",
     "zeigt jede Stunde der Woche"
    ],
    "answer": 1,
    "w": "der Kontoauszug",
    "explain": "der Kontoauszug = zeigt jede Zahlung im Monat."
   },
   {
    "type": "choice",
    "audio": "die Kostenstelle",
    "q": "🔊 Hör zu – was bedeutet das Wort?",
    "options": [
     "zeigt, wann das geliefert wird",
     "zeigt, wo die Ware steht",
     "zeigt, wer das bezahlen muss",
     "zeigt, wie teuer das war"
    ],
    "answer": 2,
    "w": "die Kostenstelle",
    "explain": "die Kostenstelle = zeigt, wer das bezahlen muss."
   },
   {
    "type": "choice",
    "audio": "der Monatsabschluss",
    "q": "🔊 Hör zu – was bedeutet das Wort?",
    "options": [
     "am Anfang wird alles geplant",
     "in der Mitte wird alles geprüft",
     "am Ende wird alles bezahlt",
     "am Ende ist alles gebucht"
    ],
    "answer": 3,
    "w": "der Monatsabschluss",
    "explain": "der Monatsabschluss = am Ende ist alles gebucht."
   }
  ]
 },
 {
  "id": "buero",
  "title": "Alltag im Büro",
  "level": "B1",
  "emoji": "🎧",
  "words": [
   {
    "de": "die Besprechung",
    "info": "alle setzen sich kurz zusammen",
    "emoji": "🗣️"
   },
   {
    "de": "das Protokoll",
    "info": "hier steht, was besprochen wurde",
    "emoji": "📝"
   },
   {
    "de": "die Tagesordnung",
    "info": "die Punkte für das Treffen",
    "emoji": "📋"
   },
   {
    "de": "die Ablage",
    "info": "dort kommen die Papiere hin",
    "emoji": "🗄️"
   },
   {
    "de": "die Wiedervorlage",
    "info": "kommt später noch einmal hoch",
    "emoji": "📌"
   },
   {
    "de": "weiterleiten",
    "info": "an die richtige Stelle geben",
    "emoji": "➡️"
   },
   {
    "de": "die Durchwahl",
    "info": "die letzten Zahlen der Nummer",
    "emoji": "☎️"
   },
   {
    "de": "das Anliegen",
    "info": "das, was jemand möchte",
    "emoji": "💬"
   },
   {
    "de": "die Zuständigkeit",
    "info": "wer die Sache bearbeiten muss",
    "emoji": "🎯"
   },
   {
    "de": "die Vertretung",
    "info": "jemand macht die Arbeit solange",
    "emoji": "🔁"
   },
   {
    "de": "verschieben",
    "info": "auf einen späteren Tag legen",
    "emoji": "📅"
   },
   {
    "de": "der Verteiler",
    "info": "eine Liste von vielen Empfängern",
    "emoji": "📧"
   },
   {
    "de": "der Bürobedarf",
    "info": "Stifte, Papier und ähnliche Sachen",
    "emoji": "✏️"
   },
   {
    "de": "die Sammelbestellung",
    "info": "alle bestellen auf einmal zusammen",
    "emoji": "📦"
   },
   {
    "de": "die Rückfrage",
    "info": "noch einmal genau nachfragen",
    "emoji": "❓"
   },
   {
    "de": "abzeichnen",
    "info": "mit dem Kürzel kurz bestätigen",
    "emoji": "✍️"
   }
  ],
  "exercises": [
   {
    "type": "listen",
    "label": "📢 Durchsage im Haus",
    "audioUrl": "https://d8j0ntlcm91z4.cloudfront.net/user_38tIQPWpEsaUmk18tYN8mskaaAF/hf_20260826_074039_eb75ba62-7fb0-4487-b482-1dd9ef777f8c.mp3",
    "q": "Warum findet die Besprechung woanders statt?",
    "options": [
     "Weil unten neben der Küche mehr Platz ist",
     "Weil der große Raum gerade gestrichen wird",
     "Weil die Tagesordnung noch nicht gedruckt ist",
     "Weil Frau Ott heute den Empfang vertreten muss"
    ],
    "answer": 1,
    "transcript": "Eine kurze Durchsage für alle Kolleginnen und Kollegen im zweiten Stock. Die Besprechung um vierzehn Uhr findet nicht im großen Raum statt, sondern unten neben der Küche. Der große Raum wird gerade gestrichen. Bitte bringen Sie die Tagesordnung selbst mit, wir drucken sie nicht mehr aus. Wer heute die Vertretung am Empfang übernimmt, meldet sich bitte kurz bei Frau Ott.",
    "explain": "In der Durchsage heißt es, der große Raum wird gerade gestrichen, deshalb geht es nach unten."
   },
   {
    "type": "listen",
    "label": "📞 Mailbox: Termin verschieben",
    "audioUrl": "https://d8j0ntlcm91z4.cloudfront.net/user_38tIQPWpEsaUmk18tYN8mskaaAF/hf_20260826_074039_2eb76630-4864-4ff2-9cc4-5f1c7803d72a.mp3",
    "q": "Warum soll der Termin verschoben werden?",
    "options": [
     "Weil Frau Sander am Mittwoch verhindert ist",
     "Weil die Zahlen noch nicht fertig gerechnet sind",
     "Weil der Kollege mit den Zahlen krank ist",
     "Weil am Dienstag mehr Kollegen kommen können"
    ],
    "answer": 2,
    "transcript": "Guten Tag, Frau Sander, hier spricht Yildiz von der Firma Brandt. Es geht um unseren Termin am Mittwoch um zehn Uhr. Mein Kollege, der die Zahlen erklären sollte, ist krank geworden. Können wir auf nächste Woche Dienstag gehen, gern auch am Nachmittag? Rufen Sie mich bitte auf der Durchwahl zwei drei an, oder schreiben Sie mir kurz.",
    "explain": "Er sagt, sein Kollege, der die Zahlen erklären sollte, ist krank geworden."
   },
   {
    "type": "listen",
    "label": "🪟 Am Tresen: Bürobedarf",
    "audioUrl": "https://d8j0ntlcm91z4.cloudfront.net/user_38tIQPWpEsaUmk18tYN8mskaaAF/hf_20260826_074040_630559a1-9651-4e57-8cdf-427c6b3f9781.mp3",
    "q": "Was muss passieren, wenn es mit der Bestellung eilt?",
    "options": [
     "Die Chefin muss die Bestellung abzeichnen",
     "Der Kollege bestellt gleich am nächsten Ersten",
     "Die Kollegin muss einen Zettel mitbringen",
     "Die Bestellung geht in den nächsten Monat"
    ],
    "answer": 0,
    "transcript": "Guten Morgen, ich brauche neue Ordner und zwei Schachteln Stifte. — Haben Sie einen Zettel dabei? — Nein, das habe ich nur im Kopf. — Wir bestellen den Bürobedarf nur noch einmal im Monat, immer zum Ersten. Schreiben Sie mir das bitte in den Verteiler, dann kommt es in die Sammelbestellung. — Und wenn es eilt? — Dann muss Ihre Chefin das abzeichnen.",
    "explain": "Der Kollege sagt am Ende: Wenn es eilt, muss die Chefin die Bestellung abzeichnen."
   },
   {
    "type": "listen",
    "label": "☕ Privat: Zwei Vertretungen",
    "audioUrl": "https://d8j0ntlcm91z4.cloudfront.net/user_38tIQPWpEsaUmk18tYN8mskaaAF/hf_20260826_074039_c3a29e56-d97a-4510-85b8-c209959c45d7.mp3",
    "q": "Was macht sie mit der Post der Kolleginnen?",
    "options": [
     "Sie schickt sie an die Kolleginnen weiter",
     "Sie gibt sie der Chefin am Empfang",
     "Sie trägt sie in den Verteiler ein",
     "Sie legt sie in die Wiedervorlage"
    ],
    "answer": 3,
    "transcript": "Und, wie läuft es im neuen Büro? — Ganz gut. Nur nächste Woche wird es eng. — Wieso? — Ich mache die Vertretung für zwei Kolleginnen gleichzeitig. Beide sind im Urlaub. — Zwei auf einmal? — Ja, aber die Telefone leite ich weiter, und die Post lege ich einfach in die Wiedervorlage. Wichtig ist nur, dass ich nichts vergesse.",
    "explain": "Sie erzählt, die Post legt sie einfach in die Wiedervorlage, damit sie später drankommt."
   },
   {
    "type": "choice",
    "audio": "die Besprechung",
    "q": "🔊 Hör zu – was bedeutet das Wort?",
    "options": [
     "alle setzen sich kurz zusammen",
     "einer schreibt allen eine Nachricht",
     "jeder arbeitet still am Platz",
     "zwei telefonieren kurz miteinander"
    ],
    "answer": 0,
    "w": "die Besprechung",
    "explain": "die Besprechung = alle setzen sich kurz zusammen."
   },
   {
    "type": "choice",
    "audio": "das Protokoll",
    "q": "🔊 Hör zu – was bedeutet das Wort?",
    "options": [
     "hier steht, wer heute da ist",
     "hier steht, was besprochen wurde",
     "hier steht, was noch fehlt",
     "hier steht, wann Feierabend ist"
    ],
    "answer": 1,
    "w": "das Protokoll",
    "explain": "das Protokoll = hier steht, was besprochen wurde."
   },
   {
    "type": "choice",
    "audio": "die Tagesordnung",
    "q": "🔊 Hör zu – was bedeutet das Wort?",
    "options": [
     "die Namen für die Liste",
     "die Zeiten für die Woche",
     "die Punkte für das Treffen",
     "die Regeln für das Haus"
    ],
    "answer": 2,
    "w": "die Tagesordnung",
    "explain": "die Tagesordnung = die Punkte für das Treffen."
   },
   {
    "type": "choice",
    "audio": "die Ablage",
    "q": "🔊 Hör zu – was bedeutet das Wort?",
    "options": [
     "dort kommen die Gäste an",
     "dort steht der große Kopierer",
     "dort holst du neue Stifte",
     "dort kommen die Papiere hin"
    ],
    "answer": 3,
    "w": "die Ablage",
    "explain": "die Ablage = dort kommen die Papiere hin."
   },
   {
    "type": "choice",
    "audio": "die Wiedervorlage",
    "q": "🔊 Hör zu – was bedeutet das Wort?",
    "options": [
     "kommt später noch einmal hoch",
     "geht sofort an die Chefin",
     "bleibt für immer im Schrank",
     "wandert gleich in den Müll"
    ],
    "answer": 0,
    "w": "die Wiedervorlage",
    "explain": "die Wiedervorlage = kommt später noch einmal hoch."
   },
   {
    "type": "choice",
    "audio": "weiterleiten",
    "q": "🔊 Hör zu – was bedeutet das Wort?",
    "options": [
     "an der eigenen Stelle behalten",
     "an die richtige Stelle geben",
     "auf den nächsten Tag legen",
     "aus dem Schrank heraussuchen"
    ],
    "answer": 1,
    "w": "weiterleiten",
    "explain": "weiterleiten = an die richtige Stelle geben."
   },
   {
    "type": "choice",
    "audio": "die Durchwahl",
    "q": "🔊 Hör zu – was bedeutet das Wort?",
    "options": [
     "die Nummer von der Zentrale",
     "der kurze Name am Telefon",
     "die letzten Zahlen der Nummer",
     "das Zeichen vor der Vorwahl"
    ],
    "answer": 2,
    "w": "die Durchwahl",
    "explain": "die Durchwahl = die letzten Zahlen der Nummer."
   },
   {
    "type": "choice",
    "audio": "das Anliegen",
    "q": "🔊 Hör zu – was bedeutet das Wort?",
    "options": [
     "das, was jemand bezahlt",
     "der Ort, wo jemand wartet",
     "die Zeit, die jemand bleibt",
     "das, was jemand möchte"
    ],
    "answer": 3,
    "w": "das Anliegen",
    "explain": "das Anliegen = das, was jemand möchte."
   },
   {
    "type": "choice",
    "audio": "die Zuständigkeit",
    "q": "🔊 Hör zu – was bedeutet das Wort?",
    "options": [
     "wer die Sache bearbeiten muss",
     "wann die Sache fertig wird",
     "wo die Sache abgelegt wird",
     "wie die Sache bezahlt wird"
    ],
    "answer": 0,
    "w": "die Zuständigkeit",
    "explain": "die Zuständigkeit = wer die Sache bearbeiten muss."
   },
   {
    "type": "choice",
    "audio": "die Vertretung",
    "q": "🔊 Hör zu – was bedeutet das Wort?",
    "options": [
     "jemand prüft die Arbeit später",
     "jemand macht die Arbeit solange",
     "jemand teilt die Arbeit ein",
     "jemand erklärt die Arbeit neu"
    ],
    "answer": 1,
    "w": "die Vertretung",
    "explain": "die Vertretung = jemand macht die Arbeit solange."
   },
   {
    "type": "choice",
    "audio": "verschieben",
    "q": "🔊 Hör zu – was bedeutet das Wort?",
    "options": [
     "ganz ohne Ersatz absagen",
     "an einen Kollegen abgeben",
     "auf einen späteren Tag legen",
     "auf zwei Termine aufteilen"
    ],
    "answer": 2,
    "w": "verschieben",
    "explain": "verschieben = auf einen späteren Tag legen."
   },
   {
    "type": "choice",
    "audio": "der Verteiler",
    "q": "🔊 Hör zu – was bedeutet das Wort?",
    "options": [
     "ein Schrank für viele Ordner",
     "ein Fach für neue Post",
     "ein Plan für alle Räume",
     "eine Liste von vielen Empfängern"
    ],
    "answer": 3,
    "w": "der Verteiler",
    "explain": "der Verteiler = eine Liste von vielen Empfängern."
   },
   {
    "type": "choice",
    "audio": "der Bürobedarf",
    "q": "🔊 Hör zu – was bedeutet das Wort?",
    "options": [
     "Stifte, Papier und ähnliche Sachen",
     "Tische, Stühle und große Schränke",
     "Kaffee, Milch und kleine Kekse",
     "Rechner, Drucker und lange Kabel"
    ],
    "answer": 0,
    "w": "der Bürobedarf",
    "explain": "der Bürobedarf = Stifte, Papier und ähnliche Sachen."
   },
   {
    "type": "choice",
    "audio": "die Sammelbestellung",
    "q": "🔊 Hör zu – was bedeutet das Wort?",
    "options": [
     "jeder bestellt schnell für sich",
     "alle bestellen auf einmal zusammen",
     "die Chefin bestellt für alle",
     "der Laden liefert alles einzeln"
    ],
    "answer": 1,
    "w": "die Sammelbestellung",
    "explain": "die Sammelbestellung = alle bestellen auf einmal zusammen."
   },
   {
    "type": "choice",
    "audio": "die Rückfrage",
    "q": "🔊 Hör zu – was bedeutet das Wort?",
    "options": [
     "gleich eine Antwort schicken",
     "später darüber Bescheid geben",
     "noch einmal genau nachfragen",
     "einfach ohne Antwort weitermachen"
    ],
    "answer": 2,
    "w": "die Rückfrage",
    "explain": "die Rückfrage = noch einmal genau nachfragen."
   },
   {
    "type": "choice",
    "audio": "abzeichnen",
    "q": "🔊 Hör zu – was bedeutet das Wort?",
    "options": [
     "eine Kopie für die Ablage machen",
     "einen Termin in den Plan schreiben",
     "einen Zettel an die Tür hängen",
     "mit dem Kürzel kurz bestätigen"
    ],
    "answer": 3,
    "w": "abzeichnen",
    "explain": "abzeichnen = mit dem Kürzel kurz bestätigen."
   }
  ]
 },
 {
  "id": "elektro-shk",
  "title": "Strom und Heizung",
  "level": "B1",
  "emoji": "🎧",
  "words": [
   {
    "de": "die Sicherung",
    "info": "sie schaltet den Strom ab",
    "emoji": "⚡"
   },
   {
    "de": "der Verteiler",
    "info": "dort sitzen alle Sicherungen zusammen",
    "emoji": "🗄️"
   },
   {
    "de": "die Leitung",
    "info": "darin läuft der Strom",
    "emoji": "〰️"
   },
   {
    "de": "verlegen",
    "info": "neu in die Wand einbauen",
    "emoji": "🛠️"
   },
   {
    "de": "die Störung",
    "info": "etwas geht gerade nicht richtig",
    "emoji": "⚠️"
   },
   {
    "de": "entlüften",
    "info": "die Luft aus der Heizung lassen",
    "emoji": "💨"
   },
   {
    "de": "der Rohrbruch",
    "info": "das Rohr ist auf, Wasser läuft",
    "emoji": "💧"
   },
   {
    "de": "der Kundendienst",
    "info": "sie kommen zu dir und helfen",
    "emoji": "📞"
   },
   {
    "de": "der Wartungstermin",
    "info": "geplanter Besuch zum Prüfen der Anlage",
    "emoji": "📅"
   },
   {
    "de": "der Heizkörper",
    "info": "er macht das Zimmer warm",
    "emoji": "♨️"
   },
   {
    "de": "der Absperrhahn",
    "info": "damit stellt man das Wasser ab",
    "emoji": "🔧"
   },
   {
    "de": "der Stromausfall",
    "info": "überall geht das Licht aus",
    "emoji": "🕯️"
   },
   {
    "de": "der Zählerstand",
    "info": "die abgelesene Zahl für den Strom",
    "emoji": "🔢"
   },
   {
    "de": "der Notdienst",
    "info": "Hilfe am Abend und am Wochenende",
    "emoji": "🚨"
   },
   {
    "de": "tropfen",
    "info": "Wasser fällt langsam einzeln herunter",
    "emoji": "🚰"
   },
   {
    "de": "der Anschluss",
    "info": "die Stelle für die Verbindung",
    "emoji": "🔗"
   }
  ],
  "exercises": [
   {
    "type": "listen",
    "label": "📢 Ansage: Störungsstelle der Stadtwerke",
    "audioUrl": "https://d8j0ntlcm91z4.cloudfront.net/user_38tIQPWpEsaUmk18tYN8mskaaAF/hf_20260826_074039_d2d15c28-db95-415a-bca7-67ff4271dbf9.mp3",
    "q": "Was soll man bei Gasgeruch tun?",
    "options": [
     "Sofort raus und von draußen anrufen",
     "Zuerst die Sicherungen im Verteiler prüfen",
     "Die Eins drücken und am Telefon warten",
     "Die Fenster öffnen und drinnen warten"
    ],
    "answer": 0,
    "transcript": "Willkommen bei den Stadtwerken, Bereich Störung. Alle Mitarbeiter sind gerade im Gespräch. Bei einem Stromausfall in Ihrem Haus prüfen Sie bitte zuerst die Sicherungen im Verteiler. Ist die ganze Straße dunkel, drücken Sie die Eins. Bei Gasgeruch verlassen Sie sofort die Wohnung und rufen Sie erst von draußen an. Für einen Wartungstermin drücken Sie die Drei und nennen Sie Ihren Zählerstand.",
    "explain": "Die Ansage sagt, man soll bei Gasgeruch sofort die Wohnung verlassen und erst von draußen anrufen."
   },
   {
    "type": "listen",
    "label": "📞 Mailbox: Der Termin fällt aus",
    "audioUrl": "https://d8j0ntlcm91z4.cloudfront.net/user_38tIQPWpEsaUmk18tYN8mskaaAF/hf_20260826_074039_f5e65c78-4286-4bba-b4b0-644bedb65535.mp3",
    "q": "Warum verschiebt die Firma den Termin?",
    "options": [
     "Wegen einem Rohrbruch in der Nachbarstraße",
     "Weil ein Kollege am Dienstag krank ist",
     "Weil ein Ersatzteil noch nicht da ist",
     "Wegen einer Störung an der eigenen Anlage"
    ],
    "answer": 0,
    "transcript": "Guten Tag, Frau Adamczyk, hier Firma Reuter, Heizung und Sanitär. Ihr Wartungstermin am Dienstag um neun passt bei uns leider nicht mehr, wir haben einen Rohrbruch in der Nachbarstraße. Ich schlage Ihnen Donnerstag um halb acht vor. Sagen Sie bitte kurz Bescheid. Und stellen Sie bis dahin nichts vor den Heizkörper im Flur, sonst kommen wir nicht heran.",
    "explain": "Der Mann sagt, dass ein Rohrbruch in der Nachbarstraße dazwischengekommen ist."
   },
   {
    "type": "listen",
    "label": "🪟 Am Tresen: Die Sicherung fliegt raus",
    "audioUrl": "https://d8j0ntlcm91z4.cloudfront.net/user_38tIQPWpEsaUmk18tYN8mskaaAF/hf_20260826_074253_65d06b5f-45e3-436b-8701-c9bde2f616dd.mp3",
    "q": "Wann fliegt die Sicherung meistens raus?",
    "options": [
     "Wenn in der Küche die Waschmaschine läuft",
     "Wenn in der Küche der große Herd angeht",
     "Immer am Morgen kurz nach dem Aufstehen",
     "Wenn im Bad das warme Wasser läuft"
    ],
    "answer": 0,
    "transcript": "Guten Tag, bei mir fliegt dauernd die Sicherung raus. — Immer die gleiche? — Ja, immer die für die Küche, meistens wenn die Waschmaschine läuft. — Dann liegt es wahrscheinlich an der Leitung oder am Gerät selbst. Wir können morgen zwischen acht und zwölf kommen. — Und was kostet das? — Die Anfahrt neunundvierzig Euro, dazu jede angefangene halbe Stunde.",
    "explain": "Die Kundin sagt, es passiert fast immer dann, wenn die Waschmaschine in der Küche läuft."
   },
   {
    "type": "listen",
    "label": "☕ Privat: Die Heizung gluckert",
    "audioUrl": "https://d8j0ntlcm91z4.cloudfront.net/user_38tIQPWpEsaUmk18tYN8mskaaAF/hf_20260826_074252_1e1f8d81-a258-41af-b769-ddc7ca167ff8.mp3",
    "q": "Was soll man tun, wenn es nach dem Entlüften nicht besser wird?",
    "options": [
     "Den Kundendienst holen, weil Druck fehlt",
     "Das Ventil noch einmal ganz aufdrehen",
     "Selbst Wasser in die Heizung nachfüllen",
     "Bis zum nächsten Morgen einfach warten"
    ],
    "answer": 0,
    "transcript": "Deine Heizung gluckert auch so? — Seit Wochen. Unten wird sie warm, oben bleibt sie kalt. — Dann musst du sie entlüften. Schlüssel drauf, Lappen drunter, Ventil auf, bis Wasser kommt. — Und wenn danach immer noch nichts geht? — Dann fehlt Druck, das macht der Kundendienst. Bei mir hat er nur zehn Minuten gebraucht und nichts extra gerechnet.",
    "explain": "Der Nachbar sagt, dann fehle Druck, und darum kümmere sich der Kundendienst."
   },
   {
    "type": "choice",
    "audio": "die Sicherung",
    "q": "🔊 Hör zu – was bedeutet das Wort?",
    "options": [
     "sie schaltet den Strom ab",
     "sie misst den ganzen Strom",
     "sie macht den Strom stärker",
     "sie zeigt den Preis vom Strom"
    ],
    "answer": 0,
    "w": "die Sicherung",
    "explain": "die Sicherung = sie schaltet den Strom ab."
   },
   {
    "type": "choice",
    "audio": "der Verteiler",
    "q": "🔊 Hör zu – was bedeutet das Wort?",
    "options": [
     "dort läuft das warme Wasser zusammen",
     "dort sitzen alle Sicherungen zusammen",
     "dort steht das Werkzeug vom Kollegen",
     "dort hängen die Schlüssel für die Räume"
    ],
    "answer": 1,
    "w": "der Verteiler",
    "explain": "der Verteiler = dort sitzen alle Sicherungen zusammen."
   },
   {
    "type": "choice",
    "audio": "die Leitung",
    "q": "🔊 Hör zu – was bedeutet das Wort?",
    "options": [
     "darauf steht der Preis",
     "daran hängt die Lampe",
     "darin läuft der Strom",
     "darin steckt der Stecker"
    ],
    "answer": 2,
    "w": "die Leitung",
    "explain": "die Leitung = darin läuft der Strom."
   },
   {
    "type": "choice",
    "audio": "verlegen",
    "q": "🔊 Hör zu – was bedeutet das Wort?",
    "options": [
     "alt aus der Wand holen",
     "kurz an die Wand halten",
     "neu an die Wand malen",
     "neu in die Wand einbauen"
    ],
    "answer": 3,
    "w": "verlegen",
    "explain": "verlegen = neu in die Wand einbauen."
   },
   {
    "type": "choice",
    "audio": "die Störung",
    "q": "🔊 Hör zu – was bedeutet das Wort?",
    "options": [
     "etwas geht gerade nicht richtig",
     "etwas ist gerade ganz neu",
     "etwas kostet gerade mehr Geld",
     "etwas dauert gerade etwas länger"
    ],
    "answer": 0,
    "w": "die Störung",
    "explain": "die Störung = etwas geht gerade nicht richtig."
   },
   {
    "type": "choice",
    "audio": "entlüften",
    "q": "🔊 Hör zu – was bedeutet das Wort?",
    "options": [
     "das Wasser aus der Heizung lassen",
     "die Luft aus der Heizung lassen",
     "die Luft im Zimmer warm machen",
     "die Heizung von außen sauber machen"
    ],
    "answer": 1,
    "w": "entlüften",
    "explain": "entlüften = die Luft aus der Heizung lassen."
   },
   {
    "type": "choice",
    "audio": "der Rohrbruch",
    "q": "🔊 Hör zu – was bedeutet das Wort?",
    "options": [
     "das Rohr ist zu, nichts läuft",
     "das Rohr ist alt, aber dicht",
     "das Rohr ist auf, Wasser läuft",
     "das Rohr ist kalt, es friert"
    ],
    "answer": 2,
    "w": "der Rohrbruch",
    "explain": "der Rohrbruch = das Rohr ist auf, Wasser läuft."
   },
   {
    "type": "choice",
    "audio": "der Kundendienst",
    "q": "🔊 Hör zu – was bedeutet das Wort?",
    "options": [
     "sie schicken dir nur eine Rechnung",
     "sie holen die alten Geräte ab",
     "sie verkaufen dir eine neue Anlage",
     "sie kommen zu dir und helfen"
    ],
    "answer": 3,
    "w": "der Kundendienst",
    "explain": "der Kundendienst = sie kommen zu dir und helfen."
   },
   {
    "type": "choice",
    "audio": "der Wartungstermin",
    "q": "🔊 Hör zu – was bedeutet das Wort?",
    "options": [
     "geplanter Besuch zum Prüfen der Anlage",
     "schneller Besuch nach einem Schaden",
     "kurzer Anruf wegen der Rechnung",
     "fester Tag für das Ablesen der Zahlen"
    ],
    "answer": 0,
    "w": "der Wartungstermin",
    "explain": "der Wartungstermin = geplanter Besuch zum Prüfen der Anlage."
   },
   {
    "type": "choice",
    "audio": "der Heizkörper",
    "q": "🔊 Hör zu – was bedeutet das Wort?",
    "options": [
     "er macht das Wasser sauber",
     "er macht das Zimmer warm",
     "er hält das Zimmer trocken",
     "er bringt frische Luft herein"
    ],
    "answer": 1,
    "w": "der Heizkörper",
    "explain": "der Heizkörper = er macht das Zimmer warm."
   },
   {
    "type": "choice",
    "audio": "der Absperrhahn",
    "q": "🔊 Hör zu – was bedeutet das Wort?",
    "options": [
     "damit stellt man die Heizung höher",
     "damit lässt man die Luft heraus",
     "damit stellt man das Wasser ab",
     "damit macht man den Strom aus"
    ],
    "answer": 2,
    "w": "der Absperrhahn",
    "explain": "der Absperrhahn = damit stellt man das Wasser ab."
   },
   {
    "type": "choice",
    "audio": "der Stromausfall",
    "q": "🔊 Hör zu – was bedeutet das Wort?",
    "options": [
     "überall wird das Licht schwächer",
     "im Bad geht nur eine Lampe aus",
     "der Strom wird plötzlich teurer",
     "überall geht das Licht aus"
    ],
    "answer": 3,
    "w": "der Stromausfall",
    "explain": "der Stromausfall = überall geht das Licht aus."
   },
   {
    "type": "choice",
    "audio": "der Zählerstand",
    "q": "🔊 Hör zu – was bedeutet das Wort?",
    "options": [
     "die abgelesene Zahl für den Strom",
     "der bezahlte Betrag für den Strom",
     "die Nummer von der eigenen Wohnung",
     "der Name von der neuen Firma"
    ],
    "answer": 0,
    "w": "der Zählerstand",
    "explain": "der Zählerstand = die abgelesene Zahl für den Strom."
   },
   {
    "type": "choice",
    "audio": "der Notdienst",
    "q": "🔊 Hör zu – was bedeutet das Wort?",
    "options": [
     "Termin am Vormittag in der Woche",
     "Hilfe am Abend und am Wochenende",
     "Hilfe nur für alte Kunden der Firma",
     "Besuch einmal im Jahr zum Prüfen"
    ],
    "answer": 1,
    "w": "der Notdienst",
    "explain": "der Notdienst = Hilfe am Abend und am Wochenende."
   },
   {
    "type": "choice",
    "audio": "tropfen",
    "q": "🔊 Hör zu – was bedeutet das Wort?",
    "options": [
     "Wasser läuft stark aus dem Rohr",
     "Wasser bleibt in dem Rohr stehen",
     "Wasser fällt langsam einzeln herunter",
     "Wasser wird in der Leitung kalt"
    ],
    "answer": 2,
    "w": "tropfen",
    "explain": "tropfen = Wasser fällt langsam einzeln herunter."
   },
   {
    "type": "choice",
    "audio": "der Anschluss",
    "q": "🔊 Hör zu – was bedeutet das Wort?",
    "options": [
     "das Ende von der Leitung",
     "die Rechnung für die Arbeit",
     "der Kasten mit den Sicherungen",
     "die Stelle für die Verbindung"
    ],
    "answer": 3,
    "w": "der Anschluss",
    "explain": "der Anschluss = die Stelle für die Verbindung."
   }
  ]
 },
 {
  "id": "erziehung",
  "title": "Arbeit mit Kindern",
  "level": "B1",
  "emoji": "🎧",
  "words": [
   {
    "de": "die Eingewöhnung",
    "info": "die ersten Tage ohne die Eltern",
    "emoji": "🚼"
   },
   {
    "de": "der Tagesablauf",
    "info": "was wann am Tag passiert",
    "emoji": "⏰"
   },
   {
    "de": "das Elterngespräch",
    "info": "das Treffen mit Mutter oder Vater",
    "emoji": "👨‍👩‍👧"
   },
   {
    "de": "die Beobachtung",
    "info": "genau hinschauen und alles aufschreiben",
    "emoji": "👀"
   },
   {
    "de": "die Aufsichtspflicht",
    "info": "du musst auf die Kinder achten",
    "emoji": "👁️"
   },
   {
    "de": "der Ausflug",
    "info": "gemeinsam einen Tag draußen verbringen",
    "emoji": "🚌"
   },
   {
    "de": "der Entwicklungsstand",
    "info": "was ein Kind schon kann",
    "emoji": "📈"
   },
   {
    "de": "der Streit",
    "info": "zwei Kinder wollen dasselbe haben",
    "emoji": "😠"
   },
   {
    "de": "die Abholzeit",
    "info": "dann werden die Kinder geholt",
    "emoji": "🕓"
   },
   {
    "de": "der Morgenkreis",
    "info": "am Anfang sitzen alle zusammen",
    "emoji": "🎵"
   },
   {
    "de": "die Ruhezeit",
    "info": "mittags wird es ganz leise",
    "emoji": "😴"
   },
   {
    "de": "die Trotzphase",
    "info": "das Kind sagt zu allem nein",
    "emoji": "😤"
   },
   {
    "de": "die Abholberechtigung",
    "info": "wer das Kind holen darf",
    "emoji": "✅"
   },
   {
    "de": "wickeln",
    "info": "die nasse Hose frisch machen",
    "emoji": "🧷"
   },
   {
    "de": "die Einschulung",
    "info": "der erste Tag in der Schule",
    "emoji": "🎒"
   },
   {
    "de": "der Elternabend",
    "info": "abends kommen alle Eltern zusammen",
    "emoji": "🌙"
   }
  ],
  "exercises": [
   {
    "type": "listen",
    "label": "📢 Durchsage in der Schule",
    "audioUrl": "https://d8j0ntlcm91z4.cloudfront.net/user_38tIQPWpEsaUmk18tYN8mskaaAF/hf_20260826_074253_749819ed-24f6-4a97-9ffd-392ba40ea8a7.mp3",
    "q": "Wo sollen die Kinder bis zur Abfahrt warten?",
    "options": [
     "In ihren Klassenräumen bei den Lehrerinnen",
     "Auf dem Schulhof vor dem Haupteingang",
     "Im Sekretariat neben dem Lehrerzimmer",
     "In der Turnhalle mit ihren Taschen"
    ],
    "answer": 0,
    "transcript": "Eine Durchsage für die dritten und vierten Klassen: Der Ausflug in den Tierpark findet statt, aber der Bus kommt später. Wir fahren erst um neun Uhr dreißig los. Bitte bleibt bis dahin mit euren Lehrerinnen in den Klassenräumen, nicht auf dem Schulhof. Wer sein Essen vergessen hat, meldet sich bitte im Sekretariat.",
    "explain": "Die Durchsage sagt klar: bis zur Abfahrt in den Klassenräumen bleiben, nicht auf dem Schulhof."
   },
   {
    "type": "listen",
    "label": "📞 Mailbox: Heute holt die Oma",
    "audioUrl": "https://d8j0ntlcm91z4.cloudfront.net/user_38tIQPWpEsaUmk18tYN8mskaaAF/hf_20260826_074253_fb91c194-1dd3-47cd-9c78-fb6f012e14a6.mp3",
    "q": "Was fehlt heute noch für die Oma?",
    "options": [
     "Die Unterschrift der Mutter auf der Liste",
     "Der Ausweis der Oma für den Ausflug",
     "Ein Anruf der Oma in der Gruppe",
     "Die Erlaubnis der Leitung für die Woche"
    ],
    "answer": 0,
    "transcript": "Guten Morgen, hier spricht Frau Adamu, die Mutter von Nuray aus der Bärengruppe. Nuray wird heute nicht von mir abgeholt, sondern von ihrer Oma. Ich weiß, die Oma steht noch nicht auf der Liste. Ich komme morgen früh vorbei und unterschreibe das. Heute schicke ich Ihnen den Zettel als Foto. Vielen Dank und bis morgen.",
    "explain": "Die Mutter sagt selbst, dass sie erst morgen unterschreibt, die Oma steht also noch nicht auf der Liste."
   },
   {
    "type": "listen",
    "label": "🚪 An der Tür: Die Eingewöhnung",
    "audioUrl": "https://d8j0ntlcm91z4.cloudfront.net/user_38tIQPWpEsaUmk18tYN8mskaaAF/hf_20260826_074253_eb73153c-b86a-48f7-abce-515b4330957f.mp3",
    "q": "Was macht der Vater morgen anders?",
    "options": [
     "Er verlässt den Raum für kurze Zeit",
     "Er bringt Lasse eine halbe Stunde später",
     "Er bleibt den ganzen Vormittag im Raum",
     "Er holt Lasse schon vor dem Mittagessen"
    ],
    "answer": 0,
    "transcript": "Guten Morgen, Herr Reith. Wie war die Nacht? — Unruhig, Lasse hat viel geweint. — Das gehört dazu. Heute bleiben Sie noch die ganze Zeit im Raum, ja? — Und morgen? — Morgen gehen Sie nach einer halben Stunde kurz raus, aber Sie bleiben im Haus. Wenn er weint, holen wir Sie sofort. — Gut, das beruhigt mich.",
    "explain": "Die Erzieherin sagt, dass er morgen nach einer halben Stunde kurz hinausgeht und im Haus bleibt."
   },
   {
    "type": "listen",
    "label": "☕ In der Pause: Streit um den Bagger",
    "audioUrl": "https://d8j0ntlcm91z4.cloudfront.net/user_38tIQPWpEsaUmk18tYN8mskaaAF/hf_20260826_074252_e7ce9eee-28b2-4585-a999-31eb9aadc46a.mp3",
    "q": "Wie endete der Streit um den Bagger?",
    "options": [
     "Die Kinder haben ihn allein gelöst",
     "Die Erzieherin hat die beiden getrennt",
     "Ein anderes Kind hat den Bagger geholt",
     "Beide sind weinend zur Erzieherin gelaufen"
    ],
    "answer": 0,
    "transcript": "Hast du gesehen, was heute beim Bauteppich war? — Ja, Mira und Jon haben sich um denselben Bagger gestritten. — Und dann? — Ich habe nichts gesagt, nur zugeschaut. Nach zwei Minuten haben sie es selbst geregelt. — Schreib das bitte in die Beobachtung. So etwas zeigt viel mehr als jeder Bogen. — Mache ich noch vor dem Elterngespräch.",
    "explain": "Die Erzieherin hat nur zugeschaut, und die Kinder haben den Streit nach kurzer Zeit selbst geregelt."
   },
   {
    "type": "choice",
    "audio": "die Eingewöhnung",
    "q": "🔊 Hör zu – was bedeutet das Wort?",
    "options": [
     "die ersten Tage ohne die Eltern",
     "die ersten Wochen in der Schule",
     "die letzten Tage vor den Ferien",
     "die ersten Stunden am Morgen"
    ],
    "answer": 0,
    "w": "die Eingewöhnung",
    "explain": "die Eingewöhnung = die ersten Tage ohne die Eltern."
   },
   {
    "type": "choice",
    "audio": "der Tagesablauf",
    "q": "🔊 Hör zu – was bedeutet das Wort?",
    "options": [
     "was die Kinder essen dürfen",
     "was wann am Tag passiert",
     "wer heute welche Gruppe hat",
     "wann die Eltern kommen dürfen"
    ],
    "answer": 1,
    "w": "der Tagesablauf",
    "explain": "der Tagesablauf = was wann am Tag passiert."
   },
   {
    "type": "choice",
    "audio": "das Elterngespräch",
    "q": "🔊 Hör zu – was bedeutet das Wort?",
    "options": [
     "das Treffen mit der ganzen Gruppe",
     "das Gespräch unter den Erzieherinnen",
     "das Treffen mit Mutter oder Vater",
     "das Gespräch mit dem Kind allein"
    ],
    "answer": 2,
    "w": "das Elterngespräch",
    "explain": "das Elterngespräch = das Treffen mit Mutter oder Vater."
   },
   {
    "type": "choice",
    "audio": "die Beobachtung",
    "q": "🔊 Hör zu – was bedeutet das Wort?",
    "options": [
     "laut rufen und schnell dazwischengehen",
     "die Kinder nach allem genau fragen",
     "den Eltern alles ganz genau erzählen",
     "genau hinschauen und alles aufschreiben"
    ],
    "answer": 3,
    "w": "die Beobachtung",
    "explain": "die Beobachtung = genau hinschauen und alles aufschreiben."
   },
   {
    "type": "choice",
    "audio": "die Aufsichtspflicht",
    "q": "🔊 Hör zu – was bedeutet das Wort?",
    "options": [
     "du musst auf die Kinder achten",
     "du musst alles im Heft aufschreiben",
     "du musst mit den Eltern sprechen",
     "du musst die Räume sauber halten"
    ],
    "answer": 0,
    "w": "die Aufsichtspflicht",
    "explain": "die Aufsichtspflicht = du musst auf die Kinder achten."
   },
   {
    "type": "choice",
    "audio": "der Ausflug",
    "q": "🔊 Hör zu – was bedeutet das Wort?",
    "options": [
     "gemeinsam im Garten der Kita spielen",
     "gemeinsam einen Tag draußen verbringen",
     "gemeinsam im Kreis ein Lied singen",
     "gemeinsam am Tisch zu Mittag essen"
    ],
    "answer": 1,
    "w": "der Ausflug",
    "explain": "der Ausflug = gemeinsam einen Tag draußen verbringen."
   },
   {
    "type": "choice",
    "audio": "der Entwicklungsstand",
    "q": "🔊 Hör zu – was bedeutet das Wort?",
    "options": [
     "wie groß ein Kind ist",
     "wie alt ein Kind wird",
     "was ein Kind schon kann",
     "was ein Kind gern isst"
    ],
    "answer": 2,
    "w": "der Entwicklungsstand",
    "explain": "der Entwicklungsstand = was ein Kind schon kann."
   },
   {
    "type": "choice",
    "audio": "der Streit",
    "q": "🔊 Hör zu – was bedeutet das Wort?",
    "options": [
     "zwei Kinder spielen gern zusammen",
     "zwei Kinder gehen in eine Gruppe",
     "zwei Kinder schlafen im selben Raum",
     "zwei Kinder wollen dasselbe haben"
    ],
    "answer": 3,
    "w": "der Streit",
    "explain": "der Streit = zwei Kinder wollen dasselbe haben."
   },
   {
    "type": "choice",
    "audio": "die Abholzeit",
    "q": "🔊 Hör zu – was bedeutet das Wort?",
    "options": [
     "dann werden die Kinder geholt",
     "dann werden die Kinder gebracht",
     "dann schlafen alle Kinder",
     "dann gibt es warmes Essen"
    ],
    "answer": 0,
    "w": "die Abholzeit",
    "explain": "die Abholzeit = dann werden die Kinder geholt."
   },
   {
    "type": "choice",
    "audio": "der Morgenkreis",
    "q": "🔊 Hör zu – was bedeutet das Wort?",
    "options": [
     "am Morgen wird draußen gespielt",
     "am Anfang sitzen alle zusammen",
     "am Morgen kommen die Eltern mit",
     "am Mittag ruhen alle Kinder"
    ],
    "answer": 1,
    "w": "der Morgenkreis",
    "explain": "der Morgenkreis = am Anfang sitzen alle zusammen."
   },
   {
    "type": "choice",
    "audio": "die Ruhezeit",
    "q": "🔊 Hör zu – was bedeutet das Wort?",
    "options": [
     "morgens wird laut gesungen",
     "nachmittags wird draußen gespielt",
     "mittags wird es ganz leise",
     "abends wird die Kita geputzt"
    ],
    "answer": 2,
    "w": "die Ruhezeit",
    "explain": "die Ruhezeit = mittags wird es ganz leise."
   },
   {
    "type": "choice",
    "audio": "die Trotzphase",
    "q": "🔊 Hör zu – was bedeutet das Wort?",
    "options": [
     "das Kind spricht noch sehr wenig",
     "das Kind weint nur beim Abschied",
     "das Kind will immer gern helfen",
     "das Kind sagt zu allem nein"
    ],
    "answer": 3,
    "w": "die Trotzphase",
    "explain": "die Trotzphase = das Kind sagt zu allem nein."
   },
   {
    "type": "choice",
    "audio": "die Abholberechtigung",
    "q": "🔊 Hör zu – was bedeutet das Wort?",
    "options": [
     "wer das Kind holen darf",
     "wer das Kind bringen muss",
     "wann das Kind geholt wird",
     "wo das Kind gewickelt wird"
    ],
    "answer": 0,
    "w": "die Abholberechtigung",
    "explain": "die Abholberechtigung = wer das Kind holen darf."
   },
   {
    "type": "choice",
    "audio": "wickeln",
    "q": "🔊 Hör zu – was bedeutet das Wort?",
    "options": [
     "die dicke Jacke richtig zumachen",
     "die nasse Hose frisch machen",
     "die Hände vor dem Essen waschen",
     "die Schuhe im Flur ausziehen"
    ],
    "answer": 1,
    "w": "wickeln",
    "explain": "wickeln = die nasse Hose frisch machen."
   },
   {
    "type": "choice",
    "audio": "die Einschulung",
    "q": "🔊 Hör zu – was bedeutet das Wort?",
    "options": [
     "der letzte Tag in der Kita",
     "der erste Tag nach den Ferien",
     "der erste Tag in der Schule",
     "der Tag mit dem großen Ausflug"
    ],
    "answer": 2,
    "w": "die Einschulung",
    "explain": "die Einschulung = der erste Tag in der Schule."
   },
   {
    "type": "choice",
    "audio": "der Elternabend",
    "q": "🔊 Hör zu – was bedeutet das Wort?",
    "options": [
     "abends bleibt ein Kind länger da",
     "abends räumen die Erzieherinnen auf",
     "abends wird die Gruppe geputzt",
     "abends kommen alle Eltern zusammen"
    ],
    "answer": 3,
    "w": "der Elternabend",
    "explain": "der Elternabend = abends kommen alle Eltern zusammen."
   }
  ]
 },
 {
  "id": "fahren",
  "title": "Unterwegs auf Tour",
  "level": "B1",
  "emoji": "🎧",
  "words": [
   {
    "de": "die Tour",
    "info": "alle Stopps von heute zusammen",
    "emoji": "🗺️"
   },
   {
    "de": "die Lenkzeit",
    "info": "die Stunden hinter dem Steuer",
    "emoji": "⏱️"
   },
   {
    "de": "der Fahrtenschreiber",
    "info": "das Gerät merkt sich die Zeiten",
    "emoji": "📈"
   },
   {
    "de": "die Ruhezeit",
    "info": "frei bis zur nächsten Tour",
    "emoji": "🛏️"
   },
   {
    "de": "die Ladungssicherung",
    "info": "damit nichts im Wagen verrutscht",
    "emoji": "🪢"
   },
   {
    "de": "der Spanngurt",
    "info": "damit hält man die Ware fest",
    "emoji": "🔗"
   },
   {
    "de": "die Palette",
    "info": "Holzunterlage für schwere Ware",
    "emoji": "🧱"
   },
   {
    "de": "der Lieferschein",
    "info": "das Papier gehört zu der Ware",
    "emoji": "📄"
   },
   {
    "de": "die Entladestelle",
    "info": "dort kommt die Ware vom Wagen",
    "emoji": "🏭"
   },
   {
    "de": "die Rampe",
    "info": "dort steht der Wagen zum Abladen",
    "emoji": "🛗"
   },
   {
    "de": "der Empfänger",
    "info": "er nimmt die Ware an",
    "emoji": "🙋"
   },
   {
    "de": "quittieren",
    "info": "mit dem Namen den Empfang bestätigen",
    "emoji": "✍️"
   },
   {
    "de": "das Zeitfenster",
    "info": "nur dann darf man abladen",
    "emoji": "⏰"
   },
   {
    "de": "die Umleitung",
    "info": "der andere Weg um die Baustelle",
    "emoji": "↩️"
   },
   {
    "de": "der Stau",
    "info": "viele Autos stehen dicht hintereinander",
    "emoji": "🚗"
   },
   {
    "de": "die Spedition",
    "info": "die Firma fährt Ware für andere",
    "emoji": "🚚"
   }
  ],
  "exercises": [
   {
    "type": "listen",
    "label": "📢 Durchsage auf dem Hof",
    "audioUrl": "https://d8j0ntlcm91z4.cloudfront.net/user_38tIQPWpEsaUmk18tYN8mskaaAF/hf_20260826_074509_ba6354b5-3e8c-49fd-9468-79d74d8c32d0.mp3",
    "q": "Wohin sollen die Fahrer mit ihren Paletten?",
    "options": [
     "Zur Rampe sieben hinten am Zaun",
     "Zu den Rampen drei und vier",
     "Zum Tor vorne bei dem Hofmeister",
     "Zur Warenannahme neben der Halle"
    ],
    "answer": 0,
    "transcript": "Achtung, eine Durchsage für alle Fahrer auf dem Hof. Die Rampen drei und vier sind heute gesperrt, dort wird das Tor repariert. Fahrt bitte mit euren Paletten zur Rampe sieben hinten am Zaun. Wer ohne Lieferschein kommt, wird nicht entladen. Und denkt daran: Der Motor bleibt an der Rampe aus, sonst gibt es Ärger mit dem Hofmeister.",
    "explain": "In der Durchsage heißt es, die Rampen drei und vier sind gesperrt, alle fahren deshalb zur Rampe sieben."
   },
   {
    "type": "listen",
    "label": "📞 Mailbox: Die Tour ändert sich",
    "audioUrl": "https://d8j0ntlcm91z4.cloudfront.net/user_38tIQPWpEsaUmk18tYN8mskaaAF/hf_20260826_074509_6c61aeec-52ca-48f1-baff-c34f19e9cf49.mp3",
    "q": "Warum fährt er zuerst nach Gera?",
    "options": [
     "In Erfurt kann er erst später entladen",
     "In Gera schließt die Rampe schon mittags",
     "Seine Lenkzeit reicht für Erfurt nicht",
     "Auf dem Weg nach Erfurt ist Stau"
    ],
    "answer": 0,
    "transcript": "Hallo Marek, hier ist Kaya aus der Disposition. Deine Tour für morgen ändert sich. Der Kunde in Erfurt hat sein Zeitfenster verschoben, du kannst erst ab elf Uhr entladen. Fahr deshalb bitte zuerst nach Gera und dann weiter. Deine Lenkzeit reicht knapp, mach die Pause gleich nach der ersten Entladestelle. Ruf mich zurück, wenn das nicht klappt.",
    "explain": "Der Kunde in Erfurt hat das Zeitfenster nach hinten verschoben, deshalb kommt Gera zuerst."
   },
   {
    "type": "listen",
    "label": "🪟 An der Warenannahme: kein Platz",
    "audioUrl": "https://d8j0ntlcm91z4.cloudfront.net/user_38tIQPWpEsaUmk18tYN8mskaaAF/hf_20260826_074509_c5ae8249-88cb-4ca9-bab2-7b8477d162f7.mp3",
    "q": "Warum ist der Fahrer zu spät gekommen?",
    "options": [
     "Er hat auf der Fahrt im Stau gestanden",
     "Er hat sich für den falschen Tag angemeldet",
     "Er hat vorher eine lange Pause gemacht",
     "Er hat die Entladestelle nicht gleich gefunden"
    ],
    "answer": 0,
    "transcript": "Guten Tag, ich habe zwölf Paletten für Sie. — Haben Sie sich angemeldet? — Ja, für halb neun, ich stand im Stau. — Dann müssen Sie warten, der Platz ist gerade weg. — Wie lange denn? — Eine gute Stunde. — Das geht nicht, meine Lenkzeit läuft. — Dann geben Sie mir den Lieferschein, ich frage vorne nach.",
    "explain": "Er sagt selbst, er war für halb neun angemeldet und hat auf dem Weg im Stau gestanden."
   },
   {
    "type": "listen",
    "label": "☕ Privat: Der Empfänger war nicht da",
    "audioUrl": "https://d8j0ntlcm91z4.cloudfront.net/user_38tIQPWpEsaUmk18tYN8mskaaAF/hf_20260826_074509_5c22780e-097d-4304-8023-941f37db8546.mp3",
    "q": "Warum konnte er das Paket nicht beim Nachbarn lassen?",
    "options": [
     "Der Nachbar wollte nicht unterschreiben",
     "Der Nachbar war selbst nicht zu Hause",
     "Der Empfänger hatte das nicht erlaubt",
     "Das Paket war zu groß für den Flur"
    ],
    "answer": 0,
    "transcript": "Und, wie war deine Tour? — Frag nicht. Beim letzten Paket war der Empfänger nicht da. — Beim Nachbarn abgegeben? — Der wollte nicht quittieren. Also habe ich alles wieder mitgenommen. — Und der Fahrtenschreiber? — Der lief schon rot, ich musste vor dem Depot noch eine Pause machen. Um acht war ich zu Hause.",
    "explain": "Der Nachbar wollte nicht quittieren, also nicht unterschreiben, deshalb blieb das Paket im Wagen."
   },
   {
    "type": "choice",
    "audio": "die Tour",
    "q": "🔊 Hör zu – was bedeutet das Wort?",
    "options": [
     "alle Stopps von heute zusammen",
     "alle Pausen von heute zusammen",
     "alle Kunden aus dem Bezirk",
     "alle Wagen aus der Halle"
    ],
    "answer": 0,
    "w": "die Tour",
    "explain": "die Tour = alle Stopps von heute zusammen."
   },
   {
    "type": "choice",
    "audio": "die Lenkzeit",
    "q": "🔊 Hör zu – was bedeutet das Wort?",
    "options": [
     "die Stunden auf dem Hof",
     "die Stunden hinter dem Steuer",
     "die Zeit für die Pausen",
     "die Zeit beim Abladen"
    ],
    "answer": 1,
    "w": "die Lenkzeit",
    "explain": "die Lenkzeit = die Stunden hinter dem Steuer."
   },
   {
    "type": "choice",
    "audio": "der Fahrtenschreiber",
    "q": "🔊 Hör zu – was bedeutet das Wort?",
    "options": [
     "das Heft mit allen Adressen",
     "der Zettel mit den Kilometern",
     "das Gerät merkt sich die Zeiten",
     "das Gerät zeigt den Weg an"
    ],
    "answer": 2,
    "w": "der Fahrtenschreiber",
    "explain": "der Fahrtenschreiber = das Gerät merkt sich die Zeiten."
   },
   {
    "type": "choice",
    "audio": "die Ruhezeit",
    "q": "🔊 Hör zu – was bedeutet das Wort?",
    "options": [
     "warten vor der nächsten Rampe",
     "fahren ohne Ladung im Wagen",
     "stehen vor dem ersten Kunden",
     "frei bis zur nächsten Tour"
    ],
    "answer": 3,
    "w": "die Ruhezeit",
    "explain": "die Ruhezeit = frei bis zur nächsten Tour."
   },
   {
    "type": "choice",
    "audio": "die Ladungssicherung",
    "q": "🔊 Hör zu – was bedeutet das Wort?",
    "options": [
     "damit nichts im Wagen verrutscht",
     "damit nichts im Wagen kalt wird",
     "damit niemand den Wagen aufmacht",
     "damit man die Ware schnell findet"
    ],
    "answer": 0,
    "w": "die Ladungssicherung",
    "explain": "die Ladungssicherung = damit nichts im Wagen verrutscht."
   },
   {
    "type": "choice",
    "audio": "der Spanngurt",
    "q": "🔊 Hör zu – was bedeutet das Wort?",
    "options": [
     "damit zieht man die Palette",
     "damit hält man die Ware fest",
     "damit macht man den Wagen zu",
     "damit misst man die Höhe"
    ],
    "answer": 1,
    "w": "der Spanngurt",
    "explain": "der Spanngurt = damit hält man die Ware fest."
   },
   {
    "type": "choice",
    "audio": "die Palette",
    "q": "🔊 Hör zu – was bedeutet das Wort?",
    "options": [
     "Wagen mit Rädern für Kisten",
     "Kiste aus Pappe für Pakete",
     "Holzunterlage für schwere Ware",
     "Regal im Lager für Kartons"
    ],
    "answer": 2,
    "w": "die Palette",
    "explain": "die Palette = Holzunterlage für schwere Ware."
   },
   {
    "type": "choice",
    "audio": "der Lieferschein",
    "q": "🔊 Hör zu – was bedeutet das Wort?",
    "options": [
     "das Papier gilt für den ganzen Tag",
     "der Zettel mit dem Weg zum Kunden",
     "die Rechnung für den Empfänger",
     "das Papier gehört zu der Ware"
    ],
    "answer": 3,
    "w": "der Lieferschein",
    "explain": "der Lieferschein = das Papier gehört zu der Ware."
   },
   {
    "type": "choice",
    "audio": "die Entladestelle",
    "q": "🔊 Hör zu – was bedeutet das Wort?",
    "options": [
     "dort kommt die Ware vom Wagen",
     "dort kommt die Ware in den Wagen",
     "dort steht der Wagen über Nacht",
     "dort holt man die Papiere ab"
    ],
    "answer": 0,
    "w": "die Entladestelle",
    "explain": "die Entladestelle = dort kommt die Ware vom Wagen."
   },
   {
    "type": "choice",
    "audio": "die Rampe",
    "q": "🔊 Hör zu – was bedeutet das Wort?",
    "options": [
     "dort wartet man auf den Empfänger",
     "dort steht der Wagen zum Abladen",
     "dort werden die Papiere gestempelt",
     "dort tankt man vor der Tour"
    ],
    "answer": 1,
    "w": "die Rampe",
    "explain": "die Rampe = dort steht der Wagen zum Abladen."
   },
   {
    "type": "choice",
    "audio": "der Empfänger",
    "q": "🔊 Hör zu – was bedeutet das Wort?",
    "options": [
     "er bringt die Ware weg",
     "er schreibt die Papiere",
     "er nimmt die Ware an",
     "er lädt den Wagen voll"
    ],
    "answer": 2,
    "w": "der Empfänger",
    "explain": "der Empfänger = er nimmt die Ware an."
   },
   {
    "type": "choice",
    "audio": "quittieren",
    "q": "🔊 Hör zu – was bedeutet das Wort?",
    "options": [
     "mit dem Namen die Ware bestellen",
     "mit dem Stempel die Fahrt beenden",
     "mit dem Anruf den Kunden warnen",
     "mit dem Namen den Empfang bestätigen"
    ],
    "answer": 3,
    "w": "quittieren",
    "explain": "quittieren = mit dem Namen den Empfang bestätigen."
   },
   {
    "type": "choice",
    "audio": "das Zeitfenster",
    "q": "🔊 Hör zu – was bedeutet das Wort?",
    "options": [
     "nur dann darf man abladen",
     "nur dort darf man abladen",
     "nur er darf beim Abladen helfen",
     "nur so lange dauert das Abladen"
    ],
    "answer": 0,
    "w": "das Zeitfenster",
    "explain": "das Zeitfenster = nur dann darf man abladen."
   },
   {
    "type": "choice",
    "audio": "die Umleitung",
    "q": "🔊 Hör zu – was bedeutet das Wort?",
    "options": [
     "der kurze Weg durch die Stadt",
     "der andere Weg um die Baustelle",
     "die Sperrung vor dem langen Tunnel",
     "die Straße nur für schwere Wagen"
    ],
    "answer": 1,
    "w": "die Umleitung",
    "explain": "die Umleitung = der andere Weg um die Baustelle."
   },
   {
    "type": "choice",
    "audio": "der Stau",
    "q": "🔊 Hör zu – was bedeutet das Wort?",
    "options": [
     "viele Autos fahren dicht nebeneinander",
     "viele Wagen stehen auf dem Hof",
     "viele Autos stehen dicht hintereinander",
     "viele Leute warten an der Rampe"
    ],
    "answer": 2,
    "w": "der Stau",
    "explain": "der Stau = viele Autos stehen dicht hintereinander."
   },
   {
    "type": "choice",
    "audio": "die Spedition",
    "q": "🔊 Hör zu – was bedeutet das Wort?",
    "options": [
     "die Firma baut Wagen für andere",
     "das Lager gehört einem großen Kunden",
     "das Büro plant nur die Pausen",
     "die Firma fährt Ware für andere"
    ],
    "answer": 3,
    "w": "die Spedition",
    "explain": "die Spedition = die Firma fährt Ware für andere."
   }
  ]
 },
 {
  "id": "familie",
  "title": "Kita und Kinder",
  "level": "A2",
  "emoji": "🎧",
  "words": [
   {
    "de": "die Kita",
    "info": "dort sind kleine Kinder tagsüber",
    "emoji": "🏫"
   },
   {
    "de": "die Eingewöhnung",
    "info": "die erste Zeit mit Mama dabei",
    "emoji": "🌱"
   },
   {
    "de": "die Erzieherin",
    "info": "sie kümmert sich um die Gruppe",
    "emoji": "👩‍🏫"
   },
   {
    "de": "der Elternabend",
    "info": "abends reden alle Eltern zusammen",
    "emoji": "🗣️"
   },
   {
    "de": "die Abholzeit",
    "info": "dann musst du da sein",
    "emoji": "⏰"
   },
   {
    "de": "die Abholvollmacht",
    "info": "damit darf die Oma kommen",
    "emoji": "✍️"
   },
   {
    "de": "krankmelden",
    "info": "anrufen, weil dein Kind Fieber hat",
    "emoji": "🤒"
   },
   {
    "de": "ansteckend",
    "info": "die anderen werden auch krank",
    "emoji": "🦠"
   },
   {
    "de": "die Notbetreuung",
    "info": "nur für ganz wenige Kinder",
    "emoji": "🆘"
   },
   {
    "de": "die Schließzeit",
    "info": "drei Wochen im Sommer zu",
    "emoji": "🔒"
   },
   {
    "de": "die Wechselsachen",
    "info": "trockene Hose für den Notfall",
    "emoji": "👖"
   },
   {
    "de": "die Brotdose",
    "info": "darin ist das Essen fürs Kind",
    "emoji": "🥪"
   },
   {
    "de": "das Geschwisterkind",
    "info": "der Bruder oder die Schwester",
    "emoji": "👧"
   },
   {
    "de": "die Großeltern",
    "info": "die Eltern von deinen Eltern",
    "emoji": "👵"
   },
   {
    "de": "einspringen",
    "info": "schnell für jemanden da sein",
    "emoji": "🙋"
   },
   {
    "de": "die Vorsorgeuntersuchung",
    "info": "der Arzt schaut, ob alles wächst",
    "emoji": "🩺"
   }
  ],
  "exercises": [
   {
    "type": "listen",
    "label": "📢 Ansage beim Elternabend",
    "audioUrl": "https://d8j0ntlcm91z4.cloudfront.net/user_38tIQPWpEsaUmk18tYN8mskaaAF/hf_20260826_062316_2bcb796f-c486-4d22-82fc-4a96094e19c0.mp3",
    "q": "Was passiert ohne die Abholvollmacht?",
    "options": [
     "Das Kind bleibt bis zum Abend da",
     "Die Großeltern dürfen das Kind nicht holen",
     "Die Eltern müssen den Zettel neu holen",
     "Das Kind darf erst am Freitag kommen"
    ],
    "answer": 1,
    "transcript": "Ich begrüße Sie herzlich zum Elternabend. Zwei Sachen vorweg: In den Sommerferien ist die Kita drei Wochen zu, die Schließzeit steht am schwarzen Brett. Und wir brauchen von jedem eine Abholvollmacht, wenn Oma oder Opa das Kind holen soll. Bitte bis Freitag abgeben. Ohne den Zettel dürfen wir das Kind niemandem mitgeben, das tut uns leid.",
    "explain": "Ohne den unterschriebenen Zettel gibt die Kita das Kind niemandem mit, auch den Großeltern nicht."
   },
   {
    "type": "listen",
    "label": "📞 Mailbox: Mia hat Fieber",
    "audioUrl": "https://d8j0ntlcm91z4.cloudfront.net/user_38tIQPWpEsaUmk18tYN8mskaaAF/hf_20260826_062316_745216fd-86a2-4bc3-80e6-24106efbf0c1.mp3",
    "q": "Wann darf Mia wieder in die Kita?",
    "options": [
     "Wenn der Arzt einen Zettel schreibt",
     "Wenn sie einen Tag ohne Fieber war",
     "Wenn die Eltern am Morgen anrufen",
     "Wenn sie zwei Tage zu Hause war"
    ],
    "answer": 1,
    "transcript": "Guten Tag, Frau Yilmaz, hier ist die Kita Sonnenblume, Gruppe Marienkäfer. Mia hat Fieber und tut sich schwer. Können Sie bitte vorher kommen, nicht erst zur Abholzeit? Wir haben es auch bei Ihrem Mann versucht. Und noch etwas: Mia darf erst wiederkommen, wenn sie einen ganzen Tag ohne Fieber war. Ein Zettel vom Arzt ist nicht nötig. Danke schön.",
    "explain": "Sie braucht einen ganzen Tag ohne Fieber, einen Zettel vom Arzt verlangt die Kita ausdrücklich nicht."
   },
   {
    "type": "listen",
    "label": "🩺 Am Tresen: Termin beim Kinderarzt",
    "audioUrl": "https://d8j0ntlcm91z4.cloudfront.net/user_38tIQPWpEsaUmk18tYN8mskaaAF/hf_20260826_062317_30ba3f48-1cc3-4a39-b85b-1f9326ca5de8.mp3",
    "q": "Warum nimmt die Mutter den Dienstag nicht?",
    "options": [
     "Sie muss an diesem Tag arbeiten",
     "Ihr Sohn ist dafür noch zu klein",
     "Sie hat das gelbe Heft nicht dabei",
     "Am Dienstag ist die Praxis geschlossen"
    ],
    "answer": 0,
    "transcript": "Guten Tag, ich möchte einen Termin für die Vorsorgeuntersuchung. — Wie alt ist Ihr Sohn? — Fast ein Jahr. — Am Dienstag um neun Uhr wäre etwas frei. — Da arbeite ich. Geht es auch nachmittags? — Vorsorge machen wir nur vormittags. Donnerstag um halb elf? — Donnerstag habe ich frei, das passt. — Bringen Sie bitte das gelbe Heft mit, ohne das können wir nichts eintragen.",
    "explain": "Am Dienstag arbeitet sie, am Donnerstag hat sie frei — deshalb nimmt sie den zweiten Termin."
   },
   {
    "type": "listen",
    "label": "☕ Privat: Wer holt Emil ab?",
    "audioUrl": "https://d8j0ntlcm91z4.cloudfront.net/user_38tIQPWpEsaUmk18tYN8mskaaAF/hf_20260826_062316_0a1be477-4ad4-4ec2-8e06-c105f56e1ddb.mp3",
    "q": "Warum kann die Oma Emil nicht abholen?",
    "options": [
     "Sie ist morgen selbst nicht zu Hause",
     "Sie hat die Vollmacht nicht unterschrieben",
     "Sie kennt die neue Gruppe noch nicht",
     "Sie muss die große Schwester abholen"
    ],
    "answer": 1,
    "transcript": "Du, ich schaffe es morgen nicht bis vier. — Kann deine Mutter einspringen? — Sie hat den Zettel nicht unterschrieben, sie darf Emil noch nicht abholen. — Mist. Dann frag doch Sabine, ihre Tochter ist in derselben Gruppe. — Und die Große? — Die kommt allein nach Hause, sie hat ja den Schlüssel. Ich koche dann, wenn ich da bin.",
    "explain": "Ohne ihre Unterschrift auf dem Zettel darf die Kita das Kind nicht mitgeben."
   },
   {
    "type": "choice",
    "audio": "die Kita",
    "q": "🔊 Hör zu – was bedeutet das Wort?",
    "options": [
     "dort sind kleine Kinder tagsüber",
     "dort lernen große Kinder rechnen",
     "dort spielen Kinder am Wochenende",
     "dort arbeiten die Eltern zusammen"
    ],
    "answer": 0,
    "w": "die Kita",
    "explain": "die Kita = dort sind kleine Kinder tagsüber."
   },
   {
    "type": "choice",
    "audio": "die Eingewöhnung",
    "q": "🔊 Hör zu – was bedeutet das Wort?",
    "options": [
     "die letzte Woche vor der Schule",
     "die erste Zeit mit Mama dabei",
     "die kurze Pause nach dem Essen",
     "die Stunde vor dem Mittagsschlaf"
    ],
    "answer": 1,
    "w": "die Eingewöhnung",
    "explain": "die Eingewöhnung = die erste Zeit mit Mama dabei."
   },
   {
    "type": "choice",
    "audio": "die Erzieherin",
    "q": "🔊 Hör zu – was bedeutet das Wort?",
    "options": [
     "sie kocht das Essen für alle",
     "sie putzt die Räume am Abend",
     "sie kümmert sich um die Gruppe",
     "sie fährt die Kinder mit dem Bus"
    ],
    "answer": 2,
    "w": "die Erzieherin",
    "explain": "die Erzieherin = sie kümmert sich um die Gruppe."
   },
   {
    "type": "choice",
    "audio": "der Elternabend",
    "q": "🔊 Hör zu – was bedeutet das Wort?",
    "options": [
     "abends bleiben die Kinder länger",
     "abends feiern die Gruppen ein Fest",
     "abends putzen die Eltern die Räume",
     "abends reden alle Eltern zusammen"
    ],
    "answer": 3,
    "w": "der Elternabend",
    "explain": "der Elternabend = abends reden alle Eltern zusammen."
   },
   {
    "type": "choice",
    "audio": "die Abholzeit",
    "q": "🔊 Hör zu – was bedeutet das Wort?",
    "options": [
     "dann musst du da sein",
     "dann fängt der Vormittag an",
     "dann schlafen die Kleinen alle",
     "dann gibt es warmes Mittagessen"
    ],
    "answer": 0,
    "w": "die Abholzeit",
    "explain": "die Abholzeit = dann musst du da sein."
   },
   {
    "type": "choice",
    "audio": "die Abholvollmacht",
    "q": "🔊 Hör zu – was bedeutet das Wort?",
    "options": [
     "damit zahlst du weniger Beitrag",
     "damit darf die Oma kommen",
     "damit bekommt dein Kind Essen",
     "damit darf dein Kind fehlen"
    ],
    "answer": 1,
    "w": "die Abholvollmacht",
    "explain": "die Abholvollmacht = damit darf die Oma kommen."
   },
   {
    "type": "choice",
    "audio": "krankmelden",
    "q": "🔊 Hör zu – was bedeutet das Wort?",
    "options": [
     "anrufen, weil du später kommst",
     "hingehen, weil du etwas vergessen hast",
     "anrufen, weil dein Kind Fieber hat",
     "aufschreiben, was dein Kind isst"
    ],
    "answer": 2,
    "w": "krankmelden",
    "explain": "krankmelden = anrufen, weil dein Kind Fieber hat."
   },
   {
    "type": "choice",
    "audio": "ansteckend",
    "q": "🔊 Hör zu – was bedeutet das Wort?",
    "options": [
     "die Kleinen schlafen sehr schlecht",
     "die Nase läuft schon lange",
     "das Fieber kommt immer abends",
     "die anderen werden auch krank"
    ],
    "answer": 3,
    "w": "ansteckend",
    "explain": "ansteckend = die anderen werden auch krank."
   },
   {
    "type": "choice",
    "audio": "die Notbetreuung",
    "q": "🔊 Hör zu – was bedeutet das Wort?",
    "options": [
     "nur für ganz wenige Kinder",
     "nur am Abend nach sechs",
     "nur für die ganz Kleinen",
     "nur an einem Tag im Monat"
    ],
    "answer": 0,
    "w": "die Notbetreuung",
    "explain": "die Notbetreuung = nur für ganz wenige Kinder."
   },
   {
    "type": "choice",
    "audio": "die Schließzeit",
    "q": "🔊 Hör zu – was bedeutet das Wort?",
    "options": [
     "eine Stunde am Mittag ruhig",
     "drei Wochen im Sommer zu",
     "der letzte Tag vor dem Fest",
     "die halbe Stunde vor dem Essen"
    ],
    "answer": 1,
    "w": "die Schließzeit",
    "explain": "die Schließzeit = drei Wochen im Sommer zu."
   },
   {
    "type": "choice",
    "audio": "die Wechselsachen",
    "q": "🔊 Hör zu – was bedeutet das Wort?",
    "options": [
     "warme Jacke für den Winter",
     "feste Schuhe für den Ausflug",
     "trockene Hose für den Notfall",
     "saubere Decke für den Schlaf"
    ],
    "answer": 2,
    "w": "die Wechselsachen",
    "explain": "die Wechselsachen = trockene Hose für den Notfall."
   },
   {
    "type": "choice",
    "audio": "die Brotdose",
    "q": "🔊 Hör zu – was bedeutet das Wort?",
    "options": [
     "darin liegen die nassen Sachen",
     "darin steckt das kleine Spielzeug",
     "darin ist der Zettel der Kita",
     "darin ist das Essen fürs Kind"
    ],
    "answer": 3,
    "w": "die Brotdose",
    "explain": "die Brotdose = darin ist das Essen fürs Kind."
   },
   {
    "type": "choice",
    "audio": "das Geschwisterkind",
    "q": "🔊 Hör zu – was bedeutet das Wort?",
    "options": [
     "der Bruder oder die Schwester",
     "das Kind von den Nachbarn",
     "der beste Freund aus der Gruppe",
     "das Kind der neuen Erzieherin"
    ],
    "answer": 0,
    "w": "das Geschwisterkind",
    "explain": "das Geschwisterkind = der Bruder oder die Schwester."
   },
   {
    "type": "choice",
    "audio": "die Großeltern",
    "q": "🔊 Hör zu – was bedeutet das Wort?",
    "options": [
     "die Eltern von deinem Mann",
     "die Eltern von deinen Eltern",
     "die älteren Kinder der Familie",
     "die Eltern aus der großen Gruppe"
    ],
    "answer": 1,
    "w": "die Großeltern",
    "explain": "die Großeltern = die Eltern von deinen Eltern."
   },
   {
    "type": "choice",
    "audio": "einspringen",
    "q": "🔊 Hör zu – was bedeutet das Wort?",
    "options": [
     "früher von der Arbeit gehen",
     "jemanden um Hilfe bitten",
     "schnell für jemanden da sein",
     "ohne Termin einfach hingehen"
    ],
    "answer": 2,
    "w": "einspringen",
    "explain": "einspringen = schnell für jemanden da sein."
   },
   {
    "type": "choice",
    "audio": "die Vorsorgeuntersuchung",
    "q": "🔊 Hör zu – was bedeutet das Wort?",
    "options": [
     "der Arzt gibt etwas gegen Husten",
     "der Arzt kommt zu euch nach Hause",
     "der Arzt schreibt das Kind gesund",
     "der Arzt schaut, ob alles wächst"
    ],
    "answer": 3,
    "w": "die Vorsorgeuntersuchung",
    "explain": "die Vorsorgeuntersuchung = der Arzt schaut, ob alles wächst."
   }
  ]
 },
 {
  "id": "feste",
  "title": "Einladung und Fest",
  "level": "A2",
  "emoji": "🎧",
  "words": [
   {
    "de": "die Einladung",
    "info": "jemand möchte dich bei sich haben",
    "emoji": "💌"
   },
   {
    "de": "zusagen",
    "info": "sagen, dass du kommst",
    "emoji": "👍"
   },
   {
    "de": "absagen",
    "info": "sagen, dass du nicht kommst",
    "emoji": "🙅"
   },
   {
    "de": "Bescheid geben",
    "info": "kurz eine Antwort schicken",
    "emoji": "📩"
   },
   {
    "de": "der Anlass",
    "info": "der Grund für die Feier",
    "emoji": "🎯"
   },
   {
    "de": "der Gastgeber",
    "info": "bei ihm findet die Feier statt",
    "emoji": "🏠"
   },
   {
    "de": "das Gastgeschenk",
    "info": "Blumen oder Wein zum Dank",
    "emoji": "🎁"
   },
   {
    "de": "mitbringen",
    "info": "etwas für alle dabeihaben",
    "emoji": "🧁"
   },
   {
    "de": "der Nachtisch",
    "info": "das Süße nach dem Essen",
    "emoji": "🍰"
   },
   {
    "de": "das Grillfest",
    "info": "im Garten mit Würstchen und Feuer",
    "emoji": "🔥"
   },
   {
    "de": "anstoßen",
    "info": "die Gläser kurz zusammenhalten",
    "emoji": "🥂"
   },
   {
    "de": "reinfeiern",
    "info": "schon am Abend vorher feiern",
    "emoji": "🕛"
   },
   {
    "de": "die Hochzeit",
    "info": "zwei Menschen sagen laut Ja",
    "emoji": "💍"
   },
   {
    "de": "das Standesamt",
    "info": "dort unterschreiben die beiden zuerst",
    "emoji": "🏛️"
   },
   {
    "de": "der Umschlag",
    "info": "darin steckt Geld als Geschenk",
    "emoji": "✉️"
   },
   {
    "de": "festlich",
    "info": "schön angezogen für den Abend",
    "emoji": "👗"
   }
  ],
  "exercises": [
   {
    "type": "listen",
    "label": "📢 Ansage zum Sommerfest im Hof",
    "audioUrl": "https://d8j0ntlcm91z4.cloudfront.net/user_38tIQPWpEsaUmk18tYN8mskaaAF/hf_20260826_062638_4d569692-ed6c-4790-b81c-e565d84be10a.mp3",
    "q": "Was muss jeder Gast selbst mitbringen?",
    "options": [
     "Das Fleisch für den Grill",
     "Den Nachtisch für den Tisch",
     "Die Getränke für den Abend",
     "Den Salat für alle Gäste"
    ],
    "answer": 0,
    "transcript": "Liebe Nachbarinnen und Nachbarn, eine kurze Ansage zum Sommerfest. Der Grill ist ab vier Uhr an, das Fleisch bringt bitte jeder selbst mit. Salate und Nachtisch stehen im Hof auf dem großen Tisch. Getränke gibt es gegen eine kleine Spende in der Kasse daneben. Und wer eine Bank oder einen Stuhl übrig hat: bitte einfach mit runterbringen.",
    "explain": "Salate, Nachtisch und Getränke sind da — nur das Fleisch bringt jeder für sich selbst mit."
   },
   {
    "type": "listen",
    "label": "📞 Mailbox: Absage für Samstag",
    "audioUrl": "https://d8j0ntlcm91z4.cloudfront.net/user_38tIQPWpEsaUmk18tYN8mskaaAF/hf_20260826_062638_d9959547-6300-4aca-852d-d5fad4b10b6c.mp3",
    "q": "Unter welcher Bedingung kommt Nadja doch noch?",
    "options": [
     "Wenn ihre Tochter bis Samstag gesund ist",
     "Wenn die Freundin schon am Freitag feiert",
     "Wenn sie das Geschenk noch besorgen kann",
     "Wenn sie ihre Kinder mitbringen darf"
    ],
    "answer": 1,
    "transcript": "Hallo Kerstin, hier ist Nadja. Ich muss dir leider für Samstag absagen, meine Kleine hat Windpocken. Ich hätte so gern mitgefeiert. Das Geschenk liegt schon fertig bei mir, ich bringe es nächste Woche vorbei. Feiert ihr eigentlich schon am Freitagabend rein? Dann komme ich vielleicht kurz auf ein Glas, ohne die Kinder natürlich. Melde dich einfach.",
    "explain": "Am Samstag kann sie nicht — nur wenn schon am Freitagabend reingefeiert wird, schaut sie kurz vorbei."
   },
   {
    "type": "listen",
    "label": "🏛️ Am Schalter: Hochzeit im Mai",
    "audioUrl": "https://d8j0ntlcm91z4.cloudfront.net/user_38tIQPWpEsaUmk18tYN8mskaaAF/hf_20260826_062638_5c76b7ac-4547-4468-b4be-29e99f9f774b.mp3",
    "q": "Warum nehmen die beiden den kleinen Saal?",
    "options": [
     "Der große Saal kostet zusätzlich Geld",
     "Im großen Saal ist im Mai kein Platz",
     "Sie haben nur zehn Gäste eingeladen",
     "Der große Saal ist schon lange voll"
    ],
    "answer": 0,
    "transcript": "Guten Tag, wir möchten im Mai heiraten. — Dann melden Sie sich am besten bald an, der Mai ist schnell voll. — Was brauchen wir dafür? — Beide Ausweise und die Geburtsurkunden. — Und wie viele Gäste dürfen mit rein? — In den kleinen Saal passen zehn, in den großen dreißig. Der große kostet allerdings mehr. — Dann nehmen wir den kleinen.",
    "explain": "Beide Säle wären frei, aber der große kostet mehr — deshalb entscheiden sie sich für den kleinen."
   },
   {
    "type": "listen",
    "label": "☕ Privat: Kann ich etwas mitbringen?",
    "audioUrl": "https://d8j0ntlcm91z4.cloudfront.net/user_38tIQPWpEsaUmk18tYN8mskaaAF/hf_20260826_062638_776e0eb8-757e-4067-b82b-83cc399b0367.mp3",
    "q": "Was soll die Freundin am Ende mitbringen?",
    "options": [
     "Einen Nachtisch und ein Spielzeug",
     "Einen Salat und Geld im Umschlag",
     "Nur etwas Süßes für die Kinder",
     "Ein Fahrrad zusammen mit den anderen"
    ],
    "answer": 1,
    "transcript": "Sag mal, kann ich etwas mitbringen? — Nein, wirklich nicht, es ist alles da. — Einen Nachtisch vielleicht? — Wenn du unbedingt willst, dann einen Salat, Süßes haben wir genug. — Und was wünscht sich Jonas? — Bloß kein Spielzeug mehr. Steckt lieber ein paar Euro in einen Umschlag, wir sparen für sein Fahrrad.",
    "explain": "Süßes ist genug da, also ein Salat — und als Geschenk Geld im Umschlag fürs neue Fahrrad."
   },
   {
    "type": "choice",
    "audio": "die Einladung",
    "q": "🔊 Hör zu – was bedeutet das Wort?",
    "options": [
     "jemand möchte dich bei sich haben",
     "jemand sagt dir kurz ab",
     "jemand bringt dir etwas mit",
     "jemand bedankt sich für das Geschenk"
    ],
    "answer": 0,
    "w": "die Einladung",
    "explain": "die Einladung = jemand möchte dich bei sich haben."
   },
   {
    "type": "choice",
    "audio": "zusagen",
    "q": "🔊 Hör zu – was bedeutet das Wort?",
    "options": [
     "sagen, dass du später gehst",
     "sagen, dass du kommst",
     "sagen, dass du nichts isst",
     "sagen, dass du allein kommst"
    ],
    "answer": 1,
    "w": "zusagen",
    "explain": "zusagen = sagen, dass du kommst."
   },
   {
    "type": "choice",
    "audio": "absagen",
    "q": "🔊 Hör zu – was bedeutet das Wort?",
    "options": [
     "sagen, dass du nichts mitbringst",
     "sagen, dass du früher gehst",
     "sagen, dass du nicht kommst",
     "sagen, dass du kein Geschenk hast"
    ],
    "answer": 2,
    "w": "absagen",
    "explain": "absagen = sagen, dass du nicht kommst."
   },
   {
    "type": "choice",
    "audio": "Bescheid geben",
    "q": "🔊 Hör zu – was bedeutet das Wort?",
    "options": [
     "kurz vorbeikommen und gucken",
     "laut eine Rede halten",
     "leise mit jemandem reden",
     "kurz eine Antwort schicken"
    ],
    "answer": 3,
    "w": "Bescheid geben",
    "explain": "Bescheid geben = kurz eine Antwort schicken."
   },
   {
    "type": "choice",
    "audio": "der Anlass",
    "q": "🔊 Hör zu – was bedeutet das Wort?",
    "options": [
     "der Grund für die Feier",
     "der Ort für die Feier",
     "der Tag nach der Feier",
     "die Musik auf der Feier"
    ],
    "answer": 0,
    "w": "der Anlass",
    "explain": "der Anlass = der Grund für die Feier."
   },
   {
    "type": "choice",
    "audio": "der Gastgeber",
    "q": "🔊 Hör zu – was bedeutet das Wort?",
    "options": [
     "er kommt als Erster an",
     "bei ihm findet die Feier statt",
     "er bringt die Getränke mit",
     "er hält die Rede am Abend"
    ],
    "answer": 1,
    "w": "der Gastgeber",
    "explain": "der Gastgeber = bei ihm findet die Feier statt."
   },
   {
    "type": "choice",
    "audio": "das Gastgeschenk",
    "q": "🔊 Hör zu – was bedeutet das Wort?",
    "options": [
     "Kuchen für die ganze Runde",
     "Geld für die neue Wohnung",
     "Blumen oder Wein zum Dank",
     "Karte mit den besten Wünschen"
    ],
    "answer": 2,
    "w": "das Gastgeschenk",
    "explain": "das Gastgeschenk = Blumen oder Wein zum Dank."
   },
   {
    "type": "choice",
    "audio": "mitbringen",
    "q": "🔊 Hör zu – was bedeutet das Wort?",
    "options": [
     "etwas für sich allein kaufen",
     "etwas nach dem Fest mitnehmen",
     "etwas vor der Tür abstellen",
     "etwas für alle dabeihaben"
    ],
    "answer": 3,
    "w": "mitbringen",
    "explain": "mitbringen = etwas für alle dabeihaben."
   },
   {
    "type": "choice",
    "audio": "der Nachtisch",
    "q": "🔊 Hör zu – was bedeutet das Wort?",
    "options": [
     "das Süße nach dem Essen",
     "das Kleine vor dem Essen",
     "der Teller neben dem Glas",
     "das Brot zu der Suppe"
    ],
    "answer": 0,
    "w": "der Nachtisch",
    "explain": "der Nachtisch = das Süße nach dem Essen."
   },
   {
    "type": "choice",
    "audio": "das Grillfest",
    "q": "🔊 Hör zu – was bedeutet das Wort?",
    "options": [
     "im Saal mit Musik und Tanz",
     "im Garten mit Würstchen und Feuer",
     "im Lokal mit Suppe und Wein",
     "im Hof mit Kaffee und Kuchen"
    ],
    "answer": 1,
    "w": "das Grillfest",
    "explain": "das Grillfest = im Garten mit Würstchen und Feuer."
   },
   {
    "type": "choice",
    "audio": "anstoßen",
    "q": "🔊 Hör zu – was bedeutet das Wort?",
    "options": [
     "die Kerzen alle auspusten",
     "die Teller schnell abräumen",
     "die Gläser kurz zusammenhalten",
     "die Flaschen wieder zumachen"
    ],
    "answer": 2,
    "w": "anstoßen",
    "explain": "anstoßen = die Gläser kurz zusammenhalten."
   },
   {
    "type": "choice",
    "audio": "reinfeiern",
    "q": "🔊 Hör zu – was bedeutet das Wort?",
    "options": [
     "erst am Tag danach feiern",
     "ohne Einladung einfach hingehen",
     "bis zum frühen Morgen bleiben",
     "schon am Abend vorher feiern"
    ],
    "answer": 3,
    "w": "reinfeiern",
    "explain": "reinfeiern = schon am Abend vorher feiern."
   },
   {
    "type": "choice",
    "audio": "die Hochzeit",
    "q": "🔊 Hör zu – was bedeutet das Wort?",
    "options": [
     "zwei Menschen sagen laut Ja",
     "zwei Familien lernen sich kennen",
     "zwei Freunde feiern zusammen Geburtstag",
     "zwei Nachbarn ziehen zusammen um"
    ],
    "answer": 0,
    "w": "die Hochzeit",
    "explain": "die Hochzeit = zwei Menschen sagen laut Ja."
   },
   {
    "type": "choice",
    "audio": "das Standesamt",
    "q": "🔊 Hör zu – was bedeutet das Wort?",
    "options": [
     "dort feiern die Gäste am Abend",
     "dort unterschreiben die beiden zuerst",
     "dort kauft man die beiden Ringe",
     "dort werden die Bilder gemacht"
    ],
    "answer": 1,
    "w": "das Standesamt",
    "explain": "das Standesamt = dort unterschreiben die beiden zuerst."
   },
   {
    "type": "choice",
    "audio": "der Umschlag",
    "q": "🔊 Hör zu – was bedeutet das Wort?",
    "options": [
     "darin liegt der Kuchen vom Fest",
     "darin steckt die kleine Kerze",
     "darin steckt Geld als Geschenk",
     "darin sind die Blumen für sie"
    ],
    "answer": 2,
    "w": "der Umschlag",
    "explain": "der Umschlag = darin steckt Geld als Geschenk."
   },
   {
    "type": "choice",
    "audio": "festlich",
    "q": "🔊 Hör zu – was bedeutet das Wort?",
    "options": [
     "warm angezogen für den Garten",
     "bequem angezogen für zu Hause",
     "bunt angezogen für die Kinder",
     "schön angezogen für den Abend"
    ],
    "answer": 3,
    "w": "festlich",
    "explain": "festlich = schön angezogen für den Abend."
   }
  ]
 },
 {
  "id": "friseur-beruf",
  "title": "Arbeit im Salon",
  "level": "A2",
  "emoji": "🎧",
  "words": [
   {
    "de": "das Terminbuch",
    "info": "hier stehen alle Termine",
    "emoji": "📖"
   },
   {
    "de": "die Beratung",
    "info": "vorher in Ruhe alles besprechen",
    "emoji": "💬"
   },
   {
    "de": "der Wunsch",
    "info": "das, was jemand gern möchte",
    "emoji": "✨"
   },
   {
    "de": "anrühren",
    "info": "die Farbe mischen und fertig machen",
    "emoji": "🥣"
   },
   {
    "de": "die Einwirkzeit",
    "info": "so lange bleibt die Farbe drauf",
    "emoji": "⏲️"
   },
   {
    "de": "der Schnitt",
    "info": "die neue Form der Haare",
    "emoji": "✂️"
   },
   {
    "de": "das Trinkgeld",
    "info": "das kleine Geld obendrauf",
    "emoji": "💶"
   },
   {
    "de": "die Reklamation",
    "info": "der Kunde ist nicht zufrieden",
    "emoji": "😕"
   },
   {
    "de": "der Ansatz",
    "info": "die Haare direkt an der Kopfhaut",
    "emoji": "🎨"
   },
   {
    "de": "die Spitzen",
    "info": "das Ende von den Haaren",
    "emoji": "🔻"
   },
   {
    "de": "föhnen",
    "info": "die nassen Haare trocken machen",
    "emoji": "💨"
   },
   {
    "de": "der Nacken",
    "info": "hinten unten am Kopf",
    "emoji": "💇"
   },
   {
    "de": "der Pony",
    "info": "die Haare vorn über der Stirn",
    "emoji": "💇‍♀️"
   },
   {
    "de": "die Strähne",
    "info": "eine dünne Reihe von Haaren",
    "emoji": "🌾"
   },
   {
    "de": "auswaschen",
    "info": "mit Wasser wieder herausholen",
    "emoji": "🚿"
   },
   {
    "de": "der Umhang",
    "info": "schützt die Kleidung beim Schneiden",
    "emoji": "🧥"
   }
  ],
  "exercises": [
   {
    "type": "listen",
    "label": "📢 Ansage im Salon",
    "audioUrl": "https://d8j0ntlcm91z4.cloudfront.net/user_38tIQPWpEsaUmk18tYN8mskaaAF/hf_20260826_074510_fc97b5c9-2229-439f-a4b6-7f69fe6bff14.mp3",
    "q": "Warum soll man für eine Farbe zwei Stunden einplanen?",
    "options": [
     "Weil die Farbe eine Einwirkzeit braucht",
     "Weil der Salon nur bis achtzehn Uhr offen ist",
     "Weil am Montag immer Ruhetag ist",
     "Weil ohne Termin die Wartezeit lang ist"
    ],
    "answer": 0,
    "transcript": "Willkommen bei Salon Sonne. Wir haben heute geöffnet bis achtzehn Uhr. Termine machen Sie am besten gleich am Telefon, denn ohne Termin ist die Wartezeit lang. Am Montag ist bei uns immer Ruhetag. Wenn Sie eine Farbe möchten, planen Sie bitte zwei Stunden ein, wegen der Einwirkzeit. Sprechen Sie nach dem Ton kurz Ihren Namen und Ihre Nummer.",
    "explain": "Die Ansage sagt, für eine Farbe braucht man zwei Stunden wegen der Einwirkzeit."
   },
   {
    "type": "listen",
    "label": "📞 Mailbox: Eine helle Stelle",
    "audioUrl": "https://d8j0ntlcm91z4.cloudfront.net/user_38tIQPWpEsaUmk18tYN8mskaaAF/hf_20260826_074509_5c622a43-1923-4296-b1cc-6f25ba944b73.mp3",
    "q": "Was gefällt der Kundin nicht?",
    "options": [
     "Die Farbe ist ihr insgesamt zu dunkel",
     "Am Ansatz ist links eine helle Stelle",
     "Der Termin war ihr gestern zu spät",
     "Die Spitzen sind ihr zu kurz geschnitten"
    ],
    "answer": 1,
    "transcript": "Guten Tag, hier ist Frau Berger. Ich war gestern bei Ihnen zum Färben. Die Farbe gefällt mir gut, aber am Ansatz ist links noch eine helle Stelle. Können Sie das noch einmal anschauen? Ich komme gern morgen Vormittag vorbei, am liebsten vor elf Uhr. Rufen Sie mich bitte kurz zurück. Vielen Dank und einen schönen Tag.",
    "explain": "Sie sagt, die Farbe gefällt ihr, nur am Ansatz ist links noch eine helle Stelle."
   },
   {
    "type": "listen",
    "label": "🪟 Am Tresen: Nur die Spitzen",
    "audioUrl": "https://d8j0ntlcm91z4.cloudfront.net/user_38tIQPWpEsaUmk18tYN8mskaaAF/hf_20260826_074723_97783ed5-1be5-488a-8d5a-7c4201af57df.mp3",
    "q": "Warum bekommt die Kundin heute keine Farbe?",
    "options": [
     "Weil Frau Yildiz heute keine Zeit mehr hat",
     "Weil das Terminbuch für heute schon voll ist",
     "Weil die Farbe viel mehr Zeit braucht",
     "Weil die Kundin nur die Spitzen möchte"
    ],
    "answer": 2,
    "transcript": "Guten Tag, ich möchte gern nur die Spitzen schneiden lassen. — Gern. Haben Sie einen Termin? — Nein. — Moment, ich schaue ins Terminbuch. Um sechzehn Uhr wäre etwas frei, bei Frau Yildiz. — Das passt. Geht auch Farbe dazu? — Heute leider nicht, dafür brauchen wir mehr Zeit. Machen wir die Farbe nächste Woche?",
    "explain": "Die Kollegin sagt, für die Farbe brauchen sie mehr Zeit, deshalb erst nächste Woche."
   },
   {
    "type": "listen",
    "label": "☕ Privat: Der erste Tag",
    "audioUrl": "https://d8j0ntlcm91z4.cloudfront.net/user_38tIQPWpEsaUmk18tYN8mskaaAF/hf_20260826_074723_ea23295f-1363-4d07-8867-93ea5a6f260f.mp3",
    "q": "Was passiert im Salon mit dem Trinkgeld?",
    "options": [
     "Jede behält das Trinkgeld für sich allein",
     "Es kommt in eine Dose und wird geteilt",
     "Die Chefin gibt es am Monatsende aus",
     "Es wird gleich in die Kasse gelegt"
    ],
    "answer": 1,
    "transcript": "Und, wie war dein erster Tag im Salon? — Anstrengend. Ich habe nur gewaschen und geföhnt. — Das ist normal am Anfang. — Aber eine Kundin hat mir Trinkgeld gegeben, fünf Euro. — Schön! Das kommt bei uns in eine Dose, und freitags teilen wir alles. — Ach so, das wusste ich nicht. Dann gebe ich das morgen ab.",
    "explain": "Die Kollegin erklärt, das Trinkgeld kommt in eine Dose und wird freitags geteilt."
   },
   {
    "type": "choice",
    "audio": "das Terminbuch",
    "q": "🔊 Hör zu – was bedeutet das Wort?",
    "options": [
     "hier stehen alle Termine",
     "hier stehen alle Preise",
     "hier stehen alle Farben",
     "hier stehen alle Adressen"
    ],
    "answer": 0,
    "w": "das Terminbuch",
    "explain": "das Terminbuch = hier stehen alle Termine."
   },
   {
    "type": "choice",
    "audio": "die Beratung",
    "q": "🔊 Hör zu – was bedeutet das Wort?",
    "options": [
     "danach schnell alles bezahlen",
     "vorher in Ruhe alles besprechen",
     "zwischendurch kurz die Haare waschen",
     "am Ende die Haare trocken föhnen"
    ],
    "answer": 1,
    "w": "die Beratung",
    "explain": "die Beratung = vorher in Ruhe alles besprechen."
   },
   {
    "type": "choice",
    "audio": "der Wunsch",
    "q": "🔊 Hör zu – was bedeutet das Wort?",
    "options": [
     "das, was jemand gern bezahlt",
     "der Ort, wo jemand gern sitzt",
     "das, was jemand gern möchte",
     "die Zeit, die jemand gern wartet"
    ],
    "answer": 2,
    "w": "der Wunsch",
    "explain": "der Wunsch = das, was jemand gern möchte."
   },
   {
    "type": "choice",
    "audio": "anrühren",
    "q": "🔊 Hör zu – was bedeutet das Wort?",
    "options": [
     "die Farbe auf die Haare geben",
     "die Farbe mit Wasser herausholen",
     "die Farbe im Schrank aussuchen",
     "die Farbe mischen und fertig machen"
    ],
    "answer": 3,
    "w": "anrühren",
    "explain": "anrühren = die Farbe mischen und fertig machen."
   },
   {
    "type": "choice",
    "audio": "die Einwirkzeit",
    "q": "🔊 Hör zu – was bedeutet das Wort?",
    "options": [
     "so lange bleibt die Farbe drauf",
     "so lange dauert der ganze Termin",
     "so lange muss man vorher warten",
     "so lange hält die Farbe im Haar"
    ],
    "answer": 0,
    "w": "die Einwirkzeit",
    "explain": "die Einwirkzeit = so lange bleibt die Farbe drauf."
   },
   {
    "type": "choice",
    "audio": "der Schnitt",
    "q": "🔊 Hör zu – was bedeutet das Wort?",
    "options": [
     "die neue Farbe der Haare",
     "die neue Form der Haare",
     "die alte Frisur vom Foto",
     "die Menge von den Haaren"
    ],
    "answer": 1,
    "w": "der Schnitt",
    "explain": "der Schnitt = die neue Form der Haare."
   },
   {
    "type": "choice",
    "audio": "das Trinkgeld",
    "q": "🔊 Hör zu – was bedeutet das Wort?",
    "options": [
     "das ganze Geld für den Termin",
     "das Geld für die Farbe",
     "das kleine Geld obendrauf",
     "das Geld aus der Kasse"
    ],
    "answer": 2,
    "w": "das Trinkgeld",
    "explain": "das Trinkgeld = das kleine Geld obendrauf."
   },
   {
    "type": "choice",
    "audio": "die Reklamation",
    "q": "🔊 Hör zu – was bedeutet das Wort?",
    "options": [
     "der Kunde kommt zum ersten Mal",
     "der Kunde bezahlt an der Kasse",
     "der Kunde sagt den Termin ab",
     "der Kunde ist nicht zufrieden"
    ],
    "answer": 3,
    "w": "die Reklamation",
    "explain": "die Reklamation = der Kunde ist nicht zufrieden."
   },
   {
    "type": "choice",
    "audio": "der Ansatz",
    "q": "🔊 Hör zu – was bedeutet das Wort?",
    "options": [
     "die Haare direkt an der Kopfhaut",
     "die Haare ganz unten am Ende",
     "die Haare seitlich über dem Ohr",
     "die Haare hinten im Nacken"
    ],
    "answer": 0,
    "w": "der Ansatz",
    "explain": "der Ansatz = die Haare direkt an der Kopfhaut."
   },
   {
    "type": "choice",
    "audio": "die Spitzen",
    "q": "🔊 Hör zu – was bedeutet das Wort?",
    "options": [
     "der Anfang von den Haaren",
     "das Ende von den Haaren",
     "die Farbe von den Haaren",
     "die Menge von den Haaren"
    ],
    "answer": 1,
    "w": "die Spitzen",
    "explain": "die Spitzen = das Ende von den Haaren."
   },
   {
    "type": "choice",
    "audio": "föhnen",
    "q": "🔊 Hör zu – was bedeutet das Wort?",
    "options": [
     "die trockenen Haare nass machen",
     "die langen Haare kurz schneiden",
     "die nassen Haare trocken machen",
     "die hellen Haare dunkel färben"
    ],
    "answer": 2,
    "w": "föhnen",
    "explain": "föhnen = die nassen Haare trocken machen."
   },
   {
    "type": "choice",
    "audio": "der Nacken",
    "q": "🔊 Hör zu – was bedeutet das Wort?",
    "options": [
     "vorne oben am Kopf",
     "seitlich neben dem Ohr",
     "direkt über der Stirn",
     "hinten unten am Kopf"
    ],
    "answer": 3,
    "w": "der Nacken",
    "explain": "der Nacken = hinten unten am Kopf."
   },
   {
    "type": "choice",
    "audio": "der Pony",
    "q": "🔊 Hör zu – was bedeutet das Wort?",
    "options": [
     "die Haare vorn über der Stirn",
     "die Haare hinten über dem Nacken",
     "die Haare seitlich hinter dem Ohr",
     "die Haare ganz oben am Kopf"
    ],
    "answer": 0,
    "w": "der Pony",
    "explain": "der Pony = die Haare vorn über der Stirn."
   },
   {
    "type": "choice",
    "audio": "die Strähne",
    "q": "🔊 Hör zu – was bedeutet das Wort?",
    "options": [
     "eine kleine Menge Farbe",
     "eine dünne Reihe von Haaren",
     "eine kurze Zeit zum Warten",
     "eine große Bürste zum Föhnen"
    ],
    "answer": 1,
    "w": "die Strähne",
    "explain": "die Strähne = eine dünne Reihe von Haaren."
   },
   {
    "type": "choice",
    "audio": "auswaschen",
    "q": "🔊 Hör zu – was bedeutet das Wort?",
    "options": [
     "mit der Bürste glatt machen",
     "mit dem Tuch trocken reiben",
     "mit Wasser wieder herausholen",
     "mit der Schere kurz schneiden"
    ],
    "answer": 2,
    "w": "auswaschen",
    "explain": "auswaschen = mit Wasser wieder herausholen."
   },
   {
    "type": "choice",
    "audio": "der Umhang",
    "q": "🔊 Hör zu – was bedeutet das Wort?",
    "options": [
     "schützt die Hände beim Färben",
     "wärmt die Haare beim Trocknen",
     "hält die Haare beim Waschen",
     "schützt die Kleidung beim Schneiden"
    ],
    "answer": 3,
    "w": "der Umhang",
    "explain": "der Umhang = schützt die Kleidung beim Schneiden."
   }
  ]
 },
 {
  "id": "handel",
  "title": "Arbeiten im Laden",
  "level": "B1",
  "emoji": "🎧",
  "words": [
   {
    "de": "die Inventur",
    "info": "alles im Laden genau zählen",
    "emoji": "🧮"
   },
   {
    "de": "die Kassenabrechnung",
    "info": "am Abend das Geld zählen",
    "emoji": "💶"
   },
   {
    "de": "die Reklamation",
    "info": "der Kunde beschwert sich",
    "emoji": "😠"
   },
   {
    "de": "das Mindesthaltbarkeitsdatum",
    "info": "bis dahin bleibt es gut",
    "emoji": "📅"
   },
   {
    "de": "der Schichtplan",
    "info": "wer wann arbeiten muss",
    "emoji": "🗓️"
   },
   {
    "de": "die Warenverräumung",
    "info": "neue Sachen ins Regal stellen",
    "emoji": "📦"
   },
   {
    "de": "der Kassenbon",
    "info": "Zettel als Beweis vom Kauf",
    "emoji": "🧾"
   },
   {
    "de": "die Nachbestellung",
    "info": "fehlende Ware wieder anfordern",
    "emoji": "📝"
   },
   {
    "de": "der Umtausch",
    "info": "Ware zurück, andere dafür nehmen",
    "emoji": "🔁"
   },
   {
    "de": "der Ladenhüter",
    "info": "Ware, die niemand kauft",
    "emoji": "🕸️"
   },
   {
    "de": "die Frischetheke",
    "info": "Tresen mit Wurst und Käse",
    "emoji": "🧀"
   },
   {
    "de": "die Preisauszeichnung",
    "info": "jede Ware bekommt ihr Schild",
    "emoji": "🏷️"
   },
   {
    "de": "das Wechselgeld",
    "info": "das bekommt der Kunde zurück",
    "emoji": "🪙"
   },
   {
    "de": "der Lieferschein",
    "info": "Papier zur angekommenen Ware",
    "emoji": "📄"
   },
   {
    "de": "die Kundenberatung",
    "info": "Fragen im Laden freundlich beantworten",
    "emoji": "💬"
   },
   {
    "de": "der Schwund",
    "info": "Ware fehlt ohne Verkauf",
    "emoji": "📉"
   }
  ],
  "exercises": [
   {
    "type": "listen",
    "label": "📢 Durchsage im Markt",
    "audioUrl": "https://d8j0ntlcm91z4.cloudfront.net/user_38tIQPWpEsaUmk18tYN8mskaaAF/hf_20260826_074723_5cfabcb5-dfb4-404b-8ca5-0ca8d344bf8e.mp3",
    "q": "Bis wann gilt der halbe Preis an der Frischetheke?",
    "options": [
     "Heute noch bis achtzehn Uhr am Abend",
     "Morgen noch bis sechzehn Uhr am Nachmittag",
     "Nur noch heute in der nächsten Stunde",
     "Ab sofort für die ganze restliche Woche"
    ],
    "answer": 0,
    "transcript": "Liebe Kundinnen und Kunden, ein Hinweis für Sie. An der Frischetheke bekommen Sie heute noch bis achtzehn Uhr den Aufschnitt zum halben Preis, danach gilt wieder der normale Preis. Wegen der Inventur schließen wir morgen bereits um sechzehn Uhr. Die Kasse vier ist ab sofort wieder geöffnet, bitte gehen Sie dort mit kleineren Einkäufen hin.",
    "explain": "Die Durchsage sagt, der halbe Preis gilt heute nur noch bis achtzehn Uhr, danach kostet es wieder normal."
   },
   {
    "type": "listen",
    "label": "📞 Mailbox: Schicht getauscht",
    "audioUrl": "https://d8j0ntlcm91z4.cloudfront.net/user_38tIQPWpEsaUmk18tYN8mskaaAF/hf_20260826_074723_32436579-7c07-4a36-b451-58faaf36745d.mp3",
    "q": "Was soll Frau Nowak am Montag als Erstes tun?",
    "options": [
     "Zuerst die Ware im Trockenbereich einräumen",
     "Zuerst die Abrechnung vom Sonntag machen",
     "Zuerst den neuen Schichtplan im Büro holen",
     "Zuerst den kranken Kollegen zu Hause anrufen"
    ],
    "answer": 0,
    "transcript": "Hallo Frau Nowak, hier ist Berger aus der Filiale. Ihr Kollege ist krank, deshalb steht im neuen Schichtplan für Montag die Frühschicht ab sechs Uhr statt der Spätschicht. Machen Sie bitte zuerst die Warenverräumung im Trockenbereich, die Kassenabrechnung vom Sonntag mache ich selbst. Wenn Ihnen das zu kurzfristig ist, rufen Sie mich heute noch zurück.",
    "explain": "Der Chef sagt, sie soll zuerst die Warenverräumung machen, die Abrechnung übernimmt er selbst."
   },
   {
    "type": "listen",
    "label": "🪟 Am Tresen: Der Wasserkocher ist kaputt",
    "audioUrl": "https://d8j0ntlcm91z4.cloudfront.net/user_38tIQPWpEsaUmk18tYN8mskaaAF/hf_20260826_074723_719adc25-aee4-4fee-b904-b24d41873750.mp3",
    "q": "Was passiert zuerst mit dem kaputten Gerät?",
    "options": [
     "Es wird zuerst von der Firma geprüft",
     "Es wird sofort gegen ein neues getauscht",
     "Es wird zusammen mit dem Bon entsorgt",
     "Es wird zwei Wochen im Regal aufbewahrt"
    ],
    "answer": 0,
    "transcript": "Guten Tag, der Wasserkocher hier ist nach drei Wochen kaputt. Ich hätte gern mein Geld zurück. — Haben Sie den Kassenbon dabei? — Ja, hier. — Dann nehme ich die Reklamation auf. Geld zurück gibt es allerdings nicht, das Gerät geht zuerst zur Prüfung. Sie bekommen danach entweder ein neues Gerät oder einen Gutschein. Das dauert etwa zwei Wochen.",
    "explain": "Die Verkäuferin sagt, das Gerät geht zuerst zur Prüfung, erst danach gibt es Ersatz oder einen Gutschein."
   },
   {
    "type": "listen",
    "label": "☕ Privat: Nach der Inventur",
    "audioUrl": "https://d8j0ntlcm91z4.cloudfront.net/user_38tIQPWpEsaUmk18tYN8mskaaAF/hf_20260826_074723_58555dd9-2b59-4017-9398-42205ffb6d35.mp3",
    "q": "Woher kommt der fehlende Betrag zum Teil?",
    "options": [
     "Von Ware, die zu lange im Regal lag",
     "Von Ware, die falsch ausgezeichnet wurde",
     "Von Ware, die nie im Laden ankam",
     "Von Ware, die zu billig verkauft wurde"
    ],
    "answer": 0,
    "transcript": "Und, wie war die Inventur? — Frag nicht. Bis halb elf abends gezählt, und am Ende fehlte Ware für fast zweitausend Euro. — Diebstahl? — Teilweise. Der Rest ist verdorbene Ware, wir haben das Mindesthaltbarkeitsdatum zu spät kontrolliert. — Und jetzt? — Jetzt gibt es jede Woche eine Kontrolle an der Frischetheke. Der Filialleiter ist stinksauer.",
    "explain": "Sie sagt, ein Teil des Schwundes ist verdorbene Ware, weil das Mindesthaltbarkeitsdatum zu spät kontrolliert wurde."
   },
   {
    "type": "choice",
    "audio": "die Inventur",
    "q": "🔊 Hör zu – was bedeutet das Wort?",
    "options": [
     "alles im Laden genau zählen",
     "alles im Laden neu einräumen",
     "alles im Laden billiger verkaufen",
     "alles im Laden gründlich sauber machen"
    ],
    "answer": 0,
    "w": "die Inventur",
    "explain": "die Inventur = alles im Laden genau zählen."
   },
   {
    "type": "choice",
    "audio": "die Kassenabrechnung",
    "q": "🔊 Hör zu – was bedeutet das Wort?",
    "options": [
     "am Morgen die Kasse aufschließen",
     "am Abend das Geld zählen",
     "am Abend die Regale auffüllen",
     "am Morgen die Preise ändern"
    ],
    "answer": 1,
    "w": "die Kassenabrechnung",
    "explain": "die Kassenabrechnung = am Abend das Geld zählen."
   },
   {
    "type": "choice",
    "audio": "die Reklamation",
    "q": "🔊 Hör zu – was bedeutet das Wort?",
    "options": [
     "der Kunde fragt nach dem Weg",
     "der Kunde bezahlt mit Karte",
     "der Kunde beschwert sich",
     "der Kunde bestellt etwas vor"
    ],
    "answer": 2,
    "w": "die Reklamation",
    "explain": "die Reklamation = der Kunde beschwert sich."
   },
   {
    "type": "choice",
    "audio": "das Mindesthaltbarkeitsdatum",
    "q": "🔊 Hör zu – was bedeutet das Wort?",
    "options": [
     "an dem Tag kam es an",
     "ab dann ist es billiger",
     "an dem Tag wurde es hergestellt",
     "bis dahin bleibt es gut"
    ],
    "answer": 3,
    "w": "das Mindesthaltbarkeitsdatum",
    "explain": "das Mindesthaltbarkeitsdatum = bis dahin bleibt es gut."
   },
   {
    "type": "choice",
    "audio": "der Schichtplan",
    "q": "🔊 Hör zu – was bedeutet das Wort?",
    "options": [
     "wer wann arbeiten muss",
     "was wo im Regal steht",
     "wer wie viel Geld verdient",
     "was wann geliefert wird"
    ],
    "answer": 0,
    "w": "der Schichtplan",
    "explain": "der Schichtplan = wer wann arbeiten muss."
   },
   {
    "type": "choice",
    "audio": "die Warenverräumung",
    "q": "🔊 Hör zu – was bedeutet das Wort?",
    "options": [
     "alte Sachen aus dem Regal werfen",
     "neue Sachen ins Regal stellen",
     "kaputte Sachen zurück zur Firma schicken",
     "teure Sachen hinter die Kasse legen"
    ],
    "answer": 1,
    "w": "die Warenverräumung",
    "explain": "die Warenverräumung = neue Sachen ins Regal stellen."
   },
   {
    "type": "choice",
    "audio": "der Kassenbon",
    "q": "🔊 Hör zu – was bedeutet das Wort?",
    "options": [
     "Karte für den Rabatt im Laden",
     "Schild mit dem Preis der Ware",
     "Zettel als Beweis vom Kauf",
     "Zettel mit dem Plan für morgen"
    ],
    "answer": 2,
    "w": "der Kassenbon",
    "explain": "der Kassenbon = Zettel als Beweis vom Kauf."
   },
   {
    "type": "choice",
    "audio": "die Nachbestellung",
    "q": "🔊 Hör zu – was bedeutet das Wort?",
    "options": [
     "verdorbene Ware sofort wegwerfen",
     "bestellte Ware wieder abmelden",
     "gelieferte Ware genau nachzählen",
     "fehlende Ware wieder anfordern"
    ],
    "answer": 3,
    "w": "die Nachbestellung",
    "explain": "die Nachbestellung = fehlende Ware wieder anfordern."
   },
   {
    "type": "choice",
    "audio": "der Umtausch",
    "q": "🔊 Hör zu – was bedeutet das Wort?",
    "options": [
     "Ware zurück, andere dafür nehmen",
     "Ware bestellen, später abholen",
     "Ware kaufen, in Raten bezahlen",
     "Ware ansehen, nichts davon nehmen"
    ],
    "answer": 0,
    "w": "der Umtausch",
    "explain": "der Umtausch = Ware zurück, andere dafür nehmen."
   },
   {
    "type": "choice",
    "audio": "der Ladenhüter",
    "q": "🔊 Hör zu – was bedeutet das Wort?",
    "options": [
     "Mann, der den Laden bewacht",
     "Ware, die niemand kauft",
     "Ware, die immer schnell weggeht",
     "Kunde, der jeden Tag kommt"
    ],
    "answer": 1,
    "w": "der Ladenhüter",
    "explain": "der Ladenhüter = Ware, die niemand kauft."
   },
   {
    "type": "choice",
    "audio": "die Frischetheke",
    "q": "🔊 Hör zu – was bedeutet das Wort?",
    "options": [
     "Regal mit Brot und Kuchen",
     "Truhe mit Eis und Fisch",
     "Tresen mit Wurst und Käse",
     "Stand mit Blumen und Pflanzen"
    ],
    "answer": 2,
    "w": "die Frischetheke",
    "explain": "die Frischetheke = Tresen mit Wurst und Käse."
   },
   {
    "type": "choice",
    "audio": "die Preisauszeichnung",
    "q": "🔊 Hör zu – was bedeutet das Wort?",
    "options": [
     "jede Ware bekommt ihren Platz",
     "jeder Kunde bekommt seinen Zettel",
     "jedes Regal bekommt seine Nummer",
     "jede Ware bekommt ihr Schild"
    ],
    "answer": 3,
    "w": "die Preisauszeichnung",
    "explain": "die Preisauszeichnung = jede Ware bekommt ihr Schild."
   },
   {
    "type": "choice",
    "audio": "das Wechselgeld",
    "q": "🔊 Hör zu – was bedeutet das Wort?",
    "options": [
     "das bekommt der Kunde zurück",
     "das legt der Kunde auf den Tresen",
     "das bekommt der Verkäufer am Monatsende",
     "das bleibt als Trinkgeld im Glas"
    ],
    "answer": 0,
    "w": "das Wechselgeld",
    "explain": "das Wechselgeld = das bekommt der Kunde zurück."
   },
   {
    "type": "choice",
    "audio": "der Lieferschein",
    "q": "🔊 Hör zu – was bedeutet das Wort?",
    "options": [
     "Papier für den nächsten Auftrag",
     "Papier zur angekommenen Ware",
     "Papier über die geleisteten Stunden",
     "Papier mit den Preisen für Kunden"
    ],
    "answer": 1,
    "w": "der Lieferschein",
    "explain": "der Lieferschein = Papier zur angekommenen Ware."
   },
   {
    "type": "choice",
    "audio": "die Kundenberatung",
    "q": "🔊 Hör zu – was bedeutet das Wort?",
    "options": [
     "Waren im Laden ordentlich hinstellen",
     "Preise im Laden richtig eintippen",
     "Fragen im Laden freundlich beantworten",
     "Reste im Laden abends wegräumen"
    ],
    "answer": 2,
    "w": "die Kundenberatung",
    "explain": "die Kundenberatung = Fragen im Laden freundlich beantworten."
   },
   {
    "type": "choice",
    "audio": "der Schwund",
    "q": "🔊 Hör zu – was bedeutet das Wort?",
    "options": [
     "Ware liegt zu lange herum",
     "Ware kommt zu spät an",
     "Ware wird billiger verkauft",
     "Ware fehlt ohne Verkauf"
    ],
    "answer": 3,
    "w": "der Schwund",
    "explain": "der Schwund = Ware fehlt ohne Verkauf."
   }
  ]
 },
 {
  "id": "heikel",
  "title": "Heikle Gespräche",
  "level": "B1",
  "emoji": "🎧",
  "words": [
   {
    "de": "das Missverständnis",
    "info": "einer hat den anderen falsch verstanden",
    "emoji": "🔁"
   },
   {
    "de": "der Vorwurf",
    "info": "du sagst: das war deine Schuld",
    "emoji": "👉"
   },
   {
    "de": "die Rückmeldung",
    "info": "eine Antwort darauf, wie es war",
    "emoji": "💬"
   },
   {
    "de": "die Kritik",
    "info": "wenn jemand sagt, was schlecht war",
    "emoji": "🗣️"
   },
   {
    "de": "der Kompromiss",
    "info": "jeder gibt ein bisschen nach",
    "emoji": "🤝"
   },
   {
    "de": "die Gehaltserhöhung",
    "info": "ab jetzt bekommst du mehr Geld",
    "emoji": "💶"
   },
   {
    "de": "die Entschuldigung",
    "info": "du sagst, dass es dir leidtut",
    "emoji": "🙇"
   },
   {
    "de": "das Versehen",
    "info": "es ist ohne Absicht passiert",
    "emoji": "😬"
   },
   {
    "de": "die Überforderung",
    "info": "es ist einfach zu viel",
    "emoji": "😵"
   },
   {
    "de": "der Vorgesetzte",
    "info": "die Person über dir im Betrieb",
    "emoji": "👔"
   },
   {
    "de": "das Vieraugengespräch",
    "info": "ein Gespräch nur zu zweit",
    "emoji": "🚪"
   },
   {
    "de": "die Wertschätzung",
    "info": "man zeigt dir, dass du zählst",
    "emoji": "🌟"
   },
   {
    "de": "der Konflikt",
    "info": "zwei wollen etwas ganz Verschiedenes",
    "emoji": "⚡"
   },
   {
    "de": "die Grenze",
    "info": "hier ist bei dir Schluss",
    "emoji": "🚧"
   },
   {
    "de": "ansprechen",
    "info": "etwas offen zur Sprache bringen",
    "emoji": "🗨️"
   },
   {
    "de": "sich rechtfertigen",
    "info": "erklären, warum du so gehandelt hast",
    "emoji": "🛡️"
   }
  ],
  "exercises": [
   {
    "type": "listen",
    "label": "📢 Ansage vor der Schicht",
    "audioUrl": "https://d8j0ntlcm91z4.cloudfront.net/user_38tIQPWpEsaUmk18tYN8mskaaAF/hf_20260826_074936_94da0ae4-a78f-44db-bbd8-4c850891db63.mp3",
    "q": "Warum sollen Fehler sofort gemeldet werden?",
    "options": [
     "Ein später Fehler kostet einen ganzen Tag",
     "Sonst gibt es Ärger mit der Schichtleitung",
     "Die Waage muss dann neu geprüft werden",
     "Der neue Zettel wird sonst nicht ausgefüllt"
    ],
    "answer": 0,
    "transcript": "Kurze Ansage vor Schichtbeginn, bitte einmal alle herhören. Wenn beim Packen etwas schiefgeht, meldet das sofort bei der Schichtleitung, auch wenn es euch unangenehm ist. Niemand bekommt dafür Ärger, ein spät gemeldeter Fehler kostet uns aber einen ganzen Tag. Ab Montag hängt dafür ein neuer Zettel neben der Waage.",
    "explain": "Ärger gibt es ausdrücklich nicht, genannt wird nur der verlorene Tag bei einer späten Meldung."
   },
   {
    "type": "listen",
    "label": "📞 Mailbox: Bitte einmal unter vier Augen",
    "audioUrl": "https://d8j0ntlcm91z4.cloudfront.net/user_38tIQPWpEsaUmk18tYN8mskaaAF/hf_20260826_074936_fbc3b6e3-8f16-43f6-81fb-27be04db4c27.mp3",
    "q": "Was möchte Herr Kollmann in dem Gespräch?",
    "options": [
     "Er will verstehen, wie es passiert ist",
     "Er will ihr eine schriftliche Warnung geben",
     "Er will die Bestellung mit ihr aufgeben",
     "Er will einen neuen Plan mit ihr besprechen"
    ],
    "answer": 0,
    "transcript": "Hallo Frau Petrova, hier ist Kollmann. Ich hätte gern kurz mit Ihnen gesprochen, unter vier Augen, am besten morgen früh. Es geht um die Sache mit der Bestellung letzte Woche. Machen Sie sich bitte keine Sorgen, ich möchte nur verstehen, wie es dazu kam. Sagen Sie mir einfach, wann es Ihnen passt.",
    "explain": "Er sagt selbst, dass er keine Vorwürfe machen, sondern nur verstehen will, wie es dazu kam."
   },
   {
    "type": "listen",
    "label": "🔧 Am Tresen: Das schaffe ich nicht",
    "audioUrl": "https://d8j0ntlcm91z4.cloudfront.net/user_38tIQPWpEsaUmk18tYN8mskaaAF/hf_20260826_074936_5a03c03e-4088-4554-832d-69026a4f6de6.mp3",
    "q": "Unter welcher Bedingung sagt er doch zu?",
    "options": [
     "Wenn ein Kollege ihm dabei hilft",
     "Wenn er die Aufträge später macht",
     "Wenn er bis sechs Uhr bleiben darf",
     "Wenn der Meister ihm mehr zahlt"
    ],
    "answer": 0,
    "transcript": "Kannst du das noch bis heute Abend fertig machen? — Ehrlich gesagt schaffe ich das nicht, ich habe schon zwei Aufträge offen. — Hm. Und wenn Ali dir hilft? — Dann ja, dann geht es. — Gut, ich sag ihm Bescheid. Danke, dass du das gleich sagst und nicht erst um sechs.",
    "explain": "Er sagt erst Nein und stimmt dann zu, aber nur mit der Hilfe von Ali."
   },
   {
    "type": "listen",
    "label": "🛋️ Zu Hause: Ich frage nach mehr Gehalt",
    "audioUrl": "https://d8j0ntlcm91z4.cloudfront.net/user_38tIQPWpEsaUmk18tYN8mskaaAF/hf_20260826_074936_4f945c49-5201-4012-834f-6b1f16e89b33.mp3",
    "q": "Was will sie tun, wenn der Chef Nein sagt?",
    "options": [
     "Sie fragt, was sich dafür ändern muss",
     "Sie nennt sofort eine kleinere Zahl",
     "Sie spricht danach mit dem Betriebsrat",
     "Sie fragt erst im nächsten Jahr wieder"
    ],
    "answer": 0,
    "transcript": "Ich will nächste Woche nach mehr Gehalt fragen. — Gut. Und was sagst du? — Erst, was ich im letzten Jahr übernommen habe, dann meine Zahl. — Nenn ruhig eine, sonst nennt er eine. — Stimmt. Und wenn er Nein sagt, frage ich, was sich ändern muss, damit es später klappt.",
    "explain": "Sie plant für den Fall einer Absage die Frage, was sich ändern muss, damit es später klappt."
   },
   {
    "type": "choice",
    "audio": "das Missverständnis",
    "q": "🔊 Hör zu – was bedeutet das Wort?",
    "options": [
     "einer hat den anderen falsch verstanden",
     "einer hat den anderen absichtlich belogen",
     "beide haben denselben Fehler gemacht",
     "einer hat dem anderen nicht geantwortet"
    ],
    "answer": 0,
    "w": "das Missverständnis",
    "explain": "das Missverständnis = einer hat den anderen falsch verstanden."
   },
   {
    "type": "choice",
    "audio": "der Vorwurf",
    "q": "🔊 Hör zu – was bedeutet das Wort?",
    "options": [
     "du sagst: das war meine Schuld",
     "du sagst: das war deine Schuld",
     "du sagst: das machen wir zusammen",
     "du sagst: das habe ich verstanden"
    ],
    "answer": 1,
    "w": "der Vorwurf",
    "explain": "der Vorwurf = du sagst: das war deine Schuld."
   },
   {
    "type": "choice",
    "audio": "die Rückmeldung",
    "q": "🔊 Hör zu – was bedeutet das Wort?",
    "options": [
     "eine Frage danach, wie es geht",
     "ein Auftrag für die nächste Woche",
     "eine Antwort darauf, wie es war",
     "eine Bitte um ein kurzes Gespräch"
    ],
    "answer": 2,
    "w": "die Rückmeldung",
    "explain": "die Rückmeldung = eine Antwort darauf, wie es war."
   },
   {
    "type": "choice",
    "audio": "die Kritik",
    "q": "🔊 Hör zu – was bedeutet das Wort?",
    "options": [
     "wenn jemand sagt, was gut war",
     "wenn jemand laut über andere spricht",
     "wenn jemand eine Frage nicht beantwortet",
     "wenn jemand sagt, was schlecht war"
    ],
    "answer": 3,
    "w": "die Kritik",
    "explain": "die Kritik = wenn jemand sagt, was schlecht war."
   },
   {
    "type": "choice",
    "audio": "der Kompromiss",
    "q": "🔊 Hör zu – was bedeutet das Wort?",
    "options": [
     "jeder gibt ein bisschen nach",
     "einer setzt sich ganz durch",
     "keiner sagt noch ein Wort",
     "beide bleiben bei ihrer Meinung"
    ],
    "answer": 0,
    "w": "der Kompromiss",
    "explain": "der Kompromiss = jeder gibt ein bisschen nach."
   },
   {
    "type": "choice",
    "audio": "die Gehaltserhöhung",
    "q": "🔊 Hör zu – was bedeutet das Wort?",
    "options": [
     "ab jetzt arbeitest du mehr Stunden",
     "ab jetzt bekommst du mehr Geld",
     "ab jetzt bekommst du mehr Urlaub",
     "ab jetzt zahlst du weniger Steuern"
    ],
    "answer": 1,
    "w": "die Gehaltserhöhung",
    "explain": "die Gehaltserhöhung = ab jetzt bekommst du mehr Geld."
   },
   {
    "type": "choice",
    "audio": "die Entschuldigung",
    "q": "🔊 Hör zu – was bedeutet das Wort?",
    "options": [
     "du sagst, dass es nicht stimmt",
     "du sagst, dass du später kommst",
     "du sagst, dass es dir leidtut",
     "du sagst, dass du recht hattest"
    ],
    "answer": 2,
    "w": "die Entschuldigung",
    "explain": "die Entschuldigung = du sagst, dass es dir leidtut."
   },
   {
    "type": "choice",
    "audio": "das Versehen",
    "q": "🔊 Hör zu – was bedeutet das Wort?",
    "options": [
     "es ist mit voller Absicht passiert",
     "es ist noch gar nicht passiert",
     "es ist zum zweiten Mal passiert",
     "es ist ohne Absicht passiert"
    ],
    "answer": 3,
    "w": "das Versehen",
    "explain": "das Versehen = es ist ohne Absicht passiert."
   },
   {
    "type": "choice",
    "audio": "die Überforderung",
    "q": "🔊 Hör zu – was bedeutet das Wort?",
    "options": [
     "es ist einfach zu viel",
     "es ist einfach zu wenig",
     "es ist viel zu langweilig",
     "es ist alles gut geschafft"
    ],
    "answer": 0,
    "w": "die Überforderung",
    "explain": "die Überforderung = es ist einfach zu viel."
   },
   {
    "type": "choice",
    "audio": "der Vorgesetzte",
    "q": "🔊 Hör zu – was bedeutet das Wort?",
    "options": [
     "die Person neben dir in der Schicht",
     "die Person über dir im Betrieb",
     "die Person vor dir an der Maschine",
     "die Person aus dem anderen Betrieb"
    ],
    "answer": 1,
    "w": "der Vorgesetzte",
    "explain": "der Vorgesetzte = die Person über dir im Betrieb."
   },
   {
    "type": "choice",
    "audio": "das Vieraugengespräch",
    "q": "🔊 Hör zu – was bedeutet das Wort?",
    "options": [
     "ein Gespräch vor der ganzen Gruppe",
     "ein Gespräch mit vier Kollegen",
     "ein Gespräch nur zu zweit",
     "ein Gespräch am Telefon abends"
    ],
    "answer": 2,
    "w": "das Vieraugengespräch",
    "explain": "das Vieraugengespräch = ein Gespräch nur zu zweit."
   },
   {
    "type": "choice",
    "audio": "die Wertschätzung",
    "q": "🔊 Hör zu – was bedeutet das Wort?",
    "options": [
     "man zeigt dir, wie es geht",
     "man sagt dir, was du falsch machst",
     "man rechnet dir dein Geld aus",
     "man zeigt dir, dass du zählst"
    ],
    "answer": 3,
    "w": "die Wertschätzung",
    "explain": "die Wertschätzung = man zeigt dir, dass du zählst."
   },
   {
    "type": "choice",
    "audio": "der Konflikt",
    "q": "🔊 Hör zu – was bedeutet das Wort?",
    "options": [
     "zwei wollen etwas ganz Verschiedenes",
     "zwei wollen genau dasselbe erreichen",
     "zwei arbeiten still nebeneinander her",
     "zwei reden über dieselbe Sache"
    ],
    "answer": 0,
    "w": "der Konflikt",
    "explain": "der Konflikt = zwei wollen etwas ganz Verschiedenes."
   },
   {
    "type": "choice",
    "audio": "die Grenze",
    "q": "🔊 Hör zu – was bedeutet das Wort?",
    "options": [
     "hier fängt deine Arbeit an",
     "hier ist bei dir Schluss",
     "hier steht dein Name im Plan",
     "hier endet die Schicht des anderen"
    ],
    "answer": 1,
    "w": "die Grenze",
    "explain": "die Grenze = hier ist bei dir Schluss."
   },
   {
    "type": "choice",
    "audio": "ansprechen",
    "q": "🔊 Hör zu – was bedeutet das Wort?",
    "options": [
     "etwas still für sich behalten",
     "etwas laut vor allen wiederholen",
     "etwas offen zur Sprache bringen",
     "etwas schriftlich beim Chef melden"
    ],
    "answer": 2,
    "w": "ansprechen",
    "explain": "ansprechen = etwas offen zur Sprache bringen."
   },
   {
    "type": "choice",
    "audio": "sich rechtfertigen",
    "q": "🔊 Hör zu – was bedeutet das Wort?",
    "options": [
     "zugeben, dass du falsch gelegen hast",
     "fragen, warum der andere so handelt",
     "schweigen, obwohl du recht hast",
     "erklären, warum du so gehandelt hast"
    ],
    "answer": 3,
    "w": "sich rechtfertigen",
    "explain": "sich rechtfertigen = erklären, warum du so gehandelt hast."
   }
  ]
 },
 {
  "id": "hotel",
  "title": "Arbeiten im Hotel",
  "level": "B1",
  "emoji": "🎧",
  "words": [
   {
    "de": "die Rezeption",
    "info": "dort meldet man sich zuerst",
    "emoji": "🛎️"
   },
   {
    "de": "die Anreise",
    "info": "der Tag, an dem man ankommt",
    "emoji": "🧳"
   },
   {
    "de": "die Abreise",
    "info": "der Tag, an dem man geht",
    "emoji": "🚪"
   },
   {
    "de": "die Zimmerkategorie",
    "info": "wie groß und wie gut",
    "emoji": "🛏️"
   },
   {
    "de": "die Halbpension",
    "info": "Frühstück und Abendessen sind dabei",
    "emoji": "🍽️"
   },
   {
    "de": "das Frühstücksbuffet",
    "info": "dort holt man sich alles selbst",
    "emoji": "🥐"
   },
   {
    "de": "die Beschwerde",
    "info": "man sagt, was nicht gut war",
    "emoji": "😠"
   },
   {
    "de": "die Zimmerreinigung",
    "info": "sauber machen und Handtücher wechseln",
    "emoji": "🧹"
   },
   {
    "de": "die Rechnung",
    "info": "das Papier mit allen Kosten",
    "emoji": "🧾"
   },
   {
    "de": "der Gepäckraum",
    "info": "dort stehen die Koffer bis später",
    "emoji": "🎒"
   },
   {
    "de": "die Zimmerkarte",
    "info": "damit geht die Tür auf",
    "emoji": "🔑"
   },
   {
    "de": "der Meldeschein",
    "info": "das Blatt mit Namen und Anschrift",
    "emoji": "📝"
   },
   {
    "de": "der Aufenthalt",
    "info": "die ganze Zeit im Hotel",
    "emoji": "📆"
   },
   {
    "de": "ausgebucht",
    "info": "kein Zimmer ist mehr frei",
    "emoji": "🚫"
   },
   {
    "de": "die Stornierung",
    "info": "man sagt die Buchung wieder ab",
    "emoji": "❌"
   },
   {
    "de": "der Weckruf",
    "info": "das Telefon klingelt am Morgen",
    "emoji": "⏰"
   }
  ],
  "exercises": [
   {
    "type": "listen",
    "label": "📢 Durchsage im Frühstücksraum",
    "audioUrl": "https://d8j0ntlcm91z4.cloudfront.net/user_38tIQPWpEsaUmk18tYN8mskaaAF/hf_20260826_074936_982229f0-e23d-486e-aea6-1eb74e3900d1.mp3",
    "q": "Warum endet das Frühstück heute früher?",
    "options": [
     "Im Saal fängt eine Tagung an",
     "Die Zimmer werden früher gereinigt",
     "Das Hotel ist heute ganz ausgebucht",
     "Ein Teil vom Team fehlt heute früh"
    ],
    "answer": 0,
    "transcript": "Guten Morgen, eine kurze Durchsage für unsere Gäste. Das Frühstück gibt es heute nur bis halb zehn, weil im Saal eine Tagung beginnt. Wer später aufsteht, bekommt an der Rezeption ein belegtes Brötchen und einen Kaffee. Die Zimmer werden ab elf Uhr gereinigt. Bitte hängen Sie das Schild an die Tür, wenn Sie noch schlafen möchten.",
    "explain": "In der Durchsage heißt es, im Saal beginnt eine Tagung, deshalb endet das Frühstück früher."
   },
   {
    "type": "listen",
    "label": "📞 Mailbox: Das Zimmer wird getauscht",
    "audioUrl": "https://d8j0ntlcm91z4.cloudfront.net/user_38tIQPWpEsaUmk18tYN8mskaaAF/hf_20260826_074936_424a63fc-f092-4f79-ab47-269adbe81d40.mp3",
    "q": "Was bietet das Hotel der Frau an?",
    "options": [
     "Ein größeres Zimmer ohne mehr Kosten",
     "Ein Zimmer zum Hof mit neuer Heizung",
     "Eine Nacht in einem anderen Hotel",
     "Ein Frühstück ohne Kosten am Morgen"
    ],
    "answer": 0,
    "transcript": "Guten Tag, Frau Sadiku, Hotel Lindenhof am Markt. Sie haben bei uns ein Zimmer zum Hof gebucht. Leider ist eine Heizung kaputt. Wir können Ihnen für die gleiche Nacht ein größeres Zimmer zur Straße geben, ohne Zuschlag. Das Frühstück beginnt bei uns schon um halb sieben. Rufen Sie bitte kurz zurück, damit wir das eintragen können.",
    "explain": "Sie bekommt ein größeres Zimmer zur Straße, und zwar ohne Zuschlag, also ohne höheren Preis."
   },
   {
    "type": "listen",
    "label": "🛎️ An der Rezeption: Abreise",
    "audioUrl": "https://d8j0ntlcm91z4.cloudfront.net/user_38tIQPWpEsaUmk18tYN8mskaaAF/hf_20260826_075151_99102d90-841d-4cf9-b4cd-b94a6c4aef8c.mp3",
    "q": "Was streicht die Rezeption von der Rechnung?",
    "options": [
     "Die Getränke aus der Minibar kommen weg",
     "Das Frühstück vom letzten Tag kommt weg",
     "Der Preis für die zweite Nacht wird kleiner",
     "Die Reinigung vom Zimmer wird nicht gezählt"
    ],
    "answer": 0,
    "transcript": "Guten Morgen, ich möchte abreisen. Zimmer zweihundertvier. — Einen Moment, hier ist Ihre Rechnung. Die Getränke aus der Minibar sind mit drauf. — Ich habe nichts genommen. — Dann nehme ich das raus, kein Problem. — Und kann mein Koffer noch bis nachmittags hierbleiben? — Ja, stellen Sie ihn in den Gepäckraum links neben dem Aufzug.",
    "explain": "Der Gast hat nichts aus der Minibar genommen, deshalb nimmt die Frau die Getränke von der Rechnung."
   },
   {
    "type": "listen",
    "label": "☕ Privat: Beschwerde von Zimmer drei",
    "audioUrl": "https://d8j0ntlcm91z4.cloudfront.net/user_38tIQPWpEsaUmk18tYN8mskaaAF/hf_20260826_075150_eda09474-9a5b-4703-91ed-de3637d26bc7.mp3",
    "q": "Was bekommt der Gast wegen der Beschwerde?",
    "options": [
     "Am letzten Abend ein Essen ohne Kosten",
     "Für die letzte Nacht ein größeres Zimmer",
     "Am nächsten Morgen ein Frühstück umsonst",
     "Für den ganzen Aufenthalt einen kleineren Preis"
    ],
    "answer": 0,
    "transcript": "Und, ruhige Schicht? — Von wegen. Der Gast aus dem dritten Stock hat sich beschwert, sein Zimmer war um vier noch nicht gemacht. — Wir waren doch nur zu zweit. — Genau das habe ich ihm gesagt. Er bekommt jetzt am letzten Abend ein Essen umsonst. — Und morgen? — Morgen sind wir voll, alle Zimmer sind ausgebucht.",
    "explain": "Sie sagt, der Gast bekommt am letzten Abend ein Essen umsonst, also ohne zu bezahlen."
   },
   {
    "type": "choice",
    "audio": "die Rezeption",
    "q": "🔊 Hör zu – was bedeutet das Wort?",
    "options": [
     "dort meldet man sich zuerst",
     "dort holt man das Frühstück",
     "dort wartet man auf den Aufzug",
     "dort stellt man den Koffer ab"
    ],
    "answer": 0,
    "w": "die Rezeption",
    "explain": "die Rezeption = dort meldet man sich zuerst."
   },
   {
    "type": "choice",
    "audio": "die Anreise",
    "q": "🔊 Hör zu – was bedeutet das Wort?",
    "options": [
     "der Tag, an dem man wieder fährt",
     "der Tag, an dem man ankommt",
     "der Weg vom Bahnhof zum Hotel",
     "die Zeit für das Einräumen der Sachen"
    ],
    "answer": 1,
    "w": "die Anreise",
    "explain": "die Anreise = der Tag, an dem man ankommt."
   },
   {
    "type": "choice",
    "audio": "die Abreise",
    "q": "🔊 Hör zu – was bedeutet das Wort?",
    "options": [
     "der Tag, an dem man ankommt",
     "der Weg zurück zum Bahnhof",
     "der Tag, an dem man geht",
     "die Zeit für die Reinigung"
    ],
    "answer": 2,
    "w": "die Abreise",
    "explain": "die Abreise = der Tag, an dem man geht."
   },
   {
    "type": "choice",
    "audio": "die Zimmerkategorie",
    "q": "🔊 Hör zu – was bedeutet das Wort?",
    "options": [
     "wo genau es liegt",
     "wie viel es kostet",
     "wie viele darin schlafen",
     "wie groß und wie gut"
    ],
    "answer": 3,
    "w": "die Zimmerkategorie",
    "explain": "die Zimmerkategorie = wie groß und wie gut."
   },
   {
    "type": "choice",
    "audio": "die Halbpension",
    "q": "🔊 Hör zu – was bedeutet das Wort?",
    "options": [
     "Frühstück und Abendessen sind dabei",
     "nur das Frühstück ist dabei",
     "alle drei Mahlzeiten sind dabei",
     "die Getränke am Abend sind dabei"
    ],
    "answer": 0,
    "w": "die Halbpension",
    "explain": "die Halbpension = Frühstück und Abendessen sind dabei."
   },
   {
    "type": "choice",
    "audio": "das Frühstücksbuffet",
    "q": "🔊 Hör zu – was bedeutet das Wort?",
    "options": [
     "dort bringt man das Geschirr hin",
     "dort holt man sich alles selbst",
     "dort bestellt man am Tisch etwas",
     "dort bezahlt man das Frühstück"
    ],
    "answer": 1,
    "w": "das Frühstücksbuffet",
    "explain": "das Frühstücksbuffet = dort holt man sich alles selbst."
   },
   {
    "type": "choice",
    "audio": "die Beschwerde",
    "q": "🔊 Hör zu – was bedeutet das Wort?",
    "options": [
     "man fragt, was etwas kostet",
     "man bestellt noch etwas dazu",
     "man sagt, was nicht gut war",
     "man sagt die Buchung wieder ab"
    ],
    "answer": 2,
    "w": "die Beschwerde",
    "explain": "die Beschwerde = man sagt, was nicht gut war."
   },
   {
    "type": "choice",
    "audio": "die Zimmerreinigung",
    "q": "🔊 Hör zu – was bedeutet das Wort?",
    "options": [
     "die Wände neu streichen lassen",
     "die Betten am Abend nur aufdecken",
     "die Schlüssel im Haus neu verteilen",
     "sauber machen und Handtücher wechseln"
    ],
    "answer": 3,
    "w": "die Zimmerreinigung",
    "explain": "die Zimmerreinigung = sauber machen und Handtücher wechseln."
   },
   {
    "type": "choice",
    "audio": "die Rechnung",
    "q": "🔊 Hör zu – was bedeutet das Wort?",
    "options": [
     "das Papier mit allen Kosten",
     "das Papier mit den Zeiten",
     "das Blatt mit Namen und Anschrift",
     "der Zettel mit der Zimmernummer"
    ],
    "answer": 0,
    "w": "die Rechnung",
    "explain": "die Rechnung = das Papier mit allen Kosten."
   },
   {
    "type": "choice",
    "audio": "der Gepäckraum",
    "q": "🔊 Hör zu – was bedeutet das Wort?",
    "options": [
     "dort steht das Frühstück bereit",
     "dort stehen die Koffer bis später",
     "dort liegt die Wäsche vom Hotel",
     "dort warten die Gäste auf das Zimmer"
    ],
    "answer": 1,
    "w": "der Gepäckraum",
    "explain": "der Gepäckraum = dort stehen die Koffer bis später."
   },
   {
    "type": "choice",
    "audio": "die Zimmerkarte",
    "q": "🔊 Hör zu – was bedeutet das Wort?",
    "options": [
     "damit bezahlt man an der Bar",
     "damit ruft man die Rezeption an",
     "damit geht die Tür auf",
     "damit meldet man sich beim Frühstück"
    ],
    "answer": 2,
    "w": "die Zimmerkarte",
    "explain": "die Zimmerkarte = damit geht die Tür auf."
   },
   {
    "type": "choice",
    "audio": "der Meldeschein",
    "q": "🔊 Hör zu – was bedeutet das Wort?",
    "options": [
     "das Blatt mit allen Kosten",
     "der Zettel für das Frühstück",
     "die Karte für die Zimmertür",
     "das Blatt mit Namen und Anschrift"
    ],
    "answer": 3,
    "w": "der Meldeschein",
    "explain": "der Meldeschein = das Blatt mit Namen und Anschrift."
   },
   {
    "type": "choice",
    "audio": "der Aufenthalt",
    "q": "🔊 Hör zu – was bedeutet das Wort?",
    "options": [
     "die ganze Zeit im Hotel",
     "die erste Nacht im Hotel",
     "der Raum neben dem Eingang",
     "die Pause zwischen zwei Reisen"
    ],
    "answer": 0,
    "w": "der Aufenthalt",
    "explain": "der Aufenthalt = die ganze Zeit im Hotel."
   },
   {
    "type": "choice",
    "audio": "ausgebucht",
    "q": "🔊 Hör zu – was bedeutet das Wort?",
    "options": [
     "kein Gast ist mehr da",
     "kein Zimmer ist mehr frei",
     "das Hotel macht gerade zu",
     "das Zimmer ist noch nicht sauber"
    ],
    "answer": 1,
    "w": "ausgebucht",
    "explain": "ausgebucht = kein Zimmer ist mehr frei."
   },
   {
    "type": "choice",
    "audio": "die Stornierung",
    "q": "🔊 Hör zu – was bedeutet das Wort?",
    "options": [
     "man schreibt die Buchung um",
     "man bezahlt die Buchung im Voraus",
     "man sagt die Buchung wieder ab",
     "man verlängert die Buchung um Tage"
    ],
    "answer": 2,
    "w": "die Stornierung",
    "explain": "die Stornierung = man sagt die Buchung wieder ab."
   },
   {
    "type": "choice",
    "audio": "der Weckruf",
    "q": "🔊 Hör zu – was bedeutet das Wort?",
    "options": [
     "das Zimmer wird am Morgen gemacht",
     "das Frühstück kommt aufs Zimmer",
     "die Rezeption bringt die Rechnung",
     "das Telefon klingelt am Morgen"
    ],
    "answer": 3,
    "w": "der Weckruf",
    "explain": "der Weckruf = das Telefon klingelt am Morgen."
   }
  ]
 },
 {
  "id": "ingenieur",
  "title": "Im technischen Büro",
  "level": "B1",
  "emoji": "🎧",
  "words": [
   {
    "de": "der Entwurf",
    "info": "erste Fassung von der Zeichnung",
    "emoji": "✏️"
   },
   {
    "de": "die Berechnung",
    "info": "hier prüfst du die Zahlen",
    "emoji": "🧮"
   },
   {
    "de": "die Abstimmung",
    "info": "gemeinsam eine Sache klären",
    "emoji": "🗣️"
   },
   {
    "de": "der Änderungswunsch",
    "info": "der Kunde will etwas anders",
    "emoji": "🔀"
   },
   {
    "de": "der Abgabetermin",
    "info": "Tag, an dem es fertig ist",
    "emoji": "📅"
   },
   {
    "de": "der Prüfbericht",
    "info": "Papier über das Ergebnis der Prüfung",
    "emoji": "📄"
   },
   {
    "de": "die Freigabe",
    "info": "jetzt darf gebaut werden",
    "emoji": "✅"
   },
   {
    "de": "der Baustellentermin",
    "info": "Treffen dort, wo gebaut wird",
    "emoji": "🏗️"
   },
   {
    "de": "die Zeichnung",
    "info": "Bild mit allen Maßen",
    "emoji": "📐"
   },
   {
    "de": "das Maß",
    "info": "wie lang oder breit etwas ist",
    "emoji": "📏"
   },
   {
    "de": "die Toleranz",
    "info": "kleine Abweichung ist erlaubt",
    "emoji": "↔️"
   },
   {
    "de": "das Aufmaß",
    "info": "vor Ort genau nachmessen",
    "emoji": "🔍"
   },
   {
    "de": "der Nachtrag",
    "info": "Arbeit kommt später dazu, gegen Geld",
    "emoji": "➕"
   },
   {
    "de": "der Auftraggeber",
    "info": "er bestellt und bezahlt die Arbeit",
    "emoji": "🤵"
   },
   {
    "de": "die Stellungnahme",
    "info": "was du dazu schriftlich sagst",
    "emoji": "✍️"
   },
   {
    "de": "der Vorbehalt",
    "info": "Zustimmung nur unter einer Bedingung",
    "emoji": "⚖️"
   }
  ],
  "exercises": [
   {
    "type": "listen",
    "label": "📢 Ansage vor der Begehung",
    "audioUrl": "https://d8j0ntlcm91z4.cloudfront.net/user_38tIQPWpEsaUmk18tYN8mskaaAF/hf_20260826_075151_e84b5184-d5e4-4e3f-b1fe-89d26d780d73.mp3",
    "q": "Was braucht man, um auf das Gelände zu dürfen?",
    "options": [
     "Helm und Weste vom Container am Eingang",
     "Eine Freigabe vom Bauleiter der Baustelle",
     "Einen Ausweis und den Termin am Morgen",
     "Feste Schuhe und einen Platz auf der Liste"
    ],
    "answer": 0,
    "transcript": "Guten Morgen, eine Ansage für alle Besucher der Baustelle. Bitte holen Sie sich am Container Helm und Weste ab, ohne die kommen Sie nicht auf das Gelände. Die Begehung beginnt um neun Uhr am hinteren Bauteil. Der Kran läuft heute den ganzen Tag, bleiben Sie bitte auf den gelben Wegen. Fragen zur Freigabe sammeln wir am Ende.",
    "explain": "Es heißt, ohne Helm und Weste vom Container kommt niemand auf das Gelände."
   },
   {
    "type": "listen",
    "label": "📞 Mailbox: Der Prüfbericht ist da",
    "audioUrl": "https://d8j0ntlcm91z4.cloudfront.net/user_38tIQPWpEsaUmk18tYN8mskaaAF/hf_20260826_075150_c9a9c624-6f3b-4b58-94db-a644abd68c28.mp3",
    "q": "Was beanstandet der Prüfer?",
    "options": [
     "Zwei Maße an der Treppe sind ihm zu knapp",
     "Der ganze Entwurf für die Halle ist ihm zu knapp",
     "Die Berechnung zur Treppe fehlt in den Unterlagen",
     "Der Abgabetermin am Freitag ist ihm viel zu früh"
    ],
    "answer": 0,
    "transcript": "Frau Hoffmann, Bergmann hier vom Büro Steinbach. Der Prüfbericht zur Halle ist gekommen, im Großen und Ganzen ist alles in Ordnung. Zwei Maße bei der Treppe hält der Prüfer aber für zu knapp. Ich rechne das heute nach und schicke Ihnen morgen früh die Stellungnahme. Den Abgabetermin am Freitag halten wir trotzdem. Rufen Sie mich bitte zurück, wenn Sie das anders sehen.",
    "explain": "Er sagt, sonst sei alles in Ordnung, nur zwei Maße bei der Treppe hält der Prüfer für zu knapp."
   },
   {
    "type": "listen",
    "label": "🪟 Am Schalter: Zeichnungen abgeben",
    "audioUrl": "https://d8j0ntlcm91z4.cloudfront.net/user_38tIQPWpEsaUmk18tYN8mskaaAF/hf_20260826_075151_9e1f61ad-de79-4428-9c9e-7391f5ea45d4.mp3",
    "q": "Warum kann die Freigabe heute nicht erteilt werden?",
    "options": [
     "Der zuständige Kollege ist erst ab Dienstag da",
     "Die geänderten Zeichnungen sind nicht vollständig",
     "Die Nummer vom Vorgang fehlt auf dem Zettel",
     "Der Eingang wurde noch nicht unterschrieben"
    ],
    "answer": 0,
    "transcript": "Guten Tag, ich bringe die geänderten Zeichnungen für die Halle. — Haben Sie die Nummer vom Vorgang? — Ja, hier auf dem Zettel. — Danke. Der Kollege ist erst ab Dienstag wieder da. — Wir brauchen die Freigabe aber diese Woche. — Dann geben Sie es mir mit Vorbehalt, ich lege es ihm oben auf. Unterschreiben Sie hier bitte den Eingang.",
    "explain": "Der Mann am Schalter sagt, der zuständige Kollege ist erst ab Dienstag wieder im Haus."
   },
   {
    "type": "listen",
    "label": "☕ Privat: Schon wieder eine Änderung",
    "audioUrl": "https://d8j0ntlcm91z4.cloudfront.net/user_38tIQPWpEsaUmk18tYN8mskaaAF/hf_20260826_075150_95e9749e-0cd0-417a-a4b9-8fb85480227a.mp3",
    "q": "Warum schreibt er die Änderung als Nachtrag auf?",
    "options": [
     "Damit die zusätzliche Arbeit auch bezahlt wird",
     "Damit der Abgabetermin nach hinten geschoben wird",
     "Damit der Kunde danach nichts mehr ändern kann",
     "Damit der Chef von der Änderung endlich erfährt"
    ],
    "answer": 0,
    "transcript": "Wie war der Termin beim Kunden? — Zäh. Drei Stunden, und am Ende kam wieder ein Änderungswunsch. — Der wievielte? — Der vierte. Jedes Mal heißt es, nur eine Kleinigkeit. — Und der Abgabetermin? — Steht. Da rührt sich nichts. Ich schreibe das jetzt als Nachtrag auf, sonst arbeiten wir das umsonst. — Klingt vernünftig.",
    "explain": "Er sagt selbst: sonst arbeiten sie umsonst, also soll die zusätzliche Arbeit bezahlt werden."
   },
   {
    "type": "choice",
    "audio": "der Entwurf",
    "q": "🔊 Hör zu – was bedeutet das Wort?",
    "options": [
     "erste Fassung von der Zeichnung",
     "letzte Fassung nach der Prüfung",
     "kurze Notiz für den Kunden",
     "grobe Liste mit allen Kosten"
    ],
    "answer": 0,
    "w": "der Entwurf",
    "explain": "der Entwurf = erste Fassung von der Zeichnung."
   },
   {
    "type": "choice",
    "audio": "die Berechnung",
    "q": "🔊 Hör zu – was bedeutet das Wort?",
    "options": [
     "hier zeichnest du die Teile",
     "hier prüfst du die Zahlen",
     "hier misst du auf der Baustelle",
     "hier sprichst du mit dem Kunden"
    ],
    "answer": 1,
    "w": "die Berechnung",
    "explain": "die Berechnung = hier prüfst du die Zahlen."
   },
   {
    "type": "choice",
    "audio": "die Abstimmung",
    "q": "🔊 Hör zu – was bedeutet das Wort?",
    "options": [
     "allein eine Aufgabe erledigen",
     "schriftlich eine Frage stellen",
     "gemeinsam eine Sache klären",
     "später eine Antwort schicken"
    ],
    "answer": 2,
    "w": "die Abstimmung",
    "explain": "die Abstimmung = gemeinsam eine Sache klären."
   },
   {
    "type": "choice",
    "audio": "der Änderungswunsch",
    "q": "🔊 Hör zu – was bedeutet das Wort?",
    "options": [
     "der Kunde will früher fertig werden",
     "der Prüfer will neue Unterlagen sehen",
     "der Chef will einen anderen Termin",
     "der Kunde will etwas anders"
    ],
    "answer": 3,
    "w": "der Änderungswunsch",
    "explain": "der Änderungswunsch = der Kunde will etwas anders."
   },
   {
    "type": "choice",
    "audio": "der Abgabetermin",
    "q": "🔊 Hör zu – was bedeutet das Wort?",
    "options": [
     "Tag, an dem es fertig ist",
     "Tag, an dem es begonnen hat",
     "Tag, an dem alle sich treffen",
     "Tag, an dem geprüft wird"
    ],
    "answer": 0,
    "w": "der Abgabetermin",
    "explain": "der Abgabetermin = Tag, an dem es fertig ist."
   },
   {
    "type": "choice",
    "audio": "der Prüfbericht",
    "q": "🔊 Hör zu – was bedeutet das Wort?",
    "options": [
     "Papier mit den Maßen der Halle",
     "Papier über das Ergebnis der Prüfung",
     "Papier über die geleisteten Stunden",
     "Papier mit den Wünschen des Kunden"
    ],
    "answer": 1,
    "w": "der Prüfbericht",
    "explain": "der Prüfbericht = Papier über das Ergebnis der Prüfung."
   },
   {
    "type": "choice",
    "audio": "die Freigabe",
    "q": "🔊 Hör zu – was bedeutet das Wort?",
    "options": [
     "jetzt wird noch einmal geprüft",
     "jetzt wird der Preis genannt",
     "jetzt darf gebaut werden",
     "jetzt kommt der nächste Entwurf"
    ],
    "answer": 2,
    "w": "die Freigabe",
    "explain": "die Freigabe = jetzt darf gebaut werden."
   },
   {
    "type": "choice",
    "audio": "der Baustellentermin",
    "q": "🔊 Hör zu – was bedeutet das Wort?",
    "options": [
     "Treffen dort, wo gezeichnet wird",
     "Termin bei der Behörde im Ort",
     "Termin im Büro mit dem Prüfer",
     "Treffen dort, wo gebaut wird"
    ],
    "answer": 3,
    "w": "der Baustellentermin",
    "explain": "der Baustellentermin = Treffen dort, wo gebaut wird."
   },
   {
    "type": "choice",
    "audio": "die Zeichnung",
    "q": "🔊 Hör zu – was bedeutet das Wort?",
    "options": [
     "Bild mit allen Maßen",
     "Text mit allen Fragen",
     "Liste mit allen Kosten",
     "Foto von der ganzen Halle"
    ],
    "answer": 0,
    "w": "die Zeichnung",
    "explain": "die Zeichnung = Bild mit allen Maßen."
   },
   {
    "type": "choice",
    "audio": "das Maß",
    "q": "🔊 Hör zu – was bedeutet das Wort?",
    "options": [
     "wie schwer oder teuer etwas ist",
     "wie lang oder breit etwas ist",
     "wie alt oder neu etwas ist",
     "wie fest oder weich etwas ist"
    ],
    "answer": 1,
    "w": "das Maß",
    "explain": "das Maß = wie lang oder breit etwas ist."
   },
   {
    "type": "choice",
    "audio": "die Toleranz",
    "q": "🔊 Hör zu – was bedeutet das Wort?",
    "options": [
     "jede Abweichung ist verboten",
     "kleine Änderung kostet mehr",
     "kleine Abweichung ist erlaubt",
     "große Abweichung wird gemeldet"
    ],
    "answer": 2,
    "w": "die Toleranz",
    "explain": "die Toleranz = kleine Abweichung ist erlaubt."
   },
   {
    "type": "choice",
    "audio": "das Aufmaß",
    "q": "🔊 Hör zu – was bedeutet das Wort?",
    "options": [
     "im Büro alles neu zeichnen",
     "vor Ort kurz nachfragen",
     "im Büro die Zahlen nachrechnen",
     "vor Ort genau nachmessen"
    ],
    "answer": 3,
    "w": "das Aufmaß",
    "explain": "das Aufmaß = vor Ort genau nachmessen."
   },
   {
    "type": "choice",
    "audio": "der Nachtrag",
    "q": "🔊 Hör zu – was bedeutet das Wort?",
    "options": [
     "Arbeit kommt später dazu, gegen Geld",
     "Arbeit fällt später weg, ohne Kosten",
     "Termin kommt später dazu, ohne Grund",
     "Bericht kommt später dazu, mit Bildern"
    ],
    "answer": 0,
    "w": "der Nachtrag",
    "explain": "der Nachtrag = Arbeit kommt später dazu, gegen Geld."
   },
   {
    "type": "choice",
    "audio": "der Auftraggeber",
    "q": "🔊 Hör zu – was bedeutet das Wort?",
    "options": [
     "er prüft und meldet die Fehler",
     "er bestellt und bezahlt die Arbeit",
     "er plant und zeichnet die Halle",
     "er führt und leitet die Baustelle"
    ],
    "answer": 1,
    "w": "der Auftraggeber",
    "explain": "der Auftraggeber = er bestellt und bezahlt die Arbeit."
   },
   {
    "type": "choice",
    "audio": "die Stellungnahme",
    "q": "🔊 Hör zu – was bedeutet das Wort?",
    "options": [
     "was du dazu noch einmal berechnest",
     "was du dafür in Rechnung stellst",
     "was du dazu schriftlich sagst",
     "was du dazu am Telefon fragst"
    ],
    "answer": 2,
    "w": "die Stellungnahme",
    "explain": "die Stellungnahme = was du dazu schriftlich sagst."
   },
   {
    "type": "choice",
    "audio": "der Vorbehalt",
    "q": "🔊 Hör zu – was bedeutet das Wort?",
    "options": [
     "Absage ohne einen weiteren Grund",
     "Zustimmung ohne jede weitere Frage",
     "Nachfrage vor der nächsten Prüfung",
     "Zustimmung nur unter einer Bedingung"
    ],
    "answer": 3,
    "w": "der Vorbehalt",
    "explain": "der Vorbehalt = Zustimmung nur unter einer Bedingung."
   }
  ]
 },
 {
  "id": "it",
  "title": "IT im Büroalltag",
  "level": "B1",
  "emoji": "🎧",
  "words": [
   {
    "de": "das Ticket",
    "info": "eine Meldung mit eigener Nummer",
    "emoji": "🎫"
   },
   {
    "de": "der Zugang",
    "info": "Erlaubnis, etwas zu öffnen",
    "emoji": "🔑"
   },
   {
    "de": "das Kennwort",
    "info": "geheime Zeichen beim Anmelden",
    "emoji": "🔒"
   },
   {
    "de": "zurücksetzen",
    "info": "wieder auf den Anfang stellen",
    "emoji": "🔄"
   },
   {
    "de": "der Ausfall",
    "info": "es geht plötzlich nichts mehr",
    "emoji": "🚫"
   },
   {
    "de": "das Update",
    "info": "neue Fassung wird aufgespielt",
    "emoji": "⬆️"
   },
   {
    "de": "die Datensicherung",
    "info": "Kopie für den Notfall",
    "emoji": "💾"
   },
   {
    "de": "die Schnittstelle",
    "info": "Verbindung zwischen zwei Anwendungen",
    "emoji": "🔌"
   },
   {
    "de": "die Frist",
    "info": "bis dahin muss es fertig sein",
    "emoji": "⏳"
   },
   {
    "de": "die Freigabe",
    "info": "der Chef sagt Ja dazu",
    "emoji": "✅"
   },
   {
    "de": "die Berechtigung",
    "info": "was du sehen und ändern darfst",
    "emoji": "🛡️"
   },
   {
    "de": "der Anhang",
    "info": "Datei, die an der Nachricht hängt",
    "emoji": "📎"
   },
   {
    "de": "die Sperre",
    "info": "nichts geht mehr weiter",
    "emoji": "⛔"
   },
   {
    "de": "der Fernzugriff",
    "info": "von zu Hause auf die Arbeit",
    "emoji": "🏠"
   },
   {
    "de": "die Rückmeldung",
    "info": "kurze Antwort, wie es steht",
    "emoji": "↩️"
   },
   {
    "de": "der Ansprechpartner",
    "info": "diese Person fragst du zuerst",
    "emoji": "🧑‍💼"
   }
  ],
  "exercises": [
   {
    "type": "listen",
    "label": "📢 Ansage am Servicetelefon",
    "audioUrl": "https://d8j0ntlcm91z4.cloudfront.net/user_38tIQPWpEsaUmk18tYN8mskaaAF/hf_20260826_075407_49e3697e-77f1-4b23-a3e5-2a89ac22eebc.mp3",
    "q": "Was soll man bei einem neuen Kennwort tun?",
    "options": [
     "Es selbst im Netz ändern, ohne ein Ticket",
     "Ein Ticket schreiben und auf die Antwort warten",
     "Bis vierzehn Uhr warten und dann noch einmal anrufen",
     "Bei der Zeiterfassung im eigenen Haus nachfragen"
    ],
    "answer": 0,
    "transcript": "Willkommen bei der Servicestelle. Wegen einer Störung im Netz sind zurzeit alle Anfragen sehr zahlreich. Bitte legen Sie nicht auf. Ein wichtiger Hinweis: Der Ausfall betrifft nur die Zeiterfassung, die übrigen Anwendungen laufen normal. Wir rechnen mit einer Lösung bis vierzehn Uhr. Für ein neues Kennwort nutzen Sie bitte die Selbstbedienung im Netz und legen Sie kein Ticket an.",
    "explain": "Die Ansage sagt: für ein neues Kennwort die Selbstbedienung im Netz nutzen und kein Ticket anlegen."
   },
   {
    "type": "listen",
    "label": "📞 Mailbox: Der Zugang fehlt noch",
    "audioUrl": "https://d8j0ntlcm91z4.cloudfront.net/user_38tIQPWpEsaUmk18tYN8mskaaAF/hf_20260826_075407_40fe7f13-11f7-4b1e-b07a-4cd872d248e2.mp3",
    "q": "Warum ist der Zugang noch nicht eingerichtet?",
    "options": [
     "Weil die Freigabe von der Chefin noch fehlt",
     "Weil Frau Demir noch kein Ticket geschrieben hat",
     "Weil der Kollege ab Donnerstag im Urlaub ist",
     "Weil das Lohnprogramm gerade ausgefallen ist"
    ],
    "answer": 0,
    "transcript": "Hallo Frau Demir, hier ist Kraus von der Servicestelle. Ihr Ticket wegen dem Zugang zum Lohnprogramm ist da. Ich brauche aber noch die Freigabe von Ihrer Chefin, ohne die darf ich nichts einrichten. Schicken Sie mir die bitte kurz per Nachricht, dann mache ich das heute noch. Sonst dauert es bis nächste Woche, ab Donnerstag bin ich im Urlaub.",
    "explain": "Der Kollege sagt, ohne die Freigabe von der Chefin darf er den Zugang nicht einrichten."
   },
   {
    "type": "listen",
    "label": "🪟 Am Tresen: Der Rechner startet nicht",
    "audioUrl": "https://d8j0ntlcm91z4.cloudfront.net/user_38tIQPWpEsaUmk18tYN8mskaaAF/hf_20260826_075407_1b02992d-b36c-4cb3-8451-64e791732d9d.mp3",
    "q": "Warum muss sich der Mann keine Sorgen um seine Dateien machen?",
    "options": [
     "Weil alle Dateien in der Sicherung liegen",
     "Weil er am Freitag selbst eine Kopie gemacht hat",
     "Weil das Update die eigenen Dateien nicht anfasst",
     "Weil der Rechner am Freitag noch normal lief"
    ],
    "answer": 0,
    "transcript": "Guten Tag, mein Rechner startet nicht mehr richtig. — Haben Sie ein Ticket? — Nein, ich bin einfach runtergekommen. — Kein Problem, ich lege eins an. Wann war das letzte Mal alles in Ordnung? — Freitag. Über das Wochenende lief wohl ein Update. — Dann setze ich das zurück. Ihre Dateien sind in der Sicherung, da geht nichts verloren. Kommen Sie um sechzehn Uhr wieder.",
    "explain": "Der Kollege sagt, die Dateien sind in der Sicherung, deshalb geht beim Zurücksetzen nichts verloren."
   },
   {
    "type": "listen",
    "label": "☕ Privat: Die Frist am Freitag",
    "audioUrl": "https://d8j0ntlcm91z4.cloudfront.net/user_38tIQPWpEsaUmk18tYN8mskaaAF/hf_20260826_075408_5dbb6a5f-92ef-4821-b6fe-13a6cb104c7c.mp3",
    "q": "Was hat sich das Team wegen der Frist überlegt?",
    "options": [
     "Jeden Morgen kurz zu besprechen, wer was schafft",
     "Die Frist noch um eine ganze Woche zu schieben",
     "Den Kunden nur noch einmal am Tag anzurufen",
     "Die Schnittstelle erst nach dem Freitag zu bauen"
    ],
    "answer": 0,
    "transcript": "Und, wie war die Woche? — Frag nicht. Die Frist steht auf Freitag und die Schnittstelle läuft immer noch nicht. — Und der Kunde? — Der wartet. Zweimal am Tag ruft er an. — Könnt ihr das schieben? — Der Chef sagt nein. Wir machen jetzt jeden Morgen eine kurze Runde, wer was schafft. Mal sehen, ob das reicht.",
    "explain": "Er erzählt, sie machen jetzt jeden Morgen eine kurze Runde und klären, wer was schafft."
   },
   {
    "type": "choice",
    "audio": "das Ticket",
    "q": "🔊 Hör zu – was bedeutet das Wort?",
    "options": [
     "eine Meldung mit eigener Nummer",
     "eine Nachricht an alle Kollegen",
     "ein Zettel für den nächsten Termin",
     "ein Eintrag im Plan der Woche"
    ],
    "answer": 0,
    "w": "das Ticket",
    "explain": "das Ticket = eine Meldung mit eigener Nummer."
   },
   {
    "type": "choice",
    "audio": "der Zugang",
    "q": "🔊 Hör zu – was bedeutet das Wort?",
    "options": [
     "Anleitung, etwas zu bedienen",
     "Erlaubnis, etwas zu öffnen",
     "Einladung, etwas zu besprechen",
     "Erinnerung, etwas zu erledigen"
    ],
    "answer": 1,
    "w": "der Zugang",
    "explain": "der Zugang = Erlaubnis, etwas zu öffnen."
   },
   {
    "type": "choice",
    "audio": "das Kennwort",
    "q": "🔊 Hör zu – was bedeutet das Wort?",
    "options": [
     "feste Nummer für den Rechner",
     "kurzer Name für die Abteilung",
     "geheime Zeichen beim Anmelden",
     "eigenes Kürzel für die Post"
    ],
    "answer": 2,
    "w": "das Kennwort",
    "explain": "das Kennwort = geheime Zeichen beim Anmelden."
   },
   {
    "type": "choice",
    "audio": "zurücksetzen",
    "q": "🔊 Hör zu – was bedeutet das Wort?",
    "options": [
     "einfach noch einmal neu versuchen",
     "schnell eine zweite Kopie anlegen",
     "später in Ruhe von Hand ändern",
     "wieder auf den Anfang stellen"
    ],
    "answer": 3,
    "w": "zurücksetzen",
    "explain": "zurücksetzen = wieder auf den Anfang stellen."
   },
   {
    "type": "choice",
    "audio": "der Ausfall",
    "q": "🔊 Hör zu – was bedeutet das Wort?",
    "options": [
     "es geht plötzlich nichts mehr",
     "es geht heute etwas langsamer",
     "es fehlt nur eine einzige Anwendung",
     "es dauert bis zum Nachmittag länger"
    ],
    "answer": 0,
    "w": "der Ausfall",
    "explain": "der Ausfall = es geht plötzlich nichts mehr."
   },
   {
    "type": "choice",
    "audio": "das Update",
    "q": "🔊 Hör zu – was bedeutet das Wort?",
    "options": [
     "alte Fassung wird gelöscht",
     "neue Fassung wird aufgespielt",
     "neue Nachricht wird verschickt",
     "alle Daten werden kopiert"
    ],
    "answer": 1,
    "w": "das Update",
    "explain": "das Update = neue Fassung wird aufgespielt."
   },
   {
    "type": "choice",
    "audio": "die Datensicherung",
    "q": "🔊 Hör zu – was bedeutet das Wort?",
    "options": [
     "Sperre für fremde Leute",
     "Liste von allen Geräten",
     "Kopie für den Notfall",
     "Regel für die Kennwörter"
    ],
    "answer": 2,
    "w": "die Datensicherung",
    "explain": "die Datensicherung = Kopie für den Notfall."
   },
   {
    "type": "choice",
    "audio": "die Schnittstelle",
    "q": "🔊 Hör zu – was bedeutet das Wort?",
    "options": [
     "Fehler in einer alten Anwendung",
     "Zugang zu einer fremden Anwendung",
     "Kopie von einer großen Anwendung",
     "Verbindung zwischen zwei Anwendungen"
    ],
    "answer": 3,
    "w": "die Schnittstelle",
    "explain": "die Schnittstelle = Verbindung zwischen zwei Anwendungen."
   },
   {
    "type": "choice",
    "audio": "die Frist",
    "q": "🔊 Hör zu – was bedeutet das Wort?",
    "options": [
     "bis dahin muss es fertig sein",
     "danach fängt die Arbeit erst an",
     "so lange dauert eine Besprechung",
     "damit rechnet man die Stunden ab"
    ],
    "answer": 0,
    "w": "die Frist",
    "explain": "die Frist = bis dahin muss es fertig sein."
   },
   {
    "type": "choice",
    "audio": "die Freigabe",
    "q": "🔊 Hör zu – was bedeutet das Wort?",
    "options": [
     "der Kollege macht es später",
     "der Chef sagt Ja dazu",
     "die Abteilung fragt noch nach",
     "das Programm läuft wieder normal"
    ],
    "answer": 1,
    "w": "die Freigabe",
    "explain": "die Freigabe = der Chef sagt Ja dazu."
   },
   {
    "type": "choice",
    "audio": "die Berechtigung",
    "q": "🔊 Hör zu – was bedeutet das Wort?",
    "options": [
     "was du heute noch erledigen musst",
     "was du in das Ticket schreiben sollst",
     "was du sehen und ändern darfst",
     "was du an Geräten bekommen hast"
    ],
    "answer": 2,
    "w": "die Berechtigung",
    "explain": "die Berechtigung = was du sehen und ändern darfst."
   },
   {
    "type": "choice",
    "audio": "der Anhang",
    "q": "🔊 Hör zu – was bedeutet das Wort?",
    "options": [
     "Satz, der unter der Nachricht steht",
     "Name, der über der Nachricht steht",
     "Liste, die neben dem Rechner liegt",
     "Datei, die an der Nachricht hängt"
    ],
    "answer": 3,
    "w": "der Anhang",
    "explain": "der Anhang = Datei, die an der Nachricht hängt."
   },
   {
    "type": "choice",
    "audio": "die Sperre",
    "q": "🔊 Hör zu – was bedeutet das Wort?",
    "options": [
     "nichts geht mehr weiter",
     "alles läuft wieder normal",
     "einiges dauert etwas länger",
     "vieles wird gerade erneuert"
    ],
    "answer": 0,
    "w": "die Sperre",
    "explain": "die Sperre = nichts geht mehr weiter."
   },
   {
    "type": "choice",
    "audio": "der Fernzugriff",
    "q": "🔊 Hör zu – was bedeutet das Wort?",
    "options": [
     "von der Arbeit nach Hause telefonieren",
     "von zu Hause auf die Arbeit",
     "vom Rechner auf das Handy schauen",
     "von der Zentrale in die Abteilung"
    ],
    "answer": 1,
    "w": "der Fernzugriff",
    "explain": "der Fernzugriff = von zu Hause auf die Arbeit."
   },
   {
    "type": "choice",
    "audio": "die Rückmeldung",
    "q": "🔊 Hör zu – was bedeutet das Wort?",
    "options": [
     "lange Liste mit allen Fehlern",
     "erste Meldung über einen Ausfall",
     "kurze Antwort, wie es steht",
     "letzte Frist für eine Aufgabe"
    ],
    "answer": 2,
    "w": "die Rückmeldung",
    "explain": "die Rückmeldung = kurze Antwort, wie es steht."
   },
   {
    "type": "choice",
    "audio": "der Ansprechpartner",
    "q": "🔊 Hör zu – was bedeutet das Wort?",
    "options": [
     "diese Person prüft die Rechnung",
     "diese Person macht das Ticket zu",
     "diese Person kommt aus der Zentrale",
     "diese Person fragst du zuerst"
    ],
    "answer": 3,
    "w": "der Ansprechpartner",
    "explain": "der Ansprechpartner = diese Person fragst du zuerst."
   }
  ]
 },
 {
  "id": "kasse",
  "title": "An der Kasse",
  "level": "A2",
  "emoji": "🎧",
  "words": [
   {
    "de": "das Laufband",
    "info": "darauf legst du deine Sachen",
    "emoji": "🛒"
   },
   {
    "de": "der Warentrenner",
    "info": "der Stab zwischen zwei Einkäufen",
    "emoji": "➖"
   },
   {
    "de": "das Pfand",
    "info": "Geld zurück für die Flasche",
    "emoji": "♻️"
   },
   {
    "de": "der Pfandautomat",
    "info": "dort gibst du Flaschen ab",
    "emoji": "🔁"
   },
   {
    "de": "der Bon",
    "info": "der Zettel nach dem Bezahlen",
    "emoji": "🧾"
   },
   {
    "de": "das Wechselgeld",
    "info": "das bekommst du zurück",
    "emoji": "💶"
   },
   {
    "de": "das Kleingeld",
    "info": "die kleinen Münzen im Geldbeutel",
    "emoji": "🪙"
   },
   {
    "de": "passend",
    "info": "genau so viel, wie es kostet",
    "emoji": "🎯"
   },
   {
    "de": "die Girokarte",
    "info": "damit zahlst du ohne Bargeld",
    "emoji": "💳"
   },
   {
    "de": "die Geheimzahl",
    "info": "die vier Zahlen für die Karte",
    "emoji": "🔢"
   },
   {
    "de": "abbuchen",
    "info": "das Geld geht vom Konto",
    "emoji": "🏦"
   },
   {
    "de": "die Treuepunkte",
    "info": "die sammelst du beim Einkaufen",
    "emoji": "⭐"
   },
   {
    "de": "die Tüte",
    "info": "darin trägst du deinen Einkauf",
    "emoji": "🛍️"
   },
   {
    "de": "umtauschen",
    "info": "zurückbringen und etwas anderes nehmen",
    "emoji": "🔄"
   },
   {
    "de": "reklamieren",
    "info": "sagen, dass etwas nicht stimmt",
    "emoji": "😠"
   },
   {
    "de": "abgelaufen",
    "info": "die Zeit dafür ist vorbei",
    "emoji": "📅"
   }
  ],
  "exercises": [
   {
    "type": "listen",
    "label": "📢 Durchsage im Supermarkt",
    "audioUrl": "https://d8j0ntlcm91z4.cloudfront.net/user_38tIQPWpEsaUmk18tYN8mskaaAF/hf_20260826_062638_829e4aa0-0770-4ce0-999f-59948c629e35.mp3",
    "q": "Wann kann man keine Flaschen mehr zurückgeben?",
    "options": [
     "Ab sechs Uhr am Abend",
     "Ab achtzehn Uhr am Abend",
     "Ab halb sechs am Nachmittag",
     "Ab halb acht am Abend"
    ],
    "answer": 2,
    "transcript": "Liebe Kundinnen und Kunden, wir schließen heute schon um achtzehn Uhr, weil wir Inventur machen. Bitte kommen Sie rechtzeitig zur Kasse. Der Pfandautomat wird bereits um halb sechs abgeschaltet. Wer noch Flaschen zurückgeben möchte, geht bitte vorher hin. Die Kasse drei ist heute nur für Kunden mit wenigen Waren geöffnet. Vielen Dank für Ihr Verständnis.",
    "explain": "Der Pfandautomat wird schon um halb sechs abgeschaltet, also lange vor dem Ladenschluss."
   },
   {
    "type": "listen",
    "label": "📞 Mailbox: Die Milch war schlecht",
    "audioUrl": "https://d8j0ntlcm91z4.cloudfront.net/user_38tIQPWpEsaUmk18tYN8mskaaAF/hf_20260826_062638_7460b4be-b77b-4847-a9da-2c4c63b731c3.mp3",
    "q": "Was muss die Kundin mitbringen?",
    "options": [
     "Die Packung und den Bon",
     "Nur den Bon vom Einkauf",
     "Nur die Packung von der Milch",
     "Den Bon und ihre Girokarte"
    ],
    "answer": 1,
    "transcript": "Guten Tag, Frau Petrova, hier ist der Kundenservice vom Markt in der Bahnhofstraße. Sie haben angerufen wegen der Milch, die schon abgelaufen war. Sie bekommen das Geld selbstverständlich zurück. Bringen Sie bitte den Bon mit, ohne Bon geht es leider nicht. Die Packung selbst brauchen Sie nicht mitzubringen. Kommen Sie einfach zur Information neben der Kasse eins.",
    "explain": "Der Bon ist Pflicht, die Packung soll sie ausdrücklich nicht mitbringen."
   },
   {
    "type": "listen",
    "label": "🛒 An der Kasse: Karte oder bar",
    "audioUrl": "https://d8j0ntlcm91z4.cloudfront.net/user_38tIQPWpEsaUmk18tYN8mskaaAF/hf_20260826_062848_3b743ae2-bf87-4853-85aa-c070d247cb43.mp3",
    "q": "Warum zahlt der Kunde nicht mit Karte?",
    "options": [
     "Sein Einkauf ist zu billig dafür",
     "Das Gerät an der Kasse ist kaputt",
     "Er hat seine Karte zu Hause vergessen",
     "Er bekommt sonst keine Treuepunkte"
    ],
    "answer": 0,
    "transcript": "Möchten Sie eine Tüte? — Ja, eine kleine bitte. — Das macht dann neunzehn Euro achtzig. — Kann ich mit Karte zahlen? — Erst ab zwanzig Euro, sonst nur bar, tut mir leid. — Dann bar. — Haben Sie es passend? — Nein, ich habe nur einen großen Schein. — Kein Problem, ich habe genug Kleingeld. Sammeln Sie Treuepunkte? — Nein, danke.",
    "explain": "Die Karte geht erst ab zwanzig Euro, und sein Einkauf kostet nur neunzehn Euro achtzig."
   },
   {
    "type": "listen",
    "label": "☕ Privat: Die Kiste mit den Flaschen",
    "audioUrl": "https://d8j0ntlcm91z4.cloudfront.net/user_38tIQPWpEsaUmk18tYN8mskaaAF/hf_20260826_062848_4b320871-bb5c-4a42-b73e-a24c22af41a3.mp3",
    "q": "Was ist beim letzten Mal passiert?",
    "options": [
     "Der Automat hat die Flaschen nicht genommen",
     "Der Bon wurde im anderen Markt abgelehnt",
     "Die Kiste ist auf dem Weg umgefallen",
     "Der Bon ist im Einkaufswagen liegen geblieben"
    ],
    "answer": 3,
    "transcript": "Nimmst du die Kiste mit runter? — Klar. Der Automat war letzte Woche aber kaputt. — Ich glaube, er geht wieder. Und vergiss den Bon nicht wieder im Einkaufswagen. Beim letzten Mal waren das fast vier Euro Pfand. — Ich weiß, ich weiß. — Der Bon gilt übrigens nur in diesem Markt, im anderen nehmen sie ihn nicht.",
    "explain": "Er hat den Bon im Wagen vergessen, deshalb die Erinnerung — fast vier Euro Pfand waren weg."
   },
   {
    "type": "choice",
    "audio": "das Laufband",
    "q": "🔊 Hör zu – was bedeutet das Wort?",
    "options": [
     "darauf legst du deine Sachen",
     "darauf steht der Einkaufswagen",
     "darauf liegen die Angebote",
     "darauf klebt der Preis"
    ],
    "answer": 0,
    "w": "das Laufband",
    "explain": "das Laufband = darauf legst du deine Sachen."
   },
   {
    "type": "choice",
    "audio": "der Warentrenner",
    "q": "🔊 Hör zu – was bedeutet das Wort?",
    "options": [
     "der Griff am Einkaufswagen",
     "der Stab zwischen zwei Einkäufen",
     "das Fach unter der Kasse",
     "der Haken für die Tüten"
    ],
    "answer": 1,
    "w": "der Warentrenner",
    "explain": "der Warentrenner = der Stab zwischen zwei Einkäufen."
   },
   {
    "type": "choice",
    "audio": "das Pfand",
    "q": "🔊 Hör zu – was bedeutet das Wort?",
    "options": [
     "Geld weniger für viele Flaschen",
     "Geld extra für die Tüte",
     "Geld zurück für die Flasche",
     "Geld zurück nach einer Woche"
    ],
    "answer": 2,
    "w": "das Pfand",
    "explain": "das Pfand = Geld zurück für die Flasche."
   },
   {
    "type": "choice",
    "audio": "der Pfandautomat",
    "q": "🔊 Hör zu – was bedeutet das Wort?",
    "options": [
     "dort ziehst du eine Nummer",
     "dort holst du einen Wagen",
     "dort wiegst du dein Obst",
     "dort gibst du Flaschen ab"
    ],
    "answer": 3,
    "w": "der Pfandautomat",
    "explain": "der Pfandautomat = dort gibst du Flaschen ab."
   },
   {
    "type": "choice",
    "audio": "der Bon",
    "q": "🔊 Hör zu – was bedeutet das Wort?",
    "options": [
     "der Zettel nach dem Bezahlen",
     "der Zettel mit dem Angebot",
     "der Zettel an der Ware",
     "der Zettel für die Punkte"
    ],
    "answer": 0,
    "w": "der Bon",
    "explain": "der Bon = der Zettel nach dem Bezahlen."
   },
   {
    "type": "choice",
    "audio": "das Wechselgeld",
    "q": "🔊 Hör zu – was bedeutet das Wort?",
    "options": [
     "das legst du oben drauf",
     "das bekommst du zurück",
     "das sparst du beim Angebot",
     "das zahlst du für die Tüte"
    ],
    "answer": 1,
    "w": "das Wechselgeld",
    "explain": "das Wechselgeld = das bekommst du zurück."
   },
   {
    "type": "choice",
    "audio": "das Kleingeld",
    "q": "🔊 Hör zu – was bedeutet das Wort?",
    "options": [
     "die großen Scheine im Geldbeutel",
     "die letzten Cent auf dem Konto",
     "die kleinen Münzen im Geldbeutel",
     "die Punkte auf deiner Karte"
    ],
    "answer": 2,
    "w": "das Kleingeld",
    "explain": "das Kleingeld = die kleinen Münzen im Geldbeutel."
   },
   {
    "type": "choice",
    "audio": "passend",
    "q": "🔊 Hör zu – was bedeutet das Wort?",
    "options": [
     "ein bisschen mehr, als es kostet",
     "viel weniger, als es kostet",
     "genau so viel, wie du hast",
     "genau so viel, wie es kostet"
    ],
    "answer": 3,
    "w": "passend",
    "explain": "passend = genau so viel, wie es kostet."
   },
   {
    "type": "choice",
    "audio": "die Girokarte",
    "q": "🔊 Hör zu – was bedeutet das Wort?",
    "options": [
     "damit zahlst du ohne Bargeld",
     "damit sammelst du deine Punkte",
     "damit öffnest du den Wagen",
     "damit bekommst du dein Pfand"
    ],
    "answer": 0,
    "w": "die Girokarte",
    "explain": "die Girokarte = damit zahlst du ohne Bargeld."
   },
   {
    "type": "choice",
    "audio": "die Geheimzahl",
    "q": "🔊 Hör zu – was bedeutet das Wort?",
    "options": [
     "die Zahl unter dem Strichcode",
     "die vier Zahlen für die Karte",
     "die Nummer auf deinem Bon",
     "die Zahl auf dem Preisschild"
    ],
    "answer": 1,
    "w": "die Geheimzahl",
    "explain": "die Geheimzahl = die vier Zahlen für die Karte."
   },
   {
    "type": "choice",
    "audio": "abbuchen",
    "q": "🔊 Hör zu – was bedeutet das Wort?",
    "options": [
     "das Geld kommt aufs Konto",
     "das Geld bleibt in der Kasse",
     "das Geld geht vom Konto",
     "das Geld liegt im Automaten"
    ],
    "answer": 2,
    "w": "abbuchen",
    "explain": "abbuchen = das Geld geht vom Konto."
   },
   {
    "type": "choice",
    "audio": "die Treuepunkte",
    "q": "🔊 Hör zu – was bedeutet das Wort?",
    "options": [
     "die zahlst du bei jedem Einkauf",
     "die stehen auf jeder Flasche",
     "die brauchst du für den Wagen",
     "die sammelst du beim Einkaufen"
    ],
    "answer": 3,
    "w": "die Treuepunkte",
    "explain": "die Treuepunkte = die sammelst du beim Einkaufen."
   },
   {
    "type": "choice",
    "audio": "die Tüte",
    "q": "🔊 Hör zu – was bedeutet das Wort?",
    "options": [
     "darin trägst du deinen Einkauf",
     "darin liegen die leeren Flaschen",
     "darin steckt dein ganzes Geld",
     "darin schiebst du die Waren"
    ],
    "answer": 0,
    "w": "die Tüte",
    "explain": "die Tüte = darin trägst du deinen Einkauf."
   },
   {
    "type": "choice",
    "audio": "umtauschen",
    "q": "🔊 Hör zu – was bedeutet das Wort?",
    "options": [
     "hinbringen und das Geld holen",
     "zurückbringen und etwas anderes nehmen",
     "aufmachen und schnell probieren",
     "mitnehmen und später bezahlen"
    ],
    "answer": 1,
    "w": "umtauschen",
    "explain": "umtauschen = zurückbringen und etwas anderes nehmen."
   },
   {
    "type": "choice",
    "audio": "reklamieren",
    "q": "🔊 Hör zu – was bedeutet das Wort?",
    "options": [
     "fragen, was etwas kostet",
     "sagen, dass man später zahlt",
     "sagen, dass etwas nicht stimmt",
     "fragen, wo etwas steht"
    ],
    "answer": 2,
    "w": "reklamieren",
    "explain": "reklamieren = sagen, dass etwas nicht stimmt."
   },
   {
    "type": "choice",
    "audio": "abgelaufen",
    "q": "🔊 Hör zu – was bedeutet das Wort?",
    "options": [
     "die Packung ist schon offen",
     "die Ware ist gerade billiger",
     "die Flasche ist schon leer",
     "die Zeit dafür ist vorbei"
    ],
    "answer": 3,
    "w": "abgelaufen",
    "explain": "abgelaufen = die Zeit dafür ist vorbei."
   }
  ]
 },
 {
  "id": "kleidung",
  "title": "Kleidung & Größen",
  "level": "A2",
  "emoji": "🎧",
  "words": [
   {
    "de": "die Umkleidekabine",
    "info": "dort probierst du Kleidung an",
    "emoji": "🚪"
   },
   {
    "de": "die Größe",
    "info": "S, M, L oder eine Zahl",
    "emoji": "📏"
   },
   {
    "de": "anprobieren",
    "info": "Kleidung im Laden testen",
    "emoji": "👕"
   },
   {
    "de": "umtauschen",
    "info": "gegen etwas anderes tauschen",
    "emoji": "🔄"
   },
   {
    "de": "der Kassenbon",
    "info": "der Zettel nach dem Bezahlen",
    "emoji": "🧾"
   },
   {
    "de": "der Reißverschluss",
    "info": "geht auf und zu",
    "emoji": "🤐"
   },
   {
    "de": "die Naht",
    "info": "dort ist der Stoff zusammengenäht",
    "emoji": "🧵"
   },
   {
    "de": "eng",
    "info": "sitzt zu fest",
    "emoji": "😣"
   },
   {
    "de": "weit",
    "info": "sitzt zu locker",
    "emoji": "🫧"
   },
   {
    "de": "der Stoff",
    "info": "das Material der Kleidung",
    "emoji": "🧶"
   },
   {
    "de": "die Baumwolle",
    "info": "weicher Stoff aus einer Pflanze",
    "emoji": "🌱"
   },
   {
    "de": "der Rabatt",
    "info": "der Preis geht runter",
    "emoji": "🏷️"
   },
   {
    "de": "reduziert",
    "info": "billiger als vorher",
    "emoji": "📉"
   },
   {
    "de": "die Rechnung",
    "info": "was du bezahlen musst",
    "emoji": "💶"
   },
   {
    "de": "passen",
    "info": "die richtige Größe haben",
    "emoji": "✅"
   },
   {
    "de": "stehen",
    "info": "an einer Person gut aussehen",
    "emoji": "😍"
   }
  ],
  "exercises": [
   {
    "type": "listen",
    "label": "🛍️ Im Laden: eine Nummer größer",
    "audioUrl": "https://d8j0ntlcm91z4.cloudfront.net/user_38tIQPWpEsaUmk18tYN8mskaaAF/hf_20260825_195740_b262384a-63ac-424c-b18b-e8494262d8af.mp3",
    "q": "Was braucht die Kundin?",
    "options": [
     "Die gleiche Hose in Größe 40",
     "Dieselbe Hose in einer anderen Farbe",
     "Ihr Geld für die Hose zurück",
     "Eine freie Umkleidekabine"
    ],
    "answer": 0,
    "transcript": "Entschuldigung, ich habe die Hose in Größe achtunddreißig anprobiert, aber sie ist mir zu eng. Haben Sie die vielleicht auch in vierzig? — Einen Moment, ich schaue kurz im Lager nach. In Blau hätten wir noch eine.",
    "explain": "Die Hose ist zu eng, sie fragt nach Größe vierzig."
   },
   {
    "type": "listen",
    "label": "🔄 An der Kasse: umtauschen",
    "audioUrl": "https://d8j0ntlcm91z4.cloudfront.net/user_38tIQPWpEsaUmk18tYN8mskaaAF/hf_20260825_195740_ec8bfa71-008c-42bb-a07c-37b631b30d64.mp3",
    "q": "Warum kann der Kunde die Jacke gerade nicht umtauschen?",
    "options": [
     "Er hat den Kassenbon nicht dabei",
     "Die Jacke ist schon zu lange getragen",
     "Der Umtausch ist erst morgen möglich",
     "Die Jacke war stark reduziert"
    ],
    "answer": 0,
    "transcript": "Guten Tag, ich möchte diese Jacke umtauschen, der Reißverschluss klemmt. — Kein Problem, haben Sie den Kassenbon dabei? — Oh nein, den habe ich zu Hause liegen lassen. — Dann bringen Sie ihn bitte kurz mit, dann tauschen wir die Jacke sofort um.",
    "explain": "Ohne Kassenbon geht es nicht — die kaputte Jacke selbst wäre kein Problem."
   },
   {
    "type": "listen",
    "label": "📢 Durchsage im Kaufhaus",
    "audioUrl": "https://d8j0ntlcm91z4.cloudfront.net/user_38tIQPWpEsaUmk18tYN8mskaaAF/hf_20260825_195740_927cb8f4-3fac-4a89-99c7-1e42de0f2f23.mp3",
    "q": "Was ist heute reduziert?",
    "options": [
     "Alle Winterjacken im zweiten Stock",
     "Nur die Schuhe im ersten Stock",
     "Alles im ganzen Kaufhaus",
     "Die Kinderkleidung um die Hälfte"
    ],
    "answer": 0,
    "transcript": "Liebe Kundinnen und Kunden, heute haben wir ein besonderes Angebot für Sie: Alle Winterjacken im zweiten Stock sind um dreißig Prozent reduziert. Das Angebot gilt nur heute bis achtzehn Uhr. Wir wünschen Ihnen viel Spaß beim Einkaufen.",
    "explain": "Winterjacken im zweiten Stock, dreißig Prozent, nur bis achtzehn Uhr."
   },
   {
    "type": "listen",
    "label": "💬 Zwei Freundinnen beim Einkaufen",
    "audioUrl": "https://d8j0ntlcm91z4.cloudfront.net/user_38tIQPWpEsaUmk18tYN8mskaaAF/hf_20260825_195740_9d710087-1f65-4be9-986a-f6bcb385f3dd.mp3",
    "q": "Was rät die Freundin?",
    "options": [
     "Das Kleid nehmen, es steht ihr gut",
     "Lieber die Hose von vorhin kaufen",
     "Noch einen Laden weiter zu gehen",
     "Auf den nächsten Rabatt zu warten"
    ],
    "answer": 0,
    "transcript": "Und? Wie sieht es aus? — Ich weiß nicht, ist das nicht zu weit? — Nein, überhaupt nicht, das steht dir wirklich gut. Die Farbe passt super zu dir. — Meinst du? Dann nehme ich es.",
    "explain": "„Das steht dir gut“ heißt: es sieht an dir gut aus."
   },
   {
    "type": "choice",
    "audio": "die Umkleidekabine",
    "q": "🔊 Hör zu – was bedeutet das Wort?",
    "options": [
     "dort probiert man Kleidung an",
     "dort bezahlt man die Ware",
     "dort liegt die Ware im Lager",
     "dort geht man in den Laden"
    ],
    "answer": 0,
    "w": "die Umkleidekabine",
    "explain": "die Umkleidekabine = dort probiert man Kleidung an."
   },
   {
    "type": "choice",
    "audio": "die Größe",
    "q": "🔊 Hör zu – was bedeutet das Wort?",
    "options": [
     "die Farbe der Kleidung",
     "S, M, L oder eine Zahl",
     "das Material der Kleidung",
     "der Preis der Kleidung"
    ],
    "answer": 1,
    "w": "die Größe",
    "explain": "die Größe = S, M, L oder eine Zahl."
   },
   {
    "type": "choice",
    "audio": "anprobieren",
    "q": "🔊 Hör zu – was bedeutet das Wort?",
    "options": [
     "Kleidung zu Hause waschen",
     "Kleidung an der Kasse bezahlen",
     "Kleidung im Laden testen",
     "Kleidung ordentlich bügeln"
    ],
    "answer": 2,
    "w": "anprobieren",
    "explain": "anprobieren = Kleidung im Laden testen."
   },
   {
    "type": "choice",
    "audio": "umtauschen",
    "q": "🔊 Hör zu – was bedeutet das Wort?",
    "options": [
     "im Laden liegen lassen",
     "an eine Freundin verschenken",
     "für später zurücklegen",
     "gegen etwas anderes tauschen"
    ],
    "answer": 3,
    "w": "umtauschen",
    "explain": "umtauschen = gegen etwas anderes tauschen."
   },
   {
    "type": "choice",
    "audio": "der Kassenbon",
    "q": "🔊 Hör zu – was bedeutet das Wort?",
    "options": [
     "der Zettel nach dem Bezahlen",
     "die Liste mit allen Preisen",
     "der Werbezettel im Briefkasten",
     "die Karte für Stammkunden"
    ],
    "answer": 0,
    "w": "der Kassenbon",
    "explain": "der Kassenbon = der Zettel nach dem Bezahlen."
   },
   {
    "type": "choice",
    "audio": "der Reißverschluss",
    "q": "🔊 Hör zu – was bedeutet das Wort?",
    "options": [
     "sitzt als Knopf am Hemd",
     "geht an der Jacke auf und zu",
     "hält als Gürtel die Hose",
     "ist die Tasche innen"
    ],
    "answer": 1,
    "w": "der Reißverschluss",
    "explain": "der Reißverschluss = geht an der Jacke auf und zu."
   },
   {
    "type": "choice",
    "audio": "die Naht",
    "q": "🔊 Hör zu – was bedeutet das Wort?",
    "options": [
     "dort endet der Ärmel",
     "dort hängt das Etikett",
     "dort ist der Stoff zusammengenäht",
     "dort sitzt der Knopf"
    ],
    "answer": 2,
    "w": "die Naht",
    "explain": "die Naht = dort ist der Stoff zusammengenäht."
   },
   {
    "type": "choice",
    "audio": "eng",
    "q": "🔊 Hör zu – was bedeutet das Wort?",
    "options": [
     "sitzt zu locker am Körper",
     "ist zu lang für dich",
     "ist zu teuer für dich",
     "sitzt zu fest am Körper"
    ],
    "answer": 3,
    "w": "eng",
    "explain": "eng = sitzt zu fest am Körper."
   },
   {
    "type": "choice",
    "audio": "weit",
    "q": "🔊 Hör zu – was bedeutet das Wort?",
    "options": [
     "sitzt zu locker am Körper",
     "sitzt zu fest am Körper",
     "ist zu kurz für dich",
     "ist zu dunkel für dich"
    ],
    "answer": 0,
    "w": "weit",
    "explain": "weit = sitzt zu locker am Körper."
   },
   {
    "type": "choice",
    "audio": "der Stoff",
    "q": "🔊 Hör zu – was bedeutet das Wort?",
    "options": [
     "die Farbe der Kleidung",
     "das Material der Kleidung",
     "die Marke der Kleidung",
     "der Preis der Kleidung"
    ],
    "answer": 1,
    "w": "der Stoff",
    "explain": "der Stoff = das Material der Kleidung."
   },
   {
    "type": "choice",
    "audio": "die Baumwolle",
    "q": "🔊 Hör zu – was bedeutet das Wort?",
    "options": [
     "fester Stoff aus Plastik",
     "weiches Leder vom Tier",
     "weicher Stoff aus einer Pflanze",
     "dünnes Material aus Metall"
    ],
    "answer": 2,
    "w": "die Baumwolle",
    "explain": "die Baumwolle = weicher Stoff aus einer Pflanze."
   },
   {
    "type": "choice",
    "audio": "der Rabatt",
    "q": "🔊 Hör zu – was bedeutet das Wort?",
    "options": [
     "der Preis geht hoch",
     "die Ware kommt neu rein",
     "das Geschäft macht zu",
     "der Preis geht runter"
    ],
    "answer": 3,
    "w": "der Rabatt",
    "explain": "der Rabatt = der Preis geht runter."
   },
   {
    "type": "choice",
    "audio": "reduziert",
    "q": "🔊 Hör zu – was bedeutet das Wort?",
    "options": [
     "billiger als vorher",
     "teurer als vorher",
     "schon an jemanden verkauft",
     "nur zum Ansehen gedacht"
    ],
    "answer": 0,
    "w": "reduziert",
    "explain": "reduziert = billiger als vorher."
   },
   {
    "type": "choice",
    "audio": "die Rechnung",
    "q": "🔊 Hör zu – was bedeutet das Wort?",
    "options": [
     "was du zurückbekommst",
     "was du bezahlen musst",
     "was zwei Jahre gilt",
     "was im Katalog steht"
    ],
    "answer": 1,
    "w": "die Rechnung",
    "explain": "die Rechnung = was du bezahlen musst."
   },
   {
    "type": "choice",
    "audio": "passen",
    "q": "🔊 Hör zu – was bedeutet das Wort?",
    "options": [
     "an einer Person gut aussehen",
     "frisch gewaschen sein",
     "die richtige Größe haben",
     "aus dem Laden neu sein"
    ],
    "answer": 2,
    "w": "passen",
    "explain": "passen = die richtige Größe haben."
   },
   {
    "type": "choice",
    "audio": "stehen",
    "q": "🔊 Hör zu – was bedeutet das Wort?",
    "options": [
     "die richtige Größe haben",
     "gerade aufrecht sein",
     "im Winter warm halten",
     "an einer Person gut aussehen"
    ],
    "answer": 3,
    "w": "stehen",
    "explain": "stehen = an einer Person gut aussehen."
   }
  ]
 },
 {
  "id": "kueche",
  "title": "In der Restaurantküche",
  "level": "B1",
  "emoji": "🎧",
  "words": [
   {
    "de": "die Vorbereitung",
    "info": "alles schneiden, bevor die Gäste kommen",
    "emoji": "🔪"
   },
   {
    "de": "der Bon",
    "info": "der kleine Zettel mit der Bestellung",
    "emoji": "🧾"
   },
   {
    "de": "anrichten",
    "info": "das Essen schön auf den Teller",
    "emoji": "🍽️"
   },
   {
    "de": "die Allergie",
    "info": "der Körper verträgt ein Essen nicht",
    "emoji": "🥜"
   },
   {
    "de": "die Zutat",
    "info": "ein Teil von dem Gericht",
    "emoji": "🧂"
   },
   {
    "de": "die Hygienevorschrift",
    "info": "Regel für Sauberkeit in der Küche",
    "emoji": "🧼"
   },
   {
    "de": "die Kühlkette",
    "info": "die Ware bleibt immer kalt",
    "emoji": "🧊"
   },
   {
    "de": "die Spätschicht",
    "info": "die Arbeit bis in die Nacht",
    "emoji": "🌙"
   },
   {
    "de": "die Reklamation",
    "info": "der Gast ist nicht zufrieden",
    "emoji": "😠"
   },
   {
    "de": "die Warenannahme",
    "info": "hier kommt die Lieferung an",
    "emoji": "📦"
   },
   {
    "de": "das Mindesthaltbarkeitsdatum",
    "info": "bis dahin ist die Ware gut",
    "emoji": "📅"
   },
   {
    "de": "die Beilage",
    "info": "das kommt zum Fleisch dazu",
    "emoji": "🥔"
   },
   {
    "de": "die Durchreiche",
    "info": "dort holt die Bedienung die Teller",
    "emoji": "🪟"
   },
   {
    "de": "der Kühlraum",
    "info": "sehr kalt, dort lagert die Ware",
    "emoji": "❄️"
   },
   {
    "de": "abschmecken",
    "info": "prüfen, ob genug Salz drin ist",
    "emoji": "🥄"
   },
   {
    "de": "die Bedienung",
    "info": "sie bringt das Essen zum Gast",
    "emoji": "🤵"
   }
  ],
  "exercises": [
   {
    "type": "listen",
    "label": "📢 Durchsage für die Küche",
    "audioUrl": "https://d8j0ntlcm91z4.cloudfront.net/user_38tIQPWpEsaUmk18tYN8mskaaAF/hf_20260826_075408_feaa1948-cb0e-4281-a636-5dd7d7a0d048.mp3",
    "q": "Warum geht die Lieferung mit dem Fisch zurück?",
    "options": [
     "Die Ware war bei der Ankunft zu warm",
     "Die Ware kam einen ganzen Tag zu spät",
     "Auf dem Lieferschein stand die falsche Menge",
     "Das Datum auf der Packung war schon alt"
    ],
    "answer": 0,
    "transcript": "Eine kurze Durchsage für alle in der Küche. Die Schulung zur Hygiene beginnt heute um sechzehn Uhr im Personalraum, nicht wie geplant am Freitag. Wer Spätschicht hat, kommt bitte eine Stunde früher. Die Lieferung mit dem Fisch ist zu warm angekommen und geht zurück, nehmt für heute Abend die Hähnchenbrust aus dem Kühlraum.",
    "explain": "Der Fisch ist zu warm angekommen, die Kühlkette war also unterbrochen, deshalb geht die Ware zurück."
   },
   {
    "type": "listen",
    "label": "📞 Mailbox: Bitte die Spätschicht",
    "audioUrl": "https://d8j0ntlcm91z4.cloudfront.net/user_38tIQPWpEsaUmk18tYN8mskaaAF/hf_20260826_075407_4ee5af9c-bc86-4a97-a47d-67cc11446179.mp3",
    "q": "Was muss Amina in der Küche noch machen?",
    "options": [
     "Sie muss nur noch die Beilagen machen",
     "Sie muss die ganze Vorbereitung machen",
     "Sie muss die Lieferung noch einräumen",
     "Sie muss den Fisch noch neu bestellen"
    ],
    "answer": 0,
    "transcript": "Hallo Amina, hier ist Tobias. Sag mal, kannst du heute die Spätschicht übernehmen? Ich muss mit meinem Sohn zum Arzt. Du müsstest um sechzehn Uhr da sein, die Vorbereitung ist schon fertig. Nur die Beilagen fehlen noch. Wenn es nicht geht, sag mir bitte gleich Bescheid, dann frage ich Kevin. Danke dir.",
    "explain": "Tobias sagt, die Vorbereitung ist schon fertig, nur die Beilagen fehlen noch."
   },
   {
    "type": "listen",
    "label": "🪟 An der Durchreiche: Tisch vier",
    "audioUrl": "https://d8j0ntlcm91z4.cloudfront.net/user_38tIQPWpEsaUmk18tYN8mskaaAF/hf_20260826_075622_70b9849d-a60b-4e8b-9aea-8488e544d996.mp3",
    "q": "Was bekommt die Frau statt Kuchen?",
    "options": [
     "Sie bekommt zum Schluss etwas Obst",
     "Sie bekommt einen Salat ohne Öl",
     "Sie bekommt gar keinen Nachtisch mehr",
     "Sie bekommt den Kuchen ohne Nüsse"
    ],
    "answer": 0,
    "transcript": "Achtung, der Tisch vier: Die Dame verträgt keine Nüsse. — Dann geht der Salat nicht, da ist Öl von Nüssen dran. — Und der Kuchen? — Auf keinen Fall. — Was soll ich ihr sagen? — Sag, wir machen den Salat ohne das Öl, und statt Kuchen gibt es Obst. — Gut, ich gebe es weiter.",
    "explain": "Der Koch sagt am Ende, statt Kuchen gibt es für die Dame Obst."
   },
   {
    "type": "listen",
    "label": "☕ Privat: Reklamation vom Gast",
    "audioUrl": "https://d8j0ntlcm91z4.cloudfront.net/user_38tIQPWpEsaUmk18tYN8mskaaAF/hf_20260826_075622_0bef1bc9-31c9-47e0-9802-00f9a4005acf.mp3",
    "q": "Warum kam der Teller zurück in die Küche?",
    "options": [
     "Das Fleisch war dem Gast zu roh",
     "Die Beilage hatte auf dem Teller gefehlt",
     "Der Gast hatte etwas anderes bestellt",
     "Das Essen war beim Gast schon kalt"
    ],
    "answer": 0,
    "transcript": "Wie war es gestern Abend? — Voll. Und dann kam noch eine Reklamation zurück, das Steak war zu roh. — Hast du es neu gemacht? — Klar, und die Bedienung hat sich entschuldigt. Der Gast war am Ende ganz freundlich. — Und der Chef? — Der hat nichts gesagt. Der schaut nur, ob wir die Kühlkette einhalten.",
    "explain": "Sie erzählt, das Steak war zu roh, deshalb kam der Teller zurück."
   },
   {
    "type": "choice",
    "audio": "die Vorbereitung",
    "q": "🔊 Hör zu – was bedeutet das Wort?",
    "options": [
     "alles schneiden, bevor die Gäste kommen",
     "alles spülen, wenn die Gäste weg sind",
     "alles einkaufen, bevor der Laden zumacht",
     "alles aufschreiben, was noch fehlt"
    ],
    "answer": 0,
    "w": "die Vorbereitung",
    "explain": "die Vorbereitung = alles schneiden, bevor die Gäste kommen."
   },
   {
    "type": "choice",
    "audio": "der Bon",
    "q": "🔊 Hör zu – was bedeutet das Wort?",
    "options": [
     "der kleine Zettel mit dem Preis",
     "der kleine Zettel mit der Bestellung",
     "das Papier mit dem Plan der Schichten",
     "die Liste mit den Waren im Lager"
    ],
    "answer": 1,
    "w": "der Bon",
    "explain": "der Bon = der kleine Zettel mit der Bestellung."
   },
   {
    "type": "choice",
    "audio": "anrichten",
    "q": "🔊 Hör zu – was bedeutet das Wort?",
    "options": [
     "das Essen noch einmal warm machen",
     "das Essen zum Tisch der Gäste bringen",
     "das Essen schön auf den Teller",
     "das Essen für morgen kalt stellen"
    ],
    "answer": 2,
    "w": "anrichten",
    "explain": "anrichten = das Essen schön auf den Teller."
   },
   {
    "type": "choice",
    "audio": "die Allergie",
    "q": "🔊 Hör zu – was bedeutet das Wort?",
    "options": [
     "der Gast mag ein Essen nicht gern",
     "das Essen ist nicht mehr frisch",
     "der Koch hat eine Zutat vergessen",
     "der Körper verträgt ein Essen nicht"
    ],
    "answer": 3,
    "w": "die Allergie",
    "explain": "die Allergie = der Körper verträgt ein Essen nicht."
   },
   {
    "type": "choice",
    "audio": "die Zutat",
    "q": "🔊 Hör zu – was bedeutet das Wort?",
    "options": [
     "ein Teil von dem Gericht",
     "der Name von dem Gericht",
     "der Rest von dem Essen",
     "das Besteck neben dem Teller"
    ],
    "answer": 0,
    "w": "die Zutat",
    "explain": "die Zutat = ein Teil von dem Gericht."
   },
   {
    "type": "choice",
    "audio": "die Hygienevorschrift",
    "q": "🔊 Hör zu – was bedeutet das Wort?",
    "options": [
     "Regel für die Pausen in der Küche",
     "Regel für Sauberkeit in der Küche",
     "Plan für die Schichten in der Küche",
     "Liste mit den Waren für die Küche"
    ],
    "answer": 1,
    "w": "die Hygienevorschrift",
    "explain": "die Hygienevorschrift = Regel für Sauberkeit in der Küche."
   },
   {
    "type": "choice",
    "audio": "die Kühlkette",
    "q": "🔊 Hör zu – was bedeutet das Wort?",
    "options": [
     "die Ware wird langsam warm",
     "die Ware kommt jeden Tag neu",
     "die Ware bleibt immer kalt",
     "die Ware liegt ganz hinten"
    ],
    "answer": 2,
    "w": "die Kühlkette",
    "explain": "die Kühlkette = die Ware bleibt immer kalt."
   },
   {
    "type": "choice",
    "audio": "die Spätschicht",
    "q": "🔊 Hör zu – was bedeutet das Wort?",
    "options": [
     "die Arbeit früh am Morgen",
     "die Pause mitten am Nachmittag",
     "die Arbeit nur am Wochenende",
     "die Arbeit bis in die Nacht"
    ],
    "answer": 3,
    "w": "die Spätschicht",
    "explain": "die Spätschicht = die Arbeit bis in die Nacht."
   },
   {
    "type": "choice",
    "audio": "die Reklamation",
    "q": "🔊 Hör zu – was bedeutet das Wort?",
    "options": [
     "der Gast ist nicht zufrieden",
     "der Gast bestellt noch etwas",
     "der Gast bezahlt erst später",
     "der Gast wartet auf den Tisch"
    ],
    "answer": 0,
    "w": "die Reklamation",
    "explain": "die Reklamation = der Gast ist nicht zufrieden."
   },
   {
    "type": "choice",
    "audio": "die Warenannahme",
    "q": "🔊 Hör zu – was bedeutet das Wort?",
    "options": [
     "hier geht das Essen zum Gast",
     "hier kommt die Lieferung an",
     "hier stehen die leeren Kisten",
     "hier wird das Geschirr gespült"
    ],
    "answer": 1,
    "w": "die Warenannahme",
    "explain": "die Warenannahme = hier kommt die Lieferung an."
   },
   {
    "type": "choice",
    "audio": "das Mindesthaltbarkeitsdatum",
    "q": "🔊 Hör zu – was bedeutet das Wort?",
    "options": [
     "seit dann ist die Ware da",
     "so lange dauert das Kochen",
     "bis dahin ist die Ware gut",
     "so viel kostet die Ware"
    ],
    "answer": 2,
    "w": "das Mindesthaltbarkeitsdatum",
    "explain": "das Mindesthaltbarkeitsdatum = bis dahin ist die Ware gut."
   },
   {
    "type": "choice",
    "audio": "die Beilage",
    "q": "🔊 Hör zu – was bedeutet das Wort?",
    "options": [
     "das kommt vor der Suppe",
     "das trinkt man zum Essen",
     "das steht auf dem Zettel",
     "das kommt zum Fleisch dazu"
    ],
    "answer": 3,
    "w": "die Beilage",
    "explain": "die Beilage = das kommt zum Fleisch dazu."
   },
   {
    "type": "choice",
    "audio": "die Durchreiche",
    "q": "🔊 Hör zu – was bedeutet das Wort?",
    "options": [
     "dort holt die Bedienung die Teller",
     "dort spült man die schmutzigen Teller",
     "dort steht die Ware für morgen",
     "dort machen die Köche ihre Pause"
    ],
    "answer": 0,
    "w": "die Durchreiche",
    "explain": "die Durchreiche = dort holt die Bedienung die Teller."
   },
   {
    "type": "choice",
    "audio": "der Kühlraum",
    "q": "🔊 Hör zu – was bedeutet das Wort?",
    "options": [
     "ganz warm, dort stehen die Teller",
     "sehr kalt, dort lagert die Ware",
     "sehr klein, dort hängen die Jacken",
     "ganz hinten, dort macht man Pause"
    ],
    "answer": 1,
    "w": "der Kühlraum",
    "explain": "der Kühlraum = sehr kalt, dort lagert die Ware."
   },
   {
    "type": "choice",
    "audio": "abschmecken",
    "q": "🔊 Hör zu – was bedeutet das Wort?",
    "options": [
     "prüfen, ob das Essen warm genug ist",
     "prüfen, ob der Teller sauber ist",
     "prüfen, ob genug Salz drin ist",
     "prüfen, ob die Ware noch frisch ist"
    ],
    "answer": 2,
    "w": "abschmecken",
    "explain": "abschmecken = prüfen, ob genug Salz drin ist."
   },
   {
    "type": "choice",
    "audio": "die Bedienung",
    "q": "🔊 Hör zu – was bedeutet das Wort?",
    "options": [
     "sie kocht das Essen für die Gäste",
     "sie nimmt die Ware an der Tür an",
     "sie macht am Abend die Küche sauber",
     "sie bringt das Essen zum Gast"
    ],
    "answer": 3,
    "w": "die Bedienung",
    "explain": "die Bedienung = sie bringt das Essen zum Gast."
   }
  ]
 },
 {
  "id": "lager",
  "title": "Im Lager arbeiten",
  "level": "B1",
  "emoji": "🎧",
  "words": [
   {
    "de": "der Wareneingang",
    "info": "hier kommt neue Ware an",
    "emoji": "📥"
   },
   {
    "de": "kommissionieren",
    "info": "Ware für einen Auftrag zusammenstellen",
    "emoji": "🧾"
   },
   {
    "de": "der Handscanner",
    "info": "damit erfasst man jede Ware",
    "emoji": "📱"
   },
   {
    "de": "die Palette",
    "info": "Holzunterlage für schwere Ware",
    "emoji": "🪵"
   },
   {
    "de": "der Gabelstapler",
    "info": "damit hebt man schwere Lasten hoch",
    "emoji": "🚜"
   },
   {
    "de": "der Bestand",
    "info": "wie viel noch im Regal liegt",
    "emoji": "📊"
   },
   {
    "de": "die Retoure",
    "info": "Ware kommt vom Kunden zurück",
    "emoji": "↩️"
   },
   {
    "de": "versandbereit",
    "info": "fertig gepackt für den Weg",
    "emoji": "📮"
   },
   {
    "de": "der Lieferschein",
    "info": "Papier zur angekommenen Ware",
    "emoji": "📄"
   },
   {
    "de": "die Einlagerung",
    "info": "Ware kommt an ihren Platz",
    "emoji": "🏷️"
   },
   {
    "de": "der Staplerschein",
    "info": "Erlaubnis zum Fahren im Lager",
    "emoji": "🪪"
   },
   {
    "de": "die Bestandsdifferenz",
    "info": "die gezählte Menge stimmt nicht",
    "emoji": "📉"
   },
   {
    "de": "die Rampe",
    "info": "dort fährt der Lastwagen ran",
    "emoji": "🚚"
   },
   {
    "de": "der Schichtleiter",
    "info": "der Chef für diese Arbeitszeit",
    "emoji": "🧑‍💼"
   },
   {
    "de": "die Sichtprüfung",
    "info": "kurz mit den Augen kontrollieren",
    "emoji": "👀"
   },
   {
    "de": "die Sackkarre",
    "info": "damit rollst du schwere Kisten",
    "emoji": "🛒"
   }
  ],
  "exercises": [
   {
    "type": "listen",
    "label": "📢 Durchsage in der Halle",
    "audioUrl": "https://d8j0ntlcm91z4.cloudfront.net/user_38tIQPWpEsaUmk18tYN8mskaaAF/hf_20260826_075622_e2af5951-bdc2-4034-9b3c-09fae739c243.mp3",
    "q": "Warum ist die Rampe zwei gesperrt?",
    "options": [
     "Weil dort Öl auf dem Boden liegt",
     "Weil dort gerade ein Lastwagen steht",
     "Weil dort neue Paletten abgestellt sind",
     "Weil dort ein Stapler kaputt gegangen ist"
    ],
    "answer": 0,
    "transcript": "Achtung, eine Durchsage für alle im Wareneingang. Die Rampe zwei ist ab sofort gesperrt, dort ist Öl auf dem Boden. Bitte fahren Sie mit dem Stapler außen herum. Der Lastwagen aus Hamburg kommt statt um zehn erst um dreizehn Uhr. Bis dahin kommissionieren Sie bitte die Aufträge für den Süden. Der Schichtleiter ist in Halle drei.",
    "explain": "In der Durchsage heißt es, auf der Rampe zwei liegt Öl auf dem Boden, deshalb ist sie gesperrt."
   },
   {
    "type": "listen",
    "label": "📞 Mailbox: Der Schein läuft ab",
    "audioUrl": "https://d8j0ntlcm91z4.cloudfront.net/user_38tIQPWpEsaUmk18tYN8mskaaAF/hf_20260826_075622_23f8c1c8-fdbc-48b9-82e5-01aa5ddf5e9f.mp3",
    "q": "Was passiert, wenn Herr Osei die Schulung nicht macht?",
    "options": [
     "Er darf ab Juni keinen Stapler mehr fahren",
     "Er muss ab Juni in einer anderen Halle arbeiten",
     "Er darf am Mittwoch nicht zur Arbeit kommen",
     "Er bekommt ab Juni eine andere Arbeitszeit"
    ],
    "answer": 0,
    "transcript": "Hallo Herr Osei, hier ist Lindner aus dem Lager. Ihr Staplerschein läuft Ende des Monats ab. Die Schulung ist am Mittwoch um acht Uhr, an dem Tag sind Sie dann aus der Kommissionierung raus. Bringen Sie bitte den alten Schein und Ihren Ausweis mit. Ohne die Schulung dürfen Sie ab Juni nicht mehr fahren. Melden Sie sich kurz.",
    "explain": "Der Kollege sagt deutlich: ohne die Schulung darf Herr Osei ab Juni den Stapler nicht mehr fahren."
   },
   {
    "type": "listen",
    "label": "🪟 Am Tresen: Zwei Paletten fehlen",
    "audioUrl": "https://d8j0ntlcm91z4.cloudfront.net/user_38tIQPWpEsaUmk18tYN8mskaaAF/hf_20260826_075623_0e61e743-d888-411a-8f34-93bbb4d33275.mp3",
    "q": "Warum nimmt der Lagerarbeiter die Lieferung nur mit Vorbehalt an?",
    "options": [
     "Weil zwei Paletten weniger da sind als angemeldet",
     "Weil der Fahrer den Lieferschein vergessen hat",
     "Weil die Ware an der falschen Rampe steht",
     "Weil der Scanner an der Rampe kaputt ist"
    ],
    "answer": 0,
    "transcript": "Guten Tag, zwölf Paletten für Sie. Wo soll ich hin? — Rampe vier. Haben Sie den Lieferschein? — Hier, bitte. — Moment, auf dem Schein stehen zwölf, auf meinem Scanner sind nur zehn Paletten angemeldet. — Dann fehlen zwei. — Ich nehme das nur mit Vorbehalt an und schreibe die Differenz auf den Schein. Unterschreiben Sie hier bitte auch.",
    "explain": "Er nimmt die Lieferung mit Vorbehalt an, weil statt zwölf nur zehn Paletten angemeldet sind, also zwei fehlen."
   },
   {
    "type": "listen",
    "label": "☕ Privat: Die neue Stelle",
    "audioUrl": "https://d8j0ntlcm91z4.cloudfront.net/user_38tIQPWpEsaUmk18tYN8mskaaAF/hf_20260826_075622_2b3a6c41-886b-4931-99eb-83b3490ee247.mp3",
    "q": "Was machen im Lager vor allem die neuen Kollegen?",
    "options": [
     "Zurückgeschickte Ware auspacken, prüfen und wieder einlagern",
     "Fertige Aufträge für den Versand zusammenstellen",
     "Mit dem Stapler die Paletten ins Regal stellen",
     "Am Wareneingang die Lieferscheine kontrollieren"
    ],
    "answer": 0,
    "transcript": "Und, wie ist die neue Stelle im Lager? — Anstrengend. Zwanzig Kilometer laufe ich am Tag, sagt meine Uhr. — Und der Scanner? — Der piept, wenn du zu langsam bist. Nach zwei Wochen kannst du das aber. — Und die Retouren? — Die machen bei uns die Neuen. Zurückgeschickte Ware auspacken, prüfen, wieder einlagern. Den ganzen Tag.",
    "explain": "Er sagt, die Retouren machen bei ihnen die Neuen: auspacken, prüfen und wieder einlagern."
   },
   {
    "type": "choice",
    "audio": "der Wareneingang",
    "q": "🔊 Hör zu – was bedeutet das Wort?",
    "options": [
     "hier kommt neue Ware an",
     "hier geht fertige Ware raus",
     "hier steht die Ware im Regal",
     "hier wird die Ware verpackt"
    ],
    "answer": 0,
    "w": "der Wareneingang",
    "explain": "der Wareneingang = hier kommt neue Ware an."
   },
   {
    "type": "choice",
    "audio": "kommissionieren",
    "q": "🔊 Hör zu – was bedeutet das Wort?",
    "options": [
     "Ware nach der Lieferung genau zählen",
     "Ware für einen Auftrag zusammenstellen",
     "Ware im hohen Regal ganz oben abstellen",
     "Ware für den Kunden fertig einpacken"
    ],
    "answer": 1,
    "w": "kommissionieren",
    "explain": "kommissionieren = Ware für einen Auftrag zusammenstellen."
   },
   {
    "type": "choice",
    "audio": "der Handscanner",
    "q": "🔊 Hör zu – was bedeutet das Wort?",
    "options": [
     "damit ruft man den Schichtleiter",
     "damit öffnet man das große Tor",
     "damit erfasst man jede Ware",
     "damit klebt man neue Schilder auf"
    ],
    "answer": 2,
    "w": "der Handscanner",
    "explain": "der Handscanner = damit erfasst man jede Ware."
   },
   {
    "type": "choice",
    "audio": "die Palette",
    "q": "🔊 Hör zu – was bedeutet das Wort?",
    "options": [
     "Papierliste für gelieferte Ware",
     "Metallkiste für kleines Werkzeug",
     "Plastikfolie für nasse Ware",
     "Holzunterlage für schwere Ware"
    ],
    "answer": 3,
    "w": "die Palette",
    "explain": "die Palette = Holzunterlage für schwere Ware."
   },
   {
    "type": "choice",
    "audio": "der Gabelstapler",
    "q": "🔊 Hör zu – was bedeutet das Wort?",
    "options": [
     "damit hebt man schwere Lasten hoch",
     "damit rollt man leichte Kisten weg",
     "damit fährt man die Ware zum Kunden",
     "damit macht man den Hallenboden sauber"
    ],
    "answer": 0,
    "w": "der Gabelstapler",
    "explain": "der Gabelstapler = damit hebt man schwere Lasten hoch."
   },
   {
    "type": "choice",
    "audio": "der Bestand",
    "q": "🔊 Hör zu – was bedeutet das Wort?",
    "options": [
     "wie viel heute bestellt wurde",
     "wie viel noch im Regal liegt",
     "wie viel die Ware gekostet hat",
     "wie viel heute rausgegangen ist"
    ],
    "answer": 1,
    "w": "der Bestand",
    "explain": "der Bestand = wie viel noch im Regal liegt."
   },
   {
    "type": "choice",
    "audio": "die Retoure",
    "q": "🔊 Hör zu – was bedeutet das Wort?",
    "options": [
     "Ware geht heute zum Kunden raus",
     "Ware bleibt lange im Regal liegen",
     "Ware kommt vom Kunden zurück",
     "Ware kommt kaputt beim Lager an"
    ],
    "answer": 2,
    "w": "die Retoure",
    "explain": "die Retoure = Ware kommt vom Kunden zurück."
   },
   {
    "type": "choice",
    "audio": "versandbereit",
    "q": "🔊 Hör zu – was bedeutet das Wort?",
    "options": [
     "gerade erst im Lager angekommen",
     "noch offen auf dem Tisch",
     "schon beim Kunden zu Hause",
     "fertig gepackt für den Weg"
    ],
    "answer": 3,
    "w": "versandbereit",
    "explain": "versandbereit = fertig gepackt für den Weg."
   },
   {
    "type": "choice",
    "audio": "der Lieferschein",
    "q": "🔊 Hör zu – was bedeutet das Wort?",
    "options": [
     "Papier zur angekommenen Ware",
     "Papier über die geleisteten Stunden",
     "Papier mit dem Plan der Halle",
     "Papier für den kaputten Stapler"
    ],
    "answer": 0,
    "w": "der Lieferschein",
    "explain": "der Lieferschein = Papier zur angekommenen Ware."
   },
   {
    "type": "choice",
    "audio": "die Einlagerung",
    "q": "🔊 Hör zu – was bedeutet das Wort?",
    "options": [
     "Ware kommt auf den Lastwagen",
     "Ware kommt an ihren Platz",
     "Ware kommt aus dem Regal raus",
     "Ware kommt zurück zur Firma"
    ],
    "answer": 1,
    "w": "die Einlagerung",
    "explain": "die Einlagerung = Ware kommt an ihren Platz."
   },
   {
    "type": "choice",
    "audio": "der Staplerschein",
    "q": "🔊 Hör zu – was bedeutet das Wort?",
    "options": [
     "Zettel mit dem Ziel der Ware",
     "Erlaubnis zum Arbeiten in der Nacht",
     "Erlaubnis zum Fahren im Lager",
     "Zettel über den kaputten Wagen"
    ],
    "answer": 2,
    "w": "der Staplerschein",
    "explain": "der Staplerschein = Erlaubnis zum Fahren im Lager."
   },
   {
    "type": "choice",
    "audio": "die Bestandsdifferenz",
    "q": "🔊 Hör zu – was bedeutet das Wort?",
    "options": [
     "die gelieferte Ware ist kaputt",
     "die bestellte Ware kommt zu spät",
     "die schwere Ware liegt zu hoch",
     "die gezählte Menge stimmt nicht"
    ],
    "answer": 3,
    "w": "die Bestandsdifferenz",
    "explain": "die Bestandsdifferenz = die gezählte Menge stimmt nicht."
   },
   {
    "type": "choice",
    "audio": "die Rampe",
    "q": "🔊 Hör zu – was bedeutet das Wort?",
    "options": [
     "dort fährt der Lastwagen ran",
     "dort steht das hohe Regal",
     "dort sitzt der Schichtleiter",
     "dort liegt die kaputte Ware"
    ],
    "answer": 0,
    "w": "die Rampe",
    "explain": "die Rampe = dort fährt der Lastwagen ran."
   },
   {
    "type": "choice",
    "audio": "der Schichtleiter",
    "q": "🔊 Hör zu – was bedeutet das Wort?",
    "options": [
     "der Fahrer von dem Lastwagen",
     "der Chef für diese Arbeitszeit",
     "der Mann am Tor der Halle",
     "der Kollege mit dem Scanner"
    ],
    "answer": 1,
    "w": "der Schichtleiter",
    "explain": "der Schichtleiter = der Chef für diese Arbeitszeit."
   },
   {
    "type": "choice",
    "audio": "die Sichtprüfung",
    "q": "🔊 Hör zu – was bedeutet das Wort?",
    "options": [
     "genau mit der Waage nachwiegen",
     "jede Kiste einzeln öffnen",
     "kurz mit den Augen kontrollieren",
     "alles noch einmal langsam nachzählen"
    ],
    "answer": 2,
    "w": "die Sichtprüfung",
    "explain": "die Sichtprüfung = kurz mit den Augen kontrollieren."
   },
   {
    "type": "choice",
    "audio": "die Sackkarre",
    "q": "🔊 Hör zu – was bedeutet das Wort?",
    "options": [
     "damit hebst du die Ware hoch",
     "damit schneidest du die Folie auf",
     "damit klebst du die Kisten zu",
     "damit rollst du schwere Kisten"
    ],
    "answer": 3,
    "w": "die Sackkarre",
    "explain": "die Sackkarre = damit rollst du schwere Kisten."
   }
  ]
 },
 {
  "id": "landwirtschaft",
  "title": "Arbeit auf dem Hof",
  "level": "B1",
  "emoji": "🎧",
  "words": [
   {
    "de": "die Ernte",
    "info": "wenn alles vom Feld geholt wird",
    "emoji": "🌾"
   },
   {
    "de": "der Erntehelfer",
    "info": "er hilft nur wenige Wochen mit",
    "emoji": "🧑‍🌾"
   },
   {
    "de": "melken",
    "info": "Milch von der Kuh holen",
    "emoji": "🐄"
   },
   {
    "de": "der Melkstand",
    "info": "dort gibt die Kuh ihre Milch",
    "emoji": "🥛"
   },
   {
    "de": "das Futter",
    "info": "das Essen für die Tiere",
    "emoji": "🌿"
   },
   {
    "de": "ausmisten",
    "info": "den Dreck aus dem Stall holen",
    "emoji": "🧹"
   },
   {
    "de": "die Weide",
    "info": "die Wiese für die Tiere draußen",
    "emoji": "🐮"
   },
   {
    "de": "der Anhänger",
    "info": "er hängt hinten am Traktor",
    "emoji": "🛻"
   },
   {
    "de": "der Mähdrescher",
    "info": "große Maschine holt Korn vom Feld",
    "emoji": "🚜"
   },
   {
    "de": "die Aussaat",
    "info": "die Körner kommen in die Erde",
    "emoji": "🌱"
   },
   {
    "de": "der Frost",
    "info": "nachts wird es unter null",
    "emoji": "❄️"
   },
   {
    "de": "der Hagel",
    "info": "harte Eiskörner fallen vom Himmel",
    "emoji": "🧊"
   },
   {
    "de": "die Direktvermarktung",
    "info": "vom Hof direkt an die Leute",
    "emoji": "🧺"
   },
   {
    "de": "der Hofladen",
    "info": "man kauft direkt beim Bauern",
    "emoji": "🏪"
   },
   {
    "de": "die Saisonarbeit",
    "info": "Arbeit nur in bestimmten Monaten",
    "emoji": "📆"
   },
   {
    "de": "der Akkordlohn",
    "info": "Geld nach Menge, nicht nach Zeit",
    "emoji": "💶"
   }
  ],
  "exercises": [
   {
    "type": "listen",
    "label": "📢 Ansage am Feldrand",
    "audioUrl": "https://d8j0ntlcm91z4.cloudfront.net/user_38tIQPWpEsaUmk18tYN8mskaaAF/hf_20260826_075836_3f32f126-58d3-4237-985d-09ea6a25eae0.mp3",
    "q": "Warum fangen die Helfer heute später an?",
    "options": [
     "Die Erdbeeren sind noch ganz nass",
     "Der Anhänger steht noch am Hof",
     "Es fehlen heute mehrere leere Kisten",
     "Die Helfer frühstücken heute zusammen"
    ],
    "answer": 0,
    "transcript": "Guten Morgen zusammen, kurz eure Aufmerksamkeit bitte. Wir fangen heute erst um halb neun an, weil die Erdbeeren noch ganz nass sind. Nasse Ware können wir nicht in die Kisten legen, die ist bis zum Abend schlecht. Nutzt die Zeit für ein Frühstück. Der Anhänger steht am unteren Feld, dort treffen wir uns nachher.",
    "explain": "In der Ansage heißt es, dass später begonnen wird, weil die Erdbeeren noch nass sind."
   },
   {
    "type": "listen",
    "label": "📞 Mailbox: Hagel angesagt",
    "audioUrl": "https://d8j0ntlcm91z4.cloudfront.net/user_38tIQPWpEsaUmk18tYN8mskaaAF/hf_20260826_075836_1fb29138-b0eb-4a14-a8c4-daabd4275684.mp3",
    "q": "Bis wann soll Herr Nowak absagen, wenn er nicht kann?",
    "options": [
     "Noch heute am Abend",
     "Erst morgen früh am Feld",
     "Gleich nach dem Melken",
     "Morgen nach der Ernte"
    ],
    "answer": 0,
    "transcript": "Hallo Herr Nowak, hier ist Frau Berger vom Hof Lindig. Für morgen Mittag ist Hagel angesagt, deshalb fangen wir schon um fünf Uhr an. Wir wollen die Äpfel vom unteren Feld holen, bevor das Wetter kommt. Wenn Sie das nicht schaffen, sagen Sie mir bitte heute Abend Bescheid. Und ziehen Sie sich warm an, morgens ist es richtig kalt.",
    "explain": "Frau Berger bittet ihn, ihr noch am selben Abend Bescheid zu sagen, wenn er nicht kommen kann."
   },
   {
    "type": "listen",
    "label": "🥛 Im Hofladen: Milch am Automaten",
    "audioUrl": "https://d8j0ntlcm91z4.cloudfront.net/user_38tIQPWpEsaUmk18tYN8mskaaAF/hf_20260826_075836_cce09862-07a4-4279-ae1e-c0d524eb3b5d.mp3",
    "q": "Was kostet eine Flasche im Hofladen?",
    "options": [
     "Zwei Euro, dann gehört sie ihm",
     "Einen Euro zehn wie ein Liter Milch",
     "Nichts, sie ist beim Kauf dabei",
     "Zwei Euro, die er zurückbekommt"
    ],
    "answer": 0,
    "transcript": "Guten Tag, bekomme ich hier auch Milch? — Ja, draußen am Automaten, rund um die Uhr. — Und eine Flasche? — Die bringen die meisten selbst mit. Wenn Sie keine haben, bekommen Sie eine bei mir für zwei Euro, die gehört dann Ihnen. — Und die Milch? — Ein Liter kostet einen Euro zehn.",
    "explain": "Die Verkäuferin sagt, eine Flasche kostet zwei Euro und gehört dem Kunden danach."
   },
   {
    "type": "listen",
    "label": "☕ Unter Nachbarn: Spargelzeit",
    "audioUrl": "https://d8j0ntlcm91z4.cloudfront.net/user_38tIQPWpEsaUmk18tYN8mskaaAF/hf_20260826_075836_58ac1056-9530-491b-855b-02a3c8ed61f5.mp3",
    "q": "Wer melkt, wenn Mareks Bruder krank ist?",
    "options": [
     "Die Mutter, sie steht dann früh auf",
     "Der Nachbar mit seinem großen Melkstand",
     "Marek selbst, direkt nach dem Feld",
     "Die Helfer aus der Spargelernte"
    ],
    "answer": 0,
    "transcript": "Und, wie läuft die Spargelzeit bei euch, Marek? — Frag nicht. Wir sind zu wenige, und bezahlt wird im Akkord. Wer schnell ist, verdient gut, die anderen ärgern sich. — Machst du auch den Stall? — Nur abends. Morgens melkt mein Bruder, sonst schaffe ich das Feld nicht. — Und wenn er krank wird? — Dann steht meine Mutter um vier Uhr auf.",
    "explain": "Marek sagt, dass dann seine Mutter um vier Uhr aufsteht und die Arbeit im Stall übernimmt."
   },
   {
    "type": "choice",
    "audio": "die Ernte",
    "q": "🔊 Hör zu – was bedeutet das Wort?",
    "options": [
     "wenn alles vom Feld geholt wird",
     "wenn die Körner in die Erde kommen",
     "wenn die Tiere auf die Weide gehen",
     "wenn die Ware in den Laden kommt"
    ],
    "answer": 0,
    "w": "die Ernte",
    "explain": "die Ernte = wenn alles vom Feld geholt wird."
   },
   {
    "type": "choice",
    "audio": "der Erntehelfer",
    "q": "🔊 Hör zu – was bedeutet das Wort?",
    "options": [
     "er fährt den großen Mähdrescher",
     "er hilft nur wenige Wochen mit",
     "er verkauft die Ware im Hofladen",
     "er arbeitet das ganze Jahr im Stall"
    ],
    "answer": 1,
    "w": "der Erntehelfer",
    "explain": "der Erntehelfer = er hilft nur wenige Wochen mit."
   },
   {
    "type": "choice",
    "audio": "melken",
    "q": "🔊 Hör zu – was bedeutet das Wort?",
    "options": [
     "Futter in den Trog schütten",
     "Stroh im Stall neu verteilen",
     "Milch von der Kuh holen",
     "die Kühe auf die Weide bringen"
    ],
    "answer": 2,
    "w": "melken",
    "explain": "melken = Milch von der Kuh holen."
   },
   {
    "type": "choice",
    "audio": "der Melkstand",
    "q": "🔊 Hör zu – was bedeutet das Wort?",
    "options": [
     "dort steht das Futter für morgen",
     "dort wird die Milch kalt gestellt",
     "dort schlafen die jungen Kälber",
     "dort gibt die Kuh ihre Milch"
    ],
    "answer": 3,
    "w": "der Melkstand",
    "explain": "der Melkstand = dort gibt die Kuh ihre Milch."
   },
   {
    "type": "choice",
    "audio": "das Futter",
    "q": "🔊 Hör zu – was bedeutet das Wort?",
    "options": [
     "das Essen für die Tiere",
     "das Stroh unter den Tieren",
     "das Wasser in der Tränke",
     "das Salz für die Kühe"
    ],
    "answer": 0,
    "w": "das Futter",
    "explain": "das Futter = das Essen für die Tiere."
   },
   {
    "type": "choice",
    "audio": "ausmisten",
    "q": "🔊 Hör zu – was bedeutet das Wort?",
    "options": [
     "die Tiere am Morgen füttern",
     "den Dreck aus dem Stall holen",
     "das Feld nach dem Regen prüfen",
     "die Kisten auf den Anhänger stellen"
    ],
    "answer": 1,
    "w": "ausmisten",
    "explain": "ausmisten = den Dreck aus dem Stall holen."
   },
   {
    "type": "choice",
    "audio": "die Weide",
    "q": "🔊 Hör zu – was bedeutet das Wort?",
    "options": [
     "das Feld mit dem jungen Korn",
     "der Platz mit den großen Maschinen",
     "die Wiese für die Tiere draußen",
     "der Raum mit dem frischen Stroh"
    ],
    "answer": 2,
    "w": "die Weide",
    "explain": "die Weide = die Wiese für die Tiere draußen."
   },
   {
    "type": "choice",
    "audio": "der Anhänger",
    "q": "🔊 Hör zu – was bedeutet das Wort?",
    "options": [
     "er steht mitten auf dem Feld",
     "er hält die Milch schön kühl",
     "er zieht den schweren Pflug",
     "er hängt hinten am Traktor"
    ],
    "answer": 3,
    "w": "der Anhänger",
    "explain": "der Anhänger = er hängt hinten am Traktor."
   },
   {
    "type": "choice",
    "audio": "der Mähdrescher",
    "q": "🔊 Hör zu – was bedeutet das Wort?",
    "options": [
     "große Maschine holt Korn vom Feld",
     "große Maschine bringt Wasser aufs Feld",
     "große Maschine presst das trockene Stroh",
     "große Maschine hebt die Kisten hoch"
    ],
    "answer": 0,
    "w": "der Mähdrescher",
    "explain": "der Mähdrescher = große Maschine holt Korn vom Feld."
   },
   {
    "type": "choice",
    "audio": "die Aussaat",
    "q": "🔊 Hör zu – was bedeutet das Wort?",
    "options": [
     "die Körner kommen in den Sack",
     "die Körner kommen in die Erde",
     "die Halme werden kurz geschnitten",
     "das Feld wird nass gemacht"
    ],
    "answer": 1,
    "w": "die Aussaat",
    "explain": "die Aussaat = die Körner kommen in die Erde."
   },
   {
    "type": "choice",
    "audio": "der Frost",
    "q": "🔊 Hör zu – was bedeutet das Wort?",
    "options": [
     "nachts fällt sehr viel Regen",
     "morgens liegt Nebel überm Feld",
     "nachts wird es unter null",
     "mittags wird es sehr heiß"
    ],
    "answer": 2,
    "w": "der Frost",
    "explain": "der Frost = nachts wird es unter null."
   },
   {
    "type": "choice",
    "audio": "der Hagel",
    "q": "🔊 Hör zu – was bedeutet das Wort?",
    "options": [
     "starker Wind drückt das Korn um",
     "viel Regen steht auf dem Feld",
     "trockene Wochen ohne einen Tropfen",
     "harte Eiskörner fallen vom Himmel"
    ],
    "answer": 3,
    "w": "der Hagel",
    "explain": "der Hagel = harte Eiskörner fallen vom Himmel."
   },
   {
    "type": "choice",
    "audio": "die Direktvermarktung",
    "q": "🔊 Hör zu – was bedeutet das Wort?",
    "options": [
     "vom Hof direkt an die Leute",
     "vom Hof an einen großen Händler",
     "vom Feld gleich in die Fabrik",
     "vom Laden weiter in die Stadt"
    ],
    "answer": 0,
    "w": "die Direktvermarktung",
    "explain": "die Direktvermarktung = vom Hof direkt an die Leute."
   },
   {
    "type": "choice",
    "audio": "der Hofladen",
    "q": "🔊 Hör zu – was bedeutet das Wort?",
    "options": [
     "man kauft die Ware auf dem Markt",
     "man kauft direkt beim Bauern",
     "man bestellt die Ware im Netz",
     "man kauft im Dorf beim Bäcker"
    ],
    "answer": 1,
    "w": "der Hofladen",
    "explain": "der Hofladen = man kauft direkt beim Bauern."
   },
   {
    "type": "choice",
    "audio": "die Saisonarbeit",
    "q": "🔊 Hör zu – was bedeutet das Wort?",
    "options": [
     "Arbeit nur am frühen Morgen",
     "Arbeit für immer auf einem Hof",
     "Arbeit nur in bestimmten Monaten",
     "Arbeit ohne festen Plan im Stall"
    ],
    "answer": 2,
    "w": "die Saisonarbeit",
    "explain": "die Saisonarbeit = Arbeit nur in bestimmten Monaten."
   },
   {
    "type": "choice",
    "audio": "der Akkordlohn",
    "q": "🔊 Hör zu – was bedeutet das Wort?",
    "options": [
     "Geld nach Stunden auf dem Feld",
     "Geld erst am Ende der Saison",
     "Geld extra für die Arbeit nachts",
     "Geld nach Menge, nicht nach Zeit"
    ],
    "answer": 3,
    "w": "der Akkordlohn",
    "explain": "der Akkordlohn = Geld nach Menge, nicht nach Zeit."
   }
  ]
 },
 {
  "id": "medizin",
  "title": "Arbeit in der Praxis",
  "level": "B1",
  "emoji": "🎧",
  "words": [
   {
    "de": "die Anamnese",
    "info": "das Gespräch über frühere Krankheiten",
    "emoji": "📋"
   },
   {
    "de": "der Befund",
    "info": "das Ergebnis einer Untersuchung",
    "emoji": "📄"
   },
   {
    "de": "die Überweisung",
    "info": "der Zettel für den Facharzt",
    "emoji": "📝"
   },
   {
    "de": "die Sprechstunde",
    "info": "in dieser Zeit sind Kranke dran",
    "emoji": "🕘"
   },
   {
    "de": "das Rezept",
    "info": "damit bekommst du deine Tabletten",
    "emoji": "💊"
   },
   {
    "de": "die Aufklärung",
    "info": "das Gespräch über Nutzen und Gefahren",
    "emoji": "🗣️"
   },
   {
    "de": "die Blutabnahme",
    "info": "Blut aus dem Arm holen",
    "emoji": "🩸"
   },
   {
    "de": "das Labor",
    "info": "dort wird das Blut untersucht",
    "emoji": "🧪"
   },
   {
    "de": "die Versichertenkarte",
    "info": "die Karte von deiner Krankenkasse",
    "emoji": "💳"
   },
   {
    "de": "die Krankschreibung",
    "info": "das Papier für deinen Betrieb",
    "emoji": "📃"
   },
   {
    "de": "die Impfung",
    "info": "der kleine Stich zum Schutz",
    "emoji": "💉"
   },
   {
    "de": "verschieben",
    "info": "auf einen anderen Tag legen",
    "emoji": "📅"
   },
   {
    "de": "die Notfallsprechstunde",
    "info": "ohne Termin, wenn es dringend ist",
    "emoji": "🚑"
   },
   {
    "de": "die Einweisung",
    "info": "damit kommst du ins Krankenhaus",
    "emoji": "🏥"
   },
   {
    "de": "der Kontrolltermin",
    "info": "der zweite Termin zum Nachschauen",
    "emoji": "🔁"
   },
   {
    "de": "die Beschwerden",
    "info": "alles, was dir gerade wehtut",
    "emoji": "🤕"
   }
  ],
  "exercises": [
   {
    "type": "listen",
    "label": "📢 Durchsage in der Ambulanz",
    "audioUrl": "https://d8j0ntlcm91z4.cloudfront.net/user_38tIQPWpEsaUmk18tYN8mskaaAF/hf_20260826_075836_7e833ba1-0f3d-4fb8-9821-cc1d4f6a52ba.mp3",
    "q": "Wonach richtet sich heute die Reihenfolge?",
    "options": [
     "Danach, wie dringend der Fall ist",
     "Danach, wer sich zuerst angemeldet hat",
     "Danach, wer eine Überweisung dabei hat",
     "Danach, wie lange jemand schon wartet"
    ],
    "answer": 0,
    "transcript": "Ein Hinweis für alle Wartenden in der Ambulanz: Wir behandeln heute nicht in der Reihenfolge der Anmeldung, sondern nach der Dringlichkeit. Deshalb kann es sein, dass jemand nach Ihnen früher aufgerufen wird. Im Moment warten Sie etwa eine Stunde. Wer eine Überweisung dabei hat, gibt sie bitte am Schalter ab. Vielen Dank für Ihre Geduld.",
    "explain": "Die Durchsage sagt, dass nicht die Anmeldung zählt, sondern wie dringend ein Fall ist."
   },
   {
    "type": "listen",
    "label": "📞 Mailbox: Vor der Blutabnahme",
    "audioUrl": "https://d8j0ntlcm91z4.cloudfront.net/user_38tIQPWpEsaUmk18tYN8mskaaAF/hf_20260826_075836_9f574c17-a033-4745-b6a1-02d9e848b765.mp3",
    "q": "Was darf Herr Novak vor dem Termin?",
    "options": [
     "Nur Wasser trinken, sonst nichts",
     "Einen kleinen Kaffee ohne Zucker trinken",
     "Ein leichtes Frühstück am Morgen essen",
     "Seine Tabletten mit Milch einnehmen"
    ],
    "answer": 0,
    "transcript": "Guten Tag, Herr Novak, Praxis Doktor Weiler, mein Name ist Sandra Kurz. Ihr Termin zur Blutabnahme am Donnerstag bleibt wie besprochen, bitte kommen Sie aber nüchtern, also ohne Frühstück und ohne Kaffee. Wasser dürfen Sie trinken. Ihre Versichertenkarte brauchen wir dieses Quartal noch. Den Befund besprechen wir dann in der Sprechstunde am Montag.",
    "explain": "Frau Kurz sagt: nüchtern kommen, kein Frühstück und kein Kaffee, nur Wasser ist erlaubt."
   },
   {
    "type": "listen",
    "label": "🪑 An der Anmeldung: Termin beim Hautarzt",
    "audioUrl": "https://d8j0ntlcm91z4.cloudfront.net/user_38tIQPWpEsaUmk18tYN8mskaaAF/hf_20260826_080051_253f8145-f51e-4621-bf18-357f89db4932.mp3",
    "q": "Warum soll der Patient die Überweisung trotzdem mitbringen?",
    "options": [
     "Damit die Praxis seine Vorgeschichte kennt",
     "Damit er den Termin früher bekommen kann",
     "Damit die Behandlung ihn nichts kostet",
     "Damit er nicht ein zweites Mal kommt"
    ],
    "answer": 0,
    "transcript": "Guten Tag, ich hätte gern einen Termin beim Hautarzt. — Haben Sie eine Überweisung von Ihrer Hausärztin? — Nein, brauche ich die? — Für den Termin nicht, aber ohne Überweisung sehen wir Ihre Vorgeschichte nicht. Bringen Sie sie einfach mit. Am Dienstag um acht Uhr fünfzehn wäre etwas frei. — Das passt. — Gut, und denken Sie an Ihre Karte.",
    "explain": "Die Mitarbeiterin sagt, dass die Praxis ohne Überweisung die Vorgeschichte des Patienten nicht sieht."
   },
   {
    "type": "listen",
    "label": "☕ Unter Kolleginnen: Der Herr wartet",
    "audioUrl": "https://d8j0ntlcm91z4.cloudfront.net/user_38tIQPWpEsaUmk18tYN8mskaaAF/hf_20260826_080051_69ab8e2a-0786-4ba3-880a-1d7a0e0e8040.mp3",
    "q": "Warum musste der Patient so lange warten?",
    "options": [
     "Ein Gespräch vor einem Eingriff dauerte länger",
     "Die Werte aus dem Labor fehlen noch immer",
     "Die Ärztin wurde in die Klinik gerufen",
     "Eine Kollegin hat den Termin ganz vergessen"
    ],
    "answer": 0,
    "transcript": "Du, der Herr aus Zimmer drei wartet seit einer Stunde. — Ich weiß, die Aufklärung vor dem kleinen Eingriff hat länger gedauert. — Soll ich ihm einen neuen Termin geben? — Nein, sag ihm bitte, es dauert noch zehn Minuten, dann ruft die Ärztin ihn auf. Und ruf im Labor an, seine Werte sind immer noch nicht da.",
    "explain": "Die Kollegin erklärt, dass die Aufklärung vor dem kleinen Eingriff länger gedauert hat."
   },
   {
    "type": "choice",
    "audio": "die Anamnese",
    "q": "🔊 Hör zu – was bedeutet das Wort?",
    "options": [
     "das Gespräch über frühere Krankheiten",
     "das Gespräch über die neuen Tabletten",
     "die Untersuchung mit dem kalten Gerät",
     "das Ergebnis aus dem Labor"
    ],
    "answer": 0,
    "w": "die Anamnese",
    "explain": "die Anamnese = das Gespräch über frühere Krankheiten."
   },
   {
    "type": "choice",
    "audio": "der Befund",
    "q": "🔊 Hör zu – was bedeutet das Wort?",
    "options": [
     "die Frage nach den Beschwerden",
     "das Ergebnis einer Untersuchung",
     "der Zettel für die Apotheke",
     "der Termin für die Kontrolle"
    ],
    "answer": 1,
    "w": "der Befund",
    "explain": "der Befund = das Ergebnis einer Untersuchung."
   },
   {
    "type": "choice",
    "audio": "die Überweisung",
    "q": "🔊 Hör zu – was bedeutet das Wort?",
    "options": [
     "der Zettel für die Apotheke",
     "der Zettel für den Betrieb",
     "der Zettel für den Facharzt",
     "der Zettel mit deinen Werten"
    ],
    "answer": 2,
    "w": "die Überweisung",
    "explain": "die Überweisung = der Zettel für den Facharzt."
   },
   {
    "type": "choice",
    "audio": "die Sprechstunde",
    "q": "🔊 Hör zu – was bedeutet das Wort?",
    "options": [
     "in dieser Zeit ist die Praxis zu",
     "in dieser Zeit macht das Team Pause",
     "in dieser Zeit wird sauber gemacht",
     "in dieser Zeit sind Kranke dran"
    ],
    "answer": 3,
    "w": "die Sprechstunde",
    "explain": "die Sprechstunde = in dieser Zeit sind Kranke dran."
   },
   {
    "type": "choice",
    "audio": "das Rezept",
    "q": "🔊 Hör zu – was bedeutet das Wort?",
    "options": [
     "damit bekommst du deine Tabletten",
     "damit bekommst du einen neuen Termin",
     "damit bekommst du frei von der Arbeit",
     "damit kommst du zum Facharzt"
    ],
    "answer": 0,
    "w": "das Rezept",
    "explain": "das Rezept = damit bekommst du deine Tabletten."
   },
   {
    "type": "choice",
    "audio": "die Aufklärung",
    "q": "🔊 Hör zu – was bedeutet das Wort?",
    "options": [
     "das Gespräch über die alten Krankheiten",
     "das Gespräch über Nutzen und Gefahren",
     "der Brief mit dem Ergebnis der Werte",
     "die Erklärung für den nächsten Termin"
    ],
    "answer": 1,
    "w": "die Aufklärung",
    "explain": "die Aufklärung = das Gespräch über Nutzen und Gefahren."
   },
   {
    "type": "choice",
    "audio": "die Blutabnahme",
    "q": "🔊 Hör zu – was bedeutet das Wort?",
    "options": [
     "den Blutdruck am Arm messen",
     "eine Spritze in den Arm geben",
     "Blut aus dem Arm holen",
     "den Verband am Arm wechseln"
    ],
    "answer": 2,
    "w": "die Blutabnahme",
    "explain": "die Blutabnahme = Blut aus dem Arm holen."
   },
   {
    "type": "choice",
    "audio": "das Labor",
    "q": "🔊 Hör zu – was bedeutet das Wort?",
    "options": [
     "dort werden die Tabletten verkauft",
     "dort warten die Kranken vor der Tür",
     "dort werden die Termine vergeben",
     "dort wird das Blut untersucht"
    ],
    "answer": 3,
    "w": "das Labor",
    "explain": "das Labor = dort wird das Blut untersucht."
   },
   {
    "type": "choice",
    "audio": "die Versichertenkarte",
    "q": "🔊 Hör zu – was bedeutet das Wort?",
    "options": [
     "die Karte von deiner Krankenkasse",
     "die Karte für den nächsten Termin",
     "die Karte mit deinen Impfungen",
     "die Karte aus der Apotheke"
    ],
    "answer": 0,
    "w": "die Versichertenkarte",
    "explain": "die Versichertenkarte = die Karte von deiner Krankenkasse."
   },
   {
    "type": "choice",
    "audio": "die Krankschreibung",
    "q": "🔊 Hör zu – was bedeutet das Wort?",
    "options": [
     "das Papier mit deinen Werten",
     "das Papier für deinen Betrieb",
     "das Papier für die Apotheke",
     "das Papier für das Krankenhaus"
    ],
    "answer": 1,
    "w": "die Krankschreibung",
    "explain": "die Krankschreibung = das Papier für deinen Betrieb."
   },
   {
    "type": "choice",
    "audio": "die Impfung",
    "q": "🔊 Hör zu – was bedeutet das Wort?",
    "options": [
     "der kleine Stich für das Blut",
     "die Tablette gegen die Schmerzen",
     "der kleine Stich zum Schutz",
     "der Termin bei dem Hautarzt"
    ],
    "answer": 2,
    "w": "die Impfung",
    "explain": "die Impfung = der kleine Stich zum Schutz."
   },
   {
    "type": "choice",
    "audio": "verschieben",
    "q": "🔊 Hör zu – was bedeutet das Wort?",
    "options": [
     "den Termin ganz und gar absagen",
     "früher in die Praxis kommen",
     "einen zweiten Termin dazubekommen",
     "auf einen anderen Tag legen"
    ],
    "answer": 3,
    "w": "verschieben",
    "explain": "verschieben = auf einen anderen Tag legen."
   },
   {
    "type": "choice",
    "audio": "die Notfallsprechstunde",
    "q": "🔊 Hör zu – was bedeutet das Wort?",
    "options": [
     "ohne Termin, wenn es dringend ist",
     "mit Termin am ganz frühen Morgen",
     "nur für Kinder unter sechs Jahren",
     "nur nach einem Anruf am Vortag"
    ],
    "answer": 0,
    "w": "die Notfallsprechstunde",
    "explain": "die Notfallsprechstunde = ohne Termin, wenn es dringend ist."
   },
   {
    "type": "choice",
    "audio": "die Einweisung",
    "q": "🔊 Hör zu – was bedeutet das Wort?",
    "options": [
     "damit kommst du zum Facharzt",
     "damit kommst du ins Krankenhaus",
     "damit bekommst du eine Kur bezahlt",
     "damit darfst du zu Hause bleiben"
    ],
    "answer": 1,
    "w": "die Einweisung",
    "explain": "die Einweisung = damit kommst du ins Krankenhaus."
   },
   {
    "type": "choice",
    "audio": "der Kontrolltermin",
    "q": "🔊 Hör zu – was bedeutet das Wort?",
    "options": [
     "der erste Termin in der Praxis",
     "der Termin nur für die Blutabnahme",
     "der zweite Termin zum Nachschauen",
     "der Termin bei einem anderen Arzt"
    ],
    "answer": 2,
    "w": "der Kontrolltermin",
    "explain": "der Kontrolltermin = der zweite Termin zum Nachschauen."
   },
   {
    "type": "choice",
    "audio": "die Beschwerden",
    "q": "🔊 Hör zu – was bedeutet das Wort?",
    "options": [
     "alles, was der Arzt gefunden hat",
     "alles, was du früher hattest",
     "alles, was du nehmen musst",
     "alles, was dir gerade wehtut"
    ],
    "answer": 3,
    "w": "die Beschwerden",
    "explain": "die Beschwerden = alles, was dir gerade wehtut."
   }
  ]
 },
 {
  "id": "metall",
  "title": "In der Metallwerkstatt",
  "level": "B1",
  "emoji": "🎧",
  "words": [
   {
    "de": "die Zeichnung",
    "info": "das Blatt mit allen Maßen",
    "emoji": "📐"
   },
   {
    "de": "das Maß",
    "info": "wie lang oder breit etwas ist",
    "emoji": "📏"
   },
   {
    "de": "die Toleranz",
    "info": "der kleine erlaubte Unterschied",
    "emoji": "↔️"
   },
   {
    "de": "schweißen",
    "info": "zwei Teile mit Hitze verbinden",
    "emoji": "🔥"
   },
   {
    "de": "fräsen",
    "info": "mit einem Werkzeug Material wegnehmen",
    "emoji": "⚙️"
   },
   {
    "de": "das Werkstück",
    "info": "das Teil, an dem man arbeitet",
    "emoji": "🔩"
   },
   {
    "de": "die Schichtübergabe",
    "info": "man sagt dem Nächsten alles Wichtige",
    "emoji": "🔁"
   },
   {
    "de": "die Qualitätskontrolle",
    "info": "prüfen, ob alles richtig gemacht wurde",
    "emoji": "✅"
   },
   {
    "de": "der Arbeitsschutz",
    "info": "Regeln, damit niemand verletzt wird",
    "emoji": "🦺"
   },
   {
    "de": "die Schutzbrille",
    "info": "sie schützt die Augen",
    "emoji": "🥽"
   },
   {
    "de": "der Grat",
    "info": "scharfe Kante nach dem Schneiden",
    "emoji": "🔪"
   },
   {
    "de": "entgraten",
    "info": "die scharfe Kante glatt machen",
    "emoji": "🧽"
   },
   {
    "de": "der Messschieber",
    "info": "damit misst man sehr genau",
    "emoji": "🔧"
   },
   {
    "de": "die Späne",
    "info": "kleine Metallreste beim Bohren",
    "emoji": "🌀"
   },
   {
    "de": "die Vorrichtung",
    "info": "sie hält das Teil fest",
    "emoji": "🗜️"
   },
   {
    "de": "der Ausschuss",
    "info": "das Teil ist nicht zu gebrauchen",
    "emoji": "🚮"
   }
  ],
  "exercises": [
   {
    "type": "listen",
    "label": "📢 Durchsage in der Halle",
    "audioUrl": "https://d8j0ntlcm91z4.cloudfront.net/user_38tIQPWpEsaUmk18tYN8mskaaAF/hf_20260826_080051_82c36c09-44ad-40a6-9e38-22bce3cb0f34.mp3",
    "q": "Wohin sollen die fertigen Werkstücke kommen?",
    "options": [
     "Direkt zur Qualitätskontrolle, nicht auf den Tisch",
     "Auf den Tisch bei der Tür in Halle zwei",
     "In den Schrank am Eingang der großen Halle",
     "Erst nach der Schichtübergabe an die Fräse"
    ],
    "answer": 0,
    "transcript": "Achtung, eine Durchsage für die Frühschicht. Die große Fräse in Halle zwei steht bis zum Mittag still, ein Fachmann ist schon unterwegs. Bitte legt eure fertigen Werkstücke nicht auf den Tisch bei der Tür, sondern bringt sie direkt zur Qualitätskontrolle. Für alle, die schweißen: Die neuen Schutzbrillen liegen ab heute im Schrank am Eingang. Die Schichtübergabe bleibt wie immer um vierzehn Uhr.",
    "explain": "In der Durchsage heißt es, die fertigen Teile sollen nicht auf den Tisch, sondern direkt zur Qualitätskontrolle."
   },
   {
    "type": "listen",
    "label": "📞 Mailbox: Die Teile sind durchgefallen",
    "audioUrl": "https://d8j0ntlcm91z4.cloudfront.net/user_38tIQPWpEsaUmk18tYN8mskaaAF/hf_20260826_080051_b9a7806e-d188-4465-a38e-6ba1a15a1fbf.mp3",
    "q": "Warum sind die Teile Ausschuss?",
    "options": [
     "Das Maß an der Bohrung ist zu groß",
     "Die Teile haben an der Kante einen Grat",
     "Die Zeichnung gehörte zu einem anderen Teil",
     "Die Maschine lief mit zu wenig Kühlung"
    ],
    "answer": 0,
    "transcript": "Hallo Herr Nowak, Berger hier aus der Werkstatt. Die zwanzig Teile von gestern sind bei der Kontrolle durchgefallen. Das Maß an der Bohrung liegt zwei Zehntel über der Toleranz, das ist alles Ausschuss. Schau dir bitte gleich früh die Zeichnung noch einmal genau an, bevor du die Maschine anstellst. Und melde dich bei mir vor der Schichtübergabe.",
    "explain": "Der Meister sagt, das Maß an der Bohrung liege über der Toleranz, die Löcher sind also zu groß."
   },
   {
    "type": "listen",
    "label": "🪟 Am Tresen: Werkzeug aus dem Lager",
    "audioUrl": "https://d8j0ntlcm91z4.cloudfront.net/user_38tIQPWpEsaUmk18tYN8mskaaAF/hf_20260826_080051_587d3e5c-c76a-40db-97e2-78a34cbb1a9b.mp3",
    "q": "Was bekommt er nur gegen Unterschrift?",
    "options": [
     "Das Werkzeug zum ganz genauen Messen",
     "Die beiden Fräser mit acht Millimeter",
     "Die neue Schutzbrille für das Schweißen",
     "Das Werkstück aus dem Lager hinten"
    ],
    "answer": 0,
    "transcript": "Moin, ich brauche einen Messschieber und zwei Fräser. — Den Messschieber gebe ich dir nur gegen Unterschrift. — Und die Fräser? — Welche Größe steht in der Zeichnung? — Acht Millimeter. — Da habe ich nur noch einen da, der andere kommt am Donnerstag. — Dann nehme ich den einen. — Und setz die Schutzbrille auf, sonst schickt dich der Meister wieder raus.",
    "explain": "Der Mann im Lager sagt, den Messschieber, also das genaue Messwerkzeug, gibt es nur gegen Unterschrift."
   },
   {
    "type": "listen",
    "label": "☕ Privat: Der Neue und die Späne",
    "audioUrl": "https://d8j0ntlcm91z4.cloudfront.net/user_38tIQPWpEsaUmk18tYN8mskaaAF/hf_20260826_080051_de4b8edd-6713-4455-9431-32a658cfe79d.mp3",
    "q": "Woran hat sich der neue Kollege geschnitten?",
    "options": [
     "An der scharfen Kante von dem Werkstück",
     "An den heißen Spänen neben der Maschine",
     "An dem Blech in dem Wagen für Schrott",
     "An dem Werkzeug in der großen Fräse"
    ],
    "answer": 0,
    "transcript": "Wie war die Nachtschicht? — Lang. Der Neue hat ohne Handschuhe die Späne weggeräumt und sich gleich geschnitten. — Am Werkstück oder an der Maschine? — Am Grat, er hatte nichts entgratet. — Und der Meister? — Der hat ihn nach Hause geschickt und heute früh alle noch einmal in den Arbeitsschutz eingewiesen. Eine halbe Stunde standen wir da.",
    "explain": "Er hat sich am Grat geschnitten, also an der scharfen Kante des nicht entgrateten Werkstücks."
   },
   {
    "type": "choice",
    "audio": "die Zeichnung",
    "q": "🔊 Hör zu – was bedeutet das Wort?",
    "options": [
     "das Blatt mit allen Maßen",
     "das Blatt mit den Preisen",
     "die Liste mit den Namen",
     "der Zettel mit den Zeiten"
    ],
    "answer": 0,
    "w": "die Zeichnung",
    "explain": "die Zeichnung = das Blatt mit allen Maßen."
   },
   {
    "type": "choice",
    "audio": "das Maß",
    "q": "🔊 Hör zu – was bedeutet das Wort?",
    "options": [
     "wie schwer oder leicht etwas ist",
     "wie lang oder breit etwas ist",
     "wie hart oder weich etwas ist",
     "wie neu oder alt etwas ist"
    ],
    "answer": 1,
    "w": "das Maß",
    "explain": "das Maß = wie lang oder breit etwas ist."
   },
   {
    "type": "choice",
    "audio": "die Toleranz",
    "q": "🔊 Hör zu – was bedeutet das Wort?",
    "options": [
     "der große sichtbare Fehler",
     "der genaue Wert aus der Zeichnung",
     "der kleine erlaubte Unterschied",
     "der letzte Schritt vor dem Ende"
    ],
    "answer": 2,
    "w": "die Toleranz",
    "explain": "die Toleranz = der kleine erlaubte Unterschied."
   },
   {
    "type": "choice",
    "audio": "schweißen",
    "q": "🔊 Hör zu – was bedeutet das Wort?",
    "options": [
     "zwei Teile mit Schrauben verbinden",
     "ein Teil mit Hitze weich machen",
     "ein Teil in zwei Stücke trennen",
     "zwei Teile mit Hitze verbinden"
    ],
    "answer": 3,
    "w": "schweißen",
    "explain": "schweißen = zwei Teile mit Hitze verbinden."
   },
   {
    "type": "choice",
    "audio": "fräsen",
    "q": "🔊 Hör zu – was bedeutet das Wort?",
    "options": [
     "mit einem Werkzeug Material wegnehmen",
     "mit einem Werkzeug Material auftragen",
     "mit der Hand ein Teil glätten",
     "mit Hitze ein Teil weich biegen"
    ],
    "answer": 0,
    "w": "fräsen",
    "explain": "fräsen = mit einem Werkzeug Material wegnehmen."
   },
   {
    "type": "choice",
    "audio": "das Werkstück",
    "q": "🔊 Hör zu – was bedeutet das Wort?",
    "options": [
     "das Werkzeug, mit dem man arbeitet",
     "das Teil, an dem man arbeitet",
     "der Tisch, an dem man arbeitet",
     "der Plan, nach dem man arbeitet"
    ],
    "answer": 1,
    "w": "das Werkstück",
    "explain": "das Werkstück = das Teil, an dem man arbeitet."
   },
   {
    "type": "choice",
    "audio": "die Schichtübergabe",
    "q": "🔊 Hör zu – was bedeutet das Wort?",
    "options": [
     "man schreibt dem Chef einen Bericht",
     "man tauscht mit einem Kollegen den Tag",
     "man sagt dem Nächsten alles Wichtige",
     "man beginnt eine Stunde später als sonst"
    ],
    "answer": 2,
    "w": "die Schichtübergabe",
    "explain": "die Schichtübergabe = man sagt dem Nächsten alles Wichtige."
   },
   {
    "type": "choice",
    "audio": "die Qualitätskontrolle",
    "q": "🔊 Hör zu – was bedeutet das Wort?",
    "options": [
     "zählen, wie viel gemacht wurde",
     "planen, was morgen gemacht wird",
     "messen, wie lange etwas gedauert hat",
     "prüfen, ob alles richtig gemacht wurde"
    ],
    "answer": 3,
    "w": "die Qualitätskontrolle",
    "explain": "die Qualitätskontrolle = prüfen, ob alles richtig gemacht wurde."
   },
   {
    "type": "choice",
    "audio": "der Arbeitsschutz",
    "q": "🔊 Hör zu – was bedeutet das Wort?",
    "options": [
     "Regeln, damit niemand verletzt wird",
     "Regeln, damit nichts kaputtgeht",
     "Pausen, damit alle sich erholen",
     "Kleidung, damit alle gleich aussehen"
    ],
    "answer": 0,
    "w": "der Arbeitsschutz",
    "explain": "der Arbeitsschutz = Regeln, damit niemand verletzt wird."
   },
   {
    "type": "choice",
    "audio": "die Schutzbrille",
    "q": "🔊 Hör zu – was bedeutet das Wort?",
    "options": [
     "sie schützt die Ohren",
     "sie schützt die Augen",
     "sie schützt die Hände",
     "sie schützt das Gesicht vor Kälte"
    ],
    "answer": 1,
    "w": "die Schutzbrille",
    "explain": "die Schutzbrille = sie schützt die Augen."
   },
   {
    "type": "choice",
    "audio": "der Grat",
    "q": "🔊 Hör zu – was bedeutet das Wort?",
    "options": [
     "kleines Loch nach dem Bohren",
     "dunkler Fleck nach dem Schweißen",
     "scharfe Kante nach dem Schneiden",
     "feiner Riss nach dem Biegen"
    ],
    "answer": 2,
    "w": "der Grat",
    "explain": "der Grat = scharfe Kante nach dem Schneiden."
   },
   {
    "type": "choice",
    "audio": "entgraten",
    "q": "🔊 Hör zu – was bedeutet das Wort?",
    "options": [
     "die schmutzige Fläche sauber machen",
     "das krumme Teil gerade machen",
     "das große Loch enger machen",
     "die scharfe Kante glatt machen"
    ],
    "answer": 3,
    "w": "entgraten",
    "explain": "entgraten = die scharfe Kante glatt machen."
   },
   {
    "type": "choice",
    "audio": "der Messschieber",
    "q": "🔊 Hör zu – was bedeutet das Wort?",
    "options": [
     "damit misst man sehr genau",
     "damit hält man das Teil fest",
     "damit schneidet man das Blech",
     "damit zeichnet man auf das Teil"
    ],
    "answer": 0,
    "w": "der Messschieber",
    "explain": "der Messschieber = damit misst man sehr genau."
   },
   {
    "type": "choice",
    "audio": "die Späne",
    "q": "🔊 Hör zu – was bedeutet das Wort?",
    "options": [
     "kleine Löcher im fertigen Teil",
     "kleine Metallreste beim Bohren",
     "dünnes Öl an der Maschine",
     "feiner Staub aus der Halle"
    ],
    "answer": 1,
    "w": "die Späne",
    "explain": "die Späne = kleine Metallreste beim Bohren."
   },
   {
    "type": "choice",
    "audio": "die Vorrichtung",
    "q": "🔊 Hör zu – was bedeutet das Wort?",
    "options": [
     "sie misst das Teil nach",
     "sie bringt das Teil zur Kontrolle",
     "sie hält das Teil fest",
     "sie macht das Teil sauber"
    ],
    "answer": 2,
    "w": "die Vorrichtung",
    "explain": "die Vorrichtung = sie hält das Teil fest."
   },
   {
    "type": "choice",
    "audio": "der Ausschuss",
    "q": "🔊 Hör zu – was bedeutet das Wort?",
    "options": [
     "das Teil ist noch nicht fertig",
     "das Teil ist schon verkauft worden",
     "das Teil ist gerade in der Prüfung",
     "das Teil ist nicht zu gebrauchen"
    ],
    "answer": 3,
    "w": "der Ausschuss",
    "explain": "der Ausschuss = das Teil ist nicht zu gebrauchen."
   }
  ]
 },
 {
  "id": "pflege",
  "title": "Arbeit in der Pflege",
  "level": "B1",
  "emoji": "🎧",
  "words": [
   {
    "de": "die Übergabe",
    "info": "kurzer Bericht beim Wechsel der Schicht",
    "emoji": "🔄"
   },
   {
    "de": "der Dienstplan",
    "info": "dort steht, wann du arbeitest",
    "emoji": "📅"
   },
   {
    "de": "die Frühschicht",
    "info": "die Arbeit ganz früh am Morgen",
    "emoji": "🌅"
   },
   {
    "de": "der Nachtdienst",
    "info": "arbeiten, wenn alle anderen schlafen",
    "emoji": "🌙"
   },
   {
    "de": "einspringen",
    "info": "kurzfristig für eine kranke Kollegin arbeiten",
    "emoji": "🏃"
   },
   {
    "de": "die Pflegedokumentation",
    "info": "dort wird jeder Handgriff aufgeschrieben",
    "emoji": "📝"
   },
   {
    "de": "Medikamente stellen",
    "info": "Tabletten für jeden Tag vorbereiten",
    "emoji": "💊"
   },
   {
    "de": "die Bewohnerin",
    "info": "sie lebt hier im Heim",
    "emoji": "👵"
   },
   {
    "de": "die Angehörigen",
    "info": "die Familie der kranken Person",
    "emoji": "👨‍👩‍👦"
   },
   {
    "de": "die Lagerung",
    "info": "den Körper anders hinlegen",
    "emoji": "🛏️"
   },
   {
    "de": "das Wundliegen",
    "info": "wunde Haut vom langen Liegen",
    "emoji": "🩹"
   },
   {
    "de": "die Notfallklingel",
    "info": "damit ruft man schnell Hilfe",
    "emoji": "🔔"
   },
   {
    "de": "die Schweigepflicht",
    "info": "du darfst nichts nach außen erzählen",
    "emoji": "🤐"
   },
   {
    "de": "die Sturzgefahr",
    "info": "die Person fällt leicht hin",
    "emoji": "⚠️"
   },
   {
    "de": "die Grundpflege",
    "info": "waschen, anziehen, Zähne sauber machen",
    "emoji": "🧼"
   },
   {
    "de": "die Visite",
    "info": "der Arzt geht durch die Zimmer",
    "emoji": "🩺"
   }
  ],
  "exercises": [
   {
    "type": "listen",
    "label": "📢 Durchsage im Pflegeheim",
    "audioUrl": "https://d8j0ntlcm91z4.cloudfront.net/user_38tIQPWpEsaUmk18tYN8mskaaAF/hf_20260826_080305_868b8c6e-1289-4b98-8927-177f150dbeeb.mp3",
    "q": "Warum ist die Übergabe heute nicht im Dienstzimmer?",
    "options": [
     "Dort wird gerade der Boden erneuert",
     "Dort ist es für alle zu eng",
     "Dort fehlt seit gestern der Schlüssel",
     "Dort wird der Schrank neu eingeräumt"
    ],
    "answer": 0,
    "transcript": "Liebe Kolleginnen und Kollegen, eine kurze Information zur Frühschicht: Die Übergabe findet heute nicht im Dienstzimmer statt, sondern im Aufenthaltsraum im Erdgeschoss. Im Dienstzimmer wird seit gestern der Boden erneuert. Bitte bringt eure Dokumentation mit, die Schränke bleiben den ganzen Tag verschlossen. Die Übergabe beginnt trotzdem pünktlich um sechs Uhr dreißig.",
    "explain": "In der Durchsage heißt es, dass im Dienstzimmer seit gestern der Boden erneuert wird."
   },
   {
    "type": "listen",
    "label": "📞 Mailbox: Einspringen im Nachtdienst",
    "audioUrl": "https://d8j0ntlcm91z4.cloudfront.net/user_38tIQPWpEsaUmk18tYN8mskaaAF/hf_20260826_080305_4a63a6a6-f3cd-4375-9f95-8bec1a204a8f.mp3",
    "q": "Was bekommt Frau Cetin, wenn sie einspringt?",
    "options": [
     "Einen freien Tag in der nächsten Woche",
     "Einen freien Abend noch in dieser Woche",
     "Eine höhere Bezahlung für diese Nacht",
     "Eine kürzere Schicht am nächsten Morgen"
    ],
    "answer": 0,
    "transcript": "Hallo Frau Cetin, hier ist Marek von der Pflegedienstleitung. Frau Ohm ist im Nachtdienst ausgefallen, und ich wollte fragen, ob Sie morgen einspringen können. Sie müssen nicht, das ist wirklich freiwillig. Wenn Sie kommen, bekommen Sie den Freitag nächste Woche frei. Sagen Sie mir bitte bis heute achtzehn Uhr Bescheid, danach frage ich die Zeitarbeit.",
    "explain": "Marek sagt ausdrücklich, dass sie den Freitag in der nächsten Woche frei bekommt, wenn sie kommt."
   },
   {
    "type": "listen",
    "label": "🪑 Am Empfang: Auskunft über die Tante",
    "audioUrl": "https://d8j0ntlcm91z4.cloudfront.net/user_38tIQPWpEsaUmk18tYN8mskaaAF/hf_20260826_080305_ba82342a-2693-4903-b1e4-ecde909d6ffd.mp3",
    "q": "Warum bekommt die Nichte keine Auskunft?",
    "options": [
     "In der Akte steht nur ihr Bruder",
     "Die Tante schläft um diese Zeit meistens",
     "Die Pflegerin kennt die Tante noch nicht",
     "Am Empfang gibt es niemals Auskunft"
    ],
    "answer": 0,
    "transcript": "Guten Tag, ich wollte fragen, wie es meiner Tante geht. — Wie ist Ihr Name, bitte? — Yilmaz, ich bin die Nichte. — Einen Moment. Es tut mir leid, Frau Yilmaz, in unserer Akte steht nur Ihr Bruder als Auskunftsperson. Ohne die Zustimmung Ihrer Tante darf ich Ihnen nichts sagen. — Und wenn sie das selbst erlaubt? — Dann gern, sprechen Sie am besten heute mit ihr.",
    "explain": "Die Pflegerin erklärt, dass in der Akte nur der Bruder als Auskunftsperson eingetragen ist."
   },
   {
    "type": "listen",
    "label": "☕ In der Pause: Die Nacht bei Herrn Palm",
    "audioUrl": "https://d8j0ntlcm91z4.cloudfront.net/user_38tIQPWpEsaUmk18tYN8mskaaAF/hf_20260826_080305_e4545311-d05a-4921-b7fb-a5353f6418f9.mp3",
    "q": "Warum hat Herr Palm in der Nacht geklingelt?",
    "options": [
     "Er lag unbequem und hatte Schmerzen",
     "Er hatte großen Durst in der Nacht",
     "Er wollte nicht allein im Zimmer sein",
     "Er suchte seine Brille neben dem Bett"
    ],
    "answer": 0,
    "transcript": "Wie war die Nacht bei euch? — Ruhig, bis auf Herrn Palm. Er hat dreimal geklingelt, immer wegen der Lagerung. — Liegt er wieder auf der rechten Seite? — Ja, und das tut ihm weh. Ich habe es in die Dokumentation geschrieben und der Frühschicht gesagt. — Gut. Sag es in der Übergabe noch mal laut, sonst geht es unter.",
    "explain": "Er klingelte immer wegen der Lagerung, weil das Liegen auf der rechten Seite ihm wehtut."
   },
   {
    "type": "choice",
    "audio": "die Übergabe",
    "q": "🔊 Hör zu – was bedeutet das Wort?",
    "options": [
     "kurzer Bericht beim Wechsel der Schicht",
     "das Gespräch mit dem Arzt am Bett",
     "der Wechsel vom Bett in den Rollstuhl",
     "die Liste mit allen Zimmern der Station"
    ],
    "answer": 0,
    "w": "die Übergabe",
    "explain": "die Übergabe = kurzer Bericht beim Wechsel der Schicht."
   },
   {
    "type": "choice",
    "audio": "der Dienstplan",
    "q": "🔊 Hör zu – was bedeutet das Wort?",
    "options": [
     "dort steht, was du verdienst",
     "dort steht, wann du arbeitest",
     "dort steht, wer im Zimmer liegt",
     "dort steht, welche Tabletten kommen"
    ],
    "answer": 1,
    "w": "der Dienstplan",
    "explain": "der Dienstplan = dort steht, wann du arbeitest."
   },
   {
    "type": "choice",
    "audio": "die Frühschicht",
    "q": "🔊 Hör zu – was bedeutet das Wort?",
    "options": [
     "die Arbeit am späten Nachmittag",
     "die erste Woche im neuen Heim",
     "die Arbeit ganz früh am Morgen",
     "die Pause vor dem Mittagessen"
    ],
    "answer": 2,
    "w": "die Frühschicht",
    "explain": "die Frühschicht = die Arbeit ganz früh am Morgen."
   },
   {
    "type": "choice",
    "audio": "der Nachtdienst",
    "q": "🔊 Hör zu – was bedeutet das Wort?",
    "options": [
     "arbeiten, wenn die Besucher da sind",
     "arbeiten, bis das Mittagessen vorbei ist",
     "arbeiten, weil eine Kollegin krank ist",
     "arbeiten, wenn alle anderen schlafen"
    ],
    "answer": 3,
    "w": "der Nachtdienst",
    "explain": "der Nachtdienst = arbeiten, wenn alle anderen schlafen."
   },
   {
    "type": "choice",
    "audio": "einspringen",
    "q": "🔊 Hör zu – was bedeutet das Wort?",
    "options": [
     "kurzfristig für eine kranke Kollegin arbeiten",
     "schnell zu einem klingelnden Zimmer gehen",
     "eine Schicht mit der Kollegin tauschen",
     "früher als sonst nach Hause gehen"
    ],
    "answer": 0,
    "w": "einspringen",
    "explain": "einspringen = kurzfristig für eine kranke Kollegin arbeiten."
   },
   {
    "type": "choice",
    "audio": "die Pflegedokumentation",
    "q": "🔊 Hör zu – was bedeutet das Wort?",
    "options": [
     "dort werden die Dienste eingeteilt",
     "dort wird jeder Handgriff aufgeschrieben",
     "dort liegen die Rezepte der Ärzte",
     "dort stehen die Nummern der Angehörigen"
    ],
    "answer": 1,
    "w": "die Pflegedokumentation",
    "explain": "die Pflegedokumentation = dort wird jeder Handgriff aufgeschrieben."
   },
   {
    "type": "choice",
    "audio": "Medikamente stellen",
    "q": "🔊 Hör zu – was bedeutet das Wort?",
    "options": [
     "Tabletten beim Arzt neu bestellen",
     "Tabletten im Schrank sicher wegschließen",
     "Tabletten für jeden Tag vorbereiten",
     "Tabletten mit einem Glas Wasser reichen"
    ],
    "answer": 2,
    "w": "Medikamente stellen",
    "explain": "Medikamente stellen = Tabletten für jeden Tag vorbereiten."
   },
   {
    "type": "choice",
    "audio": "die Bewohnerin",
    "q": "🔊 Hör zu – was bedeutet das Wort?",
    "options": [
     "sie besucht hier ihre Mutter",
     "sie arbeitet hier seit Jahren",
     "sie kommt nur zum Waschen",
     "sie lebt hier im Heim"
    ],
    "answer": 3,
    "w": "die Bewohnerin",
    "explain": "die Bewohnerin = sie lebt hier im Heim."
   },
   {
    "type": "choice",
    "audio": "die Angehörigen",
    "q": "🔊 Hör zu – was bedeutet das Wort?",
    "options": [
     "die Familie der kranken Person",
     "die Kolleginnen auf der Station",
     "die Nachbarn aus dem alten Haus",
     "die Ärzte bei der Visite"
    ],
    "answer": 0,
    "w": "die Angehörigen",
    "explain": "die Angehörigen = die Familie der kranken Person."
   },
   {
    "type": "choice",
    "audio": "die Lagerung",
    "q": "🔊 Hör zu – was bedeutet das Wort?",
    "options": [
     "das Bett frisch beziehen",
     "den Körper anders hinlegen",
     "die Sachen im Schrank ordnen",
     "den Rollstuhl richtig einstellen"
    ],
    "answer": 1,
    "w": "die Lagerung",
    "explain": "die Lagerung = den Körper anders hinlegen."
   },
   {
    "type": "choice",
    "audio": "das Wundliegen",
    "q": "🔊 Hör zu – was bedeutet das Wort?",
    "options": [
     "müde Beine vom langen Stehen",
     "kalte Hände in der Nacht",
     "wunde Haut vom langen Liegen",
     "trockene Haut vom vielen Waschen"
    ],
    "answer": 2,
    "w": "das Wundliegen",
    "explain": "das Wundliegen = wunde Haut vom langen Liegen."
   },
   {
    "type": "choice",
    "audio": "die Notfallklingel",
    "q": "🔊 Hör zu – was bedeutet das Wort?",
    "options": [
     "damit macht man das Licht an",
     "damit ruft man beim Arzt an",
     "damit öffnet man die Zimmertür",
     "damit ruft man schnell Hilfe"
    ],
    "answer": 3,
    "w": "die Notfallklingel",
    "explain": "die Notfallklingel = damit ruft man schnell Hilfe."
   },
   {
    "type": "choice",
    "audio": "die Schweigepflicht",
    "q": "🔊 Hör zu – was bedeutet das Wort?",
    "options": [
     "du darfst nichts nach außen erzählen",
     "du musst im Zimmer leise sein",
     "du darfst nicht ohne Grund fragen",
     "du musst alles ganz genau aufschreiben"
    ],
    "answer": 0,
    "w": "die Schweigepflicht",
    "explain": "die Schweigepflicht = du darfst nichts nach außen erzählen."
   },
   {
    "type": "choice",
    "audio": "die Sturzgefahr",
    "q": "🔊 Hör zu – was bedeutet das Wort?",
    "options": [
     "die Person kann schlecht schlucken",
     "die Person fällt leicht hin",
     "die Person läuft nachts gern weg",
     "die Person hört sehr schlecht"
    ],
    "answer": 1,
    "w": "die Sturzgefahr",
    "explain": "die Sturzgefahr = die Person fällt leicht hin."
   },
   {
    "type": "choice",
    "audio": "die Grundpflege",
    "q": "🔊 Hör zu – was bedeutet das Wort?",
    "options": [
     "Betten machen und Zimmer putzen",
     "Essen kochen und Tisch decken",
     "waschen, anziehen, Zähne sauber machen",
     "Wunden reinigen und neu verbinden"
    ],
    "answer": 2,
    "w": "die Grundpflege",
    "explain": "die Grundpflege = waschen, anziehen, Zähne sauber machen."
   },
   {
    "type": "choice",
    "audio": "die Visite",
    "q": "🔊 Hör zu – was bedeutet das Wort?",
    "options": [
     "die Familie kommt zu Besuch",
     "die Nachtschicht übergibt am Morgen",
     "der Betreuer prüft die Papiere",
     "der Arzt geht durch die Zimmer"
    ],
    "answer": 3,
    "w": "die Visite",
    "explain": "die Visite = der Arzt geht durch die Zimmer."
   }
  ]
 },
 {
  "id": "polizei",
  "title": "Bei der Polizei",
  "level": "B1",
  "emoji": "🎧",
  "words": [
   {
    "de": "die Anzeige",
    "info": "du meldest eine Tat der Polizei",
    "emoji": "📝"
   },
   {
    "de": "der Diebstahl",
    "info": "jemand nimmt dir etwas weg",
    "emoji": "🕵️"
   },
   {
    "de": "die Personalien",
    "info": "Name, Geburtstag und Wohnort",
    "emoji": "🪪"
   },
   {
    "de": "der Zeuge",
    "info": "er hat alles genau gesehen",
    "emoji": "👀"
   },
   {
    "de": "das Aktenzeichen",
    "info": "die Nummer zu deinem Fall",
    "emoji": "🔢"
   },
   {
    "de": "das Fundbüro",
    "info": "dort liegen verlorene Sachen",
    "emoji": "🧳"
   },
   {
    "de": "der Unfall",
    "info": "zwei Wagen stoßen zusammen",
    "emoji": "🚗"
   },
   {
    "de": "die Rahmennummer",
    "info": "sie steht am Fahrrad selbst",
    "emoji": "🚲"
   },
   {
    "de": "die Wache",
    "info": "das Haus der Polizei im Viertel",
    "emoji": "🏢"
   },
   {
    "de": "die Aussage",
    "info": "das, was du der Polizei erzählst",
    "emoji": "🗣️"
   },
   {
    "de": "die Sachbeschädigung",
    "info": "jemand macht etwas kaputt",
    "emoji": "🔨"
   },
   {
    "de": "der Tathergang",
    "info": "wie alles genau passiert ist",
    "emoji": "🕒"
   },
   {
    "de": "die Fahrerflucht",
    "info": "er fährt weg nach dem Unfall",
    "emoji": "🚙"
   },
   {
    "de": "die Versicherung",
    "info": "sie zahlt bei einem Schaden",
    "emoji": "📄"
   },
   {
    "de": "die Bestätigung",
    "info": "ein Papier über deine Meldung",
    "emoji": "✅"
   },
   {
    "de": "der Schaden",
    "info": "was kaputt ist am Auto",
    "emoji": "💥"
   }
  ],
  "exercises": [
   {
    "type": "listen",
    "label": "📢 Durchsage im Polizeirevier",
    "audioUrl": "https://d8j0ntlcm91z4.cloudfront.net/user_38tIQPWpEsaUmk18tYN8mskaaAF/hf_20260826_062848_15b0e92b-5206-4e5b-8a85-760c5b7a2e9e.mp3",
    "q": "Was braucht man für die Anzeige im Internet?",
    "options": [
     "Eine gezogene Nummer vom Eingang",
     "Nur die Rahmennummer vom Fahrrad",
     "Eine Bestätigung aus dem Fundbüro",
     "Die Personalien von einem Zeugen"
    ],
    "answer": 1,
    "transcript": "Willkommen im Polizeirevier Nord. Ein Hinweis für alle, die eine Anzeige erstatten möchten: Bitte ziehen Sie am Eingang eine Nummer und halten Sie Ihre Personalien bereit. Anzeigen wegen Fahrraddiebstahl können Sie auch bequem im Internet stellen, dafür brauchen Sie nur die Rahmennummer. Das Fundbüro im Erdgeschoss hat heute bis sechzehn Uhr geöffnet.",
    "explain": "Für die Anzeige im Internet nennt die Durchsage nur eine Sache: die Rahmennummer."
   },
   {
    "type": "listen",
    "label": "📞 Mailbox: Ihre Anzeige ist aufgenommen",
    "audioUrl": "https://d8j0ntlcm91z4.cloudfront.net/user_38tIQPWpEsaUmk18tYN8mskaaAF/hf_20260826_062848_5789da6c-380e-4e7a-8ae6-0ba3cbc6a64c.mp3",
    "q": "Was soll Frau Novak mit dem Aktenzeichen tun?",
    "options": [
     "Es bei der Wache abholen lassen",
     "Es dem Zeugen am Telefon nennen",
     "Es auf die Anzeige schreiben lassen",
     "Es an ihre Versicherung weitergeben"
    ],
    "answer": 3,
    "transcript": "Guten Tag, Frau Novak, hier spricht Weber von der Polizei Süd. Ihre Anzeige wegen des Fahrraddiebstahls ist aufgenommen, alles in Ordnung soweit. Ihr Aktenzeichen lautet K wie Kaufmann, vier, sieben, zwei. Bitte geben Sie es Ihrer Versicherung weiter. Falls sich ein Zeuge meldet, rufen wir Sie an. Sie müssen sonst nichts weiter tun.",
    "explain": "Herr Weber bittet sie ausdrücklich, das Aktenzeichen an die Versicherung weiterzugeben."
   },
   {
    "type": "listen",
    "label": "🪟 Am Tresen: Das Rad ist weg",
    "audioUrl": "https://d8j0ntlcm91z4.cloudfront.net/user_38tIQPWpEsaUmk18tYN8mskaaAF/hf_20260826_062848_12dc0e4b-95b2-4b55-aba3-d0f5151f282b.mp3",
    "q": "Was passiert mit der fehlenden Rahmennummer?",
    "options": [
     "Sie kann später nachgereicht werden",
     "Sie wird beim Händler nachgefragt",
     "Ohne sie läuft die Anzeige nicht",
     "Sie steht schon in der Bestätigung"
    ],
    "answer": 0,
    "transcript": "Guten Tag, mein Fahrrad ist weg, es stand vor dem Bahnhof. — Das tut mir leid. Wir nehmen das in Ruhe auf. Haben Sie die Rahmennummer? — Die steht im Kaufvertrag zu Hause. — Kein Problem, Sie können sie später nachreichen. Ich brauche jetzt nur Ihre Personalien und den Tathergang. Danach bekommen Sie eine Bestätigung.",
    "explain": "Der Beamte sagt, dass die Rahmennummer auch später nachgereicht werden kann."
   },
   {
    "type": "listen",
    "label": "☕ Privat: Wie war es auf der Wache?",
    "audioUrl": "https://d8j0ntlcm91z4.cloudfront.net/user_38tIQPWpEsaUmk18tYN8mskaaAF/hf_20260826_062848_fe061d39-779d-43e5-9bc5-8c448f18487e.mp3",
    "q": "Unter welcher Bedingung zahlt die Versicherung?",
    "options": [
     "Wenn die Nachbarin als Zeugin aussagt",
     "Wenn das Rad nicht wieder auftaucht",
     "Wenn sie das Aktenzeichen bekommt",
     "Wenn das Fundbüro sich nicht meldet"
    ],
    "answer": 2,
    "transcript": "Und, warst du bei der Polizei? — Ja, war halb so wild. Zwanzig Minuten, dann war die Anzeige fertig. — Und dein Rad? — Vielleicht taucht es wieder auf, dann meldet sich das Fundbüro. Eine Nachbarin hat den Mann gesehen, sie geht morgen als Zeugin hin. — Und die Versicherung? — Die zahlt erst, wenn ich das Aktenzeichen schicke.",
    "explain": "Sie sagt am Ende: Die Versicherung zahlt erst, wenn sie das Aktenzeichen bekommt."
   },
   {
    "type": "choice",
    "audio": "die Anzeige",
    "q": "🔊 Hör zu – was bedeutet das Wort?",
    "options": [
     "du meldest eine Tat der Polizei",
     "du fragst nach einem verlorenen Rad",
     "du holst ein Papier bei der Wache",
     "du sagst dem Zeugen deinen Namen"
    ],
    "answer": 0,
    "w": "die Anzeige",
    "explain": "die Anzeige = du meldest eine Tat der Polizei."
   },
   {
    "type": "choice",
    "audio": "der Diebstahl",
    "q": "🔊 Hör zu – was bedeutet das Wort?",
    "options": [
     "jemand macht dir etwas kaputt",
     "jemand nimmt dir etwas weg",
     "jemand fährt dir ins Auto",
     "jemand findet deine Sachen wieder"
    ],
    "answer": 1,
    "w": "der Diebstahl",
    "explain": "der Diebstahl = jemand nimmt dir etwas weg."
   },
   {
    "type": "choice",
    "audio": "die Personalien",
    "q": "🔊 Hör zu – was bedeutet das Wort?",
    "options": [
     "Farbe, Marke und Rahmennummer",
     "Tag, Uhrzeit und Ort",
     "Name, Geburtstag und Wohnort",
     "Schaden, Kosten und Versicherung"
    ],
    "answer": 2,
    "w": "die Personalien",
    "explain": "die Personalien = Name, Geburtstag und Wohnort."
   },
   {
    "type": "choice",
    "audio": "der Zeuge",
    "q": "🔊 Hör zu – was bedeutet das Wort?",
    "options": [
     "er hat das Rad genommen",
     "er nimmt die Anzeige auf",
     "er hat das Rad gefunden",
     "er hat alles genau gesehen"
    ],
    "answer": 3,
    "w": "der Zeuge",
    "explain": "der Zeuge = er hat alles genau gesehen."
   },
   {
    "type": "choice",
    "audio": "das Aktenzeichen",
    "q": "🔊 Hör zu – was bedeutet das Wort?",
    "options": [
     "die Nummer zu deinem Fall",
     "die Nummer an deinem Rad",
     "die Nummer von der Wache",
     "die Nummer auf deinem Ausweis"
    ],
    "answer": 0,
    "w": "das Aktenzeichen",
    "explain": "das Aktenzeichen = die Nummer zu deinem Fall."
   },
   {
    "type": "choice",
    "audio": "das Fundbüro",
    "q": "🔊 Hör zu – was bedeutet das Wort?",
    "options": [
     "dort liegen alte Akten",
     "dort liegen verlorene Sachen",
     "dort warten die Zeugen",
     "dort meldest du einen Unfall"
    ],
    "answer": 1,
    "w": "das Fundbüro",
    "explain": "das Fundbüro = dort liegen verlorene Sachen."
   },
   {
    "type": "choice",
    "audio": "der Unfall",
    "q": "🔊 Hör zu – was bedeutet das Wort?",
    "options": [
     "zwei Räder stehen im Weg",
     "zwei Zeugen streiten sich laut",
     "zwei Wagen stoßen zusammen",
     "zwei Fahrer tauschen ihre Daten"
    ],
    "answer": 2,
    "w": "der Unfall",
    "explain": "der Unfall = zwei Wagen stoßen zusammen."
   },
   {
    "type": "choice",
    "audio": "die Rahmennummer",
    "q": "🔊 Hör zu – was bedeutet das Wort?",
    "options": [
     "sie steht in deinem Ausweis",
     "sie steht auf deinem Schloss",
     "sie steht in der Anzeige",
     "sie steht am Fahrrad selbst"
    ],
    "answer": 3,
    "w": "die Rahmennummer",
    "explain": "die Rahmennummer = sie steht am Fahrrad selbst."
   },
   {
    "type": "choice",
    "audio": "die Wache",
    "q": "🔊 Hör zu – was bedeutet das Wort?",
    "options": [
     "das Haus der Polizei im Viertel",
     "das Zimmer für die Zeugen",
     "das Auto mit dem Blaulicht",
     "der Schalter im Fundbüro"
    ],
    "answer": 0,
    "w": "die Wache",
    "explain": "die Wache = das Haus der Polizei im Viertel."
   },
   {
    "type": "choice",
    "audio": "die Aussage",
    "q": "🔊 Hör zu – was bedeutet das Wort?",
    "options": [
     "das, was der Polizei noch fehlt",
     "das, was du der Polizei erzählst",
     "das, was du bei der Wache abgibst",
     "das, was in der Zeitung steht"
    ],
    "answer": 1,
    "w": "die Aussage",
    "explain": "die Aussage = das, was du der Polizei erzählst."
   },
   {
    "type": "choice",
    "audio": "die Sachbeschädigung",
    "q": "🔊 Hör zu – was bedeutet das Wort?",
    "options": [
     "jemand nimmt etwas mit",
     "jemand fährt einfach weg",
     "jemand macht etwas kaputt",
     "jemand findet etwas wieder"
    ],
    "answer": 2,
    "w": "die Sachbeschädigung",
    "explain": "die Sachbeschädigung = jemand macht etwas kaputt."
   },
   {
    "type": "choice",
    "audio": "der Tathergang",
    "q": "🔊 Hör zu – was bedeutet das Wort?",
    "options": [
     "wer den Schaden bezahlen muss",
     "wo das Rad gefunden wurde",
     "was die Anzeige genau kostet",
     "wie alles genau passiert ist"
    ],
    "answer": 3,
    "w": "der Tathergang",
    "explain": "der Tathergang = wie alles genau passiert ist."
   },
   {
    "type": "choice",
    "audio": "die Fahrerflucht",
    "q": "🔊 Hör zu – was bedeutet das Wort?",
    "options": [
     "er fährt weg nach dem Unfall",
     "er fährt zu schnell durch die Stadt",
     "er fährt ohne Licht am Rad",
     "er fährt ohne Papiere im Auto"
    ],
    "answer": 0,
    "w": "die Fahrerflucht",
    "explain": "die Fahrerflucht = er fährt weg nach dem Unfall."
   },
   {
    "type": "choice",
    "audio": "die Versicherung",
    "q": "🔊 Hör zu – was bedeutet das Wort?",
    "options": [
     "sie nimmt die Anzeige auf",
     "sie zahlt bei einem Schaden",
     "sie sucht das gestohlene Rad",
     "sie schreibt das Aktenzeichen auf"
    ],
    "answer": 1,
    "w": "die Versicherung",
    "explain": "die Versicherung = sie zahlt bei einem Schaden."
   },
   {
    "type": "choice",
    "audio": "die Bestätigung",
    "q": "🔊 Hör zu – was bedeutet das Wort?",
    "options": [
     "ein Papier über deinen Schaden",
     "ein Papier über dein Fahrrad",
     "ein Papier über deine Meldung",
     "ein Papier über deine Kosten"
    ],
    "answer": 2,
    "w": "die Bestätigung",
    "explain": "die Bestätigung = ein Papier über deine Meldung."
   },
   {
    "type": "choice",
    "audio": "der Schaden",
    "q": "🔊 Hör zu – was bedeutet das Wort?",
    "options": [
     "was fehlt in der Anzeige",
     "was gestohlen wurde am Rad",
     "was die Polizei noch braucht",
     "was kaputt ist am Auto"
    ],
    "answer": 3,
    "w": "der Schaden",
    "explain": "der Schaden = was kaputt ist am Auto."
   }
  ]
 },
 {
  "id": "post",
  "title": "Ein Paket abholen",
  "level": "A2",
  "emoji": "🎧",
  "words": [
   {
    "de": "die Benachrichtigungskarte",
    "info": "der Zettel im Briefkasten",
    "emoji": "📮"
   },
   {
    "de": "abholen",
    "info": "etwas mitnehmen, was dort liegt",
    "emoji": "🛍️"
   },
   {
    "de": "die Sendungsnummer",
    "info": "damit findest du dein Paket",
    "emoji": "🔢"
   },
   {
    "de": "das Einschreiben",
    "info": "dafür musst du unterschreiben",
    "emoji": "✍️"
   },
   {
    "de": "das Porto",
    "info": "das Geld für einen Brief",
    "emoji": "💶"
   },
   {
    "de": "die Filiale",
    "info": "der Laden von der Post",
    "emoji": "🏤"
   },
   {
    "de": "die Packstation",
    "info": "ein großer Schrank für Pakete",
    "emoji": "🗄️"
   },
   {
    "de": "der Nachsendeauftrag",
    "info": "die Post kommt zur neuen Wohnung",
    "emoji": "🏠"
   },
   {
    "de": "der Absender",
    "info": "die Person, die etwas schickt",
    "emoji": "📤"
   },
   {
    "de": "der Empfänger",
    "info": "die Person, die etwas bekommt",
    "emoji": "📥"
   },
   {
    "de": "der Zusteller",
    "info": "er bringt die Briefe ins Haus",
    "emoji": "🚚"
   },
   {
    "de": "die Lagerfrist",
    "info": "so lange wartet dein Paket dort",
    "emoji": "⏳"
   },
   {
    "de": "der Schalter",
    "info": "dort wirst du bedient",
    "emoji": "🪟"
   },
   {
    "de": "die Quittung",
    "info": "der Zettel nach dem Bezahlen",
    "emoji": "🧾"
   },
   {
    "de": "der Ausweis",
    "info": "damit zeigst du, wer du bist",
    "emoji": "🪪"
   },
   {
    "de": "die Vollmacht",
    "info": "damit holt jemand für dich ab",
    "emoji": "🤝"
   }
  ],
  "exercises": [
   {
    "type": "listen",
    "label": "📢 Durchsage in der Postfiliale",
    "audioUrl": "https://d8j0ntlcm91z4.cloudfront.net/user_38tIQPWpEsaUmk18tYN8mskaaAF/hf_20260826_063253_e16afea0-c343-4f70-8487-2f20fe8b0f96.mp3",
    "q": "Was braucht man am Schalter drei unbedingt?",
    "options": [
     "Eine Quittung von der Kasse",
     "Ein Formular vom Eingang",
     "Einen Ausweis mit Lichtbild",
     "Eine Nummer vom Automaten"
    ],
    "answer": 2,
    "transcript": "Liebe Kundinnen und Kunden, willkommen in Ihrer Postfiliale. Bitte beachten Sie: Die Kasse zwei ist heute nur für Pakete geöffnet. Formulare für einen Nachsendeauftrag liegen am Eingang bereit. Pakete mit Benachrichtigungskarte holen Sie bitte am Schalter drei ab. Denken Sie dabei an Ihren Ausweis, ohne Ausweis dürfen wir Ihnen nichts geben. Vielen Dank.",
    "explain": "Die Durchsage sagt klar: ohne Ausweis wird am Schalter drei nichts herausgegeben."
   },
   {
    "type": "listen",
    "label": "📞 Mailbox: Ihr Einschreiben liegt hier",
    "audioUrl": "https://d8j0ntlcm91z4.cloudfront.net/user_38tIQPWpEsaUmk18tYN8mskaaAF/hf_20260826_063253_28adde6f-7c05-43e5-85d2-d4372886ebd1.mp3",
    "q": "Was passiert nach Dienstag mit dem Einschreiben?",
    "options": [
     "Es wartet dort noch eine Woche",
     "Es geht zurück an den Absender",
     "Es wandert in eine andere Filiale",
     "Es kommt noch einmal zu ihm"
    ],
    "answer": 1,
    "transcript": "Hallo Herr Aydin, hier ist die Postfiliale in der Gartenstraße. Ihr Einschreiben liegt seit Montag bei uns. Wir lagern es noch bis nächsten Dienstag, danach geht es zurück an den Absender. Bringen Sie bitte Ihren Ausweis und die Benachrichtigungskarte mit. Wenn Sie selbst nicht kommen können, braucht Ihre Frau eine Vollmacht von Ihnen. Vielen Dank.",
    "explain": "Die Lagerfrist endet am Dienstag, danach geht der Brief zurück an den Absender."
   },
   {
    "type": "listen",
    "label": "🪟 Am Schalter: Karte weg, Nummer da",
    "audioUrl": "https://d8j0ntlcm91z4.cloudfront.net/user_38tIQPWpEsaUmk18tYN8mskaaAF/hf_20260826_063253_c66f0fcb-fc3d-40cc-a2f3-dab50c265ee1.mp3",
    "q": "Warum klappt die Abholung trotzdem?",
    "options": [
     "Er hat das Porto schon bezahlt",
     "Er kennt die Frau am Schalter",
     "Er hat die Karte im Auto",
     "Er hat die Sendungsnummer dabei"
    ],
    "answer": 3,
    "transcript": "Guten Tag, ich möchte dieses Paket abholen. — Haben Sie die Benachrichtigungskarte dabei? — Nein, die habe ich verloren. Aber ich habe die Sendungsnummer auf dem Handy. — Das reicht, wenn der Name und die Adresse stimmen. Ihren Ausweis bitte. — Hier. — Danke, einmal hier unterschreiben. Und das Porto ist schon bezahlt, Sie zahlen nichts.",
    "explain": "Ohne Karte geht es trotzdem, weil er die Sendungsnummer auf dem Handy zeigen kann."
   },
   {
    "type": "listen",
    "label": "☕ Privat: Das Paket in der Packstation",
    "audioUrl": "https://d8j0ntlcm91z4.cloudfront.net/user_38tIQPWpEsaUmk18tYN8mskaaAF/hf_20260826_063253_a0e6db10-56ef-4269-8fbb-7b6651e1cf1c.mp3",
    "q": "Wie lange bleibt das Paket in der Packstation?",
    "options": [
     "Vier Tage, dann geht es zurück",
     "Sieben Tage, dann kommt es wieder",
     "Zwei Tage, dann holt es der Zusteller",
     "Drei Tage, dann liegt es beim Nachbarn"
    ],
    "answer": 0,
    "transcript": "Und, ist dein Paket angekommen? — Nein, ich war nicht zu Hause. Der Zusteller hat es in die Packstation gelegt, gleich am Supermarkt. — Und wie kommst du da ran? — Ich bekomme einen Code aufs Handy, damit geht die Klappe auf. — Praktisch. — Ja, aber nur vier Tage. Danach geht es zurück in die Filiale.",
    "explain": "Sie sagt selbst: nach vier Tagen geht das Paket zurück in die Filiale."
   },
   {
    "type": "choice",
    "audio": "die Benachrichtigungskarte",
    "q": "🔊 Hör zu – was bedeutet das Wort?",
    "options": [
     "der Zettel im Briefkasten",
     "der Aufkleber auf dem Paket",
     "die Quittung vom Schalter",
     "der Zettel am Automaten"
    ],
    "answer": 0,
    "w": "die Benachrichtigungskarte",
    "explain": "die Benachrichtigungskarte = der Zettel im Briefkasten."
   },
   {
    "type": "choice",
    "audio": "abholen",
    "q": "🔊 Hör zu – was bedeutet das Wort?",
    "options": [
     "etwas an einen Freund schicken",
     "etwas mitnehmen, was dort liegt",
     "etwas beim Schalter abgeben",
     "etwas noch einmal bezahlen"
    ],
    "answer": 1,
    "w": "abholen",
    "explain": "abholen = etwas mitnehmen, was dort liegt."
   },
   {
    "type": "choice",
    "audio": "die Sendungsnummer",
    "q": "🔊 Hör zu – was bedeutet das Wort?",
    "options": [
     "damit bezahlst du dein Porto",
     "damit öffnest du dein Fach",
     "damit findest du dein Paket",
     "damit änderst du deine Adresse"
    ],
    "answer": 2,
    "w": "die Sendungsnummer",
    "explain": "die Sendungsnummer = damit findest du dein Paket."
   },
   {
    "type": "choice",
    "audio": "das Einschreiben",
    "q": "🔊 Hör zu – was bedeutet das Wort?",
    "options": [
     "dafür musst du nichts zahlen",
     "dafür brauchst du keine Marke",
     "dafür kommt es besonders schnell",
     "dafür musst du unterschreiben"
    ],
    "answer": 3,
    "w": "das Einschreiben",
    "explain": "das Einschreiben = dafür musst du unterschreiben."
   },
   {
    "type": "choice",
    "audio": "das Porto",
    "q": "🔊 Hör zu – was bedeutet das Wort?",
    "options": [
     "das Geld für einen Brief",
     "das Papier um den Brief",
     "der Stempel auf dem Brief",
     "das Fach für die Briefe"
    ],
    "answer": 0,
    "w": "das Porto",
    "explain": "das Porto = das Geld für einen Brief."
   },
   {
    "type": "choice",
    "audio": "die Filiale",
    "q": "🔊 Hör zu – was bedeutet das Wort?",
    "options": [
     "der Wagen von der Post",
     "der Laden von der Post",
     "das Fach an der Wand",
     "der Automat vor dem Laden"
    ],
    "answer": 1,
    "w": "die Filiale",
    "explain": "die Filiale = der Laden von der Post."
   },
   {
    "type": "choice",
    "audio": "die Packstation",
    "q": "🔊 Hör zu – was bedeutet das Wort?",
    "options": [
     "ein kleiner Wagen für Briefe",
     "ein langer Tisch für Kunden",
     "ein großer Schrank für Pakete",
     "ein festes Fach für Zeitungen"
    ],
    "answer": 2,
    "w": "die Packstation",
    "explain": "die Packstation = ein großer Schrank für Pakete."
   },
   {
    "type": "choice",
    "audio": "der Nachsendeauftrag",
    "q": "🔊 Hör zu – was bedeutet das Wort?",
    "options": [
     "die Post bleibt eine Woche liegen",
     "die Post geht zurück an den Absender",
     "die Post kommt nur noch dienstags",
     "die Post kommt zur neuen Wohnung"
    ],
    "answer": 3,
    "w": "der Nachsendeauftrag",
    "explain": "der Nachsendeauftrag = die Post kommt zur neuen Wohnung."
   },
   {
    "type": "choice",
    "audio": "der Absender",
    "q": "🔊 Hör zu – was bedeutet das Wort?",
    "options": [
     "die Person, die etwas schickt",
     "die Person, die etwas bekommt",
     "die Person, die etwas bringt",
     "die Person, die etwas abholt"
    ],
    "answer": 0,
    "w": "der Absender",
    "explain": "der Absender = die Person, die etwas schickt."
   },
   {
    "type": "choice",
    "audio": "der Empfänger",
    "q": "🔊 Hör zu – was bedeutet das Wort?",
    "options": [
     "die Person, die etwas schickt",
     "die Person, die etwas bekommt",
     "die Person, die etwas austrägt",
     "die Person, die etwas bezahlt"
    ],
    "answer": 1,
    "w": "der Empfänger",
    "explain": "der Empfänger = die Person, die etwas bekommt."
   },
   {
    "type": "choice",
    "audio": "der Zusteller",
    "q": "🔊 Hör zu – was bedeutet das Wort?",
    "options": [
     "er sitzt am Schalter im Laden",
     "er sortiert die Briefe im Lager",
     "er bringt die Briefe ins Haus",
     "er füllt den Automaten am Markt"
    ],
    "answer": 2,
    "w": "der Zusteller",
    "explain": "der Zusteller = er bringt die Briefe ins Haus."
   },
   {
    "type": "choice",
    "audio": "die Lagerfrist",
    "q": "🔊 Hör zu – was bedeutet das Wort?",
    "options": [
     "so lange fährt dein Paket zu dir",
     "so lange hat die Filiale offen",
     "so lange dauert die Suche im Lager",
     "so lange wartet dein Paket dort"
    ],
    "answer": 3,
    "w": "die Lagerfrist",
    "explain": "die Lagerfrist = so lange wartet dein Paket dort."
   },
   {
    "type": "choice",
    "audio": "der Schalter",
    "q": "🔊 Hör zu – was bedeutet das Wort?",
    "options": [
     "dort wirst du bedient",
     "dort liegen die Formulare",
     "dort steht der Automat",
     "dort warten die Kunden"
    ],
    "answer": 0,
    "w": "der Schalter",
    "explain": "der Schalter = dort wirst du bedient."
   },
   {
    "type": "choice",
    "audio": "die Quittung",
    "q": "🔊 Hör zu – was bedeutet das Wort?",
    "options": [
     "der Zettel für die Abholung",
     "der Zettel nach dem Bezahlen",
     "der Zettel mit deiner Nummer",
     "der Zettel auf dem Paket"
    ],
    "answer": 1,
    "w": "die Quittung",
    "explain": "die Quittung = der Zettel nach dem Bezahlen."
   },
   {
    "type": "choice",
    "audio": "der Ausweis",
    "q": "🔊 Hör zu – was bedeutet das Wort?",
    "options": [
     "damit zeigst du, was dir gehört",
     "damit zeigst du, wann du kommst",
     "damit zeigst du, wer du bist",
     "damit zeigst du, was du zahlst"
    ],
    "answer": 2,
    "w": "der Ausweis",
    "explain": "der Ausweis = damit zeigst du, wer du bist."
   },
   {
    "type": "choice",
    "audio": "die Vollmacht",
    "q": "🔊 Hör zu – was bedeutet das Wort?",
    "options": [
     "damit zahlst du weniger Porto",
     "damit kommst du schneller dran",
     "damit bekommst du dein Geld zurück",
     "damit holt jemand für dich ab"
    ],
    "answer": 3,
    "w": "die Vollmacht",
    "explain": "die Vollmacht = damit holt jemand für dich ab."
   }
  ]
 },
 {
  "id": "produktion",
  "title": "In der Produktion",
  "level": "B1",
  "emoji": "🎧",
  "words": [
   {
    "de": "der Schichtwechsel",
    "info": "eine Gruppe löst die andere ab",
    "emoji": "🔁"
   },
   {
    "de": "die Anlage",
    "info": "große Maschine in der Halle",
    "emoji": "⚙️"
   },
   {
    "de": "die Störung",
    "info": "etwas läuft nicht mehr richtig",
    "emoji": "⚠️"
   },
   {
    "de": "der Ausschuss",
    "info": "fehlerhafte Teile ohne Wert",
    "emoji": "🗑️"
   },
   {
    "de": "die Stückzahl",
    "info": "wie viele Teile fertig wurden",
    "emoji": "🔢"
   },
   {
    "de": "die Wartung",
    "info": "regelmäßig prüfen und pflegen",
    "emoji": "🔧"
   },
   {
    "de": "die Sicherheitsunterweisung",
    "info": "Belehrung über Gefahren bei der Arbeit",
    "emoji": "🦺"
   },
   {
    "de": "die Taktzeit",
    "info": "Zeit für ein einzelnes Teil",
    "emoji": "⏱️"
   },
   {
    "de": "das Fließband",
    "info": "darauf wandern die Teile weiter",
    "emoji": "➡️"
   },
   {
    "de": "die Frühschicht",
    "info": "Arbeit früh am Morgen",
    "emoji": "🌅"
   },
   {
    "de": "die Übergabe",
    "info": "kurz sagen, was gerade läuft",
    "emoji": "🤝"
   },
   {
    "de": "die Rüstzeit",
    "info": "Umbau der Maschine vor dem Start",
    "emoji": "🛠️"
   },
   {
    "de": "der Stillstand",
    "info": "nichts läuft, alles steht",
    "emoji": "🛑"
   },
   {
    "de": "die Nacharbeit",
    "info": "Fehler am Teil noch beheben",
    "emoji": "🪛"
   },
   {
    "de": "der Gehörschutz",
    "info": "schützt die Ohren vor Lärm",
    "emoji": "🎧"
   },
   {
    "de": "die Schichtzulage",
    "info": "mehr Geld für ungünstige Zeiten",
    "emoji": "💶"
   }
  ],
  "exercises": [
   {
    "type": "listen",
    "label": "📢 Durchsage in der Halle",
    "audioUrl": "https://d8j0ntlcm91z4.cloudfront.net/user_38tIQPWpEsaUmk18tYN8mskaaAF/hf_20260826_080305_f67c87cc-b12a-4354-a84c-4d28dce1acb2.mp3",
    "q": "Was sollen die Mitarbeiter bis zur Reparatur machen?",
    "options": [
     "An der Anlage sechs die Nacharbeit erledigen",
     "An der Anlage vier beim Reparieren mithelfen",
     "Bis zum Schichtwechsel in der Pause bleiben",
     "An der Presse die fertigen Teile nachzählen"
    ],
    "answer": 0,
    "transcript": "Achtung, eine Durchsage für die Halle zwei. Die Anlage vier steht wegen einer Störung an der Presse still. Die Instandhaltung ist unterwegs, wir rechnen mit ungefähr zwei Stunden. Bitte gehen Sie so lange an die Anlage sechs und arbeiten Sie dort die Nacharbeit ab. Der Schichtwechsel bleibt wie geplant um vierzehn Uhr. Der Meister ist am Tresen.",
    "explain": "In der Durchsage heißt es, die Leute sollen so lange an die Anlage sechs gehen und dort die Nacharbeit abarbeiten."
   },
   {
    "type": "listen",
    "label": "📞 Mailbox: Die Unterweisung läuft ab",
    "audioUrl": "https://d8j0ntlcm91z4.cloudfront.net/user_38tIQPWpEsaUmk18tYN8mskaaAF/hf_20260826_080305_ea5771d3-c1da-432d-b435-8970b4668eab.mp3",
    "q": "Was passiert, wenn Frau Nowak den Termin nicht macht?",
    "options": [
     "Sie darf ab nächster Woche nicht an die Anlage",
     "Sie muss ab nächster Woche in der Spätschicht arbeiten",
     "Sie bekommt am Donnerstag einen neuen Gehörschutz",
     "Sie muss die Frühschicht am Donnerstag früher beginnen"
    ],
    "answer": 0,
    "transcript": "Hallo Frau Nowak, hier ist Berger aus der Fertigung. Ihre Sicherheitsunterweisung läuft diesen Monat ab. Der nächste Termin ist am Donnerstag um sieben Uhr, direkt vor der Frühschicht. Das dauert etwa vierzig Minuten. Ohne die Unterweisung dürfen Sie ab nächster Woche nicht mehr an die Anlage. Bringen Sie bitte Ihren Gehörschutz mit, wir prüfen den auch. Melden Sie sich kurz.",
    "explain": "Der Kollege sagt klar: ohne die Unterweisung darf sie ab nächster Woche nicht mehr an die Anlage."
   },
   {
    "type": "listen",
    "label": "🪟 Am Tresen: Eine Störung melden",
    "audioUrl": "https://d8j0ntlcm91z4.cloudfront.net/user_38tIQPWpEsaUmk18tYN8mskaaAF/hf_20260826_080519_c1490050-b0dd-4f0b-b0c4-afa097a545af.mp3",
    "q": "Was soll der Mitarbeiter mit den zwanzig Teilen machen?",
    "options": [
     "Sie rot ablegen und die Stückzahl ins Buch schreiben",
     "Sie noch einmal durch die Anlage sieben laufen lassen",
     "Sie zum Meister bringen und dort gemeinsam nachzählen",
     "Sie in die Nacharbeit geben und dort festziehen lassen"
    ],
    "answer": 0,
    "transcript": "Ich muss eine Störung melden, die Anlage sieben zieht die Schrauben nicht fest. — Seit wann? — Seit ungefähr einer halben Stunde. — Und die Teile? — Zwanzig Stück sind schon durch, die sind alle Ausschuss. — Dann legen Sie die rot ab und schreiben die Stückzahl ins Buch. Ich sperre die Anlage. Weitermachen erst nach der Freigabe.",
    "explain": "Der Meister sagt: rot ablegen und die Stückzahl ins Buch schreiben, weil die Teile Ausschuss sind."
   },
   {
    "type": "listen",
    "label": "☕ Privat: Nachtschicht und Takt",
    "audioUrl": "https://d8j0ntlcm91z4.cloudfront.net/user_38tIQPWpEsaUmk18tYN8mskaaAF/hf_20260826_080519_2eca2f5e-5dcc-4664-a025-15ca8bf176bd.mp3",
    "q": "Wie viel Zeit hat er für ein Teil?",
    "options": [
     "Neunzig Sekunden, dann kommt schon das nächste",
     "Fünf Minuten, dann muss das Teil fertig sein",
     "Zwei Minuten, so steht es im Plan an der Anlage",
     "Das steht nicht fest, er nimmt sich seine Zeit"
    ],
    "answer": 0,
    "transcript": "Und, wie läuft die neue Schicht? — Die Nacht ist hart, aber die Zulage ist gut. — Wie viel mehr? — Fast dreihundert im Monat, das merkst du. — Und der Takt? — Neunzig Sekunden pro Teil, da bleibt keine Luft. Wenn du einmal stehst, hängst du gleich hinterher. — Und die Übergabe morgens? — Fünf Minuten, mehr nicht. Dann bist du raus.",
    "explain": "Er sagt, der Takt sind neunzig Sekunden pro Teil, danach geht es sofort weiter."
   },
   {
    "type": "choice",
    "audio": "der Schichtwechsel",
    "q": "🔊 Hör zu – was bedeutet das Wort?",
    "options": [
     "eine Gruppe löst die andere ab",
     "eine Anlage wird neu eingestellt",
     "eine Maschine bekommt neues Werkzeug",
     "ein Kollege wechselt die Abteilung"
    ],
    "answer": 0,
    "w": "der Schichtwechsel",
    "explain": "der Schichtwechsel = eine Gruppe löst die andere ab."
   },
   {
    "type": "choice",
    "audio": "die Anlage",
    "q": "🔊 Hör zu – was bedeutet das Wort?",
    "options": [
     "kleiner Wagen für schwere Teile",
     "große Maschine in der Halle",
     "großer Schrank für das Werkzeug",
     "langer Tisch für die Prüfung"
    ],
    "answer": 1,
    "w": "die Anlage",
    "explain": "die Anlage = große Maschine in der Halle."
   },
   {
    "type": "choice",
    "audio": "die Störung",
    "q": "🔊 Hör zu – was bedeutet das Wort?",
    "options": [
     "etwas ist heute besonders laut",
     "etwas dauert heute etwas länger",
     "etwas läuft nicht mehr richtig",
     "etwas wird gerade neu eingestellt"
    ],
    "answer": 2,
    "w": "die Störung",
    "explain": "die Störung = etwas läuft nicht mehr richtig."
   },
   {
    "type": "choice",
    "audio": "der Ausschuss",
    "q": "🔊 Hör zu – was bedeutet das Wort?",
    "options": [
     "fertige Teile ohne Prüfung",
     "schwere Teile ohne Verpackung",
     "letzte Teile aus der Schicht",
     "fehlerhafte Teile ohne Wert"
    ],
    "answer": 3,
    "w": "der Ausschuss",
    "explain": "der Ausschuss = fehlerhafte Teile ohne Wert."
   },
   {
    "type": "choice",
    "audio": "die Stückzahl",
    "q": "🔊 Hör zu – was bedeutet das Wort?",
    "options": [
     "wie viele Teile fertig wurden",
     "wie schwer ein Teil geworden ist",
     "wie lange ein Teil gebraucht hat",
     "wie teuer ein Teil geworden ist"
    ],
    "answer": 0,
    "w": "die Stückzahl",
    "explain": "die Stückzahl = wie viele Teile fertig wurden."
   },
   {
    "type": "choice",
    "audio": "die Wartung",
    "q": "🔊 Hör zu – was bedeutet das Wort?",
    "options": [
     "schnell einen Schaden beheben",
     "regelmäßig prüfen und pflegen",
     "langsam die Anlage hochfahren",
     "einmal die Halle sauber machen"
    ],
    "answer": 1,
    "w": "die Wartung",
    "explain": "die Wartung = regelmäßig prüfen und pflegen."
   },
   {
    "type": "choice",
    "audio": "die Sicherheitsunterweisung",
    "q": "🔊 Hör zu – was bedeutet das Wort?",
    "options": [
     "Prüfung über die Arbeit an der Anlage",
     "Anleitung für das Einstellen der Maschine",
     "Belehrung über Gefahren bei der Arbeit",
     "Erklärung zu den Zeiten in der Schicht"
    ],
    "answer": 2,
    "w": "die Sicherheitsunterweisung",
    "explain": "die Sicherheitsunterweisung = Belehrung über Gefahren bei der Arbeit."
   },
   {
    "type": "choice",
    "audio": "die Taktzeit",
    "q": "🔊 Hör zu – was bedeutet das Wort?",
    "options": [
     "Zeit bis zur nächsten Pause",
     "Zeit für den Umbau der Anlage",
     "Zeit von Schicht zu Schicht",
     "Zeit für ein einzelnes Teil"
    ],
    "answer": 3,
    "w": "die Taktzeit",
    "explain": "die Taktzeit = Zeit für ein einzelnes Teil."
   },
   {
    "type": "choice",
    "audio": "das Fließband",
    "q": "🔊 Hör zu – was bedeutet das Wort?",
    "options": [
     "darauf wandern die Teile weiter",
     "darauf stapelt man volle Kisten",
     "darauf liegt das schwere Werkzeug",
     "darauf steht die fertige Ware"
    ],
    "answer": 0,
    "w": "das Fließband",
    "explain": "das Fließband = darauf wandern die Teile weiter."
   },
   {
    "type": "choice",
    "audio": "die Frühschicht",
    "q": "🔊 Hör zu – was bedeutet das Wort?",
    "options": [
     "Arbeit spät am Abend",
     "Arbeit früh am Morgen",
     "Arbeit mitten in der Nacht",
     "Arbeit nur am Wochenende"
    ],
    "answer": 1,
    "w": "die Frühschicht",
    "explain": "die Frühschicht = Arbeit früh am Morgen."
   },
   {
    "type": "choice",
    "audio": "die Übergabe",
    "q": "🔊 Hör zu – was bedeutet das Wort?",
    "options": [
     "kurz die Anlage sauber machen",
     "kurz die fertigen Teile zählen",
     "kurz sagen, was gerade läuft",
     "kurz nach draußen zur Pause gehen"
    ],
    "answer": 2,
    "w": "die Übergabe",
    "explain": "die Übergabe = kurz sagen, was gerade läuft."
   },
   {
    "type": "choice",
    "audio": "die Rüstzeit",
    "q": "🔊 Hör zu – was bedeutet das Wort?",
    "options": [
     "Pause der Gruppe vor dem Start",
     "Prüfung der Teile nach dem Lauf",
     "Reinigung der Halle nach der Schicht",
     "Umbau der Maschine vor dem Start"
    ],
    "answer": 3,
    "w": "die Rüstzeit",
    "explain": "die Rüstzeit = Umbau der Maschine vor dem Start."
   },
   {
    "type": "choice",
    "audio": "der Stillstand",
    "q": "🔊 Hör zu – was bedeutet das Wort?",
    "options": [
     "nichts läuft, alles steht",
     "alles läuft, keiner stört",
     "wenig läuft, einer fehlt",
     "vieles läuft, aber langsam"
    ],
    "answer": 0,
    "w": "der Stillstand",
    "explain": "der Stillstand = nichts läuft, alles steht."
   },
   {
    "type": "choice",
    "audio": "die Nacharbeit",
    "q": "🔊 Hör zu – was bedeutet das Wort?",
    "options": [
     "Teile nach der Schicht zählen",
     "Fehler am Teil noch beheben",
     "Arbeit nach dem Feierabend machen",
     "Anlage nach dem Lauf reinigen"
    ],
    "answer": 1,
    "w": "die Nacharbeit",
    "explain": "die Nacharbeit = Fehler am Teil noch beheben."
   },
   {
    "type": "choice",
    "audio": "der Gehörschutz",
    "q": "🔊 Hör zu – was bedeutet das Wort?",
    "options": [
     "schützt die Augen vor Splittern",
     "schützt die Hände vor scharfen Kanten",
     "schützt die Ohren vor Lärm",
     "schützt den Kopf vor harten Schlägen"
    ],
    "answer": 2,
    "w": "der Gehörschutz",
    "explain": "der Gehörschutz = schützt die Ohren vor Lärm."
   },
   {
    "type": "choice",
    "audio": "die Schichtzulage",
    "q": "🔊 Hör zu – was bedeutet das Wort?",
    "options": [
     "mehr Zeit für schwere Arbeit",
     "mehr Pause für lange Tage",
     "mehr Urlaub für viele Jahre",
     "mehr Geld für ungünstige Zeiten"
    ],
    "answer": 3,
    "w": "die Schichtzulage",
    "explain": "die Schichtzulage = mehr Geld für ungünstige Zeiten."
   }
  ]
 },
 {
  "id": "rechte",
  "title": "Rechte bei der Arbeit",
  "level": "B1",
  "emoji": "🎧",
  "words": [
   {
    "de": "der Arbeitsvertrag",
    "info": "darin steht, was ihr vereinbart habt",
    "emoji": "📃"
   },
   {
    "de": "die Probezeit",
    "info": "die ersten Monate im neuen Betrieb",
    "emoji": "⏳"
   },
   {
    "de": "der Urlaubsanspruch",
    "info": "die freien Tage, die dir zustehen",
    "emoji": "🏖️"
   },
   {
    "de": "die Kündigungsfrist",
    "info": "die Zeit bis zum letzten Arbeitstag",
    "emoji": "📆"
   },
   {
    "de": "die Lohnabrechnung",
    "info": "das Blatt mit deinem Verdienst",
    "emoji": "🧾"
   },
   {
    "de": "der Betriebsrat",
    "info": "gewählte Kollegen, die euch vertreten",
    "emoji": "👥"
   },
   {
    "de": "die Krankmeldung",
    "info": "dein Betrieb erfährt, dass du fehlst",
    "emoji": "🤒"
   },
   {
    "de": "die Überstunden",
    "info": "gearbeitete Zeit über den Vertrag hinaus",
    "emoji": "⏰"
   },
   {
    "de": "der Mindestlohn",
    "info": "weniger darf dir niemand zahlen",
    "emoji": "💶"
   },
   {
    "de": "der Aufhebungsvertrag",
    "info": "ihr beendet die Arbeit gemeinsam",
    "emoji": "✍️"
   },
   {
    "de": "der Tarifvertrag",
    "info": "gemeinsame Regeln für viele Betriebe",
    "emoji": "📚"
   },
   {
    "de": "die Abmahnung",
    "info": "eine ernste Warnung vom Betrieb",
    "emoji": "⚠️"
   },
   {
    "de": "die Sozialversicherung",
    "info": "Schutz bei Krankheit und im Alter",
    "emoji": "🛡️"
   },
   {
    "de": "der Zuschlag",
    "info": "mehr Geld für ungünstige Zeiten",
    "emoji": "➕"
   },
   {
    "de": "die Kurzarbeit",
    "info": "weniger Stunden, weil Aufträge fehlen",
    "emoji": "📉"
   },
   {
    "de": "die Lohnfortzahlung",
    "info": "der Betrieb zahlt auch ohne Arbeit",
    "emoji": "💊"
   }
  ],
  "exercises": [
   {
    "type": "listen",
    "label": "📢 Durchsage in der Halle",
    "audioUrl": "https://d8j0ntlcm91z4.cloudfront.net/user_38tIQPWpEsaUmk18tYN8mskaaAF/hf_20260826_080519_5d8c0ae1-b074-485b-8817-f91e4fd8980b.mp3",
    "q": "Was gilt für die Zeit der Versammlung?",
    "options": [
     "Sie zählt als normale Arbeitszeit",
     "Sie muss später nachgearbeitet werden",
     "Sie wird vom Urlaub abgezogen",
     "Sie wird als Überstunde bezahlt"
    ],
    "answer": 0,
    "transcript": "Achtung, eine Durchsage für alle Kolleginnen und Kollegen in der Halle. Der Betriebsrat lädt am Donnerstag zur Betriebsversammlung ein, Beginn ist um vierzehn Uhr im Speiseraum. Thema sind die neuen Schichtpläne und die Zuschläge am Wochenende. Die Zeit gilt als Arbeitszeit, ihr müsst sie also nicht nacharbeiten. Meldet euch bitte vorher bei eurer Schichtleitung ab.",
    "explain": "Die Durchsage sagt es direkt: die Zeit gilt als Arbeitszeit und muss nicht nachgearbeitet werden."
   },
   {
    "type": "listen",
    "label": "📞 Mailbox: Das Papier vom Arzt fehlt",
    "audioUrl": "https://d8j0ntlcm91z4.cloudfront.net/user_38tIQPWpEsaUmk18tYN8mskaaAF/hf_20260826_080519_1e4534fe-230f-4846-a8e0-4146bcf3c80a.mp3",
    "q": "Wie soll Herr Nowak das Papier schicken?",
    "options": [
     "Auf dem Postweg an den Betrieb",
     "Als Foto an das Personalbüro",
     "Zusammen mit der nächsten Abrechnung",
     "Erst nach seiner Rückkehr im Büro"
    ],
    "answer": 0,
    "transcript": "Hallo Herr Nowak, Ludwig hier aus dem Personalbüro. Ihre Krankmeldung ist angekommen, vielen Dank. Ab dem vierten Tag brauchen wir aber immer das Papier vom Arzt, sonst können wir den Lohn nicht weiterzahlen. Schicken Sie es einfach mit der Post, ein Foto reicht uns leider nicht. Gute Besserung und melden Sie sich, wenn etwas unklar ist.",
    "explain": "Frau Ludwig bittet ausdrücklich um den Postweg und sagt, ein Foto reiche nicht."
   },
   {
    "type": "listen",
    "label": "🪟 Am Schalter: Urlaub in der Probezeit",
    "audioUrl": "https://d8j0ntlcm91z4.cloudfront.net/user_38tIQPWpEsaUmk18tYN8mskaaAF/hf_20260826_080519_adb91bdc-39d6-4ebb-899b-018ac5d560bb.mp3",
    "q": "Wann darf sie den Urlaub in der Probezeit nehmen?",
    "options": [
     "Wenn der Betrieb damit einverstanden ist",
     "Wenn sie schon sechs Monate da ist",
     "Wenn der Betriebsrat es vorher erlaubt",
     "Wenn sie ihn schriftlich beantragt hat"
    ],
    "answer": 0,
    "transcript": "Guten Tag, ich habe eine Frage zu meinem Urlaub. — Gern, worum geht es? — Mein Chef sagt, in der Probezeit gibt es gar keinen Urlaub. — Anspruch sammeln Sie von Anfang an, nehmen dürfen Sie ihn aber nur, wenn der Betrieb zustimmt. — Und wenn ich vorher gehe? — Dann wird der Rest ausgezahlt.",
    "explain": "Der Anspruch entsteht sofort, nehmen kann sie den Urlaub aber nur mit dem Einverständnis des Betriebs."
   },
   {
    "type": "listen",
    "label": "🥪 In der Pause: Die Stunden fehlen",
    "audioUrl": "https://d8j0ntlcm91z4.cloudfront.net/user_38tIQPWpEsaUmk18tYN8mskaaAF/hf_20260826_080519_798370f7-799f-458d-a71f-6b1f7d9d06fe.mp3",
    "q": "Was möchte er lieber für seine Überstunden?",
    "options": [
     "Freie Zeit statt mehr Geld",
     "Mehr Geld statt freie Zeit",
     "Einen Zuschlag auf jede Stunde",
     "Eine Auszahlung im nächsten Monat"
    ],
    "answer": 0,
    "transcript": "Hast du deine Abrechnung schon angeschaut? — Noch nicht, warum? — Bei mir fehlen die Überstunden vom letzten Monat, fast zwanzig Stück. — Vielleicht sind sie auf dem Konto, nicht im Geld. — Kann sein. Ich frag morgen im Büro nach. Wenn das stimmt, nehme ich lieber frei als Geld, ehrlich gesagt.",
    "explain": "Er sagt zum Schluss, dass er die Stunden lieber frei nimmt als sie sich auszahlen zu lassen."
   },
   {
    "type": "choice",
    "audio": "der Arbeitsvertrag",
    "q": "🔊 Hör zu – was bedeutet das Wort?",
    "options": [
     "darin steht, was ihr vereinbart habt",
     "darin steht, wen der Betrieb sucht",
     "darin steht, wann deine Schichten sind",
     "darin steht, was du verdient hast"
    ],
    "answer": 0,
    "w": "der Arbeitsvertrag",
    "explain": "der Arbeitsvertrag = darin steht, was ihr vereinbart habt."
   },
   {
    "type": "choice",
    "audio": "die Probezeit",
    "q": "🔊 Hör zu – was bedeutet das Wort?",
    "options": [
     "die letzten Monate vor dem Ende",
     "die ersten Monate im neuen Betrieb",
     "die Zeit zwischen zwei Verträgen",
     "die Wochen mit weniger Stunden"
    ],
    "answer": 1,
    "w": "die Probezeit",
    "explain": "die Probezeit = die ersten Monate im neuen Betrieb."
   },
   {
    "type": "choice",
    "audio": "der Urlaubsanspruch",
    "q": "🔊 Hör zu – was bedeutet das Wort?",
    "options": [
     "die freien Tage, die du schon hattest",
     "die Tage, an denen der Betrieb zu ist",
     "die freien Tage, die dir zustehen",
     "die Tage, an denen du krank warst"
    ],
    "answer": 2,
    "w": "der Urlaubsanspruch",
    "explain": "der Urlaubsanspruch = die freien Tage, die dir zustehen."
   },
   {
    "type": "choice",
    "audio": "die Kündigungsfrist",
    "q": "🔊 Hör zu – was bedeutet das Wort?",
    "options": [
     "die Zeit bis zum ersten Arbeitstag",
     "die Zeit bis zur nächsten Abrechnung",
     "die Zeit bis zum Ende der Probezeit",
     "die Zeit bis zum letzten Arbeitstag"
    ],
    "answer": 3,
    "w": "die Kündigungsfrist",
    "explain": "die Kündigungsfrist = die Zeit bis zum letzten Arbeitstag."
   },
   {
    "type": "choice",
    "audio": "die Lohnabrechnung",
    "q": "🔊 Hör zu – was bedeutet das Wort?",
    "options": [
     "das Blatt mit deinem Verdienst",
     "das Blatt mit deinen freien Tagen",
     "das Blatt mit den Regeln im Haus",
     "das Blatt mit deinen Schichten"
    ],
    "answer": 0,
    "w": "die Lohnabrechnung",
    "explain": "die Lohnabrechnung = das Blatt mit deinem Verdienst."
   },
   {
    "type": "choice",
    "audio": "der Betriebsrat",
    "q": "🔊 Hör zu – was bedeutet das Wort?",
    "options": [
     "die Chefs, die den Betrieb leiten",
     "gewählte Kollegen, die euch vertreten",
     "die Leute aus dem Personalbüro",
     "die Kollegen aus deiner Schicht"
    ],
    "answer": 1,
    "w": "der Betriebsrat",
    "explain": "der Betriebsrat = gewählte Kollegen, die euch vertreten."
   },
   {
    "type": "choice",
    "audio": "die Krankmeldung",
    "q": "🔊 Hör zu – was bedeutet das Wort?",
    "options": [
     "dein Arzt erfährt, wo du arbeitest",
     "dein Betrieb erfährt, dass du gehst",
     "dein Betrieb erfährt, dass du fehlst",
     "deine Kasse erfährt, was du verdienst"
    ],
    "answer": 2,
    "w": "die Krankmeldung",
    "explain": "die Krankmeldung = dein Betrieb erfährt, dass du fehlst."
   },
   {
    "type": "choice",
    "audio": "die Überstunden",
    "q": "🔊 Hör zu – was bedeutet das Wort?",
    "options": [
     "freie Zeit statt Geld am Monatsende",
     "bezahlte Pausen während der langen Schicht",
     "verlorene Zeit auf dem Weg zur Arbeit",
     "gearbeitete Zeit über den Vertrag hinaus"
    ],
    "answer": 3,
    "w": "die Überstunden",
    "explain": "die Überstunden = gearbeitete Zeit über den Vertrag hinaus."
   },
   {
    "type": "choice",
    "audio": "der Mindestlohn",
    "q": "🔊 Hör zu – was bedeutet das Wort?",
    "options": [
     "weniger darf dir niemand zahlen",
     "mehr darf dir niemand zahlen",
     "so viel verdient man in dem Beruf",
     "so viel bleibt am Ende übrig"
    ],
    "answer": 0,
    "w": "der Mindestlohn",
    "explain": "der Mindestlohn = weniger darf dir niemand zahlen."
   },
   {
    "type": "choice",
    "audio": "der Aufhebungsvertrag",
    "q": "🔊 Hör zu – was bedeutet das Wort?",
    "options": [
     "ihr verlängert die Arbeit gemeinsam",
     "ihr beendet die Arbeit gemeinsam",
     "der Betrieb schickt dir eine Warnung",
     "du bittest um weniger Stunden"
    ],
    "answer": 1,
    "w": "der Aufhebungsvertrag",
    "explain": "der Aufhebungsvertrag = ihr beendet die Arbeit gemeinsam."
   },
   {
    "type": "choice",
    "audio": "der Tarifvertrag",
    "q": "🔊 Hör zu – was bedeutet das Wort?",
    "options": [
     "eigene Regeln für einen Betrieb",
     "die Absprache zwischen dir und dem Chef",
     "gemeinsame Regeln für viele Betriebe",
     "die Ordnung für die Pausen im Haus"
    ],
    "answer": 2,
    "w": "der Tarifvertrag",
    "explain": "der Tarifvertrag = gemeinsame Regeln für viele Betriebe."
   },
   {
    "type": "choice",
    "audio": "die Abmahnung",
    "q": "🔊 Hör zu – was bedeutet das Wort?",
    "options": [
     "eine kurze Nachricht vom Betriebsrat",
     "eine Bitte um ein Gespräch",
     "eine Frage zu deinen Stunden",
     "eine ernste Warnung vom Betrieb"
    ],
    "answer": 3,
    "w": "die Abmahnung",
    "explain": "die Abmahnung = eine ernste Warnung vom Betrieb."
   },
   {
    "type": "choice",
    "audio": "die Sozialversicherung",
    "q": "🔊 Hör zu – was bedeutet das Wort?",
    "options": [
     "Schutz bei Krankheit und im Alter",
     "Schutz für die Geräte im Betrieb",
     "Hilfe bei der Suche nach Wohnung",
     "Geld für die Fahrt zur Arbeit"
    ],
    "answer": 0,
    "w": "die Sozialversicherung",
    "explain": "die Sozialversicherung = Schutz bei Krankheit und im Alter."
   },
   {
    "type": "choice",
    "audio": "der Zuschlag",
    "q": "🔊 Hör zu – was bedeutet das Wort?",
    "options": [
     "mehr Geld für gute Leistung",
     "mehr Geld für ungünstige Zeiten",
     "weniger Geld in den ersten Monaten",
     "freie Tage für lange Schichten"
    ],
    "answer": 1,
    "w": "der Zuschlag",
    "explain": "der Zuschlag = mehr Geld für ungünstige Zeiten."
   },
   {
    "type": "choice",
    "audio": "die Kurzarbeit",
    "q": "🔊 Hör zu – was bedeutet das Wort?",
    "options": [
     "weniger Stunden, weil du krank bist",
     "kurze Schichten am frühen Morgen",
     "weniger Stunden, weil Aufträge fehlen",
     "kurze Verträge für wenige Wochen"
    ],
    "answer": 2,
    "w": "die Kurzarbeit",
    "explain": "die Kurzarbeit = weniger Stunden, weil Aufträge fehlen."
   },
   {
    "type": "choice",
    "audio": "die Lohnfortzahlung",
    "q": "🔊 Hör zu – was bedeutet das Wort?",
    "options": [
     "der Betrieb zahlt später als sonst",
     "der Betrieb zahlt jede Stunde extra",
     "der Betrieb zahlt die Fahrt dazu",
     "der Betrieb zahlt auch ohne Arbeit"
    ],
    "answer": 3,
    "w": "die Lohnfortzahlung",
    "explain": "die Lohnfortzahlung = der Betrieb zahlt auch ohne Arbeit."
   }
  ]
 },
 {
  "id": "reinigung",
  "title": "Arbeit in der Reinigung",
  "level": "A2",
  "emoji": "🎧",
  "words": [
   {
    "de": "der Reinigungsplan",
    "info": "dort steht, was wann drankommt",
    "emoji": "📋"
   },
   {
    "de": "die Dosierung",
    "info": "wie viel Mittel ins Wasser kommt",
    "emoji": "🧪"
   },
   {
    "de": "das Sicherheitsdatenblatt",
    "info": "Papier über gefährliche Mittel",
    "emoji": "📄"
   },
   {
    "de": "die Grundreinigung",
    "info": "einmal alles ganz tief sauber machen",
    "emoji": "🧽"
   },
   {
    "de": "das Objekt",
    "info": "das Haus, in dem du putzt",
    "emoji": "🏢"
   },
   {
    "de": "die Schlüsselübergabe",
    "info": "einer gibt dem anderen den Schlüssel",
    "emoji": "🔑"
   },
   {
    "de": "das Verbrauchsmaterial",
    "info": "Sachen, die immer wieder leer werden",
    "emoji": "🧻"
   },
   {
    "de": "die Krankheitsvertretung",
    "info": "für einen kranken Kollegen einspringen",
    "emoji": "🤒"
   },
   {
    "de": "der Wischmopp",
    "info": "damit machst du den Boden nass",
    "emoji": "🧹"
   },
   {
    "de": "der Putzeimer",
    "info": "darin ist das Wasser mit Mittel",
    "emoji": "🪣"
   },
   {
    "de": "die Schutzhandschuhe",
    "info": "damit bleiben deine Hände sicher",
    "emoji": "🧤"
   },
   {
    "de": "der Sanitärbereich",
    "info": "Räume mit Toilette und Waschbecken",
    "emoji": "🚻"
   },
   {
    "de": "die Unterhaltsreinigung",
    "info": "das normale Putzen jede Woche",
    "emoji": "🔁"
   },
   {
    "de": "der Kalk",
    "info": "weiße Reste vom harten Wasser",
    "emoji": "🚿"
   },
   {
    "de": "der Stundenzettel",
    "info": "dort schreibst du deine Arbeitszeit auf",
    "emoji": "⏱️"
   },
   {
    "de": "die Abnahme",
    "info": "der Kunde prüft die fertige Arbeit",
    "emoji": "✅"
   }
  ],
  "exercises": [
   {
    "type": "listen",
    "label": "📢 Durchsage im Bürohaus",
    "audioUrl": "https://d8j0ntlcm91z4.cloudfront.net/user_38tIQPWpEsaUmk18tYN8mskaaAF/hf_20260826_080733_23e76902-8f0a-45d6-904d-d4de3ede28ca.mp3",
    "q": "Wann kann man die Räume wieder benutzen?",
    "options": [
     "Am Montag, weil der Teppich erst trocknen muss",
     "Am Samstag, weil der Teppich schnell trocken wird",
     "Am Freitag nach achtzehn Uhr am Abend",
     "Am Sonntag, wenn die Reinigung fertig ist"
    ],
    "answer": 0,
    "transcript": "Ein Hinweis für alle Mitarbeiter im Haus. Am Freitag machen wir im dritten Stock die Grundreinigung. Bitte räumen Sie bis achtzehn Uhr alle Sachen vom Boden und vom Schreibtisch. Der Teppich bleibt danach die ganze Nacht nass. Am Montag können Sie die Räume wieder normal benutzen. Die Toiletten im zweiten Stock sind am Freitag geschlossen.",
    "explain": "In der Durchsage heißt es, der Teppich bleibt nass, und erst am Montag sind die Räume wieder normal zu benutzen."
   },
   {
    "type": "listen",
    "label": "📞 Mailbox: Bitte einspringen",
    "audioUrl": "https://d8j0ntlcm91z4.cloudfront.net/user_38tIQPWpEsaUmk18tYN8mskaaAF/hf_20260826_080733_7b1dcf7b-8a8f-4145-834c-8a230e27bc8a.mp3",
    "q": "Wo bekommt Frau Sadiku den Schlüssel?",
    "options": [
     "Im Büro, morgen früh um sieben Uhr",
     "Im Objekt, direkt an der Tür vorne",
     "Bei Frau Weber zu Hause am Abend",
     "Im Büro, heute Abend nach der Arbeit"
    ],
    "answer": 0,
    "transcript": "Hallo Frau Sadiku, hier ist Kern von der Reinigung. Frau Weber ist krank. Können Sie morgen ihr Objekt in der Bahnhofstraße übernehmen? Es ist nur die Unterhaltsreinigung, ungefähr drei Stunden. Den Schlüssel bekommen Sie vorher im Büro, die Schlüsselübergabe ist um sieben Uhr. Bitte rufen Sie mich heute Abend noch kurz an.",
    "explain": "Er sagt, die Schlüsselübergabe ist morgen um sieben Uhr im Büro, vor der Arbeit im Objekt."
   },
   {
    "type": "listen",
    "label": "🪟 Am Tresen: Material abholen",
    "audioUrl": "https://d8j0ntlcm91z4.cloudfront.net/user_38tIQPWpEsaUmk18tYN8mskaaAF/hf_20260826_080733_eb5e0c1f-cbd6-4631-929e-10f7d0c70d1f.mp3",
    "q": "Was bekommt sie heute noch nicht?",
    "options": [
     "Das Papier, denn es kommt erst am Donnerstag",
     "Den Mopp, denn er ist gerade nicht da",
     "Die Seife, denn sie kommt am Donnerstag",
     "Das gelbe Mittel, denn es ist zu stark"
    ],
    "answer": 0,
    "transcript": "Guten Morgen, ich brauche Verbrauchsmaterial für das Objekt in der Schulstraße. — Was fehlt denn? — Seife, Papier und ein neuer Wischmopp. — Den Mopp gebe ich Ihnen, das Papier ist gerade alle. Es kommt erst am Donnerstag. — Und ein Mittel gegen den Kalk? — Nehmen Sie das gelbe. Aber Vorsicht bei der Dosierung, nur ein Verschluss auf einen Eimer.",
    "explain": "Der Kollege am Tresen sagt, das Papier ist alle und kommt erst am Donnerstag."
   },
   {
    "type": "listen",
    "label": "☕ Privat: Das neue Objekt",
    "audioUrl": "https://d8j0ntlcm91z4.cloudfront.net/user_38tIQPWpEsaUmk18tYN8mskaaAF/hf_20260826_080733_acb68d13-a39c-4fab-a6a5-5d018510a69a.mp3",
    "q": "Was macht der Chef nächste Woche?",
    "options": [
     "Er kommt selbst zur Abnahme und schaut nach",
     "Er schreibt für sie einen neuen Reinigungsplan",
     "Er bringt ihr neue Schutzhandschuhe mit",
     "Er sucht für sie eine zweite Kollegin"
    ],
    "answer": 0,
    "transcript": "Wie läuft es in dem neuen Objekt? — Ganz gut, aber der Reinigungsplan ist zu voll. Vier Etagen in drei Stunden, das schaffe ich nicht. — Hast du das gesagt? — Ja, beim Chef. Er kommt nächste Woche zur Abnahme und schaut sich das selbst an. — Und die Handschuhe? — Neue habe ich bekommen. Nur den Stundenzettel vergesse ich immer.",
    "explain": "Sie sagt, der Chef kommt nächste Woche zur Abnahme und sieht sich die Arbeit selbst an."
   },
   {
    "type": "choice",
    "audio": "der Reinigungsplan",
    "q": "🔊 Hör zu – was bedeutet das Wort?",
    "options": [
     "dort steht, was wann drankommt",
     "dort steht, wer wie viel verdient",
     "dort steht, wo die Mittel stehen",
     "dort steht, wem der Schlüssel gehört"
    ],
    "answer": 0,
    "w": "der Reinigungsplan",
    "explain": "der Reinigungsplan = dort steht, was wann drankommt."
   },
   {
    "type": "choice",
    "audio": "die Dosierung",
    "q": "🔊 Hör zu – was bedeutet das Wort?",
    "options": [
     "wie warm das Wasser sein soll",
     "wie viel Mittel ins Wasser kommt",
     "wie lange man den Boden wischt",
     "wie oft man das Wasser wechselt"
    ],
    "answer": 1,
    "w": "die Dosierung",
    "explain": "die Dosierung = wie viel Mittel ins Wasser kommt."
   },
   {
    "type": "choice",
    "audio": "das Sicherheitsdatenblatt",
    "q": "🔊 Hör zu – was bedeutet das Wort?",
    "options": [
     "Papier über die geputzten Räume",
     "Papier über die eigenen Stunden",
     "Papier über gefährliche Mittel",
     "Papier über die neuen Kollegen"
    ],
    "answer": 2,
    "w": "das Sicherheitsdatenblatt",
    "explain": "das Sicherheitsdatenblatt = Papier über gefährliche Mittel."
   },
   {
    "type": "choice",
    "audio": "die Grundreinigung",
    "q": "🔊 Hör zu – was bedeutet das Wort?",
    "options": [
     "jede Woche kurz über alles wischen",
     "jeden Morgen nur die Toiletten machen",
     "einmal im Jahr alle Mittel prüfen",
     "einmal alles ganz tief sauber machen"
    ],
    "answer": 3,
    "w": "die Grundreinigung",
    "explain": "die Grundreinigung = einmal alles ganz tief sauber machen."
   },
   {
    "type": "choice",
    "audio": "das Objekt",
    "q": "🔊 Hör zu – was bedeutet das Wort?",
    "options": [
     "das Haus, in dem du putzt",
     "der Wagen mit dem Material",
     "der Raum mit den Eimern",
     "die Firma, die dich bezahlt"
    ],
    "answer": 0,
    "w": "das Objekt",
    "explain": "das Objekt = das Haus, in dem du putzt."
   },
   {
    "type": "choice",
    "audio": "die Schlüsselübergabe",
    "q": "🔊 Hör zu – was bedeutet das Wort?",
    "options": [
     "einer schließt am Abend alle Türen",
     "einer gibt dem anderen den Schlüssel",
     "einer lässt einen neuen Schlüssel machen",
     "einer meldet den verlorenen Schlüssel"
    ],
    "answer": 1,
    "w": "die Schlüsselübergabe",
    "explain": "die Schlüsselübergabe = einer gibt dem anderen den Schlüssel."
   },
   {
    "type": "choice",
    "audio": "das Verbrauchsmaterial",
    "q": "🔊 Hör zu – was bedeutet das Wort?",
    "options": [
     "Sachen, die viele Jahre halten",
     "Sachen, die dem Kunden gehören",
     "Sachen, die immer wieder leer werden",
     "Sachen, die man selbst bezahlt"
    ],
    "answer": 2,
    "w": "das Verbrauchsmaterial",
    "explain": "das Verbrauchsmaterial = Sachen, die immer wieder leer werden."
   },
   {
    "type": "choice",
    "audio": "die Krankheitsvertretung",
    "q": "🔊 Hör zu – was bedeutet das Wort?",
    "options": [
     "sich selbst beim Chef krank melden",
     "einen kranken Kollegen zu Hause besuchen",
     "vom Arzt ein Papier für die Firma holen",
     "für einen kranken Kollegen einspringen"
    ],
    "answer": 3,
    "w": "die Krankheitsvertretung",
    "explain": "die Krankheitsvertretung = für einen kranken Kollegen einspringen."
   },
   {
    "type": "choice",
    "audio": "der Wischmopp",
    "q": "🔊 Hör zu – was bedeutet das Wort?",
    "options": [
     "damit machst du den Boden nass",
     "damit machst du das Fenster trocken",
     "damit holst du den Staub von oben",
     "damit trägst du das schmutzige Wasser"
    ],
    "answer": 0,
    "w": "der Wischmopp",
    "explain": "der Wischmopp = damit machst du den Boden nass."
   },
   {
    "type": "choice",
    "audio": "der Putzeimer",
    "q": "🔊 Hör zu – was bedeutet das Wort?",
    "options": [
     "darin ist der Müll aus den Räumen",
     "darin ist das Wasser mit Mittel",
     "darin sind die Tücher und Schwämme",
     "darin sind die Schlüssel vom Objekt"
    ],
    "answer": 1,
    "w": "der Putzeimer",
    "explain": "der Putzeimer = darin ist das Wasser mit Mittel."
   },
   {
    "type": "choice",
    "audio": "die Schutzhandschuhe",
    "q": "🔊 Hör zu – was bedeutet das Wort?",
    "options": [
     "damit bleiben deine Schuhe sauber",
     "damit bleibt dein Haar geschützt",
     "damit bleiben deine Hände sicher",
     "damit bleiben deine Augen sicher"
    ],
    "answer": 2,
    "w": "die Schutzhandschuhe",
    "explain": "die Schutzhandschuhe = damit bleiben deine Hände sicher."
   },
   {
    "type": "choice",
    "audio": "der Sanitärbereich",
    "q": "🔊 Hör zu – was bedeutet das Wort?",
    "options": [
     "Räume mit Tisch und Stühlen",
     "Räume mit Betten und Schränken",
     "Räume mit Maschinen und Werkzeug",
     "Räume mit Toilette und Waschbecken"
    ],
    "answer": 3,
    "w": "der Sanitärbereich",
    "explain": "der Sanitärbereich = Räume mit Toilette und Waschbecken."
   },
   {
    "type": "choice",
    "audio": "die Unterhaltsreinigung",
    "q": "🔊 Hör zu – was bedeutet das Wort?",
    "options": [
     "das normale Putzen jede Woche",
     "das große Putzen einmal im Jahr",
     "das schnelle Putzen nach einem Fest",
     "das Putzen vor einem neuen Mieter"
    ],
    "answer": 0,
    "w": "die Unterhaltsreinigung",
    "explain": "die Unterhaltsreinigung = das normale Putzen jede Woche."
   },
   {
    "type": "choice",
    "audio": "der Kalk",
    "q": "🔊 Hör zu – was bedeutet das Wort?",
    "options": [
     "graue Reste vom alten Staub",
     "weiße Reste vom harten Wasser",
     "braune Reste vom starken Kaffee",
     "helle Reste von der Seife"
    ],
    "answer": 1,
    "w": "der Kalk",
    "explain": "der Kalk = weiße Reste vom harten Wasser."
   },
   {
    "type": "choice",
    "audio": "der Stundenzettel",
    "q": "🔊 Hör zu – was bedeutet das Wort?",
    "options": [
     "dort schreibst du das fehlende Material auf",
     "dort schreibst du die kaputten Sachen auf",
     "dort schreibst du deine Arbeitszeit auf",
     "dort schreibst du deine freien Tage auf"
    ],
    "answer": 2,
    "w": "der Stundenzettel",
    "explain": "der Stundenzettel = dort schreibst du deine Arbeitszeit auf."
   },
   {
    "type": "choice",
    "audio": "die Abnahme",
    "q": "🔊 Hör zu – was bedeutet das Wort?",
    "options": [
     "der Kunde bestellt eine neue Arbeit",
     "der Kunde bezahlt die letzte Rechnung",
     "der Kunde gibt den Schlüssel zurück",
     "der Kunde prüft die fertige Arbeit"
    ],
    "answer": 3,
    "w": "die Abnahme",
    "explain": "die Abnahme = der Kunde prüft die fertige Arbeit."
   }
  ]
 },
 {
  "id": "sozial",
  "title": "Beratung und soziale Arbeit",
  "level": "B1",
  "emoji": "🎧",
  "words": [
   {
    "de": "das Beratungsgespräch",
    "info": "ruhig über deine Lage sprechen",
    "emoji": "💬"
   },
   {
    "de": "die Anlaufstelle",
    "info": "dort fängst du mit Fragen an",
    "emoji": "🚪"
   },
   {
    "de": "die Sachbearbeiterin",
    "info": "sie kümmert sich im Amt darum",
    "emoji": "🗂️"
   },
   {
    "de": "der Bescheid",
    "info": "die schriftliche Antwort vom Amt",
    "emoji": "📬"
   },
   {
    "de": "der Widerspruch",
    "info": "schriftlich sagen, dass etwas falsch ist",
    "emoji": "✍️"
   },
   {
    "de": "die Frist",
    "info": "bis dahin muss es da sein",
    "emoji": "⏳"
   },
   {
    "de": "die Vollmacht",
    "info": "damit darf jemand für dich sprechen",
    "emoji": "🖊️"
   },
   {
    "de": "die Schweigepflicht",
    "info": "nichts davon geht nach außen",
    "emoji": "🤐"
   },
   {
    "de": "die Begleitung",
    "info": "jemand geht mit dir hin",
    "emoji": "🫱"
   },
   {
    "de": "der Hausbesuch",
    "info": "die Beraterin kommt zu dir",
    "emoji": "🏠"
   },
   {
    "de": "die Dolmetscherin",
    "info": "sie sagt alles in deiner Sprache",
    "emoji": "🗣️"
   },
   {
    "de": "die Zuständigkeit",
    "info": "wer sich um deinen Fall kümmert",
    "emoji": "🧭"
   },
   {
    "de": "das Netzwerk",
    "info": "viele Stellen arbeiten gut zusammen",
    "emoji": "🔗"
   },
   {
    "de": "die Krisensituation",
    "info": "wenn gerade gar nichts mehr geht",
    "emoji": "⚡"
   },
   {
    "de": "die Notfallnummer",
    "info": "dort ist auch nachts jemand erreichbar",
    "emoji": "☎️"
   },
   {
    "de": "die Dokumentation",
    "info": "alles Wichtige wird kurz aufgeschrieben",
    "emoji": "📝"
   }
  ],
  "exercises": [
   {
    "type": "listen",
    "label": "📢 Durchsage im Wartebereich",
    "audioUrl": "https://d8j0ntlcm91z4.cloudfront.net/user_38tIQPWpEsaUmk18tYN8mskaaAF/hf_20260826_080733_d558ecbf-483f-47ea-a9a8-5f1e01948752.mp3",
    "q": "Was sollen Menschen mit einer Frist jetzt tun?",
    "options": [
     "Am Empfang kurz Bescheid sagen",
     "Bis fünfzehn Uhr sitzen bleiben",
     "Nächste Woche einen Termin holen",
     "Den Brief noch einmal durchlesen"
    ],
    "answer": 0,
    "transcript": "Ein kurzer Hinweis für alle im Wartebereich: Die offene Sprechstunde endet heute schon um fünfzehn Uhr, weil eine Kollegin zu einem Hausbesuch fährt. Wenn Ihr Anliegen eine Frist hat, zum Beispiel ein Widerspruch, sagen Sie das bitte am Empfang. Dann nehmen wir Sie vorher dran. Alle anderen bekommen heute einen Termin für nächste Woche.",
    "explain": "In der Durchsage heißt es, dass man eine Frist am Empfang sagen soll, um vorher dranzukommen."
   },
   {
    "type": "listen",
    "label": "📞 Mailbox: Termin beim Amt",
    "audioUrl": "https://d8j0ntlcm91z4.cloudfront.net/user_38tIQPWpEsaUmk18tYN8mskaaAF/hf_20260826_080733_7bcbe1fa-2f28-4a1d-918d-686eef30bbf3.mp3",
    "q": "Was braucht Frau Klose, damit sie im Amt für ihn sprechen darf?",
    "options": [
     "Die Vollmacht mit seiner Unterschrift",
     "Den letzten Bescheid vom Amt",
     "Einen Ausweis mit seinem Foto",
     "Eine Bestätigung von der Beratungsstelle"
    ],
    "answer": 0,
    "transcript": "Guten Tag, Herr Aydin, hier ist Frau Klose von der Beratungsstelle. Ihr Termin beim Amt ist am Donnerstag um zehn Uhr. Ich komme gern mit, das haben wir ja so besprochen. Bringen Sie bitte die Vollmacht unterschrieben mit, sonst darf ich im Gespräch nichts für Sie sagen. Wir treffen uns eine Viertelstunde vorher vor dem Eingang.",
    "explain": "Sie sagt, ohne die unterschriebene Vollmacht darf sie im Gespräch nichts für ihn sagen."
   },
   {
    "type": "listen",
    "label": "🪟 Am Tresen: ein Brief vom Amt",
    "audioUrl": "https://d8j0ntlcm91z4.cloudfront.net/user_38tIQPWpEsaUmk18tYN8mskaaAF/hf_20260826_080939_52d1d7f2-07f7-4358-be26-aa188a26f9ea.mp3",
    "q": "Wie viel Zeit bleibt dem Mann noch für den Widerspruch?",
    "options": [
     "Noch elf Tage ab heute",
     "Noch bis zum Termin morgen",
     "Noch vier Wochen ab dem Brief",
     "Noch einen Tag nach dem Termin"
    ],
    "answer": 0,
    "transcript": "Guten Tag, ich habe hier einen Brief bekommen und verstehe ihn nicht. — Darf ich kurz schauen? — Bitte. — Das ist ein Bescheid vom Jobcenter, und hier steht eine Frist: Sie haben noch elf Tage für einen Widerspruch. — Und was mache ich jetzt? — Ich gebe Ihnen morgen einen Termin bei meiner Kollegin. Bringen Sie bitte alle Briefe mit, auch die alten.",
    "explain": "Die Mitarbeiterin liest aus dem Bescheid vor, dass noch elf Tage für den Widerspruch bleiben."
   },
   {
    "type": "listen",
    "label": "☕ Unter Kolleginnen: nach dem Hausbesuch",
    "audioUrl": "https://d8j0ntlcm91z4.cloudfront.net/user_38tIQPWpEsaUmk18tYN8mskaaAF/hf_20260826_080939_46d8596c-39f3-4826-b471-6b6e0b5ab298.mp3",
    "q": "Was haben die Beraterin und die Frau beim Hausbesuch geschafft?",
    "options": [
     "Sie haben zusammen den Antrag angefangen",
     "Sie haben den Antrag fertig abgegeben",
     "Sie haben den Termin beim Amt verschoben",
     "Sie sind zusammen zum Amt gegangen"
    ],
    "answer": 0,
    "transcript": "Du siehst müde aus. — Der Hausbesuch heute war schwer. Die Frau hat geweint, und ich konnte erst mal nur zuhören. — Und, habt ihr etwas geschafft? — Wir haben zusammen den Antrag angefangen, den Rest macht sie nächste Woche mit mir. — Und du? — Ich schreibe jetzt die Dokumentation und rufe morgen die Kollegin vom Netzwerk an.",
    "explain": "Sie erzählt, dass sie mit der Frau gemeinsam den Antrag begonnen hat und der Rest nächste Woche folgt."
   },
   {
    "type": "choice",
    "audio": "das Beratungsgespräch",
    "q": "🔊 Hör zu – was bedeutet das Wort?",
    "options": [
     "ruhig über deine Lage sprechen",
     "schnell ein Formular abgeben",
     "einen Kurs mit vielen Leuten besuchen",
     "beim Amt eine Nummer ziehen"
    ],
    "answer": 0,
    "w": "das Beratungsgespräch",
    "explain": "das Beratungsgespräch = ruhig über deine Lage sprechen."
   },
   {
    "type": "choice",
    "audio": "die Anlaufstelle",
    "q": "🔊 Hör zu – was bedeutet das Wort?",
    "options": [
     "dort holst du deinen fertigen Bescheid",
     "dort fängst du mit Fragen an",
     "dort gibst du deine Papiere ab",
     "dort wartest du auf deinen Bus"
    ],
    "answer": 1,
    "w": "die Anlaufstelle",
    "explain": "die Anlaufstelle = dort fängst du mit Fragen an."
   },
   {
    "type": "choice",
    "audio": "die Sachbearbeiterin",
    "q": "🔊 Hör zu – was bedeutet das Wort?",
    "options": [
     "sie verteilt am Empfang die Nummern",
     "sie übersetzt das Gespräch für dich",
     "sie kümmert sich im Amt darum",
     "sie begleitet dich zu dem Termin"
    ],
    "answer": 2,
    "w": "die Sachbearbeiterin",
    "explain": "die Sachbearbeiterin = sie kümmert sich im Amt darum."
   },
   {
    "type": "choice",
    "audio": "der Bescheid",
    "q": "🔊 Hör zu – was bedeutet das Wort?",
    "options": [
     "die Einladung zum nächsten Termin",
     "die Liste mit deinen Unterlagen",
     "der Zettel mit der Wartenummer",
     "die schriftliche Antwort vom Amt"
    ],
    "answer": 3,
    "w": "der Bescheid",
    "explain": "der Bescheid = die schriftliche Antwort vom Amt."
   },
   {
    "type": "choice",
    "audio": "der Widerspruch",
    "q": "🔊 Hör zu – was bedeutet das Wort?",
    "options": [
     "schriftlich sagen, dass etwas falsch ist",
     "schriftlich um mehr Zeit bitten",
     "schriftlich einen neuen Antrag stellen",
     "schriftlich die Adresse ändern lassen"
    ],
    "answer": 0,
    "w": "der Widerspruch",
    "explain": "der Widerspruch = schriftlich sagen, dass etwas falsch ist."
   },
   {
    "type": "choice",
    "audio": "die Frist",
    "q": "🔊 Hör zu – was bedeutet das Wort?",
    "options": [
     "so lange dauert die Bearbeitung",
     "bis dahin muss es da sein",
     "so lange sitzt man im Wartebereich",
     "ab dann kommt das Geld wieder"
    ],
    "answer": 1,
    "w": "die Frist",
    "explain": "die Frist = bis dahin muss es da sein."
   },
   {
    "type": "choice",
    "audio": "die Vollmacht",
    "q": "🔊 Hör zu – was bedeutet das Wort?",
    "options": [
     "damit darfst du das Amt betreten",
     "damit bekommst du einen festen Termin",
     "damit darf jemand für dich sprechen",
     "damit zeigst du dein ganzes Einkommen"
    ],
    "answer": 2,
    "w": "die Vollmacht",
    "explain": "die Vollmacht = damit darf jemand für dich sprechen."
   },
   {
    "type": "choice",
    "audio": "die Schweigepflicht",
    "q": "🔊 Hör zu – was bedeutet das Wort?",
    "options": [
     "im Gespräch redet immer nur einer",
     "im Wartebereich bleibt es leise",
     "am Telefon nennt man keine Namen",
     "nichts davon geht nach außen"
    ],
    "answer": 3,
    "w": "die Schweigepflicht",
    "explain": "die Schweigepflicht = nichts davon geht nach außen."
   },
   {
    "type": "choice",
    "audio": "die Begleitung",
    "q": "🔊 Hör zu – was bedeutet das Wort?",
    "options": [
     "jemand geht mit dir hin",
     "jemand macht alles für dich",
     "jemand ruft für dich an",
     "jemand wartet vor der Tür"
    ],
    "answer": 0,
    "w": "die Begleitung",
    "explain": "die Begleitung = jemand geht mit dir hin."
   },
   {
    "type": "choice",
    "audio": "der Hausbesuch",
    "q": "🔊 Hör zu – was bedeutet das Wort?",
    "options": [
     "die Beraterin ruft dich abends an",
     "die Beraterin kommt zu dir",
     "der Vermieter schaut die Wohnung an",
     "das Amt schickt dir einen Brief"
    ],
    "answer": 1,
    "w": "der Hausbesuch",
    "explain": "der Hausbesuch = die Beraterin kommt zu dir."
   },
   {
    "type": "choice",
    "audio": "die Dolmetscherin",
    "q": "🔊 Hör zu – was bedeutet das Wort?",
    "options": [
     "sie schreibt das Gespräch für dich mit",
     "sie erklärt dir die vielen Formulare",
     "sie sagt alles in deiner Sprache",
     "sie bringt dich zum richtigen Zimmer"
    ],
    "answer": 2,
    "w": "die Dolmetscherin",
    "explain": "die Dolmetscherin = sie sagt alles in deiner Sprache."
   },
   {
    "type": "choice",
    "audio": "die Zuständigkeit",
    "q": "🔊 Hör zu – was bedeutet das Wort?",
    "options": [
     "wie lange dein Antrag dauert",
     "was du alles mitbringen musst",
     "wo du eine Nummer ziehst",
     "wer sich um deinen Fall kümmert"
    ],
    "answer": 3,
    "w": "die Zuständigkeit",
    "explain": "die Zuständigkeit = wer sich um deinen Fall kümmert."
   },
   {
    "type": "choice",
    "audio": "das Netzwerk",
    "q": "🔊 Hör zu – was bedeutet das Wort?",
    "options": [
     "viele Stellen arbeiten gut zusammen",
     "viele Menschen warten im gleichen Raum",
     "mehrere Ämter in einem Gebäude",
     "alle Termine an einem Tag"
    ],
    "answer": 0,
    "w": "das Netzwerk",
    "explain": "das Netzwerk = viele Stellen arbeiten gut zusammen."
   },
   {
    "type": "choice",
    "audio": "die Krisensituation",
    "q": "🔊 Hör zu – was bedeutet das Wort?",
    "options": [
     "wenn ein Termin verschoben wird",
     "wenn gerade gar nichts mehr geht",
     "wenn ein Brief zu spät kommt",
     "wenn das Amt geschlossen hat"
    ],
    "answer": 1,
    "w": "die Krisensituation",
    "explain": "die Krisensituation = wenn gerade gar nichts mehr geht."
   },
   {
    "type": "choice",
    "audio": "die Notfallnummer",
    "q": "🔊 Hör zu – was bedeutet das Wort?",
    "options": [
     "dort fragt man nach freien Terminen",
     "dort meldet man einen neuen Umzug",
     "dort ist auch nachts jemand erreichbar",
     "dort gibt man den Antrag durch"
    ],
    "answer": 2,
    "w": "die Notfallnummer",
    "explain": "die Notfallnummer = dort ist auch nachts jemand erreichbar."
   },
   {
    "type": "choice",
    "audio": "die Dokumentation",
    "q": "🔊 Hör zu – was bedeutet das Wort?",
    "options": [
     "alle Briefe werden zurückgeschickt",
     "alle Termine werden laut vorgelesen",
     "alle Papiere werden gleich vernichtet",
     "alles Wichtige wird kurz aufgeschrieben"
    ],
    "answer": 3,
    "w": "die Dokumentation",
    "explain": "die Dokumentation = alles Wichtige wird kurz aufgeschrieben."
   }
  ]
 },
 {
  "id": "verkaufen",
  "title": "Privat verkaufen",
  "level": "B1",
  "emoji": "🎧",
  "words": [
   {
    "de": "die Anzeige",
    "info": "damit bietest du etwas an",
    "emoji": "📱"
   },
   {
    "de": "der Zustand",
    "info": "so gut ist die Ware noch",
    "emoji": "🔍"
   },
   {
    "de": "die Gebrauchsspuren",
    "info": "kleine Kratzer und matte Stellen",
    "emoji": "🪶"
   },
   {
    "de": "defekt",
    "info": "es geht nicht mehr richtig",
    "emoji": "⚠️"
   },
   {
    "de": "die Verhandlungsbasis",
    "info": "über den Preis lässt sich reden",
    "emoji": "💬"
   },
   {
    "de": "der Festpreis",
    "info": "da geht nichts mehr runter",
    "emoji": "🔒"
   },
   {
    "de": "handeln",
    "info": "gemeinsam einen neuen Preis finden",
    "emoji": "🤝"
   },
   {
    "de": "der Nachlass",
    "info": "ein bisschen weniger vom Preis",
    "emoji": "💸"
   },
   {
    "de": "das Angebot",
    "info": "so viel will jemand zahlen",
    "emoji": "✋"
   },
   {
    "de": "der Interessent",
    "info": "jemand will die Sache kaufen",
    "emoji": "🙋"
   },
   {
    "de": "die Besichtigung",
    "info": "vorher in Ruhe ansehen",
    "emoji": "👀"
   },
   {
    "de": "die Abholung",
    "info": "der Käufer kommt selbst vorbei",
    "emoji": "🚗"
   },
   {
    "de": "die Übergabe",
    "info": "Ware und Geld wechseln den Besitzer",
    "emoji": "🤲"
   },
   {
    "de": "verbindlich",
    "info": "das gilt dann wirklich fest",
    "emoji": "✍️"
   },
   {
    "de": "die Reservierung",
    "info": "die Sache wird zurückgelegt",
    "emoji": "📌"
   },
   {
    "de": "die Standgebühr",
    "info": "so viel kostet dein Platz",
    "emoji": "🧺"
   }
  ],
  "exercises": [
   {
    "type": "listen",
    "label": "📢 Durchsage auf dem Flohmarkt",
    "audioUrl": "https://d8j0ntlcm91z4.cloudfront.net/user_38tIQPWpEsaUmk18tYN8mskaaAF/hf_20260826_063253_2bb370ce-6466-477d-8f71-4d475ec4a198.mp3",
    "q": "Was passiert, wenn jemand seinen Müll liegen lässt?",
    "options": [
     "Er darf beim nächsten Mal nicht kommen",
     "Er muss zusätzlich Geld dafür bezahlen",
     "Er bekommt die Standgebühr nicht zurück",
     "Er muss seinen Stand später abbauen"
    ],
    "answer": 1,
    "transcript": "Liebe Händlerinnen und Händler, wir bitten Sie, Ihre Fahrzeuge bis spätestens neun Uhr vom Gelände zu fahren. Die Standgebühr kassieren wir wie immer direkt am Stand, bitte halten Sie das Geld passend bereit. Der Aufbau ist ab sechs Uhr möglich. Nach Marktschluss nehmen Sie bitte Ihren Müll wieder mit, sonst wird eine zusätzliche Gebühr fällig.",
    "explain": "Für liegen gebliebenen Müll wird laut Durchsage eine zusätzliche Gebühr fällig."
   },
   {
    "type": "listen",
    "label": "📞 Mailbox: Angebot für das Fahrrad",
    "audioUrl": "https://d8j0ntlcm91z4.cloudfront.net/user_38tIQPWpEsaUmk18tYN8mskaaAF/hf_20260826_063253_eb2c6470-e430-4326-bf78-b4e1618fa908.mp3",
    "q": "Womit begründet er sein niedrigeres Angebot?",
    "options": [
     "Er muss neue Reifen dafür kaufen",
     "Er wohnt sehr weit davon entfernt",
     "Er hat das Rad woanders billiger gesehen",
     "Er kann es erst sehr spät abholen"
    ],
    "answer": 0,
    "transcript": "Hallo, hier ist Marco, ich rufe wegen des Fahrrads aus Ihrer Anzeige an. Sie schreiben hundertzwanzig Euro Verhandlungsbasis. Ich würde neunzig bieten, weil die Reifen neu müssen. Abholen könnte ich es am Samstagvormittag, ich habe einen Kombi. Wenn Ihnen der Preis zu niedrig ist, melden Sie sich trotzdem kurz. Dann reden wir noch mal darüber.",
    "explain": "Er bietet weniger als gefordert, weil das Fahrrad neue Reifen braucht."
   },
   {
    "type": "listen",
    "label": "🧺 Am Stand: zwei Lampen, ein Preis",
    "audioUrl": "https://d8j0ntlcm91z4.cloudfront.net/user_38tIQPWpEsaUmk18tYN8mskaaAF/hf_20260826_063519_8ace8e1e-a252-44a7-9924-f6d03f3af9cf.mp3",
    "q": "Wie viel zahlt die Kundin am Ende für beide Lampen?",
    "options": [
     "Fünfunddreißig Euro, wie sie vorgeschlagen hat",
     "Vierzig Euro, wie er zuerst gesagt hat",
     "Achtunddreißig Euro, also der Preis dazwischen",
     "Fünfzig Euro, also zweimal fünfundzwanzig"
    ],
    "answer": 2,
    "transcript": "Was soll die Lampe kosten? — Fünfundzwanzig. — Und wenn ich beide nehme? — Dann machen wir vierzig für die zwei. — Sagen wir fünfunddreißig, dann nehme ich sie sofort mit. — Fünfunddreißig ist mir zu wenig. Achtunddreißig, letztes Angebot. — Gut, einverstanden. Haben Sie Papier zum Einwickeln? — Klar, ich packe sie Ihnen ein.",
    "explain": "Sie einigen sich auf achtunddreißig Euro, also zwischen ihrem Vorschlag und seinen vierzig."
   },
   {
    "type": "listen",
    "label": "☕ Privat: Das Sofa in die Anzeige",
    "audioUrl": "https://d8j0ntlcm91z4.cloudfront.net/user_38tIQPWpEsaUmk18tYN8mskaaAF/hf_20260826_063519_2432af95-b293-4056-9f6c-1ca0e45f213d.mp3",
    "q": "Was soll unbedingt in die Anzeige?",
    "options": [
     "Dass das Sofa durch die Tür passt",
     "Dass der Preis nicht verhandelbar ist",
     "Dass das Sofa geliefert werden kann",
     "Dass es kaum Gebrauchsspuren hat"
    ],
    "answer": 0,
    "transcript": "Ich stelle das Sofa heute Abend rein. — Schreibst du gebraucht oder gut erhalten? — Gut erhalten mit leichten Gebrauchsspuren, das stimmt ja auch. — Und der Preis? — Achtzig, Verhandlungsbasis. Nur Abholung, ich schleppe das nicht durch die halbe Stadt. — Schreib unbedingt dazu, dass es durch die Tür passt. Sonst stehen die Leute hier und gehen wieder.",
    "explain": "Der Hinweis auf die Tür soll verhindern, dass Interessenten umsonst anreisen."
   },
   {
    "type": "choice",
    "audio": "die Anzeige",
    "q": "🔊 Hör zu – was bedeutet das Wort?",
    "options": [
     "damit bietest du etwas an",
     "damit suchst du eine Wohnung",
     "damit meldest du dich für einen Stand",
     "damit zeigst du deinen Preis"
    ],
    "answer": 0,
    "w": "die Anzeige",
    "explain": "die Anzeige = damit bietest du etwas an."
   },
   {
    "type": "choice",
    "audio": "der Zustand",
    "q": "🔊 Hör zu – was bedeutet das Wort?",
    "options": [
     "so alt ist der Verkäufer schon",
     "so gut ist die Ware noch",
     "so teuer war die Ware einmal",
     "so lange steht die Anzeige drin"
    ],
    "answer": 1,
    "w": "der Zustand",
    "explain": "der Zustand = so gut ist die Ware noch."
   },
   {
    "type": "choice",
    "audio": "die Gebrauchsspuren",
    "q": "🔊 Hör zu – was bedeutet das Wort?",
    "options": [
     "große Löcher und fehlende Teile",
     "frische Farbe und neue Griffe",
     "kleine Kratzer und matte Stellen",
     "kleine Zettel mit alten Preisen"
    ],
    "answer": 2,
    "w": "die Gebrauchsspuren",
    "explain": "die Gebrauchsspuren = kleine Kratzer und matte Stellen."
   },
   {
    "type": "choice",
    "audio": "defekt",
    "q": "🔊 Hör zu – was bedeutet das Wort?",
    "options": [
     "es ist nur ein bisschen alt",
     "es fehlt nur die Anleitung",
     "es ist noch nie benutzt worden",
     "es geht nicht mehr richtig"
    ],
    "answer": 3,
    "w": "defekt",
    "explain": "defekt = es geht nicht mehr richtig."
   },
   {
    "type": "choice",
    "audio": "die Verhandlungsbasis",
    "q": "🔊 Hör zu – was bedeutet das Wort?",
    "options": [
     "über den Preis lässt sich reden",
     "über den Termin lässt sich reden",
     "der Preis steht endgültig fest",
     "der Preis gilt nur heute"
    ],
    "answer": 0,
    "w": "die Verhandlungsbasis",
    "explain": "die Verhandlungsbasis = über den Preis lässt sich reden."
   },
   {
    "type": "choice",
    "audio": "der Festpreis",
    "q": "🔊 Hör zu – was bedeutet das Wort?",
    "options": [
     "da kommt noch etwas dazu",
     "da geht nichts mehr runter",
     "da darf man ruhig handeln",
     "da zahlt man erst später"
    ],
    "answer": 1,
    "w": "der Festpreis",
    "explain": "der Festpreis = da geht nichts mehr runter."
   },
   {
    "type": "choice",
    "audio": "handeln",
    "q": "🔊 Hör zu – was bedeutet das Wort?",
    "options": [
     "gemeinsam einen Termin ausmachen",
     "den geforderten Preis sofort zahlen",
     "gemeinsam einen neuen Preis finden",
     "die Ware zusammen einpacken"
    ],
    "answer": 2,
    "w": "handeln",
    "explain": "handeln = gemeinsam einen neuen Preis finden."
   },
   {
    "type": "choice",
    "audio": "der Nachlass",
    "q": "🔊 Hör zu – was bedeutet das Wort?",
    "options": [
     "ein bisschen mehr für die Ware",
     "ein zweites Stück gratis dazu",
     "ein Teil des Geldes später",
     "ein bisschen weniger vom Preis"
    ],
    "answer": 3,
    "w": "der Nachlass",
    "explain": "der Nachlass = ein bisschen weniger vom Preis."
   },
   {
    "type": "choice",
    "audio": "das Angebot",
    "q": "🔊 Hör zu – was bedeutet das Wort?",
    "options": [
     "so viel will jemand zahlen",
     "so viel hat die Ware gekostet",
     "so viel Zeit bleibt zum Abholen",
     "so viel wiegt das ganze Paket"
    ],
    "answer": 0,
    "w": "das Angebot",
    "explain": "das Angebot = so viel will jemand zahlen."
   },
   {
    "type": "choice",
    "audio": "der Interessent",
    "q": "🔊 Hör zu – was bedeutet das Wort?",
    "options": [
     "jemand will die Sache verkaufen",
     "jemand will die Sache kaufen",
     "jemand bringt die Sache vorbei",
     "jemand hat die Sache schon gekauft"
    ],
    "answer": 1,
    "w": "der Interessent",
    "explain": "der Interessent = jemand will die Sache kaufen."
   },
   {
    "type": "choice",
    "audio": "die Besichtigung",
    "q": "🔊 Hör zu – was bedeutet das Wort?",
    "options": [
     "vorher schon einmal bezahlen",
     "hinterher wieder zurückgeben",
     "vorher in Ruhe ansehen",
     "vorher kurz am Telefon beschreiben"
    ],
    "answer": 2,
    "w": "die Besichtigung",
    "explain": "die Besichtigung = vorher in Ruhe ansehen."
   },
   {
    "type": "choice",
    "audio": "die Abholung",
    "q": "🔊 Hör zu – was bedeutet das Wort?",
    "options": [
     "der Verkäufer bringt es hin",
     "die Post schickt es als Paket",
     "ein Nachbar nimmt es mit",
     "der Käufer kommt selbst vorbei"
    ],
    "answer": 3,
    "w": "die Abholung",
    "explain": "die Abholung = der Käufer kommt selbst vorbei."
   },
   {
    "type": "choice",
    "audio": "die Übergabe",
    "q": "🔊 Hör zu – was bedeutet das Wort?",
    "options": [
     "Ware und Geld wechseln den Besitzer",
     "Preis und Termin werden besprochen",
     "Fotos und Text kommen ins Netz",
     "Ware und Geld gehen wieder zurück"
    ],
    "answer": 0,
    "w": "die Übergabe",
    "explain": "die Übergabe = Ware und Geld wechseln den Besitzer."
   },
   {
    "type": "choice",
    "audio": "verbindlich",
    "q": "🔊 Hör zu – was bedeutet das Wort?",
    "options": [
     "das ist nur so eine Idee",
     "das gilt dann wirklich fest",
     "das kann man noch absagen",
     "das gilt nur für einen Tag"
    ],
    "answer": 1,
    "w": "verbindlich",
    "explain": "verbindlich = das gilt dann wirklich fest."
   },
   {
    "type": "choice",
    "audio": "die Reservierung",
    "q": "🔊 Hör zu – was bedeutet das Wort?",
    "options": [
     "die Sache wird schon bezahlt",
     "die Sache wird günstiger angeboten",
     "die Sache wird zurückgelegt",
     "die Sache wird schon geliefert"
    ],
    "answer": 2,
    "w": "die Reservierung",
    "explain": "die Reservierung = die Sache wird zurückgelegt."
   },
   {
    "type": "choice",
    "audio": "die Standgebühr",
    "q": "🔊 Hör zu – was bedeutet das Wort?",
    "options": [
     "so viel kostet dein Tisch",
     "so viel verdienst du am Tag",
     "so viel bleibt nach dem Verkauf",
     "so viel kostet dein Platz"
    ],
    "answer": 3,
    "w": "die Standgebühr",
    "explain": "die Standgebühr = so viel kostet dein Platz."
   }
  ]
 },
 {
  "id": "werkstatt",
  "title": "In der Werkstatt",
  "level": "B1",
  "emoji": "🎧",
  "words": [
   {
    "de": "die Inspektion",
    "info": "regelmäßige Prüfung am ganzen Auto",
    "emoji": "🔩"
   },
   {
    "de": "der Kostenvoranschlag",
    "info": "was die Arbeit ungefähr kostet",
    "emoji": "📝"
   },
   {
    "de": "der Stundensatz",
    "info": "was eine Stunde Arbeit kostet",
    "emoji": "⏱️"
   },
   {
    "de": "die Ersatzteile",
    "info": "neue Teile für das Auto",
    "emoji": "📦"
   },
   {
    "de": "die Bremsbeläge",
    "info": "sie bremsen das Rad ab",
    "emoji": "🛑"
   },
   {
    "de": "quietschen",
    "info": "ein hoher Ton beim Bremsen",
    "emoji": "🔊"
   },
   {
    "de": "der Reifenwechsel",
    "info": "Sommer raus, Winter drauf",
    "emoji": "🛞"
   },
   {
    "de": "das Profil",
    "info": "die Rillen an dem Reifen",
    "emoji": "〰️"
   },
   {
    "de": "der TÜV",
    "info": "alle zwei Jahre zur Prüfung",
    "emoji": "✅"
   },
   {
    "de": "die Plakette",
    "info": "der runde Aufkleber am Schild",
    "emoji": "🏷️"
   },
   {
    "de": "der Mangel",
    "info": "etwas ist nicht in Ordnung",
    "emoji": "⚠️"
   },
   {
    "de": "der Ersatzwagen",
    "info": "ein Auto für die Zwischenzeit",
    "emoji": "🚗"
   },
   {
    "de": "die Kontrollleuchte",
    "info": "das kleine Licht im Auto",
    "emoji": "💡"
   },
   {
    "de": "der Ölwechsel",
    "info": "frisches Öl in den Motor",
    "emoji": "🛢️"
   },
   {
    "de": "die Kulanz",
    "info": "die Firma zahlt freiwillig mit",
    "emoji": "🤝"
   },
   {
    "de": "abschleppen",
    "info": "ein kaputtes Auto wegziehen lassen",
    "emoji": "🚛"
   }
  ],
  "exercises": [
   {
    "type": "listen",
    "label": "📢 Durchsage im Autohaus",
    "audioUrl": "https://d8j0ntlcm91z4.cloudfront.net/user_38tIQPWpEsaUmk18tYN8mskaaAF/hf_20260826_063519_103e5a89-44de-40a6-8dc3-7b52b1c38117.mp3",
    "q": "Ab wann kann man ein Auto nach der Inspektion abholen?",
    "options": [
     "Erst ab sechzehn Uhr am Nachmittag",
     "Erst ab achtzehn Uhr am Abend",
     "Schon ab vierzehn Uhr am Mittag",
     "Erst am nächsten Morgen ab acht"
    ],
    "answer": 0,
    "transcript": "Guten Tag, eine Durchsage für unsere Kunden im Wartebereich. Weil eine Lieferung mit Ersatzteilen später kommt, dauert bei uns heute alles etwas länger. Fahrzeuge mit einem Termin für die Inspektion holen Sie bitte erst ab sechzehn Uhr ab. Wer einen Ersatzwagen bestellt hat, meldet sich bitte am Tresen zwei. Kaffee steht für Sie bereit. Wir danken für Ihr Verständnis.",
    "explain": "In der Durchsage heißt es, dass Autos mit Inspektionstermin erst ab sechzehn Uhr bereitstehen."
   },
   {
    "type": "listen",
    "label": "📞 Mailbox: Die Bremsen sind runter",
    "audioUrl": "https://d8j0ntlcm91z4.cloudfront.net/user_38tIQPWpEsaUmk18tYN8mskaaAF/hf_20260826_063519_c0ffee89-2b18-4713-b142-c1ce6a91153b.mp3",
    "q": "Was passiert, wenn Frau Krüger nicht zurückruft?",
    "options": [
     "Das Auto bleibt bis zum nächsten Tag stehen",
     "Die Werkstatt macht die Bremsen trotzdem neu",
     "Der Wagen wird zu ihr nach Hause gebracht",
     "Die Werkstatt schickt einen neuen Kostenvoranschlag"
    ],
    "answer": 0,
    "transcript": "Hallo Frau Krüger, Autohaus Lindner, Werkstatt. Ihr Wagen steht bei uns oben. Die Bremsbeläge hinten sind runter, die müssen raus. Im Kostenvoranschlag standen dreihundertzwanzig Euro, mit den Bremsen werden es etwa vierhundertneunzig. Ohne Ihre Zustimmung machen wir gar nichts. Rufen Sie bitte bis fünfzehn Uhr zurück, sonst steht der Wagen bis morgen bei uns.",
    "explain": "Zum Schluss sagt der Mechaniker, dass der Wagen ohne Rückruf bis fünfzehn Uhr bis morgen stehen bleibt."
   },
   {
    "type": "listen",
    "label": "🪟 Am Tresen: Der Wagen soll zum TÜV",
    "audioUrl": "https://d8j0ntlcm91z4.cloudfront.net/user_38tIQPWpEsaUmk18tYN8mskaaAF/hf_20260826_063519_7245dca2-3f5d-43b9-9739-72a32fb4e618.mp3",
    "q": "Was passiert, wenn ein Mangel gefunden wird?",
    "options": [
     "Es gibt keine Plakette und man kommt noch einmal",
     "Es gibt die Plakette und man repariert später",
     "Man zahlt die Prüfung erst nach der Reparatur",
     "Man bekommt sofort einen Ersatzwagen für die Zeit"
    ],
    "answer": 0,
    "transcript": "Guten Tag, ich bringe den Wagen zum TÜV. — Die Papiere bitte. Danke. Ist Ihnen etwas aufgefallen? — Vorne links quietscht es beim Bremsen. — Dann schauen wir uns die Beläge gleich mit an. Wenn ein Mangel drin ist, bekommen Sie keine Plakette und müssen noch einmal kommen. — Und was kostet die Prüfung? — Hundertfünfunddreißig Euro, die Rechnung bekommen Sie beim Abholen.",
    "explain": "Der Mitarbeiter sagt, dass es bei einem Mangel keine Plakette gibt und man ein zweites Mal kommen muss."
   },
   {
    "type": "listen",
    "label": "☕ Privat: Winterreifen und Kulanz",
    "audioUrl": "https://d8j0ntlcm91z4.cloudfront.net/user_38tIQPWpEsaUmk18tYN8mskaaAF/hf_20260826_063519_e06d1c76-1d26-415f-8b16-f90983fdb27e.mp3",
    "q": "Warum hat die Werkstatt bei ihr einen Reifen getauscht?",
    "options": [
     "Er war von innen kaputt, gezahlt hat sie nichts",
     "Das Profil war nach drei Jahren viel zu dünn",
     "Sie hatte beim Termin extra danach gefragt",
     "Der Reifen gehörte noch zur alten Garantie"
    ],
    "answer": 0,
    "transcript": "Hast du schon Winterreifen drauf? — Nächste Woche, ich habe einen Termin. — Lass mal das Profil messen, meine waren letztes Jahr fast runter. — Meine sind doch erst drei Jahre alt. — Trotzdem. Bei mir hat die Werkstatt einen Reifen aus Kulanz getauscht, weil er von innen kaputt war. Gefragt hatte ich nicht einmal.",
    "explain": "Sie erzählt, dass die Werkstatt den von innen kaputten Reifen aus Kulanz getauscht hat, ohne dass sie darum bat."
   },
   {
    "type": "choice",
    "audio": "die Inspektion",
    "q": "🔊 Hör zu – was bedeutet das Wort?",
    "options": [
     "regelmäßige Prüfung am ganzen Auto",
     "kurze Fahrt nach der Reparatur",
     "einmalige Prüfung vor dem Kauf",
     "genaue Rechnung nach der Arbeit"
    ],
    "answer": 0,
    "w": "die Inspektion",
    "explain": "die Inspektion = regelmäßige Prüfung am ganzen Auto."
   },
   {
    "type": "choice",
    "audio": "der Kostenvoranschlag",
    "q": "🔊 Hör zu – was bedeutet das Wort?",
    "options": [
     "was die Arbeit am Ende kostet",
     "was die Arbeit ungefähr kostet",
     "wie lange die Arbeit ungefähr dauert",
     "wer die Arbeit genau macht"
    ],
    "answer": 1,
    "w": "der Kostenvoranschlag",
    "explain": "der Kostenvoranschlag = was die Arbeit ungefähr kostet."
   },
   {
    "type": "choice",
    "audio": "der Stundensatz",
    "q": "🔊 Hör zu – was bedeutet das Wort?",
    "options": [
     "wie lange eine Reparatur dauert",
     "was ein neues Teil kostet",
     "was eine Stunde Arbeit kostet",
     "wann die Werkstatt geöffnet hat"
    ],
    "answer": 2,
    "w": "der Stundensatz",
    "explain": "der Stundensatz = was eine Stunde Arbeit kostet."
   },
   {
    "type": "choice",
    "audio": "die Ersatzteile",
    "q": "🔊 Hör zu – was bedeutet das Wort?",
    "options": [
     "altes Werkzeug aus der Werkstatt",
     "gebrauchte Reifen für den Winter",
     "fertige Papiere für den TÜV",
     "neue Teile für das Auto"
    ],
    "answer": 3,
    "w": "die Ersatzteile",
    "explain": "die Ersatzteile = neue Teile für das Auto."
   },
   {
    "type": "choice",
    "audio": "die Bremsbeläge",
    "q": "🔊 Hör zu – was bedeutet das Wort?",
    "options": [
     "sie bremsen das Rad ab",
     "sie drehen das Rad an",
     "sie halten den Reifen fest",
     "sie kühlen den Motor ab"
    ],
    "answer": 0,
    "w": "die Bremsbeläge",
    "explain": "die Bremsbeläge = sie bremsen das Rad ab."
   },
   {
    "type": "choice",
    "audio": "quietschen",
    "q": "🔊 Hör zu – was bedeutet das Wort?",
    "options": [
     "ein dumpfer Schlag beim Fahren",
     "ein hoher Ton beim Bremsen",
     "ein leises Brummen im Motor",
     "ein starkes Ziehen nach links"
    ],
    "answer": 1,
    "w": "quietschen",
    "explain": "quietschen = ein hoher Ton beim Bremsen."
   },
   {
    "type": "choice",
    "audio": "der Reifenwechsel",
    "q": "🔊 Hör zu – was bedeutet das Wort?",
    "options": [
     "altes Öl raus, neues rein",
     "Bremsen prüfen, dann tauschen",
     "Sommer raus, Winter drauf",
     "Batterie raus, neue rein"
    ],
    "answer": 2,
    "w": "der Reifenwechsel",
    "explain": "der Reifenwechsel = Sommer raus, Winter drauf."
   },
   {
    "type": "choice",
    "audio": "das Profil",
    "q": "🔊 Hör zu – was bedeutet das Wort?",
    "options": [
     "der Druck in dem Reifen",
     "die Farbe von dem Wagen",
     "das Alter von dem Reifen",
     "die Rillen an dem Reifen"
    ],
    "answer": 3,
    "w": "das Profil",
    "explain": "das Profil = die Rillen an dem Reifen."
   },
   {
    "type": "choice",
    "audio": "der TÜV",
    "q": "🔊 Hör zu – was bedeutet das Wort?",
    "options": [
     "alle zwei Jahre zur Prüfung",
     "jedes Jahr zum Ölwechsel",
     "alle zwei Jahre neue Reifen",
     "einmal im Monat zur Wäsche"
    ],
    "answer": 0,
    "w": "der TÜV",
    "explain": "der TÜV = alle zwei Jahre zur Prüfung."
   },
   {
    "type": "choice",
    "audio": "die Plakette",
    "q": "🔊 Hör zu – was bedeutet das Wort?",
    "options": [
     "der lange Zettel im Handschuhfach",
     "der runde Aufkleber am Schild",
     "der kleine Schlüssel für den Wagen",
     "der graue Aufkleber auf der Scheibe"
    ],
    "answer": 1,
    "w": "die Plakette",
    "explain": "die Plakette = der runde Aufkleber am Schild."
   },
   {
    "type": "choice",
    "audio": "der Mangel",
    "q": "🔊 Hör zu – was bedeutet das Wort?",
    "options": [
     "etwas fehlt in der Rechnung",
     "etwas ist zu teuer geworden",
     "etwas ist nicht in Ordnung",
     "etwas dauert länger als geplant"
    ],
    "answer": 2,
    "w": "der Mangel",
    "explain": "der Mangel = etwas ist nicht in Ordnung."
   },
   {
    "type": "choice",
    "audio": "der Ersatzwagen",
    "q": "🔊 Hör zu – was bedeutet das Wort?",
    "options": [
     "ein Auto für die lange Reise",
     "ein Auto aus zweiter Hand",
     "ein Auto ohne eigene Papiere",
     "ein Auto für die Zwischenzeit"
    ],
    "answer": 3,
    "w": "der Ersatzwagen",
    "explain": "der Ersatzwagen = ein Auto für die Zwischenzeit."
   },
   {
    "type": "choice",
    "audio": "die Kontrollleuchte",
    "q": "🔊 Hör zu – was bedeutet das Wort?",
    "options": [
     "das kleine Licht im Auto",
     "das helle Licht vorne am Auto",
     "der laute Ton beim Rückwärtsfahren",
     "der kleine Schalter neben dem Lenkrad"
    ],
    "answer": 0,
    "w": "die Kontrollleuchte",
    "explain": "die Kontrollleuchte = das kleine Licht im Auto."
   },
   {
    "type": "choice",
    "audio": "der Ölwechsel",
    "q": "🔊 Hör zu – was bedeutet das Wort?",
    "options": [
     "frisches Wasser in den Kühler",
     "frisches Öl in den Motor",
     "neue Luft in die Reifen",
     "neue Farbe auf die Haube"
    ],
    "answer": 1,
    "w": "der Ölwechsel",
    "explain": "der Ölwechsel = frisches Öl in den Motor."
   },
   {
    "type": "choice",
    "audio": "die Kulanz",
    "q": "🔊 Hör zu – was bedeutet das Wort?",
    "options": [
     "die Firma muss laut Vertrag zahlen",
     "der Kunde zahlt später in Raten",
     "die Firma zahlt freiwillig mit",
     "die Werkstatt gibt einen kleinen Nachlass"
    ],
    "answer": 2,
    "w": "die Kulanz",
    "explain": "die Kulanz = die Firma zahlt freiwillig mit."
   },
   {
    "type": "choice",
    "audio": "abschleppen",
    "q": "🔊 Hör zu – was bedeutet das Wort?",
    "options": [
     "ein kaputtes Auto selbst reparieren",
     "ein volles Auto vorsichtig einparken",
     "ein altes Auto günstig verkaufen",
     "ein kaputtes Auto wegziehen lassen"
    ],
    "answer": 3,
    "w": "abschleppen",
    "explain": "abschleppen = ein kaputtes Auto wegziehen lassen."
   }
  ]
 },
 {
  "id": "zahnarzt",
  "title": "Beim Zahnarzt",
  "level": "A2",
  "emoji": "🎧",
  "words": [
   {
    "de": "die Versichertenkarte",
    "info": "damit meldest du dich an",
    "emoji": "💳"
   },
   {
    "de": "der Behandlungsstuhl",
    "info": "dort liegst du beim Zahnarzt",
    "emoji": "🪑"
   },
   {
    "de": "die Kontrolle",
    "info": "der Zahnarzt schaut alles nach",
    "emoji": "🔍"
   },
   {
    "de": "die Zahnreinigung",
    "info": "die Zähne werden gründlich sauber",
    "emoji": "✨"
   },
   {
    "de": "der Zahnstein",
    "info": "harte Schicht auf dem Zahn",
    "emoji": "🪨"
   },
   {
    "de": "das Zahnfleisch",
    "info": "das Rote um die Zähne",
    "emoji": "🌸"
   },
   {
    "de": "die Betäubung",
    "info": "damit tut nichts mehr weh",
    "emoji": "😌"
   },
   {
    "de": "die Spritze",
    "info": "damit kommt das Mittel rein",
    "emoji": "💉"
   },
   {
    "de": "die Füllung",
    "info": "damit wird ein Loch zu",
    "emoji": "🦷"
   },
   {
    "de": "die Wurzelbehandlung",
    "info": "der Zahn wird innen sauber",
    "emoji": "🔧"
   },
   {
    "de": "die Schmerzen",
    "info": "es tut sehr weh",
    "emoji": "😣"
   },
   {
    "de": "die Krankenkasse",
    "info": "sie bezahlt einen Teil davon",
    "emoji": "🏥"
   },
   {
    "de": "der Eigenanteil",
    "info": "den Rest zahlst du selbst",
    "emoji": "💶"
   },
   {
    "de": "das Rezept",
    "info": "der Zettel für die Apotheke",
    "emoji": "💊"
   },
   {
    "de": "der Notdienst",
    "info": "Hilfe am Wochenende und nachts",
    "emoji": "🚨"
   },
   {
    "de": "spülen",
    "info": "Wasser in den Mund nehmen",
    "emoji": "💧"
   }
  ],
  "exercises": [
   {
    "type": "listen",
    "label": "📢 Ansage: Praxis geschlossen",
    "audioUrl": "https://d8j0ntlcm91z4.cloudfront.net/user_38tIQPWpEsaUmk18tYN8mskaaAF/hf_20260826_063737_fd78a962-9bf0-4ec4-9f5e-f3a5aad5a85a.mp3",
    "q": "Was soll man bei starken Schmerzen tun?",
    "options": [
     "Sofort beim zahnärztlichen Notdienst anrufen",
     "Am Montag in die Praxis gehen",
     "Auf der Internetseite einen Termin buchen",
     "Eine Nachricht für die Praxis hinterlassen"
    ],
    "answer": 0,
    "transcript": "Sie sind verbunden mit der Zahnarztpraxis Doktor Berger. Unsere Praxis ist heute geschlossen. Wir sind wieder am Montag ab acht Uhr für Sie da. Wenn Sie starke Schmerzen haben, rufen Sie bitte den zahnärztlichen Notdienst an. Die Nummer finden Sie auf unserer Internetseite. Einen Termin können Sie ab Montag telefonisch vereinbaren. Bleiben Sie gesund.",
    "explain": "In der Ansage heißt es, dass man bei starken Schmerzen den zahnärztlichen Notdienst anruft."
   },
   {
    "type": "listen",
    "label": "📞 Mailbox: Ihr Termin wird verschoben",
    "audioUrl": "https://d8j0ntlcm91z4.cloudfront.net/user_38tIQPWpEsaUmk18tYN8mskaaAF/hf_20260826_063737_d93a2e41-a407-4dcf-ae91-da21df9fd94e.mp3",
    "q": "Wann wäre der neue Termin?",
    "options": [
     "Am Donnerstag um halb zehn",
     "Am Dienstag um halb drei",
     "Am Donnerstag um halb neun",
     "Am Dienstag um vierzehn Uhr"
    ],
    "answer": 0,
    "transcript": "Guten Tag, Frau Demir, hier ist die Praxis Doktor Berger. Ihr Termin am Dienstag um vierzehn Uhr muss leider verschoben werden. Wir hätten am Donnerstag um neun Uhr dreißig Zeit. Passt Ihnen das? Die Zahnreinigung zahlt die Krankenkasse übrigens nicht, sie kostet neunundsechzig Euro. Bitte rufen Sie kurz zurück. Vielen Dank.",
    "explain": "Die Praxis schlägt Donnerstag um neun Uhr dreißig vor, und das ist halb zehn."
   },
   {
    "type": "listen",
    "label": "🪟 Am Empfang: Karte und Kontrolle",
    "audioUrl": "https://d8j0ntlcm91z4.cloudfront.net/user_38tIQPWpEsaUmk18tYN8mskaaAF/hf_20260826_063737_19483e2f-a468-4089-85a3-3682a4469bba.mp3",
    "q": "Wie lange muss der Mann noch warten?",
    "options": [
     "Ungefähr zehn Minuten im Wartezimmer",
     "Ungefähr zwanzig Minuten im Wartezimmer",
     "Bis elf Uhr dreißig im Wartezimmer",
     "Nur ein paar Minuten im Wartezimmer"
    ],
    "answer": 0,
    "transcript": "Guten Tag, ich habe einen Termin um elf Uhr, Yilmaz. — Guten Tag, Ihre Versichertenkarte bitte. — Hier, bitte schön. — Danke. Waren Sie dieses Jahr schon zur Kontrolle? — Nein, das letzte Mal war im Herbst. — Alles gut, dann tragen wir das heute ein. Nehmen Sie bitte im Wartezimmer Platz, es dauert noch etwa zehn Minuten.",
    "explain": "Am Ende sagt die Frau am Empfang, dass es noch etwa zehn Minuten dauert."
   },
   {
    "type": "listen",
    "label": "☕ Privat: Halb so schlimm",
    "audioUrl": "https://d8j0ntlcm91z4.cloudfront.net/user_38tIQPWpEsaUmk18tYN8mskaaAF/hf_20260826_063737_718029f0-4b2c-4095-8154-1d4b8dd053ce.mp3",
    "q": "Was musste er selbst bezahlen?",
    "options": [
     "Nur die weiße Farbe der Füllung",
     "Die ganze Füllung im hinteren Zahn",
     "Die Betäubung vor der Behandlung",
     "Die Kontrolle beim Zahnarzt heute"
    ],
    "answer": 0,
    "transcript": "Und, wie war es beim Zahnarzt? — Halb so schlimm. Ich hatte ein kleines Loch, das ist jetzt zu. — Hat es weh getan? — Nein, ich habe eine Betäubung bekommen. Danach war die Lippe drei Stunden lang dick. — Und die Füllung? — Die zahlt die Kasse. Nur für die weiße Farbe habe ich etwas dazugezahlt.",
    "explain": "Die Kasse zahlt die Füllung, nur für die weiße Farbe zahlt er selbst etwas dazu."
   },
   {
    "type": "choice",
    "audio": "die Versichertenkarte",
    "q": "🔊 Hör zu – was bedeutet das Wort?",
    "options": [
     "damit meldest du dich an",
     "damit bezahlst du die Rechnung",
     "damit bekommst du einen Termin",
     "damit holst du dein Rezept"
    ],
    "answer": 0,
    "w": "die Versichertenkarte",
    "explain": "die Versichertenkarte = damit meldest du dich an."
   },
   {
    "type": "choice",
    "audio": "der Behandlungsstuhl",
    "q": "🔊 Hör zu – was bedeutet das Wort?",
    "options": [
     "dort wartest du auf den Arzt",
     "dort liegst du beim Zahnarzt",
     "dort meldest du dich am Anfang",
     "dort putzt du dir die Zähne"
    ],
    "answer": 1,
    "w": "der Behandlungsstuhl",
    "explain": "der Behandlungsstuhl = dort liegst du beim Zahnarzt."
   },
   {
    "type": "choice",
    "audio": "die Kontrolle",
    "q": "🔊 Hör zu – was bedeutet das Wort?",
    "options": [
     "der Zahnarzt macht ein Loch zu",
     "der Zahnarzt zieht einen Zahn",
     "der Zahnarzt schaut alles nach",
     "der Zahnarzt putzt die Zähne"
    ],
    "answer": 2,
    "w": "die Kontrolle",
    "explain": "die Kontrolle = der Zahnarzt schaut alles nach."
   },
   {
    "type": "choice",
    "audio": "die Zahnreinigung",
    "q": "🔊 Hör zu – was bedeutet das Wort?",
    "options": [
     "die Zähne werden gerade gestellt",
     "ein Loch wird wieder zugemacht",
     "der Zahn wird innen gereinigt",
     "die Zähne werden gründlich sauber"
    ],
    "answer": 3,
    "w": "die Zahnreinigung",
    "explain": "die Zahnreinigung = die Zähne werden gründlich sauber."
   },
   {
    "type": "choice",
    "audio": "der Zahnstein",
    "q": "🔊 Hör zu – was bedeutet das Wort?",
    "options": [
     "harte Schicht auf dem Zahn",
     "kleines Loch in dem Zahn",
     "dünner Draht auf den Zähnen",
     "weiße Farbe für den Zahn"
    ],
    "answer": 0,
    "w": "der Zahnstein",
    "explain": "der Zahnstein = harte Schicht auf dem Zahn."
   },
   {
    "type": "choice",
    "audio": "das Zahnfleisch",
    "q": "🔊 Hör zu – was bedeutet das Wort?",
    "options": [
     "das Weiße an den Zähnen",
     "das Rote um die Zähne",
     "das Harte in dem Zahn",
     "das Kleine hinten im Mund"
    ],
    "answer": 1,
    "w": "das Zahnfleisch",
    "explain": "das Zahnfleisch = das Rote um die Zähne."
   },
   {
    "type": "choice",
    "audio": "die Betäubung",
    "q": "🔊 Hör zu – was bedeutet das Wort?",
    "options": [
     "damit wird der Zahn sauber",
     "damit hält die Füllung besser",
     "damit tut nichts mehr weh",
     "damit sieht man den Zahn besser"
    ],
    "answer": 2,
    "w": "die Betäubung",
    "explain": "die Betäubung = damit tut nichts mehr weh."
   },
   {
    "type": "choice",
    "audio": "die Spritze",
    "q": "🔊 Hör zu – was bedeutet das Wort?",
    "options": [
     "damit wird der Mund gespült",
     "damit wird das Loch gefüllt",
     "damit wird der Zahn gezogen",
     "damit kommt das Mittel rein"
    ],
    "answer": 3,
    "w": "die Spritze",
    "explain": "die Spritze = damit kommt das Mittel rein."
   },
   {
    "type": "choice",
    "audio": "die Füllung",
    "q": "🔊 Hör zu – was bedeutet das Wort?",
    "options": [
     "damit wird ein Loch zu",
     "damit wird ein Zahn weiß",
     "damit wird der Mund kalt",
     "damit wird ein Zahn locker"
    ],
    "answer": 0,
    "w": "die Füllung",
    "explain": "die Füllung = damit wird ein Loch zu."
   },
   {
    "type": "choice",
    "audio": "die Wurzelbehandlung",
    "q": "🔊 Hör zu – was bedeutet das Wort?",
    "options": [
     "der Zahn wird außen sauber",
     "der Zahn wird innen sauber",
     "der Zahn wird ganz gezogen",
     "der Zahn bekommt eine Farbe"
    ],
    "answer": 1,
    "w": "die Wurzelbehandlung",
    "explain": "die Wurzelbehandlung = der Zahn wird innen sauber."
   },
   {
    "type": "choice",
    "audio": "die Schmerzen",
    "q": "🔊 Hör zu – was bedeutet das Wort?",
    "options": [
     "es blutet ein wenig",
     "es fühlt sich kalt an",
     "es tut sehr weh",
     "es riecht nicht gut"
    ],
    "answer": 2,
    "w": "die Schmerzen",
    "explain": "die Schmerzen = es tut sehr weh."
   },
   {
    "type": "choice",
    "audio": "die Krankenkasse",
    "q": "🔊 Hör zu – was bedeutet das Wort?",
    "options": [
     "sie schickt dir einen Termin",
     "sie sucht dir einen Zahnarzt",
     "sie bringt dir das Rezept",
     "sie bezahlt einen Teil davon"
    ],
    "answer": 3,
    "w": "die Krankenkasse",
    "explain": "die Krankenkasse = sie bezahlt einen Teil davon."
   },
   {
    "type": "choice",
    "audio": "der Eigenanteil",
    "q": "🔊 Hör zu – was bedeutet das Wort?",
    "options": [
     "den Rest zahlst du selbst",
     "den Rest zahlt die Kasse",
     "den ganzen Preis zahlt die Kasse",
     "das ganze Geld bekommst du zurück"
    ],
    "answer": 0,
    "w": "der Eigenanteil",
    "explain": "der Eigenanteil = den Rest zahlst du selbst."
   },
   {
    "type": "choice",
    "audio": "das Rezept",
    "q": "🔊 Hör zu – was bedeutet das Wort?",
    "options": [
     "der Zettel für die Krankenkasse",
     "der Zettel für die Apotheke",
     "der Zettel für den nächsten Termin",
     "die Rechnung für die Behandlung"
    ],
    "answer": 1,
    "w": "das Rezept",
    "explain": "das Rezept = der Zettel für die Apotheke."
   },
   {
    "type": "choice",
    "audio": "der Notdienst",
    "q": "🔊 Hör zu – was bedeutet das Wort?",
    "options": [
     "Hilfe nur am frühen Vormittag",
     "ein Termin in der nächsten Woche",
     "Hilfe am Wochenende und nachts",
     "ein Platz im vollen Wartezimmer"
    ],
    "answer": 2,
    "w": "der Notdienst",
    "explain": "der Notdienst = Hilfe am Wochenende und nachts."
   },
   {
    "type": "choice",
    "audio": "spülen",
    "q": "🔊 Hör zu – was bedeutet das Wort?",
    "options": [
     "den Mund weit offen halten",
     "die Zähne fest zusammen beißen",
     "tief durch die Nase atmen",
     "Wasser in den Mund nehmen"
    ],
    "answer": 3,
    "w": "spülen",
    "explain": "spülen = Wasser in den Mund nehmen."
   }
  ]
 }
];

  NEU.forEach(function(t){
    var pos = -1;
    for(var i=0;i<ho.themes.length;i++){ if(ho.themes[i].id===t.id){ pos=i; break; } }
    if(pos>=0) ho.themes[pos] = t; else ho.themes.push(t);
  });
})();
