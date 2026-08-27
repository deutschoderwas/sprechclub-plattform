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
    "info": "der Chef auf der Baustelle",
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
    "hint": "der Chef auf der Baustelle"
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
      "r": "der Chef auf der Baustelle"
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
    "info": "kommt in den Eimer",
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
    "hint": "kommt in den Eimer"
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
      "r": "kommt in den Eimer"
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
 }
];

  var da = {};
  ws.themes.forEach(function (t) { da[t.id] = 1; });
  NEU.forEach(function (t) { if (!da[t.id]) ws.themes.push(t); });
})();
