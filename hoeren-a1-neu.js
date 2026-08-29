/* ============================================================
   hoeren-a1-neu.js — Hoeren auf A1

   Wird NACH uebungen.js geladen und haengt seine Themen an den
   Bereich "Hoeren" an. Vorher stand auf A1 nichts: der Anfaenger
   kam in den Hoerbereich und fand nur B1-Themen.

   Je Thema: 16 Woerter, 4 echte Hoertexte mit Ton und Transkript,
   16 Wortfragen. Die Stimme ist Julias eigene.
   Gebaut von bau/mach-hoeren-a1.js — nicht von Hand aendern.
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
  "id": "a1-begruessen",
  "title": "Begrüßung & Vorstellen",
  "level": "A1",
  "emoji": "🎧",
  "words": [
   {
    "de": "guten Morgen",
    "info": "der Gruß am frühen Tag",
    "emoji": "🌅"
   },
   {
    "de": "guten Abend",
    "info": "der Gruß am späten Tag",
    "emoji": "🌆"
   },
   {
    "de": "tschüss",
    "info": "das kurze Wort beim Weggehen",
    "emoji": "👋"
   },
   {
    "de": "auf Wiedersehen",
    "info": "der höfliche Gruß beim Gehen",
    "emoji": "🚪"
   },
   {
    "de": "der Name",
    "info": "so heißt eine Person",
    "emoji": "🏷️"
   },
   {
    "de": "heißen",
    "info": "einen Namen tragen",
    "emoji": "💬"
   },
   {
    "de": "wohnen",
    "info": "an einem Ort zu Hause sein",
    "emoji": "🏠"
   },
   {
    "de": "kommen aus",
    "info": "aus einem Land oder einer Stadt sein",
    "emoji": "🌍"
   },
   {
    "de": "die Sprache",
    "info": "damit sprechen die Menschen miteinander",
    "emoji": "🗣️"
   },
   {
    "de": "buchstabieren",
    "info": "die Buchstaben einzeln sagen",
    "emoji": "🔤"
   },
   {
    "de": "sich freuen",
    "info": "ein schönes Gefühl haben",
    "emoji": "😊"
   },
   {
    "de": "der Beruf",
    "info": "die Arbeit, mit der man Geld verdient",
    "emoji": "🧰"
   },
   {
    "de": "verheiratet",
    "info": "fest mit einem Partner verbunden",
    "emoji": "💍"
   },
   {
    "de": "das Alter",
    "info": "wie alt eine Person ist",
    "emoji": "🎂"
   },
   {
    "de": "die Adresse",
    "info": "Straße und Ort, wo man wohnt",
    "emoji": "📮"
   },
   {
    "de": "willkommen",
    "info": "das Wort für einen neuen Gast",
    "emoji": "🤝"
   }
  ],
  "exercises": [
   {
    "type": "listen",
    "label": "👋 Im Treppenhaus",
    "audioUrl": "ton/hoeren-a1/a1-begruessen-1.mp3",
    "q": "Wo wohnt Amir?",
    "options": [
     "oben, in der Wohnung links",
     "unten im Erdgeschoss",
     "noch in einem Hotel",
     "im Haus nebenan"
    ],
    "answer": 0,
    "transcript": "Guten Morgen! Sind Sie neu hier? Ja, guten Morgen. Ich heiße Amir Yilmaz. Ich wohne jetzt oben, in der Wohnung links. Schön! Ich bin Frau Berger. Ich wohne unten im Erdgeschoss."
   },
   {
    "type": "listen",
    "label": "🎓 Der erste Tag im Kurs",
    "audioUrl": "ton/hoeren-a1/a1-begruessen-2.mp3",
    "q": "Wie lange wohnt Nadia schon in Köln?",
    "options": [
     "seit einer Woche",
     "seit zwei Jahren",
     "seit zwei Monaten",
     "seit gestern"
    ],
    "answer": 2,
    "transcript": "Herzlich willkommen im Deutschkurs! Mein Name ist Julia. Ich bin Ihre Lehrerin. Und Sie? Wie heißen Sie und woher kommen Sie? Ich heiße Nadia. Ich komme aus Marokko und wohne seit zwei Monaten in Köln."
   },
   {
    "type": "listen",
    "label": "🔤 Der Name am Telefon",
    "audioUrl": "ton/hoeren-a1/a1-begruessen-3.mp3",
    "q": "Warum buchstabiert die Frau ihren Namen?",
    "options": [
     "Sie spricht zu leise.",
     "Sie möchte einen neuen Namen.",
     "Der Name ist schwer zu schreiben.",
     "Sie hat ihren Namen vergessen."
    ],
    "answer": 2,
    "transcript": "Wie ist Ihr Name, bitte? Mein Name ist Schewczuk. Können Sie das bitte buchstabieren? Ja, gern. S, C, H, E, W, C, Z, U, K. Vielen Dank, jetzt habe ich es."
   },
   {
    "type": "listen",
    "label": "🧰 Beruf und Familie",
    "audioUrl": "ton/hoeren-a1/a1-begruessen-4.mp3",
    "q": "Wie alt ist die Tochter?",
    "options": [
     "vierzehn Jahre",
     "vier Jahre",
     "ein Jahr",
     "zwei Jahre"
    ],
    "answer": 1,
    "transcript": "Und was machen Sie beruflich? Ich bin Krankenpflegerin. Ich arbeite im Krankenhaus. Sind Sie verheiratet? Ja. Mein Mann heißt Tomasz. Wir haben eine Tochter. Sie ist vier Jahre alt."
   },
   {
    "type": "choice",
    "audio": "guten Morgen",
    "q": "🔊 Hör zu – was bedeutet das Wort?",
    "options": [
     "der Gruß am frühen Tag",
     "die Buchstaben einzeln sagen",
     "einen Namen tragen",
     "wie alt eine Person ist"
    ],
    "answer": 0,
    "w": "guten Morgen",
    "explain": "guten Morgen = der Gruß am frühen Tag."
   },
   {
    "type": "choice",
    "audio": "guten Abend",
    "q": "🔊 Hör zu – was bedeutet das Wort?",
    "options": [
     "der Gruß am späten Tag",
     "ein schönes Gefühl haben",
     "Straße und Ort, wo man wohnt",
     "an einem Ort zu Hause sein"
    ],
    "answer": 0,
    "w": "guten Abend",
    "explain": "guten Abend = der Gruß am späten Tag."
   },
   {
    "type": "choice",
    "audio": "tschüss",
    "q": "🔊 Hör zu – was bedeutet das Wort?",
    "options": [
     "die Arbeit, mit der man Geld verdient",
     "das kurze Wort beim Weggehen",
     "aus einem Land oder einer Stadt sein",
     "das Wort für einen neuen Gast"
    ],
    "answer": 1,
    "w": "tschüss",
    "explain": "tschüss = das kurze Wort beim Weggehen."
   },
   {
    "type": "choice",
    "audio": "auf Wiedersehen",
    "q": "🔊 Hör zu – was bedeutet das Wort?",
    "options": [
     "damit sprechen die Menschen miteinander",
     "fest mit einem Partner verbunden",
     "der höfliche Gruß beim Gehen",
     "der Gruß am frühen Tag"
    ],
    "answer": 2,
    "w": "auf Wiedersehen",
    "explain": "auf Wiedersehen = der höfliche Gruß beim Gehen."
   },
   {
    "type": "choice",
    "audio": "der Name",
    "q": "🔊 Hör zu – was bedeutet das Wort?",
    "options": [
     "so heißt eine Person",
     "der Gruß am späten Tag",
     "wie alt eine Person ist",
     "die Buchstaben einzeln sagen"
    ],
    "answer": 0,
    "w": "der Name",
    "explain": "der Name = so heißt eine Person."
   },
   {
    "type": "choice",
    "audio": "heißen",
    "q": "🔊 Hör zu – was bedeutet das Wort?",
    "options": [
     "Straße und Ort, wo man wohnt",
     "einen Namen tragen",
     "ein schönes Gefühl haben",
     "das kurze Wort beim Weggehen"
    ],
    "answer": 1,
    "w": "heißen",
    "explain": "heißen = einen Namen tragen."
   },
   {
    "type": "choice",
    "audio": "wohnen",
    "q": "🔊 Hör zu – was bedeutet das Wort?",
    "options": [
     "der höfliche Gruß beim Gehen",
     "die Arbeit, mit der man Geld verdient",
     "an einem Ort zu Hause sein",
     "das Wort für einen neuen Gast"
    ],
    "answer": 2,
    "w": "wohnen",
    "explain": "wohnen = an einem Ort zu Hause sein."
   },
   {
    "type": "choice",
    "audio": "kommen aus",
    "q": "🔊 Hör zu – was bedeutet das Wort?",
    "options": [
     "fest mit einem Partner verbunden",
     "so heißt eine Person",
     "der Gruß am frühen Tag",
     "aus einem Land oder einer Stadt sein"
    ],
    "answer": 3,
    "w": "kommen aus",
    "explain": "kommen aus = aus einem Land oder einer Stadt sein."
   },
   {
    "type": "choice",
    "audio": "die Sprache",
    "q": "🔊 Hör zu – was bedeutet das Wort?",
    "options": [
     "der Gruß am späten Tag",
     "wie alt eine Person ist",
     "einen Namen tragen",
     "damit sprechen die Menschen miteinander"
    ],
    "answer": 3,
    "w": "die Sprache",
    "explain": "die Sprache = damit sprechen die Menschen miteinander."
   },
   {
    "type": "choice",
    "audio": "buchstabieren",
    "q": "🔊 Hör zu – was bedeutet das Wort?",
    "options": [
     "die Buchstaben einzeln sagen",
     "an einem Ort zu Hause sein",
     "Straße und Ort, wo man wohnt",
     "das kurze Wort beim Weggehen"
    ],
    "answer": 0,
    "w": "buchstabieren",
    "explain": "buchstabieren = die Buchstaben einzeln sagen."
   },
   {
    "type": "choice",
    "audio": "sich freuen",
    "q": "🔊 Hör zu – was bedeutet das Wort?",
    "options": [
     "aus einem Land oder einer Stadt sein",
     "der höfliche Gruß beim Gehen",
     "das Wort für einen neuen Gast",
     "ein schönes Gefühl haben"
    ],
    "answer": 3,
    "w": "sich freuen",
    "explain": "sich freuen = ein schönes Gefühl haben."
   },
   {
    "type": "choice",
    "audio": "der Beruf",
    "q": "🔊 Hör zu – was bedeutet das Wort?",
    "options": [
     "die Arbeit, mit der man Geld verdient",
     "der Gruß am frühen Tag",
     "so heißt eine Person",
     "damit sprechen die Menschen miteinander"
    ],
    "answer": 0,
    "w": "der Beruf",
    "explain": "der Beruf = die Arbeit, mit der man Geld verdient."
   },
   {
    "type": "choice",
    "audio": "verheiratet",
    "q": "🔊 Hör zu – was bedeutet das Wort?",
    "options": [
     "die Buchstaben einzeln sagen",
     "einen Namen tragen",
     "fest mit einem Partner verbunden",
     "der Gruß am späten Tag"
    ],
    "answer": 2,
    "w": "verheiratet",
    "explain": "verheiratet = fest mit einem Partner verbunden."
   },
   {
    "type": "choice",
    "audio": "das Alter",
    "q": "🔊 Hör zu – was bedeutet das Wort?",
    "options": [
     "wie alt eine Person ist",
     "an einem Ort zu Hause sein",
     "das kurze Wort beim Weggehen",
     "ein schönes Gefühl haben"
    ],
    "answer": 0,
    "w": "das Alter",
    "explain": "das Alter = wie viele Jahre eine Person hat."
   },
   {
    "type": "choice",
    "audio": "die Adresse",
    "q": "🔊 Hör zu – was bedeutet das Wort?",
    "options": [
     "Straße und Ort, wo man wohnt",
     "aus einem Land oder einer Stadt sein",
     "der höfliche Gruß beim Gehen",
     "die Arbeit, mit der man Geld verdient"
    ],
    "answer": 0,
    "w": "die Adresse",
    "explain": "die Adresse = Straße und Ort, wo man wohnt."
   },
   {
    "type": "choice",
    "audio": "willkommen",
    "q": "🔊 Hör zu – was bedeutet das Wort?",
    "options": [
     "damit sprechen die Menschen miteinander",
     "fest mit einem Partner verbunden",
     "das Wort für einen neuen Gast",
     "so heißt eine Person"
    ],
    "answer": 2,
    "w": "willkommen",
    "explain": "willkommen = das Wort für einen neuen Gast."
   }
  ]
 },
 {
  "id": "a1-zahlen",
  "title": "Zahlen & Preise",
  "level": "A1",
  "emoji": "🎧",
  "words": [
   {
    "de": "der Preis",
    "info": "das Geld für eine Sache",
    "emoji": "🏷️"
   },
   {
    "de": "der Euro",
    "info": "das Geld in Deutschland",
    "emoji": "💶"
   },
   {
    "de": "der Cent",
    "info": "der kleine Teil vom Euro",
    "emoji": "🪙"
   },
   {
    "de": "kosten",
    "info": "so viel Geld muss man zahlen",
    "emoji": "💰"
   },
   {
    "de": "bezahlen",
    "info": "das Geld für etwas geben",
    "emoji": "🤲"
   },
   {
    "de": "billig",
    "info": "es kostet wenig Geld",
    "emoji": "🟢"
   },
   {
    "de": "teuer",
    "info": "es kostet viel Geld",
    "emoji": "🔴"
   },
   {
    "de": "das Kleingeld",
    "info": "die kleinen Münzen in der Tasche",
    "emoji": "👛"
   },
   {
    "de": "die Karte",
    "info": "damit zahlt man ohne Bargeld",
    "emoji": "💳"
   },
   {
    "de": "das Bargeld",
    "info": "die Scheine und Münzen",
    "emoji": "💵"
   },
   {
    "de": "der Kassenbon",
    "info": "der Zettel nach dem Kauf",
    "emoji": "🧾"
   },
   {
    "de": "das Angebot",
    "info": "die Ware ist gerade billiger",
    "emoji": "⭐"
   },
   {
    "de": "zusammen",
    "info": "alles in einer Rechnung",
    "emoji": "➕"
   },
   {
    "de": "das Wechselgeld",
    "info": "das Geld, das du zurückbekommst",
    "emoji": "🔁"
   },
   {
    "de": "die Hausnummer",
    "info": "die Zahl an deiner Haustür",
    "emoji": "🚪"
   },
   {
    "de": "die Postleitzahl",
    "info": "die fünf Ziffern vor dem Ortsnamen",
    "emoji": "📮"
   }
  ],
  "exercises": [
   {
    "type": "listen",
    "label": "🛒 An der Kasse",
    "audioUrl": "ton/hoeren-a1/a1-zahlen-1.mp3",
    "q": "Wie viel kostet alles zusammen?",
    "options": [
     "18,50 Euro",
     "8,15 Euro",
     "80,15 Euro",
     "18,15 Euro"
    ],
    "answer": 0,
    "transcript": "Das macht zusammen achtzehn Euro fünfzig. Zahlen Sie bar oder mit Karte? Mit Karte, bitte. Gern. Möchten Sie den Kassenbon? Ja, bitte."
   },
   {
    "type": "listen",
    "label": "⭐ Das Angebot im Supermarkt",
    "audioUrl": "ton/hoeren-a1/a1-zahlen-2.mp3",
    "q": "Wie lange gilt das Angebot?",
    "options": [
     "die ganze Woche",
     "bis morgen Mittag",
     "nur am Wochenende",
     "nur heute bis zwanzig Uhr"
    ],
    "answer": 3,
    "transcript": "Liebe Kundinnen und Kunden, heute im Angebot: ein Kilo Äpfel für nur einen Euro neunundneunzig. Das Angebot gilt nur heute bis zwanzig Uhr. Wir wünschen Ihnen einen schönen Einkauf."
   },
   {
    "type": "listen",
    "label": "🚪 Die Adresse aufschreiben",
    "audioUrl": "ton/hoeren-a1/a1-zahlen-3.mp3",
    "q": "Welche Hausnummer hat die Wohnung?",
    "options": [
     "neunundzwanzig",
     "neununddreißig",
     "zweiundneunzig",
     "neunzehn"
    ],
    "answer": 0,
    "transcript": "Wo wohnen Sie genau? In der Lindenstraße neunundzwanzig, dritter Stock. Lindenstraße neunundzwanzig. Und die Postleitzahl? Null eins null neun sieben."
   },
   {
    "type": "listen",
    "label": "💵 Zu wenig Kleingeld",
    "audioUrl": "ton/hoeren-a1/a1-zahlen-4.mp3",
    "q": "Wie viel Wechselgeld bekommt der Gast?",
    "options": [
     "6,70 Euro",
     "2,40 Euro",
     "7,60 Euro",
     "10,00 Euro"
    ],
    "answer": 2,
    "transcript": "Der Kaffee kostet zwei Euro vierzig. Oh, ich habe nur einen Zehn Euro Schein. Kein Problem. Sie bekommen sieben Euro sechzig zurück. Vielen Dank."
   },
   {
    "type": "choice",
    "audio": "der Preis",
    "q": "🔊 Hör zu – was bedeutet das Wort?",
    "options": [
     "das Geld, das du zurückbekommst",
     "die Scheine und Münzen",
     "das Geld für eine Sache",
     "es kostet wenig Geld"
    ],
    "answer": 2,
    "w": "der Preis",
    "explain": "der Preis = das Geld für eine Sache."
   },
   {
    "type": "choice",
    "audio": "der Euro",
    "q": "🔊 Hör zu – was bedeutet das Wort?",
    "options": [
     "es kostet viel Geld",
     "der Zettel nach dem Kauf",
     "das Geld in Deutschland",
     "die Zahl an deiner Haustür"
    ],
    "answer": 2,
    "w": "der Euro",
    "explain": "der Euro = das Geld in Deutschland."
   },
   {
    "type": "choice",
    "audio": "der Cent",
    "q": "🔊 Hör zu – was bedeutet das Wort?",
    "options": [
     "die Ware ist gerade billiger",
     "die fünf Ziffern vor dem Ortsnamen",
     "der kleine Teil vom Euro",
     "die kleinen Münzen in der Tasche"
    ],
    "answer": 2,
    "w": "der Cent",
    "explain": "der Cent = der kleine Teil vom Euro."
   },
   {
    "type": "choice",
    "audio": "kosten",
    "q": "🔊 Hör zu – was bedeutet das Wort?",
    "options": [
     "das Geld für eine Sache",
     "so viel Geld muss man zahlen",
     "alles in einer Rechnung",
     "damit zahlt man ohne Bargeld"
    ],
    "answer": 1,
    "w": "kosten",
    "explain": "kosten = so viel Geld muss man zahlen."
   },
   {
    "type": "choice",
    "audio": "bezahlen",
    "q": "🔊 Hör zu – was bedeutet das Wort?",
    "options": [
     "das Geld für etwas geben",
     "das Geld, das du zurückbekommst",
     "die Scheine und Münzen",
     "das Geld in Deutschland"
    ],
    "answer": 0,
    "w": "bezahlen",
    "explain": "bezahlen = das Geld für etwas geben."
   },
   {
    "type": "choice",
    "audio": "billig",
    "q": "🔊 Hör zu – was bedeutet das Wort?",
    "options": [
     "die Zahl an deiner Haustür",
     "es kostet wenig Geld",
     "der kleine Teil vom Euro",
     "der Zettel nach dem Kauf"
    ],
    "answer": 1,
    "w": "billig",
    "explain": "billig = es kostet wenig Geld."
   },
   {
    "type": "choice",
    "audio": "teuer",
    "q": "🔊 Hör zu – was bedeutet das Wort?",
    "options": [
     "so viel Geld muss man zahlen",
     "die fünf Ziffern vor dem Ortsnamen",
     "es kostet viel Geld",
     "die Ware ist gerade billiger"
    ],
    "answer": 2,
    "w": "teuer",
    "explain": "teuer = es kostet viel Geld."
   },
   {
    "type": "choice",
    "audio": "das Kleingeld",
    "q": "🔊 Hör zu – was bedeutet das Wort?",
    "options": [
     "alles in einer Rechnung",
     "die kleinen Münzen in der Tasche",
     "das Geld für etwas geben",
     "das Geld für eine Sache"
    ],
    "answer": 1,
    "w": "das Kleingeld",
    "explain": "das Kleingeld = die kleinen Münzen in der Tasche."
   },
   {
    "type": "choice",
    "audio": "die Karte",
    "q": "🔊 Hör zu – was bedeutet das Wort?",
    "options": [
     "das Geld, das du zurückbekommst",
     "es kostet wenig Geld",
     "das Geld in Deutschland",
     "damit zahlt man ohne Bargeld"
    ],
    "answer": 3,
    "w": "die Karte",
    "explain": "die Karte = damit zahlt man ohne Bargeld."
   },
   {
    "type": "choice",
    "audio": "das Bargeld",
    "q": "🔊 Hör zu – was bedeutet das Wort?",
    "options": [
     "der kleine Teil vom Euro",
     "es kostet viel Geld",
     "die Zahl an deiner Haustür",
     "die Scheine und Münzen"
    ],
    "answer": 3,
    "w": "das Bargeld",
    "explain": "das Bargeld = die Scheine und Münzen."
   },
   {
    "type": "choice",
    "audio": "der Kassenbon",
    "q": "🔊 Hör zu – was bedeutet das Wort?",
    "options": [
     "die fünf Ziffern vor dem Ortsnamen",
     "die kleinen Münzen in der Tasche",
     "der Zettel nach dem Kauf",
     "so viel Geld muss man zahlen"
    ],
    "answer": 2,
    "w": "der Kassenbon",
    "explain": "der Kassenbon = der Zettel nach dem Kauf."
   },
   {
    "type": "choice",
    "audio": "das Angebot",
    "q": "🔊 Hör zu – was bedeutet das Wort?",
    "options": [
     "das Geld für eine Sache",
     "damit zahlt man ohne Bargeld",
     "das Geld für etwas geben",
     "die Ware ist gerade billiger"
    ],
    "answer": 3,
    "w": "das Angebot",
    "explain": "das Angebot = die Ware ist gerade billiger."
   },
   {
    "type": "choice",
    "audio": "zusammen",
    "q": "🔊 Hör zu – was bedeutet das Wort?",
    "options": [
     "es kostet wenig Geld",
     "die Scheine und Münzen",
     "das Geld in Deutschland",
     "alles in einer Rechnung"
    ],
    "answer": 3,
    "w": "zusammen",
    "explain": "zusammen = alles in einer Rechnung."
   },
   {
    "type": "choice",
    "audio": "das Wechselgeld",
    "q": "🔊 Hör zu – was bedeutet das Wort?",
    "options": [
     "der kleine Teil vom Euro",
     "der Zettel nach dem Kauf",
     "das Geld, das du zurückbekommst",
     "es kostet viel Geld"
    ],
    "answer": 2,
    "w": "das Wechselgeld",
    "explain": "das Wechselgeld = das Geld, das du zurückbekommst."
   },
   {
    "type": "choice",
    "audio": "die Hausnummer",
    "q": "🔊 Hör zu – was bedeutet das Wort?",
    "options": [
     "die Ware ist gerade billiger",
     "die Zahl an deiner Haustür",
     "die kleinen Münzen in der Tasche",
     "so viel Geld muss man zahlen"
    ],
    "answer": 1,
    "w": "die Hausnummer",
    "explain": "die Hausnummer = die Zahl an deiner Haustür."
   },
   {
    "type": "choice",
    "audio": "die Postleitzahl",
    "q": "🔊 Hör zu – was bedeutet das Wort?",
    "options": [
     "das Geld für etwas geben",
     "damit zahlt man ohne Bargeld",
     "die fünf Ziffern vor dem Ortsnamen",
     "alles in einer Rechnung"
    ],
    "answer": 2,
    "w": "die Postleitzahl",
    "explain": "die Postleitzahl = die fünf Ziffern vor dem Ortsnamen."
   }
  ]
 },
 {
  "id": "a1-uhrzeit",
  "title": "Uhrzeit & Termin",
  "level": "A1",
  "emoji": "🎧",
  "words": [
   {
    "de": "die Uhrzeit",
    "info": "wie spät es gerade ist",
    "emoji": "⏰"
   },
   {
    "de": "halb",
    "info": "dreißig Minuten vor der vollen Stunde",
    "emoji": "🕧"
   },
   {
    "de": "Viertel nach",
    "info": "fünfzehn Minuten nach der Stunde",
    "emoji": "🕜"
   },
   {
    "de": "Viertel vor",
    "info": "fünfzehn Minuten vor der Stunde",
    "emoji": "🕥"
   },
   {
    "de": "der Termin",
    "info": "die feste Zeit für ein Treffen",
    "emoji": "📅"
   },
   {
    "de": "früh",
    "info": "am Anfang vom Tag",
    "emoji": "🌅"
   },
   {
    "de": "spät",
    "info": "am Ende vom Tag",
    "emoji": "🌙"
   },
   {
    "de": "pünktlich",
    "info": "genau zur richtigen Zeit",
    "emoji": "✅"
   },
   {
    "de": "die Verspätung",
    "info": "die Zeit, die man zu spät ist",
    "emoji": "🐌"
   },
   {
    "de": "der Vormittag",
    "info": "die Zeit vor dem Mittagessen",
    "emoji": "☀️"
   },
   {
    "de": "der Nachmittag",
    "info": "die Zeit nach dem Mittagessen",
    "emoji": "🌤️"
   },
   {
    "de": "die Woche",
    "info": "sieben Tage zusammen",
    "emoji": "🗓️"
   },
   {
    "de": "der Feierabend",
    "info": "das Ende der Arbeit am Tag",
    "emoji": "🏁"
   },
   {
    "de": "absagen",
    "info": "sagen, dass man nicht kommt",
    "emoji": "❌"
   },
   {
    "de": "verschieben",
    "info": "auf eine andere Zeit legen",
    "emoji": "↔️"
   },
   {
    "de": "geöffnet",
    "info": "man darf jetzt hineingehen",
    "emoji": "🔓"
   }
  ],
  "exercises": [
   {
    "type": "listen",
    "label": "📅 Termin beim Arzt",
    "audioUrl": "ton/hoeren-a1/a1-uhrzeit-1.mp3",
    "q": "Wann ist der Termin?",
    "options": [
     "Donnerstag um 10:45 Uhr",
     "Donnerstag um 15:10 Uhr",
     "Dienstag um 10:15 Uhr",
     "Donnerstag um 10:15 Uhr"
    ],
    "answer": 3,
    "transcript": "Praxis Doktor Weber, guten Tag. Guten Tag, ich brauche einen Termin. Geht es am Donnerstag um Viertel nach zehn? Ja, das passt gut. Donnerstag, zehn Uhr fünfzehn."
   },
   {
    "type": "listen",
    "label": "🚆 Ansage am Bahnhof",
    "audioUrl": "ton/hoeren-a1/a1-uhrzeit-2.mp3",
    "q": "Wann fährt der Zug wirklich?",
    "options": [
     "um 14:30 Uhr",
     "um 13:20 Uhr",
     "um 14:20 Uhr",
     "um 14:10 Uhr"
    ],
    "answer": 0,
    "transcript": "Achtung, eine Information für Gleis drei. Der Zug nach Hamburg um vierzehn Uhr zwanzig hat heute zehn Minuten Verspätung. Bitte haben Sie einen Moment Geduld."
   },
   {
    "type": "listen",
    "label": "❌ Eine Absage auf der Mailbox",
    "audioUrl": "ton/hoeren-a1/a1-uhrzeit-3.mp3",
    "q": "Was möchte Ella?",
    "options": [
     "den Termin auf Samstag verschieben",
     "heute Abend früher kommen",
     "den Termin für immer absagen",
     "Marie am Abend abholen"
    ],
    "answer": 0,
    "transcript": "Hallo Marie, hier ist Ella. Es tut mir sehr leid. Ich kann heute Abend nicht kommen, ich bin krank. Können wir auf Samstag verschieben? Melde dich bitte kurz."
   },
   {
    "type": "listen",
    "label": "🏁 Wann ist Feierabend?",
    "audioUrl": "ton/hoeren-a1/a1-uhrzeit-4.mp3",
    "q": "Wann hat die erste Person Feierabend?",
    "options": [
     "um 19:00 Uhr",
     "um 18:30 Uhr",
     "um 17:30 Uhr",
     "um 6:30 Uhr"
    ],
    "answer": 2,
    "transcript": "Wann hast du heute Feierabend? Um halb sechs. Und du? Ich muss bis sieben arbeiten. Aber morgen habe ich schon am Vormittag frei."
   },
   {
    "type": "choice",
    "audio": "die Uhrzeit",
    "q": "🔊 Hör zu – was bedeutet das Wort?",
    "options": [
     "die Zeit vor dem Mittagessen",
     "am Anfang vom Tag",
     "sagen, dass man nicht kommt",
     "wie spät es gerade ist"
    ],
    "answer": 3,
    "w": "die Uhrzeit",
    "explain": "die Uhrzeit = wie spät es gerade ist."
   },
   {
    "type": "choice",
    "audio": "halb",
    "q": "🔊 Hör zu – was bedeutet das Wort?",
    "options": [
     "dreißig Minuten vor der vollen Stunde",
     "am Ende vom Tag",
     "auf eine andere Zeit legen",
     "die Zeit nach dem Mittagessen"
    ],
    "answer": 0,
    "w": "halb",
    "explain": "halb = dreißig Minuten vor der vollen Stunde."
   },
   {
    "type": "choice",
    "audio": "Viertel nach",
    "q": "🔊 Hör zu – was bedeutet das Wort?",
    "options": [
     "sieben Tage zusammen",
     "genau zur richtigen Zeit",
     "man darf jetzt hineingehen",
     "fünfzehn Minuten nach der Stunde"
    ],
    "answer": 3,
    "w": "Viertel nach",
    "explain": "Viertel nach = fünfzehn Minuten nach der Stunde."
   },
   {
    "type": "choice",
    "audio": "Viertel vor",
    "q": "🔊 Hör zu – was bedeutet das Wort?",
    "options": [
     "fünfzehn Minuten vor der Stunde",
     "die Zeit, die man zu spät ist",
     "das Ende der Arbeit am Tag",
     "wie spät es gerade ist"
    ],
    "answer": 0,
    "w": "Viertel vor",
    "explain": "Viertel vor = fünfzehn Minuten vor der Stunde."
   },
   {
    "type": "choice",
    "audio": "der Termin",
    "q": "🔊 Hör zu – was bedeutet das Wort?",
    "options": [
     "sagen, dass man nicht kommt",
     "dreißig Minuten vor der vollen Stunde",
     "die feste Zeit für ein Treffen",
     "die Zeit vor dem Mittagessen"
    ],
    "answer": 2,
    "w": "der Termin",
    "explain": "der Termin = die feste Zeit für ein Treffen."
   },
   {
    "type": "choice",
    "audio": "früh",
    "q": "🔊 Hör zu – was bedeutet das Wort?",
    "options": [
     "am Anfang vom Tag",
     "auf eine andere Zeit legen",
     "die Zeit nach dem Mittagessen",
     "fünfzehn Minuten nach der Stunde"
    ],
    "answer": 0,
    "w": "früh",
    "explain": "früh = am Anfang vom Tag."
   },
   {
    "type": "choice",
    "audio": "spät",
    "q": "🔊 Hör zu – was bedeutet das Wort?",
    "options": [
     "am Ende vom Tag",
     "sieben Tage zusammen",
     "man darf jetzt hineingehen",
     "fünfzehn Minuten vor der Stunde"
    ],
    "answer": 0,
    "w": "spät",
    "explain": "spät = am Ende vom Tag."
   },
   {
    "type": "choice",
    "audio": "pünktlich",
    "q": "🔊 Hör zu – was bedeutet das Wort?",
    "options": [
     "genau zur richtigen Zeit",
     "die feste Zeit für ein Treffen",
     "wie spät es gerade ist",
     "das Ende der Arbeit am Tag"
    ],
    "answer": 0,
    "w": "pünktlich",
    "explain": "pünktlich = genau zur richtigen Zeit."
   },
   {
    "type": "choice",
    "audio": "die Verspätung",
    "q": "🔊 Hör zu – was bedeutet das Wort?",
    "options": [
     "sagen, dass man nicht kommt",
     "die Zeit, die man zu spät ist",
     "dreißig Minuten vor der vollen Stunde",
     "am Anfang vom Tag"
    ],
    "answer": 1,
    "w": "die Verspätung",
    "explain": "die Verspätung = die Zeit, die man zu spät ist."
   },
   {
    "type": "choice",
    "audio": "der Vormittag",
    "q": "🔊 Hör zu – was bedeutet das Wort?",
    "options": [
     "am Ende vom Tag",
     "auf eine andere Zeit legen",
     "die Zeit vor dem Mittagessen",
     "fünfzehn Minuten nach der Stunde"
    ],
    "answer": 2,
    "w": "der Vormittag",
    "explain": "der Vormittag = die Zeit vor dem Mittagessen."
   },
   {
    "type": "choice",
    "audio": "der Nachmittag",
    "q": "🔊 Hör zu – was bedeutet das Wort?",
    "options": [
     "fünfzehn Minuten vor der Stunde",
     "man darf jetzt hineingehen",
     "genau zur richtigen Zeit",
     "die Zeit nach dem Mittagessen"
    ],
    "answer": 3,
    "w": "der Nachmittag",
    "explain": "der Nachmittag = die Zeit nach dem Mittagessen."
   },
   {
    "type": "choice",
    "audio": "die Woche",
    "q": "🔊 Hör zu – was bedeutet das Wort?",
    "options": [
     "wie spät es gerade ist",
     "die Zeit, die man zu spät ist",
     "sieben Tage zusammen",
     "die feste Zeit für ein Treffen"
    ],
    "answer": 2,
    "w": "die Woche",
    "explain": "die Woche = sieben Tage zusammen."
   },
   {
    "type": "choice",
    "audio": "der Feierabend",
    "q": "🔊 Hör zu – was bedeutet das Wort?",
    "options": [
     "das Ende der Arbeit am Tag",
     "dreißig Minuten vor der vollen Stunde",
     "die Zeit vor dem Mittagessen",
     "am Anfang vom Tag"
    ],
    "answer": 0,
    "w": "der Feierabend",
    "explain": "der Feierabend = das Ende der Arbeit am Tag."
   },
   {
    "type": "choice",
    "audio": "absagen",
    "q": "🔊 Hör zu – was bedeutet das Wort?",
    "options": [
     "am Ende vom Tag",
     "fünfzehn Minuten nach der Stunde",
     "die Zeit nach dem Mittagessen",
     "sagen, dass man nicht kommt"
    ],
    "answer": 3,
    "w": "absagen",
    "explain": "absagen = sagen, dass man nicht kommt."
   },
   {
    "type": "choice",
    "audio": "verschieben",
    "q": "🔊 Hör zu – was bedeutet das Wort?",
    "options": [
     "auf eine andere Zeit legen",
     "sieben Tage zusammen",
     "fünfzehn Minuten vor der Stunde",
     "genau zur richtigen Zeit"
    ],
    "answer": 0,
    "w": "verschieben",
    "explain": "verschieben = auf eine andere Zeit legen."
   },
   {
    "type": "choice",
    "audio": "geöffnet",
    "q": "🔊 Hör zu – was bedeutet das Wort?",
    "options": [
     "das Ende der Arbeit am Tag",
     "die feste Zeit für ein Treffen",
     "man darf jetzt hineingehen",
     "die Zeit, die man zu spät ist"
    ],
    "answer": 2,
    "w": "geöffnet",
    "explain": "geöffnet = man darf jetzt hineingehen."
   }
  ]
 },
 {
  "id": "a1-baecker",
  "title": "Beim Bäcker",
  "level": "A1",
  "emoji": "🎧",
  "words": [
   {
    "de": "das Brot",
    "info": "das große Gebäck aus Mehl und Wasser",
    "emoji": "🍞"
   },
   {
    "de": "das Brötchen",
    "info": "das kleine runde Brot zum Frühstück",
    "emoji": "🥖"
   },
   {
    "de": "die Brezel",
    "info": "das salzige Gebäck mit Knoten",
    "emoji": "🥨"
   },
   {
    "de": "der Kuchen",
    "info": "das süße Gebäck für den Nachmittag",
    "emoji": "🍰"
   },
   {
    "de": "das Stück",
    "info": "ein einzelner Teil von etwas Großem",
    "emoji": "🍽️"
   },
   {
    "de": "frisch",
    "info": "gerade erst gemacht",
    "emoji": "🌿"
   },
   {
    "de": "die Tüte",
    "info": "der Beutel aus Papier zum Mitnehmen",
    "emoji": "🛍️"
   },
   {
    "de": "die Theke",
    "info": "der lange Tisch zwischen Kunde und Verkäufer",
    "emoji": "🏪"
   },
   {
    "de": "die Scheibe",
    "info": "ein dünnes Stück Brot",
    "emoji": "🔪"
   },
   {
    "de": "das Mehl",
    "info": "das feine Pulver aus Getreide",
    "emoji": "🌾"
   },
   {
    "de": "belegt",
    "info": "mit Käse oder Wurst darauf",
    "emoji": "🧀"
   },
   {
    "de": "süß",
    "info": "es schmeckt nach Zucker",
    "emoji": "🍬"
   },
   {
    "de": "bestellen",
    "info": "sagen, was man haben möchte",
    "emoji": "🗣️"
   },
   {
    "de": "die Bäckerei",
    "info": "der Laden für Brot und Kuchen",
    "emoji": "🏬"
   },
   {
    "de": "der Ofen",
    "info": "dort wird das Brot gebacken",
    "emoji": "🔥"
   },
   {
    "de": "zum Mitnehmen",
    "info": "nicht hier essen, sondern draußen",
    "emoji": "🥤"
   }
  ],
  "exercises": [
   {
    "type": "listen",
    "label": "🥖 An der Theke",
    "audioUrl": "ton/hoeren-a1/a1-baecker-1.mp3",
    "q": "Was möchte der Kunde mit dem Brot?",
    "options": [
     "Es soll morgen bereitliegen.",
     "Es soll ohne Tüte bleiben.",
     "Es soll in Scheiben geschnitten werden.",
     "Es soll noch warm sein."
    ],
    "answer": 2,
    "transcript": "Guten Morgen, was darf es sein? Drei Brötchen und ein Bauernbrot, bitte. Gern. Möchten Sie das Brot geschnitten? Ja, bitte in Scheiben."
   },
   {
    "type": "listen",
    "label": "🍰 Kuchen am Nachmittag",
    "audioUrl": "ton/hoeren-a1/a1-baecker-2.mp3",
    "q": "Wie viele Stücke Kuchen kauft die Frau?",
    "options": [
     "drei Stück",
     "zwei Stück",
     "ein Stück",
     "vier Stück"
    ],
    "answer": 0,
    "transcript": "Haben Sie noch Apfelkuchen? Ja, zwei Stück sind noch da. Dann nehme ich beide, bitte. Und ein Stück Käsekuchen für meine Tochter."
   },
   {
    "type": "listen",
    "label": "🔥 Frisch aus dem Ofen",
    "audioUrl": "ton/hoeren-a1/a1-baecker-3.mp3",
    "q": "Warum sind die Brezeln warm?",
    "options": [
     "Sie sind von gestern.",
     "Sie liegen schon in der Tüte.",
     "Sie liegen in der Sonne.",
     "Sie kommen gerade aus dem Ofen."
    ],
    "answer": 3,
    "transcript": "Sind die Brezeln frisch? Ja, die sind ganz warm. Sie kommen gerade aus dem Ofen. Wunderbar. Dann bitte vier Stück in eine Tüte."
   },
   {
    "type": "listen",
    "label": "🧀 Ein belegtes Brötchen",
    "audioUrl": "ton/hoeren-a1/a1-baecker-4.mp3",
    "q": "Was ist auf dem Brötchen?",
    "options": [
     "Schinken",
     "gar nichts",
     "Butter und Salz",
     "Käse"
    ],
    "answer": 3,
    "transcript": "Ich hätte gern ein belegtes Brötchen. Mit Käse oder mit Schinken? Mit Käse, bitte. Und einen Kaffee zum Mitnehmen. Das macht vier Euro achtzig."
   },
   {
    "type": "choice",
    "audio": "das Brot",
    "q": "🔊 Hör zu – was bedeutet das Wort?",
    "options": [
     "gerade erst gemacht",
     "das große Gebäck aus Mehl und Wasser",
     "der Laden für Brot und Kuchen",
     "das feine Pulver aus Getreide"
    ],
    "answer": 1,
    "w": "das Brot",
    "explain": "das Brot = das große Gebäck aus Mehl und Wasser."
   },
   {
    "type": "choice",
    "audio": "das Brötchen",
    "q": "🔊 Hör zu – was bedeutet das Wort?",
    "options": [
     "der Beutel aus Papier zum Mitnehmen",
     "dort wird das Brot gebacken",
     "mit Käse oder Wurst darauf",
     "das kleine runde Brot zum Frühstück"
    ],
    "answer": 3,
    "w": "das Brötchen",
    "explain": "das Brötchen = das kleine runde Brot zum Frühstück."
   },
   {
    "type": "choice",
    "audio": "die Brezel",
    "q": "🔊 Hör zu – was bedeutet das Wort?",
    "options": [
     "das salzige Gebäck mit Knoten",
     "der lange Tisch zwischen Kunde und Verkäufer",
     "nicht hier essen, sondern draußen",
     "es schmeckt nach Zucker"
    ],
    "answer": 0,
    "w": "die Brezel",
    "explain": "die Brezel = das salzige Gebäck mit Knoten."
   },
   {
    "type": "choice",
    "audio": "der Kuchen",
    "q": "🔊 Hör zu – was bedeutet das Wort?",
    "options": [
     "das große Gebäck aus Mehl und Wasser",
     "sagen, was man haben möchte",
     "das süße Gebäck für den Nachmittag",
     "ein dünnes Stück Brot"
    ],
    "answer": 2,
    "w": "der Kuchen",
    "explain": "der Kuchen = das süße Gebäck für den Nachmittag."
   },
   {
    "type": "choice",
    "audio": "das Stück",
    "q": "🔊 Hör zu – was bedeutet das Wort?",
    "options": [
     "das feine Pulver aus Getreide",
     "der Laden für Brot und Kuchen",
     "ein einzelner Teil von etwas Großem",
     "das kleine runde Brot zum Frühstück"
    ],
    "answer": 2,
    "w": "das Stück",
    "explain": "das Stück = ein einzelner Teil von etwas Großem."
   },
   {
    "type": "choice",
    "audio": "frisch",
    "q": "🔊 Hör zu – was bedeutet das Wort?",
    "options": [
     "dort wird das Brot gebacken",
     "das salzige Gebäck mit Knoten",
     "gerade erst gemacht",
     "mit Käse oder Wurst darauf"
    ],
    "answer": 2,
    "w": "frisch",
    "explain": "frisch = gerade erst gemacht."
   },
   {
    "type": "choice",
    "audio": "die Tüte",
    "q": "🔊 Hör zu – was bedeutet das Wort?",
    "options": [
     "das süße Gebäck für den Nachmittag",
     "der Beutel aus Papier zum Mitnehmen",
     "nicht hier essen, sondern draußen",
     "es schmeckt nach Zucker"
    ],
    "answer": 1,
    "w": "die Tüte",
    "explain": "die Tüte = der Beutel aus Papier zum Mitnehmen."
   },
   {
    "type": "choice",
    "audio": "die Theke",
    "q": "🔊 Hör zu – was bedeutet das Wort?",
    "options": [
     "sagen, was man haben möchte",
     "das große Gebäck aus Mehl und Wasser",
     "der lange Tisch zwischen Kunde und Verkäufer",
     "ein einzelner Teil von etwas Großem"
    ],
    "answer": 2,
    "w": "die Theke",
    "explain": "die Theke = der lange Tisch zwischen Kunde und Verkäufer."
   },
   {
    "type": "choice",
    "audio": "die Scheibe",
    "q": "🔊 Hör zu – was bedeutet das Wort?",
    "options": [
     "gerade erst gemacht",
     "ein dünnes Stück Brot",
     "das kleine runde Brot zum Frühstück",
     "der Laden für Brot und Kuchen"
    ],
    "answer": 1,
    "w": "die Scheibe",
    "explain": "die Scheibe = ein dünner Schnitt vom Brot."
   },
   {
    "type": "choice",
    "audio": "das Mehl",
    "q": "🔊 Hör zu – was bedeutet das Wort?",
    "options": [
     "der Beutel aus Papier zum Mitnehmen",
     "das salzige Gebäck mit Knoten",
     "das feine Pulver aus Getreide",
     "dort wird das Brot gebacken"
    ],
    "answer": 2,
    "w": "das Mehl",
    "explain": "das Mehl = das feine Pulver aus Getreide."
   },
   {
    "type": "choice",
    "audio": "belegt",
    "q": "🔊 Hör zu – was bedeutet das Wort?",
    "options": [
     "nicht hier essen, sondern draußen",
     "mit Käse oder Wurst darauf",
     "das süße Gebäck für den Nachmittag",
     "der lange Tisch zwischen Kunde und Verkäufer"
    ],
    "answer": 1,
    "w": "belegt",
    "explain": "belegt = mit Käse oder Wurst darauf."
   },
   {
    "type": "choice",
    "audio": "süß",
    "q": "🔊 Hör zu – was bedeutet das Wort?",
    "options": [
     "es schmeckt nach Zucker",
     "ein dünnes Stück Brot",
     "ein einzelner Teil von etwas Großem",
     "das große Gebäck aus Mehl und Wasser"
    ],
    "answer": 0,
    "w": "süß",
    "explain": "süß = es schmeckt nach Zucker."
   },
   {
    "type": "choice",
    "audio": "bestellen",
    "q": "🔊 Hör zu – was bedeutet das Wort?",
    "options": [
     "das kleine runde Brot zum Frühstück",
     "gerade erst gemacht",
     "das feine Pulver aus Getreide",
     "sagen, was man haben möchte"
    ],
    "answer": 3,
    "w": "bestellen",
    "explain": "bestellen = sagen, was man haben möchte."
   },
   {
    "type": "choice",
    "audio": "die Bäckerei",
    "q": "🔊 Hör zu – was bedeutet das Wort?",
    "options": [
     "das salzige Gebäck mit Knoten",
     "mit Käse oder Wurst darauf",
     "der Laden für Brot und Kuchen",
     "der Beutel aus Papier zum Mitnehmen"
    ],
    "answer": 2,
    "w": "die Bäckerei",
    "explain": "die Bäckerei = der Laden für Brot und Kuchen."
   },
   {
    "type": "choice",
    "audio": "der Ofen",
    "q": "🔊 Hör zu – was bedeutet das Wort?",
    "options": [
     "es schmeckt nach Zucker",
     "der lange Tisch zwischen Kunde und Verkäufer",
     "das süße Gebäck für den Nachmittag",
     "dort wird das Brot gebacken"
    ],
    "answer": 3,
    "w": "der Ofen",
    "explain": "der Ofen = dort wird das Brot gebacken."
   },
   {
    "type": "choice",
    "audio": "zum Mitnehmen",
    "q": "🔊 Hör zu – was bedeutet das Wort?",
    "options": [
     "ein einzelner Teil von etwas Großem",
     "sagen, was man haben möchte",
     "ein dünnes Stück Brot",
     "nicht hier essen, sondern draußen"
    ],
    "answer": 3,
    "w": "zum Mitnehmen",
    "explain": "zum Mitnehmen = nicht hier essen, sondern draußen."
   }
  ]
 },
 {
  "id": "a1-weg",
  "title": "Nach dem Weg fragen",
  "level": "A1",
  "emoji": "🎧",
  "words": [
   {
    "de": "die Straße",
    "info": "der Weg für Autos und Menschen",
    "emoji": "🛣️"
   },
   {
    "de": "links",
    "info": "die Seite der linken Hand",
    "emoji": "⬅️"
   },
   {
    "de": "rechts",
    "info": "die Seite der rechten Hand",
    "emoji": "➡️"
   },
   {
    "de": "geradeaus",
    "info": "immer nach vorn, ohne abzubiegen",
    "emoji": "⬆️"
   },
   {
    "de": "die Ampel",
    "info": "sie zeigt rot, gelb und grün",
    "emoji": "🚦"
   },
   {
    "de": "die Kreuzung",
    "info": "dort treffen sich zwei Straßen",
    "emoji": "✖️"
   },
   {
    "de": "abbiegen",
    "info": "in eine andere Straße wechseln",
    "emoji": "↩️"
   },
   {
    "de": "die Haltestelle",
    "info": "dort hält der Bus",
    "emoji": "🚏"
   },
   {
    "de": "die Ecke",
    "info": "die Stelle, an der die Straße abbiegt",
    "emoji": "📐"
   },
   {
    "de": "gegenüber",
    "info": "auf der anderen Seite der Straße",
    "emoji": "🔄"
   },
   {
    "de": "neben",
    "info": "direkt daneben, ohne Abstand",
    "emoji": "🧱"
   },
   {
    "de": "weit",
    "info": "es ist ein langer Weg",
    "emoji": "🚶"
   },
   {
    "de": "der Bahnhof",
    "info": "dort fahren die Züge ab",
    "emoji": "🚉"
   },
   {
    "de": "die Brücke",
    "info": "sie führt über Wasser oder Straßen",
    "emoji": "🌉"
   },
   {
    "de": "der Eingang",
    "info": "die Tür in ein Gebäude hinein",
    "emoji": "🚪"
   },
   {
    "de": "sich verlaufen",
    "info": "den Weg nicht mehr finden",
    "emoji": "❓"
   }
  ],
  "exercises": [
   {
    "type": "listen",
    "label": "🚏 Wo ist die Haltestelle?",
    "audioUrl": "ton/hoeren-a1/a1-weg-1.mp3",
    "q": "Was macht man an der Ampel?",
    "options": [
     "nach links abbiegen",
     "nach rechts abbiegen",
     "einfach geradeaus weitergehen",
     "wieder zurückgehen"
    ],
    "answer": 1,
    "transcript": "Entschuldigung, wo ist die nächste Haltestelle? Gehen Sie hier geradeaus bis zur Ampel. Dann rechts. Die Haltestelle ist direkt an der Ecke."
   },
   {
    "type": "listen",
    "label": "🚉 Der Weg zum Bahnhof",
    "audioUrl": "ton/hoeren-a1/a1-weg-2.mp3",
    "q": "Wie lange dauert der Weg zu Fuß?",
    "options": [
     "zwanzig Minuten",
     "eine halbe Stunde",
     "zwei Minuten",
     "zehn Minuten"
    ],
    "answer": 3,
    "transcript": "Ist es weit zum Bahnhof? Nein, zehn Minuten zu Fuß. Sie gehen über die Brücke und dann immer geradeaus. Der Bahnhof ist dann auf der linken Seite."
   },
   {
    "type": "listen",
    "label": "❓ Ich habe mich verlaufen",
    "audioUrl": "ton/hoeren-a1/a1-weg-3.mp3",
    "q": "Wo ist die Apotheke?",
    "options": [
     "neben der Bank, gegenüber vom Supermarkt",
     "hinter dem Bahnhof",
     "neben der Haltestelle",
     "im Supermarkt selbst"
    ],
    "answer": 0,
    "transcript": "Können Sie mir bitte helfen? Ich habe mich verlaufen. Ich suche die Apotheke. Kein Problem. Die Apotheke ist gegenüber vom Supermarkt, direkt neben der Bank."
   },
   {
    "type": "listen",
    "label": "🚗 Mit dem Auto zum Krankenhaus",
    "audioUrl": "ton/hoeren-a1/a1-weg-4.mp3",
    "q": "Wo ist der Eingang?",
    "options": [
     "direkt neben der Ampel",
     "hinter dem Parkplatz",
     "vor der Kreuzung",
     "auf der Brücke"
    ],
    "answer": 1,
    "transcript": "Wie komme ich zum Krankenhaus? Fahren Sie an der nächsten Kreuzung links. Dann die zweite Straße rechts. Der Eingang ist hinter dem Parkplatz."
   },
   {
    "type": "choice",
    "audio": "die Straße",
    "q": "🔊 Hör zu – was bedeutet das Wort?",
    "options": [
     "dort treffen sich zwei Straßen",
     "sie führt über Wasser oder Straßen",
     "der Weg für Autos und Menschen",
     "auf der anderen Seite der Straße"
    ],
    "answer": 2,
    "w": "die Straße",
    "explain": "die Straße = der Weg für Autos und Menschen."
   },
   {
    "type": "choice",
    "audio": "links",
    "q": "🔊 Hör zu – was bedeutet das Wort?",
    "options": [
     "die Tür in ein Gebäude hinein",
     "die Seite der linken Hand",
     "in eine andere Straße wechseln",
     "direkt daneben, ohne Abstand"
    ],
    "answer": 1,
    "w": "links",
    "explain": "links = die Seite der linken Hand."
   },
   {
    "type": "choice",
    "audio": "rechts",
    "q": "🔊 Hör zu – was bedeutet das Wort?",
    "options": [
     "den Weg nicht mehr finden",
     "dort hält der Bus",
     "es ist ein langer Weg",
     "die Seite der rechten Hand"
    ],
    "answer": 3,
    "w": "rechts",
    "explain": "rechts = die Seite der rechten Hand."
   },
   {
    "type": "choice",
    "audio": "geradeaus",
    "q": "🔊 Hör zu – was bedeutet das Wort?",
    "options": [
     "die Stelle, an der die Straße abbiegt",
     "der Weg für Autos und Menschen",
     "immer nach vorn, ohne abzubiegen",
     "dort fahren die Züge ab"
    ],
    "answer": 2,
    "w": "geradeaus",
    "explain": "geradeaus = immer nach vorn, ohne abzubiegen."
   },
   {
    "type": "choice",
    "audio": "die Ampel",
    "q": "🔊 Hör zu – was bedeutet das Wort?",
    "options": [
     "sie zeigt rot, gelb und grün",
     "auf der anderen Seite der Straße",
     "die Seite der linken Hand",
     "sie führt über Wasser oder Straßen"
    ],
    "answer": 0,
    "w": "die Ampel",
    "explain": "die Ampel = sie zeigt rot, gelb und grün."
   },
   {
    "type": "choice",
    "audio": "die Kreuzung",
    "q": "🔊 Hör zu – was bedeutet das Wort?",
    "options": [
     "die Seite der rechten Hand",
     "direkt daneben, ohne Abstand",
     "die Tür in ein Gebäude hinein",
     "dort treffen sich zwei Straßen"
    ],
    "answer": 3,
    "w": "die Kreuzung",
    "explain": "die Kreuzung = dort treffen sich zwei Straßen."
   },
   {
    "type": "choice",
    "audio": "abbiegen",
    "q": "🔊 Hör zu – was bedeutet das Wort?",
    "options": [
     "in eine andere Straße wechseln",
     "es ist ein langer Weg",
     "den Weg nicht mehr finden",
     "immer nach vorn, ohne abzubiegen"
    ],
    "answer": 0,
    "w": "abbiegen",
    "explain": "abbiegen = in eine andere Straße wechseln."
   },
   {
    "type": "choice",
    "audio": "die Haltestelle",
    "q": "🔊 Hör zu – was bedeutet das Wort?",
    "options": [
     "dort hält der Bus",
     "der Weg für Autos und Menschen",
     "sie zeigt rot, gelb und grün",
     "dort fahren die Züge ab"
    ],
    "answer": 0,
    "w": "die Haltestelle",
    "explain": "die Haltestelle = dort hält der Bus."
   },
   {
    "type": "choice",
    "audio": "die Ecke",
    "q": "🔊 Hör zu – was bedeutet das Wort?",
    "options": [
     "die Stelle, an der die Straße abbiegt",
     "sie führt über Wasser oder Straßen",
     "die Seite der linken Hand",
     "dort treffen sich zwei Straßen"
    ],
    "answer": 0,
    "w": "die Ecke",
    "explain": "die Ecke = dort endet eine Häuserreihe."
   },
   {
    "type": "choice",
    "audio": "gegenüber",
    "q": "🔊 Hör zu – was bedeutet das Wort?",
    "options": [
     "auf der anderen Seite der Straße",
     "die Tür in ein Gebäude hinein",
     "die Seite der rechten Hand",
     "in eine andere Straße wechseln"
    ],
    "answer": 0,
    "w": "gegenüber",
    "explain": "gegenüber = auf der anderen Seite der Straße."
   },
   {
    "type": "choice",
    "audio": "neben",
    "q": "🔊 Hör zu – was bedeutet das Wort?",
    "options": [
     "direkt daneben, ohne Abstand",
     "dort hält der Bus",
     "immer nach vorn, ohne abzubiegen",
     "den Weg nicht mehr finden"
    ],
    "answer": 0,
    "w": "neben",
    "explain": "neben = direkt daneben, ohne Abstand."
   },
   {
    "type": "choice",
    "audio": "weit",
    "q": "🔊 Hör zu – was bedeutet das Wort?",
    "options": [
     "sie zeigt rot, gelb und grün",
     "es ist ein langer Weg",
     "der Weg für Autos und Menschen",
     "die Stelle, an der die Straße abbiegt"
    ],
    "answer": 1,
    "w": "weit",
    "explain": "weit = es ist ein langer Weg."
   },
   {
    "type": "choice",
    "audio": "der Bahnhof",
    "q": "🔊 Hör zu – was bedeutet das Wort?",
    "options": [
     "auf der anderen Seite der Straße",
     "die Seite der linken Hand",
     "dort fahren die Züge ab",
     "dort treffen sich zwei Straßen"
    ],
    "answer": 2,
    "w": "der Bahnhof",
    "explain": "der Bahnhof = dort fahren die Züge ab."
   },
   {
    "type": "choice",
    "audio": "die Brücke",
    "q": "🔊 Hör zu – was bedeutet das Wort?",
    "options": [
     "direkt daneben, ohne Abstand",
     "die Seite der rechten Hand",
     "in eine andere Straße wechseln",
     "sie führt über Wasser oder Straßen"
    ],
    "answer": 3,
    "w": "die Brücke",
    "explain": "die Brücke = sie führt über Wasser oder Straßen."
   },
   {
    "type": "choice",
    "audio": "der Eingang",
    "q": "🔊 Hör zu – was bedeutet das Wort?",
    "options": [
     "es ist ein langer Weg",
     "immer nach vorn, ohne abzubiegen",
     "die Tür in ein Gebäude hinein",
     "dort hält der Bus"
    ],
    "answer": 2,
    "w": "der Eingang",
    "explain": "der Eingang = die Tür in ein Gebäude hinein."
   },
   {
    "type": "choice",
    "audio": "sich verlaufen",
    "q": "🔊 Hör zu – was bedeutet das Wort?",
    "options": [
     "den Weg nicht mehr finden",
     "sie zeigt rot, gelb und grün",
     "dort fahren die Züge ab",
     "die Stelle, an der die Straße abbiegt"
    ],
    "answer": 0,
    "w": "sich verlaufen",
    "explain": "sich verlaufen = den Weg nicht mehr finden."
   }
  ]
 },
 {
  "id": "a1-telefon",
  "title": "Am Telefon",
  "level": "A1",
  "emoji": "🎧",
  "words": [
   {
    "de": "anrufen",
    "info": "jemanden mit dem Telefon erreichen",
    "emoji": "📞"
   },
   {
    "de": "das Handy",
    "info": "das kleine Telefon für die Tasche",
    "emoji": "📱"
   },
   {
    "de": "die Telefonnummer",
    "info": "die Ziffern für einen Anruf",
    "emoji": "🔢"
   },
   {
    "de": "sich melden",
    "info": "den Anruf annehmen und den Namen sagen",
    "emoji": "🙋"
   },
   {
    "de": "zurückrufen",
    "info": "später selbst noch einmal anrufen",
    "emoji": "🔁"
   },
   {
    "de": "die Nachricht",
    "info": "der kurze Text oder Ton für jemanden",
    "emoji": "💬"
   },
   {
    "de": "warten",
    "info": "Zeit vergehen lassen, bis etwas kommt",
    "emoji": "⏳"
   },
   {
    "de": "verbinden",
    "info": "den Anruf an eine andere Person geben",
    "emoji": "🔗"
   },
   {
    "de": "besetzt",
    "info": "es telefoniert schon jemand anderes",
    "emoji": "🚫"
   },
   {
    "de": "laut",
    "info": "man hört es sehr gut",
    "emoji": "🔊"
   },
   {
    "de": "leise",
    "info": "man hört es kaum",
    "emoji": "🔉"
   },
   {
    "de": "wiederholen",
    "info": "noch einmal genau so sagen",
    "emoji": "🔂"
   },
   {
    "de": "langsam",
    "info": "mit viel Zeit, nicht schnell",
    "emoji": "🐢"
   },
   {
    "de": "die Verbindung",
    "info": "der Weg zwischen zwei Telefonen",
    "emoji": "📶"
   },
   {
    "de": "der Anrufbeantworter",
    "info": "das Gerät nimmt die Nachricht auf",
    "emoji": "📼"
   },
   {
    "de": "Bescheid sagen",
    "info": "jemandem eine wichtige Information geben",
    "emoji": "📢"
   }
  ],
  "exercises": [
   {
    "type": "listen",
    "label": "📞 Krankmeldung im Betrieb",
    "audioUrl": "ton/hoeren-a1/a1-telefon-1.mp3",
    "q": "Warum ruft Elena an?",
    "options": [
     "Sie ist krank und kommt nicht zur Arbeit.",
     "Sie kommt heute etwas später.",
     "Sie sucht einen neuen Arzt.",
     "Sie möchte Urlaub nehmen."
    ],
    "answer": 0,
    "transcript": "Guten Morgen, hier ist Elena Popa. Ich kann heute leider nicht kommen, ich bin krank. Ich gehe gleich zum Arzt und schicke die Krankmeldung noch heute."
   },
   {
    "type": "listen",
    "label": "🔗 Einen Moment, bitte",
    "audioUrl": "ton/hoeren-a1/a1-telefon-2.mp3",
    "q": "Warum klappt das Gespräch nicht?",
    "options": [
     "Das Handy ist leer.",
     "Der Anschluss ist besetzt.",
     "Die Nummer ist falsch.",
     "Herr Klein ist im Urlaub."
    ],
    "answer": 1,
    "transcript": "Firma Lindner, guten Tag. Guten Tag, ich möchte Herrn Klein sprechen. Einen Moment, ich verbinde Sie. Es tut mir leid, der Anschluss ist besetzt. Möchten Sie später noch einmal anrufen?"
   },
   {
    "type": "listen",
    "label": "📼 Auf dem Anrufbeantworter",
    "audioUrl": "ton/hoeren-a1/a1-telefon-3.mp3",
    "q": "Was soll man auf den Anrufbeantworter sprechen?",
    "options": [
     "am besten gar nichts",
     "den Namen und die Telefonnummer",
     "nur den Vornamen",
     "die Adresse und das Alter"
    ],
    "answer": 1,
    "transcript": "Hier ist die Praxis Doktor Weber. Wir haben heute bis zwölf Uhr geöffnet. Bitte hinterlassen Sie Ihren Namen und Ihre Telefonnummer. Wir rufen Sie dann zurück."
   },
   {
    "type": "listen",
    "label": "🐢 Bitte etwas langsamer",
    "audioUrl": "ton/hoeren-a1/a1-telefon-4.mp3",
    "q": "Was macht die Frau am Telefon?",
    "options": [
     "Sie legt sofort auf.",
     "Sie ruft am Abend an.",
     "Sie schreibt eine Nachricht.",
     "Sie spricht langsamer."
    ],
    "answer": 3,
    "transcript": "Können Sie das bitte wiederholen? Ich lerne noch Deutsch. Natürlich, ich spreche langsamer. Ihr Termin ist am Montag um neun Uhr. Danke, jetzt habe ich es verstanden."
   },
   {
    "type": "choice",
    "audio": "anrufen",
    "q": "🔊 Hör zu – was bedeutet das Wort?",
    "options": [
     "der Weg zwischen zwei Telefonen",
     "man hört es sehr gut",
     "jemanden mit dem Telefon erreichen",
     "der kurze Text oder Ton für jemanden"
    ],
    "answer": 2,
    "w": "anrufen",
    "explain": "anrufen = jemanden mit dem Telefon erreichen."
   },
   {
    "type": "choice",
    "audio": "das Handy",
    "q": "🔊 Hör zu – was bedeutet das Wort?",
    "options": [
     "man hört es kaum",
     "das Gerät nimmt die Nachricht auf",
     "Zeit vergehen lassen, bis etwas kommt",
     "das kleine Telefon für die Tasche"
    ],
    "answer": 3,
    "w": "das Handy",
    "explain": "das Handy = das kleine Telefon für die Tasche."
   },
   {
    "type": "choice",
    "audio": "die Telefonnummer",
    "q": "🔊 Hör zu – was bedeutet das Wort?",
    "options": [
     "die Ziffern für einen Anruf",
     "jemandem eine wichtige Information geben",
     "den Anruf an eine andere Person geben",
     "noch einmal genau so sagen"
    ],
    "answer": 0,
    "w": "die Telefonnummer",
    "explain": "die Telefonnummer = die Ziffern für einen Anruf."
   },
   {
    "type": "choice",
    "audio": "sich melden",
    "q": "🔊 Hör zu – was bedeutet das Wort?",
    "options": [
     "mit viel Zeit, nicht schnell",
     "jemanden mit dem Telefon erreichen",
     "es telefoniert schon jemand anderes",
     "den Anruf annehmen und den Namen sagen"
    ],
    "answer": 3,
    "w": "sich melden",
    "explain": "sich melden = den Anruf annehmen und den Namen sagen."
   },
   {
    "type": "choice",
    "audio": "zurückrufen",
    "q": "🔊 Hör zu – was bedeutet das Wort?",
    "options": [
     "man hört es sehr gut",
     "das kleine Telefon für die Tasche",
     "der Weg zwischen zwei Telefonen",
     "später selbst noch einmal anrufen"
    ],
    "answer": 3,
    "w": "zurückrufen",
    "explain": "zurückrufen = später selbst noch einmal anrufen."
   },
   {
    "type": "choice",
    "audio": "die Nachricht",
    "q": "🔊 Hör zu – was bedeutet das Wort?",
    "options": [
     "die Ziffern für einen Anruf",
     "der kurze Text oder Ton für jemanden",
     "man hört es kaum",
     "das Gerät nimmt die Nachricht auf"
    ],
    "answer": 1,
    "w": "die Nachricht",
    "explain": "die Nachricht = der kurze Text oder Ton für jemanden."
   },
   {
    "type": "choice",
    "audio": "warten",
    "q": "🔊 Hör zu – was bedeutet das Wort?",
    "options": [
     "den Anruf annehmen und den Namen sagen",
     "noch einmal genau so sagen",
     "jemandem eine wichtige Information geben",
     "Zeit vergehen lassen, bis etwas kommt"
    ],
    "answer": 3,
    "w": "warten",
    "explain": "warten = Zeit vergehen lassen, bis etwas kommt."
   },
   {
    "type": "choice",
    "audio": "verbinden",
    "q": "🔊 Hör zu – was bedeutet das Wort?",
    "options": [
     "mit viel Zeit, nicht schnell",
     "den Anruf an eine andere Person geben",
     "jemanden mit dem Telefon erreichen",
     "später selbst noch einmal anrufen"
    ],
    "answer": 1,
    "w": "verbinden",
    "explain": "verbinden = den Anruf an eine andere Person geben."
   },
   {
    "type": "choice",
    "audio": "besetzt",
    "q": "🔊 Hör zu – was bedeutet das Wort?",
    "options": [
     "der kurze Text oder Ton für jemanden",
     "das kleine Telefon für die Tasche",
     "es telefoniert schon jemand anderes",
     "der Weg zwischen zwei Telefonen"
    ],
    "answer": 2,
    "w": "besetzt",
    "explain": "besetzt = es telefoniert schon jemand anderes."
   },
   {
    "type": "choice",
    "audio": "laut",
    "q": "🔊 Hör zu – was bedeutet das Wort?",
    "options": [
     "Zeit vergehen lassen, bis etwas kommt",
     "man hört es sehr gut",
     "die Ziffern für einen Anruf",
     "das Gerät nimmt die Nachricht auf"
    ],
    "answer": 1,
    "w": "laut",
    "explain": "laut = man hört es sehr gut."
   },
   {
    "type": "choice",
    "audio": "leise",
    "q": "🔊 Hör zu – was bedeutet das Wort?",
    "options": [
     "den Anruf annehmen und den Namen sagen",
     "man hört es kaum",
     "jemandem eine wichtige Information geben",
     "den Anruf an eine andere Person geben"
    ],
    "answer": 1,
    "w": "leise",
    "explain": "leise = man hört es kaum."
   },
   {
    "type": "choice",
    "audio": "wiederholen",
    "q": "🔊 Hör zu – was bedeutet das Wort?",
    "options": [
     "noch einmal genau so sagen",
     "später selbst noch einmal anrufen",
     "es telefoniert schon jemand anderes",
     "jemanden mit dem Telefon erreichen"
    ],
    "answer": 0,
    "w": "wiederholen",
    "explain": "wiederholen = noch einmal genau so sagen."
   },
   {
    "type": "choice",
    "audio": "langsam",
    "q": "🔊 Hör zu – was bedeutet das Wort?",
    "options": [
     "man hört es sehr gut",
     "mit viel Zeit, nicht schnell",
     "der kurze Text oder Ton für jemanden",
     "das kleine Telefon für die Tasche"
    ],
    "answer": 1,
    "w": "langsam",
    "explain": "langsam = mit viel Zeit, nicht schnell."
   },
   {
    "type": "choice",
    "audio": "die Verbindung",
    "q": "🔊 Hör zu – was bedeutet das Wort?",
    "options": [
     "der Weg zwischen zwei Telefonen",
     "die Ziffern für einen Anruf",
     "Zeit vergehen lassen, bis etwas kommt",
     "man hört es kaum"
    ],
    "answer": 0,
    "w": "die Verbindung",
    "explain": "die Verbindung = der Weg zwischen zwei Telefonen."
   },
   {
    "type": "choice",
    "audio": "der Anrufbeantworter",
    "q": "🔊 Hör zu – was bedeutet das Wort?",
    "options": [
     "den Anruf an eine andere Person geben",
     "das Gerät nimmt die Nachricht auf",
     "noch einmal genau so sagen",
     "den Anruf annehmen und den Namen sagen"
    ],
    "answer": 1,
    "w": "der Anrufbeantworter",
    "explain": "der Anrufbeantworter = das Gerät nimmt die Nachricht auf."
   },
   {
    "type": "choice",
    "audio": "Bescheid sagen",
    "q": "🔊 Hör zu – was bedeutet das Wort?",
    "options": [
     "es telefoniert schon jemand anderes",
     "später selbst noch einmal anrufen",
     "mit viel Zeit, nicht schnell",
     "jemandem eine wichtige Information geben"
    ],
    "answer": 3,
    "w": "Bescheid sagen",
    "explain": "Bescheid sagen = jemandem eine wichtige Information geben."
   }
  ]
 }
];

  // A1 gehoert nach vorn: erst die neuen Themen, dann die alten.
  NEU.slice().reverse().forEach(function(t){
    var pos = -1;
    for(var i=0;i<ho.themes.length;i++){ if(ho.themes[i].id===t.id){ pos=i; break; } }
    if(pos>=0) ho.themes.splice(pos,1);
    ho.themes.unshift(t);
  });
})();
