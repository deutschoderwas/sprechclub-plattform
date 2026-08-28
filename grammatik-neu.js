/* ============================================================
   grammatik-neu.js — die Bausteine, die auf A2 gefehlt haben

   Vorher: vier Themen auf A1, dreizehn auf B1/B2 — und dazwischen
   nichts. Genau dort stehen aber die meisten Lernenden.

   Zwoelf neue Themen: Modalverben, trennbare Verben, Perfekt mit
   haben und sein, Dativ, Possessivartikel, Negation, Imperativ,
   Vergleiche, reflexive Verben, weil/dass/wenn, Praepositionen mit
   Dativ und die Vergangenheit zum Sprechen (war, hatte, konnte).

   Je Aufgabe steht eine Erklaerung in einem Satz dabei — nicht die
   Regel aus dem Buch, sondern der Grund, warum es hier so ist.

   Wird NACH uebungen.js geladen und haengt seine Themen an den
   Bereich "Grammatik" an. uebungen.js bleibt unangetastet.

   Erzeugt von bau/mach-grammatik.js aus bau/grammatik-quelle.json.
   ============================================================ */
(function () {
  var U = window.UEBUNGEN;
  if (!U || !U.skills) return;
  var g = null;
  for (var i = 0; i < U.skills.length; i++) { if (U.skills[i].id === 'grammatik') { g = U.skills[i]; break; } }
  if (!g) return;
  if (!g.themes) g.themes = [];

  var NEU = [
 {
  "id": "modalverben",
  "title": "Modalverben — können, müssen, dürfen, wollen",
  "level": "A2",
  "emoji": "🔑",
  "words": [],
  "exercises": [
   {
    "type": "gap",
    "text": "Ich ___ heute leider nicht kommen, ich bin krank.",
    "answer": "kann",
    "alts": [
     "kann"
    ],
    "explain": "können = Möglichkeit oder Fähigkeit."
   },
   {
    "type": "gap",
    "text": "Du ___ den Antrag bis Freitag abgeben — sonst ist die Frist vorbei.",
    "answer": "musst",
    "alts": [
     "musst"
    ],
    "explain": "müssen = notwendig, keine Wahl."
   },
   {
    "type": "gap",
    "text": "Hier ___ man nicht rauchen.",
    "answer": "darf",
    "alts": [
     "darf"
    ],
    "explain": "dürfen = erlaubt sein. Mit nicht: verboten."
   },
   {
    "type": "gap",
    "text": "___ ich Ihnen helfen?",
    "answer": "Kann",
    "alts": [
     "Kann",
     "Darf",
     "Soll"
    ],
    "explain": "Höfliches Angebot: Kann / Darf / Soll ich …?"
   },
   {
    "type": "gap",
    "text": "Ich ___ gern einen Kaffee, bitte.",
    "answer": "möchte",
    "alts": [
     "möchte",
     "hätte gern"
    ],
    "explain": "möchte = höflicher Wunsch."
   },
   {
    "type": "gap",
    "text": "Meine Chefin sagt, ich ___ das Protokoll schreiben.",
    "answer": "soll",
    "alts": [
     "soll"
    ],
    "explain": "sollen = jemand anders will es so."
   },
   {
    "type": "gap",
    "text": "Wir ___ am Wochenende ans Meer fahren. Wir freuen uns schon!",
    "answer": "wollen",
    "alts": [
     "wollen",
     "möchten"
    ],
    "explain": "wollen = eigener Plan, eigener Wille."
   },
   {
    "type": "gap",
    "text": "Mit dem Ticket ___ du auch die S-Bahn benutzen.",
    "answer": "kannst",
    "alts": [
     "kannst",
     "darfst"
    ],
    "explain": "können = Möglichkeit."
   },
   {
    "type": "choice",
    "q": "Was ist höflicher im Restaurant?",
    "options": [
     "Ich möchte einen Tee.",
     "Ich will einen Tee.",
     "Ich muss einen Tee."
    ],
    "answer": 0,
    "explain": "„möchte“ ist die höfliche Form von „wollen“."
   },
   {
    "type": "choice",
    "q": "„Du musst nicht kommen.“ heißt:",
    "options": [
     "Es ist nicht nötig.",
     "Es ist verboten.",
     "Du kannst es nicht."
    ],
    "answer": 0,
    "explain": "müssen + nicht = nicht nötig. Verboten wäre „darfst nicht“."
   },
   {
    "type": "choice",
    "q": "Wo steht das zweite Verb im Satz mit Modalverb?",
    "options": [
     "Am Ende, im Infinitiv",
     "Direkt nach dem Modalverb",
     "Am Anfang"
    ],
    "answer": 0,
    "explain": "Ich muss heute länger arbeiten. — Infinitiv am Satzende."
   },
   {
    "type": "gap",
    "text": "Er hat sein Handy vergessen, deshalb ___ er nicht anrufen.",
    "answer": "kann",
    "alts": [
     "kann",
     "konnte"
    ],
    "explain": "Möglichkeit fehlt → können, verneint."
   },
   {
    "type": "gap",
    "text": "Kinder unter zwölf ___ vorne nicht sitzen.",
    "answer": "dürfen",
    "alts": [
     "dürfen"
    ],
    "explain": "Regel/Verbot → dürfen nicht."
   },
   {
    "type": "gap",
    "text": "___ wir uns morgen um zehn treffen?",
    "answer": "Sollen",
    "alts": [
     "Sollen",
     "Können",
     "Wollen"
    ],
    "explain": "Vorschlag: Sollen/Wollen wir …?"
   }
  ]
 },
 {
  "id": "trennbare-verben",
  "title": "Trennbare Verben — aufstehen, einkaufen, anrufen",
  "level": "A1",
  "emoji": "✂️",
  "words": [],
  "exercises": [
   {
    "type": "gap",
    "text": "Ich stehe jeden Tag um sechs ___.",
    "answer": "auf",
    "alts": [
     "auf"
    ],
    "explain": "aufstehen: die Vorsilbe geht ans Satzende."
   },
   {
    "type": "gap",
    "text": "Rufst du mich heute Abend ___?",
    "answer": "an",
    "alts": [
     "an"
    ],
    "explain": "anrufen → ruf … an."
   },
   {
    "type": "gap",
    "text": "Wir kaufen samstags im Supermarkt ___.",
    "answer": "ein",
    "alts": [
     "ein"
    ],
    "explain": "einkaufen → kaufe … ein."
   },
   {
    "type": "gap",
    "text": "Der Zug kommt um 14:20 ___.",
    "answer": "an",
    "alts": [
     "an"
    ],
    "explain": "ankommen → kommt … an."
   },
   {
    "type": "gap",
    "text": "Machst du bitte das Fenster ___? Es ist kalt.",
    "answer": "zu",
    "alts": [
     "zu"
    ],
    "explain": "zumachen → mach … zu."
   },
   {
    "type": "gap",
    "text": "Ich hole dich um acht ___.",
    "answer": "ab",
    "alts": [
     "ab"
    ],
    "explain": "abholen → hole … ab."
   },
   {
    "type": "choice",
    "q": "Wo steht die Vorsilbe im Hauptsatz?",
    "options": [
     "Am Satzende",
     "Direkt beim Verb",
     "Am Satzanfang"
    ],
    "answer": 0,
    "explain": "Ich stehe früh auf. — Vorsilbe ganz hinten."
   },
   {
    "type": "choice",
    "q": "Im Nebensatz mit „weil“ heißt es:",
    "options": [
     "… weil ich früh aufstehe.",
     "… weil ich früh stehe auf.",
     "… weil auf ich früh stehe."
    ],
    "answer": 0,
    "explain": "Im Nebensatz bleibt das Verb zusammen und steht am Ende."
   },
   {
    "type": "gap",
    "text": "Im Perfekt: Ich bin um sechs ___gestanden.",
    "answer": "auf",
    "alts": [
     "auf"
    ],
    "explain": "Das -ge- kommt in die Mitte: aufgestanden."
   },
   {
    "type": "gap",
    "text": "Sie hat mich gestern ___gerufen.",
    "answer": "an",
    "alts": [
     "an"
    ],
    "explain": "angerufen — Vorsilbe, ge, Verb."
   },
   {
    "type": "choice",
    "q": "Welches Verb ist NICHT trennbar?",
    "options": [
     "verstehen",
     "aufstehen",
     "einkaufen"
    ],
    "answer": 0,
    "explain": "ver-, be-, er-, ent- sind untrennbar."
   },
   {
    "type": "gap",
    "text": "Bitte machen Sie das Licht ___, wenn Sie gehen.",
    "answer": "aus",
    "alts": [
     "aus"
    ],
    "explain": "ausmachen → machen … aus."
   },
   {
    "type": "gap",
    "text": "Wann fängt der Kurs ___?",
    "answer": "an",
    "alts": [
     "an"
    ],
    "explain": "anfangen → fängt … an."
   },
   {
    "type": "gap",
    "text": "Ich ziehe nächsten Monat ___.",
    "answer": "um",
    "alts": [
     "um"
    ],
    "explain": "umziehen → ziehe … um."
   }
  ]
 },
 {
  "id": "perfekt-bilden",
  "title": "Perfekt — haben oder sein?",
  "level": "A2",
  "emoji": "⏮️",
  "words": [],
  "exercises": [
   {
    "type": "gap",
    "text": "Ich ___ gestern einen Brief geschrieben.",
    "answer": "habe",
    "alts": [
     "habe"
    ],
    "explain": "Die meisten Verben bilden das Perfekt mit haben."
   },
   {
    "type": "gap",
    "text": "Wir ___ mit dem Bus gefahren.",
    "answer": "sind",
    "alts": [
     "sind"
    ],
    "explain": "Bewegung von A nach B → sein."
   },
   {
    "type": "gap",
    "text": "Sie ___ um sieben aufgestanden.",
    "answer": "ist",
    "alts": [
     "ist"
    ],
    "explain": "Zustandsänderung (schlafen → wach) → sein."
   },
   {
    "type": "gap",
    "text": "Was ___ du am Wochenende gemacht?",
    "answer": "hast",
    "alts": [
     "hast"
    ],
    "explain": "machen → haben."
   },
   {
    "type": "gap",
    "text": "Er ___ zu Hause geblieben.",
    "answer": "ist",
    "alts": [
     "ist"
    ],
    "explain": "bleiben, sein, werden: immer mit sein."
   },
   {
    "type": "gap",
    "text": "Ich ___ das Formular schon abgegeben.",
    "answer": "habe",
    "alts": [
     "habe"
    ],
    "explain": "abgeben → haben."
   },
   {
    "type": "choice",
    "q": "Welcher Satz ist richtig?",
    "options": [
     "Ich bin nach Berlin gefahren.",
     "Ich habe nach Berlin gefahren.",
     "Ich bin nach Berlin gefahrt."
    ],
    "answer": 0,
    "explain": "fahren = Bewegung → sein; Partizip: gefahren."
   },
   {
    "type": "gap",
    "text": "Das Partizip von „arbeiten“ ist ge___.",
    "answer": "arbeitet",
    "alts": [
     "arbeitet"
    ],
    "explain": "gearbeitet — regelmäßig: ge + Stamm + t."
   },
   {
    "type": "gap",
    "text": "Das Partizip von „sehen“ ist ge___.",
    "answer": "sehen",
    "alts": [
     "sehen"
    ],
    "explain": "gesehen — unregelmäßig: ge + Stamm + en."
   },
   {
    "type": "choice",
    "q": "Verben auf -ieren bilden das Partizip:",
    "options": [
     "ohne ge- (studiert)",
     "mit ge- (gestudiert)",
     "mit ge- und -en"
    ],
    "answer": 0,
    "explain": "studieren → studiert, telefonieren → telefoniert."
   },
   {
    "type": "gap",
    "text": "Wo ___ ihr gestern gewesen?",
    "answer": "seid",
    "alts": [
     "seid"
    ],
    "explain": "sein → ist/sind gewesen."
   },
   {
    "type": "gap",
    "text": "Ich ___ meinen Schlüssel verloren.",
    "answer": "habe",
    "alts": [
     "habe"
    ],
    "explain": "verlieren → haben, Partizip verloren (ohne ge-)."
   },
   {
    "type": "choice",
    "q": "Wo steht das Partizip im Hauptsatz?",
    "options": [
     "Ganz am Ende",
     "Direkt nach haben/sein",
     "Am Satzanfang"
    ],
    "answer": 0,
    "explain": "Ich habe gestern lange gearbeitet."
   },
   {
    "type": "gap",
    "text": "Der Bus ___ pünktlich angekommen.",
    "answer": "ist",
    "alts": [
     "ist"
    ],
    "explain": "ankommen = Bewegung/Ortswechsel → sein."
   }
  ]
 },
 {
  "id": "dativ",
  "title": "Der Dativ — wem gehört was, wem hilfst du?",
  "level": "A2",
  "emoji": "🎁",
  "words": [],
  "exercises": [
   {
    "type": "gap",
    "text": "Ich helfe ___ Nachbarin mit den Einkäufen.",
    "answer": "der",
    "alts": [
     "der"
    ],
    "explain": "helfen + Dativ. die Nachbarin → der Nachbarin."
   },
   {
    "type": "gap",
    "text": "Das Buch gehört ___ Kind.",
    "answer": "dem",
    "alts": [
     "dem"
    ],
    "explain": "das Kind → dem Kind."
   },
   {
    "type": "gap",
    "text": "Ich fahre mit ___ Fahrrad zur Arbeit.",
    "answer": "dem",
    "alts": [
     "dem"
    ],
    "explain": "mit + Dativ. das Fahrrad → dem Fahrrad."
   },
   {
    "type": "gap",
    "text": "Nach ___ Arbeit gehe ich einkaufen.",
    "answer": "der",
    "alts": [
     "der"
    ],
    "explain": "nach + Dativ. die Arbeit → der Arbeit."
   },
   {
    "type": "gap",
    "text": "Kannst du ___ bitte den Stift geben? (ich)",
    "answer": "mir",
    "alts": [
     "mir"
    ],
    "explain": "ich → mir im Dativ."
   },
   {
    "type": "gap",
    "text": "Wie geht es ___? (du)",
    "answer": "dir",
    "alts": [
     "dir"
    ],
    "explain": "Feste Wendung: Wie geht es dir?"
   },
   {
    "type": "choice",
    "q": "Welches Verb steht immer mit Dativ?",
    "options": [
     "danken",
     "sehen",
     "fragen"
    ],
    "answer": 0,
    "explain": "danken, helfen, gehören, gefallen, passen: Dativ."
   },
   {
    "type": "gap",
    "text": "Das Kleid gefällt ___ sehr gut. (ich)",
    "answer": "mir",
    "alts": [
     "mir"
    ],
    "explain": "gefallen + Dativ."
   },
   {
    "type": "gap",
    "text": "Er wohnt bei ___ Eltern.",
    "answer": "seinen",
    "alts": [
     "seinen"
    ],
    "explain": "bei + Dativ Plural: den/seinen Eltern (+n)."
   },
   {
    "type": "choice",
    "q": "Im Dativ Plural bekommt das Nomen:",
    "options": [
     "ein -n am Ende",
     "ein -s am Ende",
     "keine Endung"
    ],
    "answer": 0,
    "explain": "mit den Kindern, mit den Freunden."
   },
   {
    "type": "gap",
    "text": "Ich komme gerade aus ___ Apotheke.",
    "answer": "der",
    "alts": [
     "der"
    ],
    "explain": "aus + Dativ."
   },
   {
    "type": "gap",
    "text": "Seit ___ Monat lerne ich Deutsch.",
    "answer": "einem",
    "alts": [
     "einem"
    ],
    "explain": "seit + Dativ. der Monat → einem Monat."
   },
   {
    "type": "gap",
    "text": "Sag ___ bitte Bescheid! (er)",
    "answer": "ihm",
    "alts": [
     "ihm"
    ],
    "explain": "er → ihm im Dativ."
   },
   {
    "type": "choice",
    "q": "„Ich schenke meiner Schwester ein Buch.“ Was ist Dativ?",
    "options": [
     "meiner Schwester",
     "ein Buch",
     "ich"
    ],
    "answer": 0,
    "explain": "Wem schenke ich? → meiner Schwester."
   }
  ]
 },
 {
  "id": "possessivartikel",
  "title": "mein, dein, sein — wem gehört es?",
  "level": "A1",
  "emoji": "🔐",
  "words": [],
  "exercises": [
   {
    "type": "gap",
    "text": "Das ist ___ Bruder. (ich)",
    "answer": "mein",
    "alts": [
     "mein"
    ],
    "explain": "der Bruder → mein Bruder."
   },
   {
    "type": "gap",
    "text": "Wie heißt ___ Schwester? (du)",
    "answer": "deine",
    "alts": [
     "deine"
    ],
    "explain": "die Schwester → deine Schwester."
   },
   {
    "type": "gap",
    "text": "Er sucht ___ Schlüssel. (er)",
    "answer": "seinen",
    "alts": [
     "seinen"
    ],
    "explain": "Akkusativ maskulin: seinen."
   },
   {
    "type": "gap",
    "text": "Wir besuchen ___ Großeltern. (wir)",
    "answer": "unsere",
    "alts": [
     "unsere"
    ],
    "explain": "Plural: unsere Großeltern."
   },
   {
    "type": "gap",
    "text": "Ist das ___ Auto? (Sie, höflich)",
    "answer": "Ihr",
    "alts": [
     "Ihr"
    ],
    "explain": "Höflich groß: Ihr Auto."
   },
   {
    "type": "gap",
    "text": "Sie liebt ___ Arbeit. (sie, Singular)",
    "answer": "ihre",
    "alts": [
     "ihre"
    ],
    "explain": "die Arbeit → ihre Arbeit."
   },
   {
    "type": "choice",
    "q": "Wonach richtet sich die Endung?",
    "options": [
     "Nach dem Nomen danach",
     "Nach der Person davor",
     "Sie ist immer gleich"
    ],
    "answer": 0,
    "explain": "mein Vater, meine Mutter, mein Kind."
   },
   {
    "type": "gap",
    "text": "Habt ihr ___ Hausaufgaben gemacht? (ihr)",
    "answer": "eure",
    "alts": [
     "eure"
    ],
    "explain": "ihr → euer/eure."
   },
   {
    "type": "gap",
    "text": "Das Kind spielt mit ___ Freundin. (es)",
    "answer": "seiner",
    "alts": [
     "seiner"
    ],
    "explain": "Dativ feminin: seiner."
   },
   {
    "type": "gap",
    "text": "Ich fahre mit ___ Auto. (mein)",
    "answer": "meinem",
    "alts": [
     "meinem"
    ],
    "explain": "mit + Dativ neutrum: meinem."
   },
   {
    "type": "choice",
    "q": "„Ihr“ groß geschrieben bedeutet:",
    "options": [
     "Ihr = von Ihnen (höflich)",
     "ihr = von ihr",
     "ihr = von ihnen"
    ],
    "answer": 0,
    "explain": "Die Höflichkeitsform schreibt man groß."
   },
   {
    "type": "gap",
    "text": "Wo ist ___ Handy? (du)",
    "answer": "dein",
    "alts": [
     "dein"
    ],
    "explain": "das Handy → dein Handy."
   },
   {
    "type": "gap",
    "text": "Er hat ___ Tasche vergessen. (er)",
    "answer": "seine",
    "alts": [
     "seine"
    ],
    "explain": "die Tasche → seine Tasche."
   },
   {
    "type": "gap",
    "text": "Wir mögen ___ neue Wohnung. (wir)",
    "answer": "unsere",
    "alts": [
     "unsere"
    ],
    "explain": "die Wohnung → unsere Wohnung."
   }
  ]
 },
 {
  "id": "negation",
  "title": "nicht oder kein?",
  "level": "A1",
  "emoji": "🚫",
  "words": [],
  "exercises": [
   {
    "type": "gap",
    "text": "Ich habe ___ Zeit.",
    "answer": "keine",
    "alts": [
     "keine"
    ],
    "explain": "Vor einem Nomen ohne Artikel: kein/keine."
   },
   {
    "type": "gap",
    "text": "Das ist ___ mein Mantel.",
    "answer": "nicht",
    "alts": [
     "nicht"
    ],
    "explain": "Vor mein/dein/dem/der steht nicht."
   },
   {
    "type": "gap",
    "text": "Er hat ___ Auto.",
    "answer": "kein",
    "alts": [
     "kein"
    ],
    "explain": "das Auto → kein Auto."
   },
   {
    "type": "gap",
    "text": "Ich verstehe das ___.",
    "answer": "nicht",
    "alts": [
     "nicht"
    ],
    "explain": "Ein Verb verneint man mit nicht — meistens am Satzende."
   },
   {
    "type": "gap",
    "text": "Wir haben heute ___ Unterricht.",
    "answer": "keinen",
    "alts": [
     "keinen"
    ],
    "explain": "der Unterricht, Akkusativ → keinen."
   },
   {
    "type": "gap",
    "text": "Der Kaffee ist ___ heiß genug.",
    "answer": "nicht",
    "alts": [
     "nicht"
    ],
    "explain": "Vor Adjektiven steht nicht."
   },
   {
    "type": "choice",
    "q": "Wann benutzt man „kein“?",
    "options": [
     "Vor einem Nomen ohne Artikel oder mit ein",
     "Vor Adjektiven",
     "Vor Verben"
    ],
    "answer": 0,
    "explain": "kein ersetzt „ein“ oder den Nullartikel."
   },
   {
    "type": "gap",
    "text": "Ich gehe heute ___ ins Kino.",
    "answer": "nicht",
    "alts": [
     "nicht"
    ],
    "explain": "nicht steht vor der Ortsangabe mit Präposition."
   },
   {
    "type": "gap",
    "text": "Sie trinkt ___ Alkohol.",
    "answer": "keinen",
    "alts": [
     "keinen"
    ],
    "explain": "der Alkohol, Akkusativ → keinen."
   },
   {
    "type": "choice",
    "q": "„Nein, danke.“ und „Kein Problem.“ — was stimmt?",
    "options": [
     "nein antwortet, kein steht vor Nomen",
     "beides ist gleich",
     "kein antwortet auf Fragen"
    ],
    "answer": 0,
    "explain": "nein ist die Antwort, kein gehört zum Nomen."
   },
   {
    "type": "gap",
    "text": "Das war ___ gute Idee.",
    "answer": "keine",
    "alts": [
     "keine"
    ],
    "explain": "die Idee → keine Idee."
   },
   {
    "type": "gap",
    "text": "Ich kann heute ___ kommen.",
    "answer": "nicht",
    "alts": [
     "nicht"
    ],
    "explain": "Verneinung eines Verbs → nicht."
   },
   {
    "type": "gap",
    "text": "Hast du ___ Geschwister?",
    "answer": "keine",
    "alts": [
     "keine"
    ],
    "explain": "Plural ohne Artikel → keine."
   },
   {
    "type": "choice",
    "q": "Wo steht „nicht“ meistens im Hauptsatz?",
    "options": [
     "Am Ende, aber vor dem zweiten Verbteil",
     "Immer ganz vorn",
     "Immer nach dem Subjekt"
    ],
    "answer": 0,
    "explain": "Ich kann heute nicht kommen."
   }
  ]
 },
 {
  "id": "imperativ",
  "title": "Imperativ — bitten, raten, anweisen",
  "level": "A2",
  "emoji": "👉",
  "words": [],
  "exercises": [
   {
    "type": "gap",
    "text": "___ bitte lauter! (du, sprechen)",
    "answer": "Sprich",
    "alts": [
     "Sprich"
    ],
    "explain": "du-Form: Stamm ohne -st. sprechen → sprich."
   },
   {
    "type": "gap",
    "text": "___ Sie bitte hier. (warten)",
    "answer": "Warten",
    "alts": [
     "Warten"
    ],
    "explain": "Sie-Form: Infinitiv + Sie."
   },
   {
    "type": "gap",
    "text": "___ mir bitte kurz! (du, helfen)",
    "answer": "Hilf",
    "alts": [
     "Hilf"
    ],
    "explain": "helfen → hilf (Vokalwechsel e→i)."
   },
   {
    "type": "gap",
    "text": "___ nicht so schnell! (ihr, fahren)",
    "answer": "Fahrt",
    "alts": [
     "Fahrt"
    ],
    "explain": "ihr-Form: wie im Präsens ohne Pronomen."
   },
   {
    "type": "gap",
    "text": "___ Sie bitte Platz.",
    "answer": "Nehmen",
    "alts": [
     "Nehmen"
    ],
    "explain": "Nehmen Sie Platz — höflich."
   },
   {
    "type": "choice",
    "q": "Was klingt am höflichsten?",
    "options": [
     "Könnten Sie mir bitte helfen?",
     "Helfen Sie mir!",
     "Hilf mir."
    ],
    "answer": 0,
    "explain": "Konjunktiv II + bitte ist am höflichsten."
   },
   {
    "type": "gap",
    "text": "___ keine Angst! (du, haben)",
    "answer": "Hab",
    "alts": [
     "Hab",
     "Habe"
    ],
    "explain": "haben → hab."
   },
   {
    "type": "gap",
    "text": "___ ruhig, es ist nicht schlimm. (du, sein)",
    "answer": "Sei",
    "alts": [
     "Sei"
    ],
    "explain": "sein → sei (unregelmäßig)."
   },
   {
    "type": "choice",
    "q": "Welches Wort macht eine Anweisung freundlicher?",
    "options": [
     "bitte / mal / doch",
     "sofort",
     "überhaupt"
    ],
    "answer": 0,
    "explain": "Mach das mal bitte. — kleine Wörter, große Wirkung."
   },
   {
    "type": "gap",
    "text": "___ Sie bitte die Tür zu. (zumachen)",
    "answer": "Machen",
    "alts": [
     "Machen"
    ],
    "explain": "Trennbar: Machen Sie die Tür zu."
   },
   {
    "type": "gap",
    "text": "___ dich, wir kommen zu spät! (du, beeilen)",
    "answer": "Beeil",
    "alts": [
     "Beeil"
    ],
    "explain": "sich beeilen → beeil dich."
   },
   {
    "type": "gap",
    "text": "___ langsamer, bitte. (Sie, sprechen)",
    "answer": "Sprechen",
    "alts": [
     "Sprechen"
    ],
    "explain": "Sprechen Sie bitte langsamer."
   },
   {
    "type": "choice",
    "q": "„Geh!“ ist:",
    "options": [
     "die du-Form",
     "die Sie-Form",
     "die ihr-Form"
    ],
    "answer": 0,
    "explain": "gehen → geh (du)."
   },
   {
    "type": "gap",
    "text": "___ euch das bitte an. (ihr, ansehen)",
    "answer": "Seht",
    "alts": [
     "Seht"
    ],
    "explain": "Seht euch das an."
   }
  ]
 },
 {
  "id": "komparativ",
  "title": "Vergleichen — größer, am größten",
  "level": "A2",
  "emoji": "📊",
  "words": [],
  "exercises": [
   {
    "type": "gap",
    "text": "Berlin ist ___ als München.",
    "answer": "größer",
    "alts": [
     "größer",
     "grösser"
    ],
    "explain": "groß → größer (mit Umlaut)."
   },
   {
    "type": "gap",
    "text": "Der Zug ist schneller ___ der Bus.",
    "answer": "als",
    "alts": [
     "als"
    ],
    "explain": "Nach dem Komparativ steht als."
   },
   {
    "type": "gap",
    "text": "Mein Bruder ist so alt ___ ich.",
    "answer": "wie",
    "alts": [
     "wie"
    ],
    "explain": "Bei Gleichheit: so … wie."
   },
   {
    "type": "gap",
    "text": "Das ist der ___ Tag im Jahr. (kurz)",
    "answer": "kürzeste",
    "alts": [
     "kürzeste"
    ],
    "explain": "kurz → kürzer → der kürzeste."
   },
   {
    "type": "gap",
    "text": "Sie spricht ___ Deutsch als ich. (gut)",
    "answer": "besser",
    "alts": [
     "besser"
    ],
    "explain": "gut → besser → am besten (unregelmäßig)."
   },
   {
    "type": "gap",
    "text": "Am ___ mag ich Kaffee. (gern)",
    "answer": "liebsten",
    "alts": [
     "liebsten"
    ],
    "explain": "gern → lieber → am liebsten."
   },
   {
    "type": "choice",
    "q": "Welche Steigerung ist unregelmäßig?",
    "options": [
     "viel – mehr – am meisten",
     "klein – kleiner – am kleinsten",
     "schnell – schneller – am schnellsten"
    ],
    "answer": 0,
    "explain": "viel, gut, gern und hoch sind unregelmäßig."
   },
   {
    "type": "gap",
    "text": "Heute ist es ___ als gestern. (warm)",
    "answer": "wärmer",
    "alts": [
     "wärmer"
    ],
    "explain": "warm → wärmer."
   },
   {
    "type": "gap",
    "text": "Das war das ___ Essen meines Lebens. (gut)",
    "answer": "beste",
    "alts": [
     "beste"
    ],
    "explain": "gut → besser → das beste."
   },
   {
    "type": "gap",
    "text": "Je mehr ich übe, ___ leichter wird es.",
    "answer": "desto",
    "alts": [
     "desto",
     "umso"
    ],
    "explain": "je … desto/umso."
   },
   {
    "type": "choice",
    "q": "„Sie ist genauso groß wie er.“ bedeutet:",
    "options": [
     "Beide sind gleich groß.",
     "Sie ist größer.",
     "Er ist größer."
    ],
    "answer": 0,
    "explain": "genauso … wie = gleich."
   },
   {
    "type": "gap",
    "text": "Der Winter war ___ als sonst. (kalt)",
    "answer": "kälter",
    "alts": [
     "kälter"
    ],
    "explain": "kalt → kälter."
   },
   {
    "type": "gap",
    "text": "Von allen Wegen ist dieser am ___. (kurz)",
    "answer": "kürzesten",
    "alts": [
     "kürzesten"
    ],
    "explain": "am kürzesten."
   },
   {
    "type": "gap",
    "text": "Ich stehe jetzt ___ auf als früher. (früh)",
    "answer": "früher",
    "alts": [
     "früher"
    ],
    "explain": "früh → früher."
   }
  ]
 },
 {
  "id": "reflexive-verben",
  "title": "sich freuen, sich beeilen — reflexive Verben",
  "level": "A2",
  "emoji": "🔄",
  "words": [],
  "exercises": [
   {
    "type": "gap",
    "text": "Ich freue ___ auf das Wochenende.",
    "answer": "mich",
    "alts": [
     "mich"
    ],
    "explain": "sich freuen + Akkusativ: mich, dich, sich …"
   },
   {
    "type": "gap",
    "text": "Beeil ___ bitte, der Bus kommt!",
    "answer": "dich",
    "alts": [
     "dich"
    ],
    "explain": "sich beeilen → beeil dich."
   },
   {
    "type": "gap",
    "text": "Wir treffen ___ um acht vor dem Kino.",
    "answer": "uns",
    "alts": [
     "uns"
    ],
    "explain": "sich treffen → wir treffen uns."
   },
   {
    "type": "gap",
    "text": "Sie interessiert ___ für Technik.",
    "answer": "sich",
    "alts": [
     "sich"
    ],
    "explain": "sich interessieren für + Akkusativ."
   },
   {
    "type": "gap",
    "text": "Setzen Sie ___ bitte.",
    "answer": "sich",
    "alts": [
     "sich"
    ],
    "explain": "Höflichkeitsform: Setzen Sie sich."
   },
   {
    "type": "gap",
    "text": "Ich muss ___ noch die Hände waschen.",
    "answer": "mir",
    "alts": [
     "mir"
    ],
    "explain": "Mit Körperteil und Objekt: Dativ (mir die Hände)."
   },
   {
    "type": "choice",
    "q": "Welches Verb ist immer reflexiv?",
    "options": [
     "sich beeilen",
     "waschen",
     "treffen"
    ],
    "answer": 0,
    "explain": "sich beeilen geht nicht ohne Pronomen."
   },
   {
    "type": "gap",
    "text": "Er ärgert ___ über den Brief vom Amt.",
    "answer": "sich",
    "alts": [
     "sich"
    ],
    "explain": "sich ärgern über + Akkusativ."
   },
   {
    "type": "gap",
    "text": "Habt ihr ___ schon angemeldet?",
    "answer": "euch",
    "alts": [
     "euch"
    ],
    "explain": "ihr → euch."
   },
   {
    "type": "gap",
    "text": "Ich kann ___ den Namen nicht merken.",
    "answer": "mir",
    "alts": [
     "mir"
    ],
    "explain": "sich etwas merken → Dativ."
   },
   {
    "type": "choice",
    "q": "Wo steht das Reflexivpronomen im Hauptsatz?",
    "options": [
     "Direkt nach dem Verb",
     "Ganz am Ende",
     "Vor dem Subjekt"
    ],
    "answer": 0,
    "explain": "Ich freue mich sehr."
   },
   {
    "type": "gap",
    "text": "Wir unterhalten ___ oft auf Deutsch.",
    "answer": "uns",
    "alts": [
     "uns"
    ],
    "explain": "sich unterhalten → uns."
   },
   {
    "type": "gap",
    "text": "Bitte melden Sie ___ bis Freitag.",
    "answer": "sich",
    "alts": [
     "sich"
    ],
    "explain": "sich melden."
   },
   {
    "type": "gap",
    "text": "Sie kümmert ___ um ihre Eltern.",
    "answer": "sich",
    "alts": [
     "sich"
    ],
    "explain": "sich kümmern um + Akkusativ."
   }
  ]
 },
 {
  "id": "weil-dass-wenn",
  "title": "weil, dass, wenn — Sätze verbinden",
  "level": "A2",
  "emoji": "🔗",
  "words": [],
  "exercises": [
   {
    "type": "gap",
    "text": "Ich komme später, ___ ich noch arbeiten muss.",
    "answer": "weil",
    "alts": [
     "weil"
    ],
    "explain": "weil = Grund. Verb ans Ende."
   },
   {
    "type": "gap",
    "text": "Ich hoffe, ___ du bald gesund wirst.",
    "answer": "dass",
    "alts": [
     "dass"
    ],
    "explain": "dass leitet den Inhalt ein."
   },
   {
    "type": "gap",
    "text": "___ ich Zeit habe, rufe ich dich an.",
    "answer": "Wenn",
    "alts": [
     "Wenn"
    ],
    "explain": "wenn = Bedingung oder wiederholte Zeit."
   },
   {
    "type": "gap",
    "text": "Er sagt, ___ der Termin abgesagt ist.",
    "answer": "dass",
    "alts": [
     "dass"
    ],
    "explain": "nach sagen, denken, hoffen → dass."
   },
   {
    "type": "choice",
    "q": "Wo steht das Verb im Nebensatz mit weil?",
    "options": [
     "Ganz am Ende",
     "An zweiter Stelle",
     "Am Anfang"
    ],
    "answer": 0,
    "explain": "…, weil ich müde bin."
   },
   {
    "type": "gap",
    "text": "Ich bleibe zu Hause, ___ es regnet.",
    "answer": "weil",
    "alts": [
     "weil"
    ],
    "explain": "Grund → weil."
   },
   {
    "type": "choice",
    "q": "Was ist der Unterschied zwischen weil und denn?",
    "options": [
     "denn ist ein Hauptsatz-Wort, das Verb bleibt an Position 2",
     "Es gibt keinen",
     "denn schickt das Verb ans Ende"
    ],
    "answer": 0,
    "explain": "Ich bleibe zu Hause, denn es regnet."
   },
   {
    "type": "gap",
    "text": "___ du fertig bist, sag mir bitte Bescheid.",
    "answer": "Wenn",
    "alts": [
     "Wenn"
    ],
    "explain": "Bedingung/Zeitpunkt → wenn."
   },
   {
    "type": "gap",
    "text": "Es ist gut, ___ du gefragt hast.",
    "answer": "dass",
    "alts": [
     "dass"
    ],
    "explain": "dass nach einer Bewertung."
   },
   {
    "type": "gap",
    "text": "Ich lerne Deutsch, ___ ich hier arbeiten möchte.",
    "answer": "weil",
    "alts": [
     "weil"
    ],
    "explain": "Grund → weil."
   },
   {
    "type": "choice",
    "q": "„Als“ oder „wenn“ für die Vergangenheit einmalig?",
    "options": [
     "als",
     "wenn",
     "beides"
    ],
    "answer": 0,
    "explain": "Als ich klein war … (einmalig, Vergangenheit)."
   },
   {
    "type": "gap",
    "text": "Ich weiß nicht, ___ der Kurs beginnt.",
    "answer": "wann",
    "alts": [
     "wann"
    ],
    "explain": "Indirekte Frage mit Fragewort: wann."
   },
   {
    "type": "gap",
    "text": "Sie fragt, ___ du morgen kommst.",
    "answer": "ob",
    "alts": [
     "ob"
    ],
    "explain": "Indirekte Ja/Nein-Frage: ob."
   },
   {
    "type": "gap",
    "text": "Wir gehen spazieren, ___ das Wetter gut ist.",
    "answer": "wenn",
    "alts": [
     "wenn"
    ],
    "explain": "Bedingung → wenn."
   }
  ]
 },
 {
  "id": "praepositionen-dativ",
  "title": "aus, bei, mit, nach, seit, von, zu",
  "level": "A2",
  "emoji": "🧭",
  "words": [],
  "exercises": [
   {
    "type": "gap",
    "text": "Ich komme ___ der Türkei.",
    "answer": "aus",
    "alts": [
     "aus"
    ],
    "explain": "Herkunft aus einem Land/Raum: aus."
   },
   {
    "type": "gap",
    "text": "Ich arbeite ___ einer Bäckerei.",
    "answer": "bei",
    "alts": [
     "bei"
    ],
    "explain": "Arbeitsort/Firma: bei."
   },
   {
    "type": "gap",
    "text": "Wir fahren ___ dem Auto.",
    "answer": "mit",
    "alts": [
     "mit"
    ],
    "explain": "Verkehrsmittel: mit."
   },
   {
    "type": "gap",
    "text": "___ der Arbeit gehe ich einkaufen.",
    "answer": "Nach",
    "alts": [
     "Nach"
    ],
    "explain": "zeitliche Folge: nach."
   },
   {
    "type": "gap",
    "text": "Ich wohne ___ zwei Jahren hier.",
    "answer": "seit",
    "alts": [
     "seit"
    ],
    "explain": "Zeitpunkt in der Vergangenheit bis jetzt: seit."
   },
   {
    "type": "gap",
    "text": "Das ist ein Geschenk ___ meiner Schwester.",
    "answer": "von",
    "alts": [
     "von"
    ],
    "explain": "Herkunft von einer Person: von."
   },
   {
    "type": "gap",
    "text": "Ich gehe heute ___ Arzt.",
    "answer": "zum",
    "alts": [
     "zum"
    ],
    "explain": "zu + dem = zum."
   },
   {
    "type": "gap",
    "text": "Sie fährt ___ Schule mit dem Rad.",
    "answer": "zur",
    "alts": [
     "zur"
    ],
    "explain": "zu + der = zur."
   },
   {
    "type": "choice",
    "q": "Welche Präposition steht immer mit Dativ?",
    "options": [
     "mit",
     "für",
     "ohne"
    ],
    "answer": 0,
    "explain": "für, ohne, durch, gegen, um stehen mit Akkusativ."
   },
   {
    "type": "gap",
    "text": "Kommst du mit ___ Kino? (das)",
    "answer": "ins",
    "alts": [
     "ins"
    ],
    "explain": "in + das = ins (Richtung, Akkusativ)."
   },
   {
    "type": "gap",
    "text": "Ich bin ___ Hause.",
    "answer": "zu",
    "alts": [
     "zu"
    ],
    "explain": "Feste Wendung: zu Hause (Ort), nach Hause (Richtung)."
   },
   {
    "type": "gap",
    "text": "Ich fahre jetzt ___ Hause.",
    "answer": "nach",
    "alts": [
     "nach"
    ],
    "explain": "Richtung: nach Hause."
   },
   {
    "type": "gap",
    "text": "Der Brief ist ___ Amt.",
    "answer": "vom",
    "alts": [
     "vom"
    ],
    "explain": "von + dem = vom."
   },
   {
    "type": "choice",
    "q": "„bei“ oder „mit“? — Ich wohne ___ meinen Eltern.",
    "options": [
     "bei",
     "mit",
     "zu"
    ],
    "answer": 0,
    "explain": "Wohnen bei jemandem."
   }
  ]
 },
 {
  "id": "praeteritum-sein-haben",
  "title": "war, hatte, konnte — die Vergangenheit zum Sprechen",
  "level": "A2",
  "emoji": "🕰️",
  "words": [],
  "exercises": [
   {
    "type": "gap",
    "text": "Gestern ___ ich krank.",
    "answer": "war",
    "alts": [
     "war"
    ],
    "explain": "sein → ich war."
   },
   {
    "type": "gap",
    "text": "Wir ___ gestern keine Zeit.",
    "answer": "hatten",
    "alts": [
     "hatten"
    ],
    "explain": "haben → wir hatten."
   },
   {
    "type": "gap",
    "text": "___ du schon einmal in Berlin?",
    "answer": "Warst",
    "alts": [
     "Warst"
    ],
    "explain": "du → warst."
   },
   {
    "type": "gap",
    "text": "Als Kind ___ ich sehr schüchtern.",
    "answer": "war",
    "alts": [
     "war"
    ],
    "explain": "Beschreibung in der Vergangenheit → war."
   },
   {
    "type": "gap",
    "text": "Er ___ leider nicht kommen.",
    "answer": "konnte",
    "alts": [
     "konnte"
    ],
    "explain": "können → konnte."
   },
   {
    "type": "gap",
    "text": "Ich ___ gestern lange arbeiten.",
    "answer": "musste",
    "alts": [
     "musste"
    ],
    "explain": "müssen → musste."
   },
   {
    "type": "gap",
    "text": "Wir ___ als Kinder nicht lange fernsehen.",
    "answer": "durften",
    "alts": [
     "durften"
    ],
    "explain": "dürfen → durften."
   },
   {
    "type": "choice",
    "q": "Warum sagt man „ich war“ und nicht „ich bin gewesen“?",
    "options": [
     "Bei sein, haben und Modalverben benutzt man meist das Präteritum",
     "Beides ist falsch",
     "Perfekt gibt es dort nicht"
    ],
    "answer": 0,
    "explain": "Beim Sprechen: war, hatte, konnte, musste."
   },
   {
    "type": "gap",
    "text": "Es ___ sehr kalt an dem Tag.",
    "answer": "war",
    "alts": [
     "war"
    ],
    "explain": "es war."
   },
   {
    "type": "gap",
    "text": "Sie ___ damals in München.",
    "answer": "wohnte",
    "alts": [
     "wohnte"
    ],
    "explain": "Regelmäßig: Stamm + te."
   },
   {
    "type": "gap",
    "text": "___ ihr gestern auf dem Fest?",
    "answer": "Wart",
    "alts": [
     "Wart"
    ],
    "explain": "ihr → wart."
   },
   {
    "type": "gap",
    "text": "Ich ___ keine Lust, aber ich bin trotzdem gegangen.",
    "answer": "hatte",
    "alts": [
     "hatte"
    ],
    "explain": "haben → hatte."
   },
   {
    "type": "choice",
    "q": "Welche Form ist Präteritum?",
    "options": [
     "ich wollte",
     "ich habe gewollt",
     "ich will"
    ],
    "answer": 0,
    "explain": "wollen → wollte."
   },
   {
    "type": "gap",
    "text": "Der Bus ___ Verspätung, deshalb kam ich zu spät.",
    "answer": "hatte",
    "alts": [
     "hatte"
    ],
    "explain": "haben → hatte."
   }
  ]
 }
];

  var da = {};
  g.themes.forEach(function (t) { da[t.id] = 1; });
  NEU.forEach(function (t) { if (!da[t.id]) g.themes.push(t); });
})();
