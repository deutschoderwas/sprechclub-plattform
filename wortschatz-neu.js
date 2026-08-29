/* ============================================================
   wortschatz-neu.js — Wortschatz fuer acht Bereiche, die keinen hatten

   Polizei, Bau, Elektro/SHK, Metall, Reinigung, Lager,
   Produktion und Technik/Planung standen im Lernbereich mit
   Dialogen und Hoertexten da, aber ohne ein einziges Wort zum
   Ueben. Diese Datei fuellt genau diese Luecke.

   Wird NACH uebungen.js geladen und haengt ihre Themen an den
   Bereich "Wortschatz" an. uebungen.js bleibt unangetastet;
   nimmt man die Zeile in konto.html heraus, ist alles wie vorher.

   Je Thema 14 Woerter mit Bedeutung, Zeichen und einem echten
   Satz aus dem Alltag, dazu Auswahl-, Luecken- und
   Zuordnungsaufgaben.

   Erzeugt von bau/mach-wortschatz.js aus bau/wortschatz-quelle.json —
   nicht von Hand aendern, sondern die Quelle und dann neu bauen.
   ============================================================ */
(function () {
  var U = window.UEBUNGEN;
  if (!U || !U.skills) return;
  var ws = null;
  for (var i = 0; i < U.skills.length; i++) { if (U.skills[i].id === 'wortschatz') { ws = U.skills[i]; break; } }
  if (!ws) return;
  if (!ws.themes) ws.themes = [];

  var NEU = [
 {
  "id": "polizei-neu",
  "title": "Polizei & Sicherheit",
  "level": "A2",
  "emoji": "🚓",
  "words": [
   {
    "de": "die Anzeige",
    "info": "du meldest der Polizei etwas Verbotenes",
    "emoji": "📄",
    "bsp": "Ich möchte eine Anzeige erstatten."
   },
   {
    "de": "der Diebstahl",
    "info": "jemand hat etwas gestohlen",
    "emoji": "🕵️",
    "bsp": "Der Diebstahl war gestern Abend am Bahnhof."
   },
   {
    "de": "die Zeugin",
    "info": "Person, die etwas gesehen hat",
    "emoji": "👀",
    "bsp": "Die Zeugin hat alles genau beobachtet."
   },
   {
    "de": "der Ausweis",
    "info": "Papier mit deinem Namen und Foto",
    "emoji": "🪪",
    "bsp": "Zeigen Sie mir bitte Ihren Ausweis."
   },
   {
    "de": "die Streife",
    "info": "zwei Polizisten, die unterwegs sind",
    "emoji": "🚔",
    "bsp": "Eine Streife kommt in zehn Minuten."
   },
   {
    "de": "der Notruf",
    "info": "der Anruf unter 110 oder 112",
    "emoji": "📞",
    "bsp": "Bei Gefahr wählst du den Notruf."
   },
   {
    "de": "die Aussage",
    "info": "was du bei der Polizei erzählst",
    "emoji": "🗣️",
    "bsp": "Meine Aussage steht im Protokoll."
   },
   {
    "de": "das Protokoll",
    "info": "der Text, den die Polizei mitschreibt",
    "emoji": "📝",
    "bsp": "Lesen Sie das Protokoll, bevor Sie unterschreiben."
   },
   {
    "de": "der Unfall",
    "info": "zwei Autos stoßen zusammen",
    "emoji": "💥",
    "bsp": "Nach dem Unfall haben wir die Polizei gerufen."
   },
   {
    "de": "die Fundsache",
    "info": "etwas, das jemand verloren hat",
    "emoji": "🔑",
    "bsp": "Mein Schlüssel liegt im Fundbüro als Fundsache."
   },
   {
    "de": "verdächtig",
    "info": "es sieht nicht normal aus",
    "emoji": "❓",
    "bsp": "Der Mann vor der Bank war mir verdächtig."
   },
   {
    "de": "anhalten",
    "info": "jemanden stoppen",
    "emoji": "✋",
    "bsp": "Die Polizei hat mich bei einer Kontrolle angehalten."
   },
   {
    "de": "die Kontrolle",
    "info": "die Polizei prüft Ausweis oder Auto",
    "emoji": "🔍",
    "bsp": "Bei der Kontrolle war alles in Ordnung."
   },
   {
    "de": "die Anschrift",
    "info": "Straße, Nummer und Ort, wo du wohnst",
    "emoji": "🏠",
    "bsp": "Bitte nennen Sie mir Ihre Anschrift."
   }
  ],
  "exercises": [
   {
    "type": "choice",
    "q": "Welches Wort passt: „du meldest der Polizei etwas Verbotenes“?",
    "options": [
     "anhalten",
     "die Anzeige",
     "die Zeugin",
     "die Streife"
    ],
    "answer": 1,
    "explain": "die Anzeige — du meldest der Polizei etwas Verbotenes."
   },
   {
    "type": "choice",
    "q": "Welches Wort passt: „jemand hat etwas gestohlen“?",
    "options": [
     "die Kontrolle",
     "der Diebstahl",
     "die Fundsache",
     "anhalten"
    ],
    "answer": 1,
    "explain": "der Diebstahl — jemand hat etwas gestohlen."
   },
   {
    "type": "choice",
    "q": "Welches Wort passt: „Person, die etwas gesehen hat“?",
    "options": [
     "der Ausweis",
     "der Diebstahl",
     "der Notruf",
     "die Zeugin"
    ],
    "answer": 3,
    "explain": "die Zeugin — Person, die etwas gesehen hat."
   },
   {
    "type": "choice",
    "q": "Welches Wort passt: „Papier mit deinem Namen und Foto“?",
    "options": [
     "das Protokoll",
     "die Anschrift",
     "der Ausweis",
     "der Diebstahl"
    ],
    "answer": 2,
    "explain": "der Ausweis — Papier mit deinem Namen und Foto."
   },
   {
    "type": "choice",
    "q": "Welches Wort passt: „zwei Polizisten, die unterwegs sind“?",
    "options": [
     "die Aussage",
     "der Ausweis",
     "die Streife",
     "anhalten"
    ],
    "answer": 2,
    "explain": "die Streife — zwei Polizisten, die unterwegs sind."
   },
   {
    "type": "choice",
    "q": "Welches Wort passt: „der Anruf unter 110 oder 112“?",
    "options": [
     "die Aussage",
     "der Notruf",
     "der Diebstahl",
     "der Ausweis"
    ],
    "answer": 1,
    "explain": "der Notruf — der Anruf unter 110 oder 112."
   },
   {
    "type": "choice",
    "q": "Welches Wort passt: „was du bei der Polizei erzählst“?",
    "options": [
     "der Ausweis",
     "die Streife",
     "der Diebstahl",
     "die Aussage"
    ],
    "answer": 3,
    "explain": "die Aussage — was du bei der Polizei erzählst."
   },
   {
    "type": "choice",
    "q": "Welches Wort passt: „der Text, den die Polizei mitschreibt“?",
    "options": [
     "verdächtig",
     "anhalten",
     "das Protokoll",
     "der Diebstahl"
    ],
    "answer": 2,
    "explain": "das Protokoll — der Text, den die Polizei mitschreibt."
   },
   {
    "type": "choice",
    "q": "Welches Wort passt: „zwei Autos stoßen zusammen“?",
    "options": [
     "die Fundsache",
     "der Unfall",
     "der Diebstahl",
     "der Ausweis"
    ],
    "answer": 1,
    "explain": "der Unfall — zwei Autos stoßen zusammen."
   },
   {
    "type": "choice",
    "q": "Welches Wort passt: „etwas, das jemand verloren hat“?",
    "options": [
     "der Ausweis",
     "die Fundsache",
     "der Notruf",
     "anhalten"
    ],
    "answer": 1,
    "explain": "die Fundsache — etwas, das jemand verloren hat."
   },
   {
    "type": "choice",
    "q": "Welches Wort passt: „es sieht nicht normal aus“?",
    "options": [
     "der Diebstahl",
     "die Anschrift",
     "anhalten",
     "verdächtig"
    ],
    "answer": 3,
    "explain": "verdächtig — es sieht nicht normal aus."
   },
   {
    "type": "choice",
    "q": "Welches Wort passt: „jemanden stoppen“?",
    "options": [
     "verdächtig",
     "anhalten",
     "der Ausweis",
     "die Kontrolle"
    ],
    "answer": 1,
    "explain": "anhalten — jemanden stoppen."
   },
   {
    "type": "choice",
    "q": "Welches Wort passt: „die Polizei prüft Ausweis oder Auto“?",
    "options": [
     "der Unfall",
     "der Notruf",
     "die Kontrolle",
     "die Fundsache"
    ],
    "answer": 2,
    "explain": "die Kontrolle — die Polizei prüft Ausweis oder Auto."
   },
   {
    "type": "choice",
    "q": "Welches Wort passt: „Straße, Nummer und Ort, wo du wohnst“?",
    "options": [
     "der Ausweis",
     "die Anschrift",
     "der Diebstahl",
     "die Zeugin"
    ],
    "answer": 1,
    "explain": "die Anschrift — Straße, Nummer und Ort, wo du wohnst."
   },
   {
    "type": "gap",
    "text": "Ich möchte eine ___ erstatten.",
    "answer": "Anzeige",
    "options": [
     "Anzeige",
     "Protokoll",
     "Fundsache"
    ],
    "hint": "du meldest der Polizei etwas Verbotenes"
   },
   {
    "type": "gap",
    "text": "Der ___ war gestern Abend am Bahnhof.",
    "answer": "Diebstahl",
    "options": [
     "Diebstahl",
     "Zeugin",
     "Streife"
    ],
    "hint": "jemand hat etwas gestohlen"
   },
   {
    "type": "gap",
    "text": "Die ___ hat alles genau beobachtet.",
    "answer": "Zeugin",
    "options": [
     "Zeugin",
     "verdächtig",
     "Kontrolle"
    ],
    "hint": "Person, die etwas gesehen hat"
   },
   {
    "type": "gap",
    "text": "Zeigen Sie mir bitte Ihren ___.",
    "answer": "Ausweis",
    "options": [
     "Ausweis",
     "Aussage",
     "Fundsache"
    ],
    "hint": "Papier mit deinem Namen und Foto"
   },
   {
    "type": "gap",
    "text": "Eine ___ kommt in zehn Minuten.",
    "answer": "Streife",
    "options": [
     "Streife",
     "Diebstahl",
     "Zeugin"
    ],
    "hint": "zwei Polizisten, die unterwegs sind"
   },
   {
    "type": "gap",
    "text": "Bei Gefahr wählst du den ___.",
    "answer": "Notruf",
    "options": [
     "Notruf",
     "Diebstahl",
     "Zeugin"
    ],
    "hint": "der Anruf unter 110 oder 112"
   },
   {
    "type": "gap",
    "text": "Meine ___ steht im Protokoll.",
    "answer": "Aussage",
    "options": [
     "Aussage",
     "Diebstahl",
     "Protokoll"
    ],
    "hint": "was du bei der Polizei erzählst"
   },
   {
    "type": "gap",
    "text": "Lesen Sie das ___, bevor Sie unterschreiben.",
    "answer": "Protokoll",
    "options": [
     "Protokoll",
     "anhalten",
     "verdächtig"
    ],
    "hint": "der Text, den die Polizei mitschreibt"
   },
   {
    "type": "gap",
    "text": "Nach dem ___ haben wir die Polizei gerufen.",
    "answer": "Unfall",
    "options": [
     "Unfall",
     "Diebstahl",
     "Kontrolle"
    ],
    "hint": "zwei Autos stoßen zusammen"
   },
   {
    "type": "gap",
    "text": "Mein Schlüssel liegt im Fundbüro als ___.",
    "answer": "Fundsache",
    "options": [
     "Fundsache",
     "Diebstahl",
     "Streife"
    ],
    "hint": "etwas, das jemand verloren hat"
   },
   {
    "type": "gap",
    "text": "Der Mann vor der Bank war mir ___.",
    "answer": "verdächtig",
    "options": [
     "verdächtig",
     "anhalten",
     "Anschrift"
    ],
    "hint": "es sieht nicht normal aus"
   },
   {
    "type": "gap",
    "text": "Bei der ___ war alles in Ordnung.",
    "answer": "Kontrolle",
    "options": [
     "Kontrolle",
     "Zeugin",
     "Ausweis"
    ],
    "hint": "die Polizei prüft Ausweis oder Auto"
   },
   {
    "type": "gap",
    "text": "Bitte nennen Sie mir Ihre ___.",
    "answer": "Anschrift",
    "options": [
     "Anschrift",
     "Diebstahl",
     "Streife"
    ],
    "hint": "Straße, Nummer und Ort, wo du wohnst"
   },
   {
    "type": "match",
    "intro": "Ordne Wort und Bedeutung zu:",
    "pairs": [
     {
      "l": "die Anzeige",
      "r": "du meldest der Polizei etwas Verbotenes"
     },
     {
      "l": "der Diebstahl",
      "r": "jemand hat etwas gestohlen"
     },
     {
      "l": "die Zeugin",
      "r": "Person, die etwas gesehen hat"
     },
     {
      "l": "der Ausweis",
      "r": "Papier mit deinem Namen und Foto"
     }
    ]
   },
   {
    "type": "match",
    "intro": "Ordne Wort und Bedeutung zu:",
    "pairs": [
     {
      "l": "die Streife",
      "r": "zwei Polizisten, die unterwegs sind"
     },
     {
      "l": "der Notruf",
      "r": "der Anruf unter 110 oder 112"
     },
     {
      "l": "die Aussage",
      "r": "was du bei der Polizei erzählst"
     },
     {
      "l": "das Protokoll",
      "r": "der Text, den die Polizei mitschreibt"
     }
    ]
   },
   {
    "type": "match",
    "intro": "Ordne Wort und Bedeutung zu:",
    "pairs": [
     {
      "l": "der Unfall",
      "r": "zwei Autos stoßen zusammen"
     },
     {
      "l": "die Fundsache",
      "r": "etwas, das jemand verloren hat"
     },
     {
      "l": "verdächtig",
      "r": "es sieht nicht normal aus"
     },
     {
      "l": "anhalten",
      "r": "jemanden stoppen"
     }
    ]
   }
  ]
 },
 {
  "id": "bau-neu",
  "title": "Auf dem Bau — Baustelle & Sicherheit",
  "level": "B1",
  "emoji": "🏗️",
  "words": [
   {
    "de": "die Baustelle",
    "info": "der Ort, an dem gebaut wird",
    "emoji": "🏗️",
    "bsp": "Auf der Baustelle gilt Helmpflicht."
   },
   {
    "de": "der Helm",
    "info": "Schutz für den Kopf",
    "emoji": "⛑️",
    "bsp": "Ohne Helm darfst du hier nicht arbeiten."
   },
   {
    "de": "das Gerüst",
    "info": "Stangen und Bretter zum Arbeiten in der Höhe",
    "emoji": "🪜",
    "bsp": "Wir bauen morgen das Gerüst auf."
   },
   {
    "de": "der Bauleiter",
    "info": "plant, prüft und verantwortet den ganzen Bau",
    "emoji": "👷",
    "bsp": "Der Bauleiter sagt, wann wir anfangen."
   },
   {
    "de": "der Zement",
    "info": "graues Pulver für Beton und Mörtel",
    "emoji": "🪣",
    "bsp": "Der Zement muss trocken gelagert werden."
   },
   {
    "de": "die Mischung",
    "info": "Zement, Sand und Wasser zusammen",
    "emoji": "🥣",
    "bsp": "Die Mischung ist zu nass."
   },
   {
    "de": "die Wasserwaage",
    "info": "Werkzeug: ist es gerade?",
    "emoji": "📏",
    "bsp": "Nimm die Wasserwaage, die Reihe ist schief."
   },
   {
    "de": "die Schalung",
    "info": "die Form aus Holz, in die Beton kommt",
    "emoji": "🪵",
    "bsp": "Die Schalung kommt morgen weg."
   },
   {
    "de": "der Bagger",
    "info": "Maschine, die Erde aushebt",
    "emoji": "🚜",
    "bsp": "Der Bagger hebt den Graben aus."
   },
   {
    "de": "die Absperrung",
    "info": "Zaun oder Band gegen Gefahr",
    "emoji": "🚧",
    "bsp": "Stell bitte die Absperrung vor die Grube."
   },
   {
    "de": "abstützen",
    "info": "etwas festhalten, damit es nicht fällt",
    "emoji": "🪤",
    "bsp": "Wir müssen die Wand abstützen."
   },
   {
    "de": "die Unfallgefahr",
    "info": "hier kann leicht etwas passieren",
    "emoji": "⚠️",
    "bsp": "Hier ist Unfallgefahr, geh außen herum."
   },
   {
    "de": "der Schutt",
    "info": "Reste von Stein und Beton",
    "emoji": "🗑️",
    "bsp": "Der Schutt kommt in den Container."
   },
   {
    "de": "der Auftrag",
    "info": "die Arbeit, die eine Firma erledigen soll",
    "emoji": "📋",
    "bsp": "Der Auftrag muss bis Freitag fertig sein."
   }
  ],
  "exercises": [
   {
    "type": "choice",
    "q": "Welches Wort passt: „der Ort, an dem gebaut wird“?",
    "options": [
     "die Unfallgefahr",
     "die Baustelle",
     "der Schutt",
     "die Absperrung"
    ],
    "answer": 1,
    "explain": "die Baustelle — der Ort, an dem gebaut wird."
   },
   {
    "type": "choice",
    "q": "Welches Wort passt: „Schutz für den Kopf“?",
    "options": [
     "der Bauleiter",
     "der Helm",
     "die Mischung",
     "das Gerüst"
    ],
    "answer": 1,
    "explain": "der Helm — Schutz für den Kopf."
   },
   {
    "type": "choice",
    "q": "Welches Wort passt: „Stangen und Bretter zum Arbeiten in der Höhe“?",
    "options": [
     "der Helm",
     "die Schalung",
     "der Auftrag",
     "das Gerüst"
    ],
    "answer": 3,
    "explain": "das Gerüst — Stangen und Bretter zum Arbeiten in der Höhe."
   },
   {
    "type": "choice",
    "q": "Welches Wort passt: „der Chef auf der Baustelle“?",
    "options": [
     "der Zement",
     "die Unfallgefahr",
     "der Bauleiter",
     "die Wasserwaage"
    ],
    "answer": 2,
    "explain": "der Bauleiter — der Chef auf der Baustelle."
   },
   {
    "type": "choice",
    "q": "Welches Wort passt: „graues Pulver für Beton und Mörtel“?",
    "options": [
     "der Helm",
     "der Bauleiter",
     "der Zement",
     "die Wasserwaage"
    ],
    "answer": 2,
    "explain": "der Zement — graues Pulver für Beton und Mörtel."
   },
   {
    "type": "choice",
    "q": "Welches Wort passt: „Zement, Sand und Wasser zusammen“?",
    "options": [
     "der Bauleiter",
     "die Mischung",
     "der Helm",
     "der Zement"
    ],
    "answer": 1,
    "explain": "die Mischung — Zement, Sand und Wasser zusammen."
   },
   {
    "type": "choice",
    "q": "Welches Wort passt: „Werkzeug: ist es gerade?“?",
    "options": [
     "die Unfallgefahr",
     "abstützen",
     "der Helm",
     "die Wasserwaage"
    ],
    "answer": 3,
    "explain": "die Wasserwaage — Werkzeug: ist es gerade?."
   },
   {
    "type": "choice",
    "q": "Welches Wort passt: „die Form aus Holz, in die Beton kommt“?",
    "options": [
     "der Helm",
     "der Bauleiter",
     "die Schalung",
     "die Absperrung"
    ],
    "answer": 2,
    "explain": "die Schalung — die Form aus Holz, in die Beton kommt."
   },
   {
    "type": "choice",
    "q": "Welches Wort passt: „Maschine, die Erde aushebt“?",
    "options": [
     "die Mischung",
     "der Bagger",
     "die Unfallgefahr",
     "der Bauleiter"
    ],
    "answer": 1,
    "explain": "der Bagger — Maschine, die Erde aushebt."
   },
   {
    "type": "choice",
    "q": "Welches Wort passt: „Zaun oder Band gegen Gefahr“?",
    "options": [
     "die Unfallgefahr",
     "die Absperrung",
     "der Helm",
     "der Auftrag"
    ],
    "answer": 1,
    "explain": "die Absperrung — Zaun oder Band gegen Gefahr."
   },
   {
    "type": "choice",
    "q": "Welches Wort passt: „etwas festhalten, damit es nicht fällt“?",
    "options": [
     "der Schutt",
     "die Unfallgefahr",
     "der Bauleiter",
     "abstützen"
    ],
    "answer": 3,
    "explain": "abstützen — etwas festhalten, damit es nicht fällt."
   },
   {
    "type": "choice",
    "q": "Welches Wort passt: „hier kann leicht etwas passieren“?",
    "options": [
     "die Mischung",
     "die Unfallgefahr",
     "die Absperrung",
     "der Bagger"
    ],
    "answer": 1,
    "explain": "die Unfallgefahr — hier kann leicht etwas passieren."
   },
   {
    "type": "choice",
    "q": "Welches Wort passt: „Reste von Stein und Beton“?",
    "options": [
     "der Helm",
     "das Gerüst",
     "der Schutt",
     "der Bauleiter"
    ],
    "answer": 2,
    "explain": "der Schutt — Reste von Stein und Beton."
   },
   {
    "type": "choice",
    "q": "Welches Wort passt: „die Arbeit, die eine Firma erledigen soll“?",
    "options": [
     "abstützen",
     "der Auftrag",
     "die Wasserwaage",
     "der Bauleiter"
    ],
    "answer": 1,
    "explain": "der Auftrag — die Arbeit, die eine Firma erledigen soll."
   },
   {
    "type": "gap",
    "text": "Auf der ___ gilt Helmpflicht.",
    "answer": "Baustelle",
    "options": [
     "Baustelle",
     "Gerüst",
     "Zement"
    ],
    "hint": "der Ort, an dem gebaut wird"
   },
   {
    "type": "gap",
    "text": "Ohne ___ darfst du hier nicht arbeiten.",
    "answer": "Helm",
    "options": [
     "Helm",
     "abstützen",
     "Schutt"
    ],
    "hint": "Schutz für den Kopf"
   },
   {
    "type": "gap",
    "text": "Wir bauen morgen das ___ auf.",
    "answer": "Gerüst",
    "options": [
     "Gerüst",
     "Wasserwaage",
     "Absperrung"
    ],
    "hint": "Stangen und Bretter zum Arbeiten in der Höhe"
   },
   {
    "type": "gap",
    "text": "Der ___ sagt, wann wir anfangen.",
    "answer": "Bauleiter",
    "options": [
     "Bauleiter",
     "Helm",
     "Gerüst"
    ],
    "hint": "plant, prüft und verantwortet den ganzen Bau"
   },
   {
    "type": "gap",
    "text": "Der ___ muss trocken gelagert werden.",
    "answer": "Zement",
    "options": [
     "Zement",
     "Helm",
     "Gerüst"
    ],
    "hint": "graues Pulver für Beton und Mörtel"
   },
   {
    "type": "gap",
    "text": "Die ___ ist zu nass.",
    "answer": "Mischung",
    "options": [
     "Mischung",
     "Helm",
     "Schalung"
    ],
    "hint": "Zement, Sand und Wasser zusammen"
   },
   {
    "type": "gap",
    "text": "Nimm die ___, die Reihe ist schief.",
    "answer": "Wasserwaage",
    "options": [
     "Wasserwaage",
     "Unfallgefahr",
     "abstützen"
    ],
    "hint": "Werkzeug: ist es gerade?"
   },
   {
    "type": "gap",
    "text": "Die ___ kommt morgen weg.",
    "answer": "Schalung",
    "options": [
     "Schalung",
     "Helm",
     "Schutt"
    ],
    "hint": "die Form aus Holz, in die Beton kommt"
   },
   {
    "type": "gap",
    "text": "Der ___ hebt den Graben aus.",
    "answer": "Bagger",
    "options": [
     "Bagger",
     "Helm",
     "Zement"
    ],
    "hint": "Maschine, die Erde aushebt"
   },
   {
    "type": "gap",
    "text": "Stell bitte die ___ vor die Grube.",
    "answer": "Absperrung",
    "options": [
     "Absperrung",
     "Unfallgefahr",
     "Auftrag"
    ],
    "hint": "Zaun oder Band gegen Gefahr"
   },
   {
    "type": "gap",
    "text": "Wir müssen die Wand ___.",
    "answer": "abstützen",
    "options": [
     "abstützen",
     "Absperrung",
     "Bauleiter"
    ],
    "hint": "etwas festhalten, damit es nicht fällt"
   },
   {
    "type": "gap",
    "text": "Hier ist ___, geh außen herum.",
    "answer": "Unfallgefahr",
    "options": [
     "Unfallgefahr",
     "Gerüst",
     "Bauleiter"
    ],
    "hint": "hier kann leicht etwas passieren"
   },
   {
    "type": "gap",
    "text": "Der ___ kommt in den Container.",
    "answer": "Schutt",
    "options": [
     "Schutt",
     "Helm",
     "Zement"
    ],
    "hint": "Reste von Stein und Beton"
   },
   {
    "type": "gap",
    "text": "Der ___ muss bis Freitag fertig sein.",
    "answer": "Auftrag",
    "options": [
     "Auftrag",
     "Zement",
     "Bauleiter"
    ],
    "hint": "die Arbeit, die eine Firma erledigen soll"
   },
   {
    "type": "match",
    "intro": "Ordne Wort und Bedeutung zu:",
    "pairs": [
     {
      "l": "die Baustelle",
      "r": "der Ort, an dem gebaut wird"
     },
     {
      "l": "der Helm",
      "r": "Schutz für den Kopf"
     },
     {
      "l": "das Gerüst",
      "r": "Stangen und Bretter zum Arbeiten in der Höhe"
     },
     {
      "l": "der Bauleiter",
      "r": "plant, prüft und verantwortet den ganzen Bau"
     }
    ]
   },
   {
    "type": "match",
    "intro": "Ordne Wort und Bedeutung zu:",
    "pairs": [
     {
      "l": "der Zement",
      "r": "graues Pulver für Beton und Mörtel"
     },
     {
      "l": "die Mischung",
      "r": "Zement, Sand und Wasser zusammen"
     },
     {
      "l": "die Wasserwaage",
      "r": "Werkzeug: ist es gerade?"
     },
     {
      "l": "die Schalung",
      "r": "die Form aus Holz, in die Beton kommt"
     }
    ]
   },
   {
    "type": "match",
    "intro": "Ordne Wort und Bedeutung zu:",
    "pairs": [
     {
      "l": "der Bagger",
      "r": "Maschine, die Erde aushebt"
     },
     {
      "l": "die Absperrung",
      "r": "Zaun oder Band gegen Gefahr"
     },
     {
      "l": "abstützen",
      "r": "etwas festhalten, damit es nicht fällt"
     },
     {
      "l": "die Unfallgefahr",
      "r": "hier kann leicht etwas passieren"
     }
    ]
   }
  ]
 },
 {
  "id": "elektro-shk-neu",
  "title": "Elektro & SHK — Anlage, Störung, Wartung",
  "level": "B1",
  "emoji": "🔌",
  "words": [
   {
    "de": "die Leitung",
    "info": "Kabel oder Rohr in der Wand",
    "emoji": "🧵",
    "bsp": "Die Leitung liegt in der Wand."
   },
   {
    "de": "die Steckdose",
    "info": "dort steckst du den Stecker hinein",
    "emoji": "🔌",
    "bsp": "In der Küche fehlt noch eine Steckdose."
   },
   {
    "de": "der Sicherungskasten",
    "info": "der Kasten mit den Sicherungen",
    "emoji": "🗄️",
    "bsp": "Der Sicherungskasten ist im Flur."
   },
   {
    "de": "spannungsfrei",
    "info": "es fließt kein Strom mehr",
    "emoji": "🚫",
    "bsp": "Arbeite nur, wenn die Leitung spannungsfrei ist."
   },
   {
    "de": "das Kabel",
    "info": "der Draht mit Kunststoff außen",
    "emoji": "🔗",
    "bsp": "Das Kabel ist zu kurz."
   },
   {
    "de": "der Kurzschluss",
    "info": "zwei Drähte berühren sich, der Strom fällt aus",
    "emoji": "⚡",
    "bsp": "Ein Kurzschluss hat die Sicherung ausgelöst."
   },
   {
    "de": "die Heizung",
    "info": "macht die Wohnung warm",
    "emoji": "🔥",
    "bsp": "Die Heizung wird oben nicht warm."
   },
   {
    "de": "das Ventil",
    "info": "kleiner Hahn, der öffnet und schließt",
    "emoji": "🎛️",
    "bsp": "Das Ventil tropft."
   },
   {
    "de": "die Dichtung",
    "info": "Gummi oder Ring, damit nichts ausläuft",
    "emoji": "⭕",
    "bsp": "Ich wechsle die Dichtung, dann ist es dicht."
   },
   {
    "de": "der Abfluss",
    "info": "das Rohr, durch das Wasser wegläuft",
    "emoji": "🚿",
    "bsp": "Der Abfluss in der Dusche ist verstopft."
   },
   {
    "de": "der Druck",
    "info": "wie stark Wasser oder Luft drückt",
    "emoji": "📈",
    "bsp": "Der Druck in der Anlage ist zu niedrig."
   },
   {
    "de": "die Wartung",
    "info": "regelmäßiges Prüfen, damit nichts kaputtgeht",
    "emoji": "🧰",
    "bsp": "Die Wartung machen wir einmal im Jahr."
   },
   {
    "de": "entlüften",
    "info": "Luft aus der Heizung lassen",
    "emoji": "💨",
    "bsp": "Ich muss die Heizkörper entlüften."
   },
   {
    "de": "die Störung",
    "info": "etwas funktioniert nicht",
    "emoji": "❗",
    "bsp": "Die Störung ist seit gestern bekannt."
   }
  ],
  "exercises": [
   {
    "type": "choice",
    "q": "Welches Wort passt: „Kabel oder Rohr in der Wand“?",
    "options": [
     "der Sicherungskasten",
     "die Leitung",
     "spannungsfrei",
     "der Kurzschluss"
    ],
    "answer": 1,
    "explain": "die Leitung — Kabel oder Rohr in der Wand."
   },
   {
    "type": "choice",
    "q": "Welches Wort passt: „dort steckst du den Stecker hinein“?",
    "options": [
     "der Sicherungskasten",
     "die Steckdose",
     "die Störung",
     "das Ventil"
    ],
    "answer": 1,
    "explain": "die Steckdose — dort steckst du den Stecker hinein."
   },
   {
    "type": "choice",
    "q": "Welches Wort passt: „der Kasten mit den Sicherungen“?",
    "options": [
     "die Heizung",
     "das Kabel",
     "die Wartung",
     "der Sicherungskasten"
    ],
    "answer": 3,
    "explain": "der Sicherungskasten — der Kasten mit den Sicherungen."
   },
   {
    "type": "choice",
    "q": "Welches Wort passt: „es fließt kein Strom mehr“?",
    "options": [
     "das Kabel",
     "die Heizung",
     "spannungsfrei",
     "die Steckdose"
    ],
    "answer": 2,
    "explain": "spannungsfrei — es fließt kein Strom mehr."
   },
   {
    "type": "choice",
    "q": "Welches Wort passt: „der Draht mit Kunststoff außen“?",
    "options": [
     "die Steckdose",
     "der Kurzschluss",
     "das Kabel",
     "spannungsfrei"
    ],
    "answer": 2,
    "explain": "das Kabel — der Draht mit Kunststoff außen."
   },
   {
    "type": "choice",
    "q": "Welches Wort passt: „zwei Drähte berühren sich, der Strom fällt aus“?",
    "options": [
     "die Wartung",
     "der Kurzschluss",
     "die Steckdose",
     "der Druck"
    ],
    "answer": 1,
    "explain": "der Kurzschluss — zwei Drähte berühren sich, der Strom fällt aus."
   },
   {
    "type": "choice",
    "q": "Welches Wort passt: „macht die Wohnung warm“?",
    "options": [
     "spannungsfrei",
     "die Steckdose",
     "der Abfluss",
     "die Heizung"
    ],
    "answer": 3,
    "explain": "die Heizung — macht die Wohnung warm."
   },
   {
    "type": "choice",
    "q": "Welches Wort passt: „kleiner Hahn, der öffnet und schließt“?",
    "options": [
     "die Wartung",
     "spannungsfrei",
     "das Ventil",
     "der Kurzschluss"
    ],
    "answer": 2,
    "explain": "das Ventil — kleiner Hahn, der öffnet und schließt."
   },
   {
    "type": "choice",
    "q": "Welches Wort passt: „Gummi oder Ring, damit nichts ausläuft“?",
    "options": [
     "die Steckdose",
     "die Dichtung",
     "die Störung",
     "die Wartung"
    ],
    "answer": 1,
    "explain": "die Dichtung — Gummi oder Ring, damit nichts ausläuft."
   },
   {
    "type": "choice",
    "q": "Welches Wort passt: „das Rohr, durch das Wasser wegläuft“?",
    "options": [
     "spannungsfrei",
     "der Abfluss",
     "entlüften",
     "die Wartung"
    ],
    "answer": 1,
    "explain": "der Abfluss — das Rohr, durch das Wasser wegläuft."
   },
   {
    "type": "choice",
    "q": "Welches Wort passt: „wie stark Wasser oder Luft drückt“?",
    "options": [
     "die Dichtung",
     "der Kurzschluss",
     "der Abfluss",
     "der Druck"
    ],
    "answer": 3,
    "explain": "der Druck — wie stark Wasser oder Luft drückt."
   },
   {
    "type": "choice",
    "q": "Welches Wort passt: „regelmäßiges Prüfen, damit nichts kaputtgeht“?",
    "options": [
     "der Sicherungskasten",
     "die Wartung",
     "spannungsfrei",
     "die Steckdose"
    ],
    "answer": 1,
    "explain": "die Wartung — regelmäßiges Prüfen, damit nichts kaputtgeht."
   },
   {
    "type": "choice",
    "q": "Welches Wort passt: „Luft aus der Heizung lassen“?",
    "options": [
     "die Heizung",
     "spannungsfrei",
     "entlüften",
     "der Druck"
    ],
    "answer": 2,
    "explain": "entlüften — Luft aus der Heizung lassen."
   },
   {
    "type": "choice",
    "q": "Welches Wort passt: „etwas funktioniert nicht“?",
    "options": [
     "der Kurzschluss",
     "die Störung",
     "der Druck",
     "das Kabel"
    ],
    "answer": 1,
    "explain": "die Störung — etwas funktioniert nicht."
   },
   {
    "type": "gap",
    "text": "Die ___ liegt in der Wand.",
    "answer": "Leitung",
    "options": [
     "Leitung",
     "Druck",
     "entlüften"
    ],
    "hint": "Kabel oder Rohr in der Wand"
   },
   {
    "type": "gap",
    "text": "In der Küche fehlt noch eine ___.",
    "answer": "Steckdose",
    "options": [
     "Steckdose",
     "Heizung",
     "Abfluss"
    ],
    "hint": "dort steckst du den Stecker hinein"
   },
   {
    "type": "gap",
    "text": "Der ___ ist im Flur.",
    "answer": "Sicherungskasten",
    "options": [
     "Sicherungskasten",
     "Steckdose",
     "spannungsfrei"
    ],
    "hint": "der Kasten mit den Sicherungen"
   },
   {
    "type": "gap",
    "text": "Arbeite nur, wenn die Leitung ___ ist.",
    "answer": "spannungsfrei",
    "options": [
     "spannungsfrei",
     "Steckdose",
     "Sicherungskasten"
    ],
    "hint": "es fließt kein Strom mehr"
   },
   {
    "type": "gap",
    "text": "Das ___ ist zu kurz.",
    "answer": "Kabel",
    "options": [
     "Kabel",
     "Steckdose",
     "Ventil"
    ],
    "hint": "der Draht mit Kunststoff außen"
   },
   {
    "type": "gap",
    "text": "Ein ___ hat die Sicherung ausgelöst.",
    "answer": "Kurzschluss",
    "options": [
     "Kurzschluss",
     "Wartung",
     "Druck"
    ],
    "hint": "zwei Drähte berühren sich, der Strom fällt aus"
   },
   {
    "type": "gap",
    "text": "Die ___ wird oben nicht warm.",
    "answer": "Heizung",
    "options": [
     "Heizung",
     "Steckdose",
     "entlüften"
    ],
    "hint": "macht die Wohnung warm"
   },
   {
    "type": "gap",
    "text": "Das ___ tropft.",
    "answer": "Ventil",
    "options": [
     "Ventil",
     "Steckdose",
     "Kabel"
    ],
    "hint": "kleiner Hahn, der öffnet und schließt"
   },
   {
    "type": "gap",
    "text": "Ich wechsle die ___, dann ist es dicht.",
    "answer": "Dichtung",
    "options": [
     "Dichtung",
     "Wartung",
     "Störung"
    ],
    "hint": "Gummi oder Ring, damit nichts ausläuft"
   },
   {
    "type": "gap",
    "text": "Der ___ in der Dusche ist verstopft.",
    "answer": "Abfluss",
    "options": [
     "Abfluss",
     "Druck",
     "spannungsfrei"
    ],
    "hint": "das Rohr, durch das Wasser wegläuft"
   },
   {
    "type": "gap",
    "text": "Der ___ in der Anlage ist zu niedrig.",
    "answer": "Druck",
    "options": [
     "Druck",
     "Sicherungskasten",
     "spannungsfrei"
    ],
    "hint": "wie stark Wasser oder Luft drückt"
   },
   {
    "type": "gap",
    "text": "Die ___ machen wir einmal im Jahr.",
    "answer": "Wartung",
    "options": [
     "Wartung",
     "Steckdose",
     "Kabel"
    ],
    "hint": "regelmäßiges Prüfen, damit nichts kaputtgeht"
   },
   {
    "type": "gap",
    "text": "Ich muss die Heizkörper ___.",
    "answer": "entlüften",
    "options": [
     "entlüften",
     "Kabel",
     "spannungsfrei"
    ],
    "hint": "Luft aus der Heizung lassen"
   },
   {
    "type": "gap",
    "text": "Die ___ ist seit gestern bekannt.",
    "answer": "Störung",
    "options": [
     "Störung",
     "Druck",
     "Kurzschluss"
    ],
    "hint": "etwas funktioniert nicht"
   },
   {
    "type": "match",
    "intro": "Ordne Wort und Bedeutung zu:",
    "pairs": [
     {
      "l": "die Leitung",
      "r": "Kabel oder Rohr in der Wand"
     },
     {
      "l": "die Steckdose",
      "r": "dort steckst du den Stecker hinein"
     },
     {
      "l": "der Sicherungskasten",
      "r": "der Kasten mit den Sicherungen"
     },
     {
      "l": "spannungsfrei",
      "r": "es fließt kein Strom mehr"
     }
    ]
   },
   {
    "type": "match",
    "intro": "Ordne Wort und Bedeutung zu:",
    "pairs": [
     {
      "l": "das Kabel",
      "r": "der Draht mit Kunststoff außen"
     },
     {
      "l": "der Kurzschluss",
      "r": "zwei Drähte berühren sich, der Strom fällt aus"
     },
     {
      "l": "die Heizung",
      "r": "macht die Wohnung warm"
     },
     {
      "l": "das Ventil",
      "r": "kleiner Hahn, der öffnet und schließt"
     }
    ]
   },
   {
    "type": "match",
    "intro": "Ordne Wort und Bedeutung zu:",
    "pairs": [
     {
      "l": "die Dichtung",
      "r": "Gummi oder Ring, damit nichts ausläuft"
     },
     {
      "l": "der Abfluss",
      "r": "das Rohr, durch das Wasser wegläuft"
     },
     {
      "l": "der Druck",
      "r": "wie stark Wasser oder Luft drückt"
     },
     {
      "l": "die Wartung",
      "r": "regelmäßiges Prüfen, damit nichts kaputtgeht"
     }
    ]
   }
  ]
 },
 {
  "id": "metall-neu",
  "title": "Metall — Werkstatt, Maß, Sicherheit",
  "level": "B1",
  "emoji": "🔩",
  "words": [
   {
    "de": "die Werkbank",
    "info": "der Tisch, an dem du arbeitest",
    "emoji": "🛠️",
    "bsp": "Leg das Teil auf die Werkbank."
   },
   {
    "de": "der Schraubstock",
    "info": "hält das Werkstück fest",
    "emoji": "🗜️",
    "bsp": "Spann das Rohr in den Schraubstock."
   },
   {
    "de": "die Feile",
    "info": "Werkzeug, das Kanten glatt macht",
    "emoji": "📐",
    "bsp": "Mit der Feile wird die Kante glatt."
   },
   {
    "de": "schweißen",
    "info": "zwei Metallteile mit Hitze verbinden",
    "emoji": "🔥",
    "bsp": "Die beiden Teile werden geschweißt."
   },
   {
    "de": "die Naht",
    "info": "die Linie, an der geschweißt wurde",
    "emoji": "➰",
    "bsp": "Die Naht muss sauber sein."
   },
   {
    "de": "bohren",
    "info": "ein rundes Loch machen",
    "emoji": "🕳️",
    "bsp": "Bohre hier ein Loch mit acht Millimetern."
   },
   {
    "de": "das Maß",
    "info": "die genaue Größe in Millimetern",
    "emoji": "📏",
    "bsp": "Das Maß stimmt nicht, es ist zwei Millimeter zu lang."
   },
   {
    "de": "die Toleranz",
    "info": "wie viel Abweichung erlaubt ist",
    "emoji": "➕",
    "bsp": "Die Toleranz liegt bei einem Zehntel."
   },
   {
    "de": "der Grat",
    "info": "die scharfe Kante nach dem Schneiden",
    "emoji": "🔪",
    "bsp": "Nimm den Grat weg, sonst schneidet die Kante."
   },
   {
    "de": "die Zeichnung",
    "info": "das Blatt mit allen Maßen",
    "emoji": "📃",
    "bsp": "Auf der Zeichnung steht das genaue Maß."
   },
   {
    "de": "die Schutzbrille",
    "info": "Schutz für die Augen",
    "emoji": "🥽",
    "bsp": "Ohne Schutzbrille wird nicht geschliffen."
   },
   {
    "de": "der Span",
    "info": "der kleine Rest, der beim Bohren abfällt",
    "emoji": "🌀",
    "bsp": "Die Späne kommen in den Behälter."
   },
   {
    "de": "spannen",
    "info": "ein Teil fest einklemmen",
    "emoji": "🧷",
    "bsp": "Spann das Werkstück fest ein."
   },
   {
    "de": "prüfen",
    "info": "nachmessen, ob alles stimmt",
    "emoji": "✅",
    "bsp": "Prüfe das Teil mit dem Messschieber."
   }
  ],
  "exercises": [
   {
    "type": "choice",
    "q": "Welches Wort passt: „der Tisch, an dem du arbeitest“?",
    "options": [
     "die Toleranz",
     "die Werkbank",
     "die Feile",
     "prüfen"
    ],
    "answer": 1,
    "explain": "die Werkbank — der Tisch, an dem du arbeitest."
   },
   {
    "type": "choice",
    "q": "Welches Wort passt: „hält das Werkstück fest“?",
    "options": [
     "das Maß",
     "der Schraubstock",
     "der Span",
     "die Naht"
    ],
    "answer": 1,
    "explain": "der Schraubstock — hält das Werkstück fest."
   },
   {
    "type": "choice",
    "q": "Welches Wort passt: „Werkzeug, das Kanten glatt macht“?",
    "options": [
     "der Schraubstock",
     "die Naht",
     "das Maß",
     "die Feile"
    ],
    "answer": 3,
    "explain": "die Feile — Werkzeug, das Kanten glatt macht."
   },
   {
    "type": "choice",
    "q": "Welches Wort passt: „zwei Metallteile mit Hitze verbinden“?",
    "options": [
     "bohren",
     "die Naht",
     "schweißen",
     "der Schraubstock"
    ],
    "answer": 2,
    "explain": "schweißen — zwei Metallteile mit Hitze verbinden."
   },
   {
    "type": "choice",
    "q": "Welches Wort passt: „die Linie, an der geschweißt wurde“?",
    "options": [
     "der Schraubstock",
     "die Schutzbrille",
     "die Naht",
     "der Span"
    ],
    "answer": 2,
    "explain": "die Naht — die Linie, an der geschweißt wurde."
   },
   {
    "type": "choice",
    "q": "Welches Wort passt: „ein rundes Loch machen“?",
    "options": [
     "schweißen",
     "bohren",
     "die Zeichnung",
     "der Schraubstock"
    ],
    "answer": 1,
    "explain": "bohren — ein rundes Loch machen."
   },
   {
    "type": "choice",
    "q": "Welches Wort passt: „die genaue Größe in Millimetern“?",
    "options": [
     "schweißen",
     "der Span",
     "bohren",
     "das Maß"
    ],
    "answer": 3,
    "explain": "das Maß — die genaue Größe in Millimetern."
   },
   {
    "type": "choice",
    "q": "Welches Wort passt: „wie viel Abweichung erlaubt ist“?",
    "options": [
     "prüfen",
     "der Span",
     "die Toleranz",
     "der Schraubstock"
    ],
    "answer": 2,
    "explain": "die Toleranz — wie viel Abweichung erlaubt ist."
   },
   {
    "type": "choice",
    "q": "Welches Wort passt: „die scharfe Kante nach dem Schneiden“?",
    "options": [
     "spannen",
     "der Grat",
     "der Span",
     "schweißen"
    ],
    "answer": 1,
    "explain": "der Grat — die scharfe Kante nach dem Schneiden."
   },
   {
    "type": "choice",
    "q": "Welches Wort passt: „das Blatt mit allen Maßen“?",
    "options": [
     "die Schutzbrille",
     "die Zeichnung",
     "der Grat",
     "bohren"
    ],
    "answer": 1,
    "explain": "die Zeichnung — das Blatt mit allen Maßen."
   },
   {
    "type": "choice",
    "q": "Welches Wort passt: „Schutz für die Augen“?",
    "options": [
     "der Schraubstock",
     "die Feile",
     "schweißen",
     "die Schutzbrille"
    ],
    "answer": 3,
    "explain": "die Schutzbrille — Schutz für die Augen."
   },
   {
    "type": "choice",
    "q": "Welches Wort passt: „der kleine Rest, der beim Bohren abfällt“?",
    "options": [
     "schweißen",
     "der Span",
     "die Schutzbrille",
     "das Maß"
    ],
    "answer": 1,
    "explain": "der Span — der kleine Rest, der beim Bohren abfällt."
   },
   {
    "type": "choice",
    "q": "Welches Wort passt: „ein Teil fest einklemmen“?",
    "options": [
     "die Schutzbrille",
     "die Naht",
     "spannen",
     "bohren"
    ],
    "answer": 2,
    "explain": "spannen — ein Teil fest einklemmen."
   },
   {
    "type": "choice",
    "q": "Welches Wort passt: „nachmessen, ob alles stimmt“?",
    "options": [
     "die Schutzbrille",
     "prüfen",
     "der Grat",
     "der Schraubstock"
    ],
    "answer": 1,
    "explain": "prüfen — nachmessen, ob alles stimmt."
   },
   {
    "type": "gap",
    "text": "Leg das Teil auf die ___.",
    "answer": "Werkbank",
    "options": [
     "Werkbank",
     "Maß",
     "Zeichnung"
    ],
    "hint": "der Tisch, an dem du arbeitest"
   },
   {
    "type": "gap",
    "text": "Spann das Rohr in den ___.",
    "answer": "Schraubstock",
    "options": [
     "Schraubstock",
     "Feile",
     "schweißen"
    ],
    "hint": "hält das Werkstück fest"
   },
   {
    "type": "gap",
    "text": "Mit der ___ wird die Kante glatt.",
    "answer": "Feile",
    "options": [
     "Feile",
     "Schraubstock",
     "schweißen"
    ],
    "hint": "Werkzeug, das Kanten glatt macht"
   },
   {
    "type": "gap",
    "text": "Die ___ muss sauber sein.",
    "answer": "Naht",
    "options": [
     "Naht",
     "Span",
     "Schutzbrille"
    ],
    "hint": "die Linie, an der geschweißt wurde"
   },
   {
    "type": "gap",
    "text": "Das ___ stimmt nicht, es ist zwei Millimeter zu lang.",
    "answer": "Maß",
    "options": [
     "Maß",
     "Schraubstock",
     "Naht"
    ],
    "hint": "die genaue Größe in Millimetern"
   },
   {
    "type": "gap",
    "text": "Die ___ liegt bei einem Zehntel.",
    "answer": "Toleranz",
    "options": [
     "Toleranz",
     "Span",
     "prüfen"
    ],
    "hint": "wie viel Abweichung erlaubt ist"
   },
   {
    "type": "gap",
    "text": "Nimm den ___ weg, sonst schneidet die Kante.",
    "answer": "Grat",
    "options": [
     "Grat",
     "Schutzbrille",
     "schweißen"
    ],
    "hint": "die scharfe Kante nach dem Schneiden"
   },
   {
    "type": "gap",
    "text": "Auf der ___ steht das genaue Maß.",
    "answer": "Zeichnung",
    "options": [
     "Zeichnung",
     "Feile",
     "schweißen"
    ],
    "hint": "das Blatt mit allen Maßen"
   },
   {
    "type": "gap",
    "text": "Ohne ___ wird nicht geschliffen.",
    "answer": "Schutzbrille",
    "options": [
     "Schutzbrille",
     "Schraubstock",
     "Naht"
    ],
    "hint": "Schutz für die Augen"
   },
   {
    "type": "match",
    "intro": "Ordne Wort und Bedeutung zu:",
    "pairs": [
     {
      "l": "die Werkbank",
      "r": "der Tisch, an dem du arbeitest"
     },
     {
      "l": "der Schraubstock",
      "r": "hält das Werkstück fest"
     },
     {
      "l": "die Feile",
      "r": "Werkzeug, das Kanten glatt macht"
     },
     {
      "l": "schweißen",
      "r": "zwei Metallteile mit Hitze verbinden"
     }
    ]
   },
   {
    "type": "match",
    "intro": "Ordne Wort und Bedeutung zu:",
    "pairs": [
     {
      "l": "die Naht",
      "r": "die Linie, an der geschweißt wurde"
     },
     {
      "l": "bohren",
      "r": "ein rundes Loch machen"
     },
     {
      "l": "das Maß",
      "r": "die genaue Größe in Millimetern"
     },
     {
      "l": "die Toleranz",
      "r": "wie viel Abweichung erlaubt ist"
     }
    ]
   },
   {
    "type": "match",
    "intro": "Ordne Wort und Bedeutung zu:",
    "pairs": [
     {
      "l": "der Grat",
      "r": "die scharfe Kante nach dem Schneiden"
     },
     {
      "l": "die Zeichnung",
      "r": "das Blatt mit allen Maßen"
     },
     {
      "l": "die Schutzbrille",
      "r": "Schutz für die Augen"
     },
     {
      "l": "der Span",
      "r": "der kleine Rest, der beim Bohren abfällt"
     }
    ]
   }
  ]
 },
 {
  "id": "reinigung-neu",
  "title": "Reinigung — Plan, Mittel, Übergabe",
  "level": "A2",
  "emoji": "🧽",
  "words": [
   {
    "de": "der Reinigungsplan",
    "info": "zeigt, was wann gereinigt wird",
    "emoji": "📋",
    "bsp": "Im Reinigungsplan steht, welcher Raum heute dran ist."
   },
   {
    "de": "der Wagen",
    "info": "der Rollwagen mit allen Mitteln",
    "emoji": "🛒",
    "bsp": "Ich hole den Wagen aus der Kammer."
   },
   {
    "de": "das Reinigungsmittel",
    "info": "die Flüssigkeit zum Putzen",
    "emoji": "🧴",
    "bsp": "Das Reinigungsmittel wird mit Wasser verdünnt."
   },
   {
    "de": "die Dosierung",
    "info": "wie viel Mittel ins Wasser kommt",
    "emoji": "⚖️",
    "bsp": "Achte auf die richtige Dosierung."
   },
   {
    "de": "der Wischmopp",
    "info": "damit wischst du den Boden",
    "emoji": "🧹",
    "bsp": "Der Wischmopp muss danach in die Wäsche."
   },
   {
    "de": "die Desinfektion",
    "info": "macht Flächen keimfrei",
    "emoji": "🦠",
    "bsp": "Nach der Desinfektion fasst du nichts mehr an."
   },
   {
    "de": "die Fläche",
    "info": "Tisch, Griff oder Boden — alles, was man wischt",
    "emoji": "🟦",
    "bsp": "Diese Fläche wische ich zuletzt."
   },
   {
    "de": "der Handschuh",
    "info": "Schutz für die Hände",
    "emoji": "🧤",
    "bsp": "Ohne Handschuhe arbeite ich nicht."
   },
   {
    "de": "das Warnschild",
    "info": "warnt vor dem nassen Boden",
    "emoji": "⚠️",
    "bsp": "Stell bitte das Warnschild auf."
   },
   {
    "de": "der Müllsack",
    "info": "der große Sack für den Müll",
    "emoji": "🗑️",
    "bsp": "Der Müllsack ist voll."
   },
   {
    "de": "die Kammer",
    "info": "der kleine Raum für Wagen und Mittel",
    "emoji": "🚪",
    "bsp": "Die Kammer wird abends abgeschlossen."
   },
   {
    "de": "die Übergabe",
    "info": "du sagst der nächsten Schicht, was war",
    "emoji": "🔁",
    "bsp": "Bei der Übergabe sage ich, was noch offen ist."
   },
   {
    "de": "gründlich",
    "info": "sehr genau und ohne Ecken auszulassen",
    "emoji": "🔍",
    "bsp": "Das Bad wird einmal pro Woche gründlich gemacht."
   },
   {
    "de": "die Beschwerde",
    "info": "jemand sagt, dass etwas nicht sauber war",
    "emoji": "📢",
    "bsp": "Es gab eine Beschwerde über den Flur im dritten Stock."
   }
  ],
  "exercises": [
   {
    "type": "choice",
    "q": "Welches Wort passt: „zeigt, was wann gereinigt wird“?",
    "options": [
     "der Wischmopp",
     "der Reinigungsplan",
     "die Fläche",
     "die Übergabe"
    ],
    "answer": 1,
    "explain": "der Reinigungsplan — zeigt, was wann gereinigt wird."
   },
   {
    "type": "choice",
    "q": "Welches Wort passt: „der Rollwagen mit allen Mitteln“?",
    "options": [
     "das Reinigungsmittel",
     "der Wagen",
     "die Fläche",
     "der Wischmopp"
    ],
    "answer": 1,
    "explain": "der Wagen — der Rollwagen mit allen Mitteln."
   },
   {
    "type": "choice",
    "q": "Welches Wort passt: „die Flüssigkeit zum Putzen“?",
    "options": [
     "der Wagen",
     "die Desinfektion",
     "der Wischmopp",
     "das Reinigungsmittel"
    ],
    "answer": 3,
    "explain": "das Reinigungsmittel — die Flüssigkeit zum Putzen."
   },
   {
    "type": "choice",
    "q": "Welches Wort passt: „wie viel Mittel ins Wasser kommt“?",
    "options": [
     "die Kammer",
     "die Übergabe",
     "die Dosierung",
     "der Wagen"
    ],
    "answer": 2,
    "explain": "die Dosierung — wie viel Mittel ins Wasser kommt."
   },
   {
    "type": "choice",
    "q": "Welches Wort passt: „damit wischst du den Boden“?",
    "options": [
     "der Müllsack",
     "der Wagen",
     "der Wischmopp",
     "die Dosierung"
    ],
    "answer": 2,
    "explain": "der Wischmopp — damit wischst du den Boden."
   },
   {
    "type": "choice",
    "q": "Welches Wort passt: „macht Flächen keimfrei“?",
    "options": [
     "die Dosierung",
     "die Desinfektion",
     "die Fläche",
     "die Übergabe"
    ],
    "answer": 1,
    "explain": "die Desinfektion — macht Flächen keimfrei."
   },
   {
    "type": "choice",
    "q": "Welches Wort passt: „Tisch, Griff oder Boden — alles, was man wischt“?",
    "options": [
     "die Übergabe",
     "die Beschwerde",
     "der Wagen",
     "die Fläche"
    ],
    "answer": 3,
    "explain": "die Fläche — Tisch, Griff oder Boden — alles, was man wischt."
   },
   {
    "type": "choice",
    "q": "Welches Wort passt: „Schutz für die Hände“?",
    "options": [
     "die Übergabe",
     "die Dosierung",
     "der Handschuh",
     "gründlich"
    ],
    "answer": 2,
    "explain": "der Handschuh — Schutz für die Hände."
   },
   {
    "type": "choice",
    "q": "Welches Wort passt: „warnt vor dem nassen Boden“?",
    "options": [
     "der Müllsack",
     "das Warnschild",
     "die Desinfektion",
     "die Kammer"
    ],
    "answer": 1,
    "explain": "das Warnschild — warnt vor dem nassen Boden."
   },
   {
    "type": "choice",
    "q": "Welches Wort passt: „kommt in den Eimer“?",
    "options": [
     "die Dosierung",
     "der Müllsack",
     "der Wagen",
     "das Reinigungsmittel"
    ],
    "answer": 1,
    "explain": "der Müllsack — kommt in den Eimer."
   },
   {
    "type": "choice",
    "q": "Welches Wort passt: „der kleine Raum für Wagen und Mittel“?",
    "options": [
     "die Fläche",
     "die Dosierung",
     "die Übergabe",
     "die Kammer"
    ],
    "answer": 3,
    "explain": "die Kammer — der kleine Raum für Wagen und Mittel."
   },
   {
    "type": "choice",
    "q": "Welches Wort passt: „du sagst der nächsten Schicht, was war“?",
    "options": [
     "der Wischmopp",
     "die Übergabe",
     "die Desinfektion",
     "die Kammer"
    ],
    "answer": 1,
    "explain": "die Übergabe — du sagst der nächsten Schicht, was war."
   },
   {
    "type": "choice",
    "q": "Welches Wort passt: „sehr genau und ohne Ecken auszulassen“?",
    "options": [
     "das Warnschild",
     "der Wagen",
     "gründlich",
     "die Kammer"
    ],
    "answer": 2,
    "explain": "gründlich — sehr genau und ohne Ecken auszulassen."
   },
   {
    "type": "choice",
    "q": "Welches Wort passt: „jemand sagt, dass etwas nicht sauber war“?",
    "options": [
     "die Dosierung",
     "die Beschwerde",
     "der Müllsack",
     "der Wagen"
    ],
    "answer": 1,
    "explain": "die Beschwerde — jemand sagt, dass etwas nicht sauber war."
   },
   {
    "type": "gap",
    "text": "Im ___ steht, welcher Raum heute dran ist.",
    "answer": "Reinigungsplan",
    "options": [
     "Reinigungsplan",
     "Reinigungsmittel",
     "Dosierung"
    ],
    "hint": "zeigt, was wann gereinigt wird"
   },
   {
    "type": "gap",
    "text": "Ich hole den ___ aus der Kammer.",
    "answer": "Wagen",
    "options": [
     "Wagen",
     "Reinigungsmittel",
     "Dosierung"
    ],
    "hint": "der Rollwagen mit allen Mitteln"
   },
   {
    "type": "gap",
    "text": "Das ___ wird mit Wasser verdünnt.",
    "answer": "Reinigungsmittel",
    "options": [
     "Reinigungsmittel",
     "Wagen",
     "Handschuh"
    ],
    "hint": "die Flüssigkeit zum Putzen"
   },
   {
    "type": "gap",
    "text": "Achte auf die richtige ___.",
    "answer": "Dosierung",
    "options": [
     "Dosierung",
     "Übergabe",
     "Kammer"
    ],
    "hint": "wie viel Mittel ins Wasser kommt"
   },
   {
    "type": "gap",
    "text": "Der ___ muss danach in die Wäsche.",
    "answer": "Wischmopp",
    "options": [
     "Wischmopp",
     "Wagen",
     "gründlich"
    ],
    "hint": "damit wischst du den Boden"
   },
   {
    "type": "gap",
    "text": "Nach der ___ fasst du nichts mehr an.",
    "answer": "Desinfektion",
    "options": [
     "Desinfektion",
     "Wagen",
     "Wischmopp"
    ],
    "hint": "macht Flächen keimfrei"
   },
   {
    "type": "gap",
    "text": "Diese ___ wische ich zuletzt.",
    "answer": "Fläche",
    "options": [
     "Fläche",
     "Übergabe",
     "Beschwerde"
    ],
    "hint": "Tisch, Griff oder Boden — alles, was man wischt"
   },
   {
    "type": "gap",
    "text": "Ohne ___e arbeite ich nicht.",
    "answer": "Handschuh",
    "options": [
     "Handschuh",
     "Kammer",
     "Dosierung"
    ],
    "hint": "Schutz für die Hände"
   },
   {
    "type": "gap",
    "text": "Stell bitte das ___ auf.",
    "answer": "Warnschild",
    "options": [
     "Warnschild",
     "Reinigungsmittel",
     "Dosierung"
    ],
    "hint": "warnt vor dem nassen Boden"
   },
   {
    "type": "gap",
    "text": "Der ___ ist voll.",
    "answer": "Müllsack",
    "options": [
     "Müllsack",
     "Wagen",
     "Wischmopp"
    ],
    "hint": "der große Sack für den Müll"
   },
   {
    "type": "gap",
    "text": "Die ___ wird abends abgeschlossen.",
    "answer": "Kammer",
    "options": [
     "Kammer",
     "Wischmopp",
     "Dosierung"
    ],
    "hint": "der kleine Raum für Wagen und Mittel"
   },
   {
    "type": "gap",
    "text": "Bei der ___ sage ich, was noch offen ist.",
    "answer": "Übergabe",
    "options": [
     "Übergabe",
     "Kammer",
     "Desinfektion"
    ],
    "hint": "du sagst der nächsten Schicht, was war"
   },
   {
    "type": "gap",
    "text": "Das Bad wird einmal pro Woche ___ gemacht.",
    "answer": "gründlich",
    "options": [
     "gründlich",
     "Wagen",
     "Desinfektion"
    ],
    "hint": "sehr genau und ohne Ecken auszulassen"
   },
   {
    "type": "gap",
    "text": "Es gab eine ___ über den Flur im dritten Stock.",
    "answer": "Beschwerde",
    "options": [
     "Beschwerde",
     "Übergabe",
     "Wischmopp"
    ],
    "hint": "jemand sagt, dass etwas nicht sauber war"
   },
   {
    "type": "match",
    "intro": "Ordne Wort und Bedeutung zu:",
    "pairs": [
     {
      "l": "der Reinigungsplan",
      "r": "zeigt, was wann gereinigt wird"
     },
     {
      "l": "der Wagen",
      "r": "der Rollwagen mit allen Mitteln"
     },
     {
      "l": "das Reinigungsmittel",
      "r": "die Flüssigkeit zum Putzen"
     },
     {
      "l": "die Dosierung",
      "r": "wie viel Mittel ins Wasser kommt"
     }
    ]
   },
   {
    "type": "match",
    "intro": "Ordne Wort und Bedeutung zu:",
    "pairs": [
     {
      "l": "der Wischmopp",
      "r": "damit wischst du den Boden"
     },
     {
      "l": "die Desinfektion",
      "r": "macht Flächen keimfrei"
     },
     {
      "l": "die Fläche",
      "r": "Tisch, Griff oder Boden — alles, was man wischt"
     },
     {
      "l": "der Handschuh",
      "r": "Schutz für die Hände"
     }
    ]
   },
   {
    "type": "match",
    "intro": "Ordne Wort und Bedeutung zu:",
    "pairs": [
     {
      "l": "das Warnschild",
      "r": "warnt vor dem nassen Boden"
     },
     {
      "l": "der Müllsack",
      "r": "der große Sack für den Müll"
     },
     {
      "l": "die Kammer",
      "r": "der kleine Raum für Wagen und Mittel"
     },
     {
      "l": "die Übergabe",
      "r": "du sagst der nächsten Schicht, was war"
     }
    ]
   }
  ]
 },
 {
  "id": "lager-neu",
  "title": "Lager — Ware, Kommissionieren, Versand",
  "level": "B1",
  "emoji": "📦",
  "words": [
   {
    "de": "der Wareneingang",
    "info": "hier kommt die Ware an",
    "emoji": "🚚",
    "bsp": "Die Lieferung steht schon im Wareneingang."
   },
   {
    "de": "der Lieferschein",
    "info": "das Blatt, das zur Ware gehört",
    "emoji": "🧾",
    "bsp": "Der Lieferschein liegt oben auf der Palette."
   },
   {
    "de": "die Palette",
    "info": "das Holzgestell unter der Ware",
    "emoji": "🪵",
    "bsp": "Auf der Palette stehen zwölf Kartons."
   },
   {
    "de": "der Hubwagen",
    "info": "damit ziehst du die Palette",
    "emoji": "🛻",
    "bsp": "Nimm den Hubwagen, das ist zu schwer."
   },
   {
    "de": "kommissionieren",
    "info": "die Ware für einen Auftrag zusammenstellen",
    "emoji": "🧺",
    "bsp": "Ich kommissioniere jetzt den Auftrag für morgen."
   },
   {
    "de": "der Scanner",
    "info": "liest den Code auf dem Karton",
    "emoji": "📲",
    "bsp": "Halte den Scanner ruhig vor den Code."
   },
   {
    "de": "der Bestand",
    "info": "wie viel im Lager wirklich da ist",
    "emoji": "🔢",
    "bsp": "Der Bestand stimmt nicht mit dem System überein."
   },
   {
    "de": "die Inventur",
    "info": "alles im Lager wird gezählt",
    "emoji": "🗓️",
    "bsp": "Im Januar machen wir Inventur."
   },
   {
    "de": "die Teillieferung",
    "info": "nur ein Teil der Ware ist da",
    "emoji": "➗",
    "bsp": "Es kam nur eine Teillieferung, der Rest fehlt."
   },
   {
    "de": "der Versand",
    "info": "die Ware geht raus zum Kunden",
    "emoji": "📮",
    "bsp": "Der Versand macht um 16 Uhr Schluss."
   },
   {
    "de": "die Retoure",
    "info": "Ware, die der Kunde zurückschickt",
    "emoji": "↩️",
    "bsp": "Die Retoure prüfen wir sofort."
   },
   {
    "de": "der Stapler",
    "info": "die Maschine, die Paletten hebt",
    "emoji": "🚜",
    "bsp": "Für den Stapler brauchst du einen Schein."
   },
   {
    "de": "das Regal",
    "info": "hier steht die Ware",
    "emoji": "🗄️",
    "bsp": "Das Regal ganz hinten ist noch leer."
   },
   {
    "de": "die Ladeliste",
    "info": "zeigt, was auf den Lkw kommt",
    "emoji": "📄",
    "bsp": "Auf der Ladeliste fehlt eine Position."
   }
  ],
  "exercises": [
   {
    "type": "choice",
    "q": "Welches Wort passt: „hier kommt die Ware an“?",
    "options": [
     "kommissionieren",
     "der Wareneingang",
     "die Palette",
     "der Bestand"
    ],
    "answer": 1,
    "explain": "der Wareneingang — hier kommt die Ware an."
   },
   {
    "type": "choice",
    "q": "Welches Wort passt: „das Blatt, das zur Ware gehört“?",
    "options": [
     "die Palette",
     "der Lieferschein",
     "kommissionieren",
     "der Scanner"
    ],
    "answer": 1,
    "explain": "der Lieferschein — das Blatt, das zur Ware gehört."
   },
   {
    "type": "choice",
    "q": "Welches Wort passt: „das Holzgestell unter der Ware“?",
    "options": [
     "der Lieferschein",
     "die Retoure",
     "der Stapler",
     "die Palette"
    ],
    "answer": 3,
    "explain": "die Palette — das Holzgestell unter der Ware."
   },
   {
    "type": "choice",
    "q": "Welches Wort passt: „damit ziehst du die Palette“?",
    "options": [
     "der Lieferschein",
     "kommissionieren",
     "der Hubwagen",
     "der Versand"
    ],
    "answer": 2,
    "explain": "der Hubwagen — damit ziehst du die Palette."
   },
   {
    "type": "choice",
    "q": "Welches Wort passt: „die Ware für einen Auftrag zusammenstellen“?",
    "options": [
     "der Bestand",
     "der Stapler",
     "kommissionieren",
     "der Hubwagen"
    ],
    "answer": 2,
    "explain": "kommissionieren — die Ware für einen Auftrag zusammenstellen."
   },
   {
    "type": "choice",
    "q": "Welches Wort passt: „liest den Code auf dem Karton“?",
    "options": [
     "der Stapler",
     "der Scanner",
     "der Lieferschein",
     "die Ladeliste"
    ],
    "answer": 1,
    "explain": "der Scanner — liest den Code auf dem Karton."
   },
   {
    "type": "choice",
    "q": "Welches Wort passt: „wie viel im Lager wirklich da ist“?",
    "options": [
     "der Hubwagen",
     "der Stapler",
     "das Regal",
     "der Bestand"
    ],
    "answer": 3,
    "explain": "der Bestand — wie viel im Lager wirklich da ist."
   },
   {
    "type": "choice",
    "q": "Welches Wort passt: „alles im Lager wird gezählt“?",
    "options": [
     "der Scanner",
     "die Retoure",
     "die Inventur",
     "der Versand"
    ],
    "answer": 2,
    "explain": "die Inventur — alles im Lager wird gezählt."
   },
   {
    "type": "choice",
    "q": "Welches Wort passt: „nur ein Teil der Ware ist da“?",
    "options": [
     "der Lieferschein",
     "die Teillieferung",
     "die Palette",
     "der Hubwagen"
    ],
    "answer": 1,
    "explain": "die Teillieferung — nur ein Teil der Ware ist da."
   },
   {
    "type": "choice",
    "q": "Welches Wort passt: „die Ware geht raus zum Kunden“?",
    "options": [
     "der Stapler",
     "der Versand",
     "der Bestand",
     "der Hubwagen"
    ],
    "answer": 1,
    "explain": "der Versand — die Ware geht raus zum Kunden."
   },
   {
    "type": "choice",
    "q": "Welches Wort passt: „Ware, die der Kunde zurückschickt“?",
    "options": [
     "der Stapler",
     "kommissionieren",
     "der Scanner",
     "die Retoure"
    ],
    "answer": 3,
    "explain": "die Retoure — Ware, die der Kunde zurückschickt."
   },
   {
    "type": "choice",
    "q": "Welches Wort passt: „die Maschine, die Paletten hebt“?",
    "options": [
     "der Lieferschein",
     "der Stapler",
     "die Retoure",
     "die Teillieferung"
    ],
    "answer": 1,
    "explain": "der Stapler — die Maschine, die Paletten hebt."
   },
   {
    "type": "choice",
    "q": "Welches Wort passt: „hier steht die Ware“?",
    "options": [
     "der Versand",
     "der Lieferschein",
     "das Regal",
     "der Hubwagen"
    ],
    "answer": 2,
    "explain": "das Regal — hier steht die Ware."
   },
   {
    "type": "choice",
    "q": "Welches Wort passt: „zeigt, was auf den Lkw kommt“?",
    "options": [
     "der Stapler",
     "die Ladeliste",
     "der Lieferschein",
     "die Palette"
    ],
    "answer": 1,
    "explain": "die Ladeliste — zeigt, was auf den Lkw kommt."
   },
   {
    "type": "gap",
    "text": "Die Lieferung steht schon im ___.",
    "answer": "Wareneingang",
    "options": [
     "Wareneingang",
     "Palette",
     "Hubwagen"
    ],
    "hint": "hier kommt die Ware an"
   },
   {
    "type": "gap",
    "text": "Der ___ liegt oben auf der Palette.",
    "answer": "Lieferschein",
    "options": [
     "Lieferschein",
     "Palette",
     "Inventur"
    ],
    "hint": "das Blatt, das zur Ware gehört"
   },
   {
    "type": "gap",
    "text": "Auf der ___ stehen zwölf Kartons.",
    "answer": "Palette",
    "options": [
     "Palette",
     "Stapler",
     "Retoure"
    ],
    "hint": "das Holzgestell unter der Ware"
   },
   {
    "type": "gap",
    "text": "Nimm den ___, das ist zu schwer.",
    "answer": "Hubwagen",
    "options": [
     "Hubwagen",
     "Lieferschein",
     "Regal"
    ],
    "hint": "damit ziehst du die Palette"
   },
   {
    "type": "gap",
    "text": "Halte den ___ ruhig vor den Code.",
    "answer": "Scanner",
    "options": [
     "Scanner",
     "Stapler",
     "Ladeliste"
    ],
    "hint": "liest den Code auf dem Karton"
   },
   {
    "type": "gap",
    "text": "Der ___ stimmt nicht mit dem System überein.",
    "answer": "Bestand",
    "options": [
     "Bestand",
     "Retoure",
     "Hubwagen"
    ],
    "hint": "wie viel im Lager wirklich da ist"
   },
   {
    "type": "gap",
    "text": "Im Januar machen wir ___.",
    "answer": "Inventur",
    "options": [
     "Inventur",
     "Palette",
     "Hubwagen"
    ],
    "hint": "alles im Lager wird gezählt"
   },
   {
    "type": "gap",
    "text": "Es kam nur eine ___, der Rest fehlt.",
    "answer": "Teillieferung",
    "options": [
     "Teillieferung",
     "Lieferschein",
     "kommissionieren"
    ],
    "hint": "nur ein Teil der Ware ist da"
   },
   {
    "type": "gap",
    "text": "Der ___ macht um 16 Uhr Schluss.",
    "answer": "Versand",
    "options": [
     "Versand",
     "kommissionieren",
     "Hubwagen"
    ],
    "hint": "die Ware geht raus zum Kunden"
   },
   {
    "type": "gap",
    "text": "Die ___ prüfen wir sofort.",
    "answer": "Retoure",
    "options": [
     "Retoure",
     "Stapler",
     "Scanner"
    ],
    "hint": "Ware, die der Kunde zurückschickt"
   },
   {
    "type": "gap",
    "text": "Für den ___ brauchst du einen Schein.",
    "answer": "Stapler",
    "options": [
     "Stapler",
     "Lieferschein",
     "Scanner"
    ],
    "hint": "die Maschine, die Paletten hebt"
   },
   {
    "type": "gap",
    "text": "Das ___ ganz hinten ist noch leer.",
    "answer": "Regal",
    "options": [
     "Regal",
     "Stapler",
     "kommissionieren"
    ],
    "hint": "hier steht die Ware"
   },
   {
    "type": "gap",
    "text": "Auf der ___ fehlt eine Position.",
    "answer": "Ladeliste",
    "options": [
     "Ladeliste",
     "Retoure",
     "Palette"
    ],
    "hint": "zeigt, was auf den Lkw kommt"
   },
   {
    "type": "match",
    "intro": "Ordne Wort und Bedeutung zu:",
    "pairs": [
     {
      "l": "der Wareneingang",
      "r": "hier kommt die Ware an"
     },
     {
      "l": "der Lieferschein",
      "r": "das Blatt, das zur Ware gehört"
     },
     {
      "l": "die Palette",
      "r": "das Holzgestell unter der Ware"
     },
     {
      "l": "der Hubwagen",
      "r": "damit ziehst du die Palette"
     }
    ]
   },
   {
    "type": "match",
    "intro": "Ordne Wort und Bedeutung zu:",
    "pairs": [
     {
      "l": "kommissionieren",
      "r": "die Ware für einen Auftrag zusammenstellen"
     },
     {
      "l": "der Scanner",
      "r": "liest den Code auf dem Karton"
     },
     {
      "l": "der Bestand",
      "r": "wie viel im Lager wirklich da ist"
     },
     {
      "l": "die Inventur",
      "r": "alles im Lager wird gezählt"
     }
    ]
   },
   {
    "type": "match",
    "intro": "Ordne Wort und Bedeutung zu:",
    "pairs": [
     {
      "l": "die Teillieferung",
      "r": "nur ein Teil der Ware ist da"
     },
     {
      "l": "der Versand",
      "r": "die Ware geht raus zum Kunden"
     },
     {
      "l": "die Retoure",
      "r": "Ware, die der Kunde zurückschickt"
     },
     {
      "l": "der Stapler",
      "r": "die Maschine, die Paletten hebt"
     }
    ]
   }
  ]
 },
 {
  "id": "produktion-neu",
  "title": "Produktion — Linie, Schicht, Qualität",
  "level": "B1",
  "emoji": "🏭",
  "words": [
   {
    "de": "die Linie",
    "info": "die Maschinenreihe, an der produziert wird",
    "emoji": "➡️",
    "bsp": "An unserer Linie laufen zwei Produkte."
   },
   {
    "de": "die Schicht",
    "info": "deine Arbeitszeit: früh, spät oder nachts",
    "emoji": "🕐",
    "bsp": "Diese Woche habe ich Frühschicht."
   },
   {
    "de": "die Anlage",
    "info": "die ganze Maschine mit allem drum herum",
    "emoji": "⚙️",
    "bsp": "Die Anlage läuft seit heute Morgen ohne Stopp."
   },
   {
    "de": "der Stillstand",
    "info": "die Maschine steht",
    "emoji": "🛑",
    "bsp": "Jede Minute Stillstand kostet Geld."
   },
   {
    "de": "die Störung",
    "info": "etwas funktioniert nicht richtig",
    "emoji": "❗",
    "bsp": "Ich melde die Störung an die Instandhaltung."
   },
   {
    "de": "die Stückzahl",
    "info": "wie viele Teile fertig geworden sind",
    "emoji": "🔢",
    "bsp": "Die Stückzahl von gestern war sehr gut."
   },
   {
    "de": "der Ausschuss",
    "info": "Teile, die nicht in Ordnung sind",
    "emoji": "🗑️",
    "bsp": "Der Ausschuss kommt in die rote Kiste."
   },
   {
    "de": "die Qualität",
    "info": "ob das Teil gut genug ist",
    "emoji": "✅",
    "bsp": "Bei der Qualität machen wir keine Kompromisse."
   },
   {
    "de": "die Sichtprüfung",
    "info": "du schaust dir das Teil genau an",
    "emoji": "👁️",
    "bsp": "Vor dem Verpacken kommt die Sichtprüfung."
   },
   {
    "de": "die Charge",
    "info": "alle Teile aus einem Durchlauf",
    "emoji": "🏷️",
    "bsp": "Diese Charge wurde heute Nacht produziert."
   },
   {
    "de": "das Rüsten",
    "info": "die Maschine für ein neues Produkt umbauen",
    "emoji": "🔧",
    "bsp": "Das Rüsten dauert etwa vierzig Minuten."
   },
   {
    "de": "die Instandhaltung",
    "info": "die Kollegen, die Maschinen reparieren",
    "emoji": "🧰",
    "bsp": "Die Instandhaltung ist schon unterwegs."
   },
   {
    "de": "die Vorgabe",
    "info": "was du in der Stunde schaffen sollst",
    "emoji": "🎯",
    "bsp": "Die Vorgabe liegt bei hundert Stück pro Stunde."
   },
   {
    "de": "der Gehörschutz",
    "info": "Schutz für die Ohren",
    "emoji": "🎧",
    "bsp": "In der Halle ist Gehörschutz Pflicht."
   }
  ],
  "exercises": [
   {
    "type": "choice",
    "q": "Welches Wort passt: „die Maschinenreihe, an der produziert wird“?",
    "options": [
     "die Stückzahl",
     "die Linie",
     "die Anlage",
     "die Störung"
    ],
    "answer": 1,
    "explain": "die Linie — die Maschinenreihe, an der produziert wird."
   },
   {
    "type": "choice",
    "q": "Welches Wort passt: „deine Arbeitszeit: früh, spät oder nachts“?",
    "options": [
     "die Anlage",
     "die Schicht",
     "die Instandhaltung",
     "das Rüsten"
    ],
    "answer": 1,
    "explain": "die Schicht — deine Arbeitszeit: früh, spät oder nachts."
   },
   {
    "type": "choice",
    "q": "Welches Wort passt: „die ganze Maschine mit allem drum herum“?",
    "options": [
     "die Charge",
     "die Schicht",
     "die Störung",
     "die Anlage"
    ],
    "answer": 3,
    "explain": "die Anlage — die ganze Maschine mit allem drum herum."
   },
   {
    "type": "choice",
    "q": "Welches Wort passt: „die Maschine steht“?",
    "options": [
     "die Instandhaltung",
     "die Störung",
     "der Stillstand",
     "der Ausschuss"
    ],
    "answer": 2,
    "explain": "der Stillstand — die Maschine steht."
   },
   {
    "type": "choice",
    "q": "Welches Wort passt: „etwas funktioniert nicht richtig“?",
    "options": [
     "die Schicht",
     "der Gehörschutz",
     "die Störung",
     "die Instandhaltung"
    ],
    "answer": 2,
    "explain": "die Störung — etwas funktioniert nicht richtig."
   },
   {
    "type": "choice",
    "q": "Welches Wort passt: „wie viele Teile fertig geworden sind“?",
    "options": [
     "der Stillstand",
     "die Stückzahl",
     "die Vorgabe",
     "die Instandhaltung"
    ],
    "answer": 1,
    "explain": "die Stückzahl — wie viele Teile fertig geworden sind."
   },
   {
    "type": "choice",
    "q": "Welches Wort passt: „Teile, die nicht in Ordnung sind“?",
    "options": [
     "das Rüsten",
     "die Stückzahl",
     "die Charge",
     "der Ausschuss"
    ],
    "answer": 3,
    "explain": "der Ausschuss — Teile, die nicht in Ordnung sind."
   },
   {
    "type": "choice",
    "q": "Welches Wort passt: „ob das Teil gut genug ist“?",
    "options": [
     "die Anlage",
     "der Stillstand",
     "die Qualität",
     "die Schicht"
    ],
    "answer": 2,
    "explain": "die Qualität — ob das Teil gut genug ist."
   },
   {
    "type": "choice",
    "q": "Welches Wort passt: „du schaust dir das Teil genau an“?",
    "options": [
     "der Ausschuss",
     "die Sichtprüfung",
     "der Stillstand",
     "die Instandhaltung"
    ],
    "answer": 1,
    "explain": "die Sichtprüfung — du schaust dir das Teil genau an."
   },
   {
    "type": "choice",
    "q": "Welches Wort passt: „alle Teile aus einem Durchlauf“?",
    "options": [
     "die Stückzahl",
     "die Charge",
     "die Instandhaltung",
     "die Störung"
    ],
    "answer": 1,
    "explain": "die Charge — alle Teile aus einem Durchlauf."
   },
   {
    "type": "choice",
    "q": "Welches Wort passt: „die Maschine für ein neues Produkt umbauen“?",
    "options": [
     "die Sichtprüfung",
     "die Schicht",
     "die Instandhaltung",
     "das Rüsten"
    ],
    "answer": 3,
    "explain": "das Rüsten — die Maschine für ein neues Produkt umbauen."
   },
   {
    "type": "choice",
    "q": "Welches Wort passt: „die Kollegen, die Maschinen reparieren“?",
    "options": [
     "die Schicht",
     "die Instandhaltung",
     "der Stillstand",
     "die Charge"
    ],
    "answer": 1,
    "explain": "die Instandhaltung — die Kollegen, die Maschinen reparieren."
   },
   {
    "type": "choice",
    "q": "Welches Wort passt: „was du in der Stunde schaffen sollst“?",
    "options": [
     "die Schicht",
     "die Anlage",
     "die Vorgabe",
     "die Instandhaltung"
    ],
    "answer": 2,
    "explain": "die Vorgabe — was du in der Stunde schaffen sollst."
   },
   {
    "type": "choice",
    "q": "Welches Wort passt: „Schutz für die Ohren“?",
    "options": [
     "der Stillstand",
     "der Gehörschutz",
     "die Schicht",
     "die Sichtprüfung"
    ],
    "answer": 1,
    "explain": "der Gehörschutz — Schutz für die Ohren."
   },
   {
    "type": "gap",
    "text": "An unserer ___ laufen zwei Produkte.",
    "answer": "Linie",
    "options": [
     "Linie",
     "Anlage",
     "Qualität"
    ],
    "hint": "die Maschinenreihe, an der produziert wird"
   },
   {
    "type": "gap",
    "text": "Die ___ läuft seit heute Morgen ohne Stopp.",
    "answer": "Anlage",
    "options": [
     "Anlage",
     "Schicht",
     "Vorgabe"
    ],
    "hint": "die ganze Maschine mit allem drum herum"
   },
   {
    "type": "gap",
    "text": "Jede Minute ___ kostet Geld.",
    "answer": "Stillstand",
    "options": [
     "Stillstand",
     "Schicht",
     "Stückzahl"
    ],
    "hint": "die Maschine steht"
   },
   {
    "type": "gap",
    "text": "Ich melde die ___ an die Instandhaltung.",
    "answer": "Störung",
    "options": [
     "Störung",
     "Instandhaltung",
     "Gehörschutz"
    ],
    "hint": "etwas funktioniert nicht richtig"
   },
   {
    "type": "gap",
    "text": "Die ___ von gestern war sehr gut.",
    "answer": "Stückzahl",
    "options": [
     "Stückzahl",
     "Rüsten",
     "Stillstand"
    ],
    "hint": "wie viele Teile fertig geworden sind"
   },
   {
    "type": "gap",
    "text": "Der ___ kommt in die rote Kiste.",
    "answer": "Ausschuss",
    "options": [
     "Ausschuss",
     "Anlage",
     "Stillstand"
    ],
    "hint": "Teile, die nicht in Ordnung sind"
   },
   {
    "type": "gap",
    "text": "Bei der ___ machen wir keine Kompromisse.",
    "answer": "Qualität",
    "options": [
     "Qualität",
     "Schicht",
     "Störung"
    ],
    "hint": "ob das Teil gut genug ist"
   },
   {
    "type": "gap",
    "text": "Vor dem Verpacken kommt die ___.",
    "answer": "Sichtprüfung",
    "options": [
     "Sichtprüfung",
     "Störung",
     "Stillstand"
    ],
    "hint": "du schaust dir das Teil genau an"
   },
   {
    "type": "gap",
    "text": "Diese ___ wurde heute Nacht produziert.",
    "answer": "Charge",
    "options": [
     "Charge",
     "Instandhaltung",
     "Stückzahl"
    ],
    "hint": "alle Teile aus einem Durchlauf"
   },
   {
    "type": "gap",
    "text": "Das ___ dauert etwa vierzig Minuten.",
    "answer": "Rüsten",
    "options": [
     "Rüsten",
     "Schicht",
     "Stückzahl"
    ],
    "hint": "die Maschine für ein neues Produkt umbauen"
   },
   {
    "type": "gap",
    "text": "Die ___ ist schon unterwegs.",
    "answer": "Instandhaltung",
    "options": [
     "Instandhaltung",
     "Vorgabe",
     "Störung"
    ],
    "hint": "die Kollegen, die Maschinen reparieren"
   },
   {
    "type": "gap",
    "text": "Die ___ liegt bei hundert Stück pro Stunde.",
    "answer": "Vorgabe",
    "options": [
     "Vorgabe",
     "Rüsten",
     "Anlage"
    ],
    "hint": "was du in der Stunde schaffen sollst"
   },
   {
    "type": "gap",
    "text": "In der Halle ist ___ Pflicht.",
    "answer": "Gehörschutz",
    "options": [
     "Gehörschutz",
     "Schicht",
     "Stückzahl"
    ],
    "hint": "Schutz für die Ohren"
   },
   {
    "type": "match",
    "intro": "Ordne Wort und Bedeutung zu:",
    "pairs": [
     {
      "l": "die Linie",
      "r": "die Maschinenreihe, an der produziert wird"
     },
     {
      "l": "die Schicht",
      "r": "deine Arbeitszeit: früh, spät oder nachts"
     },
     {
      "l": "die Anlage",
      "r": "die ganze Maschine mit allem drum herum"
     },
     {
      "l": "der Stillstand",
      "r": "die Maschine steht"
     }
    ]
   },
   {
    "type": "match",
    "intro": "Ordne Wort und Bedeutung zu:",
    "pairs": [
     {
      "l": "die Störung",
      "r": "etwas funktioniert nicht richtig"
     },
     {
      "l": "die Stückzahl",
      "r": "wie viele Teile fertig geworden sind"
     },
     {
      "l": "der Ausschuss",
      "r": "Teile, die nicht in Ordnung sind"
     },
     {
      "l": "die Qualität",
      "r": "ob das Teil gut genug ist"
     }
    ]
   },
   {
    "type": "match",
    "intro": "Ordne Wort und Bedeutung zu:",
    "pairs": [
     {
      "l": "die Sichtprüfung",
      "r": "du schaust dir das Teil genau an"
     },
     {
      "l": "die Charge",
      "r": "alle Teile aus einem Durchlauf"
     },
     {
      "l": "das Rüsten",
      "r": "die Maschine für ein neues Produkt umbauen"
     },
     {
      "l": "die Instandhaltung",
      "r": "die Kollegen, die Maschinen reparieren"
     }
    ]
   }
  ]
 },
 {
  "id": "ingenieur-neu",
  "title": "Technik & Planung — Projekt, Zeichnung, Abnahme",
  "level": "B2",
  "emoji": "📐",
  "words": [
   {
    "de": "die Anforderung",
    "info": "was die Lösung können muss",
    "emoji": "📌",
    "bsp": "Die Anforderung steht ganz oben im Lastenheft."
   },
   {
    "de": "die Zeichnung",
    "info": "der Plan mit allen Maßen",
    "emoji": "📃",
    "bsp": "Auf der Zeichnung fehlt eine Bemaßung."
   },
   {
    "de": "der Entwurf",
    "info": "die erste Idee auf dem Papier",
    "emoji": "✏️",
    "bsp": "Der Entwurf geht morgen in die Abstimmung."
   },
   {
    "de": "die Abstimmung",
    "info": "alle Beteiligten müssen einverstanden sein",
    "emoji": "🤝",
    "bsp": "Nach der Abstimmung ändern wir nichts mehr."
   },
   {
    "de": "der Termin",
    "info": "der Tag, an dem etwas fertig sein muss",
    "emoji": "🗓️",
    "bsp": "Der Termin für die Abnahme steht."
   },
   {
    "de": "die Abnahme",
    "info": "der Kunde prüft und nimmt ab",
    "emoji": "🔍",
    "bsp": "Bei der Abnahme waren nur Kleinigkeiten offen."
   },
   {
    "de": "die Toleranz",
    "info": "wie viel Abweichung erlaubt ist",
    "emoji": "➕",
    "bsp": "Die Toleranz ist im Datenblatt festgelegt."
   },
   {
    "de": "die Machbarkeit",
    "info": "ob es überhaupt geht",
    "emoji": "🤔",
    "bsp": "Wir prüfen zuerst die Machbarkeit."
   },
   {
    "de": "der Aufwand",
    "info": "wie viel Zeit und Geld nötig ist",
    "emoji": "⏳",
    "bsp": "Der Aufwand ist höher als geplant."
   },
   {
    "de": "die Schnittstelle",
    "info": "die Stelle, an der zwei Teile zusammenkommen",
    "emoji": "🔗",
    "bsp": "An der Schnittstelle passen die Maße nicht."
   },
   {
    "de": "die Simulation",
    "info": "der Test am Rechner statt in echt",
    "emoji": "💻",
    "bsp": "Die Simulation zeigt einen Fehler bei hoher Last."
   },
   {
    "de": "die Freigabe",
    "info": "die offizielle Erlaubnis weiterzumachen",
    "emoji": "✅",
    "bsp": "Ohne Freigabe wird nicht gefertigt."
   },
   {
    "de": "die Dokumentation",
    "info": "alles ist schriftlich festgehalten",
    "emoji": "📚",
    "bsp": "Die Dokumentation gehört zur Lieferung dazu."
   },
   {
    "de": "die Nacharbeit",
    "info": "etwas muss noch einmal gemacht werden",
    "emoji": "🔁",
    "bsp": "Zwei Teile gehen in die Nacharbeit."
   }
  ],
  "exercises": [
   {
    "type": "choice",
    "q": "Welches Wort passt: „was die Lösung können muss“?",
    "options": [
     "die Simulation",
     "die Anforderung",
     "der Entwurf",
     "die Freigabe"
    ],
    "answer": 1,
    "explain": "die Anforderung — was die Lösung können muss."
   },
   {
    "type": "choice",
    "q": "Welches Wort passt: „der Plan mit allen Maßen“?",
    "options": [
     "die Schnittstelle",
     "die Zeichnung",
     "der Termin",
     "der Entwurf"
    ],
    "answer": 1,
    "explain": "die Zeichnung — der Plan mit allen Maßen."
   },
   {
    "type": "choice",
    "q": "Welches Wort passt: „die erste Idee auf dem Papier“?",
    "options": [
     "die Toleranz",
     "die Freigabe",
     "der Termin",
     "der Entwurf"
    ],
    "answer": 3,
    "explain": "der Entwurf — die erste Idee auf dem Papier."
   },
   {
    "type": "choice",
    "q": "Welches Wort passt: „alle Beteiligten müssen einverstanden sein“?",
    "options": [
     "die Nacharbeit",
     "die Freigabe",
     "die Abstimmung",
     "die Zeichnung"
    ],
    "answer": 2,
    "explain": "die Abstimmung — alle Beteiligten müssen einverstanden sein."
   },
   {
    "type": "choice",
    "q": "Welches Wort passt: „der Tag, an dem etwas fertig sein muss“?",
    "options": [
     "die Dokumentation",
     "die Freigabe",
     "der Termin",
     "die Abstimmung"
    ],
    "answer": 2,
    "explain": "der Termin — der Tag, an dem etwas fertig sein muss."
   },
   {
    "type": "choice",
    "q": "Welches Wort passt: „der Kunde prüft und nimmt ab“?",
    "options": [
     "die Simulation",
     "die Abnahme",
     "die Schnittstelle",
     "die Toleranz"
    ],
    "answer": 1,
    "explain": "die Abnahme — der Kunde prüft und nimmt ab."
   },
   {
    "type": "choice",
    "q": "Welches Wort passt: „wie viel Abweichung erlaubt ist“?",
    "options": [
     "die Abstimmung",
     "der Entwurf",
     "die Zeichnung",
     "die Toleranz"
    ],
    "answer": 3,
    "explain": "die Toleranz — wie viel Abweichung erlaubt ist."
   },
   {
    "type": "choice",
    "q": "Welches Wort passt: „ob es überhaupt geht“?",
    "options": [
     "die Abstimmung",
     "die Freigabe",
     "die Machbarkeit",
     "die Toleranz"
    ],
    "answer": 2,
    "explain": "die Machbarkeit — ob es überhaupt geht."
   },
   {
    "type": "choice",
    "q": "Welches Wort passt: „wie viel Zeit und Geld nötig ist“?",
    "options": [
     "die Freigabe",
     "der Aufwand",
     "der Termin",
     "die Abnahme"
    ],
    "answer": 1,
    "explain": "der Aufwand — wie viel Zeit und Geld nötig ist."
   },
   {
    "type": "choice",
    "q": "Welches Wort passt: „die Stelle, an der zwei Teile zusammenkommen“?",
    "options": [
     "die Freigabe",
     "die Schnittstelle",
     "der Aufwand",
     "die Zeichnung"
    ],
    "answer": 1,
    "explain": "die Schnittstelle — die Stelle, an der zwei Teile zusammenkommen."
   },
   {
    "type": "choice",
    "q": "Welches Wort passt: „der Test am Rechner statt in echt“?",
    "options": [
     "die Schnittstelle",
     "die Zeichnung",
     "die Abstimmung",
     "die Simulation"
    ],
    "answer": 3,
    "explain": "die Simulation — der Test am Rechner statt in echt."
   },
   {
    "type": "choice",
    "q": "Welches Wort passt: „die offizielle Erlaubnis weiterzumachen“?",
    "options": [
     "der Entwurf",
     "die Freigabe",
     "die Dokumentation",
     "die Zeichnung"
    ],
    "answer": 1,
    "explain": "die Freigabe — die offizielle Erlaubnis weiterzumachen."
   },
   {
    "type": "choice",
    "q": "Welches Wort passt: „alles ist schriftlich festgehalten“?",
    "options": [
     "die Zeichnung",
     "der Aufwand",
     "die Dokumentation",
     "die Abstimmung"
    ],
    "answer": 2,
    "explain": "die Dokumentation — alles ist schriftlich festgehalten."
   },
   {
    "type": "choice",
    "q": "Welches Wort passt: „etwas muss noch einmal gemacht werden“?",
    "options": [
     "die Abstimmung",
     "die Nacharbeit",
     "der Entwurf",
     "die Zeichnung"
    ],
    "answer": 1,
    "explain": "die Nacharbeit — etwas muss noch einmal gemacht werden."
   },
   {
    "type": "gap",
    "text": "Die ___ steht ganz oben im Lastenheft.",
    "answer": "Anforderung",
    "options": [
     "Anforderung",
     "Freigabe",
     "Simulation"
    ],
    "hint": "was die Lösung können muss"
   },
   {
    "type": "gap",
    "text": "Auf der ___ fehlt eine Bemaßung.",
    "answer": "Zeichnung",
    "options": [
     "Zeichnung",
     "Entwurf",
     "Dokumentation"
    ],
    "hint": "der Plan mit allen Maßen"
   },
   {
    "type": "gap",
    "text": "Der ___ geht morgen in die Abstimmung.",
    "answer": "Entwurf",
    "options": [
     "Entwurf",
     "Zeichnung",
     "Abnahme"
    ],
    "hint": "die erste Idee auf dem Papier"
   },
   {
    "type": "gap",
    "text": "Nach der ___ ändern wir nichts mehr.",
    "answer": "Abstimmung",
    "options": [
     "Abstimmung",
     "Freigabe",
     "Nacharbeit"
    ],
    "hint": "alle Beteiligten müssen einverstanden sein"
   },
   {
    "type": "gap",
    "text": "Der ___ für die Abnahme steht.",
    "answer": "Termin",
    "options": [
     "Termin",
     "Simulation",
     "Abstimmung"
    ],
    "hint": "der Tag, an dem etwas fertig sein muss"
   },
   {
    "type": "gap",
    "text": "Bei der ___ waren nur Kleinigkeiten offen.",
    "answer": "Abnahme",
    "options": [
     "Abnahme",
     "Entwurf",
     "Abstimmung"
    ],
    "hint": "der Kunde prüft und nimmt ab"
   },
   {
    "type": "gap",
    "text": "Die ___ ist im Datenblatt festgelegt.",
    "answer": "Toleranz",
    "options": [
     "Toleranz",
     "Zeichnung",
     "Termin"
    ],
    "hint": "wie viel Abweichung erlaubt ist"
   },
   {
    "type": "gap",
    "text": "Wir prüfen zuerst die ___.",
    "answer": "Machbarkeit",
    "options": [
     "Machbarkeit",
     "Termin",
     "Abstimmung"
    ],
    "hint": "ob es überhaupt geht"
   },
   {
    "type": "gap",
    "text": "Der ___ ist höher als geplant.",
    "answer": "Aufwand",
    "options": [
     "Aufwand",
     "Freigabe",
     "Abnahme"
    ],
    "hint": "wie viel Zeit und Geld nötig ist"
   },
   {
    "type": "gap",
    "text": "An der ___ passen die Maße nicht.",
    "answer": "Schnittstelle",
    "options": [
     "Schnittstelle",
     "Zeichnung",
     "Abnahme"
    ],
    "hint": "die Stelle, an der zwei Teile zusammenkommen"
   },
   {
    "type": "gap",
    "text": "Die ___ zeigt einen Fehler bei hoher Last.",
    "answer": "Simulation",
    "options": [
     "Simulation",
     "Dokumentation",
     "Termin"
    ],
    "hint": "der Test am Rechner statt in echt"
   },
   {
    "type": "gap",
    "text": "Ohne ___ wird nicht gefertigt.",
    "answer": "Freigabe",
    "options": [
     "Freigabe",
     "Simulation",
     "Entwurf"
    ],
    "hint": "die offizielle Erlaubnis weiterzumachen"
   },
   {
    "type": "gap",
    "text": "Die ___ gehört zur Lieferung dazu.",
    "answer": "Dokumentation",
    "options": [
     "Dokumentation",
     "Zeichnung",
     "Abnahme"
    ],
    "hint": "alles ist schriftlich festgehalten"
   },
   {
    "type": "gap",
    "text": "Zwei Teile gehen in die ___.",
    "answer": "Nacharbeit",
    "options": [
     "Nacharbeit",
     "Abnahme",
     "Abstimmung"
    ],
    "hint": "etwas muss noch einmal gemacht werden"
   },
   {
    "type": "match",
    "intro": "Ordne Wort und Bedeutung zu:",
    "pairs": [
     {
      "l": "die Anforderung",
      "r": "was die Lösung können muss"
     },
     {
      "l": "die Zeichnung",
      "r": "der Plan mit allen Maßen"
     },
     {
      "l": "der Entwurf",
      "r": "die erste Idee auf dem Papier"
     },
     {
      "l": "die Abstimmung",
      "r": "alle Beteiligten müssen einverstanden sein"
     }
    ]
   },
   {
    "type": "match",
    "intro": "Ordne Wort und Bedeutung zu:",
    "pairs": [
     {
      "l": "der Termin",
      "r": "der Tag, an dem etwas fertig sein muss"
     },
     {
      "l": "die Abnahme",
      "r": "der Kunde prüft und nimmt ab"
     },
     {
      "l": "die Toleranz",
      "r": "wie viel Abweichung erlaubt ist"
     },
     {
      "l": "die Machbarkeit",
      "r": "ob es überhaupt geht"
     }
    ]
   },
   {
    "type": "match",
    "intro": "Ordne Wort und Bedeutung zu:",
    "pairs": [
     {
      "l": "der Aufwand",
      "r": "wie viel Zeit und Geld nötig ist"
     },
     {
      "l": "die Schnittstelle",
      "r": "die Stelle, an der zwei Teile zusammenkommen"
     },
     {
      "l": "die Simulation",
      "r": "der Test am Rechner statt in echt"
     },
     {
      "l": "die Freigabe",
      "r": "die offizielle Erlaubnis weiterzumachen"
     }
    ]
   }
  ]
 },
 {
  "id": "telefonieren-neu",
  "title": "Am Telefon — melden, verstehen, klären",
  "level": "A2",
  "emoji": "☎️",
  "words": [
   {
    "de": "sich melden",
    "info": "am Anfang den eigenen Namen sagen",
    "emoji": "📞",
    "bsp": "Wenn ich abnehme, melde ich mich mit meinem Namen."
   },
   {
    "de": "verbinden",
    "info": "den Anruf zu einer anderen Person weitergeben",
    "emoji": "🔀",
    "bsp": "Einen Moment, ich verbinde Sie."
   },
   {
    "de": "die Warteschleife",
    "info": "die Musik, während du wartest",
    "emoji": "⏳",
    "bsp": "Ich hing zwanzig Minuten in der Warteschleife."
   },
   {
    "de": "die Durchwahl",
    "info": "die direkte Nummer zu einer Person",
    "emoji": "🔢",
    "bsp": "Haben Sie die Durchwahl von Frau Weber?"
   },
   {
    "de": "zurückrufen",
    "info": "später selbst noch einmal anrufen",
    "emoji": "↩️",
    "bsp": "Ich rufe Sie in einer Stunde zurück."
   },
   {
    "de": "ausrichten",
    "info": "jemandem eine Nachricht weitergeben",
    "emoji": "📝",
    "bsp": "Kann ich ihm etwas ausrichten?"
   },
   {
    "de": "buchstabieren",
    "info": "ein Wort Buchstabe für Buchstabe sagen",
    "emoji": "🔤",
    "bsp": "Mein Name ist schwierig — ich buchstabiere ihn."
   },
   {
    "de": "die Verbindung",
    "info": "wie gut man sich am Telefon hört",
    "emoji": "📶",
    "bsp": "Die Verbindung ist schlecht, ich rufe neu an."
   },
   {
    "de": "wiederholen",
    "info": "etwas noch einmal sagen",
    "emoji": "🔁",
    "bsp": "Könnten Sie das bitte wiederholen?"
   },
   {
    "de": "langsamer sprechen",
    "info": "die Bitte, das Tempo zu senken",
    "emoji": "🐢",
    "bsp": "Können Sie bitte langsamer sprechen?"
   },
   {
    "de": "die Mailbox",
    "info": "dort landet dein Anruf, wenn niemand rangeht",
    "emoji": "📼",
    "bsp": "Ich habe dir auf die Mailbox gesprochen."
   },
   {
    "de": "das Anliegen",
    "info": "der Grund, warum du anrufst",
    "emoji": "❓",
    "bsp": "Worum geht es? — Ich schildere kurz mein Anliegen."
   },
   {
    "de": "auflegen",
    "info": "das Gespräch beenden",
    "emoji": "📴",
    "bsp": "Bitte legen Sie noch nicht auf."
   },
   {
    "de": "die Erreichbarkeit",
    "info": "wann man dich anrufen kann",
    "emoji": "🕐",
    "bsp": "Meine Erreichbarkeit ist von neun bis sechzehn Uhr."
   }
  ],
  "exercises": [
   {
    "type": "choice",
    "q": "Welches Wort passt: „am Anfang den eigenen Namen sagen“?",
    "options": [
     "die Warteschleife",
     "sich melden",
     "langsamer sprechen",
     "zurückrufen"
    ],
    "answer": 1,
    "explain": "sich melden — am Anfang den eigenen Namen sagen."
   },
   {
    "type": "choice",
    "q": "Welches Wort passt: „den Anruf zu einer anderen Person weitergeben“?",
    "options": [
     "buchstabieren",
     "verbinden",
     "zurückrufen",
     "das Anliegen"
    ],
    "answer": 1,
    "explain": "verbinden — den Anruf zu einer anderen Person weitergeben."
   },
   {
    "type": "choice",
    "q": "Welches Wort passt: „die Musik, während du wartest“?",
    "options": [
     "verbinden",
     "die Erreichbarkeit",
     "das Anliegen",
     "die Warteschleife"
    ],
    "answer": 3,
    "explain": "die Warteschleife — die Musik, während du wartest."
   },
   {
    "type": "choice",
    "q": "Welches Wort passt: „die direkte Nummer zu einer Person“?",
    "options": [
     "das Anliegen",
     "zurückrufen",
     "die Durchwahl",
     "auflegen"
    ],
    "answer": 2,
    "explain": "die Durchwahl — die direkte Nummer zu einer Person."
   },
   {
    "type": "choice",
    "q": "Welches Wort passt: „später selbst noch einmal anrufen“?",
    "options": [
     "langsamer sprechen",
     "buchstabieren",
     "zurückrufen",
     "die Mailbox"
    ],
    "answer": 2,
    "explain": "zurückrufen — später selbst noch einmal anrufen."
   },
   {
    "type": "choice",
    "q": "Welches Wort passt: „jemandem eine Nachricht weitergeben“?",
    "options": [
     "die Durchwahl",
     "ausrichten",
     "verbinden",
     "die Warteschleife"
    ],
    "answer": 1,
    "explain": "ausrichten — jemandem eine Nachricht weitergeben."
   },
   {
    "type": "choice",
    "q": "Welches Wort passt: „ein Wort Buchstabe für Buchstabe sagen“?",
    "options": [
     "das Anliegen",
     "die Durchwahl",
     "die Verbindung",
     "buchstabieren"
    ],
    "answer": 3,
    "explain": "buchstabieren — ein Wort Buchstabe für Buchstabe sagen."
   },
   {
    "type": "choice",
    "q": "Welches Wort passt: „wie gut man sich am Telefon hört“?",
    "options": [
     "zurückrufen",
     "ausrichten",
     "die Verbindung",
     "das Anliegen"
    ],
    "answer": 2,
    "explain": "die Verbindung — wie gut man sich am Telefon hört."
   },
   {
    "type": "choice",
    "q": "Welches Wort passt: „etwas noch einmal sagen“?",
    "options": [
     "langsamer sprechen",
     "wiederholen",
     "verbinden",
     "das Anliegen"
    ],
    "answer": 1,
    "explain": "wiederholen — etwas noch einmal sagen."
   },
   {
    "type": "choice",
    "q": "Welches Wort passt: „die Bitte, das Tempo zu senken“?",
    "options": [
     "die Durchwahl",
     "langsamer sprechen",
     "die Mailbox",
     "verbinden"
    ],
    "answer": 1,
    "explain": "langsamer sprechen — die Bitte, das Tempo zu senken."
   },
   {
    "type": "choice",
    "q": "Welches Wort passt: „dort landet dein Anruf, wenn niemand rangeht“?",
    "options": [
     "verbinden",
     "die Warteschleife",
     "auflegen",
     "die Mailbox"
    ],
    "answer": 3,
    "explain": "die Mailbox — dort landet dein Anruf, wenn niemand rangeht."
   },
   {
    "type": "choice",
    "q": "Welches Wort passt: „der Grund, warum du anrufst“?",
    "options": [
     "wiederholen",
     "das Anliegen",
     "die Durchwahl",
     "verbinden"
    ],
    "answer": 1,
    "explain": "das Anliegen — der Grund, warum du anrufst."
   },
   {
    "type": "choice",
    "q": "Welches Wort passt: „das Gespräch beenden“?",
    "options": [
     "die Warteschleife",
     "verbinden",
     "auflegen",
     "die Durchwahl"
    ],
    "answer": 2,
    "explain": "auflegen — das Gespräch beenden."
   },
   {
    "type": "choice",
    "q": "Welches Wort passt: „wann man dich anrufen kann“?",
    "options": [
     "die Warteschleife",
     "die Erreichbarkeit",
     "buchstabieren",
     "die Durchwahl"
    ],
    "answer": 1,
    "explain": "die Erreichbarkeit — wann man dich anrufen kann."
   },
   {
    "type": "gap",
    "text": "Ich hing zwanzig Minuten in der ___.",
    "answer": "Warteschleife",
    "options": [
     "Warteschleife",
     "Anliegen",
     "Erreichbarkeit"
    ],
    "hint": "die Musik, während du wartest"
   },
   {
    "type": "gap",
    "text": "Haben Sie die ___ von Frau Weber?",
    "answer": "Durchwahl",
    "options": [
     "Durchwahl",
     "Mailbox",
     "zurückrufen"
    ],
    "hint": "die direkte Nummer zu einer Person"
   },
   {
    "type": "gap",
    "text": "Kann ich ihm etwas ___?",
    "answer": "ausrichten",
    "options": [
     "ausrichten",
     "verbinden",
     "zurückrufen"
    ],
    "hint": "jemandem eine Nachricht weitergeben"
   },
   {
    "type": "gap",
    "text": "Die ___ ist schlecht, ich rufe neu an.",
    "answer": "Verbindung",
    "options": [
     "Verbindung",
     "Anliegen",
     "ausrichten"
    ],
    "hint": "wie gut man sich am Telefon hört"
   },
   {
    "type": "gap",
    "text": "Könnten Sie das bitte ___?",
    "answer": "wiederholen",
    "options": [
     "wiederholen",
     "verbinden",
     "ausrichten"
    ],
    "hint": "etwas noch einmal sagen"
   },
   {
    "type": "gap",
    "text": "Können Sie bitte ___?",
    "answer": "langsamer sprechen",
    "options": [
     "langsamer sprechen",
     "auflegen",
     "zurückrufen"
    ],
    "hint": "die Bitte, das Tempo zu senken"
   },
   {
    "type": "gap",
    "text": "Ich habe dir auf die ___ gesprochen.",
    "answer": "Mailbox",
    "options": [
     "Mailbox",
     "Anliegen",
     "Warteschleife"
    ],
    "hint": "dort landet dein Anruf, wenn niemand rangeht"
   },
   {
    "type": "gap",
    "text": "Worum geht es? — Ich schildere kurz mein ___.",
    "answer": "Anliegen",
    "options": [
     "Anliegen",
     "verbinden",
     "ausrichten"
    ],
    "hint": "der Grund, warum du anrufst"
   },
   {
    "type": "gap",
    "text": "Meine ___ ist von neun bis sechzehn Uhr.",
    "answer": "Erreichbarkeit",
    "options": [
     "Erreichbarkeit",
     "langsamer sprechen",
     "Durchwahl"
    ],
    "hint": "wann man dich anrufen kann"
   },
   {
    "type": "match",
    "intro": "Ordne Wort und Bedeutung zu:",
    "pairs": [
     {
      "l": "sich melden",
      "r": "am Anfang den eigenen Namen sagen"
     },
     {
      "l": "verbinden",
      "r": "den Anruf zu einer anderen Person weitergeben"
     },
     {
      "l": "die Warteschleife",
      "r": "die Musik, während du wartest"
     },
     {
      "l": "die Durchwahl",
      "r": "die direkte Nummer zu einer Person"
     }
    ]
   },
   {
    "type": "match",
    "intro": "Ordne Wort und Bedeutung zu:",
    "pairs": [
     {
      "l": "zurückrufen",
      "r": "später selbst noch einmal anrufen"
     },
     {
      "l": "ausrichten",
      "r": "jemandem eine Nachricht weitergeben"
     },
     {
      "l": "buchstabieren",
      "r": "ein Wort Buchstabe für Buchstabe sagen"
     },
     {
      "l": "die Verbindung",
      "r": "wie gut man sich am Telefon hört"
     }
    ]
   },
   {
    "type": "match",
    "intro": "Ordne Wort und Bedeutung zu:",
    "pairs": [
     {
      "l": "wiederholen",
      "r": "etwas noch einmal sagen"
     },
     {
      "l": "langsamer sprechen",
      "r": "die Bitte, das Tempo zu senken"
     },
     {
      "l": "die Mailbox",
      "r": "dort landet dein Anruf, wenn niemand rangeht"
     },
     {
      "l": "das Anliegen",
      "r": "der Grund, warum du anrufst"
     }
    ]
   }
  ]
 },
 {
  "id": "ankommen-neu",
  "title": "Ankommen in Deutschland — die ersten Wochen",
  "level": "A2",
  "emoji": "🧳",
  "words": [
   {
    "de": "die Anmeldung",
    "info": "du meldest dem Amt, wo du wohnst",
    "emoji": "🏠",
    "bsp": "Die Anmeldung machst du in den ersten zwei Wochen."
   },
   {
    "de": "die Meldebescheinigung",
    "info": "das Papier, das deine Adresse bestätigt",
    "emoji": "📄",
    "bsp": "Für den Vertrag brauchst du eine Meldebescheinigung."
   },
   {
    "de": "der Aufenthaltstitel",
    "info": "die Erlaubnis, hier zu leben",
    "emoji": "🪪",
    "bsp": "Mein Aufenthaltstitel gilt noch zwei Jahre."
   },
   {
    "de": "die Ausländerbehörde",
    "info": "das Amt für alle Fragen zum Aufenthalt",
    "emoji": "🏛️",
    "bsp": "Der Termin bei der Ausländerbehörde ist im Mai."
   },
   {
    "de": "die Steuer-Identifikationsnummer",
    "info": "die Nummer, die jeder für die Arbeit braucht",
    "emoji": "🔢",
    "bsp": "Ohne Steuer-Identifikationsnummer zahlt der Arbeitgeber zu viel Steuer ab."
   },
   {
    "de": "die Sozialversicherungsnummer",
    "info": "die Nummer für Rente und Krankenkasse",
    "emoji": "🧾",
    "bsp": "Die Sozialversicherungsnummer bekommst du von der Krankenkasse."
   },
   {
    "de": "der Integrationskurs",
    "info": "Deutschkurs plus Kurs über das Leben hier",
    "emoji": "📚",
    "bsp": "Mein Integrationskurs geht bis Dezember."
   },
   {
    "de": "die Beratungsstelle",
    "info": "ein Ort, an dem man dir kostenlos hilft",
    "emoji": "🤝",
    "bsp": "Die Beratungsstelle hat mir beim Antrag geholfen."
   },
   {
    "de": "die Frist",
    "info": "die Zeit, bis zu der etwas erledigt sein muss",
    "emoji": "⏰",
    "bsp": "Die Frist endet am Monatsende."
   },
   {
    "de": "der Nachweis",
    "info": "das Papier, mit dem du etwas belegst",
    "emoji": "✅",
    "bsp": "Als Nachweis reicht der Mietvertrag."
   },
   {
    "de": "beglaubigt",
    "info": "offiziell bestätigt, dass die Kopie echt ist",
    "emoji": "🖋️",
    "bsp": "Die Kopie muss beglaubigt sein."
   },
   {
    "de": "der Termin",
    "info": "der feste Tag und die Uhrzeit beim Amt",
    "emoji": "🗓️",
    "bsp": "Einen Termin bekommt man oft nur online."
   },
   {
    "de": "die Einbürgerung",
    "info": "du wirst deutsche Staatsbürgerin",
    "emoji": "🇩🇪",
    "bsp": "Für die Einbürgerung braucht man meistens B1."
   },
   {
    "de": "sich zurechtfinden",
    "info": "langsam verstehen, wie hier alles läuft",
    "emoji": "🧭",
    "bsp": "Nach einem halben Jahr habe ich mich zurechtgefunden."
   }
  ],
  "exercises": [
   {
    "type": "choice",
    "q": "Welches Wort passt: „du meldest beim Amt, wo du wohnst“?",
    "options": [
     "der Termin",
     "die Anmeldung",
     "der Integrationskurs",
     "die Steuer-Identifikationsnummer"
    ],
    "answer": 1,
    "explain": "die Anmeldung — du meldest beim Amt, wo du wohnst."
   },
   {
    "type": "choice",
    "q": "Welches Wort passt: „das Papier, das deine Adresse bestätigt“?",
    "options": [
     "der Aufenthaltstitel",
     "die Meldebescheinigung",
     "der Termin",
     "sich zurechtfinden"
    ],
    "answer": 1,
    "explain": "die Meldebescheinigung — das Papier, das deine Adresse bestätigt."
   },
   {
    "type": "choice",
    "q": "Welches Wort passt: „die Erlaubnis, hier zu leben“?",
    "options": [
     "die Einbürgerung",
     "der Termin",
     "die Steuer-Identifikationsnummer",
     "der Aufenthaltstitel"
    ],
    "answer": 3,
    "explain": "der Aufenthaltstitel — die Erlaubnis, hier zu leben."
   },
   {
    "type": "choice",
    "q": "Welches Wort passt: „das Amt für alle Fragen zum Aufenthalt“?",
    "options": [
     "der Integrationskurs",
     "beglaubigt",
     "die Ausländerbehörde",
     "der Nachweis"
    ],
    "answer": 2,
    "explain": "die Ausländerbehörde — das Amt für alle Fragen zum Aufenthalt."
   },
   {
    "type": "choice",
    "q": "Welches Wort passt: „die Nummer, die jeder für die Arbeit braucht“?",
    "options": [
     "die Meldebescheinigung",
     "der Aufenthaltstitel",
     "die Steuer-Identifikationsnummer",
     "die Ausländerbehörde"
    ],
    "answer": 2,
    "explain": "die Steuer-Identifikationsnummer — die Nummer, die jeder für die Arbeit braucht."
   },
   {
    "type": "choice",
    "q": "Welches Wort passt: „die Nummer für Rente und Krankenkasse“?",
    "options": [
     "der Termin",
     "die Sozialversicherungsnummer",
     "die Beratungsstelle",
     "die Ausländerbehörde"
    ],
    "answer": 1,
    "explain": "die Sozialversicherungsnummer — die Nummer für Rente und Krankenkasse."
   },
   {
    "type": "choice",
    "q": "Welches Wort passt: „Deutschkurs plus Kurs über das Leben hier“?",
    "options": [
     "die Sozialversicherungsnummer",
     "die Steuer-Identifikationsnummer",
     "der Termin",
     "der Integrationskurs"
    ],
    "answer": 3,
    "explain": "der Integrationskurs — Deutschkurs plus Kurs über das Leben hier."
   },
   {
    "type": "choice",
    "q": "Welches Wort passt: „ein Ort, an dem man dir kostenlos hilft“?",
    "options": [
     "die Meldebescheinigung",
     "der Termin",
     "die Beratungsstelle",
     "der Nachweis"
    ],
    "answer": 2,
    "explain": "die Beratungsstelle — ein Ort, an dem man dir kostenlos hilft."
   },
   {
    "type": "choice",
    "q": "Welches Wort passt: „die Zeit, bis wann etwas erledigt sein muss“?",
    "options": [
     "beglaubigt",
     "die Frist",
     "die Meldebescheinigung",
     "die Ausländerbehörde"
    ],
    "answer": 1,
    "explain": "die Frist — die Zeit, bis wann etwas erledigt sein muss."
   },
   {
    "type": "choice",
    "q": "Welches Wort passt: „das Papier, mit dem du etwas belegst“?",
    "options": [
     "die Einbürgerung",
     "der Nachweis",
     "die Meldebescheinigung",
     "der Aufenthaltstitel"
    ],
    "answer": 1,
    "explain": "der Nachweis — das Papier, mit dem du etwas belegst."
   },
   {
    "type": "choice",
    "q": "Welches Wort passt: „offiziell bestätigt, dass die Kopie echt ist“?",
    "options": [
     "die Meldebescheinigung",
     "die Frist",
     "die Ausländerbehörde",
     "beglaubigt"
    ],
    "answer": 3,
    "explain": "beglaubigt — offiziell bestätigt, dass die Kopie echt ist."
   },
   {
    "type": "choice",
    "q": "Welches Wort passt: „der feste Tag und die Uhrzeit beim Amt“?",
    "options": [
     "die Meldebescheinigung",
     "der Termin",
     "die Ausländerbehörde",
     "der Aufenthaltstitel"
    ],
    "answer": 1,
    "explain": "der Termin — der feste Tag und die Uhrzeit beim Amt."
   },
   {
    "type": "choice",
    "q": "Welches Wort passt: „du wirst deutsche Staatsbürgerin“?",
    "options": [
     "der Integrationskurs",
     "die Ausländerbehörde",
     "die Einbürgerung",
     "der Aufenthaltstitel"
    ],
    "answer": 2,
    "explain": "die Einbürgerung — du wirst deutsche Staatsbürgerin."
   },
   {
    "type": "choice",
    "q": "Welches Wort passt: „langsam verstehen, wie hier alles läuft“?",
    "options": [
     "die Sozialversicherungsnummer",
     "sich zurechtfinden",
     "die Einbürgerung",
     "der Termin"
    ],
    "answer": 1,
    "explain": "sich zurechtfinden — langsam verstehen, wie hier alles läuft."
   },
   {
    "type": "gap",
    "text": "Die ___ machst du in den ersten zwei Wochen.",
    "answer": "Anmeldung",
    "options": [
     "Anmeldung",
     "Aufenthaltstitel",
     "Sozialversicherungsnummer"
    ],
    "hint": "du meldest dem Amt, wo du wohnst"
   },
   {
    "type": "gap",
    "text": "Für den Vertrag brauchst du eine ___.",
    "answer": "Meldebescheinigung",
    "options": [
     "Meldebescheinigung",
     "Termin",
     "sich zurechtfinden"
    ],
    "hint": "das Papier, das deine Adresse bestätigt"
   },
   {
    "type": "gap",
    "text": "Mein ___ gilt noch zwei Jahre.",
    "answer": "Aufenthaltstitel",
    "options": [
     "Aufenthaltstitel",
     "beglaubigt",
     "Steuer-Identifikationsnummer"
    ],
    "hint": "die Erlaubnis, hier zu leben"
   },
   {
    "type": "gap",
    "text": "Der Termin bei der ___ ist im Mai.",
    "answer": "Ausländerbehörde",
    "options": [
     "Ausländerbehörde",
     "Aufenthaltstitel",
     "Steuer-Identifikationsnummer"
    ],
    "hint": "das Amt für alle Fragen zum Aufenthalt"
   },
   {
    "type": "gap",
    "text": "Ohne ___ zahlt der Arbeitgeber zu viel Steuer ab.",
    "answer": "Steuer-Identifikationsnummer",
    "options": [
     "Steuer-Identifikationsnummer",
     "Meldebescheinigung",
     "Sozialversicherungsnummer"
    ],
    "hint": "die Nummer, die jeder für die Arbeit braucht"
   },
   {
    "type": "gap",
    "text": "Die ___ bekommst du von der Krankenkasse.",
    "answer": "Sozialversicherungsnummer",
    "options": [
     "Sozialversicherungsnummer",
     "Steuer-Identifikationsnummer",
     "Ausländerbehörde"
    ],
    "hint": "die Nummer für Rente und Krankenkasse"
   },
   {
    "type": "gap",
    "text": "Mein ___ geht bis Dezember.",
    "answer": "Integrationskurs",
    "options": [
     "Integrationskurs",
     "Termin",
     "Sozialversicherungsnummer"
    ],
    "hint": "Deutschkurs plus Kurs über das Leben hier"
   },
   {
    "type": "gap",
    "text": "Die ___ hat mir beim Antrag geholfen.",
    "answer": "Beratungsstelle",
    "options": [
     "Beratungsstelle",
     "Meldebescheinigung",
     "Sozialversicherungsnummer"
    ],
    "hint": "ein Ort, an dem man dir kostenlos hilft"
   },
   {
    "type": "gap",
    "text": "Die ___ endet am Monatsende.",
    "answer": "Frist",
    "options": [
     "Frist",
     "Einbürgerung",
     "Steuer-Identifikationsnummer"
    ],
    "hint": "die Zeit, bis zu der etwas erledigt sein muss"
   },
   {
    "type": "gap",
    "text": "Als ___ reicht der Mietvertrag.",
    "answer": "Nachweis",
    "options": [
     "Nachweis",
     "Termin",
     "Aufenthaltstitel"
    ],
    "hint": "das Papier, mit dem du etwas belegst"
   },
   {
    "type": "gap",
    "text": "Die Kopie muss ___ sein.",
    "answer": "beglaubigt",
    "options": [
     "beglaubigt",
     "Meldebescheinigung",
     "Sozialversicherungsnummer"
    ],
    "hint": "offiziell bestätigt, dass die Kopie echt ist"
   },
   {
    "type": "gap",
    "text": "Einen ___ bekommt man oft nur online.",
    "answer": "Termin",
    "options": [
     "Termin",
     "Sozialversicherungsnummer",
     "Ausländerbehörde"
    ],
    "hint": "der feste Tag und die Uhrzeit beim Amt"
   },
   {
    "type": "gap",
    "text": "Für die ___ braucht man meistens B1.",
    "answer": "Einbürgerung",
    "options": [
     "Einbürgerung",
     "Nachweis",
     "Ausländerbehörde"
    ],
    "hint": "du wirst deutsche Staatsbürgerin"
   },
   {
    "type": "match",
    "intro": "Ordne Wort und Bedeutung zu:",
    "pairs": [
     {
      "l": "die Anmeldung",
      "r": "du meldest dem Amt, wo du wohnst"
     },
     {
      "l": "die Meldebescheinigung",
      "r": "das Papier, das deine Adresse bestätigt"
     },
     {
      "l": "der Aufenthaltstitel",
      "r": "die Erlaubnis, hier zu leben"
     },
     {
      "l": "die Ausländerbehörde",
      "r": "das Amt für alle Fragen zum Aufenthalt"
     }
    ]
   },
   {
    "type": "match",
    "intro": "Ordne Wort und Bedeutung zu:",
    "pairs": [
     {
      "l": "die Steuer-Identifikationsnummer",
      "r": "die Nummer, die jeder für die Arbeit braucht"
     },
     {
      "l": "die Sozialversicherungsnummer",
      "r": "die Nummer für Rente und Krankenkasse"
     },
     {
      "l": "der Integrationskurs",
      "r": "Deutschkurs plus Kurs über das Leben hier"
     },
     {
      "l": "die Beratungsstelle",
      "r": "ein Ort, an dem man dir kostenlos hilft"
     }
    ]
   },
   {
    "type": "match",
    "intro": "Ordne Wort und Bedeutung zu:",
    "pairs": [
     {
      "l": "die Frist",
      "r": "die Zeit, bis zu der etwas erledigt sein muss"
     },
     {
      "l": "der Nachweis",
      "r": "das Papier, mit dem du etwas belegst"
     },
     {
      "l": "beglaubigt",
      "r": "offiziell bestätigt, dass die Kopie echt ist"
     },
     {
      "l": "der Termin",
      "r": "der feste Tag und die Uhrzeit beim Amt"
     }
    ]
   }
  ]
 },
 {
  "id": "sprachkurs-neu",
  "title": "Im Deutschkurs — mitkommen und nachfragen",
  "level": "A2",
  "emoji": "📝",
  "words": [
   {
    "de": "die Aufgabe",
    "info": "das, was du machen sollst",
    "emoji": "📋",
    "bsp": "Die Aufgabe steht auf Seite zwölf."
   },
   {
    "de": "die Hausaufgabe",
    "info": "die Aufgabe für zu Hause",
    "emoji": "🏡",
    "bsp": "Die Hausaufgabe ist bis Donnerstag."
   },
   {
    "de": "nachfragen",
    "info": "noch einmal fragen, wenn etwas unklar ist",
    "emoji": "🙋",
    "bsp": "Frag lieber nach, als es falsch zu machen."
   },
   {
    "de": "die Erklärung",
    "info": "wenn jemand sagt, wie etwas funktioniert",
    "emoji": "💡",
    "bsp": "Die Erklärung habe ich noch nicht verstanden."
   },
   {
    "de": "das Beispiel",
    "info": "ein Satz, der die Regel zeigt",
    "emoji": "🔎",
    "bsp": "Können Sie ein Beispiel geben?"
   },
   {
    "de": "die Regel",
    "info": "wie es im Deutschen funktioniert",
    "emoji": "📏",
    "bsp": "Diese Regel hat drei Ausnahmen."
   },
   {
    "de": "die Ausnahme",
    "info": "der Fall, in dem die Regel nicht gilt",
    "emoji": "⚠️",
    "bsp": "Bei diesen Wörtern gibt es eine Ausnahme."
   },
   {
    "de": "üben",
    "info": "etwas mehrmals machen, bis es sitzt",
    "emoji": "🔁",
    "bsp": "Ich übe jeden Tag zwanzig Minuten."
   },
   {
    "de": "wiederholen",
    "info": "den alten Stoff noch einmal ansehen",
    "emoji": "♻️",
    "bsp": "Am Freitag wiederholen wir die letzte Lektion."
   },
   {
    "de": "der Fehler",
    "info": "etwas, das nicht richtig ist",
    "emoji": "✏️",
    "bsp": "Aus einem Fehler lernt man am meisten."
   },
   {
    "de": "die Korrektur",
    "info": "die verbesserte Fassung deines Textes",
    "emoji": "🖊️",
    "bsp": "Die Korrektur kommt am Montag zurück."
   },
   {
    "de": "die Entschuldigung",
    "info": "der kurze Text, warum du gefehlt hast",
    "emoji": "📧",
    "bsp": "Ich schreibe eine Entschuldigung für gestern."
   },
   {
    "de": "fehlen",
    "info": "nicht da sein",
    "emoji": "🚫",
    "bsp": "Ich habe letzte Woche zweimal gefehlt."
   },
   {
    "de": "das Zertifikat",
    "info": "das Papier am Ende des Kurses",
    "emoji": "🏅",
    "bsp": "Mit dem Zertifikat kann ich mich bewerben."
   }
  ],
  "exercises": [
   {
    "type": "choice",
    "q": "Welches Wort passt: „das, was du machen sollst“?",
    "options": [
     "das Zertifikat",
     "die Aufgabe",
     "nachfragen",
     "die Entschuldigung"
    ],
    "answer": 1,
    "explain": "die Aufgabe — das, was du machen sollst."
   },
   {
    "type": "choice",
    "q": "Welches Wort passt: „die Aufgabe für zu Hause“?",
    "options": [
     "fehlen",
     "die Hausaufgabe",
     "das Beispiel",
     "die Entschuldigung"
    ],
    "answer": 1,
    "explain": "die Hausaufgabe — die Aufgabe für zu Hause."
   },
   {
    "type": "choice",
    "q": "Welches Wort passt: „noch einmal fragen, wenn etwas unklar ist“?",
    "options": [
     "der Fehler",
     "die Ausnahme",
     "die Korrektur",
     "nachfragen"
    ],
    "answer": 3,
    "explain": "nachfragen — noch einmal fragen, wenn etwas unklar ist."
   },
   {
    "type": "choice",
    "q": "Welches Wort passt: „wenn jemand sagt, wie etwas funktioniert“?",
    "options": [
     "nachfragen",
     "das Beispiel",
     "die Erklärung",
     "die Hausaufgabe"
    ],
    "answer": 2,
    "explain": "die Erklärung — wenn jemand sagt, wie etwas funktioniert."
   },
   {
    "type": "choice",
    "q": "Welches Wort passt: „ein Satz, der die Regel zeigt“?",
    "options": [
     "üben",
     "die Erklärung",
     "das Beispiel",
     "die Entschuldigung"
    ],
    "answer": 2,
    "explain": "das Beispiel — ein Satz, der die Regel zeigt."
   },
   {
    "type": "choice",
    "q": "Welches Wort passt: „wie es im Deutschen funktioniert“?",
    "options": [
     "die Ausnahme",
     "die Regel",
     "die Entschuldigung",
     "das Beispiel"
    ],
    "answer": 1,
    "explain": "die Regel — wie es im Deutschen funktioniert."
   },
   {
    "type": "choice",
    "q": "Welches Wort passt: „der Fall, in dem die Regel nicht gilt“?",
    "options": [
     "die Entschuldigung",
     "die Hausaufgabe",
     "der Fehler",
     "die Ausnahme"
    ],
    "answer": 3,
    "explain": "die Ausnahme — der Fall, in dem die Regel nicht gilt."
   },
   {
    "type": "choice",
    "q": "Welches Wort passt: „etwas mehrmals machen, bis es sitzt“?",
    "options": [
     "die Hausaufgabe",
     "die Erklärung",
     "üben",
     "die Korrektur"
    ],
    "answer": 2,
    "explain": "üben — etwas mehrmals machen, bis es sitzt."
   },
   {
    "type": "choice",
    "q": "Welches Wort passt: „den alten Stoff noch einmal ansehen“?",
    "options": [
     "die Hausaufgabe",
     "wiederholen",
     "nachfragen",
     "fehlen"
    ],
    "answer": 1,
    "explain": "wiederholen — den alten Stoff noch einmal ansehen."
   },
   {
    "type": "choice",
    "q": "Welches Wort passt: „etwas, das nicht richtig ist“?",
    "options": [
     "die Erklärung",
     "der Fehler",
     "die Hausaufgabe",
     "wiederholen"
    ],
    "answer": 1,
    "explain": "der Fehler — etwas, das nicht richtig ist."
   },
   {
    "type": "choice",
    "q": "Welches Wort passt: „die verbesserte Fassung deines Textes“?",
    "options": [
     "nachfragen",
     "die Hausaufgabe",
     "die Erklärung",
     "die Korrektur"
    ],
    "answer": 3,
    "explain": "die Korrektur — die verbesserte Fassung deines Textes."
   },
   {
    "type": "choice",
    "q": "Welches Wort passt: „der kurze Text, warum du gefehlt hast“?",
    "options": [
     "die Erklärung",
     "die Entschuldigung",
     "nachfragen",
     "die Ausnahme"
    ],
    "answer": 1,
    "explain": "die Entschuldigung — der kurze Text, warum du gefehlt hast."
   },
   {
    "type": "choice",
    "q": "Welches Wort passt: „nicht da sein“?",
    "options": [
     "das Zertifikat",
     "die Entschuldigung",
     "fehlen",
     "die Regel"
    ],
    "answer": 2,
    "explain": "fehlen — nicht da sein."
   },
   {
    "type": "choice",
    "q": "Welches Wort passt: „das Papier am Ende des Kurses“?",
    "options": [
     "nachfragen",
     "das Zertifikat",
     "die Hausaufgabe",
     "die Regel"
    ],
    "answer": 1,
    "explain": "das Zertifikat — das Papier am Ende des Kurses."
   },
   {
    "type": "gap",
    "text": "Die ___ steht auf Seite zwölf.",
    "answer": "Aufgabe",
    "options": [
     "Aufgabe",
     "Entschuldigung",
     "Zertifikat"
    ],
    "hint": "das, was du machen sollst"
   },
   {
    "type": "gap",
    "text": "Die ___ ist bis Donnerstag.",
    "answer": "Hausaufgabe",
    "options": [
     "Hausaufgabe",
     "Korrektur",
     "Beispiel"
    ],
    "hint": "die Aufgabe für zu Hause"
   },
   {
    "type": "gap",
    "text": "Die ___ habe ich noch nicht verstanden.",
    "answer": "Erklärung",
    "options": [
     "Erklärung",
     "Hausaufgabe",
     "Regel"
    ],
    "hint": "wenn jemand sagt, wie etwas funktioniert"
   },
   {
    "type": "gap",
    "text": "Können Sie ein ___ geben?",
    "answer": "Beispiel",
    "options": [
     "Beispiel",
     "Regel",
     "Erklärung"
    ],
    "hint": "ein Satz, der die Regel zeigt"
   },
   {
    "type": "gap",
    "text": "Diese ___ hat drei Ausnahmen.",
    "answer": "Regel",
    "options": [
     "Regel",
     "Entschuldigung",
     "Ausnahme"
    ],
    "hint": "wie es im Deutschen funktioniert"
   },
   {
    "type": "gap",
    "text": "Bei diesen Wörtern gibt es eine ___.",
    "answer": "Ausnahme",
    "options": [
     "Ausnahme",
     "Hausaufgabe",
     "Regel"
    ],
    "hint": "der Fall, in dem die Regel nicht gilt"
   },
   {
    "type": "gap",
    "text": "Am Freitag ___ wir die letzte Lektion.",
    "answer": "wiederholen",
    "options": [
     "wiederholen",
     "Entschuldigung",
     "nachfragen"
    ],
    "hint": "den alten Stoff noch einmal ansehen"
   },
   {
    "type": "gap",
    "text": "Aus einem ___ lernt man am meisten.",
    "answer": "Fehler",
    "options": [
     "Fehler",
     "Hausaufgabe",
     "Regel"
    ],
    "hint": "etwas, das nicht richtig ist"
   },
   {
    "type": "gap",
    "text": "Die ___ kommt am Montag zurück.",
    "answer": "Korrektur",
    "options": [
     "Korrektur",
     "Regel",
     "Erklärung"
    ],
    "hint": "die verbesserte Fassung deines Textes"
   },
   {
    "type": "gap",
    "text": "Ich schreibe eine ___ für gestern.",
    "answer": "Entschuldigung",
    "options": [
     "Entschuldigung",
     "Fehler",
     "Erklärung"
    ],
    "hint": "der kurze Text, warum du gefehlt hast"
   },
   {
    "type": "gap",
    "text": "Mit dem ___ kann ich mich bewerben.",
    "answer": "Zertifikat",
    "options": [
     "Zertifikat",
     "Ausnahme",
     "nachfragen"
    ],
    "hint": "das Papier am Ende des Kurses"
   },
   {
    "type": "match",
    "intro": "Ordne Wort und Bedeutung zu:",
    "pairs": [
     {
      "l": "die Aufgabe",
      "r": "das, was du machen sollst"
     },
     {
      "l": "die Hausaufgabe",
      "r": "die Aufgabe für zu Hause"
     },
     {
      "l": "nachfragen",
      "r": "noch einmal fragen, wenn etwas unklar ist"
     },
     {
      "l": "die Erklärung",
      "r": "wenn jemand sagt, wie etwas funktioniert"
     }
    ]
   },
   {
    "type": "match",
    "intro": "Ordne Wort und Bedeutung zu:",
    "pairs": [
     {
      "l": "das Beispiel",
      "r": "ein Satz, der die Regel zeigt"
     },
     {
      "l": "die Regel",
      "r": "wie es im Deutschen funktioniert"
     },
     {
      "l": "die Ausnahme",
      "r": "der Fall, in dem die Regel nicht gilt"
     },
     {
      "l": "üben",
      "r": "etwas mehrmals machen, bis es sitzt"
     }
    ]
   },
   {
    "type": "match",
    "intro": "Ordne Wort und Bedeutung zu:",
    "pairs": [
     {
      "l": "wiederholen",
      "r": "den alten Stoff noch einmal ansehen"
     },
     {
      "l": "der Fehler",
      "r": "etwas, das nicht richtig ist"
     },
     {
      "l": "die Korrektur",
      "r": "die verbesserte Fassung deines Textes"
     },
     {
      "l": "die Entschuldigung",
      "r": "der kurze Text, warum du gefehlt hast"
     }
    ]
   }
  ]
 },
 {
  "id": "weiterbildung-neu",
  "title": "Weiterbildung & Anerkennung",
  "level": "B1",
  "emoji": "🎓",
  "words": [
   {
    "de": "die Anerkennung",
    "info": "dein Abschluss gilt auch in Deutschland",
    "emoji": "📜",
    "bsp": "Die Anerkennung meines Abschlusses hat ein Jahr gedauert."
   },
   {
    "de": "der Abschluss",
    "info": "das Papier am Ende deiner Ausbildung",
    "emoji": "🎓",
    "bsp": "Mein Abschluss ist aus Kiew."
   },
   {
    "de": "die Weiterbildung",
    "info": "ein Kurs neben oder nach der Arbeit",
    "emoji": "📈",
    "bsp": "Die Weiterbildung dauert sechs Monate."
   },
   {
    "de": "die Umschulung",
    "info": "du lernst einen ganz neuen Beruf",
    "emoji": "🔄",
    "bsp": "Nach der Umschulung arbeitet er in der IT."
   },
   {
    "de": "der Bildungsgutschein",
    "info": "damit zahlt die Agentur deinen Kurs",
    "emoji": "🎟️",
    "bsp": "Mit dem Bildungsgutschein ist der Kurs kostenlos."
   },
   {
    "de": "die Agentur für Arbeit",
    "info": "das Amt, das bei Arbeitssuche und Weiterbildung hilft",
    "emoji": "🏛️",
    "bsp": "Die Agentur für Arbeit berät dich dazu."
   },
   {
    "de": "die Beratung",
    "info": "ein Gespräch, in dem dir jemand hilft",
    "emoji": "🤝",
    "bsp": "In der Beratung habe ich alles gefragt."
   },
   {
    "de": "die Voraussetzung",
    "info": "was du mitbringen musst",
    "emoji": "✔️",
    "bsp": "Voraussetzung ist Deutsch auf B2."
   },
   {
    "de": "berufsbegleitend",
    "info": "neben der Arbeit, abends oder am Wochenende",
    "emoji": "🌙",
    "bsp": "Der Kurs ist berufsbegleitend."
   },
   {
    "de": "das Praktikum",
    "info": "du arbeitest eine Zeit lang zum Lernen",
    "emoji": "🛠️",
    "bsp": "Nach dem Praktikum wurde sie übernommen."
   },
   {
    "de": "die Prüfung",
    "info": "der Test am Ende",
    "emoji": "📝",
    "bsp": "Die Prüfung ist im Juni."
   },
   {
    "de": "die Teilzeit",
    "info": "weniger Stunden als eine volle Stelle",
    "emoji": "🕐",
    "bsp": "Ich mache die Ausbildung in Teilzeit."
   },
   {
    "de": "die Förderung",
    "info": "Geld oder Hilfe vom Staat",
    "emoji": "💶",
    "bsp": "Es gibt eine Förderung für die Kursgebühr."
   },
   {
    "de": "der Lebenslauf",
    "info": "die Übersicht über deinen Weg",
    "emoji": "📄",
    "bsp": "Der Lebenslauf passt auf zwei Seiten."
   }
  ],
  "exercises": [
   {
    "type": "choice",
    "q": "Welches Wort passt: „dein Abschluss gilt auch in Deutschland“?",
    "options": [
     "die Teilzeit",
     "die Anerkennung",
     "die Förderung",
     "der Bildungsgutschein"
    ],
    "answer": 1,
    "explain": "die Anerkennung — dein Abschluss gilt auch in Deutschland."
   },
   {
    "type": "choice",
    "q": "Welches Wort passt: „das Papier am Ende deiner Ausbildung“?",
    "options": [
     "das Praktikum",
     "der Abschluss",
     "die Prüfung",
     "die Beratung"
    ],
    "answer": 1,
    "explain": "der Abschluss — das Papier am Ende deiner Ausbildung."
   },
   {
    "type": "choice",
    "q": "Welches Wort passt: „ein Kurs neben oder nach der Arbeit“?",
    "options": [
     "der Abschluss",
     "die Umschulung",
     "der Bildungsgutschein",
     "die Weiterbildung"
    ],
    "answer": 3,
    "explain": "die Weiterbildung — ein Kurs neben oder nach der Arbeit."
   },
   {
    "type": "choice",
    "q": "Welches Wort passt: „du lernst einen ganz neuen Beruf“?",
    "options": [
     "der Bildungsgutschein",
     "die Teilzeit",
     "die Umschulung",
     "die Voraussetzung"
    ],
    "answer": 2,
    "explain": "die Umschulung — du lernst einen ganz neuen Beruf."
   },
   {
    "type": "choice",
    "q": "Welches Wort passt: „damit zahlt die Agentur deinen Kurs“?",
    "options": [
     "die Teilzeit",
     "die Agentur für Arbeit",
     "der Bildungsgutschein",
     "die Beratung"
    ],
    "answer": 2,
    "explain": "der Bildungsgutschein — damit zahlt die Agentur deinen Kurs."
   },
   {
    "type": "choice",
    "q": "Welches Wort passt: „das Amt für Arbeit und Weiterbildung“?",
    "options": [
     "die Teilzeit",
     "die Agentur für Arbeit",
     "das Praktikum",
     "der Abschluss"
    ],
    "answer": 1,
    "explain": "die Agentur für Arbeit — das Amt für Arbeit und Weiterbildung."
   },
   {
    "type": "choice",
    "q": "Welches Wort passt: „ein Gespräch, in dem dir jemand hilft“?",
    "options": [
     "die Umschulung",
     "der Abschluss",
     "die Prüfung",
     "die Beratung"
    ],
    "answer": 3,
    "explain": "die Beratung — ein Gespräch, in dem dir jemand hilft."
   },
   {
    "type": "choice",
    "q": "Welches Wort passt: „was du mitbringen musst“?",
    "options": [
     "die Weiterbildung",
     "die Förderung",
     "die Voraussetzung",
     "der Abschluss"
    ],
    "answer": 2,
    "explain": "die Voraussetzung — was du mitbringen musst."
   },
   {
    "type": "choice",
    "q": "Welches Wort passt: „neben der Arbeit, abends oder am Wochenende“?",
    "options": [
     "der Abschluss",
     "berufsbegleitend",
     "das Praktikum",
     "die Umschulung"
    ],
    "answer": 1,
    "explain": "berufsbegleitend — neben der Arbeit, abends oder am Wochenende."
   },
   {
    "type": "choice",
    "q": "Welches Wort passt: „du arbeitest eine Zeit lang zum Lernen“?",
    "options": [
     "die Umschulung",
     "das Praktikum",
     "die Weiterbildung",
     "der Abschluss"
    ],
    "answer": 1,
    "explain": "das Praktikum — du arbeitest eine Zeit lang zum Lernen."
   },
   {
    "type": "choice",
    "q": "Welches Wort passt: „der Test am Ende“?",
    "options": [
     "die Beratung",
     "die Umschulung",
     "die Weiterbildung",
     "die Prüfung"
    ],
    "answer": 3,
    "explain": "die Prüfung — der Test am Ende."
   },
   {
    "type": "choice",
    "q": "Welches Wort passt: „weniger Stunden als eine volle Stelle“?",
    "options": [
     "die Förderung",
     "die Teilzeit",
     "die Agentur für Arbeit",
     "der Lebenslauf"
    ],
    "answer": 1,
    "explain": "die Teilzeit — weniger Stunden als eine volle Stelle."
   },
   {
    "type": "choice",
    "q": "Welches Wort passt: „Geld oder Hilfe vom Staat“?",
    "options": [
     "der Abschluss",
     "die Agentur für Arbeit",
     "die Förderung",
     "die Weiterbildung"
    ],
    "answer": 2,
    "explain": "die Förderung — Geld oder Hilfe vom Staat."
   },
   {
    "type": "choice",
    "q": "Welches Wort passt: „die Übersicht über deinen Weg“?",
    "options": [
     "die Weiterbildung",
     "der Lebenslauf",
     "der Abschluss",
     "die Beratung"
    ],
    "answer": 1,
    "explain": "der Lebenslauf — die Übersicht über deinen Weg."
   },
   {
    "type": "gap",
    "text": "Die ___ meines Abschlusses hat ein Jahr gedauert.",
    "answer": "Anerkennung",
    "options": [
     "Anerkennung",
     "Prüfung",
     "Bildungsgutschein"
    ],
    "hint": "dein Abschluss gilt auch in Deutschland"
   },
   {
    "type": "gap",
    "text": "Mein ___ ist aus Kiew.",
    "answer": "Abschluss",
    "options": [
     "Abschluss",
     "Umschulung",
     "Bildungsgutschein"
    ],
    "hint": "das Papier am Ende deiner Ausbildung"
   },
   {
    "type": "gap",
    "text": "Die ___ dauert sechs Monate.",
    "answer": "Weiterbildung",
    "options": [
     "Weiterbildung",
     "Abschluss",
     "Agentur für Arbeit"
    ],
    "hint": "ein Kurs neben oder nach der Arbeit"
   },
   {
    "type": "gap",
    "text": "Nach der ___ arbeitet er in der IT.",
    "answer": "Umschulung",
    "options": [
     "Umschulung",
     "Agentur für Arbeit",
     "Bildungsgutschein"
    ],
    "hint": "du lernst einen ganz neuen Beruf"
   },
   {
    "type": "gap",
    "text": "Mit dem ___ ist der Kurs kostenlos.",
    "answer": "Bildungsgutschein",
    "options": [
     "Bildungsgutschein",
     "Teilzeit",
     "Beratung"
    ],
    "hint": "damit zahlt die Agentur deinen Kurs"
   },
   {
    "type": "gap",
    "text": "Die ___ berät dich dazu.",
    "answer": "Agentur für Arbeit",
    "options": [
     "Agentur für Arbeit",
     "Abschluss",
     "Beratung"
    ],
    "hint": "das Amt, das bei Arbeitssuche und Weiterbildung hilft"
   },
   {
    "type": "gap",
    "text": "In der ___ habe ich alles gefragt.",
    "answer": "Beratung",
    "options": [
     "Beratung",
     "Förderung",
     "Bildungsgutschein"
    ],
    "hint": "ein Gespräch, in dem dir jemand hilft"
   },
   {
    "type": "gap",
    "text": "___ ist Deutsch auf B2.",
    "answer": "Voraussetzung",
    "options": [
     "Voraussetzung",
     "Teilzeit",
     "Weiterbildung"
    ],
    "hint": "was du mitbringen musst"
   },
   {
    "type": "gap",
    "text": "Der Kurs ist ___.",
    "answer": "berufsbegleitend",
    "options": [
     "berufsbegleitend",
     "Abschluss",
     "Agentur für Arbeit"
    ],
    "hint": "neben der Arbeit, abends oder am Wochenende"
   },
   {
    "type": "gap",
    "text": "Nach dem ___ wurde sie übernommen.",
    "answer": "Praktikum",
    "options": [
     "Praktikum",
     "Agentur für Arbeit",
     "Umschulung"
    ],
    "hint": "du arbeitest eine Zeit lang zum Lernen"
   },
   {
    "type": "gap",
    "text": "Die ___ ist im Juni.",
    "answer": "Prüfung",
    "options": [
     "Prüfung",
     "Praktikum",
     "Umschulung"
    ],
    "hint": "der Test am Ende"
   },
   {
    "type": "gap",
    "text": "Ich mache die Ausbildung in ___.",
    "answer": "Teilzeit",
    "options": [
     "Teilzeit",
     "Abschluss",
     "Praktikum"
    ],
    "hint": "weniger Stunden als eine volle Stelle"
   },
   {
    "type": "gap",
    "text": "Es gibt eine ___ für die Kursgebühr.",
    "answer": "Förderung",
    "options": [
     "Förderung",
     "Beratung",
     "Weiterbildung"
    ],
    "hint": "Geld oder Hilfe vom Staat"
   },
   {
    "type": "gap",
    "text": "Der ___ passt auf zwei Seiten.",
    "answer": "Lebenslauf",
    "options": [
     "Lebenslauf",
     "Weiterbildung",
     "Umschulung"
    ],
    "hint": "die Übersicht über deinen Weg"
   },
   {
    "type": "match",
    "intro": "Ordne Wort und Bedeutung zu:",
    "pairs": [
     {
      "l": "die Anerkennung",
      "r": "dein Abschluss gilt auch in Deutschland"
     },
     {
      "l": "der Abschluss",
      "r": "das Papier am Ende deiner Ausbildung"
     },
     {
      "l": "die Weiterbildung",
      "r": "ein Kurs neben oder nach der Arbeit"
     },
     {
      "l": "die Umschulung",
      "r": "du lernst einen ganz neuen Beruf"
     }
    ]
   },
   {
    "type": "match",
    "intro": "Ordne Wort und Bedeutung zu:",
    "pairs": [
     {
      "l": "der Bildungsgutschein",
      "r": "damit zahlt die Agentur deinen Kurs"
     },
     {
      "l": "die Agentur für Arbeit",
      "r": "das Amt, das bei Arbeitssuche und Weiterbildung hilft"
     },
     {
      "l": "die Beratung",
      "r": "ein Gespräch, in dem dir jemand hilft"
     },
     {
      "l": "die Voraussetzung",
      "r": "was du mitbringen musst"
     }
    ]
   },
   {
    "type": "match",
    "intro": "Ordne Wort und Bedeutung zu:",
    "pairs": [
     {
      "l": "berufsbegleitend",
      "r": "neben der Arbeit, abends oder am Wochenende"
     },
     {
      "l": "das Praktikum",
      "r": "du arbeitest eine Zeit lang zum Lernen"
     },
     {
      "l": "die Prüfung",
      "r": "der Test am Ende"
     },
     {
      "l": "die Teilzeit",
      "r": "weniger Stunden als eine volle Stelle"
     }
    ]
   }
  ]
 },
 {
  "id": "medien-neu",
  "title": "Nachrichten, Werbung & sicher im Netz",
  "level": "B1",
  "emoji": "📱",
  "words": [
   {
    "de": "die Nachrichten",
    "info": "was heute in der Welt passiert ist",
    "emoji": "📰",
    "bsp": "Die Nachrichten kommen um acht."
   },
   {
    "de": "die Schlagzeile",
    "info": "die dicke Zeile ganz oben",
    "emoji": "🗞️",
    "bsp": "Die Schlagzeile sagt noch nicht alles."
   },
   {
    "de": "die Quelle",
    "info": "wer die Information verbreitet hat",
    "emoji": "🔍",
    "bsp": "Schau immer auf die Quelle."
   },
   {
    "de": "die Werbung",
    "info": "der Text, der dir etwas verkaufen will",
    "emoji": "📢",
    "bsp": "Zwischen den Nachrichten kommt Werbung."
   },
   {
    "de": "das Abo",
    "info": "du zahlst regelmäßig und bekommst regelmäßig etwas",
    "emoji": "🔁",
    "bsp": "Das Abo läuft ein Jahr."
   },
   {
    "de": "kündigen",
    "info": "einen Vertrag beenden",
    "emoji": "✂️",
    "bsp": "Ich möchte mein Abo kündigen."
   },
   {
    "de": "die Datenschutzerklärung",
    "info": "der Text darüber, was mit deinen Daten passiert",
    "emoji": "🔒",
    "bsp": "Fast niemand liest die Datenschutzerklärung."
   },
   {
    "de": "das Passwort",
    "info": "dein geheimes Wort zum Anmelden",
    "emoji": "🔑",
    "bsp": "Nimm für jedes Konto ein anderes Passwort."
   },
   {
    "de": "der Betrug",
    "info": "jemand will dich mit einer Lüge um Geld bringen",
    "emoji": "🚨",
    "bsp": "Diese Mail war ein Betrug."
   },
   {
    "de": "die Phishing-Mail",
    "info": "eine falsche Mail, die dein Passwort will",
    "emoji": "🎣",
    "bsp": "Öffne den Link in der Phishing-Mail nicht."
   },
   {
    "de": "seriös",
    "info": "ernst zu nehmen und vertrauenswürdig",
    "emoji": "🤝",
    "bsp": "Die Seite wirkt seriös."
   },
   {
    "de": "die Falschmeldung",
    "info": "eine Nachricht, die nicht stimmt",
    "emoji": "❌",
    "bsp": "Das war eine Falschmeldung."
   },
   {
    "de": "der Beitrag",
    "info": "ein einzelner Text oder ein Video im Netz",
    "emoji": "💬",
    "bsp": "Ihr Beitrag hat viele Kommentare."
   },
   {
    "de": "der Kommentar",
    "info": "was jemand unter einen Beitrag schreibt",
    "emoji": "✍️",
    "bsp": "Der Kommentar war unfreundlich."
   }
  ],
  "exercises": [
   {
    "type": "choice",
    "q": "Welches Wort passt: „was heute in der Welt passiert ist“?",
    "options": [
     "die Datenschutzerklärung",
     "die Nachrichten",
     "die Phishing-Mail",
     "seriös"
    ],
    "answer": 1,
    "explain": "die Nachrichten — was heute in der Welt passiert ist."
   },
   {
    "type": "choice",
    "q": "Welches Wort passt: „die dicke Zeile ganz oben“?",
    "options": [
     "die Quelle",
     "die Schlagzeile",
     "das Abo",
     "die Werbung"
    ],
    "answer": 1,
    "explain": "die Schlagzeile — die dicke Zeile ganz oben."
   },
   {
    "type": "choice",
    "q": "Welches Wort passt: „wer die Information verbreitet hat“?",
    "options": [
     "das Passwort",
     "das Abo",
     "die Falschmeldung",
     "die Quelle"
    ],
    "answer": 3,
    "explain": "die Quelle — wer die Information verbreitet hat."
   },
   {
    "type": "choice",
    "q": "Welches Wort passt: „der Text, der dir etwas verkaufen will“?",
    "options": [
     "kündigen",
     "die Datenschutzerklärung",
     "die Werbung",
     "die Falschmeldung"
    ],
    "answer": 2,
    "explain": "die Werbung — der Text, der dir etwas verkaufen will."
   },
   {
    "type": "choice",
    "q": "Welches Wort passt: „du zahlst regelmäßig und bekommst regelmäßig etwas“?",
    "options": [
     "die Phishing-Mail",
     "die Schlagzeile",
     "das Abo",
     "die Falschmeldung"
    ],
    "answer": 2,
    "explain": "das Abo — du zahlst regelmäßig und bekommst regelmäßig etwas."
   },
   {
    "type": "choice",
    "q": "Welches Wort passt: „einen Vertrag beenden“?",
    "options": [
     "die Werbung",
     "kündigen",
     "seriös",
     "die Schlagzeile"
    ],
    "answer": 1,
    "explain": "kündigen — einen Vertrag beenden."
   },
   {
    "type": "choice",
    "q": "Welches Wort passt: „der Text darüber, was mit deinen Daten passiert“?",
    "options": [
     "der Beitrag",
     "die Quelle",
     "die Schlagzeile",
     "die Datenschutzerklärung"
    ],
    "answer": 3,
    "explain": "die Datenschutzerklärung — der Text darüber, was mit deinen Daten passiert."
   },
   {
    "type": "choice",
    "q": "Welches Wort passt: „dein geheimes Wort zum Anmelden“?",
    "options": [
     "die Phishing-Mail",
     "die Werbung",
     "das Passwort",
     "die Schlagzeile"
    ],
    "answer": 2,
    "explain": "das Passwort — dein geheimes Wort zum Anmelden."
   },
   {
    "type": "choice",
    "q": "Welches Wort passt: „jemand will dich mit einer Lüge um Geld bringen“?",
    "options": [
     "die Quelle",
     "der Betrug",
     "die Schlagzeile",
     "die Werbung"
    ],
    "answer": 1,
    "explain": "der Betrug — jemand will dich mit einer Lüge um Geld bringen."
   },
   {
    "type": "choice",
    "q": "Welches Wort passt: „eine falsche Mail, die dein Passwort will“?",
    "options": [
     "die Quelle",
     "die Phishing-Mail",
     "die Datenschutzerklärung",
     "die Werbung"
    ],
    "answer": 1,
    "explain": "die Phishing-Mail — eine falsche Mail, die dein Passwort will."
   },
   {
    "type": "choice",
    "q": "Welches Wort passt: „ernst zu nehmen und vertrauenswürdig“?",
    "options": [
     "der Kommentar",
     "der Beitrag",
     "kündigen",
     "seriös"
    ],
    "answer": 3,
    "explain": "seriös — ernst zu nehmen und vertrauenswürdig."
   },
   {
    "type": "choice",
    "q": "Welches Wort passt: „eine Nachricht, die nicht stimmt“?",
    "options": [
     "kündigen",
     "die Falschmeldung",
     "die Quelle",
     "die Schlagzeile"
    ],
    "answer": 1,
    "explain": "die Falschmeldung — eine Nachricht, die nicht stimmt."
   },
   {
    "type": "choice",
    "q": "Welches Wort passt: „ein einzelner Text oder ein Video im Netz“?",
    "options": [
     "die Schlagzeile",
     "die Datenschutzerklärung",
     "der Beitrag",
     "die Quelle"
    ],
    "answer": 2,
    "explain": "der Beitrag — ein einzelner Text oder ein Video im Netz."
   },
   {
    "type": "choice",
    "q": "Welches Wort passt: „was jemand unter einen Beitrag schreibt“?",
    "options": [
     "seriös",
     "der Kommentar",
     "die Phishing-Mail",
     "die Datenschutzerklärung"
    ],
    "answer": 1,
    "explain": "der Kommentar — was jemand unter einen Beitrag schreibt."
   },
   {
    "type": "gap",
    "text": "Die ___ kommen um acht.",
    "answer": "Nachrichten",
    "options": [
     "Nachrichten",
     "Werbung",
     "Abo"
    ],
    "hint": "was heute in der Welt passiert ist"
   },
   {
    "type": "gap",
    "text": "Die ___ sagt noch nicht alles.",
    "answer": "Schlagzeile",
    "options": [
     "Schlagzeile",
     "Quelle",
     "kündigen"
    ],
    "hint": "die dicke Zeile ganz oben"
   },
   {
    "type": "gap",
    "text": "Schau immer auf die ___.",
    "answer": "Quelle",
    "options": [
     "Quelle",
     "kündigen",
     "Abo"
    ],
    "hint": "wer die Information verbreitet hat"
   },
   {
    "type": "gap",
    "text": "Zwischen den Nachrichten kommt ___.",
    "answer": "Werbung",
    "options": [
     "Werbung",
     "Falschmeldung",
     "Datenschutzerklärung"
    ],
    "hint": "der Text, der dir etwas verkaufen will"
   },
   {
    "type": "gap",
    "text": "Das ___ läuft ein Jahr.",
    "answer": "Abo",
    "options": [
     "Abo",
     "Schlagzeile",
     "Datenschutzerklärung"
    ],
    "hint": "du zahlst regelmäßig und bekommst regelmäßig etwas"
   },
   {
    "type": "gap",
    "text": "Ich möchte mein Abo ___.",
    "answer": "kündigen",
    "options": [
     "kündigen",
     "Beitrag",
     "Abo"
    ],
    "hint": "einen Vertrag beenden"
   },
   {
    "type": "gap",
    "text": "Fast niemand liest die ___.",
    "answer": "Datenschutzerklärung",
    "options": [
     "Datenschutzerklärung",
     "Falschmeldung",
     "Quelle"
    ],
    "hint": "der Text darüber, was mit deinen Daten passiert"
   },
   {
    "type": "gap",
    "text": "Nimm für jedes Konto ein anderes ___.",
    "answer": "Passwort",
    "options": [
     "Passwort",
     "Schlagzeile",
     "kündigen"
    ],
    "hint": "dein geheimes Wort zum Anmelden"
   },
   {
    "type": "gap",
    "text": "Diese Mail war ein ___.",
    "answer": "Betrug",
    "options": [
     "Betrug",
     "kündigen",
     "Werbung"
    ],
    "hint": "jemand will dich mit einer Lüge um Geld bringen"
   },
   {
    "type": "gap",
    "text": "Öffne den Link in der ___ nicht.",
    "answer": "Phishing-Mail",
    "options": [
     "Phishing-Mail",
     "seriös",
     "Werbung"
    ],
    "hint": "eine falsche Mail, die dein Passwort will"
   },
   {
    "type": "gap",
    "text": "Die Seite wirkt ___.",
    "answer": "seriös",
    "options": [
     "seriös",
     "Schlagzeile",
     "Phishing-Mail"
    ],
    "hint": "ernst zu nehmen und vertrauenswürdig"
   },
   {
    "type": "gap",
    "text": "Das war eine ___.",
    "answer": "Falschmeldung",
    "options": [
     "Falschmeldung",
     "Datenschutzerklärung",
     "Quelle"
    ],
    "hint": "eine Nachricht, die nicht stimmt"
   },
   {
    "type": "gap",
    "text": "Ihr ___ hat viele Kommentare.",
    "answer": "Beitrag",
    "options": [
     "Beitrag",
     "Quelle",
     "Werbung"
    ],
    "hint": "ein einzelner Text oder ein Video im Netz"
   },
   {
    "type": "gap",
    "text": "Der ___ war unfreundlich.",
    "answer": "Kommentar",
    "options": [
     "Kommentar",
     "Quelle",
     "Werbung"
    ],
    "hint": "was jemand unter einen Beitrag schreibt"
   },
   {
    "type": "match",
    "intro": "Ordne Wort und Bedeutung zu:",
    "pairs": [
     {
      "l": "die Nachrichten",
      "r": "was heute in der Welt passiert ist"
     },
     {
      "l": "die Schlagzeile",
      "r": "die dicke Zeile ganz oben"
     },
     {
      "l": "die Quelle",
      "r": "wer die Information verbreitet hat"
     },
     {
      "l": "die Werbung",
      "r": "der Text, der dir etwas verkaufen will"
     }
    ]
   },
   {
    "type": "match",
    "intro": "Ordne Wort und Bedeutung zu:",
    "pairs": [
     {
      "l": "das Abo",
      "r": "du zahlst regelmäßig und bekommst regelmäßig etwas"
     },
     {
      "l": "kündigen",
      "r": "einen Vertrag beenden"
     },
     {
      "l": "die Datenschutzerklärung",
      "r": "der Text darüber, was mit deinen Daten passiert"
     },
     {
      "l": "das Passwort",
      "r": "dein geheimes Wort zum Anmelden"
     }
    ]
   },
   {
    "type": "match",
    "intro": "Ordne Wort und Bedeutung zu:",
    "pairs": [
     {
      "l": "der Betrug",
      "r": "jemand will dich mit einer Lüge um Geld bringen"
     },
     {
      "l": "die Phishing-Mail",
      "r": "eine falsche Mail, die dein Passwort will"
     },
     {
      "l": "seriös",
      "r": "ernst zu nehmen und vertrauenswürdig"
     },
     {
      "l": "die Falschmeldung",
      "r": "eine Nachricht, die nicht stimmt"
     }
    ]
   }
  ]
 }
];

  var da = {};
  ws.themes.forEach(function (t) { da[t.id] = 1; });
  NEU.forEach(function (t) { if (!da[t.id]) ws.themes.push(t); });
})();
