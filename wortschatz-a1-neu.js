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
 },
 {
  "id": "a1-beruf",
  "title": "Arbeit & Beruf",
  "level": "A1",
  "emoji": "💼",
  "words": [
   {
    "de": "die Arbeit",
    "info": "das, wofür man Geld bekommt",
    "emoji": "💼"
   },
   {
    "de": "der Beruf",
    "info": "das, was man gelernt hat und macht",
    "emoji": "🧑‍🔧"
   },
   {
    "de": "das Büro",
    "info": "der Raum, in dem man am Schreibtisch arbeitet",
    "emoji": "🏢"
   },
   {
    "de": "die Kollegin",
    "info": "die Frau, mit der man zusammenarbeitet",
    "emoji": "👩‍💼"
   },
   {
    "de": "der Chef",
    "info": "er sagt, was zu tun ist",
    "emoji": "🧑‍💼"
   },
   {
    "de": "die Pause",
    "info": "die kurze Zeit ohne Arbeit",
    "emoji": "☕"
   },
   {
    "de": "der Lohn",
    "info": "das Geld für die Arbeit",
    "emoji": "💶"
   },
   {
    "de": "der Urlaub",
    "info": "die freien Tage im Jahr",
    "emoji": "🏝️"
   },
   {
    "de": "die Schicht",
    "info": "die feste Arbeitszeit, zum Beispiel nachts",
    "emoji": "🕗"
   },
   {
    "de": "die Bewerbung",
    "info": "die Unterlagen, mit denen man eine Stelle sucht",
    "emoji": "📄"
   },
   {
    "de": "die Stelle",
    "info": "der Arbeitsplatz, den man sucht oder hat",
    "emoji": "📌"
   },
   {
    "de": "arbeiten",
    "info": "etwas tun, wofür man Geld bekommt",
    "emoji": "🛠️"
   },
   {
    "de": "verdienen",
    "info": "Geld für die Arbeit bekommen",
    "emoji": "💰"
   },
   {
    "de": "anfangen",
    "info": "mit etwas beginnen",
    "emoji": "▶️"
   },
   {
    "de": "aufhören",
    "info": "mit etwas Schluss machen",
    "emoji": "⏹️"
   },
   {
    "de": "der Feierabend",
    "info": "das Ende der Arbeitszeit",
    "emoji": "🌆"
   }
  ],
  "exercises": [
   {
    "type": "karte",
    "w": "die Arbeit",
    "info": "das, wofür man Geld bekommt",
    "emoji": "💼"
   },
   {
    "type": "karte",
    "w": "der Beruf",
    "info": "das, was man gelernt hat und macht",
    "emoji": "🧑‍🔧"
   },
   {
    "type": "karte",
    "w": "das Büro",
    "info": "der Raum, in dem man am Schreibtisch arbeitet",
    "emoji": "🏢"
   },
   {
    "type": "karte",
    "w": "die Kollegin",
    "info": "die Frau, mit der man zusammenarbeitet",
    "emoji": "👩‍💼"
   },
   {
    "type": "karte",
    "w": "der Chef",
    "info": "er sagt, was zu tun ist",
    "emoji": "🧑‍💼"
   },
   {
    "type": "karte",
    "w": "die Pause",
    "info": "die kurze Zeit ohne Arbeit",
    "emoji": "☕"
   },
   {
    "type": "karte",
    "w": "der Lohn",
    "info": "das Geld für die Arbeit",
    "emoji": "💶"
   },
   {
    "type": "karte",
    "w": "der Urlaub",
    "info": "die freien Tage im Jahr",
    "emoji": "🏝️"
   },
   {
    "type": "karte",
    "w": "die Schicht",
    "info": "die feste Arbeitszeit, zum Beispiel nachts",
    "emoji": "🕗"
   },
   {
    "type": "karte",
    "w": "die Bewerbung",
    "info": "die Unterlagen, mit denen man eine Stelle sucht",
    "emoji": "📄"
   },
   {
    "type": "karte",
    "w": "die Stelle",
    "info": "der Arbeitsplatz, den man sucht oder hat",
    "emoji": "📌"
   },
   {
    "type": "karte",
    "w": "arbeiten",
    "info": "etwas tun, wofür man Geld bekommt",
    "emoji": "🛠️"
   },
   {
    "type": "karte",
    "w": "verdienen",
    "info": "Geld für die Arbeit bekommen",
    "emoji": "💰"
   },
   {
    "type": "karte",
    "w": "anfangen",
    "info": "mit etwas beginnen",
    "emoji": "▶️"
   },
   {
    "type": "karte",
    "w": "aufhören",
    "info": "mit etwas Schluss machen",
    "emoji": "⏹️"
   },
   {
    "type": "karte",
    "w": "der Feierabend",
    "info": "das Ende der Arbeitszeit",
    "emoji": "🌆"
   },
   {
    "type": "choice",
    "q": "Welches Wort passt: „das, wofür man Geld bekommt“?",
    "options": [
     "die Arbeit",
     "die Kollegin",
     "der Urlaub",
     "arbeiten"
    ],
    "answer": 0,
    "w": "die Arbeit",
    "explain": "💼 die Arbeit — das, wofür man Geld bekommt"
   },
   {
    "type": "choice",
    "q": "Welches Wort passt: „das, was man gelernt hat und macht“?",
    "options": [
     "der Beruf",
     "der Chef",
     "die Schicht",
     "verdienen"
    ],
    "answer": 0,
    "w": "der Beruf",
    "explain": "🧑‍🔧 der Beruf — das, was man gelernt hat und macht"
   },
   {
    "type": "choice",
    "q": "Welches Wort passt: „der Raum, in dem man am Schreibtisch arbeitet“?",
    "options": [
     "das Büro",
     "die Pause",
     "die Bewerbung",
     "anfangen"
    ],
    "answer": 0,
    "w": "das Büro",
    "explain": "🏢 das Büro — der Raum, in dem man am Schreibtisch arbeitet"
   },
   {
    "type": "choice",
    "q": "Welches Wort passt: „die Frau, mit der man zusammenarbeitet“?",
    "options": [
     "die Kollegin",
     "der Lohn",
     "die Stelle",
     "aufhören"
    ],
    "answer": 0,
    "w": "die Kollegin",
    "explain": "👩‍💼 die Kollegin — die Frau, mit der man zusammenarbeitet"
   },
   {
    "type": "choice",
    "q": "Welches Wort passt: „er sagt, was zu tun ist“?",
    "options": [
     "der Chef",
     "der Urlaub",
     "arbeiten",
     "der Feierabend"
    ],
    "answer": 0,
    "w": "der Chef",
    "explain": "🧑‍💼 der Chef — er sagt, was zu tun ist"
   },
   {
    "type": "choice",
    "q": "Welches Wort passt: „die kurze Zeit ohne Arbeit“?",
    "options": [
     "die Pause",
     "die Schicht",
     "verdienen",
     "die Arbeit"
    ],
    "answer": 0,
    "w": "die Pause",
    "explain": "☕ die Pause — die kurze Zeit ohne Arbeit"
   },
   {
    "type": "choice",
    "q": "Welches Wort passt: „das Geld für die Arbeit“?",
    "options": [
     "der Lohn",
     "die Bewerbung",
     "anfangen",
     "der Beruf"
    ],
    "answer": 0,
    "w": "der Lohn",
    "explain": "💶 der Lohn — das Geld für die Arbeit"
   },
   {
    "type": "choice",
    "q": "Welches Wort passt: „die freien Tage im Jahr“?",
    "options": [
     "der Urlaub",
     "die Stelle",
     "aufhören",
     "das Büro"
    ],
    "answer": 0,
    "w": "der Urlaub",
    "explain": "🏝️ der Urlaub — die freien Tage im Jahr"
   },
   {
    "type": "choice",
    "q": "Welches Wort passt: „die feste Arbeitszeit, zum Beispiel nachts“?",
    "options": [
     "die Schicht",
     "arbeiten",
     "der Feierabend",
     "die Kollegin"
    ],
    "answer": 0,
    "w": "die Schicht",
    "explain": "🕗 die Schicht — die feste Arbeitszeit, zum Beispiel nachts"
   },
   {
    "type": "choice",
    "q": "Welches Wort passt: „die Unterlagen, mit denen man eine Stelle sucht“?",
    "options": [
     "die Bewerbung",
     "verdienen",
     "die Arbeit",
     "der Chef"
    ],
    "answer": 0,
    "w": "die Bewerbung",
    "explain": "📄 die Bewerbung — die Unterlagen, mit denen man eine Stelle sucht"
   },
   {
    "type": "choice",
    "q": "Welches Wort passt: „der Arbeitsplatz, den man sucht oder hat“?",
    "options": [
     "die Stelle",
     "anfangen",
     "der Beruf",
     "die Pause"
    ],
    "answer": 0,
    "w": "die Stelle",
    "explain": "📌 die Stelle — der Arbeitsplatz, den man sucht oder hat"
   },
   {
    "type": "choice",
    "q": "Welches Wort passt: „etwas tun, wofür man Geld bekommt“?",
    "options": [
     "arbeiten",
     "aufhören",
     "das Büro",
     "der Lohn"
    ],
    "answer": 0,
    "w": "arbeiten",
    "explain": "🛠️ arbeiten — etwas tun, wofür man Geld bekommt"
   },
   {
    "type": "choice",
    "q": "Welches Wort passt: „Geld für die Arbeit bekommen“?",
    "options": [
     "verdienen",
     "der Feierabend",
     "die Kollegin",
     "der Urlaub"
    ],
    "answer": 0,
    "w": "verdienen",
    "explain": "💰 verdienen — Geld für die Arbeit bekommen"
   },
   {
    "type": "choice",
    "q": "Welches Wort passt: „mit etwas beginnen“?",
    "options": [
     "anfangen",
     "die Arbeit",
     "der Chef",
     "die Schicht"
    ],
    "answer": 0,
    "w": "anfangen",
    "explain": "▶️ anfangen — mit etwas beginnen"
   },
   {
    "type": "choice",
    "q": "Welches Wort passt: „mit etwas Schluss machen“?",
    "options": [
     "aufhören",
     "der Beruf",
     "die Pause",
     "die Bewerbung"
    ],
    "answer": 0,
    "w": "aufhören",
    "explain": "⏹️ aufhören — mit etwas Schluss machen"
   },
   {
    "type": "choice",
    "q": "Welches Wort passt: „das Ende der Arbeitszeit“?",
    "options": [
     "der Feierabend",
     "das Büro",
     "der Lohn",
     "die Stelle"
    ],
    "answer": 0,
    "w": "der Feierabend",
    "explain": "🌆 der Feierabend — das Ende der Arbeitszeit"
   },
   {
    "type": "gap",
    "text": "___ Arbeit",
    "answer": "die",
    "hint": "der / die / das?",
    "w": "die Arbeit",
    "explain": "Es heißt die Arbeit — das, wofür man Geld bekommt"
   },
   {
    "type": "gap",
    "text": "___ Beruf",
    "answer": "der",
    "hint": "der / die / das?",
    "w": "der Beruf",
    "explain": "Es heißt der Beruf — das, was man gelernt hat und macht"
   },
   {
    "type": "gap",
    "text": "___ Büro",
    "answer": "das",
    "hint": "der / die / das?",
    "w": "das Büro",
    "explain": "Es heißt das Büro — der Raum, in dem man am Schreibtisch arbeitet"
   },
   {
    "type": "gap",
    "text": "___ Kollegin",
    "answer": "die",
    "hint": "der / die / das?",
    "w": "die Kollegin",
    "explain": "Es heißt die Kollegin — die Frau, mit der man zusammenarbeitet"
   },
   {
    "type": "gap",
    "text": "___ Chef",
    "answer": "der",
    "hint": "der / die / das?",
    "w": "der Chef",
    "explain": "Es heißt der Chef — er sagt, was zu tun ist"
   },
   {
    "type": "gap",
    "text": "___ Pause",
    "answer": "die",
    "hint": "der / die / das?",
    "w": "die Pause",
    "explain": "Es heißt die Pause — die kurze Zeit ohne Arbeit"
   },
   {
    "type": "gap",
    "text": "___ Lohn",
    "answer": "der",
    "hint": "der / die / das?",
    "w": "der Lohn",
    "explain": "Es heißt der Lohn — das Geld für die Arbeit"
   },
   {
    "type": "gap",
    "text": "___ Urlaub",
    "answer": "der",
    "hint": "der / die / das?",
    "w": "der Urlaub",
    "explain": "Es heißt der Urlaub — die freien Tage im Jahr"
   },
   {
    "type": "gap",
    "text": "___ Schicht",
    "answer": "die",
    "hint": "der / die / das?",
    "w": "die Schicht",
    "explain": "Es heißt die Schicht — die feste Arbeitszeit, zum Beispiel nachts"
   },
   {
    "type": "gap",
    "text": "___ Bewerbung",
    "answer": "die",
    "hint": "der / die / das?",
    "w": "die Bewerbung",
    "explain": "Es heißt die Bewerbung — die Unterlagen, mit denen man eine Stelle sucht"
   },
   {
    "type": "gap",
    "text": "___ Stelle",
    "answer": "die",
    "hint": "der / die / das?",
    "w": "die Stelle",
    "explain": "Es heißt die Stelle — der Arbeitsplatz, den man sucht oder hat"
   },
   {
    "type": "gap",
    "text": "___ Feierabend",
    "answer": "der",
    "hint": "der / die / das?",
    "w": "der Feierabend",
    "explain": "Es heißt der Feierabend — das Ende der Arbeitszeit"
   },
   {
    "type": "tippen",
    "answer": "Arbeit",
    "info": "das, wofür man Geld bekommt",
    "emoji": "💼",
    "w": "die Arbeit",
    "explain": "💼 die Arbeit"
   },
   {
    "type": "tippen",
    "answer": "Beruf",
    "info": "das, was man gelernt hat und macht",
    "emoji": "🧑‍🔧",
    "w": "der Beruf",
    "explain": "🧑‍🔧 der Beruf"
   },
   {
    "type": "tippen",
    "answer": "Büro",
    "info": "der Raum, in dem man am Schreibtisch arbeitet",
    "emoji": "🏢",
    "w": "das Büro",
    "explain": "🏢 das Büro"
   },
   {
    "type": "tippen",
    "answer": "Kollegin",
    "info": "die Frau, mit der man zusammenarbeitet",
    "emoji": "👩‍💼",
    "w": "die Kollegin",
    "explain": "👩‍💼 die Kollegin"
   },
   {
    "type": "tippen",
    "answer": "Chef",
    "info": "er sagt, was zu tun ist",
    "emoji": "🧑‍💼",
    "w": "der Chef",
    "explain": "🧑‍💼 der Chef"
   },
   {
    "type": "tippen",
    "answer": "Pause",
    "info": "die kurze Zeit ohne Arbeit",
    "emoji": "☕",
    "w": "die Pause",
    "explain": "☕ die Pause"
   },
   {
    "type": "tippen",
    "answer": "Lohn",
    "info": "das Geld für die Arbeit",
    "emoji": "💶",
    "w": "der Lohn",
    "explain": "💶 der Lohn"
   },
   {
    "type": "tippen",
    "answer": "Urlaub",
    "info": "die freien Tage im Jahr",
    "emoji": "🏝️",
    "w": "der Urlaub",
    "explain": "🏝️ der Urlaub"
   },
   {
    "type": "tippen",
    "answer": "Schicht",
    "info": "die feste Arbeitszeit, zum Beispiel nachts",
    "emoji": "🕗",
    "w": "die Schicht",
    "explain": "🕗 die Schicht"
   },
   {
    "type": "tippen",
    "answer": "Bewerbung",
    "info": "die Unterlagen, mit denen man eine Stelle sucht",
    "emoji": "📄",
    "w": "die Bewerbung",
    "explain": "📄 die Bewerbung"
   },
   {
    "type": "tippen",
    "answer": "Stelle",
    "info": "der Arbeitsplatz, den man sucht oder hat",
    "emoji": "📌",
    "w": "die Stelle",
    "explain": "📌 die Stelle"
   },
   {
    "type": "tippen",
    "answer": "arbeiten",
    "info": "etwas tun, wofür man Geld bekommt",
    "emoji": "🛠️",
    "w": "arbeiten",
    "explain": "🛠️ arbeiten"
   },
   {
    "type": "tippen",
    "answer": "verdienen",
    "info": "Geld für die Arbeit bekommen",
    "emoji": "💰",
    "w": "verdienen",
    "explain": "💰 verdienen"
   },
   {
    "type": "tippen",
    "answer": "anfangen",
    "info": "mit etwas beginnen",
    "emoji": "▶️",
    "w": "anfangen",
    "explain": "▶️ anfangen"
   },
   {
    "type": "tippen",
    "answer": "aufhören",
    "info": "mit etwas Schluss machen",
    "emoji": "⏹️",
    "w": "aufhören",
    "explain": "⏹️ aufhören"
   },
   {
    "type": "tippen",
    "answer": "Feierabend",
    "info": "das Ende der Arbeitszeit",
    "emoji": "🌆",
    "w": "der Feierabend",
    "explain": "🌆 der Feierabend"
   },
   {
    "type": "order",
    "answer": "Ich arbeite in einem Büro",
    "hint": "Erst wer, dann das Verb.",
    "explain": "in plus Dativ: in einem Büro."
   },
   {
    "type": "order",
    "answer": "Meine Schicht fängt um sechs Uhr an",
    "hint": "Trennbares Verb: Der zweite Teil geht ans Ende.",
    "explain": "anfangen ist trennbar: fängt … an."
   },
   {
    "type": "order",
    "answer": "Ich mache jetzt eine kurze Pause",
    "hint": "Die Zeitangabe steht vor dem Objekt.",
    "explain": "eine Pause machen — feste Verbindung."
   },
   {
    "type": "order",
    "answer": "Nächste Woche habe ich Urlaub",
    "hint": "Nach der Zeitangabe kommt das Verb.",
    "explain": "Steht die Zeitangabe vorn, folgt sofort das Verb: habe ich."
   },
   {
    "type": "order",
    "answer": "Ich schicke morgen meine Bewerbung ab",
    "hint": "Trennbares Verb: Der zweite Teil geht ans Ende.",
    "explain": "abschicken ist trennbar: schicke … ab."
   },
   {
    "type": "match",
    "intro": "Ordne Wort und Bedeutung zu:",
    "pairs": [
     {
      "l": "die Arbeit",
      "r": "das, wofür man Geld bekommt"
     },
     {
      "l": "der Beruf",
      "r": "das, was man gelernt hat und macht"
     },
     {
      "l": "das Büro",
      "r": "der Raum, in dem man am Schreibtisch arbeitet"
     },
     {
      "l": "die Kollegin",
      "r": "die Frau, mit der man zusammenarbeitet"
     }
    ]
   },
   {
    "type": "match",
    "intro": "Ordne Wort und Bedeutung zu:",
    "pairs": [
     {
      "l": "der Chef",
      "r": "er sagt, was zu tun ist"
     },
     {
      "l": "die Pause",
      "r": "die kurze Zeit ohne Arbeit"
     },
     {
      "l": "der Lohn",
      "r": "das Geld für die Arbeit"
     },
     {
      "l": "der Urlaub",
      "r": "die freien Tage im Jahr"
     }
    ]
   },
   {
    "type": "match",
    "intro": "Ordne Wort und Bedeutung zu:",
    "pairs": [
     {
      "l": "die Schicht",
      "r": "die feste Arbeitszeit, zum Beispiel nachts"
     },
     {
      "l": "die Bewerbung",
      "r": "die Unterlagen, mit denen man eine Stelle sucht"
     },
     {
      "l": "die Stelle",
      "r": "der Arbeitsplatz, den man sucht oder hat"
     },
     {
      "l": "arbeiten",
      "r": "etwas tun, wofür man Geld bekommt"
     }
    ]
   },
   {
    "type": "match",
    "intro": "Ordne Wort und Bedeutung zu:",
    "pairs": [
     {
      "l": "verdienen",
      "r": "Geld für die Arbeit bekommen"
     },
     {
      "l": "anfangen",
      "r": "mit etwas beginnen"
     },
     {
      "l": "aufhören",
      "r": "mit etwas Schluss machen"
     },
     {
      "l": "der Feierabend",
      "r": "das Ende der Arbeitszeit"
     }
    ]
   },
   {
    "type": "fehler",
    "satz": "Ich arbeite in ein Büro.",
    "falsch": "ein",
    "richtig": "Ich arbeite in einem Büro.",
    "explain": "Auf die Frage wo? steht nach in der Dativ: in einem Büro."
   },
   {
    "type": "fehler",
    "satz": "Meine Schicht anfängt um sechs Uhr.",
    "falsch": "anfängt",
    "richtig": "Meine Schicht fängt um sechs Uhr an.",
    "explain": "Bei trennbaren Verben bleibt nur der Verbteil auf Platz zwei, das Präfix geht ans Ende."
   },
   {
    "type": "fehler",
    "satz": "Ich habe nächste Woche frei, ich fahre zu Urlaub.",
    "falsch": "zu",
    "richtig": "Ich habe nächste Woche frei, ich fahre in Urlaub.",
    "explain": "Es heißt in Urlaub fahren, nicht zu Urlaub."
   },
   {
    "type": "schreiben",
    "auftrag": "Stell dich in drei Sätzen vor: Name, Beruf, wo du arbeitest.",
    "muster": "Ich heiße Fatima und komme aus Marokko. Von Beruf bin ich Krankenschwester. Seit zwei Jahren arbeite ich in einem Krankenhaus in Bremen.",
    "tipp": "Von Beruf bin ich … — hier steht kein Artikel vor dem Beruf."
   },
   {
    "type": "schreiben",
    "auftrag": "Schreib deiner Kollegin, dass du heute später kommst. Zwei bis drei Sätze.",
    "muster": "Hallo Sarah, mein Bus hat Verspätung, ich komme heute ungefähr zwanzig Minuten später. Kannst du bitte kurz Bescheid sagen, wenn der Chef fragt? Danke dir!",
    "tipp": "Grund, neue Zeit, Bitte — mehr braucht eine kurze Nachricht nicht."
   }
  ]
 },
 {
  "id": "a1-freizeit",
  "title": "Freizeit & Hobbys",
  "level": "A1",
  "emoji": "⚽",
  "words": [
   {
    "de": "die Freizeit",
    "info": "die Zeit, in der man nicht arbeitet",
    "emoji": "🛋️"
   },
   {
    "de": "das Hobby",
    "info": "das, was man gern in der Freizeit macht",
    "emoji": "🎨"
   },
   {
    "de": "der Sport",
    "info": "Bewegung, zum Beispiel Laufen oder Fußball",
    "emoji": "🏃"
   },
   {
    "de": "die Musik",
    "info": "Töne, die man hört oder selbst macht",
    "emoji": "🎵"
   },
   {
    "de": "das Buch",
    "info": "man liest es, es hat viele Seiten",
    "emoji": "📚"
   },
   {
    "de": "der Film",
    "info": "man sieht ihn im Kino oder zu Hause",
    "emoji": "🎬"
   },
   {
    "de": "das Spiel",
    "info": "man spielt es allein oder mit anderen",
    "emoji": "🎲"
   },
   {
    "de": "der Freund",
    "info": "ein Mensch, den man gern hat und oft trifft",
    "emoji": "🧑‍🤝‍🧑"
   },
   {
    "de": "das Café",
    "info": "dort trinkt man Kaffee und sitzt zusammen",
    "emoji": "☕"
   },
   {
    "de": "der Park",
    "info": "eine grüne Fläche in der Stadt",
    "emoji": "🌳"
   },
   {
    "de": "das Wochenende",
    "info": "Samstag und Sonntag",
    "emoji": "📆"
   },
   {
    "de": "spielen",
    "info": "ein Spiel oder ein Instrument machen",
    "emoji": "🎮"
   },
   {
    "de": "lesen",
    "info": "Buchstaben ansehen und verstehen",
    "emoji": "👓"
   },
   {
    "de": "treffen",
    "info": "mit jemandem zusammenkommen",
    "emoji": "🤝"
   },
   {
    "de": "schwimmen",
    "info": "sich im Wasser bewegen",
    "emoji": "🏊"
   },
   {
    "de": "spazieren gehen",
    "info": "langsam gehen, ohne Ziel",
    "emoji": "🚶"
   }
  ],
  "exercises": [
   {
    "type": "karte",
    "w": "die Freizeit",
    "info": "die Zeit, in der man nicht arbeitet",
    "emoji": "🛋️"
   },
   {
    "type": "karte",
    "w": "das Hobby",
    "info": "das, was man gern in der Freizeit macht",
    "emoji": "🎨"
   },
   {
    "type": "karte",
    "w": "der Sport",
    "info": "Bewegung, zum Beispiel Laufen oder Fußball",
    "emoji": "🏃"
   },
   {
    "type": "karte",
    "w": "die Musik",
    "info": "Töne, die man hört oder selbst macht",
    "emoji": "🎵"
   },
   {
    "type": "karte",
    "w": "das Buch",
    "info": "man liest es, es hat viele Seiten",
    "emoji": "📚"
   },
   {
    "type": "karte",
    "w": "der Film",
    "info": "man sieht ihn im Kino oder zu Hause",
    "emoji": "🎬"
   },
   {
    "type": "karte",
    "w": "das Spiel",
    "info": "man spielt es allein oder mit anderen",
    "emoji": "🎲"
   },
   {
    "type": "karte",
    "w": "der Freund",
    "info": "ein Mensch, den man gern hat und oft trifft",
    "emoji": "🧑‍🤝‍🧑"
   },
   {
    "type": "karte",
    "w": "das Café",
    "info": "dort trinkt man Kaffee und sitzt zusammen",
    "emoji": "☕"
   },
   {
    "type": "karte",
    "w": "der Park",
    "info": "eine grüne Fläche in der Stadt",
    "emoji": "🌳"
   },
   {
    "type": "karte",
    "w": "das Wochenende",
    "info": "Samstag und Sonntag",
    "emoji": "📆"
   },
   {
    "type": "karte",
    "w": "spielen",
    "info": "ein Spiel oder ein Instrument machen",
    "emoji": "🎮"
   },
   {
    "type": "karte",
    "w": "lesen",
    "info": "Buchstaben ansehen und verstehen",
    "emoji": "👓"
   },
   {
    "type": "karte",
    "w": "treffen",
    "info": "mit jemandem zusammenkommen",
    "emoji": "🤝"
   },
   {
    "type": "karte",
    "w": "schwimmen",
    "info": "sich im Wasser bewegen",
    "emoji": "🏊"
   },
   {
    "type": "karte",
    "w": "spazieren gehen",
    "info": "langsam gehen, ohne Ziel",
    "emoji": "🚶"
   },
   {
    "type": "choice",
    "q": "Welches Wort passt: „die Zeit, in der man nicht arbeitet“?",
    "options": [
     "die Freizeit",
     "die Musik",
     "der Freund",
     "spielen"
    ],
    "answer": 0,
    "w": "die Freizeit",
    "explain": "🛋️ die Freizeit — die Zeit, in der man nicht arbeitet"
   },
   {
    "type": "choice",
    "q": "Welches Wort passt: „das, was man gern in der Freizeit macht“?",
    "options": [
     "das Hobby",
     "das Buch",
     "das Café",
     "lesen"
    ],
    "answer": 0,
    "w": "das Hobby",
    "explain": "🎨 das Hobby — das, was man gern in der Freizeit macht"
   },
   {
    "type": "choice",
    "q": "Welches Wort passt: „Bewegung, zum Beispiel Laufen oder Fußball“?",
    "options": [
     "der Sport",
     "der Film",
     "der Park",
     "treffen"
    ],
    "answer": 0,
    "w": "der Sport",
    "explain": "🏃 der Sport — Bewegung, zum Beispiel Laufen oder Fußball"
   },
   {
    "type": "choice",
    "q": "Welches Wort passt: „Töne, die man hört oder selbst macht“?",
    "options": [
     "die Musik",
     "das Spiel",
     "das Wochenende",
     "schwimmen"
    ],
    "answer": 0,
    "w": "die Musik",
    "explain": "🎵 die Musik — Töne, die man hört oder selbst macht"
   },
   {
    "type": "choice",
    "q": "Welches Wort passt: „man liest es, es hat viele Seiten“?",
    "options": [
     "das Buch",
     "der Freund",
     "spielen",
     "spazieren gehen"
    ],
    "answer": 0,
    "w": "das Buch",
    "explain": "📚 das Buch — man liest es, es hat viele Seiten"
   },
   {
    "type": "choice",
    "q": "Welches Wort passt: „man sieht ihn im Kino oder zu Hause“?",
    "options": [
     "der Film",
     "das Café",
     "lesen",
     "die Freizeit"
    ],
    "answer": 0,
    "w": "der Film",
    "explain": "🎬 der Film — man sieht ihn im Kino oder zu Hause"
   },
   {
    "type": "choice",
    "q": "Welches Wort passt: „man spielt es allein oder mit anderen“?",
    "options": [
     "das Spiel",
     "der Park",
     "treffen",
     "das Hobby"
    ],
    "answer": 0,
    "w": "das Spiel",
    "explain": "🎲 das Spiel — man spielt es allein oder mit anderen"
   },
   {
    "type": "choice",
    "q": "Welches Wort passt: „ein Mensch, den man gern hat und oft trifft“?",
    "options": [
     "der Freund",
     "das Wochenende",
     "schwimmen",
     "der Sport"
    ],
    "answer": 0,
    "w": "der Freund",
    "explain": "🧑‍🤝‍🧑 der Freund — ein Mensch, den man gern hat und oft trifft"
   },
   {
    "type": "choice",
    "q": "Welches Wort passt: „dort trinkt man Kaffee und sitzt zusammen“?",
    "options": [
     "das Café",
     "spielen",
     "spazieren gehen",
     "die Musik"
    ],
    "answer": 0,
    "w": "das Café",
    "explain": "☕ das Café — dort trinkt man Kaffee und sitzt zusammen"
   },
   {
    "type": "choice",
    "q": "Welches Wort passt: „eine grüne Fläche in der Stadt“?",
    "options": [
     "der Park",
     "lesen",
     "die Freizeit",
     "das Buch"
    ],
    "answer": 0,
    "w": "der Park",
    "explain": "🌳 der Park — eine grüne Fläche in der Stadt"
   },
   {
    "type": "choice",
    "q": "Welches Wort passt: „Samstag und Sonntag“?",
    "options": [
     "das Wochenende",
     "treffen",
     "das Hobby",
     "der Film"
    ],
    "answer": 0,
    "w": "das Wochenende",
    "explain": "📆 das Wochenende — Samstag und Sonntag"
   },
   {
    "type": "choice",
    "q": "Welches Wort passt: „ein Spiel oder ein Instrument machen“?",
    "options": [
     "spielen",
     "schwimmen",
     "der Sport",
     "das Spiel"
    ],
    "answer": 0,
    "w": "spielen",
    "explain": "🎮 spielen — ein Spiel oder ein Instrument machen"
   },
   {
    "type": "choice",
    "q": "Welches Wort passt: „Buchstaben ansehen und verstehen“?",
    "options": [
     "lesen",
     "spazieren gehen",
     "die Musik",
     "der Freund"
    ],
    "answer": 0,
    "w": "lesen",
    "explain": "👓 lesen — Buchstaben ansehen und verstehen"
   },
   {
    "type": "choice",
    "q": "Welches Wort passt: „mit jemandem zusammenkommen“?",
    "options": [
     "treffen",
     "die Freizeit",
     "das Buch",
     "das Café"
    ],
    "answer": 0,
    "w": "treffen",
    "explain": "🤝 treffen — mit jemandem zusammenkommen"
   },
   {
    "type": "choice",
    "q": "Welches Wort passt: „sich im Wasser bewegen“?",
    "options": [
     "schwimmen",
     "das Hobby",
     "der Film",
     "der Park"
    ],
    "answer": 0,
    "w": "schwimmen",
    "explain": "🏊 schwimmen — sich im Wasser bewegen"
   },
   {
    "type": "choice",
    "q": "Welches Wort passt: „langsam gehen, ohne Ziel“?",
    "options": [
     "spazieren gehen",
     "der Sport",
     "das Spiel",
     "das Wochenende"
    ],
    "answer": 0,
    "w": "spazieren gehen",
    "explain": "🚶 spazieren gehen — langsam gehen, ohne Ziel"
   },
   {
    "type": "gap",
    "text": "___ Freizeit",
    "answer": "die",
    "hint": "der / die / das?",
    "w": "die Freizeit",
    "explain": "Es heißt die Freizeit — die Zeit, in der man nicht arbeitet"
   },
   {
    "type": "gap",
    "text": "___ Hobby",
    "answer": "das",
    "hint": "der / die / das?",
    "w": "das Hobby",
    "explain": "Es heißt das Hobby — das, was man gern in der Freizeit macht"
   },
   {
    "type": "gap",
    "text": "___ Sport",
    "answer": "der",
    "hint": "der / die / das?",
    "w": "der Sport",
    "explain": "Es heißt der Sport — Bewegung, zum Beispiel Laufen oder Fußball"
   },
   {
    "type": "gap",
    "text": "___ Musik",
    "answer": "die",
    "hint": "der / die / das?",
    "w": "die Musik",
    "explain": "Es heißt die Musik — Töne, die man hört oder selbst macht"
   },
   {
    "type": "gap",
    "text": "___ Buch",
    "answer": "das",
    "hint": "der / die / das?",
    "w": "das Buch",
    "explain": "Es heißt das Buch — man liest es, es hat viele Seiten"
   },
   {
    "type": "gap",
    "text": "___ Film",
    "answer": "der",
    "hint": "der / die / das?",
    "w": "der Film",
    "explain": "Es heißt der Film — man sieht ihn im Kino oder zu Hause"
   },
   {
    "type": "gap",
    "text": "___ Spiel",
    "answer": "das",
    "hint": "der / die / das?",
    "w": "das Spiel",
    "explain": "Es heißt das Spiel — man spielt es allein oder mit anderen"
   },
   {
    "type": "gap",
    "text": "___ Freund",
    "answer": "der",
    "hint": "der / die / das?",
    "w": "der Freund",
    "explain": "Es heißt der Freund — ein Mensch, den man gern hat und oft trifft"
   },
   {
    "type": "gap",
    "text": "___ Café",
    "answer": "das",
    "hint": "der / die / das?",
    "w": "das Café",
    "explain": "Es heißt das Café — dort trinkt man Kaffee und sitzt zusammen"
   },
   {
    "type": "gap",
    "text": "___ Park",
    "answer": "der",
    "hint": "der / die / das?",
    "w": "der Park",
    "explain": "Es heißt der Park — eine grüne Fläche in der Stadt"
   },
   {
    "type": "gap",
    "text": "___ Wochenende",
    "answer": "das",
    "hint": "der / die / das?",
    "w": "das Wochenende",
    "explain": "Es heißt das Wochenende — Samstag und Sonntag"
   },
   {
    "type": "tippen",
    "answer": "Freizeit",
    "info": "die Zeit, in der man nicht arbeitet",
    "emoji": "🛋️",
    "w": "die Freizeit",
    "explain": "🛋️ die Freizeit"
   },
   {
    "type": "tippen",
    "answer": "Hobby",
    "info": "das, was man gern in der Freizeit macht",
    "emoji": "🎨",
    "w": "das Hobby",
    "explain": "🎨 das Hobby"
   },
   {
    "type": "tippen",
    "answer": "Sport",
    "info": "Bewegung, zum Beispiel Laufen oder Fußball",
    "emoji": "🏃",
    "w": "der Sport",
    "explain": "🏃 der Sport"
   },
   {
    "type": "tippen",
    "answer": "Musik",
    "info": "Töne, die man hört oder selbst macht",
    "emoji": "🎵",
    "w": "die Musik",
    "explain": "🎵 die Musik"
   },
   {
    "type": "tippen",
    "answer": "Buch",
    "info": "man liest es, es hat viele Seiten",
    "emoji": "📚",
    "w": "das Buch",
    "explain": "📚 das Buch"
   },
   {
    "type": "tippen",
    "answer": "Film",
    "info": "man sieht ihn im Kino oder zu Hause",
    "emoji": "🎬",
    "w": "der Film",
    "explain": "🎬 der Film"
   },
   {
    "type": "tippen",
    "answer": "Spiel",
    "info": "man spielt es allein oder mit anderen",
    "emoji": "🎲",
    "w": "das Spiel",
    "explain": "🎲 das Spiel"
   },
   {
    "type": "tippen",
    "answer": "Freund",
    "info": "ein Mensch, den man gern hat und oft trifft",
    "emoji": "🧑‍🤝‍🧑",
    "w": "der Freund",
    "explain": "🧑‍🤝‍🧑 der Freund"
   },
   {
    "type": "tippen",
    "answer": "Café",
    "info": "dort trinkt man Kaffee und sitzt zusammen",
    "emoji": "☕",
    "w": "das Café",
    "explain": "☕ das Café"
   },
   {
    "type": "tippen",
    "answer": "Park",
    "info": "eine grüne Fläche in der Stadt",
    "emoji": "🌳",
    "w": "der Park",
    "explain": "🌳 der Park"
   },
   {
    "type": "tippen",
    "answer": "Wochenende",
    "info": "Samstag und Sonntag",
    "emoji": "📆",
    "w": "das Wochenende",
    "explain": "📆 das Wochenende"
   },
   {
    "type": "tippen",
    "answer": "spielen",
    "info": "ein Spiel oder ein Instrument machen",
    "emoji": "🎮",
    "w": "spielen",
    "explain": "🎮 spielen"
   },
   {
    "type": "tippen",
    "answer": "lesen",
    "info": "Buchstaben ansehen und verstehen",
    "emoji": "👓",
    "w": "lesen",
    "explain": "👓 lesen"
   },
   {
    "type": "tippen",
    "answer": "treffen",
    "info": "mit jemandem zusammenkommen",
    "emoji": "🤝",
    "w": "treffen",
    "explain": "🤝 treffen"
   },
   {
    "type": "tippen",
    "answer": "schwimmen",
    "info": "sich im Wasser bewegen",
    "emoji": "🏊",
    "w": "schwimmen",
    "explain": "🏊 schwimmen"
   },
   {
    "type": "tippen",
    "answer": "spazieren gehen",
    "info": "langsam gehen, ohne Ziel",
    "emoji": "🚶",
    "w": "spazieren gehen",
    "explain": "🚶 spazieren gehen"
   },
   {
    "type": "order",
    "answer": "Am Wochenende treffe ich meine Freunde",
    "hint": "Nach der Zeitangabe kommt das Verb.",
    "explain": "Steht die Zeitangabe vorn, folgt sofort das Verb: treffe ich."
   },
   {
    "type": "order",
    "answer": "In meiner Freizeit höre ich gern Musik",
    "hint": "Nach der Angabe kommt das Verb.",
    "explain": "gern steht nach dem Verb: höre ich gern."
   },
   {
    "type": "order",
    "answer": "Wir gehen heute Abend ins Kino",
    "hint": "Erst wer, dann das Verb, dann wann und wohin.",
    "explain": "in plus das wird ins: ins Kino."
   },
   {
    "type": "order",
    "answer": "Meine Tochter spielt sehr gut Klavier",
    "hint": "Erst das Subjekt, dann das Verb.",
    "explain": "Bei Instrumenten steht kein Artikel: Klavier spielen."
   },
   {
    "type": "order",
    "answer": "Am Sonntag gehe ich immer im Park spazieren",
    "hint": "Der zweite Verbteil geht ans Ende.",
    "explain": "spazieren gehen — spazieren steht am Ende."
   },
   {
    "type": "match",
    "intro": "Ordne Wort und Bedeutung zu:",
    "pairs": [
     {
      "l": "die Freizeit",
      "r": "die Zeit, in der man nicht arbeitet"
     },
     {
      "l": "das Hobby",
      "r": "das, was man gern in der Freizeit macht"
     },
     {
      "l": "der Sport",
      "r": "Bewegung, zum Beispiel Laufen oder Fußball"
     },
     {
      "l": "die Musik",
      "r": "Töne, die man hört oder selbst macht"
     }
    ]
   },
   {
    "type": "match",
    "intro": "Ordne Wort und Bedeutung zu:",
    "pairs": [
     {
      "l": "das Buch",
      "r": "man liest es, es hat viele Seiten"
     },
     {
      "l": "der Film",
      "r": "man sieht ihn im Kino oder zu Hause"
     },
     {
      "l": "das Spiel",
      "r": "man spielt es allein oder mit anderen"
     },
     {
      "l": "der Freund",
      "r": "ein Mensch, den man gern hat und oft trifft"
     }
    ]
   },
   {
    "type": "match",
    "intro": "Ordne Wort und Bedeutung zu:",
    "pairs": [
     {
      "l": "das Café",
      "r": "dort trinkt man Kaffee und sitzt zusammen"
     },
     {
      "l": "der Park",
      "r": "eine grüne Fläche in der Stadt"
     },
     {
      "l": "das Wochenende",
      "r": "Samstag und Sonntag"
     },
     {
      "l": "spielen",
      "r": "ein Spiel oder ein Instrument machen"
     }
    ]
   },
   {
    "type": "match",
    "intro": "Ordne Wort und Bedeutung zu:",
    "pairs": [
     {
      "l": "lesen",
      "r": "Buchstaben ansehen und verstehen"
     },
     {
      "l": "treffen",
      "r": "mit jemandem zusammenkommen"
     },
     {
      "l": "schwimmen",
      "r": "sich im Wasser bewegen"
     },
     {
      "l": "spazieren gehen",
      "r": "langsam gehen, ohne Ziel"
     }
    ]
   },
   {
    "type": "fehler",
    "satz": "Am Wochenende ich treffe meine Freunde.",
    "falsch": "ich",
    "richtig": "Am Wochenende treffe ich meine Freunde.",
    "explain": "Steht die Zeitangabe vorn, kommt sofort das Verb, erst danach das Subjekt."
   },
   {
    "type": "fehler",
    "satz": "Wir gehen heute Abend in das Kino.",
    "falsch": "das",
    "richtig": "Wir gehen heute Abend ins Kino.",
    "explain": "in plus das zieht man zu ins zusammen."
   },
   {
    "type": "fehler",
    "satz": "Meine Tochter spielt das Klavier sehr gut.",
    "falsch": "das",
    "richtig": "Meine Tochter spielt sehr gut Klavier.",
    "explain": "Bei Instrumenten steht im Deutschen kein Artikel: Klavier spielen, Gitarre spielen."
   },
   {
    "type": "schreiben",
    "auftrag": "Was machst du am Wochenende gern? Schreib drei bis vier Sätze.",
    "muster": "Am Samstag schlafe ich zuerst lange. Danach treffe ich meine Freunde im Café oder wir gehen im Park spazieren. Am Sonntag lese ich gern ein Buch oder sehe einen Film. Sport mache ich leider zu selten.",
    "tipp": "gern steht direkt nach dem Verb: Ich lese gern, ich koche gern."
   },
   {
    "type": "schreiben",
    "auftrag": "Lade eine Freundin für Samstag ins Kino ein. Zwei bis drei Sätze.",
    "muster": "Hallo Nina, hast du am Samstagabend Zeit? Ich möchte gern ins Kino gehen, um acht läuft ein neuer Film. Sag mir bis Freitag Bescheid, dann kaufe ich die Karten.",
    "tipp": "Eine Einladung beginnt oft mit einer Frage: Hast du Zeit? Hast du Lust?"
   }
  ]
 },
 {
  "id": "a1-stadt",
  "title": "Stadt & Orte",
  "level": "A1",
  "emoji": "🏙️",
  "words": [
   {
    "de": "die Stadt",
    "info": "ein großer Ort mit vielen Häusern und Menschen",
    "emoji": "🏙️"
   },
   {
    "de": "das Dorf",
    "info": "ein kleiner Ort mit wenigen Häusern",
    "emoji": "🏡"
   },
   {
    "de": "die Bäckerei",
    "info": "dort kauft man Brot und Brötchen",
    "emoji": "🥖"
   },
   {
    "de": "der Supermarkt",
    "info": "dort kauft man Lebensmittel",
    "emoji": "🛒"
   },
   {
    "de": "die Post",
    "info": "dort gibt man Briefe und Pakete ab",
    "emoji": "📮"
   },
   {
    "de": "die Bank",
    "info": "dort holt man Geld",
    "emoji": "🏦"
   },
   {
    "de": "das Krankenhaus",
    "info": "dort liegt man, wenn man sehr krank ist",
    "emoji": "🏥"
   },
   {
    "de": "die Schule",
    "info": "dort lernen die Kinder",
    "emoji": "🏫"
   },
   {
    "de": "das Rathaus",
    "info": "dort ist die Verwaltung der Stadt",
    "emoji": "🏛️"
   },
   {
    "de": "die Kirche",
    "info": "dort beten Menschen, sie hat oft einen Turm",
    "emoji": "⛪"
   },
   {
    "de": "der Markt",
    "info": "dort verkaufen viele Stände Obst und Gemüse",
    "emoji": "🍎"
   },
   {
    "de": "das Restaurant",
    "info": "dort isst man und bezahlt dafür",
    "emoji": "🍽️"
   },
   {
    "de": "die Adresse",
    "info": "Straße, Nummer und Ort, wo jemand wohnt",
    "emoji": "🏷️"
   },
   {
    "de": "der Platz",
    "info": "eine offene Fläche mitten in der Stadt",
    "emoji": "⛲"
   },
   {
    "de": "in der Nähe",
    "info": "nicht weit weg",
    "emoji": "📍"
   },
   {
    "de": "weit",
    "info": "eine große Entfernung",
    "emoji": "🛣️"
   }
  ],
  "exercises": [
   {
    "type": "karte",
    "w": "die Stadt",
    "info": "ein großer Ort mit vielen Häusern und Menschen",
    "emoji": "🏙️"
   },
   {
    "type": "karte",
    "w": "das Dorf",
    "info": "ein kleiner Ort mit wenigen Häusern",
    "emoji": "🏡"
   },
   {
    "type": "karte",
    "w": "die Bäckerei",
    "info": "dort kauft man Brot und Brötchen",
    "emoji": "🥖"
   },
   {
    "type": "karte",
    "w": "der Supermarkt",
    "info": "dort kauft man Lebensmittel",
    "emoji": "🛒"
   },
   {
    "type": "karte",
    "w": "die Post",
    "info": "dort gibt man Briefe und Pakete ab",
    "emoji": "📮"
   },
   {
    "type": "karte",
    "w": "die Bank",
    "info": "dort holt man Geld",
    "emoji": "🏦"
   },
   {
    "type": "karte",
    "w": "das Krankenhaus",
    "info": "dort liegt man, wenn man sehr krank ist",
    "emoji": "🏥"
   },
   {
    "type": "karte",
    "w": "die Schule",
    "info": "dort lernen die Kinder",
    "emoji": "🏫"
   },
   {
    "type": "karte",
    "w": "das Rathaus",
    "info": "dort ist die Verwaltung der Stadt",
    "emoji": "🏛️"
   },
   {
    "type": "karte",
    "w": "die Kirche",
    "info": "dort beten Menschen, sie hat oft einen Turm",
    "emoji": "⛪"
   },
   {
    "type": "karte",
    "w": "der Markt",
    "info": "dort verkaufen viele Stände Obst und Gemüse",
    "emoji": "🍎"
   },
   {
    "type": "karte",
    "w": "das Restaurant",
    "info": "dort isst man und bezahlt dafür",
    "emoji": "🍽️"
   },
   {
    "type": "karte",
    "w": "die Adresse",
    "info": "Straße, Nummer und Ort, wo jemand wohnt",
    "emoji": "🏷️"
   },
   {
    "type": "karte",
    "w": "der Platz",
    "info": "eine offene Fläche mitten in der Stadt",
    "emoji": "⛲"
   },
   {
    "type": "karte",
    "w": "in der Nähe",
    "info": "nicht weit weg",
    "emoji": "📍"
   },
   {
    "type": "karte",
    "w": "weit",
    "info": "eine große Entfernung",
    "emoji": "🛣️"
   },
   {
    "type": "choice",
    "q": "Welches Wort passt: „ein großer Ort mit vielen Häusern und Menschen“?",
    "options": [
     "die Stadt",
     "der Supermarkt",
     "die Schule",
     "das Restaurant"
    ],
    "answer": 0,
    "w": "die Stadt",
    "explain": "🏙️ die Stadt — ein großer Ort mit vielen Häusern und Menschen"
   },
   {
    "type": "choice",
    "q": "Welches Wort passt: „ein kleiner Ort mit wenigen Häusern“?",
    "options": [
     "das Dorf",
     "die Post",
     "das Rathaus",
     "die Adresse"
    ],
    "answer": 0,
    "w": "das Dorf",
    "explain": "🏡 das Dorf — ein kleiner Ort mit wenigen Häusern"
   },
   {
    "type": "choice",
    "q": "Welches Wort passt: „dort kauft man Brot und Brötchen“?",
    "options": [
     "die Bäckerei",
     "die Bank",
     "die Kirche",
     "der Platz"
    ],
    "answer": 0,
    "w": "die Bäckerei",
    "explain": "🥖 die Bäckerei — dort kauft man Brot und Brötchen"
   },
   {
    "type": "choice",
    "q": "Welches Wort passt: „dort kauft man Lebensmittel“?",
    "options": [
     "der Supermarkt",
     "das Krankenhaus",
     "der Markt",
     "in der Nähe"
    ],
    "answer": 0,
    "w": "der Supermarkt",
    "explain": "🛒 der Supermarkt — dort kauft man Lebensmittel"
   },
   {
    "type": "choice",
    "q": "Welches Wort passt: „dort gibt man Briefe und Pakete ab“?",
    "options": [
     "die Post",
     "die Schule",
     "das Restaurant",
     "weit"
    ],
    "answer": 0,
    "w": "die Post",
    "explain": "📮 die Post — dort gibt man Briefe und Pakete ab"
   },
   {
    "type": "choice",
    "q": "Welches Wort passt: „dort holt man Geld“?",
    "options": [
     "die Bank",
     "das Rathaus",
     "die Adresse",
     "die Stadt"
    ],
    "answer": 0,
    "w": "die Bank",
    "explain": "🏦 die Bank — dort holt man Geld"
   },
   {
    "type": "choice",
    "q": "Welches Wort passt: „dort liegt man, wenn man sehr krank ist“?",
    "options": [
     "das Krankenhaus",
     "die Kirche",
     "der Platz",
     "das Dorf"
    ],
    "answer": 0,
    "w": "das Krankenhaus",
    "explain": "🏥 das Krankenhaus — dort liegt man, wenn man sehr krank ist"
   },
   {
    "type": "choice",
    "q": "Welches Wort passt: „dort lernen die Kinder“?",
    "options": [
     "die Schule",
     "der Markt",
     "in der Nähe",
     "die Bäckerei"
    ],
    "answer": 0,
    "w": "die Schule",
    "explain": "🏫 die Schule — dort lernen die Kinder"
   },
   {
    "type": "choice",
    "q": "Welches Wort passt: „dort ist die Verwaltung der Stadt“?",
    "options": [
     "das Rathaus",
     "das Restaurant",
     "weit",
     "der Supermarkt"
    ],
    "answer": 0,
    "w": "das Rathaus",
    "explain": "🏛️ das Rathaus — dort ist die Verwaltung der Stadt"
   },
   {
    "type": "choice",
    "q": "Welches Wort passt: „dort beten Menschen, sie hat oft einen Turm“?",
    "options": [
     "die Kirche",
     "die Adresse",
     "die Stadt",
     "die Post"
    ],
    "answer": 0,
    "w": "die Kirche",
    "explain": "⛪ die Kirche — dort beten Menschen, sie hat oft einen Turm"
   },
   {
    "type": "choice",
    "q": "Welches Wort passt: „dort verkaufen viele Stände Obst und Gemüse“?",
    "options": [
     "der Markt",
     "der Platz",
     "das Dorf",
     "die Bank"
    ],
    "answer": 0,
    "w": "der Markt",
    "explain": "🍎 der Markt — dort verkaufen viele Stände Obst und Gemüse"
   },
   {
    "type": "choice",
    "q": "Welches Wort passt: „dort isst man und bezahlt dafür“?",
    "options": [
     "das Restaurant",
     "in der Nähe",
     "die Bäckerei",
     "das Krankenhaus"
    ],
    "answer": 0,
    "w": "das Restaurant",
    "explain": "🍽️ das Restaurant — dort isst man und bezahlt dafür"
   },
   {
    "type": "choice",
    "q": "Welches Wort passt: „Straße, Nummer und Ort, wo jemand wohnt“?",
    "options": [
     "die Adresse",
     "weit",
     "der Supermarkt",
     "die Schule"
    ],
    "answer": 0,
    "w": "die Adresse",
    "explain": "🏷️ die Adresse — Straße, Nummer und Ort, wo jemand wohnt"
   },
   {
    "type": "choice",
    "q": "Welches Wort passt: „eine offene Fläche mitten in der Stadt“?",
    "options": [
     "der Platz",
     "die Stadt",
     "die Post",
     "das Rathaus"
    ],
    "answer": 0,
    "w": "der Platz",
    "explain": "⛲ der Platz — eine offene Fläche mitten in der Stadt"
   },
   {
    "type": "choice",
    "q": "Welches Wort passt: „nicht weit weg“?",
    "options": [
     "in der Nähe",
     "das Dorf",
     "die Bank",
     "die Kirche"
    ],
    "answer": 0,
    "w": "in der Nähe",
    "explain": "📍 in der Nähe — nicht weit weg"
   },
   {
    "type": "choice",
    "q": "Welches Wort passt: „eine große Entfernung“?",
    "options": [
     "weit",
     "die Bäckerei",
     "das Krankenhaus",
     "der Markt"
    ],
    "answer": 0,
    "w": "weit",
    "explain": "🛣️ weit — eine große Entfernung"
   },
   {
    "type": "gap",
    "text": "___ Stadt",
    "answer": "die",
    "hint": "der / die / das?",
    "w": "die Stadt",
    "explain": "Es heißt die Stadt — ein großer Ort mit vielen Häusern und Menschen"
   },
   {
    "type": "gap",
    "text": "___ Dorf",
    "answer": "das",
    "hint": "der / die / das?",
    "w": "das Dorf",
    "explain": "Es heißt das Dorf — ein kleiner Ort mit wenigen Häusern"
   },
   {
    "type": "gap",
    "text": "___ Bäckerei",
    "answer": "die",
    "hint": "der / die / das?",
    "w": "die Bäckerei",
    "explain": "Es heißt die Bäckerei — dort kauft man Brot und Brötchen"
   },
   {
    "type": "gap",
    "text": "___ Supermarkt",
    "answer": "der",
    "hint": "der / die / das?",
    "w": "der Supermarkt",
    "explain": "Es heißt der Supermarkt — dort kauft man Lebensmittel"
   },
   {
    "type": "gap",
    "text": "___ Post",
    "answer": "die",
    "hint": "der / die / das?",
    "w": "die Post",
    "explain": "Es heißt die Post — dort gibt man Briefe und Pakete ab"
   },
   {
    "type": "gap",
    "text": "___ Bank",
    "answer": "die",
    "hint": "der / die / das?",
    "w": "die Bank",
    "explain": "Es heißt die Bank — dort holt man Geld"
   },
   {
    "type": "gap",
    "text": "___ Krankenhaus",
    "answer": "das",
    "hint": "der / die / das?",
    "w": "das Krankenhaus",
    "explain": "Es heißt das Krankenhaus — dort liegt man, wenn man sehr krank ist"
   },
   {
    "type": "gap",
    "text": "___ Schule",
    "answer": "die",
    "hint": "der / die / das?",
    "w": "die Schule",
    "explain": "Es heißt die Schule — dort lernen die Kinder"
   },
   {
    "type": "gap",
    "text": "___ Rathaus",
    "answer": "das",
    "hint": "der / die / das?",
    "w": "das Rathaus",
    "explain": "Es heißt das Rathaus — dort ist die Verwaltung der Stadt"
   },
   {
    "type": "gap",
    "text": "___ Kirche",
    "answer": "die",
    "hint": "der / die / das?",
    "w": "die Kirche",
    "explain": "Es heißt die Kirche — dort beten Menschen, sie hat oft einen Turm"
   },
   {
    "type": "gap",
    "text": "___ Markt",
    "answer": "der",
    "hint": "der / die / das?",
    "w": "der Markt",
    "explain": "Es heißt der Markt — dort verkaufen viele Stände Obst und Gemüse"
   },
   {
    "type": "gap",
    "text": "___ Restaurant",
    "answer": "das",
    "hint": "der / die / das?",
    "w": "das Restaurant",
    "explain": "Es heißt das Restaurant — dort isst man und bezahlt dafür"
   },
   {
    "type": "gap",
    "text": "___ Adresse",
    "answer": "die",
    "hint": "der / die / das?",
    "w": "die Adresse",
    "explain": "Es heißt die Adresse — Straße, Nummer und Ort, wo jemand wohnt"
   },
   {
    "type": "gap",
    "text": "___ Platz",
    "answer": "der",
    "hint": "der / die / das?",
    "w": "der Platz",
    "explain": "Es heißt der Platz — eine offene Fläche mitten in der Stadt"
   },
   {
    "type": "tippen",
    "answer": "Stadt",
    "info": "ein großer Ort mit vielen Häusern und Menschen",
    "emoji": "🏙️",
    "w": "die Stadt",
    "explain": "🏙️ die Stadt"
   },
   {
    "type": "tippen",
    "answer": "Dorf",
    "info": "ein kleiner Ort mit wenigen Häusern",
    "emoji": "🏡",
    "w": "das Dorf",
    "explain": "🏡 das Dorf"
   },
   {
    "type": "tippen",
    "answer": "Bäckerei",
    "info": "dort kauft man Brot und Brötchen",
    "emoji": "🥖",
    "w": "die Bäckerei",
    "explain": "🥖 die Bäckerei"
   },
   {
    "type": "tippen",
    "answer": "Supermarkt",
    "info": "dort kauft man Lebensmittel",
    "emoji": "🛒",
    "w": "der Supermarkt",
    "explain": "🛒 der Supermarkt"
   },
   {
    "type": "tippen",
    "answer": "Post",
    "info": "dort gibt man Briefe und Pakete ab",
    "emoji": "📮",
    "w": "die Post",
    "explain": "📮 die Post"
   },
   {
    "type": "tippen",
    "answer": "Bank",
    "info": "dort holt man Geld",
    "emoji": "🏦",
    "w": "die Bank",
    "explain": "🏦 die Bank"
   },
   {
    "type": "tippen",
    "answer": "Krankenhaus",
    "info": "dort liegt man, wenn man sehr krank ist",
    "emoji": "🏥",
    "w": "das Krankenhaus",
    "explain": "🏥 das Krankenhaus"
   },
   {
    "type": "tippen",
    "answer": "Schule",
    "info": "dort lernen die Kinder",
    "emoji": "🏫",
    "w": "die Schule",
    "explain": "🏫 die Schule"
   },
   {
    "type": "tippen",
    "answer": "Rathaus",
    "info": "dort ist die Verwaltung der Stadt",
    "emoji": "🏛️",
    "w": "das Rathaus",
    "explain": "🏛️ das Rathaus"
   },
   {
    "type": "tippen",
    "answer": "Kirche",
    "info": "dort beten Menschen, sie hat oft einen Turm",
    "emoji": "⛪",
    "w": "die Kirche",
    "explain": "⛪ die Kirche"
   },
   {
    "type": "tippen",
    "answer": "Markt",
    "info": "dort verkaufen viele Stände Obst und Gemüse",
    "emoji": "🍎",
    "w": "der Markt",
    "explain": "🍎 der Markt"
   },
   {
    "type": "tippen",
    "answer": "Restaurant",
    "info": "dort isst man und bezahlt dafür",
    "emoji": "🍽️",
    "w": "das Restaurant",
    "explain": "🍽️ das Restaurant"
   },
   {
    "type": "tippen",
    "answer": "Adresse",
    "info": "Straße, Nummer und Ort, wo jemand wohnt",
    "emoji": "🏷️",
    "w": "die Adresse",
    "explain": "🏷️ die Adresse"
   },
   {
    "type": "tippen",
    "answer": "Platz",
    "info": "eine offene Fläche mitten in der Stadt",
    "emoji": "⛲",
    "w": "der Platz",
    "explain": "⛲ der Platz"
   },
   {
    "type": "tippen",
    "answer": "in der Nähe",
    "info": "nicht weit weg",
    "emoji": "📍",
    "w": "in der Nähe",
    "explain": "📍 in der Nähe"
   },
   {
    "type": "tippen",
    "answer": "weit",
    "info": "eine große Entfernung",
    "emoji": "🛣️",
    "w": "weit",
    "explain": "🛣️ weit"
   },
   {
    "type": "order",
    "answer": "Die Bäckerei ist gleich um die Ecke",
    "hint": "Erst das Subjekt, dann das Verb.",
    "explain": "um die Ecke sein — eine feste Wendung für ganz nah."
   },
   {
    "type": "order",
    "answer": "Ich gehe schnell zur Post",
    "hint": "Erst wer, dann das Verb.",
    "explain": "zu plus der wird zur: zur Post."
   },
   {
    "type": "order",
    "answer": "Wohnt hier in der Nähe eine Apotheke",
    "hint": "Bei einer Frage steht das Verb zuerst.",
    "explain": "Bei Gebäuden sagt man eher: Gibt es hier eine Apotheke?"
   },
   {
    "type": "order",
    "answer": "Der Markt ist nur am Samstag",
    "hint": "Erst das Subjekt, dann das Verb.",
    "explain": "am Samstag — bei Wochentagen steht immer an plus dem."
   },
   {
    "type": "order",
    "answer": "Meine Adresse ist Lindenstraße zwölf",
    "hint": "Erst das Subjekt, dann das Verb.",
    "explain": "Bei der Adresse kommt die Hausnummer nach dem Straßennamen."
   },
   {
    "type": "match",
    "intro": "Ordne Wort und Bedeutung zu:",
    "pairs": [
     {
      "l": "die Stadt",
      "r": "ein großer Ort mit vielen Häusern und Menschen"
     },
     {
      "l": "das Dorf",
      "r": "ein kleiner Ort mit wenigen Häusern"
     },
     {
      "l": "die Bäckerei",
      "r": "dort kauft man Brot und Brötchen"
     },
     {
      "l": "der Supermarkt",
      "r": "dort kauft man Lebensmittel"
     }
    ]
   },
   {
    "type": "match",
    "intro": "Ordne Wort und Bedeutung zu:",
    "pairs": [
     {
      "l": "die Post",
      "r": "dort gibt man Briefe und Pakete ab"
     },
     {
      "l": "die Bank",
      "r": "dort holt man Geld"
     },
     {
      "l": "das Krankenhaus",
      "r": "dort liegt man, wenn man sehr krank ist"
     },
     {
      "l": "die Schule",
      "r": "dort lernen die Kinder"
     }
    ]
   },
   {
    "type": "match",
    "intro": "Ordne Wort und Bedeutung zu:",
    "pairs": [
     {
      "l": "das Rathaus",
      "r": "dort ist die Verwaltung der Stadt"
     },
     {
      "l": "die Kirche",
      "r": "dort beten Menschen, sie hat oft einen Turm"
     },
     {
      "l": "der Markt",
      "r": "dort verkaufen viele Stände Obst und Gemüse"
     },
     {
      "l": "das Restaurant",
      "r": "dort isst man und bezahlt dafür"
     }
    ]
   },
   {
    "type": "match",
    "intro": "Ordne Wort und Bedeutung zu:",
    "pairs": [
     {
      "l": "die Adresse",
      "r": "Straße, Nummer und Ort, wo jemand wohnt"
     },
     {
      "l": "der Platz",
      "r": "eine offene Fläche mitten in der Stadt"
     },
     {
      "l": "in der Nähe",
      "r": "nicht weit weg"
     },
     {
      "l": "weit",
      "r": "eine große Entfernung"
     }
    ]
   },
   {
    "type": "fehler",
    "satz": "Ich gehe schnell zu der Post.",
    "falsch": "der",
    "richtig": "Ich gehe schnell zur Post.",
    "explain": "zu plus der zieht man zu zur zusammen."
   },
   {
    "type": "fehler",
    "satz": "Der Markt ist nur an Samstag.",
    "falsch": "an",
    "richtig": "Der Markt ist nur am Samstag.",
    "explain": "an plus dem wird am. Bei Wochentagen immer: am Montag, am Samstag."
   },
   {
    "type": "fehler",
    "satz": "Gibt es hier in die Nähe eine Apotheke?",
    "falsch": "die",
    "richtig": "Gibt es hier in der Nähe eine Apotheke?",
    "explain": "in der Nähe ist eine feste Wendung im Dativ."
   },
   {
    "type": "schreiben",
    "auftrag": "Beschreib in drei bis vier Sätzen, was es in deiner Straße oder deinem Viertel gibt.",
    "muster": "Bei mir im Viertel gibt es fast alles. Gleich um die Ecke sind eine Bäckerei und ein kleiner Supermarkt. Die Post ist etwas weiter, ungefähr zehn Minuten zu Fuß. Ein Restaurant fehlt leider.",
    "tipp": "Es gibt steht immer mit dem Akkusativ: Es gibt einen Supermarkt."
   },
   {
    "type": "schreiben",
    "auftrag": "Jemand fragt, ob es bei dir in der Nähe eine Apotheke gibt. Antworte in zwei bis drei Sätzen.",
    "muster": "Ja, in der Nähe gibt es eine Apotheke. Sie ist am Marktplatz, direkt neben der Bank. Von hier sind es ungefähr fünf Minuten zu Fuß.",
    "tipp": "Für Orte: neben der Bank, am Platz, gegenüber der Schule."
   }
  ]
 },
 {
  "id": "a1-zahlen",
  "title": "Zahlen & Mengen",
  "level": "A1",
  "emoji": "🔢",
  "words": [
   {
    "de": "die Zahl",
    "info": "zum Beispiel eins, zwei oder hundert",
    "emoji": "🔢"
   },
   {
    "de": "die Nummer",
    "info": "eine Zahl, die zu etwas gehört, zum Beispiel beim Telefon",
    "emoji": "☎️"
   },
   {
    "de": "das Kilo",
    "info": "tausend Gramm, ein Maß fürs Gewicht",
    "emoji": "⚖️"
   },
   {
    "de": "das Gramm",
    "info": "ein kleines Maß fürs Gewicht",
    "emoji": "🥄"
   },
   {
    "de": "der Liter",
    "info": "ein Maß für Flüssigkeit, zum Beispiel Milch",
    "emoji": "🥛"
   },
   {
    "de": "das Stück",
    "info": "ein einzelnes Ding aus einer Menge",
    "emoji": "🍰"
   },
   {
    "de": "die Flasche",
    "info": "darin ist Wasser oder Saft",
    "emoji": "🍾"
   },
   {
    "de": "die Packung",
    "info": "darin sind mehrere Stücke zusammen",
    "emoji": "📦"
   },
   {
    "de": "der Euro",
    "info": "das Geld in Deutschland",
    "emoji": "💶"
   },
   {
    "de": "der Cent",
    "info": "der hundertste Teil von einem Euro",
    "emoji": "🪙"
   },
   {
    "de": "viel",
    "info": "eine große Menge",
    "emoji": "📈"
   },
   {
    "de": "wenig",
    "info": "eine kleine Menge",
    "emoji": "📉"
   },
   {
    "de": "genug",
    "info": "so viel, wie man braucht",
    "emoji": "👌"
   },
   {
    "de": "alle",
    "info": "jeder oder jedes von einer Gruppe",
    "emoji": "💯"
   },
   {
    "de": "zusammen",
    "info": "alles auf einmal, nicht getrennt",
    "emoji": "🧮"
   },
   {
    "de": "kosten",
    "info": "einen Preis haben",
    "emoji": "🏷️"
   }
  ],
  "exercises": [
   {
    "type": "karte",
    "w": "die Zahl",
    "info": "zum Beispiel eins, zwei oder hundert",
    "emoji": "🔢"
   },
   {
    "type": "karte",
    "w": "die Nummer",
    "info": "eine Zahl, die zu etwas gehört, zum Beispiel beim Telefon",
    "emoji": "☎️"
   },
   {
    "type": "karte",
    "w": "das Kilo",
    "info": "tausend Gramm, ein Maß fürs Gewicht",
    "emoji": "⚖️"
   },
   {
    "type": "karte",
    "w": "das Gramm",
    "info": "ein kleines Maß fürs Gewicht",
    "emoji": "🥄"
   },
   {
    "type": "karte",
    "w": "der Liter",
    "info": "ein Maß für Flüssigkeit, zum Beispiel Milch",
    "emoji": "🥛"
   },
   {
    "type": "karte",
    "w": "das Stück",
    "info": "ein einzelnes Ding aus einer Menge",
    "emoji": "🍰"
   },
   {
    "type": "karte",
    "w": "die Flasche",
    "info": "darin ist Wasser oder Saft",
    "emoji": "🍾"
   },
   {
    "type": "karte",
    "w": "die Packung",
    "info": "darin sind mehrere Stücke zusammen",
    "emoji": "📦"
   },
   {
    "type": "karte",
    "w": "der Euro",
    "info": "das Geld in Deutschland",
    "emoji": "💶"
   },
   {
    "type": "karte",
    "w": "der Cent",
    "info": "der hundertste Teil von einem Euro",
    "emoji": "🪙"
   },
   {
    "type": "karte",
    "w": "viel",
    "info": "eine große Menge",
    "emoji": "📈"
   },
   {
    "type": "karte",
    "w": "wenig",
    "info": "eine kleine Menge",
    "emoji": "📉"
   },
   {
    "type": "karte",
    "w": "genug",
    "info": "so viel, wie man braucht",
    "emoji": "👌"
   },
   {
    "type": "karte",
    "w": "alle",
    "info": "jeder oder jedes von einer Gruppe",
    "emoji": "💯"
   },
   {
    "type": "karte",
    "w": "zusammen",
    "info": "alles auf einmal, nicht getrennt",
    "emoji": "🧮"
   },
   {
    "type": "karte",
    "w": "kosten",
    "info": "einen Preis haben",
    "emoji": "🏷️"
   },
   {
    "type": "choice",
    "q": "Welches Wort passt: „zum Beispiel eins, zwei oder hundert“?",
    "options": [
     "die Zahl",
     "das Gramm",
     "die Packung",
     "wenig"
    ],
    "answer": 0,
    "w": "die Zahl",
    "explain": "🔢 die Zahl — zum Beispiel eins, zwei oder hundert"
   },
   {
    "type": "choice",
    "q": "Welches Wort passt: „eine Zahl, die zu etwas gehört, zum Beispiel beim Telefon“?",
    "options": [
     "die Nummer",
     "der Liter",
     "der Euro",
     "genug"
    ],
    "answer": 0,
    "w": "die Nummer",
    "explain": "☎️ die Nummer — eine Zahl, die zu etwas gehört, zum Beispiel beim Telefon"
   },
   {
    "type": "choice",
    "q": "Welches Wort passt: „tausend Gramm, ein Maß fürs Gewicht“?",
    "options": [
     "das Kilo",
     "das Stück",
     "der Cent",
     "alle"
    ],
    "answer": 0,
    "w": "das Kilo",
    "explain": "⚖️ das Kilo — tausend Gramm, ein Maß fürs Gewicht"
   },
   {
    "type": "choice",
    "q": "Welches Wort passt: „ein kleines Maß fürs Gewicht“?",
    "options": [
     "das Gramm",
     "die Flasche",
     "viel",
     "zusammen"
    ],
    "answer": 0,
    "w": "das Gramm",
    "explain": "🥄 das Gramm — ein kleines Maß fürs Gewicht"
   },
   {
    "type": "choice",
    "q": "Welches Wort passt: „ein Maß für Flüssigkeit, zum Beispiel Milch“?",
    "options": [
     "der Liter",
     "die Packung",
     "wenig",
     "kosten"
    ],
    "answer": 0,
    "w": "der Liter",
    "explain": "🥛 der Liter — ein Maß für Flüssigkeit, zum Beispiel Milch"
   },
   {
    "type": "choice",
    "q": "Welches Wort passt: „ein einzelnes Ding aus einer Menge“?",
    "options": [
     "das Stück",
     "der Euro",
     "genug",
     "die Zahl"
    ],
    "answer": 0,
    "w": "das Stück",
    "explain": "🍰 das Stück — ein einzelnes Ding aus einer Menge"
   },
   {
    "type": "choice",
    "q": "Welches Wort passt: „darin ist Wasser oder Saft“?",
    "options": [
     "die Flasche",
     "der Cent",
     "alle",
     "die Nummer"
    ],
    "answer": 0,
    "w": "die Flasche",
    "explain": "🍾 die Flasche — darin ist Wasser oder Saft"
   },
   {
    "type": "choice",
    "q": "Welches Wort passt: „darin sind mehrere Stücke zusammen“?",
    "options": [
     "die Packung",
     "viel",
     "zusammen",
     "das Kilo"
    ],
    "answer": 0,
    "w": "die Packung",
    "explain": "📦 die Packung — darin sind mehrere Stücke zusammen"
   },
   {
    "type": "choice",
    "q": "Welches Wort passt: „das Geld in Deutschland“?",
    "options": [
     "der Euro",
     "wenig",
     "kosten",
     "das Gramm"
    ],
    "answer": 0,
    "w": "der Euro",
    "explain": "💶 der Euro — das Geld in Deutschland"
   },
   {
    "type": "choice",
    "q": "Welches Wort passt: „der hundertste Teil von einem Euro“?",
    "options": [
     "der Cent",
     "genug",
     "die Zahl",
     "der Liter"
    ],
    "answer": 0,
    "w": "der Cent",
    "explain": "🪙 der Cent — der hundertste Teil von einem Euro"
   },
   {
    "type": "choice",
    "q": "Welches Wort passt: „eine große Menge“?",
    "options": [
     "viel",
     "alle",
     "die Nummer",
     "das Stück"
    ],
    "answer": 0,
    "w": "viel",
    "explain": "📈 viel — eine große Menge"
   },
   {
    "type": "choice",
    "q": "Welches Wort passt: „eine kleine Menge“?",
    "options": [
     "wenig",
     "zusammen",
     "das Kilo",
     "die Flasche"
    ],
    "answer": 0,
    "w": "wenig",
    "explain": "📉 wenig — eine kleine Menge"
   },
   {
    "type": "choice",
    "q": "Welches Wort passt: „so viel, wie man braucht“?",
    "options": [
     "genug",
     "kosten",
     "das Gramm",
     "die Packung"
    ],
    "answer": 0,
    "w": "genug",
    "explain": "👌 genug — so viel, wie man braucht"
   },
   {
    "type": "choice",
    "q": "Welches Wort passt: „jeder oder jedes von einer Gruppe“?",
    "options": [
     "alle",
     "die Zahl",
     "der Liter",
     "der Euro"
    ],
    "answer": 0,
    "w": "alle",
    "explain": "💯 alle — jeder oder jedes von einer Gruppe"
   },
   {
    "type": "choice",
    "q": "Welches Wort passt: „alles auf einmal, nicht getrennt“?",
    "options": [
     "zusammen",
     "die Nummer",
     "das Stück",
     "der Cent"
    ],
    "answer": 0,
    "w": "zusammen",
    "explain": "🧮 zusammen — alles auf einmal, nicht getrennt"
   },
   {
    "type": "choice",
    "q": "Welches Wort passt: „einen Preis haben“?",
    "options": [
     "kosten",
     "das Kilo",
     "die Flasche",
     "viel"
    ],
    "answer": 0,
    "w": "kosten",
    "explain": "🏷️ kosten — einen Preis haben"
   },
   {
    "type": "gap",
    "text": "___ Zahl",
    "answer": "die",
    "hint": "der / die / das?",
    "w": "die Zahl",
    "explain": "Es heißt die Zahl — zum Beispiel eins, zwei oder hundert"
   },
   {
    "type": "gap",
    "text": "___ Nummer",
    "answer": "die",
    "hint": "der / die / das?",
    "w": "die Nummer",
    "explain": "Es heißt die Nummer — eine Zahl, die zu etwas gehört, zum Beispiel beim Telefon"
   },
   {
    "type": "gap",
    "text": "___ Kilo",
    "answer": "das",
    "hint": "der / die / das?",
    "w": "das Kilo",
    "explain": "Es heißt das Kilo — tausend Gramm, ein Maß fürs Gewicht"
   },
   {
    "type": "gap",
    "text": "___ Gramm",
    "answer": "das",
    "hint": "der / die / das?",
    "w": "das Gramm",
    "explain": "Es heißt das Gramm — ein kleines Maß fürs Gewicht"
   },
   {
    "type": "gap",
    "text": "___ Liter",
    "answer": "der",
    "hint": "der / die / das?",
    "w": "der Liter",
    "explain": "Es heißt der Liter — ein Maß für Flüssigkeit, zum Beispiel Milch"
   },
   {
    "type": "gap",
    "text": "___ Stück",
    "answer": "das",
    "hint": "der / die / das?",
    "w": "das Stück",
    "explain": "Es heißt das Stück — ein einzelnes Ding aus einer Menge"
   },
   {
    "type": "gap",
    "text": "___ Flasche",
    "answer": "die",
    "hint": "der / die / das?",
    "w": "die Flasche",
    "explain": "Es heißt die Flasche — darin ist Wasser oder Saft"
   },
   {
    "type": "gap",
    "text": "___ Packung",
    "answer": "die",
    "hint": "der / die / das?",
    "w": "die Packung",
    "explain": "Es heißt die Packung — darin sind mehrere Stücke zusammen"
   },
   {
    "type": "gap",
    "text": "___ Euro",
    "answer": "der",
    "hint": "der / die / das?",
    "w": "der Euro",
    "explain": "Es heißt der Euro — das Geld in Deutschland"
   },
   {
    "type": "gap",
    "text": "___ Cent",
    "answer": "der",
    "hint": "der / die / das?",
    "w": "der Cent",
    "explain": "Es heißt der Cent — der hundertste Teil von einem Euro"
   },
   {
    "type": "tippen",
    "answer": "Zahl",
    "info": "zum Beispiel eins, zwei oder hundert",
    "emoji": "🔢",
    "w": "die Zahl",
    "explain": "🔢 die Zahl"
   },
   {
    "type": "tippen",
    "answer": "Nummer",
    "info": "eine Zahl, die zu etwas gehört, zum Beispiel beim Telefon",
    "emoji": "☎️",
    "w": "die Nummer",
    "explain": "☎️ die Nummer"
   },
   {
    "type": "tippen",
    "answer": "Kilo",
    "info": "tausend Gramm, ein Maß fürs Gewicht",
    "emoji": "⚖️",
    "w": "das Kilo",
    "explain": "⚖️ das Kilo"
   },
   {
    "type": "tippen",
    "answer": "Gramm",
    "info": "ein kleines Maß fürs Gewicht",
    "emoji": "🥄",
    "w": "das Gramm",
    "explain": "🥄 das Gramm"
   },
   {
    "type": "tippen",
    "answer": "Liter",
    "info": "ein Maß für Flüssigkeit, zum Beispiel Milch",
    "emoji": "🥛",
    "w": "der Liter",
    "explain": "🥛 der Liter"
   },
   {
    "type": "tippen",
    "answer": "Stück",
    "info": "ein einzelnes Ding aus einer Menge",
    "emoji": "🍰",
    "w": "das Stück",
    "explain": "🍰 das Stück"
   },
   {
    "type": "tippen",
    "answer": "Flasche",
    "info": "darin ist Wasser oder Saft",
    "emoji": "🍾",
    "w": "die Flasche",
    "explain": "🍾 die Flasche"
   },
   {
    "type": "tippen",
    "answer": "Packung",
    "info": "darin sind mehrere Stücke zusammen",
    "emoji": "📦",
    "w": "die Packung",
    "explain": "📦 die Packung"
   },
   {
    "type": "tippen",
    "answer": "Euro",
    "info": "das Geld in Deutschland",
    "emoji": "💶",
    "w": "der Euro",
    "explain": "💶 der Euro"
   },
   {
    "type": "tippen",
    "answer": "Cent",
    "info": "der hundertste Teil von einem Euro",
    "emoji": "🪙",
    "w": "der Cent",
    "explain": "🪙 der Cent"
   },
   {
    "type": "tippen",
    "answer": "viel",
    "info": "eine große Menge",
    "emoji": "📈",
    "w": "viel",
    "explain": "📈 viel"
   },
   {
    "type": "tippen",
    "answer": "wenig",
    "info": "eine kleine Menge",
    "emoji": "📉",
    "w": "wenig",
    "explain": "📉 wenig"
   },
   {
    "type": "tippen",
    "answer": "genug",
    "info": "so viel, wie man braucht",
    "emoji": "👌",
    "w": "genug",
    "explain": "👌 genug"
   },
   {
    "type": "tippen",
    "answer": "alle",
    "info": "jeder oder jedes von einer Gruppe",
    "emoji": "💯",
    "w": "alle",
    "explain": "💯 alle"
   },
   {
    "type": "tippen",
    "answer": "zusammen",
    "info": "alles auf einmal, nicht getrennt",
    "emoji": "🧮",
    "w": "zusammen",
    "explain": "🧮 zusammen"
   },
   {
    "type": "tippen",
    "answer": "kosten",
    "info": "einen Preis haben",
    "emoji": "🏷️",
    "w": "kosten",
    "explain": "🏷️ kosten"
   },
   {
    "type": "order",
    "answer": "Ein Kilo Tomaten kostet drei Euro",
    "hint": "Erst das Subjekt, dann das Verb.",
    "explain": "Nach Mengen steht kein von: ein Kilo Tomaten."
   },
   {
    "type": "order",
    "answer": "Ich hätte gern zwei Flaschen Wasser",
    "hint": "Ich hätte gern steht am Anfang.",
    "explain": "Ich hätte gern ist die höfliche Bestellung."
   },
   {
    "type": "order",
    "answer": "Das macht zusammen zwölf Euro fünfzig",
    "hint": "Erst das Subjekt, dann das Verb.",
    "explain": "Das macht … — so nennt die Kassiererin den Gesamtpreis."
   },
   {
    "type": "order",
    "answer": "Wie viel kostet eine Packung Kaffee",
    "hint": "Die Frage beginnt mit dem Fragewort.",
    "explain": "Wie viel fragt nach dem Preis oder der Menge."
   },
   {
    "type": "order",
    "answer": "Ich habe heute leider wenig Zeit",
    "hint": "Die Zeitangabe steht vor dem Objekt.",
    "explain": "wenig und viel stehen ohne Artikel: wenig Zeit, viel Arbeit."
   },
   {
    "type": "match",
    "intro": "Ordne Wort und Bedeutung zu:",
    "pairs": [
     {
      "l": "die Zahl",
      "r": "zum Beispiel eins, zwei oder hundert"
     },
     {
      "l": "die Nummer",
      "r": "eine Zahl, die zu etwas gehört, zum Beispiel beim Telefon"
     },
     {
      "l": "das Kilo",
      "r": "tausend Gramm, ein Maß fürs Gewicht"
     },
     {
      "l": "das Gramm",
      "r": "ein kleines Maß fürs Gewicht"
     }
    ]
   },
   {
    "type": "match",
    "intro": "Ordne Wort und Bedeutung zu:",
    "pairs": [
     {
      "l": "der Liter",
      "r": "ein Maß für Flüssigkeit, zum Beispiel Milch"
     },
     {
      "l": "das Stück",
      "r": "ein einzelnes Ding aus einer Menge"
     },
     {
      "l": "die Flasche",
      "r": "darin ist Wasser oder Saft"
     },
     {
      "l": "die Packung",
      "r": "darin sind mehrere Stücke zusammen"
     }
    ]
   },
   {
    "type": "match",
    "intro": "Ordne Wort und Bedeutung zu:",
    "pairs": [
     {
      "l": "der Euro",
      "r": "das Geld in Deutschland"
     },
     {
      "l": "der Cent",
      "r": "der hundertste Teil von einem Euro"
     },
     {
      "l": "viel",
      "r": "eine große Menge"
     },
     {
      "l": "wenig",
      "r": "eine kleine Menge"
     }
    ]
   },
   {
    "type": "match",
    "intro": "Ordne Wort und Bedeutung zu:",
    "pairs": [
     {
      "l": "genug",
      "r": "so viel, wie man braucht"
     },
     {
      "l": "alle",
      "r": "jeder oder jedes von einer Gruppe"
     },
     {
      "l": "zusammen",
      "r": "alles auf einmal, nicht getrennt"
     },
     {
      "l": "kosten",
      "r": "einen Preis haben"
     }
    ]
   },
   {
    "type": "fehler",
    "satz": "Ein Kilo von Tomaten kostet drei Euro.",
    "falsch": "von",
    "richtig": "Ein Kilo Tomaten kostet drei Euro.",
    "explain": "Nach einer Mengenangabe folgt das Nomen direkt, ohne von."
   },
   {
    "type": "fehler",
    "satz": "Ich hätte gern zwei Flasche Wasser.",
    "falsch": "Flasche",
    "richtig": "Ich hätte gern zwei Flaschen Wasser.",
    "explain": "Nach einer Zahl über eins steht der Plural: zwei Flaschen."
   },
   {
    "type": "fehler",
    "satz": "Ich habe heute leider wenig die Zeit.",
    "falsch": "die",
    "richtig": "Ich habe heute leider wenig Zeit.",
    "explain": "Nach viel und wenig steht kein Artikel."
   },
   {
    "type": "schreiben",
    "auftrag": "Schreib einen Einkaufszettel als Satz: Was brauchst du und wie viel? Zwei bis drei Sätze.",
    "muster": "Ich brauche noch ein Kilo Kartoffeln und zwei Flaschen Milch. Außerdem eine Packung Kaffee und sechs Eier. Brot habe ich noch genug zu Hause.",
    "tipp": "Mengen stehen direkt vor dem Nomen: ein Kilo Kartoffeln, zwei Flaschen Milch."
   },
   {
    "type": "schreiben",
    "auftrag": "Du bezahlst an der Kasse. Schreib das kurze Gespräch in drei Sätzen.",
    "muster": "Das macht zusammen achtzehn Euro vierzig. Kann ich mit Karte bezahlen? Ja natürlich, brauchen Sie den Kassenzettel?",
    "tipp": "Das macht … ist der feste Satz für den Gesamtpreis."
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
