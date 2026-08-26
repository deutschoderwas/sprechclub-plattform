/* ============================================================
   hoer-neu.js — neue Hörthemen für den Lernbereich

   Wird NACH uebungen.js geladen und hängt seine Themen an den
   Bereich "Hören" an. Die grosse Datei uebungen.js bleibt
   unangetastet; nimmt man diese Zeile aus konto.html heraus,
   ist alles wie vorher.

   Jedes Thema: 16 Wörter, 4 echte Hörtexte mit Audio und
   Transkript, 16 Wortbedeutungen.
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
