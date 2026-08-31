/* ============================================================
   wortschatz-a1-neu.js

   A1 hatte sechs Wortschatzthemen, A2 dreiundzwanzig. Wer mit
   null Deutsch anfängt, stand nach zwei Wochen vor einer Wand.
   Diese Datei füllt die Lücke — mit gemischten Aufgabenformen
   statt zwei Dritteln Anklicken.

   Erzeugt von bau/mach-a1.py aus bau/a1-wortschatz.json.
   Nicht von Hand ändern — sonst ist es beim nächsten Bauen weg.
   ============================================================ */
(function () {
  if (!window.UEBUNGEN || !window.UEBUNGEN.skills) return;
  var THEMEN = [
 {
  "id": "a1-koerper",
  "title": "Körper & Gesundheit",
  "level": "A1",
  "emoji": "🩺",
  "words": [
   {
    "de": "der Kopf",
    "info": "oben am Körper, dort sind Augen, Nase und Mund",
    "emoji": "🧠"
   },
   {
    "de": "das Auge",
    "info": "damit sieht man",
    "emoji": "👁️"
   },
   {
    "de": "die Nase",
    "info": "damit riecht man",
    "emoji": "👃"
   },
   {
    "de": "der Mund",
    "info": "damit isst und spricht man",
    "emoji": "👄"
   },
   {
    "de": "das Ohr",
    "info": "damit hört man",
    "emoji": "👂"
   },
   {
    "de": "die Hand",
    "info": "damit greift man, sie hat fünf Finger",
    "emoji": "✋"
   },
   {
    "de": "der Arm",
    "info": "zwischen Schulter und Hand",
    "emoji": "💪"
   },
   {
    "de": "das Bein",
    "info": "damit geht und steht man",
    "emoji": "🦵"
   },
   {
    "de": "der Fuß",
    "info": "unten am Bein, darin steckt der Schuh",
    "emoji": "🦶"
   },
   {
    "de": "der Bauch",
    "info": "vorne in der Mitte, dort kommt das Essen hin",
    "emoji": "🫃"
   },
   {
    "de": "der Rücken",
    "info": "die Seite hinten, gegenüber vom Bauch",
    "emoji": "🔙"
   },
   {
    "de": "der Arzt",
    "info": "er hilft, wenn man krank ist",
    "emoji": "👨‍⚕️"
   },
   {
    "de": "die Ärztin",
    "info": "sie hilft, wenn man krank ist",
    "emoji": "👩‍⚕️"
   },
   {
    "de": "die Apotheke",
    "info": "dort bekommt man Medikamente",
    "emoji": "💊"
   },
   {
    "de": "der Termin",
    "info": "die feste Zeit, zu der man kommen soll",
    "emoji": "📅"
   },
   {
    "de": "krank",
    "info": "nicht gesund, man fühlt sich schlecht",
    "emoji": "🤒"
   }
  ],
  "exercises": [
   {
    "type": "karte",
    "w": "der Kopf",
    "info": "oben am Körper, dort sind Augen, Nase und Mund",
    "emoji": "🧠"
   },
   {
    "type": "karte",
    "w": "das Auge",
    "info": "damit sieht man",
    "emoji": "👁️"
   },
   {
    "type": "karte",
    "w": "die Nase",
    "info": "damit riecht man",
    "emoji": "👃"
   },
   {
    "type": "karte",
    "w": "der Mund",
    "info": "damit isst und spricht man",
    "emoji": "👄"
   },
   {
    "type": "karte",
    "w": "das Ohr",
    "info": "damit hört man",
    "emoji": "👂"
   },
   {
    "type": "karte",
    "w": "die Hand",
    "info": "damit greift man, sie hat fünf Finger",
    "emoji": "✋"
   },
   {
    "type": "karte",
    "w": "der Arm",
    "info": "zwischen Schulter und Hand",
    "emoji": "💪"
   },
   {
    "type": "karte",
    "w": "das Bein",
    "info": "damit geht und steht man",
    "emoji": "🦵"
   },
   {
    "type": "karte",
    "w": "der Fuß",
    "info": "unten am Bein, darin steckt der Schuh",
    "emoji": "🦶"
   },
   {
    "type": "karte",
    "w": "der Bauch",
    "info": "vorne in der Mitte, dort kommt das Essen hin",
    "emoji": "🫃"
   },
   {
    "type": "karte",
    "w": "der Rücken",
    "info": "die Seite hinten, gegenüber vom Bauch",
    "emoji": "🔙"
   },
   {
    "type": "karte",
    "w": "der Arzt",
    "info": "er hilft, wenn man krank ist",
    "emoji": "👨‍⚕️"
   },
   {
    "type": "karte",
    "w": "die Ärztin",
    "info": "sie hilft, wenn man krank ist",
    "emoji": "👩‍⚕️"
   },
   {
    "type": "karte",
    "w": "die Apotheke",
    "info": "dort bekommt man Medikamente",
    "emoji": "💊"
   },
   {
    "type": "karte",
    "w": "der Termin",
    "info": "die feste Zeit, zu der man kommen soll",
    "emoji": "📅"
   },
   {
    "type": "karte",
    "w": "krank",
    "info": "nicht gesund, man fühlt sich schlecht",
    "emoji": "🤒"
   },
   {
    "type": "choice",
    "q": "Welches Wort passt: „oben am Körper, dort sind Augen, Nase und Mund“?",
    "options": [
     "der Kopf",
     "der Mund",
     "das Bein",
     "der Arzt"
    ],
    "answer": 0,
    "w": "der Kopf",
    "explain": "🧠 der Kopf — oben am Körper, dort sind Augen, Nase und Mund"
   },
   {
    "type": "choice",
    "q": "Welches Wort passt: „damit sieht man“?",
    "options": [
     "das Auge",
     "das Ohr",
     "der Fuß",
     "die Ärztin"
    ],
    "answer": 0,
    "w": "das Auge",
    "explain": "👁️ das Auge — damit sieht man"
   },
   {
    "type": "choice",
    "q": "Welches Wort passt: „damit riecht man“?",
    "options": [
     "die Nase",
     "die Hand",
     "der Bauch",
     "die Apotheke"
    ],
    "answer": 0,
    "w": "die Nase",
    "explain": "👃 die Nase — damit riecht man"
   },
   {
    "type": "choice",
    "q": "Welches Wort passt: „damit isst und spricht man“?",
    "options": [
     "der Mund",
     "der Arm",
     "der Rücken",
     "der Termin"
    ],
    "answer": 0,
    "w": "der Mund",
    "explain": "👄 der Mund — damit isst und spricht man"
   },
   {
    "type": "choice",
    "q": "Welches Wort passt: „damit hört man“?",
    "options": [
     "das Ohr",
     "das Bein",
     "der Arzt",
     "krank"
    ],
    "answer": 0,
    "w": "das Ohr",
    "explain": "👂 das Ohr — damit hört man"
   },
   {
    "type": "choice",
    "q": "Welches Wort passt: „damit greift man, sie hat fünf Finger“?",
    "options": [
     "die Hand",
     "der Fuß",
     "die Ärztin",
     "der Kopf"
    ],
    "answer": 0,
    "w": "die Hand",
    "explain": "✋ die Hand — damit greift man, sie hat fünf Finger"
   },
   {
    "type": "choice",
    "q": "Welches Wort passt: „zwischen Schulter und Hand“?",
    "options": [
     "der Arm",
     "der Bauch",
     "die Apotheke",
     "das Auge"
    ],
    "answer": 0,
    "w": "der Arm",
    "explain": "💪 der Arm — zwischen Schulter und Hand"
   },
   {
    "type": "choice",
    "q": "Welches Wort passt: „damit geht und steht man“?",
    "options": [
     "das Bein",
     "der Rücken",
     "der Termin",
     "die Nase"
    ],
    "answer": 0,
    "w": "das Bein",
    "explain": "🦵 das Bein — damit geht und steht man"
   },
   {
    "type": "choice",
    "q": "Welches Wort passt: „unten am Bein, darin steckt der Schuh“?",
    "options": [
     "der Fuß",
     "der Arzt",
     "krank",
     "der Mund"
    ],
    "answer": 0,
    "w": "der Fuß",
    "explain": "🦶 der Fuß — unten am Bein, darin steckt der Schuh"
   },
   {
    "type": "choice",
    "q": "Welches Wort passt: „vorne in der Mitte, dort kommt das Essen hin“?",
    "options": [
     "der Bauch",
     "die Ärztin",
     "der Kopf",
     "das Ohr"
    ],
    "answer": 0,
    "w": "der Bauch",
    "explain": "🫃 der Bauch — vorne in der Mitte, dort kommt das Essen hin"
   },
   {
    "type": "choice",
    "q": "Welches Wort passt: „die Seite hinten, gegenüber vom Bauch“?",
    "options": [
     "der Rücken",
     "die Apotheke",
     "das Auge",
     "die Hand"
    ],
    "answer": 0,
    "w": "der Rücken",
    "explain": "🔙 der Rücken — die Seite hinten, gegenüber vom Bauch"
   },
   {
    "type": "choice",
    "q": "Welches Wort passt: „er hilft, wenn man krank ist“?",
    "options": [
     "der Arzt",
     "der Termin",
     "die Nase",
     "der Arm"
    ],
    "answer": 0,
    "w": "der Arzt",
    "explain": "👨‍⚕️ der Arzt — er hilft, wenn man krank ist"
   },
   {
    "type": "choice",
    "q": "Welches Wort passt: „sie hilft, wenn man krank ist“?",
    "options": [
     "die Ärztin",
     "krank",
     "der Mund",
     "das Bein"
    ],
    "answer": 0,
    "w": "die Ärztin",
    "explain": "👩‍⚕️ die Ärztin — sie hilft, wenn man krank ist"
   },
   {
    "type": "choice",
    "q": "Welches Wort passt: „dort bekommt man Medikamente“?",
    "options": [
     "die Apotheke",
     "der Kopf",
     "das Ohr",
     "der Fuß"
    ],
    "answer": 0,
    "w": "die Apotheke",
    "explain": "💊 die Apotheke — dort bekommt man Medikamente"
   },
   {
    "type": "choice",
    "q": "Welches Wort passt: „die feste Zeit, zu der man kommen soll“?",
    "options": [
     "der Termin",
     "das Auge",
     "die Hand",
     "der Bauch"
    ],
    "answer": 0,
    "w": "der Termin",
    "explain": "📅 der Termin — die feste Zeit, zu der man kommen soll"
   },
   {
    "type": "choice",
    "q": "Welches Wort passt: „nicht gesund, man fühlt sich schlecht“?",
    "options": [
     "krank",
     "die Nase",
     "der Arm",
     "der Rücken"
    ],
    "answer": 0,
    "w": "krank",
    "explain": "🤒 krank — nicht gesund, man fühlt sich schlecht"
   },
   {
    "type": "gap",
    "text": "___ Kopf",
    "answer": "der",
    "hint": "der / die / das?",
    "w": "der Kopf",
    "explain": "Es heißt der Kopf — oben am Körper, dort sind Augen, Nase und Mund"
   },
   {
    "type": "gap",
    "text": "___ Auge",
    "answer": "das",
    "hint": "der / die / das?",
    "w": "das Auge",
    "explain": "Es heißt das Auge — damit sieht man"
   },
   {
    "type": "gap",
    "text": "___ Nase",
    "answer": "die",
    "hint": "der / die / das?",
    "w": "die Nase",
    "explain": "Es heißt die Nase — damit riecht man"
   },
   {
    "type": "gap",
    "text": "___ Mund",
    "answer": "der",
    "hint": "der / die / das?",
    "w": "der Mund",
    "explain": "Es heißt der Mund — damit isst und spricht man"
   },
   {
    "type": "gap",
    "text": "___ Ohr",
    "answer": "das",
    "hint": "der / die / das?",
    "w": "das Ohr",
    "explain": "Es heißt das Ohr — damit hört man"
   },
   {
    "type": "gap",
    "text": "___ Hand",
    "answer": "die",
    "hint": "der / die / das?",
    "w": "die Hand",
    "explain": "Es heißt die Hand — damit greift man, sie hat fünf Finger"
   },
   {
    "type": "gap",
    "text": "___ Arm",
    "answer": "der",
    "hint": "der / die / das?",
    "w": "der Arm",
    "explain": "Es heißt der Arm — zwischen Schulter und Hand"
   },
   {
    "type": "gap",
    "text": "___ Bein",
    "answer": "das",
    "hint": "der / die / das?",
    "w": "das Bein",
    "explain": "Es heißt das Bein — damit geht und steht man"
   },
   {
    "type": "gap",
    "text": "___ Fuß",
    "answer": "der",
    "hint": "der / die / das?",
    "w": "der Fuß",
    "explain": "Es heißt der Fuß — unten am Bein, darin steckt der Schuh"
   },
   {
    "type": "gap",
    "text": "___ Bauch",
    "answer": "der",
    "hint": "der / die / das?",
    "w": "der Bauch",
    "explain": "Es heißt der Bauch — vorne in der Mitte, dort kommt das Essen hin"
   },
   {
    "type": "gap",
    "text": "___ Rücken",
    "answer": "der",
    "hint": "der / die / das?",
    "w": "der Rücken",
    "explain": "Es heißt der Rücken — die Seite hinten, gegenüber vom Bauch"
   },
   {
    "type": "gap",
    "text": "___ Arzt",
    "answer": "der",
    "hint": "der / die / das?",
    "w": "der Arzt",
    "explain": "Es heißt der Arzt — er hilft, wenn man krank ist"
   },
   {
    "type": "gap",
    "text": "___ Ärztin",
    "answer": "die",
    "hint": "der / die / das?",
    "w": "die Ärztin",
    "explain": "Es heißt die Ärztin — sie hilft, wenn man krank ist"
   },
   {
    "type": "gap",
    "text": "___ Apotheke",
    "answer": "die",
    "hint": "der / die / das?",
    "w": "die Apotheke",
    "explain": "Es heißt die Apotheke — dort bekommt man Medikamente"
   },
   {
    "type": "gap",
    "text": "___ Termin",
    "answer": "der",
    "hint": "der / die / das?",
    "w": "der Termin",
    "explain": "Es heißt der Termin — die feste Zeit, zu der man kommen soll"
   },
   {
    "type": "tippen",
    "answer": "Kopf",
    "info": "oben am Körper, dort sind Augen, Nase und Mund",
    "emoji": "🧠",
    "w": "der Kopf",
    "explain": "🧠 der Kopf"
   },
   {
    "type": "tippen",
    "answer": "Auge",
    "info": "damit sieht man",
    "emoji": "👁️",
    "w": "das Auge",
    "explain": "👁️ das Auge"
   },
   {
    "type": "tippen",
    "answer": "Nase",
    "info": "damit riecht man",
    "emoji": "👃",
    "w": "die Nase",
    "explain": "👃 die Nase"
   },
   {
    "type": "tippen",
    "answer": "Mund",
    "info": "damit isst und spricht man",
    "emoji": "👄",
    "w": "der Mund",
    "explain": "👄 der Mund"
   },
   {
    "type": "tippen",
    "answer": "Ohr",
    "info": "damit hört man",
    "emoji": "👂",
    "w": "das Ohr",
    "explain": "👂 das Ohr"
   },
   {
    "type": "tippen",
    "answer": "Hand",
    "info": "damit greift man, sie hat fünf Finger",
    "emoji": "✋",
    "w": "die Hand",
    "explain": "✋ die Hand"
   },
   {
    "type": "tippen",
    "answer": "Arm",
    "info": "zwischen Schulter und Hand",
    "emoji": "💪",
    "w": "der Arm",
    "explain": "💪 der Arm"
   },
   {
    "type": "tippen",
    "answer": "Bein",
    "info": "damit geht und steht man",
    "emoji": "🦵",
    "w": "das Bein",
    "explain": "🦵 das Bein"
   },
   {
    "type": "tippen",
    "answer": "Fuß",
    "info": "unten am Bein, darin steckt der Schuh",
    "emoji": "🦶",
    "w": "der Fuß",
    "explain": "🦶 der Fuß"
   },
   {
    "type": "tippen",
    "answer": "Bauch",
    "info": "vorne in der Mitte, dort kommt das Essen hin",
    "emoji": "🫃",
    "w": "der Bauch",
    "explain": "🫃 der Bauch"
   },
   {
    "type": "tippen",
    "answer": "Rücken",
    "info": "die Seite hinten, gegenüber vom Bauch",
    "emoji": "🔙",
    "w": "der Rücken",
    "explain": "🔙 der Rücken"
   },
   {
    "type": "tippen",
    "answer": "Arzt",
    "info": "er hilft, wenn man krank ist",
    "emoji": "👨‍⚕️",
    "w": "der Arzt",
    "explain": "👨‍⚕️ der Arzt"
   },
   {
    "type": "tippen",
    "answer": "Ärztin",
    "info": "sie hilft, wenn man krank ist",
    "emoji": "👩‍⚕️",
    "w": "die Ärztin",
    "explain": "👩‍⚕️ die Ärztin"
   },
   {
    "type": "tippen",
    "answer": "Apotheke",
    "info": "dort bekommt man Medikamente",
    "emoji": "💊",
    "w": "die Apotheke",
    "explain": "💊 die Apotheke"
   },
   {
    "type": "tippen",
    "answer": "Termin",
    "info": "die feste Zeit, zu der man kommen soll",
    "emoji": "📅",
    "w": "der Termin",
    "explain": "📅 der Termin"
   },
   {
    "type": "tippen",
    "answer": "krank",
    "info": "nicht gesund, man fühlt sich schlecht",
    "emoji": "🤒",
    "w": "krank",
    "explain": "🤒 krank"
   },
   {
    "type": "order",
    "answer": "Mein Kopf tut weh",
    "hint": "Das Verb steht an zweiter Stelle.",
    "explain": "weh tun ist trennbar: Mein Kopf tut weh."
   },
   {
    "type": "order",
    "answer": "Ich gehe heute zum Arzt",
    "hint": "Erst wer, dann was, dann wohin.",
    "explain": "zum Arzt gehen — zu plus dem wird zum."
   },
   {
    "type": "order",
    "answer": "Ich habe morgen einen Termin",
    "hint": "Die Zeitangabe steht früh im Satz.",
    "explain": "einen Termin haben — der Termin steht im Akkusativ."
   },
   {
    "type": "order",
    "answer": "Meine Tochter ist seit gestern krank",
    "hint": "Das Verb sein steht an zweiter Stelle.",
    "explain": "krank sein beschreibt einen Zustand."
   },
   {
    "type": "order",
    "answer": "Die Apotheke ist bis achtzehn Uhr offen",
    "hint": "Erst das Subjekt, dann das Verb.",
    "explain": "offen sein — typische Angabe bei Öffnungszeiten."
   },
   {
    "type": "match",
    "intro": "Ordne Wort und Bedeutung zu:",
    "pairs": [
     {
      "l": "der Kopf",
      "r": "oben am Körper, dort sind Augen, Nase und Mund"
     },
     {
      "l": "das Auge",
      "r": "damit sieht man"
     },
     {
      "l": "die Nase",
      "r": "damit riecht man"
     },
     {
      "l": "der Mund",
      "r": "damit isst und spricht man"
     }
    ]
   },
   {
    "type": "match",
    "intro": "Ordne Wort und Bedeutung zu:",
    "pairs": [
     {
      "l": "das Ohr",
      "r": "damit hört man"
     },
     {
      "l": "die Hand",
      "r": "damit greift man, sie hat fünf Finger"
     },
     {
      "l": "der Arm",
      "r": "zwischen Schulter und Hand"
     },
     {
      "l": "das Bein",
      "r": "damit geht und steht man"
     }
    ]
   },
   {
    "type": "match",
    "intro": "Ordne Wort und Bedeutung zu:",
    "pairs": [
     {
      "l": "der Fuß",
      "r": "unten am Bein, darin steckt der Schuh"
     },
     {
      "l": "der Bauch",
      "r": "vorne in der Mitte, dort kommt das Essen hin"
     },
     {
      "l": "der Rücken",
      "r": "die Seite hinten, gegenüber vom Bauch"
     },
     {
      "l": "der Arzt",
      "r": "er hilft, wenn man krank ist"
     }
    ]
   },
   {
    "type": "match",
    "intro": "Ordne Wort und Bedeutung zu:",
    "pairs": [
     {
      "l": "die Ärztin",
      "r": "sie hilft, wenn man krank ist"
     },
     {
      "l": "die Apotheke",
      "r": "dort bekommt man Medikamente"
     },
     {
      "l": "der Termin",
      "r": "die feste Zeit, zu der man kommen soll"
     },
     {
      "l": "krank",
      "r": "nicht gesund, man fühlt sich schlecht"
     }
    ]
   },
   {
    "type": "fehler",
    "satz": "Ich habe Kopfweh und gehe zu der Arzt.",
    "falsch": "Arzt",
    "richtig": "Ich habe Kopfweh und gehe zum Arzt.",
    "explain": "zu plus dem wird zum. Also: zum Arzt, nicht zu der Arzt."
   },
   {
    "type": "fehler",
    "satz": "Mein Bauch tut weh seit gestern.",
    "falsch": "weh",
    "richtig": "Mein Bauch tut seit gestern weh.",
    "explain": "Bei trennbaren Verben steht der zweite Teil ganz am Ende: tut … weh."
   },
   {
    "type": "fehler",
    "satz": "Ich bin krank, ich gehe zur Apotheke kaufen Medikamente.",
    "falsch": "kaufen",
    "richtig": "Ich bin krank, ich gehe zur Apotheke und kaufe Medikamente.",
    "explain": "Zwei Handlungen brauchen zwei konjugierte Verben, verbunden mit und."
   },
   {
    "type": "schreiben",
    "auftrag": "Du bist krank und kannst nicht zur Arbeit. Schreib deiner Chefin zwei bis drei Sätze.",
    "muster": "Guten Morgen Frau Weber, ich bin heute leider krank und habe Fieber. Ich gehe gleich zum Arzt und melde mich am Nachmittag noch einmal. Viele Grüße, Amir",
    "tipp": "Kurz sagen was ist, was du tust und wann du dich meldest."
   },
   {
    "type": "schreiben",
    "auftrag": "Ruf beim Arzt an — schreib auf, was du sagst. Zwei bis drei Sätze.",
    "muster": "Guten Tag, mein Name ist Lena Petrova. Ich hätte gern einen Termin, mein Rücken tut seit drei Tagen weh. Geht es diese Woche noch?",
    "tipp": "Name, Anliegen, Frage — in dieser Reihenfolge."
   }
  ]
 },
 {
  "id": "a1-kleidung",
  "title": "Kleidung & Farben",
  "level": "A1",
  "emoji": "👕",
  "words": [
   {
    "de": "die Hose",
    "info": "man zieht sie über die Beine",
    "emoji": "👖"
   },
   {
    "de": "das Hemd",
    "info": "man trägt es oben, es hat Knöpfe",
    "emoji": "👔"
   },
   {
    "de": "die Jacke",
    "info": "man zieht sie an, wenn es kalt ist",
    "emoji": "🧥"
   },
   {
    "de": "der Schuh",
    "info": "man trägt ihn am Fuß",
    "emoji": "👟"
   },
   {
    "de": "das Kleid",
    "info": "ein Teil für den ganzen Körper, ohne Hose",
    "emoji": "👗"
   },
   {
    "de": "der Pullover",
    "info": "warm und weich, man zieht ihn über den Kopf",
    "emoji": "🧶"
   },
   {
    "de": "die Mütze",
    "info": "sie hält den Kopf warm",
    "emoji": "🧢"
   },
   {
    "de": "der Schal",
    "info": "er hält den Hals warm",
    "emoji": "🧣"
   },
   {
    "de": "die Größe",
    "info": "wie groß ein Kleidungsstück ist, zum Beispiel M",
    "emoji": "📏"
   },
   {
    "de": "rot",
    "info": "die Farbe von Blut und Tomaten",
    "emoji": "🔴"
   },
   {
    "de": "blau",
    "info": "die Farbe vom Himmel",
    "emoji": "🔵"
   },
   {
    "de": "grün",
    "info": "die Farbe von Gras und Blättern",
    "emoji": "🟢"
   },
   {
    "de": "gelb",
    "info": "die Farbe von Zitronen und der Sonne",
    "emoji": "🟡"
   },
   {
    "de": "schwarz",
    "info": "die Farbe der Nacht",
    "emoji": "⚫"
   },
   {
    "de": "weiß",
    "info": "die Farbe von Schnee und Milch",
    "emoji": "⚪"
   },
   {
    "de": "anziehen",
    "info": "Kleidung an den Körper tun",
    "emoji": "🫱"
   }
  ],
  "exercises": [
   {
    "type": "karte",
    "w": "die Hose",
    "info": "man zieht sie über die Beine",
    "emoji": "👖"
   },
   {
    "type": "karte",
    "w": "das Hemd",
    "info": "man trägt es oben, es hat Knöpfe",
    "emoji": "👔"
   },
   {
    "type": "karte",
    "w": "die Jacke",
    "info": "man zieht sie an, wenn es kalt ist",
    "emoji": "🧥"
   },
   {
    "type": "karte",
    "w": "der Schuh",
    "info": "man trägt ihn am Fuß",
    "emoji": "👟"
   },
   {
    "type": "karte",
    "w": "das Kleid",
    "info": "ein Teil für den ganzen Körper, ohne Hose",
    "emoji": "👗"
   },
   {
    "type": "karte",
    "w": "der Pullover",
    "info": "warm und weich, man zieht ihn über den Kopf",
    "emoji": "🧶"
   },
   {
    "type": "karte",
    "w": "die Mütze",
    "info": "sie hält den Kopf warm",
    "emoji": "🧢"
   },
   {
    "type": "karte",
    "w": "der Schal",
    "info": "er hält den Hals warm",
    "emoji": "🧣"
   },
   {
    "type": "karte",
    "w": "die Größe",
    "info": "wie groß ein Kleidungsstück ist, zum Beispiel M",
    "emoji": "📏"
   },
   {
    "type": "karte",
    "w": "rot",
    "info": "die Farbe von Blut und Tomaten",
    "emoji": "🔴"
   },
   {
    "type": "karte",
    "w": "blau",
    "info": "die Farbe vom Himmel",
    "emoji": "🔵"
   },
   {
    "type": "karte",
    "w": "grün",
    "info": "die Farbe von Gras und Blättern",
    "emoji": "🟢"
   },
   {
    "type": "karte",
    "w": "gelb",
    "info": "die Farbe von Zitronen und der Sonne",
    "emoji": "🟡"
   },
   {
    "type": "karte",
    "w": "schwarz",
    "info": "die Farbe der Nacht",
    "emoji": "⚫"
   },
   {
    "type": "karte",
    "w": "weiß",
    "info": "die Farbe von Schnee und Milch",
    "emoji": "⚪"
   },
   {
    "type": "karte",
    "w": "anziehen",
    "info": "Kleidung an den Körper tun",
    "emoji": "🫱"
   },
   {
    "type": "choice",
    "q": "Welches Wort passt: „man zieht sie über die Beine“?",
    "options": [
     "die Hose",
     "der Schuh",
     "der Schal",
     "grün"
    ],
    "answer": 0,
    "w": "die Hose",
    "explain": "👖 die Hose — man zieht sie über die Beine"
   },
   {
    "type": "choice",
    "q": "Welches Wort passt: „man trägt es oben, es hat Knöpfe“?",
    "options": [
     "das Hemd",
     "das Kleid",
     "die Größe",
     "gelb"
    ],
    "answer": 0,
    "w": "das Hemd",
    "explain": "👔 das Hemd — man trägt es oben, es hat Knöpfe"
   },
   {
    "type": "choice",
    "q": "Welches Wort passt: „man zieht sie an, wenn es kalt ist“?",
    "options": [
     "die Jacke",
     "der Pullover",
     "rot",
     "schwarz"
    ],
    "answer": 0,
    "w": "die Jacke",
    "explain": "🧥 die Jacke — man zieht sie an, wenn es kalt ist"
   },
   {
    "type": "choice",
    "q": "Welches Wort passt: „man trägt ihn am Fuß“?",
    "options": [
     "der Schuh",
     "die Mütze",
     "blau",
     "weiß"
    ],
    "answer": 0,
    "w": "der Schuh",
    "explain": "👟 der Schuh — man trägt ihn am Fuß"
   },
   {
    "type": "choice",
    "q": "Welches Wort passt: „ein Teil für den ganzen Körper, ohne Hose“?",
    "options": [
     "das Kleid",
     "der Schal",
     "grün",
     "anziehen"
    ],
    "answer": 0,
    "w": "das Kleid",
    "explain": "👗 das Kleid — ein Teil für den ganzen Körper, ohne Hose"
   },
   {
    "type": "choice",
    "q": "Welches Wort passt: „warm und weich, man zieht ihn über den Kopf“?",
    "options": [
     "der Pullover",
     "die Größe",
     "gelb",
     "die Hose"
    ],
    "answer": 0,
    "w": "der Pullover",
    "explain": "🧶 der Pullover — warm und weich, man zieht ihn über den Kopf"
   },
   {
    "type": "choice",
    "q": "Welches Wort passt: „sie hält den Kopf warm“?",
    "options": [
     "die Mütze",
     "rot",
     "schwarz",
     "das Hemd"
    ],
    "answer": 0,
    "w": "die Mütze",
    "explain": "🧢 die Mütze — sie hält den Kopf warm"
   },
   {
    "type": "choice",
    "q": "Welches Wort passt: „er hält den Hals warm“?",
    "options": [
     "der Schal",
     "blau",
     "weiß",
     "die Jacke"
    ],
    "answer": 0,
    "w": "der Schal",
    "explain": "🧣 der Schal — er hält den Hals warm"
   },
   {
    "type": "choice",
    "q": "Welches Wort passt: „wie groß ein Kleidungsstück ist, zum Beispiel M“?",
    "options": [
     "die Größe",
     "grün",
     "anziehen",
     "der Schuh"
    ],
    "answer": 0,
    "w": "die Größe",
    "explain": "📏 die Größe — wie groß ein Kleidungsstück ist, zum Beispiel M"
   },
   {
    "type": "choice",
    "q": "Welches Wort passt: „die Farbe von Blut und Tomaten“?",
    "options": [
     "rot",
     "gelb",
     "die Hose",
     "das Kleid"
    ],
    "answer": 0,
    "w": "rot",
    "explain": "🔴 rot — die Farbe von Blut und Tomaten"
   },
   {
    "type": "choice",
    "q": "Welches Wort passt: „die Farbe vom Himmel“?",
    "options": [
     "blau",
     "schwarz",
     "das Hemd",
     "der Pullover"
    ],
    "answer": 0,
    "w": "blau",
    "explain": "🔵 blau — die Farbe vom Himmel"
   },
   {
    "type": "choice",
    "q": "Welches Wort passt: „die Farbe von Gras und Blättern“?",
    "options": [
     "grün",
     "weiß",
     "die Jacke",
     "die Mütze"
    ],
    "answer": 0,
    "w": "grün",
    "explain": "🟢 grün — die Farbe von Gras und Blättern"
   },
   {
    "type": "choice",
    "q": "Welches Wort passt: „die Farbe von Zitronen und der Sonne“?",
    "options": [
     "gelb",
     "anziehen",
     "der Schuh",
     "der Schal"
    ],
    "answer": 0,
    "w": "gelb",
    "explain": "🟡 gelb — die Farbe von Zitronen und der Sonne"
   },
   {
    "type": "choice",
    "q": "Welches Wort passt: „die Farbe der Nacht“?",
    "options": [
     "schwarz",
     "die Hose",
     "das Kleid",
     "die Größe"
    ],
    "answer": 0,
    "w": "schwarz",
    "explain": "⚫ schwarz — die Farbe der Nacht"
   },
   {
    "type": "choice",
    "q": "Welches Wort passt: „die Farbe von Schnee und Milch“?",
    "options": [
     "weiß",
     "das Hemd",
     "der Pullover",
     "rot"
    ],
    "answer": 0,
    "w": "weiß",
    "explain": "⚪ weiß — die Farbe von Schnee und Milch"
   },
   {
    "type": "choice",
    "q": "Welches Wort passt: „Kleidung an den Körper tun“?",
    "options": [
     "anziehen",
     "die Jacke",
     "die Mütze",
     "blau"
    ],
    "answer": 0,
    "w": "anziehen",
    "explain": "🫱 anziehen — Kleidung an den Körper tun"
   },
   {
    "type": "gap",
    "text": "___ Hose",
    "answer": "die",
    "hint": "der / die / das?",
    "w": "die Hose",
    "explain": "Es heißt die Hose — man zieht sie über die Beine"
   },
   {
    "type": "gap",
    "text": "___ Hemd",
    "answer": "das",
    "hint": "der / die / das?",
    "w": "das Hemd",
    "explain": "Es heißt das Hemd — man trägt es oben, es hat Knöpfe"
   },
   {
    "type": "gap",
    "text": "___ Jacke",
    "answer": "die",
    "hint": "der / die / das?",
    "w": "die Jacke",
    "explain": "Es heißt die Jacke — man zieht sie an, wenn es kalt ist"
   },
   {
    "type": "gap",
    "text": "___ Schuh",
    "answer": "der",
    "hint": "der / die / das?",
    "w": "der Schuh",
    "explain": "Es heißt der Schuh — man trägt ihn am Fuß"
   },
   {
    "type": "gap",
    "text": "___ Kleid",
    "answer": "das",
    "hint": "der / die / das?",
    "w": "das Kleid",
    "explain": "Es heißt das Kleid — ein Teil für den ganzen Körper, ohne Hose"
   },
   {
    "type": "gap",
    "text": "___ Pullover",
    "answer": "der",
    "hint": "der / die / das?",
    "w": "der Pullover",
    "explain": "Es heißt der Pullover — warm und weich, man zieht ihn über den Kopf"
   },
   {
    "type": "gap",
    "text": "___ Mütze",
    "answer": "die",
    "hint": "der / die / das?",
    "w": "die Mütze",
    "explain": "Es heißt die Mütze — sie hält den Kopf warm"
   },
   {
    "type": "gap",
    "text": "___ Schal",
    "answer": "der",
    "hint": "der / die / das?",
    "w": "der Schal",
    "explain": "Es heißt der Schal — er hält den Hals warm"
   },
   {
    "type": "gap",
    "text": "___ Größe",
    "answer": "die",
    "hint": "der / die / das?",
    "w": "die Größe",
    "explain": "Es heißt die Größe — wie groß ein Kleidungsstück ist, zum Beispiel M"
   },
   {
    "type": "tippen",
    "answer": "Hose",
    "info": "man zieht sie über die Beine",
    "emoji": "👖",
    "w": "die Hose",
    "explain": "👖 die Hose"
   },
   {
    "type": "tippen",
    "answer": "Hemd",
    "info": "man trägt es oben, es hat Knöpfe",
    "emoji": "👔",
    "w": "das Hemd",
    "explain": "👔 das Hemd"
   },
   {
    "type": "tippen",
    "answer": "Jacke",
    "info": "man zieht sie an, wenn es kalt ist",
    "emoji": "🧥",
    "w": "die Jacke",
    "explain": "🧥 die Jacke"
   },
   {
    "type": "tippen",
    "answer": "Schuh",
    "info": "man trägt ihn am Fuß",
    "emoji": "👟",
    "w": "der Schuh",
    "explain": "👟 der Schuh"
   },
   {
    "type": "tippen",
    "answer": "Kleid",
    "info": "ein Teil für den ganzen Körper, ohne Hose",
    "emoji": "👗",
    "w": "das Kleid",
    "explain": "👗 das Kleid"
   },
   {
    "type": "tippen",
    "answer": "Pullover",
    "info": "warm und weich, man zieht ihn über den Kopf",
    "emoji": "🧶",
    "w": "der Pullover",
    "explain": "🧶 der Pullover"
   },
   {
    "type": "tippen",
    "answer": "Mütze",
    "info": "sie hält den Kopf warm",
    "emoji": "🧢",
    "w": "die Mütze",
    "explain": "🧢 die Mütze"
   },
   {
    "type": "tippen",
    "answer": "Schal",
    "info": "er hält den Hals warm",
    "emoji": "🧣",
    "w": "der Schal",
    "explain": "🧣 der Schal"
   },
   {
    "type": "tippen",
    "answer": "Größe",
    "info": "wie groß ein Kleidungsstück ist, zum Beispiel M",
    "emoji": "📏",
    "w": "die Größe",
    "explain": "📏 die Größe"
   },
   {
    "type": "tippen",
    "answer": "rot",
    "info": "die Farbe von Blut und Tomaten",
    "emoji": "🔴",
    "w": "rot",
    "explain": "🔴 rot"
   },
   {
    "type": "tippen",
    "answer": "blau",
    "info": "die Farbe vom Himmel",
    "emoji": "🔵",
    "w": "blau",
    "explain": "🔵 blau"
   },
   {
    "type": "tippen",
    "answer": "grün",
    "info": "die Farbe von Gras und Blättern",
    "emoji": "🟢",
    "w": "grün",
    "explain": "🟢 grün"
   },
   {
    "type": "tippen",
    "answer": "gelb",
    "info": "die Farbe von Zitronen und der Sonne",
    "emoji": "🟡",
    "w": "gelb",
    "explain": "🟡 gelb"
   },
   {
    "type": "tippen",
    "answer": "schwarz",
    "info": "die Farbe der Nacht",
    "emoji": "⚫",
    "w": "schwarz",
    "explain": "⚫ schwarz"
   },
   {
    "type": "tippen",
    "answer": "weiß",
    "info": "die Farbe von Schnee und Milch",
    "emoji": "⚪",
    "w": "weiß",
    "explain": "⚪ weiß"
   },
   {
    "type": "tippen",
    "answer": "anziehen",
    "info": "Kleidung an den Körper tun",
    "emoji": "🫱",
    "w": "anziehen",
    "explain": "🫱 anziehen"
   },
   {
    "type": "order",
    "answer": "Ich ziehe die Jacke an",
    "hint": "Trennbares Verb: Der zweite Teil geht ans Ende.",
    "explain": "anziehen ist trennbar: Ich ziehe … an."
   },
   {
    "type": "order",
    "answer": "Die Hose ist mir zu klein",
    "hint": "Erst das Subjekt, dann das Verb.",
    "explain": "zu klein sein — die Größe passt nicht."
   },
   {
    "type": "order",
    "answer": "Haben Sie das Hemd auch in Blau",
    "hint": "Bei einer Frage steht das Verb zuerst.",
    "explain": "Typische Frage im Geschäft: Haben Sie … auch in …?"
   },
   {
    "type": "order",
    "answer": "Meine Schuhe sind schwarz und neu",
    "hint": "Zwei Eigenschaften mit und verbinden.",
    "explain": "Im Plural: die Schuhe sind."
   },
   {
    "type": "order",
    "answer": "Im Winter trage ich immer einen Schal",
    "hint": "Nach der Zeitangabe kommt das Verb.",
    "explain": "Steht die Zeitangabe vorn, folgt sofort das Verb: trage ich."
   },
   {
    "type": "match",
    "intro": "Ordne Wort und Bedeutung zu:",
    "pairs": [
     {
      "l": "die Hose",
      "r": "man zieht sie über die Beine"
     },
     {
      "l": "das Hemd",
      "r": "man trägt es oben, es hat Knöpfe"
     },
     {
      "l": "die Jacke",
      "r": "man zieht sie an, wenn es kalt ist"
     },
     {
      "l": "der Schuh",
      "r": "man trägt ihn am Fuß"
     }
    ]
   },
   {
    "type": "match",
    "intro": "Ordne Wort und Bedeutung zu:",
    "pairs": [
     {
      "l": "das Kleid",
      "r": "ein Teil für den ganzen Körper, ohne Hose"
     },
     {
      "l": "der Pullover",
      "r": "warm und weich, man zieht ihn über den Kopf"
     },
     {
      "l": "die Mütze",
      "r": "sie hält den Kopf warm"
     },
     {
      "l": "der Schal",
      "r": "er hält den Hals warm"
     }
    ]
   },
   {
    "type": "match",
    "intro": "Ordne Wort und Bedeutung zu:",
    "pairs": [
     {
      "l": "die Größe",
      "r": "wie groß ein Kleidungsstück ist, zum Beispiel M"
     },
     {
      "l": "rot",
      "r": "die Farbe von Blut und Tomaten"
     },
     {
      "l": "blau",
      "r": "die Farbe vom Himmel"
     },
     {
      "l": "grün",
      "r": "die Farbe von Gras und Blättern"
     }
    ]
   },
   {
    "type": "match",
    "intro": "Ordne Wort und Bedeutung zu:",
    "pairs": [
     {
      "l": "gelb",
      "r": "die Farbe von Zitronen und der Sonne"
     },
     {
      "l": "schwarz",
      "r": "die Farbe der Nacht"
     },
     {
      "l": "weiß",
      "r": "die Farbe von Schnee und Milch"
     },
     {
      "l": "anziehen",
      "r": "Kleidung an den Körper tun"
     }
    ]
   },
   {
    "type": "fehler",
    "satz": "Ich ziehe an die Jacke.",
    "falsch": "an",
    "richtig": "Ich ziehe die Jacke an.",
    "explain": "Bei trennbaren Verben steht das Präfix ganz am Ende des Satzes."
   },
   {
    "type": "fehler",
    "satz": "Die Hose ist zu klein für mich, ich brauche ein größere Größe.",
    "falsch": "ein",
    "richtig": "Ich brauche eine größere Größe.",
    "explain": "die Größe ist feminin: eine größere Größe."
   },
   {
    "type": "fehler",
    "satz": "Meine Schuhe ist schwarz.",
    "falsch": "ist",
    "richtig": "Meine Schuhe sind schwarz.",
    "explain": "Schuhe steht im Plural, deshalb sind."
   },
   {
    "type": "schreiben",
    "auftrag": "Du kaufst eine Jacke. Schreib das Gespräch im Geschäft in drei bis vier Sätzen.",
    "muster": "Guten Tag, ich suche eine warme Jacke. Haben Sie die auch in Blau? Meine Größe ist M. Kann ich sie kurz anprobieren?",
    "tipp": "Farbe, Größe, anprobieren — das sind die drei Dinge, die man im Geschäft braucht."
   },
   {
    "type": "schreiben",
    "auftrag": "Beschreib in drei Sätzen, was du heute anhast.",
    "muster": "Heute trage ich eine blaue Hose und einen schwarzen Pullover. Meine Schuhe sind weiß. Draußen ist es kalt, deshalb ziehe ich noch eine Jacke an.",
    "tipp": "Farbe vor dem Nomen: eine blaue Hose, ein schwarzer Pullover."
   }
  ]
 },
 {
  "id": "a1-wetter",
  "title": "Wetter & Jahreszeiten",
  "level": "A1",
  "emoji": "🌦️",
  "words": [
   {
    "de": "die Sonne",
    "info": "sie scheint am Himmel und macht warm",
    "emoji": "☀️"
   },
   {
    "de": "der Regen",
    "info": "Wasser, das vom Himmel fällt",
    "emoji": "🌧️"
   },
   {
    "de": "der Schnee",
    "info": "weiß und kalt, im Winter",
    "emoji": "❄️"
   },
   {
    "de": "der Wind",
    "info": "bewegte Luft",
    "emoji": "💨"
   },
   {
    "de": "die Wolke",
    "info": "grau oder weiß am Himmel",
    "emoji": "☁️"
   },
   {
    "de": "warm",
    "info": "angenehm, nicht kalt",
    "emoji": "🌡️"
   },
   {
    "de": "kalt",
    "info": "man friert und braucht eine Jacke",
    "emoji": "🥶"
   },
   {
    "de": "heiß",
    "info": "sehr warm, man schwitzt",
    "emoji": "🥵"
   },
   {
    "de": "der Frühling",
    "info": "die Zeit, in der alles wieder wächst",
    "emoji": "🌷"
   },
   {
    "de": "der Sommer",
    "info": "die warme Zeit mit den langen Tagen",
    "emoji": "🏖️"
   },
   {
    "de": "der Herbst",
    "info": "die Zeit, in der die Blätter fallen",
    "emoji": "🍂"
   },
   {
    "de": "der Winter",
    "info": "die kalte Zeit mit den kurzen Tagen",
    "emoji": "⛄"
   },
   {
    "de": "der Grad",
    "info": "damit misst man die Temperatur",
    "emoji": "🌡️"
   },
   {
    "de": "der Regenschirm",
    "info": "er schützt vor dem Regen",
    "emoji": "☂️"
   },
   {
    "de": "scheinen",
    "info": "Licht geben, von der Sonne",
    "emoji": "🔆"
   },
   {
    "de": "regnen",
    "info": "Wasser fällt vom Himmel",
    "emoji": "🌂"
   }
  ],
  "exercises": [
   {
    "type": "karte",
    "w": "die Sonne",
    "info": "sie scheint am Himmel und macht warm",
    "emoji": "☀️"
   },
   {
    "type": "karte",
    "w": "der Regen",
    "info": "Wasser, das vom Himmel fällt",
    "emoji": "🌧️"
   },
   {
    "type": "karte",
    "w": "der Schnee",
    "info": "weiß und kalt, im Winter",
    "emoji": "❄️"
   },
   {
    "type": "karte",
    "w": "der Wind",
    "info": "bewegte Luft",
    "emoji": "💨"
   },
   {
    "type": "karte",
    "w": "die Wolke",
    "info": "grau oder weiß am Himmel",
    "emoji": "☁️"
   },
   {
    "type": "karte",
    "w": "warm",
    "info": "angenehm, nicht kalt",
    "emoji": "🌡️"
   },
   {
    "type": "karte",
    "w": "kalt",
    "info": "man friert und braucht eine Jacke",
    "emoji": "🥶"
   },
   {
    "type": "karte",
    "w": "heiß",
    "info": "sehr warm, man schwitzt",
    "emoji": "🥵"
   },
   {
    "type": "karte",
    "w": "der Frühling",
    "info": "die Zeit, in der alles wieder wächst",
    "emoji": "🌷"
   },
   {
    "type": "karte",
    "w": "der Sommer",
    "info": "die warme Zeit mit den langen Tagen",
    "emoji": "🏖️"
   },
   {
    "type": "karte",
    "w": "der Herbst",
    "info": "die Zeit, in der die Blätter fallen",
    "emoji": "🍂"
   },
   {
    "type": "karte",
    "w": "der Winter",
    "info": "die kalte Zeit mit den kurzen Tagen",
    "emoji": "⛄"
   },
   {
    "type": "karte",
    "w": "der Grad",
    "info": "damit misst man die Temperatur",
    "emoji": "🌡️"
   },
   {
    "type": "karte",
    "w": "der Regenschirm",
    "info": "er schützt vor dem Regen",
    "emoji": "☂️"
   },
   {
    "type": "karte",
    "w": "scheinen",
    "info": "Licht geben, von der Sonne",
    "emoji": "🔆"
   },
   {
    "type": "karte",
    "w": "regnen",
    "info": "Wasser fällt vom Himmel",
    "emoji": "🌂"
   },
   {
    "type": "choice",
    "q": "Welches Wort passt: „sie scheint am Himmel und macht warm“?",
    "options": [
     "die Sonne",
     "der Wind",
     "heiß",
     "der Winter"
    ],
    "answer": 0,
    "w": "die Sonne",
    "explain": "☀️ die Sonne — sie scheint am Himmel und macht warm"
   },
   {
    "type": "choice",
    "q": "Welches Wort passt: „Wasser, das vom Himmel fällt“?",
    "options": [
     "der Regen",
     "die Wolke",
     "der Frühling",
     "der Grad"
    ],
    "answer": 0,
    "w": "der Regen",
    "explain": "🌧️ der Regen — Wasser, das vom Himmel fällt"
   },
   {
    "type": "choice",
    "q": "Welches Wort passt: „weiß und kalt, im Winter“?",
    "options": [
     "der Schnee",
     "warm",
     "der Sommer",
     "der Regenschirm"
    ],
    "answer": 0,
    "w": "der Schnee",
    "explain": "❄️ der Schnee — weiß und kalt, im Winter"
   },
   {
    "type": "choice",
    "q": "Welches Wort passt: „bewegte Luft“?",
    "options": [
     "der Wind",
     "kalt",
     "der Herbst",
     "scheinen"
    ],
    "answer": 0,
    "w": "der Wind",
    "explain": "💨 der Wind — bewegte Luft"
   },
   {
    "type": "choice",
    "q": "Welches Wort passt: „grau oder weiß am Himmel“?",
    "options": [
     "die Wolke",
     "heiß",
     "der Winter",
     "regnen"
    ],
    "answer": 0,
    "w": "die Wolke",
    "explain": "☁️ die Wolke — grau oder weiß am Himmel"
   },
   {
    "type": "choice",
    "q": "Welches Wort passt: „angenehm, nicht kalt“?",
    "options": [
     "warm",
     "der Frühling",
     "der Grad",
     "die Sonne"
    ],
    "answer": 0,
    "w": "warm",
    "explain": "🌡️ warm — angenehm, nicht kalt"
   },
   {
    "type": "choice",
    "q": "Welches Wort passt: „man friert und braucht eine Jacke“?",
    "options": [
     "kalt",
     "der Sommer",
     "der Regenschirm",
     "der Regen"
    ],
    "answer": 0,
    "w": "kalt",
    "explain": "🥶 kalt — man friert und braucht eine Jacke"
   },
   {
    "type": "choice",
    "q": "Welches Wort passt: „sehr warm, man schwitzt“?",
    "options": [
     "heiß",
     "der Herbst",
     "scheinen",
     "der Schnee"
    ],
    "answer": 0,
    "w": "heiß",
    "explain": "🥵 heiß — sehr warm, man schwitzt"
   },
   {
    "type": "choice",
    "q": "Welches Wort passt: „die Zeit, in der alles wieder wächst“?",
    "options": [
     "der Frühling",
     "der Winter",
     "regnen",
     "der Wind"
    ],
    "answer": 0,
    "w": "der Frühling",
    "explain": "🌷 der Frühling — die Zeit, in der alles wieder wächst"
   },
   {
    "type": "choice",
    "q": "Welches Wort passt: „die warme Zeit mit den langen Tagen“?",
    "options": [
     "der Sommer",
     "der Grad",
     "die Sonne",
     "die Wolke"
    ],
    "answer": 0,
    "w": "der Sommer",
    "explain": "🏖️ der Sommer — die warme Zeit mit den langen Tagen"
   },
   {
    "type": "choice",
    "q": "Welches Wort passt: „die Zeit, in der die Blätter fallen“?",
    "options": [
     "der Herbst",
     "der Regenschirm",
     "der Regen",
     "warm"
    ],
    "answer": 0,
    "w": "der Herbst",
    "explain": "🍂 der Herbst — die Zeit, in der die Blätter fallen"
   },
   {
    "type": "choice",
    "q": "Welches Wort passt: „die kalte Zeit mit den kurzen Tagen“?",
    "options": [
     "der Winter",
     "scheinen",
     "der Schnee",
     "kalt"
    ],
    "answer": 0,
    "w": "der Winter",
    "explain": "⛄ der Winter — die kalte Zeit mit den kurzen Tagen"
   },
   {
    "type": "choice",
    "q": "Welches Wort passt: „damit misst man die Temperatur“?",
    "options": [
     "der Grad",
     "regnen",
     "der Wind",
     "heiß"
    ],
    "answer": 0,
    "w": "der Grad",
    "explain": "🌡️ der Grad — damit misst man die Temperatur"
   },
   {
    "type": "choice",
    "q": "Welches Wort passt: „er schützt vor dem Regen“?",
    "options": [
     "der Regenschirm",
     "die Sonne",
     "die Wolke",
     "der Frühling"
    ],
    "answer": 0,
    "w": "der Regenschirm",
    "explain": "☂️ der Regenschirm — er schützt vor dem Regen"
   },
   {
    "type": "choice",
    "q": "Welches Wort passt: „Licht geben, von der Sonne“?",
    "options": [
     "scheinen",
     "der Regen",
     "warm",
     "der Sommer"
    ],
    "answer": 0,
    "w": "scheinen",
    "explain": "🔆 scheinen — Licht geben, von der Sonne"
   },
   {
    "type": "choice",
    "q": "Welches Wort passt: „Wasser fällt vom Himmel“?",
    "options": [
     "regnen",
     "der Schnee",
     "kalt",
     "der Herbst"
    ],
    "answer": 0,
    "w": "regnen",
    "explain": "🌂 regnen — Wasser fällt vom Himmel"
   },
   {
    "type": "gap",
    "text": "___ Sonne",
    "answer": "die",
    "hint": "der / die / das?",
    "w": "die Sonne",
    "explain": "Es heißt die Sonne — sie scheint am Himmel und macht warm"
   },
   {
    "type": "gap",
    "text": "___ Regen",
    "answer": "der",
    "hint": "der / die / das?",
    "w": "der Regen",
    "explain": "Es heißt der Regen — Wasser, das vom Himmel fällt"
   },
   {
    "type": "gap",
    "text": "___ Schnee",
    "answer": "der",
    "hint": "der / die / das?",
    "w": "der Schnee",
    "explain": "Es heißt der Schnee — weiß und kalt, im Winter"
   },
   {
    "type": "gap",
    "text": "___ Wind",
    "answer": "der",
    "hint": "der / die / das?",
    "w": "der Wind",
    "explain": "Es heißt der Wind — bewegte Luft"
   },
   {
    "type": "gap",
    "text": "___ Wolke",
    "answer": "die",
    "hint": "der / die / das?",
    "w": "die Wolke",
    "explain": "Es heißt die Wolke — grau oder weiß am Himmel"
   },
   {
    "type": "gap",
    "text": "___ Frühling",
    "answer": "der",
    "hint": "der / die / das?",
    "w": "der Frühling",
    "explain": "Es heißt der Frühling — die Zeit, in der alles wieder wächst"
   },
   {
    "type": "gap",
    "text": "___ Sommer",
    "answer": "der",
    "hint": "der / die / das?",
    "w": "der Sommer",
    "explain": "Es heißt der Sommer — die warme Zeit mit den langen Tagen"
   },
   {
    "type": "gap",
    "text": "___ Herbst",
    "answer": "der",
    "hint": "der / die / das?",
    "w": "der Herbst",
    "explain": "Es heißt der Herbst — die Zeit, in der die Blätter fallen"
   },
   {
    "type": "gap",
    "text": "___ Winter",
    "answer": "der",
    "hint": "der / die / das?",
    "w": "der Winter",
    "explain": "Es heißt der Winter — die kalte Zeit mit den kurzen Tagen"
   },
   {
    "type": "gap",
    "text": "___ Grad",
    "answer": "der",
    "hint": "der / die / das?",
    "w": "der Grad",
    "explain": "Es heißt der Grad — damit misst man die Temperatur"
   },
   {
    "type": "gap",
    "text": "___ Regenschirm",
    "answer": "der",
    "hint": "der / die / das?",
    "w": "der Regenschirm",
    "explain": "Es heißt der Regenschirm — er schützt vor dem Regen"
   },
   {
    "type": "tippen",
    "answer": "Sonne",
    "info": "sie scheint am Himmel und macht warm",
    "emoji": "☀️",
    "w": "die Sonne",
    "explain": "☀️ die Sonne"
   },
   {
    "type": "tippen",
    "answer": "Regen",
    "info": "Wasser, das vom Himmel fällt",
    "emoji": "🌧️",
    "w": "der Regen",
    "explain": "🌧️ der Regen"
   },
   {
    "type": "tippen",
    "answer": "Schnee",
    "info": "weiß und kalt, im Winter",
    "emoji": "❄️",
    "w": "der Schnee",
    "explain": "❄️ der Schnee"
   },
   {
    "type": "tippen",
    "answer": "Wind",
    "info": "bewegte Luft",
    "emoji": "💨",
    "w": "der Wind",
    "explain": "💨 der Wind"
   },
   {
    "type": "tippen",
    "answer": "Wolke",
    "info": "grau oder weiß am Himmel",
    "emoji": "☁️",
    "w": "die Wolke",
    "explain": "☁️ die Wolke"
   },
   {
    "type": "tippen",
    "answer": "warm",
    "info": "angenehm, nicht kalt",
    "emoji": "🌡️",
    "w": "warm",
    "explain": "🌡️ warm"
   },
   {
    "type": "tippen",
    "answer": "kalt",
    "info": "man friert und braucht eine Jacke",
    "emoji": "🥶",
    "w": "kalt",
    "explain": "🥶 kalt"
   },
   {
    "type": "tippen",
    "answer": "heiß",
    "info": "sehr warm, man schwitzt",
    "emoji": "🥵",
    "w": "heiß",
    "explain": "🥵 heiß"
   },
   {
    "type": "tippen",
    "answer": "Frühling",
    "info": "die Zeit, in der alles wieder wächst",
    "emoji": "🌷",
    "w": "der Frühling",
    "explain": "🌷 der Frühling"
   },
   {
    "type": "tippen",
    "answer": "Sommer",
    "info": "die warme Zeit mit den langen Tagen",
    "emoji": "🏖️",
    "w": "der Sommer",
    "explain": "🏖️ der Sommer"
   },
   {
    "type": "tippen",
    "answer": "Herbst",
    "info": "die Zeit, in der die Blätter fallen",
    "emoji": "🍂",
    "w": "der Herbst",
    "explain": "🍂 der Herbst"
   },
   {
    "type": "tippen",
    "answer": "Winter",
    "info": "die kalte Zeit mit den kurzen Tagen",
    "emoji": "⛄",
    "w": "der Winter",
    "explain": "⛄ der Winter"
   },
   {
    "type": "tippen",
    "answer": "Grad",
    "info": "damit misst man die Temperatur",
    "emoji": "🌡️",
    "w": "der Grad",
    "explain": "🌡️ der Grad"
   },
   {
    "type": "tippen",
    "answer": "Regenschirm",
    "info": "er schützt vor dem Regen",
    "emoji": "☂️",
    "w": "der Regenschirm",
    "explain": "☂️ der Regenschirm"
   },
   {
    "type": "tippen",
    "answer": "scheinen",
    "info": "Licht geben, von der Sonne",
    "emoji": "🔆",
    "w": "scheinen",
    "explain": "🔆 scheinen"
   },
   {
    "type": "tippen",
    "answer": "regnen",
    "info": "Wasser fällt vom Himmel",
    "emoji": "🌂",
    "w": "regnen",
    "explain": "🌂 regnen"
   },
   {
    "type": "order",
    "answer": "Heute scheint die Sonne",
    "hint": "Nach der Zeitangabe kommt das Verb.",
    "explain": "Steht heute vorn, folgt sofort das Verb: scheint die Sonne."
   },
   {
    "type": "order",
    "answer": "Im Winter ist es sehr kalt",
    "hint": "Nach der Zeitangabe kommt das Verb.",
    "explain": "Beim Wetter steht immer es: Es ist kalt."
   },
   {
    "type": "order",
    "answer": "Ich nehme heute einen Regenschirm mit",
    "hint": "Trennbares Verb: Der zweite Teil geht ans Ende.",
    "explain": "mitnehmen ist trennbar: Ich nehme … mit."
   },
   {
    "type": "order",
    "answer": "Morgen soll es regnen",
    "hint": "Das Modalverb steht an zweiter Stelle.",
    "explain": "soll drückt hier eine Vorhersage aus: Morgen soll es regnen."
   },
   {
    "type": "order",
    "answer": "Wir haben heute zwanzig Grad",
    "hint": "Erst wer, dann das Verb.",
    "explain": "Für die Temperatur sagt man: Wir haben … Grad."
   },
   {
    "type": "match",
    "intro": "Ordne Wort und Bedeutung zu:",
    "pairs": [
     {
      "l": "die Sonne",
      "r": "sie scheint am Himmel und macht warm"
     },
     {
      "l": "der Regen",
      "r": "Wasser, das vom Himmel fällt"
     },
     {
      "l": "der Schnee",
      "r": "weiß und kalt, im Winter"
     },
     {
      "l": "der Wind",
      "r": "bewegte Luft"
     }
    ]
   },
   {
    "type": "match",
    "intro": "Ordne Wort und Bedeutung zu:",
    "pairs": [
     {
      "l": "die Wolke",
      "r": "grau oder weiß am Himmel"
     },
     {
      "l": "warm",
      "r": "angenehm, nicht kalt"
     },
     {
      "l": "kalt",
      "r": "man friert und braucht eine Jacke"
     },
     {
      "l": "heiß",
      "r": "sehr warm, man schwitzt"
     }
    ]
   },
   {
    "type": "match",
    "intro": "Ordne Wort und Bedeutung zu:",
    "pairs": [
     {
      "l": "der Frühling",
      "r": "die Zeit, in der alles wieder wächst"
     },
     {
      "l": "der Sommer",
      "r": "die warme Zeit mit den langen Tagen"
     },
     {
      "l": "der Herbst",
      "r": "die Zeit, in der die Blätter fallen"
     },
     {
      "l": "der Winter",
      "r": "die kalte Zeit mit den kurzen Tagen"
     }
    ]
   },
   {
    "type": "match",
    "intro": "Ordne Wort und Bedeutung zu:",
    "pairs": [
     {
      "l": "der Grad",
      "r": "damit misst man die Temperatur"
     },
     {
      "l": "der Regenschirm",
      "r": "er schützt vor dem Regen"
     },
     {
      "l": "scheinen",
      "r": "Licht geben, von der Sonne"
     },
     {
      "l": "regnen",
      "r": "Wasser fällt vom Himmel"
     }
    ]
   },
   {
    "type": "fehler",
    "satz": "Heute ist kalt.",
    "falsch": "ist",
    "richtig": "Heute ist es kalt.",
    "explain": "Beim Wetter braucht der Satz immer ein es: Es ist kalt."
   },
   {
    "type": "fehler",
    "satz": "In Winter fällt oft Schnee.",
    "falsch": "In",
    "richtig": "Im Winter fällt oft Schnee.",
    "explain": "in plus dem wird im. Bei Jahreszeiten heißt es immer im Winter, im Sommer."
   },
   {
    "type": "fehler",
    "satz": "Es regnet, ich nehme mit einen Regenschirm.",
    "falsch": "mit",
    "richtig": "Es regnet, ich nehme einen Regenschirm mit.",
    "explain": "Das Präfix mit gehört ans Satzende."
   },
   {
    "type": "schreiben",
    "auftrag": "Schreib in drei Sätzen, wie das Wetter heute bei dir ist.",
    "muster": "Heute ist es bewölkt und ziemlich kühl, wir haben nur zwölf Grad. Am Morgen hat es geregnet, jetzt ist es trocken. Ich nehme trotzdem einen Regenschirm mit.",
    "tipp": "Beim Wetter beginnt der Satz oft mit Es ist oder Wir haben."
   },
   {
    "type": "schreiben",
    "auftrag": "Welche Jahreszeit magst du am liebsten und warum? Drei bis vier Sätze.",
    "muster": "Am liebsten mag ich den Herbst. Es ist nicht mehr heiß, aber die Sonne scheint noch oft. Die Blätter sind gelb und rot, das finde ich sehr schön. Außerdem kann ich wieder meinen dicken Pullover tragen.",
    "tipp": "Nach am liebsten mag ich folgt der Akkusativ: den Herbst, den Sommer."
   }
  ]
 },
 {
  "id": "a1-wege",
  "title": "Wege & Verkehr",
  "level": "A1",
  "emoji": "🚌",
  "words": [
   {
    "de": "der Bus",
    "info": "damit fährt man in der Stadt, er hat viele Sitze",
    "emoji": "🚌"
   },
   {
    "de": "die Bahn",
    "info": "sie fährt auf Schienen",
    "emoji": "🚆"
   },
   {
    "de": "das Fahrrad",
    "info": "es hat zwei Räder, man tritt in die Pedale",
    "emoji": "🚲"
   },
   {
    "de": "das Auto",
    "info": "es hat vier Räder und einen Motor",
    "emoji": "🚗"
   },
   {
    "de": "die Haltestelle",
    "info": "dort hält der Bus und man steigt ein",
    "emoji": "🚏"
   },
   {
    "de": "der Bahnhof",
    "info": "dort fahren die Züge ab",
    "emoji": "🚉"
   },
   {
    "de": "die Fahrkarte",
    "info": "man braucht sie, um mitzufahren",
    "emoji": "🎫"
   },
   {
    "de": "die Straße",
    "info": "dort fahren die Autos",
    "emoji": "🛣️"
   },
   {
    "de": "links",
    "info": "die Seite, auf der bei den meisten das Herz ist",
    "emoji": "⬅️"
   },
   {
    "de": "rechts",
    "info": "die andere Seite, nicht links",
    "emoji": "➡️"
   },
   {
    "de": "geradeaus",
    "info": "immer weiter nach vorn, ohne abzubiegen",
    "emoji": "⬆️"
   },
   {
    "de": "die Ampel",
    "info": "sie zeigt rot, gelb und grün",
    "emoji": "🚦"
   },
   {
    "de": "umsteigen",
    "info": "aus einem Bus aussteigen und in einen anderen einsteigen",
    "emoji": "🔄"
   },
   {
    "de": "aussteigen",
    "info": "aus dem Bus oder der Bahn herausgehen",
    "emoji": "🚪"
   },
   {
    "de": "zu Fuß",
    "info": "ohne Auto oder Bus, man geht selbst",
    "emoji": "🚶"
   },
   {
    "de": "die Fahrt",
    "info": "der Weg von hier nach dort mit Bus, Bahn oder Auto",
    "emoji": "🧭"
   }
  ],
  "exercises": [
   {
    "type": "karte",
    "w": "der Bus",
    "info": "damit fährt man in der Stadt, er hat viele Sitze",
    "emoji": "🚌"
   },
   {
    "type": "karte",
    "w": "die Bahn",
    "info": "sie fährt auf Schienen",
    "emoji": "🚆"
   },
   {
    "type": "karte",
    "w": "das Fahrrad",
    "info": "es hat zwei Räder, man tritt in die Pedale",
    "emoji": "🚲"
   },
   {
    "type": "karte",
    "w": "das Auto",
    "info": "es hat vier Räder und einen Motor",
    "emoji": "🚗"
   },
   {
    "type": "karte",
    "w": "die Haltestelle",
    "info": "dort hält der Bus und man steigt ein",
    "emoji": "🚏"
   },
   {
    "type": "karte",
    "w": "der Bahnhof",
    "info": "dort fahren die Züge ab",
    "emoji": "🚉"
   },
   {
    "type": "karte",
    "w": "die Fahrkarte",
    "info": "man braucht sie, um mitzufahren",
    "emoji": "🎫"
   },
   {
    "type": "karte",
    "w": "die Straße",
    "info": "dort fahren die Autos",
    "emoji": "🛣️"
   },
   {
    "type": "karte",
    "w": "links",
    "info": "die Seite, auf der bei den meisten das Herz ist",
    "emoji": "⬅️"
   },
   {
    "type": "karte",
    "w": "rechts",
    "info": "die andere Seite, nicht links",
    "emoji": "➡️"
   },
   {
    "type": "karte",
    "w": "geradeaus",
    "info": "immer weiter nach vorn, ohne abzubiegen",
    "emoji": "⬆️"
   },
   {
    "type": "karte",
    "w": "die Ampel",
    "info": "sie zeigt rot, gelb und grün",
    "emoji": "🚦"
   },
   {
    "type": "karte",
    "w": "umsteigen",
    "info": "aus einem Bus aussteigen und in einen anderen einsteigen",
    "emoji": "🔄"
   },
   {
    "type": "karte",
    "w": "aussteigen",
    "info": "aus dem Bus oder der Bahn herausgehen",
    "emoji": "🚪"
   },
   {
    "type": "karte",
    "w": "zu Fuß",
    "info": "ohne Auto oder Bus, man geht selbst",
    "emoji": "🚶"
   },
   {
    "type": "karte",
    "w": "die Fahrt",
    "info": "der Weg von hier nach dort mit Bus, Bahn oder Auto",
    "emoji": "🧭"
   },
   {
    "type": "choice",
    "q": "Welches Wort passt: „damit fährt man in der Stadt, er hat viele Sitze“?",
    "options": [
     "der Bus",
     "das Auto",
     "die Straße",
     "die Ampel"
    ],
    "answer": 0,
    "w": "der Bus",
    "explain": "🚌 der Bus — damit fährt man in der Stadt, er hat viele Sitze"
   },
   {
    "type": "choice",
    "q": "Welches Wort passt: „sie fährt auf Schienen“?",
    "options": [
     "die Bahn",
     "die Haltestelle",
     "links",
     "umsteigen"
    ],
    "answer": 0,
    "w": "die Bahn",
    "explain": "🚆 die Bahn — sie fährt auf Schienen"
   },
   {
    "type": "choice",
    "q": "Welches Wort passt: „es hat zwei Räder, man tritt in die Pedale“?",
    "options": [
     "das Fahrrad",
     "der Bahnhof",
     "rechts",
     "aussteigen"
    ],
    "answer": 0,
    "w": "das Fahrrad",
    "explain": "🚲 das Fahrrad — es hat zwei Räder, man tritt in die Pedale"
   },
   {
    "type": "choice",
    "q": "Welches Wort passt: „es hat vier Räder und einen Motor“?",
    "options": [
     "das Auto",
     "die Fahrkarte",
     "geradeaus",
     "zu Fuß"
    ],
    "answer": 0,
    "w": "das Auto",
    "explain": "🚗 das Auto — es hat vier Räder und einen Motor"
   },
   {
    "type": "choice",
    "q": "Welches Wort passt: „dort hält der Bus und man steigt ein“?",
    "options": [
     "die Haltestelle",
     "die Straße",
     "die Ampel",
     "die Fahrt"
    ],
    "answer": 0,
    "w": "die Haltestelle",
    "explain": "🚏 die Haltestelle — dort hält der Bus und man steigt ein"
   },
   {
    "type": "choice",
    "q": "Welches Wort passt: „dort fahren die Züge ab“?",
    "options": [
     "der Bahnhof",
     "links",
     "umsteigen",
     "der Bus"
    ],
    "answer": 0,
    "w": "der Bahnhof",
    "explain": "🚉 der Bahnhof — dort fahren die Züge ab"
   },
   {
    "type": "choice",
    "q": "Welches Wort passt: „man braucht sie, um mitzufahren“?",
    "options": [
     "die Fahrkarte",
     "rechts",
     "aussteigen",
     "die Bahn"
    ],
    "answer": 0,
    "w": "die Fahrkarte",
    "explain": "🎫 die Fahrkarte — man braucht sie, um mitzufahren"
   },
   {
    "type": "choice",
    "q": "Welches Wort passt: „dort fahren die Autos“?",
    "options": [
     "die Straße",
     "geradeaus",
     "zu Fuß",
     "das Fahrrad"
    ],
    "answer": 0,
    "w": "die Straße",
    "explain": "🛣️ die Straße — dort fahren die Autos"
   },
   {
    "type": "choice",
    "q": "Welches Wort passt: „die Seite, auf der bei den meisten das Herz ist“?",
    "options": [
     "links",
     "die Ampel",
     "die Fahrt",
     "das Auto"
    ],
    "answer": 0,
    "w": "links",
    "explain": "⬅️ links — die Seite, auf der bei den meisten das Herz ist"
   },
   {
    "type": "choice",
    "q": "Welches Wort passt: „die andere Seite, nicht links“?",
    "options": [
     "rechts",
     "umsteigen",
     "der Bus",
     "die Haltestelle"
    ],
    "answer": 0,
    "w": "rechts",
    "explain": "➡️ rechts — die andere Seite, nicht links"
   },
   {
    "type": "choice",
    "q": "Welches Wort passt: „immer weiter nach vorn, ohne abzubiegen“?",
    "options": [
     "geradeaus",
     "aussteigen",
     "die Bahn",
     "der Bahnhof"
    ],
    "answer": 0,
    "w": "geradeaus",
    "explain": "⬆️ geradeaus — immer weiter nach vorn, ohne abzubiegen"
   },
   {
    "type": "choice",
    "q": "Welches Wort passt: „sie zeigt rot, gelb und grün“?",
    "options": [
     "die Ampel",
     "zu Fuß",
     "das Fahrrad",
     "die Fahrkarte"
    ],
    "answer": 0,
    "w": "die Ampel",
    "explain": "🚦 die Ampel — sie zeigt rot, gelb und grün"
   },
   {
    "type": "choice",
    "q": "Welches Wort passt: „aus einem Bus aussteigen und in einen anderen einsteigen“?",
    "options": [
     "umsteigen",
     "die Fahrt",
     "das Auto",
     "die Straße"
    ],
    "answer": 0,
    "w": "umsteigen",
    "explain": "🔄 umsteigen — aus einem Bus aussteigen und in einen anderen einsteigen"
   },
   {
    "type": "choice",
    "q": "Welches Wort passt: „aus dem Bus oder der Bahn herausgehen“?",
    "options": [
     "aussteigen",
     "der Bus",
     "die Haltestelle",
     "links"
    ],
    "answer": 0,
    "w": "aussteigen",
    "explain": "🚪 aussteigen — aus dem Bus oder der Bahn herausgehen"
   },
   {
    "type": "choice",
    "q": "Welches Wort passt: „ohne Auto oder Bus, man geht selbst“?",
    "options": [
     "zu Fuß",
     "die Bahn",
     "der Bahnhof",
     "rechts"
    ],
    "answer": 0,
    "w": "zu Fuß",
    "explain": "🚶 zu Fuß — ohne Auto oder Bus, man geht selbst"
   },
   {
    "type": "choice",
    "q": "Welches Wort passt: „der Weg von hier nach dort mit Bus, Bahn oder Auto“?",
    "options": [
     "die Fahrt",
     "das Fahrrad",
     "die Fahrkarte",
     "geradeaus"
    ],
    "answer": 0,
    "w": "die Fahrt",
    "explain": "🧭 die Fahrt — der Weg von hier nach dort mit Bus, Bahn oder Auto"
   },
   {
    "type": "gap",
    "text": "___ Bus",
    "answer": "der",
    "hint": "der / die / das?",
    "w": "der Bus",
    "explain": "Es heißt der Bus — damit fährt man in der Stadt, er hat viele Sitze"
   },
   {
    "type": "gap",
    "text": "___ Bahn",
    "answer": "die",
    "hint": "der / die / das?",
    "w": "die Bahn",
    "explain": "Es heißt die Bahn — sie fährt auf Schienen"
   },
   {
    "type": "gap",
    "text": "___ Fahrrad",
    "answer": "das",
    "hint": "der / die / das?",
    "w": "das Fahrrad",
    "explain": "Es heißt das Fahrrad — es hat zwei Räder, man tritt in die Pedale"
   },
   {
    "type": "gap",
    "text": "___ Auto",
    "answer": "das",
    "hint": "der / die / das?",
    "w": "das Auto",
    "explain": "Es heißt das Auto — es hat vier Räder und einen Motor"
   },
   {
    "type": "gap",
    "text": "___ Haltestelle",
    "answer": "die",
    "hint": "der / die / das?",
    "w": "die Haltestelle",
    "explain": "Es heißt die Haltestelle — dort hält der Bus und man steigt ein"
   },
   {
    "type": "gap",
    "text": "___ Bahnhof",
    "answer": "der",
    "hint": "der / die / das?",
    "w": "der Bahnhof",
    "explain": "Es heißt der Bahnhof — dort fahren die Züge ab"
   },
   {
    "type": "gap",
    "text": "___ Fahrkarte",
    "answer": "die",
    "hint": "der / die / das?",
    "w": "die Fahrkarte",
    "explain": "Es heißt die Fahrkarte — man braucht sie, um mitzufahren"
   },
   {
    "type": "gap",
    "text": "___ Straße",
    "answer": "die",
    "hint": "der / die / das?",
    "w": "die Straße",
    "explain": "Es heißt die Straße — dort fahren die Autos"
   },
   {
    "type": "gap",
    "text": "___ Ampel",
    "answer": "die",
    "hint": "der / die / das?",
    "w": "die Ampel",
    "explain": "Es heißt die Ampel — sie zeigt rot, gelb und grün"
   },
   {
    "type": "gap",
    "text": "___ Fahrt",
    "answer": "die",
    "hint": "der / die / das?",
    "w": "die Fahrt",
    "explain": "Es heißt die Fahrt — der Weg von hier nach dort mit Bus, Bahn oder Auto"
   },
   {
    "type": "tippen",
    "answer": "Bus",
    "info": "damit fährt man in der Stadt, er hat viele Sitze",
    "emoji": "🚌",
    "w": "der Bus",
    "explain": "🚌 der Bus"
   },
   {
    "type": "tippen",
    "answer": "Bahn",
    "info": "sie fährt auf Schienen",
    "emoji": "🚆",
    "w": "die Bahn",
    "explain": "🚆 die Bahn"
   },
   {
    "type": "tippen",
    "answer": "Fahrrad",
    "info": "es hat zwei Räder, man tritt in die Pedale",
    "emoji": "🚲",
    "w": "das Fahrrad",
    "explain": "🚲 das Fahrrad"
   },
   {
    "type": "tippen",
    "answer": "Auto",
    "info": "es hat vier Räder und einen Motor",
    "emoji": "🚗",
    "w": "das Auto",
    "explain": "🚗 das Auto"
   },
   {
    "type": "tippen",
    "answer": "Haltestelle",
    "info": "dort hält der Bus und man steigt ein",
    "emoji": "🚏",
    "w": "die Haltestelle",
    "explain": "🚏 die Haltestelle"
   },
   {
    "type": "tippen",
    "answer": "Bahnhof",
    "info": "dort fahren die Züge ab",
    "emoji": "🚉",
    "w": "der Bahnhof",
    "explain": "🚉 der Bahnhof"
   },
   {
    "type": "tippen",
    "answer": "Fahrkarte",
    "info": "man braucht sie, um mitzufahren",
    "emoji": "🎫",
    "w": "die Fahrkarte",
    "explain": "🎫 die Fahrkarte"
   },
   {
    "type": "tippen",
    "answer": "Straße",
    "info": "dort fahren die Autos",
    "emoji": "🛣️",
    "w": "die Straße",
    "explain": "🛣️ die Straße"
   },
   {
    "type": "tippen",
    "answer": "links",
    "info": "die Seite, auf der bei den meisten das Herz ist",
    "emoji": "⬅️",
    "w": "links",
    "explain": "⬅️ links"
   },
   {
    "type": "tippen",
    "answer": "rechts",
    "info": "die andere Seite, nicht links",
    "emoji": "➡️",
    "w": "rechts",
    "explain": "➡️ rechts"
   },
   {
    "type": "tippen",
    "answer": "geradeaus",
    "info": "immer weiter nach vorn, ohne abzubiegen",
    "emoji": "⬆️",
    "w": "geradeaus",
    "explain": "⬆️ geradeaus"
   },
   {
    "type": "tippen",
    "answer": "Ampel",
    "info": "sie zeigt rot, gelb und grün",
    "emoji": "🚦",
    "w": "die Ampel",
    "explain": "🚦 die Ampel"
   },
   {
    "type": "tippen",
    "answer": "umsteigen",
    "info": "aus einem Bus aussteigen und in einen anderen einsteigen",
    "emoji": "🔄",
    "w": "umsteigen",
    "explain": "🔄 umsteigen"
   },
   {
    "type": "tippen",
    "answer": "aussteigen",
    "info": "aus dem Bus oder der Bahn herausgehen",
    "emoji": "🚪",
    "w": "aussteigen",
    "explain": "🚪 aussteigen"
   },
   {
    "type": "tippen",
    "answer": "zu Fuß",
    "info": "ohne Auto oder Bus, man geht selbst",
    "emoji": "🚶",
    "w": "zu Fuß",
    "explain": "🚶 zu Fuß"
   },
   {
    "type": "tippen",
    "answer": "Fahrt",
    "info": "der Weg von hier nach dort mit Bus, Bahn oder Auto",
    "emoji": "🧭",
    "w": "die Fahrt",
    "explain": "🧭 die Fahrt"
   },
   {
    "type": "order",
    "answer": "Ich fahre mit dem Bus zur Arbeit",
    "hint": "Erst wer, dann das Verb, dann womit.",
    "explain": "mit plus Dativ: mit dem Bus, mit der Bahn."
   },
   {
    "type": "order",
    "answer": "Gehen Sie hier bitte geradeaus",
    "hint": "Bei einer Bitte steht das Verb zuerst.",
    "explain": "Höfliche Aufforderung mit Sie: Gehen Sie …"
   },
   {
    "type": "order",
    "answer": "An der Ampel müssen Sie links gehen",
    "hint": "Nach der Ortsangabe kommt das Verb.",
    "explain": "Steht die Ortsangabe vorn, folgt sofort das Modalverb."
   },
   {
    "type": "order",
    "answer": "Ich steige am Bahnhof um",
    "hint": "Trennbares Verb: Der zweite Teil geht ans Ende.",
    "explain": "umsteigen ist trennbar: Ich steige … um."
   },
   {
    "type": "order",
    "answer": "Die Fahrkarte kostet drei Euro",
    "hint": "Erst das Subjekt, dann das Verb.",
    "explain": "kosten steht mit dem Akkusativ: Sie kostet drei Euro."
   },
   {
    "type": "match",
    "intro": "Ordne Wort und Bedeutung zu:",
    "pairs": [
     {
      "l": "der Bus",
      "r": "damit fährt man in der Stadt, er hat viele Sitze"
     },
     {
      "l": "die Bahn",
      "r": "sie fährt auf Schienen"
     },
     {
      "l": "das Fahrrad",
      "r": "es hat zwei Räder, man tritt in die Pedale"
     },
     {
      "l": "das Auto",
      "r": "es hat vier Räder und einen Motor"
     }
    ]
   },
   {
    "type": "match",
    "intro": "Ordne Wort und Bedeutung zu:",
    "pairs": [
     {
      "l": "die Haltestelle",
      "r": "dort hält der Bus und man steigt ein"
     },
     {
      "l": "der Bahnhof",
      "r": "dort fahren die Züge ab"
     },
     {
      "l": "die Fahrkarte",
      "r": "man braucht sie, um mitzufahren"
     },
     {
      "l": "die Straße",
      "r": "dort fahren die Autos"
     }
    ]
   },
   {
    "type": "match",
    "intro": "Ordne Wort und Bedeutung zu:",
    "pairs": [
     {
      "l": "links",
      "r": "die Seite, auf der bei den meisten das Herz ist"
     },
     {
      "l": "rechts",
      "r": "die andere Seite, nicht links"
     },
     {
      "l": "geradeaus",
      "r": "immer weiter nach vorn, ohne abzubiegen"
     },
     {
      "l": "die Ampel",
      "r": "sie zeigt rot, gelb und grün"
     }
    ]
   },
   {
    "type": "match",
    "intro": "Ordne Wort und Bedeutung zu:",
    "pairs": [
     {
      "l": "umsteigen",
      "r": "aus einem Bus aussteigen und in einen anderen einsteigen"
     },
     {
      "l": "aussteigen",
      "r": "aus dem Bus oder der Bahn herausgehen"
     },
     {
      "l": "zu Fuß",
      "r": "ohne Auto oder Bus, man geht selbst"
     },
     {
      "l": "die Fahrt",
      "r": "der Weg von hier nach dort mit Bus, Bahn oder Auto"
     }
    ]
   },
   {
    "type": "fehler",
    "satz": "Ich fahre mit der Bus zur Arbeit.",
    "falsch": "der",
    "richtig": "Ich fahre mit dem Bus zur Arbeit.",
    "explain": "Nach mit steht der Dativ: mit dem Bus."
   },
   {
    "type": "fehler",
    "satz": "Am Bahnhof steige ich um in die S-Bahn.",
    "falsch": "um",
    "richtig": "Am Bahnhof steige ich in die S-Bahn um.",
    "explain": "Das Präfix um gehört ans Ende des Satzes."
   },
   {
    "type": "fehler",
    "satz": "Gehen Sie geradeaus und dann Sie gehen links.",
    "falsch": "Sie",
    "richtig": "Gehen Sie geradeaus und dann gehen Sie links.",
    "explain": "Nach dann steht das Verb, erst danach das Subjekt.",
    "falschIdx": 5
   },
   {
    "type": "schreiben",
    "auftrag": "Jemand fragt nach dem Weg zum Bahnhof. Erklär den Weg in drei bis vier Sätzen.",
    "muster": "Gehen Sie hier geradeaus bis zur Ampel. Dann gehen Sie rechts in die Bahnhofstraße. Nach etwa fünf Minuten sehen Sie den Bahnhof auf der linken Seite. Es sind ungefähr zehn Minuten zu Fuß.",
    "tipp": "Wegbeschreibungen bestehen aus geradeaus, links, rechts und bis zur."
   },
   {
    "type": "schreiben",
    "auftrag": "Beschreib in drei Sätzen, wie du morgens zur Arbeit oder zum Kurs kommst.",
    "muster": "Ich fahre morgens mit dem Fahrrad bis zur Haltestelle. Dort nehme ich den Bus und steige am Bahnhof um. Die ganze Fahrt dauert etwa vierzig Minuten.",
    "tipp": "mit dem Fahrrad, mit dem Bus, mit der Bahn — nach mit immer Dativ."
   }
  ]
 }
];
  var ziel = null;
  (window.UEBUNGEN.skills || []).forEach(function (s) { if (!ziel && s.id === 'wortschatz') ziel = s; });
  if (!ziel) ziel = window.UEBUNGEN.skills[0];
  if (!ziel) return;
  /* Vor die A2-Themen, damit A1 im Bereich zuerst steht. */
  var a1 = [], rest = [];
  (ziel.themes || []).forEach(function (t) { (String(t.level||'').indexOf('A1')===0 ? a1 : rest).push(t); });
  ziel.themes = a1.concat(THEMEN, rest);
})();
